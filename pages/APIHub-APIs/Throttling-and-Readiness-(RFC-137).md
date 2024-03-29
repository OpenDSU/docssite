---
title: Throttling and Readiness 
layout: home
parent: APIHub-APIs
nav_order: 18
---

# **APIHUb Throttling and Readiness (RFC-137)**

{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs).


**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)
 
<!-- TOC -->
* [Abstract](#abstract)
* [1. Ready Probe](#1-ready-probe)
  * [1.1. Responses Headers](#11-responses-headers)
  * [1.2 Responses](#12-responses)
    * [1.2.1 Example: Application/JSON](#121-example-applicationjson)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->

# **Abstract**

<p style='text-align: justify;'>Provides information for the readiness of APIHub to accept requests. The token bucket algorithm is used to implement the management of requests and to avoid any possible flood requests that may come from a DDoS-type attack.
</p>

# **1. Ready Probe**
<p style='text-align: justify;'>For the throttled APIHub instances, the service responds with the configured token limit and the remaining tokens. If the limit is exceeded, the 429 HTTP status code is returned.
</p>

    GET /ready-probe
 
## 1.1. Responses Headers

| Name                  | Type     | Value  | Description                                |
|:----------------------|:---------|:-------|:-------------------------------------------|
| X-RateLimit-Limit     | integer  |        | Request tokens limit. <br/>Example: 60000. |
| X-RateLimit-Remaining | integer  |        | Request tokens. <br/> Example: 59900.      |
  
 
## 1.2 Responses

| Status Code          | Description                                                                                                                                                          |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 200                  | Returns information about current throttling numbers or the string “Server ready” if the APIHub instance is not using the rate limit mechanism. (see 1.2.1 example). |
| 429                  | Rate limit exceeded.                                                                                                                                                 |
| 500                  | Integral throttling middleware error.                                                                                                                                |
 

### 1.2.1 Example: Application/JSON
```
{
 "remainingTokens": 59900,
 "tokenLimit": 60000
}
```

**Contributors**

1. <p style='text-align: justify;'><a href="https://www.axiologic.net/">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="https://www.opendsu.org/">www.opendsu.org</a> site.

2. <p style='text-align: justify;'><a href="https://pharmaledger.org/">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.

3. PrivateSky Research Project: MIT licensed content accordingly with the contracts. 
<a href="https://profs.info.uaic.ro/~ads/PrivateSky/"> https://profs.info.uaic.ro/~ads/PrivateSky/</a>

   

# **Annex 1. Contributors**

| **Current Editors**                         | **Email**                                 |
|:--------------------------------------------|:------------------------------------------|
| Sînică Alboaie                              | sinica.alboaie@axiologic.net              |
| Rafael Mastaleru                            | rafael@rms.ro                             |
| Nicoleta Mihalache                          | nicoleta@axiologic.net                    |
| **Contributors Axiologic Research**         | **Email**                                 |
| Adrian Ganga                                | adrian@axiologic.net                      |
| Andi-Gabriel Țan                            | andi@axiologic.net                        |
| Cosmin Ursache                              | cosmin@axiologic.net                      |
| Daniel Sava                                 | daniel@axiologic.net                      |
| Nicoleta Mihalache                          | nicoleta@axiologic.net                    |
| Valentin Gérard                             | valentin@axiologic.net                    |
| **PrivateSky Contributors**                 | **Email**                                 |
| Alex Sofronie                               | alsofronie@gmail.com (DPO)                |
| Cosmin Ursache                              | cos.ursache@gmail.com (UAIC)              |
| Daniel Sava                                 | sava.dumitru.daniel@gmail.com (HVS, AQS)  |
| Daniel Visoiu                               | visoiu.daniel.g@gmail.com (SGiant)        |
| Lenuța Alboaie                              | lalboaie@gmail.com (UAIC)                 |
| Rafael Mastaleru                            | rafael@rms.ro (RMS)                       |
| Sînică Alboaie                              | salboaie@gmail.com (UAIC)                 |
| Vlad Balmos                                 | vlad.balmos@gmail.com (Code932)           |
| **PharmaLedger Contributors**               | **Email**                                 |
| Ana Balan                                   | bam@rms.ro (RMS)                          |
| Bogdan Mastahac                             | mab@rms.ro (RMS)                          |
| Cosmin Ursache                              | cos@rms.ro (RMS)                          |
| Rafael Mastaleru                            | raf@rms.ro (RMS)                          |





