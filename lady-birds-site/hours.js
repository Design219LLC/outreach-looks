/* Keeps today's hours live on the static copy: same week data and the same
   America/Chicago clock the real site uses. */
(function () {
  var WEEK = [
    { key: "sun", label: "Sunday",    open: 11 * 60,      close: 16 * 60 },
    { key: "mon", label: "Monday",    open: 10 * 60 + 30, close: 20 * 60 },
    { key: "tue", label: "Tuesday",   open: null,         close: null },
    { key: "wed", label: "Wednesday", open: 10 * 60 + 30, close: 21 * 60 },
    { key: "thu", label: "Thursday",  open: 10 * 60 + 30, close: 21 * 60 },
    { key: "fri", label: "Friday",    open: 10 * 60 + 30, close: 21 * 60 },
    { key: "sat", label: "Saturday",  open: 10 * 60 + 30, close: 21 * 60 }
  ];

  function cafeNow() {
    var parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Chicago", weekday: "short", hour: "numeric",
      minute: "numeric", hour12: false
    }).formatToParts(new Date());
    var g = {};
    parts.forEach(function (p) { g[p.type] = p.value; });
    var idx = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(g.weekday);
    return { dayIndex: idx, minutes: parseInt(g.hour, 10) * 60 + parseInt(g.minute, 10) };
  }

  function clock(m) {
    var h = Math.floor(m / 60), mm = m % 60;
    var suffix = h >= 12 ? "p" : "a";
    var h12 = h % 12 === 0 ? 12 : h % 12;
    return h12 + (mm ? ":" + String(mm).padStart(2, "0") : "") + suffix;
  }

  var now = cafeNow();
  var today = WEEK[now.dayIndex];
  if (!today) return;

  // Mark today on the week board.
  var rows = document.querySelectorAll(".hours-row");
  rows.forEach(function (row) { row.classList.remove("is-today"); });
  var order = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  var pos = order.indexOf(today.key);
  if (pos > -1 && rows[pos]) rows[pos].classList.add("is-today");

  // Today's line: hours plus whether the kitchen is open right now.
  var hoursText = today.open === null
    ? "Closed today"
    : clock(today.open) + "–" + clock(today.close);
  var statusText;
  if (today.open === null) statusText = "Back tomorrow";
  else if (now.minutes < today.open) statusText = "Opens " + clock(today.open);
  else if (now.minutes < today.close) statusText = "Open now";
  else statusText = "Closed for today";

  document.querySelectorAll("[data-today-chip]").forEach(function (chip) {
    chip.innerHTML =
      '<span>' + today.label + '</span>' +
      '<span class="tabular-nums">' + hoursText + '</span>' +
      '<span class="tabular-nums">' + statusText + '</span>';
  });
})();
