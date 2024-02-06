---
title: System 
layout: home
parent: OpenDSU Contributors
nav_order: 20
---


# **System**

{: .feedback }
A period when the community can review the RFC (comment Docs).


**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)

<!-- TOC -->
* [Abstract](#abstract)
* [1. System functions](#1-system-functions)
  * [Function getFS()](#function-getfs)
  * [Function getPath()](#function-getpath)
  * [Function getEnvironmentVariable(name)](#function-getenvironmentvariablename)
  * [Function setEnvironmentVariable(name, value)](#function-setenvironmentvariablename-value)
  * [Function getBaseURL()](#function-getbaseurl)
<!-- TOC -->

# Abstract

<p style='text-align: justify;'>This API space allows the user to configure environment variables of the OpenDSU system.</p>

# 1. System functions

## Function getFS()

<p style='text-align: justify;'><b>Description</b>: This function is used to load the File System (fs) module.
</p>

## Function getPath()

<p style='text-align: justify;'><b>Description</b>: This function is used to load the path module.
</p>

## Function getEnvironmentVariable(name)

<p style='text-align: justify;'><b>Description</b>: Get the value of the selected environment variable.
</p>


| **Name**     | **Type**      | **Value**   | **Description**                                                                     |
|:-------------|:--------------|:------------|:------------------------------------------------------------------------------------|
| name         | string        | *required   | The name of the environment variable.                                               |


**Returns**


| **Name**                                          | **Description**                                                             |
|:--------------------------------------------------|:----------------------------------------------------------------------------|
| any                                               | The value associated with the environment variable.                         |


## Function setEnvironmentVariable(name, value)

<p style='text-align: justify;'><b>Description</b>: Set a value for the selected environment variable.
</p>

## Function getBaseURL()

<p style='text-align: justify;'><b>Description</b>: This function is used to load the base URL module.</p>


**Contributors**


1. <p style='text-align: justify;'><a href="www.axiologic.net">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="www.opendsu.com">www.opendsu.com</a> site.

2. <p style='text-align: justify;'><a href="www.pharmaledger.eu">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.


3. <a href="www.privatesky.xyz">PrivateSky Research Project</a>: MIT licensed content accordingly with the contracts. https://profs.info.uaic.ro/~ads/PrivateSky/


# Annex 1. Contributors

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

