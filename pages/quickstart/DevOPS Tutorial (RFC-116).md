---
title: DevOPS Tutorial 
layout: home
parent: OpenDSU Quick Start
nav_order: 4
---

DevOPS Tutorial (RFC-116)


1. Join Blockchain Network
1.1. Prerequisites

The following components should be pre-installed:

    Helm pl-plugin (https://github.com/PharmaLedger-IMI/helm-pl-plugin).
    Pharmaledger-imi/helm-charts (https://github.com/PharmaLedger-IMI/helm-charts).

* Other prerequisites also mentioned in helm chart documentation: helm 3, node v16.

** Refer also to: https://github.com/PharmaLedger-IMI/epi-workspace/issues/829.
1.2. Shared Configuration Repo Fork

    Fork PharmaLedger-IMI/epi-shared-configuration repository with your account   (https://github.com/PharmaLedger-IMI/epi-shared-configuration).
    Create a directory under the appropriate network/environment and perform an initial commit.

1.3. GitHub & Quorum Configuration

    Configure ../bin/<company>/<network>/private/github.info.yaml for forked repo access.
    Populate ../bin/<company>/<network>/private/qn-0.info.yaml with desired quorum node helm chart values to be overwritten (values omitted will be defaulted).

1.4. Generate enode information

At this point, join-network.sh can be used in order for the necessary enode information to be generated:

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

