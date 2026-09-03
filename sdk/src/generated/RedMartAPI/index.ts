// AUTO-GENERATED from Lazada reference docs (references/api/RedMart API).
// Do not edit by hand; run `npm run generate` in sdk/.

import { LazadaClient } from '../../client'
import { ApiResponse, LazadaRequestOptions } from '../../types'

export interface RssGetOnePickupJobRequest {
  /** store id */
  "storeId": number,
  /** pickup job id */
  "pickupJobId": number,
}
export interface RssGetOnePickupJobData {
  "result"?: {
  "data"?: Record<string, unknown>,
  "success"?: boolean,
  "errorMessage"?: string,
  },
}
export type RssGetOnePickupJobResponse = ApiResponse<RssGetOnePickupJobData>

export interface RssGetPickupJobsRequest {
  /** Store id */
  "storeId": number,
  /** Epoch millis of job date from */
  "from": number,
  /** Epoch millis of job date till */
  "till": number,
  /** Job statuses filter. Possible job statuses are "pending", "arrived", "pickedup", "cancelled" and "failed". Concatenate statuses of interest with "," to make queries with multiple job status filter. Leave this field blank or null to query without filtering. */
  "statuses"?: string,
}
export interface RssGetPickupJobsData {
  "result"?: Array<{
  "data"?: Array<Record<string, unknown>>,
  "success"?: boolean,
  "errorMessage"?: string,
  }>,
}
export type RssGetPickupJobsResponse = ApiResponse<RssGetPickupJobsData>

export interface RssGetPickupLocationsRequest {
  /** store id */
  "storeId": number,
  /** page */
  "page": number,
  /** pageSize */
  "pageSize": number,
}
export interface RssGetPickupLocationsData {
  "result"?: Array<{
  "data"?: Array<Record<string, unknown>>,
  "page"?: number,
  "pageSize"?: number,
  "total"?: number,
  "success"?: boolean,
  "errorMessage"?: string,
  }>,
}
export type RssGetPickupLocationsResponse = ApiResponse<RssGetPickupLocationsData>

export interface RssGetProductRequest {
  /** store id */
  "storeId": number,
  /** the RPC of the Product */
  "productId": number,
}
export interface RssGetProductData {
  "result"?: {
  "data"?: Record<string, unknown>,
  "success"?: boolean,
  "errorMessage"?: string,
  },
}
export type RssGetProductResponse = ApiResponse<RssGetProductData>

export interface RssGetProductsRequest {
  /** store id */
  "storeId": number,
  /** pickup location ids */
  "pickupLocationIds"?: Array<number>,
  /** page */
  "page": number,
  /** page size */
  "pageSize": number,
}
export interface RssGetProductsData {
  "result"?: Array<{
  "data"?: Array<Record<string, unknown>>,
  "page"?: number,
  "pageSize"?: number,
  "total"?: number,
  "success"?: boolean,
  "errorMessage"?: string,
  }>,
}
export type RssGetProductsResponse = ApiResponse<RssGetProductsData>

export interface RssGetStockLotRequest {
  /** store id */
  "storeId": number,
  /** pickupLocation id */
  "pickupLocationId": number,
  /** the RPC of the Product */
  "productId": number,
  /** Identifier of the requested Stock Lot. For now always hardcoded to "0" (please note the String type, do not always expect it to be a number !) */
  "stockLotId": string,
}
export interface RssGetStockLotData {
  "result"?: {
  "data"?: Record<string, unknown>,
  "success"?: boolean,
  "errorMessage"?: string,
  },
}
export type RssGetStockLotResponse = ApiResponse<RssGetStockLotData>

export interface RssGetStockLotsRequest {
  /** store id */
  "storeId": number,
  /** pickupLocation id */
  "pickupLocationId": number,
  /** product id */
  "productId": number,
}
export interface RssGetStockLotsData {
  "result"?: Array<{
  "data"?: Array<Record<string, unknown>>,
  "success"?: boolean,
  "errorMessage"?: string,
  }>,
}
export type RssGetStockLotsResponse = ApiResponse<RssGetStockLotsData>

