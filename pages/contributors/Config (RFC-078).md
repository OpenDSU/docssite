---
title: Config 
layout: home
parent: OpenDSU Contributors
nav_order: 19
---
# **Config**

{: .feedback }
A period when the community can review the RFC (comment Docs).


**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)

<!-- TOC -->
* [Abstract](#abstract)
* [1. Config functions](#1-config-functions)
  * [Function autoConfigFromEnvironment(environment)](#function-autoconfigfromenvironmentenvironment)
  * [Function disableLocalVault()](#function-disablelocalvault)
  * [Function get(key)](#function-getkey)
  * [Function set(key, value)](#function-setkey-value)
  * [Function getEnv(key, callback)](#function-getenvkey-callback)
  * [Function setEnv(key, value, callback)](#function-setenvkey-value-callback)
  * [Function readEnvFile(callback)](#function-readenvfilecallback)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->


# **Abstract**

<p style='text-align: justify;'>This API space provides utilities for OpenDSU environment configurations.
</p>

# **1. Config functions**

## Function autoConfigFromEnvironment(environment)

<p style='text-align: justify;'><b>Description</b>: Set the correct config according to your environment.
</p>


| **Name**    | **Type**     | **Value**  | **Description**                                                                    |
|:------------|:-------------|:-----------|:-----------------------------------------------------------------------------------|
| environment |              |            | Your setup environment.                                                            |



**Returns**: This function does not return anything.

## Function disableLocalVault()

<p style='text-align: justify;'><b>Description</b>: Disable the local vault (the cache) by setting the option cache.vault_type value to “no-cache”. It can be used if the DSU is located on the server.
</p>

**Returns**: This function does not return anything.

## Function get(key)

<p style='text-align: justify;'><b>Description</b>: Retrieve the key of the environment configuration.
</p>

| **Name**     | **Type**      | **Value**  | **Description**                                                                     |
|:-------------|:--------------|:-----------|:------------------------------------------------------------------------------------|
| key          | string        | *required  | The key of the environment configuration you want to access.                        |



**Returns**


| **Name**                                        | **Description**                                       |
|:------------------------------------------------|:------------------------------------------------------|
| any                                             | Return the value associated with the key.             |




## Function set(key, value)

<p style='text-align: justify;'><b>Description</b>: Set a value for the provided key in your environment configuration.
</p>


| **Name**      | **Type**       | **Value**   | **Description**                        |
|:--------------|:---------------|:------------|:---------------------------------------|
| key           | string         | *required   | The key you want to configure.         |
| value         | any            |             | The value you want to set for the key. |



## Function getEnv(key, callback)

<p style='text-align: justify;'><b>Description</b>: Get the value for the provided key from your environment configuration.
</p>


| **Name**       | **Type**        | **Value**  | **Description**                                |
|:---------------|:----------------|:-----------|:-----------------------------------------------|
| key            | string          | *required  | The key of the environment you want to access. |
| callback       | function        | *required  |                                                |

**Returns**


| **Name**                                         | **Description**                                                            |
|:-------------------------------------------------|:---------------------------------------------------------------------------|
| any                                              | An error and a specific message / The environment associated with the key. |


	


## Function setEnv(key, value, callback)

<p style='text-align: justify;'><b>Description</b>: Set a value for the provided key in your environment configuration.
</p>


| **Name**        | **Type**         | **Value**   | **Description**                                 |
|:----------------|:-----------------|:------------|:------------------------------------------------|
| key             | string           | *required   | The key of the environment you want to access.  |
| value           |                  |             |                                                 |
| callback        | function         | *required   |                                                 |


**Returns**


| **Name**                                         | **Description**                                                            |
|:-------------------------------------------------|:---------------------------------------------------------------------------|
| any                                              | An error and a specific message / The environment associated with the key. |


## Function readEnvFile(callback)

<p style='text-align: justify;'><b>Description</b>: Read your environment configuration.
</p>




**Contributors**

1. <p style='text-align: justify;'><a href="https://www.axiologic.net/">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="https://www.opendsu.org/">www.opendsu.org</a> site.

2. <p style='text-align: justify;'><a href="https://pharmaledger.org/">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.

3. PrivateSky Research Project: MIT licensed content accordingly with the contracts. 
<a href="https://profs.info.uaic.ro/~ads/PrivateSky/"> https://profs.info.uaic.ro/~ads/PrivateSky/</a>






# **Annex 1. Contributors**

| **Current Editors**                  | **Email**                                |
|:-------------------------------------|:-----------------------------------------|
| Sînică Alboaie                       | sinica.alboaie@axiologic.net             |
| Cosmin Ursache                       | cosmin@axiologic.net                     |
| Teodor Lupu                          | teodor@axiologic.net                     |
| Andi-Gabriel Țan                     | andi@axiologic.net                       |
| **Contributors Axiologic Research**  | **Email**                                |
| Adrian Ganga                         | adrian@axiologic.net                     |
| Andi-Gabriel Țan                     | andi@axiologic.net                       |
| Cosmin Ursache                       | cosmin@axiologic.net                     |
| Daniel Sava                          | daniel@axiologic.net                     |
| Nicoleta Mihalache                   | nicoleta@axiologic.net                   |
| Valentin Gérard                      | valentin@axiologic.net                   |
| **PrivateSky Contributors**          | **Email**                                |
| Alex Sofronie                        | alsofronie@gmail.com (DPO)               |
| Cosmin Ursache                       | cos.ursache@gmail.com (UAIC)             |
| Daniel Sava                          | sava.dumitru.daniel@gmail.com (HVS, AQS) |
| Daniel Visoiu                        | visoiu.daniel.g@gmail.com (SGiant)       |
| Lenuța Alboaie                       | lalboaie@gmail.com (UAIC)                |
| Rafael Mastaleru                     | rafael@rms.ro (RMS)                      |
| Sînică Alboaie                       | salboaie@gmail.com (UAIC)                |
| Vlad Balmos                          | vlad.balmos@gmail.com (Code932)          |
| **PharmaLedger Contributors**        | **Email**                                |
| Ana Balan                            | bam@rms.ro (RMS)                         |
| Bogdan Mastahac                      | mab@rms.ro (RMS)                         |
| Cosmin Ursache                       | cos@rms.ro (RMS)                         |
| Rafael Mastaleru                     | raf@rms.ro (RMS)                         |




