---
author: "Владимир Лебедев"
date: 2019-07-02
linktitle: Mainnet Preview 3 20190702
title: "Основная сеть, предварительный релиз 3"
description: "Третий предварительный релиз основной сети Stegos."
metaTitle: "Основная сеть, предварительный релиз 3"
metaDescription: "Третий предварительный релиз основной сети Stegos"
categories: [ "DEVELOPMENT" ]
tags: ["stegos", "отчет", "технология"]
weight: 7
draft: false
---

Stegos создает передовые технологии, которые защищают ваши секреты от посторонних глаз, чтобы вы чувствовали себя в безопасности.

Это третий предварительный релиз предстоящего выпуска основной сети Stegos. В целях улучшения синхронизации узлов и производительности начальной загрузки мы переключились на новую криптографическую реализацию на основе BLS12-381, что позволило в 40 раз сократить время проверки подписи BLS. Другим важным достижением было переключение single curve crypto с Curve1174 на Curve25519 для увеличения производительности Bulletproofs и обеспечения совместимости с iOS CryptoKit.


### Новое в Stegos v0.10:

- Произведено переключение на новую криптографическую реализацию на основе кривых *BLS12-381*, в 40 раз сокращено время проверки подписи BLS
- Сделано переключение на Dalek *Curve25519* в реализации для single curve crypto, реализовано десятикратное улучшение времени проверки Bulletproof, обеспечена будущая совместимость с iOS CryptoKit
- Реализовано применение платежных сертификатов в Clip Wallet, что будет необходимо, если вам понадобятся доказательства отправки определенного количества токенов кому-либо
- Переключение на использование Base58 для ключей кошелька на диске позволяет обеспечить более удобное внешнее представление ключей, сохраненных на диске

Смотрите предыдущие [релизы](https://github.com/stegos/stegos/releases) и [план проекта](https://github.com/stegos/stegos/wiki/project-plan#sprint19) для получения дополнительной информации.

Обновление с Mainnet Preview 2 не поддерживается, пожалуйста, очистите каталог от старых баз данных и ключей.

### Установка

Начиная второго предварительного релиза основной сети, предоставляются два компонента платформы Stegos:

 - `stegosd` - Stegos Full Node Daemon.
 - `stegos` - Stegos Command-Line Client.

#### Running Node

Скачайте и запустите ноду Stegos.

**Linux 64-bit:**

```bash
curl -L https://github.com/stegos/stegos/releases/download/v0.10/stegosd-linux-x64 -o stegosd
chmod a+x stegosd
./stegosd
```

**macOS 64-bit:**

```bash
curl -L https://github.com/stegos/stegos/releases/download/v0.10/stegosd-macos-x64 -o stegosd
chmod a+x stegosd
./stegosd
```

При первом запуске нода создаст новый кошелек. Пожалуйста, создайте надежный пароль и сохраните его в безопасном месте. Этот пароль используется локально для шифрования данных на диске. Механизм восстановления пароля отсутствует.

Будут созданы следующие файлы и каталоги:

- `wallet.pkey` - Wallet Public Key (Address) in Base58 format
- `wallet.skey` - Wallet Secret Key.
- `network.pkey` - Network Public Key in HEX format
- `network.skey` - Network Secret Key.
- `data/chain/` - Blockchain Database.
- `data/wallet/` - Wallet Database.
- `api_token.txt` - API Token need to connect to Node API.

После создания нового кошелька узел начнет синхронизацию с сетью и напечатает множество информационных сообщений `INFO` с информацией о состоянии синхронизации.

#### Подключение к узлу

Скачайте и запустите клиент командной строки (command-line client).

**Linux 64-bit:**

```bash
curl -L https://github.com/stegos/stegos/releases/download/v0.10/stegos-linux-x64 -o stegos
chmod a+x stegos
./stegos
```

**macOS 64-bit**:

```bash
curl -L https://github.com/stegos/stegos/releases/download/v0.10/stegos-macos-x64 -o stegos
chmod a+x stegos
./stegos
```

Клиент командной строки попытается подключиться к локальному узлу и напечатать приглашение вида "stegos>". Для получения справки введите команду `help` в командной строке. По умолчанию клиент считывает маркер API из файла `api_token.txt` в текущем каталоге и пытается подключиться к адресу узла (по умолчанию `127.0.0.1:3145`). Пожалуйста, обратите на это внимание, команда `stegos --help` поможет переопределить эти параметры.

### Обратная связь

Пожалуйста, вступайте к нам в [Telegram чат](https://t.me/stegos4privacy), получайте тестовые токены и дайте нам обратную связь.
Подписывайтесь на наш официальный [Telegram канал](https://t.me/stegos4privacy_official), чтобы получать последние новости.
