---
title: WebCardinal Beginners Tutorial 
layout: home
parent: OpenDSU Quick Start
nav_order: 1
---

WebCardinal Beginners Tutorial (RFC-113)

Abstract

This RFC is aimed at WebCardinal beginners. It shows how to create the first WebCardinal page and how to create a new page. It also describes how to interact with the HTML page using WebCardinal attributes and how to load asynchronous data with the help of a data-source.
Introduction

WebCardinal and Cardinal are two OpenSource JavaScript MVC (Model-View-Controller) frameworks that help with the creation of a UI (User Interface) for SSApps (Self-Sovereign Applications).

WebCardinal and Cardinal revolve around the idea of adding a simple MVC layer on top of standard web components. WebCardinal offers almost all the functionality of Cardinal in the same form or offers an easier alternative. Some web components in Cardinal are still usable in WebCardinal.

The latest iteration is named WebCardinal, even though the first iteration was Cardinal. The only web components that are mandatory in order to use WebCardinal correctly are the ones in webcardinal-core.
1. Creation of the first WebCardinal Application

In this chapter, we will learn how to create the first WebCardinal page from a template. To be able to do this, it is good to have basic knowledge of HTML and JavaScript. We also need to have Node (including NPM - Node Package Manager) installed/updated to version 12.14.0 or newer and Git also installed and up-to-date.

First, we will learn how to make the application work on our side, then we will create the first static page, and then we will create the first dynamic page.
1.1. How to make it run on your side

git clone https://github.com/webcardinal/webcardinal-starter-app my-application

cd my-application

npm install

npm run server

Now, you should be able to open your application within a browser, at localhost:8000, and see a text saying “Header” at the beginning of the page, and a text saying “Footer” at the bottom.
1.2. Opening your first static page

Inside /my-application/, there is a directory called pages that contains a homePage. This is a basic HTML page containing the message: “This is my first page. I'm learning”. The page currently has some basic style rules; those can be edited in the home.css file.

It is mandatory to know how to define your new page and how to tell WebCardinal where its HTML and CSS are located. The next step is to tell WebCardinal that we’ve created a new page. Inside the webcardinal.json file, we need to add the newly created page to the “pages” array. The array should look like this:

"pages": [

   {

     "path": "/",

     "name": "Home",

     "tag": "home",

     "src": "./homePage/home.html"

   }

 ]

And we are done! By refreshing the browser page, you will be redirected to your first page in WebCardinal.
1.3. Creating your first dynamic page

The purpose of WebCardinal is to create web applications. For this, we need to create dynamic-based pages. As we mentioned before, WebCardinal is based on the MVC pattern. To be able to bind data with view we need to create a folder structure. We already have a directory called pages which will contain HTML pages and stylesheets (the view). For controllers, we need to create a new directory structure. Under your root folder (in our case, my-application) create a directory called scripts and, inside of it, another one called controllers. Here we will place all controllers of the application.

For a small glimpse into how WebCardinal can help you create web applications, please follow the next steps. First, we need to add a controller to our page. Go back to your home.html and add a controller and some variables with {{@variableName}} - these are model properties, which will be used for data binding.

<link href="pages/homePage/home.css" rel="stylesheet" />

<div class="page-content-container">

    <webc-container controller="HomeController">

        This is my first page. I'm learning.

        My name is {{@name}} and I'm {{@age}} years old.

        My favorite hobby is {{@hobby}}.

    </webc-container>

</div>

Now, we need to create the controller file. inside scripts/controllers, then add a new file HomeController.js.

const {WebcController} = WebCardinal.controllers;

export default class HomeController extends WebcController {

  constructor(...props) {

    super(...props);

    this.model = {

      name: "John Dee",

      age: 26,

      hobby: "Programming"

    }

  }

}

Now, if you navigate to your dynamic page in the browser, you can see that your content is controlled via the model set in the controller.

More details are available at the following links:

https://opendsu.com/wallets/webcardinal/overview

https://opendsu.com/wallets/webcardinal/configuration

https://github.com/webcardinal/webcardinal-app-starter

https://github.com/PrivateSky/ssapp-template
2. Creation of a WebCardinal Application in a Workspace

In this chapter, we will learn how to create the first page in WebCardinal inside an OpenDSU Workspace. It is recommended to have basic knowledge of HTML and JavaScript. While this tutorial is similar to the previous one, there are a few more steps that we have to do in order to build our application inside a workspace. We need to have Node (including NPM - Node Package Manager) installed/updated to version 12.14.0 or newer and Git also installed and up-to-date. You can read more about how this is done here. These are all the steps you need to follow for creating a workspace:
2.1. Create your workspace

