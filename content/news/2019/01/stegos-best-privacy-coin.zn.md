---
author: "Joel Reymont"
title: "Stegos：比ZCash更无信任，比Monero更具可扩展性，比MimbleWimble更加用户友好"
description: "我们生活在一个前所未有的时代，国家监督和打击交易自由，表达自由甚至思想自由。但隐私是一项普遍的人权，我们必须为保护隐私权而斗争。有各种各样的工具可以确保您的隐私，例如加密的电子邮件和消息传递应用程序，但这些工具留下了非常明显的线索，关于您是谁以及您正在与谁交谈。"
date: 2019-02-08T00:50:05+06:00
weight: 15
metaTitle: ""
metaDescription: ""
linktitle: Why Stegos Chinese
categories: [ "OVERVIEW" ]
tags: ["stegos", "design", "competition", "chinese"]
draft: false
---

我们生活在一个前所未有的时代，国家监督和打击交易自由，表达自由甚至思想自由。但隐私是一项普遍的人权，我们必须为保护隐私权而斗争。有各种各样的工具可以确保您的隐私，例如加密的电子邮件和消息传递应用程序，但这些工具留下了非常明显的线索，关于您是谁以及您正在与谁交谈。

Stegos Privacy Blockchain是保护您的数据、交易和通信的最佳方式。与传统的电子邮件和在线消息服务不同，它是完全分散式的、安全加密的以及在公开场合没有留下可见的线索。想要窥视到你的信息发送给谁和信息来源是谁是不可能的，或者甚至无法窥视到你是如何连接到Stegos区块链的。除了收件人之外，没有人可以看到您发送的内容，并且没有任何内容可以将信息或通信关联到您的真实身份。

