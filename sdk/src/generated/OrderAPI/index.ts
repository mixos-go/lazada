// AUTO-GENERATED from Lazada reference docs (references/api/Order API).
// Do not edit by hand; run `npm run generate` in sdk/.

import { LazadaClient } from '../../client'
import { ApiResponse, LazadaRequestOptions } from '../../types'

export interface GetDocumentRequest {
  /** Document types, including 'invoice', 'shippingLabel', or 'carrierManifest'. Mandatory. */
  "doc_type": string,
  /** Identifier of the order item for which the caller wants to get a document. Mandatory. */
  "order_item_ids": string,
}
export interface GetDocumentData {
  "data"?: {
  "document"?: {
    "file"?: string,
    "mime_type"?: string,
    "document_type"?: string,
  },
  },
}
export type GetDocumentResponse = ApiResponse<GetDocumentData>

export interface GetMultipleOrderItemsRequest {
  /** Comma-separated list of order identifiers in square brackets.（No more than 50 at a time） */
  "order_ids": Array<number>,
}
export interface GetMultipleOrderItemsData {
  "data"?: Array<{
  "order_items"?: Array<{
    "reason"?: string,
    "digital_delivery_info"?: string,
    "promised_shipping_time"?: string,
    "order_id"?: number,
    "voucher_amount"?: string,
    "return_status"?: string,
    "shipping_type"?: string,
    "shipment_provider"?: string,
    "cancel_return_initiator"?: string,
    "variation"?: string,
    "created_at"?: string,
    "invoice_number"?: string,
    "shipping_amount"?: string,
    "currency"?: string,
    "shop_id"?: string,
    "sku"?: string,
    "voucher_code"?: string,
    "wallet_credits"?: string,
    "updated_at"?: string,
    "is_digital"?: number,
    "tracking_code_pre"?: string,
    "order_item_id"?: number,
    "package_id"?: string,
    "tracking_code"?: string,
    "shipping_service_cost"?: number,
    "extra_attributes"?: string,
    "paid_price"?: string,
    "shipping_provider_type"?: string,
    "product_detail_url"?: string,
    "shop_sku"?: string,
    "reason_detail"?: string,
    "purchase_order_id"?: string,
    "purchase_order_number"?: string,
    "name"?: string,
    "product_main_image"?: string,
    "item_price"?: string,
    "tax_amount"?: string,
    "status"?: string,
    "voucher_platform"?: string,
    "voucher_seller"?: string,
    "order_type"?: string,
    "stage_pay_status"?: string,
    "order_flag"?: string,
    "sla_time_stamp"?: string,
    "warehouse_code"?: string,
    "shipping_fee_original"?: string,
    "shipping_fee_discount_seller"?: string,
    "shipping_fee_discount_platform"?: string,
    "voucher_code_seller"?: string,
    "voucher_code_platform"?: string,
    "delivery_option_sof"?: string,
    "is_fbl"?: string,
    "is_reroute"?: string,
    "voucher_seller_lpi"?: string,
    "voucher_platform_lpi"?: string,
    "buyer_id"?: string,
    "pick_up_store_info"?: {
      "pick_up_store_name"?: string,
      "pick_up_store_address"?: string,
      "pick_up_store_code"?: string,
      "pick_up_store_open_hour"?: Array<string>,
    },
    "sku_id"?: string,
    "fulfillment_sla"?: string,
    "priority_fulfillment_tag"?: string,
    "gift_wrapping"?: string,
    "show_gift_wrapping_tag"?: boolean,
    "personalization"?: string,
    "show_personalization_tag"?: boolean,
    "payment_time"?: string,
    "supply_price"?: string,
    "supply_price_currency"?: string,
    "mp3_order"?: boolean,
    "semi_managed"?: string,
    "biz_group"?: number,
    "schedule_delivery_start_timeslot"?: number,
    "schedule_delivery_end_timeslot"?: number,
    "need_cancel_confirm"?: boolean,
    "is_cancel_pending"?: boolean,
    "cancel_trigger_time"?: number,
    "reverse_order_id"?: number,
    "can_escalate_pickup"?: boolean,
  }>,
  "order_number"?: number,
  "order_id"?: number,
  }>,
}
export type GetMultipleOrderItemsResponse = ApiResponse<GetMultipleOrderItemsData>

