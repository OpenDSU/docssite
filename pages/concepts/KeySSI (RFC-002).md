---
title: KeySSI 
layout: home
parent: OpenDSU Concepts
nav_order: 2
---

KeySSI (RFC-002)


**Document Maintainers: Andi Gabriel Tan 2022. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright**
Copyright © 2018-2022 Axiologic Research and Contributors.
This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)

{: .accepted }
The proposal has been accepted and has an implementation.


<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}





## Abstract

This RFC introduces one of the main components of OpenDSU: the concept of KeySSIs (Self-Sovereign Identifiers). We will go through:

+ The syntax of the identifiers and how they are constructed;
+ The key resolution that is necessary to retrieve all key information embedded in the identifier;
+ The different KeySSI families that were designed for different use cases, their specificity and the functions that are specific to each family;
+ The functions that are common to all KeySSIs and necessary to get useful information about our keys.

Note: For creating different types of keySSIs, the code can be checked at KeySSI (RFC-068).

##  Introduction

The purpose of the KeySSI concept is to provide blockchain-anchored identities for things and processes but potentially also for companies and individuals. The concept of KeySSI is more general than the concept proposed by the W3C DID web standard. DIDs and KeySSIs are two different methods of creating SSIs (Self-Sovereign Identifiers).

An important innovation offered by KeySSI is that the keys are used as secret (symmetrical) encryption/decryption keys for DSUs (or parts of DSUs).

Ideally, for security reasons, KeySSIs should be self-certifying SSIs. “Self-certifying” means that the resolved DSU contains enough information to validate the ownership of the SSI. The self-certification properties are typically a result of using the hash of a public key as part of the identifier. This way, when a DSU is obtained from the resolver, it is possible to verify the authenticity of the DSU; the owner should sign it.

A KeySSI never comes alone but in a group that we call a family. Each KeySSI family is accompanied by lower-level KeySSIs derived from the highest-level key. Derivation can be understood as a form of access delegation: someone who holds a KeySSI with a higher access level can delegate access to lower levels.

Typically (but not always), KeySSIs are anchored in ledgers for integrity and traceability using a special KeySSI called Zero Access SSI (szaSSI). Having a szaSSI gives the user access only to a list of hashes (the versions of the anchored DSU) but nothing else. Without an upper-level KeySSI, the szaSSI has no practical value except giving access to the number of versions of a DSU.

API note: The KeySSI (RFC-068) is used to create the different KeySSIs.
Syntax of KeySSI identifiers

The syntax of KeySSI is inspired by the W3C DID and is similar to it, but has several key differences, such as - it starts with the “ssi” string. It allows users to define additional attributes, such as types, ledger domains etc. Equivalent to the DID method string, SSI also consists of types (or subtypes). The purpose of types is not to introduce incompatible methods to W3C DIDs, but rather to add different types of KeySSIs. The different KeySSI types are designed to be compatible, which allows for a standard KeySSI resolver to implement all the standard types. Another unique aspect of the SSI syntax compared to the W3C DIDs is that the 3rd group in the identifier represents a ledger/blockchain domain. OpenDSU is based on the objective that a KeySSI supports multiple hierarchical ledgers/blockchains. The current definition of the blockchain domain and the proposed implementation on resolving these domains are part of the OpenDSU specification and may be found in the BDNS chapters.

Figure 1:  Syntax of KeySSI Identifiers

** Examples: **            

ssi:seed:ePI.pharma:RANDOMSEEDKEY:HASHRANDOMKEY:vn

ssi:za:ePI.pharma:HASHSERIALISATION:HASHPUBLICKEY:vn

Figure 2:  Syntax of KeySSI Identifiers

The “Type Specific Substrings” contain strings that typically should contain enough random bits for good security.

The “Control Substring” part of the KeySSI is used by the anchoring services to validate the requests for a new version of the anchored DSU. The algorithm used for verification is type-specific.

The “vn” field is a string reflecting the version number of the type. The vn should not be confused with DSU versions: vn refers to the version number of the KeySSI type. The “vn” field is optional; if missing, it defaults to “v0”. The OpenDSU standardization body should approve each new version. Each version has an associated configuration that specifies the cryptographic primitives and conventions, detailed in a separate OpenDSU RFC. For example, these RFCs will specify what hash functions and what methods should be used by the anchoring service.

The “hint” part is optional and subtype-specific. Typically, it hints at some optional information for the KeySSI resolver, for example, the favorite server proposed by the owner of the KeySSI.

This part could also be called “tag” as it is a way of tagging KeySSIs for specific purposes, for example, to tag a DSU containing sensitive information to help indicate that it will require additional data protection mechanisms. This “Hint” or “Tag” extends the KeySSI for countless purposes that could not be imagined now.
## Trustless KeySSI Resolvers

