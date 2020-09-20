
const storage = require("../../store");

function saveReminder(date, time, description) {
  storage.SaveReminder(date, time, description)
}

const checkTime = function () {
  return function () {
    // LocalStrage の中で一番古いリマインダーを取得する
    // key = unixtime
    const key = storage.FetchOldestKey();
    const reminder = storage.FetchReminder(key)

    // 現在時のunixtimeを取得
    const currentUnixTime = Math.round(new Date().getTime() / 1000);

    // 一番古いリマインダーが現在時以降の場合
    if (currentUnixTime >= key) {

      // 通知
      Push.create('Browser Reminder(ぶりまいんだー)', {
        body: reminder.description,
        icon: "../image/buri.png"
      })

      // ローカルストレージから削除
      storage.RemoveReminder(key);
    }
  }
}();

window.onload = function () {
  setInterval(checkTime, 1000);
};
