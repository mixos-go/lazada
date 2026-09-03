---
title: CreateGlobalProduct
category: Cross Boarder Product API
api_name: CreateGlobalProduct
method: POST
path: /product/global/create
---

**Category:** Cross Boarder Product API
**API:** CreateGlobalProduct

**Method:** POST
**HTTP Path:** /product/global/create

## API Description
Use this API to create a single new global product to multiple Lazada sites. (For cross boarder sellers ONLY)

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
| payload | Payload | Yes | <a href='https://open.lazada.com/apps/doc/doc?nodeId=30715&docId=121751' target='_brank'>Parameter description</a> |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| data | Object | Yes | Response body |
| data.sku_list | Object[] | No | SKU information |
| data.sku_list.seller_sku | String | No | The SellerSku that is defined,There are no two identical seller SKUs in the same store, |

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
| "500" |  |  | "E500: Create product failed" |
| ServiceTimeout |  |  | The request has failed due to service timeout |
| "6" |  |  | "E006: Unexpected internal error" |
| "5" |  |  | "E005: Invalid Request Format" |
| IllegalAccessToken |  |  | The specified access token is invalid or expired |
| 4136 |  |  | SYSTEM_BUSY |
| 4137 |  |  | SYSTEM_TIMEOUT |
| 4138 |  |  | SYSTEM_EXCEPTION |
| 4139 |  |  | UNKNOWN_ERROR |
| 4140 |  |  | CATEGORY_CANNOT_FIND |
| 4141 |  |  | CATEGORY_NOT_PERMITTED |
| 4142 |  |  | CATEGORY_IS_INACTIVE |
| 4143 |  |  | NO_TARGET_USER_BIND |
| 4144 |  |  | LOCAL_CATEGORY_CANNOT_FIND |
| 4145 |  |  | GLOBAL_PRODUCT_CANNOT_FIND |
| 4146 |  |  | LOCAL_PRODUCT_CANNOT_FIND |
| 4147 |  |  | LOCAL_SKU_CANNOT_FIND |
| 4148 |  |  | LOCAL_PRODUCT_HAS_NOT_BEEN_SYNCED |
| 4149 |  |  | LOCAL_SKU_HAS_NOT_BEEN_SYNCED |
| 4150 |  |  | PRODUCT_DOES_NOT_BELONG_TO_USER |
| 4151 |  |  | DAO_NOT_SUPPORT_BIZ_TYPE |
| 4152 |  |  | DAO_GLOBAL_PDT_NOT_FOUND |
| 4153 |  |  | DAO_GLOBAL_SKU_NOT_FOUND |
| 4154 |  |  | DAO_LOCAL_ITEM_RELATION_NOT_FOUND |
| 4155 |  |  | DAO_LOCAL_SKU_RELATION_NOT_FOUND |
| 4156 |  |  | NO_CREATE_PRODUCT_PERMISSION |
| 4157 |  |  | PRICE_GENERAL_TOO_LOW_ERROR |
| 4158 |  |  | PRICE_GENERAL_TOO_HIGH_ERROR |
| 4159 |  |  | PRICE_GENERAL_DISCOUNT_TOO_HIGH_ERROR |
| 4160 |  |  | PRICE_GENERAL_DISCOUNT_TOO_LOW_ERROR |
| 4161 |  |  | PB_SALE_PROP_RENDER_ILLEGAL_SALE_PROP |
| 4162 |  |  | PB_SKU_DESC_RENDER_ILLEGAL_SKU_DESC |
| 4163 |  |  | PB_VENTURE_NO_VENTURE_SELECT |
| 4164 |  |  | PB_VENTURE_MY_NOT_PUBLISHED |
| 4165 |  |  | PB_NAME_NAME_CANNOT_BE_NULL |
| 4166 |  |  | PB_NAME_NAME_CANNOT_BE_TOO_LONG |
| 4167 |  |  | PB_NAME_NAME_TRAN_TOO_LONG |
| 4168 |  |  | PB_BRAND_ILLEGAL |
| 4169 |  |  | PB_DETAIL_ATTRIBUTE_REQUIRED |
| 4170 |  |  | PB_SHORTDESC_REQUIRED |
| 4171 |  |  | PB_DETAIL_LENGTH_ERROR |
| 4172 |  |  | PB_SKU_PROP_REQUIRED |
| 4173 |  |  | PB_NO_PROPER_SKU |
| 4174 |  |  | PB_NO_PC_DECO |
| 4175 |  |  | PB_NO_WIRELESS_DECO |
| 4176 |  |  | PB_IMG_CANNOT_BE_EMPTY |
| 4177 |  |  | PB_IMG_URL_INVALID |
| 4178 |  |  | PB_IMG_CANNOT_FETCH |
| 4179 |  |  | PB_SALE_PROP_SUBMIT_SALE_PROP_CANNOT_BE_EMPTY |
| 4180 |  |  | PB_SALE_PROP_SUBMIT_SALE_PROP_ILLEGAL_VAL |
| 4181 |  |  | PB_SALE_PROP_SUBMIT_SALE_PROP_INVALID_INPUT_VAL |
| 4182 |  |  | PB_SALE_PROP_SUBMIT_SALE_PROP_TOO_LONG_INPUT_VAL |
| 4183 |  |  | PB_SALE_PROP_SUBMIT_TOO_MORE_SKU |
| 4184 |  |  | PB_CURRENCY_CANNOT_BE_EMPTY |
| 4185 |  |  | PB_ORIGIN_PRICE_CANNOT_BE_EMPTY |
| 4186 |  |  | PB_ORIGIN_SALE_PRICE_CANNOT_BE_EMPTY |
| 4187 |  |  | PB_ORIGIN_SALE_PRICE_CANNOT_BE_HIGH |
| 4188 |  |  | PB_MARKET_PRICE_CANNOT_BE_EMPTY |
| 4189 |  |  | PB_MARKET_SALE_PRICE_CANNOT_BE_EMPTY |
| 4190 |  |  | PB_MARKET_SALE_PRICE_TOO_HIGH |
| 4191 |  |  | PB_STOCK_CANNOT_BE_EMPTY |
| 4192 |  |  | PB_STOCK_INVALID |
| 4193 |  |  | PB_WARRANTY_INVALID |
| 4194 |  |  | PB_SELLER_SKU_EXIST |
| 4195 |  |  | PB_SELLER_SKU_LENGTH_ERROR |
| 4196 |  |  | PB_SELLER_SKU_DUPLICATE |
| 4197 |  |  | PB_SELLER_SKU_INVALID |
| 4198 |  |  | PB_SELLER_SKU_CANNOT_BE_REVISED |
| 4199 |  |  | PB_PACKAGE_UNMATCHED |
| 4200 |  |  | IMAP_BRAND_NOT_MATCHED |
| 4201 |  |  | IMAP_SALE_PROP_UNMATCHED |
| 4202 |  |  | IMAP_SALE_PROP_ERR_MATCHED |
| 4203 |  |  | IMAP_DEST_SALE_PROP_IS_SPU |
| 4204 |  |  | IMAP_SALE_PROP_VAL_ERR_MATCHED |
| 4205 |  |  | INVALID_IMAGE_FORMAT |
| 4206 |  |  | INVALID_IMAGE_DIMENSION |
| 4207 |  |  | IMPORT_SELLER_SKU_EMPTY |
| 4208 |  |  | IMPORT_SELLER_SKU_INVALID |
| 4209 |  |  | INVALID_CATEGORY |
| 4210 |  |  | FAIL_TO_GET_CATEGORY_ID |
| 4211 |  |  | HAZMAT_WARN |
| 4212 |  |  | PDT_LIMIT_REACH |
| 4213 |  |  | MIGRAGE_IMAGE_FAILED |
| 4214 |  |  | PG_NOT_PERMIT |
| 4215 |  |  | DECO_CREATE_ERROR |
| 4216 |  |  | DECO_NO_TARGET_USER_BIND |
| 4217 |  |  | DECO_SOURCE_QUERY_ERROR |
| 4218 |  |  | DECO_TRANSLATE_ERROR |
| 4219 |  |  | DECO_SYNC_ERROR |
| 4220 |  |  | TRANSLATE_OVER_FLOW |
| 4221 |  |  | ITEM_NEVER_PUBLISH_SUCCESSED |
| 4222 |  |  | NO_SKU_COULD_BE_UPDATE |
| 4223 |  |  | PRODUCT_NUM_REACH_LIMITATION |
| 4224 |  |  | SELLER_STATUS_INVALID |
| 4225 |  |  | PRICE_NOT_VALID |
| 4226 |  |  | SELLER_PUNISHMENT_INVALID |
| 4227 |  |  | SKU_IMAGE_INVALID |
| 4228 |  |  | PRODUCT_IMAGE_INVALID |
| 4229 |  |  | PROHIBITED_BRAND |
| 4230 |  |  | PROHIBITED_KEYWORD |
| 4223 |  |  | Seller's online product quantity has reach limit in all publish venture. |
| 500 |  |  | Create product failed |
| 5 |  |  | Invalid Request Format |
| 4214 |  |  | Create product failed |
| 4194 |  |  | Seller SKU exists. |
| 4178 |  |  | Fail to migrate image |
| 4169 |  |  | This attribute cannot be empty. |
| 4159 |  |  | Create product failed |
| 309 |  |  | Video id status is not audit success |

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
      "paramName": "sku_list",
      "demo": "[]",
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
          "paramName": "seller_sku",
          "demo": "api-create-test-111",
          "required": false,
          "paramType": "1",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 71000,
          "apiId": "2514",
          "docVisible": false,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "sellerSku",
          "parentId": 70999,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.lang.String",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "The SellerSku that is defined,There are no two identical seller SKUs in the same store,"
        }
      ],
      "maxListSize": "",
      "id": 70999,
      "apiId": "2514",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "skuList",
      "parentId": 70998,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.util.List<com.taobao.sellglobal.service.api.response.SkuDetail>",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "SKU information"
    }
  ],
  "maxListSize": "",
  "id": 70998,
  "apiId": "2514",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "data",
  "parentId": 70997,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "com.taobao.sellglobal.service.api.response.CreationBody",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Response body"
}
```
