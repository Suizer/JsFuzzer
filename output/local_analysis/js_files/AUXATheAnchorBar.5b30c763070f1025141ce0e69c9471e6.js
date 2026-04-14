! function() {
  const t = document.querySelector("[data-anchor-bar-wrapper]");
  if (!t) return;
  const e = t.closest("[data-anchor-bar-box]"),
    o = e.querySelector("[data-anchor-bar-sticky-detector]");

  function r(t, e, o) {
    (o || "true" !== document.documentElement.getAttribute("data-scrolling-to-anchor")) && (e && document.querySelectorAll(".ATheAnchorBar__JumpMark[data-is-active]")
      .forEach(t => {
        t.removeAttribute("data-is-active")
      }), t && (e ? t.setAttribute("data-is-active", !0) : t.removeAttribute("data-is-active")))
  }

  function n() {
    e && document.documentElement.style.setProperty("--anchor-bar-height", `${e.offsetHeight}px`);
    const o = document.documentElement.offsetHeight - Math.max(e.offsetTop + 100, window.innerHeight / 2);
    t.setAttribute("style", `height: ${o}px`)
  }! function() {
    const t = document.createElement("div");
    Object.assign(t.style, {
      visibility: "hidden",
      position: "fixed",
      width: "calc(100vw - 100%)"
    });
    try {
      document.documentElement.appendChild(t);
      const e = window.getComputedStyle(t)
        .width;
      document.body.style.setProperty("--scrollbar-width", e)
    } finally {
      t.remove()
    }
  }(),
  function() {
    const t = document.querySelector("[data-anchor-bar-selector]");
    if (t) try {
      new ResizeObserver(function(t, e) {
          let o;
          return () => {
            o && clearTimeout(o), o = setTimeout(t, e)
          }
        }(() => n(), 500))
        .observe(t)
    } finally {
      n()
    }
  }(), new IntersectionObserver(e => {
      for (const o of e) o.isIntersecting ? t.setAttribute("data-anchorbar-state", "") : t.setAttribute("data-anchorbar-state", "sticky")
    }, {
      threshold: [0]
    })
    .observe(o),
    function() {
      const e = Array.prototype.slice.call(document.querySelectorAll("[data-section-selector]"));
      if (!e.length) return;
      const o = e => t.querySelector(`[href="#${e.id}"]`),
        n = document.querySelector(":target");
      n && r(o(n), !0, !0);
      const c = t => {
          const o = e.indexOf(t);
          return e[Math.max(0, o - 1)]
        },
        i = t => {
          const o = e.indexOf(t);
          return e[Math.min(e.length - 1, o + 1)]
        },
        a = new IntersectionObserver(function() {
          const t = {
            targetOffsetTop: 0,
            rootScrollTop: 0
          };
          let e = !0;
          const n = n => {
            t.targetOffsetTop = n.offsetTop, e || r(o(n), !0), e = !1
          };
          return function(e) {
            const a = document.documentElement.scrollTop;
            try {
              const s = a >= t.rootScrollTop;
              for (let a = 0; a < e.length; a++) {
                const l = e[a],
                  u = l.target.offsetTop >= t.targetOffsetTop;
                if (s && u) {
                  if (l.isIntersecting) return void n(l.target);
                  r(o(l.target), !1), a === e.length - 1 && n(i(l.target))
                } else if (!s && !u) {
                  if (l.isIntersecting) return void n(l.target);
                  r(o(l.target), !1), 0 === a && n(c(l.target))
                }
              }
            } finally {
              t.rootScrollTop = a
            }
          }
        }(), {
          rootMargin: "0px 0px -50%",
          threshold: [.1, .5, 1]
        });
      e.forEach(t => a.observe(t))
    }(), window.addEventListener("DOMContentLoaded", function() {
      const e = t => {
        if (("keydown" !== t.type || " " === t.key) && t.target.classList.contains("ATheAnchorBar__JumpMark")) {
          document.documentElement.setAttribute("data-scrolling-to-anchor", !0), setTimeout(() => {
            document.documentElement.removeAttribute("data-scrolling-to-anchor")
          }, 3e3), r(t.target, !0, !0);
          const e = t.target.getAttribute("href");
          if (0 !== e.indexOf("#")) return;
          const o = document.getElementById(`${e.substring(1)}`);
          if (!o) return;
          window.history.replaceState(null, "", e), ((t = document) => {
              const e = [...t.querySelectorAll("a[href], button, input, textarea, select, [tabindex]")].filter(t => !t.hasAttribute("disabled") && !t.getAttribute("aria-hidden") && "-1" !== t.getAttribute("tabindex"));
              return e.length ? e[0] : null
            })(o)
            ?.focus({
              preventScroll: !0
            });
          const n = window.getComputedStyle(o)
            .getPropertyValue("scroll-margin-top");
          document.documentElement.scrollTo({
            top: o.offsetTop - (n ? n.replace("px", "") : 0),
            behavior: "smooth"
          }), t.preventDefault()
        }
      };
      t.addEventListener("click", e), t.addEventListener("keydown", e)
    }), window.addEventListener("wheel", function() {
      const t = document.querySelector(".ATheAnchorBar__JumpMark:focus");
      t && t.blur()
    })
}();