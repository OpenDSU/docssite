---
title: Enclaves 
layout: home
parent: OpenDSU for Beginners
nav_order: 6
---
<style>
  /* Styles for the modal */
  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.9);
  }

  /* Modal content */
  .modal-content {
    margin: auto;
    display: block;
    max-width: 90%;
    max-height: 90%;
  }

  /* Close button */
  .close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
  }

  .close:hover,
  .close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }
</style>
<body>

<div id="myModal" class="modal" onclick="closeModal()">
  <span class="close" onclick="event.stopPropagation(); closeModal()">&times;</span>
  <img class="modal-content" id="img01" onclick="event.stopPropagation()">
</div>

<script>
function openModal(imgSrc) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  modal.style.display = "block";
  modalImg.src = imgSrc;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}
</script>

</body>




# Enclaves (RFC-097)
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


<div style="display: flex; justify-content: center;">
  <img 
    alt="" 
    src="https://docs.google.com/drawings/d/e/2PACX-1vRBnjKTED6djN7A8m00T_VBpg-ubGoQZC9A9Do6ex1iCphncPxpHWkUWEcS4RdrsP-bTCNWKKDhAmQ7/pub?w=387&h=403" 
    class="imgMain" 
    style="max-width: 100%; cursor: pointer; transition: max-width 0.3s ease-in-out;"
    onclick="openModal(this.src)"
    title="Click to Zoom"
  />
</div>

<div style="text-align:center;">
 <p><b>Figure 1: Enclave</b></p>

</div>


<p style='text-align: justify;'>As presented in Security Context <a href="https://www.opendsu.org/pages/beginners/Security%20Context%20(RFC-075).html">RFC-075</a> , the enclave is a system for storing Private Keys for DIDs, Secret Keys for symmetric AES type encryption or records represented in tabular form, as a database. These records may contain different types of data, more or less sensitive, but if the user has decided to treat them, then he probably has a reason to put them inside the Wallet and the Enclave. An essential function of the enclave is to keep the KeySSIs to which the Wallet has access.
</p>The OpenDSU system provides automation in how to work with private keys or even with secret keys. Solving a KeySSI leads us to obtain a DSU instance that results in automatic registers of that KeySSI in an enclave. These KeySSIs are in a hierarchy. For example, we have a KeySSI from which we derive a less powerful one, and we can continue to have weaker and weaker levels of power and role. If at the level of an application, i.e. at the level of a Security Context or a Wallet, we used a strong KeySSI at a certain point, we automatically registered it, and if the code shows that we only have local access to a derived KeySSI, i.e. a less powerful one, we automatically get access to the functionalities that require a higher level of access.



<div style="display: flex; justify-content: center;">
  <img 
    alt="" 
    src="https://docs.google.com/drawings/d/e/2PACX-1vS_UixQzY7Rfa8r0h-hLGEcvPE42AJ0jEvVVuid8i_G_5-37mDlw1iQ9dvzUn-Bi0fcqd3tmZ3yGy1x/pub?w=1016&h=506" 
    class="imgMain" 
    style="max-width: 100%; cursor: pointer; transition: max-width 0.3s ease-in-out;"
    onclick="openModal(this.src)"
    title="Click to Zoom"
  />
</div>

<div style="text-align:center;">
<p><b>Figure 2: Enclave types</b></p>
</div>


<p style='text-align: justify;'>There is no single type of enclave. Many enclaves can be invented. As we can see in this figure, we have more options. It can be enclaves that are on the client side, meaning that there are enclaves that exist only inside the Wallets and are usually implemented in the form of DSUs. The Wallets made on DSUs already have the ability to store sensitive data because DSUs suddenly offer them encryption, integrity properties, and so on. Therefore, in some situations, enclaves can be implemented simply in the form of an Embedded DB. This is what we offer by default. On the other hand, if the wallets are not configured, a WalletDBEnclave is offered as the Wallet’s enclave.</p>

<p style='text-align: justify;'>There are two enclaves: WalletDBEnclave and Remote Enclave. The second enclave goes to a server to store the data, meaning it is no longer an Embedded DB. As we can see, we have different implementations for the enclave concept. The Enclave component offers some general APIs, but it has an implementation, meaning it can have a default based on Loki Enclave, or it can have others that will appear over time. Among these others that may occur, it is best to mention the enclaves that use a Key Management System (KMS) – which can be a KMS in the cloud or a KMS on hardware devices – or those that use the Trusted Execution Environment (TEE) offered by the operating system. Based on the level of some processors, it provides functionalities for managing secrets in hardware, TEE, or similar things. It should be mentioned that all these implementations must offer the same set of APIs, so we have an interface for these Remote Enclaves and even Embedded Enclaves that provide the same interface as other enclaves.</p>