export interface RssUpdateStockLotRequest {
  /** store id */
  "storeId": number,
  /** The unique id of the pickup location where the product is stored */
  "pickupLocationId": number,
  /** the RPC of the Product (so the RedMart-specific code, not the merchant-specific code) */
  "productId": number,
  /** Identifier of the requested Stock Lot. For now always hardcoded to "0" (please note the String type, do not always expect it to be a number !) */
  "stockLotId": string,
  /** stockLot update DTO */
  "stockLotUpdateDTO": Record<string, unknown>,
  /** quantity at pickupLocation */
  "stockLotUpdateDTO.quantityAtPickupLocation": number,
}
export interface RssUpdateStockLotData {
  "result"?: {
  "success"?: boolean,
  "errorMessage"?: string,
  "data"?: Record<string, unknown>,
  },
}
export type RssUpdateStockLotResponse = ApiResponse<RssUpdateStockLotData>


export class LazadaRedMartAPIApi {
  constructor(private client: LazadaClient) {}

  /**
   * RssGetOnePickupJob
   * /rss/pickup-job/get (GET)
   */
  async rssGetOnePickupJob(params: RssGetOnePickupJobRequest, opts?: LazadaRequestOptions): Promise<RssGetOnePickupJobResponse> {
    return this.client.request({"method":"GET","path":"/rss/pickup-job/get","params":["storeId","pickupJobId"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * RssGetPickupJobs
   * /rss/pickup-jobs/get (GET)
   */
  async rssGetPickupJobs(params: RssGetPickupJobsRequest, opts?: LazadaRequestOptions): Promise<RssGetPickupJobsResponse> {
    return this.client.request({"method":"GET","path":"/rss/pickup-jobs/get","params":["storeId","from","till","statuses"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * RssGetPickupLocations
   * /rss/pickupLocations/get (GET)
   */
  async rssGetPickupLocations(params: RssGetPickupLocationsRequest, opts?: LazadaRequestOptions): Promise<RssGetPickupLocationsResponse> {
    return this.client.request({"method":"GET","path":"/rss/pickupLocations/get","params":["storeId","page","pageSize"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * RssGetProduct
   * /rss/product/get (GET)
   */
  async rssGetProduct(params: RssGetProductRequest, opts?: LazadaRequestOptions): Promise<RssGetProductResponse> {
    return this.client.request({"method":"GET","path":"/rss/product/get","params":["storeId","productId"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * RssGetProducts
   * /rss/products/get (GET)
   */
  async rssGetProducts(params: RssGetProductsRequest, opts?: LazadaRequestOptions): Promise<RssGetProductsResponse> {
    return this.client.request({"method":"GET","path":"/rss/products/get","params":["storeId","pickupLocationIds","page","pageSize"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * RssGetStockLot
   * /rss/stockLot/get (GET)
   */
  async rssGetStockLot(params: RssGetStockLotRequest, opts?: LazadaRequestOptions): Promise<RssGetStockLotResponse> {
    return this.client.request({"method":"GET","path":"/rss/stockLot/get","params":["storeId","pickupLocationId","productId","stockLotId"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * RssGetStockLots
   * /rss/stockLots/get (GET)
   */
  async rssGetStockLots(params: RssGetStockLotsRequest, opts?: LazadaRequestOptions): Promise<RssGetStockLotsResponse> {
    return this.client.request({"method":"GET","path":"/rss/stockLots/get","params":["storeId","pickupLocationId","productId"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * RssUpdateStockLot
   * /rss/stockLot/update (GET)
   */
  async rssUpdateStockLot(params: RssUpdateStockLotRequest, opts?: LazadaRequestOptions): Promise<RssUpdateStockLotResponse> {
    return this.client.request({"method":"GET","path":"/rss/stockLot/update","params":["storeId","pickupLocationId","productId","stockLotId","stockLotUpdateDTO","stockLotUpdateDTO.quantityAtPickupLocation"]}, params as unknown as Record<string, unknown>, opts)
  }
}
