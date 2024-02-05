---
title: APIHub Fixed URLs 
layout: home
parent: Open DSU Advanced
nav_order: 15
---

# **APIHub Fixed URLs**

{: .accepted }
The proposal has been accepted and has an implementation.


**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)
 
<!-- TOC -->
* [Abstract](#abstract)
* [1. Implementation Specifications](#1-implementation-specifications)
* [2. Mapping Engine Implications](#2-mapping-engine-implications)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->

# Abstract

<p style='text-align: justify;'>FixedURL is an APIHub component that can be used to increase the scalability and performance of the APIHub. FixedURL can be programmatically activated to precompute a URL.
</p>

# 1. Implementation Specifications

<p style='text-align: justify;'>The FixedURL Component in APIHub provides a way to minimize the response time for requests that are predefined (to be served as static content). By static serving, we understand the possibility of pre-calculating the result. Of course, this method will not work for all requests, and it is the responsibility of the programmer to work with this optimization system.
</p>

<div style="text-align:center;">
    <img alt="" src="" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 1: Precomputed</b></p>
</div>

<p style='text-align: justify;'>In general, the architecture can look as shown in figures 1 and 2. Each request to APIHub first goes through SSO (Single Sign-On) verification, if it is activated. Then, it goes through the FixedURL component, which registers a middleware in the middlewares chain that handles the requests. FixedURL is registered at the beginning of the middleware chain.
</p>

<p style='text-align: justify;'>The FixedURL component checks that it has the precalculated result for the current URL, and if it has it, it serves it without going through the other middlewares registered in APIHub. If the URL is not registered, then other middlewares in the chain have the opportunity to solve the request.
</p>

<p style='text-align: justify;'>The FixedURL component also exposes three endpoints that will be used by programmers to precalculate their results and manage the precalculated content that FixedURL stores. The FixedURL component can be seen from a certain point of view as a cache, but, as we can see, it provides a more sophisticated and different mechanism for content invalidation than what is traditionally called a cache. Caching is generally based on content expiration.
</p>

<div style="text-align:center;">
    <img alt="" src="" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 2: Unknown request</b></p>
</div>


| Endpoints:                           | Endpoints:                         |
|:-------------------------------------|:-----------------------------------|
| PUT /deactivateRelatedFxedURLs/      | Body: **RelatedURLExpression**     |
| PUT /activateRelatedFxedURLs/        | Body: **RelatedURLExpression**     |
| PUT  /registerFixedURLs/             | Body: a list relativeURLBase64     |

The three endpoints are:


* registerFixedURL, which receives an HTTP Put command and receives, in the body, a list of URLs that will be treated as relevant for the FixedURLs component.

the other two endpoints are:
* activatedRelatedFixedURLs
* deactivatedRelatedFixedURLs

<p style='text-align: justify;'>The latter two receive in the body an expression as a wild card that allows activation and deactivation of the storage mechanism in FixedURLs for several URLs affected by the current operation. It depends on how programmers who use the system call these endpoints.
</p>

<p style='text-align: justify;'>To better understand the functioning of these endpoints, we present a FixedURL Component Structure in the next diagram. It consists of three parts. On the one hand, we have the “Storage”, a simple folder that maps between an URL in Base64 and precalculated content. Then, we have two components that are displayed in figures as an “Embedded Database” (a Loki embedded database is used) to allow quick queries on the content of these subcomponents. The “Tasks” subcomponent keeps a list of URLs that need to be renewed and recalculated, and the “History” subcomponent keeps a list of all URLs that will be precalculated and will be fixed.
</p>

<p style='text-align: justify;'>For any URL that is found to be FixedURL/Storage pre-calculated, the content is returned and fixed at an expiration time given by FixedURLExpiry in the APIHub configuration. Generally, all URLs will be checked not to be pre-calculated.
</p>

<div style="text-align:center;">
    <img alt="" src="" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b>Figure 3: FixedURL Component Structure</b></p>
</div>


<p style='text-align: justify;'>For requests starting with /deactivateFixedURL, /activateFixedURL or /registerFixedURL, we have a behavior that is specified in the following paragraphs.
</p>

<p style='text-align: justify;'>When calling /deactivateFixedURL, all history entries based on RelatedURLExpression are marked as deactivated. Therefore, this expression can be viewed as a wild card or as a regular expression that is matched at a URL’s number from history, which needs to be deactivated. Thus, all content from the storage corresponding to the affected URL will be deleted from Storage and Tasks by this deactivation. This way, any other request that comes to APIHub or through the FixedURL middleware will no longer be found in FixedURL/Storage and will be served the slow way (by going to the corresponding middleware).
</p>

<p style='text-align: justify;'>When activateFixedURL is called, it activates the entries from FixedURL/History and creates tasks for these URLs. When calling registerFixedURL, these URLs are marked in History to account for activation and deactivation.
</p>

<div style="text-align:center;">
    <img alt="" src="" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b> Figure 4: Internal Timer</b></p>
</div>


<p style='text-align: justify;'>The Task idea means that a URL is taken from the list of available Tasks and resolved by the corresponding ApiHub middleware. A request is made when the result is received. It is stored in FixedURL/Storage, and then the next task is started (if it exists).
</p>

<p style='text-align: justify;'>Once a second, the FixedURL component tries to start a Task if it exists. If another Task is currently being executed, then no other task gets started. After a Task is successfully executed, it is deleted from the Tasks subcomponent.
</p>

# 2. Mapping Engine Implications

<p style='text-align: justify;'>FixedURL is intended to work with the Mapping Engine component, and we exemplify a sequence diagram to describe how those APIHub components are intended to work together.
</p>


<div style="text-align:center;">
    <img alt="" src="" class="imgMain" style="max-width: 69%; margin-left: 0px;"/>
    <p><b> Figure 5: Mapping Engine implications </b></p>
</div>


<p style='text-align: justify;'>A Client (a Wallet or other software) is requesting a specific operation (an update) that can affect several “fixed” URLs.
</p>

<p style='text-align: justify;'>In the first step, the Mapping Engine should deactivate all the URLs it believes will be affected by the new update (so that the old content is no longer served). Mapping Engine has  a transaction concept.
</p>

<p style='text-align: justify;'>Theoretically, deactivation should be done very quickly and the URLs should deactivate as soon as possible any type of cashing, any storage or pre-calculation that could be affected by the update. The failure of deactivation should provoke an abort for the Mapping Engine transaction. So, if the deactivation did not work, it is better to abort and return an error to the client. If a deactivation was successful, the Mapping Engine does its operations, and at the end of the transaction, it should record or re-record the URLs affected by this update operation. Depending on the update, the business logic of the update operation Mapping Engine should know all the URLs that could ever be affected and register them.
</p>

<p style='text-align: justify;'>After the commit is successful, Mapping Engine will return success to the Client, since the operation is complete. Only then, the activation of the URLs will be requested.
</p>

<p style='text-align: justify;'>As shown in figure 4, the precalculation of results happens over time, in the background, without asking any client to wait for it to finish. Tasks are taken, one by one, and solved. In the meantime, they have been deleted from Storage, and if there are requests for affected URLs, they will be served without FixedURL optimization.
</p>

<p style='text-align: justify;'>In conclusion, while the FixedURL Component is made to run in tandem with Mapping Engine, OpenDSU programmers could also deploy other middleware in APIHub and take advantage of this mechanism.

</p>



**Contributors**


1. <p style='text-align: justify;'><a href="www.axiologic.net">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="www.opendsu.com">www.opendsu.com</a> site.


# Annex 1. Contributors

| **Current Editors**                   | **Email**                                  |
|:--------------------------------------|:-------------------------------------------|
| Sînică Alboaie                        | sinica.alboaie@axiologic.net               |
| Cosmin Ursache                        | cosmin@axiologic.net                       |
| Teodor Lupu                           | teodor@axiologic.net                       |
| Andi-Gabriel Țan                      | andi@axiologic.net                         |
| **Contributors Axiologic Research**   | **Email**                                  |
| Sînică Alboaie                        | sinica.alboaie@axiologic.net               |
| Cosmin Ursache                        | cosmin@axiologic.net                       |
| Andi-Gabriel Țan                      | andi@axiologic.net                         |
| Teodor Lupu                           | teodor@axiologic.net                       |
