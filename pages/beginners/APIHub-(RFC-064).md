---
title: Error Reporting
layout: home
parent: OpenDSU for Beginners
nav_order: 4
---
<style>
.imgMain{
    display.block;
    margin-left:70px;
    margin-right:auto;
} 
</style>

# **Error Reporting (RFC-064)**
{: .no_toc }


{: .draft }
A period when the community can review the RFC (commnent Docs)


**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright**© 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)



<!-- TOC -->
* [Abstract](#abstract-)
* [1. System functions](#1-system-functions-)
* [2. Error](#2-error-)
  * [Function createOpenDSUErrorWrapper(message, err, otherErrors)](#function-createopendsuerrorwrappermessage-err-othererrors)
  * [Function OpenDSUSafeCallback(callback)](#function-opendsusafecallbackcallback)
  * [Function observeUserRelevantMessages(type, callback)](#function-observeuserrelevantmessagestype-callback)
  * [Function unobserveUserRelevantMessages(type, callback)](#function-unobserveuserrelevantmessagestype-callback)
  * [Function printOpenDSUError(...args)](#function-printopendsuerrorargs)
  * [Function registerMandatoryCallback(callback, timeout)](#function-registermandatorycallbackcallback-timeout)
  * [Function reportDevRelevantInfo(message)](#function-reportdevrelevantinfomessage)
  * [Function reportUserRelevantError(message, err, showIntermediateErrors)](#function-reportuserrelevanterrormessage-err-showintermediateerrors)
  * [Function reportUserRelevantInfo(message)](#function-reportuserrelevantinfomessage)
  * [Function reportUserRelevantWarning(message)](#function-reportuserrelevantwarningmessage)
  * [DB_INSERT_EXISTING_RECORD_ERROR](#db_insert_existing_record_error)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->





#  **Abstract** 

This API space allows the user to set up custom error reporting.

# **1. System functions** 


| **Functions**                                                                                           | **Description**                                                                                            |
|:--------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------|
| <a href="https://www.opendsu.org/pages/contributors/System-(RFC-079).html">getFS</a>                  | This function is used to load the <a href="https://nodejs.org/api/fs.html#fs_file_system"></a> (fs) module |
| <a href="https://www.opendsu.org/pages/contributors/System-(RFC-079).html">getPath</a>                | This function is used to load the path module.                                                             |
| <a href="https://www.opendsu.org/pages/contributors/System-(RFC-079).html">getEnvironmentVariable</a> | Get the value of the selected environment variable.                                                        |
| <a href="https://www.opendsu.org/pages/contributors/System-(RFC-079).html">setEnvironmentVariable</a> | Set a value for the selected environment variable.                                                         |



# **2. Error** 


## Function createOpenDSUErrorWrapper(message, err, otherErrors)

**Description**: Create a new error wrapper.

| **Name**      | **Type**       | **Value**   | **Description**                                              |
|:--------------|:---------------|:------------|:-------------------------------------------------------------|
| message       | string         | *required   | The message that will be sent in case there is an error.     |
| err           | Error object   |             | The error you want to create a wrapper for (previous error). |
| otherErrors   |                |             | Other errors you want to store in the ErrorWrapper.          |



**Returns**

| **Nam**e            | **Description**                                                                                                                                                                                                                                                                                                                     |
|:--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ErrorWrapper object | A new ErrorWrapper object containing information about an issue, such as the previous error that led to the actual error, a debug message, and other information the developer judged relevantly.><a href="https://www.opendsu.org/pages/contributors/Cache-(RFC-077).html">see operations available on ErrorWrapper object </a>. |





## Function OpenDSUSafeCallback(callback)

**Description**: Verify that there is a callback. If not, report an error or a warning.

| **Name**    | **Type**  | **Value**  | **Description**                    |
|:------------|:----------|:-----------|:-----------------------------------|
| callback    | function  | *required  | The callback you have to verify.   |


**Returns**

| Name                         | Description                                                                          |
|------------------------------|--------------------------------------------------------------------------------------|
| Callback function or nothing | The valid callback if there is one. Else just print an error message in the console. |




##  Function observeUserRelevantMessages(type, callback)

**Description**: Register to one observer (error, info, warn, or dev) to get the associated messages.

| **Name**  | **Type**  | **Value**  | **Description**                                                                                           |
|:----------|:----------|:-----------|:----------------------------------------------------------------------------------------------------------|
| type      | string    | *required  | The type of message you want to push callback. Possible error types are: ‘error’, ‘info’, ‘warn’, ‘dev’.  |
| callback  | function  | *required  |                                                                                                           |




##  Function unobserveUserRelevantMessages(type, callback)

**Description**: Stop observing and receiving associated messages.

| **Name**  | **Type**  | **Value**   | **Description**                                                             |
|:----------|:----------|:------------|:----------------------------------------------------------------------------|
| type      | string    | *required   | Observer type can be one of the following: ‘error’, ‘info’, ‘warn’, ‘dev’.  |
| callback  | function  | *required   |                                                                             |





##  Function printOpenDSUError(...args)

**Description**: Print openDSU errors.

| **Name** | **Type** | **Value** | **Description**                                           |
|:---------|:---------|:----------|:----------------------------------------------------------|
| …args    |          |           | Array containing the ErrorWraper that you want to print.  |





##  Function registerMandatoryCallback(callback, timeout)

**Description**: Make sure that callback is called within the specified time (5s by default).

| **Name**  | **Type**  | **Value**         | **Description**                                                             |
|:----------|:----------|:------------------|:----------------------------------------------------------------------------|
| callback  | function  | *required         | The callback that is mandatory.                                             |
| timeout   | number    | 5000 by default   | The number of milliseconds in which the callback is expected to be called.  |




## Function reportDevRelevantInfo(message)

**Description**: Report additional information about the error to developers.

| **Name** | **Type** | **Value**  | **Description**                                         |
|:---------|:---------|:-----------|:--------------------------------------------------------|
| message  | string   | *required  | Additional information about the error for developers.  |




##  Function reportUserRelevantError(message, err, showIntermediateErrors)

**Description**: Report an error to the user in the console.

| **Name**                | **Type**      | **Value**  | **Description**                                           |
|:------------------------|:--------------|:-----------|:----------------------------------------------------------|
| message                 | string        | *required  | The message that will be sent in case there is an error.  |
| err                     | Error object  |            | The error you want to create a wrapper for.               |
| showIntermediateErrors  | boolean       |            | Set true if you want to display intermediate errors.      |




##  Function reportUserRelevantInfo(message)

**Description**: Report additional information about the error to users.

| **Name** | **Type** | **Value**  | **Description**                                    |
|:---------|:---------|:-----------|:---------------------------------------------------|
| message  | string   | *required  | Additional information about the error for users.  |





##  Function reportUserRelevantWarning(message)

**Description**: Report a warning to the user in the console.

| **Name** | **Type** | **Value**  | **Description**                                           |
|:---------|:---------|:-----------|:----------------------------------------------------------|
| message  | string   | *required  | The message that will be sent in case there is an error.  |




##  DB_INSERT_EXISTING_RECORD_ERROR

**Description**: A predefined error with the following message: "Trying to insert into the existing record".



**Contributors**  

1. <p style='text-align: justify;'><a href="https://www.axiologic.net/">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="https://www.opendsu.org/">www.opendsu.org</a> site.

2. <p style='text-align: justify;'><a href="https://pharmaledger.org/">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.

3. PrivateSky Research Project: MIT licensed content accordingly with the contracts. 
<a href="https://profs.info.uaic.ro/~ads/PrivateSky/"> https://profs.info.uaic.ro/~ads/PrivateSky/</a>



# **Annex 1. Contributors**

| **Current Editors**                 | **Email**                                                   |
|:------------------------------------|:------------------------------------------------------------|
| Sînică Alboaie                      | sinica.alboaie@axiologic.net                                |
| Cosmin Ursache                      | cosmin@axiologic.net                                        |
| Teodor Lupu                         | teodor@axiologic.net                                        |
| Andi-Gabriel Țan                    | andi@axiologic.net                                          |
| **Contributors Axiologic Research** | **Email**                                                   |
| Adrian Ganga                        | adrian@axiologic.net                                        |
| Andi-Gabriel Țan                    | andi@axiologic.net                                          |
| Cosmin Ursache                      | cosmin@axiologic.net                                        |
| Daniel Sava                         | daniel@axiologic.net                                        |
| Nicoleta Mihalache                  | nicoleta@axiologic.net                                      |
| Teodor Lupu                         | teodor@axiologic.net                                        |
| Valentin Gérard                     | valentin@axiologic.net                                      |
| **PrivateSky Contributors**         | **Email**                                                   |
| Alex Sofronie                       | alsofronie@gmail.com (DPO)                                  |
| Cosmin Ursache                      | cos.ursache@gmail.com (UAIC)                                |
| Daniel Sava                         | sava.dumitru.daniel@gmail.com (HVS, AQS)                    |
| Daniel Visoiu                       | visoiu.daniel.g@gmail.com (SGiant)                          |
| Lenuța Alboaie                      | lalboaie@gmail.com (UAIC)                                   |
| Rafael Mastaleru                    | rafael@rms.ro (RMS)                                         |
| Sînică Alboaie                      | salboaie@gmail.com (UAIC)                                   |
| Vlad Balmos                         | vlad.balmos@gmail.com (Code932)                             |
| **PharmaLedger Contributors**       | **Email**                                                   |
| Ana Balan                           | bam@rms.ro (RMS)                                            |
| Bogdan Mastahac                     | mab@rms.ro (RMS)                                            |
| Cosmin Ursache                      | cos@rms.ro (RMS)                                            |
| Rafael Mastaleru                    | raf@rms.ro (RMS)                                            |
