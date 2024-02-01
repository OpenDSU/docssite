---
title: APIs Overview 
layout: home
parent: OpenDSU for Beginners
nav_order: 1
---
<style>
.imgMain{
    display.block;
    margin-left:70px;
    margin-right:auto;
} 
</style>


# Apis Overview (RFC 060)
{: .no_toc }


{: .feedback }
A period when the community can review the RFC (comment Docs).

**Document Maintainers: Andi Gabriel Tan 2022. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright**
Copyright © 2018-2024 Axiologic Research and Contributors.
This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)



<!-- TOC -->
* [Abstract](#abstract)
* [Get started](#get-started)
  * [API Spaces Summary](#api-spaces-summary)
* [Operations on DSUs](#operations-on-dsus)
* [Operations on KeySSIs](#operations-on-keyssis)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->



# Abstract

This RFC summarizes the different API spaces available for Javascript client-side applications.
# Get started

In order to use the API, it is need to call the function opendsu.loadApi(apiSpaceName), where opendsu is the folder containing the code for the API and “apiSpaceName” is one of the mandatory APIs space names in the list below.
## API Spaces Summary

| **API Space**                                                                              | **Purpose**                                                                               |
|:-------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------|
| [Anchoring](https://www.opendsu.org/pages/contributors/Anchoring%20(RFC-069).html)         | Anchoring service                                                                         |
| [BDNS](https://www.opendsu.org/pages/contributors/BDNS%20(RFC-067).html)                   | Handling Blockchain Domain Name Service                                                   |
| [Bricking](https://www.opendsu.org/pages/contributors/Bricking%20(RFC-070).html)           | Bricks Storages                                                                           |
| [Cache](https://www.opendsu.org/pages/contributors/Cache%20(RFC-077).html)                 | Utilities for caching                                                                     |
| [Config](https://www.opendsu.org/pages/contributors/Config%20(RFC-078).html)               | Utilities for openDSu environment configurations                                          |
| [Credentials](https://www.opendsu.org/pages/contributors/CredentialsDSU%20(RFC-057).html)  |                                                                                           |
| [Crypto](https://www.opendsu.org/pages/advanced/Crypto%20(RFC-066).html)                   | Recommended Crypto APIs                                                                   |
| [DB](https://www.opendsu.org/pages/contributors/Database%20(RFC-061).html)                 | DSU based databases                                                                       |
| [DT](https://www.opendsu.org/pages/concepts/DSU%20Types%20(RFC-007).html)                  | DSU Types                                                                                 |
| [Enclave](https://www.opendsu.org/pages/beginners/Enclaves%20(RFC-097).html)               | Private data storage                                                                      |
| [Error reporting](https://www.opendsu.org/pages/beginners/APIHub%20(RFC-064).html)         | Custom error management                                                                   |
| [HTTP](https://www.opendsu.org/pages/advanced/HTTP%20(RFC-071).html)                       | Http client APIs                                                                          |
| [KeySSI](https://www.opendsu.org/pages/advanced/KeySSI%20(RFC-068).html)                   | KeySSI manipulation                                                                       |
| [Ledger](https://www.opendsu.org/pages/contributors/Ledger%20(RFC-080).html)               |                                                                                           |
| lock                                                                                       | New                                                                                       |
| [m2dsu](https://www.opendsu.org/pages/contributors/Mapping%20Engine%20(RFC-076).html)      | Message To DSU operations Mapping Engine                                                  |
| [mq](https://www.opendsu.org/pages/contributors/Message%20Queues%20(RFC-073).html)         | KeySSIs based Message Queues                                                              |
| [Notifications](https://www.opendsu.org/pages/contributors/Notifications%20(RFC-072).html) | KeySSIs based Notifications                                                               |
| [OAuth](https://www.opendsu.org/pages/contributors/OAuth%20(RFC-040).html)                 |                                                                                           |
| [Resolver](https://www.opendsu.org/pages/advanced/Resolver%20(RFC-065).html)               | Obtain DSU Representations using a resolver and handlers.                                 |
| [SC](https://www.opendsu.org/pages/beginners/Security%20Context%20(RFC-075).html)          | Security Context                                                                          |
| [System](https://www.opendsu.org/pages/contributors/System%20(RFC-079).html)               | This API space allows the user to configure environment variables of the OpenDSU system.  |
| utils                                                                                      | OpenDSU related utility APIs                                                              |
| [w3cdid](https://www.opendsu.org/pages/advanced/W3C%20DIDs%20(RFC-082).html)               |                                                                                           |
| workers                                                                                    | NEW                                                                                       |



```js
//Load openDSU environment

require("../privatesky/psknode/bundles/openDSU");

//Load openDSU SDK

const opendsu = require("opendsu");

//Load the API space of your choice

const resolver = opendsu.loadApi("resolver");

const keyssispace = opendsu.loadApi("keyssi");

const http = opendsu.loadApi("http");

}
```


<p style="text-align:center"> <b>How to use</b></p>



# Operations on DSUs


[Click here to know all operations available on DSU objects](https://www.opendsu.org/pages/beginners/DSU%20Object%20(RFC-063).html)

# Operations on KeySSIs


[Click here to know all common operations available for every KeySSI](https://www.opendsu.org/pages/concepts/KeySSI%20(RFC-002).html)

There are also family-specific functions that you can find on the dedicated pages of each family.


**Contributors**   

1. [Axiologic Research](www.axiologic.net):New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the [www.opendsu.com](www.opendsu.com) site.
2. [PharmaLedger Project](www.pharmaledger.eu): Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.
3. [PrivateSky Research Project](www.privatesky.xyz):  MIT licensed content accordingly with the contracts. [https://profs.info.uaic.ro/~ads/PrivateSky/](https://profs.info.uaic.ro/~ads/PrivateSky/) 


# Annex 1. Contributors

| **Current Editors**                 | **Email**                          |
|:------------------------------------|:-----------------------------------|
| Sînică Alboaie                      | sinica.alboaie@axiologic.net       |
| Cosmin Ursache                      | cosmin@axiologic.net               |
| Teodor Lupu                         | teodor@axiologic.net               |
| Andi-Gabriel Tan                    | andi@axiologic.net                 |
| **Contributors Axiologic Research** | **Email**                          |
| Adrian Ganga                        | adrian@axiologic.net               |
| Andi-Gabriel Țan                    | andi@axiologic.net                 |
| Cosmin Ursache                      | cosmin@axiologic.net               |
| Daniel Sava                         | daniel@axiologic.net               |
| Nicoleta Mihalache                  | nicoleta@axiologic.net             |
| Teodor Lupu                         | teodor@axiologic.net               |
| Valentin Gérard                     | valentin@axiologic.net             |
| **PrivatSky Contributors**          | **Email**                          | 
| Alex Sofronie                       | alsofronie@gmail.com(DPO)          |
| Cosmin Ursache                      | cosmin@axiologic.net(UAIC)         |
| Daniel Sava                         | daniel@axiologic.net(HVS, AQS)     |
| Daniel Visoiu                       | visoiu.daniel.g@gmail.com(SGiant)  |
| Lenuta Alboaie                      | lalboaie@gmail.com(UAIC)           |
| Rafael Mastaleru                    | raf@rms.ro (RMS)                   |
| Sînică Alboaie                      | sinica.alboaie@axiologic.net(UAIC) |   
| Vlad Balmos                         | vlad.balmos@gmail.com(Code932)     |
| **PharmaLedger Contributors**       | **Email**                          |
| Ana Balan                           | bam@rms.ro (RMS)                   |
| Bogdan Mastahac                     | mab@rms.ro (RMS)                   |
| Cosmin Ursache                      | cos@rms.ro (RMS)                   |
| Rafael Mastaleru                    | raf@rms.ro (RMS)                   |
