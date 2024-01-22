---
title: FAQ
layout: home
parent: OpenDSU Wallets Developers
nav_order: 3
---

Table of contents

    1.How to create a SSApp workspace
    2.How to add new projects to a SSApp workspace
    3.How to install a SSApp
    4.How to build a new wallet-type
    5.How to customize a wallet
    6.Customizing a wallet by adding a new SSApp
    7.Customizing a wallet by changing the menu structure
    8.What is the Loader's purpose?

How to create a SSApp workspace
#
Copy to clipboard
The development of a SSApp needs a special workspace that makes the building and testing flows as efficient as possible. An example of such a workspace is the GitHub repo tutorial-workspace. The tutorial-workspace repo contains the basic files, configurations and dependencies that are needed to help populate the entire workspace with the necessary sub projects and code, plus a few useful use-case examples.
SSApp workspace structure
SSApp workspace structure
After the local cloning of tutorial-workspace repo, an installation process can be performed by running the npm install command in the project’s directory. The installation process is done by the Octopus task runner which reads the octopus.json file and, based on the information found in the file, runs the tasks that need to be completed to obtain a fully working workspace project.
SSApp workspace installation
SSApp workspace installation
Once the installation process finishes, the developer can access all the sub projects that are added in the workspace.
How to add new projects to a SSApp workspace
#
Copy to clipboard
To manage the workspace and to reliably replicate the workspace’s structure, new projects should be added with the help of Octopus. The command:

npm run add projectName http://git_repo_url_of_project

tells Octopus to clone the project into the current workspace and save all the details in the octopus.json file for later command replay. The projectName argument indicates the directory name under which the code found at http://git_repo_url_of_project needs to be cloned. It doesn’t matter what type of project we want to add to the workspace (SSApp source code, wallet type source code or other kind of business logic source code) - the command is the same.
How to install a SSApp
#
Copy to clipboard

For each newly created SSApp prototype we recommend the usage of a separate Git repository in order to keep the code safe and track the SSApp’s history. To create a new SSApp prototype and add it to your workspace, follow this tutorial. Also check some examples of SSApps: ssapp-template, ssapp-minimal-app.

Once the new SSApp prototype project structure is constructed based on the above mentioned tutorial, developers can write their code. The installation process of a SSApp prototype project is performed by the Octopus task runner which follows the steps described in the octopus.json file. When the npm install command is executed, Octopus runs the necessary commands that add the Cardinal distribution code and PrivateSky distribution bundles to the SSApp source code. The image below shows the folder structure of a SSApp prototype.
SSApp prototype structure
SSApp prototype structure
The main directories in which the code should be placed are /domain and /code. The purpose of the /domain directory is to store all the code needed to add custom SWARM definitions if the SSApp business logic requires it. During the build process of the SSApp prototype, the content of the domain directory is converted into a PrivateSky type bundle. The /code directory contains all the HTML, CSS, Javascript code and other assets the SSApp needs. The build process of the SSApp prototype is carried out with the help of a custom tailored script. The result of the script execution is a file called SEED which contains the Seed of the DSU created for the SSApp prototype. To start the build process run the following command:

npm run build

How to build a new wallet-type
#
Copy to clipboard
deprecated
When building a new type of wallet, a short sequence of commands needs to be run.
Create a wallet type name and install the loader for it

npm run add web-server/{name_of_wallet_type}/loader http://github.com/privatesky/web-dossier-loader.git

Note: Choose and replace name_of_wallet_type with the name of the new wallet type.
Setup the Wallet Type Prototype that will be used as base for the wallet

npm run bind-wallet {name_of_wallet_type} wallet_prototype

Note: wallet_prototype can be one from the list: menu-wallet-prototype, dossier-explorer-wallet-type or custom others.
Install SSApps from workspace in the wallet

npm run bind-app {name_of_wallet_type} name_of_ssapp_prototype

Note: Run the bind-app command for each SSApp prototype that we need in our new wallet type.
To test the result open a browser and go to http://localhost:8080/{name_of_wallet_type}/loader/.
How to customize a wallet
#
Copy to clipboard
A wallet can be customized by adding new SSApps into his configuration or by modifying the menu’s structure, pages’ content or custom business logic. Most of the time we don’t need to write code for a new wallet prototype as we can reuse existing code and just customize the configuration or make code updates to meet our business logic’s requirements.
Note: In the following chapter we use tutorial-workspace and navigate to the web-wallet directory. The Web-Wallet from tutorial-workspace/web-server/web-wallet represents a general purpose web type wallet. Web-wallet allows us to navigate inside a DSU and display its contents. It is customizable through SSApp installations. The following image highlights the basic structure of the web-wallet and the data that will be used when the web loader will create new instances of wallets.
Web server folder structure
Web server folder structure
You can can see that the web-server/web-wallet directory has three main sub folders:

    Loader
    A directory that contains the source code found at http://github.com/privatesky/web-dossier-loader.git and represents the code of a simple web app capable of creating new wallet instances based on the information found in the web-server/web-wallet directory.
    Wallet-Template
    A directory that contains a seed file with the SEED of the Dossier that stores the code of dossier-explorer-wallet-prototype; it can also store files that are loaded at runtime instead of the files stored inside dossier-explorer-wallet-prototype’s Dossier.
    Apps
    An index directory that stores data about SSApps that can be automatically installed into new wallets. The data consists in seed files for each SSApp prototype and customization files like the ones found in the wallet-template directory.

Customizing a wallet by adding a new SSApp
Copy to clipboard
To add a new SSApp into a wallet run the following command:

npm run bind-app web-wallet ssapp_prototype_name

The bind-app command ensures that the ssapp_prototype is built by running npm run build command in the ssapp_prototype source code directory and copies the seed file into the web-wallet/apps/ssapp_name directory.
Customizing a wallet by changing the menu structure
Copy to clipboard
Our web-wallet solution uses the dossier-explorer-wallet-prototype as a wallet base and if we need to change the menu structure of the web-wallet we have to create a file called menu.json in /web-server/wallet-template directory. At this moment we can make changes in our new menu.json file as we wish. Example of menu.json content:

{
  "defaultMenuConfig": {
    "icon": "fa-bars",
    "type": "route",
    "component": "psk-page-loader",
    "exact": false,
    "indexed": true,
    "historyType": "browser"
  },
  "pages": [
    {
      "name": "Home",
      "path": "/home",
      "pageSrc": "view-profile.html"
    },
    {
      "name": "Edit",
      "path": "/edit",
      "pageSrc": "edit-profile.html"
    },
    {
      "name": "Share",
      "path": "/share",
      "pageSrc": "share.html"
    }
  ]
}

Our new menu.json file will be loaded instead of the menu.json file stored inside dossier-explorer-wallet-prototype that is bound to our web-wallet.
What is the Loader's purpose?
#
Copy to clipboard
The Loader is a simple web application capable of instantiating a new wallet or recovering one based on the user’s option. The Loader doesn’t have any external dependencies except for the PrivateSky bundles that facilitate the interaction with EDFS. To build a wallet on the user’s request, the Loader communicates with the web server to retrieve the necessary details like wallet type seed, wallet customization content and ssapps prototypes’ seeds. After the information is accessible, the Loader passes through the phases illustrated in the workflow below:
Build workflow
Build workflow
Basically, the Loader creates a Dossier instance and then mounts at specific paths the Wallet type prototype code, and newly created SSApp instances using the seeds of the SSApp prototypes. The instantiation process of new SSApp, presented in the following diagram, is executed for each SSApp found in the folder /web-server/web-wallet/apps.
SSApp creation workflow
SSApp creation workflow
