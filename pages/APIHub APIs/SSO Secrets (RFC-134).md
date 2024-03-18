---
title: SSO Secrets 
layout: home
parent: OpenDSU APIHub APIs
nav_order: 15
---

# **SSO Secrets (RFC-134)**

{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs).

**Document Maintainers: Andi Gabriel Tan 2022. List of other contributors in Annex. 1.**

**Copyright: MIT license**

**Copyright** ©  2018-2022 Axiologic Research and Contributors.

This document is licensed under <a href="https://en.wikipedia.org/wiki/MIT_License">MIT license.</a>

<!-- TOC -->
* [**SSO Secrets (RFC-134)**](#sso-secrets-rfc-134)
* [**Abstract**](#abstract)
* [**Secrets Categories**](#secrets-categories)
* [**1. Get SSO Secret**](#1-get-sso-secret)
  * [1.1. Path Parameters](#11-path-parameters)
  * [1.2. Request Headers](#12-request-headers)
  * [1.3. Responses](#13-responses)
* [**2. Put SSO Secret**](#2-put-sso-secret)
  * [2.1. Path Parameters](#21-path-parameters)
  * [2.2. Body Parameters](#22-body-parameters)
  * [2.3. Request Headers or JWT OAuth Cookie](#23-request-headers-or-jwt-oauth-cookie)
  * [2.4. Responses](#24-responses)
* [**3. Deactivate SSO Secret**](#3-deactivate-sso-secret)
  * [3.1. Path Parameters](#31-path-parameters)
  * [3.2. Request Headers](#32-request-headers)
  * [3.3. Responses](#33-responses)
* [**4. Remove SSO Secret**](#4-remove-sso-secret)
  * [4.1. Path Parameters](#41-path-parameters)
  * [4.2. Request Headers](#42-request-headers)
  * [4.3. Responses](#43-responses)
* [**5. Put DID Secret**](#5-put-did-secret)
  * [5.1. Path Parameters](#51-path-parameters)
  * [5.2. Request Headers](#52-request-headers)
* [Warning: This API is unsafe if the secret is not encrypted with the DID](#warning-this-api-is-unsafe-if-the-secret-is-not-encrypted-with-the-did)
  * [5.3. Responses](#53-responses)
* [**6. Get DID Secret**](#6-get-did-secret)
  * [6.1. Path Parameters](#61-path-parameters)
  * [6.2. Request Headers](#62-request-headers)
  * [6.3. Responses](#63-responses)
* [**7. Delete DID Secret (unstable)**](#7-delete-did-secret-unstable)
  * [7.1. Path Parameters](#71-path-parameters)
  * [7.2. Request Headers](#72-request-headers)
  * [7.3. Responses](#73-responses)
* [8. Become SysAdmin](#8-become-sysadmin-)
  * [8.1. Request Headers](#81-request-headers)
  * [8.2. Responses](#82-responses)
* [9. Make SysAdmin](#9-make-sysadmin-)
  * [9.1. Path Parameters](#91-path-parameters)
  * [9.2. Request Headers](#92-request-headers)
  * [9.3. Responses](#93-responses)
* [10. Delete Admin](#10-delete-admin-)
  * [10.1. Path Parameters](#101-path-parameters)
  * [10.2. Request Headers](#102-request-headers)
  * [10.3. Responses](#103-responses)
* [11. Associate APIKey](#11-associate-apikey)
  * [11.1. Path Parameters](#111-path-parameters)
* [**Annex 1. Contributors**](#annex-1-contributors)
<!-- TOC -->



# **Abstract**

<p style='text-align: justify;'>

This RFC provides information about SSO Secrets management. All API calls should be authorised with a Bearer token (OAuth) to extract a “user-id” value on the server side. By default, this “user-id” is the email found in the token or the “sub” in the JWT token.

</p>

# **Secrets Categories**

<p style='text-align: justify;'>

The "secrets" component within APIHub is designed to store application secrets, which can be any type of secret. 
	For example, this set of APIs documented in this RFC  could be used to custom-implement API keys by a solution using APIHub, which allows for the rapid creation of authorisation mechanisms. Additionally, after the authentication flow ends, in the context of using digital wallets, a secret is required to access the wallet once the authentication flow concludes. This secrets component is made accessible through APIs that enable controlled access to these secrets. Various types of secrets are available, as can be seen in the following table.

</p>

| Secret Type     | Description    |
|:----------------|:--------|
| Server Secret   | These secrets will never leave the server. The APIs do not expose them.  |
| SSO Secrets <br> (App Secrets)  | The secret is linked to the user identifier established by the server in the tokens. Within the middleware, this is conveyed through the "user-id" field in the request. Moreover, these secrets are organised based on an "app name," allowing the same user to have distinct secrets for each application. Currently, no access control is planned to be implemented at the application level, meaning an application can access the secrets of the current user from another application.  |
| DID Secrets  | The secret is tied to the control of a DID, with all requests being signed by the specific DID. These secrets must be encrypted using the DID public key for security reasons.   |
| Admin APIKey  | Manages APIKeys that grant administrative roles for managing other secrets. The owner of an Admin APIKey can create, update, and delete secret API keys for different users.  |
| UserID APIKey  | APIKeys are secrets linked to a specific "user-id" and “application name”, enabling personalised access control.  |

<p style='text-align: justify;'>

The table categorises secrets into different types, each serving a unique function within a secure system. Server Secrets are designed never to leave the server, ensuring their confidentiality by not being accessible through APIs. SSO Secrets, or App Secrets, are linked to a user identifier and are communicated via the "user-id" field in requests. These secrets are organised by an "app name," allowing for distinct secrets for each application without planned access control at the application level. This means one application may access another application's secrets for the same user.

</p>

<p style='text-align: justify;'>

Admin API keys play a crucial role in managing other secrets, providing administrative roles with the ability to create, update, and delete secret API keys for various users. Lastly, UserID API keys are specific secrets tied to a "user-id" and "application name," facilitating personalised access control. This arrangement underscores the system's versatility and security measures across different scenarios and user needs.

</p>


# **1. Get SSO Secret**

Access user SSO secrets for a particular appName.

    GET /secrets/getSSOSecret/{appName}

## 1.1. Path Parameters

| Name     | Type    | Value      |Description                         |
|:---------|:--------|:-----------:------------------------------------|
| appName  | string  | *required  |  The application name for which the secret is requested.  |


## 1.2. Request Headers

| Name           | Type    | Value     | Description                                            |
|:---------------|:--------|:----------|:-------------------------------------------------------|
| authorization  | string  | *request  | Bearer authorization token.  It is used to obtain the  “user-id” on the server side.    |


## 1.3. Responses

| Status Code | Description                                                   |
|:------------|:--------------------------------------------------------------|
| 200         | Returns the secret for the specified user-id and appName.     |
| 403         | Unauthorized access.                                          |
| 404         | A secret for the specified user-id and appName was not found. |
| 500         | Wrong secret format or unauthorized access.                   |


# **2. Put SSO Secret**

Enable and add user SSO secret for a particular appName.

    PUT /secrets/getSSOSecret/{appName}


## 2.1. Path Parameters

| Name     | Type    | Value      | Description                                                      |
|:---------|:--------|:-----------|:-----------------------------------------------------------------|
| appName  | string  | *required  | The application name for which the secret is enabled and added.  |


## 2.2. Body Parameters

| Name  | Type  | Value  | Description                   |
|:------|:------|:-------|:------------------------------|
| body  |       |        | Secret that should be stored  |


## 2.3. Request Headers or JWT OAuth Cookie

| Name           | Type    | Value      | Description                                            |
|:---------------|:--------|:-----------|:-------------------------------------------------------|
| authorization  | string  | *required  | Bearer authorization token.                            |


## 2.4. Responses

| Status Code | Description                                                   |
|:------------|:--------------------------------------------------------------|
| 200         | Operation completed successfully.                             |
| 403         | Unauthorized access.                                          |
| 404         | A secret for the specified user-id and appName was not found. |
| 500         | Wrong secret format or unauthorized access.                   |


# **3. Deactivate SSO Secret**

Deactivate the user SSO secret for a particular appName.

    DELETE /deactivateSSOSecret/{appName}/{did} 


## 3.1. Path Parameters

| Name    | Type    | Value      | Description                                               |
|:--------|:--------|:-----------|:----------------------------------------------------------|
| appName | string  | *required  | The application name for which the secret is deactivated. |


## 3.2. Request Headers

| Name           | Type    | Value      | Description                  |
|:---------------|:--------|:-----------|:-----------------------------|
| authorization  | string  | *required  | Bearer authorization token.  |


## 3.3. Responses

| Status Code | Description                                                    |
|:------------|:---------------------------------------------------------------|
| 200         | Operation completed successfully.                              |
| 403         | Unauthorized access.                                           |
| 404         | A secret for the specified “did” and “appName” was not found.  |


# **4. Remove SSO Secret**

Deactivate and remove the user SSO secret for a particular appName.

    DELETE /removeSSOSecret/{appName}/{did}   


## 4.1. Path Parameters

| Name    | Type    | Value      | Description                                                           |
|:--------|:--------|:-----------|:----------------------------------------------------------------------|
| appName | string  | *required  | The application name for which the secret is deactivated and removed. |


## 4.2. Request Headers

| Name           | Type    | Value      | Description                  |
|:---------------|:--------|:-----------|:-----------------------------|
| authorization  | string  | *required  | Bearer authorization token.  |


## 4.3. Responses

| Status Code | Description                                                    |
|:------------|:---------------------------------------------------------------|
| 200         | Operation completed successfully.                              |
| 403         | Unauthorized access.                                           |
| 404         | A secret for the specified “did” and “appName” was not found.  |


# **5. Put DID Secret**

Write a secret with the provided name associated with the provided did.

    PUT /putDIDSecret/{did}/{name}   


## 5.1. Path Parameters

| Name  | Type    | Value      | Description                                               |
|:------|:--------|:-----------|:----------------------------------------------------------|
| did   | string  | *required  | The DID of the user encoded in base 58.                   |
| name  | string  | *required  | The name of the secret associated with the specified did. |


## 5.2. Request Headers

| Name           | Type    | Value      | Description                  |
|:---------------|:--------|:-----------|:-----------------------------|
| authorization  | string  | *required  | Bearer authorization token.  |

# Warning: This API is unsafe if the secret is not encrypted with the DID

## 5.3. Responses

| Status Code | Description                                                               |
|:------------|:--------------------------------------------------------------------------|
| 200         | Operation completed successfully.                                         |
| 403         | Unauthorized access.                                                      |
| 404         | A secret with the specified “name” for the specified “did” was not found. |
| 555         | Server is in read-only mode.                                              |


# **6. Get DID Secret**

Get the secret with the provided name for the provided did

    GET /getDIDSecret/{did}/{name}   


## 6.1. Path Parameters

| Name  | Type    | Value      | Description                                               |
|:------|:--------|:-----------|:----------------------------------------------------------|
| did   | string  | *required  | The DID of the user encoded in base 58.                   |
| name  | string  | *required  | The name of the secret associated with the specified did. |


## 6.2. Request Headers

| Name           | Type    | Value      | Description                  |
|:---------------|:--------|:-----------|:-----------------------------|
| authorization  | string  | *required  | Bearer authorization token.  |


## 6.3. Responses

| Status Code | Description                                                               |
|:------------|:--------------------------------------------------------------------------|
| 200         | Operation completed successfully.                                         |
| 403         | Unauthorized access.                                                      |
| 404         | A secret with the specified “name” for the specified “did” was not found. |
| 555         | Server is in read-only mode.                                              |


# **7. Delete DID Secret (unstable)**

Delete the secret with the provided name associated with the provided DID.

    GET /deleteDIDSecret/{did}/{name}   


## 7.1. Path Parameters

| Name  | Type    | Value      | Description                                               |
|:------|:--------|:-----------|:----------------------------------------------------------|
| did   | string  | *required  | The DID of the user encoded in base 58.                   |
| name  | string  | *required  | The name of the secret associated with the specified did  |


## 7.2. Request Headers

| Name           | Type    | Value      | Description                  |
|:---------------|:--------|:-----------|:-----------------------------|
| authorization  | string  | *required  | Bearer authorization token.  |


## 7.3. Responses

| Status Code | Description                                                               |
|:------------|:--------------------------------------------------------------------------|
| 200         | Operation completed successfully.                                         |
| 403         | Unauthorized access.                                                      |
| 404         | A secret with the specified “name” for the specified “did” was not found. |
| 555         | Server is in read-only mode.                                              |


# 8. Become SysAdmin 

<p style='text-align: justify;'>

Add an Admin API Key associated with the current user (user-id). It will fail if a system administrator already exists. APIs can't read the Amin API Keys; they are server-side secrets.

</p>

This API is intended to be used only once at the initialisation of the system.

  PUT /becomeSysAdmin 

## 8.1. Request Headers

| Name           | Type    | Value      | Description                                                                                                       |
|:---------------|:--------|:-----------|:------------------------------------------------------------------------------------------------------------------|
| authorization  | string  | *required  | Bearer authorisation token that can be used to obtain the “user-id” and check if it has an associated admin key.  |

<p style='text-align: justify;'>

In the body, there is a secret that it is used as a secret that allows any user to become a system administrator. The initial call will set this secret. Usually, this secret is a “break  glass recovery key” that is also used to become an administrator in administrative wallets (like Demiurge)

</p>

## 8.2. Responses

| Status Code | Description                                                               |
|:------------|:--------------------------------------------------------------------------|
| 200         | Operation completed successfully.                                         |
| 403         | Unauthorized access.                                                      |
| 555         | Server is in read-only mode                                               |

# 9. Make SysAdmin 

<p style='text-align: justify;'>

Create a new Admin APIKey and associate it with another user. It must be authenticated and authorised using an Admin API Key. 

</p>

  PUT /becomeSysAdmin{user-id} 

## 9.1. Path Parameters

| Name      | Type    | Value      | Description                                               |
|:----------|:--------|:-----------|:----------------------------------------------------------|
| user-id   | string  | *required  | The user-id of the new administrator                   |


## 9.2. Request Headers

| Name           | Type    | Value      | Description                                                                                                       |
|:---------------|:--------|:-----------|:------------------------------------------------------------------------------------------------------------------|
| authorization  | string  | *required  | Bearer authorisation token that can be used to obtain the “user-id” and check if it has an associated admin key.  |

The request's body will contain the APIKey, which can be any string.

## 9.3. Responses

| Status Code | Description                                                               |
|:------------|:--------------------------------------------------------------------------|
| 200         | Operation completed successfully.                                         |
| 403         | Unauthorized access.                                                      |
| 555         | Server is in read-only mode                                               |

# 10. Delete Admin 


Delete an Admin APIKey.  It requires authentication using an Admin APIKey. 
Create a new Admin APIKey and associate it with another user. It must be authenticated and authorised using an Admin API Key. 

  PUT /deleteAdmin/{user-id} 


## 10.1. Path Parameters

| Name      | Type    | Value      | Description                                               |
|:----------|:--------|:-----------|:----------------------------------------------------------|
| user-id   | string  | *required  | The user-id of the admin that is “Demoted”                |


## 10.2. Request Headers

| Name           | Type    | Value      | Description                                                                                                       |
|:---------------|:--------|:-----------|:------------------------------------------------------------------------------------------------------------------|
| authorization  | string  | *required  | Bearer authorisation token that can be used to obtain the “user-id” and check if it has an associated admin key.  |

The request's body will contain the APIKey, which can be any string.


## 10.3. Responses

| Status Code | Description                                                               |
|:------------|:--------------------------------------------------------------------------|
| 200         | Operation completed successfully.                                         |
| 403         | Unauthorized access.                                                      |
| 555         | Server is in read-only mode                                               |

# 11. Associate APIKey

<p style='text-align: justify;'>

Create or update an APIKey for a specific application, use the key name and associate it with a user (user-id).  It requires being called with an Admin APIKey. Write a secret with the provided name associated with the provided name.

</p>

  PUT /associateAPIKey}/{appName}/{name}  
 


## 11.1. Path Parameters

| Name      | Type    | Value      | Description                                                |
|:----------|:--------|:-----------|:-----------------------------------------------------------|
| appName   | string  | *required  | The application name. It can also be used as a role.       |
| name      | string  | *required  | The name of the API Key secret associated with a “user-id” |
| user-id   | string  | *required  | The the "user-id”                                          |


11.2. Request Headers
Name
Type
Value
Description
adminKey
string
*required
Bearer authorisation token that can be used to obtain the “user-id” and check if it has an associated admin key.


The request's BODY will contain the APIKey, which can be any string but usually also contains the list of roles (e.g. read or write).
11.3. Responses
Status Code
Description
200
Operation completed successfully.
403
Unauthorized access.
555
Server is in read-only mode







12. Delete APIKey
Delete an API key for a specific application and user (user-id). It must be called with an Admin API Key. 



/deleteAPIKey}/{appName}/{api-name}   


11.1. Path Parameters
Name
Type
Value
Description
appName
string
*required
The application name. It can also be used as a role.
api-name
string
*required
The name of the API Key secret associated with a “user-id”

11.2. Request Headers
Name
Type
Value
Description
adminKey
string
*required
Bearer authorisation token that can be used to obtain the “user-id” and check if it has an associated admin key.


11.3. Responses
Status Code
Description
200
Operation completed successfully.
403
Unauthorized access.
555
Server is in read-only mode







13. Get APIKey
The GetAPIKey operation retrieves the API key associated with an application and the current user (user-id). It needs to be called by a user authenticated as the current user. The obtained API Key can then be used to authorise API requests. Typically, authorisation is handled automatically by specialised middleware, and clients are not required to supply the APIKey, as it is linked to the “user-id” by an administrator. Custom-created authorisation middleware for each API will verify an API Key associated with the current user for all pertinent operations. However, an “authorisation header” is also supported for cases where automation must be implemented to allow users with an API key to make requests in a user's name. 


/deleteAPIKey}/{appName}/{api-name}   


11.1. Path Parameters
Name
Type
Value
Description
appName
string
*required
The application name. It can also be used as a role.
api-name
string
*required
The name of the API Key secret associated with a “user-id”

11.2. Request Headers
Name
Type
Value
Description
authorisation
string
*required
Bearer authorisation token that can be used to obtain the “user-id” and check if it has an associated admin key.


The request's body will contain the APIKey, which can be any string (depending on the application authorisation methods).
11.3. Responses
Status Code
Description
200
Operation completed successfully.
403
Unauthorized access.
555
Server is in read-only mode







**Contributors**

1. <p style='text-align: justify;'><a href="https://www.axiologic.net/">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="https://www.opendsu.org/">www.opendsu.org</a> site.

2. <p style='text-align: justify;'><a href="https://pharmaledger.org/">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.

3. PrivateSky Research Project: MIT licensed content accordingly with the contracts. 
<a href="https://profs.info.uaic.ro/~ads/PrivateSky/"> https://profs.info.uaic.ro/~ads/PrivateSky/</a>



# **Annex 1. Contributors**


| **Current Editors**                 | **Email**                                |
|:------------------------------------|:-----------------------------------------|
| Sînică Alboaie                      | sinica.alboaie@axiologic.net             |
| **Contributors Axiologic Research** | **Email**                                |
| Adrian Ganga                        | adrian@axiologic.net                     |
| Andi-Gabriel Țan                    | andi@axiologic.net                       |
| Cosmin Ursache                      | cosmin@axiologic.net                     |
| Daniel Sava                         | daniel@axiologic.net                     |
| Nicoleta Mihalache                  | nicoleta@axiologic.net                   |
