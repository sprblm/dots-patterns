---
title: Secret Sharing
tags:
  - protocol
topic: sharing-permissions
description: "Backup your keys and other secrets with your trusted peers."
---

## The Design Problem

Key management is hard - decentralized or not! Whether it's your most important password, your wallet ID or your private encryption key, there don't seem to be good choices. Leave it on a device that you manage, which may get lost or stolen, or submit it to a central authority that can leak your data (intentionally or untintentionally)? There is no good way to encode trust in our current default key management tools.

## The Design Solution

Because trust is inherently social, we can model key management in a social way also. Secret sharing allows you to share your "secret" (passwords and keys, for example) with a number of your peers - friends, family members, or any entity you place your trust in! If you lose your original secret, these peers (some of them, or all of them) have to come together to recreate your secret. Thanks to some mathematical magic (AKA cryptography!) no single peer can recreate your secret.

## Examples

::: examples

- [![Dark Crystal demo](secret-history-screenshot.png) Dark Crystal in Secure Scuttlebutt](secret-history-screenshot.png)

:::

## Why Choose Secret Sharing?


## Best Practice: How to Implement Secret Sharing


## Potential Problems with Secret Sharing


## The Take Away

Secret Sharing is a protocol that models trust in a social and distributed fashion.

## References & Where to Learn More

[Dark Crystal](https://darkcrystal.pw/what-is-secret-sharing/)
