const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./256ElSVv.js", "./QvGuN4mp.js", "./entry.Bga0AwMh.css", "./9_R7MKMz.js"]))) => i.map(i => d[i]);
import {
  W as Ot,
  X as ms,
  g as m,
  F as D,
  Y as Q,
  Z as Ge,
  $ as R,
  a0 as U,
  a1 as hs,
  a2 as Js,
  a3 as Lt,
  a4 as pt,
  a5 as Xs,
  u as n,
  m as q,
  a6 as $e,
  A as y,
  d as I,
  o as f,
  a as C,
  a7 as ea,
  w,
  a8 as E,
  f as k,
  z as g,
  a9 as He,
  aa as rt,
  ab as O,
  ac as K,
  ad as je,
  ae as be,
  af as S,
  ag as Ve,
  ah as Xe,
  ai as ta,
  c as h,
  aj as it,
  t as V,
  ak as bs,
  al as _t,
  am as Ht,
  an as qe,
  ao as vt,
  ap as Ue,
  aq as gs,
  ar as te,
  as as sa,
  at as ae,
  au as aa,
  av as ys,
  aw as Ss,
  ax as oa,
  r as pe,
  ay as Bt,
  az as Pt,
  aA as At,
  aB as Ut,
  aC as jt,
  aD as na,
  aE as la,
  aF as ra,
  aG as ia,
  aH as mt,
  aI as ca,
  aJ as ua,
  aK as ot,
  aL as da,
  aM as pa,
  aN as _a,
  aO as va,
  aP as G,
  aQ as qt,
  aR as fa,
  l as ue,
  aS as ma,
  aT as ha,
  aU as Cs,
  aV as nt,
  U as re,
  y as xe,
  aW as Pe,
  i as Ae,
  b as ct,
  aX as ba,
  s as Ye,
  v as Qe,
  h as ge,
  j as ye,
  aY as Ct,
  aZ as ks,
  a_ as Be,
  a$ as ga,
  q as Mt,
  R as ws,
  k as ze,
  N as Yt,
  E as he,
  b0 as ya,
  J as Sa,
  C as Ca,
  S as Qt,
  b1 as ka,
  b2 as wa,
  b3 as xa,
  T as xs,
  b4 as $a,
  b5 as Ia,
  b6 as $s,
  b7 as Is,
  b8 as Et,
  b9 as Ts,
  ba as Ta,
  bb as Oa,
  bc as et,
  bd as La,
  be as Ba,
  bf as Kt,
  bg as Pa,
  _ as Aa,
  bh as tt,
  bi as Ma
} from "./QvGuN4mp.js";
import {
  i as Zt,
  E as Ea,
  _ as Na,
  a as Me,
  b as Os,
  c as Ls,
  w as Ra
} from "./BZqGDSdX.js";
import {
  _ as Fa
} from "./XKpuMyXA.js";

function Da(e) {
  return new URL(globalThis.location.href)
}
const Jt = e => e.replace(/[A-Z]/g, (s, t) => t === 0 ? s.toLowerCase() : "-" + s.toLowerCase()),
  ht = (e, s, t) => {
    if (e.props) {
      if (s in e.props) return e.props[s];
      if (Jt(s) in e.props) return e.props[Jt(s)]
    }
    return t
  },
  Va = (e, s) => {
    const t = Ot(e),
      a = ms(),
      o = m(() => a.default ? a.default() : []),
      l = i => i ? i.reduce((r, c) => {
        var d;
        return c.type === D ? [...r, ...l(c.children)] : ((d = c.type) == null ? void 0 : d.__name) === s ? [...r, c] : (t.error(`The ${e} default child slot is wrong type, please use ${s}`), r)
      }, []) : [];
    return m(() => l(o.value))
  };

function Nt(e, s) {
  return hs() ? (Js(e, s), !0) : !1
}
const bt = new WeakMap,
  za = (...e) => {
    var s;
    const t = e[0],
      a = (s = pt()) === null || s === void 0 ? void 0 : s.proxy,
      o = a ?? hs();
    if (o == null && !Lt()) throw new Error("injectLocal must be called in setup");
    return o && bt.has(o) && t in bt.get(o) ? bt.get(o)[t] : Xs(...e)
  },
  Wa = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ga = e => e != null,
  Ha = Object.prototype.toString,
  Ua = e => Ha.call(e) === "[object Object]",
  gt = () => {};

function Xt(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e)
}

function We(e) {
  return Array.isArray(e) ? e : [e]
}

function ja(e) {
  return pt()
}

function Bs(e, s = !0, t) {
  ja() ? q(e, t) : s ? e() : $e(e)
}

function qa(e, s, t) {
  return R(e, s, {
    ...t,
    immediate: !0
  })
}

function Ya(e, s, t) {
  return R(e, s, {
    ...t,
    once: !0
  })
}
const Ee = Wa ? window : void 0;

function _e(e) {
  var s;
  const t = Q(e);
  return (s = t?.$el) !== null && s !== void 0 ? s : t
}

function kt(...e) {
  const s = [],
    t = () => {
      s.forEach(r => r()), s.length = 0
    },
    a = (r, c, d, p) => (r.addEventListener(c, d, p), () => r.removeEventListener(c, d, p)),
    o = m(() => {
      const r = We(Q(e[0]))
        .filter(c => c != null);
      return r.every(c => typeof c != "string") ? r : void 0
    }),
    l = qa(() => {
      var r, c;
      return [(r = (c = o.value) === null || c === void 0 ? void 0 : c.map(d => _e(d))) !== null && r !== void 0 ? r : [Ee].filter(d => d != null), We(Q(o.value ? e[1] : e[0])), We(n(o.value ? e[2] : e[1])), Q(o.value ? e[3] : e[2])]
    }, ([r, c, d, p]) => {
      if (t(), !(r != null && r.length) || !(c != null && c.length) || !(d != null && d.length)) return;
      const u = Ua(p) ? {
        ...p
      } : p;
      s.push(...r.flatMap(_ => c.flatMap(v => d.map(b => a(_, v, b, u)))))
    }, {
      flush: "post"
    }),
    i = () => {
      l(), t()
    };
  return Nt(t), i
}

function Qa() {
  const e = U(!1),
    s = pt();
  return s && q(() => {
    e.value = !0
  }, s), e
}

function Rt(e) {
  const s = Qa();
  return m(() => (s.value, !!e()))
}
const Ka = Symbol("vueuse-ssr-width");

function Za() {
  const e = Lt() ? za(Ka, null) : null;
  return typeof e == "number" ? e : void 0
}

function Ft(e, s = {}) {
  const {
    window: t = Ee,
    ssrWidth: a = Za()
  } = s, o = Rt(() => t && "matchMedia" in t && typeof t.matchMedia == "function"), l = U(typeof a == "number"), i = U(), r = U(!1), c = d => {
    r.value = d.matches
  };
  return Ge(() => {
    if (l.value) {
      l.value = !o.value, r.value = Q(e)
        .split(",")
        .some(d => {
          const p = d.includes("not all"),
            u = d.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),
            _ = d.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
          let v = !!(u || _);
          return u && v && (v = a >= Xt(u[1])), _ && v && (v = a <= Xt(_[1])), p ? !v : v
        });
      return
    }
    o.value && (i.value = t.matchMedia(Q(e)), r.value = i.value.matches)
  }), kt(i, "change", c, {
    passive: !0
  }), m(() => r.value)
}

function Ja(e, s, t = {}) {
  const {
    window: a = Ee,
    ...o
  } = t;
  let l;
  const i = Rt(() => a && "ResizeObserver" in a),
    r = () => {
      l && (l.disconnect(), l = void 0)
    },
    c = R(m(() => {
      const p = Q(e);
      return Array.isArray(p) ? p.map(u => _e(u)) : [_e(p)]
    }), p => {
      if (r(), i.value && a) {
        l = new ResizeObserver(s);
        for (const u of p) u && l.observe(u, o)
      }
    }, {
      immediate: !0,
      flush: "post"
    }),
    d = () => {
      r(), c()
    };
  return Nt(d), {
    isSupported: i,
    stop: d
  }
}

function st(e, s = {
  width: 0,
  height: 0
}, t = {}) {
  const {
    window: a = Ee,
    box: o = "content-box"
  } = t, l = m(() => {
    var u;
    return (u = _e(e)) === null || u === void 0 || (u = u.namespaceURI) === null || u === void 0 ? void 0 : u.includes("svg")
  }), i = U(s.width), r = U(s.height), {
    stop: c
  } = Ja(e, ([u]) => {
    const _ = o === "border-box" ? u.borderBoxSize : o === "content-box" ? u.contentBoxSize : u.devicePixelContentBoxSize;
    if (a && l.value) {
      const v = _e(e);
      if (v) {
        const b = v.getBoundingClientRect();
        i.value = b.width, r.value = b.height
      }
    } else if (_) {
      const v = We(_);
      i.value = v.reduce((b, {
        inlineSize: $
      }) => b + $, 0), r.value = v.reduce((b, {
        blockSize: $
      }) => b + $, 0)
    } else i.value = u.contentRect.width, r.value = u.contentRect.height
  }, t);
  Bs(() => {
    const u = _e(e);
    u && (i.value = "offsetWidth" in u ? u.offsetWidth : s.width, r.value = "offsetHeight" in u ? u.offsetHeight : s.height)
  });
  const d = R(() => _e(e), u => {
    i.value = u ? s.width : 0, r.value = u ? s.height : 0
  });

  function p() {
    c(), d()
  }
  return {
    width: i,
    height: r,
    stop: p
  }
}

function Xa(e, s, t = {}) {
  const {
    root: a,
    rootMargin: o = "0px",
    threshold: l = 0,
    window: i = Ee,
    immediate: r = !0
  } = t, c = Rt(() => i && "IntersectionObserver" in i), d = m(() => We(Q(e))
    .map(_e)
    .filter(Ga));
  let p = gt;
  const u = U(r),
    _ = c.value ? R(() => [d.value, _e(a), u.value], ([b, $]) => {
      if (p(), !u.value || !b.length) return;
      const T = new IntersectionObserver(s, {
        root: _e($),
        rootMargin: o,
        threshold: l
      });
      b.forEach(L => L && T.observe(L)), p = () => {
        T.disconnect(), p = gt
      }
    }, {
      immediate: r,
      flush: "post"
    }) : gt,
    v = () => {
      p(), _(), u.value = !1
    };
  return Nt(v), {
    isSupported: c,
    isActive: u,
    pause() {
      p(), u.value = !1
    },
    resume() {
      u.value = !0
    },
    stop: v
  }
}

function eo(e, s = {}) {
  const {
    window: t = Ee,
    scrollTarget: a,
    threshold: o = 0,
    rootMargin: l,
    once: i = !1
  } = s, r = U(!1), {
    stop: c
  } = Xa(e, d => {
    let p = r.value,
      u = 0;
    for (const _ of d) _.time >= u && (u = _.time, p = _.isIntersecting);
    r.value = p, i && Ya(r, () => {
      c()
    })
  }, {
    root: a,
    window: t,
    threshold: o,
    rootMargin: Q(l)
  });
  return r
}

function to(e = {}) {
  const {
    window: s = Ee,
    initialWidth: t = Number.POSITIVE_INFINITY,
    initialHeight: a = Number.POSITIVE_INFINITY,
    listenOrientation: o = !0,
    includeScrollbar: l = !0,
    type: i = "inner"
  } = e, r = U(t), c = U(a), d = () => {
    if (s)
      if (i === "outer") r.value = s.outerWidth, c.value = s.outerHeight;
      else if (i === "visual" && s.visualViewport) {
      const {
        width: u,
        height: _,
        scale: v
      } = s.visualViewport;
      r.value = Math.round(u * v), c.value = Math.round(_ * v)
    } else l ? (r.value = s.innerWidth, c.value = s.innerHeight) : (r.value = s.document.documentElement.clientWidth, c.value = s.document.documentElement.clientHeight)
  };
  d(), Bs(d);
  const p = {
    passive: !0
  };
  return kt("resize", d, p), s && i === "visual" && s.visualViewport && kt(s.visualViewport, "resize", d, p), o && R(Ft("(orientation: portrait)"), () => d()), {
    width: r,
    height: c
  }
}
let es = "",
  ts = "",
  ss = "",
  as = "";
const os = y("0px");

