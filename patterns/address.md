## The Design Problem

In a centralized world, it's assumed that other users are mediated through the
same service. For example, my username on Twitter is displayed the same for
every other user on Twitter. There is a global Twitter "namespace" where
usernames are obtained. If I change my username, it might be difficult for
others to find me unless I tell them my new name.

In a decentralized world, users may not be connecting to you from the exact
same service or application that you are. Data can be hosted by different
parties, and usernames could be displayed differently depending on the
application or service each person is using to connect. There may also be many
different "namespaces" that guide what usernames are available or not, leading
to two users to have the same username. Because of this, a username alone is
often not sufficient to understand who you're talking to.

## The Design Solution

Address users based on username and a namespace. For example, in federated instances, users can be uniquely identified by their username only if they also have the correct domain or instance name.

### Examples

E-mail

XMPP

Matrix

## Why Choose Address ?

- When users need to have a dedicated server that is always on and can receive messages or information from other users.

## Best Practice: How to Implement Address

- Make sure that usernames are unique on the same instance.
- Two users on the same device should be able to have two different
  usernames on separate instances.

## Potential Problems with Address

It is often complex for a user to convert their username, account, contact list, and data to a new provider. In practice, most users then do not transfer to a new provider even if they become unhappy with their current one.

If the user does decide to move to a new provider, the user then needs to take
on the cumbersome task of notifying all contacts of their new address.

Recipients would need to trust your new address, without any strong proof that
the sender is the same person or even using the same device. See [Persistent
Identity](persistent-identity.md) for making portability more
secure.

## The Take Away

Address can help give users trust in who they're talking to.

## References & Where to Learn More

- PGP local device storage/contact list
- Keybase proofs
- Research papers

## Tags

identity, federation
