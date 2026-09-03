---
title: InitReverseOrderCancel
category: Return and Refund API
api_name: InitReverseOrderCancel
method: GET
path: /order/reverse/cancel/create
---

**Category:** Return and Refund API
**API:** InitReverseOrderCancel

**Method:** GET
**HTTP Path:** /order/reverse/cancel/create

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
| order_item_id_list | String[] | Yes | all order items need to be cancel |
| order_id | Number | Yes | order id |
| reason_id | String | Yes | reason id |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| data | Object | No | data |
| data.tip_content | String | No | tip infomation |
| data.tip_type | String | No | type of tip: error/warn |

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
| 102 |  |  | E0102: trade order line id is empty or invalid |
| 104 |  |  | E0104: reason is empty or invalid |
| 106 |  |  | E0106: ROC internal error |
| 115 |  |  | E0115: order id is null |
| 116 |  |  | E0116: no seller id |
| 117 |  |  | E0117: no user id |
| 118 |  |  | E0118: no user email |
| 122 |  |  | E0122: invalid trade order |
| 123 |  |  | E0123: invalid trade order lines %s |
| 124 |  |  | E0124: invalid seller id for this order line %s |

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
  "children": [
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "tip_content",
      "demo": "stock will be set as 0",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 50533,
      "apiId": "1700",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "tipContent",
      "parentId": 50532,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "tip infomation"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "tip_type",
      "demo": "error",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 50534,
      "apiId": "1700",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "tipType",
      "parentId": 50532,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "type of tip: error/warn"
    }
  ],
  "maxListSize": "",
  "id": 50532,
  "apiId": "1700",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "data",
  "parentId": 50528,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "com.alibaba.lazada.tradeReverse.api.model.response.CreateCancelForSellerMtopResponse.CreateCancelResult",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "data"
}
```
