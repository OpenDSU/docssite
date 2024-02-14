---
title: Ignorable Error Codes 
layout: home
parent: OpenDSU Drafts
nav_order: 3
---


# **APIHub Locking Endpoints (RFC-104)**

{: .no_toc }

{: .draft }
A period when the community can review the RFC (comment Docs).

**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)

<!-- TOC -->
* [APIHub Locking Endpoints (RFC-104)](#apihub-locking-endpoints-rfc-104)
* [Abstract](#abstract)
* [APIHub Locking Component](#apihub-locking-component)
* [Lock Implementation](#lock-implementation)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->

# Abstract

<p style='text-align: justify;'>

OpenDSU wallets in enterprise use cases require a synchronization mechanism in order to avoid unnecessary anchoring conflicts that could impact the user experience. This RFC describes some simple APIs that can solve this issue.
</p>

# APIHub Locking Component

| Status Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|:------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| /lock       | **Query Params:**  <br> secret: is an arbitrary string that ideally is a cryptographic random number (minim 32 bytes) <br> id: is any string  <br> period: is the number of milliseconds while the lock is reserved for the caller <br> <br> HTTP  **Return Code:**  <br> 200 if the lock got acquired <br> 409 if the lock can't be acquired (409 == conflict) <br> 500 if the lock cannot be acquired because of a server error <br> <br> **Example:** <br> The following request will put a lock on object “123” for 3 seconds. <br> /lock?key=secret&id=123&period=3000 |
| /unlock     | **Query Params:**  <br>  secret: is an arbitrary string  <br> id: is any string <br> <br> **HTTP  Return Code:** 200 in if the operation succeeded; <br>  404 if failed to release the lock because doesn’t exist; <br>  500 if the lock cannot be released because of a server error; <br> <br> **Example:** <br> The following request will release the lock on object “123” <br>  /unlock?key=secret&id=123                                                                                                                                                              |


# Lock Implementation

<p style='text-align: justify;'>

A lock is a file containing the “lock” file in a folder in /apihub-root/external-volume/locks/{folderName}, where folderName is the base58 of the id of the lock. The “lock” file contains a JSON with fields: expire and secret. The value of the “expire” field is computed as the timestamp of a moment in the future controlled by the period parameter. Supposing that the current time is greater than the “expire” value, the lock operation should succeed (unlock is not mandatory because any lock will be automatically unlocked in time). However, it is still recommended to do an unlock to ensure that other wallets will not be locked out for too long.
</p>


**Contributors**

1. <p style='text-align: justify;'><a href="www.axiologic.net">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="www.opendsu.com">www.opendsu.org</a> site.

2. <p style='text-align: justify;'><a href="www.pharmaledger.eu">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.

3. <a href="www.privatesky.xyz">PrivateSky Research Project</a>: MIT licensed content accordingly with the contracts. https://profs.info.uaic.ro/~ads/PrivateSky/

# Annex 1. Contributors


| **Current Editors**                 | **Email**                               |
|:------------------------------------|:----------------------------------------|
| Sînică Alboaie                      | sinica.alboaie@axiologic.net            |
| Nicoleta Mihalache                  | nicoleta@axiologic.net                  |
| Andi-Gabriel Țan                    | andi@axiologic.net                      |
| **Contributors Axiologic Research** | **Email**                               |
| Adrian Ganga                        | adrian@axiologic.net                    |
| Andi-Gabriel Țan                    | andi@axiologic.net                      |
| Cosmin Ursache                      | cosmin@axiologic.net                    |
| Daniel Sava                         | daniel@axiologic.net                    |
| Nicoleta Mihalache                  | nicoleta@axiologic.net                  |
