---
title: DirectTransferRequest
category: Lazada Wallet Corporate Top-up API
api_name: DirectTransferRequest
method: GET/POST
path: /wallet/transfer/request
---

**Category:** Lazada Wallet Corporate Top-up API
**API:** DirectTransferRequest

**Method:** GET/POST
**HTTP Path:** /wallet/transfer/request

## API Description
Direct Transfer - Request to transfer

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
| amount | String | Yes | Transfer amount，precise to two decimal places. |
| transfer_order_id | String | Yes | ISV transfer order id，length <= 32 |
| account_number | String | Yes | Phone number or email address，accepted phone number starts with (PH : +639, +638, 08, 09, 638, 639) |
| withdrawable | Boolean | No | The funds type for transfers. Set true for funds that can be withdrawn and false for funds that cannot be withdrawn. |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| account_number | String | No | The email or phone number of user to be transferred to |
| transfer_order_id | String | No | ISV input transfer order id |
| transfer_request_id | String | No | Lazada transfer order id |
| amount | String | No | The amount to transfer |
| deposit | String | No | The available balance of ISV |
| withdrawable | Boolean | No | The funds type for transfers. Set true for funds that can be withdrawn and false for funds that cannot be withdrawn. |

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
| OPEN_DIRECT_TRANSFER_LOCK_CONFLICT |  |  | Direct transfer request is already being processed，please wait for a moment and check status |
| TRANSFER_ERROR_MSG_RESPONSED_FAILED |  |  | Error happens when transferring，please contact lazada team |
| TRANSFER_VALUE_UNMATCHED |  |  | Transfer amount does not match |
| TRANSFER_USER_UNMATCHED |  |  | User to be transferred not match |
| TRANSFER_ERROR_ACCOUNT_NUMBER_INVALID |  |  | Account number is invalid |
| OPEN_DIRECT_TRANSFER_INTERNAL_FAIL |  |  | Direct transfer internal error, please retry or contact lazada tech team. |
| TRANSFER_ERROR_TRANSFER_ORDER_ID_INVALID |  |  | Transfer order ID is invalid |
| TRANSFER_ERROR_MSG_AMOUNT_INVALID |  |  | Amount is invalid |
| APP_KEY_INVALID |  |  | App key is invalid, please contact lazada tech team. |
| USER_IS_NOT_LOGGED_IN |  |  | The user is not logged in |
| PROCEED_TRANSFER_EXCEPTION |  |  | Internal error, please retry or contact lazada tech team. |
| OPEN_API_CALL_EXCEED_LIMIT |  |  | Open Api call times exceeds: apiName_limitType |
| BIZ_DEGRADATION_ERROR |  |  | The service is not available now |
| TRANSFER_ERROR_MSG_WALLET_INACTIVATED |  |  | The transfer account has not activated the wallet |
| TRANSFER_ERROR_MSG_USER_NOT_FOUND |  |  | User to be transferred not found. |
| USER_BALANCE_NOT_ENOUGH |  |  | The available deposit is not enough for the transfer. |
| TRANSFER_AMOUNT_EXCEED_LIMIT |  |  | The transfer amount has exceeded the limit. |
| TRANSFER_IS_CORPORATE_USER_ERROR |  |  | The recipient account is corporate user. |
| TRANSFER_ERROR_NATION_NOT_IN_LIST |  |  | The current user's region does not have permission to access, please contact the lazada tech team. |
| RISK_REJECT |  |  | The transfer recipient's account status is abnormal, please check |
| TRANSFER_WITHDRAWABLE_UNMATCHED |  |  | Transfer withdrawable does not match. |

## Examples
```json
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "account_number",
  "demo": "lzd_test_001@tom.com",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 118824,
  "apiId": "4185",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "accountNumber",
  "parentId": 118823,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "The email or phone number of user to be transferred to"
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
  "id": 118825,
  "apiId": "4185",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "transferOrderId",
  "parentId": 118823,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "ISV input transfer order id"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "transfer_request_id",
  "demo": "open_100100_test001_id",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 118826,
  "apiId": "4185",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "transferRequestId",
  "parentId": 118823,
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
  "id": 118827,
  "apiId": "4185",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "amount",
  "parentId": 118823,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "The amount to transfer"
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
  "id": 118828,
  "apiId": "4185",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "deposit",
  "parentId": 118823,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "The available balance of ISV"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "withdrawable",
  "demo": "true",
  "required": false,
  "paramType": "3",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 118829,
  "apiId": "4185",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "withdrawable",
  "parentId": 118823,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.Boolean",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "The funds type for transfers. Set true for funds that can be withdrawn and false for funds that cannot be withdrawn."
}
```
