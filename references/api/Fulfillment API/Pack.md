---
title: Pack
category: Fulfillment API
api_name: Pack
method: POST
path: /order/fulfill/pack
---

**Category:** Fulfillment API
**API:** Pack

**Method:** POST
**HTTP Path:** /order/fulfill/pack

## API Description
Use this API to mark an order item as being packed.

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
| packReq | Object | Yes | request body |
| packReq.pack_order_list | Object[] | Yes | Batch size is limited to 20，Orders that need to be packed，Sub-orders of the same order will be processed together |
| packReq.pack_order_list.order_item_list | Number[] | Yes | order_item_ids that need to be packed |
| packReq.pack_order_list.order_id | Number | Yes | order that need to be packed |
| packReq.delivery_type | String | Yes | dropship |
| packReq.shipment_provider_code | String | No | If it is a local store (TFs), this field cannot be transferred; If it is a cross-border store must pass (NTFS); This field cannot be transferred to DBS orders (including local stores and cross-border stores) If you want to get the available values, you can call the <a href='https://open.lazada.com/a |
| packReq.shipping_allocate_type | String | Yes | If you want to get the available values, you can call the <a href='https://open.lazada.com/apps/doc/api?path=%2Forder%2Fshipment%2Fproviders%2Fget' target='_brank'>getshipmentprovider</a> API |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| result | Object | Yes | resp body |
| result.data | Object | Yes | resp data |
| result.data.pack_order_list | Object[] | Yes | pack order process result list |
| result.data.pack_order_list.order_item_list | Object[] | Yes | order item pack result |
| result.data.pack_order_list.order_item_list.order_item_id | Number | Yes | orderItemId |
| result.data.pack_order_list.order_item_list.msg | String | Yes | errMsg when item_err_code!=0 |
| result.data.pack_order_list.order_item_list.item_err_code | String | Yes | 0=success other=error code，The final processing result of the order |
| result.data.pack_order_list.order_item_list.tracking_number | String | Yes | tracking_number |
| result.data.pack_order_list.order_item_list.shipment_provider | String | Yes | shipment_provider |
| result.data.pack_order_list.order_item_list.package_id | String | Yes | package_id |
| result.data.pack_order_list.order_item_list.retry | Boolean | Yes | Determine if the package can be retried |
| result.data.pack_order_list.order_id | Number | Yes | order id |
| result.success | Boolean | Yes | If this is true, it doesn't mean that everything is processed successfully. It is necessary to judge that the item_err_code in orders is equal to 0 to determine that the processing is successful. Otherwise, if this is false, this batch must be unsuccessful. |
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

