// AUTO-GENERATED from Lazada reference docs (references/api/Logistics Station API).
// Do not edit by hand; run `npm run generate` in sdk/.

import { LazadaClient } from '../../client'
import { ApiResponse, LazadaRequestOptions } from '../../types'

export interface CageValidationRequest {
  /** Cage number */
  "cageNumber": string,
  /** Station code/ID */
  "stationCode": string,
}
export interface CageValidationData {
  "success"?: boolean,
  "data"?: boolean,
  "errorCode"?: string,
  "errorMsg"?: string,
  "traceId"?: string,
}
export type CageValidationResponse = ApiResponse<CageValidationData>

export interface ConfirmInboundRequest {
  /** Station ID in partner system */
  "stationId": string,
  /** Cage number. If cage number is present, it will be validated. In case missing cage number, the system will choose default cage number */
  "cageNumber"?: string,
  /** List of tracking number */
  "trackingNumbers": Array<string>,
  /** Accept values: SELLER_DROPOFF, CUSTOMER_DROPOFF (Customer return), CUSTOMER_COLLECTION (Collection point) */
  "serviceType": string,
}
export interface ConfirmInboundData {
  "success"?: boolean,
  "data"?: boolean,
  "errorCode"?: string,
  "errorMsg"?: string,
  "traceId"?: string,
}
export type ConfirmInboundResponse = ApiResponse<ConfirmInboundData>

export interface ConfirmParcelCollectionRequest {
  /** Station ID in partner system */
  "stationId": string,
  /** Tracking number of parcel */
  "trackingNumber": string,
  /** The parcel OTP is used for collecting parcel */
  "otp": string,
  /** Accept values: COLLECT, REJECT */
  "action": string,
  /** Reject reason code, required in case REJECT action */
  "rejectCode"?: string,
}
export interface ConfirmParcelCollectionData {
  "success"?: boolean,
  "data"?: boolean,
  "errorCode"?: string,
  "errorMsg"?: string,
  "traceId"?: string,
}
export type ConfirmParcelCollectionResponse = ApiResponse<ConfirmParcelCollectionData>

export interface CreateScannedParcelRequest {
  /** Station ID in partner system */
  "stationId": string,
  /** Cage number. If cage number is present, it will be validated. In case missing cage number, the system will choose default cage number */
  "cageNumber"?: string,
  /** Tracking number of parcel */
  "trackingNumber": string,
  /** Accept values: SELLER_DROPOFF, CUSTOMER_DROPOFF (Customer return), CUSTOMER_COLLECTION (Collection point) */
  "serviceType": string,
}
export interface CreateScannedParcelData {
  "success"?: boolean,
  "data"?: {
  "trackingNumber"?: string,
  "cageNumber"?: string,
  "sellerName"?: string,
  "pickupTplSlug"?: string,
  "createdAt"?: number,
  "lastmileTpl"?: string,
  "warningMessage"?: string,
  "serviceType"?: string,
  },
  "errorCode"?: string,
  "errorMsg"?: string,
  "traceId"?: string,
}
export type CreateScannedParcelResponse = ApiResponse<CreateScannedParcelData>

export interface DeleteScannedParcelRequest {
  /** Station ID in partner system */
  "stationId": string,
  /** List of tracking numbers */
  "trackingNumbers": Array<string>,
  /** Accept values: SELLER_DROPOFF, CUSTOMER_DROPOFF (Customer return), CUSTOMER_COLLECTION (Collection point) */
  "serviceType": string,
}
export interface DeleteScannedParcelData {
  "success"?: boolean,
  "data"?: boolean,
  "errorCode"?: string,
  "errorMsg"?: string,
  "traceId"?: string,
}
export type DeleteScannedParcelResponse = ApiResponse<DeleteScannedParcelData>

export interface DopConfirmInboundRequest {
  /** Station code/ID */
  "stationCode": string,
  /** List scanned parcels */
  "scannedParcels": Array<Record<string, unknown>>,
  /** Cage number */
  "scannedParcels.cageNumber": string,
  /** Tracking number of parcel */
  "scannedParcels.trackingNumber": string,
}
export interface DopConfirmInboundData {
  "success"?: boolean,
  "data"?: string,
  "errorCode"?: string,
  "errorMsg"?: string,
  "traceId"?: string,
}
export type DopConfirmInboundResponse = ApiResponse<DopConfirmInboundData>

