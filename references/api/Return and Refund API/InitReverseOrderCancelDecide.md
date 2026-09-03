---
title: InitReverseOrderCancelDecide
category: Return and Refund API
api_name: InitReverseOrderCancelDecide
method: GET
path: /order/reverse/cancel/seller/decide
---

**Category:** Return and Refund API
**API:** InitReverseOrderCancelDecide

**Method:** GET
**HTTP Path:** /order/reverse/cancel/seller/decide

## API Description
Seller initiates a cancelation

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
| reverse_order_id | Number | Yes | The reverse order to be cancelled |
| agree_cancel | Boolean | Yes | decision |
| reason_code | Number | No | reason id |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| data | Object | No | null |

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
| 116 |  |  | E0116: no seller id |
| 105 |  |  | E0105: reverse order id is empty or invalid |
| 131 |  |  | E0131: no decision for this reverse order |
| 106 |  |  | E0106: ROC internal error |

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
  "demo": "null",
  "required": false,
  "paramType": "4",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 62694,
  "apiId": "2262",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "void",
  "parentId": 62582,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.Void",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "null"
}
```