function so(e) {
  if (typeof document > "u") return;
  const s = document.documentElement,
    t = () => {
      s.style.marginRight = es, s.style.overflow = ts, s.style.overflowX = ss, s.style.overflowY = as, os.value = "0px"
    },
    a = () => {
      const o = window.innerWidth - s.offsetWidth;
      o > 0 && (es = s.style.marginRight, s.style.marginRight = `${o}px`, os.value = `${o}px`), ts = s.style.overflow, ss = s.style.overflowX, as = s.style.overflowY, s.style.overflow = "hidden", s.style.overflowX = "hidden", s.style.overflowY = "hidden"
    };
  R(e, o => {
    o ? a() : t()
  }, {
    immediate: !0
  })
}
const ao = 1e3,
  oo = I({
    __name: "CoreFocusTrap",
    props: {
      isActive: {
        type: Boolean
      }
    },
    setup(e) {
      const s = e,
        t = y(),
        a = y(),
        o = y(),
        l = y(),
        i = d => {
          var p, u;
          const {
            activeElement: _
          } = document;
          d && _ === a.value ? (p = t.value) == null || p.focus({
            preventScroll: !0
          }) : !d && _ === t.value && ((u = a.value) == null || u.focus({
            preventScroll: !0
          }))
        },
        r = d => {
          d.key === "Tab" && i(!d.shiftKey)
        };
      q(() => {
        R(() => s.isActive, d => {
          var p;
          d ? ((p = o.value) != null && p.contains(document.activeElement) || (l.value = document.activeElement, $e(() => {
            var u;
            (u = t.value) == null || u.focus({
              preventScroll: !0
            })
          })), document.addEventListener("keydown", r)) : (l.value && l.value.focus({
            preventScroll: !0
          }), document.removeEventListener("keydown", r))
        }, {
          immediate: !0
        })
      }), _t(() => {
        if (document.removeEventListener("keydown", r), l.value) try {
          l.value.focus({
            preventScroll: !0
          })
        } catch {}
      });
      const c = {
        position: "absolute",
        width: "0px",
        height: "0px"
      };
      return (d, p) => (f(), h("div", {
        ref_key: "wrapperRef",
        ref: o
      }, [S("div", {
        ref_key: "focusableStartRef",
        ref: t,
        tabindex: "0",
        style: c
      }, null, 512), E(d.$slots, "default"), S("div", {
        ref_key: "focusableEndRef",
        ref: a,
        tabindex: "0",
        style: c
      }, null, 512)], 512))
    }
  }),
  no = "Escape",
  Ps = {
    VShow: "v-show",
    VIf: "v-if"
  },
  me = {
    Auto: "auto",
    SideSheet: "sideSheet",
    BottomSheet: "bottomSheet"
  },
  As = {
    title: "",
    isOpen: !1,
    isCalloutOpen: !1,
    isInvisibleWhenClosed: !1,
    accessibleBackText: "",
    accessibleCloseText: "",
    accessibleOpenText: "",
    zIndex: ao,
    destroyOnClose: !1,
    forceRender: !1,
    maskClosable: !0,
    hasFullWidthContent: !1,
    displayMode: me.Auto,
    hiddenCalloutDirective: Ps.VIf
  },
  lo = ["aria-label"],
  ro = ["disabled", "aria-label"],
  ns = 300,
  io = 50,
  co = I({
    __name: "CoreSheet",
    props: je({
      title: {},
      isOpen: {
        type: Boolean
      },
      isCalloutOpen: {
        type: Boolean
      },
      isInvisibleWhenClosed: {
        type: Boolean
      },
      accessibleBackText: {},
      accessibleCloseText: {},
      accessibleOpenText: {},
      maskClosable: {
        type: Boolean
      },
      zIndex: {},
      destroyOnClose: {
        type: Boolean
      },
      forceRender: {
        type: Boolean
      },
      hasFullWidthContent: {
        type: Boolean
      },
      displayMode: {},
      sideSheetProps: {},
      bottomSheetProps: {},
      hiddenCalloutDirective: {},
      baseClass: {}
    }, {
      ...As,
      baseClass: "core-sheet"
    }),
    emits: ["update:isOpen", "update:isCalloutOpen"],
    setup(e, {
      emit: s
    }) {
      const t = e,
        a = s,
        o = Ft("(max-width: 767px)"),
        l = m(() => typeof t.bottomSheetProps == "object" && t.bottomSheetProps.isInvisibleWhenClosed !== null ? t.bottomSheetProps.isInvisibleWhenClosed : t.isInvisibleWhenClosed),
        i = m(() => t.displayMode === me.Auto ? o.value ? me.BottomSheet : me.SideSheet : t.displayMode),
        r = y(void 0),
        c = y(t.isCalloutOpen),
        d = y("auto"),
        p = y(!1),
        u = y(null),
        _ = y(null),
        v = y(null),
        b = y(null),
        $ = y(!1),
        T = Ht([0, 0]),
        L = Ht([0, 0]),
        A = y(!1),
        H = y(0),
        F = y(t.isOpen),
        N = m(() => {
          const {
            height: x
          } = to();
          return `${x.value}px`
        }),
        j = st(_, {
          width: 0,
          height: 0
        }, {
          box: "border-box"
        }),
        P = st(v, {
          width: 0,
          height: 0
        }, {
          box: "border-box"
        }),
        ie = st(b, {
          width: 0,
          height: 0
        }, {
          box: "border-box"
        }),
        se = st(b, {
          width: 0,
          height: 0
        }, {
          box: "border-box"
        }),
        ve = m(() => se.height.value);
      so(F);
      const Se = m(() => {
          let x = "";
          return Z.value && (x = getComputedStyle(Z.value)
            .marginBottom.replace("px", "")), j.height.value + P.height.value + ie.height.value + Number(x)
        }),
        Ce = m(() => T[0] - L[0]),
        J = m(() => T[1] - L[1]),
        oe = m(() => Math.max(Math.abs(Ce.value), Math.abs(J.value)) >= 8),
        Ie = m(() => A.value ? "0s" : `${ns}ms`),
        Z = y(null),
        ke = y(0),
        de = y(0),
        M = x => {
          ke.value = x.target.scrollTop
        },
        Y = x => [x.touches[0].clientX, x.touches[0].clientY],
        ne = (x, [ce, ft]) => {
          x[0] = ce, x[1] = ft
        },
        we = () => {
          if (ve.value)
            if (!t.isOpen && J.value > 0) {
              const x = Math.abs(J.value);
              r.value = `${x}px`
            } else {
              const x = H.value - Math.min(J.value, 0) * -1;
              r.value = `${x}px`
            }
        },
        fe = () => {
          Math.abs(J.value) >= io && a("update:isOpen", !t.isOpen), r.value = void 0
        },
        Ne = x => {
          if (x.touches.length !== 1) return;
          const ce = Y(x);
          ne(T, ce), ne(L, ce), u.value && (H.value = Number(u.value.offsetHeight))
        },
        X = x => {
          if (x.preventDefault(), x.touches.length !== 1) return;
          const ce = Y(x);
          ne(L, ce), !A.value && oe.value && (A.value = !0), A.value && we()
        },
        Te = () => {
          A.value && fe(), A.value = !1
        },
        B = () => {
          t.maskClosable && a("update:isOpen", !1)
        },
        ee = x => {
          t.isOpen && x.key === no && a("update:isOpen", !1)
        },
        z = Ot("CoreSheet");
      Ge(() => {
        t.accessibleCloseText || z.warnOnce("Use accessibleCloseText property to make the close button accessible."), !t.accessibleOpenText && !t.isInvisibleWhenClosed && z.warnOnce("Use accessibleOpenText property to make the Pill button accessible."), !t.accessibleBackText && t.isCalloutOpen && z.warnOnce("Use accessibleBackText property to make the back button (left arrow on callouts) accessible.")
      });
      const W = m(() => t.accessibleCloseText ? t.accessibleCloseText : "close"),
        zt = m(() => t.accessibleOpenText ? t.accessibleOpenText : "open"),
        Wt = m(() => t.accessibleBackText ? t.accessibleBackText : "back"),
        Gt = () => {
          a("update:isOpen", !t.isOpen)
        },
        Us = () => {
          a("update:isOpen", !1)
        },
        js = () => {
          a("update:isCalloutOpen", !1)
        };
      q(() => {
        R(() => t.isOpen, x => {
          $.value = !1, setTimeout(() => {
            $.value = !0
          }, ns), x ? (p.value = !0, F.value = !0, document.addEventListener("keydown", ee)) : (document.removeEventListener("keydown", ee), F.value = !1)
        }, {
          immediate: !0
        }), R(() => t.isOpen, x => {
          x || a("update:isCalloutOpen", c.value)
        })
      });
      const qs = m(() => !!(t.forceRender || t.isOpen || p.value && !t.destroyOnClose || !l.value));
      R(() => t.isCalloutOpen, async x => {
        t.isOpen && (x ? (de.value = ke.value, d.value = `${ie.width.value}px`, Z.value && (Z.value.scrollTop = 0)) : (await $e(), Z.value && (Z.value.scrollTop = de.value), d.value = "auto", de.value = 0))
      }), R(o, () => {
        d.value = "auto"
      });
      const Ys = m(() => ({
          [t.baseClass]: !0,
          [`${t.baseClass}--side`]: i.value === me.SideSheet,
          [`${t.baseClass}--bottom`]: i.value === me.BottomSheet,
          [`${t.baseClass}--is-open`]: t.isOpen,
          [`${t.baseClass}--is-transition-ended`]: $.value,
          [`${t.baseClass}--is-invisible-when-closed`]: l.value && !t.isOpen
        })),
        Qs = m(() => ({
          zIndex: t.zIndex
        })),
        Ks = m(() => i.value === me.SideSheet ? {
          minWidth: d.value
        } : {}),
        Zs = m(() => {
          const x = {
            zIndex: t.zIndex
          };
          return i.value === me.BottomSheet && (x.height = t.isOpen && !A.value ? `${Se.value}px` : r.value, x.maxHeight = `calc(${N.value} - 3rem)`, t.isOpen && (x.transition = `height ${Ie.value} ease-out`)), x
        });
      return (x, ce) => qs.value ? (f(), C(bs, {
        key: 0,
        to: "body"
      }, [g(ta, {
        name: `${e.baseClass}__background-pane-transition`
      }, {
        default: w(() => [be(S("div", {
          class: O([`${e.baseClass}__background-pane`, {
            [`${e.baseClass}__background-pane--closable`]: e.maskClosable
          }]),
          style: Ve(Qs.value),
          role: "none",
          "aria-hidden": "true",
          onClick: B
        }, null, 6), [
          [Xe, e.isOpen]
        ])]),
        _: 1
      }, 8, ["name"]), S("div", K(x.$attrs, {
        ref_key: "container",
        ref: u,
        class: Ys.value,
        style: Zs.value,
        "aria-label": e.title,
        "aria-modal": "true",
        role: "dialog"
      }), [g(oo, {
        "is-active": e.isOpen,
        class: O(`${e.baseClass}__wrapper`)
      }, {
        default: w(() => [be(S("div", {
          ref_key: "target",
          ref: _,
          class: O(`${e.baseClass}__handle`)
        }, [E(x.$slots, "coreHandle", {
          handleClick: Gt,
          ariaLabel: e.isOpen ? W.value : zt.value,
          isOpen: e.isOpen,
          isDisabled: l.value && !e.isOpen,
          onTouchStart: Ne,
          onTouchMove: X,
          onTouchEnd: Te
        }, () => [S("button", {
          disabled: l.value && !e.isOpen,
          class: O(`${e.baseClass}__pill-wrapper`),
          "aria-label": e.isOpen ? W.value : zt.value,
          onClick: Gt,
          onTouchstartPassive: Ne,
          onTouchmove: X,
          onTouchend: Te,
          onTouchcancel: Te
        }, [S("span", {
          class: O(`${e.baseClass}__pill`)
        }, null, 2)], 42, ro)])], 2), [
          [Xe, i.value === n(me)
            .BottomSheet
          ]
        ]), S("div", {
          ref_key: "header",
          ref: v,
          class: O(`${e.baseClass}__title`)
        }, [e.isCalloutOpen ? (f(), h("div", {
          key: 0,
          class: O(`${e.baseClass}__back-button`)
        }, [E(x.$slots, "coreBackBtn", {
          handleClick: js,
          ariaLabel: Wt.value
        }, () => [e.isCalloutOpen ? (f(), C(it, {
          key: 0,
          class: O(`${e.baseClass}__back-button`),
          variant: n(rt)
            .Positive,
          icon: "arrow-left",
          size: "small",
          "aria-label": Wt.value,
          onClick: ce[0] || (ce[0] = ft => a("update:isCalloutOpen", !1))
        }, null, 8, ["class", "variant", "aria-label"])) : k("", !0)])], 2)) : k("", !0), x.$slots.icon ? (f(), h("div", {
          key: 1,
          class: O(`${e.baseClass}__icon`)
        }, [E(x.$slots, "icon")], 2)) : k("", !0), S("h3", {
          class: O(`${e.baseClass}__title-text`)
        }, V(e.title), 3), S("div", {
          class: O(`${e.baseClass}__close`)
        }, [E(x.$slots, "coreCloseBtn", {
          handleClick: Us,
          ariaLabel: W.value
        }, () => [g(it, {
          class: O(`${e.baseClass}__close`),
          variant: n(rt)
            .Positive,
          icon: "cross",
          size: "small",
          "aria-label": W.value,
          onClick: ce[1] || (ce[1] = ft => a("update:isOpen", !1))
        }, null, 8, ["class", "variant", "aria-label"])])], 2)], 2), S("div", {
          ref_key: "scrollContainer",
          ref: Z,
          class: O([`${e.baseClass}__content`, {
            [`${e.baseClass}__content--spacing`]: !e.hasFullWidthContent
          }]),
          style: Ve(Ks.value),
          role: "document",
          onScrollPassive: M
        }, [S("div", {
          ref_key: "content",
          ref: b,
          class: O(`${e.baseClass}__content-container`)
        }, [e.hiddenCalloutDirective === n(Ps)
          .VIf ? (f(), h(D, {
            key: 0
          }, [e.isCalloutOpen ? E(x.$slots, "callout", {
            key: 0
          }) : E(x.$slots, "default", {
            key: 1
          })], 64)) : (f(), h(D, {
            key: 1
          }, [be(S("div", null, [E(x.$slots, "callout")], 512), [
            [Xe, e.isCalloutOpen]
          ]), be(S("div", null, [E(x.$slots, "default")], 512), [
            [Xe, !e.isCalloutOpen]
          ])], 64))
        ], 2)], 38)]),
        _: 3
      }, 8, ["is-active", "class"])], 16, lo)])) : k("", !0)
    }
  }),
  yt = "ods-sheet",
  uo = I({
    __name: "OdsSheet",
    props: je({
      title: {},
      isOpen: {
        type: Boolean
      },
      isCalloutOpen: {
        type: Boolean
      },
      isInvisibleWhenClosed: {
        type: Boolean
      },
      accessibleBackText: {},
      accessibleCloseText: {},
      accessibleOpenText: {},
      maskClosable: {
        type: Boolean
      },
      zIndex: {},
      destroyOnClose: {
        type: Boolean
      },
      forceRender: {
        type: Boolean
      },
      hasFullWidthContent: {
        type: Boolean
      },
      displayMode: {},
      sideSheetProps: {},
      bottomSheetProps: {},
      hiddenCalloutDirective: {}
    }, {
      ...As
    }),
    emits: ["update:isOpen", "update:isCalloutOpen"],
    setup(e, {
      emit: s
    }) {
      const t = e,
        a = s;
      return (o, l) => (f(), C(n(co), K(t, {
        "base-class": yt,
        "onUpdate:isOpen": l[0] || (l[0] = i => a("update:isOpen", i)),
        "onUpdate:isCalloutOpen": l[1] || (l[1] = i => a("update:isCalloutOpen", i))
      }), ea({
        coreBackBtn: w(({
          handleClick: i,
          ariaLabel: r
        }) => [g(He, {
          class: O(`${yt}__back-button`),
          variant: n(rt)
            .Positive,
          icon: "arrow-left",
          size: "small",
          "aria-label": r,
          onClick: i
        }, null, 8, ["class", "variant", "aria-label", "onClick"])]),
        coreCloseBtn: w(({
          handleClick: i,
          ariaLabel: r
        }) => [g(He, {
          class: O(`${yt}__close`),
          variant: n(rt)
            .Positive,
          icon: "cross",
          size: "small",
          "aria-label": r,
          onClick: i
        }, null, 8, ["class", "variant", "aria-label", "onClick"])]),
        default: w(() => [o.$slots.default ? E(o.$slots, "default", {
          key: 0
        }) : k("", !0)]),
        _: 2
      }, [o.$slots.callout ? {
        name: "callout",
        fn: w(() => [E(o.$slots, "callout")]),
        key: "0"
      } : void 0, o.$slots.icon ? {
        name: "icon",
        fn: w(() => [E(o.$slots, "icon")]),
        key: "1"
      } : void 0]), 1040))
    }
  }),
  po = {
    max: 7
  },
  Ms = I({
    __name: "CorePaginationIndicator",
    props: je({
      current: {},
      media: {},
      max: {},
      labels: {},
      baseClass: {},
      activeElementSize: {},
      elementSize: {},
      gutter: {}
    }, {
      ...po,
      baseClass: "core-pagination-indicator",
      elementSize: 6,
      activeElementSize: 6,
      gutter: 4
    }),
    setup(e, {
      expose: s
    }) {
      vt(c => ({
        v6132ff10: o.value
      }));
      const t = e,
        a = y(null),
        o = m(() => Math.min(t.max * t.elementSize + (t.max - 1) * t.gutter + t.activeElementSize, t.media.length * t.elementSize + (t.max - 1) * t.gutter + t.activeElementSize) + "px"),
        l = (c, d = "smooth") => {
          if (a.value) {
            const p = a.value[c];
            if (!p) return;
            const u = p.parentElement,
              _ = (t.elementSize + t.gutter) * (t.current - t.max + 2);
            u.scroll && u.scroll({
              left: Math.max(0, _),
              behavior: d
            })
          }
        };
      R(() => t.current, c => {
        l(c, "instant")
      }), q(() => l(t.current, "instant"));
      const i = c => {
        if (t.media.length <= t.max) return !1;
        const d = t.current === t.media.length - 1;
        if (t.current >= t.max - 1) {
          let p = !1;
          if (p = c < t.current - (t.max - 3), d && (p = c < t.media.length - t.max + 1), p) return p
        }
        if (c > Math.max(t.current, t.max - 2)) return !0
      };

      function r(c) {
        c.preventDefault()
      }
      return s({
        width: o
      }), (c, d) => t.media.length > 1 ? (f(), h("div", {
        key: 0,
        class: O(e.baseClass),
        tabindex: "-1",
        onWheel: r,
        onTouchmove: r
      }, [(f(!0), h(D, null, te(e.media, (p, u) => {
        var _;
        return f(), h("div", {
          key: u,
          ref_for: !0,
          ref_key: "items",
          ref: a,
          class: O([`${e.baseClass}__item`, {
            [`${e.baseClass}__item--active`]: u === e.current,
            [`${e.baseClass}__item--type-${p}`]: !0,
            [`${e.baseClass}__item--small`]: i(u)
          }])
        }, [u === e.current && (_ = t.labels) != null && _[u] ? (f(), h("span", {
          key: 0,
          class: O(`${e.baseClass}__label`)
        }, V(t.labels[u]), 3)) : k("", !0), p === "media" ? E(c.$slots, "coreIcon", {
          key: 1,
          iconName: "triangle"
        }, () => [g(sa, {
          class: O(`${e.baseClass}__icon`),
          name: "triangle"
        }, null, 8, ["class"])]) : (f(), h("div", {
          key: 2,
          class: O(`${e.baseClass}__icon`)
        }, null, 2))], 2)
      }), 128))], 34)) : k("", !0)
    }
  }),
  ls = "ods-pagination-indicator",
  _o = I({
    __name: "OdsPaginationIndicator",
    props: {
      current: {},
      media: {},
      max: {
        default: 7
      },
      labels: {}
    },
    setup(e) {
      vt(o => ({
        f63461f0: a.value
      }));
      const s = e,
        t = Ue("paginationRef"),
        a = m(() => {
          var o;
          return (o = t?.value) == null ? void 0 : o.width
        });
      return (o, l) => (f(), C(n(Ms), K(s, {
        ref_key: "paginationRef",
        ref: t,
        "base-class": ls
      }), {
        coreIcon: w(({
          iconName: i
        }) => [g(gs, {
          class: O(`${ls}__icon`),
          name: i
        }, null, 8, ["class", "name"])]),
        _: 1
      }, 16))
    }
  }),
  vo = qe(_o, [
    ["__scopeId", "data-v-7282e547"]
  ]),
  Es = {
    Grid: "grid"
  },
  fo = {
    Medium: "medium"
  },
  wt = {
    DynamicPagination: "dynamicPagination",
    ScrollBar: "scrollBar"
  },
  Ns = {
    None: "none",
    Off: "off",
    Polite: "polite",
    Assertive: "assertive"
  },
  mo = 300,
  Rs = {
    title: "",
    previousSlidesTitle: "previous slides",
    nextSlidesTitle: "next slides",
    ariaLive: Ns.Polite,
    ariaRoleDescription: "carousel",
    ariaRoleDescriptionItem: "slide",
    ariaSlideLabelTemplate: "{0}/{1}",
    layout: Es.Grid,
    itemSize: fo.Medium,
    scrollIndicator: wt.ScrollBar,
    gutter: 1,
    fullWidth: !1,
    skipCarouselLinkTitle: "",
    as: "ul",
    subgrid: !1,
    showScrollIndicator: !0,
    showArrows: !0
  },
  ho = ["aria-label", "aria-roledescription"],
  bo = ["id"],
  rs = .5,
  go = I({
    __name: "CoreCarousel",
    props: je({
      layout: {},
      itemSize: {},
      scrollIndicator: {},
      showScrollIndicator: {
        type: Boolean
      },
      fullWidth: {
        type: Boolean
      },
      gutter: {},
      title: {},
      ariaLive: {},
      ariaRoleDescription: {},
      ariaRoleDescriptionItem: {},
      ariaSlideLabelTemplate: {},
      previousSlidesTitle: {},
      nextSlidesTitle: {},
      skipCarouselLinkTitle: {},
      as: {},
      subgrid: {
        type: Boolean
      },
      showArrows: {
        type: Boolean
      },
      baseClass: {},
      componentName: {},
      slideComponentName: {}
    }, {
      ...Rs,
      baseClass: "core-carousel",
      componentName: "CoreCarousel",
      slideComponentName: "CoreCarouselSlide"
    }),
    emits: ["update:slides", "click:controls"],
    setup(e, {
      emit: s
    }) {
      const t = y(null),
        a = y(!1),
        o = y(0),
        l = y(0),
        i = y(0),
        r = y([]),
        c = y(0),
        d = eo(t),
        p = Ot("OdsCarousel"),
        u = Ft("(max-width: 767px)"),
        _ = e,
        v = s;
      Ge(() => {
        d.value && j()
      }), Ge(() => {
        _.fullWidth && !_.gutter && p.errorOnce("Property gutter is required when fullWidth mode is enabled")
      });
      const b = m(() => i.value / l.value * 100),
        $ = B => {
          B >= c.value ? a.value = !0 : B = 0, $e(() => {
            t.value.scroll({
              left: B,
              behavior: "smooth"
            }), setTimeout(() => {
              a.value = !1
            }, mo)
          })
        },
        T = () => {
          if (v("click:controls", "previous"), t.value) {
            const B = t?.value.scrollLeft - t.value.offsetWidth;
            $(B)
          }
        },
        L = () => {
          if (v("click:controls", "next"), t.value) {
            const B = t.value.scrollLeft + t.value.offsetWidth;
            $(B)
          }
        },
        A = B => _.ariaSlideLabelTemplate.replace("{0}", (B + 1)
          .toString())
        .replace("{1}", se.value.length.toString()),
        H = B => {
          const ee = B.target;
          o.value = ee.scrollLeft
        },
        F = y(),
        N = B => {
          var ee;
          B.forEach(W => {
            W.intersectionRatio > rs ? W.target.setAttribute("data-visible", "true") : W.target.setAttribute("data-visible", "false")
          });
          const z = [];
          (ee = t.value) == null || ee.querySelectorAll('[data-visible="true"]')
            .forEach(W => {
              z.push(Number(W.getAttribute("data-index")))
            }), r.value = z, v("update:slides", z)
        },
        j = () => {
          t.value && (i.value = t.value.offsetWidth, l.value = t.value.scrollWidth, o.value = t.value.scrollLeft)
        };
      q(() => {
        t.value && (j(), window.addEventListener("resize", j), F.value = new IntersectionObserver(N, {
            root: t.value,
            threshold: rs
          }), Array.from(t.value.children)
          .forEach(B => {
            F.value && F.value.observe(B)
          }))
      }), ys(() => {
        window.removeEventListener("resize", j)
      });
      const P = Zt("carousel"),
        ie = Zt("carousel skip link"),
        se = Va(_.componentName, _.slideComponentName),
        ve = m(() => l.value > i.value),
        Se = m(() => i.value !== 0 && l.value !== 0 ? i.value >= l.value : !1),
        Ce = m(() => ({
          [_.baseClass]: !0,
          [`${_.baseClass}--center-aligned`]: Se.value,
          [`${_.baseClass}--layout-${_.layout}`]: !0,
          [`${_.baseClass}--item-size-${_.itemSize}`]: !0,
          [`${_.baseClass}--full-width`]: _.fullWidth,
          [`${_.baseClass}--scroll-active`]: a.value,
          [`${_.baseClass}--scroll-indicator-${_.scrollIndicator}`]: !0,
          [`${_.baseClass}--show-arrows`]: _.showArrows
        })),
        J = m(() => o.value === 0),
        oe = m(() => {
          if (t.value) {
            const B = t.value.scrollWidth - t.value.offsetWidth;
            return o.value === B
          }
          return !1
        }),
        Ie = m(() => o.value / l.value * 100),
        Z = m(() => l.value !== 0 && i.value !== 0 ? Math.floor(i.value / c.value) : 0),
        ke = m(() => Z.value * c.value),
        de = m(() => se.value.length > 0 && Z.value > 0 ? Math.ceil(se.value.length / Z.value) : 0),
        M = m(() => new Array(de.value)
          .fill(null)
          .map(() => "image")),
        Y = m(() => {
          const B = Math.round(o.value / ke.value);
          return Math.min(B, de.value - 1)
        }),
        ne = m(() => o.value === 0 && _.skipCarouselLinkTitle),
        we = m(() => _.fullWidth ? {
          "--ods-i-carousel-gutter": "var(--ods-carousel-gutter, " + _.gutter + "rem)"
        } : null),
        fe = m(() => u.value ? "small" : "medium"),
        Ne = m(() => ve.value && _.showArrows);
      Ss(() => {
        var B;
        if (t.value) {
          j();
          const ee = (B = t?.value) == null ? void 0 : B.children[0];
          if (_.layout === Es.Grid) {
            c.value = ee.offsetWidth;
            return
          }
          const z = getComputedStyle(t.value)
            .columnGap,
            W = Number(z.replace("px", ""));
          c.value = ee.offsetWidth + W
        }
      });
      const X = B => {
          var ee, z;
          return ((z = (ee = B?.children) == null ? void 0 : ee.default()) == null ? void 0 : z.length) > 0 ? B.children.default()[0] : B.children.default()
        },
        Te = B => {
          if (B !== "li") return "group"
        };
      return (B, ee) => (f(), h("section", {
        "aria-label": e.title,
        "aria-roledescription": e.ariaRoleDescription,
        class: O(Ce.value),
        style: Ve(we.value)
      }, [S("div", {
        class: O(`${e.baseClass}__track-section`)
      }, [ne.value ? (f(), h("div", {
        key: 0,
        class: O(`${e.baseClass}__skip-section-button-wrapper`)
      }, [E(B.$slots, "coreSkipCarouselButton", {
        skipCarouselLink: n(ie),
        skipCarouselLinkTitle: e.skipCarouselLinkTitle
      }, () => [g(oa, {
        as: "a",
        href: `#${n(ie)}`,
        theme: "positive",
        level: "secondary",
        label: e.skipCarouselLinkTitle
      }, null, 8, ["href", "label"])], !0)], 2)) : k("", !0), Ne.value ? (f(), h("div", {
        key: 1,
        class: O(`${e.baseClass}__buttons-wrapper`)
      }, [E(B.$slots, "coreArrowLeft", {
        handleClick: T,
        isDisabled: J.value,
        ariaLabel: e.previousSlidesTitle,
        ariaControls: n(P),
        size: fe.value
      }, () => [g(it, {
        "is-disabled": J.value,
        class: O([`${e.baseClass}__button`, `${e.baseClass}__button--previous`, {
          [`${e.baseClass}__button--hidden`]: J.value
        }]),
        icon: "arrow-left",
        variant: "discrete",
        "aria-label": e.previousSlidesTitle,
        "aria-controls": n(P),
        size: fe.value,
        onClick: T
      }, null, 8, ["is-disabled", "class", "aria-label", "aria-controls", "size"])], !0), E(B.$slots, "coreArrowRight", {
        handleClick: L,
        isDisabled: oe.value,
        ariaLabel: e.nextSlidesTitle,
        ariaControls: n(P),
        size: fe.value
      }, () => [g(it, {
        "is-disabled": oe.value,
        class: O([`${e.baseClass}__button`, `${e.baseClass}__button--next`, {
          [`${e.baseClass}__button--hidden`]: oe.value
        }]),
        icon: "arrow-right",
        variant: "discrete",
        "aria-label": e.nextSlidesTitle,
        "aria-controls": n(P),
        size: fe.value,
        onClick: L
      }, null, 8, ["is-disabled", "class", "aria-label", "aria-controls", "size"])], !0)], 2)) : k("", !0), (f(), C(pe(e.as), {
        id: n(P),
        ref_key: "scrollContainer",
        ref: t,
        class: O(`${e.baseClass}__track`),
        "aria-live": e.ariaLive !== n(Ns)
          .None ? e.ariaLive : void 0,
        onScrollPassive: H
      }, {
        default: w(() => [e.subgrid ? (f(!0), h(D, {
          key: 0
        }, te(n(se), (z, W) => (f(), C(pe(X(z)), K({
          key: W,
          class: `${e.baseClass}__track-item`,
          role: Te(n(ht)(z, "as", "li")),
          "aria-roledescription": e.ariaRoleDescriptionItem,
          "aria-label": A(W % n(se)
            .length),
          "data-index": W,
          "data-visible": "false"
        }, {
          ref_for: !0
        }, z.props), null, 16, ["class", "role", "aria-roledescription", "aria-label", "data-index"]))), 128)) : (f(!0), h(D, {
          key: 1
        }, te(n(se), (z, W) => (f(), C(pe(n(ht)(z, "as", "li")), K({
          key: W,
          class: `${e.baseClass}__track-item`,
          role: Te(n(ht)(z, "as", "li")),
          "aria-roledescription": e.ariaRoleDescriptionItem,
          "aria-label": A(W % n(se)
            .length),
          "data-index": W,
          "data-visible": "false"
        }, {
          ref_for: !0
        }, z.props), {
          default: w(() => [(f(), C(pe(z)))]),
          _: 2
        }, 1040, ["class", "role", "aria-roledescription", "aria-label", "data-index"]))), 128))]),
        _: 1
      }, 40, ["id", "class", "aria-live"]))], 2), e.showScrollIndicator && ve.value ? (f(), h("div", {
        key: 0,
        class: O(`${e.baseClass}__progress-container`)
      }, [e.scrollIndicator === n(wt)
        .DynamicPagination ? (f(), h("div", {
          key: 0,
          class: O(`${e.baseClass}__pagination-indicator`)
        }, [E(B.$slots, "corePaginationIndicator", {
          media: M.value,
          current: Y.value
        }, () => [g(Ms, {
          media: M.value,
          current: Y.value
        }, null, 8, ["media", "current"])], !0)], 2)) : k("", !0), e.scrollIndicator === n(wt)
        .ScrollBar ? (f(), h("div", {
          key: 1,
          class: O(`${e.baseClass}__progress`)
        }, [S("div", {
          class: O(`${e.baseClass}__progress-bar`),
          style: Ve({
            width: b.value + "%",
            left: Ie.value + "%"
          })
        }, null, 6)], 2)) : k("", !0)
      ], 2)) : k("", !0), S("div", {
        id: n(ie)
      }, null, 8, bo)], 14, ho))
    }
  }),
  yo = aa(go, [
    ["__scopeId", "data-v-731520f2"]
  ]),
  Oe = "ods-carousel",
  So = I({
    __name: "OdsCarousel",
    props: je({
      layout: {},
      itemSize: {},
      scrollIndicator: {},
      showScrollIndicator: {
        type: Boolean
      },
      fullWidth: {
        type: Boolean
      },
      gutter: {},
      title: {},
      ariaLive: {},
      ariaRoleDescription: {},
      ariaRoleDescriptionItem: {},
      ariaSlideLabelTemplate: {},
      previousSlidesTitle: {},
      nextSlidesTitle: {},
      skipCarouselLinkTitle: {},
      as: {},
      subgrid: {
        type: Boolean
      },
      showArrows: {
        type: Boolean
      }
    }, {
      ...Rs
    }),
    emits: ["update:slides", "click:controls"],
    setup(e, {
      emit: s
    }) {
      const t = e,
        a = s;
      return (o, l) => (f(), C(n(yo), K(t, {
        "base-class": Oe,
        "component-name": "OdsCarousel",
        "slide-component-name": "OdsCarouselSlide",
        "onUpdate:slides": l[0] || (l[0] = i => a("update:slides", i)),
        "onClick:controls": l[1] || (l[1] = i => a("click:controls", i))
      }), {
        coreSkipCarouselButton: w(({
          skipCarouselLink: i,
          skipCarouselLinkTitle: r
        }) => [g(ae, {
          as: "a",
          href: `#${i}`,
          theme: "positive",
          level: "secondary",
          label: r
        }, null, 8, ["href", "label"])]),
        coreArrowLeft: w(({
          handleClick: i,
          isDisabled: r,
          ariaLabel: c,
          ariaControls: d,
          size: p
        }) => [g(He, {
          "is-disabled": r,
          class: O([`${Oe}__button`, `${Oe}__button--previous`, {
            [`${Oe}__button--hidden`]: r
          }]),
          icon: "arrow-left",
          variant: "discrete",
          "aria-label": c,
          "aria-controls": d,
          size: p,
          onClick: i
        }, null, 8, ["is-disabled", "class", "aria-label", "aria-controls", "size", "onClick"])]),
        coreArrowRight: w(({
          handleClick: i,
          isDisabled: r,
          ariaLabel: c,
          ariaControls: d,
          size: p
        }) => [g(He, {
          "is-disabled": r,
          class: O([`${Oe}__button`, `${Oe}__button--next`, {
            [`${Oe}__button--hidden`]: r
          }]),
          icon: "arrow-right",
          variant: "discrete",
          "aria-label": c,
          "aria-controls": d,
          size: p,
          onClick: i
        }, null, 8, ["is-disabled", "class", "aria-label", "aria-controls", "size", "onClick"])]),
        corePaginationIndicator: w(({
          media: i,
          current: r
        }) => [g(vo, {
          media: i,
          current: r
        }, null, 8, ["media", "current"])]),
        default: w(() => [E(o.$slots, "default", {}, void 0, !0)]),
        _: 3
      }, 16))
    }
  }),
  Dt = qe(So, [
    ["__scopeId", "data-v-c0d41718"]
  ]),
  Co = I({
    inheritAttrs: !1,
    __name: "CoreCarouselSlide",
    props: {
      as: {}
    },
    setup(e) {
      return (s, t) => E(s.$slots, "default")
    }
  }),
  ut = I({
    inheritAttrs: !1,
    __name: "OdsCarouselSlide",
    props: {
      as: {}
    },
    setup(e) {
      const s = e;
      return (t, a) => (f(), C(n(Co), Bt(Pt(s)), {
        default: w(() => [E(t.$slots, "default")]),
        _: 3
      }, 16))
    }
  }),
  ko = {},
  wo = {
    class: "ods-skeleton"
  };

