---
title: VersionLessDSUs 
layout: home
parent: Open DSU Advanced
nav_order: 4
---

VersionLessDSUs (RFC-019)

Specifications

With the creation of VersionLessDSUs, we desired to create an optimised mechanism for storing edge wallets (e.g. mobile applications). In some cases, keeping all those versions and even having to do calls towards anchoring and bricking can be cumbersome or requires having an APIHub server embedded in the client application. The alternative is to have just a simple persistence to read or store the state of the DSU.

Figure 1: GET and PUT on /versionlessdsu/:anchorId:
1.1. Persistence

APIHUb contains the “versionlessdsu” middleware that offers GET and PUT operations.
1.1.1 Return VersionLessDSU content

Will blindly return the content associated with the specified file path.

	

/versionlessdsu/{filePath}
Path Parameters

Name
	

Type
	

Value
	

Description

filePath
	

string
	

*required
	

The file path at which the VersionLessDSU content will be retrieved
Responses

Status Code
	

Description

200
	

Successfully retried the VersionLessDSU content

400
	

File path not provided.

500
	

Fallback generic error response.
1.1.2 Overwrite VersionLessDSU content

Will blindly overwrite the content associated with the specified file path.

	

/versionlessdsu/{filePath}
Path Parameters

Name
	

Type
	

Value
	

Description

filePath
	

string
	

*required
	

The file path at which the VersionLessDSU content will be overwritten
Body Parameters

Name
	

Description

body
	

Buffer representing the new VersionLessDSU content
Responses

Status Code
	

Description

200
	

Successfully overwritten the VersionLessDSU content

400
	

File path not provided or content not present

500
	

Fallback generic error response.
1.1.3 Security

Security of the versionless DSUs is ensured by the cryptographic properties of the VersionLessSSI (if it is marked as encrypted). However, this endpoint can fill the disk content and should be disabled by default. This is not an issue on mobile apps or demo installations. This simple behavior is intended to make it easier to implement innovative code on mobile devices.
1.2. Resolver and VersionLessWalletEnclave
1.2.1 Resolver

The OpenDSU “resolver” API space provides methods for interacting with VersionLessDSUs.
Function createVersionlessDSU(filePath, encryptionKey, domain, callback)

Description: This function allows the developer to create a new VersionLessDSU object using minimum configuration. The DSU instance is returned in the callback.

Name
	

Type
	

Value
	

Description

filePath
	

string
	

*required
	

The file path at which the VersionLessDSU will be saved

encryptionKey
	

string
	

	

The encryption key used for encrypting/decrypting the VersionLessDSU content. If provided, it must have exactly 32 characters

domain
	

string
	

	

$ORIGIN value for local VersionLessSSIs or the endpoint for remote VersionLessSSIs

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

ErrorWrapper object
	

dsu
	

VersionLessDSU instance
	

Description: Contains a message and the error. / Reference to the VersionLessDSU that was just created.
1.2.2 VersionLessWalletEnclave

WalletEnclaves that use VersionLessDSUs exist as VersionLessWalletEnclave enclaves. The OpenDSU “enclave” API space provides an easier method for creating a VersionLessDSU enclave:
Function enclaveAPI.initialiseVersionlessDSUEnclave(versionlessSSI)

Description: Creates and initializes a VersionLessDSU enclave. If the versionlessSSI parameter is not provided, the VersionLessSSI will be first searched in the environment. If it is not found there, it will create a new VersionLessSSI (unencrypted and having “/” as filePath) and store it inside the environment.

Name
	

Type
	

Value
	

Description

versionlessSSI
	

VersionLessSSI
	

	

Optional VersionLessSSI that will be used for VersionLessDSU.

Returns

Name
	

Description

VersionLessDSUEnclave
	

The newly created VersionLessDSU Enclave

The generic approach of creating an Enclave is also supported for creating VersionLessDSU Enclaves:

const ENCLAVE_TYPE = openDSU.constants.ENCLAVE_TYPES.VERSIONLESS_DSU_ENCLAVE;

const versionlessDSUEnclave = enclaveAPI.createEnclave(ENCLAVE_TYPE);
1.3. VersionLessDSU Serialisation

JSON with three sections:

    “folders” sections
    “files” sections
    “mounts” sections

1.3.1 Folders

The “folders” section is structured as an Object in which the keys represent the folder path and each value represents metadata information for each individual folder. The metadata follows the POSIX standard by having three timestamps:

    atime: timestamp of when the folder was last accessed (direct folder access; doesn’t change if the parent of child folder is accessed);
    mtime: timestamp of when the folder was last modified (changes when the folder is created or renamed or a new file is created inside the folder);
    ctime: timestamp of the last change to the folder’s metadata information (changes anytime atime or mtime changes).

The POSIX timestamps can be accessed using the VersionLessDSU.stat method, which was extended to also include them and not only the “directory” type property.
1.3.2 Files

The “files” section is structured as an Object in which the keys represent the file path and each value contains the file content as well as metadata information. Each of the “files” object value represents in turn another object with the following properties:

    content: The file content is stored inside this property, encoded to base64 in order for it to be JSON compatible;
    atime: timestamp of when the file was last accessed (direct file access with the read operation);
    mtime: timestamp of when the file was last modified (changes when the file is created, renamed or appended);
    ctime: timestamp of the last change to the file’s metadata information (changes anytime atime or mtime changes).

