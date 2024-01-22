---
title: Crypto 
layout: home
parent: Open DSU Advanced
nav_order: 10
---

Crypto (RFC-066)

Abstract

The “crypto” API space offers a set of portable cryptographic functions for OpenDSU and Self Sovereign Applications. Most of these functions have KeySSI as the first argument because the type of the KeySSI and its vn field (version number) indicate which cryptographic functions should be used to perform the requested operations (see RFC010 SeedSSI).

Among these operations, you will find basic functions such as symmetric encryption, hashing, signing/verification functions, as well as various other operations, such as the creation of JWT Tokens used in the creation of authentication tokens and credentials.
1. Crypto functions
1.1. Basic operations

Functions
	

Description

encodeBase58
	

Encode data with template SeedSSI’s encoding function.

decodeBase58
	

Decode data with template SeedSSI’s decoding function.

generateEncryptionKey
	

Generate an encryption key for selected KeySSI.

generateRandom
	

Generate a random string of the desired length.

sha256
	

Is used to hash data using the sha256 algorithm.

sign
	

Obtain signature from the hash of the message obtaining the private key from the KeySSI (it already contains it or it asks for this operation to happen in an enclave).

verifySignature
	

Verify a signature.
1.2. Advanced operations

Functions
	

Description

convertDerSignatureToASN1
	

Convert DER signature to ASN1.

createAuthToken
	

Create an authentication token for a credential represented by a JWT.

createBloomFilter
	

Create a Bloom filter.

createCredential
	

Create a credential represented by a JWT token.

createJWT
	

Create a JWT Token signed with your seedSSI.

createPresentationToken
	

Create a presentation token represented by a JWT token.

getReadableSSI
	

Returns a readable self-sovereign identifier.

getCryptoFunctionForKeySSI
	

parseJWTSegments
	

Return an object containing the different JWT segments (header, body, signature, signatureInput).

verifyAuthToken
	

Verify an authentication JWT token with the list of issuers.

verifyJWT
	

Verify the validity of the JWT token.

//Load openDSU environment

require("../privatesky/psknode/bundles/openDSU");

//Load openDSU SDK

const opendsu = require("opendsu");

//Load crypto library

const crypto = opendsu.loadApi("crypto");

//Load keyssi library

const keyssispace = opendsu.loadApi("keyssi");

//Create a seedSSI

const seedSSI = keyssispace.buildSeedSSI('default');

const data = "some data";

crypto.encrypt(seedSSI, data, (err, encryptedData) => {

  crypto.decrypt(seedSSI, encryptedData, (err, plainData) => {

      console.log(data === plainData.toString()); //Returns true

  });

});

How to use
Function convertDerSignatureToASN1(derSignature)

Description: DER (Distinguished Encoding Rules) is used to encode ASN.1. When using this function, we can decode the DER signature to obtain an ASN.1 certificate.

Name
	

Type
	

Value
	

Description

derSignature
	

string

(DER signature)
	

*required
	

the DER signature that you want to convert.

Returns: An ASN.1 certificate.
Function createAuthToken(holderSeedSSI, scope, credential, callback)

Description: Create an authentication JWT token.

Name
	

Type
	

Value
	

Description

holderSeedSSI
	

SeedSSI object
	

	

The SeedSSI of the credential holder.

scope (optional)
	

	

	

credential (optional)
	

JWT token

