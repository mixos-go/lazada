// AUTO-GENERATED from Lazada reference docs (references/api/Product API).
// Do not edit by hand; run `npm run generate` in sdk/.

import { LazadaClient } from '../../client'
import { ApiResponse, LazadaRequestOptions } from '../../types'

export interface AdjustSellableQuantityRequest {
  /** Please take demo as reference. */
  "payload": unknown,
}
export interface AdjustSellableQuantityData {
  "data"?: Record<string, unknown>,
}
export type AdjustSellableQuantityResponse = ApiResponse<AdjustSellableQuantityData>

export interface BatchUpdateSizeChartRequest {
  /** product size chart */
  "payload": unknown,
}
export interface BatchUpdateSizeChartData {
  "data"?: Record<string, unknown>,
}
export type BatchUpdateSizeChartResponse = ApiResponse<BatchUpdateSizeChartData>

export interface CreateProductRequest {
  /** <a href='https://open.lazada.com/apps/doc/doc?nodeId=30720&docId=120949' target='_brank'>Parameter description</a> */
  "payload": unknown,
}
export interface CreateProductData {
  "data"?: {
  "item_id"?: number,
  "sku_list"?: Array<{
    "seller_sku"?: string,
    "shop_sku"?: string,
    "sku_id"?: number,
  }>,
  "item_status"?: string,
  },
}
export type CreateProductResponse = ApiResponse<CreateProductData>

export interface DeactivateProductRequest {
  /** Parameter ItemId is mandatory, Skus is optional */
  "apiRequestBody": string,
}
export interface DeactivateProductData {
  "data"?: Record<string, unknown>,
}
export type DeactivateProductResponse = ApiResponse<DeactivateProductData>

export interface GetBrandByPagesRequest {
  /** Number of brands to skip (i.e., an offset into the result set; together with the "limit" parameter, simple result set paging is possible; if you do page through results, note that the list of brands might change during paging). */
  "startRow": string,
  /** The maximum number of brands that can be returned. If you omit this parameter, the default of 40 is used. The Maximum is 200. */
  "pageSize": string,
}
export interface GetBrandByPagesData {
  "data"?: {
  "start_row"?: number,
  "page_index"?: number,
  "total_page"?: number,
  "module"?: Array<{
    "global_identifier"?: string,
    "name_en"?: string,
    "brand_id"?: number,
    "name"?: string,
  }>,
  "enable_total"?: boolean,
  "page_size"?: number,
  "total_record"?: number,
  },
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
}
export type GetBrandByPagesResponse = ApiResponse<GetBrandByPagesData>

export interface GetCategoryAttributesRequest {
  /** identifiers of category code */
  "primary_category_id": string,
  /** Language code indicates the type of language you would like to translate. Please note not all languages are available in every region. For example, in Indonesia, only English and Indonesia are available. If you are passing a language code which does not belong to your area, null value might receive. */
  "language_code"?: string,
}
export interface GetCategoryAttributesData {
  "data"?: Array<{
  "advanced"?: Record<string, unknown>,
  "label"?: string,
  "name"?: string,
  "is_mandatory"?: number,
  "attribute_type"?: string,
  "input_type"?: string,
  "options"?: Array<{
    "name"?: string,
    "en_name"?: string,
    "id"?: number,
  }>,
  "is_sale_prop"?: number,
  "id"?: number,
  "unit"?: Array<{
    "type"?: Array<string>,
    "numericMin"?: string,
    "numericMax"?: string,
    "precision"?: number,
  }>,
  }>,
}
export type GetCategoryAttributesResponse = ApiResponse<GetCategoryAttributesData>

export interface GetCategorySuggestionRequest {
  /** Product Name */
  "product_name": string,
  /** image url */
  "image_url": string,
}
export interface GetCategorySuggestionData {
  "data"?: Array<{
  "categorySuggestions"?: Array<{
    "categoryPath"?: string,
    "categoryId"?: number,
    "categoryName"?: string,
  }>,
  }>,
}
export type GetCategorySuggestionResponse = ApiResponse<GetCategorySuggestionData>

