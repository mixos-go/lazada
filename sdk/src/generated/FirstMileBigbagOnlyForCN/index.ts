// AUTO-GENERATED from Lazada reference docs (references/api/FirstMile Bigbag(only for CN)).
// Do not edit by hand; run `npm run generate` in sdk/.

import { LazadaClient } from '../../client'
import { ApiResponse, LazadaRequestOptions } from '../../types'

export interface GetChannelcodeByFirstMileNoRequest {
  /** 首公里面单号 */
  "firstMileNos": Array<string>,
}
export interface GetChannelcodeByFirstMileNoData {
  "result"?: {
  "success"?: boolean,
  "module"?: Array<Record<string, unknown>>,
  "errorCode"?: string,
  "errorMsg"?: string,
  },
}
export type GetChannelcodeByFirstMileNoResponse = ApiResponse<GetChannelcodeByFirstMileNoData>

export interface GetLazadaBigbagPDFLableRequest {
  /** 用户信息 */
  "userInfo": Record<string, unknown>,
  /** ISV用户Id */
  "userInfo.appUserKey": string,
  /** ISV名称，ISV：ISV-ISV英文或拼音名称、商家ERP：SELLER-商家英文或拼音名称 */
  "client": string,
  /** 大包单号，即大包LP号，同handoverContentCode */
  "orderCode"?: string,
  /** 备注 */
  "remark"?: string,
  /** 多语言，默认zh_CN */
  "locale"?: string,
  /** 大包运单号 */
  "trackingNumber"?: string,
}
export interface GetLazadaBigbagPDFLableData {
  "result"?: {
  "data"?: Record<string, unknown>,
  "success"?: boolean,
  "errorCode"?: string,
  "errorMsg"?: string,
  },
}
export type GetLazadaBigbagPDFLableResponse = ApiResponse<GetLazadaBigbagPDFLableData>

export interface LazadaBigbagCancelRequest {
  /** 用户信息 */
  "userInfo": Record<string, unknown>,
  /** ISV用户Id */
  "userInfo.appUserKey": string,
  /** ISV名称，ISV：ISV-ISV英文或拼音名称、商家ERP：SELLER-商家英文或拼音名称 */
  "client": string,
  /** 大包单号，即大包LP号，同handoverContentCode，orderCode、trackingNumber二者选其一 */
  "orderCode"?: string,
  /** 备注 */
  "remark"?: string,
  /** 多语言，默认zh_CN */
  "locale"?: string,
  /** 大包运单号，orderCode、trackingNumber二者选其一 */
  "trackingNumber"?: string,
}
export interface LazadaBigbagCancelData {
  "result"?: {
  "data"?: Record<string, unknown>,
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
  },
}
export type LazadaBigbagCancelResponse = ApiResponse<LazadaBigbagCancelData>

export interface LazadaBigbagCollectionPointsRequest {
  /** 每页N条 */
  "pageSize"?: string,
  /** 当前第N页 */
  "currentPage"?: string,
}
export interface LazadaBigbagCollectionPointsData {
  "result"?: {
  "data"?: {
    "currentPageIndex"?: number,
    "pageTotalNum"?: number,
    "pageSize"?: number,
    "totalCount"?: number,
    "itemList"?: Array<Record<string, unknown>>,
  },
  "success"?: boolean,
  "errorCode"?: string,
  "erroMsg"?: string,
  },
}
export type LazadaBigbagCollectionPointsResponse = ApiResponse<LazadaBigbagCollectionPointsData>

