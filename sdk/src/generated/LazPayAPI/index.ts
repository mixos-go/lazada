// AUTO-GENERATED from Lazada reference docs (references/api/LazPay API).
// Do not edit by hand; run `npm run generate` in sdk/.

import { LazadaClient } from '../../client'
import { ApiResponse, LazadaRequestOptions } from '../../types'

export interface ConsultPaymentRequest {
  /** Indentifier for service */
  "serviceCode": string,
  /** Where is the money to be received, the receivable details, including the user and payment amount information */
  "payFrom": Record<string, unknown>,
  /** Indentifier in merchant system for customer who need to pay */
  "payFrom.custIdMercghost": string,
  /** Amount customer need to pay */
  "payFrom.transAmount": Record<string, unknown>,
  /** 3-letter currency code, refer to ISO 4217 Standard currency alphabetic code */
  "payFrom.transAmount.currency": string,
  /** Amount */
  "payFrom.transAmount.value": string,
  /** Additional Information, json format */
  "payFrom.additionalInfo"?: string,
  /** Details payable, including sellers and amount */
  "payTos"?: Array<Record<string, unknown>>,
  /** Indentifier in lazpay system for customer who need to receipt */
  "payTos.customerId": string,
  /** Amount customer need to receipt */
  "payTos.payToAmount": Record<string, unknown>,
  /** 3-letter currency code, refer to ISO 4217 Standard currency alphabetic code */
  "payTos.payToAmount.currency": string,
  /** Amount */
  "payTos.payToAmount.value": string,
  /** Additional Information, json format */
  "payTos.additionalInfo"?: string,
  /** Multi Orders Information */
  "orderGroup"?: Record<string, unknown>,
  /** Environment info from buyer */
  "envInfo"?: string,
  /** pay simulate when payOptions is not null */
  "payOptions"?: Array<string>,
  /** Additional Info for payment product */
  "productExt"?: string,
  /** Additional Info */
  "additionalInfo"?: string,
}
export interface ConsultPaymentData {
  "responseMessage"?: string,
  "responseCode"?: string,
  "errorCode"?: string,
  "additionalInfo"?: string,
  "payOptions"?: Array<{
  "supportedCurrencies"?: Array<string>,
  "payMethod"?: string,
  "additionalInfo"?: string,
  "payOption"?: string,
  "rank"?: number,
  "payAssetDetails"?: Array<{
    "payAssetType"?: string,
    "card"?: Record<string, unknown>,
    "externalAccount"?: Record<string, unknown>,
    "storeValue"?: Record<string, unknown>,
    "coupon"?: Record<string, unknown>,
    "rebate"?: Record<string, unknown>,
    "bankAccount"?: Record<string, unknown>,
    "discount"?: Record<string, unknown>,
    "additionalInfo"?: string,
  }>,
  "preferred"?: boolean,
  "disableReasonCode"?: string,
  "disableReasonDesc"?: string,
  "amountLimitMap"?: Record<string, unknown>,
  "payOptionInfo"?: Record<string, unknown>,
  "enabled"?: boolean,
  "payCategory"?: string,
  }>,
}
export type ConsultPaymentResponse = ApiResponse<ConsultPaymentData>

export interface CreateSubscriptionToFusionRequest {
  /** Subscription Status */
  "subscriptionStatus": string,
  /** Subscribe Time */
  "subscribeTime"?: number,
  /** Unsubscribe Time */
  "unsubscribeTime"?: number,
  /** Subscribe Source */
  "subscribeSource"?: string,
  /** Unsubscribe Source */
  "unsubscribeSource"?: string,
  /** User Id */
  "userToken": string,
}
export interface CreateSubscriptionToFusionData {
  "subscriptionStatus"?: string,
  "subscribeTime"?: number,
  "unsubscribeTime"?: number,
}
export type CreateSubscriptionToFusionResponse = ApiResponse<CreateSubscriptionToFusionData>

