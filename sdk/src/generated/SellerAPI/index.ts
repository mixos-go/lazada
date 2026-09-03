// AUTO-GENERATED from Lazada reference docs (references/api/Seller API).
// Do not edit by hand; run `npm run generate` in sdk/.

import { LazadaClient } from '../../client'
import { ApiResponse, LazadaRequestOptions } from '../../types'

export interface BatchQueryFollowStatusRequest {
  /** buyerId array */
  "buyer_ids": Array<string>,
}
export interface BatchQueryFollowStatusData {
  "result"?: {
  "success"?: boolean,
  "error"?: Record<string, unknown>,
  "result"?: Array<Record<string, unknown>>,
  },
}
export type BatchQueryFollowStatusResponse = ApiResponse<BatchQueryFollowStatusData>

export interface GetPickUpStoreListRequest {}

export interface GetPickUpStoreListData {
  "result"?: {
  "headers"?: Record<string, unknown>,
  "success"?: boolean,
  "model"?: Record<string, unknown>,
  "biz_ext_map"?: Record<string, unknown>,
  "mapping_code"?: string,
  "msg_info"?: string,
  "msg_code"?: string,
  "http_status_code"?: number,
  },
}
export type GetPickUpStoreListResponse = ApiResponse<GetPickUpStoreListData>

export interface GetSellerRequest {}

export interface GetSellerData {
  "data"?: {
  "name_company"?: string,
  "seller_id"?: number,
  "name"?: string,
  "short_code"?: string,
  "logo_url"?: string,
  "email"?: string,
  "cb"?: boolean,
  "location"?: string,
  "status"?: string,
  "verified"?: boolean,
  "marketplaceEaseMode"?: boolean,
  },
}
export type GetSellerResponse = ApiResponse<GetSellerData>

export interface GetSellerMetricsByIdRequest {}

export interface GetSellerMetricsByIdData {
  "data"?: {
  "main_category_name"?: string,
  "seller_id"?: number,
  "response_rate"?: string,
  "response_time"?: string,
  "ship_on_time"?: string,
  "main_category_id"?: number,
  "positive_seller_rating"?: string,
  },
}
export type GetSellerMetricsByIdResponse = ApiResponse<GetSellerMetricsByIdData>

export interface GetSellerPerformanceRequest {
  /** Optional ISO 639-1 standard language code (default: en-US, supported languages: en-US, zh-CN, ms-MY, th-TH, vi-VN, id-ID). */
  "language"?: string,
}
export interface GetSellerPerformanceData {
  "data"?: {
  "seller_id"?: number,
  "main_category_id"?: number,
  "main_category_name"?: string,
  "indicators"?: Array<{
    "type"?: string,
    "name"?: string,
    "tip"?: string,
    "score"?: number,
    "score_format"?: string,
    "formatted_score"?: string,
    "target"?: number,
    "target_format"?: string,
    "formatted_target"?: string,
    "target_respected"?: boolean,
    "action_url"?: string,
  }>,
  },
  "success"?: boolean,
  "error_code"?: string,
}
export type GetSellerPerformanceResponse = ApiResponse<GetSellerPerformanceData>

export interface GetWarehouseBySellerIdRequest {}

export interface GetWarehouseBySellerIdData {
  "result"?: {
  "not_success"?: boolean,
  "success"?: Record<string, unknown>,
  "module"?: Record<string, unknown>,
  "error_code"?: string,
  "repeated"?: boolean,
  "retry"?: boolean,
  },
}
export type GetWarehouseBySellerIdResponse = ApiResponse<GetWarehouseBySellerIdData>

export interface QueryWarehouseDetailInfoBySellerIdRequest {}

export interface QueryWarehouseDetailInfoBySellerIdData {
  "result"?: {
  "not_success"?: boolean,
  "success"?: boolean,
  "module"?: {
    "country"?: string,
    "province"?: string,
    "city"?: string,
    "district"?: string,
    "name"?: string,
    "detail_address"?: string,
    "post_code"?: string,
    "warehouse_code"?: string,
    "default_address"?: boolean,
    "status"?: string,
  },
  "error_code"?: string,
  "repeated"?: boolean,
  "retry"?: boolean,
  "class_name"?: string,
  },
}
export type QueryWarehouseDetailInfoBySellerIdResponse = ApiResponse<QueryWarehouseDetailInfoBySellerIdData>

