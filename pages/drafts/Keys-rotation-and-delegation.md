---
title: Keys rotation and delegation
layout: home
parent: OpenDSU Drafts
nav_order: 9
---


# **Keys rotation and delegation (RFC-049)**
{: .no_toc }

{: .draft }
A period when the community can review the RFC (comment Docs).

**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.
This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)

<!-- TOC -->
* [Keys rotation and delegation](#keys-rotation-and-delegation)
* [Abstract](#abstract)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->

# **Abstract**

To minimize data losses caused by weak cryptography or key theft and loss, it is recommended to periodically rotate (replace) cryptographic keys. The key rotation is especially recommended when the same key is reused for many operations. In such a case, a problematic key might do a lot of harm.
The association between identities and cryptographic keys is very powerful but seems to contradict the key rotations' best practices. Fortunately, the programming model proposed by OpenDSU will encourage the generation of unique and random keys for each case, reducing the need to do key rotations.
However, there are use cases when it makes sense to use the same key for a period of time to do a number of operations and then rotate it to limit the exposure to a specific number of items or a specific period of time. This rotation could be done by regenerating a new random key or by deriving the temporary key from a master key that is never exposed to a hostile environment. OpenDSU supports such practices, especially using ConstSSIs to work as fixed identities and MasterKeySSIs for key derivation and access delegation.
It makes sense to also mention that Access Revocation techniques could be used as complementary security methods during key rotation.
In time, we believe that new types of KeySSIs will be proposed to address problems like key rotation and access delegation, due to OpenDSU being designed as an open environment for innovations that do not break compatibility with the existing systems.



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


