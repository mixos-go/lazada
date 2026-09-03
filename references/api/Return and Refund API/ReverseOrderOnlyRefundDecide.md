---
title: ReverseOrderOnlyRefundDecide
category: Return and Refund API
api_name: ReverseOrderOnlyRefundDecide
method: GET
path: /order/reverse/onlyrefund/seller/decide
---

**Category:** Return and Refund API
**API:** ReverseOrderOnlyRefundDecide

**Method:** GET
**HTTP Path:** /order/reverse/onlyrefund/seller/decide

## API Description
Seller can use this API to operate only refund requests

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
| action | String | Yes | agreeRefund, startDispute |
| reverse_order_id | Number | Yes | reverse order id |
| reverse_order_item_ids | Number[] | Yes | reverse order item id list, currently list size can be only 1 |
| comment | String | No | comment, required if action is startDispute |
| image_info_list | Object[] | No | image info list, required if action is startDispute |
| image_info_list.file_name | String | No | image name |
| image_info_list.file_url | String | No | image url |
| video_info_list | Object[] | No | video info list |
| video_info_list.cover_url | String | No | cover url |
| video_info_list.video_url | String | No | video url |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| data | Object | No | null |

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
| 116 |  |  | E0116: no seller id |
| 118 |  |  | E0108: reason can't be empty if you want to refuse return or refund |
| 100 |  |  | E0100: reverse order list is empty |
| 125 |  |  | E0125: invalid reverse id |
| 112 |  |  | E0112: no reverse order found |
| 133 |  |  | E0133: do not support batch operation |
| 126 |  |  | E0126: invalid reverse order lines |
| 114 |  |  | E0114: this reverse does not support this action |
| 107 |  |  | E0107: invalid action |
| 109 |  |  | E0109: comment can't be empty if startDispute |
| 110 |  |  | E0110: image can't be empty if startDispute |
| 106 |  |  | E0106: ROC internal error |
| 113 |  |  | E0113: reverse order line have unknown status |
| 114 |  |  | E0114: this reverse does not support this action |

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
  "demo": "null",
  "required": false,
  "paramType": "4",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 120095,
  "apiId": "4215",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "void",
  "parentId": 119868,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.Void",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "null"
}
```
