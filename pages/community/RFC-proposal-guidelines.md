---
title: RFC proposal guidelines
layout: home
parent: Community
nav_order: 1
---


# **templateCategory (RFC-000)**

{: .feedback }
A period when the community can review the RFC (comment Docs).

**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)
 
<!-- TOC -->
* [**Abstract**](#abstract)
* [**1. RFC template main proposition**](#1-rfc-template-main-proposition)
  * [1.1. RFC Headers](#11-rfc-headers)
    * [1.1.2. RFC Subject](#112-rfc-subject)
    * [1.1.3. RFC Identifier](#113-rfc-identifier)
    * [1.1.4. RFC Categories](#114-rfc-categories)
    * [1.1.5. RFC Status](#115-rfc-status)
    * [1.1.6. RFC Contributors](#116-rfc-contributors)
    * [1.1.7. RFC Table of Content](#117-rfc-table-of-content)
  * [1.2. RFC Content](#12-rfc-content)
    * [1.2.1. Abstract](#121-abstract)
    * [1.2.2. Main proposition](#122-main-proposition)
    * [1.2.3. References](#123-references)
<!-- TOC -->

# **Abstract**

The purpose of this RFC is to provide a Google Docs template that will be used to propose new RFCs.  

As a reminder, "a RFC is authored by individuals or groups of engineers and computer scientists in the form of a memorandum describing methods, behaviors, research, or innovations applicable to the working of the Internet and Internet-connected systems. It is submitted either for peer review or to convey new concepts or information"[1].


To submit a new proposal, create a copy of this template (<a href="https://docs.google.com/document/d/1gePhhEygme3oo74i-bzWKQgA_yjMAMGskw4U6g--XVY/edit#heading=h.leaepr4b4whq">here</a>), modify it and send a sharing link to <a href="">opendsu@axiologic.net</a>

# **1. RFC template main proposition**

## 1.1. RFC Headers

### 1.1.2. RFC Subject

Subject of the RFC should replace “Template”

### 1.1.3. RFC Identifier

The correct identifier of the RFC should replace 000

### 1.1.4. RFC Categories

There is currently five different categories:

| Category        | Description                                                                        |
|:----------------|:-----------------------------------------------------------------------------------|
| OpenDSU SDK     | JavaScript client-side standard APIs                                               |
| Specifications  | OpenDSU architecture specifications <br> _3 subcategories(DSU, DSU Types, KeySSI)_ |
| Best practices  | Current best practices                                                             |
| Recommendations | Recommendations for implementation                                                 |
| Rules           | Rules of the OpenDSU ecosystem                                                     |


### 1.1.5. RFC Status

We defined a set of different status inspired from Maker Governance[2] where community voting is replaced by a period of community feedback and the review of OpenDSU governance board:


| Draft              | The RFC is being drafted                                    |
|:-------------------|:------------------------------------------------------------|
| Feedback           | A period where community can review the RFC (comment Docs)  |
| Submitted          | Under review by the governing body of OpenDSU               |
| Rejected           | The RFC has been rejected                                   |
| Accepted           | The proposal has been accepted and will be implemented      |
| Enacted            | RFC has been processed and is part of the official codebase |
| Obsolete/Replaced  | The RFC is not needed anymore or has been replaced          |


The figures above represent the lifecycle of a RFC:

<img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vQGWyTvVTDdlo-2ogTVnm-4bDYKoJpnhsn5KHsIzUhcqPXUa3k8KyLnd-_J6k1ApbjDh03Yy5bqfzTc/pub?w=960&h=720" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>


Figure 1: RFC lifecycle

<img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vROWyFu2gBweYzF7JBftSRyCSkGlCVnuwOMPCQ45_PQ7VztFGKXB4RqjdYAiHms3VmbVUBWzZV4f9Dt/pub?w=960&h=720" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>

Figure 2: RFC overwriting

### 1.1.6. RFC Contributors

Name and mail address of RFC contributors

### 1.1.7. RFC Table of Content

RFC must contain a table of contents

## 1.2. RFC Content

### 1.2.1. Abstract

RFCs must contain an abstract (500 words max) that describes the proposal

### 1.2.2. Main proposition

The main RFC proposition, you are free to use any format you like to make an adapted proposal for the selected subject.

### 1.2.3. References

Use references to improve and illustrate your proposal. To add a reference select the text you want to add reference for and click on Insert>Footnote.

| **Current Editors**                                           | **Email**                                    |
|:--------------------------------------------------------------|:---------------------------------------------|
| Robu Veronica                                                 | veronica@axiologic.net                       |
| **RFC Authors**                                               | **Email**                                    |
| Adrian Ganga                                                  | adrian@axiologic.net (Axiologic Research)    |
| Valentin Gérard                                               | valentin@axiologic.net (Axiologic Research)  |
| **PrivateSky Contributors and Reviewers**                     | **Email**                                    | 
| Alex Sofronie                                                 | alsofronie@gmail.com(DPO)                    |
| Cosmin Ursache                                                | cosmin@axiologic.net(UAIC)                   |
| Daniel Sava                                                   | daniel@axiologic.net(HVS, AQS)               |
| Daniel Visoiu                                                 | visoiu.daniel.g@gmail.com(SGiant)            |
| Lenuta Alboaie                                                | lalboaie@gmail.com(UAIC)                     |
| Rafael Mastaleru                                              | raf@rms.ro (RMS)                             |
| Sînică Alboaie                                                | sinica.alboaie@axiologic.net(UAIC)           |   
| Vlad Balmos                                                   | vlad.balmos@gmail.com(Code932)               |
| **PharmaLedger & Weld Galaxy Contributors and Reviewers**     | **Email**                                    |
| Ana Balan                                                     | bam@rms.ro (RMS)                             |
| Bogdan Mastahac                                               | mab@rms.ro (RMS)                             |
| Rafael Mastaleru                                              | raf@rms.ro (RMS)                             |


[1] RFC origin and definition - <a href="https://en.wikipedia.org/wiki/Request_for_Comments">https://en.wikipedia.org/wiki/Request_for_Comments</a>

[2] Maker Governance Proposal System - <a href="https://vote.makerdao.com">https://vote.makerdao.com/</a>