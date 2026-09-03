---
title: GetInventoryOccupyDetails
category: FBL API
api_name: GetInventoryOccupyDetails
method: GET
path: /fbl/inventory_occupy_details/get
---

**Category:** FBL API
**API:** GetInventoryOccupyDetails

**Method:** GET
**HTTP Path:** /fbl/inventory_occupy_details/get

## API Description
Use this API to get a sku's inventory occupy details

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
| fulfillmentSku | String | Yes | Fulfillment Sku Id |
| storeCode | String | Yes | Warehouse code |
| marketplace | String | Yes | market place:LAZADA_VN,LAZADA_SG,LAZADA_MY, LAZADA_ID,LAZADA_PH,LAZADA_TH |
| pageNum | Number | No | pageNum |
| pageSize | Number | No | pageSize |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| inventoryOccupyDetails | Object[] | No | inventory occupy detail list |
| inventoryOccupyDetails.orderCode | String | No | main order code |
| inventoryOccupyDetails.quantity | Number | No | reversed number eg: |
| inventoryOccupyDetails.orderType | String | No | order type |
| inventoryOccupyDetails.inventoryType | String | No | Inventory type:GOOD,Damaged,ONWAY,TRANSFER_WAY,Expired,Damaged A,Damaged B,Damaged C. |

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
  "serviceParamHttpType": "3",
  "serviceParamType": "3",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "inventoryOccupyDetails",
  "demo": "[{inventoryOccupyDetail}]",
  "required": false,
  "paramType": "9",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [
    {
      "serviceParamHttpType": "3",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "orderCode",
      "demo": "DIFF20221229449164_1_OCCUPY_STG",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 85908,
      "apiId": "2976",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "orderCode",
      "parentId": 85907,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "main order code"
    },
    {
      "serviceParamHttpType": "3",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "quantity",
      "demo": "1",
      "required": false,
      "paramType": "2",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 85909,
      "apiId": "2976",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "quantity",
      "parentId": 85907,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "reversed number eg:"
    },
    {
      "serviceParamHttpType": "3",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "orderType",
      "demo": "OUTBOUND",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 85910,
      "apiId": "2976",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "orderType",
      "parentId": 85907,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "order type"
    },
    {
      "serviceParamHttpType": "3",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "inventoryType",
      "demo": "SELLABLE",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 85911,
      "apiId": "2976",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "inventoryType",
      "parentId": 85907,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "Inventory type:GOOD,Damaged,ONWAY,TRANSFER_WAY,Expired,Damaged A,Damaged B,Damaged C."
    }
  ],
  "maxListSize": "",
  "id": 85907,
  "apiId": "2976",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "data",
  "parentId": 0,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "inventory occupy detail list"
}
```
