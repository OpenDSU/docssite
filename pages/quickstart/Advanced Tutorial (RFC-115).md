---
title: Advanced Tutorial 
layout: home
parent: OpenDSU Quick Start
nav_order: 3
---

Advanced Tutorial (RFC-115)



Prerequisites

In order to be able to follow this guide, you first need to do the following steps:

    Install or update Node (including NPM) to version 14.15 or newer;
    Install or update Git.

1. Create your Password Manager

The Password Manager is a Self-Sovereign Application with an intuitive user interface that can help you store and access your passwords in a safe and organized manner. This tutorial presents the steps you should follow to be able to clone, run and make changes to the Password Manager SSApp.
1.1. Create a workspace

A workspace is needed in order to be able to run a SSApp. The easiest way to create one is by cloning the template workspace found here, installing the necessary dependencies and executing all the actions found in the octopus.json file, starting a server and building all its elements. Here are the commands you can use to create a workspace from the existing template:

    git clone https://github.com/webcardinal/tutorial-workspace
    cd tutorial-workspace
    npm run dev-install
    npm run server
    while the server is still running, open a new terminal and execute the following command: npm run build-all

A more detailed tutorial for creating a workspace can be found in OpenDSU RFC 114 - OpenDSU Workspace Tutorial.
1.2. Add the Password Manager SSApp to your workspace

OpenDSU provides a template Password Manager SSApp which can be found here. In order to add it to the workspace, we have to execute the following commands:

    npm run add password-manager https://github.com/OpenDSU/password-manager
    npm run add apihub-root/password-manager-wallet/loader http://github.com/opendsu/trust-loader
    cd apihub-root/password-manager-wallet/loader
    cp config-constants.js-template config-constants.js
    cp environment.js-template environment.js
    cp loader-config.local.json-template loader-config.local.json
    cd ../../..
    npm run bind-wallet password-manager-wallet password-manager

These commands add the SSApp and a loader for that SSApp to the workspace. The config-constants.js, environment.js and loader-config.local.json files are created from their templates and a wallet is bound to the password-manager.

Each SSApp needs its own environment.js file (where you can set a certain enclave type and other parameters) and a config-constants.js file (here, you can set global variables like the application name, default messages for the user etc.). The loader is necessary and it “tells” the workspace how to load the application.
1.3. Test successful integration into workspace

To run your application, simply open an incognito window in Google Chrome and access localhost:8080/password-manager-wallet/loader. You can also edit the apihub-root/index.html file of your workspace, and then access localhost:8080 and be redirected to the password manager with the simple click of a button. In order to do this, replace the href attribute of the button with "/password-manager-wallet/loader". You might also want to change the text on the button from “Nothing here yet” to “My Password Manager”, for example, since now the button actually links to an application. For more information about how to use the workspace, check out RFC 114 - Developers Tutorial. This is how the end result should look like:
2. Password Manager SSApp description

A password manager is very useful in order to keep one’s passwords somewhere safe and easily accessible. The flow of this specific Password Manager application is the following: the user can add one or more categories for different types of passwords. After at least one category exists, the user can save passwords by completing a form where they enter their name (or their username, if they wish), the domain for which that password will be used, their email address linked to that account, they choose a category to which the password belongs (examples of possible categories: streaming services, business, work, personal etc.) and then they enter their password and confirm it (in order to avoid any possible typos that may have occurred while entering the password the first time).

        If you want to make changes to the application, you can make those changes in the password-manager-ssapp folder, located in the root directory of your workspace.
3. How to create a page in a SSApp

SSApps are based on a MVC (model-view-controller) architectural pattern. This allows for easier control over different elements of the application. The user interacts indirectly with the model, with the help of the view and the controller. Therefore, a page from a SSApp usually consists of 3 different files: the HTML file (containing the static content that can be found on the page), the CSS file (containing the stylesheet for that particular page) and the controller (a JavaScript file that contains instructions about how to handle different inputs from the user). The controller can dynamically change the content of both the page and the model, thus creating a link between the user interface and the operations happening on the backend side of the application.

        If you want to create a new page, the HTML file should be located at ../code/pages, the CSS file at ../code/pages/stylesheets, and the JS file at ../code/scripts/controllers. The CSS file can also be located somewhere else since it will be referenced from the HTML file, but the best practice is to create all the stylesheets in a separate directory, since it will be easier to find them when we want to make modifications. Also, after creating the page, it must be added to the “pages” array in the webcardinal.json file, found in the ../code directory. Don’t forget that your HTML file should contain the link to your stylesheet and the controller should be specified as an attribute of the webc-container element.
3.1. Creating a page

