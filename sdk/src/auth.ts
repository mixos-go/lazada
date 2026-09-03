import { LazadaCredentials, LazadaRegion } from './types'

/**
 * Lazada OAuth authorization hosts by region. The seller logs in here and is
 * redirected back to `redirect_uri` with a `code` + `state` query param.
 */
export const AUTHORIZE_HOSTS: Record<LazadaRegion, string> = {
  vietnam: 'https://auth.lazada.vn/oauth/authorize',
  singapore: 'https://auth.lazada.com/oauth/authorize',
  philippines: 'https://auth.lazada.com.ph/oauth/authorize',
  malaysia: 'https://auth.lazada.com.my/oauth/authorize',
  thailand: 'https://auth.lazada.co.th/oauth/authorize',
  indonesia: 'https://auth.lazada.co.id/oauth/authorize',
}

export interface LazadaAuthUrlOptions {
  region?: LazadaRegion | string
  state?: string
}

/**
 * Build a Lazada seller authorization URL.
 *
 * After the seller grants access they are redirected back to `redirectUri`,
 * e.g. `https://yourapp/callback?code=...&state=...`. Exchange the `code` with
 * `exchangeAuthCode` to obtain an `access_token`.
 */
export function buildAuthUrl(
  credentials: LazadaCredentials,
  redirectUri: string,
  opts: LazadaAuthUrlOptions = {},
): string {
  const region = (opts.region ?? 'singapore').toLowerCase() as LazadaRegion
  const host = AUTHORIZE_HOSTS[region]
  if (!host) {
    throw new Error(`Unsupported Lazada region: ${region}`)
  }
  const q = new URLSearchParams({
    response_type: 'code',
    client_id: credentials.app_key,
    redirect_uri: redirectUri,
    state: opts.state ?? '',
  })
  return `${host}?${q.toString()}`
}
