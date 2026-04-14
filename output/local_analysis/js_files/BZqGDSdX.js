import {
  b4 as _t,
  bk as ft,
  bl as ze,
  av as vt,
  a5 as je,
  bm as pt,
  $ as Q,
  a2 as mt,
  g as p,
  Y as j,
  a4 as Se,
  a1 as bt,
  A as T,
  a0 as Ae,
  a6 as oe,
  bb as gt,
  u as f,
  aV as ht,
  bn as Me,
  m as Ce,
  an as le,
  d as A,
  aA as ye,
  o as v,
  a as G,
  w as F,
  a8 as U,
  ac as H,
  ad as ee,
  au as He,
  bo as qe,
  c as D,
  af as x,
  ae as Ve,
  bp as Ke,
  ab as y,
  ah as Ct,
  t as B,
  f as R,
  ao as Ee,
  z as O,
  aq as ge,
  as as he,
  r as _e,
  bq as Xe,
  br as J,
  bs as xe,
  a7 as Re,
  b as N,
  ap as Qe,
  aw as yt,
  F as se,
  ar as de,
  al as kt,
  ak as Pt,
  Z as Dt,
  bt as ne,
  a$ as fe,
  bf as Ye,
  bu as Oe,
  aP as te,
  bv as Ie,
  ag as wt,
  bw as Lt,
  U as xt,
  j as Ze,
  b8 as $t,
  bx as Tt,
  aN as Je,
  p as Vt,
  by as Rt,
  aO as Ne,
  q as St,
  R as Et,
  bz as It,
  bA as Ft,
  bB as At
} from "./QvGuN4mp.js";
import {
  _ as Mt
} from "./XKpuMyXA.js";
const Ot = {
  trailing: !0
};

function Bt(e, l = 25, t = {}) {
  if (t = {
      ...Ot,
      ...t
    }, !Number.isFinite(l)) throw new TypeError("Expected `wait` to be a finite number");
  let o, s, i = [],
    a, n;
  const r = (d, b) => (a = Gt(e, d, b), a.finally(() => {
      if (a = null, t.trailing && n && !s) {
        const L = r(d, n);
        return n = null, L
      }
    }), a),
    c = function(...d) {
      return t.trailing && (n = d), a || new Promise(b => {
        const L = !s && t.leading;
        clearTimeout(s), s = setTimeout(() => {
          s = null;
          const g = t.leading ? o : r(this, d);
          n = null;
          for (const k of i) k(g);
          i = []
        }, l), L ? (o = r(this, d), b(o)) : i.push(b)
      })
    },
    u = d => {
      d && (clearTimeout(d), s = null)
    };
  return c.isPending = () => !!s, c.cancel = () => {
    u(s), i = [], n = null
  }, c.flush = () => {
    if (u(s), !n || a) return;
    const d = n;
    return n = null, r(this, d)
  }, c
}
async function Gt(e, l, t) {
  return await e.apply(l, t)
}

function qs(...e) {
  const l = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
  Ut(e[0], e[1]) && e.unshift(l);
  let [t, o, s = {}] = e, i = !1;
  const a = p(() => j(t));
  if (typeof a.value != "string") throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
  if (typeof o != "function") throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
  const n = _t();
  s.server ??= !0, s.default ??= zt, s.getCachedData ??= tt, s.lazy ??= !1, s.immediate ??= !0, s.deep ??= ft.deep, s.dedupe ??= "cancel", s._functionName, n._asyncData[a.value];

  function r() {
    const g = {
      cause: "initial",
      dedupe: s.dedupe
    };
    return n._asyncData[a.value]?._init || (g.cachedData = s.getCachedData(a.value, n, {
      cause: "initial"
    }), n._asyncData[a.value] = Be(n, a.value, o, s, g.cachedData)), () => n._asyncData[a.value].execute(g)
  }
  const c = r(),
    u = n._asyncData[a.value];
  u._deps++;
  const d = s.server !== !1 && n.payload.serverRendered;
  {
    let g = function(h) {
      const P = n._asyncData[h];
      P?._deps && (P._deps--, P._deps === 0 && P?._off())
    };
    const k = Se();
    if (k && d && s.immediate && !k.sp && (k.sp = []), k && !k._nuxtOnBeforeMountCbs) {
      k._nuxtOnBeforeMountCbs = [];
      const h = k._nuxtOnBeforeMountCbs;
      ze(() => {
        h.forEach(P => {
          P()
        }), h.splice(0, h.length)
      }), vt(() => h.splice(0, h.length))
    }
    const W = k && (k._nuxtClientOnly || je(pt, !1));
    d && n.isHydrating && (u.error.value || u.data.value !== void 0) ? u.status.value = u.error.value ? "error" : "success" : k && (!W && n.payload.serverRendered && n.isHydrating || s.lazy) && s.immediate ? k._nuxtOnBeforeMountCbs.push(c) : s.immediate && u.status.value !== "success" && c();
    const S = bt(),
      $ = Q(a, (h, P) => {
        if ((h || P) && h !== P) {
          i = !0;
          const I = n._asyncData[P]?.data.value !== void 0,
            Y = n._asyncDataPromises[P] !== void 0,
            X = {
              cause: "initial",
              dedupe: s.dedupe
            };
          if (!n._asyncData[h]?._init) {
            let Z;
            P && I ? Z = n._asyncData[P].data.value : (Z = s.getCachedData(h, n, {
              cause: "initial"
            }), X.cachedData = Z), n._asyncData[h] = Be(n, h, o, s, Z)
          }
          n._asyncData[h]._deps++, P && g(P), (s.immediate || I || Y) && n._asyncData[h].execute(X), Me(() => {
            i = !1
          })
        }
      }, {
        flush: "sync"
      }),
      E = s.watch ? Q(s.watch, () => {
        i || (n._asyncData[a.value]?._execute.isPending() && Me(() => {
          n._asyncData[a.value]?._execute.flush()
        }), n._asyncData[a.value]?._execute({
          cause: "watch",
          dedupe: s.dedupe
        }))
      }) : () => {};
    S && mt(() => {
      $(), E(), g(a.value)
    })
  }
  const b = {
      data: me(() => n._asyncData[a.value]?.data),
      pending: me(() => n._asyncData[a.value]?.pending),
      status: me(() => n._asyncData[a.value]?.status),
      error: me(() => n._asyncData[a.value]?.error),
      refresh: (...g) => n._asyncData[a.value]?._init ? n._asyncData[a.value].execute(...g) : r()(),
      execute: (...g) => b.refresh(...g),
      clear: () => {
        const g = n._asyncData[a.value];
        if (g?._abortController) try {
          g._abortController.abort(new DOMException("AsyncData aborted by user.", "AbortError"))
        } finally {
          g._abortController = void 0
        }
        et(n, a.value)
      }
    },
    L = Promise.resolve(n._asyncDataPromises[a.value])
    .then(() => b);
  return Object.assign(L, b), L
}

function me(e) {
  return p({
    get() {
      return e()
        ?.value
    },
    set(l) {
      const t = e();
      t && (t.value = l)
    }
  })
}

function Ut(e, l) {
  return !(typeof e == "string" || typeof e == "object" && e !== null || typeof e == "function" && typeof l == "function")
}

function et(e, l) {
  l in e.payload.data && (e.payload.data[l] = void 0), l in e.payload._errors && (e.payload._errors[l] = void 0), e._asyncData[l] && (e._asyncData[l].data.value = f(e._asyncData[l]._default()), e._asyncData[l].error.value = void 0, e._asyncData[l].status.value = "idle"), l in e._asyncDataPromises && (e._asyncDataPromises[l] = void 0)
}

function Wt(e, l) {
  const t = {};
  for (const o of l) t[o] = e[o];
  return t
}

function Be(e, l, t, o, s) {
  e.payload._errors[l] ??= void 0;
  const i = o.getCachedData !== tt,
    a = t,
    n = o.deep ? T : Ae,
    r = s !== void 0,
    c = e.hook("app:data:refresh", async d => {
      (!d || d.includes(l)) && await u.execute({
        cause: "refresh:hook"
      })
    }),
    u = {
      data: n(r ? s : o.default()),
      pending: p(() => u.status.value === "pending"),
      error: ht(e.payload._errors, l),
      status: Ae("idle"),
      execute: (...d) => {
        const [b, L = void 0] = d, g = b && L === void 0 && typeof b == "object" ? b : {};
        if (e._asyncDataPromises[l] && (g.dedupe ?? o.dedupe) === "defer") return e._asyncDataPromises[l];
        {
          const S = "cachedData" in g ? g.cachedData : o.getCachedData(l, e, {
            cause: g.cause ?? "refresh:manual"
          });
          if (S !== void 0) return e.payload.data[l] = u.data.value = S, u.error.value = void 0, u.status.value = "success", Promise.resolve(S)
        }
        u._abortController && u._abortController.abort(new DOMException("AsyncData request cancelled by deduplication", "AbortError")), u._abortController = new AbortController, u.status.value = "pending";
        const k = new AbortController,
          W = new Promise((S, $) => {
            try {
              const E = g.timeout ?? o.timeout,
                h = jt([u._abortController?.signal, g?.signal], k.signal, E);
              if (h.aborted) {
                const P = h.reason;
                $(P instanceof Error ? P : new DOMException(String(P ?? "Aborted"), "AbortError"));
                return
              }
              return h.addEventListener("abort", () => {
                  const P = h.reason;
                  $(P instanceof Error ? P : new DOMException(String(P ?? "Aborted"), "AbortError"))
                }, {
                  once: !0,
                  signal: k.signal
                }), Promise.resolve(a(e, {
                  signal: h
                }))
                .then(S, $)
            } catch (E) {
              $(E)
            }
          })
          .then(async S => {
            let $ = S;
            o.transform && ($ = await o.transform(S)), o.pick && ($ = Wt($, o.pick)), e.payload.data[l] = $, u.data.value = $, u.error.value = void 0, u.status.value = "success"
          })
          .catch(S => {
            if (e._asyncDataPromises[l] && e._asyncDataPromises[l] !== W || u._abortController?.signal.aborted) return e._asyncDataPromises[l];
            if (typeof DOMException < "u" && S instanceof DOMException && S.name === "AbortError") return u.status.value = "idle", e._asyncDataPromises[l];
            u.error.value = gt(S), u.data.value = f(o.default()), u.status.value = "error"
          })
          .finally(() => {
            k.abort(), delete e._asyncDataPromises[l]
          });
        return e._asyncDataPromises[l] = W, e._asyncDataPromises[l]
      },
      _execute: Bt((...d) => u.execute(...d), 0, {
        leading: !0
      }),
      _default: o.default,
      _deps: 0,
      _init: !0,
      _hash: void 0,
      _off: () => {
        c(), e._asyncData[l]?._init && (e._asyncData[l]._init = !1), i || oe(() => {
          e._asyncData[l]?._init || (et(e, l), u.execute = () => Promise.resolve())
        })
      }
    };
  return u
}
const zt = () => {},
  tt = (e, l, t) => {
    if (l.isHydrating) return l.payload.data[e];
    if (t.cause !== "refresh:manual" && t.cause !== "refresh:hook") return l.static.data[e]
  };

