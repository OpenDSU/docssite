---
title: BDNS 
layout: home
parent: OpenDSU APIHub APIs
nav_order: 3
---

# BDNS
{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs).


**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.
This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)

<!-- TOC -->
* [BDNS](#bdns)
<!-- TOC -->
 
BDNS (RFC-122)

Feedback
A period when the community can review the RFC (comment Docs).


Document Maintainers: Andi Gabriel Tan 2022. List of other contributors in Annex. 1.
Copyright: MIT license

Copyright
Copyright (c) <2018-2022> Axiologic Research and Contributors.
This document is licensed under MIT license:
(https://en.wikipedia.org/wiki/MIT_License)

Contributors
Description
Axiologic Research
www.axiologic.net 
New content, cleaned the original texts under PharmaLedger Association and Novartis funding. 
MIT licensed content accordingly with the contracts.
Publish and maintain www.opendsu.com site.
PharmaLedger Project Members
www.pharmaledger.eu 
Review, feedback, observations, new content and corrections MIT licensed accordingly with the consortium agreements.
PrivateSky Research Project
Initial content (www.privatesky.xyz). 
MIT licensed content accordingly with the contracts.
https://profs.info.uaic.ro/~ads/PrivateSky/ 




# Abstract
<p style='text-align: justify;'>The "BDNS" API space offers a set of portable functions used to request information about the blockchain domain used by your DSU. The agents should handle these operations automatically to get the anchoring service associated with the domain, the brick storage location and more information.
</p>


# 1. Get BDNS configuration
<p style='text-align: justify;'>Get the loaded BDNS configuration. The result is the completed configuration. Because loading BDNS configuration can take some time, accessing the endpoint sometimes can result in errors. In case of error, the result may be a partially loaded configuration.
</p>

````
GET /bdns Get the loaded BDNS configuration.
````

## 1.1. Responses

| **Status Code**  | **Description**                                                             |
|:-----------------|:----------------------------------------------------------------------------|
| 200              | Returns the loaded BDNS configuration (see 1.1.1 schema application/ json). |
| 404              | BDNS configuration not loaded yet.                                          |
| 500              | Generic failure when trying to read or parse bdns.host file                 |


### 1.1.1. Schema: application/json

````
{
 "default": {
   "replicas": [],
   "brickStorages": [
     "$ORIGIN"
   ],
   "anchoringServices": [
     "$ORIGIN"
   ],
   "notifications": [
     "$ORIGIN"
   ]
 },
 "epi": {
   "replicas": [],
   "brickStorages": [
     "$ORIGIN"
   ],
   "anchoringServices": [
     "$ORIGIN"
   ],
````


**Contributors**


1. <p style='text-align: justify;'><a href="www.axiologic.net">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="www.opendsu.com">www.opendsu.com</a> site.

2. <p style='text-align: justify;'><a href="www.pharmaledger.eu">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.


3. <a href="www.privatesky.xyz">PrivateSky Research Project</a>: MIT licensed content accordingly with the contracts. https://profs.info.uaic.ro/~ads/PrivateSky/


# Annex 1. Contributors

| **Current Editors**                  | **Email**                                 |
|:-------------------------------------|:------------------------------------------|
| Nicoleta Mihalache                   | nicoleta@axiologic.net                    |
| Rafael Mastaleru                     | rafael@rms.ro                             |
| Sînică Alboaie                       | sinica.alboaie@axiologic.net              |
| **Contributors Axiologic Research**  | **Email**                                 |
| Adrian Ganga                         | adrian@axiologic.net                      |
| Andi-Gabriel Țan                     | andi@axiologic.net                        |
| Cosmin Ursache                       | cosmin@axiologic.net                      |
| Daniel Sava                          | daniel@axiologic.net                      |
| Nicoleta Mihalache                   | nicoleta@axiologic.net                    |
| Valentin Gérard                      | valentin@axiologic.net                    |
| **PrivateSky Contributors**          | **Email**                                 |
| Alex Sofronie                        | alsofronie@gmail.com (DPO)                |
| Cosmin Ursache                       | cos.ursache@gmail.com (UAIC)              |
| Daniel Sava                          | sava.dumitru.daniel@gmail.com (HVS, AQS)  |
| Daniel Visoiu                        | visoiu.daniel.g@gmail.com (SGiant)        |
| Lenuța Alboaie                       | lalboaie@gmail.com (UAIC)                 |
| Rafael Mastaleru                     | rafael@rms.ro (RMS)                       |
| Sînică Alboaie                       | salboaie@gmail.com (UAIC)                 |
| Vlad Balmos                          | vlad.balmos@gmail.com (Code932)           |
| **PharmaLedger Contributors**        | **Email**                                 |
| Ana Balan                            | bam@rms.ro (RMS)                          |
| Bogdan Mastahac                      | mab@rms.ro (RMS)                          |
| Cosmin Ursache                       | cos@rms.ro (RMS)                          |
| Rafael Mastaleru                     | raf@rms.ro (RMS)                          |