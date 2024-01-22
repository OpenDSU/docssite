---
title: KeySSI 
layout: home
parent: Open DSU Advanced
nav_order: 11
---

KeySSI (RFC-068)



Abstract

The “keySSI” API space offers a set of portable functions allowing developers to build KeySSIs. KeysSSIs are Self-Sovereign Identifiers used in the OpenDSU ecosystem. The creation of KeySSIs aims to change how people log into websites/systems and their interaction with them. SSI promotes a transition from the user and their password, through which the user has private keys with which it signs requests, to tokens or various other approaches.

Self Sovereignty assumes that identity control belongs to the company's individual and does not belong to an intermediary. The most common type of identity on the internet is the Federated Identity. For example, whenever a user logs into Facebook, they use a Facebook-controlled identity. Facebook may censor or impersonate the user (i.e. log in on their behalf) because, in fact, it controls the user’s identity. The vision of the SSI is to give this control to the company’s people, which is achievable by using cryptographic systems and signing with private keys.

The main objective of these identifiers is to create and access DSUs where files are encrypted and stored in a secure way. These identifiers can be resolved to obtain all kinds of useful information, such as the encryption key necessary to decrypt the DSU later on.

It is also possible to create different levels of access rights to DSU instances using KeySSI derivation. There are different KeySSI “families” designed for different use cases. You can learn more about it in the complete KeySSI introduction.
1. KeySSI functions

//Load openDSU environment

require("../privatesky/psknode/bundles/openDSU");

//Load openDSU SDK

const opendsu = require("opendsu");

//Load keyssi library

const keyssispace = opendsu.loadApi("keyssi");

//Build the different keySSI instance using build function

const arraySSI = keyssispace.createArraySSI('domain',['openDsu',16],'vn','hint');

const HashLinkSSI = keyssispace.crearzHashLinkSSI( 'dom','specificStr','control','hint','vn');

const seedSSI = keyssispace.createSeedSSI('dom','specificStr','control','hint','vn');

const SymetricalEncryptionSSI =keyssispace.createTemplateSymetricalEncryptionSSI( 'dom',’encryptionKey’,'control','hint','vn');

const templateSSI = keyssispace.createTemplateKeySSI('dom','specificStr','control','hint','vn');

const walletSSI = keyssispace.createTemplateWalletSSI('dom',[cred1,cred2],'hint','vn');

//Or use parse to generate a keySSI from a string

const parsedSeedSSI= keyssispace.parse('ssi:seed:default:specificStr:control:hint:vn');

How to use

This API is only used for building KeySSIs. KeySSI common functions are available here. There is also a set of specific functions available for each different type of KeySSI.
Function createArraySSI(domain, arr, vn, hint)

Description: Build an ArraySSI object. ArraySSIs are created using an array of strings that a user can remember, such as company and employee names. From this ArraySSI, a constSSI will be derived to get a more secure identifier using a derivation function.

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

The blockchain domain of the SSI key you want to build.

arr

(optional)
	

Array of string
	

	

An array of strings that contains information like companyId, serialNumber, or productID.

vn

(optional)
	

string
	

	

Version number of the SSI Type.

hint

(optional)
	

string
	

	

Hint for the KeySSI resolver (optional).

Returns

Name
	

Description

ArraySSI

object
	

An arraySSI instance is created and returned. The main purpose of the ArraySSI is to derive a constSSI.
Function createHashLinkSSI(domain, hash, vn, hint)

Description: Create a HashLinkSSI object. The HashLinkSSI is used to reference each brick of the DSUs. This should be handled manually by OpenDSU.

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

The blockchain domain of the SSI key you want to build.

hash

(optional)
	

string
	

	

Hash of the brick it links to.

vn

(optional)
	

string
	

	

Version number of the SSI Type.

hint

(optional)
	

string
	

	

Hint for the KeySSI resolver.

Returns

Name
	

Description

HashLinkSSI object
	