The POSIX timestamps can be accessed using the VersionLessDSU.stat method, which was extended to also include them and not only the “file” type property.
1.3.3 Mounts

The “mounts” section is structured as an Object in which the keys represent the path at which the mounted DSU is mounted and each value represents an Object currently containing the mounted DSU identifier.
1.4. VersionLessDSU Behavior

VersionLessDSUs offers all the APIs expected from DSUs except the APIs related to versioning. The content is encrypted using the corresponding keys that would be used for encrypting the BrickMaps. The batch methods will optimize the number of writes.
1.5. VersionLessSSI

VersionLessSSI is used for handling VersionLessDSU operations (read and update) by storing the DSU configurations. The owners of the VersionLessSSI can choose to ensure a higher level of security by encrypting the VersionLessDSU actual content.
1.5.1. VersionLessSSI description with examples

Type
	

Purpose and description

vs
	

Owning a VersionLessSSI provides provides full access to the VersionLessDSU content (encrypted or unencrypted, based on the presence or absence of the control string), content which is identified by the specified filePath

Example:

ssi:vs:$ORIGIN:/path-encrypted:DbzoUGRyZuJJMVyrm2Yt216DxuJJwNsP:v0

ssi:vs:$ORIGIN:/path-non-encrypted::v0
1.5.2. Specific parameters for VersionLessSSI subtypes

Type
	

Domain
	

Type Specific Identifier
	

Control String

vs
	

$ORIGIN value for local VersionLessSSIs or endpoint for remote VersionLessSSIs
	

filePath
	

Encryption key (for encrypted content) or empty for unencrypted content
1.5.3. VersionLessSSI family specific functions

(Common functions for all KeySSIs are available here)
Function versionLessSSI.initialize(dlDomain, filePath, encryptionKey, vn, hint)

Description: Initialize a VersionLessSSI with your own parameters.

Name
	

Type
	

Value
	

Description

dlDomain
	

string
	

*required
	

$ORIGIN value for local VersionLessSSIs or the endpoint for remote VersionLessSSIs

filePath
	

string
	

*required
	

The file path at which the VersionLessDSU will be saved

encryptionKey

(optional)
	

string
	

	

The encryption key used for encrypting/decrypting the VersionLessDSU content. Both operations are using the encrypt and respectively the decrypt methods from OpenDSU ‘s “crypto” API space. If the encryption key is missing then VersionLessDSU content will not be encrypted

vn

(optional)
	

string
	

	

The version number of the SeedSSI you want to use.

Default value: “v0”.

hint

(optional)
	

string
	

	

Optional information for the keySSI resolver.

Default value: undefined.
Function versionLessSSI.getFilePath()

Description: Get the file path associated with the VersionLessDSU, the path at which the VersionLessDSU content will be read/persisted.

Returns

Name
	

Description

String
	

The file path associated with the VersionLessSSI
Function versionLessSSI.getEncryption()

Description: Get the encryption key associated with the VersionLessDSU.

Returns

Name
	

Description

String
	

The file path associated with the VersionLessSSI
Function versionLessSSI.isEncrypted()

Description: Checks if the content associated with the VersionLessSSI is encrypted

Returns

Name
	

Description

boolean
	

Flag which specifies if the content is encrypted (true) or unencrypted (false)
Function versionLessSSI.encrypt(data, callback)

Description: Encrypts the given data using the encryption key associated with the VersionLessSSI. If the content is not configured to be encrypted, then the given data will be returned as-is.

Name
	

Type
	

Value
	

Description

data
	

String | Buffer
	

*required
	

The information that will be encrypted

callback
	

function
	

	

The function that will be called with the result of the operation

Callback parameters

Name
	

Type
	

Response example

err
	

Error object
	

encryptedData
	

Buffer
	

Description: Contains the encrypted data (or the given data if associated VersionLessSSI is not marked as encrypted) and the error.
Function versionLessSSI.decrypt(data, callback)

Description: Decrypt the given data using the encryption key associated with the VersionLessSSI. If the content is not configured to be encrypted, then the given data will be returned as-is.

Name
	

Type
	

Value
	

Description

data
	

String | Buffer
	

*required
	

The information that will be decrypted

callback
	

function
	

	

The function that will be called with the result of the operation

Callback parameters

Name
	

Type
	

Response example

err
	

Error object
	

decryptedData
	

Buffer
	

Description: Contains the decrypted data (or the given data if associated VersionLessSSI is not marked as encrypted) and the error.
1.5.4. OpenDSU “keyssi” API space

VersionLessSSIs can be easily created using specific method inside the OpenDSU “keyssi” API space.
Function createVersionlessSSI(domain, filePath, encryptionKey, vn, hint)

Description: Creates a VersionLessSSI configured based on the provided parameters

Name
	

Type
	

Value
	

Description

domain
	

string
	

*required
	

$ORIGIN value for local VersionLessSSIs or the endpoint for remote VersionLessSSIs

filePath
	

string
	

*required
	

The file path at which the VersionLessDSU will be saved

encryptionKey

(optional)
	

string
	

	

The encryption key used for encrypting/decrypting the VersionLessDSU content. If the encryption key is missing then VersionLessDSU content will not be encrypted

vn

(optional)
	

string
	

	

The version number of the SeedSSI you want to use.

Default value: “v0”.

hint

(optional)
	

string
	

	

Optional information for the keySSI resolver.

Default value: undefined.

Returns

Name
	

Description

VersionLessSSI
	

The newly created VersionLessSSI based on the provided parameters

