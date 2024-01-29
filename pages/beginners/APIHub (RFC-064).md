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


{: .no_toc }


{: .draft }
A period when the community can review the RFC (commnent Docs)


**Document Maintainers: Andi Gabriel Tan 2022. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright**

Copyright © 2018-2022 Axiologic Research and Contributors.
This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)



<!-- TOC -->
  * [Abstract](#abstract-)
  * [1. System functions](#1-system-functions-)
  * [2. Error](#2-error-)
    * [2.1 Function createOpenDSUErrorWrapper(message, err, otherErrors)](#21-function-createopendsuerrorwrappermessage-err-othererrors)
    * [2.2 Function OpenDSUSafeCallback(callback)](#22-function-opendsusafecallbackcallback)
    * [2.3 Function observeUserRelevantMessages(type, callback)](#23-function-observeuserrelevantmessagestype-callback)
    * [2.4 Function unobserveUserRelevantMessages(type, callback)](#24-function-unobserveuserrelevantmessagestype-callback)
    * [2.5 Function printOpenDSUError(...args)](#25-function-printopendsuerrorargs)
    * [2.6 Function registerMandatoryCallback(callback, timeout)](#26-function-registermandatorycallbackcallback-timeout)
    * [2.7 Function reportDevRelevantInfo(message)](#27-function-reportdevrelevantinfomessage)
    * [2.8 Function reportUserRelevantError(message, err, showIntermediateErrors)](#28-function-reportuserrelevanterrormessage-err-showintermediateerrors)
    * [2.9 Function reportUserRelevantInfo(message)](#29-function-reportuserrelevantinfomessage)
    * [2.10 Function reportUserRelevantWarning(message)](#210-function-reportuserrelevantwarningmessage)
    * [2.11 DB_INSERT_EXISTING_RECORD_ERROR](#211-db_insert_existing_record_error)
  * [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->





##  Abstract ##

This API space allows the user to set up custom error reporting.

## 1. System functions ##


| Functions              | Description                                               |
|:-----------------------|:----------------------------------------------------------|
| getFS                  | This function is used to load the File System (fs) module |
| getPath                | This function is used to load the path module.            |
| getEnvironmentVariable | Get the value of the selected environment variable.       |
| setEnvironmentVariable | Set a value for the selected environment variable.        |



## 2. Error ##


###  2.1 Function createOpenDSUErrorWrapper(message, err, otherErrors)
**Description**: Create a new error wrapper.

| Name         | Type          | Value      | Description                                                 |
|--------------|---------------|------------|-------------------------------------------------------------|
| message      | string        | *required  | The message that will be sent in case there is an error.    |
| err          | Error object  |            | The error you want to create a wrapper for (previous error).|
| otherErrors  |               |            | Other errors you want to store in the ErrorWrapper.                                                           |



**Returns**

| Name                                             | Description                                                                                                                                                                                                                                        |
|--------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ErrorWrapper object                              | A new ErrorWrapper object containing information about an issue, such as the previous error that led to the actual error, a debug message, and other information the developer judged relevantly.>see operations available on ErrorWrapper object. 




### 2.2 Function OpenDSUSafeCallback(callback)
**Description**: Verify that there is a callback. If not, report an error or a warning.

| Name       | Type     | Value     | Description                      |
|------------|----------|-----------|----------------------------------|
| callback   | function | *required | The callback you have to verify.  


**Returns**

| Name                         | Description                                                                          |
|------------------------------|--------------------------------------------------------------------------------------|
| Callback function or nothing | The valid callback if there is one. Else just print an error message in the console. |




###  2.3 Function observeUserRelevantMessages(type, callback)
**Description**: Register to one observer (error, info, warn, or dev) to get the associated messages.

| Name     | Type     | Value     | Description                                                                                              |
|----------|----------|-----------|----------------------------------------------------------------------------------------------------------|
| type     | string   | *required | The type of message you want to push callback. Possible error types are: ‘error’, ‘info’, ‘warn’, ‘dev’. |
| callback | function | *required |                                                                                                          |




### 2.4 Function unobserveUserRelevantMessages(type, callback)
**Description**: Stop observing and receiving associated messages.

| Name     | Type     | Value      | Description                                                                |
|----------|----------|------------|----------------------------------------------------------------------------|
| type     | string   | *required  | Observer type can be one of the following: ‘error’, ‘info’, ‘warn’, ‘dev’. |
| callback | function | *required  |                                                                            |





### 2.5 Function printOpenDSUError(...args)
**Description**: Print openDSU errors.

| Name  | Type | Value | Description                                              |
|-------|------|-------|----------------------------------------------------------|
| …args |      |       | Array containing the ErrorWraper that you want to print. |





### 2.6 Function registerMandatoryCallback(callback, timeout)
**Description**: Make sure that callback is called within the specified time (5s by default).

| Name     | Type     | Value            | Description                                                                |
|----------|----------|------------------|----------------------------------------------------------------------------|
| callback | function | *required        | The callback that is mandatory.                                            |
| timeout  | number   | 5000 by default  | The number of milliseconds in which the callback is expected to be called. |




### 2.7 Function reportDevRelevantInfo(message)
**Description**: Report additional information about the error to developers.

| Name    | Type  | Value     | Description                                            |
|---------|-------|-----------|--------------------------------------------------------|
| message | string| *required | Additional information about the error for developers. |




### 2.8 Function reportUserRelevantError(message, err, showIntermediateErrors)
**Description**: Report an error to the user in the console.

| Name                   | Type         | Value     | Description                                              |
|------------------------|--------------|-----------|----------------------------------------------------------|
| message                | string       | *required | The message that will be sent in case there is an error. |
| err                    | Error object |           | The error you want to create a wrapper for.              |
| showIntermediateErrors | boolean      |           | Set true if you want to display intermediate errors.     |




### 2.9 Function reportUserRelevantInfo(message)
**Description**: Report additional information about the error to users.

| Name    | Type   | Value     | Description                                       |
|---------|--------|-----------|---------------------------------------------------|
| message | string | *required | Additional information about the error for users. |





### 2.10 Function reportUserRelevantWarning(message)
**Description**: Report a warning to the user in the console.

| Name    | Type   | Value     | Description                                              |
|---------|--------|-----------|----------------------------------------------------------|
| message | string | *required | The message that will be sent in case there is an error. |




### 2.11 DB_INSERT_EXISTING_RECORD_ERROR
**Description**: A predefined error with the following message: "Trying to insert into the existing record".



**Contributors**  

1. [Axiologic Research](www.axiologic.net): New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the [www.opendsu.com](www.opendsu.com) site.
2. [PharmaLedger Project](www.pharmaledger.eu): Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.
3. [PrivateSky Research Project](www.privatesky.xyz):  MIT licensed content accordingly with the contracts. [https://profs.info.uaic.ro/~ads/PrivateSky/](https://profs.info.uaic.ro/~ads/PrivateSky/)  



## Annex 1. Contributors

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