export interface GetCategoryTreeRequest {
  /** Language code indicates the type of language you would like to translate. Please note not all languages are available in every region. For example, in Indonesia, only English and Indonesia are available. If you are passing a language code which does not belong to your area, null value might receive. */
  "language_code"?: string,
}
export interface GetCategoryTreeData {
  "data"?: Array<Record<string, unknown>>,
}
export type GetCategoryTreeResponse = ApiResponse<GetCategoryTreeData>

export interface GetNextCascadePropRequest {
  /** Category id */
  "categoryId": number,
  /** Cascade id. Query from https://open.lazada.com/apps/doc/api?path=%2Fcategory%2Fattributes%2Fget */
  "cascadeId": number,
  /** current cascade property path */
  "path"?: string,
}
export interface GetNextCascadePropData {
  "data"?: {
  "prop"?: {
    "id"?: number,
    "name"?: string,
    "required"?: boolean,
  },
  "propValue"?: Array<{
    "id"?: number,
    "name"?: string,
    "leaf"?: string,
  }>,
  },
}
export type GetNextCascadePropResponse = ApiResponse<GetNextCascadePropData>

export interface GetPreQcRulesRequest {
  /** query qc option */
  "option": number,
  /** query qc rules option.[1] return item limit, [2] return restricted category id, [1,2] return both */
  "option_set": Array<number>,
}
export interface GetPreQcRulesData {
  "values"?: Array<{
  "restricted_cate_ids"?: Array<number>,
  "item_limit"?: number,
  "item_count"?: number,
  }>,
}
export type GetPreQcRulesResponse = ApiResponse<GetPreQcRulesData>

export interface GetProductContentScoreRequest {
  /** Call this API; "Item Id" must be selected as the request parameter. */
  "item_id": number,
}
export interface GetProductContentScoreData {
  "result"?: {
  "data"?: {
    "productTitle"?: string,
    "score"?: number,
    "image"?: string,
    "total"?: number,
    "productId"?: number,
    "items"?: Array<{
      "key"?: string,
      "score"?: number,
      "total"?: number,
      "group"?: string,
      "label"?: string,
      "latest"?: boolean,
      "indicators"?: Array<{
        "critical"?: boolean,
        "text"?: string,
        "key"?: string,
      }>,
      "imageList"?: Array<{
        "score"?: number,
        "imageUrl"?: string,
        "text"?: string,
        "type"?: string,
        "imageType"?: number,
        "indicators"?: Array<{
          "text"?: string,
          "key"?: string,
        }>,
      }>,
      "itemTitle"?: string,
    }>,
  },
  },
}
export type GetProductContentScoreResponse = ApiResponse<GetProductContentScoreData>

export interface GetProductItemRequest {
  /** Call this API; "Item Id" must be selected as the request parameter */
  "item_id": number,
  /** The parameter has been deprecated and is no longer supported after November 15th, 2023. */
  "seller_sku"?: string,
}
export interface GetProductItemData {
  "data"?: {
  "subStatus"?: string,
  "suspendedSkus"?: Array<Record<string, unknown>>,
  "variation"?: {
    "variation1"?: {
      "name"?: string,
      "has_image"?: boolean,
      "customize"?: boolean,
      "options"?: Array<string>,
      "label"?: string,
    },
    "variation2"?: {
      "name"?: string,
      "has_image"?: boolean,
      "customize"?: boolean,
      "options"?: Array<string>,
      "label"?: string,
    },
    "variation3"?: {
      "name"?: string,
      "has_image"?: boolean,
      "customize"?: boolean,
      "options"?: Array<string>,
      "label"?: string,
    },
    "variation4"?: {
      "name"?: string,
      "has_image"?: boolean,
      "customize"?: boolean,
      "options"?: Array<string>,
      "label"?: string,
    },
  },
  "primary_category"?: number,
  "attributes"?: Record<string, unknown>,
  "skus"?: Array<Record<string, unknown>>,
  "item_id"?: number,
  "created_time"?: string,
  "updated_time"?: string,
  "images"?: string,
  "marketImages"?: string,
  "status"?: string,
  "trialProduct"?: boolean,
  "rejectReason"?: Array<Record<string, unknown>>,
  "hiddenReason"?: string,
  "hiddenStatus"?: string,
  "bizSupplement"?: Record<string, unknown>,
  "imageSequence"?: Record<string, unknown>,
  },
}
export type GetProductItemResponse = ApiResponse<GetProductItemData>

