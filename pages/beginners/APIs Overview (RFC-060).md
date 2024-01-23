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

API Space    Purpose

anchoring  Anchoring Services

bdns  Handling Blockchain Domain Name Service

bricking  Bricks Storages

cache  Utilities for caching

config  Utilities for openDSu environment configurations

credentials
	

crypto   Recommended Crypto APIs
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

There are also family-specific functions that you can find on the dedicated pages of each family.

