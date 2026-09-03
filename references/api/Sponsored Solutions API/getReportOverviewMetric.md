---
title: getReportOverviewMetric
category: Sponsored Solutions API
api_name: getReportOverviewMetric
method: GET/POST
path: /sponsor/solutions/report/getReportOverviewMetric
---

**Category:** Sponsored Solutions API
**API:** getReportOverviewMetric

**Method:** GET/POST
**HTTP Path:** /sponsor/solutions/report/getReportOverviewMetric

## API Description
get report overview metric

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
| metricType | Number | Yes | The type pf metric.1:spend;2:impressions;3:clicks;4:ctr;5:units sold;6:revenue;7:cpc;8:roi;9:store order;10:store a2c;11:product order. |
| endDate | String | Yes | End date. |
| useRtTable | Boolean | Yes | If you need to search data for today, then use true, otherwise false. |
| bizCode | String | Yes | Decided to choose which advertisement solution.SD:sponsoredSearch. |
| startDate | String | Yes | Start date. |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| result | Object | Yes | The detail result, for this api is metric data. |
| result.dateList | Number[] | No | Timelime for horizontal axis. |
| result.hourList | Number[] | No | Timelime for horizontal axis.Only when search date is today. |
| result.metricList | String[] | No | The detail metric data for longitudinal axis. |
| success | String | Yes | System result for this api call. |
| analyseTraceId | String | Yes | If the api call failed, you could find us with this. |
| errorMsg | String | Yes | If the api call failed, this field will show the detail reason. |

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
  "hitLog": null,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "result",
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
      "serviceParamType": "3",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "dateList",
      "demo": "[1680451200000,1680537600000,1680624000000,1680710400000,1680796800000,1680883200000,1680969600000]",
      "required": false,
      "paramType": "7",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 101769,
      "apiId": "3600",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "dateList",
      "parentId": 101768,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.util.List<java.lang.Longa>",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "Timelime for horizontal axis."
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "3",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "hourList",
      "demo": "[]",
      "required": false,
      "paramType": "7",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 101770,
      "apiId": "3600",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "hourList",
      "parentId": 101768,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.util.List<java.lang.Long>",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "Timelime for horizontal axis.Only when search date is today."
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "3",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "metricList",
      "demo": "[0,0,0,0,0,0,0]",
      "required": false,
      "paramType": "6",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 101771,
      "apiId": "3600",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "metricList",
      "parentId": 101768,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.util.List<java.lang.String>",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "The detail metric data for longitudinal axis."
    }
  ],
  "maxListSize": "",
  "id": 101768,
  "apiId": "3600",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "result",
  "parentId": 101767,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "com.lazada.ad.openapi.dto.report.ReportOverviewMetricDTO",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "The detail result, for this api is metric data."
}
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
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 101772,
  "apiId": "3600",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "success",
  "parentId": 101767,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "boolean",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "System result for this api call."
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": null,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "analyseTraceId",
  "demo": "...",
  "required": true,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 101773,
  "apiId": "3600",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "analyseTraceId",
  "parentId": 101767,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": " If the api call failed, you could find us with this."
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": null,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "errorMsg",
  "demo": "INTERNAL_ERROR",
  "required": true,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 101774,
  "apiId": "3600",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "errorMsg",
  "parentId": 101767,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "If the api call failed, this field will show the detail reason."
}
```
