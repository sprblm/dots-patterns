## Why Choose Disposable Identity?

- When you want to allow for a privacy-preserving method of connecting
with trusted contacts.

## The Design Problem

In many centralized applications, users are forced to create an account before
interacting or creating content. Not only do "mandatory registration" pages
pose a barrier to adoption, they also create a potential privacy breach and
safety concern for some users. Furthermore, certain scenarios and contexts could be
dangerous when long-lived identities are required, and can lead to violence and
harassment.  

In a decentralized application, users can more freely create identities. 
When involving vulnerable populations in your target user base, you need to
allow users to create and share content with trusted contacts in a way that
does not expose any identifying information to a third-party. 

## The Design Solution

Store as much identifying information as possible on the user's device, and as
little as possible identifying information on any service. Allow users to
manually "self-destruct" their identity and all related account information. 

You can also create an internal timer that deletes the account after a certain
amount of time. Display this prominently to the user upon account creation.
 
### Examples

Delta.chat

Discord


## Best Practice: How to Implement Disposable Identity

- Identities could be created with limits set up front. For example, "this
  account will self-destruct after 90 days". Allow the user to change this
  parameter.

- Some users may want to decide to keep their identities as their permanent
  one after some time in use. Allow users to upgrade to a [persistent
identity](persistent-identity.md) if they want to keep it.

- Consider making disposible identtity very easy to create or even the default
  account creation action. Allow users to simply scan a QR Code or click a link
  to generate their disposable identity. 
 
## Potential Problems with Disposable Identity 

- **Guaranteeing anonymity is hard.** Clearly communicate the risks to users who
  are creating disposible identities.
- **Spam and harassment.** Disposible identities should be paired with 
  invite-only groups and contact requests for private messages. Implement
  strong anti-abuse features for public communities and content.
- **Scaling issues.** With many disposible identities over time, some protocols
  or applciations may have challenges with performance. Consider removing
  content after the identity has expired, but clearly communicate this to
  users.

## The Take Away

When the main focus of your application is trusted connections and private
communities, there are strong benefits in both usability and safety when  
disposible identities are the default interaction. With public content,
this is much more difficult to implement safely.

## References & Where to Learn More

## Tags

app, identity
