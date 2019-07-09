---
author: "Vladimir Lebedev"
date: 2019-06-19
linktitle: 主网预览2 20190619
title: "主网预览2"
description: "这是即将推出的Stegos主网的第二个预览版本。."
metaTitle: "主网预览2"
metaDescription: "这是即将推出的Stegos主网的第二个预览版本。"
categories: [ "开发" ]
tags: ["stegos", "周报", "技术"]
weight: 7
draft: false
---


# 主网预览2

Stegos创造了尖端技术，可以保护您的秘密免受窥探，让您感觉更有能力和安全。

这是即将推出的Stegos主网的第二个预览版本。我们在此版本中声明了功能冻结 - 在即将发布的主要网络发布之前，没有计划任何新功能。当然，在最终的主网发布之前，将进行一些小的改进和错误修复。

## Stegos v0.9中的新功能：

- 节点已分为两个二进制文件：完整节点守护程序（stegosd）和命令行客户端（stegos）。

- 已将持久的事务历史记录添加到钱包中（请参阅show history命令）。

- 付款证书已在钱包中引入 - 一种（可选）方式，供发件人向任意第三方证明他已付款。

- 切换到Base58以便外部表示钱包公钥（地址），以提供更加用户友好的地址编码。

- 引入了为交易设定任意费用金额的能力，以增加交易被包括在最近的区块中的机会。

- 引入了用于授权WebSockets API使用的API令牌，即使对于localhost也是如此。
提供了用户更改钱包密码的能力。

- 加强节点的docker镜像的安全性。

有关其他信息，请参阅[先前版本][1]和[项目计划][2]。不支持从Mainnet Preview 1升级 - 请从没有旧数据库和密钥的干净目录开始。

## 安装指导

安装从此版本开始，提供了Stegos平台的两个组件：
Stegosd - Stegos全节点守护进程。
Stegos - Stegos命令行客户端。

## 运行节点

下载并运行Stegos Node。

### Linux 64-bit:
```
curl -L https://github.com/stegos/stegos/releases/download/v0.9/stegosd-linux-x64 -o stegosd
chmod a+x stegosd
./stegosd
```

### macOS 64-bit:
```
curl -L https://github.com/stegos/stegos/releases/download/v0.8/stegos-macos-x64 -o stegos
chmod a+x stegos
./stegos
```

在第一次启动时，节点将创建一个新钱包。请创建一个强密码并将其保存在安全的地方。此密码在本地用于加密磁盘上的数据。这里没有密码恢复机制。

将创建以下文件和目录：

- wallet.pkey - Base58格式的电子钱包公钥（地址）
- wallet.ske - 钱包密钥。
- network.pkey - HEX格式的网络公钥。
- network.skey - 网络密钥。
- data / chain / - 区块链数据库。
- data/wallet/ - 钱包数据库。
- api_token.txt - API令牌需要连接到Node API。

创建新钱包后，节点将开始与网络同步，并打印大量INFO消息以及有关同步状态的调试信息。

## 连接到节点

下载并运行命令行客户端。

### Linux 64-bit:

```
curl -L https://github.com/stegos/stegos/releases/download/v0.9/stegosd-linux-x64 -o stegosd
chmod a+x stegosd
./stegosd
```

### macOS 64-bit:

```
curl -L https://github.com/stegos/stegos/releases/download/v0.8/stegos-macos-x64 -o stegos
chmod a+x stegos
./stegos
```

## 反馈

请加入我们的[电报社群][3]，从而获取测试代币，并且让我们知道你的想法。订阅官方[电报公告群][4]，从而获得最新的消息。

[1]:https://github.com/stegos/stegos/releases
[2]:https://github.com/stegos/stegos/wiki/project-plan#sprint18
[3]:https://stg.to/tgcch
[4]:https://stg.to/tgnch
