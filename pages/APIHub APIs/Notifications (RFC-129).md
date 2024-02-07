---
title: Notifications 
layout: home
parent: OpenDSU APIHub APIs
nav_order: 10
---

Notifications (RFC-129)

Abstract

The Notifications API Service offers the capabilities to send and receive messages on communication channels based on anchorIds. It also provides the possibility to remove the created channel in the scope of communication.
1. Create a Subscription

Request to get notified each time a new message is received for the anchorId. This endpoint enables long polling request sequences.

	

/notifications/subscribe/{anchorId}
1.1. Path Parameters

Name
	

Type
	

Value
	

Description

anchorId
	

string
	

*required
	

Zero Access keySSI encoded in base58.

Example:

29fgyfTQXJmJNni42zuJu3NXHgtUuXk3318NMMTrYKfj1gwAttt16rKq

3vPCUjFV 3KZeF9HJnaZnW4FnN7t7zBQFKjdXBwX.
1.2. Responses

Status Code
	

Description

200
	

Returns a list of messages received by the specified anchorId.

400
	

Connection timeout.

409
	

Queue already exists.

500
	

An internal error occurred when creating the queue.
2. Delete a Subscription

Delete the communication channel created by either subscription or publish commands for the specified anchorId.

	

/notifications/subscribe/{anchorId}
2.1. Path Parameters

Name
	

Type
	

Value
	

Description

anchorId
	

string
	

*required
	

Zero Access keySSI encoded in base58.
2.2. Responses

Status Code
	

Description

503
	

Under construction. Currently needs to be implemented.
3. Publish Notification

Publish a message to the anchorId subscriber. Create a queue for the anchorId in case it does not exist.

	

/notifications/publish/{anchorId}
3.1. Path Parameters

Name
	

Type
	

Value
	

Description

anchorId
	

string
	

*required
	

Zero Access keySSI encoded in base58.
3.2. Body Parameters

Name
	

Description

body
	

Body contains the message to be sent to subscribers subscribed to the “anchorId” queue ( see example).
3.2.1.Example: Application/JSON

{

   "message": "Content of message sent to subscribers"

  }
3.3. Responses

Status Code
	

Description

200
	

Message was placed in the queue for the anchorId. Response media type: application/json ( see example).

400
	

Messages could not be read from the body.

409
	

Queue already exists.

500
	

Error creating notification queue for the provided anchorId or unable to send the message.
3.3.1. Example: Application/JSON

{

   "message": "Message delivered to 2 subscribers."

  }

