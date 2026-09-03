---
title: CreateFulfillmentOrderForMCLV2PNF
category: FBL API
api_name: CreateFulfillmentOrderForMCLV2PNF
method: POST
path: /fbl/fulfillment_order_pnf/create
---

**Category:** FBL API
**API:** CreateFulfillmentOrderForMCLV2PNF

**Method:** POST
**HTTP Path:** /fbl/fulfillment_order_pnf/create

## API Description
Create Fulfillment Order for MCL2.0 PNF

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
| platform_payment_method | String | Yes | Payment method, mainly check cod type |
| remark | String | No | Remark |
| currency | String | Yes | Currency |
| items | Object[] | Yes | Fulfillment order line list, contains no more than 300 items |
| items.paid_price | String | Yes | Item paid price |
| items.platform_delivery_type | String | Yes | Delivery type (this is always standard for now) |
| items.platform_item_id | String | Yes | Unique item level identifier for fulfilment order |
| items.sku | String | No | Sku |
| items.owner_id | String | Yes | Shipper id |
| items.shipping_type | String | Yes | Distribution type (this is always warehouse) |
| items.fulfillment_sku_id | String | Yes | Fulfillment sku id |
| items.quantity | Number | Yes | Quantity (this is always 1) |
| items.store_code | String | Yes | Distribution of warehouse |
| items.unit_price | String | Yes | Item unit price |
| items.warehouse_promised_time | String | No | Warehouse promised estimated arrival time in UTC |
| items.promised_max_time | String | No | Promised max estimated arrival time in UTC |
| items.promised_min_time | String | No | Promised min estimated arrival time in UTC |
| items.platform_sub_trade_id | String | No | Trade platform sub trade order id |
| items.category_name | String | No | Item category name |
| items.fulfillment_priority | Boolean | No | Fulfillment priority |
| platform_name | String | Yes | Trade platform name |
| fulfillment_finish_time | String | No | Estimated warehouse outbound time in UTC |
| platform_order_creation_time | String | Yes | Trade order create time in UTC |
| sales_order_number | String | Yes | Sales order number from platform |
| platform_order_id | String | Yes | Unique order level identifier for fulfilment order |
| out_order_creation_time | String | No | Out fulfillment order create time in UTC |
| seller_store_id | String | No | seller store id |
| seller_store_name | String | No | seller store name |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| success | Boolean | No | Is success |
| error_code | String | No | Error code |
| error_message | String | No | Error message |

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
  "demo": "TRUE",
  "required": false,
  "paramType": "3",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 130476,
  "apiId": "4539",
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
  "desc": "Is success"
}
{
  "serviceParamHttpType": "3",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "error_code",
  "demo": "Error code",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 130477,
  "apiId": "4539",
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
  "desc": "Error code"
}
{
  "serviceParamHttpType": "3",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "error_message",
  "demo": "Error message",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 130478,
  "apiId": "4539",
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
  "desc": "Error message"
}
```
