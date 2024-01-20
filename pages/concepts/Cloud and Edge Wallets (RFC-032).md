---
title: Cloud and Edge Wallets 
layout: home
parent: OpenDSU Concepts
nav_order: 10
---

Cloud and Edge Wallets  (RFC-032)




{: .accepted }
The proposal has been accepted and has an implementation.


Document Maintainers: Andi Gabriel Tan 2022. List of other contributors in Annex. 1.

Copyright: MIT license

Copyright

Copyright (c) <2018-2022> Axiologic Research and Contributors.

This document is licensed under MIT license:

(https://en.wikipedia.org/wiki/MIT_License)


Abstract

This RFC shows the particular importance of the “wallet” concept so as not to lose the benefits of blockchain. In this document, we present the “Clouds Agents” and “Edge Agents” concepts, the difference between them, and the “No size fits all“ principle.
1. Introduction

To securely exchange data with OpenDSU, the actors will need an OpenDSU agent or wallet that will take care of all operations related to OpenDSU, such as DSU storage key, storing the bricks on a local or remote server, and anchoring the key anchor ID in the blockchain. These agents can be used either locally (which is optimal for obtaining data self-sovereignty) or remotely,  in the cloud, when needed (for example, if you need the agent to be available 24 hours a day). We will often have a mix of local agents (or edge) – where the most sensitive data will be stored – and cloud agents – to get the benefits of cloud storage, such as availability.

Blockchain benefits are immutability (involves chaining permanent transaction blocks), trustlessness (provides trust in the network and not in a single entity - digital signatures and identities appear), decentralization (intermediaries do not own the system and they can easily change service providers), transparency, data privacy and digital sovereignty. Transparency is closely related to immutability and trustlessness: it can quickly become a source for data leakages at any time. Data privacy is possible, but it is difficult. Native encryption or keeping hashes in the blockchain is usually not enough; metadata leakage can occur, which can be a problem. Digital sovereignty involves encrypting all data and reducing key exchange (data minimization). These benefits are reduced until the user gets to interact with the application. Blockchain architecture's benefits can be lost depending on the architecture.

To avoid this, OpenDSU gives particular importance to the Wallet idea. A Wallet, by definition, is a software system under an agent's control. It is a system that controls encryption keys or signature keys. The Wallets are used for storing different types of keys and users' private data. We have identified two types of wallets: the Cloud Wallet and the Edge Wallet.
2. Cloud Agents

Cloud Agents tend to compromise many of the properties of privacy and data control, for example, digital sovereignty or decentralization. Data stored in the DSU is only accessible with the help of associated keys. These keys will be resolved to obtain the necessary information about brick repositories or anchoring services that will allow agents to rebuild the DSU in the execution environment.

Agents are where the OpenDSU SDK is instantiated, or the environment in which DSU rebuild is done. The name suggests that data control is done in the Cloud and not near user control. Basically, the notion of Cloud Agents or Cloud Wallets is used when OpenDSU instantiation happens somewhere in the cloud. The cloud agent concept and how to manage keys will be detailed in another document (see RFC 033).

OpenDSU is also designed for enterprise solutions, where we have to give much attention to support for Cloud Agents.

More details are available in Cloud Wallets and KMSes (RFC-033).

Figure 1: Cloud Agents - DSU Wizard

In the case of using a Cloud Agent, we have instantiated a wallet at the APIHub level. Remote enclaves (see RFC 33) will generally be used to implement these wallets.

The figure above suggests that a client has access to APIHub and Cloud Agent. The Cloud Agents concept has a larger spectrum, but we recommend using remote enclaves according to RFC 097. OpenDSU introduced the enclave concept to allow us to store sensitive data and control access to it. All operations with secret keys, signatures, and decryption are done at the enclave level.

Cloud Agents are easy to integrate into existing systems, but their use tends to create a specific type of centralization, a confident trust in a specific node. Depending on the level at which the problem appears, difficulties may occur.

More details on Enclaves are available in Enclaves (RFC-097).
3. Edge Agents

Generally, the Edge Wallet is necessary when you want as much decentralization and digital sovereignty as possible.

In the case of instantiating OpenDSU in a browser on a device that is in the user's hand (e.g. mobile phone), we can talk about Edge Agents and, by extension, about Edge Wallets. The concepts "Wallet" and "Edges" are not the same.

Figure 2: Edge Agent - Wallets (service works)

An Edge Agent can be a web application in the form of an SSApp (see RFC 034). It is an application that has custom code in which there may appear, in particular cases, problems to solve. Custom code means any code or any metadata that is part of the application. Custom code is software code programmed by the partner, the end-user, or any third party. It is used to connect two systems.

The Edge Agent, besides custom code, has at its core the Wallet concept to ensure a better decentralization of trustless properties. In our implementations that integrate the wallet in the browser, we use a concept called trust-loader.

Generally, the safest way to implement these Edge Agents is to use a mobile or a native application, which, based on our technologies, can be implemented as a wrapper as a container for a browser, so that we can create portable applications. The trust is obtained from the fact that it is a notable instance, particular to each agent user. In some implementations, the APIHub is embedded inside the mobile Edge Agent.

More details on SSApps are available in SSapp Implementation (RFC-034).
4. DSU: No size fits all

Figure 3: OpenDSU - No size fits all

In OpenDSU, we have a "No size fits all" principle. In an ecosystem called the "Digital Trust Ecosystem", we have big companies that will tend to use Cloud Agents because they respect their internal rules about data management, security policies, backup etc.

In the case of smaller companies or simple internet users (e.g. patients), respecting their rights to digital sovereignty rather than creating a more secure and decentralized solution means using OpenDSU in a way that does not give the server access to their data. Specifically, they choose to use Edge Agents and trust a service provider to host blockchain domains, avoiding Cloud Agents. Of course, this approach can create problems for architects in the way of implementation, but in some situations, it cannot be avoided.
5. Cloud Agents vs Edge Agents

Figure 4: Cloud Agents vs Edge Agents

In the figure above, we can see the difference between Cloud Agents and Edge Agents usage modes. On the left side, we have agents that can depend on a Cloud Agent, and on the right side, there is no Cloud Agent, and each agent can be free to use any replica/node in the blockchain in the system.

In other words, the difference is in the way agents are attached. On the left, they are attached to a single replica or organization. On the right, they can change the organization that offers them the specific OpenDSU services: anchoring, bricking, message queue etc.
Conclusions

We are trying to adapt our solutions and concepts to not be so strict. We are trying to make them more flexible and applicable to large areas.

Cloud and Edge Agents are positive examples where OpenDSU technology is available to be used in many cases. The technology also has concepts that give total control, but sometimes a user can give up this control to get other new advantages while overall keeping the OpenDSU benefits.

Big companies prefer to use Cloud Agent for employee database work because when an employee leaves, that data can still be used by the company, or if a colleague is ill, then the data can be used by other colleagues who are at work. On the other hand, our first implementations of APP Edge Agents (e.g. mobile applications) use the exact mechanisms of companies. OpenDSU principles are still respected because everything happens only on the user's terminal.




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