export interface GetProductsRequest {
  /** Returns the products with the status matching this parameter. Possible values are all, live, inactive, deleted, pending, rejected, sold-out. Mandatory. */
  "filter"?: string,
  /** Limits the returned product list to those updated before or on a specified date, given in ISO 8601 date format. Optional */
  "update_before"?: string,
  /** Limits the returned products to those created before or on the specified date, given in ISO 8601 date format. Optional */
  "create_before"?: string,
  /** Deprecated(The number of Items you want to skip before you start counting),It is recommended to use date for scrolling query.The maximum offset is 10000 */
  "offset"?: string,
  /** Limits the returned products to those created after or on the specified date, given in ISO 8601 date format. Optional */
  "create_after"?: string,
  /** Limits the returned products to those updated after or on the specified date, given in ISO 8601 date format. Optional */
  "update_after"?: string,
  /** The number of Items you would like to fetch from every response,The maximum is 50. */
  "limit"?: string,
  /** This value can be used to get more stock information. e.g., Options=1 means contain ReservedStock, RtsStock, PendingStock, RealTimeStock, FulfillmentBySellable. */
  "options"?: string,
  /** Only products that have the Seller SKU in this list will be returned. Input should be a JSON array. For example, ["Apple 6S Gold", "Apple 6S Black"]. It only matches the whole words. A maximum of 100 SKUs can be returned. */
  "sku_seller_list"?: string,
}
export interface GetProductsData {
  "data"?: {
  "total_products"?: number,
  "products"?: Array<{
    "primary_category"?: number,
    "attributes"?: Record<string, unknown>,
    "skus"?: Array<Record<string, unknown>>,
    "item_id"?: number,
    "created_time"?: string,
    "updated_time"?: string,
    "images"?: string,
    "marketImages"?: string,
    "status"?: string,
    "subStatus"?: string,
    "suspendedSkus"?: Array<Record<string, unknown>>,
    "trialProduct"?: boolean,
    "rejectReason"?: Array<Record<string, unknown>>,
    "hiddenReason"?: string,
    "hiddenStatus"?: string,
  }>,
  },
}
export type GetProductsResponse = ApiResponse<GetProductsData>

export interface GetQCAlertProductsRequest {
  /** Number of QC alert products to skip */
  "offset": string,
  /** The maximum number of QC alert products that can be returned. */
  "limit": string,
}
export interface GetQCAlertProductsData {
  "data"?: Array<{
  "productId"?: number,
  "categoryId"?: number,
  "deactivationTime"?: number,
  "suggestionCategories"?: Array<number>,
  }>,
}
export type GetQCAlertProductsResponse = ApiResponse<GetQCAlertProductsData>

export interface GetResponseRequest {
  /** Request ID from the MigrateImages request */
  "batch_id": string,
}
export interface GetResponseData {
  "data"?: Array<{
  "images"?: Array<{
    "url"?: string,
    "hash_code"?: string,
  }>,
  "errors"?: Array<{
    "field"?: string,
    "msg"?: string,
    "original_url"?: string,
  }>,
  }>,
}
export type GetResponse = ApiResponse<GetResponseData>

