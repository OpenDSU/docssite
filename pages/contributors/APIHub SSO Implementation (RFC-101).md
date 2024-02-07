---
title: APIHub SSO Implementation 
layout: home
parent: OpenDSU Contributors
nav_order: 22
---

APIHub SSO Implementation (RFC-101)


Abstract

This RFC describes the implementation of the SSO authentication method in APIHub. This document, in parallel to the presentation of SSO support in APIHub, also specifies the authentication flow, token encryption and verification, and the flow between SSO, Demiurge and Enclave.
1. Introduction

SSO (Single Sign-On) is a technology that unites several screens into a single screen to connect to different applications. With an SSO to access all SaaS (Software as a Service) applications on a single page, the user must enter login credentials (username, password etc) only once. This SaaS offers remote access to a set of applications. In an SSO system, the user establishes their identity once, and then they can access several different services instead of establishing their identity multiple times (over and over). SSO is an essential aspect of Identity and Access Management (IAM) or access control.
2. SSO support in APIHub

Figure 1: SSO support in APIHub

For the beginning, the initial page is loaded, where there are SSApps that the user can try to access (step 1 from the figure). After selecting a SSApp, the user is redirected to the IDP (Identity Provider) configured by the organization to perform the SSO (step 2). An identity provider (IDP) is a system component that provides an end-user or an internet-connected device with a unique set of login credentials that ensure the entity is who and what it says it is across multiple platforms, applications, and networks. After this, the authentication flow (step 3) takes place, including a possible MFA (Multi-Factor Authentication). MFA usually requires a combination of something the user knows (PIN code, secret question) and something the user has (e.g. card) or something that is (such as a fingerprint).

MFA is an authentication method and a basic component of data privacy. In order for the user to get access to an online resource, application, or account, MFA requires the user to provide two or more verification factors. This should be used by both individuals and companies/enterprises as often as possible.

Authentication is performed by the IDP following authorization code flow and PKCE (Proof Key for Code Exchange). PKCE is a sample key for exchanging authorization codes. PKCE adds an extra level of security when a mobile device is used for the flow of authorization codes.

MFA offers much stronger security and protection against fraudsters. They might be able to steal proof of identity, such as a PIN, but they would still need to obtain and use other proof of identity in order to be able to access the personal account.

In steps 4 and 5, as shown in Figure 1, the return URL for a request is set to the APIHub's SSO Middleware and not to the application, so the authorization token is sent there. Then, the SSO middleware presents the authorization token to the IDP’s token endpoint to retrieve the access token and refresh token; both signed JWTs (JSON Web Tokens). JWTs can be signed using a secret or public key pair. In addition, the structure of a JWT allows you to make sure that the content has not been altered.

A match is made to the wallet recovery phrase stored in the file system, which is used to access the wallet with an additional PIN check.

In the last stage (step 6), SSO Middleware generates an encrypted cookie containing the access token, refresh token, expiration date, username, and SSO ID. The symmetric key is stored in the APIHub file system, and it is used for all users. The cookie is sent to the user to present to APIHub as proof of authentication. The cookie still needs the appropriate settings in order to prevent leakage (e.g. secure, HTTP only etc.).

The cookie is used to manage the user’s session and its expiration date. It can not be falsified by the user or in transit because the encryption key never leaves the APIHub. Upon receiving the cookie, users send requests with it to the APIHub. Upon receiving a request with a cookie, API Hub decrypts it and checks the expiration date. If the access token has expired, Middleware uses the refresh token to obtain a new access token from the organization's IDP.

Periodically, based on the company's session length policy, the symmetrical keys are rotated. An old encryption key is also stored to allow for the pass-through period. All older encryption keys are destroyed if the user submits a request with the old cookie before receiving a new one.

We started to consider the implications of the compromise. Initially, if a hacker could gain access to the encryption keys, it seems that they would have very little to gain because they would need the cookie to do anything. With the cookie, they can already pretend to be a victim. However, depending on the synchronization element and key rotation, an attacker could extend the cookie's lifetime by changing the timestamp based on the answers to the following questions:

    Is there any validation of the access token with SSO when the cookie is presented?
    Do I need to understand the SSO authorization to access the APIs?
    Are the encryption keys rotated based on the expiration time received from the SSO server or a refresh request based on the expiration time in the cookie?
    Does storing an old key just facilitate the transition period when a new access token is requested?

In addition, we would like to understand the Recovery Phrase (RP) better. If the RP, stored on disk, is mapped to the SSO ID, then can it only be accessed by the SSO Middleware and provided to the wallet? In this case, is the encrypted version sent and decrypted by the client when the user has entered the PIN?
3. Authentication flow. Token encryption and verification
3.1. Authentication flow

The implementation for the authentication flow (step 3) is the OAuth2.0 + PKCE authorization code flow.

