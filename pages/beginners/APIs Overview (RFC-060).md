---
title: APIs Overview 
layout: home
parent: OpenDSU for Beginners
nav_order: 2
---

APIs Overview (RFC-060)

# **APIs Overview (RFC-060)**
{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs).

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

This RFC summarizes the different API spaces available for Javascript client-side applications.
## Get started

In order to use the API, it is need to call the function opendsu.loadApi(apiSpaceName), where opendsu is the folder containing the code for the API and “apiSpaceName” is one of the mandatory APIs space names in the list below.
### API Spaces Summary

| **API Space**                                                                            | **Purpose**                                      |
|:-----------------------------------------------------------------------------------------|:-------------------------------------------------|
| [Anchoring](https://www.opendsu.org/pages/contributors/Anchoring%20(RFC-069).html)       | Anchoring service                                |
| [BDNS](https://www.opendsu.org/pages/contributors/BDNS%20(RFC-067).html)                 | Handling Blockchain Domain Name Service          |
| [Bricking](https://www.opendsu.org/pages/contributors/Bricking%20(RFC-070).html)         | Bricks Storages                                  |
| [Cache](https://www.opendsu.org/pages/contributors/Cache%20(RFC-077).html)               | Utilities for caching                            |
| [Config](https://www.opendsu.org/pages/contributors/Config%20(RFC-078).html)             | Utilities for openDSu environment configurations |
| [Credentials](https://www.opendsu.org/pages/contributors/CredentialsDSU%20(RFC-057).html) |                                                  |
| [Crypto](https://www.opendsu.org/pages/advanced/Crypto%20(RFC-066).html)                 | Recommended Crypto APIs                          |
|                                                                                          |                                                  |
| [DB]Ohttps://www.opendsu.org/pages/contributors/Database%20(RFC-061).html)               |                                                  |
|                                                                                          |                                                  |
|                                                                                          |                                                  |


	

db  DSU based databases
dt   DSU Types
enclave  Private data storage
error  Custom error management
http  Http client APIs
keyssi  KeySSI manipulation
ledger  
lock   NEW   
m2dsu   Message To DSU operations Mapping Engine
mq KeySSIs based Message Queues
notifications  KeySSIs based Notifications
oauth  
resolver  Obtain DSU Representations using a resolver and handlers.

sc  Security Context

system This API space allows the user to configure environment variables of the OpenDSU system.

utils  OpenDSU related utility APIs

w3cdid
	
workers   NEW

//Load openDSU environment

require("../privatesky/psknode/bundles/openDSU");

//Load openDSU SDK

const opendsu = require("opendsu");

//Load the API space of your choice

const resolver = opendsu.loadApi("resolver");

const keyssispace = opendsu.loadApi("keyssi");

const http = opendsu.loadApi("http");

How to use
2. Operations on DSUs

Click here to know all operations available on DSU objects
3. Operations on KeySSIs

Click here to know all common operations available for every KeySSI

<p style='text-align: justify;'>There are also family-specific functions that <b>you</b> can find on the dedicated pages of each family.</p>

