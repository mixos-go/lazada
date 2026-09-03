---
title: RedeemOrderItems
category: E-Tickets API
api_name: RedeemOrderItems
method: GET/POST
path: /eticket/code/consume
---

**Category:** E-Tickets API
**API:** RedeemOrderItems

**Method:** GET/POST
**HTTP Path:** /eticket/code/consume

## API Description
Certificate Consume Open API

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
| biz_type | Number | Yes | biz type |
| code | String | Yes | certificate code |
| outer_id | String | Yes | outer id |
| serial_num | String | Yes | consume serial number |
| consume_num | Number | Yes | consume num |
| store_id | String | No | store id |
| pos_id | String | No | pos id |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| data | Object | Yes | response body |
| data.outer_id | String | No | outer id |
| data.serial_num | String | No | consume serial number |
| data.left_num | Number | No | code left available num |

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
| 100 |  |  | E100: Param Invalid, "%s" |
| 101 |  |  | E101: Redemption Operator Invalid |
| 200 |  |  | E200: Certificate Not Exist |
| 202 |  |  | E202: Certificate Can Not Distinguish |
| 203 |  |  | E203: Certificate Order Not Exist |
| 301 |  |  | E301: Certificate Not Available |

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
  "children": [
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "outer_id",
      "demo": "FO1fsdjhk123",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 49276,
      "apiId": "1642",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "outerId",
      "parentId": 49275,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "outer id"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "serial_num",
      "demo": "3451c641-a7da-4264-92cb-78a1f79392c3",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 49277,
      "apiId": "1642",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "serialNum",
      "parentId": 49275,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "consume serial number"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "left_num",
      "demo": "0",
      "required": false,
      "paramType": "2",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 49278,
      "apiId": "1642",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "leftNum",
      "parentId": 49275,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.Integer",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "code left available num"
    }
  ],
  "maxListSize": "",
  "id": 49275,
  "apiId": "1642",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "module",
  "parentId": 49273,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.Object",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "response body"
}
```