function jt(e, l, t) {
  const o = e.filter(a => !!a);
  if (typeof t == "number" && t >= 0) {
    const a = AbortSignal.timeout?.(t);
    a && o.push(a)
  }
  if (AbortSignal.any) return AbortSignal.any(o);
  const s = new AbortController;
  for (const a of o)
    if (a.aborted) {
      const n = a.reason ?? new DOMException("Aborted", "AbortError");
      try {
        s.abort(n)
      } catch {
        s.abort()
      }
      return s.signal
    } const i = () => {
    const n = o.find(r => r.aborted)
      ?.reason ?? new DOMException("Aborted", "AbortError");
    try {
      s.abort(n)
    } catch {
      s.abort()
    }
  };
  for (const a of o) a.addEventListener?.("abort", i, {
    once: !0,
    signal: l
  });
  return s.signal
}
const Ht = (e = "") => {
    const l = T(""),
      t = Se(),
      o = t?.uid;
    return Ce(() => {
      oe(() => {
        const s = "__ODS_UID_" + o;
        l.value = e ? s + "_" + e.replace(/\s+/g, "_") : s
      })
    }), l
  },
  qt = Symbol(),
  q = {
    Info: "info",
    Warning: "warning",
    Error: "error"
  },
  ie = {},
  Kt = e => {
    const l = {
        enableLogs: !1,
        logLevel: q.Error
      },
      t = je(qt, l),
      o = s => {
        if (t && t.enableLogs) switch (s) {
          case q.Info:
            return !0;
          case q.Warning:
            return t.logLevel === q.Warning || t.logLevel === q.Error;
          case q.Error:
            return t.logLevel === q.Error
        }
        return !1
      };
    return {
      warn: (s, ...i) => {
        o(q.Warning) && console.warn(`[OdsLidl/${e}] - ${s}`, ...i)
      },
      error: (s, ...i) => {
        o(q.Error) && console.error(`[OdsLidl/${e}] - ${s}`, ...i)
      },
      info: (s, ...i) => {
        o(q.Info) && console.log(`[OdsLidl/${e}] - ${s}`, ...i)
      },
      errorOnce: (s, ...i) => {
        o(q.Error) && !ie[s] && (console.error(`[OdsLidl/${e}] - ${s}`, ...i), ie[s] = !0)
      },
      warnOnce: (s, ...i) => {
        o(q.Warning) && !ie[s] && (console.warn(`[OdsLidl/${e}] - ${s}`, ...i), ie[s] = !0)
      },
      infoOnce: (s, ...i) => {
        o(q.Info) && !ie[s] && (console.log(`[OdsLidl/${e}] - ${s}`, ...i), ie[s] = !0)
      }
    }
  },
  at = {
    value: "",
    label: "",
    isDisabled: !1,
    isError: !1,
    isIndeterminate: !1,
    modelValue: "",
    name: "",
    class: ""
  },
  Xt = ["name", "disabled", "isError", "value"],
  Qt = A({
    inheritAttrs: !1,
    __name: "CoreCheckbox",
    props: ee({
      value: {},
      label: {},
      isDisabled: {
        type: Boolean
      },
      isError: {
        type: Boolean
      },
      isIndeterminate: {
        type: Boolean
      },
      name: {},
      modelValue: {},
      class: {},
      baseClass: {}
    }, {
      ...at,
      baseClass: "core-checkbox"
    }),
    emits: ["update:modelValue"],
    setup(e, {
      expose: l,
      emit: t
    }) {
      const o = e,
        s = t,
        i = ye();
      l({
        id: i.id,
        value: o.value,
        isDisabled: o.isDisabled
      });
      const {
        classes: a
      } = qe(o, o.baseClass), n = p({
        get() {
          return o.modelValue
        },
        set(r) {
          s("update:modelValue", r)
        }
      });
      return (r, c) => (v(), D("span", {
        class: y([f(a), o.class])
      }, [x("label", {
        class: y(`${e.baseClass}__label`)
      }, [Ve(x("input", H(r.$attrs, {
        "onUpdate:modelValue": c[0] || (c[0] = u => n.value = u),
        type: "checkbox",
        name: e.name,
        disabled: e.isDisabled,
        isError: e.isError,
        value: e.value,
        class: `${e.baseClass}__input`
      }), null, 16, Xt), [
        [Ke, n.value]
      ]), x("span", {
        class: y(`${e.baseClass}__label-wrapper`)
      }, [Ve(x("span", {
        class: y(`${e.baseClass}__label-content`)
      }, [e.label ? (v(), D("span", {
        key: 0,
        class: y(`${e.baseClass}__label-text`)
      }, B(e.label), 3)) : R("", !0), r.$slots.default ? (v(), D("span", {
        key: 1,
        class: y(`${e.baseClass}__label-slot`)
      }, [U(r.$slots, "default", {}, void 0, !0)], 2)) : R("", !0)], 2), [
        [Ct, e.label || r.$slots.default]
      ])], 2)], 2)], 2))
    }
  }),
  Yt = He(Qt, [
    ["__scopeId", "data-v-c22f9291"]
  ]),
  Zt = A({
    __name: "OdsCheckbox",
    props: ee({
      value: {},
      label: {},
      isDisabled: {
        type: Boolean
      },
      isError: {
        type: Boolean
      },
      isIndeterminate: {
        type: Boolean
      },
      name: {},
      modelValue: {},
      class: {}
    }, {
      ...at
    }),
    emits: ["update:modelValue"],
    setup(e, {
      expose: l,
      emit: t
    }) {
      const o = e,
        s = t,
        i = ye();
      return l({
        id: i.id,
        value: o.value,
        isDisabled: o.isDisabled
      }), (a, n) => (v(), G(f(Yt), H(o, {
        "base-class": "ods-checkbox",
        "onUpdate:modelValue": n[0] || (n[0] = r => s("update:modelValue", r))
      }), {
        default: F(() => [U(a.$slots, "default", {}, void 0, !0)]),
        _: 3
      }, 16))
    }
  }),
  Jt = le(Zt, [
    ["__scopeId", "data-v-8e91a60f"]
  ]),
  st = {
    as: "button"
  },
  Nt = ["src", "alt"],
  ea = A({
    __name: "CoreChip",
    props: ee({
      as: {},
      label: {},
      icon: {},
      imgSrc: {},
      imgAlt: {},
      color: {},
      isActive: {
        type: Boolean
      },
      isDisabled: {
        type: Boolean
      },
      isDeletable: {
        type: Boolean
      },
      baseClass: {}
    }, {
      ...st,
      baseClass: "core-chip"
    }),
    setup(e) {
      Ee(o => ({
        v8312cea0: o.color
      }));
      const l = e,
        t = p(() => ({
          [l.baseClass]: !0,
          [`${l.baseClass}--active`]: l.isActive,
          [`${l.baseClass}--disabled`]: l.isDisabled,
          [`${l.baseClass}--type-image`]: l.imgSrc
        }));
      return (o, s) => (v(), G(_e(e.as), {
        class: y(t.value),
        "aria-disabled": e.isDisabled && e.as === "a",
        "tab-index": e.isDisabled && e.as === "a" ? "-1" : void 0,
        disabled: e.isDisabled && e.as === "button"
      }, {
        default: F(() => [x("span", {
          class: y(`${e.baseClass}__inner`)
        }, [e.icon || e.imgSrc || e.color ? (v(), D("span", {
          key: 0,
          class: y(`${e.baseClass}__before`)
        }, [e.icon ? U(o.$slots, "coreIcon", {
          key: 0,
          iconName: e.icon
        }, () => [O(he, {
          name: e.icon,
          class: y(`${e.baseClass}__icon`)
        }, null, 8, ["name", "class"])]) : e.color ? (v(), D("span", {
          key: 1,
          class: y(`${e.baseClass}__color`)
        }, null, 2)) : e.imgSrc ? (v(), D("img", {
          key: 2,
          class: y(`${e.baseClass}__image`),
          src: e.imgSrc,
          alt: e.imgAlt
        }, null, 10, Nt)) : R("", !0)], 2)) : R("", !0), x("span", {
          class: y(`${e.baseClass}__label`)
        }, B(e.label), 3), e.isDeletable ? U(o.$slots, "coreCloseIcon", {
          key: 1
        }, () => [O(he, {
          name: "close",
          class: y(`${e.baseClass}__icon-close`)
        }, null, 8, ["class"])]) : R("", !0)], 2)]),
        _: 3
      }, 8, ["class", "aria-disabled", "tab-index", "disabled"]))
    }
  }),
  ta = A({
    __name: "OdsChip",
    props: ee({
      as: {},
      label: {},
      icon: {},
      imgSrc: {},
      imgAlt: {},
      color: {},
      isActive: {
        type: Boolean
      },
      isDisabled: {
        type: Boolean
      },
      isDeletable: {
        type: Boolean
      }
    }, {
      ...st
    }),
    setup(e) {
      Ee(t => ({
        v2bcb0d45: t.color
      }));
      const l = e;
      return (t, o) => (v(), G(f(ea), H(l, {
        "base-class": "ods-chip"
      }), {
        coreIcon: F(({
          iconName: s
        }) => [O(ge, {
          name: s,
          class: "ods-chip__icon"
        }, null, 8, ["name"])]),
        coreCloseIcon: F(() => [O(ge, {
          name: "close",
          class: "ods-chip__icon-close"
        })]),
        _: 1
      }, 16))
    }
  }),
  aa = le(ta, [
    ["__scopeId", "data-v-b5c8a5e1"]
  ]),
  sa = A({
    __name: "CoreHint",
    props: ee({
      type: {},
      baseClass: {}
    }, {
      ...Xe,
      baseClass: "core-hint"
    }),
    setup(e) {
      const l = e,
        t = p(() => {
          switch (l.type) {
            case J.Disabled:
            case J.Info:
              return "";
            case J.Error:
              return xe.Error;
            case J.Success:
              return xe.Success;
            case J.Warning:
              return xe.Warning;
            default:
              return ""
          }
        }),
        o = p(() => [l.baseClass, `${l.baseClass}--${l.type}`]);
      return (s, i) => (v(), D("span", {
        class: y(o.value)
      }, [U(s.$slots, "coreIcon", {
        iconName: t.value
      }, () => [t.value ? (v(), G(he, {
        key: 0,
        name: t.value,
        class: y(`${e.baseClass}__icon`)
      }, null, 8, ["name", "class"])) : R("", !0)], !0), x("pre", {
        class: y(`${e.baseClass}__text-wrapper`)
      }, [U(s.$slots, "default", {}, void 0, !0)], 2)], 2))
    }
  }),
  lt = He(sa, [
    ["__scopeId", "data-v-0e121db0"]
  ]),
  Ge = "ods-hint",
  la = A({
    __name: "OdsHint",
    props: ee({
      type: {}
    }, Xe),
    setup(e) {
      const l = e;
      return (t, o) => (v(), G(f(lt), H(l, {
        "base-class": Ge
      }), {
        coreIcon: F(({
          iconName: s
        }) => [s ? (v(), G(ge, {
          key: 0,
          name: s,
          class: y(`${Ge}__icon`)
        }, null, 8, ["name", "class"])) : R("", !0)]),
        default: F(() => [U(t.$slots, "default", {}, void 0, !0)]),
        _: 3
      }, 16))
    }
  }),
  oa = le(la, [
    ["__scopeId", "data-v-3283c1d4"]
  ]),
  na = (e = "") => {
    const l = T(""),
      t = Se(),
      o = t?.uid;
    return Ce(() => {
      oe(() => {
        const s = "__ODS_UID_" + o;
        l.value = e ? s + "_" + e.replace(/\s+/g, "_") : s
      })
    }), l
  },
  ot = {
    hint: "",
    isError: !1,
    isSuccess: !1,
    isDisabled: !1,
    isReadOnly: !1,
    modelValue: "",
    label: "",
    multiline: !1,
    class: "",
    icon: void 0,
    prefix: ""
  },
  ia = A({
    inheritAttrs: !1,
    __name: "CoreInput",
    props: ee({
      hint: {},
      isError: {
        type: Boolean
      },
      isSuccess: {
        type: Boolean
      },
      isDisabled: {
        type: Boolean
      },
      isReadOnly: {
        type: Boolean
      },
      isIndeterminate: {
        type: Boolean
      },
      modelValue: {},
      label: {},
      icon: {},
      multiline: {
        type: Boolean
      },
      class: {},
      prefix: {},
      baseClass: {}
    }, {
      ...ot,
      baseClass: "core-input"
    }),
    emits: ["update:modelValue"],
    setup(e, {
      emit: l
    }) {
      const t = e,
        o = l,
        {
          classes: s,
          hintType: i,
          hintRole: a
        } = qe(t, t.baseClass),
        n = Ht("input"),
        r = p(() => ({
          ...s.value,
          [`${t.baseClass}--multiline`]: t.multiline,
          [`${t.baseClass}--with-icon`]: t.icon
        }));
      return (c, u) => (v(), D("div", {
        class: y([r.value, t.class])
      }, [x("label", {
        class: y(`${e.baseClass}__label`)
      }, [x("span", {
        class: y(`${e.baseClass}__wrapper`)
      }, [e.prefix || c.$slots.prefix ? (v(), D("span", {
        key: 0,
        class: y(`${e.baseClass}__prefix`)
      }, [U(c.$slots, "prefix", {}, () => [N(B(e.prefix), 1)])], 2)) : R("", !0), (v(), G(_e(e.multiline ? "textarea" : "input"), H({
        class: `${e.baseClass}__input`
      }, c.$attrs, {
        placeholder: " ",
        disabled: e.isDisabled,
        value: e.modelValue,
        invalid: e.isError,
        "aria-invalid": e.isError,
        readonly: e.isReadOnly,
        "aria-describedby": f(n),
        onInput: u[0] || (u[0] = d => o("update:modelValue", d.target.value))
      }), null, 16, ["class", "disabled", "value", "invalid", "aria-invalid", "readonly", "aria-describedby"])), x("span", {
        class: y(`${e.baseClass}__label-text`)
      }, B(e.label), 3)], 2), e.icon ? U(c.$slots, "coreIcon", {
        key: 0
      }, () => [O(he, {
        class: y(`${e.baseClass}__icon`),
        name: e.icon
      }, null, 8, ["class", "name"])]) : R("", !0)], 2), e.hint ? U(c.$slots, "coreHint", {
        key: 0,
        id: f(n),
        hintType: f(i),
        hintRole: f(a)
      }, () => [O(lt, {
        id: f(n),
        "aria-disabled": e.isDisabled,
        class: y(`${e.baseClass}__hint`),
        type: f(i),
        role: f(a)
      }, {
        default: F(() => [N(B(e.hint), 1)]),
        _: 1
      }, 8, ["id", "aria-disabled", "class", "type", "role"])]) : R("", !0)], 2))
    }
  }),
  $e = "ods-input",
  ra = A({
    __name: "OdsInput",
    props: ee({
      hint: {},
      isError: {
        type: Boolean
      },
      isSuccess: {
        type: Boolean
      },
      isDisabled: {
        type: Boolean
      },
      isReadOnly: {
        type: Boolean
      },
      isIndeterminate: {
        type: Boolean
      },
      modelValue: {},
      label: {},
      icon: {},
      multiline: {
        type: Boolean
      },
      class: {},
      prefix: {}
    }, {
      ...ot
    }),
    emits: ["update:modelValue"],
    setup(e, {
      emit: l
    }) {
      const t = e,
        o = l;
      return (s, i) => (v(), G(f(ia), H(t, {
        "base-class": $e,
        "onUpdate:modelValue": i[0] || (i[0] = a => o("update:modelValue", a))
      }), Re({
        coreIcon: F(() => [O(ge, {
          class: y(`${$e}__icon`),
          name: e.icon
        }, null, 8, ["class", "name"])]),
        coreHint: F(({
          id: a,
          hintType: n,
          hintRole: r
        }) => [O(oa, {
          id: a,
          "aria-disabled": e.isDisabled,
          class: y(`${$e}__hint`),
          type: n,
          role: r
        }, {
          default: F(() => [N(B(e.hint), 1)]),
          _: 1
        }, 8, ["id", "aria-disabled", "class", "type", "role"])]),
        _: 2
      }, [s.$slots.prefix ? {
        name: "prefix",
        fn: F(() => [U(s.$slots, "prefix", {}, void 0, !0)]),
        key: "0"
      } : void 0]), 1040))
    }
  }),
  Ue = le(ra, [
    ["__scopeId", "data-v-38f45c38"]
  ]),
  ca = {
    class: "ods-rating__icons-wrapper"
  },
  ua = {
    class: "ods-rating__icons ods-rating__icons--outline"
  },
  da = {
    key: 0,
    class: "ods-rating__info"
  },
  _a = {
    class: "ods-rating__info-total"
  },
  fa = A({
    __name: "OdsRating",
    props: {
      ratingType: {
        default: "compressed"
      },
      average: {
        default: 0
      },
      max: {
        default: 5
      },
      total: {
        default: 0
      },
      showInfo: {
        type: Boolean,
        default: !0
      },
      link: {
        default: ""
      },
      titleTemplate: {
        default: "{0} out of {1} stars ({2} total ratings)"
      }
    },
    setup(e) {
      const l = e,
        t = Qe("iconsWrapper"),
        o = p(() => l.titleTemplate.replace("{0}", l.average.toString())
          .replace("{1}", l.max.toString())
          .replace("{2}", l.total.toString())),
        s = () => {
          if (t.value) {
            const i = t.value.querySelectorAll("i"),
              a = Math.floor(l.average),
              n = l.average - a;
            i.forEach((r, c) => {
              c < a ? r.style.background = "var(--ods-rating-star-fill-color)" : c === a ? r.style.background = `linear-gradient(to right, #FFC400FF ${n*100}%, transparent ${n*100}%)` : r.style.background = "transparent"
            })
          }
        };
      return Ce(() => {
        s()
      }), yt(() => {
        s()
      }), (i, a) => (v(), G(_e(e.link ? "a" : "span"), {
        href: e.link,
        title: o.value,
        class: "ods-rating"
      }, {
        default: F(() => [x("span", ca, [x("span", {
          ref_key: "iconsWrapper",
          ref: t,
          class: "ods-rating__icons ods-rating__icons--mask"
        }, [(v(!0), D(se, null, de(e.ratingType === "compressed" ? 1 : e.max, n => (v(), D("span", {
          key: n,
          class: "ods-rating__icon-wrapper"
        }, [...a[0] || (a[0] = [x("i", {
          class: "ods-rating__icon ods-rating__icon--mask"
        }, null, -1)])]))), 128))], 512), x("span", ua, [(v(!0), D(se, null, de(e.ratingType === "compressed" ? 1 : e.max, n => (v(), D("span", {
          key: n,
          class: "ods-rating__icon-wrapper"
        }, [...a[1] || (a[1] = [x("i", {
          class: "ods-rating__icon ods-rating__icon--outline"
        }, null, -1)])]))), 128))])]), e.showInfo ? (v(), D("span", da, [N(B(l.average) + "/" + B(l.max), 1), x("span", _a, "(" + B(l.total) + ")", 1)])) : R("", !0)]),
        _: 1
      }, 8, ["href", "title"]))
    }
  }),
  va = le(fa, [
    ["__scopeId", "data-v-c7359fce"]
  ]),
  pa = {
    Top: "top",
    TopLeft: "topLeft",
    TopRight: "topRight",
    Right: "right",
    RightTop: "rightTop",
    RightBottom: "rightBottom",
    Left: "left",
    LeftTop: "leftTop",
    LeftBottom: "leftBottom",
    Bottom: "bottom",
    BottomLeft: "bottomLeft",
    BottomRight: "bottomRight"
  },
  ma = 200,
  ba = "Escape",
  ga = ["id"],
  ha = {
    class: "ods-tooltip__body",
    tabindex: "-1"
  },
  Ca = A({
    inheritAttrs: !1,
    __name: "OdsTooltip",
    props: {
      title: {
        default: ""
      },
      isOpen: {
        type: Boolean,
        default: void 0
      },
      placement: {
        default: "top"
      },
      zIndex: {
        default: 1e3
      },
      autoAdjustPlacement: {
        type: Boolean,
        default: !0
      },
      as: {
        default: "div"
      }
    },
    emits: ["update:isOpen"],
    setup(e, {
      emit: l
    }) {
      const t = e,
        o = l,
        s = T(!1),
        i = T(!1),
        a = T(null),
        n = T(),
        r = T(void 0),
        c = T(""),
        u = T(),
        d = T(!1),
        b = T("top");
      let L;
      const g = na("tooltip"),
        k = p({
          get: () => s.value,
          set: V => {
            clearTimeout(L), L = setTimeout(() => {
              s.value = V
            }, ma)
          }
        }),
        W = p(() => typeof t.isOpen == "boolean" ? t.isOpen : s.value),
        S = p(() => {
          const V = {};
          return (a.value === null || a.value === "focus") && (V.onFocusin = () => {
            a.value = "focus", s.value = !0
          }, V.onFocusout = () => {
            a.value = null, s.value = !1
          }), (a.value === null || a.value === "hover") && (V.onMouseover = () => {
            a.value = "hover", k.value = !0
          }, V.onMouseout = () => {
            a.value = null, k.value = !1
          }), V
        }),
        $ = p(() => {
          if (!i.value) return {
            onMouseover: () => k.value = !0,
            onMouseout: () => k.value = !1
          }
        }),
        E = V => {
          V.key === ba && (s.value = !1)
        };
      ze(() => {
        document.addEventListener("keydown", E)
      }), kt(() => {
        document.removeEventListener("keydown", E)
      });
      const h = Object.values(pa),
        P = async () => {
          for (const V of h)
            if (X(V), await oe(), Y(u.value)) break;
          await oe(), Y(u.value) || X(t.placement)
        }, I = async V => {
          o("update:isOpen", V), V ? (await oe(), u.value && (X(t.placement), t.autoAdjustPlacement && (await oe(), Y(u.value) || await P()), d.value = !0, Z())) : (c.value = "", r.value = void 0, d.value = !1)
        };
      Ce(() => {
        Q(W, I, {
          immediate: !0
        })
      });
      const Y = V => {
          const M = V.getBoundingClientRect();
          return !(M.top < 0 || M.left < 0 || M.right > document.documentElement.clientWidth || M.bottom > document.documentElement.clientHeight)
        },
        X = V => {
          const M = document.documentElement.scrollTop,
            z = document.documentElement.scrollLeft,
            w = pe();
          switch (b.value = V, V) {
            case "top":
              c.value = "top", r.value = `translate3d(calc(${w.left+z+w.width/2}px), calc(${M+w.top}px - var(--ods-tooltip-arrow-size)), 0px) translate(-50%, -100%)`;
              break;
            case "topLeft":
              c.value = "top-left", r.value = `translate3d(calc(${w.left+z}px + var(--ods-tooltip-arrow-size)), calc(${M+w.top}px - var(--ods-tooltip-arrow-size)), 0px) translate(0%, -100%)`;
              break;
            case "topRight":
              c.value = "top-right", r.value = `translate3d(calc(${w.left+w.width+z}px + var(--ods-tooltip-arrow-size)), calc(${M+w.top}px - var(--ods-tooltip-arrow-size)), 0px) translate(-100%, -100%)`;
              break;
            case "right":
              c.value = "right", r.value = `translate3d(calc(${w.right+z}px + var(--ods-tooltip-arrow-size)), ${M+w.top+w.height/2}px, 0px) translate(0, -50%)`;
              break;
            case "rightTop":
              c.value = "right-top", r.value = `translate3d(calc(${w.right+z}px + var(--ods-tooltip-arrow-size)), ${M+w.top}px, 0px) translate(0%, 0%)`;
              break;
            case "rightBottom":
              c.value = "right-bottom", r.value = `translate3d(calc(${w.right+z}px + var(--ods-tooltip-arrow-size)), ${M+w.top+w.height}px, 0px) translate(0, -100%)`;
              break;
            case "left":
              c.value = "left", r.value = `translate3d(calc(${w.left+z}px - var(--ods-tooltip-arrow-size)), ${M+w.top+w.height/2}px, 0px) translate(-100%, -50%)`;
              break;
            case "leftTop":
              c.value = "left-top", r.value = `translate3d(calc(${w.left+z}px - var(--ods-tooltip-arrow-size)), ${M+w.top}px, 0px) translate(-100%, 0%)`;
              break;
            case "leftBottom":
              c.value = "left-bottom", r.value = `translate3d(calc(${w.left+z}px - var(--ods-tooltip-arrow-size)), ${M+w.top+w.height}px, 0px) translate(-100%, -100%)`;
              break;
            case "bottom":
              c.value = "bottom", r.value = `translate3d(calc(${w.left+w.width/2+z}px), calc(${M+w.top+w.height}px + var(--ods-tooltip-arrow-size)), 0px) translate(-50%, 0)`;
              break;
            case "bottomLeft":
              c.value = "bottom-left", r.value = `translate3d(calc(${w.left+z}px), calc(${M+w.top+w.height}px + var(--ods-tooltip-arrow-size)), 0px) translate(0, 0)`;
              break;
            case "bottomRight":
              c.value = "bottom-right", r.value = `translate3d(calc(${w.left+z+w.width}px), calc(${M+w.top+w.height}px + var(--ods-tooltip-arrow-size)), 0px) translate(-100%, 0)`;
              break
          }
        },
        Z = () => {
          n.value && X(b.value), W.value && requestAnimationFrame(Z)
        },
        ve = () => n.value.childNodes[1],
        pe = () => ve()
        .getBoundingClientRect(),
        re = p(() => ({
          "ods-tooltip": !0,
          ["ods-tooltip__position--" + c.value]: c.value,
          "ods-tooltip--placed": d.value
        })),
        Pe = ye();
      return Q(() => g.value, () => {
        g.value && ve()
          .setAttribute("aria-describedby", g.value)
      }), (V, M) => (v(), D(se, null, [(v(), G(_e(e.as), H(S.value, {
        ref_key: "targetRef",
        ref: n,
        class: "ods-tooltip__target"
      }), {
        default: F(() => [U(V.$slots, "default", {}, void 0, !0)]),
        _: 3
      }, 16)), W.value ? (v(), G(Pt, {
        key: 0,
        to: "body"
      }, [x("div", H({
        ...$.value,
        ...f(Pe)
      }, {
        id: f(g),
        ref_key: "tooltipRef",
        ref: u,
        class: re.value,
        style: {
          transform: r.value,
          zIndex: e.zIndex
        },
        role: "tooltip"
      }), [x("div", ha, [U(V.$slots, "title", {}, () => [N(B(e.title), 1)], !0)])], 16, ga)])) : R("", !0)], 64))
    }
  }),
  Te = le(Ca, [
    ["__scopeId", "data-v-908f09d9"]
  ]),
  ya = {
    Accent: "accent"
  },
  ka = {
    step: 1,
    min: 0,
    max: 100,
    tooltipType: ya.Accent,
    tooltipOpen: void 0
  },
  Pa = {
    key: 0,
    class: "ods-range__progress ods-range__progress--slider"
  },
  Da = {
    key: 1,
    class: "ods-range__knob ods-range__knob--slide"
  },
  wa = ["aria-valuemin", "aria-valuenow", "aria-valuemax", "aria-label", "disabled", "aria-disabled"],
  La = {
    key: 2,
    class: "ods-range__progress ods-range__progress--range"
  },
  xa = {
    key: 3,
    class: "ods-range__knob ods-range__knob--slide-min"
  },
  $a = ["aria-valuemin", "aria-valuenow", "aria-valuemax", "aria-label", "disabled", "aria-disabled"],
  Ta = {
    key: 4,
    class: "ods-range__knob ods-range__knob--slide-max"
  },
  Va = ["aria-valuemin", "aria-valuenow", "aria-valuemax", "aria-label", "disabled", "aria-disabled"],
  We = 2,
  be = 10,
  Ra = A({
    __name: "OdsRange",
    props: ee({
      modelValue: {},
      multiple: {
        type: Boolean
      },
      step: {},
      min: {},
      max: {},
      ariaLabelMin: {},
      ariaLabelMax: {},
      isDisabled: {
        type: Boolean
      },
      tooltipOpen: {
        type: Boolean
      },
      tooltipType: {}
    }, ka),
    emits: ["update:modelValue"],
    setup(e, {
      emit: l
    }) {
      Ee(m => ({
        v1cb107cd: W.value,
        eb042b50: g.value,
        v9a42912c: k.value
      }));
      const t = e,
        o = l,
        s = Kt("OdsRange");
      Dt(() => {
        t.multiple && !t.ariaLabelMax && s.errorOnce("To make Range component accessible for assistive technologies please pass `ariaLabelMax` property"), t.multiple && t.modelValue && !Array.isArray(t.modelValue) && s.errorOnce("When using multiple mode modelValue should be an array. e.g. [0,50]")
      });
      const i = () => t.multiple ? Array.isArray(t.modelValue) ? t.modelValue : [t.min, t.max] : typeof t.modelValue == "number" ? t.modelValue : t.min,
        a = T(i()),
        n = T(),
        r = T(0),
        c = T(!1),
        u = T(),
        d = T(),
        b = p(() => ({
          "ods-range": !0,
          "ods-range--disabled": t.isDisabled
        }));
      Q(() => t.modelValue, () => {
        a.value = i()
      });
      const L = p(() => t.max - t.min),
        g = p(() => {
          let m = 0;
          const _ = Array.isArray(a.value) ? a.value[0] : null;
          return _ && (m = _ <= t.min ? 0 : (_ - t.min) * 100 / L.value), `${m}%`
        }),
        k = p(() => {
          let m = 100;
          const _ = Array.isArray(a.value) ? a.value[1] : null;
          return _ && (m = _ >= t.max ? 100 : (_ - t.min) * 100 / L.value), `${m}%`
        }),
        W = p(() => {
          const m = typeof a.value == "number" ? (a.value - t.min) * 100 / L.value : 0;
          return Math.min(Math.max(m, 0), 100) + "%"
        }),
        S = p(() => typeof a.value == "number" ? a.value : 0),
        $ = p(() => Array.isArray(a.value) ? a.value[0] : a.value),
        E = p(() => Array.isArray(a.value) ? a.value[1] : a.value),
        h = () => {
          const m = n.value;
          if (m) {
            const _ = document.documentElement.scrollLeft;
            d.value = m.offsetWidth, u.value = m.getBoundingClientRect()
              .left + _
          }
        },
        P = m => {
          let _ = m;
          return _ < t.min && (_ = t.min), _ > t.max && (_ = t.max), _
        },
        I = m => {
          const _ = parseFloat(m.toFixed(10));
          let C = 0;
          t.multiple && Array.isArray(a.value) ? (C = [...a.value], r.value === 0 ? C[r.value] = Math.min(P(_), C[1]) : C[r.value] = Math.max(P(_), C[0])) : C = P(_), a.value = C, o("update:modelValue", C)
        },
        Y = m => {
          let _;
          "touches" in m ? _ = m.touches[0].pageX : _ = m.pageX;
          const C = (_ - u.value) * 100 / d.value;
          let ae = L.value * (C / 100) + t.min;
          if (t.step !== 1) {
            const ce = t.multiple && Array.isArray(a.value) ? a.value[r.value] : a.value,
              Fe = ae - ce;
            Fe < 0 ? ae = ce + Math.ceil(ae / t.step - ce / t.step) * t.step : Fe > 0 && (ae = ce + Math.floor(ae / t.step - ce / t.step) * t.step)
          } else ae = Math.floor(ae);
          I(ae)
        },
        X = () => {
          ve(), c.value = !1
        },
        Z = () => {
          document.addEventListener("mousemove", Y), document.addEventListener("mouseup", X)
        },
        ve = () => {
          document.removeEventListener("mousemove", Y), document.removeEventListener("mouseup", X)
        },
        pe = (m, _) => {
          r.value = typeof _ == "number" ? _ : 0, c.value = !0, h()
        },
        re = (m, _) => {
          t.isDisabled || (pe(m, _), Z())
        },
        Pe = m => {
          t.isDisabled || (h(), Y(m))
        },
        V = (m, _, C = !1) => {
          t.step !== 1 ? t.multiple && Array.isArray(a.value) ? I(a.value[_] - t.step) : typeof a.value == "number" && C ? I(a.value - Math.max(t.step * We, be)) : typeof a.value == "number" && I(a.value - t.step) : t.multiple && Array.isArray(a.value) ? I(a.value[_] - 1) : typeof a.value == "number" && C ? I(a.value - be) : typeof a.value == "number" && I(a.value - 1), m.preventDefault()
        },
        M = (m, _, C = !1) => {
          t.step !== 1 ? t.multiple && Array.isArray(a.value) ? I(a.value[_] + t.step) : typeof a.value == "number" && C ? I(a.value + Math.max(t.step * We, be)) : typeof a.value == "number" && I(a.value + t.step) : t.multiple && Array.isArray(a.value) ? I(a.value[_] + 1) : typeof a.value == "number" && C ? I(a.value + be) : typeof a.value == "number" && I(a.value + 1), m.preventDefault()
        },
        z = (m, _) => {
          switch (r.value = _, m.code) {
            case "ArrowDown":
            case "ArrowLeft":
              V(m, _), m.preventDefault();
              break;
            case "ArrowUp":
            case "ArrowRight":
              M(m, _), m.preventDefault();
              break;
            case "PageDown":
              V(m, _, !0), m.preventDefault();
              break;
            case "PageUp":
              M(m, _, !0), m.preventDefault();
              break;
            case "Home":
              I(t.min), m.preventDefault();
              break;
            case "End":
              I(t.max), m.preventDefault();
              break
          }
        },
        w = (m, _) => {
          pe(m, _)
        },
        De = () => {
          X()
        },
        we = m => {
          Y(m)
        },
        Le = p(() => t.tooltipOpen === !1 || t.isDisabled),
        ct = p(() => Le.value ? !1 : !t.multiple && c.value ? !0 : t.tooltipOpen),
        ut = p(() => Le.value ? !1 : t.multiple && c.value && r.value === 0 ? !0 : t.tooltipOpen),
        dt = p(() => Le.value ? !1 : t.multiple && c.value && r.value === 1 ? !0 : t.tooltipOpen);
      return (m, _) => (v(), D("div", {
        ref_key: "rangeContainer",
        ref: n,
        class: y(b.value),
        onClick: Pe
      }, [e.multiple ? R("", !0) : (v(), D("span", Pa)), e.multiple ? R("", !0) : (v(), D("span", Da, [O(Te, {
        as: "span",
        "is-open": ct.value,
        class: y(["ods-range-tooltip", {
          [`ods-range--tooltip--${t.tooltipType}`]: !0
        }]),
        "auto-adjust-placement": !1,
        placement: "top"
      }, {
        title: F(() => [U(m.$slots, "tooltip", {
          value: S.value
        }, () => [x("span", null, B(S.value), 1)], !0)]),
        default: F(() => [x("button", {
          class: y(["ods-range__knob-button", {
            "ods-range__knob-button--dragging": c.value
          }]),
          role: "slider",
          "aria-valuemin": e.min,
          "aria-valuenow": S.value,
          "aria-valuemax": e.max,
          "aria-label": e.ariaLabelMin,
          "aria-orientation": "horizontal",
          disabled: e.isDisabled,
          "aria-disabled": e.isDisabled,
          onTouchstartPassive: _[0] || (_[0] = C => w(C, 0)),
          onTouchmovePassive: _[1] || (_[1] = C => we(C)),
          onTouchend: _[2] || (_[2] = C => De()),
          onMousedown: _[3] || (_[3] = C => re(C)),
          onKeydown: _[4] || (_[4] = C => z(C, 0))
        }, null, 42, wa)]),
        _: 3
      }, 8, ["is-open", "class"])])), e.multiple ? (v(), D("span", La)) : R("", !0), e.multiple ? (v(), D("span", xa, [O(Te, {
        as: "span",
        "is-open": ut.value,
        class: y(["ods-range-tooltip", {
          [`ods-range--tooltip--${t.tooltipType}`]: !0
        }]),
        "auto-adjust-placement": !1,
        placement: "top"
      }, {
        title: F(() => [U(m.$slots, "tooltip", {
          value: $.value
        }, () => [x("span", null, B($.value), 1)], !0)]),
        default: F(() => [x("button", {
          class: y(["ods-range__knob-button", {
            "ods-range__knob-button--dragging": c.value && r.value === 0
          }]),
          role: "slider",
          "aria-valuemin": e.min,
          "aria-valuenow": $.value,
          "aria-valuemax": E.value,
          "aria-label": e.ariaLabelMin,
          "aria-orientation": "horizontal",
          disabled: e.isDisabled,
          "aria-disabled": e.isDisabled,
          onTouchstartPassive: _[5] || (_[5] = C => w(C, 0)),
          onTouchmovePassive: _[6] || (_[6] = C => we(C)),
          onTouchend: _[7] || (_[7] = C => De()),
          onMousedown: _[8] || (_[8] = C => re(C, 0)),
          onKeydown: _[9] || (_[9] = C => z(C, 0))
        }, null, 42, $a)]),
        _: 3
      }, 8, ["is-open", "class"])])) : R("", !0), e.multiple ? (v(), D("span", Ta, [O(Te, {
        as: "span",
        "is-open": dt.value,
        class: y(["ods-range-tooltip", {
          [`ods-range--tooltip--${t.tooltipType}`]: !0
        }]),
        "auto-adjust-placement": !1,
        placement: "top"
      }, {
        title: F(() => [U(m.$slots, "tooltip", {
          value: E.value
        }, () => [x("span", null, B(E.value), 1)], !0)]),
        default: F(() => [x("button", {
          class: y(["ods-range__knob-button", {
            "ods-range__knob-button--dragging": c.value && r.value === 1
          }]),
          role: "slider",
          "aria-valuemin": $.value,
          "aria-valuenow": E.value,
          "aria-valuemax": e.max,
          "aria-label": e.ariaLabelMax,
          "aria-orientation": "horizontal",
          disabled: e.isDisabled,
          "aria-disabled": e.isDisabled,
          onTouchstartPassive: _[10] || (_[10] = C => w(C, 1)),
          onTouchmovePassive: _[11] || (_[11] = C => we(C)),
          onTouchend: _[12] || (_[12] = C => De()),
          onMousedown: _[13] || (_[13] = C => re(C, 1)),
          onKeydown: _[14] || (_[14] = C => z(C, 1))
        }, null, 42, Va)]),
        _: 3
      }, 8, ["is-open", "class"])])) : R("", !0)], 2))
    }
  }),
  Sa = le(Ra, [
    ["__scopeId", "data-v-8b51ffd5"]
  ]),
  Ea = (e, l) => {
    const t = p(() => e.isDisabled ? "disabled" : e.isReadOnly ? "read-only" : e.isError ? "error" : e.isSuccess ? "success" : "default"),
      o = p(() => e.isDisabled ? J.Disabled : e.isError ? J.Error : e.isSuccess ? J.Success : J.Info),
      s = p(() => {
        if (e.isError) return "alert"
      });
    return {
      classes: p(() => ({
        [`${l}`]: !0,
        [`${l}--${t.value}`]: !0
      })),
      type: t,
      hintType: o,
      hintRole: s
    }
  },
  Ia = {
    class: "ods-switch__label"
  },
  Fa = ["name", "disabled", "value"],
  Aa = {
    ref: "switchLabelText",
    class: "ods-switch__label-content"
  },
  Ma = {
    key: 0,
    class: "ods-switch__label-text"
  },
  Oa = {
    key: 1,
    class: "ods-switch__label-slot"
  },
  Ba = A({
    inheritAttrs: !1,
    __name: "OdsSwitch",
    props: {
      value: {
        default: ""
      },
      label: {
        default: ""
      },
      isDisabled: {
        type: Boolean,
        default: !1
      },
      name: {
        default: ""
      },
      modelValue: {
        default: ""
      },
      class: {
        default: ""
      }
    },
    emits: ["update:modelValue"],
    setup(e, {
      expose: l,
      emit: t
    }) {
      const o = e,
        s = t,
        {
          classes: i
        } = Ea(o, "ods-switch"),
        a = p({
          get() {
            return o.modelValue
          },
          set(r) {
            s("update:modelValue", r)
          }
        }),
        n = ye();
      return l({
        id: n.id,
        value: o.value,
        isDisabled: o.isDisabled
      }), (r, c) => (v(), D("span", {
        class: y([f(i), o.class])
      }, [x("label", Ia, [Ve(x("input", H(r.$attrs, {
        "onUpdate:modelValue": c[0] || (c[0] = u => a.value = u),
        type: "checkbox",
        role: "switch",
        name: e.name,
        disabled: e.isDisabled,
        value: e.value,
        class: "ods-switch__input"
      }), null, 16, Fa), [
        [Ke, a.value]
      ]), x("span", Aa, [e.label ? (v(), D("span", Ma, B(e.label), 1)) : R("", !0), r.$slots.default ? (v(), D("span", Oa, [U(r.$slots, "default", {}, void 0, !0)])) : R("", !0)], 512)])], 2))
    }
  }),
  Ga = le(Ba, [
    ["__scopeId", "data-v-b2701831"]
  ]),
  Ua = {
    Refine: "REFINE"
  };
