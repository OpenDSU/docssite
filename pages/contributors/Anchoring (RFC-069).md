---
title: Anchoring (RFC-069)
layout: home
parent: OpenDSU Contributors
nav_order: 13
---

style>
.imgMain{
    display.block;
    margin-left:70px;
    margin-right:auto;
} 
</style>

{: .no_toc }


{: .accepted }
The proposal has been accepted and has an implementation.


**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)
 



# Abstract

<p style='text-align: justify;'>This API space offers a set of portable functions for DSU anchoring. The agent should handle these operations, so it will probably not have to use these functions. More information about OpenDSU Anchoring can be found in<a href="https://www.opendsu.org/pages/concepts/Anchoring%20(RFC-005).html"> Anchoring (RFC-005)</a>.
</p>


# 1. Anchoring functions

```js

//Load openDSU environment

require("../privatesky/psknode/bundles/openDSU");

//Load openDSU SDK

const opendsu = require("opendsu");

//Load keyssi library

const keyssispace = opendsu.loadApi("keyssi");

//Load anchoring library

const anchoring = opendsu.loadApi("anchoring");

//Build a newKeySSI

const seedSSI = keyssispace.createSeedSSI('default');

const newHLSSI = keyssispace.createHashLinkSSI('default','newBrickHash');

const lastHLSSI = keyssispace.createHashLinkSSI('default','lastBrickHash');

anchoring.addVersion(seedSSI, newHLSSI, lastHLSSI, 'zkpValue', (err, status) => {

  anchoring.versions(seedSSI, 'authToken', (err, versions) => {

      console.log("versions: ", versions);

  });

});
```

<div style="text-align:center;">
    <p><b>How to use</p></b>
</div>



# Function createAnchor(dsuKeySSI, callback)


**Description:** Creates a new anchor with a certain version of the DSU identified by the dsuKeySSI parameter.





Name
	

Type
	

Value
	

Description

dsuKeySSI
	

KeySSI object
	

*required
	

An identifier for the DSU for which we want to create an anchor.

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

Description: Contains a message and the error.
Function createNFT(nftKeySSI, callback)

Description: Creates a new anchor with a certain NFT identified by the nftKeySSI parameter.

Name
	

Type
	

Value
	

Description

nftKeySSI
	

KeySSI object
	

*required
	

An identifier for the NFT in which we want to create an anchor.

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

	

	

Description:
Function appendToAnchor(dsuKeySSI, newShlSSI, previousShlSSI, zkpValue, callback)

Description: Appends a new version of the DSU to an existing anchor.

Name
	

Type
	

Value
	

Description

dsuKeySSI
	

KeySSI object
	

*required
	

An identifier for the DSU to which we want to append a new version.

newShlSSI
	

hashLinkSSI object
	

*required
	

previousShlSSI
	

hashLinkSSI object
	

*required
	

zkpValue
	

string
	

	

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

Description: Contains a message and the error.
Function getAllVersions(keySSI, authToken, callback)

Description: Get a list of versions of the DSU identified by the provided KeySSI. Those versions are represented as signed HashLinkSSIs. 

Name
	

Type
	

Value
	

Description

keySSI
	

KeySSI object
	

	

The KeySSI associated with the DSU from which you want to get information about its versions.

authToken

(optional)
	

JWT Token (Json format)
	

	

A JWT authentication token.

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

versions
	

Array of HashLinkSSIs
	

Description: Contains a message and the error./ List of versions associated with the DSU with the provided KeySSI and represented by HashLinkSSIs.
Function getLastVersion(keySSI, authToken, callback)

Description:

Name
	

Type
	

Value
	

Description

keySSI
	

keySSI object
	

	

authToken
	

string
	

	

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

version  or  latestHashLink
	

HashLinkSSI
	

Description: Contains a message and the error or it contains the last version of the DSU which corresponds to the provided KeySSI.
Function getAnchoringBehaviour(persistenceStrategy)

Description: Creates a new AnchoringAbstractBehaviour object.

Name
	

Type
	

Value
	

Description

persistenceStrategy
	

object
	

	

2. AnchoringX Functions, exposed by RemotePersistence
Function createAnchor(capableOfSigningKeySSI, anchorValue, callback)

Description:

Name
	

Type
	

Value
	

Description

capableOfSigningKeySSI
	

keySSI object
	

*required
	

the anchor SSI

anchorValue
	

string
	

*required
	

the anchor value

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

Description: Contains a message and the error.
Function appendAnchor(capableOfSigningKeySSI, anchorValue, callback)

Description:

Name
	

Type
	

Value
	

Description

capableOfSigningKeySSI
	

keySSI object
	

*required
	

the anchor SSI

anchorValue
	

string
	

*required
	

the anchor value

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

Description: Contains a message and the error.
Function getAllVersions(keySSI, callback)

Description: Get a list of versions of the DSU identified by the provided KeySSI. Those versions are represented as signed HashLinkSSIs. 

Name
	

Type
	

Value
	

Description

keySSI
	

keySSI object
	

*required
	

the anchor SSI

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

data
	

Array of HashLinkSSIs
	

Description: Contains a message and the error./ List of versions associated with the DSU with the provided keySSI and represented by HashLinkSSIs.
Function getLastVersion(keySSI, callback)

Description:

Name
	

Type
	

Value
	

Description

keySSI
	

keySSI object
	

*required
	

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

version  or  latestHashLink
	

HashLinkSSI
	

Description: Contains a message and the error or it contains the last version of the DSU which corresponds to the provided KeySSI.
Function createOrUpdateMultipleAnchors(anchors, callback)

Description:

Name
	

Type
	

Value
	

Description

anchors
	

array
	

*required
	

callback
	

function
	

	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

Description: Contains a message and the error.