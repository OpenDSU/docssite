---
title: Static Server 
layout: home
parent: OpenDSU APIHub APIs
nav_order: 8
---


# **Static Server**
{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs)

**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)



<!-- TOC -->
* [Abstract](#abstract)
  * [1. Get Static Directory Contents](#1-get-static-directory-contents)
  * [1.1 Path Parameters](#11-path-parameters)
  * [1.2 Responses](#12-responses)
    * [1.2.1 Schema: application/json](#121-schema-applicationjson)
* [2. Upload File to specified folder](#2-upload-file-to-specified-folder)
  * [2.1 Path Parameters](#21-path-parameters)
  * [2.2 Body Parameters](#22-body-parameters)
  * [2.3 Responses](#23-responses)
  * [2.3.1 Schema: application/json](#231-schema-applicationjson)
* [3. Download File](#3-download-file)
  * [3.1 Path Parameters](#31-path-parameters)
  * [3.2  Responses](#32--responses)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->



# **Abstract**

This RFC covers Static Servers, which deliver static file content from the current location.


## 1. Get Static Directory Contents

<p style='text-align: justify;'>Return the file contents and directory structure from the directoryPath in json format. This API is used on each wallet creation when the new wallet inherits the code base and the wallet patch for the creation instance of the SSApp.</p>
	

    GET /directory-summary/{walletName}/{directoryPath}



## 1.1 Path Parameters


| **Name**      | **Type** | **Value** | **Description**                                   |
|:--------------|:---------|:----------|:--------------------------------------------------|
| walletName    | string   | *required | The wallet name for each you want to get details. |
| directoryPath | string   | *required | Directory resource.                               |



## 1.2 Responses


| **Status Code** | **Description**                                                                                |
|:----------------|:-----------------------------------------------------------------------------------------------|
| 200             | Return the directory structure and file contents (example: see 1.2.1 schema application/json). |
| 403             | Invalid Directory                                                                              |
| 404             | Directory not found.                                                                           |



### 1.2.1 Schema: application/json

    "/": {

    "seed":"5kieNHd9wqBPNZCqdLnyRV4JPbmT9QjVPcPWuYXnuLrWfFkGdeqyNYbqSkx4wX23gp2

     69R1vDHTF9aMpXzbXprnoJNKsjwS9VVJtzqo4YFArHwN11i1Ev64Evk3ztU1FWvim5r6fw9rcb4P

     S1FznoCnMigShSo5siJm8jZfm94bncJRFv8az8WcxKLhjLHahoPSUg6iCYvDp8QS3"

     }

     }



# **2. Upload File to specified folder**

<p style='text-align: justify;'>Upload the contents of a file into a specified folder. It is used in the context of wallets that are booted using service workers.</p>
	

    POST /files/upload/{folder}




## 2.1 Path Parameters


| **Name** | **Type** | **Value** | **Description**                                        |
|:---------|:---------|:----------|:-------------------------------------------------------|
| folder   | string   | *required | The folder under which file contents will be uploaded. |




## 2.2 Body Parameters

| Name | Description                                                                           |
|:-----|:--------------------------------------------------------------------------------------|
| body | The file object that is requested to be uploaded.Media Type: application/octet-stream.|



## 2.3 Responses


| **Status Code** | **Description**                                                                                           |
|:----------------|:----------------------------------------------------------------------------------------------------------|
| 200             | Returns the path under which the file contents were saved (example:  see  2.3.1 schema application/json). |
| 500             | Invalid folder or I/O operation.                                                                          |



## 2.3.1 Schema: application/json

    {

        "path": "/data/my-private-data.json"

     } 


# **3. Download File**

<p style='text-align: justify;'>Download the contents of the file identified by the filepath. It is used in the context of wallets that are booted using service workers.</p>
	

    GET /files/download/{filepath}



## 3.1 Path Parameters


| **Name** | **Type** | **Value** | **Description**                |
|:---------|:---------|:----------|:-------------------------------|
| filePath | string   | *required | The path of the file download. |



## 3.2  Responses


| **Status Code** | **Description**                              |
|:----------------|:---------------------------------------------|
| 200             | Returns the file's content in binary format. |
| 404             | I/O operation error or invalid file path.    |



**Contributors**


1. <p style='text-align: justify;'><a href="https://www.axiologic.net/">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="https://www.opendsu.org/">www.opendsu.org</a> site.

2. <p style='text-align: justify;'><a href="https://pharmaledger.org/">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.

3. PrivateSky Research Project: MIT licensed content accordingly with the contracts. 
<a href="https://profs.info.uaic.ro/~ads/PrivateSky/"> https://profs.info.uaic.ro/~ads/PrivateSky/</a>



# **Annex 1. Contributors**

| **Current Editors**                                | **Email**                                                                     |
|:---------------------------------------------------|:------------------------------------------------------------------------------|
| Andi-Gabriel Țan                                   | andi@axiologic.net                                                            |
| Nicoleta Mihalache                                 | nicoleta@axiologic.net                                                        |
| **Contributors Axiologic Research**                | **Email**                                                                     |
| Adrian Ganga                                       | adrian@axiologic.net                                                          |
| Andi-Gabriel Țan                                   | andi@axiologic.net                                                            |
| Cosmin Ursache                                     | cosmin@axiologic.net                                                          |
| Daniel Sava                                        | daniel@axiologic.net                                                          |
| Nicoleta Mihalache                                 | nicoleta@axiologic.net                                                        |
| **PrivateSky Contributors**                        | **Email**                                                                     |
| Alex Sofronie                                      | alsofronie@gmail.com (DPO)                                                    |
| Cosmin Ursache                                     | cos.ursache@gmail.com (UAIC)                                                  |
| Daniel Sava                                        | sava.dumitru.daniel@gmail.com (HVS, AQS)                                      |
| Daniel Visoiu                                      | visoiu.daniel.g@gmail.com (SGiant)                                            |
| Lenuța Alboaie                                     | lalboaie@gmail.com (UAIC)                                                     |
| Rafael Mastaleru                                   | rafael@rms.ro (RMS)                                                           |
| Sînică Alboaie                                     | salboaie@gmail.com (UAIC)                                                     |
| Vlad Balmos                                        | vlad.balmos@gmail.com (Code932)                                               |
| **PharmaLedger Contributors**                      | **Email**                                                                     |
| Ana Balan                                          | bam@rms.ro (RMS)                                                              |
| Bogdan Mastahac                                    | mab@rms.ro (RMS)                                                              |
| Cosmin Ursache                                     | cos@rms.ro (RMS)                                                              |
| Rafael Mastaleru                                   | raf@rms.ro (RMS)                                                              |