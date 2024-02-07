---
title: ConstSSI 
layout: home
parent: OpenDSU Advanced
nav_order: 2
---

# ConstSSI (RFC-011)
<!-- TOC -->
* [Abstract](#abstract)
* [1. ConstSSI subtypes derivation with examples](#1-constssi-subtypes-derivation-with-examples)
* [2. Type-specific and control substrings](#2-type-specific-and-control-substrings)
* [3. Specific functions for ConstSSI](#3-specific-functions-for-constssi)
  * [Function constSSI.initialize(dlDomain, constArray, vn, hint)](#function-constssiinitializedldomain-constarray-vn-hint)
  * [Function constSSI.derive()](#function-constssiderive)
  * [Function constSSI.getEncryptionKey()](#function-constssigetencryptionkey)
  * [Function const.getTypeName()](#function-constgettypename)
  * [Function constSSI.createAnchorValue(brickMapHash, previousAnchorValue, callback)](#function-constssicreateanchorvaluebrickmaphash-previousanchorvalue-callback)
* [4. Cryptographic algorithms used by ConstSSIs (advanced)](#4-cryptographic-algorithms-used-by-constssis-advanced)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->

# Abstract

One of OpenDSU’s objectives is to provide a solution to the famous trilemma regarding naming systems known as Zooko’s Triangle. It is challenging to design a naming system with human-meaningful identifiers that are also secure and decentralized. The trilemma tells us you can only choose two. But we think there is a workaround: Human Meaningful Identifiers could be resolved to cryptographically safe identifiers using a key derivation function.[1] Obtained identifiers would be secure and self-certifying, as well as provide the required levels of decentralization and security.


<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vTnpgVskryw051S4iIvfwSX9zwKCbSfWZB0f031XLQmIo1vZal1r_yJaAqZXM4HDi8_eufDaxW5ZwAf/pub?w=567&h=444" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 1: Zooko’s Triangle</b></p>
</div>

The solution that OpenDSU proposes is a special KeySSI called ConstSSI that is resolved to an immutable DSU. Immutable means that the item can not be updated after being assigned its initial value. This immutable DSU can contain links to one or multiple KeySSIs under the owner’s control (such as the seedSSI).

Compared to randomly generated identifiers, the ConstSSI is based on human meaningful strings, which allows people to remember it easily and improve user experience. By redirecting the ConstSSI to properly secured keys, decentralization and security properties can be achieved. Security can still be a risk, but there is a set of best practices and methods that help mitigate most security issues without sacrificing the decentralization (self-sovereignty) or the human meaningfulness of the identifier.

<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vQfFDh0T6ESi9Hb-P6AWtQSFmhGhJyEohmr6aa5Uj8oeLaV5EgmIItmG91MPSpv7a6r_9FhFW-DqgyX/pub?w=764&h=360" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 2: ConstSSI family </b></p>
</div>

# 1. ConstSSI subtypes derivation with examples

A constSSI is built from the hash of readable strings embedded in other keySSI such as [ArraySSI](https://www.opendsu.org/pages/advanced/ArraySSI%20(RFC-012).html), [PasswordSSI](https://www.opendsu.org/pages/contributors/PasswordSSIs%20(RFC-013).html), and [WalletSSI](https://www.opendsu.org/pages/contributors/WalletSSI%20(RFC-014).html).

| **SubType** | **Description**                                                                                                                                                                                                                                                                 |
|:------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| const       | Owning a ConstSSI provides read access to the immutable DSU anchored by the ConstSSI. However, the DSU is encrypted, and you need the ConstSSI in order to read it. See the Security Considerations to understand the security aspects. Example: _ssi:const:domain:string::v0_  |
| cza         | Owning a czaSSI provides no access. Having a czaSSI indicates that a ConstSSI exists and has only a version (it redirects to an immutable DSU). Example: ssi:sza:domain:hash::v0.                                                                                               |


# 2. Type-specific and control substrings

The “control key” part of the ConstSSI is always empty, which means the anchor can not be updated (it is immutable, constant value, read-only).

| **Type** | **Type Specific substring** | **Control substring**  |
|:---------|:----------------------------|:-----------------------|
| const    | String                      | empty                  |
| cza      |                             | Hash of the public key |


# 3. Specific functions for ConstSSI

(Common functions for all keySSI types are available [here](https://www.opendsu.org/pages/concepts/KeySSI%20(RFC-002).html).)

## Function constSSI.initialize(dlDomain, constArray, vn, hint)

**Description**: Initialize ConstSSI with your own parameters.

| **Name**        | **Type**  | **Value**   | **Description**                                                                                                |
|:----------------|:----------|:------------|:---------------------------------------------------------------------------------------------------------------|
| dlDomain        | string    | *required   | The blockchain domain wanted to be used.                                                                       |
| constArray      | string    | *required   | An array with keys that will be used in the initialization to get the final specific string of your ArraySSI.  |
| vn (optional)   | string    |             | The version number of the SeedSSI you want to use. Default value: “v0”.                                        |
| hint (optional) | string    |             | Optional information for the keySSI resolver. Default value: undefine.                                         



## Function constSSI.derive()

**Description**: Derive your constSSI to obtain a czaSSI (ConstZeroAccessSSI) that is used to anchor the DSU in the ledger. The czaSSI provides no access to the DSU.

**Returns**

| **Name**       | **Description**             |
|:---------------|:----------------------------|
| czaSSI object  | A czaSSI object is returned |


## Function constSSI.getEncryptionKey()

**Description**: Get the encryption key associated with the ConstSSI.

**Returns**

| **Name** | **Description**     |
|:---------|:--------------------|
| String   | The encryption key  |


The encryption key
## Function const.getTypeName()

**Description**: 

**Returns**

| **Name**            | **Description**                            |
|:--------------------|:-------------------------------------------|
| SSITypes.CONST_SSI  | A string representing the type of the SSI. |


## Function constSSI.createAnchorValue(brickMapHash, previousAnchorValue, callback)

**Description**:

| **Name**            | **Type** | **Value** | **Description** |
|:--------------------|:---------|:----------|:----------------|
| brickMapHash        |          |           |                 |
| previousAnchorValue |          |           |                 |
| callback            | function |           |                 |


**Callback parameters**

| **Name**     | **Type**      | **Response** example |
|:-------------|:--------------|:---------------------|
| err          | Error object  |                      |
| anchorValue  |               |                      |

**Description**: Contains a message and the error. / The anchor value that was just created.


# 4. Cryptographic algorithms used by ConstSSIs (advanced)

Algorithms used for cryptographic operations can differ according to the type of keySSI that is used and its version number. Most of the functions use the [nodejs](https://www.google.com/url?q=https://nodejs.org/docs/latest-v12.x/api/crypto.html%23crypto_crypto&sa=D&source=editors&ust=1706607081104078&usg=AOvVaw1DljX3frZ2fzzNiA4otEna) crypto library.


| **Type**    | **Operations**              | **Algorithms**                                                                                                                                                                                                                                                                                                                                                                       |
|:------------|:----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Default     | hash                        | Create a hash of the data using the [sha256](https://www.google.com/url?q=https://xorbin.com/tools/sha256-hash-calculator&sa=D&source=editors&ust=1706607081106307&usg=AOvVaw3Py4Ug4Zo2BwJwoMuDCZ9E) algorithm.                                                                                                                                                                      |
|             | keyDerivation               | Generate an aes-256-gcm compatible key using a password (the const), salt, a number of iterations and the sha26 algorithm as parameters for the [pbkdf2Sync](https://www.google.com/url?q=https://nodejs.org/api/crypto.html%23crypto_crypto_pbkdf2sync_password_salt_iterations_keylen_digest&sa=D&source=editors&ust=1706607081107431&usg=AOvVaw1Fhi1NC01iqeKy5GrrgBxW) function.  |
|             | encryptionKeyGeneration     | Generate a random encryption key compatible with the [aes-256-gcm](https://en.wikipedia.org/wiki/Galois/Counter_Mode) algorithm.                                                                                                                                                                                                                                                     |
|             | encryption                  | Encrypt data using a symmetric key and the [aes-256-gcm](https://en.wikipedia.org/wiki/Galois/Counter_Mode) algorithm.                                                                                                                                                                                                                                                               |
|             | decryption                  | Decrypt data using a symmetric key and the [aes-256-gcm](https://en.wikipedia.org/wiki/Galois/Counter_Mode) algorithm.                                                                                                                                                                                                                                                               |
|             | encoding                    | [Base58](https://learnmeabitcoin.com/technical/base58) encoding.                                                                                                                                                                                                                                                                                                                     |
|             | decoding                    | [Base58](https://learnmeabitcoin.com/technical/base58) decoding.                                                                                                                                                                                                                                                                                                                     |
|             | keyPairGenerator            | Use an elliptic curve ‘[secp256k1](https://www.google.com/url?q=https://wiki.trezor.io/Secp256k1&sa=D&source=editors&ust=1706527954017796&usg=AOvVaw2mte0BWYD7g5QNei4oq3nb)’ to generate a key pair (public/private key).                                                                                                                                                            |


# Annex 1. Contributors

| **Current Editors**                 | **Email**                                                   |
|:------------------------------------|:------------------------------------------------------------|
| Sînică Alboaie                      | sinica.alboaie@axiologic.net                                |
| Cosmin Ursache                      | cosmin@axiologic.net                                        |
| Teodor Lupu                         | teodor@axiologic.net                                        |
| Andi-Gabriel Țan                    | andi@axiologic.net                                          |
| **Contributors Axiologic Research** | **Email**                                                   |
| Adrian Ganga                        | adrian@axiologic.net                                        |
| Andi-Gabriel Țan                    | andi@axiologic.net                                          |
| Cosmin Ursache                      | cosmin@axiologic.net                                        |
| Daniel Sava                         | daniel@axiologic.net                                        |
| Nicoleta Mihalache                  | nicoleta@axiologic.net                                      |
| Teodor Lupu                         | teodor@axiologic.net                                        |
| Valentin Gérard                     | valentin@axiologic.net                                      |
| **PrivateSky Contributors**         | **Email**                                                   |
| Alex Sofronie                       | alsofronie@gmail.com (DPO)                                  |
| Cosmin Ursache                      | cos.ursache@gmail.com (UAIC)                                |
| Daniel Sava                         | sava.dumitru.daniel@gmail.com (HVS, AQS)                    |
| Daniel Visoiu                       | visoiu.daniel.g@gmail.com (SGiant)                          |
| Lenuța Alboaie                      | lalboaie@gmail.com (UAIC)                                   |
| Rafael Mastaleru                    | rafael@rms.ro (RMS)                                         |
| Sînică Alboaie                      | salboaie@gmail.com (UAIC)                                   |
| Vlad Balmos                         | vlad.balmos@gmail.com (Code932)                             |
| **PharmaLedger Contributors**       | **Email**                                                   |
| Ana Balan                           | bam@rms.ro (RMS)                                            |
| Bogdan Mastahac                     | mab@rms.ro (RMS)                                            |
| Cosmin Ursache                      | cos@rms.ro (RMS)                                            |
| Rafael Mastaleru                    | raf@rms.ro (RMS)                                            |


[1] Key Derivation Function Definition: https://en.wikipedia.org/wiki/Key_derivation_function 