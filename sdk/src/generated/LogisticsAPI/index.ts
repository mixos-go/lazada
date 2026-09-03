// AUTO-GENERATED from Lazada reference docs (references/api/Logistics API).
// Do not edit by hand; run `npm run generate` in sdk/.

import { LazadaClient } from '../../client'
import { ApiResponse, LazadaRequestOptions } from '../../types'

export interface AddOrUpdatePickupStopRequest {
  /** Stop ID */
  "stopId": string,
  /** Seller ID (Sent in pickup request) */
  "sellerId": string,
  /** Warehouse code (Sent in pickup request) */
  "warehouseCode": string,
  /** DOP station code */
  "dopStationId"?: string,
  /** DOP station name */
  "dopStationName"?: string,
  /** Type: Pickup/Drop-off */
  "pickupType": string,
  /** 1. planned: when stop is dispatched to courier\n 2. arrived: when driver arrived at stop and start pickup\n 3. finished: when driver finished pickup at the stop\n 4. skipped: when driver selected to skip the stop due to some reason\n 5. removed: when the stop has 0 RTS */
  "status": string,
  /** actual process time when reaching the status */
  "statusUpdateTime": number,
  /** Dispatcher name */
  "dispatcherName"?: string,
  /** Dispatcher phone number */
  "dispatcherContact"?: string,
  /** Driver ID */
  "driverId"?: string,
  /** Driver name */
  "driverName": string,
  /** Driver phone number */
  "driverContact"?: string,
  /** when the ETA is updated, need to update the data to Lazada side, scenario include: 1. without ETA >> with ETA 2. with ETA >> without ETA 3. ETA change from A to B */
  "eta"?: number,
  /** Success count */
  "successVolume"?: string,
  /** Failed count */
  "failedVolume"?: string,
  /** Failed list */
  "failedVolumeList"?: Array<Record<string, unknown>>,
  /** Failed count */
  "failedVolumeList.volume": number,
  /** Failed reason */
  "failedVolumeList.reason": string,
  /** Type: Failed/Skipped */
  "failedVolumeList.type": string,
}
export interface AddOrUpdatePickupStopData {
  "retryable"?: boolean,
  "success"?: boolean,
  "errors"?: Array<{
  "errorMessage"?: string,
  "errorCode"?: string,
  "field"?: string,
  }>,
  "errorMessage"?: string,
  "errorCode"?: string,
}
export type AddOrUpdatePickupStopResponse = ApiResponse<AddOrUpdatePickupStopData>

export interface Create3PLStationRequest {
  /** Station code in 3PL system */
  "externalCode": string,
  /** Modifier name. if blank will use 3PL name */
  "modifier"?: string,
  /** Station name in 3PL system */
  "name": string,
  /** Station functions */
  "functionCodes": Array<string>,
  /** Y Station subtypes (depends on function) enum: DOP function: MDOP, DOP, OTC,IDOP CP function: COLLECTION_ON_POINT, MOBILE_COLLECTION_POINT, LOCKER Return function: CUSTOMER_RETURN */
  "subTypes": Array<string>,
  /** Support COD or not */
  "codSupport": boolean,
  /** Number of days the station can keep packages for (used by LOP station tool). If not withdrawn by the customer within the age value, the package will be picked up from the station by a dedicated 3PL and brought to the warehouse. The package will be marked as failed delivery. Unit: Days */
  "age"?: number,
  /** Which 3PL can go and pick up the seller dropped-off parcel from the station */
  "firstMileTplSlugs": Array<string>,
  /** This is a list of logistics providers which can deliver packages to this station. */
  "lastMileTplSlugs": Array<string>,
  /** Station contact information */
  "contact": Record<string, unknown>,
  /** Contact name */
  "contact.name": string,
  /** Contact phone */
  "contact.phone": string,
  /** Contact email */
  "contact.email"?: string,
  /** Station address */
  "address": Record<string, unknown>,
  /** Lazada R code address id */
  "address.id": string,
  /** Address details */
  "address.details": string,
  /** Latitude (At most 6 decimal digits) */
  "address.latitude": string,
  /** Longitude (At most 6 decimal digits) */
  "address.longitude": string,
  /** Timezone (used to calculate the schedules) If not specified, use default country timezone format: (+/-)XX:XX */
  "timeZone"?: string,
  /** Station schedules */
  "schedules"?: Array<Record<string, unknown>>,
  /** List of working days apply which this schedule applied */
  "schedules.workDays": Array<string>,
  /** the start time of Station schedule adopted by 24 hour system, the pattern is HH:mm:ss. example 07:00:00, 15:05:00 */
  "schedules.startTime": string,
  /** the end time of Station schedule adopted by 24 hour system, the pattern is HH:mm:ss. example 07:00:00, 15:05:00 */
  "schedules.endTime": string,
  /** the cutoff time of Station schedule adopted by 24 hour system, the pattern is HH:mm:ss. example 07:00:00, 15:05:00 */
  "schedules.cutOffTime": string,
  /** Function constraint */
  "constraints"?: Array<Record<string, unknown>>,
  /** the maximum number of packages processed per day by Station. */
  "constraints.maxCapacity": number,
  /** the maximum width of packages processed by Station, unit: cm */
  "constraints.maxWidth": number,
  /** the maximum height of packages processed by Station, unit: cm */
  "constraints.maxHeight": number,
  /** the maximum length of packages processed by Station, unit: cm */
  "constraints.maxLength": number,
  /** the maximum weight of packages processed by Station, unit: g */
  "constraints.maxWeight": number,
  /** Function which this constraint applied */
  "constraints.functionCode": string,
  /** the maximum cbm of packages processed by Station, unit: m³ */
  "constraints.maxCbm": string,
}
export interface Create3PLStationData {
  "success"?: boolean,
  "retryable"?: boolean,
  "errorMessage"?: string,
  "errorCode"?: string,
  "errors"?: Array<{
  "errorMessage"?: string,
  "errorCode"?: string,
  "field"?: string,
  }>,
}
export type Create3PLStationResponse = ApiResponse<Create3PLStationData>

