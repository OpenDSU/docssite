---
title: Database 
layout: home
parent: OpenDSU Contributors
nav_order: 10
---

Database (RFC-061)

Abstract

OpenDSU Database (DB) is a simple noSQL database offered by OpenDSU for programmers to handle tasks where multiple users contribute to a database. It is aimed for storing DSU-related metadata as records organized in tables.

Warning: The OpenDSU DBs are NOT key/value databases, but databases containing records organized as tables! These records have a primary key but can also be indexed on any of their fields. Additionally, no schema definition is required, and heterogeneous objects could be freely inserted (but some standard fields would make it more valuable).
1. Creating a database object

Accessing the DataBase is handled through the DB library of the openDSU module. Calls are handled through a BasicDB instance with a storageStrategy object that handles the underlying data storage and conflictResolvingStrategy.
Function getBasicDB(storageStrategy, conflictSolvingStrategy, options)

Description: An OpenDSU BasicDB is a simple noSQL database used with a concept of “table” and rows (records) that have multiple versions. This function returns the BasicDB.

Name
	

Type
	

Value
	

Description

storageStrategy
	

ObservableMixin
	

	

Create a BasicDB instance with the provided storageStrategy.

conflictSolvingStrategy
	

	

	

options
	

	

	

Returns

Name
	

Description

BasicDB
	

a BasicDB object
Function getSharedDB(keySSI, dbName, options)

Description: Get the endpoint for a database that is associated with your KeySSI and can be shared with other people.

Name
	

Type
	

Value
	

Description

keySSI
	

KeySSI
	

	

Creates a BasicDB instance by lazily calling getBasicDB(), providing on-the-fly created instances of SingleDSUStorageStrategy and TimestampMergingStrategy.

dbName
	

String
	

*required
	

options
	

	

	

Returns

Name
	

Description

db
	

Function getSimpleWalletDB(dbName, options)

Description: Returns a BasicDB instance that uses a DSU for storing data. Upon calling, if the DSU used for storage has not been created yet, this function creates one. After that, the DSU’s KeySSI is stored inside the main DSU.

Name
	

Type
	

Value
	

Description

dbName
	

string
	

*required
	

Creates a BasicDB instance by lazily calling getBasicDB(), providing on-the-fly created instances of SingleDSUStorageStrategy and TimestampMergingStrategy. SingleDSUStorageStrategy uses a DSU created when getSimpleWalletDB is called and whose keySSI is stored inside the mainDSU. Each DB, uniquely identified by dbName, has its own DSU.

options
	

	

	

Returns

Name
	

Description

db
	

Function getMainEnclaveDB(callback) and getMainEnclave(callback)

Description: Returns a BasicDB interface that uses an enclave for storage or the enclave itself.

Name
	

Type
	

Value
	

Description

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

Error object
	

mainEnclave or MainEnclaveDB
	

Object
	

Description: Exports a DB-like interface that uses an enclave for storage. The type of enclave used is determined by the environment variable enclaveType stored inside the mainDSU in the environment.json file. By default, the enclaveType is MemoryEnclave (it can be configured in environment.js).
Function genInMemoryDB()

Description: Calls getBasicDB(storageStrategy), where the storage strategy is an instance of MemoryStorageStrategy.
Function getSharedEnclaveDB(callback) and getSharedEnclave(callback)

Description: Calls getSharedEnclave(callback).

Name
	

Type
	

Value
	

Description

callback
	

function
	

*required
	

Loading the DataBase API

Use is described later for each function:

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
2. Database instances

Database objects instantiated as described in Section 1 (Creating a database object) provide methods to query, insert, update or remove data in the form of record entries associated with a unique key: see readKey() and writeKey() methods. Optionally, keys may be grouped by context tableName: see getRecord(), updateRecord(), insertRecord() and deleteRecord(). The same key may occur in multiple context entries with different names, but keys without context or within the same context tableName are required to be unique (see Diagram 2.1). The key/record pairs within a context tableName maintain a versioned history of their modification or deletion events, whereas keys stored without context do not. Restrictions to the possible data type(s) of key and record may apply, according to the storage strategy employed by this database instance (see Storage strategies).
2.1. Reading entries from the database

This subsection provides an overview of methods that obtain entries for a given key in this database. These methods trigger bulk operations to access the data associated with a key either by readKey() in the default context or by getObject() in a correspondingly specified context tableName. Since, within a context, consistent versioning of data changes to an entry  is provided, additional metadata may be provided through the methods getHistory() and getRecordVersions().
Function getHistory(tableName, key, callback)

