---
author: "Vladimir Lebedev"
date: 2019-10-04
linktitle: Mainnet Beta 3 20191004
title: "Stegos News: $150k bounty and more!"
description: "Weekly Stegos news, including new software updates and our huge bounty contest!"
metaTitle: "Stegos News: $150k bounty and more!"
metaDescription: "Weekly Stegos news, including new software updates and our huge bounty contest!"
categories: [ "DEVELOPMENT" ]
tags: ["stegos", "bounty", "technology"]
weight: 7
draft: false
---

## Dear Stegos Community,

Big news this week. The devs have released the next beta version of mainnet: Mainnet Beta 3. This will be the final test version of mainnet before our release. You can read the full release notes [here](https://github.com/stegos/stegos/releases/tag/v0.14).

This week also marks the launch of our bounty and hackathon, where you can complete tasks to earn a share of $150,000 of STG. The bounty will have two halves: a social media contest running on our website and powered by the Vyper competition platform, and a hackathon hosted on our very own mainnet beta chain and supported by a Telegram bounty bot. At the end of the Telegram hackathon, the tokens you earn from completing tasks and validating and staking will be converted to real STG, based on the size of your final balance!

We're just putting the finishing touches to the bot, and we'll be ready to launch in a day or two.


### What does the Mainnet Beta 3 release mean for me?

Mainnet Beta 3 brings in a lot of improvements to the Stegos app, which is now at v0.14.0.

It also completely resets the chain, so all previous test tokens will be deleted.

If this is your first time downloading the Stegos app and node, then you don't need to do anything. Just head over to the release page, choose the right download for your operating system (Windows, Mac, or Linux) and then install and sync.

If you've downloaded the app and node before, then you'll need to delete your old chain data.

Depending on your operating system, you can find it in the following locations on your hard drive:

**Windows:** `C:\Users\[user]\AppData\Roaming\stegos`

**Mac:** `$HOME/Library/Application Support/stegos`

**Linux:** `$HOME/.local/share/stegos`


Just delete these directories and then install the new version of the Stegos app by heading here. (You may need administrative privileges or to enable hidden files and folders to see these directories.)

### What's changed since Mainnet Beta 2?

Faster initial sync

The biggest difference from Mainnet Beta 2 is that we haven't pre-loaded the chain with transactions to stress test it. This means that initial syncing is MUCH quicker. Where Mainnet Beta 2 could take over a day for the first sync, Mainnet Beta 3 will sync in around 5-10 minutes on first run.

### Background syncing

What's even better than ultra-fast syncing? Syncing in the background! Now when you load the app for a second time, it uses a saved snapshot to ensure you can access your wallet in 1-2 minutes.

 **PLEASE NOTE:** Your syncing progress may still say 0% for more than a minute while the app is checking your saved data. Please be patient. It hasn't stalled. (If it stays at 0% for more than half an hour, please email support@stegos.zendesk.com.)

In future versions the sync counter will be replaced with something more informative.

## Automatic Language Selection

The Stegos desktop wallet now uses your computer's default language to automatically select a language on first start up. We currently support English and Chinese, with plans to add more languages later.

You can manually change the language later in the settings menu, if you want.

### New Address Format

We've switched address format from Base58 to Bech32. There are multiple advantages to this, including easier typing (Bech 32 is case insensitive, so you don't have to carefully switch between uppercase and lowercase) and clear prefixes we can associate with each new version of the Stegos testnet and mainnet, to prevent later confusion.

<img src="/images/Address_Format-691c33d0-571a-4220-8ddc-f91ed76824fc.png" style="object-fit:cover;width:100%"/>

If you're using the app for the first time, you don't need to worry about this. If you've used it before, note that you can still restore addresses using your saved mnemonic, but the display format will be different. (Also your testSTG balance will be reset, because the chain has been restarted.)

### Leprechaun Bot has been disabled

The Stegos Leprechaun bot has been disabled to prepare for the upcoming bounty, which will have its own bot. Thank you to everyone who used our bot. To show our gratitude, we'll be giving everyone who registered with the bot some bonus tokens in the bounty, to give you a small head start. Good luck!

### What next?

October is going to be incredibly busy. We're launching our $150k bounty in the next few days, and also preparing for our upcoming IEO and mainnet release. As always, visit our [Telegram group](https://stg.to/tgn) for more information.
