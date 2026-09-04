'use strict'
const { describe, it } = require('node:test')
const assert = require('node:assert/strict')
const { createLazadaConnector, InMemoryTokenStore } = require('../dist/connector/index')
const { LazadaError } = require('../dist/types')
const { sign } = require('../dist/client')
const { buildAuthUrl } = require('../dist/auth')

const credentials = { app_key: 'appKeyL', app_secret: 'secret' }
const redirectUri = 'https://app.example/cb'

function makeFetch(log) {
  return async (url, init) => {
    log.urls.push(String(url))
    if (String(url).includes('/auth/token/refresh')) {
      return { ok: true, status: 200, text: async () =>
        JSON.stringify({ access_token: 'at2', refresh_token: 'rt2', expires_in: 7200 }) }
    }
    if (String(url).includes('/auth/token/create')) {
      const isB = String(url).includes('code=codeY')
      return { ok: true, status: 200, text: async () =>
        JSON.stringify({ access_token: isB ? 'atB' : 'atA', refresh_token: isB ? 'rtB' : 'rtA', expires_in: 7200 }) }
    }
    return { ok: true, status: 200, text: async () => JSON.stringify({ code: '0', message: 'Success' }) }
  }
}

const mkSpec = () => ({ method: 'GET', path: '/products/get', params: [] })

describe('auth buildAuthUrl (per region)', () => {
  it('region indonesia → host auth.lazada.co.id', () => {
    const url = buildAuthUrl(credentials, redirectUri, { region: 'indonesia', state: 'st1' })
    assert.ok(url.includes('auth.lazada.co.id'), url)
    for (const p of ['response_type=code', 'client_id=appKeyL', 'redirect_uri=', 'state=st1']) {
      assert.ok(url.includes(p), `${p} tidak ada: ${url}`)
    }
  })
  it('region default singapore → auth.lazada.com', () => {
    const url = buildAuthUrl(credentials, redirectUri)
    assert.ok(url.includes('auth.lazada.com'), url)
  })
})

describe('sign (smoke Lazada)', () => {
  it('uppercase hex 64 & deterministic', () => {
    const p = { app_key: 'k', timestamp: '1', code: 'c' }
    const a = sign(credentials.app_secret, '/auth/token/create', p)
    const b = sign(credentials.app_secret, '/auth/token/create', p)
    assert.equal(a, b)
    assert.match(a, /^[0-9A-F]{64}$/)
  })
})

describe('LazadaConnector', () => {
  it('buildAuthUrl: shop_id & state disisipkan ke query redirect', () => {
    const c = createLazadaConnector({ credentials, redirectUri, region: 'indonesia', fetch: makeFetch({ urls: [] }) })
    const url = c.buildAuthUrl('s1', 'st1')
    assert.ok(url.includes('auth.lazada.co.id'), url)
    assert.ok(url.includes('shop_id%3Ds1'), url)
    assert.ok(url.includes('state=st1'), url)
  })

  it('handleCallback: parse flat json, simpan TokenSet + region', async () => {
    const c = createLazadaConnector({ credentials, redirectUri, region: 'singapore', fetch: makeFetch({ urls: [] }) })
    const token = await c.handleCallback('s1', 'codeX')
    assert.equal(token.accessToken, 'atA')
    assert.equal(token.refreshToken, 'rtA')
    assert.equal(token.region, 'singapore')
    const expect = Date.now() + 7200 * 1000
    assert.ok(Math.abs((token.expiresAt || 0) - expect) < 10000, `expiresAt ${token.expiresAt} ≈ ${expect}`)
  })

  it('refresh: simpan refresh_token terbaru, store ter-update', async () => {
    const log = { urls: [] }
    const c = createLazadaConnector({ credentials, redirectUri, fetch: makeFetch(log) })
    await c.handleCallback('s1', 'codeX')
    const fresh = await c.refresh('s1')
    assert.equal(fresh.accessToken, 'at2')
    assert.equal(fresh.refreshToken, 'rt2')
    const again = await c.refresh('s1')
    assert.equal(again.accessToken, 'at2')
  })

  it('auto-refresh single-flight: 3 request paralel saat expiry mendekat → 1 refresh', async () => {
    const log = { urls: [] }
    const store = new InMemoryTokenStore()
    const c = createLazadaConnector({ credentials, redirectUri, store, fetch: makeFetch(log) })
    await c.handleCallback('s1', 'codeX')
    store.set('s1', { accessToken: 'atA', refreshToken: 'rtA', expiresAt: Date.now() + 60000, region: 'singapore' })
    log.urls.length = 0
    const client = await c.getClient('s1')
    const results = await Promise.all([
      client.request(mkSpec(), {}),
      client.request(mkSpec(), {}),
      client.request(mkSpec(), {}),
    ])
    const refreshes = log.urls.filter((u) => u.includes('/auth/token/refresh')).length
    const calls = log.urls.filter((u) => u.includes('/products/get')).length
    assert.equal(refreshes, 1)
    assert.equal(calls, 3)
    assert.equal(results.length, 3)
  })

  it('getClient untuk shop belum connect → LazadaError jelas', async () => {
    const c = createLazadaConnector({ credentials, redirectUri, fetch: makeFetch({ urls: [] }) })
    await assert.rejects(() => c.getClient('nope'), (e) => e instanceof LazadaError && /belum connect/.test(e.message))
  })

  it('refresh tanpa token → error jelas', async () => {
    const c = createLazadaConnector({ credentials, redirectUri, fetch: makeFetch({ urls: [] }) })
    await assert.rejects(() => c.refresh('nope'), (e) => e instanceof LazadaError && /refresh_token/.test(e.message))
  })

  it('multi-seller isolation: access_token per shop tidak tercampur', async () => {
    const log = { urls: [] }
    const c = createLazadaConnector({ credentials, redirectUri, region: 'singapore', fetch: makeFetch(log) })
    await c.handleCallback('s1', 'codeX')
    await c.handleCallback('s2', 'codeY')
    log.urls.length = 0
    const c1 = await c.getClient('s1')
    const c2 = await c.getClient('s2')
    await c1.request(mkSpec(), {})
    await c2.request(mkSpec(), {})
    assert.ok(log.urls[0].includes('access_token=atA'), log.urls[0])
    assert.ok(log.urls[1].includes('access_token=atB'), log.urls[1])
    assert.deepEqual(c.listShopIds().sort(), ['s1', 's2'])
  })
})