function xo(e, s) {
  return f(), h("div", wo)
}
const Re = qe(ko, [
    ["render", xo],
    ["__scopeId", "data-v-b695f9b6"]
  ]),
  $o = I({
    __name: "OdsFocusTrap",
    props: {
      isActive: {
        type: Boolean
      }
    },
    setup(e) {
      const s = e,
        t = y(),
        a = y(),
        o = y(),
        l = y(),
        i = c => {
          var d, p;
          const {
            activeElement: u
          } = document;
          c && u === a.value ? (d = t.value) == null || d.focus({
            preventScroll: !0
          }) : !c && u === t.value && ((p = a.value) == null || p.focus({
            preventScroll: !0
          }))
        },
        r = c => {
          c.key === "Tab" && i(!c.shiftKey)
        };
      return q(() => {
        R(() => s.isActive, c => {
          var d;
          c ? ((d = o.value) != null && d.contains(document.activeElement) || (l.value = document.activeElement, $e(() => {
            var p;
            (p = t.value) == null || p.focus({
              preventScroll: !0
            })
          })), document.addEventListener("keydown", r)) : (l.value && l.value.focus({
            preventScroll: !0
          }), document.removeEventListener("keydown", r))
        }, {
          immediate: !0
        })
      }), _t(() => {
        if (document.removeEventListener("keydown", r), l.value) try {
          l.value.focus({
            preventScroll: !0
          })
        } catch {}
      }), (c, d) => (f(), h("div", {
        ref_key: "wrapperRef",
        ref: o
      }, [S("div", {
        ref_key: "focusableStartRef",
        ref: t,
        tabindex: "0",
        class: "ods-focus-trap-ref"
      }, null, 512), E(c.$slots, "default"), S("div", {
        ref_key: "focusableEndRef",
        ref: a,
        tabindex: "0",
        class: "ods-focus-trap-ref"
      }, null, 512)], 512))
    }
  }),
  Io = {
    Standard: "standard"
  },
  xt = {
    Timed: "Timed",
    Feedback: "feedback"
  },
  To = {
    class: "ods-snack-bar-item__layout"
  },
  Oo = {
    class: "ods-snack-bar-item__content"
  },
  Lo = {
    class: "ods-snack-bar-item__message"
  },
  Bo = {
    key: 0,
    class: "ods-snack-bar-item__footer"
  },
  Po = I({
    __name: "OdsSnackBarItem",
    props: {
      message: {},
      buttonText: {
        default: ""
      },
      isError: {
        type: Boolean,
        default: !1
      },
      isSuccess: {
        type: Boolean,
        default: !1
      },
      closeClick: {
        type: Function,
        default: () => {}
      },
      buttonClick: {
        type: Function,
        default: () => {}
      },
      type: {
        default: Io.Standard
      },
      messageType: {},
      nextFocusTargetSelector: {}
    },
    emits: ["close"],
    setup(e, {
      emit: s
    }) {
      const t = e,
        a = s,
        o = m(() => t.isError ? "exclamation-triangle" : t.isSuccess ? "hook-circle" : "placeholder"),
        l = m(() => ({
          "ods-snack-bar-item__icon": !0,
          "ods-snack-bar-item__icon--error": t.isError,
          "ods-snack-bar-item__icon--success": t.isSuccess
        })),
        i = y(),
        r = y(null),
        c = y(null),
        d = y(!1),
        p = () => {
          if (r.value) {
            const T = r.value.ref.offsetWidth,
              L = c.value.offsetWidth;
            T > L / 2 && (d.value = !0)
          }
        },
        u = () => {
          let T = i.value;
          if (t.nextFocusTargetSelector) {
            const L = document.querySelector(t.nextFocusTargetSelector);
            L && (T = L)
          }
          if (T) try {
            T.focus({
              preventScroll: !0
            })
          } catch {}
        };
      q(() => {
        i.value = document.activeElement
      }), _t(() => {
        $e(u)
      }), q(p), Ss(p);
      const _ = () => {
          a("close"), t.closeClick()
        },
        v = () => {
          a("close"), t.buttonClick()
        },
        b = m(() => ({
          "ods-snack-bar-item": !0,
          [`ods-snack-bar-item--type-${t.type}`]: !0
        })),
        $ = m(() => t.type === "multiline" || d.value);
      return (T, L) => (f(), h("div", {
        ref_key: "notificationContainer",
        ref: c,
        class: O(b.value),
        role: "alert"
      }, [g($o, {
        "is-active": e.messageType === n(xt)
          .Feedback
      }, {
        default: w(() => [S("div", To, [S("div", Oo, [e.isError || e.isSuccess ? (f(), C(gs, {
          key: 0,
          class: O(l.value),
          name: o.value
        }, null, 8, ["class", "name"])) : k("", !0), S("div", Lo, V(e.message), 1)]), e.buttonText && !$.value ? (f(), C(ae, {
          key: 0,
          ref_key: "feedbackButton",
          ref: r,
          class: "ods-snack-bar-item__button",
          label: e.buttonText,
          level: "tertiary",
          onClick: v
        }, null, 8, ["label"])) : k("", !0), g(He, {
          class: "ods-snack-bar-item__button-close",
          icon: "close",
          size: "small",
          variant: "negative",
          onClick: _
        })]), e.buttonText && $.value ? (f(), h("div", Bo, [g(ae, {
          class: "ods-snack-bar-item__button",
          label: e.buttonText,
          level: "tertiary",
          onClick: v
        }, null, 8, ["label"])])) : k("", !0)]),
        _: 1
      }, 8, ["is-active"])], 2))
    }
  }),
  is = qe(Po, [
    ["__scopeId", "data-v-66e6c7df"]
  ]),
  Ao = 1e3,
  Mo = {
    class: "ods-snack-bar__message-spot ods-snack-bar__message-spot--top"
  },
  Eo = {
    class: "ods-snack-bar__message-spot ods-snack-bar__message-spot--center"
  },
  cs = 3,
  No = 300,
  Ro = I({
    inheritAttrs: !1,
    __name: "OdsSnackBar",
    props: {
      eventName: {
        default: "OdsSnackBarMessage"
      },
      themeClass: {
        default: "ods-brand-lidl ods-theme-promotion"
      },
      zIndex: {
        default: Ao
      }
    },
    setup(e) {
      vt(u => ({
        v01aae92a: u.zIndex
      }));
      const s = e,
        t = y([]),
        a = y([]),
        o = y({}),
        l = u => {
          let _ = 0,
            v, b;
          if (u.length === 0) return _;
          for (v = 0; v < u.length; v++) b = u.charCodeAt(v), _ = (_ << 5) - _ + b, _ |= 0;
          return _
        },
        i = (u, _) => {
          window.clearTimeout(o.value[u]), o.value[u] = void 0, window.setTimeout(() => {
            t.value = t.value.filter(v => v.id !== u)
          }, _ ? 0 : No)
        },
        r = u => {
          a.value = a.value.filter((_, v) => v !== u)
        },
        c = u => {
          const _ = u.message.length * 60 * 1.5,
            v = 1e4,
            b = 4e3;
          return _ > v ? v : _ < b ? b : _
        },
        d = u => {
          const _ = u.detail,
            v = l(_.message + _.buttonText + _.isError + _.isSuccess);
          if (_.buttonText) a.value.length === cs && r(0), a.value.push({
            ..._,
            id: v
          });
          else {
            if (t.value.length === cs) {
              const {
                id: T
              } = t.value[0];
              i(T, !0)
            }
            const b = o.value[v];
            b || window.clearTimeout(b);
            const $ = c(_);
            t.value.push({
              ..._,
              id: v
            }), o.value[v] = window.setTimeout(() => {
              i(v, !0)
            }, $)
          }
        };
      q(() => {
        document.addEventListener(s.eventName, d)
      }), ys(() => {
        document.removeEventListener(s.eventName, d)
      });
      const p = At();
      return (u, _) => (f(), C(bs, {
        to: "body"
      }, [S("div", K({
        class: ["ods-snack-bar", e.themeClass]
      }, n(p)), [S("div", Mo, [g(Ut, {
        name: "ods-snack-bar__list",
        tag: "div",
        class: "ods-snack-bar__list"
      }, {
        default: w(() => [(f(!0), h(D, null, te(t.value, (v, b) => (f(), C(is, {
          key: b,
          message: v.message,
          "is-error": v.isError,
          "is-success": v.isSuccess,
          "button-text": v.buttonText,
          type: v.type,
          "data-messages": v.id,
          class: "ods-snack-bar__message ods-snack-bar__message--is-entering",
          "close-click": v.closeClick,
          "button-click": v.buttonClick,
          "message-type": n(xt)
            .Timed,
          "next-focus-target-selector": v.nextFocusTargetSelector,
          onClose: $ => i(v.id, !1)
        }, null, 8, ["message", "is-error", "is-success", "button-text", "type", "data-messages", "close-click", "button-click", "message-type", "next-focus-target-selector", "onClose"]))), 128))]),
        _: 1
      })]), S("div", Eo, [g(Ut, {
        name: "ods-snack-bar__list",
        tag: "div",
        class: "ods-snack-bar__list ods-snack-bar__list--reverse"
      }, {
        default: w(() => [(f(!0), h(D, null, te(a.value, (v, b) => (f(), C(is, {
          key: b,
          message: v.message,
          "is-error": v.isError,
          "is-success": v.isSuccess,
          "button-text": v.buttonText,
          "data-messages": v.id,
          type: v.type,
          class: "ods-snack-bar__message ods-snack-bar__message--is-entering",
          "close-click": v.closeClick,
          "button-click": v.buttonClick,
          "message-type": n(xt)
            .Feedback,
          "next-focus-target-selector": v.nextFocusTargetSelector,
          onClose: $ => r(b)
        }, null, 8, ["message", "is-error", "is-success", "button-text", "data-messages", "type", "close-click", "button-click", "message-type", "next-focus-target-selector", "onClose"]))), 128))]),
        _: 1
      })])], 16)]))
    }
  }),
  Fo = qe(Ro, [
    ["__scopeId", "data-v-c81cb238"]
  ]),
  us = e => e.replace(/[A-Z]/g, (s, t) => t === 0 ? s.toLowerCase() : "-" + s.toLowerCase()),
  Do = (e, s, t) => {
    if (e.props) {
      if (s in e.props) return e.props[s];
      if (us(s) in e.props) return e.props[us(s)]
    }
    return t
  },
  Vo = (e, s) => {
    const t = Ea(e),
      a = ms(),
      o = m(() => a.default ? a.default() : []),
      l = i => i ? i.reduce((r, c) => {
        var d;
        return c.type === D ? [...r, ...l(c.children)] : ((d = c.type) == null ? void 0 : d.__name) === s ? [...r, c] : (t.error(`The ${e} default child slot is wrong type, please use ${s}`), r)
      }, []) : [];
    return m(() => l(o.value))
  },
  Ke = na ? window : void 0;

