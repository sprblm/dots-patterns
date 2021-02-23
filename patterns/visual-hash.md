---
title: Visual Hash
topic: sharing-permissions
tags:
  - pattern
  - ui
description: "Quickly differentiate between two users or pieces of content."
layout: pattern
---

## The Design Problem

Differentiating between users on a social network scales in difficulty with the
amount of information. To quickly discern the difference between one person and
another; or one piece of content from another, we use icons or pictures. Often
this can be solved by choosing or uploading a photo as a profile picture, or
using a thumbnail version of the content.

However, when neither of these are available, it's difficult to tell content or
users a part quickly.

## The Design Solution

Generate an image based upon the hash of the content or the ID of
the user.

## Examples

- Cabal
- [Github Identicons](https://github.blog/2013-08-14-identicons/)

## Why Choose Visual Hash?

When you need a default image to quickly differentiate between two users or pieces
of content.

## Best Practice: How to Implement Visual Hash

This image should have high enough entropy to cover the elements that would be
visible in a typical user's social network (e.g., 1000 items).

## Potential Problems with Visual Hash

- It often isn't a great proxy for the actual user or the content. Use visual
  nudges to remind the user to choose an image.
- Colorblindness could be an issue in differentating two visual hashes from
  each other. Ensure that the visual hash uses two colors that can be seen by all users.

## The Take-Away

Visual hash is a good default image picker.

## References & Where to Learn More
