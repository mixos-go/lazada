// AUTO-GENERATED from Lazada reference docs (references/api/System API).
// Do not edit by hand; run `npm run generate` in sdk/.

import { LazadaClient } from '../../client'
import { ApiResponse, LazadaRequestOptions } from '../../types'

export interface GenerateAccessTokenRequest {
  /** oauth code, get from app callback URL */
  "code": string,
  /** This field is currently invalid, do not use this field please */
  "uuid"?: string,
}
export interface GenerateAccessTokenData {
  "expires_in"?: number,
  "account_id"?: string,
  "country"?: string,
  "country_user_info"?: Array<{
  "country"?: string,
  "seller_id"?: string,
  "user_id"?: string,
  "short_code"?: string,
  }>,
  "account_platform"?: string,
  "access_token"?: string,
  "account"?: string,
  "refresh_expires_in"?: string,
  "refresh_token"?: string,
}
export type GenerateAccessTokenResponse = ApiResponse<GenerateAccessTokenData>

export interface GenerateAccessTokenWithOpenIdRequest {
  /** oauth code, get from app callback URL */
  "code": string,
  /** This field is currently invalid, do not use this field please */
  "uuid"?: string,
}
export interface GenerateAccessTokenWithOpenIdData {
  "expires_in"?: number,
  "account_id"?: string,
  "country"?: string,
  "country_user_info"?: Array<{
  "country"?: string,
  "seller_id"?: string,
  "user_id"?: string,
  "short_code"?: string,
  }>,
  "account_platform"?: string,
  "access_token"?: string,
  "account"?: string,
  "refresh_expires_in"?: string,
  "refresh_token"?: string,
}
export type GenerateAccessTokenWithOpenIdResponse = ApiResponse<GenerateAccessTokenWithOpenIdData>

export interface RefreshAccessTokenRequest {
  /** refresh_token */
  "refresh_token": string,
}
export interface RefreshAccessTokenData {
  "expires_in"?: number,
  "account_id"?: string,
  "country"?: string,
  "country_user_info_list"?: Array<{
  "country"?: string,
  "seller_id"?: string,
  "user_id"?: string,
  "short_code"?: string,
  }>,
  "account_platform"?: string,
  "access_token"?: string,
  "account"?: string,
  "refresh_expires_in"?: number,
  "refresh_token"?: string,
}
export type RefreshAccessTokenResponse = ApiResponse<RefreshAccessTokenData>

export interface StartExportByDatasetRequest {
  /** 222 */
  "oldSystemId"?: string,
  /** true */
  "useNewEngine"?: string,
  /** 1 */
  "appName": string,
  /** 1 */
  "secret": string,
  /** 1 */
  "workId": string,
  /** 1 */
  "datasetId": string,
  /** 1 */
  "fileType": string,
  /** 1 */
  "uploadType": string,
  /** 1 */
  "dispatchUserInfo"?: Array<string>,
}
export interface StartExportByDatasetData {
  "result"?: {
  "returnCode"?: number,
  "returnValue"?: Record<string, unknown>,
  "returnErrorStackTrace"?: string,
  "returnMessage"?: string,
  },
}
export type StartExportByDatasetResponse = ApiResponse<StartExportByDatasetData>


export class LazadaSystemAPIApi {
  constructor(private client: LazadaClient) {}

  /**
   * GenerateAccessToken
   * /auth/token/create (GET)
   */
  async generateAccessToken(params: GenerateAccessTokenRequest, opts?: LazadaRequestOptions): Promise<GenerateAccessTokenResponse> {
    return this.client.request({"method":"GET","path":"/auth/token/create","params":["code","uuid"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GenerateAccessTokenWithOpenId
   * /auth/token/createWithOpenId (GET)
   */
  async generateAccessTokenWithOpenId(params: GenerateAccessTokenWithOpenIdRequest, opts?: LazadaRequestOptions): Promise<GenerateAccessTokenWithOpenIdResponse> {
    return this.client.request({"method":"GET","path":"/auth/token/createWithOpenId","params":["code","uuid"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * RefreshAccessToken
   * /auth/token/refresh (GET)
   */
  async refreshAccessToken(params: RefreshAccessTokenRequest, opts?: LazadaRequestOptions): Promise<RefreshAccessTokenResponse> {
    return this.client.request({"method":"GET","path":"/auth/token/refresh","params":["refresh_token"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * startExportByDataset
   * /fbi/download/startExportByDataset (GET)
   */
  async startExportByDataset(params: StartExportByDatasetRequest, opts?: LazadaRequestOptions): Promise<StartExportByDatasetResponse> {
    return this.client.request({"method":"GET","path":"/fbi/download/startExportByDataset","params":["oldSystemId","useNewEngine","appName","secret","workId","datasetId","fileType","uploadType","dispatchUserInfo"]}, params as unknown as Record<string, unknown>, opts)
  }
}