function lt(e) {
  var s;
  const t = Q(e);
  return (s = t?.$el) !== null && s !== void 0 ? s : t
}

function $t(...e) {
  const s = (a, o, l, i) => (a.addEventListener(o, l, i), () => a.removeEventListener(o, l, i)),
    t = m(() => {
      const a = ot(Q(e[0]))
        .filter(o => o != null);
      return a.every(o => typeof o != "string") ? a : void 0
    });
  return la(() => {
    var a, o;
    return [(a = (o = t.value) === null || o === void 0 ? void 0 : o.map(l => lt(l))) !== null && a !== void 0 ? a : [Ke].filter(l => l != null), ot(Q(t.value ? e[1] : e[0])), ot(n(t.value ? e[2] : e[1])), Q(t.value ? e[3] : e[2])]
  }, ([a, o, l, i], r, c) => {
    if (!a?.length || !o?.length || !l?.length) return;
    const d = ua(i) ? {
        ...i
      } : i,
      p = a.flatMap(u => o.flatMap(_ => l.map(v => s(u, _, v, d))));
    c(() => {
      p.forEach(u => u())
    })
  }, {
    flush: "post"
  })
}

function zo() {
  const e = U(!1),
    s = pt();
  return s && q(() => {
    e.value = !0
  }, s), e
}

function Fs(e) {
  const s = zo();
  return m(() => (s.value, !!e()))
}
const Wo = Symbol("vueuse-ssr-width");

function Go() {
  const e = Lt() ? ia(Wo, null) : null;
  return typeof e == "number" ? e : void 0
}

function Fe(e, s = {}) {
  const {
    window: t = Ke,
    ssrWidth: a = Go()
  } = s, o = Fs(() => t && "matchMedia" in t && typeof t.matchMedia == "function"), l = U(typeof a == "number"), i = U(), r = U(!1), c = d => {
    r.value = d.matches
  };
  return Ge(() => {
    if (l.value) {
      l.value = !o.value, r.value = Q(e)
        .split(",")
        .some(d => {
          const p = d.includes("not all"),
            u = d.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),
            _ = d.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
          let v = !!(u || _);
          return u && v && (v = a >= jt(u[1])), _ && v && (v = a <= jt(_[1])), p ? !v : v
        });
      return
    }
    o.value && (i.value = t.matchMedia(Q(e)), r.value = i.value.matches)
  }), $t(i, "change", c, {
    passive: !0
  }), m(() => r.value)
}

function It(e, s, t = {}) {
  const {
    root: a,
    rootMargin: o,
    threshold: l = 0,
    window: i = Ke,
    immediate: r = !0
  } = t, c = Fs(() => i && "IntersectionObserver" in i), d = m(() => ot(Q(e))
    .map(lt)
    .filter(pa));
  let p = mt;
  const u = U(r),
    _ = c.value ? R(() => [d.value, lt(a), Q(o), u.value], ([b, $, T]) => {
      if (p(), !u.value || !b.length) return;
      const L = new IntersectionObserver(s, {
        root: lt($),
        rootMargin: T,
        threshold: l
      });
      b.forEach(A => A && L.observe(A)), p = () => {
        L.disconnect(), p = mt
      }
    }, {
      immediate: r,
      flush: "post"
    }) : mt,
    v = () => {
      p(), _(), u.value = !1
    };
  return ca(v), {
    isSupported: c,
    isActive: u,
    pause() {
      p(), u.value = !1
    },
    resume() {
      u.value = !0
    },
    stop: v
  }
}

function dt(e, s = {}) {
  const {
    window: t = Ke,
    scrollTarget: a,
    threshold: o = 0,
    rootMargin: l,
    once: i = !1,
    initialValue: r = !1
  } = s, c = U(r), {
    stop: d
  } = It(e, p => {
    let u = c.value,
      _ = 0;
    for (const v of p) v.time >= _ && (_ = v.time, u = v.isIntersecting);
    c.value = u, i && da(c, () => {
      d()
    })
  }, {
    root: a,
    window: t,
    threshold: o,
    rootMargin: l
  });
  return c
}

function Ho(e = {}) {
  const {
    window: s = Ke,
    initialWidth: t = Number.POSITIVE_INFINITY,
    initialHeight: a = Number.POSITIVE_INFINITY,
    listenOrientation: o = !0,
    includeScrollbar: l = !0,
    type: i = "inner"
  } = e, r = U(t), c = U(a), d = () => {
    if (s)
      if (i === "outer") r.value = s.outerWidth, c.value = s.outerHeight;
      else if (i === "visual" && s.visualViewport) {
      const {
        width: u,
        height: _,
        scale: v
      } = s.visualViewport;
      r.value = Math.round(u * v), c.value = Math.round(_ * v)
    } else l ? (r.value = s.innerWidth, c.value = s.innerHeight) : (r.value = s.document.documentElement.clientWidth, c.value = s.document.documentElement.clientHeight)
  };
  d(), ra(d);
  const p = {
    passive: !0
  };
  return $t("resize", d, p), s && i === "visual" && s.visualViewport && $t(s.visualViewport, "resize", d, p), o && R(Fe("(orientation: portrait)"), () => d()), {
    width: r,
    height: c
  }
}
const Ze = _a("useDetailsStore", () => {
  const e = y({}),
    s = l => {
      e.value = l
    },
    t = m(() => {
      const l = e.value.namedQuery?.contentAboveSearch,
        i = e.value.categoryData?.seoShortDescription ? [{
          text: e.value.categoryData?.seoShortDescription
        }] : [];
      return l || i
    }),
    a = m(() => e.value.namedQuery?.contentBelowSearch || []),
    o = m(() => e.value.categoryData?.shopTheLookID ?? void 0);
  return {
    allDetails: e,
    setDetails: s,
    contentAboveSearch: t,
    contentBelowSearch: a,
    shopTheLookID: o
  }
});
va(Ze, void 0);
const Uo = {
    class: "s-category-headline__content"
  },
  jo = I({
    __name: "CategoryHeadline",
    setup(e) {
      const s = Ze(),
        t = m(() => s.allDetails.categoryData);
      return (a, o) => (f(), h("div", {
        class: "s-category-headline__wrapper",
        style: Ve(`background-color: #${n(t)?.wonColor?.backgroundColor}`)
      }, [S("div", Uo, [S("h1", {
        class: "s-category-headline__title",
        style: Ve(`color: #${n(t)?.wonColor?.textColor}`)
      }, V(n(t)
        ?.headingTitle || n(t)
        ?.name), 5)])], 4))
    }
  }),
  qo = Object.assign(G(jo, [
    ["__scopeId", "data-v-d462d5de"]
  ]), {
    __name: "SNBCategoryHeadline"
  });

function Yo(e, s) {
  return (t, a) => I({
    inheritAttrs: !1,
    props: e,
    emits: ["hydrated"],
    setup(o, l) {
      const i = qt({
          loader: a
        }),
        r = qt({
          hydrate: s(o),
          loader: () => Promise.resolve(i)
        }),
        c = () => {
          l.emit("hydrated")
        };
      return () => fa(r, K(l.attrs, {
        onVnodeMounted: c
      }), l.slots)
    }
  })
}
const Qo = () => {},
  Ds = Yo({
    hydrateNever: {
      type: Boolean,
      required: !1,
      default: !0
    }
  }, () => Qo),
  Ko = {
    class: "ngsr"
  },
  Zo = {
    class: "ngsr-messages"
  },
  Jo = I({
    __name: "SemanticOnlySearchResultHint",
    setup(e) {
      const {
        t: s
      } = ue();
      return (t, a) => {
        const o = ma,
          l = ha;
        return f(), h("div", Ko, [S("div", Zo, [g(o)]), g(l, {
          headline: n(s)("NoGoodSearchResult.headline")
        }, null, 8, ["headline"])])
      }
    }
  }),
  Xo = Object.assign(G(Jo, [
    ["__scopeId", "data-v-04870455"]
  ]), {
    __name: "SNBSemanticOnlySearchResultHint"
  }),
  en = {
    class: "s-page-heading"
  },
  tn = {
    key: 0,
    class: "s-page-heading__headline"
  },
  sn = {
    key: 1,
    class: "s-page-heading__sub-headline"
  },
  an = I({
    __name: "PageHeading",
    props: {
      headline: {},
      subHeadline: {}
    },
    setup(e) {
      return (s, t) => (f(), h("section", en, [e.headline ? (f(), h("h1", tn, V(e.headline), 1)) : k("", !0), e.subHeadline ? (f(), h("span", sn, V(e.subHeadline), 1)) : k("", !0)]))
    }
  }),
  on = Object.assign(G(an, [
    ["__scopeId", "data-v-c5f950da"]
  ]), {
    __name: "SNCPageHeading"
  }),
  ds = new Set;

function ps(e, s, t, a) {
  s && !ds.has(e) && (a && ds.add(e), t(s))
}
const Tt = {
    mounted(e, s) {
      if (typeof s.value == "function") {
        const t = s.value,
          a = dt(e);
        R(a, o => ps(e, o, t, !0), {
          immediate: !0
        })
      } else {
        const [t, a] = s.value, o = dt(e, a);
        R(o, l => ps(e, l, t, a.once), {
          immediate: !0
        })
      }
    }
  },
  nn = "mobile_image",
  ln = "alt_image",
  rn = "open_in_a_new_tab";