export interface DGUtiityPreCreateOrderRequest {
  /** mini token */
  "miniToken": string,
  /** minapp id */
  "miniappId": string,
  /** partner order id */
  "paymentRequestId": string,
  /** extend message */
  "extendInfo"?: string,
  /** md5 signture */
  "signature"?: string,
  /** price */
  "value": string,
  /** currency */
  "currency": string,
}
export interface DGUtiityPreCreateOrderData {
  "success"?: boolean,
  "resultCode"?: string,
  "resultMsg"?: string,
  "tradeNo"?: string,
}
export type DGUtiityPreCreateOrderResponse = ApiResponse<DGUtiityPreCreateOrderData>

export interface DGUtilityPreGetPaymentStatusRequest {
  /** paymentRequestId */
  "paymentRequestId": string,
  /** miniappId */
  "miniappId": string,
  /** signature */
  "signature": string,
}
export interface DGUtilityPreGetPaymentStatusData {
  "success"?: boolean,
  "resultCode"?: string,
  "resultMsg"?: string,
}
export type DGUtilityPreGetPaymentStatusResponse = ApiResponse<DGUtilityPreGetPaymentStatusData>

export interface DGUtilityPreUpdateFulfillemtStatusRequest {
  /** paymentRequestId */
  "paymentRequestId": string,
  /** miniappId */
  "miniappId": string,
  /** signature */
  "signature": string,
}
export interface DGUtilityPreUpdateFulfillemtStatusData {
  "success"?: boolean,
  "resultCode"?: string,
  "resultMsg"?: string,
}
export type DGUtilityPreUpdateFulfillemtStatusResponse = ApiResponse<DGUtilityPreUpdateFulfillemtStatusData>

export interface DigitalAlterOrderStatusRequest {
  /** Reuqest id. */
  "requestId": string,
  /** Third Party's orderId. */
  "transactionId": number,
  /** Seller id. */
  "sellerId"?: number,
  /** If not null, then will do alarm in DG. */
  "cancelCode"?: number,
  /** Sent with the cancelCode. */
  "cancelMsg"?: string,
  /** Lazada user token. */
  "userToken": string,
  /** Lazada user token. */
  "serviceName": string,
}
export interface DigitalAlterOrderStatusData {
  "traceId"?: string,
  "transactionId"?: number,
  "orderStatus"?: string,
  "paymentStatus"?: string,
  "resultCode"?: number,
}
export type DigitalAlterOrderStatusResponse = ApiResponse<DigitalAlterOrderStatusData>

export interface DigitalCreateOrderRequest {
  /** Request id. */
  "requestId": string,
  /** Item price. */
  "itemPrice": number,
  /** Currency. */
  "currency": string,
  /** Third party's transactionId. */
  "transactionId": number,
  /** Seller id. */
  "sellerId"?: number,
  /** Token for Lazada User. */
  "userToken": string,
  /** Service name. */
  "serviceName": string,
  /** Lazada sku id. */
  "skuId": number,
  /** Lazada item id. */
  "itemId": number,
}
export interface DigitalCreateOrderData {
  "transactionId"?: number,
  "paymentLink"?: string,
  "resultCode"?: number,
  "tradeOrderLineId"?: string,
  "traceId"?: string,
}
export type DigitalCreateOrderResponse = ApiResponse<DigitalCreateOrderData>

export interface DigitalQueryOrderRequest {
  /** Reuqest id. */
  "requestId": string,
  /** Third Party's transactionId. */
  "transactionId": number,
  /** Seller id. */
  "sellerId"?: number,
  /** Service name. */
  "serviceName": string,
  /** Lazada user token. */
  "userToken": string,
}
export interface DigitalQueryOrderData {
  "transactionId"?: number,
  "orderStatus"?: string,
  "paymentStatus"?: string,
  "resultCode"?: number,
  "traceId"?: string,
}
export type DigitalQueryOrderResponse = ApiResponse<DigitalQueryOrderData>

export interface GetSubscriptionToFusionRequest {
  /** User Id */
  "userToken": string,
}
export interface GetSubscriptionToFusionData {
  "subscriptionStatus"?: string,
  "subscribeTime"?: number,
  "unsubscribeTime"?: number,
}
export type GetSubscriptionToFusionResponse = ApiResponse<GetSubscriptionToFusionData>

