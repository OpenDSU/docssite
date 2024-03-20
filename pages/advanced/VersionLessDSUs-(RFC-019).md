---
title: VersionLessDSUs 
layout: home
parent: OpenDSU Advanced
nav_order: 4
---

# **VersionLessDSUs (RFC-019)**

{: .no_toc }

{: .accepted }
The proposal has been accepted and has an implementation.


**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.
This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)

<!-- TOC -->
* [VersionLessDSUs (RFC-019)](#versionlessdsus-rfc-019)
* [1. Specifications](#1-specifications)
  * [1.1. Persistence](#11-persistence)
    * [1.1.1 Return VersionLessDSU content](#111-return-versionlessdsu-content)
  * [Path Parameters](#path-parameters)
  * [Responses](#responses)
    * [1.1.2 Overwrite VersionLessDSU content](#112-overwrite-versionlessdsu-content)
  * [Path Parameters](#path-parameters-1)
  * [Body Parameters](#body-parameters)
  * [Responses](#responses-1)
    * [1.1.3 Security](#113-security)
  * [1.2. Resolver and VersionLessWalletEnclave](#12-resolver-and-versionlesswalletenclave)
    * [1.2.1 Resolver](#121-resolver)
    * [Function createVersionlessDSU(filePath, encryptionKey, domain, callback)](#function-createversionlessdsufilepath-encryptionkey-domain-callback)
    * [1.2.2 VersionLessWalletEnclave](#122-versionlesswalletenclave)
  * [Function enclaveAPI.initialiseVersionlessDSUEnclave(versionlessSSI)](#function-enclaveapiinitialiseversionlessdsuenclaveversionlessssi)
  * [1.3. VersionLessDSU Serialisation](#13-versionlessdsu-serialisation)
    * [1.3.1 Folders](#131-folders)
    * [1.3.2 Files](#132-files)
    * [1.3.3 Mounts](#133-mounts)
  * [1.4. VersionLessDSU Behavior](#14-versionlessdsu-behavior)
  * [1.5. VersionLessSSI](#15-versionlessssi)
    * [1.5.1. VersionLessSSI description with examples](#151-versionlessssi-description-with-examples)
    * [1.5.2. Specific parameters for VersionLessSSI subtypes](#152-specific-parameters-for-versionlessssi-subtypes)
    * [1.5.3. VersionLessSSI family specific functions](#153-versionlessssi-family-specific-functions)
  * [Function versionLessSSI.initialize(dlDomain, filePath, encryptionKey, vn, hint)](#function-versionlessssiinitializedldomain-filepath-encryptionkey-vn-hint)
  * [Function versionLessSSI.getFilePath()](#function-versionlessssigetfilepath)
  * [Function versionLessSSI.getEncryption()](#function-versionlessssigetencryption)
  * [Function versionLessSSI.isEncrypted()](#function-versionlessssiisencrypted)
  * [Function versionLessSSI.encrypt(data, callback)](#function-versionlessssiencryptdata-callback)
  * [Function versionLessSSI.decrypt(data, callback)](#function-versionlessssidecryptdata-callback)
    * [1.5.4. OpenDSU “keyssi” API space](#154-opendsu-keyssi-api-space)
  * [Function createVersionlessSSI(domain, filePath, encryptionKey, vn, hint)](#function-createversionlessssidomain-filepath-encryptionkey-vn-hint)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->

# **1. Specifications**

<p style='text-align: justify;'>With the creation of <b>VersionLessDSUs</b>, we desired to create an optimised mechanism for storing edge wallets (e.g. mobile applications). In some cases, keeping all those versions and even having to do calls towards anchoring and bricking can be cumbersome or requires having an APIHub server embedded in the client application. The alternative is to have just a simple persistence to read or store the state of the DSU.
</p>
<img alt="" align="center" src="" class="imgMain"/>

<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vT8HF35FYQLodVYan16WdKhkczQ533oxylNIcek34-kbfnFlQFoYaufuEr_hx6-CV_wNFZFmOL78LHP/pub?w=960&h=720" class="imgMain" style="max-width: 69%; margin-left: 0px; margin-bottom: -150px; margin-top: -70px;"/>
    <p><b>Figure 1: GET and PUT on /versionlessdsu/:anchorId:</b></p>
</div>

## 1.1. Persistence

APIHUb contains the “versionlessdsu” middleware that offers GET and PUT operations.

### 1.1.1 Return VersionLessDSU content

Will blindly return the content associated with the specified file path.

````
GET /versionlessdsu/{filePath} 
````

## Path Parameters


| Name        | Type   | Value     | Description                                                                                                              |
|:------------|:-------|:----------|:-------------------------------------------------------------------------------------------------------------------------|
| filePath    | string | *required | The file path at which the VersionLessDSU content will be retrieved                                                      |

## Responses

| Status Code  | Description                                     |
|:-------------|:------------------------------------------------|
| 200          | Successfully retried the VersionLessDSU content |
| 400          | File path not provided.                         |
| 500          | Fallback generic error response.                |

### 1.1.2 Overwrite VersionLessDSU content

Will blindly overwrite the content associated with the specified file path.

````
PUT /versionlessdsu/{filePath}
````

## Path Parameters

| Name        | Type   | Value     | Description                                                            |
|:------------|:-------|:----------|:-----------------------------------------------------------------------|
| filePath    | string | *required | The file path at which the VersionLessDSU content will be overwritten. |

## Body Parameters

| Name | Description                                        |
|:-----|:---------------------------------------------------|
| body | Buffer representing the new VersionLessDSU content |


## Responses


| Status Code  | Description                                         |
|:-------------|:----------------------------------------------------|
| 200          | Successfully overwritten the VersionLessDSU content |
| 400          | File path not provided or content not present       |
| 500          | Fallback generic error response.                    |

### 1.1.3 Security

<p style='text-align: justify;'>Security of the versionless DSUs is ensured by the cryptographic properties of the VersionLessSSI (if it is marked as encrypted). However, this endpoint can fill the disk content and should be disabled by default. This is not an issue on mobile apps or demo installations. This simple behavior is intended to make it easier to implement innovative code on mobile devices.
</p>

## 1.2. Resolver and VersionLessWalletEnclave

### 1.2.1 Resolver

The OpenDSU “resolver” API space provides methods for interacting with VersionLessDSUs.

### Function createVersionlessDSU(filePath, encryptionKey, domain, callback)

**Description:** This function allows the developer to create a new VersionLessDSU object using minimum configuration. The DSU instance is returned in the callback.


| Name          | Type     | Value     | Description                                                                                                                   |
|:--------------|:---------|:----------|:------------------------------------------------------------------------------------------------------------------------------|
| filePath      | string   | *required | The file path at which the VersionLessDSU will be saved                                                                       |
| encryptionKey | string   |           | The encryption key used for encrypting/decrypting the VersionLessDSU content. If provided, it must have exactly 32 characters |
| domain        | string   |           | $ORIGIN value for local VersionLessSSIs or the endpoint for remote VersionLessSSIs                                            |
| callback      | function | *required |                                                                                                                               |


**Callback parameters**

| Name | Type                           | Response example  |                                                                  
|:-----|:-------------------------------|:------------------|
| err  | ErrorWrapper object            |                   |                                                                  
| dsu  | [VersionLessDSU instance](https://www.opendsu.org/pages/beginners/DSU-Object-(RFC-063).html) |                   |

**Description:** Contains a message and the error. / Reference to the VersionLessDSU that was just created.

### 1.2.2 VersionLessWalletEnclave

<p style='text-align: justify;'>

WalletEnclaves that use VersionLessDSUs exist as VersionLessWalletEnclave enclaves. The OpenDSU “enclave” API space provides an easier method for creating a VersionLessDSU enclave:
</p>

## Function enclaveAPI.initialiseVersionlessDSUEnclave(versionlessSSI)

**Description:** Creates and initializes a VersionLessDSU enclave. If the versionlessSSI parameter is not provided, the VersionLessSSI will be first searched in the environment. If it is not found there, it will create a new VersionLessSSI (unencrypted and having “/” as filePath) and store it inside the environment.

| Name            | Type            | Value  | Description                                                    |
|:----------------|:----------------|:-------|:---------------------------------------------------------------|
| versionlessSSI  | VersionLessSSI  |        | Optional VersionLessSSI that will be used for VersionLessDSU.  |


**Returns** 

| Name                   | Description                               |
|:-----------------------|:------------------------------------------|
| VersionLessDSUEnclave  | The newly created VersionLessDSU Enclave  |


<p style='text-align: justify;'>

The generic approach of creating an Enclave is also supported for creating VersionLessDSU Enclaves:</p>

<span style="background-color: #EEEEEE">const ENCLAVE_TYPE = openDSU.constants.ENCLAVE_TYPES.VERSIONLESS_DSU_ENCLAVE;
const versionlessDSUEnclave = enclaveAPI.createEnclave(ENCLAVE_TYPE);</span>

## 1.3. VersionLessDSU Serialisation

JSON with three sections:
* “folders” sections
* “files” sections
* “mounts” sections

### 1.3.1 Folders

<p style='text-align: justify;'>The “folders” section is structured as an Object in which the keys represent the folder path and each value represents metadata information for each individual folder. The metadata follows the POSIX standard by having three timestamps:
</p>

* **atime:** timestamp of when the folder was last accessed (direct folder access; doesn’t change if the parent of child folder is accessed);
* **mtime:** timestamp of when the folder was last modified (changes when the folder is created or renamed or a new file is created inside the folder);
* **ctime:** timestamp of the last change to the folder’s metadata information (changes anytime **atime** or **mtime** changes).

The POSIX timestamps can be accessed using the **VersionLessDSU.stat** method, which was extended to also include them and not only the “directory” type property.

### 1.3.2 Files

<p style='text-align: justify;'>

The “files” section is structured as an Object in which the keys represent the file path and each value contains the file content as well as metadata information. Each of the “files” object value represents in turn another object with the following properties:
</p>

* **content:** The file content is stored inside this property, encoded to base64 in order for it to be JSON compatible;
* **atime:** timestamp of when the file was last accessed (direct file access with the read operation);
* **mtime:** timestamp of when the file was last modified (changes when the file is created, renamed or appended);
* **ctime:** timestamp of the last change to the file’s metadata information (changes anytime **atime** or **mtime** changes).

The POSIX timestamps can be accessed using the **VersionLessDSU.stat** method, which was extended to also include them and not only the “file” type property.

### 1.3.3 Mounts

<p style='text-align: justify;'>

The “mounts” section is structured as an Object in which the keys represent the path at which the mounted DSU is mounted and each value represents an Object currently containing the mounted DSU identifier.
</p>

## 1.4. VersionLessDSU Behavior

<p style='text-align: justify;'>

VersionLessDSUs offers all the APIs expected from DSUs except the APIs related to versioning. The content is encrypted using the corresponding keys that would be used for encrypting the BrickMaps. The batch methods will optimize the number of writes.
</p>

## 1.5. VersionLessSSI

<p style='text-align: justify;'>

VersionLessSSI is used for handling VersionLessDSU operations (read and update) by storing the DSU configurations. The owners of the VersionLessSSI can choose to ensure a higher level of security by encrypting the VersionLessDSU actual content.
</p>

### 1.5.1. VersionLessSSI description with examples

| Type | Purpose and description                                                                                                                                                                                                                                                                                                                                                   |
|:-----|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| vs   | Owning a VersionLessSSI provides provides full access to the VersionLessDSU content (encrypted or unencrypted, based on the presence or absence of the control string), content which is identified by the specified filePath <br> <br> Example: <br> _ssi:vs:$ORIGIN:/path-encrypted:DbzoUGRyZuJJMVyrm2Yt216DxuJJwNsP:v0_ <br> _ssi:vs:$ORIGIN:/path-non-encrypted::v0_  |


### 1.5.2. Specific parameters for VersionLessSSI subtypes

| Type | Domain                                                                          | Type Specific Identifier | Control String                                                           |
|:-----|:--------------------------------------------------------------------------------|:-------------------------|:-------------------------------------------------------------------------|
| vs   | $ORIGIN value for local VersionLessSSIs or endpoint for remote VersionLessSSIs  | filePath                 | Encryption key (for encrypted content) or empty for unencrypted content  |


### 1.5.3. VersionLessSSI family specific functions

(Common functions for all KeySSIs are available <a href="https://www.opendsu.org/pages/concepts/KeySSI-(RFC-002).html">here</a>)

## Function versionLessSSI.initialize(dlDomain, filePath, encryptionKey, vn, hint)

**Description:** Initialize a VersionLessSSI with your own parameters.

| Name                          | Type           | Value     | Description                                                                                                                                                                                                                                                                     |
|:------------------------------|:---------------|:----------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| dDomain                       | string         | *required | $ORIGIN value for local VersionLessSSIs or the endpoint for remote VersionLessSSIs                                                                                                                                                                                              |
| filePath                      | string         | *required | The file path at which the VersionLessDSU will be saved                                                                                                                                                                                                                         |
| encryptionKey <br> (optional) | string         |           | The encryption key used for encrypting/decrypting the VersionLessDSU content. Both operations are using the encrypt and respectively the decrypt methods from OpenDSU ‘s “crypto” API space. If the encryption key is missing then VersionLessDSU content will not be encrypted |
| vn <br>  (optional)           | string         |           | The version number of the SeedSSI you want to use. <br> Default value: “v0”.                                                                                                                                                                                                    |
| hint <br> (optional)          | string         |           | Optional information for the keySSI resolver. <br> Default value: undefined.                                                                                                                                                                                                    |


## Function versionLessSSI.getFilePath()

**Description:** Get the file path associated with the VersionLessDSU, the path at which the VersionLessDSU content will be read/persisted.

**Returns** 

| Name    | Description                                       |
|:--------|:--------------------------------------------------|
| String  | The file path associated with the VersionLessSSI  |


## Function versionLessSSI.getEncryption()

**Description:** Get the encryption key associated with the VersionLessDSU.

**Returns** 

| Name    | Description                                       |
|:--------|:--------------------------------------------------|
| String  | The file path associated with the VersionLessSSI  |


## Function versionLessSSI.isEncrypted()

**Description:** Checks if the content associated with the VersionLessSSI is encrypted

**Returns** 

| Name     | Description                                                                     |
|:---------|:--------------------------------------------------------------------------------|
| boolean  | Flag which specifies if the content is encrypted (true) or unencrypted (false)  |


## Function versionLessSSI.encrypt(data, callback)

**Description:** Encrypts the given data using the encryption key associated with the VersionLessSSI. If the content is not configured to be encrypted, then the given data will be returned as-is.

| Name      | Type            | Value      | Description                                                        |
|:----------|:----------------|:-----------|:-------------------------------------------------------------------|
| data      | String / Buffer | *required  | The information that will be encrypted                             |
| callback  | function        |            | The function that will be called with the result of the operation  |


**Callback parameters**

| Name           | Type         | Response example  |
|:---------------|:-------------|:------------------|
| err            | Error object |                   |
| encryptedData  | Buffer       |                   |


**Description:** Contains the encrypted data (or the given data if associated VersionLessSSI is not marked as encrypted) and the error.

## Function versionLessSSI.decrypt(data, callback)

**Description:** Decrypt the given data using the encryption key associated with the VersionLessSSI. If the content is not configured to be encrypted, then the given data will be returned as-is.

| Name      | Type            | Value      | Description                                                        |
|:----------|:----------------|:-----------|:-------------------------------------------------------------------|
| data      | String / Buffer | *required  | The information that will be decrypted                             |
| callback  | function        |            | The function that will be called with the result of the operation  |


**Callback parameters**


| Name           | Type         | Response example  |
|:---------------|:-------------|:------------------|
| err            | Error object |                   |
| encryptedData  | Buffer       |                   |


**Description:** Contains the decrypted data (or the given data if associated VersionLessSSI is not marked as encrypted) and the error.

### 1.5.4. OpenDSU “keyssi” API space

VersionLessSSIs can be easily created using specific method inside the OpenDSU “keyssi” API space.

## Function createVersionlessSSI(domain, filePath, encryptionKey, vn, hint)

**Description:** Creates a VersionLessSSI configured based on the provided parameters

| Name                          | Type             | Value      | Description                                                                                                                                                      |
|:------------------------------|:-----------------|:-----------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| domain                        | string           | *required  | $ORIGIN value for local VersionLessSSIs or the endpoint for remote VersionLessSSIs                                                                               |
| filePath                      | string           | *required  | The file path at which the VersionLessDSU will be saved                                                                                                          |
| encriptionKey <br> (optional) | string           |            | The encryption key used for encrypting/decrypting the VersionLessDSU content. If the encryption key is missing then VersionLessDSU content will not be encrypted |
| vn <br> (optional)            | string           |            | The version number of the SeedSSI you want to use. <br> Default value: “v0”.                                                                                     |
| hint <br> (optional)          | string           |            | Optional information for the keySSI resolver. <br> Default value: undefined.                                                                                     |


**Returns** 

| Name            | Description                                                        |
|:----------------|:-------------------------------------------------------------------|
| VersionLessSSI  | The newly created VersionLessSSI based on the provided parameters  |

**Contributors**

1. <p style='text-align: justify;'><a href="https://www.axiologic.net/">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="https://www.opendsu.org/">www.opendsu.org</a> site.

2. PrivateSky Research Project: MIT licensed content accordingly with the contracts. 
<a href="https://profs.info.uaic.ro/~ads/PrivateSky/"> https://profs.info.uaic.ro/~ads/PrivateSky/</a>


# **Annex 1. Contributors**


| **Current Editors**                 | **Email**                               |
|:------------------------------------|:----------------------------------------|
| Sînică Alboaie                      | sinica.alboaie@axiologic.net            |
| Daniel Visoiu                       | visoiu.daniel.g@gmail.com               |
| Teodor Lupu                         | teodor@axiologic.net                    |
| **Contributors Axiologic Research** | **Email**                               |
| Andi-Gabriel Țan                    | andi@axiologic.net                      |
| Teodor Lupu                         | teodor@axiologic.net                    |


