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

A good design practice is to display extra information that can be used to
locate a particular user. For example, for a federated service like e-mail, you
add the service provider's domain in addition to the username
(sally@emailspace.net). This is sufficient but runs into issues when a user
wants to change their username or provider. The user then needs to take on the
cumbersome task of notifying all contacts of their new address. Recipients
would need to trust your new e-mail address, without any strong proof that the
sender is the same person or even using the same device. Users thus rarely
change usernames or move providers even if they grow to dislike their current
provider.

## The Design Solution

Generate a new `id` when a user creates a profile. This is a sufficiently long
string of characters that would be nearly impossible to guess (i.e., public
key). If the user changes their service provider or
username, the `id` does not change, allowing an application to keep an
up-to-date contact list and make it easier for users to understand if they are
talking to the same person.

### Examples

PGP (+Keybase)

Various P2P Social Profile Systems (Cabal, SSB, Textile, 3box)

Matrix (p2p beta)

## Why Choose ... ?

- When you want to enable users to freely move between providers and usernames
  with ease

## Best Practice: How to Implement ...

- Users need to have strict control over when and where their id is shared.
  Never automatically share this id on a public network or discovery service
unless users explicitly opt-in to publicly sharing this id, as it could be used
nefariously by 3rd parties to contact a user without their consent.
- Make sure that the same id is not reused across usernames that are intended
  to be separate (e.g., two users on the same device should have two different
ids).
- To more easily detect impersonation attempts, store a contact list locally on
  the device that can be used to verify known users. Somehow display to the
user when someone has a username that matches one in their contact list, but
has a different id.

## Potential Problems with Full Username

Full usernames increase complexity for users who want to use the same account
on multiple devices. To enable multiple devices, either require 3rd-party
proofs (see Keybase) or maintain a public append-only log signed by a secret
key linked to the original id. 

By assigning an id to a particular account, it can make it more difficult to
create entirely anonymous accounts. For example, if a 3rd-party finds the id
secret in the profile on the device's hard drive, they have linked that device
to that account. To give users more anonymity, ensure ids are deleted
completely from devices upon account deletion.

## The Take Away

Full Username can help give users continuity and trust in who they're talking
to.

## References & Where to Learn More

- PGP local device storage/contact list
- Keybase proofs
- Research papers