In order to create a WebCardinal application inside a workspace, first, we need to create the workspace. We will start with a tutorial workspace that bundles all the necessary dependencies for building and running applications.

    Clone tutorial-workspace from GitHub:

git clone https://github.com/webcardinal/tutorial-workspace

    Go inside the tutorial-workspace directory and install the necessary dependencies:

cd tutorial-workspace

npm run dev-install

    Launch the server:

npm run server

    In another terminal window, run the build script:

npm run build-all

    You should now be able to see the application loader if you go to localhost:8080.

This means that the workspace is now up and running and you can create and load your app.
2.2. Add a WebCardinal App to your workspace

Please note that this second part of the tutorial is similar to creating a WebCardinal Application that is not part of a workspace, but with some relevant differences, so even if you already created your own WebCardinal Application, please pay close attention to the following steps if you wish to add that application to a workspace. We will start with a simple WebCardinal application template. First, open a terminal in the apihub-root folder of your workspace.

    Clone the template repo:

git clone  https://github.com/webcardinal/webcardinal-starter-app my-application

    Navigate to the newly created folder and install the necessary dependencies:

cd my-application  ↵

npm install

Create a static WebCardinal page. It is mandatory to know how to define your new page and how to tell WebCardinal where its HTML and CSS files are located. Create a new directory named pages. Inside pages, create a new folder called homePage. Inside the homePage folder, create the HTML and CSS files. Create two files named home.html and home.css. Inside home.html, insert this:

<link href="pages/homePage/home.css" rel="stylesheet" />

<webc-container>

This is my first page. I'm learning.

</webc-container>

Define ./my-application as the default URL.

In the index.html file of the ./my-application/ folder, add the following code snippet:

<head>

 <base href="./my-application">

  …

</head>

Inside the webcardinal.json file, we need to add the newly created page to the pages array. It should look something like this:

{

 "pagesPathname": "pages",

 "pagesFallback": {

   "name": "home",

   "src": "./homePage/home.html"

 },

 "translations": false,

 "pages": [

   {

     "path": "./",

     "name": "Home Page",

     "tag": "home",

     "src": "./homePage/home.html"

   }

 ]

}

Go back to the index.html file of the ./my-application/ folder and replace the “Hello world” message in the body with the following code snippet:

<webc-app-root>

 <webc-app-container>

      <webc-app-router></webc-app-router>

 </webc-app-container>

</webc-app-root>

Reference the /my-application/ folder from the body of the index.html file located in your workspace (ex: ../apihub-root/index.html):

<a ... href="/my-application/" ...> ... </a>

Run the server:

npm run server

And we are done! By navigating to localhost:8080, you should now be able to access your first page created with WebCardinal inside a workspace http://localhost:8080.
3. Using events in WebCardinal

The purpose of this tutorial is to learn how to use events in WebCardinal and create a new page. The data-tag attribute is used to tag elements to which we can attach listeners. It can be thought of as a more convenient querySelector combined with an event listener because it provides access to the attached model. Create a new page inside your application, and make sure that you provide a controller for the newly created page.

Inside your HTML page: // path - pages/dataTagPage/dataTagPage.html

link href="pages/dataTagPage/dataTagPage.css" rel="stylesheet" />

<webc-container controller="DataTagController/DataTagController">

   <h1>Data-tag Page</h1>

   <br>

   <div>

       <input type="number" value="0" data-tag="counter">

       <br>

       <button type="button" class="plus-btn" data-tag="plus-btn">+</button>

       <button type="button" class="minus-btn" data-tag="minus-btn">-</button>

   </div>

</webc-container>

Inside your controller: // path - scripts/controllers/DataTagController/DataTagController.js

const { WebcController } = WebCardinal.controllers;

export default class DataTagController extends WebcController {

   constructor(...props) {

       super(...props);

       this.onTagEvent('plus-btn', 'click', () => {

           this.getElementByTag("counter").value++;

       });

       this.onTagClick('minus-btn', () => {

           this.getElementByTag("counter").value--;

       });

       this.onTagEvent('counter', 'wheel', (model, target, event) => {

           event.preventDefault();

           event.deltaY > 0 ? target.value-- : target.value++

       });

   }

}

Update webcardinal.json by adding new page configuration:

