---
title: OpenServiceBalanceQuery
category: LazPay API
api_name: OpenServiceBalanceQuery
method: GET/POST
path: /wallet/open/service/balance/query
---

**Category:** LazPay API
**API:** OpenServiceBalanceQuery

**Method:** GET/POST
**HTTP Path:** /wallet/open/service/balance/query

## API Description
Open Service Account Balance Info Query

## Common Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| app_key | String | Yes | Unique app ID issued by LAZADA Open Platform console when you apply for an app category |
| timestamp | String | Yes | The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time |
| access_token | String | No | API interface call credentials |
| sign_method | String | Yes | The HMAC hash algorithm you are using to calculate your signature |
| sign | String | Yes | Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details) |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| date_time | Number | Yes | date time |
| available_amount | String | Yes | amount |
| available_amount_cent | Number | Yes | cent |
| currency | String | Yes | currency |

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
  "serviceParamType": "1",
  "hitLog": null,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "date_time",
  "demo": "1723100336000",
  "required": true,
  "paramType": "2",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 112098,
  "apiId": "3953",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "dateTime",
  "parentId": 112097,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.Long",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "date time"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": null,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "available_amount",
  "demo": "9.63",
  "required": true,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 112099,
  "apiId": "3953",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "availableAmount",
  "parentId": 112097,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "amount"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": null,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "available_amount_cent",
  "demo": "963",
  "required": true,
  "paramType": "2",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 112100,
  "apiId": "3953",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "availableAmountCent",
  "parentId": 112097,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.Integer",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "cent"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": null,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "currency",
  "demo": "PHP",
  "required": true,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 112101,
  "apiId": "3953",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "currency",
  "parentId": 112097,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "currency"
}
```
