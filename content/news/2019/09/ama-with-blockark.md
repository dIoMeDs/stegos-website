---
author: "Alan Li"
date: 2019-09-23
linktitle: BlockArk AMA 20190923
title: "Review of AMA with BlockArk"
description: "Review of Stegos AMA in BlockArk community"
metaTitle: "Review of AMA with BlockArk"
metaDescription: "Review of Stegos AMA in BlockArk community"
categories: [ "INTERVIEW" ]
tags: ["stegos", "interview", "technology", "ama"]
weight: 7
draft: false
---

At 7pm on September 17th, Stegos founder Joel conducted a 100-minute AMA live broadcast to the community. It was broadcast simultaneously across 9 different communities, with a peak viewership of 4,500 people as Joel shared the twists and turns of creating Stegos. The technical details of Stegos and the live Q&A discussion format made for an exciting evening. <br>

Below you'll find a transcript of last night's AMA.

This guest for this time is Joel, who is the founder of Stegos, an experienced hacker and blockchain pioneer. He was the former CEO of AE. He also served as the technical director of Deutsche Bank's prime brokerage and was responsible for the overseas development team. He currently focuses on Stegos to address privacy communications and payment issues.

The host is the *Co-founder of BlockArk*. The following is the live recording:

## Live recording

*Co-founder of BlockArk*:

Stegos was founded by AE's predecessor CTO – Joel<br>
Main features of Stegos:

- Privacy transactions: complete privacy, scalability through Omniledger shard + block cut guarantee, the first lightweight blockchain that supports shards, the so-called TPS is not a problem at all, the most scalable privacy chain.
- Privacy Mail: Reject mail monitoring.
- Privacy Chat: Private WeChat, private communication on-chain, a completely different architecture than traditional centralized messengers.

- Privacy OTC: The OTC on the chain gives BTC privacy and is perfect for chatting with OTC privacy chat room.
- Gamified PoS (gPoS): gpos is the break through of PoS, 1/3 of the block rewards are added to the service award pool, so that PoS will no longer widen the gap between rich and poor, and the poor will have the opportunity to get rich overnight.
- Mobile mining: The first blockchain that supports mobile devices running full nodes, allowing each user to run nodes and participate in blockchain management.

Our slogan: **Reject surveillance — embrace your freedom!**


This AMA lasts about 80-100 minutes and is divided into two parts.
In the first session, I will represent the community and ask Joel about the community's questions collected in the last two weeks.
After about 60-80 minutes, there will be a free questioning session, time of Ask Me Anything, friends please feel free to ask questions in the AMA group and the broadcast group's, and Joel will answer for us.

*Co-founder of BlockArk*:<br>
First part is about **Goals and Vision**, First Question: <br>
JOEL experienced a lot of tough moments when creating Stegos. The ideas and visions of those three projects: AE, Emotiq and Stegos are very different. What is the motivation for JOEL to make Stegos? What is the most outstanding thing about Stegos compared to the first two projects?<br>
*Joel*:<br>
Both AE and Emotiq started with from premise that there’s this cool thing called blockchain and that useful applications may be found once the product is built. With Stegos, I looked for a problem to solve and THEN built a blockchain.
The assumption nowadays is that we should accept government surveillance because we cannot do anything about it. Stegos frees you from the shackles of government surveillance, enabling to you talk to anyone or pay anyone with absolutely freedom, knowing that neither payments nor communications can be traced back to you!

*Co-founder of BlockArk*:<br>
Okay，Second question：<br>
Blockchain technology has been recognized in more and more countries and regions. Facebook has also released libra's white paper, which will better serve users all over the world in the future, which may also bring mobile payment into a new stage. That’s also a very good opportunity for Stegos. JOEL, what’s your options for that?<br>
*Joel*: <br>
We may launch an algorithmic privacy stablecoin in the future. And we are totally focused on mobile privacy payments now.

