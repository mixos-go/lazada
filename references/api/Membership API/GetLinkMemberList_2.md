---
title: GetLinkMemberList
category: Membership API
api_name: GetLinkMemberList
method: GET/POST
path: /partner/list
---

**Category:** Membership API
**API:** GetLinkMemberList

**Method:** GET/POST
**HTTP Path:** /partner/list

## API Description
Query all linkmembers of the seller

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
| page_num | String | Yes | page number |
| page_size | String | Yes | page size |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| result | Object | Yes | result |
| result.model_list | Object[] | Yes | data list |
| result.model_list.seller_id | Number | Yes | seller id |
| result.model_list.buyer_id | Number | Yes | buyer id |
| result.model_list.partneruser_id | String | Yes | partneruser id |
| result.total_count | Number | Yes | total count |

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
  "paramName": "result",
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
      "paramName": "model_list",
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
          "hitLog": false,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "seller_id",
          "demo": "1141746107",
          "required": true,
          "paramType": "2",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 77315,
          "apiId": "2739",
          "docVisible": true,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "sellerId",
          "parentId": 77314,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.lang.Integer",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "seller id"
        },
        {
          "serviceParamHttpType": "",
          "serviceParamType": "1",
          "hitLog": false,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "buyer_id",
          "demo": "1013016816",
          "required": true,
          "paramType": "2",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 77316,
          "apiId": "2739",
          "docVisible": true,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "buyerId",
          "parentId": 77314,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.lang.Integer",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "buyer id"
        },
        {
          "serviceParamHttpType": "",
          "serviceParamType": "1",
          "hitLog": false,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "partneruser_id",
          "demo": "LorealLANSG-47C76E2D-2249-EC11-95A3-0050569FADEB",
          "required": true,
          "paramType": "1",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 77317,
          "apiId": "2739",
          "docVisible": true,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "partnerUserId",
          "parentId": 77314,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.lang.String",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "partneruser id"
        }
      ],
      "maxListSize": "",
      "id": 77314,
      "apiId": "2739",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "modelList",
      "parentId": 77313,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.util.List<com.lazada.lazmall.customized.api.model.dto.LinkMemberDTO>",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "data list"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "total_count",
      "demo": "2289",
      "required": true,
      "paramType": "2",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 77318,
      "apiId": "2739",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "totalCount",
      "parentId": 77313,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.Integer",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "total count"
    }
  ],
  "maxListSize": "",
  "id": 77313,
  "apiId": "2739",
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
  "serviceParamPath": "com.alibaba.ecommerce.module.PagedResponse",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "result"
}
```
