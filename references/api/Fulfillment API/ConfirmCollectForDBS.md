---
title: ConfirmCollectForDBS
category: Fulfillment API
api_name: ConfirmCollectForDBS
method: POST
path: /order/package/sof/collect
---

**Category:** Fulfillment API
**API:** ConfirmCollectForDBS

**Method:** POST
**HTTP Path:** /order/package/sof/collect

## API Description
Use this API to mark an sof order item as being collected.

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
| dbsCollectReq | Object | Yes | request body |
| dbsCollectReq.packages | Object[] | Yes | Batch size is limited to 20 |
| dbsCollectReq.packages.package_id | String | Yes | package id |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| result | Object | Yes | resp body |
| result.data | Object | Yes | resp body |
| result.data.packages | Object[] | Yes | packages |
| result.data.packages.msg | String | Yes | package process error msg |
| result.data.packages.item_err_code | String | Yes | 0=success other=error code |
| result.data.packages.package_id | String | Yes | package id |
| result.data.packages.retry | Boolean | No | Determine if the package can be retried |
| result.success | Boolean | Yes | process result，If this is true, it doesn't mean that everything is processed successfully. It is necessary to judge that the item_err_code in packages is equal to 0 to determine that the processing is successful. Otherwise, if this is false, this batch must be unsuccessful. |
| result.error_code | String | Yes | exists when success is false |
| result.error_msg | String | Yes | exists when success is false |

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
  "paramName": "result",
  "demo": "{\"data\":{\"packages\":[{\"msg\":\"operation not support fot nonDBS order!\",\"item_err_code\":\"700009\",\"package_id\":\"FP038521002\"}]},\"success\":true,\"errorCode\":null,\"errorMsg\":null}",
  "required": true,
  "paramType": "4",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [
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
          "hitLog": null,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "packages",
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
              "hitLog": null,
              "defaultValue": "",
              "previewDemo": "",
              "maxSize": "",
              "paramName": "msg",
              "demo": "operation not support fot nonDBS order!",
              "required": true,
              "paramType": "1",
              "mappingValue": "",
              "minValue": null,
              "dataMaskUrl": "",
              "enumValue": "",
              "children": [],
              "maxListSize": "",
              "id": 131783,
              "apiId": "4574",
              "docVisible": true,
              "paramOrder": "",
              "moreLimit": "",
              "maxValue": null,
              "paramFrom": "2",
              "sensitiveDataTag": "",
              "maskField": "",
              "serviceParamName": "msg",
              "parentId": 131782,
              "dataSecurityLevel": "C2",
              "serviceParamPath": "java.lang.String",
              "mappingType": "1",
              "regexExpression": "",
              "constantValue": "",
              "desc": "package process error msg"
            },
            {
              "serviceParamHttpType": "",
              "serviceParamType": "1",
              "hitLog": null,
              "defaultValue": "",
              "previewDemo": "",
              "maxSize": "",
              "paramName": "item_err_code",
              "demo": "700009",
              "required": true,
              "paramType": "1",
              "mappingValue": "",
              "minValue": null,
              "dataMaskUrl": "",
              "enumValue": "",
              "children": [],
              "maxListSize": "",
              "id": 131784,
              "apiId": "4574",
              "docVisible": true,
              "paramOrder": "",
              "moreLimit": "",
              "maxValue": null,
              "paramFrom": "2",
              "sensitiveDataTag": "",
              "maskField": "",
              "serviceParamName": "item_err_code",
              "parentId": 131782,
              "dataSecurityLevel": "C2",
              "serviceParamPath": "java.lang.String",
              "mappingType": "1",
              "regexExpression": "",
              "constantValue": "",
              "desc": "0=success other=error code"
            },
            {
              "serviceParamHttpType": "",
              "serviceParamType": "1",
              "hitLog": null,
              "defaultValue": "",
              "previewDemo": "",
              "maxSize": "",
              "paramName": "package_id",
              "demo": "FP038521002",
              "required": true,
              "paramType": "1",
              "mappingValue": "",
              "minValue": null,
              "dataMaskUrl": "",
              "enumValue": "",
              "children": [],
              "maxListSize": "",
              "id": 131785,
              "apiId": "4574",
              "docVisible": true,
              "paramOrder": "",
              "moreLimit": "",
              "maxValue": null,
              "paramFrom": "2",
              "sensitiveDataTag": "",
              "maskField": "",
              "serviceParamName": "package_id",
              "parentId": 131782,
              "dataSecurityLevel": "C2",
              "serviceParamPath": "java.lang.String",
              "mappingType": "1",
              "regexExpression": "",
              "constantValue": "",
              "desc": "package id"
            },
            {
              "serviceParamHttpType": "",
              "serviceParamType": "1",
              "hitLog": false,
              "defaultValue": "",
              "previewDemo": "",
              "maxSize": "",
              "paramName": "retry",
              "demo": "false",
              "required": false,
              "paramType": "3",
              "mappingValue": "",
              "minValue": null,
              "dataMaskUrl": "",
              "enumValue": "",
              "children": [],
              "maxListSize": "",
              "id": 131786,
              "apiId": "4574",
              "docVisible": false,
              "paramOrder": "",
              "moreLimit": "",
              "maxValue": null,
              "paramFrom": "2",
              "sensitiveDataTag": "",
              "maskField": "",
              "serviceParamName": "retry",
              "parentId": 131782,
              "dataSecurityLevel": "C2",
              "serviceParamPath": "java.lang.Boolean",
              "mappingType": "1",
              "regexExpression": "",
              "constantValue": "",
              "desc": "Determine if the package can be retried"
            }
          ],
          "maxListSize": "",
          "id": 131782,
          "apiId": "4574",
          "docVisible": true,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "packages",
          "parentId": 131781,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.util.List<com.alibaba.global.seller.fulfill.api.model.openapi.DBSCollectResult>",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "packages"
        }
      ],
      "maxListSize": "",
      "id": 131781,
      "apiId": "4574",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "data",
      "parentId": 131780,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "com.alibaba.global.seller.fulfill.api.response.openapi.DBSCollectResp",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "resp body"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "success",
      "demo": "false",
      "required": true,
      "paramType": "3",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 131787,
      "apiId": "4574",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "success",
      "parentId": 131780,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.Boolean",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "process result，If this is true, it doesn't mean that everything is processed successfully. It is necessary to judge that the item_err_code in packages is equal to 0 to determine that the processing is successful. Otherwise, if this is false, this batch must be unsuccessful."
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "error_code",
      "demo": "700009",
      "required": true,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 131788,
      "apiId": "4574",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "errorCode",
      "parentId": 131780,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "exists when success is false"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "error_msg",
      "demo": "operation not support fot nonDBS order!",
      "required": true,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 131789,
      "apiId": "4574",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "errorMsg",
      "parentId": 131780,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "exists when success is false"
    }
  ],
  "maxListSize": "",
  "id": 131780,
  "apiId": "4574",
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
  "serviceParamPath": "com.alibaba.normandie.gateway.client.domain.lazop.APIResult",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "resp body"
}
```
