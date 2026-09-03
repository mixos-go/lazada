// AUTO-GENERATED from Lazada reference docs (references/api/Cross Boarder Product API).
// Do not edit by hand; run `npm run generate` in sdk/.

import { LazadaClient } from '../../client'
import { ApiResponse, LazadaRequestOptions } from '../../types'

export interface CreateGlobalProductRequest {
  /** <a href='https://open.lazada.com/apps/doc/doc?nodeId=30715&docId=121751' target='_brank'>Parameter description</a> */
  "payload": unknown,
}
export interface CreateGlobalProductData {
  "data"?: Array<{
  "sku_list"?: Array<{
    "seller_sku"?: string,
  }>,
  }>,
}
export type CreateGlobalProductResponse = ApiResponse<CreateGlobalProductData>

export interface GetGlobalProductExtensionRequest {
  /** Batch size is limited to 50 */
  "global_item_ids"?: Array<number>,
  /** Batch size is limited to 50, if global_Item_ids is present, this field will be ignored */
  "item_ids"?: Array<number>,
  /** country,if global_Item_ids is present, this field will be ignored */
  "country"?: string,
}
export interface GetGlobalProductExtensionData {
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
  "data"?: Array<{
  "global_item_id"?: number,
  "item_id"?: number,
  "products"?: Array<{
    "abs"?: string,
    "item_id"?: number,
    "market"?: string,
    "semi_status"?: number,
    "skus"?: Array<{
      "sku_id"?: number,
      "seller_sku"?: string,
      "no_postage_fee"?: Record<string, unknown>,
      "special_price"?: Record<string, unknown>,
      "price"?: Record<string, unknown>,
    }>,
  }>,
  }>,
}
export type GetGlobalProductExtensionResponse = ApiResponse<GetGlobalProductExtensionData>

export interface GetGlobalProductStatusRequest {
  /** put the "sellerSku" as the key */
  "params": Record<string, unknown>,
}
export interface GetGlobalProductStatusData {
  "data"?: string,
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
}
export type GetGlobalProductStatusResponse = ApiResponse<GetGlobalProductStatusData>

export interface GetRecommendPriceRequest {
  /** request data */
  "payload": unknown,
}
export interface GetRecommendPriceData {
  "data"?: {
  "item_id"?: number,
  "skus"?: Array<{
    "seller_sku"?: string,
    "country_price"?: Array<{
      "market"?: string,
      "no_postage_price"?: string,
      "currency"?: string,
    }>,
    "sku_id"?: number,
  }>,
  "global_item_id"?: number,
  },
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
}
export type GetRecommendPriceResponse = ApiResponse<GetRecommendPriceData>

export interface GetUnfilledAttributeRequest {
  /** offset */
  "offset": number,
  /** pageSize */
  "limit": number,
  /** only support key_prop */
  "attributeTag": string,
}
export interface GetUnfilledAttributeData {
  "data"?: {
  "total_products"?: number,
  "products"?: Array<{
    "item_id"?: number,
    "primary_category"?: number,
    "seller_sku"?: string,
    "attributes"?: Array<{
      "advanced"?: {
        "is_key_prop"?: number,
      },
      "input_type"?: string,
      "options"?: Array<string>,
      "name"?: string,
      "is_mandatory"?: number,
      "attribute_type"?: string,
      "label"?: string,
    }>,
  }>,
  },
  "success"?: boolean,
  "error_detail"?: string,
  "error_code"?: string,
  "errors"?: string,
  "error_msg"?: string,
}
export type GetUnfilledAttributeResponse = ApiResponse<GetUnfilledAttributeData>

export interface GetUpgradableGlobalPlusProductListRequest {
  /** global */
  "type": string,
  /** country */
  "country"?: string,
  /** page no */
  "pageNo": string,
  /** page size */
  "pageSize": string,
  /** current index */
  "currentIndex": string,
  /** itemId or productId */
  "itemIds"?: Array<number>,
}
export interface GetUpgradableGlobalPlusProductListData {
  "data"?: {
  "total_products"?: number,
  "page_size"?: number,
  "type"?: string,
  "current_index"?: number,
  "products"?: Array<{
    "item_id"?: number,
    "skus"?: Array<{
      "item_id"?: number,
      "package_height"?: string,
      "package_weight"?: string,
      "package_length"?: string,
      "package_width"?: string,
      "seller_sku"?: string,
      "country_info"?: Array<{
        "market"?: string,
        "quantity"?: number,
        "price"?: string,
        "currency"?: string,
        "special_price"?: string,
        "item_id"?: number,
        "sku_id"?: number,
        "abs"?: string,
      }>,
      "sku_id"?: number,
    }>,
    "global_item_id"?: number,
  }>,
  "current_page"?: string,
  },
  "success"?: boolean,
}
export type GetUpgradableGlobalPlusProductListResponse = ApiResponse<GetUpgradableGlobalPlusProductListData>

export interface SemiProductUpdateRequest {
  /** request data */
  "payload": string,
}
export interface SemiProductUpdateData {
  "data"?: {
  "product_id"?: number,
  },
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
}
export type SemiProductUpdateResponse = ApiResponse<SemiProductUpdateData>

export interface SemiProductUpgradeRequest {
  /** request data */
  "payload": unknown,
}
export interface SemiProductUpgradeData {
  "data"?: {
  "product_id"?: number,
  },
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
}
export type SemiProductUpgradeResponse = ApiResponse<SemiProductUpgradeData>

export interface UpdateGlobalProductAttributeRequest {
  /** the content want to update */
  "payload": unknown,
}
export interface UpdateGlobalProductAttributeData {
  "success"?: boolean,
  "error_detail"?: string,
  "error_code"?: string,
  "errors"?: string,
  "error_msg"?: string,
}
export type UpdateGlobalProductAttributeResponse = ApiResponse<UpdateGlobalProductAttributeData>

