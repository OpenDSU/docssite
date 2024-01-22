---
title: Developers Tutorial 
layout: home
parent: OpenDSU Quick Start
nav_order: 2
---

Developers Tutorial (RFC-114)


Prerequisites

In order to be able to follow this guide, first you need to do the following steps:

    Install or update Node (including NPM) to version 14.15 or newer;
    Install or update Git.

    Create your workspace

In order to create and run a SSApp, first we need to create a workspace. We will start from a tutorial workspace that bundles all the necessary dependencies for building and running SSApps. You can read more about how this is done here. Here are all the steps you need to follow for creating a workspace:

    Clone tutorial-workspace from GitHub:

git clone https://github.com/webcardinal/tutorial-workspace

    Go inside the [tutorial-workspace] directory: 

cd tutorial-workspace

    Install all the necessary dependencies for a working development setup:

npm run dev-install

Note: All the dependencies from the workspace can be found in the octopus.json file.

    Launch the server:

npm run server

     Scan all the apps and wallets in the configuration and run the build script:

npm run build-all

Note: Run this in a different terminal without closing the terminal that keeps the server running!

    Now,  you should be able to see the application loader:

This means that the workspace is up and running, and you can create and load a simple SSApp. If you want to load a WebCardinal application rather than an SSApp in your workspace, check out the tutorial for the Creation of a WebCardinal Application in a workspace, available in this document: WebCardinal Beginners Tutorial (RFC-113).

    Create your SSAPP

We will start with a simple SSapp template. First, open a terminal in the root folder of your workspace.

    Clone the template repo:

git clone https://github.com/OpenDSU/ssapp-template helloworld-ssapp

    Remove .git files and install dependencies:

cd helloworld-ssapp && rm -rf .git && npm install && cd ..

Note: This command first enters the helloworld-ssapp folder, then removes the .git files and installs the necessary dependencies, and then navigates back to the initial folder (the parent of helloworld-ssapp). Please note that, for the next steps of creating your SSApp, the server should be running in a separate terminal.

    Bind the newly created helloworld-ssapp to a new wallet:

npm run bind-wallet helloworld-wallet helloworld-ssapp

    Prepare a loader for our newly created wallet:

npm run add-loader apihub-root/helloworld-wallet/loader https://github.com/OpenDSU/trust-loader

    Configure the loader:

mkdir -p trust-loader-config/helloworld-wallet/loader && cp -r default-loader-config-files/*  trust-loader-config/helloworld-wallet/loader

Note: This will create the needed folders and will add some default configuration files that can be accessed here. Each SSApp needs its own environment.js file (here, you can set a certain enclave type and other parameters, like different types of domains etc.) and a config-constants.js file (here, you can set global variables like the application name, default messages for the user etc).

    Rebuild the workspace:

npm run build-all

We’re almost done! Our application can now be accessed at this link: http://localhost:8080/helloworld-wallet/loader. The last thing we need to do is to be able to access our new application through the application loader.

We can do this by modifying the apihub-root/index.html file. Then, we need to replace the address with the one of our application and also change the text of our button. These changes can be seen below:

The code of the SSApp is located in helloworld-ssapp/code. Let’s make some changes to this app.

    Customize your SSAPP

First, let’s change the title of our application. For this, we need to modify the loader configuration constants file.

Currently, the application has a homepage that is dynamically loaded by the Webcardinal router. We can see the HTML in helloworld-ssapp/code/pages/home.html. Let’s change the page content.

In order to apply these changes we can rebuild everything inside the workspace:

npm run build-all

Restart the server to clean cached pages.

There we go! 

For a really cool app, the next step is checking out the WebCardinal Beginners Tutorial (RFC-113), where you can learn about WebCardinal controllers, events, or how to add new pages and components.

    Modules and Bundles

Your application might also need some other modules or reusable components. You can add them to your workspace or WebCardinal application using Octopus (RFC-095).
4.1. Modules

The opendsu-sdk module is added as a dependency in the octopus.json file in your workspace:

{

"workDir": ".",

"dependencies": [

    {

        "name": "opendsu-sdk",

        "src": "http://github.com/opendsu/opendsu-sdk.git",

        "actions": [

            {

                "type": "smartClone",

                "target": ".",

                "collectLog": false

            },

            {

                "type": "execute",

                "cmd": "cd opendsu-sdk && npm install"

            }

        ]

    }

]

}

At build, the octopus will first clone the contents of http://github.com/opendsu/opendsu-sdk.git at the location <<target>>/<<name>> and then execute the commands specified by cmd. The workDir property specifies the current working directory, and “dependencies” is a list of dependencies for the workspace.

Each dependency has a name. In this case, the name is also the directory name of that module. The “src” property specifies the URL of the repo that contains the module. This command will clone only the master branch, so make sure to have it.

For each dependency, you can specify a list of actions. For all the possible actions, please refer to Octopus actions.
4.2. Bundles

Whether you want to reduce the number of server requests for JavaScript files or you want to do a node.js module to run in the browser, you can generate a bundle that can accomplish both of these things.

Let’s say that, in your workspace, you have a module with certain functionalities. This module should have a file called index.js that exports the functionalities you want to expose.

In your module, you should create a build folder containing a file named build.json. This file specifies the name and dependencies of the module we want to build. Here’s an example:

{

 "my_module": {

     "deps": "my_module",

     "autoLoad": true

 }

}

        There should also be a file called package.json, that defines the build command. This file should look something like this:

{

 ...

 "scripts": {

   ...

   "build": "node ../node_modules/octopus/scripts/run build devmode"

 }

}

        We also need the octopus.json file. This file contains instructions for our build, necessary dependencies etc. For now, we will create the file and specify the build command, which will run the pskbuild.js script. The specified folder --source is the parent folder of the created module. The bundle will be created at the specified --output location after running the npm build command in the module folder.

{

 "workDir": ".",

 "dependencies": [],

 "build": [

   {

     "name": "Bundles",

     "src": "",

     "actions": [

       {

         "type": "execute",

         "cmd": "node ../opendsu-sdk/psknode/bin/scripts/pskbuild.js --source=./../ --projectMap=./build/build.json  --prod=true --output=./build/bundles"

       },

       {

         "type": "remove",

         "target": "./builds"

       }

     ]

   }

 ]

}

To include the bundle in the application, just copy the output JavaScript file in your application and include it as a script in the index.html file.

Note: For example, after installing the opendsu-sdk module, the opendsu-sdk/psknode/bundels/iframeBoot.js file should be included in the index.html file of your application in order to use the OpenDSU API.

As a good practice, all the dependencies of your applications should be defined in the octopus.json file of your workspace, using the target property to place them where needed.

    Configure Domain

Go to apihub-root/external-volumes/config/domains/ and create a new file with the name of your domain. We will use the “enable” property to specify the apihub modules enabled for the domain:

{

 "anchoring": {

   "type": "FS",

   "option": {}

 },

 "enable": [

   "mq",

   "enclave"

 ],

 "skipOAuth": [

   "/bricking/vault",

   "/anchor/vault"

 ]

}

        Then, go to apihub-root/external-volumes/config/bdns.hosts and add a configuration for your domain:

{

 "altimanager": {

   "replicas": [],

   "brickStorages": [

     "$ORIGIN"

   ],

   "anchoringServices": [

     "$ORIGIN"

   ],

   "notifications": [

     "$ORIGIN"

   ]

 }

}

If you want to learn more about domains, check out BDNS (RFC-022).

