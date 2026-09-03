// AUTO-GENERATED from Lazada reference docs (references/api/LazLive API).
// Do not edit by hand; run `npm run generate` in sdk/.

import { LazadaClient } from '../../client'
import { ApiResponse, LazadaRequestOptions } from '../../types'

export interface HighlightProductRequest {
  /** Request parameters */
  "highLightRequest": Record<string, unknown>,
  /** item id */
  "highLightRequest.itemId": number,
  /** presenter id */
  "highLightRequest.presenterId": number,
  /** highlight start：HIGHLIGHT_START */
  "highLightRequest.action": string,
}
export interface HighlightProductData {
  "data"?: {
  "success"?: boolean,
  },
}
export type HighlightProductResponse = ApiResponse<HighlightProductData>


export class LazadaLazLiveAPIApi {
  constructor(private client: LazadaClient) {}

  /**
   * HighlightProduct
   * /lazlive/product/highlight (GET)
   */
  async highlightProduct(params: HighlightProductRequest, opts?: LazadaRequestOptions): Promise<HighlightProductResponse> {
    return this.client.request({"method":"GET","path":"/lazlive/product/highlight","params":["highLightRequest","highLightRequest.itemId","highLightRequest.presenterId","highLightRequest.action"]}, params as unknown as Record<string, unknown>, opts)
  }
}