export interface GetOVOOrdersRequest {
  /** id */
  "tradeOrderIds": string,
}
export interface GetOVOOrdersData {
  "result"?: {
  "success"?: string,
  "tradeOrders"?: Array<{
    "tradeOrderId"?: number,
    "paymentMethod"?: string,
    "paidTime"?: string,
    "tradeOrderLines"?: Array<{
      "tradeOrderLineId"?: number,
      "deliveryStatus"?: string,
      "reverseStatus"?: string,
      "deliveredTime"?: string,
    }>,
  }>,
  "errorCode"?: string,
  },
}
export type GetOVOOrdersResponse = ApiResponse<GetOVOOrdersData>

export interface GetOrderRequest {
  /** The identifier that was assigned to the order by the Seller Center */
  "order_id": number,
}
export interface GetOrderData {
  "data"?: {
  "address_shipping"?: {
    "address5"?: string,
    "post_code"?: string,
    "address4"?: string,
    "last_name"?: string,
    "country"?: string,
    "address3"?: string,
    "address2"?: string,
    "city"?: string,
    "address1"?: string,
    "phone2"?: string,
    "first_name"?: string,
    "phone"?: string,
    "addressDistrict"?: string,
  },
  "customer_last_name"?: string,
  "gift_option"?: boolean,
  "voucher_code"?: string,
  "updated_at"?: string,
  "delivery_info"?: string,
  "gift_message"?: string,
  "branch_number"?: string,
  "tax_code"?: string,
  "extra_attributes"?: string,
  "shipping_fee"?: string,
  "customer_first_name"?: string,
  "payment_method"?: string,
  "statuses"?: Array<string>,
  "remarks"?: string,
  "order_number"?: number,
  "order_id"?: number,
  "voucher"?: string,
  "national_registration_number"?: string,
  "promised_shipping_times"?: string,
  "items_count"?: number,
  "created_at"?: string,
  "price"?: string,
  "address_billing"?: {
    "address3"?: string,
    "address2"?: string,
    "city"?: string,
    "address1"?: string,
    "phone2"?: string,
    "first_name"?: string,
    "phone"?: string,
    "address5"?: string,
    "post_code"?: string,
    "address4"?: string,
    "last_name"?: string,
    "country"?: string,
    "addressDistrict"?: string,
  },
  "warehouse_code"?: string,
  "shipping_fee_original"?: string,
  "shipping_fee_discount_seller"?: string,
  "shipping_fee_discount_platform"?: string,
  "buyer_note"?: string,
  "recipient_info"?: {
    "passport_no"?: string,
    "identify_no"?: string,
    "detail_address"?: string,
  },
  "need_cancel_confirm"?: boolean,
  "is_cancel_pending"?: boolean,
  },
}
export type GetOrderResponse = ApiResponse<GetOrderData>

