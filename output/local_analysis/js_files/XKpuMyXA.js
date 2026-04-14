import {
  d as B,
  bC as A,
  b4 as q,
  m as E,
  bD as N,
  bE as T,
  al as j,
  bF as I,
  aR as L,
  bw as P,
  bG as U,
  bH as H,
  a0 as D,
  A as F,
  bI as _,
  bJ as M,
  aW as V,
  g,
  bK as W,
  bL as z,
  bM as O,
  R as G,
  bN as $,
  bO as J,
  bP as K
} from "./QvGuN4mp.js";
const Q = (...t) => t.find(o => o !== void 0);

function X(t) {
  const o = t.componentName || "NuxtLink";

  function f(e) {
    return !W && typeof e == "string" && e.startsWith("#")
  }

  function C(e, l, v) {
    const a = v ?? t.trailingSlash;
    if (!e || a !== "append" && a !== "remove") return e;
    if (typeof e == "string") return S(e, a);
    const u = "path" in e && e.path !== void 0 ? e.path : l(e)
      .path;
    return {
      ...e,
      name: void 0,
      path: S(u, a)
    }
  }

  function k(e) {
    const l = A(),
      v = G(),
      a = g(() => !!e.target && e.target !== "_self"),
      u = g(() => {
        const i = e.to || e.href || "";
        return typeof i == "string" && O(i, {
          acceptRelative: !0
        })
      }),
      y = P("RouterLink"),
      h = y && typeof y != "string" ? y.useLink : void 0,
      c = g(() => {
        if (e.external) return !0;
        const i = e.to || e.href || "";
        return typeof i == "object" ? !1 : i === "" || u.value
      }),
      n = g(() => {
        const i = e.to || e.href || "";
        return c.value ? i : C(i, l.resolve, e.trailingSlash)
      }),
      b = c.value ? void 0 : h?.({
        ...e,
        to: n
      }),
      m = g(() => {
        const i = e.trailingSlash ?? t.trailingSlash;
        if (!n.value || u.value || f(n.value)) return n.value;
        if (c.value) {
          const R = typeof n.value == "object" && "path" in n.value ? _(n.value) : n.value,
            x = typeof R == "object" ? l.resolve(R)
            .href : R;
          return S(x, i)
        }
        return typeof n.value == "object" ? l.resolve(n.value)
          ?.href ?? null : S(z(v.app.baseURL, n.value), i)
      });
    return {
      to: n,
      hasTarget: a,
      isAbsoluteUrl: u,
      isExternal: c,
      href: m,
      isActive: b?.isActive ?? g(() => n.value === l.currentRoute.value.path),
      isExactActive: b?.isExactActive ?? g(() => n.value === l.currentRoute.value.path),
      route: b?.route ?? g(() => l.resolve(n.value)),
      async navigate(i) {
        await V(m.value, {
          replace: e.replace,
          external: c.value || a.value
        })
      }
    }
  }
  return B({
    name: o,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: !1
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: !1
      },
      target: {
        type: String,
        default: void 0,
        required: !1
      },
      rel: {
        type: String,
        default: void 0,
        required: !1
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: !1
      },
      prefetch: {
        type: Boolean,
        default: void 0,
        required: !1
      },
      prefetchOn: {
        type: [String, Object],
        default: void 0,
        required: !1
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: !1
      },
      activeClass: {
        type: String,
        default: void 0,
        required: !1
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: !1
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: !1
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: !1
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: !1
      },
      external: {
        type: Boolean,
        default: void 0,
        required: !1
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: !1
      },
      trailingSlash: {
        type: String,
        default: void 0,
        required: !1
      }
    },
    useLink: k,
    setup(e, {
      slots: l
    }) {
      const v = A(),
        {
          to: a,
          href: u,
          navigate: y,
          isExternal: h,
          hasTarget: c,
          isAbsoluteUrl: n
        } = k(e),
        b = D(!1),
        m = F(null),
        i = s => {
          m.value = e.custom ? s?.$el?.nextElementSibling : s?.$el
        };

      function R(s) {
        return !b.value && (typeof e.prefetchOn == "string" ? e.prefetchOn === s : e.prefetchOn?.[s] ?? t.prefetchOn?.[s]) && (e.prefetch ?? t.prefetch) !== !1 && e.noPrefetch !== !0 && e.target !== "_blank" && !ee()
      }
      async function x(s = q()) {
        if (b.value) return;
        b.value = !0;
        const d = typeof a.value == "string" ? a.value : h.value ? _(a.value) : v.resolve(a.value)
          .fullPath,
          r = h.value ? new URL(d, window.location.href)
          .href : d;
        await Promise.all([s.hooks.callHook("link:prefetch", r)
          .catch(() => {}), !h.value && !c.value && M(a.value, v)
          .catch(() => {})
        ])
      }
      if (R("visibility")) {
        const s = q();
        let d, r = null;
        E(() => {
          const p = Y();
          N(() => {
            d = T(() => {
              m?.value?.tagName && (r = p.observe(m.value, async () => {
                r?.(), r = null, await x(s)
              }))
            })
          })
        }), j(() => {
          d && I(d), r?.(), r = null
        })
      }
      return () => {
        if (!h.value && !c.value && !f(a.value)) {
          const r = {
            ref: i,
            to: a.value,
            activeClass: e.activeClass || t.activeClass,
            exactActiveClass: e.exactActiveClass || t.exactActiveClass,
            replace: e.replace,
            ariaCurrentValue: e.ariaCurrentValue,
            custom: e.custom
          };
          return e.custom || (R("interaction") && (r.onPointerenter = x.bind(null, void 0), r.onFocus = x.bind(null, void 0)), b.value && (r.class = e.prefetchedClass || t.prefetchedClass), r.rel = e.rel || void 0), L(P("RouterLink"), r, l.default)
        }
        const s = e.target || null,
          d = Q(e.noRel ? "" : e.rel, t.externalRelAttribute, n.value || c.value ? "noopener noreferrer" : "") || null;
        return e.custom ? l.default ? l.default({
          href: u.value,
          navigate: y,
          prefetch: x,
          get route() {
            if (!u.value) return;
            const r = new URL(u.value, window.location.href);
            return {
              path: r.pathname,
              fullPath: r.pathname,
              get query() {
                return U(r.search)
              },
              hash: r.hash,
              params: {},
              name: void 0,
              matched: [],
              redirectedFrom: void 0,
              meta: {},
              href: u.value
            }
          },
          rel: d,
          target: s,
          isExternal: h.value || c.value,
          isActive: !1,
          isExactActive: !1
        }) : null : L("a", {
          ref: m,
          href: u.value || null,
          rel: d,
          target: s,
          onClick: async r => {
            if (!(h.value || c.value)) {
              r.preventDefault();
              try {
                const p = H(u.value);
                return await (e.replace ? v.replace(p) : v.push(p))
              } finally {
                if (f(a.value)) {
                  const p = a.value.slice(1);
                  let w = p;
                  try {
                    w = decodeURIComponent(p)
                  } catch {}
                  document.getElementById(w)
                    ?.focus()
                }
              }
            }
          }
        }, l.default?.())
      }
    }
  })
}
const re = X(K);

function S(t, o) {
  const f = o === "append" ? $ : J;
  return O(t) && !t.startsWith("http") ? t : f(t, !0)
}

function Y() {
  const t = q();
  if (t._observer) return t._observer;
  let o = null;
  const f = new Map,
    C = (e, l) => (o ||= new IntersectionObserver(v => {
      for (const a of v) {
        const u = f.get(a.target);
        (a.isIntersecting || a.intersectionRatio > 0) && u && u()
      }
    }), f.set(e, l), o.observe(e), () => {
      f.delete(e), o?.unobserve(e), f.size === 0 && (o?.disconnect(), o = null)
    });
  return t._observer = {
    observe: C
  }
}
const Z = /2g/;

function ee() {
  const t = navigator.connection;
  return !!(t && (t.saveData || Z.test(t.effectiveType)))
}
export {
  re as _
};