var ue = (e => (e.single_value = "single_value", e.multi_value = "multi_value", e.range = "range", e.complex = "complex", e))(ue || {}),
  K = (e => (e.PDP_Pageload = "PDP_Pageload", e.PDP_Click = "PDP_Click", e.PLP_Product_Click = "PLP_Product_Click", e.PDP_Social_Click = "PDP_Social_Click", e.PDP_Image_Click = "PDP_Image_Click", e.PDP_Section_EnterViewport = "PDP_Section_EnterViewport", e.PDP_Recommendation_Load = "PDP_Recommendation_Load", e.PDP_Recommendation_EnterViewport = "PDP_Recommendation_EnterViewport", e.PDP_Recommendation_Click = "PDP_Recommendation_Click", e.PDP_Rating_Click = "PDP_Rating_Click", e.PDP_Information_Load = "PDP_Information_Load", e.PDP_A_Goods_Link_Click = "PDP_A_Goods_Link_Click", e.PDP_B_Goods_Link_Click = "PDP_B_Goods_Link_Click", e.PDP_Downloads_Link_Click = "PDP_Downloads_Link_Click", e.PDP_Downloads_Section_Click = "PDP_Downloads_Section_Click", e.PDP_Install_Calc_Link_Click = "PDP_Install_Calc_Link_Click", e.General_Pageload = "General_Pageload", e.General_Recommendation_Load = "General_Recommendation_Load", e.General_RecommendationProduct_EnterViewport = "General_RecommendationProduct_EnterViewport", e.General_Product_Click = "General_Product_Click", e.General_Section_EnterViewport = "General_Section_EnterViewport", e.General_Teaser_Click = "General_Teaser_Click", e.General_Link_Click = "General_Link_Click", e.PLP_Pageload = "PLP_Pageload", e.PLP_FilterSelect_Click = "PLP_FilterSelect_Click", e.PLP_FilterSelect_Intent = "PLP_FilterSelect_Intent", e.PLP_FilterDeselect_Click = "PLP_FilterDeselect_Click", e.PLP_ProductImageSlider_Click = "PLP_ProductImageSlider_Click", e.PLP_Show_More_Click = "PLP_Show_More_Click", e.PLP_Information_Load = "PLP_Information_Load", e.General_SearchTermConfirm_Click = "General_SearchTermConfirm_Click", e.Cart_Pageload = "Cart_Pageload", e.Cart_Pageload_Split = "Cart_Pageload_Split", e.Cart_Button_Click = "Cart_Button_Click", e.Cart_Success_Pageload = "Cart_Success_Pageload", e.Banner_Promotion_Load = "Banner_Promotion_Load", e.General_Product_View = "General_Product_View", e.General_Product_Load = "General_Product_Load", e.General_Promotion_View = "General_Promotion_View", e.General_Promotion_View_Split = "General_Promotion_View_Split", e.General_Promotion_Load = "General_Promotion_Load", e.General_Promotion_Click = "General_Promotion_Click", e.General_Promotion_Qualified = "General_Promotion_Qualified", e.General_Promotion_Shown = "General_Promotion_Shown", e.General_Navigation_Click = "General_Navigation_Click", e.Wishlist_Pageload = "Wishlist_Pageload", e.Wishlist_Button_Click = "Wishlist_Button_Click", e.StoreSearch_Pageload = "StoreSearch_Pageload", e.StoreSearch_Click = "StoreSearch_Click", e.StoreSearchDP_Pageload = "StoreSearchDP_Pageload", e.StoreSearchDP_Click = "StoreSearchDP_Click", e.MyAccount_Pageload = "MyAccount_Pageload", e.MyAccount_Click = "MyAccount_Click", e.Flyer_Click = "Flyer_Click", e.Flyer_View = "Flyer_View", e.Flyer_ChangeViewport = "Flyer_ChangeViewport", e.Flyer_Categories_Select = "Flyer_Categories_Select", e.Kameleoon_Experiment = "Kameleoon_Experiment", e.Order_Cancellation_Click = "Order_Cancellation_Click", e.Order_ViewDetails_Click = "Order_ViewDetails_Click", e.Order_Invoice_Download_Click = "Order_Invoice_Download_Click", e.Order_Return_Click = "Order_Return_Click", e.Order_Cancellation_Confirmation = "Order_Cancellation_Confirmation", e.Order_Return_Confirmation = "Order_Return_Confirmation", e.Start_Login_Click = "Start_Login_Click", e.Login_Button_Click = "Login_Button_Click", e.Login_Success = "Login_Success", e.Login_Link_Click = "Login_Link_Click", e.Forgotten_Password_Click = "Forgotten_Password_Click", e.Password_Reset = "Password_Reset", e.Register_Link_Click = "Register_Link_Click", e.Registration_Success = "Registration_Success", e.Error_Message = "Error_Message", e.Competition_Form_Submit = "Competition_Form_Submit", e.Newsletter_Form_Submit = "Newsletter_Form_Submit", e.Newsletter_Form_Success = "Newsletter_Form_Success", e.Flyer_View_50 = "Flyer_View_50", e.Flyer_View_75 = "Flyer_View_75", e.Flyer_View_100 = "Flyer_View_100", e.User_Consent_Update = "User_Consent_Update", e.Review_Product_Start = "Review_Product_Start", e.Review_Product_Click = "Review_Product_Click", e.Review_Product_Submit = "Review_Product_Submit", e.Review_Product_Error = "Review_Product_Error", e.Review_Product_Success = "Review_Product_Success", e.Return_Chatbot_WindowOpen_Click = "Return_Chatbot_WindowOpen_Click", e.Return_Chatbot_WindowClosed_Click = "Return_Chatbot_WindowClosed_Click", e.Session_Start = "Session_Start", e.First_Visit = "First_Visit", e.Add_Product_To_Wishlist_In_Flyer = "Add_Product_To_Wishlist_In_Flyer", e.ProductView_In_Flyer = "ProductView_In_Flyer", e.Retail_StartPage_Visit = "Retail_StartPage_Visit", e.View_Store_Article = "View_Store_Article", e.WT_Visit = "WT_Visit", e.Switch_Login_Type = "Switch_Login_Type", e.Confirm_Token = "Confirm_Token", e.Request_New_Token = "Request_New_Token", e.Confirm_Mobile_Number = "Confirm_Mobile_Number", e.Password_Reset_Success = "Password_Reset_Success", e.Contact_Customer_Service = "Contact_Customer_Service", e.Login_Accept_Terms = "Login_Accept_Terms", e.Register_Continue_Click = "Register_Continue_Click", e.Register_Change_Phone = "Register_Change_Phone", e.Video_Start = "Video_Start", e.Video_Progress = "Video_Progress", e.Video_Complete = "Video_Complete", e.General_Scroll_Action = "General_Scroll_Action", e.Promotion_Information_Click = "Promotion_Information_Click", e.STL_Product_Checkbox_Click = "STL_Product_Checkbox_Click", e.STL_Add2Cart_Click = "STL_Add2Cart_Click", e.STL_Variant_Selected = "STL_Variant_Selected", e.STL_Select_Variant_Click = "STL_Select_Variant_Click", e))(K || {});

