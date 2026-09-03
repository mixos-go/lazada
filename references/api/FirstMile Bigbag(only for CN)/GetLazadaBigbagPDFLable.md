---
title: GetLazadaBigbagPDFLable
category: FirstMile Bigbag(only for CN)
api_name: GetLazadaBigbagPDFLable
method: GET/POST
path: /logistics/cnpms/bigbag/lable/getPdf
---

**Category:** FirstMile Bigbag(only for CN)
**API:** GetLazadaBigbagPDFLable

**Method:** GET/POST
**HTTP Path:** /logistics/cnpms/bigbag/lable/getPdf

## API Description
Get Lazada Bigbag PDF Lable

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
| userInfo | Object | Yes | 用户信息 |
| userInfo.appUserKey | String | Yes | ISV用户Id |
| client | String | Yes | ISV名称，ISV：ISV-ISV英文或拼音名称、商家ERP：SELLER-商家英文或拼音名称 |
| orderCode | String | No | 大包单号，即大包LP号，同handoverContentCode |
| remark | String | No | 备注 |
| locale | String | No | 多语言，默认zh_CN |
| trackingNumber | String | No | 大包运单号 |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| result | Object | Yes | 同步响应结果 |
| result.data | Object | Yes | pdf数据内容 |
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
| P-088-0101-10-10-192 |  |  | query across account relation not found |
| P-088-0000-00-15-209 |  |  | handover content not found |

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
      "demo": "-",
      "required": true,
      "paramType": "4",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 24208,
      "apiId": "819",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "data",
      "parentId": 24207,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.Object",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "pdf数据内容"
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
      "id": 24209,
      "apiId": "819",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "success",
      "parentId": 24207,
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
      "demo": "P-088-0000-00-99-001\t",
      "required": true,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 24210,
      "apiId": "819",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "errorCode",
      "parentId": 24207,
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
      "demo": "网络异常，请稍后重试\t",
      "required": true,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 24211,
      "apiId": "819",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "errorMsg",
      "parentId": 24207,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "错误描述"
    }
  ],
  "maxListSize": "",
  "id": 24207,
  "apiId": "819",
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
