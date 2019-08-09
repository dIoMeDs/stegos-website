---
author: "Vladimir Lebedev"
date: 2019-08-07
linktitle: Mainnet Preview 4 20190807
title: "Mainnet Preview 4"
description: "This is the fourth preview release of the upcoming Stegos mainnet."
metaTitle: "Mainnet Preview 4"
metaDescription: "This is the fourth preview release of the upcoming Stegos mainnet."
categories: [ "DEVELOPMENT" ]
tags: ["stegos", "report", "technology"]
weight: 7
draft: false
---
Stegos creates cutting-edge technology that keeps your secrets safe from prying eyes so you feel empowered and secure.

This is a bug fix release, containing more than 100 fixes since [Mainnet Preview 3](https://github.com/stegos/stegos/releases/tag/v0.10).

### Changes in Stegos v0.11:

- Improved overall stability and performance of Snowball mixing protocol, now Snowball works reliably even on slow 3G/4G mobile data connections.
- Tuned core blockchain constants and limits to reach the inflation target, now a new block is produced every 6-8 seconds.
- Replaced HashCash with VDFs for the network authorization protocol, making network authorization delay more predictable.
- Moved automatic re-staking to Node, to allow Node work without Wallet's cold keys.
- Reworked transaction tracking and payment history, fixing several issues found during internal QA.
- Re-arranged data directory layout and changed default paths to meet Linux and Mac guidelines.
- Added new command-line and configuration options to Node and CLI.
- Filtered out noisy notifications in the command-line client.
- Improved usability of WebSocket API.

See [Sprint 20](https://github.com/stegos/stegos/milestone/21?closed=1) and [Sprint 21](https://github.com/stegos/stegos/milestone/22?closed=1) milestones on GitHub for the full list of fixed bugs.

### Getting Started

#### Running Node

If you have Mainnet Preview 3 installation, please stop running nodes and clean data directories:

```
rm -rf ~/.local/stegos ~/.config/stegos
```

Download and run Stegos Node:

**Linux 64-bit:**

```bash
curl -L https://github.com/stegos/stegos/releases/download/v0.11/stegosd-linux-x64 -o stegosd
chmod a+x stegosd
./stegosd
```

**macOS 64-bit:**

```bash
curl -L https://github.com/stegos/stegos/releases/download/v0.11/stegosd-macos-x64 -o stegosd
chmod a+x stegosd
./stegosd
```

On the first run, Node will create a data directory in `$HOME/.local/share/stegos` on Linux or `$HOME/Library/Application Support/stegos` on Mac. This directory has the following structure:


```
    ├── accounts/  <!-- Accounts
    │   ├── 1
    │   │   ├── account.pkey <!-- Account #1 public key (address)
    │   │   ├── account.skey <!-- Account #2 secret key (address)
    │   │   └── history/     <!-- Payment History (RocksDB)
    │   └── 2
    │       ├── account.pkey <!-- Account #1 public key (address)
    │       ├── account.skey <!-- Account #2 secret key (address)
    │       └── history/     <!-- Payment History (RocksDB)
    ├── api.token            <!-- Generated API Token
    ├── chain/               <!-- Blockchain (RocksDB)
    ├── network.pkey         <!-- Ephemeral network (consensus) public key.
    ├── network.skey         <!-- Ephemeral network (consensus) secret key.
```

Node will start synchronizing with the network and print a lot of INFO messages with debugging information regarding synchronization status.

A fresh node doesn't have accounts by default. To create a new account, please connect to Node using a command-line client.

#### Connecting to Node

Download and run a command-line client.

Linux 64-bit:

```bash
curl -L https://github.com/stegos/stegos/releases/download/v0.11/stegos-linux-x64 -o stegos
chmod a+x stegos
./stegos
```

macOS 64-bit:

```bash
curl -L https://github.com/stegos/stegos/releases/download/v0.11/stegos-macos-x64 -o stegos
chmod a+x stegos
./stegos
```

The command-line client will try to connect to local node and print `stegos>` prompt. To get help enter `help` command at the prompt. By default, the client reads API token from `api_token.txt` file in the current directory and tries to connect to default (`127.0.0.1:3145`) Node address. Please see `stegos --help` to override these options.

#### Working with Accounts

Type `create account` to create a new account. You will be asked for a password. This password is used locally to encrypt your data on the disk. Please remember it.

Type `show recovery` to get 24-word recovery phrase. This recovery phrase is an encoded representation of your secret key. Please write down it and keep it in a safe place. There are no other password recovery mechanisms.

Type `recover account` to recover an account from saved 24-word recovery phrase.

Type `show accounts` to list available accounts.

Type `use ACCOUNT_ID` to switch between active accounts in CLI.

Type `show balance` to get balance.

Type `pay RECIPIENT AMOUNT` to send money.

Type `show history 15m` to see status of created transaction and payment history.

### Feedback

Please join us on [Telegram Chat](https://stg.to/tgc) to get test tokens and let us know your thoughts.
Subscribe to official [Telegram Channel](https://stg.to/tgn) for the latest news.
