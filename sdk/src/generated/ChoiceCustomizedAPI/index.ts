// AUTO-GENERATED from Lazada reference docs (references/api/Choice Customized API).
// Do not edit by hand; run `npm run generate` in sdk/.

import { LazadaClient } from '../../client'
import { ApiResponse, LazadaRequestOptions } from '../../types'

export interface BatchDeliverJitPurchaseOrderRequest {
  /** 采购单号列表，最大100个。{["POJ1001","POJ1002"]} */
  "purchaseOrderNoList": Array<string>,
  /** 揽收联系人地址区域，如：CN： 当前支持CN，VN，TH，PH，ID，MY一共6个地区。必填。 */
  "shipperAreaCode": string,
  /** 揽收联系人地址id。必填。 */
  "shipperAddressId": number,
  /** 揽收详细地址。必填。 */
  "shipperAddressDetail": string,
  /** 揽收联系人电话。必填。 */
  "shipperMobilePhone": string,
  /** 揽收联系人姓名。必填。 */
  "shipperName": string,
  /** 预约揽收日期 {yyyy-MM-dd}。非必填 */
  "estimatedPickupDate"?: string,
}
export interface BatchDeliverJitPurchaseOrderData {
  "result"?: Array<{
  "data"?: Array<{
    "status"?: string,
    "pickup_no"?: string,
    "allow_date_range"?: Array<string>,
    "purchase_order_no"?: string,
    "error_message"?: string,
  }>,
  "success"?: boolean,
  "error_message"?: string,
  "error_code"?: string,
  }>,
}
export type BatchDeliverJitPurchaseOrderResponse = ApiResponse<BatchDeliverJitPurchaseOrderData>

export interface EditChoiceSkuStockRequest {
  /** item id */
  "item_id": number,
  /** The country site of the queried Product */
  "site": string,
  /** Key：sku_id Value: sellable stock */
  "sku_edit_stock": string,
}
export interface EditChoiceSkuStockData {
  "data"?: Array<{
  "success_sku"?: Array<number>,
  "failed_sku"?: Array<Record<string, unknown>>,
  }>,
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
}
export type EditChoiceSkuStockResponse = ApiResponse<EditChoiceSkuStockData>

export interface GetChoiceProductItemRequest {
  /** Call this API; Either "Item Id" or "Seller Sku" must be selected as the request parameter */
  "item_id"?: number,
  /** Call this API; Either "Item Id" or "Seller Sku" must be selected as the request parameter */
  "seller_sku"?: string,
  /** The country site of the queried Product */
  "site": string,
}
export interface GetChoiceProductItemData {
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
  },
}
export type GetChoiceProductItemResponse = ApiResponse<GetChoiceProductItemData>

export interface GetChoiceProductsRequest {
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
  /** The country site of the queried Product */
  "site": string,
}
export interface GetChoiceProductsData {
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
    "bizSupplement"?: Record<string, unknown>,
  }>,
  },
}
export type GetChoiceProductsResponse = ApiResponse<GetChoiceProductsData>

export interface GetChoiceSellerRequest {
  /** The country site of the queried merchant */
  "site": string,
}
export interface GetChoiceSellerData {
  "data"?: {
  "name_company"?: string,
  "name"?: string,
  "seller_id"?: string,
  "verified"?: string,
  "email"?: string,
  "short_code"?: string,
  "cb"?: string,
  "location"?: string,
  "status"?: string,
  },
}
export type GetChoiceSellerResponse = ApiResponse<GetChoiceSellerData>

export interface GetChoiceSkuItemRelationBySkuRequest {
  /** itemId */
  "item_id": string,
  /** skuId */
  "sku_id": string,
  /** The country site of the queried Product item */
  "site": string,
}
export interface GetChoiceSkuItemRelationBySkuData {
  "data"?: {
  "item_id"?: number,
  "site"?: string,
  "seller_id"?: number,
  "sc_item_user_id"?: string,
  "sc_item_id"?: number,
  "source"?: string,
  "sku_id"?: number,
  "barcode"?: string,
  },
}
export type GetChoiceSkuItemRelationBySkuResponse = ApiResponse<GetChoiceSkuItemRelationBySkuData>

