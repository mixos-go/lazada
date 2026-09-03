---
title: digitalServiceCdkCodeReceived
category: Lazada DG API
api_name: digitalServiceCdkCodeReceived
method: POST
path: /digital/service/cdkCodeReceived
---

**Category:** Lazada DG API
**API:** digitalServiceCdkCodeReceived

**Method:** POST
**HTTP Path:** /digital/service/cdkCodeReceived

## API Description
接受码商发码请求，给用户发送码。

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
| tb_order_id | String | Yes | 淘天主订单号 |
| cdk_name | String | No | 商品名称 |
| cdk_code_items | Object[] | Yes | CDK码对象 |
| cdk_code_items.cdk_card_no | String | No | CDK卡号 |
| cdk_code_items.cdk_code_key | String | Yes | CDK密钥/兑换码 |
| tb_order_line_id | String | Yes | 淘天子订单号 |
| valid_from | String | No | 有效期起始时间，YYYY-MM-DD格式 |
| cdk_code_number | String | Yes | CDK码数量 |
| valid_end | String | No | 有效期结束时间，YYYY-MM-DD格式 |
| terms_use | String | No | 使用规则/条款等说明 |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| result_code | String | Yes | 响应状态码 |
| result_msg | String | Yes | 响应描述信息 |

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
  "serviceParamType": "1",
  "hitLog": null,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "result_code",
  "demo": "0",
  "required": true,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 130830,
  "apiId": "4544",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "resultCode",
  "parentId": 130829,
  "dataSecurityLevel": "S2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "响应状态码"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": null,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "result_msg",
  "demo": "success",
  "required": true,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 130831,
  "apiId": "4544",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "resultMsg",
  "parentId": 130829,
  "dataSecurityLevel": "S2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "响应描述信息"
}
```
