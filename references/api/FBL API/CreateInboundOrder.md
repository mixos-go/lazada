---
title: CreateInboundOrder
category: FBL API
api_name: CreateInboundOrder
method: POST
path: /fbl/inbound_order/create
---

**Category:** FBL API
**API:** CreateInboundOrder

**Method:** POST
**HTTP Path:** /fbl/inbound_order/create

## API Description
Create inbound order

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
| warehouse_code | String | Yes | Inbound warehouse code. |
| delivery_type | String | No | Delivery type,Enum: Dropoff / Pickup. |
| seller_warehouse_code | String | No | Seller warehouse code. Default value is seller's first sellerWarehouse, usually it's seller's address in asc. You can get the warehouse list by openApi listIcpWarehouse. |
| estimate_time | String | Yes | Estimated Arrival Time in UTC+0. format is "yyyy-MM-ddTHH:mm:ssZ". |
| comment | String | No | Inbound comment. |
| reference_number | String | No | Reference number. |
| skus | Object[] | Yes | List of inbound skus. Max list size is 100. |
| skus.seller_sku | String | No | Seller sku. |
| skus.fulfillment_sku | String | No | Fulfillment sku code. You should use at least one of params seller_sku and fulfillment_sku. If you send them both, we will use fulfillment_sku to find your sku and ignore param seller_sku. |
| skus.requested_quantity | Number | Yes | Requested inbound quantity. The quantity must be greater than 0. |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| success | Boolean | No | Create success or not. |
| error_code | String | No | Error code. |
| error_message | String | No | Error message. |
| inbound_order_no | String | No | Inbound order number. |

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
  "id": 57526,
  "apiId": "2023",
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
  "desc": "Create success or not."
}
{
  "serviceParamHttpType": "3",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "error_code",
  "demo": "ERROR_SYSTEM",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 57527,
  "apiId": "2023",
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
  "desc": "Error code."
}
{
  "serviceParamHttpType": "3",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "error_message",
  "demo": "Create inbound failed!",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 57528,
  "apiId": "2023",
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
  "desc": "Error message."
}
{
  "serviceParamHttpType": "3",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "inbound_order_no",
  "demo": "IOXXXXX1",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 57529,
  "apiId": "2023",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "inbound_order_no",
  "parentId": 0,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Inbound order number."
}
```
