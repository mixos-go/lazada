---
title: BatchDeliverJitPurchaseOrder
category: Choice Customized API
api_name: BatchDeliverJitPurchaseOrder
method: GET/POST
path: /jit/purchase_order/batch_pickup_deliver
---

**Category:** Choice Customized API
**API:** BatchDeliverJitPurchaseOrder

**Method:** GET/POST
**HTTP Path:** /jit/purchase_order/batch_pickup_deliver

## API Description
Batch Pickup Deliver Jit Purchase Order.

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
| purchaseOrderNoList | String[] | Yes | 采购单号列表，最大100个。{["POJ1001","POJ1002"]} |
| shipperAreaCode | String | Yes | 揽收联系人地址区域，如：CN： 当前支持CN，VN，TH，PH，ID，MY一共6个地区。必填。 |
| shipperAddressId | Number | Yes | 揽收联系人地址id。必填。 |
| shipperAddressDetail | String | Yes | 揽收详细地址。必填。 |
| shipperMobilePhone | String | Yes | 揽收联系人电话。必填。 |
| shipperName | String | Yes | 揽收联系人姓名。必填。 |
| estimatedPickupDate | String | No | 预约揽收日期 {yyyy-MM-dd}。非必填 |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| result | Object | No | result |
| result.data | Object[] | No | data |
| result.data.status | String | No | success |
| result.data.pickup_no | String | No | 揽收单号。发货方式=上门揽收时 返回。 |
| result.data.allow_date_range | String[] | No | 允许的揽收日期范围 |
| result.data.purchase_order_no | String | No | 采购单号 |
| result.data.error_message | String | No | 错误信息 |
| result.success | Boolean | No | true |
| result.error_message | String | No | error msg |
| result.error_code | String | No | error code |

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
| INVALID_STATUS_FORBIDDEN_PICK_UP |  |  | INVALID_STATUS_FORBIDDEN_PICK_UP |

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
  "demo": "result",
  "required": false,
  "paramType": "4",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [
    {
      "serviceParamHttpType": "",
      "serviceParamType": "3",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "data",
      "demo": "data",
      "required": false,
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
          "paramName": "status",
          "demo": "success",
          "required": false,
          "paramType": "1",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 116442,
          "apiId": "4101",
          "docVisible": false,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "status",
          "parentId": 116441,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.lang.String",
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
          "paramName": "pickup_no",
          "demo": "FO1001",
          "required": false,
          "paramType": "1",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 116443,
          "apiId": "4101",
          "docVisible": false,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "pickupNo",
          "parentId": 116441,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.lang.String",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "揽收单号。发货方式=上门揽收时 返回。"
        },
        {
          "serviceParamHttpType": "",
          "serviceParamType": "3",
          "hitLog": false,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "allow_date_range",
          "demo": "[]",
          "required": false,
          "paramType": "6",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 116444,
          "apiId": "4101",
          "docVisible": false,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "allowDateRange",
          "parentId": 116441,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.util.List<java.lang.String>",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "允许的揽收日期范围"
        },
        {
          "serviceParamHttpType": "",
          "serviceParamType": "1",
          "hitLog": false,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "purchase_order_no",
          "demo": "FO1001",
          "required": false,
          "paramType": "1",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 116445,
          "apiId": "4101",
          "docVisible": false,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "purchaseOrderNo",
          "parentId": 116441,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.lang.String",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "采购单号"
        },
        {
          "serviceParamHttpType": "",
          "serviceParamType": "1",
          "hitLog": false,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "error_message",
          "demo": "error msg",
          "required": false,
          "paramType": "1",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 116446,
          "apiId": "4101",
          "docVisible": false,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "errorMessage",
          "parentId": 116441,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.lang.String",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "错误信息"
        }
      ],
      "maxListSize": "",
      "id": 116441,
      "apiId": "4101",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "data",
      "parentId": 116440,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.List<com.alibaba.ascp.choice.center.openapi.BatchDeliveryResult>",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "data"
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
      "id": 116447,
      "apiId": "4101",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "success",
      "parentId": 116440,
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
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "error_message",
      "demo": "error msg",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 116448,
      "apiId": "4101",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "errorMessage",
      "parentId": 116440,
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
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "error_code",
      "demo": "error code",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 116449,
      "apiId": "4101",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "errorCode",
      "parentId": 116440,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "error code"
    }
  ],
  "maxListSize": "",
  "id": 116440,
  "apiId": "4101",
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
  "serviceParamPath": "com.alibaba.ascp.choice.center.client.common.BaseResult",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "result"
}
```
