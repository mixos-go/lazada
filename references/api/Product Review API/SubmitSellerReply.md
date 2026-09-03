---
title: SubmitSellerReply
category: Product Review API
api_name: SubmitSellerReply
method: GET
path: /review/seller/reply/add
---

**Category:** Product Review API
**API:** SubmitSellerReply

**Method:** GET
**HTTP Path:** /review/seller/reply/add

## API Description
submit seller reply for customers review

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
| id | Number | Yes | review id that user wants to reply to. Can be obtain from GetProductReviewList |
| content | String | Yes | reply content in text, only support reply in text.max length = 500 |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| data | Boolean | No | reply success or fail |
| success | Boolean | No | reply success or fail |
| error_code | String | No | error code |
| error_msg | String | No | error msg |

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
| PARAMS_VALIDATE_ERROR |  |  | NULL_SELLERID |
| PARAMS_VALIDATE_ERROR |  |  | NULL_ID |
| PARAMS_VALIDATE_ERROR |  |  | NULL_CONTENT |
| PARAMS_VALIDATE_ERROR |  |  | REPLY_ALREADY |
| PARAMS_VALIDATE_ERROR |  |  | NO_SUCH_REVIEW |
| PARAMS_VALIDATE_ERROR |  |  | REVIEW_STATUS_CANNOT_REPLY |
| PARAMS_VALIDATE_ERROR |  |  | REVIEW_TYPE_DONOT_SUPPORT_REPLY |
| PARAMS_VALIDATE_ERROR |  |  | REVIEW_INFO_DONOT_SUPPORT_REPLY |
| PARAMS_VALIDATE_ERROR |  |  | REVIEW_REPORTED_CANNOT_REPLY |
| PARAMS_VALIDATE_ERROR |  |  | REPLY_CONTENT_TOO_LONG |
| PARAMS_VALIDATE_ERROR |  |  | BEYOND_REPLY_PERIOD |
| TRAFFIC_CONTROL |  |  | TRAFFIC_CONTROL |
| PARAMS_VALIDATE_ERROR |  |  | REPLY_ALREADY |

## Examples
```json
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "data",
  "demo": "true",
  "required": false,
  "paramType": "3",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 48180,
  "apiId": "1609",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "data",
  "parentId": 48179,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.Boolean",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "reply success or fail"
}
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
  "id": 48181,
  "apiId": "1609",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "success",
  "parentId": 48179,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.Boolean",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "reply success or fail"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "error_code",
  "demo": "error",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 48182,
  "apiId": "1609",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "errorCode",
  "parentId": 48179,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "error code"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "error_msg",
  "demo": "error",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 48183,
  "apiId": "1609",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "errorMsg",
  "parentId": 48179,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "error msg"
}
```
