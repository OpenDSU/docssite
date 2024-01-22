---
title: BDNS 
layout: home
parent: OpenDSU Contributors
nav_order: 12
---

BDNS (RFC-067)

Abstract

The “BDNS” API space offers a set of portable functions used to request information about the blockchain domain used by your DSU. These operations should be handled automatically by the agents to get the anchoring service associated with the domain, the location of the brick storage as well as other information.
1. BDNS functions

Load (use is described later for each function):  

//Load openDSU environment

require("../privatesky/psknode/bundles/openDSU");

//Load openDSU SDK

const opendsu = require("opendsu");

//Load keyssi library

const keyssispace = opendsu.loadApi("keyssi");

//Load bdns library

const bdns = opendsu.loadApi("bdns");

//Build SeedSSI

const seedSSI = keyssispace.createSeedSSI('default');

//BDNS functions
Function getRawInfo(dlDomain, callback)

Description: Gets the raw information about a blockchain domain.

Name
	

Type
	

Value
	

Description

dlDomain
	

string
	

*required
	

The blockchain domain you want information about.

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

rawInfo
	

JSON object
	

Description: Contains an error or an object with all the information about the domain (i.e., brick address, anchor address, replicas).
Function getBrickStorages(dlDomain, callback)

Description: Gets addresses of brick storages associated with the provided dlDomain.

Name
	

Type
	

Value
	

Description

dlDomain
	

string
	

*required
	

The blockchain domain that you want information about.

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

brickStorageArray
	

object
	

Description: Contains an error or an object with an array of brick storages.
Function getAnchoringServices(dlDomain, callback)

Description: Gets addresses of anchoring services for the provided dlDomain.

Name
	

Type
	

Value
	

Description

dlDomain
	

string
	

*required
	

The blockchain domain that you want information about.

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

anchoringServicesArray
	

object
	

Description: Contains an error or an object with an array of anchoring services.
Function getContractServices(dlDomain, callback)

Description: Gets addresses of contract services for the provided dlDomain. If no callback function is given, the function is not asynchronous anymore, and it will return a promise.

Name
	

Type
	

Value
	

Description

dlDomain
	

string
	

*required
	

The blockchain domain.

callback
	

function
	

	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

contractServicesArray
	

object
	

Description: Contains an error or an object with an array of contract services.
Function getReplicas(dlDomain, callback)

Description: Gets addresses of replicas for the provided dlDomain.

Name
	

Type
	

Value
	

Description

dlDomain
	

string
	

*required
	

The blockchain domain.

callback
	

function
	

	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

replicas
	

Array
	

Description: Contains an error or an object with an array of URL addresses of replicas associated with the provided dlDomain.
Function getNotificationEndpoints(dlDomain, callback)

Description: Gets the notification endpoints of the given dlDomain.

Name
	

Type
	

Value
	

Description

dlDomain
	

string
	

*required
	

The blockchain domain.

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

endpoints
	

array
	

Description: Contains an error or an object with an array of notification endpoints.
Function getMQEndpoints(dlDomain, callback)

Description: Gets the message queue endpoints of the given dlDomain.

Name
	

Type
	

Value
	

Description

dlDomain
	

string
	

*required
	

The blockchain domain.

callback
	

function
	

	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

mqEndpoints
	

array
	

Description: Contains an error or an object with an array of message queue endpoints.
Function setBDNSHosts(bdnsHosts)

Description: Sets up the list of hosts.

Name
	

Type
	

Value
	

Description

bdnsHosts
	

JSON object
	

*required
	

Contains the hosts and associated data.
