---
title: EpisGetDeliveryOptions
category: Lazada Logistics API
api_name: EpisGetDeliveryOptions
method: GET
path: /logistics/epis/service/delivery_options
---

**Category:** Lazada Logistics API
**API:** EpisGetDeliveryOptions

**Method:** GET
**HTTP Path:** /logistics/epis/service/delivery_options

## API Description
External partner call EPIS to get delivery options for package

## Common Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| app_key | String | Yes | Unique app ID issued by LAZADA Open Platform console when you apply for an app category |
| timestamp | String | Yes | The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time |
| access_token | String | No | API interface call credentials |
| sign_method | String | Yes | The HMAC hash algorithm you are using to calculate your signature |
| sign | String | Yes | Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details) |

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| fromLocation | Object | No | Origin geo location |
| fromLocation.latitude | String | Yes | Latitude |
| fromLocation.longitude | String | Yes | Longitude |
| toLocation | Object | No | Destination geo location |
| toLocation.latitude | String | Yes | Latitude |
| toLocation.longitude | String | Yes | Longitude |
| shipper | Object | Yes | Shipper information |
| shipper.externalSellerId | String | Yes | External seller ID |
| shipper.platformName | String | No | Platform where seller order comes from |
| shipper.externalWarehouseCode | String | No | External warehouse code |
| dimWeight | Object | Yes | Package level dimweight |
| dimWeight.length | String | Yes | length Unit: centimeter |
| dimWeight.width | String | Yes | width Unit: centimeter |
| dimWeight.weight | String | Yes | weight Unit: gram |
| dimWeight.height | String | Yes | height Unit: centimeter |
| origin | Object | Yes | Origin info |
| origin.details | String | Yes | Origin address detail |
| origin.id | String | Yes | Origin address id Lazada Last level (level 4 / 5) RCode. |
| destination | Object | Yes | Destination info |
| destination.details | String | Yes | Destination address detail |
| destination.id | String | Yes | Destination address id Lazada Last level (level 4 / 5) RCode. |
| payment | Object | Yes | Payment info |
| payment.totalAmount | String | Yes | Payment total amount |
| payment.currency | String | Yes | Payment currency. Example: VND,SGD,USD,... |
| payment.paymentType | String | Yes | Payment type. Enum [COD, Non-COD] |
| packageType | String | No | Package type. [Sales_order, Customer_return] |
| deliveryOption | String | No | Delivery service type. Enum [standard, economy] |
| externalOrderId | String | No | Order Id from external |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| data | Object[] | No | Response data |
| data.deliveryOption | String | No | Delivery service type. |
| data.firstMileDeliveryType | String | No | Pickupp or Drop-off |
| data.pickupTargetCutoffTime | String | No | Pickup target cutoff timestamp |
| data.firstMileShippingProvider | String | No | Firstmile shipping provider name |
| data.firstMileShippingProviderSlug | String | No | Firstmile shipping provider slug |
| data.lastMileShippingProvider | String | No | Lastmile shipping provider name |
| data.lastMileShippingProviderSlug | String | No | Lastmile shipping provider slug |
| retryable | Boolean | Yes | Is failed request retryable? |
| traceId | String | Yes | Trace id for debugging |
| success | Boolean | Yes | Is success? |
| errorMessage | String | Yes | Error message |
| errorCode | String | Yes | Error code |
| errors | Object[] | Yes | Detail errors |
| errors.field | String | Yes | When validation failed on field, the error field path will be included, begin with "$." as root object |
| errors.errorMessage | String | Yes | Detail error message |

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
  "serviceParamType": "3",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "data",
  "demo": "[]",
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
      "paramName": "deliveryOption",
      "demo": "standard",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 99329,
      "apiId": "3543",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "deliveryOption",
      "parentId": 99328,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "Delivery service type."
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "firstMileDeliveryType",
      "demo": "Pickupp",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 99330,
      "apiId": "3543",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "firstMileDeliveryType",
      "parentId": 99328,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "Pickupp or Drop-off"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "pickupTargetCutoffTime",
      "demo": "1656329708068",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 99331,
      "apiId": "3543",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "pickupTargetCutoffTime",
      "parentId": 99328,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "Pickup target cutoff timestamp"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "firstMileShippingProvider",
      "demo": "LEX VN",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 99728,
      "apiId": "3543",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "firstMileShippingProvider",
      "parentId": 99328,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "Firstmile shipping provider name"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "firstMileShippingProviderSlug",
      "demo": "lex-vn",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 99729,
      "apiId": "3543",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "firstMileShippingProviderSlug",
      "parentId": 99328,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "Firstmile shipping provider slug"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "lastMileShippingProvider",
      "demo": "LEX VN",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 99730,
      "apiId": "3543",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "lastMileShippingProvider",
      "parentId": 99328,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "Lastmile shipping provider name"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "lastMileShippingProviderSlug",
      "demo": "lex-vn",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 99731,
      "apiId": "3543",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "lastMileShippingProviderSlug",
      "parentId": 99328,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "Lastmile shipping provider slug"
    }
  ],
  "maxListSize": "",
  "id": 99328,
  "apiId": "3543",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "data",
  "parentId": 99319,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.util.List<com.alibaba.logistics.epis.api.response.GetDeliveryOptionsResponse>",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Response data"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": null,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "retryable",
  "demo": "false",
  "required": true,
  "paramType": "3",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 99320,
  "apiId": "3543",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "retryable",
  "parentId": 99319,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.Boolean",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Is failed request retryable?"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": null,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "traceId",
  "demo": "0ba2887315172940728551014",
  "required": true,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 99321,
  "apiId": "3543",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "traceId",
  "parentId": 99319,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Trace id for debugging"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": null,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "success",
  "demo": "false",
  "required": true,
  "paramType": "3",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 99322,
  "apiId": "3543",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "success",
  "parentId": 99319,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.Boolean",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Is success?"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": null,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "errorMessage",
  "demo": "Bad request",
  "required": true,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 99323,
  "apiId": "3543",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "errorMessage",
  "parentId": 99319,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Error message"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": null,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "errorCode",
  "demo": "BAD_REQUEST",
  "required": true,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 99324,
  "apiId": "3543",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "errorCode",
  "parentId": 99319,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Error code"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "3",
  "hitLog": null,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "errors",
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
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "field",
      "demo": "$.items.name",
      "required": true,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 99326,
      "apiId": "3543",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "field",
      "parentId": 99325,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "When validation failed on field, the error field path will be included, begin with \"$.\" as root object"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "errorMessage",
      "demo": "name must not be blank",
      "required": true,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 99327,
      "apiId": "3543",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "message",
      "parentId": 99325,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "Detail error message"
    }
  ],
  "maxListSize": "",
  "id": 99325,
  "apiId": "3543",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "errors",
  "parentId": 99319,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.util.List<com.alibaba.logistics.epis.shared.model.api.response.Error>",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Detail errors"
}
```
