// AUTO-GENERATED from Lazada reference docs (references/api/E-Tickets API).
// Do not edit by hand; run `npm run generate` in sdk/.

import { LazadaClient } from '../../client'
import { ApiResponse, LazadaRequestOptions } from '../../types'

export interface GetOrderItemsFromBarCodeRequest {
  /** certificate code */
  "code": string,
}
export interface GetOrderItemsFromBarCodeData {
  "data"?: {
  "biz_type"?: number,
  "certificate_code"?: string,
  "code_status"?: string,
  "outer_id"?: string,
  "strart_time"?: number,
  "end_time"?: number,
  "trade_order_id"?: number,
  "serial_num"?: string,
  "item_list"?: Array<{
    "item_id"?: string,
    "item_name"?: string,
    "item_img"?: string,
    "unit_fee"?: string,
    "unit_fee_currency"?: string,
    "actual_fee"?: string,
    "actual_fee_currency"?: string,
  }>,
  },
}
export type GetOrderItemsFromBarCodeResponse = ApiResponse<GetOrderItemsFromBarCodeData>

export interface GlobalEticketMerchantMaAvailableRequest {
  /** biz type */
  "biz_type": number,
  /** waiting consume code */
  "code": string,
  /** consume serialVersionUID */
  "serial_num": string,
  /** consume tools no */
  "pos_id"?: string,
  /** order id */
  "outer_id": string,
  /** consume num */
  "consume_num": number,
  /** consume store id */
  "consume_store_id": string,
}
export interface GlobalEticketMerchantMaAvailableData {
  "resp_body"?: {
  "attribute_map"?: Record<string, unknown>,
  },
  "ret_code"?: string,
  "ret_msg"?: string,
}
export type GlobalEticketMerchantMaAvailableResponse = ApiResponse<GlobalEticketMerchantMaAvailableData>

export interface GlobalEticketMerchantMaConsumeRequest {
  /** biz type */
  "biz_type": number,
  /** consume serialVersionUID */
  "serial_num": string,
  /** consume tools no */
  "pos_id"?: string,
  /** order id */
  "outer_id": string,
  /** consume num */
  "consume_num": number,
  /** waiting consume code */
  "code": string,
  /** consume store id */
  "consume_store_id": string,
}
export interface GlobalEticketMerchantMaConsumeData {
  "resp_body"?: {
  "attribute_map"?: Record<string, unknown>,
  },
  "ret_code"?: string,
  "ret_msg"?: string,
}
export type GlobalEticketMerchantMaConsumeResponse = ApiResponse<GlobalEticketMerchantMaConsumeData>

export interface GlobalEticketMerchantMaFailsendRequest {
  /** biz type */
  "biz_type": number,
  /** fail reason code */
  "sub_code": string,
  /** order id */
  "outer_id": string,
  /** fail reason desc */
  "sub_msg": string,
}
export interface GlobalEticketMerchantMaFailsendData {
  "resp_body"?: Record<string, unknown>,
  "ret_code"?: string,
  "ret_msg"?: string,
}
export type GlobalEticketMerchantMaFailsendResponse = ApiResponse<GlobalEticketMerchantMaFailsendData>

export interface GlobalEticketMerchantMaQueryRequest {
  /** code */
  "code": string,
  /** sellerId */
  "seller_id": number,
  /** storeId */
  "store_id"?: number,
}
export interface GlobalEticketMerchantMaQueryData {
  "resp_body"?: {
  "certificate"?: {
    "locked_num"?: number,
    "biz_type"?: number,
    "certificate_code"?: string,
    "initial_num"?: number,
    "available_num"?: number,
    "consume_status"?: string,
    "code_status"?: string,
    "qr_code_url"?: string,
    "outer_id"?: string,
    "start_time"?: number,
    "end_time"?: number,
    "used_num"?: number,
    "attributes"?: Record<string, unknown>,
  },
  },
  "ret_code"?: string,
  "ret_msg"?: string,
}
export type GlobalEticketMerchantMaQueryResponse = ApiResponse<GlobalEticketMerchantMaQueryData>

export interface GlobalEticketMerchantMaQueryTbMaRequest {
  /** code */
  "code": string,
}
export interface GlobalEticketMerchantMaQueryTbMaData {
  "resp_body"?: Record<string, unknown>,
  "ret_code"?: string,
  "ret_msg"?: string,
}
export type GlobalEticketMerchantMaQueryTbMaResponse = ApiResponse<GlobalEticketMerchantMaQueryTbMaData>

