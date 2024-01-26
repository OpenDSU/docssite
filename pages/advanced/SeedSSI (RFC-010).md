---
title: SeedSSI 
layout: home
parent: Open DSU Advanced
nav_order: 1
---

# SeedSSI (RFC-010)
{: .no_toc }

{: .feedback }
The proposal has been accepted and has an implementation.


**Document Maintainers: Andi Gabriel Tan 2022. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright**
Copyright © 2018-2022 Axiologic Research and Contributors.
This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)


<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}

## Abstract

SeedSSI is the highest key of the SeedSSI family. Seed identifiers are used to create and identify DSUs that are not shared with many people. A good example would be the DSUs that implement digital wallets for users and companies. Owning a SeedSSI allows the user to anchor new versions of the DSU (“write” access).

SReadSSI is the first key that can be derived from the SeedSSI and shared. It grants “read” access to the DSU created with the SeedSSI that it was derived from.

SzaSSI is then derived from the sReadSSI (or two times from the SeedSSI). It provides no access to the DSU but can serve as proof that the DSU (and the seedSSI it was generated from) exists and was anchored (blockchain-based timestamping).

The SeedSSI family is currently the easiest and most used way to generate and interact with [DSU Objects](https://www.opendsu.org/pages/beginners/DSU%20Object%20(RFC-063).html).

<img alt="" align="center" src="" class="imgMain"/>

<p style="text-align:center"> <b>Figures 1 and 2: SeedSSI family derivation(1) and relationship with DSU(2) </b></p>

## 1. SeedSSI’s family subtypes with examples

Here is a summary of the different subtypes present in the SeedSSI family, from the highest to the lowest key. The subtype is accompanied by a short description and an example of the key in the OpenDSU’s ssi format.

|**SubType**                  | **Description**                                |
|:------------------------------------|:-----------------------------------------|
|seed                                 | Owning a SeedSSI provides total control over the generated DSU and allows users to anchor new versions of the DSU (to modify the DSU). Example of SeedSSI: **ssi:seed:domain:private_key_base64::v0**                                           |
|sread                                | DSUs generated with SeedSSIs are encrypted using the derived sReadSSI key. Owning a sReadSSI provides read access by allowing the owner to decrypt the anchored DSU. Example of SReadSSI: **ssi:sread:domain:hash_private_key_base64:public_key:v0**                           |
|sza                                  | Owning a SzaSSI provides no access. Having a szaSSI indicates that a KeySSI exists and has a specified number of versions. Example of SzaSSI: **ssi:sza:domain::public_key:v0**                                                    |

<p style="text-align:center"> <b>Table: SeedSSI’s family subtypes </b></p>


## 2. Type-specific and control substrings

The identifier contains the subtype and the domain. This is very important for finding the correct brick storage and anchoring services associated with the keySSI and the DSU it is resolved to. After these two attributes, we have the type-specific and the control substring. The table below presents the content of these attributes.

|**Type**          | **Type Specific substring**                  | **Control substring**                            |
|:------------------------------------|:-----------------------------------------|:----------------------------------------|
|seed                                 | An secp256k1 private key in Base58 (that is used to obtain type specific and control substring by derivation).                                     |empty.                                     |
|sread                                | Hash of the  secp256k1 private key.                                     | The public secp256k1 key.                                     |
|sza                                | empty                                     | The public secp256k1 key.                                     |


The public secp256k1 key.
3. Specific functions for SeedSSI’s family subtypes

(Common functions for all keySSIs are available here.)
3.1. SeedSSI
Function seedSSI.initialize(dlDomain, typeSpecific, control, vn, hint, callback)

Description: Initialize a SeedSSI with your own parameters.

Name
	

Type
	

Value
	

Description

dlDomain
	

string
	

*required
	

The blockchain domain wanted to be used.

typeSpecific

(optional)
	

string
	

	

TypeSpecific is the string that should provide enough security. For SeedSSI, as we can see in section 2, it is represented by a version of the personal private key encoded in Base58.

If left empty, the function will generate a private key.

control

(optional)
	

string
	

	

Should be empty for the SeedSSI.

Default value: undefined.

Vn

(optional)
	

string
	

	

The version number of the SeedSSI you want to use.

Default value: “v0”.

Hint

(optional)
	

string
	

	

Optional information for the keySSI resolver.

Default value: undefined.

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

Error object
	

keySSI
	

keySSI Object
	

Description: Contains a message and the error. / The template keySSI object of the chosen type that was created.
Function seedSSI.derive()

Description: Derive your seedSSI and return a sReadSSI. In the derivation process, the dlDomain is conserved. The private key of the seedSSI is hashed (sha256) to create the type-specific substring, and the public key of the seedSSI is hashed (sha256) to create the control substring. Vn and Hint are conserved.

Returns

Name
	

Description

sReadSSI object
	

A sReadSSI object is returned.
Function seedSSI.getPrivateKey(format)

Description: Get the private key associated with your SeedSSI. To obtain it, we decode the specific substring in Base58.

Name
	

Type
	

Value
	

Description

format

(optional)
	

String
	

	

You can use the parameter “pem” to specify that you want to get the private key in the pem (private enhanced mail) format.

Returns

Name
	

Description

	

The private key
Function seedSSI.getPublicKey(format)

Description: Derive your seedSSI and return a sReadSSI.

Name
	

Type
	

Value
	

Description

format

	

String
	

	

The parameter can be set to “pem” to specify that you want to get the public key in the pem (private enhanced mail) format.

Alternatively, it can be used “raw” to specify that you want the raw secp256k1 public key.

By default, the pem format is returned.

Returns

Name
	

Description

	

The private key
Function seedSSI.getEncryptionKey()

Description: Get the encryption key associated with the keySSI. For SeedSSI, the encryption key is the same as the sReadSSI key.

Returns

Name
	

Description

	

The encryption key.
Function seedSSI.getKeyPair()

Description: 

Returns

Name
	

Description

keyPair
	

A pair with the private key and the public key.
Function seedSSI.sign(dataToSign, callback)

Description: 

Name
	

Type
	

Value
	

Description

dataToSign
	

	

*required
	

callback
	

function
	

	

Callback parameters

Name
	

Type
	

Response example

err
	

Error object
	

signature
	

	

Description: Contains a message and the error.

Returns

Name
	

Description

keyPair
	

A pair with the private key and the public key.
Function seedSSI.getTypeName()

Description: 

Returns

Name
	

Description

SSITypes.SEED_SSI
	

A string representing the type of the SSI.
3.2. SReadSSI
Function sReadSSI.initialize(dlDomain, vn, hint, callback)

Description: Initialize the sReadSSI with desired parameters.

Name
	

Type
	

Value
	

Description

dlDomain
	

String
	

*required
	

The blockchain domain wanted to be used.

Vn

(optional)
	

String
	

	

The version number of the SeedSSI you want to use.

Default value: “v0”.

Hint

(optional)
	

String
	

	

Optional information for the keySSI resolver.

Default value: undefined.

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

Error object
	

keySSI
	

keySSI Object
	

Description: Contains a message and the error. / The template keySSI object of the chosen type that was created.
Function sReadSSI.derive()

Description: Derive your sReadSSI to obtain a szaSSI. In the derivation process, the dlDomain is conserved. The type-specific substring is set to empty. The control substring, Vn and Hint are conserved.

Returns

Name
	

Description

szaSSI object
	

A szaSSI object is returned.
Function sReadSSI.getEncryptionKey()

Description: Get the encryption key associated with the keySSI. To obtain sReadSSI’s encryption key, we decode its control substring in Base58.

Returns

Name
	

Description

String
	

The encryption key.
Function sReadSSI.getTypeName()

Description: 

Returns

Name
	

Description

SSITypes.SREAD_SSI
	

A string representing the type of the SSI.
Function sReadSSI.getPublicKey(options)

Description: 

Name
	

Type
	

Value
	

Description

options
	

	

	

Returns

Name
	

Description

	

3.3. SzaSSI
Function szaSSI.initialize(dlDomain, hpk, vn, hint)

Description: Initialize the SzaSSI and load it with the desired parameters.

Name
	

Type
	

Value
	

Description

dlDomain
	

String
	

*required
	

The blockchain domain wanted to be used.

hpk

(optional)
	

String
	

	

The hash (sha256) of a public key obtained from the seedSSI keyPair.

Vn

(optional)
	

String
	

	

The version number of the SeedSSI you want to use.

Default value: “v0”.

Hint

(optional)
	

String
	

	

Optional information for the keySSI resolver.

Default value: undefined.
Function szaSSI.getTypeName()

Description: 

Returns

Name
	

Description

SSITypes.SZERO_ACCESS_SSI
	

A string representing the type of the SSI.
Function szaSSI.getPublicKey(options)

Description: 

Name
	

Type
	

Value
	

Description

options
	

	

	

Returns

Name
	

Description

	

4. Cryptographic algorithms used by SeedSSIs (advanced)

In this chapter, we present the algorithms that the SeedSSI and its derivations use to perform cryptographic operations. These algorithms can differ according to the type of KeySSI used and its version number. Most of the functions use the NodeJS crypto library.

Type
	

Operations
	

Algorithms

Default
	

hash
	

Create a hash of the data using the sha256 algorithm.

	

encryptionKeyGeneration
	

Generate a random encryption key compatible with the aes-256-gcm algorithm.

	

encryption
	

Encrypt data using a symmetric key and aes-256-gcm algorithm.

	

decryption
	

Decrypt data using a symmetric key and the aes-256-gcm algorithm.

	

encoding
	

Base58 encoding.

	

decoding
	

Base58 decoding.

	

keyPairGenerato
	

Use an elliptic curve ‘secp256k1’ to generate a key pair (public/private key).

Seed

v0
	

keyPairGenerator
	

Use an elliptic curve ‘secp256k1’ to generate a key pair (public/private key).

	

signature
	

Use the SeedSSI private key, the sha256 algorithm, and the createSign function from the NodeJS crypto library to create a signature.

	

signature verification
	

Use the SeedSSI public key, the sha256 algorithm, to verify the signature.

	

derivePublicKey
	

Derive the public key from the SeedSSI’s private key either in pem or raw format using the secp256k1 elliptic curve.

sRead

v0
	

verify
	

No function sReadSSI.getPublicKey, so it will not work.

