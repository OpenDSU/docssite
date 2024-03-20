---
title: Bricking 
layout: home
parent: OpenDSU Contributors
nav_order: 14
---

# **Bricking (RFC-070)**
{: .no_toc }


{: .feedback }
A period when the community can review the RFC (comment Docs)

**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)
 
<!-- TOC -->
* [Abstract](#abstract)
* [1. Bricking functions](#1-bricking-functions)
  * [Function getBrick(hashLinkSSI, authToken, callback)](#function-getbrickhashlinkssi-authtoken-callback)
  * [Function getMultipleBricks(hashLinkSSIList, authToken, callback)](#function-getmultiplebrickshashlinkssilist-authtoken-callback)
  * [Function putBrick(domain, brick, authToken, callback)](#function-putbrickdomain-brick-authtoken-callback)
  * [Function constructBricksFromData(keySSI, data, options, callback)](#function-constructbricksfromdatakeyssi-data-options-callback)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->


# **Abstract**

<p style='text-align: justify;'>The “bricking” API space offers a set of portable functions for creating and reading bricks. However, the agent should handle brick management (storage and reconstruction) automatically, and you will not have to use them. More information on brick storage can be found in <a href="https://www.opendsu.org/pages/concepts/Brick-Storages-(RFC-003).html">Brick Storages (RFC-003)</a>.
</p>

# **1. Bricking functions**

```js
//Load openDSU environment

require("../privatesky/psknode/bundles/openDSU");

//Load openDSU SDK

const opendsu = require("opendsu");

//Load keyssi library

const keyssispace = opendsu.loadApi("keyssi");

//Load bricking library

const bricking = opendsu.loadApi("bricking");

//Build a newKeySSI

const seedSSI = keyssispace.createSeedSSI("default");

bricking.putBrick(seedSSI, 'hello', (err, brickHash) =>{

    const HLSSI = keyssispace.buildHashLinkSSI("default",brickHash);

    bricking.putBrick(seedSSI, 'world', (err, brickHash2) =>{

      const HLSSI2 = keyssispace.buildHashLinkSSI("default",brickHash2);

      bricking.getBrick(HLSSI, 'authToken', (err, brick) =>{

          console.log(brick.toString());

       //Returns: “hello”

          bricking.getMultipleBricks([HLSSI,HLSSI2], 'authToken', (err, bricks) =>{

              console.log("brick:",bricks.toString());

          //Returns: “brick: hello” “brick: world”

          });

      });

  });

});

```

<div style="text-align:center;">
    
    <p><b>How to use</b></p>
</div>



## **Function getBrick(hashLinkSSI, authToken, callback)**

**Description:** Retrieve a brick from a hashLinkSSI.

| **Name**    | **Type**           | **Value** | **Description**                                   |
|:------------|:-------------------|:----------|:--------------------------------------------------|
| hashLinkSSI | HashLinkSSI object | *required | HashLinkSSI from which you want to get the brick. |
| authToken   | JWT token          |           | A JWT authentication token.                       |
| callback    | function           | *required |                                                   |


**Callback parameters**


| **Name** | **Type**            | **Response example** |
|:---------|:--------------------|:---------------------|
| err      | ErrorWrapper Object |                      |
| brick    | Buffer              |                      |

<p style='text-align: justify;'><b>Description</b>: Contains a message and the error. / The content of the brick identified by the HashLinkSSI.
</p>



## **Function getMultipleBricks(hashLinkSSIList, authToken, callback)**

**Description**: Retrieve multiple bricks from a hashLinkSSI list.


| **Name**        | **Type**              | **Value** | **Description**                                         |
|:----------------|:----------------------|:----------|:--------------------------------------------------------|
| hashLinkSSIList | Array of HashLinkSSIs | *required | List of HashLinkSSIs from which you want to get bricks. |
| authToken       | JWT token             |           | A JWT authentication token.                             |
| callback        | function              | *required |                                                         |


**Callback parameters**


| **Name** | **Type**            | **Response example** |
|:---------|:--------------------|:---------------------|
| err      | ErrorWrapper Object |                      |
| brick    |                     |                      |


**Description**: List of HashLinkSSI from which you want to get bricks. / A JWT authentication token.



## **Function putBrick(domain, brick, authToken, callback)**

**Description:** Add a brick to a domain.



| **Name**  | **Type**                                                                                    | **Value** | **Description**                                                                              |
|:----------|:--------------------------------------------------------------------------------------------|:----------|:---------------------------------------------------------------------------------------------|
| domain    | <a href="https://www.opendsu.org/pages/concepts/KeySSI-(RFC-002).html"> KeySSI</a> object | *required | The KeySSI associated with the blockchain and brick storage where you want to add the brick. |
| brick     | ReadableStream or string                                                                    | *required | The brick content you want to add to the brick storages.                                     |
| authToken | JWT token                                                                                   |           | A JWT authentication token.                                                                  |
| callback  | function                                                                                    | *required |                                                                                              |


**Callback parameters**


| **Name**  | T**ype**            | **Response example** |
|:----------|:--------------------|:---------------------|
| err       | ErrorWrapper Object |                      |
| brickHash | string              |                      |


<p style='text-align: justify;'><b>Description</b>: Contains a message and the error. / The hash of the brick that was added. The KeySSI type (sha256 by default) defines the hash function.
</p>



## **Function constructBricksFromData(keySSI, data, options, callback)**

**Description:** Create bricks from data.



| **Name** | **Type**                                                                                    | **Value** | **Description**                                          |
|:---------|:--------------------------------------------------------------------------------------------|:----------|:---------------------------------------------------------|
| KeySSI   | <a href="https://www.opendsu.org/pages/concepts/KeySSI-(RFC-002).html"> KeySSI</a> object | *required | The KeySSI of the blockchain domain.                     |
| data     | buffer                                                                                      | *required |                                                          |
| options  |                                                                                             |           |                                                          |
| callback | function                                                                                    | *required |                                                          |


**Contributors**


1. <p style='text-align: justify;'><a href="https://www.axiologic.net/">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="https://www.opendsu.org/">www.opendsu.org</a> site.

2. <p style='text-align: justify;'><a href="https://pharmaledger.org/">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.

3. PrivateSky Research Project: MIT licensed content accordingly with the contracts. 
<a href="https://profs.info.uaic.ro/~ads/PrivateSky/"> https://profs.info.uaic.ro/~ads/PrivateSky/</a>



# **Annex 1. Contributors**

| **Current Editors**                 | **Email**                                |
|:------------------------------------|:-----------------------------------------|
| Sînică Alboaie                      | sinica.alboaie@axiologic.net             |
| Cosmin Ursache                      | cosmin@axiologic.net                     |
| Teodor Lupu                         | teodor@axiologic.net                     |
| Andi-Gabriel Țan                    | andi@axiologic.net                       |
| **Contributors Axiologic Research** | **Email**                                |
| Adrian Ganga                        | adrian@axiologic.net                     |
| Andi-Gabriel Țan                    | andi@axiologic.net                       |
| Cosmin Ursache                      | cosmin@axiologic.net                     |
| Daniel Sava                         | daniel@axiologic.net                     |
| Nicoleta Mihalache                  | nicoleta@axiologic.net                   |
| Valentin Gérard                     | valentin@axiologic.net                   |
| **PrivateSky Contributors**         | **Email**                                |
| Alex Sofronie                       | alsofronie@gmail.com (DPO)               |
| Cosmin Ursache                      | cos.ursache@gmail.com (UAIC)             |
| Daniel Sava                         | sava.dumitru.daniel@gmail.com (HVS, AQS) |
| Daniel Visoiu                       | visoiu.daniel.g@gmail.com (SGiant)       |
| Lenuța Alboaie                      | lalboaie@gmail.com (UAIC)                |
| Rafael Mastaleru                    | rafael@rms.ro (RMS)                      |
| Sînică Alboaie                      | salboaie@gmail.com (UAIC)                |
| Vlad Balmos                         | vlad.balmos@gmail.com (Code932)          |
| **PharmaLedger Contributors**       | **Email**                                |
| Ana Balan                           | bam@rms.ro (RMS)                         |
| Bogdan Mastahac                     | mab@rms.ro (RMS)                         |
| Cosmin Ursache                      | cos@rms.ro (RMS)                         |
| Michael Sammeth                     |                                          |
| Rafael Mastaleru                    | raf@rms.ro (RMS)                         |





