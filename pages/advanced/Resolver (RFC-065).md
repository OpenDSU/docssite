---
title: Resolver (RFC-065) 
layout: home
parent: OpenDSU Advanced
nav_order: 9
---

<style>
.imgMain{
    display.block;
    margin-left:70px;
    margin-right:auto;
} 
</style>


# **Resolver**
{: .no_toc }

{: .feedback}
A period when the community can review the RFC (comment Docs).


**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright**

Copyright © 2018-2024 Axiologic Research and Contributors.
This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)



<!-- TOC -->
* [Abstract](#abstract)
* [1. Resolver functions](#1-resolver-functions)
  * [Function createDSU(templateKeySSI, options, callback)](#function-createdsutemplatekeyssi-options-callback)
  * [Function createDSUForExistingSSI(ssi, options, callback)](#function-createdsuforexistingssissi-options-callback)
  * [Function getDSUHandler(dsuKeySSI)](#function-getdsuhandlerdsukeyssi)
  * [Function invalidateDSUCache(dsuKeySSI)](#function-invalidatedsucachedsukeyssi)
  * [Function loadDSU(keySSI, options, callback)](#function-loaddsukeyssi-options-callback)
  * [Function registerDSUFactory(type, factory)](#function-registerdsufactorytype-factory)
  * [Function createDSUx(domain, ssiType, options, callback)](#function-createdsuxdomain-ssitype-options-callback)
  * [Function createSeedDSU(domain, options, callback)](#function-createseeddsudomain-options-callback)
  * [Function createConstDSU(domain, constString, options, callback)](#function-createconstdsudomain-conststring-options-callback)
  * [Function createArrayDSU(domain, ssiType, options, callback)](#function-createarraydsudomain-ssitype-options-callback)
  * [Function loadDSUVersion(keySSI, versionHashlink, options, callback)](#function-loaddsuversionkeyssi-versionhashlink-options-callback)
  * [Function createDSUForExistingSSI(ssi, options, callback)](#function-createdsuforexistingssissi-options-callback-1)
  * [Function createVersionlessDSU(filePath, encryptionKey, domain, callback)](#function-createversionlessdsufilepath-encryptionkey-domain-callback)
  * [Function dsuExists(keySSI, callback)](#function-dsuexistskeyssi-callback)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->


# Abstract

<p style='text-align: justify;'>The “Resolver” API space allows developers to create <a href="https://www.opendsu.org/pages/concepts/DSU%20Introduction%20(RFC-001).html">DSU instances</a> by resolving <a href="https://www.opendsu.org/pages/concepts/KeySSI%20(RFC-002).html">KeySSIs</a>. A DSU instance is similar to a file system where users can read and/or write files if they possess the right key. All operations available on DSUs are presented in DSU Object (<a href="https://www.opendsu.org/pages/beginners/DSU%20Object%20(RFC-063).html">RFC-063</a>).
</p>



# 1. Resolver functions


```js
//Load openDSU environment

require("../privatesky/psknode/bundles/openDSU");

//Load openDSU SDK

const opendsu = require("opendsu");

//Load resolver library

const resolver = opendsu.loadApi("resolver");

//Load keyssi library

const keyssispace = opendsu.loadApi("keyssi");

//Build the SeedSSI that will represent our DSU

const seedSSI = keyssispace.createSeedSSI('default');

//Create a DSU using resolver

resolver.createDSU(seedSSI, (err, dsuInstance) =>{

  dsuInstance.getKeySSIAsString((err, dsussi) => {

      resolver.loadDSU(dsussi, (err, dsu) => {

       invalidateDSUCache(seedSSI);

      });

  });

});
```


<div style="text-align:center;">
    <p><b>How to use</b></p>
</div>




## Function createDSU(templateKeySSI, options, callback)

<p style='text-align: justify;'><b>Description</b>: This function allows the developer to create a new DSU object using a KeySSI. The DSU will always stay associated with the key it was created with and its derivation. The DSU instance is returned in the callback.
</p>

| **Name**       | **Type**                                                                             | **Value** | **Description**              |
|:---------------|:-------------------------------------------------------------------------------------|:----------|:-----------------------------|
| templateKeySSI | <a href="https://www.opendsu.org/pages/concepts/KeySSI%20(RFC-002).html">KeySSI </a> | *required |                              |
| options        | Json object                                                                          |           | Set to undefined by default. |
| callback       | function                                                                             | *required |                              |


**Callback parameters**

| **Name** | **Type**                                                                                          | **Response example** |
|:---------|:--------------------------------------------------------------------------------------------------|:---------------------|
| err      | ErrorWrapper object                                                                               |                      |
| dsu      | <a href="https://www.opendsu.org/pages/beginners/DSU%20Object%20(RFC-063).html">Dsu instance </a> |                      |

<p style='text-align: justify;'><b>Description</b>: Contains a message and the error. / Reference to the DSU instance that was just created.
</p>


## Function createDSUForExistingSSI(ssi, options, callback)

<p style='text-align: justify;'><b>Description</b>: This function creates a DSU object using a KeySSI, similar to the createDSU function, but with the options “useSSIAsIdentifier=true”.
</p>


| **Name** | **Type**    | **Value** | **Description**                                                                   |
|:---------|:------------|:----------|:----------------------------------------------------------------------------------|
| ssi      | string      | *required | The ssi identifier you want to use to create your DSU (must be in the ssi format) |
| options  | JSON obiect |           | No options set by default.                                                        |
| callback | function    | *required |                                                                                   |



	

**Callback parameters**

| **Name** | **Type**                                                                             | **Response example** |
|:---------|:-------------------------------------------------------------------------------------|:---------------------|
| err      | ErrorWrapper object                                                                  |                      |
| dsu      | <a href="https://www.opendsu.org/pages/concepts/KeySSI%20(RFC-002).html">KeySSI </a> |                      |


<p style='text-align: justify;'><b>Description</b>: Contains a message and the error./ Reference to the DSU instance that was just created.
</p>



## Function getDSUHandler(dsuKeySSI)

<p style='text-align: justify;'><b>Description</b>: Create a special environment to boot the DSU of your choice (using a keySSI) inside a mini-container that we call a thread. The container will be isolated in a separate memory space. This DSU handler can also boot remotely and provide the basic operations that are available for DSUs. The main purpose of DSU handlers is to interact with DSUs more easily.
</p>


| **Name**  | **Type**                                                                                   | **Value**  | **Description**                                                                     |
|:----------|:-------------------------------------------------------------------------------------------|:-----------|:------------------------------------------------------------------------------------|
| dsuKeySSI | <a href="https://www.opendsu.org/pages/concepts/KeySSI%20(RFC-002).html">KeySSI object</a> |            | KeySSI corresponds to the DSU from which you want to get a handler.                 |


**Returns**

| **Name**   | **Type**                                                                                                | **Description**                                                                       |
|:-----------|:--------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------|
| dsuHandler | <a href="https://www.opendsu.org/pages/beginners/DSU%20Object%20(RFC-063).html">DSUHandler instance</a> | Reference to the DSU handler corresponding to your KeySSI.                            |


## Function invalidateDSUCache(dsuKeySSI)

<p style='text-align: justify;'><b>Description</b>: DSU cache corresponding to the dsuKeySSI is invalidated by setting its value to undefined.</p>


| **Name**    | **Type**                                                                                   | **Value**   | **Description**                                                                      |
|:------------|:-------------------------------------------------------------------------------------------|:------------|:-------------------------------------------------------------------------------------|
| dsuKeySSI   | <a href="https://www.opendsu.org/pages/concepts/KeySSI%20(RFC-002).html">KeySSI object</a> |             | KeySSI corresponds to the DSU from which you want to invalidate the cache.                                                                                     |


<p style='text-align: justify;'><b>Returns</b>: This function does not return anything.</p>



## Function loadDSU(keySSI, options, callback)

<p style='text-align: justify;'><b>Description</b>: This function loads an existing DSU object using a KeySSI. The DSU is loaded from the cache if there is one, else it is loaded from the brick storage and stored in the cache. The loaded DSU instance is returned in the callback.</p>

| **Name** | **Type**                                                                                   | **Value** | **Description**                                        |
|:---------|:-------------------------------------------------------------------------------------------|:----------|:-------------------------------------------------------|
| KeySSI   | <a href="https://www.opendsu.org/pages/concepts/KeySSI%20(RFC-002).html">KeySSI object</a> | *required | The keySSI from which you want to load a DSU instance. |
| options  | JSON object                                                                                |           | Set to undefined by default.                           |
| callback | function                                                                                   | *required |                                                        |


**Callback parameters**


| **Name** | **Type**                                                                                                | **Response example** |
|:---------|:--------------------------------------------------------------------------------------------------------|:---------------------|
| err      | ErrorWrapper object                                                                                     |                      |
| dsu      | <a href="https://www.opendsu.org/pages/beginners/DSU%20Object%20(RFC-063).html">DSUHandler instance</a> |                      |


<p style='text-align: justify;'><b>Description</b>: Contains a message and the error. / Reference to the DSU instance that was just loaded.
</p>



## Function registerDSUFactory(type, factory)

<p style='text-align: justify;'><b>Description</b>: Register a DSU type in the factory of your choice.</p>


| **Name** | **Type**          | **Value** | **Description**                                                |
|:---------|:------------------|:----------|:---------------------------------------------------------------|
| type     | string            | *required | The DSU type you want to register.                             |
| factory  | DSUFactory object |           | The factory into which you want to register a new type of DSU. |


<b>Returns</b>: This function does not return anything.



## Function createDSUx(domain, ssiType, options, callback)

<p style='text-align: justify;'><b>Description</b>: This function allows the developer to create a new DSU object.
</p>

| **Name** | **Type**    | **Value** | **Description**                                                                                                      |
|:---------|:------------|:----------|:---------------------------------------------------------------------------------------------------------------------|
| domain   | string      |           | The blockchain domain where you want to create the DSU.                                                              |
| ssiType  |             |           |                                                                                                                      |
| options  | JSON object |           |                                                                                                                      |
| callback | function    | *required |                                                                                                                      |


**Callback parameters**


| **Name**- | **Type**                                                                                           | **Response example** |
|:----------|:---------------------------------------------------------------------------------------------------|:---------------------|
| err       | ErrorWrapper object                                                                                |                      |
| dsu       | <a href="https://www.opendsu.org/pages/beginners/DSU%20Object%20(RFC-063).html"> DSU instance </a> |                      |


**Description:** Contains a message and the error. / Reference to the DSU instance that was just created.



## Function createSeedDSU(domain, options, callback)

**Description**: This function allows the developer to create a new SeedDSU object.

| **Name** | **Type**    | **Value** | **Description**                                                         |
|:---------|:------------|:----------|:------------------------------------------------------------------------|
| domain   | string      |           | The blockchain domain where you want to create the seedDSU              |
| options  | JSON object |           |                                                                         |
| callback | function    | *required |                                                                         |


**Callback parameters**

| **Name**- | **Type**                                                                                           | **Response example** |
|:----------|:---------------------------------------------------------------------------------------------------|:---------------------|
| err       | ErrorWrapper object                                                                                |                      |
| dsu       | <a href="https://www.opendsu.org/pages/beginners/DSU%20Object%20(RFC-063).html"> DSU instance </a> |                      |


**Description**: Contains a message and the error. / Reference to the seedDSU that was just loaded.




## Function createConstDSU(domain, constString, options, callback)

**Description:** This function allows the developer to create a new ConstDSU object.

| **Name**    | **Type**    | **Value** | **Description**                                             |
|:------------|:------------|:----------|:------------------------------------------------------------|
| domain      | string      |           | The blockchain domain where you want to create the constDSU |
| constString | string      |           |                                                             |
| options     | JSON object |           |                                                             |
| callback    | function    | *required |                                                             |


**Callback parameters**

| **Name**- | **Type**                                                                                           | **Response example** |
|:----------|:---------------------------------------------------------------------------------------------------|:---------------------|
| err       | ErrorWrapper object                                                                                |                      |
| dsu       | <a href="https://www.opendsu.org/pages/beginners/DSU%20Object%20(RFC-063).html"> DSU instance </a> |                      |


**Description**: Contains a message and the error. / Reference to the constDSU that was just created.



## Function createArrayDSU(domain, ssiType, options, callback)

**Description:** This function allows the developer to create a new DSU array.

| **Name** | **Type**     | **Value** | **Description**                                        |
|:---------|:-------------|:----------|:-------------------------------------------------------|
| domain   | string       |           | The blockchain domain where you want to create the DSU |
| ssiType  |              |           |                                                        |
| options  | JSON object  |           |                                                        |
| callback | function     | *required |                                                        |


**Callback parameters**


| **Name**- | **Type**                                                                                           | **Response example** |
|:----------|:---------------------------------------------------------------------------------------------------|:---------------------|
| err       | ErrorWrapper object                                                                                |                      |
| dsu       | <a href="https://www.opendsu.org/pages/beginners/DSU%20Object%20(RFC-063).html"> DSU instance </a> |                      |


**Description:** Contains a message and the error. / Reference to the DSU array that was just created.



## Function loadDSUVersion(keySSI, versionHashlink, options, callback)

**Description**: Load the DSU version for a given keySSI and version Hashlink.


| **Name**        | **Type**      | **Value** | **Description**                          |
|:----------------|:--------------|:----------|:-----------------------------------------|
| KeySSI          | keySSI object |           | The KeySSI for the DSU you want to load. |
| versionHashlink |               |           |                                          |
| options         | JSON object   |           |                                          |
| callback        | function      | *required |                                          |


**Callback parameters**

| **Name**- | **Type**                                                                                           | **Response example** |
|:----------|:---------------------------------------------------------------------------------------------------|:---------------------|
| err       | ErrorWrapper object                                                                                |                      |
| dsu       | <a href="https://www.opendsu.org/pages/beginners/DSU%20Object%20(RFC-063).html"> DSU instance </a> |                      |


**Description**: Contains a message and the error. / Reference to the DSU instance that was just loaded.






## Function createDSUForExistingSSI(ssi, options, callback)

**Description:** Create a DSU for an already existing SSI.


## Function createVersionlessDSU(filePath, encryptionKey, domain, callback)

**Description**: Create a versionless DSU.



## Function dsuExists(keySSI, callback)

**Description:** Check if a DSU exists for the given KeySSI.




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
