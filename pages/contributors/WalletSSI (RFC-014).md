---
title: WalletSSI 
layout: home
parent: OpenDSU Contributors
nav_order: 3
---

WalletSSI (RFC-014)

Overview

The vision we are working on is getting bigger and, as time goes on, we improve it and promote it. This involves a change in the Internet and the idea of a web browser, or rather a change in a concept that arises, where instead of browsing the sites and interacting with different servers, there is a synergy between a browser and a wallet so that the user can use different functionalities or applications in a Self-Sovereign way. There is a way in which, from a browser, we can explore various self-sovereign applications, but make sure they do not start extracting data and sending it to servers or start spying or profiling users and so on.

Currently, we have the technology to build SSApps and create this browser expansion. We mention browsers because we use certain technologies when we embed these SSApps into Wallets. The code can be generalized with other technologies, and so can the implementation. The important thing is that the new browser, capable of running these SSApps, must behave like a wallet, it must take care of personal keys and it must be able to mediate the user’s interaction with cryptography. It must also ensure a high level of key management quality.
Abstract

Wallets can be used to store different kinds of KeySSIs and personal user data. WalletSSIs use the same principles as ArraySSIs, but are used to identify and manage wallets. It is expected to have the credentials necessary to access the wallet in the array (like a username and password), but we could theoretically add more credentials, such as an answer to a question.

Figure 1: ConstSSI

Similar to ArraySSI and PasswordSSI, WalletSSI can be used to derive a ConstSSI, which provides access to a DSU.

SubType
	

Description

wallet
	

A WalletSSI is basically an ArraySSI that is used for wallet identification.

Example:

 ssi:array:domain:encodedArray::v0
1. Type-specific and control substring

The identifier contains the subtype and the domain. That is very important for finding the correct brick storage and anchoring services associated with the keySSI and the DSU. After these two attributes, we have the type-specific and the control substring. The table below presents the content of these attributes.

Type
	

Type Specific substring
	

Control substring

wallet
	

encoded(KDF(arrayOfCredentials))
	

none
2. Specific functions for WalletSSIs

(Common functions for all KeySSIs are available here)
Function walletSSI.initialize(dlDomain, array, vn, hint)

Description: Initialize a WalletSSI with your own parameters.

Name
	

Type
	

Value
	

Description

dlDomain
	

string
	

*required
	

The blockchain domain wanted to be used.

array
	

string
	

*required
	

The array will be used in the initialization to get the final specific string of your WalletSSI.

vn

(optional)
	

string
	

	

The version number of the SeedSSI you want to use.

Default value: “v0”.

hint

(optional)
	

string
	

	

Optional information for the keySSI resolver.

Default value: undefined.
Function walletSSI.derive()

Description: Derive your WalletSSI and return a constSSI. The constSSI will conserve all parameters from the ArraySSI, except for a control substring that will be added. The specific substring of the ConstSSI will be the same as the one calculated during the initialization of the WalletSSI using the array of inputs. It is then possible to create and load a DSU using the ConstSSI.

Returns

Name
	

Description

constSSI object
	

A constSSI object is returned.
Function walletSSI.getEncryptionKey()

Description: Get the encryption key associated with the WalletSSI.

Returns

Name
	

Description

String
	

The encryption key.
Function walletSSI.getTypeName()

Description: 

Returns

Name
	

Description

SSITypes.WALLET_SSI
	

A string representing the type of the SSI.
Function walletSSI.createAnchorValue(brickMapHash, previousAnchorValue, callback)

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
3. Cryptographic algorithms used by WalletSSIs (advanced)

In this paragraph, we present the algorithms that WalletSSI used. These algorithms can differ according to the type of KeySSI used and its version number. Most of the functions use the NodeJS crypto library.

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

