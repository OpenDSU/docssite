---
title: Security Context 
layout: home
parent: OpenDSU for Beginners
nav_order: 5
---
<style>
.imgMain{
    display.block;
    margin-left:70px;
    margin-right:auto;
} 
</style>


# **Security Context (RFC-075)**
{: .no_toc }


{: .feedback}
A period when the community can review the RFC (comment Docs).


**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright**© 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)

<!-- TOC -->
* [Abstract](#abstract)
* [1. Public functions from the Security Context API Space](#1-public-functions-from-the-security-context-api-space-)
  * [Function getSecurityContext()](#function-getsecuritycontext)
  * [Function refreshSecurityContext()](#function-refreshsecuritycontext)
  * [Function securityContextIsInitialised()](#function-securitycontextisinitialised)
  * [Function configEnvironment(config, refreshSC, callback)](#function-configenvironmentconfig-refreshsc-callback)
  * [Function getMainDSU(callback)](#function-getmaindsucallback)
  * [Function setMainDSU(mainDSU)](#function-setmaindsumaindsu)
  * [Function getVaultDomain(callback)](#function-getvaultdomaincallback)
  * [Function getMainEnclave(callback)](#function-getmainenclavecallback)
  * [Function setMainEnclave(enclave, callback)](#function-setmainenclaveenclave-callback)
  * [Function getSharedEnclave(callback)](#function-getsharedenclavecallback)
  * [Function setSharedEnclave(enclave, callback)](#function-setsharedenclaveenclave-callback)
  * [Function setEnclave(enclave, type, callback)](#function-setenclaveenclave-type-callback)
  * [Function deleteSharedEnclave(callback)](#function-deletesharedenclavecallback)
  * [Function sharedEnclaveExists()](#function-sharedenclaveexists)
  * [Function getDIDDomain(callback)](#function-getdiddomaincallback)
  * [Function setPIN(pin)](#function-setpinpin)
  * [Function setEnclaveKeySSI(type, keySSI, config)](#function-setenclavekeyssitype-keyssi-config)
  * [Function isPINNeeded()](#function-ispinneeded)
  * [Function mainEnclaveIsInitialised()](#function-mainenclaveisinitialised)
  * [Function setMainDID()](#function-setmaindid)
  * [Function getMainDID()](#function-getmaindid)
  * [Function setMainDIDAsync()](#function-setmaindidasync)
  * [Function getMainDIDAsync()](#function-getmaindidasync)
* [2. Security context instance API](#2-security-context-instance-api)
  * [Function registerKeySSI(forDID, keySSI, callback)](#function-registerkeyssifordid-keyssi-callback)
  * [Function registerDID(didDocument, callback)](#function-registerdiddiddocument-callback)
  * [Function addPrivateKeyForDID(didDocument, privateKey, callback)](#function-addprivatekeyfordiddiddocument-privatekey-callback)
  * [Function signForKeySSI(forDID, keySSI, data, callback)](#function-signforkeyssifordid-keyssi-data-callback)
  * [Function signAsDID(didDocument, data, callback)](#function-signasdiddiddocument-data-callback)
  * [Function verifyForDID(didDocument, data, signature, callback)](#function-verifyfordiddiddocument-data-signature-callback)
  * [Function encryptForDID(senderDIDDocument, receiverDIDDocument, message, callback)](#function-encryptfordidsenderdiddocument-receiverdiddocument-message-callback)
  * [Function decryptAsDID(didDocument, encryptedMessage, callback)](#function-decryptasdiddiddocument-encryptedmessage-callback)
  * [Function getDb(callback)](#function-getdbcallback)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->



# Abstract

<p align="justify">The Security Context (SC) API space offers a set of portable functions that represent functionalities of the “Security Context” that enables executable choreographies between various types of DSU reconstruction environments.</p>

<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vQYyt5qWPhm2b_MiBPR38TAjlJtXhm7kaQMMuK5d1DgFpY1GXMkO6jVMuXp9LwGbi4ptxbaxPwfaFnF/pub?w=237&h=270" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 1: Security Context</b></p>
</div>


<p align="justify">An important concept introduced by OpenDSU is the concept of Security Context. Its purpose is to give programmers who work with OpenDSU the intuition that working with secrets, cryptographic material, private keys, secret keys, and confidential/private records is always associated with a Security Context. Every Wallet is treated as a Security Context. A Wallet incorporates wider things such as interface, code, and different types of sensitive data storage. Also, it can mount the DSUs or have external databases. However, as seen in the above diagram, the most relevant is the Security Context concept, which has two components: the Main Enclave and the Shared Enclave. Every Wallet, and therefore every Security Context, has a Main Enclave that is instantiated and owned by the Digital Wallet. In other words, if this Wallet belongs to an organization and OpenDSU is focused on creating a programming framework for Enterprise applications, then the data does not belong to each individual, meaning we do not have the sovereignty goal at the user/owner level, but at the organization level. Therefore, OpenDSU offers the ability to share these enclaves, these sensitive data storage systems. So, OpenDSU introduces this enclave concept as an abstraction of sensitive data storage.</p>

In this RFC, we present the Security Context API without going into too much detail about enclave APIs. Enclave APIs will be described in [Enclave RFC-097](https://www.opendsu.org/pages/beginners/Enclaves%20(RFC-097).html). Any Wallet has a “Main DSU” and a “Security Context”.

The Main DSU can:

<ol>
  <li>Mount other DSUs</li>
  <li>Keep configurations for databases</li>
</ol>

The Security Context can have two enclaves:
* The Main Enclave:
   <ol>
     <li>Is a secure storage that keeps data specific to the current wallet.</li>
     <li>Typically a “WalletDB” (but configurable from environment.js).</li>
   </ol>
  
* The Shared Enclave:
  <ol>
    <li>An optional secure storage for enterprise use cases.</li>
    <li>The type is configurable from the demiurge tool. </li>
  </ol>
 
**Security Contexts** are storing (indirectly, through enclaves):
 <ol>
  <li>Private keys for SSIs and DIDs  (automatically)</li>
  <li>Secret keys (for symmetric encryption)</li>
  <li>Secret records</li>
 </ol>




# 1. Public functions from the Security Context API Space 
##  Function getSecurityContext()

**Description**: Get the security context instance. If the security context does not exist, this function will create it.

**Returns**

| **Name**                | **Description**                                           |
|:------------------------|:----------------------------------------------------------|
| Security Context Object | The security context is a safe place for storing keySSIs. |




## Function refreshSecurityContext()

**Description**: Create a new security context instance. If an instance exists, it will be overwritten.

**Returns**

| **Name**                 | **Description**                                            |
|:-------------------------|:-----------------------------------------------------------|
| Security Context Object  | The security context is a safe place for storing keySSIs.  |


## Function securityContextIsInitialised()

**Description**: Check if the security context is initialized.

**Returns**

| **Name**                 | **Description**                                            |
|:-------------------------|:-----------------------------------------------------------|
| Security Context Object  | The security context is a safe place for storing keySSIs.  |


## Function configEnvironment(config, refreshSC, callback)

**Description**: Updates the main DSU environment with the entries in the config parameter.

| **Name**   | **Type**  | **Value**  | **Description**                                                                                                                                                               |
|:-----------|:----------|:-----------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| config     | object    | *required  | The entries that are updated in the main DSU environment.                                                                                                                     |
| refreshSC  | boolean   |            | If refreshSC is set to true, a new instance of the security context is created. Otherwise, the existing security context instance is returned. By default, refreshSC = true.  |
| callback   | function  | *required  |                                                                                                                                                                               |


**Callback parameters**

| **Name**  | **Type**      | **Response example**  |
|:----------|:--------------|:----------------------|
| err       | Error Object  |                       |
| sc        | Object        |                       |


**Description**: An error object containing a message. / The security context instance.


## Function getMainDSU(callback)

**Description**: Retrieve the Main DSU.

| **Name**  | **Type**  | **Value**  | **Description**  |
|:----------|:----------|:-----------|:-----------------|
| callback  | function  | *required  |                  |


**Callback parameters**

| **Name**     | **Type**      | **Response example**  |
|:-------------|:--------------|:----------------------|
| err          | Error object  |                       |
| DSU object   | DSU object    |                       |


**Description**: An error object containing a message. / The main DSU associated with the rawDossier global variable.


##  Function setMainDSU(mainDSU)

**Description**: Set your DSU as the main one by associating it with the “rawDossier” global variable. The main DSU is the default DSU in the current environment and is used to store environment variables. In a browser environment, the main DSU also stores the SSApp data.

| **Name** | **Type**    | **Value**  | **Description**                           |
|:---------|:------------|:-----------|:------------------------------------------|
| mainDSU  | DSU Object  | *required  | The DSU you want to set as your mainDSU.  |


##  Function getVaultDomain(callback)
**Description**: Get the name of the vault domain. The vault is the blockchain domain that stores sensitive data, such as private keys and KeySSIs.

| **Name**  | **Type**  | **Value**  | **Description** |
|:----------|:----------|:-----------|:----------------|
| callback  | function  | *required  |                 |


**Callback parameters**

| **Name**     | **Type**      | **Response example** |
|:-------------|:--------------|:---------------------|
| err          | Error object  |                      |
| vaultDomain  | String        |                      |


**Description**: An error object containing a message. / Vault domain from main DSU.


## Function getMainEnclave(callback)

**Description**: Get the main enclave in the current security context. The main enclave is created when the security context is initialised. The main enclave is used by the security context to store private data such as KeySSIs and private keys for DIDs.

| **Name**  | **Type**  | **Value**  | **Description** |
|:----------|:----------|:-----------|:----------------|
| callback  | function  | *required  |                 |


**Callback parameters**

| **Name**     | **Type**          | **Response example** |
|:-------------|:------------------|:---------------------|
| err          | Error object      |                      |
| mainEnclave  | Enclave instance  |                      |


**Description**: An error object containing a message. / The main enclave instance.


## Function setMainEnclave(enclave, callback)

**Description**:  Set the main enclave for the current security context. The main enclave is used by the security context to store private data such as KeySSIs and private keys for DIDs.

| **Name** | **Type**          | **Value**  | **Description**                                                                       |
|:---------|:------------------|:-----------|:--------------------------------------------------------------------------------------|
| enclave  | Enclave instance  | *required  | The enclave instance that will be the main enclave for the current security context.  |
| callback | function          | *required  |                                                                                       |


**Callback parameters**

| **Name** | **Type**     | **Response exammple** |
|:---------|:-------------|:----------------------|
| err      | Error object |                       |
| sc       | Object       |                       |


**Description**: An error object containing a message. / The security context instance.


##  Function getSharedEnclave(callback)

**Description**: Get the current security context’s shared enclave. The shared enclave is used to store data meant to be shared with other users.

| **Name**  | **Type**  | **Value**  | **Description** |
|:----------|:----------|:-----------|:----------------|
| callback  | function  | *required  |                 |


**Callback parameters**

| **Name**       | **Type**       | **Response example** |
|:---------------|:---------------|:---------------------|
| err            | Error object   |                      |
| sharedEnclave  | String         |                      |


**Description**: An error object containing a message. / Vault domain from main DSU.


## Function setSharedEnclave(enclave, callback)

**Description**: Update the current security context’s shared enclave.

| **Name**  | **Type**         | **Value**  | **Description**                                                                       |
|:----------|:-----------------|:-----------|:--------------------------------------------------------------------------------------|
| enclave   | Enclave instance | *required  | The enclave instance that will be the main enclave for the current security context.  |
| callback  | function         | *required  |                                                                                       |


**Callback parameters**

| **Name** | **Type**      | **Response example** |
|:---------|:--------------|:---------------------|
| err      | Error object  |                      |
| sc       | Object        |                      |


**Description**: An error object containing a message. / The security context instance.


## Function setEnclave(enclave, type, callback)

**Description**:

| **Name**  | **Type**          | **Value**  | **Description**                                                                                           |
|:----------|:------------------|:-----------|:----------------------------------------------------------------------------------------------------------|
| enclave   | Enclave instance  | *required  | The enclave instance you want to set as the enclave of a certain type for the current security context.   |
| type      | string            | *required  | The type of the enclave that will be set (“MAIN_ENCLAVE” or “SHARED_ENCLAVE”).                            |
| callback  | function          | *required  |                                                                                                           |


**Callback parameters**

| **Name** | T**ype**     | **Response example** |
|:---------|:-------------|:---------------------|
| err      | Error object |                      |
| sc       | Object       |                      |


**Description**: An error object containing a message. / The security context instance.


## Function deleteSharedEnclave(callback)

**Description**: Delete the Shared Enclave.

| **Name**  | **Type**  | **Value**  | **Description** |
|:----------|:----------|:-----------|:----------------|
| callback  | function  | *required  |                 |


**Callback parameters**

| **Name** | **Type**      | **Response example** |
|:---------|:--------------|:---------------------|
| err      | Error object  |                      |


**Description**: An error object containing a message.


## Function sharedEnclaveExists()

**Description**: Check if a shared enclave exists.

**Returns**

| **Name**                 | **Description**                                                          |
|:-------------------------|:-------------------------------------------------------------------------|
| sc.sharedEnclaveExists() | A boolean value: true if a shared enclave exists, false if it does not.  |


##  Function getDIDDomain(callback)

**Description**: Retrieve the environment DID Domain.


## Function setPIN(pin)

**Description**: Set a PIN for the security context.


##  Function setEnclaveKeySSI(type, keySSI, config)

**Description**: Set a KeySSI for the enclave.


##  Function isPINNeeded()

**Description**: Check to see if the security context needs a PIN.


##  Function mainEnclaveIsInitialised()

**Description**: Check to see if the security context main enclave has been initialised.


## Function setMainDID()

**Description**: Set the main DID Key for the environment.


## Function getMainDID()

**Description**: Retrieve the main DID Key for the environment.


## Function setMainDIDAsync()

**Description**: Asynchronously set the main DID Key for the environment.


## Function getMainDIDAsync()

**Description**: Asynchronously retrieve the main DID Key for the environment.


# 2. Security context instance API

Here is the list of operations available on the security context object created through the getSecurityContext:


## Function registerKeySSI(forDID, keySSI, callback)

**Description**:  Register a keySSI and all its possible derivations in the security context.

| **Name**  | **Type**                 | **Value**  | **Description**                                                                                                                                  |
|:----------|:-------------------------|:-----------|:-------------------------------------------------------------------------------------------------------------------------------------------------|
| forDID    | string                   | *required  | The identity of the keySSI holder.                                                                                                               |
| keySSI    | KeySSI object or string  | *required  | The keySSI will be saved in the security context. If you enter a string, it must be a valid ssi format that will be used to retrieve the keySSI  |
| callback  | function                 | *required  |                                                                                                                                                  |


**Callback parameters**

| **Name** | **Type**      | **Response example** |
|:---------|:--------------|:---------------------|
| err      | Error object  |                      |


**Description**: An error object containing a message.


## Function registerDID(didDocument, callback)

**Description**: Register private keys associated with didDocument.

| **Name**     | **Type**  | **Value**  | **Description**                                                     |
|:-------------|:----------|:-----------|:--------------------------------------------------------------------|
| didDocument  | object    | *required  | DidDocument whose private keys are stored in the security context.  |
| callback     | function  | *required  |                                                                     |

**Callback parameters**

| **Name** | **Type**      | **Response example** |
|:---------|:--------------|:---------------------|
| err      | Error object  |                      |


**Description**: An error object containing a message.


## Function addPrivateKeyForDID(didDocument, privateKey, callback)

**Description**: Add a private key associated with didDocument.

| **Name**     | **Type**  | **Value**  | **Description**                                                        |
|:-------------|:----------|:-----------|:-----------------------------------------------------------------------|
| didDocument  | object    | *required  | DidDocument whose private keys are stored in the security context.     |
| privateKey   | string    | *required  | A private key in the list of privateKeys associated with didDocument.  |
| callback     | function  | *required  |                                                                        |

**Callback parameters**

| **Name** | **Type**      | **Response example** |
|:---------|:--------------|:---------------------|
| err      | Error object  |                      |


**Description**: An error object containing a message.


## Function signForKeySSI(forDID, keySSI, data, callback)

**Description**: Sign data with a keySSI within the security context.

| **Name**  | **Type**                  | **Value**  | **Description**                                                                  | 
|:----------|:--------------------------|:-----------|:---------------------------------------------------------------------------------|
| forDID    | string                    | *required  | The identity of the keySSI holder.                                               |
| keySSI    | keySSI object  or string  | *required  | The keySSI object or the identifier of the keySSI with which you want to sign.   |
| data      | Buffer or string          | *required  | The data you want to sign.                                                       |
| callback  | function                  | *required  |                                                                                  |


**Callback parameters**

| **Name**   | **Type**      | **Response example** |
|:-----------|:--------------|:---------------------|
| err        | Error object  |                      |
| signature  | JSON Object   |                      |


**Description**: An error object containing a message./Signature or credential in the JSON format.


## Function signAsDID(didDocument, data, callback)

**Description**: Sign data with didDocument within the security context.

| **Name**     | **Type**          | **Value**  | **Description**                                   |
|:-------------|:------------------|:-----------|:--------------------------------------------------|
| didDocument  | object            | *required  | The identity for which the signature is created.  |
| data         | Buffer or string  | *required  | The data you want to sign.                        |
| callback     | function          | *required  |                                                   |


**Callback parameters**

| **Name**   | **Type**      | **Response example** |
|:-----------|:--------------|:---------------------|
| err        | Error object  |                      |
| signature  | JSON Object   |                      |


**Description**: An error object containing a message./Signature or credential in the JSON format.


## Function verifyForDID(didDocument, data, signature, callback)

**Description**: Verify signature for didDocument data.

| **Name**     | **Type**          | **Value**   | **Description**                                   |
|:-------------|:------------------|:------------|:--------------------------------------------------|
| didDocument  | object            | *required   | The identity for which the verification is done.  |
| data         | Buffer or string  | *required   | The data you want to verify.                      |
| signature    | string            | *required   | Signature of the didDocument.                     |
| callback     | function          | *required   |                                                   |


**Callback parameters**

| **Name**            | **Type**      | **Response example** |
|:--------------------|:--------------|:---------------------|
| err                 | Error object  |                      |
| verificationResult  | boolean       |                      |


**Description**: An error object containing a message./Returns true/false.


## Function encryptForDID(senderDIDDocument, receiverDIDDocument, message, callback)

**Description**: Encrypts a message with privateKey of senderDIDDocument.

| **Name**             | **Type**  | **Value**  | **Description**                |
|:---------------------|:----------|:-----------|:-------------------------------|
| senderDIDDocument    | object    | *required  | The identity of the sender.    |
| receiverDIDDocument  | object    | *required  | The identity of the receiver.  |
| message              | string    | *required  | The message to send.           |
| callback             | function  | *required  |                                |


**Callback parameters**

| **Name**           | **Type**      | **Response example** |
|:-------------------|:--------------|:---------------------|
| err                | Error object  |                      |
| encryptedMessage   | string        |                      |


**Description**: An error object containing a message./Encrypted message.


## Function decryptAsDID(didDocument, encryptedMessage, callback)

**Description**: Decrypts a message didDocument.

| **Name**          | **Type**  | **Value**  | **Description**                                   |
|:------------------|:----------|:-----------|:--------------------------------------------------|
| didDocument       | object    | *required  | The identity for which the message is decrypted.  |
| encryptedMessage  | string    | *required  | Encrypted message.                                |
| callback          | function  | *required  |                                                   |


**Callback parameters**

| **Name** | **Type**      | **Response example** |
|:---------|:--------------|:---------------------|
| err      | Error object  |                      |
| message  | string        |                      |


**Description**: An error object containing a message./Decrypted message.


## Function getDb(callback)

**Description**: Get wallet database.

| **Name**  | **Type**  | **Value**  | **Description** |
|:----------|:----------|:-----------|:----------------|
| callback  | function  | *required  |                 |


**Callback parameters**

| **Name** | **Type**      | **Response example** |
|:---------|:--------------|:---------------------|
| err      | Error object  |                      |
| db       | object        |                      |


**Description**: An error object containing a message./Wallet database object.




**Contributors**   

1. [Axiologic Research](www.axiologic.net):New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the [www.opendsu.com](www.opendsu.com) site.
2. [PharmaLedger Project](www.pharmaledger.eu): Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.
3. [PrivateSky Research Project](www.privatesky.xyz):  MIT licensed content accordingly with the contracts. [https://profs.info.uaic.ro/~ads/PrivateSky/](https://profs.info.uaic.ro/~ads/PrivateSky/) 


# Annex 1. Contributors

|**Current Editors**                  | **Email**                                |
|:------------------------------------|:-----------------------------------------|
|Sînică Alboaie                       | sinica.alboaie@axiologic.net             |
|**Contributors Axiologic Research**  | **Email**                                |
|Adrian Ganga                         | adrian@axiologic.net                     |
|Andi-Gabriel Țan                     | andi@axiologic.net                       |
|Cosmin Ursache                       | cosmin@axiologic.net                     |
|Daniel Sava                          | daniel@axiologic.net                     |
|Nicoleta Mihalache                   | nicoleta@axiologic.net                   |
|Valentin Gérard                      | valentin@axiologic.net                   |
|**PharmaLedger Contributors**        | **Email**                                |
|Ana Balan                            | bam@rms.ro (RMS)                         |
|Bogdan Mastahac                      | mab@rms.ro (RMS)                         |
|Cosmin Ursache                       | cos@rms.ro (RMS)                         |
|Rafael Mastaleru                     | raf@rms.ro (RMS)                         |
