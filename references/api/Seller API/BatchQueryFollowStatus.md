---
title: BatchQueryFollowStatus
category: Seller API
api_name: BatchQueryFollowStatus
method: GET/POST
path: /shop/follow/status/batch/query
---

**Category:** Seller API
**API:** BatchQueryFollowStatus

**Method:** GET/POST
**HTTP Path:** /shop/follow/status/batch/query

## API Description
Query whether these customers follow this seller.

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
| buyer_ids | String[] | Yes | buyerId array |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| result | Object | No | Rensponse WrapperClass |
| result.success | Boolean | No | where this call succeeded |
| result.error | Object | No | error information |
| result.result | Object[] | No | { "followFlag": 0, "buyerId": 310008843475 };A followFlag of 1 indicates that the buyer is a fan |

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
| IllegalAccessToken |  |  | The specified access token is invalid or expired |

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
  "demo": "Result<T>",
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
      "id": 78440,
      "apiId": "2780",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "success",
      "parentId": 78439,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.Boolean",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "where this call succeeded"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "2",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "error",
      "demo": "query error",
      "required": false,
      "paramType": "4",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 78441,
      "apiId": "2780",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "error",
      "parentId": 78439,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "com.alibaba.alisite.model.Error",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "error information"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "3",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "result",
      "demo": "{         \"followFlag\": 0,         \"buyerId\": 310008843475       }",
      "required": false,
      "paramType": "9",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 78442,
      "apiId": "2780",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "result",
      "parentId": 78439,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.List<T>",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "{         \"followFlag\": 0,         \"buyerId\": 310008843475       };A followFlag of 1 indicates that the buyer is a fan"
    }
  ],
  "maxListSize": "",
  "id": 78439,
  "apiId": "2780",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "",
  "parentId": 0,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "com.alibaba.alisite.model.Result",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Rensponse WrapperClass"
}
```
