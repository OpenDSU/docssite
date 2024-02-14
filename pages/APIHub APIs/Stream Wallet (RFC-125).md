---
title: Stream Wallet 
layout: home
parent: OpenDSU APIHub APIs
nav_order: 6
---


# **Stream Wallet**
{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs)

**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)


<!-- TOC -->

* [Abstract](#abstract)
* [1. Stream Wallet Creation](#1-stream-wallet-creation)
  * [1.1 Path Parameters](#11-path-parameters)
  * [1.2 Responses](#12-responses)
* [2. Streaming Wallet Content](#2-streaming-wallet-content)
  * [2.1 Path Parameters](#21-path-parameters)
  * [2.2 Request headers](#22-request-headers)
  * [2.3 Responses](#23-responses)
    * [2.3.1 Responses Headers for HTTP Status Code 206](#231-responses-headers-for-http-status-code-206)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->



# **Abstract**

<p style='text-align: justify;'>This RFC provides information on wallet operations using streams.</p>

#  **1. Stream Wallet Creation**

<p style='text-align: justify;'>Create a wallet for the specified "userId" on the specified "domain". The operation creates the enclaves and stores the enclaveKeySSIs in the environment.json configuration. The "userId" is stored in a metadata.json file.</p>


    PUT /stream/{domain}/create-wallet/{userId}

## 1.1 Path Parameters


| **Name** | **Type** | **Value**  | **Description**                                     |
|:---------|:---------|:-----------|:----------------------------------------------------|
| domain   | string   | *required  | Wallet domain.                                      |
| userID   | string   | *required  | UserId of the user that demands the wallet creation |


## 1.2 Responses


| **Status Code** | **Description**                                                                                                                                                                                                   |
|:----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 200             | Operation handled with success. Returns the keySSI of the newly created wallet. <br/>Schema: plain/text <br/>  *29fgyfTQXJmJNni42zuJu3NXHgtUuXk3318NMMTrYKfj1gwAttt16rKq3vPCUjFV3KZeF9HJnaZ nW4FnN7t7zBQFKjdXBwX* |
| 400             | Worker resolver error.                                                                                                                                                                                            |
| 500             | Invalid KeySSI.                                                                                                                                                                                                   |


#  **2. Streaming Wallet Content**

<p style='text-align: justify;'>Streaming the content of the "requestedPath" from the wallet identified with provided "keySSI".</p>


    GET /stream/{keySSI}/{requestedPath}

## 2.1 Path Parameters


| **Name**    | **Type** | **Value**  | **Description**                                                                                                                |
|:------------|:---------|:-----------|:-------------------------------------------------------------------------------------------------------------------------------|
| keySSI      | string   | *required  | KeySSI of the wallet in base58 encoding.                                                                                       |
| requestPath | string   | *required  | Requested wallet path desired to be streamed. If it is empty, the whole wallet will be streamed. <br/> Example:/100MBFile.mp4. |


## 2.2 Request headers


| **Name**    | **Type** | **Value**  | **Description**                                                                                                                                                      |
|:------------|:---------|:-----------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| range       | string   | *required  | <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range">Range</a> Standard Header. It should respect the standard. <br/> Example: bytes= 200-1000  |
| requestPath | string   | *required  | Requested wallet path desired to be streamed. If it is empty, the whole wallet will be streamed. <br/>   Example:/100MBFile.mp4.                                     |


## 2.3 Responses


| **Status Code** | **Description**                                                                               |
|:----------------|:----------------------------------------------------------------------------------------------|
| 206             | Partial content was sent according to the range header.                                       |
| 400             | Requires range header.                                                                        |
| 500             | Internal stream component error.                                                              |




### 2.3.1 Responses Headers for HTTP Status Code 206

| **Header Name** | **Type** | **Description**                |
|:----------------|:---------|:-------------------------------|
| Content-Range   | string   | Example:  bytes 200-1000/50000 |
| Accept-Ranges   | string   | Example: bytes                 |
| Content-Length  | string   | Example: 800                   |
| Content-Type    | string   | Example: video/mp4             |





**Contributors**


1. <p style='text-align: justify;'><a href="https://www.axiologic.net/">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="https://www.opendsu.org/">www.opendsu.org</a> site.

2. <p style='text-align: justify;'><a href="https://pharmaledger.org/">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.

3. PrivateSky Research Project: MIT licensed content accordingly with the contracts. 
<a href="https://profs.info.uaic.ro/~ads/PrivateSky/"> https://profs.info.uaic.ro/~ads/PrivateSky/</a>



# Annex 1. Contributors

| **Current Editors**                  | **Email**                                                       |
|:-------------------------------------|:----------------------------------------------------------------|
| Sînică Alboaie                       | sinica.alboaie@axiologic.net                                    |
| Rafael Mastaleru                     | raf@rms.ro                                                      |
| Nicoleta Mihalache                   | nicoleta@axiologic.net                                          |
| Teodor Lupu                          | teodor@axiologic.net                                            |
| **Contributors Axiologic Research**  | **Email**                                                       |
| Adrian Ganga                         | adrian@axiologic.net                                            |
| Andi-Gabriel Țan                     | andi@axiologic.net                                              |
| Cosmin Ursache                       | cosmin@axiologic.net                                            |
| Daniel Sava                          | daniel@axiologic.net                                            |
| Nicoleta Mihalache                   | nicoleta@axiologic.net                                          |
| Teodor Lupu                          | teodor@axiologic.net                                            |
| Valentin Gérard                      | valentin@axiologic.net                                          |
| **PrivateSky Contributors**          | **Email**                                                       |
| Daniel Visoiu                        | visoiu.daniel.g@gmail.com (SGiant)                              |