export interface SellerCenterMsgListRequest {
  /** Set the language for returned messages.(en/vn/id/sg/ph...) */
  "language"?: string,
  /** Paged query. */
  "page"?: string,
  /** Paged query, with a maximum return of one hundred records. */
  "pageSize"?: string,
}
export interface SellerCenterMsgListData {
  "result"?: {
  "success"?: Record<string, unknown>,
  "type"?: string,
  "errorCode"?: string,
  "error"?: string,
  "data"?: Array<{
    "dataSource"?: Array<{
      "id"?: string,
      "time"?: string,
      "message_content"?: {
        "title"?: string,
        "description"?: string,
        "categoryName"?: string,
        "picture"?: string,
        "webLink"?: string,
        "appLink"?: string,
      },
    }>,
    "pageInfo"?: {
      "current"?: number,
      "pageSize"?: number,
      "total"?: number,
    },
  }>,
  },
}
export type SellerCenterMsgListResponse = ApiResponse<SellerCenterMsgListData>

export interface SellerPolicyFetchRequest {
  /** locale */
  "locale": string,
}
export interface SellerPolicyFetchData {
  "success"?: string,
  "data"?: string,
}
export type SellerPolicyFetchResponse = ApiResponse<SellerPolicyFetchData>

export interface SynchronizeSellerItemArConfigRequest {
  /** site Id */
  "siteId": string,
  /** ar config isv */
  "source": string,
  /** uid */
  "uid": string,
  /** syn sku ar config info */
  "contents": string,
  /** synDate */
  "synDate": string,
  /** business */
  "business"?: string,
}
export interface SynchronizeSellerItemArConfigData {
  "success"?: boolean,
  "errorCode"?: string,
  "model"?: {
  "uid"?: string,
  },
  "errorMsg"?: string,
}
export type SynchronizeSellerItemArConfigResponse = ApiResponse<SynchronizeSellerItemArConfigData>

export interface GetCountryInfoRequest {
  /** scence description */
  "type": string,
  /** seller register country */
  "seller_country"?: string,
}
export interface GetCountryInfoData {
  "data"?: Array<{
  "label"?: string,
  "value"?: string,
  }>,
  "success"?: string,
}
export type GetCountryInfoResponse = ApiResponse<GetCountryInfoData>

export interface GetSellerRegisterInfoRequest {
  /** * */
  "payload": Array<Record<string, unknown>>,
  /** * */
  "payload.licenseNumber": string,
  /** * */
  "payload.companyName": string,
}
export interface GetSellerRegisterInfoData {
  "data"?: Array<{
  "licenseNumber"?: string,
  "companyName"?: string,
  "baseInfoList"?: Array<{
    "email"?: string,
    "phone"?: string,
    "shopName"?: string,
    "status"?: string,
    "reqNo"?: string,
    "registerCountry"?: string,
  }>,
  }>,
  "success"?: string,
}
export type GetSellerRegisterInfoResponse = ApiResponse<GetSellerRegisterInfoData>

export interface GetSubAddressRequest {
  /** * */
  "location_id": string,
  /** * */
  "level": number,
}
export interface GetSubAddressData {
  "data"?: Array<{
  "label"?: string,
  "value"?: string,
  }>,
  "success"?: boolean,
}
export type GetSubAddressResponse = ApiResponse<GetSubAddressData>

export interface PaymentBindingRequest {
  /** I * */
  "payload": string,
}
export interface PaymentBindingData {
  "data"?: Array<{
  "result"?: boolean,
  "reason"?: string,
  "shortCode"?: string,
  }>,
  "success"?: boolean,
}
export type PaymentBindingResponse = ApiResponse<PaymentBindingData>

export interface QueryBuyboxHuntingInfoRequest {
  /** param */
  "HuntingQueryParam": Record<string, unknown>,
  /** venture */
  "HuntingQueryParam.venture": string,
  /** skuId */
  "HuntingQueryParam.skuId": string,
}
export interface QueryBuyboxHuntingInfoData {
  "result"?: {
  "data"?: {
    "venture"?: string,
    "itemId"?: string,
    "skuId"?: string,
    "isValid"?: string,
    "priceRank"?: string,
  },
  "retSuccess"?: boolean,
  },
}
export type QueryBuyboxHuntingInfoResponse = ApiResponse<QueryBuyboxHuntingInfoData>

