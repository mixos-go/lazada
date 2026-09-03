// AUTO-GENERATED from Lazada reference docs (references/api/Sponsored Solutions API).
// Do not edit by hand; run `npm run generate` in sdk/.

import { LazadaClient } from '../../client'
import { ApiResponse, LazadaRequestOptions } from '../../types'

export interface AddAdgroupBatchRequest {
  /** Campaign id which you want to add into. */
  "campaignId": number,
  /** Decided to choose which advertisement solution.SD:sponsoredSearch. */
  "bizCode": string,
  /** Adgroup list */
  "adgroupViewDTOList": Array<Record<string, unknown>>,
  /** The adgroup name, normanlly is the product name. */
  "adgroupViewDTOList.adgroupName": string,
  /** The way the product be selected.1:manual(I want to select products manually from my store.);2:auto(Let Lazada optimize the products within the campaigns in real-time to maximize the campaigns' performance).This must be the same as the campaign. */
  "adgroupViewDTOList.autoItemSelect": string,
  /** Let Lazada automatically set cost-effective bid prices for your products. */
  "adgroupViewDTOList.bidPrice": string,
  /** Product id. */
  "adgroupViewDTOList.itemId": number,
  /** Let Lazada automatically set creatives for your products.1:ON;0:OFF.This must be the same as the campaign. */
  "adgroupViewDTOList.autoCreative": number,
  /** Let Lazada automatically set keyword for your products.1:manual(I want to select keywords manually for my product selection.);2:auto(Let Lazada optimize the keywords relating to your products in real time to maximize the campaigns' performance).This must be the same as the campaign. */
  "adgroupViewDTOList.autoKeyword": number,
  /** Bid word list */
  "adgroupViewDTOList.bidwordViewDTOList"?: Array<Record<string, unknown>>,
  /** The specific keyword.eg:shoe. */
  "adgroupViewDTOList.bidwordViewDTOList.keyword"?: string,
  /** Let Lazada automatically set cost-effective bid prices for your products. */
  "adgroupViewDTOList.bidwordViewDTOList.bidPrice"?: string,
  /** This setting allows you to bid higher on premium audiences that are more likely to convert in your store. */
  "adgroupViewDTOList.audienceViewDTOList"?: Array<Record<string, unknown>>,
  /** 1:on store visitors in the past 15 days;2:on in-market audiences for similar products;3:Store Awareness Audience;4:Store Interest Audience */
  "adgroupViewDTOList.audienceViewDTOList.adCrowdTag"?: number,
  /** The discount you want to give.eg:10 means 10% discount. */
  "adgroupViewDTOList.audienceViewDTOList.discount"?: number,
}
export interface AddAdgroupBatchData {
  "result"?: boolean,
  "success"?: boolean,
  "errorMsg"?: string,
  "analyseTraceId"?: string,
}
export type AddAdgroupBatchResponse = ApiResponse<AddAdgroupBatchData>

export interface AddSolutionRequest {
  /** Decided to choose which advertisement solution.SD:sponsoredSearch. */
  "bizCode": string,
  /** Let Lazada automatically set keyword for your products.1:manual(I want to select keywords manually for my product selection.);2:auto(Let Lazada optimize the keywords relating to your products in real time to maximize the campaigns' performance). */
  "autoKeyword"?: number,
  /** Campaign end date. */
  "endDate": string,
  /** Placements determine where shoppers will see your promoted products.3:Search Result Page;4:Just For You Page */
  "platform": Array<number>,
  /** Lazada automatically set creatives for your products.1:ON;0:OFF. */
  "autoCreative": number,
  /** Your campaign objective helps determine your bidding strategy - Traffic objective helps you to increase the number of clicks to your store, while sales objective helps to increase your store’s sales.1:Traffic;2:Sales. */
  "campaignObjective": number,
  /** Unlock different ways to bids, select products, and keywords with campaign types.1:Standard;2:Smart. */
  "campaignType": number,
  /** Fine granularity to distinguish solutions. */
  "campaignModel": number,
  /** Max bid determines the highest amount that you're willing to pay for a click on your promoted product.String type, -1 means no limit. */
  "maxBid": string,
  /** The way the product be selected.1:manual(I want to select products manually from my store.);2:auto(Let Lazada optimize the products within the campaigns in real-time to maximize the campaigns' performance) */
  "autoItemSelect": number,
  /** Budget indicates the maximum amount you’re willing to pay each day. */
  "dayBudget": string,
  /** Campaign name. */
  "campaignName": string,
  /** Campaign start date. */
  "startDate": string,
  /** Adgroup list. */
  "adgroupViewDTOlistWithFeed": Array<Record<string, unknown>>,
  /** Adgroup name, normally is product name, */
  "adgroupViewDTOlistWithFeed.adgroupName": string,
  /** This is the maximum bid price that you have set for your campaign.When campaignType is 1, this field must be filled. */
  "adgroupViewDTOlistWithFeed.bidPrice"?: string,
  /** Let Lazada automatically set keyword for your products.1:manual(I want to select keywords manually for my product selection.);2:auto(Let Lazada optimize the keywords relating to your products in real time to maximize the campaigns' performance). This must be the same as the campaign. */
  "adgroupViewDTOlistWithFeed.autoKeyword": number,
  /** This setting allows you to bid higher on premium audiences that are more likely to convert in your store. */
  "adgroupViewDTOlistWithFeed.audienceViewDTOList"?: Array<Record<string, unknown>>,
  /** 1:on store visitors in the past 15 days;2:on in-market audiences for similar products;3:Store Awareness Audience;4:Store Interest Audience */
  "adgroupViewDTOlistWithFeed.audienceViewDTOList.adCrowdTag"?: number,
  /** The discount you want to give.eg:10 means 10% discount. */
  "adgroupViewDTOlistWithFeed.audienceViewDTOList.discount"?: number,
  /** Product id. */
  "adgroupViewDTOlistWithFeed.itemId": number,
  /** Bid word list */
  "adgroupViewDTOlistWithFeed.bidwordViewDTOList"?: Array<Record<string, unknown>>,
  /** The specific keyword.eg:shoe. */
  "adgroupViewDTOlistWithFeed.bidwordViewDTOList.keyword"?: string,
  /** This is the maximum bid price that you have set for your campaign. */
  "adgroupViewDTOlistWithFeed.bidwordViewDTOList.bidPrice"?: string,
  /** The way the product be selected.1:manual(I want to select products manually from my store.);2:auto(Let Lazada optimize the products within the campaigns in real-time to maximize the campaigns' performance) */
  "adgroupViewDTOlistWithFeed.autoItemSelect": number,
  /** Let Lazada automatically set creatives for your products.1:ON;0:OFF. This must be the same as the campaign. */
  "adgroupViewDTOlistWithFeed.autoCreative": number,
}
export interface AddSolutionData {
  "success"?: boolean,
  "result"?: Record<string, unknown>,
  "errorMsg"?: string,
  "analyseTraceId"?: string,
}
export type AddSolutionResponse = ApiResponse<AddSolutionData>

