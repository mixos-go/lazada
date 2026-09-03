---
title: Update3PLStation
category: Logistics API
api_name: Update3PLStation
method: POST
path: /logistics/tps/stations/update
---

**Category:** Logistics API
**API:** Update3PLStation

**Method:** POST
**HTTP Path:** /logistics/tps/stations/update

## API Description
TPS_UPDATE_STATION_API External partner call TPS to update station

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
| externalCode | String | Yes | Station code in 3PL system |
| modifier | String | No | Modifier name. if blank will use 3PL name |
| enable | Boolean | Yes | Enable or disable Station |
| functionCodes | String[] | Yes | Station functions |
| subTypes | String[] | Yes | Y Station subtypes (depends on function) enum: DOP function: MDOP, DOP, OTC,IDOP CP function: COLLECTION_ON_POINT, MOBILE_COLLECTION_POINT, LOCKER Return function: CUSTOMER_RETURN |
| codSupport | Boolean | Yes | Support COD or not |
| age | Number | No | Number of days the station can keep packages for (used by LOP station tool). If not withdrawn by the customer within the age value, the package will be picked up from the station by a dedicated 3PL and brought to the warehouse. The package will be marked as failed delivery. Unit: Days |
| firstMileTplSlugs | String[] | Yes | Which 3PL can go and pick up the seller dropped-off parcel from the station |
| lastMileTplSlugs | String[] | Yes | This is a list of logistics providers which can deliver packages to this station. |
| contact | Object | Yes | Station contact information |
| contact.name | String | Yes | Contact name |
| contact.phone | String | Yes | Contact phone |
| contact.email | String | No | Contact email |
| address | Object | Yes | Station address |
| address.id | String | Yes | Lazada R code address id |
| address.details | String | Yes | Address details |
| address.latitude | String | Yes | Latitude (At most 6 decimal digits) |
| address.longitude | String | Yes | Longitude (At most 6 decimal digits) |
| timeZone | String | No | Timezone (used to calculate the schedules) If not specified, use default country timezone format: (+/-)XX:XX |
| schedules | Object[] | No | Station schedules |
| schedules.workDays | String[] | Yes | List of working days apply which this schedule applied |
| schedules.startTime | String | Yes | the start time of Station schedule adopted by 24 hour system, the pattern is HH:mm:ss. example 07:00:00, 15:05:00 |
| schedules.endTime | String | Yes | the end time of Station schedule adopted by 24 hour system, the pattern is HH:mm:ss. example 07:00:00, 15:05:00 |
| schedules.cutOffTime | String | Yes | the cutoff time of Station schedule adopted by 24 hour system, the pattern is HH:mm:ss. example 07:00:00, 15:05:00 |
| constraints | Object[] | No | Function constraint |
| constraints.maxCapacity | Number | Yes | the maximum number of packages processed per day by Station. |
| constraints.maxWidth | Number | Yes | the maximum width of packages processed by Station, unit: cm |
| constraints.maxHeight | Number | Yes | the maximum height of packages processed by Station, unit: cm |
| constraints.maxLength | Number | Yes | the maximum length of packages processed by Station, unit: cm |
| constraints.maxWeight | Number | Yes | the maximum weight of packages processed by Station, unit: g |
| constraints.functionCode | String | Yes | Function which this constraint applied |
| constraints.maxCbm | String | Yes | the maximum cbm of packages processed by Station, unit: m³ |
| name | String | No | Station name |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| success | Boolean | No | Is success? |
| retryable | Boolean | No | Is failed request retryable? |
| errorMessage | String | No | Error message |
| errorCode | String | No | Error code |
| errors | Object[] | No | Error list |
| errors.errorMessage | String | No | Error message |
| errors.errorCode | String | No | Error code |
| errors.field | String | No | Error field |

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
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "success",
  "demo": "false",
  "required": false,
  "paramType": "3",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 93809,
  "apiId": "3321",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "success",
  "parentId": 93808,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.Boolean",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Is success?"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "retryable",
  "demo": "false",
  "required": false,
  "paramType": "3",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 93810,
  "apiId": "3321",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "retryable",
  "parentId": 93808,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.Boolean",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Is failed request retryable?"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "errorMessage",
  "demo": "Bad request",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 93811,
  "apiId": "3321",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "errorMsg",
  "parentId": 93808,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Error message"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "errorCode",
  "demo": "BAD_REQUEST",
  "required": false,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 93812,
  "apiId": "3321",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "errorCode",
  "parentId": 93808,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Error code"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "3",
  "hitLog": false,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "errors",
  "demo": "[]",
  "required": false,
  "paramType": "9",
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
      "paramName": "errorMessage",
      "demo": "$.name is missing",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 93814,
      "apiId": "3321",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "message",
      "parentId": 93813,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "Error message"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "errorCode",
      "demo": "INVALID_PARAMETER",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 93815,
      "apiId": "3321",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "code",
      "parentId": 93813,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "Error code"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "field",
      "demo": "$.name",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 93816,
      "apiId": "3321",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "field",
      "parentId": 93813,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "Error field"
    }
  ],
  "maxListSize": "",
  "id": 93813,
  "apiId": "3321",
  "docVisible": false,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "errors",
  "parentId": 93808,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.util.List<com.alibaba.logistics.tps.shared.model.api.response.Error>",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Error list"
}
```
