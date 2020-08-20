## The Design Problem

In a centralized world, the trust model is simple: all participants have to
trust the central authority with their data, e.g. emails, orders, pictures, as
well as metadata such as IP addresses and friends' contacts. On a more
fundamental level, participants have to trust the central authority is who they
say they are, and that it will connect participants to who they think they're
being connected to. All participants have to put trust in one place.

In a decentralized world, trust can and has to be placed in many different
places. In a federated network, participants have to trust many authorities; in
a distributed (p2p) network, all participants are equal, and have to be trusted
on an individual basis. But deciding the level of trust for all connections to
the network individually can sometimes be too taxing for users.

Trust can be governed by a protocol. For example, the protocol can be generous
(trust all by default) or guarded (trust none by default). But these approaches
can sometimes be too rigid.

## The Design Solution

Consider modelling game-theoretic insights on cautious optimism, e.g. trust
each node until they violate a rule (“tit for tat”). This means the level of
trust to another network participant is based on their past behavior. Depending
on the context, this could be: hosting (or not hosting) your data for some
period of time, allowing bandwidth use — or on a more social level, being
a code-of-conduct-abiding network participant.

### Examples

"regular unchoking in BitTorrent"

## Why Choose Cautious Optimism?

Trust is more fine-grained than a rigid protocol presumes sometimes; it can be
revoked at any moment, and is usually tied to actual behavior.

## Best Practice: How to Implement Cautious Optimism

- Make sure that the terms and conditions of network participation are made
  clear to all users, so that bad actors know they will be blocked or removed
from the network for bad actions
- Allow people to override automatic decisions

## Potential Problems with Cautious Optimism

Cautious optimism is still optimism. Plenty of bad actors could already benefit
from being trusted once — especially if it's easy to create new identities
(burner accounts) on the network. This strategy is only going to be useful if
bad actors can be permanently removed.

## The Take Away

When designing a protocol, build in opportunities for detecting and reacting to
bad behavior.

## References & Where to Learn More

The "tit for tat" strategy
