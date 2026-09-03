---
title: UpdateProduct
category: Product API
api_name: UpdateProduct
method: POST
path: /product/update
---

**Category:** Product API
**API:** UpdateProduct

**Method:** POST
**HTTP Path:** /product/update

## API Description
Use this API to update attributes or SKUs of an existing product. if need update inventory, offline, price, not recommended to use this API. The iteration 25/6/2020 Updated for DBS changes. Refer to Input Parameters Payload

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
| payload | String | Yes | <a href='https://open.lazada.com/apps/doc/doc?nodeId=30715&docId=121228' target='_brank'>Parameter description</a> |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| data | Object | No | Response body |
| data.variation | Object | No | self define attributes |
| data.variation.Variation1 | Object | No | self define attributes |
| data.variation.Variation1.name | String | No | self define attributes |
| data.variation.Variation1.has_image | Boolean | No | self define attributes |
| data.variation.Variation1.customize | Boolean | No | self define attributes |
| data.variation.Variation1.options | String[] | No | self define attributes |
| data.variation.Variation2 | Object | No | self define attributes |
| data.variation.Variation2.name | String | No | self define attributes |
| data.variation.Variation2.has_image | Boolean | No | self define attributes |
| data.variation.Variation2.customize | Boolean | No | self define attributes |
| data.variation.Variation2.options | String[] | No | self define attributes |
| data.variation.Variation3 | Object | No | self define attributes |
| data.variation.Variation3.name | String | No | self define attributes |
| data.variation.Variation3.has_image | Boolean | No | self define attributes |
| data.variation.Variation3.customize | Boolean | No | self define attributes |
| data.variation.Variation3.options | String[] | No | self define attributes |
| data.variation.Variation4 | Object | No | self define attributes |
| data.variation.Variation4.name | String | No | self define attributes |
| data.variation.Variation4.has_image | Boolean | No | self define attributes |
| data.variation.Variation4.customize | Boolean | No | self define attributes |
| data.variation.Variation4.options | String[] | No | self define attributes |
| data.item_status | String | No | The status of product updated, including Active, InActive, and Pending QC. if a product is in Pending status, it needs to be reviewed and will be processed within 24 hours. |

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
| 1 |  |  | E001: Parameter %s is mandatory |
| 5 |  |  | E005: Invalid Request Format |
| 6 |  |  | E006: Unexpected internal error |
| 30 |  |  | E030: Empty Request |
| 201 |  |  | E201: %s Invalid CategoryId |
| 202 |  |  | E202: %s Invalid SPUId |
| 501 |  |  | E501: Update product failed |
| 512 |  |  | E512: BIZ_CHECK_MANGROVE_RULE_QC |
| 901 |  |  | E901: The request is too frequent, or the requested functionality is temporarily disabled. |
| 1000 |  |  | Internal Application Error |
| 4104 |  |  | BIZ_CHECK_PRICE_PRECISION_INVALID |
| 4105 |  |  | BIZ_CHECK_SELLER_SKU_DUPLICATE |
| 4106 |  |  | CHK_CATPROP_CPV_INPUT_SIZE_LIMIT |
| 4107 |  |  | CHECK_CAT_PROP_INVALID_NUMBER |
| 4108 |  |  | CHK_BASIC_REQUIRED |
| 4109 |  |  | CHK_SKU_PROPS_NOT_MATCH_SALE_PROP |
| 4110 |  |  | BIZ_CHECK_CAT_PROP_MANDATORY |
| 4111 |  |  | CHK_CATPROP_CPV_TEXT_REPEAT |
| 4112 |  |  | CHK_SKU_PROPS_DUPLICATE |
| 4113 |  |  | CHK_SKU_PROPS_NOT_IDENTICAL |
| 4114 |  |  | BIZ_CHECK_PRICE_SAMPLE_NON_ZERO |
| 4115 |  |  | CHK_CATPROP_CPV_NOT_ENUM |
| 4116 |  |  | BIZ_CHECK_MAIN_IMAGE_DUPLICATE |
| 4117 |  |  | BIZ_CHECK_SPECIAL_PRICE_FROM_DATE_AFTER_TO_DATE |
| 4118 |  |  | BIZ_CHECK_PRICE_IS_ZERO |
| 4119 |  |  | BIZ_CHECK_SPECIAL_PRICE_RATE_OUT_OF_RANGE |
| 4120 |  |  | CHK_CATPROP_CPV_MAX_LEGNTH |
| 4121 |  |  | BIZ_CHECK_SPECIAL_PRICE_PRECISION_INVALID |
| 4122 |  |  | BIZ_CHECK_VIRTUAL_BUNDLE_SKU_SUB_OVER_LIMIT |
| 4123 |  |  | BIZ_CHECK_MANGROVE_RULE |
| 4124 |  |  | BIZ_CHECK_MANGROVE_RULE_QC |
| 4125 |  |  | THD_IC_F_IC_DOMAIN_PROPERTY_002 |
| 4126 |  |  | THD_IC_F_IC_INFRA_PRODUCT_036 |
| 4127 |  |  | THD_IC_F_IC_SCENE_PUBLISH_012 |
| 4128 |  |  | THD_IC_F_IC_DOMAIN_ACTOR_006 |
| 4129 |  |  | BIZ_CHECK_PROP_SPECIAL_CHAR |
| 4130 |  |  | BIZ_CHECK_OFFICIAL_STORE_BRAND_UNAUTHORIZED |
| 4131 |  |  | BIZ_CHECK_CAT_PROP_SENSITIVE_WORDS |
| 4132 |  |  | Invalid Request Format |
| 4133 |  |  | Invalid variation |
| 4134 |  |  | CHK_CATEGORY_ID_NOT_LEAF_CATEGORY |
| 4135 |  |  | THD_IC_ERR |
| 4136 |  |  | SELLER_SKU_NOT_FOUND |
| 4137 |  |  | ITEM_NOT_FOUND |
| 4138 |  |  | BIZ_CHECK_EXIST_OUTER_IMAGE |
| 4139 |  |  | BIZ_CHECK_MAIN_IMAGE_REQUIRE |
| 4140 |  |  | CHK_ENUM_PROP_VALUE_NOT_IN_OPTION |
| 4141 |  |  | THD_IC_ERR_F_IC_INFRA_PRODUCT_036 |
| 4142 |  |  | THD_BRAND_ID_IS_NOT_VALID_IN_CATEGORY |
| 4143 |  |  | BIZ_CHECK_SALEPROP_ATTRIBUTE_INVALID |
| 4144 |  |  | BIZ_CHECK_SKU_NOT_CONTAIN_SALEPROP |
| 4145 |  |  | BIZ_CHECK_SALEPROP_AND_OLD_PARAM_REPEAT |
| 4146 |  |  | BIZ_CHECK_SALEPROP_NOT_SUPPORT_THUMBNAIL |
| 10002 |  |  | Incorrect/missing/unavailable product attributes |
| 901 |  |  | Limit service request speed in server side temporarily. |
| 10006 |  |  | the control price is not pass |
| 501 |  |  | Update product failed |
| 10002 |  |  | System error update fail |
| 10006 |  |  | the control price is not pass |
| 10006 |  |  | the control price is not pass |
| 10006 |  |  | the control price is not pass |
| 10002 |  |  | System error update fail |
| 10002 |  |  | System error update fail |
| 10002 |  |  | System error update fail |
| 4137 |  |  | The item id entered in the request does not exist on the current country and store, please call the GetProducts/GetProductItem API to query for the correct item id. |
| 501 |  |  | Update product failed |
| 501 |  |  | Update product failed |
| 4218 |  |  | Update product failed |
| 4137 |  |  | The item id entered in the request does not exist on the current country and store, please call the GetProducts/GetProductItem API to query for the correct item id. |
| 4137 |  |  | The item id entered in the request does not exist on the current country and store, please call the GetProducts/GetProductItem API to query for the correct item id. |
| 10006 |  |  | the control price is not pass |
| 4137 |  |  | The item id entered in the request does not exist on the current country and store, please call the GetProducts/GetProductItem API to query for the correct item id. |
| SellerNotActive |  |  | Seller not active,please check seller status |
| 901 |  |  | Limit service request speed in server side temporarily. |
| 501 |  |  | Update product failed |
| 4218 |  |  | Update product failed |
| 4216 |  |  | skuId is a mandatory field and must be filled in. |
| 4155 |  |  | Update product failed |
| 4152 |  |  | THD_INVENTORY_ERR_INV_PARAM_ILLEGAL:illegal parameter:quantity |
| 4137 |  |  | The item id entered in the request does not exist on the current country and store, please call the GetProducts/GetProductItem API to query for the correct item id. |
| 4115 |  |  | Attribute value that you input is not included in the dropdown list given. Please select from dropdown to avoid error |
| 4113 |  |  | CHK_SKU_PROPS_NOT_IDENTICAL |
| 4108 |  |  | CHK_BASIC_REQUIRED |
| 209 |  |  | Invalid variation |
| 1001 |  |  | The parameters are not in JSON format |

