---
title: HighlightProduct
category: LazLive API
api_name: HighlightProduct
method: GET/POST
path: /lazlive/product/highlight
---

**Category:** LazLive API
**API:** HighlightProduct

**Method:** GET/POST
**HTTP Path:** /lazlive/product/highlight

## API Description
highlight product

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
| highLightRequest | Object | Yes | Request parameters |
| highLightRequest.itemId | Number | Yes | item id |
| highLightRequest.presenterId | Number | Yes | presenter id |
| highLightRequest.action | String | Yes | highlight start：HIGHLIGHT_START |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| data | Object | No | data |
| data.success | Boolean | No | true |

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
| BIZ_INVALID_ARGUMENT |  |  | Please check whether the input parameter "action" is correct |
| BIZ_USER_NOT_PERMITTED |  |  | No permission |
| BIZ_LIVE_NOT_FOUND |  |  | The live room does not exist |
| BIZ_INVALID_PRODUCT |  |  | Invalid product |
| BIZ_NOT_LIVE_PRODUCT |  |  | It is not a product of the live room |
| SYSTEM_ERROR |  |  | We are experiencing a surge in traffic. Please try again. If you continue to get this message, try again later |

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
  "demo": "{\"success\":true}",
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
      "paramName": "success",
      "demo": "true",
      "required": false,
      "paramType": "3",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 97037,
      "apiId": "3464",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "success",
      "parentId": 97036,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.Boolean",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "true"
    }
  ],
  "maxListSize": "",
  "id": 97036,
  "apiId": "3464",
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
  "serviceParamPath": "com.lazada.live.center.facade.product.response.HighLightProductDTO",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "data"
}
```