function Wa(e, l) {
  const t = p(() => !!j(l)
      ?.parent),
    o = p(() => !t.value && j(e) === ne.Slider),
    s = p(() => !t.value && j(e) === ne.Ratings),
    i = p(() => !t.value && j(e) === ne.Tiles),
    a = p(() => !t.value && (j(e) === ne.Text || j(e) === ne.Preview)),
    n = p(() => !t.value && j(e) === ne.Toggle);
  return {
    facetType: p(() => o.value ? Qa : s.value ? as : i.value ? Cs : a.value ? bs : t.value ? xs : n.value ? Ps : null),
    isRange: o,
    isRating: s,
    isSelection: a,
    isTile: i,
    isTree: t
  }
}
const za = A({
    __name: "FacetContent",
    props: {
      filterMinLabel: {},
      filterMaxLabel: {},
      isDisabled: {
        type: Boolean
      },
      renderingStyle: {},
      facet: {}
    },
    emits: ["onValueChange"],
    setup(e, {
      expose: l,
      emit: t
    }) {
      const o = e,
        s = t,
        {
          renderingStyle: i,
          facet: a
        } = fe(o),
        {
          facetType: n
        } = Wa(i, a),
        r = Qe("component");

      function c(d) {
        s("onValueChange", d)
      }

      function u() {
        r.value && r.value.focus()
      }
      return l({
        focus: u
      }), (d, b) => f(n) ? (v(), G(_e(f(n)), H({
        key: 0,
        ref_key: "component",
        ref: r
      }, f(a), {
        filterMinLabel: e.filterMinLabel,
        filterMaxLabel: e.filterMaxLabel,
        isDisabled: e.isDisabled,
        onOnValueChange: c
      }), null, 16, ["filterMinLabel", "filterMaxLabel", "isDisabled"])) : R("", !0)
    }
  }),
  ja = Object.assign(za, {
    __name: "SNCFacetContent"
  });