function cn(e) {
  const s = m(() => e.value[ln] ?? e.value.alt_image),
    t = m(() => !!e.value.image || !!e.value.mobile_image),
    a = m(() => !!e.value.text),
    o = m(() => e.value[nn] ?? e.value.mobile_image),
    l = m(() => e.value.link ? "a" : "div"),
    i = m(() => !!e.value[rn]);
  return {
    altImage: s,
    hasImage: t,
    hasText: a,
    mobileImage: o,
    teaser: e,
    templateTag: l,
    openInNewTab: i
  }
}
const un = ["srcset"],
  dn = ["src", "title", "alt"],
  pn = ["src", "title", "alt"],
  _n = ["innerHTML"],
  vn = I({
    __name: "TeaserItem",
    props: {
      item: {}
    },
    setup(e) {
      const s = e,
        {
          teaser: t,
          hasText: a,
          hasImage: o,
          mobileImage: l,
          altImage: i,
          templateTag: r,
          openInNewTab: c
        } = cn(nt(() => s.item)),
        d = m(() => c.value ? "_blank" : "_self");
      return (p, u) => (f(), h("div", null, [n(o) ? (f(), C(pe(n(r)), {
        key: 0,
        class: "s-teaser-item",
        href: ("sanitizeURL" in p ? p.sanitizeURL : n(Cs))(n(t)
          .link),
        target: n(d)
      }, {
        default: w(() => [S("picture", null, [S("source", {
          media: "(min-width:960px)",
          srcset: e.item.image
        }, null, 8, un), n(l) ? (f(), h("img", {
          key: 0,
          src: n(l),
          title: n(i),
          alt: n(i),
          fetchpriority: "high"
        }, null, 8, dn)) : (f(), h("img", {
          key: 1,
          src: e.item.image,
          title: n(i),
          alt: n(i),
          fetchpriority: "high"
        }, null, 8, pn))])]),
        _: 1
      }, 8, ["href", "target"])) : k("", !0), n(a) ? (f(), h("div", {
        key: 1,
        class: "s-teaser-item",
        innerHTML: n(t)
          .text
      }, null, 8, _n)) : k("", !0)]))
    }
  }),
  fn = Object.assign(vn, {
    __name: "SNCTeaserItem"
  }),
  mn = {
    class: "s-teasers"
  },
  hn = {
    class: "s-teasers__list"
  },
  bn = I({
    __name: "TeaserList",
    props: {
      teasers: {},
      position: {}
    },
    emits: ["componentMounted", "onTeaserVisible", "onItemClick"],
    setup(e, {
      emit: s
    }) {
      const t = e,
        a = s;
      q(() => a("componentMounted", t.teasers, t.position));

      function o(i, r, c) {
        i && a("onTeaserVisible", r, t.position, c)
      }

      function l(i, r) {
        a("onItemClick", i, t.position, r)
      }
      return (i, r) => (f(), h("section", mn, [S("ol", hn, [(f(!0), h(D, null, te(e.teasers, (c, d) => (f(), h("li", {
        key: e.position + d
      }, [be(g(fn, {
        item: c,
        onClick: p => l(c, d)
      }, null, 8, ["item", "onClick"]), [
        [n(Tt), p => o(p, c, d)]
      ])]))), 128))])]))
    }
  }),
  gn = Object.assign(G(bn, [
    ["__scopeId", "data-v-9c0b7adc"]
  ]), {
    __name: "SNCTeaserList"
  });

function Vs() {
  const e = "(min-width: 960px)",
    s = "(max-width: 767px)",
    t = "(min-width: 568px) and (max-width: 767px)",
    a = "(max-width: 567px)",
    o = "(min-width: 767px)",
    {
      width: l
    } = Ho(),
    i = m(() => Fe(e, {
        ssrWidth: window ? l.value : 659
      })
      .value),
    r = m(() => !i.value),
    c = m(() => Fe(s, {
        ssrWidth: window ? l.value : 659
      })
      .value),
    d = m(() => Fe(a, {
        ssrWidth: window ? l.value : 659
      })
      .value),
    p = m(() => Fe(t, {
        ssrWidth: window ? l.value : 659
      })
      .value),
    u = m(() => Fe(o, {
        ssrWidth: window ? l.value : 659
      })
      .value);
  return {
    isDesktop: i,
    isMobile: c,
    isTabletOrMobile: r,
    is2columnsGrid: d,
    is3columnsGrid: p,
    is4columnsGrid: u
  }
}
const yn = {
    class: "s-facet-wrapper"
  },
  Sn = I({
    __name: "FacetWrapper",
    props: {
      filterMinLabel: {},
      filterMaxLabel: {},
      showMoreLabel: {},
      showLessLabel: {},
      isDisabled: {
        type: Boolean
      },
      showReset: {
        type: Boolean
      },
      isOverlayVisible: {
        type: Boolean
      },
      code: {},
      label: {},
      resetUrl: {},
      isExpandable: {
        type: Boolean
      },
      topValues: {},
      values: {},
      mobileValues: {}
    },
    emits: ["onValueChange"],
    setup(e, {
      expose: s,
      emit: t
    }) {
      const a = e,
        o = t,
        {
          isTabletOrMobile: l
        } = Vs(),
        i = y(!1),
        r = y(!0),
        c = Ue("facetContent"),
        d = m(() => l.value ? a.mobileValues || a.values || a.topValues : a.values && (i.value || a.isOverlayVisible) ? a.values : a.topValues);

      function p(_) {
        o("onValueChange", _)
      }

      function u() {
        c.value && c.value.focus()
      }
      return s({
        focus: u
      }), (_, v) => {
        const b = Na;
        return f(), h("div", yn, [n(r) ? (f(), h(D, {
          key: 0
        }, [g(b, K({
          ref_key: "facetContent",
          ref: c
        }, n(d), {
          filterMinLabel: e.filterMinLabel,
          filterMaxLabel: e.filterMaxLabel,
          isDisabled: e.isDisabled,
          onOnValueChange: p
        }), null, 16, ["filterMinLabel", "filterMaxLabel", "isDisabled"]), e.isExpandable && !e.isOverlayVisible ? (f(), C(n(ae), {
          key: 0,
          class: "s-facet-wrapper__collapse-link",
          "data-testSelector": n(r) ? `${e.code}-facet-show-more-button` : `${e.code}-facet-show-less-button`,
          level: "tertiary",
          label: n(i) ? e.showLessLabel : e.showMoreLabel,
          size: "small",
          icon: n(i) ? "arrow-up" : "arrow-down",
          onClick: v[0] || (v[0] = $ => i.value = !n(i))
        }, null, 8, ["data-testSelector", "label", "icon"])) : k("", !0)], 64)) : k("", !0)])
      }
    }
  }),
  Cn = Object.assign(G(Sn, [
    ["__scopeId", "data-v-b84c0ab1"]
  ]), {
    __name: "SNCFacetWrapper"
  }),
  kn = I({
    __name: "TeaserList",
    props: {
      position: {}
    },
    setup(e) {
      const s = e,
        {
          trackTeaserImpression: t,
          trackTeasersLoad: a,
          trackTeaserSelected: o
        } = Me(),
        l = Os(),
        i = Ze(),
        r = m(() => ({
          teaserAboveSearch: l.teasersAboveSearch,
          contentAboveSearchResult: i.contentAboveSearch,
          teaserBelowSearch: l.teasersBelowSearch,
          contentBelowSearchResult: i.contentBelowSearch
        })),
        c = m(() => r.value[s.position]);
      return (d, p) => {
        const u = gn;
        return n(c)
          .length ? (f(), C(u, {
            key: 0,
            position: e.position,
            teasers: n(c),
            onComponentMounted: n(a),
            onOnTeaserVisible: n(t),
            onOnItemClick: n(o)
          }, null, 8, ["position", "teasers", "onComponentMounted", "onOnTeaserVisible", "onOnItemClick"])) : k("", !0)
      }
    }
  }),
  wn = Object.assign(kn, {
    __name: "SNBTeaserList"
  }),
  zs = (e, s) => {
    const t = e.__vccOpts || e;
    for (const [a, o] of s) t[a] = o;
    return t
  },
  xn = {
    class: "odsc-link-action__element"
  },
  $n = I({
    __name: "OdscLinkAction",
    props: {
      slideAs: {
        default: "li"
      },
      as: {
        default: "a"
      },
      label: {},
      href: {}
    },
    setup(e) {
      const s = e,
        t = At(),
        a = m(() => {
          switch (s.as) {
            case "a":
              return {
                ...t, href: s.href
              };
            case "RouterLink":
            case "NuxtLink":
              return {
                ...t, to: s.href
              };
            case "button":
              return {
                type: "button", ...t
              };
            default:
              return t
          }
        });
      return (o, l) => (f(), C(pe(o.as), K({
        class: "odsc-link-action"
      }, a.value), {
        default: w(() => [S("span", xn, V(o.label), 1)]),
        _: 1
      }, 16))
    }
  }),
  In = {
    class: "odsc-link-action-list"
  },
  Tn = I({
    __name: "OdscLinkActionList",
    props: {
      layout: {},
      itemSize: {},
      scrollIndicator: {},
      showScrollIndicator: {
        type: Boolean,
        default: !1
      },
      fullWidth: {
        type: Boolean
      },
      gutter: {},
      title: {},
      ariaLive: {},
      ariaRoleDescription: {},
      ariaRoleDescriptionItem: {},
      ariaSlideLabelTemplate: {},
      previousSlidesTitle: {},
      nextSlidesTitle: {},
      skipCarouselLinkTitle: {},
      as: {},
      subgrid: {
        type: Boolean
      }
    },
    setup(e) {
      const s = e,
        t = Vo("OdscLinkActionList", "OdscLinkAction");
      return (a, o) => (f(), h("div", In, [g(n(Dt), Bt(Pt(s)), {
        default: w(() => [(f(!0), h(D, null, te(n(t), (l, i) => (f(), C(n(ut), {
          key: i,
          as: n(Do)(l, "slideAs", "li")
        }, {
          default: w(() => [(f(), C(pe(l)))]),
          _: 2
        }, 1032, ["as"]))), 128))]),
        _: 1
      }, 16)]))
    }
  }),
  On = zs(Tn, [
    ["__scopeId", "data-v-8cc297d1"]
  ]),
  Ln = {
    Yellow: "yellow"
  },
  Bn = {
    Default: "default"
  },
  Pn = ["href"],
  An = {
    key: 1,
    class: "odsc-tile__label"
  },
  Mn = {
    class: "odsc-tile__inner"
  },
  En = {
    key: 0,
    class: "odsc-tile__label-additional"
  },
  Nn = {
    class: "odsc-tile__slot-fullwidth"
  },
  Rn = {
    class: "odsc-tile__content"
  },
  Fn = I({
    __name: "OdscTile",
    props: {
      label: {},
      labelAdditional: {},
      labelColor: {
        default: Ln.Yellow
      },
      href: {},
      title: {},
      as: {
        default: "li"
      },
      variant: {
        default: Bn.Default
      },
      isHorizontal: {
        type: Boolean,
        default: !1
      }
    },
    setup(e) {
      const s = e,
        t = m(() => ({
          "odsc-tile": !0,
          "odsc-tile--horizontal": s.isHorizontal,
          "odsc-tile--with-label": s.label || s.labelAdditional,
          [`odsc-tile--variant-${s.variant}`]: !0,
          [`odsc-tile--label-${s.labelColor}`]: !0
        }));
      return (a, o) => (f(), C(pe(a.as), {
        class: O(t.value)
      }, {
        default: w(() => [a.href ? (f(), h("a", {
          key: 0,
          class: "odsc-tile__link",
          href: a.href
        }, V(a.title), 9, Pn)) : k("", !0), a.label ? (f(), h("div", An, V(a.label), 1)) : k("", !0), S("div", Mn, [a.labelAdditional ? (f(), h("div", En, V(a.labelAdditional), 1)) : k("", !0), S("div", Nn, [E(a.$slots, "fullwidth", {}, void 0, !0)]), S("div", Rn, [E(a.$slots, "default", {}, void 0, !0)])])]),
        _: 3
      }, 8, ["class"]))
    }
  }),
  De = zs(Fn, [
    ["__scopeId", "data-v-da35d506"]
  ]),
  Dn = {
    Default: "default"
  },
  Vn = I({
    __name: "OdscTileGrid",
    props: {
      as: {
        default: "ul"
      },
      variant: {
        default: Dn.Default
      }
    },
    setup(e) {
      const s = e,
        t = m(() => ({
          "odsc-tile-grid": !0,
          [`odsc-tile-grid--variant-${s.variant}`]: !0
        }));
      return (a, o) => (f(), C(pe(a.as), {
        class: O(t.value)
      }, {
        default: w(() => [E(a.$slots, "default")]),
        _: 3
      }, 8, ["class"]))
    }
  }),
  zn = {
    key: 0,
    class: "s-navigation-pills"
  },
  Wn = I({
    __name: "NavigationPills",
    setup(e) {
      const s = re(),
        {
          trackNavigation: t
        } = Me(),
        {
          t: a
        } = ue(),
        o = xe();

      function l(r) {
        const c = r.split("/")
          .includes("q"),
          d = o.path.split("/")
          .includes("q");
        return !(c && d)
      }
      const i = r => {
        const c = r.link,
          d = l(c);
        t(r), Pe(c, {
          external: d
        })
      };
      return (r, c) => n(s)
        .subcategories.length ? (f(), h("div", zn, [g(n(On), {
          ariaLive: "none",
          fullWidth: !0,
          gutter: 0,
          class: "s-navigation-pills",
          previousSlidesTitle: n(a)("Search.previousCategory", {}, {
            default: "previous category"
          }),
          nextSlidesTitle: n(a)("Search.nextCategory", {}, {
            default: "next category"
          })
        }, {
          default: w(() => [(f(!0), h(D, null, te(n(s)
            .subcategories, (d, p) => (f(), C(n($n), {
              key: d.value,
              label: d.label,
              ariaSlideLabelTemplate: n(a)("Search.numberOfCategory", {
                n: p + 1,
                count: n(s)
                  .subcategories.length
              }),
              slideAs: "li",
              as: "button",
              type: "button",
              onClick: u => i(d)
            }, null, 8, ["label", "ariaSlideLabelTemplate", "onClick"]))), 128))]),
          _: 1
        }, 8, ["previousSlidesTitle", "nextSlidesTitle"])])) : k("", !0)
    }
  }),
  Gn = Object.assign(G(Wn, [
    ["__scopeId", "data-v-37ebfc59"]
  ]), {
    __name: "SNBNavigationPills"
  }),
  Hn = I({
    __name: "ConditionalRenderingWrapper",
    props: {
      renderingConfigurationKey: {}
    },
    setup(e) {
      const s = Ae(),
        t = e,
        a = m(() => t.renderingConfigurationKey ? s.getRenderingValue(t.renderingConfigurationKey) : !1);
      return (o, l) => n(a) ? E(o.$slots, "default", {
        key: 0
      }) : k("", !0)
    }
  }),
  Un = Object.assign(Hn, {
    __name: "SNBConditionalRenderingWrapper"
  }),
  jn = {
    class: "s-advisor-answer",
    "data-testselector": "s-advisor-answer"
  },
  qn = ["src", "alt"],
  Yn = {
    class: "s-advisor-answer__text",
    "data-testselector": "s-advisor-answer__text"
  },
  Qn = I({
    __name: "AdvisorItem",
    props: {
      href: {},
      text: {},
      image: {}
    },
    setup(e) {
      return (s, t) => {
        const a = Fa;
        return f(), h("div", jn, [g(a, {
          class: "s-advisor-answer__link",
          to: e.href,
          "data-testselector": "s-advisor-answer__link"
        }, {
          default: w(() => [e.image ? (f(), h("img", {
            key: 0,
            "data-testselector": "s-advisor-answer__img",
            class: "s-advisor-answer__img",
            src: e.image,
            width: 128,
            height: 96,
            alt: e.text
          }, null, 8, qn)) : k("", !0), S("span", Yn, V(e.text), 1)]),
          _: 1
        }, 8, ["to"])])
      }
    }
  }),
  Kn = Object.assign(G(Qn, [
    ["__scopeId", "data-v-25663de6"]
  ]), {
    __name: "SNCAdvisorItem"
  }),
  Zn = {
    class: "s-advisor",
    "data-testselector": "s-advisor"
  },
  Jn = {
    class: "s-advisor__headline",
    "data-testselector": "s-advisor__headline"
  },
  Xn = I({
    __name: "Advisor",
    props: {
      id: {},
      name: {},
      question: {},
      answers: {}
    },
    emits: ["onItemClick", "componentMounted"],
    setup(e, {
      emit: s
    }) {
      const t = e,
        a = s;
      q(() => a("componentMounted", t));

      function o(l) {
        a("onItemClick", t, l)
      }
      return (l, i) => {
        const r = Kn;
        return f(), h("div", Zn, [S("h4", Jn, V(e.question), 1), g(n(Dt), {
          fullWidth: "",
          showArrows: "",
          itemSize: "small",
          showScrollIndicator: !1
        }, {
          default: w(() => [(f(!0), h(D, null, te(e.answers, (c, d) => (f(), C(n(ut), {
            key: d
          }, {
            default: w(() => [g(r, K({
              ref_for: !0
            }, c, {
              onClick: p => o(c)
            }), null, 16, ["onClick"])]),
            _: 2
          }, 1024))), 128))]),
          _: 1
        })])
      }
    }
  }),
  el = Object.assign(G(Xn, [
    ["__scopeId", "data-v-d00c0802"]
  ]), {
    __name: "SNCAdvisor"
  }),
  tl = I({
    __name: "AdvisorList",
    setup(e) {
      const s = Ls(),
        {
          trackAdvisorLoad: t,
          trackAdvisorSelected: a
        } = Me();
      return (o, l) => {
        const i = el;
        return f(), h("section", null, [(f(!0), h(D, null, te(n(s)
          .advisors, (r, c) => (f(), C(i, K({
            key: r.id
          }, {
            ref_for: !0
          }, r, {
            onComponentMounted: d => n(t)(d, c),
            onOnItemClick: n(a)
          }), null, 16, ["onComponentMounted", "onOnItemClick"]))), 128))])
      }
    }
  }),
  sl = Object.assign(tl, {
    __name: "SNBAdvisorList"
  }),
  al = {
    class: "s-products-count-sort"
  },
  ol = {
    key: 0,
    class: "s-products-count-sort__sorting"
  },
  nl = {
    class: "s-products-count-sort__count",
    "aria-live": "polite"
  },
  ll = I({
    __name: "ProductCountAndSorting",
    props: {
      productsMessage: {},
      sortingMessage: {},
      selectedSort: {}
    },
    emits: ["onSortSelection"],
    setup(e, {
      emit: s
    }) {
      const t = e,
        a = m(() => `${t.sortingMessage} ${t.selectedSort}`.replaceAll(":", "")),
        o = s;

      function l() {
        o("onSortSelection")
      }
      return (i, r) => (f(), h("section", al, [e.selectedSort ? (f(), h("span", ol, [ct(V(e.sortingMessage) + " ", 1), g(n(ae), {
        level: "tertiary",
        size: "small",
        label: e.selectedSort,
        class: "s-products-count-sort__sorting--link",
        "aria-label": n(a),
        onClick: l
      }, null, 8, ["label", "aria-label"])])) : k("", !0), S("span", nl, V(e.productsMessage), 1)]))
    }
  }),
  rl = Object.assign(G(ll, [
    ["__scopeId", "data-v-4085130c"]
  ]), {
    __name: "SNCProductCountAndSorting"
  }),
  {
    isScrollable: il
  } = ba(),
  at = y(!1),
  Le = y(void 0),
  St = y(!1),
  _s = y(!1),
  le = y([]);

