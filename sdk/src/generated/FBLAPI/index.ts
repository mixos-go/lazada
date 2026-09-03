// AUTO-GENERATED from Lazada reference docs (references/api/FBL API).
// Do not edit by hand; run `npm run generate` in sdk/.

import { LazadaClient } from '../../client'
import { ApiResponse, LazadaRequestOptions } from '../../types'

export interface BuildFulfillmentSkuRelationRequest {
  /** site */
  "site": string,
  /** itemId */
  "item_id": number,
  /** skuId */
  "sku_id": number,
  /** fulfillmentSkuId */
  "sc_item_id"?: number,
  /** fulfillmentSku */
  "fulfillment_sku"?: string,
}
export interface BuildFulfillmentSkuRelationData {
  "result"?: {
  "success"?: boolean,
  "failure"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
  },
}
export type BuildFulfillmentSkuRelationResponse = ApiResponse<BuildFulfillmentSkuRelationData>

export interface CancelFulfillmentOrderForMCLRequest {
  /** Order level identifier for fulfilment order, unique for idempotence */
  "platform_order_id": string,
  /** Trade platform name */
  "platform_name": string,
  /** Cancelled reason */
  "cancel_reason"?: string,
  /** Cancelled details */
  "items": Array<Record<string, unknown>>,
  /** Unique item level identifier for fulfilment order */
  "items.platform_item_id": string,
}
export interface CancelFulfillmentOrderForMCLData {
  "success"?: boolean,
  "error_code"?: string,
  "error_message"?: string,
}
export type CancelFulfillmentOrderForMCLResponse = ApiResponse<CancelFulfillmentOrderForMCLData>

export interface CancelInboundReservationRequest {
  /** reservation order code */
  "reservation_order": string,
}
export interface CancelInboundReservationData {
  "success"?: boolean,
  "error_code"?: string,
  "error_message"?: string,
}
export type CancelInboundReservationResponse = ApiResponse<CancelInboundReservationData>

export interface CancelOutboundOrderRequest {
  /** Outbound order number */
  "outbound_order_no": string,
}
export interface CancelOutboundOrderData {
  "success"?: boolean,
  "error_code"?: string,
  "error_message"?: string,
}
export type CancelOutboundOrderResponse = ApiResponse<CancelOutboundOrderData>

export interface CancelVasOrder4FBLRequest {
  /** laz店铺所属的前台租户,例如: LAZADA_VN */
  "platform_name": string,
  /** 增值服务单号 */
  "vas_order_no": string,
  /** 取消原因 */
  "cancel_reason"?: string,
}
export interface CancelVasOrder4FBLData {
  "data"?: string,
}
export type CancelVasOrder4FBLResponse = ApiResponse<CancelVasOrder4FBLData>

export interface CancelnBoundOrderRequest {
  /** Inbound order number */
  "inbound_order_no": string,
}
export interface CancelnBoundOrderData {
  "success"?: boolean,
  "error_code"?: string,
  "error_message"?: string,
}
export type CancelnBoundOrderResponse = ApiResponse<CancelnBoundOrderData>

export interface CheckInboundReservationSlotRequest {
  /** inbound order list */
  "inbound_orders": string,
  /** date */
  "date": string,
}
export interface CheckInboundReservationSlotData {
  "success"?: boolean,
  "error_code"?: string,
  "error_message"?: string,
  "data"?: Array<{
  "slots"?: Array<string>,
  }>,
}
export type CheckInboundReservationSlotResponse = ApiResponse<CheckInboundReservationSlotData>

export interface CreateFulfillmentOrderForMCLRequest {
  /** Payment method, mainly check cod type */
  "platform_payment_method": string,
  /** Remark */
  "remark"?: string,
  /** Currency */
  "currency": string,
  /** Fulfillment order line list, contains no more than 300 items */
  "items": Array<Record<string, unknown>>,
  /** Item paid price */
  "items.paid_price": string,
  /** Delivery type (this is always standard for now) */
  "items.platform_delivery_type": string,
  /** Unique item level identifier for fulfilment order */
  "items.platform_item_id": string,
  /** Sku */
  "items.sku"?: string,
  /** Shipper id */
  "items.owner_id": string,
  /** Distribution type (this is always warehouse) */
  "items.shipping_type": string,
  /** Fulfillment sku id */
  "items.fulfillment_sku_id": string,
  /** Quantity (this is always 1) */
  "items.quantity": number,
  /** Distribution of warehouse */
  "items.store_code": string,
  /** Item unit price */
  "items.unit_price": string,
  /** Warehouse promised estimated arrival time in UTC */
  "items.warehouse_promised_time"?: string,
  /** Promised max estimated arrival time in UTC */
  "items.promised_max_time"?: string,
  /** Promised min estimated arrival time in UTC */
  "items.promised_min_time"?: string,
  /** Trade platform sub trade order id */
  "items.platform_sub_trade_id"?: string,
  /** Item category name */
  "items.category_name"?: string,
  /** Fulfillment priority */
  "items.fulfillment_priority"?: boolean,
  /** Receiver info */
  "receiver": Record<string, unknown>,
  /** Zip code */
  "receiver.zip_code"?: string,
  /** iso-3166-1 country code */
  "receiver.country_iso": string,
  /** Receiver country */
  "receiver.country"?: string,
  /** Receiver province */
  "receiver.province"?: string,
  /** Receiver city */
  "receiver.city"?: string,
  /** Receiver district */
  "receiver.district"?: string,
  /** Receiver town */
  "receiver.town"?: string,
  /** Receiver detail address */
  "receiver.detail_address": string,
  /** Receiver area id from LEL */
  "receiver.area_id"?: string,
  /** Receiver division id from LEL */
  "receiver.division_id"?: string,
  /** Receiver address id from LEL */
  "receiver.address_id": string,
  /** Receiver mobile phone */
  "receiver.mobile_phone": string,
  /** Receiver telephone */
  "receiver.telephone"?: string,
  /** Receiver company name */
  "receiver.company_name"?: string,
  /** Receiver cantact name */
  "receiver.contact_name": string,
  /** Receiver email */
  "receiver.email": string,
  /** Trade platform name */
  "platform_name": string,
  /** Estimated warehouse outbound time in UTC */
  "fulfillment_finish_time"?: string,
  /** Trade order create time in UTC */
  "platform_order_creation_time": string,
  /** Sales order number from platform */
  "sales_order_number": string,
  /** Unique order level identifier for fulfilment order */
  "platform_order_id": string,
  /** Out fulfillment order create time in UTC */
  "out_order_creation_time"?: string,
  /** Whether platform nominated fleet */
  "is_platform_nominated_fleet"?: boolean,
  /** seller store id */
  "seller_store_id"?: string,
  /** seller store name */
  "seller_store_name"?: string,
}
export interface CreateFulfillmentOrderForMCLData {
  "success"?: boolean,
  "error_code"?: string,
  "error_message"?: string,
}
export type CreateFulfillmentOrderForMCLResponse = ApiResponse<CreateFulfillmentOrderForMCLData>

export interface CreateFulfillmentOrderForMCLV2PNFRequest {
  /** Payment method, mainly check cod type */
  "platform_payment_method": string,
  /** Remark */
  "remark"?: string,
  /** Currency */
  "currency": string,
  /** Fulfillment order line list, contains no more than 300 items */
  "items": Array<Record<string, unknown>>,
  /** Item paid price */
  "items.paid_price": string,
  /** Delivery type (this is always standard for now) */
  "items.platform_delivery_type": string,
  /** Unique item level identifier for fulfilment order */
  "items.platform_item_id": string,
  /** Sku */
  "items.sku"?: string,
  /** Shipper id */
  "items.owner_id": string,
  /** Distribution type (this is always warehouse) */
  "items.shipping_type": string,
  /** Fulfillment sku id */
  "items.fulfillment_sku_id": string,
  /** Quantity (this is always 1) */
  "items.quantity": number,
  /** Distribution of warehouse */
  "items.store_code": string,
  /** Item unit price */
  "items.unit_price": string,
  /** Warehouse promised estimated arrival time in UTC */
  "items.warehouse_promised_time"?: string,
  /** Promised max estimated arrival time in UTC */
  "items.promised_max_time"?: string,
  /** Promised min estimated arrival time in UTC */
  "items.promised_min_time"?: string,
  /** Trade platform sub trade order id */
  "items.platform_sub_trade_id"?: string,
  /** Item category name */
  "items.category_name"?: string,
  /** Fulfillment priority */
  "items.fulfillment_priority"?: boolean,
  /** Trade platform name */
  "platform_name": string,
  /** Estimated warehouse outbound time in UTC */
  "fulfillment_finish_time"?: string,
  /** Trade order create time in UTC */
  "platform_order_creation_time": string,
  /** Sales order number from platform */
  "sales_order_number": string,
  /** Unique order level identifier for fulfilment order */
  "platform_order_id": string,
  /** Out fulfillment order create time in UTC */
  "out_order_creation_time"?: string,
  /** seller store id */
  "seller_store_id"?: string,
  /** seller store name */
  "seller_store_name"?: string,
}
export interface CreateFulfillmentOrderForMCLV2PNFData {
  "success"?: boolean,
  "error_code"?: string,
  "error_message"?: string,
}
export type CreateFulfillmentOrderForMCLV2PNFResponse = ApiResponse<CreateFulfillmentOrderForMCLV2PNFData>