First of all, if we want to create a new page for our application we have to create its HTML file, the file that will be rendered by the browser. Go to ../code/pages. You should pick an easy-to-understand name that very briefly describes the purpose of the page you want to create. As an example, we will create a page that we can use to add a new category (although this page already exists). Let’s say we name this file add-category.html. As you can see, the name of the file is descriptive of the page that we are creating and also easy to remember. Make sure that the file has the .html extension. Inside the page, we will be using a webcardinal component called page-template. This is a custom component representing a container element which can have different slots (“page-title” and “page-content”). Inside this element, we should add typical html container elements. For the “page-title” slot we can use a <span> element, since it only contains some text, while for the “page-content” slot it is best to use a <div> element, or something similar, which can, in turn, contain other elements. Because we want to take advantage of the webcardinal set of functionalities, we will populate this slot with a <webc-container> element. This element also has a controller attribute, which we will describe in the further steps. The HTML file should now look similar to this:

<page-template>

   <span slot="page-title">Add Category</span>

   <div slot="page-content">

       <webc-container>

           <!--Here you can have a form to fill out the necessary-->

           <!--fields in order to be able to add a new category. -->

       </webc-container>

   </div>

</page-template>

After creating the HTML file, don’t forget to add it to the pages array in the webcardinal.json file, located in the ../code/ directory:

"pages": [

 {

   "name": "Add category",

   "src": "./add-category.html",

   "tag": "add-category"

 }

]
3.2. Creating the CSS file

CSS files are typically linked to HTML files and contain instructions about styling different elements from the page. By using CSS, we are able to specify elements’ size, colors, backgrounds, visibility and transparency etc. We can tweak the style of these elements by adding classes or IDs to certain elements in the HTML file. It is a good idea to also use an intuitive name for the CSS file, for example, add-category.css. To use the newly created CSS file, add this link at the beginning of the HTML document, outside of any other elements, like this:

<link rel="stylesheet" href="pages/stylesheets/add-category.css">
3.3. Creating the controller

Any page controller is actually a class that extends the WebcController class of the WebCardinal framework. This class has a constructor function that is called when the corresponding HTML page is loaded by the browser and it also has other functions. It is recommended that you use an intuitive name for this file so that it will be easier to find later on, when you want to make changes. Let’s call it AddCategoryController.js. You can begin creating your controller from the example below:

const { WebcController } = WebCardinal.controllers;

class AddCategoryController extends WebcController {

   constructor(element, history, _model, _translationModel) {

       super(element, history, _model, _translationModel);

       // the instructions found here will be executed when the

       // add-category page is loaded.

   }

   // inside the class, you can create other useful functions.

}
4. How to use OpenDSU APIs in SSApps

The classic Service design pattern can be used with ease to create a data layer between the controllers and OpenDSU APIs. In our tutorial, we propose to take a closer look at a simple Service called CategoryManagerService that uses the OpenDSU Enclave concept as a database.

The CategoryManagerService.js file exposes a method (getCategoryManagerServiceInstance) for retrieving the ready-to-use singleton instance of our service. The purpose of this method is to obtain an OpenDSU Enclave instance and make it available for our service to use.

let categoryManagerService;

let getCategoryManagerServiceInstance = function (callback) {

   if (!categoryManagerService) {

       const opendsu = require("opendsu");

       let securityContext = opendsu.loadAPI("sc");

       return securityContext.getMainEnclave((err, mainEnclave) => {

           if (err) {

               return callback(err);

           }

           categoryManagerService = new CategoryManagerService(mainEnclave);

           return callback(undefined, categoryManagerService);

       });

   }

   callback(undefined, categoryManagerService);

}

As you can see, in this method, we load the OpenDSU SDK by calling require(“opendsu”). In order to get our Main Enclave instance, we load and call the OpenDSU Security Context. Once we have the enclave instance, we can proceed with the singleton service instance initialization. We use the singleton design pattern because it is easy to provide the controllers with an instance of our service which doesn’t have any state, it just uses the OpenDSU Enclave as a Database to interact with.

The service itself has several methods that call different functions from the db API that serve the purpose of accessing and modifying data from the enclave used as a database. Using the service helps us access the enclave that is structured as a database with two different tables: one for categories and another one for passwords.

Here is an example of how we can use the service to save a new category:

addCategoryListener() {

   this.onTagClick('add-new-category', () => {

       const newCategoryName = document.getElementById('category-name').value;

       getCategoryManagerServiceInstance((err, instance) => {

           if (err) {

               // display a modal with an error message for the user

           }

           // we call the method from the service to add a category

           instance.addCategory(newCategoryName, (err) => {

               if (err) {

                   // display modal with error message for the user

               }

               this.navigateToPageTag('view-items');

           })

       });

   });

}