The primary purpose of standard KeySSI resolvers is to be able to use an SSI identifier to create or load a specific DSU instance. Information embedded in the keySSI will give the resolver everything it needs to ensure the DSUs are stored securely through encryption. Key derivation is also used to give different access rights, and the resolver will ensure these rights are applied when reconstructing a DSU.

Figure 3:  KeySSI Resolvers role

KeySSI Resolvers are libraries loaded in the DSU reconstruction environments. OpenDSU implements client-side encryption, therefore avoiding the need for any delegation of trust to any intermediaries or certificate authorities. The KeySSI resolver can call an adapter to a ledger or blockchain and call the Brick Storage, but its usage of any other intermediary Web API is not recommended. The node doing the resolving (the DSU reconstruction environments) should provide the result as an instance of a DSU. The reconstruction environment of DSUs should handle the decryption and the other operations required for resolving a KeySSI to a DSU.

The KeySSI Resolvers should benefit from the BDNS (Blockchain Domain Name System) and other schemes to create a trustless KeySSI resolver so that, when possible, there should be multiple “gateways” for the “anchoring service” as opposed to just one. The “anchoring service” is located where a specific anchor is stored in the ledger. When required, a multiple gateways approach will introduce better decentralization and security, since the difficulty of attacking the network increases with the number of nodes making up the network (see implementation recommendations).
## KeySSIs families

Depending on the use case, different types of KeySSIs can be used. This table summarizes the different families of KeySSIs and references the links for more detailed information.


