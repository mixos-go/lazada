// AUTO-GENERATED from Lazada reference docs (references/api/Finance API).
// Do not edit by hand; run `npm run generate` in sdk/.

import { LazadaClient } from '../../client'
import { ApiResponse, LazadaRequestOptions } from '../../types'

export interface GetPayoutStatusRequest {
  /** Filter statements created after the provided date. Mandatory. */
  "created_after": string,
}
export interface GetPayoutStatusData {
  "data"?: Array<{
  "closing_balance"?: string,
  "guarantee_deposit"?: string,
  "payout"?: string,
  "paid"?: string,
  "statement_number"?: string,
  "created_at"?: string,
  "updated_at"?: string,
  "opening_balance"?: string,
  "item_revenue"?: string,
  "shipment_fee"?: string,
  "shipment_fee_credit"?: string,
  "other_revenue_total"?: string,
  "fees_total"?: string,
  "subtotal1"?: string,
  "refunds"?: string,
  "fees_on_refunds_total"?: string,
  "subtotal2"?: string,
  }>,
}
export type GetPayoutStatusResponse = ApiResponse<GetPayoutStatusData>

export interface QueryAccountTransactionsRequest {
  /** transaction type,Enumeration values for(Deposit,Withdrawal,Payment,null) */
  "transaction_type"?: string,
  /** sub transaction type,Enumeration values for(Settlement,Failed Payment,Returned Payment,Auto Withdrawal,Manual Withdrawal,Sponsored Solutions Top-up,null) */
  "sub_transaction_type"?: string,
  /** transaction number */
  "transaction_number"?: string,
  /** page size */
  "page_size": number,
  /** start time,format:yyyyMMdd */
  "start_time": string,
  /** start time,format:yyyyMMdd */
  "end_time": string,
  /** page number */
  "page_num": number,
}
export interface QueryAccountTransactionsData {
  "msg"?: string,
  "data"?: {
  "page_info"?: {
    "page_num"?: number,
    "page_size"?: number,
    "total_page"?: number,
    "total_count"?: number,
  },
  "transactions"?: Array<{
    "pmt_reference"?: string,
    "transaction_number"?: string,
    "transaction_time"?: string,
    "type"?: string,
    "sub_type"?: string,
    "payee_account"?: {
      "account"?: string,
      "description"?: string,
    },
    "amount"?: string,
    "currency"?: string,
    "remarks"?: string,
    "tracking_list"?: Array<{
      "name"?: string,
      "status"?: string,
      "update_time"?: string,
      "remark"?: string,
    }>,
  }>,
  },
  "success"?: boolean,
  "error_code"?: string,
}
export type QueryAccountTransactionsResponse = ApiResponse<QueryAccountTransactionsData>

export interface QueryLogisticsFeeDetailRequest {
  /** identity of seller which should not be blank */
  "seller_id": string,
  /** type of request which is used to distinguish different systems(e.g. OPEN_API) */
  "request_type": string,
  /** identity of trade order */
  "trade_order_id"?: string,
  /** item identity of trade order */
  "trade_order_line_id"?: string,
  /** type of logistics fee */
  "fee_type"?: string,
  /** corresponding settlement scenario of request(e.g. LAZADA, LAZADA_3PV, default biz flow type is LAZADA) */
  "biz_flow_type"?: string,
  /** timestamp of the time that bill started */
  "bill_start_time"?: number,
  /** timestamp of the time that bill ended */
  "bill_end_time"?: number,
  /** number of page which default 1 */
  "page_no"?: number,
  /** size of page which default 20 */
  "page_size"?: number,
  /** total records that page included */
  "total_records"?: number,
}
export interface QueryLogisticsFeeDetailData {
  "data"?: Array<{
  "statement_period"?: string,
  "amount"?: Record<string, unknown>,
  "tax_in_amount"?: Record<string, unknown>,
  "trade_order_id"?: string,
  "seller_short_code"?: string,
  "seller_id"?: string,
  "fee_code"?: string,
  "fee_name"?: string,
  "fee_creation_date"?: {
    "offset"?: {
      "total_seconds"?: number,
      "rules"?: {
        "fixed_offset"?: boolean,
        "transition_rules"?: Array<Record<string, unknown>>,
        "transitions"?: Array<Record<string, unknown>>,
      },
      "id"?: string,
    },
    "year"?: number,
    "day_of_year"?: number,
    "nano"?: number,
    "chronology"?: {
      "calendar_type"?: string,
      "id"?: string,
    },
    "minute"?: number,
    "second"?: number,
    "day_of_week"?: string,
    "month"?: string,
    "hour"?: number,
    "zone"?: {
      "rules"?: {
        "fixed_offset"?: boolean,
        "transition_rules"?: Array<Record<string, unknown>>,
        "transitions"?: Array<Record<string, unknown>>,
      },
      "id"?: string,
    },
    "day_of_month"?: number,
    "month_value"?: number,
  },
  "order_info"?: {
    "order_item_status"?: string,
    "order_creation_date"?: {
      "offset"?: string,
      "year"?: number,
      "day_of_year"?: number,
      "nano"?: number,
      "chronology"?: string,
      "minute"?: number,
      "second"?: number,
      "day_of_week"?: string,
      "month"?: string,
      "hour"?: number,
      "zone"?: {
        "rules"?: {
          "fixed_offset"?: boolean,
          "transition_rules"?: Array<Record<string, unknown>>,
          "transitions"?: Array<Record<string, unknown>>,
        },
        "id"?: string,
      },
      "day_of_month"?: number,
      "month_value"?: number,
    },
  },
  "statement_id"?: string,
  "tenant_id"?: string,
  "currency"?: string,
  "package_info"?: {
    "billing_date"?: {
      "offset"?: string,
      "year"?: number,
      "day_of_year"?: number,
      "nano"?: number,
      "chronology"?: string,
      "minute"?: number,
      "second"?: number,
      "day_of_week"?: string,
      "month"?: string,
      "hour"?: number,
      "zone"?: {
        "rules"?: {
          "fixed_offset"?: boolean,
          "transition_rules"?: Array<Record<string, unknown>>,
          "transitions"?: Array<Record<string, unknown>>,
        },
        "id"?: string,
      },
      "day_of_month"?: number,
      "month_value"?: number,
    },
    "destination_address"?: string,
    "origin_address"?: string,
    "package_chargeable_weight"?: string,
    "delivery_date"?: {
      "offset"?: string,
      "year"?: number,
      "day_of_year"?: number,
      "nano"?: number,
      "chronology"?: string,
      "minute"?: number,
      "second"?: number,
      "day_of_week"?: string,
      "month"?: string,
      "hour"?: number,
      "zone"?: {
        "rules"?: {
          "fixed_offset"?: boolean,
          "transition_rules"?: Array<Record<string, unknown>>,
          "transitions"?: Array<Record<string, unknown>>,
        },
        "id"?: string,
      },
      "day_of_month"?: number,
      "month_value"?: number,
    },
    "tracking_number"?: string,
  },
  "sku_info"?: {
    "lazada_sku"?: string,
    "item_details"?: string,
    "seller_sku"?: string,
  },
  "trade_order_line_id"?: string,
  }>,
  "success"?: boolean,
  "remark"?: string,
}
export type QueryLogisticsFeeDetailResponse = ApiResponse<QueryLogisticsFeeDetailData>