export interface ClickserverRequest {
  /** cookie section */
  "cpcClickDO"?: Record<string, unknown>,
  /** //扩展参数 */
  "cpcClickDO.ext"?: string,
  /** referer */
  "cpcClickDO.referer"?: string,
  /** 加密串 */
  "cpcClickDO.e": string,
  /** usertrack section */
  "cpcClickDO.utdId": string,
  /** ip */
  "cpcClickDO.ip": string,
  /** //友盟电商墙app标识 */
  "cpcClickDO.utkey"?: string,
  /** //友盟电商墙设备标识 */
  "cpcClickDO.utsid"?: string,
  /** clickid */
  "cpcClickDO.clickid"?: string,
  /** 使用默认值 */
  "cpcClickDO.userAgent"?: string,
  /** //不能为空,反作弊加密串 */
  "cpcClickDO.accept"?: string,
  /** cookie section */
  "cpcClickDO.cna"?: string,
  /** host */
  "cpcClickDO.host"?: string,
}
export interface ClickserverData {
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
export type ClickserverResponse = ApiResponse<ClickserverData>

export interface DeleteAdgroupBatchRequest {
  /** Decided to choose which advertisement solution.SD:sponsoredSearch. */
  "bizCode": string,
  /** Adgroup id list. */
  "adgroupIdList": Array<number>,
}
export interface DeleteAdgroupBatchData {
  "result"?: boolean,
  "success"?: boolean,
  "errorMsg"?: string,
  "analyseTraceId"?: string,
}
export type DeleteAdgroupBatchResponse = ApiResponse<DeleteAdgroupBatchData>

export interface DeleteCampaignRequest {
  /** Campaign id list. */
  "campaignIdList": Array<number>,
  /** Decided to choose which advertisement solution.SD:sponsoredSearch. */
  "bizCode": string,
}
export interface DeleteCampaignData {
  "result"?: number,
  "success"?: boolean,
  "errorMsg"?: string,
  "analyseTraceId"?: string,
}
export type DeleteCampaignResponse = ApiResponse<DeleteCampaignData>

export interface GetAccountSignInfoRequest {}

export interface GetAccountSignInfoData {
  "result"?: Record<string, unknown>,
  "success"?: boolean,
  "errorMsg"?: string,
  "analyseTraceId"?: string,
}
export type GetAccountSignInfoResponse = ApiResponse<GetAccountSignInfoData>

export interface GetAutoTopUpOptionOneConfigRequest {}

export interface GetAutoTopUpOptionOneConfigData {
  "result"?: {
  "status"?: number,
  "limitAmount"?: string,
  "topUpAmount"?: string,
  },
  "success"?: boolean,
  "errorMsg"?: string,
  "analyseTraceId"?: string,
}
export type GetAutoTopUpOptionOneConfigResponse = ApiResponse<GetAutoTopUpOptionOneConfigData>

export interface GetCampaignRequest {
  /** Discovery:sponsoredSearch */
  "bizCode": string,
  /** 123 */
  "campaignId": number,
}
export interface GetCampaignData {
  "result"?: {
  "endDate"?: string,
  "onlineStatus"?: number,
  "campaignObjective"?: number,
  "campaignType"?: number,
  "campaignId"?: number,
  "budgetUsedAmount"?: number,
  "autoItemSelect"?: number,
  "haveAdCount"?: number,
  "startDate"?: string,
  "switchStatus"?: number,
  "platform"?: Array<number>,
  "sceneId"?: number,
  "autoCreative"?: number,
  "campaignModel"?: number,
  "maxBid"?: string,
  "dayBudget"?: string,
  "campaignName"?: string,
  },
  "success"?: string,
  "errorMsg"?: string,
  "analyseTraceId"?: string,
}
export type GetCampaignResponse = ApiResponse<GetCampaignData>

export interface GetCampaignCountRequest {
  /** Decided to choose which advertisement solution.SD:sponsoredSearch. */
  "bizCode": string,
}
export interface GetCampaignCountData {
  "result"?: number,
  "success"?: boolean,
  "errorMsg"?: string,
  "analyseTraceId"?: string,
}
export type GetCampaignCountResponse = ApiResponse<GetCampaignCountData>

export interface GetDiscoveryReportAdgroupRequest {
  /** Campaign Type,1 standard 2 automated */
  "campaignType"?: string,
  /** Campaign Name, frazzy search */
  "campaignName"?: string,
  /** Campaign Id */
  "campaignId"?: string,
  /** Adgroup Name */
  "adgroupName"?: string,
  /** Adgroup Id */
  "adgroupId"?: string,
  /** Item Id */
  "itemId"?: string,
  /** It means that if endDate have selected today, and you need realtime data,then set useRtTable=true If useRtTable=false,it will not search realtime data */
  "useRtTable"?: boolean,
  /** sort column,we have provide some index to sort */
  "sort"?: string,
  /** Page No，default 1,max=100 */
  "pageNo": string,
  /** Page No, default 10, max=100 */
  "pageSize": string,
  /** ASC or DESC, other String is invalid */
  "order"?: string,
  /** start date, format like yyyy-MM-dd */
  "startDate": string,
  /** end date , date, format like yyyy-MM-dd */
  "endDate": string,
}
export interface GetDiscoveryReportAdgroupData {
  "result"?: Array<{
  "result"?: Array<{
    "dateRange"?: string,
    "productUnitSold"?: number,
    "productCvr"?: string,
    "productOrders"?: number,
    "adgroupId"?: number,
    "adgroupName"?: string,
    "cpc"?: string,
    "spend"?: string,
    "storeUnitSold"?: number,
    "productA2c"?: number,
    "productImageUrl"?: string,
    "ctr"?: string,
    "campaignId"?: number,
    "storeRevenue"?: string,
    "storeCvr"?: string,
    "storeA2c"?: number,
    "storeOrders"?: number,
    "impressions"?: number,
    "bidPrice"?: string,
    "itemId"?: number,
    "storeRoi"?: string,
    "maxBid"?: number,
    "clicks"?: number,
    "productRevenue"?: string,
    "campaignName"?: string,
  }>,
  "errorKey"?: string,
  "errorDTOList"?: Array<Record<string, unknown>>,
  "success"?: boolean,
  "analyseTraceId"?: string,
  "errorCode"?: string,
  "totalCount"?: number,
  "errorMsg"?: string,
  }>,
}
export type GetDiscoveryReportAdgroupResponse = ApiResponse<GetDiscoveryReportAdgroupData>

export interface GetDiscoveryReportAudienceRequest {
  /** Campaign Name */
  "campaignName"?: string,
  /** Campaign Id */
  "campaignId"?: number,
  /** Audienct type 1:15 days Visitors 2:Similar Product Visitors 3:Store Awareness Audience 4:Store Interest Audience 5:DMP Crow Audience 6:Gender 7:Age */
  "audienceGroup"?: number,
  /** sort column,we have provide some index to sort */
  "sort"?: string,
  /** ASC or DESC, other String is invalid */
  "order"?: string,
  /** Page No，default 1,max=100 */
  "pageNo": number,
  /** Page No, default 10, max=100 */
  "pageSize": number,
  /** start date, format like yyyy-MM-dd */
  "startDate": string,
  /** end date , date, format like yyyy-MM-dd */
  "endDate": string,
}
export interface GetDiscoveryReportAudienceData {
  "result"?: Array<{
  "result"?: Array<{
    "productImageUrl"?: string,
    "ctr"?: string,
    "campaignId"?: number,
    "storeRevenue"?: string,
    "storeCvr"?: string,
    "storeA2c"?: number,
    "storeOrders"?: number,
    "productUnitSold"?: number,
    "impressions"?: number,
    "productCvr"?: string,
    "productOrders"?: number,
    "audienceFakeId"?: string,
    "storeRoi"?: string,
    "adgroupId"?: number,
    "audienceGroup"?: number,
    "adgroupName"?: string,
    "cpc"?: string,
    "spend"?: string,
    "clicks"?: number,
    "productRevenue"?: string,
    "storeUnitSold"?: number,
    "campaignName"?: string,
    "productA2c"?: number,
  }>,
  "errorKey"?: string,
  "errorDTOList"?: Array<Record<string, unknown>>,
  "success"?: boolean,
  "analyseTraceId"?: string,
  "errorCode"?: string,
  "totalCount"?: number,
  "errorMsg"?: string,
  }>,
}
export type GetDiscoveryReportAudienceResponse = ApiResponse<GetDiscoveryReportAudienceData>

export interface GetDiscoveryReportCampaignRequest {
  /** Campaign Id */
  "campaignId"?: number,
  /** It means that if endDate have selected today, and you need realtime data,then set useRtTable=true If useRtTable=false,it will not search realtime data */
  "useRtTable"?: boolean,
  /** sort column,we have provide some index to sort */
  "sort"?: string,
  /** ASC or DESC, other String is invalid */
  "order"?: string,
  /** start date, format like yyyy-MM-dd */
  "startDate": string,
  /** end date , date, format like yyyy-MM-dd */
  "endDate": string,
  /** Page No，default 1,max=100 */
  "pageNo": string,
  /** Page No, default 10, max=100 */
  "pageSize": string,
  /** Campaign type, 1 Manual 2 Automated */
  "campaignType"?: number,
  /** Placement , N Sponsored Search, J Sponsored Product */
  "productType"?: string,
  /** campaign name，fuzzy search */
  "campaignName"?: string,
}
export interface GetDiscoveryReportCampaignData {
  "result"?: Array<{
  "result"?: Array<{
    "ctr"?: string,
    "campaignObjective"?: string,
    "campaignType"?: number,
    "campaignId"?: number,
    "storeRevenue"?: string,
    "storeCvr"?: string,
    "storeA2c"?: number,
    "storeOrders"?: number,
    "productUnitSold"?: number,
    "impressions"?: number,
    "productCvr"?: string,
    "productOrders"?: number,
    "storeRoi"?: string,
    "cpc"?: string,
    "spend"?: string,
    "clicks"?: number,
    "productRevenue"?: string,
    "storeUnitSold"?: number,
    "campaignName"?: string,
    "productType"?: string,
    "dayBudget"?: number,
    "productA2c"?: number,
  }>,
  "errorKey"?: string,
  "errorDTOList"?: Array<Record<string, unknown>>,
  "success"?: boolean,
  "analyseTraceId"?: string,
  "errorCode"?: string,
  "totalCount"?: number,
  "errorMsg"?: string,
  }>,
}
export type GetDiscoveryReportCampaignResponse = ApiResponse<GetDiscoveryReportCampaignData>

export interface GetDiscoveryReportKeywordRequest {
  /** Adgroup Name */
  "adgroupName"?: string,
  /** Adgroup Id */
  "adgroupId"?: string,
  /** Keyword */
  "keyword"?: string,
  /** It means that if endDate have selected today, and you need realtime data,then set useRtTable=true If useRtTable=false,it will not search realtime data */
  "useRtTable"?: boolean,
  /** sort column,we have provide some index to sort */
  "sort"?: string,
  /** ASC or DESC, other String is invalid */
  "order"?: string,
  /** Page No，default 1,max=100 */
  "pageNo": string,
  /** Page No, default 10, max=100 */
  "pageSize": string,
  /** start date, format like yyyy-MM-dd */
  "startDate": string,
  /** end date , date, format like yyyy-MM-dd */
  "endDate": string,
  /** Campaign Name */
  "campaignName"?: string,
  /** Campaign Id */
  "campaignId"?: string,
}
export interface GetDiscoveryReportKeywordData {
  "result"?: Array<{
  "result"?: Array<{
    "productImageUrl"?: string,
    "ctr"?: string,
    "keywordId"?: number,
    "campaignId"?: number,
    "storeRevenue"?: string,
    "storeCvr"?: string,
    "storeA2c"?: number,
    "storeOrders"?: number,
    "productUnitSold"?: number,
    "impressions"?: number,
    "productCvr"?: string,
    "productOrders"?: number,
    "storeRoi"?: string,
    "adgroupId"?: number,
    "adgroupName"?: string,
    "cpc"?: string,
    "spend"?: string,
    "maxBid"?: string,
    "storeUnitSold"?: number,
    "clicks"?: number,
    "productRevenue"?: string,
    "keyword"?: string,
    "campaignName"?: string,
    "productA2c"?: number,
  }>,
  "errorKey"?: string,
  "errorDTOList"?: Array<Record<string, unknown>>,
  "success"?: boolean,
  "analyseTraceId"?: string,
  "errorCode"?: string,
  "totalCount"?: number,
  "errorMsg"?: string,
  }>,
}
export type GetDiscoveryReportKeywordResponse = ApiResponse<GetDiscoveryReportKeywordData>

export interface GetLatestSignInfoRequest {}

export interface GetLatestSignInfoData {
  "result"?: Record<string, unknown>,
  "success"?: boolean,
  "errorMsg"?: string,
  "analyseTraceId"?: string,
}
export type GetLatestSignInfoResponse = ApiResponse<GetLatestSignInfoData>

export interface GetReportCampaignOnFIrstSlotRequest {
  /** sort column,we have provide some index to sort */
  "sort"?: string,
  /** ASC or DESC, other String is invalid */
  "order"?: string,
  /** Page No，default 1,max=100 */
  "pageNo": number,
  /** Page Size, default 10, max=100 */
  "pageSize": number,
  /** start date, format like yyyy-MM-dd */
  "startDate": string,
  /** end date , date, format like yyyy-MM-dd */
  "endDate": string,
  /** Campaign Name */
  "campaignName"?: string,
  /** campagnId */
  "campaignId"?: number,
  /** Product Type, N:Sponsored Search(All) F:Firsh Search Slot */
  "productType"?: string,
  /** It means that if endDate have selected today, and you need realtime data,then set useRtTable=true If useRtTable=false,it will not search realtime data */
  "useRtTable"?: boolean,
}
export interface GetReportCampaignOnFIrstSlotData {
  "result"?: Array<{
  "result"?: Array<{
    "ctr"?: string,
    "campaignObjective"?: string,
    "campaignType"?: number,
    "firstImpShare"?: string,
    "campaignId"?: number,
    "storeRevenue"?: string,
    "storeCvr"?: string,
    "storeA2c"?: number,
    "storeOrders"?: number,
    "productUnitSold"?: number,
    "impressions"?: number,
    "productCvr"?: string,
    "productOrders"?: number,
    "storeRoi"?: string,
    "cpc"?: string,
    "spend"?: string,
    "clicks"?: number,
    "productRevenue"?: string,
    "storeUnitSold"?: number,
    "campaignName"?: string,
    "productType"?: string,
    "dayBudget"?: number,
    "productA2c"?: number,
  }>,
  "errorKey"?: string,
  "errorDTOList"?: Array<Record<string, unknown>>,
  "success"?: boolean,
  "analyseTraceId"?: string,
  "errorCode"?: string,
  "totalCount"?: number,
  "errorMsg"?: string,
  }>,
}
export type GetReportCampaignOnFIrstSlotResponse = ApiResponse<GetReportCampaignOnFIrstSlotData>

export interface GetReportOverviewRequest {
  /** - */
  "lastStartDate": string,
  /** - */
  "endDate": string,
  /** - */
  "useRtTable": boolean,
  /** - */
  "bizCode": string,
  /** - */
  "lastEndDate": string,
  /** - */
  "startDate": string,
}
export interface GetReportOverviewData {
  "result"?: {
  "reportOverviewDetailDTO"?: {
    "spend"?: string,
    "impressions"?: number,
    "clicks"?: number,
    "ctr"?: string,
    "unitsSold"?: number,
    "revenue"?: string,
    "cpc"?: string,
    "roi"?: string,
  },
  "lastReportOverviewDetailDTO"?: {
    "spend"?: string,
    "impressions"?: number,
    "clicks"?: number,
    "ctr"?: string,
    "unitsSold"?: number,
    "revenue"?: string,
    "cpc"?: string,
    "roi"?: string,
  },
  },
  "success"?: string,
  "analyseTraceId"?: string,
  "errorMsg"?: string,
}
export type GetReportOverviewResponse = ApiResponse<GetReportOverviewData>

export interface GetReportOverviewMetricRequest {
  /** The type pf metric.1:spend;2:impressions;3:clicks;4:ctr;5:units sold;6:revenue;7:cpc;8:roi;9:store order;10:store a2c;11:product order. */
  "metricType": number,
  /** End date. */
  "endDate": string,
  /** If you need to search data for today, then use true, otherwise false. */
  "useRtTable": boolean,
  /** Decided to choose which advertisement solution.SD:sponsoredSearch. */
  "bizCode": string,
  /** Start date. */
  "startDate": string,
}
export interface GetReportOverviewMetricData {
  "result"?: Array<{
  "dateList"?: Array<number>,
  "hourList"?: Array<number>,
  "metricList"?: Array<string>,
  }>,
  "success"?: string,
  "analyseTraceId"?: string,
  "errorMsg"?: string,
}
export type GetReportOverviewMetricResponse = ApiResponse<GetReportOverviewMetricData>

export interface ListCategoryRequest {
  /** The category parent id. */
  "parentId"?: number,
}
export interface ListCategoryData {
  "result"?: Array<{
  "label"?: string,
  "value"?: number,
  "isLeaf"?: boolean,
  "selectable"?: boolean,
  }>,
  "success"?: boolean,
  "errorMsg"?: string,
  "analyseTraceId"?: string,
}
export type ListCategoryResponse = ApiResponse<ListCategoryData>

export interface ListKeywordByAdgroupRequest {
  /** Your campaign objective helps determine your bidding strategy - Traffic objective helps you to increase the number of clicks to your store, while sales objective helps to increase your store’s sales.1:Traffic;2:Sales. */
  "campaignObjective": number,
  /** Unlock different ways to bids, select products, and keywords with campaign types. */
  "campaignType": number,
  /** Decided to choose which advertisement solution.SD:sponsoredSearch. */
  "bizCode": string,
  /** Product id. */
  "itemId": number,
  /** Adgroup id. */
  "adgroupId": number,
}
export interface ListKeywordByAdgroupData {
  "result"?: Array<{
  "keyword"?: string,
  "relevance"?: number,
  "historicalPV"?: number,
  "suggestedPrice"?: string,
  "currency"?: string,
  "reservePrice"?: string,
  "softLowerLimit"?: string,
  "softUpperLimit"?: string,
  "softUpperLimitType"?: number,
  }>,
  "success"?: string,
  "analyseTraceId"?: string,
  "totalCount"?: number,
  "errorMsg"?: string,
}
export type ListKeywordByAdgroupResponse = ApiResponse<ListKeywordByAdgroupData>

export interface ListKeywordByItemRequest {
  /** Your campaign objective helps determine your bidding strategy - Traffic objective helps you to increase the number of clicks to your store, while sales objective helps to increase your store’s sales.1:Traffic;2:Sales. */
  "campaignObjective": number,
  /** Unlock different ways to bids, select products, and keywords with campaign types. */
  "campaignType": number,
  /** Decided to choose which advertisement solution.SD:sponsoredSearch. */
  "bizCode": string,
  /** Product id. */
  "itemId": number,
}
export interface ListKeywordByItemData {
  "result"?: Array<{
  "keyword"?: string,
  "relevance"?: number,
  "historicalPV"?: number,
  "suggestedPrice"?: string,
  "currency"?: string,
  "reservePrice"?: string,
  "softLowerLimit"?: string,
  "softUpperLimit"?: string,
  "softUpperLimitType"?: number,
  }>,
  "success"?: boolean,
  "errorMsg"?: string,
  "analyseTraceId"?: string,
}
export type ListKeywordByItemResponse = ApiResponse<ListKeywordByItemData>

export interface ModifyAutoTopUpOptionOneConfigRequest {
  /** The option one status.1:ON;0:OFF. */
  "status": number,
  /** If balance is lower than this value, auto topUp operation will be done. */
  "limitAmount": string,
  /** The amount of topUp for each auto topUp. */
  "topupAmount": string,
}
export interface ModifyAutoTopUpOptionOneConfigData {
  "result"?: boolean,
  "success"?: boolean,
  "errorMsg"?: string,
  "analyseTraceId"?: string,
}
export type ModifyAutoTopUpOptionOneConfigResponse = ApiResponse<ModifyAutoTopUpOptionOneConfigData>

export interface SearchAdgroupListRequest {
  /** Page size. */
  "pageSize": number,
  /** Campaign end date. */
  "endDate": string,
  /** Campaign id. */
  "campaignId": number,
  /** Page number. */
  "pageNo": number,
  /** Decided to choose which advertisement solution.SD:sponsoredSearch. */
  "bizCode": string,
  /** Adgroup name for fuzzy search. */
  "adgroupName"?: string,
  /** Campaign start date. */
  "startDate": string,
  /** The campaign online status.1:Online;0:Offline;9:deleted. */
  "onlineStatus"?: number,
}
export interface SearchAdgroupListData {
  "success"?: boolean,
  "errorMsg"?: string,
  "analyseTraceId"?: string,
  "totalCount"?: number,
  "result"?: Array<{
  "adgroupId"?: number,
  "adgroupName"?: string,
  "imageUrl"?: string,
  "bidPrice"?: string,
  "autoCreative"?: number,
  "audienceViewDTOList"?: Array<{
    "adCrowdTag"?: number,
    "discount"?: number,
  }>,
  "spend"?: string,
  "impressions"?: string,
  "clicks"?: string,
  "ctr"?: string,
  "cpc"?: string,
  "storeUnitsSold"?: string,
  "storeRevenue"?: string,
  "storeRoi"?: string,
  "storeOrders"?: string,
  "productOrders"?: string,
  "unitsSold"?: string,
  "revenue"?: string,
  "status"?: number,
  "adAccountBalanceStatus"?: number,
  "adApproveStatus"?: number,
  "adSwitchStatus"?: number,
  "campaignDailyBudgetStatus"?: number,
  "campaignScheduleStatus"?: number,
  "campaignSwitchStatus"?: number,
  "productEligibleStatus"?: number,
  "productStockStatus"?: number,
  "sellerEligibleStatus"?: number,
  "itemId"?: number,
  }>,
}
export type SearchAdgroupListResponse = ApiResponse<SearchAdgroupListData>

export interface SearchCampaignListRequest {
  /** Decided to choose which advertisement solution.SD:sponsoredSearch. */
  "bizCode": string,
  /** The campaign online status.1:Online;0:Offline;9:deleted. */
  "onlineStatus"?: number,
  /** Campaign start date. */
  "startDate": string,
  /** Campaign end date. */
  "endDate": string,
  /** Page number. */
  "pageNo": string,
  /** Page size. */
  "pageSize": string,
}
export interface SearchCampaignListData {
  "success"?: boolean,
  "totalCount"?: number,
  "errorMsg"?: string,
  "analyseTraceId"?: string,
  "result"?: Array<{
  "impressions"?: string,
  "clicks"?: string,
  "ctr"?: string,
  "cpc"?: string,
  "storeUnitsSold"?: string,
  "storeOrders"?: string,
  "storeRevenue"?: string,
  "storeRoi"?: string,
  "campaignId"?: number,
  "campaignName"?: string,
  "dailyBudget"?: string,
  "startDate"?: string,
  "endDate"?: string,
  "status"?: string,
  "adAccountBalanceStatus"?: string,
  "campaignDailyBudgetStatus"?: string,
  "campaignScheduleStatus"?: string,
  "campaignSwitchStatus"?: string,
  "haveActiveAdStatus"?: string,
  "spend"?: string,
  }>,
}
export type SearchCampaignListResponse = ApiResponse<SearchCampaignListData>

export interface SearchKeywordRequest {
  /** Your campaign objective helps determine your bidding strategy - Traffic objective helps you to increase the number of clicks to your store, while sales objective helps to increase your store’s sales.1:Traffic;2:Sales. */
  "campaignObjective": number,
  /** Unlock different ways to bids, select products, and keywords with campaign types. */
  "campaignType": number,
  /** Decided to choose which advertisement solution.SD:sponsoredSearch. */
  "bizCode": string,
  /** The word you do not want to put in the result. */
  "itemQuery": string,
  /** Product id. */
  "itemId": number,
  /** The specific word. */
  "searchWord": string,
}
export interface SearchKeywordData {
  "result"?: Array<{
  "keyword"?: string,
  "relevance"?: number,
  "historicalPV"?: number,
  "suggestedPrice"?: string,
  "currency"?: string,
  "reservePrice"?: string,
  "softLowerLimit"?: string,
  "softUpperLimit"?: string,
  "softUpperLimitType"?: number,
  }>,
  "success"?: boolean,
  "analyseTraceId"?: string,
  "totalCount"?: number,
  "errorMsg"?: string,
}
export type SearchKeywordResponse = ApiResponse<SearchKeywordData>

export interface SearchProductWithPageRequest {
  /** Prodct brand name. */
  "brandName"?: string,
  /** Unlock different ways to bids, select products, and keywords with campaign types. */
  "campaignType": number,
  /** Page size. */
  "pageSize": number,
  /** Decided to choose which advertisement solution.SD:sponsoredSearch. */
  "bizCode": string,
  /** Placements determine where shoppers will see your promoted products.3:Search Result Page;4:Just For You Page */
  "placementList": Array<number>,
  /** Product name to fuzzy search. */
  "productName"?: string,
  /** Your campaign objective helps determine your bidding strategy - Traffic objective helps you to increase the number of clicks to your store, while sales objective helps to increase your store’s sales.1:Traffic;2:Sales. */
  "campaignObjectLive": number,
  /** Only search product which is eligible\ */
  "eligible": number,
  /** Page number. */
  "pageNo": number,
  /** Product sellerSku. */
  "sellerSku"?: string,
  /** Max bid determines the highest amount that you're willing to pay for a click on your promoted product.-1 means no limit. */
  "maxCpc": string,
  /** Input category id to exact search. */
  "categoryId"?: number,
  /** Input item id which you do not want put into result. */
  "itemIdBlackList"?: Array<number>,
}
export interface SearchProductWithPageData {
  "result"?: Array<{
  "itemId"?: number,
  "productName"?: string,
  "imageUrl"?: string,
  "pdpLink"?: string,
  "categoryId"?: number,
  "bidPrice"?: string,
  "competitionIndex"?: number,
  "avgSalesVolume"?: number,
  "retailPrice"?: string,
  "inventory"?: number,
  "ipv"?: string,
  "cvr"?: string,
  "contentScore"?: number,
  "isBan"?: boolean,
  "isDigitalUtilities"?: boolean,
  "tags"?: Array<string>,
  }>,
  "success"?: boolean,
  "analyseTraceId"?: string,
  "totalCount"?: number,
  "errorMsg"?: string,
}
export type SearchProductWithPageResponse = ApiResponse<SearchProductWithPageData>

export interface SignRequest {}

export interface SignData {
  "result"?: Record<string, unknown>,
  "success"?: boolean,
  "errorMsg"?: string,
  "analyseTraceId"?: string,
}
export type SignResponse = ApiResponse<SignData>

export interface UpdateAdgroupBatchRequest {
  /** Decided to choose which advertisement solution.SD:sponsoredSearch. */
  "bizCode": string,
  /** Adgroup list */
  "adgroupViewDTOList": Array<Record<string, unknown>>,
  /** Adgroup id. */
  "adgroupViewDTOList.adgroupId": number,
  /** Is the adgroup online rightnow.1:ON:0:OFF. */
  "adgroupViewDTOList.switchStatus": string,
}
export interface UpdateAdgroupBatchData {
  "result"?: boolean,
  "success"?: boolean,
  "errorMsg"?: string,
  "analyseTraceId"?: string,
}
export type UpdateAdgroupBatchResponse = ApiResponse<UpdateAdgroupBatchData>

export interface UpdateCampaignRequest {
  /** Campaign id. */
  "campaignId": number,
  /** Campaign name. */
  "campaignName"?: string,
  /** Campaign start date. */
  "startDate"?: string,
  /** Campaign end date. */
  "endDate"?: string,
  /** Budget indicates the maximum amount you’re willing to pay each day. */
  "dayBudget"?: string,
  /** Decided to choose which advertisement solution.SD:sponsoredSearch. */
  "bizCode": string,
  /** Campaign swtich status.1:Online;0:Offline. */
  "switchStatus"?: number,
}
export interface UpdateCampaignData {
  "result"?: Record<string, unknown>,
  "success"?: boolean,
  "errorMsg"?: string,
  "analyseTraceId"?: string,
}
export type UpdateCampaignResponse = ApiResponse<UpdateCampaignData>


export class LazadaSponsoredSolutionsAPIApi {
  constructor(private client: LazadaClient) {}

