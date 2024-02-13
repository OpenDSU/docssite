---
title: MQ Hub 
layout: home
parent: OpenDSU APIHub APIs
nav_order: 11
---

# **MQ Hub (RFC-130)**

{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs).

**Document Maintainers: Andi Gabriel Tan 2022. List of other contributors in Annex. 1.**

**Copyright: MIT license**

**Copyright** ©  2018-2022 Axiologic Research and Contributors.

This document is licensed under <a href="https://en.wikipedia.org/wiki/MIT_License">MIT license.</a>

<!-- TOC -->
* [Abstract](#abstract)
* [1. Create a JWT Token](#1-create-a-jwt-token)
  * [1.1. Path Parameters](#11-path-parameters)
  * [1.2. Responses](#12-responses)
    * [1.2.1. Example: Application/JSON](#121-example-applicationjson)
* [2. Put a Message in the MQ](#2-put-a-message-in-the-mq)
  * [2.1. Path Parameters](#21-path-parameters)
  * [2.2. Request Headers](#22-request-headers)
  * [2.3. Body Parameters](#23-body-parameters)
    * [2.3.1.Example: Application/JSON](#231example-applicationjson)
  * [2.4. Responses](#24-responses)
* [3. Get a MQ Message](#3-get-a-mq-message)
  * [3.1. Path Parameters](#31-path-parameters)
  * [3.2. Request Headers](#32-request-headers)
  * [3.3. Responses](#33-responses)
    * [3.3.1. Example: Application/JSON](#331-example-applicationjson)
* [4. Delete a MQ Message](#4-delete-a-mq-message)
  * [4.1. Path Parameters](#41-path-parameters)
  * [4.2. Request Headers](#42-request-headers)
  * [4.3. Responses](#43-responses)
* [5. Remove a MQ Message](#5-remove-a-mq-message)
  * [5.1. Path Parameters](#51-path-parameters)
  * [5.2. Request Headers](#52-request-headers)
  * [5.3. Responses](#53-responses)
    * [5.3.1. Example: Application/JSON](#531-example-applicationjson)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->

# Abstract

<p style='text-align: justify;'>Message Queue Hub contains a set of APIs that facilitate communication between different entities using DIDs.
</p>

# 1. Create a JWT Token

<p style='text-align: justify;'>Request to create a new JWT signed token that will be used for authorization of using the rest of the APIs described in this section.
</p>

    GET /mq/{domain}/{hashDID}/token

## 1.1. Path Parameters

| Name     | Type    | Value      | Description                                                                                |
|:---------|:--------|:-----------|:-------------------------------------------------------------------------------------------|
| domain   | string  | *required  | DID domain for which JWT signed is requested. <br/>Example: vault.csc                      |
| hashDID  | string  | *required  | Sha256 hash of DID identifier. <br/>Example: _8wVnt83NUB3usrooEUWRhRChiyGQFDXBG2uyt4LtndT_ |


## 1.2. Responses

| Status Code | Description                                                        |
|:------------|:-------------------------------------------------------------------|
| 200         | Returns a JWT signed token  (see 1.2.1 example application/ json). |
| 500         | Not able to create a new token.                                    |

### 1.2.1. Example: Application/JSON

```
{  
"token":"2iVr8jPNNyNojJQ2EKzTz66u5rg4.oakF1h2zHGqJ8Ub5cuwH8GPXzwE3EVPnP7QZRGH
YtGkohWahc8sMXTnWUngejdRQGwgkgvoqaBYLAfgFw83ML9PvgDRJvyqQtR99mCjTjBHhYCtTi
dySwhdJFTCyA48XzmnUN1JEd3Xnk6WUwMCruzqacfd7md84PUZdDGTqeGPNA9nFNK6LoHdf
ejXyfqQitd1GWiyZuVP8ESV1P8YB7WpFBmBD5eHeZiiZSxmGGmNKjFMSV9CK9EcnhoHrCEVvo
YRxg1yrcyLDAtDZyxbtczpJCws1mMjoJx4KouTo7kepewfUmjJrzmQWztVgujNZSYx8J11DqUZXq
LmRPbs57BZ6RkZkehEDWWrr3YViRf9tzAncb8DrABqtVeokyyTPXfonbRgyA2D9dfD1EAw3VxWR
6F6B72xh68551uY9x2jyzDMzQBGH48fcoHZpH7a7zMqvNyPYqXWkAPDvazMwKF1qo782aPHU
YqbubXatVae6K785LCHrUcEQPhC7gbJ7bvLQYZivW3EM9B8xyGsSyBoM2B8JAcz3WFPzZa8Ns
gZrU85A5SzTRGHEv6ZeoCH3UmcZjgroHSiDbZTFvwetZwA2VWV7piKCa42SNbwfBsyram2wvc
wTGMtUXUzJk2Hke8SkRihFYaMzSyPBSQSRY31Ly2EXcgorkMqM29se6BUYYknWvZZLroxH4cp
w9LzejUeLe5bx8Aic66ueYNxiE9kYkXVStDpdhTkPGE2HNDaDiUzhuSbSQGakwro5zxKixwsPk3Xy
DAE1CFyR7eFC7U3t8Bf7SGvQ5Txp7iUYVvQULeNop6NYKN.CkRvatu6DizRiw8M7C2xg41UzcSk
VM1vBA6etakD62wFSLv7UNbJ2xhpQwqxppezG5Mr4ZGdDALd5yXGoosRQYp",
"expires": 1667925722000
}
```

# 2. Put a Message in the MQ

<p style='text-align: justify;'>PUT a new message in the MQ. The hashDID is the queue channel of the receiver of the message. The message is encrypted with the public key of the receiver DID, and it will be decrypted only by the receiver using his private key.
</p>

    PUT /mq/{domain}/put/{hashDID}

## 2.1. Path Parameters

| Name     | Type    | Value      | Description                       |
|:---------|:--------|:-----------|:----------------------------------|
| domain   | string  | *required  | DID domain of the receiver.       |
| hashDID  | string  | *required  | Sha256 hash of the receiver DID.  |

## 2.2. Request Headers

| Name           | Description                                                                        |
|:---------------|:-----------------------------------------------------------------------------------|
| authorization  | Contains the authorization JWT signed token as described in the previous chapter.  |

## 2.3. Body Parameters

| Name      | Description                                            |
|:----------|:-------------------------------------------------------|
| body      | Body contains the message to be sent to the receiver.  |

### 2.3.1.Example: Application/JSON

```js
{
   "message":"Content of message sent to the receiver DID"
}
```

## 2.4. Responses

| Status Code | Description                                                    |
|:------------|:---------------------------------------------------------------|
| 200         | Operation successfully added the message to the hashDID queue. |
| 403         | No token was provided or an invalid token.                     |
| 405         | Domain doesn’t have an MQ component enabled.                   |
| 500         | Not able to create a new token.                                |



# 3. Get a MQ Message

<p style='text-align: justify;'>Get a message from the MQ. The process is performed under the authorization token, which enforces the privacy of the message by checking it against the signature of the DID.
</p>


    GET /mq/{domain}/get/{hashDID}/{signatureOfDid}


## 3.1. Path Parameters

| Name             | Type    | Value      | Description                                                                                                                                                                                                                                         |
|:-----------------|:--------|:-----------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| domain           | string  | *required  | DID domain of the receiver (the DID who made the API call).                                                                                                                                                                                         |
| hashDID          | string  | *required  | Sha256 hash of DID identifier. Example: _8wVnt83NUB3usrooEUWRhRChiyGQFDXBGC2uyt4LtndT_                                                                                                                                                              |
| signatureOf Did  | string  | *required  | Signature of the signed token using the same DID document as for hashed DID. <br/> Example: _30460221009cee7b5876a30f7e590673eaefe75497341c 4927276237b4321888d48798ddfe02210083d8da4308f 9dea539023a773a15ff774e6c7e64b7983f772987fbfbb ca26488e._ |


## 3.2. Request Headers

| Name            | Description                                                                        |
|:----------------|:-----------------------------------------------------------------------------------|
| authorization   | Contains the authorization JWT signed token as described in the previous chapter.  |


## 3.3. Responses

| Status Code | Description                                                                                                                                 |
|:------------|:--------------------------------------------------------------------------------------------------------------------------------------------|
| 200         | The response contains the returned message for this DID when a new message is available for this DID (see 3.3.1 example application/ json). |
| 204         | No content yet.                                                                                                                             |
| 403         | No token was provided or an invalid token.                                                                                                  |
| 405         | Domain doesn’t have an MQ component enabled.                                                                                                |
| 500         | Not able to create a new token.                                                                                                             |


### 3.3.1. Example: Application/JSON

```js
{
   "message":"Welcome to application",
   "sender":"did:ssi:name:csc.senderIdentity"
}
```

# 4. Delete a MQ Message

<p style='text-align: justify;'>Delete a message from the MQ. This API service deletes a message after it is consumed by the client. The decision on when to delete the message is left to the programmers. On OpenDSU, the messages are deleted after the DID document reads the new message.
</p>


    DELETE /mq/{domain}/delete/{hashDID}/{messageID}/{signatureOfDid}


## 4.1. Path Parameters

| Name             | Type    | Value      | Description                                                                                                                                                                                                                                         |
|:-----------------|:--------|:-----------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| domain           | string  | *required  | DID domain of the receiver.                                                                                                                                                                                                                         |
| hashDID          | string  | *required  | Sha256 hash of DID identifier.                                                                                                                                                                                                                      |
| messageID        | string  | *required  | Message ID that should be deleted from MQ on channel hashDID.  <br/> Example: _56WGghXyP8N54zbRdTCEXRXWalW236Nktow3XN7NF BdY/1668006644827_                                                                                                         |
| signature OfDid  | string  | *required  | Signature of the signed token using the same DID document as for hashedDID.  <br/> Example: _30460221009cee7b5876a30f7e590673eaefe75497341c 4927276237b4321888d48798ddfe02210083d8da4308f 9dea539023a773a15ff774e6c7e64b7983f772987fbfbbc a26488e._ |

## 4.2. Request Headers

| Name           | Description                                   |
|:---------------|:----------------------------------------------|
| authorization  | Contains the authorization JWT signed token.  |


## 4.3. Responses

| Status Code | Description                                                    |
|:------------|:---------------------------------------------------------------|
| 200         | Operation executed successfully.                               |
| 500         | An error occurred during deleting the message from the queue.  |


# 5. Remove a MQ Message

<p style='text-align: justify;'>Read and delete a message from the MQ. The message is deleted from the MQ prior to serving it to the client. However, this approach is not recommended, because the message can be lost due to a networking error before the client can consume it.
</p>


    GET /mq/{domain}/take/{hashDID}/{messageID}/{signatureOfDid}


## 5.1. Path Parameters

| Name             | Type    | Value      | Description                                                                                                                                                                                                                                   |
|:-----------------|:--------|:-----------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| domain           | string  | *required  | DID domain of the receiver.                                                                                                                                                                                                                   |
| hashDID          | string  | *required  | Sha256 hash of DID identifier.                                                                                                                                                                                                                |
| messageID        | string  | *required  | Message ID that should be deleted from MQ on channel hashDID. <br/> Example: _56WGghXyP8N54zbRdTCEXRXWalW236Nktow3XN7NF BdY/1668006644827_                                                                                                    |
| signature OfDid  | string  | *required  | Signature of the signed token using the same DID document as for hashedDID. <br/> Example: _30460221009cee7b5876a30f7e590673eaefe75497341c 4927276237b4321888d48798ddfe02210083d8da4308f 9dea539023a773a15ff774e6c7e64b7983f772987fbfbbc a26488e._ |

## 5.2. Request Headers

| Name            | Description                                   |
|:----------------|:----------------------------------------------|
| authorization   | Contains the authorization JWT signed token.  |

## 5.3. Responses

| Status Code | Description                                                                                                           |
|:------------|:----------------------------------------------------------------------------------------------------------------------|
| 200         | Operation executed successfully, and the message is returned to the client      (see example 5.3.1 application/ json) |
| 500         | An error occurred while deleting the message from the queue.                                                          |


### 5.3.1. Example: Application/JSON


```js
{
   "message":"Welcome to application",
   "sender":"did:ssi:name:csc.senderIdentity"
}
```




**Contributors**

1. <p style='text-align: justify;'><a href="https://www.axiologic.net/">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="https://www.opendsu.org/">www.opendsu.org</a> site.

2. <p style='text-align: justify;'><a href="https://pharmaledger.org/">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.

3. PrivateSky Research Project: MIT licensed content accordingly with the contracts. 
<a href="https://profs.info.uaic.ro/~ads/PrivateSky/"> https://profs.info.uaic.ro/~ads/PrivateSky/</a>







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






