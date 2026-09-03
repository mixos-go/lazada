---
title: RefreshAccessToken
category: System API
api_name: RefreshAccessToken
method: GET/POST
path: /auth/token/refresh
---

**Category:** System API
**API:** RefreshAccessToken

**Method:** GET/POST
**HTTP Path:** /auth/token/refresh

## API Description
refresh access_token, the endpoint is https://auth.lazada.com/rest

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
| refresh_token | String | Yes | refresh_token |

## Response Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| expires_in | Number | Yes | The expiring time of the access token, in seconds |
| account_id | String | Yes | Account ID，Allow null. if(account_platform=seller_center) account_id=null |
| country | String | Yes | The country ID (sg:Singapore, my:Malaysia, ph:Philippines, th:Thailand, id:Indonesia, vn:Vietnam) |
| country_user_info_list | Object[] | Yes | Country user details |
| country_user_info_list.country | String | Yes | The country ID (sg:Singapore, my:Malaysia, ph:Philippines, th:Thailand, id:Indonesia, vn:Vietnam) |
| country_user_info_list.seller_id | String | Yes | Seller ID |
| country_user_info_list.user_id | String | Yes | User ID |
| country_user_info_list.short_code | String | No | The short code that is assigned to each seller ID by Lazada Seller Center |
| account_platform | String | Yes | Account platform |
| access_token | String | Yes | Access token |
| account | String | Yes | User account(login user) |
| refresh_expires_in | Number | Yes | The expiring time of th refresh token |
| refresh_token | String | Yes | Refresh token, used to refresh the token when “refresh_expires_in”>0. |

## Endpoints (by region)
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| All |  |  | https://auth.lazada.com/rest |

## Error Codes
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| IllegalRefreshToken |  |  | "The specified refresh token is invalid or expired" |
| AUTH_TYPE_UNSUPPORTED |  |  | XXX can only be authorized by market, not support refresh |
| IllegalRefreshToken |  |  | The specified refresh token is invalid or expired |
| AUTH_TYPE_UNSUPPORTED |  |  | XXX can only be authorized by market, not support refresh |
| IllegalRefreshToken |  |  | The specified refresh token is invalid or expired |
| AUTH_TYPE_UNSUPPORTED |  |  | XXX can only be authorized by market, not support refresh |
| IllegalRefreshToken |  |  | The specified refresh token is invalid or expired |
| IllegalRefreshToken |  |  | The specified refresh token is invalid or expired |
| AUTH_TYPE_UNSUPPORTED |  |  | appkey can only be authorized by market, not support refresh |

## Examples
```json
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": null,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "expires_in",
  "demo": "10",
  "required": true,
  "paramType": "2",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 52020,
  "apiId": "1762",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "expiresIn",
  "parentId": 52019,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "long",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "The expiring time of the access token, in seconds"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": null,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "account_id",
  "demo": "7063844",
  "required": true,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 52021,
  "apiId": "1762",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "accountId",
  "parentId": 52019,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Account ID，Allow null. if(account_platform=seller_center) account_id=null"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": null,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "country",
  "demo": "sg",
  "required": true,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 52022,
  "apiId": "1762",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "country",
  "parentId": 52019,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "The country ID (sg:Singapore, my:Malaysia, ph:Philippines, th:Thailand, id:Indonesia, vn:Vietnam)"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "3",
  "hitLog": null,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "country_user_info_list",
  "demo": "{     \"sg\": {       \"seller_id\": \"1001\",       \"user_id\": 10101     },     \"my\": {       \"seller_id\": \"2001\",       \"user_id\": 20101     } }",
  "required": true,
  "paramType": "9",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "country",
      "demo": "sg",
      "required": true,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 52024,
      "apiId": "1762",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "country",
      "parentId": 52023,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "The country ID (sg:Singapore, my:Malaysia, ph:Philippines, th:Thailand, id:Indonesia, vn:Vietnam)"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "seller_id",
      "demo": "1001",
      "required": true,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 52025,
      "apiId": "1762",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "sellerId",
      "parentId": 52023,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "Seller ID"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": null,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "user_id",
      "demo": "10101",
      "required": true,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 52026,
      "apiId": "1762",
      "docVisible": true,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "userId",
      "parentId": 52023,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "User ID"
    },
    {
      "serviceParamHttpType": "",
      "serviceParamType": "1",
      "hitLog": false,
      "defaultValue": "",
      "previewDemo": "",
      "maxSize": "",
      "paramName": "short_code",
      "demo": "SG001",
      "required": false,
      "paramType": "1",
      "mappingValue": "",
      "minValue": null,
      "dataMaskUrl": "",
      "enumValue": "",
      "children": [],
      "maxListSize": "",
      "id": 52027,
      "apiId": "1762",
      "docVisible": false,
      "paramOrder": "",
      "moreLimit": "",
      "maxValue": null,
      "paramFrom": "2",
      "sensitiveDataTag": "",
      "maskField": "",
      "serviceParamName": "shortCode",
      "parentId": 52023,
      "dataSecurityLevel": "C2",
      "serviceParamPath": "java.lang.String",
      "mappingType": "1",
      "regexExpression": "",
      "constantValue": "",
      "desc": "The short code that is assigned to each seller ID by Lazada Seller Center"
    }
  ],
  "maxListSize": "",
  "id": 52023,
  "apiId": "1762",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "countryUserInfoList",
  "parentId": 52019,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.util.List<com.taobao.iop.iopauth.client.domain.CountryUserInfo>",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Country user details"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": null,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "account_platform",
  "demo": "seller_center",
  "required": true,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 52028,
  "apiId": "1762",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "accountPlatform",
  "parentId": 52019,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Account platform"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": null,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "access_token",
  "demo": "50000601c30atpedfgu3LVvik87Ixlsvle3mSoB7701ceb156fPunYZ43GBg",
  "required": true,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 52029,
  "apiId": "1762",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "accessToken",
  "parentId": 52019,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Access token"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": null,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "account",
  "demo": "xxx@126.com",
  "required": true,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 52030,
  "apiId": "1762",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "account",
  "parentId": 52019,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "User account(login user)"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": null,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "refresh_expires_in",
  "demo": "60",
  "required": true,
  "paramType": "2",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 52031,
  "apiId": "1762",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "refreshExpiresIn",
  "parentId": 52019,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "long",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "The expiring time of th refresh token"
}
{
  "serviceParamHttpType": "",
  "serviceParamType": "1",
  "hitLog": null,
  "defaultValue": "",
  "previewDemo": "",
  "maxSize": "",
  "paramName": "refresh_token",
  "demo": "500016000300bwa2WteaQyfwBMnPxurcA0mXGhQdTt18356663CfcDTYpWoi",
  "required": true,
  "paramType": "1",
  "mappingValue": "",
  "minValue": null,
  "dataMaskUrl": "",
  "enumValue": "",
  "children": [],
  "maxListSize": "",
  "id": 52032,
  "apiId": "1762",
  "docVisible": true,
  "paramOrder": "",
  "moreLimit": "",
  "maxValue": null,
  "paramFrom": "2",
  "sensitiveDataTag": "",
  "maskField": "",
  "serviceParamName": "refreshToken",
  "parentId": 52019,
  "dataSecurityLevel": "C2",
  "serviceParamPath": "java.lang.String",
  "mappingType": "1",
  "regexExpression": "",
  "constantValue": "",
  "desc": "Refresh token, used to refresh the token when “refresh_expires_in”>0."
}
```