function Je() {
  const e = re(),
    s = m(() => !!Le.value),
    t = m(() => !Le.value),
    a = m(() => {
      const p = re()
        .facetList.facets ?? [];
      return Le.value === null || p.length === 0 ? null : p.find(_ => _.code === Le.value) ?? null
    });

  function o() {
    at.value = !0
  }

  function l() {
    at.value = !1, il.value = !0, Le.value = void 0
  }

  function i(p) {
    if (le.value.length === 0) le.value.push(p);
    else {
      const u = le.value.findIndex(_ => _.value === p.value);
      u === -1 ? le.value.push(p) : le.value.splice(u, 1)
    }
    e.setSelectionsToTrack(le.value)
  }

  function r(p) {
    if (le.value.length === 0) {
      e.setSelectionsToTrack(le.value);
      return
    }
    const u = le.value.findIndex(_ => _.value == p);
    u !== -1 && (le.value.splice(u, 1), e.setSelectionsToTrack(le.value))
  }

  function c() {
    Le.value = void 0, St.value = !0, _s.value = !0, at.value = !0
  }

  function d() {
    St.value = !1
  }
  return {
    isOverlayVisible: at,
    isSortDropdownVisible: St,
    isCalloutOpenAttr: _s,
    updatedFacetSelections: le,
    showOverlay: o,
    hideOverlay: l,
    showSortDropdown: c,
    hideSortDropdown: d,
    setUpdatedFacets: i,
    removeFromFacetsToTrack: r,
    selectedFacetCode: Le,
    selectedFacet: a,
    showBack: s,
    showClose: t
  }
}
const Ws = "undo-clear-filter-event",
  Vt = () => {
    const e = re(),
      s = xe(),
      {
        t
      } = ue(),
      {
        isFeatureEnabled: a
      } = Ye(),
      o = m(() => e.selectionList.length > 8),
      l = s.fullPath;

    function i() {
      return new CustomEvent(Ws, {
        detail: {
          message: t("Search.allFiltersDeleted"),
          buttonText: t("Search.undo"),
          buttonClick: () => Pe(l)
        }
      })
    }

    function r() {
      if (!a(Qe.isNewFiltering) || !o.value) return;
      const p = i();
      document.dispatchEvent(p)
    }
    async function c() {
      r(), await Pe(Cs(e.resetLink))
    }
    return {
      clearAllFilters: c
    }
  },
  cl = {
    key: 0,
    class: "s-selected-filters"
  },
  ul = I({
    __name: "SelectedFiltersCarousel",
    setup(e) {
      const s = re(),
        {
          t
        } = ue(),
        {
          removeFromFacetsToTrack: a
        } = Je(),
        {
          trackFilter: o
        } = Me(),
        {
          clearAllFilters: l
        } = Vt(),
        i = m(() => s.selectionList.length >= 2 && !!s.resetLink),
        r = m(() => `Slide 1: ${t("Search.resetAll")}`),
        c = u => {
          Pe(u)
        };

      function d(u) {
        a(u.label), o(u, !1, !1), c(u.href)
      }
      const p = (u, _) => `Slide ${u+2}: ${_.label}`;
      return (u, _) => n(s)
        .selectionList?.length ? (f(), h("div", cl, [g(n(Dt), {
          layout: "grid",
          itemSize: "auto",
          ariaLive: "none",
          showScrollIndicator: !1
        }, {
          default: w(() => [n(i) ? (f(), C(n(ut), {
            key: 0,
            "aria-label": n(r)
          }, {
            default: w(() => [g(n(ae), {
              class: "s-reset-button",
              label: n(t)("Search.resetAll"),
              href: n(s)
                .resetLink,
              "aria-label": n(t)("Search.resetAll"),
              isDeletable: !0,
              icon: "cross",
              level: "tertiary",
              hyphens: "auto",
              size: "small",
              as: "button",
              onClick: n(l)
            }, null, 8, ["label", "href", "aria-label", "onClick"])]),
            _: 1
          }, 8, ["aria-label"])) : k("", !0), (f(!0), h(D, null, te(n(s)
            .selectionList, (v, b) => (f(), C(n(ut), {
              key: v.code + v.label,
              "aria-label": p(b, v)
            }, {
              default: w(() => [g(n(Ra), {
                label: v.label,
                "aria-label": n(t)("Search.removeSelectedFilter", {
                  value: v.label
                }),
                as: "button",
                isActive: !0,
                isDeletable: !0,
                onClick: $ => d(v)
              }, null, 8, ["label", "aria-label", "onClick"])]),
              _: 2
            }, 1032, ["aria-label"]))), 128))]),
          _: 1
        })])) : k("", !0)
    }
  }),
  dl = Object.assign(ul, {
    __name: "SNBSelectedFiltersCarousel"
  }),
  pl = {
    mounted(e, s) {
      if (typeof s.value == "function") {
        const t = s.value;
        R(dt(e), a => t(a), {
          immediate: !0
        })
      } else {
        const [t, a] = s.value;
        R(dt(e, a), o => t(o), {
          immediate: !0
        })
      }
    }
  },
  _l = {
    mounted(e, s) {
      typeof s.value == "function" ? It(e, s.value) : It(e, ...s.value)
    }
  },
  vl = "1040px 0px 1040px 0px",
  fl = I({
    __name: "BatchRenderComponent",
    props: {
      isAlwaysShown: {
        type: Boolean
      }
    },
    setup(e) {
      const s = Ue("wrapper"),
        t = y("unset"),
        a = U(!0),
        o = m(() => t.value === "unset" ? "unset" : `${t.value}px`);

      function l([i]) {
        const r = i?.isIntersecting ?? !1;
        a.value = r;
        const c = r ? "unset" : s.value?.offsetHeight ?? "unset";
        c === "unset" ? (async () => (await $e(), t.value = c))() : t.value = c
      }
      return (i, r) => be((f(), h("div", K({
        ref: "wrapper"
      }, i.$attrs, {
        style: {
          height: n(o)
        }
      }), [e.isAlwaysShown || n(a) ? E(i.$slots, "default", {
        key: 0
      }) : k("", !0)], 16)), [
        [n(_l), [l, {
          rootMargin: vl
        }]]
      ])
    }
  }),
  ml = Object.assign(fl, {
    __name: "SNBBatchRenderComponent"
  }),
  hl = "slot2.0",
  bl = I({
    __name: "CriteoBanner",
    setup(e) {
      const s = ge(),
        t = ye(),
        a = s.breadcrumbPageId ?? s.categoryId,
        o = JSON.stringify({
          creativeSlot: encodeURI(hl)
        }),
        l = m(() => {
          const c = a && a.split("/")
            .map(p => encodeURI(p));
          return c ? JSON.stringify({
            categoryNode: c
          }) : null
        }),
        i = m(() => ({
          tagText: "Anzeige",
          showTag: !0,
          adsData: o,
          requestData: l.value,
          placementAdData: r.value
        })),
        r = m(() => encodeURIComponent(JSON.stringify(t.placementBannerItem)));
      return (c, d) => (f(), h("banner-ads", Bt(Pt(n(i))), null, 16))
    }
  }),
  gl = Object.assign(bl, {
    __name: "SNBCriteoBanner"
  }),
  yl = I({
    __name: "CriteoBannerGridItem",
    setup(e) {
      const s = ye();
      return (t, a) => {
        const o = gl;
        return f(), C(n(De), {
          as: "div",
          "data-type": "sereca",
          "data-gridboxVariant": "borderless",
          class: "tile-without-padding s-product-grid__criteo-banner"
        }, {
          default: w(() => [n(s)
            .placementBannerItem ? (f(), C(o, {
              key: 0
            })) : k("", !0)
          ]),
          _: 1
        })
      }
    }
  }),
  Sl = Object.assign(G(yl, [
    ["__scopeId", "data-v-4c040672"]
  ]), {
    __name: "SNBCriteoBannerGridItem"
  }),
  Cl = I({
    __name: "EmptyGridItem",
    props: {
      isFullWidth: {
        type: Boolean
      },
      componentType: {},
      code: {},
      parentId: {}
    },
    setup(e) {
      return (s, t) => (f(), C(n(De), {
        as: "div",
        "data-type": "sereca",
        "data-gridboxVariant": "borderless",
        class: "tile-without-padding s-product-grid__empty-element"
      }))
    }
  }),
  kl = Object.assign(G(Cl, [
    ["__scopeId", "data-v-b1a839e9"]
  ]), {
    __name: "SNBEmptyGridItem"
  }),
  wl = {
    class: "s-grid-box-skeleton"
  },
  xl = I({
    __name: "ProductGridSkeleton",
    setup(e) {
      return (s, t) => (f(), h("div", wl, [g(n(Re), {
        class: "s-grid-box-skeleton__image"
      }), g(n(Re), {
        class: "s-grid-box-skeleton__rating"
      }), g(n(Re), {
        class: "s-grid-box-skeleton__rating reduced"
      }), g(n(Re), {
        class: "s-grid-box-skeleton__name"
      }), g(n(Re), {
        class: "s-grid-box-skeleton__name reduced"
      }), g(n(Re), {
        class: "s-grid-box-skeleton__price"
      })]))
    }
  }),
  $l = Object.assign(G(xl, [
    ["__scopeId", "data-v-81cd2091"]
  ]), {
    __name: "SNBProductGridSkeleton"
  }),
  Il = {
    class: "s-product-grid-item--placeholder"
  },
  Tl = "grid-fragment-v2",
  Ol = I({
    __name: "ProductGridItem",
    props: {
      isLoadMore: {
        type: Boolean
      },
      gridBox: {},
      isFullWidth: {
        type: Boolean
      },
      componentType: {},
      code: {},
      parentId: {}
    },
    emits: ["onLoadMoreClick", "onPlaceholderVisible"],
    setup(e, {
      emit: s
    }) {
      const t = y(""),
        {
          t: a
        } = ue(),
        o = ge(),
        l = s;

      function i() {
        l("onLoadMoreClick")
      }

      function r(c) {
        c && l("onPlaceholderVisible")
      }
      return q(() => {
        t.value = Tl
      }), (c, d) => {
        const p = $l;
        return e.gridBox?.gridBoxData ? (f(), C(n(De), {
          key: 0,
          as: "div",
          "data-testselector": "s-product-grid-box",
          "data-grid-label": n(t),
          "data-grid-data": JSON.stringify(e.gridBox?.gridBoxData),
          "data-language": e.gridBox.language,
          "data-country": e.gridBox.country,
          "data-grid-context": e.gridBox.theme || "default",
          "data-type": "sereca",
          "data-timestamp": n(o)
            .effectiveDate,
          class: "tile-without-padding"
        }, {
          default: w(() => [g(p)]),
          _: 1
        }, 8, ["data-grid-label", "data-grid-data", "data-language", "data-country", "data-grid-context", "data-timestamp"])) : !e.gridBox?.gridBoxData && e.isLoadMore ? be((f(), C(n(De), {
          key: 1,
          class: "tile-without-padding"
        }, {
          default: w(() => [S("div", Il, [g(n(ae), {
            "data-testselector": "s-product-grid-item__load-more-button",
            class: "s-product-grid-item__load-more-button",
            level: "secondary",
            label: n(a)("Search.loadMore"),
            onClick: Ct(i, ["stop"])
          }, null, 8, ["label"])])]),
          _: 1
        })), [
          [n(Tt), r]
        ]) : !e.gridBox?.gridBoxData && !e.isLoadMore ? (f(), C(n(De), {
          key: 2,
          class: "tile-without-padding"
        }, {
          default: w(() => [be(g(p, {
            "data-testselector": "s-product-grid-item--skeleton"
          }, null, 512), [
            [n(Tt), r]
          ])]),
          _: 1
        })) : k("", !0)
      }
    }
  }),
  vs = Object.assign(G(Ol, [
    ["__scopeId", "data-v-93b62e42"]
  ]), {
    __name: "SNBProductGridItem"
  }),
  Ll = Ds("components/Products/STLPlaceholder.vue", () => ks(() => import("./256ElSVv.js"), __vite__mapDeps([0, 1, 2]), import.meta.url)
    .then(e => e.default || e)),
  Bl = I({
    __name: "STLPlaceholderGridItem",
    props: {
      componentId: {},
      isFullWidth: {
        type: Boolean
      },
      componentType: {},
      code: {},
      parentId: {}
    },
    setup(e) {
      return (s, t) => {
        const a = Ll;
        return f(), C(n(De), {
          as: "div",
          "data-type": "sereca",
          "data-gridboxVariant": "borderless",
          class: "tile-without-padding s-product-grid__stl-fragment"
        }, {
          default: w(() => [g(a, {
            componentId: e.componentId,
            "hydrate-never": ""
          }, null, 8, ["componentId"])]),
          _: 1
        })
      }
    }
  }),
  Pl = Object.assign(Bl, {
    __name: "SNBSTLPlaceholderGridItem"
  }),
  Al = ["id"],
  Ml = I({
    __name: "ProductGrid",
    props: {
      batches: {}
    },
    emits: ["onLoadMoreClick", "onPlaceholderVisible"],
    setup(e, {
      emit: s
    }) {
      const {
        t
      } = ue(), a = e, o = s, l = m(() => {
        const u = (v = "") => ({
          componentType: Be.EMPTY,
          isFullWidth: !1,
          code: v
        });
        return a.batches.map(v => {
          for (let b = 0; b < v.length; b++) v[b].isFullWidth && v.splice(b + 1, 0, ...new Array(11)
            .fill(u(v[b].code)));
          return v
        })
      }), i = {
        [Be.PRODUCT_GRIDBOX]: vs,
        [Be.EMPTY]: kl,
        [Be.STL]: Pl,
        [Be.BANNER]: Sl
      };

      function r(u) {
        return i[u.componentType] ?? vs
      }

      function c(u) {
        o("onLoadMoreClick", u)
      }

      function d(u) {
        o("onPlaceholderVisible", u)
      }

      function p(u, _) {
        return `grid-item-${u}-${_}`
      }
      return (u, _) => {
        const v = ml;
        return f(!0), h(D, null, te(n(l), (b, $) => (f(), C(v, {
          key: p($, -1),
          isAlwaysShown: $ === 0 || $ === e.batches.length - 1,
          class: "s-product-batch"
        }, {
          default: w(() => [g(n(Vn), {
            "data-testselector": "s-product-grid__list",
            as: "ol",
            variant: "borderless",
            class: O(["s-product-grid", {
              "s-product-grid__following": $ > 0
            }])
          }, {
            default: w(() => [(f(!0), h(D, null, te(b, (T, L) => (f(), h("div", {
              id: p($, T.code ?? L),
              key: p($, T.code ?? L),
              ref_for: !0,
              ref: p($, T.code ?? L)
            }, [(f(), C(pe(r(T)), K({
              ref_for: !0
            }, T, {
              loadMoreLabel: n(t)("Search.loadMore"),
              "data-testselector": "s-product-grid__list-item",
              onOnLoadMoreClick: A => c($),
              onOnPlaceholderVisible: A => d($)
            }), null, 16, ["loadMoreLabel", "onOnLoadMoreClick", "onOnPlaceholderVisible"]))], 8, Al))), 128))]),
            _: 2
          }, 1032, ["class"])]),
          _: 2
        }, 1032, ["isAlwaysShown"]))), 128)
      }
    }
  }),
  El = Object.assign(G(Ml, [
    ["__scopeId", "data-v-ceecb2ca"]
  ]), {
    __name: "SNBProductGrid"
  }),
  Nl = {},
  Rl = {
    class: "s-load-more-indicator"
  };

function Fl(e, s) {
  return f(), h("div", Rl, [...s[0] || (s[0] = [S("span", {
    class: "s-load-more-indicator__dot"
  }, ".", -1), S("span", {
    class: "s-load-more-indicator__dot"
  }, ".", -1), S("span", {
    class: "s-load-more-indicator__dot"
  }, ".", -1)])])
}
const Dl = Object.assign(G(Nl, [
  ["render", Fl],
  ["__scopeId", "data-v-aaaf81b0"]
]), {
  __name: "SNCLoadMoreIndicator"
});

function Vl(e, s) {
  const t = m(() => Math.min(e.value, s.value)),
    a = m(() => e.value < s.value);
  return {
    fetchedItemCount: e,
    shownProducts: t,
    areMoreItemsAvailable: a
  }
}
const zl = .5;

