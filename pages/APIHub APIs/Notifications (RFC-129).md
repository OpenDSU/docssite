---
title: Notifications 
layout: home
parent: OpenDSU APIHub APIs
nav_order: 10
---

# **Notifications (RFC-129)**

{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs).


**Document Maintainers: Andi Gabriel Tan 2022. List of other contributors in Annex. 1.**

**Copyright: MIT license**

**Copyright**

**Copyright** ©  <2018-2022> Axiologic Research and Contributors.

This document is licensed under <a href="https://en.wikipedia.org/wiki/MIT_License">MIT license.</a>

<!-- TOC -->
* [**Notifications (RFC-129)**](#notifications-rfc-129)
* [Abstract](#abstract)
* [1. Create a Subscription](#1-create-a-subscription)
  * [1.1. Path Parameters](#11-path-parameters)
  * [1.2. Responses](#12-responses)
* [2. Delete a Subscription](#2-delete-a-subscription)
  * [2.1. Path Parameters](#21-path-parameters)
  * [2.2. Responses](#22-responses)
* [3. Publish Notification](#3-publish-notification)
  * [3.1. Path Parameters](#31-path-parameters)
  * [3.2. Body Parameters](#32-body-parameters)
    * [3.2.1.Example: Application/JSON](#321example-applicationjson)
  * [3.3. Responses](#33-responses)
    * [3.3.1. Example: Application/JSON](#331-example-applicationjson)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->


# Abstract
<p style='text-align: justify;'>The Notifications API Service offers the capabilities to send and receive messages on communication channels based on anchorIds. It also provides the possibility to remove the created channel in the scope of communication.
</p>

# 1. Create a Subscription

<p style='text-align: justify;'>Request to get notified each time a new message is received for the anchorId. This endpoint enables long polling request sequences.
</p>

    POST /notifications/subscribe/{anchorId}

## 1.1. Path Parameters

| Name     | Type     | Value     | Description                                                                                                                                        |
|:---------|:---------|:----------|:---------------------------------------------------------------------------------------------------------------------------------------------------|
| anchorId | string   | *required | Zero Access keySSI encoded in base58. Example: _29fgyfTQXJmJNni42zuJu3NXHgtUuXk3318NMMTrYKfj1gwAttt16rKq3vPCUjFV 3KZeF9HJnaZnW4FnN7t7zBQFKjdXBwX._ |


## 1.2. Responses

| Status Code   | Description                                                      |
|:--------------|:-----------------------------------------------------------------|
| 200           | Returns a list of messages received by the specified anchorId.   |
| 400           | Connection timeout.                                              |
| 409           | Queue already exists.                                            |
| 500           | An internal error occurred when creating the queue.              |


# 2. Delete a Subscription

<p style='text-align: justify;'>Delete the communication channel created by either subscription or publish commands for the specified anchorId.
</p>

    POST /notifications/subscribe/{anchorId}

## 2.1. Path Parameters

| Name          | Type    | Value      | Description                            |
|:--------------|:--------|:-----------|:---------------------------------------|
| anchorId      | string  | *required  | Zero Access keySSI encoded in base58.  |

## 2.2. Responses

| Status Code | Description                                             |
|:------------|:--------------------------------------------------------|
| 503         | Under construction. Currently needs to be implemented.  |


# 3. Publish Notification

<p style='text-align: justify;'>Publish a message to the anchorId subscriber. Create a queue for the anchorId in case it does not exist.
</p>

    PUT /notifications/publish/{anchorId}

## 3.1. Path Parameters

| Name      | Type    | Value      | Description                            |
|:----------|:--------|:-----------|:---------------------------------------|
| anchorId  | string  | *required  | Zero Access keySSI encoded in base58.  |


## 3.2. Body Parameters

| Name      | Description                                                                                             |
|:----------|:--------------------------------------------------------------------------------------------------------|
| body      | Body contains the message to be sent to subscribers subscribed to the “anchorId” queue ( see example).  |

### 3.2.1.Example: Application/JSON

``
{
   "message": "Content of message sent to subscribers"
  }
``

## 3.3. Responses

| Status Code | Description                                                                                             |
|:------------|:--------------------------------------------------------------------------------------------------------|
| 200         | Message was placed in the queue for the anchorId. Response media type: application/json ( see example). |
| 400         | Messages could not be read from the body.                                                               |
| 409         | Queue already exists.                                                                                   |
| 500         | Error creating notification queue for the provided anchorId or unable to send the message.              |


### 3.3.1. Example: Application/JSON

``
{
   "message": "Message delivered to 2 subscribers."
  }
``

# Annex 1. Contributors

| **Current Editors**                         | **Email**                                 |
|:--------------------------------------------|:------------------------------------------|
| Sînică Alboaie                              | sinica.alboaie@axiologic.net              |
| Rafael Mastaleru                            | rafael@rms.ro                             |
| Nicoleta Mihalache                          | nicoleta@axiologic.net                    |
| **Contributors Axiologic Research**         | **Email**                                 |
| Adrian Ganga                                | adrian@axiologic.net                      |
| Andi-Gabriel Țan                            | andi@axiologic.net                        |
| Cosmin Ursache                              | cosmin@axiologic.net                      |
| Daniel Sava                                 | daniel@axiologic.net                      |
| Nicoleta Mihalache                          | nicoleta@axiologic.net                    |
| Valentin Gérard                             | valentin@axiologic.net                    |
| **PrivateSky Contributors**                 | **Email**                                 |
| Alex Sofronie                               | alsofronie@gmail.com (DPO)                |
| Cosmin Ursache                              | cos.ursache@gmail.com (UAIC)              |
| Daniel Sava                                 | sava.dumitru.daniel@gmail.com (HVS, AQS)  |
| Daniel Visoiu                               | visoiu.daniel.g@gmail.com (SGiant)        |
| Lenuța Alboaie                              | lalboaie@gmail.com (UAIC)                 |
| Rafael Mastaleru                            | rafael@rms.ro (RMS)                       |
| Sînică Alboaie                              | salboaie@gmail.com (UAIC)                 |
| Vlad Balmos                                 | vlad.balmos@gmail.com (Code932)           |
| **PharmaLedger Contributors**               | **Email**                                 |
| Ana Balan                                   | bam@rms.ro (RMS)                          |
| Bogdan Mastahac                             | mab@rms.ro (RMS)                          |
| Cosmin Ursache                              | cos@rms.ro (RMS)                          |
| Rafael Mastaleru                            | raf@rms.ro (RMS)                          |