export interface GetSellerItemLimitRequest {}

export interface GetSellerItemLimitData {
  "success"?: boolean,
  "errorCodes"?: Array<string>,
  "errorMsgs"?: Array<string>,
  "data"?: {
  "onlineItemCount"?: number,
  "itemLimit"?: number,
  "payItemCnt"?: number,
  "payByrCnt"?: number,
  },
}
export type GetSellerItemLimitResponse = ApiResponse<GetSellerItemLimitData>

export interface GetSizeChartTemplateRequest {
  /** size chart template id */
  "template_id"?: number,
  /** size chart name */
  "template_name"?: string,
  /** page no */
  "page_no": number,
  /** page size */
  "page_size": number,
}
export interface GetSizeChartTemplateData {
  "data"?: {
  "total"?: number,
  "pageNo"?: number,
  "pageSize"?: number,
  "totalPage"?: number,
  "sizeChartResponses"?: Array<Record<string, unknown>>,
  },
}
export type GetSizeChartTemplateResponse = ApiResponse<GetSizeChartTemplateData>

export interface GetUnfilledAttributeItemRequest {
  /** page_index */
  "page_index": number,
  /** The tag of attributes. Currently only has one value "key_prop" 属性标示。当前只支持key_prop */
  "attribute_tag": string,
  /** The number of Products you would like to fetch from every response. The max number is 50. 返回的最大商品量。最大值50。商品级别 */
  "page_size": number,
  /** Multi-language of category attributes that need to be returned */
  "language_code": string,
}
export interface GetUnfilledAttributeItemData {
  "success"?: boolean,
  "total_products"?: number,
  "products"?: Array<{
  "item_id"?: number,
  "primary_category"?: number,
  "attributes"?: Array<{
    "advanced"?: Record<string, unknown>,
    "name"?: string,
    "input_type"?: string,
    "options"?: Array<{
      "name"?: string,
    }>,
    "is_mandatory"?: number,
    "attribute_type"?: string,
    "label"?: string,
  }>,
  "seller_sku_id"?: string,
  }>,
  "error_msg"?: string,
}
export type GetUnfilledAttributeItemResponse = ApiResponse<GetUnfilledAttributeItemData>

export interface MigrateImageRequest {
  /** Request body */
  "payload": unknown,
}
export interface MigrateImageData {
  "data"?: {
  "image"?: {
    "url"?: string,
    "hash_code"?: string,
  },
  },
}
export type MigrateImageResponse = ApiResponse<MigrateImageData>

export interface MigrateImagesRequest {
  /** Request body */
  "payload": unknown,
}
export interface MigrateImagesData {
  "batch_id"?: string,
}
export type MigrateImagesResponse = ApiResponse<MigrateImagesData>

export interface ProductCheckRequest {
  /** <a href='https://open.lazada.com/apps/doc/doc?nodeId=10557&docId=108253' target='_brank'>Parameter description</a> */
  "payload": string,
}
export interface ProductCheckData {
  "data"?: Record<string, unknown>,
}
export type ProductCheckResponse = ApiResponse<ProductCheckData>

export interface RemoveProductRequest {
  /** sellerSku in a json list to be removed. System supports a maximum number of 50 sellerSku in one request.;for example: itemid: 1269656765 sellerSku: test00111 、test00222、test00333, then Param should be: ["test00111","test00222","test00333"] */
  "seller_sku_list"?: string,
  /** Highest priority,skuId in a json list to be removed. System supports a maximum number of 50 skuId in one request.; for example: itemid: 1269656765 skuid: 5230534246, then Param should be: ["SkuId_1269656765_5230534246"] */
  "sku_id_list"?: string,
}
export interface RemoveProductData {
  "data"?: Record<string, unknown>,
}
export type RemoveProductResponse = ApiResponse<RemoveProductData>

