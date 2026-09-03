---
title: Reconciliation
category: Lazada Wallet Corporate Top-up API
api_name: Reconciliation
method: GET/POST
path: /wallet/open/reconciliation
---

**Category:** Lazada Wallet Corporate Top-up API
**API:** Reconciliation

**Method:** GET/POST
**HTTP Path:** /wallet/open/reconciliation

## API Description
Corporate TopUp - Reconciliation

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
| date | String | Yes | A date in the format of "yyyy-mm-dd" |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| res | String | No | The reconciliation file encoded by base64, user needs to decode it into a readable csv file. |

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
| RECONCILIATION_INPUT_DATE_INVALID |  |  | Invalid input format of local date. |
| ECONCILIATION_CSV_ERROR_FAILED |  |  | Error happens when creating reconciliation file. |
| BIZ_DEGRADATION_ERROR |  |  | The service is not available now. |

## Examples
```json
{
  "serviceParamHttpType": "",
  "serviceParamType": "",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "res",
  "demo": "abcdefg",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 118594,
  "apiId": "4173",
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
  "serviceParamPath": "",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "The reconciliation file encoded by base64, user needs to decode it into a readable csv file."
}
```
