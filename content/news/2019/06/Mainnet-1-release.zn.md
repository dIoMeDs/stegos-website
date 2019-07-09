---
author: "Vladimir Lebedev"
date: 2019-06-10
linktitle: 主网预览1 20190610
title: "主网预览1"
description: "这是即将推出的Stegos主网的第一个预览版本。"
metaTitle: "主网预览1"
metaDescription: "这是即将推出的Stegos主网的第一个预览版本。"
categories: [ "开发" ]
tags: ["stegos", "报告", "技术"]
weight: 7
draft: false
---

## Stegos主网预览 1 发布说明

Stegos打造前沿科技，从而可以让你的隐私安全，避免被其他人窥视，因此你会感到非常给力以及安全。

这是对于即将上线的Stegos主网的首个预览。此次预览版本尽量考虑到了所有功能。所有的核心功能已经部署，后续的最终版本还需要一些优化以及bug修复。

## Stegos v0.8中的新增内容：

- 创建创新的区块链压缩技术，从而可以把被验证节点完成pBFT共识后的中间区块移除。同时，区块修剪技术可以让Stegos成为最紧凑的区块链。

- 增加服务奖励，这是对于在线验证节点的全新激励。每个区块会贡献1/3的奖励到特定的资金池，然后这会周期性地奖励给随机的验证节点，这些节点需要从上个抽奖后一直在线。

- 通过Bulletproof验证，系统可以获得10倍的性能。单个Bulletproof验证只需要10毫秒。

- 增强节点同步和磁盘修复的性能，可以保证每小时200-6000 epoch。我们会持续优化底层加密参数，从而能够加速节点同步。

- 微调区块链参数，从而可以在确定时间和节点同步时间之间做权衡。

- 更多对于HashCash协议的bug修复。

- 更多对于小区块链分叉解决方案的bug修复。

- 引入UTXO时间戳锁定。

- PublicPaymentUTXOs：引入更多的tx验证规则，以及对钱包中公开支付UTXO使用进行支持

了解更多信息，请查看[之前发布的文章][1]以及[项目发展计划][2]。

## 安装指导

如果你想从之前的版本进行升级，请重新设置你的区块链数据库：
```
rm -rf database/
```

## Linux 64-bit:
```
curl -L https://github.com/stegos/stegos/releases/download/v0.8/stegos-linux-x64 -o stegos
chmod a+x stegos
./stegos
```

## macOS 64-bit:
```
curl -L https://github.com/stegos/stegos/releases/download/v0.8/stegos-macos-x64 -o stegos
chmod a+x stegos
./stegos
```

开启后，节点会打造很多INFO信息，其中会包含推动节点的调试信息。点击Enter键，然后会获得 stegos>的prompt。如果需要帮助，可以点击prompt上的命令按钮。

## 反馈

请加入我们的[电报社群][3]，从而获取测试代币，并且让我们知道你的想法。订阅官方[电报公告群][4]，从而获得最新的消息。

[1]:https://github.com/stegos/stegos/releases
[2]:https://github.com/stegos/stegos/wiki/project-plan#sprint17
[3]:https://stg.to/tgcch
[4]:https://stg.to/tgnch