export interface CreateFulfillmentSkuDecoupleRequest {
  /** title */
  "fulfillment_sku_name": string,
  /** barcode list */
  "barcodes": Array<string>,
  /** true/false */
  "hygroscopic": boolean,
  /** true/false */
  "precious": boolean,
  /** food,liquid,danger,other */
  "product_type": string,
  /** 1: normal temperature 4: refrigerated 6: frozen */
  "temperature_requirement": string,
  /** at most 6 pictures url */
  "pic_urls": Array<string>,
  /** true/false */
  "serial_number_flag": boolean,
  /** true/false */
  "shelf_life_flag": boolean,
  /** required if shelf_life_day is life_mgnt */
  "shelf_life_days"?: number,
  /** required if shelf_life_day is life_mgnt */
  "reject_shelf_live"?: number,
  /** required if shelf_life_day is life_mgnt */
  "alert_shelf_live"?: number,
  /** required if shelf_life_day is life_mgnt */
  "offline_shelf_live"?: number,
  /** erp sku code */
  "seller_sku": string,
  /** sale price */
  "sale_price": string,
  /** length(mm) */
  "length"?: number,
  /** width(mm) */
  "width"?: number,
  /** height(mm) */
  "height"?: number,
  /** weight(g) */
  "weight"?: number,
}
export interface CreateFulfillmentSkuDecoupleData {
  "data"?: {
  "fulfillment_sku_id"?: number,
  "fulfillment_sku_code"?: string,
  },
  "success"?: boolean,
  "error_code"?: string,
  "error_message"?: string,
}
export type CreateFulfillmentSkuDecoupleResponse = ApiResponse<CreateFulfillmentSkuDecoupleData>

export interface CreateFulfillmentSkuForFBLRequest {
  /** platform sku sku_id */
  "sku_id": number,
  /** barcode list */
  "barcodes": Array<string>,
  /** is product hygroscopic? */
  "hygroscopic": boolean,
  /** food / liquid / danger / other */
  "product_type": string,
  /** "1": normal temperature "4": refrigerated "6": frozen */
  "temperature_requirement": string,
  /** is serial number management enabled? */
  "serial_number_flag": boolean,
  /** is shelf life management enabled? */
  "shelf_life_flag": boolean,
  /** days of shelf life, required if shelf_life_flag is true. */
  "shelf_life_days"?: number,
  /** days to reject at inbound before expiry, required if shelf_life_flag is true. */
  "reject_shelf_live"?: number,
  /** days to alert before expiry, required if shelf_life_flag is true. */
  "alert_shelf_live"?: number,
  /** days to take offline before expiry, required if shelf_life_flag is true. */
  "offline_shelf_live"?: number,
}
export interface CreateFulfillmentSkuForFBLData {
  "success"?: boolean,
  "error_code"?: string,
  "error_message"?: string,
  "data"?: {
  "fulfillment_sku_id"?: number,
  "fulfillment_sku_code"?: string,
  },
}
export type CreateFulfillmentSkuForFBLResponse = ApiResponse<CreateFulfillmentSkuForFBLData>

export interface CreateInboundOrderRequest {
  /** Inbound warehouse code. */
  "warehouse_code": string,
  /** Delivery type,Enum: Dropoff / Pickup. */
  "delivery_type"?: string,
  /** Seller warehouse code. Default value is seller's first sellerWarehouse, usually it's seller's address in asc. You can get the warehouse list by openApi listIcpWarehouse. */
  "seller_warehouse_code"?: string,
  /** Estimated Arrival Time in UTC+0. format is "yyyy-MM-ddTHH:mm:ssZ". */
  "estimate_time": string,
  /** Inbound comment. */
  "comment"?: string,
  /** Reference number. */
  "reference_number"?: string,
  /** List of inbound skus. Max list size is 100. */
  "skus": Array<Record<string, unknown>>,
  /** Seller sku. */
  "skus.seller_sku"?: string,
  /** Fulfillment sku code. You should use at least one of params seller_sku and fulfillment_sku. If you send them both, we will use fulfillment_sku to find your sku and ignore param seller_sku. */
  "skus.fulfillment_sku"?: string,
  /** Requested inbound quantity. The quantity must be greater than 0. */
  "skus.requested_quantity": number,
}
export interface CreateInboundOrderData {
  "success"?: boolean,
  "error_code"?: string,
  "error_message"?: string,
  "inbound_order_no"?: string,
}
export type CreateInboundOrderResponse = ApiResponse<CreateInboundOrderData>

export interface CreateInboundReservationRequest {
  /** inbound order list */
  "inbound_orders": Array<string>,
  /** reserve slot */
  "slot": string,
}
export interface CreateInboundReservationData {
  "error_code"?: string,
  "error_message"?: string,
  "data"?: {
  "reservation_order"?: string,
  },
  "success"?: boolean,
}
export type CreateInboundReservationResponse = ApiResponse<CreateInboundReservationData>

export interface CreateOutBoundOrderRequest {
  /** Reference number. */
  "reference_number"?: string,
  /** outbound warehouse code. */
  "warehouse_code": string,
  /** Delivery type,Enum: Dropoff / Pickup. */
  "delivery_type"?: string,
  /** Seller warehouse code. Default value is seller's first sellerWarehouse, usually it's seller's address in asc. You can get the warehouse list by openApi listIcpWarehouse. */
  "seller_warehouse_code"?: string,
  /** Estimated Time in UTC+0. format is "yyyy-MM-ddTHH:mm:ssZ". */
  "estimate_time": string,
  /** Outbound comment. */
  "comment"?: string,
  /** Inventory type, 1 for good, 101 for defective, 137 for Damaged A, 138 for Damaged B, 140 for Damaged C */
  "inventory_type": number,
  /** List of outbound skus. Max list size is 100. */
  "skus": Array<Record<string, unknown>>,
  /** Fulfillment sku code. You should use at least one of params seller_sku and fulfillment_sku. If you send them both, we will use fulfillment_sku to find your sku and ignore param seller_sku. */
  "skus.fulfillment_sku"?: string,
  /** Request outbound quantity.The quantity must be greater than 0. */
  "skus.requested_quantity": number,
  /** Seller sku. */
  "skus.seller_sku"?: string,
}
export interface CreateOutBoundOrderData {
  "success"?: boolean,
  "error_code"?: string,
  "error_message"?: string,
  "outbound_order_no"?: string,
}
export type CreateOutBoundOrderResponse = ApiResponse<CreateOutBoundOrderData>

export interface CreateProductReinboundOrderForMCLRequest {
  /** Trade platform name */
  "platform_name": string,
  /** Sales order number from platform */
  "sales_order_number": string,
  /** Unique order level identifier for fulfilment order */
  "platform_order_id": string,
  /** Package level identifier for product reinbound request, unique for idempotence */
  "reinbound_order_id": string,
  /** Tracking number for original package */
  "tracking_number": string,
  /** Failed delivery reason */
  "reason"?: string,
}
export interface CreateProductReinboundOrderForMCLData {
  "success"?: boolean,
  "error_code"?: string,
  "error_message"?: string,
}
export type CreateProductReinboundOrderForMCLResponse = ApiResponse<CreateProductReinboundOrderForMCLData>

export interface CreateVasOrder4FBLRequest {
  /** laz店铺所属的前台租户,例如: LAZADA_VN */
  "platform_name": string,
  /** 幂等码 */
  "idempotent_key": string,
  /** 物流服务商单据号，比如：LBX */
  "service_provider_no"?: string,
  /** 服务目标单据号,比如：CO单号 */
  "target_order_no"?: string,
  /** 服务对象类型：服务对象为入库单，则填写：CO；服务对象为品，则填写:GOODS; */
  "target_order_type"?: string,
  /** 增值服务Code：LABEL_PRINTING_PASTING_FOR_IB 打印并贴商品条码 LABEL_PRINTING_PASTING_FOR_ITEM 打印并贴商品条码 REPACKING_FOR_IB 重新包装 REPACKING_FOR_ITEM 重新包装 BUNDLING 绑定商品 LABEL_PRINTING_FOR_IB 打印商品条码 LABEL_PRINTING_FOR_ITEM 打印商品条码 LABEL_PASTING_FOR_IB 贴商品条码 LABEL_PASTING_FOR_ITEM 贴商品条码 SORTING 分类商品 INBOUND_QC 收货质检 */
  "vas_code": string,
  /** 仓code */
  "warehouse_code": string,
  /** 明细行 */
  "lines": Array<Record<string, unknown>>,
  /** 计划数量 */
  "lines.quantity": number,
  /** 货品ID */
  "lines.scItem_id": number,
  /** 绑定数量 */
  "lines.bundle_quantity"?: number,
}
export interface CreateVasOrder4FBLData {
  "data"?: string,
}
export type CreateVasOrder4FBLResponse = ApiResponse<CreateVasOrder4FBLData>

export interface GetChannelStocksForMCLRequest {
  /** Platform Name */
  "platform_name": string,
  /** Fulfillment Sku ID */
  "fulfillment_sku_id": number,
  /** Warehouse Code */
  "warehouse_code"?: string,
}
export interface GetChannelStocksForMCLData {
  "success"?: boolean,
  "error_code"?: string,
  "error_message"?: string,
  "data"?: {
  "fulfillment_sku_id"?: number,
  "stocks"?: Array<{
    "warehouse_code"?: string,
    "channel_stocks"?: Array<{
      "quantity"?: number,
      "channel"?: string,
    }>,
  }>,
  },
}
export type GetChannelStocksForMCLResponse = ApiResponse<GetChannelStocksForMCLData>

