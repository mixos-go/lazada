/**
 * Core types for the Lazada Open Platform SDK.
 *
 * These types are shared across every generated category client.
 */

/** Lazada region / endpoint location selector. */
export type LazadaRegion =
  | 'singapore'
  | 'malaysia'
  | 'philippines'
  | 'indonesia'
  | 'thailand'
  | 'vietnam'

/** Credentials required to sign requests (HMAC-SHA256 over app_secret). */
export interface LazadaCredentials {
  /** Application key (app_key) issued when you register your app. */
  app_key: string
  /** Application secret (used as the HMAC key). Never ship this client-side. */
  app_secret: string
}

/** Per-request options. */
export interface LazadaRequestOptions {
  /** Region override; defaults to the client-level region. */
  region?: LazadaRegion | string
  /**
   * Short-lived access_token issued after a seller authorizes your app.
   * Scoped to a specific seller shop.
   */
  access_token?: string
  /** Override the milli-second timestamp used for signing (testing). */
  timestamp?: number | string | Date
  /** Abort signal for the underlying HTTP request (Node 18+). */
  signal?: AbortSignal
}

/** Standard Lazada error/response envelope. `code` is `0` on success. */
export interface LazadaErrorResponse {
  code: number | string
  message?: string
  request_id?: string
  detail?: unknown
}

/**
 * Generic success envelope returned by the Lazada Open Platform API.
 * Business data lives under `data`. `code === 0` indicates success.
 */
export interface LazadaApiResult<T = unknown> {
  code: number | string
  message: string
  request_id?: string
  detail?: unknown
  data?: T
}

/** Maps a TS payload type against the standard Lazada envelope. */
export type ApiResponse<T> = LazadaApiResult<T>

export class LazadaError extends Error {
  readonly code: number | string
  readonly requestId?: string
  readonly status?: number
  readonly body?: unknown

  constructor(
    msg: string,
    opts: { code?: number | string; requestId?: string; status?: number; body?: unknown } = {},
  ) {
    super(msg)
    this.name = 'LazadaError'
    this.code = opts.code ?? 'unknown_error'
    this.requestId = opts.requestId
    this.status = opts.status
    this.body = opts.body
  }
}
