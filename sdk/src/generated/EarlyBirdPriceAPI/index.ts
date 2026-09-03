// AUTO-GENERATED from Lazada reference docs (references/api/Early Bird Price API).
// Do not edit by hand; run `npm run generate` in sdk/.

import { LazadaClient } from '../../client'
import { ApiResponse, LazadaRequestOptions } from '../../types'

export interface CreateEarlyBirdActivityV2Request {
  /** sku list */
  "sku_list": Array<Record<string, unknown>>,
  /** item id */
  "sku_list.product_id": number,
  /** activity inventory */
  "sku_list.order_total_budget": number,
  /** discount price */
  "sku_list.discount_price": string,
  /** skuId */
  "sku_list.sku_id": number,
  /** page no */
  "page_no"?: number,
  /** activity name */
  "name"?: string,
  /** page_size */
  "page_size"?: number,
  /** activity id */
  "id"?: number,
  /** source */
  "source"?: string,
}
export interface CreateEarlyBirdActivityV2Data {
  "result"?: {
  "success"?: boolean,
  "module"?: Record<string, unknown>,
  "error_code"?: Array<{
    "error_code_params"?: Array<Record<string, unknown>>,
    "display_message"?: string,
    "log_message"?: string,
    "key"?: string,
  }>,
  "repeated"?: boolean,
  "retry"?: boolean,
  },
}
export type CreateEarlyBirdActivityV2Response = ApiResponse<CreateEarlyBirdActivityV2Data>

export interface EarlyBirdActivityAddSkusV2Request {
  /** sku list */
  "sku_list": Array<Record<string, unknown>>,
  /** product id */
  "sku_list.product_id": number,
  /** order total budget inventory */
  "sku_list.order_total_budget": number,
  /** discount price */
  "sku_list.discount_price": string,
  /** sku id */
  "sku_list.sku_id": number,
  /** page no */
  "page_no"?: number,
  /** activity name */
  "name"?: string,
  /** page size */
  "page_size"?: number,
  /** activity id */
  "id": number,
  /** source */
  "source"?: string,
}
export interface EarlyBirdActivityAddSkusV2Data {
  "result"?: {
  "success"?: boolean,
  "module"?: Record<string, unknown>,
  "error_code"?: Array<{
    "error_code_params"?: Array<Record<string, unknown>>,
    "display_message"?: string,
    "log_message"?: string,
    "key"?: string,
  }>,
  "repeated"?: boolean,
  "retry"?: boolean,
  },
}
export type EarlyBirdActivityAddSkusV2Response = ApiResponse<EarlyBirdActivityAddSkusV2Data>

export interface EarlyBirdActivityDeactivateSkusV2Request {
  /** sku list */
  "sku_list": Array<Record<string, unknown>>,
  /** item id */
  "sku_list.product_id": number,
  /** order total budget inventory */
  "sku_list.order_total_budget": number,
  /** discount price */
  "sku_list.discount_price": string,
  /** sku id */
  "sku_list.sku_id": number,
  /** page no */
  "page_no"?: number,
  /** activity name */
  "name"?: string,
  /** page size */
  "page_size"?: number,
  /** activity id */
  "id": number,
  /** source */
  "source"?: string,
}
export interface EarlyBirdActivityDeactivateSkusV2Data {
  "result"?: {
  "success"?: boolean,
  "module"?: Record<string, unknown>,
  "error_code"?: Array<{
    "error_code_params"?: Array<Record<string, unknown>>,
    "display_message"?: string,
    "log_message"?: string,
    "key"?: string,
  }>,
  "repeated"?: boolean,
  "retry"?: boolean,
  },
}
export type EarlyBirdActivityDeactivateSkusV2Response = ApiResponse<EarlyBirdActivityDeactivateSkusV2Data>

export interface EarlyBirdActivityIsWhitelistSellerRequest {}

export interface EarlyBirdActivityIsWhitelistSellerData {
  "result"?: {
  "success"?: boolean,
  "module"?: Record<string, unknown>,
  "error_code"?: Array<{
    "error_code_params"?: Array<Record<string, unknown>>,
    "display_message"?: string,
    "log_message"?: string,
    "key"?: string,
  }>,
  "repeated"?: boolean,
  "retry"?: boolean,
  },
}
export type EarlyBirdActivityIsWhitelistSellerResponse = ApiResponse<EarlyBirdActivityIsWhitelistSellerData>


export class LazadaEarlyBirdPriceAPIApi {
  constructor(private client: LazadaClient) {}

  /**
   * CreateEarlyBirdActivityV2
   * /activity/early/bird/create/v2 (POST)
   */
  async createEarlyBirdActivityV2(params: CreateEarlyBirdActivityV2Request, opts?: LazadaRequestOptions): Promise<CreateEarlyBirdActivityV2Response> {
    return this.client.request({"method":"POST","path":"/activity/early/bird/create/v2","params":["sku_list","sku_list.product_id","sku_list.order_total_budget","sku_list.discount_price","sku_list.sku_id","page_no","name","page_size","id","source"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * EarlyBirdActivityAddSkusV2
   * /activity/early/bird/addSkus/v2 (POST)
   */
  async earlyBirdActivityAddSkusV2(params: EarlyBirdActivityAddSkusV2Request, opts?: LazadaRequestOptions): Promise<EarlyBirdActivityAddSkusV2Response> {
    return this.client.request({"method":"POST","path":"/activity/early/bird/addSkus/v2","params":["sku_list","sku_list.product_id","sku_list.order_total_budget","sku_list.discount_price","sku_list.sku_id","page_no","name","page_size","id","source"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * EarlyBirdActivityDeactivateSkusV2
   * /activity/early/bird/deactivateSkus/v2 (POST)
   */
  async earlyBirdActivityDeactivateSkusV2(params: EarlyBirdActivityDeactivateSkusV2Request, opts?: LazadaRequestOptions): Promise<EarlyBirdActivityDeactivateSkusV2Response> {
    return this.client.request({"method":"POST","path":"/activity/early/bird/deactivateSkus/v2","params":["sku_list","sku_list.product_id","sku_list.order_total_budget","sku_list.discount_price","sku_list.sku_id","page_no","name","page_size","id","source"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * EarlyBirdActivityIsWhitelistSeller
   * /activity/early/bird/isWhitelistSeller (POST)
   */
  async earlyBirdActivityIsWhitelistSeller(params: EarlyBirdActivityIsWhitelistSellerRequest, opts?: LazadaRequestOptions): Promise<EarlyBirdActivityIsWhitelistSellerResponse> {
    return this.client.request({"method":"POST","path":"/activity/early/bird/isWhitelistSeller","params":[]}, params as unknown as Record<string, unknown>, opts)
  }
}
