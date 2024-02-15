---
title: Message Queues 
layout: home
parent: OpenDSU Contributors
nav_order: 16
---


# **Message Queues (RFC-073)**
{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs)

**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)


<!-- TOC -->
* [Abstract](#abstract)
* [1. Message queues functions in OpenDSU](#1-message-queues-functions-in-opendsu)
  * [Function getMQHandlerForDID(didDocument, domain, timeout)](#function-getmqhandlerfordiddiddocument-domain-timeout)
* [2. APIHUB Endpoints](#2-apihub-endpoints)
<!-- TOC -->




# **Abstract**

<p style='text-align: justify;'>The Message Queues “MQ” API space offers a set of portable functions for sending and receiving messages towards message queues identified by KeySSIs.
</p>


# **1. Message queues functions in OpenDSU**

## **Function getMQHandlerForDID(didDocument, domain, timeout)**

<p style='text-align: justify;'><b>Description:</b> Get an observable object that receives messages from the fromKeySSI if the asKeySSI has the rights to read those messages.
</p>

| **Name**    | **Type**   | **Value** | **Description**                                    |
|:------------|:-----------|:----------|:---------------------------------------------------|
| didDocument |            |           | The KeySSI from which you want to get the handler. |
| domain      | string     | *required | The blockchain domain.                             |
| timeout     | number(ms) |           | The amount of time before the request times out.   |



**Returns**

| **Name**         | **Description** |
|:-----------------|:----------------|
| MQHandler object |                 |



# **2. APIHUB Endpoints**

**MappingEngine**

```js
    put /mappingEngine/domain/  < messages ( array of messages)
```

**Notifications**

```js
    put /notification/send/domain/anchorID   < message signed by corresponding keyssi

    get /notification/get/domain/anchorID  > notification
```

**Server settings:** 

```js
    notification_expiration: 60 seconds
    notification_client_timeout : 60 (60 seconds)
    notification_maxSize: 1 (1k)
    notification_queue_length: 10
```

**MQ**

```js
    put /mq/domain/put/hashDID/  < message
    get /mq/domain/nonce > nonce
    get /mq/domain/get/hashDID/nonce/signature_of_did  > {messageID, message}
    get /mq/domain/take/hashDID/nonce/signature_of_did  > message
    delete /mq/domain/delete/hashDID/messageID/signature_of_did
```


Server settings: 

```js
    mq_client_timeout: 60 (60 seconds)
    mq_nonce_from_smartcontract:false
    mq_nonce_from_expiring_uuid:true
    mq_nonce_expiration_time: 10 (10 seconds)
    mq_throttling: 2  (2  messages/second)
    mq_allow_ unregistered_did: false
    mq_maxSize: 10 (10k)
```


**Hosting**

```js
    put /hosting/domain/mq/allow/hashDID/validatorSignature
    put /hosting/domain/mq/quota/hashDID/validatorSignature  < number of messages
    put /hosting/domain/mq/throttling/hashDID/validatorSignature  < number of messages/second
    put /hosting/domain/notifications/allow/anchorID/validatorSignature
```

**Configurations files**

```js
    domain: validatorDID
```

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



