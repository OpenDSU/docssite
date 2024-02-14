---
title: LightDB 
layout: home
parent: OpenDSU Advanced
nav_order: 5
---

# **LightDB**

{: .no_toc }

{: .Accepted }
The proposal has been accepted and has an implementation.


**Document Maintainers: Andi Gabriel Tan 2023. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2023 Axiologic Research and Contributors.
This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)

<!-- TOC -->
* [Abstract](#abstract)
* [1. LighDB Concept and Purpose](#1-lighdb-concept-and-purpose)
* [2. LigtDB Client](#2-ligtdb-client)
  * [Function createDatabase(dbName, callback)](#function-createdatabasedbname-callback)
  * [Function insertRecord(forDID, table, pk, encryptedRecord, callback)](#function-insertrecordfordid-table-pk-encryptedrecord-callback)
  * [Function updateRecord(forDID, table, pk, plainRecord, encryptedRecord, callback)](#function-updaterecordfordid-table-pk-plainrecord-encryptedrecord-callback)
  * [Function deleteRecord(forDID, table, pk, callback)](#function-deleterecordfordid-table-pk-callback)
  * [Function getRecord(forDID, table, pk, callback)](#function-getrecordfordid-table-pk-callback)
  * [Function addInQueue (forDID, queueName, encryptedObject, ensureUniqueness, callback)](#function-addinqueue-fordid-queuename-encryptedobject-ensureuniqueness-callback)
  * [Function getObjectFromQueue(forDID, queueName, hash, callback)](#function-getobjectfromqueuefordid-queuename-hash-callback)
  * [Function deleteObjectFromQueue(forDID, queueName, hash, callback)](#function-deleteobjectfromqueuefordid-queuename-hash-callback)
* [3. LighDB Endpoints](#3-lighdb-endpoints)
* [4. Deployment configurations](#4-deployment-configurations)
<!-- TOC -->

# **Abstract**

<p style='text-align: justify;'>

This RFC provides an in-depth examination of LightDB, a generic storage service tailored for ApiHub that aims to enhance the scalability of ApiHub. This RFC elucidates the core idea behind LightDB, emphasizing the importance of stateless ApiHub components and the adoption of LightDB or disk storage, bolstering the flexibility of traffic routing via load balancers. Although LightDB is not intrinsically designed for scalability, it accommodates CRUD operations, thus serving ApiHub components effectively. This RFC also presents the LightDB Endpoints technical description that dives into the technicalities of the LightDB, underpinned by a singular endpoint allowing  commands. The embedded database, LokiJS, used by the default implementation, can be substituted, adhering to the standard interface, and rendering the endpoint as a remote function call interface. The RFC also offers insights into the deployment strategies of an external LightDB endpoint. By default, ApiHub comes with an internal LightDB component, but from an environment variable, it is possible to direct ApiHub instances towards an external endpoint. This RFC endeavors to equip developers and architects with comprehensive knowledge of LightDB's integration with OpenDSU and ApiHub.
</p>

# **1. LighDB Concept and Purpose**

<p style='text-align: justify;'>

LightDB serves as a generic storage mechanism for ApiHub components, enabling the scalability of ApiHub. It is recommended that ApiHub components avoid state storage in memory (between calls) and instead utilize LightDB or a disk storage (which can be sourced from a network file system). This configuration facilitates load balancers or load distribution systems to freely direct traffic to any ApiHub instance. While LightDB itself isn't designed to inherently scale, ApiHub components have the option to employ other LightDB implementations that provide scalable operations.
</p>

# **2. LigtDB Client**

https://github.com/OpenDSU/OpenDSU-core/blob/master/enclave/impl/LightDBEnclaveClient.js 

<p style='text-align: justify;'>

The LightDB Client is a class equipped with functions that facilitate CRUD operations toward the LightDB server. These operations include createDatabase, insertRecord, updateRecord, deleteRecord, getRecord, addInQueue, getObjectFromQueue and deleteObjectFromQueue.
</p>

## Function createDatabase(dbName, callback)

**Description:** Create a database with the name dbName.

## Function insertRecord(forDID, table, pk, encryptedRecord, callback)

**Description:** Insert a record (encryptedRecord) into a database (table).

## Function updateRecord(forDID, table, pk, plainRecord, encryptedRecord, callback)

**Description:** Update a record that already exists in table.

## Function deleteRecord(forDID, table, pk, callback)

**Description:** Delete a record from a database (table).

## Function getRecord(forDID, table, pk, callback)

**Description:** Retrieve a record from table.

## Function addInQueue (forDID, queueName, encryptedObject, ensureUniqueness, callback)

**Description:** Insert a record into the queue.

## Function getObjectFromQueue(forDID, queueName, hash, callback)

**Description:** Retrieve a record from the queue.

## Function deleteObjectFromQueue(forDID, queueName, hash, callback)

**Description:** Delete a record from the queue.

# **3. LighDB Endpoints**

<p style='text-align: justify;'>

The LightDB enclave is based on a single endpoint that takes CRUD commands for working with records in databases that store records in tables. By default, an embedded database is used (LokiJS), but, following the standard interface, other databases could be used for the actual storage. The endpoint allows a command with a variable number of arguments and, in a way, it could be seen as a remote function call interface.
</p>

<a href="https://github.com/OpenDSU/LokiEnclaveFacade/blob/master/LightDBServer.js">https://github.com/OpenDSU/LokiEnclaveFacade/blob/master/LightDBServer.js</a>

````
PUT /createDatabase/:dbName
````

````
PUT /executeCommand/:dbName
````

````
JSON.parse(body.command)
command.params
````

<p style='text-align: justify;'>

The first element in params is a DID, used to verify the signature from body.signature. The signature is signing the command object (commandName, params).
</p>

# **4. Deployment configurations**

<p style='text-align: justify;'>

The LIGHT_DB_SERVER_ADDRESS environment variable is used to instruct APIHub instances about the endpoint (specifically instructing the LightDB Client) to which they should connect. By default, the LIGHT_DB_SERVER_ADDRESS is generated by APIHub upon startup (and it starts a LightDB server). If LIGHT_DB_SERVER_ADDRESS is set, then APIHub will not attempt to start a new LightDB Server.
</p>

**Contributors**

1. <p style='text-align: justify;'><a href="https://www.axiologic.net/">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="https://www.opendsu.org/">www.opendsu.org</a> site.

2. PrivateSky Research Project: MIT licensed content accordingly with the contracts. 
<a href="https://profs.info.uaic.ro/~ads/PrivateSky/"> https://profs.info.uaic.ro/~ads/PrivateSky/</a>


| **Current Editors**                 | **Email**                               |
|:------------------------------------|:----------------------------------------|
| Andi-Gabriel Țan                    | andi@axiologic.net                      |
| Teodor Lupu                         | teodor@axiologic.net                    |
| **Contributors Axiologic Research** | **Email**                               |
| Sînică Alboaie                      | sinica.alboaie@axiologic.net            |
| Daniel Sava                         | daniel@axiologic.net                    |
| Cosmin Ursache                      | cos.ursache@gmail.com(UAIC)             |
| Teodor Lupu                         | teodor@axiologic.net                    |