export interface SaveSellerWarehouseInfoRequest {
  /** the fixed value is 0 */
  "ownerType": number,
  /** seller id */
  "sellerId": number,
  /** the fixed value is SELLER */
  "warehouseOwnerType": string,
  /** address info */
  "warehouseContactDTO": Record<string, unknown>,
  /** phone */
  "warehouseContactDTO.phoneNumber": string,
  /** email */
  "warehouseContactDTO.email": string,
  /** site id */
  "siteId": string,
  /** address info */
  "warehouseAddressInfoDTO": Record<string, unknown>,
  /** province */
  "warehouseAddressInfoDTO.locationLevel2Label": string,
  /** address detail */
  "warehouseAddressInfoDTO.address": string,
  /** district */
  "warehouseAddressInfoDTO.locationLevel4Label": string,
  /** city */
  "warehouseAddressInfoDTO.locationLevel3Label": string,
  /** postal code */
  "warehouseAddressInfoDTO.postalCode": string,
  /** latitude */
  "warehouseAddressInfoDTO.latitude"?: number,
  /** currencyCode */
  "warehouseAddressInfoDTO.countryIosCode": string,
  /** the fixed value is 0 */
  "warehouseAddressInfoDTO.defaultAddress": number,
  /** longitude */
  "warehouseAddressInfoDTO.longitude"?: number,
  /** the fixed value is 200 */
  "warehouseType": number,
  /** seller id */
  "ownerId": number,
  /** warehouse name */
  "warehouseName": string,
  /** currency code */
  "currencyCode": string,
  /** resourceType - the fixed value is 1. */
  "resourceType": number,
}
export interface SaveSellerWarehouseInfoData {
  "result"?: {
  "not_success"?: boolean,
  "success"?: boolean,
  "module"?: boolean,
  "repeated"?: boolean,
  "retry"?: boolean,
  },
}
export type SaveSellerWarehouseInfoResponse = ApiResponse<SaveSellerWarehouseInfoData>

export interface SellerFieldVerifyRequest {
  /** * */
  "payload": Array<Record<string, unknown>>,
  /** * */
  "payload.countryRegion": string,
  /** * */
  "payload.name": string,
  /** * */
  "payload.value": string,
}
export interface SellerFieldVerifyData {
  "data"?: Array<{
  "err_code"?: string,
  "result"?: string,
  "error_msg"?: string,
  "name"?: string,
  }>,
  "success"?: string,
}
export type SellerFieldVerifyResponse = ApiResponse<SellerFieldVerifyData>


export class LazadaSellerAPIApi {
  constructor(private client: LazadaClient) {}

