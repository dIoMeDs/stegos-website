---
author: "Vladimir Lebedev"
date: 2019-05-07
linktitle: 测试网6发布 20190507
title: "测试网6发布"
description: "这是Stegos区块链发布的第六个版本的测试网。"
metaTitle: "测试网6发布"
metaDescription: "这是Stegos区块链发布的第六个版本的测试网。"
categories: [ "开发" ]
tags: ["stegos", "周报", "技术"]
weight: 7
draft: false
---

## 测试网6发布说明

Stegos创建了前沿的技术，其可以保护你的秘密不被窥探，因此你会感觉非常安全且可靠。

这是Stegos区块链发布的第六个版本的测试网。以下是 [测试网5][1] 以来的相关改进：

- 向PubSub协议添加了HashCash挑战，以限制拒绝服务攻击。
- 实现了简便的再抵押机制用来跟踪验证者的在线状态。
- 实现了使用24字符恢复短语来实现钱包备份。
- 实现了钱包密码保护和存储在磁盘上的私钥加密。
- 将1 STG拆分为1 000 000 microSTG。
- 限制交易和区块中的UTXO数量。

重大改进：

TestNet-6和TestNet-5并不兼容，如果你想从之前的版本进行更新，请重新设置你本地的数据库。

```
rm -rf database/
```

请看[项目计划][2]从而获得更多信息。

请加入我们的[电报群][3]来获得测试代币，并且让我们知道你的想法。

### 测试网代码部署

Linux 64-bit:

```
curl -L https://github.com/stegos/stegos/releases/download/v0.7/stegos-linux-x64 -o stegos
chmod a+x stegos
./stegos
```

macOS 64-bit:
```
curl -L https://github.com/stegos/stegos/releases/download/v0.7/stegos-macos-x64 -o stegos
chmod a+x stegos
./stegos
```


开始后，节点会打印出很多信息，其中包括部署节点的调试信息。请点击Enter键来获得 stegos> 的prompt，点击help按键可以获得相关帮助。

[1]:https://github.com/stegos/stegos/releases/tag/v0.5
[2]:https://github.com/stegos/stegos/wiki/project-plan#sprint15
[3]:https://t.me/stegos4privacy
