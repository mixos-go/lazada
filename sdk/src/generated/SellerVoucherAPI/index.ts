// AUTO-GENERATED from Lazada reference docs (references/api/Seller Voucher API).
// Do not edit by hand; run `npm run generate` in sdk/.

import { LazadaClient } from '../../client'
import { ApiResponse, LazadaRequestOptions } from '../../types'

export interface SellerVoucheDeleteSelectedProductSKURequest {
  /** voucher type COLLECTIBLE_VOUCHER \ */
  "voucher_type": string,
  /** promotion ID */
  "id": number,
  /** sku ID list */
  "sku_ids": Array<number>,
}
export interface SellerVoucheDeleteSelectedProductSKUData {
  "success"?: boolean,
  "error_code"?: number,
  "error_msg"?: string,
}
export type SellerVoucheDeleteSelectedProductSKUResponse = ApiResponse<SellerVoucheDeleteSelectedProductSKUData>

export interface SellerVoucherActivateRequest {
  /** voucher type COLLECTIBLE_VOUCHER \ */
  "voucher_type": string,
  /** Promotion ID */
  "id": number,
}
export interface SellerVoucherActivateData {
  "success"?: boolean,
  "error_code"?: number,
  "error_msg"?: string,
}
export type SellerVoucherActivateResponse = ApiResponse<SellerVoucherActivateData>

export interface SellerVoucherAddSelectedProductSKURequest {
  /** voucher type COLLECTIBLE_VOUCHER \ */
  "voucher_type": string,
  /** promotion ID */
  "id": number,
  /** sku ID list */
  "sku_ids": Array<number>,
}
export interface SellerVoucherAddSelectedProductSKUData {
  "data"?: Record<string, unknown>,
  "success"?: boolean,
  "error_code"?: number,
  "error_msg"?: string,
}
export type SellerVoucherAddSelectedProductSKUResponse = ApiResponse<SellerVoucherAddSelectedProductSKUData>

export interface SellerVoucherCreateRequest {
  /** Discount details, if order value reaches set value, will money discount or percentage discount */
  "criteria_over_money": string,
  /** Voucher type, just set COLLECTIBLE_VOUCHER */
  "voucher_type": string,
  /** apply scope: ENTIRE_SHOP \ */
  "apply": string,
  /** The time that customers can collect the voucher */
  "collect_start"?: number,
  /** The area that customers can see the voucher. REGULAR_CHANNEL\ */
  "display_area": string,
  /** The period end time that customers can use the voucher */
  "period_end_time": number,
  /** Voucher name */
  "voucher_name": string,
  /** Discount type, MONEY_VALUE_OFF \ */
  "voucher_discount_type": string,
  /** Discount details, if order value reaches criteria_over_money value, will discount money value */
  "offering_money_value_off"?: string,
  /** The period start time that customers can use the voucher */
  "period_start_time": number,
  /** Voucher limit per customer */
  "limit": number,
  /** Revision should be greater than the current setting */
  "issued": number,
  /** Discount details, if order value reaches criteria_over_money value, allow maximum discount per order, just support percentage discount off type */
  "max_discount_offering_money_value"?: string,
  /** Discount details, if order value reaches criteria_over_money value, will percentage discount off value */
  "offering_percentage_discount_off"?: number,
}
export interface SellerVoucherCreateData {
  "data"?: number,
  "success"?: boolean,
  "error_code"?: number,
  "error_msg"?: string,
}
export type SellerVoucherCreateResponse = ApiResponse<SellerVoucherCreateData>

export interface SellerVoucherDeactivateRequest {
  /** voucher type COLLECTIBLE_VOUCHER \ */
  "voucher_type": string,
  /** Promotion ID */
  "id": number,
}
export interface SellerVoucherDeactivateData {
  "success"?: boolean,
  "error_code"?: number,
  "error_msg"?: string,
}
export type SellerVoucherDeactivateResponse = ApiResponse<SellerVoucherDeactivateData>

