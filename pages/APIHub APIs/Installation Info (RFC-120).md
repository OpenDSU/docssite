---
title: Installation Info 
layout: home
parent: OpenDSU APIHub APIs
nav_order: 1
---

Installation Info (RFC-120)

1
Abstract

This RFC provides information about the current APIHub running instance, along with details about the current workspace and OpenDSU-SDK installation.
1. Installation details

The service presents resource usages like userCPUTime, systemCPUTime, uptime and a number of reads/writes using FS. Also, the commit numbers of the workspace and OpenDSU-SDK installation are provided.

	

/installation-details/
1.1. Responses

Status Code
	

Description

200
	

Returns details about current resource usages as well as the workspace and OpenDSU-SDK commits numbers.
1.1.1 Schema

{

"opendsu-sdk": {

  "commitNo": "string",

  "commitMessage": "string"

},

"workspace": {

  "commitNo": "string",

  "commitMessage": "string"

},

"resourceUsage": {

  "userCPUTime": 2718000,

  "systemCPUTime": 906000,

  "maxRSS": 235008,

  "sharedMemorySize": 0,

  "unsharedDataSize": 0,

  "unsharedStackSize": 0,

  "minorPageFault": 0,

  "majorPageFault": 226256,

  "swappedOut": 0,

  "fsRead": 708,

  "fsWrite": 27,

  "ipcSent": 5,

  "ipcReceived": 2,

  "signalsCount": 0,

  "voluntaryContextSwitches": 0,

  "involuntaryContextSwitches": 0,

  "uptime": 47.777584

}

}

Annex 1. Contributors