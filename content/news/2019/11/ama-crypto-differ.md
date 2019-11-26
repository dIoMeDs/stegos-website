---
author: "Vladimir Lebedev"
date: 2019-11-26
linktitle:  Crypto Differ AMA 20191126
title: "Crypto Differ AMA"
description: "Transcript of Crypto Differ AMA, 18th November 2019"
metaTitle: "Crypto Differ AMA"
metaDescription: "Transcript of Crypto Differ AMA, 18th November 2019"
categories: [ "INTERVIEW" ]
tags: ["stegos", "interview", "technology", "ama"]
weight: 7
draft: false
---


# Dear Stegos Community,

Last week, our CEO Joel conducted a series of AMAs in various communities. Here's the transcript of his AMA with Crypto Differ on Monday 18th November.

**We start with three intro questions from our team, to present briefly Stegos to the CryptoDiffer community**

**Can you introduce yourself to the community? What is your background and how did you start Stegos ??**

> Good morning! I’m the founder and CEO of Stegos. We initially started with a different name and focus but pivoted into privacy over a year ago. Why? Well... We spent a few weeks soul-searching and figuring out the best application of blockchain in our society. We wanted to leave this world a better place when we started and we figured that protecting you from mass surveillance was how we could make the biggest impact!

> I have been a developer for over 25 years and a pretty hardcore one, e.g. I wrote device drivers and did reverse-engineering. You can look me up on Stack Overflow under wagerlabs. I didn’t have as much experience with crypto but I’m a super-fast learner. Oh, and I’ve spent a number of years working on Wall St so I have a bit of that background too. Mostly, though, I spent my time building distributed systems in Erlang and then Go.

**Can you briefly describe what is Stegos in 3-5 sentences? What technology stands behind Stegos and why it’s better than the existing one?**

> We want to deliver fast and anonymous payments and a message bus that any apps can use to exchange data. We also want to protect you from mass surveillance. We want you to have your privacy and freedom to talk to others without fear.

**What are the major milestones you have achieved so far?**

> We have just laid the foundation and built the platform for anonymous payments. We have also built the message bus to exchange data. We delivered the desktop app with a built-in wallet. We aim to deliver the mobile app in the next 2-3 months.

**Adoption is very important; how do you plan on getting Stegos adopted by the outside world (people with no blockchain knowledge)?!**

> We are looking to make money from sales of applications built on top of our platform. It will take time before we get there, though. In the meantime, we are going to drive token growth through our viral features.

> Red packets is a feature that we borrowed from WeChat. You can create a QR code using our app and post it anywhere, e.g. plaster it on walls or sidewalks. Scanning the QR code with your smartphone will get you a link to download our app. By scanning the QR code with the app you will try to open the red packet and get free tokens. It’s very important to note that this does not require you to have any tokens in your wallet, it’s free to try to open a red packet!

> You may or may not get free tokens every time you scan the QR code since this is random. You can keep trying, though, until the packet is empty. There’s a technical delay of 2-3 seconds every time the packet is opened so we’ll be showing an add (animated GIF?) during this time. The ad can be set by the creator of the red packet.

> So red packets should drive growth and spread our app far and find, in addition to creating demand for our tokens. And ads in the read packets should drive demand for the red packets themselves.

**We know that to expand the impact of one privacy blockchain project to big markets like China, US, there will be barriers of regulation. Many country governments don't like private part since it's hard for them to check finance/data transparency. In this case, what will Stegos team do sine your project slogan is "Reject surveillance — embrace your freedom"?**

> Existing centralized messaging apps leak metadata, e.g. your IP address, phone number, etc. I suggest skimming Snowden’s book, “Permanent Record” where he explains how governments can learn everything they need by simply analyzing what phone numbers and IP addresses your communicate with and when!

> Stegos does not leak meta data and does not require phone numbers or similar information that uniquely identifies you. You can stay as anonymous as you want with Stegos. Centralized services that are limited in the number of servers they can deploy to support their network and can be shut down. Stegos is decentralized can never be shut down as long as people run nodes!

**How optimistic are you about the future use-case compared to when you started it? How will content on the platform be priced? Is there any chance that the content will be overpriced? Who will oversee the price system?**

> I'm very optimistic about our future, e.g. because of viral growth through red packets. But don't understand the bit about pricing content as we are not a content platform.

**Which types of programming languages are supported by Stegos for creating privacy Dapps ! How much difficult is to creating Private Dapps on stegos?**

> Hey, it works now! You can create apps for Stegos in any language. All the apps can communicate with each other using data messages. These are indistinguishable from payments and cannot be traced.

**What are your expectations from 2020? What ways will the Stegos project cross in 2020? What improvements will it make? What awaits Stegos enthusiasts in the future?**