Description: Gets the history of a record, including the deleted versions. The lazy wrapper first delegates to getRecord() in order to resolve the record for the given key in the given context tableName. Subsequently, the history of the retrieved record is composed by a corresponding call to getRecordVersions().

Name
	

Type
	

Value
	

Description

tablename
	

string
	

*required
	

Name of the table inside your database.

key
	

string
	

*required
	

The key you want to get the history from.

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

Error object
	

record
	

Array
	

Description: An error object containing a message. / An array of all the different versions.
Function getRecord(tableName, key, callback)

Description: Get a single row from a table.

Name
	

Type
	

Value
	

Description

tableName
	

string
	

*required
	

Get a single row from a table.

key
	

string/Array of string
	

*required
	

The key you want to get a record from.

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

Error object
	

record
	

Array
	

Description: An error object containing a message. / The record present for the selected key in the selected table.
Function getRecordVersions(record)

Description: Dynamically composes an Array of record object from the linked list of previous entries for the provided record. Note that the method is synchronous and will block until the list is composed.

Name
	

Type
	

Value
	

Description

record
	

Object
	

	

The record for which you want the history.

Returns

Name
	

Description

Array of String
	

An array containing the different versions of a record, even the deleted ones.
Function readKey(key, callback)

Description: Obtains the data value stored under the provided key in the default context of this database instance. Throws an OpenDSUError err if the provided key cannot be found or accessed in this database.

Name
	

Type
	

Value
	

Description

key
	

string
	

*required
	

The identifier of the read content.

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

Error
	

value
	

Buffer/JSON
	

Description: An error object containing a message. / The value associated with the provided key.
2.2. Modifying records in the database
Function deleteRecord(tableName, Key, callback)

Description: Delete the record for key in context tableName. Note that the deletion is lossless, such that the key record is actually not removed but flagged as deleted, timestamped, and incremented in its version number. Throws an error if getRecord(tableName, key) cannot retrieve the required property from the underlying storage strategy.

Name
	

Type
	

Value
	

Description

tableName
	

string
	

*required
	

key
	

string/Array of string
	

	

callback
	

function
	

*required
	

Function insertRecord(tableName, key, record, callback)

Description: Insert a new key with the given data record in the location tableName by lazily wrapping updateRecord() with currentRecord:undefined. It throws an error if the record for that key already exists in tableName before the insertion operation.

Name
	

Type
	

Value
	

Description

tableName
	

string
	

*required
	

Name of the table inside your database.

key
	

string/Array of string
	

	

The value of the primary key for that record. Usually, a record has a field with the name “pk”.

record
	

object
	

	

The content of the record.

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

Error object
	

record
	

object
	

Description: An error object containing a message. / The newly inserted record.
Function updateRecord(tableName, key, record, currentRecord, callback)

Description: Update the given key in the given context tableName with the data provided as a record. If currentRecord is not undefined, the existing index structure is purged before the new record is added. Reindexing is automatically triggered when the new record value is written. Throws an error if getRecord(tableName, key) fails to retrieve an entry before the update operation or if the record is provided in the form of a Buffer or Array instance.

Name
	

Type
	

Value
	

Description

tableName
	

string
	

*required
	

Name of the table inside your database.

key
	

string/Array of string
	

	

The key you want to update.

record
	

Object
	

	

The record content.

currentRecord
	

Object/undefined
	

	

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

Error object
	

record
	

object
	

Description: An error object containing a message. / The updated record.
Function writeKey(key, record, callback)

Description: Inserts (respectively overwrites) the given key in the (unindexed) KeyValueTable of the underlying storage strategy with the data provided as value.

Name
	

Type
	

Value
	

Description

key
	

string
	

*required
	

An unique identifier for the added value.

record
	

Buffer/Object
	

	

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

Error object
	

Description: An error object containing a message.
2.3. Indexing the database

Method
	

Parameters
	

Description

addIndex
	

	

Add an index to all the values from a specific field in your table.

getIndexedFields
	

	

Returns the list of the indexed fields in the specified table.
2.3. Batch operations

Batch processing is a way to efficiently perform a series of operations on a DSU container without anchoring separately after each operation (see Section 4 in DSU objects). Because manipulating methods can change contents in the storage underlying the database, it may be desired to control batch processing from the BasicDB object if operating on a DSU storage. Therefore, given that a SingleDSUStorageStrategy is employed in this BasicDB instance, corresponding methods to begin, commit, or cancel a batch operation on the associated DSU object are delegated through the storage strategy handler of this BasicDB instance. Otherwise, if no SingleDSUStorageStrategy is used by this BasicDB instance, the batch operation methods listed below will have no effect.
Function beginBatch()

