try {
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
    var a = Array.from(document.querySelectorAll("input.n-leftside-nav__checkbox.child_checkbox")),
      b = Array.from(document.querySelectorAll("input.n-leftside-nav__checkbox.root_checkbox")),
      d = Array.from(document.querySelectorAll("input.n-leftside-nav__checkbox:not(:checked)"));
    0 !== b.length && (d.forEach(function(c) {
      var e = getCheckboxLink(c);
      c = getCheckboxToggle(c);
      setElementVisibility(e, !1);
      setElementVisibility(c, !1)
    }), b.forEach(function(c) {
      var e = getCheckboxLink(c),
        g = getCheckboxToggle(c);
      setElementVisibility(e,
        !0);
      setElementVisibility(g, !0);
      c.checked && getCheckboxChildren(c)
        .forEach(function(f) {
          var h = getCheckboxLink(f);
          f = getCheckboxToggle(f);
          setElementVisibility(h, !0);
          setElementVisibility(f, !0)
        })
    }), d = a.filter(function(c) {
      return c.checked
    }), 0 < d.length && enableTreeVisibility(d), a.forEach(function(c) {
      return c.addEventListener("change", function() {
        return onCheckboxChange(c)
      })
    }), b.forEach(function(c) {
      return c.addEventListener("change", function() {
        return onCheckboxChange(c)
      })
    }), setupKeyboardToggle())
  })();

  function onCheckboxChange(a) {
    a.checked ? onNodeOpened(a) : onNodeClosed(a)
  }

  function onNodeOpened(a) {
    getCheckboxChildren(a)
      .forEach(function(b) {
        var d = getCheckboxLink(b),
          c = getCheckboxToggle(b);
        setElementVisibility(d, !0);
        setElementVisibility(c, !0);
        b.checked && onNodeOpened(b)
      })
  }

  function onNodeClosed(a) {
    getCheckboxChildren(a)
      .forEach(function(b) {
        var d = getCheckboxLink(b),
          c = getCheckboxToggle(b);
        setElementVisibility(d, !1);
        setElementVisibility(c, !1);
        onNodeClosed(b)
      })
  }

  function enableTreeVisibility(a) {
    if (0 !== a.length) {
      a = a.sort(function(c, e) {
        c = parseInt(c.getAttribute("data-depth") || 0);
        return parseInt(e.getAttribute("data-depth") || 0) - c
      })[0];
      var b = getCheckboxLink(a),
        d = getCheckboxToggle(a);
      setElementVisibility(b, !0);
      setElementVisibility(d, !0);
      getCheckboxChildren(a)
        .forEach(function(c) {
          var e = getCheckboxLink(c);
          c = getCheckboxToggle(c);
          setElementVisibility(e, !0);
          setElementVisibility(c, !0)
        });
      enableParentVisibility(a)
    }
  }

  function enableParentVisibility(a) {
    a = a.getAttribute("data-parent-id");
    if (a = document.querySelector("input.n-leftside-nav__checkbox#n-" + a)) {
      var b = getCheckboxLink(a),
        d = getCheckboxToggle(a);
      setElementVisibility(b, !0);
      setElementVisibility(d, !0);
      getCheckboxChildren(a)
        .forEach(function(c) {
          var e = getCheckboxLink(c);
          c = getCheckboxToggle(c);
          setElementVisibility(e, !0);
          setElementVisibility(c, !0)
        });
      enableParentVisibility(a)
    }
  }

  function getCheckboxChildren(a) {
    var b = null == a ? void 0 : a.getAttribute("id");
    if (!b) return [];
    b = b.replace("n-", "");
    a = a.closest("li.n-leftside-nav__listitem");
    return Array.from(a.querySelectorAll('input.n-leftside-nav__checkbox.child_checkbox[data-parent-id="' + b + '"]'))
  }

  function getCheckboxLink(a) {
    var b;
    return null == a ? void 0 : null == (b = a.nextElementSibling) ? void 0 : b.querySelector("a.n-leftside-nav__link")
  }

  function getCheckboxToggle(a) {
    var b;
    return null == a ? void 0 : null == (b = a.nextElementSibling) ? void 0 : b.querySelector(".n-leftside-nav__toggle-label")
  }

  function setElementVisibility(a, b) {
    null == a || a.setAttribute("aria-hidden", b ? "false" : "true");
    null == a || a.setAttribute("tabindex", b ? "0" : "-1")
  }

  function setupKeyboardToggle() {
    Array.from(document.querySelectorAll(".n-leftside-nav__toggle-label"))
      .forEach(function(a) {
        a.addEventListener("keydown", function(b) {
          if ("Enter" === b.key || " " === b.key) b.preventDefault(), a.click(), b = "true" === a.getAttribute("aria-expanded"), a.setAttribute("aria-expanded", !b)
        })
      })
  };
} catch (e) {
  console.error('Uncaught excption in module-file "leftside-nav.min.js": ', e);
}