export interface DopCreateScannedParcelRequest {
  /** Station code/ID */
  "stationCode": string,
  /** Cage number */
  "cageNumber": string,
  /** Tracking number of parcel */
  "trackingNumber": string,
}
export interface DopCreateScannedParcelData {
  "success"?: boolean,
  "data"?: {
  "trackingNumber"?: string,
  "stationCode"?: string,
  "cageNumber"?: string,
  "sellerName"?: string,
  "pickupTplSlug"?: string,
  "createdAt"?: number,
  },
  "errorCode"?: string,
  "errorMsg"?: string,
  "traceId"?: string,
}
export type DopCreateScannedParcelResponse = ApiResponse<DopCreateScannedParcelData>

export interface DopDeleteScannedParcelRequest {
  /** Station code/ID */
  "stationCode": string,
  /** List scanned tracking number */
  "trackingNumbers": Array<string>,
}
export interface DopDeleteScannedParcelData {
  "success"?: boolean,
  "data"?: string,
  "errorCode"?: string,
  "errorMsg"?: string,
  "traceId"?: string,
}
export type DopDeleteScannedParcelResponse = ApiResponse<DopDeleteScannedParcelData>

export interface DopGetInboundedParcelRequest {
  /** Station code/ID */
  "stationCode": string,
  /** List inbounded tracking number */
  "trackingNumbers": Array<string>,
}
export interface DopGetInboundedParcelData {
  "success"?: boolean,
  "data"?: Array<{
  "trackingNumber"?: string,
  "cageNumber"?: string,
  "status"?: string,
  "inboundedAt"?: number,
  "lostAt"?: number,
  "pickupTplSlug"?: string,
  "outboundedAt"?: number,
  }>,
  "errorCode"?: string,
  "errorMsg"?: string,
  "traceId"?: string,
}
export type DopGetInboundedParcelResponse = ApiResponse<DopGetInboundedParcelData>

export interface DopGetScannedParcelRequest {
  /** Station code/ID */
  "stationCode": string,
  /** Cage number */
  "cageNumber"?: string,
}
export interface DopGetScannedParcelData {
  "success"?: boolean,
  "data"?: Array<{
  "trackingNumber"?: string,
  "stationCode"?: string,
  "cageNumber"?: string,
  "sellerName"?: string,
  "pickupTplSlug"?: string,
  "createdAt"?: number,
  }>,
  "errorCode"?: string,
  "errorMsg"?: string,
  "traceId"?: string,
}
export type DopGetScannedParcelResponse = ApiResponse<DopGetScannedParcelData>

export interface GetCpScheduledPuParcelRequest {
  /** Station ID in partner system */
  "stationId": string,
}
export interface GetCpScheduledPuParcelData {
  "success"?: boolean,
  "data"?: Array<{
  "trackingNumber"?: string,
  "dispatchedAt"?: number,
  }>,
  "errorCode"?: string,
  "errorMsg"?: string,
  "traceId"?: string,
}
export type GetCpScheduledPuParcelResponse = ApiResponse<GetCpScheduledPuParcelData>

export interface GetInboundedParcelRequest {
  /** Station ID in partner system */
  "stationId": string,
  /** List of tracking number */
  "trackingNumbers": Array<string>,
  /** Accept values: SELLER_DROPOFF, CUSTOMER_DROPOFF (Customer return), CUSTOMER_COLLECTION (Collection point) */
  "serviceType": string,
}
export interface GetInboundedParcelData {
  "success"?: boolean,
  "data"?: Array<{
  "trackingNumber"?: string,
  "cageNumber"?: string,
  "pickupTplSlug"?: string,
  "lastmileTpl"?: string,
  "warningMessage"?: string,
  "serviceType"?: string,
  "inboundedAt"?: string,
  "outboundedAt"?: string,
  "lostAt"?: string,
  "status"?: string,
  }>,
  "errorCode"?: string,
  "errorMsg"?: string,
  "traceId"?: string,
}
export type GetInboundedParcelResponse = ApiResponse<GetInboundedParcelData>

export interface GetListAccessStationRequest {}

export interface GetListAccessStationData {
  "success"?: boolean,
  "data"?: Array<{
  "stationName"?: string,
  "stationCode"?: string,
  "active"?: boolean,
  }>,
  "errorCode"?: string,
  "errorMsg"?: string,
  "traceId"?: string,
}
export type GetListAccessStationResponse = ApiResponse<GetListAccessStationData>

export interface GetMetaDataRequest {}

export interface GetMetaData {
  "success"?: boolean,
  "data"?: Array<{
  "rejectReasons"?: Array<{
    "rejectCode"?: string,
    "text"?: string,
  }>,
  }>,
  "errorCode"?: string,
  "errorMsg"?: string,
  "traceId"?: string,
}
export type GetMetaDataResponse = ApiResponse<GetMetaData>

