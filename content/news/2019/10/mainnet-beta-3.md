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
​
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



















### Dear Stegos Community,

Thank you for all your testing feedback. We’re pleased to announce the release of main net beta 2.
In addition to lots of improvements and UI tweaks, the most exciting feature of main net beta 2 is Windows support. So you can now use the app on Mac, Linux or Windows.

Please visit [releases](https://github.com/stegos/stegos-wallet/releases) to download the app.

As always, please send comments, bug reports and any other feedback to <support@stegos.zendesk.com>. No comment is too small!<br>

Thanks!

The Stegos Team

​
#### Getting Started
To download the Stegos app

​*1.* Visit [releases](https://github.com/stegos/stegos-wallet/releases)

*2.* Scroll down and click “Assets”

<img src="/images/Desktop_app_1_2.png" style="object-fit:cover;width:100%"/>


*3.* Mac users should click [StegosWallet-0.13.0.dmg](https://github.com/stegos/stegos-wallet/releases/download/v0.13/StegosWallet-0.13.0.dmg) to download the app.

On Linux, use [stegos-wallet_0.13.0_amd64.deb](https://github.com/stegos/stegos-wallet/releases/download/v0.13/stegos-wallet_0.13.0_amd64.deb) for Debian/Ubuntu distributions and [stegos-wallet-0.13.0.x86_64.rpm](https://github.com/stegos/stegos-wallet/releases/download/v0.13/stegos-wallet-0.13.0.x86_64.rpm) for Fedora/CentOS/RHEL distributions.

If you aren't sure which Linux distribution you're using, click [stegos-wallet-0.13.0-x86_64.AppImage](https://github.com/stegos/stegos-wallet/releases/download/v0.13/stegos-wallet-0.13.0-x86_64.AppImage).

Windows users should click [StegosWallet.Setup.0.13.0.exe](https://github.com/stegos/stegos-wallet/releases/download/v0.13/StegosWallet.Setup.0.13.0.exe).

​<img src="/images/Desktop_app_2_2.png" style="object-fit:cover;width:100%"/>

​

#### Changing the app language

The Stegos app now has Chinese language support! To access it, click the settings icon in the top right of the main account screen.

<img src="/images/Desktop_app_3.png" alt="Assets" style="object-fit:cover;width:100%"/>

<br>
Now, click the dropdown menu and change the setting from “English” to “Chinese”.

<img src="/images/Desktop_app_4.png" alt="Assets" style="object-fit:cover;width:100%"/>

#### Getting mainnet beta tokens
To get test STG to use the mainnet beta, please use our faucet bot in our [Telegram Channel](https://stg.to/tgn).

First, find your wallet address. Click “Receive” in the menu on the left (you can also select a specific account and click the orange “Receive Tokens” button).

<img src="/images/Desktop_app_5.png" alt="Assets" style="object-fit:cover;width:100%"/>

<br>
Choose an account to receive tokens to from the drop down menu and then click Next (if you haven’t created any new accounts, your default account will show here).

<img src="/images/Desktop_app_6.png" alt="Assets" style="object-fit:cover;width:100%"/>

<br>
You will now see the public key for your account. Click “Copy address to clipboard”.

<img src="/images/Desktop_app_7.png" alt="Assets" style="object-fit:cover;width:100%"/>

<br>
The STG faucet bot is called [StegosLeprechaunBot](https://t.me/StegosLeprechaunBot).

Send it a direct message in Telegram in the following format: /get \<your STG wallet address>


<img src="/images/Desktop_app_8.png" alt="Assets" style="object-fit:cover;width:100%"/>

The bot will now send you 1000 STG. The Stegos blockchain is fast, so it should arrive in your Stegos account in just a few seconds!
​
#### Feedback
The app is in its earliest public testing phase, so we need your feedback! If you have any comments, feedback, or spot any bugs, please send them to <support@stegos.zendesk.com>.

Updates to the desktop app will be released regularly based on this feedback.
