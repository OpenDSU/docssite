---
title: A site with WebCardinal
layout: home
parent: How to create
grand_parent: OpenDSU Wallets Developers
nav_order: 1
---

Table of contents

    1.Prerequisites
    2.Getting a WebCardinal distribution
    3.Quick blank template
    4.Adding a page
    5.How does the site work?
    6.Know more

This guide is meant to provide information on how to create a website using the WebCardinal framework.
Prerequisites
#
Copy to clipboard

    Install or update Node (including NPM) to version 12.14.0.
    Install or update Git.

Getting a WebCardinal distribution
#
Copy to clipboard

    Start by cloning the webcardinal-bundler.

    git clone https://github.com/webcardinal/webcardinal-bundler

    Install WebCardinal bundler

    cd webcardinal-bundler && npm install

    Install minimal bundle (or another bundle for more components)
    Check each WebCardinal bundle in the dedicated section from below.

    npm run bundle-minimal

    Build components from bundle

    npm run build

The generated distribution is now in webcardinal-bundler/webcardinal directory.
Quick blank template
#
Copy to clipboard

Start by cloning a blank template to your machine.

git clone https://github.com/vassia38/webcardinal-blank-app my-webcardinal-app
cd my-webcardinal-app
rm -rf .git
git init

Feel free to commit it to your own repository.

# replace 'https://github.com/username/webcardinal-site.git' with the your own repository url
git remote add origin https://github.com/username/web-site.git
git fetch
git add .
git commit -m "first commit"
# push the files to your git repository.
git push --set-upstream origin master

Adding a page
#
Copy to clipboard

Inside your project directory you'll find "webcardinal.json", where your WebCardinal app is configured. Open it with your favorite editor; it should look like this:

{
    "pagesPathname": "pages",
    "pagesFallback": {
      "name": "Home"
    },
    "translations": false,
    "pages": [

    ]
}

Next thing we'll do is write in it the pages we'll want added. In this tutorial we'll just set a homepage for your project, by adding a page object in the array "pages". To read more about configuration, go here.

{
    "pagesPathname": "pages",
    "pagesFallback": {
      "name": "Home"
    },
    "translations": false,
    "pages": [
        {
            "path": "/",
            "name": "Home",
            "src": "home.html"
        }
    ]
}

Now create the "pages" directory and inside it, the "home.html" file, to which you'll copy and paste the next code.

<webc-container>
    <h1>My Homepage</h1>
</webc-container>

Open up PowerShell and run the command npm run server; this will start up a local host of your site, at http://127.0.0.1:8000.

Good job! Your site should now look like this:
How does the site work?
#
Copy to clipboard

By taking a look inside "index.html" we can see the most essential things for WebCardinal to do its magic: the script imports the WebCardinal components, and the stylesheet brings a basic necessary stylization for them.

<head>
    <!-- WebCardinal dist -->
    <script type="module" src="webcardinal/webcardinal.js"></script>
    <link rel="stylesheet" href="webcardinal/webcardinal.css">
</head>

Next element, <webc-app-root> is the entry point of your application. Its attached controller ApplicationController converts the configuration from "webcardinal.json" into the application we see.

<body>
    <webc-app-root>
        <webc-app-container>
            <header slot="before">Header</header>
            <webc-app-router></webc-app-router>
            <footer slot="after">Footer</footer>
            </webc-app-container>
    </webc-app-root>
</body>

Here we have a more custom look for the base of our website: before and after <webc-app-router> (responsible with rendering the pages) we have two slots for adding our own header and footer.
Try to remove everything inside <webc-app-root> and see the result; you'll get a more standard WebCardinal app. Feel free to read more about it here.
Know more
#
Copy to clipboard

What is a model, a view, a controller?

WebCardinal offers some useful components to make the development of applications more easier. You can check out each component in the WebCardinal Components.

The Controller class offers the most basic support for WebCardinal's functionalities, and the WebcController extends it.

WebCardinal comes with some very useful and powerful attributes that can be used on mainly every HTML element.

    data-for - used for iteration in markup over array
    data-if - used for add conditional capabilities to your application
    data-view-model - used for binding many tag attributes to the same element
    data-tag - used for an easier event subscription experience

WebCardinal has a support mechanism for translations via skins.