## Error Codes
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| 6 |  |  | SYSTEM_ERROR |
| 1003 |  |  | E1003_3PL_ALLOCATION_FAIL |
| 40011 |  |  | RPC_ERROR |
| 700000 |  |  | PACKAGE_STATUS_NOT_ALLOW_TO_OP |
| 700001 |  |  | DBS_SHIPMENT_PROVIDER_CODE_NOT_EXITS |
| 700004 |  |  | PARAM_ILLEGAL |
| 700013 |  |  | OP_NOT_SUPPORT |
| 700016 |  |  | NOT_AVAILABLE_NTFS_3PL |
| 700017 |  |  | PARAM_IS_NULL |
| 700018 |  |  | PARAM_SIZE_ERROR |
| 700019 |  |  | PARAM_MIN_ERROR |
| 700020 |  |  | ORDER_ITEM_NOT_FOUND_OR_NOT_BELONG_DIGITAL |
| 700021 |  |  | ORDER_NOT_FOUND |
| 700022 |  |  | BATCH_SIZE_OUT_OF_LIMIT |
| 700023 |  |  | PICKUP_IN_STORE_NO_SUPPORT |
| 700024 |  |  | GET_LOCK_FAILED |
| 700025 |  |  | ORDER_ITEM_NOT_FOUND |
| 700026 |  |  | FO_ITEM_NOT_ALLOW_TO_PACK |
| 700027 |  |  | NOT_SUPPORT_FBL_TO_PACK |
| 700028 |  |  | NOT_SUPPORT_PACK_UP_IN_STORE_TO_PACK |
| 700029 |  |  | ITEM_MUST_BELONG_SAME_WAREHOUSE |
| 700030 |  |  | NOT_SUPPORT_DG_SERVICE_TO_PACK |
| 700031 |  |  | ITEM_NOT_READY_TO_FULFILL |
| 700032 |  |  | SELLER_NOT_FOUND |
| 700033 |  |  | TRANSFERRING_WAREHOUSE_PROVIDER |

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
  "demo": "{\"data\":{\"pack_order_list\":[{\"order_item_list\":[{\"order_item_id\":560694402292001,\"msg\":\"success\",\"item_err_code\":\"0\",\"tracking_number\":\"TH340231JV0W0A\",\"shipment_provider\":\"Flash Express\",\"package_id\":\"FP022511752246001\",\"retry\":false}],\"order_id\":560694402192001}]},\"success\":true,\"errorCode\":null,\"errorMsg\":null}",
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
          "paramName": "pack_order_list",
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
              "serviceParamType": "3",
              "hitLog": null,
              "defaultValue": "",
              "previewDemo": "",
              "maxSize": "",
              "paramName": "order_item_list",
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
                  "paramName": "order_item_id",
                  "demo": "560694402292001",
                  "required": true,
                  "paramType": "2",
                  "mappingValue": "",
                  "minValue": null,
                  "dataMaskUrl": "",
                  "enumValue": "",
                  "children": [],
                  "maxListSize": "",
                  "id": 73565,
                  "apiId": "2616",
                  "docVisible": true,
                  "paramOrder": "",
                  "moreLimit": "",
                  "maxValue": null,
                  "paramFrom": "2",
                  "sensitiveDataTag": "",
                  "maskField": "",
                  "serviceParamName": "order_item_id",
                  "parentId": 73564,
                  "dataSecurityLevel": "C2",
                  "serviceParamPath": "java.lang.Long",
                  "mappingType": "1",
                  "regexExpression": "",
                  "constantValue": "",
                  "desc": "orderItemId"
                },
                {
                  "serviceParamHttpType": "",
                  "serviceParamType": "1",
                  "hitLog": null,
                  "defaultValue": "",
                  "previewDemo": "",
                  "maxSize": "",
                  "paramName": "msg",
                  "demo": "success",
                  "required": true,
                  "paramType": "1",
                  "mappingValue": "",
                  "minValue": null,
                  "dataMaskUrl": "",
                  "enumValue": "",
                  "children": [],
                  "maxListSize": "",
                  "id": 73566,
                  "apiId": "2616",
                  "docVisible": true,
                  "paramOrder": "",
                  "moreLimit": "",
                  "maxValue": null,
                  "paramFrom": "2",
                  "sensitiveDataTag": "",
                  "maskField": "",
                  "serviceParamName": "msg",
                  "parentId": 73564,
                  "dataSecurityLevel": "C2",
                  "serviceParamPath": "java.lang.String",
                  "mappingType": "1",
                  "regexExpression": "",
                  "constantValue": "",
                  "desc": "errMsg when item_err_code!=0  "
                },
                {
                  "serviceParamHttpType": "",
                  "serviceParamType": "1",
                  "hitLog": null,
                  "defaultValue": "",
                  "previewDemo": "",
                  "maxSize": "",
                  "paramName": "item_err_code",
                  "demo": "0",
                  "required": true,
                  "paramType": "1",
                  "mappingValue": "",
                  "minValue": null,
                  "dataMaskUrl": "",
                  "enumValue": "",
                  "children": [],
                  "maxListSize": "",
                  "id": 73567,
                  "apiId": "2616",
                  "docVisible": true,
                  "paramOrder": "",
                  "moreLimit": "",
                  "maxValue": null,
                  "paramFrom": "2",
                  "sensitiveDataTag": "",
                  "maskField": "",
                  "serviceParamName": "item_err_code",
                  "parentId": 73564,
                  "dataSecurityLevel": "C2",
                  "serviceParamPath": "java.lang.String",
                  "mappingType": "1",
                  "regexExpression": "",
                  "constantValue": "",
                  "desc": "0=success other=error code，The final processing result of the order"
                },
                {
                  "serviceParamHttpType": "",
                  "serviceParamType": "1",
                  "hitLog": null,
                  "defaultValue": "",
                  "previewDemo": "",
                  "maxSize": "",
                  "paramName": "tracking_number",
                  "demo": "TH340231JV0W0A",
                  "required": true,
                  "paramType": "1",
                  "mappingValue": "",
                  "minValue": null,
                  "dataMaskUrl": "",
                  "enumValue": "",
                  "children": [],
                  "maxListSize": "",
                  "id": 73568,
                  "apiId": "2616",
                  "docVisible": true,
                  "paramOrder": "",
                  "moreLimit": "",
                  "maxValue": null,
                  "paramFrom": "2",
                  "sensitiveDataTag": "",
                  "maskField": "",
                  "serviceParamName": "tracking_number",
                  "parentId": 73564,
                  "dataSecurityLevel": "C2",
                  "serviceParamPath": "java.lang.String",
                  "mappingType": "1",
                  "regexExpression": "",
                  "constantValue": "",
                  "desc": "tracking_number"
                },
                {
                  "serviceParamHttpType": "",
                  "serviceParamType": "1",
                  "hitLog": null,
                  "defaultValue": "",
                  "previewDemo": "",
                  "maxSize": "",
                  "paramName": "shipment_provider",
                  "demo": "Flash Express",
                  "required": true,
                  "paramType": "1",
                  "mappingValue": "",
                  "minValue": null,
                  "dataMaskUrl": "",
                  "enumValue": "",
                  "children": [],
                  "maxListSize": "",
                  "id": 73569,
                  "apiId": "2616",
                  "docVisible": true,
                  "paramOrder": "",
                  "moreLimit": "",
                  "maxValue": null,
                  "paramFrom": "2",
                  "sensitiveDataTag": "",
                  "maskField": "",
                  "serviceParamName": "shipment_provider",
                  "parentId": 73564,
                  "dataSecurityLevel": "C2",
                  "serviceParamPath": "java.lang.String",
                  "mappingType": "1",
                  "regexExpression": "",
                  "constantValue": "",
                  "desc": "shipment_provider"
                },
                {
                  "serviceParamHttpType": "",
                  "serviceParamType": "1",
                  "hitLog": null,
                  "defaultValue": "",
                  "previewDemo": "",
                  "maxSize": "",
                  "paramName": "package_id",
                  "demo": "FP022511752246001",
                  "required": true,
                  "paramType": "1",
                  "mappingValue": "",
                  "minValue": null,
                  "dataMaskUrl": "",
                  "enumValue": "",
                  "children": [],
                  "maxListSize": "",
                  "id": 73570,
                  "apiId": "2616",
                  "docVisible": true,
                  "paramOrder": "",
                  "moreLimit": "",
                  "maxValue": null,
                  "paramFrom": "2",
                  "sensitiveDataTag": "",
                  "maskField": "",
                  "serviceParamName": "package_id",
                  "parentId": 73564,
                  "dataSecurityLevel": "C2",
                  "serviceParamPath": "java.lang.String",
                  "mappingType": "1",
                  "regexExpression": "",
                  "constantValue": "",
                  "desc": "package_id"
                },
                {
                  "serviceParamHttpType": "",
                  "serviceParamType": "1",
                  "hitLog": null,
                  "defaultValue": "",
                  "previewDemo": "",
                  "maxSize": "",
                  "paramName": "retry",
                  "demo": "false",
                  "required": true,
                  "paramType": "3",
                  "mappingValue": "",
                  "minValue": null,
                  "dataMaskUrl": "",
                  "enumValue": "",
                  "children": [],
                  "maxListSize": "",
                  "id": 73571,
                  "apiId": "2616",
                  "docVisible": true,
                  "paramOrder": "",
                  "moreLimit": "",
                  "maxValue": null,
                  "paramFrom": "2",
                  "sensitiveDataTag": "",
                  "maskField": "",
                  "serviceParamName": "retry",
                  "parentId": 73564,
                  "dataSecurityLevel": "C2",
                  "serviceParamPath": "java.lang.Boolean",
                  "mappingType": "1",
                  "regexExpression": "",
                  "constantValue": "",
                  "desc": "Determine if the package can be retried"
                }
              ],
              "maxListSize": "",
              "id": 73564,
              "apiId": "2616",
              "docVisible": true,
              "paramOrder": "",
              "moreLimit": "",
              "maxValue": null,
              "paramFrom": "2",
              "sensitiveDataTag": "",
              "maskField": "",
              "serviceParamName": "order_item_list",
              "parentId": 73563,
              "dataSecurityLevel": "C2",
              "serviceParamPath": "java.util.List<com.alibaba.global.seller.fulfill.api.model.openapi.OrderItemPackResult>",
              "mappingType": "1",
              "regexExpression": "",
              "constantValue": "",
              "desc": "order item pack result"
            },
            {
              "serviceParamHttpType": "",
              "serviceParamType": "1",
              "hitLog": null,
              "defaultValue": "",
              "previewDemo": "",
              "maxSize": "",
              "paramName": "order_id",
              "demo": "560694402192001",
              "required": true,
              "paramType": "2",
              "mappingValue": "",
              "minValue": null,
              "dataMaskUrl": "",
              "enumValue": "",
              "children": [],
              "maxListSize": "",
              "id": 73572,
              "apiId": "2616",
              "docVisible": true,
              "paramOrder": "",
              "moreLimit": "",
              "maxValue": null,
              "paramFrom": "2",
              "sensitiveDataTag": "",
              "maskField": "",
              "serviceParamName": "order_id",
              "parentId": 73563,
              "dataSecurityLevel": "C2",
              "serviceParamPath": "java.lang.Long",
              "mappingType": "1",
              "regexExpression": "",
              "constantValue": "",
              "desc": "order id "
            }
          ],
          "maxListSize": "",
          "id": 73563,
          "apiId": "2616",
          "docVisible": true,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "pack_order_list",
          "parentId": 73562,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.util.List<com.alibaba.global.seller.fulfill.api.model.openapi.OrderPackResult>",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "pack order process result list"
        }
      ],
      "maxListSize": "",
      "id": 73562,
      "apiId": "2616",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "data",
      "parentId": 73561,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "com.alibaba.global.seller.fulfill.api.response.openapi.PackResp",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "resp data"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "success",
      "demo": "true",
      "required": true,
      "paramType": "3",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 73573,
      "apiId": "2616",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "success",
      "parentId": 73561,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.Boolean",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "If this is true, it doesn't mean that everything is processed successfully. It is necessary to judge that the item_err_code in orders is equal to 0 to determine that the processing is successful. Otherwise, if this is false, this batch must be unsuccessful."
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "error_code",
      "demo": "700100",
      "required": true,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 73574,
      "apiId": "2616",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "errorCode",
      "parentId": 73561,
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
      "demo": "order not found",
      "required": true,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 73575,
      "apiId": "2616",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "errorMsg",
      "parentId": 73561,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "exists when success is false"
    }
  ],
  "maxListSize": "",
  "id": 73561,
  "apiId": "2616",
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
