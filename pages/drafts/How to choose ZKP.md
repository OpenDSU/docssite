---
title: How to choose ZKP
layout: home
parent: OpenDSU Drafts
nav_order: 7
---

# **How to choose a ledger. When to choose ZKP**
{: .no_toc }

{: .draft }
A period when the community can review the RFC (comment Docs).

**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.
This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)

<!-- TOC -->
* [How to choose a ledger. When to choose ZKP](#how-to-choose-a-ledger-when-to-choose-zkp)
* [Abstract](#abstract)
* [1. No size fits all: Choosing the right ledger](#1-no-size-fits-all-choosing-the-right-ledger)
* [2. Blockchain use cases: auditability or trustless collaborations](#2-blockchain-use-cases-auditability-or-trustless-collaborations)
* [3. OpenDSU and Confidentiality Constraints. OpenDSU and ZKP](#3-opendsu-and-confidentiality-constraints-opendsu-and-zkp)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->

# **Abstract**

# **1. No size fits all: Choosing the right ledger**

<p style='text-align: justify;'>A Distributed Ledger is not located somewhere abstractly in the cloud, but is under the control of concrete entities. These entities provide access to a replica of a ledger via a “gateway” controlled by somebody. External customers can access the blockchain through these "gateways". From this perspective, we identified three patterns of interaction with distributed ledgers:</p>

* CGA (Centralised Gateway Archetype): the clients trust a central gateway;
* DGA (Decentralised Gateway Archetype): the clients ask multiple gateways and decide who to trust by a form of voting;
* NGA (NO Gateway Archetype): is based on the DGA plus a communication method between the clients and gateways that prevent any profiling or censorship attempts from the gateway (e.g. TOR).

<p style='text-align: justify;'>In the table above, we provide a crude rating of the previously introduced system archetypes by also exploring the effects that different gateway archetypes have on a variety of performance and security properties. We employ a Likert scale for rating purposes, where a value of 1 entails low guarantees regarding a specific property up to a maximum value of 5. The scale is relative to the set of options considered here, e.g. we intrinsically assume that BFT DLs are the worst in terms of performance compared to SLs. For each of the examined properties, we treat each archetype in a “black box” fashion, i.e. we are concerned with the guarantees regarding a specific property that it provides to the clients interacting with it. Cells in the table that have one value imply that it applies to all gateway archetypes for that particular property. We model the service provided by each archetype as an abstract state machine, i.e. it is composed of a persistent state and a state transition function. We assume a transaction-based interaction pattern among clients and the individual stateful archetypes. Clients submit (signed) arbitrary requests (transactions) to the service, which are input to the state transition function, along with the service’s state, and are executed in an atomic fashion. Note that the notion of privacy in the examined properties here relates to the service’s ability to monitor network-related traffic and perform correlations to derive information about the attributes of the client (or entity that is issuing the requests in general), i.e. we do not examine privacy regarding the contents of the transaction itself.
As a general rule of thumb, combinations of centralized (system and gateway) archetypes provide the best possible performance in terms of latency and throughput, as illustrated in the following Diagram.</p>

<p style='text-align: justify;'>In the table above, we provide a crude rating of the previously introduced system archetypes by also exploring the effects that different gateway archetypes have on a variety of performance and security properties. We employ a Likert scale for rating purposes, where a value of 1 entails low guarantees regarding a specific property up to a maximum value of 5. The scale is relative to the set of options considered here, e.g. we intrinsically assume that BFT DLs are the worst in terms of performance compared to SLs. For each of the examined properties, we treat each archetype in a “black box” fashion, i.e. we are concerned with the guarantees regarding a specific property that it provides to the clients interacting with it. Cells in the table that have one value imply that it applies to all gateway archetypes for that particular property. We model the service provided by each archetype as an abstract state machine, i.e. it is composed of a persistent state and a state transition function. We assume a transaction-based interaction pattern among clients and the individual stateful archetypes. Clients submit (signed) arbitrary requests (transactions) to the service, which are input to the state transition function, along with the service’s state, and are executed in an atomic fashion. Note that the notion of privacy in the examined properties here relates to the service’s ability to monitor network-related traffic and perform correlations to derive information about the attributes of the client (or entity that is issuing the requests in general), i.e. we do not examine privacy regarding the contents of the transaction itself.
As a general rule of thumb, combinations of centralized (system and gateway) archetypes provide the best possible performance in terms of latency and throughput, as illustrated in the following Diagram.</p>

<p style='text-align: justify;'>Tamper resilience and auditability are solely dependent on the system archetype and more specifically its degree of centralization and fault model. SL provides the worst tamper resilience guarantees which, however, can be improved when the service’s state is periodically anchored in a BFT (public) blockchain.
</p>

<p style='text-align: justify;'>In regards to DL, we consider that its total ordering across all transactions, even in the crash fault model, is considered fairly equivalent to the tamper resilience guarantees of “SL & Anchoring”. Regarding auditability, the interesting cases are “SL & Anchoring” and “DL & Anchoring” where these exhibits guarantee better auditability in the context of this property, compared to their non-anchored counterparts. However, we stress that these guarantees are directly dependent on the anchoring period, i.e., how frequently the service’s state is anchored on the BFT (public) blockchain. Depending on the use case of these system archetypes, the auditability guarantees of the aforementioned approaches may or may not be acceptable.
</p>

# **2. Blockchain use cases: auditability or trustless collaborations**

<p style='text-align: justify;'>The following table maps the different cases where blockchain is useful for auditability. This table is created based on the insight that there is a risk of paying an unnecessarily high price to use blockchains that provide worldwide transparency and strict consistency as fast as possible. Most enterprise use cases are nothing not like cryptocurrency payments. One simple argument for this idea is this: how billion-dollar industries might have survived without blockchains.
</p>

<p style='text-align: justify;'>Even for cases when new kinds of collaborations between companies or people are enabled by blockchain technologies, such strict consistency of all the data from the ledger is very wasteful and unnecessary. The above table identifies 5 areas for the potential business cases and a wise architect should propose the usage of the right ledger for each use case.
The table should be clear enough by itself, except maybe the idea of Independent and Dependent Business Logic. By Business Logic we understand business processes that are represented digitally by smart contracts instances, blockchain-related service orchestrations, or executable choreographies. These business processes, from the point of view of auditability, have more than one stakeholder. Otherwise, the usage of blockchain is questionable. An immediate observation is that, in most cases, the business logic of a business process does not depend on the state of other processes. In this case, processes could have interactions and can be influenced by other external events (by the real world), but not have dependencies on the digital content anchored in the blockchain and created by other blockchain-anchored business processes. This observation makes a huge difference in how you choose the ledger and what can be done off-chain to obtain blockchain-specific characteristics without paying the price of the global consensus. For independent Business Logic use cases, it is feasible to move the validation outside of the blockchain and keep the blockchain only to provide the strict ordering of the events required for auditability.
The OpenDSU way of thinking starts from the idea that having a single blockchain technology or a single blockchain deployment pattern that covers all the use cases of an industry is hardly friendly, benevolent, or competent advice. It will not work, or the price will be astronomical high. With OpenDSU, we propose a unified approach for the architecture, reusable code where possible, but we do not fix things regarding the blockchain technologies that can be used and we do not fix deployment patterns. The anchoring can and will be implemented in ledgers with different capabilities and deployed in different ways. The deployment part is essential because, even with the most advanced privacy-preserving technology available, the most sensible decision is to not share data, anchors, zero-knowledge proofs, anonymized transactions etc. if there is no real business or technical need for sharing. The major goal of OpenDSU is to facilitate sharing and auditability in the best privacy-preserving way.</p>


# **3. OpenDSU and Confidentiality Constraints. OpenDSU and ZKP**

<p style='text-align: justify;'>We have identified 3 major use-case categories where blockchain can be used to solve business problems between multiple companies (choreographies). Each use-case category has different constraints regarding confidentiality and verifiability, as explained in the following table:
</p>

<p style='text-align: justify;'>With the hope that the above diagrams are self-explanatory, we will focus our attention on ZKP, because ZKP is sometimes positioned as the silver bullet of solving blockchain’s privacy issues.
ZKP is a quite new and complex topic. Many presentations do not present ZKP limitations, drawbacks, difficulties, and risks. Unfortunately, a presentation that does not present the known boundaries sounds more like a vision or marketing material and raises suspicions that it might be just hype.
In general, many presentations about ZKP are made from a cryptographer’s or a mathematician’s point of view, who just labels data as public, private etc. However, as an engineer, you want to know how to manage all that complexity, from where you get and where you store private and public data, how it is communicated etc. Usually, some abstract primitives are presented by how you compose them properly. It is not simple nor obvious.

From an OpenDSU perspective, ZKP is sometimes presented as a silver bullet because:

* It sounds generic and perfect when you ignore risks, scalability issues and difficulties related to how you store and share the private data. Without a doubt, as a research direction, it is interesting and very cool.
* It justifies the price paid for the computation made by the third parties for validation. However, this validation is unnecessary for most enterprise use cases, because a simpler approach exists and OpenDSU Bluepaper is presenting it: anchoring the result of the computation in blockchain and only letting the interested parties validate it when they need to act on it.
OpenDSU aims to solve the off-chain (near-chain) storage and computation issues and it is agnostic on ZKP usage. However, it promotes the idea that, in most cases, the magic of ZKP can be avoided and easy-to-understand solutions are available.

To deepen this discussion, there are two major directions in which we could use  ZKP in the OpenDSU context:
* Patients/companies can show ZK-based verifiable credentials to prove something to a verifier. However, ZKP opens the possibility that a holder of a credential will give it to another party (e.g. for material benefits). For now, we fail to see how this weakness can be solved. The case for ZKP usefulness is not clear when you need to deanonymize the holder or you need a trusted intermediary to guarantee the unicity in a set of holders.
* Some sort of smart contracts between a small group of companies could be secured with ZKP. However, you can keep data confidential with encryption and share the right keys and data with the right members of the group. Anything more than this is useful only if you need a third party for validation purposes but you want to hide data from the third party. OpenDSU can achieve computational integrity by reducing the role of the third party to just a key/value database with minimal validation (and without ZKP).

Typically, the third party creates some useful software and it can promote and commercially position its solution in some form of “blockchain as a utility”. In most cases, the anchoring/DSU model can remove the need for revealing any data to the software creator or the utility provider. DSUs are moving the computation off-chain, that is, in wallets or agents controlled by participants, and not by the utility providers. In one way or another, even with ZKP, you should have the computation on encrypted data off-chain (to generate proofs).
We recognize that OpenDSU’s validation made at the anchoring level could not suffice. The only major disadvantage is the risk of spamming: an attacker creates numerous versions of DSUs to block the progress of some business process. In enterprise solutions, this attack will be noticed and the attacker can be punished. There are cases for ZKP when the off-chain logic involves choreographies between many companies and you want them all to be able to validate all transactions without revealing data to others. The question is whether in most situations simpler and safer solutions can be found based on digital signatures and encryption. These boring solutions will suffice in many cases and are safer and much simpler to understand and program. ZKP sounds perfect and general for all cases, but there is a price to pay, that is difficult to estimate. The risks of new and complex cryptography, but also the potential performance issues when scaling to the level of millions/billions of people/processes are reducing the appeal for ZKP usage.</p>

 
**Contributors**


1. <p style='text-align: justify;'><a href="https://www.axiologic.net/">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="https://www.opendsu.org/">www.opendsu.org</a> site.

2. <p style='text-align: justify;'><a href="https://pharmaledger.org/">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.

3. PrivateSky Research Project: MIT licensed content accordingly with the contracts. 
<a href="https://profs.info.uaic.ro/~ads/PrivateSky/"> https://profs.info.uaic.ro/~ads/PrivateSky/</a>

# **Annex 1. Contributors**

| **Current Editors**                  | **Email**                                |
|:-------------------------------------|:-----------------------------------------|
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
