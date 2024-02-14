---
title: DB objects 
layout: home
parent: OpenDSU Contributors
nav_order: 11
---


# **DB objects**
{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs)

**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)


<!-- TOC -->
* [Abstract](#abstract)
* [1. DB Types summary](#1-db-types-summary)
  * [1.1 BasicDB](#11-basicdb)
    * [Function addIndex(tableName, fieldname, forceReindex, callback)](#function-addindextablename-fieldname-forcereindex-callback)
    * [Function getIndexedFields(tableName, callback)](#function-getindexedfieldstablename-callback)
    * [Function beginBatch()](#function-beginbatch)
    * [Function cancelBatch(callback)](#function-cancelbatchcallback)
    * [Function commitBatch(callback)](#function-commitbatchcallback)
    * [Function deleteRecord(tableName, key, callback)](#function-deleterecordtablename-key-callback)
    * [Function filter(tableName, query, sort, limit, callback)](#function-filtertablename-query-sort-limit-callback)
    * [Function getHistory(tableName, key, callback)](#function-gethistorytablename-key-callback)
    * [Function getRecord(tableName, key, callback)](#function-getrecordtablename-key-callback)
    * [Function insertRecord(tableName, key, record, callback)](#function-insertrecordtablename-key-record-callback)
    * [Function updateRecord(tableName, key, record, callback)](#function-updaterecordtablename-key-record-callback)
    * [Function writeKey(tableName, key, value, callback)](#function-writekeytablename-key-value-callback)
    * [Function readKey(tableName, key, callback)](#function-readkeytablename-key-callback)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->





# **Abstract**

<p style='text-align: justify;'>Operations available on the different types of databases provided by the <a href="https://www.opendsu.org/pages/contributors/Database%20(RFC-061).html">Database</a> API are all available in this RFC. The BasicDB is created using a storage strategy. Several storage strategies are available, but if a person wants to create a custom strategy, all the following functions must be present in his storage strategy.
</p>

<p style='text-align: justify;'><b>Warning:</b> the OpenDSU DBs are NOT key/value databases, but databases containing records organized as tables! These records have a primary key, but they can also be indexed on any of their fields. Additionally, we should note that no schema definition is required, and heterogeneous objects could be freely inserted (but some standard fields would make it more valuable).
</p>



# 1. **DB Types summary**

| **Type** | **Description**                     |
|:---------|:------------------------------------|
| BasicDB  | Initialize a basic noSQL database . |



## **1.1 BasicDB**

### **Function addIndex(tableName, fieldname, forceReindex, callback)**

<p style='text-align: justify;'><b>Description:</b> Add an index to all the values from a specific field in your table. It can be used to locate the data in your database faster.
</p>



| **Name**                | **Type** | **Value** | **Description**                                                                                                                                                                                                                                                                                                                                                                             |
|:------------------------|:---------|:----------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| tableName               | string   | *required | Name of the table inside your database.                                                                                                                                                                                                                                                                                                                                                     |
| fieldname               | string   | *required | Name of the field in your table that you want to index.                                                                                                                                                                                                                                                                                                                                     | 
| forceReindex (optional) |          |           | <p style='text-align: justify;'>Controls whether to create a new index for an already indexed field. If true, a new index for the specified fieldName will be created, regardless of whether an index for the fieldName already exists. If false, the field fieldName will be indexed only if there are no indexes for the specified field. By default, forceReindex is set to false.</p>   |
| callback                | function | *required |                                                                                                                                                                                                                                                                                                                                                                                             |



**Callback parameters**

| **Name**                    | **Type**     | **Response example** |
|:----------------------------|:-------------|:---------------------|
| err                         | Error object |                      |

**Description**: An error object containing a message.


### **Function getIndexedFields(tableName, callback)**

**Description:** Returns the list of the indexed fields in the specified table.


| **Name**                | **Type** | **Value** | **Description**                                                                                                                                                                                                                                                                                                                                       |
|:------------------------|:---------|:----------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| tableName               | string   | *required | Name of the table inside your database field name, forceReindex.                                                                                                                                                                                                                                                                                      |
| callback                | function | *required |                                                                                                                                                                                                                                                                                                                                                       |


**Callback parameters**

| **Name**      | **Type**         | **Response example** |
|:--------------|:-----------------|:---------------------|
| err           | Error object     |                      |
| indexedFields | Array of strings |                      |


**Description:** An error object containing a message. / The list of indexed fields in the specified table.



### **Function beginBatch()**

**Description:** Start a batch of operations on your DSU without anchoring changes.

**Returns**


| Name              | Description                              |
|:------------------|:-----------------------------------------|
| callback function | Prevent anchoring after each operation.  |


### **Function cancelBatch(callback)**

**Description:** Cancel the batch of operations in progress.


| **Name**                | **Type** | **Value** | **Description**                                                                                                                                                                                                                                                                                                                                       |
|:------------------------|:---------|:----------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| callback                | function | *required |                                                                                                                                                                                                                                                                                                                                                       |



**Callback parameters**

| **Name**      | **Type**         | **Response example** |
|:--------------|:-----------------|:---------------------|
| err           | Error object     |                      |

**Description:** An error object containing a message.


### **Function commitBatch(callback)**

**Description:** Anchor the changes from the batch of operations on your DSU.


| **Name**                | **Type** | **Value** | **Description**                                                                                                                                                                                                                                                                                                                                       |
|:------------------------|:---------|:----------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| callback                | function | *required |                                                                                                                                                                                                                                                                                                                                                       |



**Callback parameters**

| **Name**      | **Type**         | **Response example** |
|:--------------|:-----------------|:---------------------|
| err           | Error object     |                      |


**Description:** An error object containing a message.



### **Function deleteRecord(tableName, key, callback)**

<p style='text-align: justify;'><b>Description: </b>Delete a record by incrementing the record’s version number and setting the new record “delete property” to true. The old version of the record is saved.
</p>



| **Name**  | **Type** | **Value** | **Description**                                                                                                                                                                                                                                                                                                                                                                               |
|:----------|:---------|:----------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| tableName | string   | *required | Name of the table inside your database.                                                                                                                                                                                                                                                                                                                                                       |
| key       | string   | *required | Delete the existing record for this key.                                                                                                                                                                                                                                                                                                                                                      |
| callback  | function | *required |                                                                                                                                                                                                                                                                                                                                                                                               |




**Callback parameters**

| **Name** | **Type**     | **Response example** |
|:---------|:-------------|:---------------------|
| err      | Error object |                      |
| record   | Object       |                      |


**Description:** An error object containing a message./The updated record.





### **Function filter(tableName, query, sort, limit, callback)**

**Description:** Returns the list of records satisfying the conditions in the specified query.



| **Name**         | **Type**                   | **Value** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|:-----------------|:---------------------------|:----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| tableName        | string                     | *required | Name of the table inside your database.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| query (optional) | string or array of strings |           | <p style='text-align: justify;'>The conditions applied on the table tableName.A query can contain a condition (as a string) or an array of conditions. A condition has the format “field operator value”, where field is the field on which the condition is applied, the operator is one of <,<=,>,>=,==, like, and the value is the value to which the field values are compared. In the case of the like operator, the value is a string representing a regular expression. If the query is not provided, the function will return all the records in table tableName. </p> |
| sort (optional)  | string                     |           | <p style='text-align: justify;'>Indicates if the returned array of records is sorted ascending or descending. The sort argument can have one of the values “asc” or “dsc”. By default, it has the value “asc”.</p>                                                                                                                                                                                                                                                                                                                                                             |
| limit (optional) | number                     |           | <p style='text-align: justify;'>The maximum number of records returned by the filter function. By default limit is Infinity, so all the records that satisfy the query are returned. </p>                                                                                                                                                                                                                                                                                                                                                                                      |
| callback         | function                   | *required |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |



**Callback parameters**

| **Name** | **Type**        | **Response example** |
|:---------|:----------------|:---------------------|
| err      | Error object    |                      |
| record   | Array of Object |                      |



<p style='text-align: justify;'><b>Description:</b> An error object containing a message./ An array containing all the records satisfying the filter function’s condition.
</p>


### **Function getHistory(tableName, key, callback)**

**Description:** Get the history of a record, including the deleted versions in a callback.



| **Name**         | **Type**                   | **Value** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-----------------|:---------------------------|:----------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| tableName        | string                     | *required | Name of the table inside your database.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Key              | string                     | *required | The key you want to get history from.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| callback         | function                   | *required |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |


**Callback parameters**


| **Name** | **Type**        | **Response example** |
|:---------|:----------------|:---------------------|
| err      | Error object    |                      |
| record   | Array of Object |                      |


**Description:** An error object containing a message./An array of all the different versions.






### **Function getRecord(tableName, key, callback)**

**Description:** Get a single row from a table.


| **Name**         | **Type**                   | **Value** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-----------------|:---------------------------|:----------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| tableName        | string                     | *required | Name of the table inside your database.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Key              | string                     | *required | The key you want to get history from.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| callback         | function                   | *required |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |



**Callback parameters**


| **Name** | **Type**        | **Response example** |
|:---------|:----------------|:---------------------|
| err      | Error object    |                      |
| record   | Array of Object |      



**Description:** An error object containing a message./The record present for the selected key in the selected table.




### **Function insertRecord(tableName, key, record, callback)**

**Description:** Insert a record, and return an error if it already exists.



| **Name**  | **Type** | **Value** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|:----------|:---------|:----------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| tableName | string   | *required | Name of the table inside your database.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Key       | string   | *required | The value of the primary key for that record. Usually, a record has a field with the name “pk”.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| record    | object   |           | The record content.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| callback  | function | *required |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |


**Callback parameters**


| **Name** | **Type**        | **Response example** |
|:---------|:----------------|:---------------------|
| err      | Error object    |                      |
| record   | Array of Object |      



**Description:** An error object containing a message./ The new record.



### **Function updateRecord(tableName, key, record, callback)**

**Description:** Update a record, and return an error if it does not exist.



| **Name**  | **Type** | **Value** | **Description**                         |
|:----------|:---------|:----------|:----------------------------------------|
| tableName | string   | *required | Name of the table inside your database. |
| Key       | string   | *required | The key you want to update.             |
| record    | object   |           | The record content.                     |
| callback  | function | *required | 


**Callback parameters**


| **Name** | **Type**        | **Response example** |
|:---------|:----------------|:---------------------|
| err      | Error object    |                      |
| record   | Array of Object |      


**Description:** An error object containing a message./ The updated record.



### **Function writeKey(tableName, key, value, callback)**

**Description:** Allows the insertion of a value of any type associated with the specified key, like in a key/value database.


| **Name**  | **Type** | **Value** | **Description**                           |
|:----------|:---------|:----------|:------------------------------------------|
| tableName | string   | *required | Name of the table inside your database.   |
| Key       | string   | *required | An unique identifier for the added value. |
| value     | any      |           | The record content.                       |
| callback  | function | *required | 


**Callback parameters**


| **Name** | **Type**     | **Response example** |
|:---------|:-------------|:---------------------|
| err      | Error object |                      |      




**Description:** An error object containing a message.




### **Function readKey(tableName, key, callback)**

**Description:** Reads the value associated with the provided key.


| **Name**  | **Type** | **Value** | **Description**                         |
|:----------|:---------|:----------|:----------------------------------------|
| tableName | string   | *required | Name of the table inside your database. |
| Key       | string   | *required | The identifier of the content read.     |
| callback  | function | *required | 


**Callback parameters**


| **Name** | **Type**     | **Response example** |
|:---------|:-------------|:---------------------|
| err      | Error object |                      |      
| value    | any          |                      |


**Description:** An error object containing a message./The value associated with the provided key.




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