export interface QueryTransactionDetailsRequest {
  /** Number of transaction lines to skip at the beginning of the list. */
  "offset"?: string,
  /** Transaction type ID. */
  "trans_type"?: string,
  /** Order ID. */
  "trade_order_id"?: string,
  /** Number of lines of transactions to be extracted. The supported maximum number is 500. */
  "limit"?: string,
  /** Starting date when transactions need to be extracted. */
  "start_time": string,
  /** Ending date when transactions need to be extracted. */
  "end_time": string,
  /** Order Item ID. */
  "trade_order_line_id"?: string,
}
export interface QueryTransactionDetailsData {
  "data"?: Array<{
  "fee_type"?: string,
  "details"?: string,
  "seller_sku"?: string,
  "lazada_sku"?: string,
  "amount"?: string,
  "VAT_in_amount"?: string,
  "WHT_amount"?: string,
  "WHT_included_in_amount"?: string,
  "statement"?: string,
  "paid_status"?: string,
  "order_no"?: string,
  "orderItem_no"?: string,
  "orderItem_status"?: string,
  "shipping_provider"?: string,
  "shipping_speed"?: string,
  "shipment_type"?: string,
  "reference"?: string,
  "comment"?: string,
  "payment_ref_id"?: string,
  "fee_name"?: string,
  "transaction_date"?: string,
  "transaction_type"?: string,
  "transaction_number"?: string,
  }>,
}
export type QueryTransactionDetailsResponse = ApiResponse<QueryTransactionDetailsData>


export class LazadaFinanceAPIApi {
  constructor(private client: LazadaClient) {}

  /**
   * GetPayoutStatus
   * /finance/payout/status/get (GET)
   */
  async getPayoutStatus(params: GetPayoutStatusRequest, opts?: LazadaRequestOptions): Promise<GetPayoutStatusResponse> {
    return this.client.request({"method":"GET","path":"/finance/payout/status/get","params":["created_after"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * QueryAccountTransactions
   * /finance/transaction/accountTransactions/query (POST)
   */
  async queryAccountTransactions(params: QueryAccountTransactionsRequest, opts?: LazadaRequestOptions): Promise<QueryAccountTransactionsResponse> {
    return this.client.request({"method":"POST","path":"/finance/transaction/accountTransactions/query","params":["transaction_type","sub_transaction_type","transaction_number","page_size","start_time","end_time","page_num"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * QueryLogisticsFeeDetail
   * /lbs/slb/queryLogisticsFeeDetail (GET)
   */
  async queryLogisticsFeeDetail(params: QueryLogisticsFeeDetailRequest, opts?: LazadaRequestOptions): Promise<QueryLogisticsFeeDetailResponse> {
    return this.client.request({"method":"GET","path":"/lbs/slb/queryLogisticsFeeDetail","params":["seller_id","request_type","trade_order_id","trade_order_line_id","fee_type","biz_flow_type","bill_start_time","bill_end_time","page_no","page_size","total_records"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * QueryTransactionDetails
   * /finance/transaction/details/get (GET)
   */
  async queryTransactionDetails(params: QueryTransactionDetailsRequest, opts?: LazadaRequestOptions): Promise<QueryTransactionDetailsResponse> {
    return this.client.request({"method":"GET","path":"/finance/transaction/details/get","params":["offset","trans_type","trade_order_id","limit","start_time","end_time","trade_order_line_id"]}, params as unknown as Record<string, unknown>, opts)
  }
}
