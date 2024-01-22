---
title: Mapping Engine 
layout: home
parent: OpenDSU Contributors
nav_order: 17
---

Mapping Engine (RFC-076)

Abstract
1. Public functions from the Mapping Engine
Function getMappingEngine(persistenceDSU, options)

Description: Creates a new MappingEngine Object.

Name
	

Type
	

Value
	

Description

persistenceDSU
	

 object
	

*required
	

The DSU that will be used as a storage service. It must contain these three functions: beginBatch(), commitBatch(), cancelBatch().

options
	

	

	

Function getMessagesPipe

Description: Returns the pipe and waits for messages that will later be matched and mapped to certain functions.
Function getErrorsMap

Description: Returns an error map for different types of errors that might occur while receiving messages or while mapping them.
Function defineMapping(matchFunction, mappingFunction)

Description: After the message is received and digested, this function is used to map that message to the desired method.

Name
	

Type
	

Value
	

Description

matchFunction
	

function
	

*required
	

A function that will match the message to a certain method.

mappingFunction
	

function
	

*required
	

The mapping function that is being selected.
Function defineApi(name, implementation)

Description: Selects a function that will represent the implementation for a certain API.

Name
	

Type
	

Value
	

Description

name
	

string
	

*required
	

The name of the API.

implementation
	

string
	

*required
	

The name of the function that will represent the implementation for that certain api.

