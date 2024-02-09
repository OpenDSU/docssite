---
title: Octopus 
layout: home
parent: OpenDSU Wallets Developers
nav_order: 1
---



# **Octopus(RFC-095)**
{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs)

**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)



<!-- TOC -->
* [Abstract](#abstract)
* [1. Introduction](#1-introduction)
* [2. Installation and configuration](#2-installation-and-configuration)
  * [2.1 Installation](#21-installation)
  * [2.2 Configuration](#22-configuration)
  * [2.3 Examples](#23-examples)
* [3. Actions](#3-actions)
* [4. Octopus as a module](#4-octopus-as-a-module)
  * [4.1 Runner class](#41-runner-class)
    * [Function run(configfileOrObject, configTarget, callback)](#function-runconfigfileorobject-configtarget-callback)
    * [Example](#example)
  * [4.2  Action register class](#42--action-register-class)
    * [Function registerActionHandler(name, handler, overwrite)](#function-registeractionhandlername-handler-overwrite)
    * [Example](#example-1)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->


# Abstract

<p style='text-align: justify;'>This RFC presents the installation, configuration, and use of a new tool called Octopus, designed to solve user data privacy issues. Octopus is a JavaScript tool that works behind web and mobile applications. Technically speaking, Octopus is an adaptive and extendable JavaScript task runner built without dependencies to handle all installation dependencies, updates, builds and so on. Dependency is a term widely used in software to refer to situations where one piece of software depends on another. The Octopus tool contains a collection of actions and scripts that are useful when it is necessary to automate different types of development tasks.</p>


# 1. Introduction

<p style='text-align: justify;'>OpenDSU, as a technology, has its first implementation in JavaScript (JS). Many managers or dependency management tools are required for JS projects using NGS (Next Generation Sequencing) to run.
</p>

<p style='text-align: justify;'>Since OpenDSU focuses on data privacy and control of user-shared data by the users themselves, we have taken into consideration an aspect related to dependency management and strict control of the sources from which the necessary dependencies for the implementation of OpenDSU SDK will be installed.
</p>

<p style='text-align: justify;'>The EPM (Enterprise Performance Management) works, and using external dependencies created by other people (open source dependencies) can be a significant risk factor in how user data can be used without their consent and it can create privacy issues. We propose using the Octopus tool in order to avoid such problems. Octopus is a task runner, an open source builder without any external dependencies, which can be used in NGS (Next Generation Sequencing) type projects, at the moment as a replacement for Npm (Node package manager) or any other similar tool. Npm is a package manager for the JavaScript world. Npm is the default package manager of Node.js, and it comes bundled with Node.js.
</p>


<p style='text-align: justify;'>To resume, Octopus is an adaptive and extendable Javascript task runner built without dependencies. Octopus is designed to handle all dependencies, installations, updates, builds and so on. It bundles a collection of actions and scripts that can prove useful when needed to automate different types of development tasks. Octopus has a plugin mechanism in order to allow the extension of the action collection.
</p>


# 2. Installation and configuration

## 2.1 Installation

<p style='text-align: justify;'>Octopus presents a mechanism called Octopus Freeze. This mechanism allows two configuration levels to exist for the dependencies used in a project. Specifically, when the project is in development, it can use Octopus in its normal state, represented by the Octopus.json configuration file. This file may contain one or more lists of tasks, dependencies, and modeled processes for use in project development. When someone wants to do a “release”, they propose a stable state of the current project. Therefore, the versions of each dependency or library used in part in the Octopus configuration must be saved in order to replicate the current project's state as stable. So, Octopus provides a process called Octopus Freeze, using a command like:
</p>


<p style='text-align: center;'><b>Npm run freeze or npm run tag freeze</b></p>

<p style='text-align: justify;'>The difference between the two commands is that <b>npm run tag freeze</b> can help developers create tags or tag each repository individually if it has changed in the previous release. A repository is a software archive, a place where the application’s source code is stored along with other metadata (data that allows the classification, organization, and storage of other data in digital format).
</p>

<p style='text-align: justify;'>Following the execution of any of the two commands mentioned above, a new version of the configuration file is obtained, called OctopusFreeze.json. This new and stable version will be usable by anyone who clones the repository and executes the <b>npm install</b> command. Programmers are trained to use <b>npm run dev-install.</b>
</p>

<p style='text-align: justify;'>Depending on the executed command:<b> npm run dev-install</b> or <b>npm install</b>, one of the 2 Octopus configuration files is used: <b>Octopus.json</b> or <b>OctopusFreeze.json.</b> The difference is given by the fact that the Octopus.json file, besides the information related to the URL where the source code will be downloaded (mainly the GIT repository), also stores information such as the commit number used or the tag of the respective library that should be used for installation.
</p>

<p style='text-align: justify;'>Octopus can be installed using npm by adding its repository URL to the list of dependencies in your package.json file:
</p>


```js
{
   "name": "My Octopus Project",
   "version": "1.0.0",
   "description": "",
   "main": "index.ts",
   "scripts": {
       "octopus": "node ./node_modules/octopus/scripts/run"
   },
   "dependencies": {
       "octopus": "git+http://github.com/privatesky/octopus.git#1.0"
   },
   "license": "MIT"
}

```

```js
npm install
# to run octopus after installing:
npm run octopus

```

## 2.2 Configuration

<p style='text-align: justify;'>The configuration file for the Octopus task-runner mainly uses JSON (JavaScript Object Notation) type. JSON is a text format that is a completely independent language, but it uses conventions that are familiar to programmers of the C language family (C++, C#, Java, JavaScript, Python etc.). JSON is built on two structures: a collection of name/value pairs (this is realized as an object, a dictionary, a structure or a list of keys) and an ordered list of values (this is realized as an array, a vector, a list or a string).
</p>

<p style='text-align: justify;'>The configuration file for the Octopus has a JSON structure which must contain a property called a dependency. The default task of Octopus is called dependencies. This property is of type array and may contain one or more dependencies or actions that need to be taken by Octopus at a certain point in the development lifecycle of the projects.
</p>

<p style='text-align: justify;'>All Octopus configuration files contain a list of tasks on their first level. The Octopus configuration format supports an unlimited number of task lists. Each task list can contain one or more steps. A step can start from cloning a repository or source code, and each step can contain a list of actions.
</p>

<p style='text-align: justify;'>The Octopus task-runner works with the <b>Octopus.json</b> or with the <b>OctopusFreeze.json</b> configuration file. The Octopus.json file is a JSON format file and may contain a list of tasks. The Octopus does not differentiate between dependencies, tasks or other actions that need to be executed at a certain time, which is why the configuration file at this first level contains or may contain a list of tasks. Each task can start from cloning a Git repository or similar repository and may contain a list of actions. If it starts by cloning a default repository, its first action will be of type smartClone, which clones and updates the repository. Besides the smartClone action, Octopus has a rather long  list of actions/tasks such as copy, delete, move and so on (see Table 1). This list of actions can be expanded at any time with new actions through the APIs exposed by Octopus.
</p>



<p style='text-align: justify;'>The process of executing a task by Octopus involves consulting the Octopus.json file, syntax checking, and switching from String to JSON format. The next step is to load the task that needs to be run.
</p>


<p style='text-align: justify;'>Depending on the order of the described steps, Octopus starts to execute. Execution will stop depending on actions, errors or other situations that might be encountered. Octopus also has the option to continue execution if one or more errors occur. Each of these cases is exemplified or must be mentioned in the configuration file. For example, if we want to delete a folder and this folder does not exist, we can stop Octopus execution, or we can continue it by using the <b>ignore errors</b> flag, which is set to true or false, depending on what we need. The default behavior is that if the folder you want to delete does not exist, no specific error is thrown. Generally, the program throws errors to the user when it needs to learn how to proceed. Various errors may occur. They may be coding errors made by the programmer, errors caused by wrong input and other unpredictable errors.
</p>

<p style='text-align: justify;'>Other Octopus tasks in the same file or separate files can be accessed. This feature represents Octopus' adaptability to be able to execute as many tasks as needed to either create a development environment, a test environment or a production environment, but also to perform certain automated tasks for programmers or testers within these environments. There is no limit to the number of tasks that can be detailed in the Octopus configuration file or the actions that Octopus must execute. Octopus executes in a sequence all of the tasks found in the JSON configuration file called Octopus.json.
</p>

<p style='text-align: justify;'>The structure of the Octopus.json<b></b> file is represented by a dictionary of tasks organized by purpose:
</p>



```js
{
  "workDir":"relative_or_global_path_to_be_used_as_current_working_dir",
  "purpose_1": [task1, task2 ...],
  "purpose_2": [task1, task2 ...],
  ...
}
```

Each task is an object with the following structure:

```js
{
  "name": "task_name_or_dependency_name",
  "src": "",
  "actions":[action1, action2 ...]
}
```

Each action is an object with the following structure:



```js
}
"type": "action_type_name",
  "options": {
      "option_1": "option_value"
  }
```

## 2.3 Examples

If we need to use Octopus as a dependency manager, we can have the following configuration:

```js
{
  "workDir": ".",
  "dependencies": [
      {
          "name": "privatesky",
          "src": "http://github.com/privatesky/privatesky.git"
      }
  ]
}
```


<p style='text-align: justify;'>Running Octopus with the above configuration will result in a new folder module which will contain a clone of the repository.
</p>

<p style='text-align: justify;'>If Octopus does not find any action specified for a task, it defaults to a smartClone action: 
</p>


```js
{
  "name": "privatesky",
  "src": "http://github.com/privatesky/privatesky.git",
  "actions":[
      {
          "type": "smartClone",
          "target": "modules",
          "options": {
              "branch": "master",
              "depth": 1
          }
      }
  ]
}
```


```js
{
  "name": "privatesky",
  "src": "http://github.com/privatesky/privatesky.git",
  "actions":[
      {
          "type": "smartClone",
          "target": "modules",
          "options": {
              "branch": "master",
              "depth": 1
          }
      }
  ]
}
node ./node_modules/octopus/scripts/run
# or (if you added the run script in the "scripts" section of your package.json as in the
Installation chapter)
npm run octopus
```

<p style='text-align: justify;'>Examples of an <b>Octopus.json</b> file can be found at <a href="https://raw.githubusercontent.com/PrivateSky/privatesky/master/octopus.json">this link</a>
</p>

# 3. Actions

<p style='text-align: justify;'>Octopus includes a wide range of useful actions for automating different types of development tasks. Octopus has a plugin mechanism to allow the collection of actions to be extended. This collection can always be extended with new actions through the APIs exposed by Octopus. Octopus allows creating, copying, moving and deleting files or directories. An important action of Octopus is smartClone, which clones and updates a repository. The main Octopus actions are presented and described in the table below:</p>


| **Name**        | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|:----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <b>checksum</b> | Checksum is used to calculate the checksum of a specific file/Dir passed via {String}<b>action.src</b> and compare the result with a pre-recorded attribute passed via <b>{String}action.expectedChecksum</b>.<br/> The checksum can be calculated with specific options. <br/>{String}<b>action.algorithm</b>, {String}<b>action.encoding</b>.                                                                                                                                            |
| <b>clone </b>   | Clone used to make a git clone of repo {String}<b>dependency.src</b> in a specific location {String}<b>action.target.</b> Optional clone options can be specified in {Object}<b>action.options</b>.<br/>Optional credentials: username and password can be specified in {Object}dependency.credentials.                                                                                                                                                                                    |
| <b>commit</b>   | Commit action can be used in release scripts to automate the push of a new version.<br/> Commit is used to automate steps like git add -A, commit and push into a repo {String}<b>dependency.src</b> in a specific location {String}<b>action.target.</b> <br/> Optional clone options can be specified in {Object}<b>action.options.</b> <br/> Optional credentials: username and password can be specified in  {Object}<b>dependency.credentials</b>.                                    |
| <b>copy</b>     | Copy a file or a directory, from {String}<b>dependency.src</b> to {String}<b>action.target</b>. <br/>Note: If <b>src</b> is a directory, it will copy everything inside of the directory, not the entire directory itself. <br/>Note: If <b>src</b> is a file, the target cannot be a directory.                                                                                                                                                                                           |
| <b>execute</b>  | Execute action can be used to extend the capabilities of Octopus to execute specific terminal commands passed via {String}<b>action.cmd </b>argument.<br/>Optional can be passed command arguments via {Array}<b>action.args</b>. <br/>Optional can receive options like cwd, stdio configuration etc. via {Object}<b>action.options</b>.                                                                                                                                                  |
| <b>extract</b>  | Extracts a .zip file from a source path {String}<b>action.src</b> to a specific path {String}<b>action.target.</b>                                                                                                                                                                                                                                                                                                                                                                         |
| <b>install</b>  | Install action is capable of automating the installation of a dependency from a source (e.g.npm or URL package).                                                                                                                                                                                                                                                                                                                                                                           |
| <b>move</b>     | Moves file or directory from {String}<b>actions.src</b> to {String}<b>action.target.</b>                                                                                                                                                                                                                                                                                                                                                                                                   |
| <b>mkdir</b>    | Creates a new folder based on {String}<b>action.target</b>.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| <b>remove</b>   | Remove a file or directory from a specified path {String}<b>action.target</b>                                                                                                                                                                                                                                                                                                                                                                                                              |
| smartClone      | SmartClone action tries to execute a git clone command and if it finds the repo already cloned and the origin remote matches {String}<b>dependency.src</b> then executes git pull in order to update the repo. All properties found in {Object}<b>action.options </b>are passed to the git clone command as arguments.                                                                                                                                                                     |



# 4. Octopus as a module

<p style='text-align: justify;'>JS (JavaScript) modules allow us to split our code into two separate files. The Octopus module is composed of a <b>Runner</b> class and an <b>ActionRegistry</b> class.
</p>


## 4.1 Runner class

### Function run(configfileOrObject, configTarget, callback)

**Description**: Allows configuration to be executed.



| **Name**           | **Type** | **Value** | **Description**                                                          |
|:-------------------|:---------|:----------|:-------------------------------------------------------------------------|
| configfileOrObject |          |           | Path to octopus.json file or a JSON object containing the configuration. |
| configTarget       |          |           | The name of a single target to execute.                                  |
| callback           | function | *required | 


**Callback parameters**


| **Name** | **Type**            | **Response example** |
|:---------|:--------------------|:---------------------|
| err      | ErrorWrapper object |                      |      

**Description**: Contains a message and the error.

### Example

Basic config with one target and one task that executes an echo command with "Hello World!".

```js
const config = {
  "workDir": ".",
  "install": [
      {
          "name":"demo-task",
          "actions":[
              {
                  "type": "execute",
                  "cmd": "echo Hello World!"
              }
          ]
      }
  ]
};
const octopus = require("octopus");
octopus.run(config, "install", function(err, result){
  if(err){
      throw err;
  }
  console.log("Execution finished!");
});
```

## 4.2  Action register class

### Function registerActionHandler(name, handler, overwrite)

**Description**: Allows to extend or overwrite actions collection.



| **Name**  | **Type**  | **Value**  | **Description**                                                                                         |
|:----------|:----------|:-----------|:--------------------------------------------------------------------------------------------------------|
| name      | String    |            | Name of the action that needs to be registered.                                                         |
| handler   |           |            | Will be called when the action will be found in a task configuration.                                   |
| overWrite |           |            | Force to overwrite if there is already an action defined using the same name.                           |



### Example

Register a new action called echo to display a custom string to the console.


```js
const octopus = require("octopus");
const actionRegistry = octopus.actionRegistry;
actionRegistry.registerActionHandler("echo", function(task, action, callback){
  if(typeof action.args === "undefined"){
      return callback(new Error("No args found on echo action"));
  }
  if(typeof actions.args === "string"){
      console.log(action.args);
  }
  if(Array.isArray(actions.args)){
      console.log(...action.args);
  }
  callback();
});
const config = {
  "workDir": ".",
  "demo": [
      {
          "name":"demo-task",
          "actions":[
              {
                  "type":"echo",
                  "args":"Hello World!"
              }
          ]
      }
  ]
};
octopus.run(config, "demo", function(err, result){
  if(err){
      throw err;
  }
  console.log("Example done!");
});
```


**Contributors**


1. <p style='text-align: justify;'><a href="www.axiologic.net">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="www.opendsu.com">www.opendsu.com</a> site.

2. <p style='text-align: justify;'><a href="www.pharmaledger.eu">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.

3. <a href="www.privatesky.xyz">PrivateSky Research Project</a>: MIT licensed content accordingly with the contracts. https://profs.info.uaic.ro/~ads/PrivateSky/


# Annex 1. Contributors

| **Current Editors**                  | **Email**                                |
|:-------------------------------------|:-----------------------------------------|
| Sînică Alboaie                       | sinica.alboaie@axiologic.net             |
| Cosmin Ursache                       | cosmin@axiologic.net                     |
| Teodor Lupu                          | teodor@axiologic.net                     |
| Andi-Gabriel Țan                     | andi@axiologic.net                       |
| **Contributors Axiologic Research**  | **Email**                                |
| Adrian Ganga                         | adrian@axiologic.net                     |
| Andi-Gabriel Țan                     | andi@axiologic.net                       |
| Cosmin Ursache                       | cosmin@axiologic.net                     |
| Daniel Sava                          | daniel@axiologic.net                     |
| Nicoleta Mihalache                   | nicoleta@axiologic.net                   |
| Valentin Gérard                      | valentin@axiologic.net                   |
| **PrivateSky Contributors**          | **Email**                                |
| Alex Sofronie                        | alsofronie@gmail.com (DPO)               |
| Cosmin Ursache                       | cos.ursache@gmail.com (UAIC)             |
| Daniel Sava                          | sava.dumitru.daniel@gmail.com (HVS, AQS) |
| Daniel Visoiu                        | visoiu.daniel.g@gmail.com (SGiant)       |
| Lenuța Alboaie                       | lalboaie@gmail.com (UAIC)                |
| Rafael Mastaleru                     | rafael@rms.ro (RMS)                      |
| Sînică Alboaie                       | salboaie@gmail.com (UAIC)                |
| Vlad Balmos                          | vlad.balmos@gmail.com (Code932)          |
| **PharmaLedger Contributors**        | **Email**                                |
| Ana Balan                            | bam@rms.ro (RMS)                         |
| Bogdan Mastahac                      | mab@rms.ro (RMS)                         |
| Cosmin Ursache                       | cos@rms.ro (RMS)                         |
| Rafael Mastaleru                     | raf@rms.ro (RMS)                         |
