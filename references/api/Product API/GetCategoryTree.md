---
title: GetCategoryTree
category: Product API
api_name: GetCategoryTree
method: GET
path: /category/tree/get
---

**Category:** Product API
**API:** GetCategoryTree

**Method:** GET
**HTTP Path:** /category/tree/get

## API Description
Use this API to retrieve the list of all product categories in the system.

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
| language_code | String | No | Language code indicates the type of language you would like to translate. Please note not all languages are available in every region. For example, in Indonesia, only English and Indonesia are available. If you are passing a language code which does not belong to your area, null value might receive. |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| data | Object[] | No | Response body |

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
  "serviceParamType": "3",
  "hitLog": null,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "data",
  "demo": "[{   \"children\": [     {       \"var\": true,       \"name\": \"Socks\",       \"leaf\": true,       \"category_id\": 7436     },     {       \"var\": true,       \"name\": \"Underwear\",       \"leaf\": true,       \"category_id\": 7435     }   ],   \"var\": true,   \"name\": \"Socks & Tights\",   \"leaf\": false,   \"category_id\": 6588 }]",
  "required": false,
  "paramType": "9",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 72730,
  "apiId": "2583",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "data",
  "parentId": 72729,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.util.Map",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Response body"
}
```
