---
title: updateProductStatus
category: Cross Boarder Product API
api_name: updateProductStatus
method: POST
path: /product/global/update/status
---

**Category:** Cross Boarder Product API
**API:** updateProductStatus

**Method:** POST
**HTTP Path:** /product/global/update/status

## API Description
product up shelf or down shelf，(CrossBoarderSellersOnly)

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
| type | String | Yes | Product Types |
| country | String | No | country,if type is "global", this field will be ignored |
| product_id | Number | Yes | When type is "global", it is the global product ID, when type is "single", product id is the IC product ID. |
| status | String | Yes | update product type |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| data | Object | No | body，updateGspProductResult is true，mean update gsp product success。when updateICProductResult is false，mean update IC product fail，and updateIcProductFailResultList will show the reason |
| data.update_gsp_product_result | Boolean | No | update gsp product result |
| data.update_ic_product_result | Boolean | No | update ic product result，if it is false，deleteIcProductFailResultList will show reason |
| data.update_ic_product_fail_result_list | Object[] | No | update ic fail result list |
| data.update_ic_product_fail_result_list.product_id | Number | No | ic product id |
| data.update_ic_product_fail_result_list.market | String | No | market |
| data.update_ic_product_fail_result_list.update_result | Boolean | No | update ic product result |
| data.update_ic_product_fail_result_list.update_msg | String | No | update fail message |
| success | Boolean | No | process result，If this is true, it doesn't mean that everything is processed successfully |
| error_code | String | No | exists when success is false |
| error_msg | String | No | exists when success is false |

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
  "demo": "{   \"data\": {     \"deleteICProductResult\": true,     \"deleteGspProductResult\": true,     \"class\": \"com.alibaba.gsp.client.common.response.DeleteProductResponse\"   },   \"success\": true,   \"class\": \"com.alibaba.normandie.gateway.client.domain.lazop.APIResult\" }",
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
      "paramName": "update_gsp_product_result",
      "demo": "true",
      "required": false,
      "paramType": "3",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 108502,
      "apiId": "3822",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "updateGspProductResult",
      "parentId": 108501,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.Boolean",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "update gsp product result"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "update_ic_product_result",
      "demo": "false",
      "required": false,
      "paramType": "3",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 108503,
      "apiId": "3822",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "updateICProductResult",
      "parentId": 108501,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.Boolean",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "update ic product result，if it is false，deleteIcProductFailResultList will show reason"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "3",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "update_ic_product_fail_result_list",
      "demo": "[       {         \"market\": \"LAZADA_MY\",         \"productId\": 3042450256,         \"updateMsg\": \"Product is not found in repository,scenario:UpShelf,productId:3042450256,serverIP:33.65.56.178\",         \"updateResult\": false,         \"class\": \"com.alibaba.gsp.client.common.response.UpdateIcProductFailResult\"       }     ]",
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
          "paramName": "product_id",
          "demo": "3042450256",
          "required": false,
          "paramType": "2",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 108505,
          "apiId": "3822",
          "docVisible": false,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "productId",
          "parentId": 108504,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.lang.Long",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "ic product id"
        },
        {
          "serviceParamHttpType": "",
          "serviceParamType": "1",
          "hitLog": false,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "market",
          "demo": "LAZADA_MY",
          "required": false,
          "paramType": "1",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 108506,
          "apiId": "3822",
          "docVisible": false,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "market",
          "parentId": 108504,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.lang.String",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "market"
        },
        {
          "serviceParamHttpType": "",
          "serviceParamType": "1",
          "hitLog": false,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "update_result",
          "demo": "false",
          "required": false,
          "paramType": "3",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 108507,
          "apiId": "3822",
          "docVisible": false,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "updateResult",
          "parentId": 108504,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.lang.Boolean",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "update ic product result"
        },
        {
          "serviceParamHttpType": "",
          "serviceParamType": "1",
          "hitLog": false,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "update_msg",
          "demo": "Product is not found in repository,scenario:UpShelf,productId:3042450256,serverIP:33.65.56.178  \t",
          "required": false,
          "paramType": "1",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 108508,
          "apiId": "3822",
          "docVisible": false,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "updateMsg",
          "parentId": 108504,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.lang.String",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "update fail message"
        }
      ],
      "maxListSize": "",
      "id": 108504,
      "apiId": "3822",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "updateIcProductFailResultList",
      "parentId": 108501,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.util.List<com.alibaba.gsp.client.common.response.UpdateIcProductFailResult>",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "update ic fail result list"
    }
  ],
  "maxListSize": "",
  "id": 108501,
  "apiId": "3822",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "data",
  "parentId": 108500,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "com.alibaba.gsp.client.common.response.UpdateProductStatusResponse",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "body，updateGspProductResult is true，mean update gsp product success。when updateICProductResult is false，mean update IC product fail，and updateIcProductFailResultList will show the reason"
}
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
  "id": 108509,
  "apiId": "3822",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "success",
  "parentId": 108500,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.Boolean",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "process result，If this is true, it doesn't mean that everything is processed successfully"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "error_code",
  "demo": "E0019",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 108510,
  "apiId": "3822",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "errorCode",
  "parentId": 108500,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "exists when success is false"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "error_msg",
  "demo": "Invalid Limit",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 108511,
  "apiId": "3822",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "errorMsg",
  "parentId": 108500,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "exists when success is false"
}
```
