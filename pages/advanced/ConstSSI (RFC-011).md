---
title: ConstSSI 
layout: home
parent: Open DSU Advanced
nav_order: 2
---

ConstSSI (RFC-011)

Abstract

One of OpenDSU’s objectives is to provide a solution to the famous trilemma regarding naming systems known as Zooko’s Triangle. It is challenging to design a naming system with human-meaningful identifiers that are also secure and decentralized. The trilemma tells us you can only choose two. But we think there is a workaround: Human Meaningful Identifiers could be resolved to cryptographically safe identifiers using a key derivation function.[1] Obtained identifiers would be secure and self-certifying, as well as provide the required levels of decentralization and security.

Figure 1: Zooko’s Triangle

The solution that OpenDSU proposes is a special KeySSI called ConstSSI that is resolved to an immutable DSU. Immutable means that the item can not be updated after being assigned its initial value. This immutable DSU can contain links to one or multiple KeySSIs under the owner’s control (such as the seedSSI).

Compared to randomly generated identifiers, the ConstSSI is based on human meaningful strings, which allows people to remember it easily and improve user experience. By redirecting the ConstSSI to properly secured keys, decentralization and security properties can be achieved. Security can still be a risk, but there is a set of best practices and methods that help mitigate most security issues without sacrificing the decentralization (self-sovereignty) or the human meaningfulness of the identifier.

Figure 2: ConstSSI family
1. ConstSSI subtypes derivation with examples

A constSSI is built from the hash of readable strings embedded in other keySSI such as ArraySSI, PasswordSSI, and WalletSSI.

SubType
	

Description

const
	

Owning a ConstSSI provides read access to the immutable DSU anchored by the ConstSSI. However, the DSU is encrypted, and you need the ConstSSI in order to read it.

See the Security Considerations to understand the security aspects.

Example:

ssi:const:domain:string::v0

cza
	

Owning a czaSSI provides no access. Having a czaSSI indicates that a ConstSSI exists and has only a version (it redirects to an immutable DSU).

Example:

ssi:sza:domain:hash::v0.
2. Type-specific and control substrings

The “control key” part of the ConstSSI is always empty, which means the anchor can not be updated (it is immutable, constant value, read-only).

Type
	

Type Specific substring
	

Control substring

const
	

String
	

empty

cza
	

	

Hash of the public key
3. Specific functions for ConstSSI

(Common functions for all keySSI types are available here.)
Function constSSI.initialize(dlDomain, constArray, vn, hint)

Description: Initialize ConstSSI with your own parameters.

Name
	

Type
	

Value
	

Description

dlDomain
	

string
	

*required
	

The blockchain domain you want to use.

constArray
	

string
	

*required
	

An array with keys that will be used in the initialization to get the final specific string of your ArraySSI.

vn

(optional)
	

string
	

	

The version number of the SeedSSI you want to use.

Default value: “v0”.

hint

(optional)
	

string
	

	

Optional information for the keySSI resolver.

Default value: undefine.
Function constSSI.derive()

Description: Derive your constSSI to obtain a czaSSI (ConstZeroAccessSSI) that is used to anchor the DSU in the ledger. The czaSSI provides no access to the DSU.

Returns

Name
	

Description

czaSSI object
	

A czaSSI object is returned.
Function constSSI.getEncryptionKey()

Description: Get the encryption key associated with the ConstSSI.

Returns

Name
	

Description

String
	

The encryption key
Function const.getTypeName()

Description: 

Returns

Name
	

Description

SSITypes.CONST_SSI
	

A string representing the type of the SSI.
Function constSSI.createAnchorValue(brickMapHash, previousAnchorValue, callback)

Description:

Name
	

Type
	

Value
	

Description

brickMapHash
	

	

	

previousAnchorValue
	

	

	

callback
	

function
	

	

Callback parameters

Name
	

Type
	

Response example

err
	

Error object
	

anchorValue
	

	

Description: Contains a message and the error. / The anchor value that was just created.
4. Cryptographic algorithms used by ConstSSIs (advanced)

Algorithms used for cryptographic operations can differ according to the type of keySSI that is used and its version number. Most of the functions use the nodejs crypto library.

Type
	

Operations
	

Algorithms

Default
	

hash
	

Create a hash of the data using the sha256 algorithm.

	

keyDerivation
	

Generate an aes-256-gcm compatible key using a password (the const), salt, a number of iterations and the sha26 algorithm as parameters for the pbkdf2Sync function.

	

encryptionKeyGeneration
	

Generate a random encryption key compatible with the aes-256-gcm algorithm.

	

encryption
	

Encrypt data using a symmetric key and the aes-256-gcm algorithm.

	

decryption
	

Decrypt data using a symmetric key and the aes-256-gcm algorithm.

	

encoding
	

Base58 encoding.

	

decoding
	

Base58 decoding.

	

keyPairGenerator
	

Use an elliptic curve ‘secp256k1’ to generate a key pair (public/private key).

