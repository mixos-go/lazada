---
title: MigrateImages
category: Product API
api_name: MigrateImages
method: POST
path: /images/migrate
---

**Category:** Product API
**API:** MigrateImages

**Method:** POST
**HTTP Path:** /images/migrate

## API Description
Use this API to migrate multiple images from an external site to Lazada site. Allowed image formats are JPG and PNG. The maximum size of an image file is 1MB. A single call can migrate 8 images at most.

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
| payload | Payload | Yes | Request body |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| batch_id | String | Yes | The returned request ID is used by the GetResponse API to get the migrated image information. |

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
| 301 |  |  | E301: Migrate Image Failed |
| 302 |  |  | E302: Not supported URL |
| 303 |  |  | E303: The image is too large |
| 901 |  |  | E901: The request is too frequent, or the requested functionality is temporarily disabled. |
| 1000 |  |  | Internal Application Error |

## Examples
```json
{
  "serviceParamHttpType": "",
  "serviceParamType": "2",
  "hitLog": null,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "batch_id",
  "demo": "1e0bb81415173896232054839e",
  "required": true,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 59444,
  "apiId": "2108",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "data",
  "parentId": 59443,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.Object",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "The returned request ID is used by the GetResponse API to get the migrated image information."
}
```
