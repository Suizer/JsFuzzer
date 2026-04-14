'use strict';
(function() {
  var a = new URLSearchParams(window.location.search);
  a.set("hidebanner", "true");
  history.replaceState(null, "", "?" + a.toString() + window.location.hash)
})();