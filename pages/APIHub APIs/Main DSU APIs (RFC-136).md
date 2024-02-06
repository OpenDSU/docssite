---
title: Main DSU APIs 
layout: home
parent: OpenDSU APIHub APIs
nav_order: 17
---

Main DSU APIs (RFC-136)

Abstract
1. Get Main DSU        

The GetMainDSU service returns the static DSU that can be set as the main context in various scenarios. In order to set the Main DSU, on the first API call that will occur on this endpoint, a DSU will be created from the provided environment.json file. This file is located in the server root folder.

	

/getSSIForMainDSU
1.1. Responses

Status Code
	

Description

200
	

Operation handled with success. The Key SSI for the mainDSU will be returned.

500
	

Failed to set or get the Main DSU.

