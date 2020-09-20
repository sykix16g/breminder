# Browser Reminder(ぶりまいんだー)

## これはなに

ブラウザを利用したリマインダーです。
時間と思い出したい出来事をBrowser Reminderにセットすると、時間になったときにブラウザが教えてくれます。

## つかいかた

node.js がインストールされている必要があります。

1. このリポジトリを git clone します。
1. `/src` ディレクトリに移動します。
1. コンソールを開き、 `node ./server.js` と入力します。
1. コンソールに表示された URL をブラウザで開きます。
1. `Set Reminder` ボタンを押下し、よしなに入力してください。

## できること

* 所定の時間に一回、任意の文字列による通知を送ることができます。
  * 過去の時間を設定した場合、即リマインドします。
* 既にリマインド設定しているリマインダーを確認することができます。

## できないこと

* リマインドを途中で取り消すことはできません。
  * localstorage に保存されているので直接確認してください。
* 既にリマインドした出来事を参照することはできません。
* いわゆるスヌーズ機能はありません。
* 自分の環境(Windows10, Google Chrome)でしか動作確認していません。
* ほとんどテストしてません。
* 多分メンテしません。

## 使用ライブラリ

* プッシュ通知：Push.js（https://pushjs.org）
* LocalStorageへの保管：Store.js（https://github.com/marcuswestin/store.js/）
* CSSテンプレート：Materialize（https://materializecss.com）
* ルーティング：Express（https://expressjs.com）
* ブリ大根：いらすとや（https://www.irasutoya.com/）
