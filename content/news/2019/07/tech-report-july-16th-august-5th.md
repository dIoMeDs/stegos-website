---
author: "Vladimir Lebedev"
date: 2019-08-15
linktitle: Technical Progress Report 20190805
title: "Technical Progress Report July, 16th - August, 5th"
description: "Development team reports past sprint results and is announcing plans for the next sprint."
metaTitle: "Technical Progress Report July, 16th - August, 5th"
metaDescription: "Development team reports past sprint results and is announcing plans for the next sprint."
categories: [ "DEVELOPMENT" ]
tags: ["stegos", "report", "technology"]
weight: 7
draft: false
---

## Development Report July 16th – August 5th
Hello, and welcome to the Stegos Development report for our 21st Sprint, covering the period from July 16th through August 5th.

We’ve mostly been concentrating on the Stegos GUI wallet. The Linux and iOS versions of the wallet are finished and being tested internally. Public testing will be announced shortly.

- Snowball improvements

We’ve been working to improve Stegos’ state-of-the-art mixing protocol, known as Snowball.
Snowball is what keeps Stegos transactions and messages secure and anonymous, so it’s
important for it to be reliable. But it also needs to be efficient: our latest improvements mean Snowball now works reliably even on slow 3G/4G mobile data connections.

- Stability improvements

We’ve completed the upgrade from HashCash to verifiable delay functions (VDFs). This makes the network authorization delay more predictable and improves network reliability and stability. We’ve also tuned the core blockchain constants and limits to reach our inflation target. A new block is now produced every 6-8 seconds.

- Automatic restaking

Nodes now have automatic restaking, which allows the node to continuing staking without requiring the wallet’s cold keys.

- Transaction tracking and payment history

Stegos is fully private, but it’s still important for users to be able to check their transaction history and verify payments. We’ve updated how transaction tracking and payment history work, fixing several issues found during internal QA.

- Usability boost

We’ve made various upgrades to improve usability, including new command-line and configuration options to the node and CLI, reduction of noisy notifications in the command-line client, and improved usability of WebSocket API. We’ve re-arranged the data directory layout and changed default paths to meet Linux and Mac guidelines, so the code will be easier to follow.

- Further stress testing

We’ve continued our stress testing of vital subsystems using an automated transaction generator.

- Upcoming Tasks

Sprint 22 will focus on final stress testing before mainnet launch. We’ll be publishing the first version of the GUI wallet in preparation for public testing.

As always, if you want to help with testing, contact us in the Telegram group to request some test tokens.

### Feedback

Please join us on [Telegram Chat](https://stg.to/tgc) to get test tokens and let us know your thoughts.
Subscribe to official [Telegram Channel](https://stg.to/tgn) for the latest news.
