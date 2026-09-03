// AUTO-GENERATED from Lazada reference docs (references/api/Fulfillment API).
// Do not edit by hand; run `npm run generate` in sdk/.

import { LazadaClient } from '../../client'
import { ApiResponse, LazadaRequestOptions } from '../../types'

export interface ConfirmCollectForDBSRequest {
  /** request body */
  "dbsCollectReq": Record<string, unknown>,
  /** Batch size is limited to 20 */
  "dbsCollectReq.packages": Array<Record<string, unknown>>,
  /** package id */
  "dbsCollectReq.packages.package_id": string,
}
export interface ConfirmCollectForDBSData {
  "result"?: Array<{
  "data"?: Array<{
    "packages"?: Array<{
      "msg"?: string,
      "item_err_code"?: string,
      "package_id"?: string,
      "retry"?: boolean,
    }>,
  }>,
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
  }>,
}
export type ConfirmCollectForDBSResponse = ApiResponse<ConfirmCollectForDBSData>

export interface ConfirmDeliveryForDBSRequest {
  /** request body */
  "dbsDeliveryReq": Record<string, unknown>,
  /** Batch size is limited to 20 */
  "dbsDeliveryReq.packages": Array<Record<string, unknown>>,
  /** packageId */
  "dbsDeliveryReq.packages.package_id": string,
}
export interface ConfirmDeliveryForDBSData {
  "result"?: Array<{
  "data"?: Array<{
    "packages"?: Array<{
      "msg"?: string,
      "item_err_code"?: string,
      "package_id"?: string,
      "retry"?: boolean,
    }>,
  }>,
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
  }>,
}
export type ConfirmDeliveryForDBSResponse = ApiResponse<ConfirmDeliveryForDBSData>

export interface DeliverDigitalRequest {
  /** request body */
  "digitalDeliveryReq": Record<string, unknown>,
  /** Batch size is limited to 20, deliver orders */
  "digitalDeliveryReq.orders": Array<Record<string, unknown>>,
  /** order item list */
  "digitalDeliveryReq.orders.order_item_list": Array<number>,
  /** orderId */
  "digitalDeliveryReq.orders.order_id": number,
}
export interface DeliverDigitalData {
  "result"?: Array<{
  "data"?: Array<{
    "orders"?: Array<{
      "order_item_list"?: Array<{
        "msg"?: string,
        "order_item_id"?: number,
        "item_err_code"?: string,
        "retry"?: boolean,
      }>,
      "order_id"?: number,
    }>,
  }>,
  "success"?: boolean,
  "errorCode"?: string,
  "errorMsg"?: string,
  }>,
}
export type DeliverDigitalResponse = ApiResponse<DeliverDigitalData>

export interface FailedDeliveryForDBSRequest {
  /** request body */
  "dbsFailedDeliveryReq": Record<string, unknown>,
  /** Batch size is limited to 20, packages */
  "dbsFailedDeliveryReq.packages": Array<Record<string, unknown>>,
  /** packageId */
  "dbsFailedDeliveryReq.packages.package_id": string,
}
export interface FailedDeliveryForDBSData {
  "result"?: Array<{
  "data"?: Array<{
    "packages"?: Array<{
      "msg"?: string,
      "item_err_code"?: string,
      "package_id"?: string,
      "retry"?: boolean,
    }>,
  }>,
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
  }>,
}
export type FailedDeliveryForDBSResponse = ApiResponse<FailedDeliveryForDBSData>

export interface GetShipmentProviderRequest {
  /** req body */
  "getShipmentProvidersReq": Record<string, unknown>,
  /** Batch size is limited to 20, to pack orders */
  "getShipmentProvidersReq.orders": Array<Record<string, unknown>>,
  /** order_id */
  "getShipmentProvidersReq.orders.order_id": number,
  /** order_item_ids */
  "getShipmentProvidersReq.orders.order_item_ids": Array<number>,
}
export interface GetShipmentProviderData {
  "result"?: {
  "data"?: {
    "platform_default"?: number,
    "shipment_providers"?: Array<{
      "name"?: string,
      "provider_code"?: string,
    }>,
    "shipping_allocate_type"?: string,
  },
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
  },
}
export type GetShipmentProviderResponse = ApiResponse<GetShipmentProviderData>

