---
author: "Vladimir Lebedev"
date: 2019-10-11
linktitle: Mainnet Beta 4 20191011
title: "Mainnet Beta 4上线！"
description: "重要的强制性更新和对赏金参与者的说明。"
metaTitle: "Mainnet Beta 4上线！"
metaDescription: "重要的强制性更新和对赏金参与者的说明。"
categories: [ "开发" ]
tags: ["stegos", "报告", "技术"]
weight: 7
draft: false
---
## 亲爱的Stegos社区:

我们很高兴地宣布推出Stegos主网的第四个Beta版本，该版本修复了一个主要错误并带来了许多速度上的改进。

**非常重要!!!: 此**版本涉及链的完全重启，因此，请仔细阅读下一节，否则您可能会丢失代币和黑客马拉松的进展。

## 安装新版本的步骤

### 如果您此前已经参加赏金

如果您是赏金计划的现有参与者，并且已经收到Stegos钱包的赏金代币，则**必须备份您的帐户**，否则所有的赏金代币将**永久丢失**！（如果您还不是赏金参与者，请跳至下一部分。）

您可以通过以下三种方式来备份帐户：

### 方式 1:

*仅当您的钱包当前正在**运行**时，此方式才有效。如果您已关闭应用程序，则将无法使用该选项。请使用方式2或3。*

转到在赏金中注册的Stegos帐户，单击设置按钮，然后单击“备份”。现在，记下该帐户的24字恢复（种子）短语，并将其保存在安全的地方。

存储恢复短语后，请关闭钱包并通过删除计算机上的以下目录来清理钱包的工作目录：

    Windows: C:\Users\[user]\AppData\Roaming\stegos
    Mac: $HOME/Library/Application Support/stegos
    Linux: $HOME/.local/share/stegos