The authorization code is obtained using an authorization server as an intermediary between the client and the resource owner. Instead of requesting authorization directly from the resource owner, the client directs the resource owner to an authorization server, which, in turn, directs the resource owner back to the client with the authorization code.

OAuth allows information in an end user's account to be used by third-party services without exposing the user's password. PKCE (Proof Key for Code Exchange) is a sample key for exchanging authorization codes. When the authorization code flow is performed on a mobile device, PKCE adds extra security.

User identification data in SSO (such as email address and name) takes the form of tokens. An SSO token is a collection of data or information passed from one system to another during the SSO process. The data can simply be a user’s email address and information about the system sending the token.

OAuth acts as an intermediary on behalf of the end user, providing the service with an access token that authorizes the sharing of specific account information. Applications using the OAuth 2.0 authorization code flow obtain an access token to include in requests to resources protected by the Microsoft Identity Platform (typically APIs). Applications can also request new identification and access tokens for previously identified entities using a refresh mechanism.

In the case of token authentication, a secondary service verifies a server request. When the verification is complete, the server issues a token and responds to the request. The user may still have a password to remember, but the token provides another form of access that is much harder to steal or bypass.

More details are available at the following links:

https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.1                             https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow
3.2. Token encryption and verification

Figure 2: High-level view of the authentication flow

When a token expires, the client will perform the OAuth2.0 refresh token flow to obtain a new set of tokens without requiring user authentication. The token will be a JWT, asymmetrically signed (RSA) in both cases. JWTs can be signed using a secret or public key pair using RSA. RSA (Rivest-Shamir-Adleman) is a public key encryption method used to secure data transmission.