"pages": [

….

{

   "path": "./dataTagPage",

   "name": "DataTag Page",

   "tag": "dataTagPage",

   "src": "./dataTagPage/dataTagPage.html"

}

If you navigate to your new page, you will see an input field and two buttons. By clicking on them, you will increment/decrement the input value. Also, by scrolling inside the input element, its value will change.

More details are available here: https://opendsu.com/wallets/webcardinal/attributes/data-tag.
4. Using Data-Binding in WebCardinal

The previous tutorial showed how to create your first page in WebCardinal and how to interact with your HTML page via events. In this part of the tutorial, you will learn how to use data-binding in WebCardinal. The data-view-model attribute is used to apply a model to an HTML element. The model is declared in the controller's model as a javascript object for an easy way to attach the controller variables to HTML elements. Create a new page inside your application (see previous step), and make sure that you provide a controller for the newly created page.

Inside your HTML file:

<link href="pages/dataVMPage/dataVMPage.css" rel="stylesheet" />

<webc-container controller="DataVMController/DataVMController">

   <h1>Data-View-Model Page</h1>

   <br/>

   <div>

       <label data-view-model="@labelDVM"></label>

       <input data-view-model="@inputDVM">

       <br/>

       <button type="button" data-tag="generate">Generate Name</button>

       <button type="button" data-tag="reset">Reset</button>

   </div>

</webc-container>

Inside your controller:

const { WebcController } = WebCardinal.controllers;

export default class DataVMController extends WebcController {

   constructor(...props) {

       super(...props);

       this.model={

           labelDVM:{

               innerHTML:"Please enter your name"

           },

           inputDVM:{

               type:"text",

               value:"",

               class:"inputName",

           },

           possibleName:['John','Jane','Andrew','Dimitrie','Stephen','Sofie']

       }

       this.onTagClick('reset',()=>{

           this.model.inputDVM.value=""

       })

       this.onTagClick('generate',()=>{

           let index=this.getRandomArbitrary(this.model.possibleName.length);

           console.log(index);

           this.model.inputDVM.value=this.model.possibleName[index];

       })

   }

   getRandomArbitrary( max) {

       return Math.floor(Math.random() * (max ));

   }

}

If you navigate to your new page, you will now see an input of type text and two buttons. The input uses the data view model to change its value when buttons are clicked.

More details are available here: https://opendsu.com/wallets/webcardinal/attributes/data-view-model.
5. Dynamically choosing what to display on your page

The purpose of this tutorial is to learn how to dynamically choose what will render on your page, using variables inside the page controller. Data-if allows conditional rendering of children components. If the value defined in the data-if attribute is evaluated to true, data-if will render its children from slot=true, else children from slot=false will be rendered. Create a new page inside your application, and make sure that you provide a controller for the newly created page.

Inside your HTML file:

link href="pages/dataIfPage/dataIfPage.css" rel="stylesheet" />

<webc-container controller="DataIfController/DataIfController">

   <h1>Data-IF Page</h1>

   <br>

   <div>

       <label>3+2=</label>

       <input data-view-model="@formModel">

       <br />

       <button data-tag="checkValue">Submit</button>

       <div data-if="@wasSubmitted">

           <div data-if="@isCorrect">

               <div slot="true">

                   Your answer is correct.

               </div>

               <div slot="false">

                   Your answer is incorrect. Try again.

               </div>

           </div>

       </div>

   </div>

</webc-container>

Inside your controller:

const { WebcController } = WebCardinal.controllers;

export default class DataIfController extends WebcController {

   constructor(...props) {

       super(...props);

       this.model={

           formModel:{

               type:"number",

               value:0,

           },

           correctResponse:5,

           wasSubmitted:false,

           isCorrect:false,

       }

       this.onTagClick('checkValue',()=>{

           this.model.wasSubmitted=true;

           if(this.model.formModel.value==this.model.correctResponse){

               this.model.isCorrect=true;

           }

           else{

               this.model.isCorrect=false;

           }

       })

   }

}

It is important to know that both true and false slots are optional. If neither of them is specified, then the whole data-if content will be considered the true slot.

Another important aspect to take into consideration is to not use event handlers in rendered children. If you have event handlers, use CSS logic or manipulate DOM from the controller in order to show and hide content.

If you navigate to your new page, you will now see a submit form that asks you to answer an easy math question. If your answer is correct, a congratulatory message will be displayed using data-if.

More details are available here: https://opendsu.com/wallets/webcardinal/attributes/data-if
6. Creation of a reusable component using data-for

In this part of the tutorial, we will learn how to create a reusable component using data-for to render its content. Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and use them in your web apps. In WebCardinal, they’re best used with data-source, so their content can be dynamically loaded. The data-for attribute is used to render multiple form sections or components based on a template and a model.

Create a new page inside your application, and make sure that you provide a controller for the newly created page. Then, create a new folder named “components”, which will contain your first component folder. After creating the said folder, add an HTML file to it.

Inside FirstComponent.html:

<webc-container controller="components/FirstComponent">

   <div data-for="@entities">

       <p>Hello, my name is {{@myName}}.</p>

       <p>I'm {{@age}} years old.</p>

       <p>My favorite animal is {{@favoritePet}}.</p>

   </div>

</webc-container>

Inside FirstComponent.js: // path = scripts/controllers/components/

const { WebcController } = WebCardinal.controllers;

export default class FirstComponent extends WebcController {

   constructor(...props) {

       super(...props);

       this.model = {

           entities: [

               {

                   myName: "John Doe",

                   age: "32",

                   favoritePet: "Dog"

               },

               {

                   myName: "Jane Doe",

                   age: "19",

                   favoritePet: "Cat"

               },

               {

                   myName: "Ben Doe",

                   age: "7",

                   favoritePet: "Dinosaur"

               }

           ]

       }

   }

}

Now, we need to set a name for our newly created component. For this, we have to add a preload file that will handle components. Inside index.js, replace <webc-app-root> with <webc-app-root preload="scripts/preload.js"> and inside preload.js add the following:

const { addHook } = WebCardinal.preload;

function defineWebCardinalComponents() {

   const { define } = WebCardinal.components;

   define('first-component','FirstComponent/FirstComponent');

}

addHook('beforeAppLoads', async () => {

   try {

       defineWebCardinalComponents();

   } catch (error) {

       console.error('Error while defining WebCardinal components', error);

   }

});

Now, the component can be used on any page.

Inside your HTML file:

<webc-container controller="DataForController/DataForController">

   <h1>Data-For Page</h1>

   <br>

   <first-component></first-component>

</webc-container>

If you navigate to your new page in the browser, you now can see that your page content is controlled via the array inside your controller model.

More details are available here: https://opendsu.com/wallets/webcardinal/attributes/data-for.
7. Loading data from a database asynchronously, with data-source

Data-source is used to render multiple form sections or components, just like data-for, but it can be used as a way to load data from databases in an asynchronous way. It is best used for pagination. This way, you will not load your entire database, but instead show a fixed number of entries.

Create a new page inside your application, and make sure that you provide a controller for the newly created page. Then, create a new folder named DataSources inside Scripts, then add FirstDataSource.js to it. For simplicity’s sake, we are going to use a mocked DB that will return dummy data, but in the real case, the data will be loaded from a real database.

Inside FirstDataSource.js:

const { DataSource } = WebCardinal.dataSources;

const db = {

   fetchData(start, length) {

       return [...Array(length).keys()];

   },

};

export class FirstDataSource extends DataSource {

   constructor(...props) {

       super(...props)

   }

   /**

  * @override

  */

   async getPageDataAsync(startOffset, dataLengthForCurrentPage) {

       const data = db.fetchData(startOffset, dataLengthForCurrentPage);

       return data.map((index) => ({

           number: startOffset + index + 1,

           text: `Text ${index + 1}`,

       }));

   }

}

Inside dataSource.html:

<link href="pages/dataSourcePage/dataSourcePage.css" rel="stylesheet" />

<webc-container controller="DataSourceController/DataSourceController">

   <h1>Data-Source Page</h1>

   <br>

   <webc-datatable datasource="@firstDataSource">

       <div slot="header">Number</div>

       <div slot="header">Text</div>

       <div>{{ @number }}</div>

       <div>{{ @text }}</div>

   </webc-datatable>

</webc-container>

Inside dataSource.css:

/* Src: pages/manual-tests/webc-datatable/1/styles.css */

.webc-datatable--header {

  font-size: 110%;

  font-weight: bold;

  padding: 0.5rem 0;

  margin-bottom: 0.5rem;

  border-bottom: 1px solid var(--primary-color);

}

.webc-datatable--container {

  display: grid;

  grid-template-columns: auto 1fr ;

  gap: 0.35rem 1rem;

}

.webc-datatable--container div:not(.webc-datatable--header) {

  border-bottom: 1px dashed var(--primary-color-transparent);

}

/*

Classes: .webc-datatable--header, .webc-datatable--container, .webc-datatable--scroll, .webc-datatable--loading

and in general .webc-datatable-<SLOT_NAME> are injected by webc-datatable for an easier styling

.webc-datatable--container uses a css grid view. Number of columns should mach with the defined number of columns form html (number of head slots)

.tdb-1 is just a scoping of styles (because multiple datatables are present in the current environment)

*/

Inside DataSourceController.js:

const { WebcController } = WebCardinal.controllers;

import { FirstDataSource } from "../../dataSources/FirstDataSource.js";

export default class DataSourceController extends WebcController {

   constructor(...props) {

       super(...props);

       this.model={

           firstDataSource:new FirstDataSource(),

       }

   }

}

If you navigate to your new page in the browser, you can now see that dataSource dynamically loaded a table with 20 elements.

More details are available here:

https://webcardinal.github.io/webcardinal-workspace/tests/manual/webc-datatable/1