export interface InsuranceAlterOrderStatusRequest {
  /** Reuqest id. */
  "requestId": string,
  /** Fusion's orderId. */
  "transactionId": number,
  /** Seller id. */
  "sellerId"?: number,
  /** If not null, then will do alarm in DG. */
  "cancelCode"?: number,
  /** Sent with the cancelCode. */
  "cancelMsg"?: string,
  /** Lazada user token. */
  "userToken": string,
  /** Service name. */
  "serviceName": string,
}
export interface InsuranceAlterOrderStatusData {
  "transactionId"?: number,
  "orderStatus"?: string,
  "paymentStatus"?: string,
  "resultCode"?: number,
  "traceId"?: string,
}
export type InsuranceAlterOrderStatusResponse = ApiResponse<InsuranceAlterOrderStatusData>

export interface InsuranceCreateOrderRequest {
  /** Request ID, unique for each request.aRequest ID, unique for each request.Fusion's product ID. */
  "requestId": string,
  /** Fusion's product ID. */
  "productCode": string,
  /** Price that user need to pay. (Totally price) */
  "itemPrice": number,
  /** SST amount. */
  "sstFee": number,
  /** Stamp Duty amont. */
  "stampDuty": number,
  /** Currency Type. */
  "currency": string,
  /** Fusion's order ID. */
  "transactionId": number,
  /** Seller ID. */
  "sellerId"?: number,
  /** Service name. */
  "serviceName": string,
  /** Token for Lazada User. */
  "userToken": string,
  /** Lazada order persit time. */
  "orderExistTime"?: string,
  /** Road tax's product code. */
  "subProductCode"?: string,
  /** Road tax's item price. (Totally price) */
  "subItemPrice"?: string,
  /** Road tax's service fee. */
  "subServiceFee"?: string,
  /** Road tax's transactionId. */
  "subTransactionId"?: string,
  /** Marketplace insurance type. */
  "insuranceType"?: string,
  /** Traffic source. */
  "partnerCode"?: string,
  /** Car plate no. */
  "plateNo"?: string,
  /** planCode */
  "planCode"?: string,
  /** subPlanCode */
  "subPlanCode"?: string,
  /** 流程来源 */
  "flowType"?: string,
}
export interface InsuranceCreateOrderData {
  "tradeOrderLineId"?: string,
  "transactionId"?: number,
  "paymentLink"?: string,
  "resultCode"?: number,
  "traceId"?: string,
  "subTradeOrderLineId"?: string,
  "itemPrice"?: string,
  "subItemPrice"?: string,
}
export type InsuranceCreateOrderResponse = ApiResponse<InsuranceCreateOrderData>

export interface InsuranceGetPromotionsRequest {
  /** 主体信息 */
  "data": string,
  /** userToken */
  "userToken": string,
  /** serviceName */
  "serviceName": string,
}
export interface InsuranceGetPromotionsData {
  "traceId"?: string,
  "data"?: string,
  "resultCode"?: number,
  "resultMessage"?: string,
}
export type InsuranceGetPromotionsResponse = ApiResponse<InsuranceGetPromotionsData>

export interface InsuranceQueryOrderRequest {
  /** Reuqest id. */
  "requestId": string,
  /** Fusion's transactionId. */
  "transactionId": number,
  /** Seller id. */
  "sellerId"?: number,
  /** Service name. */
  "serviceName": string,
  /** Lazada user token. */
  "userToken": string,
}
export interface InsuranceQueryOrderData {
  "transactionId"?: number,
  "orderStatus"?: string,
  "paymentStatus"?: string,
  "resultCode"?: number,
  "traceId"?: string,
}
export type InsuranceQueryOrderResponse = ApiResponse<InsuranceQueryOrderData>

