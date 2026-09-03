---
title: CreateSubscriptionToFusion
category: LazPay API
api_name: CreateSubscriptionToFusion
method: POST
path: /insurance/subscription/create
---

**Category:** LazPay API
**API:** CreateSubscriptionToFusion

**Method:** POST
**HTTP Path:** /insurance/subscription/create

## API Description
Create User Subscription To Fusion

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
| subscriptionStatus | String | Yes | Subscription Status |
| subscribeTime | Number | No | Subscribe Time |
| unsubscribeTime | Number | No | Unsubscribe Time |
| subscribeSource | String | No | Subscribe Source |
| unsubscribeSource | String | No | Unsubscribe Source |
| userToken | String | Yes | User Id |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| subscriptionStatus | String | No | Subscription Status |
| subscribeTime | Number | No | Subscribe Time |
| unsubscribeTime | Number | No | Unsubscribe Time |

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
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "subscriptionStatus",
  "demo": "SUBSCRIBED",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 127037,
  "apiId": "4422",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "subscriptionStatus",
  "parentId": 127036,
  "dataSecurityLevel": "S2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Subscription Status"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "subscribeTime",
  "demo": "1760075913214",
  "required": false,
  "paramType": "2",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 127038,
  "apiId": "4422",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "subscribeTime",
  "parentId": 127036,
  "dataSecurityLevel": "S2",
  "serviceParamPath": "java.lang.Long",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Subscribe Time"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "unsubscribeTime",
  "demo": "1760075913214",
  "required": false,
  "paramType": "2",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 127039,
  "apiId": "4422",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "unsubscribeTime",
  "parentId": 127036,
  "dataSecurityLevel": "S2",
  "serviceParamPath": "java.lang.Long",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Unsubscribe Time"
}
```
