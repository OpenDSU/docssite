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
* [SSO Secrets (RFC-134)](#sso-secrets-rfc-134)
* [Abstract](#abstract)
* [1. Get SSO Secret](#1-get-sso-secret)
  * [1.1. Path Parameters](#11-path-parameters)
  * [1.2. Request Headers](#12-request-headers)
  * [1.3. Responses](#13-responses)
* [2. Put SSO Secret](#2-put-sso-secret)
  * [2.1. Path Parameters](#21-path-parameters)
  * [2.2. Body Parameters](#22-body-parameters)
  * [2.3. Request Headers](#23-request-headers)
  * [2.4. Responses](#24-responses)
* [3. Deactivate SSO Secret](#3-deactivate-sso-secret)
  * [3.1. Path Parameters](#31-path-parameters)
  * [3.2. Request Headers](#32-request-headers)
  * [3.3. Responses](#33-responses)
* [4. Remove SSO Secret](#4-remove-sso-secret)
  * [4.1. Path Parameters](#41-path-parameters)
  * [4.2. Request Headers](#42-request-headers)
  * [4.3. Responses](#43-responses)
* [5. Put DID Secret](#5-put-did-secret)
  * [5.1. Path Parameters](#51-path-parameters)
  * [5.2. Request Headers](#52-request-headers)
  * [5.3. Responses](#53-responses)
* [6. Get DID Secret](#6-get-did-secret)
  * [6.1. Path Parameters](#61-path-parameters)
  * [6.2. Request Headers](#62-request-headers)
  * [6.3. Responses](#63-responses)
* [7. Delete DID Secret](#7-delete-did-secret)
  * [7.1. Path Parameters](#71-path-parameters)
  * [7.2. Request Headers](#72-request-headers)
  * [7.3. Responses](#73-responses)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->



# **Abstract**

<p style='text-align: justify;'>

This RFC provides information about SSO Secrets management. All API calls should be authorized with a Bearer token.
</p>

# **1. Get SSO Secret**

Access user SSO secrets for a particular appName.

    GET /secrets/getSSOSecret/{appName}

## 1.1. Path Parameters

| Name     | Type    | Value      | Description                                              |
|:---------|:--------|:-----------|:---------------------------------------------------------|
| appName  | string  | *required  | The application name for which the secret is requested.  |


## 1.2. Request Headers

| Name           | Type    | Value     | Description                                            |
|:---------------|:--------|:----------|:-------------------------------------------------------|
| user-id        | string  | *request  | The user id of the user that is asking for the secret. |
| authorization  | string  | *request  | Bearer authorization token.                            |


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


## 2.3. Request Headers

| Name           | Type    | Value      | Description                                            |
|:---------------|:--------|:-----------|:-------------------------------------------------------|
| user-id        | string  | *required  | The user id of the user that is asking for the secret. |
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
| did     | string  | *required  | The DID of the user encoded in base 58.                   |


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
| did     | string  | *required  | The DID of the user encoded in base 58.                               |


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


# **7. Delete DID Secret**

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


**Contributors**

1. <p style='text-align: justify;'><a href="https://www.axiologic.net/">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="https://www.opendsu.org/">www.opendsu.org</a> site.

2. <p style='text-align: justify;'><a href="https://pharmaledger.org/">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.

3. PrivateSky Research Project: MIT licensed content accordingly with the contracts. 
<a href="https://profs.info.uaic.ro/~ads/PrivateSky/"> https://profs.info.uaic.ro/~ads/PrivateSky/</a>



# **Annex 1. Contributors**


| **Current Editors**                 | **Email**                                |
|:------------------------------------|:-----------------------------------------|
| Sînică Alboaie                      | sinica.alboaie@axiologic.net             |
| Rafael Mastaleru                    | rafael@rms.ro                            |
| Nicoleta Mihalache                  | nicoleta@axiologic.net                   |
| **Contributors Axiologic Research** | **Email**                                |
| Adrian Ganga                        | adrian@axiologic.net                     |
| Andi-Gabriel Țan                    | andi@axiologic.net                       |
| Cosmin Ursache                      | cosmin@axiologic.net                     |
| Daniel Sava                         | daniel@axiologic.net                     |
| Nicoleta Mihalache                  | nicoleta@axiologic.net                   |
| **PharmaLedger**                    | **Email**                                |
| Ana Balan                           | bam@rms.ro (RMS)                         |
| Bogdan Mastahac                     | mab@rms.ro (RMS)                         |
| Cosmin Ursache                      | cos@rms.ro (RMS)                         |
| Rafael Mastaleru                    | raf@rms.ro (RMS)                         |

