---
title: HashLinkSSI, SignedHashLinkSSI 
layout: home
parent: OpenDSU Contributors
nav_order: 4
---


# **HashLinkSSI, SignedHashLinkSSI**

{: .feedback }
A period when the community can review the RFC (comment Docs).


**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)



# Abstract
<p style='text-align: justify;'>Bricks’ content is encrypted using the encryption key of an external secret KeySSI, such as the SReadSSI. The hash that is returned is used to create a HashLinkSSI. The owners of the DSU (i.e. owning a SeedSSI) or other users that got access to a derived SReadSSI can find and decrypt the bricks.
</p>

<div style="text-align:center;">
    <img alt="" src="" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 1: SSIs that do not need anchoring and resolve to immutable DSUs</b></p>
</div>


# 1. HashLinkSSI description with examples

| **Type** | **Purpose and description**                                                                                                        |
|:---------|:-----------------------------------------------------------------------------------------------------------------------------------|
| hl       | Owning a HashLinkSSI provides no access unless accompanied by an “external secret”. <br/>  Example: <br/> ssi:hl:domain:hash::v0.  |


# 2. Specific parameters for HashLinkSSI subtypes

| **Type** | **Type Specific Identifier**  | **Hash function** | **Control Key** | **Encryption**           | **Hint description**                 |
|:---------|:------------------------------|:------------------|:----------------|:-------------------------|:-------------------------------------|
| hl       | Brick hash                    | sha256            | empty           | with AES: external key.  | IP of your favorite  brick storage.  |

<p style="text-align:center"> <b>Table 1: HashLinkSSIs algorithms</b></p>


# 3. HashLinkSSI family-specific functions

## Function HashLinkSSI.initialize(dlDomain, array, vn, hint)
**Description**: Initialize a WalletSSI with your own parameters.


| **Name**         | **Type**  | **Value**  | **Description**                                                                                     |
|:-----------------|:----------|:-----------|:----------------------------------------------------------------------------------------------------|
| dlDomain         | string    | *required  | The blockchain domain wanted to be used.                                                            |
| array            | string    | *required  | The array will be used in the initialization to get the final specific string of your HashLinkSSI.  |
| vn (optional)    | string    |            | The version number of the SeedSSI you want to use.  <br/> Default value: “v0”.                      |
| hint (optional)  | string    |            | Optional information for the keySSI resolver. <br/> Default value: undefined.                       |


## Function HashLinkSSI.derive()

<p style='text-align: justify;'><b>Description</b>: Exists in mixings but does not have a valid semantic for Hash Link SSIs.
</p>

## Function HashLinkSSI.getTypeName()

**Description**: Returns the type of the SSI.

**Returns**

| **Name**               | **Description**                            |
|:-----------------------|:-------------------------------------------|
| SSITypes.HASH_LINK_SSI | A string representing the type of the SSI. |


## Function HashLinkSSI.getHash()

**Description**: Returns the actual hash of the brick.



**Contributors**


1. <p style='text-align: justify;'><a href="www.axiologic.net">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="www.opendsu.com">www.opendsu.com</a> site.

2. <p style='text-align: justify;'><a href="www.pharmaledger.eu">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.


3. <a href="www.privatesky.xyz">PrivateSky Research Project</a>: MIT licensed content accordingly with the contracts. https://profs.info.uaic.ro/~ads/PrivateSky/


# Annex 1. Contributors

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


