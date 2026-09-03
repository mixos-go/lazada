---
title: UpdatePriceQuantity
category: Product API
api_name: UpdatePriceQuantity
method: POST
path: /product/price_quantity/update
---

**Category:** Product API
**API:** UpdatePriceQuantity

**Method:** POST
**HTTP Path:** /product/price_quantity/update

## API Description
Use this API to update the price and quantity of one or more existing products. The maximum number of products that can be updated is 50, but 20 is recommended.

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
| payload | Payload | Yes | <a href='https://open.lazada.com/apps/doc/doc?nodeId=42713&docId=121234' target='_brank'>Parameter description</a> |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| data | Object | Yes | Response body |

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
| 5 |  |  | E005: Invalid Request Format |
| 6 |  |  | E006: Unexpected internal error |
| 30 |  |  | E030: Empty Request |
| 204 |  |  | E204: Too many SKU in one request |
| 501 |  |  | E501: Update product failed |
| 901 |  |  | E901: The request is too frequent, or the requested functionality is temporarily disabled. |
| 1000 |  |  | Internal Application Error |
| 4104 |  |  | BIZ_CHECK_PRICE_PRECISION_INVALID |
| 4105 |  |  | BIZ_CHECK_SELLER_SKU_DUPLICATE |
| 4106 |  |  | CHK_CATPROP_CPV_INPUT_SIZE_LIMIT |
| 4107 |  |  | CHECK_CAT_PROP_INVALID_NUMBER |
| 4108 |  |  | CHK_BASIC_REQUIRED |
| 4109 |  |  | CHK_SKU_PROPS_NOT_MATCH_SALE_PROP |
| 4110 |  |  | BIZ_CHECK_CAT_PROP_MANDATORY |
| 4111 |  |  | CHK_CATPROP_CPV_TEXT_REPEAT |
| 4112 |  |  | CHK_SKU_PROPS_DUPLICATE |
| 4113 |  |  | CHK_SKU_PROPS_NOT_IDENTICAL |
| 4114 |  |  | BIZ_CHECK_PRICE_SAMPLE_NON_ZERO |
| 4115 |  |  | CHK_CATPROP_CPV_NOT_ENUM |
| 4116 |  |  | BIZ_CHECK_MAIN_IMAGE_DUPLICATE |
| 4117 |  |  | BIZ_CHECK_SPECIAL_PRICE_FROM_DATE_AFTER_TO_DATE |
| 4118 |  |  | BIZ_CHECK_PRICE_IS_ZERO |
| 4119 |  |  | BIZ_CHECK_SPECIAL_PRICE_RATE_OUT_OF_RANGE |
| 4120 |  |  | CHK_CATPROP_CPV_MAX_LEGNTH |
| 4121 |  |  | BIZ_CHECK_SPECIAL_PRICE_PRECISION_INVALID |
| 4122 |  |  | BIZ_CHECK_VIRTUAL_BUNDLE_SKU_SUB_OVER_LIMIT |
| 4123 |  |  | BIZ_CHECK_MANGROVE_RULE |
| 4124 |  |  | BIZ_CHECK_MANGROVE_RULE_QC |
| 4125 |  |  | THD_IC_F_IC_DOMAIN_PROPERTY_002 |
| 4126 |  |  | THD_IC_F_IC_INFRA_PRODUCT_036 |
| 4127 |  |  | THD_IC_F_IC_SCENE_PUBLISH_012 |
| 4128 |  |  | THD_IC_F_IC_DOMAIN_ACTOR_006 |
| 4129 |  |  | BIZ_CHECK_PROP_SPECIAL_CHAR |
| 4130 |  |  | BIZ_CHECK_OFFICIAL_STORE_BRAND_UNAUTHORIZED |
| 4131 |  |  | BIZ_CHECK_CAT_PROP_SENSITIVE_WORDS |
| 4132 |  |  | Invalid Request Format |
| 4133 |  |  | Invalid variation |
| 501 |  |  | Update product failed |
| 501 |  |  | Update product failed |
| 901 |  |  | Limit service request speed in server side temporarily. |
| 901 |  |  | Limit service request speed in server side temporarily. |
| 501 |  |  | Update product failed |
| 501 |  |  | Update product failed |
| 901 |  |  | Limit service request speed in server side temporarily. |
| 501 |  |  | Update product failed |
| 901 |  |  | Limit service request speed in server side temporarily. |
| 501 |  |  | Update product failed |
| 4225 |  |  | Your product participated in semi-hosted program, please go to GSP to edit the product price/stock/package details information. |
| 4225 |  |  | Your product participated in semi-hosted program, please go to GSP to edit the product price/stock/package details information. |
| 4225 |  |  | Your product participated in semi-hosted program, please go to GSP to edit the product price/stock/package details information. |
| 901 |  |  | Limit service request speed in server side temporarily. |
| 4225 |  |  | Your product participated in semi-hosted program, please go to GSP to edit the product price/stock/package details information. |
| 513 |  |  | Internal call exception |
| 4225 |  |  | Your product participated in semi-hosted program, please go to GSP to edit the product price/stock/package details information. |
| 4171 |  |  | The updated SKU quantity exceeds the maximum number 50, please do not update more than 50 SKUs at once |
| 4170 |  |  | During the Bday Mega campaign, there are restrictions for stock adjustments in effect between YYYY-MM-DD HH:MM:SS - YYYY-MM-DD HH:MM:SS. Sellers can increase stocks, but may not decrease stocks. |

## Examples
```json
{
  "serviceParamHttpType": "",
  "serviceParamType": "2",
  "hitLog": null,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "data",
  "demo": "{}",
  "required": true,
  "paramType": "4",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 66984,
  "apiId": "2403",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "data",
  "parentId": 66983,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.Object",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Response body"
}
```
