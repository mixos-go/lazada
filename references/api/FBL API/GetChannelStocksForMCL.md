---
title: GetChannelStocksForMCL
category: FBL API
api_name: GetChannelStocksForMCL
method: GET
path: /fbl/channel_stocks/get
---

**Category:** FBL API
**API:** GetChannelStocksForMCL

**Method:** GET
**HTTP Path:** /fbl/channel_stocks/get

## API Description
Query Channel Stocks

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
| platform_name | String | Yes | Platform Name |
| fulfillment_sku_id | Number | Yes | Fulfillment Sku ID |
| warehouse_code | String | No | Warehouse Code |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| success | Boolean | No | Success Flag |
| error_code | String | No | Error Code |
| error_message | String | No | Error Message |
| data | Object | No | Result Data |
| data.fulfillment_sku_id | Number | No | Fulfillment Sku ID |
| data.stocks | Object[] | No | Stocks by Warehouses |
| data.stocks.warehouse_code | String | No | Warehouse Code |
| data.stocks.channel_stocks | Object[] | No | Stocks by Channel |
| data.stocks.channel_stocks.quantity | Number | No | Quantity |
| data.stocks.channel_stocks.channel | String | No | Channel Value: EXTERNAL |

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
  "hitLog": true,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "success",
  "demo": "TRUE",
  "required": false,
  "paramType": "3",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 51247,
  "apiId": "1726",
  "docVisible": true,
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
  "desc": "Success Flag"
}
{
  "serviceParamHttpType": "3",
  "serviceParamType": "1",
  "hitLog": true,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "error_code",
  "demo": "Error Code",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 51248,
  "apiId": "1726",
  "docVisible": true,
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
  "desc": "Error Code"
}
{
  "serviceParamHttpType": "3",
  "serviceParamType": "1",
  "hitLog": true,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "error_message",
  "demo": "Error Message",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 51249,
  "apiId": "1726",
  "docVisible": true,
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
  "desc": "Error Message"
}
{
  "serviceParamHttpType": "3",
  "serviceParamType": "2",
  "hitLog": true,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "data",
  "demo": "{}",
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
      "hitLog": true,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "fulfillment_sku_id",
      "demo": "222222",
      "required": false,
      "paramType": "2",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 51251,
      "apiId": "1726",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "fulfillment_sku_id",
      "parentId": 51250,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "Fulfillment Sku ID"
    },
    {
      "serviceParamHttpType": "3",
      "serviceParamType": "3",
      "hitLog": true,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "stocks",
      "demo": "[]",
      "required": false,
      "paramType": "9",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [
        {
          "serviceParamHttpType": "3",
          "serviceParamType": "1",
          "hitLog": true,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "warehouse_code",
          "demo": "OMS-LAZADA-TH-W-1",
          "required": false,
          "paramType": "1",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 51253,
          "apiId": "1726",
          "docVisible": true,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "warehouse_code",
          "parentId": 51252,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "Warehouse Code"
        },
        {
          "serviceParamHttpType": "3",
          "serviceParamType": "3",
          "hitLog": true,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "channel_stocks",
          "demo": "[]",
          "required": false,
          "paramType": "9",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [
            {
              "serviceParamHttpType": "3",
              "serviceParamType": "1",
              "hitLog": true,
              "defaultValue": "",
              "previewDemo": "",
              "maxSize": "",
              "paramName": "quantity",
              "demo": "16",
              "required": false,
              "paramType": "2",
              "mappingValue": "",
              "minValue": null,
              "dataMaskUrl": "",
              "enumValue": "",
              "children": [],
              "maxListSize": "",
              "id": 51255,
              "apiId": "1726",
              "docVisible": true,
              "paramOrder": "",
              "moreLimit": "",
              "maxValue": null,
              "paramFrom": "2",
              "sensitiveDataTag": "",
              "maskField": "",
              "serviceParamName": "quantity",
              "parentId": 51254,
              "dataSecurityLevel": "C2",
              "serviceParamPath": "",
              "mappingType": "1",
              "regexExpression": "",
              "constantValue": "",
              "desc": "Quantity"
            },
            {
              "serviceParamHttpType": "3",
              "serviceParamType": "1",
              "hitLog": true,
              "defaultValue": "",
              "previewDemo": "",
              "maxSize": "",
              "paramName": "channel",
              "demo": "EXTERNAL",
              "required": false,
              "paramType": "1",
              "mappingValue": "",
              "minValue": null,
              "dataMaskUrl": "",
              "enumValue": "",
              "children": [],
              "maxListSize": "",
              "id": 51256,
              "apiId": "1726",
              "docVisible": true,
              "paramOrder": "",
              "moreLimit": "",
              "maxValue": null,
              "paramFrom": "2",
              "sensitiveDataTag": "",
              "maskField": "",
              "serviceParamName": "channel",
              "parentId": 51254,
              "dataSecurityLevel": "C2",
              "serviceParamPath": "",
              "mappingType": "1",
              "regexExpression": "",
              "constantValue": "",
              "desc": "Channel Value: EXTERNAL"
            }
          ],
          "maxListSize": "",
          "id": 51254,
          "apiId": "1726",
          "docVisible": true,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "channel_stocks",
          "parentId": 51252,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "Stocks by Channel"
        }
      ],
      "maxListSize": "",
      "id": 51252,
      "apiId": "1726",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "stocks",
      "parentId": 51250,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "Stocks by Warehouses"
    }
  ],
  "maxListSize": "",
  "id": 51250,
  "apiId": "1726",
  "docVisible": true,
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
  "desc": "Result Data"
}
```
