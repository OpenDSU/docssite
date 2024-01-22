---
title: DSU Mounting 
layout: home
parent: OpenDSU Concepts
nav_order: 5
---


DSU Mounting (RFC-006)


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



Abstract

This RFC about DSU Mounting is structured in 2 parts. The first part consists of the first two chapters, in which we present the introductory notions and the actual process of mounting a DSU into another DSU. The second part contains the last chapter (chapter 3), where we are presented with valuable examples to deepen our knowledge. The document focuses on Security Context but also presents the possibility of obtaining read and/or write rights in a mounted DSU.
1. Introduction

The Data Sharing Units (DSU) concept presents the idea of a data structure anchored in the blockchain (on-chain), stored in an off-chain encryption system called brick storage. The anchoring operation refers to changes in a DSU, which are reflected in the blockchain. There is an anchor that contains the history of a DSU. Anchoring is a logical concept that appears as an instance (could be an element or a document type) inside an execution environment.

OpenDSU will split the DSUs into several pieces called bricks to provide data privacy in shared storage spaces. Each brick contains a small amount of encrypted data and is stored in the storage environment using hashes as identifiers.

OpenDSU aims to facilitate the creation of a blockchain that supports multiple blockchains. Furthermore, it should support blockchains with various capabilities and security models (heterogeneous blockchains). For OpenDSU, the primary purpose of these blockchains is to function as an authentication mechanism for the DSU.

More details about DSUs are available in Brick Storages (RFC-003).
2. Description of the Mounting Process

A DSU can be seen as a file system. Like every other file system in the UNIX world (UNIX is a family of operating systems designed for flexibility and adaptability), it allows the mounting of other file systems, mainly other DSUs. So, we can create a file system composed hierarchically and recursively of multiple file systems from multiple DSUs.

The mounting is a process through which the operating system makes files and directories on a storage environment (such as a shared network) available to users. They can access those files through the file system.

Starting from the perspective that a DSU can be seen as a file system, this allows one DSU to be mounted in another DSU. The DSU mounted in all instances that contains source code is called DSU-Type. It is a DSU itself, therefore it is anchored and it must have digital signatures marking it as safe for use.

Figure 1: DSU Instances and DSU Types

DSU mounting can be used to mount arbitrary DSUs (existing or randomly occurring) and make them appear to be part of the parent/root DSU. DSUs are lightweight containers that can start a minimal operating system, which we call DSU-Type (as mentioned above). What is obtained is a file system with mounting concepts. Code mounting is just one example of the usefulness of the DSU concept.

Figure 2: DSU structure - similar to a filesystem (Key/Value database)

Figure 3: Execution Environments

The SSApp architecture is designed as a method to achieve interoperability of digital wallets (the ability of two or more functional units to process data cooperatively) and data portability (the ability of a program to run different types of data processing without converting the program to a different language, with little or no modifications).

OpenDSU’s vision for the future is that users will use sophisticated digital wallets that will include autonomous applications (we call them SSApps). They allow the recognition of data as an asset.

In figure 2, we present a more complex case. In the SSApp concept, we have mounted inside DSUs for wallets and SSApps, a DSU that holds the PoD (Point of Delivery) needed for the SSApp execution. In this way, the users can write some of their own data in their wallets or SSApps, but the user has no write rights over the code. The code can be signed, or a third party can maintain it. The term “constitution” in the figure represents the code of DSU-Type (concept explained above).

More details are available in SSapps Architecture (RFC-028).

The mounting operation can be done both for writing, using KeySSIs that allow writing, and in read-only mode. Generally, the mounting is available for the operating system in the same way as for a file system: for reading, writing, or both.

Compared with the mounting operation from Linux/Unix, OpenDSU also allows a new type of mounting that we call contextual mounting. This is neither for writing nor reading. Contextual mounting allows the mounted DSUs to be accessed according to the current Security Context of the execution environment in which the DSUs are loaded.

Security Context is an important concept introduced by OpenDSU, to try and give the OpenDSU programmers the insight that working with secrets, cryptographic materials, private keys, public keys, and confidential/private records is always associated with a security context. We treat each wallet as a Security Context (SC). The wallet incorporates broader things, such as the interface, code and different types of sensitive data storage. It can also mount DSUs and it can have external databases.

More details are available in Security Context (RFC-075).

Contextual mounting allows sharing DSUs with varied access for different actors in the system. An actor is a computing entity that participates in the process, such as a person, a robot, an application, an organization, or a system. An actor can simultaneously send (in response to a message it receives) a finite number of messages to other actors. In our case, actors will be able to see that there is some content, but they will not be able to open it unless they have access to another communication channel at the corresponding key. Once they have access to the key, they must upload it in their security context to receive access rights. The actors will receive read or write rights, depending on the key they receive through the external communication channel.

Message communication based on DIDs (Decentralized Identifiers) is generally given this external channel. A DID is a new type of identifier that allows one to obtain a digital, decentralized identity. An identifier can be resolved in 2 different contexts: in a security context (it has access to the private keys corresponding to the public key) and in any other environment (it will only have access to the public key obtained by the DID document).

A DID is the same as a URI that is resolved in a DID document. A DID document is a collection of public keys and other metadata. This data allows classification, organization, and storage of other data, in digital format.

More details are available in W3C DIDs (RFC-082).

More details are available in Message Queues (RFC-073).
3. Example

In a mounted DSU, any reading or writing is done with the information available in the Security Context (SC). Mounting a DSU can also be done with zero access SSIs, not only with SReadSSIs or SeedSSIs. Zero access SSIs only show us that there exists a DSU and that a certain public key controls it, and it has SReadSSIs or Seed SSIs that we can read and write. In other words, users with few rights will only be able to see another DSU mounted there, but they will not be able to access any of the information in that DSU.

If the Security Context (SC) controlled or used by users has at least one key with reading rights, they will be able to read that information. Users can also note/write in the respective DSU, but only if the Security Context has a key with write rights.

require("../../../psknode/bundles/testsRuntime");

const tir = require("../../../psknode/tests/util/tir");

const double_check = require("double-check");

const assert = double_check.assert;

assert.callback("Trying to mount ", (testFinishCallback) => {

 double_check.createTestFolder('AddFilesBatch', async (err, folder) => {

   tir.launchApiHubTestNode(100, folder, async err => {

     if (err) {

       throw err;

     }

     const openDSU = require("opendsu");

     const resolver = openDSU.loadApi("resolver");

     try {

       let dsuToMount = await $$.promisify(resolver.createDSUx)("default", "seed");

       let destinationDSU = await $$.promisify(resolver.createDSUx)("default", "seed");

       let keySSI = await $$.promisify(dsuToMount.getKeySSIAsString)();

       await $$.promisify(destinationDSU.mount)('/mountingPoint', keySSI);

       await $$.promisify(dsuToMount.writeFile)('/readme', 'text');

       let files = await $$.promisify(destinationDSU.listFiles)('/');

       console.log(files);

       testFinishCallback();

     } catch (err) {

       throw err;

     }

   })

 });

}, 5000);




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