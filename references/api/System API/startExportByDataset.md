---
title: startExportByDataset
category: System API
api_name: startExportByDataset
method: GET/POST
path: /fbi/download/startExportByDataset
---

**Category:** System API
**API:** startExportByDataset

**Method:** GET/POST
**HTTP Path:** /fbi/download/startExportByDataset

## API Description
Open the download operation

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
| oldSystemId | String | No | 222 |
| useNewEngine | String | No | true |
| appName | String | Yes | 1 |
| secret | String | Yes | 1 |
| workId | String | Yes | 1 |
| datasetId | String | Yes | 1 |
| fileType | String | Yes | 1 |
| uploadType | String | Yes | 1 |
| dispatchUserInfo | String[] | No | 1 |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| result | Object | Yes | 1 |
| result.returnCode | Number | Yes | 1 |
| result.returnValue | Object | Yes | 1 |
| result.returnErrorStackTrace | String | Yes | 1 |
| result.returnMessage | String | Yes | 1 |

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
  "serviceParamType": "2",
  "hitLog": null,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "result",
  "demo": "1",
  "required": true,
  "paramType": "4",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "returnCode",
      "demo": "1",
      "required": true,
      "paramType": "2",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 8592,
      "apiId": "331",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "returnCode",
      "parentId": 8591,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.Integer",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "1"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "2",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "returnValue",
      "demo": "1",
      "required": true,
      "paramType": "4",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 8593,
      "apiId": "331",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "returnValue",
      "parentId": 8591,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.Object",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "1"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "returnErrorStackTrace",
      "demo": "1",
      "required": true,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 8594,
      "apiId": "331",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "returnErrorStackTrace",
      "parentId": 8591,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "1"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "returnMessage",
      "demo": "1",
      "required": true,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 8595,
      "apiId": "331",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "returnMessage",
      "parentId": 8591,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "1"
    }
  ],
  "maxListSize": "",
  "id": 8591,
  "apiId": "331",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "",
  "parentId": 0,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "com.alibaba.da.common.bean.Result",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "1"
}
```
