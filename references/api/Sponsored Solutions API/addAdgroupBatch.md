---
title: addAdgroupBatch
category: Sponsored Solutions API
api_name: addAdgroupBatch
method: GET/POST
path: /sponsor/solutions/adgroup/addAdgroupBatch
---

**Category:** Sponsored Solutions API
**API:** addAdgroupBatch

**Method:** GET/POST
**HTTP Path:** /sponsor/solutions/adgroup/addAdgroupBatch

## API Description
Do add adgroup for one campaign.

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
| campaignId | Number | Yes | Campaign id which you want to add into. |
| bizCode | String | Yes | Decided to choose which advertisement solution.SD:sponsoredSearch. |
| adgroupViewDTOList | Object[] | Yes | Adgroup list |
| adgroupViewDTOList.adgroupName | String | Yes | The adgroup name, normanlly is the product name. |
| adgroupViewDTOList.autoItemSelect | String | Yes | The way the product be selected.1:manual(I want to select products manually from my store.);2:auto(Let Lazada optimize the products within the campaigns in real-time to maximize the campaigns' performance).This must be the same as the campaign. |
| adgroupViewDTOList.bidPrice | String | Yes | Let Lazada automatically set cost-effective bid prices for your products. |
| adgroupViewDTOList.itemId | Number | Yes | Product id. |
| adgroupViewDTOList.autoCreative | Number | Yes | Let Lazada automatically set creatives for your products.1:ON;0:OFF.This must be the same as the campaign. |
| adgroupViewDTOList.autoKeyword | Number | Yes | Let Lazada automatically set keyword for your products.1:manual(I want to select keywords manually for my product selection.);2:auto(Let Lazada optimize the keywords relating to your products in real time to maximize the campaigns' performance).This must be the same as the campaign. |
| adgroupViewDTOList.bidwordViewDTOList | Object[] | No | Bid word list |
| adgroupViewDTOList.bidwordViewDTOList.keyword | String | No | The specific keyword.eg:shoe. |
| adgroupViewDTOList.bidwordViewDTOList.bidPrice | String | No | Let Lazada automatically set cost-effective bid prices for your products. |
| adgroupViewDTOList.audienceViewDTOList | Object[] | No | This setting allows you to bid higher on premium audiences that are more likely to convert in your store. |
| adgroupViewDTOList.audienceViewDTOList.adCrowdTag | Number | No | 1:on store visitors in the past 15 days;2:on in-market audiences for similar products;3:Store Awareness Audience;4:Store Interest Audience |
| adgroupViewDTOList.audienceViewDTOList.discount | Number | No | The discount you want to give.eg:10 means 10% discount. |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| result | Boolean | Yes | The detail result, for this api is boolean. |
| success | Boolean | Yes | System result for this api call. |
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
  "hitLog": null,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "result",
  "demo": "true",
  "required": true,
  "paramType": "3",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 89755,
  "apiId": "3177",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "result",
  "parentId": 89754,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.Boolean",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "The detail result, for this api is boolean."
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": null,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "success",
  "demo": "true",
  "required": true,
  "paramType": "3",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 89756,
  "apiId": "3177",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "success",
  "parentId": 89754,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.Boolean",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "System result for this api call."
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "errorMsg",
  "demo": "invalid param",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 89757,
  "apiId": "3177",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "errorMsg",
  "parentId": 89754,
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
  "demo": "-",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 89758,
  "apiId": "3177",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "analyseTraceId",
  "parentId": 89754,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "If the api call failed, you could find us with this."
}
```
