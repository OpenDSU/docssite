---
title: VersionLessDSUs 
layout: home
parent: Open DSU Advanced
nav_order: 4
---

# VersionLessDSUs (RFC-019)
{: .no_toc }

{: .Accepted }
The proposal has been accepted and has an implementation.


**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.
This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)


# 1. Specifications

<p style='text-align: justify;'>With the creation of <b>VersionLessDSUs</b>, we desired to create an optimised mechanism for storing edge wallets (e.g. mobile applications). In some cases, keeping all those versions and even having to do calls towards anchoring and bricking can be cumbersome or requires having an APIHub server embedded in the client application. The alternative is to have just a simple persistence to read or store the state of the DSU.
</p>
<img alt="" align="center" src="" class="imgMain"/>

<p style="text-align:center"> <b>Figure 1: GET and PUT on /versionlessdsu/:anchorId: </b></p>

## 1.1. Persistence

APIHUb contains the “versionlessdsu” middleware that offers GET and PUT operations.

### 1.1.1 Return VersionLessDSU content

Will blindly return the content associated with the specified file path.

| **GET** | **/versionlessdsu/{filePath}** |
|:--------|:-------------------------------|


| **GET** | **/versionlessdsu/{filePath}** |
|:--------|:-------------------------------|
|         |                                |


**Path Parameters**


| **Name**        | **Type** | **Value**   | **Description**                                                                                                              |
|:----------------|:---------|:------------|:-----------------------------------------------------------------------------------------------------------------------------|
| filePath        | string   | *required   | The file path at which the VersionLessDSU content will be retrieved                                                          |

**Responses**

| **Status Code**  | **Description**                                 |
|:-----------------|:------------------------------------------------|
| 200              | Successfully retried the VersionLessDSU content |
| 400              | File path not provided.                         |
| 500              | Fallback generic error response.                |

### 1.1.2 Overwrite VersionLessDSU content

Will blindly overwrite the content associated with the specified file path.

| **PUT**  | **/versionlessdsu/{filePath}**  |
|:---------|:--------------------------------|

**Path Parameters**

| **Name**        | **Type** | **Value**   | **Description**                                                        |
|:----------------|:---------|:------------|:-----------------------------------------------------------------------|
| filePath        | string   | *required   | The file path at which the VersionLessDSU content will be overwritten. |

**Body Parameters**

| **Name** | **Description**                                    |
|:---------|:---------------------------------------------------|
| body     | Buffer representing the new VersionLessDSU content |


**Responses**


| **Status Code**  | **Description**                                     |
|:-----------------|:----------------------------------------------------|
| 200              | Successfully overwritten the VersionLessDSU content |
| 400              | File path not provided or content not present       |
| 500              | Fallback generic error response.                    |

### 1.1.3 Security

<p style='text-align: justify;'>Security of the versionless DSUs is ensured by the cryptographic properties of the VersionLessSSI (if it is marked as encrypted). However, this endpoint can fill the disk content and should be disabled by default. This is not an issue on mobile apps or demo installations. This simple behavior is intended to make it easier to implement innovative code on mobile devices.
</p>
## 1.2. Resolver and VersionLessWalletEnclave

### 1.2.1 Resolver

The OpenDSU “resolver” API space provides methods for interacting with VersionLessDSUs.

### Function createVersionlessDSU(filePath, encryptionKey, domain, callback)

**Description**: This function allows the developer to create a new VersionLessDSU object using minimum configuration. The DSU instance is returned in the callback.


| **Name**         | **Type**  | **Value**  | **Description**                                                |
|:-----------------|:----------|:-----------|:---------------------------------------------------------------|
| filePath         | string    | *required  |                                                                |
| encryptionKey    | string    |            |                                                                |
| domain           | string    |            |                                                                |
| callback         | function  | *required  |                                                                |


**Callback parameters**

| **Status Code**  | **Description**                                                                                   |     |
|:-----------------|:--------------------------------------------------------------------------------------------------|:----|
| err              | ErrorWrapper object                                                                               |     |
| dsu              | [VersionLessDSU instance](https://www.opendsu.org/pages/beginners/DSU%20Object%20(RFC-063).html)  |     |













































| Name          | Type   | Value      | Description                                                                                                                   |
|:--------------|:-------|:-----------|:------------------------------------------------------------------------------------------------------------------------------|
| filePath      | string | *required  | The file path at which the VersionLessDSU will be saved                                                                       |
| encryptionKey | string |            | The encryption key used for encrypting/decrypting the VersionLessDSU content. If provided, it must have exactly 32 characters |
| domain        | string |            | $ORIGIN value for local VersionLessSSIs or the endpoint for remote VersionLessSSIs                                            |
| callback      | string | *required  |                                                                                                                               |

