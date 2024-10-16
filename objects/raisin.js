const raisinAlarm = function (cookie) {
  return cookie.includes("🍇") ? "Raisin alert!" : "All good!";
};

const raisinAlarmArray = function (cookies) {

  return cookies.map(raisinAlarm);
};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);