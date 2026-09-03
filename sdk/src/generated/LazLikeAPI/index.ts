// AUTO-GENERATED from Lazada reference docs (references/api/LazLike API).
// Do not edit by hand; run `npm run generate` in sdk/.

import { LazadaClient } from '../../client'
import { ApiResponse, LazadaRequestOptions } from '../../types'

export interface MCNQueryTagInfoByNameRequest {
  /** The tag name you want to query, multiple tags are split according to, */
  "tagNames": string,
}
export interface MCNQueryTagInfoByNameData {
  "api_result"?: {
  "success"?: string,
  "resultCode"?: string,
  "resultMessage"?: string,
  "tagDTOList"?: Array<Record<string, unknown>>,
  },
}
export type MCNQueryTagInfoByNameResponse = ApiResponse<MCNQueryTagInfoByNameData>

export interface McnContentCancelSchedulePublishRequest {
  /** Content ID that needs to be canceled scheduled release */
  "contentId": number,
}
export interface McnContentCancelSchedulePublishData {
  "api_result"?: {
  "result"?: boolean,
  "success"?: boolean,
  "errorMessage"?: string,
  "errorCode"?: number,
  },
}
export type McnContentCancelSchedulePublishResponse = ApiResponse<McnContentCancelSchedulePublishData>

export interface McnContentCompleteCreateVideoRequest {
  /** come from the result of McnContentInitCreateVideo */
  "uploadId": string,
  /** a json string contains e_tag info of each block */
  "parts": string,
  /** the video title */
  "title": string,
  /** optional. cover Image of video，return by calling McnContentUploadImage */
  "coverUrl"?: string,
}
export interface McnContentCompleteCreateVideoData {
  "result"?: {
  "videoId"?: number,
  "success"?: boolean,
  "result_code"?: string,
  "result_message"?: string,
  },
}
export type McnContentCompleteCreateVideoResponse = ApiResponse<McnContentCompleteCreateVideoData>

export interface McnContentCreateRequest {
  /** buyer account of kol */
  "kolUserId"?: number,
  /** should be 'video' for video content */
  "contentType": string,
  /** text part */
  "description": string,
  /** image urls splitted by comma */
  "imageList"?: string,
  /** itemId list splitted by comma */
  "itemList"?: string,
  /** return by calling McnContentCompleteCreateVideo */
  "videoId"?: number,
  /** category id */
  "categoryId"?: number,
  /** contents brief tags */
  "tags"?: string,
  /** language of voice */
  "voiceLang": string,
  /** language of subtitle */
  "subtitleLang": string,
  /** language of description */
  "descriptionLang"?: string,
  /** Content release time, if it is to be released immediately, you can not pass it or pass 0. If you want to publish it regularly, pass > a timestamp of the current time, milliseconds and must be an hour. */
  "publishTimeMillis"?: number,
  /** shop account */
  "shopId"?: number,
  /** proxy flag */
  "proxyFlag"?: boolean,
  /** title */
  "title"?: string,
  /** Additional tags that need to be added, such as fashion tags and sale tags */
  "extraTagIds"?: string,
  /** mcn_aigc or mcn_content */
  "channel"?: string,
  /** LazMall or LazLive */
  "bizType"?: string,
}
export interface McnContentCreateData {
  "result"?: {
  "contentId"?: number,
  "success"?: boolean,
  "result_code"?: string,
  "result_message"?: string,
  },
}
export type McnContentCreateResponse = ApiResponse<McnContentCreateData>

export interface McnContentInitCreateVideoRequest {
  /** buyer account of kol */
  "kolUserId": number,
  /** local filename, should be less than 20 chars */
  "fileName": string,
  /** video file's bytes, should be less than 100M */
  "fileBytes": number,
}
export interface McnContentInitCreateVideoData {
  "result"?: {
  "upload_id"?: string,
  "success"?: boolean,
  "result_code"?: string,
  "result_message"?: string,
  },
}
export type McnContentInitCreateVideoResponse = ApiResponse<McnContentInitCreateVideoData>

export interface McnContentListCategoryRequest {}

export interface McnContentListCategoryData {
  "result"?: Array<{
  "categoryList"?: Array<Record<string, unknown>>,
  "success"?: boolean,
  "result_code"?: string,
  "result_message"?: string,
  }>,
}
export type McnContentListCategoryResponse = ApiResponse<McnContentListCategoryData>