  /**
   * addAdgroupBatch
   * /sponsor/solutions/adgroup/addAdgroupBatch (GET)
   */
  async addAdgroupBatch(params: AddAdgroupBatchRequest, opts?: LazadaRequestOptions): Promise<AddAdgroupBatchResponse> {
    return this.client.request({"method":"GET","path":"/sponsor/solutions/adgroup/addAdgroupBatch","params":["campaignId","bizCode","adgroupViewDTOList","adgroupViewDTOList.adgroupName","adgroupViewDTOList.autoItemSelect","adgroupViewDTOList.bidPrice","adgroupViewDTOList.itemId","adgroupViewDTOList.autoCreative","adgroupViewDTOList.autoKeyword","adgroupViewDTOList.bidwordViewDTOList","adgroupViewDTOList.bidwordViewDTOList.keyword","adgroupViewDTOList.bidwordViewDTOList.bidPrice","adgroupViewDTOList.audienceViewDTOList","adgroupViewDTOList.audienceViewDTOList.adCrowdTag","adgroupViewDTOList.audienceViewDTOList.discount"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * addSolution
   * /sponsor/solutions/addSolution (POST)
   */
  async addSolution(params: AddSolutionRequest, opts?: LazadaRequestOptions): Promise<AddSolutionResponse> {
    return this.client.request({"method":"POST","path":"/sponsor/solutions/addSolution","params":["bizCode","autoKeyword","endDate","platform","autoCreative","campaignObjective","campaignType","campaignModel","maxBid","autoItemSelect","dayBudget","campaignName","startDate","adgroupViewDTOlistWithFeed","adgroupViewDTOlistWithFeed.adgroupName","adgroupViewDTOlistWithFeed.bidPrice","adgroupViewDTOlistWithFeed.autoKeyword","adgroupViewDTOlistWithFeed.audienceViewDTOList","adgroupViewDTOlistWithFeed.audienceViewDTOList.adCrowdTag","adgroupViewDTOlistWithFeed.audienceViewDTOList.discount","adgroupViewDTOlistWithFeed.itemId","adgroupViewDTOlistWithFeed.bidwordViewDTOList","adgroupViewDTOlistWithFeed.bidwordViewDTOList.keyword","adgroupViewDTOlistWithFeed.bidwordViewDTOList.bidPrice","adgroupViewDTOlistWithFeed.autoItemSelect","adgroupViewDTOlistWithFeed.autoCreative"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * clickserver
   * /gproject/ads/aidc/click (GET)
   */
  async clickserver(params: ClickserverRequest, opts?: LazadaRequestOptions): Promise<ClickserverResponse> {
    return this.client.request({"method":"GET","path":"/gproject/ads/aidc/click","params":["cpcClickDO","cpcClickDO.ext","cpcClickDO.referer","cpcClickDO.e","cpcClickDO.utdId","cpcClickDO.ip","cpcClickDO.utkey","cpcClickDO.utsid","cpcClickDO.clickid","cpcClickDO.userAgent","cpcClickDO.accept","cpcClickDO.cna","cpcClickDO.host"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * deleteAdgroupBatch
   * /sponsor/solutions/adgroup/deleteAdgroupBatch (GET)
   */
  async deleteAdgroupBatch(params: DeleteAdgroupBatchRequest, opts?: LazadaRequestOptions): Promise<DeleteAdgroupBatchResponse> {
    return this.client.request({"method":"GET","path":"/sponsor/solutions/adgroup/deleteAdgroupBatch","params":["bizCode","adgroupIdList"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * deleteCampaign
   * /sponsor/solutions/campaign/deleteCampaign (GET)
   */
  async deleteCampaign(params: DeleteCampaignRequest, opts?: LazadaRequestOptions): Promise<DeleteCampaignResponse> {
    return this.client.request({"method":"GET","path":"/sponsor/solutions/campaign/deleteCampaign","params":["campaignIdList","bizCode"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * getAccountSignInfo
   * /sponsor/solutions/account/getAccountSignInfo (GET)
   */
  async getAccountSignInfo(params: GetAccountSignInfoRequest, opts?: LazadaRequestOptions): Promise<GetAccountSignInfoResponse> {
    return this.client.request({"method":"GET","path":"/sponsor/solutions/account/getAccountSignInfo","params":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * getAutoTopUpOptionOneConfig
   * /sponsor/solutions/wallet/getAutoTopUpOptionOneConfig (GET)
   */
  async getAutoTopUpOptionOneConfig(params: GetAutoTopUpOptionOneConfigRequest, opts?: LazadaRequestOptions): Promise<GetAutoTopUpOptionOneConfigResponse> {
    return this.client.request({"method":"GET","path":"/sponsor/solutions/wallet/getAutoTopUpOptionOneConfig","params":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * getCampaign
   * /sponsor/solutions/campaign/getCampaign (GET)
   */
  async getCampaign(params: GetCampaignRequest, opts?: LazadaRequestOptions): Promise<GetCampaignResponse> {
    return this.client.request({"method":"GET","path":"/sponsor/solutions/campaign/getCampaign","params":["bizCode","campaignId"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * getCampaignCount
   * /sponsor/solutions/campaign/getCampaignCount (GET)
   */
  async getCampaignCount(params: GetCampaignCountRequest, opts?: LazadaRequestOptions): Promise<GetCampaignCountResponse> {
    return this.client.request({"method":"GET","path":"/sponsor/solutions/campaign/getCampaignCount","params":["bizCode"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * getDiscoveryReportAdgroup
   * /sponsor/solutions/report/getDiscoveryReportAdgroup (GET)
   */
  async getDiscoveryReportAdgroup(params: GetDiscoveryReportAdgroupRequest, opts?: LazadaRequestOptions): Promise<GetDiscoveryReportAdgroupResponse> {
    return this.client.request({"method":"GET","path":"/sponsor/solutions/report/getDiscoveryReportAdgroup","params":["campaignType","campaignName","campaignId","adgroupName","adgroupId","itemId","useRtTable","sort","pageNo","pageSize","order","startDate","endDate"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * getDiscoveryReportAudience
   * /sponsor/solutions/report/getDiscoveryReportAudience (GET)
   */
  async getDiscoveryReportAudience(params: GetDiscoveryReportAudienceRequest, opts?: LazadaRequestOptions): Promise<GetDiscoveryReportAudienceResponse> {
    return this.client.request({"method":"GET","path":"/sponsor/solutions/report/getDiscoveryReportAudience","params":["campaignName","campaignId","audienceGroup","sort","order","pageNo","pageSize","startDate","endDate"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * getDiscoveryReportCampaign
   * /sponsor/solutions/report/getDiscoveryReportCampaign (GET)
   */
  async getDiscoveryReportCampaign(params: GetDiscoveryReportCampaignRequest, opts?: LazadaRequestOptions): Promise<GetDiscoveryReportCampaignResponse> {
    return this.client.request({"method":"GET","path":"/sponsor/solutions/report/getDiscoveryReportCampaign","params":["campaignId","useRtTable","sort","order","startDate","endDate","pageNo","pageSize","campaignType","productType","campaignName"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * getDiscoveryReportKeyword
   * /sponsor/solutions/report/getDiscoveryReportKeyword (GET)
   */
  async getDiscoveryReportKeyword(params: GetDiscoveryReportKeywordRequest, opts?: LazadaRequestOptions): Promise<GetDiscoveryReportKeywordResponse> {
    return this.client.request({"method":"GET","path":"/sponsor/solutions/report/getDiscoveryReportKeyword","params":["adgroupName","adgroupId","keyword","useRtTable","sort","order","pageNo","pageSize","startDate","endDate","campaignName","campaignId"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * getLatestSignInfo
   * /sponsor/solutions/account/getLatestSignInfo (GET)
   */
  async getLatestSignInfo(params: GetLatestSignInfoRequest, opts?: LazadaRequestOptions): Promise<GetLatestSignInfoResponse> {
    return this.client.request({"method":"GET","path":"/sponsor/solutions/account/getLatestSignInfo","params":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * getReportCampaignOnFIrstSlot
   * /sponsor/solutions/report/getReportCampaignOnPrePlacement (GET)
   */
  async getReportCampaignOnFIrstSlot(params: GetReportCampaignOnFIrstSlotRequest, opts?: LazadaRequestOptions): Promise<GetReportCampaignOnFIrstSlotResponse> {
    return this.client.request({"method":"GET","path":"/sponsor/solutions/report/getReportCampaignOnPrePlacement","params":["sort","order","pageNo","pageSize","startDate","endDate","campaignName","campaignId","productType","useRtTable"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * getReportOverview
   * /sponsor/solutions/report/getReportOverview (GET)
   */
  async getReportOverview(params: GetReportOverviewRequest, opts?: LazadaRequestOptions): Promise<GetReportOverviewResponse> {
    return this.client.request({"method":"GET","path":"/sponsor/solutions/report/getReportOverview","params":["lastStartDate","endDate","useRtTable","bizCode","lastEndDate","startDate"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * getReportOverviewMetric
   * /sponsor/solutions/report/getReportOverviewMetric (GET)
   */
  async getReportOverviewMetric(params: GetReportOverviewMetricRequest, opts?: LazadaRequestOptions): Promise<GetReportOverviewMetricResponse> {
    return this.client.request({"method":"GET","path":"/sponsor/solutions/report/getReportOverviewMetric","params":["metricType","endDate","useRtTable","bizCode","startDate"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * listCategory
   * /sponsor/solutions/category/listCategory (GET)
   */
  async listCategory(params: ListCategoryRequest, opts?: LazadaRequestOptions): Promise<ListCategoryResponse> {
    return this.client.request({"method":"GET","path":"/sponsor/solutions/category/listCategory","params":["parentId"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * listKeywordByAdgroup
   * /sponsor/solutions/keyword/listKeywordByAdgroup (GET)
   */
  async listKeywordByAdgroup(params: ListKeywordByAdgroupRequest, opts?: LazadaRequestOptions): Promise<ListKeywordByAdgroupResponse> {
    return this.client.request({"method":"GET","path":"/sponsor/solutions/keyword/listKeywordByAdgroup","params":["campaignObjective","campaignType","bizCode","itemId","adgroupId"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * listKeywordByItem
   * /sponsor/solutions/keyword/listKeywordByItem (GET)
   */
  async listKeywordByItem(params: ListKeywordByItemRequest, opts?: LazadaRequestOptions): Promise<ListKeywordByItemResponse> {
    return this.client.request({"method":"GET","path":"/sponsor/solutions/keyword/listKeywordByItem","params":["campaignObjective","campaignType","bizCode","itemId"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * modifyAutoTopUpOptionOneConfig
   * /sponsor/solutions/wallet/modifyAutoTopUpOptionOneConfig (GET)
   */
  async modifyAutoTopUpOptionOneConfig(params: ModifyAutoTopUpOptionOneConfigRequest, opts?: LazadaRequestOptions): Promise<ModifyAutoTopUpOptionOneConfigResponse> {
    return this.client.request({"method":"GET","path":"/sponsor/solutions/wallet/modifyAutoTopUpOptionOneConfig","params":["status","limitAmount","topupAmount"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * searchAdgroupList
   * /sponsor/solutions/adgroup/searchAdgroupList (GET)
   */
  async searchAdgroupList(params: SearchAdgroupListRequest, opts?: LazadaRequestOptions): Promise<SearchAdgroupListResponse> {
    return this.client.request({"method":"GET","path":"/sponsor/solutions/adgroup/searchAdgroupList","params":["pageSize","endDate","campaignId","pageNo","bizCode","adgroupName","startDate","onlineStatus"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * searchCampaignList
   * /sponsor/solutions/campaign/searchCampaignList (GET)
   */
  async searchCampaignList(params: SearchCampaignListRequest, opts?: LazadaRequestOptions): Promise<SearchCampaignListResponse> {
    return this.client.request({"method":"GET","path":"/sponsor/solutions/campaign/searchCampaignList","params":["bizCode","onlineStatus","startDate","endDate","pageNo","pageSize"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * searchKeyword
   * /sponsor/solutions/keyword/searchKeyword (GET)
   */
  async searchKeyword(params: SearchKeywordRequest, opts?: LazadaRequestOptions): Promise<SearchKeywordResponse> {
    return this.client.request({"method":"GET","path":"/sponsor/solutions/keyword/searchKeyword","params":["campaignObjective","campaignType","bizCode","itemQuery","itemId","searchWord"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * searchProductWithPage
   * /sponsor/solutions/product/searchProductWithPage (GET)
   */
  async searchProductWithPage(params: SearchProductWithPageRequest, opts?: LazadaRequestOptions): Promise<SearchProductWithPageResponse> {
    return this.client.request({"method":"GET","path":"/sponsor/solutions/product/searchProductWithPage","params":["brandName","campaignType","pageSize","bizCode","placementList","productName","campaignObjectLive","eligible","pageNo","sellerSku","maxCpc","categoryId","itemIdBlackList"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * sign
   * /sponsor/solutions/account/sign (GET)
   */
  async sign(params: SignRequest, opts?: LazadaRequestOptions): Promise<SignResponse> {
    return this.client.request({"method":"GET","path":"/sponsor/solutions/account/sign","params":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * updateAdgroupBatch
   * /sponsor/solutions/adgroup/updateAdgroupBatch (GET)
   */
  async updateAdgroupBatch(params: UpdateAdgroupBatchRequest, opts?: LazadaRequestOptions): Promise<UpdateAdgroupBatchResponse> {
    return this.client.request({"method":"GET","path":"/sponsor/solutions/adgroup/updateAdgroupBatch","params":["bizCode","adgroupViewDTOList","adgroupViewDTOList.adgroupId","adgroupViewDTOList.switchStatus"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * updateCampaign
   * /sponsor/solutions/campaign/updateCampaign (GET)
   */
  async updateCampaign(params: UpdateCampaignRequest, opts?: LazadaRequestOptions): Promise<UpdateCampaignResponse> {
    return this.client.request({"method":"GET","path":"/sponsor/solutions/campaign/updateCampaign","params":["campaignId","campaignName","startDate","endDate","dayBudget","bizCode","switchStatus"]}, params as unknown as Record<string, unknown>, opts)
  }
}
