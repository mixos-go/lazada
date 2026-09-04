import { LazadaClient } from './client'
import { LazadaCredentials, LazadaError, LazadaRegion } from './types'
import * as generated from './generated'

export * from './types'
export * from './client'
export * from './endpoints'
export * from './auth'
export * from './connector'
export { LazadaClient } from './client'
export { generated }

// Re-export every category client class for ergonomic imports.
export {
  LazadaChoiceCustomizedAPIApi,
  LazadaContentAPIApi,
  LazadaCrossBoarderProductAPIApi,
  LazadaETicketsAPIApi,
  LazadaEarlyBirdPriceAPIApi,
  LazadaFBLAPIApi,
  LazadaFinanceAPIApi,
  LazadaFirstMileBigbagOnlyForCNApi,
  LazadaFlexicomboAPIApi,
  LazadaFreeShippingAPIApi,
  LazadaFulfillmentAPIApi,
  LazadaInstantMessagingAPIApi,
  LazadaLazLikeAPIApi,
  LazadaLazLiveAPIApi,
  LazadaLazPayAPIApi,
  LazadaLazadaDGAPIApi,
  LazadaLazadaLogisticsAPIApi,
  LazadaLazadaWalletCorporateTopUpAPIApi,
  LazadaLogisticsAPIApi,
  LazadaLogisticsStationAPIApi,
  LazadaMediaCenterAPIApi,
  LazadaMembershipAPIApi,
  LazadaOrderAPIApi,
  LazadaProductAPIApi,
  LazadaProductReviewAPIApi,
  LazadaRedMartAPIApi,
  LazadaReturnAndRefundAPIApi,
  LazadaSellerAPIApi,
  LazadaSellerVoucherAPIApi,
  LazadaServiceMarketAPIApi,
  LazadaSponsoredSolutionsAPIApi,
  LazadaStoreDecorationAPIApi,
  LazadaSystemAPIApi,
} from './generated'
import {
  LazadaChoiceCustomizedAPIApi,
  LazadaContentAPIApi,
  LazadaCrossBoarderProductAPIApi,
  LazadaETicketsAPIApi,
  LazadaEarlyBirdPriceAPIApi,
  LazadaFBLAPIApi,
  LazadaFinanceAPIApi,
  LazadaFirstMileBigbagOnlyForCNApi,
  LazadaFlexicomboAPIApi,
  LazadaFreeShippingAPIApi,
  LazadaFulfillmentAPIApi,
  LazadaInstantMessagingAPIApi,
  LazadaLazLikeAPIApi,
  LazadaLazLiveAPIApi,
  LazadaLazPayAPIApi,
  LazadaLazadaDGAPIApi,
  LazadaLazadaLogisticsAPIApi,
  LazadaLazadaWalletCorporateTopUpAPIApi,
  LazadaLogisticsAPIApi,
  LazadaLogisticsStationAPIApi,
  LazadaMediaCenterAPIApi,
  LazadaMembershipAPIApi,
  LazadaOrderAPIApi,
  LazadaProductAPIApi,
  LazadaProductReviewAPIApi,
  LazadaRedMartAPIApi,
  LazadaReturnAndRefundAPIApi,
  LazadaSellerAPIApi,
  LazadaSellerVoucherAPIApi,
  LazadaServiceMarketAPIApi,
  LazadaSponsoredSolutionsAPIApi,
  LazadaStoreDecorationAPIApi,
  LazadaSystemAPIApi,
} from './generated'

export interface LazadaOptions {
  credentials: LazadaCredentials
  /** Default region. Defaults to `singapore`. */
  region?: LazadaRegion | string
  /** Default access_token for seller-scoped calls. */
  accessToken?: string
  /** Node 18+ native fetch is used by default; override for custom transport. */
  fetch?: typeof fetch
}

/**
 * `Lazada` is the main entry point. It wires a low-level `LazadaClient` to all
 * 32 generated category APIs under typed sub-clients.
 *
 * @example
 * import { Lazada } from './index'
 *
 * const lazada = new Lazada({
 *   credentials: { app_key: 'YOUR_APP_KEY', app_secret: 'YOUR_APP_SECRET' },
 *   region: 'indonesia',
 *   accessToken: 'YOUR_ACCESS_TOKEN',
 * })
 *
 * const res = await lazada.order.getOrders({
 *   created_after: '2024-01-01T00:00:00+08:00',
 *   sort_by: 'created_at',
 * })
 */
export class Lazada {
  /** Low-level client (signing, endpoint resolution, request). */
  readonly client: LazadaClient
  readonly options: LazadaOptions