## 1.1 Enclave methods

<p style='text-align: justify;'>The enclaves can be built to be used either as a database system or as a message communication system based on message queues in such a way that, depending on the type of enclave and the purpose for which it is used, it has access to a series of well-defined APIs.</p>

### 1.1.1 Elements access control

<p style='text-align: justify;'>The elements or control APIs exposed by the enclave concept to granularly manage the control over the stored data in the enclave are made by simple APIs such as grantAccess for a specific type of element, table, or information in the enclave or such as revokeAccess, which, for a certain identity, allows to restrict or cancel the access held until that time. At the same time, the enclave allows interaction between data stored inside and external users. In fact, the user who has control over an enclave and above the data from a particular enclave can share that data with one or more other users in an auditable and variable form.</p>


<div style="display: flex; justify-content: center;">
  <img 
    alt="" 
    src="https://docs.google.com/drawings/d/e/2PACX-1vS9f62bTRVPXnPuw_fCcp7YQH4x40RbY-vevzTxEXKpxenUGQ_QN3o-obnUoIKT10YCAJq3Axa1wd_8/pub?w=387&h=433" 
    class="imgMain" 
    style="max-width: 100%; cursor: pointer; transition: max-width 0.3s ease-in-out;"
    onclick="openModal(this.src)"
    title="Click to Zoom"
  />
</div>

<div style="text-align:center;">
 <p><b>Figure 3: Enclave Elements</b></p>
</div>


<p style='text-align: justify;'>Enclaves should provide multiple interfaces and should be able to work with them in different groups of APIs (for KSM, for DIDs, for signing using a DID, private KMS for DIDs and SSIs, message queues and tables). For the last one mentioned, we refer to records grouped in tables, based on which we can make queries.</p>

<p style='text-align: justify;'>One principle that should be taken into account and that should be carefully implemented in each of the enclave types listed here is that, ideally, the private or secret key should not “leave” the environment in which the enclave is instantiated. Therefore, this requires that all signing/encryption operations are performed inside the enclave and that the client does not request a private or secret key. In this way, the level of security is better. This remains to be seen about table queries, because the concept is still evolving.</p>




<div style="display: flex; justify-content: center;">
  <img 
    alt="" 
    src="https://docs.google.com/drawings/d/e/2PACX-1vSOzFAqYgAM1I334Mk4DaUHm_JAJhO6gbIjR_GlF1nFxicAwCZucVSDEi5vvPJzAL_oxPUd3h1dxSqa/pub?w=412&h=142" 
    class="imgMain" 
    style="max-width: 100%; cursor: pointer; transition: max-width 0.3s ease-in-out;"
    onclick="openModal(this.src)"
    title="Click to Zoom"
  />
</div>

<div style="text-align:center;">
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


| **Name** | **Type** | **Value** | **Description** |
|:---------|:---------|:----------|:----------------|
| callback | function | *required |                 |



**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                                      |
|:---------|:---------|:------------------------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the delete call. If err is undefined, the record was successfully deleted  |
| res      | string   | The identifier of a  <a href="https://www.opendsu.org/pages/advanced/W3C%20DIDs%20(RFC-082).html">DID document</a>                        |


### Function grantWriteAccess(forDID, callback)
**Description:** Grant write access to the current enclave for a certain DID.


### Function grantReadAccess(forDID, callback)
**Description**: Grant read access to the current enclave for a certain DID.


### Function RevokeWriteAccess(forDID, callback)
**Description**: Remove write access to the current enclave for a certain DID.



### Function RevokeReadAccess(forDID, callback)
**Description**: Remove read access to the current enclave for a certain DID.


## 1.3. Use enclaves as Databases


<p style='text-align: justify;'>When we talk about enclaves used as a database we have access to APIs such as insertRecord, getRecord, filterRecords, deleteRecord and updateRecord.
</p>

* insertRecord(forDID, table, pk, plainRecord, encRecord, callback)
* getRecord(forDID, table, pk, callback)
* filterRecords(forDID, table, filter, sort, max, callback)
    Where filter has the following form :

       [“filed op value”, …]
    Example [“id == 1”, “price >= 3”]

    Supported operations: !=, ==, >=, <, <=, like



