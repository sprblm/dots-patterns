## The Design Problem

In a local-first world, peers may or may not be connected to the network at all
times, and information left by the users could be out-of-date. When and how is
dated information is shown on the network?

## The Design Solution

Give a visual indication for the age of a piece of information, for example
when a peer was last seen. Fading a tag or a card usually works.

### Examples

Trello’s Card Aging

![Image of Trello](https://d33v4339jhl8k0.cloudfront.net/docs/assets/545804d8e4b09c5ca72525ce/images/54875c94e4b08bfc37e2ab47/314700)


## Why Choose Age Indicator?

- Age indicator shows you information about network participants without taking up too much space. 
- It comes in handy when distinguishing a viral thread in a yet-to-be federated part of the network. 

## Best Practice: How to Implement Age Indicator 

- Age Indicator is most effective when it comes to time sensitive content,
  like a 'best-before-date' feature. It highlights when something needs to be
  checked for validity. As such, it enables an assertion of truth as legacy
  information gets referenced over time. 
- During the sync, prioritizing offline and old content in the network is
  recommended. In addition, make sure context is always clear so that it won't
  affect readers' perception. 

## Potential Problems with Age Indicator

- **Content vs. Location**. When there are multiple dimensions of aging, it can be difficult to know what
  is being displayed. Is it when a peer was last seen? The last time this file
  was updated? Use age indicator coupled with clear visual cues about what has
  aged.
- **Contrast**. Ensure you pick a color contrast that allows for fading.
- **Action**. A single visual indication is not enough to accommodate both spectrums of the
  'aging' quality: Is it becoming irrelevant and out-of-date? Or has it become
  more valuable with the increased engagement over the course of time? Consider
  recommending an action (if any) that could be taken based upon the age of the content.

## The Take-Away

Age indicator is very important when the age of content affects how a user
should interact with it.

## References and Where To Learn More 

## Tags
sync, status 

