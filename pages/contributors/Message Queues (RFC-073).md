---
title: Message Queues 
layout: home
parent: OpenDSU Contributors
nav_order: 16
---

Message Queues (RFC-073)

Abstract

The Message Queues “MQ” API space offers a set of portable functions for sending and receiving messages towards message queues identified by KeySSIs.
1. Message queues functions in OpenDSU
Function getMQHandlerForDID(didDocument, domain, timeout)

Description: Get an observable object that receives messages from the fromKeySSI if the asKeySSI has the rights to read those messages.

Name
	

Type
	

Value
	

Description

didDocument
	

	

	

The KeySSI from which you want to get the handler.

domain
	

string
	

*required
	

The blockchain domain.

timeout
	

number (ms)
	

	

The amount of time before the request times out.

Returns

Name
	

Description

MQHandler object
	

2. APIHUB Endpoints

MappingEngine

put /mappingEngine/domain/  < messages ( array of messages)

Notifications

put /notification/send/domain/anchorID   < message signed by corresponding keyssi

get /notification/get/domain/anchorID  > notification

Server settings: 

    notification_expiration: 60 seconds
    notification_client_timeout : 60 (60 seconds)
    notification_maxSize: 1 (1k)
    notification_queue_length: 10

MQ

put /mq/domain/put/hashDID/  < message

get /mq/domain/nonce > nonce

get /mq/domain/get/hashDID/nonce/signature_of_did  > {messageID, message}

get /mq/domain/take/hashDID/nonce/signature_of_did  > message

delete /mq/domain/delete/hashDID/messageID/signature_of_did

Server settings: 

    mq_client_timeout: 60 (60 seconds)
    mq_nonce_from_smartcontract:false
    mq_nonce_from_expiring_uuid:true
    mq_nonce_expiration_time: 10 (10 seconds)
    mq_throttling: 2  (2  messages/second)
    mq_allow_ unregistered_did: false
    mq_maxSize: 10 (10k)

Hosting

put /hosting/domain/mq/allow/hashDID/validatorSignature

put /hosting/domain/mq/quota/hashDID/validatorSignature  < number of messages

put /hosting/domain/mq/throttling/hashDID/validatorSignature  < number of messages/second

put /hosting/domain/notifications/allow/anchorID/validatorSignature

Configurations files

domain: validatorDID