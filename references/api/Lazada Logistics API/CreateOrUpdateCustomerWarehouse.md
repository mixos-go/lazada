---
title: CreateOrUpdateCustomerWarehouse
category: Lazada Logistics API
api_name: CreateOrUpdateCustomerWarehouse
method: POST
path: /logistics/epis/customers/warehouses
---

**Category:** Lazada Logistics API
**API:** CreateOrUpdateCustomerWarehouse

**Method:** POST
**HTTP Path:** /logistics/epis/customers/warehouses

## API Description
External partner calls LAZADA to create or update warehouses

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
| externalSellerId | String | Yes | External seller ID |
| platformName | String | Yes | Platform name |
| warehouseCode | String | Yes | External warehouse code |
| warehouseName | String | Yes | Warehouse name |
| contactName | String | Yes | Warehouse contact name |
| phone | String | Yes | Warehouse contact phone number. If no country phone prefix, EPIS will append the country prefix of current country |
| email | String | No | Warehouse contact email |
| type | String | Yes | Enum: NORMAL / RETURN |
| address | Object | Yes | Warehouse address |
| address.id | String | Yes | Lazada last level (level 4 / 5) RCode. |
| address.details | String | Yes | Address details |
| solutionCodes | String[] | Yes | List of Lazada solution codes. Enum [LAZADA_STANDARD_VN, LAZADA_BULKY_VN] |
| configuration | Object | No | Warehouse configuration |
| configuration.deliveryNote | String | No | Warehouse default delivery note |
| configuration.services | Object[] | No | VAS options |
| configuration.services.serviceName | String | Yes | service name |
| configuration.services.enable | Boolean | Yes | enable service or not |
| configuration.services.properties | String | No | service properties |
| dropshippingInfo | Object | No | drop shipping info |
| dropshippingInfo.originPartnerName | String | No | Parnert Name |
| dropshippingInfo.originPlatformName | String | No | Platform Name |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| retryable | Boolean | Yes | Is fail request retryable |
| traceId | String | Yes | Trace ID for debugging |
| success | Boolean | Yes | Request success or not |
| errorMessage | String | Yes | Error message |
| errorCode | String | Yes | Error code |
| errors | Object[] | Yes | Error field |
| errors.field | String | Yes | Detail error message |
| errors.errorMessage | String | Yes | When validation failed on field, the error field path will be included, begin with "$." as root object |
| data | Object | No | Response |
| data.convertedAddress | Object | No | Converted warehouse address (Viet Nam address tree update) |
| data.convertedAddress.id | String | No | Lex address ID |
| data.convertedAddress.details | String | No | Address detail |

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
  "id": 124270,
  "apiId": "4363",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "retryable",
  "parentId": 124269,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "boolean",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Is fail request retryable"
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
  "id": 124271,
  "apiId": "4363",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "traceId",
  "parentId": 124269,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Trace ID for debugging"
}
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
  "id": 124272,
  "apiId": "4363",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "success",
  "parentId": 124269,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "boolean",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Request success or not"
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
  "id": 124273,
  "apiId": "4363",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "errorMessage",
  "parentId": 124269,
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
  "id": 124274,
  "apiId": "4363",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "errorCode",
  "parentId": 124269,
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
      "id": 124276,
      "apiId": "4363",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "field",
      "parentId": 124275,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "Detail error message"
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
      "id": 124277,
      "apiId": "4363",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "message",
      "parentId": 124275,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "When validation failed on field, the error field path will be included, begin with \"$.\" as root object"
    }
  ],
  "maxListSize": "",
  "id": 124275,
  "apiId": "4363",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "errors",
  "parentId": 124269,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.util.List<com.alibaba.logistics.epis.shared.model.api.response.Error>",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Error field"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "2",
  "hitLog": false,
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
      "serviceParamHttpType": "",
      "serviceParamType": "2",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "convertedAddress",
      "demo": "{}",
      "required": false,
      "paramType": "4",
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
          "paramName": "id",
          "demo": "R12345",
          "required": false,
          "paramType": "1",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 124284,
          "apiId": "4363",
          "docVisible": false,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "id",
          "parentId": 124283,
          "dataSecurityLevel": "S2",
          "serviceParamPath": "java.lang.String",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "Lex address ID"
        },
        {
          "serviceParamHttpType": "",
          "serviceParamType": "1",
          "hitLog": false,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "details",
          "demo": "62 Nam Ky Khoi Nghia",
          "required": false,
          "paramType": "1",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 124285,
          "apiId": "4363",
          "docVisible": false,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "details",
          "parentId": 124283,
          "dataSecurityLevel": "S2",
          "serviceParamPath": "java.lang.String",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "Address detail"
        }
      ],
      "maxListSize": "",
      "id": 124283,
      "apiId": "4363",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "convertedAddress",
      "parentId": 124282,
      "dataSecurityLevel": "S2",
      "serviceParamPath": "com.alibaba.logistics.epis.api.response.nested.ConvertedAddressDto",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "Converted warehouse address (Viet Nam address tree update)"
    }
  ],
  "maxListSize": "",
  "id": 124282,
  "apiId": "4363",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "data",
  "parentId": 124269,
  "dataSecurityLevel": "S2",
  "serviceParamPath": "com.alibaba.logistics.epis.api.response.SaveWarehouseResponse",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Response"
}
```
