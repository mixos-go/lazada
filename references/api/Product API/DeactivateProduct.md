---
title: DeactivateProduct
category: Product API
api_name: DeactivateProduct
method: POST
path: /product/deactivate
---

**Category:** Product API
**API:** DeactivateProduct

**Method:** POST
**HTTP Path:** /product/deactivate

## API Description
Use this API to deactivate Product or SKUs corresponding to the product

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
| apiRequestBody | String | Yes | Parameter ItemId is mandatory, Skus is optional |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| data | Object | No | Response body |

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
| E0001 |  |  | Parameter ItemId is mandatory |
| E0002 |  |  | Product not exists |
| E0003 |  |  | Seller Sku not exists |
| E0004 |  |  | Product Status not online |
| E0006 |  |  | Unexpected internal error |
| E0004 |  |  | Product Status not online |
| E0004 |  |  | Product Status not online |
| E0004 |  |  | Product Status not online |
| E0004 |  |  | Product Status not online |
| E0004 |  |  | Product Status not online |
| E0002 |  |  | Product:item id not exist |
| 901 |  |  | Limit service request speed in server side temporarily. |
| 4193 |  |  | The SellerSku parameter is no longer supported. Please update your parameter to use SkuId and try again |

## Examples
```json
{
  "serviceParamHttpType": "",
  "serviceParamType": "2",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "data",
  "demo": "{}",
  "required": false,
  "paramType": "4",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 99151,
  "apiId": "3534",
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
  "serviceParamPath": "java.lang.Object",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Response body"
}
```