export interface RemoveSkuRequest {
  /** <Request> <Product> <ItemId>1911687838</ItemId> <variation><variation1><name>color_family</name> </variation1></variation> <Skus> <Sku> <SellerSku>1911687838-1627269303789-1</SellerSku> </Sku> </Skus> </Product> </Request> */
  "payload": string,
}
export interface RemoveSkuData {
  "data"?: Record<string, unknown>,
}
export type RemoveSkuResponse = ApiResponse<RemoveSkuData>

export interface SetImagesRequest {
  /** <a href='https://open.lazada.com/apps/doc/doc?nodeId=10557&docId=108254' target='_brank'>Parameter description</a> */
  "payload": unknown,
}
export interface SetImagesData {
  "data"?: Record<string, unknown>,
}
export type SetImagesResponse = ApiResponse<SetImagesData>

export interface UpdatePriceQuantityRequest {
  /** <a href='https://open.lazada.com/apps/doc/doc?nodeId=42713&docId=121234' target='_brank'>Parameter description</a> */
  "payload": unknown,
}
export interface UpdatePriceQuantityData {
  "data"?: Record<string, unknown>,
}
export type UpdatePriceQuantityResponse = ApiResponse<UpdatePriceQuantityData>

export interface UpdateProductRequest {
  /** <a href='https://open.lazada.com/apps/doc/doc?nodeId=30715&docId=121228' target='_brank'>Parameter description</a> */
  "payload": string,
}
export interface UpdateProductData {
  "data"?: {
  "variation"?: {
    "Variation1"?: {
      "name"?: string,
      "has_image"?: boolean,
      "customize"?: boolean,
      "options"?: Array<string>,
    },
    "Variation2"?: {
      "name"?: string,
      "has_image"?: boolean,
      "customize"?: boolean,
      "options"?: Array<string>,
    },
    "Variation3"?: {
      "name"?: string,
      "has_image"?: boolean,
      "customize"?: boolean,
      "options"?: Array<string>,
    },
    "Variation4"?: {
      "name"?: string,
      "has_image"?: boolean,
      "customize"?: boolean,
      "options"?: Array<string>,
    },
  },
  "item_status"?: string,
  },
}
export type UpdateProductResponse = ApiResponse<UpdateProductData>

export interface UpdateSellableQuantityRequest {
  /** Please take demo as reference. */
  "payload": string,
}
export interface UpdateSellableQuantityData {
  "data"?: Record<string, unknown>,
}
export type UpdateSellableQuantityResponse = ApiResponse<UpdateSellableQuantityData>

export interface UploadImageRequest {
  /** Upload an image file */
  "image": Array<unknown>,
}
export interface UploadImageData {
  "data"?: {
  "image"?: {
    "url"?: string,
    "hash_code"?: string,
  },
  },
}
export type UploadImageResponse = ApiResponse<UploadImageData>


export class LazadaProductAPIApi {
  constructor(private client: LazadaClient) {}

