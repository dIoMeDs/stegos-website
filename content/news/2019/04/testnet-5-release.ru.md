---
author: "Vladimir Lebedev"
date: 2019-04-24
linktitle: Testnet 5 Release 20190424
title: "Testnet 5 Release"
description: "This is the fifth Testnet release of the Stegos blockchain."
metaTitle: ""
metaDescription: ""
categories: [ "DEVELOPMENT" ]
tags: ["stegos", "report", "technology"]
weight: 8
draft: false
---

Stegos Testnet 5 Release Notes

Stegos creates cutting-edge technology that keeps your secrets safe from prying eyes so you feel empowered and secure.

This is the fifth testnet release of the Stegos blockchain. Changes since [Testnet 4](https://github.com/stegos
/stegos/releases/tag/v0.4):

 - Added a fork resolution mechanism to consensus and improved handling of network partitions.
 - Implemented basic cheating detection of malicious validators in consensus (without punishment for now).
 - Significantly reduced the time of full sync with the network.
 - Switched to real peer-to-peer unicast messaging with NAT traversal support.
 - Extended WebSocket API to support notifications about blockchain status.
 - Fixed bugs and improved stability of consensus and network subsystems.


Breaking changes:

TestNet-5 release is not fully compatible with TestNet-4 release. Please reset your local database if you upgrading from the previous release:

rm -rf database/

Check the project plan for additional information.


Please join us on Telegram to get test tokens and let us know your thoughts.


Testnet node installation

Linux 64-bit:

curl -L https://github.com/stegos/stegos/releases/download/v0.5/stegos-linux-x64 -o stegos
chmod a+x stegos
./stegos

macOS 64-bit:

curl -L https://github.com/stegos/stegos/releases/download/v0.5/stegos-macos-x64 -o stegos
chmod a+x stegos
./stegos

Right after the start the node will print a lot of INFO messages with debugging information regarding bootstrapping your node. Press Enter to get stegos> prompt. To get help enter help command at the prompt.