完成上述步骤之后，[下载并安装新版本的钱包](https://github.com/stegos/stegos-wallet/releases/tag/v0.16)或节点，安装文件在页面下方的 **Assets** 里。

接下来，使用您刚记下的恢复短语恢复您的帐户。

您将立即在赏金机器人注册的帐户中获得赏金代币。但是，此前发送代币操作的历史记录将被永久删除。

### 方式 2

**此方式仅建议对自己技术有信心的用户使用**，因为它要求您下载并使用先前版本的CLI钱包界面。

启动您现有的钱包应用程序（即使它不会同步）并保持打开状态。等待几分钟，然后通过先前版本的命令行界面访问您的钱包。如果还没有命令行界面，可以在这里获取：

- Windows: [https://github.com/stegos/stegos/releases/download/v0.15/stegos-win-x64.zip](https://github.com/stegos/stegos/releases/download/v0.15/stegos-win-x64.zip)
- Mac: [https://github.com/stegos/stegos/releases/download/v0.15/stegos-macos-x64](https://github.com/stegos/stegos/releases/download/v0.15/stegos-macos-x64)
- Linux: [https://github.com/stegos/stegos/releases/download/v0.15/stegos-linux-x64](https://github.com/stegos/stegos/releases/download/v0.15/stegos-linux-x64)

启动对应操作系统的 `stegos` 二进制文件，然后在提示符输入 `show recovery` 命令：

    account#1> show recovery
    ---
    - type: get_recovery
    ...

    ---
    - account_id: "1"
      type: recovery
      recovery: loop digital canal about seed champion couch rain eight twice split spoon alert total primary radio wool minute increase arctic aim dentist length head
      last_public_address_id: 0
    ...

您可能还需要在使用 `show recovery` 之前发出 `unseal` 命令。密码将与您的GUI钱包的密码相同。

记下显示出的 `recovery:` 字段中的恢复短语，并将其放在安全的地方。

现在从 `stegos` CLI退出，关闭钱包应用程序，并通过在计算机上删除以下目录来清理钱包的工作目录：

    Windows: C:\Users\[user]\AppData\Roaming\stegos
    Mac: $HOME/Library/Application Support/stegos
    Linux: $HOME/.local/share/stegos

下一步, [下载并安装新版本的钱包](https://github.com/stegos/stegos-wallet/releases/tag/v0.16)或节点，安装文件在页面下方的 **Assets** 里。

接下来，使用您刚记下的恢复短语恢复您的帐户。

您将立即在赏金机器人注册的帐户中获得赏金代币。但是，此前发送代币操作的历史记录将被永久删除。

### 方式 **3**

此选项最耗时，但是易于应用并且可以保证成功。如果您对方式2不确定，请使用此选项。

在启动新版本之前，您无需备份恢复短语，而是在此选项中备份您的 `accounts` 子目录并清除stegos工作文件夹中的其他几个子目录：

*第 1 步：*将以下目录备份（复制）到安全的地方：

    Windows: C:\\Users\\[user]\\AppData\\Roaming\\stegos\\accounts\\
    Mac: $HOME/Library/Application Support/stegos/accounts/
    Linux: $HOME/.local/share/stegos/accounts/

*第 2 步：*删除以下目录的区块链文件

    Windows: C:\\Users\\[user]\\AppData\\Roaming\\stegos\\chain\\
    Mac: $HOME/Library/Application Support/stegos/chain/
    Linux: $HOME/.local/share/stegos/chain/

*第 3 步：* 删除已删除的帐户文件夹

    Windows: C:\\Users\\[user]\\AppData\\Roaming\\stegos\\accounts\\.trash\\
    Mac: $HOME/Library/Application Support/stegos/accounts/.trash/
    Linux: $HOME/.local/share/stegos/accounts/.trash/

*第 4 步:* 删除每个帐户的操作历史记录

    Windows: C:\\Users\\[user]\\AppData\\Roaming\\stegos\\accounts\\[account_num]\\history\\
    Mac: $HOME/Library/Application Support/stegos/accounts/[account_num]/history/
    Linux: $HOME/.local/share/stegos/accounts/[account_num]/history/

在完成上述所有删除操作后, 你应该只剩下两个文件, `account.pkey` 和 `account.skey` , 作为stegos工作文件夹中的每个帐户的子目录。

然后，[下载并安装新版本的钱包](https://github.com/stegos/stegos-wallet/releases/tag/v0.16)或节点，安装文件在页面下方的 **Assets** 里。使用您刚记下的恢复短语恢复您的帐户。您将立即在赏金机器人注册的帐户中获得赏金代币。但是，此前发送代币操作的历史记录将被永久删除。

### 如果您此前还没有参加赏金活动

如果您尚未在我们的赏金机器人中注册帐户，但是您先前已经安装了我们的节点或钱包，则在启动新版本之前，仍然必须完全删除以下stegos工作目录：

    Windows: C:\Users\[user]\AppData\Roaming\stegos
    Mac: $HOME/Library/Application Support/stegos
    Linux: $HOME/.local/share/stegos

[下载并安装新版本的钱包](https://github.com/stegos/stegos-wallet/releases/tag/v0.16)或节点，安装文件在页面下方的 **Assets** 里。

### 如果您是第一次安装我们的钱包或节点

如果您以前从未在此计算机上安装过我们的软件，则可以直接[下载并安装新版本的钱包](https://github.com/stegos/stegos-wallet/releases/tag/v0.16)或节点，安装文件在页面下方的 **Assets** 里。而无需任何准备步骤。

### 自[Mainnet Beta 3](https://github.com/stegos/stegos/releases/tag/v0.14)以来的改进:

- **快速同步协议.** 此版本引入了新的、更快的同步协议。我们决定从更复杂但速度较慢的基于Kademlia-DHT的单播协议，切换为更简单直接的一个对等点之间的直接同步协议，的切换为更简单的直接同步协议，基于我们的点对点gossip网络，这应该**快至少十倍**。
- **固定的24字恢复短语.** 现在，使用24字恢复短语恢复钱包后，钱包将完全恢复。（此问题仅影响钱包的本地UTXO数据库。实际余额已安全地存储在区块链上，没有受到影响。）
- **固定DNS解析器**. Stegos节点和钱包将使用操作系统的默认DNS解析器主机，而不是我们软件的所有以前版本中使用的1.1.1.1（Cloudflare）。之前的解析方式给我们在中国和其他国家（地区）的用户造成了钱包与网络同步的问题，这些用户对non-ISP DNS解析器的访问被屏蔽。
- **修复了名为 "TooBigActivitymap" 的错误**. 这个错误使我们之前的测试网停顿了下来。如果在同一段时间选出的验证者超过64个，则节点会崩溃。此问题是由第三方Rust库中处理位向量的严重错误引起的。我们将在上游报告此错误，并暂时从我们的用法法移除了该Rust库。
- **修复了 "entered unreachable code" 的错误** 节点由于对SIGKILL的声明而崩溃。
- **修复了各种各样的 CLI 错误.** 与JSON解析和bech32地址相关的错误已在Stegos CLI客户端中修复。

### 节点入门指南

查看 [https://docs.stegos.com](https://docs.stegos.com)

### 反馈

请加入我们的[电报群](https://stg.to/tgcсh)来让我们知道您的想法。订阅我们的官方[电报公告频道](https://stg.to/tgnch)来获取项目新闻。
