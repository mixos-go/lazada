// AUTO-GENERATED from Lazada reference docs (references/api/Service Market API).
// Do not edit by hand; run `npm run generate` in sdk/.

import { LazadaClient } from '../../client'
import { ApiResponse, LazadaRequestOptions } from '../../types'

export interface ServiceMarketAppKeyOrderQueryRequest {
  /** order create time range end */
  "endCreated"?: string,
  /** biz type */
  "bizType"?: number,
  /** bi order id */
  "bizOrderId"?: number,
  /** order_id */
  "orderId"?: number,
  /** page no */
  "pageNo": number,
  /** service market item code */
  "itemCode"?: string,
  /** page size */
  "pageSize": number,
  /** order create time range start */
  "startCreated"?: string,
  /** service market article code */
  "articleCode": string,
  /** seller short code */
  "shortCode"?: string,
}
export interface ServiceMarketAppKeyOrderQueryData {
  "result"?: {
  "data"?: {
    "totalItem"?: string,
    "articleBizOrders"?: Array<{
      "orderCycleStart"?: string,
      "refundFee"?: string,
      "articleItemName"?: string,
      "bizType"?: string,
      "articleName"?: string,
      "totalPayFee"?: string,
      "orderId"?: string,
      "orderCycleEnd"?: string,
      "itemCode"?: string,
      "fee"?: string,
      "nick"?: string,
      "activityCode"?: string,
      "itemName"?: string,
      "orderCycle"?: string,
      "bizOrderId"?: string,
      "promFee"?: string,
      "create"?: string,
      "articleCode"?: string,
      "userId"?: string,
    }>,
  },
  "success"?: boolean,
  "resultCode"?: string,
  "remark"?: string,
  },
}
export type ServiceMarketAppKeyOrderQueryResponse = ApiResponse<ServiceMarketAppKeyOrderQueryData>

export interface ServiceMarketAppKeySubQueryRequest {
  /** Service Market article code */
  "articleCode": string,
  /** seller short code */
  "shortCode": string,
}
export interface ServiceMarketAppKeySubQueryData {
  "result"?: Array<{
  "data"?: Array<{
    "nick"?: string,
    "item_name"?: string,
    "article_name"?: string,
    "expire_notice"?: boolean,
    "item_code"?: string,
    "autosub"?: boolean,
    "end_time"?: number,
    "article_code"?: string,
    "status"?: number,
  }>,
  "success"?: boolean,
  }>,
}
export type ServiceMarketAppKeySubQueryResponse = ApiResponse<ServiceMarketAppKeySubQueryData>


export class LazadaServiceMarketAPIApi {
  constructor(private client: LazadaClient) {}

  /**
   * ServiceMarketAppKeyOrderQuery
   * /service/market/order/query (GET)
   */
  async serviceMarketAppKeyOrderQuery(params: ServiceMarketAppKeyOrderQueryRequest, opts?: LazadaRequestOptions): Promise<ServiceMarketAppKeyOrderQueryResponse> {
    return this.client.request({"method":"GET","path":"/service/market/order/query","params":["endCreated","bizType","bizOrderId","orderId","pageNo","itemCode","pageSize","startCreated","articleCode","shortCode"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * ServiceMarketAppKeySubQuery
   * /service/market/subs/query (GET)
   */
  async serviceMarketAppKeySubQuery(params: ServiceMarketAppKeySubQueryRequest, opts?: LazadaRequestOptions): Promise<ServiceMarketAppKeySubQueryResponse> {
    return this.client.request({"method":"GET","path":"/service/market/subs/query","params":["articleCode","shortCode"]}, params as unknown as Record<string, unknown>, opts)
  }
}
