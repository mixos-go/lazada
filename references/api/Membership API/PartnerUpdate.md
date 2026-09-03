---
title: PartnerUpdate
category: Membership API
api_name: PartnerUpdate
method: GET/POST
path: /partner/update
---

**Category:** Membership API
**API:** PartnerUpdate

**Method:** GET/POST
**HTTP Path:** /partner/update

## API Description
Used to push membership bulk status updates to Lazada. Please note that this is not an incremental update, thus information left out that haven been in our system before, will be removed on our end.

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
| tier | String | No | Customer’s tier in partner side, shown as-is |
| balance | Number | Yes | Balance of the membership. |
| tier_expiry | String | No | Expiry of the membership, shown as-is |
| p_uid | String | Yes | A unique identifier of the member on partner side, used to establish the link to partner ID. |
| member_name | String | No | Name of member on partner side, to easier identify the membership on My Account pages |
| valid_from | String | No | Valid from of this balance in RFC RFC3339 format. Ignore if this is no validity period for the balance |
| status | String | Yes | One of: ‘active’ – For activated members ‘inactive’ – For inactive member ‘pending’ – For members that are pending activation |
| valid_to | String | No | Valid to of this balance in RFC RFC3339 format. Ignore if this is no validity period for the balance |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| result | Object | No | 1 |
| result.success | Boolean | No | 1 |
| result.data | Object | No | 1 |
| result.error_code | Object | No | 1 |
| result.error_code.display_message | String | No | 1 |
| result.error_code.key | String | No | 1 |

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
  "demo": "1",
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
      "paramName": "success",
      "demo": "1",
      "required": false,
      "paramType": "3",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 69673,
      "apiId": "2466",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "success",
      "parentId": 69672,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "boolean",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "1"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "2",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "data",
      "demo": "1",
      "required": false,
      "paramType": "4",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 69674,
      "apiId": "2466",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "module",
      "parentId": 69672,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.Object",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "1"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "2",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "error_code",
      "demo": "1",
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
          "paramName": "display_message",
          "demo": "1",
          "required": false,
          "paramType": "1",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 69676,
          "apiId": "2466",
          "docVisible": false,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "displayMessage",
          "parentId": 69675,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.lang.String",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "1"
        },
        {
          "serviceParamHttpType": "",
          "serviceParamType": "1",
          "hitLog": false,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "key",
          "demo": "1",
          "required": false,
          "paramType": "1",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 69677,
          "apiId": "2466",
          "docVisible": false,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "key",
          "parentId": 69675,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.lang.String",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "1"
        }
      ],
      "maxListSize": "",
      "id": 69675,
      "apiId": "2466",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "errorCode",
      "parentId": 69672,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "com.alibaba.ecommerce.error.ErrorCode",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "1"
    }
  ],
  "maxListSize": "",
  "id": 69672,
  "apiId": "2466",
  "docVisible": false,
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
  "desc": "1"
}
```
