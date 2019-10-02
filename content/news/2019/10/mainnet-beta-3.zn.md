---
author: "Vladimir Lebedev"
date: 2019-10-01
linktitle: 预发布主网V3 20191001
title: "Mainnet Beta 3和App v0.14.0正式发布！"
description: "我们刚刚发布了Stegos主网的最终Beta版以进行公开测试。"
metaTitle: "Mainnet Beta 3和App v0.14.0正式发布！"
metaDescription: "我们刚刚发布了Stegos主网的最终Beta版以进行公开测试。"
categories: [ "开发" ]
tags: ["stegos", "报告", "技术"]
weight: 7
draft: false
---
# 亲爱的Stegos社区，

我们很高兴地在这里郑重宣布发布Stegos主网的最终测试版Mainnet Beta 3，以及桌面App的全新版本(v0.14.0)。 标签"beta"表示我们没有已知的关键问题和运行问题。本次Stegos链会进行完全重启，因此所有的节点数据和钱包余额都将被清除。用户必须在重新启动应用程序之前，删除旧的链数据。以下目录的内容必须完全删除：

Windows: `C:\Users\[user]\AppData\Roaming\stegos`

Mac: `$HOME/Library/Application Support/stegos`

Linux: `$HOME/.local/share/stegos`

您可以[点击此处](https://github.com/stegos/stegos-wallet/releases/tag/v0.14) 下载最新版的Stegos桌面应用，[点击此处](https://github.com/stegos/stegos/releases)下载运行Stegos节点所需的CLI资源文件。
## 赏金计划

Mainnet beta 3将被用作即将于本周开始的Stegos赏金计划的基础链。为此，我们部署了以下更改：

- 抵押门槛(staking)已暂时从50,000个STG减少到1,000个STG。
- 本周还标志着我们的黑客马拉松和赏金活动的启动，您可以在活动期间完成任务以赚取积分，总奖池高达150,000美元等你来瓜分。赏金活动将分为两个平台进行：一个平台在我们的网站上进行，由Vyper竞赛平台提供支持；另一个平台在我们的Mainnet Beta 3链上进行，并由Telegram赏金机器人提供支持。对于电报赏金平台，您可以通过完成各个任务，成为验证器，参与Staking挖矿等活动中获得测试网STG，这些测试网STG会在主网上线后按照一定比例兑换成真实的STG主网币！

### 自[Mainnet Beta 2](https://github.com/stegos/stegos/releases/tag/v0.13)以来的改进：

- **快速恢复模式**. Stegos节点现在可以通过使用保存的快照立即从磁盘恢复，而不必在启动之前重新同步整个区块链。这将消除钱包应用程序中的同步延迟，此前的版本用户经常感到困惑，我们听到了社区的反馈，本次更新消除了该困扰。 默认情况下启用此模式。
- **地址形式从Base58变为Bech32.** 新版本将与Bech32兼容的编码引入到API、CLI和应用程序中的所有公钥中。与Base58相比，Bech32的主要优点是Bech32地址不区分大小写，并且易于键入。Bech32还支持多个网络前缀，这可以防止用户在主网上使用testnet地址，反之亦然。
- **公开地址**. 新版本带来了对类似比特币的公共地址的支持。公用地址就像常规公钥一样，但是公用地址只能接收公用地址的（可见）付款。 不支持接收来自非公开地址的匿名（不可见）付款。每个帐户可以创建无限数量的公开地址。此功能可用于实现类似比特币的行为。在CLI中键入 "create public address" 以创建新的公开地址。Stegos WebSocket API也支持公开地址（您可以[点击此处](https://docs.stegos.com/developers/websocket_api)阅读我们的API文档）。
- **区块浏览器API.** Mainnet Beta 3为区块链自我检查带来了一组新的API方法。新的API能以JSON格式从区块链检索原始块，以及订阅传入的更改通知。请使用 `status`, `show block`, `subscribe chain` CLI命令以及相应的API调用以获取额外的详细信息。
- **网络优化.** 新版本为网络堆栈带来了一系列有用的优化。例如，新版本的PubSub协议现在会自动对在特定时间窗口内收到的相同消息进行重复数据删除。我们还致力于部署新的快速同步协议，该协议将在下一版本中提供。
- **ARM64端口.** Stegos节点已成功移植到64位ARM处理器。该节点的最新版本已经在Raspberry Pi 4的Manjaro Linux的64位版本上进行了测试，但是其他的64位Linux发行版也应该可以工作。

### 入门指南

查阅 [https://docs.stegos.com](https://docs.stegos.com)

### 反馈

请加入我们的[电报群](https://stg.to/tgcсh)来让我们知道您的想法。订阅我们的官方[电报公告频道](https://stg.to/tgnch)来获取项目新闻。