export interface GlobalEticketMerchantMaSendRequest {
  /** biz type */
  "biz_type": number,
  /** ma list */
  "isv_ma_list": Array<Record<string, unknown>>,
  /** code */
  "isv_ma_list.code": string,
  /** available num */
  "isv_ma_list.num": number,
  /** order id */
  "outer_id": string,
}
export interface GlobalEticketMerchantMaSendData {
  "resp_body"?: Record<string, unknown>,
  "ret_code"?: string,
  "ret_msg"?: string,
}
export type GlobalEticketMerchantMaSendResponse = ApiResponse<GlobalEticketMerchantMaSendData>

export interface RedeemOrderItemsRequest {
  /** biz type */
  "biz_type": number,
  /** certificate code */
  "code": string,
  /** outer id */
  "outer_id": string,
  /** consume serial number */
  "serial_num": string,
  /** consume num */
  "consume_num": number,
  /** store id */
  "store_id"?: string,
  /** pos id */
  "pos_id"?: string,
}
export interface RedeemOrderItemsData {
  "data"?: {
  "outer_id"?: string,
  "serial_num"?: string,
  "left_num"?: number,
  },
}
export type RedeemOrderItemsResponse = ApiResponse<RedeemOrderItemsData>


export class LazadaETicketsAPIApi {
  constructor(private client: LazadaClient) {}

  /**
   * GetOrderItemsFromBarCode
   * /eticket/code/query (GET)
   */
  async getOrderItemsFromBarCode(params: GetOrderItemsFromBarCodeRequest, opts?: LazadaRequestOptions): Promise<GetOrderItemsFromBarCodeResponse> {
    return this.client.request({"method":"GET","path":"/eticket/code/query","params":["code"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GlobalEticketMerchantMaAvailable
   * /eticket/ma/available (GET)
   */
  async globalEticketMerchantMaAvailable(params: GlobalEticketMerchantMaAvailableRequest, opts?: LazadaRequestOptions): Promise<GlobalEticketMerchantMaAvailableResponse> {
    return this.client.request({"method":"GET","path":"/eticket/ma/available","params":["biz_type","code","serial_num","pos_id","outer_id","consume_num","consume_store_id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GlobalEticketMerchantMaConsume
   * /eticket/ma/consume (POST)
   */
  async globalEticketMerchantMaConsume(params: GlobalEticketMerchantMaConsumeRequest, opts?: LazadaRequestOptions): Promise<GlobalEticketMerchantMaConsumeResponse> {
    return this.client.request({"method":"POST","path":"/eticket/ma/consume","params":["biz_type","serial_num","pos_id","outer_id","consume_num","code","consume_store_id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GlobalEticketMerchantMaFailsend
   * /eticket/ma/failsend (POST)
   */
  async globalEticketMerchantMaFailsend(params: GlobalEticketMerchantMaFailsendRequest, opts?: LazadaRequestOptions): Promise<GlobalEticketMerchantMaFailsendResponse> {
    return this.client.request({"method":"POST","path":"/eticket/ma/failsend","params":["biz_type","sub_code","outer_id","sub_msg"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GlobalEticketMerchantMaQuery
   * /eticket/ma/query (GET)
   */
  async globalEticketMerchantMaQuery(params: GlobalEticketMerchantMaQueryRequest, opts?: LazadaRequestOptions): Promise<GlobalEticketMerchantMaQueryResponse> {
    return this.client.request({"method":"GET","path":"/eticket/ma/query","params":["code","seller_id","store_id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GlobalEticketMerchantMaQueryTbMa
   * /eticket/ma/queryTbMa (GET)
   */
  async globalEticketMerchantMaQueryTbMa(params: GlobalEticketMerchantMaQueryTbMaRequest, opts?: LazadaRequestOptions): Promise<GlobalEticketMerchantMaQueryTbMaResponse> {
    return this.client.request({"method":"GET","path":"/eticket/ma/queryTbMa","params":["code"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GlobalEticketMerchantMaSend
   * /eticket/ma/send (GET)
   */
  async globalEticketMerchantMaSend(params: GlobalEticketMerchantMaSendRequest, opts?: LazadaRequestOptions): Promise<GlobalEticketMerchantMaSendResponse> {
    return this.client.request({"method":"GET","path":"/eticket/ma/send","params":["biz_type","isv_ma_list","isv_ma_list.code","isv_ma_list.num","outer_id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * RedeemOrderItems
   * /eticket/code/consume (GET)
   */
  async redeemOrderItems(params: RedeemOrderItemsRequest, opts?: LazadaRequestOptions): Promise<RedeemOrderItemsResponse> {
    return this.client.request({"method":"GET","path":"/eticket/code/consume","params":["biz_type","code","outer_id","serial_num","consume_num","store_id","pos_id"]}, params as unknown as Record<string, unknown>, opts)
  }
}
