---
title: SymmetricalEncriptionSSI 
layout: home
parent: OpenDSU Contributors
nav_order: 5
---

SymmetricalEncriptionSSI (RFC-016)


Abstract

SymmetricalEncryptionSSIs are used to encrypt the data bricks from the Brick Storage. Each brick is encrypted using a different SymmetricalEncryptionSSI, in order to make it very difficult for attackers to steal data from DSUs. Special bricks called BrickMaps keep track of each SymmetricalEncryptionSSI along with its associated HashLinkSSIs. They are used to reconstruct DSUs in the client execution environment.
1. SymmetricalEncryptionSSI subtype description with example

It is not possible to derive the SymmetricalEncryptionSSI. There is only one type: ‘se’.

Type
	

Description

se
	

SymmetricalEncryptionSSI is used as a symmetric encryption key to encrypt data from the DSU to the Brick storage when anchoring it to the blockchain. Moreover, it is used to decrypt the bricks from the Brick Storage when reconstructing the DSU in your local execution environment.

Example:

 ssi:se:domain:encryptionKey::v0
2. Type-specific and control substring

The identifier contains the subtype and the domain. That is very important in order to find the correct brick storage and anchoring services associated with the keySSI and the DSU. After these two attributes, we have the type-specific and the control substring. The table below presents the content of these attributes.

Type
	

Type Specific substring
	

Control substring

se
	

An encryption key

(by default it is a symmetric key generated with  aes-256-gcm algorithm).
	

empty
3. SymmetricalEncryptionSSI specific functions
Function symKey.getEncryptionKey()

Description: Get the encryption key associated with the KeySSI. By default, the encryption key is a symmetric key generated with the aes-256-gcm algorithm (equal to its specific string).

Returns

Name
	

Description

String
	

The encryption key.
Function symKey.load(subtype, dlDomain, encryptionKey, control, vn, hint)

Description: Load the SymmetricalEncryptionSSI with your own parameters. If the encryptionKey is empty, it will generate a new one.

Name
	

Type
	

Value
	

Description

subtype
	

string
	

*required
	

The subtype (should be ‘se’).

dlDomain
	

string
	

*required
	

The blockchain domain wanted to be used.

encryptionKey
	

string
	

*required
	

The encryption key you want to use for symmetric encryption of bricks.

If left empty, the function will generate an encryption key for you.

control
	

string
	

*required
	

Should be empty for the SymmetricalEncryptionSSI.

vn

(optional)
	

string
	

	

The version number of the SymmetricalEncryptionSSI you want to use.

Default value: “v0”.

hint

(optional)
	

string
	

	

Optional information for the SymmetricalEncryptionSSI resolver.

Default value: undefined.

Returns

Name
	

Description

string
	

Return the abbreviation for SymmetricalEncryptionSSI: ‘se’.
Function symKey.getTypeName()

Description:

Returns

Name
	

Description

SSITypes.SYMMETRICAL_ENCRYPTION_SSI
	

A string representing the type of the SSI.

