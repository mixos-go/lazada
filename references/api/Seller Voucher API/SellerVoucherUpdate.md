---
title: SellerVoucherUpdate
category: Seller Voucher API
api_name: SellerVoucherUpdate
method: POST
path: /promotion/voucher/update
---

**Category:** Seller Voucher API
**API:** SellerVoucherUpdate

**Method:** POST
**HTTP Path:** /promotion/voucher/update

## API Description
update a existing seller voucher promotion

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
| max_discount_offering_money_value | String | No | Discount details, if order value reaches criteria_over_money value, allow maximum discount per order, just support percentage discount off type |
| offering_percentage_discount_off | Number | No | Discount details, if order value reaches criteria_over_money value, will percentage discount off value |
| id | String | Yes | Promotion ID |
| criteria_over_money | String | Yes | Discount details, if order value reaches set value, will money discount or percentage discount |
| voucher_type | String | Yes | Voucher type, just set COLLECTIBLE_VOUCHER |
| apply | String | Yes | apply scope: ENTIRE_SHOP \| SPECIFIC_PRODUCTS |
| collect_start | Number | No | The time that customers can collect the voucher |
| display_area | String | Yes | The area that customers can see the voucher. |
| period_end_time | Number | Yes | The period end time that customers can use the voucher |
| voucher_name | String | Yes | Voucher name |
| voucher_discount_type | String | Yes | Discount type |
| offering_money_value_off | String | Yes | Discount details, if order value reaches criteria_over_money value, will discount money value |
| period_start_time | Number | Yes | The period start time that customers can use the voucher |
| limit | Number | Yes | Voucher limit per customer |
| issued | Number | Yes | Revision should be greater than the current setting |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| data | Number | Yes | promotion ID |
| success | Boolean | Yes | true \| false |
| error_code | Number | Yes | error code |
| error_msg | String | Yes | error message |

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
  "paramName": "data",
  "demo": "9616200353530",
  "required": true,
  "paramType": "2",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 45315,
  "apiId": "1505",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "data",
  "parentId": 45314,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.Long",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "promotion ID"
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
  "id": 45316,
  "apiId": "1505",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "success",
  "parentId": 45314,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "boolean",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "true | false"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": null,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "error_code",
  "demo": "null",
  "required": true,
  "paramType": "2",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 45317,
  "apiId": "1505",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "errorCode",
  "parentId": 45314,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.Integer",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "error code"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": null,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "error_msg",
  "demo": "null",
  "required": true,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 45318,
  "apiId": "1505",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "errorMsg",
  "parentId": 45314,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "error message"
}
```
