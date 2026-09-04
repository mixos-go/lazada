import { buildAuthUrl } from '../auth'
import { exchangeAuthCode, LazadaClient } from '../client'
import { LazadaSystemAPIApi } from '../generated/SystemAPI'
import type { LazadaTokenResult } from '../index'
import { LazadaCredentials, LazadaError, LazadaRegion } from '../types'
import { InMemoryTokenStore, TokenStore } from './token-store'
import { LazadaConnectorConfig, TokenSet } from './types'

function toTokenSet(data: LazadaTokenResult, shopId: string, region: string): TokenSet {
  return {
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
    expiresAt: data.expires_in === undefined ? undefined : Date.now() + data.expires_in * 1000,
    shopId,
    region,
  }
}

/**
 * Multi-seller OAuth connector untuk Lazada Open Platform.
 *
 * Satu instance, banyak shop: token disimpan per `shopId` di `TokenStore`.
 * Access token Lazada terikat region; pastikan `region` per connector benar.
 * Token dikirim via query `access_token` (Lazop signing: uppercased HMAC-SHA256).
 */
export class LazadaConnector {
  readonly credentials: LazadaCredentials
  readonly redirectUri: string
  readonly region: LazadaRegion | string
  readonly refreshThresholdMs: number

  private readonly store: TokenStore
  private readonly fetchImpl?: typeof fetch
  private readonly shopIds = new Set<string>()

  constructor(config: LazadaConnectorConfig) {
    this.credentials = config.credentials
    this.redirectUri = config.redirectUri
    this.region = config.region ?? 'singapore'
    this.refreshThresholdMs = config.refreshThresholdMs ?? 5 * 60_000
    this.store = config.store ?? new InMemoryTokenStore()
    this.fetchImpl = config.fetch
  }

  /**
   * URL OAuth yang harus dikunjungi seller untuk authorize (per region).
   * `shopId` & `state` disisipkan ke query redirect, jadi callback tahu shop mana.
   */
  buildAuthUrl(shopId: string, state?: string): string {
    const redirect = new URL(this.redirectUri)
    redirect.searchParams.set('shop_id', shopId)
    return buildAuthUrl(this.credentials, redirect.toString(), {
      region: this.region,
      state,
    })
  }

  /** Exchange `code` hasil callback → token, simpan ke store, return TokenSet. */
  async handleCallback(shopId: string, code: string): Promise<TokenSet> {
    const json = await exchangeAuthCode(this.credentials, code, { region: this.region })
    const data = json as LazadaTokenResult
    if (data.access_token === undefined) {
      throw new LazadaError('Token exchange gagal: response tidak berisi access_token', { body: json })
    }
    const token = toTokenSet(data, shopId, this.region)
    await this.store.set(shopId, token)
    this.shopIds.add(shopId)
    return token
  }

  /** Refresh token untuk shop tertentu, update store (pakai refresh_token baru). */
  async refresh(shopId: string): Promise<TokenSet> {
    const current = await this.store.get(shopId)
    if (current === undefined || current.refreshToken === undefined) {
      throw new LazadaError(`Shop ${shopId} belum punya refresh_token. Panggil handleCallback(shopId, code) dulu.`)
    }
    const api = new LazadaSystemAPIApi(this.client())
    const res = await api.refreshAccessToken(
      { refresh_token: current.refreshToken },
      { region: this.region },
    )
    // Refresh response bisa terbungkus `data` (envelope) atau flat — tangani keduanya.
    const data = (res.data as unknown ?? res) as LazadaTokenResult
    if (data.access_token === undefined) {
      throw new LazadaError('Refresh gagal: response tidak berisi access_token', { body: res })
    }
    const token: TokenSet = {
      ...toTokenSet(data, shopId, this.region),
      refreshToken: data.refresh_token ?? current.refreshToken,
    }
    await this.store.set(shopId, token)
    this.shopIds.add(shopId)
    return token
  }

  /**
   * Client untuk satu shop dengan access token ter-inject.
   * Auto-refresh saat `expiresAt` mendekat dilakukan pada Fase 2 connector.
   */
  async getClient(shopId: string): Promise<LazadaClient> {
    const token = await this.store.get(shopId)
    if (token === undefined) {
      throw new LazadaError(`Shop ${shopId} belum connect. Panggil handleCallback(shopId, code) dulu.`)
    }
    return new LazadaClient({
      credentials: this.credentials,
      region: this.region,
      accessToken: token.accessToken,
      fetch: this.fetchImpl,
    })
  }

  /** Daftar shop yang sudah pernah connect (punya token di store). */
  listShopIds(): string[] {
    const store = this.store as { keys?: () => readonly string[] }
    const fromStore = store.keys ? store.keys() : []
    return Array.from(new Set([...fromStore, ...this.shopIds]))
  }

  private client(): LazadaClient {
    return new LazadaClient({
      credentials: this.credentials,
      region: this.region,
      fetch: this.fetchImpl,
    })
  }
}