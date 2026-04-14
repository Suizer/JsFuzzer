'use strict';
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.createTemplateTagFirstArg = function(a) {
  return a.raw = a
};
$jscomp.createTemplateTagFirstArgWithRaw = function(a, b) {
  a.raw = b;
  return a
};
(function() {
  window.mindShiftNav && window.mindShiftNav.cookieUtil || (window.mindShiftNav = window.mindShiftNav || {}, window.mindShiftNav.cookieUtil = {
    get: function(a) {
      return (a = document.cookie.match("(^|;) ?" + a + "=([^;]*)(;|$)")) ? a[2] : null
    },
    set: function(a, b, d, c) {
      c = void 0 === c ? "/" : c;
      var e = new Date;
      e.setTime(e.getTime() + 864E5 * d);
      d = "expires=" + e.toUTCString();
      document.cookie = a + "=" + b + ";" + d + ";path=" + c + "; Secure;"
    },
    setSession: function(a, b) {
      document.cookie = a + "=" + b + ";path=/; Secure;"
    },
    delete: function(a,
      b) {
      document.cookie = a + "=; Path=" + (void 0 === b ? "/" : b) + "; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
    }
  })
})();