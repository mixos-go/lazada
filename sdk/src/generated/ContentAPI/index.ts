// AUTO-GENERATED from Lazada reference docs (references/api/Content API).
// Do not edit by hand; run `npm run generate` in sdk/.

import { LazadaClient } from '../../client'
import { ApiResponse, LazadaRequestOptions } from '../../types'

export interface CancelTaskRequest {
  /** task_ids */
  "task_ids": Array<string>,
}
export interface CancelTaskData {
  "result"?: {
  "success"?: boolean,
  "result_code"?: string,
  "result_message"?: string,
  "canceled_task_count"?: number,
  },
}
export type CancelTaskResponse = ApiResponse<CancelTaskData>

export interface ChangeFaceRequest {
  /** raw_image_url */
  "raw_image_url": string,
  /** model_code */
  "model_code": string,
  /** batch_size */
  "batch_size"?: number,
  /** ratio */
  "ratio"?: string,
}
export interface ChangeFaceData {
  "result"?: {
  "success"?: boolean,
  "result_code"?: string,
  "result_message"?: string,
  "task_id"?: string,
  },
}
export type ChangeFaceResponse = ApiResponse<ChangeFaceData>

export interface ChangeProductBackgroundRequest {
  /** image url */
  "product_image_url": string,
  /** background code */
  "background_code": string,
  /** batch size */
  "batch_size": number,
  /** ratio */
  "ratio"?: string,
}
export interface ChangeProductBackgroundData {
  "result"?: {
  "success"?: boolean,
  "result_code"?: string,
  "result_message"?: string,
  "task_id"?: string,
  },
}
export type ChangeProductBackgroundResponse = ApiResponse<ChangeProductBackgroundData>

export interface FixHandRequest {
  /** raw_image_url */
  "raw_image_url": string,
  /** batch size */
  "batch_size"?: number,
  /** base_ref */
  "base_ref"?: boolean,
  /** model_reference_image_url */
  "model_reference_image_url": string,
  /** ratio */
  "ratio"?: string,
}
export interface FixHandData {
  "result"?: {
  "success"?: boolean,
  "result_code"?: string,
  "result_message"?: string,
  "task_id"?: string,
  },
}
export type FixHandResponse = ApiResponse<FixHandData>

export interface GetTaskStatusRequest {
  /** taskId */
  "task_id": string,
}
export interface GetTaskStatusData {
  "result"?: {
  "data"?: Record<string, unknown>,
  "success"?: boolean,
  "result_code"?: string,
  "result_message"?: string,
  "fail_message"?: string,
  "status"?: string,
  },
}
export type GetTaskStatusResponse = ApiResponse<GetTaskStatusData>

export interface ProductImageMatchRequest {
  /** match num */
  "match_num": number,
  /** image url */
  "image_url": string,
}
export interface ProductImageMatchData {
  "result"?: {
  "success"?: boolean,
  "result_code"?: string,
  "result_message"?: string,
  "match_image_urls"?: Array<string>,
  },
}
export type ProductImageMatchResponse = ApiResponse<ProductImageMatchData>

export interface TryOnClothRequest {
  /** keep_model */
  "keep_model"?: boolean,
  /** additional_cloth_image_url */
  "additional_cloth_image_url"?: string,
  /** cloth_image_url */
  "cloth_image_url": string,
  /** type */
  "type": string,
  /** batch_size */
  "batch_size"?: number,
  /** model_reference_image_url */
  "model_reference_image_url"?: string,
  /** ratio */
  "ratio"?: string,
}
export interface TryOnClothData {
  "result"?: {
  "success"?: boolean,
  "result_code"?: string,
  "result_message"?: string,
  "task_id"?: string,
  },
}
export type TryOnClothResponse = ApiResponse<TryOnClothData>


export class LazadaContentAPIApi {
  constructor(private client: LazadaClient) {}

  /**
   * cancelTask
   * /content/ai/cancelTask (POST)
   */
  async cancelTask(params: CancelTaskRequest, opts?: LazadaRequestOptions): Promise<CancelTaskResponse> {
    return this.client.request({"method":"POST","path":"/content/ai/cancelTask","params":["task_ids"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * changeFace
   * /content/ai/changeFace (POST)
   */
  async changeFace(params: ChangeFaceRequest, opts?: LazadaRequestOptions): Promise<ChangeFaceResponse> {
    return this.client.request({"method":"POST","path":"/content/ai/changeFace","params":["raw_image_url","model_code","batch_size","ratio"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * changeProductBackground
   * /content/ai/changeProductBackground (POST)
   */
  async changeProductBackground(params: ChangeProductBackgroundRequest, opts?: LazadaRequestOptions): Promise<ChangeProductBackgroundResponse> {
    return this.client.request({"method":"POST","path":"/content/ai/changeProductBackground","params":["product_image_url","background_code","batch_size","ratio"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * fixHand
   * /content/ai/fixHand (POST)
   */
  async fixHand(params: FixHandRequest, opts?: LazadaRequestOptions): Promise<FixHandResponse> {
    return this.client.request({"method":"POST","path":"/content/ai/fixHand","params":["raw_image_url","batch_size","base_ref","model_reference_image_url","ratio"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * getTaskStatus
   * /content/ai/getTaskStatus (GET)
   */
  async getTaskStatus(params: GetTaskStatusRequest, opts?: LazadaRequestOptions): Promise<GetTaskStatusResponse> {
    return this.client.request({"method":"GET","path":"/content/ai/getTaskStatus","params":["task_id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * productImageMatch
   * /content/ai/productImageMatch (GET)
   */
  async productImageMatch(params: ProductImageMatchRequest, opts?: LazadaRequestOptions): Promise<ProductImageMatchResponse> {
    return this.client.request({"method":"GET","path":"/content/ai/productImageMatch","params":["match_num","image_url"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * tryOnCloth
   * /content/ai/tryOnCloth (POST)
   */
  async tryOnCloth(params: TryOnClothRequest, opts?: LazadaRequestOptions): Promise<TryOnClothResponse> {
    return this.client.request({"method":"POST","path":"/content/ai/tryOnCloth","params":["keep_model","additional_cloth_image_url","cloth_image_url","type","batch_size","model_reference_image_url","ratio"]}, params as unknown as Record<string, unknown>, opts)
  }
}
