---
title: QueryAddressInformaiton
category: FirstMile Bigbag(only for CN)
api_name: QueryAddressInformaiton
method: GET/POST
path: /logistics/cnpms/address/query
---

**Category:** FirstMile Bigbag(only for CN)
**API:** QueryAddressInformaiton

**Method:** GET/POST
**HTTP Path:** /logistics/cnpms/address/query

## API Description
Query Address Informaiton

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
| country | String | Yes | 国家 |
| zipCode | String | No | 邮编 |
| userInfo | Object | Yes | 用户信息 |
| userInfo.appUserKey | String | Yes | 由ISV/ERP自定义，用于授权分组 |
| city | String | Yes | 市 |
| remark | String | No | 备注 |
| locale | String | No | 多语言，默认zh_CN |
| province | String | Yes | 省 |
| street | String | Yes | 街道 |
| district | String | Yes | 区/县 |
| detailAddress | String | Yes | 详细地址 |
| client | String | No | ISV名称，ISV：ISV-ISV英文或拼音名称、商家ERP：SELLER-商家英文或拼音名称 |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| result | Object | Yes | 同步响应结果 |
| result.data | Object | Yes | 查询结果，当success为true时有效 |
| result.success | Boolean | Yes | 是否成功，true:成功，false:失败 |
| result.errorCode | String | Yes | 错误码 |
| result.errorMsg | String | Yes | 错误描述 |

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
| P-088-0101-10-10-152 |  |  | address service result error |
| P-088-0000-00-15-213 |  |  | param country is null |
| P-088-0000-00-15-214 |  |  | param province is null |
| P-088-0000-00-15-215 |  |  | param city is null |
| P-088-0000-00-15-216 |  |  | param detailAddress is null |
| P-088-0000-00-15-217 |  |  | param country is not support |
| P-088-0000-00-15-218 |  |  | params is null |

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
  "demo": "-",
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
      "demo": "{     \"matchDetailAddress\": \"上海 上海市 静安区 曹家渡街道 鑫阳公寓古鲁丁家居\",     \"addressId\": \"310106006\"   }",
      "required": true,
      "paramType": "4",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 28071,
      "apiId": "939",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "data",
      "parentId": 28070,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "com.cainiao.global.pms.request.lzd.LazadaOpenQueryAddressInfoResponse",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "查询结果，当success为true时有效"
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
      "id": 28072,
      "apiId": "939",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "success",
      "parentId": 28070,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.Boolean",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "是否成功，true:成功，false:失败"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "errorCode",
      "demo": "P-088-0000-00-99-001",
      "required": true,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 28073,
      "apiId": "939",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "errorCode",
      "parentId": 28070,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "错误码"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "errorMsg",
      "demo": "网络异常，请稍后重试",
      "required": true,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 28074,
      "apiId": "939",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "errorMsg",
      "parentId": 28070,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "错误描述"
    }
  ],
  "maxListSize": "",
  "id": 28070,
  "apiId": "939",
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
  "serviceParamPath": "com.cainiao.global.pms.service.dto.HsfResult",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "同步响应结果"
}
```