export interface McnContentPropertyTagListRequest {}

export interface McnContentPropertyTagListData {
  "success"?: boolean,
  "resultMessage"?: string,
  "resultCode"?: string,
  "tagList"?: Array<Record<string, unknown>>,
}
export type McnContentPropertyTagListResponse = ApiResponse<McnContentPropertyTagListData>

export interface McnContentReplySchedulePublishRequest {
  /** contentId */
  "contentId": number,
  /** Resume scheduled publishing time */
  "publishTimeMillis": number,
}
export interface McnContentReplySchedulePublishData {
  "api_result"?: {
  "result"?: boolean,
  "success"?: boolean,
  "errorMessage"?: string,
  "errorCode"?: number,
  },
}
export type McnContentReplySchedulePublishResponse = ApiResponse<McnContentReplySchedulePublishData>

export interface McnContentUploadImageRequest {
  /** kol user id */
  "kolUserId": number,
  /** file content */
  "image": Array<unknown>,
}
export interface McnContentUploadImageData {
  "result"?: {
  "url"?: string,
  "success"?: boolean,
  "result_code"?: string,
  "result_message"?: string,
  },
}
export type McnContentUploadImageResponse = ApiResponse<McnContentUploadImageData>

export interface McnContentUploadVideoBlockRequest {
  /** upload id */
  "uploadId": string,
  /** block number */
  "blockNo": number,
  /** block count */
  "blockCount": number,
  /** block content */
  "file": Array<unknown>,
}
export interface McnContentUploadVideoBlockData {
  "result"?: {
  "eTag"?: string,
  "success"?: boolean,
  "result_code"?: string,
  "result_message"?: string,
  },
}
export type McnContentUploadVideoBlockResponse = ApiResponse<McnContentUploadVideoBlockData>

export interface McnProductValidatorRequest {
  /** appKey */
  "lazOpAppKey"?: string,
  /** 商品id，多个用英文逗号隔开 */
  "itemIdList": string,
}
export interface McnProductValidatorData {
  "result"?: Array<{
  "normalItemList"?: Array<number>,
  "highRiskItemList"?: Array<number>,
  "success"?: boolean,
  "result_code"?: string,
  "result_message"?: string,
  }>,
}
export type McnProductValidatorResponse = ApiResponse<McnProductValidatorData>

export interface McnSimilarProductSearchRequest {
  /** user id */
  "kolUserId"?: number,
  /** image url list */
  "imageUrlList"?: string,
  /** shop id */
  "shopId"?: number,
}
export interface McnSimilarProductSearchData {
  "productList"?: Array<Record<string, unknown>>,
  "confidentialityStatement"?: string,
  "success"?: boolean,
  "result_code"?: string,
  "result_message"?: string,
}
export type McnSimilarProductSearchResponse = ApiResponse<McnSimilarProductSearchData>

export interface QueryContentReviewRecordsRequest {
  /** 内容id */
  "contentIds": string,
}
export interface QueryContentReviewRecordsData {
  "result"?: {
  "success"?: boolean,
  "resultCode"?: string,
  "resultMessage"?: string,
  "reviewRecords"?: Array<{
    "reviewedType"?: string,
    "reason"?: string,
    "reviewedTime"?: number,
    "contentId"?: number,
    "currentContentBaseState"?: number,
  }>,
  },
}
export type QueryContentReviewRecordsResponse = ApiResponse<QueryContentReviewRecordsData>


export class LazadaLazLikeAPIApi {
  constructor(private client: LazadaClient) {}

