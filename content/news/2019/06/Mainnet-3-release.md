---
author: "Vladimir Lebedev"
date: 2019-07-02
linktitle: Mainnet Preview 3 20190702
title: "Mainnet Preview 3"
description: "This is a third Preview release of upcoming Stegos mainnet."
metaTitle: "Mainnet Preview 3"
metaDescription: "This is a third Preview release of upcoming Stegos mainnet."
categories: [ "DEVELOPMENT" ]
tags: ["stegos", "report", "technology"]
weight: 7
draft: false
---

Stegos creates cutting-edge technology that keeps your secrets safe from prying eyes so you feel empowered and secure.

This is a third Preview release of upcoming Stegos mainnet. In order to boost node synchronization and bootstrap performance we have switched to the new pairing curve, BLS12-381, reducing BLS signature verification by the factor of 40. Another major achievement was switching single curve crypto from Curve1174 to Curve25519 in order to increase Bulletproofs performance and provide a compatibility to iOS13 CryptoKit.

### New in Stegos v0.10:

- Switched to new pairing-based crypto implementation based on *BLS12-381* curve, **[Crypto]**, 40x improvement in BLS signature verification time.
- Switched to Dalek *Curve25519* implementation for single curve crypto, **[Crypto]**, 10x improvement in Bulletproof verification time, future compatibility with iOS CryptoKit.
- Implemented of Payment Certificates in CLI Wallet, **[Wallet]**, payment certificates are needed if you have to proof that you send a particular amount of tokens to somebody.
- Switched to using Base58 for wallet keys on the disk, **[Wallet]**, more user-friendly external representation of keys saved on disk.

See previous [releases](https://github.com/stegos/stegos/releases) and [the project plan](https://github.com/stegos/stegos/wiki/project-plan#sprint19) for additional information.

Upgrading from Mainnet Preview 2 is not supported - please start from a clean directory without old databases and keys.

### Installation

Starting from Mainnet Preview 2 release, two components of Stegos Platform are provided:

 - `stegosd` - Stegos Full Node Daemon.
 - `stegos` - Stegos Command-Line Client.

#### Running Node

Download and run Stegos Node.

**Linux 64-bit:**

```bash
curl -L https://github.com/stegos/stegos/releases/download/v0.10/stegosd-linux-x64 -o stegosd
chmod a+x stegosd
./stegosd
```

**macOS 64-bit:**

```bash
curl -L https://github.com/stegos/stegos/releases/download/v0.10/stegosd-macos-x64 -o stegosd
chmod a+x stegosd
./stegosd
```

On the first start, the node will create a new wallet. Please create a strong password and save it in a safe place. This password is used locally to encrypt your data on the disk. There is no password recovery mechanism.

The following files and directories will be created:

- `wallet.pkey` - Wallet Public Key (Address) in Base58 format
- `wallet.skey` - Wallet Secret Key.
- `network.pkey` - Network Public Key in HEX format
- `network.skey` - Network Secret Key.
- `data/chain/` - Blockchain Database.
- `data/wallet/` - Wallet Database.
- `api_token.txt` - API Token need to connect to Node API.

After creation of a new wallet, the node will start synchronizing with the network and print a lot of `INFO` messages with debugging information regarding synchronization status.

#### Connecting to Node

Download and run a command-line client.

**Linux 64-bit:**

```bash
curl -L https://github.com/stegos/stegos/releases/download/v0.10/stegos-linux-x64 -o stegos
chmod a+x stegos
./stegos
```

**macOS 64-bit**:

```bash
curl -L https://github.com/stegos/stegos/releases/download/v0.10/stegos-macos-x64 -o stegos
chmod a+x stegos
./stegos
```

The command-line client will try to connect to local node and print `stegos>` prompt. To get help enter `help` command at the prompt. By default, the client reads API token from `api_token.txt` file in the current directory and tries to connect to default (`127.0.0.1:3145`) Node address. Please see `stegos --help` to override these options.

### Feedback

Please join us on [Telegram Chat](https://t.me/stegos4privacy) to get test tokens and let us know your thoughts.
Subscribe to official [Telegram Channel](https://t.me/stegos4privacy_official) for the latest news.
