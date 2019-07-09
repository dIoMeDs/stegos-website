---
author: "Vladimir Lebedev"
date: 2019-06-10
linktitle: Mainnet Preview 1 20190610
title: "Mainnet Preview 1"
description: "This is the first preview release of the upcoming Stegos Mainnet."
metaTitle: "Mainnet Preview 1"
metaDescription: "This is the first preview release of the upcoming Stegos Mainnet."
categories: [ "DEVELOPMENT" ]
tags: ["stegos", "report", "technology"]
weight: 7
draft: false
---

## Stegos Mainnet Preview 1 Release Notes

Stegos creates cutting-edge technology that keeps your secrets safe from prying eyes so you feel empowered and secure.

This is a first preview release of upcoming Stegos mainnet. This preview version is considered mostly feature-complete. All core features have been implemented, yet some improvements and bug fixes need to be made for the final release.

### New in Stegos v0.8:

- Created an innovative blockchain compression technology to remove intermediate intra-epoch blocks after reaching the final pBFT consensus in validators group. Together with blockchain pruning technology this makes Stegos the most compact blockchain ever.
- Added Service Awards, a new incentive for validators to stay online. Each block contributes 1/3 of its reward into a special fund, which is periodically awarded to an arbitrary validator, which always stayed online since the last draw.
- Reached 10x performance boost on Bulletproof validation. A single Bulletproof verification is now just 10 ms.
- Increased performance of node synchronization and disk recovery from 200 to 6000 epochs per hour. We keep working on optimizing the underlying crypto-primitives in order to speed up the node sync more.
- Fine-tuned blockchain constants to get a trade off between finality time and node synchronization time.
- More bug fixing of HashCash protocol.
- More bug fixing of fork resolution mechanism for micro blocks.
- Introduced UTXO Timestamp Locking.
- PublicPaymentUTXOs: introduced additional tx validation rules and implemented support for public payment UTXOs usage in the wallet.

See previous [releases](https://github.com/stegos/stegos/releases) and [the project plan](https://github.com/stegos/stegos/wiki/project-plan#sprint17) for additional information.

### Installation

If you upgrading from the previous release, please reset your blockchain database first:

```
rm -rf database/
```

#### Linux 64-bit:

```bash
curl -L https://github.com/stegos/stegos/releases/download/v0.8/stegos-linux-x64 -o stegos
chmod a+x stegos
./stegos
```

#### macOS 64-bit:

```bash
curl -L https://github.com/stegos/stegos/releases/download/v0.8/stegos-macos-x64 -o stegos
chmod a+x stegos
./stegos
```

Right after the start the node will print a lot of `INFO` messages with debugging information regarding bootstrapping your node. Press `Enter` to get `stegos>` prompt. To get help enter `help` command at the prompt.

### Feedback

Please join us on [Telegram Chat](https://stg.to/tgc) to get test tokens and let us know your thoughts.
Subscribe to official [Telegram Channel](https://stg.to/tgn) for the latest news.
