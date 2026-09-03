---
title: EarlyBirdActivityAddSkusV2
category: Early Bird Price API
api_name: EarlyBirdActivityAddSkusV2
method: POST
path: /activity/early/bird/addSkus/v2
---

**Category:** Early Bird Price API
**API:** EarlyBirdActivityAddSkusV2

**Method:** POST
**HTTP Path:** /activity/early/bird/addSkus/v2

## API Description
add skus for early bird activity

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
| sku_list | Object[] | Yes | sku list |
| sku_list.product_id | Number | Yes | product id |
| sku_list.order_total_budget | Number | Yes | order total budget inventory |
| sku_list.discount_price | String | Yes | discount price |
| sku_list.sku_id | Number | Yes | sku id |
| page_no | Number | No | page no |
| name | String | No | activity name |
| page_size | Number | No | page size |
| id | Number | Yes | activity id |
| source | String | No | source |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| result | Object | Yes | result |
| result.success | Boolean | Yes | interface success |
| result.module | Object | Yes | null |
| result.error_code | Object | Yes | error message |
| result.error_code.error_code_params | Object[] | Yes | message |
| result.error_code.display_message | String | Yes | message |
| result.error_code.log_message | String | Yes | message |
| result.error_code.key | String | Yes | error key |
| result.repeated | Boolean | Yes | repeated |
| result.retry | Boolean | Yes | retry |

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
  "demo": "{   \"notSuccess\": false,   \"success\": true,   \"module\": null,   \"errorCode\": null,   \"class\": \"com.alibaba.ecommerce.module.Response\",   \"repeated\": false,   \"retry\": false }",
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
      "id": 131658,
      "apiId": "4569",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "success",
      "parentId": 131657,
      "dataSecurityLevel": "S2",
      "serviceParamPath": "boolean",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "interface success"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "2",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "module",
      "demo": "null",
      "required": true,
      "paramType": "4",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 131659,
      "apiId": "4569",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "module",
      "parentId": 131657,
      "dataSecurityLevel": "S2",
      "serviceParamPath": "java.lang.Object",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "null"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "2",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "error_code",
      "demo": " {     \"errorCodeParams\": null,     \"displayMessage\": \"Parameter illegal: discountPrice is null or 0\",     \"logMessage\": null,     \"class\": \"com.alibaba.ecommerce.error.ErrorCode\",     \"key\": \"EARLY_BIRD_BIZ_ERROR\"   }",
      "required": true,
      "paramType": "4",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [
        {
          "serviceParamHttpType": "",
          "serviceParamType": "4",
          "hitLog": null,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "error_code_params",
          "demo": "null",
          "required": true,
          "paramType": "9",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 131661,
          "apiId": "4569",
          "docVisible": true,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "errorCodeParams",
          "parentId": 131660,
          "dataSecurityLevel": "S2",
          "serviceParamPath": "java.lang.Object[]",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "message"
        },
        {
          "serviceParamHttpType": "",
          "serviceParamType": "1",
          "hitLog": null,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "display_message",
          "demo": "Parameter illegal: discountPrice is null or 0",
          "required": true,
          "paramType": "1",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 131662,
          "apiId": "4569",
          "docVisible": true,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "displayMessage",
          "parentId": 131660,
          "dataSecurityLevel": "S2",
          "serviceParamPath": "java.lang.String",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "message"
        },
        {
          "serviceParamHttpType": "",
          "serviceParamType": "1",
          "hitLog": null,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "log_message",
          "demo": "null",
          "required": true,
          "paramType": "1",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 131663,
          "apiId": "4569",
          "docVisible": true,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "logMessage",
          "parentId": 131660,
          "dataSecurityLevel": "S2",
          "serviceParamPath": "java.lang.String",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "message"
        },
        {
          "serviceParamHttpType": "",
          "serviceParamType": "1",
          "hitLog": null,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "key",
          "demo": "EARLY_BIRD_BIZ_ERROR",
          "required": true,
          "paramType": "1",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 131664,
          "apiId": "4569",
          "docVisible": true,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "key",
          "parentId": 131660,
          "dataSecurityLevel": "S2",
          "serviceParamPath": "java.lang.String",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "error key"
        }
      ],
      "maxListSize": "",
      "id": 131660,
      "apiId": "4569",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "errorCode",
      "parentId": 131657,
      "dataSecurityLevel": "S2",
      "serviceParamPath": "com.alibaba.ecommerce.error.ErrorCode",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "error message"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "repeated",
      "demo": "false",
      "required": true,
      "paramType": "3",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 131665,
      "apiId": "4569",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "repeated",
      "parentId": 131657,
      "dataSecurityLevel": "S2",
      "serviceParamPath": "boolean",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "repeated"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "retry",
      "demo": "false",
      "required": true,
      "paramType": "3",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 131666,
      "apiId": "4569",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "retry",
      "parentId": 131657,
      "dataSecurityLevel": "S2",
      "serviceParamPath": "boolean",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "retry"
    }
  ],
  "maxListSize": "",
  "id": 131657,
  "apiId": "4569",
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
  "serviceParamPath": "com.alibaba.ecommerce.module.Response",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "result"
}
```