## 现有隐私区块链实施的问题
已经有几个隐私区块链，包括[Verge](https://vergecurrency.com)，[Dash](https://www.dash.org)，[ZCash](https://z.cash)，[Monero](https://ww.getmonero.org)，[Grin](https://grin-tech.org)和[Beam](https://www.beam.mw)，它们都提供不同程度的隐私和机密性。不幸的是，所有这些区块链也有缺点。例如，[Verge提供的隐私很少](https://bitcoinmagazine.com/articles/battle-privacycoins-verge-offers-little-privacy-and-nothing-unique/)，没有什么独特之处，[Dash并不是真正的私密](https://bitcoinmagazine.com/articles/battle-privacycoins-why-dash-not-really-private/)，[ZCash要求你信任它](https://bitcoinmagazine.com/articles/battle-privacycoins-zcash-groundbreaking-if-you-trust-it/)，[Monero很难扩展](https://bitcoinmagazine.com/articles/battle-privacycoins-why-monero-hard-beat-and-hard-scale/)。[基于MimbleWimble技术](https://bitcoinmagazine.com/articles/battle-privacycoins-what-we-know-about-grin-and-beams-mimblewimble/)的Grin和Beam要求发送方和接收方都在线完成交易，这对于现代全球通信和业务需求是不切实际的。此外，Grin / Beam网络上的任何节点都可以监听并跟踪正在交换的硬币，因此它们的硬币不可替代并且很容易被标记为非法资产。最后但并非最不重要的是，上述区块链都没有提供构建隐私应用程序的平台，大大降低了它们的实用性和可访问性。

## 由Stegos实施的隐私技术
使用隐私技术，如[基于配对的密码学（PBC）](https://www.math.uwaterloo.ca/~ajmeneze/publications/pairings.pdf)，[BLS签名](https://medium.com/cryptoadvance/bls-signatures-better-than-schnorr-5a7fe30ea716)，Schnorr签名，[机密交易（CT）](https://www.mycryptopedia.com/what-are-confidential-transactions/)，隐形地址，[Bulletproofs](https://crypto.stanford.edu/bulletproofs/)，[ValueShuffle](https://www.researchgate.net/publication/321146472_ValueShuffle_Mixing_Confidential_Transactions_for_Comprehensive_Transaction_Privacy_in_Bitcoin)，以及通过[OmniLedger分片](https://infoscience.epfl.ch/record/255586?ln=en)加上可扩展性，Stegos修复了现有隐私硬币的缺点，并提供完整和全面的隐私，并且没有可用性的缺点。

我们使用BlockCrunch，Snowball和SafeData改进区块链现状，这些是内部开发的技术，以及可信应用程序容器，可以轻松方便地部署在Stegos平台上构建的新隐私应用程序。

## 匿名，可替代性和不可追踪性
匿名，可替代性和不可追踪性是隐私硬币的基本要求。例如，比特币不是匿名的，因为钱包地址是公开的。比特币也并非无法追踪，因为使用区块浏览器和专门的区块链分析工具可以很容易地跟踪交易历史。

可替代性是指一个单位的商品或货币可以自由交换另一个单位的能力。例如，美元是可替代的，因为任何美元账单都可以换成另一个美元账单而不会损失价值。比特币不可替代的原因与其不是匿名的相同 - 所有比特币支付都可以自由跟踪，如果硬币被用于非法活动，则可以将其标记为非法资产。加密交换和企业可能拒绝接受这些受污染的硬币，与其他硬币相比，它们的价值更低。不再有价值损失的交换将变得不可能，这些硬币就是所谓不可替代的。

可替代性很重要，人们最近收到的任何硬币，其中有可能会有受污染的硬币，而他们都可能会混入自己的资金，即使你不知道他们之前被非法使用。。如果被污染的硬币被当局制裁，他们甚至可能会失去自身资金的存取权利。机密交易通过加密每笔交易的输入和输出来改善可替代性，使得将受污染的币与无污染的硬币区分开来更加困难。但他们并没有完全解决问题。

与Monero和ZCash一样，Stegos使用一次性付款地址。这使得无法识别交易的接收者，因为每个交易都指向一个新的唯一（隐形）地址。

我们通过隐藏每笔交易中的输入和输出金额来实施机密交易，并用他们的[Pedersen承诺](https://crypto.stackexchange.com/questions/64437/what-is-a-pedersen-commitment)代替它们。只有硬币的发件人和收件人知道所使用的实际值。我们通过证明所有输入的总和大于或等于所有输出的总和来确保交易。（无法判断隐形量是正还是负，所以也要采用每个隐形量值的Bulletproof，这证明它在一定的数值范围内。）

我们不会在我们的块中存储事务，而是将它们简化为输入和输出，MimbleWimble风格。这使得跟踪区块链上的交易几乎不可能。虽然植入我们区块链的恶意节点理论上可以收集和存储交易历史记录，以便以后分析它并可能污染硬币或识别发送者和接收者，但这种可能性极小且不切实际。这也是其他隐私技术（如MimbleWimble）常见的问题。

Snowball，我们用于混合机密交易的协议，建立在[ValueShuffle](https://www.researchgate.net/publication/321146472_ValueShuffle_Mixing_Confidential_Transactions_for_Comprehensive_Transaction_Privacy_in_Bitcoin)的基础上，以完全切断每个交易的输入和输出之间的关系，以及发送者和接收者，提供完全的不可追踪性和可替代性。

Snowball形成了希望混合其交易的发件人池，然后创建一个超级交易，使用[DiceMix](https://eprint.iacr.org/2016/824)混合它。然后附上集体签名并发布交易。所有人都可以在Snowball超级交易中看到所有输入都被消耗，并且每个输出都与一个或多个输入相关联。无法确定哪个输出对应于哪个输入。

## 轻量级区块链
许多区块链谈论每秒达到一百万次交易（tps），但没有人谈论他们将如何维护一个快速增长的区块链。比特币只有7 tps，预计区块链将在今年年底前增长到超过170Gb。非现金交易估计为每天14亿，预计将以二次方式增长，目前的交易量仅为16k tps。

使用250字节的平均比特币交易，每天将增加[350千兆字节](https://hackernoon.com/if-we-lived-in-a-bitcoin-future-how-big-would-the-blockchain-have-to-be-bd07b282416f?gi=ce385ce46683)，或每年产生127兆兆字节。这些数据是完全不可持续的，只能在几台非常集中的超级计算机上处理。

Stegos在其共识协议和块签名中使用[BLS](https://en.m.wikipedia.org/wiki/Boneh–Lynn–Shacham)而不是Schnorr签名。这使我们能够同时最小化网络通信，提高处理速度，并通过将块中的所有签名组合成单个签名来实现小区块。

我们还通过BlockCrunch技术直接解决了区块链不断增长的问题，BlockCrunch技术是我们内部研发的产物。我们不是在每个块中存储事务，而是将它们分解为输入和输出的Merkle树。当他们收到每个块并在将其添加到链的末尾之前，Stegos验证器将加密安全修剪应用于每个输出所花费的输入。然后Stegos区块链不再像比特币一样是所有交易的账本，而是更像是未使用硬币的数据库。这使得链条更小，并且没有交易历史记录，因此无法破坏Stegos硬币的隐私和可替代性。

## 对无用的智能合约说不
在Stegos我们坚信智能合约是无用的，并且在可预见的未来将继续无用，尽管ERC20代币和CryptoKitties仍然存在。然而，区块链是实现去中心化和无信任数据交换的强大机制，我们利用SafeData技术和可信应用容器（TAC）来利用这一功能，这两种产品都是内部研究的产物。
借助SafeData和我们的软件开发工具包（SDK），开发人员可以轻松构建可以完全隐私和保密的交换数据的移动应用程序。可信应用程序容器（TAC）可以轻松部署隐私应用程序，并为这些应用程序提供方便的编程接口（API），以访问存储在区块链上的数据，以及收集应用程序使用的订阅付款。
受微信及其小程序的启发，我们将可信应用容器（TAC）设计为单个移动应用程序，其中集成了可以运行多个隐私小程序的集成钱包。Stegos隐私小程序可以使用XML，CSS和JavaScript开发，这些技术是所有开发人员都熟悉的。

## 将数据保留在区块链上
在区块链上存储数据，有许多应用程序可以从中受益，但由于数据需要经常修改，因此不能这样做。交易应用程序或去中心化交易所（DEX）每次收到新的报价或交易时都需要复制整个订单。
微支付，例如支付流式短视频流，是一个吸引人的用例的另一个例子，这在当前的区块链方法中是完全不切实际的。
即使只需要最新的数据副本，经常修改的数据也会消耗大量的区块链存储空间。比特币和其他区块链已经开始开发[Layer 2技术，如闪电网络和状态通道](https://www.coindesk.com/layer-2-blockchain-tech-even-bigger-deal-think)，以避免将频繁修改的数据存储在区块链上。但Stegos并不需要这样的解决方案。

我们使用与常规支付交易相同的Pedersen承诺和Bulletproofs来保护数据交易。这让我们也可以修剪用过的数据，就像我们修剪已花费硬币一样，从而保持Stegos区块链小而灵活。

## 权益证明共识机制
权益证明（PoS）是一种共识算法，其中下一个区块的创建者通过多重组合的随机选择算法结合赌注资金的财富和币龄来选择。PoS区块链比基于工作量证明（PoW）算法的货币更节能。

可扩展的抗偏差分布式随机性是Stegos的关键组成部分。我们使用它来挑选共识组并选出每个共识轮次的领导者等等。Stegos随机性基于[可验证的随机函数（VRF）](https://tools.ietf.org/id/draft-goldbe-vrf-00.html)和对[RandHerd](https://eprint.iacr.org/2016/1067.pdf)的改进，RandHerd是一种分布式协议，可使潜在的大型服务器集合形成分布式公共随机信标，从而主动生成一系列常规的公共随机输出。

我们的随机性协议从区块头的BLS签名生成分布式公共随机信标。VRF用于排除每个共识轮次的领导者发起“Stake grinding”攻击的可能性。

Stegos共识协议基于[拜占庭容错算法（pBFT）](https://blockonomi.com/practical-byzantine-fault-tolerance/)，但增加了强一致性，这使得所有验证器能够就块的有效性达成一致，而不会浪费计算周期来解决分叉和不一致性。一旦交易出现在区块链中，就可以认为它已经确认。

我们还采用[Collective Signing（CoSi）](https://arxiv.org/pdf/1503.08768.pdf)，这是一种可扩展的证人协调协议，确保每个权威声明在任何一个客户端接受之前由各种各样的验证组进行验证并公开记录。CoSi以现有的加密多重签名方法为基础，通过有效通信的签名聚合扩展它们以支持数千名见证人。

CoSi的默认实现使用Schnorr签名，出于性能原因，我们将其替换为BLS签名。CoSi的原始设计使用Schnorr签名和基于树的通信。出于安全性和性能原因，我们将其替换为BLS签名和基于gossip的通信。

## 结论
由于没有执行重型PoW计算，任何人都可以通过智能手机上的Stegos节点在口袋中运行赚钱，并帮助验证Stegos交易。

您可以在我们的Github Wiki上找到有关该项目的更多信息，包括我们的白皮书，技术论文，源代码和演示视频。加入我们的Telegram讨论这篇文章。
