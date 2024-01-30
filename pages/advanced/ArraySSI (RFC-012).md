---
title: ArraySSI 
layout: home
parent: Open DSU Advanced
nav_order: 3
---

# ArraySSI (RFC-012)
{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs).


**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.
This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)

<!-- TOC -->
* [ArraySSI (RFC-012)](#arrayssi-rfc-012)
<!-- TOC -->

# Abstract

ArraySSIs are created from multiple inputs that are easy to remember for the user. In our example, inputs are represented by company identifiers, serial numbers and product identifiers, but they could also be something else like name and telephone number. They may be different, depending on the use case.

<img alt="" align="center" src="" class="imgMain"/>

<p style="text-align:center"> <b>Figure 1: ConstSSI generated from serialization numbers </b></p>


There are no restrictions regarding the number of inputs we can use to create the ArraySSI. For example, adding a fourth input like GTIN can make the key more robust. Then, the array of inputs passes through a key derivation function, and the result is encoded to obtain the specific identifier of the ArraySSI. Next, the ArraySSI is derived to get a [ConstSSI] (https://www.opendsu.org/pages/advanced/ConstSSI%20(RFC-011).html) that can be used to create and resolve DSUs.

| **Subtype** | **Description**                                                                                                                             |
|:------------|:--------------------------------------------------------------------------------------------------------------------------------------------|
| array       | An arraySSI is built using an array of multiple identifiers, such as productID, companyID etc. Example:  ssi:array:domain:encodedArray::v0  |

# 1. Type-specific and control substringsy

As stated before, the specific string of the ArraySSI corresponds to the array of inputs that passes through a key derivation function. The result of the derivation is used to get the specific string.

| Type   | Type Specific substring  | Control substring  |
|:-------|:-------------------------|:-------------------|
| array  | encoded(KDF(array))      | none               |

# 2. Specific functions for ArraySSI


(Common functions for all keySSIs are available [here](https://www.opendsu.org/pages/concepts/KeySSI%20(RFC-002).html).)

## Function arraySSI.initialize(dlDomain, arr, vn, hint)

Description: Initialize ArraySSI with owned parameters.

| **Name**        | **Type**  | **Value**   | **Description**                                                                                                |
|:----------------|:----------|:------------|:---------------------------------------------------------------------------------------------------------------|
| dlDomain        | string    | *required   | The blockchain domain wanted to be used.                                                                       |
| constArray      | string    | *required   | An array with keys that will be used in the initialization to get the final specific string of your ArraySSI.  |
| vn (optional)   | string    |             | The version number of the SeedSSI you want to use. Default value: “v0”.                                        |
| hint (optional) | string    |             | Optional information for the keySSI resolver. Default value: undefine.                                         

## Function arraySSI.derive()

Description: Derive your arraySSI and return a constSSI. The constSSI will conserve all parameters from the ArraySSI, except for a control substring that will be added. The specific substring of the ConstSSI will be the same as the one calculated during the initialization of the arraySSI using the array of inputs. It is then possible to create and load a DSU using the ConstSSI.

Returns

| **Name**                                                                             | **Description**                 |
|:-------------------------------------------------------------------------------------|:--------------------------------|
| [constSSI](https://www.opendsu.org/pages/advanced/ConstSSI%20(RFC-011).html) object  | A constSSI object is returned.  |

## Function arraySSI.getEncryptionKey()

Description: Get the encryption key associated with the ArraySSI.

Returns

| **Name** | **Description**     |
|:---------|:--------------------|
| String   | The encryption key. |

## Function arraySSI.getTypeName()

Description: 

Returns


| **Name**           | **Description**                            |
|:-------------------|:-------------------------------------------|
| SSITypes.ARRAY_SSI | A string representing the type of the SSI. |


## Function arraySSI.createAnchorValue(brickMapHash, previousAnchorValue, callback)

Description:

| **Name**             | **Type** | **Value** | **Description** |
|:---------------------|:---------|:----------|:----------------|
| brickMapHash         |          |           |                 |
| previousAnchorValue  |          |           |                 |
| callback             | function |           |                 |

Callback parameters

| **Name**    | **Type**     | **Response example** |
|:------------|:-------------|:---------------------|
| err         | Error object |                      |
| anchorValue |              |                      |


# 3. Common KeySSI functions from KeySSIMixin

## Function autoload(identifier)

Description:

| **Name**   | **Type** | **Value**  | **Description** |
|:-----------|:---------|:-----------|:----------------|
| identifier | string   | *required  |                 |


## Function validateKeySSICharLength()

Description: Throws an error if the length of the identifier exceeds the maximum char length.

## Function load(subtype, dlDomain, subtypeSpecificString, control, vn, hint)

Description: Initialize ArraySSI with your own parameters.

| **Name**               | **Type** | **Value**  | **Description**                                                          |
|:-----------------------|:---------|:-----------|:-------------------------------------------------------------------------|
| subtype                | string   |            |                                                                          |
| dldomain               | string   | *required  | The blockchain domain wanted to be used.                                 |
| subtypeSpecificString  | string   |            |                                                                          |
| control                | string   |            |                                                                          |
| vn (optional)          | string   |            | The version number of the SeedSSI you want to use. Default value: “v0”   |
| hint (optional)        | string   |            | Optional information for the keySSI resolver. Default value: undefined.  |


## Function getDerivedType(ssiType, callback)

**Description**: 

| **Name** | **Type** | **Value** | **Description** |
|:---------|:---------|:----------|:----------------|
| ssiType  | string   |           |                 |      
| callback | function |           |                 |


**Callback parameters**

| **Name**  | **Type**     | **Response example** |
|:----------|:-------------|:---------------------|
| err       | Error object |                      |

**Description**: 

## Function getRelatedType(ssiType, callback)

Description: 


| **Name** | **Type** | **Value** | **Description**  |
|:---------|:---------|:----------|:-----------------|
| ssiType  | string   |           |                  |      
| callback | function |           |                  | 

**Callback parameters**

| **Name**  | **Type**     | **Response example** |
|:----------|:-------------|:---------------------|
| err       | Error object |                      |

Description: 

## Function getRootKeySSITypeName()

Description: 

Returns

| **Name** | **Description** |
|:---------|:----------------|
| String   |                 |


## Function getAnchorId(plain)

Description: 

| **Name** | **Type** | **Value** | **Description**                                                                      |
|:---------|:---------|:----------|:-------------------------------------------------------------------------------------|
| plain    | bool     |           | True if you want the ID in plain text, false if you want the ID encoded in base 58.  |


Returns

| **Name**  | **Description**                                   |
|:----------|:--------------------------------------------------|
| anchor id | The identifier for the anchor, without any hints. |


