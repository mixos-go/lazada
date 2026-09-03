---
title: FreeShippingUpdate
category: Free Shipping API
api_name: FreeShippingUpdate
method: POST
path: /promotion/freeshipping/update
---

**Category:** Free Shipping API
**API:** FreeShippingUpdate

**Method:** POST
**HTTP Path:** /promotion/freeshipping/update

## API Description
update free shipping promotion

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
| budget_type | String | Yes | UNLIMITED_BUDGET \| LIMITED_BUDGET |
| template_type | String | Yes | template type, MANUALLY \| CAMPAIGN \| TEMPLATE |
| apply | String | Yes | apply scope: ENTIRE_SHOP \| SPECIFIC_PRODUCTS \| CAMPAIGN_PRODUCTS |
| period_end_time | Number | Yes | when specific period required, the period end time that this promotion takes effect (timestamp) |
| template_code | String | No | template code |
| category_name | String | No | product category id |
| budget_value | String | No | when limited budget required |
| promotion_name | String | Yes | promotion name |
| period_type | String | Yes | LONG_TERM \| SPECIAL_PERIOD |
| region_type | String | Yes | ALL_REGIONS \| SPECIAL_REGIONS, when regions query api return empty just support ALL_REGIONS |
| period_start_time | Number | Yes | when specific period required, the period start time that this promotion takes effect (timestamp) |
| campaign_tag | String | No | when CAMPAIGN template type and CAMPAIGN_PRODUCTS apply type required |
| region_value | String[] | No | when SPECIAL_REGIONS required, data from regions query api |
| id | Number | Yes | promotion id |
| delivery_option | String | Yes | data from delivery options query list api |
| discount_type | String | Yes | shipping fee subsidy type,FULL_SUBSIDY\|PARTIAL_SUBSIDY |
| deal_criteria | String | Yes | the criteria that customer can enjoy shipping fee subsidy, MONEY_VALUE_FROM_X\|ITEM_QUANTITY_FROM_X\|NO_CONDITION |
| tiers | Object[] | Yes | promotion tier list |
| tiers.filter | String | Yes | deal criteria value |
| tiers.result | String | No | when partial subsidy discount type required，shipping fee subsidy value |

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
  "id": 52640,
  "apiId": "1787",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "data",
  "parentId": 52639,
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
  "id": 52641,
  "apiId": "1787",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "success",
  "parentId": 52639,
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
  "id": 52642,
  "apiId": "1787",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "errorCode",
  "parentId": 52639,
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
  "id": 52643,
  "apiId": "1787",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "errorMsg",
  "parentId": 52639,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "error message"
}
```