export interface PackRequest {
  /** request body */
  "packReq": Record<string, unknown>,
  /** Batch size is limited to 20，Orders that need to be packed，Sub-orders of the same order will be processed together */
  "packReq.pack_order_list": Array<Record<string, unknown>>,
  /** order_item_ids that need to be packed */
  "packReq.pack_order_list.order_item_list": Array<number>,
  /** order that need to be packed */
  "packReq.pack_order_list.order_id": number,
  /** dropship */
  "packReq.delivery_type": string,
  /** If it is a local store (TFs), this field cannot be transferred; If it is a cross-border store must pass (NTFS); This field cannot be transferred to DBS orders (including local stores and cross-border stores) If you want to get the available values, you can call the <a href='https://open.lazada.com/a */
  "packReq.shipment_provider_code"?: string,
  /** If you want to get the available values, you can call the <a href='https://open.lazada.com/apps/doc/api?path=%2Forder%2Fshipment%2Fproviders%2Fget' target='_brank'>getshipmentprovider</a> API */
  "packReq.shipping_allocate_type": string,
}
export interface PackData {
  "result"?: Array<{
  "data"?: Array<{
    "pack_order_list"?: Array<{
      "order_item_list"?: Array<{
        "order_item_id"?: number,
        "msg"?: string,
        "item_err_code"?: string,
        "tracking_number"?: string,
        "shipment_provider"?: string,
        "package_id"?: string,
        "retry"?: boolean,
      }>,
      "order_id"?: number,
    }>,
  }>,
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
  }>,
}
export type PackResponse = ApiResponse<PackData>

export interface PackageStatusUpdateForDBSRequest {
  /** waybill no */
  "trackingNumber": string,
  /** OPENAPI */
  "source": string,
  /** SF */
  "carrierCode"?: string,
  /** package no */
  "tag": string,
  /** track info */
  "trackInfo": Record<string, unknown>,
  /** latest status */
  "trackInfo.latestStatus": Record<string, unknown>,
  /** status */
  "trackInfo.latestStatus.status": string,
  /** subStatus */
  "trackInfo.latestStatus.subStatus": string,
  /** subStatusDesc */
  "trackInfo.latestStatus.subStatusDesc"?: string,
  /** latestEvent */
  "trackInfo.latestEvent": Record<string, unknown>,
  /** 1723012167919 */
  "trackInfo.latestEvent.eventTime": number,
  /** description */
  "trackInfo.latestEvent.description"?: string,
  /** location */
  "trackInfo.latestEvent.location"?: string,
  /** stage */
  "trackInfo.latestEvent.stage"?: string,
}
export interface PackageStatusUpdateForDBSData {
  "success"?: boolean,
  "module"?: {
  "result"?: boolean,
  },
  "errorCode"?: {
  "displayMessage"?: string,
  },
}
export type PackageStatusUpdateForDBSResponse = ApiResponse<PackageStatusUpdateForDBSData>

export interface PrintAWBRequest {
  /** request body */
  "getDocumentReq": Record<string, unknown>,
  /** HTML/PDF */
  "getDocumentReq.doc_type": string,
  /** Batch size is limited to 20 */
  "getDocumentReq.packages": Array<Record<string, unknown>>,
  /** package */
  "getDocumentReq.packages.package_id": string,
  /** if is true, print package AWB with package item info, else no print package item info */
  "getDocumentReq.print_item_list"?: boolean,
}
export interface PrintAWBData {
  "result"?: {
  "data"?: {
    "file"?: string,
    "doc_type"?: string,
    "pdf_url"?: string,
  },
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
  },
}
export type PrintAWBResponse = ApiResponse<PrintAWBData>

export interface ReadyToShipRequest {
  /** request body */
  "readyToShipReq": Record<string, unknown>,
  /** Batch size is limited to 20, to readyToShip packages */
  "readyToShipReq.packages": Array<Record<string, unknown>>,
  /** packageId */
  "readyToShipReq.packages.package_id": string,
}
export interface ReadyToShipData {
  "result"?: Array<{
  "data"?: Array<{
    "packages"?: Array<{
      "msg"?: string,
      "item_err_code"?: string,
      "package_id"?: string,
      "retry"?: string,
    }>,
  }>,
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
  }>,
}
export type ReadyToShipResponse = ApiResponse<ReadyToShipData>

export interface RecreatePackageRequest {
  /** request body */
  "rePackReq": Record<string, unknown>,
  /** Batch size is limited to 20, packages */
  "rePackReq.packages": Array<Record<string, unknown>>,
  /** packageId */
  "rePackReq.packages.package_id": string,
}
export interface RecreatePackageData {
  "result"?: Array<{
  "data"?: Array<{
    "packages"?: Array<{
      "msg"?: string,
      "item_err_code"?: string,
      "package_id"?: string,
      "retry"?: boolean,
    }>,
  }>,
  "success"?: boolean,
  "error_code"?: string,
  "error_msg"?: string,
  }>,
}
export type RecreatePackageResponse = ApiResponse<RecreatePackageData>


export class LazadaFulfillmentAPIApi {
  constructor(private client: LazadaClient) {}

