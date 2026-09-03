---
title: GetVasOrderByNo4FBL
category: FBL API
api_name: GetVasOrderByNo4FBL
method: GET/POST
path: /fbl/vas/getVasOrderByNo
---

**Category:** FBL API
**API:** GetVasOrderByNo4FBL

**Method:** GET/POST
**HTTP Path:** /fbl/vas/getVasOrderByNo

## API Description
get vasOrder by orderNo

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
| platform_name | String | Yes | laz店铺所属的前台租户,例如: LAZADA_VN |
| vas_order_code | String | Yes | 增值服务单号 |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| data | String | No | 增值服务信息 |

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
  "serviceParamHttpType": "3",
  "serviceParamType": "2",
  "hitLog": true,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "data",
  "demo": "{\"data\":{\"retryable\":false,\"fail\":false,\"data\":{\"gmtOperated\":1766051362000,\"gmtModified\":1766051362000,\"supplierId\":1000000304751101,\"warehouseCode\":\"OMS-LAZADA-WH3\",\"outerVasOrderNo\":\"LBZ00201820007\",\"features\":{\"financeOrganizationCode\":\"FIN_CSLazSupplyChain\"},\"vasOrderNo\":\"ZVAS20251217005438003\",\"lines\":[{\"quantity\":6,\"operatedQuantity\":6,\"intOperatedQuantity\":6,\"scItemId\":566122254124,\"intQuantity\":6}],\"creator\":\"lzdvn0003(lzdvn0003@gmail.com)\",\"blameType\":\"null\",\"gmtCreate\":1765958945000,\"vasCode\":\"BUNDLING_TEST\",\"targetOrderType\":\"GOODS\",\"tenantId\":\"CSFBL\",\"financeOrganizationCode\":\"FIN_CSLazSupplyChain\",\"status\":\"OPERATED\"},\"success\":true,\"succAndNotNull\":true,\"message\":\"OK\"},\"code\":\"0\",\"request_id\":\"2101773f17679308323726963\",\"_trace_id_\":\"21076dc917679308322066562e1d74\"}",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 127955,
  "apiId": "4447",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "data",
  "parentId": 127951,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "增值服务信息"
}
```
