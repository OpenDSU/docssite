---
title: Anchoring 
layout: home
parent: OpenDSU APIHub APIs
nav_order: 2
---

Anchoring (RFC-121)

Abstract

This RFC presents the process of creating anchors, adding a new HashLink to an AnchorId, creating or updating multiple anchors within the same request, and Getting all versions of an anchor.
Overview

The Anchoring component is an essential part of the APIHub of the OpenDSU. It provides a direct connection with the blockchain network and applies a security and validation context to any change operation in the landscape of the brick storage.

The anchoring service provides the CRU (Create, Read, Update) mechanism to create an anchor, update an anchor or read the information stored on the blockchain for that anchor. The strong connection of the brick storage and anchoring ensures access to the data from the brick storage through a KeySSI and a list of HashLinks. We use HashLinks to find the required bricks in the brick storage as they are gathered from the blockchain using the anchoring service. The anchor identifier (anchorID) must obtain the HashLinks from the blockchain, which we receive from the KeySSI.
1. Create Anchor

Create a new Anchor for a newly created brick. We call appendAnchor for any sub-sequenced update operation on the content of the DSU. The invocation still requires two HashLinks, but the last HashLink can be the same as the new HashLink or null, as both choices are valid.

	

/anchor/{domain}/create-anchor/{keySSI}
1.1. Path Parameters

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

The domain should be the same as the domain from the Anchorld.

keySSI
	

string
	

*required
	

keySSI base 58.
1.2. Body Parameters

Name
	

Description

body
	

{

 hashLinkIds:  {

   new: string

   last: string

 }

 digitalProof: string

 zkp: string

}
1.3. Responses

Status Code
	

Description

201
	

Successfully created a new anchor for AnchorId.

403
	

Access to resources is forbidden.

409
	

Access Error.

428
	

HashLink for AnchorId is out of sync.

429
	

Too many requests.

500
	

Fallback generic error response.
2. Append to Anchor

Append a new HashLink to an anchorId. The anchorId will already have a series of HashLinks attached, so when a new HashLink is attached, the previous HashLink must be provided to validate the change operation on the brick. The whole collection of HashLinks will provide access to all versions of the DSU.

	

/anchor/{domain}/append-to-anchor/{keySSI}
2.1. Path Parameters

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

The domain should be the same as the domain from the Anchorld.

keySSI
	

string
	

*required
	

keySSI base 58.
2.2. Body Parameters

Name
	

Description

body
	

{

 hashLinkIds:  {

   new: string

   last: string

 }

 digitalProof: string

 zkp: string

}
2.3. Responses

Status Code
	

Description

201
	

Successfully appended the HashLink for AnchorId.

403
	

Access to resources is forbidden.

409
	

Access Error.

428
	

HashLink for AnchorId is out of sync.

429
	

Too many requests.

500
	

Fallback generic error response.
3. Create or Update Multiple Anchors

Create or update multiple anchors in the same request in order to increase performance or when transactions are made.

	

/anchor/{domain}/create-or-update-multiple-anchors
3.1. Path Parameters

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

All the created or updated anchors should be from the same domain.
3.2. Body Parameters

Name
	

Description

body
	

{

 hashLinkIds:  {

   new: string

   last: string

 }

 digitalProof: string

 zkp: string

}
3.3. Responses

Status Code
	

Description

201
	

Successfully created or updated the provided anchors.

403
	

Access to resources is forbidden.

409
	

Access Error.

428
	

HashLink for AnchorId is out of sync.

429
	

Too many requests.

500
	

Fallback generic error response.
4. Get All Versions

Get all the versions of an anchor. Useful to obtain all HashLinks. To receive all the HashLinks required for an anchorId, an invocation of getAllVersions is necessary for accessing the content referred by a KeySSI. We need the list of HashLinks as we connect each HashLink  with a specific DSU or a version of a DSU.

	

/anchor/{domain}/get-all-versions/{keySSI}
4.1. Path Parameters

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

The domain should be the same as the domain from the AnchorId.

keySSI
	

string
	

*required
	

keySSI base 58.
4.2. Responses

Status Code
	

Description

200
	

Returns the list of the versions of a keySSI.

404
	

Invalid AnchorID.

429
	

Too many Requests.

