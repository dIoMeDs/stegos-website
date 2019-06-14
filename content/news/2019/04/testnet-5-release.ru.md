---
author: "Владимир Лебедев"
date: 2019-04-24
linktitle: Testnet 5 Release 20190424
title: "Тестовая сеть, релиз 5"
description: "Пятая версия тестового блокчейна Stegos"
metaTitle: ""
metaDescription: ""
categories: [ "DEVELOPMENT" ]
tags: ["stegos", "отчет", "технология"]
weight: 8
draft: false
---

Примечания к релизу 5 тестовой сети Stegos

Stegos создает передовые технологии, которые защищают ваши секреты от посторонних глаз, чтобы вы чувствовали себя в безопасности.

Это пятая версия тестовой сети блокчейна Stegos. Изменения произведенные после [Testnet 4](https://github.com/stegos/stegos/releases/tag/v0.4):

 - Добавлен механизм разрешения случаев разветвления (т.н. "вилки") консенсуса и улучшена обработка сетевых разделов.
 - Реализовано базовое обнаружение обмана со стороны вредоносных валидаторов в консенсусе (без наказания на данный момент).
 - Значительно сокращено время полной синхронизации с сетью.
 - Произведено переключение на реальную одноранговую одноадресную рассылку сообщений с поддержкой обхода NAT.
 - Реализован расширенный WebSocket API для поддержки уведомлений о статусе блокчейна.
 - Исправлены ошибки и улучшена стабильность консенсуса и сетевых подсистем.


Критическое изменение:

Выпуск тестовой сети в 5 релизе не полностью совместим с выпуском 4 релиза. Пожалуйста, сбросьте локальную базу данных, если вы обновляете предыдущую версию:

rm -rf database/

Check the project plan for additional information.


Please join us on Telegram to get test tokens and let us know your thoughts.


Testnet node installation

Linux 64-bit:

curl -L https://github.com/stegos/stegos/releases/download/v0.5/stegos-linux-x64 -o stegos
chmod a+x stegos
./stegos

macOS 64-bit:

curl -L https://github.com/stegos/stegos/releases/download/v0.5/stegos-macos-x64 -o stegos
chmod a+x stegos
./stegos

Сразу после запуска узел будет печатать много информационных сообщений с отладочной информацией относительно начальной загрузки вашего узла. Нажмите Enter, чтобы получить stegos. Для получения справки введите команду help в командной строке.
