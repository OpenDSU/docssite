---
title: Anchoring 
layout: home
parent: OpenDSU Concepts
nav_order: 4
---

## Anchoring (RFC-005)

{: .accepted }
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

This RFC introduces the anchoring concept from the OpenDSU project.
Overview

OpenDSU aims to facilitate the creation of blockchain platforms that support multiple blockchains, and even more, it should support heterogeneous blockchains (blockchains with different capabilities and different security models). For OpenDSU, the main purpose of those blockchains is to work as notarization mechanisms for DSUs.

DSU anchoring can be used by the use cases or even to support hierarchical organisations of the ledgers and to offer a naming system for the content stored in the ledgers hierarchy. In the following chapters, we will explore the solutions proposed by the OpenDSU for anchoring ledgers and DSUs. While researching the problem of anchoring data in the blockchain for integrity and traceability, we realised that there are at least two types of anchors: implicit and explicit.

 

Diagram 1: DSU Anchoring

From a blockchain perspective, we can also see DSUs as microledgers. A ledger or microledger is a data structure that can be verified. After all, a blockchain represents a large collection of verifiable data. Therefore, since the beginning of blockchain history, every step and change has been cryptographically verifiable, mainly using two mechanisms. The first is the hashing of data. Another equally important mechanism is related to digital signatures, in various forms, to know the provenience of the data. Otherwise, if the data is just hashed, then there is a history that cannot be changed, so we do not know what it is; we cannot validate the provenience of the data, or we can recreate the history and become vulnerable. Both mechanisms ensure the data integrity and trust properties we expect from the blockchain.

All the changes in DSU states are automatically transmitted to a blockchain (arrows in Diagram 1). They refer to anchoring operations that anchor/preserve the state so that the provenance, history and time marking can be verified, i.e. to know when the operation occurred. OpenDSU offers a technology to obtain these properties, an extension of the blockchain in a way that is as efficient as possible and as easy as possible.
Implicit Anchors

Implicit Anchors are created as a result of blockchain operations. One of the largest benefits of the blockchain is the “anchoring” or “notarization” of some data (events or information), and due to the immutable nature of blockchains, it is possible to prove that something happened or was known at a specific moment in time, while also maintaining data integrity. OpenDSU avoids the usage of implicit anchoring by proposing the use of explicit anchoring. However, there could be cases where the implicitly anchored DSUs may provide benefits or even be required from a technical or compliance perspective.
Transactions as Implicit Anchors

With implicit anchoring, the transactions are stored (anchored) in the blockchain, which may contain hashes of the off-chain data. If you want traceability, implicit anchoring is obtained by analysing the history. An object with all the hash history does not exist explicitly in the world state.
Zero Knowledge Anchors

Another method of anchoring is based on Zero-Knowledge Proofs (ZKP). OpenDSU supports ZKP in two ways. First, DSUs are micro-ledgers that can have the custom code that implements ZKP protocols in any way. The approach taken by OpenDSU is to not base its privacy properties on new and not fully proven cryptography but on avoiding unnecessary sharing. The anchors provide functionality, as we call: zero access anchoring for DSUs, as it is enough to get the essence of blockchain technologies concerning integrity and traceability.
Explicit Anchors

An alternative approach is having explicit anchors in the form of smart contracts, which can explicitly store history and timestamps. The data and its lineage are easily reconstructed and validated by reading the smart anchoring contracts. The explicit anchors can be implemented as smart contracts or services outside the ledger.

In OpenDSU terminology, we call Explicit  Anchoring when anchoring is only controlled or handled in the smart contracts. This anchoring is flexible regarding custom validations, keeping hashes history and timestamps. Any blockchain or ledger supporting smart contracts can implement this kind of anchor.

   

Diagram 2: Zero Access explicit anchors (AnchorIDs)

In cases where the amount of anchors is very high, specialised blockchain should be designed to store billions/trillions of Light Anchors (e.g. for pharma industry use cases or use cases with billions of people, DSUs etc.). The KeySSIs are used to obtain AnchorIDs (sometimes called zero access SSIs identifiers). OpenDSU proposes the AnchorIDs as a method of implementation for light anchoring.

The anchored data and its lineage are reconstructed and validated by reading the anchor and the history stored off-chain. Minimal on-chain validation is offered but, in many cases, will be accompanied by off-chain validation code (known generally in the OpenDSU terminology under the name of secret smart contracts).

The light anchoring proposed by OpenDSU assumes that the blockchain will store only a pair of Anchor Identifiers (AnchorIDs) and a list of hashes. The anchoring control is designed especially for the light anchors and is typically based on digital signatures.
Anchors with Attached ZKP Values

The HashLinks can be accompanied by cryptographically obtained values that can be used to prove computational integrity properties. We call these values with the generic name: ZKP values. For example, these kinds of anchors could contain enough information to prove the current ownership of the DSU.

        

 

  Diagram 3: Explicit Anchors with ZKP values attached

Cryptographic ownership could be implemented with Zero-Knowledge Proofs, or simpler chaining of digital signatures could suffice. The anchoring is simply an association of an AnchorId with a set of SignedHashLinkSSIs.

For each blockchain technology, a separate adapter will be deployed. The APIHub will be configured for each blockchain domain to forward anchoring-related requests to the specific adapter.

Diagram 4: Chain of components needed for anchoring
Special SSIs for Anchor Values

For the values in the Anchor, it is possible to use a SignedHashLinkSSI or a TransferSSI.
SignedHashLinkSSI

Signature of the current owner can be described by the following “formula”:

sign(hash(anchorID | lastEntryInAnchor |  timestamp | brickMapHash), currentOwnerPrivateKy)

The hash and the signature algorithm come from the KeySSI-specific algorithms (vn).
TransferSSI

This KeySSI is useful to transfer the control of the anchor to another SSI.

Signature of the current owner means         

sign(hash(anchorID | lastEntryInAnchor | timestamp | new Public Key), currentPrivateKey)

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