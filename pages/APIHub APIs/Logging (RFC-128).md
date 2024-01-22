---
title: Logging 
layout: home
parent: APIHub APIs
nav_order: 9
---

Logging (RFC-128)

Abstract

Handles read/write log message operations. The Logging API service provides support for storing and retrieving log files using anchorId and logLevel criteria.
1. Add Log

Stores to the provided log message or file content, and will be associated with the provided anchorId and log level.

	

/log/add/{anchorId}/{loglevel}
1.1. Path Parameters

Name
	

Type
	

Value
	

Description

anchorId
	

string
	

*required
	

AnchorId, base58 encoded zero access keySSI.

loglevel
	

string
	

*required
	

The type of log level associated with the provided log.
1.2. Body Parameters

Name
	

Description

body
	

Body will contain the log message.
1.2.1. Example: Application/JSON

{

   "message": "contentOfTheMessage"

  }
1.3. Responses

Status Code
	

Description

200
	

Log information was saved.

400
	

Log message could not be found or is not of type string.

500
	

File I/O error
2. Read Log

Get the logs stored for the provided anchorId. Return all log records found with information about the uploaded date, level, and anchorId.

	

/log/get/{anchorID}
2.1. Path Parameters

Name
	

Type
	

Value
	

Description

anchorId
	

string
	

*required
	

AnchorId, base58 encoded zero access keySSI.
2.2. Responses

Status Code
	

Description

200
	

Return the saved logs (see  2.2.1 example)
2.2.1. Example: Application/JSON

   {

     "date": "string",

     "level": "string",

     "anchorID": "string",

     "message": "string"

   }

  ]