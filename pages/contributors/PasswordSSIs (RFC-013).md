---
title: PasswordSSIs 
layout: home
parent: OpenDSU Contributors
nav_order: 2
---

PasswordSSIs (RFC-013)

Abstract

In many cases, OpenDSU is required to seamlessly integrate with systems with user experience constraints for easy-to-remember identifiers (Passwords). Such constraints improve the user experience by having easy-to-remember identifiers, but this restricts the usage of identities/identifiers that are robust to brute-force attacks. ConstSSIs can be constructed from passwords using Key Derivation Functions (KDFs) for such cases. To reduce chances of collisions between multiple users with the same password, a good practice is to add an identifier as an input to the KDF to represent some unique information from the environment (for example usernames or user identities, email address of the user, digitized facial image from the camera, timestamp, IP Address, MAC Address etc.). Another factor that can further increase security is the complexity of the key derivation function.

Figure 1: ConstSSI

The PasswordSSI concept is introduced as an intermediary between password, context, KDF difficulty and the ConstSSI. The PasswordSSI is used to derive the ConstSSI when provided with Context, Password and KDF Difficulty as input.

SubType
	

Description

pass
	

A passwordSSI is built using a password and its context that are passed to a key derivation function to obtain a specific identifier.

Example:

 ssi:array:domain:derivedPassword::v0
1. Type-specific and control substring

The identifier contains the subtype and the domain. That is very important in order to find the correct brick storage and anchoring services associated with the keySSI and the DSU. After these two attributes, we have the type-specific and the control substring. The table below presents the content of these attributes.

Type
	

Type Specific substring
	

Control substring

wallet
	

KDF (context+password)
	

none
2. Specific functions for PasswordSSI

(Common functions for all KeySSIs are available here)
Function passwordSSI.initialize(dlDomain, context, password, kdfOptions, vn , hint)

Description:   Initialize a PasswordSSI with your parameters.

Name
	

Type
	

Value
	

Description

dlDomain
	

string
	

*required
	

The blockchain domain wanted to be used.

context
	

string
	

*required
	

The context string that will be concatenated to the password to add more security.

password
	

string
	

*required
	

The password that you want to use.

kdfOptions
	

int
	

	

The number of derivation iterations.

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
Function passwordSSI.derive()

Description: Derive your passwordSSI and return a constSSI. The constSSI will conserve all parameters from the ArraySSI except for a control substring that will be added. The specific substring of the ConstSSI will be the same as the one calculated during the initialization of the WalletSSI using the array of inputs. It is then possible to create and load the DSU using the ConstSSI.

Returns

Name
	

Description

constSSI object
	

A constSSI object is returned.
Function passwordSSI.getEncryptionKey()

Description: Get the encryption key associated with the passwordSSI.

Returns

Name
	

Description

String
	

The encryption key.
3. Cryptographic algorithms used by PasswordSSIs (advanced)

In this paragraph, we present the algorithms that PasswordSSI uses. These algorithms can be different, depending on the type of KeySSI that is used and its version number. Most of the functions use the NodeJS crypto library.

Type
	

Operations
	

Algorithms

Default
	

keyDerivation
	

crypto.deriveKey('aes-256-gcm', password, iterations).

encryptionKeyGeneration
	

Generate a random encryption key compatible with the aes-256-gcm algorithm.

encoding
	

Base58 encoding.

decoding
	

Base58 decoding.

