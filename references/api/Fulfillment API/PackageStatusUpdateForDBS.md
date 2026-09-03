---
title: PackageStatusUpdateForDBS
category: Fulfillment API
api_name: PackageStatusUpdateForDBS
method: POST
path: /order/package/sof/status/update
---

**Category:** Fulfillment API
**API:** PackageStatusUpdateForDBS

**Method:** POST
**HTTP Path:** /order/package/sof/status/update

## API Description
DBS package status update. This interface is only open to some stores

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
| trackingNumber | String | Yes | waybill no |
| source | String | Yes | OPENAPI |
| carrierCode | String | No | SF |
| tag | String | Yes | package no |
| trackInfo | Object | Yes | track info |
| trackInfo.latestStatus | Object | Yes | latest status |
| trackInfo.latestStatus.status | String | Yes | status |
| trackInfo.latestStatus.subStatus | String | Yes | subStatus |
| trackInfo.latestStatus.subStatusDesc | String | No | subStatusDesc |
| trackInfo.latestEvent | Object | Yes | latestEvent |
| trackInfo.latestEvent.eventTime | Number | Yes | 1723012167919 |
| trackInfo.latestEvent.description | String | No | description |
| trackInfo.latestEvent.location | String | No | location |
| trackInfo.latestEvent.stage | String | No | stage |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| success | Boolean | No | api result |
| module | Object | No | content |
| module.result | Boolean | No | business result |
| errorCode | Object | No | error msesage |
| errorCode.displayMessage | String | No | error msesage |

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
  "id": 123856,
  "apiId": "4350",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "success",
  "parentId": 123855,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.Boolean",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "api result"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "2",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "module",
  "demo": "content",
  "required": false,
  "paramType": "4",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "result",
      "demo": "true",
      "required": false,
      "paramType": "3",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 123858,
      "apiId": "4350",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "result",
      "parentId": 123857,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.Boolean",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "business result"
    }
  ],
  "maxListSize": "",
  "id": 123857,
  "apiId": "4350",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "module",
  "parentId": 123855,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "com.lazada.fulfillment.detail.api.response.OrderUpdateByOpenApiResponse",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "content"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "2",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "errorCode",
  "demo": "error msesage",
  "required": false,
  "paramType": "4",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "displayMessage",
      "demo": "error msesage",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 123860,
      "apiId": "4350",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "displayMessage",
      "parentId": 123859,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "error msesage"
    }
  ],
  "maxListSize": "",
  "id": 123859,
  "apiId": "4350",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "errorCode",
  "parentId": 123855,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "com.alibaba.ecommerce.error.ErrorCode",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "error msesage"
}
```
