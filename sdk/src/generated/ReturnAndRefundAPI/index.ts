// AUTO-GENERATED from Lazada reference docs (references/api/Return and Refund API).
// Do not edit by hand; run `npm run generate` in sdk/.

import { LazadaClient } from '../../client'
import { ApiResponse, LazadaRequestOptions } from '../../types'

export interface GetReverseOrderDetailRequest {
  /** 0 */
  "reverse_order_id": number,
}
export interface GetReverseOrderDetailData {
  "data"?: {
  "reverse_order_id"?: number,
  "trade_order_id"?: number,
  "request_type"?: string,
  "shipping_type"?: string,
  "is_rtm"?: boolean,
  "reverseOrderLineDTOList"?: Array<{
    "reverse_order_line_id"?: number,
    "trade_order_line_id"?: number,
    "buyer"?: {
      "user_id"?: number,
    },
    "reverse_status"?: string,
    "productDTO"?: {
      "product_id"?: number,
      "sku"?: string,
    },
    "is_need_refund"?: boolean,
    "ofc_status"?: string,
    "trade_order_gmt_create"?: number,
    "refund_amount"?: number,
    "reason_text"?: string,
    "reason_code"?: number,
    "refund_payment_method"?: string,
    "whqc_decision"?: string,
    "return_order_line_gmt_create"?: number,
    "return_order_line_gmt_modified"?: number,
    "is_dispute"?: boolean,
    "seller_sku_id"?: string,
    "item_unit_price"?: number,
    "platform_sku_id"?: string,
    "tracking_number"?: string,
    "sla"?: number,
  }>,
  },
}
export type GetReverseOrderDetailResponse = ApiResponse<GetReverseOrderDetailData>

export interface GetReverseOrderHistoryListRequest {
  /** reverse order line id */
  "reverse_order_line_id": number,
  /** default 10 */
  "page_size"?: number,
  /** default 1 */
  "page_number"?: number,
}
export interface GetReverseOrderHistoryListData {
  "data"?: Array<{
  "list"?: Array<{
    "operator"?: string,
    "picture"?: Array<string>,
    "time"?: number,
  }>,
  "page_info"?: {
    "page_size"?: number,
    "current_page_number"?: number,
    "total"?: number,
  },
  }>,
}
export type GetReverseOrderHistoryListResponse = ApiResponse<GetReverseOrderHistoryListData>

export interface GetReverseOrderReasonListRequest {
  /** reverse order line,Can be understood as reverse order item id */
  "reverse_order_line_id": number,
}
export interface GetReverseOrderReasonListData {
  "data"?: Array<{
  "reason_id"?: number,
  "muti_language_text"?: string,
  "text"?: string,
  }>,
}
export type GetReverseOrderReasonListResponse = ApiResponse<GetReverseOrderReasonListData>

export interface GetReverseOrdersForSellerRequest {
  /** request type */
  "request_type_list"?: Array<string>,
  /** Limit the ofc status */
  "ofc_status_list"?: Array<string>,
  /** Specify reverse order id */
  "reverse_order_id"?: number,
  /** Specify trade order id */
  "trade_order_id"?: number,
  /** Page size, default 10 */
  "page_size": number,
  /** Limit the reverse status. */
  "reverse_status_list"?: Array<string>,
  /** Page no */
  "page_no": number,
  /** Return Type. Enum Values：[RTM, RTW]（ RTW: return to the lazada warehouse; RTM: return to the seller） */
  "return_to_type"?: string,
  /** Is dispute in progress */
  "dispute_in_progress"?: boolean,
  /** timestamp in Milliseconds */
  "TradeOrderLineCreatedTimeRangeStart"?: number,
  /** timestamp in Milliseconds */
  "TradeOrderLineCreatedTimeRangeEnd"?: number,
  /** timestamp in Milliseconds */
  "ReverseOrderLineTimeRangeStart"?: number,
  /** timestamp in Milliseconds */
  "ReverseOrderLineTimeRangeEnd"?: number,
  /** timestamp in Milliseconds */
  "ReverseOrderLineModifiedTimeRangeStart"?: number,
  /** timestamp in Milliseconds */
  "ReverseOrderLineModifiedTimeRangeEnd"?: number,
  /** warehouse qc decision, select one from the following: scrap/return_to_merchant/return_to_merchant_cb/return_to_customer/return_to_warehouse/not_returned */
  "QC_Decision"?: string,
}
export interface GetReverseOrdersForSellerData {
  "result"?: {
  "page_no"?: number,
  "success"?: boolean,
  "page_size"?: number,
  "total"?: number,
  "items"?: Array<{
    "reverse_order_id"?: number,
    "trade_order_id"?: number,
    "request_type"?: string,
    "is_rtm"?: boolean,
    "shipping_type"?: string,
    "reverse_order_lines"?: Array<{
      "ofc_status"?: string,
      "product"?: {
        "product_id"?: number,
        "product_sku"?: string,
      },
      "buyer"?: {
        "buyer_id"?: number,
      },
      "trade_order_gmt_create"?: number,
      "refund_amount"?: number,
      "reason_text"?: string,
      "reason_code"?: number,
      "refund_payment_method"?: string,
      "whqc_decision"?: string,
      "return_order_line_gmt_create"?: number,
      "return_order_line_gmt_modified"?: number,
      "is_dispute"?: boolean,
      "seller_sku_id"?: string,
      "item_unit_price"?: number,
      "platform_sku_id"?: string,
      "tracking_number"?: string,
      "receiver_address"?: string,
      "sla"?: number,
      "reverse_order_line_id"?: number,
      "trade_order_line_id"?: number,
      "reverse_status"?: string,
      "is_need_refund"?: string,
    }>,
  }>,
  },
}
export type GetReverseOrdersForSellerResponse = ApiResponse<GetReverseOrdersForSellerData>

