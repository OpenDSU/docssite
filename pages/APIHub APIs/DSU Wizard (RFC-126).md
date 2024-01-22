---
title: DSU Wizard 
layout: home
parent: APIHub APIs
nav_order: 7
---

DSU Wizard (RFC-126)

Abstract

The DSU Wizard offers a series of operations that can allow execution context or atomic commands to be wrapped into a transaction that can be executed at a chosen time. The transaction can be built over time as well as its execution.
1. DSU Wizard Domain Begin Transaction

Instantiate a transaction handled by the transaction manager. We use the returned transactionId to access the transaction to add commands, customize the execution context and execute it. The transactionId represents the session identifier.

	

/dsu-wizard/{domain}/begin
1.1. Path Parameters

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

The domain on which the transaction is instantiated.
1.2. Responses

Status Code
	

Description

200
	

Return the transactionId of the instantiated transaction.

Schema: plain/text

Example: 340e887f5964a33e436a86511e573d20

404
	

DSU wizard component is not enabled.

500
	

Instantiating the transaction encountered an error.
2. DSU Wizard Domain Finish Transaction

Execute the transaction identified by the provided transactionId, by setting the execution context and executing the commands associated with this transaction in the invoked order. After the execution is completed, the result of the transaction will be returned.

	

/dsu-wizard/{domain}/build/{transactionId}
2.1. Path Parameters

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

The domain on which the transaction is executed.

transactionId
	

string
	

*required
	

The transaction Id which is executed.
2.2. Responses

Status Code
	

Description

200
	

Return the transaction result, the keySSI in base58 of the updated/created DSU.

Schema: plain/text

Example:

PPnBCCJoTpzrUJ1fHix85HQhWca6h39xVdm4hdQA2o1oFbaRm6TnQSY3KoQgViypburV39xn vWRKQ95j1fVu4Z1WRt4wzwFx5.

404
	

The DSU Wizard component is not enabled.

500
	

Error executing the transaction. Returns the encountered error.
3. DSU Wizard addFile

Add the addFile command to an already existing transaction identified by the provided transaction identifier (transactionId). The command will store the file with the content provided in the body, to the specified path in the DSU identified by the execution context.

	

/dsu-wizard/{domain}/addFile/{transactionId}
3.1. Path Parameters

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

The domain on which the addFile command should be executed.

transactionId
	

string
	

*required
	

The transactionId context in which the command should be executed.
3.2. Request Headers

Name
	

Type
	

Value
	

Description

x-dossier-path
	

string
	

*request
	

The file path under which the file will be uploaded in the DSU.
3.3. Body Parameters

Name
	

Type
	

Value
	

Description

body
	

	

	

application/octet-stream (binary).
3.4. Responses

Status Code
	

Description

200
	

The command was added to the transaction successfully.

404
	

The DSU Wizard component is not enabled.

500
	

Error adding the command to the transaction.
4. DSU Wizard Copy Folder

Add the copy command in the context of the transaction identified by the transactionId. The command will copy the contents from the source folder into the destination folder using the DSU provided by the execution context.

	

/dsu-wizard/{domain}/copy/{transactionId}
4.1. Path Parameters

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

The domain on which the copy command should be executed.

transactionId
	

string
	

*required
	

The transaction Id context in which the command should be executed.
4.2. Request Headers

Name
	

Type
	

Value
	

Description

x-src-path
	

string
	

*required
	

The source path, in the context of the DSU, for the copy command.

x-dest-path
	

string
	

*required
	

The destination path, in the context of the DSU, where the contents from the source will be copied.
4.3. Responses

Status Code
	

Description

200
	

The command was added to the transaction successfully.

404
	

The DSU Wizard component is not enabled.

500
	

Error adding the command to the transaction.
5. DSU Wizard Mount DSU

Add the mount command in the context of the transaction identified by the transactionId. The command will mount the DSU in a specific path using the provided KeySSI.

	

/dsu-wizard/{domain}/mount/{transactionId}
5.1. Path Parameters

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

The domain on which the mount should be executed.

transactionId
	

string
	

*required
	

The transaction Id context in which the command should be executed.
5.2. Request Headers

Name
	

Type
	

Value
	

Description

x-mount-path
	

string
	

*required
	

The path where the DSU will be mounted.

x-mounted-dossier-seed
	

string
	

*required
	

The keySSI in base58 format, used to mount the DSU.
5.3. Responses

Status Code
	

Description

200
	

The command was added to the transaction successfully.

404
	

The DSU Wizard component is not enabled.

500
	

Error adding the command to the transaction.
6. DSU Wizard SetKeySSI

Add the setKeySSI command in the context of the transaction identified by the transactionId. The command will update the transaction context with the provided KeySSI. We execute at the invocation moment to ensure the execution context of all commands loaded in the transaction will be the same.

	

/dsu-wizard/{domain}/setKeySSI/{transactionId}
6.1. Path Parameters

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

The domain on which the setKeySSI should be executed.

transactionId
	

string
	

*required
	

The transaction Id context in which the command should be executed.
6.2. Request Headers

Name
	

Type
	

Value
	

Description

x-force-dsu-create
	

boolean
	

*required
	

The path where the DSU will be mounted.
6.3. Body Parameters

Name
	

Type
	

Value
	

Description

body
	

string
	

*required
	

keySSI base 58 encoding.

Example:

PPnBCCJoTpzrUJ1fHix85HQhWca6h39xVdm4hdQA2o1oFbaRm6TnQSY3

KoQgViypburV39xnvWRKQ95j1fVu4Z1WRt4wzwFx5.
6.4. Responses

Status Code
	

Description

200
	

The command was added to the transaction successfully.

404
	

The DSU Wizard component is not enabled.

500
	

Error adding the command to the transaction.