* deleteRecord(forDID, table, pk, callback)
* updateRecord(forDID, table, pk, record, callback)


### Function insertRecord(forDID,  table, pk, plainRecord, encRecord, callback)

**Description:** This method inserts a record into the specified table of the enclave. If the  table does not exist it will be automatically created.



| **Name**    | **Type** | **Value** | **Description**                                        |
|:------------|:---------|:----------|:-------------------------------------------------------|
| forDID      | string   | *required | DID of the user executing the insert call.             |
| table       | string   | *required | Name of the table where the record should be inserted. |
| pk          | any      | *required | Primary key of the record to insert.                   |
| plainRecord | any      | *required | Record to be inserted.                                 |
| encRecord   | any      | optional  | Encrypted record.This feature is experimental.         |
| callback    | function | *required | Callback function.                                     |


**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                                       |
|:---------|:---------|:-------------------------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the insert call.If err is undefined, the record was successfully inserted.  |



### Function getRecord(forDID, table, pk, callback)

**Description:** This function retrieves the record with the specified primary key, pk, from the specified table.


| **Name**    | **Type** | **Value** | **Description**                                |
|:------------|:---------|:----------|:-----------------------------------------------|
| forDID      | string   | *required | DID of the user executing the call.            |
| table       | string   | *required | Name of the table .                            |
| pk          | any      | *required | Primary key of the record.                     |
| callback    | function | *required | Callback function.                             |


**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                                |
|:---------|:---------|:------------------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the call.If err is undefined, the record was successfully retrieved. |
| record   | any      | The retrieve record.                                                                                                                |



### Function filterRecords(forDID, table, filter, sort, max, callback)


**Description**: This function retrieves the records based on a specified filter.


| **Name** | **Type** | **Value** | **Description**                                                                                                                                                      |
|:---------|:---------|:----------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| forDID   | string   | *required | DID of the user executing the call.                                                                                                                                  |
| table    |          | *required | Name of the table .                                                                                                                                                  |
| filter   | array    | *required | The filter is an array of tuples <br/>[“field operation value”, …] <br/>Example [“id == 1”, “price >= 3”] <br/>Supported operations: !=, ==, >=, <, <=, like         |
| sort     |          | optional  | By default the records are sorted in ascending order based on the filter field. This can be explicitly specified using “asc” or “desc”.                              |
| max      |          | optional  | The maximum number of records to return. The default value is Infinity.                                                                                              |
| callback | function | *required | Callback function.                                                                                                                                                   |


**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                                  |
|:---------|:---------|:--------------------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the call. If err is undefined, the records were successfully retrieved.|
| record   | any      | The retrieve record.                                                                                                                  |


### Function deleteRecord(forDID, table, pk, callback)

**Description:** Delete the “pk” record from “table”.


| **Name** | **Type** | **Value** | **Description**                     |
|:---------|:---------|:----------|:------------------------------------|
| forDID   | string   | *required | DID of the user executing the call. |
| table    | string   | *required | Name of the table .                 |
| pk       | any      | *required | Primary key of record.              |
| callback | function | *required | Callback function.                  |


*Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                                    |
|:---------|:---------|:----------------------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the delete call.If err is undefined, the record was successfully deleted.|


### Function updateRecords(forDID, table, pk, record, callback)

**Description:** This method will replace the value of an existent record with a new one.


| **Name** | **Type** | **Value** | **Description**                                                                               |
|:---------|:---------|:----------|:----------------------------------------------------------------------------------------------|
| forDID   | string   | *required | DID of the user executing the call.                                                           |
| table    | string   | *required | Name of the table .                                                                           |
| pk       | any      | *required | Primary key of record.                                                                        |
| record   | any      | *required | The new value for the record with the specified primary key.                                  |
| callback | function | *required | Callback function.                                                                            |


**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                                    |
|:---------|:---------|:----------------------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the call. If err is undefined, the record was successfully updated.|


## 1.4. Use enclaves as Message Queues (experimental features)



When we refer to enclaves used as a communication system through Message Queues, we have access to APIs to add messages to the queue, to check the size of the message queue, to list a certain message queue etc.

* addInQueue(forDID, queueName, encryptedObject, callback) 
* queueSize(forDID, queueName, callback)
* listQueue(forDID, queueName, sortAfterInsertTime, onlyFirstN, callback) 
* * returns a list of hashes for onlyFirstN messages
* getObjectFromQueue(forDID, queueName, hash,callback)
* deleteObjectFromQueue(forDID, queueName, hash,callback)



