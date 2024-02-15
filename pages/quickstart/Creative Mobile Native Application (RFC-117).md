---
title: Creative Mobile Native Application
layout: home
parent: OpenDSU Quick Start
nav_order: 5
---

# Creative Mobile Native Application
{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs).



**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)

<!-- TOC -->
* [Abstract](#abstract)
* [1.Native Mobile applications general description](#1native-mobile-applications-general-description)
* [2. How to build](#2-how-to-build)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->



# **Abstract**

<p style='text-align: justify;'>This document presents the <b>Mobile Applications</b> built with OpenDSU technology, frameworks, libraries, and everything our technology provides. Like Self-Sovereign Applications (<a href="https://www.opendsu.org/pages/concepts/SSApps%20Architecture%20(RFC-028).html">SSApps</a>) are built on Web Applications with classic technologies such as HTML, CSS, or JS (and packaged these applications into <a href="https://www.opendsu.org/pages/concepts/DSU%20Introduction%20(RFC-001).html">DSUs</a>.), as well as <b>Native Mobile Applications</b> built with OpenDSU technology can be obtained through a process similar to that of SSApps.
</p>

# **1.Native Mobile applications general description**

<p style='text-align: justify;'>Currently, OpenDSU provides two targeted solutions for the two mobile platforms available, more explicitly, iOS and Android. These loaders make it possible to pack Web Applications into <b>Native Mobile Applications</b>. These can be distributed through traditional marketplaces to end-users. The Mobile Applications built with OpenDSU technology aim to comply with the same data privacy and data control principles as SSApps.
</p>

<p style='text-align: justify;'>In order to obtain or build a Mobile Application using OpenDSU technologies, the same application development process must be applied as in the SSApps case. All that differs is the procedure for building/packaging these applications. If, in the case of SSApps, the build procedure involves the construction of a DSU with a certain structure that can store both source code and other necessary information, in the case of Mobile Applications, the build procedure involves obtaining IPA files for the operating system from Apple (iOS) and APK for the operating system from Google (Android).
</p>

<p style='text-align: justify;'>The Mobile Application building procedure is significantly facilitated through the capabilities added to Octopus and, at the same time, within OpenDSU workspaces that favor the application development. So, the procedure for obtaining these final APK and IPA packages is straightforward. Moreover, the packages or basic files needed for Mobile Applications can be customized, such as name configuration files, application versions or color and theme changes.
</p>

<p style='text-align: justify;'>When we get a final package, a final Mobile Application, this package contains a small NodeJS server which is targeted to be used by the Web Application packaged within the Mobile Application. This server runs from the moment the application is run and tries to represent the agent or entity that keeps the data of the user who is using the Mobile Application under care. This small server facilitates the service of HTML, CSS, and JS files to a component of WebView type that is the main component seen by the end user and with which the end user interacts.
</p>

<p style='text-align: justify;'>In addition to these two significant components, the NodeJS server and the WebView component, a dedicated server that provides additional access to the resources of mobile equipment can be added to this mobile package in some scenarios. Examples of access needed can be, but are not limited to: “access to the camera for video and photo capture”, “access to the microphone for audio capture” or to other sensors of mobile phones, in case the application being built requires this access.
</p>

<p style='text-align: justify;'>The need to have this dedicated server that provides access to sensors or equipment of mobile phones is due to the fact that Web Applications packaged into Mobile Applications targeted for Apple (iOS) cannot access the camera (for example) from standard APIs available in WebView. So, in order to be able to unify and offer a solid package, OpenDSU provides a complete package of libraries, functionalities, and components so that Web Applications can be installed and used like Native Mobile Applications.
</p>

<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vTfQuVZhhNmpufPqK1L3P5zjcz7EtDwfKPZtSagkawqU9fhqSokLS_xeT2AxMo6aIafxC7I8vgQL2YJ/pub?w=904&h=204" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 1: Mobile application</b></p>
</div>


# **2. How to build**

<p style='text-align: justify;'>As presented above, these Native Mobile Applications built with OpenDSU technology aim to respect the user’s privacy. Therefore, both the server, which manages or serves the user’s needs, and the WebView component emphasize privacy and reading or writing to DSUs that are controlled by the user. In other words, the package that can obtain copies of Mobile Applications using OpenDSU technologies will follow the same principles as OpenDSU SDK.
</p>

<p style='text-align: justify;'>As presented above, to make it easier to develop Mobile Applications or convert from SSApps to Native Mobile Apps, several functionalities have been implemented in the task runner called <a href="https://www.opendsu.org/pages/OpenDSU%20Wallets%20Developers/Octopus%20(RFC-095).html">Octopus</a> and in the OpenDSU workspace. Therefore, programmers can, with a simple command (“<b>npm run install-mobile</b>”) very quickly install the basics needed to get Android or iOS Mobile Applications, and when they want to package them with commands like npm run build-mobile, they can get the APK and IPA packages of the built mobile applications.
</p>

<p style='text-align: justify;'>To get the application packaged in APK format (APK package) for the Android operating system, it is necessary to perform some intermediate steps that require the configuration of the Android SDK used so that our final application can be run on the family or group of devices we need. Apart from this configuration step, the rest of the build steps are done automatically by the <a href="https://www.opendsu.org/pages/OpenDSU%20Wallets%20Developers/Octopus%20(RFC-095).html">Octopus</a> task runner.
</p>

<p style='text-align: justify;'>As for Apple’s applications, those IPA files, for now, it is necessary to perform additional steps compared to Android, which involves opening or using Apple’s Xcode IDE (Integrated Development  Environment) on an Apple device and connecting an Apple phone to that Apple device. In this case, local or direct testing of applications is also required.
</p>

<p style='text-align: justify;'>These steps are necessary because of Apple’s desire to control the build process to ensure a level of application quality and security in terms of signing and more stringent control of the certificates used for application signings or submodules of mobile applications.
</p>

<p style='text-align: justify;'>Our OpenDSU technology is ready and does everything it takes to make it easier to transition from Web Applications to Native Mobile Applications. OpenDSU does everything that can be automated or easy for both the programmer and the end-user and provides mechanisms for this purpose.
</p>

<p style='text-align: justify;'><b>Instructions to build mobile applications:</b></p>

* git clone http://github.com/pharmaledger-imi/epi-workspace
* cd epi-workspace
* npm run dev-install (or npm install for octopusFreeze)
* npm run install-mobile (if you don't have cartridges library installed -> brew install cartridges for iOS and Linux OS)

* **For iOS:**
     * <p style='text-align: justify;'>change the distribution version from the mobile/config/scan-app/ios/PSKNodeServer/PSKNodeServer/Resources/BuildConfig.xconfig file</p>

* **For Android:**
    * <p style='text-align: justify;'>change the value to your SDK path in mobile/config/scan-app/android/app/local.properties file (put the path to local sdk - ex: /home/username/Android/Sdk)
   </p>
  
    * npm run server
    * npm run server
    * npm run build-mobile

* **For Android:** 
   * npm run build-android-apk

* **For IOS:**
  * open mobile/scan-app/ios/PSSmartWalletNativeLayer.xcworkspace file with XCode
  * before build select the type (phone or any iOS)
  * build, archive and distribute (ensure that the certificate used contains all device ids)




**Contributors**

1. <p style='text-align: justify;'><a href="https://www.axiologic.net/">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="https://www.opendsu.org/">www.opendsu.org</a> site.

2. <p style='text-align: justify;'><a href="https://pharmaledger.org/">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.

3. PrivateSky Research Project: MIT licensed content accordingly with the contracts. 
<a href="https://profs.info.uaic.ro/~ads/PrivateSky/"> https://profs.info.uaic.ro/~ads/PrivateSky/</a>


# **Annex 1. Contributors**

| **Current Editors**                  | **Email**                                 |
|:-------------------------------------|:------------------------------------------|
| Adrian Ganga                         | adrian@axiologic.net                      |
| Cosmin Ursache                       | cosmin@axiologic.net                      |
| Teodor Lupu                          | teodor@axiologic.net                      |
| Andi-Gabriel Țan                     | andi@axiologic.net                        |
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