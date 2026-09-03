---
title: GetShipmentProvider
category: Fulfillment API
api_name: GetShipmentProvider
method: GET/POST
path: /order/shipment/providers/get
---

**Category:** Fulfillment API
**API:** GetShipmentProvider

**Method:** GET/POST
**HTTP Path:** /order/shipment/providers/get

## API Description
Use this API to get the list of all active shipping providers, which is needed when working with the PackOrder API.

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
| getShipmentProvidersReq | Object | Yes | req body |
| getShipmentProvidersReq.orders | Object[] | Yes | Batch size is limited to 20, to pack orders |
| getShipmentProvidersReq.orders.order_id | Number | Yes | order_id |
| getShipmentProvidersReq.orders.order_item_ids | Number[] | Yes | order_item_ids |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| result | Object | Yes | resp body |
| result.data | Object | Yes | resp body |
| result.data.platform_default | Number | Yes | 1==seller not need or can't choose transferring warehouses . 0=seller must choose transferring warehouses from shipment_providers and pass to PACK API by self |
| result.data.shipment_providers | Object[] | Yes | transferring warehouses list which seller can be choose |
| result.data.shipment_providers.name | String | No | transferring warehouses name |
| result.data.shipment_providers.provider_code | String | No | transferring warehouses code |
| result.data.shipping_allocate_type | String | No | NTFS/TFS ，Directly pass through to the PACK API |
| result.success | Boolean | Yes | process result |
| result.error_code | String | Yes | exists when success is false |
| result.error_msg | String | Yes | exists when success is false |

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
  "demo": "{\"data\":{\"platform_default\":1,\"shipment_providers\":[]},\"success\":true,\"errorCode\":\"\",\"errorMsg\":\"\"}",
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
          "hitLog": null,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "platform_default",
          "demo": "1",
          "required": true,
          "paramType": "2",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 71894,
          "apiId": "2545",
          "docVisible": true,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "platform_default",
          "parentId": 71893,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.lang.Integer",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "1==seller not need or can't choose transferring warehouses .   0=seller must choose transferring warehouses from shipment_providers  and pass to PACK API by self"
        },
        {
          "serviceParamHttpType": "",
          "serviceParamType": "3",
          "hitLog": null,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "shipment_providers",
          "demo": "[]",
          "required": true,
          "paramType": "9",
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
              "paramName": "name",
              "demo": "Cainiao",
              "required": false,
              "paramType": "1",
              "mappingValue": "",
              "minValue": null,
              "dataMaskUrl": "",
              "enumValue": "",
              "children": [],
              "maxListSize": "",
              "id": 71896,
              "apiId": "2545",
              "docVisible": false,
              "paramOrder": "",
              "moreLimit": "",
              "maxValue": null,
              "paramFrom": "2",
              "sensitiveDataTag": "",
              "maskField": "",
              "serviceParamName": "name",
              "parentId": 71895,
              "dataSecurityLevel": "C2",
              "serviceParamPath": "java.lang.String",
              "mappingType": "1",
              "regexExpression": "",
              "constantValue": "",
              "desc": "transferring warehouses name"
            },
            {
              "serviceParamHttpType": "",
              "serviceParamType": "1",
              "hitLog": false,
              "defaultValue": "",
              "previewDemo": "",
              "maxSize": "",
              "paramName": "provider_code",
              "demo": "asc_xxx_xxx",
              "required": false,
              "paramType": "1",
              "mappingValue": "",
              "minValue": null,
              "dataMaskUrl": "",
              "enumValue": "",
              "children": [],
              "maxListSize": "",
              "id": 71897,
              "apiId": "2545",
              "docVisible": false,
              "paramOrder": "",
              "moreLimit": "",
              "maxValue": null,
              "paramFrom": "2",
              "sensitiveDataTag": "",
              "maskField": "",
              "serviceParamName": "provider_code",
              "parentId": 71895,
              "dataSecurityLevel": "C2",
              "serviceParamPath": "java.lang.String",
              "mappingType": "1",
              "regexExpression": "",
              "constantValue": "",
              "desc": "transferring warehouses code"
            }
          ],
          "maxListSize": "",
          "id": 71895,
          "apiId": "2545",
          "docVisible": true,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "shipment_providers",
          "parentId": 71893,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.util.List<com.alibaba.global.seller.fulfill.api.model.openapi.ShipmentProvider>",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "transferring warehouses list which seller can be choose"
        },
        {
          "serviceParamHttpType": "",
          "serviceParamType": "1",
          "hitLog": false,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "shipping_allocate_type",
          "demo": "TFS",
          "required": false,
          "paramType": "1",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 71898,
          "apiId": "2545",
          "docVisible": false,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "shipping_allocate_type",
          "parentId": 71893,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.lang.String",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "NTFS/TFS ，Directly pass through to the PACK API "
        }
      ],
      "maxListSize": "",
      "id": 71893,
      "apiId": "2545",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "data",
      "parentId": 71892,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "com.alibaba.global.seller.fulfill.api.response.openapi.GetShipmentProviderResp",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "resp body"
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
      "id": 71899,
      "apiId": "2545",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "success",
      "parentId": 71892,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.Boolean",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "process result"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "error_code",
      "demo": "70011",
      "required": true,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 71900,
      "apiId": "2545",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "errorCode",
      "parentId": 71892,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "exists when success is false"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "error_msg",
      "demo": "seller not found",
      "required": true,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 71901,
      "apiId": "2545",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "errorMsg",
      "parentId": 71892,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "exists when success is false"
    }
  ],
  "maxListSize": "",
  "id": 71892,
  "apiId": "2545",
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
  "serviceParamPath": "com.alibaba.normandie.gateway.client.domain.lazop.APIResult",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "resp body"
}
```
