---
title: clickserver
category: Sponsored Solutions API
api_name: clickserver
method: GET/POST
path: /gproject/ads/aidc/click
---

**Category:** Sponsored Solutions API
**API:** clickserver

**Method:** GET/POST
**HTTP Path:** /gproject/ads/aidc/click

## API Description
aidc click server interface

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
| cpcClickDO | Object | No | cookie section |
| cpcClickDO.ext | String | No | //扩展参数 |
| cpcClickDO.referer | String | No | referer |
| cpcClickDO.e | String | Yes | 加密串 |
| cpcClickDO.utdId | String | Yes | usertrack section |
| cpcClickDO.ip | String | Yes | ip |
| cpcClickDO.utkey | String | No | //友盟电商墙app标识 |
| cpcClickDO.utsid | String | No | //友盟电商墙设备标识 |
| cpcClickDO.clickid | String | No | clickid |
| cpcClickDO.userAgent | String | No | 使用默认值 |
| cpcClickDO.accept | String | No | //不能为空,反作弊加密串 |
| cpcClickDO.cna | String | No | cookie section |
| cpcClickDO.host | String | No | host |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| result | Object | Yes | Result |
| result.headers | Object | Yes | headers |
| result.success | Boolean | Yes | success true / false |
| result.model | Object | Yes | model |
| result.biz_ext_map | Object | Yes | biz_ext_map |
| result.mapping_code | String | Yes | mapping_code |
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
  "demo": "{   \"result\": {     \"headers\": {},     \"msg_code\": \"BIZ_SUCCESS\",     \"http_status_code\": 200,     \"success\": true,     \"msg_info\": \"ok.\",     \"model\": \"https://www.lazada.sg/products/i2203627402-s12629536262.html?ali_trackid=1_209b040e6a4342d8db11e283aa911a00\"   },   \"code\": \"0\",   \"request_id\": \"212a71d317494484556257760\",   \"_trace_id_\": \"0bb4056f17494484554421071e1e10\" }",
  "required": true,
  "paramType": "4",
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
      "demo": "headers",
      "required": true,
      "paramType": "4",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 122341,
      "apiId": "4297",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "headers",
      "parentId": 122340,
      "dataSecurityLevel": "S2",
      "serviceParamPath": "java.util.Map<java.lang.String, java.lang.String>",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "headers"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "success",
      "demo": "success",
      "required": true,
      "paramType": "3",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 122342,
      "apiId": "4297",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "success",
      "parentId": 122340,
      "dataSecurityLevel": "S2",
      "serviceParamPath": "boolean",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "success true / false"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "2",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "model",
      "demo": "model",
      "required": true,
      "paramType": "4",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 122343,
      "apiId": "4297",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "model",
      "parentId": 122340,
      "dataSecurityLevel": "S2",
      "serviceParamPath": "java.lang.Object",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "model"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "2",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "biz_ext_map",
      "demo": "biz_ext_map",
      "required": true,
      "paramType": "4",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 122344,
      "apiId": "4297",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "bizExtMap",
      "parentId": 122340,
      "dataSecurityLevel": "S2",
      "serviceParamPath": "java.util.Map",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "biz_ext_map"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "mapping_code",
      "demo": "mapping_code",
      "required": true,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 122345,
      "apiId": "4297",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "mappingCode",
      "parentId": 122340,
      "dataSecurityLevel": "S2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "mapping_code"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "msg_info",
      "demo": "msg_info",
      "required": true,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 122346,
      "apiId": "4297",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "msgInfo",
      "parentId": 122340,
      "dataSecurityLevel": "S2",
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
      "demo": "msg_code",
      "required": true,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 122347,
      "apiId": "4297",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "msgCode",
      "parentId": 122340,
      "dataSecurityLevel": "S2",
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
      "demo": "http_status_code",
      "required": true,
      "paramType": "2",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 122348,
      "apiId": "4297",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "httpStatusCode",
      "parentId": 122340,
      "dataSecurityLevel": "S2",
      "serviceParamPath": "int",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "http_status_code"
    }
  ],
  "maxListSize": "",
  "id": 122340,
  "apiId": "4297",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "",
  "parentId": 0,
  "dataSecurityLevel": "S2",
  "serviceParamPath": "com.taobao.mtop.common.Result",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Result"
}
```