export interface LazadaBigbagCommitRequest {
  /** Lazada开放平台信息 */
  "userInfo": Record<string, unknown>,
  /** Lazada开放平台appUserKey */
  "userInfo.appUserKey": string,
  /** 要创建交接单的小包编码集合，数量上限1000 */
  "orderCodeList": Array<string>,
  /** 重量 */
  "weight": string,
  /** ISV名称，ISV：ISV-ISV英文或拼音名称、商家ERP：SELLER-商家英文或拼音名称 */
  "client": string,
  /** 集货点信息 */
  "collectionInfo"?: Record<string, unknown>,
  /** 集货点编码 */
  "collectionInfo.pickUpCode": string,
  /** 备注 */
  "remark"?: string,
  /** 揽收信息 */
  "pickupInfo": Record<string, unknown>,
  /** 快递公司 */
  "pickupInfo.courierCompany"?: string,
  /** 收件人手机号 */
  "pickupInfo.receiverPhone"?: string,
  /** 揽收地址信息 */
  "pickupInfo.address": Record<string, unknown>,
  /** 国家 */
  "pickupInfo.address.country": string,
  /** 邮编 */
  "pickupInfo.address.zipCode": string,
  /** 市 */
  "pickupInfo.address.city": string,
  /** 省 */
  "pickupInfo.address.province": string,
  /** 街道 */
  "pickupInfo.address.street": string,
  /** 区 */
  "pickupInfo.address.district": string,
  /** 详细地址 */
  "pickupInfo.address.detailAddress": string,
  /** 移动电话, 校验格式：^1(3\ */
  "pickupInfo.phone"?: string,
  /** 揽收联系人名称，必须包含中文字符 */
  "pickupInfo.name": string,
  /** 固定电话，可空，校验格式：(^0[\d]{2,3}-[\d]{7,8}$)\ */
  "pickupInfo.mobile": string,
  /** 邮箱 */
  "pickupInfo.email": string,
  /** 揽收地址ID */
  "pickupInfo.addressId": number,
  /** 多语言，默认zh_CN */
  "locale"?: string,
  /** 重量单位，克:g, 千克:kg，默认g */
  "weightUnit": string,
  /** 类型：cainiao_pickup(菜鸟揽收)、self_post(自寄)、pickup_collection(集货) */
  "type": string,
  /** 商家定义的大包标签号，一般不传，需要将自有大包号作为菜鸟面单号时才传 */
  "sellerTrackingNumber"?: string,
  /** 退件信息 */
  "returnInfo": Record<string, unknown>,
  /** 固定电话，可空，校验格式：(^0[\d]{2,3}-[\d]{7,8}$)\ */
  "returnInfo.phone"?: string,
  /** 退件联系人名称，必须包含中文字符 */
  "returnInfo.name": string,
  /** 手机号 */
  "returnInfo.mobile": string,
  /** 邮箱 */
  "returnInfo.email": string,
  /** 退件地址ID */
  "returnInfo.addressId": number,
  /** 退件方式 1-退回，2-销毁，3-自提 */
  "returnInfo.fmReverseOption"?: string,
  /** 退件地址 */
  "returnInfo.address": Record<string, unknown>,
  /** 省 */
  "returnInfo.address.province": string,
  /** 街道 */
  "returnInfo.address.street": string,
  /** 区 */
  "returnInfo.address.district": string,
  /** 详细地址 */
  "returnInfo.address.detailAddress": string,
  /** 国家 */
  "returnInfo.address.country": string,
  /** 退件地址ID */
  "returnInfo.address.zipCode": string,
  /** 市 */
  "returnInfo.address.city": string,
}
export interface LazadaBigbagCommitData {
  "result"?: {
  "data"?: {
    "handoverOrderId"?: number,
    "handoverContentId"?: number,
    "handoverContentCode"?: string,
  },
  "success"?: boolean,
  "errorCode"?: string,
  "errorMsg"?: string,
  },
}
export type LazadaBigbagCommitResponse = ApiResponse<LazadaBigbagCommitData>

export interface LazadaBigbagUpdateRequest {
  /** 用户信息 */
  "userInfo": Record<string, unknown>,
  /** 由ISV/ERP自定义，用于授权分组 */
  "userInfo.appUserKey": string,
  /** 重量 */
  "weight": number,
  /** 多语言，默认zh_CN */
  "locale"?: string,
  /** 要创建交接单的小包编码集合，数量上限300 */
  "orderCodeList": Array<string>,
  /** ISV名称，ISV：ISV-ISV英文或拼音名称、商家ERP：SELLER-商家英文或拼音名称 */
  "client": string,
  /** 大包单号，即大包LP号，orderCode、trackingNumber二者选其一 */
  "orderCode"?: string,
  /** 大包运单号，orderCode、trackingNumber二者选其一 */
  "trackingNumber"?: string,
  /** 重量单位，克:g, 千克:kg，默认g */
  "weightUnit": string,
}
export interface LazadaBigbagUpdateData {
  "result"?: {
  "data"?: Record<string, unknown>,
  "success"?: boolean,
  "errorCode"?: string,
  "erroMsg"?: string,
  },
}
export type LazadaBigbagUpdateResponse = ApiResponse<LazadaBigbagUpdateData>