export interface GetOrderItemsRequest {
  /** The identifier that was assigned to the order by the Seller Center. */
  "order_id": number,
}
export interface GetOrderItemsData {
  "data"?: Array<{
  "pick_up_store_info"?: {
    "pick_up_store_name"?: string,
    "pick_up_store_address"?: string,
    "pick_up_store_code"?: string,
    "pick_up_store_open_hour"?: Array<string>,
  },
  "purchase_order_number"?: string,
  "name"?: string,
  "product_main_image"?: string,
  "item_price"?: string,
  "tax_amount"?: string,
  "status"?: string,
  "cancel_return_initiator"?: string,
  "voucher_platform"?: string,
  "voucher_seller"?: string,
  "order_type"?: string,
  "stage_pay_status"?: string,
  "warehouse_code"?: string,
  "voucher_seller_lpi"?: string,
  "voucher_platform_lpi"?: string,
  "buyer_id"?: string,
  "shipping_fee_original"?: string,
  "shipping_fee_discount_seller"?: string,
  "shipping_fee_discount_platform"?: string,
  "voucher_code_seller"?: string,
  "voucher_code_platform"?: string,
  "delivery_option_sof"?: string,
  "is_fbl"?: string,
  "is_reroute"?: string,
  "reason"?: string,
  "digital_delivery_info"?: string,
  "promised_shipping_time"?: string,
  "order_id"?: string,
  "voucher_amount"?: string,
  "return_status"?: string,
  "shipping_type"?: string,
  "shipment_provider"?: string,
  "variation"?: string,
  "created_at"?: string,
  "invoice_number"?: string,
  "shipping_amount"?: string,
  "currency"?: string,
  "order_flag"?: string,
  "shop_id"?: string,
  "sla_time_stamp"?: string,
  "sku"?: string,
  "voucher_code"?: string,
  "wallet_credits"?: string,
  "updated_at"?: string,
  "is_digital"?: number,
  "tracking_code_pre"?: string,
  "order_item_id"?: number,
  "package_id"?: string,
  "tracking_code"?: string,
  "shipping_service_cost"?: number,
  "extra_attributes"?: string,
  "paid_price"?: string,
  "shipping_provider_type"?: string,
  "product_detail_url"?: string,
  "shop_sku"?: string,
  "reason_detail"?: string,
  "purchase_order_id"?: string,
  "sku_id"?: string,
  "product_id"?: string,
  "fulfillment_sla"?: string,
  "priority_fulfillment_tag"?: string,
  "gift_wrapping"?: string,
  "show_giftwrapping_tag"?: boolean,
  "personalization"?: string,
  "show_personalization_tag"?: boolean,
  "payment_time"?: number,
  "supply_price"?: string,
  "supply_price_currency"?: string,
  "mp3_order"?: boolean,
  "semi_managed"?: boolean,
  "biz_group"?: number,
  "schedule_delivery_start_timeslot"?: number,
  "schedule_delivery_end_timeslot"?: number,
  "need_cancel_confirm"?: boolean,
  "is_cancel_pending"?: boolean,
  "cancel_trigger_time"?: number,
  "reverse_order_id"?: number,
  "can_escalate_pickup"?: boolean,
  }>,
}
export type GetOrderItemsResponse = ApiResponse<GetOrderItemsData>

export interface GetOrdersRequest {
  /** Limits the returned orders to those updated before or on the specified date, given in ISO 8601 date format. Optional. */
  "update_before"?: string,
  /** Specify the sorting type. Possible values are ASC and DESC. */
  "sort_direction"?: string,
  /** Number of orders to skip at the beginning of the list. */
  "offset"?: number,
  /** The maximum number of orders that can be returned. The supported maximum number is 100. */
  "limit"?: number,
  /** Limits the returned orders to those updated after or on the specified date, given in ISO 8601 date format. Either UpdatedAfter or CreatedAfter is mandatory. */
  "update_after"?: string,
  /** Allows to choose the sorting column. Possible values are created_at and updated_at. */
  "sort_by"?: string,
  /** Limits the returned orders to those updated before or on the specified date, given in ISO 8601 date format. Optional. */
  "created_before"?: string,
  /** Limits the returned orders to those updated after or on the specified date, given in ISO 8601 date format. Either UpdatedAfter or CreatedAfter is mandatory. */
  "created_after"?: string,
  /** When set, limits the returned set of orders to loose orders, which return only entries which fit the status provided. Possible values are unpaid, pending, canceled, ready_to_ship, delivered, returned, shipped , failed, topack,toship,shipping and lost */
  "status"?: string,
}
export interface GetOrdersData {
  "data"?: {
  "countTotal"?: number,
  "count"?: number,
  "orders"?: Array<{
    "branch_number"?: string,
    "tax_code"?: string,
    "extra_attributes"?: string,
    "address_updated_at"?: string,
    "shipping_fee"?: string,
    "customer_first_name"?: string,
    "payment_method"?: string,
    "statuses"?: Array<string>,
    "remarks"?: string,
    "order_number"?: string,
    "order_id"?: string,
    "voucher"?: string,
    "national_registration_number"?: string,
    "promised_shipping_times"?: string,
    "items_count"?: number,
    "voucher_platform"?: string,
    "voucher_seller"?: string,
    "created_at"?: string,
    "price"?: string,
    "address_billing"?: {
      "address1"?: string,
      "phone2"?: string,
      "first_name"?: string,
      "phone"?: string,
      "address5"?: string,
      "post_code"?: string,
      "address4"?: string,
      "last_name"?: string,
      "country"?: string,
      "address3"?: string,
      "address2"?: string,
      "city"?: string,
      "addressDsitrict"?: string,
    },
    "warehouse_code"?: string,
    "shipping_fee_original"?: string,
    "shipping_fee_discount_seller"?: string,
    "shipping_fee_discount_platform"?: string,
    "address_shipping"?: {
      "address1"?: string,
      "phone2"?: string,
      "first_name"?: string,
      "phone"?: string,
      "address5"?: string,
      "post_code"?: string,
      "address4"?: string,
      "last_name"?: string,
      "country"?: string,
      "address3"?: string,
      "address2"?: string,
      "city"?: string,
      "addressDsitrict"?: string,
    },
    "customer_last_name"?: string,
    "gift_option"?: string,
    "voucher_code"?: string,
    "updated_at"?: string,
    "delivery_info"?: string,
    "gift_message"?: string,
    "buyer_note"?: string,
    "recipient_info"?: {
      "passport_no"?: string,
      "identify_no"?: string,
      "detail_address"?: string,
    },
    "need_cancel_confirm"?: boolean,
    "is_cancel_pending"?: string,
  }>,
  },
}
export type GetOrdersResponse = ApiResponse<GetOrdersData>

