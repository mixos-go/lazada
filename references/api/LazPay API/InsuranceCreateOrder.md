---
title: InsuranceCreateOrder
category: LazPay API
api_name: InsuranceCreateOrder
method: GET/POST
path: /insurance/order/create
---

**Category:** LazPay API
**API:** InsuranceCreateOrder

**Method:** GET/POST
**HTTP Path:** /insurance/order/create

## API Description
Lazada Insurance Create Order

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
| requestId | String | Yes | Request ID, unique for each request.aRequest ID, unique for each request.Fusion's product ID. |
| productCode | String | Yes | Fusion's product ID. |
| itemPrice | Number | Yes | Price that user need to pay. (Totally price) |
| sstFee | Number | Yes | SST amount. |
| stampDuty | Number | Yes | Stamp Duty amont. |
| currency | String | Yes | Currency Type. |
| transactionId | Number | Yes | Fusion's order ID. |
| sellerId | Number | No | Seller ID. |
| serviceName | String | Yes | Service name. |
| userToken | String | Yes | Token for Lazada User. |
| orderExistTime | String | No | Lazada order persit time. |
| subProductCode | String | No | Road tax's product code. |
| subItemPrice | String | No | Road tax's item price. (Totally price) |
| subServiceFee | String | No | Road tax's service fee. |
| subTransactionId | String | No | Road tax's transactionId. |
| insuranceType | String | No | Marketplace insurance type. |
| partnerCode | String | No | Traffic source. |
| plateNo | String | No | Car plate no. |
| planCode | String | No | planCode |
| subPlanCode | String | No | subPlanCode |
| flowType | String | No | 流程来源 |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| tradeOrderLineId | String | No | Lazada tradeOrderLine ID. |
| transactionId | Number | No | Fusion's order ID. |
| paymentLink | String | No | Lazada Independent Paymen Link. |
| resultCode | Number | No | Result code from Lazada. |
| traceId | String | No | Lazada traceId. |
| subTradeOrderLineId | String | No | 子险单对应的交易子单ID（有子险单时返回） |
| itemPrice | String | No | 主险单对应的交易价格 |
| subItemPrice | String | No | 子险单对应的交易价格 |

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
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "tradeOrderLineId",
  "demo": "1234",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 131865,
  "apiId": "4578",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "tradeOrderLineId",
  "parentId": 131864,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Lazada tradeOrderLine ID."
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "transactionId",
  "demo": "1234",
  "required": false,
  "paramType": "2",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 131866,
  "apiId": "4578",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "transactionId",
  "parentId": 131864,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.Long",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Fusion's order ID."
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "paymentLink",
  "demo": "https://www.lazada.com",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 131867,
  "apiId": "4578",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "paymentLink",
  "parentId": 131864,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Lazada Independent Paymen Link."
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "resultCode",
  "demo": "0",
  "required": false,
  "paramType": "2",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 131868,
  "apiId": "4578",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "resultCode",
  "parentId": 131864,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.Lang",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Result code from Lazada."
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "traceId",
  "demo": "212cd8df17270744623036160ef6c2",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 131869,
  "apiId": "4578",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "traceId",
  "parentId": 131864,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Lazada traceId."
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "subTradeOrderLineId",
  "demo": "1234",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 131871,
  "apiId": "4578",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "subTradeOrderLineId",
  "parentId": 131864,
  "dataSecurityLevel": "S2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "子险单对应的交易子单ID（有子险单时返回）"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "itemPrice",
  "demo": "1234",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 131872,
  "apiId": "4578",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "itemPrice",
  "parentId": 131864,
  "dataSecurityLevel": "S2",
  "serviceParamPath": "java.lang.Long",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "主险单对应的交易价格"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "subItemPrice",
  "demo": "1234",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 131873,
  "apiId": "4578",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "subItemPrice",
  "parentId": 131864,
  "dataSecurityLevel": "S2",
  "serviceParamPath": "java.lang.Long",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "子险单对应的交易价格"
}
```
