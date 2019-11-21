---
author: "Vladimir Lebedev"
date: 2019-11-21
linktitle:  Mainnet Release Notes 20191121
title: "主网发布说明"
description: "主网V1.0的发布说明和下载链接"
metaTitle: "主网发布说明"
metaDescription: "主网V1.0的发布说明和下载链接"
categories: [ "开发" ]
tags: ["stegos", "报告", "技术"]
weight: 7
draft: false
---


亲爱的Stegos社区，

我们很高兴宣布Stegos主网已发布。

请[点击此处](https://github.com/stegos/stegos-wallet/releases/tag/v1.0)，从页面底部的Assets菜单中选择与您的操作系统相匹配的文件来下载Stegos桌面应用程序的v1.0。

## 新用户

如果这是您第一次使用Stegos应用程序，则无需执行其他任何操作。只需[下载并安装该应用程序](https://github.com/stegos/stegos-wallet/releases/tag/v1.0)，即可开始使用！

## 现有用户和赏金/ 黑客松参与者

现有用户以及赏金和黑客马拉松的参与者将需要采取更多措施。

**这些步骤非常重要，如果不遵循这些步骤，可能意味着我们无法向您发送奖励。**

### 如果您已经备份了钱包（或没有参加黑客马拉松）

如果您已经使用24字助记词备份了testnet钱包，或者您没有参加黑客马拉松，因此不再需要testnet帐户，则只需删除旧的testnet区块链数据。

主网是Stegos链的全新实例，并且测试网也将重新启动。因此，您必须在重新启动应用程序之前删除testnet区块链数据。以下目录的内容必须完全删除：

Windows: `C:\Users\[user]\AppData\Roaming\stegos`

Mac: `$HOME/Library/Application Support/stegos`

Linux: `$HOME/.local/share/stegos`

完成之后, [您可以安装并运行Stegos应用程序v1.0](https://github.com/stegos/stegos-wallet/releases/tag/v1.0)。

### 如果您没有备份钱包

如果你没有备份你的钱包，但仍然需要从黑客马拉松领取奖励，您将需要采取以下不同的方式备份您的帐户。

你有三个选项来备份你的钱包：

### 选项 1:

*仅当您的钱包当前正在**运行**时，此方式才有效。如果您已关闭应用程序，则将无法使用该选项。请使用方式2或3。*

打开在赏金中注册的Stegos帐户，点击"账户设置"按钮，然后单击“备份”。现在，记下该帐户的24字恢复（种子）短语，并将其保存在安全的地方。

存储恢复短语后，请关闭钱包并通过删除计算机上的以下目录来清理钱包的工作目录：

    Windows: C:\Users\[user]\AppData\Roaming\stegos
    Mac: $HOME/Library/Application Support/stegos
    Linux: $HOME/.local/share/stegos

完成上述步骤之后，[下载并安装新版本的钱包](https://github.com/stegos/stegos-wallet/releases/tag/v1.0)或节点，安装文件在页面下方的 **Assets** 里。

接下来，使用您刚记下的恢复短语恢复您的帐户。

### 选项 2

**此方式仅建议对自己技术有信心的用户使用**，因为它要求您下载并使用先前版本的CLI钱包界面。

启动您现有的钱包应用程序（即使它不会同步）并保持打开状态。等待几分钟，然后通过先前版本的命令行界面访问您的钱包。如果还没有命令行界面，可以在这里获取：

- [Windows](https://github.com/stegos/stegos/releases/download/v0.15/stegos-win-x64.zip)
- [Mac](https://github.com/stegos/stegos/releases/download/v0.15/stegos-macos-x64)
- [Linux](https://github.com/stegos/stegos/releases/download/v0.15/stegos-linux-x64)

启动对应操作系统的 `stegos` 二进制文件，然后在提示符输入 `show recovery` 命令：

    account#1> show recovery
    ---
    - type: get_recovery
    ...

    ---
    - account_id: "1"
      type: recovery
      recovery: loop digital canal about seed champion couch
      rain eight twice split spoon alert total primary
      radio wool minute increase arctic aim dentist
      length head
      last_public_address_id: 0
    ...

您可能还需要在使用 `show recovery` 之前发出 `unseal` 命令。密码将与您的GUI钱包的密码相同。

记下显示出的 `recovery:` 字段中的恢复短语，并将其放在安全的地方。

现在从 `stegos` CLI退出，关闭钱包应用程序，并通过在计算机上删除以下目录来清理钱包的工作目录：

    Windows: C:\Users\[user]\AppData\Roaming\stegos
    Mac: $HOME/Library/Application Support/stegos
    Linux: $HOME/.local/share/stegos

下一步, [下载并安装新版本的钱包](https://github.com/stegos/stegos-wallet/releases/tag/v1.0)或节点，安装文件在页面下方的 **Assets** 里。

接下来，使用您刚记下的恢复短语恢复您的帐户。

### 选项 **3**

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

然后，[下](https://github.com/stegos/stegos-wallet/releases/tag/v0.16)[载并安装新版本的钱包](https://github.com/stegos/stegos-wallet/releases/tag/v1.0)或节点，安装文件在页面下方的 **Assets** 里。

### 节点入门指南

参阅 [https://docs.stegos.com](https://docs.stegos.com)

钱包下载链接 [https://github.com/stegos/stegos-wallet/releases/tag/v1.0](https://github.com/stegos/stegos-wallet/releases/tag/v1.0)

Windows: StegosWallet.Setup.1.0.0.exe

MacOS: StegosWallet-1.0.0.dmg

Linux (Debian-based): stegos-wallet_1.0.0_amd64.deb

Linux (Unix-based): stegos-wallet-1.0.0.x86_64.rpm

### 反馈

请加入我们的[电报群](https://stg.to/tgcсh)来让我们知道您的想法。订阅我们的官方[电报公告频道](https://stg.to/tgnch)来获取项目新闻。
