---
title: Mapping Engine 
layout: home
parent: OpenDSU Contributors
nav_order: 17
---

# **Mapping Engine**
{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs)

**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)

<!-- TOC -->
* [Abstract](#abstract)
  * [1. Public functions from the Mapping Engine](#1-public-functions-from-the-mapping-engine)
    * [Function getMappingEngine(persistenceDSU, options)](#function-getmappingenginepersistencedsu-options)
    * [Function getMessagesPipe](#function-getmessagespipe)
    * [Function getErrorsMap](#function-geterrorsmap)
    * [Function defineMapping(matchFunction, mappingFunction)](#function-definemappingmatchfunction-mappingfunction)
    * [Function defineApi(name, implementation)](#function-defineapiname-implementation)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->



# **Abstract**

<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vRCRspWLroLWI8YEOrAcCWXZCwN6TI8gl2atRE8Wpfzxdk_WIPOarEeV6xhl_DTijdylQGyGmauRK8q/pub?w=1160&h=591" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
</div>


## **1. Public functions from the Mapping Engine**

### **Function getMappingEngine(persistenceDSU, options)**

**Description:** Creates a new MappingEngine Object.

| **Name**       | **Type** | **Value** | **Description**                                                                                                                    |
|:---------------|:---------|:----------|:-----------------------------------------------------------------------------------------------------------------------------------|
| persistenceDSU | object   | *required | The DSU that will be used as a storage service. It must contain these three functions: beginBatch(), commitBatch(), cancelBatch(). |
| options        |          |           |                                                                                                                                    |


	

### **Function getMessagesPipe**

**Description:** Returns the pipe and waits for messages that will later be matched and mapped to certain functions.


### **Function getErrorsMap**

**Description:** Returns an error map for different types of errors that might occur while receiving messages or while mapping them.



### **Function defineMapping(matchFunction, mappingFunction)**

**Description:** After the message is received and digested, this function is used to map that message to the desired method.


| **Name**        | **Type** | **Value** | **Description**                                                                                                                   |
|:----------------|:---------|:----------|:----------------------------------------------------------------------------------------------------------------------------------|
| matchFunction   | function | *required | A function that will match the message to a certain method.                                                                       |
| mappingFunction | function | *required | The mapping function that is being selected.                                                                                                                                  |



### **Function defineApi(name, implementation)**

**Description:** Selects a function that will represent the implementation for a certain API.


| **Name**       | **Type** | **Value** | **Description**                                                                       |
|:---------------|:---------|:----------|:--------------------------------------------------------------------------------------|
| name           | string   | *required | The name of the API                                                                   |
| implementation | string   | *required | The name of the function that will represent the implementation for that certain api. |



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


