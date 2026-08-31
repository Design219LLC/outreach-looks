(function () {
  var rows = [
    { d: 1, label: "Mon", t: "10:30am–8:00pm" },
    { d: 2, label: "Tue", t: "Closed" },
    { d: 3, label: "Wed", t: "10:30am–9:00pm" },
    { d: 4, label: "Thu", t: "10:30am–9:00pm" },
    { d: 5, label: "Fri", t: "10:30am–9:00pm" },
    { d: 6, label: "Sat", t: "10:30am–9:00pm" },
    { d: 0, label: "Sun", t: "11:00am–4:00pm" }
  ];
  var today = new Date().getDay();
  var now = rows.filter(function (r) { return r.d === today; })[0];
  document.querySelectorAll("[data-hours-today]").forEach(function (el) {
    el.textContent = now ? (now.t === "Closed" ? "Closed today · confirm at the door" : "Today · " + now.t) : "";
  });
  document.querySelectorAll("[data-hours-table]").forEach(function (box) {
    box.innerHTML = rows.map(function (r) {
      var on = r.d === today ? " is-today" : "";
      var tag = r.d === today ? "<span class=\"tag\">Today</span>" : "<span></span>";
      return "<div class=\"row" + on + "\"><span class=\"d\">" + r.label + "</span><span class=\"t\">" + r.t + "</span>" + tag + "</div>";
    }).join("");
  });
})();
