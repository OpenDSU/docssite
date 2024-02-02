---
title: Anchoring 
layout: home
parent: OpenDSU Concepts
nav_order: 4
---

# Anchoring
{: .no_toc }


{: .accepted }
The proposal has been accepted and has an implementation.


**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

<!-- TOC -->
* [Anchoring](#anchoring)
* [Abstract](#abstract)
* [Overview](#overview)
* [Implicit Anchors](#implicit-anchors)
  * [Transactions as Implicit Anchors](#transactions-as-implicit-anchors)
  * [Zero Knowledge Anchors](#zero-knowledge-anchors)
* [Explicit Anchors](#explicit-anchors)
  * [Anchors with Attached ZKP Values](#anchors-with-attached-zkp-values)
* [Special SSIs for Anchor Values](#special-ssis-for-anchor-values)
  * [TransferSSI](#transferssi)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->
{:toc}




# Abstract

<p style='text-align: justify;'>This RFC introduces the anchoring concept from the OpenDSU project.</p>

# Overview

<p style='text-align: justify;'>OpenDSU aims to facilitate the creation of blockchain platforms that support multiple blockchains, and even more, it should support heterogeneous blockchains (blockchains with different capabilities and different security models). For OpenDSU, the main purpose of those blockchains is to work as notarization mechanisms for DSUs.
</p>

<p style='text-align: justify;'>DSU anchoring can be used by the use cases or even to support hierarchical organisations of the ledgers and to offer a naming system for the content stored in the ledgers hierarchy. In the following chapters, we will explore the solutions proposed by the OpenDSU for anchoring ledgers and DSUs. While researching the problem of anchoring data in the blockchain for integrity and traceability, we realised that there are at least two types of anchors: implicit and explicit.
</p>
 
<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vQMWudHn2V2q-ezD7E5ANS9m4B5DKXOykkEKvXPvQzAN5VT_2g4CkIor5CszHDuhNIvkeUN4m21RH3C/pub?w=697&h=618" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Diagram 1: DSU Anchoring</b></p>
</div>



<p style='text-align: justify;'>From a blockchain perspective, we can also see DSUs as microledgers. A ledger or microledger is a data structure that can be verified. After all, a blockchain represents a large collection of verifiable data. Therefore, since the beginning of blockchain history, every step and change has been cryptographically verifiable, mainly using two mechanisms. The first is the hashing of data. Another equally important mechanism is related to digital signatures, in various forms, to know the provenience of the data. Otherwise, if the data is just hashed, then there is a history that cannot be changed, so we do not know what it is; we cannot validate the provenience of the data, or we can recreate the history and become vulnerable. Both mechanisms ensure the data integrity and trust properties we expect from the blockchain.
</p>

<p style='text-align: justify;'>All the changes in DSU states are automatically transmitted to a blockchain (arrows in Diagram 1). They refer to anchoring operations that anchor/preserve the state so that the provenance, history and time marking can be verified, i.e. to know when the operation occurred. OpenDSU offers a technology to obtain these properties, an extension of the blockchain in a way that is as efficient as possible and as easy as possible.
</p>

# Implicit Anchors

<p style='text-align: justify;'>Implicit Anchors are created as a result of blockchain operations. One of the largest benefits of the blockchain is the “anchoring” or “notarization” of some data (events or information), and due to the immutable nature of blockchains, it is possible to prove that something happened or was known at a specific moment in time, while also maintaining data integrity. OpenDSU avoids the usage of implicit anchoring by proposing the use of explicit anchoring. However, there could be cases where the implicitly anchored DSUs may provide benefits or even be required from a technical or compliance perspective.
</p>

## Transactions as Implicit Anchors

<p style='text-align: justify;'>With implicit anchoring, the transactions are stored (anchored) in the blockchain, which may contain hashes of the off-chain data. If you want traceability, implicit anchoring is obtained by analysing the history. An object with all the hash history does not exist explicitly in the world state.
</p>

## Zero Knowledge Anchors

Another method of anchoring is based on Zero-Knowledge Proofs (ZKP). OpenDSU supports ZKP in two ways. First, DSUs are micro-ledgers that can have the custom code that implements ZKP protocols in any way. The approach taken by OpenDSU is to not base its privacy properties on new and not fully proven cryptography but on avoiding unnecessary sharing. The anchors provide functionality, as we call: zero access anchoring for DSUs, as it is enough to get the essence of blockchain technologies concerning integrity and traceability.

# Explicit Anchors

<p style='text-align: justify;'>An alternative approach is having explicit anchors in the form of smart contracts, which can explicitly store history and timestamps. The data and its lineage are easily reconstructed and validated by reading the smart anchoring contracts. The explicit anchors can be implemented as smart contracts or services outside the ledger.
</p>

<p style='text-align: justify;'>In OpenDSU terminology, we call Explicit  Anchoring when anchoring is only controlled or handled in the smart contracts. This anchoring is flexible regarding custom validations, keeping hashes history and timestamps. Any blockchain or ledger supporting smart contracts can implement this kind of anchor.
</p>
   
<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vSkazYHHPzsh7u3ge86w36wt_KLwK2_GAm9_VhRU4dvSJchwjFM3dYFUUc5VxcNAHAQjDok1xbPcoI6/pub?w=611&h=552" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Diagram 2: Zero Access explicit anchors (AnchorIDs)</b></p>
</div>

<p style='text-align: justify;'>In cases where the amount of anchors is very high, specialised blockchain should be designed to store billions/trillions of Light Anchors (e.g. for pharma industry use cases or use cases with billions of people, DSUs etc.). The KeySSIs are used to obtain AnchorIDs (sometimes called zero access SSIs identifiers). OpenDSU proposes the AnchorIDs as a method of implementation for light anchoring.
</p>

<p style='text-align: justify;'>The anchored data and its lineage are reconstructed and validated by reading the anchor and the history stored off-chain. Minimal on-chain validation is offered but, in many cases, will be accompanied by off-chain validation code (known generally in the OpenDSU terminology under the name of secret smart contracts).
</p>

<p style='text-align: justify;'>The light anchoring proposed by OpenDSU assumes that the blockchain will store only a pair of Anchor Identifiers (AnchorIDs) and a list of hashes. The anchoring control is designed especially for the light anchors and is typically based on digital signatures.
</p>

## Anchors with Attached ZKP Values

<p style='text-align: justify;'>The HashLinks can be accompanied by cryptographically obtained values that can be used to prove computational integrity properties. We call these values with the generic name: ZKP values. For example, these kinds of anchors could contain enough information to prove the current ownership of the DSU.
</p>
        
<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vTcDuRM3kFx-UkydElkFILDbsPko4A34M9vM23IQx6rbZvLDJohAxLgUc_DHBynJr_m62uQGqvi4JrB/pub?w=800&h=550" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Diagram 3: Explicit Anchors with ZKP values attached</b></p>
</div>


<p style='text-align: justify;'>Cryptographic ownership could be implemented with Zero-Knowledge Proofs, or simpler chaining of digital signatures could suffice. The anchoring is simply an association of an AnchorId with a set of SignedHashLinkSSIs.
</p>

<p style='text-align: justify;'>For each blockchain technology, a separate adapter will be deployed. The APIHub will be configured for each blockchain domain to forward anchoring-related requests to the specific adapter.
</p>

<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vQug2xP7V2x4MZba-bwneWxchckZBnXma-VnyhaoTzFG7TO2_e0R5XqADmnn0nQTIf9CXmXtzIkrl37/pub?w=1146&h=150" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Diagram 4: Chain of components needed for anchoring</b></p>
</div>


# Special SSIs for Anchor Values

<p style='text-align: justify;'>For the values in the Anchor, it is possible to use a SignedHashLinkSSI or a TransferSSI.
</p>
## SignedHashLinkSSI

<p style='text-align: justify;'>Signature of the current owner can be described by the following “formula”:
</p>

|sign(hash(anchorID | lastEntryInAnchor |  timestamp | brickMapHash), currentOwnerPrivateKy)|

<p style='text-align: justify;'>The hash and the signature algorithm come from the KeySSI-specific algorithms (vn).
</p>

## TransferSSI

This KeySSI is useful to transfer the control of the anchor to another SSI.

Signature of the current owner means         

|sign(hash(anchorID | lastEntryInAnchor | timestamp | new Public Key), currentPrivateKey)|

**Contributors**


1. <p style='text-align: justify;'><a href="www.axiologic.net">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="www.opendsu.com">www.opendsu.com</a> site.

2. <p style='text-align: justify;'><a href="www.pharmaledger.eu">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.


3. <a href="www.privatesky.xyz">PrivateSky Research Project</a>: MIT licensed content accordingly with the contracts. https://profs.info.uaic.ro/~ads/PrivateSky/


# Annex 1. Contributors

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