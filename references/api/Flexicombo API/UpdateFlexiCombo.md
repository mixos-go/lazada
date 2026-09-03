---
title: UpdateFlexiCombo
category: Flexicombo API
api_name: UpdateFlexiCombo
method: POST
path: /promotion/flexicombo/update
---

**Category:** Flexicombo API
**API:** UpdateFlexiCombo

**Method:** POST
**HTTP Path:** /promotion/flexicombo/update

## API Description
update flexi combo

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
| apply | String | Yes | apply scope: ENTIRE_SHOP \| SPECIFIC_PRODUCTS |
| sample_skus | Object[] | No | sample list |
| sample_skus.productId | Number | No | sample product id |
| sample_skus.skuId | Number | No | sample sku id |
| criteria_type | String | Yes | AMOUNT \| QUANTITY |
| criteria_value | String[] | Yes | criteria value list |
| order_numbers | Number | Yes | orders numbers that can use flexi combo |
| name | String | Yes | flexi combo name |
| platform_channel | String | No | platform channel |
| gift_skus | Object[] | No | gift list |
| gift_skus.productId | Number | No | gift product id |
| gift_skus.skuId | Number | No | gift sku id |
| start_time | Number | Yes | start time |
| discount_type | String | Yes | money \| discount \| freeGift \| freeSample \| discountWithGift \| moneyWithGift \| discountWithSample \| moneyWithSample |
| id | Number | Yes | flexi combo id |
| end_time | Number | Yes | end time |
| discount_value | String[] | Yes | discount value list |
| stackable | String | No | Stackable Discount，Ex. Buy 2SGD Save 1SGD, Buy 4SGD Save 2SGD, Buy 6SGD Save 3SGD, etc. |
| gift_buy_limit_value | String[] | No | buyer can choose gift/sample quantity limit value list |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| success | Boolean | Yes | true \| false |
| error_code | String | Yes | error code |
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

## Error Codes
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| 21 |  |  | E021: Internal System Error |
| 22 |  |  | E022: "%s" |
| 23 |  |  | E023: "%s" |

## Examples
```json
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
  "id": 89290,
  "apiId": "3159",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "success",
  "parentId": 89289,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.Boolean",
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
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 89291,
  "apiId": "3159",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "errorCode",
  "parentId": 89289,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
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
  "id": 89292,
  "apiId": "3159",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "errorMsg",
  "parentId": 89289,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "error message"
}
```
