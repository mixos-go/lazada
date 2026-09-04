import type { LazadaCredentials, LazadaRegion } from '../types'
import type { TokenStore } from './token-store'

/**
 * Token pasangan + metadata masa berlaku untuk satu seller/shop.
 * Key store = `shopId` (string). Field tambahan spesifik Lazada: `region`.
 */
export interface TokenSet {
  accessToken: string
  refreshToken?: string
  /** epoch ms saat token kedaluwarsa (dari expires_in platform saat diperoleh). */
  expiresAt?: number
  [key: string]: unknown
}

export interface LazadaConnectorConfig {
  credentials: LazadaCredentials
  redirectUri: string
  store?: TokenStore
  /** Region default; access token Lazada terikat region. Default `singapore`. */
  region?: LazadaRegion | string
  fetch?: typeof fetch
  /** Sisa waktu (ms) sebelum expiry yang memicu auto-refresh saat getClient. Default 5 mnt. */
  refreshThresholdMs?: number
}