A HashLinkSSI object is created and returned. HashLinkSSIs are used to reference each brick of the DSUs.
Function createSeedSSI(domain, vn, hint, callback)

Description:  Create and initialise a SeedSSI key. A SeedSSI is used to create and access a DSU. It provides complete control over the DSU. It can be derived to obtain a SReadSSI key that will give read-only access to the DSU that was created with the associated SeedSSI.

Name
	

Type
	

Value
	

Descr iption

domain
	

string
	

*required
	

The blockchain domain of the SSI key you want to build.

vn

(optional)
	

string
	

	

Version number of the SSI Type.

hint

(optional)
	

string
	

	

Hint for the KeySSI resolver (optional).

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

seedSSI
	

seedSSI Object
	

Description: Contains a message and the error./The seedSSI that was just created.

Returns

Name
	

Description

SeedSSI object
	

A SeedSSI instance is created and returned.
Function createSignedHashLinkSSI(domain, hashLink, timestamp, signature, vn, hint)

Description: Create a SignedHashLinkSSI object. The SignedHashLinkSSI is used to reinforce the security of the brick storage.

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

The blockchain domain of the SSI key you want to build.

hashLink
	

string
	

*required
	

HashLinkSSI identifier.

timestamp
	

string
	

*required
	

Date of the signature.

signature
	

Signature object
	

	

Signature object contains both the signature and the public key that is necessary to verify the signature.

vn

(optional)
	

string
	

	

Version number of the SSI Type.

hint

(optional)
	

string
	

	

Hint for the KeySSI resolver.

Returns

Name
	

Description

SignedHashLinkSSI object
	

A SignedHashLinkSSI object is created and returned. HashLinkSSIs are used to reinforce HashlinkSSI objects.
Function createTemplateSeedSSI(domain, specificString, control, vn, hint, callback)

Description: This function is used to create a template version of SeedSSI key. To create a real SeedSSI, you should use the above function – createSeedSSI.

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

The blockchain domain of the SSI key you want to build.

specificString

(optional)
	

string
	

	

Must contain enough random bits for good security.

control

(optional)
	

string
	

	

Used by anchoring services to validate requests for new versions of anchored DSU.

vn

(optional)
	

string
	

	

Version number of the SSI Type.

hint

(optional)
	

string
	

	

Hint for the KeySSI resolver.

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

templateSeedSSI
	

seedSSI Object
	

Description: Contains a message and the error./The templateSeedSSI that was just created.

Returns

Name
	

Description

SeedSSI object
	

A template SeedSSI instance is created and returned.
Function createTemplateKeySSI(ssiType, domain, specificString, control, vn, hint, callback)

Description: Build a template instance of the chosen KeySSI type.

Name
	

Type
	

Value
	

Description

ssiType
	

string
	

*required
	

The type of the SSI key you want to build.

domain
	

string
	

*required
	

The blockchain domain of the SSI key you want to build.

specificString

(optional)
	

string
	

	

Must contain enough random bits for good security.

control

(optional)
	

string
	

	

Used by anchoring services to validate requests for new versions of anchored DSU.

vn

(optional)
	

string
	

	

Version number of the SSI Type.

hint

(optional)
	

string
	

	

Hint for the KeySSI resolver(optional).

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

templateKeySSI
	

KeySSI Object
	

Description: Contains a message and the error./The templateKeySSI that was just created.

Returns

Name
	

Description

KeySSI object
	

A template keySSI object of the chosen type is created and returned.
Function createTemplateSymmetricalEncryptionSSI(domain, encryptionKey, control, vn, hint, callback)

Description: Build a template SymmetricalEncryptionSSI instance that can be used to encrypt and decrypt the bricks.

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

The blockchain domain of the SSI key you want to build.

encryptionKey

(optional)
	

string
	

	

An encryption key is used instead of the traditional specific string.

control

(optional)
	

string
	

	

Used by anchoring services to validate requests for new versions of anchored DSU (The algorithm used for verification is type-specific).

