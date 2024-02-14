---
title: Verifiable Credentials 
layout: home
parent: OpenDSU Advanced
nav_order: 13
---


# **Verifiable Credentials (RFC-081)**

{: .feedback }
A period when the community can review the RFC (comment Docs).


**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)

<!-- TOC -->
* [1. Verifiable Credentials functions](#1-verifiable-credentials-functions)
  * [Function issueCredential(verificationServiceName)](#function-issuecredentialverificationservicename)
  * [Function createPresentation(verificationServiceName)](#function-createpresentationverificationservicename)
  * [Function verifyPresentation(allowedImplementationNames, environmentData, presentation)](#function-verifypresentationallowedimplementationnames-environmentdata-presentation)
  * [Function registerVerifiableCredentialService(verificationServiceName, implementation)](#function-registerverifiablecredentialserviceverificationservicename-implementation)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->


# **1. Verifiable Credentials functions**

## Function issueCredential(verificationServiceName)

<p style='text-align: justify;'><b>Description</b>:  Issue a credential that will be verifiable on the selected verification service.
</p>

| **Name**                 | **Type** | **Value** | **Description** |
|:-------------------------|:---------|:----------|:----------------|
| verificationServiceName  |          |           |                 |


## Function createPresentation(verificationServiceName)

<p style='text-align: justify;'><b>Description</b>: Create a presentation (verifiable credential and proofs)  with the selected verification service. 
</p>


| **Name**                 | **Type** | **Value** | **Description** |
|:-------------------------|:---------|:----------|:----------------|
| verificationServiceName  |          |           |                 |


## Function verifyPresentation(allowedImplementationNames, environmentData, presentation)

<p style='text-align: justify;'><b>Description</b>: Verify the presentation (verifiable credential and proofs) using the methods specified in the allowed implementations.
</p>


| **Name**                   | **Type**                     | **Value** | **Description** |
|:---------------------------|:-----------------------------|:----------|:----------------|
| allowedImplementationNames | Array of implementationNames |           |                 |
| environmentData            | Array                        |           |                 |
| presentation               |                              |           |                 |



## Function registerVerifiableCredentialService(verificationServiceName, implementation)

<p style='text-align: justify;'><b>Description</b>: Register a new verifiable credential service specifying the implementation that should be used.
</p>


| **Name**                    | **Type**                      | **Value**  | **Description**  |
|:----------------------------|:------------------------------|:-----------|:-----------------|
| verificationServiceName     |                               |            |
| implementation              |                               |            |                  |




**Contributors**

1. <p style='text-align: justify;'><a href="https://www.axiologic.net/">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="https://www.opendsu.org/">www.opendsu.org</a> site.

2. <p style='text-align: justify;'><a href="https://pharmaledger.org/">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.

3. PrivateSky Research Project: MIT licensed content accordingly with the contracts. 
<a href="https://profs.info.uaic.ro/~ads/PrivateSky/"> https://profs.info.uaic.ro/~ads/PrivateSky/</a>




# **Annex 1. Contributors**

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


	

	

	