  readonly choiceCustomized: LazadaChoiceCustomizedAPIApi
  readonly content: LazadaContentAPIApi
  readonly crossBorderProduct: LazadaCrossBoarderProductAPIApi
  readonly eTickets: LazadaETicketsAPIApi
  readonly earlyBirdPrice: LazadaEarlyBirdPriceAPIApi
  readonly fbl: LazadaFBLAPIApi
  readonly finance: LazadaFinanceAPIApi
  readonly firstMile: LazadaFirstMileBigbagOnlyForCNApi
  readonly flexiCombo: LazadaFlexicomboAPIApi
  readonly freeShipping: LazadaFreeShippingAPIApi
  readonly fulfillment: LazadaFulfillmentAPIApi
  readonly instantMessaging: LazadaInstantMessagingAPIApi
  readonly lazLike: LazadaLazLikeAPIApi
  readonly lazLive: LazadaLazLiveAPIApi
  readonly lazPay: LazadaLazPayAPIApi
  readonly dg: LazadaLazadaDGAPIApi
  readonly logistics2: LazadaLazadaLogisticsAPIApi
  readonly walletCorporateTopUp: LazadaLazadaWalletCorporateTopUpAPIApi
  readonly logistics: LazadaLogisticsAPIApi
  readonly logisticsStation: LazadaLogisticsStationAPIApi
  readonly mediaCenter: LazadaMediaCenterAPIApi
  readonly membership: LazadaMembershipAPIApi
  readonly order: LazadaOrderAPIApi
  readonly product: LazadaProductAPIApi
  readonly productReview: LazadaProductReviewAPIApi
  readonly redMart: LazadaRedMartAPIApi
  readonly returnAndRefund: LazadaReturnAndRefundAPIApi
  readonly seller: LazadaSellerAPIApi
  readonly sellerVoucher: LazadaSellerVoucherAPIApi
  readonly serviceMarket: LazadaServiceMarketAPIApi
  readonly sponsoredSolutions: LazadaSponsoredSolutionsAPIApi
  readonly storeDecoration: LazadaStoreDecorationAPIApi
  readonly system: LazadaSystemAPIApi

  constructor(options: LazadaOptions) {
    this.options = options
    const client = new LazadaClient({
      credentials: options.credentials,
      region: options.region,
      accessToken: options.accessToken,
      fetch: options.fetch,
    })
    this.client = client

    this.choiceCustomized = new LazadaChoiceCustomizedAPIApi(client)
    this.content = new LazadaContentAPIApi(client)
    this.crossBorderProduct = new LazadaCrossBoarderProductAPIApi(client)
    this.eTickets = new LazadaETicketsAPIApi(client)
    this.earlyBirdPrice = new LazadaEarlyBirdPriceAPIApi(client)
    this.fbl = new LazadaFBLAPIApi(client)
    this.finance = new LazadaFinanceAPIApi(client)
    this.firstMile = new LazadaFirstMileBigbagOnlyForCNApi(client)
    this.flexiCombo = new LazadaFlexicomboAPIApi(client)
    this.freeShipping = new LazadaFreeShippingAPIApi(client)
    this.fulfillment = new LazadaFulfillmentAPIApi(client)
    this.instantMessaging = new LazadaInstantMessagingAPIApi(client)
    this.lazLike = new LazadaLazLikeAPIApi(client)
    this.lazLive = new LazadaLazLiveAPIApi(client)
    this.lazPay = new LazadaLazPayAPIApi(client)
    this.dg = new LazadaLazadaDGAPIApi(client)
    this.logistics2 = new LazadaLazadaLogisticsAPIApi(client)
    this.walletCorporateTopUp = new LazadaLazadaWalletCorporateTopUpAPIApi(client)
    this.logistics = new LazadaLogisticsAPIApi(client)
    this.logisticsStation = new LazadaLogisticsStationAPIApi(client)
    this.mediaCenter = new LazadaMediaCenterAPIApi(client)
    this.membership = new LazadaMembershipAPIApi(client)
    this.order = new LazadaOrderAPIApi(client)
    this.product = new LazadaProductAPIApi(client)
    this.productReview = new LazadaProductReviewAPIApi(client)
    this.redMart = new LazadaRedMartAPIApi(client)
    this.returnAndRefund = new LazadaReturnAndRefundAPIApi(client)
    this.seller = new LazadaSellerAPIApi(client)
    this.sellerVoucher = new LazadaSellerVoucherAPIApi(client)
    this.serviceMarket = new LazadaServiceMarketAPIApi(client)
    this.sponsoredSolutions = new LazadaSponsoredSolutionsAPIApi(client)
    this.storeDecoration = new LazadaStoreDecorationAPIApi(client)
    this.system = new LazadaSystemAPIApi(client)
  }
}

export { LazadaError }

// Add a convenience token-exchange entry point to the client type surface.
export interface LazadaTokenResult {
  access_token: string
  refresh_token?: string
  expires_in?: number
  [key: string]: unknown
}
