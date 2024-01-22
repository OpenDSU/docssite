---
title: W3C DIDs 
layout: home
parent: Open DSU Advanced
nav_order: 14
---

W3C DIDs (RFC-082)

Abstract

This API allows the creation and resolution of OpenDSU identifiers (keySSIs) that are compatible with the W3C DID specifications. A DID is like a URI resolved to a DID document. A DID Document is mostly a collection of public keys and possibly other metadata (e.g. endpoints). In OpenDSU, we transform these documents into Javascript objects capable of offering other functionalities:

    Send encrypted messages to an OpenDSU queue associated with this DID;
    Sign messages;
    Verify messages;
    Generate Verifiable Credentials (to be defined).

An identifier can be resolved in two different security contexts:

    In security contexts that have access to the private keys corresponding to the public key;
    In any other environment (they will have access only to the public key obtained from the DID document).

A security context is just an abstraction for the secure storage part of a wallet. Typically each security context embeds one or two “Enclaves” (See also RFC097).
Overview

We are using the concept of DID and the standards related to DID that are already implemented, but we will also implement other DID methods, and we will have our philosophy and our way of using these DIDs.

Figure nr. 1: DIDs in OpenDSU

W3CDID Interface (DID Document Facade)

    Generic functions for working with DIDs;
    Unify the handling of DIDs in OpenDSU;
    Offer various functionalities:

    Digital Signature;
    Encryption (ECIES);
    Encrypted messages communication between DIDs;
    Credential Creation (not fully implemented);
    DIDs & Keys revocations (not implemented).

    Use resolveDID from w3cdid API space to create W3CDID instances for your DID URIs;
    registerDIDMethod  can register DID methods.

Security Context

    Abstracts the intuition of access areas;
    Simplifies keys management;
    Use an enclave to offer granular access control to  private keys and other sensitive data (DID based);
    Used by W3CDID instances to perform various cryptographic operations in the right context.

The existing standards specify details about data models and concepts, but it is not clear how to use them at the level of APIs and implementation. All our work, in this regard, is to generalize, create a transparent way, and use different or more agnostic DID methods. We have our own DID methods, and where we can, we try to use different types of DIDs.

Figure 2: DIDs methods in OpenDSU (W3CDID concrete instantiations)

did:ssi submethods: DIDs associated with an OpenDSU Blockchain Domain:

    did:ssi:name take any string (name) and create a DID by having a const DSU mounting a sRead DSU (for DID Document);
    did:ssi:sread it is just making a DID from a sRead KeySSI (DSU containing DID Document);
    Did:ssi:group contains a list of other DIDs belonging to the group. Used to send messages to groups;
    did:ssi:key it is just the public key (without an external DID document) associated with a blockchain domain.

The Blockchain Domain is used to discover the endpoints for message queues.

Simple methods used by others (e.g., GS1):

    did:key use a public key as identifier
    did:web use a WEB URL as identifier

We are implementing a set of DIDs (as can be seen in the figure above, under did:ssi), as a method that we have proposed. There are several submethods. This is the reason that they are listed in the figure.
1. W3C DID Methods supported by OpenDSU

There are currently four DID Methods implemented, briefly described in the table below.

DID Method
	

ssi:name
	

DID method storing the public key in an immutable DSU that is mounting another mutable DSU to store the keys.

Example:

did:ssi:const:blockchain_domain:const_string:::

ssi:key
	

DID method that does not require an actual DID document, the public key is in the identifier already (with the obvious issues regarding the ability to rotate the  key). A blockchain domain is still part of the identifier for the ability to take BDNS configuration.

Example:

did:key:publicKey:

ssi:sread
	

SeedSSI compatible DID method that does not need anchoring or external DSUs.

Example:
did:ssi:sRead:blockchain_domain::hash_publicKey::

key
	

DID method that does not require an actual DID document, the public key is in the identifier already (with the obvious issues regarding the ability to rotate the  key). Similar to “ssi:key” but without a blockchain domain.

Example:

did:key:publicKey:
2. DID Documents instances using the W3C DIDs APIs
Function createIdentity(didMethod, ...args)

Description: Create a new W3C DID based on SeedSSI.

Name
	

Type
	

Value
	

Description

didMethod
	

string
	

*required
	

The method you want to use to create a W3C-compatible identity using Open DSU.

(Existing DID methods implementations)

...args
	

	

	

Function we_createIdentity(enclave, didMethod, ...args)

Description: Create a new W3C DID based on SeedSSI.

Name
	

Type
	

Value
	

Description

enclave
	

Object
	

*required
	

The enclave you want to use for storing the DID of the new identity.

didMethod
	

string
	

*required
	

The method you want to use to create a W3C-compatible identity using Open DSU.

(Existing DID methods implementations)

...args
	

	

	

Function resolveDID(identifier, callback)

Description: Returns an error or an instance of W3CDID.

Name
	

Type
	

Value
	

Description

identifier
	

string
	

*required
	

An openDSU keySSI that is w3c compatible.

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

didDocument
	

Did document
	

Description: A DID document instance is obtained when you resolve a W3C DID.
Function we_resolveDID(enclave, identifier, callback)

Description: Returns an error or an instance of W3CDID.  

Name
	

Type
	

Value
	

Description

enclave
	

Object
	

*required
	

The enclave for which you want to resolve the DID.

identifier
	

string
	

*required
	

An openDSU keySSI that is w3c compatible.

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

didDocument
	

DID document
	

Description: A DID document instance is obtained when you resolve a W3C DID.
Function registerDIDMethod(method, implementation)

Description: This function allows the user to register new DID methods (Existing DID methods implementations).

Name
	

Type
	

Value
	

Description

method
	

string
	

*required
	

implementation
	

function
	

*required
	

Function resolveNameDID(domain, publicName, secret, callback)

Description:

Name
	

Type
	

Value
	

Description

domain
	

	

	

The domain of the DID.

publicName
	

	

	

secret
	

	

	

callback
	

function
	

*required
	

Function registerNameDIDSecret(domain, publicName, secret, callback)

Description:

Name
	

Type
	

Value
	

Description

domain
	

	

	

The domain of the DID.

publicName
	

	

	

secret
	

	

	

callback
	

function
	

*required
	

Function initSystemDID()

Description: Generate a system DID.
Function getKeyDIDFromSecret(secret, callback)

Description:

Name
	

Type
	

Value
	

Description

secret
	

	

	

callback
	

function
	

*required
	

3. DID Documents instances using the Security Context APIs

4. APIs that you could expect in a DID document instance

When resolving a DID identifier you obtain a DID document. Here is a summary of all operations available for DID documents.

Functions
	

Description

decrypt
	

encrypt
	

findPrivateKeysInSecurityContext
	

getControllerKey
	

getPublicKeys
	

getMQHandlers
	

revokeDID
	

revokeKey
	

sendMessage
	

sign
	

verify
	

5. Message communication between DIDs

Figure 3: Message communication between DIDs
6. CommunicationHub concept

    getCommunicationHub() -> CommHub

    subscribe(did, messageType, checkSecurityMethod, callback)
    unsubscribe(did, messageType, checkSecurityMethod, callback)

