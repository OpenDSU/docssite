---
title: Static Server 
layout: home
parent: APIHub APIs
nav_order: 8
---

Static Server (RFC-127)

Abstract

This RFC covers Static Servers, which deliver static file content from the current location.
1. Get Static Directory Contents

Return the file contents and directory structure from the directoryPath in json format. This API is used on each wallet creation when the new wallet inherits the code base and the wallet patch for the creation instance of the SSApp.

	

/directory-summary/{walletName}/{directoryPath}
1.1. Path Parameters

Name
	

Type
	

Value
	

Description

walletName
	

string
	

*required
	

The wallet name for each you want to get details.

directoryPath
	

string
	

*required
	

Directory resource
1.2. Responses

Status Code
	

Description

200
	

Return the directory structure and file contents (example: see 1.2.1 schema application/json).

403
	

Invalid Directory

404
	

Directory not found.
1.2.1.Schema: application/json

"/": {

"seed":"5kieNHd9wqBPNZCqdLnyRV4JPbmT9QjVPcPWuYXnuLrWfFkGdeqyNYbqSkx4wX23gp2

69R1vDHTF9aMpXzbXprnoJNKsjwS9VVJtzqo4YFArHwN11i1Ev64Evk3ztU1FWvim5r6fw9rcb4P

S1FznoCnMigShSo5siJm8jZfm94bncJRFv8az8WcxKLhjLHahoPSUg6iCYvDp8QS3"

    }

   }
2. Upload File to specified folder

Upload the contents of a file into a specified folder. It is used in the context of wallets that are booted using service workers.

	

/files/upload/{folder}
2.1. Path Parameters

Name
	

Type
	

Value
	

Description

folder
	

string
	

*required
	

The folder under which file contents will be uploaded.
2.2. Body Parameters

Name
	

Description

body
	

The file object that is requested to be uploaded.

Media Type: application/octet-stream.
2.3. Responses

Status Code
	

Description

200
	

Returns the path under which the file contents were saved (example:  see  2.3.1 schema application/json).

500
	

Invalid folder or I/O operation.
2.3.1.Schema: application/json

{

   "path": "/data/my-private-data.json"

  } 
3. Download File

Download the contents of the file identified by the filepath. It is used in the context of wallets that are booted using service workers.

	

/files/download/{filepath}
3.1. Path Parameters

Name
	

Type
	

Value
	

Description

filepath
	

string
	

*required
	

The path of the file download.
3.2. Responses

Status Code
	

Description

200
	

Return the file's content in binary format.

404
	

I/O operation error or invalid file path.