  /**
   * ConfirmCollectForDBS
   * /order/package/sof/collect (POST)
   */
  async confirmCollectForDBS(params: ConfirmCollectForDBSRequest, opts?: LazadaRequestOptions): Promise<ConfirmCollectForDBSResponse> {
    return this.client.request({"method":"POST","path":"/order/package/sof/collect","params":["dbsCollectReq","dbsCollectReq.packages","dbsCollectReq.packages.package_id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * ConfirmDeliveryForDBS
   * /order/package/sof/delivered (POST)
   */
  async confirmDeliveryForDBS(params: ConfirmDeliveryForDBSRequest, opts?: LazadaRequestOptions): Promise<ConfirmDeliveryForDBSResponse> {
    return this.client.request({"method":"POST","path":"/order/package/sof/delivered","params":["dbsDeliveryReq","dbsDeliveryReq.packages","dbsDeliveryReq.packages.package_id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * DeliverDigital
   * /order/digital/delivered (POST)
   */
  async deliverDigital(params: DeliverDigitalRequest, opts?: LazadaRequestOptions): Promise<DeliverDigitalResponse> {
    return this.client.request({"method":"POST","path":"/order/digital/delivered","params":["digitalDeliveryReq","digitalDeliveryReq.orders","digitalDeliveryReq.orders.order_item_list","digitalDeliveryReq.orders.order_id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * FailedDeliveryForDBS
   * /order/package/sof/failed_delivery (POST)
   */
  async failedDeliveryForDBS(params: FailedDeliveryForDBSRequest, opts?: LazadaRequestOptions): Promise<FailedDeliveryForDBSResponse> {
    return this.client.request({"method":"POST","path":"/order/package/sof/failed_delivery","params":["dbsFailedDeliveryReq","dbsFailedDeliveryReq.packages","dbsFailedDeliveryReq.packages.package_id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetShipmentProvider
   * /order/shipment/providers/get (GET)
   */
  async getShipmentProvider(params: GetShipmentProviderRequest, opts?: LazadaRequestOptions): Promise<GetShipmentProviderResponse> {
    return this.client.request({"method":"GET","path":"/order/shipment/providers/get","params":["getShipmentProvidersReq","getShipmentProvidersReq.orders","getShipmentProvidersReq.orders.order_id","getShipmentProvidersReq.orders.order_item_ids"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * Pack
   * /order/fulfill/pack (POST)
   */
  async pack(params: PackRequest, opts?: LazadaRequestOptions): Promise<PackResponse> {
    return this.client.request({"method":"POST","path":"/order/fulfill/pack","params":["packReq","packReq.pack_order_list","packReq.pack_order_list.order_item_list","packReq.pack_order_list.order_id","packReq.delivery_type","packReq.shipment_provider_code","packReq.shipping_allocate_type"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * PackageStatusUpdateForDBS
   * /order/package/sof/status/update (POST)
   */
  async packageStatusUpdateForDBS(params: PackageStatusUpdateForDBSRequest, opts?: LazadaRequestOptions): Promise<PackageStatusUpdateForDBSResponse> {
    return this.client.request({"method":"POST","path":"/order/package/sof/status/update","params":["trackingNumber","source","carrierCode","tag","trackInfo","trackInfo.latestStatus","trackInfo.latestStatus.status","trackInfo.latestStatus.subStatus","trackInfo.latestStatus.subStatusDesc","trackInfo.latestEvent","trackInfo.latestEvent.eventTime","trackInfo.latestEvent.description","trackInfo.latestEvent.location","trackInfo.latestEvent.stage"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * PrintAWB
   * /order/package/document/get (GET)
   */
  async printAWB(params: PrintAWBRequest, opts?: LazadaRequestOptions): Promise<PrintAWBResponse> {
    return this.client.request({"method":"GET","path":"/order/package/document/get","params":["getDocumentReq","getDocumentReq.doc_type","getDocumentReq.packages","getDocumentReq.packages.package_id","getDocumentReq.print_item_list"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * ReadyToShip
   * /order/package/rts (POST)
   */
  async readyToShip(params: ReadyToShipRequest, opts?: LazadaRequestOptions): Promise<ReadyToShipResponse> {
    return this.client.request({"method":"POST","path":"/order/package/rts","params":["readyToShipReq","readyToShipReq.packages","readyToShipReq.packages.package_id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * RecreatePackage
   * /order/package/repack (GET)
   */
  async recreatePackage(params: RecreatePackageRequest, opts?: LazadaRequestOptions): Promise<RecreatePackageResponse> {
    return this.client.request({"method":"GET","path":"/order/package/repack","params":["rePackReq","rePackReq.packages","rePackReq.packages.package_id"]}, params as unknown as Record<string, unknown>, opts)
  }
}