*Co-founder of BlockArk*:<br>
Okay, second part is about **Solution**, Third Question：<br>
Stegos is the first POS privacy-protecting digital currency to support mobile apps. As we know there are a lot of projects to try using mobile phones as blockchain nodes, but due to problems such as mobile phone performance and network fluctuations, none of them can achive that and also there is no mature solution. So how Stegos solve this problem. Is there any better solution? <br>
*Joel*:<br>
Blockchain networks composed of JUST mobile nodes will not be viable until we have stable 5G across the world. It’s worth preparing in advance, though. Also, keep in mind that a lot of smartphones spend their nights, and even parts of their day, charging, idle and connected to fast WiFi. Our solution is not mature at the moment but we are making progress!

*Co-founder of BlockArk*:<br>
Forth Question：<br>
Stegos proposes to use slice to solve the speed of the blockchain, and use the pruning function to reduce the data burden of the node, but in an anonymous privacy network, how to ensure the reliability of the data after fragmentation and pruning?<br>
*Joel*:<br>
We use advanced cryptography to ensure privacy and anonymity while keeping our approach reliable. For example, we implement ValueShuffle which you can think of as a built-in Bitcoin mixer. Sharding does not lessen privacy and is secure as longs as the shard is large enough. Also, we have “bootstrap” nodes that keep most of the blockchain data just so that new nodes can start up securely from scratch. We are working to eliminate these bootstrap nodes in the future.

*Co-founder of BlockArk*:
Okay，fifth question：
Stegos proposed a new gPOS consensus mechanism. Can you give us a brief introduction to the advantages of gPOS compared to traditional POS?<br>
*Joel*:<br>
With traditional PoS, your chance of winning a block reward is proportional to the size of your stake. If your neighbor’s stake is 10x as large as yours then you will earn 10x less tokens over time. So PoS is a system where the rich become richer but the poor stay poor. Stegos Gamified PoS (gPoS) gives anyone the chance to strike it rich, regardless of the size of their stake.
A portion of each block reward goes into a common reward pool which accumulates over the course of 1-2 weeks before being awarded to a random node (validator). gPoS is more than a simple lottery, though. Only nodes that stay online 24x7 and support our network are eligible to win. This is why we call the prize the Validator Service Award!

*Co-founder of BlockArk*:<br>
After the mobile phone becomes a verification node in the future, is there a requirement for the performance of the mobile phone or the network (for example, 5g)?<br>
*Joel*：<br>
It should work as long as the phone is connected to fast 4G (LTE). We have yet to analyze the battery drain that running a node may cause. Most smartphones spend a lot of time connected to WiFi and electricity, at night and while owners are at work. This is prime time to put these smart phones to good use supporting the Stegos network.

*Co-founder of BlockArk*:<br>
Sixth question：<br>
In the Stegos network, data can be traded and sent anonymously, but to ensure anonymity, no identity information will be reflected on the network. How to prove the authenticity of information and data without identity information? For example, someone pretends to be "I" to communicate with you, telling you that "I" has changed an address and wants you to pay him. How can I prove his identity?<br>
*Joel*:<br>
This is both simple and difficult at the same time.
We still use public / private key cryptography. It’s up to you to exchange public keys with people you want to chat with or pay but once you do, you can be assured that any message you can verify using the sender’s public key has indeed come from that sender. Signing messages with your private key, and being able to verify these messages using your public key, is what guarantees security.
Your private key proves your identity. I cannot pretend to be you because I don’t have access to your private key and cannot sign messages and payments using your private key. If I sign messages using my private key while pretending to be you then anyone that you shared your public key with will not be able to decrypt and validate my messages.
Remember that the public key is public because it’s meant to be shared! You can create a QR code out of your public key and plaster it on walls and sidewalks. No harm will come out of it to you or anyone else. Anyone who has your public key will be able to authenticate messages coming from you, though, as only your public key can decrypt messages that you signed with your private key!

*Co-founder of BlockArk*:<br>
Seventh question：<br>
From the white paper and Stegos' development route, it can be seen that JOEL likes the function of WeChat red envelope and adds this function to the anonymous network of Stegos. However, we noticed that if the red envelope sent is not picked up, the red envelope will enter the prize pool and cannot be returned. What is the purpose of the design?<br>
*Joel*:<br>
Returning unclaimed red envelopes to the Validator Service Award pool (aka prize pool) is just an expedient way to avoid having tokens be stuck in limbo and returning them to circulation. We expect unclaimed red packets to be extremely rare.