export interface InitReverseOrderCancelRequest {
  /** all order items need to be cancel */
  "order_item_id_list": Array<string>,
  /** order id */
  "order_id": number,
  /** reason id */
  "reason_id": string,
}
export interface InitReverseOrderCancelData {
  "data"?: {
  "tip_content"?: string,
  "tip_type"?: string,
  },
}
export type InitReverseOrderCancelResponse = ApiResponse<InitReverseOrderCancelData>

export interface InitReverseOrderCancelDecideRequest {
  /** The reverse order to be cancelled */
  "reverse_order_id": number,
  /** decision */
  "agree_cancel": boolean,
  /** reason id */
  "reason_code"?: number,
}
export interface InitReverseOrderCancelDecideData {
  "data"?: Record<string, unknown>,
}
export type InitReverseOrderCancelDecideResponse = ApiResponse<InitReverseOrderCancelDecideData>

export interface ReverseOrderOnlyRefundDecideRequest {
  /** agreeRefund, startDispute */
  "action": string,
  /** reverse order id */
  "reverse_order_id": number,
  /** reverse order item id list, currently list size can be only 1 */
  "reverse_order_item_ids": Array<number>,
  /** comment, required if action is startDispute */
  "comment"?: string,
  /** image info list, required if action is startDispute */
  "image_info_list"?: Array<Record<string, unknown>>,
  /** image name */
  "image_info_list.file_name"?: string,
  /** image url */
  "image_info_list.file_url"?: string,
  /** video info list */
  "video_info_list"?: Array<Record<string, unknown>>,
  /** cover url */
  "video_info_list.cover_url"?: string,
  /** video url */
  "video_info_list.video_url"?: string,
}
export interface ReverseOrderOnlyRefundDecideData {
  "data"?: Record<string, unknown>,
}
export type ReverseOrderOnlyRefundDecideResponse = ApiResponse<ReverseOrderOnlyRefundDecideData>

export interface ReverseOrderReturnUpdateRequest {
  /** instantRefund;agreeReturn;refuseReturn;agreeRefund;refuseRefund;confirmDelivery */
  "action": string,
  /** reverse order id */
  "reverse_order_id": number,
  /** reverse order item id list */
  "reverse_order_item_ids": Array<number>,
  /** reason id */
  "reason_id"?: number,
  /** comment */
  "comment"?: string,
  /** image_info */
  "image_info"?: Array<Record<string, unknown>>,
  /** image name */
  "image_info.name"?: string,
  /** image url */
  "image_info.url"?: string,
}
export interface ReverseOrderReturnUpdateData {
  "data"?: Array<{
  "reverse_order_line"?: Array<{
    "reverse_order_line_id"?: number,
    "reason_source"?: string,
    "reason_type"?: string,
    "reason_id"?: number,
    "reason_name"?: string,
    "reason_desc"?: string,
    "refund_amount"?: number,
    "is_cancel"?: boolean,
    "order_id"?: number,
    "seller_sku"?: string,
    "paid_price"?: number,
    "apply_reason"?: string,
    "order_line_id"?: number,
  }>,
  "reverse_order_id"?: number,
  "reason_info"?: Array<{
    "reason_id"?: number,
    "reason_name"?: string,
  }>,
  "total_refund"?: string,
  }>,
}
export type ReverseOrderReturnUpdateResponse = ApiResponse<ReverseOrderReturnUpdateData>