export interface LazadaSellerAccountBindRequest {
  /** 用户信息 */
  "userInfo": Record<string, unknown>,
  /** ISV用户Id */
  "userInfo.appUserKey": string,
  /** ISV名称，ISV：ISV-ISV英文或拼音名称、商家ERP：SELLER-商家英文或拼音名称 */
  "client"?: string,
  /** 备注 */
  "remark"?: string,
  /** 授权商家列表，最多一次传50 */
  "sellerList": Array<Record<string, unknown>>,
  /** 国家简码，如：MY, TH, VN, SG, ID, PH */
  "sellerList.country": string,
  /** 商家ID，sellerId与shortCode必填其一 */
  "sellerList.sellerId"?: string,
  /** 商家账号，sellerId与shortCode必填其一。如果使用shortCode，则当前sellerList中的country必须一致 */
  "sellerList.shortCode"?: string,
  /** 商家名称 */
  "sellerList.sellerName"?: string,
  /** 多语言，默认zh_CN */
  "locale"?: string,
}
export interface LazadaSellerAccountBindData {
  "result"?: {
  "data"?: Record<string, unknown>,
  "success"?: boolean,
  "errorCode"?: string,
  "errorMsg"?: string,
  },
}
export type LazadaSellerAccountBindResponse = ApiResponse<LazadaSellerAccountBindData>

export interface QueryAddressInformaitonRequest {
  /** 国家 */
  "country": string,
  /** 邮编 */
  "zipCode"?: string,
  /** 用户信息 */
  "userInfo": Record<string, unknown>,
  /** 由ISV/ERP自定义，用于授权分组 */
  "userInfo.appUserKey": string,
  /** 市 */
  "city": string,
  /** 备注 */
  "remark"?: string,
  /** 多语言，默认zh_CN */
  "locale"?: string,
  /** 省 */
  "province": string,
  /** 街道 */
  "street": string,
  /** 区/县 */
  "district": string,
  /** 详细地址 */
  "detailAddress": string,
  /** ISV名称，ISV：ISV-ISV英文或拼音名称、商家ERP：SELLER-商家英文或拼音名称 */
  "client"?: string,
}
export interface QueryAddressInformaitonData {
  "result"?: {
  "data"?: Record<string, unknown>,
  "success"?: boolean,
  "errorCode"?: string,
  "errorMsg"?: string,
  },
}
export type QueryAddressInformaitonResponse = ApiResponse<QueryAddressInformaitonData>

export interface QueryLazadaBigbagInfoRequest {
  /** 用户信息 */
  "userInfo": Record<string, unknown>,
  /** ISV用户Id */
  "userInfo.appUserKey": string,
  /** ISV名称，ISV：ISV-ISV英文或拼音名称、商家ERP：SELLER-商家英文或拼音名称 */
  "client": string,
  /** 大包单号，即大包LP号，同handoverContentCode，orderCode、trackingNumber二者选其一 */
  "orderCode"?: string,
  /** 备注 */
  "remark"?: string,
  /** 多语言，默认zh_CN */
  "locale"?: string,
  /** 大包运单号，orderCode、trackingNumber二者选其一 */
  "trackingNumber"?: string,
}
export interface QueryLazadaBigbagInfoData {
  "result"?: {
  "data"?: Record<string, unknown>,
  "success"?: boolean,
  "errorCode"?: string,
  "errorMsg"?: string,
  },
}
export type QueryLazadaBigbagInfoResponse = ApiResponse<QueryLazadaBigbagInfoData>


export class LazadaFirstMileBigbagOnlyForCNApi {
  constructor(private client: LazadaClient) {}

