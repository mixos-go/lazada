---
title: queryContentReviewRecords
category: LazLike API
api_name: queryContentReviewRecords
method: GET/POST
path: /content/mcn/content/queryReviewRecords
---

**Category:** LazLike API
**API:** queryContentReviewRecords

**Method:** GET/POST
**HTTP Path:** /content/mcn/content/queryReviewRecords

## API Description
Query content audit records. Currently, querying records with audit results of low (block) is supported.The number of query contents is limited to 500 (adjustable).

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
| contentIds | String | Yes | 内容id |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| result | Object | No | result |
| result.success | Boolean | No | success |
| result.resultCode | String | No | resultCode |
| result.resultMessage | String | No | resultMessage |
| result.reviewRecords | Object[] | No | reviewRecords |
| result.reviewRecords.reviewedType | String | No | reviewedType |
| result.reviewRecords.reason | String | No | reason |
| result.reviewRecords.reviewedTime | Number | No | reviewedTime |
| result.reviewRecords.contentId | Number | No | contentId |
| result.reviewRecords.currentContentBaseState | Number | No | currentContentBaseState |

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
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "result",
  "demo": "{   \"success\": true,   \"resultCode\": \"\",   \"resultMessage\": \"\",   \"class\": \"com.lazada.lazlike.openapi.response.McnContentReviewResult\",   \"reviewRecords\": [     {       \"reviewedType\": \"AUDIT_FAILED\",       \"reason\": \"impolite behaviour\",       \"reviewedTime\": 1747880084145,       \"contentId\": 64570814,       \"class\": \"com.lazada.lazlike.openapi.response.McnContentReviewRecord\",       \"currentContentBaseState\": 2     }   ] }",
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
      "id": 121461,
      "apiId": "4265",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "success",
      "parentId": 121460,
      "dataSecurityLevel": "S2",
      "serviceParamPath": "java.lang.Boolean",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "success"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "resultCode",
      "demo": "\"\"",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 121462,
      "apiId": "4265",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "resultCode",
      "parentId": 121460,
      "dataSecurityLevel": "S2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "resultCode"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "resultMessage",
      "demo": "\"\"",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 121463,
      "apiId": "4265",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "resultMessage",
      "parentId": 121460,
      "dataSecurityLevel": "S2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "resultMessage"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "3",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "reviewRecords",
      "demo": "[     {       \"reviewedType\": \"AUDIT_FAILED\",       \"reason\": \"impolite behaviour\",       \"reviewedTime\": 1747880084145,       \"contentId\": 64570814,       \"class\": \"com.lazada.lazlike.openapi.response.McnContentReviewRecord\",       \"currentContentBaseState\": 2     }   ]",
      "required": false,
      "paramType": "9",
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
          "paramName": "reviewedType",
          "demo": "AUDIT_FAILED",
          "required": false,
          "paramType": "1",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 121465,
          "apiId": "4265",
          "docVisible": false,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "reviewedType",
          "parentId": 121464,
          "dataSecurityLevel": "S2",
          "serviceParamPath": "java.lang.String",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "reviewedType"
        },
        {
          "serviceParamHttpType": "",
          "serviceParamType": "1",
          "hitLog": false,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "reason",
          "demo": "impolite behaviour",
          "required": false,
          "paramType": "1",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 121466,
          "apiId": "4265",
          "docVisible": false,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "reason",
          "parentId": 121464,
          "dataSecurityLevel": "S2",
          "serviceParamPath": "java.lang.String",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "reason"
        },
        {
          "serviceParamHttpType": "",
          "serviceParamType": "1",
          "hitLog": false,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "reviewedTime",
          "demo": "1747880084145",
          "required": false,
          "paramType": "2",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 121467,
          "apiId": "4265",
          "docVisible": false,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "reviewedTime",
          "parentId": 121464,
          "dataSecurityLevel": "S2",
          "serviceParamPath": "java.lang.Long",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "reviewedTime"
        },
        {
          "serviceParamHttpType": "",
          "serviceParamType": "1",
          "hitLog": false,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "contentId",
          "demo": "64570814",
          "required": false,
          "paramType": "2",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 121468,
          "apiId": "4265",
          "docVisible": false,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "contentId",
          "parentId": 121464,
          "dataSecurityLevel": "S2",
          "serviceParamPath": "java.lang.Long",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "contentId"
        },
        {
          "serviceParamHttpType": "",
          "serviceParamType": "1",
          "hitLog": false,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "currentContentBaseState",
          "demo": "2",
          "required": false,
          "paramType": "2",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 121469,
          "apiId": "4265",
          "docVisible": false,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "currentContentBaseState",
          "parentId": 121464,
          "dataSecurityLevel": "S2",
          "serviceParamPath": "java.lang.Integer",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "currentContentBaseState"
        }
      ],
      "maxListSize": "",
      "id": 121464,
      "apiId": "4265",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "reviewRecords",
      "parentId": 121460,
      "dataSecurityLevel": "S2",
      "serviceParamPath": "java.util.List<java.lang.Object>",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "reviewRecords"
    }
  ],
  "maxListSize": "",
  "id": 121460,
  "apiId": "4265",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "",
  "parentId": 0,
  "dataSecurityLevel": "S2",
  "serviceParamPath": "java.lang.Object",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "result"
}
```
