---
title: CancelVasOrder4FBL
category: FBL API
api_name: CancelVasOrder4FBL
method: GET/POST
path: /fbl/vas/cancelVasOrder
---

**Category:** FBL API
**API:** CancelVasOrder4FBL

**Method:** GET/POST
**HTTP Path:** /fbl/vas/cancelVasOrder

## API Description
取消增值服务

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
| platform_name | String | Yes | laz店铺所属的前台租户,例如: LAZADA_VN |
| vas_order_no | String | Yes | 增值服务单号 |
| cancel_reason | String | No | 取消原因 |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| data | String | No | 取消结果 |

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
  "serviceParamHttpType": "3",
  "serviceParamType": "2",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "data",
  "demo": "{\"data\":{\"retryable\":false,\"fail\":false,\"success\":true,\"succAndNotNull\":false,\"message\":\"OK\"},\"code\":\"0\",\"request_id\":\"2101773f17679306722446960\",\"_trace_id_\":\"2108037917679306720795016e1eaa\"}",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 128380,
  "apiId": "4450",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "data",
  "parentId": 127960,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "取消结果"
}
```
