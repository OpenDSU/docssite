---
title: Cloud Wallet 
layout: home
parent: OpenDSU APIHub APIs
nav_order: 5
---


# **Cloud Wallet (RFC-124)**
{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs)

**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)


<!-- TOC -->
* [Abstract](#abstract)
* [1.Get index HTML resource](#1get-index-html-resource)
  * [1.1 Path Parameters](#11-path-parameters)
  * [1.2 Responses](#12-responses)
* [2.Get wallet file content](#2get-wallet-file-content)
  * [2.1 Path Parameters](#21-path-parameters)
  * [2.2 Responses](#22-responses)
* [3.Edge Wallet](#3edge-wallet)
  * [3.1 File retrieval in iframe wallets-version 1](#31-file-retrieval-in-iframe-wallets-version-1)
    * [3.1.1 Path Parameters](#311-path-parameters)
    * [3.1.2 Responses](#312-responses)
  * [3.2 File retrieval in iframe wallets-version 2](#32-file-retrieval-in-iframe-wallets-version-2)
    * [3.2.1 Path Parameters](#321-path-parameters)
    * [3.2.2 Responses](#322-responses)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->




# Abstract

<p style='text-align: justify;'>This RFC provides information about operations using DSU workers by simulating Service Workers.</p>




# 1.Get index HTML resource

Serving the index.html content of the application.

     GET /{appName}/loader/cloud-wallet/{keySSI}/


## 1.1 Path Parameters


| **Name** | **Type** | **Value**  | **Description**              |
|:---------|:---------|:-----------|:-----------------------------|
| appName  | string   | *required  | appName                      |
| keySSI   | string   | *required  | keySSI in  base 58 enconding |




## 1.2 Responses


| **Status Code** | **Description**                                                                            |
|:----------------|:-------------------------------------------------------------------------------------------|
| 200             | Operation handled with success. Returns the content of the file.                           |
| 400             | Worker resolver error.                                                                     |
| 500             | Invalid KeySSI.                                                                            |


# 2.Get wallet file content

<p style='text-align: justify;'>Serves the requested content, identified by the appended path, using DSU workers.</p>
	

    GET /cloud-wallet/{keySSI}/{filePath}



## 2.1 Path Parameters


| **Name** | **Type** | **Value**  | **Description**                |
|:---------|:---------|:-----------|:-------------------------------|
| KeySSI   | string   | *required  | keySSI in  base 58 enconding . |
| filePath | string   | *required  | File resource.                 |



## 2.2 Responses


| **Status Code** | **Description**                                                                             |
|:----------------|:--------------------------------------------------------------------------------------------|
| 200             | Operation handled with success. Returns the content of the file.                            |
| 400             | Worker resolver error.                                                                      |
| 500             | Invalid KeySSI.                                                                             |




# 3.Edge Wallet

<p style='text-align: justify;'>Web Browsers can use Service Workers and other sandboxing mechanisms (iframes, workers) to execute the code and to display the interface that is coded inside DSUs. The use of Service Workers (SW) aims to replace the need for servers. By using service workers, it is possible to store data in DSUs and to retrieve data from DSUs, including the HTML and JavaScript files used by the user interfaces as described in OpenDSU Concepts: SSApp Architecture (RFC-028). The following two sets of APIs describe operations on wallets using service workers.</p>

## 3.1 File retrieval in iframe wallets-version 1

<p style='text-align: justify;'>Serves the requested content, identified by the appended path, using DSU workers. It is used only for keeping backward compatibility with old wallets that are still using SWs.</p>
	

    GET /iframe/{keySSI}/{filePath}


### 3.1.1 Path Parameters


| **Name** | **Type** | **Value**  | **Description**                              |
|:---------|:---------|:-----------|:---------------------------------------------|
| KeySSI   | string   | *required  | keySSI  of the wallet in  base58 enconding . |
| filePath | string   | *required  | Wallet file path.                            |


### 3.1.2 Responses


| **Status Code** | **Description**                                                                             |
|:----------------|:--------------------------------------------------------------------------------------------|
| 200             | Operation handled with success. Returns the content of the file.                            |
| 400             | Worker resolver error.                                                                      |
| 500             | Invalid KeySSI.                                                                             |





## 3.2 File retrieval in iframe wallets-version 2

<p style='text-align: justify;'>Version 2 of File retrieval in iframe wallets is required in order to keep some backward compatibility with the initial architecture of SSApps, which uses SWs. Notice the walletName and loader prefix paths segments that may be required in some cases of nested loading of SSApps.</p>
	

    GET /{walletName}/loader/iframe/{keySSI}/{filePath}


### 3.2.1 Path Parameters


| **Name**   | **Type** | **Value** | **Description**                                                                                                                |
|:-----------|:---------|:----------|:-------------------------------------------------------------------------------------------------------------------------------|
| walletName | string   | *required | Wallet application name identified as the folder that holds the troast-loader in ApiHub                                        |
| KeySSI     | string   | *required | KeySSI of the wallet in base58 encoding.                                                                                       |
| filePath   | string   | *required | Wallet file path.                                                                                                              |



### 3.2.2 Responses


| **Status Code** | **Description**                                                                             |
|:----------------|:--------------------------------------------------------------------------------------------|
| 200             | Operation handled with success. Returns the content of the file.                            |
| 400             | Worker resolver error.                                                                      |
| 500             | Invalid KeySSI.                                                                             |



**Contributors**


1. <p style='text-align: justify;'><a href="www.axiologic.net">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="www.opendsu.com">www.opendsu.com</a> site.

2. <p style='text-align: justify;'><a href="www.pharmaledger.eu">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.

3. <a href="www.privatesky.xyz">PrivateSky Research Project</a>: MIT licensed content accordingly with the contracts. https://profs.info.uaic.ro/~ads/PrivateSky/


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
| Alex Sofronie                        | alsofronie@gmail.com (DPO)                                      |
| Cosmin Ursache                       | cos.ursache@gmail.com (UAIC)                                    |
| Daniel Sava                          | sava.dumitru.daniel@gmail.com (HVS, AQS)                        |
| Daniel Visoiu                        | visoiu.daniel.g@gmail.com (SGiant)                              |
| Lenuța Alboaie                       | lalboaie@gmail.com (UAIC)                                       |
| Rafael Mastaleru                     | rafael@rms.ro (RMS)                                             |
| Sînică Alboaie                       | salboaie@gmail.com (UAIC)                                       |
| Vlad Balmos                          | vlad.balmos@gmail.com (Code932)                                 |
| **PharmaLedger Contributors**        | **Email**                                                       |
| Ana Balan                            | bam@rms.ro (RMS)                                                |
| Bogdan Mastahac                      | mab@rms.ro (RMS)                                                |
| Cosmin Ursache                       | cos@rms.ro (RMS)                                                |
| Rafael Mastaleru                     | raf@rms.ro (RMS)                                                |