  /**
   * MCNQueryTagInfoByName
   * /content/mcn/content/queryTagInfosByName (GET)
   */
  async mCNQueryTagInfoByName(params: MCNQueryTagInfoByNameRequest, opts?: LazadaRequestOptions): Promise<MCNQueryTagInfoByNameResponse> {
    return this.client.request({"method":"GET","path":"/content/mcn/content/queryTagInfosByName","params":["tagNames"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * McnContentCancelSchedulePublish
   * /content/mcn/content/cancelScheduled (POST)
   */
  async mcnContentCancelSchedulePublish(params: McnContentCancelSchedulePublishRequest, opts?: LazadaRequestOptions): Promise<McnContentCancelSchedulePublishResponse> {
    return this.client.request({"method":"POST","path":"/content/mcn/content/cancelScheduled","params":["contentId"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * McnContentCompleteCreateVideo
   * /content/mcn/video/block/commit (POST)
   */
  async mcnContentCompleteCreateVideo(params: McnContentCompleteCreateVideoRequest, opts?: LazadaRequestOptions): Promise<McnContentCompleteCreateVideoResponse> {
    return this.client.request({"method":"POST","path":"/content/mcn/video/block/commit","params":["uploadId","parts","title","coverUrl"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * McnContentCreate
   * /content/mcn/content/create (POST)
   */
  async mcnContentCreate(params: McnContentCreateRequest, opts?: LazadaRequestOptions): Promise<McnContentCreateResponse> {
    return this.client.request({"method":"POST","path":"/content/mcn/content/create","params":["kolUserId","contentType","description","imageList","itemList","videoId","categoryId","tags","voiceLang","subtitleLang","descriptionLang","publishTimeMillis","shopId","proxyFlag","title","extraTagIds","channel","bizType"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * McnContentInitCreateVideo
   * /content/mcn/video/block/create (GET)
   */
  async mcnContentInitCreateVideo(params: McnContentInitCreateVideoRequest, opts?: LazadaRequestOptions): Promise<McnContentInitCreateVideoResponse> {
    return this.client.request({"method":"GET","path":"/content/mcn/video/block/create","params":["kolUserId","fileName","fileBytes"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * McnContentListCategory
   * /content/mcn/category/list (GET)
   */
  async mcnContentListCategory(params: McnContentListCategoryRequest, opts?: LazadaRequestOptions): Promise<McnContentListCategoryResponse> {
    return this.client.request({"method":"GET","path":"/content/mcn/category/list","params":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * McnContentPropertyTagList
   * /content/mcn/property/list (GET)
   */
  async mcnContentPropertyTagList(params: McnContentPropertyTagListRequest, opts?: LazadaRequestOptions): Promise<McnContentPropertyTagListResponse> {
    return this.client.request({"method":"GET","path":"/content/mcn/property/list","params":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * McnContentReplySchedulePublish
   * /content/mcn/content/replySchedulePublish (POST)
   */
  async mcnContentReplySchedulePublish(params: McnContentReplySchedulePublishRequest, opts?: LazadaRequestOptions): Promise<McnContentReplySchedulePublishResponse> {
    return this.client.request({"method":"POST","path":"/content/mcn/content/replySchedulePublish","params":["contentId","publishTimeMillis"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * McnContentUploadImage
   * /content/mcn/image/upload (POST)
   */
  async mcnContentUploadImage(params: McnContentUploadImageRequest, opts?: LazadaRequestOptions): Promise<McnContentUploadImageResponse> {
    return this.client.request({"method":"POST","path":"/content/mcn/image/upload","params":["kolUserId","image"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * McnContentUploadVideoBlock
   * /content/mcn/video/block/upload (POST)
   */
  async mcnContentUploadVideoBlock(params: McnContentUploadVideoBlockRequest, opts?: LazadaRequestOptions): Promise<McnContentUploadVideoBlockResponse> {
    return this.client.request({"method":"POST","path":"/content/mcn/video/block/upload","params":["uploadId","blockNo","blockCount","file"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * McnProductValidator
   * /content/mcn/product/validate (GET)
   */
  async mcnProductValidator(params: McnProductValidatorRequest, opts?: LazadaRequestOptions): Promise<McnProductValidatorResponse> {
    return this.client.request({"method":"GET","path":"/content/mcn/product/validate","params":["lazOpAppKey","itemIdList"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * McnSimilarProductSearch
   * /content/mcn/similar/product/search (GET)
   */
  async mcnSimilarProductSearch(params: McnSimilarProductSearchRequest, opts?: LazadaRequestOptions): Promise<McnSimilarProductSearchResponse> {
    return this.client.request({"method":"GET","path":"/content/mcn/similar/product/search","params":["kolUserId","imageUrlList","shopId"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * queryContentReviewRecords
   * /content/mcn/content/queryReviewRecords (GET)
   */
  async queryContentReviewRecords(params: QueryContentReviewRecordsRequest, opts?: LazadaRequestOptions): Promise<QueryContentReviewRecordsResponse> {
    return this.client.request({"method":"GET","path":"/content/mcn/content/queryReviewRecords","params":["contentIds"]}, params as unknown as Record<string, unknown>, opts)
  }
}
