---
title: Enclaves (RFC-097)
layout: home
parent: OpenDSU for Beginners
nav_order: 6
---
<style>
.imgMain{
    display.block;
    margin-left:70px;
    margin-right:auto;
} 
</style>
{: .no_toc }


{: .feedback}
A period when the community can review the RFC (comment Docs).

**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)

<!-- TOC -->
* [Abstract](#abstract)
* [1. OpenDSU SDK: “enclave” API Space](#1-opendsu-sdk-enclave-api-space)
  * [1.1 Enclave methods](#11-enclave-methods)
    * [1.1.1 Elements access control](#111-elements-access-control)
  * [1.2. Access Control Enclave Methods](#12-access-control-enclave-methods)
    * [Function getDID(callback)](#function-getdidcallback)
<!-- TOC -->



# Abstract

<p style='text-align: justify;'>OpenDSU Enclaves is a concept that allows storing sensitive data and controlling access to it in the most granular way possible. The concept represents or presents similarities with a database, a communication system based on Message Queues, or a Key Management System. The OpenDSU Enclaves concept has been and is being implemented and used for the first time, along with another OpenDSU concept named “Security Context”.
</p>The idea of how OpenDSU evolved and how it continues to evolve is to no longer remove the secret keys and the private keys outside the enclave but to do all cryptographic operations inside the enclave. The concept of the enclave has been refactored with OpenDSU to convey more clearly that all operations with secret keys, signatures, and decryptions are made at the enclave level. After this step, it can be chosen where it is actually executed.


# 1. OpenDSU SDK: “enclave” API Space


<div style="text-align:center;">
    <img alt="" src="LINK" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 1: Enclave</b></p>
</div>

<p style='text-align: justify;'>As presented in Security Context <a href="https://www.opendsu.org/pages/beginners/Security%20Context%20(RFC-075).html">RFC-075</a> , the enclave is a system for storing Private Keys for DIDs, Secret Keys for symmetric AES type encryption or records represented in tabular form, as a database. These records may contain different types of data, more or less sensitive, but if the user has decided to treat them, then he probably has a reason to put them inside the Wallet and the Enclave. An essential function of the enclave is to keep the KeySSIs to which the Wallet has access.
</p>The OpenDSU system provides automation in how to work with private keys or even with secret keys. Solving a KeySSI leads us to obtain a DSU instance that results in automatic registers of that KeySSI in an enclave. These KeySSIs are in a hierarchy. For example, we have a KeySSI from which we derive a less powerful one, and we can continue to have weaker and weaker levels of power and role. If at the level of an application, i.e. at the level of a Security Context or a Wallet, we used a strong KeySSI at a certain point, we automatically registered it, and if the code shows that we only have local access to a derived KeySSI, i.e. a less powerful one, we automatically get access to the functionalities that require a higher level of access.


<div style="text-align:center;">
    <img alt="" src="LINK" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 2: Enclave types</b></p>
</div>

<p style='text-align: justify;'>There is no single type of enclave. Many enclaves can be invented. As we can see in this figure, we have more options. It can be enclaves that are on the client side, meaning that there are enclaves that exist only inside the Wallets and are usually implemented in the form of DSUs. The Wallets made on DSUs already have the ability to store sensitive data because DSUs suddenly offer them encryption, integrity properties, and so on. Therefore, in some situations, enclaves can be implemented simply in the form of an Embedded DB. This is what we offer by default. On the other hand, if the wallets are not configured, a WalletDBEnclave is offered as the Wallet’s enclave.</p>

<p style='text-align: justify;'>There are two enclaves: WalletDBEnclave and Remote Enclave. The second enclave goes to a server to store the data, meaning it is no longer an Embedded DB. As we can see, we have different implementations for the enclave concept. The Enclave component offers some general APIs, but it has an implementation, meaning it can have a default based on Loki Enclave, or it can have others that will appear over time. Among these others that may occur, it is best to mention the enclaves that use a Key Management System (KMS) – which can be a KMS in the cloud or a KMS on hardware devices – or those that use the Trusted Execution Environment (TEE) offered by the operating system. Based on the level of some processors, it provides functionalities for managing secrets in hardware, TEE, or similar things. It should be mentioned that all these implementations must offer the same set of APIs, so we have an interface for these Remote Enclaves and even Embedded Enclaves that provide the same interface as other enclaves.</p>


## 1.1 Enclave methods

<p style='text-align: justify;'>The enclaves can be built to be used either as a database system or as a message communication system based on message queues in such a way that, depending on the type of enclave and the purpose for which it is used, it has access to a series of well-defined APIs.</p>

### 1.1.1 Elements access control

<p style='text-align: justify;'>The elements or control APIs exposed by the enclave concept to granularly manage the control over the stored data in the enclave are made by simple APIs such as grantAccess for a specific type of element, table, or information in the enclave or such as revokeAccess, which, for a certain identity, allows to restrict or cancel the access held until that time. At the same time, the enclave allows interaction between data stored inside and external users. In fact, the user who has control over an enclave and above the data from a particular enclave can share that data with one or more other users in an auditable and variable form.</p>


<div style="text-align:center;">
    <img alt="" src="LINK" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 3: Enclave Elements</b></p>
</div>

<p style='text-align: justify;'>Enclaves should provide multiple interfaces and should be able to work with them in different groups of APIs (for KSM, for DIDs, for signing using a DID, private KMS for DIDs and SSIs, message queues and tables). For the last one mentioned, we refer to records grouped in tables, based on which we can make queries.</p>

<p style='text-align: justify;'>One principle that should be taken into account and that should be carefully implemented in each of the enclave types listed here is that, ideally, the private or secret key should not “leave” the environment in which the enclave is instantiated. Therefore, this requires that all signing/encryption operations are performed inside the enclave and that the client does not request a private or secret key. In this way, the level of security is better. This remains to be seen about table queries, because the concept is still evolving.</p>



<div style="text-align:center;">
    <img alt="" src="LINK" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 4: DID’s Enclave and Clients</b></p>
</div>


<p style='text-align: justify;'>From the point of view of data access and how access is realized, we have two concepts: DID Enclave (DID Key) and DID Clients. Each enclave will have a DID. When we refer to the first of them, it should not be possible for anyone other than authorized customers to ask for information from the enclave. So, the enclave will have a DID Key and will communicate via encrypted messages with customers. In the case of the second enclave, any user or wallet with access to the data in the enclaves can send encrypted messages. The enclave verifies that the messages are encrypted correctly and signed by the identified client, then automatically does or does not give access to the records, depending on the permissions that have been set by grant operations (grantAccess). In the case of these enclaves, we refer to Remote DIDs, because Embedded ones have access levels (they do not need DIDs). Even if APIs always require a DID (e.g. forDID), that is through all APIs, and it signifies the DID of the customer who is requesting access.</p>
<p style='text-align: justify;'>Any security context uses an Enclave to store private and secret keys. For optimization purposes, it could also request and use these keys directly in the execution environment. However, the keys and DIDs generated in an Enclave are not allowed to leave that Enclave.</p>


## 1.2. Access Control Enclave Methods

<ol>
  <li>getEnclaveDID()</li>
  <li>grantAccess(forDID, elementType, elementAlias, accesType,  adminSignature, callback) </li>
        <ol>
            <li>elementType: “enclave”, “table”, “did”, “secretKey”,” publicKey”, queue</li>
            <li>elementAlias can be a specific value (the name or alias of a specific element as string) or  the "*" wildcard</li>
            <li>accesType can be “read” or “write” </li>
        </ol>
<li>revokeAccess(forDID, elementType, elementAlias, accesType, adminSignature, callback)</li>
</ol>

### Function getDID(callback)

**Description**: This method is called in order to receive the DID document identifier of the enclave.

| **Name** | **Type** | **Response example**                                                                                                                     |
|:---------|:---------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the delete call. If err is undefined, the record was successfully deleted |




