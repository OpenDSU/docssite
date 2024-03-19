---
title: DSU Wizard 
layout: home
parent: OpenDSU APIHub APIs
nav_order: 7
---

# **DSU Wizard (RFC-126)**

{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs).

**Document Maintainers: Andi Gabriel Tan 2022. List of other contributors in Annex. 1.**

**Copyright: MIT license**

**Copyright** ©  2018-2022 Axiologic Research and Contributors.

This document is licensed under <a href="https://en.wikipedia.org/wiki/MIT_License">MIT license.</a>


<!-- TOC -->
* [Abstract](#abstract)
* [1.DSU Wizard Domain Begin Transaction](#1dsu-wizard-domain-begin-transaction)
  * [1.1. Path Parameters](#11-path-parameters)
  * [1.2. Responses](#12-responses)
* [2. DSU Wizard Domain Finish Transaction](#2-dsu-wizard-domain-finish-transaction)
  * [2.1. Path Parameters](#21-path-parameters)
  * [2.2. Responses](#22-responses)
* [3. DSU Wizard addFile](#3-dsu-wizard-addfile)
  * [3.1. Path Parameters](#31-path-parameters)
  * [3.2. Request Headers](#32-request-headers)
  * [3.3. Body Parameters](#33-body-parameters)
  * [3.4. Responses](#34-responses)
* [4. DSU Wizard Copy Folder](#4-dsu-wizard-copy-folder)
  * [4.1. Path Parameters](#41-path-parameters)
  * [4.2. Request Headers](#42-request-headers)
  * [4.3. Responses](#43-responses)
* [5. DSU Wizard Mount DSU](#5-dsu-wizard-mount-dsu)
  * [5.1. Path Parameters](#51-path-parameters)
  * [5.2. Request Headers](#52-request-headers)
  * [5.3. Responses](#53-responses)
* [6. DSU Wizard SetKeySSI](#6-dsu-wizard-setkeyssi)
  * [6.1. Path Parameters](#61-path-parameters)
  * [6.2. Request Headers](#62-request-headers)
  * [6.3. Body Parameters](#63-body-parameters)
  * [6.4. Responses](#64-responses)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->


# **Abstract**

<p style='text-align: justify;'>

The DSU Wizard offers a series of operations that can allow execution context or atomic commands to be wrapped into a transaction that can be executed at a chosen time. The transaction can be built over time as well as its execution.
</p>

# **1.DSU Wizard Domain Begin Transaction**

<p style='text-align: justify;'>

Instantiate a transaction handled by the transaction manager. We use the returned transactionId to access the transaction to add commands, customize the execution context and execute it. The transactionId represents the session identifier.
</p>

    POST /dsu-wizard/{domain}/begin

## 1.1. Path Parameters

| Name    | Type    | Value      | Description                                           |
|:--------|:--------|:-----------|:------------------------------------------------------|
| domain  | string  | *required  | The domain on which the transaction is instantiated.  |


## 1.2. Responses

| Status Code | Description                                                                                                                        |
|:------------|:-----------------------------------------------------------------------------------------------------------------------------------|
| 200         | Return the transactionId of the instantiated transaction. <br> Schema: plain/text <br> Example: _340e887f5964a33e436a86511e573d20_ |
| 404         | DSU wizard component is not enabled.                                                                                               |
| 500         | Instantiating the transaction encountered an error.                                                                                |


# **2. DSU Wizard Domain Finish Transaction**

<p style='text-align: justify;'>

Execute the transaction identified by the provided transactionId, by setting the execution context and executing the commands associated with this transaction in the invoked order. After the execution is completed, the result of the transaction will be returned.
</p>

    POST /dsu-wizard/{domain}/build/{transactionId}

## 2.1. Path Parameters

| Name           | Type    | Value      | Description                                      |
|:---------------|:--------|:-----------|:-------------------------------------------------|
| domain         | string  | *required  | The domain on which the transaction is executed. |
| transactionId  | string  | *required  | The transaction Id which is executed.            |


## 2.2. Responses

| Status Code | Description                                                                                                                                                                                                                             |
|:------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 200         | Return the transaction result, the keySSI in base58 of the updated/created DSU. <br> Schema: plain/text <br> Example: <br> _PPnBCCJoTpzrUJ1fHix85HQhWca6h39xVdm4hdQA2o1oFbaRm6TnQSY3KoQgViypburV39xn_ <br> _vWRKQ95j1fVu4Z1WRt4wzwFx5._ |
| 404         | The DSU Wizard component is not enabled.                                                                                                                                                                                                |
| 500         | Error executing the transaction. Returns the encountered error.                                                                                                                                                                         |


# **3. DSU Wizard addFile**

<p style='text-align: justify;'>

Add the addFile command to an already existing transaction identified by the provided transaction identifier (transactionId). The command will store the file with the content provided in the body, to the specified path in the DSU identified by the execution context.
</p>

    POST /dsu-wizard/{domain}/addFile/{transactionId}

## 3.1. Path Parameters

| Name           | Type    | Value      | Description                                                         |
|:---------------|:--------|:-----------|:--------------------------------------------------------------------|
| domain         | string  | *required  | The domain on which the addFile command should be executed.         |
| transactionId  | string  | *required  | The transactionId context in which the command should be executed.  |


## 3.2. Request Headers

| Name            | Type     | Value     | Description                                                      |
|:----------------|:---------|:----------|:-----------------------------------------------------------------|
| x-dossier-path  | string   | *request  | The file path under which the file will be uploaded in the DSU.  |


## 3.3. Body Parameters

| Name  | Type  | Value  | Description                         |
|:------|:------|:-------|:------------------------------------|
| body  |       |        | application/octet-stream (binary).  |


## 3.4. Responses

| Status Code | Description                                            |
|:------------|:-------------------------------------------------------|
| 200         | The command was added to the transaction successfully. |
| 404         | The DSU Wizard component is not enabled.               |
| 500         | Error adding the command to the transaction.           |


# **4. DSU Wizard Copy Folder**

<p style='text-align: justify;'>

Add the copy command in the context of the transaction identified by the transactionId. The command will copy the contents from the source folder into the destination folder using the DSU provided by the execution context.
</p>

    POST /dsu-wizard/{domain}/copy/{transactionId}

## 4.1. Path Parameters

| Name           | Type    | Value      | Description                                                          |
|:---------------|:--------|:-----------|:---------------------------------------------------------------------|
| domain         | string  | *required  | The domain on which the copy command should be executed.             |
| transactionId  | string  | *required  | The transaction Id context in which the command should be executed.  |


## 4.2. Request Headers

| Name         | Type    | Value      | Description                                                                                          |
|:-------------|:--------|:-----------|:-----------------------------------------------------------------------------------------------------|
| x-src-path   | string  | *required  | The source path, in the context of the DSU, for the copy command.                                    |
| x-dest-path  | string  | *required  | The destination path, in the context of the DSU, where the contents from the source will be copied.  |


## 4.3. Responses

| Status Code | Description                                            |
|:------------|:-------------------------------------------------------|
| 200         | The command was added to the transaction successfully. |
| 404         | The DSU Wizard component is not enabled.               |
| 500         | Error adding the command to the transaction.           |


# **5. DSU Wizard Mount DSU**

<p style='text-align: justify;'>

Add the mount command in the context of the transaction identified by the transactionId. The command will mount the DSU in a specific path using the provided KeySSI.
</p>

    POST /dsu-wizard/{domain}/mount/{transactionId}

## 5.1. Path Parameters

| Name           | Type    | Value      | Description                                                          |
|:---------------|:--------|:-----------|:---------------------------------------------------------------------|
| domain         | string  | *required  | The domain on which the mount should be executed.                    |
| transactionId  | string  | *required  | The transaction Id context in which the command should be executed.  |


## 5.2. Request Headers

| Name                    | Type    | Value      | Description                                          |
|:------------------------|:--------|:-----------|:-----------------------------------------------------|
| x-mount-path            | string  | *required  | The path where the DSU will be mounted.              |
| x-mounted-dossier-seed  | string  | *required  | The keySSI in base58 format, used to mount the DSU.  |


## 5.3. Responses

| Status Code | Description                                            |
|:------------|:-------------------------------------------------------|
| 200         | The command was added to the transaction successfully. |
| 404         | The DSU Wizard component is not enabled.               |
| 500         | Error adding the command to the transaction.           |


# **6. DSU Wizard SetKeySSI**

<p style='text-align: justify;'>

Add the setKeySSI command in the context of the transaction identified by the transactionId. The command will update the transaction context with the provided KeySSI. We execute at the invocation moment to ensure the execution context of all commands loaded in the transaction will be the same.
</p>

    POST /dsu-wizard/{domain}/setKeySSI/{transactionId}

## 6.1. Path Parameters

| Name           | Type    | Value      | Description                                                          |
|:---------------|:--------|:-----------|:---------------------------------------------------------------------|
| domain         | string  | *required  | The domain on which the setKeySSI should be executed.                |
| transactionId  | string  | *required  | The transaction Id context in which the command should be executed.  |


## 6.2. Request Headers

| Name                | Type     | Value      | Description                              |
|:--------------------|:---------|:-----------|:-----------------------------------------|
| x-force-dsu-create  | boolean  | *required  | The path where the DSU will be mounted.  |


## 6.3. Body Parameters

| Name  | Type    | Value      | Description                                                                                                |
|:------|:--------|:-----------|:-----------------------------------------------------------------------------------------------------------|
| body  | string  | *required  | keySSI base 58 encoding. <br> Example: <br> _PPnBCCJoTpzrUJ1fHix85HQhWca6h39xVdm4hdQA2o1oFbaRm6TnQSY3_ <br> _KoQgViypburV39xnvWRKQ95j1fVu4Z1WRt4wzwFx5._ |


## 6.4. Responses

| Status Code | Description                                            |
|:------------|:-------------------------------------------------------|
| 200         | The command was added to the transaction successfully. |
| 404         | The DSU Wizard component is not enabled.               |
| 500         | Error adding the command to the transaction.           |



**Contributors**

1. <p style='text-align: justify;'><a href="https://www.axiologic.net/">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="https://www.opendsu.org/">www.opendsu.org</a> site.

2. <p style='text-align: justify;'><a href="https://pharmaledger.org/">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.

3. PrivateSky Research Project: MIT licensed content accordingly with the contracts. 
<a href="https://profs.info.uaic.ro/~ads/PrivateSky/"> https://profs.info.uaic.ro/~ads/PrivateSky/</a>



# **Annex 1. Contributors**

| **Current Editors**                 | **Email**                               |
|:------------------------------------|:----------------------------------------|
| Sînică Alboaie                      | sinica.alboaie@axiologic.net            |
| Rafael Mastaleru                    | rafael@rms.ro                           |
| Nicoleta Mihalache                  | nicoleta@axiologic.net                  |
| Teodor Lupu                         | teodor@axiologic.net                    |
| **Contributors Axiologic Research** | **Email**                               |
| Adrian Ganga                        | adrian@axiologic.net                    |
| Andi-Gabriel Țan                    | andi@axiologic.net                      |
| Cosmin Ursache                      | cosmin@axiologic.net                    |
| Daniel Sava                         | daniel@axiologic.net                    |
| Nicoleta Mihalache                  | nicoleta@axiologic.net                  |
| Teodor Lupu                         | teodor@axiologic.net                    |
| Valentin Gérard                     | valentin@axiologic.net                  |
| **PrivateSky Contributors**         | **Email**                               |
| Alex Sofronie                       | alsofronie@gmail.com(DPO)               |
| Cosmin Ursache                      | cos.ursache@gmail.com(UAIC)             |
| Daniel Sava                         | sava.dumitru.daniel@gmail.com(HVS, AQS) |
| Daniel Visoiu                       | visoiu.daniel.g@gmail.com(SGiant)       |
| Lenuța Alboaie                      | lalboaie@gmail.com(UAIC)                |
| Rafael Mastaleru                    | rafael@rms.ro(RMS)                      |
| Sînică Alboaie                      | salboaie@gmail.com(UAIC)                |
| Vlad Balmos                         | vlad.balmos@gmail.com(Code932)          |
| **PharmaLedger**                    | **Email**                               |
| Ana Balan                           | bam@rms.ro (RMS)                        |
| Rafael Mastaleru                    | raf@rms.ro (RMS)                        |

