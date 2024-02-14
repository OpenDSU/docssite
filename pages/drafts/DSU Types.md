---
title: DSU Types 
layout: home
parent: OpenDSU Drafts
nav_order: 10
---


# DSU Types - DT (RFC-076)
{: .no_toc }

{: .draft }
A period when the community can review the RFC (comment Docs).

**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.
This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)



# Abstract

<p style='text-align: justify;'>The “DT” API space offers a set of portable functions for defining DSU Types.
</p>

# DSU Types functions

//in construction 

| Name  | Type  | Value     | Description    |
|:------|:------|:----------|:---------------|
|       |       |           |                |

**Callback parameters**

| Name  | Type  | Response example     | 
|:------|:------|:---------------------|
|       |       |                      |


**template(a,b);**

**Description:**  Get the content of the brick identified by the HashLinkSSI

**Parameters:** 
hashLinkSSI: the HashLinkSSI you want to get the brick from
authToken: a JWT authentication token //optional?

**Callback:** 
* err: error message
* brick:the content of the brick identified by the HashLinkSSI.

DSU API //to move later to OpenDSU sdk when implemented


//TODO: find another RFC and link here //From Archive.js

## Function mount (path, ssiString, options, callback)

**Description:**

| Name      | Type  | Value     | Description    |
|:----------|:------|:----------|:---------------|
| path      |       |           |                |
| ssiString |       |           |                |
| options   |       |           |                |
| callback  |       |           |                | 

**Callback parameters**

| Name  | Type  | Response example     | 
|:------|:------|:---------------------|
|       |       |                      |

**Description:** 


## Function unmount (path, callback)

**Description:**

| Name     | Type  | Value     | Description    |
|:---------|:------|:----------|:---------------|
| path     |       |           |                |
| callback |       |           |                |

**Callback parameters**

| Name  | Type  | Response example     | 
|:------|:------|:---------------------|
|       |       |                      |


## Function listMountedDSUs (path, callback)

**Description:**
**Return:**  <p style='text-align: justify;'>KeySSIs and names of DSUs mounted at the specified path.</p>

| Name     | Type  | Value     | Description    |
|:---------|:------|:----------|:---------------|
| path     |       |           |                |
| callback |       |           |                |

**Callback parameters**

| Name  | Type  | Response example     | 
|:------|:------|:---------------------|
|       |       |                      |

## Function addFolder(fsPath,  dsuPath, options, callback)

**Description:**

| Name       | Type  | Value     | Description    |
|:-----------|:------|:----------|:---------------|
| fsPath     |       |           |                |
| dsuPath    |       |           |                |
| options    |       |           |                |
| callback   |       |           |                | 

**Callback parameters**

| Name  | Type  | Response example     | 
|:------|:------|:---------------------|
|       |       |                      |


## Function extractFolder(fsPath,  dsuPath, options, callback)

**Description:**

| Name       | Type  | Value     | Description    |
|:-----------|:------|:----------|:---------------|
| fsPath     |       |           |                |
| dsuPath    |       |           |                |
| options    |       |           |                |
| callback   |       |           |                | 

**Callback parameters**

| Name  | Type  | Response example     | 
|:------|:------|:---------------------|
|       |       |                      |

## Function addFile(fsPath,  dsuPath, options, callback)

**Description:**

| Name       | Type  | Value     | Description    |
|:-----------|:------|:----------|:---------------|
| fsPath     |       |           |                |
| dsuPath    |       |           |                |
| options    |       |           |                |
| callback   |       |           |                | 

**Callback parameters**

| Name  | Type  | Response example     | 
|:------|:------|:---------------------|
|       |       |                      |


## Function extractFile(fsPath,  dsuPath, options, callback)

**Description:**

| Name       | Type  | Value     | Description    |
|:-----------|:------|:----------|:---------------|
| fsPath     |       |           |                |
| dsuPath    |       |           |                |
| options    |       |           |                |
| callback   |       |           |                | 

**Callback parameters**

| Name  | Type  | Response example     | 
|:------|:------|:---------------------|
|       |       |                      |


## Function writeFile(path, data, options, callback)

**Description:**

| Name     | Type  | Value     | Description    |
|:---------|:------|:----------|:---------------|
| path     |       |           |                |
| data     |       |           |                |
| options  |       |           |                |
| callback |       |           |                | 

**Callback parameters**

| Name  | Type  | Response example     | 
|:------|:------|:---------------------|
|       |       |                      |



## Function readFile(path, callback)

**Description:**

| Name     | Type  | Value     | Description    |
|:---------|:------|:----------|:---------------|
| path     |       |           |                |
| callback |       |           |                |


**Callback parameters**

| Name  | Type  | Response example     | 
|:------|:------|:---------------------|
|       |       |                      |



## Function listFile(path, callback)

**Description:**

| Name     | Type  | Value     | Description    |
|:---------|:------|:----------|:---------------|
| path     |       |           |                |
| callback |       |           |                |

**Callback parameters**

| Name  | Type  | Response example     | 
|:------|:------|:---------------------|
|       |       |                      |



## Function listFolder(path, callback)

**Description:**

| Name     | Type  | Value     | Description    |
|:---------|:------|:----------|:---------------|
| path     |       |           |                |
| callback |       |           |                |


**Callback parameters**

| Name  | Type  | Response example     | 
|:------|:------|:---------------------|
|       |       |                      |

## Function readDir(path, options, callback)

**Description:**

| Name     | Type  | Value     | Description    |
|:---------|:------|:----------|:---------------|
| path     |       |           |                |
| options  |       |           |                |
| callback |       |           |                | 

