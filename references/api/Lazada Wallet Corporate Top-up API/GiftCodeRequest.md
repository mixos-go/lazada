---
title: GiftCodeRequest
category: Lazada Wallet Corporate Top-up API
api_name: GiftCodeRequest
method: GET/POST
path: /wallet/giftcode/request
---

**Category:** Lazada Wallet Corporate Top-up API
**API:** GiftCodeRequest

**Method:** GET/POST
**HTTP Path:** /wallet/giftcode/request

## API Description
Gift Code - Request

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
| amount | String | Yes | The amount of each gift code, precise to two decimal places |
| quantity | Number | Yes | The quantity of gift codes to be created |
| transfer_order_id | String | Yes | ISV transfer order id，length <= 32 |
| end_timestamp | Number | Yes | End timestamp，13 bits |
| start_timestamp | Number | Yes | Start timestamp，13 bits |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| transfer_order_id | String | No | ISV transfer order id |
| total_number | Number | No | Total gift code quantity |
| create_status | String | No | Create status of gift code |
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
| OPEN_API_TIMESTAMP_INVALID |  |  | The input timestamp is invalid |
| BIZ_DEGRADATION_ERROR |  |  | The service is not available now |
| OPEN_API_CALL_EXCEED_LIMIT |  |  | Open Api call times exceeds: apiName_limitType |
| PROCEED_TRANSFER_EXCEPTION |  |  | Internal error, please contact lazada tech team |
| USER_IS_NOT_LOGGED_IN |  |  | The user is not logged in |
| APP_KEY_INVALID |  |  | App key is invalid, please contact lazada tech team. |
| TRANSFER_ERROR_TRANSFER_ORDER_ID_INVALID |  |  | Transfer order ID is invalid |
| TRANSFER_ERROR_MSG_AMOUNT_INVALID |  |  | Amount is invalid |
| TRANSFER_ERROR_MSG_QUANTITY_INVALID |  |  | The quantity of gift code is invalid |
| GIFT_CODE_LOCK_CONFLICT |  |  | Gift code is already being created，please wait for a moment and check the batch list. |
| BATCH_CREATE_ERROR |  |  | Error happens when creating gift code. Please Retry. |
| BALANCE_ACCOUNT_NOT_ENOUGH |  |  | Balance account is not enough. |
| TRANSFER_ERROR_NATION_NOT_IN_LIST |  |  | The current user's region does not have permission to access, please contact the lazada tech team. |

## Examples
```json
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
  "id": 61565,
  "apiId": "2223",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "transferOrderId",
  "parentId": 61564,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "ISV transfer order id"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "total_number",
  "demo": "1",
  "required": false,
  "paramType": "2",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 61566,
  "apiId": "2223",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "totalNumber",
  "parentId": 61564,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.Long",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Total gift code quantity"
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
  "id": 61567,
  "apiId": "2223",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "createStatus",
  "parentId": 61564,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Create status of gift code"
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
  "id": 61570,
  "apiId": "2223",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "deposit",
  "parentId": 61564,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "The available balance of ISV"
}
```
