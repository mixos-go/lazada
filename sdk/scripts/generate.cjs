/**
 * Generator: parses every reference doc under `../../references/api` and emits
 * a typed, category-scoped SDK under `../src/generated`.
 *
 * Lazada specifics handled here:
 *  - Response nesting via dot-notation (`data.orders.address_billing.address1`).
 *  - Region-based endpoints (no environment dimension).
 *  - Request params are always query / form params (Lazop-style).
 *
 * Run: `npm run generate` (from sdk/).
 */
const fs = require('fs')
const path = require('path')

const API_ROOT = path.join(__dirname, '../../references/api')
const OUT_DIR = path.join(__dirname, '../src/generated')

const cats = fs
  .readdirSync(API_ROOT)
  .filter((d) => fs.statSync(path.join(API_ROOT, d)).isDirectory())
  .sort()

// ---------- Markdown helpers ----------

function splitSections(content) {
  const sections = {}
  let cur = null
  for (const line of content.split('\n')) {
    const m = line.match(/^## (.+)/)
    if (m) {
      cur = m[1].trim()
      sections[cur] = []
      continue
    }
    if (cur) sections[cur].push(line)
  }
  return sections
}

function parseTable(lines) {
  const rows = []
  let header = null
  let headerIndex = -1
  for (let i = 0; i < lines.length; i++) {
    const t = lines[i].trim()
    if (!t.startsWith('|')) continue
    const cells = t.split('|').slice(1, -1).map((c) => c.trim().replace(/`/g, ''))
    if (cells.every((c) => /^[-: ]+$/.test(c))) continue
    if (!header && /^(field|name|property|properties)$/i.test(cells[0] || '')) {
      header = cells
      headerIndex = i
      continue
    }
    if (header) {
      rows.push({ cells, header })
    }
  }
  return { rows, header }
}

function colIdx(header, names) {
  if (!header) return -1
  return header.findIndex((h) => names.includes(h.toLowerCase()))
}

const TYPE_IDX_NAMES = ['type', 'datatype']
const REQ_IDX_NAMES = ['required', 'mandatory']

// ---------- Naming helpers ----------

function pascal(str) {
  return str
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join('')
}

function camel(str) {
  const p = pascal(str)
  return p[0].toLowerCase() + p.slice(1)
}

function safeIdentifier(name) {
  const c = camel(name)
  if (/^[A-Za-z_$]/.test(c)) return c
  return '_' + c
}

function moduleName(cat) {
  return pascal(cat.replace(/[^A-Za-z0-9]+/g, ' '))
}

// ---------- Type mapping (Lazada -> TS) ----------

function mapBaseType(type) {
  const t = (type || '').trim().toLowerCase()
  if (t.includes('[]')) {
    const inner = mapBaseType(t.replace(/\[\]$/, ''))
    return `Array<${inner}>`
  }
  if (/^(int|int32|int64|long|float|double|number|timestamp|datetime|date|bigdecimal?|money)$/.test(t)) return 'number'
  if (t === 'boolean' || t === 'bool') return 'boolean'
  if (/^(string|text|url|enum|json|timezone|locale)$/.test(t)) return 'string'
  if (t === 'object' || t === 'map' || t === 'jsonobject') return 'Record<string, unknown>'
  if (t.includes('string[')) return 'Array<string>'
  if (t.includes('number[')) return 'Array<number>'
  return 'unknown'
}

// ---------- Build nested data type from dot-notation response table ----------

/**
 * Returns a tree of { ownType, children } given a path->type map.
 * Path keys like "data.orders.address_billing.address1".
 */
function buildTree(paths) {
  const root = { children: new Map(), type: null, rawType: null }
  for (const { key, type } of paths) {
    const segs = key.split('.')
    let node = root
    for (let i = 0; i < segs.length; i++) {
      const seg = segs[i]
      if (!node.children.has(seg)) node.children.set(seg, { children: new Map(), type: null, rawType: null })
      const child = node.children.get(seg)
      if (i === segs.length - 1) {
        child.type = mapBaseType(type)
        child.rawType = type
      }
      node = child
    }
  }
  // Second pass: give intermediate nodes their own rawType from any row.
  for (const { key, type } of paths) {
    const segs = key.split('.')
    let node = root
    for (const seg of segs) {
      node = node.children.get(seg)
      if (!node) break
      // Assign the type of the shortest path that ends at this node.
      if (node.rawType === null || node.rawType === 'Object') {
        node.rawType = type
        node.type = mapBaseType(type)
      }
    }
  }
  return root
}

function emitNode(node, indent, padStr) {
  const pad = padStr.repeat(indent)
  const lines = []
  for (const [name, child] of node.children) {
    const childProps = [...child.children.keys()]
    if (childProps.length > 0) {
      // object node: array if its own type was Object[]
      const isArray = /\[\]/.test(child.rawType || '')
      const innerLines = emitNode(child, indent + 1, padStr)
      lines.push(`${pad}${JSON.stringify(name)}?: ${isArray ? 'Array<{' : '{'}`)
      lines.push(innerLines)
      lines.push(`${pad}${isArray ? '}>' : '}'},`)
    } else {
      const t = child.type
      lines.push(`${pad}${JSON.stringify(name)}?: ${t},`)
    }
  }
  return lines.join('\n')
}

function dataInterface(name, paths) {
  const tree = buildTree(paths)
  const pad = '  '
  const lines = [`export interface ${name} {`]
  for (const [rootKey, node] of tree.children) {
    const childProps = [...node.children.keys()]
    if (childProps.length > 0) {
      const isArray = /\[\]/.test(node.rawType || '')
      const inner = emitNode(node, 1, pad, false)
      lines.push(`${pad}${JSON.stringify(rootKey)}?: ${isArray ? 'Array<{' : '{'}`)
      lines.push(inner)
      lines.push(`${pad}${isArray ? '}>' : '}'},`)
    } else {
      lines.push(`${pad}${JSON.stringify(rootKey)}?: ${node.type},`)
    }
  }
  lines.push(`}`)
  return lines.join('\n')
}

// ---------- Build request interface ----------

function requestInterface(name, table) {
  const pad = '  '
  const lines = [`export interface ${name} {`]
  const seen = new Set()
  const typeIdx = colIdx(table.header, TYPE_IDX_NAMES)
  const reqIdx = colIdx(table.header, REQ_IDX_NAMES)
  const descIdx = colIdx(table.header, ['description'])
  for (const { cells, header } of table.rows) {
    const fieldName = head(cells)
    if (!fieldName || seen.has(fieldName)) continue
    seen.add(fieldName)
    const type = typeIdx >= 0 ? cells[typeIdx] : (header.length > 1 ? cells[1] : '')
    const reqVal = reqIdx >= 0 ? cells[reqIdx] : undefined
    const required = reqVal !== undefined && /^yes$/i.test(String(reqVal).trim())
    const ts = mapBaseType(type)
    const desc = descIdx >= 0 ? cells[descIdx] : ''
    const jdoc = desc.replace(/\n/g, ' ').trim()
    if (jdoc) lines.push(`${pad}/** ${jdoc} */`)
    lines.push(`${pad}${JSON.stringify(fieldName)}${required ? '' : '?'}: ${ts},`)
  }
  lines.push(`}`)
  return lines.join('\n')
}

function head(cells) {
  return (cells[0] || '').replace(/`/g, '').trim()
}

// ---------- Doc parsing ----------

function parseDoc(cat, file, content) {
  const sections = splitSections(content)
  const method = ((content.match(/^\*\*Method:\*\*\s*(.+)/m) || [])[1] || 'GET').trim().toUpperCase()
  // "GET / POST" -> GET
  const normMethod = method.includes('/') ? method.split(/\s*\/\s*/)[0] : method
  const methodFinal = normMethod === 'POST' ? 'POST' : 'GET'
  const httpPath = ((content.match(/^\*\*HTTP Path:\*\*\s*(.+)/m) || [])[1] || '').trim()
  const apiName = file.replace(/\.md$/, '')

  const reqTable = parseTable(sections['Request Parameters'] || [])
  const respTable = parseTable(sections['Response Parameters'] || [])

  // Build request param names list + response path->type map.
  const reqNames = reqTable.rows.map((r) => head(r.cells)).filter(Boolean)
  const respPaths = []
  const typeIdx = colIdx(respTable.header, TYPE_IDX_NAMES)
  for (const { cells } of respTable.rows) {
    const key = head(cells)
    if (!key) continue
    const type = typeIdx >= 0 ? cells[typeIdx] : (cells.length > 1 ? cells[1] : '')
    respPaths.push({ key, type })
  }

  return { cat, apiName, method: methodFinal, httpPath, reqNames, respPaths, reqTable }
}

// ---------- Emit one category ----------

function emitCategory(cat) {
  const dir = path.join(API_ROOT, cat)
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md')).sort()

  const mod = moduleName(cat)
  const className = `Lazada${mod}Api`

  const typeParts = []
  const methodParts = []

  for (const file of files) {
    const content = fs.readFileSync(path.join(dir, file), 'utf8')
    const doc = parseDoc(cat, file, content)
    const { apiName, method, httpPath, reqNames, respPaths, reqTable } = doc

    const Pascal = pascal(apiName)
    let reqType = Pascal
    let dataType = Pascal
    let respType = Pascal
    if (!/Request$/.test(Pascal)) reqType = `${Pascal}Request`
    if (!/Data$/.test(Pascal)) dataType = `${Pascal}Data`
    if (!/Response$/.test(Pascal)) respType = `${Pascal}Response`

    // request type: param table (or empty)
    let reqOut
    if (reqNames.length && reqTable.header) {
      reqOut = requestInterface(reqType, reqTable)
    } else {
      reqOut = `export interface ${reqType} {}\n`
    }

    // response type: nested data from dot-notation
    if (respPaths.length) {
      typeParts.push(reqOut + '\n' + dataInterface(dataType, respPaths) + `\nexport type ${respType} = ApiResponse<${dataType}>\n`)
    } else {
      typeParts.push(reqOut + `\ntype ${dataType} = Record<string, unknown>\nexport type ${respType} = ApiResponse<${dataType}>\n`)
    }

    const specJson = { method, path: httpPath, params: reqNames }
    const m = safeIdentifier(apiName)

    methodParts.push(`  /**
   * ${apiName.replace(/_/g, ' ')}
   * ${httpPath} (${method})
   */
  async ${m}(params: ${reqType}, opts?: LazadaRequestOptions): Promise<${respType}> {
    return this.client.request(${JSON.stringify(specJson)}, params as unknown as Record<string, unknown>, opts)
  }`)
  }

  const fileContent = `// AUTO-GENERATED from Lazada reference docs (references/api/${cat}).
// Do not edit by hand; run \`npm run generate\` in sdk/.

import { LazadaClient } from '../../client'
import { ApiResponse, LazadaRequestOptions } from '../../types'

${typeParts.join('\n')}

export class ${className} {
  constructor(private client: LazadaClient) {}

${methodParts.join('\n\n')}
}
`

  fs.mkdirSync(path.join(OUT_DIR, mod), { recursive: true })
  fs.writeFileSync(path.join(OUT_DIR, mod, 'index.ts'), fileContent)
  return mod
}

// ---------- Main ----------

function main() {
  fs.rmSync(OUT_DIR, { recursive: true, force: true })
  fs.mkdirSync(OUT_DIR, { recursive: true })

  const modules = cats.map((cat) => emitCategory(cat))

  const barrel = modules.map((mod) => `export { Lazada${mod}Api } from './${mod}'`).join('\n')
  fs.writeFileSync(
    path.join(OUT_DIR, 'index.ts'),
    `// AUTO-GENERATED barrel. Run \`npm run generate\`.\n${barrel}\n`,
  )

  let apiCount = 0
  for (const cat of cats) {
    apiCount += fs.readdirSync(path.join(API_ROOT, cat)).filter((f) => f.endsWith('.md')).length
  }
  console.log(`Generated ${cats.length} category modules from ${cats.length} categories`)
  console.log(`APIs covered: ${apiCount}`)
}

module.exports = { parseTable, splitSections, mapBaseType, pascal, camel, colIdx }

if (require.main === module) {
  main()
}
