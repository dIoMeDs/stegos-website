---
author: "The Stegos Team"
date: 2019-04-17
linktitle: Mobile Blockchain 20190417
title: "Mobile Blockchain - The Holy Grail"
description: "Decentralized apps need a decentralized message bus to allow them to communicate with each other using the blockchain as an agreed source of information. We’re developing this at Stegos, and it’s important enough to warrant its own article."
metaTitle: ""
metaDescription: ""
categories: [ "OVERVIEW" ]
tags: ["stegos", "mobile", "technology", "blockchain"]
weight: 10
draft: false
---

The Holy Grail

Mobile blockchain is the crypto Holy Grail. If we're creating a global decentralized network of millions of users, we'll want it to run on the simplest devices possible. But this has often been dismissed as too difficult, so developers either treat smartphone support as a long-term goal (which they never get to), completely neuter the capabilities of their mobile nodes, or ignore them entirely.

But that’s completely the wrong approach. Mobile nodes should be the cornerstone around which public blockchain projects are developed. The logic is simple: Public blockchains need the public, and the public have smartphones. They’re comfortable with apps, and they’re happy to run and install them. If your public blockchain can’t provide that, it’s never going to get off the ground. That's why with Stegos we're making sure that mobile nodes are a viable way for everyone to participate in validating and maintaining the Stegos privacy blockchain and earn STG tokens.

Previously, I wrote about adoption and incentives as the way to thaw the crypto winter. There’s a lot more detail in that article, but the essence is we need to stop chasing some magic use case and take a sustained, two-phase approach to adoption.

Phase one is to target current crypto enthusiasts and meet their desire for tokens while shifting them to a more active role in maintaining the blockchain. Most users are already keen to make this transition, but the process is usually too difficult, requires too much ongoing effort, requires hardware they can’t afford or even access, or the rewards for participation are simply too low.

We need to minimize barriers to participation while still requiring and meaningfully rewarding that participation.

Once the core active user base is established, crypto outsiders are much more likely to take notice and join. Catering to phase two users on mobile is actually the easier technological proposition, although the number of currently viable decentralized apps shows that it’s still not a cakewalk.

Decentralized apps need a decentralized message bus to allow them to communicate with each other using the blockchain as an agreed source of information. We’re developing this at Stegos, and it’s important enough to warrant its own article.

But first things first. Without the phase one crypto enthusiasts, the mass adoption of phase two will always remain a dream, even with the right technology to support it. So let’s talk about how to give those enthusiasts what they want and what crypto needs: a way to actively participate in maintaining a blockchain and earning tokens from their phones.


Cutting Through the Consensus Debate

So what are the technical barriers to blockchain on mobile?

Maintaining a blockchain is complicated and resource-intensive, but mobile devices have extremely limited storage and processing capabilities compared to standard computers. They also have much less reliable connectivity. All of these cause problems when trying to create viable mobile nodes which play a meaningful role in maintaining a blockchain.

Much has been written about Bitcoin’s lack of scalability. Normally when you put more energy into a system, you expect to get proportionally more out of it (or maybe even better than that, thanks to economies of scale). However, because the Proof-of-Work consensus mechanism is designed to maintain a regular block interval above all else, it doesn’t matter how much electricity competing mining pools burn through or how many users join, Bitcoin still produces a 1MB block of transactions approximately every 10 minutes. Adding more mining power just makes it harder and harder to perform the calculations needed to generate the blocks.

This isn’t even a mobile issue. At this point, the hardware required to compete in the Proof-of-Work hashing race is beyond the reach of all but the wealthiest users.

So at Stegos we’re using a version of Proof-of-Stake for our validator nodes. Proof-of-Stake requires no resource-intensive calculations, so it’s perfectly viable for mobile.

Note how adopting this perspective cuts through all the debate surrounding Proof-of-Work versus Proof-of-Stake: blockchains can’t get enough users without full mobile support, Proof-of-Work is impossible on mobile, so Proof-of-Stake is the right choice. Simple.

The Throughput Race to Nowhere
The another much-debated scalability problem is transaction throughput, with Bitcoin’s plodding 7 tps (transactions per second) regularly compared to Visa’s zippy 1,700 tps (although that number is often completely misrepresented to be 15,000 or even 50,000).

Most projects misunderstand the issue here. They've seen that VISA theoretical maximum of 10,000+ tps and have rushed to top it, finding ways to provide hundreds of thousands of transactions per second, without seeing that this makes scalability worse, not better.

Even at under 10 tps, the Bitcoin blockchain is going to hit 200GB soon. Saying your project can increase tps 1,000-fold or god forbid 10,000-fold without a way to address storage is tantamount to admitting your chain is just going to be running on a handful of megaservers within a year.