export interface OrderCancelValidateRequest {
  /** order id */
  "order_id": string,
  /** all order items need to be cancel */
  "order_item_id_list": Array<string>,
}
export interface OrderCancelValidateData {
  "data"?: {
  "tip_content"?: string,
  "tip_type"?: string,
  "reason_options"?: Array<{
    "reason_name"?: string,
    "reason_id"?: string,
  }>,
  },
}
export type OrderCancelValidateResponse = ApiResponse<OrderCancelValidateData>

export interface SetInvoiceNumberRequest {
  /** Identifier of the order item. */
  "order_item_id": number,
  /** The invoice number. */
  "invoice_number": string,
}
export interface SetInvoiceNumberData {
  "data"?: {
  "order_item_id"?: number,
  "invoice_number"?: string,
  },
}
export type SetInvoiceNumberResponse = ApiResponse<SetInvoiceNumberData>


export class LazadaOrderAPIApi {
  constructor(private client: LazadaClient) {}

  /**
   * GetDocument
   * /order/document/get (GET)
   */
  async getDocument(params: GetDocumentRequest, opts?: LazadaRequestOptions): Promise<GetDocumentResponse> {
    return this.client.request({"method":"GET","path":"/order/document/get","params":["doc_type","order_item_ids"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetMultipleOrderItems
   * /orders/items/get (GET)
   */
  async getMultipleOrderItems(params: GetMultipleOrderItemsRequest, opts?: LazadaRequestOptions): Promise<GetMultipleOrderItemsResponse> {
    return this.client.request({"method":"GET","path":"/orders/items/get","params":["order_ids"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetOVOOrders
   * /orders/ovo/get (GET)
   */
  async getOVOOrders(params: GetOVOOrdersRequest, opts?: LazadaRequestOptions): Promise<GetOVOOrdersResponse> {
    return this.client.request({"method":"GET","path":"/orders/ovo/get","params":["tradeOrderIds"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetOrder
   * /order/get (GET)
   */
  async getOrder(params: GetOrderRequest, opts?: LazadaRequestOptions): Promise<GetOrderResponse> {
    return this.client.request({"method":"GET","path":"/order/get","params":["order_id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetOrderItems
   * /order/items/get (GET)
   */
  async getOrderItems(params: GetOrderItemsRequest, opts?: LazadaRequestOptions): Promise<GetOrderItemsResponse> {
    return this.client.request({"method":"GET","path":"/order/items/get","params":["order_id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetOrders
   * /orders/get (GET)
   */
  async getOrders(params: GetOrdersRequest, opts?: LazadaRequestOptions): Promise<GetOrdersResponse> {
    return this.client.request({"method":"GET","path":"/orders/get","params":["update_before","sort_direction","offset","limit","update_after","sort_by","created_before","created_after","status"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * OrderCancelValidate
   * /order/reverse/cancel/validate (GET)
   */
  async orderCancelValidate(params: OrderCancelValidateRequest, opts?: LazadaRequestOptions): Promise<OrderCancelValidateResponse> {
    return this.client.request({"method":"GET","path":"/order/reverse/cancel/validate","params":["order_id","order_item_id_list"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * SetInvoiceNumber
   * /order/invoice_number/set (POST)
   */
  async setInvoiceNumber(params: SetInvoiceNumberRequest, opts?: LazadaRequestOptions): Promise<SetInvoiceNumberResponse> {
    return this.client.request({"method":"POST","path":"/order/invoice_number/set","params":["order_item_id","invoice_number"]}, params as unknown as Record<string, unknown>, opts)
  }
}
