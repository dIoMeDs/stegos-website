---
author: "Vladimir Lebedev"
date: 2019-04-15
link-title: Tech Report 20190415
title: “Tech Report Mar, 25th - Apr, 5th”
description: "Development team reports past sprint results and is announcing an upcoming first testnet release."
metaTitle: ""
metaDescription: ""
categories: [ "DEVELOPMENT" ]
tags: ["stegos", "report", "technology"]
weight: 10
draft: false
---

During the last two weeks our development team has been working hard to finalize major features of the upcoming testnet release.

The following tasks were completed in the period **April, 2nd — April, 15th**:

 - Investigate packet loss in libp2p, Network, fixing a bug with lost packets related to the usage of Cuckoo-filters
 - View Changes for Micro Blocks, Consensus, view change is an essential part of the consensus protocol
 - View Changes for Key Blocks, Consensus`, view change is an essential part of the consensus protocol
 - Determine Epoch Length && Block Time, Consensus, epoch length and block time are important parameters of the consensus protocol
 - HashCash Algorithm, Network, nodes have to solve HashCash puzzles in order to join the network to prevent Sybil attacks
 - Unicast Messages Encryption, Network, unicast messages traveling over Kademlia DHT network have to be encrypted
 - Test cases for block validation, Core Blockchain, part of the functional testing harness
 - RaptorQ Encoder/Decoder, Network, required to create optimized protocol for transmission of blocks/other large messages

In-progress:

 - Kademlia DHT-based routing, Network, base networking functionality for unicast messages
 - WebSocket API for Wallet. Wallet, needed to support GUI Wallet
 - Progress Tracking for Bootstrap, Wallet, needed to support GUI Wallet

Not yet started:

 - Unicast based on Kademlia DHT routing, Network
 - Rollback of Monetary Transactions in Wallet, Wallet, this mechanism is needed due to fork resolution
 - Multiple Transactions In A Row, Block Validation, allowing nodes to construct chained transactions on the same block height
