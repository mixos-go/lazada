---
title: ReturnOrderCreation
category: FBL API
api_name: ReturnOrderCreation
method: POST
path: /fbl/returns/create
---

**Category:** FBL API
**API:** ReturnOrderCreation

**Method:** POST
**HTTP Path:** /fbl/returns/create

## API Description
Api to create customer returns

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
| tracking | Object | Yes | tracking |
| tracking.origin | Object | Yes | origin |
| tracking.origin.location | Object | Yes | location |
| tracking.origin.location.address | String | Yes | Address |
| tracking.origin.location.address_id | String | Yes | Address ID |
| tracking.origin.location.details | String | No | Additional details of the location |
| tracking.tracking_number | String | Yes | Tracking Number |
| platform_name | String | Yes | Platform Name |
| platform_order_creation_time | String | Yes | Sales order creation time of platform side Datetime format: 2017-11-17T10:14:13.185Z |
| return_comment | String | Yes | Customer comments accompanying the return order, will be used as reference during quality check |
| return_delivery_type | String | Yes | Return delivery type (always return_by_customer) |
| return_order_number | String | Yes | Return order number from platform; must be unique |
| sales_order_number | String | Yes | Sales order number accompanying the original fulfilment order request |
| currency | String | Yes | Currency |
| customer | Object | Yes | customer info |
| customer.phone | String | Yes | Customer phone |
| customer.email | String | No | Customer email |
| customer.name | String | Yes | Customer name |
| platform_order_id | String | Yes | Return order id - unique order level Identifier used to send return order and item status notification events |
| parcel | Object | Yes | parcel |
| parcel.items | Object[] | Yes | items |
| parcel.items.name | String | Yes | Item name |
| parcel.items.paid_price | String | No | Paid Price Minimum value : 0 |
| parcel.items.platform_item_id | String | Yes | Return item id - unique item level Identifier used to send return item status notification events |
| parcel.items.quantity | Number | Yes | Quantity Minimum value : 1 |
| parcel.items.return_reason | String | Yes | Return reason (please refer to list of return reasons below) |
| parcel.items.return_type | String | Yes | Return Type (always normal) |
| parcel.items.seller_return_policy | String | Yes | Seller return policy (free text) |
| parcel.items.sku | String | Yes | Fulfillment SKU id |
| parcel.items.unit_price | String | Yes | Price of a single unit Minimum value : 0 |
| parcel.items.weight | String | Yes | Weight of a single unit in grams Minimum value : 0 |
| parcel.items.width | String | Yes | Width in cm Minimum value : 0 |
| parcel.items.delivery_package_id | String | Yes | Package indentifier used to deliver original sales order item to customer |
| parcel.items.fulfillment_type | String | Yes | Fulfillment type (always MCL) |
| parcel.items.height | String | Yes | Height in cm. Minimum value : 0 |
| parcel.items.length | String | Yes | Length in cm. Minimum value : 0 |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| data | Object | No | result |
| data.return_id | String | No | Reference return id used for further communication, like updating return cancellation status. It must be saved on client side. |
| success | Boolean | No | is success |
| error_code | String | No | error code |
| error_message | String | No | error message |

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
  "serviceParamType": "2",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "data",
  "demo": "{\"return_id\":\"123e4567-e89b-12d3-a456-426655440000\"}",
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
      "paramName": "return_id",
      "demo": "123e4567-e89b-12d3-a456-426655440000",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 51077,
      "apiId": "1719",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "return_id",
      "parentId": 51076,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "Reference return id used for further communication, like updating return cancellation status. It must be saved on client side."
    }
  ],
  "maxListSize": "",
  "id": 51076,
  "apiId": "1719",
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
  "desc": "result"
}
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
  "id": 51078,
  "apiId": "1719",
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
  "desc": "is success"
}
{
  "serviceParamHttpType": "3",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "error_code",
  "demo": "400",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 51079,
  "apiId": "1719",
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
  "demo": "bad request",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 51080,
  "apiId": "1719",
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
```