export interface PackageJitPurchaseOrderRequest {
  /** 采购单列表，最大100个。{["POJ1001","POJ1002"]} */
  "purchase_order_no_list": Array<string>,
}
export interface PackageJitPurchaseOrderData {
  "result"?: {
  "data"?: {
    "status"?: string,
  },
  "success"?: boolean,
  "error_message"?: string,
  "error_code"?: string,
  },
}
export type PackageJitPurchaseOrderResponse = ApiResponse<PackageJitPurchaseOrderData>

export interface PrintJitPurchaseOrderAndItemRequest {
  /** 采购单号列表，最大20个。{["POJ1001","POJ1002"]} */
  "purchase_order_no_list": Array<string>,
  /** 是否打印PO单。{true/false} */
  "print_order": boolean,
  /** 是否打印货品barcode。{true/false} */
  "print_barcode": string,
  /** pdf样式。{A4/6030/100150} */
  "pdf_size": string,
}
export interface PrintJitPurchaseOrderAndItemData {
  "result"?: {
  "data"?: {
    "file"?: string,
  },
  "success"?: boolean,
  "error_message"?: string,
  "error_code"?: string,
  },
}
export type PrintJitPurchaseOrderAndItemResponse = ApiResponse<PrintJitPurchaseOrderAndItemData>

export interface PrintPickuoOrderRequest {
  /** 揽收单号 */
  "pickup_order_no": string,
  /** pdf格式枚举类型。A4纸大小样式、100*100大小样式。{PICKUP_A4/PICKUP_1010} */
  "pdf_size": string,
  /** 装箱数量。（最大值 100） */
  "box_number": string,
}
export interface PrintPickuoOrderData {
  "result"?: {
  "data"?: {
    "file"?: string,
  },
  "success"?: boolean,
  "error_message"?: string,
  "error_code"?: string,
  },
}
export type PrintPickuoOrderResponse = ApiResponse<PrintPickuoOrderData>

export interface QueryListJitPurchaseOrderRequest {
  /** 单据创建开始时间，建单时间范围(即end-begin)需要在90天内。{yyyy-MM-dd HH:mm:ss} */
  "gmt_create_begin"?: string,
  /** 单据创建结束时间，建单时间范围(即end-begin)需要在90天内。{yyyy-MM-dd HH:mm:ss} */
  "gmt_create_end"?: string,
  /** 采购单列表，最大20个。{["POJ1001","POJ1002"]} */
  "purchase_order_no_list"?: Array<string>,
  /** 物流单列表，最大10个。{["LBX1001","LBX1002"]} */
  "logistics_no_list"?: Array<string>,
  /** 单据状态 10:待打包; 20:待发货; 22:待收货; 25:已到仓; 40:已完成; -100610:超时关闭; -100:买家取消；不传则返回所有状态的采购单； */
  "order_status"?: string,
  /** 当前页，默认1。 */
  "page_index"?: number,
  /** 分页大小，最大50个，默认20。 */
  "page_size"?: number,
}
export interface QueryListJitPurchaseOrderData {
  "result"?: Array<{
  "data"?: Array<{
    "supplier_name"?: string,
    "consign_order_no_list"?: string,
    "gmt_modified"?: number,
    "creator"?: string,
    "supplier_id"?: number,
    "delivery_method"?: string,
    "store_contact_name"?: string,
    "supplier_code"?: string,
    "gmt_create"?: number,
    "gmt_except_arrive_time"?: number,
    "purchase_order_no"?: string,
    "gmt_arrive_time"?: number,
    "trade_order_id_list"?: Array<string>,
    "pickup_order_no"?: string,
    "store_contact_phone"?: string,
    "logistics_no_list"?: string,
    "seller_id"?: string,
    "total_quantity"?: number,
    "store_address"?: string,
    "total_sku_count"?: number,
    "site_id"?: string,
    "store_name"?: string,
    "biz_status"?: string,
    "store_code"?: string,
    "fulfillment_cancel_status"?: string,
    "ext_fields"?: string,
  }>,
  "page_index"?: number,
  "total_page"?: number,
  "success"?: boolean,
  "error_message"?: string,
  "page_size"?: number,
  "error_code"?: string,
  "total_count"?: number,
  }>,
}
export type QueryListJitPurchaseOrderResponse = ApiResponse<QueryListJitPurchaseOrderData>

