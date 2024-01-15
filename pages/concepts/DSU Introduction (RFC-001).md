---
title: DSU Introduction (RFC-001)
layout: home
parent: OpenDSU Concepts
nav_order: 1
---
# DSU Introduction (RFC-001)
Accepted
{: .label .label-green } The proposal has been accepted and has an implementation.

**Document Maintainers: Andi Gabriel Tan 2022. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright**
Copyright © 2018-2022 Axiologic Research and Contributors.
This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)
| Contributors               | Description                                                         | 
|:-----------------------|:------------------------------------------------------------------------|
| Axiologic Research www.axiologic.net                     | New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the www.opendsu.com site.                                                      | 
| PharmaLedger Project Members www.pharmaledger.eu             | Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.                                                                 | 
| PrivateSky Research Project                    | Initial content (www.privatesky.xyz). MIT licensed content accordingly with the contracts.https://profs.info.uaic.ro/~ads/PrivateSky/                                                         | 

Table of Content
+ Abstract
+ Overview
+  Data Sharing Unit (DSU)
+  Brick Storage
+ Anchoring
+ DSU Mounting
+ DSU Reconstruction
+ KeySSI
+ DSU Use Cases
7.1. DSU Based Self Sovereign Applications (SSApps)
7.2. DSU-Based Web APIs
7.3. DSU-Based Web APIs
+ OpenDSU and IPFS
+ Annex 1. Contributors

## Abstract
This RFC introduces the critical components of the OpenDSU project, such as DSU, as well as domain anchoring and brick storage services. Then, it introduces some essential mechanisms known as DSU mounting and DSU reconstruction. It also explains RFC’s role of keySSIs in the management of the DSU. Finally, it presents some primary use cases of DSUs.

## Overview
The main concept, the central thread on which OpenDSU is created, is based on Digital Sovereignty. Individuals, citizens, enterprises, organizations, or states should have as much control over data as possible and not give control to intermediaries.

Following our research in PrivateSky, but also according to those existing in OpenDSU, we have noted that having a single large blockchain containing all the world’s data is impossible. The vision envisaged from specific projects, for example, Ethereum, in which there is only one world in which everything happens uniformly, does not seem realistic. Therefore, the OpenDSU team introduced the concept of Hierarchical Blockchains, which are several blockchains that have a naming and identification system. Everything is done through blockchains, providing interoperability between applications, meaning it does not matter in which blockchain we anchor our data. We approach the data from the perspective of DSUs (Data Sharing Units), so that is where the name OpenDSU comes from. OpenDSU is an evolving standard that creates data storage systems that are off-chain but permanently anchored in a blockchain to obtain security properties and provenance to ensure the data’s quality.