export interface SellerVoucherDetailQueryRequest {
  /** voucher type COLLECTIBLE_VOUCHER \ */
  "voucher_type": string,
  /** promotion ID */
  "id": number,
}
export interface SellerVoucherDetailQueryData {
  "data"?: {
  "criteria_over_money"?: string,
  "apply"?: string,
  "voucher_type"?: string,
  "collect_start"?: number,
  "display_area"?: string,
  "period_end_time"?: number,
  "voucher_name"?: string,
  "voucher_discount_type"?: string,
  "offering_money_value_off"?: string,
  "period_start_time"?: number,
  "limit"?: number,
  "order_used_budget"?: string,
  "currency"?: string,
  "id"?: number,
  "issued"?: number,
  "max_discount_offering_money_value"?: string,
  "voucher_code"?: string,
  "offering_percentage_discount_off"?: string,
  "status"?: string,
  },
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
}
export type SellerVoucherDetailQueryResponse = ApiResponse<SellerVoucherDetailQueryData>

export interface SellerVoucherListRequest {
  /** current page */
  "cur_page"?: number,
  /** voucher type COLLECTIBLE_VOUCHER \ */
  "voucher_type": string,
  /** promotion name */
  "name"?: string,
  /** page size */
  "page_size"?: number,
  /** NOT_START \ */
  "status"?: string,
}
export interface SellerVoucherListData {
  "data"?: {
  "total"?: number,
  "current"?: number,
  "data_list"?: Array<{
    "criteria_over_money"?: string,
    "apply"?: string,
    "voucher_type"?: string,
    "collect_start"?: number,
    "display_area"?: string,
    "period_end_time"?: number,
    "voucher_name"?: string,
    "voucher_discount_type"?: string,
    "offering_money_value_off"?: string,
    "period_start_time"?: number,
    "limit"?: number,
    "order_used_budget"?: number,
    "currency"?: string,
    "id"?: number,
    "issued"?: number,
    "max_discount_offering_money_value"?: string,
    "voucher_code"?: string,
    "offering_percentage_discount_off"?: string,
    "status"?: string,
  }>,
  "page_size"?: number,
  },
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
}
export type SellerVoucherListResponse = ApiResponse<SellerVoucherListData>

export interface SellerVoucherSelectedProductListRequest {
  /** voucher type COLLECTIBLE_VOUCHER \ */
  "voucher_type": string,
  /** Promotion ID */
  "id": number,
  /** cur page */
  "cur_page"?: number,
  /** page size */
  "page_size"?: number,
}
export interface SellerVoucherSelectedProductListData {
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
  "error_code"?: string,
  "error_msg"?: string,
}
export type SellerVoucherSelectedProductListResponse = ApiResponse<SellerVoucherSelectedProductListData>

export interface SellerVoucherUpdateRequest {
  /** Discount details, if order value reaches criteria_over_money value, allow maximum discount per order, just support percentage discount off type */
  "max_discount_offering_money_value"?: string,
  /** Discount details, if order value reaches criteria_over_money value, will percentage discount off value */
  "offering_percentage_discount_off"?: number,
  /** Promotion ID */
  "id": string,
  /** Discount details, if order value reaches set value, will money discount or percentage discount */
  "criteria_over_money": string,
  /** Voucher type, just set COLLECTIBLE_VOUCHER */
  "voucher_type": string,
  /** apply scope: ENTIRE_SHOP \ */
  "apply": string,
  /** The time that customers can collect the voucher */
  "collect_start"?: number,
  /** The area that customers can see the voucher. */
  "display_area": string,
  /** The period end time that customers can use the voucher */
  "period_end_time": number,
  /** Voucher name */
  "voucher_name": string,
  /** Discount type */
  "voucher_discount_type": string,
  /** Discount details, if order value reaches criteria_over_money value, will discount money value */
  "offering_money_value_off": string,
  /** The period start time that customers can use the voucher */
  "period_start_time": number,
  /** Voucher limit per customer */
  "limit": number,
  /** Revision should be greater than the current setting */
  "issued": number,
}
export interface SellerVoucherUpdateData {
  "data"?: number,
  "success"?: boolean,
  "error_code"?: number,
  "error_msg"?: string,
}
export type SellerVoucherUpdateResponse = ApiResponse<SellerVoucherUpdateData>


