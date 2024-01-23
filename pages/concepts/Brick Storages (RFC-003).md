---
title: Brick Storages 
layout: home
parent: OpenDSU Concepts
nav_order: 3
---

# Brick Storages (RFC-003)
{: .no_toc }

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

The basic implementation of Brick Storages is very simple and aims to provide a storage solution that works well for open and permissionless networks. They are simple web services capable of storing DSUs’ content safely into storages that are shared with multiple users or organizations. Anyone with the KeySSI associated with a particular DSU can use it to reconstruct the same DSU using the bricks. This mechanism allows users of the network to collaborate safely and efficiently without giving up ownership of their data. In this RFC, we describe the storage mechanism known as “bricks” in the OpenDSU ecosystem.
## Brick Storages mechanism

### General Operations

To store DSUs safely in a shared storage, OpenDSU will first split the DSUs into many pieces called bricks. Each brick contains a small amount of encrypted data before being stored in the storage medium using hash as identifiers. One of these bricks, however, is remarkable and contains the secret map that will be used to reconstruct the entire DSU in the correct order. It is called the BrickMap. When a DSU is created with a KeySSI, an anchor identifier is derived from the key. Now, each time our DSU is updated and anchored in the blockchain, a new brick containing the BrickMap represented by its HashLinkSSI will be created and associated with the anchor identifier to keep track of all different BrickMap versions.
### General Operations


Each brick within the brick storage (except the BrickMap) is encrypted using a different symmetric key called SymmetricalEncryptionSSI. This key makes it very hard for attackers to obtain the full content of a DSU. Even if the attacker would find the symmetric key for a brick (which is unlikely), it could only decrypt this single brick. Fortunately, we don’t have to remember all these encryption keys. The BrickMap will keep track of them for us, along with the associated HashLinkSSIs referencing the bricks.

Unlike data bricks, BrickMaps are encrypted using the KeySSI encryption key. This thing allows the KeySSI owner to access the BrickMap while preventing access to other users.
### Notes


While BrickMaps associated with DSUs stay constant and immutable once they are anchored, DSUs are flexible and, most times, do not remain constant and can even be deleted. That is why we have multiple BrickMaps that exist in the history of each DSU.  While the latest BrickMap can be used to reconstruct the latest version of the DSU, it is also possible to reconstruct previous versions of the DSU using previous HashLinkSSIs. This is possible because data bricks not used anymore in the latest DSU version are not deleted from the off-chain storage, in order to keep it auditable.
## BrickMaps

### Data structure

The BrickMap is a special brick stored along with the other bricks in the brick storage. It is used to reconstruct the DSU in your execution environment by retrieving bricks from the brick storage.

Figure 1: Brick Storage

To achieve that reconstruction, the BrickMap is structured in a JSON format that contains a header with metadata, such as the date of creation, and a list of items representing files and folders of the DSU with their metadata and an array of bricks containing their location and the symmetric encryption key that is necessary to read them.
### Strategies for Versioning

#### A diff for each version

This strategy can be used assuming that the initial version of the DSU sets the validation rules by containing all the relevant DSU Type-Specific code (the DSU constitution). All the other versions will contain only the diffs (differences added by each version), and therefore all the versions should be loaded and verified one by one. This strategy could perform badly if the number of versions is high, but it can be used with untrusted parties. The diffs for each version can be encrypted with the same key as the first version of the DSU or encrypted using the public key of the KeySSI.

The second option allows you to propose changes without having read rights to the DSU. This option works only with QueueSSI (because the privateKey is public) and could be used to implement a message queue using DSUs.

#### First BrickMap and Latest Diff

This strategy can be used assuming that the initial version of the DSU sets the validation rules by containing all the relevant code (the DSU constitution), but the intermediate versions can be ignored because each new version will contain the full diff compared to the first BrickMap. This strategy will check if a trusted party signed the latest diff. This strategy tries to minimize the size of the bricks saved as BrickMap for each version. While it performs well, this strategy cannot be used with untrusted parties.

####  First BrickMap and Latest Version

This strategy will only check that a trusted party signed the latest version; therefore, nothing else is verified. While it performs well, this strategy cannot be used with untrusted parties.

## Annexes

### BrickMap JSON Structure
```
/**
* The state of the BrickMap has the following structure
*
* header: {
*  metadata: {
*      createdAt: 'utc timestamp string'
*  },
*  items: {
*      folder1: {
*          metadata: {
*              createdAt: 'utc timestamp string'
*          },
*          items: {
*              file.txt: {
*                  metadata: {
*                      createdAt: 'utc timestamp string',
*                      updatedAt: 'utc timestamp string'
*                  },
*                  bricks: [
                     {
                        hashLink: hashLinkSSI1,
                  symmetricalEncryption: symetricalEncryptionSSI1
               },
            {
                        hashLink: hashLinkSSI2,
                  symmetricalEncryption: symmetricalEncryptionSSI2
                },
           ...
            ]
*              }
*          }
*
*      },
*
*      file2.txt: {
*          metadata: {
*              createdAt: 'utc timestamp string',
*              updatedAt: 'utc timestamp string'
*          },
*          bricks: [... list of bricks ...]
*      }
*  }
* }

```

### Options

```
!=options

bufferSize

storageProvider

brickFactoryFunction

fsAdapter

brickDataExtractorCallback

keySSI
```



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