export interface GetFulfillmentProductDetailRequest {
  /** Maximum number of results per page */
  "per_page"?: number,
  /** Serial number flag. true or false */
  "shelf_life_flag"?: boolean,
  /** Marketplace should be "LAZADA_MY","LAZADA_ID","LAZADA_VN","LAZADA_SG","LAZADA_TH","LAZADA_PH" */
  "marketplace": string,
  /** Fulfillment SKU */
  "fulfillment_sku"?: string,
  /** Serial number flag. true or false */
  "serial_number_flag"?: boolean,
  /** Page */
  "page"?: number,
  /** Fulfillment SKU Name used in Lazada fulfilment system */
  "fulfillment_sku_name"?: string,
  /** Barcode */
  "barcode"?: string,
}
export interface GetFulfillmentProductDetailData {
  "data"?: Array<{
  "shelf_life_days"?: number,
  "color"?: string,
  "fulfillment_sku"?: string,
  "serial_number_flag"?: boolean,
  "length"?: number,
  "offline_shelf_live"?: number,
  "barcodes"?: string,
  "net_weight"?: number,
  "alert_shelf_live"?: number,
  "shelf_life_flag"?: boolean,
  "reject_shelf_live"?: number,
  "sn_sample_list"?: Array<{
    "sample_seq"?: string,
    "sample_desc"?: string,
    "sample_rule_list"?: Array<{
      "rule_regular_expression"?: string,
      "rule_desc"?: string,
      "rule_img_url"?: string,
      "rule_sample"?: string,
    }>,
  }>,
  "width"?: number,
  "shipper_id"?: string,
  "serial_number_mode"?: string,
  "fulfillment_sku_name"?: string,
  "gross_weight"?: number,
  "height"?: number,
  "hygroscopic"?: string,
  "precious"?: string,
  "product_type"?: string,
  "seller_skus"?: Array<string>,
  "temperature_requirement"?: string,
  }>,
}
export type GetFulfillmentProductDetailResponse = ApiResponse<GetFulfillmentProductDetailData>

export interface GetFulfillmentSkuListForMCLRequest {
  /** Page Index */
  "page": number,
  /** Maximum number of results per page */
  "per_page": string,
  /** Platform name */
  "platform_name": string,
  /** Fulfillment Sku Name */
  "fulfillment_sku_name"?: string,
  /** Seller Sku */
  "seller_sku"?: string,
  /** Fulfillment Sku Code */
  "fulfillment_sku_code"?: string,
  /** barcode */
  "barcode"?: string,
  /** Fulfillment Sku Codes */
  "fulfillment_sku_codes"?: string,
}
export interface GetFulfillmentSkuListForMCLData {
  "error_message"?: string,
  "page"?: number,
  "per_page"?: number,
  "total_count"?: number,
  "data"?: Array<{
  "seller_id"?: number,
  "platform_name"?: string,
  "owner_id"?: number,
  "seller_skus"?: string,
  "fulfillment_sku_code"?: string,
  "fulfillment_sku_name"?: string,
  "fulfillment_sku_id"?: number,
  "barcodes"?: string,
  "serial_num_flag"?: boolean,
  "shelf_life_flag"?: boolean,
  "has_stock"?: boolean,
  "min_stock_alert"?: boolean,
  "platform_sku_status"?: string,
  "sale_price"?: string,
  "currency"?: string,
  "pic_urls"?: string,
  }>,
  "success"?: boolean,
  "error_code"?: string,
}
export type GetFulfillmentSkuListForMCLResponse = ApiResponse<GetFulfillmentSkuListForMCLData>

export interface GetFulfillmentSkuRelationByScItemRequest {
  /** site */
  "site": string,
  /** scItemId/fulfillment_sku_id */
  "sc_item_id"?: number,
  /** fulfillment_sku */
  "fulfillment_sku"?: string,
}
export interface GetFulfillmentSkuRelationByScItemData {
  "result"?: Array<{
  "data"?: Array<{
    "item_id"?: number,
    "site"?: string,
    "seller_id"?: number,
    "sc_item_user_id"?: number,
    "sc_item_id"?: number,
    "source"?: string,
    "sku_id"?: number,
    "fulfillment_sku"?: string,
  }>,
  "failure"?: boolean,
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
  }>,
}
export type GetFulfillmentSkuRelationByScItemResponse = ApiResponse<GetFulfillmentSkuRelationByScItemData>

export interface GetFulfillmentSkuRelationBySkuRequest {
  /** site */
  "site": string,
  /** itemId */
  "item_id": number,
  /** skuId */
  "sku_id": number,
}
export interface GetFulfillmentSkuRelationBySkuData {
  "result"?: {
  "data"?: {
    "item_id"?: number,
    "site"?: string,
    "seller_id"?: number,
    "sc_item_user_id"?: string,
    "sc_item_id"?: number,
    "source"?: string,
    "sku_id"?: number,
    "fulfillment_sku"?: string,
  },
  "failure"?: boolean,
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
  },
}
export type GetFulfillmentSkuRelationBySkuResponse = ApiResponse<GetFulfillmentSkuRelationBySkuData>

export interface GetFulfillmentSkuRelationsByScItemsRequest {
  /** bizName */
  "biz_name": string,
  /** sellerIds */
  "seller_ids": Array<number>,
  /** scItemIds */
  "sc_item_ids"?: Array<number>,
  /** fulfillmentSkus */
  "fulfillment_skus"?: Array<string>,
}
export interface GetFulfillmentSkuRelationsByScItemsData {
  "result"?: Array<{
  "data"?: Array<{
    "item_id"?: number,
    "site"?: string,
    "seller_id"?: number,
    "sc_item_user_id"?: number,
    "sc_item_id"?: number,
    "source"?: string,
    "fulfillment_sku"?: string,
    "sku_id"?: number,
  }>,
  "failure"?: boolean,
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
  }>,
}
export type GetFulfillmentSkuRelationsByScItemsResponse = ApiResponse<GetFulfillmentSkuRelationsByScItemsData>

export interface GetFulfillmentSkuRelationsBySkusRequest {
  /** site */
  "site": string,
  /** obj */
  "item_sku": Record<string, unknown>,
  /** item_ids */
  "item_sku.item_ids": Array<number>,
  /** sku_ids */
  "item_sku.sku_ids": Array<number>,
}
export interface GetFulfillmentSkuRelationsBySkusData {
  "result"?: Array<{
  "data"?: Array<{
    "item_id"?: number,
    "site"?: string,
    "seller_id"?: number,
    "sc_item_user_id"?: number,
    "sc_item_id"?: number,
    "source"?: string,
    "fulfillment_sku"?: string,
    "sku_id"?: number,
  }>,
  "failure"?: boolean,
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
  }>,
}
export type GetFulfillmentSkuRelationsBySkusResponse = ApiResponse<GetFulfillmentSkuRelationsBySkusData>

export interface GetIcpOrderFileRequest {
  /** Inbound/Outbound order number */
  "order_number": string,
}
export interface GetIcpOrderFileData {
  "error_code"?: string,
  "error_message"?: string,
  "data"?: {
  "url"?: string,
  },
  "success"?: boolean,
}
export type GetIcpOrderFileResponse = ApiResponse<GetIcpOrderFileData>

export interface GetInboundOrderDetailRequest {
  /** Inbound ouder number */
  "inbound_order_no": string,
  /** Enum Value:LAZADA_VN,LAZADA_SG,LAZADA_MY, LAZADA_ID,LAZADA_PH,LAZADA_TH */
  "marketplace": string,
}
export interface GetInboundOrderDetailData {
  "data"?: {
  "reservation_status"?: string,
  "reservation_order"?: string,
  "seller_city"?: string,
  "seller_address"?: string,
  "seller_postcode"?: string,
  "seller_country"?: string,
  "seller_contact"?: string,
  "seller_mobile"?: string,
  "fulfillment_order_number"?: string,
  "inbound_warehouse_code"?: string,
  "inbound_time"?: string,
  "skus"?: Array<{
    "item_inbounded_expired"?: string,
    "seller_sku"?: Array<string>,
    "item_inbounded_good"?: number,
    "serial_number_flag"?: boolean,
    "sku_status"?: string,
    "item_inbounded_damaged"?: number,
    "fulfillment_sku_name"?: string,
    "requested_quantity"?: number,
    "shelf_life_flag"?: boolean,
    "barcodes"?: Array<string>,
    "fulfillment_sku"?: string,
    "comments"?: string,
  }>,
  "comments"?: string,
  "io_number"?: string,
  "estimate_time"?: string,
  "marketplace"?: string,
  "delivery_type"?: string,
  "created_at"?: string,
  "inbound_warehouse"?: string,
  "reference_number"?: string,
  "updated_at"?: string,
  "io_status"?: string,
  "shop_name"?: string,
  "io_type"?: string,
  "warehouse_name"?: string,
  "warehouse_address"?: string,
  "seller_warehouse_name"?: string,
  "need_reservation"?: boolean,
  },
}
export type GetInboundOrderDetailResponse = ApiResponse<GetInboundOrderDetailData>

export interface GetInboundOrderListRequest {
  /** Inbound order number, Multi orders split by ','. Max size is 100 */
  "inbound_order_no"?: string,
  /** Order's create time from */
  "creation_time_From"?: string,
  /** Order's create time end */
  "creation_time_To"?: string,
  /** Inbound warehouse name */
  "inbound_warehouse"?: string,
  /** seller sku name */
  "seller_sku"?: string,
  /** Fulfilment SKU code */
  "fulfillment_sku"?: string,
  /** marketplace:LAZADA_VN,LAZADA_SG,LAZADA_MY, LAZADA_ID,LAZADA_PH,LAZADA_TH */
  "marketplace": string,
  /** Order list page index */
  "page"?: string,
  /** Order list per page size, Max is 100 */
  "per_page"?: string,
  /** ReservationStatus: PENDING_RESERVATION_ORDER_CREATE \ */
  "reservation_status"?: string,
  /** Reservation Order number */
  "reservation_order"?: string,
  /** Reference number */
  "reference_number"?: string,
}
export interface GetInboundOrderListData {
  "result"?: {
  "per_page"?: number,
  "data"?: Array<{
    "sku_approved"?: number,
    "inbound_time"?: string,
    "io_number"?: string,
    "estimate_time"?: string,
    "marketplace"?: string,
    "item_inbounded_good"?: number,
    "delivery_type"?: string,
    "item_requested"?: number,
    "created_at"?: string,
    "sku_inbounded"?: number,
    "sku_requested"?: number,
    "inbound_warehouse"?: string,
    "reference_number"?: string,
    "item_inbounded_damaged"?: number,
    "updated_at"?: string,
    "status"?: string,
    "shop_name"?: string,
    "io_type"?: string,
    "inbound_warehouse_code"?: string,
    "need_reservation"?: boolean,
    "reservation_status"?: string,
    "reservation_order"?: string,
    "item_inbounded_expired"?: string,
  }>,
  "page"?: number,
  "total_count"?: number,
  },
}
export type GetInboundOrderListResponse = ApiResponse<GetInboundOrderListData>

