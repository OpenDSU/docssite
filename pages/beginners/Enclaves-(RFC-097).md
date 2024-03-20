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




# **Enclaves (RFC-097)**
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
    * [Function grantWriteAccess(forDID, callback)](#function-grantwriteaccessfordid-callback)
    * [Function grantReadAccess(forDID, callback)](#function-grantreadaccessfordid-callback)
    * [Function RevokeWriteAccess(forDID, callback)](#function-revokewriteaccessfordid-callback)
    * [Function RevokeReadAccess(forDID, callback)](#function-revokereadaccessfordid-callback)
  * [1.3. Use enclaves as Databases](#13-use-enclaves-as-databases)
    * [Function insertRecord(forDID,  table, pk, plainRecord, encRecord, callback)](#function-insertrecordfordid-table-pk-plainrecord-encrecord-callback)
    * [Function getRecord(forDID, table, pk, callback)](#function-getrecordfordid-table-pk-callback)
    * [Function filterRecords(forDID, table, filter, sort, max, callback)](#function-filterrecordsfordid-table-filter-sort-max-callback)
    * [Function deleteRecord(forDID, table, pk, callback)](#function-deleterecordfordid-table-pk-callback)
    * [Function updateRecords(forDID, table, pk, record, callback)](#function-updaterecordsfordid-table-pk-record-callback)
  * [1.4. Use enclaves as Message Queues (experimental features)](#14-use-enclaves-as-message-queues-experimental-features)
    * [Function addlnQueue(forDID, queueName, encryptedObject, callback)](#function-addlnqueuefordid-queuename-encryptedobject-callback)
    * [Function queueSize(forDID, queueName, callback)](#function-queuesizefordid-queuename-callback)
    * [Function listQueue(forDID, queueName, sortAfterInsertTime, onlyFirstN, callback)](#function-listqueuefordid-queuename-sortafterinserttime-onlyfirstn-callback)
    * [Function getObjectFromQueue(forDID, queueName, hash, callback)](#function-getobjectfromqueuefordid-queuename-hash-callback)
    * [Function deleteObjectFromQueue(forDID, queueName, hash, callback)](#function-deleteobjectfromqueuefordid-queuename-hash-callback)
  * [1.5. Use enclaves as Key Management Systems](#15-use-enclaves-as-key-management-systems)
    * [Function storeKeySSI(forDID,  keySSI, callback)](#function-storekeyssifordid-keyssi-callback)
    * [Function createSeedSSI(forDID, hint, callback)](#function-createseedssifordid-hint-callback)
    * [Function storeDID(forDID, storedDID, privateKeys)](#function-storedidfordid-storeddid-privatekeys)
    * [Function generateDID(forDID, didMethod,...args)](#function-generatedidfordid-didmethodargs)
    * [Function storePrivateKey(forDID, privateKey, type, alias)](#function-storeprivatekeyfordid-privatekey-type-alias)
    * [Function storeSecretKey(forDID, secretKey, alias)](#function-storesecretkeyfordid-secretkey-alias)
    * [Function generateSecretKey(forDID, secretKeyAlias)](#function-generatesecretkeyfordid-secretkeyalias)
  * [1.6. Cryptographic functionality offered by enclaves](#16-cryptographic-functionality-offered-by-enclaves)
    * [Function signForDID(forDID, didThatIsSigning, hash)](#function-signfordidfordid-didthatissigning-hash)
    * [Function signForKeySSI(forDID, keySSIThatIsSigning, hash)](#function-signforkeyssifordid-keyssithatissigning-hash)
    * [Function encryptAES(forDID, secretKeyAlias, message, AESParams)](#function-encryptaesfordid-secretkeyalias-message-aesparams)
    * [Function decryptAES(forDID, secretKeyAlias, encryptedMessage, AESParams)](#function-decryptaesfordid-secretkeyalias-encryptedmessage-aesparams)
    * [Function encryptMessage(forDID, didFrom, didTo, message)](#function-encryptmessagefordid-didfrom-didto-message)
    * [Function decryptMessage(forDID, didTo, encryptedMessage, callback)](#function-decryptmessagefordid-didto-encryptedmessage-callback)
  * [1.7. KeySSI specific functions](#17-keyssi-specific-functions)
    * [Function storeReadForAliasSSI(forDID, sReadSSI, aliasSSI, callback)](#function-storereadforaliasssifordid-sreadssi-aliasssi-callback)
    * [Function getReadForKeySSI(forDID, keySSI, callback)](#function-getreadforkeyssifordid-keyssi-callback)
  * [1.8. DSU Resolver specific functions](#18-dsu-resolver-specific-functions)
    * [Function createDSU(forDID, keySSI, options, callback)](#function-createdsufordid-keyssi-options-callback)
    * [Function loadDSU(forDID, keySSI, options, callback)](#function-loaddsufordid-keyssi-options-callback)
  * [1.9. W3C DIDs specific functions](#19-w3c-dids-specific-functions)
    * [Function addPrivateKeyForDID(didDocument, privateKey, callback)](#function-addprivatekeyfordiddiddocument-privatekey-callback)
    * [Function verifyForDID(forDID, didThatIsVerifying, hash, signature, callback)](#function-verifyfordidfordid-didthatisverifying-hash-signature-callback-)
    * [1.9.1. Enclaves with Deterministic Key Derivation](#191-enclaves-with-deterministic-key-derivation)
* [2. OpenDSU SDK implementations](#2-opendsu-sdk-implementations)
  * [2.1. Initiating Functions in Enclave API](#21-initiating-functions-in-enclave-api)
    * [Function initialiseWalletDBEnclave(keySSI, did)](#function-initialisewalletdbenclavekeyssi-did)
    * [Function initialiseMemoryEnclave()](#function-initialisememoryenclave)
    * [Function initialiseRemoteEnclave(clientDID, remoteDID)](#function-initialiseremoteenclaveclientdid-remotedid)
    * [Function createEnclave(enclaveType, …args)](#function-createenclaveenclavetype-args)
    * [Function registerEnclave(enclaveType, enclaveConstructor)](#function-registerenclaveenclavetype-enclaveconstructor)
* [**3. Deployment**](#3-deployment)
  * [3.1. EnclaveAdapters are typically separate containers](#31-enclaveadapters-are-typically-separate-containers)
  * [3.2. Native Enclaves](#32-native-enclaves)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->





# **Abstract**

<p style='text-align: justify;'>OpenDSU Enclaves is a concept that allows storing sensitive data and controlling access to it in the most granular way possible. The concept represents or presents similarities with a database, a communication system based on Message Queues, or a Key Management System. The OpenDSU Enclaves concept has been and is being implemented and used for the first time, along with another OpenDSU concept named “Security Context”.
</p>The idea of how OpenDSU evolved and how it continues to evolve is to no longer remove the secret keys and the private keys outside the enclave but to do all cryptographic operations inside the enclave. The concept of the enclave has been refactored with OpenDSU to convey more clearly that all operations with secret keys, signatures, and decryptions are made at the enclave level. After this step, it can be chosen where it is actually executed.


# **1. OpenDSU SDK: “enclave” API Space**


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


<p style='text-align: justify;'>As presented in Security Context <a href="https://www.opendsu.org/pages/beginners/Security-Context-(RFC-075).html">RFC-075</a> , the enclave is a system for storing Private Keys for DIDs, Secret Keys for symmetric AES type encryption or records represented in tabular form, as a database. These records may contain different types of data, more or less sensitive, but if the user has decided to treat them, then he probably has a reason to put them inside the Wallet and the Enclave. An essential function of the enclave is to keep the KeySSIs to which the Wallet has access.
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

* getEnclaveDID()
* grantAccess(forDID, elementType, elementAlias, accesType,  adminSignature, callback) 
  * elementType: “enclave”, “table”, “did”, “secretKey”,” publicKey”, queue
  * elementAlias can be a specific value (the name or alias of a specific element as string) or  the "*" wildcard
  * accesType can be “read” or “write” 
* revokeAccess(forDID, elementType, elementAlias, accesType, adminSignature, callback)




### Function getDID(callback)

**Description**: This method is called in order to receive the DID document identifier of the enclave.


| **Name** | **Type** | **Value** | **Description** |
|:---------|:---------|:----------|:----------------|
| callback | function | *required |                 |



**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                                      |
|:---------|:---------|:------------------------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the delete call. If err is undefined, the record was successfully deleted  |
| res      | string   | The identifier of a  <a href="https://www.opendsu.org/pages/advanced/W3C-DIDs-(RFC-082).html">DID document</a>                        |


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
| encRecord   | any      | optional  | Encrypted record. This feature is experimental.        |
| callback    | function | *required | Callback function.                                     |


**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                                       |
|:---------|:---------|:-------------------------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the insert call. <br/>If err is undefined, the record was successfully inserted. |



### Function getRecord(forDID, table, pk, callback)

**Description:** This function retrieves the record with the specified primary key, pk, from the specified table.


| **Name**    | **Type** | **Value** | **Description**                                |
|:------------|:---------|:----------|:-----------------------------------------------|
| forDID      | string   | *required | DID of the user executing the call.            |
| table       | string   | *required | Name of the table .                            |
| pk          | any      | *required | Primary key of the record.                     |
| callback    | function | *required | Callback function.                             |


**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                                 |
|:---------|:---------|:-------------------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the call. <br/>If err is undefined, the record was successfully retrieved. |
| record   | any      | The retrieve record.                                                                                                                 |



### Function filterRecords(forDID, table, filter, sort, max, callback)


**Description**: This function retrieves the records based on a specified filter.


| **Name** | **Type** | **Value** | **Description**                                                                                                                                              |
|:---------|:---------|:----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| forDID   | string   | *required | DID of the user executing the call.                                                                                                                          |
| table    |          | *required | Name of the table .                                                                                                                                          |
| filter   | array    | *required | The filter is an array of tuples <br/>[“field operation value”, …] <br/>Example [“id == 1”, “price >= 3”] <br/>Supported operations: !=, ==, >=, <, <=, like |
| sort     |          | optional  | By default the records are sorted in ascending order based on the filter field. This can be explicitly specified using “asc” or “desc”.                      |
| max      |          | optional  | The maximum number of records to return. <br/> The default value is Infinity.                                                                                |
| callback | function | *required | Callback function.                                                                                                                                           |


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


**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                                            |
|:---------|:---------|:------------------------------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the delete call. <br/> If err is undefined, the record was successfully deleted. |


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

| **Name** | **Type** | **Response example**                                                                                                                |
|:---------|:---------|:------------------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the call. <br/> If err is undefined, the record was successfully updated. |


## 1.4. Use enclaves as Message Queues (experimental features)



When we refer to enclaves used as a communication system through Message Queues, we have access to APIs to add messages to the queue, to check the size of the message queue, to list a certain message queue etc.

* addInQueue(forDID, queueName, encryptedObject, callback) 
* queueSize(forDID, queueName, callback)
* listQueue(forDID, queueName, sortAfterInsertTime, onlyFirstN, callback) 
   * returns a list of hashes for onlyFirstN messages
* getObjectFromQueue(forDID, queueName, hash,callback)
* deleteObjectFromQueue(forDID, queueName, hash,callback)



### Function addlnQueue(forDID, queueName, encryptedObject, callback)

**Description:** This method will add a message in the queue with the specified name.



| **Name**        | **Type** | **Value** | **Description**                     |
|:----------------|:---------|:----------|:------------------------------------|
| forDID          | string   | *required | DID of the user executing the call. |
| queueName       | string   | *required | Name of the queue.                  |
| encryptedObject | any      | *required | The message to add in the queue.    |
| callback        | function | *required | Callback function.                  |


**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                                    |
|:---------|:---------|:----------------------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the call. <br/> If err is undefined, the message was successfully added. |



### Function queueSize(forDID, queueName, callback)


**Description:** Function used to retrieve the current number of messages in a queue.


| **Name**        | **Type** | **Value** | **Description**                     |
|:----------------|:---------|:----------|:------------------------------------|
| forDID          | string   | *required | DID of the user executing the call. |
| queueName       | string   | *required | Name of the queue.                  |
| callback        | function | *required | Callback function.                  |


**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                             |
|:---------|:---------|:---------------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the call. <br/> If err is undefined, the queue size is retrieved. |
| size     | int      | The current number of messages in the specified queue.                                                                           |



### Function listQueue(forDID, queueName, sortAfterInsertTime, onlyFirstN, callback)


**Description:** Return a list of identifiers for the messages in the specified queue.

| **Name**            | **Type** | **Value** | **Description**                                                                                      |
|:--------------------|:---------|:----------|:-----------------------------------------------------------------------------------------------------|
| forDID              | string   | *required | DID of the user executing the call.                                                                  |
| queueName           | string   | *required | Name of the queue.                                                                                   |
| sortAfterInsertTIme | string   | optional  | The order by which the items are sorted by time of insert in the queue.<br/> Default value is “asc”. |
| onlyFirsttN         | int      | optional  | Maximum number of messages to be returned.                                                           |
| callback            | function | *required | Callback function.                                                                                   |


**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                                |
|:---------|:---------|:------------------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the call. <br/> If err is undefined, the messages list is retrieved. |
| messages | array    | List of message identifiers.                                                                                                        |



### Function getObjectFromQueue(forDID, queueName, hash, callback)

**Description:** Retrieves a message from the queue based on the object hash.


| **Name**  | **Type** | **Value** | **Description**                     |
|:----------|:---------|:----------|:------------------------------------|
| forDID    | string   | *required | DID of the user executing the call. |
| queueName | string   | *required | Name of the queue.                  |
| hash      | string   | *required | Hash of the object to be retrieved. |
| callback  | function | *required | Callback function.                  |


**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                          |
|:---------|:---------|:------------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the call. <br/> If err is undefined, the message is retrieved. |
| messages | any      | The retrieved message.                                                                                                        |



### Function deleteObjectFromQueue(forDID, queueName, hash, callback)

**Description:** Delete an object from “queueName”.


| **Name**  | **Type** | **Value** | **Description**                     |
|:----------|:---------|:----------|:------------------------------------|
| forDID    | string   | *required | DID of the user executing the call. |
| queueName | string   | *required | Name of the queue.                  |
| hash      | string   | *required | Hash of the object to be deleted.   |
| callback  | function | *required | Callback function.                  |


**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                                |
|:---------|:---------|:------------------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the delete call. <br/> If err is undefined, the message was deleted. |    



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
| keySSI   | string   | *required | KeySSI to store.                    |
| callback | function | *required | Callback function.                  |


**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                              |
|:---------|:---------|:----------------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the insert call. <br/> If err is undefined, the keySSI was stored. | 


### Function createSeedSSI(forDID, hint, callback)

<p style='text-align: justify;'><b>Description: </b>This function is used to generate a Seed SSI. For additional information see <a href="https://www.opendsu.org/pages/advanced/KeySSI-(RFC-068).html">RFC-068</a>
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

| **Name** | **Type** | **Response example**                                                                                                                |
|:---------|:---------|:------------------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the insert call. <br/>If err is undefined, the seed SSI was created. | 
| seedSSI  | any      | The created seed SSI.                                                                                                               |



### Function storeDID(forDID, storedDID, privateKeys)

**Description**:  Function used to store a DID.


| **Name**    | **Type** | **Value** | **Description**                             |
|:------------|:---------|:----------|:--------------------------------------------|
| forDID      | string   | optional  | DID of the user executing the call.         |
| storedDID   | object   | *required | The DID document object to be stored.       |
| privateKeys | array    | *required | A list of private keys of the DID document. |
| callback    | function | *required | Callback function.                          |


**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                           |
|:---------|:---------|:-------------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the insert call. <br/> If err is undefined, the DID was stored. | 


### Function generateDID(forDID, didMethod,...args)

**Description**: Function that created a DID with the specified DID method.


| **Name**  | **Type** | **Value** | **Description**                                                                                                                                               |
|:----------|:---------|:----------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| forDID    | string   | *required | DID of the user executing the call.                                                                                                                           |
| didMethod | string   | *required | The DID method.                                                                                                                                               |
| args      | array    | *required | Arguments required for DID creation. For additional information see<a href="https://www.opendsu.org/pages/advanced/W3C-DIDs-(RFC-082).html"> RFC-082 </a> |


**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                              |
|:---------|:---------|:----------------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the call. <br/> If err is undefined, the generated DID is returned |
| key      | any      | The generated DID.                                                                                                                |



### Function storePrivateKey(forDID, privateKey, type, alias)

**Description:** Store a specified private key.


| **Name**   | **Type** | **Value** | **Description**                                                     |
|:-----------|:---------|:----------|:--------------------------------------------------------------------|
| forDID     | string   | *required | DID of the user executing the call.                                 |
| privateKey | string   | *required | Private key to store.                                               |
| type       | string   | *required | Private key type.                                                   |
| alias      | string   | optional  | Private key identifier, will be randomly generated if not specified |
| callback   | function | *required | Callback function.                                                  |


**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                                    |
|:---------|:---------|:----------------------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the call. <br/> If err is undefined, the stored private key is returned. |
| key      | any      | The stored private key.                                                                                                                 |



### Function storeSecretKey(forDID, secretKey, alias)


**Description:** Store a specified secret key.



| **Name**  | **Type** | **Value** | **Description**                                                                                      |
|:----------|:---------|:----------|:-----------------------------------------------------------------------------------------------------|
| forDID    | string   | *required | DID of the user executing the call.                                                                  |
| secretKey | string   | *required | Secrete key to store.                                                                                |
| alias     | string   | optional  | Secret key identifier, will be randomly generated if not specified.                                  |
| callback  | function | *required | Callback function                                                                                    |


**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                                   |
|:---------|:---------|:---------------------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the call. <br/> If err is undefined, the stored secret key is returned. |
| key      | any      | The stored secret key.                                                                                                                 |   


### Function generateSecretKey(forDID, secretKeyAlias)


**Description:** Generate and store a 32 bytes secret encryption key.


| **Name**       | **Type** | **Value** | **Description**                                                      |
|:---------------|:---------|:----------|:---------------------------------------------------------------------|
| forDID         | string   | *required | DID of the user executing the call.                                  |
| secretKeyAlias | string   | optional  | Secrete key identifier, will be randomly generated if not specified. |


**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                                       |
|:---------|:---------|:-------------------------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the call. <br/>  If err is undefined, the generated secret key is returned. |
| key      | any      | The generated secret key.                                                                                                                  |   



## 1.6. Cryptographic functionality offered by enclaves

* signForDID(forDID, didThatIsSigning, hash)
* keySSISign(forDID, keySSIThatIsSigning, hash)
* encryptAES(forDID, secretKeyAlias, message, AESParams)
* encryptMessage(forDID, didFrom, didTo, message)
* decryptMessage(forDID, didTo, encryptedMessage, callback)



### Function signForDID(forDID, didThatIsSigning, hash)

**Description:** Method that signs a message with the private key of the DID document.


| **Name**         | **Type** | **Value** | **Description**      |
|:-----------------|:---------|:----------|:---------------------|
| forDID           | string   | optional  | DID to sign for.     |
| didThatIsSigning | object   | *required | DID that is signing. |
| hash             | string   | *required | Data to signed.      |
| callback         | function | *required | Callback function.   |

**Callback parameters**

| **Name**  | **Type** | **Response example**                                                                                                            |
|:----------|:---------|:--------------------------------------------------------------------------------------------------------------------------------|
| err       | any      | Error message for errors that occurred during the execution of the call. <br/> If err is undefined, the signature is retrieved. |
| signature | any      | The signed hash.                                                                                                                |   


### Function signForKeySSI(forDID, keySSIThatIsSigning, hash)

**Description:** Method that signs a message with the keySSI.


| **Name**            | **Type** | **Value** | **Description**                     |
|:--------------------|:---------|:----------|:------------------------------------|
| forDID              | string   | optional  | DID of the user executing the call. |
| keySSIThatIsSigning | object   | *required | key SSI to sign the message with    |
| hash                | string   | *required | Data to  be sign.                   |
| callback            | function | *required | Callback function.                  |

**Callback parameters**

| **Name**  | **Type**  | **Response example**                                                                                                            |
|:----------|:----------|:--------------------------------------------------------------------------------------------------------------------------------|
| err       | any       | Error message for errors that occurred during the execution of the call. <br/> If err is undefined, the signature is retrieved. |
| signature | any       | The signed hash.                                                                                                                |                   



### Function encryptAES(forDID, secretKeyAlias, message, AESParams)

**Description:** Function that encrypts the message with the secret key stored under the specified alias.


| **Name**       | **Type** | **Value** | **Description**                                                                    |
|:---------------|:---------|:----------|:-----------------------------------------------------------------------------------|
| forDID         | string   | *required | DID of the user executing the call.                                                |
| secretKeyAlias | string   | *required | The identifier of the stored secret key to be used for encryption.                 |
| message        | string   | *required | Message to encrypt.                                                                |
| AESParams      | object   | optional  | Encryption options                                                                 |
| callback       | function | *required | Callback function.                                                                 |

**Callback parameters**

| **Name** | **Type**  | **Response example**                                                                                                                    |
|:---------|:----------|:----------------------------------------------------------------------------------------------------------------------------------------|
| err      | any       | Error message for errors that occurred during the execution of the call. <br/> If err is undefined, the encrypted message was received. |
| message  | any       | The encrypted message.                                                                                                                  |



### Function decryptAES(forDID, secretKeyAlias, encryptedMessage, AESParams)

**Description:** Function that decrypts the message using the secret key stored under the specified alias.


| **Name**         | **Type** | **Value** | **Description**                                                    |
|:-----------------|:---------|:----------|:-------------------------------------------------------------------|
| forDID           | string   | *required | DID of the user executing the call.                                |
| secretKeyAlias   | string   | *required | The identifier of the stored secret key to be used for decryption. |
| encryptedMessage | string   | *required | Message to encrypt.                                                |
| AESParams        | object   | optional  | Decryption options                                                 |
| callback         | function | *required | Callback function.                                                 |


**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                                    |
|:---------|:---------|:----------------------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the call. <br/> If err is undefined, the decrypted message was received. |
| message  | any      | The decrypted message.                                                                                                                  |


### Function encryptMessage(forDID, didFrom, didTo, message)

**Description:** Method that encrypts the message with the public key of the receiving DID.


| **Name** | **Type** | **Value** | **Description**                       |
|:---------|:---------|:----------|:--------------------------------------|
| forDID   | string   | optional  | DID of the user executing the call.   |
| didForm  | object   | *required | DID that encrypts the message.        |
| didTo    | object   | *required | DID to receive the encrypted message. |
| message  | any      | *required | Data to be encrypted.                 |
| callback | function | *required | Callback function.                    |


**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                                    |
|:---------|:---------|:----------------------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the call. <br/> If err is undefined, the encrypted message was received. |
| message  | any      | The encrypted message.                                                                                                                  |


### Function decryptMessage(forDID, didTo, encryptedMessage, callback)

**Description:** Method that decrypts the message with the private key of the receiving DID.


| **Name** | **Type** | **Value** | **Description**                     |
|:---------|:---------|:----------|:------------------------------------|
| forDID   | string   | optional  | DID of the user executing the call. |
| didTo    | object   | *required | DID that encrypts the message.      |
| message  | any      | *required | Encrypted data.                     |
| callback | function | *required | Callback function.                  |


**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                                   |
|:---------|:---------|:---------------------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the call. <br/> If err is undefined, the decrypted message was received |
| message  | any      | TheThe decrypted message.                                                                                                              |                                                                 


## 1.7. KeySSI specific functions

* storeKeySSI(forDID, keySSI, callback) - already described <a href="https://www.opendsu.org/pages/beginners/Enclaves-(RFC-097).html#function-storesecretkeyfordid-secretkey-alias">here</a>
* storeReadForAliasSSI(forDID, sReadSSI, aliasSSI, callback)
* getReadForKeySSI(forDID, keySSI, callback)
* signForKeySSI(forDID, keySSI, hash, callback) - already described <a href="https://www.opendsu.org/pages/beginners/Enclaves-(RFC-097).html#function-signforkeyssifordid-keyssithatissigning-hash">here</a>

Enclaves also expose the whole keySSI API. 

<p style='text-align: justify;'>More information about this api can be found in <a href="https://www.opendsu.org/pages/advanced/KeySSI-(RFC-068).html">RFC-068</a>
</p>



### Function storeReadForAliasSSI(forDID, sReadSSI, aliasSSI, callback)

**Description:** Method that stores a sReadSSI under the specified alias.


| **Name** | **Type** | **Value** | **Description**                     |
|:---------|:---------|:----------|:------------------------------------|
| forDID   | string   | optional  | DID of the user executing the call. |
| sReadSSI | string   | *required | sReadSSI to store under aliasSSI.   |
| aliasSSI | string   | *required | AliasSSI for sReadSSI.              |
| callback | function | *required | Callback function.                  |


**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                         |
|:---------|:---------|:-----------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the call. <br/> If err is undefined, the sReadSSI was stored. | 


### Function getReadForKeySSI(forDID, keySSI, callback)

**Description:** Method that provides a sReadSSI for a specified keySSI.



| **Name** | **Type** | **Value** | **Description**                            |
|:---------|:---------|:----------|:-------------------------------------------|
| forDID   | string   | optional  | DID of the user executing the call.        |
| keySSI   | object   | *required | KeySSI for which to generate the sReadSSI. |
| callback | function | *required | Callback function.                         |


**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                            |
|:---------|:---------|:--------------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the call.  <br/>If err is undefined, the sReadSSI was retrieved. |
| sReadSSI | any      | The read for the keySSI.                                                                                                        |

## 1.8. DSU Resolver specific functions

* createDSU(forDID, keySSI, options, callback)
* loadDSU(forDID, keySSI, options, callback)


### Function createDSU(forDID, keySSI, options, callback)
**Description:** Method that creates a DSU for the specified keySSI.



| **Name** | **Type** | **Value** | **Description**                     |
|:---------|:---------|:----------|:------------------------------------|
| forDID   | string   | optional  | DID of the user executing the call. |
| keySSI   | object   | *required | KeySSI for which to create the DSU. |
| options  | object   | optional  | DSU option.                         |
| callback | function | *required | Callback function.                  |


**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                    |
|:---------|:---------|:------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the call.<br/> If err is undefined, the DSU was created. |



### Function loadDSU(forDID, keySSI, options, callback)

**Description:** Method that loads a DSU with the specified keySSI.


| **Name** | **Type** | **Value** | **Description**                     |
|:---------|:---------|:----------|:------------------------------------|
| forDID   | string   | optional  | DID of the user executing the call. |
| keySSI   | object   | *required | KeySSI for which to load the DSU.   |
| options  | object   | optional  | DSU option.                         |
| callback | function | *required | Callback function.                  |


**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                   |
|:---------|:---------|:-----------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the call. <br/>If err is undefined, the DSU was loaded. |
| dsu      | object   | The loaded DSU.                                                                                                        |

## 1.9. W3C DIDs specific functions


* getDID(callback) - already described <a href="https://www.opendsu.org/pages/beginners/Enclaves-(RFC-097).html#function-getdidcallback">here</a>
* storeDID(forDID, storedDID, privateKeys, callback) 
* addPrivateKeyForDID(didDocument, privateKey, callback)
* generateDID(forDID, didMethod, ...args) - already described here
* signForDID(forDID, didThatIsSigning, hash, callback) - already described <a href="https://www.opendsu.org/pages/beginners/Enclaves-(RFC-097).html#function-signfordidfordid-didthatissigning-hash">here</a>
* verifyForDID(forDID, didThatIsVerifying, hash, signature, callback) 

Enclaves also expose the whole W3C DIDs API. More information about this api can be found in <a href="https://www.opendsu.org/pages/advanced/W3C-DIDs-(RFC-082).html">RFC-082</a>



### Function addPrivateKeyForDID(didDocument, privateKey, callback)

**Description:** Method that adds a private key to the didDocuments’s private keys list.


| **Name**    | **Type** | **Value** | **Description**               |
|:------------|:---------|:----------|:------------------------------|
| didDocument | object   | *required | The DID to update.            |
| privateKey  | string   | *required | New private key to be loaded, |
| callback    | function | *required | Callback function.            |


**Callback parameters**

| **Name** | **Type** | **Response example**                                                                                                           |
|:---------|:---------|:-------------------------------------------------------------------------------------------------------------------------------|
| err      | any      | Error message for errors that occurred during the execution of the call. <br/> If err is undefined, the private key was added. |
| dsu      | object   | The loaded DSU.                                                                                                                |

### Function verifyForDID(forDID, didThatIsVerifying, hash, signature, callback) 

**Description:** Method that verifies the signature of a message for a specified did.


| **Name**           | **Type** | **Value** | **Description**                                                         |
|:-------------------|:---------|:----------|:------------------------------------------------------------------------|
| forDID             | object   | optional  | DID of the user executing the call.                                     |
| didThatIsVerifying | string   | *required | DID that will verify the signature of the message using its public key. |
| hash               | string   | *required | Initial message.                                                        |
| signature          | string   | *required | The signature of the message.                                           |
| callback           | function | *required | Callback function.                                                      |


**Callback parameters**

| **Name**           | **Type** | **Response example**                                                                                                                    |
|:-------------------|:---------|:----------------------------------------------------------------------------------------------------------------------------------------|
| err                | any      | Error message for errors that occurred during the execution of the call. <br/>If err is undefined, the verificationResult was received. |
| verificationResult | any      | The verification result.                                                                                                                |



### 1.9.1. Enclaves with Deterministic Key Derivation

<p style='text-align: justify;'>Costs of the KMS systems (pay per key), backup problems or performance constraints created pressure on creating enclaves that derive the private keys used for SeedSSIs from a “generator key” and a deterministic “salt”.
</p>

<p style='text-align: justify;'>The goal of these types of enclaves is to reduce the number of private keys that are stored in an enclave. To do this, each enclave will support the concept of “Generator Slot” or simply “slot”. In each slot, a “generator key” is stored (a random number). 	The enclaves that support Deterministic Key Derivation (DKD) should take advantage of the “hint” part of a sReadSSI and create the corresponding SeedSSI by DKD. The hint part is a base58 encoded JSON with the fields “slot” and “path”. 
</p>

For the ePI use case, the slot field is initialized with 0 if it is not present and the path is a string: a GTIN value or a GTIN value concatenated with “/” and a batch number. Slot 0 always contains the private key of the enclave’s DID.


**Example:**  



    ssi:sread:domain:hash_private_key_base58:public_key:v0:{slot:”1”, path:”/12345678901234/abcde”}



<p style='text-align: justify;'>When an enclave is requested to sign using a sRead KeySSI that has a path hint, it will use the hint to obtain the corresponding private key.
</p>


# **2. OpenDSU SDK implementations**

* APIHubEnclave: uses APIHub endpoints to send requests.
* HighSecurityEnclave: uses APIHub endpoints to send requests but encrypts all requests, so they are readable only by the holder EnclaveDID (with the corresponding private key).
* MobilePhoneEnclave: uses OpenDSU MQ to communicate with a mobile phone app acting as an enclave (and probably using a native enclave implementation).
* WalletDBEnclave: uses an internal WalletDB inside of the wallet.
* ComposedEnclave: delegates the actual actions to a set of logically unified enclaves (tries using them one by one until one succeeds in executing the request).

## 2.1. Initiating Functions in Enclave API

* initialiseWalletDBEnclave;
* initialiseMemoryEnclave;
* initialiseRemoteEnclave;
* connectEnclave;
* createEnclave;
* registerEnclave.

### Function initialiseWalletDBEnclave(keySSI, did)

**Description:** This function will create and return a WalletDB enclave.


| **Name**           | **Type** | **Value** | **Description**                 |
|:-------------------|:---------|:----------|:--------------------------------|
| keySSI             | object   | optional  | Enclave KeySSI.                 |
| did                | string   | optional  | DID of the user executing call. |



### Function initialiseMemoryEnclave()

**Description:** This function will create and return a memory enclave. No parameters are required for the creation of this type of enclave.


### Function initialiseRemoteEnclave(clientDID, remoteDID)

**Description:** This function will create a client side enclave that will communicate with the remote server enclave.



| **Name**  | **Type** | **Value** | **Description**        |
|:----------|:---------|:----------|:-----------------------|
| clientDID | string   | *required | DID of the client.     |
| remoteDID | string   | *required | DID of remote enclave. |


### Function createEnclave(enclaveType, …args)


<b>Description</b>: This function will create an enclave with the specified type. All the supported types can be found in the <a href="https://github.com/OpenDSU/OpenDSU-core/blob/master/moduleConstants.js">moduleConstants.js file  ->  ENCLAVE_TYPES.</a>



| **Name**    | **Type** | **Value** | **Description**                                  |
|:------------|:---------|:----------|:-------------------------------------------------|
| enclaveType | string   | *required | Desired enclave type.                            |
| *args       | string   | *required | Parameters for the enclave constructor function. |



### Function registerEnclave(enclaveType, enclaveConstructor)

**Description:** This is used to register a new enclave constructor function under new enclave type.


# **3. Deployment**

<p style='text-align: justify;'>If the needs or functionality requirements involve that our enclave stores data in data systems, this can be achieved through a SqliteEnclave implementation that uses a file and a Sqlite engine to store data from the enclave type. Suppose we are talking about enclaves for mobile devices, then the OpenDSU concept will be based on its implementation in the use of enclaves or TEE mechanisms available on both iOS and Android.
</p>


## 3.1. EnclaveAdapters are typically separate containers

<p style='text-align: justify;'>Interaction with this OpenDSU Enclave concept can be done both directly and through layers or intermediaries. These may be represented by APIHub or can be the so-called EnclaveAdapter Interfaces. When we refer to APIHub intermediary, we are talking about the possibility that an instance of APIHub can expose a collection of APIs through which a user can have the opportunity to build or to upload but also to interact with enclaves.
</p>

<p style='text-align: justify;'> Depending on the degree of importance of the data stored in that enclave, it can use either an encrypted communication that allows remote access via APIHub to the enclave or an unsecured communication.
</p>

* Web APIs are similar to APIs of the Enclave instances from OpenDSU SDK.
* All methods will have an enclaveDID parameter and typically require the signature of a "forDID" that was allowed by the enclave administrator to access the enclave elements (tables, keys etc.).
* The enclave administrators can use the grantWriteAccess, grantReadAccess, revokeWriteAccess and revokeReadAccess methods to give or revoke write/read access to other DIDs.
* The DID that created an Enclave element gets access by default.


## 3.2. Native Enclaves


<p style='text-align: justify;'>When we talk about the EnclaveAdapter Interface, we refer to a collection of native implementations plus a WebAPIs collection to facilitate the interaction and consumption of information stored in native enclaves or in enclaves that use as storage media available technologies such as LinuxTEE, iOSTEE, and AndroidTEE or Sqlite, but also any other type of system we want to use as a storage layer for our enclave.
</p>

<p style='text-align: justify;'>A Native Enclave offers http/https endpoints (the EnclaveAdapter web APIs) that can be used by the APIHubEnclave or HighSecurityEnclave from OpenDSU SDK, typically mediated by the WebAPIEnclave strategy from APIHub. A native enclave can be executed:
</p>

* on a remote server;
* in a separate container in the same cluster;
* as part of the native layer in a native application (mobile or desktop).


**Possible Implementations**

Some implementations are experimental or not stable:
* SqliteEnclave: use sqlite as storage 
* KMSEnclave: use a KMS  (local hardware or cloud KMS)
* LinuxTEE: use the native TEE
* iOSTEE: use the native TEE
* AndroidTEE: use the native TEE


<div style="display: flex; justify-content: center;">
  <img 
    alt="" 
    src="https://docs.google.com/drawings/d/e/2PACX-1vQ1bdyecUXN36ZGf1gA5nXCbaiNOf1AG3uAZWQEUuZ9VdlwewfgxrOtIJCYONw8pQuBOpJeXHUzE4cf/pub?w=662&h=373" 
    class="imgMain" 
    style="max-width: 100%; cursor: pointer; transition: max-width 0.3s ease-in-out;"
    onclick="openModal(this.src)"
    title="Click to Zoom"
  />
</div>

<div style="text-align:center;">
<p><b>Figure 5: Security Context</b></p>
</div>





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







