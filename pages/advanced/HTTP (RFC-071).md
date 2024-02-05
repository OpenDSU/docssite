---
title: HTTP 
layout: home
parent: Open DSU Advanced
nav_order: 12
---


# **HTTP**

{: .feedback }
A period when the community can review the RFC (comment Docs).


**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)

<!-- TOC -->
* [Abstract](#abstract)
* [1. HTTP functions](#1-http-functions)
  * [Function poll(url, options, connectionTimeout, delayStart)](#function-pollurl-options-connectiontimeout-delaystart)
  * [Function unpoll(pollPromise)](#function-unpollpollpromise)
  * [Function fetch(url, options)](#function-fetchurl-options)
  * [Function doPost(url, data, reqOptions, callback)](#function-doposturl-data-reqoptions-callback)
  * [Function doPut(url, data, reqOptions, callback)](#function-doputurl-data-reqoptions-callback)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->


# Abstract

<p style='text-align: justify;'>The “HTTP” API space offers a set of portable functions to manage HTTP requests. The functions of this API are also adapted to the environment where it is used. The environment can be a browser, a service worker, or a node application.
</p>

# 1. HTTP functions

````
//Load openDSU environment

require("../privatesky/psknode/bundles/openDSU");

//Load openDSU SDK

const opendsu = require("opendsu");

//Load keyssi library

const keyssispace = opendsu.loadApi("keyssi");

//Load http library

const http = opendsu.loadApi("http");
````
<p style="text-align:center"> <b>How to use</b></p>


## Function poll(url, options, connectionTimeout, delayStart)

<p style='text-align: justify;'><b>Description</b>: Polling allows you to send a GET request to a server. The server then holds the request open until new data is available. Once available, the server responds and sends the new information.
</p>


| **Name**            | **Type**    | **Value**  | **Description**                                 |
|:--------------------|:------------|:-----------|:------------------------------------------------|
| url                 | string      | *required  | The url for which you want to create a request. |
| options (optional)  | JSON object |            | No options set by default.                      |
| connectionTimeout   | number (ms) | 10 000     |                                                 |
| delayStart          | number (ms) |            | Delay before sending the request.               |

**Returns**

| **Name**       | **Description**          |
|:---------------|:-------------------------|
| Promise object | The request as a promise |


## Function unpoll(pollPromise)

<p style='text-align: justify;'><b>Description</b>: Cancel an existing polling HTTP request.
</p>


| **Name**             | **Type**       | **Value**  | **Description**                                                                                        |
|:---------------------|:---------------|:-----------|:-------------------------------------------------------------------------------------------------------|
| pollPromise          | Promise object |            | The request you want to cancel; is represented by the Promise that was returned in the poll function.  |


**Returns**: The function does not return anything.


## Function fetch(url, options)

<p style='text-align: justify;'><b>Description</b>: Get information about an HTTP address. (For browser and service workers, the native fetch API is used, while the node environment has to use a custom fetch function because there is no native one.)
</p>


| **Name**            | **Type**       | **Value**  | **Description**                                                                                                                                                                                                                                                                                                                                                                     |
|:--------------------|:---------------|:-----------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| url                 | string         | *required  | The url from which you want to fetch resources.                                                                                                                                                                                                                                                                                                                                     |
| options (optional)  | Json object    |            | Empty by default.   <br/> To find the option of the native page, you can follow this [link](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch). <br/> If you are using the fetch within the node environment, here are the available options:<br/> { <br/> protocol: http, #(or https) <br/>      hostname:  <br/> path: <br/>      port:  <br/> }   |


**Returns**

| **Name**       | **Description**                                                                                                                                     |
|:---------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|
| Promise object | The promise resolves to the [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) object representing the response to your request. |


## Function doPost(url, data, reqOptions, callback)

<p style='text-align: justify;'><b>Description</b>:  Create a POST request to the url of your choice.
</p>


| **Name**               | **Type**         | **Value**  | **Description**                                                                                         |
|:-----------------------|:-----------------|:-----------|:--------------------------------------------------------------------------------------------------------|
| url                    | string           | *required  | The url you want to create a POST request for.                                                          |
| data                   | string           | *required  | The data to be sent in the POST Request.                                                                |
| reqOptions             | JSON object      |            | No options set by default.                                                                              |
| callback               | function         | *required  |                                                                                                         |


**Callback parameters**

| **Name** | **Type**     | **Response example** |
|:---------|:-------------|:---------------------|
| err      | Error Object |                      |
| data     | string       |                      |

	

<p style='text-align: justify;'><b>Description</b>: Error message and the error. / The sent data is returned in the callback if there is no error.
</p>

## Function doPut(url, data, reqOptions, callback)

<p style='text-align: justify;'><b>Description</b>: Create a PUT request to the URL of your choice.
</p>


| **Name**        | **Type**        | **Value**   | **Description**                                                                                                                                                                                                                                                                                                                                                                      |
|:----------------|:----------------|:------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| url             | string          | *required   | The url for which you want to create a PUT request.                                                                                                                                                                                                                                                                                                                                  |
| data            | string          | *required   | The data to be sent in the PUT Request.                                                                                                                                                                                                                                                                                                                                              |
| reqOptions      | JSON object     |             | No options set by default.                                                                                                                                                                                                                                                                                                                                                           |
| callback        | function        | *required   |                                                                                                                                                                                                                                                                                                                                                                                      |



**Callback parameters**


| **Name** | **Type**     | **Response example** |
|:---------|:-------------|:---------------------|
| err      | Error Object |                      |
| data     | string       |                      |


<p style='text-align: justify;'><b>Description</b>: Error message and the error. / The sent data is returned in the callback if there is no error.
</p>


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

