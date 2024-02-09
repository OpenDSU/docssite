---
title: Ethereum Adapter
layout: home
parent: OpenDSU Drafts
nav_order: 2
---

# Ethereum Adapter
{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs).


**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.
This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)


# 1. Ethereum Adapter

<p style='text-align: justify;'>The purpose of the Ethereum Adapter is to offer an HTTP interface to be used by the ApiHub anchoring component when configured to do the anchoring into a Quorum/Ethereum private network-based Blockchain. Ethereum Adapter uses a custom-designed smart contract in order to store anchor information and an organization account used to sign any written transaction. Configuration of the Ethereum Adapter can be made using environment variables as follows:
</p>


| **Variable Name**                   | **Value**       | **Description**                                                                                                                                   |
|:------------------------------------|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|
| PORT                                | 3000            | Port on which the web server will listen.                                                                                                         |
| SMARTCONTRACT_ENDPOINT              | none            | The Web API endpoint from where the information about smart contract address and smart contract interface definition can be obtained.             |
| ANCHOR_SMARTCONTRACT_CONFIG_FOLDER  | ./config        | It is ignored if related environment variables are defined.                                                                                       |
| ACCOUNT                             | none            | The Ethereum blockchain account under which the calls to the smart contract are made.                                                             |
| RPC_ADDRESS                         | none            | he RPC endpoint of the Ethereum node.                                                                                                             |


<p style='text-align: justify;'>The source code of the Ethereum Adapter can be found at: <a href="https://github.com/PharmaLedger-IMI/ethereum-anchoring ">https://github.com/PharmaLedger-IMI/ethereum-anchoring</a> in the SmartContract folder.
</p>

**Status codes**

<p style='text-align: justify;'>Because of the complex logic of the smart contract regarding the validation process, we need a series of status codes in order to know what part of the validation failed and why. Based on the status codes, we can further customize the errors returned to the upper layers.
</p>


| **Status code**                               | **Type** | **Value** |**Description**   |
|:----------------------------------------------|:---------|:----------|---|
| statusOK                                      | Success  | 200       |   |
| statusAddedConstSSIOK                         | Success  | 201       |   |
| statusHashLinkOutOfSync                       | Error    | 100       |   |
| statusCannotUpdateReadOnlyAnchor              |   Error       | 101       |   |
| statusHashOfPublicKeyDoesntMatchControlString |  Error        | 102       |   |
| statusSignatureCheckFailed                    |  Error        | 103       |   |
| statusTimestampOrSignatureCheckFailed         |   Error       | 104       |   |
| statusCannotCreateExistingAnchor              |   Error       | 105       |   |
| statusCannotAppendToNonExistentAnchor         |   Error       |   106        |   |
| statusCannotAppendConstAnchor                 |   Error       |  107         |   |
