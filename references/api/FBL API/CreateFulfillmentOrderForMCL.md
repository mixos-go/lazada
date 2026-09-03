---
title: CreateFulfillmentOrderForMCL
category: FBL API
api_name: CreateFulfillmentOrderForMCL
method: POST
path: /fbl/fulfillment_order/create
---

**Category:** FBL API
**API:** CreateFulfillmentOrderForMCL

**Method:** POST
**HTTP Path:** /fbl/fulfillment_order/create

## API Description
Create Fulfillment Order

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
| receiver | Object | Yes | Receiver info |
| receiver.zip_code | String | No | Zip code |
| receiver.country_iso | String | Yes | iso-3166-1 country code |
| receiver.country | String | No | Receiver country |
| receiver.province | String | No | Receiver province |
| receiver.city | String | No | Receiver city |
| receiver.district | String | No | Receiver district |
| receiver.town | String | No | Receiver town |
| receiver.detail_address | String | Yes | Receiver detail address |
| receiver.area_id | String | No | Receiver area id from LEL |
| receiver.division_id | String | No | Receiver division id from LEL |
| receiver.address_id | String | Yes | Receiver address id from LEL |
| receiver.mobile_phone | String | Yes | Receiver mobile phone |
| receiver.telephone | String | No | Receiver telephone |
| receiver.company_name | String | No | Receiver company name |
| receiver.contact_name | String | Yes | Receiver cantact name |
| receiver.email | String | Yes | Receiver email |
| platform_name | String | Yes | Trade platform name |
| fulfillment_finish_time | String | No | Estimated warehouse outbound time in UTC |
| platform_order_creation_time | String | Yes | Trade order create time in UTC |
| sales_order_number | String | Yes | Sales order number from platform |
| platform_order_id | String | Yes | Unique order level identifier for fulfilment order |
| out_order_creation_time | String | No | Out fulfillment order create time in UTC |
| is_platform_nominated_fleet | Boolean | No | Whether platform nominated fleet |
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
  "id": 130440,
  "apiId": "4538",
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
  "id": 130441,
  "apiId": "4538",
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
  "id": 130442,
  "apiId": "4538",
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