function Ha(e, l, t, o, s) {
  const i = T([e.value, l.value]),
    a = T(t.value),
    n = T(o.value),
    r = p(() => {
      let d = 1;
      return s && (d = s.value?.length, s.value?.length > 1 && s.value === s.value.toUpperCase() && d++), d
    });
  Q(l, d => {
    i.value[1] = d
  }), Q(e, d => {
    i.value[0] = d
  }), Q(o, d => {
    n.value = d
  }), Q(t, d => {
    a.value = d
  });

  function c(d) {
    Number.isFinite(i.value[0]) || (i.value[0] = d.absoluteMin), Number.isFinite(i.value[1]) || (i.value[1] = d.absoluteMax), i.value[0] > i.value[1] && u(i), i.value[1] > n.value && (i.value[1] = n.value), i.value[0] < a.value && (i.value[0] = a.value), i.value[0] === i.value[1] && (i.value[1] === n.value ? i.value[0] = i.value[0] - 1 : i.value[1] = i.value[1] + 1)
  }

  function u(d) {
    const b = d.value[0];
    d.value[0] = d.value[1], d.value[1] = b
  }
  return {
    selectedValue: i,
    unitWidth: r,
    adjustSliders: c
  }
}
const qa = ["data-testselector"],
  Ka = {
    class: "s-facet-range__inputs"
  },
  Xa = A({
    __name: "FacetRange",
    props: {
      filterMinLabel: {},
      filterMaxLabel: {},
      isDisabled: {
        type: Boolean
      },
      code: {},
      initialMin: {},
      initialMax: {},
      absoluteMin: {},
      absoluteMax: {},
      href: {},
      unit: {
        default: "€"
      }
    },
    emits: ["onValueChange"],
    setup(e, {
      emit: l
    }) {
      const t = e,
        o = l,
        s = T(0),
        i = T(!0),
        {
          initialMin: a,
          initialMax: n,
          absoluteMin: r,
          absoluteMax: c,
          unit: u
        } = fe(t),
        {
          selectedValue: d,
          unitWidth: b,
          adjustSliders: L
        } = Ha(a, n, r, c, u);
      Q(r, E => {
        s.value++
      }), Q(c, E => {
        s.value++
      });

      function g(E) {
        if (L(t), !i.value) return;
        const h = `${d.value[0]}+-+${d.value[1]}`,
          P = t.href({
            [t.code]: h
          }),
          I = E.target;
        o("onValueChange", {
          code: t.code,
          value: h,
          href: P,
          inputId: I.id
        })
      }
      const k = E => h => {
          h.key === "Tab" && (E && !h.shiftKey || !E && h.shiftKey) && (i.value = !1)
        },
        W = k(!0),
        S = k(!1),
        $ = E => {
          i.value || (i.value = !0, g(E))
        };
      return (E, h) => (v(), D("div", {
        class: "s-facet-range",
        "data-testselector": `s-facet-range-${e.code}`
      }, [O(f(Sa), {
        modelValue: f(d),
        "onUpdate:modelValue": h[0] || (h[0] = P => Ye(d) ? d.value = P : null),
        "data-testselector": "ods-range",
        class: "s-facet-range__range",
        min: f(r),
        max: f(c),
        ariaLabelMin: e.filterMinLabel,
        ariaLabelMax: e.filterMaxLabel,
        multiple: "",
        isDisabled: e.isDisabled,
        onMouseup: g,
        onTouchend: g
      }, null, 8, ["modelValue", "min", "max", "ariaLabelMin", "ariaLabelMax", "isDisabled"]), x("div", Ka, [O(f(Ue), {
        id: "s-facet-range__input-min",
        modelValue: f(d)[0],
        "onUpdate:modelValue": h[1] || (h[1] = P => f(d)[0] = P),
        modelModifiers: {
          number: !0
        },
        "data-testselector": "s-facet-range__input-min",
        type: "number",
        min: f(r),
        max: f(c),
        isDisabled: e.isDisabled,
        class: y(["s-facet-range__input", `s-facet-range__input--unit-${f(b)}`]),
        label: e.filterMinLabel,
        onChange: g,
        onKeyup: Oe(g, ["enter"]),
        onKeydown: h[2] || (h[2] = P => f(W)(P)),
        onFocusin: $
      }, Re({
        _: 2
      }, [f(u) ? {
        name: "prefix",
        fn: F(() => [N(B(f(u)), 1)]),
        key: "0"
      } : void 0]), 1032, ["modelValue", "min", "max", "isDisabled", "class", "label"]), h[5] || (h[5] = x("span", null, "-", -1)), O(f(Ue), {
        id: "s-facet-range__input-max",
        modelValue: f(d)[1],
        "onUpdate:modelValue": h[3] || (h[3] = P => f(d)[1] = P),
        modelModifiers: {
          number: !0
        },
        "data-testselector": "s-facet-range__input-max",
        type: "number",
        min: f(r),
        max: f(c),
        isDisabled: e.isDisabled,
        class: y(["s-facet-range__input", `s-facet-range__input--unit-${f(b)}`]),
        label: e.filterMaxLabel,
        onChange: g,
        onKeyup: Oe(g, ["enter"]),
        onKeydown: h[4] || (h[4] = P => f(S)(P)),
        onFocusin: $
      }, Re({
        _: 2
      }, [f(u) ? {
        name: "prefix",
        fn: F(() => [N(B(f(u)), 1)]),
        key: "0"
      } : void 0]), 1032, ["modelValue", "min", "max", "isDisabled", "class", "label"])])], 8, qa))
    }
  }),
  Qa = Object.assign(te(Xa, [
    ["__scopeId", "data-v-72a88b1f"]
  ]), {
    __name: "SNCFacetRange"
  }),
  Ya = ["for"],
  Za = ["id", "checked"],
  Ja = A({
    __name: "FacetRatingItem",
    props: {
      code: {},
      selected: {
        type: Boolean
      },
      label: {},
      href: {},
      rating: {}
    },
    emits: ["onRatingClick"],
    setup(e, {
      emit: l
    }) {
      const t = e,
        {
          selected: o
        } = fe(t),
        s = Ie(),
        i = l;
      async function a() {
        i("onRatingClick", {
          code: t.code,
          value: t.rating.value,
          href: t.href
        })
      }
      const n = p(() => ({
        "s-facet-rating-item__label": !0,
        "s-facet-rating-item__label--selected": o.value
      }));
      return (r, c) => (v(), D(se, null, [x("label", {
        for: f(s),
        class: y(f(n))
      }, [x("input", {
        id: f(s),
        "data-testselector": "s-facet-rating-item",
        type: "checkbox",
        class: "s-facet-rating-item",
        checked: f(o),
        onChange: c[0] || (c[0] = u => a())
      }, null, 40, Za), N(" " + B(e.label), 1)], 10, Ya), O(f(va), {
        average: e.rating.value,
        max: 5,
        ratingType: "full",
        showInfo: !1,
        class: "s-facet-rating-item__rating"
      }, null, 8, ["average"])], 64))
    }
  }),
  Na = Object.assign(te(Ja, [
    ["__scopeId", "data-v-3d385871"]
  ]), {
    __name: "SNCFacetRatingItem"
  }),
  es = ["data-testselector"],
  ts = A({
    __name: "FacetRating",
    props: {
      isDisabled: {
        type: Boolean
      },
      code: {},
      ratings: {}
    },
    emits: ["onValueChange"],
    setup(e, {
      emit: l
    }) {
      const t = e,
        o = l,
        s = p(() => ({
          "s-facet-rating": !0,
          "s-facet-rating--disabled": t.isDisabled
        }));

      function i(a) {
        o("onValueChange", a)
      }
      return (a, n) => {
        const r = Na;
        return v(), D("ul", {
          class: y(f(s)),
          "data-testselector": `s-facet-ratings-${e.code}`
        }, [(v(!0), D(se, null, de(e.ratings, c => (v(), D("li", {
          key: c.label,
          class: "s-facet-rating-wrapper"
        }, [O(r, H({
          ref_for: !0
        }, c, {
          onOnRatingClick: i
        }), null, 16)]))), 128))], 10, es)
      }
    }
  }),
  as = Object.assign(te(ts, [
    ["__scopeId", "data-v-6b174526"]
  ]), {
    __name: "SNCFacetRating"
  }),
  ss = /^#[0-9A-F]+$/i,
  ls = /^#fff/i,
  os = ["MULTICOLOR", "$multicolor"],
  ns = "background-image: url('//www.lidl.de/de/asset/images/multicolor.png');",
  is = e => `background-color: ${e};`;

