// AUTO-GENERATED from Lazada reference docs (references/api/Store Decoration API).
// Do not edit by hand; run `npm run generate` in sdk/.

import { LazadaClient } from '../../client'
import { ApiResponse, LazadaRequestOptions } from '../../types'

export interface GetStoreCustomPageRequest {
  /** page */
  "page": string,
  /** size */
  "size": string,
  /** Support keyword search */
  "keyword"?: string,
}
export interface GetStoreCustomPageData {
  "data"?: {
  "result"?: {
    "page_info"?: {
      "total_count"?: string,
      "current_page"?: string,
    },
    "page_list"?: Array<{
      "publish_time"?: string,
      "wireless_end_time"?: string,
      "wireless_page_preview_url"?: string,
      "pc_page_preview_url"?: string,
      "qr_url"?: string,
      "pc_end_time"?: string,
      "timed_publish_time"?: string,
      "relate_page_id"?: number,
      "page_id"?: number,
      "page_name"?: string,
      "path"?: string,
      "client_type"?: string,
      "decorate_page_url"?: string,
      "wireless_page_view_url"?: string,
      "page_view_url"?: string,
      "status_key"?: string,
      "last_edit_time"?: string,
    }>,
  },
  "success"?: boolean,
  "error"?: string,
  "error_message"?: string,
  },
}
export type GetStoreCustomPageResponse = ApiResponse<GetStoreCustomPageData>


export class LazadaStoreDecorationAPIApi {
  constructor(private client: LazadaClient) {}

  /**
   * GetStoreCustomPage
   * /store/custom/page/get (GET)
   */
  async getStoreCustomPage(params: GetStoreCustomPageRequest, opts?: LazadaRequestOptions): Promise<GetStoreCustomPageResponse> {
    return this.client.request({"method":"GET","path":"/store/custom/page/get","params":["page","size","keyword"]}, params as unknown as Record<string, unknown>, opts)
  }
}
