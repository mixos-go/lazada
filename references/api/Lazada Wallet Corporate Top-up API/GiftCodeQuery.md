---
title: GiftCodeQuery
category: Lazada Wallet Corporate Top-up API
api_name: GiftCodeQuery
method: GET/POST
path: /wallet/giftcode/query
---

**Category:** Lazada Wallet Corporate Top-up API
**API:** GiftCodeQuery

**Method:** GET/POST
**HTTP Path:** /wallet/giftcode/query

## API Description
Gift Code - Query

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
| page | Number | Yes | The page to query, page should > 0 and < the total pages, default value is 1 if this parameter is null. |
| transfer_order_id | String | Yes | Transfer order Id on the ISV side, length <= 32 |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| records | String[] | No | The list of gift codes, need to finish unmask verification firstly. |
| total_page | Number | No | The total page number of the code list |
| current_page | Number | No | The current queried page of the code list |
| page_size | Number | No | The default max number of codes contained in one page. |
| transfer_order_id | String | No | Transfer order Id on the ISV side, length <= 32 |
| total_number | String | No | The amount of created gift code, precise to two decimal places |
| create_status | String | No | The create status of the gift code |
| deposit | String | No | The available balance of ISV |

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
| GIFT_CODE_LOCK_CONFLICT |  |  | Gift code is already being created，please wait for a moment and check the batch list |
| OPEN_API_CALL_EXCEED_LIMIT |  |  | Open Api call times exceeds: apiName_limitType |
| PROCEED_TRANSFER_EXCEPTION |  |  | Internal error, please retry or contact lazada tech team. |
| USER_IS_NOT_LOGGED_IN |  |  | The user is not logged in |
| APP_KEY_INVALID |  |  | App key is invalid, please contact lazada tech team. |
| TRANSFER_ERROR_TRANSFER_ORDER_ID_INVALID |  |  | Transfer order ID is invalid |
| GIFT_CODE_QUERY_EMPTY |  |  | There are no such gift code |

## Examples
```json
{
  "serviceParamHttpType": "",
  "serviceParamType": "3",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "records",
  "demo": "List<String>",
  "required": false,
  "paramType": "6",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "https://open.lazada.com/doc/doc.htm?spm=a2o9m.11193535.0.0.1f2a38e4l12Giz#?nodeId=10784&docId=108297",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 62571,
  "apiId": "2249",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "C",
  "maskField": "common",
  "serviceParamName": "records",
  "parentId": 62570,
  "dataSecurityLevel": "C3",
  "serviceParamPath": "java.util.List<String>",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "The list of gift codes, need to finish unmask verification firstly."
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "total_page",
  "demo": "5",
  "required": false,
  "paramType": "2",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 62572,
  "apiId": "2249",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "totalPage",
  "parentId": 62570,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.Long",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "The total page number of the code list"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "current_page",
  "demo": "1",
  "required": false,
  "paramType": "2",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 62573,
  "apiId": "2249",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "currentPage",
  "parentId": 62570,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.Long",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "The current queried page of the code list"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "page_size",
  "demo": "100",
  "required": false,
  "paramType": "2",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 62574,
  "apiId": "2249",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "pageSize",
  "parentId": 62570,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.Long",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "The default max number of codes contained in one page."
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "transfer_order_id",
  "demo": "test001",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 62170,
  "apiId": "2249",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "transferOrderId",
  "parentId": 62169,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Transfer order Id on the ISV side, length <= 32"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "total_number",
  "demo": "0.01",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 62171,
  "apiId": "2249",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "totalNumber",
  "parentId": 62169,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.Long",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "The amount of created gift code, precise to two decimal places"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "create_status",
  "demo": "SUCCESS",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 62172,
  "apiId": "2249",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "createStatus",
  "parentId": 62169,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "The create status of the gift code"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "deposit",
  "demo": "99.99",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 62173,
  "apiId": "2249",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "deposit",
  "parentId": 62169,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "The available balance of ISV"
}
```
