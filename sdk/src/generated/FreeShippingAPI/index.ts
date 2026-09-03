// AUTO-GENERATED from Lazada reference docs (references/api/Free Shipping API).
// Do not edit by hand; run `npm run generate` in sdk/.

import { LazadaClient } from '../../client'
import { ApiResponse, LazadaRequestOptions } from '../../types'

export interface FreeShippingActivateRequest {
  /** promotion id */
  "id": number,
}
export interface FreeShippingActivateData {
  "success"?: boolean,
  "error_code"?: number,
  "error_msg"?: string,
}
export type FreeShippingActivateResponse = ApiResponse<FreeShippingActivateData>

export interface FreeShippingAddSelectedProductSKURequest {
  /** promotion id */
  "id": number,
  /** sku id list */
  "sku_ids": Array<number>,
}
export interface FreeShippingAddSelectedProductSKUData {
  "data"?: Record<string, unknown>,
  "success"?: boolean,
  "error_code"?: number,
  "error_msg"?: string,
}
export type FreeShippingAddSelectedProductSKUResponse = ApiResponse<FreeShippingAddSelectedProductSKUData>

export interface FreeShippingCreateRequest {
  /** UNLIMITED_BUDGET \ */
  "budget_type": string,
  /** template type, MANUALLY \ */
  "template_type"?: string,
  /** apply scope: ENTIRE_SHOP \ */
  "apply": string,
  /** when specific period required, the period end time that this promotion takes effect (timestamp) */
  "period_end_time": number,
  /** template code */
  "template_code"?: string,
  /** product category id */
  "category_name"?: string,
  /** when limited budget required */
  "budget_value"?: string,
  /** promotion name */
  "promotion_name": string,
  /** LONG_TERM \ */
  "period_type": string,
  /** ALL_REGIONS \ */
  "region_type": string,
  /** when specific period required, the period start time that this promotion takes effect (timestamp) */
  "period_start_time": number,
  /** when CAMPAIGN template type and CAMPAIGN_PRODUCTS apply type required */
  "campaign_tag"?: string,
  /** when SPECIAL_REGIONS required, data from regions query api */
  "region_value"?: Array<string>,
  /** data from delivery options query list api */
  "delivery_option": string,
  /** promotion tier list */
  "tiers": Array<Record<string, unknown>>,
  /** deal criteria value */
  "tiers.filter": string,
  /** when partial subsidy discount type required，shipping fee subsidy value */
  "tiers.result"?: string,
  /** shipping fee subsidy type,FULL_SUBSIDY\ */
  "discount_type": string,
  /** the criteria that customer can enjoy shipping fee subsidy, MONEY_VALUE_FROM_X\ */
  "deal_criteria": string,
}
export interface FreeShippingCreateData {
  "data"?: number,
  "success"?: boolean,
  "error_code"?: number,
  "error_msg"?: string,
}
export type FreeShippingCreateResponse = ApiResponse<FreeShippingCreateData>

export interface FreeShippingDeactivateRequest {
  /** promotion id */
  "id": number,
}
export interface FreeShippingDeactivateData {
  "success"?: boolean,
  "error_code"?: number,
  "error_msg"?: string,
}
export type FreeShippingDeactivateResponse = ApiResponse<FreeShippingDeactivateData>

export interface FreeShippingDeleteSelectedProductSKURequest {
  /** promotion id */
  "id": number,
  /** sku id list */
  "sku_ids": Array<number>,
}
export interface FreeShippingDeleteSelectedProductSKUData {
  "success"?: boolean,
  "error_code"?: number,
  "error_msg"?: string,
}
export type FreeShippingDeleteSelectedProductSKUResponse = ApiResponse<FreeShippingDeleteSelectedProductSKUData>

export interface FreeShippingDeliveryOptionsQueryRequest {}

export interface FreeShippingDeliveryOptionsQueryData {
  "data"?: Array<{
  "name"?: string,
  "value"?: string,
  }>,
  "success"?: boolean,
  "error_code"?: number,
  "error_msg"?: string,
}
export type FreeShippingDeliveryOptionsQueryResponse = ApiResponse<FreeShippingDeliveryOptionsQueryData>

export interface FreeShippingGetRequest {
  /** promotion id */
  "id": number,
}
export interface FreeShippingGetData {
  "data"?: {
  "template_type"?: string,
  "budget_type"?: string,
  "used_budget_value"?: string,
  "apply"?: string,
  "period_end_time"?: number,
  "template_code"?: string,
  "category_name"?: string,
  "budget_value"?: string,
  "promotion_name"?: string,
  "period_type"?: string,
  "region_type"?: string,
  "period_start_time"?: number,
  "platform_channel"?: string,
  "campaign_tag"?: string,
  "region_value"?: Array<string>,
  "currency"?: string,
  "id"?: number,
  "delivery_option"?: string,
  "promo_tier"?: Array<{
    "tiers"?: Array<{
      "filter"?: string,
      "result"?: string,
    }>,
    "discount_type"?: string,
    "deal_criteria"?: string,
  }>,
  "status"?: string,
  },
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
}
export type FreeShippingGetResponse = ApiResponse<FreeShippingGetData>

