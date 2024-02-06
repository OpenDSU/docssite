---
title: Notifications (RFC-072)
layout: home
parent: OpenDSU Contributors
nav_order: 15
---


{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs)

**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)

<!-- TOC -->
* [Abstract](#abstract)
* [1. Notifications functions](#1-notifications-functions)
  * [Function getObservableHandler(keySSI, timeout)](#function-getobservablehandlerkeyssi-timeout)
  * [Function publish(keySSI, message, timeout, callback)](#function-publishkeyssi-message-timeout-callback)
  * [Function unsubscribe(observable)](#function-unsubscribeobservable)
  * [Function isSubscribed(observable)](#function-issubscribedobservable)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->


# Abstract

<p style='text-align: justify;'>The purpose of the “notifications” API space is to offer a set of portable functions for sending and receiving KeySSI-based notifications</p>


# 1. Notifications functions


```js
//Load openDSU environment

require("../privatesky/psknode/bundles/openDSU");

//Load openDSU SDK

const opendsu = require("opendsu");

//Load keyssi library

const keyssispace = opendsu.loadApi("keyssi");

//Load keyssi library

const notifications = opendsu.loadApi("notifications");

//Build a newKeySSI

const seedSSI = keyssispace.createSeedSSI("default");

notifications.publish(seedSSI,"hello", (err, status) =>{

      console.log(status);

});

```

<div style="text-align:center;">
    <p><b>How to use</b></p>
</div>



## Function getObservableHandler(keySSI, timeout)

**Description**: Get notifications observable object for the selected keySSI.

| **Name** | **Type**      | **Value** | **Description**                                    |
|:---------|:--------------|:----------|:---------------------------------------------------|
| keySSI   | KeySSI object |           | The keySSI from which you want to get the handler. |
| timeout  | number        |           | The amount of time before the request times out.   |



**Returns**

| **Name**    | **Description** |
|:------------|:----------------|
| Observable  | object          |



## Function publish(keySSI, message, timeout, callback)

<p style='text-align: justify;'><b>Description</b>: Push notification to the selected keySSI via its associated notifications endpoint.</p>


| **Name** | **Type**      | **Value** | **Description**                                  |
|:---------|:--------------|:----------|:-------------------------------------------------|
| keySSI   | KeySSI object |           | The keySSI from which you want to notify.        |
| message  | string        | *required | The message you want to publish.                 |
| timeout  | number (ms)   |           | The amount of time before the request times out. |
| callback | function      | *required |                                                  |


**Callback parameters**

| **Name** | **Type**            | **Response example**              |
|:---------|:--------------------|:----------------------------------|
| err      | ErrorWrapper object | Contains a message and the error. |
| response |                     |                                   |

**Description**: Contains a message and the error./Contains the response.



## Function unsubscribe(observable)

**Description**: Unsubscribe from notifications.

| **Name**   | **Type**          | **Value** | **Description**        |
|:-----------|:------------------|:----------|:-----------------------|
| observable | Observable object |           | The observable object. |

**Returns**: This function does not return anything.


## Function isSubscribed(observable)

**Description**: Check if there exists a subscription.

| **Name**   | **Type**          | **Value** | **Description**        |
|:-----------|:------------------|:----------|:-----------------------|
| observable | Observable object |           | The observable object. |


**Returns:** A boolean value.


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

