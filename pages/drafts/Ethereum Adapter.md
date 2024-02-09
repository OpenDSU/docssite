---
title: Ethereum Adapter
layout: home
parent: OpenDSU Drafts
nav_order: 2
---

# Ethereum Adapter
{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs).


**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.
This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)

<!-- TOC -->
* [1. Ethereum Adapter](#1-ethereum-adapter)
* [2. Smart Contract methods](#2-smart-contract-methods)
  * [Function createAnchor(anchorId, newAnchorValue)](#function-createanchoranchorid-newanchorvalue)
  * [Function appendAnchor(anchorId, newAnchorValue)](#function-appendanchoranchorid-newanchorvalue)
  * [Function getAllVersions(anchorId)](#function-getallversionsanchorid)
  * [Function getLastVersions(anchorId)](#function-getlastversionsanchorid)
  * [Function createOrUpdateMultipleAnchors(anchors)](#function-createorupdatemultipleanchorsanchors)
  * [Function dumpAnchors(from, limit, maxSize)](#function-dumpanchorsfrom-limit-maxsize)
  * [Function totalNumberOfAnchors()](#function-totalnumberofanchors)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->

# 1. Ethereum Adapter

<p style='text-align: justify;'>The purpose of the Ethereum Adapter is to offer an HTTP interface to be used by the ApiHub anchoring component when configured to do the anchoring into a Quorum/Ethereum private network-based Blockchain. Ethereum Adapter uses a custom-designed smart contract in order to store anchor information and an organization account used to sign any written transaction. Configuration of the Ethereum Adapter can be made using environment variables as follows:
</p>


| **Variable Name**                   | **Value**       | **Description**                                                                                                                                   |
|:------------------------------------|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|
| PORT                                | 3000            | Port on which the web server will listen.                                                                                                         |
| SMARTCONTRACT_ENDPOINT              | none            | The Web API endpoint from where the information about smart contract address and smart contract interface definition can be obtained.             |
| ANCHOR_SMARTCONTRACT_CONFIG_FOLDER  | ./config        | It is ignored if related environment variables are defined.                                                                                       |
| ACCOUNT                             | none            | The Ethereum blockchain account under which the calls to the smart contract are made.                                                             |
| RPC_ADDRESS                         | none            | he RPC endpoint of the Ethereum node.                                                                                                             |


<p style='text-align: justify;'>The source code of the Ethereum Adapter can be found at: <a href="https://github.com/PharmaLedger-IMI/ethereum-anchoring ">https://github.com/PharmaLedger-IMI/ethereum-anchoring</a> in the SmartContract folder.
</p>

**Status codes**

<p style='text-align: justify;'>Because of the complex logic of the smart contract regarding the validation process, we need a series of status codes in order to know what part of the validation failed and why. Based on the status codes, we can further customize the errors returned to the upper layers.
</p>


| **Status code**                               | **Type**  | **Value**  | **Description**                                                                                   |
|:----------------------------------------------|:----------|:-----------|---------------------------------------------------------------------------------------------------|
| statusOK                                      | Success   | 200        | createAnchor was called without errors, and information is stored on the blockchain.              |
| statusAddedConstSSIOK                         | Success   | 201        | createAnchor was called for ConstSSI without errors, and information is stored on the blockchain. |
| statusHashLinkOutOfSync                       | Error     | 100        | Validation process for the continuity of the hash link failed.                                    |
| statusCannotUpdateReadOnlyAnchor              | Error     | 101        | Validation process for createAnchor when called with an update for an already stored ConstSSI.    |
| statusHashOfPublicKeyDoesntMatchControlString | Error     | 102        | Validation of the controlString and publicKey failed.                                             |
| statusSignatureCheckFailed                    | Error     | 103        | Validation of the signature failed.                                                               |
| statusTimestampOrSignatureCheckFailed         | Error     | 104        |                                                                                                   |
| statusCannotCreateExistingAnchor              | Error     | 105        |                                                                                                   |
| statusCannotAppendToNonExistentAnchor         | Error     | 106        |                                                                                                   |
| statusCannotAppendConstAnchor                 | Error     | 107        |                                                                                                   |


# 2. Smart Contract methods

## Function createAnchor(anchorId, newAnchorValue)

**Description**: Create a new anchor.

| **Name**        | **Type**  | **Value**  | **Description**  |
|:----------------|:----------|:-----------|:-----------------|
| anchorId        | string    | *required  |                  |
| newAnchorValue  | string    | *required  |                  |

## Function appendAnchor(anchorId, newAnchorValue)

<p style='text-align: justify;'><b>Description</b>: Append an already existing anchor value to the current anchorId.
</p>


| **Name**        | **Type**  | **Value**  | **Description**  |
|:----------------|:----------|:-----------|:-----------------|
| anchorId        | string    | *required  |                  |
| newAnchorValue  | string    | *required  |                  |


## Function getAllVersions(anchorId)

**Description**: Get all versions of a certain anchorId.



| **Name**        | **Type**  | **Value**  | **Description**  |
|:----------------|:----------|:-----------|:-----------------|
| anchorId        | string    | *required  |                  |

## Function getLastVersions(anchorId)

**Description**: Get the last version of a certain anchorId.


| **Name**        | **Type**  | **Value**  | **Description**  |
|:----------------|:----------|:-----------|:-----------------|
| anchorId        | string    | *required  |                  |

## Function createOrUpdateMultipleAnchors(anchors)

**Description**: Modify anchors in an array.


| **Name**        | **Type**          | **Value**   | **Description**   |
|:----------------|:------------------|:------------|:------------------|
| anchorId        | Array of objects  | *required   |                   |

## Function dumpAnchors(from, limit, maxSize)

**Description**: Get rid of anchors.


| **Name**         | **Type**  | **Value**    | **Description**    |
|:-----------------|:----------|:-------------|:-------------------|
| from             | uint      | *required    |                    |
| limit            | uint      | *required    |                    |
| maxSize          | uint      | *required    |                    |

## Function totalNumberOfAnchors()

**Description**: Get the total number of anchors.


| **Name**         | **Type**           | **Value**   | **Description**    |
|:-----------------|:-------------------|:------------|:-------------------|
|                  |                    |             |                    |


| **Operation**  | **Entry point**                       | **Description**  |
|:---------------|:--------------------------------------|:-----------------|
| **PUT**        | /createAnchor/:anchorId/:anchorValue  |                  |
| **PUT**        | /appendAnchor/:anchorId/:anchorValue  |                  |
| **PUT**        | /createOrAppendMultipleAnchors        |                  |
| **GET**        | /getAllVersions/:anchorId             |                  |
| **GET**        | /getLastVersion/:anchorId             |                  |
| **GET**        | /totalNumberOfAnchors                 |                  |
| **GET**        | /dumpAnchors                          |                  |
| **GET**        | /health                               |                  |


**Contributors**


1. <p style='text-align: justify;'><a href="www.axiologic.net">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="www.opendsu.com">www.opendsu.com</a> site.

# Annex 1. Contributors

| **Current Editors**                 | **Email**                                                        |
|:------------------------------------|:-----------------------------------------------------------------|
| Sînică Alboaie                      | sinica.alboaie@axiologic.net                                     |
| Andi-Gabriel Țan                   | andi@axiologic.net                                                |
| Teodor Lupu                         | teodor@axiologic.net                                             |
| **Contributors Axiologic Research** | **Email**                                                        |
| Adrian Ganga                        | adrian@axiologic.net                                             |
| Andi-Gabriel Țan                    | andi@axiologic.net                                               |
| Cosmin Ursache                      | cosmin@axiologic.net                                             |
| Daniel Sava                         | daniel@axiologic.net                                             |
| Nicoleta Mihalache                  | nicoleta@axiologic.net                                           |
| Teodor Lupu                         | teodor@axiologic.net                                             |

