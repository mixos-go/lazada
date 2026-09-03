---
title: GetDocument
category: Order API
api_name: GetDocument
method: GET
path: /order/document/get
---

**Category:** Order API
**API:** GetDocument

**Method:** GET
**HTTP Path:** /order/document/get

## API Description
Use this API to retrieve order-related documents, including invoices and shipping labels.

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
| doc_type | String | Yes | Document types, including 'invoice', 'shippingLabel', or 'carrierManifest'. Mandatory. |
| order_item_ids | String | Yes | Identifier of the order item for which the caller wants to get a document. Mandatory. |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| data | Object | Yes | response data |
| data.document | Object | Yes | document |
| data.document.file | String | Yes | To reconstruct the file, the data from the <file> node needs to be base64 decoded, and interpreted according to the mime_type. |
| data.document.mime_type | String | Yes | To reconstruct the file, the data from the <file> node needs to be base64 decoded, and interpreted according to the mime_type. |
| data.document.document_type | String | Yes | Document types, including 'invoice', 'shippingLabel', or 'carrierManifest'. |

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
| 20 |  |  | E020: "%s" Invalid Order Item IDs |
| 21 |  |  | E021: OMS Api Error Occurred |
| 32 |  |  | E032: Document type "%s" is not valid |
| 34 |  |  | E034: Order Item must be packed. Please call SetStatusToReadyToShip before |
| 35 |  |  | E035: "%s" was not found |
| 30012 |  |  | rts package not found |
| 700040 |  |  | There are no packages that support printing! |
| 700040 |  |  | There are no packages that support printing! |
| 700040 |  |  | There are no packages that support printing! |
| 700040 |  |  | There are no packages that support printing! |
| 6 |  |  | For input string: "" |
| 50008 |  |  | ot support operation for sof order |

## Examples
```json
{
  "serviceParamHttpType": "",
  "serviceParamType": "2",
  "hitLog": null,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "data",
  "demo": "{}",
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
      "paramName": "document",
      "demo": "{}",
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
          "paramName": "file",
          "demo": "PHN0eWxlPnRlRrU3VRbUNDJyAvPjwvcD4K",
          "required": true,
          "paramType": "1",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "https://open.lazada.com/doc/doc.htm?spm=a2o9m.11193535.0.0.1f2a38e4l12Giz#?nodeId=10784&docId=108297",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 75745,
          "apiId": "2688",
          "docVisible": true,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "C",
          "maskField": "common",
          "serviceParamName": "file",
          "parentId": 75744,
          "dataSecurityLevel": "C3",
          "serviceParamPath": "java.lang.String",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "To reconstruct the file, the data from the <file> node needs to be base64 decoded, and interpreted according to the mime_type."
        },
        {
          "serviceParamHttpType": "",
          "serviceParamType": "1",
          "hitLog": null,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "mime_type",
          "demo": "text/html",
          "required": true,
          "paramType": "1",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 75746,
          "apiId": "2688",
          "docVisible": true,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "mime_type",
          "parentId": 75744,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.lang.String",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "To reconstruct the file, the data from the <file> node needs to be base64 decoded, and interpreted according to the mime_type."
        },
        {
          "serviceParamHttpType": "",
          "serviceParamType": "1",
          "hitLog": null,
          "defaultValue": "",
          "previewDemo": "",
          "maxSize": "",
          "paramName": "document_type",
          "demo": "shippingLabel",
          "required": true,
          "paramType": "1",
          "mappingValue": "",
          "minValue": null,
          "dataMaskUrl": "",
          "enumValue": "",
          "children": [],
          "maxListSize": "",
          "id": 75747,
          "apiId": "2688",
          "docVisible": true,
          "paramOrder": "",
          "moreLimit": "",
          "maxValue": null,
          "paramFrom": "2",
          "sensitiveDataTag": "",
          "maskField": "",
          "serviceParamName": "document_type",
          "parentId": 75744,
          "dataSecurityLevel": "C2",
          "serviceParamPath": "java.lang.String",
          "mappingType": "1",
          "regexExpression": "",
          "constantValue": "",
          "desc": "Document types, including 'invoice', 'shippingLabel', or 'carrierManifest'."
        }
      ],
      "maxListSize": "",
      "id": 75744,
      "apiId": "2688",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "document",
      "parentId": 75743,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.Object",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "document"
    }
  ],
  "maxListSize": "",
  "id": 75743,
  "apiId": "2688",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "data",
  "parentId": 75742,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.Object",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "response data"
}
```