![alt text](https://docs.google.com/drawings/d/sz8cyVsXZqyqpKqSxS7vqsg/image?parent=e/2PACX-1vQgUa9ZZNk5FLV_zH_jfloqgvN7EBzPzsGUXnSo2wFqHAsJYpPYLiD87wVGFIE3CncyPynHAODnwokA&rev=1&drawingRevisionAccessToken=7o1Qr4tz1E8Xgg&h=372&w=596&ac=1 )

**Figure 1: Data Sharing Units (DSU)**

Starting from the user, we first have the User environment where DSUs exist and KeySSIs are managed. These environments are also called agents. An agent is software that can be located either in the cloud or locally (on a computer or a mobile). This software is in charge of managing special identifiers named KeySSIs, and it is also responsible for the creation and reconstruction of DSUs. When a keySSI is used to create a DSU, the agent will use anchoring and brick storage from the domain associated with the key (here by default) to ensure the DSU will be accessible for other users to access the DSU if they own the corresponding keys.

By using the anchor identifier of the DSU, the agent will be able to anchor in the ledger a reference to one BrickMap in the Brick storage.  Because the DSU is divided into many individual bricks before being stored, the map is necessary to keep track of all the bricks that form the DSU.

Now, owners of the same key or a special derivation of this key can find the reference to the map in the anchoring service. With this map, the agent can reconstruct the DSU in the execution environment for the user.


## Data Sharing Unit (DSU)


From the perspective of OpenDSU, a DSU is an entity that exists temporarily in an execution environment (usually in a sandboxed container). Logically, a DSU can be understood as a micro-file system containing data and code booted in a sandboxed environment. It can also be understood as a key/value micro-database (each key being the path to a file and each value the contents of that file).


![alt text](https://docs.google.com/drawings/d/sgqHMdkcmeSZl8XLRGz5lVA/image?parent=e/2PACX-1vQgUa9ZZNk5FLV_zH_jfloqgvN7EBzPzsGUXnSo2wFqHAsJYpPYLiD87wVGFIE3CncyPynHAODnwokA&rev=1&drawingRevisionAccessToken=ZRBIjDNAMXZRCA&h=332&w=465&ac=1 )

**Figure 2: DSU usage pattern**

The Execution Environment interacts with a DSU in 3 major ways:
1.Read/write files from the file system;
2.Read/write keys;
3.Call the DSU APIs

We will need the following concepts introduced in this RFC to make these interactions possible.

![alt text](https://docs.google.com/drawings/d/sQ6R13i9lx6kCdSn1_DLjvA/image?parent=e/2PACX-1vQgUa9ZZNk5FLV_zH_jfloqgvN7EBzPzsGUXnSo2wFqHAsJYpPYLiD87wVGFIE3CncyPynHAODnwokA&rev=1&drawingRevisionAccessToken=tBOc_oHloZXnCA&h=55&w=601&ac=1)

**Figure 3: Concepts**

## Brick Storage

Brick Storage represents a core element of the OpenDSU ecosystem. Bricks Storages are simple web services that store and retrieve bricks for clients that know the brick’s hash (or id). The basic implementation of Brick Storages is straightforward and offers a tool that works well in an open and permissionless network.

DSUs are stored as “bricks” in a “brick storage” and are encrypted using symmetric encryption. The bricks can be stored locally, remotely in the cloud, or any other storage media. The essential key for decrypting bricks is a secret key called KeySSI. Each Brick is encrypted with a different key. Special bricks called BrickMaps store the encryption keys for the Bricks they are referencing. These BrickMaps, unlike other bricks, are encrypted with KeySSIs.

DSUs are flexible and can be updated (and even deleted). These get implemented by having multiple BrickMaps referenced within the same anchor, allowing us to have a history of each DSU.

![alt text](https://docs.google.com/drawings/d/sFiVXNSi7gw0tgAC4C9DJRg/image?parent=e/2PACX-1vQgUa9ZZNk5FLV_zH_jfloqgvN7EBzPzsGUXnSo2wFqHAsJYpPYLiD87wVGFIE3CncyPynHAODnwokA&rev=14&drawingRevisionAccessToken=AjX9xqAaNVds1g&h=304&w=269&ac=1)

**Figure 4: Brick Storage & Brick Map**

Supplementary sophistications are required only in cases where we have to implement access revocation to the shared data or implement an expiration date for access to data as requested by a third party.
More details are available in Brick Storages (RFC-003).

## 3. Anchoring

DSUs are anchored in the blockchain, and the anchoring feature brings the capability of digitally signing data and code in the initial version and any subsequent versions. In some situations, use cases can exist in which a centralized system provides DSU anchoring. For example, a use case that only needed anchoring could support better internal auditability. This example is excellent, as it could be later decentralized if needed or required.

More details are available in Anchoring (RFC-005).

## 4. DSU Mounting

The code in a DSU instance is not copied to each instantiation. Starting from the perspective that a DSU can be seen as a file system, this file system allows the mounting of a DSU in another DSU. The DSU mounted in all instances and containing the code is called DSU Types. This DSU Type behaves similarly to a class compared to its instances. The DSU Type is a DSU in itself and, as such, is anchored and must have credentials (digital signatures) that mark it safe for use. It should also be noted that a DSU Type can be updated, leading to the automatic update of all instances. We also name the code from DSU Type as DSU constitution.

DSUs are micro-ledgers and should provide security properties similar to smart contracts. Therefore,  the initial version of the DSU Type contains the code needed to validate new versions of the DSU Type. After updating the DSU Type itself, the code from the DSU Type will check that the current DSU versions follow the rules defined by the DSU Type constitution.

![alt text](https://docs.google.com/drawings/d/sbI8keGJl9H-pj3-EY9e1Ow/image?parent=e/2PACX-1vQgUa9ZZNk5FLV_zH_jfloqgvN7EBzPzsGUXnSo2wFqHAsJYpPYLiD87wVGFIE3CncyPynHAODnwokA&rev=29&drawingRevisionAccessToken=x_2_fKPl5QCRmQ&h=135&w=529&ac=1)

**Figure 5: DSU Instances and DSU Types**

We can also observe that DSU mounting can mount arbitrary DSUs and make them look like they are part of the root DSU. The mounting of the code is just an example of the concept's usefulness. DSUs are light containers that can boot minimal “operating systems” that we call DSU Types. What we obtain is a file system with mounting concepts. This booting will usually be called DSU Reconstruction.

More details are available in DSU Mounting (RFC-006).
More details are available in DSU Types (RFC-007).

## 5. DSU Reconstruction

DSUs are encrypted at rest and in transit using a key derived from an identifier we call KeySSI. A DSU can be imagined as a multi-directory file system with granular access and security properties for each “directory”. Instead of being stored as a whole, the files are stored as encrypted bricks. That is why we need DSU reconstruction to reassemble our files, and we reassemble them only for a limited time in an “execution environment”. These OpenDSU mechanisms implement the usage of “client-side encryption” as a means to enable data self-sovereignty.

![alt text](https://docs.google.com/drawings/d/sxxX07ouZIs_uz-pM7CehWg/image?parent=e/2PACX-1vQgUa9ZZNk5FLV_zH_jfloqgvN7EBzPzsGUXnSo2wFqHAsJYpPYLiD87wVGFIE3CncyPynHAODnwokA&rev=241&drawingRevisionAccessToken=ZaZWcUQzP29xJA&h=342&w=493&ac=1)

**Figure 6: DSU reconstruction**


An execution environment is typically a sandbox that obtains the correct key (a KeySSI) to gain access rights to decrypt the DSU. This “execution environment” can exist externally on the client/edge device or elsewhere, such as in the cloud or a server. OpenDSU implementation standards propose the usage of JavaScript VMs (Virtual Machines) and web assembly to deploy these sandboxes.

Sandboxes will perform a “DSU reconstruction” operation that can be compared to the booting of a computer and is designed to recognize different “DSU Types” that will control how validation of subsequent versions of DSUs will be handled.

More details are available in DSU Reconstruction (RFC-008).

## 6. KeySSI

The KeySSI concept's purpose is to provide blockchain-anchored identities for things and processes, and companies and individuals. They are used as secret symmetrical encryption/decryption keys for DSUs (or parts of the DSUs).

More details are available in KeySSI (RFC-002).

## 7. DSU Use Cases

Currently, DSUs can be used in three ways:
+ As a full-stack to develop Self Sovereign Applications (SSApps);
+ As a complementary alternative by exposing DSU APIs to Web APIs;
+ As instances in a “Security context”.

These three use cases will be developed in the following subsections.

7.1. DSU-Based Self Sovereign Applications (SSApps)

![alt text](https://docs.google.com/drawings/d/sD3RniCRYQaNZDZaBiIEOOg/image?parent=e/2PACX-1vQgUa9ZZNk5FLV_zH_jfloqgvN7EBzPzsGUXnSo2wFqHAsJYpPYLiD87wVGFIE3CncyPynHAODnwokA&rev=1&drawingRevisionAccessToken=u6kir2jtScVgLw&h=193&w=513&ac=1)

**Figure 7: SSApps as DSUs containing UI Code**

A DSU can contain any code (e.g., HTML, CSS, JS) required to launch and run an application in a browser. Also, it can be like any other web application. OpenDSU proposes standardization of the usage of APIs, and it can load web applications from DSUs. These particular kinds of web applications will be called Self Sovereign Applications (or SSApps). Besides anchoring and brick storage, SSApps have no dependency on any server, as their code and data will be loaded from the corresponding DSU on the client side. Saying Client Side here is a misnomer, as the DSU can reside on a company server farm or the cloud.


**The main benefits of the SSApp approach:**

+ The code for UI (and business logic) is signed, secured by a DTE (Distributed Ledger), and verifiable by the edge client environment.
+ Data Self-Sovereignty requires Self-Sovereignty at the application level in disintermediation. The blockchain, anchoring, and brick storage are zero-access services consumed from the cloud. A server is simulated (using service workers) by the DSU instance, but this “server” runs on the edge device. Therefore, the data leakages are drastically limited compared with a classical web application.
SSApp Architecture is described in SSApp Architecture (RFC-028).
SSApp Implementation is described in SSApp implementation (RFC-034).

### 7.2. DSU-Based Web APIs

DSU APIs become available after DSU reconstruction is complete (recall from earlier: DSU reconstruction is similar to booting) in all the OpenDSU execution environments implemented for a particular use case. This thing allows for the DSU to be available not only on edge devices but also on servers and the cloud if desired. In a server-side environment, in many cases, it will be required to communicate with systems that are listening for requests on Web Services, such as Web APIs, Restful APIs, Web RPC, SOAP, etc. In these cases, the DSU APIs could be wrapped, and specific APIs could be implemented.

![alt text](https://docs.google.com/drawings/d/sosViIB2U1S36RK7KxiBxUw/image?parent=e/2PACX-1vQgUa9ZZNk5FLV_zH_jfloqgvN7EBzPzsGUXnSo2wFqHAsJYpPYLiD87wVGFIE3CncyPynHAODnwokA&rev=1&drawingRevisionAccessToken=XXyVGQgGjJ2xMQ&h=212&w=437&ac=1)

**Figure 8: Web APIs**


The OpenDSU layer one specifications do not enforce any special limitation on these Web APIs. We still want to draw attention to possible incompatibilities (described as differences in security and privacy properties) between DSU and Web APIs. The decentralised nature of DSU APIs requires the possession of an adequate KeySSI.

The Web APIs are secured mainly by a delegation of trust because all the calls are sent to a specific endpoint, which is well-known and secured by SSL (Secure Sockets Layer).

Of course, from a security point of view, those two models have an excellent complementarity and a synergistic effect, thus increasing overall security. However, the availability of specific KeySSI to the servers implementing the Web APIs could create some inconveniences.

The simplest case is when the required KeySSI is a parameter in the Web API and, therefore, comes from the client. In other cases, the KeySSI should be derived from the input parameters of the Web APIs using a well-defined method (a cryptographic method) or some sort of lookup tables or vaults hosted in a trusted environment.

OpenDSU does not try to fix any specific rules about these Web APIs, and they should be DTE and use case-specific. However, a set of best practices regarding the security of retrieving the proper  KeySSI will be documented in the following chapters.

APIs Overview (RFC-060) can be used to implement Web APIs based on DSU APIs.

### 7.3. DSU-Based Web APIs

In many cases, the location where the data contained in the DSU will be read and processed does not coincide with the location where the encryption keys are stored.

An Open DSU implementation will be able to read the keys required to decrypt, encrypt and sign credentials related to DSUs using a concept named “Security Context”.

![alt text](https://docs.google.com/drawings/d/sMflGLBPs0mdgGRYkE3F0ww/image?parent=e/2PACX-1vQgUa9ZZNk5FLV_zH_jfloqgvN7EBzPzsGUXnSo2wFqHAsJYpPYLiD87wVGFIE3CncyPynHAODnwokA&rev=27&drawingRevisionAccessToken=iW_EBtAZ2kguMw&h=160&w=540&ac=1)

**Figure 9: Security Context Exemplification**


A “security context” is similar to an “execution environment” where DSU reconstruction occurs. The main difference is that the emphasis is on the required level of security. For example, we may have “security contexts” with access to DSU signing and anchoring keys and “security contexts” with read-only access to data.

Even within the same wallet, we can have hardware sandboxing or darkening mechanisms (for example, Trusted Execution Environments - TEEs), and thus, we have “differently powered” security contexts. When used in enterprise environments, these security contexts can be on different hardware systems, separate from the network. Even for average users, it is quite possible to use a web application that uses DSUs on a personal computer, with the sensitive keys stored safely on the mobile. In such a case, the execution environments from regular servers or web applications will have read access. However, they cannot sign anything in the user's name without their approval. OpenDSU promotes an elegant programming model called “executable choreographies'' that makes it easier to handle this unavoidable complexity.

## 8. OpenDSU and IPFS

DSU storage is a content-addressable service similar to IPFS (InterPlanetary File System). The main differences are:

+ OpenDSU encrypts everything by default and can reconstruct data from big "archives" lazily. Imagine that each DSU is like an encrypted virtual file system stored in a cloud optimized for lazy loading. Blockchain is used as a naming service to preserve data history, similar to IPNS (InterPlanetary Name System), but with specific immutability properties.
+ OpenDSU provides a concept called BDNS (Blockchain Domain Naming Service) that allows you to segregate data:

+ off-chain content as encrypted bricks;
+ on-chain content in the form of anchors stored in multiple ledgers/blockchains.

+ OpenDSU provides a concept called KeySSI that improves secret management and secret data sharing (each DSU has something that resembles a recovery key, but from this key, you could derive a read-only access key in a decentralized environment).

OpenDSU is intended to be used in enterprise blockchain solutions, so the aim is performance and strict data control/ownership. OpenDSU could easily use IPFS as the actual storage, but in the performance tests from previous years, the results could have been better. In cases where decentralization requires data replication in a P2P network, the IPFS brick storage strategy for OpenDSU could be a viable solution. For now, the use cases where we use OpenDSU use cloud-based storage strictly controlled by different companies. In a way, this is also a form of decentralization: the blockchain anchoring unifies the anchoring of the DSU (to provide data integrity in a digital ecosystem like an entire industry), but the actual data belong to separate companies.

OpenDSU is an iteration of the IPFS intuition, providing new tools for programmers and architects.

## Annex 1. Contributors
| Current Editors                |                                                                            | 
|:-----------------------|:---------------------------------------------------------------------------------------|
| Sînică Alboaie                | Application Programming Interface                                                      | 
| Blockchain             | A distributed ledger                                                                   | 
| DLT                    | Distributed ledger technology                                                          | 
| Blockchain Anchoring   | Storing hash of another blockchain or of data in a blockchain                          | 
| DMZ                    | Demilitarized zone (Networking)                                                        | 
| SDN                    | Software-defined networking                                                            | 
| VPN                    | Virtual private network                                                                | 
| Near-Chain             | A special type of blockchain that is cryptographically shared with a group of users    | 
| Far-Chain              | Databases, applications and systems touching any data extracted using DLT technologies | 
| Container              | A virtualized node using Linux Containers technology                                   | 
| Logical View           | An entity existing at the logical view level is just a concept, not a physical entity  | 
| BI                     | Business Intelligence                                                                  |