> We want to deliver secure chat, red packets and decentralized and trustless OTC trading against BTC and ETH.

**What is the gPoS consensus algorithm and what is the difference between gPoS and PoS? Why does Stegos use gPoS algorithm but not other popular algorithms: PoW, PoA, ...?**

> Stegos is PoS (proof-of-stake). A unique feature of Stegos is that our PoS consensus is “gamified”. What does that mean? On other PoS blockchains you get block rewards by validating and helping support the blockchain. I’m not talking here about receiving “dividends” by just holding tokens in your wallet. I’m talking about running a full blockchain node.

> Now, the size of the block reward you receive on other PoS networks is proportional to the size of your stake. Rich whales can put up a huge stake and receive the lion share of the rewards.

> Stegos gPoS is different! Yes, we have the same block rewards proportional to the size of your stake but we also have a CRUCIAL difference! Some 20% of each blow reward goes into a prize pool and a drawing happens every week or so. Any validator (node) who has been online and validating throughout this week will be eligible for this drawing, regardless of the size of their stake. We call this Validator Service Award since it’s a reward for meritorious service!

> Practically, it means that you can strike it rich with Stegos by putting up a small stake and then doing good work supporting our blockchain. This is more democratic than existing PoS systems.

**In one of the AMAs you've done before, you apologized for product and information delays and stated that you would make an announcement within 2 weeks about exchange listing.**

**Although a long time has passed, as far as I know any announcement has not been made. Can you explain why?**

> We signed a deal with an existing exchange and spent 1 month integrating. The exchange went back on our deal at the last hour, citing regulatory pressure in China. We are working to secure a deal with a bigger and better exchange but it will take a few weeks.

**Are there some major partnerships in the works? I’m also interested in how you do immediate transactions? Do you anticipate scaling issues?**

> We do not do immediate transactions, there's still a delay of a few seconds. We'll be working on scalability in 2020.

**Any specific reason behind or a kind of motivation for you to create the #STEGOS project while in crypto market there is already many projects to solve this problem that tenanted the greater number of market and customer?**

> Mobile mining should be big and we expect it to be our key focus.

> We will initially support mobile mining on Android. Fortunately, you don’t need to use the Google Play Store to install Android apps, you can side-load them from an APK. Also, PoS (proof-of-stake, the consensus we are using) is not as heavy on smartphones and batteries as PoW (proof-of-work).

> Smartphones spend a LOT of time connected to high-speed networks like 4G, LTE or WiFi, e.g. while their owners are sleeping or at work. We want to leverage this time and harness these smartphones to support our network and privacy features. A blockchain network of billions of smartphones can never be shutdown and will guarantee private payments and communications for EVERYONE!

**Please explain how does the privacy feature work on the group messaging. Does privacy mean that the messages in the group can only be accessed by the group member and no third party can hack it? Or, does privacy mean everybody in the group is anonymous and in no way can be connected to any living person?**

> Yes, you got it right. No government or other participants can disclose your identity. Only those who are in the same group with you can read the group messages.

**Decentralized data is always a sensitive story. What will you do if the cost to attack your project is less than the worth of data you store?**

> It will be progressively more expensive to buy tokens as you accumulate your stake. We are PoS and not PoW so there's no possibility to execute a 51% attack just by throwing more computing capacity at it. It becomes an economic problem.

**Full node on mobile seem to be a unique and innovative feature of Stegos. Which specific about technology can Stegos do this since mobile phones can have some problems like CPU heat, network fluctuation, hardware requirements and which advantages does running nodes on mobile have over running it on traditional PC?**

> PoS is very light on mobile resource usage compared to PoW. We are working to optimize this too! The mobile node will be able to validate just as a regular node but will only hold the currently active UTXO set, that is only the active coins and data messages. We are looking forward to hosting billions of smartphones on our network!

**What is the role of STG tokens in the network? Does the payment need to pay for STG? Do I need to pay for STG to send a message? In other words, what is the STG’s token appreciation logic?**

> You will be using STG tokens to pay for messages and data packets. You will not need STG tokens to open a red packet and earn free tokens so this is one possible on-ramp to Stegos. You can just keep looking for and scanning red packet QR codes until you accumulate a stake. Then you can run a node and use your stake to earn block rewards or our validator service award.

**1.Why did you choose the PoS + pBFT consensus? What are the benefits of this choice?**

**2.What kind of tech Stegos use to scale the network?**

> PoS is might lighter on resource use than PoW and we want billions of smartphones in everyone's pocket to support our network. We'll use sharding to scale.

**STEGOS is very SUCCESSFUL in terms of its TECH, PRODUCTS, and SERVICES**

**can you tell us some of this achievement?**