Every transaction makes the blockchain permanently larger and more unwieldly. That needs to change if we stand a hope of making viable smartphone nodes: if a chain is already punishingly large for mobiles now, the probem is only going to get worse with each new block.

But does the blockchain really need to be that unwieldy?


Pruning and Privacy

It is actually possible to remove data from a blockchain without harming the integrity of the chain. This is called pruning, and in fact it’s discussed in the original Bitcoin paper.

Like Bitcoin, Stegos uses the UTXO method, which tracks the unspent coins from each transaction. So if I start with 25 STG from a block reward, and then send you 5, this creates a UTXO of 20 STG. Keeping track of all these spent and unspent coins ensures that no coins can be spent twice and no coins are created out of thin air.

This system is in contrast to the account method, used by coins like Ethereum, which works using accounts and balances, much like a traditional bank would.

The UTXO method is less intuitive (notably it makes smart contracts more complicated to implement, but that's no great loss), but it has strong advantages for both privacy and scalability. Most helpfully, once a UTXO has been fully spent, we don’t need to care about it any more. The network reached consensus, so we know that it was a legitimate transaction, and those coins can never be spent again, so we can safely remove them from the history of the chain. We keep all the block headers, because those are needed to maintain the link back to the Genesis block, but certain contents of the blocks can be discarded.

So why isn’t the Bitcoin chain pruned? Bitcoin has full transaction visibility. This means that all transaction amounts and addresses are visible at all times. Privacy, such as it is, comes from the pseudonymous nature of the address system. We won’t get into the details of why that’s a good or bad idea (short answer: bad idea), but privacy coins like Stegos deliberately obscure this information to ensure that malicious actors can’t deanonymize the chain. So at Stegos we can happily discard transaction information about spent UTXOs, because it serves literally no purpose in our privacy chain.

Why don’t other privacy coins do this? Unfortunately, a lot of privacy projects have adopted extremely clever but ultimately unscalable cryptographic approaches which have made their chains unprunable. For example, coins based on zk-SNARKS rely on an ever-growing number called an accumulator which is derived from every coin which has even been minted. Unfortunately, this can never be pruned because by design no-one knows for sure which coins have and haven’t been spent.

Stegos takes a different approach. We use a version of the pruning method from Satoshi’s original paper to aggressively prune the Stegos chain after every block. This will keep the chain small enough to make smartphone nodes viable, at least from a storage perspective.


Participation

Earlier I explained why the choice between Proof-of-Work and Proof-of-Stake is a no-brainer for mobile blockchain.

What’s less simple is how to make a version of Proof-of-Stake which isn’t disrupted by the connectivity problems associated with smartphones. Mobile nodes can’t be relied upon to always be online, which can be a problem for certain versions of Proof-of-Stake. One common solution is to limit the role played by mobile nodes, but this runs contrary to our primary goal of making smartphone nodes a viable way to participate and earn rewards.

Stegos adopts a consensus mechanism which is extremely robust in the face of connectivity issues. Nodes are elected to become group leader based on the size of their current stake. Other nodes are chosen to fulfil various roles, including managing incoming transactions, verifying the block proposed by the leader, or running the distributed randomness algorithm which powers many of Stegos’ processes. Most nodes simply go into standby mode until the next group of active validators are chosen.

These roles are all simple to perform and robust, meaning the processes can complete even if some nodes drop out. Even if the leader goes offline, the network will quickly notice and call another leadership election. Stegos will also adopt sharding, so there will be multiple leaders elected across the entire network.


The Grail in Reach

There are still going to be wrinkles to work out before we can reach the dream of a blockchain node running out of everyone's pocket. The innovations explained above make mobile nodes viable, but they still strongly favour users who are connected over wireless Internet or are able to leave their phones plugged in and charged while they run their Stegos node. But the fundamentals are there, and by building the Stegos network from the ground up with mobile nodes in mind, Stegos is much better poised for mass adoption and to resist centralization than comparable projects.

Stegos implements lots of other features to ensure that individual users feel incentivized to run a Stegos node and maintain the network. The most notable is our modification to standard Proof-of-Stake, which we call Gameified Proof-of-Stake (gPoS). gPoS introduces a Validator service award, an accumulating prize which is randomly awarded to any user who has been an active validator during the last reward cycle, regardless of whether they were chosen as group leader. This gives everyone who contributes a chance of earning tokens, not just the highest stakers. We'll be talking about this and other features aimed at fostering adoption in a future article on mobile blockchain.
