---
title: GetPreQcRules
category: Product API
api_name: GetPreQcRules
method: GET/POST
path: /product/seller/item/getPreQcRules
---

**Category:** Product API
**API:** GetPreQcRules

**Method:** GET/POST
**HTTP Path:** /product/seller/item/getPreQcRules

## API Description
query pre qc rules

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
| option | Number | Yes | query qc option |
| option_set | Number[] | Yes | query qc rules option.[1] return item limit, [2] return restricted category id, [1,2] return both |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| values | Object | Yes | response value |
| values.restricted_cate_ids | Number[] | Yes | restricted category id which can not publish |
| values.item_limit | Number | Yes | item quantity limit |
| values.item_count | Number | Yes | current item count |

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
  "paramName": "values",
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
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "restricted_cate_ids",
      "demo": "10002961",
      "required": true,
      "paramType": "7",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 73689,
      "apiId": "2614",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "restrictedCateIds",
      "parentId": 73688,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.util.List<java.lang.Integer>",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "restricted category id which can not publish"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "item_limit",
      "demo": "1000000",
      "required": true,
      "paramType": "2",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 73690,
      "apiId": "2614",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "itemLimit",
      "parentId": 73688,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.Integer",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "item quantity limit"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "item_count",
      "demo": "191",
      "required": true,
      "paramType": "2",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 73691,
      "apiId": "2614",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "itemCount",
      "parentId": 73688,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.Integer",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "current item count"
    }
  ],
  "maxListSize": "",
  "id": 73688,
  "apiId": "2614",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "values",
  "parentId": 73687,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "com.taobao.sellglobal.client.model.PreQcRulesResponseDO",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "response value"
}
```
