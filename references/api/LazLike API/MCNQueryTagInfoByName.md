---
title: MCNQueryTagInfoByName
category: LazLike API
api_name: MCNQueryTagInfoByName
method: GET/POST
path: /content/mcn/content/queryTagInfosByName
---

**Category:** LazLike API
**API:** MCNQueryTagInfoByName

**Method:** GET/POST
**HTTP Path:** /content/mcn/content/queryTagInfosByName

## API Description
MCNQueryTagInfoByName

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
| tagNames | String | Yes | The tag name you want to query, multiple tags are split according to, |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| api_result | Object | No | result |
| api_result.success | String | No | whether the operation succeeds |
| api_result.resultCode | String | No | error code provided when the operation fails |
| api_result.resultMessage | String | No | error message provided when the operation fails |
| api_result.tagDTOList | Object[] | No | result |

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
  "paramName": "api_result",
  "demo": "{   \"success\": false,   \"resultCode\": \"\",   \"tagDTOList\": [     {       \"owner\": \"lazada_content\",       \"gmtModified\": 1716518646000,       \"creator\": \"343236\",       \"tagCode\": \"Neo-Chinese_1716518645925\",       \"effectiveTime\": null,       \"entityAttr\": null,       \"modifier\": \"343236\",       \"description\": \"Neo-Chinese\",       \"gmtCreate\": 1716518646000,       \"tagName\": \"Neo-Chinese\",       \"effectiveEntityCount\": null,       \"expireTime\": null,       \"parentTagId\": 7697,       \"isDeleted\": \"0\",       \"tagPath\": \"7697-7703\",       \"propertyTagDTOList\": null,       \"id\": 7703,       \"isSetDeadline\": \"0\",       \"class\": \"com.lazada.tag.client.response.TagDTO\",       \"parentTagCode\": \"Fashion Style_1716518581934\",       \"tagCategoryCode\": \"content_property\",       \"entityAttrVersion\": \"1.0\",       \"status\": null     }   ],   \"resultMessage\": \"\",   \"class\": \"com.lazada.lazlike.openapi.response.McnTagInfosResult\" }",
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
      "paramName": "success",
      "demo": "true",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 112169,
      "apiId": "3959",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "success",
      "parentId": 112168,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.Boolean",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "whether the operation succeeds"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "resultCode",
      "demo": "error",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 112170,
      "apiId": "3959",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "resultCode",
      "parentId": 112168,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "error code provided when the operation fails"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "resultMessage",
      "demo": "10001",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 112171,
      "apiId": "3959",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "resultMessage",
      "parentId": 112168,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "error message provided when the operation fails"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "3",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "tagDTOList",
      "demo": "[     {       \"owner\": \"lazada_content\",       \"gmtModified\": 1716518646000,       \"creator\": \"343236\",       \"tagCode\": \"Neo-Chinese_1716518645925\",       \"effectiveTime\": null,       \"entityAttr\": null,       \"modifier\": \"343236\",       \"description\": \"Neo-Chinese\",       \"gmtCreate\": 1716518646000,       \"tagName\": \"Neo-Chinese\",       \"effectiveEntityCount\": null,       \"expireTime\": null,       \"parentTagId\": 7697,       \"isDeleted\": \"0\",       \"tagPath\": \"7697-7703\",       \"propertyTagDTOList\": null,       \"id\": 7703,       \"isSetDeadline\": \"0\",       \"class\": \"com.lazada.tag.client.response.TagDTO\",       \"parentTagCode\": \"Fashion Style_1716518581934\",       \"tagCategoryCode\": \"content_property\",       \"entityAttrVersion\": \"1.0\",       \"status\": null     },     {       \"owner\": \"lazada_content\",       \"gmtModified\": 1716885895000,       \"creator\": \"343236\",       \"tagCode\": \"Sexy Style_1716885895073\",       \"effectiveTime\": null,       \"entityAttr\": null,       \"modifier\": \"343236\",       \"description\": \"Sexy Style\",       \"gmtCreate\": 1716885895000,       \"tagName\": \"Sexy Style\",       \"effectiveEntityCount\": null,       \"expireTime\": null,       \"parentTagId\": 7697,       \"isDeleted\": \"0\",       \"tagPath\": \"7697-7709\",       \"propertyTagDTOList\": null,       \"id\": 7709,       \"isSetDeadline\": \"0\",       \"class\": \"com.lazada.tag.client.response.TagDTO\",       \"parentTagCode\": \"Fashion Style_1716518581934\",       \"tagCategoryCode\": \"content_property\",       \"entityAttrVersion\": \"1.0\",       \"status\": null     }   ]",
      "required": false,
      "paramType": "9",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 112172,
      "apiId": "3959",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "tagDTOList",
      "parentId": 112168,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.util.List",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "result"
    }
  ],
  "maxListSize": "",
  "id": 112168,
  "apiId": "3959",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "",
  "parentId": 0,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "com.lazada.lazlike.openapi.response.McnTagInfosResult",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "result"
}
```
