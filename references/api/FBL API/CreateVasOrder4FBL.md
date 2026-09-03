---
title: CreateVasOrder4FBL
category: FBL API
api_name: CreateVasOrder4FBL
method: GET/POST
path: /fbl/vas/createVasOrder
---

**Category:** FBL API
**API:** CreateVasOrder4FBL

**Method:** GET/POST
**HTTP Path:** /fbl/vas/createVasOrder

## API Description
FBL增值服务创建

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
| idempotent_key | String | Yes | 幂等码 |
| service_provider_no | String | No | 物流服务商单据号，比如：LBX |
| target_order_no | String | No | 服务目标单据号,比如：CO单号 |
| target_order_type | String | No | 服务对象类型：服务对象为入库单，则填写：CO；服务对象为品，则填写:GOODS; |
| vas_code | String | Yes | 增值服务Code：LABEL_PRINTING_PASTING_FOR_IB 打印并贴商品条码 LABEL_PRINTING_PASTING_FOR_ITEM 打印并贴商品条码 REPACKING_FOR_IB 重新包装 REPACKING_FOR_ITEM 重新包装 BUNDLING 绑定商品 LABEL_PRINTING_FOR_IB 打印商品条码 LABEL_PRINTING_FOR_ITEM 打印商品条码 LABEL_PASTING_FOR_IB 贴商品条码 LABEL_PASTING_FOR_ITEM 贴商品条码 SORTING 分类商品 INBOUND_QC 收货质检 |
| warehouse_code | String | Yes | 仓code |
| lines | Object[] | Yes | 明细行 |
| lines.quantity | Number | Yes | 计划数量 |
| lines.scItem_id | Number | Yes | 货品ID |
| lines.bundle_quantity | Number | No | 绑定数量 |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| data | String | No | 建单结果 |

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
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "data",
  "demo": "{\"data\":{\"retryable\":false,\"fail\":false,\"data\":\"ZVAS20260109005518012\",\"success\":true,\"succAndNotNull\":true,\"message\":\"OK\"},\"code\":\"0\",\"request_id\":\"2101773f17679312998796972\",\"_trace_id_\":\"212b8f2f17679312997072285e1ccf\"}",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 128378,
  "apiId": "4451",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "data",
  "parentId": 127968,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "建单结果"
}
```
