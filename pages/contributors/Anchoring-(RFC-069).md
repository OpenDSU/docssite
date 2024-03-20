---
title: Anchoring 
layout: home
parent: OpenDSU Contributors
nav_order: 13
---

# **Anchoring (RFC069)**
{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs)


**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)
 

<!-- TOC -->
* [Abstract](#abstract)
* [1. Anchoring functions](#1-anchoring-functions)
  * [Function createAnchor(dsuKeySSI, callback)](#function-createanchordsukeyssi-callback)
  * [Function createNFT(nftKeySSI, callback)](#function-createnftnftkeyssi-callback)
  * [Function appendToAnchor(dsuKeySSI, newShlSSI, previousShlSSI, zkpValue, callback)](#function-appendtoanchordsukeyssi-newshlssi-previousshlssi-zkpvalue-callback)
  * [Function getAllVersions(keySSI, authToken, callback)](#function-getallversionskeyssi-authtoken-callback)
  * [Function getLastVersion(keySSI, authToken, callback)](#function-getlastversionkeyssi-authtoken-callback)
  * [Function getAnchoringBehaviour(persistenceStrategy)](#function-getanchoringbehaviourpersistencestrategy)
* [2. AnchoringX Functions, exposed by RemotePersistence](#2-anchoringx-functions-exposed-by-remotepersistence)
  * [Function createAnchor(capableOfSigningKeySSI, anchorValue, callback)](#function-createanchorcapableofsigningkeyssi-anchorvalue-callback)
  * [Function appendAnchor(capableOfSigningKeySSI, anchorValue, callback)](#function-appendanchorcapableofsigningkeyssi-anchorvalue-callback)
  * [Function getAllVersions(keySSI, callback)](#function-getallversionskeyssi-callback)
  * [Function getLastVersion(keySSI, callback)](#function-getlastversionkeyssi-callback)
  * [Function createOrUpdateMultipleAnchors(anchors, callback)](#function-createorupdatemultipleanchorsanchors-callback)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->



# **Abstract**


<p style='text-align: justify;'>This API space offers a set of portable functions for DSU anchoring. The agent should handle these operations, so it will probably not have to use these functions. More information about OpenDSU Anchoring can be found in<a href="https://www.opendsu.org/pages/concepts/Anchoring-(RFC-005).html"> Anchoring (RFC-005)</a>.
</p>



# **1. Anchoring functions**

```js

//Load openDSU environment

require("../privatesky/psknode/bundles/openDSU");

//Load openDSU SDK

const opendsu = require("opendsu");

//Load keyssi library

const keyssispace = opendsu.loadApi("keyssi");

//Load anchoring library

const anchoring = opendsu.loadApi("anchoring");

//Build a newKeySSI

const seedSSI = keyssispace.createSeedSSI('default');

const newHLSSI = keyssispace.createHashLinkSSI('default','newBrickHash');

const lastHLSSI = keyssispace.createHashLinkSSI('default','lastBrickHash');

anchoring.addVersion(seedSSI, newHLSSI, lastHLSSI, 'zkpValue', (err, status) => {

  anchoring.versions(seedSSI, 'authToken', (err, versions) => {

      console.log("versions: ", versions);

  });

});
```
<div style="text-align:center;">
  <p><b>How to use</b></p>
</div>
   


## **Function createAnchor(dsuKeySSI, callback)**

**Description:** Creates a new anchor with a certain version of the DSU identified by the dsuKeySSI parameter.

| **Name**  | **Type**      | **Value** | **Description**                                                  |
|:----------|:--------------|:----------|:-----------------------------------------------------------------|
| dueKeySSI | KeySSI object | *required | An identifier for the DSU for which we want to create an anchor. |
| callback  | function      | *required |                                                                  |



**Callback parameters**

| **Name** | **Type**            | **Response example** |
|:---------|:--------------------|:---------------------|
| err      | ErrorWrapper object |                      |


**Description:** Contains a message and the error.



## **Function createNFT(nftKeySSI, callback)**

**Description:** Creates a new anchor with a certain NFT identified by the nftKeySSI parameter.


| **Name**  | **Type**      | **Value** | **Description**                                                  |
|:----------|:--------------|:----------|:-----------------------------------------------------------------|
| nftKeySSI | KeySSI object | *required | An identifier for the NFT for which we want to create an anchor. |
| callback  | function      | *required |                                                                  |



**Callback parameters**

| **Name** | **Type** | **Response example** |
|:---------|:---------|:---------------------|
|          |          |                      |

**Description**



## **Function appendToAnchor(dsuKeySSI, newShlSSI, previousShlSSI, zkpValue, callback)**

**Description:** Appends a new version of the DSU to an existing anchor.


| **Name**       | **Type**           | **Value** | **Description**                                                      |
|:---------------|:-------------------|:----------|:---------------------------------------------------------------------|
| dsuKeySSI      | KeySSI object      | *required | An identifier for the DSU for which we want to append a new version. |
| newShlSSI      | hashLinkSSI object | *required |                                                                      |
| previousShlSSI | hashLinkSSI object | *required |                                                                      |
| zkpValue       | sting              |           |                                                                      |
| callback       | function           | *required |                                                                      |


**Callback parameters**

| **Name** | **Type**            | **Response example** |
|:---------|:--------------------|:---------------------|
| err      | ErrorWrapper object |                      |

**Description:** Contains a message and the error





## **Function getAllVersions(keySSI, authToken, callback)**

<p style='text-align: justify;'><b>Description:</b> Get a list of versions of the DSU identified by the provided KeySSI. Those versions are represented as signed HashLinkSSIs. 
</p>


| **Name**             | **Type**                | **Value** | **Description**                                                                                   |
|:---------------------|:------------------------|:----------|:--------------------------------------------------------------------------------------------------|
| KeySSI               | KeySSI object           |           | The KeySSI associated with the DSU from which you want to get the information about its versions. |
| authToken (optional) | JWT Token (Json format) |           | A JWT authentication token.                                                                       |
| callback             | function                | *required |                                                                                                   |



**Callback parameters**

| **Name** | **Type**              | **Response example** |
|:---------|:----------------------|:---------------------|
| err      | ErrorWrapper object   |                      |
| versions | Array of HashLinkSSIs |                      |


<p style='text-align: justify;'><b>Description</b>: Contains a message and the error./ List of versions associated with the DSU with the provided KeySSI and represented by HashLinkSSIs.
</p>



## **Function getLastVersion(keySSI, authToken, callback)**

**Description:**


| **Name**              | **Type**      | **Value**  | **Description**                                                                                   |
|:----------------------|:--------------|:-----------|:--------------------------------------------------------------------------------------------------|
| KeySSI                | KeySSI object |            |                                                                                                   |
| authToken             | string        |            |                                                                                                   |
| callback              | function      | *required  |                                                                                                   |


**Callback parameters**

| **Name**                    | **Type**            | **Response example** |
|:----------------------------|:--------------------|:---------------------|
| err                         | ErrorWrapper object |                      |
| versions or latest HashLink | HashLinkSSI         |                      |


<p style='text-align: justify;'><b>Description</b>: Contains a message and the error or it contains the last version of the DSU which corresponds to the provided KeySSI.
</p>


## **Function getAnchoringBehaviour(persistenceStrategy)**

**Description:** Creates a new AnchoringAbstractBehaviour object.


| **Name**            | **Type** | **Value**  | **Description**                                                                                   |
|:--------------------|:---------|:-----------|:--------------------------------------------------------------------------------------------------|
| persistenceStrategy | object   |            |                                                                                                   |



# **2. AnchoringX Functions, exposed by RemotePersistence**

## **Function createAnchor(capableOfSigningKeySSI, anchorValue, callback)**

**Description:**


| **Name**               | **Type**      | **Value** | **Description**  |
|:-----------------------|:--------------|:----------|:-----------------|
| capableOfSigningKeySSI | keySSI object | *required | the anchor SSI   |
| anchorValue            | string        | *required | the anchor value |
| callback               | function      | *required |                  |


**Callback parameters**

| **Name**                     | **Type**            | **Response example** |
|:-----------------------------|:--------------------|:---------------------|
| err                          | ErrorWrapper object |                      |


**Description:** Contains a message and the error.


## **Function appendAnchor(capableOfSigningKeySSI, anchorValue, callback)**

**Description:**

| **Name**               | **Type**      | **Value** | **Description**  |
|:-----------------------|:--------------|:----------|:-----------------|
| capableOfSigningKeySSI | keySSI object | *required | the anchor SSI   |
| anchorValue            | string        | *required | the anchor value |
| callback               | function      | *required |                  |


**Callback parameters**

| **Name**                     | **Type**            | **Response example** |
|:-----------------------------|:--------------------|:---------------------|
| err                          | ErrorWrapper object |                      |


**Description:** Contains a message and the error.



## **Function getAllVersions(keySSI, callback)**

<p style='text-align: justify;'><b>Description:</b> Get a list of versions of the DSU identified by the provided KeySSI. Those versions are represented as signed HashLinkSSIs. 
</p>


**Description:**

| **Name**                | **Type**      | **Value** | **Description**  |
|:------------------------|:--------------|:----------|:-----------------|
| KeySSI                  | keySSI object | *required | the anchor SSI   |
| callback                | function      | *required |                  |


**Callback parameters**

| **Name** | **Type**              | **Response example** |
|:---------|:----------------------|:---------------------|
| err      | ErrorWrapper object   |                      |
| data     | Array of hashLinkSSIs |                      |


<p style='text-align: justify;'><b>Description:</b> Contains a message and the error./ List of versions associated with the DSU with the provided keySSI and represented by HashLinkSSIs.
</p>



## **Function getLastVersion(keySSI, callback)**

**Description:**


| **Name**                | **Type**      | **Value** | **Description**   |
|:------------------------|:--------------|:----------|:------------------|
| KeySSI                  | keySSI object | *required |                   |
| callback                | function      | *required |                   |


**Callback parameters**

| **Name**                  | **Type**            | **Response example** |
|:--------------------------|:--------------------|:---------------------|
| err                       | ErrorWrapper object |                      |
| version or latestHashLink | HashLinkSSI         |                      |


<p style='text-align: justify;'><b>Description</b>: Contains a message and the error or it contains the last version of the DSU which corresponds to the provided KeySSI.
</p>



## **Function createOrUpdateMultipleAnchors(anchors, callback)**

**Description:**


| **Name** | **Type** | **Value** | **Description** |
|:---------|:---------|:----------|:----------------|
| anchors  | array    | *required |                 |
| callback | function |           |                 |


**Callback parameters**

| **Name**                  | **Type**            | **Response example** |
|:--------------------------|:--------------------|:---------------------|
| err                       | ErrorWrapper object |                      |


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