export interface GetOrderTraceRequest {
  /** order id */
  "order_id": string,
  /** local */
  "locale"?: string,
  /** package id list */
  "ofcPackageIdList"?: Array<string>,
}
export interface GetOrderTraceData {
  "result"?: {
  "error_code"?: {
    "displayMessage"?: string,
  },
  "repeated"?: boolean,
  "retry"?: boolean,
  "not_success"?: boolean,
  "success"?: boolean,
  "module"?: Array<{
    "warehouse_detail_info"?: string,
    "ofc_order_id"?: string,
    "package_detail_info_list"?: Array<{
      "order_line_info_list"?: string,
      "tracking_number"?: string,
      "ofc_package_id"?: string,
      "logistic_detail_info_list"?: Array<{
        "package_location_name"?: string,
        "event_date"?: string,
        "detail_type"?: string,
        "proof_images"?: Array<Record<string, unknown>>,
        "receive_time"?: number,
        "status_code"?: string,
        "icon"?: string,
        "event_time"?: number,
        "description"?: string,
        "title"?: string,
      }>,
    }>,
  }>,
  },
}
export type GetOrderTraceResponse = ApiResponse<GetOrderTraceData>

export interface ScanParcelRequest {
  /** test */
  "cageNumber": string,
  /** test */
  "trackingNumber": string,
}
export interface ScanParcelData {
  "trackingNumber"?: string,
}
export type ScanParcelResponse = ApiResponse<ScanParcelData>

export interface StationDopScanRequest {
  /** test */
  "cageNumber": string,
  /** test */
  "trackingNumber": string,
}
export interface StationDopScanData {
  "success"?: boolean,
  "data"?: {
  "trackingNumber"?: string,
  },
  "error"?: {
  "errorCode"?: string,
  },
}
export type StationDopScanResponse = ApiResponse<StationDopScanData>