export interface GetScannedParcelRequest {
  /** Cage number */
  "cageNumber"?: string,
  /** Accept values: SELLER_DROPOFF, CUSTOMER_DROPOFF (Customer return), CUSTOMER_COLLECTION (Collection point) */
  "serviceType": string,
  /** Station ID in partner system */
  "stationId": string,
}
export interface GetScannedParcelData {
  "success"?: boolean,
  "data"?: Array<{
  "trackingNumber"?: string,
  "cageNumber"?: string,
  "sellerName"?: string,
  "pickupTplSlug"?: string,
  "createdAt"?: number,
  "lastmileTpl"?: string,
  "warningMessage"?: string,
  "serviceType"?: string,
  }>,
  "errorCode"?: string,
  "errorMsg"?: string,
  "traceId"?: string,
}
export type GetScannedParcelResponse = ApiResponse<GetScannedParcelData>

export interface SearchCustomerReturnParcelRequest {
  /** Station ID in partner system */
  "stationId": string,
  /** Search tracking number text at least 4 letters */
  "searchText": string,
}
export interface SearchCustomerReturnParcelData {
  "success"?: boolean,
  "data"?: Array<{
  "trackingNumber"?: string,
  "maskedCustomerName"?: string,
  }>,
  "errorCode"?: string,
  "errorMsg"?: string,
  "traceId"?: string,
}
export type SearchCustomerReturnParcelResponse = ApiResponse<SearchCustomerReturnParcelData>

export interface ValidateCageRequest {
  /** Station ID in partner system */
  "stationId": string,
  /** Cage number, Lazada will provides cage number */
  "cageNumber": string,
}
export interface ValidateCageData {
  "success"?: boolean,
  "data"?: boolean,
  "errorCode"?: string,
  "errorMsg"?: string,
  "traceId"?: string,
}
export type ValidateCageResponse = ApiResponse<ValidateCageData>

export interface ValidateOTPRequest {
  /** Station ID in partner system */
  "stationId": string,
  /** Tracking number of parcel */
  "trackingNumber": string,
  /** The parcel OTP is used for collecting parcel */
  "otp": string,
}
export interface ValidateOTPData {
  "success"?: boolean,
  "data"?: boolean,
  "errorCode"?: string,
  "errorMsg"?: string,
  "traceId"?: string,
}
export type ValidateOTPResponse = ApiResponse<ValidateOTPData>


export class LazadaLogisticsStationAPIApi {
  constructor(private client: LazadaClient) {}

