// AUTO-GENERATED from Lazada reference docs (references/api/Lazada DG API).
// Do not edit by hand; run `npm run generate` in sdk/.

import { LazadaClient } from '../../client'
import { ApiResponse, LazadaRequestOptions } from '../../types'

export interface InstallServiceCallBackRequest {
  /** service provider company orderId */
  "orderNo": string,
  /** LZD orderLineId */
  "thirdOrderNo": string,
  /** type = 1 (mean install sevice finish) type = 2(mean install update). type =3 (mean cancel install service) */
  "type": string,
  /** install service price */
  "servicePrice"?: string,
  /** install service date */
  "serviceDate"?: string,
  /** The installation status of the external company */
  "jobStatus"?: string,
  /** Reasons for success or failure */
  "jobReason"?: string,
  /** extendInfo */
  "extendInfo"?: string,
}
export interface InstallServiceCallBackData {
  "resultCode"?: string,
  "resultMsg"?: string,
  "transactionId"?: string,
  "extendInfo"?: string,
}
export type InstallServiceCallBackResponse = ApiResponse<InstallServiceCallBackData>

export interface InstallServiceCallBackForTestRequest {
  /** service provider company orderId */
  "orderNo": string,
  /** LZD orderLineId */
  "thirdOrderNo": string,
  /** type = 1 (mean install sevice finish) type = 2(mean install update). type =3 (mean cancel install service) */
  "type": string,
  /** install service price */
  "servicePrice"?: string,
  /** install service date */
  "serviceDate"?: string,
  /** The installation status of the external company */
  "jobStatus": string,
  /** Reasons for success or failure */
  "jobReason"?: string,
  /** extendInfo */
  "extendInfo"?: string,
}
export interface InstallServiceCallBackForTestData {
  "resultCode"?: string,
  "resultMsg"?: string,
  "transactionId"?: string,
  "extendInfo"?: string,
}
export type InstallServiceCallBackForTestResponse = ApiResponse<InstallServiceCallBackForTestData>

export interface InstallServiceCallBack2Request {
  /** service provider company orderId */
  "orderNo": string,
  /** LZD orderLineId */
  "thirdOrderNo": string,
  /** type = 1 (mean install sevice finish) type = 2(mean install update). type =3 (mean cancel install service) */
  "type": string,
  /** install service price */
  "servicePrice"?: string,
  /** install service date */
  "serviceDate"?: string,
  /** The installation status of the external company */
  "jobStatus": string,
  /** Reasons for success or failure */
  "jobReason"?: string,
  /** extendInfo */
  "extendInfo"?: string,
}
export interface InstallServiceCallBack2Data {
  "resultCode"?: string,
  "resultMsg"?: string,
  "transactionId"?: string,
  "extendInfo"?: string,
}
export type InstallServiceCallBack2Response = ApiResponse<InstallServiceCallBack2Data>

export interface InuranceNoticationRequest {
  /** Insurance company order number */
  "orderNo": string,
  /** lazada orderId */
  "thirdOrderNo": string,
  /** premium */
  "premium": string,
  /** ePolicy Link */
  "ePolicyLink": string,
  /** Policy No */
  "policyNo": string,
  /** Order Status */
  "underwritingStatus": string,
  /** Order Message */
  "underwritingReason"?: string,
  /** expirationDate */
  "expirationDate": string,
}
export interface InuranceNoticationData {
  "errorCode"?: string,
  "errorMsg"?: string,
  "transactionId"?: string,
  "extendInfo"?: string,
}
export type InuranceNoticationResponse = ApiResponse<InuranceNoticationData>

export interface InuranceNotication2Request {
  /** Insurance company order number */
  "orderNo": string,
  /** lazada orderId */
  "thirdOrderNo": string,
  /** premium */
  "premium": string,
  /** ePolicy Link */
  "ePolicyLink": string,
  /** Policy No */
  "policyNo": string,
  /** Order Status */
  "underwritingStatus": string,
  /** Order Message */
  "underwritingReason"?: string,
}
export interface InuranceNotication2Data {
  "errorCode"?: string,
  "errorMsg"?: string,
  "transactionId"?: string,
  "extendInfo"?: string,
}
export type InuranceNotication2Response = ApiResponse<InuranceNotication2Data>

export interface InuranceNotifyLapseRequest {
  /** 1234 */
  "orderNo": string,
  /** 12344 */
  "thirdOrderNo": string,
  /** 1234 */
  "policyNo": string,
  /** 1234 */
  "lapseTime": string,
  /** enum： expiration: policy expired. end: the customer has used up the sum insured amount, policy end. */
  "lapseType": string,
  /** expire */
  "message"?: string,
}
export interface InuranceNotifyLapseData {
  "transactionId"?: string,
  "extendInfo"?: string,
  "errorCode"?: string,
  "errorMsg"?: string,
}
export type InuranceNotifyLapseResponse = ApiResponse<InuranceNotifyLapseData>

