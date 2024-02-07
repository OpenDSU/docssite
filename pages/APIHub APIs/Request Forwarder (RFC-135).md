---
title: Request Forwarder 
layout: home
parent: OpenDSU APIHub APIs
nav_order: 16
---

Request Forwarder (RFC-135)

Abstract

This RFC describes the creation of a new forward request for the authenticated client.
1. Forward Request for Authenticated Client

ForwardRequest service creates a new request from APIHub with the provided options and body. It facilitates access to different resources where access is restricted.

	

/forwardRequestForAuthenticatedClient
1.1. Body Parameters

Name
	

Type
	

Value
	

Description

body
	

	

	

Options for new requests.
1.1.1. Example: Application/JSON

{

 "options": {

   "method": "POST"

 },

 "body": {},

 "url": "https://inner.network:8090"

}
1.2. Request Headers

Name
	

Type
	

Value
	

Description

authorization
	

string
	

*required
	

Bearer authorization token.
1.3. Responses

Status Code
	

Description

200
	

Operation handled with success. Status code may be returned from the forwarded request’s response.

400
	

Bad request. The request URL was not provided.

403
	

Unauthorized access.

500
	

Error on performing the second request.

