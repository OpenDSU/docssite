---
title: CredentialsDSU (RFC-057)
layout: home
parent: OpenDSU Contributors
nav_order: 9
---


<style>
.imgMain{
    display.block;
    margin-left:70px;
    margin-right:auto;
} 
</style>

# **CredentialsDSU(RFC 057)**
{: .no_toc }


{: .feedback}
A period when the community can review the RFC (comment Docs).


**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright**© 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)

<!-- TOC -->
* [Abstract](#abstract)
* [1. Public Methods from the Credentials API](#1-public-methods-from-the-credentials-api)
  * [Function createJWTVerifiableCredential(issuer, subject, options, callback)](#function-createjwtverifiablecredentialissuer-subject-options-callback)
  * [Function createJWTVerifiableCredentialAsync(issuer, subject, options)](#function-createjwtverifiablecredentialasyncissuer-subject-options)
  * [Function createJWTVerifiablePresentation(issuer, options, callback)](#function-createjwtverifiablepresentationissuer-options-callback)
  * [Function createJWTVerifiablePresentationAsync(issuer, options)](#function-createjwtverifiablepresentationasyncissuer-options)
  * [Function loadJWTVerifiableCredential(encodedJWTc, callback)](#function-loadjwtverifiablecredentialencodedjwtc-callback)
  * [Function loadJWTVerifiableCredentialAsync(encodedJWTc)](#function-loadjwtverifiablecredentialasyncencodedjwtc)
  * [Function loadJWTVerifiablePresentation(encodedJWTp, callback)](#function-loadjwtverifiablepresentationencodedjwtp-callback)
  * [Function loadJWTVerifiablePresentationAsync(encodedJWTp)](#function-loadjwtverifiablepresentationasyncencodedjwtp)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->



# Abstract

# 1. Public Methods from the Credentials API


## Function createJWTVerifiableCredential(issuer, subject, options, callback)

<p style='text-align: justify;'><b>Description</b>: Creates an instance of a JwtVC object by preparing the initial JWT options object based on the inputs and pointing to the specific create JWT method based on the subject type.</p>


| **Name** | **Type**                   | **Value** | **Description** |
|:---------|:---------------------------|:----------|:----------------|
| issuer   | W3C DID Document or KeySSI | *required |                 |
| subject  | W3C DID Document or KeySSI | *required |                 |
| options  |                            |           |                 |
| callback | function                   | *required |                 |


**Callback parameters**

| **Name**    | **Type**            | **Response example** |
|:------------|:--------------------|:---------------------|
| err         | ErrorWrapper object |                      |
| jwtInstance |                     |                      |


**Description**: Contains an error or a JWT Instance.




## Function createJWTVerifiableCredentialAsync(issuer, subject, options)

<p style='text-align: justify;'><b>Description</b>: Similar to createJWTVerifiableCredential(), but this function is asynchronous. It returns a promise resolved with the JWTVerifiableCredential.</p>

| **Name** | **Type**                   | **Value** | **Description** |
|:---------|:---------------------------|:----------|:----------------|
| issuer   | W3C DID Document or KeySSI | *required |                 |
| options  |                            |           |                 |
| callback | function                   | *required |                 |





## Function createJWTVerifiablePresentation(issuer, options, callback)

<p style='text-align: justify;'><b>Description</b>: Creates an instance of a JwtVP object by preparing the initial JWT options object based on the inputs and pointing to the specific create JWT method based on the subject type.</p>


| **Name** | **Type**                   | **Value** | **Description** |
|:---------|:---------------------------|:----------|:----------------|
| issuer   | W3C DID Document or KeySSI | *required |                 |
| options  |                            |           |                 |
| callback | function                   | *required |                 |


**Callback parametres**

| **Name**    | **Type**             | **Response example** |
|:------------|:---------------------|:---------------------|
| err         | ErrorWrrapper object |                      |
| jwtInstance |                      |                      |

**Description:** Contains an error or a JWT Instance.




## Function createJWTVerifiablePresentationAsync(issuer, options)

<p style='text-align: justify;'><b>Description:</b> Similar to createJWTVerifiablePresentation(), but this function is asynchronous. It returns a promise resolved with the JWTVerifiablePresentation.</p>

| **Name** | **Type**                   | **Value** | **Description** |
|:---------|:---------------------------|:----------|:----------------|
| issuer   | W3C DID Document ot KeySSI | *required |                 |
| options  |                            |           |                 |




## Function loadJWTVerifiableCredential(encodedJWTc, callback)

<p style='text-align: justify;'><b>Description:</b> Loads an instance of a JWT VC by parsing an encoded verifiable credential according to the requested type.</p>

| **Name**    | **Type** | **Value** | **Description** |
|:------------|:---------|:----------|:----------------|
| encodedJWTc | string   | *required |                 |
| callback    | function | *required |                 |



**Callback parameters**

| **Name**          | **Type**            | **Description** |
|:------------------|:--------------------|:----------------|
| err               | ErrorWrapper object |                 |
| loadedJWTInstance |                     |                 |

**Description:** Contains an error or a JWT Instance.




## Function loadJWTVerifiableCredentialAsync(encodedJWTc)

<p style='text-align: justify;'><b>Description</b>: Similar to loadJWTVerifiableCredential(), but this function is asynchronous. It returns a promise resolved with the JWTVerifiableCredential.</p>

| **Name**   | **Type** | **Value** | **Description** |
|:-----------|:---------|:----------|:----------------|
| encodedJWTc| string   | *required |                 |





## Function loadJWTVerifiablePresentation(encodedJWTp, callback)

<p style='text-align: justify;'><b>Description:</b> Loads an instance of a JWT VP by parsing an encoded verifiable presentation according to the requested type.</p>


| **Name**     | **Type** | **Value** | **Description** |
|:-------------|:---------|:----------|:----------------|
| encodedJWTVp | string   | *required |                 |
| callback     | function | *required |                 |


**Callback parameters**

| **Name**          | **Type**             | **Response example** |
|:------------------|:---------------------|:---------------------|
| err               | ErrorWrrapper object |                      |
| loadedJWTInstance |                      |                      |


**Description:** Contains an error or a JWT Instance.


## Function loadJWTVerifiablePresentationAsync(encodedJWTp)

<p style='text-align: justify;'><b>Description</b>: Similar to loadJWTVerifiablePresentation(), but this function is asynchronous. It returns a promise resolved with the JWTVerifiablePresentation.</p>

| **Name**     | **Type** | **Value** | **Description** |
|:-------------|:---------|:----------|:----------------|
| encodedJWTVp | string   | *required |                 |



**validationStrategies**

This module exports functions such as:

    getValidationStrategy(validationStrategyName)
    registerValidationStrategy(validationStrategyName, implementation)
    validateCredential(validationStrategyName, environmentData, credentialSerialization, callback)
    validateCredentialAsync(validationStrategyName, environmentData, credentialSerialization)
    validatePresentation(validationStrategyNamesArray, environmentData, presentationSerialization, callback)
    validatePresentationAsync(validationStrategyNamesArray, environmentData, presentationSerialization)

**JWT_ERRORS**

These are different preset errors for several behaviours that might occur, for example:

    EMPTY_JWT_PROVIDED
    INVALID_JWT_FORMAT
    INVALID_JWT_HEADER
    INVALID_JWT_HEADER_TYPE
    INVALID_JWT_PAYLOAD
    INVALID_JWT_SIGNATURE
    INVALID_ISSUER_FORMAT
    INVALID_SUBJECT_FORMAT
    INVALID_EXPIRATION_DATE
    INVALID_PUBLIC_CLAIM
    INVALID_SUBJECT_CLAIM
    IMMUTABLE_PUBLIC_CLAIM
    INVALID_CONTEXT_URI
    INVALID_CONTEXT_TYPE
    IMMUTABLE_SUBJECT_CLAIM
    INVALID_SUBJECT_ID
    PROVIDED_SUBJECT_ID_NOT_PRESENT
    JWT_TOKEN_EXPIRED
    JWT_TOKEN_NOT_ACTIVE
    ROOT_OF_TRUST_NOT_VALID
    AUDIENCE_OF_PRESENTATION_NOT_DEFINED
    HOLDER_AND_VERIFIER_MUST_BE_DID


**Contributors**


1. <p style='text-align: justify;'><a href="www.axiologic.net">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="www.opendsu.com">www.opendsu.com</a> site.

2. <p style='text-align: justify;'><a href="www.pharmaledger.eu">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.

3. <a href="www.privatesky.xyz">PrivateSky Research Project</a>: MIT licensed content accordingly with the contracts. https://profs.info.uaic.ro/~ads/PrivateSky/


# Annex 1. Contributors

| **Current Editors**                 | **Email**                                                |
|:------------------------------------|:---------------------------------------------------------|
| Sînică Alboaie                      | sinica.alboaie@axiologic.net                             |
| Cosmin Ursache                      | cosmin@axiologic.net                                     |
| Teodor Lupu                         | teodor@axiologic.net                                     |
| Andi-Gabriel Țan                    | andi@axiologic.net                                       |
| **Contributors Axiologic Research** | **Email**                                                |
| Adrian Ganga                        | adrian@axiologic.net                                     |
| Andi-Gabriel Țan                    | andi@axiologic.net                                       |
| Cosmin Ursache                      | cosmin@axiologic.net                                     |
| Daniel Sava                         | daniel@axiologic.net                                     |
| Nicoleta Mihalache                  | nicoleta@axiologic.net                                   |
| Teodor Lupu                         | teodor@axiologic.net                                     |
| Valentin Gérard                     | valentin@axiologic.net                                   |
| **PrivateSky Contributors**         | **Email**                                                |
| Alex Sofronie                       | alsofronie@gmail.com (DPO)                               |
| Cosmin Ursache                      | cos.ursache@gmail.com (UAIC)                             |
| Daniel Sava                         | sava.dumitru.daniel@gmail.com (HVS, AQS)                 |
| Daniel Visoiu                       | visoiu.daniel.g@gmail.com (SGiant)                       |
| Lenuța Alboaie                      | lalboaie@gmail.com (UAIC)                                |
| Rafael Mastaleru                    | rafael@rms.ro (RMS)                                      |
| Sînică Alboaie                      | salboaie@gmail.com (UAIC)                                |
| Vlad Balmos                         | vlad.balmos@gmail.com (Code932)                          |
| **PharmaLedger Contributors**       | **Email**                                                |
| Ana Balan                           | bam@rms.ro (RMS)                                         |
| Bogdan Mastahac                     | mab@rms.ro (RMS)                                         |
| Cosmin Ursache                      | cos@rms.ro (RMS)                                         |
| Rafael Mastaleru                    | raf@rms.ro (RMS)                                         |