export interface DigitalServiceCdkCodeReceivedRequest {
  /** 淘天主订单号 */
  "tb_order_id": string,
  /** 商品名称 */
  "cdk_name"?: string,
  /** CDK码对象 */
  "cdk_code_items": Array<Record<string, unknown>>,
  /** CDK卡号 */
  "cdk_code_items.cdk_card_no"?: string,
  /** CDK密钥/兑换码 */
  "cdk_code_items.cdk_code_key": string,
  /** 淘天子订单号 */
  "tb_order_line_id": string,
  /** 有效期起始时间，YYYY-MM-DD格式 */
  "valid_from"?: string,
  /** CDK码数量 */
  "cdk_code_number": string,
  /** 有效期结束时间，YYYY-MM-DD格式 */
  "valid_end"?: string,
  /** 使用规则/条款等说明 */
  "terms_use"?: string,
}
export interface DigitalServiceCdkCodeReceivedData {
  "result_code"?: string,
  "result_msg"?: string,
}
export type DigitalServiceCdkCodeReceivedResponse = ApiResponse<DigitalServiceCdkCodeReceivedData>


export class LazadaLazadaDGAPIApi {
  constructor(private client: LazadaClient) {}

  /**
   * InstallServiceCallBack
   * /digital/install/servicecallback (GET)
   */
  async installServiceCallBack(params: InstallServiceCallBackRequest, opts?: LazadaRequestOptions): Promise<InstallServiceCallBackResponse> {
    return this.client.request({"method":"GET","path":"/digital/install/servicecallback","params":["orderNo","thirdOrderNo","type","servicePrice","serviceDate","jobStatus","jobReason","extendInfo"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * InstallServiceCallBackForTest
   * /digital/install/test/servicecallback (GET)
   */
  async installServiceCallBackForTest(params: InstallServiceCallBackForTestRequest, opts?: LazadaRequestOptions): Promise<InstallServiceCallBackForTestResponse> {
    return this.client.request({"method":"GET","path":"/digital/install/test/servicecallback","params":["orderNo","thirdOrderNo","type","servicePrice","serviceDate","jobStatus","jobReason","extendInfo"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * InstallServiceCallBack 2
   * /digital/test/install/servicecallback (GET)
   */
  async installServiceCallBack2(params: InstallServiceCallBack2Request, opts?: LazadaRequestOptions): Promise<InstallServiceCallBack2Response> {
    return this.client.request({"method":"GET","path":"/digital/test/install/servicecallback","params":["orderNo","thirdOrderNo","type","servicePrice","serviceDate","jobStatus","jobReason","extendInfo"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * InuranceNotication
   * /digital/insurance/notification (GET)
   */
  async inuranceNotication(params: InuranceNoticationRequest, opts?: LazadaRequestOptions): Promise<InuranceNoticationResponse> {
    return this.client.request({"method":"GET","path":"/digital/insurance/notification","params":["orderNo","thirdOrderNo","premium","ePolicyLink","policyNo","underwritingStatus","underwritingReason","expirationDate"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * InuranceNotication 2
   * /digital/insurance/test/notificationcopy (GET)
   */
  async inuranceNotication2(params: InuranceNotication2Request, opts?: LazadaRequestOptions): Promise<InuranceNotication2Response> {
    return this.client.request({"method":"GET","path":"/digital/insurance/test/notificationcopy","params":["orderNo","thirdOrderNo","premium","ePolicyLink","policyNo","underwritingStatus","underwritingReason"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * InuranceNotifyLapse
   * /digital/insurance/notificationlapse (GET)
   */
  async inuranceNotifyLapse(params: InuranceNotifyLapseRequest, opts?: LazadaRequestOptions): Promise<InuranceNotifyLapseResponse> {
    return this.client.request({"method":"GET","path":"/digital/insurance/notificationlapse","params":["orderNo","thirdOrderNo","policyNo","lapseTime","lapseType","message"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * digitalServiceCdkCodeReceived
   * /digital/service/cdkCodeReceived (POST)
   */
  async digitalServiceCdkCodeReceived(params: DigitalServiceCdkCodeReceivedRequest, opts?: LazadaRequestOptions): Promise<DigitalServiceCdkCodeReceivedResponse> {
    return this.client.request({"method":"POST","path":"/digital/service/cdkCodeReceived","params":["tb_order_id","cdk_name","cdk_code_items","cdk_code_items.cdk_card_no","cdk_code_items.cdk_code_key","tb_order_line_id","valid_from","cdk_code_number","valid_end","terms_use"]}, params as unknown as Record<string, unknown>, opts)
  }
}