export interface GetInboundReservationFileRequest {
  /** reservation order code */
  "reservation_order": string,
}
export interface GetInboundReservationFileData {
  "success"?: boolean,
  "error_code"?: string,
  "error_message"?: string,
  "data"?: {
  "url"?: string,
  },
}
export type GetInboundReservationFileResponse = ApiResponse<GetInboundReservationFileData>

export interface GetInventoryChangedSKURequest {
  /** Warehouse code */
  "warehouse_code"?: string,
  /** Sku list page index */
  "page"?: number,
  /** Sku list per page size */
  "per_page"?: number,
  /** market place:LAZADA_VN,LAZADA_SG,LAZADA_MY, LAZADA_ID,LAZADA_PH,LAZADA_TH */
  "market_place": string,
  /** Inventory operate time from. This param is Required */
  "operate_Time_From"?: string,
  /** Inventory operate time to. This param is Required.We suggest that operate_time_to - operate_time_from < 6 months */
  "operate_Time_To"?: string,
}
export interface GetInventoryChangedSKUData {
  "per_page"?: number,
  "page"?: number,
  "total_count"?: number,
  "sku_list"?: Array<{
  "fulfillment_sku_id"?: string,
  "operate_log_count"?: number,
  }>,
  "success"?: string,
  "errMessage"?: string,
  "errCode"?: string,
}
export type GetInventoryChangedSKUResponse = ApiResponse<GetInventoryChangedSKUData>

export interface GetInventoryOccupyDetailsRequest {
  /** Fulfillment Sku Id */
  "fulfillmentSku": string,
  /** Warehouse code */
  "storeCode": string,
  /** market place:LAZADA_VN,LAZADA_SG,LAZADA_MY, LAZADA_ID,LAZADA_PH,LAZADA_TH */
  "marketplace": string,
  /** pageNum */
  "pageNum"?: number,
  /** pageSize */
  "pageSize"?: number,
}
export interface GetInventoryOccupyDetailsData {
  "inventoryOccupyDetails"?: Array<{
  "orderCode"?: string,
  "quantity"?: number,
  "orderType"?: string,
  "inventoryType"?: string,
  }>,
}
export type GetInventoryOccupyDetailsResponse = ApiResponse<GetInventoryOccupyDetailsData>

export interface GetInventoryOperateLogRequest {
  /** Operate log list page index */
  "page"?: number,
  /** Operate log list perpage size */
  "per_page"?: number,
  /** market place:LAZADA_VN,LAZADA_SG,LAZADA_MY, LAZADA_ID,LAZADA_PH,LAZADA_TH */
  "market_place": string,
  /** Inventory operate time from, GMT+0. */
  "operate_time_from"?: string,
  /** Inventory operate time to, GMT+0. This param is Required. We suggest that operate_time_to - operate_time_from < 6 months */
  "operate_time_to"?: string,
  /** Warehouse code */
  "warehouse_code"?: string,
  /** Fulfillment Sku Id */
  "fulfillment_sku_id"?: string,
  /** Order Type Code */
  "order_type_code"?: string,
}
export interface GetInventoryOperateLogData {
  "inventory_operate_log"?: Array<{
  "ref_order_code"?: Array<{
    "type"?: string,
    "order_code"?: string,
  }>,
  "warehouse_code"?: string,
  "warehouse_name"?: string,
  "order_type"?: string,
  "inventory_type"?: string,
  "change_quantity"?: string,
  "result_quantity"?: string,
  "operate_time"?: string,
  "order_type_code"?: string,
  "fulfillment_sku_id"?: string,
  "customer_order"?: string,
  }>,
  "success"?: string,
  "errMessage"?: string,
  "errCode"?: string,
  "page"?: number,
  "per_page"?: number,
  "total_count"?: number,
}
export type GetInventoryOperateLogResponse = ApiResponse<GetInventoryOperateLogData>

export interface GetOutboundOrderDetailRequest {
  /** order number */
  "outbound_order_no": string,
  /** Enum Value:LAZADA_VN,LAZADA_SG,LAZADA_MY, LAZADA_ID,LAZADA_PH,LAZADA_TH */
  "marketplace": string,
}
export interface GetOutboundOrderDetailData {
  "data"?: {
  "outbound_time"?: string,
  "comments"?: string,
  "skus"?: Array<{
    "seller_sku"?: Array<string>,
    "item_outbounded"?: number,
    "serial_number_flag"?: boolean,
    "sku_status"?: string,
    "requested_quantity"?: number,
    "fulfillment_sku_name"?: string,
    "shelf_life_flag"?: boolean,
    "barcodes"?: Array<string>,
    "fulfillment_sku"?: string,
    "comments"?: string,
  }>,
  "estimate_time"?: string,
  "marketplace"?: string,
  "outbound_warehouse"?: string,
  "delivery_type"?: string,
  "created_at"?: string,
  "reference_number"?: string,
  "item_outbounded"?: number,
  "outbound_order_no"?: string,
  "updated_at"?: string,
  "status"?: string,
  "shop_name"?: string,
  "created_by"?: string,
  "outbound_reason"?: string,
  "inventory_type"?: string,
  "warehouse_name"?: string,
  "warehouse_address"?: string,
  "seller_warehouse_name"?: string,
  "seller_city"?: string,
  "seller_address"?: string,
  "seller_postcode"?: string,
  "seller_country"?: string,
  "seller_contact"?: string,
  "seller_mobile"?: string,
  "fulfillment_order_number"?: string,
  "outbound_warehouse_code"?: string,
  },
}
export type GetOutboundOrderDetailResponse = ApiResponse<GetOutboundOrderDetailData>

export interface GetOutboundOrderListRequest {
  /** Outbound order number,Multi orders split by ','. Max size is 100 */
  "outbound_order_no"?: string,
  /** Order's create time from */
  "creation_time_from"?: string,
  /** Order's create time end */
  "creation_time_to"?: string,
  /** Outbound warehouse name */
  "outbound_warehouse"?: string,
  /** seller sku name */
  "seller_sku"?: string,
  /** Fulfilment SKU code */
  "fulfillment_sku"?: string,
  /** marketplace:LAZADA_VN,LAZADA_SG,LAZADA_MY, LAZADA_ID,LAZADA_PH,LAZADA_TH */
  "marketplace": string,
  /** Order list page index */
  "page"?: string,
  /** Order list per page size */
  "per_page"?: string,
  /** Reference number */
  "reference_number"?: string,
}
export interface GetOutboundOrderListData {
  "result"?: {
  "per_page"?: number,
  "data"?: Array<{
    "sku_approved"?: number,
    "outbound_time"?: string,
    "oo_number"?: string,
    "estimate_time"?: string,
    "marketplace"?: string,
    "delivery_type"?: string,
    "item_requested"?: number,
    "created_at"?: string,
    "sku_outbounded"?: number,
    "sku_requested"?: number,
    "outbound_warehouse"?: string,
    "reference_number"?: string,
    "item_outbounded"?: number,
    "updated_at"?: string,
    "status"?: string,
    "shop_name"?: string,
    "created_by"?: string,
    "outbound_reason"?: string,
    "fulfillment_order_number"?: string,
    "outbound_warehouse_code"?: string,
  }>,
  "page"?: number,
  "total_count"?: number,
  },
}
export type GetOutboundOrderListResponse = ApiResponse<GetOutboundOrderListData>

export interface GetPlatformProductsV2Request {
  /** Maximum number of results Per Page */
  "per_page"?: number,
  /** sellerId */
  "seller_id": number,
  /** Marketplace */
  "marketplace": string,
  /** sellerSku */
  "seller_sku"?: string,
  /** Platform SKU Name */
  "platform_sku_name"?: string,
  /** Products that have binding stock in warsehouse */
  "ready_for_inbound"?: boolean,
  /** List of Platform SKU. Separate By Comma (,) */
  "platform_sku"?: string,
  /** Page Number */
  "page"?: number,
}
export interface GetPlatformProductsV2Data {
  "data"?: Array<{
  "platform_sku_name"?: string,
  "status"?: string,
  "marketplace"?: string,
  "source"?: string,
  "product_id"?: string,
  "skus"?: Array<{
    "fulfillment_sku_name"?: string,
    "fulfillment_sku"?: string,
    "sku_status"?: string,
    "platform_sku"?: string,
    "seller_sku"?: string,
    "extend_fields"?: string,
  }>,
  }>,
}
export type GetPlatformProductsV2Response = ApiResponse<GetPlatformProductsV2Data>

export interface GetProductBatchListRequest {
  /** request body */
  "productBatchListRequest": Record<string, unknown>,
  /** fulfillment sku ids */
  "productBatchListRequest.fulfillment_sku_ids": Array<number>,
  /** shipper id */
  "productBatchListRequest.shipper_id": number,
  /** page no */
  "productBatchListRequest.page_no": number,
  /** page size */
  "productBatchListRequest.page_size": number,
  /** store code */
  "productBatchListRequest.store_code": string,
}
export interface GetProductBatchListData {
  "result"?: {
  "data"?: {
    "store_code"?: string,
    "batch_list"?: Array<{
      "fulfillment_sku_id"?: number,
      "product_batch"?: number,
      "manufacturing_date"?: string,
      "expiry_date"?: string,
      "outbound_ban_date"?: string,
      "inventory_status"?: number,
      "quantity"?: number,
    }>,
    "page_no"?: number,
    "page_size"?: number,
  },
  "success"?: boolean,
  "error_message"?: string,
  "error_code"?: string,
  },
}
export type GetProductBatchListResponse = ApiResponse<GetProductBatchListData>

export interface GetShipperInfoRequest {}

