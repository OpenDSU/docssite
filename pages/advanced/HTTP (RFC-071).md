---
title: HTTP 
layout: home
parent: Open DSU Advanced
nav_order: 12
---

HTTP (RFC-071)


Abstract

The “HTTP” API space offers a set of portable functions to manage HTTP requests. The functions of this API are also adapted to the environment where it is used. The environment can be a browser, a service worker, or a node application.
1. HTTP functions

//Load openDSU environment

require("../privatesky/psknode/bundles/openDSU");

//Load openDSU SDK

const opendsu = require("opendsu");

//Load keyssi library

const keyssispace = opendsu.loadApi("keyssi");

//Load http library

const http = opendsu.loadApi("http");

How to use
Function poll(url, options, connectionTimeout, delayStart)

Description: Polling allows you to send a GET request to a server. The server then holds the request open until new data is available. Once available, the server responds and sends the new information.

Name
	

Type
	

Value
	

Description

url
	

string
	

*required
	

The url for which you want to create a request.

options

(optional)
	

JSON object
	

	

No options set by default.

connectionTimeout
	

number (ms)
	

10 000
	

The maximum amount of time before the connection disappears.

delayStart
	

number (ms)
	

	

Delay before sending the request.

Returns

Name
	

Description

Promise object
	

The request as a promise
Function unpoll(pollPromise)

Description: Cancel an existing polling HTTP request.

Name
	

Type
	

Value
	

Description

pollPromise
	

Promise object
	

	

The request you want to cancel; is represented by the Promise that was returned in the poll function.

Returns: The function does not return anything.
Function fetch(url, options)

Description: Get information about an HTTP address. (For browser and service workers, the native fetch API is used, while the node environment has to use a custom fetch function because there is no native one.)

Name
	

Type
	

Value
	

Description

url
	

string
	

*required
	

The url from which you want to fetch resources.

options

(optional)
	

Json object
	

	

Empty by default.

To find the option of the native page, you can follow this link.

If you are using the fetch within the node environment, here are the available options:

{

     protocol: http, #(or https)

     hostname:

     path:

     port:

}

Returns

Name
	

Description

Promise object
	

The promise resolves to the Response object representing the response to your request.
Function doPost(url, data, reqOptions, callback)

Description:  Create a POST request to the url of your choice.

Name
	

Type
	

Value
	

Description

url
	

string
	

*required
	

The url you want to create a POST request for.

data
	

string
	

*required
	

The data to be sent in the POST Request.

reqOptions
	

JSON object
	

	

No options set by default.

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

Error Object
	

data
	

string
	

Description: Error message and the error. / The sent data is returned in the callback if there is no error.
Function doPut(url, data, reqOptions, callback)

Description: Create a PUT request to the URL of your choice.

Name
	

Type
	

Value
	

Description

url
	

string
	

*required
	

The url for which you want to create a PUT request.

data
	

string
	

*required
	

The data to be sent in the PUT Request.

reqOptions
	

JSON object
	

	

No options set by default.

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

Error Object
	

data
	

string
	

Description: Error message and the error. / The sent data is returned in the callback if there is no error.

