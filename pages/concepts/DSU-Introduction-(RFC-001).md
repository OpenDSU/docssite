---
title: DSU Introduction 
layout: home
parent: OpenDSU Concepts
nav_order: 1
---


# **DSU Introduction (RFC-001)**

{: .no_toc }


{: .accepted }
The proposal has been accepted and has an implementation.


**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

**Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)
 



<!-- TOC -->
* [**Abstract**](#abstract)
* [**Overview**](#overview)
* [**1. Data Sharing Unit (DSU)**](#1-data-sharing-unit-dsu)
* [**2. Brick Storage**](#2-brick-storage)
* [**3. Anchoring**](#3-anchoring)
* [**4. DSU Mounting**](#4-dsu-mounting)
* [**5. DSU Reconstruction**](#5-dsu-reconstruction)
* [**6. KeySSI**](#6-keyssi)
* [**7. DSU Use Cases**](#7-dsu-use-cases)
  * [7.1 DSU-Based Self Sovereign Applications (SSApps)](#71-dsu-based-self-sovereign-applications-ssapps)
  * [7.2 DSU-Based Web APIs](#72-dsu-based-web-apis)
  * [7.3 DSU Instances in Multiple Security Contexts](#73-dsu-instances-in-multiple-security-contexts)
* [**8. OpenDSU and IPFS**](#8-opendsu-and-ipfs)
* [**Annex 1. Contributors**](#annex-1-contributors)
<!-- TOC -->





# **Abstract**

<p align="justify">This RFC introduces the critical components of the OpenDSU project, such as DSU, as well as domain anchoring and brick storage services. Then, it introduces some essential mechanisms known as DSU mounting and DSU reconstruction. It also explains RFC’s role of keySSIs in the management of the DSU. Finally, it presents some primary use cases of DSUs.</p>


# **Overview**

<p align="justify">The main concept, the central thread on which OpenDSU is created, is based on Digital Sovereignty. Individuals, citizens, enterprises, organizations, or states should have as much control over data as possible and not give control to intermediaries.

<p style='text-align: justify;'>Following our research in PrivateSky, but also according to those existing in OpenDSU, we have noted that having a single large blockchain containing all the world’s data is impossible. The vision envisaged from specific projects, for example, Ethereum, in which there is only one world in which everything happens uniformly, does not seem realistic. Therefore, the OpenDSU team introduced the concept of Hierarchical Blockchains, which are several blockchains that have a naming and identification system. Everything is done through blockchains, providing interoperability between applications, meaning it does not matter in which blockchain we anchor our data. We approach the data from the perspective of DSUs (Data Sharing Units), so that is where the name OpenDSU comes from. OpenDSU is an evolving standard that creates data storage systems that are off-chain but permanently anchored in a blockchain to obtain security properties and provenance to ensure the data’s quality.</p>
</p>



<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vSKsWCSVx-lkm6K8WzRen1eY6OF1D-x6yhoTA98Lep0hGqe-0eCkFweTXJm9kwMkZKbwZuZJyQsrdtt/pub?w=784&h=421" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 1: Data Sharing Units (DSU)</b></p>
</div>


<p align="justify">We can also observe that DSU mounting can mount arbitrary DSUs and make them look like they are part of the root DSU. The mounting of the code is just an example of the concept's usefulness. DSUs are light containers that can boot minimal “operating systems” that we call DSU Types. What we obtain is a file system with mounting concepts. This booting will usually be called DSU Reconstruction.</p>



<p align="justify">Starting from the user, we first have the User environment where DSUs exist and KeySSIs are managed. These environments are also called agents. An agent is software that can be located either in the cloud or locally (on a computer or a mobile). This software is in charge of managing special identifiers named KeySSIs, and it is also responsible for the creation and reconstruction of DSUs. When a keySSI is used to create a DSU, the agent will use anchoring and brick storage from the domain associated with the key (here by default) to ensure the DSU will be accessible for other users to access the DSU if they own the corresponding keys.

<p style='text-align: justify;'>By using the anchor identifier of the DSU, the agent will be able to anchor in the ledger a reference to one BrickMap in the Brick storage.  Because the DSU is divided into many individual bricks before being stored, the map is necessary to keep track of all the bricks that form the DSU.
</p>
<p style='text-align: justify;'>Now, owners of the same key or a special derivation of this key can find the reference to the map in the anchoring service. With this map, the agent can reconstruct the DSU in the execution environment for the user.</p>
</p>
 
# **1. Data Sharing Unit (DSU)**

<p align="justify">From the perspective of OpenDSU, a DSU is an entity that exists temporarily in an execution environment (usually in a sandboxed container). Logically, a DSU can be understood as a micro-file system containing data and code booted in a sandboxed environment. It can also be understood as a key/value micro-database (each key being the path to a file and each value the contents of that file).</p>


<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vRFOMEDBeW-rmvm1BCCsGuPToMCgWCSgehyyxxI5h7dp-0l1UK74ob7X6YDBKqRHLVbLcIVGqR_-_PF/pub?w=194&h=370" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 2: DSU usage pattern</b></p>
</div>
 
<p>The Execution Environment interacts with a DSU in 3 major ways:</p>
<ol>

  <li>Read/write files from the file system;</li>
  <li>Read/write keys;</li>
  <li>Call the DSU APIs.</li>

</ol>

<p style='text-align: justify;'>We will need the following concepts introduced in this RFC to make these interactions possible.
</p>
<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vSMgD1hKdumqQSgP9tZwaQZTLwgtmgJ-pfhLlMvxCPOnj7koOSf7EdEGKUf51AhPWYEOI1jXgII1YmZ/pub?w=960&h=720" class="imgMain" style="max-width: 69%; margin-left: 0px; margin-bottom: -115px;"/>
    <p><b>Figure 3: Concepts</b></p>
</div>


# **2. Brick Storage**

<p align="justify">Brick Storage represents a core element of the OpenDSU ecosystem. Bricks Storages are simple web services that store and retrieve bricks for clients that know the brick’s hash (or id). The basic implementation of Brick Storages is straightforward and offers a tool that works well in an open and permissionless network.

<p style='text-align: justify;'>DSUs are stored as “bricks” in a “brick storage” and are encrypted using symmetric encryption. The bricks can be stored locally, remotely in the cloud, or any other storage media. The essential key for decrypting bricks is a secret key called <a href="https://www.opendsu.org/pages/concepts/KeySSI-(RFC-002).html">KeySSI</a>. Each Brick is encrypted with a different key. Special bricks called BrickMaps store the encryption keys for the Bricks they are referencing. These BrickMaps, unlike other bricks, are encrypted with KeySSIs.
</p>

<p style='text-align: justify;'>DSUs are flexible and can be updated (and even deleted). These get implemented by having multiple BrickMaps referenced within the same anchor, allowing us to have a history of each DSU.</p>
</p> 

<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vQLywlGNSsOE7PFBpcDpgQmOCvzRDCOhGssLrBp47Rz7j9w4psp2xmfFQfF9HARmj6la04u_s47q2tq/pub?w=267&h=241" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 4: Brick Storage & Brick Map</b></p>
</div>
 


<p align="justify">Supplementary sophistications are required only in cases where we have to implement access revocation to the shared data or implement an expiration date for access to data as requested by a third party.</p>


More details are available in <a href="https://www.opendsu.org/pages/concepts/Brick-Storages-(RFC-003).html">Brick Storages (RFC-003)</a>.

# **3. Anchoring**

<p align="justify">DSUs are anchored in the blockchain, and the anchoring feature brings the capability of digitally signing data and code in the initial version and any subsequent versions. In some situations, use cases can exist in which a centralized system provides DSU anchoring. For example, a use case that only needed anchoring could support better internal auditability. This example is excellent, as it could be later decentralized if needed or required.</p>

More details are available in [Anchoring (RFC-005)](https://www.opendsu.org/pages/concepts/Anchoring-(RFC-005).html).

# **4. DSU Mounting**

<p style='text-align: justify;'>The code in a DSU instance is not copied to each instantiation. Starting from the perspective that a DSU can be seen as a file system, this file system allows the mounting of a DSU in another DSU. The DSU mounted in all instances and containing the code is called <a href="https://www.opendsu.org/pages/concepts/DSU-Types-(RFC-007).html">DSU Types</a>. This DSU Type behaves similarly to a class compared to its instances. The DSU Type is a DSU in itself and, as such, is anchored and must have credentials (digital signatures) that mark it safe for use. It should also be noted that a DSU Type can be updated, leading to the automatic update of all instances. We also name the code from DSU Type as DSU constitution.
</p>
<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vSSdFjMT3QJDCy-8DwD2nbAUwofoH6_q3Mi8qkLhMViUvkN_grcndvupAUEvIu94sLobFWub1k7Rp5O/pub?w=927&h=274" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 5: DSU Instances and DSU Types</b></p>
</div>

<p style='text-align: justify;'>We can also observe that DSU mounting can mount arbitrary DSUs and make them look like they are part of the root DSU. The mounting of the code is just an example of the concept's usefulness. DSUs are light containers that can boot minimal “operating systems” that we call DSU Types. What we obtain is a file system with mounting concepts. This booting will usually be called <a href="https://www.opendsu.org/pages/concepts/DSU-Reconstruction-(RFC-008).html">DSU Reconstruction</a>.
</p>


More details are available in <a href="https://www.opendsu.org/pages/concepts/DSU-Mounting-(RFC-006).html">DSU Mounting (RFC-006)</a>.
<br><br>
More details are available in <a href="https://www.opendsu.org/pages/concepts/DSU-Types-(RFC-007).html">DSU Types (RFC-007)</a>.
<br><br>

# **5. DSU Reconstruction**

<p align="justify">DSUs are encrypted at rest and in transit using a key derived from an identifier we call KeySSI. A DSU can be imagined as a multi-directory file system with granular access and security properties for each “directory”. Instead of being stored as a whole, the files are stored as encrypted bricks. That is why we need DSU reconstruction to reassemble our files, and we reassemble them only for a limited time in an “execution environment”. These OpenDSU mechanisms implement the usage of “client-side encryption” as a means to enable data self-sovereignty.</p>

<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vS90f4gCb0G0KLUrq7AHthnpthMe5H2AYwAMKyp3nhHyFi0AQl0zJi3s0V7FDCzjBbWqrMThFv490ci/pub?w=713&h=493" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 6: DSU reconstruction</b></p>
</div>

<p style='text-align: justify;'>An execution environment is typically a sandbox that obtains the correct key (a <a href="https://www.opendsu.org/pages/concepts/KeySSI-(RFC-002).html">KeySSI</a>) to gain access rights to decrypt the DSU. This “execution environment” can exist externally on the client/edge device or elsewhere, such as in the cloud or a server. OpenDSU implementation standards propose the usage of JavaScript VMs (Virtual Machines) and web assembly to deploy these sandboxes.
</p>

<p style='text-align: justify;'>Sandboxes will perform a “DSU reconstruction” operation that can be compared to the booting of a computer and is designed to recognize different “DSU Types” that will control how validation of subsequent versions of DSUs will be handled.</p>
</p>

More details are available in [DSU Reconstruction (RFC-008)](https://www.opendsu.org/pages/concepts/DSU-Reconstruction-(RFC-008).html).

# **6. KeySSI**

<p align="justify">The KeySSI concept's purpose is to provide blockchain-anchored identities for things and processes, and companies and individuals. They are used as secret symmetrical encryption/decryption keys for DSUs (or parts of the DSUs).</p>

More details are available in [KeySSI (RFC-002)](https://www.opendsu.org/pages/concepts/KeySSI-(RFC-002).html).

# **7. DSU Use Cases**

Currently, DSUs can be used in three ways:

<ol>

  <li>As a full-stack to develop Self Sovereign Applications (SSApps);</li>
  <li>As a complementary alternative by exposing DSU APIs to Web APIs;</li>
  <li>As instances in a “Security context”.</li>

</ol>

These three use cases will be developed in the following subsections.


## 7.1 DSU-Based Self Sovereign Applications (SSApps)

<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vS5ONxCu4XObPwLCM17j2ZxjaHzgcLGb7q-4lMXjbFI-Uorb4cvI35z9wHpoZvx-Umo6rmYc5zbYHPv/pub?w=419&h=173" class="imgMain" style="max-width: 69%; margin-left: 0px; margin-top: 15px;"/>
    <p><b>Figure 7: SSApps as DSUs containing UI Code</b></p>
</div>


<p align="justify">A DSU can contain any code (e.g., HTML, CSS, JS) required to launch and run an application in a browser. Also, it can be like any other web application. OpenDSU proposes standardization of the usage of APIs, and it can load web applications from DSUs. These particular kinds of web applications will be called Self Sovereign Applications (or SSApps). Besides anchoring and brick storage, SSApps have no dependency on any server, as their code and data will be loaded from the corresponding DSU on the client side. Saying Client Side here is a misnomer, as the DSU can reside on a company server farm or the cloud.</p>
<p><b>The main benefits of the SSApp approach:</b></p>
<ol>
<li><p align="justify">The code for UI (and business logic) is signed, secured by a DTE (Distributed Ledger), and verifiable by the edge client environment.</p></li>
<li><p align="justify">Data Self-Sovereignty requires Self-Sovereignty at the application level in disintermediation. The blockchain, anchoring, and brick storage are zero-access services consumed from the cloud. A server is simulated (using service workers) by the DSU instance, but this “server” runs on the edge device. Therefore, the data leakages are drastically limited compared with a classical web application.</p></li>
</ol>


SSApp Architecture is described in <a href="https://www.opendsu.org/pages/concepts/SSApps-Architecture-(RFC-028).html">SSApp Architecture (RFC-028)</a>.

SSApp Implementation is described in <a href="https://www.opendsu.org/pages/beginners/SSApp-Implementation(RFC-034).html">SSApp Implementation (RFC-034)</a>.


## 7.2 DSU-Based Web APIs

<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vRqOPNBzCaQqZEqWfx5w6Qu7ZmyTbr_lyZFBn-KL7df8xqzzJoZCqhsRmnGpzRJY-gOY9SOnXmsm4fy/pub?w=1254&h=418" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 8: Web APIs</b></p>
</div>


<p align="justify">The OpenDSU layer one specifications do not enforce any special limitation on these Web APIs. We still want to draw attention to possible incompatibilities (described as differences in security and privacy properties) between DSU and Web APIs. The decentralised nature of DSU APIs requires the possession of an adequate KeySSI.
The Web APIs are secured mainly by a delegation of trust because all the calls are sent to a specific endpoint, which is well-known and secured by SSL (Secure Sockets Layer).
Of course, from a security point of view, those two models have an excellent complementarity and a synergistic effect, thus increasing overall security. However, the availability of specific KeySSI to the servers implementing the Web APIs could create some inconveniences.
The simplest case is when the required KeySSI is a parameter in the Web API and, therefore, comes from the client. In other cases, the KeySSI should be derived from the input parameters of the Web APIs using a well-defined method (a cryptographic method) or some sort of lookup tables or vaults hosted in a trusted environment.
OpenDSU does not try to fix any specific rules about these Web APIs, and they should be DTE and use case-specific. However, a set of best practices regarding the security of retrieving the proper  KeySSI will be documented in the following chapters.</p>

 <a href="https://www.opendsu.org/pages/beginners/APIs-Overview-(RFC-060).html">APIs Overview (RFC-060)</a> can be used to implement Web APIs based on DSU APIs.


## 7.3 DSU Instances in Multiple Security Contexts

<p style='text-align: justify;'>In many cases, the location where the data contained in the DSU will be read and processed does not coincide with the location where the encryption keys are stored.
</p>


<p style='text-align: justify;'>An Open DSU implementation will be able to read the keys required to decrypt, encrypt and sign credentials related to DSUs using a concept named “Security Context”.
</p>

<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vQ7UCvYtwvs9LnOVOgGlGvJAQRJlPnaIDwofDpA_2RA3h1fy8wqlbwFMbBwLkakp5yh2PvfYrEG39o_/pub?w=1151&h=347" class="imgMain" style="max-width: 69%; margin-left: 0px; margin-top: 15px;"/>
    <p><b>Figure 9: Security Context Exemplification</b></p>
</div>


<p style='text-align: justify;'>A “security context” is similar to an “execution environment” where DSU reconstruction occurs. The main difference is that the emphasis is on the required level of security. For example, we may have “security contexts” with access to DSU signing and anchoring keys and “security contexts” with read-only access to data.
</p>

<p style='text-align: justify;'>Even within the same wallet, we can have hardware sandboxing or darkening mechanisms (for example, Trusted Execution Environments - TEEs), and thus, we have “differently powered” security contexts. When used in enterprise environments, these security contexts can be on different hardware systems, separate from the network. Even for average users, it is quite possible to use a web application that uses DSUs on a personal computer, with the sensitive keys stored safely on the mobile. In such a case, the execution environments from regular servers or web applications will have read access. However, they cannot sign anything in the user's name without their approval. OpenDSU promotes an elegant programming model called “executable choreographies'' that makes it easier to handle this unavoidable complexity.</p>


# **8. OpenDSU and IPFS**

<p style='text-align: justify;'>DSU storage is a content-addressable service similar to IPFS (InterPlanetary File System). The main differences are:</p>


<p style='text-align: justify;'>1. OpenDSU encrypts everything by default and can reconstruct data from big "archives" lazily. Imagine that each DSU is like an encrypted virtual file system stored in a cloud optimized for lazy loading. Blockchain is used as a naming service to preserve data history, similar to IPNS (InterPlanetary Name System), but with specific immutability properties.
</p>

<p style='text-align: justify;'>2. OpenDSU provides a concept called <a href="https://www.opendsu.org/pages/concepts/BDNS-(RFC-022).html">BDNS</a> (Blockchain Domain Naming Service) that allows you to segregate data:
</p>


 * off-chain content as encrypted bricks;
 * on-chain content in the form of anchors stored in multiple ledgers/blockchains.

<p style='text-align: justify;'>3. OpenDSU provides a concept called <a href="https://www.opendsu.org/pages/concepts/KeySSI-(RFC-002).html">KeySSI</a> that improves secret management and secret data sharing (each DSU has something that resembles a recovery key, but from this key, you could derive a read-only access key in a decentralized environment).
</p>


<p style='text-align: justify;'>OpenDSU is intended to be used in enterprise blockchain solutions, so the aim is performance and strict data control/ownership. OpenDSU could easily use IPFS as the actual storage, but in the performance tests from previous years, the results could have been better. In cases where decentralization requires data replication in a P2P network, the IPFS brick storage strategy for OpenDSU could be a viable solution. For now, the use cases where we use OpenDSU use cloud-based storage strictly controlled by different companies. In a way, this is also a form of decentralization: the blockchain anchoring unifies the anchoring of the DSU (to provide data integrity in a digital ecosystem like an entire industry), but the actual data belong to separate companies.
</p>

<p style='text-align: justify;'>OpenDSU is an iteration of the IPFS intuition, providing new tools for programmers and architects.</p>

 


**Contributors**

1. <p style='text-align: justify;'><a href="https://www.axiologic.net/">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="https://www.opendsu.org/">www.opendsu.org</a> site.

2. <p style='text-align: justify;'><a href="https://pharmaledger.org/">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.

3. <a href="https://www.privatesky.xyz/">PrivateSky Research Project</a>: MIT licensed content accordingly with the contracts. 
<a href="https://profs.info.uaic.ro/~ads/PrivateSky/"> https://profs.info.uaic.ro/~ads/PrivateSky/</a>



# **Annex 1. Contributors**

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

