---
title: AdjustSellableQuantity
category: Product API
api_name: AdjustSellableQuantity
method: POST
path: /product/stock/sellable/adjust
---

**Category:** Product API
**API:** AdjustSellableQuantity

**Method:** POST
**HTTP Path:** /product/stock/sellable/adjust

## API Description
Use this API to increase or decrease sellable quantity of one or more existing products. The maximum number of products that can be updated is 50, but 20 is recommended.

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
| payload | Payload | Yes | Please take demo as reference. |

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
| 5 |  |  | E005: Invalid Request Format |
| 6 |  |  | E006: Unexpected internal error |
| 30 |  |  | E030: Empty Request |
| 204 |  |  | E204: Too many SKU in one request |
| 501 |  |  | E501: Update product failed |
| 901 |  |  | E901: The request is too frequent, or the requested functionality is temporarily disabled. |
| 1000 |  |  | Internal Application Error |
| 212 |  |  | Sellable inventory cannot be negative |
| 501 |  |  | Update product failed |
| 901 |  |  | Limit service request speed in server side temporarily. |
| 501 |  |  | Update product failed |
| 4170 |  |  | During the Bday Mega campaign, there are restrictions for stock adjustments in effect between YYYY-MM-DD HH:MM:SS - YYYY-MM-DD HH:MM:SS. Sellers can increase stocks, but may not decrease stocks. |
| 212 |  |  | INV_NEGATIVE_SELLABLE |

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
  "id": 72029,
  "apiId": "2552",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "data",
  "parentId": 72026,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.Object",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Response body"
}
```
