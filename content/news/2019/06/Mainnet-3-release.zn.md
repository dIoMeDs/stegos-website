---
author: "Vladimir Lebedev"
date: 2019-07-02
linktitle: 主网预览 3 20190702
title: "主网预览 3"
description: "这是即将推出的Stegos主网的第三个预览。"
metaTitle: "主网预览 3"
metaDescription: "这是即将推出的Stegos主网的第三个预览。"
categories: [ "开发" ]
tags: ["stegos", "周报", "技术"]
weight: 7
draft: false
---

Stegos打造前沿科技，从而可以让你的隐私安全，避免被其他人窥视，因此你会感到非常给力以及安全

这是即将推出的Stegos主网的第三个预览。为了提高节点同步和自举性能，我们已经切换到新的配对曲线BLS12-381，将BLS签名验证时间减少了40倍。另一个主要成就是将单曲线加密从Curve1174切换到Curve25519以提高防弹性能并提供与iOS13 CryptoKit的兼容性。

### Stegos v0.10中的新增内容：

- [加密] 基于BLS12-381曲线切换到新的基于配对的加密实现，BLS签名验证速度提升了40倍。
- [加密] 切换到Dalek Curve25519实现单曲线加密，防弹验证时间提高10倍，未来与iOS CryptoKit兼容。
- [钱包] 在CLI钱包中实施支付证书，如果您必须证明您向某人发送了特定数量的代币，则需要支付证书。
- [钱包] 切换到使用Base58用于磁盘上的钱包密钥，保存在磁盘上的密钥更加用户友好的外部表示。

了解更多信息，请查看[之前发布的文章][1]以及[项目发展计划][2]。
不支持从主网预览2升级 - 请从没有旧数据库和密钥的纯净目录开始。

###安装指导
安装从此版本开始，提供了Stegos平台的两个组件：
Stegosd - Stegos全节点守护进程。
Stegos - Stegos命令行客户端。

#### 运行节点

下载并运行Stegos Node。

**Linux 64-bit:**
```bash
curl -L https://github.com/stegos/stegos/releases/download/v0.9/stegosd-linux-x64 -o stegosd
chmod a+x stegosd
./stegosd
```

**macOS 64-bit:**
```
curl -L https://github.com/stegos/stegos/releases/download/v0.8/stegos-macos-x64 -o stegos
chmod a+x stegos
./stegos
```

在第一次启动时，节点将创建一个新钱包。请创建一个强密码并将其保存在安全的地方。此密码在本地用于加密磁盘上的数据。这里没有密码恢复机制。

将创建以下文件和目录：

- `wallet.pkey` - Base58格式的电子钱包公钥（地址）
- `wallet.ske` - 钱包密钥。
- `network.pkey` - HEX格式的网络公钥。
- `network.skey` - 网络密钥。
- `data / chain/` - 区块链数据库。
- `data/wallet/` - 钱包数据库。
- `api_token.txt` - API令牌需要连接到Node API。

创建新钱包后，节点将开始与网络同步，并打印大量INFO消息以及有关同步状态的调试信息。

#### 连接到节点

下载并运行命令行客户端。

**Linux 64-bit:**

```bash
curl -L https://github.com/stegos/stegos/releases/download/v0.9/stegosd-linux-x64 -o stegosd
chmod a+x stegosd
./stegosd
```

**macOS 64-bit:**

```
curl -L https://github.com/stegos/stegos/releases/download/v0.8/stegos-macos-x64 -o stegos
chmod a+x stegos
./stegos
```

### 反馈

请加入我们的[电报社群][3]，从而获取测试代币，并且让我们知道你的想法。订阅官方[电报公告群][4]，从而获得最新的消息。

[1]:https://github.com/stegos/stegos/releases
[2]:https://github.com/stegos/stegos/wiki/project-plan#sprint19
[3]:https://stg.to/tgcch
[4]:https://stg.to/tgnch
