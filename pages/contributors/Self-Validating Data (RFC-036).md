---
title: Self-Validating Data 
layout: home
parent: OpenDSU Contributors
nav_order: 7
---


# **Self-Validating Data**

{: .feedback }
A period when the community can review the RFC (comment Docs).


**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)

<!-- TOC -->
* [**Self-Validating Data**](#self-validating-data)
* [Overview](#overview)
* [Introduction](#introduction)
* [2. Technical presentation of SVD](#2-technical-presentation-of-svd)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->



# Overview

<p style='text-align: justify;'>In this document, we introduce the concept and vision of Self Validating Data (SVD), focusing primarily on the applications that could be developed using this technology. Our research so far consists of elements of cryptography, smart contracts, blockchain and executable choreographies.
</p>

# Introduction

<p style='text-align: justify;'>In this RFC, we present usable protocols in decentralized communication and collaboration. Some of the applications developed will be the following: email replacement systems, personal digital assistants, business systems based on executable choreographies, multi-advice book publishing platforms, digital encyclopedias by reinventing the peer-review system, and last but not least, improving the concept of the digital forum.
</p>

<p style='text-align: justify;'>We are pursuing the possibility of replacing email as a user identification system on the Internet. We see a huge opportunity to develop technologies for personal digital assistants that act as secretaries for each user, helping in the process of organization, time management and resource allocation. A huge opportunity exists in terms of business processes and business organization.
</p>

<p style='text-align: justify;'>The presented technologies can enable enterprise applications to model inter and intra-company business processes. We also see an opportunity to create a new generation of wiki-like digital tools and platforms. Tools could be designed to enable more structured communication and collaboration between groups, turning them into a new generation of forums that are more advanced than what exists today.
</p>

<p style='text-align: justify;'>In this direction, we also present the concept of multi-truth books that would allow the collaborative creation of a large group of authors who will work together to create high-quality content that works without the need for censorship or forcing a consensus between authors. In this sense, we will elaborate on the vision of this concept in one of the following chapters.
</p>

<p style='text-align: justify;'>We wish to communicate that such a multi-truth book will reflect a multitude of viewpoints, even if they are seemingly opposite. They will give the reader a much broader perspective of a subject. In this direction, we see a possibility to revolutionize: a way to peer review and provide the vision of a new type of scientific approach in the field of scientific article publishing. A final point would be related to the use of this SVD for the creation of metaverses and, in particular, in relation to the cryptographic ownership of digital objects.
</p>

<p style='text-align: justify;'>The kind of issues the RFC seeks to address are strictly related to the fact that data is increasingly valuable to human society. Many consider data to be “the new oil”. It must be treated as a natural resource and be guarded, extracted, and refined. However, data is not appropriately treated if we look at the information systems used today. Through the way data is used, information is lost about ownership, provenance, who controls it, and who has the responsibility associated with it.
</p>

<p style='text-align: justify;'>Techniques such as datalex, big data and deep learning are based on the idea of accessing the possibility of extracting meaning and significance from this chaotic approach to how we meta-keep information about provenance and control. We believe that a fairer approach is for data to be organized, from the outset, according to the social and human values associated with it.
</p>

<p style='text-align: justify;'>Blockchain technology has strict rules governing the use of cryptocurrencies, and this serves as a clear example of how certain digital bits can sometimes hold unexpectedly significant social value. The essence of this value lies, on the one hand, in the fact that people assign value to these bits, but the mathematics, the cryptography behind it, provides a reason to trust the information of ownership, provenance, and how this data is used. We will present in this RFC self-validating data that tries to compromise a middle ground between the strict but limited approach offered by blockchain technology and the way of managing data in a standard database.
</p>

<p style='text-align: justify;'>The SVD concept uses techniques inspired by blockchain technologies, such as digital signatures and the use of hash functions for past data, in order to provide the typical blockchain properties of data structures. Our vision is for any data structure to behave like a smart contract. This does not mean that we need to use blockchain technologies to store this data, given that the performance and scalability of these blockchain technologies do not support such a generalization, but rather to have some information about the provenance of changes in data structures, to have historical information about who made the changes. This is the trade-off that allows for a much higher level of trust in terms of proper data handling.
</p>

<p style='text-align: justify;'>The important properties we want from SVD structures are the following: getting cryptographic provenance data by postulating the idea that all changes must be digitally signed. This way, there is no doubt about the provenance and accountability of the data changes.
</p>

<p style='text-align: justify;'>Data integrity is guaranteed through the use of cryptographic hash functions for time-stamping the data in order to enable cryptographic integrity verification. No changes to the history of a SVD are allowed. In addition, for situations where the integrity of this data needs to be verified by multiple stakeholders, we can also use the concept of anchoring in a distributed ledger between them. This anchoring allows stakeholders to check the integrity of the data in real time. SVD can be considered ledgers and can be interpreted as mini blockchains, as we will see in the following chapters.
</p>

<p style='text-align: justify;'>The third property of SVD, Self-Validation, attempts to extract the essence of the smart contract concept, which states that data manipulation rules must be prepared before manipulation. This avoids arbitrary manipulation of data and allows all stakeholders (entities interested in verifying the validity of the data’s provenance, integrity and logical correctness) to check the history and validity of the data at any time.
</p>

<p style='text-align: justify;'>The fourth property that we postulate for SVD is compatibility. These data structures can be modified independently. However, practice often requires that multiple SVD instances should be modified in a synchronous manner, which lays the groundwork for the concept of composing SVD instances into an aggregated SVD. Therefore, the previous properties related to data provenance, integrity and self-validation are verifiable for all these SVD instaces grouped together and not separately. We will give examples in the next chapter of why this property is important. As techniques to achieve this aggregation, as well as data integrity, we can mention the concept of anchoring these SVDs in other distributed registries.
</p>

<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vRyeKQ1QNZOdheXtKsaXF1QvREQiCbZyp4OwjIjRkBhjPHggLuOm7faChes96y09E-hob8Vgp5wxsVE/pub?w=959&h=502" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 1: Optimal solutions for different blockchain use-cases</b></p>
</div>
  

# 2. Technical presentation of SVD

<p style='text-align: justify;'>Any SVD should be seen as a data structure shared with multiple untrusting actors. These actors will validate the correctness of the data whenever they use or update the data structure. To enable this validation, the data structures should be represented in a way that reveals the whole change history with provenance metadata and associated code that helps verify the business requirements associated with data. This code can be grouped into “primitive operations” and “state operations”. Primitive operations offer methods of verifying signatures (and help programmers work with cryptography) and interact with the current execution environment of the SVD. The state operations offer the SVD user methods to read and manipulate the current state.
</p>

<p style='text-align: justify;'>In the second part of the chapter, we will present some concrete examples, but for now, we want to introduce the SVD in a general way. We have to assume that the SVDs could be used in heterogeneous environments from a programming language perspective. Therefore, a “glue language” should be established for the “transform state” operations associated with the SVD. The other primitives could be independently implemented in the various environments, but should offer the same behavior as the transformation state primitives.
</p>

<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vQyYClbP_DoDiQjTaQvTbeO43BtRImk9FuH7CjFWN-Lfy40MgBFGRNAkI4wpKJOnmM8xjUUZ_MX4uAw/pub?w=997&h=445" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 2: Main SVD Concepts</b></p>
</div>


<p style='text-align: justify;'>From a “History Representation” point of view, we have identified three major approaches: Blockchains, Directed Acyclic Graphs and Conflict-free Replicated Data Types.
</p>

<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vSkgFTrh7TyokTd1y89XdVwnmsRucangQX2EHwcBKQ367A8Ojczm8ZFoM91joLTk4I-oYMcu_5E-Ixu/pub?w=924&h=395" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 3: SVD History Representations</b></p>
</div>


<p style='text-align: justify;'>In this RFC, all examples and assumptions are made based on the fact that the history representation is a blockchain structure, in the sense that a person has blocks containing one or multiple transactions (commands) that require changes in the state of the SVD. These blocks are assumed to be chained using the hash functions and digital signatures in the classical systems promoted by Blockchain. The only difference compared with a blockchain like Bitcoin is that we are talking about a “micro ledger”, meaning that the chain of blocks focuses on “micro” (refers only to the SVD’s data structure). From all other perspectives, an SVD can be seen as the history of a smart contract.
</p>

<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vTTn7S5GGv1u4kjxoOIBsm2tuSZrfHVe8UXHWxLbrgOVNZX6Rraivli_3S_Ygf9whdfT4DfZSxrpmHM/pub?w=1025&h=608" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 4: An example of history representations as chained commands</b></p>
</div>

<p style='text-align: justify;'>The SVD history can be “anchored” in distributed ledgers or managed and shared independently. By anchoring, we mean direct storage or referencing in a distributed ledger.  By independent, we mean examples stored in local databases or communicated using communication protocols between the interested stakeholders.
</p>

<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vRrDZSGZSwWBRBZDCjezmRkRy3BVOguL5UBqcZA1uf9BFrOo-kVFzCuY1cFVx9OD2Gv_TS5BYwpokmd/pub?w=1001&h=531" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 5: SVD Prototypes</b></p>
</div>


<p style='text-align: justify;'>In the current implementation, we call the leaves in the above tree “SVD prototypes”. In each of these contexts, various actual “SVD types” will be created by implementing actual operations.
</p>

<p style='text-align: justify;'>The difference between an Autonomous SVD and a Blockchain SVD is, by definition, given by how the ledger is implemented. We assume that a Blockchain SVD is a distributed ledger with a consensus mechanism for its whole state. In the case of an Autonomous SVD, the consensus algorithm can be streamlined to happen in parallel and independently for each SVD, therefore obtaining better performance and sacrificing the global consensus between all SVDs. This approach may be the only one available in the case of large volumes of data, but it cannot be used if the consistency between the history of different SVD instances must be ensured.
</p>

<p style='text-align: justify;'>A Blockchain SVD can be conceptualized as SVD history stored in a normal smart contract that guarantees only the ordering of the proposed changes, but does not do any type of off-chain computational integrity check on the history. The external (off-chain) libraries ensure the computational integrity that should be used before reading and updating the SVD state. This resembles the DAML smart contracts programming language approach to ensure blockchain/ledger technology agnosticism.
</p>

<p style='text-align: justify;'>A Microledger SVD is defined as a SVD history anchored in a distributed ledger indirectly, but the actual history is stored in an off-chain storage, for example, in Data Sharing Units (DSUs) or in a storage that can be used to reconstruct  DID documents.
</p>

<p style='text-align: justify;'>On the Independent History serialization, we have identified two primary SVD prototypes: P2P DID Documents and SVD Choreographies.
</p>

<p style='text-align: justify;'>In the case of the P2P DID documents, we imagine the implementation of a P2P DID Method that stores the interaction history between anonymous peers as SVD. For example, future versions of DID Peer could use a SVD library to ensure its security and interoperability.
</p>

<p style='text-align: justify;'>By SVD Choreographies, we propose in this RFC an extension to the swam communication and executable choreography methods proposed. The main idea is that, in the case of executable choreographies, a validation process is required to ensure that only specific peers are allowed to start executable choreographies and that the execution phases follow some predefined business rules. Our research shows that SVD can also be implemented as a robust verifying method for the messages transmitted between the participants in a choreography. The only minor disadvantage is that the whole history is required for validation, but in future research, we plan to analyze methods to improve this aspect.
</p>

<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vTA2-NHiQJOd0lbTwk4XG6Za89l6i6pZlBSefeaN38wBJCFIzYzRN-m8m7Px-NRHFh7LKEpw5r7I3EH/pub?w=911&h=334" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 6: Simplest SVD implementation</b></p>
</div>

<p style='text-align: justify;'>As exemplified in Figure 6, the most straightforward SVD implementation is by creating a command for each change in the data structure and then reconstructing the SVD state in each context where the SVD data is required.
</p>

<p style='text-align: justify;'>In conclusion, for this formal introduction of the generic SVD concept, we cannot stress the fact that SVD usage should follow the lifecycle represented in the following figure:
</p>

<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vTHr5RJYeEn-MpqqYngVJfnDpEyfDsM-qD1GNcW9_SpicgxWF3RmfJP0tL-XklDJfdN3_VRXXIuGtEy/pub?w=947&h=621" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 7: SVD lifecycle</b></p>
</div>


<p style='text-align: justify;'>Initially, the SVD history is loaded in the desired context, then the code for replaying the history should be associated, and, after the correct code execution, a valid state of the SVD is obtained. In this validated state, one can read data or propose new changes.
</p>

<p style='text-align: justify;'>This lifecycle is nothing new to a blockchain programmer. However, this RFC proposes a method to generalize this approach to arbitrary data structures with the hope of obtaining most of the security benefits offered by the current blockchain system, while being able to create scalable systems. This RFC tries to present to the scientific community new concepts and will not go into further detail regarding the actual implementation. The actual implementation we have developed uses concepts and assumptions from the OpenDSU open-source system regarding keys management, DIDs, DSUs etc. However, we are confident that the SVD concept deserves a place in the conceptual universe beyond actual implementation.
</p>

<p style='text-align: justify;'>In the near future, we will describe the vision of a new set of internet applications that can become adoption vehicles for the SVD concepts and that are feasible to implement due to the SVD concept.
</p>


**Contributors**


1. <p style='text-align: justify;'><a href="www.axiologic.net">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="www.opendsu.com">www.opendsu.com</a> site.

2. <p style='text-align: justify;'><a href="www.pharmaledger.eu">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.


3. <a href="www.privatesky.xyz">PrivateSky Research Project</a>: MIT licensed content accordingly with the contracts. https://profs.info.uaic.ro/~ads/PrivateSky/


# Annex 1. Contributors

| **Current Editors**                  | **Email**                                |
|:-------------------------------------|:-----------------------------------------|
| Sînică Alboaie                       | sinica.alboaie@axiologic.net             |
| Cosmin Ursache                       | cosmin@axiologic.net                     |
| Teodor Lupu                          | teodor@axiologic.net                     |
| Andi-Gabriel Țan                     | andi@axiologic.net                       |
| **Contributors Axiologic Research**  | **Email**                                |
| Adrian Ganga                         | adrian@axiologic.net                     |
| Andi-Gabriel Țan                     | andi@axiologic.net                       |
| Cosmin Ursache                       | cosmin@axiologic.net                     |
| Daniel Sava                          | daniel@axiologic.net                     |
| Nicoleta Mihalache                   | nicoleta@axiologic.net                   |
| Valentin Gérard                      | valentin@axiologic.net                   |
| **PrivateSky Contributors**          | **Email**                                |
| Alex Sofronie                        | alsofronie@gmail.com (DPO)               |
| Cosmin Ursache                       | cos.ursache@gmail.com (UAIC)             |
| Daniel Sava                          | sava.dumitru.daniel@gmail.com (HVS, AQS) |
| Daniel Visoiu                        | visoiu.daniel.g@gmail.com (SGiant)       |
| Lenuța Alboaie                       | lalboaie@gmail.com (UAIC)                |
| Rafael Mastaleru                     | rafael@rms.ro (RMS)                      |
| Sînică Alboaie                       | salboaie@gmail.com (UAIC)                |
| Vlad Balmos                          | vlad.balmos@gmail.com (Code932)          |
| **PharmaLedger Contributors**        | **Email**                                |
| Ana Balan                            | bam@rms.ro (RMS)                         |
| Bogdan Mastahac                      | mab@rms.ro (RMS)                         |
| Cosmin Ursache                       | cos@rms.ro (RMS)                         |
| Rafael Mastaleru                     | raf@rms.ro (RMS)                         |



References
https://github.com/OpenDSU/svd
https://docs.google.com/document/d/1Wg31RwWJLyuBo7EgYDPMZVzQvZXBtMP318UJ9F9x7K8/edit#heading=h.o98eyr3s4xy6 


