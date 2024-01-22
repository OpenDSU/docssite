---
title: Resolver 
layout: home
parent: Open DSU Advanced
nav_order: 9
---

Resolver (RFC-065)


Abstract

The “Resolver” API space allows developers to create DSU instances by resolving KeySSIs. A DSU instance is similar to a file system where users can read and/or write files if they possess the right key. All operations available on DSUs are presented in DSU Object (RFC-063).
1. Resolver functions

//Load openDSU environment

require("../privatesky/psknode/bundles/openDSU");

//Load openDSU SDK

const opendsu = require("opendsu");

//Load resolver library

const resolver = opendsu.loadApi("resolver");

//Load keyssi library

const keyssispace = opendsu.loadApi("keyssi");

//Build the SeedSSI that will represent our DSU

const seedSSI = keyssispace.createSeedSSI('default');

//Create a DSU using resolver

resolver.createDSU(seedSSI, (err, dsuInstance) =>{

  dsuInstance.getKeySSIAsString((err, dsussi) => {

      resolver.loadDSU(dsussi, (err, dsu) => {

       invalidateDSUCache(seedSSI);

      });

  });

});

How to use
Function createDSU(templateKeySSI, options, callback)

Description: This function allows the developer to create a new DSU object using a KeySSI. The DSU will always stay associated with the key it was created with and its derivation. The DSU instance is returned in the callback.

Name
	

Type
	

Value
	

Description

templateKeySSI
	

KeySSI object
	

*required
	

options
	

JSON object
	

	

Set to undefined by default.

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

dsu
	

DSU instance
	

Description: Contains a message and the error. / Reference to the DSU instance that was just created.
Function createDSUForExistingSSI(ssi, options, callback)

Description: This function creates a DSU object using a KeySSI, similar to the createDSU function, but with the options “useSSIAsIdentifier=true”.

Name
	

Type
	

Value
	

Description

ssi
	

string
	

*required
	

The ssi identifier you want to use to create your DSU (must be in the ssi format).

options
	

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
	

ErrorWrapper object
	

dsu
	

DSU instance
	

Description: Contains a message and the error./ Reference to the DSU instance that was just created.
Function getDSUHandler(dsuKeySSI)

Description: Create a special environment to boot the DSU of your choice (using a keySSI) inside a mini-container that we call a thread. The container will be isolated in a separate memory space. This DSU handler can also boot remotely and provide the basic operations that are available for DSUs. The main purpose of DSU handlers is to interact with DSUs more easily.

Name
	

Type
	

Value
	

Description

dsuKeySSI
	

KeySSI object
	

	

KeySSI corresponds to the DSU from which you want to get a handler.

Returns

Name
	

Type
	

Description

dsuHandler
	

DSUHandler instance
	

Reference to the DSU handler corresponding to your KeySSI.
Function invalidateDSUCache(dsuKeySSI)

Description: DSU cache corresponding to the dsuKeySSI is invalidated by setting its value to undefined.

Name
	

Type
	

Value
	

Description

dsuKeySSI
	

KeySSI object
	

	

KeySSI corresponds to the DSU from which you want to invalidate the cache.

Returns: This function does not return anything.
Function loadDSU(keySSI, options, callback)

Description: This function loads an existing DSU object using a KeySSI. The DSU is loaded from the cache if there is one, else it is loaded from the brick storage and stored in the cache. The loaded DSU instance is returned in the callback.

Name
	

Type
	

Value
	

Description

keySSI
	

KeySSI object
	

*required
	

The keySSI from which you want to load a DSU instance.

options
	

JSON object
	

	

Set to undefined by default.

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

dsu
	

DSU instance
	

Description: Contains a message and the error. / Reference to the DSU instance that was just loaded.
Function registerDSUFactory(type, factory)

Description: Register a DSU type in the factory of your choice.

Name
	

Type
	

Value
	

Description

type
	

string
	

*required
	

The DSU type you want to register.

factory
	

DSUFactory object
	

	

The factory into which you want to register a new type of DSU.

Returns: This function does not return anything.
Function createDSUx(domain, ssiType, options, callback)

Description: This function allows the developer to create a new DSU object.

Name
	

Type
	

Value
	

Description

domain
	

string
	

	

The blockchain domain where you want to create the DSU.

ssiType
	

	

	

options
	

JSON object
	

	

callback
	

function
	

	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

dsu
	

DSU instance
	

Description: Contains a message and the error. / Reference to the DSU instance that was just created.
Function createSeedDSU(domain, options, callback)

Description: This function allows the developer to create a new SeedDSU object.

Name
	

Type
	

Value
	

Description

domain
	

string
	

	

The blockchain domain where you want to create the seedDSU.

options
	

JSON object
	

	

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

dsu
	

DSU instance
	

Description: Contains a message and the error. / Reference to the seedDSU that was just loaded.
Function createConstDSU(domain, constString, options, callback)

Description: This function allows the developer to create a new ConstDSU object.

Name
	

Type
	

Value
	

Description

domain
	

string
	

	

The blockchain domain where you want to create the constDSU.

constString
	

string
	

	

options
	

JSON object
	

	

callback
	

function
	

	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

dsu
	

DSU instance
	

Description: Contains a message and the error. / Reference to the constDSU that was just created.
Function createArrayDSU(domain, ssiType, options, callback)

Description: This function allows the developer to create a new DSU array.

Name
	

Type
	

Value
	

Description

domain
	

string
	

	

The blockchain domain where you want to create the DSU.

ssiType
	

	

	

options
	

JSON object
	

	

callback
	

function
	

	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

dsu
	

DSU instance
	

Description: Contains a message and the error. / Reference to the DSU array that was just created.
Function loadDSUVersion(keySSI, versionHashlink, options, callback)

Description: Load the DSU version for a given keySSI and version Hashlink.

Name
	

Type
	

Value
	

Description

keySSI
	

keySSI object
	

	

The KeySSI for the DSU you want to load.

versionHashlink
	

	

	

options
	

JSON object
	

	

callback
	

function
	

	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

dsu
	

DSU instance
	

Description: Contains a message and the error. / Reference to the DSU instance that was just loaded.
Function createDSUForExistingSSI(ssi, options, callback)

Description: Create a DSU for an already existing SSI.
Function createVersionlessDSU(filePath, encryptionKey, domain, callback)

Description: Create a versionless DSU.
Function dsuExists(keySSI, callback)

Description: Check if a DSU exists for the given KeySSI.