export interface GetShipperInfoData {
  "error_message"?: string,
  "data"?: {
  "shipper_id"?: string,
  "is_mcl"?: boolean,
  "partner_name"?: string,
  "is_cb"?: boolean,
  "main_seller_id"?: string,
  "main_seller_site"?: string,
  "main_shipper_id"?: string,
  },
  "success"?: boolean,
  "error_code"?: string,
}
export type GetShipperInfoResponse = ApiResponse<GetShipperInfoData>

export interface GetStockRuleRequest {
  /** fulfilment sku id list */
  "fulfillment_sku_ids"?: string,
  /** warehouse code */
  "store_code": string,
  /** page index, default: 1 */
  "page"?: string,
  /** page size, default: 50 */
  "per_page"?: string,
}
export interface GetStockRuleData {
  "success"?: string,
  "error_code"?: string,
  "error_message"?: string,
  "page"?: number,
  "per_page"?: number,
  "total_count"?: number,
  "data"?: Array<{
  "fulfillment_sku_id"?: string,
  "store_code"?: string,
  "auto_balancing"?: boolean,
  "channel_ratio"?: Array<{
    "ratio"?: number,
    "channel_code"?: string,
  }>,
  }>,
}
export type GetStockRuleResponse = ApiResponse<GetStockRuleData>

export interface GetVasOrderByNo4FBLRequest {
  /** laz店铺所属的前台租户,例如: LAZADA_VN */
  "platform_name": string,
  /** 增值服务单号 */
  "vas_order_code": string,
}
export interface GetVasOrderByNo4FBLData {
  "data"?: string,
}
export type GetVasOrderByNo4FBLResponse = ApiResponse<GetVasOrderByNo4FBLData>

export interface GetWarehouseListForMCLRequest {
  /** CountryCode */
  "country_code": string,
  /** PageIndex */
  "page": number,
  /** Maximum number of results per page */
  "per_page": number,
}
export interface GetWarehouseListForMCLData {
  "success"?: boolean,
  "error_code"?: string,
  "error_message"?: string,
  "page"?: number,
  "per_page"?: number,
  "total_count"?: number,
  "total_page"?: number,
  "data"?: Array<{
  "warehouse_name"?: string,
  "warehouse_code"?: string,
  "platform_name"?: string,
  "country_code"?: string,
  "area_code"?: string,
  "city_code"?: string,
  "town_code"?: string,
  "division_id"?: string,
  "longitude"?: string,
  "latitude"?: string,
  "zip_code"?: string,
  "multi_channel"?: boolean,
  }>,
}
export type GetWarehouseListForMCLResponse = ApiResponse<GetWarehouseListForMCLData>

export interface GetWarehouseStockRequest {
  /** Seller SKU */
  "seller_sku"?: string,
  /** Marketplace should be "LAZADA_MY","LAZADA_ID","LAZADA_VN","LAZADA_SG","LAZADA_TH","LAZADA_PH" */
  "marketplace": string,
  /** List of shop SKU, Comma separated list in square brackets */
  "fulfilment_sku"?: string,
  /** Warehouse Code List：https://www.yuque.com/u1990121/kb/exh5go#B4gg */
  "store_code"?: string,
}
export interface GetWarehouseStockData {
  "data"?: Array<{
  "fulfilment_sku"?: string,
  "store_stocks"?: Array<{
    "store_code"?: string,
    "stocks"?: {
      "sellable"?: {
        "available"?: number,
        "reserved"?: number,
      },
      "unsellable"?: {
        "available"?: number,
        "reserved"?: number,
      },
      "pending"?: {
        "reserved"?: number,
        "available"?: number,
      },
    },
  }>,
  }>,
}
export type GetWarehouseStockResponse = ApiResponse<GetWarehouseStockData>

export interface GetWarehouseStockV3Request {
  /** Seller SKU, required when fulfilment_sku is empty */
  "seller_sku"?: string,
  /** Marketplace should be "LAZADA_MY","LAZADA_ID","LAZADA_VN","LAZADA_SG","LAZADA_TH","LAZADA_PH" */
  "marketplace": string,
  /** List of shop SKU, Comma separated list in square brackets, required when seller_sku is empty */
  "fulfilment_sku"?: string,
  /** Warehouse Code List：https://www.yuque.com/u1990121/kb/exh5go#B4gg */
  "store_code"?: string,
}
export interface GetWarehouseStockV3Data {
  "data"?: Array<{
  "fulfilment_sku"?: string,
  "store_stocks"?: Array<{
    "store_code"?: string,
    "stocks"?: {
      "expiredUnsellable"?: {
        "available"?: number,
        "reserved"?: number,
      },
      "sellable"?: {
        "available"?: number,
        "reserved"?: number,
      },
      "unsellable"?: {
        "available"?: number,
        "reserved"?: number,
      },
      "pending"?: {
        "available"?: number,
        "reserved"?: number,
      },
      "transfer"?: {
        "available"?: number,
        "reserved"?: number,
      },
      "damagedUnsellable"?: {
        "reserved"?: number,
        "available"?: number,
      },
    },
  }>,
  }>,
}
export type GetWarehouseStockV3Response = ApiResponse<GetWarehouseStockV3Data>

export interface ListIcpWarehouseRequest {
  /** Warehouse type. Enum: Inbound \ */
  "warehouse_type": string,
}
export interface ListIcpWarehouseData {
  "success"?: boolean,
  "error_code"?: string,
  "error_message"?: string,
  "data"?: Array<{
  "warehouse_code"?: string,
  "warehouse_name"?: string,
  }>,
}
export type ListIcpWarehouseResponse = ApiResponse<ListIcpWarehouseData>

export interface QueryFulfillmentOrderForMCLRequest {
  /** Order level identifier for fulfilment order, unique for idempotence */
  "platform_order_id"?: string,
  /** Trade platform name */
  "platform_name": string,
  /** Page size */
  "per_page": number,
  /** Page index */
  "page": number,
  /** Sales order number from platform */
  "sales_order_number"?: string,
  /** Status */
  "status"?: string,
  /** Order create time lower bound */
  "create_start_time": string,
  /** Order create time upper bound */
  "create_end_time": string,
  /** Delivery type */
  "delivery_type"?: string,
}
export interface QueryFulfillmentOrderForMCLData {
  "success"?: boolean,
  "error_code"?: string,
  "error_message"?: string,
  "per_page"?: number,
  "page"?: number,
  "total_count"?: number,
  "data"?: Array<{
  "sales_order_number"?: string,
  "platform_order_id"?: string,
  "create_time"?: string,
  "items"?: Array<{
    "platform_item_id"?: string,
    "fulfillment_sku_id"?: string,
    "status"?: string,
  }>,
  }>,
}
export type QueryFulfillmentOrderForMCLResponse = ApiResponse<QueryFulfillmentOrderForMCLData>

export interface QueryInboundBatchRequest {
  /** request body */
  "query_request": Record<string, unknown>,
  /** inbound order */
  "query_request.inbound_order": string,
  /** shipper id */
  "query_request.shipper_id": number,
  /** store code */
  "query_request.store_code": string,
}
export interface QueryInboundBatchData {
  "result"?: {
  "data"?: {
    "inbound_order"?: string,
    "store_code"?: string,
    "batch_list"?: Array<{
      "product_batch"?: string,
      "fulfillment_sku_id"?: string,
      "inventory_status"?: number,
      "quantity"?: number,
    }>,
  },
  "success"?: boolean,
  "error_message"?: string,
  "error_code"?: string,
  },
}
export type QueryInboundBatchResponse = ApiResponse<QueryInboundBatchData>

export interface QueryInboundReservationOrderRequest {
  /** reservation order */
  "reservation_order"?: string,
  /** Inbound Order ID, required when reservation order is not present. if reservation order is present, use reservation order first */
  "inbound_order"?: string,
}
export interface QueryInboundReservationOrderData {
  "success"?: boolean,
  "error_code"?: string,
  "error_message"?: string,
  "data"?: {
  "reservation_order"?: string,
  "slot"?: string,
  "status"?: string,
  "inbound_orders"?: Array<string>,
  },
}
export type QueryInboundReservationOrderResponse = ApiResponse<QueryInboundReservationOrderData>

export interface QueryReverseOrderForMCLRequest {
  /** Sales order number from platform */
  "sales_order_number": string,
}
export interface QueryReverseOrderForMCLData {
  "success"?: boolean,
  "error_message"?: string,
  "data"?: Array<{
  "sales_order_number"?: string,
  "create_time"?: string,
  "type"?: string,
  "status"?: string,
  "items"?: Array<{
    "fulfillment_sku_id"?: number,
    "fulfillment_sku_code"?: string,
    "quantity"?: number,
  }>,
  }>,
}
export type QueryReverseOrderForMCLResponse = ApiResponse<QueryReverseOrderForMCLData>

export interface RemoveFulfillmentSkuRelationRequest {
  /** site */
  "site": string,
  /** itemId */
  "item_id": number,
  /** skuId */
  "sku_id": number,
  /** fulfillmentSkuId */
  "sc_item_id"?: number,
  /** fulfillmentSku */
  "fulfillment_sku"?: string,
}
export interface RemoveFulfillmentSkuRelationData {
  "result"?: {
  "success"?: boolean,
  "failure"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
  },
}
export type RemoveFulfillmentSkuRelationResponse = ApiResponse<RemoveFulfillmentSkuRelationData>

export interface ReturnCancellationRequest {
  /** return id created during return order creation */
  "return_id": string,
}
export interface ReturnCancellationData {
  "success"?: boolean,
  "error_code"?: string,
  "error_message"?: string,
}
export type ReturnCancellationResponse = ApiResponse<ReturnCancellationData>