  /**
   * CageValidation
   * /logistics/station/cages/validate (POST)
   */
  async cageValidation(params: CageValidationRequest, opts?: LazadaRequestOptions): Promise<CageValidationResponse> {
    return this.client.request({"method":"POST","path":"/logistics/station/cages/validate","params":["cageNumber","stationCode"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * ConfirmInbound
   * /logistics/station/v1/confirm-inbound (POST)
   */
  async confirmInbound(params: ConfirmInboundRequest, opts?: LazadaRequestOptions): Promise<ConfirmInboundResponse> {
    return this.client.request({"method":"POST","path":"/logistics/station/v1/confirm-inbound","params":["stationId","cageNumber","trackingNumbers","serviceType"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * ConfirmParcelCollection
   * /logistics/station/v1/cp/confirm-parcel-collection (POST)
   */
  async confirmParcelCollection(params: ConfirmParcelCollectionRequest, opts?: LazadaRequestOptions): Promise<ConfirmParcelCollectionResponse> {
    return this.client.request({"method":"POST","path":"/logistics/station/v1/cp/confirm-parcel-collection","params":["stationId","trackingNumber","otp","action","rejectCode"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * CreateScannedParcel
   * /logistics/station/v1/scanned-parcels/create (POST)
   */
  async createScannedParcel(params: CreateScannedParcelRequest, opts?: LazadaRequestOptions): Promise<CreateScannedParcelResponse> {
    return this.client.request({"method":"POST","path":"/logistics/station/v1/scanned-parcels/create","params":["stationId","cageNumber","trackingNumber","serviceType"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * DeleteScannedParcel
   * /logistics/station/v1/scanned-parcels/delete (POST)
   */
  async deleteScannedParcel(params: DeleteScannedParcelRequest, opts?: LazadaRequestOptions): Promise<DeleteScannedParcelResponse> {
    return this.client.request({"method":"POST","path":"/logistics/station/v1/scanned-parcels/delete","params":["stationId","trackingNumbers","serviceType"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * DopConfirmInbound
   * /logistics/station/dop/confirm-inbound (POST)
   */
  async dopConfirmInbound(params: DopConfirmInboundRequest, opts?: LazadaRequestOptions): Promise<DopConfirmInboundResponse> {
    return this.client.request({"method":"POST","path":"/logistics/station/dop/confirm-inbound","params":["stationCode","scannedParcels","scannedParcels.cageNumber","scannedParcels.trackingNumber"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * DopCreateScannedParcel
   * /logistics/station/dop/scanned-parcels (POST)
   */
  async dopCreateScannedParcel(params: DopCreateScannedParcelRequest, opts?: LazadaRequestOptions): Promise<DopCreateScannedParcelResponse> {
    return this.client.request({"method":"POST","path":"/logistics/station/dop/scanned-parcels","params":["stationCode","cageNumber","trackingNumber"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * DopDeleteScannedParcel
   * /logistics/station/dop/scanned-parcels/delete (POST)
   */
  async dopDeleteScannedParcel(params: DopDeleteScannedParcelRequest, opts?: LazadaRequestOptions): Promise<DopDeleteScannedParcelResponse> {
    return this.client.request({"method":"POST","path":"/logistics/station/dop/scanned-parcels/delete","params":["stationCode","trackingNumbers"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * DopGetInboundedParcel
   * /logistics/station/dop/inbounded-parcels/list (GET)
   */
  async dopGetInboundedParcel(params: DopGetInboundedParcelRequest, opts?: LazadaRequestOptions): Promise<DopGetInboundedParcelResponse> {
    return this.client.request({"method":"GET","path":"/logistics/station/dop/inbounded-parcels/list","params":["stationCode","trackingNumbers"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * DopGetScannedParcel
   * /logistics/station/dop/scanned-parcels/list (GET)
   */
  async dopGetScannedParcel(params: DopGetScannedParcelRequest, opts?: LazadaRequestOptions): Promise<DopGetScannedParcelResponse> {
    return this.client.request({"method":"GET","path":"/logistics/station/dop/scanned-parcels/list","params":["stationCode","cageNumber"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetCpScheduledPuParcel
   * /logistics/station/v1/cp/scheduled-pu-parcels/list (GET)
   */
  async getCpScheduledPuParcel(params: GetCpScheduledPuParcelRequest, opts?: LazadaRequestOptions): Promise<GetCpScheduledPuParcelResponse> {
    return this.client.request({"method":"GET","path":"/logistics/station/v1/cp/scheduled-pu-parcels/list","params":["stationId"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetInboundedParcel
   * /logistics/station/v1/inbounded-parcels/list (GET)
   */
  async getInboundedParcel(params: GetInboundedParcelRequest, opts?: LazadaRequestOptions): Promise<GetInboundedParcelResponse> {
    return this.client.request({"method":"GET","path":"/logistics/station/v1/inbounded-parcels/list","params":["stationId","trackingNumbers","serviceType"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetListAccessStation
   * /logistics/station/list (GET)
   */
  async getListAccessStation(params: GetListAccessStationRequest, opts?: LazadaRequestOptions): Promise<GetListAccessStationResponse> {
    return this.client.request({"method":"GET","path":"/logistics/station/list","params":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetMetaData
   * /logistics/station/v1/metadata (GET)
   */
  async getMetaData(params: GetMetaDataRequest, opts?: LazadaRequestOptions): Promise<GetMetaDataResponse> {
    return this.client.request({"method":"GET","path":"/logistics/station/v1/metadata","params":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetScannedParcel
   * /logistics/station/v1/scanned-parcels/list (GET)
   */
  async getScannedParcel(params: GetScannedParcelRequest, opts?: LazadaRequestOptions): Promise<GetScannedParcelResponse> {
    return this.client.request({"method":"GET","path":"/logistics/station/v1/scanned-parcels/list","params":["cageNumber","serviceType","stationId"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * SearchCustomerReturnParcel
   * /logistics/station/v1/dop/cr-parcels/search (GET)
   */
  async searchCustomerReturnParcel(params: SearchCustomerReturnParcelRequest, opts?: LazadaRequestOptions): Promise<SearchCustomerReturnParcelResponse> {
    return this.client.request({"method":"GET","path":"/logistics/station/v1/dop/cr-parcels/search","params":["stationId","searchText"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * ValidateCage
   * /logistics/station/v1/cages/validate (POST)
   */
  async validateCage(params: ValidateCageRequest, opts?: LazadaRequestOptions): Promise<ValidateCageResponse> {
    return this.client.request({"method":"POST","path":"/logistics/station/v1/cages/validate","params":["stationId","cageNumber"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * ValidateOTP
   * /logistics/station/v1/cp/validate-otp (POST)
   */
  async validateOTP(params: ValidateOTPRequest, opts?: LazadaRequestOptions): Promise<ValidateOTPResponse> {
    return this.client.request({"method":"POST","path":"/logistics/station/v1/cp/validate-otp","params":["stationId","trackingNumber","otp"]}, params as unknown as Record<string, unknown>, opts)
  }
}
