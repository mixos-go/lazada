// AUTO-GENERATED from Lazada reference docs (references/api/Flexicombo API).
// Do not edit by hand; run `npm run generate` in sdk/.

import { LazadaClient } from '../../client'
import { ApiResponse, LazadaRequestOptions } from '../../types'

export interface ActivateFlexiComboRequest {
  /** id */
  "id": number,
}
export interface ActivateFlexiComboData {
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
}
export type ActivateFlexiComboResponse = ApiResponse<ActivateFlexiComboData>

export interface AddFlexiComboProductsRequest {
  /** promotion id */
  "id": number,
  /** sku list that will be added to this flexi combo */
  "sku_ids": Array<number>,
}
export interface AddFlexiComboProductsData {
  "data"?: Record<string, unknown>,
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
}
export type AddFlexiComboProductsResponse = ApiResponse<AddFlexiComboProductsData>

export interface CreateFlexiComboRequest {
  /** apply scope: ENTIRE_STORE \ */
  "apply": string,
  /** sample list */
  "sample_skus"?: Array<Record<string, unknown>>,
  /** sample product id */
  "sample_skus.productId"?: number,
  /** sample sku id */
  "sample_skus.skuId"?: number,
  /** AMOUNT \ */
  "criteria_type": string,
  /** criteria value list */
  "criteria_value": Array<string>,
  /** orders numbers that can use flexi combo */
  "order_numbers": number,
  /** flexi combo name */
  "name": string,
  /** platform channel, default is 1 */
  "platform_channel"?: string,
  /** gift list */
  "gift_skus"?: Array<Record<string, unknown>>,
  /** gift product id */
  "gift_skus.productId"?: number,
  /** gift sku id */
  "gift_skus.skuId"?: number,
  /** start time */
  "start_time": number,
  /** money \ */
  "discount_type": string,
  /** end time */
  "end_time": number,
  /** discount value list */
  "discount_value": Array<string>,
  /** Stackable Discount，Ex. Buy 2SGD Save 1SGD, Buy 4SGD Save 2SGD, Buy 6SGD Save 3SGD, etc. */
  "stackable"?: string,
  /** buyer can choose gift/sample quantity limit value list */
  "gift_buy_limit_value"?: Array<string>,
}
export interface CreateFlexiComboData {
  "data"?: number,
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
}
export type CreateFlexiComboResponse = ApiResponse<CreateFlexiComboData>

export interface DeactivateFlexiComboRequest {
  /** id */
  "id": number,
}
export interface DeactivateFlexiComboData {
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
}
export type DeactivateFlexiComboResponse = ApiResponse<DeactivateFlexiComboData>

export interface DeleteFlexiComboProductsRequest {
  /** id */
  "id": number,
  /** sku list that will remove from flexi combo */
  "sku_ids": Array<number>,
}
export interface DeleteFlexiComboProductsData {
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
}
export type DeleteFlexiComboProductsResponse = ApiResponse<DeleteFlexiComboProductsData>

export interface GetFlexiComboDetailsRequest {
  /** id */
  "id": number,
}
export interface GetFlexiComboDetailsData {
  "data"?: {
  "order_used_numbers"?: number,
  "apply"?: string,
  "sample_skus"?: Array<{
    "product_id"?: number,
    "sku_id"?: number,
    "tier"?: number,
  }>,
  "criteria_type"?: string,
  "type"?: string,
  "criteria_value"?: Array<string>,
  "order_numbers"?: number,
  "platform_channel"?: string,
  "name"?: string,
  "gift_skus"?: Array<{
    "product_id"?: number,
    "sku_id"?: number,
    "tier"?: number,
  }>,
  "discount_type"?: string,
  "start_time"?: number,
  "end_time"?: number,
  "id"?: number,
  "discount_value"?: Array<string>,
  "status"?: string,
  "stackable"?: boolean,
  "gift_buy_limit_value"?: Array<string>,
  },
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
}
export type GetFlexiComboDetailsResponse = ApiResponse<GetFlexiComboDetailsData>

export interface ListFlexiComboRequest {
  /** current page */
  "cur_page": number,
  /** name */
  "name"?: string,
  /** page size */
  "page_size": number,
  /** NOT_START \ */
  "status"?: string,
}
export interface ListFlexiComboData {
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
  "data"?: {
  "page_size"?: number,
  "total"?: number,
  "current"?: number,
  "data_list"?: Array<{
    "order_numbers"?: number,
    "platform_channel"?: string,
    "name"?: string,
    "gift_skus"?: Array<{
      "product_id"?: number,
      "sku_id"?: number,
    }>,
    "start_time"?: number,
    "order_used_numbers"?: number,
    "discount_type"?: string,
    "end_time"?: number,
    "id"?: number,
    "discount_value"?: Array<string>,
    "status"?: string,
    "apply"?: string,
    "sample_skus"?: Array<{
      "product_id"?: number,
      "sku_id"?: number,
    }>,
    "criteria_type"?: string,
    "type"?: string,
    "criteria_value"?: Array<string>,
    "stackable"?: boolean,
  }>,
  },
}
export type ListFlexiComboResponse = ApiResponse<ListFlexiComboData>

export interface ListFlexiComboProductsRequest {
  /** current page */
  "cur_page": number,
  /** page size;Maximum value: 100; Minimum value: 10 */
  "page_size": number,
  /** flexi combo id */
  "id": number,
}
export interface ListFlexiComboProductsData {
  "data"?: {
  "total"?: number,
  "current"?: number,
  "data_list"?: Array<number>,
  "page_size"?: number,
  },
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
}
export type ListFlexiComboProductsResponse = ApiResponse<ListFlexiComboProductsData>