export interface LazadaCFOInvoiceRpaCallbackRequest {
  /** Country */
  "country": string,
  /** Batch ID */
  "batch_id": string,
  /** status */
  "status": string,
}
export interface LazadaCFOInvoiceRpaCallbackData {
  "is_success"?: boolean,
  "res_code"?: string,
  "content"?: string,
  "res_msg"?: string,
}
export type LazadaCFOInvoiceRpaCallbackResponse = ApiResponse<LazadaCFOInvoiceRpaCallbackData>

export interface OpenServiceBalanceQueryRequest {}

export interface OpenServiceBalanceQueryData {
  "date_time"?: number,
  "available_amount"?: string,
  "available_amount_cent"?: number,
  "currency"?: string,
}
export type OpenServiceBalanceQueryResponse = ApiResponse<OpenServiceBalanceQueryData>

export interface OpenServiceKycQueryRequest {
  /** True means need KYC Info photo */
  "need_cert_info"?: boolean,
}
export interface OpenServiceKycQueryData {
  "phone"?: string,
  "prefix"?: string,
  "userId"?: string,
  "birthday"?: string,
  "full_name"?: string,
  "cert_front_image"?: string,
  "cert_type"?: string,
  "full_kyc_status"?: boolean,
  "kyc_jump_url"?: string,
  "extend_info"?: string,
}
export type OpenServiceKycQueryResponse = ApiResponse<OpenServiceKycQueryData>

export interface OpenServiceWithdrawApplyRequest {
  /** ISV withdraw request id */
  "withdraw_request_id": string,
  /** withdrawable feature */
  "withdrawable": boolean,
  /** withdraw amount，precise to two decimal places. */
  "withdraw_amount": string,
  /** LazOp user id */
  "user_id": string,
  /** whether full kyc validation is needed in lazada, default false. */
  "need_verify_full_kyc"?: boolean,
}
export interface OpenServiceWithdrawApplyData {
  "withdraw_request_id"?: string,
  "withdraw_id"?: string,
  "withdraw_amount"?: string,
  "withdrawable"?: string,
  "currency"?: string,
  "partner_deposit"?: string,
}
export type OpenServiceWithdrawApplyResponse = ApiResponse<OpenServiceWithdrawApplyData>

export interface OpenServiceWithdrawQueryRequest {
  /** ISV withdraw request id */
  "withdraw_request_id": string,
}
export interface OpenServiceWithdrawQueryData {
  "withdraw_request_id"?: string,
  "withdraw_id"?: string,
  "withdraw_amount"?: string,
  "withdrawable"?: string,
  "currency"?: string,
  "partner_deposit"?: string,
}
export type OpenServiceWithdrawQueryResponse = ApiResponse<OpenServiceWithdrawQueryData>

export interface ReconciliationRequest {
  /** A date in the format of "yyyy-mm-dd" */
  "date": string,
  /** withdraw */
  "business_type": string,
}
export interface ReconciliationData {
  "res"?: string,
}
export type ReconciliationResponse = ApiResponse<ReconciliationData>

export interface CollectBenefitRequest {
  /** 主体信息 */
  "data": string,
  /** userToken */
  "userToken": string,
  /** serviceName */
  "serviceName": string,
}
export interface CollectBenefitData {
  "trace_id"?: string,
  "resultCode"?: number,
  "resultMessage"?: string,
  "data"?: string,
}
export type CollectBenefitResponse = ApiResponse<CollectBenefitData>

export interface InsuranceRealTimeCDPRequest {
  /** Token for Lazada User. */
  "userToken": string,
  /** business code */
  "bizCode": string,
  /** business type */
  "serviceName": string,
}
export interface InsuranceRealTimeCDPData {
  "success"?: string,
  "resultCode"?: string,
  "resultMessage"?: string,
  "data"?: boolean,
  "redirectUrl"?: string,
}
export type InsuranceRealTimeCDPResponse = ApiResponse<InsuranceRealTimeCDPData>

