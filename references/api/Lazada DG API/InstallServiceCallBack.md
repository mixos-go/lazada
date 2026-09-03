---
title: InstallServiceCallBack
category: Lazada DG API
api_name: InstallServiceCallBack
method: GET/POST
path: /digital/install/servicecallback
---

**Category:** Lazada DG API
**API:** InstallServiceCallBack

**Method:** GET/POST
**HTTP Path:** /digital/install/servicecallback

## API Description
Install the service callback interface

## Common Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| app_key | String | Yes | Unique app ID issued by LAZADA Open Platform console when you apply for an app category |
| timestamp | String | Yes | The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time |
| access_token | String | No | API interface call credentials |
| sign_method | String | Yes | The HMAC hash algorithm you are using to calculate your signature |
| sign | String | Yes | Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details) |

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| orderNo | String | Yes | service provider company orderId |
| thirdOrderNo | String | Yes | LZD orderLineId |
| type | String | Yes | type = 1 (mean install sevice finish) type = 2(mean install update). type =3 (mean cancel install service) |
| servicePrice | String | No | install service price |
| serviceDate | String | No | install service date |
| jobStatus | String | No | The installation status of the external company |
| jobReason | String | No | Reasons for success or failure |
| extendInfo | String | No | extendInfo |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| resultCode | String | No | result code |
| resultMsg | String | No | result message |
| transactionId | String | No | LZD orderLineId |
| extendInfo | String | No | extendInfo |

## Endpoints (by region)
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| Vietnam |  |  | https://api.lazada.vn/rest |
| Singapore |  |  | https://api.lazada.sg/rest |
| Philippines |  |  | https://api.lazada.com.ph/rest |
| Malaysia |  |  | https://api.lazada.com.my/rest |
| Thailand |  |  | https://api.lazada.co.th/rest |
| Indonesia |  |  | https://api.lazada.co.id/rest |

## Error Codes
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| 00 |  |  | transaction success |
| 01 |  |  | cancel success |
| 02 |  |  | update serviceDate success |
| 99 |  |  | fail |
| 11 |  |  | orderNo is empty |
| 12 |  |  | thirdOrderNo is empty |
| 13 |  |  | type is empty |
| 14 |  |  | type not exist |
| 15 |  |  | servicePrice is empty |
| 16 |  |  | jobStatus is empty |
| 17 |  |  | serviceDate is empty |
| 21 |  |  | order processing |
| 31 |  |  | parse extendInfo to map fail |
| 32 |  |  | date format is wrong |

## Examples
```json
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "resultCode",
  "demo": "00",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 126384,
  "apiId": "4414",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "resultCode",
  "parentId": 126383,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "result code"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "resultMsg",
  "demo": "success",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 126385,
  "apiId": "4414",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "resultMsg",
  "parentId": 126383,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "result message"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "transactionId",
  "demo": "9827281687778",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 126386,
  "apiId": "4414",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "transactionId",
  "parentId": 126383,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "LZD orderLineId"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "extendInfo",
  "demo": "{\"xxx\":\"xxx\"}",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 126387,
  "apiId": "4414",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "extendInfo",
  "parentId": 126383,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "extendInfo"
}
```
