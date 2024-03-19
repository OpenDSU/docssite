---
title: Installation Info 
layout: home
parent: OpenDSU APIHub-APIs
nav_order: 1
---



# **Installation Info (RFC-120)**
{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs)

**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)



<!-- TOC -->
* [Abstract](#abstract)
* [1. Installation details](#1-installation-details)
  * [1.1. Responses](#11-responses)
    * [1.1.1 Schema](#111-schema)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->



# **Abstract**

<p style='text-align: justify;'>This RFC provides information about the current APIHub running instance, along with details about the current workspace and OpenDSU-SDK installation.
</p>

# **1. Installation details**

<p style='text-align: justify;'>The service presents resource usages like userCPUTime, systemCPUTime, uptime and a number of reads/writes using FS. Also, the commit numbers of the workspace and OpenDSU-SDK installation are provided.
</p>
	

    GET /installation-details/


## 1.1. Responses


| Status Code | Description  |
|:------------|:-------------|
| 200         |Returns details about current resource usages as well as the workspace and OpenDSU-SDK commits numbers.              |

	

### 1.1.1 Schema

```js

{

"opendsu-sdk": {

  "commitNo": "string",

  "commitMessage": "string"

},

"workspace": {

  "commitNo": "string",

  "commitMessage": "string"

},

"resourceUsage": {

  "userCPUTime": 2718000,

  "systemCPUTime": 906000,

  "maxRSS": 235008,

  "sharedMemorySize": 0,

  "unsharedDataSize": 0,

  "unsharedStackSize": 0,

  "minorPageFault": 0,

  "majorPageFault": 226256,

  "swappedOut": 0,

  "fsRead": 708,

  "fsWrite": 27,

  "ipcSent": 5,

  "ipcReceived": 2,

  "signalsCount": 0,

  "voluntaryContextSwitches": 0,

  "involuntaryContextSwitches": 0,

  "uptime": 47.777584

}

}


```

**Contributors**



1. <p style='text-align: justify;'><a href="https://www.axiologic.net/">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="https://www.opendsu.org/">www.opendsu.org</a> site.

2. <p style='text-align: justify;'><a href="https://pharmaledger.org/">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.

3. PrivateSky Research Project: MIT licensed content accordingly with the contracts. 
<a href="https://profs.info.uaic.ro/~ads/PrivateSky/"> https://profs.info.uaic.ro/~ads/PrivateSky/</a>



# **Annex 1. Contributors**

| **Current Editors**                                                  | **Email**                                                               |
|:---------------------------------------------------------------------|:------------------------------------------------------------------------|
| Sînică Alboaie                                                       | sinica.alboaie@axiologic.net                                            |
| Rafael Mastaleru                                                     | raf@rms.ro                                                              |
| Nicoleta Mihalache                                                   | nicoleta@axiologic.net                                                  |
| **Contributors Axiologic Research**                                  | **Email**                                                               |
| Adrian Ganga                                                         | adrian@axiologic.net                                                    |
| Andi-Gabriel Țan                                                     | andi@axiologic.net                                                      |
| Cosmin Ursache                                                       | cosmin@axiologic.net                                                    |
| Daniel Sava                                                          | daniel@axiologic.net                                                    |
| Nicoleta Mihalache                                                   | nicoleta@axiologic.net                                                  |
| Valentin Gérard                                                      | valentin@axiologic.net                                                  |
| **PrivateSky Contributors**                                          | **Email**                                                               |
| Alex Sofronie                                                        | alsofronie@gmail.com (DPO)                                              |
| Cosmin Ursache                                                       | cos.ursache@gmail.com (UAIC)                                            |
| Daniel Sava                                                          | sava.dumitru.daniel@gmail.com (HVS, AQS)                                |
| Daniel Visoiu                                                        | visoiu.daniel.g@gmail.com (SGiant)                                      |
| Lenuța Alboaie                                                       | lalboaie@gmail.com (UAIC)                                               |
| Rafael Mastaleru                                                     | rafael@rms.ro (RMS)                                                     |
| Sînică Alboaie                                                       | salboaie@gmail.com (UAIC)                                               |
| Vlad Balmos                                                          | vlad.balmos@gmail.com (Code932)                                         |
| **PharmaLedger Contributors**                                        | **Email**                                                               |
| Ana Balan                                                            | bam@rms.ro (RMS)                                                        |
| Bogdan Mastahac                                                      | mab@rms.ro (RMS)                                                        |
| Cosmin Ursache                                                       | cos@rms.ro (RMS)                                                        |
| Rafael Mastaleru                                                     | raf@rms.ro (RMS)                                                        |