vn

(optional)
	

string
	

	

Version number of the SSI Type.

hint

(optional)
	

string
	

	

Hint for the keySSI resolver(optional).

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

templateSymmetricalEncryptionSSI
	

	

Description: Contains a message and the error./The templateSymmetricalEncryptionSSI that was just created.

Returns

Name
	

Description

SymmetricalEncryptionSSI object
	

A template SymmetricalEncryptionSSI instance is created and returned.
Function createTemplateWalletSSI(domain, arrayWIthCredentials, hint)

Description: Build a WalletSSI object. WalletSSIs are used to identify wallets.

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

The blockchain domain of the SSI key you want to build.

arrayWithCredentials

(optional)
	

Array of string
	

	

An array of credentials.

hint

(optional)
	

string
	

	

Hint for the KeySSI resolver (optional).

Returns

Name
	

Description

WalletSSI object
	

A template WalletSSI instance is created and returned.
Function parse(ssiString, options)

Description: Parse a string obtained from the serialization of a KeySSI (this format: ssi:seed:domain:specificString:control:v0)  to obtain the corresponding KeySSI object.

Name
	

Type
	

Value
	

Description

ssiString
	

String

(using the SSI format)
	

*required
	

A string obtained from the serialization of a KeySSI.

options

(optional)
	

JSON object
	

	

No options by default.

Returns

Name
	

Description

KeySSI object
	

an instance of the corresponding KeySSI is created and returned.
Function createConstSSI(domain, constString, vn, hint)

Description:

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

The blockchain domain of the SSI key you want to build.

constString
	

string
	

	

vn (optional)
	

string
	

	

Version number of the SSI Type.

hint (optional)
	

string
	

	

Hint for the KeySSI resolver.

Returns

Name
	

Description

ConstSSI
	

The ConstSSI object that was created
Function createToken(domain, amountOrSerialNumber, vn, hint, callback)

Description:

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

The blockchain domain of the SSI key you want to build.

amountOrSerialNumber
	

string
	

	

vn

(optional)
	

string
	

	

Version number of the SSI Type.

hint

(optional)
	

string
	

	

Hint for the KeySSI resolver (optional).

callback
	

function
	

	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

token
	

Token Object
	

Description: Contains a message and the error./The token that was just created.

Returns

Name
	

Description

Token Object
	

A Token Object is created and returned.
Function createOwnershipSSI(domain, levelAndToken, vn, hint, callback)

Description:

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

The blockchain domain of the SSI key you want to build.

levelAndToken
	

string
	

	

vn

(optional)
	

string
	

	

Version number of the SSI Type.

hint

(optional)
	

string
	

	

Hint for the KeySSI resolver (optional).

callback
	

function
	

	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

ownershipSSI
	

SSI Object
	

Description: Contains a message and the error./The ownershipSSI that was just created.

Returns

Name
	

Description

Token Object
	

A Token Object is created and returned.
Function createTransferSSI(domain, hashNewPublicKey, timestamp, signatureCurrentOwner, vn, hint, callback)

Description:

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

The blockchain domain of the SSI key you want to build.

hashNewPublicKey
	

string
	

*required
	

timestamp
	

	

*required
	

signatureCurrentOwner
	

	

*required
	

vn

(optional)
	

string
	

	

Version number of the SSI Type.

hint

(optional)
	

string
	

	

Hint for the KeySSI resolver(optional).

callback (optional)
	

function
	

	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

transferSSI
	

	

Description: Contains a message and the error./The transferSSI that was just created.

Returns

Name
	

Description

transferSSI
	

A transferSSI is created and returned.
Function createTemplateTransferSSI(domain, hashNewPublicKey, vn, hint)

Description:

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

The blockchain domain of the SSI key you want to build.

hashNewPublicKey
	

string
	

	

vn (optional)
	

string
	

	

Version number of the SSI Type.

hint (optional)
	

