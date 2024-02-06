---
title: SaaS Admin 
layout: home
parent: OpenDSU APIHub APIs
nav_order: 14
---

SaaS Admin (RFC-133)

Abstract

This RFC enables us to get and update domain configurations.
1. Domain Configuration

Get the configuration for the specified domain.

	

/config/{domain}
1.1. Path Parameters

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

Domain for which configuration is needed.
1.2. Responses

Status Code
	

Description

200
	

Returns the configuration for the specified domain. (see 1.2.1 example Application/JSON)

404
	

Domain not found.
1.2.1. Example: Application/JSON

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
2.  Update Domain Configuration

Update the configuration for the specified domain.

	

/config/{domain}
2.1. Path Parameters

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

Domain for which configuration is needed.
2.2. Body Parameters

Name
	

Description

body
	

New configuration for the specified domain.
2.2.1. Example: Application/JSON

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
2.3. Responses

Status Code
	

Description

200
	

Operation completed successfully.

400
	

Invalid domain configuration was specified.

500
	

An error occurred during the domain configuration update.
3.  Domain KeySSI Contracts Constitution

Get the domain keySSI for the contracts DSU specified inside the contracts constitution or null.

	

/config/{domain}/keyssi
3.1. Path Parameters

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

Domain for which keySSI is needed.
3.2. Responses

Status Code
	

Description

200
	

Returns the domain keySSI for the contracts DSU or null if no contracts DSU was configured.

404
	

Domain not found.
4.  Admin Component

The Admin Component is useful in order to set up multiple domains across different organizations that will use the same installation of APIHub.
4.1. Add Company Domain in Admin Enclave

Insert the company domain based on the existing mainDomain. Company domains are stored in adminEnclaves.

	

/admin/{mainDomain}/addDomain
4.1.1. Path Parameters

Name
	

Type
	

Value
	

Description

mainDomain
	

string
	

*required
	

Domain for which configuration is needed.
4.1.2. Body Parameters

Name
	

Description

body
	

Schema type: Application/JSON

Schema type: Application/JSON

{

 domainName: string

 example: csc.nvs

 timestamp: number

 example: 1668020801397

 signature: string

 example: NOT_IMPLEMENTED

 cloneFromDomain: string

 example: csc
4.1.3. Responses

Status Code
	

Description

200
	

Operation completed successfully.

403
	

RequestBody does not contain the cloneFromDomain property.

500
	

An error occurred.
4.2.Disable Company Domain in Admin Enclave

Disable the company domain. Disabled company domains will hold an "active: false" flag in adminEnclave.

	

/admin/{mainDomain}/disableDomain
4.2.1. Path Parameters

Name
	

Type
	

Value
	

Description

mainDomain
	

string
	

*required
	

Domain for which configuration is needed.
4.2.2 Body Parameters

Name
	

Description

body
	

Schema type: Application/JSON

Schema type: Application/JSON

{

 domainName:string

 example: csc.nvs

 timestamp:number

 example: 1668020801397

 signature:string

 example: NOT_IMPLEMENTED

}
4.2.3. Responses

Status Code
	

Description

200
	

Operation completed successfully.

500
	

An error occurred.
4.3. Add Admin

Add the DID of the admin in the admins table of the adminEnclave.

	

/admin/{mainDomain}/addAdmin
4.3.1. Path Parameters

Name
	

Type
	

Value
	

Description

mainDomain
	

string
	

*required
	

Domain for which configuration is needed.
4.3.2.  Body Parameters

Name
	

Description

body
	

Schema type: Application/JSON

Schema type: Application/JSON

{

 did: string

 example: did:ssi:name:vault.nvs:Demiurge/csc.admin

 timestamp: number

 example: 1668020801397

 signature: string

 example: NOT_IMPLEMENTED

}
4.3.3. Responses

Status Code
	

Description

200
	

Operation completed successfully.

500
	

An error occurred.
4.4. Add  Domain Admin

Add the DID of the admin in the admins table of the adminEnclave.

	

/admin{mainDomain}/addDomainAdmin
4.4.1. Path Parameters

Name
	

Type
	

Value
	

Description

mainDomain
	

string
	

*required
	

Domain for which configuration is needed.
4.4.2.  Body Parameters

Name
	

Description

body
	

Schema type: Application/JSON

Schema type: Application/JSON

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
4.4.3. Responses

Status Code
	

Description

200
	

Operation completed successfully.

500
	

An error occurred.
4.5. Store Variable

Store company variables needed for booting new wallets. These are stored in the variables table of the adminEnclave.

	

/admin/{mainDomain}/storeVariable
4.5.1. Path Parameters

Name
	

Type
	

Value
	

Description

mainDomain
	

string
	

*required
	

Domain for which configuration is needed.
4.5.2.  Body Parameters

Name
	

Description

body
	

Schema type: Application/JSON

Schema type: Application/JSON

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
4.5.3. Responses

Status Code
	

Description

200
	

Operation completed successfully.

500
	

An error occurred.
4.6. Register Template

Register templates and hook default APIHub default deployment files with file templates that will be filled with variables stored in the previous API. Templates are stored in table templates of the adminEnclave.

	

/admin/{mainDomain}/registerTemplate
4.6.1. Path Parameters

Name
	

Type
	

Value
	

Description

mainDomain
	

string
	

*required
	

Domain for which configuration is needed.
4.6.2.  Body Parameters

Name
	

Description

body
	

Schema type: Application/JSON

Schema type: Application/JSON

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
4.6.3. Responses

Status Code
	

Description

200
	

Operation completed successfully.

500
	

An error occurred.