export interface QueryListPurchaseItemRequest {
  /** JIT采购单号 */
  "purchase_order_no": string,
  /** 当前页，默认1。 */
  "page_index"?: number,
  /** 分页大小，最大200个，默认20。 */
  "page_size"?: number,
}
export interface QueryListPurchaseItemData {
  "result"?: Array<{
  "data"?: Array<{
    "product_id"?: string,
    "sc_item_code"?: string,
    "buyer_qty"?: number,
    "sc_item_id"?: number,
    "barcodes"?: Array<string>,
    "received_normal_qty"?: number,
    "img_url"?: string,
    "purchase_order_no"?: string,
    "product_title"?: string,
    "sc_item_name"?: string,
    "seller_sku"?: string,
    "sku_id"?: string,
    "received_defective_qty"?: number,
  }>,
  "page_index"?: number,
  "total_page"?: number,
  "success"?: boolean,
  "error_message"?: string,
  "page_size"?: number,
  "error_code"?: string,
  "total_count"?: number,
  }>,
}
export type QueryListPurchaseItemResponse = ApiResponse<QueryListPurchaseItemData>

export interface QueryPickupOrderRequest {
  /** 揽收单号 */
  "pickup_order_no": string,
}
export interface QueryPickupOrderData {
  "result"?: {
  "data"?: {
    "reason"?: string,
    "actual_arrive_time"?: string,
    "shipper_name"?: string,
    "update_time"?: number,
    "car_driver_name"?: string,
    "receive_store_code"?: string,
    "estimated_volume"?: string,
    "shipper_address"?: string,
    "actual_pickup_time"?: string,
    "car_number"?: string,
    "pickup_order_no"?: string,
    "actual_weight"?: string,
    "purchase_order_no_list"?: Array<string>,
    "shipper_phone"?: string,
    "estimated_weight"?: string,
    "create_time"?: number,
    "estimated_box_number"?: number,
    "logistics_no_list"?: Array<string>,
    "estimated_pickup_time"?: number,
    "receive_store_address"?: string,
    "car_driver_phone"?: string,
    "status"?: string,
    "actual_logistics_no_list"?: Array<string>,
  },
  "success"?: boolean,
  "error_message"?: string,
  "error_code"?: string,
  },
}
export type QueryPickupOrderResponse = ApiResponse<QueryPickupOrderData>


export class LazadaChoiceCustomizedAPIApi {
  constructor(private client: LazadaClient) {}

