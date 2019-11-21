---
author: "Vladimir Lebedev"
date: 2019-11-21
linktitle:  Mainnet Release Notes 20191121
title: "Mainnet Release Notes"
description: "Release notes and download links for Stegos mainnet version 1.0"
metaTitle: "Mainnet Release Notes"
metaDescription: "Release notes and download links for Stegos mainnet version 1.0"
categories: [ "DEVELOPMENT" ]
tags: ["stegos", "report", "technology"]
weight: 7
draft: false
---


# Dear Stegos Community,

We're delighted to announce the release of the Stegos mainnet.

Please [download v1.0 of the Stegos desktop app](https://github.com/stegos/stegos-wallet/releases/tag/v1.0) by selecting the file from the Assets menu at the bottom of the page which matches your operating system.

## New Users

If this is your first time using the Stegos app, you don't need to do anything else. [Just download and install the app](https://github.com/stegos/stegos-wallet/releases/tag/v1.0) and you're ready to go!

## Existing Users and Bounty / Hackathon Participants

Existing users and participants in the bounty and hackathon will need to take a few more steps.

**These steps are VERY IMPORTANT, and failing to follow them could mean we cannot send you your rewards.**

### If You Have Backed Up Your Wallet (or Didn't Participate in the Hackathon)

If you have already backed up your testnet wallet using the 24-word mnemonic, or if you didn't participate in the hackathon and so don't need your testnet account anymore, then you just need to delete the old testnet data.

Mainnet is a brand new instance of the Stegos chain, and the testnet will also be restarted. Therefore, you must delete your testnet chain data before restarting the app. The contents of the following directories must be deleted fully:

Windows: `C:\Users\[user]\AppData\Roaming\stegos`

Mac: `$HOME/Library/Application Support/stegos`

Linux: `$HOME/.local/share/stegos`

After that, [you can install and run v1.0 of the Stegos app](https://github.com/stegos/stegos-wallet/releases/tag/v1.0).

### If You DID NOT Back Up Your Wallet

If you have not backed up your wallet but still need to receive rewards from the hackathon, you will need to back up your account in a different way.

You have three options to back up your account:

### **Option 1**

*THIS OPTION WILL WORK ONLY IF YOUR WALLET IS CURRENTLY **RUNNING**. IF YOU HAVE CLOSED YOUR APP, YOU WON'T BE ABLE TO USE THIS OPTION. PLEASE USE OPTION 2 OR 3.*

Go to the Stegos account registered in the bounty, click the settings button and then click "Backup". Now, write down the 24-word recovery (seed) phrase for the account and keep it in a safe place.

Once you've stored your recovery phrase, close the wallet and clean the wallet's working directory by removing the following directory on your computer:

    Windows: C:\Users\[user]\AppData\Roaming\stegos
    Mac: $HOME/Library/Application Support/stegos
    Linux: $HOME/.local/share/stegos

After that you should download and install the new release of the wallet or node using [one of the **Assets** links at the bottom of the release page](https://github.com/stegos/stegos-wallet/releases/tag/v1.0).

Keep your 24-word phrase safe so you can use it later to restore your account.

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
      rain eight twice split spoon alert total primary
      radio wool minute increase arctic aim dentist
      length head
      last_public_address_id: 0
    ...

You may also need to issue the `unseal` command before using `show recovery`. The password will be the same as for your GUI wallet.

Write down the recovery phrase from the `recovery:` field in command's response and keep it in a safe place.

Now exit from `stegos` CLI, close the wallet application and clean the wallet's working directory by removing the following directory on your computer:

    Windows: C:\Users\[user]\AppData\Roaming\stegos
    Mac: $HOME/Library/Application Support/stegos
    Linux: $HOME/.local/share/stegos

After that you should [download and install the new release of the wallet or node](https://www.notion.so/stegos/Mainnet-Launch-Announcement-ccc2f75d4c2f4f32babcfe451c9ab57e) using one of the **Assets** links at the bottom of the page.

Keep your 24-word phrase safe so you can use it later to restore your account.

### **Option 3**

This option is the most time consuming, but it is easy to apply and success is guaranteed. If you aren't confident about Option 2, please use this one.

Instead of saving your recovery phrase, in this option you'll back up your `accounts` subdirectory and clean up several other subdirectories in the stegos working folder before launching the new release:

*Step 1*: Back up (copy) the following directory to a safe place:

    Windows: C:\\Users\\[user]\\AppData\\Roaming\\stegos\\accounts\\
    Mac: $HOME/Library/Application Support/stegos/accounts/
    Linux: $HOME/.local/share/stegos/accounts/

*Step 2:* Remove blockchain files

    Windows: C:\\Users\\[user]\\AppData\\Roaming\\stegos\\chain\\
    Mac: $HOME/Library/Application Support/stegos/chain/
    Linux: $HOME/.local/share/stegos/chain/

*Step 3:* Remove deleted accounts folder

    Windows: C:\\Users\\[user]\\AppData\\Roaming\\stegos\\accounts\\.trash\\
    Mac: $HOME/Library/Application Support/stegos/accounts/.trash/
    Linux: $HOME/.local/share/stegos/accounts/.trash/

*Step 4:* Remove history of operations for each account

    Windows: C:\\Users\\[user]\\AppData\\Roaming\\stegos\\accounts\\[account_num]\\history\\
    Mac: $HOME/Library/Application Support/stegos/accounts/[account_num]/history/
    Linux: $HOME/.local/share/stegos/accounts/[account_num]/history/

After removing all of the above, you should have only two files, `account.pkey` and `account.skey` , for each account subdirectory in the stegos working folder.

After that you must download and install a new release of the wallet or node using one of the **Assets** links at the [bottom of the release page](https://github.com/stegos/stegos-wallet/releases/tag/v1.0).

### Getting Started

See [https://docs.stegos.com](https://docs.stegos.com)

Download from [https://github.com/stegos/stegos-wallet/releases/tag/v1.0](https://github.com/stegos/stegos-wallet/releases/tag/v1.0)

### Feedback

Please join us on [Telegram Chat](https://stg.to/tgc) to let us know your thoughts. Subscribe to the official [Telegram Channel](https://stg.to/tgn) for the latest news.
