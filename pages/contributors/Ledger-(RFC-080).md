---
title: Ledger 
layout: home
parent: OpenDSU Contributors
nav_order: 21
---


# **Ledger (RFC-080)**

{: .feedback }
A period when the community can review the RFC (comment Docs).


**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)

<!-- TOC -->
* [1. Ledger functions](#1-ledger-functions)
  * [Function initialiseDSULedger(keySSI, constitutionKeySSI)](#function-initialisedsuledgerkeyssi-constitutionkeyssi)
  * [Function initialisePublicDSULedger(blockchainDomain, constitutionKeySSI)](#function-initialisepublicdsuledgerblockchaindomain-constitutionkeyssi)
  * [Function getDSULedger(keySSI)](#function-getdsuledgerkeyssi)
  * [Function getPublicLedger(blockchainDomain)](#function-getpublicledgerblockchaindomain)
  * [Function getDSULedgerAsDb(blockchainDomain)](#function-getdsuledgerasdbblockchaindomain)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->

# **1. Ledger functions**

## Function initialiseDSULedger(keySSI, constitutionKeySSI)

<p style='text-align: justify;'><b>Description</b>: Initialise a ledger that is intended to be resolved from a keySSI; the DSU state gets anchored in the domain of the keySSI.
</p>


| **Name**           | **Type**                                                                                    | **Value**    | **Description**                                                                      |
|:-------------------|:--------------------------------------------------------------------------------------------|:-------------|:-------------------------------------------------------------------------------------|
| keySSI             | <a href="https://www.opendsu.org/pages/concepts/KeySSI%20(RFC-002).html">KeySSI object </a> |              |                                                                                      |
| constitutionKeySSI |                                                                                             |              |                                                                                      |


## Function initialisePublicDSULedger(blockchainDomain, constitutionKeySSI)

<p style='text-align: justify;'><b>Description</b>: Initialise a ledger that is intended to be resolved from a BDNS name.
</p>


| **Name**            | **Type**  | **Value**     | **Description**                                                                       |
|:--------------------|:----------|:--------------|:--------------------------------------------------------------------------------------|
| blockchainDomain    | string    | *required     |                                                                                       |
| constitutionKeySSI  | string    |               |                                                                                       |



## Function getDSULedger(keySSI)

<p style='text-align: justify;'><b>Description</b>: Get a handler to a secret ledger.
</p>


| **Name**            | **Type**  | **Value**     | **Description**                                                                       |
|:--------------------|:----------|:--------------|:--------------------------------------------------------------------------------------|
| keySSI    | string    | *required     |                                                                                       |



## Function getPublicLedger(blockchainDomain)

<p style='text-align: justify;'><b>Description</b>: Get a handler to a public ledger.
</p>


| **Name**            | **Type**  | **Value**     | **Description**                                                                       |
|:--------------------|:----------|:--------------|:--------------------------------------------------------------------------------------|
| blockchainDomain    | string    | *required     |                                                                                       |


	

## Function getDSULedgerAsDb(blockchainDomain)

<p style='text-align: justify;'><b>Description</b>: Put an openDSU interface in front of the ledger.
</p>


| **Name**            | **Type**  | **Value**     | **Description**                                                                       |
|:--------------------|:----------|:--------------|:--------------------------------------------------------------------------------------|
| blockchainDomain    | string    | *required     |                                                                                       |


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