export class LazadaReturnAndRefundAPIApi {
  constructor(private client: LazadaClient) {}

  /**
   * GetReverseOrderDetail
   * /order/reverse/return/detail/list (GET)
   */
  async getReverseOrderDetail(params: GetReverseOrderDetailRequest, opts?: LazadaRequestOptions): Promise<GetReverseOrderDetailResponse> {
    return this.client.request({"method":"GET","path":"/order/reverse/return/detail/list","params":["reverse_order_id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetReverseOrderHistoryList
   * /order/reverse/return/history/list (GET)
   */
  async getReverseOrderHistoryList(params: GetReverseOrderHistoryListRequest, opts?: LazadaRequestOptions): Promise<GetReverseOrderHistoryListResponse> {
    return this.client.request({"method":"GET","path":"/order/reverse/return/history/list","params":["reverse_order_line_id","page_size","page_number"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetReverseOrderReasonList
   * /order/reverse/reason/list (GET)
   */
  async getReverseOrderReasonList(params: GetReverseOrderReasonListRequest, opts?: LazadaRequestOptions): Promise<GetReverseOrderReasonListResponse> {
    return this.client.request({"method":"GET","path":"/order/reverse/reason/list","params":["reverse_order_line_id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetReverseOrdersForSeller
   * /reverse/getreverseordersforseller (GET)
   */
  async getReverseOrdersForSeller(params: GetReverseOrdersForSellerRequest, opts?: LazadaRequestOptions): Promise<GetReverseOrdersForSellerResponse> {
    return this.client.request({"method":"GET","path":"/reverse/getreverseordersforseller","params":["request_type_list","ofc_status_list","reverse_order_id","trade_order_id","page_size","reverse_status_list","page_no","return_to_type","dispute_in_progress","TradeOrderLineCreatedTimeRangeStart","TradeOrderLineCreatedTimeRangeEnd","ReverseOrderLineTimeRangeStart","ReverseOrderLineTimeRangeEnd","ReverseOrderLineModifiedTimeRangeStart","ReverseOrderLineModifiedTimeRangeEnd","QC_Decision"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * InitReverseOrderCancel
   * /order/reverse/cancel/create (GET)
   */
  async initReverseOrderCancel(params: InitReverseOrderCancelRequest, opts?: LazadaRequestOptions): Promise<InitReverseOrderCancelResponse> {
    return this.client.request({"method":"GET","path":"/order/reverse/cancel/create","params":["order_item_id_list","order_id","reason_id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * InitReverseOrderCancelDecide
   * /order/reverse/cancel/seller/decide (GET)
   */
  async initReverseOrderCancelDecide(params: InitReverseOrderCancelDecideRequest, opts?: LazadaRequestOptions): Promise<InitReverseOrderCancelDecideResponse> {
    return this.client.request({"method":"GET","path":"/order/reverse/cancel/seller/decide","params":["reverse_order_id","agree_cancel","reason_code"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * ReverseOrderOnlyRefundDecide
   * /order/reverse/onlyrefund/seller/decide (GET)
   */
  async reverseOrderOnlyRefundDecide(params: ReverseOrderOnlyRefundDecideRequest, opts?: LazadaRequestOptions): Promise<ReverseOrderOnlyRefundDecideResponse> {
    return this.client.request({"method":"GET","path":"/order/reverse/onlyrefund/seller/decide","params":["action","reverse_order_id","reverse_order_item_ids","comment","image_info_list","image_info_list.file_name","image_info_list.file_url","video_info_list","video_info_list.cover_url","video_info_list.video_url"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * ReverseOrderReturnUpdate
   * /order/reverse/return/update (GET)
   */
  async reverseOrderReturnUpdate(params: ReverseOrderReturnUpdateRequest, opts?: LazadaRequestOptions): Promise<ReverseOrderReturnUpdateResponse> {
    return this.client.request({"method":"GET","path":"/order/reverse/return/update","params":["action","reverse_order_id","reverse_order_item_ids","reason_id","comment","image_info","image_info.name","image_info.url"]}, params as unknown as Record<string, unknown>, opts)
  }
}
