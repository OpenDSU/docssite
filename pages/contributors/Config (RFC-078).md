---
title: Config 
layout: home
parent: OpenDSU Contributors
nav_order: 19
---

Config (RFC-078)

Abstract

This API space provides utilities for OpenDSU environment configurations.
1. Config functions
Function autoConfigFromEnvironment(environment)

Description: Set the correct config according to your environment.

Name
	

Type
	

Value
	

Description

environment
	

	

	

Your setup environment.

Returns: This function does not return anything.
Function disableLocalVault()

Description: Disable the local vault (the cache) by setting the option cache.vault_type value to “no-cache”. It can be used if the DSU is located on the server.

Returns: This function does not return anything.
Function get(key)

Description: Retrieve the key of the environment configuration.

Name
	

Type
	

Value
	

Description

key
	

string
	

*required
	

The key of the environment configuration you want to access.

Returns

Name
	

Description

any
	

Return the value associated with the key.
Function set(key, value)

Description: Set a value for the provided key in your environment configuration.

Name
	

Type
	

Value
	

Description

key
	

string
	

*required
	

The key you want to configure.

value
	

any
	

	

The value you want to set for the key.
Function getEnv(key, callback)

Description: Get the value for the provided key from your environment configuration.

Name
	

Type
	

Value
	

Description

key
	

string
	

*required
	

The key of the environment you want to access.

callback
	

function
	

*required
	

Returns

Name
	

Description

any
	

An error and a specific message / The environment associated with the key.
Function setEnv(key, value, callback)

Description: Set a value for the provided key in your environment configuration.

Name
	

Type
	

Value
	

Description

key
	

string
	

*required
	

The key of the environment you want to access.

value
	

	

	

callback
	

function
	

*required
	

Returns

Name
	

Description

any
	

An error and a specific message. / The security context associated with the key.
Function readEnvFile(callback)

Description: Read your environment configuration.

Name
	

Type
	

Value
	

Description

callback
	

function
	

*required
	

Returns

Name
	

Description

any
	

An error and a specific message. / The environment configuration file.

