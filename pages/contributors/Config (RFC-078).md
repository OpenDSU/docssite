---
title: Config 
layout: home
parent: OpenDSU Contributors
nav_order: 19
---
# **Config**

{: .feedback }
A period when the community can review the RFC (comment Docs).


**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)




# Abstract

<p style='text-align: justify;'>This API space provides utilities for OpenDSU environment configurations.
</p>

# 1. Config functions

## Function autoConfigFromEnvironment(environment)

<p style='text-align: justify;'><b>Description</b>: Set the correct config according to your environment.
</p>


| **Name**    | **Type**     | **Value**  | **Description**                                                                    |
|:------------|:-------------|:-----------|:-----------------------------------------------------------------------------------|
| environment |              |            | Your setup environment.                                                            |



**Returns**: This function does not return anything.

## Function disableLocalVault()

<p style='text-align: justify;'><b>Description</b>: Disable the local vault (the cache) by setting the option cache.vault_type value to “no-cache”. It can be used if the DSU is located on the server.
</p>

**Returns**: This function does not return anything.

## Function get(key)

<p style='text-align: justify;'><b>Description</b>: Retrieve the key of the environment configuration.
</p>

| **Name**     | **Type**      | **Value**  | **Description**                                                                     |
|:-------------|:--------------|:-----------|:------------------------------------------------------------------------------------|
| key          | string        | *required  | The key of the environment configuration you want to access.                        |



**Returns**


| **Name**                                        | **Description**                                       |
|:------------------------------------------------|:------------------------------------------------------|
| any                                             | Return the value associated with the key.             |




## Function set(key, value)

<p style='text-align: justify;'><b>Description</b>: Set a value for the provided key in your environment configuration.
</p>


| **Name**      | **Type**       | **Value**   | **Description**                        |
|:--------------|:---------------|:------------|:---------------------------------------|
| key           | string         | *required   | The key you want to configure.         |
| value         | any            |             | The value you want to set for the key. |



## Function getEnv(key, callback)

<p style='text-align: justify;'><b>Description</b>: Get the value for the provided key from your environment configuration.
</p>

**Returns**



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

