---
author: "Vladimir Lebedev"
date: 2019-07-01
linktitle: Tech Report 20190701
title: "Tech Report June, 17th - July, 1st"
description: "Development team reports past sprint results and is announcing plans for the next sprint."
metaTitle: "Tech Report June, 17th - July, 1st"
metaDescription: "Development team reports past sprint results and is announcing plans for the next sprint."
categories: [ "DEVELOPMENT" ]
tags: ["stegos", "report", "technology"]
weight: 7
draft: false
---

## Done in Sprint 19
- Switched to new pairing-based crypto implementation based on *BLS12-381* curve, **[Crypto]**, 40x improvement in BLS signature verification time
- Switched to Dalek *Curve25519* implementation for single curve crypto, **[Crypto]**, 10x improvement in Bulletproof verification time, future compatibility with iOS CryptoKit
- Implemented of Payment Certificates in CLI Wallet, **[Wallet]**, payment certificates are needed if you have to proof that you send a particular amount of tokens to somebody  
- Switched to using Base58 for wallet keys on the disk, **[Wallet]**, more user-friendly external representation of keys saved on disk
- Stress Testing: Packet Delay and Loss, **[Testing]**, part of test harness
- Stress Testing: Blockchain, Consensus, Service Awards, Slashing, ValueShuffle, **[Testing]**, stress testing the vital subsystems using transactional loads from transaction generator

## Plans for Sprint 20
- Implement Accounts API, **[Wallet]**,  to support multiple accounts per Wallet application
- Transaction status tracking in Account API and Transaction History, **[Wallet]**, to enable more user-friendly transaction status reporting
- Introducing VDFs and Kalman filter for stabilizing the block time, **[Core]**, making block time predictable in order to stabilize annual inflation
- More Stress Testing: Blockchain, Consensus, Service Awards, Slashing, ValueShuffle, **[Testing]**, stress testing the vital subsystems using transactional loads from transaction generator
- Finish GUI Wallet,  **[Wallet]**, user-friendly Wallet application based on Electron
- **RELEASE THE MAINNET!**
