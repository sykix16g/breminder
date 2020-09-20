
exports.SaveReminder = function (date, time, description) {
  var store = require('store');

  // 日付からunixtimeを取得する
  var datetimestr = date + " " + time;
  var unix = Math.round(new Date(datetimestr).getTime() / 1000);

  // 現在時のunixtimeを取得
  const currentUtcDate = new Date(new Date(datetimestr).toUTCString());
  const currentUtcUnixTime = Math.round(currentUtcDate.getTime() / 1000);

  console.log(datetimestr);
  console.log(new Date(datetimestr).toUTCString());
  console.log(String(currentUtcUnixTime));
  console.log(description);

  store.set("key", "data");

  var key = "people";
  var data = { name: "Ken", old: 16 };
  store.set(key, data);

  store.set(String(currentUtcUnixTime), { 'description': 'hoge' });
  store.set(String(currentUtcUnixTime), { description: description, date: datetimestr });
}

exports.FetchReminder = function (key) {
  var store = require('store');
  return store.get(key);
}

exports.FetchList = function () {
  var store = require('store');
  let list = {};
  store.each(function (value, key) {
    list[key] = value;
  });
  return list;
}

exports.RemoveReminder = function (key) {
  var store = require('store');
  store.remove(key)
}
