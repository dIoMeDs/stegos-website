---
author: "Vladimir Lebedev"
date: 2019-10-11
linktitle: Mainnet Beta 4 20191011
title: "Mainnet Beta 4 released!"
description: "Important compulsory update and instructions for bounty participants."
metaTitle: "Mainnet Beta 4 released!"
metaDescription: "Important compulsory update and instructions for bounty participants."
categories: [ "DEVELOPMENT" ]
tags: ["stegos", "report", "technology"]
weight: 7
draft: false
---
## Dear Stegos Community:

We're pleased to announce the fourth beta release of the upcoming Stegos mainnet, which fixes a major bug and brings many speed improvements.

**VERY IMPORTANT!!!:** This release involves a complete restart of the chain, SO PLEASE READ THE NEXT SECTION EXTREMELY CAREFULLY OR YOU MAY LOSE YOUR TOKENS AND HACKATHON PROGRESS.

## Steps to install the new release

### If you are already participating in the bounty

If you are an existing participant of the bounty program and have already received bounty tokens to your Stegos wallet, you **MUST BACK UP YOUR ACCOUNT**, otherwise all of your bounty tokens will be **permanently lost**! (If you are not already a bounty participant, skip to the next section.)

You have three options to back up your account:

### **Option 1**

*THIS OPTION WILL WORK ONLY IF YOUR WALLET IS CURRENTLY **RUNNING**. IF YOU HAVE CLOSED YOUR APP, YOU WON'T BE ABLE TO USE THIS OPTION. PLEASE USE OPTION 2 OR 3.*

Go to the Stegos account registered in the bounty, click the settings button and then click "Backup". Now, write down the 24-word recovery (seed) phrase for the account and keep it in a safe place.

Once you've stored your recovery phrase, close the wallet and clean the wallet's working directory by removing the following directory on your computer:

    Windows: C:\Users\[user]\AppData\Roaming\stegos
    Mac: $HOME/Library/Application Support/stegos
    Linux: $HOME/.local/share/stegos