export interface ReturnOrderCreationRequest {
  /** tracking */
  "tracking": Record<string, unknown>,
  /** origin */
  "tracking.origin": Record<string, unknown>,
  /** location */
  "tracking.origin.location": Record<string, unknown>,
  /** Address */
  "tracking.origin.location.address": string,
  /** Address ID */
  "tracking.origin.location.address_id": string,
  /** Additional details of the location */
  "tracking.origin.location.details"?: string,
  /** Tracking Number */
  "tracking.tracking_number": string,
  /** Platform Name */
  "platform_name": string,
  /** Sales order creation time of platform side Datetime format: 2017-11-17T10:14:13.185Z */
  "platform_order_creation_time": string,
  /** Customer comments accompanying the return order, will be used as reference during quality check */
  "return_comment": string,
  /** Return delivery type (always return_by_customer) */
  "return_delivery_type": string,
  /** Return order number from platform; must be unique */
  "return_order_number": string,
  /** Sales order number accompanying the original fulfilment order request */
  "sales_order_number": string,
  /** Currency */
  "currency": string,
  /** customer info */
  "customer": Record<string, unknown>,
  /** Customer phone */
  "customer.phone": string,
  /** Customer email */
  "customer.email"?: string,
  /** Customer name */
  "customer.name": string,
  /** Return order id - unique order level Identifier used to send return order and item status notification events */
  "platform_order_id": string,
  /** parcel */
  "parcel": Record<string, unknown>,
  /** items */
  "parcel.items": Array<Record<string, unknown>>,
  /** Item name */
  "parcel.items.name": string,
  /** Paid Price Minimum value : 0 */
  "parcel.items.paid_price"?: string,
  /** Return item id - unique item level Identifier used to send return item status notification events */
  "parcel.items.platform_item_id": string,
  /** Quantity Minimum value : 1 */
  "parcel.items.quantity": number,
  /** Return reason (please refer to list of return reasons below) */
  "parcel.items.return_reason": string,
  /** Return Type (always normal) */
  "parcel.items.return_type": string,
  /** Seller return policy (free text) */
  "parcel.items.seller_return_policy": string,
  /** Fulfillment SKU id */
  "parcel.items.sku": string,
  /** Price of a single unit Minimum value : 0 */
  "parcel.items.unit_price": string,
  /** Weight of a single unit in grams Minimum value : 0 */
  "parcel.items.weight": string,
  /** Width in cm Minimum value : 0 */
  "parcel.items.width": string,
  /** Package indentifier used to deliver original sales order item to customer */
  "parcel.items.delivery_package_id": string,
  /** Fulfillment type (always MCL) */
  "parcel.items.fulfillment_type": string,
  /** Height in cm. Minimum value : 0 */
  "parcel.items.height": string,
  /** Length in cm. Minimum value : 0 */
  "parcel.items.length": string,
}
export interface ReturnOrderCreationData {
  "data"?: {
  "return_id"?: string,
  },
  "success"?: boolean,
  "error_code"?: string,
  "error_message"?: string,
}
export type ReturnOrderCreationResponse = ApiResponse<ReturnOrderCreationData>

export interface SetStockRuleRequest {
  /** skus */
  "skus": Array<Record<string, unknown>>,
  /** fulfillment sku id */
  "skus.fulfillment_sku_id": string,
  /** warehouse code */
  "skus.store_code": string,
  /** ratio */
  "skus.ratio": number,
  /** enable auto-balancing between channels */
  "skus.auto_balancing": boolean,
}
export interface SetStockRuleData {
  "success"?: boolean,
  "error_code"?: string,
  "error_message"?: string,
}
export type SetStockRuleResponse = ApiResponse<SetStockRuleData>

export interface UpdateFulfillmentSkuDecoupleRequest {
  /** barcode list */
  "barcodes"?: Array<string>,
  /** true/false */
  "hygroscopic"?: boolean,
  /** true/false */
  "precious"?: boolean,
  /** food,liquid,danger,other */
  "product_type"?: string,
  /** 1: normal temperature 4: refrigerated 6: frozen */
  "temperature_requirement"?: string,
  /** at most 6 pictures url */
  "pic_urls"?: Array<string>,
  /** true/false */
  "serial_number_flag"?: boolean,
  /** true/false */
  "shelf_life_flag"?: boolean,
  /** required if shelf_life_day is life_mgnt */
  "shelf_life_days"?: number,
  /** required if shelf_life_day is life_mgnt */
  "reject_shelf_live"?: number,
  /** required if shelf_life_day is life_mgnt */
  "alert_shelf_live"?: number,
  /** required if shelf_life_day is life_mgnt */
  "offline_shelf_live"?: number,
  /** sale price */
  "sale_price"?: string,
  /** fulfillment_sku_id */
  "fulfillment_sku_id": number,
}
export interface UpdateFulfillmentSkuDecoupleData {
  "success"?: boolean,
  "error_code"?: string,
  "error_message"?: string,
  "data"?: boolean,
}
export type UpdateFulfillmentSkuDecoupleResponse = ApiResponse<UpdateFulfillmentSkuDecoupleData>

export interface UploadWaybillRequest {
  /** waybill pdf */
  "waybill": Array<unknown>,
  /** package code */
  "package_code": string,
  /** tracking number */
  "tracking_number": string,
  /** extend fields */
  "extends_field"?: string,
  /** warehouse_code */
  "store_code": string,
}
export interface UploadWaybillData {
  "success"?: boolean,
  "error_message"?: string,
  "error_code"?: string,
}
export type UploadWaybillResponse = ApiResponse<UploadWaybillData>


export class LazadaFBLAPIApi {
  constructor(private client: LazadaClient) {}