  /**
   * BatchDeliverJitPurchaseOrder
   * /jit/purchase_order/batch_pickup_deliver (GET)
   */
  async batchDeliverJitPurchaseOrder(params: BatchDeliverJitPurchaseOrderRequest, opts?: LazadaRequestOptions): Promise<BatchDeliverJitPurchaseOrderResponse> {
    return this.client.request({"method":"GET","path":"/jit/purchase_order/batch_pickup_deliver","params":["purchaseOrderNoList","shipperAreaCode","shipperAddressId","shipperAddressDetail","shipperMobilePhone","shipperName","estimatedPickupDate"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * EditChoiceSkuStock
   * /choice/stock/edit (POST)
   */
  async editChoiceSkuStock(params: EditChoiceSkuStockRequest, opts?: LazadaRequestOptions): Promise<EditChoiceSkuStockResponse> {
    return this.client.request({"method":"POST","path":"/choice/stock/edit","params":["item_id","site","sku_edit_stock"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetChoiceProductItem
   * /choice/product/item/get (GET)
   */
  async getChoiceProductItem(params: GetChoiceProductItemRequest, opts?: LazadaRequestOptions): Promise<GetChoiceProductItemResponse> {
    return this.client.request({"method":"GET","path":"/choice/product/item/get","params":["item_id","seller_sku","site"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetChoiceProducts
   * /choice/products/get (GET)
   */
  async getChoiceProducts(params: GetChoiceProductsRequest, opts?: LazadaRequestOptions): Promise<GetChoiceProductsResponse> {
    return this.client.request({"method":"GET","path":"/choice/products/get","params":["filter","update_before","create_before","offset","create_after","update_after","limit","options","sku_seller_list","site"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetChoiceSeller
   * /choice/seller/get (GET)
   */
  async getChoiceSeller(params: GetChoiceSellerRequest, opts?: LazadaRequestOptions): Promise<GetChoiceSellerResponse> {
    return this.client.request({"method":"GET","path":"/choice/seller/get","params":["site"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetChoiceSkuItemRelationBySku
   * /choice/sku_item_relation/get_by_sku (GET)
   */
  async getChoiceSkuItemRelationBySku(params: GetChoiceSkuItemRelationBySkuRequest, opts?: LazadaRequestOptions): Promise<GetChoiceSkuItemRelationBySkuResponse> {
    return this.client.request({"method":"GET","path":"/choice/sku_item_relation/get_by_sku","params":["item_id","sku_id","site"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * PackageJitPurchaseOrder
   * /jit/purchase_order/package (POST)
   */
  async packageJitPurchaseOrder(params: PackageJitPurchaseOrderRequest, opts?: LazadaRequestOptions): Promise<PackageJitPurchaseOrderResponse> {
    return this.client.request({"method":"POST","path":"/jit/purchase_order/package","params":["purchase_order_no_list"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * PrintJitPurchaseOrderAndItem
   * /jit/purchase_order/print (GET)
   */
  async printJitPurchaseOrderAndItem(params: PrintJitPurchaseOrderAndItemRequest, opts?: LazadaRequestOptions): Promise<PrintJitPurchaseOrderAndItemResponse> {
    return this.client.request({"method":"GET","path":"/jit/purchase_order/print","params":["purchase_order_no_list","print_order","print_barcode","pdf_size"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * PrintPickuoOrder
   * /pickup_order/print (GET)
   */
  async printPickuoOrder(params: PrintPickuoOrderRequest, opts?: LazadaRequestOptions): Promise<PrintPickuoOrderResponse> {
    return this.client.request({"method":"GET","path":"/pickup_order/print","params":["pickup_order_no","pdf_size","box_number"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * QueryListJitPurchaseOrder
   * /jit/purchase_order/query_list (GET)
   */
  async queryListJitPurchaseOrder(params: QueryListJitPurchaseOrderRequest, opts?: LazadaRequestOptions): Promise<QueryListJitPurchaseOrderResponse> {
    return this.client.request({"method":"GET","path":"/jit/purchase_order/query_list","params":["gmt_create_begin","gmt_create_end","purchase_order_no_list","logistics_no_list","order_status","page_index","page_size"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * QueryListPurchaseItem
   * /jit/purchase_order/query_list_purchase_item (GET)
   */
  async queryListPurchaseItem(params: QueryListPurchaseItemRequest, opts?: LazadaRequestOptions): Promise<QueryListPurchaseItemResponse> {
    return this.client.request({"method":"GET","path":"/jit/purchase_order/query_list_purchase_item","params":["purchase_order_no","page_index","page_size"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * QueryPickupOrder
   * /pickup_order/query (GET)
   */
  async queryPickupOrder(params: QueryPickupOrderRequest, opts?: LazadaRequestOptions): Promise<QueryPickupOrderResponse> {
    return this.client.request({"method":"GET","path":"/pickup_order/query","params":["pickup_order_no"]}, params as unknown as Record<string, unknown>, opts)
  }
}
