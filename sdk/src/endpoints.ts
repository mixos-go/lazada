import { LazadaRegion } from './types'

/**
 * Lazada endpoint hosts by region.
 *
 * The full request URL is `<host>/rest<path>` where `path` starts with `/`,
 * e.g. `https://api.lazada.co.id/rest/orders/get`.
 */
export const ENDPOINT_HOSTS: Record<LazadaRegion, string> = {
  vietnam: 'https://api.lazada.vn',
  singapore: 'https://api.lazada.sg',
  philippines: 'https://api.lazada.com.ph',
  malaysia: 'https://api.lazada.com.my',
  thailand: 'https://api.lazada.co.th',
  indonesia: 'https://api.lazada.co.id',
}

/** Resolve the base URL (without the `/rest` + path suffix) for a region. */
export function resolveHost(region: LazadaRegion | string): string {
  const key = (region || 'singapore').toLowerCase() as LazadaRegion
  const host = ENDPOINT_HOSTS[key]
  if (!host) {
    throw new Error(
      `Unsupported Lazada region: ${region}. Supported: ${Object.keys(ENDPOINT_HOSTS).join(', ')}`,
    )
  }
  return host
}
