(new function() {
  function t(t) {
    t.addEventListener("click", e => {
      t.dispatchEvent(new Event("toggle", {
        bubbles: !0
      }))
    })
  }

  function e(t, e) {
    const n = t.querySelectorAll("[data-product-ref]" + (e ? "[data-active]" : ""));
    return n.length ? Array.prototype.slice.call(n) : []
  }

  function n(t) {
    if (t.matches("[data-stl-initialized")) return;
    t.setAttribute("data-stl-initialized", !0);
    const e = t.closest("[data-render-to]");
    if (e) {
      const n = e.getAttribute("data-render-to");
      if (n) {
        const i = document.querySelector(`#${n}`);
        return void(i && (i.appendChild(e), e.removeAttribute("data-render-to"), r(t)))
      }
    }
    r(t)
  }

  function r(n) {
    e(n)
      .forEach(t => function(t, n) {
        t.addEventListener("pointerenter", () => {
          e(n, !0)
            .forEach(t => t.removeAttribute("data-active"))
        }, {
          passive: !0
        })
      }(t, n)),
      function(t) {
        const e = t.querySelectorAll("[data-action-viewall]");
        return e.length ? Array.prototype.slice.call(e) : []
      }(n)
      .forEach(t)
  }
  this.init = function(t) {
    (function(t) {
      return t.querySelectorAll("[data-stl-widget]")
    })(t)
    .forEach(n)
  }
})
.init(document.currentScript?.getRootNode?.() || document);