function nt(e = "") {
  const l = p(() => ss.test(j(e))),
    t = p(() => ls.test(j(e))),
    o = p(() => os.includes(j(e))),
    s = p(() => l.value || t.value ? is(j(e)) : o.value ? ns : null);
  return {
    isValidColor: p(() => s.value !== null),
    colorPreviewStyle: s,
    isWhiteColor: t,
    isHexadecimalColor: l,
    isMulticolor: o
  }
}
const rs = A({
    __name: "ColorPreview",
    props: {
      itemValue: {},
      isBigger: {
        type: Boolean
      }
    },
    setup(e) {
      const l = e,
        {
          itemValue: t,
          isBigger: o
        } = fe(l),
        {
          isValidColor: s,
          isWhiteColor: i,
          colorPreviewStyle: a
        } = nt(t),
        n = p(() => ({
          "s-color-preview": !0,
          "s-color-preview--isWhite": i.value,
          "s-color-preview--isBigger": o.value
        }));
      return (r, c) => f(s) ? (v(), D("span", {
        key: 0,
        class: y(f(n)),
        style: wt(f(a)),
        "data-testselector": "s-color-preview"
      }, null, 6)) : R("", !0)
    }
  }),
  cs = Object.assign(te(rs, [
    ["__scopeId", "data-v-f9129427"]
  ]), {
    __name: "SNCColorPreview"
  });