Description: Schedules a new batch by disabling automatic anchoring after each operation performed on this DSU instance.

Returns

Name
	

Description

callback function
	

prevent anchoring after each operation
Function cancelBatch(callback)

Description: Cancels the current batch scheduled by beginBatch() and restores operation-wise anchoring as usual.

Name
	

Type
	

Value
	

Description

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

Error object
	

result
	

AnchoringListener
	

Function commitBatch(callback)

Description: Completes batch processing by anchoring all changes in this DSU instance made during batch processing. If onConflict() is provided, it will be called if a conflict occurs.

Name
	

Type
	

Value
	

Description

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

Error object
	

Description: An error object containing a message.
3. Complex queries
Function filter(tableName, query, sort, limit, callback)

Description: Returns the list of records satisfying the conditions in the specified query.

Name
	

Type
	

Value
	

Description

tableName
	

string
	

*required
	

Name of the table inside your database.

query

(optional)
	

String or array of strings
	

	

The conditions applied on the table.

A query can contain a condition (as a string) or an array of conditions. A condition has the format “field operator value”, where field is the field on which the condition is applied, the operator is one of <,<=,>,>=,==, like, and the value is the value to which the field values are compared. In the case of the like operator, the value is a string representing a regular expression. If the query is not provided, the function will return all the records in table tableName.

sort

(optional)
	

string
	

	

Indicates if the returned array of records is sorted ascending or descending. The sort argument can have one of the values “asc” or “dsc”. By default, it has the value “asc”.

limit

(optional)
	

number
	

	

The maximum number of records returned by the filter function. By default limit is Infinity, so all the records that satisfy the query are returned.

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

Error object
	

record
	

Array of objects
	

Description: An error object containing a message. / An array containing all the records satisfying the filter function’s condition.
Operators:

Query string
	

Example
	

Description

{"<" | "<=" | ">" | ">=" | "=="}
	

x >= y
	

Mathematical comparisons returning a boolean value of {true|false}.

"like"
	

XXX
	

Regular Expression with "/" delimited entries, where the first entry may optionally contain a flag passed to the RegExp() constructor (see XXX).
4. Storage strategies
Function insertRecord(tableName, key)

Description: Insert a key in a table.

Name
	

Type
	

Value
	

Description

tableName
	

string
	

*required
	

Unique name of the context for which the operation is applied. Each instance of MemoryStorageStrategy keeps an object with one property per context (of the same name) in volatile memory.

key
	

string/Array of string
	

*required
	

If key is a (single) string, the value record is stored as a property of the corresponding tableName object. Otherwise, if key is an Array of string, for each entry in key a homonymous property of tableName is assigned the same value record. 
Function updateRecord(tableName, key)

Description: Update a key in a table.

Name
	

Type
	

Value
	

Description

tableName
	

string
	

*required
	

Unique name of the context for which the operation is applied. Each instance of MemoryStorageStrategy keeps an object with one property per context (of same name) in volatile memory.

key
	

string/Array of string
	

*required
	

If key is a (single) string, the value record is stored as a property of the corresponding tableName object. Otherwise, if key is an Array of string, for each entry in key an homonymous property of tableName is assigned the same value record. 
Function deleteRecord(tableName, key, callback)

Description: Delete a record by incrementing the record’s version number and setting the new record “delete property” to true. The old version of the record is saved.

Name
	

Type
	

Value
	

Description

tableName
	

string
	

*required
	

Unique name of the context for which the operation is applied. Each instance of MemoryStorageStrategy keeps an object with one property per context (of same name) in volatile memory.

key
	

string/Array of string
	

*required
	

If key is a (single) string, the value record is stored as a property of the corresponding tableName object. Otherwise, if key is an Array of string, for each entry in key an homonymous property of tableName is assigned the same value record. 

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

Error object
	

record
	

Object
	

Description: An error object containing a message. / The updated record.

StorageStrategy
	

Memory
	

SingleDSU
	

MultiUser

	

tableName:String

Unique name of the context for which the operation is applied. Each instance of MemoryStorageStrategy keeps an object with one property per context (of same name) in volatile memory.
	

	

insertRecord()

updateRecord()

deleteRecord()
	

key:{string|Array of string}

If key is a (single) string, the value record is stored as a property of the corresponding tableName object. Otherwise, if key is an Array of string, for each entry in key an homonymous property of tableName is assigned the same value record.
	

