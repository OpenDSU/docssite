---
title: DevOPS Tutorial 
layout: home
parent: OpenDSU Quick Start
nav_order: 4
---


# DevOPS Tutorial
{: .no_toc }

{: .feedback }
A period when the community can review the RFC (comment Docs).



**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)


# 1. Join Blockchain Network
## 1.1. Prerequisites

<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vQXzEuurQpzSmpHvjVQ55qP09jC4-53iSwucI6tL2my7qSW60k0L_wNSNVM7KfaGNmUFNzZIUhyUEJJ/pub?w=3197&h=951" class="imgMain" style="max-width: 100%; margin-left: 0px;"/>
    <p><b></b></p>
</div>

<p style='text-align: justify;'>The following components should be pre-installed:</p>

* Helm pl-plugin (<a href="https://github.com/PharmaLedger-IMI/helm-pl-plugin">https://github.com/PharmaLedger-IMI/helm-pl-plugin</a>).
* Pharmaledger-imi/helm-charts (<a href="https://github.com/PharmaLedger-IMI/helm-charts">https://github.com/PharmaLedger-IMI/helm-charts</a>).


- Other prerequisites also mentioned in helm chart documentation: helm 3, node v16.
- Refer also to: https://github.com/PharmaLedger-IMI/epi-workspace/issues/829.

## 1.2. Shared Configuration Repo Fork

<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vRZQSJCXgkodxmMj5AE_xvp9uVFIGfGFAtS9na-i3hwNMAjyY0LXQs43hYhp4HcEUHl-iNIlm2KnuxS/pub?w=1352&h=686" class="imgMain" style="max-width: 100%; margin-left: 0px;"/>
    <p><b></b></p>
</div>


<div style="text-align:center;">
    <img alt="" src="https://docs.google.com/drawings/d/e/2PACX-1vTkMe3YMQ6rziFepuCpvRWBQXiRRnkKUHyO5sF08wBR04VuxCStRf_p0t7G-eqfVcDPxIcD_F8qkdoC/pub?w=1565&h=779" class="imgMain" style="max-width: 100%; margin-left: 0px;"/>
    <p><b></b></p>
</div>


- <p style='text-align: justify;'>Fork PharmaLedger-IMI/epi-shared-configuration repository with your account   (<a href="https://github.com/PharmaLedger-IMI/epi-shared-configuration">https://github.com/PharmaLedger-IMI/epi-shared-configuration</a>).</p>
- <p style='text-align: justify;'>Create a directory under the appropriate network/environment and perform an initial commit.</p>

## 1.3. GitHub & Quorum Configuration

- <p style='text-align: justify;'>Configure ../bin/<company>/<network>/private/github.info.yaml for forked repo access.</p>
- <p style='text-align: justify;'>Populate ../bin/<company>/<network>/private/qn-0.info.yaml with desired quorum node helm chart values to be overwritten (values omitted will be defaulted).</p>

## 1.4. Generate enode information

<p style='text-align: justify;'>At this point, join-network.sh can be used in order for the necessary enode information to be generated:
</p>
    Comment out all lines after helm pl-plugin command execution.
    Execute: $ ./join-network.sh <company-name>

This  will create join-network.plugin.json & join-network.plugin.secrets.json
1.5. Standalone Generation of enode Crypto

In order to download common configuration values from forked shared configuration, comment out helm upgrade/install and execute:

$ ./ethadapter.sh <company>

Files generated will contain common info (eth-adapter.plugin.json) as well as company/implementation specific info (orgAccount.json, rpc-address.yaml) which are required for ethadapter deployment.
1.5.1. Standalone Generation of Eth Adapter Crypto

Populate a file with:

    Forked epi-shared-configuration repo name.
    Forked epi-shared-configuration repo read/write token.
    Name of the network which the quorum node has joined.

Execute the command using the file as input:

$ helm pl-plugin --ethAdapter –i <filename>.yaml -o
1.5.2. Eth Adapter deployment

Populate values to be overwritten in

../bin/<company>/<network>/private/ethadapter.info.yaml

 (all omitted will be defaulted based on helmchart values.yaml file).


Comment in helm upgrade/install command and execute ethadapter.sh script again for ethadapter deployment.



test 11

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Zoomable Image</title>
<link rel="stylesheet" href="css/styles.css"> <!-- Reference to the CSS file -->
</head>
<body>

<!-- HTML content with the image -->
<div style="display: flex; justify-content: center;">
  <img 
    alt="" 
    src="https://docs.google.com/drawings/d/e/2PACX-1vTkMe3YMQ6rziFepuCpvRWBQXiRRnkKUHyO5sF08wBR04VuxCStRf_p0t7G-eqfVcDPxIcD_F8qkdoC/pub?w=1565&h=779" 
    class="imgMain" 
    style="max-width: 100%; cursor: pointer; transition: max-width 0.3s ease-in-out;"
    onclick="openModal(this.src)"
  />
</div>

<div style="text-align:center;"> 
    <p><b>text</b></p>
</div>

<div id="myModal" class="modal">
  <span class="close" onclick="closeModal()">&times;</span>
  <img class="modal-content" id="modalImg">
</div>

<script src="zoom.js"></script> <!-- Reference to the JavaScript file -->

</body>
</html>
