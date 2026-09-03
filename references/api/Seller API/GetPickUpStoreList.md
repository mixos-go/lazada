---
title: GetPickUpStoreList
category: Seller API
api_name: GetPickUpStoreList
method: GET/POST
path: /rc/store/list/get
---

**Category:** Seller API
**API:** GetPickUpStoreList

**Method:** GET/POST
**HTTP Path:** /rc/store/list/get

## API Description
return the list of pick up store infomation for requested Seller

## Common Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| app_key | String | Yes | Unique app ID issued by LAZADA Open Platform console when you apply for an app category |
| timestamp | String | Yes | The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time |
| access_token | String | Yes | API interface call credentials |
| sign_method | String | Yes | The HMAC hash algorithm you are using to calculate your signature |
| sign | String | Yes | Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details) |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| result | String | Yes | result |
| result.headers | Object | Yes | xx |
| result.success | Boolean | Yes | true/false |
| result.model | Object | Yes | result DTO |
| result.biz_ext_map | Object | Yes | xx |
| result.mapping_code | String | Yes | xx |
| result.msg_info | String | Yes | msg_info |
| result.msg_code | String | Yes | msg_code |
| result.http_status_code | Number | Yes | http_status_code |

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
| IllegalAccessToken |  |  | The specified access token is invalid or expired |

## Examples
```json
{
  "serviceParamHttpType": "",
  "serviceParamType": "2",
  "hitLog": null,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "result",
  "demo": "{\"headers\":{},\"success\":true,\"model\":{\"sellerId\":\"100000313\",\"pickUpStoreInfo\":[{\"pickUpStoreCode\":\"xxx\"},\"class\":\"com.taobao.mtop.common.Result\",\"httpStatusCode\":200}",
  "required": true,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [
    {
      "serviceParamHttpType": "",
      "serviceParamType": "2",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "headers",
      "demo": "xx",
      "required": true,
      "paramType": "4",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 49682,
      "apiId": "1537",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "headers",
      "parentId": 49681,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.util.Map<java.lang.String, java.lang.String>",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "xx"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "success",
      "demo": "true/false",
      "required": true,
      "paramType": "3",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 49683,
      "apiId": "1537",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "success",
      "parentId": 49681,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "boolean",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "true/false"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "2",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "model",
      "demo": "{\"sellerId\":\"xx\",\"pickUpStoreInfo\":[{xx],\"class\":\"com.alibaba.global.supplychain.rc.api.dto.response.store.SellerStoreReadDTO\"}",
      "required": true,
      "paramType": "4",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 49684,
      "apiId": "1537",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "model",
      "parentId": 49681,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "com.alibaba.global.supplychain.rc.api.dto.response.store.SellerStoreInfoDTO",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "result DTO"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "2",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "biz_ext_map",
      "demo": "xx",
      "required": true,
      "paramType": "4",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 49685,
      "apiId": "1537",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "bizExtMap",
      "parentId": 49681,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.util.Map",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "xx"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "mapping_code",
      "demo": "xx",
      "required": true,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 49686,
      "apiId": "1537",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "mappingCode",
      "parentId": 49681,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "xx"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "msg_info",
      "demo": "sellerId can't be null",
      "required": true,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 49687,
      "apiId": "1537",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "msgInfo",
      "parentId": 49681,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "msg_info"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "msg_code",
      "demo": "FAIL_BIZ_SELLERID_NULL",
      "required": true,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 49688,
      "apiId": "1537",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "msgCode",
      "parentId": 49681,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "msg_code"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "http_status_code",
      "demo": "xx",
      "required": true,
      "paramType": "2",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 49689,
      "apiId": "1537",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "httpStatusCode",
      "parentId": 49681,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "int",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "http_status_code"
    }
  ],
  "maxListSize": "",
  "id": 49681,
  "apiId": "1537",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "",
  "parentId": 0,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "com.taobao.mtop.common.Result",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "result"
}
```