export interface Update3PLStationRequest {
  /** Station code in 3PL system */
  "externalCode": string,
  /** Modifier name. if blank will use 3PL name */
  "modifier"?: string,
  /** Enable or disable Station */
  "enable": boolean,
  /** Station functions */
  "functionCodes": Array<string>,
  /** Y Station subtypes (depends on function) enum: DOP function: MDOP, DOP, OTC,IDOP CP function: COLLECTION_ON_POINT, MOBILE_COLLECTION_POINT, LOCKER Return function: CUSTOMER_RETURN */
  "subTypes": Array<string>,
  /** Support COD or not */
  "codSupport": boolean,
  /** Number of days the station can keep packages for (used by LOP station tool). If not withdrawn by the customer within the age value, the package will be picked up from the station by a dedicated 3PL and brought to the warehouse. The package will be marked as failed delivery. Unit: Days */
  "age"?: number,
  /** Which 3PL can go and pick up the seller dropped-off parcel from the station */
  "firstMileTplSlugs": Array<string>,
  /** This is a list of logistics providers which can deliver packages to this station. */
  "lastMileTplSlugs": Array<string>,
  /** Station contact information */
  "contact": Record<string, unknown>,
  /** Contact name */
  "contact.name": string,
  /** Contact phone */
  "contact.phone": string,
  /** Contact email */
  "contact.email"?: string,
  /** Station address */
  "address": Record<string, unknown>,
  /** Lazada R code address id */
  "address.id": string,
  /** Address details */
  "address.details": string,
  /** Latitude (At most 6 decimal digits) */
  "address.latitude": string,
  /** Longitude (At most 6 decimal digits) */
  "address.longitude": string,
  /** Timezone (used to calculate the schedules) If not specified, use default country timezone format: (+/-)XX:XX */
  "timeZone"?: string,
  /** Station schedules */
  "schedules"?: Array<Record<string, unknown>>,
  /** List of working days apply which this schedule applied */
  "schedules.workDays": Array<string>,
  /** the start time of Station schedule adopted by 24 hour system, the pattern is HH:mm:ss. example 07:00:00, 15:05:00 */
  "schedules.startTime": string,
  /** the end time of Station schedule adopted by 24 hour system, the pattern is HH:mm:ss. example 07:00:00, 15:05:00 */
  "schedules.endTime": string,
  /** the cutoff time of Station schedule adopted by 24 hour system, the pattern is HH:mm:ss. example 07:00:00, 15:05:00 */
  "schedules.cutOffTime": string,
  /** Function constraint */
  "constraints"?: Array<Record<string, unknown>>,
  /** the maximum number of packages processed per day by Station. */
  "constraints.maxCapacity": number,
  /** the maximum width of packages processed by Station, unit: cm */
  "constraints.maxWidth": number,
  /** the maximum height of packages processed by Station, unit: cm */
  "constraints.maxHeight": number,
  /** the maximum length of packages processed by Station, unit: cm */
  "constraints.maxLength": number,
  /** the maximum weight of packages processed by Station, unit: g */
  "constraints.maxWeight": number,
  /** Function which this constraint applied */
  "constraints.functionCode": string,
  /** the maximum cbm of packages processed by Station, unit: m³ */
  "constraints.maxCbm": string,
  /** Station name */
  "name"?: string,
}
export interface Update3PLStationData {
  "success"?: boolean,
  "retryable"?: boolean,
  "errorMessage"?: string,
  "errorCode"?: string,
  "errors"?: Array<{
  "errorMessage"?: string,
  "errorCode"?: string,
  "field"?: string,
  }>,
}
export type Update3PLStationResponse = ApiResponse<Update3PLStationData>

export interface UpdatePickupTimeSlotRequest {
  /** Seller ID (Sent in pickup request) */
  "sellerId": string,
  /** Warehouse code (Sent in pickup request) */
  "warehouseCode": string,
  /** Format: HH:mm, separate by comma */
  "pickupTimeslots": Array<string>,
}
export interface UpdatePickupTimeSlotData {
  "retryable"?: boolean,
  "success"?: boolean,
  "errors"?: Array<{
  "errorMessage"?: string,
  "errorCode"?: string,
  "field"?: string,
  }>,
  "errorMessage"?: string,
  "errorCode"?: string,
}
export type UpdatePickupTimeSlotResponse = ApiResponse<UpdatePickupTimeSlotData>

export interface CreateConsolidationServiceRequest {
  /** unit codes */
  "unitCodes": Array<string>,
  /** prop */
  "properties": Record<string, unknown>,
}
export interface CreateConsolidationServiceData {
  "data"?: string,
  "success"?: boolean,
  "errorCode"?: string,
  "errorMsg"?: string,
}
export type CreateConsolidationServiceResponse = ApiResponse<CreateConsolidationServiceData>

export interface UpdateLastMileRequest {
  /** unitCode */
  "unitCode": string,
  /** shippingProviderCode */
  "shippingProviderCode": string,
  /** trackingNumber */
  "trackingNumber": string,
}
export interface UpdateLastMileData {
  "success"?: boolean,
  "data"?: string,
  "errorCode"?: string,
  "errorMsg"?: string,
}
export type UpdateLastMileResponse = ApiResponse<UpdateLastMileData>


export class LazadaLogisticsAPIApi {
  constructor(private client: LazadaClient) {}

