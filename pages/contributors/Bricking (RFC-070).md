---
title: Bricking 
layout: home
parent: OpenDSU Contributors
nav_order: 14
---

Bricking (RFC-070)


Abstract

The “bricking” API space offers a set of portable functions for creating and reading bricks. However, the agent should handle brick management (storage and reconstruction) automatically, and you will not have to use them. More information on brick storage can be found in Brick Storages (RFC-003).
1. Bricking functions

//Load openDSU environment

require("../privatesky/psknode/bundles/openDSU");

//Load openDSU SDK

const opendsu = require("opendsu");

//Load keyssi library

const keyssispace = opendsu.loadApi("keyssi");

//Load bricking library

const bricking = opendsu.loadApi("bricking");

//Build a newKeySSI

const seedSSI = keyssispace.createSeedSSI("default");

bricking.putBrick(seedSSI, 'hello', (err, brickHash) =>{

    const HLSSI = keyssispace.buildHashLinkSSI("default",brickHash);

    bricking.putBrick(seedSSI, 'world', (err, brickHash2) =>{

      const HLSSI2 = keyssispace.buildHashLinkSSI("default",brickHash2);

      bricking.getBrick(HLSSI, 'authToken', (err, brick) =>{

          console.log(brick.toString());

       //Returns: “hello”

          bricking.getMultipleBricks([HLSSI,HLSSI2], 'authToken', (err, bricks) =>{

              console.log("brick:",bricks.toString());

          //Returns: “brick: hello” “brick: world”

          });

      });

  });

});

How to use
Function getBrick(hashLinkSSI, authToken, callback)

Description: Retrieve a brick from a hashLinkSSI.

Name
	

Type
	

Value
	

Description

hashLinkSSI
	

HashLinkSSI object
	

*required
	

HashLinkSSI from which you want to get the brick.

authToken
	

JWT token
	

	

A JWT authentication token.

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper Object
	

brick
	

Buffer
	

Description: Contains a message and the error. / The content of the brick identified by the HashLinkSSI.
Function getMultipleBricks(hashLinkSSIList, authToken, callback)

Description: Retrieve multiple bricks from a hashLinkSSI list.

Name
	

Type
	

Value
	

Description

hashLinkSSIList
	

Array of HashLinkSSIs
	

*required
	

List of HashLinkSSIs from which you want to get bricks.

authToken
	

JWT token
	

	

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
	

brick
	

	

Description: List of HashLinkSSI from which you want to get bricks. / A JWT authentication token.
Function putBrick(domain, brick, authToken, callback)

Description: Add a brick to a domain.

Name
	

Type
	

Value
	

Description

domain
	

KeySSI object
	

*required
	

The KeySSI associated with the blockchain and brick storage where you want to add the brick.

brick
	

ReadableStream or string
	

*required
	

The brick content you want to add to the brick storages.

authToken
	

JWT token
	

	

A JWT authentication token.

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper Object
	

brickHash
	

string
	

Description: Contains a message and the error. / The hash of the brick that was added. The KeySSI type (sha256 by default) defines the hash function.
Function constructBricksFromData(keySSI, data, options, callback)

Description: Create bricks from data.

Name
	

Type
	

Value
	

Description

keySSI
	

KeySSI object
	

*required
	

The keySSI of the blockchain domain.

data
	

buffer
	

*required
	

options
	

	

	

callback
	

function
	