  /**
   * GetChannelcodeByFirstMileNo
   * /logistics/cngfc/fulfill/getchannelcode (GET)
   */
  async getChannelcodeByFirstMileNo(params: GetChannelcodeByFirstMileNoRequest, opts?: LazadaRequestOptions): Promise<GetChannelcodeByFirstMileNoResponse> {
    return this.client.request({"method":"GET","path":"/logistics/cngfc/fulfill/getchannelcode","params":["firstMileNos"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetLazadaBigbagPDFLable
   * /logistics/cnpms/bigbag/lable/getPdf (GET)
   */
  async getLazadaBigbagPDFLable(params: GetLazadaBigbagPDFLableRequest, opts?: LazadaRequestOptions): Promise<GetLazadaBigbagPDFLableResponse> {
    return this.client.request({"method":"GET","path":"/logistics/cnpms/bigbag/lable/getPdf","params":["userInfo","userInfo.appUserKey","client","orderCode","remark","locale","trackingNumber"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * LazadaBigbagCancel
   * /logistics/cnpms/bigbag/cancel (GET)
   */
  async lazadaBigbagCancel(params: LazadaBigbagCancelRequest, opts?: LazadaRequestOptions): Promise<LazadaBigbagCancelResponse> {
    return this.client.request({"method":"GET","path":"/logistics/cnpms/bigbag/cancel","params":["userInfo","userInfo.appUserKey","client","orderCode","remark","locale","trackingNumber"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * LazadaBigbagCollectionPoints
   * /logistics/cnpms/bigbag/querycollection (GET)
   */
  async lazadaBigbagCollectionPoints(params: LazadaBigbagCollectionPointsRequest, opts?: LazadaRequestOptions): Promise<LazadaBigbagCollectionPointsResponse> {
    return this.client.request({"method":"GET","path":"/logistics/cnpms/bigbag/querycollection","params":["pageSize","currentPage"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * LazadaBigbagCommit
   * /logistics/cnpms/bigbag/commit (GET)
   */
  async lazadaBigbagCommit(params: LazadaBigbagCommitRequest, opts?: LazadaRequestOptions): Promise<LazadaBigbagCommitResponse> {
    return this.client.request({"method":"GET","path":"/logistics/cnpms/bigbag/commit","params":["userInfo","userInfo.appUserKey","orderCodeList","weight","client","collectionInfo","collectionInfo.pickUpCode","remark","pickupInfo","pickupInfo.courierCompany","pickupInfo.receiverPhone","pickupInfo.address","pickupInfo.address.country","pickupInfo.address.zipCode","pickupInfo.address.city","pickupInfo.address.province","pickupInfo.address.street","pickupInfo.address.district","pickupInfo.address.detailAddress","pickupInfo.phone","pickupInfo.name","pickupInfo.mobile","pickupInfo.email","pickupInfo.addressId","locale","weightUnit","type","sellerTrackingNumber","returnInfo","returnInfo.phone","returnInfo.name","returnInfo.mobile","returnInfo.email","returnInfo.addressId","returnInfo.fmReverseOption","returnInfo.address","returnInfo.address.province","returnInfo.address.street","returnInfo.address.district","returnInfo.address.detailAddress","returnInfo.address.country","returnInfo.address.zipCode","returnInfo.address.city"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * LazadaBigbagUpdate
   * /logistics/cnpms/bigbag/update (GET)
   */
  async lazadaBigbagUpdate(params: LazadaBigbagUpdateRequest, opts?: LazadaRequestOptions): Promise<LazadaBigbagUpdateResponse> {
    return this.client.request({"method":"GET","path":"/logistics/cnpms/bigbag/update","params":["userInfo","userInfo.appUserKey","weight","locale","orderCodeList","client","orderCode","trackingNumber","weightUnit"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * LazadaSellerAccountBind
   * /logistics/cnpms/account/bind (GET)
   */
  async lazadaSellerAccountBind(params: LazadaSellerAccountBindRequest, opts?: LazadaRequestOptions): Promise<LazadaSellerAccountBindResponse> {
    return this.client.request({"method":"GET","path":"/logistics/cnpms/account/bind","params":["userInfo","userInfo.appUserKey","client","remark","sellerList","sellerList.country","sellerList.sellerId","sellerList.shortCode","sellerList.sellerName","locale"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * QueryAddressInformaiton
   * /logistics/cnpms/address/query (GET)
   */
  async queryAddressInformaiton(params: QueryAddressInformaitonRequest, opts?: LazadaRequestOptions): Promise<QueryAddressInformaitonResponse> {
    return this.client.request({"method":"GET","path":"/logistics/cnpms/address/query","params":["country","zipCode","userInfo","userInfo.appUserKey","city","remark","locale","province","street","district","detailAddress","client"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * QueryLazadaBigbagInfo
   * /logistics/cnpms/bigbag/query (GET)
   */
  async queryLazadaBigbagInfo(params: QueryLazadaBigbagInfoRequest, opts?: LazadaRequestOptions): Promise<QueryLazadaBigbagInfoResponse> {
    return this.client.request({"method":"GET","path":"/logistics/cnpms/bigbag/query","params":["userInfo","userInfo.appUserKey","client","orderCode","remark","locale","trackingNumber"]}, params as unknown as Record<string, unknown>, opts)
  }
}
