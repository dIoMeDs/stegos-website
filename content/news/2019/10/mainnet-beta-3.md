---
author: "Vladimir Lebedev"
date: 2019-10-01
linktitle: Mainnet Beta 3 20191001
title: "Mainnet Beta 3 Released!"
description: "We've just released the final beta version of the Stegos mainnet for testing."
metaTitle: "Mainnet Beta 3 Released!"
metaDescription: "We've just released the final beta version of the Stegos mainnet for testing."
categories: [ "DEVELOPMENT" ]
tags: ["stegos", "report", "technology"]
weight: 7
draft: false
---
# Mainnet Beta 3 and App v0.14.0 Released!
​
Dear Stegos Community,
​
We're please to announce our final beta release for the upcoming Stegos mainnet, as well as the next version of our desktop app (v0.14.0). The label "beta" means that we have no known critical issues and showstoppers. This is a complete restart of the chain, so all balances will be wiped. Users will have to delete their old chain data before restarting the app. The contents of the following directories must be deleted fully:

Windows: `C:\Users\[user]\AppData\Roaming\stegos`

Mac: `$HOME/Library/Application Support/stegos`

Linux: `$HOME/.local/share/stegos`
​
## Bounty Program
​
Mainnet beta 3 will be used as part of the upcoming Stegos bounty program, which starts next week. To support this, the following changes have being made:
​
- The staking threshold has been temporarily reduced from 50,000 to 1,000 tokens.
- The Stegos Leprechaun bot has been disabled, and will soon be replaced with the Stegos Bounty bot. The bounty bot will provide tasks, small amounts of coins, and announcements about the bounty and the validator service award.
​
### Changes since [Mainnet Beta 2](https://github.com/stegos/stegos/releases/tag/v0.13):
​
- **Fast Recovery Mode**. The Stegos node can now instantly recover from disk by using a saved snapshot, instead of replaying the entire blockchain before launch. This will eliminate the synchronization delay in the wallet app, which users found confusing. This mode is turned on by default.
- **Bech32 instead of Base58 for addresses.** This release introduces Bech32-compatible encoding to all public keys in API, CLI, and applications. The primary advantage of Bech32 over Base58 is that Bech32 addresses are case-insensitive and easy to type. Bech32 also supports multiple network prefixes, which protects users from using testnet addresses on mainnet and vice versa.
- **Public Addresses**. This release brings support for Bitcoin-like public addresses. Public addresses are like regular public keys, but can only receive public (uncloaked) payments. Private (cloaked) payments to public addresses are not supported. Each account can have an unlimited number of public addresses. This feature can be used to implement Bitcoin-like behaviour. Type "create public address" in CLI to create a new public address. Public addresses are also supported in Stegos WebSocket API (you can read our API documentation [here](https://docs.stegos.com/developers/websocket_api)).
- **Block Explorer API.** Mainnet Beta 3 brings a new set of API methods for the blockchain introspection. The new API can retrieve raw blocks from the blockchain in JSON format, as well as subscribe for incoming changes notifications. See `show status`, `show block`, `subscribe chain` CLI commands, and the corresponding API calls for the additional details.
- **Network Optimizations.** This release brings some useful optimization to the network stack. For example, a new version of PubSub protocol now automatically de-duplicates identical messages received in a certain time window. We also work on a new fast synchronization protocol which will be available in the next release.
- **ARM64 port.** Stegos node has been successfully ported to 64-bit ARM processors. The latest version of the node has been tested on the 64-bit version of Manjaro Linux for Raspberry Pi 4, but other 64-bit Linux distributions should work as well.
​
### Getting Started
​
See [https://docs.stegos.com](https://docs.stegos.com)
​
### Feedback
​
Please join us on [Telegram Chat](https://stg.to/tgc) to let us know your thoughts. Subscribe to the official [Telegram Channel](https://stg.to/tgn) for the latest news.
