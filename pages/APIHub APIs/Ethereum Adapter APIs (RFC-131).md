---
title: Ethereum Adapter APIs 
layout: home
parent: OpenDSU APIHub APIs
nav_order: 12
---

# **Ethereum Adapter APIs (RFC-131)**

{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs).

**Document Maintainers: Andi Gabriel Tan 2022. List of other contributors in Annex. 1.**

**Copyright: MIT license**

**Copyright** ©  2018-2022 Axiologic Research and Contributors.

This document is licensed under <a href="https://en.wikipedia.org/wiki/MIT_License">MIT license.</a>

<!-- TOC -->
* [Ethereum Adapter APIs (RFC-131)](#ethereum-adapter-apis-rfc-131)
* [Abstract](#abstract)
* [1. Add Anchor](#1-add-anchor)
  * [1.1. Path Parameters](#11-path-parameters)
  * [1.2. Body Parameters](#12-body-parameters)
    * [1.2.1.Example: Application/JSON](#121example-applicationjson)
  * [1.3. Responses](#13-responses)
* [2. Get Anchor Versions](#2-get-anchor-versions)
  * [2.1. Path Parameters](#21-path-parameters)
  * [2.2. Responses](#22-responses)
    * [2.2.1. Example: Application/JSON](#221-example-applicationjson)
* [3. Health Check](#3-health-check)
  * [3.1. Responses](#31-responses)
* [4. Ethereum smart contract AnchorContract](#4-ethereum-smart-contract-anchorcontract)
  * [4.1. Ethereum](#41-ethereum)
  * [4.2.Data Types](#42data-types)
  * [4.3. Status Codes](#43-status-codes)
  * [4.4. Public Methods](#44-public-methods)
    * [4.4.1. addAnchor](#441-addanchor)
    * [4.4.2.  getAnchorVersions](#442-getanchorversions)
    * [4.4.3. Signature Validation Algorithm](#443-signature-validation-algorithm)
    * [4.4.4. Obtaining the Ethereum Account from a publicKey](#444-obtaining-the-ethereum-account-from-a-publickey)
    * [4.4.5. Obtaining the Ethereum Account from Signature and Hash](#445-obtaining-the-ethereum-account-from-signature-and-hash)
* [5. Technical details - Blockchain Adaptor](#5-technical-details---blockchain-adaptor)
  * [5.1. Web API configuration](#51-web-api-configuration)
  * [5.2. API Entry points](#52-api-entry-points)
    * [5.2.1.AddAnchor entry point](#521addanchor-entry-point)
    * [5.2.2. GetVersions entry point](#522-getversions-entry-point)
* [6. Deployment and conventions](#6-deployment-and-conventions)
  * [6.1. Deployment containers](#61-deployment-containers)
    * [6.1.1. Deployment execution steps](#611-deployment-execution-steps)
  * [6.2.Possible solutions for the Smart Contract Deployment](#62possible-solutions-for-the-smart-contract-deployment)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->


# Abstract

<p style='text-align: justify;'>The Ethereum Adapter API offers direct access to the execution of smart contracts from the blockchain network. It exposes all smart contract methods as endpoints. We use those in conjunction with the anchoring process or other future smart contracts as voting or governance-related ones.
</p>

# 1. Add Anchor

<p style='text-align: justify;'>Adds an anchor into the Ethereum blockchain network. It will require hash links and digital proof to validate the anchoring process at the blockchain level. If the contextual validation and the security validation succeed, then the anchoring process will occur. Otherwise, an error will be returned.
</p>

    PUT /addAnchor/{keySSI}

## 1.1. Path Parameters

| Name   | Type   | Value     | Description                                      |
|:-------|:-------|:----------|:-------------------------------------------------|
| keySSI | string | *required | Zero access key keySSI (SZaSSI) base 58 encoded. |

## 1.2. Body Parameters

| Name  | Description                                              |
|:------|:---------------------------------------------------------|
| body  | Contains block information and validation information.   |

### 1.2.1.Example: Application/JSON

````
{
   "hash": {
     "newHashLinkSSI": "string",
     "lastHashLinkSSI": "string"
   },
   "zkp": "string",
   "digitalProof": {
     "signature": "string",
     "publicKey": "string"
   }
}
````

## 1.3. Responses

| Status Code | Description                                                |
|:------------|:-----------------------------------------------------------|
| 200         | Successfully added anchor to the blockchain.               |
| 428         | Smart contract execution failed or error decoding keySSI.  |


# 2. Get Anchor Versions

<p style='text-align: justify;'>Return all the hash links associated with an anchorId at the blockchain level. All the returned hash links resulted from the addAnchor command's execution and had passed the context and security validation checks.
</p>

    GET /getAnchorVersions/{keySSI}

## 2.1. Path Parameters

| Name    | Type    | Value      | Description                                  |
|:--------|:--------|:-----------|:---------------------------------------------|
| keySSI  | string  | *required  | Zero Access keySSI (SZaSSI) base58 encoded.  |


## 2.2. Responses

| Status Code | Description                                                                                            |
|:------------|:-------------------------------------------------------------------------------------------------------|
| 200         | Successfully invoked the smart contract and returned the hash links for the provided keySSI (SZaSSI).  |
| 500         | Error invoking the smart contract in order to get the hash links.                                      |


### 2.2.1. Example: Application/JSON

````
["5Cr6Hy1ZDdDkTFyPXCYfEHg8tAHnSWjEpTLnAwxmaJpUxxYQx7n4tUH5hebadEEczRhGN3B 
45jDexUymfra7XgXKrHRkexV6geKd27GardQcZQSNFgdzDVdzMZxLSSvJ14qEsjkMDPKrHWvX 
BSidW1oziQQbB3vTNVc1ST7TbTdBefPiMv6p7Lwni9DsYAM1sjVDPdrhGDsTsKkcjp4Lecio4f81 
4FafTnMeb5KGkz19JzqWiAC1s8SBs",...]
````

# 3. Health Check
<p style='text-align: justify;'>The healthCheck command checks for the invocation of the Anchoring Smart Contract. It will determine and indicate if the smart contract is available, reachable, and configured correctly for invocation. It does not provide any other information regarding the different operations available in the smart contract.
</p>

    GET /check/

## 3.1. Responses

| Status Code | Description                                                         |
|:------------|:--------------------------------------------------------------------|
| 200         | Successfully invoked the health check method in the smart contract. |
| 500         | Failed to invoke the smart contract.                                |


# 4. Ethereum smart contract AnchorContract

<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vQtlRfNSzAmonskTQlL2oh6IAEthiIWjJfvt8M0eWaI_PEO7gN-vXIrq8ELNdmx3TK-l7aZDxZpQb25/pub?w=960&h=720" class="imgMain" style="max-width: 69%; margin-left: 0px; margin-bottom: -150px;"/>
    <p><b>Figure 1: High-level overview</b></p>
</div>

<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vS5SVhpteemcVoMxzKILAaBdjFcSXgAEu-UxB-VGBuyBWD6W91v-uOtsLQ3w_Nwwc3dAC1sOvoC_Fy7/pub?w=960&h=720" class="imgMain" style="max-width: 69%; margin-left: 0px; margin-bottom: -180px;"/>
    <p><b>Figure 2: Ethereum Adapter in place of Blockchain Adapter</b></p>
</div> 


## 4.1. Ethereum

| Smart Contract Function | Parameters                                                                                                                                                                                      | Details                                                                                                                                                                                                                                                                    |
|:------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| addAnchor               | string anchorID<br/>string keySSIType<br/>string controlString<br/>string vn<br/>string newHashLinkSSI<br/>string ZKPValue<br/>string lastHashLinkSSI<br/>string signature<br/>string publicKey | Creates a new anchor with an entry for the specified anchorID does not exist or appends the new newHashLinkSSI to an existing anchor if the validation passes. <br> <b>Returns</b>: None <br> Throws error on verification failures.                                       |
| getAnchorVersions       | String anchorID                                                                                                                                                                                 | Returns an array of HashLInkSSIs.                                                                                                                                                                                                                                          |
| getChainedVersions      | String anchorID                                                                                                                                                                                 | Returns an array of tuples                                                                                                                                                                                                                                                 |


Reference: <a href="">https://github.com/PharmaLedger-IMI/ethereum-anchoring.</a>

## 4.2.Data Types

<p style='text-align: justify;'>Data types were chosen in order to group relevant information together and to provide improved performance when trying to obtain certain stored information.
</p>

| Name                                                                                  | Description                                                                                                                  |
|:--------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------|
| struct AnchorHash { <br/> string newHashLinkSSI; <br/> string lastHashLinkSSI; <br/>} | Stores the hash links received when the addAnchor function is invoked.                                                       |
| struct AnchorValue { <br/>  AnchorHash hash; <br/>  string ZKPValue; <br/> }          | Stores the anchor information which is composed of received zkpValue and the hash links.                                     |
| AnchorValue[] <br/> anchorStorage;                                                    | Stores all the anchors received.                                                                                             |
| mapping (string => uint[]) <br/> anchorVersions;                                      | Mapping between anchorID and indexes of anchor values. The anchor value can be retrieved from anchorStorage using the index. |
| mapping (string => bytes32) <br/>  anchorControlStrings;                              | Mapping between anchorID and the controlString.                                                                              |


## 4.3. Status Codes

<p style='text-align: justify;'>Because of the complex logic of the smart contract regarding the validation process, we need a series of status codes in order to know what part of the validation failed and why. Based on the status codes we can further customize the errors returned to the upper layers.
</p>

| Status code                                   | Type    | Value | Description                                                                                    |
|:----------------------------------------------|:--------|:------|:-----------------------------------------------------------------------------------------------|
| statusOK                                      | Success | 200   | addAnchor was called without errors and information is stored on the blockchain.               |
| statusAddedConstSSIOK                         | Success | 201   | add Anchor was called for ConstSSI without errors and information is stored on the blockchain. |
| statusHashLinkOutOfSync                       | Error   | 100   | Validation process for the continuity of the hash link failed.                                 |
| statusCannotUpdateReadOnlyAnchor              | Error   | 101   | Validation process for addAnchor when called with an update for an already stored ConstSSI.    |
| statusHashOfPublicKeyDoesntMatchControlString | Error   | 102   | Validation of the controlString and publicKey failed.                                          |
| statusSignatureCheckFailed                    | Error   | 103   | Validation of the signature failed.                                                            |


## 4.4. Public Methods

### 4.4.1. addAnchor

| Name            | Type          |
|:----------------|:--------------|
| anchorID        | string memory |
| keySSIType      | string memory |
| controlString   | bytes32       |
| vn              | string memory |
| newHashLinkSSI  | string memory |
| ZKPValue        | string memory |
| lastHashLinkSSI | string memory |
| signature       | string memory |
| publicKey       | bytes memory  |


<p style='text-align: justify;'>The function will contain the validation logic and, if the validation succeeds, the anchor will be stored on the blockchain and the OK status is emitted. If the validation fails, it will emit a corresponding fail validation code. Functions used in the implementation:
</p>

| Name                                    | Description                                 |
|:----------------------------------------|:--------------------------------------------|
| createReadOnlyNewAnchorValueOnAddAnchor | Create a new anchor in read-only mode.      |
| createNewAnchorValueOnAddAnchor         | Create a new anchor that supports updates.  |


### 4.4.2.  getAnchorVersions

<p style='text-align: justify;'>The function will return the stored AnchorValues for a specific anchor. In case there are no values stored for this specific anchor, an empty array will be returned. The function doesn’t make any changes to the blockchain, only reads the stored information.
</p>

| Name    | Type                      | I/O  |
|:--------|:--------------------------|:-----|
| anchor  | string memory             | In   |
|         | AnchorValue[]             | Out  |


Functions used in the implementation:

| Function Name     | Description                                            |
|:------------------|:-------------------------------------------------------|
| getAnchorVersions | Return the versions associated with a specific anchor. |
| copyAnchorValue   | Wrapper function.                                      |
| buildAnchorValue  | Builds a copy for a specific AnchorHash.               |


Validation process implemented in the addAnchor function: 

Before an anchor is added to the blockchain, the following validation flow is executed :

1. Check if the anchor is not already marked as read-only. In case it is read-only, raise the status statusCannotUpdateReadOnlyAnchor and stop the smart contract execution.

1. Validate that hash links provided for the anchor are not out of sync:

* If the anchor is new, we accept the hash links provided without validation and return -1 in order to signal that we have a new anchor.

* If the anchor is not new, we get the latest stored hashLink for the anchor and compare it with the received lastHashLinkSSI. Because string comparison is problematic, an alternative approach was made to compare the hashes of the links in order to determine if they are equal or not. If the hash links are the same, compare the received newHashLinkSSI and lastHashLinkSSI in order to avoid replay calls/attacks; if they are the same then return 0 to signal out-of-sync error, else return 1 to signal that validation succeeded.

* The default return of the function is return 0, which will signal the out-of-sync error.

* If the above validation fails, raise the status statusHashLinkOutOfSync and stop the smart contract execution.

* Current status is that hash links are valid.

* If the anchor is new, check if the controlString is empty; in case it is, add the new anchor in read-only mode, raise status statusAddedConstSSIOK and stop the smart contract execution; else, store the controlString and continue with smart contract execution.

* Current status is that hash links are valid and controlString is partially validated.

* Validate that the hash of the publicKey is equal to the controlString. If the result is that they are not equal, raise statusHashOfPublicKeyDoesntMatchControlString and stop the smart contract execution.

* Current status is that hash links are valid, controlString is valid.

* Validate the signature and if it fails raise statusSignatureCheckFailed and stop the smart contract execution (it will be detailed in a separate chapter).

* Current status is that hash links are valid, controlString is valid and signature is valid.

* Validation process is completed and storing the information on the blockchain can begin.

### 4.4.3. Signature Validation Algorithm

<p style='text-align: justify;'>Because of the specifics of the Solidity implementation in signature validation, validating a signature produced in another environment other than Ethereum/Solidity can raise some challenges. The signature validation is made using the validateSignature function, which has the following signature:
</p>

| Name            | Type          | I/O |
|:----------------|:--------------|:----|
| anchor          | string memory | In  |
| newHashLinkSSI  | string memory | In  |
| ZKPValue        | string memory | In  |
| lastHashLinkSSI | string memory | In  |
| signature       | bytes memory  | In  |
| publicKey       | bytes memory  | In  |
|                 | bool          | Out |


<p style='text-align: justify;'>The function will compare the result of the calculateAddress function with the result of the getAddressFromHashAndSig function; if they match it will return true, otherwise false.<br>
</p>

<p style='text-align: justify;'>In order to validate a signature in Solidity, we have to obtain the account by recovering it, using the signature and the hash that was signed. The obtained account is a derivation of the publicKey that was obtained from the privateKey that was used to sign the hash. Because of this, it was required to implement the derivation of the received publicKey in order to get the account. Once both accounts are obtained, it is possible to compare them and validate if the signature provided was made with the privateKey corresponding to the publicKey we received.
</p>

### 4.4.4. Obtaining the Ethereum Account from a publicKey

<p style='text-align: justify;'>In order to obtain the related Ethereum account to a publicKey, it is required that the public key received is in an uncompressed format, 65 bytes long.
</p>

Algorithm to obtain the Ethereum account:
1. The public key has the structure 0x04<64 bytes>.
1. Read the 64 bytes and discard 0x04.
1. Hash the 64 bytes using sha256.
1. Get the last 20 bytes from the obtained hash.
1. Return the value as an address. 

Functions used in implementation: 

| Function Name    | Description                                                                      |
|:-----------------|:---------------------------------------------------------------------------------|
| calculateAddress | Will calculate the corresponding Ethereum account to a provided public key.      |
| get64            | Utility function to extract only the bytes required from the provided public key.|


### 4.4.5. Obtaining the Ethereum Account from Signature and Hash

<p style='text-align: justify;'>Solidity offers the possibility to obtain the Ethereum account that was used to sign a message if the message and the signature are provided.
</p>

Function Signature:

<p style='text-align: justify;'><b>“ecrecover(bytes32 hash, uint8 v, bytes32 r, bytes32 s) returns (address):</b> recover the address associated with the public key from elliptic curve signature or return zero on error ”, documented at - <a href="">https://docs.soliditylang.org/en/v0.4.24/units-and-global-variables.html.</a>
</p>
However, the signature received must be received in ASN.1 format

````
{
	r: bytes32,
	s: bytes32,
	v: uint8
}
````

<p style='text-align: justify;'>

More information about ASN.1 can be found at <a href="">https://www.secg.org/sec1-v2.pdf</a>, page 114. Usually, the v is not returned by the signing libraries, but it is required by Solidity in order to optimize the result.

</p>

In the smart contract, the <b>recover</b> function was implemented with this signature:

| Name       | Type          |
|:-----------|:--------------|
| hash       | bytes32       |
| signature  | bytes memory  |


The function will process the input parameters as:
1. Check if the signature is 65 bytes long. If not, it will return a 0 address which will inadvertently generate a signature validation failure.
1. Read r,s and v from the signature [r: bytes32][s: bytes32][v: uint8].
1. v represents the version of the signature and can be 0,1,27 or 28. If it is 0 or 1 it will be converted to 27 or 28 because these are the values required by the ecrecover Solidity function.
1. If v cannot be determined to be 27 or 28, return 0 address which will inadvertently generate a signature validation failure.
1. return the result provided by the ecRecover function.

Functions used in the implementation: 

| Name                     | Description                                                               |
|:-------------------------|:--------------------------------------------------------------------------|
| getAddressFromHashAndSig | Returns the Ethereum address (account) that was used in signing the hash. |
| recover                  | Returns the Ethereum address (account) that was used in signing the hash. |
| getHashToBeChecked       | Return the hash that was used in the singing operation.                   |


**Source code, Compilation and deployment**

<p style='text-align: justify;'>

The source code can be found at <a href="">https://github.com/PharmaLedger-IMI/ethereum-anchoring</a> in the SmartContract folder.
</p>

<p style='text-align: justify;'>To compile and deploy the smart contract on a local environment, update the values in the .env file and run npm run truffle-migrate. It will use the internal network.
</p>

**Kubernetes deployment**
<p style='text-align: justify;'>To archive compilation, deployment and integration with the API Adaptor, the following steps are required:
</p>

* Build the docker image using the dockerfile found in the root folder and publish it
* Update the configuration of the anchor_smart.yaml file:
  * The image location
  * The ACCOUNT that will be used to deploy the smart contract. The account must valid for the blockchain network
  * The RPC_HOST which will contain the IP of the node (can be obtained by running kubectl get services )
  * The PORT under which the Web API will listen, default 5000 
  
Upon deploying the container, it will execute the following operations:
* Execute truffle migrate in order to compile and deploy the smart contract on the blockchain
* Execute node index.js which will start the Web API server which will expose:
  * GET /contractAddress - return the contract address of the deployed AnchorContract.sol
  * GET /abi - return the interface definition required to invoke functions implemented in the smart contract
  * Calls can be made on port 5000 by default

# 5. Technical details - Blockchain Adaptor
<p style='text-align: justify;'>API Adaptor is a WEB API that exposes functionality to add anchors and retrieve anchor versions from the Ethereum/Quorum blockchain private network.
</p>

## 5.1. Web API configuration

Configuration can be made using environment variables as follows:

| Name                               | Default  | Description                                                                                                                           |
|:-----------------------------------|:---------|:--------------------------------------------------------------------------------------------------------------------------------------|
| PORT                               | 3000     | Port on which the web server will listen.                                                                                             |
| SMARTCONTRACT_ENDPOINT             | none     | The Web API endpoint from where the information about smart contract address and smart contract interface definition can be obtained. |
| ANCHOR_SMARTCONTRACT_CONFIG_FOLDER | ./config | It is ignored if related environment variables are defined.                                                                           |
| ACCOUNT                            | none     | The Ethereum blockchain account under which the calls to the smart contract are made.                                                 |
| RPC_ADDRESS                        | none     | The RPC endpoint of the Ethereum node.                                                                                                |


## 5.2. API Entry points

| Operation | Entry point                | Description                                                                                                                                                                 |
|:----------|:---------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GET       | /getAnchorVersions/:keySSI | Returns the versions of the keySSI stored on the blockchain. In case no versions are found, returns and empty array json. The result is stored in the body of the response. |
| PUT       | /addAnchor/:keySSI         | Add a new anchor on the blockchain. The decision if the anchor is new, read only or needs update is decided at smart contract level.                                        |


### 5.2.1.AddAnchor entry point

The information about the anchor to be stored is required as follows:

* Parameter: keySSI encoded base58 from which is extracted
  * Index 1: keySSIType 
  * Index 4: controlString
  * Index 5: vn 
* Body - JSON with the following format:

````
{
 hash: {
   newHashLinkSSI: 'new hash link value,
   lastHashLinkSSI: ‘last hash link value or null’
},
 digitalProof: {
   signature: 'signature encoded base58 in DER format',
   publicKey: 'public key in raw format encoded base58'
},
 zkp: 'zkp value’
}
````

<p style='text-align: justify;'>After the information is extracted, because the received signature is assumed to be in DER format and the required signature for the smart contract is in ASN.1 format, a conversion algorithm was implemented to determine the missing value of v.
</p>
The algorithm has the following steps:

* Decode the signature from base58. 
* Convert the obtained DER signature to ASN1 format using the same processing of r and s from BN as Ethereum. 
* Create the hash that was signed using sha256. 
* Concat the obtained signature with the 2 possible values of v: 1c or 1b. 
* Use the ‘ethers’ and ‘ethereum-public-key-to-address’ in order to validate the signatures. 
* Use the valid obtained v and concat with the converted signature in order to be sent to the smart contract. 
* In case no v could be determined, raise an exception. 

Status codes returned:

| Status code | Description                                                                                                                |
|:------------|:---------------------------------------------------------------------------------------------------------------------------|
| 200         | No errors encountered.                                                                                                     |
| 428         | Default status code for any error. Specific validation errors on smart contract execution or general failures are logged.  |


### 5.2.2. GetVersions entry point

The information about the versions to be obtained is required as follows: 

* Parameter: keySSI encoded base58 

<p style='text-align: justify;'>Upon invocation of the smart contract the result is stored on the body of the response. The result is a JSON representation of the array where the elements are the anchor versions ( hash links ).	Status codes returned:
</p>

| Status code    | Description                                                   |
|:---------------|:--------------------------------------------------------------|
| 200            | No errors encountered. The body contains the anchor versions. |
| 500            | Error occurred. The body contains the error.                  |


<p style='text-align: justify;'>

The source code can be found at <a href="">https://github.com/PharmaLedger-IMI/ethereum-anchoring</a>, in the ApiAdaptor folder. In order to use it in a local environment, update the values in the .env file and run npm run start-dev.
</p>

**Kubernetes deployment** 

In order to archive integration with the Smart Contract deployment, the following steps are required:
* Build the docker image using the dockerFile found in the root folder and publish it 
* Update the configuration of the ./K8/ApiAdapter.yaml file:
  * The image location.
  * The ACCOUNT that will be used to interact with the smart contract. The account must be valid for the blockchain network.
  * The RPC_ADDRESS which will contain the IP of the node (can be obtained by running kubectl get services ).
  * The SMARTCONTRACT_ENDPOINT  which is the Smart Contract WEB API endpoint.
  
Upon deploying the container, it will execute the following operations:

  * Execute node index.js which:
    * Read the smart contract information from SMARTCONTRACT_ENDPOINT 
    * Start the Web API server.
    
# 6. Deployment and conventions

## 6.1. Deployment containers

| Component                 | Type       | Details                                                                      |
|:--------------------------|:-----------|:-----------------------------------------------------------------------------|
| API Adaptor               | Container  | Expose functionality to interact with the anchoring smart contract over API. |
| Anchoring Smart Contract  | Container  | Deployment of the Anchoring Smart Contract over the network.                 |


### 6.1.1. Deployment execution steps

| Component                                        | Type       | Details                                                                                                                                                                                                                                                                 |
|:-------------------------------------------------|:-----------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requirement: blockchain network deployed         |            |                                                                                                                                                                                                                                                                         |
| Anchoring Smart Contract                         | Container  | After deployment it should provide the details for the API Adaptor in order to interact with anchoring smart contracts. <br> <b>Convention</b> : <br> Provide information into the config.json file located in ANCHOR_SMARTCONTRACT_CONFIG_FOLDER mounted volume.       |
| API Adaptor                                      | Container  | <b>Convention</b> : <br> It will require a config.json file in ANCHOR_SMARTCONTRACT_CONFIG_FOLDER                                                                                                                                                                       |


## 6.2.Possible solutions for the Smart Contract Deployment

| Solution type                                                                                                                  |
|:-------------------------------------------------------------------------------------------------------------------------------|
| Required output: populate config.json file <br> Required input: access point and credentials to access the blockchain network. |
| Truffle                                                                                                                        |
| Deployment implemented in Node.js using solc and ganache.                                                                      |

**Contributors**

1. <p style='text-align: justify;'><a href="www.axiologic.net">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="www.opendsu.com">www.opendsu.com</a> site.

2. <p style='text-align: justify;'><a href="www.pharmaledger.eu">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.

3. <a href="www.privatesky.xyz">PrivateSky Research Project</a>: MIT licensed content accordingly with the contracts. https://profs.info.uaic.ro/~ads/PrivateSky/

# Annex 1. Contributors


| **Current Editors**                 | **Email**                                |
|:------------------------------------|:-----------------------------------------|
| Sînică Alboaie                      | sinica.alboaie@axiologic.net             |
| Rafael Mastaleru                    | rafael@rms.ro                            |
| Nicoleta Mihalache                  | nicoleta@axiologic.net                   |
| Teodor Lupu                         | teodor@axiologic.net                     |
| **Contributors Axiologic Research** | **Email**                                |
| Adrian Ganga                        | adrian@axiologic.net                     |
| Andi-Gabriel Țan                    | andi@axiologic.net                       |
| Cosmin Ursache                      | cosmin@axiologic.net                     |
| Daniel Sava                         | daniel@axiologic.net                     |
| Nicoleta Mihalache                  | nicoleta@axiologic.net                   |
| Teodor Lupu                         | teodor@axiologic.net                     |
| **PharmaLedger**                    | **Email**                                |
| Ana Balan                           | bam@rms.ro (RMS)                         |
| Bogdan Mastahac                     | mab@rms.ro (RMS)                         |
| Cosmin Ursache                      | cos@rms.ro (RMS)                         |
| Rafael Mastaleru                    | raf@rms.ro (RMS)                         |


