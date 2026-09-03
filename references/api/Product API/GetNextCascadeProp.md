---
title: GetNextCascadeProp
category: Product API
api_name: GetNextCascadeProp
method: GET/POST
path: /category/cascade/getNextCascadeProp
---

**Category:** Product API
**API:** GetNextCascadeProp

**Method:** GET/POST
**HTTP Path:** /category/cascade/getNextCascadeProp

## API Description
Use this API to query next cascade prop.

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
| categoryId | Number | Yes | Category id |
| cascadeId | Number | Yes | Cascade id. Query from https://open.lazada.com/apps/doc/api?path=%2Fcategory%2Fattributes%2Fget |
| path | String | No | current cascade property path |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| data | Object | No | Response body |
| data.prop | Object | No | cascade property |
| data.prop.id | Number | No | property id |
| data.prop.name | String | No | property name |
| data.prop.required | Boolean | No | Whether the attribute is mandatory |
| data.propValue | Object[] | No | cascade property value |
| data.propValue.id | Number | No | property value id |
| data.propValue.name | String | No | property value name |
| data.propValue.leaf | String | No | whether is leaf node |

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
      "paramName": "prop",
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
          "demo": "120013644",
          "required": false,
          "paramType": "2",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 86405,
          "apiId": "3019",
          "docVisible": false,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "id",
          "parentId": 86404,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.lang.Long",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "property id"
        },
        {
          "serviceParamHttpType": "",
          "serviceParamType": "1",
          "hitLog": false,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "name",
          "demo": "Car Brand",
          "required": false,
          "paramType": "1",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 86406,
          "apiId": "3019",
          "docVisible": false,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "name",
          "parentId": 86404,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.lang.String",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "property name"
        },
        {
          "serviceParamHttpType": "",
          "serviceParamType": "1",
          "hitLog": false,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "required",
          "demo": "false",
          "required": false,
          "paramType": "3",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 86407,
          "apiId": "3019",
          "docVisible": false,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "required",
          "parentId": 86404,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.lang.Boolean",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "Whether the attribute is mandatory"
        }
      ],
      "maxListSize": "",
      "id": 86404,
      "apiId": "3019",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "prop",
      "parentId": 86403,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "com.taobao.sellglobal.pojo.PropertyCascadeNextVO.PropCascadeDTO",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "cascade property"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "3",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "propValue",
      "demo": "{}",
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
          "paramName": "id",
          "demo": "20100",
          "required": false,
          "paramType": "2",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 86409,
          "apiId": "3019",
          "docVisible": false,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "id",
          "parentId": 86408,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.lang.Long",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "property value id"
        },
        {
          "serviceParamHttpType": "",
          "serviceParamType": "1",
          "hitLog": false,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "name",
          "demo": "Ariel",
          "required": false,
          "paramType": "1",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 86410,
          "apiId": "3019",
          "docVisible": false,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "name",
          "parentId": 86408,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.lang.String",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "property value name"
        },
        {
          "serviceParamHttpType": "",
          "serviceParamType": "1",
          "hitLog": false,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "leaf",
          "demo": "false",
          "required": false,
          "paramType": "1",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 86411,
          "apiId": "3019",
          "docVisible": false,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "leaf",
          "parentId": 86408,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.lang.Boolean",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "whether is leaf node"
        }
      ],
      "maxListSize": "",
      "id": 86408,
      "apiId": "3019",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "propValue",
      "parentId": 86403,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "com.taobao.sellglobal.pojo.PropertyCascadeNextVO.PropValueCascadeDTO",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "cascade property value"
    }
  ],
  "maxListSize": "",
  "id": 86403,
  "apiId": "3019",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "data",
  "parentId": 86402,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "com.taobao.sellglobal.pojo.PropertyCascadeNextVO",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Response body"
}
```
