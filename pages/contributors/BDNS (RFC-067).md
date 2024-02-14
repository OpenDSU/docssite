---
title: BDNS 
layout: home
parent: OpenDSU Contributors
nav_order: 12
---


<style>
.imgMain{
    display.block;
    margin-left:70px;
    margin-right:auto;
} 
</style>

# **BDNS**
{: .no_toc }


{: .feedback}
A period when the community can review the RFC (comment Docs).


**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright**© 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)


<!-- TOC -->
* [Abstract](#abstract)
* [1. BDNS functions](#1-bdns-functions)
  * [Function getRawInfo(dlDomain, callback)](#function-getrawinfodldomain-callback)
  * [Function getBrickStorages(dlDomain, callback)](#function-getbrickstoragesdldomain-callback)
  * [Function getAnchoringServices(dlDomain, callback)](#function-getanchoringservicesdldomain-callback)
  * [Function getContractServices(dlDomain, callback)](#function-getcontractservicesdldomain-callback)
  * [Function getReplicas(dlDomain, callback)](#function-getreplicasdldomain-callback)
  * [Function getNotificationEndpoints(dlDomain, callback)](#function-getnotificationendpointsdldomain-callback)
  * [Function getMQEndpoints(dlDomain, callback)](#function-getmqendpointsdldomain-callback)
  * [Function setBDNSHosts(bdnsHosts)](#function-setbdnshostsbdnshosts)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->



# **Abstract**

<p style='text-align: justify;'>The “BDNS” API space offers a set of portable functions used to request information about the blockchain domain used by your DSU. These operations should be handled automatically by the agents to get the anchoring service associated with the domain, the location of the brick storage as well as other information.</p>

# **1. BDNS functions**

<b>Load (use is described later for each function):</b>  


```js
//Load openDSU environment

require("../privatesky/psknode/bundles/openDSU");

//Load openDSU SDK

const opendsu = require("opendsu");

//Load keyssi library

const keyssispace = opendsu.loadApi("keyssi");

//Load bdns library

const bdns = opendsu.loadApi("bdns");

//Build SeedSSI

const seedSSI = keyssispace.createSeedSSI('default');

//BDNS functions

```


## **Function getRawInfo(dlDomain, callback)**

**Description:** Gets the raw information about a blockchain domain.


| Name     | Type     | Value     | Description                                       |
|:---------|:---------|:----------|:--------------------------------------------------|
| dlDomain | string   | *required | THe blockchain domain you want information about. |
| callback | function |           |                                                   |



**Callback parameters**

| **Name** | **Type**            | **Response example** |
|:---------|:--------------------|:---------------------|
| err      | ErrorWrapper object |                      |
| rawInfo  | JSON object         |                      |

**Description:** Contains an error or an object with all the information about the domain (i.e., brick address, anchor address, replicas).



## **Function getBrickStorages(dlDomain, callback)**

**Description:** Gets addresses of brick storages associated with the provided dlDomain.


| **Name** | **Type** | **Value** | **Description**                                        |
|:---------|:---------|:----------|:-------------------------------------------------------|
| dlDomain | string   | *required | The blockchain domain that you want information about. |
| callback | function |           |                                                        |



**Callback parameters**


| **Name**          | **Type**             | **Response example** |
|:------------------|:---------------------|:---------------------|
| err               | ErrorWrapper object  |                      |
| brickStorageArray | object               |                      |

**Description:** Contains an error or an object with an array of brick storages.




## **Function getAnchoringServices(dlDomain, callback)**

**Description:** Gets addresses of anchoring services for the provided dlDomain.


| **Name** | **Type** | **Value** | **Description**                                        |
|:---------|:---------|:----------|:-------------------------------------------------------|
| dlDomain | string   | *required | The blockchain domain that you want information about. |
| callback | function | *required |                                                        |




**Callback parameters**


| **Name**               | **Type**             | **Response example** |
|:-----------------------|:---------------------|:---------------------|
| err                    | ErrorWrapper object  |                      |
| anchoringServicesArray | object               |                      |


**Description:** Contains an error or an object with an array of anchoring services.



## **Function getContractServices(dlDomain, callback)**

<p style='text-align: justify;'><b>Description</b>: Gets addresses of contract services for the provided dlDomain. If no callback function is given, the function is not asynchronous anymore, and it will return a promise.</p>



| **Name** | **Type** | **Value** | **Description**         |
|:---------|:---------|:----------|:------------------------|
| dlDomain | string   | *required | The blockchain domain . |
| callback | function |           |                         |


**Callback parameters**


| **Name**              | **Type**             | **Response example** |
|:----------------------|:---------------------|:---------------------|
| err                   | ErrorWrapper object  |                      |
| contractServicesArray | object               |                      |


**Description:** Contains an error or an object with an array of contract services.



## **Function getReplicas(dlDomain, callback)**

**Description:** Gets addresses of replicas for the provided dlDomain.


| **Name** | **Type** | **Value** | **Description**         |
|:---------|:---------|:----------|:------------------------|
| dlDomain | string   | *required | The blockchain domain . |
| callback | function |           |                         |



**Callback parameters**


| **Name** | **Type**            | **Response example** |
|:---------|:--------------------|:---------------------|
| err      | ErrorWrapper object |                      |
| replicas | Array               |                      |


<p style='text-align: justify;'><b>Description</b>: Contains an error or an object with an array of URL addresses of replicas associated with the provided dlDomain.</p>


## **Function getNotificationEndpoints(dlDomain, callback)**

**Description:** Gets the notification endpoints of the given dlDomain.


| **Name** | **Type** | **Value** | **Description**         |
|:---------|:---------|:----------|:------------------------|
| dlDomain | string   | *required | The blockchain domain . |
| callback | function | *required |                         |



**Callback parameters**


| **Name**  | **Type**            | **Response example** |
|:----------|:--------------------|:---------------------|
| err       | ErrorWrapper object |                      |
| endpoints | array               |                      |


**Description:** Contains an error or an object with an array of notification endpoints.



## **Function getMQEndpoints(dlDomain, callback)**

**Description:** Gets the message queue endpoints of the given dlDomain.


| **Name** | **Type** | **Value** | **Description**         |
|:---------|:---------|:----------|:------------------------|
| dlDomain | string   | *required | The blockchain domain . |
| callback | function |           |                         |



**Callback parameters**


| **Name**    | **Type**            | **Response example** |
|:------------|:--------------------|:---------------------|
| err         | ErrorWrapper object |                      |
| mqEndpoints | array               |                      |


**Description:** Contains an error or an object with an array of message queue endpoints.



## **Function setBDNSHosts(bdnsHosts)**

**Description:** Sets up the list of hosts.

| Name      | Type        | Value     | Description                              |
|:----------|:------------|:----------|:-----------------------------------------|
| bdnsHosts | JSON object | *required | Contains the hostes and associated data. |




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
| Veronica Robu                       | veronica@axiologic.net                   |
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
| Rafael Mastaleru                    | raf@rms.ro (RMS)                         |


