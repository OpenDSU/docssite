---
title: ConstValue 
layout: home
parent: OpenDSU Contributors
nav_order: 6
---

# **ConstValue**

{: .feedback }
A period when the community can review the RFC (comment Docs).


**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)

<!-- TOC -->
* [1. Specifications](#1-specifications)
  * [1.1. JSONMap Specification](#11-jsonmap-specification)
  * [1.2. ValueSSI Specification](#12-valuessi-specification)
* [1.3. ConstValueDSU Behavior](#13-constvaluedsu-behavior)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->

# 1. Specifications

<p style='text-align: justify;'>With the creation of ConstValueSSI, OpenDSU tries to create a deterministic BrickMap for ConstDSUs. Typically, BrickMaps get encrypted using the encryption key of an external KeySSI, such as the SReadSSI or ConstSSI. The encryption is deterministic. However, if someone adds files or mounts DSUs in the ConstDSU, new bricks are required, and they will be encrypted with new random keys. ConstValueSSIs are useful in some corner cases, like when we want to be able to restore data from lost backups. The BrickMap for a ConstValueDSU is stored in the blockchain, therefore it cannot be lost.
</p>

<div style="text-align:center;">
    <img alt="" src="" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 1: The overview of ConstValueSSI & ConstValueDSU</b></p>
</div>


<p style='text-align: justify;'>ConstValueSSI is resolved to a DSU called  “ConstValueDSU”. These DSUs cannot be modified and are stored directly in the blockchain (not in the brick storage).
</p>

<p style='text-align: justify;'>ConstValueSSIs are created starting with a ConstSSI, a BDNS domain for the BrickMap replacement, and the actual content of the BrickMap is represented as a JSON and stored directly in the blockchain as ValueSSIs, replacing the usual HaskLinkSSIs used for Const DSUs.
</p>

**Creation example:**

<p style='text-align: justify;'>createConstValueSSI(aconstSSI, brickMapDomain, JSONMap, callback);
</p>

<p style='text-align: justify;'>The usage of the ConstValueSSI is through resolving ConstSSIs. When ConstSSIs are resolved, it checks if the value is a “hl” or a “vl” and instantiates the DSU using the corresponding factory (ConstDSU factory or a ValueFactory).
</p>

## 1.1. JSONMap Specification

<p style='text-align: justify;'>The JSONMap parameter will contain two sections:</p>

* “files” contain a dictionary where each key is a path, and the value is the content of the file;
* “mounts” contain a dictionary where each key is a path and the value is a KeySSI mounted in that path.


## 1.2. ValueSSI Specification

<p style='text-align: justify;'>ValueSSI as SSI with empty control. As the type field (second field in SSIs), we use the “vl” string. The “specific string” contains the encrypted JSON. The ConstSSI is used for encryption of the “specific string” (in the same way in which the BrickMaps of the ConstDSUs are encrypted).
</p>

# 1.3. ConstValueDSU Behavior

<p style='text-align: justify;'>ConstValueDSU offers readFile API for “files” and all normal APIs for paths found in “mounts”. If the “manifest” file is read, readFile will generate an answer based on the “mounts” section of the JSON.
</p>



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