function Gs(e, s, t) {
  const {
    areMoreItemsAvailable: a,
    shownProducts: o
  } = Vl(e, s), l = m(() => {
    const r = Math.round(100 * (o.value / s.value));
    return Math.max(r, zl)
  }), i = m(() => t.value || !a.value);
  return {
    progress: l,
    shownProducts: o,
    isButtonDisabled: i
  }
}
const Wl = {
    class: "s-load-more"
  },
  Gl = {
    class: "s-load-more__progress"
  },
  Hl = {
    key: 0,
    class: "s-load-more__bar"
  },
  Ul = {
    key: 1,
    class: "s-load-more__text"
  },
  jl = {
    class: "s-load-more__hidden-text"
  },
  ql = {
    class: "s-load-more__hidden-text"
  },
  Yl = {
    key: 2,
    class: "s-load-more__text"
  },
  Ql = I({
    __name: "PagingInformation",
    props: {
      maximumAvailableItems: {},
      fetchedItemCount: {},
      isPending: {
        type: Boolean,
        default: !1
      },
      showProgressBar: {
        type: Boolean
      },
      productsShownMsg: {},
      productsTotalMsg: {}
    },
    setup(e) {
      vt(l => ({
        v2cbd0cb2: n(o)
      }));
      const s = e,
        {
          progress: t,
          shownProducts: a
        } = Gs(nt(() => s.fetchedItemCount), nt(() => s.maximumAvailableItems), nt(() => s.isPending)),
        o = m(() => `${t.value}%`);
      return (l, i) => {
        const r = Dl;
        return f(), h("div", Wl, [S("div", Gl, [e.showProgressBar ? (f(), h("div", Hl)) : k("", !0), !e.isPending && n(a) ? (f(), h("div", Ul, [S("span", jl, V(e.productsShownMsg), 1), ct(" " + V(n(a)) + " / " + V(e.maximumAvailableItems) + " ", 1), S("span", ql, V(e.productsTotalMsg), 1)])) : (f(), h("div", Yl, [g(r)]))])])
      }
    }
  }),
  Kl = Object.assign(G(Ql, [
    ["__scopeId", "data-v-00bb8152"]
  ]), {
    __name: "SNCPagingInformation"
  }),
  Zl = {
    class: "s-load-more"
  },
  Jl = I({
    __name: "LoadMoreButton",
    props: {
      maximumAvailableItems: {},
      fetchedItemCount: {},
      isPending: {
        type: Boolean
      },
      isVisible: {
        type: Boolean
      },
      nextPageMsg: {},
      loadMoreMsg: {},
      theme: {}
    },
    emits: ["onLoadMoreClick", "onLoadMoreVisible"],
    setup(e, {
      emit: s
    }) {
      const t = e,
        a = s,
        {
          fetchedItemCount: o,
          maximumAvailableItems: l,
          isPending: i,
          isVisible: r
        } = ga(t),
        {
          isButtonDisabled: c
        } = Gs(o, l, i);

      function d() {
        a("onLoadMoreClick", t.fetchedItemCount)
      }

      function p(u) {
        u && a("onLoadMoreVisible")
      }
      return (u, _) => be((f(), h("div", Zl, [g(n(ae), {
        level: "primary",
        class: O(["s-load-more__button", {
          "s-load-more__button": n(r),
          "s-load-more__button--hidden": !n(r)
        }]),
        label: e.loadMoreMsg,
        disabled: n(c),
        theme: e.theme,
        isLoading: n(i),
        onClick: Ct(d, ["prevent"]),
        onTouchstart: Ct(d, ["prevent"])
      }, null, 8, ["class", "label", "disabled", "theme", "isLoading"])])), [
        [n(pl), p]
      ])
    }
  }),
  Xl = Object.assign(G(Jl, [
    ["__scopeId", "data-v-6e786f32"]
  ]), {
    __name: "SNCLoadMoreButton"
  });

function er() {
  const e = re(),
    {
      queryParams: s
    } = Mt(),
    t = Ze(),
    {
      isFeatureEnabled: a
    } = Ye(),
    o = m(() => {
      const r = ws()
        .public.stlPosition,
        c = typeof r == "number",
        d = r >= 0;
      return !c || !d ? null : r
    }),
    l = m(() => t.shopTheLookID);
  return {
    displaySTL: m(() => {
      const r = a(Qe.isShopTheLook),
        c = !!t.shopTheLookID,
        d = !!e.rawSelections?.values?.length,
        p = o.value !== null,
        u = s.value.sort;
      return r && c && p && !d && !u
    }),
    stlPosition: o,
    stlID: l
  }
}

function tr(e, s) {
  return e && s === 0 ? [e] : !e || s < 0 ? [] : e.reduce((a, o, l) => {
    const i = Math.floor(l / s);
    return a[i] || (a[i] = []), a[i].push(o), a
  }, [])
}
const sr = 2,
  ar = 3,
  fs = 4;

function or() {
  const e = ye(),
    s = Ae(),
    t = y(!1),
    {
      displaySTL: a,
      stlPosition: o,
      stlID: l
    } = er(),
    {
      is2columnsGrid: i,
      is3columnsGrid: r,
      is4columnsGrid: c
    } = Vs(),
    {
      isFeatureEnabled: d
    } = Ye(),
    p = ze(),
    u = m(() => e.filteredProducts),
    _ = m(() => {
      const T = s.getConfigValue("fetchSize");
      return tr([...u.value], T)
    }),
    v = m(() => {
      if (!t.value) return [];
      const T = [],
        L = d(Qe.isCriteo) && (p.isCategory || p.isSearch) && !!e.placementBannerItem,
        A = !!o.value && o.value >= 0 && l.value !== void 0 && a.value,
        H = (F, N, j) => {
          if (!F) return;
          const P = {
            index: N,
            item: j()
          };
          T.push(P)
        };
      return H(L, $.value, () => lr($.value)), H(A, o.value, () => nr(o.value, l.value)), T
    }),
    b = m(() => {
      const T = _.value,
        L = s.getConfigValue("fetchSize"),
        A = cr(v.value, L);
      return T.map((F, N) => {
        const j = A.get(N) ?? [];
        return ur(F, j)
      })
    }),
    $ = m(() => i.value ? sr : r.value ? ar : (c.value, fs));
  return q(() => {
    t.value = !0
  }), {
    tileBatches: _,
    clientBatches: b
  }
}

function nr(e, s) {
  return {
    isFullWidth: !0,
    componentId: s,
    componentType: Be.STL,
    code: `STL_${e}_${s}`
  }
}

function lr(e) {
  return {
    isFullWidth: !0,
    componentType: Be.BANNER,
    code: `CRITEO_BANNER_${e}`
  }
}

function rr(e, s) {
  return Math.floor(e / s)
}

function ir(e, s) {
  return e % s
}

function cr(e, s) {
  const t = new Map;
  for (const a of e) {
    const o = rr(a.index, s),
      i = {
        index: ir(a.index, s),
        item: a.item
      };
    t.get(o) || t.set(o, []), t.get(o)
      .push(i)
  }
  return t
}

function ur(e, s) {
  if (!(s.length !== 0)) return [...e];
  const a = [...e],
    l = [...s].sort((i, r) => i.index - r.index)
    .map((i, r) => [r, i]);
  for (const [i, r] of l) {
    const c = r.index + i;
    a.splice(c, 0, r.item)
  }
  return a
}
const dr = "adSessionId",
  pr = "TUG";

function _r() {
  const e = Yt(dr),
    s = Yt(pr);
  return {
    adSessionIdCookie: e,
    iprCookie: s
  }
}
const vr = /^h\d+$/;

function fr() {
  const e = ge(),
    s = ze(),
    t = xe(),
    a = m(() => {
      let l = null;
      switch (s.endpointAPI) {
        case he.search:
          l = Qt;
          break;
        case he.asc:
          l = Qt;
          break;
        case he.category: {
          const {
            categoryName: i,
            categoryId: r
          } = t.params;
          i && vr.test(r) && (l = `${Ca}/${i}/${r}`);
          break
        }
        case he.query:
          l = `${Sa}/${encodeURIComponent(t.params?.queryId)}`;
          break;
        case he.brand:
          l = o();
          break;
        case he.customQueryEmbeddings:
          l = `${ya}/${e.cqeName}`;
          break
      }
      return l
    });

  function o() {
    const l = t.params?.brandName,
      i = t.params?.brandId;
    let r = "";
    return l && !i ? r = encodeURIComponent(l) : l && i ? r = `${encodeURIComponent(l)}/${i}` : !l && i && (r = i), `${ka}/${r}`
  }
  return {
    endpointURL: a
  }
}

function mr(e) {
  return Object.entries(e)
    .reduce((t, [a, o]) => {
      const l = o === "" || o === null || o === void 0,
        i = typeof o == "object" && o !== null,
        r = typeof o == "number" || typeof o == "boolean",
        c = typeof o == "string",
        d = Array.isArray(o) && o.every(u => typeof u == "string"),
        p = xa.includes(a);
      return l || p ? t : r ? (t[a] = o, t) : c || d ? (t[a] = wa(o), t) : (i || (t[a] = o), t)
    }, {})
}

function hr(e) {
  return e ? Object.entries(e)
    .reduce((s, [t, a]) => {
      const o = t.replaceAll(/([a-z0-9])([A-Z])/g, "$1-$2")
        .replaceAll(/([A-Z])([A-Z][a-z])/g, "$1-$2")
        .toLowerCase();
      return s[o] = a, s
    }, {}) : {}
}

function br() {
  const e = xe(),
    s = ze(),
    {
      endpointURL: t
    } = fr(),
    a = xs(),
    {
      $api: o
    } = $a();
  async function l(c, d) {
    const p = t.value;
    if (!p) throw s.endpointAPI === he.category ? new Error(`::Application::View::Invalid or missing parameter for ${s.endpointAPI} page at ${e.fullPath}`) : new Error(`::Application::View::Not supported type: ${s.endpointAPI}`);
    const u = mr(c);
    try {
      const _ = {
        redirect: "manual",
        method: "GET",
        query: {
          ...u
        },
        headers: d ? {
          [gr]: d.zone,
          [yr]: d.warehouse
        } : void 0
      };
      return await o(p, _)
    } catch (_) {
      throw !(_ instanceof $s) && !(_ instanceof Is) && a.error({
        err: _,
        endpoint: t.value
      }, "Failed to fetch products"), _
    }
  }
  async function i(c, d, p) {
    const {
      public: {
        gridboxesPath: u
      }
    } = ws();
    try {
      return await o(u + "/" + c + "/" + d, {
        method: "GET",
        query: {
          ids: p.join()
        }
      })
    } catch (_) {
      throw a.error({
        err: _,
        country: c,
        language: d,
        ids: p
      }, "Failed to fetch gridboxes"), _
    }
  }
  async function r(c, d, p) {
    try {
      const u = hr(d);
      return Ia(c, {
        method: "GET",
        timeout: p,
        query: u
      })
    } catch (u) {
      throw a.error({
        err: u,
        url: c,
        params: d
      }, "Failed to fetch Criteo products"), u
    }
  }
  return {
    fetchProducts: l,
    fetchGridboxes: i,
    fetchCriteoProducts: r
  }
}
const gr = "x-ms-zone",
  yr = "x-ms-warehouse";

function Hs() {
  const e = ge(),
    s = ye(),
    t = re(),
    a = Et(),
    o = _r(),
    l = Os(),
    i = Ze(),
    r = Ls(),
    c = Ts(),
    d = xs(),
    p = br(),
    u = Ae(),
    _ = m(() => o.iprCookie.value ?? et()),
    v = et(),
    b = et(),
    $ = et(),
    T = xe()
    .query.isEmbedded === "true" ? 200 : 404,
    L = Da();
  async function A(F = e.currentBatchIndex) {
    if (!(e.isBatchLoaded(F) || e.isBatchPending(F))) try {
      e.pendingBatches.add(F), e.isPending = !0;
      const N = {
        ...Mt()
        .queryParams.value,
        offset: F * u.getConfigValue("fetchSize")
      };
      e.variationKey && (N.v = e.variationKey), _.value && (N.tug = _.value), e.effectiveDate && (N.effectiveDate = e.effectiveDate);
      const j = v && b ? {
          zone: v,
          warehouse: b
        } : void 0,
        P = await p.fetchProducts(N, j);
      return c.resultType = P.resultType, Ta(P) && (e.categoryId = P.categoryId), s.setProductBatch(F, P.items), s.numFound = P.numFound ?? 0, t.setFacetList(P.facets), t.setSelections(P.selections), a.setSorts(P.sorts || [], P.sort?.code), l.setTeasers(P.teasers || {}), i.setDetails(P.details || {}), r.setAdvisors(P.advisors || []), e.isSemanticSearchOnly = P.xPayload?.keywordResults?.num_items_found === 0, e.breadcrumbPageId = P.breadcrumbs?.length ? P.breadcrumbs[0].link?.pageId : void 0, P
    } catch (N) {
      if (N instanceof $s) return d.info({
        requestedBy: L.href,
        redirectedTo: N.redirectUrl,
        definedBy: "api_response_type_redirect",
        referer: $ || "No referer provided"
      }, `Redirecting user to ${N.redirectUrl}`), H(), Pe(N.redirectUrl, {
        external: !0
      });
      throw N instanceof Is ? (s.numFound = 0, c.resultType = "empty", Oa({
        statusCode: T,
        statusMessage: "Not found",
        data: N.type
      })) : (s.numFound = 0, c.resultType = "error", N)
    } finally {
      e.pendingBatches.delete(F), e.isPending = !1
    }
  }

  function H() {
    e.currentBatchIndex === 0 && s.resetProducts()
  }
  return {
    getData: A
  }
}
const Sr = I({
    __name: "Products",
    setup(e) {
      const s = ye(),
        t = Ae(),
        a = ge(),
        {
          trackLoadMore: o
        } = Me(),
        {
          clientBatches: l
        } = or(),
        i = Hs(),
        {
          t: r
        } = ue(),
        c = m(() => t.getConfigValue("paginationType") === "loadMore");
      async function d() {
        _(`#product_${a.nextOffset} .odsc-tile__link`)
          .then(v => {
            v.focus()
          }), await Pe({
            path: xe()
              .path,
            query: {
              ...xe()
              .query,
              offset: ge()
                .nextOffset
            }
          }, {
            replace: !0
          }), o()
      }

      function p() {
        t.getConfigValue("paginationType") === "infinity" && d()
      }
      async function u(v) {
        await i.getData(v)
      }
      const _ = (v, b = 3e4) => new Promise(($, T) => {
        const L = Date.now();
        (function A() {
          const H = document.querySelector(v);
          if (H) return $(H);
          if (Date.now() - L > b) return T(new Error("Element not found"));
          requestAnimationFrame(A)
        })()
      });
      return (v, b) => {
        const $ = El,
          T = Kl,
          L = Xl;
        return f(), h(D, null, [g($, {
            batches: n(l),
            onOnLoadMoreClick: u,
            onOnPlaceholderVisible: u
          }, null, 8, ["batches"]), g(T, {
            maximumAvailableItems: n(s)
              .numFound,
            fetchedItemCount: n(s)
              .numberOfFetchedProducts,
            isPending: n(a)
              .isPending,
            showProgressBar: n(s)
              .hasMoreProducts && !n(t)
              .getConfigValue("isEmbedded"),
            productsShownMsg: n(r)("Search.productsShown"),
            productsTotalMsg: n(r)("Search.productsTotal")
          }, null, 8, ["maximumAvailableItems", "fetchedItemCount", "isPending", "showProgressBar", "productsShownMsg", "productsTotalMsg"]), n(s)
          .hasMoreProducts ? (f(), C(L, {
            key: 0,
            isPending: n(a)
              .isPending,
            loadMoreMsg: n(r)("Search.loadMore"),
            nextPageMsg: n(r)("Search.nextPage"),
            fetchedItemCount: n(s)
              .numberOfFetchedProducts,
            maximumAvailableItems: n(s)
              .numFound,
            isVisible: n(c),
            theme: "positive",
            onOnLoadMoreClick: d,
            onOnLoadMoreVisible: p
          }, null, 8, ["isPending", "loadMoreMsg", "nextPageMsg", "fetchedItemCount", "maximumAvailableItems", "isVisible"])) : k("", !0)
        ], 64)
      }
    }
  }),
  Cr = Object.assign(Sr, {
    __name: "SNBProducts"
  }),
  kr = ({
    containerRef: e,
    canUseInlineLayout: s,
    measuringClassName: t,
    watchSources: a = []
  }) => {
    const o = y(!1);
    let l;
    const i = () => {
        const c = e.value;
        if (!s.value || !c) {
          o.value = !1;
          return
        }
        c.classList.add(t);
        const d = c.scrollWidth <= c.clientWidth;
        c.classList.remove(t), o.value = d
      },
      r = () => {
        $e(() => {
          requestAnimationFrame(i)
        })
      };
    return q(() => {
      l = new ResizeObserver(() => {
        r()
      }), e.value && l.observe(e.value), typeof document < "u" && "fonts" in document && document.fonts.ready.then(() => {
        r()
      }), r()
    }), R([s, ...a], () => {
      r()
    }, {
      flush: "post"
    }), R(() => e.value, (c, d) => {
      l && (d && l.unobserve(d), c && l.observe(c), r())
    }), _t(() => {
      l?.disconnect()
    }), {
      isInlineLayout: o
    }
  },
  wr = I({
    __name: "NewFilteringFacetsOverlayFooter",
    props: {
      isCalloutOpen: {
        type: Boolean
      }
    },
    setup(e) {
      const s = ye(),
        t = re(),
        {
          hideOverlay: a,
          selectedFacet: o
        } = Je(),
        {
          t: l
        } = ue(),
        {
          clearAllFilters: i
        } = Vt(),
        r = y(null),
        c = m(() => t.selectionList.length > 0),
        d = m(() => o.value?.label !== void 0 ? l("Search.filterSelect", {
          filter: o.value.label
        }) : l("Search.showProductsTotal", {
          count: s.numFound
        })),
        {
          isInlineLayout: p
        } = kr({
          containerRef: r,
          canUseInlineLayout: c,
          measuringClassName: "s-facets-overlay-footer--measuring-inline",
          watchSources: [d, () => l("Search.clearAllFilters"), () => l("Search.showProductsTotal", {
            count: s.numFound
          })]
        });
      return (u, _) => (f(), h("div", {
        ref_key: "footerContainer",
        ref: r,
        class: O(["s-facets-overlay-footer", {
          "s-facets-overlay-footer--inline": n(c) && n(p)
        }])
      }, [n(c) ? (f(), C(n(ae), {
        key: 0,
        level: "secondary",
        label: n(l)("Search.clearAllFilters"),
        class: "s-facets-overlay-footer__button",
        onClick: n(i)
      }, null, 8, ["label", "onClick"])) : k("", !0), g(n(ae), {
        label: e.isCalloutOpen ? n(d) : n(l)("Search.showProductsTotal", {
          count: n(s)
            .numFound
        }),
        class: "s-facets-overlay-footer__button",
        isDisabled: !!n(o) && !n(t)
          .hasSelection(n(o)
            ?.code),
        onClick: n(a)
      }, null, 8, ["label", "isDisabled", "onClick"])], 2))
    }
  }),
  xr = Object.assign(G(wr, [
    ["__scopeId", "data-v-e070e478"]
  ]), {
    __name: "SNBNewFilteringFacetsOverlayFooter"
  }),
  $r = I({
    __name: "FacetsOverlayFooter",
    props: {
      isCalloutOpen: {
        type: Boolean
      }
    },
    setup(e) {
      const s = ye(),
        t = re(),
        {
          hideOverlay: a,
          selectedFacet: o
        } = Je(),
        {
          t: l
        } = ue(),
        {
          clearAllFilters: i
        } = Vt(),
        r = m(() => o.value?.label !== void 0 ? l("Search.filterSelect", {
          filter: o.value.label
        }) : l("Search.showProductsTotal", {
          count: s.numFound
        }));
      return (c, d) => (f(), h(D, null, [n(t)
        .selectionList.length > 0 ? (f(), C(n(ae), {
          key: 0,
          level: "tertiary",
          label: n(l)("Search.clearAllFilters"),
          class: "s-facets-overlay-footer__button",
          onClick: n(i)
        }, null, 8, ["label", "onClick"])) : k("", !0), g(n(ae), {
          label: e.isCalloutOpen ? n(r) : n(l)("Search.showProductsTotal", {
            count: n(s)
              .numFound
          }),
          class: "s-facets-overlay-footer__button",
          isDisabled: !!n(o) && !n(t)
            .hasSelection(n(o)
              ?.code),
          onClick: n(a)
        }, null, 8, ["label", "isDisabled", "onClick"])
      ], 64))
    }
  }),
  Ir = Object.assign($r, {
    __name: "SNBFacetsOverlayFooter"
  }),
  Tr = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

