// AUTO-GENERATED from Lazada reference docs (references/api/Lazada Wallet Corporate Top-up API).
// Do not edit by hand; run `npm run generate` in sdk/.

import { LazadaClient } from '../../client'
import { ApiResponse, LazadaRequestOptions } from '../../types'

export interface DirectTransferQueryRequest {
  /** ISV transfer order id, length <= 32 */
  "transfer_order_id": string,
}
export interface DirectTransferQueryData {
  "amount"?: string,
  "account_number"?: string,
  "transfer_order_id"?: string,
  "transfer_request_id"?: string,
  "deposit"?: string,
}
export type DirectTransferQueryResponse = ApiResponse<DirectTransferQueryData>

export interface DirectTransferRequest {
  /** Transfer amount，precise to two decimal places. */
  "amount": string,
  /** ISV transfer order id，length <= 32 */
  "transfer_order_id": string,
  /** Phone number or email address，accepted phone number starts with (PH : +639, +638, 08, 09, 638, 639) */
  "account_number": string,
  /** The funds type for transfers. Set true for funds that can be withdrawn and false for funds that cannot be withdrawn. */
  "withdrawable"?: boolean,
}
export interface DirectTransferRequestData {
  "account_number"?: string,
  "transfer_order_id"?: string,
  "transfer_request_id"?: string,
  "amount"?: string,
  "deposit"?: string,
  "withdrawable"?: boolean,
}
export type DirectTransferRequestResponse = ApiResponse<DirectTransferRequestData>

export interface GiftCodeQueryRequest {
  /** The page to query, page should > 0 and < the total pages, default value is 1 if this parameter is null. */
  "page": number,
  /** Transfer order Id on the ISV side, length <= 32 */
  "transfer_order_id": string,
}
export interface GiftCodeQueryData {
  "records"?: Array<string>,
  "total_page"?: number,
  "current_page"?: number,
  "page_size"?: number,
  "transfer_order_id"?: string,
  "total_number"?: string,
  "create_status"?: string,
  "deposit"?: string,
}
export type GiftCodeQueryResponse = ApiResponse<GiftCodeQueryData>

export interface GiftCodeRequest {
  /** The amount of each gift code, precise to two decimal places */
  "amount": string,
  /** The quantity of gift codes to be created */
  "quantity": number,
  /** ISV transfer order id，length <= 32 */
  "transfer_order_id": string,
  /** End timestamp，13 bits */
  "end_timestamp": number,
  /** Start timestamp，13 bits */
  "start_timestamp": number,
}
export interface GiftCodeRequestData {
  "transfer_order_id"?: string,
  "total_number"?: number,
  "create_status"?: string,
  "deposit"?: string,
}
export type GiftCodeRequestResponse = ApiResponse<GiftCodeRequestData>

export interface ReconciliationRequest {
  /** A date in the format of "yyyy-mm-dd" */
  "date": string,
}
export interface ReconciliationData {
  "res"?: string,
}
export type ReconciliationResponse = ApiResponse<ReconciliationData>


export class LazadaLazadaWalletCorporateTopUpAPIApi {
  constructor(private client: LazadaClient) {}

  /**
   * DirectTransferQuery
   * /wallet/transfer/query (GET)
   */
  async directTransferQuery(params: DirectTransferQueryRequest, opts?: LazadaRequestOptions): Promise<DirectTransferQueryResponse> {
    return this.client.request({"method":"GET","path":"/wallet/transfer/query","params":["transfer_order_id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * DirectTransferRequest
   * /wallet/transfer/request (GET)
   */
  async directTransferRequest(params: DirectTransferRequest, opts?: LazadaRequestOptions): Promise<DirectTransferRequestResponse> {
    return this.client.request({"method":"GET","path":"/wallet/transfer/request","params":["amount","transfer_order_id","account_number","withdrawable"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GiftCodeQuery
   * /wallet/giftcode/query (GET)
   */
  async giftCodeQuery(params: GiftCodeQueryRequest, opts?: LazadaRequestOptions): Promise<GiftCodeQueryResponse> {
    return this.client.request({"method":"GET","path":"/wallet/giftcode/query","params":["page","transfer_order_id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GiftCodeRequest
   * /wallet/giftcode/request (GET)
   */
  async giftCodeRequest(params: GiftCodeRequest, opts?: LazadaRequestOptions): Promise<GiftCodeRequestResponse> {
    return this.client.request({"method":"GET","path":"/wallet/giftcode/request","params":["amount","quantity","transfer_order_id","end_timestamp","start_timestamp"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * Reconciliation
   * /wallet/open/reconciliation (GET)
   */
  async reconciliation(params: ReconciliationRequest, opts?: LazadaRequestOptions): Promise<ReconciliationResponse> {
    return this.client.request({"method":"GET","path":"/wallet/open/reconciliation","params":["date"]}, params as unknown as Record<string, unknown>, opts)
  }
}
