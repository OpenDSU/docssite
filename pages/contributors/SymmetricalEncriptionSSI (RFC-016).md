---
title: SymmetricalEncriptionSSI 
layout: home
parent: OpenDSU Contributors
nav_order: 5
---


# **SymmetricalEncriptionSSI**

{: .feedback }
A period when the community can review the RFC (comment Docs).


**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)

<!-- TOC -->
* [Abstract](#abstract)
* [1. SymmetricalEncryptionSSI subtype description with example](#1-symmetricalencryptionssi-subtype-description-with-example)
* [2. Type-specific and control substring](#2-type-specific-and-control-substring)
* [3. SymmetricalEncryptionSSI specific functions](#3-symmetricalencryptionssi-specific-functions)
  * [Function symKey.getEncryptionKey()](#function-symkeygetencryptionkey)
  * [Function symKey.load(subtype, dlDomain, encryptionKey, control, vn, hint)](#function-symkeyloadsubtype-dldomain-encryptionkey-control-vn-hint)
  * [Function symKey.getTypeName()](#function-symkeygettypename)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->




# **Abstract**

<p style='text-align: justify;'>SymmetricalEncryptionSSIs are used to encrypt the data bricks from the <a href="https://www.opendsu.org/pages/concepts/Brick%20Storages%20(RFC-003).html">Brick Storage</a>. Each brick is encrypted using a different SymmetricalEncryptionSSI, in order to make it very difficult for attackers to steal data from <a href="https://www.opendsu.org/pages/concepts/DSU%20Introduction%20(RFC-001).html">DSUs</a>. Special bricks called BrickMaps keep track of each <a href="https://www.opendsu.org/pages/contributors/HashLinkSSI,%20SignedHashLinkSSI%20(RFC-015).html">SymmetricalEncryptionSSI</a> along with its associated HashLinkSSIs. They are used to reconstruct DSUs in the client execution environment.
</p>

# **1. SymmetricalEncryptionSSI subtype description with example**

<p style='text-align: justify;'>It is not possible to derive the SymmetricalEncryptionSSI. There is only one type: ‘se’.</p>

| **Type**  | **Description**                                                                                                                                                                                                                                                                                                                                |
|:----------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| se        | SymmetricalEncryptionSSI is used as a symmetric encryption key to encrypt data from the DSU to the Brick storage when anchoring it to the blockchain. Moreover, it is used to decrypt the bricks from the Brick Storage when reconstructing the DSU in your local execution environment. <br/> Example:  <br/> ssi:se:domain:encryptionKey::v0 |


# **2. Type-specific and control substring**

<p style='text-align: justify;'>The identifier contains the subtype and the domain. That is very important in order to find the correct brick storage and anchoring services associated with the keySSI and the DSU. After these two attributes, we have the type-specific and the control substring. The table below presents the content of these attributes.
</p>

| **Type**  | **Type Specific substring**                                                                                                                        | **Control substring**  |
|:----------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|
| se        | An encryption key (by default it is a symmetric key generated with  [aes-256-gcm](https://en.wikipedia.org/wiki/Galois/Counter_Mode) algorithm).   | empty                  |


# **3. SymmetricalEncryptionSSI specific functions**

## **Function symKey.getEncryptionKey()**

<p style='text-align: justify;'>

<b>Description</b>: Get the encryption key associated with the KeySSI. By default, the encryption key is a symmetric key generated with the <a href="(https://en.wikipedia.org/wiki/Galois/Counter_Mode)">aes-256-gcm</a> algorithm (equal to its specific string).
</p>

**Returns** 

| **Name** | **Description**     |
|:---------|:--------------------|
| String   | The encryption key. |


## **Function symKey.load(subtype, dlDomain, encryptionKey, control, vn, hint)**

<p style='text-align: justify;'><b>Description</b>: Load the SymmetricalEncryptionSSI with your own parameters. If the encryptionKey is empty, it will generate a new one.
</p>


| **Name**         | **Type**     | **Value**    | **Description**                                                                                                                                    |
|:-----------------|:-------------|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|
| subtype          | string       | *required    | The subtype (should be ‘se’).                                                                                                                      |
| dlDomain         | string       | *required    | The blockchain domain wanted to be used.                                                                                                           |
| encryptionKey    | string       | *required    | The encryption key you want to use for symmetric encryption of bricks. <br/> If left empty, the function will generate an encryption key for you.  |
| control          | string       | *required    | Should be empty for the SymmetricalEncryptionSSI.                                                                                                  |
| vn (optional)    | string       |              | The version number of the SymmetricalEncryptionSSI you want to use.<br/> Default value: “v0”.                                                      |
| hint (optional)  | string       |              | Optional information for the SymmetricalEncryptionSSI resolver. <br/> Default value: undefined.                                                    |


**Returns** 

| **Name**  | **Description**                                             |
|:----------|:------------------------------------------------------------|
| string    | Return the abbreviation for SymmetricalEncryptionSSI: ‘se’. |




## **Function symKey.getTypeName()**
**Description**:
**Returns** 


| **Name**                            | **Description**                                              |
|:------------------------------------|:-------------------------------------------------------------|
| SSITypes.SYMMETRICAL_ENCRYPTION_SSI | A string representing the type of the SSI.                   |


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


