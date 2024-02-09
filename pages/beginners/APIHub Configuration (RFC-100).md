---
title: APIHub Configuration 
layout: home
parent: OpenDSU for Beginners
nav_order: 7
---



# **APIHub configuration (RFC-100)**
{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs)

**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)

<!-- TOC -->
* [Abstract](#abstract)
* [Purpose](#purpose)
* [1. APIHub Configuration](#1-apihub-configuration)
  * [1.1 Main configuration - file apihub.json](#11-main-configuration---file-apihubjson)
  * [1.2 Blockchain Domain-specific configuration](#12-blockchain-domain-specific-configuration)
  * [1.3 Access control to APIHub services by using SSO integration](#13-access-control-to-apihub-services-by-using-sso-integration)
  * [1.4 Trust loader specific configuration and conventions](#14-trust-loader-specific-configuration-and-conventions)
* [2. Components](#2-components)
* [3. Components specific configuration](#3-components-specific-configuration)
  * [3.1 Anchoring component configuration](#31-anchoring-component-configuration)
  * [3.2 Bricking component configuration](#32-bricking-component-configuration)
  * [3.3 Message Queue Component Configuration](#33-message-queue-component-configuration)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->




# Abstract

This RFC provides Documentation for the implementation of the APIHub and its configuration.

# Purpose

<p style='text-align: justify;'>APIHub is an HTTP server that offers functionality to the OpenDSU SDK (typically openDSU wallets): encrypted bricks storage, blockchain anchoring, message queues (DID centered), KeySSI notifications, BDNS, and access to smart contracts. All these functionalities are grouped as "components'' that expose various endpoints.
</p>

Most of the components are associated with "blockchain domains", and the endpoints are typically in the form of: “component/blockchainDomain/action/params”


<div style="display: flex; justify-content: center;">
  <img 
    alt="" 
    src="https://docs.google.com/drawings/d/e/2PACX-1vQPtXKYClpqY3-Cxirrt3v_sYtI25MHcDAGZHISKBomWtM2BA2iWR1pd2qtYoPVhVg1ua86v-Ll5561/pub?w=687&h=405" 
    class="imgMain" 
    style="max-width: 100%; cursor: pointer; transition: max-width 0.3s ease-in-out;"
    onclick="openModal(this.src)"
    title="Click to Zoom"
  />
</div>

<p style='text-align: center;'><b>Figure 1: APIHub</b></p>


<p style='text-align: justify;'>APIHub is extensible in the sense that you can add new components. However, this should not be abused. When possible, the components rely on “external adapters” in the sense that they delegate the actual implementation to some external systems that offer stronger implementation of the expected logic. To support the OpenDSU programmers' experience (make the development cycle faster and avoid the installation of many external systems),  all the components have a basic implementation that does not require an external system. For example, APIHub offers a simulated blockchain for anchoring and a simulated message queue. Sometimes, these “simulated” systems are good enough even for production but of course, do not offer all the expected properties (for example, the simulated blockchain is just a single node ledger).
</p>

# 1. APIHub Configuration


<div style="display: flex; justify-content: center;">
  <img 
    alt="" 
    src="https://docs.google.com/drawings/d/e/2PACX-1vR9z07iA4c4DyuG6lxie-bAvQeOLYyL5yd1lmMQnyR32_XQTbr0fmcDK1eibpNfhWo3hbYVlBNVSNA9/pub?w=438&h=590" 
    class="imgMain" 
    style="max-width: 100%; cursor: pointer; transition: max-width 0.3s ease-in-out;"
    onclick="openModal(this.src)"
    title="Click to Zoom"
  />
</div>

<p style='text-align: center;'><b>Figure 2: APIHub Workspace Configuration</b></p>

## 1.1 Main configuration - file apihub.json

<p style='text-align: justify;'>The location from where the <b>apihub.json</b> file is read from the env variable is <b>PSK_CONFIG_LOCATION</b>. If this variable is not set, then the default configuration is used. Any custom configuration added to the apihub.json file will be merged with the default config of APIHub. By doing this, the apihub.json can contain only the settings that need to be changed.
</p>



<p style='text-align: justify;'>The <b>apihub.json</b> file content needs to be <b>JSON valid</b>. Any mistakes during editing of this file can generate strange behaviors of the APIHub, like components not loading, wrong components configuration etc.</p>


| **APIHub Configuration entries** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|:---------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| storage                          | The folder in which the APIHub server stores its files. The path can be relative or absolute. The path is resolved using path.resolve from NodeJS. When a relative path is used, it is relative to the PrivateSky folder. <br/> <b>Default: {$PSK_ROOT_INSTALATION_FOLDER}/tmp</b>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| sslFolder                        | The folder in which APIHub looks for SSL certificates when started. If the folder contains certificates, the APIHub is started as an HTTPS server; otherwise, APIHub is an HTTP server. By default, APIHub is an HTTP server (sslFolder is empty). If SSL certificates are copied into the sslFolder, then APIHub is started as an HTTPS server.The path can be relative or absolute. The path is resolved using path.resolve from NodeJS. When a relative path is used, it is relative to the PrivateSky folder.<br/> If sslFolder is set up, then <b>server.cert</b> and <b>server.key</b> files are used.<br/> <b>Note</b>: Even if APIHUB can be configured to use HTTPS, we recommend using a proxy (like Nginx) for this.                                                                                                                                                          |
| port                             | The port that the server uses to listen for requests. <br/>  <b>Default: </b>8080                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| host                             | If the host is omitted, the server will accept connections on the unspecified IPv6 address when IPv6 is available or the unspecified IPv4 address (0.0.0.0) otherwise.<br/> In most operating systems, listening to the unspecified IPv6 address may cause the net. The server to also listen on the unspecified IPv4 address (0.0.0.0).<br/> **Default**:0.0.0.0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| preventRateLimit                 | A flag that determines if the APIHub’s throttling component is enabled. <br/>   <b>Default:</b> true (means that throttling is disabled)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| activeComponentcs                | An array that contains the names of the services/components that the server provides/uses.<br/>**Important note**: **staticServer** component should be the last in the activeComponents list because the server loads the middlewares in the order they are declared in activeComponents and staticServer handles the requests not processed by the other middlewares.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| componentsConfig                 | An object that contains the service's configurations. Each service declared in activeComponents should have the module property componentsConfig set. The module property is either a file system path to a module that contains the service or the name of a PrivateSky module. When you add a new component in the active components list you need to point to the index file that needs to be loaded.<br/>"activeComponents": [..."mq"...], <br/>"componentsConfig": { <br/> "mq":{<br/> "module": "./components/mqHub", <br/>  "function": "MQHub", <br/>  }<br/>}.<br/> If the index file set up by the “module” property doesn’t export only one method then we need to provide the “function” property to indicate which method needs to be called.The method exported by the module will be called with the server object that gives access to register new endpoints or middlewares. |
| CORS                             | An object that contains the headers that are added on every OPTIONS response by the CORS middleware.<br/> <b>Default</b>: {<br/>"Access-Control-Allow-Methods" : "POST, GET, PUT, DELETE, OPTIONS"<br/>  "Access-Control-Allow-Credentials" : true,<br/> "Access-Control-Max-Age" : '3600',<br/> "Access-Control-Allow-Headers" : "Content-Type, <br/> Content-Length, X-Content-Length, Access-Control-Allow-Origin, User-Agent, Authorization"}<br/> <b>Example</b>:  <br/>"CORS": {<br/>   "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE, OPTIONS",<br/>  "Access-Control-Allow-Origin": "example.com"<br/> }                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| tokenBucket                      | Experimental feature for throttling <br/> <b>Default</b>: "tokenBucket": {<br/>  "cost": {<br/>  "low": 10<br/>  medium": 100<br/> "high": 500 <br/>}, "error": {<br/> "limitExceeded": "error_limit_exceeded",<br/> "badArgument": "error_bad_argument"<br/> },<br/> "startTokens": 6000,<br/>"tokenValuePerTime": 10,<br/>"unitOfTime": 100<br/>  }.<br/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| enableInstallationDetails        | A flag which determines if the endpoint /installation-details is enabled which returns information about the commit SHA of the privatesky and workspace projects. <br/>   <p style='text-align: justify;'>Default</p>: true  <br/>  Output example of the /installation-details endpoint<br/>{<br/>"ePI-workspace": {<br/> "commitNo": "bcsdc3",<br/>  "commitMessage": "new freeze version"<br/> },<br/>privatesky": {<br/> "commitNo": "1f0dfec"<br/> "commitMessage": "new freeze version"<br/> }<br/>}                                                                                                                                                                                                                                                                                                                                                                               |
| enableRequestLogger              | A flag that specifies if each request that arrives at the server is logged.<br/> <b>Default</b>: true  <br/>Log format: {$interface}:{$port} - [${timestamp}] {$HTTPMethodName}:{$path} {$status} {$duration}<br/>Output example:<br/> 127.0.0.1:8080 - [2022-02-09T08:23:01.390Z] <br/>PUT:/bricking/vault/put-brick 201 1.359ms.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| enableOAuth                      | A flag that specifies if the SSO component is enabled. <br/> <b>Default</b>: false  <br/><b>Notes</b>: For extra information about the SSO integration, please read the chapter “Access control to APIHUB services by SSO integration”.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| enableLocalhostAuthorization     | A flag that specifies if authentication is required when SSO is enabled and the APIHub server runs on localhost.<br/> <b>Default</b>: false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| skipOAuth                        | An array of paths that do not require authentication when the SSO component is enabled. <br/><b>Default</b>: []                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| responseHeaders                  | An object that contains the headers that are added on every server response. <br/><b>Default</b>: {} <br/> <b>Example</b>:<br/> "responseHeaders": {<br/> "X-Frame-Options": "SAMEORIGIN",<br/> "X-XSS-Protection": "1; mode=block"<br/>  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| oauthConfig                      | A flag that specifies if the OAuth flow is done on the client or on the server. The integration is based on Authentication code flow with pkce.<br/> Default: false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| readOnlyFile                     | Specify the name (may include path to the file if need it) of the file that signals the APIHub instance to transition into readonly mode.<br/> When the system is in readonly mode, all requests using HTTP methods other than GET will receive a 405 status code response.<br/> <b>Default</b>: readonly                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| readOnlyInterval                 | In milliseconds, the number used to set the interval for checking the conditions to enter readonly mode is defined.<br/> Default: 60000 msec                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| workers                          | The APIHub can start in cluster mode*, and the number of workers can be specified.<br/>  * Not all APIHub components are ready yet to be available in cluster mode.<br/> <b>Default</b>: 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |



## 1.2 Blockchain Domain-specific configuration

<p style='text-align: justify;'>The Blockchain Domain-specific configuration can override any apihub.json config for the specific domain. Except for the following configurations, there are some specific component settings that can also be added to the domain-specific configuration. Scroll down for each component's custom configuration possibilities.</p>

| **Configuration** | **Description**                                                                                                                                                                                                                                                                                                                     |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| enable            | The list of APIHub components enabled for the current domain.<br/> For example, even if the MQ component is present in the apihubConfig.activeComponents list, the MQs are not active by default for any domains. Thus, in the domain-specific configuration, we need to enable it, just for those domains that need this feature.  |


## 1.3 Access control to APIHub services by using SSO integration

<p style='text-align: justify;'>SSO integration is optional but could add a new level of security to the OpenDSU wallets. The SSO component is disabled by default but, when enabled, it will check the configured endpoints against the existence of the appropriate JWT token. The SSO component is working with an SSO Adapter for an external SSO Provider. The SSO Provider will offer the actual user management. The SSO component exposes the following endpoints:
</p>

* getAuthToken: require as input a refresh token
* login: returns a refresh token
* getEncryptedProfile
* updateEncryptedProfile
* getSecurityPolicies:
  * enabled: true or false
  * type of login
  * return a URL for login if the login should happen in the SSO provider
  * encryptedProfile (true or false)


<div style="display: flex; justify-content: center;">
  <img 
    alt="" 
    src="https://docs.google.com/drawings/d/e/2PACX-1vTRTD_khUiJ6r0ppqdsU1iXt3yASz5GuGzcO80bqo-TXq8nZSRbcnVtI9zTtrJAzMltnA8_lOkKVOhz/pub?w=702&h=481" 
    class="imgMain" 
    style="max-width: 100%; cursor: pointer; transition: max-width 0.3s ease-in-out;"
    onclick="openModal(this.src)"
    title="Click to Zoom"
  />
</div>

<p style='text-align: center;'><b>Figure 3: TrustLoader</b></p>

<p style='text-align: justify;'>The TrustLoader will check if the SSO is enabled and, if it is, it will display a login page (user, password). On successful login, it will receive a refreshed token that will be saved in the wallet (in environment.js). OpenDSU SDK will check if SSO is enabled by looking for the refresh token in its environment. If it is available, it will request an Authentication Token. After that, OpenDSU SDK will send an authentication token at each request. Each domain configuration will have a list of endpoints that require SSO authentication.
</p>

<p style='text-align: justify;'>The SSO Adapter and the SSO Provider should be deployed as distinct containers. The main benefit of the SSO Adapter is that it isolates dependencies on any specific SSO protocol. This way, the APIHub code remains clean and independent from the particularities of the actual implementations.
</p>

## 1.4 Trust loader specific configuration and conventions

| Configuration | Description                                                                                                                                                                                                                                       |
|:--------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| appName       | The name of application.                                                                                                                                                                                                                          |
| vault         | Specifies where the bricks and anchors for the vault domain are stored. If vault: server, the bricks, and anchors are stored in the APIHub server; if vault: browser, the anchors and bricks are stored in the browser’s indexedDb.               |
| agent         | mobile, browser                                                                                                                                                                                                                                   |
| System        | The system on which the application is running (IOS, Android, or any).                                                                                                                                                                            |
| browser       | The browser in which the application is running (Chrome, Firefox, or any).                                                                                                                                                                        |
| mode          | The wallet’s authentication mode (autologin, dev-secure, secure). In autologin mode, the authentication is skipped; in dev-secure mode, the default credentials are used for authentication, and in secure mode, no default credentials are used. |
| vaultDomain   | The domain used as a vault (anchoring wallets).                                                                                                                                                                                                   |
| didDomain     | The domain used to store for OpenDSU did methods.                                                                                                                                                                                                 |
| enclaveType   | The type of enclave used for storing private keys (MemoryEnclave, WalletDBEnclave, ApihubProxy, HighSecurityProxy). By default enclaveType is MemoryEnclave.                                                                                      |
| sw            | A flag that specifies if the service workers are enabled for the current wallet.                                                                                                                                                                  |
| pwa           | A flag that specifies if the current wallet is a PWA.                                                                                                                                                                                             |



# 2. Components

| **Components**            | **Description**                                                                                                                                        |
|:--------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| Anchoring                 | Allows writing and reading of anchors for DSUs.                                                                                                        |
| Bricking                  | Allow writing and reading of bricks for DSUs.                                                                                                          |
| BDNS                      | Returns anchoring and bricking endpoints for each blockchain.                                                                                          |
| Logging                   | Logs every request that arrives on the server.                                                                                                                                                       |
| Static Server             | Resolves requests that are not processed by the other components.                                                                                                                                                       |
| Files Uploader            | Allows uploading and downloading files.                                                                                                                                                       |
| Service Workers Simulator | No domain.                                                                                                                                                       |
| Installation Info         | Returns the commit number and message for the OpenDSU installation used to run the APIHub server.                                                                                                                                                       |
| Message Queues            | Allow the writing,  deleting, and reading of messages in and from a channel.                                                                                                                                                                                                                                                        |
| Notifications             | Allow subscribing for and publishing messages based on KeySSIs.                                                                                                                                                                                                                                                                                                                                    |
| Smart Contracts           | Allow the execution of commands in a domain.                                                                                                                                                                                                                                                                                                                                                                                                   |


# 3. Components specific configuration

## 3.1 Anchoring component configuration


| APIHub Configuration | Description                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|:---------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| anchoring            | Each domain needs to have configured which anchoring strategies is used. <br/>  Current options: “FS” or “ETH”. Other options under development are “FSX” and “Fabric”.<br/> Example of how to configure FS anchoring strategy:<br/> "anchoring": {<br/> "type": "FS",<br/>   }<br/> Example of how to configure ETH/Quorum anchoring strategy:<br/>  "anchoring": {<br/> "type": "ETH",<br/> "option": {<br/> "endpoint": "http(s)://host:port"<br/>  }  |
| anchoringStrategy    | default BricksLedgerAnchoringStrategy                                                                                                                                                                                                                                                                                                                                                                                                                     |




## 3.2 Bricking component configuration

| **Bricking Configuration**  | **Description**     |
|:------------------------|:----------------|
| module                  |                 |
| BrickingStorageStrategy | default FSBrick |


| **Service Worker Simulator** | **Description** |
|:-----------------------------|:----------------|
| iframeHandlerDsuBootPath     |                 |

| **Configuration** | **Description** |
|:------------------|:----------------|
| module            |                 |



## 3.3 Message Queue Component Configuration


<p style='text-align: justify;'>This APIHub component offers a MQ implementation that uses DID to identify the resources. Exposes a list of endpoints for sending and receiving messages towards message queues.</p>

| Message Queues                            | Description                                                                                                                                                                                                                                                   |
|:------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| mq_strategyName                           | Options:<br/> MQ_FS_Strategy = stores the messages to a path specified using mq_fsStrategyStorageFolder                                                                                                                                                       |
| mq_fsStrategyStorageFolder                | If MQ_FS_Strategy is used, this config needs to be set in order to define where all the messages are persisted.<br/><b> Default valu</b>e <br/> <b> {$apihubConfig.storageFolder}/mqs/{$domainName</b>}                                                       |
| mq_fsMessageMaxSize                       | Max size of a message. <b>Default value 10 * 1024</b>                                                                                                                                                                                                         |
| mq_fsQueueLength                          | Length of a message queue. **Default value 100.**                                                                                                                                                                                                             |
| mq_client_timeout                         | The timeout value for the client requests that will wait for the queue to have a message for them. <br/><b>Default value 60 sec</b>. Keep in mind that other gateways may be configured with a 30-second timeout and will close the request with a Gateway timeout error. |
| mq_throttling                             | Throttling limit for each queue. <b>Default value 2. Not used for the moment.</b>                                                                                                                                                                                                                                                                       |
| mq_allow_unregistered_did                 |  Boolean variable that enables unregistered DIDs to use the queues.  <br/><b>Default value false</b>                                                                                                                                                                                                                                                                                                                                                     |







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
