---
title: Verifiable Credentials 
layout: home
parent: Open DSU Advanced
nav_order: 13
---

Verifiable Credentials (RFC-081)


Abstract

1. Verifiable Credentials functions
Function issueCredential(verificationServiceName)

Description:  Issue a credential that will be verifiable on the selected verification service.

Name
	

Type
	

Value
	

Description

verificationServiceName
	

	

	

Function createPresentation(verificationServiceName)

Description: Create a presentation (verifiable credential and proofs)  with the selected verification service. 

Name
	

Type
	

Value
	

Description

verificationServiceName
	

	

	

Function verifyPresentation(allowedImplementationNames, environmentData, presentation)

Description: Verify the presentation (verifiable credential and proofs) using the methods specified in the allowed implementations.

Name
	

Type
	

Value
	

Description

allowedImplementationNames
	

Array of implementationNames
	

	

environmentData
	

Array
	

	

presentation
	

	

	

Function registerVerifiableCredentialService(verificationServiceName, implementation)

Description: Register a new verifiable credential service specifying the implementation that should be used.

Name
	

Type
	

Value
	

Description

verificationServiceName
	

	

	

implementation
	

	

	

