---
author: "Vladimir Lebedev"
date: 2019-05-30
linktitle: 测试网7发布 20190530
title: "测试网7发布"
description: "这是Stegos区块链发布的第七个版本的测试网。"
metaTitle: "测试网7发布"
metaDescription: "这是Stegos区块链发布的第七个版本的测试网。"
categories: [ "开发" ]
tags: ["stegos", "周报", "技术"]
weight: 7
draft: false
---

## 测试网7发布

Stegos创建了前沿的技术，其可以保护你的秘密不被窥探，因此你会感觉非常安全且可靠。

这是Stegos区块链发布的第七个版本的测试网。以下是 [测试网6][1] 以来的相关改进：

- [核心] 全新的StakeUTXO，以及带有BLS签名的StakeUTXOs

- [核心] 公开支付UTXO，未加密收件人的公钥和金额

- [核心] 将时间锁加入到所有UTXO类型中，让UTXO可以进行时间锁定

- [核心] 引入微观和宏观区块，为微观区块增加更多安全性

- [共识] 删减，对在相同高度发布两个不同区块的欺诈者进行惩罚

- [共识] 重新抵押，在预定的时间间隔内更改与标记令牌相关的验证器PBC密钥

- [ValueShuffle] 激活ValueShuffle，从而推动epoch变化，微调Facilitator的代码

- [网络] 修改PBC秘钥：network，支持修改节点的pbc（验证节点）秘钥

- [网络] 检查过时连接，检查有些过时连接是否重新连接

- [测试] 压力测试：部署TxGenerator，对devnets的交易生成器进行部署支持

- [安全] 对于系列展示的秘密使用AONT（全部或者全无）方法，内存中秘密数据的附加安全性

- [安全] 对于所有秘密部署WAU（使用后擦除），内存中秘密数据的附加安全性

重大改进：

TestNet-7和TestNet-6并不兼容，如果你想从之前的版本进行更新，请重新设置你本地的数据库。

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

[1]:https://stegos.com/news/2019/05/testnet-6-release/
[2]:https://github.com/stegos/stegos/wiki/project-plan#sprint15
[3]:https://t.me/stegos4privacy
