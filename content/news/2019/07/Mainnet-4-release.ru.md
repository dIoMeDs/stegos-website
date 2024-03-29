---
author: "Владимир Лебедев"
date: 2019-08-07
linktitle: Mainnet Preview 4 20190807
title: "Основная сеть, предварительный релиз 4"
description: "Четвертый предварительный релиз основной сети Stegos."
metaTitle: "Основная сеть, предварительный релиз 4"
metaDescription: "Четвертый предварительный релиз основной сети Stegos."
categories: [ "DEVELOPMENT" ]
tags: ["stegos", "отчет", "технология"]
weight: 7
draft: false
---
Stegos создает передовые технологии, которые защищают ваши секреты от посторонних глаз, чтобы вы чувствовали себя в безопасности.

Этот исправляет более 100 проблем и потенциальных уязвимостей с момента [Mainnet Preview 3](https://github.com/stegos/stegos/releases/tag/v0.10).

### Новое в Stegos v0.11:

- Улучшена общая стабильность и производительность протокола Snowball, теперь Snowball надежно работает даже на медленных мобильных соединениях 3G/4G.
- Произведен тюнинг основных констант и ограничений блокчейна для достижения целей по инфляции, теперь новый блок создается каждые 6-8 секунд.
- Протокол авторизации сети HashCash заменен на VDFs, что делает время ожидания авторизации в сети более предсказуемым.
- Автоматический рестейкинг перемещен на Ноду, что позволит запускать запускать Ноду без необходимости наличия Кошелька с холодными ключами.
- Переделана история отслеживания транзакций и платежей, исправлены некоторые проблемы, обнаруженные во время внутреннего тестирования.
- Изменена структура каталога с данными и пути по умолчанию для Linux и Mac.
- Добавлены новые параметры командной строки и конфигурации для Ноды и CLI.
- Отфильтрованы излишние уведомления в клиенте командной строки.
- Улучшено удобство использования WebSocket API.

Смотрите предыдущие [Спринт 20](https://github.com/stegos/stegos/milestone/21?closed=1) и [Спринт 21](https://github.com/stegos/stegos/milestone/22?closed=1) на GitHub для полного списка исправленных ошибок.

### Начало работы

#### Запуск ноды

Если Вы ранее устанавливали Mainnet Preview 3, то, пожалуйста, остановите Ноды и удалите каталоги с данными:

```
rm -rf ~/.local/stegos ~/.config/stegos
```

Скачайте и запустите Ноду Stegos:

**Linux 64-bit:**

```bash
curl -L https://github.com/stegos/stegos/releases/download/v0.11/stegosd-linux-x64 -o stegosd
chmod a+x stegosd
./stegosd
```

**macOS 64-bit:**

```bash
curl -L https://github.com/stegos/stegos/releases/download/v0.11/stegosd-macos-x64 -o stegosd
chmod a+x stegosd
./stegosd
```

При первом запуске Нода создаст директорию `$HOME/.local/share/stegos` на Linux или `$HOME/Library/Application Support/stegos` на Mac. Эта директория имеет следующую структуру:


```
    ├── accounts/  <!-- Accounts
    │   ├── 1
    │   │   ├── account.pkey <!-- Account #1 public key (address)
    │   │   ├── account.skey <!-- Account #2 secret key (address)
    │   │   └── history/     <!-- Payment History (RocksDB)
    │   └── 2
    │       ├── account.pkey <!-- Account #1 public key (address)
    │       ├── account.skey <!-- Account #2 secret key (address)
    │       └── history/     <!-- Payment History (RocksDB)
    ├── api.token            <!-- Generated API Token
    ├── chain/               <!-- Blockchain (RocksDB)
    ├── network.pkey         <!-- Ephemeral network (consensus) public key.
    ├── network.skey         <!-- Ephemeral network (consensus) secret key.
```

Нода начнет синхронизацию с сетью и напечатает много информационных сообщений с отладочной информацией о состоянии синхронизации.

Новый Нода по умолчанию не имеет счетов. Чтобы создать новый счет, подключитесь к узлу с помощью клиента командной строки.

#### Соединение с нодой

Скачайте и запустите клиент командной строки.

Linux 64-bit:

```bash
curl -L https://github.com/stegos/stegos/releases/download/v0.11/stegos-linux-x64 -o stegos
chmod a+x stegos
./stegos
```

macOS 64-bit:

```bash
curl -L https://github.com/stegos/stegos/releases/download/v0.11/stegos-macos-x64 -o stegos
chmod a+x stegos
./stegos
```

Клиент командной строки попытается подключиться к локальному узлу и напечатать приглашение "stegos>". Если Вам необходима подсказка, введите команду "help" в командной строке. По умолчанию клиент считывает маркер API из файла 'api_token.txt' в текущем каталоге и пытается подключиться к адресу узла по умолчанию (`127.0.0.1:3145`). Команда `stegos --help` подскажет как переопределить эти параметры.

#### Работа с учетными записями

Введите `create account`, чтобы создать новый счет. Вам будет предложено ввести пароль. Этот пароль используется только локально для шифрования данных на диске. Пожалуйста, запомните его и/или сохраните в безопасном месте.

Введите `show recovery`, чтобы получить фразу восстановления из 24 слов. Эта фраза восстановления является закодированным представлением вашего секретного ключа. Пожалуйста, сохраните данную фразу в безопасном месте. Других механизмов восстановления пароля НЕ СУЩЕСТВУЕТ.

Введите `recover account`, чтобы восстановить счет из фразы восстановления 24 слов.

Введите `show accounts`, чтобы отобразить список доступных аккаунтов.

Введите `use ACCOUNT_ID` для переключения между активными учетными записями в CLI.

Введите `show balance`, чтобы увидеть текущий баланс.

Введите `pay RECIPIENT AMOUNT`, чтобы совершить платеж получателю.

Введите `show history 15m`, чтобы увидеть статус созданной транзакции и историю платежей (за последние 15 минут).

### Обратная связь

Пожалуйста, вступайте к нам в [Telegram чат](https://stg.to/tgc), получайте тестовые токены и дайте нам обратную связь.
Подписывайтесь на наш официальный [Telegram канал](https://stg.to/tgn), чтобы получать последние новости.
