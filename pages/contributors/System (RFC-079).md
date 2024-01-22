---
title: System 
layout: home
parent: OpenDSU Contributors
nav_order: 20
---

 System (RFC-079)

 Abstract

This API space allows the user to configure environment variables of the OpenDSU system.
1. System functions
Function getFS()

Description: This function is used to load the File System (fs) module.
Function getPath()

Description: This function is used to load the path module.
Function getEnvironmentVariable(name)

Description: Get the value of the selected environment variable.

Name
	

Type
	

Value
	

Description

name
	

string
	

*required
	

The name of the environment variable.

Returns

Name
	

Description

any
	

The value associated with the environment variable.
Function setEnvironmentVariable(name, value)

Description: Set a value for the selected environment variable.

Name
	

Type
	

Value
	

Description

name
	

string
	

*required
	

The name of the environment variable.

value
	

any
	

	

The value you want to associate with the environment variable.
Function getBaseURL()

Description: This function is used to load the base URL module.