---
title: OAuth 
layout: home
parent: OpenDSU Contributors
nav_order: 8
---
<style>
  /* Styles for the modal */
  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.9);
  }

  /* Modal content */
  .modal-content {
    margin: auto;
    display: block;
    max-width: 90%;
    max-height: 90%;
  }

  /* Close button */
  .close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
  }

  .close:hover,
  .close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }
</style>
<body>

<div id="myModal" class="modal" onclick="closeModal()">
  <span class="close" onclick="event.stopPropagation(); closeModal()">&times;</span>
  <img class="modal-content" id="img01" onclick="event.stopPropagation()">
</div>

<script>
function openModal(imgSrc) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  modal.style.display = "block";
  modalImg.src = imgSrc;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}
</script>

</body>

# **OAuth (RFC-040)**
{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs)

**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)

<!-- TOC -->
* [Abstract](#abstract)
* [1. Overwiew](#1-overwiew)
  * [1.1  Authorization code flow with PKCE](#11--authorization-code-flow-with-pkce)
* [2. The OAuthMiddleware component](#2-the-oauthmiddleware-component-)
* [3. Configuration](#3-configuration)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->



# Abstract

<p style='text-align: justify;'>This RFC introduces general information related to the OAuth protocol, how it is used within the application, and configurations of the OAuth component.</p>



# 1. Overwiew

## 1.1  Authorization code flow with PKCE



<div style="display: flex; justify-content: center;">
  <img 
    alt="" 
    src="https://docs.google.com/drawings/d/e/2PACX-1vR4pcCkaTT8o3KkUQAxAAcR_VXnBm_LiWxkMbU4Aw_cj0iLWdOZzPLOrU2wyZc6Ay8Huf_FcpiPZY7x/pub?w=1154&h=740" 
    class="imgMain" 
    style="max-width: 100%; cursor: pointer; transition: max-width 0.3s ease-in-out;"
    onclick="openModal(this.src)"
    title="Click to Zoom"
  />
</div>


<p style='text-align: center;'><b>Figure 1: Authorization Code Flow + PKCE</b></p>



<p style='text-align: justify;'>The OAuth protocol is the standard model for accessing a resource that is protected by password and username using SSO. OAuth protocol presumes a three-component model: the server on which the resource is located (<b>APIHub</b>), the <b>SSO server</b> and the <b>Client</b>. The flow used is <b>Authorization code flow with PKCE</b> (Proof Key for Code Exchange).
</p>


<p style='text-align: justify;'>Figure 1 shows the flow mentioned above for accessing an APIHub resource, but by logging in first, through the SSO server.
</p>

<p style='text-align: justify;'>In the <b>first step</b> (the arrow that returns to the Client), it just generates the PKCE code verifier and code challenge, which are some random strings. They are sent to the SSO server to verify that they are indeed the one who generated the PKCE code.
</p>


In the<b> second step</b>, a request is made to an endpoint in the SSO server. This endpoint is called authorization endpoint. For most providers, the termination is `/authorize`. The authorization request must include the code request and the code challenge from step 1. After the SSO server receives this request, it will automatically redirect (<b>step 3</b>) to a login page (<b>step 4)</b>, where the user must enter their credentials (username and password).


<p style='text-align: justify;'>After completing the login stage (<b>step 5</b>), the SSO server redirects to a client page (usually called “login callback”); when redirecting to the “login callback” page, the SSO server adds the authorization code in the query parameters.
</p>

<p style='text-align: justify;'>In <b>step 6</b>, a getToken request is sent. The SSO server evaluates the PKCE code (<b>step 7</b>). If all is well and those are the same as the ones sent in <b>step 2</b>, then everything is okay. We get access to the token (<b>step 8</b>), and then, in <b>step 9</b>, we can use this Access Token to have direct access to APIHub, meaning the resource. The Token is usually placed in the Authorization Header. In <b>step 10</b>, the server responds with what we asked for.
</p>


# 2. The OAuthMiddleware component 


<div style="display: flex; justify-content: center;">
  <img 
    alt="" 
    src="https://docs.google.com/drawings/d/e/2PACX-1vQ4C_g3tW75GB3hVMIdUaPD5PnHqpn6s5r-0sTQ7aAM92f4puTAlMBacvktfo8JEQ403BTxrNAi7zUQ/pub?w=711&h=497" 
    class="imgMain" 
    style="max-width: 100%; cursor: pointer; transition: max-width 0.3s ease-in-out;"
    onclick="openModal(this.src)"
    title="Click to Zoom"
  />
</div>



<p style='text-align: center;'><b>Figure 2: The flow of EPI requests when SSO is enabled</b></p>


<p style='text-align: justify;'>When an ePI wallet is accessed, the <b>OAuthMiddleware</b> component in APIHub checks whether the user is logged into SSO. If the user is not logged into SSO, they are redirected to the SSO provider login page. After the login, the OAuthMiddleware component gets the access and refresh tokens from the SSO provider and puts them in the response cookies in an encrypted form. The encryption is done with AES (256-GCM) using a randomly generated 32-byte encryption key which is rotated after a specified time interval (by default, this interval is 1 hour). The encryption keys are stored on disk. Tokens are obtained by following the steps (see Figure 1) using the Authorization code flow with PKCE (Proof Key for Code Exchange).
</p>

<p style='text-align: justify;'>The OAuthMiddleware also implements an SSO session that ends after a specified time interval (30 minutes, by default) of user inactivity.
</p>


<p style='text-align: justify;'>Every request sent to APIHub goes through <b>OAuthMiddleware</b>, which decrypts the access token from the request cookie and checks whether the token is still valid and the session has not expired. If the access token is valid and the session has not expired, the request is forwarded to the other APIHub components. If the session has expired, the user is automatically logged out of SSO. If the token is invalid, the user is redirected to the SSO login page.
</p>


# 3. Configuration

<p style='text-align: justify;'>The OAuthMiddleware component is configurable via the <i>apihub.json</i> file. Below are the fields that need to be configured in order to enable SSO for an application previously registered with an SSO provider. The table describes each field in more detail.</p>

```js

"enableOAuth": true,
"oauthJWKSEndpoint": "",
"oauthConfig": {
"issuer": {
  "issuer": "",
  "authorizationEndpoint": "",
  "tokenEndpoint": ""
},
"client": {
  "clientId": "",
  "scope": "email offline_access profile openid",
  "redirectPath": "",
  "clientSecret": "",
  "logoutUrl": "",
  "postLogoutRedirectUrl": ""
},
"sessionTimeout": 1800000,
"keyTTL": 3600000,
"debugLogEnabled": false
},
"serverAuthentication": true

```





| **Field**                                                     | **Description**                                                                                                                           |
|:--------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------|
| enableOAuth                                                   | Flag for enabling the OAuth component on the client side.                                                                                 |
| oauthJWKSEndpoint                                             | The endpoint for retrieving the public key in order to verify the token’s signature.                                                      |
| issuer                                                        | The issuer endpoint.                                                                                                                      |
| authorizationEndpoint                                         | The endpoint for retrieving the authorization code.                                                                                       |
| tokenEndpoint                                                 | The endpoint for retrieving the access and refresh tokens.                                                                                |
| clientId                                                      | The id assigned to the application after being registered with the SSO provider.                                                          |
| scope                                                         | The claims to be included in the access token payload.                                                                                    |
| redirectPath                                                  | The endpoint the user is redirected to after the SSO login.                                                                               |
| clientSecret                                                  | The client secret was created when registering the application.                                                                           |
| logoutUrl                                                     | The endpoint called in order for the user to be signed out by the SSO provider                                                            |
| postLogoutRedirectUrl                                         | The endpoint the user is redirected to after being logged out by the SSO provider.                                                        |
| sessionTimeout                                                | The number of milliseconds of idle time before the user is logged out from the application.                                               |
| keyTTL                                                        | The time (in milliseconds) between encryption key rotations. The encryption key is used to encrypt the access token and is kept on disk.  |
| debugLogEnabled                                               | A flag for enabling or disabling the OAuthMiddleware logs.                                                                                |
| serverAuthentication                                          | A flag for enabling/disabling the OAuthMiddleware component.                                                                              |




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