function Or(e) {
  const s = () => document.querySelector(e);
  return {
    focusFirst: () => {
      const a = s();
      if (!a) return;
      const o = a.querySelector(Tr);
      o && o.focus()
    }
  }
}
const Lr = ["aria-label"],
  Br = {
    key: 0,
    class: "s-facets-sheet__list-item s-facets-sheet__list-item--toggle"
  },
  Pr = {
    key: 0,
    class: "s-facets-sheet__list-item__selected"
  },
  Ar = {
    class: "s-facets-sheet__facets",
    "data-testselector": "s-facets-sheet__facets"
  },
  Mr = ["onClick"],
  Er = {
    key: 0,
    class: "s-facets-sheet__list-item__selected"
  },
  Nr = {
    class: "s-facets-sheet__footer"
  },
  Rr = ["aria-label"],
  Fr = {
    key: 0,
    class: "s-facets-sheet__facets__selected"
  },
  Dr = {
    class: "s-facets-sheet__footer"
  },
  Vr = I({
    __name: "FacetsOverlay",
    props: {
      ctaBtnLabel: {}
    },
    emits: ["onSortSelection"],
    setup(e, {
      emit: s
    }) {
      const t = Ae(),
        a = ge(),
        o = re(),
        l = Et(),
        i = ze(),
        {
          isFeatureEnabled: r
        } = Ye(),
        {
          t: c
        } = ue(),
        {
          selectedFacet: d,
          selectedFacetCode: p,
          isOverlayVisible: u,
          setUpdatedFacets: _,
          isSortDropdownVisible: v,
          isCalloutOpenAttr: b,
          showSortDropdown: $,
          hideSortDropdown: T
        } = Je(),
        {
          trackFilter: L
        } = Me(),
        {
          focusFirst: A
        } = Or(".s-facet-wrapper, .s-sorts"),
        H = y(null),
        F = Ue("sortingButton"),
        N = Ue("contentContainer"),
        j = m(() => r(Qe.isNewFiltering)),
        P = m(() => o.facetList.facets.filter(M => {
          const Y = ["store"];
          return t.renderingConfiguration.showCategoryPills && Y.push("category"), !Y.includes(M.code)
        })),
        ie = s;
      q(() => {
        i.endpointAPI === he.category && o.setBlacklistedFacetCodes([La])
      });
      const se = m(() => b.value && Ce.value ? d.value?.label : b.value && v.value ? c("Search.sort") : c("Search.filterAndSort")),
        ve = m(() => b.value && Ce.value ? c("Search.filterSelect", {
          filter: d.value?.label
        }) : b.value && v.value ? c("Search.sort") : c("Search.filterAndSort")),
        Se = m(() => o.facetList.facets.find(M => M.topValues.facet.code === "store")),
        Ce = m(() => !v.value && !!d.value?.label);

      function J(M = p.value) {
        if (M) return (o.selectionMap.get(M) ?? [])
          .sort((Y, ne) => Y.localeCompare(ne))
          .join(", ")
      }
      const oe = () => {
        $(), setTimeout(A, 0)
      };

      function Ie(M) {
        p.value = M, b.value = !0, T(), setTimeout(A, 0)
      }
      async function Z(M) {
        _(M), L(M, !1, !0), o.lastSelectedInputId = M.inputId, await Pe(M.href)
      }

      function ke(M) {
        l.setSortingOptionToTrack(M), L(void 0, !0, !0), ie("onSortSelection", M)
      }
      R(N, M => {
        M && de()
      });

      function de() {
        H.value ? H.value.focus() : F.value?.focus()
      }
      return (M, Y) => {
        const ne = Cn,
          we = xr,
          fe = Ir,
          Ne = Ba;
        return f(), h("div", null, [g(n(uo), {
          isCalloutOpen: n(b),
          "onUpdate:isCalloutOpen": Y[0] || (Y[0] = X => Kt(b) ? b.value = X : null),
          isOpen: n(u),
          "onUpdate:isOpen": Y[1] || (Y[1] = X => Kt(u) ? u.value = X : null),
          class: "s-facets-sheet__wrapper",
          title: n(se),
          isInvisibleWhenClosed: !0,
          zIndex: 9999
        }, {
          callout: w(() => [S("section", {
            class: "s-facets-sheet__content",
            "aria-label": n(ve)
          }, [!n(v) && n(d) ? (f(), h("div", Fr, [g(ne, K(n(d), {
            isDisabled: n(a)
              .isPending,
            isOverlayVisible: n(u),
            filterMinLabel: n(c)("Search.filterMin"),
            filterMaxLabel: n(c)("Search.filterMax"),
            onOnValueChange: Z
          }), null, 16, ["isDisabled", "isOverlayVisible", "filterMinLabel", "filterMaxLabel"])])) : (f(), C(Ne, {
            key: 1,
            sorts: n(l)
              .sorts,
            onOnSortSelection: ke
          }, null, 8, ["sorts"])), S("div", Dr, [n(j) ? (f(), C(we, {
            key: 0,
            isCalloutOpen: n(b)
          }, null, 8, ["isCalloutOpen"])) : (f(), C(fe, {
            key: 1,
            isCalloutOpen: n(b)
          }, null, 8, ["isCalloutOpen"]))])], 8, Rr)]),
          default: w(() => [S("section", {
            ref_key: "contentContainer",
            ref: N,
            class: "s-facets-sheet__content",
            "aria-label": n(ve)
          }, [n(Se) ? (f(), h("div", Br, [g(ne, K(n(Se), {
            ref_key: "toggleButton",
            ref: H,
            isDisabled: n(a)
              .isPending,
            isOverlayVisible: n(u),
            filterMinLabel: n(c)("Search.filterMin"),
            filterMaxLabel: n(c)("Search.filterMax"),
            onOnValueChange: Z
          }), null, 16, ["isDisabled", "isOverlayVisible", "filterMinLabel", "filterMaxLabel"])])) : k("", !0), S("button", {
            ref_key: "sortingButton",
            ref: F,
            tabindex: "0",
            type: "button",
            class: "s-facets-sheet__list-item",
            onClick: oe
          }, [ct(V(n(c)("Search.sort")) + " ", 1), n(l)
            .selectedSort ? (f(), h("span", Pr, V(n(l)
              .selectedSort.label), 1)) : k("", !0)
          ], 512), S("ul", Ar, [(f(!0), h(D, null, te(n(P), X => (f(), h("li", {
            key: X.topValues.facet.code
          }, [S("button", {
            tabindex: "0",
            type: "button",
            class: "s-facets-sheet__list-item",
            onClick: Te => Ie(X.code)
          }, [ct(V(X.label) + " ", 1), J(X.code) ? (f(), h("span", Er, V(J(X.code)), 1)) : k("", !0)], 8, Mr)]))), 128))]), S("div", Nr, [n(j) ? (f(), C(we, {
            key: 0
          })) : (f(), C(fe, {
            key: 1
          }))])], 8, Lr)]),
          _: 1
        }, 8, ["isCalloutOpen", "isOpen", "title"])])
      }
    }
  }),
  zr = Object.assign(G(Vr, [
    ["__scopeId", "data-v-d43e1205"]
  ]), {
    __name: "SNBFacetsOverlay"
  });

function Wr() {
  const e = Ae(),
    s = ge(),
    t = ye(),
    a = ze(),
    o = Ye(),
    l = xe(),
    i = y(!1),
    r = m(() => i.value && t.numFound > 0);
  return q(() => {
    const c = o.isFeatureEnabled(Qe.showAlternativeProductsHint),
      d = a.endpointAPI === he.search,
      p = s.isSemanticSearchOnly,
      u = !(l.query.offset === void 0 || Number(l.query.offset) === 0),
      _ = e.getConfigValue("isEmbedded"),
      v = c && d && p && !u && !_;
    i.value = v
  }), {
    showSemanticSearchHint: r
  }
}
const Gr = Ds("components/BreadcrumsPlaceholder/BreadcrumbsPlaceholder.vue", () => ks(() => import("./9_R7MKMz.js"), __vite__mapDeps([3, 1, 2]), import.meta.url)
    .then(e => e.default || e)),
  Hr = {
    class: "s-page__content"
  },
  Ur = {
    class: "s-page__results"
  },
  jr = {
    key: 0
  },
  qr = I({
    __name: "page",
    props: {
      pageHeading: {},
      pageSubHeading: {},
      hasPageHeader: {
        type: Boolean
      },
      wonStyle: {}
    },
    emits: ["onSortSelection"],
    setup(e, {
      emit: s
    }) {
      const t = re(),
        a = Et(),
        o = Ae(),
        l = ze(),
        i = Ts(),
        {
          showOverlay: r,
          showSortDropdown: c
        } = Je(),
        {
          trackFilterIntent: d
        } = Me(),
        {
          showSemanticSearchHint: p
        } = Wr(),
        {
          t: u
        } = ue(),
        _ = m(() => o.getRenderingValue("onlyGrid")),
        v = e,
        b = At(),
        $ = s;
      R(() => t.selectionList, (P, ie) => {
        P.length !== ie.length && !l.isContentPage && F()
      });
      const T = m(() => {
          if (v.hasPageHeader) return !1;
          const P = !!v.pageHeading;
          return i.isOkResult && !l.isCqe && !p.value && P && !o.getConfigValue("isEmbedded")
        }),
        L = m(() => !i.isOkResult || v.hasPageHeader ? !1 : v.wonStyle !== void 0),
        A = m(() => T.value && !L.value);

      function H(P) {
        F(), $("onSortSelection", P)
      }

      function F() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      }
      async function N() {
        c()
      }

      function j() {
        r(), d()
      }
      return (P, ie) => {
        const se = qo,
          ve = Gr,
          Se = Ma,
          Ce = Xo,
          J = on,
          oe = wn,
          Ie = Gn,
          Z = Un,
          ke = sl,
          de = rl,
          M = dl,
          Y = Cr,
          ne = zr,
          we = Aa;
        return f(), h(D, null, [S("main", null, [n(L) ? (f(), C(se, {
          key: 0
        })) : k("", !0), g(ve, {
          "hydrate-never": ""
        }), g(n(Pa), K({
          class: ["s-page", {
            "s-page--has-header": e.hasPageHeader
          }]
        }, n(b)), {
          default: w(() => [g(n(tt), {
              width: 12
            }, {
              default: w(() => [n(i)
                .isEmptyResult || n(i)
                .isErrorResult ? (f(), C(Se, {
                  key: 0
                })) : n(p) ? (f(), C(Ce, {
                  key: 1
                })) : k("", !0)
              ]),
              _: 1
            }), n(_) ? k("", !0) : (f(), C(n(tt), {
              key: 0,
              width: 12,
              class: O({
                "s-page__header--has-page_heading": n(A)
              })
            }, {
              default: w(() => [n(A) ? (f(), C(J, {
                key: 0,
                headline: e.pageHeading,
                subHeadline: void 0
              }, null, 8, ["headline"])) : k("", !0), g(oe, {
                position: "contentAboveSearchResult"
              }), g(oe, {
                position: "teaserAboveSearch"
              })]),
              _: 1
            }, 8, ["class"])), n(i)
            .isOkResult ? (f(), C(n(tt), {
              key: 1,
              width: 12
            }, {
              default: w(() => [S("section", Hr, [g(Z, {
                  renderingConfigurationKey: "showCategoryPills"
                }, {
                  default: w(() => [g(Ie)]),
                  _: 1
                }), n(_) ? n(l)
                .isContentPage ? (f(), C(M, {
                  key: 1
                })) : k("", !0) : (f(), h(D, {
                  key: 0
                }, [g(ke), g(n(ae), {
                  class: "s-page__content__filters-button",
                  as: "button",
                  label: n(u)("Search.filterAndSort"),
                  icon: "controls",
                  level: "secondary",
                  theme: "positive",
                  onClick: j
                }, null, 8, ["label"]), g(de, {
                  productsMessage: e.pageSubHeading,
                  sortingMessage: n(u)("Search.sortBy"),
                  selectedSort: n(a)
                    .selectedSort?.label,
                  onOnSortSelection: N
                }, null, 8, ["productsMessage", "sortingMessage", "selectedSort"]), g(M)], 64))
              ]), S("section", Ur, [g(Y)])]),
              _: 1
            })) : k("", !0), n(_) ? k("", !0) : (f(), C(n(tt), {
              key: 2,
              width: 12
            }, {
              default: w(() => [g(oe, {
                position: "teaserBelowSearch"
              }), g(oe, {
                position: "contentBelowSearchResult"
              })]),
              _: 1
            }))
          ]),
          _: 1
        }, 16, ["class"])]), n(_) ? k("", !0) : (f(), h("aside", jr, [g(we, null, {
          default: w(() => [g(ne, {
            onOnSortSelection: H
          })]),
          _: 1
        })])), g(n(Fo), {
          themeClass: "ods-brand-lidl ods-theme-promotion",
          eventName: n(Ws),
          zIndex: 99999
        }, null, 8, ["eventName"])], 64)
      }
    }
  }),
  Jr = Object.assign(G(qr, [
    ["__scopeId", "data-v-7e24a8b9"]
  ]), {
    __name: "SNBPage"
  });

function Yr() {
  const e = re();

  function s() {
    e.lastSelectedInputId && (document.getElementById(e.lastSelectedInputId)
      ?.focus(), e.lastSelectedInputId = void 0)
  }
  return {
    focusLastSelection: s
  }
}

function Xr() {
  const e = ge(),
    s = ye(),
    t = Yr(),
    a = Hs(),
    {
      queryParamsWithoutOffset: o
    } = Mt();
  R(o, async (i, r) => {
    JSON.stringify(i) !== JSON.stringify(r) && (s.resetProducts(), s.initProductPlaceholder(!0)), await a.getData(), t.focusLastSelection()
  });
  async function l() {
    return e.initServerOnlyState(), s.resetProducts(), s.initProductPlaceholder(), a.getData()
  }
  return {
    initPage: l
  }
}
export {
  Jr as _, Ze as a, br as b, Vs as c, Xr as u
};