  /**
   * BatchQueryFollowStatus
   * /shop/follow/status/batch/query (GET)
   */
  async batchQueryFollowStatus(params: BatchQueryFollowStatusRequest, opts?: LazadaRequestOptions): Promise<BatchQueryFollowStatusResponse> {
    return this.client.request({"method":"GET","path":"/shop/follow/status/batch/query","params":["buyer_ids"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetPickUpStoreList
   * /rc/store/list/get (GET)
   */
  async getPickUpStoreList(params: GetPickUpStoreListRequest, opts?: LazadaRequestOptions): Promise<GetPickUpStoreListResponse> {
    return this.client.request({"method":"GET","path":"/rc/store/list/get","params":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetSeller
   * /seller/get (GET)
   */
  async getSeller(params: GetSellerRequest, opts?: LazadaRequestOptions): Promise<GetSellerResponse> {
    return this.client.request({"method":"GET","path":"/seller/get","params":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetSellerMetricsById
   * /seller/metrics/get (GET)
   */
  async getSellerMetricsById(params: GetSellerMetricsByIdRequest, opts?: LazadaRequestOptions): Promise<GetSellerMetricsByIdResponse> {
    return this.client.request({"method":"GET","path":"/seller/metrics/get","params":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetSellerPerformance
   * /seller/performance/get (GET)
   */
  async getSellerPerformance(params: GetSellerPerformanceRequest, opts?: LazadaRequestOptions): Promise<GetSellerPerformanceResponse> {
    return this.client.request({"method":"GET","path":"/seller/performance/get","params":["language"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetWarehouseBySellerId
   * /rc/warehouse/get (GET)
   */
  async getWarehouseBySellerId(params: GetWarehouseBySellerIdRequest, opts?: LazadaRequestOptions): Promise<GetWarehouseBySellerIdResponse> {
    return this.client.request({"method":"GET","path":"/rc/warehouse/get","params":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * QueryWarehouseDetailInfoBySellerId
   * /rc/warehouse/detail/get (GET)
   */
  async queryWarehouseDetailInfoBySellerId(params: QueryWarehouseDetailInfoBySellerIdRequest, opts?: LazadaRequestOptions): Promise<QueryWarehouseDetailInfoBySellerIdResponse> {
    return this.client.request({"method":"GET","path":"/rc/warehouse/detail/get","params":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * SellerCenterMsgList
   * /sellercenter/msg/list (GET)
   */
  async sellerCenterMsgList(params: SellerCenterMsgListRequest, opts?: LazadaRequestOptions): Promise<SellerCenterMsgListResponse> {
    return this.client.request({"method":"GET","path":"/sellercenter/msg/list","params":["language","page","pageSize"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * SellerPolicyFetch
   * /seller/policy/fetch (GET)
   */
  async sellerPolicyFetch(params: SellerPolicyFetchRequest, opts?: LazadaRequestOptions): Promise<SellerPolicyFetchResponse> {
    return this.client.request({"method":"GET","path":"/seller/policy/fetch","params":["locale"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * SynchronizeSellerItemArConfig
   * /seller/ar/config/syn (GET)
   */
  async synchronizeSellerItemArConfig(params: SynchronizeSellerItemArConfigRequest, opts?: LazadaRequestOptions): Promise<SynchronizeSellerItemArConfigResponse> {
    return this.client.request({"method":"GET","path":"/seller/ar/config/syn","params":["siteId","source","uid","contents","synDate","business"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * getCountryInfo
   * /seller/cb/country/get (GET)
   */
  async getCountryInfo(params: GetCountryInfoRequest, opts?: LazadaRequestOptions): Promise<GetCountryInfoResponse> {
    return this.client.request({"method":"GET","path":"/seller/cb/country/get","params":["type","seller_country"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * getSellerRegisterInfo
   * /seller/cb/register/info (GET)
   */
  async getSellerRegisterInfo(params: GetSellerRegisterInfoRequest, opts?: LazadaRequestOptions): Promise<GetSellerRegisterInfoResponse> {
    return this.client.request({"method":"GET","path":"/seller/cb/register/info","params":["payload","payload.licenseNumber","payload.companyName"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * getSubAddress
   * /seller/cb/country/location/get (GET)
   */
  async getSubAddress(params: GetSubAddressRequest, opts?: LazadaRequestOptions): Promise<GetSubAddressResponse> {
    return this.client.request({"method":"GET","path":"/seller/cb/country/location/get","params":["location_id","level"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * paymentBinding
   * /seller/cb/payment/config (GET)
   */
  async paymentBinding(params: PaymentBindingRequest, opts?: LazadaRequestOptions): Promise<PaymentBindingResponse> {
    return this.client.request({"method":"GET","path":"/seller/cb/payment/config","params":["payload"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * queryBuyboxHuntingInfo
   * /hunting/buybox/get (GET)
   */
  async queryBuyboxHuntingInfo(params: QueryBuyboxHuntingInfoRequest, opts?: LazadaRequestOptions): Promise<QueryBuyboxHuntingInfoResponse> {
    return this.client.request({"method":"GET","path":"/hunting/buybox/get","params":["HuntingQueryParam","HuntingQueryParam.venture","HuntingQueryParam.skuId"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * saveSellerWarehouseInfo
   * /rc/sellerWarehouse/saveWarehouseInfo (GET)
   */
  async saveSellerWarehouseInfo(params: SaveSellerWarehouseInfoRequest, opts?: LazadaRequestOptions): Promise<SaveSellerWarehouseInfoResponse> {
    return this.client.request({"method":"GET","path":"/rc/sellerWarehouse/saveWarehouseInfo","params":["ownerType","sellerId","warehouseOwnerType","warehouseContactDTO","warehouseContactDTO.phoneNumber","warehouseContactDTO.email","siteId","warehouseAddressInfoDTO","warehouseAddressInfoDTO.locationLevel2Label","warehouseAddressInfoDTO.address","warehouseAddressInfoDTO.locationLevel4Label","warehouseAddressInfoDTO.locationLevel3Label","warehouseAddressInfoDTO.postalCode","warehouseAddressInfoDTO.latitude","warehouseAddressInfoDTO.countryIosCode","warehouseAddressInfoDTO.defaultAddress","warehouseAddressInfoDTO.longitude","warehouseType","ownerId","warehouseName","currencyCode","resourceType"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * sellerFieldVerify
   * /seller/cb/register/fieldcheck (GET)
   */
  async sellerFieldVerify(params: SellerFieldVerifyRequest, opts?: LazadaRequestOptions): Promise<SellerFieldVerifyResponse> {
    return this.client.request({"method":"GET","path":"/seller/cb/register/fieldcheck","params":["payload","payload.countryRegion","payload.name","payload.value"]}, params as unknown as Record<string, unknown>, opts)
  }
}