export interface FreeShippingListRequest {
  /** current page */
  "curPage"?: number,
  /** promotion name */
  "name"?: string,
  /** page size */
  "pageSize"?: number,
  /** NOT_START \ */
  "status"?: string,
}
export interface FreeShippingListData {
  "data"?: {
  "total"?: number,
  "current"?: number,
  "data_list"?: Array<{
    "budget_type"?: string,
    "template_type"?: string,
    "used_budget_value"?: string,
    "apply"?: string,
    "period_end_time"?: number,
    "template_code"?: string,
    "category_name"?: string,
    "budget_value"?: string,
    "promotion_name"?: string,
    "period_type"?: string,
    "region_type"?: string,
    "period_start_time"?: number,
    "platform_channel"?: string,
    "campaign_tag"?: string,
    "region_value"?: Array<string>,
    "currency"?: string,
    "id"?: number,
    "delivery_option"?: string,
    "promo_tier"?: Array<{
      "tiers"?: Array<{
        "filter"?: string,
        "result"?: string,
      }>,
      "discount_type"?: string,
      "deal_criteria"?: string,
    }>,
    "status"?: string,
  }>,
  "page_size"?: number,
  },
  "success"?: boolean,
  "error_code"?: number,
  "error_msg"?: string,
}
export type FreeShippingListResponse = ApiResponse<FreeShippingListData>

export interface FreeShippingRegionsQueryRequest {}

export interface FreeShippingRegionsQueryData {
  "data"?: Array<{
  "name"?: string,
  "value"?: string,
  }>,
  "success"?: boolean,
  "error_code"?: number,
  "error_msg"?: string,
}
export type FreeShippingRegionsQueryResponse = ApiResponse<FreeShippingRegionsQueryData>

export interface FreeShippingSelectedProductListRequest {
  /** current page */
  "curPage"?: number,
  /** page size */
  "pageSize"?: number,
  /** promotion id */
  "id": number,
}
export interface FreeShippingSelectedProductListData {
  "data"?: {
  "total"?: number,
  "current"?: number,
  "data_list"?: Array<{
    "product_id"?: number,
    "sku_ids"?: Array<number>,
  }>,
  "page_size"?: number,
  },
  "success"?: boolean,
  "error_code"?: number,
  "error_msg"?: string,
}
export type FreeShippingSelectedProductListResponse = ApiResponse<FreeShippingSelectedProductListData>

export interface FreeShippingUpdateRequest {
  /** UNLIMITED_BUDGET \ */
  "budget_type": string,
  /** template type, MANUALLY \ */
  "template_type": string,
  /** apply scope: ENTIRE_SHOP \ */
  "apply": string,
  /** when specific period required, the period end time that this promotion takes effect (timestamp) */
  "period_end_time": number,
  /** template code */
  "template_code"?: string,
  /** product category id */
  "category_name"?: string,
  /** when limited budget required */
  "budget_value"?: string,
  /** promotion name */
  "promotion_name": string,
  /** LONG_TERM \ */
  "period_type": string,
  /** ALL_REGIONS \ */
  "region_type": string,
  /** when specific period required, the period start time that this promotion takes effect (timestamp) */
  "period_start_time": number,
  /** when CAMPAIGN template type and CAMPAIGN_PRODUCTS apply type required */
  "campaign_tag"?: string,
  /** when SPECIAL_REGIONS required, data from regions query api */
  "region_value"?: Array<string>,
  /** promotion id */
  "id": number,
  /** data from delivery options query list api */
  "delivery_option": string,
  /** shipping fee subsidy type,FULL_SUBSIDY\ */
  "discount_type": string,
  /** the criteria that customer can enjoy shipping fee subsidy, MONEY_VALUE_FROM_X\ */
  "deal_criteria": string,
  /** promotion tier list */
  "tiers": Array<Record<string, unknown>>,
  /** deal criteria value */
  "tiers.filter": string,
  /** when partial subsidy discount type required，shipping fee subsidy value */
  "tiers.result"?: string,
}
export interface FreeShippingUpdateData {
  "data"?: number,
  "success"?: boolean,
  "error_code"?: number,
  "error_msg"?: string,
}
export type FreeShippingUpdateResponse = ApiResponse<FreeShippingUpdateData>


export class LazadaFreeShippingAPIApi {
  constructor(private client: LazadaClient) {}