function us(e, l, t) {
  const o = p(() => ({
      "s-facet-selection-item__label": !0,
      "s-facet-selection-item__label--selected": j(e)
    })),
    s = p(() => ({
      "s-facet-selection-item__link": !0,
      "s-facet-selection-item__link--selected": j(e),
      "s-facet-selection-item__link--disabled": j(l),
      "s-facet-selection-item__link--interactive": j(t)
    }));
  return {
    labelClasses: o,
    linkClasses: s
  }
}
const ds = {
    class: "s-facet-selection-item"
  },
  _s = {
    key: 0,
    class: "s-facet-selection-item__checkbox"
  },
  fs = A({
    __name: "FacetSelectionItem",
    props: {
      isDisabled: {
        type: Boolean
      },
      href: {},
      code: {},
      label: {},
      isCheckbox: {
        type: Boolean
      },
      isSelected: {
        type: Boolean
      },
      isInteractive: {
        type: Boolean
      },
      colorValue: {},
      isExternal: {
        type: Boolean
      }
    },
    emits: ["onSelection"],
    setup(e, {
      emit: l
    }) {
      const t = l,
        o = e,
        {
          href: s,
          label: i,
          isSelected: a,
          isDisabled: n,
          isInteractive: r,
          colorValue: c
        } = fe(o),
        {
          linkClasses: u
        } = us(a, n, r),
        {
          isValidColor: d
        } = nt(c.value),
        b = Ie();

      function L(g, k) {
        const W = g.target;
        t("onSelection", {
          code: o.code,
          value: o.label,
          href: o.href,
          isBlockingNavigation: k,
          inputId: W.id
        })
      }
      return (g, k) => {
        const W = cs,
          S = Mt;
        return v(), D("div", ds, [e.isCheckbox ? (v(), D("div", _s, [O(f(Jt), {
          id: f(b),
          modelValue: f(a),
          "onUpdate:modelValue": k[0] || (k[0] = $ => Ye(a) ? a.value = $ : null),
          tabindex: "0",
          isDisabled: f(n),
          value: f(a),
          label: f(i),
          onChange: k[1] || (k[1] = $ => L($))
        }, null, 8, ["id", "modelValue", "isDisabled", "value", "label"]), f(d) && f(c) ? (v(), G(W, {
          key: 0,
          itemValue: f(c),
          isBigger: !0
        }, null, 8, ["itemValue"])) : R("", !0)])) : f(r) ? (v(), G(S, {
          key: 1,
          tabindex: "0",
          external: e.isExternal,
          to: f(s),
          class: y(f(u)),
          onClick: k[2] || (k[2] = $ => L($, f(r)))
        }, {
          default: F(() => [N(B(f(i)), 1)]),
          _: 1
        }, 8, ["external", "to", "class"])) : (v(), D("span", {
          key: 2,
          class: y(f(u))
        }, B(f(i)), 3))])
      }
    }
  }),
  vs = Object.assign(te(fs, [
    ["__scopeId", "data-v-66082ede"]
  ]), {
    __name: "SNCFacetSelectionItem"
  }),
  ps = ["data-testselector"],
  ms = A({
    __name: "FacetSelection",
    props: {
      isDisabled: {
        type: Boolean
      },
      code: {},
      values: {}
    },
    emits: ["onValueChange"],
    setup(e, {
      emit: l
    }) {
      const t = l;

      function o(s) {
        t("onValueChange", s)
      }
      return (s, i) => {
        const a = vs;
        return v(), D("ul", {
          class: "s-facet-selection__list",
          "data-testselector": `s-facet-selection__list-${e.code}`
        }, [(v(!0), D(se, null, de(e.values, n => (v(), D("li", {
          key: n.label
        }, [O(a, H({
          ref_for: !0
        }, n, {
          isDisabled: e.isDisabled,
          onOnSelection: o
        }), null, 16, ["isDisabled"])]))), 128))], 8, ps)
      }
    }
  }),
  bs = Object.assign(te(ms, [
    ["__scopeId", "data-v-0a255efa"]
  ]), {
    __name: "SNCFacetSelection"
  }),
  gs = ["id", "data-testselector"],
  hs = A({
    __name: "FacetTile",
    props: {
      isDisabled: {
        type: Boolean
      },
      code: {},
      values: {}
    },
    emits: ["onValueChange"],
    setup(e, {
      emit: l
    }) {
      const t = e,
        o = l;

      function s(a) {
        o("onValueChange", {
          code: a.code,
          value: a.label,
          href: a.href,
          inputId: a.id
        })
      }
      const i = p(() => t.values.map(a => ({
        ...a,
        id: Ie()
      })));
      return (a, n) => (v(), D("ul", {
        id: `s-facet-tiles-${e.code}`,
        class: "s-facet-tiles",
        "data-testselector": `s-facet-tiles-${e.code}`
      }, [(v(!0), D(se, null, de(f(i), r => (v(), D("li", {
        key: r.label,
        class: "s-facet-tiles__item",
        "data-testselector": "s-facet-tiles__item"
      }, [O(f(aa), {
        id: r.id,
        label: r.label,
        isActive: r.isSelected,
        isDeletable: r.isSelected,
        isDisabled: e.isDisabled,
        "data-testselector": "s-facet-tile-item__chip",
        onClick: () => s(r)
      }, null, 8, ["id", "label", "isActive", "isDeletable", "isDisabled", "onClick"])]))), 128))], 8, gs))
    }
  }),
  Cs = Object.assign(te(hs, [
    ["__scopeId", "data-v-fec947e5"]
  ]), {
    __name: "SNCFacetTile"
  }),
  ys = ["data-testselector"],
  ks = A({
    __name: "FacetToggle",
    props: {
      isDisabled: {
        type: Boolean
      },
      code: {},
      label: {},
      isSelected: {
        type: Boolean
      },
      href: {}
    },
    emits: ["onValueChange"],
    setup(e, {
      expose: l,
      emit: t
    }) {
      const o = e,
        s = T(null),
        i = t,
        a = p(() => ({
          "s-facet-toggle": !0,
          "s-facet-toggle--disabled": o.isDisabled
        }));

      function n(c) {
        i("onValueChange", {
          code: o.code,
          value: c,
          href: o.href
        })
      }

      function r() {
        s.value && s.value.focus()
      }
      return l({
        focus: r
      }), (c, u) => (v(), D("div", {
        class: y(f(a)),
        "data-testselector": `s-facet-toggle-${o.code}`
      }, [O(f(Ga), {
        ref_key: "toggle",
        ref: s,
        "data-testselector": "s-switch__wrapper",
        label: e.label,
        isDisabled: e.isDisabled,
        value: e.isSelected,
        modelValue: e.isSelected,
        onChange: n
      }, null, 8, ["label", "isDisabled", "value", "modelValue"])], 10, ys))
    }
  }),
  Ps = Object.assign(te(ks, [
    ["__scopeId", "data-v-1a08f29c"]
  ]), {
    __name: "SNCFacetToggle"
  }),
  Ds = ["data-testselector"],
  ws = ["data-testselector"],
  Ls = A({
    __name: "FacetTree",
    props: {
      filterMinLabel: {},
      filterMaxLabel: {},
      isDisabled: {
        type: Boolean
      },
      code: {},
      parent: {},
      childFacet: {}
    },
    emits: ["onValueChange"],
    setup(e, {
      emit: l
    }) {
      const t = l;

      function o(s) {
        t("onValueChange", s)
      }
      return (s, i) => {
        const a = Lt("MIcon"),
          n = ja;
        return v(), D(se, null, [x("div", {
          class: "s-facet-tree__parent",
          "data-testselector": `s-facet-tree__parent-${e.code}`
        }, [e.childFacet ? (v(), G(a, {
          key: 0,
          class: "s-facet-tree__parent__icon",
          name: "arrow-right",
          height: "0.5rem",
          width: "0.5rem"
        })) : R("", !0), e.parent ? (v(), G(n, H({
          key: 1
        }, e.parent, {
          isDisabled: e.isDisabled,
          filterMinLabel: e.filterMinLabel,
          filterMaxLabel: e.filterMaxLabel,
          onOnValueChange: o
        }), null, 16, ["isDisabled", "filterMinLabel", "filterMaxLabel"])) : R("", !0)], 8, Ds), x("div", {
          class: "s-facet-tree__child",
          "data-testselector": `s-facet-tree__child-${e.code}`
        }, [e.childFacet ? (v(), G(n, H({
          key: 0
        }, e.childFacet, {
          isDisabled: e.isDisabled,
          filterMinLabel: e.filterMinLabel,
          filterMaxLabel: e.filterMaxLabel,
          onOnValueChange: o
        }), null, 16, ["isDisabled", "filterMinLabel", "filterMaxLabel"])) : R("", !0)], 8, ws)], 64)
      }
    }
  }),
  xs = Object.assign(te(Ls, [
    ["__scopeId", "data-v-6982c494"]
  ]), {
    __name: "SNCFacetTree"
  });

