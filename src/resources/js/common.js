function FetchOldestKey() {
  let oldestKey;
  store.each(function (value, key) {
    if (oldestKey == undefined || key <= oldestKey) {
      oldestKey = key;
    }
  });
  return oldestKey;
}

function saveReminder() {
  const date = $('.datepicker').val();
  const time = $('.timepicker').val();
  const description = $('.descriptionpicker').val();

  // 日付からunixtimeを取得する
  const datetimestr = date + " " + time;
  const currentUtcDate = new Date(new Date(datetimestr).toUTCString());
  const currentUtcUnixTime = Math.round(currentUtcDate.getTime() / 1000);

  store.set(String(currentUtcUnixTime), { description: description, date: datetimestr });
}

function updateReminder() {
  // LocalStrage の中で一番古いリマインダーを取得する
  // key = unixtime
  const key = FetchOldestKey();
  const reminder = store.get(key);

  // 現在時のunixtimeを取得
  const currentUtcDate = new Date(new Date().toUTCString());
  const currentUtcUnixTime = Math.round(currentUtcDate.getTime() / 1000);
  console.log(key);
  console.log(new Date().toUTCString());
  console.log(currentUtcUnixTime);

  // 一番古いリマインダーが現在時以降の場合
  if (Number(key) !== 0 && currentUtcUnixTime >= Number(key)) {

    // 通知する
    Push.create('Browser Reminder(ぶりまいんだー)', {
      body: reminder.description,
      icon: "../image/buri.png"
    })

    // ローカルストレージから削除
    store.remove(key);
  }

}

function getReminderList() {
  let reminders = {};
  store.each(function (value, key) {
    reminders[key] = value;
    //reminders[key] = value;
  });

  const pairs = Object.entries(reminders);
  pairs.sort(function (a, b) {
    var aKey = a[0], bKey = b[0];
    if (aKey < bKey) { return -1; }
    if (aKey > bKey) { return 1; }
    return 0;
  })

  reminders = Object.fromEntries(pairs);

  return reminders;
}
