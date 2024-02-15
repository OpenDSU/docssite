---
title: Developers Tutorial 
layout: home
parent: OpenDSU Quick Start
nav_order: 2
---

<style>
  /* Styles for the modal /
  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.9);
  }

  / Modal content /
  .modal-content {
    margin: auto;
    display: block;
    max-width: 90%;
    max-height: 90%;
  }

  / Close button */
  .close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
  }

  .close:hover,
  .close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }
</style>
<body>

<div id="myModal" class="modal" onclick="closeModal()">
  <span class="close" onclick="event.stopPropagation(); closeModal()">&times;</span>
  <img class="modal-content" id="img01" onclick="event.stopPropagation()">
</div>

<script>
function openModal(imgSrc) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  modal.style.display = "block";
  modalImg.src = imgSrc;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}
</script>

</body>


# **Developers Tutorial (RFC-114)**
{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs)

**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

**Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)



<!-- TOC -->
* [Prerequisites](#prerequisites)
* [1. Create your workspace](#1-create-your-workspace)
* [2.Create your SSAPP](#2create-your-ssapp)
* [3. Customize your SSAPP](#3-customize-your-ssapp)
* [4. Modules and Bundles](#4-modules-and-bundles)
  * [4.1  Modules](#41--modules)
  * [4.2  Bundles](#42--bundles)
* [5. Configure Domain](#5-configure-domain)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->




# **Prerequisites**

In order to be able to follow this guide, first you need to do the following steps:

<ol>
    <li> Install or update Node (including NPM) to version 14.15 or newer;</li>
    <li>Install or update Git. </li>
</ol>



# **1. Create your workspace**

<p style='text-align: justify;'>In order to create and run a SSApp, first we need to create a workspace. We will start from a <a href="https://github.com/webcardinal/tutorial-workspace">tutorial workspace</a> that bundles all the necessary dependencies for building and running SSApps. You can read more about how this is done <a href="https://github.com/webcardinal/tutorial-workspace#readme">here</a>. Here are all the steps you need to follow for creating a workspace:
</p>

<ol>
    <li>Clone tutorial-workspace from GitHub:</li>

     git clone https://github.com/webcardinal/tutorial-workspace

   <li>Go inside the [tutorial-workspace] directory:</li> 

    cd tutorial-workspace

 <li>Install all the necessary dependencies for a working development setup:</li>

    npm run dev-install
</ol>



**Note:** All the dependencies from the workspace can be found in the octopus.json file.

<ol>
 <li>Launch the server:</li>

    npm run server

 <li>Scan all the apps and wallets in the configuration and run the build script:</li>

    npm run build-all
</ol>




**Note:** Run this in a different terminal without closing the terminal that keeps the server running!

<ol>

<li> Now,  you should be able to see the application loader:</li>

</ol>


<div style="display: flex; justify-content: center;">
  <img 
    alt="" 
    src="https://docs.google.com/drawings/d/e/2PACX-1vT1e6pC7PkF8x0T6vNyTdsg8TVtr6LVKfjKoItsk4Rqy-MLYwaHc_ttPKFyWIaZrh9auDuQQBv4hXR_/pub?w=313&h=221" 
    class="imgMain" 
    style="max-width: 100%; cursor: pointer; transition: max-width 0.3s ease-in-out;"
    onclick="openModal(this.src)"
    title="Click to Zoom"
  />
</div>


<p style='text-align: justify;'>This means that the workspace is up and running, and you can create and load a simple SSApp. If you want to load a WebCardinal application rather than an SSApp in your workspace, check out the tutorial for the Creation of a WebCardinal Application in a workspace.
</p>





# **2.Create your SSAPP**

We will start with a simple <a href="">SSapp template</a>. First, open a terminal in the root folder of your workspace.

<ol>
<li> Clone the template repo:</li>

    git clone <a href="https://github.com/OpenDSU/ssapp-template">https://github.com/OpenDSU/ssapp-template</a> helloworld-ssapp

<li> Remove .git files and install dependencies:</li>

    cd helloworld-ssapp && rm -rf .git && npm install && cd ..

</ol>



<p style='text-align: justify;'><b>Note</b>: This command first enters the helloworld-ssapp folder, then removes the .git files and installs the necessary dependencies, and then navigates back to the initial folder (the parent of helloworld-ssapp). Please note that, for the next steps of creating your SSApp, the server should be running in a separate terminal.</p>
   
<ol>
    <li> Bind the newly created helloworld-ssapp to a new wallet:</li>

    npm run bind-wallet helloworld-wallet helloworld-ssapp

   <li>Prepare a loader for our newly created wallet:</li>

     npm run add-loader apihub-root/helloworld-wallet/loader https://github.com/OpenDSU/trust-loader
 <ol>

<li>Configure the loader:</li>

     mkdir -p trust-loader-config/helloworld-wallet/loader && cp -r default-loader-config-files/*  trust-loader-config/helloworld-wallet/loader

<p style='text-align: justify;'><b>Note:</b> This will create the needed folders and will add some default configuration files that can be accessed <a href="https://github.com/webcardinal/tutorial-workspace/tree/master/default-loader-config-files">here</a>. Each SSApp needs its own environment.js file (here, you can set a certain enclave type and other parameters, like different types of domains etc.) and a config-constants.js file (here, you can set global variables like the application name, default messages for the user etc).</p>

<li> Rebuild the workspace:</li>

       npm run build-all
 </ol>
</ol>


<p style='text-align: justify;'>We’re almost done! Our application can now be accessed at this link: <a href="http://localhost:8080/helloworld-wallet/loader/">http://localhost:8080/helloworld-wallet/loader</a>. The last thing we need to do is to be able to access our new application through the application loader.
</p>


<p style='text-align: justify;'>We can do this by modifying the <b>apihub-root/index.html file.</b> Then, we need to replace the address with the one of our application and also change the text of our button. These changes can be seen below:
</p>



<div style="display: flex; justify-content: center;">
  <img 
    alt="" 
    src="https://docs.google.com/drawings/d/e/2PACX-1vT18eCvQ_vtpGL1RcFu4Bnr4cpM98IOUwcXyoUbS5tqRpzh6wWOLHo9-sJ0lZBrAhl14mEzW_duSN55/pub?w=1226&h=445" 
    class="imgMain" 
    style="max-width: 100%; cursor: pointer; transition: max-width 0.3s ease-in-out;"
    onclick="openModal(this.src)"
    title="Click to Zoom"
  />
</div>



<p style='text-align: justify;'>The code of the SSApp is located in <b>helloworld-ssapp/code</b>. Let’s make some changes to this app.
</p>


# **3. Customize your SSAPP**


<p style='text-align: justify;'>First, let’s change the title of our application. For this, we need to modify the loader configuration constants file.
</p>



<div style="display: flex; justify-content: center;">
  <img 
    alt="" 
    src="https://docs.google.com/drawings/d/e/2PACX-1vQNrlWqMR_SwuWp6RUkRiaYdTqj0Mof7lY0b02eopQ040qxPmsnYO8RgOWDHoOkHWNBL2DUe0yD2irH/pub?w=1707&h=314" 
    class="imgMain" 
    style="max-width: 100%; cursor: pointer; transition: max-width 0.3s ease-in-out;"
    onclick="openModal(this.src)"
    title="Click to Zoom"
  />
</div>



<p style='text-align: justify;'>Currently, the application has a homepage that is dynamically loaded by the Webcardinal router. We can see the HTML in helloworld-ssapp/code/pages/home.html. Let’s change the page content.
</p>

<div style="display: flex; justify-content: center;">
  <img 
    alt="" 
    src="https://docs.google.com/drawings/d/e/2PACX-1vTo-PIwKvpOHj-5oVq19gk8Ulw1yCsLczG-pS3DpgXv3rvFFzXzW42jshIVUjiqNHEqLxxtr6x3tM-5/pub?w=1467&h=340" 
    class="imgMain" 
    style="max-width: 100%; cursor: pointer; transition: max-width 0.3s ease-in-out;"
    onclick="openModal(this.src)"
    title="Click to Zoom"
  />
</div>



<p style='text-align: justify;'>In order to apply these changes we can rebuild everything inside the workspace:</p>


            npm run build-all

<p style='text-align: justify;'>Restart the server to clean cached pages.</p>


<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vTj2fVbJTv_rJWYnC_n6N8fOCEcLM43x4BpIrtOadA_g1AahWQSmr_ZYfO5O4CDgQaqLhwYhMB0K30H/pub?w=942&h=139" class="imgMain" style="max-width: 100%; margin-left: 0px;"/>
</div>


**There we go!** 


# **4. Modules and Bundles**

<p style='text-align: justify;'>Your application might also need some other modules or reusable components. You can add them to your workspace or WebCardinal application using <a href="https://www.opendsu.org/pages/OpenDSU%20Wallets%20Developers/Octopus%20(RFC-095).html">Octopus (RFC-095)</a>.
</p>



## **4.1  Modules**


The opendsu-sdk module is added as a dependency in the octopus.json file in your workspace:

```js

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

```



At build, the octopus will first clone the contents of <a href="https://github.com/opendsu/opendsu-sdk">http://github.com/opendsu/opendsu-sdk.git</a> at the location <<target>>/<<name>> and then execute the commands specified by cmd. The workDir property specifies the current working directory, and “dependencies” is a list of dependencies for the workspace. 




<p style='text-align: justify;'>Each dependency has a name. In this case, the name is also the directory name of that module. The “src” property specifies the URL of the repo that contains the module. This command will clone only the master branch, so make sure to have it.
</p>


<p style='text-align: justify;'>For each dependency, you can specify a list of actions. For all the possible actions, please refer to  Octopus actions.</p>


## 4.2 Bundles


<p style='text-align: justify;'>Whether you want to reduce the number of server requests for JavaScript files or you want to do a node.js module to run in the browser, you can generate a bundle that can accomplish both of these things.
</p>
<p style='text-align: justify;'>Let’s say that, in your workspace, you have a module with certain functionalities. This module should have a file called index.js that exports the functionalities you want to expose.</p>



<div style="display: flex; justify-content: center;">
  <img 
    alt="" 
    src="https://docs.google.com/drawings/d/e/2PACX-1vQOcPI_kQRIJuaXUN1nzs8v_Q4LwOhfI0yZ6t_PFGpsEy8SkwsnGh4NM2ZAdRV0gKXpcFdihonwNyr9/pub?w=1443&h=520" 
    class="imgMain" 
    style="max-width: 100%; cursor: pointer; transition: max-width 0.3s ease-in-out;"
    onclick="openModal(this.src)"
    title="Click to Zoom"
  />
</div>


<p style='text-align: justify;'>In your module, you should create a build folder containing a file named build.json. This file specifies the name and dependencies of the module we want to build. Here’s an example:</p>
    


    {
    "my_module": {
     "deps": "my_module",
     "autoLoad": true
    }
    }


<p style='text-align: justify;'>There should also be a file called package.json, that defines the build command. This file should look something like this:</p>


    {
    ...
    "scripts": {
    ...
    "build": "node ../node_modules/octopus/scripts/run build devmode"
    }
    }







<p style='text-align: justify;'>We also need the <b>octopus.json</b> file. This file contains instructions for our build, necessary dependencies etc. For now, we will create the file and specify the build command, which will run the <b>pskbuild.js</b> script. The specified folder --source is the parent folder of the created module. The bundle will be created at the specified --output location after running the npm build command in the module folder.
</p>



```js


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


```




<p style='text-align: justify;'>To include the bundle in the application, just copy the output JavaScript file in your application and include it as a script in the index.html file.
</p>


<p style='text-align: justify;'><b>Note:</b> For example, after installing the opendsu-sdk module, the opendsu-sdk/psknode/bundels/iframeBoot.js file should be included in the index.html file of your application in order to use the OpenDSU API.
</p>



<p style='text-align: justify;'>As a good practice, all the dependencies of your applications should be defined in the octopus.json file of your workspace, using the target property to place them where needed.</p>






# **5. Configure Domain**

<p style='text-align: justify;'>Go to apihub-root/external-volumes/config/domains/ and create a new file with the name of your domain. We will use the “enable” property to specify the apihub modules enabled for the domain:
</p>



```js


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



```


<p style='text-align: justify;'>Then, go to apihub-root/external-volumes/config/bdns.hosts and add a configuration for your domain:</p>



```js

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


```




<p style='text-align: justify;'>If you want to learn more about domains, check out <a href="https://www.opendsu.org/pages/concepts/BDNS%20(RFC-022).html">BDNS (RFC-022)</a>.
</p>



**Contributors**

1. <p style='text-align: justify;'><a href="https://www.axiologic.net/">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="https://www.opendsu.org/">www.opendsu.org</a> site.

2. PrivateSky Research Project: MIT licensed content accordingly with the contracts. 
<a href="https://profs.info.uaic.ro/~ads/PrivateSky/"> https://profs.info.uaic.ro/~ads/PrivateSky/</a>






# Annex 1. Contributors

| **Current Editors**                 | **Email**                                                                    |
|:------------------------------------|:-----------------------------------------------------------------------------|
| Roxana Irimia                       | roxana@axiologic.net                                                         |
| Cosmin Ursache                      | cosmin@axiologic.net                                                         |
| Teodor Lupu                         | teodor@axiologic.net                                                         |
| Andi-Gabriel Țan                    | andi@axiologic.net                                                           |
| **Contributors Axiologic Research** | **Email**                                                                    |
| Adrian Ganga                        | adrian@axiologic.net                                                         |
| Andi-Gabriel Țan                    | andi@axiologic.net                                                           |
| Cosmin Ursache                      | cosmin@axiologic.net                                                         |
| Daniel Sava                         | daniel@axiologic.net                                                         |
| Nicoleta Mihalache                  | nicoleta@axiologic.net                                                       |
| Teodor Lupu                         | teodor@axiologic.net                                                         |