  /**
   * AddOrUpdatePickupStop
   * /logistics/tps/runsheets/stops (POST)
   */
  async addOrUpdatePickupStop(params: AddOrUpdatePickupStopRequest, opts?: LazadaRequestOptions): Promise<AddOrUpdatePickupStopResponse> {
    return this.client.request({"method":"POST","path":"/logistics/tps/runsheets/stops","params":["stopId","sellerId","warehouseCode","dopStationId","dopStationName","pickupType","status","statusUpdateTime","dispatcherName","dispatcherContact","driverId","driverName","driverContact","eta","successVolume","failedVolume","failedVolumeList","failedVolumeList.volume","failedVolumeList.reason","failedVolumeList.type"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * Create3PLStation
   * /logistics/tps/stations/create (POST)
   */
  async create3PLStation(params: Create3PLStationRequest, opts?: LazadaRequestOptions): Promise<Create3PLStationResponse> {
    return this.client.request({"method":"POST","path":"/logistics/tps/stations/create","params":["externalCode","modifier","name","functionCodes","subTypes","codSupport","age","firstMileTplSlugs","lastMileTplSlugs","contact","contact.name","contact.phone","contact.email","address","address.id","address.details","address.latitude","address.longitude","timeZone","schedules","schedules.workDays","schedules.startTime","schedules.endTime","schedules.cutOffTime","constraints","constraints.maxCapacity","constraints.maxWidth","constraints.maxHeight","constraints.maxLength","constraints.maxWeight","constraints.functionCode","constraints.maxCbm"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetOrderTrace
   * /logistic/order/trace (GET)
   */
  async getOrderTrace(params: GetOrderTraceRequest, opts?: LazadaRequestOptions): Promise<GetOrderTraceResponse> {
    return this.client.request({"method":"GET","path":"/logistic/order/trace","params":["order_id","locale","ofcPackageIdList"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * ScanParcel
   * /dop/scan (GET)
   */
  async scanParcel(params: ScanParcelRequest, opts?: LazadaRequestOptions): Promise<ScanParcelResponse> {
    return this.client.request({"method":"GET","path":"/dop/scan","params":["cageNumber","trackingNumber"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * StationDopScan
   * /stations/dop/scan (GET)
   */
  async stationDopScan(params: StationDopScanRequest, opts?: LazadaRequestOptions): Promise<StationDopScanResponse> {
    return this.client.request({"method":"GET","path":"/stations/dop/scan","params":["cageNumber","trackingNumber"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * Update3PLStation
   * /logistics/tps/stations/update (POST)
   */
  async update3PLStation(params: Update3PLStationRequest, opts?: LazadaRequestOptions): Promise<Update3PLStationResponse> {
    return this.client.request({"method":"POST","path":"/logistics/tps/stations/update","params":["externalCode","modifier","enable","functionCodes","subTypes","codSupport","age","firstMileTplSlugs","lastMileTplSlugs","contact","contact.name","contact.phone","contact.email","address","address.id","address.details","address.latitude","address.longitude","timeZone","schedules","schedules.workDays","schedules.startTime","schedules.endTime","schedules.cutOffTime","constraints","constraints.maxCapacity","constraints.maxWidth","constraints.maxHeight","constraints.maxLength","constraints.maxWeight","constraints.functionCode","constraints.maxCbm","name"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * UpdatePickupTimeSlot
   * /logistics/tps/sellers/pickup_timeslot (POST)
   */
  async updatePickupTimeSlot(params: UpdatePickupTimeSlotRequest, opts?: LazadaRequestOptions): Promise<UpdatePickupTimeSlotResponse> {
    return this.client.request({"method":"POST","path":"/logistics/tps/sellers/pickup_timeslot","params":["sellerId","warehouseCode","pickupTimeslots"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * createConsolidationService
   * /logistics/ldp/createConsolidationService (POST)
   */
  async createConsolidationService(params: CreateConsolidationServiceRequest, opts?: LazadaRequestOptions): Promise<CreateConsolidationServiceResponse> {
    return this.client.request({"method":"POST","path":"/logistics/ldp/createConsolidationService","params":["unitCodes","properties"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * updateLastMile
   * /logistics/ldp/updateLastmile (POST)
   */
  async updateLastMile(params: UpdateLastMileRequest, opts?: LazadaRequestOptions): Promise<UpdateLastMileResponse> {
    return this.client.request({"method":"POST","path":"/logistics/ldp/updateLastmile","params":["unitCode","shippingProviderCode","trackingNumber"]}, params as unknown as Record<string, unknown>, opts)
  }
}
