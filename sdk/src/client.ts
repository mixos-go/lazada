import * as crypto from 'crypto'
import {
  LazadaCredentials,
  LazadaError,
  LazadaErrorResponse,
  LazadaRegion,
  LazadaRequestOptions,
} from './types'
import { resolveHost } from './endpoints'

export type HttpMethod = 'GET' | 'POST'

/** Internal normalized request description for a generated API call. */
export interface ApiCallSpec {
  method: HttpMethod
  path: string
  /** All business params (sent as query for GET, form body for POST). */
  params: string[]
}

/**
 * Compute the Lazada HMAC-SHA256 signature.
 *
 * 1. Concatenate all (common + business) parameters as `keyvalue` with no
 *    separators; exclude the `sign` parameter itself.
 * 2. Sort the parameter keys in ASCII ascending order.
 * 3. Prepend the API path: `stringToSign = apiPath + concatenated`.
 * 4. `sign = uppercase(hex(HMAC-SHA256(app_secret, stringToSign)))`.
 */
export function sign(
  appSecret: string,
  path: string,
  params: Record<string, unknown>,
  exclude: string[] = ['sign'],
): string {
  const keys = Object.keys(params)
    .filter((k) => !exclude.includes(k))
    .sort()
  let str = path
  for (const k of keys) {
    str += k + (params[k] === undefined || params[k] === null ? '' : String(params[k]))
  }
  return crypto
    .createHmac('sha256', appSecret)
    .update(str)
    .digest('hex')
    .toUpperCase()
}

function toMillis(value: number | string | Date | undefined): number {
  if (value === undefined) return Date.now()
  if (value instanceof Date) return value.getTime()
  const n = Number(value)
  // Interpret a < 1e12 numeric as seconds and scale to ms.
  if (typeof value === 'number' && n < 1e12) return Math.floor(n * 1000)
  if (typeof value === 'string' && /^\d+$/.test(value)) {
    if (value.length <= 10) return Number(value) * 1000
  }
  return head(n)
}

function head(n: number): number {
  return Number.isFinite(n) ? Math.floor(n) : Date.now()
}

export interface LazadaClientConfig {
  credentials: LazadaCredentials
  region?: LazadaRegion | string
  /** Default access_token applied to every call unless overridden. */
  accessToken?: string
  /** Custom fetch impl (defaults to globalThis.fetch). */
  fetch?: typeof fetch
  /** Response ttl in ms until throwing on non-2xx (default false). */
  throwOnHttpError?: boolean
}

/**
 * Low-level HTTP client for the Lazada Open Platform API.
 *
 * Handles endpoint resolution, HMAC-SHA256 signing, common-parameter
 * injection and JSON (un)wrapping. Category clients and generated per-API
 * methods are built on top of this.
 */
export class LazadaClient {
  readonly region: LazadaRegion | string
  private readonly credentials: LazadaCredentials
  private readonly defaults: { accessToken?: string }
  private readonly fetchImpl: typeof fetch
  private readonly throwOnHttpError: boolean

  constructor(cfg: LazadaClientConfig) {
    this.credentials = cfg.credentials
    this.region = cfg.region ?? 'singapore'
    this.defaults = { accessToken: cfg.accessToken }
    this.fetchImpl = cfg.fetch ?? (globalThis as any).fetch
    this.throwOnHttpError = cfg.throwOnHttpError ?? false
    if (typeof this.fetchImpl !== 'function') {
      throw new Error(
        'Fetch is not available. Use Node 18+ or supply a `fetch` implementation in the client config.',
      )
    }
  }

  /**
   * Perform a signed request.
   *
   * @param spec    The generated API call specification.
   * @param params  Flat map of the API's own business parameters.
   * @param opts    Per-call overrides (region, access_token, ...).
   */
  async request(
    spec: ApiCallSpec,
    params: Record<string, unknown>,
    opts: LazadaRequestOptions = {},
  ): Promise<any> {
    const region = (opts.region ?? this.region).toLowerCase() as LazadaRegion
    const host = resolveHost(region)
    const accessToken = opts.access_token ?? this.defaults.accessToken
    const timestamp = toMillis(opts.timestamp)

    const baseUrl = `${host}/rest${spec.path}`

    // Build the full query param set (common + business). GET sends all as query;
    // POST also keeps params as query so signing is identical and deterministic.
    const query: Record<string, any> = {}
    query.app_key = this.credentials.app_key
    query.timestamp = String(timestamp)
    query.sign_method = 'sha256'
    for (const k of spec.params) {
      const v = params[k]
      if (v !== undefined && v !== null) {
        query[k] = v
      }
    }
    if (accessToken !== undefined) query.access_token = accessToken

    // Sign over all params (excluding `sign`).
    query.sign = sign(this.credentials.app_secret, spec.path, query)

    const search = new URLSearchParams()
    for (const [k, v] of Object.entries(query)) {
      search.set(k, typeof v === 'object' ? JSON.stringify(v) : String(v))
    }

    const url = `${baseUrl}?${search.toString()}`

    const init: RequestInit = {
      method: spec.method,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      signal: opts.signal,
    }

    let res: Response
    try {
      res = await this.fetchImpl(url, init)
    } catch (e: any) {
      throw new LazadaError(`Network error: ${e?.message ?? e}`, { body: e })
    }

    const text = await res.text()
    let json: any
    try {
      json = text ? JSON.parse(text) : null
    } catch {
      json = { code: 'invalid_json', message: text }
    }

    if (!res.ok && this.throwOnHttpError) {
      throw new LazadaError(json?.message || `HTTP ${res.status}`, {
        code: json?.code,
        requestId: json?.request_id,
        status: res.status,
        body: json,
      })
    }

    const errBody = json as LazadaErrorResponse | null
    if (errBody && errBody.code !== undefined && Number(errBody.code) !== 0) {
      throw new LazadaError(errBody.message || String(errBody.code), {
        code: errBody.code,
        requestId: errBody.request_id,
        status: res.status,
        body: json,
      })
    }

    return json
  }
}

/**
 * Exchange an authorization `code` (from `buildAuthUrl` redirect) for a seller
 * access_token, using Lazada's `/auth/token/create` OAuth endpoint.
 */
export async function exchangeAuthCode(
  credentials: LazadaCredentials,
  code: string,
  opts: { region?: LazadaRegion | string } = {},
): Promise<any> {
  const region = (opts.region ?? 'singapore').toLowerCase() as LazadaRegion
  const host = resolveHost(region)
  const timestamp = Date.now()
  const params: Record<string, unknown> = {
    code,
    uuid: '',
    client_id: credentials.app_key,
    client_secret: credentials.app_secret,
    grant_type: 'authorization_code',
    sign_method: 'sha256',
    timestamp,
  }
  const end = `${host}/rest/auth/token/create`
  const q = new URLSearchParams()
  for (const [k, v] of Object.entries(params)) q.set(k, String(v))
  q.set('sign', sign(credentials.app_secret, '/auth/token/create', { ...params, sign: '' }))
  const res = await fetch(`${end}?${q.toString()}`, { method: 'POST' })
  const text = await res.text()
  let json: any
  try {
    json = text ? JSON.parse(text) : null
  } catch {
    json = { code: 'invalid_json', message: text }
  }
  if (json && json.code !== undefined && Number(json.code) !== 0) {
    throw new LazadaError(json.message || String(json.code), { code: json.code, body: json })
  }
  return json
}

export { resolveHost }
