---
title: ConstValue 
layout: home
parent: OpenDSU Contributors
nav_order: 6
---

ConstValue (RFC-018)

Specifications

With the creation of ConstValueSSI, OpenDSU tries to create a deterministic BrickMap for ConstDSUs. Typically, BrickMaps get encrypted using the encryption key of an external KeySSI, such as the SReadSSI or ConstSSI. The encryption is deterministic. However, if someone adds files or mounts DSUs in the ConstDSU, new bricks are required, and they will be encrypted with new random keys. ConstValueSSIs are useful in some corner cases, like when we want to be able to restore data from lost backups. The BrickMap for a ConstValueDSU is stored in the blockchain, therefore it cannot be lost.

Figure 1: The overview of ConstValueSSI & ConstValueDSU

ConstValueSSI is resolved to a DSU called  “ConstValueDSU”. These DSUs cannot be modified and are stored directly in the blockchain (not in the brick storage).

ConstValueSSIs are created starting with a ConstSSI, a BDNS domain for the BrickMap replacement, and the actual content of the BrickMap is represented as a JSON and stored directly in the blockchain as ValueSSIs, replacing the usual HaskLinkSSIs used for Const DSUs.

Creation example:

createConstValueSSI(aconstSSI, brickMapDomain, JSONMap, callback);

        The usage of the ConstValueSSI is through resolving ConstSSIs. When ConstSSIs are resolved, it checks if the value is a “hl” or a “vl” and instantiates the DSU using the corresponding factory (ConstDSU factory or a ValueFactory).
1.1. JSONMap Specification

The JSONMap parameter will contain two sections:

    “files” contain a dictionary where each key is a path, and the value is the content of the file;
    “mounts” contain a dictionary where each key is a path and the value is a KeySSI mounted in that path.

1.2. ValueSSI Specification

ValueSSI as SSI with empty control. As the type field (second field in SSIs), we use the “vl” string. The “specific string” contains the encrypted JSON. The ConstSSI is used for encryption of the “specific string” (in the same way in which the BrickMaps of the ConstDSUs are encrypted).
1.3. ConstValueDSU Behavior

ConstValueDSU offers readFile API for “files” and all normal APIs for paths found in “mounts”. If the “manifest” file is read, readFile will generate an answer based on the “mounts” section of the JSON.

