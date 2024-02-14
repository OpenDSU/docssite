---
title: WalletSSI 
layout: home
parent: OpenDSU Contributors
nav_order: 3
---

# **WalletSSI**

{: .feedback }
A period when the community can review the RFC (comment Docs).


**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)

<!-- TOC -->
* [WalletSSI](#walletssi)
* [Overview](#overview)
* [Abstract](#abstract)
* [1. Type-specific and control substring](#1-type-specific-and-control-substring)
* [2. Specific functions for WalletSSIs](#2-specific-functions-for-walletssis)
  * [Function walletSSI.initialize(dlDomain, array, vn, hint)](#function-walletssiinitializedldomain-array-vn-hint)
  * [Function walletSSI.derive()](#function-walletssiderive)
  * [Function walletSSI.getEncryptionKey()](#function-walletssigetencryptionkey)
  * [Function walletSSI.getTypeName()](#function-walletssigettypename)
  * [Function walletSSI.createAnchorValue(brickMapHash, previousAnchorValue, callback)](#function-walletssicreateanchorvaluebrickmaphash-previousanchorvalue-callback)
* [3. Cryptographic algorithms used by WalletSSIs (advanced)](#3-cryptographic-algorithms-used-by-walletssis-advanced)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->

# **Overview**

<p style='text-align: justify;'>The vision we are working on is getting bigger and, as time goes on, we improve it and promote it. This involves a change in the Internet and the idea of a web browser, or rather a change in a concept that arises, where instead of browsing the sites and interacting with different servers, there is a synergy between a browser and a wallet so that the user can use different functionalities or applications in a Self-Sovereign way. There is a way in which, from a browser, we can explore various self-sovereign applications, but make sure they do not start extracting data and sending it to servers or start spying or profiling users and so on.
</p>

<p style='text-align: justify;'>Currently, we have the technology to build SSApps and create this browser expansion. We mention browsers because we use certain technologies when we embed these SSApps into Wallets. The code can be generalized with other technologies, and so can the implementation. The important thing is that the new browser, capable of running these SSApps, must behave like a wallet, it must take care of personal keys and it must be able to mediate the user’s interaction with cryptography. It must also ensure a high level of key management quality.
</p>

# **Abstract**

<p style='text-align: justify;'>Wallets can be used to store different kinds of KeySSIs and personal user data. WalletSSIs use the same principles as <a href="https://www.opendsu.org/pages/advanced/ArraySSI%20(RFC-012).html">ArraySSIs</a>, but are used to identify and manage wallets. It is expected to have the credentials necessary to access the wallet in the array (like a username and password), but we could theoretically add more credentials, such as an answer to a question.
</p>


<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vRe94XEMK7pLcjyS3-ZDxYVtETl7ixyG3z5PHGzaEoeQY0zIkWX1TDeoJDdqE9aoE_z-v_c6tQMyIoK/pub?w=998&h=422" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 1: ConstSSI</b></p>
</div>


<p style='text-align: justify;'>Similar to <a href="https://www.opendsu.org/pages/advanced/ArraySSI%20(RFC-012).html">ArraySSI</a> and <a href="https://www.opendsu.org/pages/contributors/PasswordSSIs%20(RFC-013).html">PasswordSSI</a>, <a href="https://www.opendsu.org/pages/contributors/WalletSSI%20(RFC-014).html">WalletSSI</a> can be used to derive a <a href="https://www.opendsu.org/pages/advanced/ConstSSI%20(RFC-011).html">ConstSSI</a>, which provides access to a DSU.
</p>

| **SubType** | **Description**                                                                                                                      |
|:------------|:-------------------------------------------------------------------------------------------------------------------------------------|
| wallet      | A WalletSSI is basically an ArraySSI that is used for wallet identification. <br/> Example: <br/>  ssi:array:domain:encodedArray::v0 |


# **1. Type-specific and control substring**

<p style='text-align: justify;'>The identifier contains the subtype and the domain. That is very important for finding the correct brick storage and anchoring services associated with the keySSI and the DSU. After these two attributes, we have the type-specific and the control substring. The table below presents the content of these attributes.
</p>

| **Type** | **Type Specific substring**      | **Control substring** |
|:---------|:---------------------------------|:----------------------|
| wallet   | encoded(KDF(arrayOfCredentials)) | none                  |


# **2. Specific functions for WalletSSIs**

<p style='text-align: justify;'>(Common functions for all KeySSIs are available <a href="https://www.opendsu.org/pages/concepts/KeySSI%20(RFC-002).html">here</a>)
</p>

## **Function walletSSI.initialize(dlDomain, array, vn, hint)**

**Description**: Initialize a WalletSSI with your own parameters.

| **Name**         | **Type** | **Value** | **Description**                                                                                   |
|:-----------------|:---------|:----------|:--------------------------------------------------------------------------------------------------|
| dlDomain         | string   | *required | The blockchain domain wanted to be used.                                                          |
| array            | string   | *required | The array will be used in the initialization to get the final specific string of your WalletSSI.  |
| vn (optional)    | string   |           | The version number of the SeedSSI you want to use.   <br/> Default value: “v0”.                   |
| hint (optional)  | string   |           | Optional information for the keySSI resolver. <br/>    Default value: undefined                   |


## **Function walletSSI.derive()**

<p style='text-align: justify;'><b>Description</b>: Derive your WalletSSI and return a constSSI. The constSSI will conserve all parameters from the ArraySSI, except for a control substring that will be added. The specific substring of the ConstSSI will be the same as the one calculated during the initialization of the WalletSSI using the array of inputs. It is then possible to create and load a DSU using the ConstSSI.
</p>

**Returns**


| **SubType**                                                                          | **Description**                                                                                                                        |
|:-------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|
| [constSSI](https://www.opendsu.org/pages/advanced/ConstSSI%20(RFC-011).html) object  | A constSSI object is returned.                                                                                                         |



## **Function walletSSI.getEncryptionKey()**

**Description**: Get the encryption key associated with the WalletSSI.

**Returns**


| **SubType**  | **Description**                                                                                                                         |
|:-------------|:----------------------------------------------------------------------------------------------------------------------------------------|
| string       | The encryption key.                                                                                                                     |



## **Function walletSSI.getTypeName()**

**Description**: 

**Returns**


| **SubType**         | **Description**                                                                                                                          |
|:--------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| SSITypes.WALLET_SSI | A string representing the type of the SSI.                                                                                               |


## **Function walletSSI.createAnchorValue(brickMapHash, previousAnchorValue, callback)**

**Description**:


| **Name**            | **Type**  | **Value** | **Description**                                                                                   |
|:--------------------|:----------|:----------|:--------------------------------------------------------------------------------------------------|
| brickMapHash        |           |           |                                                                                                   |
| previousAnchorValue |           |           |                                                                                                   |
| callback            | function  |           |                                                                                                   |


**Callback parameters**


| **Name**    | **Type**      | **Response example** |
|:------------|:--------------|:---------------------|
| err         | Error Object  |                      |
| anchorValue |               |                      |

<p style='text-align: justify;'><b>Description</b>: Contains a message and the error. / The anchor value that was just created.
</p>

# **3. Cryptographic algorithms used by WalletSSIs (advanced)**

<p style='text-align: justify;'>In this paragraph, we present the algorithms that WalletSSI used. These algorithms can differ according to the type of KeySSI used and its version number. Most of the functions use the <a href="https://www.google.com/url?q=https://nodejs.org/docs/latest-v12.x/api/crypto.html%23crypto_crypto&sa=D&source=editors&ust=1707127872112744&usg=AOvVaw2x-LIIbf5iPN6DiqXaldb4">NodeJS crypto</a> library.
</p>

| **Name**      | **Type**                 | **Algorithms**                                                                                                                                     -                    |
|:--------------|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Default       | keyDerivation            | crypto.deriveKey('aes-256-gcm', password, iterations)                                                                                                                   |
| Default       | encryptionKeyGeneration  | Generate a random encryption key compatible with the [aes-256-gcm](https://en.wikipedia.org/wiki/Galois/Counter_Mode) algorithm.              |
| Default       | encoding                 | [Base58](https://www.google.com/url?q=https://learnmeabitcoin.com/technical/base58&sa=D&source=editors&ust=1707127872117712&usg=AOvVaw3ftCbYUTC4tIkHXK65-7or) encoding. |
| Default       | decoding                 | [Base58](https://www.google.com/url?q=https://learnmeabitcoin.com/technical/base58&sa=D&source=editors&ust=1707127872117712&usg=AOvVaw3ftCbYUTC4tIkHXK65-7or) decoding. |


**Contributors**


1. <p style='text-align: justify;'><a href="https://www.axiologic.net/">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="https://www.opendsu.org/">www.opendsu.org</a> site.

2. <p style='text-align: justify;'><a href="https://pharmaledger.org/">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.

3. PrivateSky Research Project: MIT licensed content accordingly with the contracts. 
<a href="https://profs.info.uaic.ro/~ads/PrivateSky/"> https://profs.info.uaic.ro/~ads/PrivateSky/</a>


# **Annex 1. Contributors**

| **Current Editors**                  | **Email**                                |
|:-------------------------------------|:-----------------------------------------|
| Sînică Alboaie                       | sinica.alboaie@axiologic.net             |
| Cosmin Ursache                       | cosmin@axiologic.net                     |
| Teodor Lupu                          | teodor@axiologic.net                     |
| Andi-Gabriel Țan                     | andi@axiologic.net                       |
| **Contributors Axiologic Research**  | **Email**                                |
| Adrian Ganga                         | adrian@axiologic.net                     |
| Andi-Gabriel Țan                     | andi@axiologic.net                       |
| Cosmin Ursache                       | cosmin@axiologic.net                     |
| Daniel Sava                          | daniel@axiologic.net                     |
| Nicoleta Mihalache                   | nicoleta@axiologic.net                   |
| Teodor Lupu                          | teodor@axiologic.net                     |
| Valentin Gérard                      | valentin@axiologic.net                   |
| **PrivateSky Contributors**          | **Email**                                |
| Alex Sofronie                        | alsofronie@gmail.com (DPO)               |
| Cosmin Ursache                       | cos.ursache@gmail.com (UAIC)             |
| Daniel Sava                          | sava.dumitru.daniel@gmail.com (HVS, AQS) |
| Daniel Visoiu                        | visoiu.daniel.g@gmail.com (SGiant)       |
| Lenuța Alboaie                       | lalboaie@gmail.com (UAIC)                |
| Rafael Mastaleru                     | rafael@rms.ro (RMS)                      |
| Sînică Alboaie                       | salboaie@gmail.com (UAIC)                |
| Vlad Balmos                          | vlad.balmos@gmail.com (Code932)          |
| **PharmaLedger Contributors**        | **Email**                                |
| Ana Balan                            | bam@rms.ro (RMS)                         |
| Bogdan Mastahac                      | mab@rms.ro (RMS)                         |
| Cosmin Ursache                       | cos@rms.ro (RMS)                         |
| Rafael Mastaleru                     | raf@rms.ro (RMS)                         |


