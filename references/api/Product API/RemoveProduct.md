---
title: RemoveProduct
category: Product API
api_name: RemoveProduct
method: POST
path: /product/remove
---

**Category:** Product API
**API:** RemoveProduct

**Method:** POST
**HTTP Path:** /product/remove

## API Description
Use this API to remove an existing product, some SKUs in one product, or all SKUs in one product. System supports a maximum number of 50 SellerSkus in one request.

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
| seller_sku_list | String | No | sellerSku in a json list to be removed. System supports a maximum number of 50 sellerSku in one request.;for example: itemid: 1269656765 sellerSku: test00111 、test00222、test00333, then Param should be: ["test00111","test00222","test00333"] |
| sku_id_list | String | No | Highest priority,skuId in a json list to be removed. System supports a maximum number of 50 skuId in one request.; for example: itemid: 1269656765 skuid: 5230534246, then Param should be: ["SkuId_1269656765_5230534246"] |

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
| 503 |  |  | E503: Remove product failed |
| 512 |  |  | E512: BIZ_CHECK_MANGROVE_RULE_QC |
| 1000 |  |  | Internal Application Error |
| 901 |  |  | Limit service request speed in server side temporarily. |
| 6 |  |  | Unexpected internal error |
| 503 |  |  | Remove product failed |

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
  "id": 118773,
  "apiId": "4182",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "data",
  "parentId": 118772,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.Obeject",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Response body"
}
```