export interface QueryAddonOrderRequest {
  /** pageNum */
  "pageNum": number,
  /** pageSize */
  "pageSize": number,
  /** userToken */
  "userToken": string,
  /** orderStatus */
  "orderStatus"?: string,
}
export interface QueryAddonOrderData {
  "redirectUrl"?: string,
  "resultCode"?: string,
  "data"?: {
  "total"?: number,
  "totalPages"?: number,
  "pageSize"?: number,
  "orderList"?: Array<{
    "premium"?: string,
    "expireTime"?: number,
    "effectiveTime"?: number,
    "insuranceName"?: string,
    "orderStatus"?: string,
    "policyLink"?: string,
    "paidPremium"?: string,
    "transactionId"?: string,
    "productName"?: string,
    "insuredName"?: string,
    "zoneId"?: string,
    "orderDetailLink"?: string,
  }>,
  "pageNum"?: number,
  "traceId"?: string,
  },
  "success"?: boolean,
  "resultMessage"?: string,
}
export type QueryAddonOrderResponse = ApiResponse<QueryAddonOrderData>

export interface QueryBenefitRequest {
  /** 主体信息 */
  "data": string,
  /** userToken */
  "userToken": string,
  /** serviceName */
  "serviceName": string,
}
export interface QueryBenefitData {
  "trace_id"?: string,
  "resultCode"?: number,
  "resultMessage"?: string,
  "data"?: string,
}
export type QueryBenefitResponse = ApiResponse<QueryBenefitData>

export interface RedeemMpVoucherRequest {
  /** voucherCode */
  "voucherCode": string,
  /** userToken */
  "userToken": string,
}
export interface RedeemMpVoucherData {
  "voucherTemplateId"?: string,
  "traceId"?: string,
  "resultCode"?: string,
  "resultMessage"?: string,
  "brokerName"?: string,
}
export type RedeemMpVoucherResponse = ApiResponse<RedeemMpVoucherData>


export class LazadaLazPayAPIApi {
  constructor(private client: LazadaClient) {}

