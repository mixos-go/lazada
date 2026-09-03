---
title: CreateFulfillmentSkuForFBL
category: FBL API
api_name: CreateFulfillmentSkuForFBL
method: POST
path: /fbl/fulfillment_sku_fbl/create
---

**Category:** FBL API
**API:** CreateFulfillmentSkuForFBL

**Method:** POST
**HTTP Path:** /fbl/fulfillment_sku_fbl/create

## API Description
create fulfillment sku for specified platform product

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
| sku_id | Number | Yes | platform sku sku_id |
| barcodes | String[] | Yes | barcode list |
| hygroscopic | Boolean | Yes | is product hygroscopic? |
| product_type | String | Yes | food / liquid / danger / other |
| temperature_requirement | String | Yes | "1": normal temperature "4": refrigerated "6": frozen |
| serial_number_flag | Boolean | Yes | is serial number management enabled? |
| shelf_life_flag | Boolean | Yes | is shelf life management enabled? |
| shelf_life_days | Number | No | days of shelf life, required if shelf_life_flag is true. |
| reject_shelf_live | Number | No | days to reject at inbound before expiry, required if shelf_life_flag is true. |
| alert_shelf_live | Number | No | days to alert before expiry, required if shelf_life_flag is true. |
| offline_shelf_live | Number | No | days to take offline before expiry, required if shelf_life_flag is true. |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| success | Boolean | No | request result |
| error_code | String | No | error code |
| error_message | String | No | error message |
| data | Object | No | data |
| data.fulfillment_sku_id | Number | No | fulfillment sku id |
| data.fulfillment_sku_code | String | No | fulfillment sku code |

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
  "id": 97374,
  "apiId": "3473",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "success",
  "parentId": 0,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "request result"
}
{
  "serviceParamHttpType": "3",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "error_code",
  "demo": "INVALID_PARAM",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 97375,
  "apiId": "3473",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "error_code",
  "parentId": 0,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "error code"
}
{
  "serviceParamHttpType": "3",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "error_message",
  "demo": "seller info not found",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 97376,
  "apiId": "3473",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "error_message",
  "parentId": 0,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "error message"
}
{
  "serviceParamHttpType": "3",
  "serviceParamType": "2",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "data",
  "demo": "{ }",
  "required": false,
  "paramType": "4",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [
    {
      "serviceParamHttpType": "3",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "fulfillment_sku_id",
      "demo": "786543234",
      "required": false,
      "paramType": "2",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 97378,
      "apiId": "3473",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "fulfillment_sku_id",
      "parentId": 97377,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "fulfillment sku id"
    },
    {
      "serviceParamHttpType": "3",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "fulfillment_sku_code",
      "demo": "234612356_ID-45679245789",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 97379,
      "apiId": "3473",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "fulfillment_sku_code",
      "parentId": 97377,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "fulfillment sku code"
    }
  ],
  "maxListSize": "",
  "id": 97377,
  "apiId": "3473",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "data",
  "parentId": 0,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "data"
}
```
