---
title: BDNS 
layout: home
parent: OpenDSU Concepts
nav_order: 8
---

# **BDNS (RFC-022)**
{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs).



**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)
 


<!-- TOC -->
  * [Abstract](#abstract)
* [1. Hierarchical Blockchains and Naming Schema](#1-hierarchical-blockchains-and-naming-schema)
* [2. Blockchain Domain Name System (BDNS) Concepts Summary](#2-blockchain-domain-name-system-bdns-concepts-summary)
* [3. BDNS.hosts file (BDNS Root Info)](#3-bdnshosts-file-bdns-root-info)
  * [3.1 BDNS Domains example: a root and subdomain](#31-bdns-domains-example-a-root-and-subdomain)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->






# **Abstract**

<p style='text-align: justify;'>This RFC presents the vision and the technical details that explain BDNS concepts. BDNS concept is used by the OpenDSU KeySSI as explained in <a href="https://www.opendsu.org/pages/concepts/KeySSI-(RFC-002).html">KeySSI (RFC-002)</a>. For developers, the existing support for BDNS is documented in <a href="https://www.opendsu.org/pages/contributors/BDNS-(RFC-067).html">BDNS (RFC-067)</a> and <a href="https://www.opendsu.org/pages/advanced/KeySSI-(RFC-068).html">KeySSI (RFC-068)</a>.
</p>

<p style='text-align: justify;'>OpenDSU-based Blockchain Platforms are designed for a world with multiple blockchains (or distributed ledgers) that get an identity through the OpenDSU Blockchain Domain Name System (BDNS). BDNS is designed to offer a discovery mechanism like the internet DNS and a verifiable mapping (e.g. trusted configurations) for node bootstrapping.
</p>

<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vRnG3pUVefvRsWYviM9iYwN0AWKEI61In8zHKzG3eoZKnKfH9atWFg2NUsapXEeRtqZp2cW-3Zw7Mda/pub?w=1181&h=388" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 1: Technology Stack for OpenDSU BDNS</b></p>
</div>


<p style='text-align: justify;'>OpenDSU makes the transitions from the DNS to a naming system that is suitable for decentralized and digital sovereignty oriented platforms. Suppose in the classical Internet, a node (a server) has several replicas (children with the same information) for reasons of high availability or performance; these replicas can be considered equivalent by the client applications. In blockchain systems, the presence of replicated nodes allows additional security checks from clients because the security model is shifted towards client-side encryption (users' trust is obtained from client applications such as digital wallets).
</p>

<p style='text-align: justify;'>In OpenDSU, the concept of KeySSIs offers programmers and architects a tool that allows a direct handling of this complex reality from a security (cryptography) point of view and performance implications. For example, OpenDSU allows clients to check their "paranoia level”, i.e. if they believe a random node from the list is declared in BDNS or does deeper checks, the software should query a percentage of these nodes until they trust a result.
</p>

<p style='text-align: justify;'>While, theoretically, the current level of BDNS functionality could be simulated using DNS, BDNS offers a simpler way of handling the change of the DNS root servers, and it allows faster experimentation for future extensions such as blockchain-to-blockchain anchoring by allowing new types of records.
</p>


# **1. Hierarchical Blockchains and Naming Schema**

<p style='text-align: justify;'>OpenDSU proposes an approach to improve the concept of heterogeneous blockchains in the enterprise area (applications developed around the idea of digital wallets). OpenDSU does not intend to offer a solution for cryptocurrency-centric applications that require a global consensus or atomic transactions between multiple blockchains.
</p>

<p style='text-align: justify;'>The idea of hierarchical blockchains is based on the idea of multi-blockchain. We could have homogeneous multi-blockchain approaches (e.g. Hyperledger Fabric) or heterogeneous blockchains (such as Cosmos). OpenDSU has developed around the idea that different types of blockchains and different topologies are needed to solve different categories of problems.
</p>

<p style='text-align: justify;'>The primary concern in a multi-blockchain approach is to have a proper naming system that allows interoperability and a consistent way to handle multiple independent blockchains from the client-side applications (Digital Wallets). In the <a href="https://www.opendsu.org/pages/concepts/KeySSI-(RFC-002).html">KeySSI syntax (RFC-002)</a>, we described this idea, and we can now better understand the role that it plays in finding the concrete instance of the ledger used for anchoring. In a way, a ledger domain plays the same role as the Internet’s DNS (Domain Name System) for Web URLs. The implementation of DNS is not secure and decentralized enough to be compatible with the self-sovereign way of thinking, and therefore BDNS (Blockchain Domain Name System) is required.
</p>

<p style='text-align: justify;'>The Blockchain Domain Name System (BDNS) aims to be a hierarchical and decentralized naming system for blockchains, distributed ledgers, and even individual DSUs.
</p>

<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vR7zDeIp_aHSMeeII4jn0SB56hj9l_7v6RNjKjdqOljwn8ZCLO7RNkLrV5WTNvXqtOFztijQbTEDTur/pub?w=1152&h=788" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 2: Hierarchical Blockchains (Ledgers)</b></p>
</div>



<p style='text-align: justify;'>BDNS associates information (records) with domain names assigned to each participating entity. BDNS translates more easily memorizable domain names to a list of URLs needed for locating and identifying computer services and devices with the underlying network protocols. BDNS aims to be a layer over the Domain Name System. Its purpose is to extend/complement DNS while preserving the existing user experience for the average user. A blockchain domain name has the form “subdomain.subdomain.domain”.
</p>

<p style='text-align: justify;'>Hierarchical blockchain architecture enables the possibility of gradual migrations to new blockchain technologies while retaining old ledgers and applications.
</p>

<p style='text-align: justify;'>The OpenDSU research investigated the idea of anchoring from DSUs to ledgers and blockchains. Anchoring a private ledger in a blockchain parent makes it useful for auditing because it obtains its integrity and non-repudiation properties from the parent blockchain in which it is anchored. We can say that many of the benefits offered by blockchain technologies for companies are related to the security and auditability obtained by guaranteeing integrity.
</p>

<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vQOr6ERZbpiJuHcHBZvdub4VargeDTRafnUqY-RErBK7ZC4fdq1BGVWAHZXUGK78ceYgykEYaVqAhAQ/pub?w=795&h=527" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 3: DSUs anchored and identified by Ledgers</b></p>
</div>



<p style='text-align: justify;'>Data sharing and collaboration with several organizations is inevitable and, in this sense, OpenDSU proposes a flexible approach based on the idea of anchoring DSUs and ledgers.
</p>

<p style='text-align: justify;'>DSUs are ledgers by nature, and they have an identity given by their KeySSIs; therefore, they are left in the naming system.
</p>

<p style='text-align: justify;'>Anchoring the ledgers into a parent ledger allows better security and auditability for the enterprise use cases and has a positive effect on simplifying the governance of complex blockchain platforms comprising numerous use cases and numerous actors with conflicting interests. There are multiple ways of implementing the anchoring between ledgers. However, OpenDSU does not currently offer implementation and only focuses on anchoring the DSUs in the ledgers. BDNS offers just a naming service for DSUs. Future efforts are required to generalize this approach for anchoring between ledgers.
</p>

# **2. Blockchain Domain Name System (BDNS) Concepts Summary**


| **Concept**       | **Description**                                                                                                                                      |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|
| BDNS              | Equivalent to the internet DNS for blockchains (distributed ledgers in general).                                                                     |
| BDNS Root Info    | A BDNS file containing the information about all root domains  and eventually other BDNS domains.                                                    |
| BDNS Domain       | A string with alphanumeric identifiers separated by “.” characters.                                                                                  |
| BDNS Root Domain  | A BDNS domain without any “.” (a single identifier)                                                                                                  |
| BDNS SubDomain    | A domain that contains additional prefixes to a BDNS Root Domain                                                                                                                                                     |


<p style="text-align:center"> <b>Table 1: BDNS specific terminology summary</b></p>



# **3.BDNS.hosts file (BDNS Root Info)**

<p style='text-align: justify;'>Creating a system that can replace DNS would be complicated, and the maturation of such a system could take several years. In this sense, it is perfectly normal for OpenDSU-based systems to use a very simplified version that resembles the idea of host files from Unix systems.
</p>

<p style='text-align: justify;'>BDNS.hosts is a JSON-type file containing each known domain name on the current node and the configuration associated with each domain. Below, there is an example of a BDNS.hosts file. These files are encoded in the wallets and are a replacement for the WHOIS protocol, offering each application the chance to start a new “internet”.
</p>

## 3.1 BDNS Domains example: a root and subdomain

```js
{
"demoroot": {
   "brickStorages": [
     "https://example1.com",
     "https://example2.com",
   ],
   "anchoringServices": [
     "https://example1.com",
     "https://example2.com",
   ]
 },
"demo1.demoroot": {
   "brickStorages": [
     "https://example1.com",
     "https://example2.com",
   ],
   "anchoringServices": [
     "https://example1.com",
     "https://example2.com",
   ]
 }
}
```


This is the config for one root domain, “demoroot”, and a subdomain. Depending on their record type (“brickStorage” or “anchorService”), the endpoints are the addresses for either the node on which the Brick Storage service is running or the node running the Anchoring Service.

The below table describes the existing record types for BDNS domains.

| **Selection**     | **Description**                                                |
|:------------------|:---------------------------------------------------------------|
| brickStorages     | List of URLs that offer brick storage services for the domain. |
| anchoringServices | List of URLs that offer anchoring services for the domain.     |
| notifications     | List of URLs that offer notification services for the domain.  |

<p style="text-align:center"> <b>Table 2: BDNS Domains record types</b></p>


**Contributors**

1. <p style='text-align: justify;'><a href="https://www.axiologic.net/">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="https://www.opendsu.org/">www.opendsu.org</a> site.

2. <p style='text-align: justify;'><a href="https://pharmaledger.org/">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.

3. PrivateSky Research Project: MIT licensed content accordingly with the contracts. 
<a href="https://profs.info.uaic.ro/~ads/PrivateSky/"> https://profs.info.uaic.ro/~ads/PrivateSky/</a>





# **Annex 1. Contributors**

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