> We post updated frequently. Please subscribe to our official TG channel and stay on top of the news [https://t.me/stegos4privacy_official](https://stg.to/tgn)

**Can you briefly explain how the Top milestones that the Stegos team aims to execute before the end of this year or going to execute in future, will help them succeed and What Stegos may look like in 2020 and beyond?**

> Our goals for 2020 is to deploy secure chat, red packets for viral growth and then OTC trading against BTC/ETH. Our immediate goal, apart from launching the mainnet on Nov 20, is to release our mobile app.

**What about regulations, does that affect the way companies have to use the platform? If a company is based in a regulated country, can they still use the platform? Would you be able to tell us what your plans are beyond the release of new platforms? What can we expect in the next 5 years?**

> We observe Swiss law as a Swiss company. It will be up to the users of Stegos to observe the laws of their own countries.

**Are you planning to add any other assets to the Stegos wallet? Also does it differ from existing wallets?**

**How will its future developments, updates be?**

> We will add BTC/ETH wallets once we start implementing the decentralized and trustless OTC trading feature.

**How many transactions per second (tps) can Stegos deliver right now in its current iteration? Is it scalable as the number of participants grow, or will node centralization issues emerge as the number of participants scales?**

> We deliver around 100 tps right now but please understand that we are a secure and private blockchain so our computing requirements are higher than, say, Ethereum. We are looking to increase this number in the future, both through optimization and sharding.

> We have a full-time technical team of 5 ninja special forces developers. We do have a physical office but it's mostly unused since we are all over the world. We have people in the US, Russia, Ukraine, China, etc.

**Do users need to pay STG for each message delivered by stegos?**

> Yes

**As the roadmap, you will have the Light node and staking pools support, mobile wallet on the last quarter of 2019. What's going on for these?**

> We are looking to deploy the mobile app in 2-3 months.

**Is your product currently available on CH play and App store? I know you give the SDK developers, so it is only supported by Android, how do you support the IOS developers?**

> We have no plans to support iOS at the moment. Android is much easier to work with since you can side-load an APK to install an app and there's no need to depend on Google or other centralized authority.

**Can you provide details on Confidential assets? Specifically, on the level of privacy customization these assets will have at the protocol**

**level because some use cases might need some data (not personal) to be public (e.g. auditability)?**

> We are unique in being the first platform to implement Value Shuffle. https://bitcoinmagazine.com/articles/shuffling-coins-to-protect-privacy-and-fungibility-a-new-take-on-traditional-mixing-1465934826

**What was the biggest difficulty when you started the Stegox project? How does the project plan attract new users, are there any difficulties for new users?**

> The biggest difficulty we have had is actually building a cryptographically secure blockchain. I swear, it's just like rocket science!

**What is the main mission of stegos?**

> Our main mission is to protect you from mass surveillance!

**Answers to questions Joel could not respond individually.**

> Stegos is PoS (proof-of-stake). A unique feature of Stegos is that our PoS consensus is “gamified”. What does that mean? On other PoS blockchains you get block rewards by validating and helping support the blockchain. I’m not talking here about receiving “dividends” by just holding tokens in your wallet. I’m talking about running a full blockchain node.

> Now, the size of the block reward you receive on other PoS networks is proportional to the size of your stake. Rich whales can put up a huge stake and receive the lion share of the rewards.

> Stegos gPoS is different! Yes, we have the same block rewards proportional to the size of your stake but we also have a CRUCIAL difference! Some 20% of each blow reward goes into a prize pool and a drawing happens every week or so. Any validator (node) who has been online and validating throughout this week will be eligible for this drawing, regardless of the size of their stake. We call this the Validator Service Award since it’s a reward for meritorious service!

> Practically, it means that you can strike it rich with Stegos by putting up a small stake and then doing good work supporting our blockchain. This is more democratic than existing PoS systems.

> We are looking to make money from sales of applications built on top of our platform. It will take time before we get there, though. In the meantime, we are going to drive token growth through our viral features.

> Red packets is a feature that we borrowed from WeChat. You can create a QR code using our app and post it anywhere, e.g. plaster it on walls or sidewalks. Scanning the QR code with your smartphone will get you a link to download our app. By scanning the QR code with the app you will try to open the red packet and get free tokens. It’s very important to note that this does not require you to have any tokens in your wallet, it’s free to try to open a red packet!

> You may or may not get free tokens every time you scan the QR code since this is random. You can keep trying, though, until the packet is empty. There’s a technical delay of 2-3 seconds every time the packet is opened so we’ll be showing an add (animated GIF?) during this time. The ad can be set by the creator of the red packet.

> So, red packets should drive growth and spead our app far and find, in addition to creating demand for our tokens. And ads in the read packets should drive demand for the red packets themselves.
