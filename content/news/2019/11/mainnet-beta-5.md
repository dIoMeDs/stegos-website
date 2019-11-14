---
author: "Vladimir Lebedev"
date: 2019-11-14
linktitle: Mainnet Beta 3 20191114
title: "Mainnet Beta 5 Launched!"
description: "The final version of mainnet beta is available for download"
metaTitle: "Mainnet Beta 5 Launched!"
metaDescription: "The final version of mainnet beta is available for download"
categories: [ "DEVELOPMENT" ]
tags: ["stegos", "report", "technology"]
weight: 7
draft: false
---
# Dear Stegos Community,

This is the fifth beta release of the upcoming Stegos mainnet. Beta 5 is primarily a stabilization release, which fixes a major bug and brings many speed improvements. This release is fully compatible with Beta 4 Stegos blockchain and no other actions besides updating Stegos software is required from users.

**Upgrading to Beta 5 is highly recommended, especially for participants of the bounty program.**

### Changes since [Mainnet Beta 4](https://github.com/stegos/stegos/releases/tag/v0.16):

- Finally fixed DNS resolver on Windows
- Fixed multiple corner cases in consensus
- Fixed "entered unreachable code" bug
- Enabled log rotation for `stegosd.log` by default
- Fixed synchronization status after laptop hibernation
- Improved automatic re-staking, which now happens at a random microblock during an epoch
- Fixed LRU cache in PubSub protocol
- Replaced buggy `bitvector` crate with `bit-vec`
- Updated Rust Toolchain to 2019-10-30
- Integrated all third-party dependencies into Cargo build system
- Created a native port of Node and CLI to Android ARM64/x86_64 (no mobile app yet)

### Getting Started

See [https://docs.stegos.com](https://docs.stegos.com)

### Feedback
​
Please join us on [Telegram Chat](https://stg.to/tgc) to let us know your thoughts. Subscribe to the official [Telegram Channel](https://stg.to/tgn) for the latest news.
