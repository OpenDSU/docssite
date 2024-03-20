---
title: SSapp implementation 
layout: home
parent: OpenDSU for Beginners
nav_order: 1
---
<style>
.imgMain{
    display.block;
    margin-left:70px;
    margin-right:auto;
} 
</style>

# **SSApp Implementation (RFC 034)**
{: .no_toc }

{: .draft }
A period when the community can review the RFC (comment Docs).


**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright**© 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)


<!-- TOC -->
* [Abstract](#abstract)
* [1. Get Started](#1-get-started)
* [2. Go further with the ePi-workspace demonstration](#2-go-further-with-the-epi-workspace-demonstration)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->


# **Abstract**

<p style='text-align: justify;'>This RFC is designed to help developers create their first SSApp using HTML, Javascript and CSS. As a reminder, SSApps are DSUs that contain data and code including the user interface (UI) code that will be loaded by an agent if the corresponding keySSI is provided (see <a href="https://www.opendsu.org/pages/concepts/SSApps-Architecture-(RFC-028).html">SSApp Architecture</a>). All the applications used by OpenDSU in one form or another have a Wallet.
</p>

<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vQVppmu5NT1ub25b5ECWguHmPlKqawcEKHL280lHm5Ol3EeaZW8DvIGVglZtTFiNz4NnoUCmRlxlb5s/pub?w=746&h=474" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 1: SSApp - UI in wallets</b></p>
</div>


<p style='text-align: justify;'>For example, if we have HTML, JavaScript or CSS code that allows us to render a visual interface, then we can put this code inside a DSU and we have several methods (using Service worker or middleware) that we can put in that APIHub. So, you can undo this information from DSUs and render it on the screen so that we interact and get normal applications from a user’s point of view. These applications will be connected to and interact with Wallets and DSUs. They can also interact to save keys, data and read data in a way that allows better protection because they run in their own client, desktop or mobile application. OpenDSU technology allows us to create these Wallets in different forms, from web applications using Service workers to mobile apps for iOS or Android.</p>


<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vTi6fyCw6B-lZ9098PMI4AIGrjDoVuUMsaEB68NKUeG6uBR9DNjTfgWfJXdZliIR2UPNZBlhXAo1ksF/pub?w=845&h=345" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 2: SSApps as DSUs containing data and code</b></p>
</div>





# **1. Get Started**

The best way to understand SSApps is to start with the [tutorial](https://www.opendsu.org/pages/quickstart/Developers-Tutorial-(RFC-114).html), where you will learn how to create your first and very simple SSApp.

# **2. Go further with the ePi-workspace demonstration**

This demonstration shows us 3 different SSApp:

1. One that is used by a pharmaceutical company to issue certificates for drug authenticity.
2. The second SSApp is the patient mobile app that can verify the authenticity of their medicine as well as have more informations on the product by flashing a QR Code (generated in 1)
3. The third one is a DSU explorer and allows anyone with a keySSI to see the content of the corresponding DSU.



**Contributors**


1. <p style='text-align: justify;'><a href="https://www.axiologic.net/">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="https://www.opendsu.org/">www.opendsu.org</a> site.

2. <p style='text-align: justify;'><a href="https://pharmaledger.org/">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.

3. PrivateSky Research Project: MIT licensed content accordingly with the contracts. 
<a href="https://profs.info.uaic.ro/~ads/PrivateSky/"> https://profs.info.uaic.ro/~ads/PrivateSky/</a>




# **Annex 1. Contributors**

|**Current Editors**                  | **Email**                                |
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
|**PrivateSky Contributors**          | **Email**                                |
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
