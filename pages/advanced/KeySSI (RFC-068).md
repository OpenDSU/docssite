---
title: KeySSI 
layout: home
parent: OpenDSU Advanced
nav_order: 11
---

# **KeySSI (RFC-068)**

{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs).

**Document Maintainers: Andi Gabriel Tan 2022. List of other contributors in Annex. 1.**

**Copyright: MIT license**

**Copyright** ©  2018-2022 Axiologic Research and Contributors.

This document is licensed under <a href="https://en.wikipedia.org/wiki/MIT_License">MIT license.</a>

<!-- TOC -->
* [KeySSI (RFC-068)](#keyssi-rfc-068)
* [Abstract](#abstract)
* [1. KeySSI functions](#1-keyssi-functions)
  * [Function createArraySSI(domain, arr, vn, hint)](#function-createarrayssidomain-arr-vn-hint)
  * [Function createHashLinkSSI(domain, hash, vn, hint)](#function-createhashlinkssidomain-hash-vn-hint)
  * [Function createSeedSSI(domain, vn, hint, callback)](#function-createseedssidomain-vn-hint-callback)
  * [Function createSignedHashLinkSSI(domain, hashLink, timestamp, signature, vn, hint)](#function-createsignedhashlinkssidomain-hashlink-timestamp-signature-vn-hint)
  * [Function createTemplateSeedSSI(domain, specificString, control, vn, hint, callback)](#function-createtemplateseedssidomain-specificstring-control-vn-hint-callback)
  * [Function createTemplateKeySSI(ssiType, domain, specificString, control, vn, hint, callback)](#function-createtemplatekeyssissitype-domain-specificstring-control-vn-hint-callback)
  * [Function createTemplateSymmetricalEncryptionSSI(domain, encryptionKey, control, vn, hint, callback)](#function-createtemplatesymmetricalencryptionssidomain-encryptionkey-control-vn-hint-callback)
  * [Function createTemplateWalletSSI(domain, arrayWIthCredentials, hint)](#function-createtemplatewalletssidomain-arraywithcredentials-hint)
  * [Function parse(ssiString, options)](#function-parsessistring-options)
  * [Function createConstSSI(domain, constString, vn, hint)](#function-createconstssidomain-conststring-vn-hint)
  * [Function createToken(domain, amountOrSerialNumber, vn, hint, callback)](#function-createtokendomain-amountorserialnumber-vn-hint-callback)
  * [Function createOwnershipSSI(domain, levelAndToken, vn, hint, callback)](#function-createownershipssidomain-levelandtoken-vn-hint-callback)
  * [Function createTransferSSI(domain, hashNewPublicKey, timestamp, signatureCurrentOwner, vn, hint, callback)](#function-createtransferssidomain-hashnewpublickey-timestamp-signaturecurrentowner-vn-hint-callback)
  * [Function createTemplateTransferSSI(domain, hashNewPublicKey, vn, hint)](#function-createtemplatetransferssidomain-hashnewpublickey-vn-hint)
  * [Function createPublicKeySSI(compatibleFamilyName, publicKey, vn)](#function-createpublickeyssicompatiblefamilyname-publickey-vn)
  * [Function we_createSeedSSI(enclave, domain, vn, hint, callback)](#function-we_createseedssienclave-domain-vn-hint-callback)
  * [Function we_createConstSSI(enclave, domain, constString, vn, hint, callback)](#function-we_createconstssienclave-domain-conststring-vn-hint-callback)
  * [Function we_createArraySSI(domain, constString, vn, hint, callback)](#function-we_createarrayssidomain-conststring-vn-hint-callback)
  * [Function createAliasSSI(domain, alias, callback)](#function-createaliasssidomain-alias-callback)
  * [Function createSizeSSI(domain, totalSize, bufferSize)](#function-createsizessidomain-totalsize-buffersize)
  * [Function createPathKeySSI(domain, path, vn, hint)](#function-createpathkeyssidomain-path-vn-hint)
  * [Function we_createPathKeySSI(enclave, domain, path, vn, hint)](#function-we_createpathkeyssienclave-domain-path-vn-hint)
  * [Function createEmbedSSI(domain, data)](#function-createembedssidomain-data)
  * [Function createVersionlessSSI(domain, path, encryptionKey, vn, hint)](#function-createversionlessssidomain-path-encryptionkey-vn-hint)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->

# Abstract

<p style='text-align: justify;'>The “keySSI” API space offers a set of portable functions allowing developers to build KeySSIs. KeysSSIs are Self-Sovereign Identifiers used in the OpenDSU ecosystem. The creation of KeySSIs aims to change how people log into websites/systems and their interaction with them. SSI promotes a transition from the user and their password, through which the user has private keys with which it signs requests, to tokens or various other approaches.
</p>

<p style='text-align: justify;'>Self Sovereignty assumes that identity control belongs to the company's individual and does not belong to an intermediary. The most common type of identity on the internet is the Federated Identity. For example, whenever a user logs into Facebook, they use a Facebook-controlled identity. Facebook may censor or impersonate the user (i.e. log in on their behalf) because, in fact, it controls the user’s identity. The vision of the SSI is to give this control to the company’s people, which is achievable by using cryptographic systems and signing with private keys.
</p>

<p style='text-align: justify;'>The main objective of these identifiers is to create and access <a href="https://opendsu.com/rfc063">DSUs</a> where files are encrypted and stored in a secure way. These identifiers can be resolved to obtain all kinds of useful information, such as the encryption key necessary to decrypt the DSU later on.
</p>

<p style='text-align: justify;'>It is also possible to create different levels of access rights to DSU instances using KeySSI derivation. There are different KeySSI “families” designed for different use cases. You can learn more about it in the complete <a href="https://opendsu.com/rfc002">KeySSI introduction</a>.
</p>

# 1. KeySSI functions

````
//Load openDSU environment
require("../privatesky/psknode/bundles/openDSU");
//Load openDSU SDK
const opendsu = require("opendsu");
//Load keyssi library
const keyssispace = opendsu.loadApi("keyssi");
//Build the different keySSI instance using build function
const arraySSI = keyssispace.createArraySSI('domain',['openDsu',16],'vn','hint');
const HashLinkSSI = keyssispace.crearzHashLinkSSI( 'dom','specificStr','control','hint','vn');
const seedSSI = keyssispace.createSeedSSI('dom','specificStr','control','hint','vn');
const SymetricalEncryptionSSI =keyssispace.createTemplateSymetricalEncryptionSSI( 'dom',’encryptionKey’,'control','hint','vn');
const templateSSI = keyssispace.createTemplateKeySSI('dom','specificStr','control','hint','vn');
const walletSSI = keyssispace.createTemplateWalletSSI('dom',[cred1,cred2],'hint','vn');
//Or use parse to generate a keySSI from a string
const parsedSeedSSI= keyssispace.parse('ssi:seed:default:specificStr:control:hint:vn');
````

<p style="text-align: center;">How to use</p>


**This API is only used for building KeySSIs. KeySSI common functions are available <a href="https://opendsu.com/rfc002">here</a>. There is also a set of specific functions available for each different type of KeySSI.**

## Function createArraySSI(domain, arr, vn, hint)

<p style='text-align: justify;'>

**Description:** Build an <a href="https://opendsu.com/rfc012">ArraySSI</a> object. ArraySSIs are created using an array of strings that a user can remember, such as company and employee names. From this ArraySSI, a constSSI will be derived to get a more secure identifier using a derivation function.
</p>

| Name                  | Type            | Value      | Description                                                                               |
|:----------------------|:----------------|:-----------|:------------------------------------------------------------------------------------------|
| domain                | string          | *required  | The blockchain domain of the SSI key you want to build.                                   |
| arr <br> (optional)   | Array of string |            | An array of strings that contains information like companyId, serialNumber, or productID. |
| vn <br>  (optional)   | string          |            | Version number of the SSI Type.                                                           |
| hint <br> (optional)  | string          |            | Hint for the KeySSI resolver (optional).                                                  |


**Returns**

| Name                                                          | Description                                                                                              |
|:--------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------|
| <a href="https://opendsu.com/rfc012">ArraySSI</a> object | An arraySSI instance is created and returned. The main purpose of the ArraySSI is to derive a constSSI.  |


## Function createHashLinkSSI(domain, hash, vn, hint)

**Description:** Create a <a href="https://opendsu.com/rfc015">HashLinkSSI</a> object. The HashLinkSSI is used to reference each brick of the DSUs. This should be handled manually by OpenDSU.


| Name                  | Type    | Value      | Description                                             |
|:----------------------|:--------|:-----------|:--------------------------------------------------------|
| domain                | string  | *required  | The blockchain domain of the SSI key you want to build. |
| hash <br> (optional)  | string  |            | Hash of the brick it links to.                          |
| vn <br> (optional)    | string  |            | Version number of the SSI Type.                         |
| hint <br> (optional)  | string  |            | Hint for the KeySSI resolver.                           |


**Returns**

| Name                                                        | Description                                                                                               |
|:------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------|
| <a href="https://opendsu.com/rfc015">HashLinkSSI</a> object | A HashLinkSSI object is created and returned. HashLinkSSIs are used to reference each brick of the DSUs.  |


## Function createSeedSSI(domain, vn, hint, callback)

**Description:**  Create and initialise a <a href="https://opendsu.com/rfc010">SeedSSI</a> key. A SeedSSI is used to create and access a DSU. It provides complete control over the DSU. It can be derived to obtain a SReadSSI key that will give read-only access to the DSU that was created with the associated SeedSSI.


| Name                 | Type     | Value     | Description                                             |
|:---------------------|:---------|:----------|:--------------------------------------------------------|
| domain               | string   | *required | The blockchain domain of the SSI key you want to build. |
| vn <br> (optional)   | string   |           | Version number of the SSI Type.                         |
| hint <br> (optional) | string   |           | Hint for the KeySSI resolver.                           |
| callback             | function | *required |                                                         |


**Callback parameters**

| Name     | Type                                                        | Response example  |
|:---------|:------------------------------------------------------------|:------------------|
| err      | ErrorWrapper object                                         |                   |
| seedSSI  | <a href="https://opendsu.com/rfc010">SeedSSI</a> Object     |                   |


**Description:** Contains a message and the error./The seedSSI that was just created.

**Returns** 

| Name                                                    | Description                                  |
|:--------------------------------------------------------|:---------------------------------------------|
| <a href="https://opendsu.com/rfc010">SeedSSI</a> object | A SeedSSI instance is created and returned.  |


## Function createSignedHashLinkSSI(domain, hashLink, timestamp, signature, vn, hint)

**Description:** Create a SignedHashLinkSSI object. The SignedHashLinkSSI is used to reinforce the security of the brick storage.


| Name                 | Type             | Value      | Description                                                                                                |
|:---------------------|:-----------------|:-----------|:-----------------------------------------------------------------------------------------------------------|
| domain               | string           | *required  | The blockchain domain of the SSI key you want to build.                                                    |
| hashLink             | string           | *required  | HashLinkSSI identifier.                                                                                    |
| timestamp            | string           | *required  | Date of the signature.                                                                                     |
| signature            | Signature object |            | Signature object contains both the signature and the public key that is necessary to verify the signature. |
| vn <br> (optional)   | string           |            | Version number of the SSI Type.                                                                            |
| hint <br> (optional) | string           |            | Hint for the KeySSI resolver.                                                                              |


**Returns**

| Name                      | Description                                                                                                  |
|:--------------------------|:-------------------------------------------------------------------------------------------------------------|
| SignedHashLinkSSI object  | A SignedHashLinkSSI object is created and returned. HashLinkSSIs are used to reinforce HashlinkSSI objects.  |


## Function createTemplateSeedSSI(domain, specificString, control, vn, hint, callback)

**Description:** This function is used to create a template version of <a href="https://opendsu.com/rfc010">SeedSSI</a> key. To create a real SeedSSI, you should use the above function – createSeedSSI.

| Name                           | Type             | Value     | Description                                                                                                |
|:-------------------------------|:-----------------|:----------|:-----------------------------------------------------------------------------------------------------------|
| domain                         | string           | *required | The blockchain domain of the SSI key you want to build.                                                    |
| specificString <br> (optional) | string           |           | Must contain enough random bits for good security                                                          |
| control <br> (optional)        | string           |           | Used by anchoring services to validate requests for new versions of anchored DSU.                          |
| vn <br> (optional)             | string           |           | Version number of the SSI Type.                                                                            |
| hint <br> (optional)           | string           |           | Hint for the KeySSI resolver.                                                                              |
| callback                       | function         | *required |                                                                                                            |


**Callback parameters**

| Name             | Type                                                     | Response example  |
|:-----------------|:---------------------------------------------------------|:------------------|
| err              | ErrorWrapper object                                      |                   |
| templateSeedSSI  | <a href="https://opendsu.com/rfc010">SeedSSI</a>  Object |                   |


**Description:** Contains a message and the error./The templateSeedSSI that was just created.

**Returns**

| Name                                                    | Description                                           |
|:--------------------------------------------------------|:------------------------------------------------------|
| <a href="https://opendsu.com/rfc010">SeedSSI</a> object | A template SeedSSI instance is created and returned.  |


## Function createTemplateKeySSI(ssiType, domain, specificString, control, vn, hint, callback)

**Description:** Build a template instance of the chosen KeySSI type.

| Name                           | Type             | Value     | Description                                                                       |
|:-------------------------------|:-----------------|:----------|:----------------------------------------------------------------------------------|
| ssiType                        | string           | *required | The type of the SSI key you want to build.                                        |
| domain                         | string           | *required | The blockchain domain of the SSI key you want to build.                           |
| specificString <br> (optional) | string           |           | Must contain enough random bits for good security                                 |
| control <br> (optional)        | string           |           | Used by anchoring services to validate requests for new versions of anchored DSU. |
| vn <br> (optional)             | string           |           | Version number of the SSI Type.                                                   |
| hint <br> (optional)           | string           |           | Hint for the KeySSI resolver.                                                     |
| callback                       | function         | *required |                                                                                   |


**Callback parameters**

| Name            | Type                | Response example  |
|:----------------|:--------------------|:------------------|
| err             | ErrorWrapper object |                   |
| templateKeySSI  | KeySSI Object       |                   |


**Description:** Contains a message and the error./The templateKeySSI that was just created.

**Returns**

| Name                                                                                                                                      | Description                                                           |
|:------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------|
| <a href="https://docs.google.com/document/d/1JP6LS0LnSkICdg8uP7NSOipUz3DTrBwTuRNttzukK_o/edit#heading=h.903pkgpopah5">KeySSI object</a>   | A template keySSI object of the chosen type is created and returned.  |


## Function createTemplateSymmetricalEncryptionSSI(domain, encryptionKey, control, vn, hint, callback)

**Description:** Build a template <a href="https://docs.google.com/document/d/e/2PACX-1vQG4_toy41-z4wudec2WtE03dBwOw5EProlP1ZP4fMt7ClUg3ftPy7Hyf3Q4EkWolkefxkoDTDHJ0H4/pub?embedded=true">SymmetricalEncryptionSSI</a> instance that can be used to encrypt and decrypt the bricks.

| Name                          | Type             | Value     | Description                                                                                                                               |
|:------------------------------|:-----------------|:----------|:------------------------------------------------------------------------------------------------------------------------------------------|
| domain                        | string           | *required | The blockchain domain of the SSI key you want to build.                                                                                   |
| encryptionKey <br> (optional) | string           |           | An encryption key is used instead of the traditional specific string.                                                                     |
| control <br> (optional)       | string           |           | Used by anchoring services to validate requests for new versions of anchored DSU (The algorithm used for verification is type-specific).  |
| vn <br> (optional)            | string           |           | Version number of the SSI Type.                                                                                                           |
| hint <br> (optional)          | string           |           | Hint for the KeySSI resolver (optional).                                                                                                  |
| callback                      | function         | *required |                                                                                                                                           |


**Callback parameters**

| Name                              | Type                 | Response example  |
|:----------------------------------|:---------------------|:------------------|
| err                               | ErrorWrapper object  |                   |
| templateSymmetricalEncryptionSSI  |                      |                   |


**Description:** Contains a message and the error./The templateSymmetricalEncryptionSSI that was just created.

**Returns**

| Name                                                                                                                                                                                         | Description                                                            |
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------|
| <a href="https://docs.google.com/document/d/e/2PACX-1vQG4_toy41-z4wudec2WtE03dBwOw5EProlP1ZP4fMt7ClUg3ftPy7Hyf3Q4EkWolkefxkoDTDHJ0H4/pub?embedded=true">SymmetricalEncryptionSSI</a>  object | A template SymmetricalEncryptionSSI instance is created and returned.  |


## Function createTemplateWalletSSI(domain, arrayWIthCredentials, hint)

**Description:** Build a <a href="https://opendsu.com/rfc014">WalletSSI object</a>. WalletSSIs are used to identify wallets.

| Name                                 | Type            | Value      | Description                                             |
|:-------------------------------------|:----------------|:-----------|:--------------------------------------------------------|
| domain                               | string          | *required  | The blockchain domain of the SSI key you want to build. |
| arrayWithCredentials <br> (optional) | Array of string |            | An array of credentials.                                |
| hint <br> (optional)                 | string          |            | Hint for the KeySSI resolver (optional).                |


**Returns**

| Name                                                             | Description                                             |
|:-----------------------------------------------------------------|:--------------------------------------------------------|
| <a href="https://opendsu.com/rfc014">WalletSSI object</a> object | A template WalletSSI instance is created and returned.  |


## Function parse(ssiString, options)

**Description:** Parse a string obtained from the serialization of a KeySSI (this format: _ssi:seed:domain:specificString:control:v0_)  to obtain the corresponding KeySSI object.


| Name                | Type                          | Value      | Description                                           |
|:--------------------|:------------------------------|:-----------|:------------------------------------------------------|
| ssiString           | String (using the SSI format) | *required  | A string obtained from the serialization of a KeySSI. |
| options (optional)  | JSON object                   |            | No options by default.                                |


**Returns**

| Name                                                                                                                                           | Description                                                      |
|:-----------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------|
| <a href="https://docs.google.com/document/d/1JP6LS0LnSkICdg8uP7NSOipUz3DTrBwTuRNttzukK_o/edit#heading=h.903pkgpopah5">KeySSI object</a> object | An instance of the corresponding KeySSI is created and returned. |


## Function createConstSSI(domain, constString, vn, hint)

**Description:** 

| Name                    | Type   | Value     | Description                                             |
|:------------------------|:-------|:----------|:--------------------------------------------------------|
| domain                  | string | *required | The blockchain domain of the SSI key you want to build. |
| constString             | string |           |                                                         |
| vn <br> (optional)      | string |           | Version number of the SSI Type.                         |
| hint <br> (optional)    | string |           | Hint for the KeySSI resolver.                           |


**Returns**

| Name         | Description                           |
|:-------------|:--------------------------------------|
| ConstSSI     | The ConstSSI object that was created  |


## Function createToken(domain, amountOrSerialNumber, vn, hint, callback)

**Description:** 

| Name                    | Type             | Value     | Description                                             |
|:------------------------|:-----------------|:----------|:--------------------------------------------------------|
| domain                  | string           | *required | The blockchain domain of the SSI key you want to build. |
| amountOrSerialNumber    | string           |           |                                                         |
| vn <br> (optional)      | string           |           | Version number of the SSI Type.                         |
| hint <br> (optional)    | string           |           | Hint for the KeySSI resolver (optional).                |
| callback                | function         |           |                                                         |


**Callback parameters**

| Name   | Type                | Response example  |
|:-------|:--------------------|:------------------|
| err    | ErrorWrapper object |                   |
| token  | Token Object        |                   |


**Description:** Contains a message and the error./The token that was just created.

**Returns**

| Name          | Description                              |
|:--------------|:-----------------------------------------|
| Token Object  | A Token Object is created and returned.  |


## Function createOwnershipSSI(domain, levelAndToken, vn, hint, callback)

**Description:** 

| Name                 | Type             | Value     | Description                                             |
|:---------------------|:-----------------|:----------|:--------------------------------------------------------|
| domain               | string           | *required | The blockchain domain of the SSI key you want to build. |
| levelAndToken        | string           |           |                                                         |
| vn <br> (optional)   | string           |           | Version number of the SSI Type.                         |
| hint <br> (optional) | string           |           | Hint for the KeySSI resolver (optional).                |
| callback             | function         |           |                                                         |


**Callback parameters**

| Name          | Type                | Response example  |
|:--------------|:--------------------|:------------------|
| err           | ErrorWrapper object |                   |
| ownershipSSI  | SSI Object          |                   |


**Description:** Contains a message and the error./The ownershipSSI that was just created.

**Returns**

| Name          | Description                              |
|:--------------|:-----------------------------------------|
| Token Object  | A Token Object is created and returned.  |


## Function createTransferSSI(domain, hashNewPublicKey, timestamp, signatureCurrentOwner, vn, hint, callback)

**Description:** 

| Name                   | Type     | Value       | Description                                             |
|:-----------------------|:---------|:------------|:--------------------------------------------------------|
| domain                 | string   | *required   | The blockchain domain of the SSI key you want to build. |
| hashNewPublicKey       | string   | *required   |                                                         |
| timestamp              |          | *required   |                                                         |
| signatureCurrentOwner  |          | *required   |                                                         |
| vn <br> (optional)     | string   |             | Version number of the SSI Type.                         |
| hint <br> (optional)   | string   |             | Hint for the KeySSI resolver (optional).                |
| callback               | function |             |                                                         |


**Callback parameters**

| Name         | Type                | Response example  |
|:-------------|:--------------------|:------------------|
| err          | ErrorWrapper object |                   |
| transferSSI  |                     |                   |


**Description:** Contains a message and the error./The transferSSI that was just created.

**Returns**

| Name         | Description                             |
|:-------------|:----------------------------------------|
| transferSSI  | A transferSSI is created and returned.  |


## Function createTemplateTransferSSI(domain, hashNewPublicKey, vn, hint)

**Description:** 

| Name                   | Type     | Value     | Description                                             |
|:-----------------------|:---------|:----------|:--------------------------------------------------------|
| domain                 | string   | *required | The blockchain domain of the SSI key you want to build. |
| hashNewPublicKey       | string   |           |                                                         |
| vn <br> (optional)     | string   |           | Version number of the SSI Type.                         |
| hint <br> (optional)   | string   |           | Hint for the KeySSI resolver (optional).                |


**Returns**

| Name                 | Description                                |
|:---------------------|:-------------------------------------------|
| templateTransferSSI  | The templateTransferSSI that was created.  |


## Function createPublicKeySSI(compatibleFamilyName, publicKey, vn)

**Description:** 

| Name                 | Type   | Value | Description                              |
|:---------------------|:-------|:------|:-----------------------------------------|
| compatibleFamilyName | string |       |                                          |
| publicKey            |        |       |                                          |
| vn <br> (optional)   | string |       | Version number of the SSI Type.          |


**Returns**

| Name          | Description                         |
|:--------------|:------------------------------------|
| publicKeySSI  | The publicKeySSI that was created.  |


## Function we_createSeedSSI(enclave, domain, vn, hint, callback)

**Description:** 

| Name                 | Type            | Value     | Description                                             |
|:---------------------|:----------------|:----------|:--------------------------------------------------------|
| enclave              | Enclave Object  | *required |                                                         |
| domain               | string          | *required | The blockchain domain of the SSI key you want to build. |
| vn <br> (optional)   | string          |           | Version number of the SSI Type.                         |
| hint <br> (optional) | string          |           | Hint for the KeySSI resolver (optional).                |
| callback             | function        |           |                                                         |


**Callback parameters**

| Name    | Type                | Response example  |
|:--------|:--------------------|:------------------|
| err     | ErrorWrapper object |                   |
| seedSSI |                     |                   |


**Description:** Contains a message and the error./The seedSSI that was just created.

**Returns**

| Name     | Description                        |
|:---------|:-----------------------------------|
| seedSSI  | A seedSSI is created and returned. |


## Function we_createConstSSI(enclave, domain, constString, vn, hint, callback)

**Description:** 

| Name                 | Type           | Value     | Description                                             |
|:---------------------|:---------------|:----------|:--------------------------------------------------------|
| enclave              | Enclave Object | *required |                                                         |
| domain               | string         | *required | The blockchain domain of the SSI key you want to build. |
| constString          | string         |           |                                                         |
| vn <br> (optional)   | string         |           | Version number of the SSI Type.                         |
| hint <br> (optional) | string         |           | Hint for the KeySSI resolver (optional).                |
| callback             | function       |           |                                                         |


**Callback parameters**

| Name     | Type                | Response example  |
|:---------|:--------------------|:------------------|
| err      | ErrorWrapper object |                   |
| constSSI |                     |                   |


**Description:** Contains a message and the error./The constSSI that was just created.

**Returns**

| Name      | Description                          |
|:----------|:-------------------------------------|
| constSSI  | A constSSI is created and returned.  |


## Function we_createArraySSI(domain, constString, vn, hint, callback)

**Description:** 

| Name                 | Type           | Value     | Description                                             |
|:---------------------|:---------------|:----------|:--------------------------------------------------------|
| domain               | string         | *required | The blockchain domain of the SSI key you want to build. |
| constString          | string         |           |                                                         |
| vn <br> (optional)   | string         |           | Version number of the SSI Type.                         |
| hint <br> (optional) | string         |           | Hint for the KeySSI resolver (optional).                |
| callback             | function       |           |                                                         |


**Callback parameters**

| Name | Type                | Response example  |
|:-----|:--------------------|:------------------|
| err  | ErrorWrapper object |                   |
|      |                     |                   |


**Description:** Contains a message and the error./The array that was just created.

**Returns**

| Name      | Description                    |
|:----------|:-------------------------------|
| arraySSI  | The arraySSI that was created. |


## Function createAliasSSI(domain, alias, callback)

**Description:** 

| Name       | Type      | Value      | Description                                              |
|:-----------|:----------|:-----------|:---------------------------------------------------------|
| domain     | string    | *required  | The blockchain domain of the SSI key you want to build.  |
| alias      |           |            |                                                          |
| callback   | function  |            |                                                          |


**Callback parameters**

| Name     | Type                | Response example  |
|:---------|:--------------------|:------------------|
| err      | ErrorWrapper object |                   |
| aliasSSI |                     |                   |


**Description:** Contains a message and the error./The aliasSSI that was just created.

**Returns**

| Name      | Description                    |
|:----------|:-------------------------------|
| aliasSSI  | The aliasSSI that was created. |


## Function createSizeSSI(domain, totalSize, bufferSize)

**Description:** 

| Name        | Type    | Value      | Description                                              |
|:------------|:--------|:-----------|:---------------------------------------------------------|
| domain      | string  | *required  | The blockchain domain of the SSI key you want to build.  |
| totalSize   |         |            |                                                          |
| bufferSize  |         |            |                                                          |


**Returns**

| Name     | Description                    |
|:---------|:-------------------------------|
| sizeSSI  | The sizeSSI that was created.  |


## Function createPathKeySSI(domain, path, vn, hint)

**Description:** 

| Name   | Type    | Value      | Description                                                  |
|:-------|:--------|:-----------|:-------------------------------------------------------------|
| domain | string  | *required  | The blockchain domain for which you want to create a KeySSI. |
| path   |         |            | The path for which you want to create a KeySSI.              |
| vn     |         |            | The version number.                                          |
| hint   |         |            |                                                              |


## Function we_createPathKeySSI(enclave, domain, path, vn, hint)

**Description:** 

| Name     | Type   | Value     | Description                                             |
|:---------|:-------|:----------|:--------------------------------------------------------|
| enclave  |        | *required |                                                         |
| domain   | string | *required | The blockchain domain of the SSI key you want to build. |
| path     |        |           | The path for which you want to create a KeySSI.         |
| vn       |        |           | The version number.                                     |
| hint     |        |           |                                                         |


## Function createEmbedSSI(domain, data)

**Description:** 

| Name   | Type   | Value     | Description                                                  |
|:-------|:-------|:----------|:-------------------------------------------------------------|
| domain | string | *required | The blockchain domain for which you want to create a KeySSI. |
| data   |        |           |                                                              |


## Function createVersionlessSSI(domain, path, encryptionKey, vn, hint)

**Description:** 

| Name           | Type   | Value     | Description                                                  |
|:---------------|:-------|:----------|:-------------------------------------------------------------|
| domain         | string | *required | The blockchain domain for which you want to create a KeySSI. |
| path           |        |           | The path for which you want to create a KeySSI.              |
| encryptionKey  |        |           |                                                              |
| vn             |        |           | The version number.                                          |
| hint           |        |           |                                                              |


# Annex 1. Contributors


| **Current Editors**                 | **Email**                               |
|:------------------------------------|:----------------------------------------|
| Sînică Alboaie                      | sinica.alboaie@axiologic.net            |
| Cosmin Ursache                      | cosmin@axiologic.net                    |
| Teodor Lupu                         | teodor@axiologic.net                    |
| Andi-Gabriel Țan                    | andi@axiologic.net                      |
| **Contributors Axiologic Research** | **Email**                               |
| Adrian Ganga                        | adrian@axiologic.net                    |
| Andi-Gabriel Țan                    | andi@axiologic.net                      |
| Cosmin Ursache                      | cosmin@axiologic.net                    |
| Daniel Sava                         | daniel@axiologic.net                    |
| Nicoleta Mihalache                  | nicoleta@axiologic.net                  |
| Teodor Lupu                         | teodor@axiologic.net                    |
| Valentin Gérard                     | valentin@axiologic.net                  |
| **PrivateSky Contributors**         | **Email**                               |
| Alex Sofronie                       | alsofronie@gmail.com(DPO)               |
| Cosmin Ursache                      | cos.ursache@gmail.com(UAIC)             |
| Daniel Sava                         | sava.dumitru.daniel@gmail.com(HVS, AQS) |
| Daniel Visoiu                       | visoiu.daniel.g@gmail.com(SGiant)       |
| Lenuța Alboaie                      | lalboaie@gmail.com(UAIC)                |
| Rafael Mastaleru                    | rafael@rms.ro(RMS)                      |
| Sînică Alboaie                      | salboaie@gmail.com(UAIC)                |
| Vlad Balmos                         | vlad.balmos@gmail.com(Code932)          |
| **PharmaLedger**                    | **Email**                               |
| Ana Balan                           | bam@rms.ro (RMS)                        |
| Bogdan Mastahac                     | mab@rms.ro (RMS)                        |
| Cosmin Ursache                      | cos@rms.ro (RMS)                        |
| Rafael Mastaleru                    | raf@rms.ro (RMS)                        |

	

	

