---
title: Cache 
layout: home
parent: OpenDSU Contributors
nav_order: 18
---

# **Cache**

{: .feedback }
A period when the community can review the RFC (comment Docs).


**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)

<!-- TOC -->
* [Abstract](#abstract)
* [1. Cache functions](#1-cache-functions)
  * [Function getCacheForVault(storeName, lifetime)](#function-getcacheforvaultstorename-lifetime)
  * [Function getMemoryCache(storeName)](#function-getmemorycachestorename)
  * [Function get(key, callback)](#function-getkey-callback)
  * [Function put(key, value, callback)](#function-putkey-value-callback)
  * [Function set(key, value, callback)](#function-setkey-value-callback)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->

# Abstract

<p style='text-align: justify;'>This API space provides utilities for caching DSUs in the personal environment.
</p>

# 1. Cache functions

## Function getCacheForVault(storeName, lifetime)

<p style='text-align: justify;'><b>Description</b>: Return the cache that is set up in your environment. In case it does not exist, it will create one.
</p>

| **Name**  | **Type**    | **Value**  | **Description**                                                                   |
|:----------|:------------|:-----------|:----------------------------------------------------------------------------------|
| storeName | string      | *required  | The name of your storage.                                                         |
| lifetime  | number (ms) |            | Gives a lifetime to the new cache that will be created in case it does not exist. |


**Returns**

| **Name**                                     | **Description**                                                                                                                                                                                                                       |
|:---------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MemoryCache, FSCache or IndexDBCache object  | The cache setup for your environment is returned. <a href="https://docs.google.com/document/d/e/2PACX-1vSLbAxmsw0gkpOoOSmC03GJ_ZspbBhkpsYNRS-bqsAMac7IEHWOLSGRECBjCKmkX1sR9Q6ygASxlEDi/pub">>see operations available on caches</a>.  |

## Function getMemoryCache(storeName)

<p style='text-align: justify;'><b>Description</b>: Create a new MemoryCache Object and add it to the Stores array.
</p>


| **Name**  | **Type**    | **Value**  | **Description**                                                                   |
|:----------|:------------|:-----------|:----------------------------------------------------------------------------------|
| storeName | string      | *required  | The name of your storage.                                                         |


**Returns**


| **Name**                                     | **Description**                                                                                                                                                                                                                      |
|:---------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MemoryCache  object | A new cache is set up in your environment and is returned directly. <a href="https://docs.google.com/document/d/e/2PACX-1vSLbAxmsw0gkpOoOSmC03GJ_ZspbBhkpsYNRS-bqsAMac7IEHWOLSGRECBjCKmkX1sR9Q6ygASxlEDi/pub">>see operations available on caches</a>.                                                  |



<p style='text-align: justify;'>Here is the list of operations available on different types of cache:
</p>


| **Name**                                       | **Description**                                      |
|:-----------------------------------------------|:-----------------------------------------------------|
| FSCache                                        | The FSCache is a cache stored inside DSUs.           |
| IndexDBCache                                   | The IndexDBCache is stored inside a noSQL database.  |
| MemoryCache                                    | The MemoryCache is stored in memory.                 |


<p style='text-align: justify;'>All of these objects have the same functions: get, put, set (and delete for IndexDBCache) to interact with the cache, even though the functions look different due to the different types of storage.
</p>


| **Name**                                        | **Description**                                       |
|:------------------------------------------------|:------------------------------------------------------|
| get                                             | Get the content identified by your key in the cache.  |
| put                                             | Store a key/value pair in the cache.                  |
| set                                             | (equal to put).                                       |


## Function get(key, callback)

**Description**: Store a key/value pair in the cache.


| **Name**   | **Type**     | **Value**   | **Description**                                                                    |
|:-----------|:-------------|:------------|:-----------------------------------------------------------------------------------|
| key        | string       | *required   | The key from which you want to get the associated value.                           |
| callback   | function     | *required   |                                                                                    |


**Callback parameters**


| **Name**                                        | **Description**                                       | **Response example**  |
|:------------------------------------------------|:------------------------------------------------------|:----------------------|
| err                                             | ErrorWrapper object                                   |                       |
| content                                         | String                                                |                       |



<p style='text-align: justify;'><b>Description</b>: Contains a message and the error./ The content identified by the key.</p>


## Function put(key, value, callback)

<p style='text-align: justify;'>**Description**: Store a key/value pair in the cache.
</p>


| **Name**    | **Type**      | **Value**    | **Description**                                                                    |
|:------------|:--------------|:-------------|:-----------------------------------------------------------------------------------|
| key         | string        | *required    | The key you want to associate value to.                         |
| value       | string        | *required    |            The new value for the key.                                                                        |
| callback    | function      | *required    |                                                                                                              |


**Callback parameters**


| **Name**                                        | **Description**                                       | **Response example**  |
|:------------------------------------------------|:------------------------------------------------------|:----------------------|
| err                                             | ErrorWrapper object                                   |                       |


**Description**: Contains a message and the error.

## Function set(key, value, callback)

<p style='text-align: justify;'><b>Description</b>: Get the full content of the table and asynchronously return an array with all the  records satisfying the condition tested by the filterFunction.
</p>


| **Name**    | **Type** | **Value**    | **Description**                                                                    |
|:------------|:---------|:-------------|:-----------------------------------------------------------------------------------|
| key         | string   | *required    | The key you want to associate value to.                         |
| value       | string   | *required    |            The new value for the key.                                                                        |
| callback    | function | *required    |                                                                                                              |


**Callback parameters**


| **Name**                                        | **Description**                                       | **Response example**  |
|:------------------------------------------------|:------------------------------------------------------|:----------------------|
| err                                             | ErrorWrapper object                                   |                       |


**Description**: Contains a message and the error.


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




