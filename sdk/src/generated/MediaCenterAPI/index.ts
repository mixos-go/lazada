// AUTO-GENERATED from Lazada reference docs (references/api/Media Center API).
// Do not edit by hand; run `npm run generate` in sdk/.

import { LazadaClient } from '../../client'
import { ApiResponse, LazadaRequestOptions } from '../../types'

export interface CompleteCreateVideoRequest {
  /** return by calling InitCreateVideo */
  "uploadId": string,
  /** a json string contains e_tag info of each block */
  "parts": string,
  /** the video title */
  "title": string,
  /** the url of the video's cover image */
  "coverUrl": string,
  /** the usage of video, "pro_main_video" represent prodcut main video, "im" represent chat video */
  "videoUsage"?: string,
}
export interface CompleteCreateVideoData {
  "success"?: boolean,
  "result_code"?: string,
  "video_id"?: string,
  "result_message"?: string,
}
export type CompleteCreateVideoResponse = ApiResponse<CompleteCreateVideoData>

export interface GetVideoRequest {
  /** the previous return value by calling CompleteCreateVideo */
  "videoId": number,
}
export interface GetVideoData {
  "cover_url"?: string,
  "video_url"?: string,
  "success"?: boolean,
  "result_code"?: string,
  "state"?: string,
  "title"?: string,
  "result_message"?: string,
}
export type GetVideoResponse = ApiResponse<GetVideoData>

export interface GetVideoQuotaRequest {}

export interface GetVideoQuotaData {
  "capacity_size"?: number,
  "used_size"?: number,
  "success"?: boolean,
  "result_code"?: string,
  "result_message"?: string,
}
export type GetVideoQuotaResponse = ApiResponse<GetVideoQuotaData>

export interface InitCreateVideoRequest {
  /** local file name of vedio file */
  "fileName": string,
  /** video file's bytes, should be less than 100M */
  "fileBytes": number,
}
export interface InitCreateVideoData {
  "upload_id"?: string,
  "success"?: boolean,
  "result_code"?: string,
  "result_message"?: string,
}
export type InitCreateVideoResponse = ApiResponse<InitCreateVideoData>

export interface RemoveVideoRequest {
  /** the previous return value by calling CompleteCreateVideo */
  "videoId": number,
}
export interface RemoveVideoData {
  "success"?: boolean,
  "result_code"?: string,
  "result_message"?: string,
}
export type RemoveVideoResponse = ApiResponse<RemoveVideoData>

export interface UploadVideoBlockRequest {
  /** return by calling InitCreateVideo */
  "uploadId": string,
  /** the current block number, from 0 to N-1 */
  "blockNo": string,
  /** total block count of file */
  "blockCount": string,
  /** binary content of the current block */
  "file": Array<unknown>,
}
export interface UploadVideoBlockData {
  "success"?: boolean,
  "result_code"?: string,
  "e_tag"?: string,
  "result_message"?: string,
}
export type UploadVideoBlockResponse = ApiResponse<UploadVideoBlockData>


export class LazadaMediaCenterAPIApi {
  constructor(private client: LazadaClient) {}

  /**
   * CompleteCreateVideo
   * /media/video/block/commit (POST)
   */
  async completeCreateVideo(params: CompleteCreateVideoRequest, opts?: LazadaRequestOptions): Promise<CompleteCreateVideoResponse> {
    return this.client.request({"method":"POST","path":"/media/video/block/commit","params":["uploadId","parts","title","coverUrl","videoUsage"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetVideo
   * /media/video/get (GET)
   */
  async getVideo(params: GetVideoRequest, opts?: LazadaRequestOptions): Promise<GetVideoResponse> {
    return this.client.request({"method":"GET","path":"/media/video/get","params":["videoId"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetVideoQuota
   * /media/video/quota/get (GET)
   */
  async getVideoQuota(params: GetVideoQuotaRequest, opts?: LazadaRequestOptions): Promise<GetVideoQuotaResponse> {
    return this.client.request({"method":"GET","path":"/media/video/quota/get","params":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * InitCreateVideo
   * /media/video/block/create (POST)
   */
  async initCreateVideo(params: InitCreateVideoRequest, opts?: LazadaRequestOptions): Promise<InitCreateVideoResponse> {
    return this.client.request({"method":"POST","path":"/media/video/block/create","params":["fileName","fileBytes"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * RemoveVideo
   * /media/video/remove (POST)
   */
  async removeVideo(params: RemoveVideoRequest, opts?: LazadaRequestOptions): Promise<RemoveVideoResponse> {
    return this.client.request({"method":"POST","path":"/media/video/remove","params":["videoId"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * UploadVideoBlock
   * /media/video/block/upload (POST)
   */
  async uploadVideoBlock(params: UploadVideoBlockRequest, opts?: LazadaRequestOptions): Promise<UploadVideoBlockResponse> {
    return this.client.request({"method":"POST","path":"/media/video/block/upload","params":["uploadId","blockNo","blockCount","file"]}, params as unknown as Record<string, unknown>, opts)
  }
}