After that you should [download and install the new release of the wallet](https://github.com/stegos/stegos-wallet/releases/tag/v0.16) or node using one of the **Assets** link below.

Next, restore your account using the recovery phrase you just wrote down.

You will get your bounty tokens in the account registered with the bounty bot immediately. However, the outgoing (send) operations history will be permanently deleted.

### **Option 2**

**This option is recommended only for technically confident users,** as it requires you to download and use the CLI wallet interface from the previous release.

Launch your existing wallet application (even though it will not sync) and keep it open. Wait a couple of minutes, then access your wallet via the previous version of the command-line interface. If you don't already have it, you can get it here:

- [Windows](https://github.com/stegos/stegos/releases/download/v0.15/stegos-win-x64.zip)
- [Mac](https://github.com/stegos/stegos/releases/download/v0.15/stegos-macos-x64)
- [Linux](https://github.com/stegos/stegos/releases/download/v0.15/stegos-linux-x64)

Launch the corresponding `stegos` binary for your operating system and input the `show recovery` command at the prompt:

    account#1> show recovery
    ---
    - type: get_recovery
    ...

    ---
    - account_id: "1"
      type: recovery
      recovery: loop digital canal about seed champion couch
      rain eight twice split spoon alert total primary radio
      wool minute increase arctic aim dentist length head
      last_public_address_id: 0
    ...

You may also need to issue the `unseal` command before using `show recovery`. The password will be the same as for your GUI wallet.

Write down the recovery phrase from the `recovery:` field in command's response and keep it in a safe place.

Now exit from `stegos` CLI, close the wallet application and clean the wallet's working directory by removing the following directory on your computer:

    Windows: C:\Users\[user]\AppData\Roaming\stegos
    Mac: $HOME/Library/Application Support/stegos
    Linux: $HOME/.local/share/stegos

Next, [download and install a new release](https://github.com/stegos/stegos-wallet/releases/tag/v0.16) of the wallet or node using one of the links in **Assets** below and restore your account using the recovery phrase you've just wrote down.

You will get your bounty tokens in the account registered with the bounty bot immediately. The outgoing (send) operations history will be lost permanently.

### **Option 3**

This option is the most time consuming, but it is easy to apply and success is guaranteed. If you aren't confident about Option 2, please use this one.

Instead of saving your recovery phrase, in this option you'll back up your `accounts` subdirectory and clean up several other subdirectories in the stegos working folder before launching the new release:

*Step 1*: Back up (copy) the following directory to a safe place:

- Windows: C:\\Users\\[user]\\AppData\\Roaming\\stegos\\accounts\\
- Mac: $HOME/Library/Application Support/stegos/accounts/
- Linux: $HOME/.local/share/stegos/accounts/

*Step 2:* Remove blockchain files

- Windows: C:\\Users\\[user]\\AppData\\Roaming\\stegos\\chain\\
- Mac: $HOME/Library/Application Support/stegos/chain/
- Linux: $HOME/.local/share/stegos/chain/

*Step 3:* Remove deleted accounts folder

- Windows: C:\\Users\\[user]\\AppData\\Roaming\\stegos\\accounts\\.trash\\
- Mac: $HOME/Library/Application Support/stegos/accounts/.trash/
- Linux: $HOME/.local/share/stegos/accounts/.trash/

*Step 4:* Remove history of operations for each account

- Windows: C:\\Users\\[user]\\AppData\\Roaming\\stegos\\accounts\\[account_num]\\history\\
- Mac: $HOME/Library/Application Support/stegos/accounts/[account_num]/history/
- Linux: $HOME/.local/share/stegos/accounts/[account_num]/history/


After removing all of the above, you should have only two files, `account.pkey` and `account.skey` , for each account subdirectory in the stegos working folder.

After that you must [download and install a new release of the wallet](https://github.com/stegos/stegos-wallet/releases/tag/v0.16) or node using one of the **Assets** links below. You will get your bounty tokens immediately to the account registered with the bounty bot. The outgoing (send) operations history will be lost permanently.

### If you are not a participant in the bounty

If you haven't registered an account with our bounty bot, but you have previously installed our node or wallet, you still have to remove the stegos working directory completely prior to launching the new release:

    Windows: C:\Users\[user]\AppData\Roaming\stegos
    Mac: $HOME/Library/Application Support/stegos
    Linux: $HOME/.local/share/stegos

After that you can download and install a new release of the wallet or node using one of the **Assets** links below.

### If you're installing our wallet or node for the first time

If you never installed our software before on this computer, you can simply download and install a new release of the wallet or node using one of the **Assets** links below without any preparatory steps.

### Changes since [Mainnet Beta 3](https://github.com/stegos/stegos/releases/tag/v0.14):

- **Fast Synchronization Protocol**. This release introduces a new, much faster synchronization protocol. We decided to switch from a more sophisticated but slow Kademlia-DHT based unicast protocol to a much simpler direct sync protocol between peers in our gossip network. This should be **at least ten times faster**.
- **Fixed 24-word recovery.** Wallets now recover completely when the 24-word recovery method was used. (This problem only affected the wallet's local UTXO database. The actual balance was securely stored on the blockchain and wasn't affected.)
- **Fixed DNS resolver**. The Stegos node and wallet will use your operating system's default DNS resolver hosts instead of 1.1.1.1 (Cloudflare), which was used in all previous versions of our software. This created problems synchronizing the wallet with the network for our users in China and other countries that block access to non-ISP DNS resolvers.
- **Fixed "TooBigActivitymap" bug**. This bug brought our previous testnet to a halt. Nodes crashed if there were more than 64 validators elected in the epoch. This problem was caused by a serious bug in a third-party Rust library dealing with bit vectors. We are going to report this bug upstream, and have temporarily excluded that crate from our usage.
- **Fixed "entered unreachable code" bug.** Node crashed with an assertion on SIGKILL.
- **Fixed miscellaneous CLI bugs.** Bugs related to JSON parsing and bech32 addresses were fixed in the Stegos CLI client.

### Getting Started

See [https://docs.stegos.com](https://docs.stegos.com)

### Feedback
​
Please join us on [Telegram Chat](https://stg.to/tgc) to let us know your thoughts. Subscribe to the official [Telegram Channel](https://stg.to/tgn) for the latest news.