Signed tokens can verify the integrity of the claims contained within them, while encrypted tokens hide these affirmations from other third parties. When tokens are signed using public or private key pairs, the signature also certifies that only the party holding the private key is the one who signed. Public keys used for JWT verification are publicly available. JWKS is downloaded for the JWKS endpoint (e.g. https://login.windows.net/common/discovery/keys), which can be found at https://issuer.example.com/.well-known/openid-configuration (a well-known URI discovery mechanism for the issuer).

The authentication token will be encrypted in an AES 256 GCM cookie. The encryption key is rotated. The cookie must be secure: HTTP only, secure, same site lax, cookie prefixes, not available on subdomains, expiration (docs).

The APIHub does not store the refresh token, but it encrypts it and puts it in a cookie for clients. This cookie also contains a timestamp, SSO username and SSO user ID. The encrypted token is encrypted with one of the two "SSO encryption keys" currently available.
4. Flow between SSO, Demiurge, and Enclaves

Figure 3: First login with SSO

The first authentication with SSO starts when the SSO Middleware or Client puts secrets, keys arrive in the Secrets Component, then add messages as DID using an APIHub identity (get in the runtime environment a private key used as identity, a token). Then, from the Message Queue (MQ) component, the message is received, the corresponding action is executed, and we get to the Enclave. At the Enclave level, all operations are done with secret keys, signatures, and decryptions.

Figure 4: Client login to open a wallet

As shown in Figure 4 above, the client connection requires the secret to open a wallet. The client using SSO secret keys uses the current user ID validated by SSO Middleware from the headers (1). Obtain the registration message as DID using the APIHub identity, and obtain in the execution environment a private key (token) used as identity (2). Then, the message is received from the Message Queue (MQ) Component, and the corresponding action (3) is performed; then, we get to Enclave. From the MQ component, the secret is sent to the Secret Component (4) and then to the client (5).

Figure 5: Demiurge deletes/deactivates a secret

In the figure above, we can see how Demiurge deletes/deactivates a secret. Starting from the Demiurge Wallet, the deletion/deactivation of a SSO secret occurs (1),  it arrives in the Secrets Component, then it deletes the registration message as DID using the APIHUb identity and obtains, in the execution environment, a private key used as identity - a token (2). Then, the message is received from the Message Queue Component (MQ Component), and the corresponding action is performed to get to the Enclave (3). From the MQ Component, a double confirmation takes place. After the first confirmation (4), the information arrives again in the Secret Component, a second confirmation (5) takes place, and it arrives again in the Demiurge Wallet.
Configuration

    Apihub-root/external-volume/config/apihub.json:

    Keep ‘true’ value for flags: ‘enableOAuth’, ‘enableLocalhostAuthorization’, and ‘serverAuthentication’
    Modify Tenant ID value for flags: ‘oauthJWKSEndpoint’, ‘issuer’, ‘authorizationEndpoint’, ‘tokenEndpoint’ and ‘logoutUrl’.
    Modify Client ID for flags: ‘clientId’ and ‘scope’.

    Trust Loader environment settings for SSO mode

    epi-workspace/trust-loader-config/demiurge-wallet/loader/environment.js: modify ‘mode’ value From ‘dev-secure’ To ‘sso-direct-pin’.
    epi-workspace/trust-loader-config/dsu-fabric-wallet/loader/environment.js: modify ‘mode’ value From ‘dev-secure’ To ‘sso-direct’.

    Patient Wallet configuration to skip SSO:

    Apihub-root/external-volume/config/apihub.json: In ‘skipOAuth’ section add below five values

 "/leaflet-wallet/",

"/external-volume/wallets/leaflet-wallet/",

"/cloud-wallet/",

 "/directory-summary/",

 "/iframe/"

    In your SSO provider application like Azure:

    Create a client secret key and update the same in flag ‘clientSecret’ in apihub.json.

    skipOAuth configuration in /apihub-root/external-volume/config/domains/<domain>.json (i.e /apihub-root/external-volume/config/domains/epi.json) and <subdomain>.json file.

        Note: The settings for /apihub-root/external-volume/config/domains/<domain>epi.json and /apihub-root/external-volume/config/domains/<subdomain>epi.json are already set by default by helm-chart version 0.5.11+ 4

In /apihub-root/external-volume/config/domains/<domain>epi.json add below section:

"skipOAuth": [

 "/bricking/<domain>epi/get-brick",

 "/anchor/<domain>epi/get-last-version",

 "/gtinOwner/<domain>epi",

 "/leaflets/<domain>epi"

]

In /apihub-root/external-volume/config/domains/<subdomain>epi.json add below section:

"skipOAuth": [

 "/bricking/<subdomain>epi/get-brick",

 "/anchor/<subdomain>epi/get-last-version",

 "/gtinOwner/<subdomain>epi",

 "/leaflets/<subdomain>epi"

]

    skipOAuth configuration in /apihub-root/external-volume/config/domains/vault.json file

    Note: This setting is NOT set by the helm chart as of now (0.5.14)!!! You need to override the vault domain config! https://github.com/PharmaLedger-IMI/helm-charts/blob/epi-0.5.14/charts/epi/values.yaml#L49 

"skipOAuth": [

            "/bricking/vault",

            "/anchor/vault"

  ]

Note: Below client configuration is not required. Make sure that the ‘oauthEnabled’ flag is set to ‘false’ in oauthConfig.js.

    apihub-root/external-volume/config/oauthConfig.js : 

    Keep ‘oauthEnabled’ to false.
    Modify tenant id (3e7449a0-8ac3-426b-81b8-cd89c85cbe8c) in issuer, authorizationEndpoint and tokenEndpoint as per your tenant id value.
    Modify client id (b4108e3e-0a5b-4ee8-b2ea-7c7e1c143a97) in clientId, scope as per your client ID value.

    apihub-root/external-volume/config/apihub.json : 

    Keep ‘enableOAuth’ and ‘enableLocalhostAuthorisation’ to true
    Modified tenant id in ‘oauthJWKSEndpoint’

    To check, build the server locally and then use tunneling access ePI homepage and it should show a screen for SSO.

DID detection from the SSO tokens

When SSO is enabled, the DID for a user is generated based on one of the claims in the table below, obtained from the access token payload. The DID format is the following:

did:ssi:name:vault_domain:APP_NAME/SSO_DETECTED_ID

The SSO_DETECTED_ID is the first non-empty claim from the following table (in the presented order) found in the access token payload.

Access Token Claim
	

Description

email
	

The user’s email

preferred_username
	

The user’s username

upn
	

userPrincipalName - The user’s sign-in address

sub
	

The token subject (userId)
Secrets Encryption Key

When SSO is enabled and the access mode for the wallet is set to “sso-direct”, the  SSO_SECRETS_ENCRYPTION_KEY must be set. It is used to encrypt the wallet access credentials in the secrets APIHub component. The SSO_SECRETS_ENCRYPTION_KEY contains one or more base64 encoded 32-byte long buffers separated by commas. The first such buffer in the list is the current encryption key.  The encryption key can be changed by appending a new encryption key at the beginning of the  SSO_SECRETS_ENCRYPTION_KEY, as shown below:

SSO_SECRETS_ENCRYPTION_KEY = “new_encryption_key,old_encryption_key” 

When a new encryption key is added to SSO_SECRETS_ENCRYPTION_KEY, all the credentials are decrypted by using the old encryption key and encrypted again using the new one. An encryption key can be generated using the following NodeJS snippet:

require("crypto").randomBytes(32).toString("base64")

The SSO_SECRETS_ENCRYPTION_KEY should be injected in the environment by the Kubernetes Secrets (and not stored in helm-charts configuration). A restart of the container is required to take the new values of the SSO_SECRETS_ENCRYPTION_KEY (for key rotation).

