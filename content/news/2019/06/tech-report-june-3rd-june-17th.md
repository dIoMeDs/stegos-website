---
author: "Vladimir Lebedev"
date: 2019-06-18
linktitle: Tech Report 20190618
title: "Tech Report June, 3rd - June, 17th"
description: "Development team reports past sprint results and is announcing plans for the next sprint."
metaTitle: "Tech Report June, 3rd - June, 17th"
metaDescription: "Development team reports past sprint results and is announcing plans for the next sprint."
categories: [ "DEVELOPMENT" ]
tags: ["stegos", "report", "technology"]
weight: 7
draft: false
---

## Done in Sprint 18
- Base functionality of GUI Wallet desktop application, `Wallet`, implementing bootstrapping visualisation, accounts and payments
- Persist Payment History and Payment Certificates in Wallet, `Wallet`, required to support showing the payment history in wallet
- Improve security of Docker image, `Security`, strengthen the security of the node's docker image
- Introduce variable fees in transactions, `Core Blockchain, Wallet`, introduce the ability to set arbitrary fee amount for transaction in order to increase chances of transaction to be included in the nearest block
- Use Base58 for external representation of wallet public keys (addresses), `Core Blockchain`, provide more user-friendly encoding of addresses
- Implement WebSocket API Authorization, `Security`, introduce API tokens for authorizing WebSockets API usage, even on localhost
- Support changing the wallet password, `Security`, provide the ability for the user to change wallet password
- Stress Testing: Large Number of Nodes, `Testing`, part of test harness
- Split log output and CLI, `Node CLI`, separating CLI application from node binary
- Introduce variable fees in transactions, `Core Blockchain, Wallet`, introduce the ability to set arbitrary fee amount for transaction in order to increase chances of transaction to be included in the nearest block
- Speed up BLS signatures, `Core Blockchain`, BLS signature verification time has been improved from 200ms down to 5ms per signature

## Plans for Sprint 19
- Stress Testing: Packet Delay and Loss, `Testing`, part of test harness
- Stress Testing: Blockchain, Consensus, Service Awards, Slashing, ValueShuffle, `Testing`, stress testing the vital subsystems using transactional loads from transaction generator
