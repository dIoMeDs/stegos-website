---
author: "Vladimir Lebedev"
date: 2019-04-15
linktitle: 技术双周报 20190415
title: "技术双周报 3月25日–4月15日"
description: "开发团队报告了过去的sprint成果，并宣布即将发布的新版测试网。"
metaTitle: "技术双周报 3月25日–4月15日日"
metaDescription: "开发团队报告了过去的sprint结果，并宣布了下一个sprint的计划。"
categories: [ "开发" ]
tags: ["stegos", "周报", "技术"]
weight: 7
draft: false
---

在过去两周内，我们的开发团队一直在努力完成即将推出的testnet版本的主要功能。

Stegos已完成的工作
以下任务于**4月2日 - 4月15日**完成：
- [网络] 调查libp2p的数据包丢失，修复与使用Cuckoo过滤器相关的丢失数据包的错误
- [共识] 查看微块的变化，视图变化是共识协议的重要组成部分
- [共识] 查看关键块的变化，视图变化是共识协议的重要组成部分
- [共识] 确定时期长度&&阻止时间，时期长度和阻滞时间是共识协议的重要参数
- [网络] HashCash算法，节点必须解决HashCash谜题才能加入网络以防止Sybil攻击
- [网络] 单播消息必须加密通过Kademlia DHT网络传输的加密
- [区块链核心] 块验证的测试用例，功能测试工具的一部分
- [网络] RaptorQ编码器/解码器，需要创建用于传输块/其他大型消息的优化协议

Stegos进行中的工作
- [网络] 基于Kademlia DHT的路由，网络单播消息的基本网络功能
- [钱包] 电子钱包的WebSocket API。需要支持GUI
- [钱包] 支持GUI Wallet所需的Bootstrap，进度跟踪

Stegos还未开始的工作
- [网络] 基于Kademlia DHT路由的单播功能
- [钱包] 在钱包中回滚货币交易，由于分叉解决，需要这种机制
- [区块验证] 连续多个交易时，允许节点在相同的块高度上构造链式事务