(JSON object
	

	

The credential you want to associate to the authentication token.

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

Error object
	

authToken
	

JWT token

(JSON object)
	

Description: Contains the error. / The authentication token that was created.
Function createBloomFilter(options)

Description: Create a Bloom Filter.

Name
	

Type
	

Value
	

Description

options (optional)
	

JSON object
	

	

Options you want to use for your Bloom filter.

Default options are the following:

{

   // bit count

   bitCount: null,

   // number of k hash functions

   hashFunctionCount: null,

   // estimated number of elements from the collection

   estimatedElementCount: 0,

   // allowed probability of false positives

   falsePositiveTolerance: 0.000001,

   // default function that returns the element's hash

   hashFunction: linearFowlerNollVoJenkinsHashFunction,

   // crypto hash function that returns the element's hash

   cryptoHashFunction: sha2,

   // number of crypto hash functions to be used (will be used at first before the default hashFunction)

   cryptoHashFunctionCount: 0,

   // crypto hash function secret

   cryptoSecret: "secret",

   // strategy which interacts with the bit collection

   BitCollectionStrategy: InMemoryBitCollectionStrategy,

}

Returns

Name
	

Description

BloomFilter object
	

A Bloom filter is a space-efficient probabilistic data structure

>see operations available on BloomFilter.
Function createCredential(issuerSeedSSI, credentialSubjectSReadSSI, callback)

Description: Create a credential represented by a JWT token. The credential will be created with the seedSSI of the issuer and another keySSI that will be used by the subject to read its credential.

Name
	

Type
	

Value
	

Description

issuerSeedSSI
	

SeedSSI object
	

	

The seedSSI represents the credential issuer.

credentialSubjectSReadSSI

(optional)
	

SReadSSI object
	

	

The sReadSSI that will be used by the subject to read its credential.

If not provided, the sReadSSI will be derived from the seedSSI.

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

Error object
	

credential
	

JWT token

(string)
	

Description: Contains the error. / The credential that was created and represented by a JWT Token.
Function createJWT(seedSSI, scope, credentials, options, callback)

Description: Create a JWT Token signed with your seedSSI.

Name
	

Type
	

Value
	

Description

seedSSI
	

SeedSSI object
	

	

The SeedSSI that you want to use to sign the JWT token.

scope

(optional)
	

	

	

A credential can be linked to the JWT token.

credentials

(optional)
	

JWT token

(string)
	

	

options

(optional)
	

JSON object
	

	

Can contain the subject, valability, or other parameters about the JWT.

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

Error object
	

jwt
	

JWT token

(string)
	

Description: Contains the error. / A valid JWT token signed by the SeedSSI.
Function createPresentationToken(holderSeedSSI, scope, credential, callback)

Description: Create an authentication JWT token for a credential.

Name
	

Type
	

Value
	

Description

holderSeedSSI
	

SeedSSI object
	

	

The SeedSSI of the credential holder.

scope

(optional)
	

	

	

credential
	

JWT token

(string)
	

	

The credentials for which you want to create a presentation token.

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

Error object
	

presToken
	

JWT token

(string)
	

Description: Contains the error. / The presentation token that was created.
Function decodeBase58(encodedData)

Description: Decode data previously encoded in base58.

Name
	

Type
	

Value
	

Description

encodedData
	

string or buffer
	

*required
	

The data you want to decode.

Returns

Name
	

Description

Buffer
	

A buffer obtained by decoding the encodedData using the base58 decoding function.

You can apply buffer.toString() to get the initial data.
Function encodeBase58(data)

Description: Encode data in base58.

Name
	

Type
	

Value
	

Description

data
	

string
	

	

String you want to encode in Base 58.

Returns

Name
	

Description

String
	

 A string containing the encoded data using the base58 encoding function.
Function generateEncryptionKey(keySSI, callback)

Description: Generate an encryption key for your KeySSI.

Name
	

Type
	

Value
	

Description

keySSI
	

KeySSI object
	

	

The KeySSI you want to generate an encryption key for.

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

Error object
	

encryptionKey
	

Buffer
	

Description: Contains the error./ Buffer of random bytes representing the encryption key that was generated.
Function generateRandom(length)

Description: Generate a random string of the desired length.

Name
	

Type
	

Value
	

Description

length
	

int
	

	

The length of the random string you want to generate.

Returns

Name
	

Description

String
	

A random string of the desired length.
Function getReadableSSI(ssi)

Description: Get the self-sovereign identifier of your keySSI in the readable format (not encoded).

Name
	

Type
	

Value
	

Description

ssi
	

keySSI object
	

	

The KeySSI from which you want to obtain the identifier.

Returns

Name
	

Description

String
	

The self-sovereign identifier of your KeySSI in the following format:

ssi:subtype:domain:specific:control:v0:hint
Function parseJWTSegments(jwt, callback)

Description:  Return an object containing the different JWT segments (header, body, signature, signatureInput).

Name
	

Type
	

Value
	

Description

jwt
	

JWT token

(string)
	

	

The JWT Token you want to parse into segments.

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

Error object
	

segments
	

Object
	

Description: Contains the error. / An object containing the different JWT segments:

(header, body, signature, signatureInput).
Function sha256(dataObj)

Description: Hash your data with sha256 algorithm.

Name
	

Type
	

Value
	

Description

dataObj
	

string
	

*required
	

The data from which you want to get a hash.

Returns

Name
	

Description

String
	

A string obtained by applying the sha256 hash function to the provided data.
Function sign(keySSI, data, callback)

Description: Sign the data with 'sha256' and a keySSI (more precisely: the private key included as a specific string of the KeySSI) using this function internally.

Name
	

Type
	

Value
	

Description

keySSI
	

keySSI object
	

	

The KeySSI you want to sign with.

data
	

any
	

	

The data you want to sign.

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

Error object
	

signature
	

Sign Object
	

Description: Contains the error./ The digital signature corresponding to your data.
Function verifyAuthToken(jwt, listOfIssuers, callback)

Description: Verify an authentication JWT token with the list of issuers.

Name
	

Type
	

Value
	

Description

jwt
	

JWT token

(string)
	

*required
	

The JWT token you want to verify.

listOfIssuers
	

Array
	

	

A verified list of trusted issuers that is used to check credential issuer authenticity.

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

Error object
	

status
	

boolean
	

Description: Contains the error./ Return true if the JWT token is valid. Else, return false.
Function verifyJWT(jwt, rootOfTrustVerificationStrategy, callback)

Description: Verify the validity of a JWT Token using a source that can be trusted.

Name
	

Type
	

Value
	

Description

jwt
	

JWT token

(string)
	

*required
	

The JWT token you want to verify.

rootOfTrustVerificationStrategy
	

	

	

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

Error object
	

status
	

boolean
	

Description: Contains the error./ Return true if the JWT token is valid. Else return false.
Function verifySignature(keySSI, data, signature, publicKey, callback)

Description: Verify a signature to authenticate other users and to guarantee the authenticity of the data/message/document that you received.

Name
	

Type
	

Value
	

Description

keySSI
	

keySSI object
	

	

The KeySSI is used to get the right verification method.

data
	

any
	

	

The data you received and that was signed.

signature
	

Sign Object
	

	

The digital signature that you received with the document or message.

publicKey

(optional)
	

string
	

	

Known public key of the sender.

If you don’t know the publicKey, leave it empty to get the public key associated with the KeySSI.

callback
	

function
	

*required
	

Callback parameters

Name
	

Type
	

Response example

err
	

Error object
	

status
	

boolean
	

Description: Contains the error./ The signature will be verified using the KeySSI public key. If the signature can be verified, it will return true. Else, it will return false.
Function getCryptoFunctionForKeySSI(keySSI, cryptoFunctionType)

Description:

Name
	

Type
	

Value
	

Description

keySSI
	

keySSI object
	

	

The KeySSI is used to identify the function.

cryptoFunctionType
	

string
	

	

The function you want to get.
Function encrypt(data, encryptionKey)

Description: Encrypt data using an encryption key.

Name
	

Type
	

Value
	

Description

data
	

	

	

encryptionKey
	

	

	

Function decrypt(data, encryptionKey)

Description: Decrypt previously encoded data using an encryption key.

Name
	

Type
	

Value
	

Description

data
	

	

	

encryptionKey
	

	

	

Function deriveEncryptionKey(password)

Description: Derive an encryption key from a password.

Name
	

Type
	

Value
	

Description

password
	

	

	

Function generateKeyPair()

Description: Generate a key pair.
Function convertPrivateKey(rawPrivateKey, outputFormat)

Description: Convert a certain private key to the desired output format.

Name
	

Type
	

Value
	

Description

rawPrivateKey
	

	

	

outputFormat
	

string
	

	

Function convertPublicKey(rawPublicKey, outputFormat, curveName)

Description: Convert a certain public key to the desired output format.

Name
	

Type
	

Value
	

Description

rawPrivateKey
	

	

	

outputFormat
	

string
	

	

curveName
	

	

	

Function getPublicKeyFromPrivateKey(rawPrivateKey, outputFormat)

Description: Get the public key for the desired private key.

Name
	

Type
	

Value
	

Description

rawPrivateKey
	

	

	

outputFormat
	

string
	

“raw”
	

Function ecies_encrypt_ds(senderKeySSI, receiverKeySSI, data)

Description:

Name
	

Type
	

Value
	

Description

senderKeySSI
	

	

	

receiverKeySSI
	

	

	

data
	

	

	

Function ecies_decrypt_ds(receiverKeySSI, data)

Description:

Name
	

Type
	

Value
	

Description

receiverKeySSI
	

	

	

data
	

	

	

Function createJWTForDID(did, scope, credentials, options, callback)

Description: Create a JWT for a given DID.

Name
	

Type
	

Value
	

Description

did
	

	

	

scope
	

	

	

credentials
	

	

	

options
	

	

	

callback
	

function
	

	

Function verifyDID_JWT(jwt, rootOfTrustVerificationStrategy, callback)

Description: Verify the JWT for a given DID.

Name
	

Type
	

Value
	

Description

jwt
	

	

	

rootOfTrustVerificationStrategy
	

	

	

callback
	

function
	

	

Function verifyDIDAuthToken(jwt, listOfIssuers, callback)

Description: Verify the authentication token for a given DID.

Name
	

Type
	

Value
	

Description

jwt
	

	

	

listOfIssuers
	

	

	

callback
	

function
	

	

Function createAuthTokenForDID(holderDID, scope, credential, callback)

Description: Create an authentication token for a given DID.

Name
	

Type
	

Value
	

Description

holderDID
	

	

	

scope
	

	

	

credential
	

	

	

callback
	

function
	

	

Function createCredentialForDID(did, credentialSubjectDID, callback)

Description: Create a credential for a given DID.

Name
	

Type
	

Value
	

Description

did
	

	

	

credentialSubjectDID
	

	

	

callback
	

function
	

	

Function base64UrlEncodeJOSE(data)

Description:

Name
	

Type
	

Value
	

Description

data
	

Buffer object
	

	

Function base64UrlDecodeJOSE(data)

Description:

Name
	

Type
	

Value
	

Description

data
	

	

	

Function sha256JOSE(data, encoding)

Description: Encode data using the sha256 hashing mechanism.

Name
	

Type
	

Value
	

Description

data
	

	

	

encoding
	

	

	

Function convertKeySSIObjectToMnemonic(keySSIObject)

Description: Take a KeySSI Object and convert it to mnemonic.

Name
	

Type
	

Value
	

Description

keySSIObject
	

keySSI object
	

	

Function convertMnemonicToKeySSIIdentifier(phrase, typeName, domain, vn)

Description: Take a mnemonic and convert it to a KeySSI Identifier.

Name
	

Type
	

Value
	

Description

phrase
	

	

	

typeName
	

	

	

domain
	

	

	

vn
	

	

	

Function getRandomSecret(length)

Description: Create a random secret of a given length.

Name
	

Type
	

Value
	

Description

length
	

numeric
	

*required
	

The number of random bytes to encode.
An index of predefined possible JWT Errors:

    EMPTY_JWT_PROVIDED
    INVALID_JWT_FORMAT
    INVALID_JWT_PRESENTATION
    INVALID_JWT_HEADER
    INVALID_JWT_BODY
    INVALID_JWT_HEADER_TYPE
    INVALID_JWT_ISSUER
    INVALID_CREDENTIALS_FORMAT
    JWT_TOKEN_EXPIRED
    JWT_TOKEN_NOT_ACTIVE
    INVALID_JWT_SIGNATURE
    ROOT_OF_TRUST_VERIFICATION_FAILED
    EMPTY_LIST_OF_ISSUERS_PROVIDED
    INVALID_SSI_PROVIDED