string
	

	

Hint for the KeySSI resolver.

Returns

Name
	

Description

templateTransferSSI
	

The templateTransferSSI that was created.
Function createPublicKeySSI(compatibleFamilyName, publicKey, vn)

Description:

Name
	

Type
	

Value
	

Description

compatibleFamilyName
	

string
	

	

publicKey
	

	

	

vn (optional)
	

string
	

	

Version number of the SSI Type.

Returns

Name
	

Description

publicKeySSI
	

The publicKeySSI that was created.
Function we_createSeedSSI(enclave, domain, vn, hint, callback)

Description:

Name
	

Type
	

Value
	

Description

enclave
	

Enclave Object
	

*required
	

domain
	

string
	

*required
	

The blockchain domain of the SSI key you want to build.

vn

(optional)
	

string
	

	

Version number of the SSI Type.

hint

(optional)
	

string
	

	

Hint for the KeySSI resolver(optional).

callback
	

function
	

	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

seedSSI
	

	

Description: Contains a message and the error./The seedSSI that was just created.

Returns

Name
	

Description

seedSSI
	

A seedSSI is created and returned.
Function we_createConstSSI(enclave, domain, constString, vn, hint, callback)

Description:

Name
	

Type
	

Value
	

Description

enclave
	

Enclave Object
	

*required
	

domain
	

string
	

*required
	

The blockchain domain of the SSI key you want to build.

constString
	

string
	

	

vn

(optional)
	

string
	

	

Version number of the SSI Type.

hint

(optional)
	

string
	

	

Hint for the KeySSI resolver(optional).

callback
	

function
	

	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

constSSI
	

	

Description: Contains a message and the error./The constSSI that was just created.

Returns

Name
	

Description

constSSI
	

A constSSI is created and returned.
Function we_createArraySSI(domain, constString, vn, hint, callback)

Description:

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

The blockchain domain of the SSI key you want to build.

constString
	

string
	

	

vn

(optional)
	

string
	

	

Version number of the SSI Type.

hint

(optional)
	

string
	

	

Hint for the keySSI resolver(optional).

callback
	

function
	

	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper Object
	

	

	

Description: Contains a message and the error./The array that was just created.

Returns

Name
	

Description

arraySSI
	

The arraySSI that was created.
Function createAliasSSI(domain, alias, callback)

Description:

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

The blockchain domain of the SSI key you want to build.

alias
	

	

	

callback
	

function
	

	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper Object
	

aliasSSI
	

	

Description: Contains a message and the error./The aliasSSI that was just created.

Returns

Name
	

Description

aliasSSI
	

The aliasSSI that was created.
Function createSizeSSI(domain, totalSize, bufferSize)

Description:

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

The blockchain domain of the SSI key you want to build.

totalSize
	

	

	

bufferSize
	

	

	

Returns

Name
	

Description

sizeSSI
	

The sizeSSI that was created.
Function createPathKeySSI(domain, path, vn, hint)

Description:

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

The blockchain domain for which you want to create a KeySSI.

path
	

	

	

The path for which you want to create a KeySSI.

vn
	

	

	

The version number.

hint
	

	

	

Function we_createPathKeySSI(enclave, domain, path, vn, hint)

Description:

Name
	

Type
	

Value
	

Description

enclave
	

	

*required
	

domain
	

string
	

*required
	

The blockchain domain for which you want to create a KeySSI.

path
	

	

	

The path for which you want to create a KeySSI.

vn
	

	

	

The version number.

hint
	

	

	

Function createEmbedSSI(domain, data)

Description:

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

The blockchain domain for which you want to create a KeySSI.

data
	

	

	

Function createVersionlessSSI(domain, path, encryptionKey, vn, hint)

Description:

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

The blockchain domain for which you want to create a KeySSI.

path
	

	

	

The path for which you want to create a KeySSI.

encryptionKey
	

	

	

vn
	

	

	

The version number.

hint
	

	

	