  /**
   * ConsultPayment
   * /lazadapay/v1/debit/consult_payment (GET)
   */
  async consultPayment(params: ConsultPaymentRequest, opts?: LazadaRequestOptions): Promise<ConsultPaymentResponse> {
    return this.client.request({"method":"GET","path":"/lazadapay/v1/debit/consult_payment","params":["serviceCode","payFrom","payFrom.custIdMercghost","payFrom.transAmount","payFrom.transAmount.currency","payFrom.transAmount.value","payFrom.additionalInfo","payTos","payTos.customerId","payTos.payToAmount","payTos.payToAmount.currency","payTos.payToAmount.value","payTos.additionalInfo","orderGroup","envInfo","payOptions","productExt","additionalInfo"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * CreateSubscriptionToFusion
   * /insurance/subscription/create (POST)
   */
  async createSubscriptionToFusion(params: CreateSubscriptionToFusionRequest, opts?: LazadaRequestOptions): Promise<CreateSubscriptionToFusionResponse> {
    return this.client.request({"method":"POST","path":"/insurance/subscription/create","params":["subscriptionStatus","subscribeTime","unsubscribeTime","subscribeSource","unsubscribeSource","userToken"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * DGUtiityPreCreateOrder
   * /digital/service/createorder (GET)
   */
  async dGUtiityPreCreateOrder(params: DGUtiityPreCreateOrderRequest, opts?: LazadaRequestOptions): Promise<DGUtiityPreCreateOrderResponse> {
    return this.client.request({"method":"GET","path":"/digital/service/createorder","params":["miniToken","miniappId","paymentRequestId","extendInfo","signature","value","currency"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * DGUtilityPreGetPaymentStatus
   * /digital/service/getPaymentStatus (GET)
   */
  async dGUtilityPreGetPaymentStatus(params: DGUtilityPreGetPaymentStatusRequest, opts?: LazadaRequestOptions): Promise<DGUtilityPreGetPaymentStatusResponse> {
    return this.client.request({"method":"GET","path":"/digital/service/getPaymentStatus","params":["paymentRequestId","miniappId","signature"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * DGUtilityPreUpdateFulfillemtStatus
   * /digital/service/updateFulfillemtStatus (GET)
   */
  async dGUtilityPreUpdateFulfillemtStatus(params: DGUtilityPreUpdateFulfillemtStatusRequest, opts?: LazadaRequestOptions): Promise<DGUtilityPreUpdateFulfillemtStatusResponse> {
    return this.client.request({"method":"GET","path":"/digital/service/updateFulfillemtStatus","params":["paymentRequestId","miniappId","signature"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * DigitalAlterOrderStatus
   * /digital/order/alterStatus (GET)
   */
  async digitalAlterOrderStatus(params: DigitalAlterOrderStatusRequest, opts?: LazadaRequestOptions): Promise<DigitalAlterOrderStatusResponse> {
    return this.client.request({"method":"GET","path":"/digital/order/alterStatus","params":["requestId","transactionId","sellerId","cancelCode","cancelMsg","userToken","serviceName"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * DigitalCreateOrder
   * /digital/order/create (GET)
   */
  async digitalCreateOrder(params: DigitalCreateOrderRequest, opts?: LazadaRequestOptions): Promise<DigitalCreateOrderResponse> {
    return this.client.request({"method":"GET","path":"/digital/order/create","params":["requestId","itemPrice","currency","transactionId","sellerId","userToken","serviceName","skuId","itemId"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * DigitalQueryOrder
   * /digital/order/getStatus (GET)
   */
  async digitalQueryOrder(params: DigitalQueryOrderRequest, opts?: LazadaRequestOptions): Promise<DigitalQueryOrderResponse> {
    return this.client.request({"method":"GET","path":"/digital/order/getStatus","params":["requestId","transactionId","sellerId","serviceName","userToken"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetSubscriptionToFusion
   * /insurance/subscription/getSubscription (GET)
   */
  async getSubscriptionToFusion(params: GetSubscriptionToFusionRequest, opts?: LazadaRequestOptions): Promise<GetSubscriptionToFusionResponse> {
    return this.client.request({"method":"GET","path":"/insurance/subscription/getSubscription","params":["userToken"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * InsuranceAlterOrderStatus
   * /insurance/order/alterStatus (GET)
   */
  async insuranceAlterOrderStatus(params: InsuranceAlterOrderStatusRequest, opts?: LazadaRequestOptions): Promise<InsuranceAlterOrderStatusResponse> {
    return this.client.request({"method":"GET","path":"/insurance/order/alterStatus","params":["requestId","transactionId","sellerId","cancelCode","cancelMsg","userToken","serviceName"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * InsuranceCreateOrder
   * /insurance/order/create (GET)
   */
  async insuranceCreateOrder(params: InsuranceCreateOrderRequest, opts?: LazadaRequestOptions): Promise<InsuranceCreateOrderResponse> {
    return this.client.request({"method":"GET","path":"/insurance/order/create","params":["requestId","productCode","itemPrice","sstFee","stampDuty","currency","transactionId","sellerId","serviceName","userToken","orderExistTime","subProductCode","subItemPrice","subServiceFee","subTransactionId","insuranceType","partnerCode","plateNo","planCode","subPlanCode","flowType"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * InsuranceGetPromotions
   * /insurance/promotion/getPromotions (GET)
   */
  async insuranceGetPromotions(params: InsuranceGetPromotionsRequest, opts?: LazadaRequestOptions): Promise<InsuranceGetPromotionsResponse> {
    return this.client.request({"method":"GET","path":"/insurance/promotion/getPromotions","params":["data","userToken","serviceName"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * InsuranceQueryOrder
   * /insurance/order/getStatus (GET)
   */
  async insuranceQueryOrder(params: InsuranceQueryOrderRequest, opts?: LazadaRequestOptions): Promise<InsuranceQueryOrderResponse> {
    return this.client.request({"method":"GET","path":"/insurance/order/getStatus","params":["requestId","transactionId","sellerId","serviceName","userToken"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * LazadaCFOInvoiceRpaCallback
   * /rpa/id/tax/callback (GET)
   */
  async lazadaCFOInvoiceRpaCallback(params: LazadaCFOInvoiceRpaCallbackRequest, opts?: LazadaRequestOptions): Promise<LazadaCFOInvoiceRpaCallbackResponse> {
    return this.client.request({"method":"GET","path":"/rpa/id/tax/callback","params":["country","batch_id","status"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * OpenServiceBalanceQuery
   * /wallet/open/service/balance/query (GET)
   */
  async openServiceBalanceQuery(params: OpenServiceBalanceQueryRequest, opts?: LazadaRequestOptions): Promise<OpenServiceBalanceQueryResponse> {
    return this.client.request({"method":"GET","path":"/wallet/open/service/balance/query","params":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * OpenServiceKycQuery
   * /wallet/open/service/kyc/query (GET)
   */
  async openServiceKycQuery(params: OpenServiceKycQueryRequest, opts?: LazadaRequestOptions): Promise<OpenServiceKycQueryResponse> {
    return this.client.request({"method":"GET","path":"/wallet/open/service/kyc/query","params":["need_cert_info"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * OpenServiceWithdrawApply
   * /wallet/open/service/withdraw (GET)
   */
  async openServiceWithdrawApply(params: OpenServiceWithdrawApplyRequest, opts?: LazadaRequestOptions): Promise<OpenServiceWithdrawApplyResponse> {
    return this.client.request({"method":"GET","path":"/wallet/open/service/withdraw","params":["withdraw_request_id","withdrawable","withdraw_amount","user_id","need_verify_full_kyc"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * OpenServiceWithdrawQuery
   * /wallet/open/service/withdraw/query (GET)
   */
  async openServiceWithdrawQuery(params: OpenServiceWithdrawQueryRequest, opts?: LazadaRequestOptions): Promise<OpenServiceWithdrawQueryResponse> {
    return this.client.request({"method":"GET","path":"/wallet/open/service/withdraw/query","params":["withdraw_request_id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * Reconciliation
   * /wallet/open/service/reconciliation (GET)
   */
  async reconciliation(params: ReconciliationRequest, opts?: LazadaRequestOptions): Promise<ReconciliationResponse> {
    return this.client.request({"method":"GET","path":"/wallet/open/service/reconciliation","params":["date","business_type"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * collectBenefit
   * /insurance/promotion/collectBenefit (GET)
   */
  async collectBenefit(params: CollectBenefitRequest, opts?: LazadaRequestOptions): Promise<CollectBenefitResponse> {
    return this.client.request({"method":"GET","path":"/insurance/promotion/collectBenefit","params":["data","userToken","serviceName"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * insuranceRealTimeCDP
   * /insurance/syncCDP (GET)
   */
  async insuranceRealTimeCDP(params: InsuranceRealTimeCDPRequest, opts?: LazadaRequestOptions): Promise<InsuranceRealTimeCDPResponse> {
    return this.client.request({"method":"GET","path":"/insurance/syncCDP","params":["userToken","bizCode","serviceName"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * queryAddonOrder
   * /insurance/addon/orders/query (GET)
   */
  async queryAddonOrder(params: QueryAddonOrderRequest, opts?: LazadaRequestOptions): Promise<QueryAddonOrderResponse> {
    return this.client.request({"method":"GET","path":"/insurance/addon/orders/query","params":["pageNum","pageSize","userToken","orderStatus"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * queryBenefit
   * /insurance/promotion/queryBenefit (GET)
   */
  async queryBenefit(params: QueryBenefitRequest, opts?: LazadaRequestOptions): Promise<QueryBenefitResponse> {
    return this.client.request({"method":"GET","path":"/insurance/promotion/queryBenefit","params":["data","userToken","serviceName"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * redeemMpVoucher
   * /insurance/voucher/redeemVoucher (GET)
   */
  async redeemMpVoucher(params: RedeemMpVoucherRequest, opts?: LazadaRequestOptions): Promise<RedeemMpVoucherResponse> {
    return this.client.request({"method":"GET","path":"/insurance/voucher/redeemVoucher","params":["voucherCode","userToken"]}, params as unknown as Record<string, unknown>, opts)
  }
}