*Co-founder of BlockArk*:<br>
Eighth question：<br>
Many of our previous comparative analysis of competitive products focused on the privacy of the currency, and everyone is more concerned about the anonymity of payment. But for Stegos, peer-to-peer encryption messaging is also a major feature. What are the advantages and disadvantages of this feature over other similar projects on the market, such as telegrams?<br>
*Joel*:<br>
Its gonna take a bit of time to answer...I well try to summarize,though.
Telegram is not end-to-end encrypted by default. Any messages sent on Telegram are only encrypted form sender to the server and then from the server to the recipient. This means that anyone can tap into Telegram messages on their servers, be it Telegram itself, the government or hackers. Telegram also makes it very inconvenient to set up chats encrypted end-to-end. You are required to explicitly create such chats and they only stay on the device where you initiated them. This is a very bad design but perhaps it’s done this way on purpose.
Other messengers do feature end-to-end (peer-to-peer) encryption, e.g. iMessage, WhatsApp or Viber. Note that these messengers are tied to your phone number. This means that anyone with sufficient powers can watch your pattern of communication and derive conclusions from it, specially if they have access to your internet browsing history and other communications.
Stegos is fully encrypted and anonymous, no email addresses or phone numbers required. Stegos does not leak metadata, e.g. your phone number, time and duration of your chat sessions. Messages sent with Stegos are only associated with a public key cannot be traced back to you. Messages cannot be decrypted and read, same for payments.
I should also note that WeChat has no encryption whatsoever.

*Co-founder of BlockArk*:<br>
Third part is about **Market development**, Ninth question:<br>
What is the role of STG tokens in the network? Does the payment need to pay for STG? Do I need to pay for STG to send a message? In other words, what is the STG's token appreciation logic?<br>
*Joel*:<br>
STG tokens are used to pay for all transactions on the Stegos blockchain, including payments and messages. Theoretically, the more demand there is for Stegos tokens, the more they should appreciate. We will be working hard to ensure wide adoption of Stegos mobile applications and to make the applications themselves as enticing as possible. For legal reasons, I cannot comment further on token pricing or appreciation.

*Co-founder of BlockArk*:<br>
Tenth question：<br>
Throughout the team, we are very interested in David mcclain. As the chief rocket scientist, what role does it play in the team? Building a stegos node in space? Two years ago, a project called the space chain seemed to have the same idea but eventually failed.<br>
*Joel*:<br>
David is a key developer on our team and our cryptography guru. He applies to the Stegos blockchain the knowledge gained over his many many productive years in various industries, including space.

*Co-founder of BlockArk*:<br>
Eleventh question：<br>
Stegos has carried out many rounds of financing. Before a round of seed round financing and two rounds of private placement, the total fundraising amounted to 15.85 million USD. After that, the team will conduct two rounds of private placement and possible IEO, and on the main online line.The tokens of the team will be unlocked in the next 12 months and the team will sell to meet the funding needs. For a team of 11 people, why do you need such a large amount of money? How much has the financing of 15.85 million USD been used so far? How long will it be used in the future? What scale will the team expand to after a new round of financing?<br>
*Joel*:<br>
Ah,the hard questions now...
Stegos will be conducting an IEO but no further private placement rounds are planned. Note that the IEO does not raise money for the team since the money raised pays for providing liquidity on the exchange that conducts the IEO. Usually, the team is required to add their own funds, matching or exceeding the IEO amount, also for liquidity and market making.
Due to my own inexperience, I have let the treasury shrink from $15.85M at the time of crypto contribution to just a fraction of this amount. I should have sold the crypto immediately but did not. Remember that we raised when ETH was $800 to $1000 and it’s just $180-$190 now.
We have up to $2M in cash and crypto and have been careful with spending this money. This will not last for long, though, so we’ll need to finance operations by selling some of our token holdings after 1 year from IEO. We only expand as required by our development plans and allowed by our cash flow.

