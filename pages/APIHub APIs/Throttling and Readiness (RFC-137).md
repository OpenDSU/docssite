---
title: Throttling and Readiness 
layout: home
parent: OpenDSU APIHub APIs
nav_order: 18
---

Throttling and Readiness (RFC-137)

Abstract

Provides information for the readiness of APIHub to accept requests. The token bucket algorithm is used to implement the management of requests and to avoid any possible flood requests that may come from a DDoS-type attack.
1. Ready Probe

For the throttled APIHub instances, the service responds with the configured token limit and the remaining tokens. If the limit is exceeded, the 429 HTTP status code is returned.

	

/ready-probe
1.1. Responses Headers

Name
	

Type
	

Value
	

Description

X-RateLimit-Limit
	

integer
	

	

Request tokens limit.

Example: 60000.

X-RateLimit-Remaining
	

integer
	

	

Remaining tokens.

Example:59900.
1.2 Responses

Status Code
	

Description

200
	

Returns information about current throttling numbers or the string “Server ready” if the APIHub instance is not using the rate limit mechanism. (see 1.2.1 example).

429
	

Rate limit exceeded.

500
	

Integral throttling middleware error.
1.2.1 Example: Application/JSON

{

 "remainingTokens": 59900,

 "tokenLimit": 60000

}