**[SeedSSIs](https://www.opendsu.org/pages/advanced/SeedSSI%20(RFC-010).html)**
	
SeedSSI identifiers are a good method for identifying DSUs that are not shared with many people. A good example is the DSUs that implement some form of digital wallet for users and companies.


**[ConstSSIs](https://www.opendsu.org/pages/advanced/ConstSSI%20(RFC-011).html)**

Aim to provide human-readable identifiers that can be remembered easily.

This RFC also contains information about ArraySSI, WalletSSI and PasswordSSI, since they are all derived to obtain constSSIs.


**[HashLinkSSI](hhttps://www.opendsu.org/pages/contributors/HashLinkSSI,%20SignedHashLinkSSI%20(RFC-015).html)**

Brick-pointing KeySSIs that allow finding and decrypting un-anchored bricks/DSUs.


**[SymetricalEncryptionSSI](https://www.opendsu.org/pages/contributors/SymmetricalEncriptionSSI%20(RFC-016).html)**
	
SymetricalEncryptionSSIs are used with HashLinkSeedSSIs for bricks’ construction and reconstruction.



## KeySSIs common functions

KeySSIs share a set of common functions. They serve to initialize KeySSIs with desired parameters or to get their parameters when they are needed.


How to use KeySSI functions:


'variable = keySSI.function();

dlDomain = keySSI.getDLDomain();

seedKeyIdentifier = seedSSI.getIdentifier();'


### Function keySSI.autoLoad(identifier)

Description:  Load parameters for KeySSI from a keySSI Identifier.

|Name       |Type      |Value     |Description                                                                                 |
|----------:|:--------:|:--------:|-------------------------------------------------------------------------------------------:|
|identifier |String    |*required | A string that uses the keySSI identifier syntax. *Ex: ssi:za:domain:specificStr:control:vn*|



Returns: This function does not return anything; it just changes the type of the existing key.

### Function keySSI.cast(newType)

Description: Is used to create a new type of KeySSI from a similar KeySSI. You should first create a well-known keySSI, then use the cast function to change the type.


|Name       |Type      |Value     |Description                                                       |
|----------:|:--------:|:--------:|-----------------------------------------------------------------:|
|identifier |String    |*required | A string that uses the keySSI identifier syntax.icStr:control:vn*|


Returns: This function does not return anything.



### Function keySSI.clone()

Description: Create a clone of an already existing keySSI.

Returns

|Name            |Description           |
|KeySSI Object   |A clone of your KeySSI|


### Function keySSI.getAnchorID()

|Name     |Description                                                       |
|String   |Your KeySSI anchor Identifier. It is used for Anchoring operations|



### Function keySSI.getControlString()

|Name     |Description                                                                            |
|String   |Your KeySSI control string. It is used for Anchoring operations for validation purposes|



### Function keySSI.getDLDomain()

|Name     |Description                                                                                  |
|String   |Your keySSI DL Domain. It represents the ledger/blockchain domain name, and the personal key that was created and used. More info in BDNS|



### Function keySSI.getDSURepresentationName()

|Name     |Description                                                                                  |
|String   |Your keySSI DSU Representation Name. This function is not fully implemented and will only return “RawDossier” if your key is from the seed subtype|




### Function keySSI.getHint()

|Name     |Description                                                                                            |
|String   |Your keySSI hint. The hint is optional for keySSI but can contain helpful information for the resolver.|


### Function keySSI.getIdentifier(plain)

|Name  |Type      |Value     |Description                                                                        |
|plain |string    |*required | Enter true if you want the identifier in the ssi format (ssi:za:domain:specificStr:control:vn).

Else the identifier will be encoded in Base58.|
	

**Returns**

|Name     |Type    |
|plain   |boolean  |


### Function keySSI.getName()

**Description:** Retrieve the keySSI subtype name. This function is obsolete, please use keySSI.getTypeName() instead.

**Returns:** The subtype name (e.g.: seed, sza etc.) for your KeySSI.

### Function keySSI.getRelatedType(ssiType, callback)

Description: Get the KeySSI that is related to your KeySSI and that is derived from the selected “ssiType”. A keySSI is returned if the ssiType can be derived from your KeySSI. It works only for lower subtypes for security reasons.


|Name     |Type  |Value    |Description                                                                        |
|plain    |string|*required|The ssi type you want to derive from your key.Need to be from the same family and at a lower level than your keySSI|
|callback |functiong    |*required |                 |


**Callback parameters** 

|Name            |Type          |
|err             |Error object  |
|relatedKeySSI   |KeySSI object |


Description: Error message and the error. / The KeySSI of the selected type if it can be derived from your key. If it is the same subtype, it will return the same key.


### Function keySSI.getSpecificString()

Description: Retrieve the keySSI specific string.

**Returns**

|Name            |Description                                            |
|String          |Your keySSI specific string. The specific string is a string that should contain enough random bytes for good security. The more the key is at a higher level, the more it should be secure.Public keySSI, like sza KeySSIs do not need this string.|



### Function keySSI.getVn()
|Name            |Description                                                                                                          |
|String          |Your keySSI Vn (version number). It represents the version of your keySSI so your resolver knows how to deal with it.|



### Function keySSI.load(subType, dlDomain, subtypeSpecificString, control, vn, hint)

Description: Change the parameters of a KeySSI to replace the existing one.

|Name                  |Type  |Value    |Description                                 |
|subType               |string|*required|TSubtype name of the keySSI.                |
|dlDomain              |string|*required|Blockchain/ledger domain name of the keySSI.|
|subtypeSpecific String|string|*required|The subtype specific string of the keySSI.  |
|control               |string|*required|The control substring.                      |
|vn                    |string|*required|The version number of the keySSI type.      |
|hint                  |string|*required|Additional information for the keySSI.      |


Returns: This function does not return anything.



## Contributors   

1. [Axiologic Research](www.axiologic.net): New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the [www.opendsu.com](www.opendsu.com) site.
2. [PharmaLedger Project](www.pharmaledger.eu): Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.
3. [PrivateSky Research Project](www.privatesky.xyz):  MIT licensed content accordingly with the contracts. [https://profs.info.uaic.ro/~ads/PrivateSky/](https://profs.info.uaic.ro/~ads/PrivateSky/)  

## Annex 1. Contributors

|**Current Editors**                  |**Email**                                 |
|:------------------------------------|:-----------------------------------------|
|Sînică Alboaie                       | sinica.alboaie@axiologic.net             |
|Cosmin Ursache                       | cosmin@axiologic.net                     |
|Teodor Lupu                          | teodor@axiologic.net                     |
|Andi-Gabriel Țan                     | andi@axiologic.net                       |
|**Contributors Axiologic Research**  | **Email**                                |
|Adrian Ganga                         | adrian@axiologic.net                     |
|Andi-Gabriel Țan                     | andi@axiologic.net                       |
|Cosmin Ursache                       | cosmin@axiologic.net                     |
|Daniel Sava                          | daniel@axiologic.net                     |
|Nicoleta Mihalache                   | nicoleta@axiologic.net                   |
|Valentin Gérard                      | valentin@axiologic.net                   |
|**PrivateSky Contributors**          |**Email**                                 |
|Alex Sofronie                        | alsofronie@gmail.com (DPO)               |
|Cosmin Ursache                       | cos.ursache@gmail.com (UAIC)             |
|Daniel Sava                          | sava.dumitru.daniel@gmail.com (HVS, AQS) |
|Daniel Visoiu                        | visoiu.daniel.g@gmail.com (SGiant)       |
|Lenuța Alboaie                       | lalboaie@gmail.com (UAIC)                |
|Rafael Mastaleru                     | rafael@rms.ro (RMS)                      |
|Sînică Alboaie                       | salboaie@gmail.com (UAIC)                |
|Vlad Balmos                          | vlad.balmos@gmail.com (Code932)          |
|**PharmaLedger Contributors**        | **Email**                                |
|Ana Balan                            | bam@rms.ro (RMS)                         |
|Bogdan Mastahac                      | mab@rms.ro (RMS)                         |
|Cosmin Ursache                       | cos@rms.ro (RMS)                         |
|Rafael Mastaleru                     | raf@rms.ro (RMS)                         |