---
title: CredentialsDSU 
layout: home
parent: OpenDSU Contributors
nav_order: 9
---

CredentialsDSU (RFC-057)

Abstract

1. Public Methods from the Credentials API
Function createJWTVerifiableCredential(issuer, subject, options, callback)

Description: Creates an instance of a JwtVC object by preparing the initial JWT options object based on the inputs and pointing to the specific create JWT method based on the subject type.

Name
	

Type
	

Value
	

Description

issuer
	

W3C DID Document or KeySSI
	

*required
	

subject
	

W3C DID Document or KeySSI
	

*required
	

options
	

	

	

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

jwtInstance
	

	

Description: Contains an error or a JWT Instance.
Function createJWTVerifiableCredentialAsync(issuer, subject, options)

Description: Similar to createJWTVerifiableCredential(), but this function is asynchronous. It returns a promise resolved with the JWTVerifiableCredential.

Name
	

Type
	

Value
	

Description

issuer
	

W3C DID Document or KeySSI
	

*required
	

subject
	

W3C DID Document or KeySSI
	

*required
	

options
	

	

	

Function createJWTVerifiablePresentation(issuer, options, callback)

Description: Creates an instance of a JwtVP object by preparing the initial JWT options object based on the inputs and pointing to the specific create JWT method based on the subject type.

Name
	

Type
	

Value
	

Description

issuer
	

W3C DID Document or KeySSI
	

*required
	

options
	

	

	

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

jwtInstance
	

	

Description: Contains an error or a JWT Instance.
Function createJWTVerifiablePresentationAsync(issuer, options)

Description: Similar to createJWTVerifiablePresentation(), but this function is asynchronous. It returns a promise resolved with the JWTVerifiablePresentation.

Name
	

Type
	

Value
	

Description

issuer
	

W3C DID Document or KeySSI
	

*required
	

options
	

	

	

Function loadJWTVerifiableCredential(encodedJWTc, callback)

Description: Loads an instance of a JWT VC by parsing an encoded verifiable credential according to the requested type.

Name
	

Type
	

Value
	

Description

encodedJWTc
	

string
	

*required
	

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

loadedJWTInstance
	

	

Description: Contains an error or a JWT Instance.
Function loadJWTVerifiableCredentialAsync(encodedJWTc)

Description: Similar to loadJWTVerifiableCredential(), but this function is asynchronous. It returns a promise resolved with the JWTVerifiableCredential.

Name
	

Type
	

Value
	

Description

encodedJWTc
	

string
	

*required
	

Function loadJWTVerifiablePresentation(encodedJWTp, callback)

Description: Loads an instance of a JWT VP by parsing an encoded verifiable presentation according to the requested type.

Name
	

Type
	

Value
	

Description

encodedJWTVp
	

string
	

*required
	

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

loadedJWTInstance
	

	

Description: Contains an error or a JWT Instance.
Function loadJWTVerifiablePresentationAsync(encodedJWTp)

Description: Similar to loadJWTVerifiablePresentation(), but this function is asynchronous. It returns a promise resolved with the JWTVerifiablePresentation.

Name
	

Type
	

Value
	

Description

encodedJWTVp
	

string
	

*required
	

validationStrategies

This module exports functions such as:

    getValidationStrategy(validationStrategyName)
    registerValidationStrategy(validationStrategyName, implementation)
    validateCredential(validationStrategyName, environmentData, credentialSerialization, callback)
    validateCredentialAsync(validationStrategyName, environmentData, credentialSerialization)
    validatePresentation(validationStrategyNamesArray, environmentData, presentationSerialization, callback)
    validatePresentationAsync(validationStrategyNamesArray, environmentData, presentationSerialization)

JWT_ERRORS

These are different preset errors for several behaviours that might occur, for example:

    EMPTY_JWT_PROVIDED
    INVALID_JWT_FORMAT
    INVALID_JWT_HEADER
    INVALID_JWT_HEADER_TYPE
    INVALID_JWT_PAYLOAD
    INVALID_JWT_SIGNATURE
    INVALID_ISSUER_FORMAT
    INVALID_SUBJECT_FORMAT
    INVALID_EXPIRATION_DATE
    INVALID_PUBLIC_CLAIM
    INVALID_SUBJECT_CLAIM
    IMMUTABLE_PUBLIC_CLAIM
    INVALID_CONTEXT_URI
    INVALID_CONTEXT_TYPE
    IMMUTABLE_SUBJECT_CLAIM
    INVALID_SUBJECT_ID
    PROVIDED_SUBJECT_ID_NOT_PRESENT
    JWT_TOKEN_EXPIRED
    JWT_TOKEN_NOT_ACTIVE
    ROOT_OF_TRUST_NOT_VALID
    AUDIENCE_OF_PRESENTATION_NOT_DEFINED
    HOLDER_AND_VERIFIER_MUST_BE_DID

