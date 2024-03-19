---
title: Profiles and Personas as Decentralised Identities
layout: home
parent: OpenDSU Drafts
nav_order: 8
---

# **Profiles and Personas as Decentralised Identities (RFC-043)**
{: .no_toc }

{: .draft }
A period when the community can review the RFC (comment Docs).

**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.
This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)

<!-- TOC -->
* [Profiles and Personas as Decentralised Identities](#profiles-and-personas-as-decentralised-identities)
* [Abstract](#abstract)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->

# **Abstract**
<p style='text-align: justify;'>OpenDSU aims to be neutral regarding emerging and  existing standards in the identity management and cryptographic primitives standardized by the DTEs in upper layers (L2-L4). However, since DSUs can easily function as wallets, agents, or DKMs, we recommend the usage of a special DSU Type that we call DSU Profiles (DSUProfile). To maximize the interoperability of the DTEs, we plan to standardize the DSUProfiles and gradually add support to well-known and widely adopted identity systems. The DSU Profile aims to function as a portable wallet for the user and the company that aims to be able to store private keys and to offer control over its identities.
</p>

<p style='text-align: justify;'>The DSU Profile will also have an associated SSApp and therefore will be able to offer a standardized user interface in all the edge clients that are compatible with OpenDSU. 
</p>

<p style='text-align: justify;'>The DSU Profile will also offer DSU APIs and user interface for multiple purposes:
</p>

* Produce digital signatures for documents and messages;
* Issue credentials (VCs);
* Import x.509 certificates (private keys);
* Import private keys from external W3C DID wallets;
* Generate and manage multiple identities of the user;
* Enable interactions with DTE governance bodies (enrollment, multiple types of verifications);
* Enable employee management for companies (enrollment, give or revoke access).

<p style='text-align: justify;'>Gradually, the DSU Profile will contain other functionalities (e.g. support for other cryptographic primitives) required by the OpenDSU community. A DSU Profile will contain various “personas”: self-sovereign or corporate identities controlled by the user. These personas could come from Accredited Identity Verification Providers (e.g. verified companies) or from various Online Identities Verification Providers.
</p>




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

