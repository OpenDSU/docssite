---
title: Cloud Wallet 
layout: home
parent: APIHub APIs
nav_order: 5
---

Cloud Wallet (RFC-124)

Abstract

This RFC provides information about operations using DSU workers by simulating Service Workers.
1.Get index HTML resource

Serving the index.html content of the application.

	

/{appName}/loader/cloud-wallet/{keySSI}/
1.1. Path Parameters

Name
	

Type
	

Value
	

Description

appName
	

string
	

*required
	

appName

keySSI
	

string
	

required
	

keySSI in base58 encoding.
1.2. Responses

Status Code
	

Description

200
	

Operation handled with success. Returns the content of the file.

400
	

Worker resolver error.

500
	

Invalid KeySSI.
2.Get wallet file content

Serves the requested content, identified by the appended path, using DSU workers.

	

/cloud-wallet/{keySSI}/{filePath}
2.1. Path Parameters

Name
	

Type
	

Value
	

Description

keySSI
	

string
	

required
	

keySSI in base58 encoding.

filePath
	

string
	

required
	

File resource.
2.2. Responses

Status Code
	

Description

200
	

Operation handled with success. Returns the content of the file.

400
	

Worker resolver error.

500
	

Invalid KeySSI.
3.Edge Wallet

Web Browsers can use Service Workers and other sandboxing mechanisms (iframes, workers) to execute the code and to display the interface that is coded inside DSUs. The use of Service Workers (SW) aims to replace the need for servers. By using service workers, it is possible to store data in DSUs and to retrieve data from DSUs, including the HTML and JavaScript files used by the user interfaces as described in OpenDSU Concepts: SSApp Architecture (RFC-028). The following two sets of APIs describe operations on wallets using service workers.
3.1. File retrieval in iframe wallets-version 1

Serves the requested content, identified by the appended path, using DSU workers. It is used only for keeping backward compatibility with old wallets that are still using SWs.

	

/iframe/{keySSI}/{filePath}
3.1.1. Path Parameters

Name
	

Type
	

Value
	

Description

keySSI
	

string
	

required
	

KeySSI of the wallet in base58 encoding.

filePath
	

string
	

required
	

Wallet file path.
3.1.2. Responses

Status Code
	

Description

200
	

Operation handled with success. Returns the content of the file.

400
	

Worker resolver error.

500
	

Invalid KeySSI.
3.2. File retrieval in iframe wallets-version 2

Version 2 of File retrieval in iframe wallets is required in order to keep some backward compatibility with the initial architecture of SSApps, which uses SWs. Notice the walletName and loader prefix paths segments that may be required in some cases of nested loading of SSApps.

	

/{walletName}/loader/iframe/{keySSI}/{filePath}
3.2.1. Path Parameters

Name
	

Type
	

Value
	

Description

walletName
	

string
	

required
	

Wallet application name identified as the folder that holds the troast-loader in ApiHub.

keySSI
	

string
	

required
	

KeySSI of the wallet in base58 encoding.

filePath
	

string
	

required
	

Wallet file path.
3.2.2. Responses

Status Code
	

Description

200
	

Operation handled with success. Returns the content of the file.

400
	

Worker resolver error.

500
	

Invalid KeySSI.

