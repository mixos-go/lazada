---
title: PrintPickuoOrder
category: Choice Customized API
api_name: PrintPickuoOrder
method: GET/POST
path: /pickup_order/print
---

**Category:** Choice Customized API
**API:** PrintPickuoOrder

**Method:** GET/POST
**HTTP Path:** /pickup_order/print

## API Description
Print Pickuo Order.

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
| pickup_order_no | String | Yes | 揽收单号 |
| pdf_size | String | Yes | pdf格式枚举类型。A4纸大小样式、100*100大小样式。{PICKUP_A4/PICKUP_1010} |
| box_number | String | Yes | 装箱数量。（最大值 100） |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| result | Object | Yes | result |
| result.data | Object | Yes | data |
| result.data.file | String | Yes | pdf文件下载路径。{文件下载url有过期时间，过期后需要重新调用生成文件url} |
| result.success | Boolean | Yes | true |
| result.error_message | String | Yes | error msg |
| result.error_code | String | Yes | error code |

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
  "demo": "result",
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
      "paramName": "data",
      "demo": "data",
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
          "hitLog": null,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "file",
          "demo": "http://url",
          "required": true,
          "paramType": "1",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 98568,
          "apiId": "3513",
          "docVisible": true,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "file",
          "parentId": 98567,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.lang.String",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "pdf文件下载路径。{文件下载url有过期时间，过期后需要重新调用生成文件url}"
        }
      ],
      "maxListSize": "",
      "id": 98567,
      "apiId": "3513",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "data",
      "parentId": 98566,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.util.Map",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "data"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "success",
      "demo": "true",
      "required": true,
      "paramType": "3",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 98569,
      "apiId": "3513",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "success",
      "parentId": 98566,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.Boolean",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "true"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "error_message",
      "demo": "null",
      "required": true,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 98570,
      "apiId": "3513",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "errorMessage",
      "parentId": 98566,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "error msg"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "error_code",
      "demo": "null",
      "required": true,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 98571,
      "apiId": "3513",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "errorCode",
      "parentId": 98566,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "error code"
    }
  ],
  "maxListSize": "",
  "id": 98566,
  "apiId": "3513",
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
  "serviceParamPath": "com.alibaba.ascp.choice.center.client.common.BaseResult",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "result"
}
```
