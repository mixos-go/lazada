---
title: RssGetOnePickupJob
category: RedMart API
api_name: RssGetOnePickupJob
method: GET/POST
path: /rss/pickup-job/get
---

**Category:** RedMart API
**API:** RssGetOnePickupJob

**Method:** GET/POST
**HTTP Path:** /rss/pickup-job/get

## API Description
Get details of a pickup job

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
| storeId | Number | Yes | store id |
| pickupJobId | Number | Yes | pickup job id |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| result | Object | No | result |
| result.data | Object | No | pickup job details |
| result.success | Boolean | No | success |
| result.errorMessage | String | No | error message |

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
  "serviceParamType": "2",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "result",
  "demo": "{\"result\": {\"data\": {\"scheduledAt\":1684135189000,\"qtyFulfilledCount\":10,\"amendabilityCutOffDate\":1684135989000,\"preferredPickupTime\":\"13:00-17:00\",\"items\":[{\"name\":\"Salmon\",\"qtyFulfilled\":10,\"sku\":\"19739731408\",\"size\":\"2.5kg\",\"shipmentsInfo\":[{\"qty\":5,\"orderId\":\"49e74qjnkprp1to4\"},{\"qty\":6,\"orderId\":\"49e74qjn1prp1to4\"}],\"minimumExpiryDate\":1770357600000,\"qty\":11,\"vpc\":\"19739731408\",\"imageUrl\":\"http://media.redmart.com/newmedia/1600x/i/m/xxx.jpg\",\"rpc\":123456}],\"pickedAt\":1684136189000,\"id\":123,\"status\":\"pickedup\",\"category\":\"Dry\",\"qtyCount\":11}, \"errorMessage\": null, success: true}}",
  "required": false,
  "paramType": "4",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [
    {
      "serviceParamHttpType": "",
      "serviceParamType": "2",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "data",
      "demo": "{\"scheduledAt\":1684135189000,\"qtyFulfilledCount\":10,\"amendabilityCutOffDate\":1684135989000,\"preferredPickupTime\":\"13:00-17:00\",\"items\":[{\"name\":\"Salmon\",\"qtyFulfilled\":10,\"sku\":\"19739731408\",\"size\":\"2.5kg\",\"shipmentsInfo\":[{\"qty\":5,\"orderId\":\"49e74qjnkprp1to4\"},{\"qty\":6,\"orderId\":\"49e74qjn1prp1to4\"}],\"minimumExpiryDate\":1770357600000,\"qty\":11,\"vpc\":\"19739731408\",\"imageUrl\":\"http://media.redmart.com/newmedia/1600x/i/m/xxx.jpg\",\"rpc\":123456}],\"pickedAt\":1684136189000,\"id\":123,\"status\":\"pickedup\",\"category\":\"Dry\",\"qtyCount\":11}",
      "required": false,
      "paramType": "4",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 109320,
      "apiId": "3869",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "data",
      "parentId": 109319,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "com.alibaba.dchain.redmart.proxy.api.sellerOpenAPI.response.PickUpJobDTO",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "pickup job details"
    },
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
      "id": 109321,
      "apiId": "3869",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "success",
      "parentId": 109319,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.Boolean",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "success"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "errorMessage",
      "demo": "\"ERROR\"",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 109322,
      "apiId": "3869",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "errorMessage",
      "parentId": 109319,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "error message"
    }
  ],
  "maxListSize": "",
  "id": 109319,
  "apiId": "3869",
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
  "serviceParamPath": "com.alibaba.dchain.redmart.proxy.api.common.BaseResponse",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "result"
}
```