### Function addlnQueue(forDID, queueName, encryptedObject, callback)

**Description:** This method will add a message in the queue with the specified name.



| **Name**        | **Type** | **Value** | **Description**                     |
|:----------------|:---------|:----------|:------------------------------------|
| forDID          | string   | *required | DID of the user executing the call. |
| queueName       | string   | *required | Name of the queue                   |
| encryptedObject | any      | *required | The message to add in the queue.    |
| callback        | function | *required | Callback function.                  |


**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                             |
|:---------|:---------|:---------------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the call.If err is undefined, the message was successfully added. |



### Function queueSize(forDID, queueName, callback)


**Description:** Function used to retrieve the current number of messages in a queue.


| **Name**        | **Type** | **Value** | **Description**                     |
|:----------------|:---------|:----------|:------------------------------------|
| forDID          | string   | *required | DID of the user executing the call. |
| queueName       | string   | *required | Name of the queue                   |
| callback        | function | *required | Callback function.                  |


**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                                                                                   |
|:---------|:---------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the call. If err is undefined, the queue size is retrieved.                                                             |
| size     | int      | The current number of messages in the specified queue.                                                                                                                                 |



### Function listQueue(forDID, queueName, sortAfterInsertTime, onlyFirstN, callback)


**Description:** Return a list of identifiers for the messages in the specified queue

| **Name**            | **Type** | **Value** | **Description**                                                                                  |
|:--------------------|:---------|:----------|:-------------------------------------------------------------------------------------------------|
| forDID              | string   | *required | DID of the user executing the call.                                                              |
| queueName           | string   | *required | Name of the queue                                                                                |
| sortAfterInsertTIme | string   | optional  | The order by which the items are sorted by time of insert in the queue. Default value is “asc”.  |
| onlyFirsttN         | int      | optional  | Maximum number of messages to be returned.                                                       |
| callback            | function | *required | Callback function.                                                                               |


**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                                               |
|:---------|:---------|:---------------------------------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the call. If err is undefined, the messages list is retrieved.                      |
| messages | array    | List of message identifiers.                                                                                                                       |



### Function getObjectFromQueue(forDID, queueName, hash, callback)

**Description:** Retrieves a message from the queue based on the object hash.


| **Name**  | **Type** | **Value** | **Description**                     |
|:----------|:---------|:----------|:------------------------------------|
| forDID    | string   | *required | DID of the user executing the call. |
| queueName | string   | *required | Name of the queue                   |
| hash      | string   | *required | Hash of the object to be retrieved. |
| callback  | function | *required | Callback function.                  |


**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                     |
|:---------|:---------|:-------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the call. If err is undefined, the message is retrieved.  |
| messages | any      | The retrieved message.                                                                                                   |



### Function deleteObjectFromQueue(forDID, queueName, hash, callback)

**Description:** Delete an object from “queueName”.


| **Name**  | **Type** | **Value** | **Description**                     |
|:----------|:---------|:----------|:------------------------------------|
| forDID    | string   | *required | DID of the user executing the call. |
| queueName | string   | *required | Name of the queue                   |
| hash      | string   | *required | Hash of the object to be deleted.   |
| callback  | function | *required | Callback function.                  |


**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                              |
|:---------|:---------|:----------------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the delete call. If err is undefined, the message was deleted. |    



## 1.5. Use enclaves as Key Management Systems

<p style='text-align: justify;'>When we talk about enclaves used as a Key Management System, we refer to a collection of APIs that allow us to store and interact with KeySSIs for different DSUs. KeySSI Storage is created in order to be able to keep in a secure environment the keys with write rights and the keys with the ability to demonstrate the ownership of an entity or user over the DSU. As a result, the enclaves used as KeySSI Management System can store SeedSSIs or DIDs, and based on them, it can allow signing, encryption and decryption of messages or new versions of DSUs.
</p>

* storeKeySSI(forDID, keySSI, callback)
* generateSeedSSI(forDID, hint, callback)
* storeDID(forDID, storedDID, privateKeys)
* generateDID(forDID,didMethod, ...args)
* storePrivateKey(forDID, privateKey, type, alias)
* storeSecretKey(forDID, secretKey, alias)
* generateSecretKey(forDID,secretKeyAlias)


