---
title: Ledger 
layout: home
parent: OpenDSU Contributors
nav_order: 21
---

Ledger (RFC-080)


Abstract
1. Ledger functions
Function initialiseDSULedger(keySSI, constitutionKeySSI)

Description: Initialise a ledger that is intended to be resolved from a keySSI; the DSU state gets anchored in the domain of the keySSI.

Name
	

Type
	

Value
	

Description

keySSI
	

KeySSI object
	

	

constitutionKeySSI
	

	

	

Function initialisePublicDSULedger(blockchainDomain, constitutionKeySSI)

Description: Initialise a ledger that is intended to be resolved from a BDNS name.

Name
	

Type
	

Value
	

Description

blockchainDomain
	

string
	

*required
	

constitutionKeySSI
	

string
	

	

Function getDSULedger(keySSI)

Description: Get a handler to a secret ledger.

Name
	

Type
	

Value
	

Description

keySSI
	

string
	

*required
	

Function getPublicLedger(blockchainDomain)

Description: Get a handler to a public ledger.

Name
	

Type
	

Value
	

Description

blockchainDomain
	

string
	

*required
	

Function getDSULedgerAsDb(blockchainDomain)

Description: Put an openDSU interface in front of the ledger.

Name
	

Type
	

Value
	

Description

blockchainDomain
	

string
	

*required
	

