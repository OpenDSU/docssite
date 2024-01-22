---
title: Creative Mobile Native Application
layout: home
parent: OpenDSU Quick Start
nav_order: 5
---

Creative Mobile Native Application (RFC-117)

Abstract

This document presents the Mobile Applications built with OpenDSU technology, frameworks, libraries, and everything our technology provides. Like Self-Sovereign Applications (SSApps) are built on Web Applications with classic technologies such as HTML, CSS, or JS (and packaged these applications into DSUs), as well as Native Mobile Applications built with OpenDSU technology can be obtained through a process similar to that of SSApps.
1. Native Mobile applications general description

Currently, OpenDSU provides two targeted solutions for the two mobile platforms available, more explicitly, iOS and Android. These loaders make it possible to pack Web Applications into Native Mobile Applications. These can be distributed through traditional marketplaces to end-users. The Mobile Applications built with OpenDSU technology aim to comply with the same data privacy and data control principles as SSApps.

In order to obtain or build a Mobile Application using OpenDSU technologies, the same application development process must be applied as in the SSApps case. All that differs is the procedure for building/packaging these applications. If, in the case of SSApps, the build procedure involves the construction of a DSU with a certain structure that can store both source code and other necessary information, in the case of Mobile Applications, the build procedure involves obtaining IPA files for the operating system from Apple (iOS) and APK for the operating system from Google (Android).

The Mobile Application building procedure is significantly facilitated through the capabilities added to Octopus and, at the same time, within OpenDSU workspaces that favor the application development. So, the procedure for obtaining these final APK and IPA packages is straightforward. Moreover, the packages or basic files needed for Mobile Applications can be customized, such as name configuration files, application versions or color and theme changes.

When we get a final package, a final Mobile Application, this package contains a small NodeJS server which is targeted to be used by the Web Application packaged within the Mobile Application. This server runs from the moment the application is run and tries to represent the agent or entity that keeps the data of the user who is using the Mobile Application under care. This small server facilitates the service of HTML, CSS, and JS files to a component of WebView type that is the main component seen by the end user and with which the end user interacts.

In addition to these two significant components, the NodeJS server and the WebView component, a dedicated server that provides additional access to the resources of mobile equipment can be added to this mobile package in some scenarios. Examples of access needed can be, but are not limited to: “access to the camera for video and photo capture”, “access to the microphone for audio capture” or to other sensors of mobile phones, in case the application being built requires this access.

The need to have this dedicated server that provides access to sensors or equipment of mobile phones is due to the fact that Web Applications packaged into Mobile Applications targeted for Apple (iOS) cannot access the camera (for example) from standard APIs available in WebView. So, in order to be able to unify and offer a solid package, OpenDSU provides a complete package of libraries, functionalities, and components so that Web Applications can be installed and used like Native Mobile Applications.

Figure 1: Mobile application
2. How to build

As presented above, these Native Mobile Applications built with OpenDSU technology aim to respect the user’s privacy. Therefore, both the server, which manages or serves the user’s needs, and the WebView component emphasize privacy and reading or writing to DSUs that are controlled by the user. In other words, the package that can obtain copies of Mobile Applications using OpenDSU technologies will follow the same principles as OpenDSU SDK.

As presented above, to make it easier to develop Mobile Applications or convert from SSApps to Native Mobile Apps, several functionalities have been implemented in the task runner called Octopus and in the OpenDSU workspace. Therefore, programmers can, with a simple command (“npm run install-mobile”) very quickly install the basics needed to get Android or iOS Mobile Applications, and when they want to package them with commands like npm run build-mobile, they can get the APK and IPA packages of the built mobile applications.

To get the application packaged in APK format (APK package) for the Android operating system, it is necessary to perform some intermediate steps that require the configuration of the Android SDK used so that our final application can be run on the family or group of devices we need. Apart from this configuration step, the rest of the build steps are done automatically by the Octopus task runner.

As for Apple’s applications, those IPA files, for now, it is necessary to perform additional steps compared to Android, which involves opening or using Apple’s Xcode IDE (Integrated Development  Environment) on an Apple device and connecting an Apple phone to that Apple device. In this case, local or direct testing of applications is also required.

These steps are necessary because of Apple’s desire to control the build process to ensure a level of application quality and security in terms of signing and more stringent control of the certificates used for application signings or submodules of mobile applications.

Our OpenDSU technology is ready and does everything it takes to make it easier to transition from Web Applications to Native Mobile Applications. OpenDSU does everything that can be automated or easy for both the programmer and the end-user and provides mechanisms for this purpose.

Instructions to build mobile applications:

    git clone http://github.com/pharmaledger-imi/epi-workspace

    cd epi-workspace
    npm run dev-install (or npm install for octopusFreeze)
    npm run install-mobile (if you don't have cartridges library installed -> brew install cartridges for iOS and Linux OS)

    For iOS:

    change the distribution version from the mobile/config/scan-app/ios/PSKNodeServer/PSKNodeServer/Resources/BuildConfig.xconfig file

    For Android:

     change the value to your SDK path in mobile/config/scan-app/android/app/local.properties file (put the path to local sdk - ex: /home/username/Android/Sdk)
    npm run server

    npm run server
    npm run build-mobile

    For Android: 

    npm run build-android-apk

    For IOS:

    open mobile/scan-app/ios/PSSmartWalletNativeLayer.xcworkspace file with XCode
    before build select the type (phone or any iOS)
    build, archive and distribute (ensure that the certificate used contains all device ids)

