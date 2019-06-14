---
author: "Vladimir Lebedev"
date: 2019-04-24
linktitle: Tech Report 20190424
title: "Tech Report Apr, 8th - Apr, 19th"
description: "Development team reports past sprint results and is announcing an upcoming first testnet release."
metaTitle: ""
metaDescription: ""
categories: [ "DEVELOPMENT" ]
tags: ["stegos", "report", "technology"]
weight: 8
draft: false
---

During the last two weeks our development team has been working hard to finalize major features of the upcoming testnet release.

The following tasks were completed in the period **April,8th — April, 19th**:

Done

 - Kademlia DHT-based routing, Network, base networking functionality for unicast messages
 - Research xPIR, Experimental, research the possibility of using private information retrieval protocols to secure light nodes
 - Websocket Wallet API Enhancements
 - Fork Resolution, Consensus, this is an essential part of the consensus protocol
 - Rollback of Payment Transactions in Wallet, Wallet, this mechanism is needed due to fork resolution
 - Limit the Number of Outputs in a Block, Core Blockchain, required to prevent traffic jams in the network
 - Stabilize Network, Network, testing and bug fixing
 - Stabilize Consensus, Consensus, testing and bug fixing
 - Split 1 STG to 1 000 000 Units (microSTG), Core Blockchain, required to have fractional STG units


Plans for Sprint 15

 - Slashing, Consensus, punishing the cheating slot owner for publishing two different blocks on the same height
 - Re-Staking, Consensus, changing validators’ PBC keys related to staked tokens at the predetermined intervals
 - Service Awards, Core Blockchain, required to create an incentive for validators to be online
 - Key Encryption on the Disk, Wallet, implement safe storage of keys on disk
 - Finalize HashCash integration, Network, required to prevent DoS-attacks
 - Determine major blockchain constants: Maximum UTXOs per Block, Epoch Length & Block Time, Consensus, those are important parameters of the consensus protocol
 - Stress Testing: Transactional Load Generator, Testing, the part of test harness
 - Stress Testing: Multiple Regions, Network, launch nodes in multiple AWS regions to test consensus with real-life latencies
 - ValueShuffle: Bots, ValueShuffle, required to facilitate VS transactions in absence of enough VS transactions intents
 - Proof of UTXO Construction, Wallet, a feature allowing to prove that a particular transaction has taken place in the past
