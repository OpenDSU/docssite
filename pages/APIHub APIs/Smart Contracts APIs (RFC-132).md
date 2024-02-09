---
title: Smart Contracts APIs 
layout: home
parent: OpenDSU APIHub APIs
nav_order: 13
---

# **Smart Contracts APIs (RFC-132)**

{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs).

**Document Maintainers: Andi Gabriel Tan 2022. List of other contributors in Annex. 1.**

**Copyright: MIT license**

**Copyright** ©  2018-2022 Axiologic Research and Contributors.

This document is licensed under <a href="https://en.wikipedia.org/wiki/MIT_License">MIT license.</a>

<!-- TOC -->
* [Smart Contracts APIs (RFC-132)](#smart-contracts-apis-rfc-132)
* [Abstract](#abstract)
* [1. BDNS Entries](#1-bdns-entries)
  * [1.1. Path Parameters](#11-path-parameters)
  * [1.2. Responses](#12-responses)
* [2. Latest Block Info](#2-latest-block-info)
  * [2.1. Path Parameters](#21-path-parameters)
  * [2.2. Responses](#22-responses)
* [3. Safe Command](#3-safe-command)
  * [3.1. Path Parameters](#31-path-parameters)
  * [3.2. Body Parameters](#32-body-parameters)
    * [3.2.1. Example: Application/JSON](#321-example-applicationjson-)
  * [3.3. Responses](#33-responses)
* [4. Nonced Command](#4-nonced-command)
  * [4.1. Path Parameters](#41-path-parameters)
  * [4.2. Body Parameters](#42-body-parameters)
    * [4.2.1. Example: Application/JSON](#421-example-applicationjson)
  * [4.3. Responses](#43-responses)
* [5. PBlock Added](#5-pblock-added)
  * [5.1. Path Parameters](#51-path-parameters)
  * [5.2. Body Parameters](#52-body-parameters)
    * [5.2.1. Example: Application/JSON](#521-example-applicationjson)
  * [5.3. Responses](#53-responses)
* [6. Validator Not Inclusion](#6-validator-not-inclusion)
  * [6.1. Path Parameters](#61-path-parameters)
  * [6.2. Body Parameters](#62-body-parameters)
    * [6.2.1. Example: Application/JSON](#621-example-applicationjson)
  * [6.3. Responses](#63-responses)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->

# Abstract

# 1. BDNS Entries
Get the BDNS entry using contract calls for the specified domain.

    GET /contracts/{domain}/bdns-entries/{entry}/

## 1.1. Path Parameters

| Name   | Type    | Value     | Description                                                            |
|:-------|:--------|:----------|:-----------------------------------------------------------------------|
| domain | string  | *required | The domain where the command should be executed.                       |
| entry  | string  | *required | The BDNS entry for the specified domain. <br> Example: brickStorages.  |

## 1.2. Responses

| Status Code | Description                                                                             |
|:------------|:----------------------------------------------------------------------------------------|
| 200         | Retrieves the specified BDNS entry. <br> Example: Application/JSON <br> [  “$ORIGIN”  ] |
| 404         | Invalid entry specified.                                                                |
| 500         | Contracts not booted.                                                                   |

# 2. Latest Block Info

Send the lastestBlockInfo command to the worker.

    GET /contracts/{domain}/latest-block-info/

## 2.1. Path Parameters

| Name    | Type    | Value      | Description                                       |
|:--------|:--------|:-----------|:--------------------------------------------------|
| domain  | string  | *required  | The domain where the command should be executed.  |

## 2.2. Responses

| Status Code | Description                                        |
|:------------|:---------------------------------------------------|
| 200         | Command executed successfully.                     |
| 400         | Worker allocation failure, invalid domain or body. |
| 500         | Error executing the command.                       |

# 3. Safe Command

Send the safe command to the worker.

    POST /contracts/{domain}/safe-command/

## 3.1. Path Parameters

| Name    | Type    | Value      | Description                                       |
|:--------|:--------|:-----------|:--------------------------------------------------|
| domain  | string  | *required  | The domain where the command should be executed.  |


## 3.2. Body Parameters

| Name  | Type  | Value  | Description       |
|:------|:------|:-------|:------------------|
| body  |       |        | Contract Command  |


### 3.2.1. Example: Application/JSON 

````
{
  domain:"csc",
  contractName: "anchoring",
  methodName: "anchoring",
  params: [...methodParams]
}
````

## 3.3. Responses

| Status Code | Description                                        |
|:------------|:---------------------------------------------------|
| 200         | Command executed successfully.                     |
| 400         | Worker allocation failure, invalid domain or body. |
| 500         | Error executing the command.                       |


# 4. Nonced Command

Send the nonced command to the worker.

    POST /contracts/{domain}/nonced-command/

## 4.1. Path Parameters

| Name    | Type    | Value      | Description                                       |
|:--------|:--------|:-----------|:--------------------------------------------------|
| domain  | string  | *required  | The domain where the command should be executed.  |


## 4.2. Body Parameters

| Name  | Type  | Value  | Description       |
|:------|:------|:-------|:------------------|
| body  |       |        | Contract Command  |


### 4.2.1. Example: Application/JSON

````
{
  domain:"csc",
  contractName: "anchoring",
  methodName: "anchoring",
  params: [...methodParams]
}
````

## 4.3. Responses

| Status Code | Description                                        |
|:------------|:---------------------------------------------------|
| 200         | Command executed successfully.                     |
| 400         | Worker allocation failure, invalid domain or body. |
| 500         | Error executing the command.                       |


# 5. PBlock Added

Send PBlock to validate the worker.

    POST /contracts/{domain}/pblock-added/

## 5.1. Path Parameters

| Name    | Type    | Value      | Description                                       |
|:--------|:--------|:-----------|:--------------------------------------------------|
| domain  | string  | *required  | The domain where the command should be executed.  |


## 5.2. Body Parameters

| Name  | Type  | Value  | Description       |
|:------|:------|:-------|:------------------|
| body  |       |        | Contract Command  |


### 5.2.1. Example: Application/JSON

````
{
  domain:"csc",
  contractName: "anchoring",
  methodName: "anchoring",
  params: [...methodParams]
}
````

## 5.3. Responses

| Status Code | Description                                        |
|:------------|:---------------------------------------------------|
| 200         | Command executed successfully.                     |
| 400         | Worker allocation failure, invalid domain or body. |
| 500         | Error executing the command.                       |


# 6. Validator Not Inclusion

Set domain validator as non-inclusion to consensus phase.

    POST /contracts/{domain}/validator-non-inclusion/

## 6.1. Path Parameters

| Name    | Type    | Value      | Description                                       |
|:--------|:--------|:-----------|:--------------------------------------------------|
| domain  | string  | *required  | The domain where the command should be executed.  |


## 6.2. Body Parameters

| Name  | Type  | Value  | Description       |
|:------|:------|:-------|:------------------|
| body  |       |        | Contract Command  |


### 6.2.1. Example: Application/JSON

````
{
  domain: "csc",
  contractName: "anchoring",
  methodName: "anchoring",
  params: [...methodParams]
}
````

## 6.3. Responses

| Status Code | Description                                        |
|:------------|:---------------------------------------------------|
| 200         | Command executed successfully.                     |
| 400         | Worker allocation failure, invalid domain or body. |
| 500         | Error executing the command.                       |

**Contributors**

1. <p style='text-align: justify;'><a href="www.axiologic.net">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="www.opendsu.com">www.opendsu.com</a> site.

2. <p style='text-align: justify;'><a href="www.pharmaledger.eu">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.

3. <a href="www.privatesky.xyz">PrivateSky Research Project</a>: MIT licensed content accordingly with the contracts. https://profs.info.uaic.ro/~ads/PrivateSky/

# Annex 1. Contributors


| **Current Editors**                 | **Email**                          |
|:------------------------------------|:-----------------------------------|
| Sînică Alboaie                      | sinica.alboaie@axiologic.net       |
| Rafael Mastaleru                    | rafael@rms.ro                      |
| Nicoleta Mihalache                  | nicoleta@axiologic.net             |
| **Contributors Axiologic Research** | **Email**                          |
| Daniel Visoiu                       | visoiu.daniel.g@gmail.com(S.Giant) |
| Andi-Gabriel Țan                    | andi@axiologic.net                 |
| Cosmin Ursache                      | cosmin@axiologic.net               |
| Daniel Sava                         | daniel@axiologic.net               |
| Nicoleta Mihalache                  | nicoleta@axiologic.net             |
| Valentin Gérard                     | valentin@axiologic.net             |
| **PharmaLedger**                    | **Email**                          |
| Ana Balan                           | bam@rms.ro (RMS)                   |
| Rafael Mastaleru                    | raf@rms.ro (RMS)                   |