  /**
   * FreeShippingActivate
   * /promotion/freeshipping/activate (POST)
   */
  async freeShippingActivate(params: FreeShippingActivateRequest, opts?: LazadaRequestOptions): Promise<FreeShippingActivateResponse> {
    return this.client.request({"method":"POST","path":"/promotion/freeshipping/activate","params":["id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * FreeShippingAddSelectedProductSKU
   * /promotion/freeshipping/product/sku/add (POST)
   */
  async freeShippingAddSelectedProductSKU(params: FreeShippingAddSelectedProductSKURequest, opts?: LazadaRequestOptions): Promise<FreeShippingAddSelectedProductSKUResponse> {
    return this.client.request({"method":"POST","path":"/promotion/freeshipping/product/sku/add","params":["id","sku_ids"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * FreeShippingCreate
   * /promotion/freeshipping/create (POST)
   */
  async freeShippingCreate(params: FreeShippingCreateRequest, opts?: LazadaRequestOptions): Promise<FreeShippingCreateResponse> {
    return this.client.request({"method":"POST","path":"/promotion/freeshipping/create","params":["budget_type","template_type","apply","period_end_time","template_code","category_name","budget_value","promotion_name","period_type","region_type","period_start_time","campaign_tag","region_value","delivery_option","tiers","tiers.filter","tiers.result","discount_type","deal_criteria"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * FreeShippingDeactivate
   * /promotion/freeshipping/deactivate (POST)
   */
  async freeShippingDeactivate(params: FreeShippingDeactivateRequest, opts?: LazadaRequestOptions): Promise<FreeShippingDeactivateResponse> {
    return this.client.request({"method":"POST","path":"/promotion/freeshipping/deactivate","params":["id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * FreeShippingDeleteSelectedProductSKU
   * /promotion/freeshipping/product/sku/remove (POST)
   */
  async freeShippingDeleteSelectedProductSKU(params: FreeShippingDeleteSelectedProductSKURequest, opts?: LazadaRequestOptions): Promise<FreeShippingDeleteSelectedProductSKUResponse> {
    return this.client.request({"method":"POST","path":"/promotion/freeshipping/product/sku/remove","params":["id","sku_ids"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * FreeShippingDeliveryOptionsQuery
   * /promotion/freeshipping/deliveryoptions/get (GET)
   */
  async freeShippingDeliveryOptionsQuery(params: FreeShippingDeliveryOptionsQueryRequest, opts?: LazadaRequestOptions): Promise<FreeShippingDeliveryOptionsQueryResponse> {
    return this.client.request({"method":"GET","path":"/promotion/freeshipping/deliveryoptions/get","params":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * FreeShippingGet
   * /promotion/freeshipping/get (GET)
   */
  async freeShippingGet(params: FreeShippingGetRequest, opts?: LazadaRequestOptions): Promise<FreeShippingGetResponse> {
    return this.client.request({"method":"GET","path":"/promotion/freeshipping/get","params":["id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * FreeShippingList
   * /promotion/freeshippings/get (GET)
   */
  async freeShippingList(params: FreeShippingListRequest, opts?: LazadaRequestOptions): Promise<FreeShippingListResponse> {
    return this.client.request({"method":"GET","path":"/promotion/freeshippings/get","params":["curPage","name","pageSize","status"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * FreeShippingRegionsQuery
   * /promotion/freeshipping/regions/get (GET)
   */
  async freeShippingRegionsQuery(params: FreeShippingRegionsQueryRequest, opts?: LazadaRequestOptions): Promise<FreeShippingRegionsQueryResponse> {
    return this.client.request({"method":"GET","path":"/promotion/freeshipping/regions/get","params":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * FreeShippingSelectedProductList
   * /promotion/freeshipping/products/get (GET)
   */
  async freeShippingSelectedProductList(params: FreeShippingSelectedProductListRequest, opts?: LazadaRequestOptions): Promise<FreeShippingSelectedProductListResponse> {
    return this.client.request({"method":"GET","path":"/promotion/freeshipping/products/get","params":["curPage","pageSize","id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * FreeShippingUpdate
   * /promotion/freeshipping/update (POST)
   */
  async freeShippingUpdate(params: FreeShippingUpdateRequest, opts?: LazadaRequestOptions): Promise<FreeShippingUpdateResponse> {
    return this.client.request({"method":"POST","path":"/promotion/freeshipping/update","params":["budget_type","template_type","apply","period_end_time","template_code","category_name","budget_value","promotion_name","period_type","region_type","period_start_time","campaign_tag","region_value","id","delivery_option","discount_type","deal_criteria","tiers","tiers.filter","tiers.result"]}, params as unknown as Record<string, unknown>, opts)
  }
}
