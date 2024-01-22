---
title: SSO Secrets 
layout: home
parent: APIHub APIs
nav_order: 15
---

SSO Secrets (RFC-134)

Abstract

This RFC provides information about SSO Secrets management. All API calls should be authorized with a Bearer token.
1. Get SSO Secret

Access user SSO secrets for a particular appName.

	

/secrets/getSSOSecret/{appName}
	

1.1. Path Parameters

Name
	

Type
	

Value
	

Description

appName
	

string
	

*required
	

The application name for which the secret is requested.
1.2. Request Headers

Name
	

Type
	

Value
	

Description

user-id
	

string
	

*request
	

The user id of the user that is asking for the secret.

authorization
	

string
	

*request
	

Bearer authorization token.
1.3. Responses

Status Code
	

Description

200
	

Returns the secret for the specified user-id and appName

403
	

Unauthorized access.

404
	

A secret for the specified user-id and appName was not found.

500
	

Wrong secret format or unauthorized access.
2. Put SSO Secret

Enable and add user SSO secret for a particular appName.

	

/secrets/getSSOSecret/{appName}
	

2.1. Path Parameters

Name
	

Type
	

Value
	

Description

appName
	

string
	

*required
	

The application name for which the secret is enabled and added.
2.2. Body Parameters

Name
	

Type
	

Value
	

Description

body
	

	

	

Secret that should be stored
2.3. Request Headers

Name
	

Type
	

Value
	

Description

user-id
	

string
	

*required
	

The user id of the user that is asking for the secret.

authorization
	

string
	

*required
	

Bearer authorization token.
2.4. Responses

Status Code
	

Description

200
	

Operation completed successfully.

403
	

Unauthorized access.

404
	

A secret for the specified user-id and appName was not found.

500
	

Wrong secret format or unauthorized access.
3. Deactivate SSO Secret

Deactivate the user SSO secret for a particular appName.

	

/deactivateSSOSecret/{appName}/{did}
	

3.1. Path Parameters

Name
	

Type
	

Value
	

Description

appName
	

string
	

*required
	

The application name for which the secret is deactivated.

did
	

string
	

*required
	

The DID of the user encoded in base 58.
3.2. Request Headers

Name
	

Type
	

Value
	

Description

authorization
	

string
	

*required
	

Bearer authorization token.
3.3. Responses

Status Code
	

Description

200
	

Operation completed successfully.

403
	

Unauthorized access.

404
	

A secret for the specified “did” and “appName” was not found.
4. Remove SSO Secret

Deactivate and remove the user SSO secret for a particular appName.

	

/removeSSOSecret/{appName}/{did}  
	

4.1. Path Parameters

Name
	

Type
	

Value
	

Description

appName
	

string
	

*required
	

The application name for which the secret is deactivated and removed.

did
	

string
	

*required
	

The DID of the user encoded in base 58.
4.2. Request Headers

Name
	

Type
	

Value
	

Description

authorization
	

string
	

*required
	

Bearer authorization token.
4.3. Responses

Status Code
	

Description

200
	

Operation completed successfully.

403
	

Unauthorized access.

404
	

A secret for the specified “did” and “appName” was not found.
5. Put DID Secret

Write a secret with the provided name associated with the provided did.

	

/putDIDSecret/{did}/{name}  
	

5.1. Path Parameters

Name
	

Type
	

Value
	

Description

did
	

string
	

*required
	

The DID of the user encoded in base 58.

name
	

string
	

*required
	

The name of the secret associated with the specified did
5.2. Request Headers

Name
	

Type
	

Value
	

Description

authorization
	

string
	

*required
	

Bearer authorization token.
5.3. Responses

Status Code
	

Description

200
	

Operation completed successfully.

403
	

Unauthorized access.

404
	

A secret with the specified “name” for the specified “did” was not found.

555
	

Server is in read-only mode
6. Get DID Secret

Get the secret with the provided name for the provided did

	

/getDIDSecret/{did}/{name}  
	

6.1. Path Parameters

Name
	

Type
	

Value
	

Description

did
	

string
	

*required
	

The DID of the user encoded in base 58.

name
	

string
	

*required
	

The name of the secret associated with the specified did
6.2. Request Headers

Name
	

Type
	

Value
	

Description

authorization
	

string
	

*required
	

Bearer authorization token.
6.3. Responses

Status Code
	

Description

200
	

Operation completed successfully.

403
	

Unauthorized access.

404
	

A secret with the specified “name” for the specified “did” was not found.

555
	

Server is in read-only mode
7. Delete DID Secret

Delete the secret with the provided name associated with the provided DID.

	

/deleteDIDSecret/{did}/{name}  
	

7.1. Path Parameters

Name
	

Type
	

Value
	

Description

did
	

string
	

*required
	

The DID of the user encoded in base 58.

name
	

string
	

*required
	

The name of the secret associated with the specified did
7.2. Request Headers

Name
	

Type
	

Value
	

Description

authorization
	

string
	

*required
	

Bearer authorization token.
7.3. Responses

Status Code
	

Description

200
	

Operation completed successfully.

403
	

Unauthorized access.

404
	

A secret with the specified “name” for the specified “did” was not found.

555
	

Server is in read-only mode