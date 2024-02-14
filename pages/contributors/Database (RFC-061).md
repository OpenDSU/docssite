---
title: Database 
layout: home
parent: OpenDSU Contributors
nav_order: 10
---



# **Database**
{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs)

**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)


<!-- TOC -->

* [Abstract](#abstract)
* [1.Creating a database object](#1creating-a-database-object)
  * [Function getBasicDB(storageStrategy, conflictSolvingStrategy, options)](#function-getbasicdbstoragestrategy-conflictsolvingstrategy-options)
  * [Function getSharedDB(keySSI, dbName, options)](#function-getshareddbkeyssi-dbname-options)
  * [Function getSimpleWalletDB(dbName, options)](#function-getsimplewalletdbdbname-options)
  * [Function getMainEnclaveDB(callback) and getMainEnclave(callback)](#function-getmainenclavedbcallback-and-getmainenclavecallback)
  * [Function genInMemoryDB()](#function-geninmemorydb)
  * [Function getSharedEnclaveDB(callback) and getSharedEnclave(callback)](#function-getsharedenclavedbcallback-and-getsharedenclavecallback)
  * [Loading the DataBase API](#loading-the-database-api)
* [2. Database instances](#2-database-instances)
  * [2.1. Reading entries from the database](#21-reading-entries-from-the-database)
    * [Function getHistory(tableName, key, callback)](#function-gethistorytablename-key-callback)
    * [Function getRecord(tableName, key, callback)](#function-getrecordtablename-key-callback)
    * [Function getRecordVersions(record)](#function-getrecordversionsrecord)
    * [Function readKey(key, callback)](#function-readkeykey-callback)
  * [2.2. Modifying records in the database](#22-modifying-records-in-the-database)
    * [Function deleteRecord(tableName, Key, callback)](#function-deleterecordtablename-key-callback)
    * [Function insertRecord(tableName, key, record, callback)](#function-insertrecordtablename-key-record-callback)
    * [Function updateRecord(tableName, key, record, currentRecord, callback)](#function-updaterecordtablename-key-record-currentrecord-callback)
    * [Function writeKey(key, record, callback)](#function-writekeykey-record-callback)
  * [2.3. Indexing the database](#23-indexing-the-database)
  * [2.3. Batch operations](#23-batch-operations)
    * [Function beginBatch()](#function-beginbatch)
  * [Function cancelBatch(callback)](#function-cancelbatchcallback)
  * [Function commitBatch(callback)](#function-commitbatchcallback)
* [3. Complex queries](#3-complex-queries)
  * [Function filter(tableName, query, sort, limit, callback)](#function-filtertablename-query-sort-limit-callback)
  * [Operators:](#operators)
* [4. Storage strategies](#4-storage-strategies)
  * [Function insertRecord(tableName, key)](#function-insertrecordtablename-key)
  * [Function updateRecord(tableName, key)](#function-updaterecordtablename-key)
  * [Function deleteRecord(tableName, key, callback)](#function-deleterecordtablename-key-callback-1)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->




# **Abstract**



<p style='text-align: justify;'>OpenDSU Database (DB) is a simple noSQL database offered by OpenDSU for programmers to handle tasks where multiple users contribute to a database. It is aimed for storing DSU-related metadata as records organized in tables.
</p>



<p style='text-align: justify;'><b>Warning:</b> The OpenDSU DBs are NOT key/value databases, but databases containing records organized as tables! These records have a primary key but can also be indexed on any of their fields. Additionally, no schema definition is required, and heterogeneous objects could be freely inserted (but some standard fields would make it more valuable).
</p>



# **1.Creating a database object**

<p style='text-align: justify;'>Accessing the DataBase is handled through the DB library of the openDSU module. Calls are handled through a BasicDB instance with a storageStrategy object that handles the underlying data storage and conflictResolvingStrategy.
</p>


## Function getBasicDB(storageStrategy, conflictSolvingStrategy, options)

<p style='text-align: justify;'><b>Description:</b> An OpenDSU BasicDB is a simple noSQL database used with a concept of “table” and rows (records) that have multiple versions. This function returns the BasicDB.
</p>


| **Name**                 | **Type**        | **Value** | **Description**                                                  |
|:-------------------------|:----------------|:----------|:-----------------------------------------------------------------|
| storageStrategy          | ObservableMixin |           | Create a BasicDB instance with the provided **storageStrategy**. |
| conflictSolving Strategy |                 |           |                                                                  |
| options                  |                 |           |                                                                  |



**Returns**

| Name    | Description      |
|:--------|:-----------------|
| BasicDB | a BasicDB object |

## Function getSharedDB(keySSI, dbName, options)

<p style='text-align: justify;'><b>Description</b>: Get the endpoint for a database that is associated with your KeySSI and can be shared with other people.
</p>



| **Name** | **Type** | **Value** | **Description**                                                                                                                                             |
|:---------|:---------|:----------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
| KeySSI   | KeySSI   |           | Creates a BasicDB instance by lazily calling getBasicDB(), providing on-the-fly created instances of SingleDSUStorageStrategy and TimestampMergingStrategy. |
| dbName   | String   | *required |                                                                                                                                                             |
| options  |          |           |                                                                                                                                                             |
	

**Returns**

| Name | Description |
|:-----|:------------|
| db   |             |


## Function getSimpleWalletDB(dbName, options)

<p style='text-align: justify;'><b>Description</b>: Returns a BasicDB instance that uses a DSU for storing data. Upon calling, if the DSU used for storage has not been created yet, this function creates one. After that, the DSU’s KeySSI is stored inside the main DSU.
</p>



| **Name** | **Type** | **Value** | **Description**                                                                                                                                                                                                                                                                                                                                  |
|:---------|:---------|:----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| dbName   | string   | *required | Creates a BasicDB instance by lazily calling getBasicDB(), providing on-the-fly created instances of SingleDSUStorageStrategy and TimestampMergingStrategy. SingleDSUStorageStrategy uses a DSU created when getSimpleWalletDB is called and whose keySSI is stored inside the mainDSU. Each DB, uniquely identified by dbName, has its own DSU. |
| options  |          |           |                                                                                                                                                                                                                                                                                                                                                  |
	


**Returns**

| Name | Description |
|:-----|:------------|
| db   |             |

	

## Function getMainEnclaveDB(callback) and getMainEnclave(callback)

<p style='text-align: justify;'><b>Description</b>: Returns a BasicDB interface that uses an enclave for storage or the enclave itself.
</p>


| **Name** | **Type** | **Value** | **Description** |
|:---------|:---------|:----------|:----------------|
| callback | function | *required |                 |
	



**Callback parameters**

| **Name**                    | **Type**     | **Response example** |
|:----------------------------|:-------------|:---------------------|
| err                         | Error object |                      |
| mainEnclave or MainEclaveDB | object       |                      |


<p style='text-align: justify;'><b>Description:</b> Exports a DB-like interface that uses an enclave for storage. The type of enclave used is determined by the environment variable enclaveType stored inside the mainDSU in the environment.json file. By default, the enclaveType is MemoryEnclave (it can be configured in environment.js).
</p>



## Function genInMemoryDB()

<p style='text-align: justify;'><b>Description</b>: Calls getBasicDB(storageStrategy), where the storage strategy is an instance of MemoryStorageStrategy.</p>


## Function getSharedEnclaveDB(callback) and getSharedEnclave(callback)

<b>Description:</b> Calls getSharedEnclave(callback).


| **Name** | **Type** | **Value** | **Description** |
|:---------|:---------|:----------|:----------------|
| callback | function | *required |                 |
	




## Loading the DataBase API


Use is described later for each function:

```js

//Load openDSU environment

require("../privatesky/psknode/bundles/openDSU");

//Load openDSU SDK

const opendsu = require("opendsu");

//Load keyssi library

const keyssispace = opendsu.loadApi("keyssi");

//Load bdns library

const db = opendsu.loadApi("db");

let SingleDSUStorageStrategy =

require("./storageStrategies/SingleDSUStorageStrategy").SingleDSUStorageStrategy;

let storageStrategy = new SingleDSUStorageStrategy();

let ConflictStrategy

require("./conflictSolvingStrategies/timestampMergingStrategy").TimestampMergingStrategy;

let storageSSI = keySSIApis.createSeedSSI("default");

let myDB = db.getBasicDB()

```

# **2. Database instances**

<p style='text-align: justify;'>Database objects instantiated as described in Section 1 <a href="https://www.opendsu.org/pages/contributors/Database%20(RFC-061).html#1creating-a-database-object">(Creating a database object)</a> provide methods to query, insert, update or remove data in the form of <b>record</b> entries associated with a unique <b>key</b>: see readKey() and writeKey() methods. Optionally, keys may be grouped by context <b>tableName</b>: see getRecord(), updateRecord(), insertRecord() and deleteRecord(). The same <b>key</b> may occur in multiple context entries with different names, but keys without context or within the same context <b>tableName</b> are required to be unique (see Diagram 2.1). The <b>key</b> or <b>record</b> pairs within a context <b>tableName</b> maintain a versioned history of their modification or deletion events, whereas keys stored without context do not. Restrictions to the possible data type(s) of key and record may apply, according to the storage strategy employed by this database instance (see <a href="https://www.opendsu.org/pages/contributors/Database%20(RFC-061).html#4-storage-strategies">Storage strategies</a>).
</p>


## 2.1. Reading entries from the database


<p style='text-align: justify;'>This subsection provides an overview of methods that obtain entries for a given key in this database. These methods trigger bulk operations to access the data associated with a key either by readKey() in the default context or by getObject() in a correspondingly specified context tableName. Since, within a context, consistent versioning of data changes to an entry  is provided, additional metadata may be provided through the methods getHistory() and getRecordVersions().
</p>



### Function getHistory(tableName, key, callback)

<p style='text-align: justify;'><b>Description</b>: Gets the history of a record, including the deleted versions. The lazy wrapper first delegates to getRecord() in order to resolve the record for the given key in the given context <b>tableName.</b> Subsequently, the history of the retrieved record is composed by a corresponding call to getRecordVersions().
</p>


| **Name**  | **Type** | **Value** | **Description**                                                                 |
|:----------|:---------|:----------|:--------------------------------------------------------------------------------|
| tablename | string   | *required | Name of the table inside your database.                                         |
| key       | string   | *required | The key you want to get the history from.                                       |
| callback  | function | *required |                                                                                 |
	


**Callback parameters**

| **Name** | **Type**     | **Response example** |
|:---------|:-------------|:---------------------|
| err      | Error object |                      |
| record   | Array        |                      |
	

<p style='text-align: justify;'><b>Description</b>: An error object containing a message. / An array of all the different versions.
</p>



### Function getRecord(tableName, key, callback)

<b>Description</b>: Get a single row from a table.




| **Name**  | **Type**               | **Value** | **Description**                          |
|:----------|:-----------------------|:----------|:-----------------------------------------|
| tablename | string                 | *required | Get a single row from a table.           |
| key       | string/Array of string | *required | The key you want to get  a record from.  |
| callback  | function               | *required |                                          |
	


**Callback parameters**

| **Name** | **Type**     | **Response example** |
|:---------|:-------------|:---------------------|
| err      | Error object |                      |
| record   | Array        |                      |


<p style='text-align: justify;'><b>Description</b>: An error object containing a message. The record present for the selected key in the selected table.
</p>



### Function getRecordVersions(record)

<p style='text-align: justify;'><b>Description</b>: Dynamically composes an Array of record object from the linked list of previous entries for the provided record. Note that the method is synchronous and will block until the list is composed.
</p>


| **Name** | **Type** | **Value** | **Description**                           |
|:---------|:---------|:----------|:------------------------------------------|
| record   | Object   |           | The record for which you want the history |
	


**Returns**

| Name            | Description                                                                    |
|:----------------|:-------------------------------------------------------------------------------|
| Array of String | An array containing the different versions of a record, even the deleted ones. |


### Function readKey(key, callback)

<p style='text-align: justify;'><b>Description</b>: Obtains the data value stored under the provided key in the default context of this database instance. Throws an OpenDSUError err if the provided key cannot be found or accessed in this database.
</p>



| **Name** | **Type** | **Value** | **Description**                     |
|:---------|:---------|:----------|:------------------------------------|
| key      | string   | *required | The identifier of the read content. |
| callback | function | *required |                                     |



**Callback parameters**


| **Name** | **Type**    | **Response example** |
|:---------|:------------|:---------------------|
| err      | Error       |                      |
| value    | Buffer/JSON |                      |



**Description**: An error object containing a message. / The value associated with the provided key.




## 2.2. Modifying records in the database


### Function deleteRecord(tableName, Key, callback)

<p style='text-align: justify;'><b>Description</b>: Delete the record for<b> key</b> in context <b>tableName</b>. Note that the deletion is lossless, such that the key record is actually not removed but flagged as deleted, timestamped, and incremented in its version number. Throws an error if getRecord(<b>tableName, key</b>) cannot retrieve the required property from the underlying storage strategy.
</p>



| **Name**  | **Type**               | **Value** | **Description**                      |
|:----------|:-----------------------|:----------|:-------------------------------------|
| tableName | string                 | *required |                                      |
| key       | string/Array of string |           |                                      |
| callback  | function               | *required |                                      |




### Function insertRecord(tableName, key, record, callback)

<p style='text-align: justify;'><b>Description</b>: Insert a new <b>key</b> with the given data record in the location <b>tableName</b> by lazily wrapping <b>updateRecord()</b> with <b>currentRecord</b>:undefined. It throws an error if the record for that <b>key</b> already exists in <b>tableName</b> before the insertion operation.
</p>


| **Name**  | **Type**               | **Value** | **Description**                                                                                 |
|:----------|:-----------------------|:----------|:------------------------------------------------------------------------------------------------|
| tableName | string                 | *required | Name of the table inside your database.                                                         |
| key       | string/Array of string |           | The value of the primary key for that record. Usually, a record has a field with the name “pk”. |
| record    | object                 |           | The content of the record.                                                                      |
| callback  | function               | *required |                                                                                                 |


**Callback parameters**

| **Name** | **Type**     | **Response example** |
|:---------|:-------------|:---------------------|
| err      | Error object |                      |
| record   | object       |                      |


<b>Description</b>: An error object containing a message. / The newly inserted record.


### Function updateRecord(tableName, key, record, currentRecord, callback)

<p style='text-align: justify;'><b>Description</b>: Update the given <b>key</b> in the given context <b>tableName</b> with the data provided as a <b>record</b>. If <b>currentRecord</b> is not undefined, the existing index structure is purged before the new <b>record</b> is added. Reindexing is automatically triggered when the new <b>record </b>value is written. Throws an error if getRecord(<b>tableName</b>, <b>key</b>) fails to retrieve an entry before the update operation or if the <b>record</b> is provided in the form of a Buffer or Array instance.
</p>


| **Name**      | **Type**               | **Value** | **Description**                         |
|:--------------|:-----------------------|:----------|:----------------------------------------|
| tableName     | string                 | *required | Name of the table inside your database. |
| key           | string/Array of string |           | The key you want to update.             |
| record        | object                 |           | The content of the record.              |
| currentRecord | Object/undefined       |           |                                         |
| callback      | function               | *required |                                         |


**Callback parameters**

| **Name** | **Type**     | **Response example** |
|:---------|:-------------|:---------------------|
| err      | Error object |                      |
| record   | object       |                      |



**Description:** An error object containing a message. / The updated record.


### Function writeKey(key, record, callback)

<p style='text-align: justify;'><b>Description</b>: Inserts (respectively overwrites) the given <b>key</b> in the (unindexed) <b>KeyValueTable</b> of the underlying storage strategy with the data provided as <b>value</b>.
</p>



| **Name**  | **Type**      | **Value** | **Description**                                                                                   |
|:----------|:--------------|:----------|:--------------------------------------------------------------------------------------------------|
| key       | string        |           | An unique identifier for the added value.                                                         |
| record    | Buffer/Object |           |                                                                                                   |
| callback  | function      | *required |                                                                                                   |



**Callback parameters**


| **Name** | **Type**     | **Response example** |
|:---------|:-------------|:---------------------|
| err      | Error object |                      |


**Description:** An error object containing a message.


## 2.3. Indexing the database

| **Method**                                                                                                | **Parameters** | **Description**                                                      |
|:----------------------------------------------------------------------------------------------------------|:---------------|:---------------------------------------------------------------------|
| <a href="https://www.opendsu.org/pages/contributors/DB%20objects%20(RFC-062).html">addIndex</a>           |                | Add an index to all the values from a specific field in your table.  |
| <a href="https://www.opendsu.org/pages/contributors/DB%20objects%20(RFC-062).html"> getIndexedFields </a> |                | Returns the list of the indexed fields in the specified table.       |


## 2.3. Batch operations

<p style='text-align: justify;'>Batch processing is a way to efficiently perform a series of operations on a DSU container without anchoring separately after each operation (see Section 4 in DSU objects). Because manipulating methods can change contents in the storage underlying the database, it may be desired to control batch processing from the BasicDB object if operating on a DSU storage. Therefore, given that a SingleDSUStorageStrategy is employed in this BasicDB instance, corresponding methods to begin, commit, or cancel a batch operation on the associated DSU object are delegated through the storage strategy handler of this BasicDB instance. Otherwise, if no SingleDSUStorageStrategy is used by this BasicDB instance, the batch operation methods listed below will have no effect.
</p>




### Function beginBatch()

<p style='text-align: justify;'><b>Description</b>: Schedules a new batch by disabling automatic anchoring after each operation performed on this DSU instance.
</p>


**Returns**

| **Name**          | **Description**                         |
|:------------------|:----------------------------------------|
| callback function | Prevent anchoring after each operation. |



## Function cancelBatch(callback)

**Description**: Cancels the current batch scheduled by beginBatch() and restores operation-wise anchoring as usual.

| **Name** | **Type**           | **Value** | **Description** |
|:---------|:-------------------|:----------|:----------------|
| err      | Error object       |           |                 |
| result   | AnchoringList ener |           |                 |




## Function commitBatch(callback)

<p style='text-align: justify;'><b>Description</b>: Completes batch processing by anchoring all changes in this DSU instance made during batch processing. If <b>onConflict()</b> is provided, it will be called if a conflict occurs.
</p>


| **Name** | **Type** | **Value** | **Description** |
|:---------|:---------|:----------|:----------------|
| callback | function | *required |                 |


**Callback parameters**


| **Name** | **Type**           | **Value** | **Description** |
|:---------|:-------------------|:----------|:----------------|
| err      | Error object       |           |                 |


**Description:** An error object containing a message.


# 3. Complex queries

## Function filter(tableName, query, sort, limit, callback)

**Description:** Returns the list of records satisfying the conditions in the specified query.



| **Name**         | **Type**                   | **Value** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|:-----------------|:---------------------------|:----------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| tableName        | string                     | *required | Name of the table inside your database.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| query (optional) | String or array of strings |           | The conditions applied on the table.A query can contain a condition (as a string) or an array of conditions. A condition has the format “field operator value”, where field is the field on which the condition is applied, the operator is one of <,<=,>,>=,==, like, and the value is the value to which the field values are compared. In the case of the like operator, the value is a string representing a regular expression. If the query is not provided, the function will return all the records in table tableName.                                                                                                                                                       |
| sort (optional)  | string                     |           | Indicates if the returned array of records is sorted ascending or descending. The sort argument can have one of the values “asc” or “dsc”. By default, it has the value “asc”.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| limit (optional) | number                     |           | The maximum number of records returned by the filter function. By default limit is Infinity, so all the records that satisfy the query are returned.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| callback         | function                   | *required |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |




**Callback parameters**


| **Name** | **Type**         | **Response example** |
|:---------|:-----------------|:---------------------|
| err      | Error object     |                      |
| record   | Array of objects |                      |



**Description**: An error object containing a message. / An array containing all the records satisfying the filter function’s condition.





## Operators:



| **Query string**               | **Example** | **Description**                                                                                                                                  |
|:-------------------------------|:------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|
| {"<" / "<=" / ">"/">="/ "=="}  | x >= y      | Mathematical comparisons returning a boolean value of {true/false}.                                                                              |
| "like"                         | XXX         | Regular Expression with "/" delimited entries, where the first entry may optionally contain a flag passed to the RegExp() constructor (see XXX). |




# 4. Storage strategies

## Function insertRecord(tableName, key)

**Description:** Insert a key in a table.


| **Name**         | **Type**                  | **Value** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|:-----------------|:--------------------------|:----------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| tableName        | string                    | *required | Unique name of the context for which the operation is applied. Each instance of MemoryStorageStrategy keeps an object with one property per context (of the same name) in volatile memory.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| key              | String or array of string | *required | If **key** is a (single) string, the value **record** is stored as a property of the corresponding **tableName** object. Otherwise, if **key** is an Array of string, for each entry in key a homonymous property of **tableName** is assigned the same value record.                                                                                                                                                                                                                                                                                                                                                                                                                                       |


## Function updateRecord(tableName, key)

**Description**: Update a key in a table.


| **Name**         | **Type**                  | **Value** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|:-----------------|:--------------------------|:----------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| tableName        | string                    | *required | Unique name of the context for which the operation is applied. Each instance of MemoryStorageStrategy keeps an object with one property per context (of the same name) in volatile memory.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| key              | String or array of string | *required | If **key** is a (single) string, the value **record** is stored as a property of the corresponding **tableName** object. Otherwise, if **key** is an Array of string, for each entry in key a homonymous property of **tableName** is assigned the same value record.                                                                                                                                                                                                                                                                                                                                                                                                                                       |



## Function deleteRecord(tableName, key, callback)

<p style='text-align: justify;'><b>Description:</b> Delete a record by incrementing the record’s version number and setting the new record “delete property” to true. The old version of the record is saved.
</p>


| **Name**         | **Type**                  | **Value** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|:-----------------|:--------------------------|:----------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| tableName        | string                    | *required | Unique name of the context for which the operation is applied. Each instance of MemoryStorageStrategy keeps an object with one property per context (of the same name) in volatile memory.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| key              | String or array of string | *required | If **key** is a (single) string, the value **record** is stored as a property of the corresponding **tableName** object. Otherwise, if **key** is an Array of string, for each entry in key a homonymous property of **tableName** is assigned the same value record.                                                                                                                                                                                                                                                                                                                                                                                                                                       |



**Callback parameters**



| **Name** | **Type**     | **Response example** |
|:---------|:-------------|:---------------------|
| err      | Error object |                      |
| record   | Objects      |                      |


**Description:** An error object containing a message. / The updated record.

| StorageStrategy                                          | Memory                                                                                                                                                                                                                                                                           | SingleDSU                                                                                                                                                          | MultiUser  |
|:---------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------|
|                                                          | tableName:String Unique name of the context for which the operation is applied. Each instance of MemoryStorageStrategy keeps an object with one property per context (of same name) in volatile memory.                                                                          |                                                                                                                                                                    |            |
| insertRecord() </br> updateRecord() <br/> deleteRecord() | key:{string/ Array of string}If key is a (single) string, the value record is stored as a property of the corresponding tableName object. Otherwise, if key is an Array of string, for each entry in key an homonymous property of tableName is assigned the same value record.  |                                                                                                                                                                    |            |





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


