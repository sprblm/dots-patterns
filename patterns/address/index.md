---
title: Address
topic: identity-agency
tags:
  - ui
  - protocol
description: "Users are uniquely identified by their handle and a server name."
---

### The Design Problem

In a centralized world, it's assumed that other users are mediated through the
same service. For example, a handle on Twitter is
displayed the same to everyone else on Twitter. There is a global Twitter
database of these handles, and each is unique -- no one can use the same handle as someone else. 

In a decentralized application, users may not be connecting to each other from the exact
same service that you are. Data can be hosted by different
services, and handles could be displayed differently depending on the
application each person is using to connect. Because of this, a handle alone is
often not sufficient to understand who you're talking to.

### The Design Solution

Users are uniquely identified by their handle and a server name.

### Examples

::: examples

- [![Address in Email](address-thunderbird.png) Email is the classic example of addresses (shown: Thunderbird app)](address-thunderbird.png)

- [![Address in Adium](address-adium.png) XMPP has addresses similar to Email (shown: Adium app)](address-adium.png)

- [![Address in Matrix](address-matrix.png) Matrix gives more visual guidance for address choice](address-matrix.png)

:::

### Why Choose Address ?

- When users have a server that receives messages from other users.

### Best Practice: How to Implement Address

Make sure that handles are unique on the same instance. Two users on the same device should be able to have two different handles.

### Potential Problems with Address

It is often complex for a user to convert their address, account, contact list, and data to a new server. In practice, most users then do not transfer to a new server even if they become unhappy with their current one.

If the user does decide to move to a new server, the user then needs to take on
the cumbersome task of notifying all contacts of their new address. Recipients
would need to trust your new address, without strong proof if it is the same
person or even the same device. See [[Persistent
Identity]] for making portability more secure.

### The Take Away

Addresses can help give users trust in who they're talking to.
