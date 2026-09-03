---
title: GetChoiceSeller
category: Choice Customized API
api_name: GetChoiceSeller
method: GET/POST
path: /choice/seller/get
---

**Category:** Choice Customized API
**API:** GetChoiceSeller

**Method:** GET/POST
**HTTP Path:** /choice/seller/get

## API Description
Get choice seller information by seller ID and site

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
| site | String | Yes | The country site of the queried merchant |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| data | Object | No | Response data |
| data.name_company | String | No | Company name |
| data.name | String | No | Shop name |
| data.seller_id | String | No | Seller's ID |
| data.verified | String | No | Whether the seller is verified |
| data.email | String | No | Seller's email |
| data.short_code | String | No | Seller's short code |
| data.cb | String | No | Whether the seller is a Cross Border seller or not |
| data.location | String | No | location of seller |
| data.status | String | No | three status :Active\Deleted\Inactive |

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
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "data",
  "demo": "{ \"data\": {   \"name_company\": \"alibaba group\",   \"name\": \"abc shop\",   \"verified\": \"true\",   \"location\": \"Singapore\",   \"seller_id\": \"10\",   \"email\": \"Beanbagmart.sg@gmail.com\",   \"short_code\": \"SG1015W\",   \"cb\": \"false\",   \"status\": \"Active\" }, \"code\":\"0\", \"request_id\":\"21017d2816548274295911740\" }",
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
      "paramName": "name_company",
      "demo": "alibaba group",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 91064,
      "apiId": "3215",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "companyName",
      "parentId": 91063,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "Company name"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "name",
      "demo": "abc shop",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "https://open.lazada.com/doc/doc.htm?spm=a2o9m.11193535.0.0.1f2a38e4l12Giz#?nodeId=10784&docId=108297",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 91065,
      "apiId": "3215",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "C",
      "maskField": "common",
      "serviceParamName": "shopName",
      "parentId": 91063,
      "dataSecurityLevel": "C3",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "Shop name"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "seller_id",
      "demo": "10",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 91066,
      "apiId": "3215",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "sellerId",
      "parentId": 91063,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.Long",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "Seller's ID"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "verified",
      "demo": "true",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 91067,
      "apiId": "3215",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "verified",
      "parentId": 91063,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "boolean",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "Whether the seller is verified"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "email",
      "demo": "Beanbagmart.sg@gmail.com",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "https://open.lazada.com/doc/doc.htm?spm=a2o9m.11193535.0.0.1f2a38e4l12Giz#?nodeId=10784&docId=108297",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 91068,
      "apiId": "3215",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "C",
      "maskField": "email",
      "serviceParamName": "email",
      "parentId": 91063,
      "dataSecurityLevel": "C3",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "Seller's email"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "short_code",
      "demo": "SG1015W",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 91069,
      "apiId": "3215",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "shortCode",
      "parentId": 91063,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "Seller's short code"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "cb",
      "demo": "false",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 91070,
      "apiId": "3215",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "cb",
      "parentId": 91063,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "boolean",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "Whether the seller is a Cross Border seller or not"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "location",
      "demo": "Singapore",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 91071,
      "apiId": "3215",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "location",
      "parentId": 91063,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "location of seller"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "status",
      "demo": "Active",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 91072,
      "apiId": "3215",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "status",
      "parentId": 91063,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "three status :Active\\Deleted\\Inactive"
    }
  ],
  "maxListSize": "",
  "id": 91063,
  "apiId": "3215",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "data",
  "parentId": 91062,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "com.lazada.choice.onboarding.api.dto.SellerInfoDTO",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Response data"
}
```
