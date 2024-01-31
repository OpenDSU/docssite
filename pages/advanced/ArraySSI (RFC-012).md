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
* [Abstract](#abstract)
* [1. Type-specific and control substrings](#1-type-specific-and-control-substrings)
* [2. Specific functions for ArraySSI](#2-specific-functions-for-arrayssi)
  * [Function arraySSI.initialize(dlDomain, arr, vn, hint)](#function-arrayssiinitializedldomain-arr-vn-hint)
  * [Function arraySSI.derive()](#function-arrayssiderive)
  * [Function arraySSI.getEncryptionKey()](#function-arrayssigetencryptionkey)
  * [Function arraySSI.getTypeName()](#function-arrayssigettypename)
  * [Function arraySSI.createAnchorValue(brickMapHash, previousAnchorValue, callback)](#function-arrayssicreateanchorvaluebrickmaphash-previousanchorvalue-callback)
* [3. Common KeySSI functions from KeySSIMixin](#3-common-keyssi-functions-from-keyssimixin)
  * [Function autoload(identifier)](#function-autoloadidentifier)
  * [Function validateKeySSICharLength()](#function-validatekeyssicharlength)
  * [Function load(subtype, dlDomain, subtypeSpecificString, control, vn, hint)](#function-loadsubtype-dldomain-subtypespecificstring-control-vn-hint)
  * [Function getDerivedType(ssiType, callback)](#function-getderivedtypessitype-callback)
  * [Function getRelatedType(ssiType, callback)](#function-getrelatedtypessitype-callback)
  * [Function getRootKeySSITypeName()](#function-getrootkeyssitypename)
  * [Function getAnchorId(plain)](#function-getanchoridplain)
  * [Function getSpecificString()](#function-getspecificstring)
  * [Function getDLDomain()](#function-getdldomain)
  * [Function getControlString()](#function-getcontrolstring)
  * [Function getHint()](#function-gethint)
  * [Function getVn()](#function-getvn)
  * [Function getDSURepresentationName()](#function-getdsurepresentationname)
  * [Function getNoHintIdentifier(plain)](#function-getnohintidentifierplain)
  * [Function getIdentifier(plain)](#function-getidentifierplain)
  * [Function getBricksDomain()](#function-getbricksdomain)
  * [Function clone()](#function-clone)
  * [Function cast(newType)](#function-castnewtype)
  * [Function canSign()](#function-cansign)
  * [Function setCanSign(canSign)](#function-setcansigncansign)
  * [Function canBeVerified()](#function-canbeverified)
  * [Function sign(dataToSign, callback)](#function-signdatatosign-callback)
  * [Function verify(data, signature)](#function-verifydata-signature)
  * [Function hash(data)](#function-hashdata)
  * [Function toJSON()](#function-tojson)
  * [Function canAppend()](#function-canappend)
  * [Function isTransfer()](#function-istransfer)
  * [Function isAlias()](#function-isalias)
  * [Function isTemplate()](#function-istemplate)
  * [Function createAnchorValue(brickMapHash, previousAnchorValue, callback)](#function-createanchorvaluebrickmaphash-previousanchorvalue-callback)
* [4. Cryptographic algorithms used by ArraySSIs (advanced)](#4-cryptographic-algorithms-used-by-arrayssis-advanced)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->


# Abstract

ArraySSIs are created from multiple inputs that are easy to remember for the user. In our example, inputs are represented by company identifiers, serial numbers and product identifiers, but they could also be something else like name and telephone number. They may be different, depending on the use case.

<img alt="" align="center" src="" class="imgMain"/>

<p style="text-align:center"> <b>Figure 1: ConstSSI generated from serialization numbers </b></p>


There are no restrictions regarding the number of inputs we can use to create the ArraySSI. For example, adding a fourth input like GTIN can make the key more robust. Then, the array of inputs passes through a key derivation function, and the result is encoded to obtain the specific identifier of the ArraySSI. Next, the ArraySSI is derived to get a [ConstSSI] (https://www.opendsu.org/pages/advanced/ConstSSI%20(RFC-011).html) that can be used to create and resolve DSUs.

| **Subtype** | **Description**                                                                                                                             |
|:------------|:--------------------------------------------------------------------------------------------------------------------------------------------|
| array       | An arraySSI is built using an array of multiple identifiers, such as productID, companyID etc. Example:  ssi:array:domain:encodedArray::v0  |

# 1. Type-specific and control substrings

As stated before, the specific string of the ArraySSI corresponds to the array of inputs that passes through a key derivation function. The result of the derivation is used to get the specific string.

| Type   | Type Specific substring  | Control substring  |
|:-------|:-------------------------|:-------------------|
| array  | encoded(KDF(array))      | none               |

# 2. Specific functions for ArraySSI


(Common functions for all keySSIs are available [here](https://www.opendsu.org/pages/concepts/KeySSI%20(RFC-002).html).)

## Function arraySSI.initialize(dlDomain, arr, vn, hint)

**Description**: Initialize ArraySSI with owned parameters.

| **Name**        | **Type**  | **Value**   | **Description**                                                                                                |
|:----------------|:----------|:------------|:---------------------------------------------------------------------------------------------------------------|
| dlDomain        | string    | *required   | The blockchain domain wanted to be used.                                                                       |
| constArray      | string    | *required   | An array with keys that will be used in the initialization to get the final specific string of your ArraySSI.  |
| vn (optional)   | string    |             | The version number of the SeedSSI you want to use. Default value: “v0”.                                        |
| hint (optional) | string    |             | Optional information for the keySSI resolver. Default value: undefine.                                         |

## Function arraySSI.derive()

**Description**: Derive your arraySSI and return a constSSI. The constSSI will conserve all parameters from the ArraySSI, except for a control substring that will be added. The specific substring of the ConstSSI will be the same as the one calculated during the initialization of the arraySSI using the array of inputs. It is then possible to create and load a DSU using the ConstSSI.

**Returns**

| **Name**                                                                             | **Description**                 |
|:-------------------------------------------------------------------------------------|:--------------------------------|
| [constSSI](https://www.opendsu.org/pages/advanced/ConstSSI%20(RFC-011).html) object  | A constSSI object is returned.  |

## Function arraySSI.getEncryptionKey()

**Description**: Get the encryption key associated with the ArraySSI.

**Returns**

| **Name** | **Description**     |
|:---------|:--------------------|
| String   | The encryption key. |

## Function arraySSI.getTypeName()

**Description**: 

**Returns**


| **Name**           | **Description**                            |
|:-------------------|:-------------------------------------------|
| SSITypes.ARRAY_SSI | A string representing the type of the SSI. |


## Function arraySSI.createAnchorValue(brickMapHash, previousAnchorValue, callback)

**Description**:

| **Name**             | **Type** | **Value** | **Description** |
|:---------------------|:---------|:----------|:----------------|
| brickMapHash         |          |           |                 |
| previousAnchorValue  |          |           |                 |
| callback             | function |           |                 |

**Callback parameters**

| **Name**    | **Type**     | **Response example** |
|:------------|:-------------|:---------------------|
| err         | Error object |                      |
| anchorValue |              |                      |


# 3. Common KeySSI functions from KeySSIMixin

## Function autoload(identifier)

**Description**:

| **Name**   | **Type** | **Value**  | **Description** |
|:-----------|:---------|:-----------|:----------------|
| identifier | string   | *required  |                 |


## Function validateKeySSICharLength()

**Description**: Throws an error if the length of the identifier exceeds the maximum char length.

## Function load(subtype, dlDomain, subtypeSpecificString, control, vn, hint)

**Description**: Initialize ArraySSI with your own parameters.

| **Name**               | **Type** | **Value**  | **Description**                                                          |
|:-----------------------|:---------|:-----------|:-------------------------------------------------------------------------|
| subtype                | string   |            |                                                                          |
| dldomain               | string   | *required  | The blockchain domain wanted to be used.                                 |
| subtypeSpecificString  | string   |            |                                                                          |
| control                | string   |            |                                                                          |
| vn (optional)          | string   |            | The version number of the SeedSSI you want to use. Default value: “v0”   |
| hint (optional)        | string   |            | Optional information for the keySSI resolver. Default value: undefined.  |


## Function getDerivedType(ssiType, callback)

Description: 

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

**Description**: 


| **Name** | **Type** | **Value** | **Description**  |
|:---------|:---------|:----------|:-----------------|
| ssiType  | string   |           |                  |      
| callback | function |           |                  | 

**Callback parameters**

| **Name**  | **Type**     | **Response example** |
|:----------|:-------------|:---------------------|
| err       | Error object |                      |

**Description**: 

## Function getRootKeySSITypeName()

**Description**: 

**Returns**

| **Name** | **Description** |
|:---------|:----------------|
| String   |                 |


## Function getAnchorId(plain)

**Description**: 

| **Name** | **Type** | **Value** | **Description**                                                                      |
|:---------|:---------|:----------|:-------------------------------------------------------------------------------------|
| plain    | bool     |           | True if you want the ID in plain text, false if you want the ID encoded in base 58.  |


**Returns**

| **Name**  | **Description**                                   |
|:----------|:--------------------------------------------------|
| anchor id | The identifier for the anchor, without any hints. |

## Function getSpecificString()

**Description**: 
**Returns**

| **Name** | **Description**                                    |
|:---------|:---------------------------------------------------|
| _subtype |                                                    |

## Function getDLDomain()

**Description**: 
**Returns**

| **Name**   | **Description**                                                          |
|:-----------|:-------------------------------------------------------------------------|
| _dlDomain  | If the domain is undefined or empty, the function will return undefined. |

## Function getControlString()

**Description**: 
**Returns**

| **Name**       | **Description**                                                           |
|:---------------|:--------------------------------------------------------------------------|
| _controlString |                                                                           |

## Function getHint()

**Description**: 
**Returns**


| **Name** | **Description**                                                           |
|:---------|:--------------------------------------------------------------------------|
| _hint    |                                                                           |

## Function getVn()

**Description**: 
**Returns**


| **Name** | **Description**                                                           |
|:---------|:--------------------------------------------------------------------------|
| _vn      |                                                                           |

## Function getDSURepresentationName()

**Description**: 
**Returns**


| **Name**                          | **Description**                                                           |
|:----------------------------------|:--------------------------------------------------------------------------|
| DSURepresentationNames [_subtype] |                                                                           |


## Function getNoHintIdentifier(plain)

**Description**: 

| **Name** | **Type** | **Value** | **Description**                                                                     |
|:---------|:---------|:----------|:------------------------------------------------------------------------------------|
| plain    | bool     |           | True if you want the ID in plain text, false if you want the ID encoded in base 58. |

**Returns**


| **Name**                           | **Description**                                                            |
|:-----------------------------------|:---------------------------------------------------------------------------|
| identifier                         | The identifier, either in plain text or encoded in base 58.                |


## Function getIdentifier(plain)

**Description**: 

| **Name** | **Type** | **Value** | **Description**                                                                     |
|:---------|:---------|:----------|:------------------------------------------------------------------------------------|
| plain    | bool     |           | True if you want the ID in plain text, false if you want the ID encoded in base 58. |

**Returns**


| **Name**                            | **Description**                                                                                                                                                    |
|:------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| identifier:hint                     | If there is a defined hint, the identifier will be followed by the ‘:’ symbol and the hint. The identifier (and hint), either in plain text or encoded in base 58. |


## Function getBricksDomain()

**Description**: 

**Returns**


| **Name**                             | **Description**                                                                                                                                                     |
|:-------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| _hintObject[BRICKS_DOMAIN_KEY]       | If _hintObject[BRICKS_DOMAIN_KEY] is undefined, the _dlDomain will be returned instead.                                                                             |

## Function clone()

**Description**: 

**Returns**


| **Name** | **Description**                                                             |
|:---------|:----------------------------------------------------------------------------|
| clone    |                                                                             |

## Function cast(newType)

**Description**: 

| **Name** | **Type** | **Value** | **Description**                                                                     |
|:---------|:---------|:----------|:------------------------------------------------------------------------------------|
| plain    | bool     |           | True if you want the ID in plain text, false if you want the ID encoded in base 58. |

## Function canSign()

**Description**: 

**Returns**


| **Name**  | **Description**                                                              |
|:----------|:-----------------------------------------------------------------------------|
| _canSign  |                                                                              |

## Function setCanSign(canSign)

**Description**: 


| **Name**  | **Type**  | **Value**  | **Description**                                                                      |
|:----------|:----------|:-----------|:-------------------------------------------------------------------------------------|
| canSign   | bool      |            |                                                                                      |


## Function canBeVerified()

**Description**: 

**Returns**


| **Name**  | **Description**                                                              |
|:----------|:-----------------------------------------------------------------------------|
| false     |                                                                              |


## Function sign(dataToSign, callback)

**Description**: 


| **Name**   | **Type**  | **Value**  | **Description**                                                                 |
|:-----------|:----------|:-----------|:--------------------------------------------------------------------------------|
| dataToSign |           |            |                                                                                 |
| callback   | function  |            |                                                                                 |

**Callback parameters**


| **Name**    | **Type**   | **Response example**  |
|:------------|:-----------|:----------------------|
| err         |            | Error object          |
| signature   |            |                       |

**Description**: Contains a message and the error. 

## Function verify(data, signature)

**Description**: 


| **Name**  | **Type**   | **Value**  | **Description**                                                                 |
|:----------|:-----------|:-----------|:--------------------------------------------------------------------------------|
| data      |            |            |                                                                                 |
| signature |            |            |                                                                                 |

**Returns**

| **Name**   | **Description**                                                              |
|:-----------|:-----------------------------------------------------------------------------|
|            |                                                                              |

## Function hash(data)

**Description**: 


| **Name**  | **Type**   | **Value**  | **Description**                                                                 |
|:----------|:-----------|:-----------|:--------------------------------------------------------------------------------|
| data      |            |            |                                                                                 |

**Returns**

| **Name**   | **Description**                                                              |
|:-----------|:-----------------------------------------------------------------------------|
|            |                                                                              |

## Function toJSON()

**Description**: 

**Returns**


| **Name**   | **Description**                                                              |
|:-----------|:-----------------------------------------------------------------------------|
| identifier |                                                                              |

## Function canAppend()

**Description**: 

**Returns**

| **Name**    | **Description**                                                              |
|:------------|:-----------------------------------------------------------------------------|
| true        |                                                                              |


## Function isTransfer()

**Description**: 

**Returns**

| **Name** | **Description**                                                              |
|:---------|:-----------------------------------------------------------------------------|
| false    |                                                                              |


## Function isAlias()

**Description**: 

**Returns**

| **Name** | **Description**                                                              |
|:---------|:-----------------------------------------------------------------------------|
| false    |                                                                              |


## Function isTemplate()

**Description**: Check if the target is a template or an actual instance.

**Returns**

| **Name**      | **Description**                                                |
|:--------------|:---------------------------------------------------------------|
| true or false | Bool value showing if the target is a template or an instance. |

## Function createAnchorValue(brickMapHash, previousAnchorValue, callback)

**Description**:


| **Name**            | **Type**    | **Value**   | **Description**                                                                  |
|:--------------------|:------------|:------------|:---------------------------------------------------------------------------------|
| brickMapHash        |             |             |                                                                                  |
| previousAnchorValue |             |             |                                                                                  |
| callback            | function    |             |                                                                                  |

**Callback parameters**


| **Name**    | **Type**      | **Response example**  |
|:------------|:--------------|:----------------------|
| err         | Error object  |                       |
| anchorValue |               |                       |

**Description**: Contains a message and the error. / The anchor value that was just created.

# 4. Cryptographic algorithms used by ArraySSIs (advanced)

In this paragraph, we present the algorithms that ArraySSIs use. These algorithms can differ according to the type of KeySSI used and its version number. Most of the functions use the [nodejs crypto](https://www.google.com/url?q=https://nodejs.org/docs/latest-v12.x/api/crypto.html%23crypto_crypto&sa=D&source=editors&ust=1706689753751749&usg=AOvVaw1oBuR4o3EAv5yT5kJpa3TH) library.

# Annex 1. Contributors

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