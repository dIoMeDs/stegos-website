---
author: "Vladimir Lebedev"
date: 2019-11-14
linktitle: Mainnet Beta 3 20191114
title: "Mainnet Beta 5 已上线！"
description: "Mainnet Beta的最终版本已可供下载"
metaTitle: "Mainnet Beta 5 已上线！"
metaDescription: "Mainnet Beta的最终版本已可供下载"
categories: [ "开发" ]
tags: ["stegos", "报告", "技术"]
weight: 7
draft: false
---
尊敬的Stegos社区：

我们很高兴地宣布推出的Stegos主网的第五个beta版本。Beta 5主要是一个稳定版本，它修复了主要Bugs，并带来了许多速度改进。此版本与Beta 4 Stegos区块链完全兼容，软件打开后会自动更新至最新版，用户无需更新Stegos软件或执行其他任何操作。

**强烈建议升级到Beta 5，特别是对于赏金计划的参与者。**

### 自 [Mainnet Beta 4](https://github.com/stegos/stegos/releases/tag/v0.16) 以来的改进:

- 最终修复了Windows上的DNS解析器
- 修复了极端情况下共识问题
- 修复了"输入无法访问的代码"的bug
- `stegosd.log` 默认启用日志轮转
- 修复笔记本电脑休眠后​​的状态同步
- 改进了自动re-staking，现在可以在共识周期内的一个随机微区块上进行
- 修正了PubSub协议中的LRU缓存
- 用 `bit-vec`  替换了  `bitvector`
- 将Rust工具链更新到2019-10-30
- 将所有第三方依赖项集成到Cargo构建系统中
- 创建了Node和CLI到Android ARM64 / x86_64的本机端口（尚无移动应用程序）

### 节点入门指南

See [https://docs.stegos.com](https://docs.stegos.com)

### 反馈

请加入我们的[电报群](https://stg.to/tgcсh)来让我们知道您的想法。订阅我们的官方[电报公告频道](https://stg.to/tgnch)来获取项目新闻。
