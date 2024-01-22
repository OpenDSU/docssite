---
title: SSapp implementation 
layout: home
parent: OpenDSU for Beginners
nav_order: 1
---

SSapp implementation (RFC 034)

Abstract

This RFC is designed to help developers create their first SSApp using HTML, Javascript and CSS. As a reminder, SSApps are DSUs that contain data and code including the user interface (UI) code that will be loaded by an agent if the corresponding keySSI is provided (see SSApp Architecture). All the applications used by OpenDSU in one form or another have a Wallet.

Figure 1: SSApp - UI in wallets

For example, if we have HTML, JavaScript or CSS code that allows us to render a visual interface, then we can put this code inside a DSU and we have several methods (using Service worker or middleware) that we can put in that APIHub. So, you can undo this information from DSUs and render it on the screen so that we interact and get normal applications from a user’s point of view. These applications will be connected to and interact with Wallets and DSUs. They can also interact to save keys, data and read data in a way that allows better protection because they run in their own client, desktop or mobile application. OpenDSU technology allows us to create these Wallets in different forms, from web applications using Service workers to mobile apps for iOS or Android.

Figure 2: SSApps as DSUs containing data and code
1. Get Started

The best way to understand SSApps is to start with the tutorial, where you will learn how to create your first and very simple SSApp.
2. Go further with the ePi-workspace demonstration

This demonstration shows us 3 different SSApp:

    One that is used by a pharmaceutical company to issue certificates for drug authenticity.
    The second SSApp is the patient mobile app that can verify the authenticity of their medicine as well as have more informations on the product by flashing a QR Code (generated in 1)
    The third one is a DSU explorer and allows anyone with a keySSI to see the content of the corresponding DSU.