  /**
   * AdjustSellableQuantity
   * /product/stock/sellable/adjust (POST)
   */
  async adjustSellableQuantity(params: AdjustSellableQuantityRequest, opts?: LazadaRequestOptions): Promise<AdjustSellableQuantityResponse> {
    return this.client.request({"method":"POST","path":"/product/stock/sellable/adjust","params":["payload"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * BatchUpdateSizeChart
   * /size/chart/batch/update (POST)
   */
  async batchUpdateSizeChart(params: BatchUpdateSizeChartRequest, opts?: LazadaRequestOptions): Promise<BatchUpdateSizeChartResponse> {
    return this.client.request({"method":"POST","path":"/size/chart/batch/update","params":["payload"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * CreateProduct
   * /product/create (POST)
   */
  async createProduct(params: CreateProductRequest, opts?: LazadaRequestOptions): Promise<CreateProductResponse> {
    return this.client.request({"method":"POST","path":"/product/create","params":["payload"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * DeactivateProduct
   * /product/deactivate (POST)
   */
  async deactivateProduct(params: DeactivateProductRequest, opts?: LazadaRequestOptions): Promise<DeactivateProductResponse> {
    return this.client.request({"method":"POST","path":"/product/deactivate","params":["apiRequestBody"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetBrandByPages
   * /category/brands/query (GET)
   */
  async getBrandByPages(params: GetBrandByPagesRequest, opts?: LazadaRequestOptions): Promise<GetBrandByPagesResponse> {
    return this.client.request({"method":"GET","path":"/category/brands/query","params":["startRow","pageSize"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetCategoryAttributes
   * /category/attributes/get (GET)
   */
  async getCategoryAttributes(params: GetCategoryAttributesRequest, opts?: LazadaRequestOptions): Promise<GetCategoryAttributesResponse> {
    return this.client.request({"method":"GET","path":"/category/attributes/get","params":["primary_category_id","language_code"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetCategorySuggestion
   * /product/category/suggestion/get (GET)
   */
  async getCategorySuggestion(params: GetCategorySuggestionRequest, opts?: LazadaRequestOptions): Promise<GetCategorySuggestionResponse> {
    return this.client.request({"method":"GET","path":"/product/category/suggestion/get","params":["product_name","image_url"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetCategoryTree
   * /category/tree/get (GET)
   */
  async getCategoryTree(params: GetCategoryTreeRequest, opts?: LazadaRequestOptions): Promise<GetCategoryTreeResponse> {
    return this.client.request({"method":"GET","path":"/category/tree/get","params":["language_code"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetNextCascadeProp
   * /category/cascade/getNextCascadeProp (GET)
   */
  async getNextCascadeProp(params: GetNextCascadePropRequest, opts?: LazadaRequestOptions): Promise<GetNextCascadePropResponse> {
    return this.client.request({"method":"GET","path":"/category/cascade/getNextCascadeProp","params":["categoryId","cascadeId","path"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetPreQcRules
   * /product/seller/item/getPreQcRules (GET)
   */
  async getPreQcRules(params: GetPreQcRulesRequest, opts?: LazadaRequestOptions): Promise<GetPreQcRulesResponse> {
    return this.client.request({"method":"GET","path":"/product/seller/item/getPreQcRules","params":["option","option_set"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetProductContentScore
   * /product/content/score/get (GET)
   */
  async getProductContentScore(params: GetProductContentScoreRequest, opts?: LazadaRequestOptions): Promise<GetProductContentScoreResponse> {
    return this.client.request({"method":"GET","path":"/product/content/score/get","params":["item_id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetProductItem
   * /product/item/get (GET)
   */
  async getProductItem(params: GetProductItemRequest, opts?: LazadaRequestOptions): Promise<GetProductItemResponse> {
    return this.client.request({"method":"GET","path":"/product/item/get","params":["item_id","seller_sku"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetProducts
   * /products/get (GET)
   */
  async getProducts(params: GetProductsRequest, opts?: LazadaRequestOptions): Promise<GetProductsResponse> {
    return this.client.request({"method":"GET","path":"/products/get","params":["filter","update_before","create_before","offset","create_after","update_after","limit","options","sku_seller_list"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetQCAlertProducts
   * /product/qc/alert/list (GET)
   */
  async getQCAlertProducts(params: GetQCAlertProductsRequest, opts?: LazadaRequestOptions): Promise<GetQCAlertProductsResponse> {
    return this.client.request({"method":"GET","path":"/product/qc/alert/list","params":["offset","limit"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetResponse
   * /image/response/get (GET)
   */
  async getResponse(params: GetResponseRequest, opts?: LazadaRequestOptions): Promise<GetResponse> {
    return this.client.request({"method":"GET","path":"/image/response/get","params":["batch_id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetSellerItemLimit
   * /product/seller/item/limit (GET)
   */
  async getSellerItemLimit(params: GetSellerItemLimitRequest, opts?: LazadaRequestOptions): Promise<GetSellerItemLimitResponse> {
    return this.client.request({"method":"GET","path":"/product/seller/item/limit","params":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetSizeChartTemplate
   * /size/chart/template/get (GET)
   */
  async getSizeChartTemplate(params: GetSizeChartTemplateRequest, opts?: LazadaRequestOptions): Promise<GetSizeChartTemplateResponse> {
    return this.client.request({"method":"GET","path":"/size/chart/template/get","params":["template_id","template_name","page_no","page_size"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetUnfilledAttributeItem
   * /product/unfilled/attribute/get (GET)
   */
  async getUnfilledAttributeItem(params: GetUnfilledAttributeItemRequest, opts?: LazadaRequestOptions): Promise<GetUnfilledAttributeItemResponse> {
    return this.client.request({"method":"GET","path":"/product/unfilled/attribute/get","params":["page_index","attribute_tag","page_size","language_code"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * MigrateImage
   * /image/migrate (POST)
   */
  async migrateImage(params: MigrateImageRequest, opts?: LazadaRequestOptions): Promise<MigrateImageResponse> {
    return this.client.request({"method":"POST","path":"/image/migrate","params":["payload"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * MigrateImages
   * /images/migrate (POST)
   */
  async migrateImages(params: MigrateImagesRequest, opts?: LazadaRequestOptions): Promise<MigrateImagesResponse> {
    return this.client.request({"method":"POST","path":"/images/migrate","params":["payload"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * ProductCheck
   * /product/pre/check (GET)
   */
  async productCheck(params: ProductCheckRequest, opts?: LazadaRequestOptions): Promise<ProductCheckResponse> {
    return this.client.request({"method":"GET","path":"/product/pre/check","params":["payload"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * RemoveProduct
   * /product/remove (POST)
   */
  async removeProduct(params: RemoveProductRequest, opts?: LazadaRequestOptions): Promise<RemoveProductResponse> {
    return this.client.request({"method":"POST","path":"/product/remove","params":["seller_sku_list","sku_id_list"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * RemoveSku
   * /product/sku/remove (POST)
   */
  async removeSku(params: RemoveSkuRequest, opts?: LazadaRequestOptions): Promise<RemoveSkuResponse> {
    return this.client.request({"method":"POST","path":"/product/sku/remove","params":["payload"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * SetImages
   * /images/set (POST)
   */
  async setImages(params: SetImagesRequest, opts?: LazadaRequestOptions): Promise<SetImagesResponse> {
    return this.client.request({"method":"POST","path":"/images/set","params":["payload"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * UpdatePriceQuantity
   * /product/price_quantity/update (POST)
   */
  async updatePriceQuantity(params: UpdatePriceQuantityRequest, opts?: LazadaRequestOptions): Promise<UpdatePriceQuantityResponse> {
    return this.client.request({"method":"POST","path":"/product/price_quantity/update","params":["payload"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * UpdateProduct
   * /product/update (POST)
   */
  async updateProduct(params: UpdateProductRequest, opts?: LazadaRequestOptions): Promise<UpdateProductResponse> {
    return this.client.request({"method":"POST","path":"/product/update","params":["payload"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * UpdateSellableQuantity
   * /product/stock/sellable/update (GET)
   */
  async updateSellableQuantity(params: UpdateSellableQuantityRequest, opts?: LazadaRequestOptions): Promise<UpdateSellableQuantityResponse> {
    return this.client.request({"method":"GET","path":"/product/stock/sellable/update","params":["payload"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * UploadImage
   * /image/upload (POST)
   */
  async uploadImage(params: UploadImageRequest, opts?: LazadaRequestOptions): Promise<UploadImageResponse> {
    return this.client.request({"method":"POST","path":"/image/upload","params":["image"]}, params as unknown as Record<string, unknown>, opts)
  }
}
