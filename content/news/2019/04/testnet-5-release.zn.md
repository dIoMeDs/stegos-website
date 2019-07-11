---
author: "Vladimir Lebedev"
date: 2019-04-24
linktitle: 测试网5发布 20190424
title: "测试网5发布"
description: "这是Stegos区块链发布的第五个版本的测试网。"
metaTitle: "测试网5发布"
metaDescription: "这是Stegos区块链发布的第五个版本的测试网。"
categories: [ "开发" ]
tags: ["stegos", "周报", "技术"]
weight: 7
draft: false
---

## 测试网5发布说明

Stegos创建了前沿的技术，其可以保护你的秘密不被窥探，因此你会感觉非常安全且可靠。

这是Stegos区块链发布的第五个版本的测试网。以下是 [测试网4][1] 以来的相关改进：

- 增加了一个分叉解决机制，以达成共识，提高网络分区处理速度。
- 实现了恶意共识验证者的基本作弊检测（现在不处罚）。
- 显著降低与网络完全同步的时间。
- 通过NAT遍历支持切换到真正的对等单播消息传递。
- 扩展的WebSocket API，支持有关区块链状态的通知。
- 修复了共识和网络子系统的错误并提高了稳定性

重大改进：

TestNet-5和TestNet-4并不兼容，如果你想从之前的版本进行更新，请重新设置你本地的数据库。

```
rm -rf database/
```

请看[项目计划][2]从而获得更多信息。

请加入我们的[电报群][3]来获得测试代币，并且让我们知道你的想法。

### 测试网代码部署

**Linux 64-bit:**

```
curl -L https://github.com/stegos/stegos/releases/download/v0.7/stegos-linux-x64 -o stegos
chmod a+x stegos
./stegos
```

**macOS 64-bit:**
```
curl -L https://github.com/stegos/stegos/releases/download/v0.7/stegos-macos-x64 -o stegos
chmod a+x stegos
./stegos
```


开始后，节点会打印出很多信息，其中包括部署节点的调试信息。请点击Enter键来获得 stegos> 的prompt，点击help按键可以获得相关帮助。

[1]:https://github.com/stegos/stegos/releases/tag/v0.4
[2]:https://github.com/stegos/stegos/wiki/project-plan#sprint15
[3]:https://t.me/stegos4privacy
