---
title: DSU Reconstruction 
layout: home
parent: OpenDSU Concepts
nav_order: 7
---

# DSU Reconstruction (RFC-008)
{: .no_toc }

{: .accepted }
The proposal has been accepted and has an implementation.

**Document Maintainers: Andi Gabriel Tan 2022. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright**
Copyright © 2018-2022 Axiologic Research and Contributors.
This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)


<!-- TOC -->
* [Abstract](#abstract)
* [Overview](#overview)
* [1. DSU Versions](#1-dsu-versions)
* [2. Bricks Storage](#2-bricks-storage)
* [3. DSU Reconstruction from Bricks](#3-dsu-reconstruction-from-bricks)
* [4. Security Context (SC) and DSU Reconstruction](#4-security-context-sc-and-dsu-reconstruction)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->





# Abstract

<p style='text-align: justify;'>This RFC describes the reconstruction mechanism of a DSU (Data Sharing Unit), and it focuses on better understanding the terms used in OpenDSU. DSU Reconstruction helps create an overview of the connection mode of DSUs and presents specifications related to Bricks, Anchors, Security Context and Enclaves. It contains information found in other RFCs (see the table below). However, its primary goal is to deepen the knowledge of OpenDSU concepts so that everyone who reads this document can understand it.
</p>


| **Number** | **Name**             | **Link**                                                                                                  |
|:-----------|:---------------------|:----------------------------------------------------------------------------------------------------------|
| RFC 001    | DSU Introduction     | [DSU Introduction (RFC-001)](https://www.opendsu.org/pages/concepts/DSU%20Introduction%20(RFC-001).html)  |
| RFC 002    | KeySSIs Introduction | [KeySSI (RFC-002)](https://www.opendsu.org/pages/concepts/KeySSI%20(RFC-002).html)                        |
| RFC 003    | Brick storages       | [Brick Storages](https://www.opendsu.org/pages/concepts/Brick%20Storages%20(RFC-003).html)                |
| RFC 005    | Anchoring            | [Anchoring (RFC-005)](https://www.opendsu.org/pages/concepts/Anchoring%20(RFC-005).html)                  |
| RFC 070    | Bricking             | [Bricking (RFC-070)](https://www.opendsu.org/pages/contributors/Bricking%20(RFC-070).html)                |
| RFC 075    | Security Context     | [Security Context (RFC-075)](https://www.opendsu.org/pages/beginners/Security%20Context%20(RFC-075).html) |




# Overview

<p style='text-align: justify;'>The reconstruction of a DSU starts from an Execution Environment, from a KeySSI. We arrive in the blockchain, we take the anchor, and from the anchor, we get the bricks we need for rebuilding the DSU in the Execution Environment. Here, they are processed, we anchor again, we create bricks, and so on. The reconstruction of a DSU can be comparable with the booting of a computer. It is created to recognize different types of DSUs so that it will control how the validation will be managed for previous versions of DSUs.
</p>

# 1. DSU Versions

<p style='text-align: justify;'>From the perspective of OpenDSU, a DSU is an entity that exists temporarily in an execution environment (usually in a sandboxed container). Logically, a DSU can be seen as a micro-file system that contains data and code, which is booted in a sandboxed environment. It can also be understood as a key/value micro-database (each path to a file being a key, and the value being the content of that file).
</p>

<p style='text-align: justify;'>The purpose of the KeySSI concept is to provide blockchain-anchored identities not only for things and processes but also for companies and individuals. They are used as secret symmetrical encryption/decryption keys for DSUs (or parts of the DSUs). Depending on the use case that needs to be addressed,  it can use different types of KeySSIs.
</p>

<p style='text-align: justify;'>KeySSI is an important concept, an innovation in OpenDSU. The essence of these KeySSIs is that they are part of KeySSI families, meaning that several related KeySSI types work together to obtain specific properties. KeySSI generally also contains access keys (hence the name).
</p>
<p style='text-align: justify;'>A KeySSI never comes alone but in a group that we call a family. Each KeySSI family is accompanied by lower-level KeySSIs derived from the highest-level key. Derivation can be understood as a form of access delegation: someone who holds a KeySSI with a higher access level delegates access to lower levels.
</p>

<p style='text-align: justify;'>More precisely, there is a hierarchy of KeySSIs; for example: from a SeedSSI, we can derive an SReadSSI, and from a SReadSSI, we can derive an AnchorID. These SSIs are resolved using a continuous list of HashLinks,  as shown in the figure below (see Figure 1). Each HashLink is sent to a BrickMap, and each version of a DSU has its own BrickMap.
</p>

<p style='text-align: justify;'>If we have created the DSU, we have the right to only share the SeedSSI with someone, so that they can only read but not modify the content (write rights).
</p>

<p style='text-align: justify;'>Similarly, we can create another type of KeySSI, the SZA (zero access), that gives even less access, only letting an individual know that a DSU exists and that a specific public key controls it. When we anchor in the blockchain, in DSU, neither the SeedSSI nor the sReadSSI is saved, because they are too powerful (allowing individuals to read and/or write). We anchor something that identifies the DSU (unique and alone): the public key or the hash of the public key. Still, it does not allow anyone to do anything with that DSU other than to know that it exists and what Hashlinks are associated with it.
</p>

<p style='text-align: justify;'>Anchoring has the concept of generalized anchorId across all types of KeySSI families that we can create. The concept of AnchorId is basically a SZA key (zero access) that generally marks anchors that have zero access.
</p>

<p style='text-align: justify;'>AnchorId means something has been identified in an anchor and is a HashLink associated with this AnchorId. As seen in the figure below, this is the anchor saved by the blockchain for a smart contract of the blockchain, which has the connections between AnchorId and a set of Hashlinks. These Hashlinks have correspondence with the 1-2--n in DSUs, and this is how all things connect (similar to Figure 4: DSU reconstruction from bricks. We have the KeySSI, derive the AnchorId from it and then get the HashLinks. Then we have the bricks that we load into the execution environment.
</p>


<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vS2w2Eq69e1BsgXblTjb6sDkKnuz0zvGTfrlSTahJiRHowxX9NOyBcrh7dOwVUeFzzBLGijbNq-7pF3/pub?w=932&h=522" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 1: DSU Versions (BrickMaps and Bricks)</b></p>
</div>



<p style='text-align: justify;'>The Brick concept assumes that a brick is a buffer, meaning data is encrypted and identifiable by its hash (the Content Addressable Data concept, used for example by IPFS - InterPlanetary File System). If a person needs a brick, it needs to know its hash to access the content. If the hash is not known, the content cannot be accessed. The principle is similar to that of IPFS. Anchors contain as information something that identifies the DSU and hashes to the brick. An anchor is a correspondence between an identifier and a crowd, set, or list of hashes for these bricks. The code is called HashLink because it is similar to a URI, a type of resource identifier.
</p>

More details are available at the following links:

[DSU Introduction (RFC-001)](https://www.opendsu.org/pages/concepts/DSU%20Introduction%20(RFC-001).html)</br>
[KeySSI (RFC-002)](https://www.opendsu.org/pages/concepts/KeySSI%20(RFC-002).html)  
[Anchoring (RFC-005)](https://www.opendsu.org/pages/concepts/Anchoring%20(RFC-005).html)  
[Bricking (RFC-070)](https://www.opendsu.org/pages/contributors/Bricking%20(RFC-070).html) 


# 2. Bricks Storage

<p style='text-align: justify;'>Bricks Storage is a brick storage service. In order to store DSUs safely in a shared storage, OpenDSU will first split the DSUs into many pieces called bricks. Each brick contains a small amount of encrypted data and will be stored in the storage environment using hashes as identifiers. One of these bricks is remarkable and contains the secret map that will be used to reconstruct the entire DSU in the correct order. It is called the BrickMap. When a DSU is created with a KeySSI, <a href="[anchor identifier](https://www.opendsu.org/pages/concepts/Anchoring%20(RFC-005).html)"></a>anchor identifier is derived from the key. Each time our DSU is updated and anchored in the blockchain, a new brick containing the BrickMap represented by its HashLinkSSI will be created and associated with the anchor identifier to keep track of all different BrickMap versions.
</p>

<p style='text-align: justify;'>The BrickMap is a special brick stored along with the other bricks in the brick storage. It is used to reconstruct the DSU execution environment by retrieving bricks from the brick storage.
</p>

<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vRBZREjLhMA2BozMV731RchsKKSq36DkbPOzmbuEZ0CD78m0KiBq3C101ySJFRN1aNTvpW4iJrSm_L4/pub?w=562&h=507" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 2: Brick Map</b></p>
</div>


<p style='text-align: justify;'>To achieve that reconstruction, the BrickMap is structured in a JSON format that contains a header with metadata, such as the date of creation and a list of items. This represents files and folders of the DSU with their metadata,  an array of bricks containing their location, and the symmetric encryption key that is necessary to read them.
</p>

<p style='text-align: justify;'>To understand how these bricks are organized, how many exist for a DSU (one or more), and how to load them, we follow their detailed structure, which we can see in Figure 3. In fact, a DSU is like a file system that generally has file maps. We know which folders, files and paths we have, and the existing disk blocks to a common set of files. We also know what information exists about those files. We have this file structure that contains specific information about each file. In the DSU world, we have something very similar: the map of the bricks that are used to store DSU data. This is called a BrickMap, and it consists of encrypted content identified by a hash, but it is more special because it contains the map of the bricks that are parts of our DSU. If we change a file or content, a new brick is created in the Bricks Storage. The important thing is that, if a change was made, a new version was created for BrickMap and put in the Bricks storage. Later, the new version is anchored in the blockchain. This is associated with the AnchorId. This BrickMap contains paths, files, and a list of bricks associated with this path. The essence of the DSU was also presented.
</p>



<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vQgG5bT3XPIIw0UAf9Mcxb2qmqVwxkMb7tVm5oPKr_WpOdFdAkZDVALgTyeaB2QUj4dHCsTYJJSVK9T/pub?w=962&h=650" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 3: Bricks Storage - detailed structure</b></p>
</div>



<p style='text-align: justify;'>This figure summarizes uploading bricks for another specific version release. Historically, there are two strategies for implementing BrickMaps. One is the diffs strategy, which only adds the differences between the previous and actual versions. The second strategy is the snapshot strategy, which loads the entire map.
</p>

<p style='text-align: justify;'>In the first strategy (diffs), we need to load all history and make a history response to get the current map. In the snapshot strategy, we instantly get all the statuses, without doing any more operations, just by reading one version. In current applications, the snapshot strategy is used more because it is faster than the other. If we want to install microledgers or equivalents of DSU smart contracts, then we can use the diffs strategy because it could be more user-friendly.
</p>


More details are available in Bricks Storages [RFC-003](https://www.opendsu.org/pages/concepts/Brick%20Storages%20(RFC-003).html)
More details are available in Bricking [RFC-070](https://www.opendsu.org/pages/contributors/Bricking%20(RFC-070).html).


# 3. DSU Reconstruction from Bricks

<p style='text-align: justify;'>DSUs are encrypted at rest and in transit using a key derived from an identifier called KeySSI. A DSU can be imagined as a multi-directory file system with granular access and security properties for each “directory”. Instead of being stored as a whole, the files are stored as encrypted bricks. That is why we need DSU reconstruction to reassemble our files, and we reassemble them only for a limited time in an “Execution Environment”. These OpenDSU mechanisms implement “client-side encryption” as a means to enable Data Self-Sovereignty.
</p>

<p style='text-align: justify;'>An execution environment is typically a sandbox that obtains the correct key (a KeySSI) to gain access rights to decrypt the DSU. This “execution environment” can exist on the client/edge device or somewhere externally, such as in the cloud or on a server. OpenDSU implementation standards propose the usage of JavaScript VMs and web assembly to deploy these sandboxes. Sandboxes will perform a “DSU reconstruction” operation that can be compared to the booting of a computer and is designed to recognize different “DSU Types” that will control how validation of subsequent versions of DSUs will be handled.
</p>


<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vQre7ER-r10i3mHLQ6Fgb5ZGulAFKalrnjHRHUbp-NLKFJ4INFf5D8fwrG2IEUuMvdePUe-DyL1Y2bf/pub?w=1010&h=556" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 4: DSU Reconstruction from Bricks</b></p>
</div>





<p style='text-align: justify;'>As mentioned above, we start from an Execution Environment from a KeySSI,  we go into a blockchain, we get the anchor, and from this anchor, we get the bricks needed to rebuild a DSU in the Execution Environment. Here, we process, and then we anchor again, we create bricks, and so on.
</p>

<p style='text-align: justify;'>Reconstruction of this DSU is done lazily (“lazy loading”). That means it loads just what is needed and when it is needed. The corresponding bricks are brought in when a particular file is needed inside a DSU. These BricksMaps, as we call them, contain a map with the necessary bricks from all DSUs.
</p>


# 4. Security Context (SC) and DSU Reconstruction

<p style='text-align: justify;'>A vital concept introduced by OpenDSU is the concept of Security Context. A Security Context is about the same as the idea of an Execution Environment where DSU reconstruction takes place. The difference is that the emphasis is on the required level of security. For example, we may have Security Contexts that have access to DSU signing and anchoring keys and Security Contexts that only have read access to data. Its purpose is to suggest to the OpenDSU programmers that working with secrets, cryptographic material, private keys, secret keys, and confidential/private records is always associated with a Security Context.</p>

<p style='text-align: justify;'>Every Wallet is treated as a Security Context. The Wallet incorporates broader things such as interface, code, and different types of sensitive data storage. Also, it can mount the DSUs, or have external DataBases. As seen in Figure 5, the most relevant is the Security Context concept which has two components: Main Enclave and Shared Enclave. So, in a Security Context, we can have one or more enclaves. This is an important thing, especially in the case of Enterprise applications.</p>

<p style='text-align: justify;'>We have this concept of a Shared Enclave: for instance, a user has a personal employee wallet, but it wants to share specific keys and data because that data belongs to the company, and then the system must be able to use certain Shared Enclaves. Of course, the wallet also has personal properties of non-repudiation that it wants to protect in the system, so it also has private keys which only that employee has access to. This is the Main Enclave. In some cases, the Main Enclave can be the only one, for example if not in an Enterprise environment.</p>

<p style='text-align: justify;'>Every Wallet and, therefore, every Security Context has a Main Enclave, which is instantiated and owned by the Digital Wallet. In other words, if this Wallet belongs to an organization and OpenDSU is focused on creating a programming framework for Enterprise applications, then the data does not belong to each individual, meaning we do not have the sovereignty goal at the user/owner level, but at the organization level. Therefore, OpenDSU offers the ability to share these enclaves, these sensitive data storage systems. So, OpenDSU introduces this enclave concept as an abstraction of sensitive data storage.</p>


<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vQLWO2qz1amcRsHnYSuXXwt4GkQ435JaLzzEbI86UZdN-fEN1RO8HPY-cmwvJdD9GDV019oE1wLz8xL/pub?w=254&h=252" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 5: Wallet</b></p>
</div>




<p style='text-align: justify;'>The concept of Security Context summarizes how OpenDSU stores secrets by OpenDSU Wallet. These secrets can usually be KeySSIs or, in other cases, they can be DIDs. KeySSIs and DIDs are two different methods of creating SSIs (Self-Sovereign Identifiers).</p>

<p style='text-align: justify;'>When it is necessary to rebuild a DSU in a Wallet, we look for the right key in the Security Context that allows the DSU message to be read by us. There are situations where we want to have a DSU mounted or receive a message, an AnchorID, or a KeySSI without reading rights. In this situation, the Security Context can search for the equivalent of that AnchorID, a KeySSI without access. More precisely, the Security Context can read the message  at a higher level. For rewrite/anchor operations, the same thing happens, i.e. if in our Security Context as programmers, we do not have the right KeySSI, then the wallet automatically searches in the Security Context and determines if it has the right key.</p>

<p style='text-align: justify;'>Now, no matter what KeySSI type we send the resolvers to rebuild a DSU, the level of access we get to that DSU depends on the information in the Security Context. Better said, at this moment, we can load a DSU with a zero access SSI, but because it finds information in the Security Context and a more powerful KeySSI, it will load the respective DSU.</p>


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