export class LazadaSellerVoucherAPIApi {
  constructor(private client: LazadaClient) {}

  /**
   * SellerVoucheDeleteSelectedProductSKU
   * /promotion/voucher/product/sku/remove (POST)
   */
  async sellerVoucheDeleteSelectedProductSKU(params: SellerVoucheDeleteSelectedProductSKURequest, opts?: LazadaRequestOptions): Promise<SellerVoucheDeleteSelectedProductSKUResponse> {
    return this.client.request({"method":"POST","path":"/promotion/voucher/product/sku/remove","params":["voucher_type","id","sku_ids"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * SellerVoucherActivate
   * /promotion/voucher/activate (POST)
   */
  async sellerVoucherActivate(params: SellerVoucherActivateRequest, opts?: LazadaRequestOptions): Promise<SellerVoucherActivateResponse> {
    return this.client.request({"method":"POST","path":"/promotion/voucher/activate","params":["voucher_type","id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * SellerVoucherAddSelectedProductSKU
   * /promotion/voucher/product/sku/add (POST)
   */
  async sellerVoucherAddSelectedProductSKU(params: SellerVoucherAddSelectedProductSKURequest, opts?: LazadaRequestOptions): Promise<SellerVoucherAddSelectedProductSKUResponse> {
    return this.client.request({"method":"POST","path":"/promotion/voucher/product/sku/add","params":["voucher_type","id","sku_ids"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * SellerVoucherCreate
   * /promotion/voucher/create (POST)
   */
  async sellerVoucherCreate(params: SellerVoucherCreateRequest, opts?: LazadaRequestOptions): Promise<SellerVoucherCreateResponse> {
    return this.client.request({"method":"POST","path":"/promotion/voucher/create","params":["criteria_over_money","voucher_type","apply","collect_start","display_area","period_end_time","voucher_name","voucher_discount_type","offering_money_value_off","period_start_time","limit","issued","max_discount_offering_money_value","offering_percentage_discount_off"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * SellerVoucherDeactivate
   * /promotion/voucher/deactivate (POST)
   */
  async sellerVoucherDeactivate(params: SellerVoucherDeactivateRequest, opts?: LazadaRequestOptions): Promise<SellerVoucherDeactivateResponse> {
    return this.client.request({"method":"POST","path":"/promotion/voucher/deactivate","params":["voucher_type","id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * SellerVoucherDetailQuery
   * /promotion/voucher/get (GET)
   */
  async sellerVoucherDetailQuery(params: SellerVoucherDetailQueryRequest, opts?: LazadaRequestOptions): Promise<SellerVoucherDetailQueryResponse> {
    return this.client.request({"method":"GET","path":"/promotion/voucher/get","params":["voucher_type","id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * SellerVoucherList
   * /promotion/vouchers/get (GET)
   */
  async sellerVoucherList(params: SellerVoucherListRequest, opts?: LazadaRequestOptions): Promise<SellerVoucherListResponse> {
    return this.client.request({"method":"GET","path":"/promotion/vouchers/get","params":["cur_page","voucher_type","name","page_size","status"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * SellerVoucherSelectedProductList
   * /promotion/voucher/products/get (GET)
   */
  async sellerVoucherSelectedProductList(params: SellerVoucherSelectedProductListRequest, opts?: LazadaRequestOptions): Promise<SellerVoucherSelectedProductListResponse> {
    return this.client.request({"method":"GET","path":"/promotion/voucher/products/get","params":["voucher_type","id","cur_page","page_size"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * SellerVoucherUpdate
   * /promotion/voucher/update (POST)
   */
  async sellerVoucherUpdate(params: SellerVoucherUpdateRequest, opts?: LazadaRequestOptions): Promise<SellerVoucherUpdateResponse> {
    return this.client.request({"method":"POST","path":"/promotion/voucher/update","params":["max_discount_offering_money_value","offering_percentage_discount_off","id","criteria_over_money","voucher_type","apply","collect_start","display_area","period_end_time","voucher_name","voucher_discount_type","offering_money_value_off","period_start_time","limit","issued"]}, params as unknown as Record<string, unknown>, opts)
  }
}
