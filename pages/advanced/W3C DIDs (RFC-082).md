---
title: W3C DIDs 
layout: home
parent: OpenDSU Advanced
nav_order: 14
---



# **W3C DIDs(RFC-082)**
{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs)

**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)

<!-- TOC -->
* [Abstract](#abstract)
* [Overview](#overview)
* [1. W3C DID Methods supported by OpenDSU](#1-w3c-did-methods-supported-by-opendsu)
* [2. DID Documents instances using the W3C DIDs APIs](#2-did-documents-instances-using-the-w3c-dids-apis)
  * [Function createIdentity(didMethod, ...args)](#function-createidentitydidmethod-args)
  * [Function we_createIdentity(enclave, didMethod, ...args)](#function-we_createidentityenclave-didmethod-args)
  * [Function resolveDID(identifier, callback)](#function-resolvedididentifier-callback)
  * [Function we_resolveDID(enclave, identifier, callback)](#function-we_resolvedidenclave-identifier-callback)
  * [Function registerDIDMethod(method, implementation)](#function-registerdidmethodmethod-implementation)
  * [Function resolveNameDID(domain, publicName, secret, callback)](#function-resolvenamediddomain-publicname-secret-callback)
  * [Function registerNameDIDSecret(domain, publicName, secret, callback)](#function-registernamedidsecretdomain-publicname-secret-callback)
  * [Function initSystemDID()](#function-initsystemdid)
  * [Function getKeyDIDFromSecret(secret, callback)](#function-getkeydidfromsecretsecret-callback)
* [3. DID Documents instances using the Security Context APIs](#3-did-documents-instances-using-the-security-context-apis)
* [4. APIs that you could expect in a DID document instance](#4-apis-that-you-could-expect-in-a-did-document-instance)
* [5. Message communication between DIDs](#5-message-communication-between-dids)
* [6. CommunicationHub concept](#6-communicationhub-concept)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->





# Abstract

<p style='text-align: justify;'>This API allows the creation and resolution of OpenDSU identifiers <a href="https://www.opendsu.org/pages/concepts/KeySSI%20(RFC-002).html">(keySSIs)</a> that are compatible with the W3C DID specifications. A DID is like a URI resolved to a DID document. A DID Document is mostly a collection of public keys and possibly other metadata (e.g. endpoints). In OpenDSU, we transform these documents into Javascript objects capable of offering other functionalities:
</p>

* Send encrypted messages to an OpenDSU queue associated with this DID;
* Sign messages;
* Verify messages;
* Generate Verifiable Credentials (to be defined).





<p style='text-align: justify;'>An identifier can be resolved in two different security contexts:
</p>

<ol> 

 <li>In security contexts that have access to the private keys corresponding to the public key;</li>
 <li>In any other environment (they will have access only to the public key obtained from the DID document).</li>

</ol>


<p style='text-align: justify;'>A <a href="https://www.opendsu.org/pages/beginners/Security%20Context%20(RFC-075).html">security context</a> is just an abstraction for the secure storage part of a wallet. Typically each security context embeds one or two “<a href="https://www.opendsu.org/pages/beginners/Enclaves%20(RFC-097).html">Enclaves</a>” (See also RFC097).
</p>

# Overview

<p style='text-align: justify;'>We are using the concept of DID and the standards related to DID that are already implemented, but we will also implement other DID methods, and we will have our philosophy and our way of using these DIDs.
</p>

<div style="display: flex; justify-content: center;">
  <img 
    alt="" 
    src="https://docs.google.com/drawings/d/e/2PACX-1vRn_363dgq4shlBPDJuSMpDMCNMd1rRwqqzUQdfVLHOO19mHF4qcmmjihKInmubAieYP7sKKBAa2uxp/pub?w=960&h=720" 
    class="imgMain" 
    style="max-width: 100%; cursor: pointer; transition: max-width 0.3s ease-in-out;"
    onclick="openModal(this.src)"
    title="Click to Zoom"
  />
</div>

<p style='text-align: center;'><b>Figure nr. 1: DIDs in OpenDSU</b></p>



**W3CDID Interface (DID Document Facade)**

* Generic functions for working with DIDs;
* Unify the handling of DIDs in OpenDSU;
* Offer various functionalities:
  * Digital Signature;
  * Encryption (ECIES);
  * Encrypted messages communication between DIDs;
  * Credential Creation (not fully implemented);
  * DIDs & Keys revocations (not implemented).

* Use resolveDID from w3cdid API space to create W3CDID instances for your DID URIs;
* registerDIDMethod  can register DID methods.


**Security Context**

* Abstracts the intuition of access areas;
* Simplifies keys management;
* Use an enclave to offer granular access control to  private keys and other sensitive data (DID based);
* Used by W3CDID instances to perform various cryptographic operations in the right context.

<p style='text-align: justify;'>The existing standards specify details about data models and concepts, but it is not clear how to use them at the level of APIs and implementation. All our work, in this regard, is to generalize, create a transparent way, and use different or more agnostic DID methods. We have our own DID methods, and where we can, we try to use different types of DIDs.
</p>


<div style="display: flex; justify-content: center;">
  <img 
    alt="" 
    src="https://docs.google.com/drawings/d/e/2PACX-1vRKBxsti0yTFka4dFKuMhY2pPXeLmnxNTymzjMLuEkyTXBg9jyJOCpuanfz4i51qoeS9SYo2pkATmZQ/pub?w=324&h=712" 
    class="imgMain" 
    style="max-width: 100%; cursor: pointer; transition: max-width 0.3s ease-in-out;"
    onclick="openModal(this.src)"
    title="Click to Zoom"
  />
</div>

<p style='text-align: center;'><b>Figure 2: DIDs methods in OpenDSU (W3CDID concrete instantiations)</b></p>



* <b>did:ssi submethods:</b> DIDs associated with an OpenDSU Blockchain Domain:

* <b>did:ssi:name </b>take any string (name) and create a DID by having a const DSU mounting a sRead DSU (for DID Document);

* <b>did:ssi:sread</b> it is just making a DID from a sRead KeySSI (DSU containing DID Document);

* <b>Did:ssi:group </b>contains a list of other DIDs belonging to the group. Used to send messages to groups;

* <b>did:ssi:key </b>it is just the public key (without an external DID document) associated with a blockchain domain.
* 

<b>The Blockchain Domain is used to discover the endpoints for message queues</b>.

<b>Simple methods used by others (e.g., GS1):</b>

* <b>did:key</b> use a public key as identifier
* <b>did:web </b>use a WEB URL as identifier

<p style='text-align: justify;'>We are implementing a set of DIDs (as can be seen in the figure above, under did:ssi), as a method that we have proposed. There are several submethods. This is the reason that they are listed in the figure.
</p>


# 1. W3C DID Methods supported by OpenDSU

There are currently four DID Methods implemented, briefly described in the table below.

| **DID Method** |                                                                                                                                                                                                                                                                                                                       |
|:---------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ssi:name       | DID method storing the public key in an immutable DSU that is mounting another mutable DSU to store the keys. <br/>Example:<br/> <i>did:ssi:const:blockchain_domain:const_string:::</i>                                                                                                                               |
| ssi:key        | DID method that does not require an actual DID document, the public key is in the identifier already (with the obvious issues regarding the ability to rotate the  key). A blockchain domain is still part of the identifier for the ability to take BDNS configuration.<br/> Example:<br/><i>did:key:publicKey:</i>  |
| ssi:sread      | SeedSSI compatible DID method that does not need anchoring or external DSUs.<br/> Example: <br/> <i>did:ssi:sRead:blockchain_domain::hash_publicKey:: </i>                                                                                                                                                            |
| Key            | DID method that does not require an actual DID document, the public key is in the identifier already (with the obvious issues regarding the ability to rotate the  key). Similar to “ssi:key” but without a blockchain domain.<br/>  <i>Example:did:key:publicKey:</i>                                                |                                                      |




# 2. DID Documents instances using the W3C DIDs APIs

## Function createIdentity(didMethod, ...args)

**Description:** Create a new W3C DID based on SeedSSI.


| **Name**  | **Type**  | **Value** | **Description**                                                                                                                                                                          |
|:----------|:----------|:----------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| didMethod | string    | *required | The method you want to use to create a W3C-compatible identity using Open DSU.                                                                                                           |
| ...args   |           |           |                                                                                                                                                                                          |


## Function we_createIdentity(enclave, didMethod, ...args)

**Description:** Create a new W3C DID based on SeedSSI.




| **Name**  | **Type** | **Value** | **Description**                                                                                                                                                                                                                                             |
|:----------|:---------|:----------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| enclave   | Object   | *required | The enclave you want to use for storing the DID of the new identity.                                                                                                                                                                                        |
| didMethod | string   | *required | The method you want to use to create a W3C-compatible identity using Open DSU.                                                                                                                                                                              |
| ...args   |          |           |                                                                                                                                                                                                                                                             |



## Function resolveDID(identifier, callback)

**Description:** Returns an error or an instance of W3CDID.


| **Name**   | **Type** | **Value**  | **Description**                                                                       |
|:-----------|:---------|:-----------|:--------------------------------------------------------------------------------------|
| identifier | string   | *required  | An openDSU keySSI that is w3c compatible.                                             |
| callback   | function | *required  |                                                                                       |


**Callback parameters**

| **Name**    | **Type**            | **Response example** |
|:------------|:--------------------|:---------------------|
| err         | ErrorWrapper object |                      |
| didDocument | Did document        |                      |

**Description:** A DID document instance is obtained when you resolve a W3C DID.


## Function we_resolveDID(enclave, identifier, callback)

**Description:** Returns an error or an instance of W3CDID. 


| **Name**   | **Type** | **Value** | **Description**                                    |
|:-----------|:---------|:----------|:---------------------------------------------------|
| enclave    | Object   | *required | The enclave for which you want to resolve the DID. |
| identifier | string   | *required | An openDSU keySSI that is w3c compatible.          |
| callback   | function | *required |                                                    |


**Callback parameters**

| **Name**    | **Type**            | **Response example** |
|:------------|:--------------------|:---------------------|
| err         | ErrorWrapper object |                      |
| didDocument | Did document        |                      |



**Description:** A DID document instance is obtained when you resolve a W3C DID.


## Function registerDIDMethod(method, implementation)

**Description:** This function allows the user to register new DID methods. 

| **Name**       | **Type** | **Value** | **Description**                                   |
|:---------------|:---------|:----------|:--------------------------------------------------|
| method         | string   | *required |                                                   |
| implementation | function | *required |                                                   |




## Function resolveNameDID(domain, publicName, secret, callback)

**Description:**


| **Name**   | **Type** | **Value**  | **Description**       |
|:-----------|:---------|:-----------|:----------------------|
| domain     |          |            | The domain of the DID |
| publicName |          |            |                       |
| secret     |          |            |                       |
| callback   | function | *required  |                       |



## Function registerNameDIDSecret(domain, publicName, secret, callback)

**Description:**


| **Name**   | **Type** | **Value**  | **Description**       |
|:-----------|:---------|:-----------|:----------------------|
| domain     |          |            | The domain of the DID |
| publicName |          |            |                       |
| secret     |          |            |                       |
| callback   | function | *required  |                       |


## Function initSystemDID()

**Description:** Generate a system DID.


## Function getKeyDIDFromSecret(secret, callback)

**Description:**


| **Name**   | **Type** | **Value**  | **Description**       |
|:-----------|:---------|:-----------|:----------------------|
| secret     |          |            |                       |
| callback   | function | *required  |                       |



# 3. DID Documents instances using the Security Context APIs

# 4. APIs that you could expect in a DID document instance

<p style='text-align: justify;'>When resolving a DID identifier you obtain a DID document. Here is a summary of all operations available for DID documents.
</p>

| **Functions**                    | **Description** |
|:---------------------------------|:----------------|
| decrypt                          |                 |
| encrypt                          |                 |
| findPrivateKeysInSecurityContext |                 |
| getControllerKey                 |                 |
| getPublicKeys                    |                 |
| getMQHandlers                    |                 |
| revokeDID                        |                 |
| revokeKey                        |                 |
| sendMessage                      |                 |
| sign                             |                 |
| verify                           |                 |



# 5. Message communication between DIDs


<div style="display: flex; justify-content: center;">
  <img 
    alt="" 
    src="https://docs.google.com/drawings/d/e/2PACX-1vRAM-vSVDXhZVjiXtvHs-eq0yE8JYsj5Km_OThF5lSSSvbVMGsxd7rNdi468XPhhSjwR64iEiFdDiCC/pub?w=1036&h=822" 
    class="imgMain" 
    style="max-width: 100%; cursor: pointer; transition: max-width 0.3s ease-in-out;"
    onclick="openModal(this.src)"
    title="Click to Zoom"
  />
</div>


<p style='text-align: center;'><b>Figure 3: Message communication between DIDs</b></p>


# 6. CommunicationHub concept

* getCommunicationHub() -> CommHub

   * subscribe(did, messageType, checkSecurityMethod, callback)
   * unsubscribe(did, messageType, checkSecurityMethod, callback)





**Contributors**


1. <p style='text-align: justify;'><a href="www.axiologic.net">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="www.opendsu.com">www.opendsu.com</a> site.

2. <p style='text-align: justify;'><a href="www.pharmaledger.eu">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.

3. <a href="www.privatesky.xyz">PrivateSky Research Project</a>: MIT licensed content accordingly with the contracts. https://profs.info.uaic.ro/~ads/PrivateSky/


# Annex 1. Contributors

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


