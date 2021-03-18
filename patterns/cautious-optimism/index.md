---
title: Cautious Optimism
topic: moderation-curation
tags:
  - protocol
description: "Build opportunities for detecting and reacting to bad behavior"
---

### The Design Problem

In a centralized world, trust is simple: all participants have to
trust a single entity with their data. On a more fundamental level,
participants have to trust that the server will connect participants to who
they think they're being connected to. In other words, all participants have to
put trust in one place, which can introduce a point of failure or attack.

In a decentralized world, trust can and has to be placed in many different
places. In a federated network, participants have to trust many authorities; in
a distributed (p2p) network, all participants are equal, and have to be trusted
on an individual basis. But deciding the level of trust for all connections to
the network individually can sometimes be too taxing for users.

### The Design Solution

Trust can be governed by a protocol. For example, the protocol can be generous
(trust all by default) or guarded (trust none by default). But these approaches
can sometimes be too rigid.

Consider modelling game-theoretic insights on cautious optimism, e.g. trust
each node until they violate a rule. This means the level of
trust to another network participant is based on their past behavior. Depending
on the context, this could be: sharing (or not sharing) your data for some
period of time, or on a more social level, sharing with your friends of
friends.

### Examples

- ["Optimistic Unchoking" in BitTorrent](https://www.cs.helsinki.fi/webfm_send/1330) to mitigate free-riders, and promote peers who are willing to share
files back.
- ["Transitive interest gossip" in Secure
  Scuttlebutt](https://dicg2020.github.io/papers/kermarrec.pdf) promotes peers
to share information with those who share the same interests or social networks.

### Why Choose Cautious Optimism?

Trust is more fine-grained than a rigid protocol presumes sometimes; it can be
revoked at any moment, and is usually tied to actual behavior.

### Best Practice: How to Implement Cautious Optimism

- Make sure that the terms and conditions of network participation are made
  clear to all users, so that bad actors know they will be blocked or removed
  from the network for bad actions.
- Allow people to override automatic decisions.
- Consider embedding this idea in your technical and social code (e.g. Code of Conduct).

### Potential Problems with Cautious Optimism

- Cautious optimism is still optimism. Plenty of bad actors could already benefit
  from being trusted once — especially if it's easy to create new disposable identities
  on the network. This strategy is only going to be useful if bad actors can be permanently removed.
- Any policy that punishes users for breaking the rules risks punishing those that are new and
  unfamiliar with the platform. Make sure rules are transparently communicated up-front.
- Justice may not always come in the form of punishment (e.g. blocking users),
  also consider what transformative justice might look like for your community.

### The Take Away

When designing a protocol, build in opportunities for detecting and reacting to
bad behavior.

### References & Where to Learn More

- The "[tit for tat](https://en.wikipedia.org/wiki/Tit_for_tat)" strategy in game theory.

- Rodrigues, Carlo Kleber da Silva. ["Analyzing peer selection policies for BitTorrent multimedia on-demand streaming systems in internet."](https://arxiv.org/abs/1402.2187) International Journal of Computer Networks & Communications (IJCNC) Vol.6, No.1, January 2014. 

- See [[network health indicator|network health indicators]] for one implementation strategy, tracking how long peers share data to determine whether to share with them in the future.

