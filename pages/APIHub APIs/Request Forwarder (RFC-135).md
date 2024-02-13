---
title: Request Forwarder 
layout: home
parent: OpenDSU APIHub APIs
nav_order: 16
---


# Request Forwarder (RFC-135)
{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs).

**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright**© 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)

<!-- TOC -->
* [Abstract](#abstract)
* [1. Forward Request for Authenticated Client](#1-forward-request-for-authenticated-client)
  * [1.1. Body Parameters](#11-body-parameters)
    * [1.1.1. Example: Application/JSON](#111-example-applicationjson)
  * [1.2. Request Headers](#12-request-headers)
  * [1.3. Responses](#13-responses)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->


# **Abstract**

<p style='text-align: justify;'>This RFC describes the creation of a new forward request for the authenticated client.
</p>

# 1. **Forward Request for Authenticated Client**

<p style='text-align: justify;'>ForwardRequest service creates a new request from APIHub with the provided options and body. It facilitates access to different resources where access is restricted.
</p>
	
````
 POST /forwardRequestForAuthenticatedClient
````


## 1.1. Body Parameters

| Name       | Type  | Value  | Description                 |
|:-----------|:------|:-------|:----------------------------|
| body       |       |        | Options for new requests.   |


### 1.1.1. Example: Application/JSON

```js
{
 "options": {
   "method": "POST"
 },
 "body": {},
 "url": "https://inner.network:8090"
}
```

## 1.2. Request Headers

| Name          | Type   | Value     | Description                   |
|:--------------|:-------|:----------|:------------------------------|
| authorization | string | *required | Bearer authorization token.   |



## 1.3. Responses

| Status Code  | Description                                                                                         |
|:-------------|:----------------------------------------------------------------------------------------------------|
| 200          | Operation handled with success. Status code may be returned from the forwarded request’s response.  |
| 400          | Bad request. The request URL was not provided.                                                      |
| 403          | Unauthorized access.                                                                                |
| 500          | Error on performing the second request.                                                             |


**Contributors**

1. <p style='text-align: justify;'><a href="https://www.axiologic.net/">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="https://www.opendsu.org/">www.opendsu.org</a> site.

2. <p style='text-align: justify;'><a href="https://pharmaledger.org/">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.

3. PrivateSky Research Project: MIT licensed content accordingly with the contracts. 
<a href="https://profs.info.uaic.ro/~ads/PrivateSky/"> https://profs.info.uaic.ro/~ads/PrivateSky/</a>


# **Annex 1. Contributors**


| **Current Editors**                 | **Email**                            |
|:------------------------------------|:-------------------------------------|
| Sînică Alboaie                      | sinica.alboaie@axiologic.net         |
| Rafael Mastaleru                    | rafael@rms.ro                        |
| Nicoleta Mihalache                  | nicoleta@axiologic.net               |
| **Contributors Axiologic Research** | **Email**                            |
| Adrian Ganga                        | adrian@axiologic.net                 |
| Andi-Gabriel Țan                    | andi@axiologic.net                   |
| Cosmin Ursache                      | cosmin@axiologic.net                 |
| Daniel Sava                         | daniel@axiologic.net                 |
| Nicoleta Mihalache                  | nicoleta@axiologic.net               |
| Valentin Gérard                     | valentin@axiologic.net               |
| **PharmaLedger**                    | **Email**                            |
| Rafael Mastaleru                    | raf@rms.ro (RMS)                     |

