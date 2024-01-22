---
title: Bricking 
layout: home
parent: APIHub APIs
nav_order: 4
---

Bricking (RFC-123)

Abstract

Storage Service for all the bricks generated from DSUs. The "bricking" API space offers a set of portable functions for creating and reading bricks. The operations exposed by the Bricking service are used in the context of construction and reconstruction of the DSU by the OpenDSU SDK.
1. Put Brick

Stores the encrypted content of the brick on the Brick storage and returns the hashLink for later access.

	

/bricking/{domain}/put-brick
1.1. Path Parameters

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

The domain used for the bricks.
1.2. Body Parameters

Name
	

Description

body
	

The stream that contains the encrypted brick.
1.3. Responses

Status Code
	

Description

201
	

Returns the hash of the content.

409
	

Invalid hashLink.

500
	

Fallback generic error response.
2. Download multiple Bricks

Get the encrypted content of the brick for each hashLink in the provided list of hashLinks.

	

/bricking/{domain}/downloadMultipleBricks
2.1. Path Parameters

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

The domain used for the bricks.
2.2. Query Parameters

Name
	

Type
	

Value
	

Description

hashes
	

string
	

*required
	

Array, comma delimited hashlinks.
2.3. Responses

Status Code
	

Description

200
	

Returns the encrypted content of a brick as a Buffer {length} {brickContent}.

404
	

Brick not found.

500
	

Brick domain not found.
3.Get Brick

Get the encrypted content of the brick identified by the provided hash link.

	

/bricking/{domain}/get-brick/{hashLink}
3.1. Path Parameters

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

The domain used for the bricks.

hashLink
	

string
	

*required
	

3.2. Responses

Status Code
	

Description

200
	

Returns the encrypted content of a brick as a Buffer.

404
	

Brick not found.

500
	

Brick domain not found.
4.Store Transaction

Store transactions in Bricks Storage. Usually, the stored data is represented by the anchorData. When the maximum number of transactionsPerBlock is reached, the block is built and stored in Bricks Storage.

	

/bricksFabric/add
4.1. Responses

Status Code
	

Description

201
	

Transaction data was stored successfully.

500
	

Failed to store transactions.