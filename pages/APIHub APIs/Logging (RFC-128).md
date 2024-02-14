---
title: Logging 
layout: home
parent: OpenDSU APIHub APIs
nav_order: 9
---



# **Logging**
{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs)

**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)


<!-- TOC -->
* [Abstract](#abstract)
* [1.Add Log](#1add-log)
  * [1.1 Path Parameters](#11-path-parameters)
  * [1.2 Body Parameters](#12-body-parameters)
    * [1.2.1 Example: Application/JSON](#121-example-applicationjson)
  * [1.3 Responses](#13-responses)
* [2. Read Log](#2-read-log)
  * [2.1 Path Parameters](#21-path-parameters)
  * [2.2 Responses](#22-responses)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->






# **Abstract**

<p style='text-align: justify;'>Handles read/write log message operations. The Logging API service provides support for storing and retrieving log files using anchorId and logLevel criteria.</p>


# **1.Add Log**

<p style='text-align: justify;'>Stores to the provided log message or file content, and will be associated with the provided anchorId and log level.</p>
	

    POST /log/add/{anchorId}/{loglevel}


## 1.1 Path Parameters


| **Name** | **Type** | **Value** | **Description**                                         |
|:---------|:---------|:----------|:--------------------------------------------------------|
| anchorId | string   | *required | AnchorId, base58 encoded zero access keySSI.            |
| loglevel | string   | *required | The type of log level associated with the provided log. |




## 1.2 Body Parameters

| Name | Description                        |
|:-----|:-----------------------------------|
| body | Body will contain the log message. |



### 1.2.1 Example: Application/JSON

    {

      "message": "contentOfTheMessage"

     }




## 1.3 Responses


| **Status Code** | **Description**                                                                                           |
|:----------------|:----------------------------------------------------------------------------------------------------------|
| 200             | Returns the path under which the file contents were saved (example:  see  2.3.1 schema application/json). |
| 400             | Log message could not be found or is not of type string.                                                  |
| 500             | File I/O error.                                                                                           |



# **2. Read Log**

<p style='text-align: justify;'>Get the logs stored for the provided anchorId. Return all log records found with information about the uploaded date, level, and anchorId.</p>
	

    GET /log/get/{anchorID}

## 2.1 Path Parameters


| **Name** | **Type** | **Value** | **Description**                                         |
|:---------|:---------|:----------|:--------------------------------------------------------|
| anchorId | string   | *required | AnchorId, base58 encoded zero access keySSI.            |



## 2.2 Responses


| **Status Code** | **Description**                    |
|:----------------|:-----------------------------------|
| 200             | Returns the saved logs (see 2.2.1) |

2.2.1. Example: Application/JSON

  ```js 
  {

     "date": "string",

     "level": "string",

     "anchorID": "string",

     "message": "string"

   }

  ]
  
```


**Contributors**


1. <p style='text-align: justify;'><a href="https://www.axiologic.net/">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="https://www.opendsu.org/">www.opendsu.org</a> site.

2. <p style='text-align: justify;'><a href="https://pharmaledger.org/">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.

3. PrivateSky Research Project: MIT licensed content accordingly with the contracts. 
<a href="https://profs.info.uaic.ro/~ads/PrivateSky/"> https://profs.info.uaic.ro/~ads/PrivateSky/</a>


# **Annex 1. Contributors**

| **Current Editors**                  | **Email**                                                                         |
|:-------------------------------------|:----------------------------------------------------------------------------------|
| Sînică Alboaie                       | salboaie@gmail.com                                                                |
| **Contributors Axiologic Research**  | **Email**                                                                         |
| Adrian Ganga                         | adrian@axiologic.net                                                              |
| Andi-Gabriel Țan                     | andi@axiologic.net                                                                |
| Cosmin Ursache                       | cosmin@axiologic.net                                                              |
| Daniel Sava                          | daniel@axiologic.net                                                              |
| Nicoleta Mihalache                   | nicoleta@axiologic.net                                                            |
| Valentin Gérard                      | valentin@axiologic.net                                                            |
| **PharmaLedger Contributors**        | **Email**                                                                         |
| Ana Balan                            | bam@rms.ro (RMS)                                                                  |
| Bogdan Mastahac                      | mab@rms.ro (RMS)                                                                  |
| Rafael Mastaleru                     | raf@rms.ro (RMS)                                                                  |