function $s() {
  const e = xt(),
    l = Ze(),
    t = $t();

  function o(n) {
    return {
      filterlist: i(l.numFound, t.sortingOptionToTrack ?? t.selectedSort, e.selectionsToTrack, n)
    }
  }
  const s = n => n.endsWith("-desc") ? "desc" : "asc";

  function i(n, r, c, u) {
    if (u) return [{
      sortOrder: [{
        sortby: r ? r.code : void 0,
        order: r ? s(r.code) : void 0
      }]
    }];
    if (c && c.length !== 0) {
      const d = new Map;
      for (const b of c) {
        let L = d.get(b.code);
        L || (L = {
          name: b.code,
          numberOfResults: n,
          type: a(b)
        }, r && (L.sortOrder = [{
          sortby: r.code,
          order: s(r.code)
        }]), d.set(b.code, L));
        const g = String(b.value);
        if (L.type === ue.range) {
          const k = g.split("+-+");
          k.length > 1 && (L.lowerbound = k[0], L.upperbound = k[1])
        } else L.values ??= [], L.values.push(g)
      }
      return Array.from(d.values())
    }
  }

  function a(n) {
    const c = e.rawFacets.filter(d => d.code === n.code),
      u = c.length > 0 ? c[0] : void 0;
    return u?.type === Tt.Range ? ue.range : u?.selector === Ua.Refine ? ue.single_value : ue.multi_value
  }
  return {
    filterCollection: o
  }
}
const it = Je("useAdvisorStore", () => {
  const e = T([]),
    l = Vt(),
    t = s => {
      e.value = s
    },
    o = p(() => e.value.map(i => ({
      ...i,
      answers: i.answers.map(n => ({
        href: Rt(n.link, l.localeToURL),
        text: n.text ?? "",
        image: n.image
      }))
    })));
  return {
    rawAdvisors: e,
    advisors: o,
    setAdvisors: t
  }
});
Ne(it, void 0);

function Ts() {
  return typeof globalThis > "u" ? null : globalThis.dataLayerService
}

function Vs(e) {
  return Ts()
    ?.push(e), e
}

function ke() {
  const {
    filterCollection: e
  } = $s(), {
    queryParams: l
  } = St(), t = it();

  function o(i, a) {
    const n = s(i, a);
    return Vs(n)
  }

  function s(i, a) {
    const n = i?.collections;
    if (n.application = n.application || {}, n.application.applicationVersion = Et()
      .public.suggestApiVersion ?? "v3.0", n.application.productTeam = "SEARCH", n.page = n.page || {}, n.page.pageParameter = globalThis.location.search + globalThis.location.hash, n.filter = e(a), n.search = n.search || {}, l.value.q && !n.search?.searchTerm && (n.search.searchTerm = l.value.q), t.advisors?.length) {
      const r = t.advisors[t.advisors?.length - 1];
      n.search.searchAdvisorCampaignName = r.name
    }
    return i
  }
  return {
    addDefaultsAndPushToDatalayer: o
  }
}
const Rs = "above search result",
  Ss = "below search result",
  Es = "right top of search result",
  rt = Je("useTeaserStore", () => {
    const e = T({}),
      l = i => {
        e.value = i
      },
      t = p(() => e.value[Rs] || []),
      o = p(() => e.value[Ss] || []),
      s = p(() => e.value[Es] || []);
    return {
      allTeasers: e,
      setTeasers: l,
      teasersAboveSearch: t,
      teasersBelowSearch: o,
      teasersRightTopOfSearch: s
    }
  });
Ne(rt, void 0);

function Is(e, l) {
  const o = {
    search: {
      searchAdvisorCampaignName: e.name,
      searchAdvisorQuery: e.question,
      searchAdvisorCampaignClick: l.text ?? "",
      searchTermSuggested: void 0,
      searchTermSuggestedCategory: void 0
    }
  };
  return {
    scenarioName: K.PLP_FilterSelect_Click,
    collections: o
  }
}

function Fs() {
  const {
    addDefaultsAndPushToDatalayer: e
  } = ke(), l = rt();

  function t(i, a) {
    const n = Is(i, a);
    return e(n)
  }

  function o(i, a) {
    const n = s(a),
      c = {
        promotions: {
          list: i.answers.map((d, b) => {
            const L = new URL(d.href, globalThis.location.origin)
              .toString();
            return {
              promotionId: i.name ?? "",
              promotionName: i.question ?? "",
              creativeName: d.text,
              creativeSlot: `${n}.${b+1}`,
              linkURL: L,
              type: "Advisor"
            }
          })
        }
      },
      u = {
        scenarioName: K.General_Promotion_View,
        collections: c
      };
    return e(u)
  }

  function s(i) {
    const a = (i ?? 0) + 1;
    return (l.teasersAboveSearch?.length ? 1 : 0) + a
  }
  return {
    trackAdvisorSelected: t,
    trackAdvisorLoad: o
  }
}

function As(e, l) {
  let t, o;
  const s = l ? K.PLP_FilterSelect_Click : K.PLP_FilterDeselect_Click;
  if (e) {
    const a = new URL(e.href, globalThis.location.origin)
      .toString();
    t = {
      linkName: "" + e.value,
      linkType: e.code,
      linkURL: a
    }, o = {
      contentLabel: "" + e.value,
      contentID: e.code + "." + e.value,
      contentType: e.code
    }
  }
  return {
    scenarioName: s,
    collections: {
      click: t,
      content: o
    }
  }
}

function Ms(e) {
  const l = new URL(e.link, globalThis.location.origin)
    .toString(),
    t = {
      linkName: e.label,
      linkType: "Navigation_button",
      linkURL: l
    },
    o = {
      contentID: e.label,
      contentType: "Navigation"
    },
    i = {
      click: t,
      content: o,
      eventInfo: {
        eventAction: "General_Navigation_Click",
        eventCategory: "Click",
        eventInteractionType: "click"
      }
    };
  return {
    scenarioName: K.General_Navigation_Click,
    collections: i
  }
}

function Os() {
  const s = {
    click: {
      linkName: "Filtern & Sortieren",
      linkType: "Filter_Sort_Button",
      linkURL: globalThis.location.toString()
    },
    content: {
      contentLabel: "Filtern & Sortieren",
      contentID: "Filter_Select_Intent",
      contentType: "Filter_Sort_Button"
    },
    eventInfo: {
      eventAction: "PLP_FilterSelect_Intent",
      eventCategory: "Click",
      eventInteractionType: "click"
    }
  };
  return {
    scenarioName: K.PLP_FilterSelect_Intent,
    collections: s
  }
}

function Bs() {
  const {
    addDefaultsAndPushToDatalayer: e
  } = ke(), {
    generateProductListCollection: l,
    getProductTrackingDetails: t
  } = It();

  function o() {
    const u = s();
    return e(u)
  }

  function s() {
    const u = {
      products: {
        list: l(Ze()
          .filteredProducts)
      }
    };
    return {
      scenarioName: K.PLP_Pageload,
      collections: u
    }
  }

  function i(u, d, b) {
    const L = As(u, b);
    return e(L, d)
  }

  function a() {
    const u = Os();
    return e(u)
  }

  function n() {
    const u = r();
    return e(u)
  }

  function r() {
    const u = t(),
      d = {
        eventInfo: {
          eventCategory: "click",
          eventInteractionType: "Click"
        },
        click: {
          linkName: "Show more",
          linkType: "BUTTON"
        },
        content: {
          contentLabel: "Show More Products",
          contentID: At(u),
          contentType: Ft(u)
        }
      };
    return {
      scenarioName: K.PLP_Show_More_Click,
      collections: d
    }
  }

  function c(u) {
    const d = Ms(u);
    return e(d)
  }
  return {
    trackPageLoad: o,
    trackFilter: i,
    trackFilterIntent: a,
    trackNavigation: c,
    trackLoadMore: n
  }
}

function Gs(e) {
  return {
    adLoadBeacon: e.data.adLoadBeacon,
    id: e.id,
    position: e.data.position,
    variantId: e.data.variantId
  }
}

function Us(e, l) {
  const t = Object.values(e)
    .map(i => Gs(i)),
    o = {
      extraParams: {
        adPlacementLoadBeacon: l
      },
      products: {
        list: t
      }
    };
  return {
    scenarioName: K.General_Product_Load,
    collections: o
  }
}

function Ws() {
  const {
    addDefaultsAndPushToDatalayer: e
  } = ke();

  function l(t, o) {
    const s = Us(t, o);
    return e(s)
  }
  return {
    trackSponsoredProductLoad: l
  }
}

function zs() {
  const e = "teaser",
    {
      addDefaultsAndPushToDatalayer: l
    } = ke();

  function t(c, u) {
    const d = [];
    if (!c) return d;
    for (const [b, L] of c.entries()) {
      const g = i(L, u, b);
      l(g), d.push(g)
    }
    return d
  }

  function o(c, u, d) {
    const b = a(c, u, d);
    return l(b)
  }

  function s(c, u, d) {
    const b = n(c, u, d);
    return l(b)
  }

  function i(c, u, d) {
    return {
      scenarioName: K.General_Promotion_View,
      collections: r(c, u, d)
    }
  }

  function a(c, u, d) {
    const b = r(c, u, d);
    return b.click = {
      linkName: u,
      linkType: e,
      linkURL: c.link
    }, {
      scenarioName: K.General_Promotion_Click,
      collections: b
    }
  }

  function n(c, u, d) {
    const b = r(c, u, d);
    return {
      scenarioName: K.General_Section_EnterViewport,
      collections: b
    }
  }

  function r(c, u, d) {
    return {
      promotions: {
        list: [{
          promotionId: c.id ?? c.name ?? "",
          promotionName: u,
          creativeName: c.name ?? "",
          linkURL: c.link,
          creativeSlot: `slot1.${d+1}`,
          type: e
        }]
      }
    }
  }
  return {
    trackTeasersLoad: t,
    trackTeaserSelected: o,
    trackTeaserImpression: s
  }
}

function Ks() {
  const {
    trackPageLoad: e,
    trackFilter: l,
    trackNavigation: t,
    trackFilterIntent: o,
    trackLoadMore: s
  } = Bs(), {
    trackAdvisorSelected: i,
    trackAdvisorLoad: a
  } = Fs(), {
    trackTeasersLoad: n,
    trackTeaserSelected: r,
    trackTeaserImpression: c
  } = zs(), {
    trackSponsoredProductLoad: u
  } = Ws();
  return {
    trackPageLoad: e,
    trackFilter: l,
    trackNavigation: t,
    trackFilterIntent: o,
    trackLoadMore: s,
    trackTeasersLoad: n,
    trackTeaserSelected: r,
    trackTeaserImpression: c,
    trackAdvisorSelected: i,
    trackAdvisorLoad: a,
    trackSponsoredProductLoad: u
  }
}
export {
  Kt as E, ja as _, Ks as a, rt as b, it as c, Ht as i, qs as u, aa as w
};