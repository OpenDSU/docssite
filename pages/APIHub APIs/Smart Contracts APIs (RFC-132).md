---
title: Smart Contracts APIs 
layout: home
parent: APIHub APIs
nav_order: 13
---

Smart Contracts APIs (RFC-132)


Abstract
1. BDNS Entries

Get the BDNS entry using contract calls for the specified domain.

	

/contracts/{domain}/bdns-entries/{entry}/
1.1. Path Parameters

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

The domain where the command should be executed.

entry
	

string
	

*required
	

The BDNS entry for the specified domain.

Example: brickStorages.
1.2. Responses

Status Code
	

Description

200
	

Retrieves the specified BDNS entry.

Example: Application/JSON

[  “$ORIGIN”  ]

404
	

Invalid entry specified.

500
	

Contracts not booted.
2. Latest Block Info

Send the lastestBlockInfo command to the worker.

	

/contracts/{domain}/latest-block-info/
2.1. Path Parameters

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

The domain where the command should be executed.
2.2. Responses

Status Code
	

Description

200
	

Command executed successfully.

400
	

Worker allocation failure, invalid domain or body.

500
	

Error executing the command.
3. Safe Command

Send the safe command to the worker.

	

/contracts/{domain}/safe-command/
3.1. Path Parameters

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

The domain where the command should be executed.
3.2. Body Parameters

Name
	

Type
	

Value
	

Description

body
	

	

	

Contract Command
3.2.1. Example: Application/JSON

{

  domain:"csc",

  contractName: "anchoring",

  methodName: "anchoring",

  params: [...methodParams]

}
3.3. Responses

Status Code
	

Description

200
	

Command executed successfully.

400
	

Worker allocation failure, invalid domain or body.

500
	

Error executing the command.
4. Nonced Command

Send the nonced command to the worker.

	

/contracts/{domain}/nonced-command/
4.1. Path Parameters

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

The domain where the command should be executed.
4.2. Body Parameters

Name
	

Type
	

Value
	

Description

body
	

	

	

Contract Command
4.2.1. Example: Application/JSON

{

  domain:"csc",

  contractName: "anchoring",

  methodName: "anchoring",

  params: [...methodParams]

}
4.3. Responses

Status Code
	

Description

200
	

Command executed successfully.

400
	

Worker allocation failure, invalid domain or body.

500
	

Error executing the command.
5. PBlock Added

Send PBlock to validate the worker.

	

/contracts/{domain}/pblock-added/
5.1. Path Parameters

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

The domain where the command should be executed.
5.2. Body Parameters

Name
	

Type
	

Value
	

Description

body
	

	

	

Contract Command
5.2.1. Example: Application/JSON

{

  domain:"csc",

  contractName: "anchoring",

  methodName: "anchoring",

  params: [...methodParams]

}
5.3. Responses

Status Code
	

Description

200
	

Command executed successfully.

400
	

Worker allocation failure, invalid domain or body.

500
	

Error executing the command.
6. Validator Not Inclusion

Set domain validator as non-inclusion to consensus phase.

	

/contracts/{domain}/validator-non-inclusion/
6.1. Path Parameters

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

The domain where the command should be executed.
6.2. Body Parameters

Name
	

Type
	

Value
	

Description

body
	

	

	

Contract Command
6.2.1. Example: Application/JSON

{

  domain: "csc",

  contractName: "anchoring",

  methodName: "anchoring",

  params: [...methodParams]

}
6.3. Responses

Status Code
	

Description

200
	

Command executed successfully.

400
	

Worker allocation failure, invalid domain or body.

500
	

Error executing the command.

