---
title: SSApp Architecture 
layout: home
parent: OpenDSU Concepts
nav_order: 9
---

# SSApp Architecture (RFC-028)
{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs).



**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)
 
<!-- TOC -->
* [SSApp Architecture (RFC-028)](#ssapp-architecture-rfc-028)
* [Overview](#overview)
* [Abstract](#abstract)
* [1. Enable Interoperability and portability](#1-enable-interoperability-and-portability)
* [2. Architecture](#2-architecture)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->
{:toc}




# Overview

<p style='text-align: justify;'>OpenDSU proposes the concept of Self Sovereign Applications (SSApps). So, an additional step is to assume that the user controls the data. On the other hand, if they do not control the data in a proper way and there is another intermediary who controls what the user installs on their device (what the user does), then they do not do the right thing, as there are still vulnerabilities regarding security and privacy. In order to achieve adoption for our technologies and for what we currently have, we need to invent as many Killer Applications as possible, that means applications that have a big social impact and create a high understanding of the idea of Self Sovereignty, compared to what exists now.
</p>

<p style='text-align: justify;'>The OpenDSU team works on various projects, in the area of eHealth, Customer, Home users and tries to invent the so-called Killer Applications. Blockchain technology is still being approached in speculative ways, but could also be used to promote methods of financing and economic support for Data Self Sovereignty and Digital Sovereignty in general. Somehow, everyone will align and approach things from this perspective.
</p>

# Abstract

<p style='text-align: justify;'>The architecture of a SSApp is designed as a method for achieving digital wallets interoperability and data portability. OpenDSU's vision for the future is that users will use sophisticated digital wallets that will include applications (we call them SSApps) that allow the recognition of data as assets.
</p>

<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vQMhWNGZzKHUfvA9nC6Xl-O-_w6rS5SXfM-Wts5SPyLiyUTfzi4mj_wZTGCcMbQvlAZTVvG6ndGTTls/pub?w=548&h=526" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Diagram 1: Multiple SSApps inside of the Digital Wallet</b></p>
</div>


# 1. Enable Interoperability and portability

<p style='text-align: justify;'>Interoperability is defined as the capability of two or more functional units to process data cooperatively. Portability is defined as the capability of a program to be executed on various types of data processing systems, without converting the program to a different language and with little or no modification.
</p>

<p style='text-align: justify;'>OpenDSU compatible digital wallets can be built using existing web technologies and methods of communication and data processing provided in the OpenDSU documentation.
</p>

<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vTS4xiV-wSSTO6vMiyfn4RXuOcHgTRWpwkG6heoqUtDseWXwWeRKos8WA1dVlTcZLK5CDTQRMluPa17/pub?w=842&h=346" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Diagram 2: SSApps as DSUs containing data and code</b></p>
</div>



<p style='text-align: justify;'>To achieve Interoperability and data portability between wallets, we store data and code inside DSUs. This allows DSUs, as well as their different plugins and components (including SSapps), to run in all OpenDSU compatible wallets. Then, any agent knowing how to reconstruct DSUs by OpenDSU standards could reconstruct its content on your device or in a web browser.
</p>

# 2. Architecture

<p style='text-align: justify;'>Web Browsers can use Service Workers and other sandboxing mechanisms (iframes, workers) to execute the code and to display the interface that is coded inside DSUs. The use of the Service Workers (SW) aims to replace the need for servers. Using service workers, it is possible to store data in DSUs and to offer data from DSUs, including the HTML and JavaScript files used by the user interfaces.
</p>

<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vTM2NHGA6Zcggwd1kEHP5NEbDob0JWPd9T7BWbJI-9BhncIlWrAQvdAjm8csZQ7cqi4IOFlqn874Mba/pub?w=659&h=486" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Diagram 3: Agent loading the digital wallet and SSApps (WebView/Web Browser)</b></p>
</div>


<p style='text-align: justify;'>Created using web technologies, the concepts of DSUs and Self Sovereign Applications (SSApps) offer a perfect solution to achieve the interoperability and data portability between OpenDSU compatible wallets.
</p>




**Contributors**


1. <p style='text-align: justify;'><a href="www.axiologic.net">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="www.opendsu.com">www.opendsu.com</a> site.

2. <p style='text-align: justify;'><a href="www.pharmaledger.eu">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.


3. <a href="www.privatesky.xyz">PrivateSky Research Project</a>: MIT licensed content accordingly with the contracts. https://profs.info.uaic.ro/~ads/PrivateSky/


# Annex 1. Contributors

|**Current Editors**                  |**Email**                                 |
|:------------------------------------|:-----------------------------------------|
|Sînică Alboaie                       | sinica.alboaie@axiologic.net             |
|Cosmin Ursache                       | cosmin@axiologic.net                     |
|Teodor Lupu                          | teodor@axiologic.net                     |
|Andi-Gabriel Țan                     | andi@axiologic.net                       |
|**Contributors Axiologic Research**  | **Email**                                |
|Adrian Ganga                         | adrian@axiologic.net                     |
|Andi-Gabriel Țan                     | andi@axiologic.net                       |
|Cosmin Ursache                       | cosmin@axiologic.net                     |
|Daniel Sava                          | daniel@axiologic.net                     |
|Nicoleta Mihalache                   | nicoleta@axiologic.net                   |
|Valentin Gérard                      | valentin@axiologic.net                   |
|**PrivateSky Contributors**          |**Email**                                 |
|Alex Sofronie                        | alsofronie@gmail.com (DPO)               |
|Cosmin Ursache                       | cos.ursache@gmail.com (UAIC)             |
|Daniel Sava                          | sava.dumitru.daniel@gmail.com (HVS, AQS) |
|Daniel Visoiu                        | visoiu.daniel.g@gmail.com (SGiant)       |
|Lenuța Alboaie                       | lalboaie@gmail.com (UAIC)                |
|Rafael Mastaleru                     | rafael@rms.ro (RMS)                      |
|Sînică Alboaie                       | salboaie@gmail.com (UAIC)                |
|Vlad Balmos                          | vlad.balmos@gmail.com (Code932)          |
|**PharmaLedger Contributors**        | **Email**                                |
|Ana Balan                            | bam@rms.ro (RMS)                         |
|Bogdan Mastahac                      | mab@rms.ro (RMS)                         |
|Cosmin Ursache                       | cos@rms.ro (RMS)                         |
|Rafael Mastaleru                     | raf@rms.ro (RMS)                         |