*Co-founder of BlockArk*:<br>
Last question:<br>
What is Stegos' future market development plan like? After a bull and bear, JOEL made a prediction about the future market environment. How blockchain technology will change our lives？How to make people who hold STG tokens succeed?<br>
*Joel*：<br>
I’m not allowed to make any market or price predictions for legal reasons. I sincerely hope that by using Stegos you will gain the freedom from broad government surveillance and will be able to conduct your business in peace and security.
Reject surveillance — embrace your freedom!

*Co-founder of BlockArk*:<br>
Thank you very much for the wonderful sharing fo joel.Now it is a free questioning session.Welcome everyone to ask questions freely.

*Co-founder of BlockArk*:<br>
The first free question from the main AMA group Lin Binghui：
i wann ask:Some exchanges are removing privacy coins for regulation, does it has a big impact on liquidity?
and one more question is that: why do you use full node wallet ? it is unfriendly.

*Joel*:<br>
Few exchanges have removed privacy coins so far. Japan has outlawed privacy coins and now one exchange in Korea did the same. For every exchange that decides to give up the opportunity, other exchanges will spring up or pick up where others left of.
We are developing p2p trading functionality of our own. So there will be no loss of privacy when creating an exchange account just to buy STG coins. For example, you will be able to trustlessly exchange BTC for STG and back. We will extend our wallet apps with this trading functionality, including OTC chat rooms, an order book and fully private and anonymous trading!
As to the full-node wallet, it was just a quick way to get ready for mainnet. We are already working on the Stegos mobile app.
More questions?

*Co-founder of BlockArk*:<br>
The second free question comes from Lin qing in the AMA group:
Hello, joel, hello, the question I want to ask is that there are many coins for private payments, such as Zcash, Monroe. What do you think is the advantage of Stegos compared with other competing products?
*Joel*:
Stegos is the first and only PoS mobile privacy coin. All other coins are PoW and require a great expenditure of energy to function so they cannot run on the smartphone in your pocket.

*Co-founder of BlockArk*:<br>
The third question comes from the meteor shower:
"Hi Joel, I think that like the beam, the team will take away a part of mined coins, I think they are in good shape, How do you think?<br>
*Joel*:<br>
Beam raised money from investors, a lot of money from what I know. I’m quite sure that they could work for many years without taxing the community. We do a lot with a much smaller team than beam’s and we only grow the team when the need arises and very carefully. We don’t need as much money as beam and think that a dev tax is not fair to the community when you have raised money from private investors.

*Co-founder of BlockArk*:<br>
The fourth question comes from Zheng Ge in the general group:
"Hi, joel, many of the past IEO projects have sacrificed the interests of private investors, giving IEO a better price and liquidity. How does Stegos view this approach, how do you balance the conflicts of interest between private investors and IEO investors?"<br>
*Joel*:<br>
It’s impossible to balance the interests of IEO and private sale investors. The reason investors are attracted to the IEO is to have an advantage over private sale investors! We did try to lessen the pain of private sale investors, though. We narrowed the price difference between IEO and private sale investors and we also gave private sale investors 2x the coins.

*Co-founder of BlockArk*:<br>
The middle group, Lin Binghui, interspersed a question:
"The issue of privacy protection has recently ignited, and it has gradually gained attention. What do you think?<br>
*Joel*:<br>
I would like to emphasize that we cannot protect your privacy when you give it away willingly. When you use social networks and other applications like facial recognition apps. What we CAN do, though, is protect you from surveillance.<br>

*Co-founder of BlockArk*:<br>
Due to the time limit, we have to finish the AMA! and thx for Joel's sharing ! We hope that Stegos will get better and better.

This article has been published in below mainframe media:

Jinse：https://www.jinse.com/blockchain/470279.html<br>
Chinfor：https://www.chainfor.com/news/show/89244.html<br>
Bitkan：https://bitkan.com/zh/ksite/articles/68621<br>
Huoxing：https://news.huoxing24.com/20190918193628983582.html<br>
Chainnode：https://www.chainnode.com/post/377188<br>
