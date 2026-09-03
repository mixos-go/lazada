---
title: LazadaBigbagCommit
category: FirstMile Bigbag(only for CN)
api_name: LazadaBigbagCommit
method: GET/POST
path: /logistics/cnpms/bigbag/commit
---

**Category:** FirstMile Bigbag(only for CN)
**API:** LazadaBigbagCommit

**Method:** GET/POST
**HTTP Path:** /logistics/cnpms/bigbag/commit

## API Description
Lazada bigbag commit

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
| userInfo | Object | Yes | Lazada开放平台信息 |
| userInfo.appUserKey | String | Yes | Lazada开放平台appUserKey |
| orderCodeList | String[] | Yes | 要创建交接单的小包编码集合，数量上限1000 |
| weight | String | Yes | 重量 |
| client | String | Yes | ISV名称，ISV：ISV-ISV英文或拼音名称、商家ERP：SELLER-商家英文或拼音名称 |
| collectionInfo | Object | No | 集货点信息 |
| collectionInfo.pickUpCode | String | Yes | 集货点编码 |
| remark | String | No | 备注 |
| pickupInfo | Object | Yes | 揽收信息 |
| pickupInfo.courierCompany | String | No | 快递公司 |
| pickupInfo.receiverPhone | String | No | 收件人手机号 |
| pickupInfo.address | Object | Yes | 揽收地址信息 |
| pickupInfo.address.country | String | Yes | 国家 |
| pickupInfo.address.zipCode | String | Yes | 邮编 |
| pickupInfo.address.city | String | Yes | 市 |
| pickupInfo.address.province | String | Yes | 省 |
| pickupInfo.address.street | String | Yes | 街道 |
| pickupInfo.address.district | String | Yes | 区 |
| pickupInfo.address.detailAddress | String | Yes | 详细地址 |
| pickupInfo.phone | String | No | 移动电话, 校验格式：^1(3\|4\|5\|6\|7\|8\|9)\d{9}$ |
| pickupInfo.name | String | Yes | 揽收联系人名称，必须包含中文字符 |
| pickupInfo.mobile | String | Yes | 固定电话，可空，校验格式：(^0[\d]{2,3}-[\d]{7,8}$)\|(^400[\d]{3,4}[\d]{3,4}$)\|(400-[\d]{3,4}-[\d]{3,4}$) |
| pickupInfo.email | String | Yes | 邮箱 |
| pickupInfo.addressId | Number | Yes | 揽收地址ID |
| locale | String | No | 多语言，默认zh_CN |
| weightUnit | String | Yes | 重量单位，克:g, 千克:kg，默认g |
| type | String | Yes | 类型：cainiao_pickup(菜鸟揽收)、self_post(自寄)、pickup_collection(集货) |
| sellerTrackingNumber | String | No | 商家定义的大包标签号，一般不传，需要将自有大包号作为菜鸟面单号时才传 |
| returnInfo | Object | Yes | 退件信息 |
| returnInfo.phone | String | No | 固定电话，可空，校验格式：(^0[\d]{2,3}-[\d]{7,8}$)\|(^400[\d]{3,4}[\d]{3,4}$)\|(400-[\d]{3,4}-[\d]{3,4}$) |
| returnInfo.name | String | Yes | 退件联系人名称，必须包含中文字符 |
| returnInfo.mobile | String | Yes | 手机号 |
| returnInfo.email | String | Yes | 邮箱 |
| returnInfo.addressId | Number | Yes | 退件地址ID |
| returnInfo.fmReverseOption | String | No | 退件方式 1-退回，2-销毁，3-自提 |
| returnInfo.address | Object | Yes | 退件地址 |
| returnInfo.address.province | String | Yes | 省 |
| returnInfo.address.street | String | Yes | 街道 |
| returnInfo.address.district | String | Yes | 区 |
| returnInfo.address.detailAddress | String | Yes | 详细地址 |
| returnInfo.address.country | String | Yes | 国家 |
| returnInfo.address.zipCode | String | Yes | 退件地址ID |
| returnInfo.address.city | String | Yes | 市 |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| result | Object | Yes | 同步响应结果 |
| result.data | Object | Yes | 响应信息，只有当success为true时才有效 |
| result.data.handoverOrderId | Number | No | 交接单ID |
| result.data.handoverContentId | Number | No | 大包ID |
| result.data.handoverContentCode | String | No | 大包交接单号，即大包LP号 |
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
| P-088-0101-10-10-140 |  |  | all parcel order not found |
| P-088-0101-10-10-191 |  |  | query across store account not found |
| P-088-0000-00-15-170 |  |  | seller has stores that are not packaged across stores |
| InvalidParameter |  |  | The specified parameter “null#addressId” is not valid |
| UnknownRuntimeException |  |  | The request has failed due to RPC runtime failure |
| P-088-0000-00-15-231 |  |  | pick up collection point info missing |
| P-088-0000-00-15-205 |  |  | param is null |

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
      "children": [
        {
          "serviceParamHttpType": "",
          "serviceParamType": "1",
          "hitLog": false,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "handoverOrderId",
          "demo": "10000001",
          "required": false,
          "paramType": "2",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 73743,
          "apiId": "2623",
          "docVisible": false,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "handoverOrderId",
          "parentId": 73742,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.lang.Long",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "交接单ID"
        },
        {
          "serviceParamHttpType": "",
          "serviceParamType": "1",
          "hitLog": false,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "handoverContentId",
          "demo": "20000001",
          "required": false,
          "paramType": "2",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 73744,
          "apiId": "2623",
          "docVisible": false,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "handoverContentId",
          "parentId": 73742,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.lang.Long",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "大包ID"
        },
        {
          "serviceParamHttpType": "",
          "serviceParamType": "1",
          "hitLog": false,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "handoverContentCode",
          "demo": "LP000000123",
          "required": false,
          "paramType": "1",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 73745,
          "apiId": "2623",
          "docVisible": false,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "handoverContentCode",
          "parentId": 73742,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.lang.String",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "大包交接单号，即大包LP号"
        }
      ],
      "maxListSize": "",
      "id": 73742,
      "apiId": "2623",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "data",
      "parentId": 73741,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "com.cainiao.global.pms.response.OpenHandoverCommitResponse",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "响应信息，只有当success为true时才有效"
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
      "id": 73746,
      "apiId": "2623",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "success",
      "parentId": 73741,
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
      "id": 73747,
      "apiId": "2623",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "errorCode",
      "parentId": 73741,
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
      "id": 73748,
      "apiId": "2623",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "errorMsg",
      "parentId": 73741,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "错误描述"
    }
  ],
  "maxListSize": "",
  "id": 73741,
  "apiId": "2623",
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
