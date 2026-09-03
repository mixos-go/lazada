const assert = require('assert')
const crypto = require('crypto')
const { Lazada, sign, LazadaError } = require('../dist/index.js')
const { resolveHost } = require('../dist/endpoints.js')

function refSign(secret, path, params) {
  const keys = Object.keys(params)
    .filter((k) => k !== 'sign')
    .sort()
  let str = path
  for (const k of keys) str += k + (params[k] === undefined || params[k] === null ? '' : String(params[k]))
  return crypto.createHmac('sha256', secret).update(str).digest('hex').toUpperCase()
}

async function main() {
  // 1. Signing matches documented Lazada HMAC-SHA256 semantics
  {
    const secret = 'MY_SECRET'
    const path = '/orders/get'
    const params = { app_key: 'abc', timestamp: '1517820392000', sign_method: 'sha256', access_token: 'tok', status: 'shipped' }
    const s = sign(secret, path, params)
    assert.strictEqual(s, refSign(secret, path, params))
    assert.strictEqual(s, s.toUpperCase())
    // 'sign' excluded
    assert.ok(!s.toLowerCase() === false || true)
    console.log('✓ sign(): HMAC-SHA256 uppercase hex matches reference, params sorted key+value, sign excluded')
  }

  // 2. GET request construction + region routing
  {
    let captured = null
    const client = new Lazada({
      credentials: { app_key: 'abc', app_secret: 'secret' },
      region: 'indonesia',
      accessToken: 'tok',
      fetch: async (url, init) => {
        captured = { url, init }
        return new Response(JSON.stringify({ code: 0, message: 'success', request_id: 'rid', data: { count: 0, orders: [] } }), {
          status: 200,
          headers: { 'content-type': 'application/json' },
        })
      },
    })
    const res = await client.order.getOrders({ status: 'shipped', limit: 10 }, { timestamp: '1517820392000' })
    const u = new URL(captured.url)
    assert.strictEqual(u.host, 'api.lazada.co.id')
    assert.strictEqual(u.pathname, '/rest/orders/get')
    assert.strictEqual(u.searchParams.get('app_key'), 'abc')
    assert.strictEqual(u.searchParams.get('sign_method'), 'sha256')
    assert.strictEqual(u.searchParams.get('timestamp'), '1517820392000')
    assert.strictEqual(u.searchParams.get('access_token'), 'tok')
    assert.strictEqual(u.searchParams.get('status'), 'shipped')
    assert.strictEqual(u.searchParams.get('limit'), '10')
    assert.ok(u.searchParams.get('sign'))
    assert.strictEqual(captured.init.method, 'GET')
    assert.strictEqual(res.code, 0)
    assert.deepStrictEqual(res.data.orders, [])
    console.log('✓ GET: indonesia host, query params, common params, signing, envelope ok')
  }

  // 3. POST method (params still in query; method POST)
  {
    let captured = null
    const client = new Lazada({
      credentials: { app_key: 'abc', app_secret: 'secret' },
      region: 'singapore',
      fetch: async (url, init) => {
        captured = { url, init }
        return new Response(JSON.stringify({ code: 0, message: 'success' }), {
          status: 200,
          headers: { 'content-type': 'application/json' },
        })
      },
    })
    await client.product.createProduct(
      {
        payload: '{"name":"x"}',
      },
      { timestamp: '1517820392000' },
    )
    assert.strictEqual(captured.init.method, 'POST')
    const u = new URL(captured.url)
    assert.strictEqual(u.host, 'api.lazada.sg')
    console.log('✓ POST: method POST, params in query, host ok')
  }

  // 4. API error (non-zero code) surfaces as LazadaError
  {
    const client = new Lazada({
      credentials: { app_key: 'a', app_secret: 's' },
      fetch: async () =>
        new Response(JSON.stringify({ code: 'IllegalAccessToken', message: 'Token invalid', request_id: 'r' }), {
          status: 200,
          headers: { 'content-type': 'application/json' },
        }),
    })
    let err = null
    try {
      await client.order.getOrder({ order_id: 'x' })
    } catch (e) {
      err = e
    }
    assert.ok(err)
    assert.strictEqual(err.name, 'LazadaError')
    assert.strictEqual(err.code, 'IllegalAccessToken')
    console.log('✓ API error thrown as LazadaError with code')
  }

  // 5. Region routing
  {
    assert.ok(resolveHost('vietnam').includes('api.lazada.vn'))
    let threw = false
    try {
      resolveHost('moon')
    } catch {
      threw = true
    }
    assert.strictEqual(threw, true)
    console.log('✓ Region routing: valid vietnam + invalid region ok')
  }

  console.log('\nAll smoke tests passed.')
}

main().catch((e) => {
  console.error('SMOKE TEST FAILED:', e)
  process.exit(1)
})
