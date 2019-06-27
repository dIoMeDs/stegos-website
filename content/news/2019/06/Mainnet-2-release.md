---
author: "Vladimir Lebedev"
date: 2019-06-19
linktitle: Mainnet Preview 2 20190619
title: "Mainnet Preview 2"
description: "This is a second Preview release of upcoming Stegos mainnet."
metaTitle: "Mainnet Preview 2"
metaDescription: "This is a second Preview release of upcoming Stegos mainnet."
categories: [ "DEVELOPMENT" ]
tags: ["stegos", "report", "technology"]
weight: 7
draft: false
---

Stegos creates cutting-edge technology that keeps your secrets safe from prying eyes so you feel empowered and secure.

This is a second Preview release of upcoming Stegos mainnet. We declare the feature freeze with this release - no new features are planned until the upcoming mainnet release. Of course, some minor improvements and bug fixes will be made until the final mainnet release.

### New in Stegos v0.9:

- Node has been split into two binaries: a full node daemon (`stegosd`) and a command-line client (`stegos`).
- Persistent history of transactions has been added to wallet (see `show history` command).
- Payment Certificates have been introduced in wallet - an (optional) way for a sender to prove to arbitrary third-parties that he made a particular payment.
- Switched to Base58 for external representation of wallet public keys (addresses) to provide more user-friendly encoding of addresses.
- Introduced the ability to set arbitrary fee amount for transactions, to increase chances of transaction to be included in the nearest block.
- Introduced API tokens for authorizing WebSockets API usage, even for localhost.
- Provided the ability for the user to change wallet password.
- Strengthen the security of the node's docker image.

See previous [releases](https://github.com/stegos/stegos/releases) and [the project plan](https://github.com/stegos/stegos/wiki/project-plan#sprint18) for additional information.

Upgrading from Mainnet Preview 1 is not supported - please start from a clean directory without old databases and keys.

### Installation

Starting from this release, two components of Stegos Platform are provided:

 - `stegosd` - Stegos Full Node Daemon.
 - `stegos` - Stegos Command-Line Client.

#### Running Node

Download and run Stegos Node.

**Linux 64-bit:**

```bash
curl -L https://github.com/stegos/stegos/releases/download/v0.9/stegosd-linux-x64 -o stegosd
chmod a+x stegosd
./stegosd
```

**macOS 64-bit:**

```bash
curl -L https://github.com/stegos/stegos/releases/download/v0.9/stegosd-macos-x64 -o stegosd
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
curl -L https://github.com/stegos/stegos/releases/download/v0.9/stegos-linux-x64 -o stegos
chmod a+x stegos
./stegos
```

**macOS 64-bit**:

```bash
curl -L https://github.com/stegos/stegos/releases/download/v0.9/stegos-macos-x64 -o stegos
chmod a+x stegos
./stegos
```

The command-line client will try to connect to local node and print `stegos>` prompt. To get help enter `help` command at the prompt. By default, the client reads API token from `api_token.txt` file in the current directory and tries to connect to default (`127.0.0.1:3145`) Node address. Please see `stegos --help` to override these options.

### Feedback

Please join us on [Telegram Chat](https://t.me/stegos4privacy) to get test tokens and let us know your thoughts.
Subscribe to official [Telegram Channel](https://t.me/stegos4privacy_official) for the latest news.
