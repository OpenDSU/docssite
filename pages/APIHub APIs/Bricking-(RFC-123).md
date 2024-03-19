---
title: Bricking 
layout: home
parent: OpenDSU APIHub APIs
nav_order: 4
---


# **Bricking (RFC-123)**
{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs)

**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)



<!-- TOC -->
* [Abstract](#abstract)
* [1. Put Brick](#1-put-brick)
  * [1.1 Path Parameters](#11-path-parameters)
  * [1.2 Body Parameters](#12-body-parameters)
  * [1.3 Responses](#13-responses)
* [2. Download multiple Bricks](#2-download-multiple-bricks)
  * [2.1 Path Parameters](#21-path-parameters)
  * [2.2 Query Parameters](#22-query-parameters)
  * [2.3 Responses](#23-responses)
* [3.Get Brick](#3get-brick)
  * [3.1 Path Parameters](#31-path-parameters)
  * [3.2 Responses](#32-responses)
* [4.Store Transaction](#4store-transaction)
  * [4.1 Responses](#41-responses)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->


# **Abstract**

<p style='text-align: justify;'>Storage Service for all the bricks generated from DSUs. The "bricking" API space offers a set of portable functions for creating and reading bricks. The operations exposed by the Bricking service are used in the context of construction and reconstruction of the DSU by the OpenDSU SDK.</p>




# **1. Put Brick**

<p style='text-align: justify;'>Stores the encrypted content of the brick on the Brick storage and returns the hashLink for later access.</p>
	

    PUT /bricking/{domain}/put-brick



## 1.1 Path Parameters


| **Name** | **Type** | **Value** | **Description**                 |
|:---------|:---------|:----------|:--------------------------------|
| domain   | string   | *required | The domain used for the bricks. |



## 1.2 Body Parameters

| **Name** | **Description**                               |
|:---------|:----------------------------------------------|
| body     | The stream that contains the encrypted brick. |



## 1.3 Responses

| **Status Code** | **Description**                    |
|:----------------|:-----------------------------------|
| 201             | Returns the hash of the content.   |
| 409             | Invalid hashLink.                  |
| 500             | Fallback generic error response.   |




# **2. Download multiple Bricks**

<p style='text-align: justify;'>Get the encrypted content of the brick for each hashLink in the provided list of hashLinks.</p>
	

    GET /bricking/{domain}/



## 2.1 Path Parameters


| **Name** | **Type** | **Value** | **Description**                 |
|:---------|:---------|:----------|:--------------------------------|
| domain   | string   | *required | The domain used for the bricks. |



## 2.2 Query Parameters


| **Name** | **Type** | **Value** | **Description**                   |
|:---------|:---------|:----------|:----------------------------------|
| hashes   | string   | *required | Array, comma delimited hashlinks. |


## 2.3 Responses


| **Status Code** | **Description**                                                                |
|:----------------|:-------------------------------------------------------------------------------|
| 200             | Returns the encrypted content of a brick as a Buffer {length} {brickContent}   |
| 404             | Brick not found.                                                               |
| 500             | Brick domain not found.                                                        |



# **3.Get Brick**

<p style='text-align: justify;'>Get the encrypted content of the brick identified by the provided hash link.</p>


     GET /bricking/{domain}/get-brick/{hashLink}


## 3.1 Path Parameters


| **Name** | **Type** | **Value** | **Description**                 |
|:---------|:---------|:----------|:--------------------------------|
| domain   | string   | *required | The domain used for the bricks. |
| hashLink | string   | *required |                                 |



## 3.2 Responses



| **Status Code** | **Description**                                       |
|:----------------|:------------------------------------------------------|
| 200             | Returns the encrypted content of a brick as a Buffer. |
| 404             | Brick not found.                                      |
| 500             | Brick domain not found.                               |



# **4.Store Transaction**

<p style='text-align: justify;'>Store transactions in Bricks Storage. Usually, the stored data is represented by the anchorData. When the maximum number of transactionsPerBlock is reached, the block is built and stored in Bricks Storage.</p>
	

    PUT /bricksFabric/add


## 4.1 Responses


| **Status Code** | **Description**                           |
|:----------------|:------------------------------------------|
| 201             | Transaction data was stored successfully. |
| 500             | Failed to store transactions.             |




**Contributors**



1. <p style='text-align: justify;'><a href="https://www.axiologic.net/">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="https://www.opendsu.org/">www.opendsu.org</a> site.

2. <p style='text-align: justify;'><a href="https://pharmaledger.org/">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.

3. PrivateSky Research Project: MIT licensed content accordingly with the contracts. 
<a href="https://profs.info.uaic.ro/~ads/PrivateSky/"> https://profs.info.uaic.ro/~ads/PrivateSky/</a>



# **Annex 1. Contributors**

| **Current Editors**                 | **Email**                                                        |
|:------------------------------------|:-----------------------------------------------------------------|
| Sînică Alboaie                      | sinica.alboaie@axiologic.net                                     |
| Rafael Mastaleru                    | raf@rms.ro                                                       |
| Nicoleta Mihalache                  | nicoleta@axiologic.net                                           |
| Teodor Lupu                         | teodor@axiologic.net                                             |
| **Contributors Axiologic Research** | **Email**                                                        |
| Adrian Ganga                        | adrian@axiologic.net                                             |
| Andi-Gabriel Țan                    | andi@axiologic.net                                               |
| Cosmin Ursache                      | cosmin@axiologic.net                                             |
| Daniel Sava                         | daniel@axiologic.net                                             |
| Nicoleta Mihalache                  | nicoleta@axiologic.net                                           |
| Teodor Lupu                         | teodor@axiologic.net                                             |
| **PrivateSky Contributors**         | **Email**                                                        |
| Alex Sofronie                       | alsofronie@gmail.com (DPO)                                       |
| Cosmin Ursache                      | cos.ursache@gmail.com (UAIC)                                     |
| Daniel Sava                         | sava.dumitru.daniel@gmail.com (HVS, AQS)                         |
| Daniel Visoiu                       | visoiu.daniel.g@gmail.com (SGiant)                               |
| Lenuța Alboaie                      | lalboaie@gmail.com (UAIC)                                        |
| Rafael Mastaleru                    | rafael@rms.ro (RMS)                                              |
| Sînică Alboaie                      | salboaie@gmail.com (UAIC)                                        |
| Vlad Balmos                         | vlad.balmos@gmail.com (Code932)                                  |
| **PharmaLedger Contributors**       | **Email**                                                        |
| Ana Balan                           | bam@rms.ro (RMS)                                                 |
| Bogdan Mastahac                     | mab@rms.ro (RMS)                                                 |
| Cosmin Ursache                      | cos@rms.ro (RMS)                                                 |
| Rafael Mastaleru                    | raf@rms.ro (RMS)                                                 |