**Callback parameters**

| Name  | Type  | Response example     | 
|:------|:------|:---------------------|
|       |       |                      |


## Function rename(oldPath, newPath, options, callback)

**Description:**

| Name     | Type  | Value     | Description    |
|:---------|:------|:----------|:---------------|
| oldPath  |       |           |                |
| newPath  |       |           |                |
| options  |       |           |                |
| callback |       |           |                | 

**Callback parameters**

| Name  | Type  | Response example     | 
|:------|:------|:---------------------|
|       |       |                      |

## Function delete(path, options, callback)

**Description:**

| Name     | Type  | Value     | Description    |
|:---------|:------|:----------|:---------------|
| path     |       |           |                |
| options  |       |           |                |
| callback |       |           |                | 

**Callback parameters**

| Name  | Type  | Response example     | 
|:------|:------|:---------------------|
|       |       |                      |


# DSU API functions

## Function call(functionName, arg1,....argn, callback)

**Description:**

| Name         | Type  | Value     | Description    |
|:-------------|:------|:----------|:---------------|
| functionName |       |           |                |
| arg1         |       |           |                |
| argn         |       |           |                | 
| callback     |       |           |                | 

**Callback parameters**

| Name  | Type  | Response example     | 
|:------|:------|:---------------------|
|       |       |                      |


## Function getObject()

**Description:**

| Name        | Type  | Value     | Description    |
|:------------|:------|:----------|:---------------|
|             |       |           |                |
|             |       |           |                |
|             |       |           |                | 
|             |       |           |                | 

**Callback parameters**

| Name  | Type  | Response example     | 
|:------|:------|:---------------------|
|       |       |                      |

## Function putObject()

**Description:**

| Name        | Type  | Value     | Description    |
|:------------|:------|:----------|:---------------|
|             |       |           |                |
|             |       |           |                |
|             |       |           |                | 
|             |       |           |                | 

**Callback parameters**

| Name  | Type  | Response example     | 
|:------|:------|:---------------------|
|       |       |                      |

## Function setItem()

**Description:**

| Name        | Type  | Value     | Description    |
|:------------|:------|:----------|:---------------|
|             |       |           |                |
|             |       |           |                |
|             |       |           |                | 
|             |       |           |                | 

**Callback parameters**

| Name  | Type  | Response example     | 
|:------|:------|:---------------------|
|       |       |                      |


## Function getItem()

**Description:**

| Name        | Type  | Value     | Description    |
|:------------|:------|:----------|:---------------|
|             |       |           |                |
|             |       |           |                |
|             |       |           |                | 
|             |       |           |                | 

**Callback parameters**

| Name  | Type  | Response example     | 
|:------|:------|:---------------------|
|       |       |                      |


## Function deleteObjects()

**Description:**

| Name        | Type  | Value     | Description    |
|:------------|:------|:----------|:---------------|
|             |       |           |                |
|             |       |           |                |
|             |       |           |                | 
|             |       |           |                | 

**Callback parameters**

| Name  | Type  | Response example     | 
|:------|:------|:---------------------|
|       |       |                      |


# Dsu Storage functions

## Function setObject()

**Description:**

| Name        | Type  | Value     | Description    |
|:------------|:------|:----------|:---------------|
|             |       |           |                |
|             |       |           |                |
|             |       |           |                | 
|             |       |           |                | 

## Function getObject()

**Description:**

| Name        | Type  | Value     | Description    |
|:------------|:------|:----------|:---------------|
|             |       |           |                |
|             |       |           |                |
|             |       |           |                | 
|             |       |           |                | 


## Function setItem()

**Description:**

| Name        | Type  | Value     | Description    |
|:------------|:------|:----------|:---------------|
|             |       |           |                |
|             |       |           |                |
|             |       |           |                | 
|             |       |           |                | 


## Function getItem()

**Description:**

| Name        | Type  | Value     | Description    |
|:------------|:------|:----------|:---------------|
|             |       |           |                |
|             |       |           |                |
|             |       |           |                | 
|             |       |           |                | 


## Function uploadFile()

**Description:**

| Name        | Type  | Value     | Description    |
|:------------|:------|:----------|:---------------|
|             |       |           |                |
|             |       |           |                |
|             |       |           |                | 
|             |       |           |                | 


## Function uploadMultipleFiles()

**Description:**

| Name        | Type  | Value     | Description    |
|:------------|:------|:----------|:---------------|
|             |       |           |                |
|             |       |           |                |
|             |       |           |                | 
|             |       |           |                | 


## Function removeFile()//warming obsolete

**Description:**

| Name        | Type  | Value     | Description    |
|:------------|:------|:----------|:---------------|
|             |       |           |                |
|             |       |           |                |
|             |       |           |                | 
|             |       |           |                | 

## Function removeFile(s)//warming obsolete

**Description:**

| Name        | Type  | Value     | Description    |
|:------------|:------|:----------|:---------------|
|             |       |           |                |
|             |       |           |                |
|             |       |           |                | 
|             |       |           |                | 






**Contributors**

1. <p style='text-align: justify;'><a href="www.axiologic.net">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="www.opendsu.com">www.opendsu.com</a> site.

2. <p style='text-align: justify;'><a href="www.pharmaledger.eu">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.

3. <a href="www.privatesky.xyz">PrivateSky Research Project</a>: MIT licensed content accordingly with the contracts. https://profs.info.uaic.ro/~ads/PrivateSky/

# Annex 1. Contributors

| **Current Editors**                  | **Email**                                |
|:-------------------------------------|:-----------------------------------------|
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
