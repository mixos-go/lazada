---
title: GetCategorySuggestion
category: Product API
api_name: GetCategorySuggestion
method: GET
path: /product/category/suggestion/get
---

**Category:** Product API
**API:** GetCategorySuggestion

**Method:** GET
**HTTP Path:** /product/category/suggestion/get

## API Description
Get product's category suggestion by product title

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
| product_name | String | Yes | Product Name |
| image_url | String | Yes | image url |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| data | Object | Yes | data |
| data.categorySuggestions | Object[] | No | Category Beans |
| data.categorySuggestions.categoryPath | String | No | categoryPath |
| data.categorySuggestions.categoryId | Number | No | categoryId |
| data.categorySuggestions.categoryName | String | No | categoryName |

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
| 701 |  |  | E701: Empty category suggestion. |
| 1000 |  |  | Internal Application Error |
| 901 |  |  | Limit service request speed in server side temporarily. |
| 901 |  |  | Limit service request speed in server side temporarily. |
| 701 |  |  | Empty category suggestion. |

## Examples
```json
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
      "serviceParamType": "3",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "categorySuggestions",
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
          "paramName": "categoryPath",
          "demo": "categoryPath",
          "required": false,
          "paramType": "1",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 130816,
          "apiId": "4543",
          "docVisible": false,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "categoryPath",
          "parentId": 130813,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.lang.String",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "categoryPath"
        },
        {
          "serviceParamHttpType": "",
          "serviceParamType": "1",
          "hitLog": false,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "categoryId",
          "demo": "2342",
          "required": false,
          "paramType": "2",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 130814,
          "apiId": "4543",
          "docVisible": false,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "categoryId",
          "parentId": 130813,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.lang.Long",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "categoryId"
        },
        {
          "serviceParamHttpType": "",
          "serviceParamType": "1",
          "hitLog": false,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "categoryName",
          "demo": "T-Shirt",
          "required": false,
          "paramType": "1",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 130815,
          "apiId": "4543",
          "docVisible": false,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "categoryName",
          "parentId": 130813,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.lang.String",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "categoryName"
        }
      ],
      "maxListSize": "",
      "id": 130813,
      "apiId": "4543",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "categorySuggestions",
      "parentId": 130812,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.util.List<com.taobao.sellglobal.domain.api.CategorySuggestionResultBean>",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "Category Beans"
    }
  ],
  "maxListSize": "",
  "id": 130812,
  "apiId": "4543",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "data",
  "parentId": 130811,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "com.taobao.sellglobal.domain.api.CategorySuggestionResultDO",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "data"
}
```