### Function storeKeySSI(forDID,  keySSI, callback)

**Description:** This function is used to store a key SSI.


| **Name** | **Type** | **Value** | **Description**                     |
|:---------|:---------|:----------|:------------------------------------|
| forDID   | string   | *required | DID of the user executing the call. |
| KeySSI   | string   | *required | KeySSI to store.                    |
| callback | function | *required | Callback function.                  |


**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                               |
|:---------|:---------|:-----------------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the insert call. If err is undefined, the keySSI was stored.        | 


### Function createSeedSSI(forDID, hint, callback)

<p style='text-align: justify;'><b>Description: </b>This function is used to generate a Seed SSI. For additional information see <a href="https://www.opendsu.org/pages/advanced/KeySSI%20(RFC-068).html">RFC-068</a>
</p>

**Description:** This function is used to store a key SSI.


| **Name** | **Type** | **Value** | **Description**                                         |
|:---------|:---------|:----------|:--------------------------------------------------------|
| forDID   | string   | *required | DID of the user executing the call.                     |
| enclave  | object   | *required | Current enclave object.                                 |
| domain   | string   | *required | The blockchain domain of the SSI key you want to build. |
| vn       | string   | optional  | Version number of the SSI Type.                         |
| hint     | object   | optional  | hint for the KeySSi resolver.                           |
| callback | function | *required | Callback function.                                      |


**Callback parameters**

| **Name** | **Type** | **Response example**                                                            |
|:---------|:---------|:--------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the insert call. | 
| seedSSI  | any      | The created seed SSI.                                                           |



##3 Function storeDID(forDID, storedDID, privateKeys)

**Description**:  Function used to store a DID.


| **Name**    | **Type** | **Value** | **Description**                             |
|:------------|:---------|:----------|:--------------------------------------------|
| forDID      | string   | optional  | DID of the user executing the call.         |
| storedDID   | object   | *required | The DID document object to be stored.       |
| privateKeys | array    | *required | A list of private keys of the DID document. |
| callback    | function | *required | Callback function.                          |


**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                     |
|:---------|:---------|:-------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the insert call. If err is undefined, the DID was stored. | 


### Function generateDID(forDID, didMethod,...args)

**Description**: Function that created a DID with the specified DID method.


| **Name**  | **Type** | **Value** | **Description**                                                                                                                                               |
|:----------|:---------|:----------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| forDID    | string   | *required | DID of the user executing the call.                                                                                                                           |
| didMethod | string   | *required | The DID method.                                                                                                                                               |
| args      | array    | *required | Arguments required for DID creation. For additional information see<a href="https://www.opendsu.org/pages/advanced/W3C%20DIDs%20(RFC-082).html"> RFC-082 </a> |


**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                       |
|:---------|:---------|:---------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the call.If err is undefined, the generated DID is returned |
| key      | any      | The generated DID.                                                                                                         |



### Function storePrivateKey(forDID, privateKey, type, alias)

**Description:** Store a specified private key.


| **Name**   | **Type** | **Value** | **Description**                                                     |
|:-----------|:---------|:----------|:--------------------------------------------------------------------|
| forDID     | string   | *required | DID of the user executing the call.                                 |
| privateKey | string   | *required | Private key to store.                                               |
| type       | string   | *required | Private key type.                                                   |
| alias      | string   | optional  | Private key identifier, will be randomly generated if not specified |
| callback   | function | *required | Callback function                                                   |


**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                               |
|:---------|:---------|:-----------------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the call. If err is undefined, the stored private key is returned.  |
| key      | any      | The stored private key.                                                                                                            |



### Function storeSecretKey(forDID, secretKey, alias)


**Description:** Store a specified secret key.



| **Name**  | **Type** | **Value** | **Description**                                                                                      |
|:----------|:---------|:----------|:-----------------------------------------------------------------------------------------------------|
| forDID    | string   | *required | DID of the user executing the call.                                                                  |
| secretKey | string   | *required | Secrete key to store.                                                                                |
| alias     | string   | optional  | Secret key identifier, will be randomly generated if not specified.                                  |
| callback  | function | *required | Callback function                                                                                    |


**Callback parameters**

| **Name** | **Type**                                                                                                                                  | **Response example**                                                                                                            |
|:---------|:------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| err      | any      |Error message for errors that occurred during the execution of the call. err is undefined, the stored secret key is returned    |
| key      | any                                                                                                                                       | The stored private key.                                                                                                         |

