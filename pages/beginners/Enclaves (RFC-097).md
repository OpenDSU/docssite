---
title: Enclaves 
layout: home
parent: OpenDSU for Beginners
nav_order: 6
---

Enclaves (RFC-097)

Abstract

This API space allows the user to set up custom error reporting.
1. System functions

Functions
	

Description

getFS
	

This function is used to load the File System (fs) module.

getPath
	

This function is used to load the path module.

getEnvironmentVariable
	

Get the value of the selected environment variable.

setEnvironmentVariable
	

Set a value for the selected environment variable.
2. Error
Function createOpenDSUErrorWrapper(message, err, otherErrors)

Description: Create a new error wrapper.

Name
	

Type
	

Value
	

Description

message
	

string
	

*required
	

The message that will be sent in case there is an error.

err
	

Error object
	

	

The error you want to create a wrapper for (previous error).

otherErrors
	

	

	

Other errors you want to store in the ErrorWrapper.

Returns

Name
	

Description

ErrorWrapper object
	

A new ErrorWrapper object containing information about an issue, such as the previous error that led to the actual error, a debug message, and other information the developer judged relevantly.

>see operations available on ErrorWrapper object 
Function OpenDSUSafeCallback(callback)

Description: Verify that there is a callback. If not, report an error or a warning.

Name
	

Type
	

Value
	

Description

callback
	

function
	

*required
	

The callback you have to verify.

Returns

Name
	

Description

Callback function or nothing
	

The valid callback if there is one. Else just print an error message in the console.
Function observeUserRelevantMessages(type, callback)

Description: Register to one observer (error, info, warn, or dev) to get the associated messages.

Name
	

Type
	

Value
	

Description

type
	

string
	

*required
	

The type of message you want to push callback. Possible error types are: ‘error’, ‘info’, ‘warn’, ‘dev’.

callback
	

function
	

*required
	

Function unobserveUserRelevantMessages(type, callback)

Description: Stop observing and receiving associated messages.

Name
	

Type
	

Value
	

Description

type
	

string
	

*required
	

observer type can be one of the following: ‘error’, ‘info’, ‘warn’, ‘dev’.

callback
	

function
	

*required
	

Function printOpenDSUError(...args)

Description: Print openDSU errors.

Name
	

Type
	

Value
	

Description

…args
	

	

	

Array containing the ErrorWraper that you want to print.
Function registerMandatoryCallback(callback, timeout)

Description: Make sure that callback is called within the specified time (5s by default).

Name
	

Type
	

Value
	

Description

callback
	

function
	

*required
	

The callback that is mandatory.

timeout
	

number
	

5000 by default
	

The number of milliseconds in which the callback is expected to be called.
Function reportDevRelevantInfo(message)

Description: Report additional information about the error to developers.

Name
	

Type
	

Value
	

Description

message
	

string
	

*required
	

Additional information about the error for developers.
Function reportUserRelevantError(message, err, showIntermediateErrors)

Description: Report an error to the user in the console.

Name
	

Type
	

Value
	

Description

message
	

string
	

*required
	

The message that will be sent in case there is an error.

err
	

Error object
	

	

The error you want to create a wrapper for.

showIntermediateErrors
	

boolean
	

	

Set true if you want to display intermediate errors.
Function reportUserRelevantInfo(message)

Description: Report additional information about the error to users.

Name
	

Type
	

Value
	

Description

message
	

string
	

*required
	

Additional information about the error for users.
Function reportUserRelevantWarning(message)

Description: Report a warning to the user in the console.

Name
	

Type
	

Value
	

Description

message
	

string
	

*required
	

The message that will be sent in case there is an error.
DB_INSERT_EXISTING_RECORD_ERROR

Description: A predefined error with the following message: "Trying to insert into the existing record".

