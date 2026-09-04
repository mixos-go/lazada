export type { TokenSet, LazadaConnectorConfig } from './types'
export type { TokenStore } from './token-store'
export { InMemoryTokenStore } from './token-store'
export { LazadaConnector } from './connector'
import type { LazadaConnectorConfig } from './types'
import { LazadaConnector } from './connector'

/** Factory: buat LazadaConnector untuk satu kredensial app. */
export function createLazadaConnector(config: LazadaConnectorConfig): LazadaConnector {
  return new LazadaConnector(config)
}