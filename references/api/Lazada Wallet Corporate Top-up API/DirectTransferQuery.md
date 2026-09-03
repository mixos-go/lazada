---
title: DirectTransferQuery
category: Lazada Wallet Corporate Top-up API
api_name: DirectTransferQuery
method: GET/POST
path: /wallet/transfer/query
---

**Category:** Lazada Wallet Corporate Top-up API
**API:** DirectTransferQuery

**Method:** GET/POST
**HTTP Path:** /wallet/transfer/query

## API Description
Direct Transfer - Query

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
| transfer_order_id | String | Yes | ISV transfer order id, length <= 32 |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| amount | String | No | Transfer amount，precise to two decimal places. |
| account_number | String | No | Email or phone number, accepted phone number starts with (PH: +638, +639, 08, 09, 638, 639) |
| transfer_order_id | String | No | ISV transfer order id, length <= 32 |
| transfer_request_id | String | No | Lazada transfer order id |
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
| TRANSFER_ERROR_MSG_RESPONSED_FAILED |  |  | Error happens when transferring，please contact lazada team |
| OPEN_DIRECT_TRANSFER_INTERNAL_FAIL |  |  | Direct transfer internal error, please retry or contact lazada tech team. |
| TRANSFER_ERROR_MSG_AMOUNT_INVALID |  |  | Amount is invalid |
| APP_KEY_INVALID |  |  | App key is invalid, please contact lazada tech team. |
| USER_IS_NOT_LOGGED_IN |  |  | The user is not logged in |
| PROCEED_TRANSFER_EXCEPTION |  |  | Internal error, please retry or contact lazada tech team. |
| OPEN_API_CALL_EXCEED_LIMIT |  |  | Open Api call times exceeds: apiName_limitType |
| TRANSFER_ERROR_NATION_NOT_IN_LIST |  |  | The current user's region does not have permission to access, please contact the lazada tech team. |
| USER_BALANCE_NOT_ENOUGH |  |  | The available deposit is not enough for the transfer. |
| TRANSFER_AMOUNT_EXCEED_LIMIT |  |  | The transfer amount has exceeded the limit. |

## Examples
```json
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "amount",
  "demo": "0.01",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 77431,
  "apiId": "2744",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "amount",
  "parentId": 77430,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Transfer amount，precise to two decimal places."
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "account_number",
  "demo": "09160000001",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 77432,
  "apiId": "2744",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "accountNumber",
  "parentId": 77430,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Email or phone number, accepted phone number starts with (PH: +638, +639, 08, 09, 638, 639)"
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
  "id": 77433,
  "apiId": "2744",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "transferOrderId",
  "parentId": 77430,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "ISV transfer order id, length <= 32"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "transfer_request_id",
  "demo": "open_105400_test001_id",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 77434,
  "apiId": "2744",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "transferRequestId",
  "parentId": 77430,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Lazada transfer order id"
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
  "id": 77435,
  "apiId": "2744",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "deposit",
  "parentId": 77430,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "The available balance of ISV"
}
```
