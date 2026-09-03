// AUTO-GENERATED from Lazada reference docs (references/api/Product Review API).
// Do not edit by hand; run `npm run generate` in sdk/.

import { LazadaClient } from '../../client'
import { ApiResponse, LazadaRequestOptions } from '../../types'

export interface GetHistoryReviewIdListRequest {
  /** Product Item ID */
  "item_id": string,
  /** Order ID */
  "order_id"?: number,
  /** Start Time, timestamp in millisecond, this is the same with "create_time" in the response data of interface (/review/seller/list/v2)；The time range cannot exceed 7 days */
  "start_time": number,
  /** End Time, timestamp in millisecond, this is the same with "create_time" in the response data of interface (/review/seller/list/v2)；The time range cannot exceed 7 days */
  "end_time": number,
  /** The current pageNo, default value = 1, max value = 50 */
  "current": number,
}
export interface GetHistoryReviewIdListData {
  "data"?: {
  "current"?: number,
  "total"?: number,
  "page_size"?: number,
  "id_list"?: Array<number>,
  },
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
}
export type GetHistoryReviewIdListResponse = ApiResponse<GetHistoryReviewIdListData>

export interface GetReviewListByIdListRequest {
  /** id list, maxLength = 10 */
  "id_list": Array<number>,
}
export interface GetReviewListByIdListData {
  "data"?: Array<{
  "review_list"?: Array<{
    "submit_time"?: number,
    "can_reply"?: boolean,
    "product_id"?: number,
    "order_id"?: number,
    "review_videos"?: Array<{
      "video_cover_url"?: string,
      "video_url"?: string,
    }>,
    "review_content"?: string,
    "ratings"?: {
      "logistics_rating"?: number,
      "overall_rating"?: number,
      "seller_rating"?: number,
      "product_rating"?: number,
    },
    "review_type"?: string,
    "id"?: number,
    "review_images"?: Array<string>,
    "seller_reply"?: string,
    "create_time"?: number,
  }>,
  "outdated_reviews"?: Array<number>,
  }>,
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
}
export type GetReviewListByIdListResponse = ApiResponse<GetReviewListByIdListData>

export interface SubmitSellerReplyRequest {
  /** review id that user wants to reply to. Can be obtain from GetProductReviewList */
  "id": number,
  /** reply content in text, only support reply in text.max length = 500 */
  "content": string,
}
export interface SubmitSellerReplyData {
  "data"?: boolean,
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
}
export type SubmitSellerReplyResponse = ApiResponse<SubmitSellerReplyData>


export class LazadaProductReviewAPIApi {
  constructor(private client: LazadaClient) {}

  /**
   * GetHistoryReviewIdList
   * /review/seller/history/list (GET)
   */
  async getHistoryReviewIdList(params: GetHistoryReviewIdListRequest, opts?: LazadaRequestOptions): Promise<GetHistoryReviewIdListResponse> {
    return this.client.request({"method":"GET","path":"/review/seller/history/list","params":["item_id","order_id","start_time","end_time","current"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetReviewListByIdList
   * /review/seller/list/v2 (GET)
   */
  async getReviewListByIdList(params: GetReviewListByIdListRequest, opts?: LazadaRequestOptions): Promise<GetReviewListByIdListResponse> {
    return this.client.request({"method":"GET","path":"/review/seller/list/v2","params":["id_list"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * SubmitSellerReply
   * /review/seller/reply/add (GET)
   */
  async submitSellerReply(params: SubmitSellerReplyRequest, opts?: LazadaRequestOptions): Promise<SubmitSellerReplyResponse> {
    return this.client.request({"method":"GET","path":"/review/seller/reply/add","params":["id","content"]}, params as unknown as Record<string, unknown>, opts)
  }
}