export interface UpdateFlexiComboRequest {
  /** apply scope: ENTIRE_SHOP \ */
  "apply": string,
  /** sample list */
  "sample_skus"?: Array<Record<string, unknown>>,
  /** sample product id */
  "sample_skus.productId"?: number,
  /** sample sku id */
  "sample_skus.skuId"?: number,
  /** AMOUNT \ */
  "criteria_type": string,
  /** criteria value list */
  "criteria_value": Array<string>,
  /** orders numbers that can use flexi combo */
  "order_numbers": number,
  /** flexi combo name */
  "name": string,
  /** platform channel */
  "platform_channel"?: string,
  /** gift list */
  "gift_skus"?: Array<Record<string, unknown>>,
  /** gift product id */
  "gift_skus.productId"?: number,
  /** gift sku id */
  "gift_skus.skuId"?: number,
  /** start time */
  "start_time": number,
  /** money \ */
  "discount_type": string,
  /** flexi combo id */
  "id": number,
  /** end time */
  "end_time": number,
  /** discount value list */
  "discount_value": Array<string>,
  /** Stackable Discount，Ex. Buy 2SGD Save 1SGD, Buy 4SGD Save 2SGD, Buy 6SGD Save 3SGD, etc. */
  "stackable"?: string,
  /** buyer can choose gift/sample quantity limit value list */
  "gift_buy_limit_value"?: Array<string>,
}
export interface UpdateFlexiComboData {
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
}
export type UpdateFlexiComboResponse = ApiResponse<UpdateFlexiComboData>


export class LazadaFlexicomboAPIApi {
  constructor(private client: LazadaClient) {}

  /**
   * ActivateFlexiCombo
   * /promotion/flexicombo/activate (POST)
   */
  async activateFlexiCombo(params: ActivateFlexiComboRequest, opts?: LazadaRequestOptions): Promise<ActivateFlexiComboResponse> {
    return this.client.request({"method":"POST","path":"/promotion/flexicombo/activate","params":["id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * AddFlexiComboProducts
   * /promotion/flexicombo/products/add (POST)
   */
  async addFlexiComboProducts(params: AddFlexiComboProductsRequest, opts?: LazadaRequestOptions): Promise<AddFlexiComboProductsResponse> {
    return this.client.request({"method":"POST","path":"/promotion/flexicombo/products/add","params":["id","sku_ids"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * CreateFlexiCombo
   * /promotion/flexicombo/create (POST)
   */
  async createFlexiCombo(params: CreateFlexiComboRequest, opts?: LazadaRequestOptions): Promise<CreateFlexiComboResponse> {
    return this.client.request({"method":"POST","path":"/promotion/flexicombo/create","params":["apply","sample_skus","sample_skus.productId","sample_skus.skuId","criteria_type","criteria_value","order_numbers","name","platform_channel","gift_skus","gift_skus.productId","gift_skus.skuId","start_time","discount_type","end_time","discount_value","stackable","gift_buy_limit_value"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * DeactivateFlexiCombo
   * /promotion/flexicombo/deactivate (POST)
   */
  async deactivateFlexiCombo(params: DeactivateFlexiComboRequest, opts?: LazadaRequestOptions): Promise<DeactivateFlexiComboResponse> {
    return this.client.request({"method":"POST","path":"/promotion/flexicombo/deactivate","params":["id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * DeleteFlexiComboProducts
   * /promotion/flexicombo/products/delete (POST)
   */
  async deleteFlexiComboProducts(params: DeleteFlexiComboProductsRequest, opts?: LazadaRequestOptions): Promise<DeleteFlexiComboProductsResponse> {
    return this.client.request({"method":"POST","path":"/promotion/flexicombo/products/delete","params":["id","sku_ids"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetFlexiComboDetails
   * /promotion/flexicombo/details (GET)
   */
  async getFlexiComboDetails(params: GetFlexiComboDetailsRequest, opts?: LazadaRequestOptions): Promise<GetFlexiComboDetailsResponse> {
    return this.client.request({"method":"GET","path":"/promotion/flexicombo/details","params":["id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * ListFlexiCombo
   * /promotion/flexicombo/list (GET)
   */
  async listFlexiCombo(params: ListFlexiComboRequest, opts?: LazadaRequestOptions): Promise<ListFlexiComboResponse> {
    return this.client.request({"method":"GET","path":"/promotion/flexicombo/list","params":["cur_page","name","page_size","status"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * ListFlexiComboProducts
   * /promotion/flexicombo/products/list (GET)
   */
  async listFlexiComboProducts(params: ListFlexiComboProductsRequest, opts?: LazadaRequestOptions): Promise<ListFlexiComboProductsResponse> {
    return this.client.request({"method":"GET","path":"/promotion/flexicombo/products/list","params":["cur_page","page_size","id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * UpdateFlexiCombo
   * /promotion/flexicombo/update (POST)
   */
  async updateFlexiCombo(params: UpdateFlexiComboRequest, opts?: LazadaRequestOptions): Promise<UpdateFlexiComboResponse> {
    return this.client.request({"method":"POST","path":"/promotion/flexicombo/update","params":["apply","sample_skus","sample_skus.productId","sample_skus.skuId","criteria_type","criteria_value","order_numbers","name","platform_channel","gift_skus","gift_skus.productId","gift_skus.skuId","start_time","discount_type","id","end_time","discount_value","stackable","gift_buy_limit_value"]}, params as unknown as Record<string, unknown>, opts)
  }
}
