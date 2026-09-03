---
title: GetSellerItemLimit
category: Product API
api_name: GetSellerItemLimit
method: GET
path: /product/seller/item/limit
---

**Category:** Product API
**API:** GetSellerItemLimit

**Method:** GET
**HTTP Path:** /product/seller/item/limit

## API Description
The platform will provide the product quantity limit information by this interface. The qps will be limited by seller, 10 qps per seller.

## Common Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| app_key | String | Yes | Unique app ID issued by LAZADA Open Platform console when you apply for an app category |
| timestamp | String | Yes | The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time |
| access_token | String | Yes | API interface call credentials |
| sign_method | String | Yes | The HMAC hash algorithm you are using to calculate your signature |
| sign | String | Yes | Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details) |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| success | Boolean | No | The result of this request,true or false. |
| errorCodes | String[] | No | If the request failed, errorCodes will be returned. |
| errorMsgs | String[] | No | The error msg, may be null even though the result is failed. |
| data | Object | No | The data |
| data.onlineItemCount | Number | No | The count of online item, oos included. |
| data.itemLimit | Number | No | The item limit. T + 2 refresh. |
| data.payItemCnt | Number | No | the number of selling item in last 90 days.T + 2 refresh. |
| data.payByrCnt | Number | No | the number of buyer in last 90 days.T + 2 refresh. |

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
| HOT_KEY_BLOCK_EXCEPTION |  |  | hot key protect |
| SELLER_SERVICE_FAIL |  |  | inner service fail |
| ONLY_CB_SELLER_SUPPORTED |  |  | For now, only cb seller supported |
| THIRD_SERVICE_ERROR |  |  | inner service fail |
| SYS_ERROR |  |  | inner service fail |

## Examples
```json
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "success",
  "demo": "true",
  "required": false,
  "paramType": "3",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 49509,
  "apiId": "1655",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "success",
  "parentId": 49508,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.Boolean",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "The result of this request,true or false."
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "3",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "errorCodes",
  "demo": "HOT_KEY_BLOCK_EXCEPTION",
  "required": false,
  "paramType": "6",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 49510,
  "apiId": "1655",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "errorCodes",
  "parentId": 49508,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.util.Set",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "If the request failed, errorCodes will be returned."
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "3",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "errorMsgs",
  "demo": "...",
  "required": false,
  "paramType": "6",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 49511,
  "apiId": "1655",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "errorMsgs",
  "parentId": 49508,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.util.Set",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "The error msg, may be null even though the result is failed."
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "2",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "data",
  "demo": "...",
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
      "paramName": "onlineItemCount",
      "demo": "100",
      "required": false,
      "paramType": "2",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 49513,
      "apiId": "1655",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "onlineItemCount",
      "parentId": 49512,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.Integer",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "The count of online item, oos included."
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "itemLimit",
      "demo": "500",
      "required": false,
      "paramType": "2",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 49514,
      "apiId": "1655",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "itemLimit",
      "parentId": 49512,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.Integer",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "The item limit. T + 2 refresh."
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "payItemCnt",
      "demo": "20",
      "required": false,
      "paramType": "2",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 49515,
      "apiId": "1655",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "payItemCnt",
      "parentId": 49512,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.Long",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "the number of selling item in last 90 days.T + 2 refresh."
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "payByrCnt",
      "demo": "30",
      "required": false,
      "paramType": "2",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 49516,
      "apiId": "1655",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "payByrCnt",
      "parentId": 49512,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.Long",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "the number of buyer in last 90 days.T + 2 refresh."
    }
  ],
  "maxListSize": "",
  "id": 49512,
  "apiId": "1655",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "values",
  "parentId": 49508,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "com.taobao.sellglobal.client.model.SellerItemLimitResponseDO",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "The data"
}
```
