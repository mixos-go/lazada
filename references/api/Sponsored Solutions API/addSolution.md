---
title: addSolution
category: Sponsored Solutions API
api_name: addSolution
method: POST
path: /sponsor/solutions/addSolution
---

**Category:** Sponsored Solutions API
**API:** addSolution

**Method:** POST
**HTTP Path:** /sponsor/solutions/addSolution

## API Description
Add sponsor solution

## Common Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| app_key | String | Yes | Unique app ID issued by LAZADA Open Platform console when you apply for an app category |
| timestamp | String | Yes | The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time |
| access_token | String | Yes | API interface call credentials |
| sign_method | String | Yes | The HMAC hash algorithm you are using to calculate your signature |
| sign | String | Yes | Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details) |

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| bizCode | String | Yes | Decided to choose which advertisement solution.SD:sponsoredSearch. |
| autoKeyword | Number | No | Let Lazada automatically set keyword for your products.1:manual(I want to select keywords manually for my product selection.);2:auto(Let Lazada optimize the keywords relating to your products in real time to maximize the campaigns' performance). |
| endDate | String | Yes | Campaign end date. |
| platform | Number[] | Yes | Placements determine where shoppers will see your promoted products.3:Search Result Page;4:Just For You Page |
| autoCreative | Number | Yes | Lazada automatically set creatives for your products.1:ON;0:OFF. |
| campaignObjective | Number | Yes | Your campaign objective helps determine your bidding strategy - Traffic objective helps you to increase the number of clicks to your store, while sales objective helps to increase your store’s sales.1:Traffic;2:Sales. |
| campaignType | Number | Yes | Unlock different ways to bids, select products, and keywords with campaign types.1:Standard;2:Smart. |
| campaignModel | Number | Yes | Fine granularity to distinguish solutions. |
| maxBid | String | Yes | Max bid determines the highest amount that you're willing to pay for a click on your promoted product.String type, -1 means no limit. |
| autoItemSelect | Number | Yes | The way the product be selected.1:manual(I want to select products manually from my store.);2:auto(Let Lazada optimize the products within the campaigns in real-time to maximize the campaigns' performance) |
| dayBudget | String | Yes | Budget indicates the maximum amount you’re willing to pay each day. |
| campaignName | String | Yes | Campaign name. |
| startDate | String | Yes | Campaign start date. |
| adgroupViewDTOlistWithFeed | Object[] | Yes | Adgroup list. |
| adgroupViewDTOlistWithFeed.adgroupName | String | Yes | Adgroup name, normally is product name, |
| adgroupViewDTOlistWithFeed.bidPrice | String | No | This is the maximum bid price that you have set for your campaign.When campaignType is 1, this field must be filled. |
| adgroupViewDTOlistWithFeed.autoKeyword | Number | Yes | Let Lazada automatically set keyword for your products.1:manual(I want to select keywords manually for my product selection.);2:auto(Let Lazada optimize the keywords relating to your products in real time to maximize the campaigns' performance). This must be the same as the campaign. |
| adgroupViewDTOlistWithFeed.audienceViewDTOList | Object[] | No | This setting allows you to bid higher on premium audiences that are more likely to convert in your store. |
| adgroupViewDTOlistWithFeed.audienceViewDTOList.adCrowdTag | Number | No | 1:on store visitors in the past 15 days;2:on in-market audiences for similar products;3:Store Awareness Audience;4:Store Interest Audience |
| adgroupViewDTOlistWithFeed.audienceViewDTOList.discount | Number | No | The discount you want to give.eg:10 means 10% discount. |
| adgroupViewDTOlistWithFeed.itemId | Number | Yes | Product id. |
| adgroupViewDTOlistWithFeed.bidwordViewDTOList | Object[] | No | Bid word list |
| adgroupViewDTOlistWithFeed.bidwordViewDTOList.keyword | String | No | The specific keyword.eg:shoe. |
| adgroupViewDTOlistWithFeed.bidwordViewDTOList.bidPrice | String | No | This is the maximum bid price that you have set for your campaign. |
| adgroupViewDTOlistWithFeed.autoItemSelect | Number | Yes | The way the product be selected.1:manual(I want to select products manually from my store.);2:auto(Let Lazada optimize the products within the campaigns in real-time to maximize the campaigns' performance) |
| adgroupViewDTOlistWithFeed.autoCreative | Number | Yes | Let Lazada automatically set creatives for your products.1:ON;0:OFF. This must be the same as the campaign. |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| success | Boolean | No | System result for this api call. |
| result | Object | No | The detail result, for this api is boolean. |
| errorMsg | String | No | If the api call failed, this field will show the detail reason. |
| analyseTraceId | String | No | If the api call failed, you could find us with this. |

## Endpoints (by region)
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| Vietnam |  |  | https://api.lazada.vn/rest |
| Singapore |  |  | https://api.lazada.sg/rest |
| Philippines |  |  | https://api.lazada.com.ph/rest |
| Malaysia |  |  | https://api.lazada.com.my/rest |
| Thailand |  |  | https://api.lazada.co.th/rest |
| Indonesia |  |  | https://api.lazada.co.id/rest |

## Examples
```json
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "success",
  "demo": "true",
  "required": false,
  "paramType": "3",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 93371,
  "apiId": "3298",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "success",
  "parentId": 93370,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.Boolean",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "System result for this api call."
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "2",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "result",
  "demo": "{}",
  "required": false,
  "paramType": "4",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 93372,
  "apiId": "3298",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "result",
  "parentId": 93370,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.Object",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "The detail result, for this api is boolean."
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "errorMsg",
  "demo": "invalid",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 93373,
  "apiId": "3298",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "errorMsg",
  "parentId": 93370,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "If the api call failed, this field will show the detail reason."
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "analyseTraceId",
  "demo": "...",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 93374,
  "apiId": "3298",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "analyseTraceId",
  "parentId": 93370,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "If the api call failed, you could find us with this."
}
```
