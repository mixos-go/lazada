---
title: saveSellerWarehouseInfo
category: Seller API
api_name: saveSellerWarehouseInfo
method: GET/POST
path: /rc/sellerWarehouse/saveWarehouseInfo
---

**Category:** Seller API
**API:** saveSellerWarehouseInfo

**Method:** GET/POST
**HTTP Path:** /rc/sellerWarehouse/saveWarehouseInfo

## API Description
Api to create or edit the seller warehouse info except the "default" dropshipping warehouse and the return warehouse.

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
| ownerType | Number | Yes | the fixed value is 0 |
| sellerId | Number | Yes | seller id |
| warehouseOwnerType | String | Yes | the fixed value is SELLER |
| warehouseContactDTO | Object | Yes | address info |
| warehouseContactDTO.phoneNumber | String | Yes | phone |
| warehouseContactDTO.email | String | Yes | email |
| siteId | String | Yes | site id |
| warehouseAddressInfoDTO | Object | Yes | address info |
| warehouseAddressInfoDTO.locationLevel2Label | String | Yes | province |
| warehouseAddressInfoDTO.address | String | Yes | address detail |
| warehouseAddressInfoDTO.locationLevel4Label | String | Yes | district |
| warehouseAddressInfoDTO.locationLevel3Label | String | Yes | city |
| warehouseAddressInfoDTO.postalCode | String | Yes | postal code |
| warehouseAddressInfoDTO.latitude | Number | No | latitude |
| warehouseAddressInfoDTO.countryIosCode | String | Yes | currencyCode |
| warehouseAddressInfoDTO.defaultAddress | Number | Yes | the fixed value is 0 |
| warehouseAddressInfoDTO.longitude | Number | No | longitude |
| warehouseType | Number | Yes | the fixed value is 200 |
| ownerId | Number | Yes | seller id |
| warehouseName | String | Yes | warehouse name |
| currencyCode | String | Yes | currency code |
| resourceType | Number | Yes | resourceType - the fixed value is 1. |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| result | Object | Yes | result |
| result.not_success | Boolean | Yes | not success |
| result.success | Boolean | Yes | success |
| result.module | Boolean | Yes | true of false for the create or update result |
| result.repeated | Boolean | Yes | repeated |
| result.retry | Boolean | Yes | retry |

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
  "demo": "{   \"notSuccess\": false,   \"success\": true,   \"module\": true,   \"class\": \"com.alibaba.ecommerce.module.Response\",   \"repeated\": false,   \"retry\": false }",
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
      "paramName": "not_success",
      "demo": "false",
      "required": true,
      "paramType": "3",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 106575,
      "apiId": "3759",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "notSuccess",
      "parentId": 106574,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.Boolean",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "not  success"
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
      "id": 106576,
      "apiId": "3759",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "success",
      "parentId": 106574,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.Boolean",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "success"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "module",
      "demo": "true",
      "required": true,
      "paramType": "3",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 106577,
      "apiId": "3759",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "module",
      "parentId": 106574,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.Boolean",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "true of false for the create or update result"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "repeated",
      "demo": "false",
      "required": true,
      "paramType": "3",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 106578,
      "apiId": "3759",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "repeated",
      "parentId": 106574,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.Boolean",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "repeated"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "retry",
      "demo": "false",
      "required": true,
      "paramType": "3",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 106579,
      "apiId": "3759",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "retry",
      "parentId": 106574,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.Boolean",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "retry"
    }
  ],
  "maxListSize": "",
  "id": 106574,
  "apiId": "3759",
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
  "serviceParamPath": "com.alibaba.ecommerce.module.Response",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "result"
}
```
