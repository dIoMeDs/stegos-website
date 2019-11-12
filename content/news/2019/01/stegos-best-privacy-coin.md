---
author: "Joel Reymont"
date: 2019-01-29
linktitle: Why Stegos
title: "Stegos: More trustless than ZCash, more scalable than Monero, more user-friendly than MimbleWimble"
metaTitle: ""
metaDescription: ""
categories: [ "OVERVIEW" ]
tags: ["stegos", "design", "competition"]
weight: 10
draft: false
---

We live in an era of unprecedented state surveillance and crackdowns on freedom of transactions, expression, and even thought. But privacy is a universal human right that we must fight to preserve. There are various tools available which promise to ensure your privacy, such as encrypted email and messaging applications, but these leave highly visible clues about who you are and who you are talking to. 

Stegos Privacy Blockchain is the best way to secure your data, transactions and communications. Unlike traditional email and online messaging services, it’s completely decentralized, cryptographically secure, and leaves no telltale clues in the open. It’s impossible to see who you send or receive information from, or even to see how you're connecting to the Stegos blockchain. No one but the recipient can see what you've sent, and there’s nothing to link the information or communications to your real-life identity.

## Issues with existing privacy blockchain implementations 
There are already several privacy blockchains, including [Verge](https://vergecurrency.com), [Dash](https://www.dash.org), [ZCash](https://z.cash), [Monero](https://ww.getmonero.org), [Grin](https://grin-tech.org) and [Beam](https://www.beam.mw), all offering different degrees of privacy and confidentiality. Unfortunately, all these blockchains also come with drawbacks. For example, [Verge offers little privacy and nothing unique](https://bitcoinmagazine.com/articles/battle-privacycoins-verge-offers-little-privacy-and-nothing-unique/), [Dash is not really private](https://bitcoinmagazine.com/articles/battle-privacycoins-why-dash-not-really-private/), [ZCash requires you to trust it](https://bitcoinmagazine.com/articles/battle-privacycoins-zcash-groundbreaking-if-you-trust-it/) and [Monero is hard to scale](https://bitcoinmagazine.com/articles/battle-privacycoins-why-monero-hard-beat-and-hard-scale/). 


Grin and Beam, [both based on MimbleWimble technology](https://bitcoinmagazine.com/articles/battle-privacycoins-what-we-know-about-grin-and-beams-mimblewimble/), require both sender and receiver to be online to complete a transaction, which is impractical for modern global communication and business needs. In addition, any node on the Grin/Beam network can listen in and trace coins being exchanged, so their coins are not fungible and can be easily tainted. 

Last but not least, none of the above blockchains provide a platform for building privacy applications, drastically reducing their utility and accessibiltiy.

## Privacy technology implemented by Stegos

Using privacy technologies like [pairing-based cryptography (PBC)](https://www.math.uwaterloo.ca/~ajmeneze/publications/pairings.pdf), [BLS signatures](https://medium.com/cryptoadvance/bls-signatures-better-than-schnorr-5a7fe30ea716), Schnorr signatures, [Confidential Transactions (CT)](https://www.mycryptopedia.com/what-are-confidential-transactions/), stealth addresses, [Bulletproofs](https://crypto.stanford.edu/bulletproofs/), [ValueShuffle](https://www.researchgate.net/publication/321146472_ValueShuffle_Mixing_Confidential_Transactions_for_Comprehensive_Transaction_Privacy_in_Bitcoin), plus scalability via [OmniLedger sharding](https://infoscience.epfl.ch/record/255586?ln=en), Stegos fixes the shortcomings of existing privacy coins and offers complete and total privacy with no usability drawbacks. 


We improve on the blockchain status quo with _BlockCrunch_, _Snowball_ and _SafeData_, technologies developed in-house, as well as the _Trusted Application Container_ for easy and convenient deployment of new privacy apps built on the Stegos platform.

## Anonymity, fungibility and untraceability
Anonymity, fungibility and untraceability are essential requirements of a privacy coin. Bitcoin is not anonymous, for example, as wallet addresses are public. Bitcoin is also not untraceable, as transaction history can be easily followed by using a block explorer, as well as specialized blockchain analysis tools. 


Fungibility is the ability for one unit of a good or currency to be freely exchanged for another unit. For example, the US dollar is fungible, because any dollar bill can be exchanged for another one without loss of value. Bitcoin is not fungible for the same reason it’s not anonymous — all Bitcoin payments can be freely traced and coins can be labeled as _tainted_ if they were ever used for illicit activity. Crypto exchanges and businesses may refuse to accept these tainted coins, making them less valuable compared to other coins. Exchange without loss of value is no longer possible and these coins are said to be non-fungible. 


Fungibility is important, as the most recent recipient of any tainted coins may be left _holding the bag_, despite no knowledge of their prior illicit use. They might even lose access to their money if the tainted coins are sanctioned by the authorities. _Confidential transactions_ improve fungibility by encrypting the input and output of each transaction, making it more difficult to differentiate tainted coins from untainted ones. But they do not completely solve the problem. 


Like Monero and ZCash, Stegos uses one-time payment addresses. These make it impossible to identify recipients of a transaction, because every transaction is directed to a new and unique (stealth) address.


We implement confidential transactions by cloaking input and output amounts in each transaction and substituting them with their [Pedersen committments](https://crypto.stackexchange.com/questions/64437/what-is-a-pedersen-commitment). Only the sender and the recipient of the coins know the actual values used. We secure the transaction by proving that the sum of all inputs is greater or equal to the sum of all outputs. (It’s impossible to tell if a cloaked amount is positive or negative so also take the Bulletproof of the value of each cloaked amount, which proves that it falls within in a certain numerical range.)


We don’t store transactions in our blocks but instead simplify them down to inputs and outputs, MimbleWimble-style. This makes it almost impossible to trace transactions on our blockchain. While a malicious node implanted in our blockchain could theoretically collect and store transaction history in order to analyze it later and potentially taint coins or identify senders and receivers, this is both highly unlikely and impractical. This is also a problem common to other privacy technologies such as MimbleWimble. 


_Snowball_, our protocol for mixing confidential transactions, builds on [ValueShuffle](https://www.researchgate.net/publication/321146472_ValueShuffle_Mixing_Confidential_Transactions_for_Comprehensive_Transaction_Privacy_in_Bitcoin) to completely sever the relationship between inputs and outputs of each transaction, as well as senders and receivers, providing complete untraceability and fungibility. 


Snowball forms pools of senders who wish to mix their transactions and then creates a super-transaction, mixing it using [DiceMix](https://eprint.iacr.org/2016/824). Then a collective signature is attached and the transaction is published. All anyone can see in a Snowball super-transaction is that all inputs are being spent and that each output is associated with one or more inputs. It is impossible to tell which output corresponds to which input.

## Keeping the blockchain small 
Lots of blockchains talk about reaching a million transactions per second (tps) but no one talks about how they are going to maintain a blockchain that's growing that fast. Bitcoin only does 7 tps and the blockchain is expected to grow past 170gb by the end of this year. Non-cash transactions are estimated at 1.4 billion per day and are expected to grow quadratically, with the current volume translating to just 16k tps. 


Using an average Bitcoin transaction of 250 bytes, this would generate [350 gigabytes every day](https://hackernoon.com/if-we-lived-in-a-bitcoin-future-how-big-would-the-blockchain-have-to-be-bd07b282416f?gi=ce385ce46683), or 127 terabytes every year. This amount of data is completely unsustainable and could only be handled on a few very centralized supercomputers.


Stegos uses [BLS](https://en.m.wikipedia.org/wiki/Boneh–Lynn–Shacham) instead of Schnorr signatures in its consensus protocol and for block signing. This allows us to simultaneously minimize network communications, improve processing speed, and keep the block size small by combining every signature in the block into a single signature.


We also directly address the problem of the ever-growing blockchain with _BlockCrunch_ technology, a product of our in-house research and development. Instead of storing transactions in each block, we decompose them into Merkle trees of inputs and outputs. As they receive each block and before adding it to the end of their chain, Stegos validators apply cryptographically secure pruning to the inputs spent by each output. Then instead of being a ledger of every transaction ever made, like Bitcoin, the Stegos blockchain then is more like a database of unspent coins. This keeps the chain much smaller, and with no transaction history to trace there's no way to compromise the privacy and fungibility of Stegos coins.

## Say no to useless smart contracts
At Stegos, we firmly believe that smart contracts are useless and will continue to be useless for the foreseeable future, ERC20 tokens and CryptoKitties notwithstanding. Blockchain is a powerful mechanism for a decentralized and trustless exchange of data, though, and we harness this power with _SafeData_ technology, as well as the _Trusted Application Container_ (TAC), both products of in-house research.


With _SafeData_ and our software development kit (SDK), developers can easily build mobile applications that exchange data with complete privacy and confidentiality. The _Trusted Application Container_ (TAC) makes it easy to deploy privacy apps and provides these apps with a convenient programming interface (API) to access data stored on the blockchain, as well as collecting subscription payments for app use. 


Inspired by WeChat and its use of mini-apps, we designed the TAC as a single mobile application with an integrated wallet that can run multiple privacy apps. Stegos privacy mini-apps can be developed using XML, CSS and JavaScript, technologies that all developers are already familiar with.

## Keeping data on the blockchain
There are many applications that would benefit from storing data on the blockchain but cannot do so since the data needs to be frequently modified. A trading application or a decentralized exchange (DEX) would need to duplicate the entire order book every time it received a new quote or trade. Micropayments, e.g. paying for streaming short bursts of video, are another example of an appealing use case which is completely impractical in current blockchain approaches.


Frequently modified data consumes large amounts of blockchain space, even though only the most recent copy of the data is needed. Bitcoin and other blockchains have begun to develop [Layer 2 technologies like Lightning Network and state channels](https://www.coindesk.com/layer-2-blockchain-tech-even-bigger-deal-think) to avoid storing frequently modified data on the blockchain. But there’s no need for such solutions with Stegos. 


We secure data transactions by using the same Pedersen commitments and Bulletproofs as regular payment transactions. This lets us also prune spent data just as we prune spent coins, thus keeping the Stegos blockchain small and nimble.

## Proof-of-stake consensus
Proof of stake (PoS) is a consensus algorithm where the creator of the next block is chosen via various combinations of random selection, as well as the wealth and age of staked funds. PoS blockchains are more energy efficient than currencies based on proof-of-work (PoW) algorithms.


Scalable bias-resistant distributed randomness is a critical component of Stegos. We use it to select validator groups and elect the leader of each consensus round, among other things. Stegos randomness is based on [Verified Random Functions (VRF)](https://tools.ietf.org/id/draft-goldbe-vrf-00.html) and an improvement on [RandHerd](https://eprint.iacr.org/2016/1067.pdf), a distributed protocol that enables a potentially large collection of servers to form a distributed public randomness beacon, which proactively generates a regular series of public random outputs. 

Our randomness protocol generates a distributed public randomness beacon from BLS signatures on block headers. VRFs are used to exclude the possibility of [stake grinding](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQs#how-does-validator-selection-work-and-what-is-stake-grinding) by the leader of each consensus round.

The Stegos consensus protocol is based on [Practical Byzantine Fault Tolerance (pBFT)](https://blockonomi.com/practical-byzantine-fault-tolerance/) but adds strong consistency, which enables all validators to agree on the validity of blocks without wasting computing cycles to resolve forks and inconsistencies. As soon as a transaction appears in the blockchain, it can be considered confirmed.

We also adopt [Collective Signing (CoSi)](https://arxiv.org/pdf/1503.08768.pdf), a scalable witness cosigning protocol ensuring that every authoritative statement is validated and publicly logged by a diverse group of witnesses before any client will accept it. CoSi builds on existing cryptographic multi-signature methods, scaling them to support thousands of witnesses via signature aggregation over efficient communications. 

The default implementation of CoSi uses Schnorr signatures, which we replace with BLS signatures for performance reasons. The original design of CoSi uses Schnorr signatures and tree-based communications. We replace this with BLS signatures and gossip-based communications for security and performance reasons.

## Conclusion
With no heavy-duty PoW calculations to perform, anyone can earn coins by running a Stegos node on the smartphone in their pocket and helping to validate Stegos transactions.


You can find more information about the project [on our Github Wiki](https://github.com/stegos/stegos/wiki), including our whitepaper, technical paper, source code and demo video. [Join us on Telegram](https://t.me/stegos4privacy) to discuss this post.
