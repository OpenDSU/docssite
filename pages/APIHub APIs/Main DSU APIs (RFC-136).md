---
title: Main DSU APIs 
layout: home
parent: OpenDSU APIHub APIs
nav_order: 17
---



# **Main DSU APIs (RFC-136)**
{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs).

**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright**© 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)

<!-- TOC -->

* [Abstract](#abstract)
* [1. Get Main DSU](#1-get-main-dsu-)
  * [1.1. Responses](#11-responses)
<!-- TOC -->

# **Abstract**

# 1. Get Main DSU        

<p style='text-align: justify;'>The GetMainDSU service returns the static DSU that can be set as the main context in various scenarios. In order to set the Main DSU, on the first API call that will occur on this endpoint, a DSU will be created from the provided environment.json file. This file is located in the server root folder.</p>


````
 GET /getSSIForMainDSU
````

## 1.1. Responses

| Status Code  | Description                                                                   |
|:-------------|:------------------------------------------------------------------------------|
| 200          | Operation handled with success. The Key SSI for the mainDSU will be returned. |
| 500          | Failed to set or get the Main DSU.                                            |



**Contributors**

1. <p style='text-align: justify;'><a href="https://www.axiologic.net/">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="https://www.opendsu.org/">www.opendsu.org</a> site.

2. <p style='text-align: justify;'><a href="https://pharmaledger.org/">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.

3. PrivateSky Research Project: MIT licensed content accordingly with the contracts. 
<a href="https://profs.info.uaic.ro/~ads/PrivateSky/"> https://profs.info.uaic.ro/~ads/PrivateSky/</a>



# **Annex 1. Contributors**

| **Current Editors**                 | **Email**                                |
|:------------------------------------|:-----------------------------------------|
| Sînică Alboaie                      | sinica.alboaie@axiologic.net             |
| Rafael Mastaleru                    | rafael@rms.ro                            |
| Nicoleta Mihalache                  | nicoleta@axiologic.net                   |
| **Contributors Axiologic Research** | **Email**                                |
| Adrian Ganga                        | adrian@axiologic.net                     |
| Andi-Gabriel Țan                    | andi@axiologic.net                       |
| Cosmin Ursache                      | cosmin@axiologic.net                     |
| Daniel Sava                         | daniel@axiologic.net                     |
| Nicoleta Mihalache                  | nicoleta@axiologic.net                   |