## Examples
```json
{
  "serviceParamHttpType": "",
  "serviceParamType": "2",
  "hitLog": null,
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
      "paramName": "variation",
      "demo": "[]",
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
          "paramName": "Variation1",
          "demo": "[]",
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
              "paramName": "name",
              "demo": "color_family",
              "required": false,
              "paramType": "1",
              "mappingValue": "",
              "minValue": null,
              "dataMaskUrl": "",
              "enumValue": "",
              "children": [],
              "maxListSize": "",
              "id": 120879,
              "apiId": "4254",
              "docVisible": false,
              "paramOrder": "",
              "moreLimit": "",
              "maxValue": null,
              "paramFrom": "2",
              "sensitiveDataTag": "",
              "maskField": "",
              "serviceParamName": "name",
              "parentId": 120878,
              "dataSecurityLevel": "C2",
              "serviceParamPath": "java.lang.String",
              "mappingType": "1",
              "regexExpression": "",
              "constantValue": "",
              "desc": "self define attributes"
            },
            {
              "serviceParamHttpType": "",
              "serviceParamType": "1",
              "hitLog": false,
              "defaultValue": "",
              "previewDemo": "",
              "maxSize": "",
              "paramName": "has_image",
              "demo": "false",
              "required": false,
              "paramType": "3",
              "mappingValue": "",
              "minValue": null,
              "dataMaskUrl": "",
              "enumValue": "",
              "children": [],
              "maxListSize": "",
              "id": 120880,
              "apiId": "4254",
              "docVisible": false,
              "paramOrder": "",
              "moreLimit": "",
              "maxValue": null,
              "paramFrom": "2",
              "sensitiveDataTag": "",
              "maskField": "",
              "serviceParamName": "hasImage",
              "parentId": 120878,
              "dataSecurityLevel": "C2",
              "serviceParamPath": "java.lang.Boolean",
              "mappingType": "1",
              "regexExpression": "",
              "constantValue": "",
              "desc": "self define attributes"
            },
            {
              "serviceParamHttpType": "",
              "serviceParamType": "1",
              "hitLog": false,
              "defaultValue": "",
              "previewDemo": "",
              "maxSize": "",
              "paramName": "customize",
              "demo": "true",
              "required": false,
              "paramType": "3",
              "mappingValue": "",
              "minValue": null,
              "dataMaskUrl": "",
              "enumValue": "",
              "children": [],
              "maxListSize": "",
              "id": 120881,
              "apiId": "4254",
              "docVisible": false,
              "paramOrder": "",
              "moreLimit": "",
              "maxValue": null,
              "paramFrom": "2",
              "sensitiveDataTag": "",
              "maskField": "",
              "serviceParamName": "customize",
              "parentId": 120878,
              "dataSecurityLevel": "C2",
              "serviceParamPath": "java.lang.Boolean",
              "mappingType": "1",
              "regexExpression": "",
              "constantValue": "",
              "desc": "self define attributes"
            },
            {
              "serviceParamHttpType": "",
              "serviceParamType": "3",
              "hitLog": false,
              "defaultValue": "",
              "previewDemo": "",
              "maxSize": "",
              "paramName": "options",
              "demo": "[]",
              "required": false,
              "paramType": "6",
              "mappingValue": "",
              "minValue": null,
              "dataMaskUrl": "",
              "enumValue": "",
              "children": [],
              "maxListSize": "",
              "id": 120882,
              "apiId": "4254",
              "docVisible": false,
              "paramOrder": "",
              "moreLimit": "",
              "maxValue": null,
              "paramFrom": "2",
              "sensitiveDataTag": "",
              "maskField": "",
              "serviceParamName": "options",
              "parentId": 120878,
              "dataSecurityLevel": "C2",
              "serviceParamPath": "java.util.List<java.lang.String>",
              "mappingType": "1",
              "regexExpression": "",
              "constantValue": "",
              "desc": "self define attributes"
            }
          ],
          "maxListSize": "",
          "id": 120878,
          "apiId": "4254",
          "docVisible": false,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "Variation1",
          "parentId": 120877,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.util.Map",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "self define attributes"
        },
        {
          "serviceParamHttpType": "",
          "serviceParamType": "2",
          "hitLog": false,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "Variation2",
          "demo": "[]",
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
              "paramName": "name",
              "demo": "color_family",
              "required": false,
              "paramType": "1",
              "mappingValue": "",
              "minValue": null,
              "dataMaskUrl": "",
              "enumValue": "",
              "children": [],
              "maxListSize": "",
              "id": 120884,
              "apiId": "4254",
              "docVisible": false,
              "paramOrder": "",
              "moreLimit": "",
              "maxValue": null,
              "paramFrom": "2",
              "sensitiveDataTag": "",
              "maskField": "",
              "serviceParamName": "name",
              "parentId": 120883,
              "dataSecurityLevel": "C2",
              "serviceParamPath": "java.lang.String",
              "mappingType": "1",
              "regexExpression": "",
              "constantValue": "",
              "desc": "self define attributes"
            },
            {
              "serviceParamHttpType": "",
              "serviceParamType": "1",
              "hitLog": false,
              "defaultValue": "",
              "previewDemo": "",
              "maxSize": "",
              "paramName": "has_image",
              "demo": "false",
              "required": false,
              "paramType": "3",
              "mappingValue": "",
              "minValue": null,
              "dataMaskUrl": "",
              "enumValue": "",
              "children": [],
              "maxListSize": "",
              "id": 120885,
              "apiId": "4254",
              "docVisible": false,
              "paramOrder": "",
              "moreLimit": "",
              "maxValue": null,
              "paramFrom": "2",
              "sensitiveDataTag": "",
              "maskField": "",
              "serviceParamName": "hasImage",
              "parentId": 120883,
              "dataSecurityLevel": "C2",
              "serviceParamPath": "java.lang.Boolean",
              "mappingType": "1",
              "regexExpression": "",
              "constantValue": "",
              "desc": "self define attributes"
            },
            {
              "serviceParamHttpType": "",
              "serviceParamType": "1",
              "hitLog": false,
              "defaultValue": "",
              "previewDemo": "",
              "maxSize": "",
              "paramName": "customize",
              "demo": "true",
              "required": false,
              "paramType": "3",
              "mappingValue": "",
              "minValue": null,
              "dataMaskUrl": "",
              "enumValue": "",
              "children": [],
              "maxListSize": "",
              "id": 120886,
              "apiId": "4254",
              "docVisible": false,
              "paramOrder": "",
              "moreLimit": "",
              "maxValue": null,
              "paramFrom": "2",
              "sensitiveDataTag": "",
              "maskField": "",
              "serviceParamName": "customize",
              "parentId": 120883,
              "dataSecurityLevel": "C2",
              "serviceParamPath": "java.lang.Boolean",
              "mappingType": "1",
              "regexExpression": "",
              "constantValue": "",
              "desc": "self define attributes"
            },
            {
              "serviceParamHttpType": "",
              "serviceParamType": "3",
              "hitLog": false,
              "defaultValue": "",
              "previewDemo": "",
              "maxSize": "",
              "paramName": "options",
              "demo": "[]",
              "required": false,
              "paramType": "6",
              "mappingValue": "",
              "minValue": null,
              "dataMaskUrl": "",
              "enumValue": "",
              "children": [],
              "maxListSize": "",
              "id": 120887,
              "apiId": "4254",
              "docVisible": false,
              "paramOrder": "",
              "moreLimit": "",
              "maxValue": null,
              "paramFrom": "2",
              "sensitiveDataTag": "",
              "maskField": "",
              "serviceParamName": "options",
              "parentId": 120883,
              "dataSecurityLevel": "C2",
              "serviceParamPath": "java.util.List<java.lang.String>",
              "mappingType": "1",
              "regexExpression": "",
              "constantValue": "",
              "desc": "self define attributes"
            }
          ],
          "maxListSize": "",
          "id": 120883,
          "apiId": "4254",
          "docVisible": false,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "Variation2",
          "parentId": 120877,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.util.Map",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "self define attributes"
        },
        {
          "serviceParamHttpType": "",
          "serviceParamType": "2",
          "hitLog": false,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "Variation3",
          "demo": "[]",
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
              "paramName": "name",
              "demo": "color_family",
              "required": false,
              "paramType": "1",
              "mappingValue": "",
              "minValue": null,
              "dataMaskUrl": "",
              "enumValue": "",
              "children": [],
              "maxListSize": "",
              "id": 120889,
              "apiId": "4254",
              "docVisible": false,
              "paramOrder": "",
              "moreLimit": "",
              "maxValue": null,
              "paramFrom": "2",
              "sensitiveDataTag": "",
              "maskField": "",
              "serviceParamName": "name",
              "parentId": 120888,
              "dataSecurityLevel": "C2",
              "serviceParamPath": "java.lang.String",
              "mappingType": "1",
              "regexExpression": "",
              "constantValue": "",
              "desc": "self define attributes"
            },
            {
              "serviceParamHttpType": "",
              "serviceParamType": "1",
              "hitLog": false,
              "defaultValue": "",
              "previewDemo": "",
              "maxSize": "",
              "paramName": "has_image",
              "demo": "false",
              "required": false,
              "paramType": "3",
              "mappingValue": "",
              "minValue": null,
              "dataMaskUrl": "",
              "enumValue": "",
              "children": [],
              "maxListSize": "",
              "id": 120890,
              "apiId": "4254",
              "docVisible": false,
              "paramOrder": "",
              "moreLimit": "",
              "maxValue": null,
              "paramFrom": "2",
              "sensitiveDataTag": "",
              "maskField": "",
              "serviceParamName": "hasImage",
              "parentId": 120888,
              "dataSecurityLevel": "C2",
              "serviceParamPath": "java.lang.Boolean",
              "mappingType": "1",
              "regexExpression": "",
              "constantValue": "",
              "desc": "self define attributes"
            },
            {
              "serviceParamHttpType": "",
              "serviceParamType": "1",
              "hitLog": false,
              "defaultValue": "",
              "previewDemo": "",
              "maxSize": "",
              "paramName": "customize",
              "demo": "false",
              "required": false,
              "paramType": "3",
              "mappingValue": "",
              "minValue": null,
              "dataMaskUrl": "",
              "enumValue": "",
              "children": [],
              "maxListSize": "",
              "id": 120891,
              "apiId": "4254",
              "docVisible": false,
              "paramOrder": "",
              "moreLimit": "",
              "maxValue": null,
              "paramFrom": "2",
              "sensitiveDataTag": "",
              "maskField": "",
              "serviceParamName": "customize",
              "parentId": 120888,
              "dataSecurityLevel": "C2",
              "serviceParamPath": "java.lang.Boolean",
              "mappingType": "1",
              "regexExpression": "",
              "constantValue": "",
              "desc": "self define attributes"
            },
            {
              "serviceParamHttpType": "",
              "serviceParamType": "3",
              "hitLog": false,
              "defaultValue": "",
              "previewDemo": "",
              "maxSize": "",
              "paramName": "options",
              "demo": "[]",
              "required": false,
              "paramType": "6",
              "mappingValue": "",
              "minValue": null,
              "dataMaskUrl": "",
              "enumValue": "",
              "children": [],
              "maxListSize": "",
              "id": 120892,
              "apiId": "4254",
              "docVisible": false,
              "paramOrder": "",
              "moreLimit": "",
              "maxValue": null,
              "paramFrom": "2",
              "sensitiveDataTag": "",
              "maskField": "",
              "serviceParamName": "options",
              "parentId": 120888,
              "dataSecurityLevel": "C2",
              "serviceParamPath": "java.util.List<java.lang.String>",
              "mappingType": "1",
              "regexExpression": "",
              "constantValue": "",
              "desc": "self define attributes"
            }
          ],
          "maxListSize": "",
          "id": 120888,
          "apiId": "4254",
          "docVisible": false,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "Variation3",
          "parentId": 120877,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.util.Map",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "self define attributes"
        },
        {
          "serviceParamHttpType": "",
          "serviceParamType": "2",
          "hitLog": false,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "Variation4",
          "demo": "[]",
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
              "paramName": "name",
              "demo": "color_family",
              "required": false,
              "paramType": "1",
              "mappingValue": "",
              "minValue": null,
              "dataMaskUrl": "",
              "enumValue": "",
              "children": [],
              "maxListSize": "",
              "id": 120894,
              "apiId": "4254",
              "docVisible": false,
              "paramOrder": "",
              "moreLimit": "",
              "maxValue": null,
              "paramFrom": "2",
              "sensitiveDataTag": "",
              "maskField": "",
              "serviceParamName": "name",
              "parentId": 120893,
              "dataSecurityLevel": "C2",
              "serviceParamPath": "java.lang.String",
              "mappingType": "1",
              "regexExpression": "",
              "constantValue": "",
              "desc": "self define attributes"
            },
            {
              "serviceParamHttpType": "",
              "serviceParamType": "1",
              "hitLog": false,
              "defaultValue": "",
              "previewDemo": "",
              "maxSize": "",
              "paramName": "has_image",
              "demo": "false",
              "required": false,
              "paramType": "3",
              "mappingValue": "",
              "minValue": null,
              "dataMaskUrl": "",
              "enumValue": "",
              "children": [],
              "maxListSize": "",
              "id": 120895,
              "apiId": "4254",
              "docVisible": false,
              "paramOrder": "",
              "moreLimit": "",
              "maxValue": null,
              "paramFrom": "2",
              "sensitiveDataTag": "",
              "maskField": "",
              "serviceParamName": "hasImage",
              "parentId": 120893,
              "dataSecurityLevel": "C2",
              "serviceParamPath": "java.lang.Boolean",
              "mappingType": "1",
              "regexExpression": "",
              "constantValue": "",
              "desc": "self define attributes"
            },
            {
              "serviceParamHttpType": "",
              "serviceParamType": "1",
              "hitLog": false,
              "defaultValue": "",
              "previewDemo": "",
              "maxSize": "",
              "paramName": "customize",
              "demo": "false",
              "required": false,
              "paramType": "3",
              "mappingValue": "",
              "minValue": null,
              "dataMaskUrl": "",
              "enumValue": "",
              "children": [],
              "maxListSize": "",
              "id": 120896,
              "apiId": "4254",
              "docVisible": false,
              "paramOrder": "",
              "moreLimit": "",
              "maxValue": null,
              "paramFrom": "2",
              "sensitiveDataTag": "",
              "maskField": "",
              "serviceParamName": "customize",
              "parentId": 120893,
              "dataSecurityLevel": "C2",
              "serviceParamPath": "java.lang.Boolean",
              "mappingType": "1",
              "regexExpression": "",
              "constantValue": "",
              "desc": "self define attributes"
            },
            {
              "serviceParamHttpType": "",
              "serviceParamType": "3",
              "hitLog": false,
              "defaultValue": "",
              "previewDemo": "",
              "maxSize": "",
              "paramName": "options",
              "demo": "[]",
              "required": false,
              "paramType": "6",
              "mappingValue": "",
              "minValue": null,
              "dataMaskUrl": "",
              "enumValue": "",
              "children": [],
              "maxListSize": "",
              "id": 120897,
              "apiId": "4254",
              "docVisible": false,
              "paramOrder": "",
              "moreLimit": "",
              "maxValue": null,
              "paramFrom": "2",
              "sensitiveDataTag": "",
              "maskField": "",
              "serviceParamName": "options",
              "parentId": 120893,
              "dataSecurityLevel": "C2",
              "serviceParamPath": "java.util.List<java.lang.String>",
              "mappingType": "1",
              "regexExpression": "",
              "constantValue": "",
              "desc": "self define attributes"
            }
          ],
          "maxListSize": "",
          "id": 120893,
          "apiId": "4254",
          "docVisible": false,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "Variation4",
          "parentId": 120877,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.util.Map",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "self define attributes"
        }
      ],
      "maxListSize": "",
      "id": 120877,
      "apiId": "4254",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "variation",
      "parentId": 120876,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.util.Map",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "self define attributes"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "item_status",
      "demo": "Active",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 120898,
      "apiId": "4254",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "itemStatus",
      "parentId": 120876,
      "dataSecurityLevel": "S2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "The status of product updated, including Active, InActive, and Pending QC. if a product is in Pending status, it needs to be reviewed and will be processed within 24 hours."
    }
  ],
  "maxListSize": "",
  "id": 120876,
  "apiId": "4254",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "data",
  "parentId": 120872,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.Object",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Response body"
}
```
