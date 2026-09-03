---
title: GetSizeChartTemplate
category: Product API
api_name: GetSizeChartTemplate
method: GET
path: /size/chart/template/get
---

**Category:** Product API
**API:** GetSizeChartTemplate

**Method:** GET
**HTTP Path:** /size/chart/template/get

## API Description
获取尺码模板列表

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
| template_id | Number | No | size chart template id |
| template_name | String | No | size chart name |
| page_no | Number | Yes | page no |
| page_size | Number | Yes | page size |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| data | Object | No | Response body |
| data.total | Number | No | total |
| data.pageNo | Number | No | page no |
| data.pageSize | Number | No | page size |
| data.totalPage | Number | No | total page |
| data.sizeChartResponses | Object[] | No | [{"sizeChartName":"test template","linkProductIds":null,"class":"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse","sizeChartId":40010},{"sizeChartName":"sssss 1233","linkProductIds":null,"class":"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse","sizeChartId":400 |

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
| 4184 |  |  | E4184 |
| 4190 |  |  | E4190 |
| 4176 |  |  | E4176 |

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
  "demo": "{\"data\":{\"total\":10,\"pageNo\":1,\"totalPage\":1,\"pageSize\":20,\"class\":\"com.taobao.sellglobal.service.api.response.SizeChartResponse\",\"sizeChartResponses\":[{\"sizeChartName\":\"test template\",\"linkProductIds\":null,\"class\":\"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse\",\"sizeChartId\":40010},{\"sizeChartName\":\"sssss 1233\",\"linkProductIds\":null,\"class\":\"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse\",\"sizeChartId\":40007},{\"sizeChartName\":\"test dup sizeGroup\",\"linkProductIds\":null,\"class\":\"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse\",\"sizeChartId\":38014},{\"sizeChartName\":\"test publish sizechart template\",\"linkProductIds\":null,\"class\":\"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse\",\"sizeChartId\":38013},{\"sizeChartName\":\"from publish template\",\"linkProductIds\":null,\"class\":\"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse\",\"sizeChartId\":40003},{\"sizeChartName\":\"asasa\",\"linkProductIds\":null,\"class\":\"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse\",\"sizeChartId\":40002},{\"sizeChartName\":\"test\",\"linkProductIds\":null,\"class\":\"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse\",\"sizeChartId\":42005},{\"sizeChartName\":\"copy-test dress templatetest dress templatetest dress t\",\"linkProductIds\":null,\"class\":\"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse\",\"sizeChartId\":38010},{\"sizeChartName\":\"test template 2\",\"linkProductIds\":null,\"class\":\"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse\",\"sizeChartId\":42001},{\"sizeChartName\":\"winni test -1\",\"linkProductIds\":null,\"class\":\"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse\",\"sizeChartId\":36003}]},\"success\":true,\"errorCode\":null,\"errorDetail\":null,\"class\":\"com.alibaba.normandie.gateway.client.domain.lazop.APIResult\",\"errors\":null,\"errorMsg\":null}",
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
      "paramName": "total",
      "demo": "50",
      "required": false,
      "paramType": "2",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 99434,
      "apiId": "3547",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "total",
      "parentId": 99433,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.Long",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "total"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "pageNo",
      "demo": "1",
      "required": false,
      "paramType": "2",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 99435,
      "apiId": "3547",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "pageNo",
      "parentId": 99433,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.Long",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "page no"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "pageSize",
      "demo": "20",
      "required": false,
      "paramType": "2",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 99436,
      "apiId": "3547",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "pageSize",
      "parentId": 99433,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.Long",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "page size"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "totalPage",
      "demo": "2",
      "required": false,
      "paramType": "2",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 99437,
      "apiId": "3547",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "totalPage",
      "parentId": 99433,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.Long",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "total page"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "3",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "sizeChartResponses",
      "demo": "1",
      "required": false,
      "paramType": "9",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 99438,
      "apiId": "3547",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "sizeChartResponses",
      "parentId": 99433,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.util.List<com.taobao.sellglobal.service.api.response.SingleSizeChartResponse>",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "[{\"sizeChartName\":\"test template\",\"linkProductIds\":null,\"class\":\"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse\",\"sizeChartId\":40010},{\"sizeChartName\":\"sssss 1233\",\"linkProductIds\":null,\"class\":\"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse\",\"sizeChartId\":40007},{\"sizeChartName\":\"test dup sizeGroup\",\"linkProductIds\":null,\"class\":\"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse\",\"sizeChartId\":38014},{\"sizeChartName\":\"test publish sizechart template\",\"linkProductIds\":null,\"class\":\"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse\",\"sizeChartId\":38013},{\"sizeChartName\":\"from publish template\",\"linkProductIds\":null,\"class\":\"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse\",\"sizeChartId\":40003},{\"sizeChartName\":\"asasa\",\"linkProductIds\":null,\"class\":\"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse\",\"sizeChartId\":40002},{\"sizeChartName\":\"test\",\"linkProductIds\":null,\"class\":\"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse\",\"sizeChartId\":42005},{\"sizeChartName\":\"copy-test dress templatetest dress templatetest dress t\",\"linkProductIds\":null,\"class\":\"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse\",\"sizeChartId\":38010},{\"sizeChartName\":\"test template 2\",\"linkProductIds\":null,\"class\":\"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse\",\"sizeChartId\":42001},{\"sizeChartName\":\"winni test -1\",\"linkProductIds\":null,\"class\":\"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse\",\"sizeChartId\":36003}]"
    }
  ],
  "maxListSize": "",
  "id": 99433,
  "apiId": "3547",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "data",
  "parentId": 99432,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "com.taobao.sellglobal.service.api.response.SizeChartResponse",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Response body"
}
```
