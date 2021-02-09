---
title: Discovery Pub
category:  sync-status
tags:
  - pattern
  - protocol
description: "Define scope and filters for decentralized search, and provide users better control over which algorithms and filters to use."
layout: pattern
---

## The Design Problem

In a centralized world, searching doesn't involve too many difficult decisions on the part of the user. When typing into a search box, the user trusts that the service is giving them the results they've asked for. This usually involves algorithms to display information in a way that makes sense to the user — including filtering, ranking, and selecting information intelligently. For most services, the user has little-to-no choice on how this search and discovery is executed on their behalf, and if controls are offered, these options are usually buried within profile and platform settings.

In a decentralized world, discovering new information and users can be problematic for different reasons. Users often have questions like:

- Whose data am I searching?
- Am I searching across the entire network, or just a subset of the network?
- Who can I ask for help if the search doesn't work as intended?
- How did this content get in my search, and how can I see more or less of the same?

In a peer-to-peer application, you can only search for what you have downloaded, or what your known peers have downloaded. Similarly, in a federated context, search is only possible through your known server or federated server network. In both cases, if the network is very large, this 'decentralized search' begins to cause problems in safety and performance when searching.

## The Design Solution

Users need to obtain a basic understanding of the differences between search that is mediated by federation and search enabled by a central service. Pair with the [Content Curators](content-curators.md) pattern. 

Allow users to opt-in to search and discovery of content. For search, add indicators for scope (e.g., local vs global). For discovery, add indicators for filtering and curation. Allow users to opt-out of having their content searched through (e.g. locally vs globally).

These considerations can be governed by the protocol or client. For example, the client can be 'fat' (e.g., download everything by default and search it all); 'thin' (e.g., download very little and call out to another server for search); or 'gossipy' (e.g., search only what my direct peers or peers of peers have downloaded). Provide the ability for users to easily configure which servers to search, which algorithms to use in that search, and which blocklists or filters to apply to the search.

### Examples

- SSB pubs
- Mastodon Search
- Sonar P2P Search
- Fediverse network

## Why Choose Discovery Pub?

When your application is heavily enriched by the ability to search and discover new content (e.g., social networks).

## Best Practice: How to Implement Discovery Pub

- Allow users and services to create and share 'block' and 'allow' lists of instances, peers, or keywords that they do not want to include in search. First-time users should be able to adopt already well-known filters for abusive, fraudulent, or spam content. This is critical to prevent what can be called the "Welcome to Hell" problem, where first-time users see a bombardment of irrelevant or harmful content.
- Provide the possibilities to curate data and expand one's network while staying local.
- If you are using a service for your search algorithm, transparently show the name of the service along with a way to contact those people (e.g., a git repository or website). 

## Potential Problems with Discovery Pub

- This can cause a dependency on particular services, re-centralizing the technical architecture and causing potential failures. To mitigate this, providing a search function should not be special or privileged in the protocol. The protocol should allow for any peer to provide the search functions to another peer. In practice, the search feature can be implemented as a 'bot' user that runs on a server rather than a laptop.
- There is still a need to address the privacy concerns regarding search queries and end-to-end encrypted contents. For example, in pure P2P, users' search queries might encounter a risk of exposure to the network.

## The Take Away

Search is possible in a decentralized network, and can provide users better control over which algorithms and filters to use, opening space for private, collaborative, open source, and platform-cooperative recommendation engines that can be run by anybody.

## **References & Where to Learn More**
