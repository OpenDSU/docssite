---
title: Anchoring Endpoint
layout: home
parent: OpenDSU APIHub APIs
nav_order: 2
---

# **Anchoring  Endpoint (RFC-121)**
{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs)

**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)


<!-- TOC -->
* [Abstract](#abstract)
* [Overview](#overview)
* [1. Create Anchor](#1-create-anchor)
  * [1.1 Path Parameters](#11-path-parameters)
  * [1.2 Body Parameters](#12-body-parameters)
  * [1.3 Responses](#13-responses)
* [2. Append to Anchor](#2-append-to-anchor)
  * [2.1 Path Parameters](#21-path-parameters)
  * [2.2 Body Parameters](#22-body-parameters)
  * [2.3 Responses](#23-responses)
* [3. Create or Update Multiple Anchors](#3-create-or-update-multiple-anchors)
  * [3.1 Path Parameters](#31-path-parameters)
  * [3.2 Body Parameters](#32-body-parameters)
  * [3.3 Responses](#33-responses)
* [4. Get All Versions](#4-get-all-versions)
  * [4.1 Path Parameters](#41-path-parameters)
  * [4.2 Responses](#42-responses)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->


# Abstract

<p style='text-align: justify;'>This RFC presents the process of creating anchors, adding a new HashLink to an AnchorId, creating or updating multiple anchors within the same request, and Getting all versions of an anchor.
</p>

# Overview

<p style='text-align: justify;'>The Anchoring component is an essential part of the APIHub of the OpenDSU. It provides a direct connection with the blockchain network and applies a security and validation context to any change operation in the landscape of the brick storage.</p>

<p style='text-align: justify;'>The anchoring service provides the CRU (Create, Read, Update) mechanism to create an anchor, update an anchor or read the information stored on the blockchain for that anchor. The strong connection of the brick storage and anchoring ensures access to the data from the brick storage through a KeySSI and a list of HashLinks. We use HashLinks to find the required bricks in the brick storage as they are gathered from the blockchain using the anchoring service. The anchor identifier (anchorID) must obtain the HashLinks from the blockchain, which we receive from the KeySSI.</p>



# 1. Create Anchor

<p style='text-align: justify;'>Create a new Anchor for a newly created brick. We call appendAnchor for any sub-sequenced update operation on the content of the DSU. The invocation still requires two HashLinks, but the last HashLink can be the same as the new HashLink or null, as both choices are valid.</p>
	


    PUT /anchor/{domain}/create-anchor/{keySSI}


## 1.1 Path Parameters

| **Name** | **Type** | **Value**  | **Description**                                                 |
|:---------|:---------|:-----------|:----------------------------------------------------------------|
| domain   | string   | *required  | The domain should be the same as the domain from the Anchorld.  |
| keySSI   | string   | *required  | keySSI base 58.                                                 |



## 1.2 Body Parameters

| **Name** | **Description**                                                                                                                                          |
|:---------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|
| body     | </br>  {   </br> hashLinklds:  { </br>new: string  </br> last: string  </br> </br> } </br> digitalProof: string </br> zkp: string </br>  </br>  }     |



## 1.3 Responses

| **Status Code** | **Description**                                   |
|:----------------|:--------------------------------------------------|
| 201             | Successfully created a new anchor for AnchorId.   |
| 403             | Access to resources is forbidden.                 |
| 409             | Access Error.                                     |
| 428             | HashLink for AnchorId is out of sync.             |
| 429             | Too many requests.                                |
| 500             | Fallback generic error response.                  |




# 2. Append to Anchor

<p style='text-align: justify;'>Append a new HashLink to an anchorId. The anchorId will already have a series of HashLinks attached, so when a new HashLink is attached, the previous HashLink must be provided to validate the change operation on the brick. The whole collection of HashLinks will provide access to all versions of the DSU.</p>


    PUT /anchor/{domain}/append-to-anchor/{keySSI}


## 2.1 Path Parameters


| **Name** | **Type** | **Value**  | **Description**                                                 |
|:---------|:---------|:-----------|:----------------------------------------------------------------|
| domain   | string   | *required  | The domain should be the same as the domain from the Anchorld.  |
| keySSI   | string   | *required  | keySSI base 58.                                                 |


## 2.2 Body Parameters


| **Name** | **Description**                                                                                                                                          |
|:---------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|
| body     | </br>  {   </br> hashLinklds:  { </br>new: string  </br> last: string  </br> </br> } </br> digitalProof: string </br> zkp: string </br>  </br>  }     |



## 2.3 Responses


| **Status Code** | **Description**                                                |
|:----------------|:---------------------------------------------------------------|
| 201             | Successfully appended the HashLink  for AnchorId.              |
| 403             | Access to resources is forbidden.                              |
| 409             | Access Error.                                                  |
| 428             | HashLink for AnchorId is out of sync.                          |
| 429             | Too many requests.                                             |
| 500             | Fallback generic error response.                               |


# 3. Create or Update Multiple Anchors

<p style='text-align: justify;'>Create or update multiple anchors in the same request in order to increase performance or when transactions are made.</p>

    PUT /anchor/{domain}/create-or-update-multiple-anchors


## 3.1 Path Parameters


| **Name** | **Type** | **Value**  | **Description**                                                    |
|:---------|:---------|:-----------|:-------------------------------------------------------------------|
| domain   | string   | *required  | All the created or updated anchors should be from the same domain. |


 
## 3.2 Body Parameters


| **Name** | **Description**                                                                                                                                          |
|:---------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|
| body     | </br>  {   </br> hashLinklds:  { </br>new: string  </br> last: string  </br> </br> } </br> digitalProof: string </br> zkp: string </br>  </br>  }     |




## 3.3 Responses


| **Status Code** | **Description**                                                                          |
|:----------------|:-----------------------------------------------------------------------------------------|
| 201             | Successfully created or updated the provided anchors.                                    |
| 403             | Access to resources is forbidden.                                                        |
| 409             | Access Error.                                                                            |
| 428             | HashLink for AnchorId is out of sync.                                                    |
| 429             | Too many requests.                                                                       |
| 500             | Fallback generic error response.                                                         |


# 4. Get All Versions

<p style='text-align: justify;'>Get all the versions of an anchor. Useful to obtain all HashLinks. To receive all the HashLinks required for an anchorId, an invocation of getAllVersions is necessary for accessing the content referred by a KeySSI. We need the list of HashLinks as we connect each HashLink  with a specific DSU or a version of a DSU.</p>
	

    GET /anchor/{domain}/get-all-versions/{keySSI}

## 4.1 Path Parameters



| **Name** | **Type** | **Value** | **Description**                                                |
|:---------|:---------|:----------|:---------------------------------------------------------------|
| domain   | string   | *required | The domain should be the same as the domain from the AnchorId. |
| keySSI   | string   | *required | keySSI base 58.                                                |



## 4.2 Responses


| **Status Code** | **Description**                                                                           |
|:----------------|:------------------------------------------------------------------------------------------|
| 200             | Returns the list of the versions of a keySSI.                                             |
| 404             | Invalid AnchorID.                                                                         |
| 429             | Too many Requests.                                                                        |



**Contributors**


1. <p style='text-align: justify;'><a href="www.axiologic.net">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="www.opendsu.com">www.opendsu.com</a> site.

2. <p style='text-align: justify;'><a href="www.pharmaledger.eu">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.

3. <a href="www.privatesky.xyz">PrivateSky Research Project</a>: MIT licensed content accordingly with the contracts. https://profs.info.uaic.ro/~ads/PrivateSky/


# Annex 1. Contributors

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