  /**
   * BuildFulfillmentSkuRelation
   * /fbl/fulfillment_sku_relation/write (POST)
   */
  async buildFulfillmentSkuRelation(params: BuildFulfillmentSkuRelationRequest, opts?: LazadaRequestOptions): Promise<BuildFulfillmentSkuRelationResponse> {
    return this.client.request({"method":"POST","path":"/fbl/fulfillment_sku_relation/write","params":["site","item_id","sku_id","sc_item_id","fulfillment_sku"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * CancelFulfillmentOrderForMCL
   * /fbl/fulfillment_order/cancel (POST)
   */
  async cancelFulfillmentOrderForMCL(params: CancelFulfillmentOrderForMCLRequest, opts?: LazadaRequestOptions): Promise<CancelFulfillmentOrderForMCLResponse> {
    return this.client.request({"method":"POST","path":"/fbl/fulfillment_order/cancel","params":["platform_order_id","platform_name","cancel_reason","items","items.platform_item_id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * CancelInboundReservation
   * /fbl/inbound_reservation/cancel (POST)
   */
  async cancelInboundReservation(params: CancelInboundReservationRequest, opts?: LazadaRequestOptions): Promise<CancelInboundReservationResponse> {
    return this.client.request({"method":"POST","path":"/fbl/inbound_reservation/cancel","params":["reservation_order"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * CancelOutboundOrder
   * /fbl/outbound_order/cancel (POST)
   */
  async cancelOutboundOrder(params: CancelOutboundOrderRequest, opts?: LazadaRequestOptions): Promise<CancelOutboundOrderResponse> {
    return this.client.request({"method":"POST","path":"/fbl/outbound_order/cancel","params":["outbound_order_no"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * CancelVasOrder4FBL
   * /fbl/vas/cancelVasOrder (GET)
   */
  async cancelVasOrder4FBL(params: CancelVasOrder4FBLRequest, opts?: LazadaRequestOptions): Promise<CancelVasOrder4FBLResponse> {
    return this.client.request({"method":"GET","path":"/fbl/vas/cancelVasOrder","params":["platform_name","vas_order_no","cancel_reason"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * CancelnBoundOrder
   * /fbl/inbound_order/cancel (POST)
   */
  async cancelnBoundOrder(params: CancelnBoundOrderRequest, opts?: LazadaRequestOptions): Promise<CancelnBoundOrderResponse> {
    return this.client.request({"method":"POST","path":"/fbl/inbound_order/cancel","params":["inbound_order_no"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * CheckInboundReservationSlot
   * /fbl/inbound_reservation/check (GET)
   */
  async checkInboundReservationSlot(params: CheckInboundReservationSlotRequest, opts?: LazadaRequestOptions): Promise<CheckInboundReservationSlotResponse> {
    return this.client.request({"method":"GET","path":"/fbl/inbound_reservation/check","params":["inbound_orders","date"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * CreateFulfillmentOrderForMCL
   * /fbl/fulfillment_order/create (POST)
   */
  async createFulfillmentOrderForMCL(params: CreateFulfillmentOrderForMCLRequest, opts?: LazadaRequestOptions): Promise<CreateFulfillmentOrderForMCLResponse> {
    return this.client.request({"method":"POST","path":"/fbl/fulfillment_order/create","params":["platform_payment_method","remark","currency","items","items.paid_price","items.platform_delivery_type","items.platform_item_id","items.sku","items.owner_id","items.shipping_type","items.fulfillment_sku_id","items.quantity","items.store_code","items.unit_price","items.warehouse_promised_time","items.promised_max_time","items.promised_min_time","items.platform_sub_trade_id","items.category_name","items.fulfillment_priority","receiver","receiver.zip_code","receiver.country_iso","receiver.country","receiver.province","receiver.city","receiver.district","receiver.town","receiver.detail_address","receiver.area_id","receiver.division_id","receiver.address_id","receiver.mobile_phone","receiver.telephone","receiver.company_name","receiver.contact_name","receiver.email","platform_name","fulfillment_finish_time","platform_order_creation_time","sales_order_number","platform_order_id","out_order_creation_time","is_platform_nominated_fleet","seller_store_id","seller_store_name"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * CreateFulfillmentOrderForMCLV2PNF
   * /fbl/fulfillment_order_pnf/create (POST)
   */
  async createFulfillmentOrderForMCLV2PNF(params: CreateFulfillmentOrderForMCLV2PNFRequest, opts?: LazadaRequestOptions): Promise<CreateFulfillmentOrderForMCLV2PNFResponse> {
    return this.client.request({"method":"POST","path":"/fbl/fulfillment_order_pnf/create","params":["platform_payment_method","remark","currency","items","items.paid_price","items.platform_delivery_type","items.platform_item_id","items.sku","items.owner_id","items.shipping_type","items.fulfillment_sku_id","items.quantity","items.store_code","items.unit_price","items.warehouse_promised_time","items.promised_max_time","items.promised_min_time","items.platform_sub_trade_id","items.category_name","items.fulfillment_priority","platform_name","fulfillment_finish_time","platform_order_creation_time","sales_order_number","platform_order_id","out_order_creation_time","seller_store_id","seller_store_name"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * CreateFulfillmentSkuDecouple
   * /fbl/fulfillment_sku/create (POST)
   */
  async createFulfillmentSkuDecouple(params: CreateFulfillmentSkuDecoupleRequest, opts?: LazadaRequestOptions): Promise<CreateFulfillmentSkuDecoupleResponse> {
    return this.client.request({"method":"POST","path":"/fbl/fulfillment_sku/create","params":["fulfillment_sku_name","barcodes","hygroscopic","precious","product_type","temperature_requirement","pic_urls","serial_number_flag","shelf_life_flag","shelf_life_days","reject_shelf_live","alert_shelf_live","offline_shelf_live","seller_sku","sale_price","length","width","height","weight"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * CreateFulfillmentSkuForFBL
   * /fbl/fulfillment_sku_fbl/create (POST)
   */
  async createFulfillmentSkuForFBL(params: CreateFulfillmentSkuForFBLRequest, opts?: LazadaRequestOptions): Promise<CreateFulfillmentSkuForFBLResponse> {
    return this.client.request({"method":"POST","path":"/fbl/fulfillment_sku_fbl/create","params":["sku_id","barcodes","hygroscopic","product_type","temperature_requirement","serial_number_flag","shelf_life_flag","shelf_life_days","reject_shelf_live","alert_shelf_live","offline_shelf_live"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * CreateInboundOrder
   * /fbl/inbound_order/create (POST)
   */
  async createInboundOrder(params: CreateInboundOrderRequest, opts?: LazadaRequestOptions): Promise<CreateInboundOrderResponse> {
    return this.client.request({"method":"POST","path":"/fbl/inbound_order/create","params":["warehouse_code","delivery_type","seller_warehouse_code","estimate_time","comment","reference_number","skus","skus.seller_sku","skus.fulfillment_sku","skus.requested_quantity"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * CreateInboundReservation
   * /fbl/inbound_reservation/create (POST)
   */
  async createInboundReservation(params: CreateInboundReservationRequest, opts?: LazadaRequestOptions): Promise<CreateInboundReservationResponse> {
    return this.client.request({"method":"POST","path":"/fbl/inbound_reservation/create","params":["inbound_orders","slot"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * CreateOutBoundOrder
   * /fbl/outbound_order/create (POST)
   */
  async createOutBoundOrder(params: CreateOutBoundOrderRequest, opts?: LazadaRequestOptions): Promise<CreateOutBoundOrderResponse> {
    return this.client.request({"method":"POST","path":"/fbl/outbound_order/create","params":["reference_number","warehouse_code","delivery_type","seller_warehouse_code","estimate_time","comment","inventory_type","skus","skus.fulfillment_sku","skus.requested_quantity","skus.seller_sku"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * CreateProductReinboundOrderForMCL
   * /fbl/product_reinbound/create (POST)
   */
  async createProductReinboundOrderForMCL(params: CreateProductReinboundOrderForMCLRequest, opts?: LazadaRequestOptions): Promise<CreateProductReinboundOrderForMCLResponse> {
    return this.client.request({"method":"POST","path":"/fbl/product_reinbound/create","params":["platform_name","sales_order_number","platform_order_id","reinbound_order_id","tracking_number","reason"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * CreateVasOrder4FBL
   * /fbl/vas/createVasOrder (GET)
   */
  async createVasOrder4FBL(params: CreateVasOrder4FBLRequest, opts?: LazadaRequestOptions): Promise<CreateVasOrder4FBLResponse> {
    return this.client.request({"method":"GET","path":"/fbl/vas/createVasOrder","params":["platform_name","idempotent_key","service_provider_no","target_order_no","target_order_type","vas_code","warehouse_code","lines","lines.quantity","lines.scItem_id","lines.bundle_quantity"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetChannelStocksForMCL
   * /fbl/channel_stocks/get (GET)
   */
  async getChannelStocksForMCL(params: GetChannelStocksForMCLRequest, opts?: LazadaRequestOptions): Promise<GetChannelStocksForMCLResponse> {
    return this.client.request({"method":"GET","path":"/fbl/channel_stocks/get","params":["platform_name","fulfillment_sku_id","warehouse_code"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetFulfillmentProductDetail
   * /fbl/fulfillment_products/get (GET)
   */
  async getFulfillmentProductDetail(params: GetFulfillmentProductDetailRequest, opts?: LazadaRequestOptions): Promise<GetFulfillmentProductDetailResponse> {
    return this.client.request({"method":"GET","path":"/fbl/fulfillment_products/get","params":["per_page","shelf_life_flag","marketplace","fulfillment_sku","serial_number_flag","page","fulfillment_sku_name","barcode"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetFulfillmentSkuListForMCL
   * /fbl/fulfillment_sku_list/get (GET)
   */
  async getFulfillmentSkuListForMCL(params: GetFulfillmentSkuListForMCLRequest, opts?: LazadaRequestOptions): Promise<GetFulfillmentSkuListForMCLResponse> {
    return this.client.request({"method":"GET","path":"/fbl/fulfillment_sku_list/get","params":["page","per_page","platform_name","fulfillment_sku_name","seller_sku","fulfillment_sku_code","barcode","fulfillment_sku_codes"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetFulfillmentSkuRelationByScItem
   * /fbl/fulfillment_sku_relation/get_by_sc_item (GET)
   */
  async getFulfillmentSkuRelationByScItem(params: GetFulfillmentSkuRelationByScItemRequest, opts?: LazadaRequestOptions): Promise<GetFulfillmentSkuRelationByScItemResponse> {
    return this.client.request({"method":"GET","path":"/fbl/fulfillment_sku_relation/get_by_sc_item","params":["site","sc_item_id","fulfillment_sku"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetFulfillmentSkuRelationBySku
   * /fbl/fulfillment_sku_relation/get_by_sku (GET)
   */
  async getFulfillmentSkuRelationBySku(params: GetFulfillmentSkuRelationBySkuRequest, opts?: LazadaRequestOptions): Promise<GetFulfillmentSkuRelationBySkuResponse> {
    return this.client.request({"method":"GET","path":"/fbl/fulfillment_sku_relation/get_by_sku","params":["site","item_id","sku_id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetFulfillmentSkuRelationsByScItems
   * /fbl/fulfillment_sku_relation/get_by_sc_items (GET)
   */
  async getFulfillmentSkuRelationsByScItems(params: GetFulfillmentSkuRelationsByScItemsRequest, opts?: LazadaRequestOptions): Promise<GetFulfillmentSkuRelationsByScItemsResponse> {
    return this.client.request({"method":"GET","path":"/fbl/fulfillment_sku_relation/get_by_sc_items","params":["biz_name","seller_ids","sc_item_ids","fulfillment_skus"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetFulfillmentSkuRelationsBySkus
   * /fbl/fulfillment_sku_relation/get_by_skus (GET)
   */
  async getFulfillmentSkuRelationsBySkus(params: GetFulfillmentSkuRelationsBySkusRequest, opts?: LazadaRequestOptions): Promise<GetFulfillmentSkuRelationsBySkusResponse> {
    return this.client.request({"method":"GET","path":"/fbl/fulfillment_sku_relation/get_by_skus","params":["site","item_sku","item_sku.item_ids","item_sku.sku_ids"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetIcpOrderFile
   * /fbl/icp_order/file (GET)
   */
  async getIcpOrderFile(params: GetIcpOrderFileRequest, opts?: LazadaRequestOptions): Promise<GetIcpOrderFileResponse> {
    return this.client.request({"method":"GET","path":"/fbl/icp_order/file","params":["order_number"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetInboundOrderDetail
   * /fbl/inbound_order_detail/get (GET)
   */
  async getInboundOrderDetail(params: GetInboundOrderDetailRequest, opts?: LazadaRequestOptions): Promise<GetInboundOrderDetailResponse> {
    return this.client.request({"method":"GET","path":"/fbl/inbound_order_detail/get","params":["inbound_order_no","marketplace"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetInboundOrderList
   * /fbl/inbound_orders/get (GET)
   */
  async getInboundOrderList(params: GetInboundOrderListRequest, opts?: LazadaRequestOptions): Promise<GetInboundOrderListResponse> {
    return this.client.request({"method":"GET","path":"/fbl/inbound_orders/get","params":["inbound_order_no","creation_time_From","creation_time_To","inbound_warehouse","seller_sku","fulfillment_sku","marketplace","page","per_page","reservation_status","reservation_order","reference_number"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetInboundReservationFile
   * /fbl/inbound_reservation/file (GET)
   */
  async getInboundReservationFile(params: GetInboundReservationFileRequest, opts?: LazadaRequestOptions): Promise<GetInboundReservationFileResponse> {
    return this.client.request({"method":"GET","path":"/fbl/inbound_reservation/file","params":["reservation_order"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetInventoryChangedSKU
   * /fbl/inventory_changed_sku/get (GET)
   */
  async getInventoryChangedSKU(params: GetInventoryChangedSKURequest, opts?: LazadaRequestOptions): Promise<GetInventoryChangedSKUResponse> {
    return this.client.request({"method":"GET","path":"/fbl/inventory_changed_sku/get","params":["warehouse_code","page","per_page","market_place","operate_Time_From","operate_Time_To"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetInventoryOccupyDetails
   * /fbl/inventory_occupy_details/get (GET)
   */
  async getInventoryOccupyDetails(params: GetInventoryOccupyDetailsRequest, opts?: LazadaRequestOptions): Promise<GetInventoryOccupyDetailsResponse> {
    return this.client.request({"method":"GET","path":"/fbl/inventory_occupy_details/get","params":["fulfillmentSku","storeCode","marketplace","pageNum","pageSize"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetInventoryOperateLog
   * /fbl/inventory_operate_log/get (GET)
   */
  async getInventoryOperateLog(params: GetInventoryOperateLogRequest, opts?: LazadaRequestOptions): Promise<GetInventoryOperateLogResponse> {
    return this.client.request({"method":"GET","path":"/fbl/inventory_operate_log/get","params":["page","per_page","market_place","operate_time_from","operate_time_to","warehouse_code","fulfillment_sku_id","order_type_code"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetOutboundOrderDetail
   * /fbl/outbound_order_detail/get (GET)
   */
  async getOutboundOrderDetail(params: GetOutboundOrderDetailRequest, opts?: LazadaRequestOptions): Promise<GetOutboundOrderDetailResponse> {
    return this.client.request({"method":"GET","path":"/fbl/outbound_order_detail/get","params":["outbound_order_no","marketplace"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetOutboundOrderList
   * /fbl/outbound_orders/get (GET)
   */
  async getOutboundOrderList(params: GetOutboundOrderListRequest, opts?: LazadaRequestOptions): Promise<GetOutboundOrderListResponse> {
    return this.client.request({"method":"GET","path":"/fbl/outbound_orders/get","params":["outbound_order_no","creation_time_from","creation_time_to","outbound_warehouse","seller_sku","fulfillment_sku","marketplace","page","per_page","reference_number"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetPlatformProductsV2
   * /fbl/platform_products/get2 (GET)
   */
  async getPlatformProductsV2(params: GetPlatformProductsV2Request, opts?: LazadaRequestOptions): Promise<GetPlatformProductsV2Response> {
    return this.client.request({"method":"GET","path":"/fbl/platform_products/get2","params":["per_page","seller_id","marketplace","seller_sku","platform_sku_name","ready_for_inbound","platform_sku","page"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetProductBatchList
   * /fbl/product_batch/query (GET)
   */
  async getProductBatchList(params: GetProductBatchListRequest, opts?: LazadaRequestOptions): Promise<GetProductBatchListResponse> {
    return this.client.request({"method":"GET","path":"/fbl/product_batch/query","params":["productBatchListRequest","productBatchListRequest.fulfillment_sku_ids","productBatchListRequest.shipper_id","productBatchListRequest.page_no","productBatchListRequest.page_size","productBatchListRequest.store_code"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetShipperInfo
   * /fbl/shipper/get (GET)
   */
  async getShipperInfo(params: GetShipperInfoRequest, opts?: LazadaRequestOptions): Promise<GetShipperInfoResponse> {
    return this.client.request({"method":"GET","path":"/fbl/shipper/get","params":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetStockRule
   * /fbl/stock_rule/get (GET)
   */
  async getStockRule(params: GetStockRuleRequest, opts?: LazadaRequestOptions): Promise<GetStockRuleResponse> {
    return this.client.request({"method":"GET","path":"/fbl/stock_rule/get","params":["fulfillment_sku_ids","store_code","page","per_page"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetVasOrderByNo4FBL
   * /fbl/vas/getVasOrderByNo (GET)
   */
  async getVasOrderByNo4FBL(params: GetVasOrderByNo4FBLRequest, opts?: LazadaRequestOptions): Promise<GetVasOrderByNo4FBLResponse> {
    return this.client.request({"method":"GET","path":"/fbl/vas/getVasOrderByNo","params":["platform_name","vas_order_code"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetWarehouseListForMCL
   * /fbl/warehouses/get (GET)
   */
  async getWarehouseListForMCL(params: GetWarehouseListForMCLRequest, opts?: LazadaRequestOptions): Promise<GetWarehouseListForMCLResponse> {
    return this.client.request({"method":"GET","path":"/fbl/warehouses/get","params":["country_code","page","per_page"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetWarehouseStock
   * /fbl/stocks/get (GET)
   */
  async getWarehouseStock(params: GetWarehouseStockRequest, opts?: LazadaRequestOptions): Promise<GetWarehouseStockResponse> {
    return this.client.request({"method":"GET","path":"/fbl/stocks/get","params":["seller_sku","marketplace","fulfilment_sku","store_code"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetWarehouseStockV3
   * /fbl/stocks/getV3 (GET)
   */
  async getWarehouseStockV3(params: GetWarehouseStockV3Request, opts?: LazadaRequestOptions): Promise<GetWarehouseStockV3Response> {
    return this.client.request({"method":"GET","path":"/fbl/stocks/getV3","params":["seller_sku","marketplace","fulfilment_sku","store_code"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * ListIcpWarehouse
   * /fbl/icp_warehouse/list (GET)
   */
  async listIcpWarehouse(params: ListIcpWarehouseRequest, opts?: LazadaRequestOptions): Promise<ListIcpWarehouseResponse> {
    return this.client.request({"method":"GET","path":"/fbl/icp_warehouse/list","params":["warehouse_type"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * QueryFulfillmentOrderForMCL
   * /fbl/fulfillment_order_list/get (GET)
   */
  async queryFulfillmentOrderForMCL(params: QueryFulfillmentOrderForMCLRequest, opts?: LazadaRequestOptions): Promise<QueryFulfillmentOrderForMCLResponse> {
    return this.client.request({"method":"GET","path":"/fbl/fulfillment_order_list/get","params":["platform_order_id","platform_name","per_page","page","sales_order_number","status","create_start_time","create_end_time","delivery_type"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * QueryInboundBatch
   * /fbl/inbound_batch/query (GET)
   */
  async queryInboundBatch(params: QueryInboundBatchRequest, opts?: LazadaRequestOptions): Promise<QueryInboundBatchResponse> {
    return this.client.request({"method":"GET","path":"/fbl/inbound_batch/query","params":["query_request","query_request.inbound_order","query_request.shipper_id","query_request.store_code"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * QueryInboundReservationOrder
   * /fbl/inbound_reservation/get (GET)
   */
  async queryInboundReservationOrder(params: QueryInboundReservationOrderRequest, opts?: LazadaRequestOptions): Promise<QueryInboundReservationOrderResponse> {
    return this.client.request({"method":"GET","path":"/fbl/inbound_reservation/get","params":["reservation_order","inbound_order"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * QueryReverseOrderForMCL
   * /fbl/reverse_order/get (GET)
   */
  async queryReverseOrderForMCL(params: QueryReverseOrderForMCLRequest, opts?: LazadaRequestOptions): Promise<QueryReverseOrderForMCLResponse> {
    return this.client.request({"method":"GET","path":"/fbl/reverse_order/get","params":["sales_order_number"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * RemoveFulfillmentSkuRelation
   * /fbl/fulfillment_sku_relation/remove (POST)
   */
  async removeFulfillmentSkuRelation(params: RemoveFulfillmentSkuRelationRequest, opts?: LazadaRequestOptions): Promise<RemoveFulfillmentSkuRelationResponse> {
    return this.client.request({"method":"POST","path":"/fbl/fulfillment_sku_relation/remove","params":["site","item_id","sku_id","sc_item_id","fulfillment_sku"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * ReturnCancellation
   * /fbl/returns/cancel (POST)
   */
  async returnCancellation(params: ReturnCancellationRequest, opts?: LazadaRequestOptions): Promise<ReturnCancellationResponse> {
    return this.client.request({"method":"POST","path":"/fbl/returns/cancel","params":["return_id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * ReturnOrderCreation
   * /fbl/returns/create (POST)
   */
  async returnOrderCreation(params: ReturnOrderCreationRequest, opts?: LazadaRequestOptions): Promise<ReturnOrderCreationResponse> {
    return this.client.request({"method":"POST","path":"/fbl/returns/create","params":["tracking","tracking.origin","tracking.origin.location","tracking.origin.location.address","tracking.origin.location.address_id","tracking.origin.location.details","tracking.tracking_number","platform_name","platform_order_creation_time","return_comment","return_delivery_type","return_order_number","sales_order_number","currency","customer","customer.phone","customer.email","customer.name","platform_order_id","parcel","parcel.items","parcel.items.name","parcel.items.paid_price","parcel.items.platform_item_id","parcel.items.quantity","parcel.items.return_reason","parcel.items.return_type","parcel.items.seller_return_policy","parcel.items.sku","parcel.items.unit_price","parcel.items.weight","parcel.items.width","parcel.items.delivery_package_id","parcel.items.fulfillment_type","parcel.items.height","parcel.items.length"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * SetStockRule
   * /fbl/stock_rule/set (POST)
   */
  async setStockRule(params: SetStockRuleRequest, opts?: LazadaRequestOptions): Promise<SetStockRuleResponse> {
    return this.client.request({"method":"POST","path":"/fbl/stock_rule/set","params":["skus","skus.fulfillment_sku_id","skus.store_code","skus.ratio","skus.auto_balancing"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * UpdateFulfillmentSkuDecouple
   * /fbl/fulfillment_sku/update (POST)
   */
  async updateFulfillmentSkuDecouple(params: UpdateFulfillmentSkuDecoupleRequest, opts?: LazadaRequestOptions): Promise<UpdateFulfillmentSkuDecoupleResponse> {
    return this.client.request({"method":"POST","path":"/fbl/fulfillment_sku/update","params":["barcodes","hygroscopic","precious","product_type","temperature_requirement","pic_urls","serial_number_flag","shelf_life_flag","shelf_life_days","reject_shelf_live","alert_shelf_live","offline_shelf_live","sale_price","fulfillment_sku_id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * UploadWaybill
   * /fbl/waybill/upload (GET)
   */
  async uploadWaybill(params: UploadWaybillRequest, opts?: LazadaRequestOptions): Promise<UploadWaybillResponse> {
    return this.client.request({"method":"GET","path":"/fbl/waybill/upload","params":["waybill","package_code","tracking_number","extends_field","store_code"]}, params as unknown as Record<string, unknown>, opts)
  }
}
