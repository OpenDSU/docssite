---
title: Validation Strategies 
layout: home
parent: OpenDSU Drafts
nav_order: 5
---

# **Validation Strategies (RFC-029)**
{: .no_toc }

{: .draft }
A period when the community can review the RFC (comment Docs).

**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

**Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)


<!-- TOC -->
* [Validation strategies functions](#validation-strategies-functions)
    * [createPresentation(validationStrategyName, ...args)](#createpresentationvalidationstrategyname-args)
    * [getStrategy(validationStrategyName)](#getstrategyvalidationstrategyname)
    * [issueCredential(validationStrategyName, ...args)](#issuecredentialvalidationstrategyname-args)
    * [registerValidationStrategy(validationStrategyName, ...args)](#registervalidationstrategyvalidationstrategyname-args)
    * [sign(validationStrategyName, ...args)](#signvalidationstrategyname-args)
    * [validatePresentation(allowedImplementationArray, useCase, environmentData, presentationSerialisation, (err, result) =>{})](#validatepresentationallowedimplementationarray-usecase-environmentdata-presentationserialisation-err-result-)
  * [verifyCredential(validationStrategyName, ...args)](#verifycredentialvalidationstrategyname-args)
  * [verifySignature(validationStrategyName, ...args)](#verifysignaturevalidationstrategyname-args)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->



# **Validation strategies functions**


| Functions                  | Description                                                                                                                               |
|:---------------------------|:------------------------------------------------------------------------------------------------------------------------------------------|
| createPresentation         | User can create a verifiable presentation he can present to another user/organization. All claims inside the presentation are verifiable. |
| getStrategy                | Get the strategy used to issue, sign and verify credentials and presentations                                                             |
| issueCredential            | Issue credential with the strategy of your choice.                                                                                        |
| registerValidationStrategy |                                                                                                                                           |


| Functions                  | Description                                                                                                                                     |
|:---------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------|
| createPresentation         | The user can create a verifiable presentation they can present to another user/organization. All claims inside the presentation are verifiable. |
| getStrategy                | Get the strategy used to issue, sign and verify credentials and presentations                                                                   |
| issueCredential            | Issue credential with the strategy of your choice                                                                                               |
| registerValidationStrategy | Register a new presentation or update an existing one from the strategy’s registry                                                              |
| sign                       | Sign credential or presentation with the strategy of your choice                                                                                |
| validatePresentation       | This function allow a verifier to validate or not a presentation that was sent to him                                                           |
| verifyCredential           | Verify claims inside a credential with the strategy of your choice                                                                              |
| verifySignature            | Verify the signature of a credential or a presentation with the strategy of your choice                                                         |

## createPresentation(validationStrategyName, ...args)

<p style='text-align: justify;'><b>Description</b>: This function allows the user to create a verifiable presentation. Presentations can be used to combine and present a set of different verifiable credentials. They are packaged in a way that makes all the claims inside the presentation verifiable by a verifier (the one that will receive the presentation). More information is available on the <a href="https://www.w3.org/TR/vc-data-model/#presentations-0">w3c website</a>.
</p>

**Parameters:**

| Parameter               | Type     | Description    |
|:------------------------|:---------|:---------------|
| validationStrategyName  |          |                |
| ...args                 |          |                |


## getStrategy(validationStrategyName)

**Description:** Get the strategy used to issue, sign and verify credentials and presentations.

**Parameters:**

| Parameter               | Type     | Description    |
|:------------------------|:---------|:---------------|
| validationStrategyName  | string   |                |
| ...args                 |          |                |




## issueCredential(validationStrategyName, ...args)

**Description:** Issue credential with the strategy of your choice.

**Parameters:**

| Parameter               | Type     | Description    |
|:------------------------|:---------|:---------------|
| validationStrategyName  |          |                |
| ...args                 |          |                |

## registerValidationStrategy(validationStrategyName, ...args)

**Description:** Register a new presentation or update an existing one from the strategy’s registry.

**Parameters:**

| Parameter               | Type     | Description    |
|:------------------------|:---------|:---------------|
| validationStrategyName  |          |                |
| ...args                 |          |                |

##  sign(validationStrategyName, ...args)



**Description:** Sign credential or presentation with the strategy of your choice.

**Parameters:**

| Parameter               | Type     | Description    |
|:------------------------|:---------|:---------------|
| validationStrategyName  |          |                |
| ...args                 |          |                |


## validatePresentation(allowedImplementationArray, useCase, environmentData, presentationSerialisation, (err, result) =>{})

**Description:** Get a handler to a shared ledger.

**Parameters:**

| Parameter                  | Type     | Description    |
|:---------------------------|:---------|:---------------|
| allowedImplementationArray | string   |                |
| useCase                    |          |                |
| environmentData            |          |                |
| presentationSerialisation  |          |                |

**Callback:**

| Parameter                 | Type                | Description                                                                     |
|:--------------------------|:--------------------|:--------------------------------------------------------------------------------|
| err                       | ErrorWrapper object | Contains a message and the error                                                |
| result                    | boolean             | If the presentation could be verified will return true. Else will return false. |


## verifyCredential(validationStrategyName, ...args)

**Description:** Verify claims inside a credential with the strategy of your choice.

**Parameters:**

| Parameter               | Type     | Description    |
|:------------------------|:---------|:---------------|
| validationStrategyName  |          |                |
| ...args                 |          |                |


## verifySignature(validationStrategyName, ...args)

**Description:** Verify the signature of a credential or a presentation with the strategy of your choice.

**Parameters:**

| Parameter               | Type     | Description    |
|:------------------------|:---------|:---------------|
| validationStrategyName  |          |                |
| ...args                 |          |                |



**Contributors**

1. <p style='text-align: justify;'><a href="https://www.axiologic.net/">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="https://www.opendsu.org/">www.opendsu.org</a> site.

2. <p style='text-align: justify;'><a href="https://pharmaledger.org/">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.

3. PrivateSky Research Project: MIT licensed content accordingly with the contracts. 
<a href="https://profs.info.uaic.ro/~ads/PrivateSky/"> https://profs.info.uaic.ro/~ads/PrivateSky/</a>



# **Annex 1. Contributors**

| **Current Editors**                  | **Email**                                |
|:-------------------------------------|:-----------------------------------------|
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
