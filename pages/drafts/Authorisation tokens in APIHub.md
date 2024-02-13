---
title: Authorisation tokens in APIHub
layout: home
parent: OpenDSU Drafts
nav_order: 6
---


# Authorization Tokens in APIHub
{: .no_toc }

{: .draft }
A period when the community can review the RFC (comment Docs).

**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.
This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)

<!-- TOC -->
* [Authorization Tokens in APIHub](#authorization-tokens-in-apihub)
* [Abstract](#abstract)
* [1. APIHub as an OpenDSU Cloud Agent](#1-apihub-as-an-opendsu-cloud-agent)
  * [1.1.Token-based authorization in APIHub](#11token-based-authorization-in-apihub)
  * [1.2. KeySSI-based JWT Tokens](#12-keyssi-based-jwt-tokens-)
    * [1.2.1. Threat model](#121-threat-model)
    * [1.2.2.Relevant APIs in OpenDSU SDK](#122relevant-apis-in-opendsu-sdk)
* [2. Type of Wallets](#2-type-of-wallets)
  * [2.1. SeedSSI Wallet](#21-seedssi-wallet)
  * [2.2. SecretSSI Wallets](#22-secretssi-wallets)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->

# Abstract

# 1. APIHub as an OpenDSU Cloud Agent

## 1.1.Token-based authorization in APIHub

## 1.2. KeySSI-based JWT Tokens 

<p style='text-align: justify;'> The JWT signature is computed in two steps:
1. Obtain the hash of the JWT Header and the Payload.
2. Sign the hash with the private key of the “iss” obtained from the SeedSSI.</p>

| JWT Header Fields  | Details            |
|:-------------------|:-------------------|
| Typ (Token type)   | Set to “SeedSSIJWT |

<a href="">https://en.wikipedia.org/wiki/JSON_Web_Token
</a>

| JWT Payload Fields    | Details                                                                                                                                                                                                                                |
|:----------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| sub                   | Set to the identifier of the user owning the SeedSSI used for issuing the token                                                                                                                                                        |
| aud                   | The Audience field is a hash used to verify that the token is authentic and was not reused. The “aud” field is obtained by applying the hash  function to a string  obtaining by concatenating the URL that is under the authorisation |
| iss                   | The sReadSSI used for signing (the JWT Issuer)                                                                                                                                                                                         |
| iat                   | Issued At Time claim                                                                                                                                                                                                                   |
| nbf                   | Not Before Time                                                                                                                                                                                                                        |
| exp                   | Expiration Time                                                                                                                                                                                                                        |

### 1.2.1. Threat model

* Improperly signed JWT Token
* Stolen SeedSSI used to create valid JWT Tokens
* Stolen JWT Token 
* Corrupted APIHub 

### 1.2.2.Relevant APIs in OpenDSU SDK

| API              | Description                                                                                                                        | API family    |
|:-----------------|:-----------------------------------------------------------------------------------------------------------------------------------|:--------------|
| createJWT        | createJWT(issuer:SeedSSI, scope:string,credentials:array, options,  callback) **Returns:** a valid JWT token signed by the SeedSSI | crypto        |
| verifyJWT        | verifyJWT(JWT, rootOfTrustVerificationStrategy, callback) **Returns:** calls the callback with success (true) or error             | crypto        |
| createCredential | createCredential(issuer:SeedSSI,credentialSubject, callback)                                                                       |               |
| createAuthToken  | createAuthToken(seedSSI, scope, credential, callback)                                                                              |               |
| verifyAuthToken  | verifyAuthToken (jwt,listOfIssuers, callback)                                                                                      |               |


| KeySSIs           |        |
|:------------------|:-------|
| Authorisation SSI | Signed |
| User SSI          |        |

| Tokens               |                                                                       |
|:---------------------|:----------------------------------------------------------------------|
| User Credentials     | Signed by Authorisation SSI  Binds User SSI (contains User sRead SSI) |
| Authentication Token | Signed by User SSI  Binds User Credentials                            |


# 2. Type of Wallets

## 2.1. SeedSSI Wallet

## 2.2. SecretSSI Wallets







**Contributors**

1. <p style='text-align: justify;'><a href="www.axiologic.net">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="www.opendsu.com">www.opendsu.com</a> site.

2. <p style='text-align: justify;'><a href="www.pharmaledger.eu">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.

3. <a href="www.privatesky.xyz">PrivateSky Research Project</a>: MIT licensed content accordingly with the contracts. https://profs.info.uaic.ro/~ads/PrivateSky/

# Annex 1. Contributors

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
