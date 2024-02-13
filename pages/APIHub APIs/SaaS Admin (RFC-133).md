---
title: SaaS Admin 
layout: home
parent: OpenDSU APIHub APIs
nav_order: 14
---

# **SaaS Admin (RFC-133)**

{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs).

**Document Maintainers: Andi Gabriel Tan 2022. List of other contributors in Annex. 1.**

**Copyright: MIT license**

**Copyright** ©  2018-2022 Axiologic Research and Contributors.

This document is licensed under <a href="https://en.wikipedia.org/wiki/MIT_License">MIT license.</a>

<!-- TOC -->
* [Abstract](#abstract)
* [1. Domain Configuration](#1-domain-configuration)
  * [1.1. Path Parameters](#11-path-parameters)
  * [1.2. Responses](#12-responses)
    * [1.2.1. Example: Application/JSON](#121-example-applicationjson)
* [2. Update Domain Configuration](#2-update-domain-configuration)
  * [2.1. Path Parameters](#21-path-parameters)
  * [2.2. Body Parameters](#22-body-parameters)
    * [2.2.1. Example: Application/JSON](#221-example-applicationjson)
  * [2.3. Responses](#23-responses)
* [3. Domain KeySSI Contracts Constitution](#3-domain-keyssi-contracts-constitution)
  * [3.1. Path Parameters](#31-path-parameters)
  * [3.2. Responses](#32-responses)
* [4. Admin Component](#4-admin-component)
  * [4.1. Add Company Domain in Admin Enclave](#41-add-company-domain-in-admin-enclave)
    * [4.1.1. Path Parameters](#411-path-parameters)
    * [4.1.2. Body Parameters](#412-body-parameters)
    * [4.1.3. Responses](#413-responses)
  * [4.2.Disable Company Domain in Admin Enclave](#42disable-company-domain-in-admin-enclave)
    * [4.2.1. Path Parameters](#421-path-parameters)
    * [4.2.2 Body Parameters](#422-body-parameters)
    * [4.2.3. Responses](#423-responses)
  * [4.3. Add Admin](#43-add-admin)
    * [4.3.1. Path Parameters](#431-path-parameters)
    * [4.3.2.  Body Parameters](#432-body-parameters)
    * [4.3.3. Responses](#433-responses)
  * [4.4. Add  Domain Admin](#44-add--domain-admin)
    * [4.4.1. Path Parameters](#441-path-parameters)
    * [4.4.2.  Body Parameters](#442-body-parameters)
    * [4.4.3. Responses](#443-responses)
  * [4.5. Store Variable](#45-store-variable)
    * [4.5.1. Path Parameters](#451-path-parameters)
    * [4.5.2.  Body Parameters](#452-body-parameters)
    * [4.5.3. Responses](#453-responses)
  * [4.6. Register Template](#46-register-template)
    * [4.6.1. Path Parameters](#461-path-parameters)
    * [4.6.2.  Body Parameters](#462-body-parameters)
    * [4.6.3. Responses](#463-responses)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->


# **Abstract**

This RFC enables us to get and update domain configurations.

# **1. Domain Configuration**

Get the configuration for the specified domain.

    GET /config/{domain}

## 1.1. Path Parameters

| Name    | Type    | Value      | Description                                |
|:--------|:--------|:-----------|:-------------------------------------------|
| domain  | string  | *required  | Domain for which configuration is needed.  |


## 1.2. Responses

| Status Code | Description                                                                                   |
|:------------|:----------------------------------------------------------------------------------------------|
| 200         | Returns the configuration for the specified domain. <br> (see 1.2.1 example Application/JSON) |
| 404         | Domain not found.                                                                             |


### 1.2.1. Example: Application/JSON

```js
{
"anchoring": {
  "type": "FS",
  "option": {
    "enableBricksLedger": false
  },
  "commands": {
    "addAnchor": "anchor"
  }
},
"enable": [
  "mq"
],
"mq_fsQueueLength": 1000
}
```

# **2. Update Domain Configuration**

Update the configuration for the specified domain.

    PUT /config/{domain}

## 2.1. Path Parameters

| Name    | Type    | Value      | Description                                |
|:--------|:--------|:-----------|:-------------------------------------------|
| domain  | string  | *required  | Domain for which configuration is needed.  |


## 2.2. Body Parameters

| Name  | Description                                  |
|:------|:---------------------------------------------|
| body  | New configuration for the specified domain.  |


### 2.2.1. Example: Application/JSON

```js
{
"anchoring": {
  "type": "FS",
  "option": {
    "enableBricksLedger": false
  },
  "commands": {
    "addAnchor": "anchor"
  }
},
"enable": [
  "mq"
],
"mq_fsQueueLength": 1000
}
```

## 2.3. Responses

| Status Code | Description                                                |
|:------------|:-----------------------------------------------------------|
| 200         | Operation completed successfully.                          |
| 400         | Invalid domain configuration was specified.                |
| 500         | An error occurred during the domain configuration update.  |


# **3. Domain KeySSI Contracts Constitution**

Get the domain keySSI for the contracts DSU specified inside the contracts constitution or null.

    GET /config/{domain}/keyssi

## 3.1. Path Parameters

| Name    | Type    | Value      | Description                         |
|:--------|:--------|:-----------|:------------------------------------|
| domain  | string  | *required  | Domain for which keySSI is needed.  |


## 3.2. Responses

| Status Code | Description                                                                                 |
|:------------|:--------------------------------------------------------------------------------------------|
| 200         | Returns the domain keySSI for the contracts DSU or null if no contracts DSU was configured. |
| 404         | Domain not found.                                                                           |


# **4. Admin Component**

<p style='text-align: justify;'>

The Admin Component is useful in order to set up multiple domains across different organizations that will use the same installation of APIHub.
</p>

## 4.1. Add Company Domain in Admin Enclave

Insert the company domain based on the existing mainDomain. Company domains are stored in adminEnclaves.

    POST /admin/{mainDomain}/addDomain

### 4.1.1. Path Parameters

| Name        | Type    | Value      | Description                                |
|:------------|:--------|:-----------|:-------------------------------------------|
| mainDomain  | string  | *required  | Domain for which configuration is needed.  |


### 4.1.2. Body Parameters

| Name  | Description                    |
|:------|:-------------------------------|
| body  | Schema type: Application/JSON  |


<b>Schema type</b>: Application/JSON <br>

```js
{
 domainName: string
 example: csc.nvs
 timestamp: number
 example: 1668020801397
 signature: string
 example: NOT_IMPLEMENTED
 cloneFromDomain: string
 example: csc
 
```

### 4.1.3. Responses

| Status Code | Description                                                |
|:------------|:-----------------------------------------------------------|
| 200         | Operation completed successfully.                          |
| 403         | RequestBody does not contain the cloneFromDomain property. |
| 500         | An error occurred.                                         |


## 4.2.Disable Company Domain in Admin Enclave

<p style='text-align: justify;'>

Disable the company domain. Disabled company domains will hold an "active: false" flag in adminEnclave.
</p>

    POST /admin/{mainDomain}/disableDomain

### 4.2.1. Path Parameters

| Name        | Type    | Value      | Description                                  |
|:------------|:--------|:-----------|:---------------------------------------------|
| mainDomain  | string  | *required  | Domain for which configuration is needed.    |


### 4.2.2 Body Parameters

| Name  | Description                    |
|:------|:-------------------------------|
| body  | Schema type: Application/JSON  |


<b>Schema type</b>: Application/JSON

```js
{
 domainName:string
 example: csc.nvs
 timestamp:number
 example: 1668020801397
 signature:string
 example: NOT_IMPLEMENTED
}

```

### 4.2.3. Responses

| Status Code | Description                       |
|:------------|:----------------------------------|
| 200         | Operation completed successfully. |
| 500         | An error occurred.                |


## 4.3. Add Admin

Add the DID of the admin in the admins table of the adminEnclave.

    POST /admin/{mainDomain}/addAdmin

### 4.3.1. Path Parameters

| Name        | Type    | Value      | Description                                |
|:------------|:--------|:-----------|:-------------------------------------------|
| mainDomain  | string  | *required  | Domain for which configuration is needed.  |


### 4.3.2.  Body Parameters

| Name  | Description                    |
|:------|:-------------------------------|
| body  | Schema type: Application/JSON  |


<b>Schema type</b>: Application/JSON

```js
{
 did: string
 example: did:ssi:name:vault.nvs:Demiurge/csc.admin
 timestamp: number
 example: 1668020801397
 signature: string
 example: NOT_IMPLEMENTED
}

```

### 4.3.3. Responses

| Status Code | Description                       |
|:------------|:----------------------------------|
| 200         | Operation completed successfully. |
| 500         | An error occurred.                |


## 4.4. Add  Domain Admin

Add the DID of the admin in the admins table of the adminEnclave.

    POST /admin{mainDomain}/addDomainAdmin

### 4.4.1. Path Parameters

| Name        | Type    | Value      | Description                                |
|:------------|:--------|:-----------|:-------------------------------------------|
| mainDomain  | string  | *required  | Domain for which configuration is needed.  |


### 4.4.2.  Body Parameters

| Name  | Description                    |
|:------|:-------------------------------|
| body  | Schema type: Application/JSON  |


<b>Schema type</b>: Application/JSON

```js
{
 domain: string
 example: nvs.csc
 did: string
 example: did:ssi:name:vault.nvs:Demiurge/csc.admin
 timestamp: number
 example: 1668020801397
 signature: string
 example: NOT_IMPLEMENTED
}

```

### 4.4.3. Responses

| Status Code | Description                       |
|:------------|:----------------------------------|
| 200         | Operation completed successfully. |
| 500         | An error occurred.                |


## 4.5. Store Variable

<p style='text-align: justify;'>

Store company variables needed for booting new wallets. These are stored in the variables table of the adminEnclave.
</p>

    POST /admin/{mainDomain}/storeVariable

### 4.5.1. Path Parameters

| Name        | Type    | Value      | Description                                |
|:------------|:--------|:-----------|:-------------------------------------------|
| mainDomain  | string  | *required  | Domain for which configuration is needed.  |


### 4.5.2.  Body Parameters

| Name  | Description                    |
|:------|:-------------------------------|
| body  | Schema type: Application/JSON  |


<b>Schema type</b>: Application/JSON

```js
{
dnsDomain: string
example: pharmaledger.app
variableName: string
example: companyName
variableContent: string
example: PLA
timestamp: number
example: 1668020801397
signature: string
example: NOT_IMPLEMENTED
}

```

### 4.5.3. Responses

| Status Code | Description                       |
|:------------|:----------------------------------|
| 200         | Operation completed successfully. |
| 500         | An error occurred.                |


## 4.6. Register Template

<p style='text-align: justify;'>

Register templates and hook default APIHub default deployment files with file templates that will be filled with variables stored in the previous API. Templates are stored in table templates of the adminEnclave.
</p>

    POST /admin/{mainDomain}/registerTemplate

### 4.6.1. Path Parameters

| Name        | Type    | Value      | Description                                |
|:------------|:--------|:-----------|:-------------------------------------------|
| mainDomain  | string  | *required  | Domain for which configuration is needed.  |


### 4.6.2.  Body Parameters

| Name  | Description                    |
|:------|:-------------------------------|
| body  | Schema type: Application/JSON  |


<b>Schema type</b>: Application/JSON

```js
{
 path: string
 example: /demiurge-wallet/loader/environment.js
 content: string
example: { "appName": "Demiurge", "vault": "server", "agent": "browser", "system": "any", "browser": "any", "mode": "dev-secure", "vaultDomain": "${vaultDomain}", "didDomain": "${didDomain}", "enclaveType":"WalletDBEnclave", "companyName": "${companyName}", "sw": false, "pwa": false}
 timestamp: number
 example: 1668020801397
 signature: string
 example: NOT_IMPLEMENTED
}

```

### 4.6.3. Responses

| Status Code | Description                       |
|:------------|:----------------------------------|
| 200         | Operation completed successfully. |
| 500         | An error occurred.                |


**Contributors**

1. <p style='text-align: justify;'><a href="https://www.axiologic.net/">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="https://www.opendsu.org/">www.opendsu.org</a> site.

2. <p style='text-align: justify;'><a href="https://pharmaledger.org/">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.

3. PrivateSky Research Project: MIT licensed content accordingly with the contracts. 
<a href="https://profs.info.uaic.ro/~ads/PrivateSky/"> https://profs.info.uaic.ro/~ads/PrivateSky/</a>





# **Annex 1. Contributors**


| **Current Editors**                 | **Email**                    |
|:------------------------------------|:-----------------------------|
| Sînică Alboaie                      | sinica.alboaie@axiologic.net |
| Rafael Mastaleru                    | rafael@rms.ro                |
| Nicoleta Mihalache                  | nicoleta@axiologic.net       |
| **Contributors Axiologic Research** | **Email**                    |
| Adrian Ganga                        | adrian@axiologic.net         |
| Andi-Gabriel Țan                    | andi@axiologic.net           |
| Cosmin Ursache                      | cosmin@axiologic.net         |
| Daniel Sava                         | daniel@axiologic.net         |
| Nicoleta Mihalache                  | nicoleta@axiologic.net       |
| Valentin Gérard                     | valentin@axiologic.net       |
| **PharmaLedger**                    | **Email**                    |
| Ana Balan                           | bam@rms.ro (RMS)             |
| Rafael Mastaleru                    | raf@rms.ro (RMS)             |


