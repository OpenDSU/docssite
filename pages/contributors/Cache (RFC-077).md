---
title: Cache 
layout: home
parent: OpenDSU Contributors
nav_order: 18
---

Cache (RFC-077)

Abstract

This API space provides utilities for caching DSUs in the personal environment.
1. Cache functions
Function getCacheForVault(storeName, lifetime)

Description: Return the cache that is set up in your environment. In case it does not exist, it will create one.

Name
	

Type
	

Value
	

Description

storeName
	

string
	

*required
	

The name of your storage.

lifetime
	

number (ms)
	

	

Gives a lifetime to the new cache that will be created in case it does not exist.

Returns

Name
	

Description

MemoryCache, FSCache or IndexDBCache object
	

The cache setup for your environment is returned.

>see operations available on caches 
Function getMemoryCache(storeName)

Description: Create a new MemoryCache Object and add it to the Stores array.

Name
	

Type
	

Value
	

Description

storeName
	

string
	

*required
	

the name of your storage

Returns

Name
	

Description

MemoryCache  object
	

A new cache is set up in your environment and is returned directly.

>see operations available on caches 

Here is the list of operations available on different types of cache:

Type
	

Description

FSCache
	

The FSCache is a cache stored inside DSUs.

IndexDBCache
	

The IndexDBCache is stored inside a noSQL database.

MemoryCache
	

The MemoryCache is stored in memory.

All of these objects have the same functions: get, put, set (and delete for IndexDBCache) to interact with the cache, even though the functions look different due to the different types of storage.

Functions
	

Description

get
	

Get the content identified by your key in the cache.

put
	

Store a key/value pair in the cache.

set
	

(equal to put).
Function get(key, callback)

Description: Store a key/value pair in the cache.

Name
	

Type
	

Value
	

Description

key
	

string
	

*required
	

The key from which you want to get the associated value.

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

content
	

String
	

Description: Contains a message and the error./ The content identified by the key.
Function put(key, value, callback)

Description: Store a key/value pair in the cache.

Name
	

Type
	

Value
	

Description

key
	

string
	

*required
	

The key you want to associate value to.

value
	

string
	

*required
	

The new value for the key.

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
Function set(key, value, callback)

Description: Get the full content of the table and asynchronously return an array with all the  records satisfying the condition tested by the filterFunction.

Name
	

Type
	

Value
	

Description

key
	

string
	

*required
	

The key you want to associate value to.

value
	

function
	

*required
	

The new value for the key.

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

