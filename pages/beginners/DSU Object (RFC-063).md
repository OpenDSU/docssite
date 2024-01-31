---
title: DSU Object 
layout: home
parent: OpenDSU for Beginners
nav_order: 3
---


<style>
.imgMain{
    display.block;
    margin-left:70px;
    margin-right:auto;
} 
</style>

# DSU Object (RFC-063)
{: .no_toc }


{: .feedback}
A period when the community can review the RFC (comment Docs).


**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright**

Copyright © 2018-2024 Axiologic Research and Contributors.
This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)

<!-- TOC -->
* [**DSU Object (RFC-063)**](#dsu-object-rfc-063)
* [Abstract](#abstract)
* [Overview](#overview)
* [Creating and Configuring a DSU Instance](#creating-and-configuring-a-dsu-instance)
* [Concurrency and Synchronization](#concurrency-and-synchronization)
* [File I/O Operations with DSU Objects](#file-io-operations-with-dsu-objects)
  * [Global overview and options](#global-overview-and-options)
  * [Methods querying files & folders of a DSU object](#methods-querying-files--folders-of-a-dsu-object)
    * [Function getArchiveForPath(dsuPath, callback)](#function-getarchiveforpathdsupath-callback)
    * [Function listFiles(dsuPath, options, callback)](#function-listfilesdsupath-options-callback)
    * [Function listFolders(dsuPath, options, callback)](#function-listfoldersdsupath-options-callback)
    * [Function listMountedDossiers(dsuPath, callback)](#function-listmounteddossiersdsupath-callback)
    * [Function readDir(dsuPath, options, callback)](#function-readdirdsupath-options-callback)
  * [Methods for reorganising files & folders inside a DSU object](#methods-for-reorganising-files--folders-inside-a-dsu-object)
    * [Function cloneFolder(srcPath, destPath, options, callback)](#function-clonefoldersrcpath-destpath-options-callback)
    * [Function createFolder(dsuPath, options, callback)](#function-createfolderdsupath-options-callback)
    * [Function delete(dsuPath, options, callback)](#function-deletedsupath-options-callback)
    * [Function rename(srcPath, destPath, options, callback)](#function-renamesrcpath-destpath-options-callback)
  * [Methods of reading or writing data in files of a DSU object](#methods-of-reading-or-writing-data-in-files-of-a-dsu-object)
    * [Function appendToFile(dsuPath, data, options, callback)](#function-appendtofiledsupath-data-options-callback)
    * [Function createReadStream(dsuPath, options, callback)](#function-createreadstreamdsupath-options-callback)
    * [Function readFile(dsuPath, options, callback)](#function-readfiledsupath-options-callback)
    * [Function createBigFileReadStreamWithRange(dsuPath, range, options, callback)](#function-createbigfilereadstreamwithrangedsupath-range-options-callback)
    * [Function writeFile(dsuPath, data, options, callback)](#function-writefiledsupath-data-options-callback)
  * [Other functions](#other-functions)
    * [Function refresh(callback)](#function-refreshcallback)
    * [Function stat(dsuPath, callback)](#function-statdsupath-callback)
* [Batch operations on DSUs](#batch-operations-on-dsus)
  * [Controlling batch processe](#controlling-batch-processe)
    * [Function batchInProgress()](#function-batchinprogress)
    * [Function beginBatch()](#function-beginbatch)
    * [Function startOrAttachBatch(callback)](#function-startorattachbatchcallback)
    * [Function cancelBatch(bacthID)](#function-cancelbatchbacthid)
    * [Function commitBatch(bacthID, callback)](#function-commitbatchbacthid-callback)
  * [Other Anchoring-related operations](#other-anchoring-related-operations)
    * [Function getLastHashLinkSSI(callback)](#function-getlasthashlinkssicallback)
    * [Function hasUnanchoredChanges()](#function-hasunanchoredchanges)
    * [Function onCommitBatch(notify, once)](#function-oncommitbatchnotify-once)
    * [Function getCreationSSI(plain)](#function-getcreationssiplain)
    * [Function getKeySSIAsObject(KeySSIType, callback)](#function-getkeyssiasobjectkeyssitype-callback)
    * [Function getKeySSIAsString(KeySSIType, callback)](#function-getkeyssiasstringkeyssitype-callback)
* [Mounting DSUs into each other](#mounting-dsus-into-each-other)
  * [Function getManifest(callback)](#function-getmanifestcallback)
  * [Function getSSIForMount(mountPoint, callback)](#function-getssiformountmountpoint-callback-)
  * [Function listMountedDossiers(mountPoint, callback)](#function-listmounteddossiersmountpoint-callback)
  * [Function mount(mountPoint, archieveSSI, options, callback)](#function-mountmountpoint-archievessi-options-callback)
  * [Function unmount(mountingPoint, callback)](#function-unmountmountingpoint-callback)
  * [Methods of transferring files & folders between a DSU object and the local file system](#methods-of-transferring-files--folders-between-a-dsu-object-and-the-local-file-system)
    * [Function addFile(fsPath, dsuPath, options, callback)](#function-addfilefspath-dsupath-options-callback)
    * [Function addFiles(fsPaths, dsuPath, options, callback)](#function-addfilesfspaths-dsupath-options-callback)
    * [Function addFolder(fsPath, dsuPath, options, callback)](#function-addfolderfspath-dsupath-options-callback)
    * [Function extractFile(fsPath, dsuPath, options, callback)](#function-extractfilefspath-dsupath-options-callback)
    * [Function extractFolder(fsPath, dsuPath, options, callback)](#function-extractfolderfspath-dsupath-options-callback)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->



# Abstract

A DSU object is an entity that exists temporarily in the Execution Environment (EE) to manage the controlled access to data assembled from the brick storage. Once created, DSU objects can be understood as (micro) file systems containing data and code "booted" in a sandboxed part of the EE. It can also be understood as a key/value micro-database, with each path to a file being the key and the value being the content of that file.[Full DSU introduction](/https://www.google.com/url?q=https%3A%2F%2Fopendsu.com%2Frfc001&sa=D&source=docs/).

<p align="justify">This document presents all available DSU operations that allow developers to perform actions on a DSU instance. Important functions are used to perform file system operations such as read, write, delete etc. Advanced functions can be used for configuring DSUs.</p>

# Overview

<p align="justify">When a programmer is working on an application, it must use the OpenDSU SDK, a library containing a set of APIs grouped in API spaces. Some of them are exposed if the programmer wants to do advanced things. However, there are also very high-level APIs that consist of operations like loading a DSU. The process works like that: if we have a KeySSI, it provides an instance with which we can read, write, mount, or do other operations with that DSU. We can also access the anchoring operation that normally does not run on the client but runs through an intermediary - a server installed somewhere in the Cloud (APIHub) and which, in turn, has similar components but not necessarily the same ones.</p>

# Creating and Configuring a DSU Instance

Creating a DSU container requires a KeySSI object. A DSU object is instantiated through the Resolver API see [RFC065](https://www.opendsu.org/pages/advanced/Resolver%20(RFC-065).html), by calling resolver.createSeedDSU() as sketched in the code example below (Example 1).

```js
//Load openDSU environment, openDSU SDK, resolver library

require("../privatesky/psknode/bundles/openDSU");

const opendsu = require("opendsu");

const resolver = opendsu.loadApi("resolver");

//Create a DSU

myDSU = resolver.createSeedDSU(seedSSI, (err, myDSU) =>{

//console.log(myDSU.getCreationSSI());

});
}
```

<p style="text-align:center"><b>Example 1: Code to instantiate a DSU object</b></p>

<p align="justify">Note that in the demo example above, the instantiated DSU object is returned to the calling process for demonstrative purposes in subsequent examples. However, as most of the OpenDSU code is executed asynchronously, the recommended programming style is to apply operations on myDSU inside the callback(err, myDSU) function.</p>

# Concurrency and Synchronization

<p align="justify">In OpenDSU release 2.0.x, batch mode operation is enforced for all DSUs. Any attempt to execute DSU operations outside batch mode will result in runtime exceptions. The recommended function to enter batch mode is beginOrAttachBatch, which operates asynchronously and returns a batchID. This batchID is crucial for invoking the cancelBatch and commitBatch functions.</p>

<p align="justify">The new release also introduces the concept of a "virtual batch." If a DSU is already in batch mode, invoking beginOrAttachBatch generates a new "virtual batch." This virtual batch does not have any side effects other than to specify that commitBatch will execute successfully only if all current batches are closed.</p>

<p align="justify">This architecture leads to more streamlined and error-resistant workflows, and it aligns with robust software engineering principles.</p>

# File I/O Operations with DSU Objects

## Global overview and options

<p style='text-align: justify;'>Each method for file handling requires at least one target file system to operate on, specified by a string representation of its path. The path can be located in the local file system (<b>fsPath</b>) or inside the DSU container (<b>dsuPath</b>). Generally, access to <b>fsPath</b>. is handled through the node.js "fs" API. Strings representing a <b>dsuPath</b> are usually "normalized" by replacing backslash characters (‘\’) or multiple slash characters ('/') with a single path separator slash character ('/').</p>
<p style="text-align:center"><b>Figure 1: The impact of global configuration options</b></p>


Each DSU object is connected to a BrickStorage, where data in the DSU can be stored. Vice versa, DSU file objects can be assembled from the BrickStorage. A BrickStorage essentially consists of control data stored in a BrickMap object and multiple Brick containers, where data can be stored in encrypted or plain form. (<b>A</b>) The flag <b>recursive</b> allows operations to descend recursively into subfolders of a target. (<b>B</b>) When set, the flag <b>ignoreMounted</b> prevents operations from considering the contents of external DSU objects mounted to this instance. (<b>C</b>) The flag <b>embedded</b> forces data of an operation to be stored in the BrickMap rather than in Bricks. (<b>D</b>) The flag “<b>encrypt</b>” controls the encryption of the data stored in the Bricks.

The schema in Figure 2 shows the DSU container in context with external dependencies of a DSU object: the underlying BrickStorage to which changes in the DSU file content are stored or from which DSU objects are assembled, and also other DSU instances that are mounted to this DSU object. Depending on the operation, each file handling method may provide none, one, or multiple configuration options:



| **Name**     | **Type** | **Value** | **Description**                                                                                                                                                                                                                                                                                          |
|:-------------|:---------|:----------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| embedded     | boolean  | false     | Employed during write access to the DSU object. When enabled (true), the target of the operation is stored directly in the BrickMap rather than split across several Bricks (false) of the DSU. Especially for smaller files, setting this flag to “true” will reduce the time required for file access. |
| encrypt      | boolean  | true      | True enables the encryption for the Brick of the DSU container storing the target(s) of the corresponding operation.                                                                                                                                                                                     |
| ignoreMounts | boolean  | false     | When set to true, externally mounted DSUs are ignored when executing the corresponding operation. Default mode (false) takes external mounts into account.                                                                                                                                               |
| recursive    | boolean  | true      | Triggers the corresponding operation to be applied recursively to subfolders of the target(s).                                                                                                                                                                                                           |


The remainder of this chapter will introduce methods of a DSU object that control file I/O operations, subdivided according to their purpose.

<p style="text-align:center"><b>Figure 2: Logical overview of file operation methods of DSU objects</b></p>


Methods are invoked on the central DSU instance, which can mount other DSU objects at given mounting points. According to the kind of operation, file handling methods can be segregated into units: (**A**) methods that transfer data from the local file system to the DSU instance: addFile(), addFolder(), addFiles(); (**B**) methods that transfer data from the DSU instance to the local files system: extractFile(), extractFolder(); (**C**) methods that move data within the DSU instance: rename(), cloneFolder(); (**D**) methods that add/remove file structures within the DSU: createFolder(), delete(); (**E**) methods that report on the file structure of the DSU container: getArchiveForPath(), listFiles(), listFolders(), listMountedDossiers(), readDir(). In Figure 2, control flows are depicted by regular arrows, and data flows by bold arrows.

## Methods querying files & folders of a DSU object

### Function getArchiveForPath(dsuPath, callback)

**Description**: Obtains the DSU instance that stores the file system entry provided by dsuPath. Persistently mounted DSU containers are resolved by the manifest file of this DSU instance, while transiently mounted DSU containers are resolved by temporary variables accordingly.

Returns an Error err if the manifest of this DSU instance is corrupt or in case the externally mounted DSU instance for dsuPath cannot be loaded.


| **Name** | **Type** | **Value** | **Description**                                                      |
|:---------|:---------|:----------|:---------------------------------------------------------------------|
| dsuPath  | string   | *required | The path inside the DSU from which you want to retrieve the archive. |
| callback | function | *required |                                                                      |


**Callback parameters**

| **Name** | **Type**        | **Response example** |
|:---------|:----------------|:---------------------|
| error    | Error object    |                      |
| archive  | Archive handler |                      |




### Function listFiles(dsuPath, options, callback)

**Description**: If not specified otherwise, **dsuPath** is set to the root folder "/" of the DSU instance. An Array of String objects with paths to all the files under **dsuPath** is composed. Optionally, it can also recursively descend into subfolders of **dsuPath** (if **recursive** is set to “true”). Configuration **options** may encapsulate the flags **ignoreMounts** (default: false) and **recursive** (default: true).

Returns an Error **err** if the manifest of this DSU instance is corrupt or if an externally mounted DSU instance under dsuPath cannot be loaded.

If **ignoreMounts** is set to “false”, it also lists externally mounted DSU instances.



| **Name** | **Type** | **Value** | **Description**                                                                                                      |
|:---------|:---------|:----------|:---------------------------------------------------------------------------------------------------------------------|
| dsuPath  | string   | *required | The path in your DSU from which you want to retrieve the list of files.                                              |
| options  | object   |           | <br/>Default options are the following: <br/> {  <br/>  **recursive**: true, <br/>  **ignoreMounts**: false  <br/>}	 |

**Callback parameters**

| **Name** | **Type**               | **Response example** |
|:---------|:-----------------------|:---------------------|
| error    | Error object           |                      |
| files    | Array of string (URLs) |                      |




### Function listFolders(dsuPath, options, callback)

**Description**: An Array of String objects with the paths to all folders under **dsuPath** is composed. Optionally, it can also recursively descend into subfolders of **dsuPath** (if recursive: true). Configuration options may encapsulate the flags ignoreMounts (default: false) and recursive (default: true).

Returns an Error **err** if the manifest of this DSU instance is corrupt or if the external DSU instance mounted in dsuPath cannot be loaded.

If **ignoreMounts** is set to “false”, it also lists externally mounted DSU instances.


| **Name** | **Type** | **Value** | **Description**                                                                                                         |
|:---------|:---------|:----------|:------------------------------------------------------------------------------------------------------------------------|
| dsuPath  | string   | *required | The path in your DSU from which you want to retrieve the list of folders.                                               |
| options  | object   |           | <br/>The default options are the following: <br/> {  <br/> **recursive**: true, <br/>  **ignoreMounts**: false  <br/> } |


**Callback parameters**

| **Name** | **Type**     | **Response example** |
|:---------|:-------------|:---------------------|
| error    | Error object |                      |
| folders  | Array        |                      |


	

### Function listMountedDossiers(dsuPath, callback)

**Description**: Lists only the directories that were mounted from externalDSU for the provided DSU path, listing all mounted DSUs inside the selected directory of the DSU that you are querying. Mounted dossiers represent DSUs mounted inside another DSU using the right KeySSI (SeedSSI for read and write access or SReadSSI for read-only access).


| **Name** | **Type** | **Value** | **Description**                                                                        |
|:---------|:---------|:----------|:---------------------------------------------------------------------------------------|
| dsuPath  | string   | *required | The path inside your DSU from which you want to retrieve the list of mounted dossiers. |
| callback | function | *required |                                                                                        |


**Callback parameters**

| **Name** | **Type**            | **Response example** |
|:---------|:--------------------|:---------------------|
| error    | ErrorWrapper object |                      |
| folders  | Array               |                      |




### Function readDir(dsuPath, options, callback)

**Description**: Retrieves all the files and folders contained in this DSU instance's folder specified by **dsuPath** by calling listFiles() and listFolders() with the options **ignoreMounts**: true and **recursive**: false and, additionally, it collects external DSU containers mounted directly under **dsuPath**. By default (withFileTypes: false), all files, folders, and dossiers mounted under **dsuPath** are concatenated in **entries.files**, an Array of String objects. If **withFileTypes** is set to “true”, the different entry types are collected in separate Array instances of String objects, as provided by **entries.files**, **entries.folders**, and **entries.mounts**, respectively. Configuration **options** may encapsulate the flag **withFileTypes** (default: false).

Returns an Error **err** if the manifest of this DSU instance is corrupt or in case an external DSU instance mounted under **dsuPath** cannot be loaded.

| **Name** | **Type** | **Value** | **Description**                                                                           |
|:---------|:---------|:----------|:------------------------------------------------------------------------------------------|
| dsuPath  | string   | *required | The path inside the current DSU from which you want to retrieve the files and folders.    |
| options  | object   |           | <br/>Default options are the following: <br/> {  <br/> **withFileTypes:**: false  <br/> } |
| callback | function | *required |                                                                                           |


**Callback parameters**

| **Name** | **Type**     | **Response example** |
|:---------|:-------------|:---------------------|
| error    | Error object |                      |
| entries  | Array        |                      |




## Methods for reorganising files & folders inside a DSU object

### Function cloneFolder(srcPath, destPath, options, callback)

**Description**: Create a new folder in this DSU instance at the specified **destPath**. The new folder will contain all the data existing in the folder being cloned from the specified **srcPath**. Configuration **options** may encapsulate the flag **ignoreMounts** (default: false).

Returns an Error **err** if **srcPath** or **dsuPath** cannot be accessed or if the dossier context is read-only.

| **Name** | **Type** | **Value** | **Description**                                                                             |
|:---------|:---------|:----------|:--------------------------------------------------------------------------------------------|
| srcPath  | string   | *required | The path of the original folder.                                                            |
| estPath  | string   | *required | The path where the clone folder will be created.                                            |
| options  | object   |           | <br/>The default options are the following: <br/> {  <br/> **ignoreMounts:**: false  <br/>} |                                                 |
| callback | function | *required |                                                                                             |


**Callback parameters**

| **Name** | **Type** | **Response example** |
|:---------|:---------|:---------------------|
| error    | Error    |                      |




### Function createFolder(dsuPath, options, callback)

**Description**: Create an empty folder in this DSU instance at the specified **dsuPath**. Configuration **options** may encapsulate the flags **encrypt** (default: true) and **ignoreMounts** (default: false).

Returns an Error **err** if **dsuPath** cannot be accessed or when an external DSU object in the path prefix is mounted read-only.

| **Name** | **Type** | **Value** | **Description**                                                                                                      |
|:---------|:---------|:----------|:---------------------------------------------------------------------------------------------------------------------|
| dsuPath  | string   | *required | The path where you want to create a folder inside your DSU environment.                                              |
| options  | object   |           | <br/>The default options are the following: <br/> {  <br/> **encrypt**: true, <br/>  **ignoreMounts**: false  <br/>} |
| callback | function | *required |                                                                                                                      |


**Callback parameters**

| **Name** | **Type** | **Response example** |
|:---------|:---------|:---------------------|
| error    | Error    |                      |




### Function delete(dsuPath, options, callback)

**Description**: Delete a file or folder specified by **dsuPath** from this DSU instance. Configuration options may encapsulate the flag **ignoreMounts** (default: false).

Returns an Error **err** if **dsuPath** cannot be accessed or when an external DSU object in the path prefix is mounted read-only.

| **Name** | **Type** | **Value** | **Description**                                             |
|:---------|:---------|:----------|:------------------------------------------------------------|
| dsuPath  | string   | *required | The path inside the DSU toward the file you want to delete. |
| options  | object   |           |                                                             |
| callback | function | *required |                                                             |


**Callback parameters**

| **Name** | **Type**     | **Response example** |
|:---------|:-------------|:---------------------|
| error    | Error object |                      |




### Function rename(srcPath, destPath, options, callback)

**Description**: Renames and moves a file accessible at **srcPath** in the DSU instance to the destination specified by **destPath**. If **ignoreMounts** is set to “false”, both **srcPath** and **destPath** may involve external DSU objects mounted to this DSU instance.

Returns an Error **err** if the manifest of the DSU instance is corrupt or if the external DSU instance mounted under srcPath or **destPath** cannot be loaded, or if the DSU object at **destPath** is mounted read-only.

| **Name** | **Type** | **Value** | **Description**                                                                              |
|:---------|:---------|:----------|:---------------------------------------------------------------------------------------------|
| srcPath  | string   | *required | The path toward the file you want to rename.                                                 |
| destPath | string   | *required | The new name for the file or folder. The path should be the same except for the last segment |
| options  | object   |           | <br/>The default options are the following: <br/> {<br/> **ignoreMounts**: false  <br/>}     |
| callback | function | *required |                                                                                              |


**Callback parameters**

| **Name** | **Type**     | **Response example** |
|:---------|:-------------|:---------------------|
| error    | Error object |                      |




## Methods of reading or writing data in files of a DSU object

### Function appendToFile(dsuPath, data, options, callback)

**Description**: Append **data** provided by a String literal, a Buffer, or by a ReadableStream to the file accessible at **dsuPath** in this DSU instance. Configuration **options** may encapsulate the flags **encrypt** (default: true) and **ignoreMounts** (default: false).

Returns an Error **err** if an external DSU mounted to a prefix of **dsuPath** cannot be loaded or is mounted read-only.

| **Name** | **Type**                      | **Value** | **Description**                                                                                                   |
|:---------|:------------------------------|:----------|:------------------------------------------------------------------------------------------------------------------|
| dsuPath  | string                        | *required | The path toward the file you want to append data to (inside the DSU environment).                                 |
| data     | String\buffler/readableStream | *required | The data you want to append to your file.                                                                         |
| options  | object                        |           | <br/>Default options are the following: <br/> {  <br/> **encrypt**: true, <br/>  **ignoreMounts**: false  <br/>}  |
| callback | function                      | *required |                                                                                                                   |


**Callback parameters**

| **Name** | **Type** | **Response example** |
|:---------|:---------|:---------------------|
| error    | Error    |                      |




### Function createReadStream(dsuPath, options, callback)

**Description**: Opens a readable stream of bytes as provided by the file described by **dsuPath** in this DSU object. Configuration **options** may encapsulate the flags **encrypt** (default: true) and **ignoreMounts** (default: false).

Returns an Error **err** if an external DSU mounted to a prefix of **dsuPath** cannot be loaded or is mounted read-only, or the file is a big one (the bricks list contains as the first element a SizeSSI). Otherwise, the ReadableStream stream is provided.

| **Name** | **Type** | **Value** | **Description**                                                                                                      |
|:---------|:---------|:----------|:---------------------------------------------------------------------------------------------------------------------|
| dsuPath  | string   | *required | The path inside you DSU for which you want to create a read stream.                                                  |
| options  | object   |           | <br/>The default options are the following: <br/> {  <br/> **encrypt**: true, <br/>  **ignoreMounts**: false  <br/>} |
| callback | function | *required |                                                                                                                      |


**Callback parameters**

| **Name** | **Type**       | **Response example** |
|:---------|:---------------|:---------------------|
| error    | Error          |                      |
| stream   | ReadableStream |                      |

**Description**: Contains a message and the error / The read stream instance that was just created.




### Function readFile(dsuPath, options, callback)

**Description**: Reads a file in the DSU. Configuration **options** may encapsulate the flag **ignoreMounts** (default: false).

Returns an error **err** if an external DSU mounted to a prefix of **dsuPath** cannot be loaded or is mounted read-only, or the file is a big one (the bricks list contains as the first element a **SizeSSI**). Otherwise, the Buffer **buffer** with the content of the specified file from the DSU file system is provided.

| **Name** | **Type** | **Value** | **Description**                                                                        |
|:---------|:---------|:----------|:---------------------------------------------------------------------------------------|
| dsuPath  | string   | *required | The path toward a file inside your DSU that you want to read.                          |
| options  | object   |           | The default options are the following: <br/> {  <br/> **ignoreMounts**: false  <br/> } |
| callback | function | *required |                                                                                        |


**Callback parameters**

| **Name** | **Type**     | **Response example** |
|:---------|:-------------|:---------------------|
| error    | Error object |                      |
| buffer   | Buffer       |                      |




### Function createBigFileReadStreamWithRange(dsuPath, range, options, callback)

**Description**: Returns a buffer with the content of the specified big file from the DSU file system given the range of bytes to read. The parameter range represents an object with **start** (default: 0) and end properties, specifying the start and end bytes. Configuration **options** may encapsulate the flag **ignoreMounts** (default: false). Returns an error **err** if an external DSU mounted to a prefix of **dsuPath** cannot be loaded or is mounted read-only or the file exists but is not a big file (the bricks list contains as the first element a **SizeSSI**). Otherwise, the Buffer **buffer** is provided.


| **Name** | **Type** | **Value** | **Description** |
|:---------|:---------|:----------|:----------------|
| dsuPath  | string   | *required |                 |
| range    | object   | *required |                 |
| options  | object   |           |                 |
| callback | function | *required |                 |


**Callback parameters**

| **Name** | **Type** | **Response example** |
|:---------|:---------|:---------------------|
| error    | Error    |                      |
| buffer   | Buffer   |                      |




### Function writeFile(dsuPath, data, options, callback)

**Description**: Creates a file entry at **dsuPath** in this DSU instance and subsequently writes **data** to it. Configuration **options** may encapsulate the flags **encrypt** (default: true) and **ignoreMounts** (default: false).

Returns an Error **err** if an external DSU mounted to a prefix of **dsuPath** cannot be loaded or is mounted read-only.

| **Name** | **Type**                    | **Value** | **Description**                                                                                                                                                                  |
|:---------|:----------------------------|:----------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| dsuPath  | string                      | *required | The path in the current DSU where you want to create a new file.                                                                                                                 |
| data     | String/buffer/readbleStream | *required | The data to be written in the file.                                                                                                                                              |
| options  | options                     |           |                                                                                                                                                                                  |
| callback | function                    | *required | <br/>The default options are the following: <br/> {  <br/> **encrypt**: true, <br/>  **ignoreMounts**: false  <br/>}                                                             |


**Callback parameters**

| **Name** | **Type**     | **Response example** |
|:---------|:-------------|:---------------------|
| error    | Error object |                      |




## Other functions
### Function refresh(callback)

**Description**: Reloads an existing BrickMap using the BrickMapStrategy.

Returns an Error **err** if it fails to get the latest anchored hash link.

| **Name** | **Type** | **Value** |
|:---------|:---------|:----------|
| callback | function | *required |
|          |          |           |


**Callback parameters**

| **Name** | **Type**     | **Response example** |
|:---------|:-------------|:---------------------|
| error    | Error object |                      |




### Function stat(dsuPath, callback)

**Description**: Returns "undefined" stats if an Error occurs when calling BrickMapConstroller.stat(). Otherwise, stats are provided asynchronously to callback().

| **Name** | **Type** | **Value** |
|:---------|:---------|:----------|
| dsuPath  | string   | *required |
| callback | function | *required |


**Callback parameters**

| **Name** | **Type** | **Response example**  |
|:---------|:---------|:----------------------|
| error    | Error    |                       |
| status   | object   |                       |


**Examples**

```js
let data  = {"message": "Hello world!"};

//Create a DSU

resolver.createDSU(seedSSI, (err, dsuInstance) =>{

  dsuInstance.writeFile('/data', JSON.stringify(data), (err) => {

      console.log("Data written successfully! :)");

      dsuInstance.readFile('/data', (err, data)=>{

          const dataObject = JSON.parse(data.toString());

//Convert data (buffer) to string and then to JSON

          console.log("Data load successfully! :)", dataObject.message);

//Print message to console

      });

  });     

 });
}
```


<p style="text-align:center"><b>Example 2: Writing / Reading a data string to a DSU object</b></p>


# Batch operations on DSUs

A batch is a sequence of operations to be executed on the files available in a DSU object, before the resulting changes to the DSU are anchored altogether. Batch processing requires a call to **beginBatch()** or **beginOrAttachBatch()**. After all operations have been performed, a call to **commitBatch()** anchors the changes made within the batch. Alternatively, batch operations may be wrapped by a **batchFn** lazily submitted to **batch(batchFn)**. Note that no more than one batch process can be performed on the same DSU object at a time, and batch processing scheduled by **beginBatch()** has to be completed by *commitBatch()* or terminated by **cancelBatch()** before a new batch may be scheduled.

## Controlling batch processe

### Function batchInProgress()

**Description**: Checks if a batch is currently in progress and synchronously returns true if a batch has been scheduled or is being executed. Otherwise, it returns false.



### Function beginBatch()

**Description**: Schedules a new batch and disables automatic anchoring after each operation performed on this DSU instance. The callback function prevents anchoring after each DSU operation. From OpenDSU 2.0.0, the “batch mode” is mandatory anyway.
<p align="justify">It throws an Error if batch processing is already in progress, as reported by batchInProgress().</p>
<p align="justify">This function returns an “batchID” as an identifier for a “batch”. The batch can be imagined as a “transaction” in the databases, but because we have a more file system approach, the metaphor is called “operation batching” or DSu “batch mode”</p>





### Function startOrAttachBatch(callback)

**Description**: If a DSU is already in batch mode, invoking startOrAttachBatch() generates a new "virtual batch." This virtual batch has no side effects other than to specify that commitBatch() will execute successfully only if all current batches are closed.
The callback also returns a batchId that can be used with cancelBatch pr commitBatch.





### Function cancelBatch(bacthID)

**Description**: Cancel a  batch (remove the batch mode from the DSU) and remove any changes made. If multiple batches are open, it does nothing, and changes made in the current virtual batch could still be anchored. No perfect behaviour is possible; if this aspect is important, then only one “batch” should be allowed to be opened on an instance.



### Function commitBatch(bacthID, callback)

**Description**: Completes batch processing by anchoring all changes in this DSU instance caused during batch processing.
The callback is called with an error if batchInProgress() reports that no batch has yet been scheduled by beginBatch().

| **Name** | **Type** | **Value** | **Description**       |
|:---------|:---------|:----------|:----------------------|
| batchID  | string   |           | The batch identifier. |
| callback | function | *required |                       |
|          |          |           |                       |


**Callback parameters**

| **Name** | **Type** | **Response example**  |
|:---------|:---------|:----------------------|
| error    | Error    |                       |



## Other Anchoring-related operations

<p align="justify">A DSU object further employs the KeySSI object to initialise handlers for anchoring changes in the DSU file system to the underlying blockchain (e.g. BrickMapController and BrickMapStorageService).</p>



### Function getLastHashLinkSSI(callback)

**Description**: Returns an Error err if the keySSI object or the list of hash links cannot be obtained for this DSU instance. Otherwise, the HashLinkSSI object hlSSI that has been employed most recently to anchor changes in this DSU instance is provided.

| **Name** | **Type** | **Value** |
|:---------|:---------|:----------|
| callback | function | *required |


**Callback parameters**

| **Name** | **Type**     | **Response example** |
|:---------|:-------------|:---------------------|
| error    | Error object |                      |
| hlSSI    | Object       | HashLiunkSSI         |





### Function hasUnanchoredChanges()

**Description**: Synchronously returns the number of unanchored changes if this DSU instance has pending changes to be anchored; otherwise, it returns false.





### Function onCommitBatch(notify, once)

**Description**: Synchronously sets function **notify()** as the anchoring event listener.

| **Name** | **Type** | **Value** | **Description**                                                 |
|:---------|:---------|:----------|:----------------------------------------------------------------|
| notify   | function | *required | The function that will be used as the anchoring event listener. |
| once     |          |           | default: true                                                   |



### Function getCreationSSI(plain)

**Description**: Determines the String identifier of the KeySSI object employed for instantiating this DSU object. The identifier is returned directly as a plain string of ASCII characters (if the “plain” attribute is set to “true”), or the string is additionally transformed into base-58 encoded symbols (if plain: false). Note that calls to getCreationSSI() are handled synchronously. Therefore, the method will block until the result is computed.

Returns the KeySSI instance.

| **Name** | **Type** | **Value** | **Description**                                                                                                                                                                           |
|:---------|:---------|:----------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| plain    | boolean  | *required | Sets if the result is encoded or plain. True if you want the identifier in the ssi format (ssi:za:domain:specificStr:control:vn), false if you want it encoded in Base58.                 |





### Function getKeySSIAsObject(KeySSIType, callback)

**Description**: Get an instance of the KeySSI corresponding to the DSU providing the keySSIType. If **KeySSIType** is "undefined" or not provided, the keySSI object for this DSU instance is lazily returned. Otherwise, the KeySSI object of this DSU instance is transformed into an object of type **KeySSIType**.

Returns an Error **err** if **KeySSIType** is not any of the registered KeySSI types or if this DSU instance's KeySSI object cannot be transformed to an object of type **KeySSIType**.

| **Name**   | **Type** | **Value** | **Desription**                                                                                                                  |
|:-----------|:---------|:----------|:--------------------------------------------------------------------------------------------------------------------------------|
| KeySSiType | string   | *required | The type of the keySSI you are looking for Leave empty to get seed/highest key. keyType must be derivable from the highest key. |
| callback   | function | *required |                                                                                                                                 |


**Callback parameters**

| **Name** | **Type**      | **Response example** |
|:---------|:--------------|:---------------------|
| error    | Error object  |                      |
| keySSI   | KeySSI object |                      |



### Function getKeySSIAsString(KeySSIType, callback)

**Description**: Lazy wrapper for [getKeySSIAsObject](https://www.opendsu.org/pages/beginners/DSU%20Object%20(RFC-063).html) for providing the identifier String of the computed **KeySSI** object to the callback function.

Returns an Error **err** if KeySSIType is not any of the registered **KeySSI** types or if this DSU instance's **KeySSI** object cannot be transformed to an object of type KeySSIType.

| **Name**   | **Type** | **Value** |
|:-----------|:---------|:----------|
| KeySSIType | string   | *required |
| callback   | function | *required |

**Callback parameters**

| **Name**  | **Type**     | **Response example**  |
|:----------|:-------------|:----------------------|
| error     | Error object |                       |
| keySSI    | string       |                       |

# Mounting DSUs into each other
The **mount()** method makes the contents of an external DSU container, as identified by **archiveSSI** available under the path **mountingPoint** of this DSU instance. If the flag **persistent** (default: true) is set, externally mounted DSU instances are stored persistently in the manifest file of this DSU instance. Otherwise, mounted DSUs are stored in a temporary variable of this DSU instance. Mounted dossiers represent DSUs mounted inside another DSU using the right keySSI (i.e. SeedSSI for read and write access or SReadSSI for read-only access).

## Function getManifest(callback)

**Description**: Each DSU uses a manifest file containing the DSU metadata to keep references of the mount points to other DSUs.

Returns a manifest instance of the DSU.

| **Name** | **Type** | **Value** | **Description**  |
|:---------|:---------|:----------|:-----------------|
| callback | function | *required |                  |


**Callback parameters**

| **Name** | **Type**        | **Response example**  |
|:---------|:----------------|:----------------------|
| error    | Error object    |                       |
| handler  | Manifest object |                       |

**Returns**: A message and the error / The handler for the Manifest object.





## Function getSSIForMount(mountPoint, callback) 

**Description**: Retrieves the KeySSI used to mount the specified mountPoint by obtaining the **archiveSSI** identifier for the DSU instance mounted at the path **mountPoint** in this DSU object.

Returns an Error **err** if no DSU instance is mounted at the path **mountPoint** of this DSU object.

| **Name**   | **Type** | **Value** | **Description**                                                                 |
|:-----------|:---------|:----------|:--------------------------------------------------------------------------------|
| mountpoint | string   | *required | The path to the mounted directory from which you want to obtain the identifier. |
| callback   | function | *required |                                                                                 |


**Callback parameters**

| **Name** | **Type**     | **Response example** |
|:---------|:-------------|:---------------------|
| error    | Error object |                      |
| ssi      | string       |                      |




## Function listMountedDossiers(mountPoint, callback)

**Description**: List all the DSUs that were mounted at the **mountPoint** path.

Returns an Array with all these mounted DSUs.


| **Name**   | **Type** | **Value** | **Description**                                                                                                                                                                                                       |
|:-----------|:---------|:----------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| mountpoint | string   | *required | The path inside your DSU from which you want to retrieve the list of mounted dossiers. Provides an Array with the list of all external DSU objects mounted under the specified folder mountPoint of this DSU instance |
| callback   | function | *required |                                                                                                                                                                                                                       |


**Callback parameters**

| **Name**        | **Type** | **Response example**  |
|:----------------|:---------|:----------------------|
| error           | Error    |                       |
| mountedDossiers | Array    |                       |





## Function mount(mountPoint, archieveSSI, options, callback)

**Description**: Mounts the external DSU container identified by **archiveSSI** at the path **mountingPoint** of the DSU instance. The **options** parameter may encapsulate the flag **persist** (default: true) to save the updated manifest file after successfully mounting the external DSU object at mountingPoint to the manifest file of this DSU instance. Otherwise, the mounting point is stored only in a temporary variable of this DSU instance.

Returns an Error **err** if **mountingPoint** points to a non-empty directory or if another DSU instance is already mounted at **mountingPoint**.

| **Name**      | **Type** | **Value** | **Description**                                                                           |
|:--------------|:---------|:----------|:------------------------------------------------------------------------------------------|
| mountingPoint | string   | *required | The path in your DSU where you want to mount the archive (the directory has to be empty). |
| archiveSSI    | string   | *required | The identifier (or the keySSI) of the archive you want to mount.                          |
| options       | object   |           | Default options are undefined.                                                            |
| callback      | function | *required |                                                                                           |


**Callback parameters**

| **Name** | **Type**     | **Response example** |
|:---------|:-------------|:---------------------|
| error    | Error object |                      |

	

## Function unmount(mountingPoint, callback)

**Description**: Removes the external DSU container mounted at mountingPoint. If the external DSU at mountingPoint has been mounted persistently, a new manifest file after removal of the externally mounted DSU container is saved to this DSU instance accordingly.

Returns an Error err if no mounted DSU is found at dsuPath.

| **Name**      | **Type** | **Value** | **Description**                                                  |
|:--------------|:---------|:----------|:-----------------------------------------------------------------|
| mountingPoint | string   | *required | The path inside the DSU towards the archive you want to unmount. |
| callback      | function | *required |                                                                  |


**Callback parameters**

| **Name**  | **Type**  | **Response example**  |
|:----------|:----------|:----------------------|
| error     | Error     |                       |



## Methods of transferring files & folders between a DSU object and the local file system

This section outlines how to employ methods of DSU objects to add, remove, copy, relocate or query information on entire files or folders without changing their content. For transparency, we further subdivided the file handling methods of a DSU object into two subgroups: methods that trigger a data flow by copying data underlying files from one location to another (Figure 2, elements A, B, and C) and those methods that query or change the logical file structure inside a DSU but without moving big chunks of the underlying data around (Figure 2, elements D and E). Former data flow methods usually require two string arguments identifying the source and target of the operation. In contrast, the latter methods used to change the file control structure typically require only one such path string argument of the target entry to be modified or queried.
<p style="text-align:center"><b>Figure 3: Logical overview of file operation methods of DSU objects</b></p>

Methods are invoked on the central DSU instance (this) (see Figure 3 above), which can mount other DSU objects at given mounting points (gray folder icon). According to the kind of operation, file handling methods can be segregated into units: (**A**) methods that transfer data from the local file system to the DSU instance: addFile(), addFolder(), addFiles(); (**B**) methods that transfer data from the DSU instance to the local files system: extractFile(), extractFolder(); (**C**) methods that move data within the DSU instance: rename(), cloneFolder(); (**D**) methods that report on the file structure of the DSU container: readDir(), listFiles(), listFolders(), listMountedDossiers(), getArchiveForPath(); (**E**) methods that add/remove file structures: createFolder(), delete(). In the Figure, control flows are depicted by regular “arrows” and data flows by bold “arrows”.</p>

The methods a DSU object provides for file handling are listed below, where all path arguments **fsPath** or **dsuPath** and the optional configuration flags in **options**.

### Function addFile(fsPath, dsuPath, options, callback)

**Description**: Copies one single file entry, specified by **fsPath** in the local file system, to the folder **dsuPath** of this DSU instance. Follows symbolic links in **fsPath**; if **ignoreMounts** is set to false (the default), it also loads externally mounted DSUs in **dsuPath**.
Configuration **options** may encapsulate the flags **encrypt** (default: true), and **ignoreMounts** (default: false).

Returns an Error **err** if source **fsPath** or target **dsuPath** cannot be accessed.

| **Name** | **Type** | **Value** | **Description**                                                                                                                                                                                                                                                                        |
|:---------|:---------|:----------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| fsPath   | string   | *required | The path (from the current environment file system) towards the file you want to add to your DSU.                                                                                                                                                                                      |
| dsuPath  | string   | *required | The path inside the DSU environment where you want to add the file.                                                                                                                                                                                                                    |
| options  | object   | *required | <br/>The default options are the following: <br/> {  <br/> **encrypt**: true, <br/>  **ignoreMounts**: false  <br/>}                                                                                                                                                                   |
| callback | function | *required |                                                                                                                                                                                                                                                                                        |


**Callback parameters**

| **Name** | **Type** | **Response example** |
|:---------|:---------|:---------------------|
| error    | Error    | NA                   |


### Function addFiles(fsPaths, dsuPath, options, callback)

**Description**: Copies one or more files specified by the Array **fsPaths** from their paths in the local file system to the folder **dsuPath** of this DSU instance. Follows symbolic links in fsPath and loads externally mounted DSUs in dsuPath for default ignoreMounts: false.
Configuration **options** may encapsulate the flags **encrypt** (default: true), **ignoreMounts** (default: false), and embedded (default: false). Note that setting embedded to true means that files will be stored in the BrickMap rather than in Brick objects. This will improve access performance for small files.

Returns an Error **err** if source **fsPaths** or target **dsuPath** cannot be accessed.

| **Name** | **Type**                | **Value** | **Description**                                                                                                                             |
|:---------|:------------------------|:----------|:--------------------------------------------------------------------------------------------------------------------------------------------|
| fsPaths  | Array of string objects | *required | Array of the paths towards your files in the current environment file system.                                                               |
| dsuPath  | string                  | *required | The path inside the DSU environment where you want to add files.                                                                            |
| options  | object                  |           | <br/>The default options are the following: <br/> {  <br/> **encrypt**: true, <br/>  **ignoreMounts**: false <br/> **batch**: false  <br/>} |
| callback | function                | *required |                                                                                                                                             |


**Callback parameters**

| **Name**  | **Error**  | **Response example**  |
|:----------|:-----------|:----------------------|
| error     | Error      | NA                    |



### Function addFolder(fsPath, dsuPath, options, callback)

**Description**: Iterates the contents of a folder **fsPath** in the local file system and copies each entry to a folder **dsuPath** in the DSU instance. Follows symbolic links in **fsPath** and loads externally mounted DSUs in **dsuPath** if **ignoreMounts** is set to false (which is the default).
Configuration **options** may encapsulate the flags encrypt (default: true), **ignoreMounts** (default: false), and embedded (default: false).

Returns an Error **err** if source **fsPath** or target **dsuPath** cannot be accessed.

| **Name** | **Type** | **Value** | **Description**                                                                                                                             |
|:---------|:---------|:----------|:--------------------------------------------------------------------------------------------------------------------------------------------|
| fsPath   | string   | *required | The path towards your files in the current environment.                                                                                     |
| dsuPath  | string   | *required | The path inside the DSU environment where you want to add files.                                                                            |
| options  | object   |           | <br/>The default options are the following: <br/> {  <br/> **encrypt**: true, <br/>  **ignoreMounts**: false <br/> **batch**: false  <br/>} |
| callback | function | *required |                                                                                                                                             |


**Callback parameters**

| **Name** | **Type** | **Response example** |
|:---------|:---------|:---------------------|
| error    | Error    | NA                   |



### Function extractFile(fsPath, dsuPath, options, callback)

**Description**: Restores data stored in Brick objects under **dsuPath** to a file in the local file system as specified by **fsPath**. Configuration **options** may encapsulate the flag **ignoreMounts** (default: false).

Returns an Error **err** if an externally mounted DSU object in **dsuPath** cannot be loaded or if one of the Bricks objects for **dsuPath** cannot be accessed. Otherwise, data from Bricks objects is copied to the local file specified by **fsPath**.

| **Name** | **Type** | **Value** | **Description**                                                                                                                                                                                                               |
|:---------|:---------|:----------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| fsPath   | string   | *required | The path inside your current environment toward the file you want to extract.                                                                                                                                                 |
| dsuPath  | string   | *required | The “path” where you want to “extract” your DAU  file.                                                                                                                                                                        |
| options  | object   |           | <br/>The default options are the following: <br/> {   <br/>  **ignoreMounts**: false  <br/>}                                                                                                                                  |
| callback | function | *required |                                                                                                                                                                                                                               |


**Callback parameters**

| **Name** | **Type**     | **Response example** |
|:---------|:-------------|:---------------------|
| error    | Error object | NA                   |




### Function extractFolder(fsPath, dsuPath, options, callback)

**Description**: Restores for all files under **dsuPath** the data stored in Brick objects to a local file system folder qualified by **fsPath** by lazy calls to extractFile(). Configuration **options** may encapsulate the flag **ignoreMounts** (default: false).

Returns an Error **err** if an externally mounted DSU object in **dsuPath** cannot be loaded or if one of the Bricks objects for **dsuPath** cannot be accessed. Otherwise, data from Bricks objects is copied to the local file specified by **fsPath**.

| **Name** | **Type** | **Value** | **Description**                                                                              |
|:---------|:---------|:----------|:---------------------------------------------------------------------------------------------|
| fsPath   | string   | *required | The path inside your current environment toward the folder you want to extract.              |
| dsuPath  | string   | *required | The “path” you want to “extract”.                                                            |
| options  | object   |           | <br/>The default options are the following: <br/> {   <br/>  **ignoreMounts**: false  <br/>} |
| callback | function | *required |                                                                                              |


**Callback parameters**

| **Name** | **Type**     | **Response example** |
|:---------|:-------------|:---------------------|
| error    | Error object | NA                   |


**Contributors**   

1. [Axiologic Research](www.axiologic.net):New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the [www.opendsu.com](www.opendsu.com) site.
2. [PharmaLedger Project](www.pharmaledger.eu): Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.
3. [PrivateSky Research Project](www.privatesky.xyz):  MIT licensed content accordingly with the contracts. [https://profs.info.uaic.ro/~ads/PrivateSky/](https://profs.info.uaic.ro/~ads/PrivateSky/) 


# Annex 1. Contributors

| **Current Editors**                 | **Email**                          |
|:------------------------------------|:-----------------------------------|
| Sînică Alboaie                      | sinica.alboaie@axiologic.net       |
| Cosmin Ursache                      | cosmin@axiologic.net               |
| Teodor Lupu                         | teodor@axiologic.net               |
| Andi-Gabriel Tan                    | andi@axiologic.net                 |
| **Contributors Axiologic Research** | **Email**                          |
| Adrian Ganga                        | adrian@axiologic.net               |
| Andi-Gabriel Țan                    | andi@axiologic.net                 |
| Cosmin Ursache                      | cosmin@axiologic.net               |
| Daniel Sava                         | daniel@axiologic.net               |
| Nicoleta Mihalache                  | nicoleta@axiologic.net             |
| Teodor Lupu                         | teodor@axiologic.net               |
| Valentin Gérard                     | valentin@axiologic.net             |
| **PrivatSky Contributors**          | **Email**                          | 
| Alex Sofronie                       | alsofronie@gmail.com(DPO)          |
| Cosmin Ursache                      | cosmin@axiologic.net(UAIC)         |
| Daniel Sava                         | daniel@axiologic.net(HVS, AQS)     |
| Daniel Visoiu                       | visoiu.daniel.g@gmail.com(SGiant)  |
| Lenuta Alboaie                      | lalboaie@gmail.com(UAIC)           |
| Rafael Mastaleru                    | raf@rms.ro (RMS)                   |
| Sînică Alboaie                      | sinica.alboaie@axiologic.net(UAIC) |   
| Vlad Balmos                         | vlad.balmos@gmail.com(Code932)     |
| **PharmaLedger Contributors**       | **Email**                          |
| Ana Balan                           | bam@rms.ro (RMS)                   |
| Bogdan Mastahac                     | mab@rms.ro (RMS)                   |
| Cosmin Ursache                      | cos@rms.ro (RMS)                   |
| Michael Sammeth                     |                                    |
| Rafael Mastaleru                    | raf@rms.ro (RMS)                   |
