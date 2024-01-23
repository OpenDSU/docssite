---
title: DSU Types 
layout: home
parent: OpenDSU Concepts
nav_order: 6
---

# **DSU Types (RFC-007)**
{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs).

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

DSUs are data, verifiable code. Through the use of cryptographic techniques, they are encrypted and identifiable in a certain way. DSUs can be assimilated into the programming model because there are DSU instances and classes.

Figure 1: DSU-Types

DSUs identify and encrypt via KeySSI; DSUs can store keys used for encryption and digital signatures. They contain embedded file systems or databases (key-value, indexed, registers) and also "contain" code (validation and business logic) from one type of DSU Instances of DSU types.

A DSU type, also called DSU constitution, can be a DSU storing SELECTED CODE or it can be seen as a class for DSU APIs (abstract interfaces that hide internal representations of data).

These DSU-types group DSUs, especially conceptually, but sometimes in code form. Therefore, we have DSUs that are instances of these classes. For example, when John makes an order, we have a code that defines how this microledger should behave; that is the DSU type. Later, we have instances with John, who clicked on the Christmas section to buy a gift and made an order, so there is a private instance for this DSU. The relevant part is that DSU-types are also DSUs, because DSU-type essentially means code. The code is represented by files that have some conventions.

Figure 2: DSU-Type

As mentioned above, the DSU-Type is a code. The /constitution directory has dependencies that are loaded into the execution environment. This is a DSU that is loaded into the code and retrieves everything the code needs, when it is needed. It also has other files and folders for this instance’s data.

Figure 3: DSU structure - Similar to a filesystem (Key/Value database)

DSUs can be assimilated with file systems. We can imagine them as a ZIP archive, in which we have paths and files, and what is done with the files depends on the type of DSU and the context in which it is used. The files are loaded in different environments and are interpreted according to how they are needed in the application. The basic metaphor for operating systems is that they are essentially file systems. In this regard, DSUs are similar.

The file system can also be used as a key-value database. It obtains interrogable databases that can do queries and map the logical level of record structures and/or tables in value keys (in other ways). These are already successive layers built on the same basic metaphor, the file system from DSUs. Given the file system, similar to Unix, in the world of OpenDSU, DSUs can be mounted inside each other and, in this way, we can get the reusable code between DSU-Types and DSUs. If there are DSUs that belong to no particular DSU-Type, then we mount them in a folder/code of another DSU that contains that code and it becomes part of the world of that DSU-Type. These DSUs, data and code generally need to be interpreted/uploaded in an environment to be used as needed in our applications.

Different types of DSUs were implemented for different use cases. Each type is associated with different types of KeySSIs (see RFC 002).

|SU Representation    |KeySSIs, anchoring strategies, versioning strategies etc|

|SecretDSU|
|KeySSIs: SecretSSI family

Anchoring: zaSSI

Versioning: microledger

Other: None|


SeedDSU
	

KeySSIs: SeedSSI family

Anchoring: szaSSI

Versioning: latest version wins

Other:None

ImmutableDSU
	

KeySSIs: ConstSSI families

Anchoring: czaSSI

Versioning: None

Other: None

RedirectDSU
	

KeySSIs: ConstSSI

Anchoring: czaSSI

Versioning: None

Other: Contains a JSON with a KeySSI

BrickDSU
	

KeySSIs: HashLinkSSI

Anchoring: None

Versioning: None

Other: contains a JSON

ConsentDSU
	

KeySSIs: HashLinkSSI

Anchoring: None

Versioning: None

Other: contains a JSON with all the consent info

CredentialsDSU
	

KeySSIs: HashLinkSSI

Anchoring: None

Versioning: None

Other: contains a JSON with all credentials

BDSU
	

KeySSIs: HashLinkSSI

Anchoring: None

Versioning: None

Other: contains a JSON with information about a Blockchain Domain
## Public Methods from dt API

### Function getDossierBuilder(sourceDSU, varStore)

Description: Creates a new MappingEngine Object.

|Name       | Type   | Value  | Description                                                                    |
|sourceDSU  | object |        | This will perform all OPERATIONS from the sourceDSU as a source and not the fs.|
|varStore   | object |        |                                                                                |
	

	

### Function initialiseBuildWallet(callback)

Description: Initialise a new wallet.

|Name       | Type    | Value      | Description   |
|callback  | function | *required  |               |



### Commands

Description: Exposes more classes that are able to handle different commands, such as:

+ AddFileCommand
+ AddFolderCommand
+ CreateDSUCommand
+ CreateFileCommand
+ DefineCommand
+ DeleteCommand
+ DeriveCommand
+ EndWithCommand
+ GenKeyCommand
+ GetIdentifierCommand
+ MountCommand
+ ObjToArrayCommand
+ ReadFileCommand
+ WithCommand
+ _getByName

### AppBuilderService

**Description:**


|Name         | Type   | Value  | Description                                                                            |
|environment  | object |        | Typically comes from an environment.js file which is the SSApps. Overrides some options|
|opts         | object |        | Options object mimicking                                                               |
	


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