export interface DeleteMerchantProductRequest {
  /** Product Types */
  "type": string,
  /** country,if type is "global", this field will be ignored */
  "country"?: string,
  /** When type is "global", it is the global product ID, when type is "single", product id is the IC product ID. */
  "product_id": number,
}
export interface DeleteMerchantProductData {
  "data"?: {
  "deleteGspProductResult"?: boolean,
  "deleteICProductResult"?: boolean,
  "deleteIcProductFailResultList"?: Array<{
    "productId"?: number,
    "market"?: string,
    "updateResult"?: boolean,
    "updateMsg"?: string,
  }>,
  },
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
}
export type DeleteMerchantProductResponse = ApiResponse<DeleteMerchantProductData>

export interface UpdateProductStatusRequest {
  /** Product Types */
  "type": string,
  /** country,if type is "global", this field will be ignored */
  "country"?: string,
  /** When type is "global", it is the global product ID, when type is "single", product id is the IC product ID. */
  "product_id": number,
  /** update product type */
  "status": string,
}
export interface UpdateProductStatusData {
  "data"?: {
  "update_gsp_product_result"?: boolean,
  "update_ic_product_result"?: boolean,
  "update_ic_product_fail_result_list"?: Array<{
    "product_id"?: number,
    "market"?: string,
    "update_result"?: boolean,
    "update_msg"?: string,
  }>,
  },
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
}
export type UpdateProductStatusResponse = ApiResponse<UpdateProductStatusData>


export class LazadaCrossBoarderProductAPIApi {
  constructor(private client: LazadaClient) {}

  /**
   * CreateGlobalProduct
   * /product/global/create (POST)
   */
  async createGlobalProduct(params: CreateGlobalProductRequest, opts?: LazadaRequestOptions): Promise<CreateGlobalProductResponse> {
    return this.client.request({"method":"POST","path":"/product/global/create","params":["payload"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetGlobalProductExtension
   * /product/global/extension (GET)
   */
  async getGlobalProductExtension(params: GetGlobalProductExtensionRequest, opts?: LazadaRequestOptions): Promise<GetGlobalProductExtensionResponse> {
    return this.client.request({"method":"GET","path":"/product/global/extension","params":["global_item_ids","item_ids","country"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetGlobalProductStatus
   * /product/global/status/get (GET)
   */
  async getGlobalProductStatus(params: GetGlobalProductStatusRequest, opts?: LazadaRequestOptions): Promise<GetGlobalProductStatusResponse> {
    return this.client.request({"method":"GET","path":"/product/global/status/get","params":["params"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetRecommendPrice
   * /product/global/semi/recommend/price/get (GET)
   */
  async getRecommendPrice(params: GetRecommendPriceRequest, opts?: LazadaRequestOptions): Promise<GetRecommendPriceResponse> {
    return this.client.request({"method":"GET","path":"/product/global/semi/recommend/price/get","params":["payload"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetUnfilledAttribute
   * /product/global/unfilled/attribute/get (GET)
   */
  async getUnfilledAttribute(params: GetUnfilledAttributeRequest, opts?: LazadaRequestOptions): Promise<GetUnfilledAttributeResponse> {
    return this.client.request({"method":"GET","path":"/product/global/unfilled/attribute/get","params":["offset","limit","attributeTag"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetUpgradableGlobalPlusProductList
   * /product/global/semi/avaible/get (GET)
   */
  async getUpgradableGlobalPlusProductList(params: GetUpgradableGlobalPlusProductListRequest, opts?: LazadaRequestOptions): Promise<GetUpgradableGlobalPlusProductListResponse> {
    return this.client.request({"method":"GET","path":"/product/global/semi/avaible/get","params":["type","country","pageNo","pageSize","currentIndex","itemIds"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * SemiProductUpdate
   * /product/global/semi/update (POST)
   */
  async semiProductUpdate(params: SemiProductUpdateRequest, opts?: LazadaRequestOptions): Promise<SemiProductUpdateResponse> {
    return this.client.request({"method":"POST","path":"/product/global/semi/update","params":["payload"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * SemiProductUpgrade
   * /product/global/semi/upgrade (GET)
   */
  async semiProductUpgrade(params: SemiProductUpgradeRequest, opts?: LazadaRequestOptions): Promise<SemiProductUpgradeResponse> {
    return this.client.request({"method":"GET","path":"/product/global/semi/upgrade","params":["payload"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * UpdateGlobalProductAttribute
   * /product/global/attribute/update (POST)
   */
  async updateGlobalProductAttribute(params: UpdateGlobalProductAttributeRequest, opts?: LazadaRequestOptions): Promise<UpdateGlobalProductAttributeResponse> {
    return this.client.request({"method":"POST","path":"/product/global/attribute/update","params":["payload"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * deleteMerchantProduct
   * /product/global/delete (POST)
   */
  async deleteMerchantProduct(params: DeleteMerchantProductRequest, opts?: LazadaRequestOptions): Promise<DeleteMerchantProductResponse> {
    return this.client.request({"method":"POST","path":"/product/global/delete","params":["type","country","product_id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * updateProductStatus
   * /product/global/update/status (POST)
   */
  async updateProductStatus(params: UpdateProductStatusRequest, opts?: LazadaRequestOptions): Promise<UpdateProductStatusResponse> {
    return this.client.request({"method":"POST","path":"/product/global/update/status","params":["type","country","product_id","status"]}, params as unknown as Record<string, unknown>, opts)
  }
}
