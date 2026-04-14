! function() {
  const e = document.createElement("link")
    .relList;
  if (!(e && e.supports && e.supports("modulepreload"))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e);
    new MutationObserver(e => {
        for (const o of e)
          if ("childList" === o.type)
            for (const e of o.addedNodes) "LINK" === e.tagName && "modulepreload" === e.rel && t(e)
      })
      .observe(document, {
        childList: !0,
        subtree: !0
      })
  }

  function t(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = function(e) {
      const t = {};
      return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), "use-credentials" === e.crossOrigin ? t.credentials = "include" : "anonymous" === e.crossOrigin ? t.credentials = "omit" : t.credentials = "same-origin", t
    }(e);
    fetch(e.href, t)
  }
}();
const e = {},
  t = function(t, o, r) {
    let s = Promise.resolve();
    if (o && o.length > 0) {
      let t = function(e) {
        return Promise.all(e.map(e => Promise.resolve(e)
          .then(e => ({
            status: "fulfilled",
            value: e
          }), e => ({
            status: "rejected",
            reason: e
          }))))
      };
      document.getElementsByTagName("link");
      const r = document.querySelector("meta[property=csp-nonce]"),
        i = r?.nonce || r?.getAttribute("nonce");
      s = t(o.map(t => {
        if ((t = function(e) {
            return "/checkout-fragments/cart-widget/" + e
          }(t)) in e) return;
        e[t] = !0;
        const o = t.endsWith(".css"),
          r = o ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${t}"]${r}`)) return;
        const s = document.createElement("link");
        return s.rel = o ? "stylesheet" : "modulepreload", o || (s.as = "script"), s.crossOrigin = "", s.href = t, i && s.setAttribute("nonce", i), document.head.appendChild(s), o ? new Promise((e, o) => {
          s.addEventListener("load", e), s.addEventListener("error", () => o(new Error(`Unable to preload CSS for ${t}`)))
        }) : void 0
      }))
    }

    function i(e) {
      const t = new Event("vite:preloadError", {
        cancelable: !0
      });
      if (t.payload = e, window.dispatchEvent(t), !t.defaultPrevented) throw e
    }
    return s.then(e => {
      for (const t of e || []) "rejected" === t.status && i(t.reason);
      return t()
        .catch(i)
    })
  };

function o(e) {
  const t = Object.create(null);
  for (const o of e.split(",")) t[o] = 1;
  return e => e in t
}
const r = {},
  s = [],
  i = () => {},
  n = () => !1,
  a = e => 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  l = e => e.startsWith("onUpdate:"),
  c = Object.assign,
  d = (e, t) => {
    const o = e.indexOf(t);
    o > -1 && e.splice(o, 1)
  },
  p = Object.prototype.hasOwnProperty,
  u = (e, t) => p.call(e, t),
  f = Array.isArray,
  m = e => "[object Map]" === w(e),
  b = e => "[object Set]" === w(e),
  g = e => "[object Date]" === w(e),
  _ = e => "function" == typeof e,
  v = e => "string" == typeof e,
  y = e => "symbol" == typeof e,
  k = e => null !== e && "object" == typeof e,
  x = e => (k(e) || _(e)) && _(e.then) && _(e.catch),
  E = Object.prototype.toString,
  w = e => E.call(e),
  A = e => "[object Object]" === w(e),
  L = e => v(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e,
  P = o(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
  T = e => {
    const t = Object.create(null);
    return o => t[o] || (t[o] = e(o))
  },
  O = /-\w/g,
  C = T(e => e.replace(O, e => e.slice(1)
    .toUpperCase())),
  R = /\B([A-Z])/g,
  I = T(e => e.replace(R, "-$1")
    .toLowerCase()),
  S = T(e => e.charAt(0)
    .toUpperCase() + e.slice(1)),
  D = T(e => e ? `on${S(e)}` : ""),
  j = (e, t) => !Object.is(e, t),
  B = (e, ...t) => {
    for (let o = 0; o < e.length; o++) e[o](...t)
  },
  z = (e, t, o, r = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: r,
      value: o
    })
  },
  F = e => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t
  },
  V = e => {
    const t = v(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
  };
let N;
const M = () => N || (N = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});

function U(e) {
  if (f(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++) {
      const r = e[o],
        s = v(r) ? H(r) : U(r);
      if (s)
        for (const e in s) t[e] = s[e]
    }
    return t
  }
  if (v(e) || k(e)) return e
}
const q = /;(?![^(]*\))/g,
  W = /:([^]+)/,
  $ = /\/\*[^]*?\*\//g;

function H(e) {
  const t = {};
  return e.replace($, "")
    .split(q)
    .forEach(e => {
      if (e) {
        const o = e.split(W);
        o.length > 1 && (t[o[0].trim()] = o[1].trim())
      }
    }), t
}

function Q(e) {
  let t = "";
  if (v(e)) t = e;
  else if (f(e))
    for (let o = 0; o < e.length; o++) {
      const r = Q(e[o]);
      r && (t += r + " ")
    } else if (k(e))
      for (const o in e) e[o] && (t += o + " ");
  return t.trim()
}
const G = o("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");

function K(e) {
  return !!e || "" === e
}

function Y(e, t) {
  if (e === t) return !0;
  let o = g(e),
    r = g(t);
  if (o || r) return !(!o || !r) && e.getTime() === t.getTime();
  if (o = y(e), r = y(t), o || r) return e === t;
  if (o = f(e), r = f(t), o || r) return !(!o || !r) && function(e, t) {
    if (e.length !== t.length) return !1;
    let o = !0;
    for (let r = 0; o && r < e.length; r++) o = Y(e[r], t[r]);
    return o
  }(e, t);
  if (o = k(e), r = k(t), o || r) {
    if (!o || !r) return !1;
    if (Object.keys(e)
      .length !== Object.keys(t)
      .length) return !1;
    for (const o in e) {
      const r = e.hasOwnProperty(o),
        s = t.hasOwnProperty(o);
      if (r && !s || !r && s || !Y(e[o], t[o])) return !1
    }
  }
  return String(e) === String(t)
}
const J = e => !(!e || !0 !== e.__v_isRef),
  Z = e => v(e) ? e : null == e ? "" : f(e) || k(e) && (e.toString === E || !_(e.toString)) ? J(e) ? Z(e.value) : JSON.stringify(e, X, 2) : String(e),
  X = (e, t) => J(t) ? X(e, t.value) : m(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, o], r) => (e[ee(t, r) + " =>"] = o, e), {})
  } : b(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(e => ee(e))
  } : y(t) ? ee(t) : !k(t) || f(t) || A(t) ? t : String(t),
  ee = (e, t = "") => {
    var o;
    return y(e) ? `Symbol(${null!=(o=e.description)?o:t})` : e
  };

function te(e) {
  return null == e ? "initial" : "string" == typeof e ? "" === e ? " " : e : String(e)
}
let oe, re;
class se {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = oe, !e && oe && (this.index = (oe.scopes || (oe.scopes = []))
      .push(this) - 1)
  }
  get active() {
    return this._active
  }
  pause() {
    if (this._active) {
      let e, t;
      if (this._isPaused = !0, this.scopes)
        for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].pause();
      for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause()
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      let e, t;
      if (this._isPaused = !1, this.scopes)
        for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].resume();
      for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].resume()
    }
  }
  run(e) {
    if (this._active) {
      const t = oe;
      try {
        return oe = this, e()
      } finally {
        oe = t
      }
    }
  }
  on() {
    1 === ++this._on && (this.prevScope = oe, oe = this)
  }
  off() {
    this._on > 0 && 0 === --this._on && (oe = this.prevScope, this.prevScope = void 0)
  }
  stop(e) {
    if (this._active) {
      let t, o;
      for (this._active = !1, t = 0, o = this.effects.length; t < o; t++) this.effects[t].stop();
      for (this.effects.length = 0, t = 0, o = this.cleanups.length; t < o; t++) this.cleanups[t]();
      if (this.cleanups.length = 0, this.scopes) {
        for (t = 0, o = this.scopes.length; t < o; t++) this.scopes[t].stop(!0);
        this.scopes.length = 0
      }
      if (!this.detached && this.parent && !e) {
        const e = this.parent.scopes.pop();
        e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index)
      }
      this.parent = void 0
    }
  }
}

function ie() {
  return oe
}
const ne = new WeakSet;
class ae {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, oe && oe.active && oe.effects.push(this)
  }
  pause() {
    this.flags |= 64
  }
  resume() {
    64 & this.flags && (this.flags &= -65, ne.has(this) && (ne.delete(this), this.trigger()))
  }
  notify() {
    2 & this.flags && !(32 & this.flags) || 8 & this.flags || pe(this)
  }
  run() {
    if (!(1 & this.flags)) return this.fn();
    this.flags |= 2, we(this), me(this);
    const e = re,
      t = ye;
    re = this, ye = !0;
    try {
      return this.fn()
    } finally {
      be(this), re = e, ye = t, this.flags &= -3
    }
  }
  stop() {
    if (1 & this.flags) {
      for (let e = this.deps; e; e = e.nextDep) _e(e);
      this.deps = this.depsTail = void 0, we(this), this.onStop && this.onStop(), this.flags &= -2
    }
  }
  trigger() {
    64 & this.flags ? ne.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
  }
  runIfDirty() {
    he(this) && this.run()
  }
  get dirty() {
    return he(this)
  }
}
let le, ce, de = 0;

function pe(e, t = !1) {
  if (e.flags |= 8, t) return e.next = ce, void(ce = e);
  e.next = le, le = e
}

function ue() {
  de++
}

function fe() {
  if (--de > 0) return;
  if (ce) {
    let e = ce;
    for (ce = void 0; e;) {
      const t = e.next;
      e.next = void 0, e.flags &= -9, e = t
    }
  }
  let e;
  for (; le;) {
    let o = le;
    for (le = void 0; o;) {
      const r = o.next;
      if (o.next = void 0, o.flags &= -9, 1 & o.flags) try {
        o.trigger()
      } catch (t) {
        e || (e = t)
      }
      o = r
    }
  }
  if (e) throw e
}

function me(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t
}

function be(e) {
  let t, o = e.depsTail,
    r = o;
  for (; r;) {
    const e = r.prevDep; - 1 === r.version ? (r === o && (o = e), _e(r), ve(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e
  }
  e.deps = t, e.depsTail = o
}

function he(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ge(t.dep.computed) || t.dep.version !== t.version)) return !0;
  return !!e._dirty
}

function ge(e) {
  if (4 & e.flags && !(16 & e.flags)) return;
  if (e.flags &= -17, e.globalVersion === Ae) return;
  if (e.globalVersion = Ae, !e.isSSR && 128 & e.flags && (!e.deps && !e._dirty || !he(e))) return;
  e.flags |= 2;
  const t = e.dep,
    o = re,
    r = ye;
  re = e, ye = !0;
  try {
    me(e);
    const o = e.fn(e._value);
    (0 === t.version || j(o, e._value)) && (e.flags |= 128, e._value = o, t.version++)
  } catch (s) {
    throw t.version++, s
  } finally {
    re = o, ye = r, be(e), e.flags &= -3
  }
}

function _e(e, t = !1) {
  const {
    dep: o,
    prevSub: r,
    nextSub: s
  } = e;
  if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), o.subs === e && (o.subs = r, !r && o.computed)) {
    o.computed.flags &= -5;
    for (let e = o.computed.deps; e; e = e.nextDep) _e(e, !0)
  }
  t || --o.sc || !o.map || o.map.delete(o.key)
}

function ve(e) {
  const {
    prevDep: t,
    nextDep: o
  } = e;
  t && (t.nextDep = o, e.prevDep = void 0), o && (o.prevDep = t, e.nextDep = void 0)
}
let ye = !0;
const ke = [];

function xe() {
  ke.push(ye), ye = !1
}

function Ee() {
  const e = ke.pop();
  ye = void 0 === e || e
}

function we(e) {
  const {
    cleanup: t
  } = e;
  if (e.cleanup = void 0, t) {
    const e = re;
    re = void 0;
    try {
      t()
    } finally {
      re = e
    }
  }
}
let Ae = 0;
class Le {
  constructor(e, t) {
    this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
  }
}
class Pe {
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0
  }
  track(e) {
    if (!re || !ye || re === this.computed) return;
    let t = this.activeLink;
    if (void 0 === t || t.sub !== re) t = this.activeLink = new Le(re, this), re.deps ? (t.prevDep = re.depsTail, re.depsTail.nextDep = t, re.depsTail = t) : re.deps = re.depsTail = t, Te(t);
    else if (-1 === t.version && (t.version = this.version, t.nextDep)) {
      const e = t.nextDep;
      e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = re.depsTail, t.nextDep = void 0, re.depsTail.nextDep = t, re.depsTail = t, re.deps === t && (re.deps = e)
    }
    return t
  }
  trigger(e) {
    this.version++, Ae++, this.notify(e)
  }
  notify(e) {
    ue();
    try {
      0;
      for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify()
    } finally {
      fe()
    }
  }
}

function Te(e) {
  if (e.dep.sc++, 4 & e.sub.flags) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let e = t.deps; e; e = e.nextDep) Te(e)
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e
  }
}
const Oe = new WeakMap,
  Ce = Symbol(""),
  Re = Symbol(""),
  Ie = Symbol("");

function Se(e, t, o) {
  if (ye && re) {
    let t = Oe.get(e);
    t || Oe.set(e, t = new Map);
    let r = t.get(o);
    r || (t.set(o, r = new Pe), r.map = t, r.key = o), r.track()
  }
}

function De(e, t, o, r, s, i) {
  const n = Oe.get(e);
  if (!n) return void Ae++;
  const a = e => {
    e && e.trigger()
  };
  if (ue(), "clear" === t) n.forEach(a);
  else {
    const s = f(e),
      i = s && L(o);
    if (s && "length" === o) {
      const e = Number(r);
      n.forEach((t, o) => {
        ("length" === o || o === Ie || !y(o) && o >= e) && a(t)
      })
    } else switch ((void 0 !== o || n.has(void 0)) && a(n.get(o)), i && a(n.get(Ie)), t) {
      case "add":
        s ? i && a(n.get("length")) : (a(n.get(Ce)), m(e) && a(n.get(Re)));
        break;
      case "delete":
        s || (a(n.get(Ce)), m(e) && a(n.get(Re)));
        break;
      case "set":
        m(e) && a(n.get(Ce))
    }
  }
  fe()
}

function je(e) {
  const t = kt(e);
  return t === e ? t : (Se(t, 0, Ie), vt(e) ? t : t.map(xt))
}

function Be(e) {
  return Se(e = kt(e), 0, Ie), e
}

function ze(e, t) {
  return _t(e) ? Et(gt(e) ? xt(t) : t) : xt(t)
}
const Fe = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ve(this, Symbol.iterator, e => ze(this, e))
  },
  concat(...e) {
    return je(this)
      .concat(...e.map(e => f(e) ? je(e) : e))
  },
  entries() {
    return Ve(this, "entries", e => (e[1] = ze(this, e[1]), e))
  },
  every(e, t) {
    return Me(this, "every", e, t, void 0, arguments)
  },
  filter(e, t) {
    return Me(this, "filter", e, t, e => e.map(e => ze(this, e)), arguments)
  },
  find(e, t) {
    return Me(this, "find", e, t, e => ze(this, e), arguments)
  },
  findIndex(e, t) {
    return Me(this, "findIndex", e, t, void 0, arguments)
  },
  findLast(e, t) {
    return Me(this, "findLast", e, t, e => ze(this, e), arguments)
  },
  findLastIndex(e, t) {
    return Me(this, "findLastIndex", e, t, void 0, arguments)
  },
  forEach(e, t) {
    return Me(this, "forEach", e, t, void 0, arguments)
  },
  includes(...e) {
    return qe(this, "includes", e)
  },
  indexOf(...e) {
    return qe(this, "indexOf", e)
  },
  join(e) {
    return je(this)
      .join(e)
  },
  lastIndexOf(...e) {
    return qe(this, "lastIndexOf", e)
  },
  map(e, t) {
    return Me(this, "map", e, t, void 0, arguments)
  },
  pop() {
    return We(this, "pop")
  },
  push(...e) {
    return We(this, "push", e)
  },
  reduce(e, ...t) {
    return Ue(this, "reduce", e, t)
  },
  reduceRight(e, ...t) {
    return Ue(this, "reduceRight", e, t)
  },
  shift() {
    return We(this, "shift")
  },
  some(e, t) {
    return Me(this, "some", e, t, void 0, arguments)
  },
  splice(...e) {
    return We(this, "splice", e)
  },
  toReversed() {
    return je(this)
      .toReversed()
  },
  toSorted(e) {
    return je(this)
      .toSorted(e)
  },
  toSpliced(...e) {
    return je(this)
      .toSpliced(...e)
  },
  unshift(...e) {
    return We(this, "unshift", e)
  },
  values() {
    return Ve(this, "values", e => ze(this, e))
  }
};

function Ve(e, t, o) {
  const r = Be(e),
    s = r[t]();
  return r === e || vt(e) || (s._next = s.next, s.next = () => {
    const e = s._next();
    return e.done || (e.value = o(e.value)), e
  }), s
}
const Ne = Array.prototype;

function Me(e, t, o, r, s, i) {
  const n = Be(e),
    a = n !== e && !vt(e),
    l = n[t];
  if (l !== Ne[t]) {
    const t = l.apply(e, i);
    return a ? xt(t) : t
  }
  let c = o;
  n !== e && (a ? c = function(t, r) {
    return o.call(this, ze(e, t), r, e)
  } : o.length > 2 && (c = function(t, r) {
    return o.call(this, t, r, e)
  }));
  const d = l.call(n, c, r);
  return a && s ? s(d) : d
}

function Ue(e, t, o, r) {
  const s = Be(e);
  let i = o;
  return s !== e && (vt(e) ? o.length > 3 && (i = function(t, r, s) {
    return o.call(this, t, r, s, e)
  }) : i = function(t, r, s) {
    return o.call(this, t, ze(e, r), s, e)
  }), s[t](i, ...r)
}

function qe(e, t, o) {
  const r = kt(e);
  Se(r, 0, Ie);
  const s = r[t](...o);
  return -1 !== s && !1 !== s || !yt(o[0]) ? s : (o[0] = kt(o[0]), r[t](...o))
}

function We(e, t, o = []) {
  xe(), ue();
  const r = kt(e)[t].apply(e, o);
  return fe(), Ee(), r
}
const $e = o("__proto__,__v_isRef,__isVue"),
  He = new Set(Object.getOwnPropertyNames(Symbol)
    .filter(e => "arguments" !== e && "caller" !== e)
    .map(e => Symbol[e])
    .filter(y));

function Qe(e) {
  y(e) || (e = String(e));
  const t = kt(this);
  return Se(t, 0, e), t.hasOwnProperty(e)
}
class Ge {
  constructor(e = !1, t = !1) {
    this._isReadonly = e, this._isShallow = t
  }
  get(e, t, o) {
    if ("__v_skip" === t) return e.__v_skip;
    const r = this._isReadonly,
      s = this._isShallow;
    if ("__v_isReactive" === t) return !r;
    if ("__v_isReadonly" === t) return r;
    if ("__v_isShallow" === t) return s;
    if ("__v_raw" === t) return o === (r ? s ? pt : dt : s ? ct : lt)
      .get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(o) ? e : void 0;
    const i = f(e);
    if (!r) {
      let e;
      if (i && (e = Fe[t])) return e;
      if ("hasOwnProperty" === t) return Qe
    }
    const n = Reflect.get(e, t, wt(e) ? e : o);
    if (y(t) ? He.has(t) : $e(t)) return n;
    if (r || Se(e, 0, t), s) return n;
    if (wt(n)) {
      const e = i && L(t) ? n : n.value;
      return r && k(e) ? bt(e) : e
    }
    return k(n) ? r ? bt(n) : ft(n) : n
  }
}
class Ke extends Ge {
  constructor(e = !1) {
    super(!1, e)
  }
  set(e, t, o, r) {
    let s = e[t];
    const i = f(e) && L(t);
    if (!this._isShallow) {
      const e = _t(s);
      if (vt(o) || _t(o) || (s = kt(s), o = kt(o)), !i && wt(s) && !wt(o)) return e || (s.value = o), !0
    }
    const n = i ? Number(t) < e.length : u(e, t),
      a = Reflect.set(e, t, o, wt(e) ? e : r);
    return e === kt(r) && (n ? j(o, s) && De(e, "set", t, o) : De(e, "add", t, o)), a
  }
  deleteProperty(e, t) {
    const o = u(e, t);
    e[t];
    const r = Reflect.deleteProperty(e, t);
    return r && o && De(e, "delete", t, void 0), r
  }
  has(e, t) {
    const o = Reflect.has(e, t);
    return y(t) && He.has(t) || Se(e, 0, t), o
  }
  ownKeys(e) {
    return Se(e, 0, f(e) ? "length" : Ce), Reflect.ownKeys(e)
  }
}
class Ye extends Ge {
  constructor(e = !1) {
    super(!0, e)
  }
  set(e, t) {
    return !0
  }
  deleteProperty(e, t) {
    return !0
  }
}
const Je = new Ke,
  Ze = new Ye,
  Xe = new Ke(!0),
  et = e => e,
  tt = e => Reflect.getPrototypeOf(e);

function ot(e) {
  return function(...t) {
    return "delete" !== e && ("clear" === e ? void 0 : this)
  }
}

function rt(e, t) {
  const o = {
    get(o) {
      const r = this.__v_raw,
        s = kt(r),
        i = kt(o);
      e || (j(o, i) && Se(s, 0, o), Se(s, 0, i));
      const {
        has: n
      } = tt(s), a = t ? et : e ? Et : xt;
      return n.call(s, o) ? a(r.get(o)) : n.call(s, i) ? a(r.get(i)) : void(r !== s && r.get(o))
    },
    get size() {
      const t = this.__v_raw;
      return !e && Se(kt(t), 0, Ce), t.size
    },
    has(t) {
      const o = this.__v_raw,
        r = kt(o),
        s = kt(t);
      return e || (j(t, s) && Se(r, 0, t), Se(r, 0, s)), t === s ? o.has(t) : o.has(t) || o.has(s)
    },
    forEach(o, r) {
      const s = this,
        i = s.__v_raw,
        n = t ? et : e ? Et : xt;
      return !e && Se(kt(i), 0, Ce), i.forEach((e, t) => o.call(r, n(e), n(t), s))
    }
  };
  c(o, e ? {
    add: ot("add"),
    set: ot("set"),
    delete: ot("delete"),
    clear: ot("clear")
  } : {
    add(e) {
      t || vt(e) || _t(e) || (e = kt(e));
      const o = kt(this);
      return tt(o)
        .has.call(o, e) || (o.add(e), De(o, "add", e, e)), this
    },
    set(e, o) {
      t || vt(o) || _t(o) || (o = kt(o));
      const r = kt(this),
        {
          has: s,
          get: i
        } = tt(r);
      let n = s.call(r, e);
      n || (e = kt(e), n = s.call(r, e));
      const a = i.call(r, e);
      return r.set(e, o), n ? j(o, a) && De(r, "set", e, o) : De(r, "add", e, o), this
    },
    delete(e) {
      const t = kt(this),
        {
          has: o,
          get: r
        } = tt(t);
      let s = o.call(t, e);
      s || (e = kt(e), s = o.call(t, e)), r && r.call(t, e);
      const i = t.delete(e);
      return s && De(t, "delete", e, void 0), i
    },
    clear() {
      const e = kt(this),
        t = 0 !== e.size,
        o = e.clear();
      return t && De(e, "clear", void 0, void 0), o
    }
  });
  return ["keys", "values", "entries", Symbol.iterator].forEach(r => {
    o[r] = function(e, t, o) {
      return function(...r) {
        const s = this.__v_raw,
          i = kt(s),
          n = m(i),
          a = "entries" === e || e === Symbol.iterator && n,
          l = "keys" === e && n,
          d = s[e](...r),
          p = o ? et : t ? Et : xt;
        return !t && Se(i, 0, l ? Re : Ce), c(Object.create(d), {
          next() {
            const {
              value: e,
              done: t
            } = d.next();
            return t ? {
              value: e,
              done: t
            } : {
              value: a ? [p(e[0]), p(e[1])] : p(e),
              done: t
            }
          }
        })
      }
    }(r, e, t)
  }), o
}

function st(e, t) {
  const o = rt(e, t);
  return (t, r, s) => "__v_isReactive" === r ? !e : "__v_isReadonly" === r ? e : "__v_raw" === r ? t : Reflect.get(u(o, r) && r in t ? o : t, r, s)
}
const it = {
    get: st(!1, !1)
  },
  nt = {
    get: st(!1, !0)
  },
  at = {
    get: st(!0, !1)
  },
  lt = new WeakMap,
  ct = new WeakMap,
  dt = new WeakMap,
  pt = new WeakMap;

function ut(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : function(e) {
    switch (e) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0
    }
  }((e => w(e)
    .slice(8, -1))(e))
}

function ft(e) {
  return _t(e) ? e : ht(e, !1, Je, it, lt)
}

function mt(e) {
  return ht(e, !1, Xe, nt, ct)
}

function bt(e) {
  return ht(e, !0, Ze, at, dt)
}

function ht(e, t, o, r, s) {
  if (!k(e)) return e;
  if (e.__v_raw && (!t || !e.__v_isReactive)) return e;
  const i = ut(e);
  if (0 === i) return e;
  const n = s.get(e);
  if (n) return n;
  const a = new Proxy(e, 2 === i ? r : o);
  return s.set(e, a), a
}

function gt(e) {
  return _t(e) ? gt(e.__v_raw) : !(!e || !e.__v_isReactive)
}

function _t(e) {
  return !(!e || !e.__v_isReadonly)
}

function vt(e) {
  return !(!e || !e.__v_isShallow)
}

function yt(e) {
  return !!e && !!e.__v_raw
}

function kt(e) {
  const t = e && e.__v_raw;
  return t ? kt(t) : e
}
const xt = e => k(e) ? ft(e) : e,
  Et = e => k(e) ? bt(e) : e;

function wt(e) {
  return !!e && !0 === e.__v_isRef
}

function At(e) {
  return Pt(e, !1)
}

function Lt(e) {
  return Pt(e, !0)
}

function Pt(e, t) {
  return wt(e) ? e : new Tt(e, t)
}
class Tt {
  constructor(e, t) {
    this.dep = new Pe, this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : kt(e), this._value = t ? e : xt(e), this.__v_isShallow = t
  }
  get value() {
    return this.dep.track(), this._value
  }
  set value(e) {
    const t = this._rawValue,
      o = this.__v_isShallow || vt(e) || _t(e);
    j(e = o ? e : kt(e), t) && (this._rawValue = e, this._value = o ? e : xt(e), this.dep.trigger())
  }
}

function Ot(e) {
  return wt(e) ? e.value : e
}

function Ct(e) {
  return _(e) ? e() : Ot(e)
}
const Rt = {
  get: (e, t, o) => "__v_raw" === t ? e : Ot(Reflect.get(e, t, o)),
  set: (e, t, o, r) => {
    const s = e[t];
    return wt(s) && !wt(o) ? (s.value = o, !0) : Reflect.set(e, t, o, r)
  }
};

function It(e) {
  return gt(e) ? e : new Proxy(e, Rt)
}
class St {
  constructor(e, t, o) {
    this.fn = e, this.setter = t, this._value = void 0, this.dep = new Pe(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ae - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = o
  }
  notify() {
    if (this.flags |= 16, !(8 & this.flags) && re !== this) return pe(this, !0), !0
  }
  get value() {
    const e = this.dep.track();
    return ge(this), e && (e.version = this.dep.version), this._value
  }
  set value(e) {
    this.setter && this.setter(e)
  }
}

function Dt(e, t, o = !1) {
  let r, s;
  _(e) ? r = e : (r = e.get, s = e.set);
  return new St(r, s, o)
}
const jt = {},
  Bt = new WeakMap;
let zt;

function Ft(e, t, o = r) {
  const {
    immediate: s,
    deep: n,
    once: a,
    scheduler: l,
    augmentJob: c,
    call: p
  } = o, u = e => n ? e : vt(e) || !1 === n || 0 === n ? Vt(e, 1) : Vt(e);
  let m, b, g, v, y = !1,
    k = !1;
  if (wt(e) ? (b = () => e.value, y = vt(e)) : gt(e) ? (b = () => u(e), y = !0) : f(e) ? (k = !0, y = e.some(e => gt(e) || vt(e)), b = () => e.map(e => wt(e) ? e.value : gt(e) ? u(e) : _(e) ? p ? p(e, 2) : e() : void 0)) : b = _(e) ? t ? p ? () => p(e, 2) : e : () => {
      if (g) {
        xe();
        try {
          g()
        } finally {
          Ee()
        }
      }
      const t = zt;
      zt = m;
      try {
        return p ? p(e, 3, [v]) : e(v)
      } finally {
        zt = t
      }
    } : i, t && n) {
    const e = b,
      t = !0 === n ? 1 / 0 : n;
    b = () => Vt(e(), t)
  }
  const x = ie(),
    E = () => {
      m.stop(), x && x.active && d(x.effects, m)
    };
  if (a && t) {
    const e = t;
    t = (...t) => {
      e(...t), E()
    }
  }
  let w = k ? new Array(e.length)
    .fill(jt) : jt;
  const A = e => {
    if (1 & m.flags && (m.dirty || e))
      if (t) {
        const e = m.run();
        if (n || y || (k ? e.some((e, t) => j(e, w[t])) : j(e, w))) {
          g && g();
          const o = zt;
          zt = m;
          try {
            const o = [e, w === jt ? void 0 : k && w[0] === jt ? [] : w, v];
            w = e, p ? p(t, 3, o) : t(...o)
          } finally {
            zt = o
          }
        }
      } else m.run()
  };
  return c && c(A), m = new ae(b), m.scheduler = l ? () => l(A, !1) : A, v = e => function(e, t = !1, o = zt) {
    if (o) {
      let t = Bt.get(o);
      t || Bt.set(o, t = []), t.push(e)
    }
  }(e, !1, m), g = m.onStop = () => {
    const e = Bt.get(m);
    if (e) {
      if (p) p(e, 4);
      else
        for (const t of e) t();
      Bt.delete(m)
    }
  }, t ? s ? A(!0) : w = m.run() : l ? l(A.bind(null, !0), !0) : m.run(), E.pause = m.pause.bind(m), E.resume = m.resume.bind(m), E.stop = E, E
}

function Vt(e, t = 1 / 0, o) {
  if (t <= 0 || !k(e) || e.__v_skip) return e;
  if (((o = o || new Map)
      .get(e) || 0) >= t) return e;
  if (o.set(e, t), t--, wt(e)) Vt(e.value, t, o);
  else if (f(e))
    for (let r = 0; r < e.length; r++) Vt(e[r], t, o);
  else if (b(e) || m(e)) e.forEach(e => {
    Vt(e, t, o)
  });
  else if (A(e)) {
    for (const r in e) Vt(e[r], t, o);
    for (const r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && Vt(e[r], t, o)
  }
  return e
}

function Nt(e, t, o, r) {
  try {
    return r ? e(...r) : e()
  } catch (s) {
    Ut(s, t, o)
  }
}

function Mt(e, t, o, r) {
  if (_(e)) {
    const s = Nt(e, t, o, r);
    return s && x(s) && s.catch(e => {
      Ut(e, t, o)
    }), s
  }
  if (f(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++) s.push(Mt(e[i], t, o, r));
    return s
  }
}

function Ut(e, t, o, s = !0) {
  t && t.vnode;
  const {
    errorHandler: i,
    throwUnhandledErrorInProduction: n
  } = t && t.appContext.config || r;
  if (t) {
    let r = t.parent;
    const s = t.proxy,
      n = `https://vuejs.org/error-reference/#runtime-${o}`;
    for (; r;) {
      const t = r.ec;
      if (t)
        for (let o = 0; o < t.length; o++)
          if (!1 === t[o](e, s, n)) return;
      r = r.parent
    }
    if (i) return xe(), Nt(i, null, 10, [e, s, n]), void Ee()
  }! function(e, t, o, r = !0, s = !1) {
    if (s) throw e;
    console.error(e)
  }(e, 0, 0, s, n)
}
const qt = [];
let Wt = -1;
const $t = [];
let Ht = null,
  Qt = 0;
const Gt = Promise.resolve();
let Kt = null;

function Yt(e) {
  const t = Kt || Gt;
  return e ? t.then(this ? e.bind(this) : e) : t
}

function Jt(e) {
  if (!(1 & e.flags)) {
    const t = oo(e),
      o = qt[qt.length - 1];
    !o || !(2 & e.flags) && t >= oo(o) ? qt.push(e) : qt.splice(function(e) {
      let t = Wt + 1,
        o = qt.length;
      for (; t < o;) {
        const r = t + o >>> 1,
          s = qt[r],
          i = oo(s);
        i < e || i === e && 2 & s.flags ? t = r + 1 : o = r
      }
      return t
    }(t), 0, e), e.flags |= 1, Zt()
  }
}

function Zt() {
  Kt || (Kt = Gt.then(ro))
}

function Xt(e) {
  f(e) ? $t.push(...e) : Ht && -1 === e.id ? Ht.splice(Qt + 1, 0, e) : 1 & e.flags || ($t.push(e), e.flags |= 1), Zt()
}

function eo(e, t, o = Wt + 1) {
  for (; o < qt.length; o++) {
    const t = qt[o];
    if (t && 2 & t.flags) {
      if (e && t.id !== e.uid) continue;
      qt.splice(o, 1), o--, 4 & t.flags && (t.flags &= -2), t(), 4 & t.flags || (t.flags &= -2)
    }
  }
}

function to(e) {
  if ($t.length) {
    const e = [...new Set($t)].sort((e, t) => oo(e) - oo(t));
    if ($t.length = 0, Ht) return void Ht.push(...e);
    for (Ht = e, Qt = 0; Qt < Ht.length; Qt++) {
      const e = Ht[Qt];
      4 & e.flags && (e.flags &= -2), 8 & e.flags || e(), e.flags &= -2
    }
    Ht = null, Qt = 0
  }
}
const oo = e => null == e.id ? 2 & e.flags ? -1 : 1 / 0 : e.id;

function ro(e) {
  try {
    for (Wt = 0; Wt < qt.length; Wt++) {
      const e = qt[Wt];
      !e || 8 & e.flags || (4 & e.flags && (e.flags &= -2), Nt(e, e.i, e.i ? 15 : 14), 4 & e.flags || (e.flags &= -2))
    }
  } finally {
    for (; Wt < qt.length; Wt++) {
      const e = qt[Wt];
      e && (e.flags &= -2)
    }
    Wt = -1, qt.length = 0, to(), Kt = null, (qt.length || $t.length) && ro()
  }
}
let so = null,
  io = null;

function no(e) {
  const t = so;
  return so = e, io = e && e.type.__scopeId || null, t
}

function ao(e, t = so, o) {
  if (!t) return e;
  if (e._n) return e;
  const r = (...o) => {
    r._d && Es(-1);
    const s = no(t);
    let i;
    try {
      i = e(...o)
    } finally {
      no(s), r._d && Es(1)
    }
    return i
  };
  return r._n = !0, r._c = !0, r._d = !0, r
}

function lo(e, t) {
  if (null === so) return e;
  const o = oi(so),
    s = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [e, n, a, l = r] = t[i];
    e && (_(e) && (e = {
      mounted: e,
      updated: e
    }), e.deep && Vt(n), s.push({
      dir: e,
      instance: o,
      value: n,
      oldValue: void 0,
      arg: a,
      modifiers: l
    }))
  }
  return e
}

function co(e, t, o, r) {
  const s = e.dirs,
    i = t && t.dirs;
  for (let n = 0; n < s.length; n++) {
    const a = s[n];
    i && (a.oldValue = i[n].value);
    let l = a.dir[r];
    l && (xe(), Mt(l, o, 8, [e.el, a, e, t]), Ee())
  }
}

function po(e, t, o = !1) {
  const r = $s();
  if (r || Br) {
    let s = Br ? Br._context.provides : r ? null == r.parent || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return o && _(t) ? t.call(r && r.proxy) : t
  }
}

function uo() {
  return !(!$s() && !Br)
}
const fo = Symbol.for("v-scx");

function mo(e, t) {
  return ho(e, null, t)
}

function bo(e, t, o) {
  return ho(e, t, o)
}

function ho(e, t, o = r) {
  const {
    immediate: s,
    deep: n,
    flush: a,
    once: l
  } = o, d = c({}, o), p = t && s || !t && "post" !== a;
  let u;
  if (Js)
    if ("sync" === a) {
      const e = po(fo);
      u = e.__watcherHandles || (e.__watcherHandles = [])
    } else if (!p) {
    const e = () => {};
    return e.stop = i, e.resume = i, e.pause = i, e
  }
  const f = Ws;
  d.call = (e, t, o) => Mt(e, f, t, o);
  let m = !1;
  "post" === a ? d.scheduler = e => {
    ns(e, f && f.suspense)
  } : "sync" !== a && (m = !0, d.scheduler = (e, t) => {
    t ? e() : Jt(e)
  }), d.augmentJob = e => {
    t && (e.flags |= 4), m && (e.flags |= 2, f && (e.id = f.uid, e.i = f))
  };
  const b = Ft(e, t, d);
  return Js && (u ? u.push(b) : p && b()), b
}

function go(e, t, o) {
  const r = this.proxy,
    s = v(e) ? e.includes(".") ? _o(r, e) : () => r[e] : e.bind(r, r);
  let i;
  _(t) ? i = t : (i = t.handler, o = t);
  const n = Gs(this),
    a = ho(s, i.bind(r), o);
  return n(), a
}

function _o(e, t) {
  const o = t.split(".");
  return () => {
    let t = e;
    for (let e = 0; e < o.length && t; e++) t = t[o[e]];
    return t
  }
}
const vo = Symbol("_vte"),
  yo = e => e && (e.disabled || "" === e.disabled),
  ko = e => e && (e.defer || "" === e.defer),
  xo = e => "undefined" != typeof SVGElement && e instanceof SVGElement,
  Eo = e => "function" == typeof MathMLElement && e instanceof MathMLElement,
  wo = (e, t) => {
    const o = e && e.to;
    if (v(o)) {
      if (t) {
        return t(o)
      }
      return null
    }
    return o
  },
  Ao = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, o, r, s, i, n, a, l, c) {
      const {
        mc: d,
        pc: p,
        pbc: u,
        o: {
          insert: f,
          querySelector: m,
          createText: b,
          createComment: g
        }
      } = c, _ = yo(t.props);
      let {
        shapeFlag: v,
        children: y,
        dynamicChildren: k
      } = t;
      if (null == e) {
        const e = t.el = b(""),
          c = t.anchor = b("");
        f(e, o, r), f(c, o, r);
        const p = (e, t) => {
            16 & v && d(y, e, t, s, i, n, a, l)
          },
          u = () => {
            const e = t.target = wo(t.props, m),
              o = Oo(e, t, b, f);
            e && ("svg" !== n && xo(e) ? n = "svg" : "mathml" !== n && Eo(e) && (n = "mathml"), s && s.isCE && (s.ce._teleportTargets || (s.ce._teleportTargets = new Set))
              .add(e), _ || (p(e, o), To(t, !1)))
          };
        _ && (p(o, c), To(t, !0)), ko(t.props) ? (t.el.__isMounted = !1, ns(() => {
          u(), delete t.el.__isMounted
        }, i)) : u()
      } else {
        if (ko(t.props) && !1 === e.el.__isMounted) return void ns(() => {
          Ao.process(e, t, o, r, s, i, n, a, l, c)
        }, i);
        t.el = e.el, t.targetStart = e.targetStart;
        const d = t.anchor = e.anchor,
          f = t.target = e.target,
          b = t.targetAnchor = e.targetAnchor,
          g = yo(e.props),
          v = g ? o : f,
          y = g ? d : b;
        if ("svg" === n || xo(f) ? n = "svg" : ("mathml" === n || Eo(f)) && (n = "mathml"), k ? (u(e.dynamicChildren, k, v, s, i, n, a), ds(e, t, !0)) : l || p(e, t, v, y, s, i, n, a, !1), _) g ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Lo(t, o, d, c, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const e = t.target = wo(t.props, m);
          e && Lo(t, e, null, c, 0)
        } else g && Lo(t, f, b, c, 1);
        To(t, _)
      }
    },
    remove(e, t, o, {
      um: r,
      o: {
        remove: s
      }
    }, i) {
      const {
        shapeFlag: n,
        children: a,
        anchor: l,
        targetStart: c,
        targetAnchor: d,
        target: p,
        props: u
      } = e;
      if (p && (s(c), s(d)), i && s(l), 16 & n) {
        const e = i || !yo(u);
        for (let s = 0; s < a.length; s++) {
          const i = a[s];
          r(i, t, o, e, !!i.dynamicChildren)
        }
      }
    },
    move: Lo,
    hydrate: function(e, t, o, r, s, i, {
      o: {
        nextSibling: n,
        parentNode: a,
        querySelector: l,
        insert: c,
        createText: d
      }
    }, p) {
      function u(e, o) {
        let r = o;
        for (; r;) {
          if (r && 8 === r.nodeType)
            if ("teleport start anchor" === r.data) t.targetStart = r;
            else if ("teleport anchor" === r.data) {
            t.targetAnchor = r, e._lpa = t.targetAnchor && n(t.targetAnchor);
            break
          }
          r = n(r)
        }
      }

      function f(e, t) {
        t.anchor = p(n(e), t, a(e), o, r, s, i)
      }
      const m = t.target = wo(t.props, l),
        b = yo(t.props);
      if (m) {
        const l = m._lpa || m.firstChild;
        16 & t.shapeFlag && (b ? (f(e, t), u(m, l), t.targetAnchor || Oo(m, t, d, c, a(e) === m ? e : null)) : (t.anchor = n(e), u(m, l), t.targetAnchor || Oo(m, t, d, c), p(l && n(l), t, m, o, r, s, i))), To(t, b)
      } else b && 16 & t.shapeFlag && (f(e, t), t.targetStart = e, t.targetAnchor = n(e));
      return t.anchor && n(t.anchor)
    }
  };

function Lo(e, t, o, {
  o: {
    insert: r
  },
  m: s
}, i = 2) {
  0 === i && r(e.targetAnchor, t, o);
  const {
    el: n,
    anchor: a,
    shapeFlag: l,
    children: c,
    props: d
  } = e, p = 2 === i;
  if (p && r(n, t, o), (!p || yo(d)) && 16 & l)
    for (let u = 0; u < c.length; u++) s(c[u], t, o, 2);
  p && r(a, t, o)
}
const Po = Ao;

function To(e, t) {
  const o = e.ctx;
  if (o && o.ut) {
    let r, s;
    for (t ? (r = e.el, s = e.anchor) : (r = e.targetStart, s = e.targetAnchor); r && r !== s;) 1 === r.nodeType && r.setAttribute("data-v-owner", o.uid), r = r.nextSibling;
    o.ut()
  }
}

function Oo(e, t, o, r, s = null) {
  const i = t.targetStart = o(""),
    n = t.targetAnchor = o("");
  return i[vo] = n, e && (r(i, e, s), r(n, e, s)), n
}
const Co = Symbol("_leaveCb"),
  Ro = Symbol("_enterCb");
const Io = [Function, Array],
  So = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Io,
    onEnter: Io,
    onAfterEnter: Io,
    onEnterCancelled: Io,
    onBeforeLeave: Io,
    onLeave: Io,
    onAfterLeave: Io,
    onLeaveCancelled: Io,
    onBeforeAppear: Io,
    onAppear: Io,
    onAfterAppear: Io,
    onAppearCancelled: Io
  };

function Do(e, t, o, r, s) {
  const {
    appear: i,
    mode: n,
    persisted: a = !1,
    onBeforeEnter: l,
    onEnter: c,
    onAfterEnter: d,
    onEnterCancelled: p,
    onBeforeLeave: u,
    onLeave: m,
    onAfterLeave: b,
    onLeaveCancelled: g,
    onBeforeAppear: _,
    onAppear: v,
    onAfterAppear: y,
    onAppearCancelled: k
  } = t, x = String(e.key), E = function(e, t) {
    const {
      leavingVNodes: o
    } = e;
    let r = o.get(t.type);
    return r || (r = Object.create(null), o.set(t.type, r)), r
  }(o, e), w = (e, t) => {
    e && Mt(e, r, 9, t)
  }, A = (e, t) => {
    const o = t[1];
    w(e, t), f(e) ? e.every(e => e.length <= 1) && o() : e.length <= 1 && o()
  }, L = {
    mode: n,
    persisted: a,
    beforeEnter(t) {
      let r = l;
      if (!o.isMounted) {
        if (!i) return;
        r = _ || l
      }
      t[Co] && t[Co](!0);
      const s = E[x];
      s && Ts(e, s) && s.el[Co] && s.el[Co](), w(r, [t])
    },
    enter(e) {
      let t = c,
        r = d,
        s = p;
      if (!o.isMounted) {
        if (!i) return;
        t = v || c, r = y || d, s = k || p
      }
      let n = !1;
      e[Ro] = t => {
        n || (n = !0, w(t ? s : r, [e]), L.delayedLeave && L.delayedLeave(), e[Ro] = void 0)
      };
      const a = e[Ro].bind(null, !1);
      t ? A(t, [e, a]) : a()
    },
    leave(t, r) {
      const s = String(e.key);
      if (t[Ro] && t[Ro](!0), o.isUnmounting) return r();
      w(u, [t]);
      let i = !1;
      t[Co] = o => {
        i || (i = !0, r(), w(o ? g : b, [t]), t[Co] = void 0, E[s] === e && delete E[s])
      };
      const n = t[Co].bind(null, !1);
      E[s] = e, m ? A(m, [t, n]) : n()
    },
    clone: e => Do(e, t, o, r)
  };
  return L
}

function jo(e, t) {
  6 & e.shapeFlag && e.component ? (e.transition = t, jo(e.component.subTree, t)) : 128 & e.shapeFlag ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}

function Bo(e, t = !1, o) {
  let r = [],
    s = 0;
  for (let i = 0; i < e.length; i++) {
    let n = e[i];
    const a = null == o ? n.key : String(o) + String(null != n.key ? n.key : i);
    n.type === bs ? (128 & n.patchFlag && s++, r = r.concat(Bo(n.children, t, a))) : (t || n.type !== gs) && r.push(null != a ? Ss(n, {
      key: a
    }) : n)
  }
  if (s > 1)
    for (let i = 0; i < r.length; i++) r[i].patchFlag = -2;
  return r
}

function zo(e, t) {
  return _(e) ? (() => c({
    name: e.name
  }, t, {
    setup: e
  }))() : e
}

function Fo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}

function Vo(e, t) {
  let o;
  return !(!(o = Object.getOwnPropertyDescriptor(e, t)) || o.configurable)
}
const No = new WeakMap;

function Mo(e, t, o, s, i = !1) {
  if (f(e)) return void e.forEach((e, r) => Mo(e, t && (f(t) ? t[r] : t), o, s, i));
  if (qo(s) && !i) return void(512 & s.shapeFlag && s.type.__asyncResolved && s.component.subTree.component && Mo(e, t, o, s.component.subTree));
  const a = 4 & s.shapeFlag ? oi(s.component) : s.el,
    l = i ? null : a,
    {
      i: c,
      r: p
    } = e,
    m = t && t.r,
    b = c.refs === r ? c.refs = {} : c.refs,
    g = c.setupState,
    y = kt(g),
    k = g === r ? n : e => !Vo(b, e) && u(y, e),
    x = (e, t) => !t || !Vo(b, t);
  if (null != m && m !== p)
    if (Uo(t), v(m)) b[m] = null, k(m) && (g[m] = null);
    else if (wt(m)) {
    const e = t;
    x(0, e.k) && (m.value = null), e.k && (b[e.k] = null)
  }
  if (_(p)) Nt(p, c, 12, [l, b]);
  else {
    const t = v(p),
      r = wt(p);
    if (t || r) {
      const s = () => {
        if (e.f) {
          const o = t ? k(p) ? g[p] : b[p] : x() || !e.k ? p.value : b[e.k];
          if (i) f(o) && d(o, a);
          else if (f(o)) o.includes(a) || o.push(a);
          else if (t) b[p] = [a], k(p) && (g[p] = b[p]);
          else {
            const t = [a];
            x(0, e.k) && (p.value = t), e.k && (b[e.k] = t)
          }
        } else t ? (b[p] = l, k(p) && (g[p] = l)) : r && (x(0, e.k) && (p.value = l), e.k && (b[e.k] = l))
      };
      if (l) {
        const t = () => {
          s(), No.delete(e)
        };
        t.id = -1, No.set(e, t), ns(t, o)
      } else Uo(e), s()
    }
  }
}

function Uo(e) {
  const t = No.get(e);
  t && (t.flags |= 8, No.delete(e))
}
M()
  .requestIdleCallback, M()
  .cancelIdleCallback;
const qo = e => !!e.type.__asyncLoader,
  Wo = e => e.type.__isKeepAlive;

function $o(e, t) {
  Qo(e, "a", t)
}

function Ho(e, t) {
  Qo(e, "da", t)
}

function Qo(e, t, o = Ws) {
  const r = e.__wdc || (e.__wdc = () => {
    let t = o;
    for (; t;) {
      if (t.isDeactivated) return;
      t = t.parent
    }
    return e()
  });
  if (Ko(t, r, o), o) {
    let e = o.parent;
    for (; e && e.parent;) Wo(e.parent.vnode) && Go(r, t, o, e), e = e.parent
  }
}

function Go(e, t, o, r) {
  const s = Ko(t, e, r, !0);
  or(() => {
    d(r[t], s)
  }, o)
}

function Ko(e, t, o = Ws, r = !1) {
  if (o) {
    const s = o[e] || (o[e] = []),
      i = t.__weh || (t.__weh = (...r) => {
        xe();
        const s = Gs(o),
          i = Mt(t, o, e, r);
        return s(), Ee(), i
      });
    return r ? s.unshift(i) : s.push(i), i
  }
}
const Yo = e => (t, o = Ws) => {
    Js && "sp" !== e || Ko(e, (...e) => t(...e), o)
  },
  Jo = Yo("bm"),
  Zo = Yo("m"),
  Xo = Yo("bu"),
  er = Yo("u"),
  tr = Yo("bum"),
  or = Yo("um"),
  rr = Yo("sp"),
  sr = Yo("rtg"),
  ir = Yo("rtc");

function nr(e, t = Ws) {
  Ko("ec", e, t)
}
const ar = Symbol.for("v-ndc");

function lr(e) {
  return v(e) ? function(e, t, o = !0, r = !1) {
    const s = so || Ws;
    if (s) {
      const o = s.type;
      {
        const e = ri(o, !1);
        if (e && (e === t || e === C(t) || e === S(C(t)))) return o
      }
      const i = cr(s[e] || o[e], t) || cr(s.appContext[e], t);
      return !i && r ? o : i
    }
  }("components", e, !1) || e : e || ar
}

function cr(e, t) {
  return e && (e[t] || e[C(t)] || e[S(C(t))])
}

function dr(e, t, o, r) {
  let s;
  const i = o,
    n = f(e);
  if (n || v(e)) {
    let o = !1,
      r = !1;
    n && gt(e) && (o = !vt(e), r = _t(e), e = Be(e)), s = new Array(e.length);
    for (let n = 0, a = e.length; n < a; n++) s[n] = t(o ? r ? Et(xt(e[n])) : xt(e[n]) : e[n], n, void 0, i)
  } else if ("number" == typeof e) {
    s = new Array(e);
    for (let o = 0; o < e; o++) s[o] = t(o + 1, o, void 0, i)
  } else if (k(e))
    if (e[Symbol.iterator]) s = Array.from(e, (e, o) => t(e, o, void 0, i));
    else {
      const o = Object.keys(e);
      s = new Array(o.length);
      for (let r = 0, n = o.length; r < n; r++) {
        const n = o[r];
        s[r] = t(e[n], n, r, i)
      }
    }
  else s = [];
  return s
}

function pr(e, t, o = {}, r, s) {
  if (so.ce || so.parent && qo(so.parent) && so.parent.ce) {
    const e = Object.keys(o)
      .length > 0;
    return "default" !== t && (o.name = t), ks(), Ls(bs, null, [Is("slot", o, r && r())], e ? -2 : 64)
  }
  let i = e[t];
  i && i._c && (i._d = !1), ks();
  const n = i && ur(i(o)),
    a = o.key || n && n.key,
    l = Ls(bs, {
      key: (a && !y(a) ? a : `_${t}`) + (!n && r ? "_fb" : "")
    }, n || (r ? r() : []), n && 1 === e._ ? 64 : -2);
  return !s && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), i && i._c && (i._d = !0), l
}

function ur(e) {
  return e.some(e => !Ps(e) || e.type !== gs && !(e.type === bs && !ur(e.children))) ? e : null
}
const fr = e => e ? Ys(e) ? oi(e) : fr(e.parent) : null,
  mr = c(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => fr(e.parent),
    $root: e => fr(e.root),
    $host: e => e.ce,
    $emit: e => e.emit,
    $options: e => Ar(e),
    $forceUpdate: e => e.f || (e.f = () => {
      Jt(e.update)
    }),
    $nextTick: e => e.n || (e.n = Yt.bind(e.proxy)),
    $watch: e => go.bind(e)
  }),
  br = (e, t) => e !== r && !e.__isScriptSetup && u(e, t),
  hr = {
    get({
      _: e
    }, t) {
      if ("__v_skip" === t) return !0;
      const {
        ctx: o,
        setupState: s,
        data: i,
        props: n,
        accessCache: a,
        type: l,
        appContext: c
      } = e;
      if ("$" !== t[0]) {
        const e = a[t];
        if (void 0 !== e) switch (e) {
          case 1:
            return s[t];
          case 2:
            return i[t];
          case 4:
            return o[t];
          case 3:
            return n[t]
        } else {
          if (br(s, t)) return a[t] = 1, s[t];
          if (i !== r && u(i, t)) return a[t] = 2, i[t];
          if (u(n, t)) return a[t] = 3, n[t];
          if (o !== r && u(o, t)) return a[t] = 4, o[t];
          kr && (a[t] = 0)
        }
      }
      const d = mr[t];
      let p, f;
      return d ? ("$attrs" === t && Se(e.attrs, 0, ""), d(e)) : (p = l.__cssModules) && (p = p[t]) ? p : o !== r && u(o, t) ? (a[t] = 4, o[t]) : (f = c.config.globalProperties, u(f, t) ? f[t] : void 0)
    },
    set({
      _: e
    }, t, o) {
      const {
        data: s,
        setupState: i,
        ctx: n
      } = e;
      return br(i, t) ? (i[t] = o, !0) : s !== r && u(s, t) ? (s[t] = o, !0) : !u(e.props, t) && (("$" !== t[0] || !(t.slice(1) in e)) && (n[t] = o, !0))
    },
    has({
      _: {
        data: e,
        setupState: t,
        accessCache: o,
        ctx: s,
        appContext: i,
        props: n,
        type: a
      }
    }, l) {
      let c;
      return !!(o[l] || e !== r && "$" !== l[0] && u(e, l) || br(t, l) || u(n, l) || u(s, l) || u(mr, l) || u(i.config.globalProperties, l) || (c = a.__cssModules) && c[l])
    },
    defineProperty(e, t, o) {
      return null != o.get ? e._.accessCache[t] = 0 : u(o, "value") && this.set(e, t, o.value, null), Reflect.defineProperty(e, t, o)
    }
  };

function gr() {
  return _r()
    .attrs
}

function _r(e) {
  const t = $s();
  return t.setupContext || (t.setupContext = ti(t))
}

function vr(e) {
  return f(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e
}

function yr(e, t) {
  const o = vr(e);
  for (const r in t) {
    if (r.startsWith("__skip")) continue;
    let e = o[r];
    e ? f(e) || _(e) ? e = o[r] = {
      type: e,
      default: t[r]
    } : e.default = t[r] : null === e && (e = o[r] = {
      default: t[r]
    }), e && t[`__skip_${r}`] && (e.skipFactory = !0)
  }
  return o
}
let kr = !0;

function xr(e) {
  const t = Ar(e),
    o = e.proxy,
    r = e.ctx;
  kr = !1, t.beforeCreate && Er(t.beforeCreate, e, "bc");
  const {
    data: s,
    computed: n,
    methods: a,
    watch: l,
    provide: c,
    inject: d,
    created: p,
    beforeMount: u,
    mounted: m,
    beforeUpdate: b,
    updated: g,
    activated: v,
    deactivated: y,
    beforeDestroy: x,
    beforeUnmount: E,
    destroyed: w,
    unmounted: A,
    render: L,
    renderTracked: P,
    renderTriggered: T,
    errorCaptured: O,
    serverPrefetch: C,
    expose: R,
    inheritAttrs: I,
    components: S,
    directives: D,
    filters: j
  } = t;
  if (d && function(e, t) {
      f(e) && (e = Or(e));
      for (const o in e) {
        const r = e[o];
        let s;
        s = k(r) ? "default" in r ? po(r.from || o, r.default, !0) : po(r.from || o) : po(r), wt(s) ? Object.defineProperty(t, o, {
          enumerable: !0,
          configurable: !0,
          get: () => s.value,
          set: e => s.value = e
        }) : t[o] = s
      }
    }(d, r, null), a)
    for (const i in a) {
      const e = a[i];
      _(e) && (r[i] = e.bind(o))
    }
  if (s) {
    const t = s.call(o, o);
    k(t) && (e.data = ft(t))
  }
  if (kr = !0, n)
    for (const f in n) {
      const e = n[f],
        t = _(e) ? e.bind(o, o) : _(e.get) ? e.get.bind(o, o) : i,
        s = !_(e) && _(e.set) ? e.set.bind(o) : i,
        a = si({
          get: t,
          set: s
        });
      Object.defineProperty(r, f, {
        enumerable: !0,
        configurable: !0,
        get: () => a.value,
        set: e => a.value = e
      })
    }
  if (l)
    for (const i in l) wr(l[i], r, o, i);
  if (c) {
    const e = _(c) ? c.call(o) : c;
    Reflect.ownKeys(e)
      .forEach(t => {
        ! function(e, t) {
          if (Ws) {
            let o = Ws.provides;
            const r = Ws.parent && Ws.parent.provides;
            r === o && (o = Ws.provides = Object.create(r)), o[e] = t
          }
        }(t, e[t])
      })
  }

  function B(e, t) {
    f(t) ? t.forEach(t => e(t.bind(o))) : t && e(t.bind(o))
  }
  if (p && Er(p, e, "c"), B(Jo, u), B(Zo, m), B(Xo, b), B(er, g), B($o, v), B(Ho, y), B(nr, O), B(ir, P), B(sr, T), B(tr, E), B(or, A), B(rr, C), f(R))
    if (R.length) {
      const t = e.exposed || (e.exposed = {});
      R.forEach(e => {
        Object.defineProperty(t, e, {
          get: () => o[e],
          set: t => o[e] = t,
          enumerable: !0
        })
      })
    } else e.exposed || (e.exposed = {});
  L && e.render === i && (e.render = L), null != I && (e.inheritAttrs = I), S && (e.components = S), D && (e.directives = D), C && Fo(e)
}

function Er(e, t, o) {
  Mt(f(e) ? e.map(e => e.bind(t.proxy)) : e.bind(t.proxy), t, o)
}

function wr(e, t, o, r) {
  let s = r.includes(".") ? _o(o, r) : () => o[r];
  if (v(e)) {
    const o = t[e];
    _(o) && bo(s, o)
  } else if (_(e)) bo(s, e.bind(o));
  else if (k(e))
    if (f(e)) e.forEach(e => wr(e, t, o, r));
    else {
      const r = _(e.handler) ? e.handler.bind(o) : t[e.handler];
      _(r) && bo(s, r, e)
    }
}

function Ar(e) {
  const t = e.type,
    {
      mixins: o,
      extends: r
    } = t,
    {
      mixins: s,
      optionsCache: i,
      config: {
        optionMergeStrategies: n
      }
    } = e.appContext,
    a = i.get(t);
  let l;
  return a ? l = a : s.length || o || r ? (l = {}, s.length && s.forEach(e => Lr(l, e, n, !0)), Lr(l, t, n)) : l = t, k(t) && i.set(t, l), l
}

function Lr(e, t, o, r = !1) {
  const {
    mixins: s,
    extends: i
  } = t;
  i && Lr(e, i, o, !0), s && s.forEach(t => Lr(e, t, o, !0));
  for (const n in t)
    if (r && "expose" === n);
    else {
      const r = Pr[n] || o && o[n];
      e[n] = r ? r(e[n], t[n]) : t[n]
    } return e
}
const Pr = {
  data: Tr,
  props: Ir,
  emits: Ir,
  methods: Rr,
  computed: Rr,
  beforeCreate: Cr,
  created: Cr,
  beforeMount: Cr,
  mounted: Cr,
  beforeUpdate: Cr,
  updated: Cr,
  beforeDestroy: Cr,
  beforeUnmount: Cr,
  destroyed: Cr,
  unmounted: Cr,
  activated: Cr,
  deactivated: Cr,
  errorCaptured: Cr,
  serverPrefetch: Cr,
  components: Rr,
  directives: Rr,
  watch: function(e, t) {
    if (!e) return t;
    if (!t) return e;
    const o = c(Object.create(null), e);
    for (const r in t) o[r] = Cr(e[r], t[r]);
    return o
  },
  provide: Tr,
  inject: function(e, t) {
    return Rr(Or(e), Or(t))
  }
};

function Tr(e, t) {
  return t ? e ? function() {
    return c(_(e) ? e.call(this, this) : e, _(t) ? t.call(this, this) : t)
  } : t : e
}

function Or(e) {
  if (f(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++) t[e[o]] = e[o];
    return t
  }
  return e
}

function Cr(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}

function Rr(e, t) {
  return e ? c(Object.create(null), e, t) : t
}

function Ir(e, t) {
  return e ? f(e) && f(t) ? [...new Set([...e, ...t])] : c(Object.create(null), vr(e), vr(null != t ? t : {})) : t
}

function Sr() {
  return {
    app: null,
    config: {
      isNativeTag: n,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap,
    propsCache: new WeakMap,
    emitsCache: new WeakMap
  }
}
let Dr = 0;

function jr(e, t) {
  return function(t, o = null) {
    _(t) || (t = c({}, t)), null == o || k(o) || (o = null);
    const r = Sr(),
      s = new WeakSet,
      i = [];
    let n = !1;
    const a = r.app = {
      _uid: Dr++,
      _component: t,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: ni,
      get config() {
        return r.config
      },
      set config(e) {},
      use: (e, ...t) => (s.has(e) || (e && _(e.install) ? (s.add(e), e.install(a, ...t)) : _(e) && (s.add(e), e(a, ...t))), a),
      mixin: e => (r.mixins.includes(e) || r.mixins.push(e), a),
      component: (e, t) => t ? (r.components[e] = t, a) : r.components[e],
      directive: (e, t) => t ? (r.directives[e] = t, a) : r.directives[e],
      mount(s, i, l) {
        if (!n) {
          const i = a._ceVNode || Is(t, o);
          return i.appContext = r, !0 === l ? l = "svg" : !1 === l && (l = void 0), e(i, s, l), n = !0, a._container = s, s.__vue_app__ = a, oi(i.component)
        }
      },
      onUnmount(e) {
        i.push(e)
      },
      unmount() {
        n && (Mt(i, a._instance, 16), e(null, a._container), delete a._container.__vue_app__)
      },
      provide: (e, t) => (r.provides[e] = t, a),
      runWithContext(e) {
        const t = Br;
        Br = a;
        try {
          return e()
        } finally {
          Br = t
        }
      }
    };
    return a
  }
}
let Br = null;

function zr(e, t, ...o) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || r;
  let i = o;
  const n = t.startsWith("update:"),
    a = n && ((e, t) => "modelValue" === t || "model-value" === t ? e.modelModifiers : e[`${t}Modifiers`] || e[`${C(t)}Modifiers`] || e[`${I(t)}Modifiers`])(s, t.slice(7));
  let l;
  a && (a.trim && (i = o.map(e => v(e) ? e.trim() : e)), a.number && (i = o.map(F)));
  let c = s[l = D(t)] || s[l = D(C(t))];
  !c && n && (c = s[l = D(I(t))]), c && Mt(c, e, 6, i);
  const d = s[l + "Once"];
  if (d) {
    if (e.emitted) {
      if (e.emitted[l]) return
    } else e.emitted = {};
    e.emitted[l] = !0, Mt(d, e, 6, i)
  }
}
const Fr = new WeakMap;

function Vr(e, t, o = !1) {
  const r = o ? Fr : t.emitsCache,
    s = r.get(e);
  if (void 0 !== s) return s;
  const i = e.emits;
  let n = {},
    a = !1;
  if (!_(e)) {
    const r = e => {
      const o = Vr(e, t, !0);
      o && (a = !0, c(n, o))
    };
    !o && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r)
  }
  return i || a ? (f(i) ? i.forEach(e => n[e] = null) : c(n, i), k(e) && r.set(e, n), n) : (k(e) && r.set(e, null), null)
}

function Nr(e, t) {
  return !(!e || !a(t)) && (t = t.slice(2)
    .replace(/Once$/, ""), u(e, t[0].toLowerCase() + t.slice(1)) || u(e, I(t)) || u(e, t))
}

function Mr(e) {
  const {
    type: t,
    vnode: o,
    proxy: r,
    withProxy: s,
    propsOptions: [i],
    slots: n,
    attrs: a,
    emit: c,
    render: d,
    renderCache: p,
    props: u,
    data: f,
    setupState: m,
    ctx: b,
    inheritAttrs: g
  } = e, _ = no(e);
  let v, y;
  try {
    if (4 & o.shapeFlag) {
      const e = s || r,
        t = e;
      v = zs(d.call(t, e, p, u, m, f, b)), y = a
    } else {
      const e = t;
      0, v = zs(e.length > 1 ? e(u, {
        attrs: a,
        slots: n,
        emit: c
      }) : e(u, null)), y = t.props ? a : Ur(a)
    }
  } catch (x) {
    vs.length = 0, Ut(x, e, 1), v = Is(gs)
  }
  let k = v;
  if (y && !1 !== g) {
    const e = Object.keys(y),
      {
        shapeFlag: t
      } = k;
    e.length && 7 & t && (i && e.some(l) && (y = qr(y, i)), k = Ss(k, y, !1, !0))
  }
  return o.dirs && (k = Ss(k, null, !1, !0), k.dirs = k.dirs ? k.dirs.concat(o.dirs) : o.dirs), o.transition && jo(k, o.transition), v = k, no(_), v
}
const Ur = e => {
    let t;
    for (const o in e)("class" === o || "style" === o || a(o)) && ((t || (t = {}))[o] = e[o]);
    return t
  },
  qr = (e, t) => {
    const o = {};
    for (const r in e) l(r) && r.slice(9) in t || (o[r] = e[r]);
    return o
  };

function Wr(e, t, o) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e)
    .length) return !0;
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if ($r(t, e, i) && !Nr(o, i)) return !0
  }
  return !1
}

function $r(e, t, o) {
  const r = e[o],
    s = t[o];
  return "style" === o && k(r) && k(s) ? !Y(r, s) : r !== s
}
const Hr = {},
  Qr = () => Object.create(Hr),
  Gr = e => Object.getPrototypeOf(e) === Hr;

function Kr(e, t, o, s) {
  const [i, n] = e.propsOptions;
  let a, l = !1;
  if (t)
    for (let r in t) {
      if (P(r)) continue;
      const c = t[r];
      let d;
      i && u(i, d = C(r)) ? n && n.includes(d) ? (a || (a = {}))[d] = c : o[d] = c : Nr(e.emitsOptions, r) || r in s && c === s[r] || (s[r] = c, l = !0)
    }
  if (n) {
    const t = kt(o),
      s = a || r;
    for (let r = 0; r < n.length; r++) {
      const a = n[r];
      o[a] = Yr(i, t, a, s[a], e, !u(s, a))
    }
  }
  return l
}

function Yr(e, t, o, r, s, i) {
  const n = e[o];
  if (null != n) {
    const e = u(n, "default");
    if (e && void 0 === r) {
      const e = n.default;
      if (n.type !== Function && !n.skipFactory && _(e)) {
        const {
          propsDefaults: i
        } = s;
        if (o in i) r = i[o];
        else {
          const n = Gs(s);
          r = i[o] = e.call(null, t), n()
        }
      } else r = e;
      s.ce && s.ce._setProp(o, r)
    }
    n[0] && (i && !e ? r = !1 : !n[1] || "" !== r && r !== I(o) || (r = !0))
  }
  return r
}
const Jr = new WeakMap;

function Zr(e, t, o = !1) {
  const i = o ? Jr : t.propsCache,
    n = i.get(e);
  if (n) return n;
  const a = e.props,
    l = {},
    d = [];
  let p = !1;
  if (!_(e)) {
    const r = e => {
      p = !0;
      const [o, r] = Zr(e, t, !0);
      c(l, o), r && d.push(...r)
    };
    !o && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r)
  }
  if (!a && !p) return k(e) && i.set(e, s), s;
  if (f(a))
    for (let s = 0; s < a.length; s++) {
      const e = C(a[s]);
      Xr(e) && (l[e] = r)
    } else if (a)
      for (const r in a) {
        const e = C(r);
        if (Xr(e)) {
          const t = a[r],
            o = l[e] = f(t) || _(t) ? {
              type: t
            } : c({}, t),
            s = o.type;
          let i = !1,
            n = !0;
          if (f(s))
            for (let e = 0; e < s.length; ++e) {
              const t = s[e],
                o = _(t) && t.name;
              if ("Boolean" === o) {
                i = !0;
                break
              }
              "String" === o && (n = !1)
            } else i = _(s) && "Boolean" === s.name;
          o[0] = i, o[1] = n, (i || u(o, "default")) && d.push(e)
        }
      }
  const m = [l, d];
  return k(e) && i.set(e, m), m
}

function Xr(e) {
  return "$" !== e[0] && !P(e)
}
const es = e => "_" === e || "_ctx" === e || "$stable" === e,
  ts = e => f(e) ? e.map(zs) : [zs(e)],
  os = (e, t, o) => {
    if (t._n) return t;
    const r = ao((...e) => ts(t(...e)), o);
    return r._c = !1, r
  },
  rs = (e, t, o) => {
    const r = e._ctx;
    for (const s in e) {
      if (es(s)) continue;
      const o = e[s];
      if (_(o)) t[s] = os(0, o, r);
      else if (null != o) {
        const e = ts(o);
        t[s] = () => e
      }
    }
  },
  ss = (e, t) => {
    const o = ts(t);
    e.slots.default = () => o
  },
  is = (e, t, o) => {
    for (const r in t) !o && es(r) || (e[r] = t[r])
  },
  ns = function(e, t) {
    t && t.pendingBranch ? f(e) ? t.effects.push(...e) : t.effects.push(e) : Xt(e)
  };

function as(e) {
  return function(e) {
    M()
      .__VUE__ = !0;
    const {
      insert: t,
      remove: o,
      patchProp: n,
      createElement: a,
      createText: l,
      createComment: c,
      setText: d,
      setElementText: p,
      parentNode: f,
      nextSibling: m,
      setScopeId: b = i,
      insertStaticContent: g
    } = e, _ = (e, t, o, r = null, s = null, i = null, n = void 0, a = null, l = !!t.dynamicChildren) => {
      if (e === t) return;
      e && !Ts(e, t) && (r = X(e), G(e, s, i, !0), e = null), -2 === t.patchFlag && (l = !1, t.dynamicChildren = null);
      const {
        type: c,
        ref: d,
        shapeFlag: p
      } = t;
      switch (c) {
        case hs:
          v(e, t, o, r);
          break;
        case gs:
          y(e, t, o, r);
          break;
        case _s:
          null == e && k(t, o, r, n);
          break;
        case bs:
          j(e, t, o, r, s, i, n, a, l);
          break;
        default:
          1 & p ? A(e, t, o, r, s, i, n, a, l) : 6 & p ? F(e, t, o, r, s, i, n, a, l) : (64 & p || 128 & p) && c.process(e, t, o, r, s, i, n, a, l, oe)
      }
      null != d && s ? Mo(d, e && e.ref, i, t || e, !t) : null == d && e && null != e.ref && Mo(e.ref, null, i, e, !0)
    }, v = (e, o, r, s) => {
      if (null == e) t(o.el = l(o.children), r, s);
      else {
        const t = o.el = e.el;
        o.children !== e.children && d(t, o.children)
      }
    }, y = (e, o, r, s) => {
      null == e ? t(o.el = c(o.children || ""), r, s) : o.el = e.el
    }, k = (e, t, o, r) => {
      [e.el, e.anchor] = g(e.children, t, o, r, e.el, e.anchor)
    }, E = ({
      el: e,
      anchor: o
    }, r, s) => {
      let i;
      for (; e && e !== o;) i = m(e), t(e, r, s), e = i;
      t(o, r, s)
    }, w = ({
      el: e,
      anchor: t
    }) => {
      let r;
      for (; e && e !== t;) r = m(e), o(e), e = r;
      o(t)
    }, A = (e, t, o, r, s, i, n, a, l) => {
      if ("svg" === t.type ? n = "svg" : "math" === t.type && (n = "mathml"), null == e) L(t, o, r, s, i, n, a, l);
      else {
        const o = e.el && e.el._isVueCE ? e.el : null;
        try {
          o && o._beginPatch(), R(e, t, s, i, n, a, l)
        } finally {
          o && o._endPatch()
        }
      }
    }, L = (e, o, r, s, i, l, c, d) => {
      let u, f;
      const {
        props: m,
        shapeFlag: b,
        transition: g,
        dirs: _
      } = e;
      if (u = e.el = a(e.type, l, m && m.is, m), 8 & b ? p(u, e.children) : 16 & b && O(e.children, u, null, s, i, ls(e, l), c, d), _ && co(e, null, s, "created"), T(u, e, e.scopeId, c, s), m) {
        for (const e in m) "value" === e || P(e) || n(u, e, null, m[e], l, s);
        "value" in m && n(u, "value", null, m.value, l), (f = m.onVnodeBeforeMount) && Ms(f, s, e)
      }
      _ && co(e, null, s, "beforeMount");
      const v = function(e, t) {
        return (!e || e && !e.pendingBranch) && t && !t.persisted
      }(i, g);
      v && g.beforeEnter(u), t(u, o, r), ((f = m && m.onVnodeMounted) || v || _) && ns(() => {
        f && Ms(f, s, e), v && g.enter(u), _ && co(e, null, s, "mounted")
      }, i)
    }, T = (e, t, o, r, s) => {
      if (o && b(e, o), r)
        for (let i = 0; i < r.length; i++) b(e, r[i]);
      if (s) {
        let o = s.subTree;
        if (t === o || ms(o.type) && (o.ssContent === t || o.ssFallback === t)) {
          const t = s.vnode;
          T(e, t, t.scopeId, t.slotScopeIds, s.parent)
        }
      }
    }, O = (e, t, o, r, s, i, n, a, l = 0) => {
      for (let c = l; c < e.length; c++) {
        const l = e[c] = a ? Fs(e[c]) : zs(e[c]);
        _(null, l, t, o, r, s, i, n, a)
      }
    }, R = (e, t, o, s, i, a, l) => {
      const c = t.el = e.el;
      let {
        patchFlag: d,
        dynamicChildren: u,
        dirs: f
      } = t;
      d |= 16 & e.patchFlag;
      const m = e.props || r,
        b = t.props || r;
      let g;
      if (o && cs(o, !1), (g = b.onVnodeBeforeUpdate) && Ms(g, o, t, e), f && co(t, e, o, "beforeUpdate"), o && cs(o, !0), (m.innerHTML && null == b.innerHTML || m.textContent && null == b.textContent) && p(c, ""), u ? S(e.dynamicChildren, u, c, o, s, ls(t, i), a) : l || W(e, t, c, null, o, s, ls(t, i), a, !1), d > 0) {
        if (16 & d) D(c, m, b, o, i);
        else if (2 & d && m.class !== b.class && n(c, "class", null, b.class, i), 4 & d && n(c, "style", m.style, b.style, i), 8 & d) {
          const e = t.dynamicProps;
          for (let t = 0; t < e.length; t++) {
            const r = e[t],
              s = m[r],
              a = b[r];
            a === s && "value" !== r || n(c, r, s, a, i, o)
          }
        }
        1 & d && e.children !== t.children && p(c, t.children)
      } else l || null != u || D(c, m, b, o, i);
      ((g = b.onVnodeUpdated) || f) && ns(() => {
        g && Ms(g, o, t, e), f && co(t, e, o, "updated")
      }, s)
    }, S = (e, t, o, r, s, i, n) => {
      for (let a = 0; a < t.length; a++) {
        const l = e[a],
          c = t[a],
          d = l.el && (l.type === bs || !Ts(l, c) || 198 & l.shapeFlag) ? f(l.el) : o;
        _(l, c, d, null, r, s, i, n, !0)
      }
    }, D = (e, t, o, s, i) => {
      if (t !== o) {
        if (t !== r)
          for (const r in t) P(r) || r in o || n(e, r, t[r], null, i, s);
        for (const r in o) {
          if (P(r)) continue;
          const a = o[r],
            l = t[r];
          a !== l && "value" !== r && n(e, r, l, a, i, s)
        }
        "value" in o && n(e, "value", t.value, o.value, i)
      }
    }, j = (e, o, r, s, i, n, a, c, d) => {
      const p = o.el = e ? e.el : l(""),
        u = o.anchor = e ? e.anchor : l("");
      let {
        patchFlag: f,
        dynamicChildren: m,
        slotScopeIds: b
      } = o;
      b && (c = c ? c.concat(b) : b), null == e ? (t(p, r, s), t(u, r, s), O(o.children || [], r, u, i, n, a, c, d)) : f > 0 && 64 & f && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (S(e.dynamicChildren, m, r, i, n, a, c), (null != o.key || i && o === i.subTree) && ds(e, o, !0)) : W(e, o, r, u, i, n, a, c, d)
    }, F = (e, t, o, r, s, i, n, a, l) => {
      t.slotScopeIds = a, null == e ? 512 & t.shapeFlag ? s.ctx.activate(t, o, r, n, l) : V(t, o, r, s, i, n, l) : N(e, t, l)
    }, V = (e, t, o, s, i, n, a) => {
      const l = e.component = function(e, t, o) {
        const s = e.type,
          i = (t ? t.appContext : e.appContext) || Us,
          n = {
            uid: qs++,
            vnode: e,
            type: s,
            parent: t,
            appContext: i,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            job: null,
            scope: new se(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(i.provides),
            ids: t ? t.ids : ["", 0, 0],
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: Zr(s, i),
            emitsOptions: Vr(s, i),
            emit: null,
            emitted: null,
            propsDefaults: r,
            inheritAttrs: s.inheritAttrs,
            ctx: r,
            data: r,
            props: r,
            attrs: r,
            slots: r,
            refs: r,
            setupState: r,
            setupContext: null,
            suspense: o,
            suspenseId: o ? o.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null
          };
        n.ctx = {
          _: n
        }, n.root = t ? t.root : n, n.emit = zr.bind(null, n), e.ce && e.ce(n);
        return n
      }(e, s, i);
      if (Wo(e) && (l.ctx.renderer = oe), function(e, t = !1, o = !1) {
          t && Qs(t);
          const {
            props: r,
            children: s
          } = e.vnode, i = Ys(e);
          (function(e, t, o, r = !1) {
            const s = {},
              i = Qr();
            e.propsDefaults = Object.create(null), Kr(e, t, s, i);
            for (const n in e.propsOptions[0]) n in s || (s[n] = void 0);
            o ? e.props = r ? s : mt(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i
          })(e, r, i, t), ((e, t, o) => {
            const r = e.slots = Qr();
            if (32 & e.vnode.shapeFlag) {
              const e = t._;
              e ? (is(r, t, o), o && z(r, "_", e, !0)) : rs(t, r)
            } else t && ss(e, t)
          })(e, s, o || t);
          const n = i ? function(e, t) {
            const o = e.type;
            e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, hr);
            const {
              setup: r
            } = o;
            if (r) {
              xe();
              const o = e.setupContext = r.length > 1 ? ti(e) : null,
                s = Gs(e),
                i = Nt(r, e, 0, [e.props, o]),
                n = x(i);
              if (Ee(), s(), !n && !e.sp || qo(e) || Fo(e), n) {
                if (i.then(Ks, Ks), t) return i.then(t => {
                    Zs(e, t)
                  })
                  .catch(t => {
                    Ut(t, e, 0)
                  });
                e.asyncDep = i
              } else Zs(e, i)
            } else Xs(e)
          }(e, t) : void 0;
          t && Qs(!1)
        }(l, !1, a), l.asyncDep) {
        if (i && i.registerDep(l, U, a), !e.el) {
          const r = l.subTree = Is(gs);
          y(null, r, t, o), e.placeholder = r.el
        }
      } else U(l, e, t, o, i, n, a)
    }, N = (e, t, o) => {
      const r = t.component = e.component;
      if (function(e, t, o) {
          const {
            props: r,
            children: s,
            component: i
          } = e, {
            props: n,
            children: a,
            patchFlag: l
          } = t, c = i.emitsOptions;
          if (t.dirs || t.transition) return !0;
          if (!(o && l >= 0)) return !(!s && !a || a && a.$stable) || r !== n && (r ? !n || Wr(r, n, c) : !!n);
          if (1024 & l) return !0;
          if (16 & l) return r ? Wr(r, n, c) : !!n;
          if (8 & l) {
            const e = t.dynamicProps;
            for (let t = 0; t < e.length; t++) {
              const o = e[t];
              if ($r(n, r, o) && !Nr(c, o)) return !0
            }
          }
          return !1
        }(e, t, o)) {
        if (r.asyncDep && !r.asyncResolved) return void q(r, t, o);
        r.next = t, r.update()
      } else t.el = e.el, r.vnode = t
    }, U = (e, t, o, r, s, i, n) => {
      const a = () => {
        if (e.isMounted) {
          let {
            next: t,
            bu: o,
            u: r,
            parent: a,
            vnode: l
          } = e;
          {
            const o = ps(e);
            if (o) return t && (t.el = l.el, q(e, t, n)), void o.asyncDep.then(() => {
              ns(() => {
                e.isUnmounted || c()
              }, s)
            })
          }
          let d, p = t;
          cs(e, !1), t ? (t.el = l.el, q(e, t, n)) : t = l, o && B(o), (d = t.props && t.props.onVnodeBeforeUpdate) && Ms(d, a, t, l), cs(e, !0);
          const u = Mr(e),
            m = e.subTree;
          e.subTree = u, _(m, u, f(m.el), X(m), e, s, i), t.el = u.el, null === p && function({
            vnode: e,
            parent: t
          }, o) {
            for (; t;) {
              const r = t.subTree;
              if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r !== e) break;
              (e = t.vnode)
              .el = o, t = t.parent
            }
          }(e, u.el), r && ns(r, s), (d = t.props && t.props.onVnodeUpdated) && ns(() => Ms(d, a, t, l), s)
        } else {
          let n;
          const {
            el: a,
            props: l
          } = t, {
            bm: c,
            m: d,
            parent: p,
            root: u,
            type: f
          } = e, m = qo(t);
          cs(e, !1), c && B(c), !m && (n = l && l.onVnodeBeforeMount) && Ms(n, p, t), cs(e, !0);
          {
            u.ce && u.ce._hasShadowRoot() && u.ce._injectChildStyle(f);
            const n = e.subTree = Mr(e);
            _(null, n, o, r, e, s, i), t.el = n.el
          }
          if (d && ns(d, s), !m && (n = l && l.onVnodeMounted)) {
            const e = t;
            ns(() => Ms(n, p, e), s)
          }(256 & t.shapeFlag || p && qo(p.vnode) && 256 & p.vnode.shapeFlag) && e.a && ns(e.a, s), e.isMounted = !0, t = o = r = null
        }
      };
      e.scope.on();
      const l = e.effect = new ae(a);
      e.scope.off();
      const c = e.update = l.run.bind(l),
        d = e.job = l.runIfDirty.bind(l);
      d.i = e, d.id = e.uid, l.scheduler = () => Jt(d), cs(e, !0), c()
    }, q = (e, t, o) => {
      t.component = e;
      const s = e.vnode.props;
      e.vnode = t, e.next = null,
        function(e, t, o, r) {
          const {
            props: s,
            attrs: i,
            vnode: {
              patchFlag: n
            }
          } = e, a = kt(s), [l] = e.propsOptions;
          let c = !1;
          if (!(r || n > 0) || 16 & n) {
            let r;
            Kr(e, t, s, i) && (c = !0);
            for (const i in a) t && (u(t, i) || (r = I(i)) !== i && u(t, r)) || (l ? !o || void 0 === o[i] && void 0 === o[r] || (s[i] = Yr(l, a, i, void 0, e, !0)) : delete s[i]);
            if (i !== a)
              for (const e in i) t && u(t, e) || (delete i[e], c = !0)
          } else if (8 & n) {
            const o = e.vnode.dynamicProps;
            for (let r = 0; r < o.length; r++) {
              let n = o[r];
              if (Nr(e.emitsOptions, n)) continue;
              const d = t[n];
              if (l)
                if (u(i, n)) d !== i[n] && (i[n] = d, c = !0);
                else {
                  const t = C(n);
                  s[t] = Yr(l, a, t, d, e, !1)
                }
              else d !== i[n] && (i[n] = d, c = !0)
            }
          }
          c && De(e.attrs, "set", "")
        }(e, t.props, s, o), ((e, t, o) => {
          const {
            vnode: s,
            slots: i
          } = e;
          let n = !0,
            a = r;
          if (32 & s.shapeFlag) {
            const e = t._;
            e ? o && 1 === e ? n = !1 : is(i, t, o) : (n = !t.$stable, rs(t, i)), a = t
          } else t && (ss(e, t), a = {
            default: 1
          });
          if (n)
            for (const r in i) es(r) || null != a[r] || delete i[r]
        })(e, t.children, o), xe(), eo(e), Ee()
    }, W = (e, t, o, r, s, i, n, a, l = !1) => {
      const c = e && e.children,
        d = e ? e.shapeFlag : 0,
        u = t.children,
        {
          patchFlag: f,
          shapeFlag: m
        } = t;
      if (f > 0) {
        if (128 & f) return void H(c, u, o, r, s, i, n, a, l);
        if (256 & f) return void $(c, u, o, r, s, i, n, a, l)
      }
      8 & m ? (16 & d && Z(c, s, i), u !== c && p(o, u)) : 16 & d ? 16 & m ? H(c, u, o, r, s, i, n, a, l) : Z(c, s, i, !0) : (8 & d && p(o, ""), 16 & m && O(u, o, r, s, i, n, a, l))
    }, $ = (e, t, o, r, i, n, a, l, c) => {
      t = t || s;
      const d = (e = e || s)
        .length,
        p = t.length,
        u = Math.min(d, p);
      let f;
      for (f = 0; f < u; f++) {
        const r = t[f] = c ? Fs(t[f]) : zs(t[f]);
        _(e[f], r, o, null, i, n, a, l, c)
      }
      d > p ? Z(e, i, n, !0, !1, u) : O(t, o, r, i, n, a, l, c, u)
    }, H = (e, t, o, r, i, n, a, l, c) => {
      let d = 0;
      const p = t.length;
      let u = e.length - 1,
        f = p - 1;
      for (; d <= u && d <= f;) {
        const r = e[d],
          s = t[d] = c ? Fs(t[d]) : zs(t[d]);
        if (!Ts(r, s)) break;
        _(r, s, o, null, i, n, a, l, c), d++
      }
      for (; d <= u && d <= f;) {
        const r = e[u],
          s = t[f] = c ? Fs(t[f]) : zs(t[f]);
        if (!Ts(r, s)) break;
        _(r, s, o, null, i, n, a, l, c), u--, f--
      }
      if (d > u) {
        if (d <= f) {
          const e = f + 1,
            s = e < p ? t[e].el : r;
          for (; d <= f;) _(null, t[d] = c ? Fs(t[d]) : zs(t[d]), o, s, i, n, a, l, c), d++
        }
      } else if (d > f)
        for (; d <= u;) G(e[d], i, n, !0), d++;
      else {
        const m = d,
          b = d,
          g = new Map;
        for (d = b; d <= f; d++) {
          const e = t[d] = c ? Fs(t[d]) : zs(t[d]);
          null != e.key && g.set(e.key, d)
        }
        let v, y = 0;
        const k = f - b + 1;
        let x = !1,
          E = 0;
        const w = new Array(k);
        for (d = 0; d < k; d++) w[d] = 0;
        for (d = m; d <= u; d++) {
          const r = e[d];
          if (y >= k) {
            G(r, i, n, !0);
            continue
          }
          let s;
          if (null != r.key) s = g.get(r.key);
          else
            for (v = b; v <= f; v++)
              if (0 === w[v - b] && Ts(r, t[v])) {
                s = v;
                break
              } void 0 === s ? G(r, i, n, !0) : (w[s - b] = d + 1, s >= E ? E = s : x = !0, _(r, t[s], o, null, i, n, a, l, c), y++)
        }
        const A = x ? function(e) {
          const t = e.slice(),
            o = [0];
          let r, s, i, n, a;
          const l = e.length;
          for (r = 0; r < l; r++) {
            const l = e[r];
            if (0 !== l) {
              if (s = o[o.length - 1], e[s] < l) {
                t[r] = s, o.push(r);
                continue
              }
              for (i = 0, n = o.length - 1; i < n;) a = i + n >> 1, e[o[a]] < l ? i = a + 1 : n = a;
              l < e[o[i]] && (i > 0 && (t[r] = o[i - 1]), o[i] = r)
            }
          }
          i = o.length, n = o[i - 1];
          for (; i-- > 0;) o[i] = n, n = t[n];
          return o
        }(w) : s;
        for (v = A.length - 1, d = k - 1; d >= 0; d--) {
          const e = b + d,
            s = t[e],
            u = t[e + 1],
            f = e + 1 < p ? u.el || fs(u) : r;
          0 === w[d] ? _(null, s, o, f, i, n, a, l, c) : x && (v < 0 || d !== A[v] ? Q(s, o, f, 2) : v--)
        }
      }
    }, Q = (e, r, s, i, n = null) => {
      const {
        el: a,
        type: l,
        transition: c,
        children: d,
        shapeFlag: p
      } = e;
      if (6 & p) return void Q(e.component.subTree, r, s, i);
      if (128 & p) return void e.suspense.move(r, s, i);
      if (64 & p) return void l.move(e, r, s, oe);
      if (l === bs) {
        t(a, r, s);
        for (let e = 0; e < d.length; e++) Q(d[e], r, s, i);
        return void t(e.anchor, r, s)
      }
      if (l === _s) return void E(e, r, s);
      if (2 !== i && 1 & p && c)
        if (0 === i) c.beforeEnter(a), t(a, r, s), ns(() => c.enter(a), n);
        else {
          const {
            leave: i,
            delayLeave: n,
            afterLeave: l
          } = c, d = () => {
            e.ctx.isUnmounted ? o(a) : t(a, r, s)
          }, p = () => {
            a._isLeaving && a[Co](!0), i(a, () => {
              d(), l && l()
            })
          };
          n ? n(a, d, p) : p()
        }
      else t(a, r, s)
    }, G = (e, t, o, r = !1, s = !1) => {
      const {
        type: i,
        props: n,
        ref: a,
        children: l,
        dynamicChildren: c,
        shapeFlag: d,
        patchFlag: p,
        dirs: u,
        cacheIndex: f
      } = e;
      if (-2 === p && (s = !1), null != a && (xe(), Mo(a, null, o, e, !0), Ee()), null != f && (t.renderCache[f] = void 0), 256 & d) return void t.ctx.deactivate(e);
      const m = 1 & d && u,
        b = !qo(e);
      let g;
      if (b && (g = n && n.onVnodeBeforeUnmount) && Ms(g, t, e), 6 & d) J(e.component, o, r);
      else {
        if (128 & d) return void e.suspense.unmount(o, r);
        m && co(e, null, t, "beforeUnmount"), 64 & d ? e.type.remove(e, t, o, oe, r) : c && !c.hasOnce && (i !== bs || p > 0 && 64 & p) ? Z(c, t, o, !1, !0) : (i === bs && 384 & p || !s && 16 & d) && Z(l, t, o), r && K(e)
      }(b && (g = n && n.onVnodeUnmounted) || m) && ns(() => {
        g && Ms(g, t, e), m && co(e, null, t, "unmounted")
      }, o)
    }, K = e => {
      const {
        type: t,
        el: r,
        anchor: s,
        transition: i
      } = e;
      if (t === bs) return void Y(r, s);
      if (t === _s) return void w(e);
      const n = () => {
        o(r), i && !i.persisted && i.afterLeave && i.afterLeave()
      };
      if (1 & e.shapeFlag && i && !i.persisted) {
        const {
          leave: t,
          delayLeave: o
        } = i, s = () => t(r, n);
        o ? o(e.el, n, s) : s()
      } else n()
    }, Y = (e, t) => {
      let r;
      for (; e !== t;) r = m(e), o(e), e = r;
      o(t)
    }, J = (e, t, o) => {
      const {
        bum: r,
        scope: s,
        job: i,
        subTree: n,
        um: a,
        m: l,
        a: c
      } = e;
      us(l), us(c), r && B(r), s.stop(), i && (i.flags |= 8, G(n, e, t, o)), a && ns(a, t), ns(() => {
        e.isUnmounted = !0
      }, t)
    }, Z = (e, t, o, r = !1, s = !1, i = 0) => {
      for (let n = i; n < e.length; n++) G(e[n], t, o, r, s)
    }, X = e => {
      if (6 & e.shapeFlag) return X(e.component.subTree);
      if (128 & e.shapeFlag) return e.suspense.next();
      const t = m(e.anchor || e.el),
        o = t && t[vo];
      return o ? m(o) : t
    };
    let ee = !1;
    const te = (e, t, o) => {
        let r;
        null == e ? t._vnode && (G(t._vnode, null, null, !0), r = t._vnode.component) : _(t._vnode || null, e, t, null, null, null, o), t._vnode = e, ee || (ee = !0, eo(r), to(), ee = !1)
      },
      oe = {
        p: _,
        um: G,
        m: Q,
        r: K,
        mt: V,
        mc: O,
        pc: W,
        pbc: S,
        n: X,
        o: e
      };
    let re;
    return {
      render: te,
      hydrate: re,
      createApp: jr(te)
    }
  }(e)
}

function ls({
  type: e,
  props: t
}, o) {
  return "svg" === o && "foreignObject" === e || "mathml" === o && "annotation-xml" === e && t && t.encoding && t.encoding.includes("html") ? void 0 : o
}

function cs({
  effect: e,
  job: t
}, o) {
  o ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5)
}

function ds(e, t, o = !1) {
  const r = e.children,
    s = t.children;
  if (f(r) && f(s))
    for (let i = 0; i < r.length; i++) {
      const e = r[i];
      let t = s[i];
      1 & t.shapeFlag && !t.dynamicChildren && ((t.patchFlag <= 0 || 32 === t.patchFlag) && (t = s[i] = Fs(s[i]), t.el = e.el), o || -2 === t.patchFlag || ds(e, t)), t.type === hs && (-1 === t.patchFlag && (t = s[i] = Fs(t)), t.el = e.el), t.type !== gs || t.el || (t.el = e.el)
    }
}

function ps(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : ps(t)
}

function us(e) {
  if (e)
    for (let t = 0; t < e.length; t++) e[t].flags |= 8
}

function fs(e) {
  if (e.placeholder) return e.placeholder;
  const t = e.component;
  return t ? fs(t.subTree) : null
}
const ms = e => e.__isSuspense;
const bs = Symbol.for("v-fgt"),
  hs = Symbol.for("v-txt"),
  gs = Symbol.for("v-cmt"),
  _s = Symbol.for("v-stc"),
  vs = [];
let ys = null;

function ks(e = !1) {
  vs.push(ys = e ? null : [])
}
let xs = 1;

function Es(e, t = !1) {
  xs += e, e < 0 && ys && t && (ys.hasOnce = !0)
}

function ws(e) {
  return e.dynamicChildren = xs > 0 ? ys || s : null, vs.pop(), ys = vs[vs.length - 1] || null, xs > 0 && ys && ys.push(e), e
}

function As(e, t, o, r, s, i) {
  return ws(Rs(e, t, o, r, s, i, !0))
}

function Ls(e, t, o, r, s) {
  return ws(Is(e, t, o, r, s, !0))
}

function Ps(e) {
  return !!e && !0 === e.__v_isVNode
}

function Ts(e, t) {
  return e.type === t.type && e.key === t.key
}
const Os = ({
    key: e
  }) => null != e ? e : null,
  Cs = ({
    ref: e,
    ref_key: t,
    ref_for: o
  }) => ("number" == typeof e && (e = "" + e), null != e ? v(e) || wt(e) || _(e) ? {
    i: so,
    r: e,
    k: t,
    f: !!o
  } : e : null);

function Rs(e, t = null, o = null, r = 0, s = null, i = (e === bs ? 0 : 1), n = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Os(t),
    ref: t && Cs(t),
    scopeId: io,
    slotScopeIds: null,
    children: o,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: so
  };
  return a ? (Vs(l, o), 128 & i && e.normalize(l)) : o && (l.shapeFlag |= v(o) ? 8 : 16), xs > 0 && !n && ys && (l.patchFlag > 0 || 6 & i) && 32 !== l.patchFlag && ys.push(l), l
}
const Is = function(e, t = null, o = null, r = 0, s = null, i = !1) {
  e && e !== ar || (e = gs);
  if (Ps(e)) {
    const r = Ss(e, t, !0);
    return o && Vs(r, o), xs > 0 && !i && ys && (6 & r.shapeFlag ? ys[ys.indexOf(e)] = r : ys.push(r)), r.patchFlag = -2, r
  }
  n = e, _(n) && "__vccOpts" in n && (e = e.__vccOpts);
  var n;
  if (t) {
    t = function(e) {
      return e ? yt(e) || Gr(e) ? c({}, e) : e : null
    }(t);
    let {
      class: e,
      style: o
    } = t;
    e && !v(e) && (t.class = Q(e)), k(o) && (yt(o) && !f(o) && (o = c({}, o)), t.style = U(o))
  }
  const a = v(e) ? 1 : ms(e) ? 128 : (e => e.__isTeleport)(e) ? 64 : k(e) ? 4 : _(e) ? 2 : 0;
  return Rs(e, t, o, r, s, a, i, !0)
};

function Ss(e, t, o = !1, r = !1) {
  const {
    props: s,
    ref: i,
    patchFlag: n,
    children: a,
    transition: l
  } = e, c = t ? Ns(s || {}, t) : s, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Os(c),
    ref: t && t.ref ? o && i ? f(i) ? i.concat(Cs(t)) : [i, Cs(t)] : Cs(t) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== bs ? -1 === n ? 16 : 16 | n : n,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ss(e.ssContent),
    ssFallback: e.ssFallback && Ss(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && r && jo(d, l.clone(d)), d
}

function Ds(e = " ", t = 0) {
  return Is(hs, null, e, t)
}

function js(e, t) {
  const o = Is(_s, null, e);
  return o.staticCount = t, o
}

function Bs(e = "", t = !1) {
  return t ? (ks(), Ls(gs, null, e)) : Is(gs, null, e)
}

function zs(e) {
  return null == e || "boolean" == typeof e ? Is(gs) : f(e) ? Is(bs, null, e.slice()) : Ps(e) ? Fs(e) : Is(hs, null, String(e))
}

function Fs(e) {
  return null === e.el && -1 !== e.patchFlag || e.memo ? e : Ss(e)
}

function Vs(e, t) {
  let o = 0;
  const {
    shapeFlag: r
  } = e;
  if (null == t) t = null;
  else if (f(t)) o = 16;
  else if ("object" == typeof t) {
    if (65 & r) {
      const o = t.default;
      return void(o && (o._c && (o._d = !1), Vs(e, o()), o._c && (o._d = !0)))
    } {
      o = 32;
      const r = t._;
      r || Gr(t) ? 3 === r && so && (1 === so.slots._ ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024)) : t._ctx = so
    }
  } else _(t) ? (t = {
    default: t,
    _ctx: so
  }, o = 32) : (t = String(t), 64 & r ? (o = 16, t = [Ds(t)]) : o = 8);
  e.children = t, e.shapeFlag |= o
}

function Ns(...e) {
  const t = {};
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    for (const e in r)
      if ("class" === e) t.class !== r.class && (t.class = Q([t.class, r.class]));
      else if ("style" === e) t.style = U([t.style, r.style]);
    else if (a(e)) {
      const o = t[e],
        s = r[e];
      !s || o === s || f(o) && o.includes(s) || (t[e] = o ? [].concat(o, s) : s)
    } else "" !== e && (t[e] = r[e])
  }
  return t
}

function Ms(e, t, o, r = null) {
  Mt(e, t, 7, [o, r])
}
const Us = Sr();
let qs = 0;
let Ws = null;
const $s = () => Ws || so;
let Hs, Qs;
{
  const e = M(),
    t = (t, o) => {
      let r;
      return (r = e[t]) || (r = e[t] = []), r.push(o), e => {
        r.length > 1 ? r.forEach(t => t(e)) : r[0](e)
      }
    };
  Hs = t("__VUE_INSTANCE_SETTERS__", e => Ws = e), Qs = t("__VUE_SSR_SETTERS__", e => Js = e)
}
const Gs = e => {
    const t = Ws;
    return Hs(e), e.scope.on(), () => {
      e.scope.off(), Hs(t)
    }
  },
  Ks = () => {
    Ws && Ws.scope.off(), Hs(null)
  };

function Ys(e) {
  return 4 & e.vnode.shapeFlag
}
let Js = !1;

function Zs(e, t, o) {
  _(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : k(t) && (e.setupState = It(t)), Xs(e)
}

function Xs(e, t, o) {
  const r = e.type;
  e.render || (e.render = r.render || i);
  {
    const t = Gs(e);
    xe();
    try {
      xr(e)
    } finally {
      Ee(), t()
    }
  }
}
const ei = {
  get: (e, t) => (Se(e, 0, ""), e[t])
};

function ti(e) {
  const t = t => {
    e.exposed = t || {}
  };
  return {
    attrs: new Proxy(e.attrs, ei),
    slots: e.slots,
    emit: e.emit,
    expose: t
  }
}

function oi(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(It((t = e.exposed, !u(t, "__v_skip") && Object.isExtensible(t) && z(t, "__v_skip", !0), t)), {
    get: (t, o) => o in t ? t[o] : o in mr ? mr[o](e) : void 0,
    has: (e, t) => t in e || t in mr
  })) : e.proxy;
  var t
}

function ri(e, t = !0) {
  return _(e) ? e.displayName || e.name : e.name || t && e.__name
}
const si = (e, t) => Dt(e, 0, Js);

function ii(e, t, o) {
  try {
    Es(-1);
    const r = arguments.length;
    return 2 === r ? k(t) && !f(t) ? Ps(t) ? Is(e, null, [t]) : Is(e, t) : Is(e, null, t) : (r > 3 ? o = Array.prototype.slice.call(arguments, 2) : 3 === r && Ps(o) && (o = [o]), Is(e, t, o))
  } finally {
    Es(1)
  }
}
const ni = "3.5.28";
let ai;
const li = "undefined" != typeof window && window.trustedTypes;
if (li) try {
  ai = li.createPolicy("vue", {
    createHTML: e => e
  })
} catch (q_) {}
const ci = ai ? e => ai.createHTML(e) : e => e,
  di = "undefined" != typeof document ? document : null,
  pi = di && di.createElement("template"),
  ui = {
    insert: (e, t, o) => {
      t.insertBefore(e, o || null)
    },
    remove: e => {
      const t = e.parentNode;
      t && t.removeChild(e)
    },
    createElement: (e, t, o, r) => {
      const s = "svg" === t ? di.createElementNS("http://www.w3.org/2000/svg", e) : "mathml" === t ? di.createElementNS("http://www.w3.org/1998/Math/MathML", e) : o ? di.createElement(e, {
        is: o
      }) : di.createElement(e);
      return "select" === e && r && null != r.multiple && s.setAttribute("multiple", r.multiple), s
    },
    createText: e => di.createTextNode(e),
    createComment: e => di.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => di.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "")
    },
    insertStaticContent(e, t, o, r, s, i) {
      const n = o ? o.previousSibling : t.lastChild;
      if (s && (s === i || s.nextSibling))
        for (; t.insertBefore(s.cloneNode(!0), o), s !== i && (s = s.nextSibling););
      else {
        pi.innerHTML = ci("svg" === r ? `<svg>${e}</svg>` : "mathml" === r ? `<math>${e}</math>` : e);
        const s = pi.content;
        if ("svg" === r || "mathml" === r) {
          const e = s.firstChild;
          for (; e.firstChild;) s.appendChild(e.firstChild);
          s.removeChild(e)
        }
        t.insertBefore(s, o)
      }
      return [n ? n.nextSibling : t.firstChild, o ? o.previousSibling : t.lastChild]
    }
  },
  fi = "transition",
  mi = "animation",
  bi = Symbol("_vtc"),
  hi = {
    name: String,
    type: String,
    css: {
      type: Boolean,
      default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
  },
  gi = c({}, So, hi),
  _i = (e, t = []) => {
    f(e) ? e.forEach(e => e(...t)) : e && e(...t)
  },
  vi = e => !!e && (f(e) ? e.some(e => e.length > 1) : e.length > 1);

function yi(e) {
  const t = {};
  for (const c in e) c in hi || (t[c] = e[c]);
  if (!1 === e.css) return t;
  const {
    name: o = "v",
    type: r,
    duration: s,
    enterFromClass: i = `${o}-enter-from`,
    enterActiveClass: n = `${o}-enter-active`,
    enterToClass: a = `${o}-enter-to`,
    appearFromClass: l = i,
    appearActiveClass: d = n,
    appearToClass: p = a,
    leaveFromClass: u = `${o}-leave-from`,
    leaveActiveClass: f = `${o}-leave-active`,
    leaveToClass: m = `${o}-leave-to`
  } = e, b = function(e) {
    if (null == e) return null;
    if (k(e)) return [ki(e.enter), ki(e.leave)];
    {
      const t = ki(e);
      return [t, t]
    }
  }(s), g = b && b[0], _ = b && b[1], {
    onBeforeEnter: v,
    onEnter: y,
    onEnterCancelled: x,
    onLeave: E,
    onLeaveCancelled: w,
    onBeforeAppear: A = v,
    onAppear: L = y,
    onAppearCancelled: P = x
  } = t, T = (e, t, o, r) => {
    e._enterCancelled = r, Ei(e, t ? p : a), Ei(e, t ? d : n), o && o()
  }, O = (e, t) => {
    e._isLeaving = !1, Ei(e, u), Ei(e, m), Ei(e, f), t && t()
  }, C = e => (t, o) => {
    const s = e ? L : y,
      n = () => T(t, e, o);
    _i(s, [t, n]), wi(() => {
      Ei(t, e ? l : i), xi(t, e ? p : a), vi(s) || Li(t, r, g, n)
    })
  };
  return c(t, {
    onBeforeEnter(e) {
      _i(v, [e]), xi(e, i), xi(e, n)
    },
    onBeforeAppear(e) {
      _i(A, [e]), xi(e, l), xi(e, d)
    },
    onEnter: C(!1),
    onAppear: C(!0),
    onLeave(e, t) {
      e._isLeaving = !0;
      const o = () => O(e, t);
      xi(e, u), e._enterCancelled ? (xi(e, f), Ci(e)) : (Ci(e), xi(e, f)), wi(() => {
        e._isLeaving && (Ei(e, u), xi(e, m), vi(E) || Li(e, r, _, o))
      }), _i(E, [e, o])
    },
    onEnterCancelled(e) {
      T(e, !1, void 0, !0), _i(x, [e])
    },
    onAppearCancelled(e) {
      T(e, !0, void 0, !0), _i(P, [e])
    },
    onLeaveCancelled(e) {
      O(e), _i(w, [e])
    }
  })
}

function ki(e) {
  return V(e)
}

function xi(e, t) {
  t.split(/\s+/)
    .forEach(t => t && e.classList.add(t)), (e[bi] || (e[bi] = new Set))
    .add(t)
}

function Ei(e, t) {
  t.split(/\s+/)
    .forEach(t => t && e.classList.remove(t));
  const o = e[bi];
  o && (o.delete(t), o.size || (e[bi] = void 0))
}

function wi(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let Ai = 0;

function Li(e, t, o, r) {
  const s = e._endId = ++Ai,
    i = () => {
      s === e._endId && r()
    };
  if (null != o) return setTimeout(i, o);
  const {
    type: n,
    timeout: a,
    propCount: l
  } = Pi(e, t);
  if (!n) return r();
  const c = n + "end";
  let d = 0;
  const p = () => {
      e.removeEventListener(c, u), i()
    },
    u = t => {
      t.target === e && ++d >= l && p()
    };
  setTimeout(() => {
    d < l && p()
  }, a + 1), e.addEventListener(c, u)
}

function Pi(e, t) {
  const o = window.getComputedStyle(e),
    r = e => (o[e] || "")
    .split(", "),
    s = r(`${fi}Delay`),
    i = r(`${fi}Duration`),
    n = Ti(s, i),
    a = r(`${mi}Delay`),
    l = r(`${mi}Duration`),
    c = Ti(a, l);
  let d = null,
    p = 0,
    u = 0;
  t === fi ? n > 0 && (d = fi, p = n, u = i.length) : t === mi ? c > 0 && (d = mi, p = c, u = l.length) : (p = Math.max(n, c), d = p > 0 ? n > c ? fi : mi : null, u = d ? d === fi ? i.length : l.length : 0);
  return {
    type: d,
    timeout: p,
    propCount: u,
    hasTransform: d === fi && /\b(?:transform|all)(?:,|$)/.test(r(`${fi}Property`)
      .toString())
  }
}

function Ti(e, t) {
  for (; e.length < t.length;) e = e.concat(e);
  return Math.max(...t.map((t, o) => Oi(t) + Oi(e[o])))
}

function Oi(e) {
  return "auto" === e ? 0 : 1e3 * Number(e.slice(0, -1)
    .replace(",", "."))
}

function Ci(e) {
  return (e ? e.ownerDocument : document)
    .body.offsetHeight
}
const Ri = Symbol("_vod"),
  Ii = Symbol("_vsh"),
  Si = {
    name: "show",
    beforeMount(e, {
      value: t
    }, {
      transition: o
    }) {
      e[Ri] = "none" === e.style.display ? "" : e.style.display, o && t ? o.beforeEnter(e) : Di(e, t)
    },
    mounted(e, {
      value: t
    }, {
      transition: o
    }) {
      o && t && o.enter(e)
    },
    updated(e, {
      value: t,
      oldValue: o
    }, {
      transition: r
    }) {
      !t != !o && (r ? t ? (r.beforeEnter(e), Di(e, !0), r.enter(e)) : r.leave(e, () => {
        Di(e, !1)
      }) : Di(e, t))
    },
    beforeUnmount(e, {
      value: t
    }) {
      Di(e, t)
    }
  };

function Di(e, t) {
  e.style.display = t ? e[Ri] : "none", e[Ii] = !t
}
const ji = Symbol("");

function Bi(e) {
  const t = $s();
  if (!t) return;
  const o = t.ut = (o = e(t.proxy)) => {
      Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`))
        .forEach(e => Fi(e, o))
    },
    r = () => {
      const r = e(t.proxy);
      t.ce ? Fi(t.ce, r) : zi(t.subTree, r), o(r)
    };
  Xo(() => {
    Xt(r)
  }), Zo(() => {
    bo(r, i, {
      flush: "post"
    });
    const e = new MutationObserver(r);
    e.observe(t.subTree.el.parentNode, {
      childList: !0
    }), or(() => e.disconnect())
  })
}

function zi(e, t) {
  if (128 & e.shapeFlag) {
    const o = e.suspense;
    e = o.activeBranch, o.pendingBranch && !o.isHydrating && o.effects.push(() => {
      zi(o.activeBranch, t)
    })
  }
  for (; e.component;) e = e.component.subTree;
  if (1 & e.shapeFlag && e.el) Fi(e.el, t);
  else if (e.type === bs) e.children.forEach(e => zi(e, t));
  else if (e.type === _s) {
    let {
      el: o,
      anchor: r
    } = e;
    for (; o && (Fi(o, t), o !== r);) o = o.nextSibling
  }
}

function Fi(e, t) {
  if (1 === e.nodeType) {
    const o = e.style;
    let r = "";
    for (const e in t) {
      const s = te(t[e]);
      o.setProperty(`--${e}`, s), r += `--${e}: ${s};`
    }
    o[ji] = r
  }
}
const Vi = /(?:^|;)\s*display\s*:/;
const Ni = /\s*!important$/;

function Mi(e, t, o) {
  if (f(o)) o.forEach(o => Mi(e, t, o));
  else if (null == o && (o = ""), t.startsWith("--")) e.setProperty(t, o);
  else {
    const r = function(e, t) {
      const o = qi[t];
      if (o) return o;
      let r = C(t);
      if ("filter" !== r && r in e) return qi[t] = r;
      r = S(r);
      for (let s = 0; s < Ui.length; s++) {
        const o = Ui[s] + r;
        if (o in e) return qi[t] = o
      }
      return t
    }(e, t);
    Ni.test(o) ? e.setProperty(I(r), o.replace(Ni, ""), "important") : e[r] = o
  }
}
const Ui = ["Webkit", "Moz", "ms"],
  qi = {};
const Wi = "http://www.w3.org/1999/xlink";

function $i(e, t, o, r, s, i = G(t)) {
  r && t.startsWith("xlink:") ? null == o ? e.removeAttributeNS(Wi, t.slice(6, t.length)) : e.setAttributeNS(Wi, t, o) : null == o || i && !K(o) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : y(o) ? String(o) : o)
}

function Hi(e, t, o, r, s) {
  if ("innerHTML" === t || "textContent" === t) return void(null != o && (e[t] = "innerHTML" === t ? ci(o) : o));
  const i = e.tagName;
  if ("value" === t && "PROGRESS" !== i && !i.includes("-")) {
    const r = "OPTION" === i ? e.getAttribute("value") || "" : e.value,
      s = null == o ? "checkbox" === e.type ? "on" : "" : String(o);
    return r === s && "_value" in e || (e.value = s), null == o && e.removeAttribute(t), void(e._value = o)
  }
  let n = !1;
  if ("" === o || null == o) {
    const r = typeof e[t];
    "boolean" === r ? o = K(o) : null == o && "string" === r ? (o = "", n = !0) : "number" === r && (o = 0, n = !0)
  }
  try {
    e[t] = o
  } catch (q_) {}
  n && e.removeAttribute(s || t)
}
const Qi = Symbol("_vei");

function Gi(e, t, o, r, s = null) {
  const i = e[Qi] || (e[Qi] = {}),
    n = i[t];
  if (r && n) n.value = r;
  else {
    const [o, a] = function(e) {
      let t;
      if (Ki.test(e)) {
        let o;
        for (t = {}; o = e.match(Ki);) e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0
      }
      const o = ":" === e[2] ? e.slice(3) : I(e.slice(2));
      return [o, t]
    }(t);
    if (r) {
      const n = i[t] = function(e, t) {
        const o = e => {
          if (e._vts) {
            if (e._vts <= o.attached) return
          } else e._vts = Date.now();
          Mt(function(e, t) {
            if (f(t)) {
              const o = e.stopImmediatePropagation;
              return e.stopImmediatePropagation = () => {
                o.call(e), e._stopped = !0
              }, t.map(e => t => !t._stopped && e && e(t))
            }
            return t
          }(e, o.value), t, 5, [e])
        };
        return o.value = e, o.attached = Zi(), o
      }(r, s);
      ! function(e, t, o, r) {
        e.addEventListener(t, o, r)
      }(e, o, n, a)
    } else n && (! function(e, t, o, r) {
      e.removeEventListener(t, o, r)
    }(e, o, n, a), i[t] = void 0)
  }
}
const Ki = /(?:Once|Passive|Capture)$/;
let Yi = 0;
const Ji = Promise.resolve(),
  Zi = () => Yi || (Ji.then(() => Yi = 0), Yi = Date.now());
const Xi = e => 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123;
const en = {};

function tn(e, t, o) {
  let r = zo(e, t);
  A(r) && (r = c({}, r, t));
  class s extends rn {
    constructor(e) {
      super(r, e, o)
    }
  }
  return s.def = r, s
}
const on = "undefined" != typeof HTMLElement ? HTMLElement : class {};
class rn extends on {
  constructor(e, t = {}, o = _n) {
    super(), this._def = e, this._props = t, this._createApp = o, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = new WeakSet, this._ob = null, this.shadowRoot && o !== _n ? this._root = this.shadowRoot : !1 !== e.shadowRoot ? (this.attachShadow(c({}, e.shadowRootOptions, {
      mode: "open"
    })), this._root = this.shadowRoot) : this._root = this
  }
  connectedCallback() {
    if (!this.isConnected) return;
    this.shadowRoot || this._resolved || this._parseSlots(), this._connected = !0;
    let e = this;
    for (; e = e && (e.parentNode || e.host);)
      if (e instanceof rn) {
        this._parent = e;
        break
      } this._instance || (this._resolved ? this._mount(this._def) : e && e._pendingResolve ? this._pendingResolve = e._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef()
    }) : this._resolveDef())
  }
  _setParent(e = this._parent) {
    e && (this._instance.parent = e._instance, this._inheritParentContext(e))
  }
  _inheritParentContext(e = this._parent) {
    e && this._app && Object.setPrototypeOf(this._app._context.provides, e._instance.provides)
  }
  disconnectedCallback() {
    this._connected = !1, Yt(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets && (this._teleportTargets.clear(), this._teleportTargets = void 0))
    })
  }
  _processMutations(e) {
    for (const t of e) this._setAttr(t.attributeName)
  }
  _resolveDef() {
    if (this._pendingResolve) return;
    for (let o = 0; o < this.attributes.length; o++) this._setAttr(this.attributes[o].name);
    this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, {
      attributes: !0
    });
    const e = (e, t = !1) => {
        this._resolved = !0, this._pendingResolve = void 0;
        const {
          props: o,
          styles: r
        } = e;
        let s;
        if (o && !f(o))
          for (const i in o) {
            const e = o[i];
            (e === Number || e && e.type === Number) && (i in this._props && (this._props[i] = V(this._props[i])), (s || (s = Object.create(null)))[C(i)] = !0)
          }
        this._numberProps = s, this._resolveProps(e), this.shadowRoot && this._applyStyles(r), this._mount(e)
      },
      t = this._def.__asyncLoader;
    t ? this._pendingResolve = t()
      .then(t => {
        t.configureApp = this._def.configureApp, e(this._def = t, !0)
      }) : e(this._def)
  }
  _mount(e) {
    this._app = this._createApp(e), this._inheritParentContext(), e.configureApp && e.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const t = this._instance && this._instance.exposed;
    if (t)
      for (const o in t) u(this, o) || Object.defineProperty(this, o, {
        get: () => Ot(t[o])
      })
  }
  _resolveProps(e) {
    const {
      props: t
    } = e, o = f(t) ? t : Object.keys(t || {});
    for (const r of Object.keys(this)) "_" !== r[0] && o.includes(r) && this._setProp(r, this[r]);
    for (const r of o.map(C)) Object.defineProperty(this, r, {
      get() {
        return this._getProp(r)
      },
      set(e) {
        this._setProp(r, e, !0, !this._patching)
      }
    })
  }
  _setAttr(e) {
    if (e.startsWith("data-v-")) return;
    const t = this.hasAttribute(e);
    let o = t ? this.getAttribute(e) : en;
    const r = C(e);
    t && this._numberProps && this._numberProps[r] && (o = V(o)), this._setProp(r, o, !1, !0)
  }
  _getProp(e) {
    return this._props[e]
  }
  _setProp(e, t, o = !0, r = !1) {
    if (t !== this._props[e] && (this._dirty = !0, t === en ? delete this._props[e] : (this._props[e] = t, "key" === e && this._app && (this._app._ceVNode.key = t)), r && this._instance && this._update(), o)) {
      const o = this._ob;
      o && (this._processMutations(o.takeRecords()), o.disconnect()), !0 === t ? this.setAttribute(I(e), "") : "string" == typeof t || "number" == typeof t ? this.setAttribute(I(e), t + "") : t || this.removeAttribute(I(e)), o && o.observe(this, {
        attributes: !0
      })
    }
  }
  _update() {
    const e = this._createVNode();
    this._app && (e.appContext = this._app._context), gn(e, this._root)
  }
  _createVNode() {
    const e = {};
    this.shadowRoot || (e.onVnodeMounted = e.onVnodeUpdated = this._renderSlots.bind(this));
    const t = Is(this._def, c(e, this._props));
    return this._instance || (t.ce = e => {
      this._instance = e, e.ce = this, e.isCE = !0;
      const t = (e, t) => {
        this.dispatchEvent(new CustomEvent(e, A(t[0]) ? c({
          detail: t
        }, t[0]) : {
          detail: t
        }))
      };
      e.emit = (e, ...o) => {
        t(e, o), I(e) !== e && t(I(e), o)
      }, this._setParent()
    }), t
  }
  _applyStyles(e, t) {
    if (!e) return;
    if (t) {
      if (t === this._def || this._styleChildren.has(t)) return;
      this._styleChildren.add(t)
    }
    const o = this._nonce;
    for (let r = e.length - 1; r >= 0; r--) {
      const t = document.createElement("style");
      o && t.setAttribute("nonce", o), t.textContent = e[r], this.shadowRoot.prepend(t)
    }
  }
  _parseSlots() {
    const e = this._slots = {};
    let t;
    for (; t = this.firstChild;) {
      const o = 1 === t.nodeType && t.getAttribute("slot") || "default";
      (e[o] || (e[o] = []))
      .push(t), this.removeChild(t)
    }
  }
  _renderSlots() {
    const e = this._getSlots(),
      t = this._instance.type.__scopeId;
    for (let o = 0; o < e.length; o++) {
      const r = e[o],
        s = r.getAttribute("name") || "default",
        i = this._slots[s],
        n = r.parentNode;
      if (i)
        for (const e of i) {
          if (t && 1 === e.nodeType) {
            const o = t + "-s",
              r = document.createTreeWalker(e, 1);
            let s;
            for (e.setAttribute(o, ""); s = r.nextNode();) s.setAttribute(o, "")
          }
          n.insertBefore(e, r)
        } else
          for (; r.firstChild;) n.insertBefore(r.firstChild, r);
      n.removeChild(r)
    }
  }
  _getSlots() {
    const e = [this];
    this._teleportTargets && e.push(...this._teleportTargets);
    const t = new Set;
    for (const o of e) {
      const e = o.querySelectorAll("slot");
      for (let o = 0; o < e.length; o++) t.add(e[o])
    }
    return Array.from(t)
  }
  _injectChildStyle(e) {
    this._applyStyles(e.styles, e)
  }
  _beginPatch() {
    this._patching = !0, this._dirty = !1
  }
  _endPatch() {
    this._patching = !1, this._dirty && this._instance && this._update()
  }
  _hasShadowRoot() {
    return !1 !== this._def.shadowRoot
  }
  _removeChildStyle(e) {}
}
const sn = new WeakMap,
  nn = new WeakMap,
  an = Symbol("_moveCb"),
  ln = Symbol("_enterCb"),
  cn = (e => (delete e.props.mode, e))({
    name: "TransitionGroup",
    props: c({}, gi, {
      tag: String,
      moveClass: String
    }),
    setup(e, {
      slots: t
    }) {
      const o = $s(),
        r = function() {
          const e = {
            isMounted: !1,
            isLeaving: !1,
            isUnmounting: !1,
            leavingVNodes: new Map
          };
          return Zo(() => {
            e.isMounted = !0
          }), tr(() => {
            e.isUnmounting = !0
          }), e
        }();
      let s, i;
      return er(() => {
        if (!s.length) return;
        const t = e.moveClass || `${e.name||"v"}-move`;
        if (! function(e, t, o) {
            const r = e.cloneNode(),
              s = e[bi];
            s && s.forEach(e => {
              e.split(/\s+/)
                .forEach(e => e && r.classList.remove(e))
            });
            o.split(/\s+/)
              .forEach(e => e && r.classList.add(e)), r.style.display = "none";
            const i = 1 === t.nodeType ? t : t.parentNode;
            i.appendChild(r);
            const {
              hasTransform: n
            } = Pi(r);
            return i.removeChild(r), n
          }(s[0].el, o.vnode.el, t)) return void(s = []);
        s.forEach(dn), s.forEach(pn);
        const r = s.filter(un);
        Ci(o.vnode.el), r.forEach(e => {
          const o = e.el,
            r = o.style;
          xi(o, t), r.transform = r.webkitTransform = r.transitionDuration = "";
          const s = o[an] = e => {
            e && e.target !== o || e && !e.propertyName.endsWith("transform") || (o.removeEventListener("transitionend", s), o[an] = null, Ei(o, t))
          };
          o.addEventListener("transitionend", s)
        }), s = []
      }), () => {
        const n = kt(e),
          a = yi(n);
        let l = n.tag || bs;
        if (s = [], i)
          for (let e = 0; e < i.length; e++) {
            const t = i[e];
            t.el && t.el instanceof Element && (s.push(t), jo(t, Do(t, a, r, o)), sn.set(t, fn(t.el)))
          }
        i = t.default ? Bo(t.default()) : [];
        for (let e = 0; e < i.length; e++) {
          const t = i[e];
          null != t.key && jo(t, Do(t, a, r, o))
        }
        return Is(l, null, i)
      }
    }
  });

function dn(e) {
  const t = e.el;
  t[an] && t[an](), t[ln] && t[ln]()
}

function pn(e) {
  nn.set(e, fn(e.el))
}

function un(e) {
  const t = sn.get(e),
    o = nn.get(e),
    r = t.left - o.left,
    s = t.top - o.top;
  if (r || s) {
    const t = e.el,
      o = t.style,
      i = t.getBoundingClientRect();
    let n = 1,
      a = 1;
    return t.offsetWidth && (n = i.width / t.offsetWidth), t.offsetHeight && (a = i.height / t.offsetHeight), Number.isFinite(n) && 0 !== n || (n = 1), Number.isFinite(a) && 0 !== a || (a = 1), Math.abs(n - 1) < .01 && (n = 1), Math.abs(a - 1) < .01 && (a = 1), o.transform = o.webkitTransform = `translate(${r/n}px,${s/a}px)`, o.transitionDuration = "0s", e
  }
}

function fn(e) {
  const t = e.getBoundingClientRect();
  return {
    left: t.left,
    top: t.top
  }
}
const mn = c({
  patchProp: (e, t, o, r, s, i) => {
    const n = "svg" === s;
    "class" === t ? function(e, t, o) {
      const r = e[bi];
      r && (t = (t ? [t, ...r] : [...r])
        .join(" ")), null == t ? e.removeAttribute("class") : o ? e.setAttribute("class", t) : e.className = t
    }(e, r, n) : "style" === t ? function(e, t, o) {
      const r = e.style,
        s = v(o);
      let i = !1;
      if (o && !s) {
        if (t)
          if (v(t))
            for (const e of t.split(";")) {
              const t = e.slice(0, e.indexOf(":"))
                .trim();
              null == o[t] && Mi(r, t, "")
            } else
              for (const e in t) null == o[e] && Mi(r, e, "");
        for (const e in o) "display" === e && (i = !0), Mi(r, e, o[e])
      } else if (s) {
        if (t !== o) {
          const e = r[ji];
          e && (o += ";" + e), r.cssText = o, i = Vi.test(o)
        }
      } else t && e.removeAttribute("style");
      Ri in e && (e[Ri] = i ? r.display : "", e[Ii] && (r.display = "none"))
    }(e, o, r) : a(t) ? l(t) || Gi(e, t, 0, r, i) : ("." === t[0] ? (t = t.slice(1), 1) : "^" === t[0] ? (t = t.slice(1), 0) : function(e, t, o, r) {
      if (r) return "innerHTML" === t || "textContent" === t || !!(t in e && Xi(t) && _(o));
      if ("spellcheck" === t || "draggable" === t || "translate" === t || "autocorrect" === t) return !1;
      if ("sandbox" === t && "IFRAME" === e.tagName) return !1;
      if ("form" === t) return !1;
      if ("list" === t && "INPUT" === e.tagName) return !1;
      if ("type" === t && "TEXTAREA" === e.tagName) return !1;
      if ("width" === t || "height" === t) {
        const t = e.tagName;
        if ("IMG" === t || "VIDEO" === t || "CANVAS" === t || "SOURCE" === t) return !1
      }
      if (Xi(t) && v(o)) return !1;
      return t in e
    }(e, t, r, n)) ? (Hi(e, t, r), e.tagName.includes("-") || "value" !== t && "checked" !== t && "selected" !== t || $i(e, t, r, n, 0, "value" !== t)) : !e._isVueCE || !/[A-Z]/.test(t) && v(r) ? ("true-value" === t ? e._trueValue = r : "false-value" === t && (e._falseValue = r), $i(e, t, r, n)) : Hi(e, C(t), r, 0, t)
  }
}, ui);
let bn;

function hn() {
  return bn || (bn = as(mn))
}
const gn = (...e) => {
    hn()
      .render(...e)
  },
  _n = (...e) => {
    const t = hn()
      .createApp(...e),
      {
        mount: o
      } = t;
    return t.mount = e => {
      const r = function(e) {
        if (v(e)) {
          return document.querySelector(e)
        }
        return e
      }(e);
      if (!r) return;
      const s = t._component;
      _(s) || s.render || s.template || (s.template = r.innerHTML), 1 === r.nodeType && (r.textContent = "");
      const i = o(r, !1, function(e) {
        if (e instanceof SVGElement) return "svg";
        if ("function" == typeof MathMLElement && e instanceof MathMLElement) return "mathml"
      }(r));
      return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i
    }, t
  };
var vn = (e => (e.LIDL_PLUS = "lidl_plus", e.MOBILE_APP = "mobile_app", e.WEB = "web", e))(vn || {}),
  yn = (e => (e.DEV = "dev", e.TEST = "test", e.QA = "qa", e.PROD = "prod", e))(yn || {});
const kn = () => ({
    getEnvironment: () => window?.__pca?.cfg?.env ?? window?.$pcaStage ?? null ?? (() => {
      const e = window.location.hostname.toLowerCase();
      return e.startsWith("dev.") || e.startsWith("localhost") ? yn.DEV : e.startsWith("test.") ? yn.TEST : e.startsWith("qa.") ? yn.QA : e.startsWith("www.") || e.startsWith("lidl.") ? yn.PROD : null
    })() ?? yn.PROD
  }),
  xn = e => {
    let t = null;
    if (document.cookie && "" !== document.cookie) {
      const o = document.cookie.split(";");
      for (let r of o)
        if (r = r.trim(), r.substring(0, e.length + 1) === `${e}=`) {
          t = decodeURIComponent(r.substring(e.length + 1)
            .replace(/\+/g, " "));
          break
        }
    }
    return t
  };

function En(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var wn, An;
const Ln = En(function() {
    if (An) return wn;
    An = 1;
    var e = function(e) {
        return function(e) {
          return !!e && "object" == typeof e
        }(e) && ! function(e) {
          var o = Object.prototype.toString.call(e);
          return "[object RegExp]" === o || "[object Date]" === o || function(e) {
            return e.$$typeof === t
          }(e)
        }(e)
      },
      t = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

    function o(e, t) {
      return !1 !== t.clone && t.isMergeableObject(e) ? a((o = e, Array.isArray(o) ? [] : {}), e, t) : e;
      var o
    }

    function r(e, t, r) {
      return e.concat(t)
        .map(function(e) {
          return o(e, r)
        })
    }

    function s(e) {
      return Object.keys(e)
        .concat(function(e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e)
            .filter(function(t) {
              return Object.propertyIsEnumerable.call(e, t)
            }) : []
        }(e))
    }

    function i(e, t) {
      try {
        return t in e
      } catch (o) {
        return !1
      }
    }

    function n(e, t, r) {
      var n = {};
      return r.isMergeableObject(e) && s(e)
        .forEach(function(t) {
          n[t] = o(e[t], r)
        }), s(t)
        .forEach(function(s) {
          (function(e, t) {
            return i(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
          })(e, s) || (i(e, s) && r.isMergeableObject(t[s]) ? n[s] = function(e, t) {
            if (!t.customMerge) return a;
            var o = t.customMerge(e);
            return "function" == typeof o ? o : a
          }(s, r)(e[s], t[s], r) : n[s] = o(t[s], r))
        }), n
    }

    function a(t, s, i) {
      (i = i || {})
      .arrayMerge = i.arrayMerge || r, i.isMergeableObject = i.isMergeableObject || e, i.cloneUnlessOtherwiseSpecified = o;
      var a = Array.isArray(s);
      return a === Array.isArray(t) ? a ? i.arrayMerge(t, s, i) : n(t, s, i) : o(s, i)
    }
    return a.all = function(e, t) {
      if (!Array.isArray(e)) throw new Error("first argument should be an array");
      return e.reduce(function(e, o) {
        return a(e, o, t)
      }, {})
    }, wn = a
  }()),
  Pn = (e, t) => Ln(e, t),
  Tn = () => {
    const e = (() => {
      try {
        const e = xn("otc-mobile-checkout-parameters");
        if (e) return JSON.parse(e)
      } catch (q_) {
        console.error("failed to get mobile parameters", q_)
      }
      return null
    })();
    return e && e.salesChannel ? e.salesChannel : void 0
  };
var On, Cn = {},
  Rn = {};
var In, Sn, Dn = {};
var jn = (Sn || (Sn = 1, function(e) {
  const t = function() {
      if (On) return Rn;
      On = 1, Rn.byteLength = function(e) {
        var t = i(e),
          o = t[0],
          r = t[1];
        return 3 * (o + r) / 4 - r
      }, Rn.toByteArray = function(e) {
        var r, s, n = i(e),
          a = n[0],
          l = n[1],
          c = new o(function(e, t, o) {
            return 3 * (t + o) / 4 - o
          }(0, a, l)),
          d = 0,
          p = l > 0 ? a - 4 : a;
        for (s = 0; s < p; s += 4) r = t[e.charCodeAt(s)] << 18 | t[e.charCodeAt(s + 1)] << 12 | t[e.charCodeAt(s + 2)] << 6 | t[e.charCodeAt(s + 3)], c[d++] = r >> 16 & 255, c[d++] = r >> 8 & 255, c[d++] = 255 & r;
        return 2 === l && (r = t[e.charCodeAt(s)] << 2 | t[e.charCodeAt(s + 1)] >> 4, c[d++] = 255 & r), 1 === l && (r = t[e.charCodeAt(s)] << 10 | t[e.charCodeAt(s + 1)] << 4 | t[e.charCodeAt(s + 2)] >> 2, c[d++] = r >> 8 & 255, c[d++] = 255 & r), c
      }, Rn.fromByteArray = function(t) {
        for (var o, r = t.length, s = r % 3, i = [], n = 16383, l = 0, c = r - s; l < c; l += n) i.push(a(t, l, l + n > c ? c : l + n));
        return 1 === s ? (o = t[r - 1], i.push(e[o >> 2] + e[o << 4 & 63] + "==")) : 2 === s && (o = (t[r - 2] << 8) + t[r - 1], i.push(e[o >> 10] + e[o >> 4 & 63] + e[o << 2 & 63] + "=")), i.join("")
      };
      for (var e = [], t = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0; s < 64; ++s) e[s] = r[s], t[r.charCodeAt(s)] = s;

      function i(e) {
        var t = e.length;
        if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var o = e.indexOf("=");
        return -1 === o && (o = t), [o, o === t ? 0 : 4 - o % 4]
      }

      function n(t) {
        return e[t >> 18 & 63] + e[t >> 12 & 63] + e[t >> 6 & 63] + e[63 & t]
      }

      function a(e, t, o) {
        for (var r, s = [], i = t; i < o; i += 3) r = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (255 & e[i + 2]), s.push(n(r));
        return s.join("")
      }
      return t["-".charCodeAt(0)] = 62, t["_".charCodeAt(0)] = 63, Rn
    }(),
    o = (In || (In = 1, Dn.read = function(e, t, o, r, s) {
      var i, n, a = 8 * s - r - 1,
        l = (1 << a) - 1,
        c = l >> 1,
        d = -7,
        p = o ? s - 1 : 0,
        u = o ? -1 : 1,
        f = e[t + p];
      for (p += u, i = f & (1 << -d) - 1, f >>= -d, d += a; d > 0; i = 256 * i + e[t + p], p += u, d -= 8);
      for (n = i & (1 << -d) - 1, i >>= -d, d += r; d > 0; n = 256 * n + e[t + p], p += u, d -= 8);
      if (0 === i) i = 1 - c;
      else {
        if (i === l) return n ? NaN : 1 / 0 * (f ? -1 : 1);
        n += Math.pow(2, r), i -= c
      }
      return (f ? -1 : 1) * n * Math.pow(2, i - r)
    }, Dn.write = function(e, t, o, r, s, i) {
      var n, a, l, c = 8 * i - s - 1,
        d = (1 << c) - 1,
        p = d >> 1,
        u = 23 === s ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        f = r ? 0 : i - 1,
        m = r ? 1 : -1,
        b = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
      for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, n = d) : (n = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -n)) < 1 && (n--, l *= 2), (t += n + p >= 1 ? u / l : u * Math.pow(2, 1 - p)) * l >= 2 && (n++, l /= 2), n + p >= d ? (a = 0, n = d) : n + p >= 1 ? (a = (t * l - 1) * Math.pow(2, s), n += p) : (a = t * Math.pow(2, p - 1) * Math.pow(2, s), n = 0)); s >= 8; e[o + f] = 255 & a, f += m, a /= 256, s -= 8);
      for (n = n << s | a, c += s; c > 0; e[o + f] = 255 & n, f += m, n /= 256, c -= 8);
      e[o + f - m] |= 128 * b
    }), Dn),
    r = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = n, e.SlowBuffer = function(e) {
    return +e != e && (e = 0), n.alloc(+e)
  }, e.INSPECT_MAX_BYTES = 50;
  const s = 2147483647;

  function i(e) {
    if (e > s) throw new RangeError('The value "' + e + '" is invalid for option "size"');
    const t = new Uint8Array(e);
    return Object.setPrototypeOf(t, n.prototype), t
  }

  function n(e, t, o) {
    if ("number" == typeof e) {
      if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
      return c(e)
    }
    return a(e, t, o)
  }

  function a(e, t, o) {
    if ("string" == typeof e) return function(e, t) {
      if ("string" == typeof t && "" !== t || (t = "utf8"), !n.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
      const o = 0 | f(e, t);
      let r = i(o);
      const s = r.write(e, t);
      return s !== o && (r = r.slice(0, s)), r
    }(e, t);
    if (ArrayBuffer.isView(e)) return function(e) {
      if (G(e, Uint8Array)) {
        const t = new Uint8Array(e);
        return p(t.buffer, t.byteOffset, t.byteLength)
      }
      return d(e)
    }(e);
    if (null == e) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
    if (G(e, ArrayBuffer) || e && G(e.buffer, ArrayBuffer)) return p(e, t, o);
    if ("undefined" != typeof SharedArrayBuffer && (G(e, SharedArrayBuffer) || e && G(e.buffer, SharedArrayBuffer))) return p(e, t, o);
    if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
    const r = e.valueOf && e.valueOf();
    if (null != r && r !== e) return n.from(r, t, o);
    const s = function(e) {
      if (n.isBuffer(e)) {
        const t = 0 | u(e.length),
          o = i(t);
        return 0 === o.length || e.copy(o, 0, 0, t), o
      }
      return void 0 !== e.length ? "number" != typeof e.length || K(e.length) ? i(0) : d(e) : "Buffer" === e.type && Array.isArray(e.data) ? d(e.data) : void 0
    }(e);
    if (s) return s;
    if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return n.from(e[Symbol.toPrimitive]("string"), t, o);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
  }

  function l(e) {
    if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
    if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"')
  }

  function c(e) {
    return l(e), i(e < 0 ? 0 : 0 | u(e))
  }

  function d(e) {
    const t = e.length < 0 ? 0 : 0 | u(e.length),
      o = i(t);
    for (let r = 0; r < t; r += 1) o[r] = 255 & e[r];
    return o
  }

  function p(e, t, o) {
    if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
    if (e.byteLength < t + (o || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let r;
    return r = void 0 === t && void 0 === o ? new Uint8Array(e) : void 0 === o ? new Uint8Array(e, t) : new Uint8Array(e, t, o), Object.setPrototypeOf(r, n.prototype), r
  }

  function u(e) {
    if (e >= s) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
    return 0 | e
  }

  function f(e, t) {
    if (n.isBuffer(e)) return e.length;
    if (ArrayBuffer.isView(e) || G(e, ArrayBuffer)) return e.byteLength;
    if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
    const o = e.length,
      r = arguments.length > 2 && !0 === arguments[2];
    if (!r && 0 === o) return 0;
    let s = !1;
    for (;;) switch (t) {
      case "ascii":
      case "latin1":
      case "binary":
        return o;
      case "utf8":
      case "utf-8":
        return $(e)
          .length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return 2 * o;
      case "hex":
        return o >>> 1;
      case "base64":
        return H(e)
          .length;
      default:
        if (s) return r ? -1 : $(e)
          .length;
        t = ("" + t)
          .toLowerCase(), s = !0
    }
  }

  function m(e, t, o) {
    let r = !1;
    if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
    if ((void 0 === o || o > this.length) && (o = this.length), o <= 0) return "";
    if ((o >>>= 0) <= (t >>>= 0)) return "";
    for (e || (e = "utf8");;) switch (e) {
      case "hex":
        return O(this, t, o);
      case "utf8":
      case "utf-8":
        return A(this, t, o);
      case "ascii":
        return P(this, t, o);
      case "latin1":
      case "binary":
        return T(this, t, o);
      case "base64":
        return w(this, t, o);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return C(this, t, o);
      default:
        if (r) throw new TypeError("Unknown encoding: " + e);
        e = (e + "")
          .toLowerCase(), r = !0
    }
  }

  function b(e, t, o) {
    const r = e[t];
    e[t] = e[o], e[o] = r
  }

  function g(e, t, o, r, s) {
    if (0 === e.length) return -1;
    if ("string" == typeof o ? (r = o, o = 0) : o > 2147483647 ? o = 2147483647 : o < -2147483648 && (o = -2147483648), K(o = +o) && (o = s ? 0 : e.length - 1), o < 0 && (o = e.length + o), o >= e.length) {
      if (s) return -1;
      o = e.length - 1
    } else if (o < 0) {
      if (!s) return -1;
      o = 0
    }
    if ("string" == typeof t && (t = n.from(t, r)), n.isBuffer(t)) return 0 === t.length ? -1 : _(e, t, o, r, s);
    if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? s ? Uint8Array.prototype.indexOf.call(e, t, o) : Uint8Array.prototype.lastIndexOf.call(e, t, o) : _(e, [t], o, r, s);
    throw new TypeError("val must be string, number or Buffer")
  }

  function _(e, t, o, r, s) {
    let i, n = 1,
      a = e.length,
      l = t.length;
    if (void 0 !== r && ("ucs2" === (r = String(r)
        .toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
      if (e.length < 2 || t.length < 2) return -1;
      n = 2, a /= 2, l /= 2, o /= 2
    }

    function c(e, t) {
      return 1 === n ? e[t] : e.readUInt16BE(t * n)
    }
    if (s) {
      let r = -1;
      for (i = o; i < a; i++)
        if (c(e, i) === c(t, -1 === r ? 0 : i - r)) {
          if (-1 === r && (r = i), i - r + 1 === l) return r * n
        } else - 1 !== r && (i -= i - r), r = -1
    } else
      for (o + l > a && (o = a - l), i = o; i >= 0; i--) {
        let o = !0;
        for (let r = 0; r < l; r++)
          if (c(e, i + r) !== c(t, r)) {
            o = !1;
            break
          } if (o) return i
      }
    return -1
  }

  function v(e, t, o, r) {
    o = Number(o) || 0;
    const s = e.length - o;
    r ? (r = Number(r)) > s && (r = s) : r = s;
    const i = t.length;
    let n;
    for (r > i / 2 && (r = i / 2), n = 0; n < r; ++n) {
      const r = parseInt(t.substr(2 * n, 2), 16);
      if (K(r)) return n;
      e[o + n] = r
    }
    return n
  }

  function y(e, t, o, r) {
    return Q($(t, e.length - o), e, o, r)
  }

  function k(e, t, o, r) {
    return Q(function(e) {
      const t = [];
      for (let o = 0; o < e.length; ++o) t.push(255 & e.charCodeAt(o));
      return t
    }(t), e, o, r)
  }

  function x(e, t, o, r) {
    return Q(H(t), e, o, r)
  }

  function E(e, t, o, r) {
    return Q(function(e, t) {
      let o, r, s;
      const i = [];
      for (let n = 0; n < e.length && !((t -= 2) < 0); ++n) o = e.charCodeAt(n), r = o >> 8, s = o % 256, i.push(s), i.push(r);
      return i
    }(t, e.length - o), e, o, r)
  }

  function w(e, o, r) {
    return 0 === o && r === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(o, r))
  }

  function A(e, t, o) {
    o = Math.min(e.length, o);
    const r = [];
    let s = t;
    for (; s < o;) {
      const t = e[s];
      let i = null,
        n = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
      if (s + n <= o) {
        let o, r, a, l;
        switch (n) {
          case 1:
            t < 128 && (i = t);
            break;
          case 2:
            o = e[s + 1], 128 == (192 & o) && (l = (31 & t) << 6 | 63 & o, l > 127 && (i = l));
            break;
          case 3:
            o = e[s + 1], r = e[s + 2], 128 == (192 & o) && 128 == (192 & r) && (l = (15 & t) << 12 | (63 & o) << 6 | 63 & r, l > 2047 && (l < 55296 || l > 57343) && (i = l));
            break;
          case 4:
            o = e[s + 1], r = e[s + 2], a = e[s + 3], 128 == (192 & o) && 128 == (192 & r) && 128 == (192 & a) && (l = (15 & t) << 18 | (63 & o) << 12 | (63 & r) << 6 | 63 & a, l > 65535 && l < 1114112 && (i = l))
        }
      }
      null === i ? (i = 65533, n = 1) : i > 65535 && (i -= 65536, r.push(i >>> 10 & 1023 | 55296), i = 56320 | 1023 & i), r.push(i), s += n
    }
    return function(e) {
      const t = e.length;
      if (t <= L) return String.fromCharCode.apply(String, e);
      let o = "",
        r = 0;
      for (; r < t;) o += String.fromCharCode.apply(String, e.slice(r, r += L));
      return o
    }(r)
  }
  e.kMaxLength = s, n.TYPED_ARRAY_SUPPORT = function() {
    try {
      const e = new Uint8Array(1),
        t = {
          foo: function() {
            return 42
          }
        };
      return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo()
    } catch (q_) {
      return !1
    }
  }(), n.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(n.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (n.isBuffer(this)) return this.buffer
    }
  }), Object.defineProperty(n.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (n.isBuffer(this)) return this.byteOffset
    }
  }), n.poolSize = 8192, n.from = function(e, t, o) {
    return a(e, t, o)
  }, Object.setPrototypeOf(n.prototype, Uint8Array.prototype), Object.setPrototypeOf(n, Uint8Array), n.alloc = function(e, t, o) {
    return function(e, t, o) {
      return l(e), e <= 0 ? i(e) : void 0 !== t ? "string" == typeof o ? i(e)
        .fill(t, o) : i(e)
        .fill(t) : i(e)
    }(e, t, o)
  }, n.allocUnsafe = function(e) {
    return c(e)
  }, n.allocUnsafeSlow = function(e) {
    return c(e)
  }, n.isBuffer = function(e) {
    return null != e && !0 === e._isBuffer && e !== n.prototype
  }, n.compare = function(e, t) {
    if (G(e, Uint8Array) && (e = n.from(e, e.offset, e.byteLength)), G(t, Uint8Array) && (t = n.from(t, t.offset, t.byteLength)), !n.isBuffer(e) || !n.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (e === t) return 0;
    let o = e.length,
      r = t.length;
    for (let s = 0, i = Math.min(o, r); s < i; ++s)
      if (e[s] !== t[s]) {
        o = e[s], r = t[s];
        break
      } return o < r ? -1 : r < o ? 1 : 0
  }, n.isEncoding = function(e) {
    switch (String(e)
      .toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1
    }
  }, n.concat = function(e, t) {
    if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (0 === e.length) return n.alloc(0);
    let o;
    if (void 0 === t)
      for (t = 0, o = 0; o < e.length; ++o) t += e[o].length;
    const r = n.allocUnsafe(t);
    let s = 0;
    for (o = 0; o < e.length; ++o) {
      let t = e[o];
      if (G(t, Uint8Array)) s + t.length > r.length ? (n.isBuffer(t) || (t = n.from(t)), t.copy(r, s)) : Uint8Array.prototype.set.call(r, t, s);
      else {
        if (!n.isBuffer(t)) throw new TypeError('"list" argument must be an Array of Buffers');
        t.copy(r, s)
      }
      s += t.length
    }
    return r
  }, n.byteLength = f, n.prototype._isBuffer = !0, n.prototype.swap16 = function() {
    const e = this.length;
    if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let t = 0; t < e; t += 2) b(this, t, t + 1);
    return this
  }, n.prototype.swap32 = function() {
    const e = this.length;
    if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let t = 0; t < e; t += 4) b(this, t, t + 3), b(this, t + 1, t + 2);
    return this
  }, n.prototype.swap64 = function() {
    const e = this.length;
    if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let t = 0; t < e; t += 8) b(this, t, t + 7), b(this, t + 1, t + 6), b(this, t + 2, t + 5), b(this, t + 3, t + 4);
    return this
  }, n.prototype.toString = function() {
    const e = this.length;
    return 0 === e ? "" : 0 === arguments.length ? A(this, 0, e) : m.apply(this, arguments)
  }, n.prototype.toLocaleString = n.prototype.toString, n.prototype.equals = function(e) {
    if (!n.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
    return this === e || 0 === n.compare(this, e)
  }, n.prototype.inspect = function() {
    let t = "";
    const o = e.INSPECT_MAX_BYTES;
    return t = this.toString("hex", 0, o)
      .replace(/(.{2})/g, "$1 ")
      .trim(), this.length > o && (t += " ... "), "<Buffer " + t + ">"
  }, r && (n.prototype[r] = n.prototype.inspect), n.prototype.compare = function(e, t, o, r, s) {
    if (G(e, Uint8Array) && (e = n.from(e, e.offset, e.byteLength)), !n.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
    if (void 0 === t && (t = 0), void 0 === o && (o = e ? e.length : 0), void 0 === r && (r = 0), void 0 === s && (s = this.length), t < 0 || o > e.length || r < 0 || s > this.length) throw new RangeError("out of range index");
    if (r >= s && t >= o) return 0;
    if (r >= s) return -1;
    if (t >= o) return 1;
    if (this === e) return 0;
    let i = (s >>>= 0) - (r >>>= 0),
      a = (o >>>= 0) - (t >>>= 0);
    const l = Math.min(i, a),
      c = this.slice(r, s),
      d = e.slice(t, o);
    for (let n = 0; n < l; ++n)
      if (c[n] !== d[n]) {
        i = c[n], a = d[n];
        break
      } return i < a ? -1 : a < i ? 1 : 0
  }, n.prototype.includes = function(e, t, o) {
    return -1 !== this.indexOf(e, t, o)
  }, n.prototype.indexOf = function(e, t, o) {
    return g(this, e, t, o, !0)
  }, n.prototype.lastIndexOf = function(e, t, o) {
    return g(this, e, t, o, !1)
  }, n.prototype.write = function(e, t, o, r) {
    if (void 0 === t) r = "utf8", o = this.length, t = 0;
    else if (void 0 === o && "string" == typeof t) r = t, o = this.length, t = 0;
    else {
      if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      t >>>= 0, isFinite(o) ? (o >>>= 0, void 0 === r && (r = "utf8")) : (r = o, o = void 0)
    }
    const s = this.length - t;
    if ((void 0 === o || o > s) && (o = s), e.length > 0 && (o < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    r || (r = "utf8");
    let i = !1;
    for (;;) switch (r) {
      case "hex":
        return v(this, e, t, o);
      case "utf8":
      case "utf-8":
        return y(this, e, t, o);
      case "ascii":
      case "latin1":
      case "binary":
        return k(this, e, t, o);
      case "base64":
        return x(this, e, t, o);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return E(this, e, t, o);
      default:
        if (i) throw new TypeError("Unknown encoding: " + r);
        r = ("" + r)
          .toLowerCase(), i = !0
    }
  }, n.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    }
  };
  const L = 4096;

  function P(e, t, o) {
    let r = "";
    o = Math.min(e.length, o);
    for (let s = t; s < o; ++s) r += String.fromCharCode(127 & e[s]);
    return r
  }

  function T(e, t, o) {
    let r = "";
    o = Math.min(e.length, o);
    for (let s = t; s < o; ++s) r += String.fromCharCode(e[s]);
    return r
  }

  function O(e, t, o) {
    const r = e.length;
    (!t || t < 0) && (t = 0), (!o || o < 0 || o > r) && (o = r);
    let s = "";
    for (let i = t; i < o; ++i) s += Y[e[i]];
    return s
  }

  function C(e, t, o) {
    const r = e.slice(t, o);
    let s = "";
    for (let i = 0; i < r.length - 1; i += 2) s += String.fromCharCode(r[i] + 256 * r[i + 1]);
    return s
  }

  function R(e, t, o) {
    if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
    if (e + t > o) throw new RangeError("Trying to access beyond buffer length")
  }

  function I(e, t, o, r, s, i) {
    if (!n.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (t > s || t < i) throw new RangeError('"value" argument is out of bounds');
    if (o + r > e.length) throw new RangeError("Index out of range")
  }

  function S(e, t, o, r, s) {
    M(t, r, s, e, o, 7);
    let i = Number(t & BigInt(4294967295));
    e[o++] = i, i >>= 8, e[o++] = i, i >>= 8, e[o++] = i, i >>= 8, e[o++] = i;
    let n = Number(t >> BigInt(32) & BigInt(4294967295));
    return e[o++] = n, n >>= 8, e[o++] = n, n >>= 8, e[o++] = n, n >>= 8, e[o++] = n, o
  }

  function D(e, t, o, r, s) {
    M(t, r, s, e, o, 7);
    let i = Number(t & BigInt(4294967295));
    e[o + 7] = i, i >>= 8, e[o + 6] = i, i >>= 8, e[o + 5] = i, i >>= 8, e[o + 4] = i;
    let n = Number(t >> BigInt(32) & BigInt(4294967295));
    return e[o + 3] = n, n >>= 8, e[o + 2] = n, n >>= 8, e[o + 1] = n, n >>= 8, e[o] = n, o + 8
  }

  function j(e, t, o, r, s, i) {
    if (o + r > e.length) throw new RangeError("Index out of range");
    if (o < 0) throw new RangeError("Index out of range")
  }

  function B(e, t, r, s, i) {
    return t = +t, r >>>= 0, i || j(e, 0, r, 4), o.write(e, t, r, s, 23, 4), r + 4
  }

  function z(e, t, r, s, i) {
    return t = +t, r >>>= 0, i || j(e, 0, r, 8), o.write(e, t, r, s, 52, 8), r + 8
  }
  n.prototype.slice = function(e, t) {
    const o = this.length;
    (e = ~~e) < 0 ? (e += o) < 0 && (e = 0) : e > o && (e = o), (t = void 0 === t ? o : ~~t) < 0 ? (t += o) < 0 && (t = 0) : t > o && (t = o), t < e && (t = e);
    const r = this.subarray(e, t);
    return Object.setPrototypeOf(r, n.prototype), r
  }, n.prototype.readUintLE = n.prototype.readUIntLE = function(e, t, o) {
    e >>>= 0, t >>>= 0, o || R(e, t, this.length);
    let r = this[e],
      s = 1,
      i = 0;
    for (; ++i < t && (s *= 256);) r += this[e + i] * s;
    return r
  }, n.prototype.readUintBE = n.prototype.readUIntBE = function(e, t, o) {
    e >>>= 0, t >>>= 0, o || R(e, t, this.length);
    let r = this[e + --t],
      s = 1;
    for (; t > 0 && (s *= 256);) r += this[e + --t] * s;
    return r
  }, n.prototype.readUint8 = n.prototype.readUInt8 = function(e, t) {
    return e >>>= 0, t || R(e, 1, this.length), this[e]
  }, n.prototype.readUint16LE = n.prototype.readUInt16LE = function(e, t) {
    return e >>>= 0, t || R(e, 2, this.length), this[e] | this[e + 1] << 8
  }, n.prototype.readUint16BE = n.prototype.readUInt16BE = function(e, t) {
    return e >>>= 0, t || R(e, 2, this.length), this[e] << 8 | this[e + 1]
  }, n.prototype.readUint32LE = n.prototype.readUInt32LE = function(e, t) {
    return e >>>= 0, t || R(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
  }, n.prototype.readUint32BE = n.prototype.readUInt32BE = function(e, t) {
    return e >>>= 0, t || R(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
  }, n.prototype.readBigUInt64LE = J(function(e) {
    U(e >>>= 0, "offset");
    const t = this[e],
      o = this[e + 7];
    void 0 !== t && void 0 !== o || q(e, this.length - 8);
    const r = t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24,
      s = this[++e] + 256 * this[++e] + 65536 * this[++e] + o * 2 ** 24;
    return BigInt(r) + (BigInt(s) << BigInt(32))
  }), n.prototype.readBigUInt64BE = J(function(e) {
    U(e >>>= 0, "offset");
    const t = this[e],
      o = this[e + 7];
    void 0 !== t && void 0 !== o || q(e, this.length - 8);
    const r = t * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + this[++e],
      s = this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + o;
    return (BigInt(r) << BigInt(32)) + BigInt(s)
  }), n.prototype.readIntLE = function(e, t, o) {
    e >>>= 0, t >>>= 0, o || R(e, t, this.length);
    let r = this[e],
      s = 1,
      i = 0;
    for (; ++i < t && (s *= 256);) r += this[e + i] * s;
    return s *= 128, r >= s && (r -= Math.pow(2, 8 * t)), r
  }, n.prototype.readIntBE = function(e, t, o) {
    e >>>= 0, t >>>= 0, o || R(e, t, this.length);
    let r = t,
      s = 1,
      i = this[e + --r];
    for (; r > 0 && (s *= 256);) i += this[e + --r] * s;
    return s *= 128, i >= s && (i -= Math.pow(2, 8 * t)), i
  }, n.prototype.readInt8 = function(e, t) {
    return e >>>= 0, t || R(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
  }, n.prototype.readInt16LE = function(e, t) {
    e >>>= 0, t || R(e, 2, this.length);
    const o = this[e] | this[e + 1] << 8;
    return 32768 & o ? 4294901760 | o : o
  }, n.prototype.readInt16BE = function(e, t) {
    e >>>= 0, t || R(e, 2, this.length);
    const o = this[e + 1] | this[e] << 8;
    return 32768 & o ? 4294901760 | o : o
  }, n.prototype.readInt32LE = function(e, t) {
    return e >>>= 0, t || R(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
  }, n.prototype.readInt32BE = function(e, t) {
    return e >>>= 0, t || R(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
  }, n.prototype.readBigInt64LE = J(function(e) {
    U(e >>>= 0, "offset");
    const t = this[e],
      o = this[e + 7];
    void 0 !== t && void 0 !== o || q(e, this.length - 8);
    const r = this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (o << 24);
    return (BigInt(r) << BigInt(32)) + BigInt(t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24)
  }), n.prototype.readBigInt64BE = J(function(e) {
    U(e >>>= 0, "offset");
    const t = this[e],
      o = this[e + 7];
    void 0 !== t && void 0 !== o || q(e, this.length - 8);
    const r = (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e];
    return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + o)
  }), n.prototype.readFloatLE = function(e, t) {
    return e >>>= 0, t || R(e, 4, this.length), o.read(this, e, !0, 23, 4)
  }, n.prototype.readFloatBE = function(e, t) {
    return e >>>= 0, t || R(e, 4, this.length), o.read(this, e, !1, 23, 4)
  }, n.prototype.readDoubleLE = function(e, t) {
    return e >>>= 0, t || R(e, 8, this.length), o.read(this, e, !0, 52, 8)
  }, n.prototype.readDoubleBE = function(e, t) {
    return e >>>= 0, t || R(e, 8, this.length), o.read(this, e, !1, 52, 8)
  }, n.prototype.writeUintLE = n.prototype.writeUIntLE = function(e, t, o, r) {
    e = +e, t >>>= 0, o >>>= 0, r || I(this, e, t, o, Math.pow(2, 8 * o) - 1, 0);
    let s = 1,
      i = 0;
    for (this[t] = 255 & e; ++i < o && (s *= 256);) this[t + i] = e / s & 255;
    return t + o
  }, n.prototype.writeUintBE = n.prototype.writeUIntBE = function(e, t, o, r) {
    e = +e, t >>>= 0, o >>>= 0, r || I(this, e, t, o, Math.pow(2, 8 * o) - 1, 0);
    let s = o - 1,
      i = 1;
    for (this[t + s] = 255 & e; --s >= 0 && (i *= 256);) this[t + s] = e / i & 255;
    return t + o
  }, n.prototype.writeUint8 = n.prototype.writeUInt8 = function(e, t, o) {
    return e = +e, t >>>= 0, o || I(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
  }, n.prototype.writeUint16LE = n.prototype.writeUInt16LE = function(e, t, o) {
    return e = +e, t >>>= 0, o || I(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
  }, n.prototype.writeUint16BE = n.prototype.writeUInt16BE = function(e, t, o) {
    return e = +e, t >>>= 0, o || I(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
  }, n.prototype.writeUint32LE = n.prototype.writeUInt32LE = function(e, t, o) {
    return e = +e, t >>>= 0, o || I(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
  }, n.prototype.writeUint32BE = n.prototype.writeUInt32BE = function(e, t, o) {
    return e = +e, t >>>= 0, o || I(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
  }, n.prototype.writeBigUInt64LE = J(function(e, t = 0) {
    return S(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
  }), n.prototype.writeBigUInt64BE = J(function(e, t = 0) {
    return D(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
  }), n.prototype.writeIntLE = function(e, t, o, r) {
    if (e = +e, t >>>= 0, !r) {
      const r = Math.pow(2, 8 * o - 1);
      I(this, e, t, o, r - 1, -r)
    }
    let s = 0,
      i = 1,
      n = 0;
    for (this[t] = 255 & e; ++s < o && (i *= 256);) e < 0 && 0 === n && 0 !== this[t + s - 1] && (n = 1), this[t + s] = (e / i | 0) - n & 255;
    return t + o
  }, n.prototype.writeIntBE = function(e, t, o, r) {
    if (e = +e, t >>>= 0, !r) {
      const r = Math.pow(2, 8 * o - 1);
      I(this, e, t, o, r - 1, -r)
    }
    let s = o - 1,
      i = 1,
      n = 0;
    for (this[t + s] = 255 & e; --s >= 0 && (i *= 256);) e < 0 && 0 === n && 0 !== this[t + s + 1] && (n = 1), this[t + s] = (e / i | 0) - n & 255;
    return t + o
  }, n.prototype.writeInt8 = function(e, t, o) {
    return e = +e, t >>>= 0, o || I(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
  }, n.prototype.writeInt16LE = function(e, t, o) {
    return e = +e, t >>>= 0, o || I(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
  }, n.prototype.writeInt16BE = function(e, t, o) {
    return e = +e, t >>>= 0, o || I(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
  }, n.prototype.writeInt32LE = function(e, t, o) {
    return e = +e, t >>>= 0, o || I(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
  }, n.prototype.writeInt32BE = function(e, t, o) {
    return e = +e, t >>>= 0, o || I(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
  }, n.prototype.writeBigInt64LE = J(function(e, t = 0) {
    return S(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
  }), n.prototype.writeBigInt64BE = J(function(e, t = 0) {
    return D(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
  }), n.prototype.writeFloatLE = function(e, t, o) {
    return B(this, e, t, !0, o)
  }, n.prototype.writeFloatBE = function(e, t, o) {
    return B(this, e, t, !1, o)
  }, n.prototype.writeDoubleLE = function(e, t, o) {
    return z(this, e, t, !0, o)
  }, n.prototype.writeDoubleBE = function(e, t, o) {
    return z(this, e, t, !1, o)
  }, n.prototype.copy = function(e, t, o, r) {
    if (!n.isBuffer(e)) throw new TypeError("argument should be a Buffer");
    if (o || (o = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < o && (r = o), r === o) return 0;
    if (0 === e.length || 0 === this.length) return 0;
    if (t < 0) throw new RangeError("targetStart out of bounds");
    if (o < 0 || o >= this.length) throw new RangeError("Index out of range");
    if (r < 0) throw new RangeError("sourceEnd out of bounds");
    r > this.length && (r = this.length), e.length - t < r - o && (r = e.length - t + o);
    const s = r - o;
    return this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, o, r) : Uint8Array.prototype.set.call(e, this.subarray(o, r), t), s
  }, n.prototype.fill = function(e, t, o, r) {
    if ("string" == typeof e) {
      if ("string" == typeof t ? (r = t, t = 0, o = this.length) : "string" == typeof o && (r = o, o = this.length), void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
      if ("string" == typeof r && !n.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
      if (1 === e.length) {
        const t = e.charCodeAt(0);
        ("utf8" === r && t < 128 || "latin1" === r) && (e = t)
      }
    } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
    if (t < 0 || this.length < t || this.length < o) throw new RangeError("Out of range index");
    if (o <= t) return this;
    let s;
    if (t >>>= 0, o = void 0 === o ? this.length : o >>> 0, e || (e = 0), "number" == typeof e)
      for (s = t; s < o; ++s) this[s] = e;
    else {
      const i = n.isBuffer(e) ? e : n.from(e, r),
        a = i.length;
      if (0 === a) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
      for (s = 0; s < o - t; ++s) this[s + t] = i[s % a]
    }
    return this
  };
  const F = {};

  function V(e, t, o) {
    F[e] = class extends o {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: t.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${e}]`, this.stack, delete this.name
      }
      get code() {
        return e
      }
      set code(e) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: e,
          writable: !0
        })
      }
      toString() {
        return `${this.name} [${e}]: ${this.message}`
      }
    }
  }

  function N(e) {
    let t = "",
      o = e.length;
    const r = "-" === e[0] ? 1 : 0;
    for (; o >= r + 4; o -= 3) t = `_${e.slice(o-3,o)}${t}`;
    return `${e.slice(0,o)}${t}`
  }

  function M(e, t, o, r, s, i) {
    if (e > o || e < t) {
      const o = "bigint" == typeof t ? "n" : "";
      let r;
      throw r = 0 === t || t === BigInt(0) ? `>= 0${o} and < 2${o} ** ${8*(i+1)}${o}` : `>= -(2${o} ** ${8*(i+1)-1}${o}) and < 2 ** ${8*(i+1)-1}${o}`, new F.ERR_OUT_OF_RANGE("value", r, e)
    }! function(e, t, o) {
      U(t, "offset"), void 0 !== e[t] && void 0 !== e[t + o] || q(t, e.length - (o + 1))
    }(r, s, i)
  }

  function U(e, t) {
    if ("number" != typeof e) throw new F.ERR_INVALID_ARG_TYPE(t, "number", e)
  }

  function q(e, t, o) {
    if (Math.floor(e) !== e) throw U(e, o), new F.ERR_OUT_OF_RANGE("offset", "an integer", e);
    if (t < 0) throw new F.ERR_BUFFER_OUT_OF_BOUNDS;
    throw new F.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${t}`, e)
  }
  V("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
    return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
  }, RangeError), V("ERR_INVALID_ARG_TYPE", function(e, t) {
    return `The "${e}" argument must be of type number. Received type ${typeof t}`
  }, TypeError), V("ERR_OUT_OF_RANGE", function(e, t, o) {
    let r = `The value of "${e}" is out of range.`,
      s = o;
    return Number.isInteger(o) && Math.abs(o) > 2 ** 32 ? s = N(String(o)) : "bigint" == typeof o && (s = String(o), (o > BigInt(2) ** BigInt(32) || o < -(BigInt(2) ** BigInt(32))) && (s = N(s)), s += "n"), r += ` It must be ${t}. Received ${s}`, r
  }, RangeError);
  const W = /[^+/0-9A-Za-z-_]/g;

  function $(e, t) {
    let o;
    t = t || 1 / 0;
    const r = e.length;
    let s = null;
    const i = [];
    for (let n = 0; n < r; ++n) {
      if (o = e.charCodeAt(n), o > 55295 && o < 57344) {
        if (!s) {
          if (o > 56319) {
            (t -= 3) > -1 && i.push(239, 191, 189);
            continue
          }
          if (n + 1 === r) {
            (t -= 3) > -1 && i.push(239, 191, 189);
            continue
          }
          s = o;
          continue
        }
        if (o < 56320) {
          (t -= 3) > -1 && i.push(239, 191, 189), s = o;
          continue
        }
        o = 65536 + (s - 55296 << 10 | o - 56320)
      } else s && (t -= 3) > -1 && i.push(239, 191, 189);
      if (s = null, o < 128) {
        if ((t -= 1) < 0) break;
        i.push(o)
      } else if (o < 2048) {
        if ((t -= 2) < 0) break;
        i.push(o >> 6 | 192, 63 & o | 128)
      } else if (o < 65536) {
        if ((t -= 3) < 0) break;
        i.push(o >> 12 | 224, o >> 6 & 63 | 128, 63 & o | 128)
      } else {
        if (!(o < 1114112)) throw new Error("Invalid code point");
        if ((t -= 4) < 0) break;
        i.push(o >> 18 | 240, o >> 12 & 63 | 128, o >> 6 & 63 | 128, 63 & o | 128)
      }
    }
    return i
  }

  function H(e) {
    return t.toByteArray(function(e) {
      if ((e = (e = e.split("=")[0])
          .trim()
          .replace(W, ""))
        .length < 2) return "";
      for (; e.length % 4 != 0;) e += "=";
      return e
    }(e))
  }

  function Q(e, t, o, r) {
    let s;
    for (s = 0; s < r && !(s + o >= t.length || s >= e.length); ++s) t[s + o] = e[s];
    return s
  }

  function G(e, t) {
    return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
  }

  function K(e) {
    return e != e
  }
  const Y = function() {
    const e = "0123456789abcdef",
      t = new Array(256);
    for (let o = 0; o < 16; ++o) {
      const r = 16 * o;
      for (let s = 0; s < 16; ++s) t[r + s] = e[o] + e[s]
    }
    return t
  }();

  function J(e) {
    return "undefined" == typeof BigInt ? Z : e
  }

  function Z() {
    throw new Error("BigInt not supported")
  }
}(Cn)), Cn);
const {
  entries: Bn,
  setPrototypeOf: zn,
  isFrozen: Fn,
  getPrototypeOf: Vn,
  getOwnPropertyDescriptor: Nn
} = Object;
let {
  freeze: Mn,
  seal: Un,
  create: qn
} = Object, {
  apply: Wn,
  construct: $n
} = "undefined" != typeof Reflect && Reflect;
Mn || (Mn = function(e) {
  return e
}), Un || (Un = function(e) {
  return e
}), Wn || (Wn = function(e, t) {
  for (var o = arguments.length, r = new Array(o > 2 ? o - 2 : 0), s = 2; s < o; s++) r[s - 2] = arguments[s];
  return e.apply(t, r)
}), $n || ($n = function(e) {
  for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) o[r - 1] = arguments[r];
  return new e(...o)
});
const Hn = aa(Array.prototype.forEach),
  Qn = aa(Array.prototype.lastIndexOf),
  Gn = aa(Array.prototype.pop),
  Kn = aa(Array.prototype.push),
  Yn = aa(Array.prototype.splice),
  Jn = aa(String.prototype.toLowerCase),
  Zn = aa(String.prototype.toString),
  Xn = aa(String.prototype.match),
  ea = aa(String.prototype.replace),
  ta = aa(String.prototype.indexOf),
  oa = aa(String.prototype.trim),
  ra = aa(Object.prototype.hasOwnProperty),
  sa = aa(RegExp.prototype.test),
  ia = (na = TypeError, function() {
    for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
    return $n(na, t)
  });
var na;

function aa(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var o = arguments.length, r = new Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++) r[s - 1] = arguments[s];
    return Wn(e, t, r)
  }
}

function la(e, t) {
  let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Jn;
  zn && zn(e, null);
  let r = t.length;
  for (; r--;) {
    let s = t[r];
    if ("string" == typeof s) {
      const e = o(s);
      e !== s && (Fn(t) || (t[r] = e), s = e)
    }
    e[s] = !0
  }
  return e
}

function ca(e) {
  for (let t = 0; t < e.length; t++) {
    ra(e, t) || (e[t] = null)
  }
  return e
}

function da(e) {
  const t = qn(null);
  for (const [o, r] of Bn(e)) {
    ra(e, o) && (Array.isArray(r) ? t[o] = ca(r) : r && "object" == typeof r && r.constructor === Object ? t[o] = da(r) : t[o] = r)
  }
  return t
}

function pa(e, t) {
  for (; null !== e;) {
    const o = Nn(e, t);
    if (o) {
      if (o.get) return aa(o.get);
      if ("function" == typeof o.value) return aa(o.value)
    }
    e = Vn(e)
  }
  return function() {
    return null
  }
}
const ua = Mn(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
  fa = Mn(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
  ma = Mn(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
  ba = Mn(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
  ha = Mn(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]),
  ga = Mn(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
  _a = Mn(["#text"]),
  va = Mn(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]),
  ya = Mn(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
  ka = Mn(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
  xa = Mn(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
  Ea = Un(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
  wa = Un(/<%[\w\W]*|[\w\W]*%>/gm),
  Aa = Un(/\$\{[\w\W]*/gm),
  La = Un(/^data-[\-\w.\u00B7-\uFFFF]+$/),
  Pa = Un(/^aria-[\-\w]+$/),
  Ta = Un(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
  Oa = Un(/^(?:\w+script|data):/i),
  Ca = Un(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
  Ra = Un(/^html$/i),
  Ia = Un(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Sa = Object.freeze({
  __proto__: null,
  ARIA_ATTR: Pa,
  ATTR_WHITESPACE: Ca,
  CUSTOM_ELEMENT: Ia,
  DATA_ATTR: La,
  DOCTYPE_NAME: Ra,
  ERB_EXPR: wa,
  IS_ALLOWED_URI: Ta,
  IS_SCRIPT_OR_DATA: Oa,
  MUSTACHE_EXPR: Ea,
  TMPLIT_EXPR: Aa
});
const Da = 1,
  ja = 3,
  Ba = 7,
  za = 8,
  Fa = 9;
var Va = function e() {
  let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "undefined" == typeof window ? null : window;
  const o = t => e(t);
  if (o.version = "3.3.1", o.removed = [], !t || !t.document || t.document.nodeType !== Fa || !t.Element) return o.isSupported = !1, o;
  let {
    document: r
  } = t;
  const s = r,
    i = s.currentScript,
    {
      DocumentFragment: n,
      HTMLTemplateElement: a,
      Node: l,
      Element: c,
      NodeFilter: d,
      NamedNodeMap: p = t.NamedNodeMap || t.MozNamedAttrMap,
      HTMLFormElement: u,
      DOMParser: f,
      trustedTypes: m
    } = t,
    b = c.prototype,
    g = pa(b, "cloneNode"),
    _ = pa(b, "remove"),
    v = pa(b, "nextSibling"),
    y = pa(b, "childNodes"),
    k = pa(b, "parentNode");
  if ("function" == typeof a) {
    const e = r.createElement("template");
    e.content && e.content.ownerDocument && (r = e.content.ownerDocument)
  }
  let x, E = "";
  const {
    implementation: w,
    createNodeIterator: A,
    createDocumentFragment: L,
    getElementsByTagName: P
  } = r, {
    importNode: T
  } = s;
  let O = {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
  o.isSupported = "function" == typeof Bn && "function" == typeof k && w && void 0 !== w.createHTMLDocument;
  const {
    MUSTACHE_EXPR: C,
    ERB_EXPR: R,
    TMPLIT_EXPR: I,
    DATA_ATTR: S,
    ARIA_ATTR: D,
    IS_SCRIPT_OR_DATA: j,
    ATTR_WHITESPACE: B,
    CUSTOM_ELEMENT: z
  } = Sa;
  let {
    IS_ALLOWED_URI: F
  } = Sa, V = null;
  const N = la({}, [...ua, ...fa, ...ma, ...ha, ..._a]);
  let M = null;
  const U = la({}, [...va, ...ya, ...ka, ...xa]);
  let q = Object.seal(qn(null, {
      tagNameCheck: {
        writable: !0,
        configurable: !1,
        enumerable: !0,
        value: null
      },
      attributeNameCheck: {
        writable: !0,
        configurable: !1,
        enumerable: !0,
        value: null
      },
      allowCustomizedBuiltInElements: {
        writable: !0,
        configurable: !1,
        enumerable: !0,
        value: !1
      }
    })),
    W = null,
    $ = null;
  const H = Object.seal(qn(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let Q = !0,
    G = !0,
    K = !1,
    Y = !0,
    J = !1,
    Z = !0,
    X = !1,
    ee = !1,
    te = !1,
    oe = !1,
    re = !1,
    se = !1,
    ie = !0,
    ne = !1,
    ae = !0,
    le = !1,
    ce = {},
    de = null;
  const pe = la({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let ue = null;
  const fe = la({}, ["audio", "video", "img", "source", "image", "track"]);
  let me = null;
  const be = la({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
    he = "http://www.w3.org/1998/Math/MathML",
    ge = "http://www.w3.org/2000/svg",
    _e = "http://www.w3.org/1999/xhtml";
  let ve = _e,
    ye = !1,
    ke = null;
  const xe = la({}, [he, ge, _e], Zn);
  let Ee = la({}, ["mi", "mo", "mn", "ms", "mtext"]),
    we = la({}, ["annotation-xml"]);
  const Ae = la({}, ["title", "style", "font", "a", "script"]);
  let Le = null;
  const Pe = ["application/xhtml+xml", "text/html"];
  let Te = null,
    Oe = null;
  const Ce = r.createElement("form"),
    Re = function(e) {
      return e instanceof RegExp || e instanceof Function
    },
    Ie = function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (!Oe || Oe !== e) {
        if (e && "object" == typeof e || (e = {}), e = da(e), Le = -1 === Pe.indexOf(e.PARSER_MEDIA_TYPE) ? "text/html" : e.PARSER_MEDIA_TYPE, Te = "application/xhtml+xml" === Le ? Zn : Jn, V = ra(e, "ALLOWED_TAGS") ? la({}, e.ALLOWED_TAGS, Te) : N, M = ra(e, "ALLOWED_ATTR") ? la({}, e.ALLOWED_ATTR, Te) : U, ke = ra(e, "ALLOWED_NAMESPACES") ? la({}, e.ALLOWED_NAMESPACES, Zn) : xe, me = ra(e, "ADD_URI_SAFE_ATTR") ? la(da(be), e.ADD_URI_SAFE_ATTR, Te) : be, ue = ra(e, "ADD_DATA_URI_TAGS") ? la(da(fe), e.ADD_DATA_URI_TAGS, Te) : fe, de = ra(e, "FORBID_CONTENTS") ? la({}, e.FORBID_CONTENTS, Te) : pe, W = ra(e, "FORBID_TAGS") ? la({}, e.FORBID_TAGS, Te) : da({}), $ = ra(e, "FORBID_ATTR") ? la({}, e.FORBID_ATTR, Te) : da({}), ce = !!ra(e, "USE_PROFILES") && e.USE_PROFILES, Q = !1 !== e.ALLOW_ARIA_ATTR, G = !1 !== e.ALLOW_DATA_ATTR, K = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Y = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR, J = e.SAFE_FOR_TEMPLATES || !1, Z = !1 !== e.SAFE_FOR_XML, X = e.WHOLE_DOCUMENT || !1, oe = e.RETURN_DOM || !1, re = e.RETURN_DOM_FRAGMENT || !1, se = e.RETURN_TRUSTED_TYPE || !1, te = e.FORCE_BODY || !1, ie = !1 !== e.SANITIZE_DOM, ne = e.SANITIZE_NAMED_PROPS || !1, ae = !1 !== e.KEEP_CONTENT, le = e.IN_PLACE || !1, F = e.ALLOWED_URI_REGEXP || Ta, ve = e.NAMESPACE || _e, Ee = e.MATHML_TEXT_INTEGRATION_POINTS || Ee, we = e.HTML_INTEGRATION_POINTS || we, q = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && Re(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (q.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && Re(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (q.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (q.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), J && (G = !1), re && (oe = !0), ce && (V = la({}, _a), M = [], !0 === ce.html && (la(V, ua), la(M, va)), !0 === ce.svg && (la(V, fa), la(M, ya), la(M, xa)), !0 === ce.svgFilters && (la(V, ma), la(M, ya), la(M, xa)), !0 === ce.mathMl && (la(V, ha), la(M, ka), la(M, xa))), e.ADD_TAGS && ("function" == typeof e.ADD_TAGS ? H.tagCheck = e.ADD_TAGS : (V === N && (V = da(V)), la(V, e.ADD_TAGS, Te))), e.ADD_ATTR && ("function" == typeof e.ADD_ATTR ? H.attributeCheck = e.ADD_ATTR : (M === U && (M = da(M)), la(M, e.ADD_ATTR, Te))), e.ADD_URI_SAFE_ATTR && la(me, e.ADD_URI_SAFE_ATTR, Te), e.FORBID_CONTENTS && (de === pe && (de = da(de)), la(de, e.FORBID_CONTENTS, Te)), e.ADD_FORBID_CONTENTS && (de === pe && (de = da(de)), la(de, e.ADD_FORBID_CONTENTS, Te)), ae && (V["#text"] = !0), X && la(V, ["html", "head", "body"]), V.table && (la(V, ["tbody"]), delete W.tbody), e.TRUSTED_TYPES_POLICY) {
          if ("function" != typeof e.TRUSTED_TYPES_POLICY.createHTML) throw ia('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
          if ("function" != typeof e.TRUSTED_TYPES_POLICY.createScriptURL) throw ia('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
          x = e.TRUSTED_TYPES_POLICY, E = x.createHTML("")
        } else void 0 === x && (x = function(e, t) {
          if ("object" != typeof e || "function" != typeof e.createPolicy) return null;
          let o = null;
          const r = "data-tt-policy-suffix";
          t && t.hasAttribute(r) && (o = t.getAttribute(r));
          const s = "dompurify" + (o ? "#" + o : "");
          try {
            return e.createPolicy(s, {
              createHTML: e => e,
              createScriptURL: e => e
            })
          } catch (i) {
            return console.warn("TrustedTypes policy " + s + " could not be created."), null
          }
        }(m, i)), null !== x && "string" == typeof E && (E = x.createHTML(""));
        Mn && Mn(e), Oe = e
      }
    },
    Se = la({}, [...fa, ...ma, ...ba]),
    De = la({}, [...ha, ...ga]),
    je = function(e) {
      Kn(o.removed, {
        element: e
      });
      try {
        k(e)
          .removeChild(e)
      } catch (t) {
        _(e)
      }
    },
    Be = function(e, t) {
      try {
        Kn(o.removed, {
          attribute: t.getAttributeNode(e),
          from: t
        })
      } catch (r) {
        Kn(o.removed, {
          attribute: null,
          from: t
        })
      }
      if (t.removeAttribute(e), "is" === e)
        if (oe || re) try {
          je(t)
        } catch (r) {} else try {
          t.setAttribute(e, "")
        } catch (r) {}
    },
    ze = function(e) {
      let t = null,
        o = null;
      if (te) e = "<remove></remove>" + e;
      else {
        const t = Xn(e, /^[\r\n\t ]+/);
        o = t && t[0]
      }
      "application/xhtml+xml" === Le && ve === _e && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
      const s = x ? x.createHTML(e) : e;
      if (ve === _e) try {
        t = (new f)
          .parseFromString(s, Le)
      } catch (n) {}
      if (!t || !t.documentElement) {
        t = w.createDocument(ve, "template", null);
        try {
          t.documentElement.innerHTML = ye ? E : s
        } catch (n) {}
      }
      const i = t.body || t.documentElement;
      return e && o && i.insertBefore(r.createTextNode(o), i.childNodes[0] || null), ve === _e ? P.call(t, X ? "html" : "body")[0] : X ? t.documentElement : i
    },
    Fe = function(e) {
      return A.call(e.ownerDocument || e, e, d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION, null)
    },
    Ve = function(e) {
      return e instanceof u && ("string" != typeof e.nodeName || "string" != typeof e.textContent || "function" != typeof e.removeChild || !(e.attributes instanceof p) || "function" != typeof e.removeAttribute || "function" != typeof e.setAttribute || "string" != typeof e.namespaceURI || "function" != typeof e.insertBefore || "function" != typeof e.hasChildNodes)
    },
    Ne = function(e) {
      return "function" == typeof l && e instanceof l
    };

  function Me(e, t, r) {
    Hn(e, e => {
      e.call(o, t, r, Oe)
    })
  }
  const Ue = function(e) {
      let t = null;
      if (Me(O.beforeSanitizeElements, e, null), Ve(e)) return je(e), !0;
      const r = Te(e.nodeName);
      if (Me(O.uponSanitizeElement, e, {
          tagName: r,
          allowedTags: V
        }), Z && e.hasChildNodes() && !Ne(e.firstElementChild) && sa(/<[/\w!]/g, e.innerHTML) && sa(/<[/\w!]/g, e.textContent)) return je(e), !0;
      if (e.nodeType === Ba) return je(e), !0;
      if (Z && e.nodeType === za && sa(/<[/\w]/g, e.data)) return je(e), !0;
      if (!(H.tagCheck instanceof Function && H.tagCheck(r)) && (!V[r] || W[r])) {
        if (!W[r] && We(r)) {
          if (q.tagNameCheck instanceof RegExp && sa(q.tagNameCheck, r)) return !1;
          if (q.tagNameCheck instanceof Function && q.tagNameCheck(r)) return !1
        }
        if (ae && !de[r]) {
          const t = k(e) || e.parentNode,
            o = y(e) || e.childNodes;
          if (o && t) {
            for (let r = o.length - 1; r >= 0; --r) {
              const s = g(o[r], !0);
              s.__removalCount = (e.__removalCount || 0) + 1, t.insertBefore(s, v(e))
            }
          }
        }
        return je(e), !0
      }
      return e instanceof c && ! function(e) {
        let t = k(e);
        t && t.tagName || (t = {
          namespaceURI: ve,
          tagName: "template"
        });
        const o = Jn(e.tagName),
          r = Jn(t.tagName);
        return !!ke[e.namespaceURI] && (e.namespaceURI === ge ? t.namespaceURI === _e ? "svg" === o : t.namespaceURI === he ? "svg" === o && ("annotation-xml" === r || Ee[r]) : Boolean(Se[o]) : e.namespaceURI === he ? t.namespaceURI === _e ? "math" === o : t.namespaceURI === ge ? "math" === o && we[r] : Boolean(De[o]) : e.namespaceURI === _e ? !(t.namespaceURI === ge && !we[r]) && !(t.namespaceURI === he && !Ee[r]) && !De[o] && (Ae[o] || !Se[o]) : !("application/xhtml+xml" !== Le || !ke[e.namespaceURI]))
      }(e) ? (je(e), !0) : "noscript" !== r && "noembed" !== r && "noframes" !== r || !sa(/<\/no(script|embed|frames)/i, e.innerHTML) ? (J && e.nodeType === ja && (t = e.textContent, Hn([C, R, I], e => {
        t = ea(t, e, " ")
      }), e.textContent !== t && (Kn(o.removed, {
        element: e.cloneNode()
      }), e.textContent = t)), Me(O.afterSanitizeElements, e, null), !1) : (je(e), !0)
    },
    qe = function(e, t, o) {
      if (ie && ("id" === t || "name" === t) && (o in r || o in Ce)) return !1;
      if (G && !$[t] && sa(S, t));
      else if (Q && sa(D, t));
      else if (H.attributeCheck instanceof Function && H.attributeCheck(t, e));
      else if (!M[t] || $[t]) {
        if (!(We(e) && (q.tagNameCheck instanceof RegExp && sa(q.tagNameCheck, e) || q.tagNameCheck instanceof Function && q.tagNameCheck(e)) && (q.attributeNameCheck instanceof RegExp && sa(q.attributeNameCheck, t) || q.attributeNameCheck instanceof Function && q.attributeNameCheck(t, e)) || "is" === t && q.allowCustomizedBuiltInElements && (q.tagNameCheck instanceof RegExp && sa(q.tagNameCheck, o) || q.tagNameCheck instanceof Function && q.tagNameCheck(o)))) return !1
      } else if (me[t]);
      else if (sa(F, ea(o, B, "")));
      else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== ta(o, "data:") || !ue[e]) {
        if (K && !sa(j, ea(o, B, "")));
        else if (o) return !1
      } else;
      return !0
    },
    We = function(e) {
      return "annotation-xml" !== e && Xn(e, z)
    },
    $e = function(e) {
      Me(O.beforeSanitizeAttributes, e, null);
      const {
        attributes: t
      } = e;
      if (!t || Ve(e)) return;
      const r = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: M,
        forceKeepAttr: void 0
      };
      let s = t.length;
      for (; s--;) {
        const n = t[s],
          {
            name: a,
            namespaceURI: l,
            value: c
          } = n,
          d = Te(a),
          p = c;
        let u = "value" === a ? p : oa(p);
        if (r.attrName = d, r.attrValue = u, r.keepAttr = !0, r.forceKeepAttr = void 0, Me(O.uponSanitizeAttribute, e, r), u = r.attrValue, !ne || "id" !== d && "name" !== d || (Be(a, e), u = "user-content-" + u), Z && sa(/((--!?|])>)|<\/(style|title|textarea)/i, u)) {
          Be(a, e);
          continue
        }
        if ("attributename" === d && Xn(u, "href")) {
          Be(a, e);
          continue
        }
        if (r.forceKeepAttr) continue;
        if (!r.keepAttr) {
          Be(a, e);
          continue
        }
        if (!Y && sa(/\/>/i, u)) {
          Be(a, e);
          continue
        }
        J && Hn([C, R, I], e => {
          u = ea(u, e, " ")
        });
        const f = Te(e.nodeName);
        if (qe(f, d, u)) {
          if (x && "object" == typeof m && "function" == typeof m.getAttributeType)
            if (l);
            else switch (m.getAttributeType(f, d)) {
              case "TrustedHTML":
                u = x.createHTML(u);
                break;
              case "TrustedScriptURL":
                u = x.createScriptURL(u)
            }
          if (u !== p) try {
            l ? e.setAttributeNS(l, a, u) : e.setAttribute(a, u), Ve(e) ? je(e) : Gn(o.removed)
          } catch (i) {
            Be(a, e)
          }
        } else Be(a, e)
      }
      Me(O.afterSanitizeAttributes, e, null)
    },
    He = function e(t) {
      let o = null;
      const r = Fe(t);
      for (Me(O.beforeSanitizeShadowDOM, t, null); o = r.nextNode();) Me(O.uponSanitizeShadowNode, o, null), Ue(o), $e(o), o.content instanceof n && e(o.content);
      Me(O.afterSanitizeShadowDOM, t, null)
    };
  return o.sanitize = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      r = null,
      i = null,
      a = null,
      c = null;
    if (ye = !e, ye && (e = "<!-->"), "string" != typeof e && !Ne(e)) {
      if ("function" != typeof e.toString) throw ia("toString is not a function");
      if ("string" != typeof(e = e.toString())) throw ia("dirty is not a string, aborting")
    }
    if (!o.isSupported) return e;
    if (ee || Ie(t), o.removed = [], "string" == typeof e && (le = !1), le) {
      if (e.nodeName) {
        const t = Te(e.nodeName);
        if (!V[t] || W[t]) throw ia("root node is forbidden and cannot be sanitized in-place")
      }
    } else if (e instanceof l) r = ze("<!---->"), i = r.ownerDocument.importNode(e, !0), i.nodeType === Da && "BODY" === i.nodeName || "HTML" === i.nodeName ? r = i : r.appendChild(i);
    else {
      if (!oe && !J && !X && -1 === e.indexOf("<")) return x && se ? x.createHTML(e) : e;
      if (r = ze(e), !r) return oe ? null : se ? E : ""
    }
    r && te && je(r.firstChild);
    const d = Fe(le ? e : r);
    for (; a = d.nextNode();) Ue(a), $e(a), a.content instanceof n && He(a.content);
    if (le) return e;
    if (oe) {
      if (re)
        for (c = L.call(r.ownerDocument); r.firstChild;) c.appendChild(r.firstChild);
      else c = r;
      return (M.shadowroot || M.shadowrootmode) && (c = T.call(s, c, !0)), c
    }
    let p = X ? r.outerHTML : r.innerHTML;
    return X && V["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && sa(Ra, r.ownerDocument.doctype.name) && (p = "<!DOCTYPE " + r.ownerDocument.doctype.name + ">\n" + p), J && Hn([C, R, I], e => {
      p = ea(p, e, " ")
    }), x && se ? x.createHTML(p) : p
  }, o.setConfig = function() {
    Ie(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}), ee = !0
  }, o.clearConfig = function() {
    Oe = null, ee = !1
  }, o.isValidAttribute = function(e, t, o) {
    Oe || Ie({});
    const r = Te(e),
      s = Te(t);
    return qe(r, s, o)
  }, o.addHook = function(e, t) {
    "function" == typeof t && Kn(O[e], t)
  }, o.removeHook = function(e, t) {
    if (void 0 !== t) {
      const o = Qn(O[e], t);
      return -1 === o ? void 0 : Yn(O[e], o, 1)[0]
    }
    return Gn(O[e])
  }, o.removeHooks = function(e) {
    O[e] = []
  }, o.removeAllHooks = function() {
    O = {
      afterSanitizeAttributes: [],
      afterSanitizeElements: [],
      afterSanitizeShadowDOM: [],
      beforeSanitizeAttributes: [],
      beforeSanitizeElements: [],
      beforeSanitizeShadowDOM: [],
      uponSanitizeAttribute: [],
      uponSanitizeElement: [],
      uponSanitizeShadowNode: []
    }
  }, o
}();
const Na = {};
Va.addHook("afterSanitizeAttributes", e => {
  "target" in e && e instanceof HTMLElement && (e.setAttribute("target", "_blank"), e.setAttribute("rel", "noopener"))
});
const Ma = (e, t) => {
    e.innerHTML = ((e, t = Na) => Va.sanitize(e, t))(t.value)
  },
  Ua = {
    mounted: Ma,
    updated: Ma
  },
  qa = () => ({
    getLocale: () => xn("lidl_locale") ?? (() => {
      try {
        if (window?.__pca?.cfg?.locale) return window.__pca.cfg.locale;
        if (window?.mindShiftNav?.locale) return window?.mindShiftNav?.locale;
        if (window?.mindShiftNav?.language && window?.mindShiftNav?.country) return `${window.mindShiftNav.language}-${window.mindShiftNav.country}`
      } catch (q_) {
        console.error(`Unable to get locale from window.mindShiftNav: ${q_}`)
      }
      return null
    })() ?? "de-DE"
  }),
  Wa = Object.assign({
    "../../pca-configs/config/cs-CZ_dev.json": () => t(() => import("./cs-CZ_dev-CSCJn4sp.js"), []),
    "../../pca-configs/config/cs-CZ_prod.json": () => t(() => import("./cs-CZ_prod-BCVAqmQC.js"), []),
    "../../pca-configs/config/cs-CZ_qa.json": () => t(() => import("./cs-CZ_qa-2cSrc-RL.js"), []),
    "../../pca-configs/config/cs-CZ_test.json": () => t(() => import("./cs-CZ_test-OpHyerrA.js"), []),
    "../../pca-configs/config/de-DE_dev.json": () => t(() => import("./de-DE_dev-CaVNXkSZ.js"), []),
    "../../pca-configs/config/de-DE_prod.json": () => t(() => import("./de-DE_prod-CWd2SMES.js"), []),
    "../../pca-configs/config/de-DE_qa.json": () => t(() => import("./de-DE_qa-CciYMxGe.js"), []),
    "../../pca-configs/config/de-DE_test.json": () => t(() => import("./de-DE_test-D6iTQR0Q.js"), []),
    "../../pca-configs/config/es-ES_dev.json": () => t(() => import("./es-ES_dev-DOTRsogK.js"), []),
    "../../pca-configs/config/es-ES_prod.json": () => t(() => import("./es-ES_prod-7w-gRI9g.js"), []),
    "../../pca-configs/config/es-ES_qa.json": () => t(() => import("./es-ES_qa-BikQQX6d.js"), []),
    "../../pca-configs/config/es-ES_test.json": () => t(() => import("./es-ES_test-BvLSma1z.js"), []),
    "../../pca-configs/config/fr-BE_dev.json": () => t(() => import("./fr-BE_dev-Dc-1Zjno.js"), []),
    "../../pca-configs/config/fr-BE_prod.json": () => t(() => import("./fr-BE_prod-DyqhvP8g.js"), []),
    "../../pca-configs/config/fr-BE_qa.json": () => t(() => import("./fr-BE_qa-C299YIGW.js"), []),
    "../../pca-configs/config/fr-BE_test.json": () => t(() => import("./fr-BE_test-xeZ0TxeT.js"), []),
    "../../pca-configs/config/fr-FR_dev.json": () => t(() => import("./fr-FR_dev--m-9M8B_.js"), []),
    "../../pca-configs/config/fr-FR_prod.json": () => t(() => import("./fr-FR_prod-AyCHSR-5.js"), []),
    "../../pca-configs/config/fr-FR_qa.json": () => t(() => import("./fr-FR_qa-BniAITYY.js"), []),
    "../../pca-configs/config/fr-FR_test.json": () => t(() => import("./fr-FR_test-D6fZRSEw.js"), []),
    "../../pca-configs/config/nl-BE_dev.json": () => t(() => import("./nl-BE_dev-Dn1fvIlc.js"), []),
    "../../pca-configs/config/nl-BE_prod.json": () => t(() => import("./nl-BE_prod-D41rQMhx.js"), []),
    "../../pca-configs/config/nl-BE_qa.json": () => t(() => import("./nl-BE_qa-BJOG146j.js"), []),
    "../../pca-configs/config/nl-BE_test.json": () => t(() => import("./nl-BE_test-CdT5-sEW.js"), []),
    "../../pca-configs/config/nl-NL_dev.json": () => t(() => import("./nl-NL_dev-BHhIMV0C.js"), []),
    "../../pca-configs/config/nl-NL_prod.json": () => t(() => import("./nl-NL_prod-2BdpMfQz.js"), []),
    "../../pca-configs/config/nl-NL_qa.json": () => t(() => import("./nl-NL_qa-aAk9DYC6.js"), []),
    "../../pca-configs/config/nl-NL_test.json": () => t(() => import("./nl-NL_test-OxzRVGx5.js"), []),
    "../../pca-configs/config/pl-PL_dev.json": () => t(() => import("./pl-PL_dev-BCVL7fwo.js"), []),
    "../../pca-configs/config/pl-PL_prod.json": () => t(() => import("./pl-PL_prod-rqck19mn.js"), []),
    "../../pca-configs/config/pl-PL_qa.json": () => t(() => import("./pl-PL_qa-DU8WjUbm.js"), []),
    "../../pca-configs/config/pl-PL_test.json": () => t(() => import("./pl-PL_test--vPk0aJp.js"), []),
    "../../pca-configs/config/sk-SK_dev.json": () => t(() => import("./sk-SK_dev-C-0LrkWQ.js"), []),
    "../../pca-configs/config/sk-SK_prod.json": () => t(() => import("./sk-SK_prod-DYRZksqY.js"), []),
    "../../pca-configs/config/sk-SK_qa.json": () => t(() => import("./sk-SK_qa-D_XpmsZx.js"), []),
    "../../pca-configs/config/sk-SK_test.json": () => t(() => import("./sk-SK_test-DjQcoyDH.js"), [])
  }),
  $a = At(),
  Ha = () => {
    const {
      getLocale: e
    } = qa(), {
      getEnvironment: t
    } = kn(), o = e(), r = t(), s = e => {
      $a.value = Object.freeze({
        ...e
      })
    }, i = async () => {
      const e = (window?.__pca?.cfg ? {
        ...window.__pca.cfg
      } : null) ?? await (async e => {
        try {
          const t = Object.keys(Wa)
            .find(t => t.endsWith(e));
          if (!t) throw new Error(`configs: no config file found for locale ${o} and environment ${r}`);
          return (await Wa[t]())
            .default
        } catch (q_) {
          console.error(`configs: error loading configs for locale ${o} and environment ${r}`, q_)
        }
        return null
      })(`/${o}_${r}.json`);
      return e ? (s(e), !0) : (console.error(`configs: no configs found for locale ${o} and environment ${r}`), !1)
    };
    return void 0 === window.__pca?.isConfigInitialized && ((window.__pca ??= {})
      .isConfigInitialized = i()), {
      configs: $a,
      init: async () => await (window.__pca?.isConfigInitialized),
      _updateConfig: s
    }
  },
  Qa = Object.assign({
    "../../pca-configs/feature-toggles/cs-CZ_dev.json": () => t(() => import("./cs-CZ_dev-CTMV9chs.js"), []),
    "../../pca-configs/feature-toggles/cs-CZ_prod.json": () => t(() => import("./cs-CZ_prod-D0g8qqUO.js"), []),
    "../../pca-configs/feature-toggles/cs-CZ_qa.json": () => t(() => import("./cs-CZ_qa-D0g8qqUO.js"), []),
    "../../pca-configs/feature-toggles/cs-CZ_test.json": () => t(() => import("./cs-CZ_test-D0g8qqUO.js"), []),
    "../../pca-configs/feature-toggles/de-DE_dev.json": () => t(() => import("./de-DE_dev-UhyZ27jE.js"), []),
    "../../pca-configs/feature-toggles/de-DE_prod.json": () => t(() => import("./de-DE_prod-BVYHOtco.js"), []),
    "../../pca-configs/feature-toggles/de-DE_qa.json": () => t(() => import("./de-DE_qa-DNzdNCMH.js"), []),
    "../../pca-configs/feature-toggles/de-DE_test.json": () => t(() => import("./de-DE_test-DobX3Vtb.js"), []),
    "../../pca-configs/feature-toggles/es-ES_dev.json": () => t(() => import("./es-ES_dev-yXAXeQt0.js"), []),
    "../../pca-configs/feature-toggles/es-ES_prod.json": () => t(() => import("./es-ES_prod-yXAXeQt0.js"), []),
    "../../pca-configs/feature-toggles/es-ES_qa.json": () => t(() => import("./es-ES_qa-yXAXeQt0.js"), []),
    "../../pca-configs/feature-toggles/es-ES_test.json": () => t(() => import("./es-ES_test-yXAXeQt0.js"), []),
    "../../pca-configs/feature-toggles/fr-BE_dev.json": () => t(() => import("./fr-BE_dev-BrSJh2c9.js"), []),
    "../../pca-configs/feature-toggles/fr-BE_prod.json": () => t(() => import("./fr-BE_prod-BrSJh2c9.js"), []),
    "../../pca-configs/feature-toggles/fr-BE_qa.json": () => t(() => import("./fr-BE_qa-BrSJh2c9.js"), []),
    "../../pca-configs/feature-toggles/fr-BE_test.json": () => t(() => import("./fr-BE_test-BrSJh2c9.js"), []),
    "../../pca-configs/feature-toggles/fr-FR_dev.json": () => t(() => import("./fr-FR_dev-CcX3Kl3V.js"), []),
    "../../pca-configs/feature-toggles/fr-FR_prod.json": () => t(() => import("./fr-FR_prod-CcX3Kl3V.js"), []),
    "../../pca-configs/feature-toggles/fr-FR_qa.json": () => t(() => import("./fr-FR_qa-CcX3Kl3V.js"), []),
    "../../pca-configs/feature-toggles/fr-FR_test.json": () => t(() => import("./fr-FR_test-CcX3Kl3V.js"), []),
    "../../pca-configs/feature-toggles/nl-BE_dev.json": () => t(() => import("./nl-BE_dev-BrSJh2c9.js"), []),
    "../../pca-configs/feature-toggles/nl-BE_prod.json": () => t(() => import("./nl-BE_prod-BrSJh2c9.js"), []),
    "../../pca-configs/feature-toggles/nl-BE_qa.json": () => t(() => import("./nl-BE_qa-BrSJh2c9.js"), []),
    "../../pca-configs/feature-toggles/nl-BE_test.json": () => t(() => import("./nl-BE_test-BrSJh2c9.js"), []),
    "../../pca-configs/feature-toggles/nl-NL_dev.json": () => t(() => import("./nl-NL_dev-3LDZbF7Z.js"), []),
    "../../pca-configs/feature-toggles/nl-NL_prod.json": () => t(() => import("./nl-NL_prod-CC554ey0.js"), []),
    "../../pca-configs/feature-toggles/nl-NL_qa.json": () => t(() => import("./nl-NL_qa-CC554ey0.js"), []),
    "../../pca-configs/feature-toggles/nl-NL_test.json": () => t(() => import("./nl-NL_test-CC554ey0.js"), []),
    "../../pca-configs/feature-toggles/pl-PL_dev.json": () => t(() => import("./pl-PL_dev-SIXjvIlC.js"), []),
    "../../pca-configs/feature-toggles/pl-PL_prod.json": () => t(() => import("./pl-PL_prod-SIXjvIlC.js"), []),
    "../../pca-configs/feature-toggles/pl-PL_qa.json": () => t(() => import("./pl-PL_qa-SIXjvIlC.js"), []),
    "../../pca-configs/feature-toggles/pl-PL_test.json": () => t(() => import("./pl-PL_test-SIXjvIlC.js"), []),
    "../../pca-configs/feature-toggles/sk-SK_dev.json": () => t(() => import("./sk-SK_dev-DXGsUvfG.js"), []),
    "../../pca-configs/feature-toggles/sk-SK_prod.json": () => t(() => import("./sk-SK_prod-DXGsUvfG.js"), []),
    "../../pca-configs/feature-toggles/sk-SK_qa.json": () => t(() => import("./sk-SK_qa-DXGsUvfG.js"), []),
    "../../pca-configs/feature-toggles/sk-SK_test.json": () => t(() => import("./sk-SK_test-DXGsUvfG.js"), [])
  }),
  Ga = At(),
  Ka = () => {
    const {
      getLocale: e
    } = qa(), {
      getEnvironment: t
    } = kn(), o = e(), r = t(), s = async () => {
      const e = (window?.__pca?.featureToggles ? Object.freeze({
        ...window.__pca.featureToggles
      }) : null) ?? await (async e => {
        try {
          const t = Object.keys(Qa)
            .find(t => t.endsWith(e));
          if (!t) throw new Error(`feature-toggles: no feature-toggles file found for locale ${o} and environment ${r}`);
          return Object.freeze((await Qa[t]())
            .default)
        } catch (q_) {
          console.error(`feature-toggles: error loading feature-toggles for locale ${o} and environment ${r}`, q_)
        }
        return null
      })(`/${o}_${r}.json`);
      return e ? (Ga.value = e, !0) : (console.error(`feature-toggles: no toggles found for locale ${o} and environment ${r}`), !1)
    }, i = e => !0 === Ga.value?.[e];
    return void 0 === window.__pca?.isFeatureTogglesInitialized && ((window.__pca ??= {})
      .isFeatureTogglesInitialized = s()), {
      featureToggles: Ga,
      isFeatureEnabled: i,
      isFeatureDisabled: e => !i(e),
      isFeatureEnabledOneOf: e => {
        for (const t of e)
          if (i(t)) return !0;
        return !1
      },
      init: async () => await (window.__pca?.isFeatureTogglesInitialized)
    }
  };

function Ya(e, t) {
  "undefined" != typeof console && (console.warn("[intlify] " + e), t && console.warn(t.stack))
}
const Ja = "undefined" != typeof window,
  Za = (e, t = !1) => t ? Symbol.for(e) : Symbol(e),
  Xa = e => JSON.stringify(e)
  .replace(/\u2028/g, "\\u2028")
  .replace(/\u2029/g, "\\u2029")
  .replace(/\u0027/g, "\\u0027"),
  el = e => "number" == typeof e && isFinite(e),
  tl = e => "[object RegExp]" === _l(e),
  ol = e => vl(e) && 0 === Object.keys(e)
  .length,
  rl = Object.assign,
  sl = Object.create,
  il = (e = null) => sl(e);
let nl;
const al = () => nl || (nl = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : il());

function ll(e) {
  return e.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
    .replace(/\//g, "&#x2F;")
    .replace(/=/g, "&#x3D;")
}

function cl(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}
const dl = Object.prototype.hasOwnProperty;

function pl(e, t) {
  return dl.call(e, t)
}
const ul = Array.isArray,
  fl = e => "function" == typeof e,
  ml = e => "string" == typeof e,
  bl = e => "boolean" == typeof e,
  hl = e => null !== e && "object" == typeof e,
  gl = Object.prototype.toString,
  _l = e => gl.call(e),
  vl = e => "[object Object]" === _l(e);

function yl(e, t = "") {
  return e.reduce((e, o, r) => 0 === r ? e + o : e + t + o, "")
}
const kl = e => !hl(e) || ul(e);

function xl(e, t) {
  if (kl(e) || kl(t)) throw new Error("Invalid value");
  const o = [{
    src: e,
    des: t
  }];
  for (; o.length;) {
    const {
      src: e,
      des: t
    } = o.pop();
    Object.keys(e)
      .forEach(r => {
        "__proto__" !== r && (hl(e[r]) && !hl(t[r]) && (t[r] = Array.isArray(e[r]) ? [] : il()), kl(t[r]) || kl(e[r]) ? t[r] = e[r] : o.push({
          src: e[r],
          des: t[r]
        }))
      })
  }
}

function El(e, t, o) {
  return {
    start: e,
    end: t
  }
}
const wl = 1,
  Al = 2,
  Ll = 3,
  Pl = 4,
  Tl = 5,
  Ol = 6,
  Cl = 7,
  Rl = 8,
  Il = 9,
  Sl = 10,
  Dl = 11,
  jl = 12,
  Bl = 13,
  zl = 14;

function Fl(e, t, o = {}) {
  const {
    domain: r,
    messages: s,
    args: i
  } = o, n = new SyntaxError(String(e));
  return n.code = e, t && (n.location = t), n.domain = r, n
}

function Vl(e) {
  throw e
}
const Nl = " ",
  Ml = "\n",
  Ul = String.fromCharCode(8232),
  ql = String.fromCharCode(8233);

function Wl(e) {
  const t = e;
  let o = 0,
    r = 1,
    s = 1,
    i = 0;
  const n = e => "\r" === t[e] && t[e + 1] === Ml,
    a = e => t[e] === ql,
    l = e => t[e] === Ul,
    c = e => n(e) || (e => t[e] === Ml)(e) || a(e) || l(e),
    d = e => n(e) || a(e) || l(e) ? Ml : t[e];

  function p() {
    return i = 0, c(o) && (r++, s = 0), n(o) && o++, o++, s++, t[o]
  }
  return {
    index: () => o,
    line: () => r,
    column: () => s,
    peekOffset: () => i,
    charAt: d,
    currentChar: () => d(o),
    currentPeek: () => d(o + i),
    next: p,
    peek: function() {
      return n(o + i) && i++, i++, t[o + i]
    },
    reset: function() {
      o = 0, r = 1, s = 1, i = 0
    },
    resetPeek: function(e = 0) {
      i = e
    },
    skipToPeek: function() {
      const e = o + i;
      for (; e !== o;) p();
      i = 0
    }
  }
}
const $l = void 0;

function Hl(e, t = {}) {
  const o = !1 !== t.location,
    r = Wl(e),
    s = () => r.index(),
    i = () => {
      return e = r.line(), t = r.column(), o = r.index(), {
        line: e,
        column: t,
        offset: o
      };
      var e, t, o
    },
    n = i(),
    a = s(),
    l = {
      currentType: 13,
      offset: a,
      startLoc: n,
      endLoc: n,
      lastType: 13,
      lastOffset: a,
      lastStartLoc: n,
      lastEndLoc: n,
      braceNest: 0,
      inLinked: !1,
      text: ""
    },
    c = () => l,
    {
      onError: d
    } = t;

  function p(e, t, r, ...s) {
    const i = c();
    if (t.column += r, t.offset += r, d) {
      const r = Fl(e, o ? El(i.startLoc, t) : null, {
        domain: "tokenizer",
        args: s
      });
      d(r)
    }
  }

  function u(e, t, r) {
    e.endLoc = i(), e.currentType = t;
    const s = {
      type: t
    };
    return o && (s.loc = El(e.startLoc, e.endLoc)), null != r && (s.value = r), s
  }
  const f = e => u(e, 13);

  function m(e, t) {
    return e.currentChar() === t ? (e.next(), t) : (p(wl, i(), 0, t), "")
  }

  function b(e) {
    let t = "";
    for (; e.currentPeek() === Nl || e.currentPeek() === Ml;) t += e.currentPeek(), e.peek();
    return t
  }

  function g(e) {
    const t = b(e);
    return e.skipToPeek(), t
  }

  function _(e) {
    if (e === $l) return !1;
    const t = e.charCodeAt(0);
    return t >= 97 && t <= 122 || t >= 65 && t <= 90 || 95 === t
  }

  function v(e, t) {
    const {
      currentType: o
    } = t;
    if (2 !== o) return !1;
    b(e);
    const r = function(e) {
      if (e === $l) return !1;
      const t = e.charCodeAt(0);
      return t >= 48 && t <= 57
    }("-" === e.currentPeek() ? e.peek() : e.currentPeek());
    return e.resetPeek(), r
  }

  function y(e) {
    b(e);
    const t = "|" === e.currentPeek();
    return e.resetPeek(), t
  }

  function k(e, t = !0) {
    const o = (t = !1, r = "") => {
        const s = e.currentPeek();
        return "{" === s ? t : "@" !== s && s ? "|" === s ? !(r === Nl || r === Ml) : s === Nl ? (e.peek(), o(!0, Nl)) : s !== Ml || (e.peek(), o(!0, Ml)) : t
      },
      r = o();
    return t && e.resetPeek(), r
  }

  function x(e, t) {
    const o = e.currentChar();
    return o === $l ? $l : t(o) ? (e.next(), o) : null
  }

  function E(e) {
    const t = e.charCodeAt(0);
    return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t >= 48 && t <= 57 || 95 === t || 36 === t
  }

  function w(e) {
    return x(e, E)
  }

  function A(e) {
    const t = e.charCodeAt(0);
    return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t >= 48 && t <= 57 || 95 === t || 36 === t || 45 === t
  }

  function L(e) {
    return x(e, A)
  }

  function P(e) {
    const t = e.charCodeAt(0);
    return t >= 48 && t <= 57
  }

  function T(e) {
    return x(e, P)
  }

  function O(e) {
    const t = e.charCodeAt(0);
    return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102
  }

  function C(e) {
    return x(e, O)
  }

  function R(e) {
    let t = "",
      o = "";
    for (; t = T(e);) o += t;
    return o
  }

  function I(e) {
    return "'" !== e && e !== Ml
  }

  function S(e) {
    const t = e.currentChar();
    switch (t) {
      case "\\":
      case "'":
        return e.next(), `\\${t}`;
      case "u":
        return D(e, t, 4);
      case "U":
        return D(e, t, 6);
      default:
        return p(Pl, i(), 0, t), ""
    }
  }

  function D(e, t, o) {
    m(e, t);
    let r = "";
    for (let s = 0; s < o; s++) {
      const o = C(e);
      if (!o) {
        p(Tl, i(), 0, `\\${t}${r}${e.currentChar()}`);
        break
      }
      r += o
    }
    return `\\${t}${r}`
  }

  function j(e) {
    return "{" !== e && "}" !== e && e !== Nl && e !== Ml
  }

  function B(e) {
    g(e);
    let t = "",
      o = "";
    for (; t = x(e, j);) o += t;
    return o
  }

  function z(e) {
    g(e);
    const t = m(e, "|");
    return g(e), t
  }

  function F(e, t) {
    let o = null;
    switch (e.currentChar()) {
      case "{":
        return t.braceNest >= 1 && p(Il, i(), 0), e.next(), o = u(t, 2, "{"), g(e), t.braceNest++, o;
      case "}":
        return t.braceNest > 0 && 2 === t.currentType && p(Rl, i(), 0), e.next(), o = u(t, 3, "}"), t.braceNest--, t.braceNest > 0 && g(e), t.inLinked && 0 === t.braceNest && (t.inLinked = !1), o;
      case "@":
        return t.braceNest > 0 && p(Cl, i(), 0), o = V(e, t) || f(t), t.braceNest = 0, o;
      default: {
        let r = !0,
          s = !0,
          n = !0;
        if (y(e)) return t.braceNest > 0 && p(Cl, i(), 0), o = u(t, 1, z(e)), t.braceNest = 0, t.inLinked = !1, o;
        if (t.braceNest > 0 && (4 === t.currentType || 5 === t.currentType || 6 === t.currentType)) return p(Cl, i(), 0), t.braceNest = 0, N(e, t);
        if (r = function(e, t) {
            const {
              currentType: o
            } = t;
            if (2 !== o) return !1;
            b(e);
            const r = _(e.currentPeek());
            return e.resetPeek(), r
          }(e, t)) return o = u(t, 4, function(e) {
          g(e);
          let t = "",
            o = "";
          for (; t = L(e);) o += t;
          const r = e.currentChar();
          if (r && "}" !== r && r !== $l && r !== Nl && r !== Ml && "　" !== r) {
            const t = B(e);
            return p(Al, i(), 0, o + t), o + t
          }
          return e.currentChar() === $l && p(Cl, i(), 0), o
        }(e)), g(e), o;
        if (s = v(e, t)) return o = u(t, 5, function(e) {
          g(e);
          let t = "";
          return "-" === e.currentChar() ? (e.next(), t += `-${R(e)}`) : t += R(e), e.currentChar() === $l && p(Cl, i(), 0), t
        }(e)), g(e), o;
        if (n = function(e, t) {
            const {
              currentType: o
            } = t;
            if (2 !== o) return !1;
            b(e);
            const r = "'" === e.currentPeek();
            return e.resetPeek(), r
          }(e, t)) return o = u(t, 6, function(e) {
          g(e), m(e, "'");
          let t = "",
            o = "";
          for (; t = x(e, I);) o += "\\" === t ? S(e) : t;
          const r = e.currentChar();
          return r === Ml || r === $l ? (p(Ll, i(), 0), r === Ml && (e.next(), m(e, "'")), o) : (m(e, "'"), o)
        }(e)), g(e), o;
        if (!r && !s && !n) return o = u(t, 12, B(e)), p(Al, i(), 0, o.value), g(e), o;
        break
      }
    }
    return o
  }

  function V(e, t) {
    const {
      currentType: o
    } = t;
    let r = null;
    const s = e.currentChar();
    switch (7 !== o && 8 !== o && 11 !== o && 9 !== o || s !== Ml && s !== Nl || p(Sl, i(), 0), s) {
      case "@":
        return e.next(), r = u(t, 7, "@"), t.inLinked = !0, r;
      case ".":
        return g(e), e.next(), u(t, 8, ".");
      case ":":
        return g(e), e.next(), u(t, 9, ":");
      default:
        return y(e) ? (r = u(t, 1, z(e)), t.braceNest = 0, t.inLinked = !1, r) : function(e, t) {
          const {
            currentType: o
          } = t;
          if (7 !== o) return !1;
          b(e);
          const r = "." === e.currentPeek();
          return e.resetPeek(), r
        }(e, t) || function(e, t) {
          const {
            currentType: o
          } = t;
          if (7 !== o && 11 !== o) return !1;
          b(e);
          const r = ":" === e.currentPeek();
          return e.resetPeek(), r
        }(e, t) ? (g(e), V(e, t)) : function(e, t) {
          const {
            currentType: o
          } = t;
          if (8 !== o) return !1;
          b(e);
          const r = _(e.currentPeek());
          return e.resetPeek(), r
        }(e, t) ? (g(e), u(t, 11, function(e) {
          let t = "",
            o = "";
          for (; t = w(e);) o += t;
          return o
        }(e))) : function(e, t) {
          const {
            currentType: o
          } = t;
          if (9 !== o) return !1;
          const r = () => {
              const t = e.currentPeek();
              return "{" === t ? _(e.peek()) : !("@" === t || "|" === t || ":" === t || "." === t || t === Nl || !t) && (t === Ml ? (e.peek(), r()) : k(e, !1))
            },
            s = r();
          return e.resetPeek(), s
        }(e, t) ? (g(e), "{" === s ? F(e, t) || r : u(t, 10, function(e) {
          const t = o => {
            const r = e.currentChar();
            return "{" !== r && "@" !== r && "|" !== r && "(" !== r && ")" !== r && r ? r === Nl ? o : (o += r, e.next(), t(o)) : o
          };
          return t("")
        }(e))) : (7 === o && p(Sl, i(), 0), t.braceNest = 0, t.inLinked = !1, N(e, t))
    }
  }

  function N(e, t) {
    let o = {
      type: 13
    };
    if (t.braceNest > 0) return F(e, t) || f(t);
    if (t.inLinked) return V(e, t) || f(t);
    switch (e.currentChar()) {
      case "{":
        return F(e, t) || f(t);
      case "}":
        return p(Ol, i(), 0), e.next(), u(t, 3, "}");
      case "@":
        return V(e, t) || f(t);
      default:
        if (y(e)) return o = u(t, 1, z(e)), t.braceNest = 0, t.inLinked = !1, o;
        if (k(e)) return u(t, 0, function(e) {
          let t = "";
          for (;;) {
            const o = e.currentChar();
            if ("{" === o || "}" === o || "@" === o || "|" === o || !o) break;
            if (o === Nl || o === Ml)
              if (k(e)) t += o, e.next();
              else {
                if (y(e)) break;
                t += o, e.next()
              }
            else t += o, e.next()
          }
          return t
        }(e))
    }
    return o
  }
  return {
    nextToken: function() {
      const {
        currentType: e,
        offset: t,
        startLoc: o,
        endLoc: n
      } = l;
      return l.lastType = e, l.lastOffset = t, l.lastStartLoc = o, l.lastEndLoc = n, l.offset = s(), l.startLoc = i(), r.currentChar() === $l ? u(l, 13) : N(r, l)
    },
    currentOffset: s,
    currentPosition: i,
    context: c
  }
}
const Ql = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;

function Gl(e, t, o) {
  switch (e) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const e = parseInt(t || o, 16);
      return e <= 55295 || e >= 57344 ? String.fromCodePoint(e) : "�"
    }
  }
}

function Kl(e = {}) {
  const t = !1 !== e.location,
    {
      onError: o
    } = e;

  function r(e, r, s, i, ...n) {
    const a = e.currentPosition();
    if (a.offset += i, a.column += i, o) {
      const e = Fl(r, t ? El(s, a) : null, {
        domain: "parser",
        args: n
      });
      o(e)
    }
  }

  function s(e, o, r) {
    const s = {
      type: e
    };
    return t && (s.start = o, s.end = o, s.loc = {
      start: r,
      end: r
    }), s
  }

  function i(e, o, r, s) {
    t && (e.end = o, e.loc && (e.loc.end = r))
  }

  function n(e, t) {
    const o = e.context(),
      r = s(3, o.offset, o.startLoc);
    return r.value = t, i(r, e.currentOffset(), e.currentPosition()), r
  }

  function a(e, t) {
    const o = e.context(),
      {
        lastOffset: r,
        lastStartLoc: n
      } = o,
      a = s(5, r, n);
    return a.index = parseInt(t, 10), e.nextToken(), i(a, e.currentOffset(), e.currentPosition()), a
  }

  function l(e, t) {
    const o = e.context(),
      {
        lastOffset: r,
        lastStartLoc: n
      } = o,
      a = s(4, r, n);
    return a.key = t, e.nextToken(), i(a, e.currentOffset(), e.currentPosition()), a
  }

  function c(e, t) {
    const o = e.context(),
      {
        lastOffset: r,
        lastStartLoc: n
      } = o,
      a = s(9, r, n);
    return a.value = t.replace(Ql, Gl), e.nextToken(), i(a, e.currentOffset(), e.currentPosition()), a
  }

  function d(e) {
    const t = e.context(),
      o = s(6, t.offset, t.startLoc);
    let n = e.nextToken();
    if (8 === n.type) {
      const t = function(e) {
        const t = e.nextToken(),
          o = e.context(),
          {
            lastOffset: n,
            lastStartLoc: a
          } = o,
          l = s(8, n, a);
        return 11 !== t.type ? (r(e, jl, o.lastStartLoc, 0), l.value = "", i(l, n, a), {
          nextConsumeToken: t,
          node: l
        }) : (null == t.value && r(e, zl, o.lastStartLoc, 0, Yl(t)), l.value = t.value || "", i(l, e.currentOffset(), e.currentPosition()), {
          node: l
        })
      }(e);
      o.modifier = t.node, n = t.nextConsumeToken || e.nextToken()
    }
    switch (9 !== n.type && r(e, zl, t.lastStartLoc, 0, Yl(n)), n = e.nextToken(), 2 === n.type && (n = e.nextToken()), n.type) {
      case 10:
        null == n.value && r(e, zl, t.lastStartLoc, 0, Yl(n)), o.key = function(e, t) {
          const o = e.context(),
            r = s(7, o.offset, o.startLoc);
          return r.value = t, i(r, e.currentOffset(), e.currentPosition()), r
        }(e, n.value || "");
        break;
      case 4:
        null == n.value && r(e, zl, t.lastStartLoc, 0, Yl(n)), o.key = l(e, n.value || "");
        break;
      case 5:
        null == n.value && r(e, zl, t.lastStartLoc, 0, Yl(n)), o.key = a(e, n.value || "");
        break;
      case 6:
        null == n.value && r(e, zl, t.lastStartLoc, 0, Yl(n)), o.key = c(e, n.value || "");
        break;
      default: {
        r(e, Bl, t.lastStartLoc, 0);
        const a = e.context(),
          l = s(7, a.offset, a.startLoc);
        return l.value = "", i(l, a.offset, a.startLoc), o.key = l, i(o, a.offset, a.startLoc), {
          nextConsumeToken: n,
          node: o
        }
      }
    }
    return i(o, e.currentOffset(), e.currentPosition()), {
      node: o
    }
  }

  function p(e) {
    const t = e.context(),
      o = s(2, 1 === t.currentType ? e.currentOffset() : t.offset, 1 === t.currentType ? t.endLoc : t.startLoc);
    o.items = [];
    let p = null;
    do {
      const s = p || e.nextToken();
      switch (p = null, s.type) {
        case 0:
          null == s.value && r(e, zl, t.lastStartLoc, 0, Yl(s)), o.items.push(n(e, s.value || ""));
          break;
        case 5:
          null == s.value && r(e, zl, t.lastStartLoc, 0, Yl(s)), o.items.push(a(e, s.value || ""));
          break;
        case 4:
          null == s.value && r(e, zl, t.lastStartLoc, 0, Yl(s)), o.items.push(l(e, s.value || ""));
          break;
        case 6:
          null == s.value && r(e, zl, t.lastStartLoc, 0, Yl(s)), o.items.push(c(e, s.value || ""));
          break;
        case 7: {
          const t = d(e);
          o.items.push(t.node), p = t.nextConsumeToken || null;
          break
        }
      }
    } while (13 !== t.currentType && 1 !== t.currentType);
    return i(o, 1 === t.currentType ? t.lastOffset : e.currentOffset(), 1 === t.currentType ? t.lastEndLoc : e.currentPosition()), o
  }

  function u(e) {
    const t = e.context(),
      {
        offset: o,
        startLoc: n
      } = t,
      a = p(e);
    return 13 === t.currentType ? a : function(e, t, o, n) {
      const a = e.context();
      let l = 0 === n.items.length;
      const c = s(1, t, o);
      c.cases = [], c.cases.push(n);
      do {
        const t = p(e);
        l || (l = 0 === t.items.length), c.cases.push(t)
      } while (13 !== a.currentType);
      return l && r(e, Dl, o, 0), i(c, e.currentOffset(), e.currentPosition()), c
    }(e, o, n, a)
  }
  return {
    parse: function(o) {
      const n = Hl(o, rl({}, e)),
        a = n.context(),
        l = s(0, a.offset, a.startLoc);
      return t && l.loc && (l.loc.source = o), l.body = u(n), e.onCacheKey && (l.cacheKey = e.onCacheKey(o)), 13 !== a.currentType && r(n, zl, a.lastStartLoc, 0, o[a.offset] || ""), i(l, n.currentOffset(), n.currentPosition()), l
    }
  }
}

function Yl(e) {
  if (13 === e.type) return "EOF";
  const t = (e.value || "")
    .replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t
}

function Jl(e, t) {
  for (let o = 0; o < e.length; o++) Zl(e[o], t)
}

function Zl(e, t) {
  switch (e.type) {
    case 1:
      Jl(e.cases, t), t.helper("plural");
      break;
    case 2:
      Jl(e.items, t);
      break;
    case 6:
      Zl(e.key, t), t.helper("linked"), t.helper("type");
      break;
    case 5:
      t.helper("interpolate"), t.helper("list");
      break;
    case 4:
      t.helper("interpolate"), t.helper("named")
  }
}

function Xl(e, t = {}) {
  const o = function(e) {
    const t = {
      ast: e,
      helpers: new Set
    };
    return {
      context: () => t,
      helper: e => (t.helpers.add(e), e)
    }
  }(e);
  o.helper("normalize"), e.body && Zl(e.body, o);
  const r = o.context();
  e.helpers = Array.from(r.helpers)
}

function ec(e) {
  if (1 === e.items.length) {
    const t = e.items[0];
    3 !== t.type && 9 !== t.type || (e.static = t.value, delete t.value)
  } else {
    const t = [];
    for (let o = 0; o < e.items.length; o++) {
      const r = e.items[o];
      if (3 !== r.type && 9 !== r.type) break;
      if (null == r.value) break;
      t.push(r.value)
    }
    if (t.length === e.items.length) {
      e.static = yl(t);
      for (let t = 0; t < e.items.length; t++) {
        const o = e.items[t];
        3 !== o.type && 9 !== o.type || delete o.value
      }
    }
  }
}

function tc(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      tc(t.body), t.b = t.body, delete t.body;
      break
    }
    case 1: {
      const t = e,
        o = t.cases;
      for (let e = 0; e < o.length; e++) tc(o[e]);
      t.c = o, delete t.cases;
      break
    }
    case 2: {
      const t = e,
        o = t.items;
      for (let e = 0; e < o.length; e++) tc(o[e]);
      t.i = o, delete t.items, t.static && (t.s = t.static, delete t.static);
      break
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const t = e;
      t.value && (t.v = t.value, delete t.value);
      break
    }
    case 6: {
      const t = e;
      tc(t.key), t.k = t.key, delete t.key, t.modifier && (tc(t.modifier), t.m = t.modifier, delete t.modifier);
      break
    }
    case 5: {
      const t = e;
      t.i = t.index, delete t.index;
      break
    }
    case 4: {
      const t = e;
      t.k = t.key, delete t.key;
      break
    }
  }
  delete e.type
}

function oc(e, t) {
  const {
    helper: o
  } = e;
  switch (t.type) {
    case 0:
      ! function(e, t) {
        t.body ? oc(e, t.body) : e.push("null")
      }(e, t);
      break;
    case 1:
      ! function(e, t) {
        const {
          helper: o,
          needIndent: r
        } = e;
        if (t.cases.length > 1) {
          e.push(`${o("plural")}([`), e.indent(r());
          const s = t.cases.length;
          for (let o = 0; o < s && (oc(e, t.cases[o]), o !== s - 1); o++) e.push(", ");
          e.deindent(r()), e.push("])")
        }
      }(e, t);
      break;
    case 2:
      ! function(e, t) {
        const {
          helper: o,
          needIndent: r
        } = e;
        e.push(`${o("normalize")}([`), e.indent(r());
        const s = t.items.length;
        for (let i = 0; i < s && (oc(e, t.items[i]), i !== s - 1); i++) e.push(", ");
        e.deindent(r()), e.push("])")
      }(e, t);
      break;
    case 6:
      ! function(e, t) {
        const {
          helper: o
        } = e;
        e.push(`${o("linked")}(`), oc(e, t.key), t.modifier ? (e.push(", "), oc(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")")
      }(e, t);
      break;
    case 8:
    case 7:
    case 9:
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${o("interpolate")}(${o("list")}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${o("interpolate")}(${o("named")}(${JSON.stringify(t.key)}))`, t)
  }
}

function rc(e, t = {}) {
  const o = rl({}, t),
    r = !!o.jit,
    s = !!o.minify,
    i = null == o.optimize || o.optimize,
    n = Kl(o)
    .parse(e);
  return r ? (i && function(e) {
    const t = e.body;
    2 === t.type ? ec(t) : t.cases.forEach(e => ec(e))
  }(n), s && tc(n), {
    ast: n,
    code: ""
  }) : (Xl(n, o), ((e, t = {}) => {
    const o = ml(t.mode) ? t.mode : "normal",
      r = ml(t.filename) ? t.filename : "message.intl";
    t.sourceMap;
    const s = null != t.breakLineCode ? t.breakLineCode : "arrow" === o ? ";" : "\n",
      i = t.needIndent ? t.needIndent : "arrow" !== o,
      n = e.helpers || [],
      a = function(e, t) {
        const {
          filename: o,
          breakLineCode: r,
          needIndent: s
        } = t, i = !1 !== t.location, n = {
          filename: o,
          code: "",
          column: 1,
          line: 1,
          offset: 0,
          map: void 0,
          breakLineCode: r,
          needIndent: s,
          indentLevel: 0
        };

        function a(e, t) {
          n.code += e
        }

        function l(e, t = !0) {
          const o = t ? r : "";
          a(s ? o + "  ".repeat(e) : o)
        }
        return i && e.loc && (n.source = e.loc.source), {
          context: () => n,
          push: a,
          indent: function(e = !0) {
            const t = ++n.indentLevel;
            e && l(t)
          },
          deindent: function(e = !0) {
            const t = --n.indentLevel;
            e && l(t)
          },
          newline: function() {
            l(n.indentLevel)
          },
          helper: e => `_${e}`,
          needIndent: () => n.needIndent
        }
      }(e, {
        filename: r,
        breakLineCode: s,
        needIndent: i
      });
    a.push("normal" === o ? "function __msg__ (ctx) {" : "(ctx) => {"), a.indent(i), n.length > 0 && (a.push(`const { ${yl(n.map(e=>`${e}: _${e}`),", ")} } = ctx`), a.newline()), a.push("return "), oc(a, e), a.deindent(i), a.push("}"), delete e.helpers;
    const {
      code: l,
      map: c
    } = a.context();
    return {
      ast: e,
      code: l,
      map: c ? c.toJSON() : void 0
    }
  })(n, o))
}

function sc(e) {
  return hl(e) && 0 === dc(e) && (pl(e, "b") || pl(e, "body"))
}
const ic = ["b", "body"];
const nc = ["c", "cases"];
const ac = ["s", "static"];
const lc = ["i", "items"];
const cc = ["t", "type"];

function dc(e) {
  return bc(e, cc)
}
const pc = ["v", "value"];

function uc(e, t) {
  const o = bc(e, pc);
  if (null != o) return o;
  throw gc(t)
}
const fc = ["m", "modifier"];
const mc = ["k", "key"];

function bc(e, t, o) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (pl(e, o) && null != e[o]) return e[o]
  }
  return o
}
const hc = [...ic, ...nc, ...ac, ...lc, ...mc, ...fc, ...pc, ...cc];

function gc(e) {
  return new Error(`unhandled node type: ${e}`)
}

function _c(e) {
  return t => function(e, t) {
    const o = (r = t, bc(r, ic));
    var r;
    if (null == o) throw gc(0);
    if (1 === dc(o)) {
      const t = function(e) {
        return bc(e, nc, [])
      }(o);
      return e.plural(t.reduce((t, o) => [...t, vc(e, o)], []))
    }
    return vc(e, o)
  }(t, e)
}

function vc(e, t) {
  const o = function(e) {
    return bc(e, ac)
  }(t);
  if (null != o) return "text" === e.type ? o : e.normalize([o]);
  {
    const o = function(e) {
        return bc(e, lc, [])
      }(t)
      .reduce((t, o) => [...t, yc(e, o)], []);
    return e.normalize(o)
  }
}

function yc(e, t) {
  const o = dc(t);
  switch (o) {
    case 3:
    case 9:
    case 7:
    case 8:
      return uc(t, o);
    case 4: {
      const r = t;
      if (pl(r, "k") && r.k) return e.interpolate(e.named(r.k));
      if (pl(r, "key") && r.key) return e.interpolate(e.named(r.key));
      throw gc(o)
    }
    case 5: {
      const r = t;
      if (pl(r, "i") && el(r.i)) return e.interpolate(e.list(r.i));
      if (pl(r, "index") && el(r.index)) return e.interpolate(e.list(r.index));
      throw gc(o)
    }
    case 6: {
      const o = t,
        r = function(e) {
          return bc(e, fc)
        }(o),
        s = function(e) {
          const t = bc(e, mc);
          if (t) return t;
          throw gc(6)
        }(o);
      return e.linked(yc(e, s), r ? yc(e, r) : void 0, e.type)
    }
    default:
      throw new Error(`unhandled node on format message part: ${o}`)
  }
}
const kc = e => e;
let xc = il();
let Ec = null;
const wc = Ac("function:translate");

function Ac(e) {
  return t => Ec && Ec.emit(e, t)
}
const Lc = 17,
  Pc = 18,
  Tc = 19,
  Oc = 21,
  Cc = 22,
  Rc = 23;

function Ic(e) {
  return Fl(e, null, void 0)
}

function Sc(e, t) {
  return null != t.locale ? jc(t.locale) : jc(e.locale)
}
let Dc;

function jc(e) {
  if (ml(e)) return e;
  if (fl(e)) {
    if (e.resolvedOnce && null != Dc) return Dc;
    if ("Function" === e.constructor.name) {
      const o = e();
      if (hl(t = o) && fl(t.then) && fl(t.catch)) throw Ic(Oc);
      return Dc = o
    }
    throw Ic(Cc)
  }
  throw Ic(Rc);
  var t
}

function Bc(e, t, o) {
  return [...new Set([o, ...ul(t) ? t : hl(t) ? Object.keys(t) : ml(t) ? [t] : [o]])]
}

function zc(e, t, o) {
  const r = ml(o) ? o : Qc,
    s = e;
  s.__localeChainCache || (s.__localeChainCache = new Map);
  let i = s.__localeChainCache.get(r);
  if (!i) {
    i = [];
    let e = [o];
    for (; ul(e);) e = Fc(i, e, t);
    const n = ul(t) || !vl(t) ? t : t.default ? t.default : null;
    e = ml(n) ? [n] : n, ul(e) && Fc(i, e, !1), s.__localeChainCache.set(r, i)
  }
  return i
}

function Fc(e, t, o) {
  let r = !0;
  for (let s = 0; s < t.length && bl(r); s++) {
    const i = t[s];
    ml(i) && (r = Vc(e, t[s], o))
  }
  return r
}

function Vc(e, t, o) {
  let r;
  const s = t.split("-");
  do {
    r = Nc(e, s.join("-"), o), s.splice(-1, 1)
  } while (s.length && !0 === r);
  return r
}

function Nc(e, t, o) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = "!" !== t[t.length - 1];
    const s = t.replace(/!/g, "");
    e.push(s), (ul(o) || vl(o)) && o[s] && (r = o[s])
  }
  return r
}
const Mc = [];
Mc[0] = {
  w: [0],
  i: [3, 0],
  "[": [4],
  o: [7]
}, Mc[1] = {
  w: [1],
  ".": [2],
  "[": [4],
  o: [7]
}, Mc[2] = {
  w: [2],
  i: [3, 0],
  0: [3, 0]
}, Mc[3] = {
  i: [3, 0],
  0: [3, 0],
  w: [1, 1],
  ".": [2, 1],
  "[": [4, 1],
  o: [7, 1]
}, Mc[4] = {
  "'": [5, 0],
  '"': [6, 0],
  "[": [4, 2],
  "]": [1, 3],
  o: 8,
  l: [4, 0]
}, Mc[5] = {
  "'": [4, 0],
  o: 8,
  l: [5, 0]
}, Mc[6] = {
  '"': [4, 0],
  o: 8,
  l: [6, 0]
};
const Uc = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

function qc(e) {
  if (null == e) return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w"
  }
  return "i"
}

function Wc(e) {
  const t = e.trim();
  return ("0" !== e.charAt(0) || !isNaN(parseInt(e))) && (o = t, Uc.test(o) ? function(e) {
    const t = e.charCodeAt(0);
    return t !== e.charCodeAt(e.length - 1) || 34 !== t && 39 !== t ? e : e.slice(1, -1)
  }(t) : "*" + t);
  var o
}
const $c = new Map;

function Hc(e, t) {
  return hl(e) ? e[t] : null
}
const Qc = "en-US",
  Gc = e => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
let Kc, Yc, Jc;
let Zc = null;
const Xc = () => Zc;
let ed = null;
const td = e => {
  ed = e
};
let od = 0;

function rd(e = {}) {
  const t = fl(e.onWarn) ? e.onWarn : Ya,
    o = ml(e.version) ? e.version : "11.2.8",
    r = ml(e.locale) || fl(e.locale) ? e.locale : Qc,
    s = fl(r) ? Qc : r,
    i = ul(e.fallbackLocale) || vl(e.fallbackLocale) || ml(e.fallbackLocale) || !1 === e.fallbackLocale ? e.fallbackLocale : s,
    n = vl(e.messages) ? e.messages : sd(s),
    a = vl(e.datetimeFormats) ? e.datetimeFormats : sd(s),
    l = vl(e.numberFormats) ? e.numberFormats : sd(s),
    c = rl(il(), e.modifiers, {
      upper: (e, t) => "text" === t && ml(e) ? e.toUpperCase() : "vnode" === t && hl(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
      lower: (e, t) => "text" === t && ml(e) ? e.toLowerCase() : "vnode" === t && hl(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
      capitalize: (e, t) => "text" === t && ml(e) ? Gc(e) : "vnode" === t && hl(e) && "__v_isVNode" in e ? Gc(e.children) : e
    }),
    d = e.pluralRules || il(),
    p = fl(e.missing) ? e.missing : null,
    u = !bl(e.missingWarn) && !tl(e.missingWarn) || e.missingWarn,
    f = !bl(e.fallbackWarn) && !tl(e.fallbackWarn) || e.fallbackWarn,
    m = !!e.fallbackFormat,
    b = !!e.unresolving,
    g = fl(e.postTranslation) ? e.postTranslation : null,
    _ = vl(e.processor) ? e.processor : null,
    v = !bl(e.warnHtmlMessage) || e.warnHtmlMessage,
    y = !!e.escapeParameter,
    k = fl(e.messageCompiler) ? e.messageCompiler : Kc,
    x = fl(e.messageResolver) ? e.messageResolver : Yc || Hc,
    E = fl(e.localeFallbacker) ? e.localeFallbacker : Jc || Bc,
    w = hl(e.fallbackContext) ? e.fallbackContext : void 0,
    A = e,
    L = hl(A.__datetimeFormatters) ? A.__datetimeFormatters : new Map,
    P = hl(A.__numberFormatters) ? A.__numberFormatters : new Map,
    T = hl(A.__meta) ? A.__meta : {};
  od++;
  const O = {
    version: o,
    cid: od,
    locale: r,
    fallbackLocale: i,
    messages: n,
    modifiers: c,
    pluralRules: d,
    missing: p,
    missingWarn: u,
    fallbackWarn: f,
    fallbackFormat: m,
    unresolving: b,
    postTranslation: g,
    processor: _,
    warnHtmlMessage: v,
    escapeParameter: y,
    messageCompiler: k,
    messageResolver: x,
    localeFallbacker: E,
    fallbackContext: w,
    onWarn: t,
    __meta: T
  };
  return O.datetimeFormats = a, O.numberFormats = l, O.__datetimeFormatters = L, O.__numberFormatters = P, __INTLIFY_PROD_DEVTOOLS__ && function(e, t, o) {
    Ec && Ec.emit("i18n:init", {
      timestamp: Date.now(),
      i18n: e,
      version: t,
      meta: o
    })
  }(O, o, T), O
}
const sd = e => ({
  [e]: il()
});

function id(e, t, o, r, s) {
  const {
    missing: i,
    onWarn: n
  } = e;
  if (null !== i) {
    const r = i(e, o, t, s);
    return ml(r) ? r : t
  }
  return t
}

function nd(e, t, o) {
  e.__localeChainCache = new Map, e.localeFallbacker(e, o, t)
}

function ad(e, t) {
  return e !== t && e.split("-")[0] === t.split("-")[0]
}

function ld(e, t) {
  const o = t.indexOf(e);
  if (-1 === o) return !1;
  for (let r = o + 1; r < t.length; r++)
    if (ad(e, t[r])) return !0;
  return !1
}

function cd(e, ...t) {
  const {
    datetimeFormats: o,
    unresolving: r,
    fallbackLocale: s,
    onWarn: i,
    localeFallbacker: n
  } = e, {
    __datetimeFormatters: a
  } = e, [l, c, d, p] = pd(...t);
  bl(d.missingWarn) ? d.missingWarn : e.missingWarn;
  bl(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const u = !!d.part,
    f = Sc(e, d),
    m = n(e, s, f);
  if (!ml(l) || "" === l) return new Intl.DateTimeFormat(f, p)
    .format(c);
  let b, g = {},
    _ = null;
  for (let k = 0; k < m.length && (b = m[k], g = o[b] || {}, _ = g[l], !vl(_)); k++) id(e, l, b, 0, "datetime format");
  if (!vl(_) || !ml(b)) return r ? -1 : l;
  let v = `${b}__${l}`;
  ol(p) || (v = `${v}__${JSON.stringify(p)}`);
  let y = a.get(v);
  return y || (y = new Intl.DateTimeFormat(b, rl({}, _, p)), a.set(v, y)), u ? y.formatToParts(c) : y.format(c)
}
const dd = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];

function pd(...e) {
  const [t, o, r, s] = e, i = il();
  let n, a = il();
  if (ml(t)) {
    const e = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!e) throw Ic(Tc);
    const o = e[3] ? e[3].trim()
      .startsWith("T") ? `${e[1].trim()}${e[3].trim()}` : `${e[1].trim()}T${e[3].trim()}` : e[1].trim();
    n = new Date(o);
    try {
      n.toISOString()
    } catch {
      throw Ic(Tc)
    }
  } else if ("[object Date]" === _l(t)) {
    if (isNaN(t.getTime())) throw Ic(Pc);
    n = t
  } else {
    if (!el(t)) throw Ic(Lc);
    n = t
  }
  return ml(o) ? i.key = o : vl(o) && Object.keys(o)
    .forEach(e => {
      dd.includes(e) ? a[e] = o[e] : i[e] = o[e]
    }), ml(r) ? i.locale = r : vl(r) && (a = r), vl(s) && (a = s), [i.key || "", n, i, a]
}

function ud(e, t, o) {
  const r = e;
  for (const s in o) {
    const e = `${t}__${s}`;
    r.__datetimeFormatters.has(e) && r.__datetimeFormatters.delete(e)
  }
}

function fd(e, ...t) {
  const {
    numberFormats: o,
    unresolving: r,
    fallbackLocale: s,
    onWarn: i,
    localeFallbacker: n
  } = e, {
    __numberFormatters: a
  } = e, [l, c, d, p] = bd(...t);
  bl(d.missingWarn) ? d.missingWarn : e.missingWarn;
  bl(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const u = !!d.part,
    f = Sc(e, d),
    m = n(e, s, f);
  if (!ml(l) || "" === l) return new Intl.NumberFormat(f, p)
    .format(c);
  let b, g = {},
    _ = null;
  for (let k = 0; k < m.length && (b = m[k], g = o[b] || {}, _ = g[l], !vl(_)); k++) id(e, l, b, 0, "number format");
  if (!vl(_) || !ml(b)) return r ? -1 : l;
  let v = `${b}__${l}`;
  ol(p) || (v = `${v}__${JSON.stringify(p)}`);
  let y = a.get(v);
  return y || (y = new Intl.NumberFormat(b, rl({}, _, p)), a.set(v, y)), u ? y.formatToParts(c) : y.format(c)
}
const md = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];

function bd(...e) {
  const [t, o, r, s] = e, i = il();
  let n = il();
  if (!el(t)) throw Ic(Lc);
  const a = t;
  return ml(o) ? i.key = o : vl(o) && Object.keys(o)
    .forEach(e => {
      md.includes(e) ? n[e] = o[e] : i[e] = o[e]
    }), ml(r) ? i.locale = r : vl(r) && (n = r), vl(s) && (n = s), [i.key || "", a, i, n]
}

function hd(e, t, o) {
  const r = e;
  for (const s in o) {
    const e = `${t}__${s}`;
    r.__numberFormatters.has(e) && r.__numberFormatters.delete(e)
  }
}
const gd = e => e,
  _d = e => "",
  vd = e => 0 === e.length ? "" : yl(e),
  yd = e => null == e ? "" : ul(e) || vl(e) && e.toString === gl ? JSON.stringify(e, null, 2) : String(e);

function kd(e, t) {
  return e = Math.abs(e), 2 === t ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
}

function xd(e = {}) {
  const t = e.locale,
    o = function(e) {
      const t = el(e.pluralIndex) ? e.pluralIndex : -1;
      return e.named && (el(e.named.count) || el(e.named.n)) ? el(e.named.count) ? e.named.count : el(e.named.n) ? e.named.n : t : t
    }(e),
    r = hl(e.pluralRules) && ml(t) && fl(e.pluralRules[t]) ? e.pluralRules[t] : kd,
    s = hl(e.pluralRules) && ml(t) && fl(e.pluralRules[t]) ? kd : void 0,
    i = e.list || [],
    n = e.named || il();
  el(e.pluralIndex) && function(e, t) {
    t.count || (t.count = e), t.n || (t.n = e)
  }(o, n);

  function a(t, o) {
    const r = fl(e.messages) ? e.messages(t, !!o) : !!hl(e.messages) && e.messages[t];
    return r || (e.parent ? e.parent.message(t) : _d)
  }
  const l = vl(e.processor) && fl(e.processor.normalize) ? e.processor.normalize : vd,
    c = vl(e.processor) && fl(e.processor.interpolate) ? e.processor.interpolate : yd,
    d = {
      list: e => i[e],
      named: e => n[e],
      plural: e => e[r(o, e.length, s)],
      linked: (t, ...o) => {
        const [r, s] = o;
        let i = "text",
          n = "";
        1 === o.length ? hl(r) ? (n = r.modifier || n, i = r.type || i) : ml(r) && (n = r || n) : 2 === o.length && (ml(r) && (n = r || n), ml(s) && (i = s || i));
        const l = a(t, !0)(d),
          c = "vnode" === i && ul(l) && n ? l[0] : l;
        return n ? (p = n, e.modifiers ? e.modifiers[p] : gd)(c, i) : c;
        var p
      },
      message: a,
      type: vl(e.processor) && ml(e.processor.type) ? e.processor.type : "text",
      interpolate: c,
      normalize: l,
      values: rl(il(), i, n)
    };
  return d
}
const Ed = () => "",
  wd = e => fl(e);

function Ad(e, ...t) {
  const {
    fallbackFormat: o,
    postTranslation: r,
    unresolving: s,
    messageCompiler: i,
    fallbackLocale: n,
    messages: a
  } = e, [l, c] = Td(...t), d = bl(c.missingWarn) ? c.missingWarn : e.missingWarn, p = bl(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, u = bl(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, f = !!c.resolvedMessage, m = ml(c.default) || bl(c.default) ? bl(c.default) ? i ? l : () => l : c.default : o ? i ? l : () => l : null, b = o || null != m && (ml(m) || fl(m)), g = Sc(e, c);
  u && function(e) {
    ul(e.list) ? e.list = e.list.map(e => ml(e) ? ll(e) : e) : hl(e.named) && Object.keys(e.named)
      .forEach(t => {
        ml(e.named[t]) && (e.named[t] = ll(e.named[t]))
      })
  }(c);
  let [_, v, y] = f ? [l, g, a[g] || il()] : Ld(e, l, g, n, p, d), k = _, x = l;
  if (f || ml(k) || sc(k) || wd(k) || b && (k = m, x = k), !(f || (ml(k) || sc(k) || wd(k)) && ml(v))) return s ? -1 : l;
  let E = !1;
  const w = wd(k) ? k : Pd(e, l, v, k, x, () => {
    E = !0
  });
  if (E) return k;
  const A = function(e, t, o, r) {
      const {
        modifiers: s,
        pluralRules: i,
        messageResolver: n,
        fallbackLocale: a,
        fallbackWarn: l,
        missingWarn: c,
        fallbackContext: d
      } = e, p = (r, s) => {
        let i = n(o, r);
        if (null == i && (d || s)) {
          const [, , o] = Ld(d || e, r, t, a, l, c);
          i = n(o, r)
        }
        if (ml(i) || sc(i)) {
          let o = !1;
          const s = Pd(e, r, t, i, r, () => {
            o = !0
          });
          return o ? Ed : s
        }
        return wd(i) ? i : Ed
      }, u = {
        locale: t,
        modifiers: s,
        pluralRules: i,
        messages: p
      };
      e.processor && (u.processor = e.processor);
      r.list && (u.list = r.list);
      r.named && (u.named = r.named);
      el(r.plural) && (u.pluralIndex = r.plural);
      return u
    }(e, v, y, c),
    L = function(e, t, o) {
      const r = t(o);
      return r
    }(0, w, xd(A));
  let P = r ? r(L, l) : L;
  var T;
  if (u && ml(P) && (T = (T = (T = P)
        .replace(/(\w+)\s*=\s*"([^"]*)"/g, (e, t, o) => `${t}="${cl(o)}"`))
      .replace(/(\w+)\s*=\s*'([^']*)'/g, (e, t, o) => `${t}='${cl(o)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(T) && (T = T.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi, /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach(e => {
        T = T.replace(e, "$1javascript&#58;")
      }), P = T), __INTLIFY_PROD_DEVTOOLS__) {
    const t = {
      timestamp: Date.now(),
      key: ml(l) ? l : wd(k) ? k.key : "",
      locale: v || (wd(k) ? k.locale : ""),
      format: ml(k) ? k : wd(k) ? k.source : "",
      message: P
    };
    t.meta = rl({}, e.__meta, Xc() || {}), wc(t)
  }
  return P
}

function Ld(e, t, o, r, s, i) {
  const {
    messages: n,
    onWarn: a,
    messageResolver: l,
    localeFallbacker: c
  } = e, d = c(e, r, o);
  let p, u = il(),
    f = null;
  for (let m = 0; m < d.length && (p = d[m], u = n[p] || il(), null === (f = l(u, t)) && (f = u[t]), !(ml(f) || sc(f) || wd(f))); m++)
    if (!ld(p, d)) {
      const o = id(e, t, p, 0, "translate");
      o !== t && (f = o)
    } return [f, p, u]
}

function Pd(e, t, o, r, s, i) {
  const {
    messageCompiler: n,
    warnHtmlMessage: a
  } = e;
  if (wd(r)) {
    const e = r;
    return e.locale = e.locale || o, e.key = e.key || t, e
  }
  if (null == n) {
    const e = () => r;
    return e.locale = o, e.key = t, e
  }
  const l = n(r, function(e, t, o, r, s, i) {
    return {
      locale: t,
      key: o,
      warnHtmlMessage: s,
      onError: e => {
        throw i && i(e), e
      },
      onCacheKey: e => ((e, t, o) => Xa({
        l: e,
        k: t,
        s: o
      }))(t, o, e)
    }
  }(0, o, s, 0, a, i));
  return l.locale = o, l.key = t, l.source = r, l
}

function Td(...e) {
  const [t, o, r] = e, s = il();
  if (!(ml(t) || el(t) || wd(t) || sc(t))) throw Ic(Lc);
  const i = el(t) ? String(t) : (wd(t), t);
  return el(o) ? s.plural = o : ml(o) ? s.default = o : vl(o) && !ol(o) ? s.named = o : ul(o) && (s.list = o), el(r) ? s.plural = r : ml(r) ? s.default = r : vl(r) && rl(s, r), [i, s]
}
"boolean" != typeof __INTLIFY_PROD_DEVTOOLS__ && (al()
  .__INTLIFY_PROD_DEVTOOLS__ = !1), "boolean" != typeof __INTLIFY_DROP_MESSAGE_COMPILER__ && (al()
  .__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
const Od = 24,
  Cd = 25,
  Rd = 26,
  Id = 27,
  Sd = 28,
  Dd = 29,
  jd = 31,
  Bd = 32;

function zd(e, ...t) {
  return Fl(e, null, void 0)
}
const Fd = Za("__translateVNode"),
  Vd = Za("__datetimeParts"),
  Nd = Za("__numberParts"),
  Md = Za("__setPluralRules"),
  Ud = Za("__injectWithOption"),
  qd = Za("__dispose");

function Wd(e) {
  if (!hl(e)) return e;
  if (sc(e)) return e;
  for (const t in e)
    if (pl(e, t))
      if (t.includes(".")) {
        const o = t.split("."),
          r = o.length - 1;
        let s = e,
          i = !1;
        for (let e = 0; e < r; e++) {
          if ("__proto__" === o[e]) throw new Error(`unsafe key: ${o[e]}`);
          if (o[e] in s || (s[o[e]] = il()), !hl(s[o[e]])) {
            i = !0;
            break
          }
          s = s[o[e]]
        }
        if (i || (sc(s) ? hc.includes(o[r]) || delete e[t] : (s[o[r]] = e[t], delete e[t])), !sc(s)) {
          const e = s[o[r]];
          hl(e) && Wd(e)
        }
      } else hl(e[t]) && Wd(e[t]);
  return e
}

function $d(e, t) {
  const {
    messages: o,
    __i18n: r,
    messageResolver: s,
    flatJson: i
  } = t, n = vl(o) ? o : ul(r) ? il() : {
    [e]: il()
  };
  if (ul(r) && r.forEach(e => {
      if ("locale" in e && "resource" in e) {
        const {
          locale: t,
          resource: o
        } = e;
        t ? (n[t] = n[t] || il(), xl(o, n[t])) : xl(o, n)
      } else ml(e) && xl(JSON.parse(e), n)
    }), null == s && i)
    for (const a in n) pl(n, a) && Wd(n[a]);
  return n
}

function Hd(e) {
  return e.type
}

function Qd(e, t, o) {
  let r = hl(t.messages) ? t.messages : il();
  "__i18nGlobal" in o && (r = $d(e.locale.value, {
    messages: r,
    __i18n: o.__i18nGlobal
  }));
  const s = Object.keys(r);
  if (s.length && s.forEach(t => {
      e.mergeLocaleMessage(t, r[t])
    }), hl(t.datetimeFormats)) {
    const o = Object.keys(t.datetimeFormats);
    o.length && o.forEach(o => {
      e.mergeDateTimeFormat(o, t.datetimeFormats[o])
    })
  }
  if (hl(t.numberFormats)) {
    const o = Object.keys(t.numberFormats);
    o.length && o.forEach(o => {
      e.mergeNumberFormat(o, t.numberFormats[o])
    })
  }
}

function Gd(e) {
  return Is(hs, null, e, 0)
}

function Kd() {
  return $s()
}
const Yd = () => [],
  Jd = () => !1;
let Zd = 0;

function Xd(e) {
  return (t, o, r, s) => e(o, r, Kd() || void 0, s)
}

function ep(e = {}) {
  const {
    __root: t,
    __injectWithOption: o
  } = e, r = void 0 === t, s = e.flatJson, i = Ja ? At : Lt;
  let n = !bl(e.inheritLocale) || e.inheritLocale;
  const a = i(t && n ? t.locale.value : ml(e.locale) ? e.locale : Qc),
    l = i(t && n ? t.fallbackLocale.value : ml(e.fallbackLocale) || ul(e.fallbackLocale) || vl(e.fallbackLocale) || !1 === e.fallbackLocale ? e.fallbackLocale : a.value),
    c = i($d(a.value, e)),
    d = i(vl(e.datetimeFormats) ? e.datetimeFormats : {
      [a.value]: {}
    }),
    p = i(vl(e.numberFormats) ? e.numberFormats : {
      [a.value]: {}
    });
  let u = t ? t.missingWarn : !bl(e.missingWarn) && !tl(e.missingWarn) || e.missingWarn,
    f = t ? t.fallbackWarn : !bl(e.fallbackWarn) && !tl(e.fallbackWarn) || e.fallbackWarn,
    m = t ? t.fallbackRoot : !bl(e.fallbackRoot) || e.fallbackRoot,
    b = !!e.fallbackFormat,
    g = fl(e.missing) ? e.missing : null,
    _ = fl(e.missing) ? Xd(e.missing) : null,
    v = fl(e.postTranslation) ? e.postTranslation : null,
    y = t ? t.warnHtmlMessage : !bl(e.warnHtmlMessage) || e.warnHtmlMessage,
    k = !!e.escapeParameter;
  const x = t ? t.modifiers : vl(e.modifiers) ? e.modifiers : {};
  let E, w = e.pluralRules || t && t.pluralRules;
  E = (() => {
    r && td(null);
    const t = {
      version: "11.2.8",
      locale: a.value,
      fallbackLocale: l.value,
      messages: c.value,
      modifiers: x,
      pluralRules: w,
      missing: null === _ ? void 0 : _,
      missingWarn: u,
      fallbackWarn: f,
      fallbackFormat: b,
      unresolving: !0,
      postTranslation: null === v ? void 0 : v,
      warnHtmlMessage: y,
      escapeParameter: k,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: {
        framework: "vue"
      }
    };
    t.datetimeFormats = d.value, t.numberFormats = p.value, t.__datetimeFormatters = vl(E) ? E.__datetimeFormatters : void 0, t.__numberFormatters = vl(E) ? E.__numberFormatters : void 0;
    const o = rd(t);
    return r && td(o), o
  })(), nd(E, a.value, l.value);
  const A = si({
      get: () => a.value,
      set: e => {
        E.locale = e, a.value = e
      }
    }),
    L = si({
      get: () => l.value,
      set: e => {
        E.fallbackLocale = e, l.value = e, nd(E, a.value, e)
      }
    }),
    P = si(() => c.value),
    T = si(() => d.value),
    O = si(() => p.value);
  const C = (e, o, s, i, n, u) => {
    let f;
    a.value, l.value, c.value, d.value, p.value;
    try {
      __INTLIFY_PROD_DEVTOOLS__,
      r || (E.fallbackContext = t ? ed : void 0),
      f = e(E)
    }
    finally {
      __INTLIFY_PROD_DEVTOOLS__,
      r || (E.fallbackContext = void 0)
    }
    if ("translate exists" !== s && el(f) && -1 === f || "translate exists" === s && !f) {
      const [e, r] = o();
      return t && m ? i(t) : n(e)
    }
    if (u(f)) return f;
    throw zd(Od)
  };

  function R(...e) {
    return C(t => Reflect.apply(Ad, null, [t, ...e]), () => Td(...e), "translate", t => Reflect.apply(t.t, t, [...e]), e => e, e => ml(e))
  }
  const I = {
    normalize: function(e) {
      return e.map(e => ml(e) || el(e) || bl(e) ? Gd(String(e)) : e)
    },
    interpolate: e => e,
    type: "vnode"
  };

  function S(e) {
    return c.value[e] || {}
  }
  Zd++, t && Ja && (bo(t.locale, e => {
    n && (a.value = e, E.locale = e, nd(E, a.value, l.value))
  }), bo(t.fallbackLocale, e => {
    n && (l.value = e, E.fallbackLocale = e, nd(E, a.value, l.value))
  }));
  const D = {
    id: Zd,
    locale: A,
    fallbackLocale: L,
    get inheritLocale() {
      return n
    },
    set inheritLocale(e) {
      n = e, e && t && (a.value = t.locale.value, l.value = t.fallbackLocale.value, nd(E, a.value, l.value))
    },
    get availableLocales() {
      return Object.keys(c.value)
        .sort()
    },
    messages: P,
    get modifiers() {
      return x
    },
    get pluralRules() {
      return w || {}
    },
    get isGlobal() {
      return r
    },
    get missingWarn() {
      return u
    },
    set missingWarn(e) {
      u = e, E.missingWarn = u
    },
    get fallbackWarn() {
      return f
    },
    set fallbackWarn(e) {
      f = e, E.fallbackWarn = f
    },
    get fallbackRoot() {
      return m
    },
    set fallbackRoot(e) {
      m = e
    },
    get fallbackFormat() {
      return b
    },
    set fallbackFormat(e) {
      b = e, E.fallbackFormat = b
    },
    get warnHtmlMessage() {
      return y
    },
    set warnHtmlMessage(e) {
      y = e, E.warnHtmlMessage = e
    },
    get escapeParameter() {
      return k
    },
    set escapeParameter(e) {
      k = e, E.escapeParameter = e
    },
    t: R,
    getLocaleMessage: S,
    setLocaleMessage: function(e, t) {
      if (s) {
        const o = {
          [e]: t
        };
        for (const e in o) pl(o, e) && Wd(o[e]);
        t = o[e]
      }
      c.value[e] = t, E.messages = c.value
    },
    mergeLocaleMessage: function(e, t) {
      c.value[e] = c.value[e] || {};
      const o = {
        [e]: t
      };
      if (s)
        for (const r in o) pl(o, r) && Wd(o[r]);
      xl(t = o[e], c.value[e]), E.messages = c.value
    },
    getPostTranslationHandler: function() {
      return fl(v) ? v : null
    },
    setPostTranslationHandler: function(e) {
      v = e, E.postTranslation = e
    },
    getMissingHandler: function() {
      return g
    },
    setMissingHandler: function(e) {
      null !== e && (_ = Xd(e)), g = e, E.missing = _
    },
    [Md]: function(e) {
      w = e, E.pluralRules = w
    }
  };
  return D.datetimeFormats = T, D.numberFormats = O, D.rt = function(...e) {
    const [t, o, r] = e;
    if (r && !hl(r)) throw zd(Cd);
    return R(t, o, rl({
      resolvedMessage: !0
    }, r || {}))
  }, D.te = function(e, t) {
    return C(() => {
      if (!e) return !1;
      const o = S(ml(t) ? t : a.value),
        r = E.messageResolver(o, e);
      return sc(r) || wd(r) || ml(r)
    }, () => [e], "translate exists", o => Reflect.apply(o.te, o, [e, t]), Jd, e => bl(e))
  }, D.tm = function(e) {
    const o = function(e) {
      let t = null;
      const o = zc(E, l.value, a.value);
      for (let r = 0; r < o.length; r++) {
        const s = c.value[o[r]] || {},
          i = E.messageResolver(s, e);
        if (null != i) {
          t = i;
          break
        }
      }
      return t
    }(e);
    return null != o ? o : t && t.tm(e) || {}
  }, D.d = function(...e) {
    return C(t => Reflect.apply(cd, null, [t, ...e]), () => pd(...e), "datetime format", t => Reflect.apply(t.d, t, [...e]), () => "", e => ml(e) || ul(e))
  }, D.n = function(...e) {
    return C(t => Reflect.apply(fd, null, [t, ...e]), () => bd(...e), "number format", t => Reflect.apply(t.n, t, [...e]), () => "", e => ml(e) || ul(e))
  }, D.getDateTimeFormat = function(e) {
    return d.value[e] || {}
  }, D.setDateTimeFormat = function(e, t) {
    d.value[e] = t, E.datetimeFormats = d.value, ud(E, e, t)
  }, D.mergeDateTimeFormat = function(e, t) {
    d.value[e] = rl(d.value[e] || {}, t), E.datetimeFormats = d.value, ud(E, e, t)
  }, D.getNumberFormat = function(e) {
    return p.value[e] || {}
  }, D.setNumberFormat = function(e, t) {
    p.value[e] = t, E.numberFormats = p.value, hd(E, e, t)
  }, D.mergeNumberFormat = function(e, t) {
    p.value[e] = rl(p.value[e] || {}, t), E.numberFormats = p.value, hd(E, e, t)
  }, D[Ud] = o, D[Fd] = function(...e) {
    return C(t => {
      let o;
      const r = t;
      try {
        r.processor = I, o = Reflect.apply(Ad, null, [r, ...e])
      } finally {
        r.processor = null
      }
      return o
    }, () => Td(...e), "translate", t => t[Fd](...e), e => [Gd(e)], e => ul(e))
  }, D[Vd] = function(...e) {
    return C(t => Reflect.apply(cd, null, [t, ...e]), () => pd(...e), "datetime format", t => t[Vd](...e), Yd, e => ml(e) || ul(e))
  }, D[Nd] = function(...e) {
    return C(t => Reflect.apply(fd, null, [t, ...e]), () => bd(...e), "number format", t => t[Nd](...e), Yd, e => ml(e) || ul(e))
  }, D
}

function tp(e = {}) {
  const t = ep(function(e) {
      const t = ml(e.locale) ? e.locale : Qc,
        o = ml(e.fallbackLocale) || ul(e.fallbackLocale) || vl(e.fallbackLocale) || !1 === e.fallbackLocale ? e.fallbackLocale : t,
        r = fl(e.missing) ? e.missing : void 0,
        s = !bl(e.silentTranslationWarn) && !tl(e.silentTranslationWarn) || !e.silentTranslationWarn,
        i = !bl(e.silentFallbackWarn) && !tl(e.silentFallbackWarn) || !e.silentFallbackWarn,
        n = !bl(e.fallbackRoot) || e.fallbackRoot,
        a = !!e.formatFallbackMessages,
        l = vl(e.modifiers) ? e.modifiers : {},
        c = e.pluralizationRules,
        d = fl(e.postTranslation) ? e.postTranslation : void 0,
        p = !ml(e.warnHtmlInMessage) || "off" !== e.warnHtmlInMessage,
        u = !!e.escapeParameterHtml,
        f = !bl(e.sync) || e.sync;
      let m = e.messages;
      if (vl(e.sharedMessages)) {
        const t = e.sharedMessages;
        m = Object.keys(t)
          .reduce((e, o) => {
            const r = e[o] || (e[o] = {});
            return rl(r, t[o]), e
          }, m || {})
      }
      const {
        __i18n: b,
        __root: g,
        __injectWithOption: _
      } = e, v = e.datetimeFormats, y = e.numberFormats;
      return {
        locale: t,
        fallbackLocale: o,
        messages: m,
        flatJson: e.flatJson,
        datetimeFormats: v,
        numberFormats: y,
        missing: r,
        missingWarn: s,
        fallbackWarn: i,
        fallbackRoot: n,
        fallbackFormat: a,
        modifiers: l,
        pluralRules: c,
        postTranslation: d,
        warnHtmlMessage: p,
        escapeParameter: u,
        messageResolver: e.messageResolver,
        inheritLocale: f,
        __i18n: b,
        __root: g,
        __injectWithOption: _
      }
    }(e)),
    {
      __extender: o
    } = e,
    r = {
      id: t.id,
      get locale() {
        return t.locale.value
      },
      set locale(e) {
        t.locale.value = e
      },
      get fallbackLocale() {
        return t.fallbackLocale.value
      },
      set fallbackLocale(e) {
        t.fallbackLocale.value = e
      },
      get messages() {
        return t.messages.value
      },
      get datetimeFormats() {
        return t.datetimeFormats.value
      },
      get numberFormats() {
        return t.numberFormats.value
      },
      get availableLocales() {
        return t.availableLocales
      },
      get missing() {
        return t.getMissingHandler()
      },
      set missing(e) {
        t.setMissingHandler(e)
      },
      get silentTranslationWarn() {
        return bl(t.missingWarn) ? !t.missingWarn : t.missingWarn
      },
      set silentTranslationWarn(e) {
        t.missingWarn = bl(e) ? !e : e
      },
      get silentFallbackWarn() {
        return bl(t.fallbackWarn) ? !t.fallbackWarn : t.fallbackWarn
      },
      set silentFallbackWarn(e) {
        t.fallbackWarn = bl(e) ? !e : e
      },
      get modifiers() {
        return t.modifiers
      },
      get formatFallbackMessages() {
        return t.fallbackFormat
      },
      set formatFallbackMessages(e) {
        t.fallbackFormat = e
      },
      get postTranslation() {
        return t.getPostTranslationHandler()
      },
      set postTranslation(e) {
        t.setPostTranslationHandler(e)
      },
      get sync() {
        return t.inheritLocale
      },
      set sync(e) {
        t.inheritLocale = e
      },
      get warnHtmlInMessage() {
        return t.warnHtmlMessage ? "warn" : "off"
      },
      set warnHtmlInMessage(e) {
        t.warnHtmlMessage = "off" !== e
      },
      get escapeParameterHtml() {
        return t.escapeParameter
      },
      set escapeParameterHtml(e) {
        t.escapeParameter = e
      },
      get pluralizationRules() {
        return t.pluralRules || {}
      },
      __composer: t,
      t: (...e) => Reflect.apply(t.t, t, [...e]),
      rt: (...e) => Reflect.apply(t.rt, t, [...e]),
      te: (e, o) => t.te(e, o),
      tm: e => t.tm(e),
      getLocaleMessage: e => t.getLocaleMessage(e),
      setLocaleMessage(e, o) {
        t.setLocaleMessage(e, o)
      },
      mergeLocaleMessage(e, o) {
        t.mergeLocaleMessage(e, o)
      },
      d: (...e) => Reflect.apply(t.d, t, [...e]),
      getDateTimeFormat: e => t.getDateTimeFormat(e),
      setDateTimeFormat(e, o) {
        t.setDateTimeFormat(e, o)
      },
      mergeDateTimeFormat(e, o) {
        t.mergeDateTimeFormat(e, o)
      },
      n: (...e) => Reflect.apply(t.n, t, [...e]),
      getNumberFormat: e => t.getNumberFormat(e),
      setNumberFormat(e, o) {
        t.setNumberFormat(e, o)
      },
      mergeNumberFormat(e, o) {
        t.mergeNumberFormat(e, o)
      }
    };
  return r.__extender = o, r
}

function op(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[Md](t.pluralizationRules || e.pluralizationRules);
  const o = $d(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(o)
    .forEach(t => e.mergeLocaleMessage(t, o[t])), t.datetimeFormats && Object.keys(t.datetimeFormats)
    .forEach(o => e.mergeDateTimeFormat(o, t.datetimeFormats[o])), t.numberFormats && Object.keys(t.numberFormats)
    .forEach(o => e.mergeNumberFormat(o, t.numberFormats[o])), e
}
const rp = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    validator: e => "parent" === e || "global" === e,
    default: "parent"
  },
  i18n: {
    type: Object
  }
};

function sp() {
  return bs
}
const ip = zo({
  name: "i18n-t",
  props: rl({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      validator: e => el(e) || !isNaN(e)
    }
  }, rp),
  setup(e, t) {
    const {
      slots: o,
      attrs: r
    } = t, s = e.i18n || fp({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const i = Object.keys(o)
        .filter(e => "_" !== e[0]),
        n = il();
      e.locale && (n.locale = e.locale), void 0 !== e.plural && (n.plural = ml(e.plural) ? +e.plural : e.plural);
      const a = function({
          slots: e
        }, t) {
          if (1 === t.length && "default" === t[0]) return (e.default ? e.default() : [])
            .reduce((e, t) => [...e, ...t.type === bs ? t.children : [t]], []);
          return t.reduce((t, o) => {
            const r = e[o];
            return r && (t[o] = r()), t
          }, il())
        }(t, i),
        l = s[Fd](e.keypath, a, n),
        c = rl(il(), r);
      return ii(ml(e.tag) || hl(e.tag) ? e.tag : sp(), c, l)
    }
  }
});

function np(e, t, o, r) {
  const {
    slots: s,
    attrs: i
  } = t;
  return () => {
    const t = {
      part: !0
    };
    let n = il();
    e.locale && (t.locale = e.locale), ml(e.format) ? t.key = e.format : hl(e.format) && (ml(e.format.key) && (t.key = e.format.key), n = Object.keys(e.format)
      .reduce((t, r) => o.includes(r) ? rl(il(), t, {
        [r]: e.format[r]
      }) : t, il()));
    const a = r(e.value, t, n);
    let l = [t.key];
    ul(a) ? l = a.map((e, t) => {
      const o = s[e.type],
        r = o ? o({
          [e.type]: e.value,
          index: t,
          parts: a
        }) : [e.value];
      var i;
      return ul(i = r) && !ml(i[0]) && (r[0].key = `${e.type}-${t}`), r
    }) : ml(a) && (l = [a]);
    const c = rl(il(), i);
    return ii(ml(e.tag) || hl(e.tag) ? e.tag : sp(), c, l)
  }
}
const ap = zo({
  name: "i18n-n",
  props: rl({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, rp),
  setup(e, t) {
    const o = e.i18n || fp({
      useScope: e.scope,
      __useComponent: !0
    });
    return np(e, t, md, (...e) => o[Nd](...e))
  }
});

function lp(e) {
  if (ml(e)) return {
    path: e
  };
  if (vl(e)) {
    if (!("path" in e)) throw zd(Sd);
    return e
  }
  throw zd(Dd)
}

function cp(e) {
  const {
    path: t,
    locale: o,
    args: r,
    choice: s,
    plural: i
  } = e, n = {}, a = r || {};
  return ml(o) && (n.locale = o), el(s) && (n.plural = s), el(i) && (n.plural = i), [t, a, n]
}

function dp(e, t, ...o) {
  const r = vl(o[0]) ? o[0] : {};
  (!bl(r.globalInstall) || r.globalInstall) && ([ip.name, "I18nT"].forEach(t => e.component(t, ip)), [ap.name, "I18nN"].forEach(t => e.component(t, ap)), [hp.name, "I18nD"].forEach(t => e.component(t, hp))), e.directive("t", function(e) {
    const t = t => {
      const {
        instance: o,
        value: r
      } = t;
      if (!o || !o.$) throw zd(Bd);
      const s = function(e, t) {
          const o = e;
          if ("composition" === e.mode) return o.__getInstance(t) || e.global;
          {
            const r = o.__getInstance(t);
            return null != r ? r.__composer : e.global.__composer
          }
        }(e, o.$),
        i = lp(r);
      return [Reflect.apply(s.t, s, [...cp(i)]), s]
    };
    return {
      created: (o, r) => {
        const [s, i] = t(r);
        Ja && e.global === i && (o.__i18nWatcher = bo(i.locale, () => {
          r.instance && r.instance.$forceUpdate()
        })), o.__composer = i, o.textContent = s
      },
      unmounted: e => {
        Ja && e.__i18nWatcher && (e.__i18nWatcher(), e.__i18nWatcher = void 0, delete e.__i18nWatcher), e.__composer && (e.__composer = void 0, delete e.__composer)
      },
      beforeUpdate: (e, {
        value: t
      }) => {
        if (e.__composer) {
          const o = e.__composer,
            r = lp(t);
          e.textContent = Reflect.apply(o.t, o, [...cp(r)])
        }
      },
      getSSRProps: e => {
        const [o] = t(e);
        return {
          textContent: o
        }
      }
    }
  }(t))
}
const pp = Za("global-vue-i18n");

function up(e = {}) {
  const t = __VUE_I18N_LEGACY_API__ && bl(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__,
    o = !bl(e.globalInjection) || e.globalInjection,
    r = new Map,
    [s, i] = function(e, t) {
      const o = new se(s),
        r = __VUE_I18N_LEGACY_API__ && t ? o.run(() => tp(e)) : o.run(() => ep(e));
      var s;
      if (null == r) throw zd(Bd);
      return [o, r]
    }(e, t),
    n = Za("");
  const a = {
    get mode() {
      return __VUE_I18N_LEGACY_API__ && t ? "legacy" : "composition"
    },
    async install(e, ...r) {
      if (e.__VUE_I18N_SYMBOL__ = n, e.provide(e.__VUE_I18N_SYMBOL__, a), vl(r[0])) {
        const e = r[0];
        a.__composerExtend = e.__composerExtend, a.__vueI18nExtend = e.__vueI18nExtend
      }
      let s = null;
      !t && o && (s = function(e, t) {
        const o = Object.create(null);
        mp.forEach(e => {
          const r = Object.getOwnPropertyDescriptor(t, e);
          if (!r) throw zd(Bd);
          const s = wt(r.value) ? {
            get: () => r.value.value,
            set(e) {
              r.value.value = e
            }
          } : {
            get: () => r.get && r.get()
          };
          Object.defineProperty(o, e, s)
        }), e.config.globalProperties.$i18n = o, bp.forEach(o => {
          const r = Object.getOwnPropertyDescriptor(t, o);
          if (!r || !r.value) throw zd(Bd);
          Object.defineProperty(e.config.globalProperties, `$${o}`, r)
        });
        const r = () => {
          delete e.config.globalProperties.$i18n, bp.forEach(t => {
            delete e.config.globalProperties[`$${t}`]
          })
        };
        return r
      }(e, a.global)), __VUE_I18N_FULL_INSTALL__ && dp(e, a, ...r), __VUE_I18N_LEGACY_API__ && t && e.mixin(function(e, t, o) {
        return {
          beforeCreate() {
            const r = Kd();
            if (!r) throw zd(Bd);
            const s = this.$options;
            if (s.i18n) {
              const r = s.i18n;
              if (s.__i18n && (r.__i18n = s.__i18n), r.__root = t, this === this.$root) this.$i18n = op(e, r);
              else {
                r.__injectWithOption = !0, r.__extender = o.__vueI18nExtend, this.$i18n = tp(r);
                const e = this.$i18n;
                e.__extender && (e.__disposer = e.__extender(this.$i18n))
              }
            } else if (s.__i18n)
              if (this === this.$root) this.$i18n = op(e, s);
              else {
                this.$i18n = tp({
                  __i18n: s.__i18n,
                  __injectWithOption: !0,
                  __extender: o.__vueI18nExtend,
                  __root: t
                });
                const e = this.$i18n;
                e.__extender && (e.__disposer = e.__extender(this.$i18n))
              }
            else this.$i18n = e;
            s.__i18nGlobal && Qd(t, s, s), this.$t = (...e) => this.$i18n.t(...e), this.$rt = (...e) => this.$i18n.rt(...e), this.$te = (e, t) => this.$i18n.te(e, t), this.$d = (...e) => this.$i18n.d(...e), this.$n = (...e) => this.$i18n.n(...e), this.$tm = e => this.$i18n.tm(e), o.__setInstance(r, this.$i18n)
          },
          mounted() {},
          unmounted() {
            const e = Kd();
            if (!e) throw zd(Bd);
            const t = this.$i18n;
            delete this.$t, delete this.$rt, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, t.__disposer && (t.__disposer(), delete t.__disposer, delete t.__extender), o.__deleteInstance(e), delete this.$i18n
          }
        }
      }(i, i.__composer, a));
      const l = e.unmount;
      e.unmount = () => {
        s && s(), a.dispose(), l()
      }
    },
    get global() {
      return i
    },
    dispose() {
      s.stop()
    },
    __instances: r,
    __getInstance: function(e) {
      return r.get(e) || null
    },
    __setInstance: function(e, t) {
      r.set(e, t)
    },
    __deleteInstance: function(e) {
      r.delete(e)
    }
  };
  return a
}

function fp(e = {}) {
  const t = Kd();
  if (null == t) throw zd(Rd);
  if (!t.isCE && null != t.appContext.app && !t.appContext.app.__VUE_I18N_SYMBOL__) throw zd(Id);
  const o = function(e) {
      const t = po(e.isCE ? pp : e.appContext.app.__VUE_I18N_SYMBOL__);
      if (!t) throw zd(e.isCE ? jd : Bd);
      return t
    }(t),
    r = function(e) {
      return "composition" === e.mode ? e.global : e.global.__composer
    }(o),
    s = Hd(t),
    i = function(e, t) {
      return ol(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local"
    }(e, s);
  if ("global" === i) return Qd(r, e, s), r;
  if ("parent" === i) {
    let s = function(e, t, o = !1) {
      let r = null;
      const s = t.root;
      let i = function(e, t = !1) {
        if (null == e) return null;
        return t && e.vnode.ctx || e.parent
      }(t, o);
      for (; null != i;) {
        const t = e;
        if ("composition" === e.mode) r = t.__getInstance(i);
        else if (__VUE_I18N_LEGACY_API__) {
          const e = t.__getInstance(i);
          null != e && (r = e.__composer, o && r && !r[Ud] && (r = null))
        }
        if (null != r) break;
        if (s === i) break;
        i = i.parent
      }
      return r
    }(o, t, e.__useComponent);
    return null == s && (s = r), s
  }
  const n = o;
  let a = n.__getInstance(t);
  if (null == a) {
    const o = rl({}, e);
    "__i18n" in s && (o.__i18n = s.__i18n), r && (o.__root = r), a = ep(o), n.__composerExtend && (a[qd] = n.__composerExtend(a)),
      function(e, t, o) {
        Zo(() => {}, t), or(() => {
          const r = o;
          e.__deleteInstance(t);
          const s = r[qd];
          s && (s(), delete r[qd])
        }, t)
      }(n, t, a), n.__setInstance(t, a)
  }
  return a
}
const mp = ["locale", "fallbackLocale", "availableLocales"],
  bp = ["t", "rt", "d", "n", "tm", "te"];
const hp = zo({
  name: "i18n-d",
  props: rl({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, rp),
  setup(e, t) {
    const o = e.i18n || fp({
      useScope: e.scope,
      __useComponent: !0
    });
    return np(e, t, dd, (...e) => o[Vd](...e))
  }
});
var gp;
if ("boolean" != typeof __VUE_I18N_FULL_INSTALL__ && (al()
    .__VUE_I18N_FULL_INSTALL__ = !0), "boolean" != typeof __VUE_I18N_LEGACY_API__ && (al()
    .__VUE_I18N_LEGACY_API__ = !0), "boolean" != typeof __INTLIFY_DROP_MESSAGE_COMPILER__ && (al()
    .__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), "boolean" != typeof __INTLIFY_PROD_DEVTOOLS__ && (al()
    .__INTLIFY_PROD_DEVTOOLS__ = !1), Kc = function(e, t) {
    if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && ml(e)) {
      !bl(t.warnHtmlMessage) || t.warnHtmlMessage;
      const o = (t.onCacheKey || kc)(e),
        r = xc[o];
      if (r) return r;
      const {
        ast: s,
        detectError: i
      } = function(e, t = {}) {
        let o = !1;
        const r = t.onError || Vl;
        return t.onError = e => {
          o = !0, r(e)
        }, {
          ...rc(e, t),
          detectError: o
        }
      }(e, {
        ...t,
        location: !1,
        jit: !0
      }), n = _c(s);
      return i ? n : xc[o] = n
    } {
      const t = e.cacheKey;
      if (t) {
        const o = xc[t];
        return o || (xc[t] = _c(e))
      }
      return _c(e)
    }
  }, Yc = function(e, t) {
    if (!hl(e)) return null;
    let o = $c.get(t);
    if (o || (o = function(e) {
        const t = [];
        let o, r, s, i, n, a, l, c = -1,
          d = 0,
          p = 0;
        const u = [];

        function f() {
          const t = e[c + 1];
          if (5 === d && "'" === t || 6 === d && '"' === t) return c++, s = "\\" + t, u[0](), !0
        }
        for (u[0] = () => {
            void 0 === r ? r = s : r += s
          }, u[1] = () => {
            void 0 !== r && (t.push(r), r = void 0)
          }, u[2] = () => {
            u[0](), p++
          }, u[3] = () => {
            if (p > 0) p--, d = 4, u[0]();
            else {
              if (p = 0, void 0 === r) return !1;
              if (r = Wc(r), !1 === r) return !1;
              u[1]()
            }
          }; null !== d;)
          if (c++, o = e[c], "\\" !== o || !f()) {
            if (i = qc(o), l = Mc[d], n = l[i] || l.l || 8, 8 === n) return;
            if (d = n[0], void 0 !== n[1] && (a = u[n[1]], a && (s = o, !1 === a()))) return;
            if (7 === d) return t
          }
      }(t), o && $c.set(t, o)), !o) return null;
    const r = o.length;
    let s = e,
      i = 0;
    for (; i < r;) {
      const e = o[i];
      if (hc.includes(e) && sc(s)) return null;
      const t = s[e];
      if (void 0 === t) return null;
      if (fl(s)) return null;
      s = t, i++
    }
    return s
  }, Jc = zc, __INTLIFY_PROD_DEVTOOLS__) {
  const e = al();
  e.__INTLIFY__ = !0, gp = e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__, Ec = gp
}
const _p = Object.assign({
    "../../pca-configs/i18n/cs-CZ.json": () => t(() => import("./cs-CZ-D3CsCP18.js"), []),
    "../../pca-configs/i18n/de-DE.json": () => t(() => import("./de-DE-DOzpMRqD.js"), []),
    "../../pca-configs/i18n/en-GB.json": () => t(() => import("./en-GB-DVI45jjI.js"), []),
    "../../pca-configs/i18n/es-ES.json": () => t(() => import("./es-ES-XcKp2TIc.js"), []),
    "../../pca-configs/i18n/fr-BE.json": () => t(() => import("./fr-BE-CjO-Gi1S.js"), []),
    "../../pca-configs/i18n/fr-FR.json": () => t(() => import("./fr-FR-YFzPfFW4.js"), []),
    "../../pca-configs/i18n/nl-BE.json": () => t(() => import("./nl-BE-iqLZ8kwV.js"), []),
    "../../pca-configs/i18n/nl-NL.json": () => t(() => import("./nl-NL-D1mEH2Qp.js"), []),
    "../../pca-configs/i18n/pl-PL.json": () => t(() => import("./pl-PL-BOZDGeRw.js"), []),
    "../../pca-configs/i18n/sk-SK.json": () => t(() => import("./sk-SK-tInVS496.js"), [])
  }),
  vp = At(),
  yp = At(),
  kp = e => {
    const {
      getLocale: t
    } = qa(), {
      getEnvironment: o
    } = kn(), r = t(), s = o(), i = async () => {
      const e = (window?.__pca?.i18n ? Object.freeze({
        ...window.__pca.i18n
      }) : null) ?? await (async e => {
        try {
          const t = Object.keys(_p)
            .find(t => t.endsWith(e));
          if (!t) throw new Error(`i18n: no i18n file found for locale ${r}`);
          return Object.freeze((await _p[t]())
            .default)
        } catch (q_) {
          console.error(`i18n: error loading messages for locale ${r}`, q_)
        }
        return null
      })(`/${r}.json`);
      return e ? (vp.value = {
        [r]: e
      }, yp.value = up({
        legacy: !1,
        locale: r,
        messages: vp.value,
        warnHtmlMessage: s !== yn.PROD,
        missingWarn: s !== yn.PROD
      }), !0) : (console.error(`i18n: no messages found for locale ${r}`), !1)
    }, n = (e, t) => yp.value?.global?.t ? yp.value.global.t(e, t) : s !== yn.PROD ? String(e) : "";
    return void 0 === window.__pca?.isI18nInitialized && ((window.__pca ??= {})
      .isI18nInitialized = i()), {
      i18n: yp,
      messages: vp,
      t: n,
      te: e => !!vp.value && (null != e && !!vp.value[r] && e in vp.value[r] && "" !== n(e)),
      init: async () => await (window.__pca?.isI18nInitialized)
    }
  },
  xp = (e, t) => {
    const o = e.__vccOpts || e;
    for (const [r, s] of t) o[r] = s;
    return o
  },
  Ep = {
    name: "placeholder",
    baseClass: "core-icon"
  },
  wp = Symbol(),
  Ap = "OdsIconLocal",
  Lp = xp(zo({
    __name: "CoreIcon",
    props: yr({
      name: {},
      baseClass: {}
    }, {
      ...Ep,
      baseClass: "core-icon"
    }),
    setup(e) {
      const o = e,
        r = Lt(),
        s = po(wp, Ap);
      return bo(() => o.name, async () => {
        if (s == Ap) {
          const e = await t(() => import("./CoreIconLocal.UDaNewX1-C9cS39ou.js"), []);
          r.value = e.default
        } else r.value = s
      }, {
        immediate: !0
      }), (e, t) => (ks(), Ls(lr(r.value), Ns({
        ...e.$attrs,
        ...o
      }, {
        class: e.baseClass
      }), null, 16, ["class"]))
    }
  }), [
    ["__scopeId", "data-v-e61d77e7"]
  ]),
  Pp = Symbol(),
  Tp = "info",
  Op = "warning",
  Cp = "error",
  Rp = {},
  Ip = e => {
    const t = po(Pp, {
        enableLogs: !1,
        logLevel: Cp
      }),
      o = e => {
        if (t && t.enableLogs) switch (e) {
          case Tp:
            return !0;
          case Op:
            return t.logLevel === Op || t.logLevel === Cp;
          case Cp:
            return t.logLevel === Cp
        }
        return !1
      };
    return {
      warn: (t, ...r) => {
        o(Op) && console.warn(`[OdsLidl/${e}] - ${t}`, ...r)
      },
      error: (t, ...r) => {
        o(Cp) && console.error(`[OdsLidl/${e}] - ${t}`, ...r)
      },
      info: (t, ...r) => {
        o(Tp) && console.log(`[OdsLidl/${e}] - ${t}`, ...r)
      },
      errorOnce: (t, ...r) => {
        o(Cp) && !Rp[t] && (console.error(`[OdsLidl/${e}] - ${t}`, ...r), Rp[t] = !0)
      },
      warnOnce: (t, ...r) => {
        o(Op) && !Rp[t] && (console.warn(`[OdsLidl/${e}] - ${t}`, ...r), Rp[t] = !0)
      },
      infoOnce: (t, ...r) => {
        o(Tp) && !Rp[t] && (console.log(`[OdsLidl/${e}] - ${t}`, ...r), Rp[t] = !0)
      }
    }
  },
  Sp = {
    name: "placeholder"
  },
  Dp = (e, t, o) => {
    const r = e[t];
    return r ? "function" == typeof r ? r() : Promise.resolve(r) : new Promise((e, r) => {
      ("function" == typeof queueMicrotask ? queueMicrotask : setTimeout)(r.bind(null, new Error("Unknown variable dynamic import: " + t + (t.split("/")
        .length !== o ? ". Note that variables only represent file names one level deep." : ""))))
    })
  },
  jp = ["innerHTML"],
  Bp = zo({
    __name: "OdsIconLocal",
    props: yr({
      name: {}
    }, {
      ...Sp
    }),
    setup(e) {
      const o = e,
        r = At();
      return bo(() => o.name, async e => {
        try {
          const o = await Dp(Object.assign({
            "../../assets/icons/360-degree.svg": () => t(() => import("./360-degree.Bl1hS1BE-BmyBSbtP.js"), []),
            "../../assets/icons/apple.svg": () => t(() => import("./apple.Ckdpv1md-Cz4xn09R.js"), []),
            "../../assets/icons/arrow-down.svg": () => t(() => import("./arrow-down.Btr3GJfq-iiceerXA.js"), []),
            "../../assets/icons/arrow-left-circle.svg": () => t(() => import("./arrow-left-circle.Cto7S_qn-C4DHPh8m.js"), []),
            "../../assets/icons/arrow-left.svg": () => t(() => import("./arrow-left.BzTqyRJc-CDfvhmuN.js"), []),
            "../../assets/icons/arrow-right-circle.svg": () => t(() => import("./arrow-right-circle.CaTeQvlU-BGX4_fIw.js"), []),
            "../../assets/icons/arrow-right.svg": () => t(() => import("./arrow-right.D6tDlMr8-CaNojoR6.js"), []),
            "../../assets/icons/arrow-up.svg": () => t(() => import("./arrow-up.DoxiLcxO-CklT3sEp.js"), []),
            "../../assets/icons/arrows-expand.svg": () => t(() => import("./arrows-expand.EVMxnO11-QKpXIKsd.js"), []),
            "../../assets/icons/arrows-vertical.svg": () => t(() => import("./arrows-vertical.C5WseRFJ-BcadBbQW.js"), []),
            "../../assets/icons/award.svg": () => t(() => import("./award.Ciqgfdph-lEeNEfnd.js"), []),
            "../../assets/icons/baby changing station.svg": () => t(() => import("./baby changing station.qEeD3Siq-DGs25mlg.js"), []),
            "../../assets/icons/bad-solid.svg": () => t(() => import("./bad-solid.BRuaMV0I-DW3dCBUE.js"), []),
            "../../assets/icons/bad.svg": () => t(() => import("./bad.C7XOupTR-CupDQQbl.js"), []),
            "../../assets/icons/bakery-products.svg": () => t(() => import("./bakery-products.DZ97pD17-Bu3YQQuK.js"), []),
            "../../assets/icons/barrel.svg": () => t(() => import("./barrel.D2Ek_gWc-dARAidyZ.js"), []),
            "../../assets/icons/bars-horizontal.svg": () => t(() => import("./bars-horizontal.Bfwy3STy-nBKrlN7w.js"), []),
            "../../assets/icons/basket.svg": () => t(() => import("./basket.VnEO18-h-Dih-5g8q.js"), []),
            "../../assets/icons/beer-glass.svg": () => t(() => import("./beer-glass.ai9YC3u3-BXFs-ZIx.js"), []),
            "../../assets/icons/bell-regular.svg": () => t(() => import("./bell-regular.BzG7rHVC-DKiE_yyr.js"), []),
            "../../assets/icons/bell-solid.svg": () => t(() => import("./bell-solid.CKvLpXgk-CtHV5Yio.js"), []),
            "../../assets/icons/benefits.svg": () => t(() => import("./benefits.-vhU2qej-CRt-Td4B.js"), []),
            "../../assets/icons/best-solid.svg": () => t(() => import("./best-solid.DUjn2jjy-Ddl75DyD.js"), []),
            "../../assets/icons/best.svg": () => t(() => import("./best.qQcssm_T-f-GGLDf1.js"), []),
            "../../assets/icons/better-solid.svg": () => t(() => import("./better-solid.N7QrjAEq-CdlKO2s0.js"), []),
            "../../assets/icons/better.svg": () => t(() => import("./better.CfdieLmO-DnpQJxQM.js"), []),
            "../../assets/icons/bicycle.svg": () => t(() => import("./bicycle.XlOMsN_C-CZWY4wTq.js"), []),
            "../../assets/icons/bio-leaf.svg": () => t(() => import("./bio-leaf.Rm9ev2qG-BBReyuxc.js"), []),
            "../../assets/icons/book-open.svg": () => t(() => import("./book-open.Ds9w8_Ky-4D0MExvp.js"), []),
            "../../assets/icons/bookmark-regular.svg": () => t(() => import("./bookmark-regular.BHUiSEkf-DpbQMt-W.js"), []),
            "../../assets/icons/bookmark-solid.svg": () => t(() => import("./bookmark-solid.DrFls93T-Cid53enB.js"), []),
            "../../assets/icons/bottle.svg": () => t(() => import("./bottle.B93RPyNG-BT2C0p-l.js"), []),
            "../../assets/icons/bottles.svg": () => t(() => import("./bottles.DGSOXPaz-Iud4SjkM.js"), []),
            "../../assets/icons/box-coins-return.svg": () => t(() => import("./box-coins-return.C04AHukr-CrW4jS-v.js"), []),
            "../../assets/icons/box-multiple.svg": () => t(() => import("./box-multiple.Duv8gCIL-CfbJnPeC.js"), []),
            "../../assets/icons/box-open.svg": () => t(() => import("./box-open.tdTQC2TH-BtX0lHXb.js"), []),
            "../../assets/icons/box-return-30-days.svg": () => t(() => import("./box-return-30-days.D66vQ_q7-DfYja4C1.js"), []),
            "../../assets/icons/box-return-90-days.svg": () => t(() => import("./box-return-90-days.DWEwX0By-BZ2K3dSP.js"), []),
            "../../assets/icons/box-return.svg": () => t(() => import("./box-return.x5tDljW5-Di9wY1Ag.js"), []),
            "../../assets/icons/box.svg": () => t(() => import("./box.rJNmr86u-B3EJ0Z-F.js"), []),
            "../../assets/icons/bread.svg": () => t(() => import("./bread.Cc2qBm1Q-CVROp18a.js"), []),
            "../../assets/icons/bulletlist.svg": () => t(() => import("./bulletlist.COMX8RPo-DJ0WrO3G.js"), []),
            "../../assets/icons/bun.svg": () => t(() => import("./bun.B_D4BEKw-Bmy9GJUN.js"), []),
            "../../assets/icons/calendar-clock.svg": () => t(() => import("./calendar-clock.BAWkpm5O-D1d9d2oX.js"), []),
            "../../assets/icons/calendar.svg": () => t(() => import("./calendar.Dk86CNzu-qixdHbXO.js"), []),
            "../../assets/icons/camera.svg": () => t(() => import("./camera.C9vQGkNq-CdNrbonb.js"), []),
            "../../assets/icons/car.svg": () => t(() => import("./car.DPerU7Xa-AGc-JKXj.js"), []),
            "../../assets/icons/cash-cashless.svg": () => t(() => import("./cash-cashless.DVpLsP_9-N9aio1Gl.js"), []),
            "../../assets/icons/cattle.svg": () => t(() => import("./cattle.tKeHjx8x-BOK_Ivci.js"), []),
            "../../assets/icons/certificate.svg": () => t(() => import("./certificate.CTiqmBge-DazkW28u.js"), []),
            "../../assets/icons/checklist.svg": () => t(() => import("./checklist.-JDCDLd6-BNDFX0g1.js"), []),
            "../../assets/icons/cheese-1.svg": () => t(() => import("./cheese-1.eddHsrY7-DR4BL34P.js"), []),
            "../../assets/icons/cheese-2.svg": () => t(() => import("./cheese-2.D2D3zUcr-DbFn-NC2.js"), []),
            "../../assets/icons/chefs-hat.svg": () => t(() => import("./chefs-hat.ttszwXAA-BUtjyouD.js"), []),
            "../../assets/icons/chicken.svg": () => t(() => import("./chicken.BhrVSq4j-CKbk5W70.js"), []),
            "../../assets/icons/chocolate-bar.svg": () => t(() => import("./chocolate-bar.BBcD_dKf-CI9bwP8G.js"), []),
            "../../assets/icons/clip.svg": () => t(() => import("./clip.1wTfqQfO-DdjItI0e.js"), []),
            "../../assets/icons/clock.svg": () => t(() => import("./clock.FSKiaSI0-StLz_05z.js"), []),
            "../../assets/icons/close.svg": () => t(() => import("./close.Bpj89sWM-BLjQPZmX.js"), []),
            "../../assets/icons/cloud.svg": () => t(() => import("./cloud.DlpRaiK8-BHq4PM78.js"), []),
            "../../assets/icons/coffee.svg": () => t(() => import("./coffee.CH3qFbRe-lHPQHICm.js"), []),
            "../../assets/icons/cogwheel.svg": () => t(() => import("./cogwheel.DL4CR938-CV8-QGcR.js"), []),
            "../../assets/icons/comment.svg": () => t(() => import("./comment.CtIpkFiT-DA-Xe4R9.js"), []),
            "../../assets/icons/computer-mouse.svg": () => t(() => import("./computer-mouse.-0cCMQjt-Dm3lYElF.js"), []),
            "../../assets/icons/contactless-payment.svg": () => t(() => import("./contactless-payment.DgT_j_c--D8TCmBJ7.js"), []),
            "../../assets/icons/controls.svg": () => t(() => import("./controls.BQLRk3k6-BxoadStp.js"), []),
            "../../assets/icons/conversation-ballons-chat.svg": () => t(() => import("./conversation-ballons-chat.CSou0c8a-DK-iDJHo.js"), []),
            "../../assets/icons/conversation-ballons.svg": () => t(() => import("./conversation-ballons.DgA5OZBx-DRkij9fr.js"), []),
            "../../assets/icons/crab.svg": () => t(() => import("./crab.BxV0U8CG-C43V99jU.js"), []),
            "../../assets/icons/credit-card.svg": () => t(() => import("./credit-card.BOhKYJge-CLArc4py.js"), []),
            "../../assets/icons/cross.svg": () => t(() => import("./cross.5JsoxcAz-D1aMzXnH.js"), []),
            "../../assets/icons/crosshair.svg": () => t(() => import("./crosshair.BDSfMQe5-Cb_msm4y.js"), []),
            "../../assets/icons/cupcake.svg": () => t(() => import("./cupcake.sS34Feae-suMp-IYF.js"), []),
            "../../assets/icons/cutlery-plate.svg": () => t(() => import("./cutlery-plate.C33BhugE-B-2IbBi1.js"), []),
            "../../assets/icons/deer.svg": () => t(() => import("./deer.B75nlyta-9PV_eRa5.js"), []),
            "../../assets/icons/deposit-machine.svg": () => t(() => import("./deposit-machine.DR94RETQ-BTQt8_8n.js"), []),
            "../../assets/icons/dice-percentage.svg": () => t(() => import("./dice-percentage.Bp5LZxv9-DtykZ8HF.js"), []),
            "../../assets/icons/different-bottles.svg": () => t(() => import("./different-bottles.tNvcnKUS-quueIr06.js"), []),
            "../../assets/icons/direction.svg": () => t(() => import("./direction.JaLYTEkN-DjEMNI7C.js"), []),
            "../../assets/icons/display-play.svg": () => t(() => import("./display-play.RpVlnzg1-BLM3jTMn.js"), []),
            "../../assets/icons/display.svg": () => t(() => import("./display.CYsqam6J-Dy86bI_o.js"), []),
            "../../assets/icons/dog.svg": () => t(() => import("./dog.DmLFkC-Y-3ULSlJVt.js"), []),
            "../../assets/icons/download.svg": () => t(() => import("./download.flLZkZ3M-Cic4sD7z.js"), []),
            "../../assets/icons/e-charging-station.svg": () => t(() => import("./e-charging-station.KmaF2KHK-B2upIexw.js"), []),
            "../../assets/icons/earth-map-marker.svg": () => t(() => import("./earth-map-marker.CJl1OsNV-BVhpZFyq.js"), []),
            "../../assets/icons/earth.svg": () => t(() => import("./earth.DgT9rfHA-CvUSXLNW.js"), []),
            "../../assets/icons/ecology-2.svg": () => t(() => import("./ecology-2.DVermmrr-178kOG-0.js"), []),
            "../../assets/icons/ecology.svg": () => t(() => import("./ecology.D9OnpAJz-OFnk70rq.js"), []),
            "../../assets/icons/ellipsis-horizontal.svg": () => t(() => import("./ellipsis-horizontal.D92_gSEK-DhoN2hLd.js"), []),
            "../../assets/icons/envelope-close.svg": () => t(() => import("./envelope-close.CJHjoOaA-BryE2SZ6.js"), []),
            "../../assets/icons/envelope-open.svg": () => t(() => import("./envelope-open.Q4kzV1B2-D7qzi8Se.js"), []),
            "../../assets/icons/exclamation-ballon.svg": () => t(() => import("./exclamation-ballon.5cLUh0wp-BMImuzBf.js"), []),
            "../../assets/icons/exclamation-circle.svg": () => t(() => import("./exclamation-circle.DJnZN7Zs-BQaJJOfm.js"), []),
            "../../assets/icons/exclamation-triangle.svg": () => t(() => import("./exclamation-triangle.Bk7L2uib-COTxskJ7.js"), []),
            "../../assets/icons/express-delivery.svg": () => t(() => import("./express-delivery.71-hpQ_u-0Z0ebdki.js"), []),
            "../../assets/icons/external-link.svg": () => t(() => import("./external-link.B2e-mlDf-Da8qrROc.js"), []),
            "../../assets/icons/eye-close.svg": () => t(() => import("./eye-close.C9JokYzK-BXuYImVN.js"), []),
            "../../assets/icons/eye-open.svg": () => t(() => import("./eye-open.CTx2QkGB-D79M7q_q.js"), []),
            "../../assets/icons/file.svg": () => t(() => import("./file.DccRj6Mg-CDmgZfjC.js"), []),
            "../../assets/icons/fingerprint.svg": () => t(() => import("./fingerprint.Bw25RU79-DX5dX5-C.js"), []),
            "../../assets/icons/fireworks.svg": () => t(() => import("./fireworks.CvBTPV-r-_WFrOr7T.js"), []),
            "../../assets/icons/fish.svg": () => t(() => import("./fish.BogkyIMJ-DRBX_i62.js"), []),
            "../../assets/icons/flash-on.svg": () => t(() => import("./flash-on.Bl-S1dSt-K4bKyCNf.js"), []),
            "../../assets/icons/flower.svg": () => t(() => import("./flower.BF9A7KKY-C8AkZk3C.js"), []),
            "../../assets/icons/flyer.svg": () => t(() => import("./flyer.CAmTfLZI-BIS4wkxc.js"), []),
            "../../assets/icons/food-1.svg": () => t(() => import("./food-1.CMU3eJCw-Cg2QJU4Q.js"), []),
            "../../assets/icons/food-2.svg": () => t(() => import("./food-2.Bo09o7VV-C9jFpFxX.js"), []),
            "../../assets/icons/food-quality.svg": () => t(() => import("./food-quality.ujB9VE-t-CltpJpkJ.js"), []),
            "../../assets/icons/gift-close.svg": () => t(() => import("./gift-close.CsmhARcM-S_OWbK4W.js"), []),
            "../../assets/icons/gift-open.svg": () => t(() => import("./gift-open.DJn0J5Yu-Bm4JhYx2.js"), []),
            "../../assets/icons/glass-bottle-percentage.svg": () => t(() => import("./glass-bottle-percentage.B91voyuv-XTKgP_iV.js"), []),
            "../../assets/icons/good-solid.svg": () => t(() => import("./good-solid.Boe8O9EA-K1FgFYt8.js"), []),
            "../../assets/icons/good.svg": () => t(() => import("./good.ylYOJtWs-BKHi8ugM.js"), []),
            "../../assets/icons/goose.svg": () => t(() => import("./goose.uDnc_z3U-DMqi0Kv1.js"), []),
            "../../assets/icons/grapes.svg": () => t(() => import("./grapes.nQxxyfgQ-BdmSIZcH.js"), []),
            "../../assets/icons/grill.svg": () => t(() => import("./grill.Dy6cUpmT-CPaiUW8U.js"), []),
            "../../assets/icons/hand-coins.svg": () => t(() => import("./hand-coins.CVNLGAOb-C8Erx2Cy.js"), []),
            "../../assets/icons/hand-pointer.svg": () => t(() => import("./hand-pointer.BreliwgU-D8LUFM5r.js"), []),
            "../../assets/icons/handshake.svg": () => t(() => import("./handshake.CyAu3pYE-T-vd6vNn.js"), []),
            "../../assets/icons/heart-regular.svg": () => t(() => import("./heart-regular.1A51sryE-CpVT0NPk.js"), []),
            "../../assets/icons/heart-solid.svg": () => t(() => import("./heart-solid.Db7VGR4_-0zpl07dS.js"), []),
            "../../assets/icons/heartbeat.svg": () => t(() => import("./heartbeat.DkkutMOD-B2vmWGlx.js"), []),
            "../../assets/icons/hook-bold.svg": () => t(() => import("./hook-bold.BmmKQbeY-B0i4wY_F.js"), []),
            "../../assets/icons/hook-circle.svg": () => t(() => import("./hook-circle.BkYxQRA3-BtAPQHA4.js"), []),
            "../../assets/icons/hook-shield.svg": () => t(() => import("./hook-shield.CX02pkRd-DFhf-LhQ.js"), []),
            "../../assets/icons/hook-square.svg": () => t(() => import("./hook-square.iTSf85fr-DdDYfXP3.js"), []),
            "../../assets/icons/hook.svg": () => t(() => import("./hook.Bkn8vjhQ-DeMVms-f.js"), []),
            "../../assets/icons/house.svg": () => t(() => import("./house.DjseruVR-DUkQ8mBz.js"), []),
            "../../assets/icons/information-circle.svg": () => t(() => import("./information-circle.DoIBSAVi-CruArhdJ.js"), []),
            "../../assets/icons/invoice.svg": () => t(() => import("./invoice.BLoTMPQJ-aX_WGYT1.js"), []),
            "../../assets/icons/keyboard.svg": () => t(() => import("./keyboard.EOXNjU7r-SuWJEvya.js"), []),
            "../../assets/icons/kitchenware.svg": () => t(() => import("./kitchenware.CyPk7IaM-vCumYBRG.js"), []),
            "../../assets/icons/leaf.svg": () => t(() => import("./leaf.CIyrULgK-BQTJnEr-.js"), []),
            "../../assets/icons/legal.svg": () => t(() => import("./legal.C8_lHh04-DtumllCi.js"), []),
            "../../assets/icons/lidl-plus-vertical.svg": () => t(() => import("./lidl-plus-vertical.CWl97nF6-B7k-LEse.js"), []),
            "../../assets/icons/lightbulb-off.svg": () => t(() => import("./lightbulb-off.C4ICstBC-CmVj6FfK.js"), []),
            "../../assets/icons/lightbulb-on.svg": () => t(() => import("./lightbulb-on.D0srEQF4-CVevksRC.js"), []),
            "../../assets/icons/lock-close.svg": () => t(() => import("./lock-close.BzsvJqeh-BigSoOuz.js"), []),
            "../../assets/icons/lock-open.svg": () => t(() => import("./lock-open.-by6C0eK-ClIu80fp.js"), []),
            "../../assets/icons/log-in.svg": () => t(() => import("./log-in.CIoVWXLC-Bu8TsIJk.js"), []),
            "../../assets/icons/log-out.svg": () => t(() => import("./log-out.qW1aEZyR-BrTw1RX4.js"), []),
            "../../assets/icons/magnifier-minus.svg": () => t(() => import("./magnifier-minus.RpSaT2km-yznnYvFi.js"), []),
            "../../assets/icons/magnifier-plus.svg": () => t(() => import("./magnifier-plus.CCUCjvKe-Bj0UE6EV.js"), []),
            "../../assets/icons/magnifier.svg": () => t(() => import("./magnifier.CgsoXhBF-C5PTAqSl.js"), []),
            "../../assets/icons/map-marker.svg": () => t(() => import("./map-marker.C10_eEqG-VxSU7N5G.js"), []),
            "../../assets/icons/map.svg": () => t(() => import("./map.CUJ726Qw-B9msGXHX.js"), []),
            "../../assets/icons/meat-bio.svg": () => t(() => import("./meat-bio.D0YED-Pn-S4e2Ge2j.js"), []),
            "../../assets/icons/megaphone.svg": () => t(() => import("./megaphone.Bm3c49HM-35O4js3Q.js"), []),
            "../../assets/icons/microphone-on.svg": () => t(() => import("./microphone-on.BZIszQ75-CVAk6MfO.js"), []),
            "../../assets/icons/minus.svg": () => t(() => import("./minus.BapPo0kr-DddSMPAf.js"), []),
            "../../assets/icons/money-return.svg": () => t(() => import("./money-return.B3WgxItw-CofM_PPz.js"), []),
            "../../assets/icons/money.svg": () => t(() => import("./money.CU2g1YsK-DxAxxjMo.js"), []),
            "../../assets/icons/mug-hot.svg": () => t(() => import("./mug-hot.luK4U62N-DPG5yYpx.js"), []),
            "../../assets/icons/neutral-solid.svg": () => t(() => import("./neutral-solid.DmEP9wKA-BXlq_1hA.js"), []),
            "../../assets/icons/neutral.svg": () => t(() => import("./neutral.Bw_BhWuC-BCHcnRO6.js"), []),
            "../../assets/icons/newspaper.svg": () => t(() => import("./newspaper.Di_c_AO_-EAVg3KN8.js"), []),
            "../../assets/icons/non-food.svg": () => t(() => import("./non-food.CJWsvTFg-BFOr3ccS.js"), []),
            "../../assets/icons/offers.svg": () => t(() => import("./offers._4xVUv4_-5Kjw2zGM.js"), []),
            "../../assets/icons/olive-cheese.svg": () => t(() => import("./olive-cheese.BBiztZcW-B6nq9USn.js"), []),
            "../../assets/icons/orange-juice.svg": () => t(() => import("./orange-juice.C0a_o5NP-B68IS8Bi.js"), []),
            "../../assets/icons/packstation.svg": () => t(() => import("./packstation.DWfVk-Vv-DzMs51jS.js"), []),
            "../../assets/icons/paper-plane.svg": () => t(() => import("./paper-plane.SXgruGBE-CzjuqyX_.js"), []),
            "../../assets/icons/paragraph-circle.svg": () => t(() => import("./paragraph-circle.Cyl9qOUI-jqqnqtWR.js"), []),
            "../../assets/icons/parking-clock.svg": () => t(() => import("./parking-clock.C-YExa31-kT3uvn8H.js"), []),
            "../../assets/icons/parking-disabled-people.svg": () => t(() => import("./parking-disabled-people.C58SLGml-BSlvY4Se.js"), []),
            "../../assets/icons/parking-garage.svg": () => t(() => import("./parking-garage.JLD78Ufz-DDX5k9qv.js"), []),
            "../../assets/icons/parking.svg": () => t(() => import("./parking.gczhpqB7-hcSRcLNg.js"), []),
            "../../assets/icons/pause-circle.svg": () => t(() => import("./pause-circle.QvaA7zYp-CDXxadUQ.js"), []),
            "../../assets/icons/peach.svg": () => t(() => import("./peach.DD6uqwJt-Dya_oCWI.js"), []),
            "../../assets/icons/pencil.svg": () => t(() => import("./pencil.CHGJaWg7-CpQvhBkO.js"), []),
            "../../assets/icons/phone-envelope.svg": () => t(() => import("./phone-envelope.CTeSkXwx-H19cyxMP.js"), []),
            "../../assets/icons/phone.svg": () => t(() => import("./phone.C5PK8RJX-C1Dh5p1s.js"), []),
            "../../assets/icons/piece-of-cake.svg": () => t(() => import("./piece-of-cake.CWKSqEV2-BEgjYlow.js"), []),
            "../../assets/icons/pig.svg": () => t(() => import("./pig.Dg-zmLGq-BuaW3r0L.js"), []),
            "../../assets/icons/piggy-bank.svg": () => t(() => import("./piggy-bank.CSNUwdHF-DjoMjcxt.js"), []),
            "../../assets/icons/placeholder.svg": () => t(() => import("./placeholder.CK_gTbU7-Cb2cBXeY.js"), []),
            "../../assets/icons/plane.svg": () => t(() => import("./plane.KGqeuqsN-DYT1FOyG.js"), []),
            "../../assets/icons/plastic-packaging.svg": () => t(() => import("./plastic-packaging.DPqAO8TQ-DYt17Fq0.js"), []),
            "../../assets/icons/play-circle.svg": () => t(() => import("./play-circle.DfLe2b_Y-Degxv5sY.js"), []),
            "../../assets/icons/plus.svg": () => t(() => import("./plus.DpGmV8pZ-l1JeG4f7.js"), []),
            "../../assets/icons/power.svg": () => t(() => import("./power.Buhpbs2U-BWKVrfCO.js"), []),
            "../../assets/icons/pretzel.svg": () => t(() => import("./pretzel.Dgi0n82--2duLJYN8.js"), []),
            "../../assets/icons/printer.svg": () => t(() => import("./printer.BnPIdLm5-Cgkt-wAh.js"), []),
            "../../assets/icons/qr-code.svg": () => t(() => import("./qr-code.CU0Dg5oL-PVc7yF7a.js"), []),
            "../../assets/icons/questionmark-ballon.svg": () => t(() => import("./questionmark-ballon.B9cYwaE_-D3QN4O_1.js"), []),
            "../../assets/icons/questionmark-circle.svg": () => t(() => import("./questionmark-circle.BeFien8P-gzF2JJIe.js"), []),
            "../../assets/icons/rabbit.svg": () => t(() => import("./rabbit.CMuZmug0-B-kQ3eI-.js"), []),
            "../../assets/icons/receipt.svg": () => t(() => import("./receipt.BYYfOUX_-BhDWTPym.js"), []),
            "../../assets/icons/rotate.svg": () => t(() => import("./rotate.Q0lARl7x-B12coAzY.js"), []),
            "../../assets/icons/salad-bowl.svg": () => t(() => import("./salad-bowl.DrYONfkk-BDR-MdLV.js"), []),
            "../../assets/icons/salami.svg": () => t(() => import("./salami.D8Ps0PNY-CtLH69r8.js"), []),
            "../../assets/icons/self-check-out.svg": () => t(() => import("./self-check-out.DtVg76wO-DgN1EVDI.js"), []),
            "../../assets/icons/share.svg": () => t(() => import("./share.Cmwx5TFM-Dy8p8elo.js"), []),
            "../../assets/icons/shell.svg": () => t(() => import("./shell.BjFK405c-DWZnHvD2.js"), []),
            "../../assets/icons/shopping-bag.svg": () => t(() => import("./shopping-bag.Daeg1kd9-DV2tmQOs.js"), []),
            "../../assets/icons/shopping-cart-1.svg": () => t(() => import("./shopping-cart-1.Cjngz99K-Bti-fwol.js"), []),
            "../../assets/icons/shopping-cart-2.svg": () => t(() => import("./shopping-cart-2.BZIvW8uF-B574Y7hF.js"), []),
            "../../assets/icons/shrimp.svg": () => t(() => import("./shrimp.C9A-SSPe-BVXSboTb.js"), []),
            "../../assets/icons/smartphone.svg": () => t(() => import("./smartphone.CiaIBt_0-B64XRqXU.js"), []),
            "../../assets/icons/snowflake.svg": () => t(() => import("./snowflake.Dsn3jiKS-Dp_SZFqP.js"), []),
            "../../assets/icons/social-share.svg": () => t(() => import("./social-share.BIM5VrPi-C0CaYEEp.js"), []),
            "../../assets/icons/square.svg": () => t(() => import("./square.BiPO2B5u-JWAXB59E.js"), []),
            "../../assets/icons/star-regular.svg": () => t(() => import("./star-regular.B-XMXBIq-W4M2oWna.js"), []),
            "../../assets/icons/star-solid.svg": () => t(() => import("./star-solid.B-vfolxL-D8AlRbFr.js"), []),
            "../../assets/icons/steak.svg": () => t(() => import("./steak.0sx8BRx1-BlwqEbrV.js"), []),
            "../../assets/icons/stop-sign.svg": () => t(() => import("./stop-sign.D6C-cSU--3HoUomJp.js"), []),
            "../../assets/icons/stopwatch.svg": () => t(() => import("./stopwatch.Xnl6qIkq-BEp1rB2A.js"), []),
            "../../assets/icons/store-magnifier.svg": () => t(() => import("./store-magnifier.xpUCbvNV-CGXlNDsI.js"), []),
            "../../assets/icons/store-star.svg": () => t(() => import("./store-star.DNG3EWYU-C2TAxg0W.js"), []),
            "../../assets/icons/store.svg": () => t(() => import("./store.BWhJdhIk-C7yT3viy.js"), []),
            "../../assets/icons/sun.svg": () => t(() => import("./sun.DCgDrmkj-y1qmu0Ug.js"), []),
            "../../assets/icons/sushi.svg": () => t(() => import("./sushi.BCMvrUqK-Bhx2-_21.js"), []),
            "../../assets/icons/sync.svg": () => t(() => import("./sync.BPWr9zzk-CAYfyNwu.js"), []),
            "../../assets/icons/taxfree.svg": () => t(() => import("./taxfree.1GcvUp2c-1CYNLUf7.js"), []),
            "../../assets/icons/thermometer.svg": () => t(() => import("./thermometer.DwfD-zj4-_aBddEwZ.js"), []),
            "../../assets/icons/thumbs-down-regular.svg": () => t(() => import("./thumbs-down-regular.DQxe-MTZ-lqm__TeN.js"), []),
            "../../assets/icons/thumbs-down-solid.svg": () => t(() => import("./thumbs-down-solid.Ccg2QOmG-BL15GDkM.js"), []),
            "../../assets/icons/thumbs-up-ballon.svg": () => t(() => import("./thumbs-up-ballon.DO3kPh9k-SPjoYuF_.js"), []),
            "../../assets/icons/thumbs-up-regular.svg": () => t(() => import("./thumbs-up-regular.D23SBdq4-CPxCzYWZ.js"), []),
            "../../assets/icons/thumbs-up-solid.svg": () => t(() => import("./thumbs-up-solid.otnNnJ7U-CXoSXPz5.js"), []),
            "../../assets/icons/toilet.svg": () => t(() => import("./toilet.C9Mf6N46-D2BPMs5u.js"), []),
            "../../assets/icons/train.svg": () => t(() => import("./train.lXatSvNM-JASP4GSR.js"), []),
            "../../assets/icons/trash.svg": () => t(() => import("./trash.CBK8FSjr-BclKRnzO.js"), []),
            "../../assets/icons/triangle.svg": () => t(() => import("./triangle.Db6jG841-Ctlw6ALO.js"), []),
            "../../assets/icons/trophy.svg": () => t(() => import("./trophy.BlPh8asp-C2mP4vyJ.js"), []),
            "../../assets/icons/truck-bag.svg": () => t(() => import("./truck-bag.DRwtHyes-D3iQFYoB.js"), []),
            "../../assets/icons/truck.svg": () => t(() => import("./truck.CaMQ1Evw-CcFMrUtH.js"), []),
            "../../assets/icons/turkey.svg": () => t(() => import("./turkey.BFSLKKLe-BrVMMEX_.js"), []),
            "../../assets/icons/undo.svg": () => t(() => import("./undo.CZNENTnh-Bn_ozLWl.js"), []),
            "../../assets/icons/upload.svg": () => t(() => import("./upload.pJkwlNV4-Cjrg1zrV.js"), []),
            "../../assets/icons/user-eighteen-plus.svg": () => t(() => import("./user-eighteen-plus.AW8tDV7U-DnlAWYfQ.js"), []),
            "../../assets/icons/user.svg": () => t(() => import("./user.D05og-pt-DjIoXx5x.js"), []),
            "../../assets/icons/vegetables.svg": () => t(() => import("./vegetables.B4NldhMA-BtpRKiO9.js"), []),
            "../../assets/icons/volume-up.svg": () => t(() => import("./volume-up.DO9ZBlgC-_Vgkkmrw.js"), []),
            "../../assets/icons/voucher-euro.svg": () => t(() => import("./voucher-euro.BypZ1MU1-DdqA4XHK.js"), []),
            "../../assets/icons/voucher-gift.svg": () => t(() => import("./voucher-gift.CFfQp_It-Dc7ZIN-G.js"), []),
            "../../assets/icons/voucher-percentage.svg": () => t(() => import("./voucher-percentage.TZYc-A-_-DiKnzLui.js"), []),
            "../../assets/icons/wallet-coins.svg": () => t(() => import("./wallet-coins.C5176kyL-D8n4RNz5.js"), []),
            "../../assets/icons/wet-stamp.svg": () => t(() => import("./wet-stamp.C_c63Yz--BM2T8Mj6.js"), []),
            "../../assets/icons/wheelchair.svg": () => t(() => import("./wheelchair.NUcEnYf_-DpJsRKpP.js"), []),
            "../../assets/icons/wifi.svg": () => t(() => import("./wifi.ClxV_5ww-CumQkXgj.js"), []),
            "../../assets/icons/wine-glass-1.svg": () => t(() => import("./wine-glass-1.Bcl-5R8V-Blwn4yRt.js"), []),
            "../../assets/icons/wine-glass-2.svg": () => t(() => import("./wine-glass-2.DBTwC1iW-Bj8yhVDj.js"), []),
            "../../assets/icons/wine-glasses.svg": () => t(() => import("./wine-glasses.CQpZ_Rpy--biYzDF5.js"), []),
            "../../assets/icons/worst-solid.svg": () => t(() => import("./worst-solid.DIkSDDHz-C1SL4IoI.js"), []),
            "../../assets/icons/worst.svg": () => t(() => import("./worst.AgXHX1XR-DiyYniu3.js"), [])
          }), `../../assets/icons/${e}.svg`, 5);
          r.value = o.default
        } catch {
          const e = await Dp(Object.assign({
            "../../assets/icons/360-degree.svg": () => t(() => import("./360-degree.Bl1hS1BE-BmyBSbtP.js"), []),
            "../../assets/icons/apple.svg": () => t(() => import("./apple.Ckdpv1md-Cz4xn09R.js"), []),
            "../../assets/icons/arrow-down.svg": () => t(() => import("./arrow-down.Btr3GJfq-iiceerXA.js"), []),
            "../../assets/icons/arrow-left-circle.svg": () => t(() => import("./arrow-left-circle.Cto7S_qn-C4DHPh8m.js"), []),
            "../../assets/icons/arrow-left.svg": () => t(() => import("./arrow-left.BzTqyRJc-CDfvhmuN.js"), []),
            "../../assets/icons/arrow-right-circle.svg": () => t(() => import("./arrow-right-circle.CaTeQvlU-BGX4_fIw.js"), []),
            "../../assets/icons/arrow-right.svg": () => t(() => import("./arrow-right.D6tDlMr8-CaNojoR6.js"), []),
            "../../assets/icons/arrow-up.svg": () => t(() => import("./arrow-up.DoxiLcxO-CklT3sEp.js"), []),
            "../../assets/icons/arrows-expand.svg": () => t(() => import("./arrows-expand.EVMxnO11-QKpXIKsd.js"), []),
            "../../assets/icons/arrows-vertical.svg": () => t(() => import("./arrows-vertical.C5WseRFJ-BcadBbQW.js"), []),
            "../../assets/icons/award.svg": () => t(() => import("./award.Ciqgfdph-lEeNEfnd.js"), []),
            "../../assets/icons/baby changing station.svg": () => t(() => import("./baby changing station.qEeD3Siq-DGs25mlg.js"), []),
            "../../assets/icons/bad-solid.svg": () => t(() => import("./bad-solid.BRuaMV0I-DW3dCBUE.js"), []),
            "../../assets/icons/bad.svg": () => t(() => import("./bad.C7XOupTR-CupDQQbl.js"), []),
            "../../assets/icons/bakery-products.svg": () => t(() => import("./bakery-products.DZ97pD17-Bu3YQQuK.js"), []),
            "../../assets/icons/barrel.svg": () => t(() => import("./barrel.D2Ek_gWc-dARAidyZ.js"), []),
            "../../assets/icons/bars-horizontal.svg": () => t(() => import("./bars-horizontal.Bfwy3STy-nBKrlN7w.js"), []),
            "../../assets/icons/basket.svg": () => t(() => import("./basket.VnEO18-h-Dih-5g8q.js"), []),
            "../../assets/icons/beer-glass.svg": () => t(() => import("./beer-glass.ai9YC3u3-BXFs-ZIx.js"), []),
            "../../assets/icons/bell-regular.svg": () => t(() => import("./bell-regular.BzG7rHVC-DKiE_yyr.js"), []),
            "../../assets/icons/bell-solid.svg": () => t(() => import("./bell-solid.CKvLpXgk-CtHV5Yio.js"), []),
            "../../assets/icons/benefits.svg": () => t(() => import("./benefits.-vhU2qej-CRt-Td4B.js"), []),
            "../../assets/icons/best-solid.svg": () => t(() => import("./best-solid.DUjn2jjy-Ddl75DyD.js"), []),
            "../../assets/icons/best.svg": () => t(() => import("./best.qQcssm_T-f-GGLDf1.js"), []),
            "../../assets/icons/better-solid.svg": () => t(() => import("./better-solid.N7QrjAEq-CdlKO2s0.js"), []),
            "../../assets/icons/better.svg": () => t(() => import("./better.CfdieLmO-DnpQJxQM.js"), []),
            "../../assets/icons/bicycle.svg": () => t(() => import("./bicycle.XlOMsN_C-CZWY4wTq.js"), []),
            "../../assets/icons/bio-leaf.svg": () => t(() => import("./bio-leaf.Rm9ev2qG-BBReyuxc.js"), []),
            "../../assets/icons/book-open.svg": () => t(() => import("./book-open.Ds9w8_Ky-4D0MExvp.js"), []),
            "../../assets/icons/bookmark-regular.svg": () => t(() => import("./bookmark-regular.BHUiSEkf-DpbQMt-W.js"), []),
            "../../assets/icons/bookmark-solid.svg": () => t(() => import("./bookmark-solid.DrFls93T-Cid53enB.js"), []),
            "../../assets/icons/bottle.svg": () => t(() => import("./bottle.B93RPyNG-BT2C0p-l.js"), []),
            "../../assets/icons/bottles.svg": () => t(() => import("./bottles.DGSOXPaz-Iud4SjkM.js"), []),
            "../../assets/icons/box-coins-return.svg": () => t(() => import("./box-coins-return.C04AHukr-CrW4jS-v.js"), []),
            "../../assets/icons/box-multiple.svg": () => t(() => import("./box-multiple.Duv8gCIL-CfbJnPeC.js"), []),
            "../../assets/icons/box-open.svg": () => t(() => import("./box-open.tdTQC2TH-BtX0lHXb.js"), []),
            "../../assets/icons/box-return-30-days.svg": () => t(() => import("./box-return-30-days.D66vQ_q7-DfYja4C1.js"), []),
            "../../assets/icons/box-return-90-days.svg": () => t(() => import("./box-return-90-days.DWEwX0By-BZ2K3dSP.js"), []),
            "../../assets/icons/box-return.svg": () => t(() => import("./box-return.x5tDljW5-Di9wY1Ag.js"), []),
            "../../assets/icons/box.svg": () => t(() => import("./box.rJNmr86u-B3EJ0Z-F.js"), []),
            "../../assets/icons/bread.svg": () => t(() => import("./bread.Cc2qBm1Q-CVROp18a.js"), []),
            "../../assets/icons/bulletlist.svg": () => t(() => import("./bulletlist.COMX8RPo-DJ0WrO3G.js"), []),
            "../../assets/icons/bun.svg": () => t(() => import("./bun.B_D4BEKw-Bmy9GJUN.js"), []),
            "../../assets/icons/calendar-clock.svg": () => t(() => import("./calendar-clock.BAWkpm5O-D1d9d2oX.js"), []),
            "../../assets/icons/calendar.svg": () => t(() => import("./calendar.Dk86CNzu-qixdHbXO.js"), []),
            "../../assets/icons/camera.svg": () => t(() => import("./camera.C9vQGkNq-CdNrbonb.js"), []),
            "../../assets/icons/car.svg": () => t(() => import("./car.DPerU7Xa-AGc-JKXj.js"), []),
            "../../assets/icons/cash-cashless.svg": () => t(() => import("./cash-cashless.DVpLsP_9-N9aio1Gl.js"), []),
            "../../assets/icons/cattle.svg": () => t(() => import("./cattle.tKeHjx8x-BOK_Ivci.js"), []),
            "../../assets/icons/certificate.svg": () => t(() => import("./certificate.CTiqmBge-DazkW28u.js"), []),
            "../../assets/icons/checklist.svg": () => t(() => import("./checklist.-JDCDLd6-BNDFX0g1.js"), []),
            "../../assets/icons/cheese-1.svg": () => t(() => import("./cheese-1.eddHsrY7-DR4BL34P.js"), []),
            "../../assets/icons/cheese-2.svg": () => t(() => import("./cheese-2.D2D3zUcr-DbFn-NC2.js"), []),
            "../../assets/icons/chefs-hat.svg": () => t(() => import("./chefs-hat.ttszwXAA-BUtjyouD.js"), []),
            "../../assets/icons/chicken.svg": () => t(() => import("./chicken.BhrVSq4j-CKbk5W70.js"), []),
            "../../assets/icons/chocolate-bar.svg": () => t(() => import("./chocolate-bar.BBcD_dKf-CI9bwP8G.js"), []),
            "../../assets/icons/clip.svg": () => t(() => import("./clip.1wTfqQfO-DdjItI0e.js"), []),
            "../../assets/icons/clock.svg": () => t(() => import("./clock.FSKiaSI0-StLz_05z.js"), []),
            "../../assets/icons/close.svg": () => t(() => import("./close.Bpj89sWM-BLjQPZmX.js"), []),
            "../../assets/icons/cloud.svg": () => t(() => import("./cloud.DlpRaiK8-BHq4PM78.js"), []),
            "../../assets/icons/coffee.svg": () => t(() => import("./coffee.CH3qFbRe-lHPQHICm.js"), []),
            "../../assets/icons/cogwheel.svg": () => t(() => import("./cogwheel.DL4CR938-CV8-QGcR.js"), []),
            "../../assets/icons/comment.svg": () => t(() => import("./comment.CtIpkFiT-DA-Xe4R9.js"), []),
            "../../assets/icons/computer-mouse.svg": () => t(() => import("./computer-mouse.-0cCMQjt-Dm3lYElF.js"), []),
            "../../assets/icons/contactless-payment.svg": () => t(() => import("./contactless-payment.DgT_j_c--D8TCmBJ7.js"), []),
            "../../assets/icons/controls.svg": () => t(() => import("./controls.BQLRk3k6-BxoadStp.js"), []),
            "../../assets/icons/conversation-ballons-chat.svg": () => t(() => import("./conversation-ballons-chat.CSou0c8a-DK-iDJHo.js"), []),
            "../../assets/icons/conversation-ballons.svg": () => t(() => import("./conversation-ballons.DgA5OZBx-DRkij9fr.js"), []),
            "../../assets/icons/crab.svg": () => t(() => import("./crab.BxV0U8CG-C43V99jU.js"), []),
            "../../assets/icons/credit-card.svg": () => t(() => import("./credit-card.BOhKYJge-CLArc4py.js"), []),
            "../../assets/icons/cross.svg": () => t(() => import("./cross.5JsoxcAz-D1aMzXnH.js"), []),
            "../../assets/icons/crosshair.svg": () => t(() => import("./crosshair.BDSfMQe5-Cb_msm4y.js"), []),
            "../../assets/icons/cupcake.svg": () => t(() => import("./cupcake.sS34Feae-suMp-IYF.js"), []),
            "../../assets/icons/cutlery-plate.svg": () => t(() => import("./cutlery-plate.C33BhugE-B-2IbBi1.js"), []),
            "../../assets/icons/deer.svg": () => t(() => import("./deer.B75nlyta-9PV_eRa5.js"), []),
            "../../assets/icons/deposit-machine.svg": () => t(() => import("./deposit-machine.DR94RETQ-BTQt8_8n.js"), []),
            "../../assets/icons/dice-percentage.svg": () => t(() => import("./dice-percentage.Bp5LZxv9-DtykZ8HF.js"), []),
            "../../assets/icons/different-bottles.svg": () => t(() => import("./different-bottles.tNvcnKUS-quueIr06.js"), []),
            "../../assets/icons/direction.svg": () => t(() => import("./direction.JaLYTEkN-DjEMNI7C.js"), []),
            "../../assets/icons/display-play.svg": () => t(() => import("./display-play.RpVlnzg1-BLM3jTMn.js"), []),
            "../../assets/icons/display.svg": () => t(() => import("./display.CYsqam6J-Dy86bI_o.js"), []),
            "../../assets/icons/dog.svg": () => t(() => import("./dog.DmLFkC-Y-3ULSlJVt.js"), []),
            "../../assets/icons/download.svg": () => t(() => import("./download.flLZkZ3M-Cic4sD7z.js"), []),
            "../../assets/icons/e-charging-station.svg": () => t(() => import("./e-charging-station.KmaF2KHK-B2upIexw.js"), []),
            "../../assets/icons/earth-map-marker.svg": () => t(() => import("./earth-map-marker.CJl1OsNV-BVhpZFyq.js"), []),
            "../../assets/icons/earth.svg": () => t(() => import("./earth.DgT9rfHA-CvUSXLNW.js"), []),
            "../../assets/icons/ecology-2.svg": () => t(() => import("./ecology-2.DVermmrr-178kOG-0.js"), []),
            "../../assets/icons/ecology.svg": () => t(() => import("./ecology.D9OnpAJz-OFnk70rq.js"), []),
            "../../assets/icons/ellipsis-horizontal.svg": () => t(() => import("./ellipsis-horizontal.D92_gSEK-DhoN2hLd.js"), []),
            "../../assets/icons/envelope-close.svg": () => t(() => import("./envelope-close.CJHjoOaA-BryE2SZ6.js"), []),
            "../../assets/icons/envelope-open.svg": () => t(() => import("./envelope-open.Q4kzV1B2-D7qzi8Se.js"), []),
            "../../assets/icons/exclamation-ballon.svg": () => t(() => import("./exclamation-ballon.5cLUh0wp-BMImuzBf.js"), []),
            "../../assets/icons/exclamation-circle.svg": () => t(() => import("./exclamation-circle.DJnZN7Zs-BQaJJOfm.js"), []),
            "../../assets/icons/exclamation-triangle.svg": () => t(() => import("./exclamation-triangle.Bk7L2uib-COTxskJ7.js"), []),
            "../../assets/icons/express-delivery.svg": () => t(() => import("./express-delivery.71-hpQ_u-0Z0ebdki.js"), []),
            "../../assets/icons/external-link.svg": () => t(() => import("./external-link.B2e-mlDf-Da8qrROc.js"), []),
            "../../assets/icons/eye-close.svg": () => t(() => import("./eye-close.C9JokYzK-BXuYImVN.js"), []),
            "../../assets/icons/eye-open.svg": () => t(() => import("./eye-open.CTx2QkGB-D79M7q_q.js"), []),
            "../../assets/icons/file.svg": () => t(() => import("./file.DccRj6Mg-CDmgZfjC.js"), []),
            "../../assets/icons/fingerprint.svg": () => t(() => import("./fingerprint.Bw25RU79-DX5dX5-C.js"), []),
            "../../assets/icons/fireworks.svg": () => t(() => import("./fireworks.CvBTPV-r-_WFrOr7T.js"), []),
            "../../assets/icons/fish.svg": () => t(() => import("./fish.BogkyIMJ-DRBX_i62.js"), []),
            "../../assets/icons/flash-on.svg": () => t(() => import("./flash-on.Bl-S1dSt-K4bKyCNf.js"), []),
            "../../assets/icons/flower.svg": () => t(() => import("./flower.BF9A7KKY-C8AkZk3C.js"), []),
            "../../assets/icons/flyer.svg": () => t(() => import("./flyer.CAmTfLZI-BIS4wkxc.js"), []),
            "../../assets/icons/food-1.svg": () => t(() => import("./food-1.CMU3eJCw-Cg2QJU4Q.js"), []),
            "../../assets/icons/food-2.svg": () => t(() => import("./food-2.Bo09o7VV-C9jFpFxX.js"), []),
            "../../assets/icons/food-quality.svg": () => t(() => import("./food-quality.ujB9VE-t-CltpJpkJ.js"), []),
            "../../assets/icons/gift-close.svg": () => t(() => import("./gift-close.CsmhARcM-S_OWbK4W.js"), []),
            "../../assets/icons/gift-open.svg": () => t(() => import("./gift-open.DJn0J5Yu-Bm4JhYx2.js"), []),
            "../../assets/icons/glass-bottle-percentage.svg": () => t(() => import("./glass-bottle-percentage.B91voyuv-XTKgP_iV.js"), []),
            "../../assets/icons/good-solid.svg": () => t(() => import("./good-solid.Boe8O9EA-K1FgFYt8.js"), []),
            "../../assets/icons/good.svg": () => t(() => import("./good.ylYOJtWs-BKHi8ugM.js"), []),
            "../../assets/icons/goose.svg": () => t(() => import("./goose.uDnc_z3U-DMqi0Kv1.js"), []),
            "../../assets/icons/grapes.svg": () => t(() => import("./grapes.nQxxyfgQ-BdmSIZcH.js"), []),
            "../../assets/icons/grill.svg": () => t(() => import("./grill.Dy6cUpmT-CPaiUW8U.js"), []),
            "../../assets/icons/hand-coins.svg": () => t(() => import("./hand-coins.CVNLGAOb-C8Erx2Cy.js"), []),
            "../../assets/icons/hand-pointer.svg": () => t(() => import("./hand-pointer.BreliwgU-D8LUFM5r.js"), []),
            "../../assets/icons/handshake.svg": () => t(() => import("./handshake.CyAu3pYE-T-vd6vNn.js"), []),
            "../../assets/icons/heart-regular.svg": () => t(() => import("./heart-regular.1A51sryE-CpVT0NPk.js"), []),
            "../../assets/icons/heart-solid.svg": () => t(() => import("./heart-solid.Db7VGR4_-0zpl07dS.js"), []),
            "../../assets/icons/heartbeat.svg": () => t(() => import("./heartbeat.DkkutMOD-B2vmWGlx.js"), []),
            "../../assets/icons/hook-bold.svg": () => t(() => import("./hook-bold.BmmKQbeY-B0i4wY_F.js"), []),
            "../../assets/icons/hook-circle.svg": () => t(() => import("./hook-circle.BkYxQRA3-BtAPQHA4.js"), []),
            "../../assets/icons/hook-shield.svg": () => t(() => import("./hook-shield.CX02pkRd-DFhf-LhQ.js"), []),
            "../../assets/icons/hook-square.svg": () => t(() => import("./hook-square.iTSf85fr-DdDYfXP3.js"), []),
            "../../assets/icons/hook.svg": () => t(() => import("./hook.Bkn8vjhQ-DeMVms-f.js"), []),
            "../../assets/icons/house.svg": () => t(() => import("./house.DjseruVR-DUkQ8mBz.js"), []),
            "../../assets/icons/information-circle.svg": () => t(() => import("./information-circle.DoIBSAVi-CruArhdJ.js"), []),
            "../../assets/icons/invoice.svg": () => t(() => import("./invoice.BLoTMPQJ-aX_WGYT1.js"), []),
            "../../assets/icons/keyboard.svg": () => t(() => import("./keyboard.EOXNjU7r-SuWJEvya.js"), []),
            "../../assets/icons/kitchenware.svg": () => t(() => import("./kitchenware.CyPk7IaM-vCumYBRG.js"), []),
            "../../assets/icons/leaf.svg": () => t(() => import("./leaf.CIyrULgK-BQTJnEr-.js"), []),
            "../../assets/icons/legal.svg": () => t(() => import("./legal.C8_lHh04-DtumllCi.js"), []),
            "../../assets/icons/lidl-plus-vertical.svg": () => t(() => import("./lidl-plus-vertical.CWl97nF6-B7k-LEse.js"), []),
            "../../assets/icons/lightbulb-off.svg": () => t(() => import("./lightbulb-off.C4ICstBC-CmVj6FfK.js"), []),
            "../../assets/icons/lightbulb-on.svg": () => t(() => import("./lightbulb-on.D0srEQF4-CVevksRC.js"), []),
            "../../assets/icons/lock-close.svg": () => t(() => import("./lock-close.BzsvJqeh-BigSoOuz.js"), []),
            "../../assets/icons/lock-open.svg": () => t(() => import("./lock-open.-by6C0eK-ClIu80fp.js"), []),
            "../../assets/icons/log-in.svg": () => t(() => import("./log-in.CIoVWXLC-Bu8TsIJk.js"), []),
            "../../assets/icons/log-out.svg": () => t(() => import("./log-out.qW1aEZyR-BrTw1RX4.js"), []),
            "../../assets/icons/magnifier-minus.svg": () => t(() => import("./magnifier-minus.RpSaT2km-yznnYvFi.js"), []),
            "../../assets/icons/magnifier-plus.svg": () => t(() => import("./magnifier-plus.CCUCjvKe-Bj0UE6EV.js"), []),
            "../../assets/icons/magnifier.svg": () => t(() => import("./magnifier.CgsoXhBF-C5PTAqSl.js"), []),
            "../../assets/icons/map-marker.svg": () => t(() => import("./map-marker.C10_eEqG-VxSU7N5G.js"), []),
            "../../assets/icons/map.svg": () => t(() => import("./map.CUJ726Qw-B9msGXHX.js"), []),
            "../../assets/icons/meat-bio.svg": () => t(() => import("./meat-bio.D0YED-Pn-S4e2Ge2j.js"), []),
            "../../assets/icons/megaphone.svg": () => t(() => import("./megaphone.Bm3c49HM-35O4js3Q.js"), []),
            "../../assets/icons/microphone-on.svg": () => t(() => import("./microphone-on.BZIszQ75-CVAk6MfO.js"), []),
            "../../assets/icons/minus.svg": () => t(() => import("./minus.BapPo0kr-DddSMPAf.js"), []),
            "../../assets/icons/money-return.svg": () => t(() => import("./money-return.B3WgxItw-CofM_PPz.js"), []),
            "../../assets/icons/money.svg": () => t(() => import("./money.CU2g1YsK-DxAxxjMo.js"), []),
            "../../assets/icons/mug-hot.svg": () => t(() => import("./mug-hot.luK4U62N-DPG5yYpx.js"), []),
            "../../assets/icons/neutral-solid.svg": () => t(() => import("./neutral-solid.DmEP9wKA-BXlq_1hA.js"), []),
            "../../assets/icons/neutral.svg": () => t(() => import("./neutral.Bw_BhWuC-BCHcnRO6.js"), []),
            "../../assets/icons/newspaper.svg": () => t(() => import("./newspaper.Di_c_AO_-EAVg3KN8.js"), []),
            "../../assets/icons/non-food.svg": () => t(() => import("./non-food.CJWsvTFg-BFOr3ccS.js"), []),
            "../../assets/icons/offers.svg": () => t(() => import("./offers._4xVUv4_-5Kjw2zGM.js"), []),
            "../../assets/icons/olive-cheese.svg": () => t(() => import("./olive-cheese.BBiztZcW-B6nq9USn.js"), []),
            "../../assets/icons/orange-juice.svg": () => t(() => import("./orange-juice.C0a_o5NP-B68IS8Bi.js"), []),
            "../../assets/icons/packstation.svg": () => t(() => import("./packstation.DWfVk-Vv-DzMs51jS.js"), []),
            "../../assets/icons/paper-plane.svg": () => t(() => import("./paper-plane.SXgruGBE-CzjuqyX_.js"), []),
            "../../assets/icons/paragraph-circle.svg": () => t(() => import("./paragraph-circle.Cyl9qOUI-jqqnqtWR.js"), []),
            "../../assets/icons/parking-clock.svg": () => t(() => import("./parking-clock.C-YExa31-kT3uvn8H.js"), []),
            "../../assets/icons/parking-disabled-people.svg": () => t(() => import("./parking-disabled-people.C58SLGml-BSlvY4Se.js"), []),
            "../../assets/icons/parking-garage.svg": () => t(() => import("./parking-garage.JLD78Ufz-DDX5k9qv.js"), []),
            "../../assets/icons/parking.svg": () => t(() => import("./parking.gczhpqB7-hcSRcLNg.js"), []),
            "../../assets/icons/pause-circle.svg": () => t(() => import("./pause-circle.QvaA7zYp-CDXxadUQ.js"), []),
            "../../assets/icons/peach.svg": () => t(() => import("./peach.DD6uqwJt-Dya_oCWI.js"), []),
            "../../assets/icons/pencil.svg": () => t(() => import("./pencil.CHGJaWg7-CpQvhBkO.js"), []),
            "../../assets/icons/phone-envelope.svg": () => t(() => import("./phone-envelope.CTeSkXwx-H19cyxMP.js"), []),
            "../../assets/icons/phone.svg": () => t(() => import("./phone.C5PK8RJX-C1Dh5p1s.js"), []),
            "../../assets/icons/piece-of-cake.svg": () => t(() => import("./piece-of-cake.CWKSqEV2-BEgjYlow.js"), []),
            "../../assets/icons/pig.svg": () => t(() => import("./pig.Dg-zmLGq-BuaW3r0L.js"), []),
            "../../assets/icons/piggy-bank.svg": () => t(() => import("./piggy-bank.CSNUwdHF-DjoMjcxt.js"), []),
            "../../assets/icons/placeholder.svg": () => t(() => import("./placeholder.CK_gTbU7-Cb2cBXeY.js"), []),
            "../../assets/icons/plane.svg": () => t(() => import("./plane.KGqeuqsN-DYT1FOyG.js"), []),
            "../../assets/icons/plastic-packaging.svg": () => t(() => import("./plastic-packaging.DPqAO8TQ-DYt17Fq0.js"), []),
            "../../assets/icons/play-circle.svg": () => t(() => import("./play-circle.DfLe2b_Y-Degxv5sY.js"), []),
            "../../assets/icons/plus.svg": () => t(() => import("./plus.DpGmV8pZ-l1JeG4f7.js"), []),
            "../../assets/icons/power.svg": () => t(() => import("./power.Buhpbs2U-BWKVrfCO.js"), []),
            "../../assets/icons/pretzel.svg": () => t(() => import("./pretzel.Dgi0n82--2duLJYN8.js"), []),
            "../../assets/icons/printer.svg": () => t(() => import("./printer.BnPIdLm5-Cgkt-wAh.js"), []),
            "../../assets/icons/qr-code.svg": () => t(() => import("./qr-code.CU0Dg5oL-PVc7yF7a.js"), []),
            "../../assets/icons/questionmark-ballon.svg": () => t(() => import("./questionmark-ballon.B9cYwaE_-D3QN4O_1.js"), []),
            "../../assets/icons/questionmark-circle.svg": () => t(() => import("./questionmark-circle.BeFien8P-gzF2JJIe.js"), []),
            "../../assets/icons/rabbit.svg": () => t(() => import("./rabbit.CMuZmug0-B-kQ3eI-.js"), []),
            "../../assets/icons/receipt.svg": () => t(() => import("./receipt.BYYfOUX_-BhDWTPym.js"), []),
            "../../assets/icons/rotate.svg": () => t(() => import("./rotate.Q0lARl7x-B12coAzY.js"), []),
            "../../assets/icons/salad-bowl.svg": () => t(() => import("./salad-bowl.DrYONfkk-BDR-MdLV.js"), []),
            "../../assets/icons/salami.svg": () => t(() => import("./salami.D8Ps0PNY-CtLH69r8.js"), []),
            "../../assets/icons/self-check-out.svg": () => t(() => import("./self-check-out.DtVg76wO-DgN1EVDI.js"), []),
            "../../assets/icons/share.svg": () => t(() => import("./share.Cmwx5TFM-Dy8p8elo.js"), []),
            "../../assets/icons/shell.svg": () => t(() => import("./shell.BjFK405c-DWZnHvD2.js"), []),
            "../../assets/icons/shopping-bag.svg": () => t(() => import("./shopping-bag.Daeg1kd9-DV2tmQOs.js"), []),
            "../../assets/icons/shopping-cart-1.svg": () => t(() => import("./shopping-cart-1.Cjngz99K-Bti-fwol.js"), []),
            "../../assets/icons/shopping-cart-2.svg": () => t(() => import("./shopping-cart-2.BZIvW8uF-B574Y7hF.js"), []),
            "../../assets/icons/shrimp.svg": () => t(() => import("./shrimp.C9A-SSPe-BVXSboTb.js"), []),
            "../../assets/icons/smartphone.svg": () => t(() => import("./smartphone.CiaIBt_0-B64XRqXU.js"), []),
            "../../assets/icons/snowflake.svg": () => t(() => import("./snowflake.Dsn3jiKS-Dp_SZFqP.js"), []),
            "../../assets/icons/social-share.svg": () => t(() => import("./social-share.BIM5VrPi-C0CaYEEp.js"), []),
            "../../assets/icons/square.svg": () => t(() => import("./square.BiPO2B5u-JWAXB59E.js"), []),
            "../../assets/icons/star-regular.svg": () => t(() => import("./star-regular.B-XMXBIq-W4M2oWna.js"), []),
            "../../assets/icons/star-solid.svg": () => t(() => import("./star-solid.B-vfolxL-D8AlRbFr.js"), []),
            "../../assets/icons/steak.svg": () => t(() => import("./steak.0sx8BRx1-BlwqEbrV.js"), []),
            "../../assets/icons/stop-sign.svg": () => t(() => import("./stop-sign.D6C-cSU--3HoUomJp.js"), []),
            "../../assets/icons/stopwatch.svg": () => t(() => import("./stopwatch.Xnl6qIkq-BEp1rB2A.js"), []),
            "../../assets/icons/store-magnifier.svg": () => t(() => import("./store-magnifier.xpUCbvNV-CGXlNDsI.js"), []),
            "../../assets/icons/store-star.svg": () => t(() => import("./store-star.DNG3EWYU-C2TAxg0W.js"), []),
            "../../assets/icons/store.svg": () => t(() => import("./store.BWhJdhIk-C7yT3viy.js"), []),
            "../../assets/icons/sun.svg": () => t(() => import("./sun.DCgDrmkj-y1qmu0Ug.js"), []),
            "../../assets/icons/sushi.svg": () => t(() => import("./sushi.BCMvrUqK-Bhx2-_21.js"), []),
            "../../assets/icons/sync.svg": () => t(() => import("./sync.BPWr9zzk-CAYfyNwu.js"), []),
            "../../assets/icons/taxfree.svg": () => t(() => import("./taxfree.1GcvUp2c-1CYNLUf7.js"), []),
            "../../assets/icons/thermometer.svg": () => t(() => import("./thermometer.DwfD-zj4-_aBddEwZ.js"), []),
            "../../assets/icons/thumbs-down-regular.svg": () => t(() => import("./thumbs-down-regular.DQxe-MTZ-lqm__TeN.js"), []),
            "../../assets/icons/thumbs-down-solid.svg": () => t(() => import("./thumbs-down-solid.Ccg2QOmG-BL15GDkM.js"), []),
            "../../assets/icons/thumbs-up-ballon.svg": () => t(() => import("./thumbs-up-ballon.DO3kPh9k-SPjoYuF_.js"), []),
            "../../assets/icons/thumbs-up-regular.svg": () => t(() => import("./thumbs-up-regular.D23SBdq4-CPxCzYWZ.js"), []),
            "../../assets/icons/thumbs-up-solid.svg": () => t(() => import("./thumbs-up-solid.otnNnJ7U-CXoSXPz5.js"), []),
            "../../assets/icons/toilet.svg": () => t(() => import("./toilet.C9Mf6N46-D2BPMs5u.js"), []),
            "../../assets/icons/train.svg": () => t(() => import("./train.lXatSvNM-JASP4GSR.js"), []),
            "../../assets/icons/trash.svg": () => t(() => import("./trash.CBK8FSjr-BclKRnzO.js"), []),
            "../../assets/icons/triangle.svg": () => t(() => import("./triangle.Db6jG841-Ctlw6ALO.js"), []),
            "../../assets/icons/trophy.svg": () => t(() => import("./trophy.BlPh8asp-C2mP4vyJ.js"), []),
            "../../assets/icons/truck-bag.svg": () => t(() => import("./truck-bag.DRwtHyes-D3iQFYoB.js"), []),
            "../../assets/icons/truck.svg": () => t(() => import("./truck.CaMQ1Evw-CcFMrUtH.js"), []),
            "../../assets/icons/turkey.svg": () => t(() => import("./turkey.BFSLKKLe-BrVMMEX_.js"), []),
            "../../assets/icons/undo.svg": () => t(() => import("./undo.CZNENTnh-Bn_ozLWl.js"), []),
            "../../assets/icons/upload.svg": () => t(() => import("./upload.pJkwlNV4-Cjrg1zrV.js"), []),
            "../../assets/icons/user-eighteen-plus.svg": () => t(() => import("./user-eighteen-plus.AW8tDV7U-DnlAWYfQ.js"), []),
            "../../assets/icons/user.svg": () => t(() => import("./user.D05og-pt-DjIoXx5x.js"), []),
            "../../assets/icons/vegetables.svg": () => t(() => import("./vegetables.B4NldhMA-BtpRKiO9.js"), []),
            "../../assets/icons/volume-up.svg": () => t(() => import("./volume-up.DO9ZBlgC-_Vgkkmrw.js"), []),
            "../../assets/icons/voucher-euro.svg": () => t(() => import("./voucher-euro.BypZ1MU1-DdqA4XHK.js"), []),
            "../../assets/icons/voucher-gift.svg": () => t(() => import("./voucher-gift.CFfQp_It-Dc7ZIN-G.js"), []),
            "../../assets/icons/voucher-percentage.svg": () => t(() => import("./voucher-percentage.TZYc-A-_-DiKnzLui.js"), []),
            "../../assets/icons/wallet-coins.svg": () => t(() => import("./wallet-coins.C5176kyL-D8n4RNz5.js"), []),
            "../../assets/icons/wet-stamp.svg": () => t(() => import("./wet-stamp.C_c63Yz--BM2T8Mj6.js"), []),
            "../../assets/icons/wheelchair.svg": () => t(() => import("./wheelchair.NUcEnYf_-DpJsRKpP.js"), []),
            "../../assets/icons/wifi.svg": () => t(() => import("./wifi.ClxV_5ww-CumQkXgj.js"), []),
            "../../assets/icons/wine-glass-1.svg": () => t(() => import("./wine-glass-1.Bcl-5R8V-Blwn4yRt.js"), []),
            "../../assets/icons/wine-glass-2.svg": () => t(() => import("./wine-glass-2.DBTwC1iW-Bj8yhVDj.js"), []),
            "../../assets/icons/wine-glasses.svg": () => t(() => import("./wine-glasses.CQpZ_Rpy--biYzDF5.js"), []),
            "../../assets/icons/worst-solid.svg": () => t(() => import("./worst-solid.DIkSDDHz-C1SL4IoI.js"), []),
            "../../assets/icons/worst.svg": () => t(() => import("./worst.AgXHX1XR-DiyYniu3.js"), [])
          }), "../../assets/icons/placeholder.svg", 5);
          r.value = e.default
        }
      }, {
        immediate: !0
      }), (e, t) => (ks(), As("span", {
        innerHTML: r.value
      }, null, 8, jp))
    }
  }),
  zp = (e, t) => {
    const o = e.__vccOpts || e;
    for (const [r, s] of t) o[r] = s;
    return o
  },
  Fp = Symbol(),
  Vp = "OdsIconLocal",
  Np = zp(zo({
    __name: "OdsIcon",
    props: yr({
      name: {}
    }, {
      ...Sp
    }),
    setup(e) {
      const t = e,
        o = Lt(Bp),
        r = po(Fp, Vp);
      return bo(() => t.name, async () => {
        r !== Vp && (o.value = r)
      }, {
        immediate: !0
      }), (e, r) => (ks(), Ls(lr(o.value), Ns({
        ...e.$attrs,
        ...t
      }, {
        class: "ods-icon"
      }), null, 16))
    }
  }), [
    ["__scopeId", "data-v-2591fada"]
  ]),
  Mp = {
    Positive: "positive",
    Primary: "primary",
    Negative: "negative"
  },
  Up = Symbol(),
  qp = {
    Primary: "primary",
    Secondary: "secondary",
    Tertiary: "tertiary"
  },
  Wp = "none",
  $p = {
    level: qp.Primary,
    as: "button",
    href: "",
    label: "",
    isDisabled: !1,
    icon: "",
    theme: void 0,
    size: "medium",
    isLoading: !1,
    hyphens: "auto"
  },
  Hp = zo({
    inheritAttrs: !1,
    __name: "CoreButton",
    props: yr({
      level: {},
      as: {},
      href: {},
      label: {},
      size: {},
      isDisabled: {
        type: Boolean
      },
      icon: {},
      theme: {},
      isLoading: {
        type: Boolean
      },
      hyphens: {},
      baseClass: {}
    }, {
      ...$p,
      baseClass: "core-button"
    }),
    setup(e, {
      expose: t
    }) {
      const o = e,
        r = gr(),
        s = po(Up, {
          theme: Mp.Positive
        }),
        i = si(() => {
          var e;
          return {
            [o.baseClass]: !0,
            [`${o.baseClass}--theme-${o.theme??s.theme}`]: !0,
            [`${o.baseClass}--${o.level}`]: !0,
            [`${o.baseClass}--disabled`]: o.isDisabled,
            [`${o.baseClass}--no-label`]: !(null != (e = o.label) && e.length),
            [`${o.baseClass}--size-${o.size}`]: !0,
            "core-brand-lidl ods-theme-promotion": "primary" === o.theme || "primary" === s.theme,
            "core-brand-lidl ods-theme-black-friday": "negative" === o.theme || "negative" === s.theme,
            [`${o.baseClass}--loading`]: o.isLoading,
            [`${o.baseClass}--hyphens-${o.hyphens}`]: o.hyphens === Wp
          }
        }),
        n = si(() => {
          switch (o.as) {
            case "a":
              return {
                ...r, href: o.isDisabled || o.isLoading ? void 0 : o.href
              };
            case "RouterLink":
            case "NuxtLink":
              return {
                ...r, to: o.isDisabled || o.isLoading ? void 0 : o.href
              };
            case "button":
              return {
                type: "button", ...r, disabled: o.isDisabled || o.isLoading
              };
            default:
              return r
          }
        }),
        a = At(null);
      t({
        ref: a
      });
      const l = Ip("OdsButton");
      return mo(() => {
        o.theme && l.warnOnce("Property theme is deprecated. Please use new tokens with theming instead.")
      }), mo(() => {
        !o.label && !r.ariaLabel && l.warnOnce("Use aria-label attributer to make your component accessible if you have icon only button.")
      }), (e, t) => (ks(), Ls(lr(e.as), Ns({
        ref_key: "buttonRef",
        ref: a
      }, n.value, {
        class: i.value
      }), {
        default: ao(() => {
          var t;
          return [pr(e.$slots, "coreIcon", {
            iconName: e.icon
          }, () => [e.icon ? (ks(), Ls(Lp, {
            key: 0,
            name: e.icon,
            class: Q(`${e.baseClass}__icon`)
          }, null, 8, ["name", "class"])) : Bs("", !0)]), null != (t = e.label) && t.length ? (ks(), As("span", {
            key: 0,
            class: Q(`${e.baseClass}__text`)
          }, Z(e.label), 3)) : Bs("", !0), e.isLoading ? (ks(), As("span", {
            key: 1,
            class: Q(`${e.baseClass}__loading`)
          }, [pr(e.$slots, "coreIconRotate", {}, () => [Is(Lp, {
            name: "rotate",
            class: Q(`${e.baseClass}__loading-icon`)
          }, null, 8, ["class"])])], 2)) : Bs("", !0)]
        }),
        _: 3
      }, 16, ["class"]))
    }
  }),
  Qp = "ods-button",
  Gp = zp(zo({
    __name: "OdsButton",
    props: yr({
      level: {},
      as: {},
      href: {},
      label: {},
      size: {},
      isDisabled: {
        type: Boolean
      },
      icon: {},
      theme: {},
      isLoading: {
        type: Boolean
      },
      hyphens: {}
    }, $p),
    setup(e, {
      expose: t
    }) {
      const o = e,
        r = At(null);
      return t({
        ref: si(() => {
          var e;
          return null == (e = r.value) ? void 0 : e.ref
        })
      }), (e, t) => (ks(), Ls(Ot(Hp), Ns(o, {
        ref_key: "coreButtonInstanceRef",
        ref: r,
        "base-class": Qp
      }), {
        coreIcon: ao(({
          iconName: e
        }) => [e ? (ks(), Ls(Np, {
          key: 0,
          name: e,
          class: Q(`${Qp}__icon`)
        }, null, 8, ["name", "class"])) : Bs("", !0)]),
        coreIconRotate: ao(() => [Is(Np, {
          name: "rotate",
          class: Q(`${Qp}__loading-icon`)
        }, null, 8, ["class"])]),
        _: 1
      }, 16))
    }
  }), [
    ["__scopeId", "data-v-5bc501b6"]
  ]),
  Kp = {
    Positive: "positive",
    Primary: "primary",
    Negative: "negative"
  },
  Yp = {
    Positive: "positive",
    Negative: "negative",
    Discrete: "discrete",
    Primary: "primary"
  },
  Jp = {
    variant: Yp.Positive,
    as: "button",
    href: "",
    isDisabled: !1,
    icon: "placeholder",
    size: "medium",
    ariaLabel: ""
  },
  Zp = zo({
    inheritAttrs: !1,
    __name: "CoreIconButton",
    props: yr({
      variant: {},
      as: {},
      href: {},
      size: {},
      isDisabled: {
        type: Boolean
      },
      icon: {},
      ariaLabel: {},
      baseClass: {}
    }, {
      ...Jp,
      baseClass: "core-icon-button",
      icon: "placeholder",
      size: "medium"
    }),
    setup(e) {
      const t = e,
        o = si(() => ({
          [t.baseClass]: !0,
          [`${t.baseClass}--variant-${t.variant}`]: !0,
          [`${t.baseClass}--size-${t.size}`]: !0,
          [`${t.baseClass}--disabled`]: t.isDisabled
        })),
        r = gr(),
        s = Ip("OdsIconButton");
      mo(() => {
        t.ariaLabel || s.warnOnce("Please provide aria-label property to make button accessible for assistive technology."), t.variant === Yp.Negative && s.warnOnce(`Variant ${Yp.Negative} is deprecated.`), t.variant === Yp.Primary && "small" === t.size && s.warnOnce("Size small is not possible for variant primary.")
      });
      const i = si(() => {
        switch (t.as) {
          case "a":
            return {
              ...r, href: t.isDisabled ? void 0 : t.href
            };
          case "RouterLink":
          case "NuxtLink":
            return {
              ...r, to: t.isDisabled ? void 0 : t.href
            };
          case "button":
            return {
              type: "button", ...r, disabled: t.isDisabled
            };
          default:
            return r
        }
      });
      return (e, t) => (ks(), Ls(lr(e.as), Ns({
        class: o.value
      }, i.value, {
        "aria-label": e.ariaLabel
      }), {
        default: ao(() => [pr(e.$slots, "coreIcon", {
          iconName: e.icon
        }, () => [Is(Lp, {
          name: e.icon,
          class: Q(`${e.baseClass}__icon`)
        }, null, 8, ["name", "class"])])]),
        _: 3
      }, 16, ["class", "aria-label"]))
    }
  }),
  Xp = "ods-icon-button",
  eu = zp(zo({
    __name: "OdsIconButton",
    props: yr({
      variant: {},
      as: {},
      href: {},
      size: {},
      isDisabled: {
        type: Boolean
      },
      icon: {},
      ariaLabel: {}
    }, {
      ...Jp,
      icon: "placeholder",
      size: "medium"
    }),
    setup(e) {
      const t = e,
        o = si(() => t.variant === Yp.Primary ? "medium" : t.size);
      return (e, r) => (ks(), Ls(Ot(Zp), Ns(t, {
        "base-class": Xp,
        size: o.value
      }), {
        coreIcon: ao(({
          iconName: e
        }) => [e ? (ks(), Ls(Np, {
          key: 0,
          name: e,
          class: Q(`${Xp}__icon`)
        }, null, 8, ["name", "class"])) : Bs("", !0)]),
        _: 1
      }, 16, ["size"]))
    }
  }), [
    ["__scopeId", "data-v-061666db"]
  ]),
  tu = "warning",
  ou = "success",
  ru = "danger",
  su = {
    title: "",
    accessibleTitle: "info",
    titleAs: "h4",
    icon: !0,
    closable: !0,
    accessibleCloseText: "close",
    type: "info",
    confirmText: "",
    cancelText: "",
    baseClass: "core-alert"
  },
  iu = ["role", "aria-label"],
  nu = xp(zo({
    __name: "CoreAlert",
    props: yr({
      title: {},
      accessibleTitle: {},
      titleAs: {},
      icon: {
        type: [Boolean, String]
      },
      closable: {
        type: Boolean
      },
      accessibleCloseText: {},
      type: {},
      confirmText: {},
      cancelText: {},
      baseClass: {}
    }, {
      ...su,
      baseClass: "core-alert"
    }),
    emits: ["close", "confirm", "cancel"],
    setup(e, {
      emit: t
    }) {
      const o = e,
        r = t,
        s = si(() => [o.baseClass, `${o.baseClass}--${o.type}`]),
        i = si(() => "" !== o.confirmText || "" !== o.cancelText),
        n = si(() => i.value ? "alertdialog" : "alert"),
        a = si(() => o.type === ru ? "exclamation-triangle" : o.type === tu ? "exclamation-circle" : o.type === ou ? "hook-circle" : "boolean" == typeof o.icon ? "information-circle" : o.icon);
      return (e, t) => (ks(), As("div", {
        class: Q(s.value),
        role: n.value,
        "aria-label": e.accessibleTitle
      }, [e.icon ? pr(e.$slots, "coreIcon", {
        key: 0,
        iconName: a.value
      }, () => [Is(Lp, {
        name: a.value,
        class: Q(`${o.baseClass}__icon`)
      }, null, 8, ["name", "class"])], !0) : Bs("", !0), Rs("div", {
        class: Q(`${e.baseClass}__content`)
      }, [Rs("div", {
        class: Q(`${e.baseClass}__title`)
      }, [pr(e.$slots, "title", {}, () => [(ks(), Ls(lr(e.titleAs), {
        class: Q(`${e.baseClass}__headline`)
      }, {
        default: ao(() => [Ds(Z(e.title), 1)]),
        _: 1
      }, 8, ["class"]))], !0)], 2), pr(e.$slots, "default", {}, void 0, !0), i.value ? (ks(), As("div", {
        key: 0,
        class: Q(`${e.baseClass}__controls`)
      }, [e.cancelText ? (ks(), As("div", {
        key: 0,
        class: Q([`${e.baseClass}__control`, `${e.baseClass}__control--cancel`])
      }, [pr(e.$slots, "coreCancel", {}, () => [Is(Hp, {
        level: "tertiary",
        theme: Ot(Mp)
          .Positive,
        label: e.cancelText,
        onClick: t[0] || (t[0] = e => r("cancel", e))
      }, null, 8, ["theme", "label"])], !0)], 2)) : Bs("", !0), e.confirmText ? (ks(), As("div", {
        key: 1,
        class: Q([`${e.baseClass}__control`, `${e.baseClass}__control--confirm`])
      }, [pr(e.$slots, "coreConfirm", {}, () => [Is(Hp, {
        level: "tertiary",
        theme: Ot(Mp)
          .Positive,
        label: e.confirmText,
        onClick: t[1] || (t[1] = e => r("confirm", e))
      }, null, 8, ["theme", "label"])], !0)], 2)) : Bs("", !0)], 2)) : Bs("", !0)], 2), pr(e.$slots, "coreClose", {}, () => [e.closable ? (ks(), Ls(Zp, {
        key: 0,
        variant: Ot(Yp)
          .Positive,
        icon: "close",
        size: "small",
        "aria-label": e.accessibleCloseText,
        onClick: t[2] || (t[2] = e => r("close", e))
      }, null, 8, ["variant", "aria-label"])) : Bs("", !0)], !0)], 10, iu))
    }
  }), [
    ["__scopeId", "data-v-0faeb638"]
  ]),
  au = "ods-alert",
  lu = zp(zo({
    __name: "OdsAlert",
    props: yr({
      title: {},
      accessibleTitle: {},
      titleAs: {},
      icon: {
        type: [Boolean, String]
      },
      closable: {
        type: Boolean
      },
      accessibleCloseText: {},
      type: {},
      confirmText: {},
      cancelText: {}
    }, su),
    emits: ["close", "confirm", "cancel"],
    setup(e, {
      emit: t
    }) {
      const o = e,
        r = t;
      return (e, t) => (ks(), Ls(Ot(nu), Ns(o, {
        "base-class": au
      }), function(e, t) {
        for (let o = 0; o < t.length; o++) {
          const r = t[o];
          if (f(r))
            for (let t = 0; t < r.length; t++) e[r[t].name] = r[t].fn;
          else r && (e[r.name] = r.key ? (...e) => {
            const t = r.fn(...e);
            return t && (t.key = r.key), t
          } : r.fn)
        }
        return e
      }({
        coreIcon: ao(({
          iconName: e
        }) => [e ? (ks(), Ls(Np, {
          key: 0,
          name: e,
          class: Q(`${au}__icon`)
        }, null, 8, ["name", "class"])) : Bs("", !0)]),
        coreCancel: ao(() => [Is(Gp, {
          level: "tertiary",
          theme: Ot(Kp)
            .Positive,
          label: e.cancelText,
          onClick: t[0] || (t[0] = e => r("cancel", e))
        }, null, 8, ["theme", "label"])]),
        coreConfirm: ao(() => [Is(Gp, {
          level: "tertiary",
          theme: Ot(Kp)
            .Positive,
          label: e.confirmText,
          onClick: t[1] || (t[1] = e => r("confirm", e))
        }, null, 8, ["theme", "label"])]),
        coreClose: ao(() => [e.closable ? (ks(), Ls(eu, {
          key: 0,
          variant: Ot(Yp)
            .Positive,
          icon: "close",
          size: "small",
          "aria-label": e.accessibleCloseText,
          onClick: t[2] || (t[2] = e => r("close", e))
        }, null, 8, ["variant", "aria-label"])) : Bs("", !0)]),
        default: ao(() => [pr(e.$slots, "default", {}, void 0, !0)]),
        _: 2
      }, [e.$slots.title ? {
        name: "title",
        fn: ao(() => [pr(e.$slots, "title", {}, void 0, !0)]),
        key: "0"
      } : void 0]), 1040))
    }
  }), [
    ["__scopeId", "data-v-f7b46fef"]
  ]),
  cu = Symbol(),
  du = "info",
  pu = "warning",
  uu = "error",
  fu = {};

function mu(e, t) {
  return !!ie() && (function(e) {
    oe && oe.cleanups.push(e)
  }(e, t), !0)
}
const bu = new WeakMap,
  hu = (...e) => {
    var t;
    const o = e[0],
      r = null === (t = $s()) || void 0 === t ? void 0 : t.proxy,
      s = null != r ? r : ie();
    if (null == s && !uo()) throw new Error("injectLocal must be called in setup");
    return s && bu.has(s) && o in bu.get(s) ? bu.get(s)[o] : po(...e)
  },
  gu = "undefined" != typeof window && "undefined" != typeof document;
"undefined" != typeof WorkerGlobalScope && (globalThis, WorkerGlobalScope);
const _u = Object.prototype.toString;

function vu(e) {
  return e.endsWith("rem") ? 16 * Number.parseFloat(e) : Number.parseFloat(e)
}

function yu(e) {
  return Array.isArray(e) ? e : [e]
}

function ku(e, t = !0, o) {
  $s() ? Zo(e, o) : t ? e() : Yt(e)
}
const xu = gu ? window : void 0;

function Eu(e) {
  var t;
  const o = Ct(e);
  return null !== (t = null == o ? void 0 : o.$el) && void 0 !== t ? t : o
}

function wu(...e) {
  const t = [],
    o = () => {
      t.forEach(e => e()), t.length = 0
    },
    r = si(() => {
      const t = yu(Ct(e[0]))
        .filter(e => null != e);
      return t.every(e => "string" != typeof e) ? t : void 0
    }),
    s = (i = ([e, r, s, i]) => {
      if (o(), !(null == e ? void 0 : e.length) || !(null == r ? void 0 : r.length) || !(null == s ? void 0 : s.length)) return;
      const n = (a = i, "[object Object]" === _u.call(a) ? {
        ...i
      } : i);
      var a;
      t.push(...e.flatMap(e => r.flatMap(t => s.map(o => ((e, t, o, r) => (e.addEventListener(t, o, r), () => e.removeEventListener(t, o, r)))(e, t, o, n)))))
    }, n = {
      flush: "post"
    }, bo(() => {
      var t, o;
      return [null !== (t = null === (o = r.value) || void 0 === o ? void 0 : o.map(e => Eu(e))) && void 0 !== t ? t : [xu].filter(e => null != e), yu(Ct(r.value ? e[1] : e[0])), yu(Ot(r.value ? e[2] : e[1])), Ct(r.value ? e[3] : e[2])]
    }, i, {
      ...n,
      immediate: !0
    }));
  var i, n;
  return mu(o), () => {
    s(), o()
  }
}

function Au() {
  const e = Lt(!1),
    t = $s();
  return t && Zo(() => {
    e.value = !0
  }, t), e
}

function Lu(e) {
  const t = Au();
  return si(() => (t.value, Boolean(e())))
}
const Pu = Symbol("vueuse-ssr-width");

function Tu() {
  const e = uo() ? hu(Pu, null) : null;
  return "number" == typeof e ? e : void 0
}

function Ou(e, t = {}) {
  const {
    window: o = xu,
    ssrWidth: r = Tu()
  } = t, s = Lu(() => o && "matchMedia" in o && "function" == typeof o.matchMedia), i = Lt("number" == typeof r), n = Lt(), a = Lt(!1);
  return mo(() => {
    if (i.value) return i.value = !s.value, void(a.value = Ct(e)
      .split(",")
      .some(e => {
        const t = e.includes("not all"),
          o = e.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),
          s = e.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let i = Boolean(o || s);
        return o && i && (i = r >= vu(o[1])), s && i && (i = r <= vu(s[1])), t ? !i : i
      }));
    s.value && (n.value = o.matchMedia(Ct(e)), a.value = n.value.matches)
  }), wu(n, "change", e => {
    a.value = e.matches
  }, {
    passive: !0
  }), si(() => a.value)
}

function Cu(e, t = {
  width: 0,
  height: 0
}, o = {}) {
  const {
    window: r = xu,
    box: s = "content-box"
  } = o, i = si(() => {
    var t;
    return null === (t = Eu(e)) || void 0 === t || null === (t = t.namespaceURI) || void 0 === t ? void 0 : t.includes("svg")
  }), n = Lt(t.width), a = Lt(t.height), {
    stop: l
  } = function(e, t, o = {}) {
    const {
      window: r = xu,
      ...s
    } = o;
    let i;
    const n = Lu(() => r && "ResizeObserver" in r),
      a = () => {
        i && (i.disconnect(), i = void 0)
      },
      l = bo(si(() => {
        const t = Ct(e);
        return Array.isArray(t) ? t.map(e => Eu(e)) : [Eu(t)]
      }), e => {
        if (a(), n.value && r) {
          i = new ResizeObserver(t);
          for (const t of e) t && i.observe(t, s)
        }
      }, {
        immediate: !0,
        flush: "post"
      }),
      c = () => {
        a(), l()
      };
    return mu(c), {
      isSupported: n,
      stop: c
    }
  }(e, ([t]) => {
    const o = "border-box" === s ? t.borderBoxSize : "content-box" === s ? t.contentBoxSize : t.devicePixelContentBoxSize;
    if (r && i.value) {
      const t = Eu(e);
      if (t) {
        const e = t.getBoundingClientRect();
        n.value = e.width, a.value = e.height
      }
    } else if (o) {
      const e = yu(o);
      n.value = e.reduce((e, {
        inlineSize: t
      }) => e + t, 0), a.value = e.reduce((e, {
        blockSize: t
      }) => e + t, 0)
    } else n.value = t.contentRect.width, a.value = t.contentRect.height
  }, o);
  ku(() => {
    const o = Eu(e);
    o && (n.value = "offsetWidth" in o ? o.offsetWidth : t.width, a.value = "offsetHeight" in o ? o.offsetHeight : t.height)
  });
  const c = bo(() => Eu(e), e => {
    n.value = e ? t.width : 0, a.value = e ? t.height : 0
  });
  return {
    width: n,
    height: a,
    stop: function() {
      l(), c()
    }
  }
}

function Ru(e = {}) {
  const {
    window: t = xu,
    initialWidth: o = Number.POSITIVE_INFINITY,
    initialHeight: r = Number.POSITIVE_INFINITY,
    listenOrientation: s = !0,
    includeScrollbar: i = !0,
    type: n = "inner"
  } = e, a = Lt(o), l = Lt(r), c = () => {
    if (t)
      if ("outer" === n) a.value = t.outerWidth, l.value = t.outerHeight;
      else if ("visual" === n && t.visualViewport) {
      const {
        width: e,
        height: o,
        scale: r
      } = t.visualViewport;
      a.value = Math.round(e * r), l.value = Math.round(o * r)
    } else i ? (a.value = t.innerWidth, l.value = t.innerHeight) : (a.value = t.document.documentElement.clientWidth, l.value = t.document.documentElement.clientHeight)
  };
  c(), ku(c);
  const d = {
    passive: !0
  };
  return wu("resize", c, d), t && "visual" === n && t.visualViewport && wu(t.visualViewport, "resize", c, d), s && bo(Ou("(orientation: portrait)"), () => c()), {
    width: a,
    height: l
  }
}
const h = zo({
  __name: "OdsFocusTrap",
  props: {
    isActive: {
      type: Boolean
    }
  },
  setup(e) {
    const t = e,
      o = At(),
      r = At(),
      s = At(),
      i = At(),
      n = e => {
        "Tab" === e.key && (e => {
          var t, s;
          const {
            activeElement: i
          } = document;
          e && i === r.value ? null == (t = o.value) || t.focus({
            preventScroll: !0
          }) : !e && i === o.value && (null == (s = r.value) || s.focus({
            preventScroll: !0
          }))
        })(!e.shiftKey)
      };
    return Zo(() => {
      bo(() => t.isActive, e => {
        var t;
        e ? (null != (t = s.value) && t.contains(document.activeElement) || (i.value = document.activeElement, Yt(() => {
          var e;
          null == (e = o.value) || e.focus({
            preventScroll: !0
          })
        })), document.addEventListener("keydown", n)) : (i.value && i.value.focus({
          preventScroll: !0
        }), document.removeEventListener("keydown", n))
      }, {
        immediate: !0
      })
    }), tr(() => {
      if (document.removeEventListener("keydown", n), i.value) try {
        i.value.focus({
          preventScroll: !0
        })
      } catch {}
    }), (e, t) => (ks(), As("div", {
      ref_key: "wrapperRef",
      ref: s
    }, [Rs("div", {
      ref_key: "focusableStartRef",
      ref: o,
      tabindex: "0",
      class: "ods-focus-trap-ref"
    }, null, 512), pr(e.$slots, "default"), Rs("div", {
      ref_key: "focusableEndRef",
      ref: r,
      tabindex: "0",
      class: "ods-focus-trap-ref"
    }, null, 512)], 512))
  }
});
let Iu = "",
  Su = "",
  Du = "",
  ju = "";
const Bu = At("0px");

function zu(e) {
  if (typeof document > "u") return;
  const t = document.documentElement;
  bo(e, e => {
    e ? (() => {
      const e = window.innerWidth - t.offsetWidth;
      e > 0 && (Iu = t.style.marginRight, t.style.marginRight = `${e}px`, Bu.value = `${e}px`), Su = t.style.overflow, Du = t.style.overflowX, ju = t.style.overflowY, t.style.overflow = "hidden", t.style.overflowX = "hidden", t.style.overflowY = "hidden"
    })() : (t.style.marginRight = Iu, t.style.overflow = Su, t.style.overflowX = Du, t.style.overflowY = ju, Bu.value = "0px")
  }, {
    immediate: !0
  })
}
const Fu = {
    VShow: "v-show",
    VIf: "v-if"
  },
  Vu = {
    Auto: "auto",
    SideSheet: "sideSheet",
    BottomSheet: "bottomSheet"
  },
  Nu = ["aria-label"],
  Mu = ["disabled", "aria-label"],
  Uu = {
    key: 1,
    class: "ods-sheet__icon"
  },
  qu = {
    class: "ods-sheet__title-text"
  },
  Wu = zp(zo({
    __name: "OdsSheet",
    props: yr({
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
      title: "",
      isOpen: !1,
      isCalloutOpen: !1,
      isInvisibleWhenClosed: !1,
      accessibleBackText: "",
      accessibleCloseText: "",
      accessibleOpenText: "",
      zIndex: 1e3,
      destroyOnClose: !1,
      forceRender: !1,
      maskClosable: !0,
      hasFullWidthContent: !1,
      displayMode: Vu.Auto,
      hiddenCalloutDirective: Fu.VIf
    }),
    emits: ["update:isOpen", "update:isCalloutOpen"],
    setup(e, {
      emit: t
    }) {
      Bi(e => ({
        d165ed24: e.zIndex,
        "46d7aca6": A.value,
        d67cd16a: j.value,
        "63c27143": u.value
      }));
      const o = e,
        r = t,
        s = Ou("(max-width: 767px)"),
        i = si(() => "object" == typeof o.bottomSheetProps && null !== o.bottomSheetProps.isInvisibleWhenClosed ? o.bottomSheetProps.isInvisibleWhenClosed : o.isInvisibleWhenClosed),
        n = si(() => o.displayMode === Vu.Auto ? s.value ? Vu.BottomSheet : Vu.SideSheet : o.displayMode),
        {
          abs: a,
          max: l,
          min: c
        } = Math,
        d = At(void 0),
        p = At(o.isCalloutOpen),
        u = At("auto"),
        f = At(!1),
        m = At(null),
        b = At(null),
        g = At(null),
        _ = At(null),
        v = At(!1),
        y = ft([0, 0]),
        k = ft([0, 0]),
        x = At(!1),
        E = At(0),
        w = At(o.isOpen),
        A = si(() => {
          const {
            height: e
          } = Ru();
          return `${e.value}px`
        }),
        L = Cu(b, {
          width: 0,
          height: 0
        }, {
          box: "border-box"
        }),
        P = Cu(g, {
          width: 0,
          height: 0
        }, {
          box: "border-box"
        }),
        T = Cu(_, {
          width: 0,
          height: 0
        }, {
          box: "border-box"
        }),
        O = Cu(_, {
          width: 0,
          height: 0
        }, {
          box: "border-box"
        }),
        C = si(() => O.height.value);
      zu(w);
      const R = si(() => {
          let e = "";
          return B.value && (e = getComputedStyle(B.value)
            .marginBottom.replace("px", "")), L.height.value + P.height.value + T.height.value + Number(e)
        }),
        I = si(() => y[0] - k[0]),
        S = si(() => y[1] - k[1]),
        D = si(() => l(a(I.value), a(S.value)) >= 8),
        j = si(() => x.value ? "0s" : "0.5s"),
        B = At(null),
        z = At(0),
        F = At(0),
        V = e => {
          z.value = e.target.scrollTop
        },
        N = e => [e.touches[0].clientX, e.touches[0].clientY],
        M = (e, [t, o]) => {
          e[0] = t, e[1] = o
        },
        U = e => {
          if (1 !== e.touches.length) return;
          const t = N(e);
          M(y, t), M(k, t), m.value && (E.value = Number(m.value.offsetHeight))
        },
        q = e => {
          if (e.preventDefault(), 1 !== e.touches.length) return;
          const t = N(e);
          M(k, t), !x.value && D.value && (x.value = !0), x.value && (() => {
            if (C.value)
              if (!o.isOpen && S.value > 0) {
                const e = a(S.value);
                d.value = `${e}px`
              } else {
                const e = E.value - -1 * c(S.value, 0);
                d.value = `${e}px`
              }
          })()
        },
        W = () => {
          x.value && (a(S.value) >= 50 && r("update:isOpen", !o.isOpen), d.value = void 0), x.value = !1
        },
        $ = () => {
          o.maskClosable && r("update:isOpen", !1)
        },
        H = e => {
          o.isOpen && "Escape" === e.key && r("update:isOpen", !1)
        },
        G = (e => {
          const t = po(cu, {
              enableLogs: !1,
              logLevel: uu
            }),
            o = e => {
              if (t && t.enableLogs) switch (e) {
                case du:
                  return !0;
                case pu:
                  return t.logLevel === pu || t.logLevel === uu;
                case uu:
                  return t.logLevel === uu
              }
              return !1
            };
          return {
            warn: (t, ...r) => {
              o(pu) && console.warn(`[OdsLidl/${e}] - ${t}`, ...r)
            },
            error: (t, ...r) => {
              o(uu) && console.error(`[OdsLidl/${e}] - ${t}`, ...r)
            },
            info: (t, ...r) => {
              o(du) && console.log(`[OdsLidl/${e}] - ${t}`, ...r)
            },
            errorOnce: (t, ...r) => {
              o(uu) && !fu[t] && (console.error(`[OdsLidl/${e}] - ${t}`, ...r), fu[t] = !0)
            },
            warnOnce: (t, ...r) => {
              o(pu) && !fu[t] && (console.warn(`[OdsLidl/${e}] - ${t}`, ...r), fu[t] = !0)
            },
            infoOnce: (t, ...r) => {
              o(du) && !fu[t] && (console.log(`[OdsLidl/${e}] - ${t}`, ...r), fu[t] = !0)
            }
          }
        })("OdsSheet");
      mo(() => {
        o.accessibleCloseText || G.warnOnce("Use accessibleCloseText property to make the close button accessible."), !o.accessibleOpenText && !o.isInvisibleWhenClosed && G.warnOnce("Use accessibleOpenText property to make the Pill button accessible."), !o.accessibleBackText && o.isCalloutOpen && G.warnOnce("Use accessibleBackText property to make the back button (left arrow on callouts) accessible.")
      });
      const K = si(() => o.accessibleCloseText ? o.accessibleCloseText : "close"),
        Y = si(() => o.accessibleOpenText ? o.accessibleOpenText : "open"),
        J = si(() => o.accessibleBackText ? o.accessibleBackText : "back");
      Zo(() => {
        bo(() => o.isOpen, e => {
          v.value = !1, setTimeout(() => {
            v.value = !0
          }, 500), e ? (f.value = !0, w.value = !0, document.addEventListener("keydown", H)) : (document.removeEventListener("keydown", H), w.value = !1)
        }, {
          immediate: !0
        }), bo(() => o.isOpen, e => {
          e || r("update:isCalloutOpen", p.value)
        })
      });
      const X = si(() => !(!(o.forceRender || o.isOpen || f.value && !o.destroyOnClose) && i.value));
      bo(() => o.isCalloutOpen, async e => {
        o.isOpen && (e ? (F.value = z.value, u.value = `${T.width.value}px`, B.value && (B.value.scrollTop = 0)) : (await Yt(), B.value && (B.value.scrollTop = F.value), u.value = "auto", F.value = 0))
      }), bo(s, () => {
        u.value = "auto"
      });
      const ee = si(() => ({
          "ods-sheet": !0,
          "ods-sheet--side": n.value === Vu.SideSheet,
          "ods-sheet--bottom": n.value === Vu.BottomSheet,
          "ods-sheet--is-open": o.isOpen,
          "ods-sheet--is-transition-ended": v.value,
          "ods-sheet--is-invisible-when-closed": i.value && !o.isOpen
        })),
        te = si(() => n.value === Vu.BottomSheet ? {
          height: o.isOpen && !x.value ? `${R.value}px` : d.value
        } : {});
      return (e, t) => X.value ? (ks(), Ls(Po, {
        key: 0,
        to: "body"
      }, [lo(Rs("div", {
        class: Q(["ods-sheet__background-pane", {
          "ods-sheet__background-pane--closable": e.maskClosable
        }]),
        role: "none",
        onClick: $
      }, null, 2), [
        [Si, e.isOpen]
      ]), Rs("div", Ns(e.$attrs, {
        ref_key: "container",
        ref: m,
        class: ee.value,
        style: te.value,
        "aria-label": e.title,
        "aria-modal": "true",
        role: "dialog"
      }), [Is(h, {
        "is-active": e.isOpen,
        class: "ods-sheet__wrapper"
      }, {
        default: ao(() => [lo(Rs("div", {
          ref_key: "target",
          ref: b,
          class: "ods-sheet__handle"
        }, [Rs("button", {
          disabled: i.value && !e.isOpen,
          class: "ods-sheet__pill-wrapper",
          "aria-label": e.isOpen ? K.value : Y.value,
          onClick: t[0] || (t[0] = t => e.isOpen ? r("update:isOpen", !1) : r("update:isOpen", !0)),
          onTouchstartPassive: U,
          onTouchmove: q,
          onTouchend: W,
          onTouchcancel: W
        }, t[3] || (t[3] = [Rs("span", {
          class: "ods-sheet__pill"
        }, null, -1)]), 40, Mu)], 512), [
          [Si, n.value === Ot(Vu)
            .BottomSheet
          ]
        ]), Rs("div", {
          ref_key: "header",
          ref: g,
          class: "ods-sheet__title"
        }, [e.isCalloutOpen ? (ks(), Ls(eu, {
          key: 0,
          class: "ods-sheet__back-button",
          variant: Ot(Yp)
            .Positive,
          icon: "arrow-left",
          size: "small",
          "aria-label": J.value,
          onClick: t[1] || (t[1] = e => r("update:isCalloutOpen", !1))
        }, null, 8, ["variant", "aria-label"])) : Bs("", !0), e.$slots.icon ? (ks(), As("div", Uu, [pr(e.$slots, "icon", {}, void 0, !0)])) : Bs("", !0), Rs("h3", qu, Z(e.title), 1), Is(eu, {
          class: "ods-sheet__close",
          variant: Ot(Yp)
            .Positive,
          icon: "cross",
          size: "small",
          "aria-label": K.value,
          onClick: t[2] || (t[2] = e => r("update:isOpen", !1))
        }, null, 8, ["variant", "aria-label"])], 512), Rs("div", {
          ref_key: "scrollContainer",
          ref: B,
          class: Q(["ods-sheet__content", {
            "ods-sheet__content--spacing": !e.hasFullWidthContent
          }]),
          role: "document",
          onScrollPassive: V
        }, [Rs("div", {
          ref_key: "content",
          ref: _,
          class: "ods-sheet__content-container"
        }, [e.hiddenCalloutDirective === Ot(Fu)
          .VIf ? (ks(), As(bs, {
            key: 0
          }, [e.isCalloutOpen ? pr(e.$slots, "callout", {
            key: 0
          }, void 0, !0) : pr(e.$slots, "default", {
            key: 1
          }, void 0, !0)], 64)) : (ks(), As(bs, {
            key: 1
          }, [lo(Rs("div", null, [pr(e.$slots, "callout", {}, void 0, !0)], 512), [
            [Si, e.isCalloutOpen]
          ]), lo(Rs("div", null, [pr(e.$slots, "default", {}, void 0, !0)], 512), [
            [Si, !e.isCalloutOpen]
          ])], 64))
        ], 512)], 34)]),
        _: 3
      }, 8, ["is-active"])], 16, Nu)])) : Bs("", !0)
    }
  }), [
    ["__scopeId", "data-v-1aabe2ce"]
  ]),
  $u = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    fill: "none"
  };
const Hu = zp({}, [
    ["render", function(e, t) {
      return ks(), As("svg", $u, t[0] || (t[0] = [js('<path d="M27.9817 0.396042C29.0057 0.396042 30.001 0.598254 30.9398 0.99709C31.8468 1.38231 32.6626 1.93376 33.3646 2.63574C34.0666 3.33772 34.6177 4.15355 35.0033 5.06054C35.4021 5.9993 35.6043 6.99465 35.6043 8.01863V27.9828C35.6043 29.0068 35.4021 30.0021 35.0033 30.9409C34.618 31.8478 34.0666 32.6637 33.3646 33.3657C32.6626 34.0676 31.8468 34.6187 30.9398 35.0043C30.001 35.4031 29.0057 35.6054 27.9817 35.6054H8.01793C6.99395 35.6054 5.9986 35.4031 5.05984 35.0043C4.15285 34.6191 3.33702 34.0676 2.63504 33.3657C1.93306 32.6637 1.38196 31.8478 0.996391 30.9409C0.597555 30.0021 0.395343 29.0068 0.395343 27.9828V8.01863C0.395343 6.99465 0.597555 5.9993 0.996391 5.06054C1.38161 4.15355 1.93306 3.33772 2.63504 2.63574C3.33702 1.93376 4.15285 1.38265 5.05984 0.99709C5.9986 0.598254 6.99395 0.396042 8.01793 0.396042H27.9817Z" fill="#0050AA"></path><path d="M27.9817 36.001H8.01793C6.94051 36.001 5.89313 35.7884 4.90512 35.3686C3.95099 34.9631 3.0929 34.3834 2.3553 33.6454C1.61735 32.9075 1.0376 32.0494 0.63248 31.0956C0.212689 30.1076 0 29.0602 0 27.9828V8.01863C0 6.94121 0.212689 5.89383 0.63248 4.90582C1.03795 3.95169 1.61735 3.09395 2.3553 2.356C3.09325 1.61804 3.95134 1.0383 4.90512 0.633178C5.89278 0.212689 6.94016 0 8.01793 0H27.9821C29.0595 0 30.1069 0.212689 31.0949 0.63248C32.049 1.03795 32.9068 1.6177 33.6447 2.35565C34.3827 3.0936 34.9624 3.95169 35.3675 4.90547C35.7873 5.89348 36 6.94086 36 8.01828V27.9824C36 29.0598 35.7873 30.1072 35.3675 31.0952C34.9624 32.0494 34.3827 32.9071 33.6447 33.6451C32.9068 34.383 32.0487 34.9627 31.0949 35.3679C30.1069 35.7877 29.0591 36.001 27.9817 36.001ZM8.01793 0.792084C7.04738 0.792084 6.10407 0.983818 5.21455 1.3617C4.35437 1.72701 3.58079 2.25017 2.91478 2.91583C2.24913 3.58149 1.72596 4.35541 1.36065 5.2156C0.982771 6.10512 0.791036 7.04843 0.791036 8.01898V27.9831C0.791036 28.9537 0.982771 29.8966 1.36065 30.7865C1.72596 31.6467 2.24878 32.4203 2.91478 33.0863C3.58044 33.7519 4.35402 34.2751 5.21455 34.6404C6.10407 35.0183 7.04738 35.21 8.01793 35.21H27.9821C28.9526 35.21 29.8959 35.0183 30.7854 34.6404C31.6456 34.2751 32.4192 33.7523 33.0852 33.0863C33.7509 32.4206 34.274 31.6467 34.6394 30.7865C35.0172 29.897 35.209 28.9537 35.209 27.9831V8.01863C35.209 7.04808 35.0172 6.10477 34.6394 5.21525C34.274 4.35506 33.7512 3.58149 33.0852 2.91548C32.4192 2.24948 31.6456 1.72666 30.7854 1.36135C29.8959 0.983469 28.9526 0.791735 27.9821 0.791735L8.01793 0.792084Z" fill="white"></path><path d="M28.1972 3.43656H7.80139V23.8324H28.1972V3.43656Z" fill="#0050AA"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17.9993 3.99919C12.6803 3.99919 8.36402 8.31549 8.36402 13.6369C8.36402 18.9583 12.6803 23.2694 17.9993 23.2694C23.3183 23.2694 27.6342 18.9559 27.6342 13.6369C27.6342 8.31514 23.3179 3.99919 17.9993 3.99919Z" fill="#E60A14"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17.9993 4.60897C13.0159 4.60897 8.9738 8.65111 8.9738 13.6369C8.9738 18.6227 13.0159 22.6596 17.9993 22.6596C22.9827 22.6596 27.0244 18.6175 27.0244 13.6369C27.0244 8.65635 22.982 4.60897 17.9993 4.60897Z" fill="#FFF000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M21.9667 11.9598V12.5721H22.442V14.6993H21.9667V15.3143H25.9778V13.6369L24.3314 14.5519V12.5721H24.8071V11.9598H21.9667Z" fill="#0050AA"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20.385 11.9598H17.679V12.5724H18.1519V14.6997H17.679V15.315H20.385C22.3854 15.315 22.4064 11.9598 20.385 11.9598ZM20.005 14.2676H19.8705V13.0013H19.984C20.576 13.0013 20.5764 14.2704 20.005 14.2676Z" fill="#0050AA"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.1519 13.1717V13.7867L15.5881 16.3558L15.2804 16.0456L15.7537 15.5728L14.4716 14.2879L14.0092 14.7524V14.1353L15.8466 12.2958L17.4388 13.8877L18.1519 13.1717ZM15.6112 10.0523C15.0531 10.0523 14.6005 10.5021 14.6005 11.0602C14.6005 11.6183 15.0527 12.0709 15.6112 12.0709C16.1696 12.0709 16.6219 11.6186 16.6219 11.0602C16.6219 10.5021 16.1696 10.0523 15.6112 10.0523Z" fill="#E60A14"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.0002 11.9598H12.8378V12.5721H12.365V14.5519L14.0088 13.6369V15.3143H10.0002V14.6993H10.4755V12.5721H10.0002V11.9598Z" fill="#0050AA"></path><path d="M11.0679 27.8605H10.8035C10.7448 27.8605 10.7005 27.8459 10.6715 27.8165C10.6421 27.7872 10.6275 27.7432 10.6275 27.6845V26.8565C10.6275 26.7978 10.6421 26.7538 10.6715 26.7244C10.7008 26.6951 10.7448 26.6804 10.8035 26.6804H12.6356C13.4403 26.6804 14.0452 26.8523 14.4503 27.1956C14.8554 27.5392 15.058 28.0544 15.058 28.7417C15.058 29.429 14.8481 29.9749 14.4283 30.3625C14.0085 30.7502 13.4225 30.944 12.6709 30.944H12.5036V32.5823C12.5036 32.641 12.4889 32.685 12.4596 32.7143C12.4303 32.7437 12.3859 32.7583 12.3276 32.7583H11.2442C11.1856 32.7583 11.1416 32.7437 11.1122 32.7143C11.0829 32.685 11.0682 32.641 11.0682 32.5823L11.0679 27.8605ZM12.504 29.7719H12.6712C12.9765 29.7719 13.2087 29.6913 13.3673 29.5296C13.5258 29.3682 13.6051 29.1286 13.6051 28.8115C13.6051 28.4944 13.5304 28.2492 13.3806 28.0935C13.2307 27.9381 13.0002 27.8602 12.6891 27.8602H12.504V29.7719Z" fill="white"></path><path d="M16.8552 26.5037C16.9139 26.5037 16.9579 26.5184 16.9872 26.5477C17.0165 26.5771 17.0312 26.6211 17.0312 26.6797V31.727H17.269C17.3277 31.727 17.3717 31.7417 17.401 31.771C17.4304 31.8004 17.4451 31.8444 17.4451 31.903V32.5638C17.4451 32.605 17.4332 32.6431 17.4098 32.6783C17.3864 32.7136 17.3539 32.737 17.313 32.7489C17.2191 32.7782 17.1178 32.8002 17.0092 32.8149C16.9006 32.8296 16.7934 32.8369 16.6875 32.8369C16.3233 32.8369 16.0621 32.7328 15.9035 32.5243C15.7449 32.3158 15.6657 31.9767 15.6657 31.507V26.6797C15.6657 26.6211 15.6803 26.5771 15.7097 26.5477C15.739 26.5184 15.783 26.5037 15.8417 26.5037H16.8552Z" fill="white"></path><path d="M21.4977 28.3889C21.5563 28.3889 21.6003 28.4036 21.6297 28.4329C21.659 28.4623 21.6737 28.5063 21.6737 28.565V31.7274H21.885C21.9437 31.7274 21.9877 31.742 22.017 31.7714C22.0463 31.8007 22.061 31.8447 22.061 31.9034V32.5554C22.061 32.6026 22.0477 32.6434 22.0215 32.6787C21.995 32.714 21.9583 32.7346 21.9115 32.7405C21.8116 32.7639 21.7076 32.7803 21.599 32.7891C21.4903 32.7978 21.3685 32.8023 21.2333 32.8023C21.0101 32.8023 20.831 32.7583 20.6958 32.6703C20.5607 32.5823 20.4639 32.4412 20.4052 32.2474H20.3787C20.2495 32.4646 20.0955 32.6218 19.9163 32.7185C19.7371 32.8153 19.5213 32.8638 19.2688 32.8638C18.8752 32.8638 18.5728 32.7332 18.3615 32.4719C18.1502 32.2107 18.0444 31.8363 18.0444 31.3488V28.5653C18.0444 28.5066 18.059 28.4626 18.0884 28.4333C18.1177 28.404 18.1617 28.3893 18.2204 28.3893H19.2335C19.2922 28.3893 19.3362 28.404 19.3655 28.4333C19.3949 28.4626 19.4095 28.5066 19.4095 28.5653V31.164C19.4095 31.3519 19.4448 31.4899 19.5154 31.5779C19.5859 31.6659 19.6973 31.7099 19.8499 31.7099C19.9439 31.7099 20.0291 31.6879 20.1052 31.6439C20.1814 31.5999 20.2491 31.5339 20.3078 31.4455V28.565C20.3078 28.5063 20.3225 28.4623 20.3518 28.4329C20.3811 28.4036 20.4251 28.3889 20.4838 28.3889H21.4977Z" fill="white"></path><path d="M22.9816 28.6442C23.2428 28.4036 23.5966 28.2831 24.043 28.2831C24.3953 28.2831 24.6873 28.3771 24.9196 28.565C25.1515 28.7529 25.3146 29.0291 25.4085 29.393C25.4204 29.4402 25.4144 29.4828 25.391 29.5208C25.3676 29.5593 25.3292 29.5841 25.2765 29.5956L24.5717 29.7367C24.5071 29.7485 24.4572 29.7426 24.4219 29.7192C24.3866 29.6958 24.3601 29.6546 24.3426 29.5959C24.3192 29.502 24.2825 29.43 24.2326 29.3801C24.1827 29.3302 24.1194 29.3054 24.0433 29.3054C23.9609 29.3054 23.898 29.3288 23.854 29.3759C23.81 29.423 23.788 29.4845 23.788 29.561C23.788 29.6434 23.8215 29.7227 23.8893 29.7988C23.9567 29.8753 24.1107 29.9839 24.3517 30.1247C24.5396 30.2364 24.6789 30.3258 24.7701 30.3932C24.8609 30.461 24.9419 30.5298 25.0125 30.6003C25.1417 30.7296 25.237 30.8675 25.2988 31.0142C25.3607 31.1612 25.3914 31.3254 25.3914 31.5073C25.3914 31.9243 25.2503 32.2547 24.9685 32.4985C24.6866 32.7423 24.3108 32.8641 23.8407 32.8641C23.5589 32.8641 23.3092 32.8229 23.092 32.7409C22.8747 32.6588 22.6778 32.5264 22.5017 32.3445C22.4665 32.3092 22.449 32.2711 22.449 32.2299C22.449 32.1887 22.4637 32.1478 22.493 32.1066L22.9334 31.5251C22.9743 31.4724 23.0155 31.4445 23.0567 31.4413C23.0976 31.4385 23.1447 31.4605 23.1978 31.5073C23.2917 31.6013 23.3871 31.6718 23.4842 31.7186C23.5813 31.7658 23.6794 31.7892 23.7793 31.7892C23.8966 31.7892 23.9832 31.7686 24.0391 31.7274C24.095 31.6865 24.1229 31.6215 24.1229 31.5335C24.1229 31.4574 24.0905 31.3837 24.0258 31.3132C23.9612 31.2426 23.8201 31.1399 23.6029 31.0048C23.4269 30.899 23.2945 30.8123 23.2065 30.7449C23.1185 30.6775 23.0392 30.6115 22.9687 30.5469C22.8395 30.4177 22.7441 30.2783 22.6823 30.1285C22.6205 29.9787 22.5898 29.81 22.5898 29.6221C22.5898 29.2111 22.7204 28.8852 22.9816 28.6442Z" fill="white"></path><path d="M28.1972 3.43656V23.8324H7.80139V3.43656H28.1972ZM28.6921 2.94133H7.30617V24.3272H28.6921V2.94133Z" fill="white"></path>', 14)]))
    }]
  ]),
  Qu = "default",
  Gu = {
    key: 0,
    class: "ods-price__prefix"
  },
  Ku = {
    key: 1,
    class: "ods-price__screen-reader-only-text"
  },
  Yu = ["aria-hidden"],
  Ju = {
    class: "ods-price__main-wrapper"
  },
  Zu = {
    key: 0,
    class: "ods-price__box-wrapper"
  },
  Xu = {
    key: 0,
    class: "ods-price__comparison"
  },
  ef = {
    key: 0,
    class: "ods-price__screen-reader-only-text"
  },
  tf = {
    class: "ods-price__box"
  },
  of = {
    class: "ods-price__box-content-wrapper"
  },
  rf = {
    key: 0,
    class: "ods-price__screen-reader-only-text"
  },
  sf = {
    key: 1,
    class: "ods-price__lidl-plus-hint"
  },
  nf = {
    class: "ods-price__box-content"
  },
  af = {
    class: "ods-price__box-content-text-el"
  },
  lf = {
    key: 0,
    class: "ods-price__lidl-plus-icon",
    "aria-hidden": "true"
  },
  cf = {
    key: 1,
    class: "ods-price__screen-reader-only-text"
  },
  df = {
    class: "ods-price__value"
  },
  pf = {
    key: 3,
    class: "ods-price__double-currency-wrapper"
  },
  uf = {
    key: 0,
    class: "ods-price__screen-reader-only-text"
  },
  ff = ["aria-hidden"],
  mf = {
    key: 2,
    class: "ods-price__double-currency-price"
  },
  bf = {
    key: 4,
    class: "ods-price__footer"
  },
  hf = zp(zo({
    __name: "OdsPrice",
    props: {
      value: {},
      prefix: {
        default: ""
      },
      pointerBox: {
        default: ""
      },
      lidlPlusHint: {
        default: ""
      },
      strokePriceStrokedOnLidlPlus: {
        type: Boolean,
        default: !1
      },
      strokePrice: {
        default: ""
      },
      strokePriceTemplate: {
        default: "{1}"
      },
      doubleCurrencyPrice: {
        default: ""
      },
      doubleCurrencyStrokePrice: {
        default: ""
      },
      doubleCurrencyStrokePriceTemplate: {
        default: "{1}"
      },
      variant: {
        default: "extra-small"
      },
      srLabelStrokePrice: {
        default: ""
      },
      srLabelPointerBox: {
        default: ""
      },
      srLabelCurrentPrice: {
        default: ""
      },
      srLabelDoubleCurrency: {
        default: ""
      },
      srLabelComparisonPrice: {
        default: ""
      },
      valueFontFamily: {
        default: Qu
      }
    },
    setup(e) {
      const t = e,
        o = _r()
        .slots,
        r = si(() => (e => {
          if (!e) return !1;
          if ("function" != typeof e) return !0;
          const t = e();
          if ("object" != typeof t || void 0 === t.length) return !0;
          if (t.length < 1) return !1;
          for (const o of t) {
            if (void 0 === o.type) return !0;
            if (o.type !== gs && (o.type !== hs || "string" == typeof o.children && o.children.trim()
                .length > 0)) return !0
          }
          return !1
        })(o.default)),
        s = si(() => !!t.prefix && t.prefix.trim()
          .length > 0),
        i = si(() => !!t.pointerBox || !!t.lidlPlusHint),
        n = si(() => ({
          "ods-price": !0,
          [`ods-price--variant-${t.variant}`]: !0,
          "ods-price--pointer-box": !!t.pointerBox || !!t.lidlPlusHint,
          "ods-price--special-offer": !!t.pointerBox && !t.strokePrice,
          "ods-price--lidl-plus": !!t.lidlPlusHint,
          [`ods-price--value-font-family-${t.valueFontFamily}`]: t.valueFontFamily !== Qu,
          "ods-price--stoke-price-stroked-on-lidl-plus": t.strokePriceStrokedOnLidlPlus
        })),
        a = si(() => t.strokePriceTemplate.split("{1}")),
        l = si(() => t.doubleCurrencyStrokePriceTemplate.split("{1}"));
      return (e, t) => (ks(), As("div", {
        class: Q(n.value)
      }, [s.value ? (ks(), As("div", Gu, Z(e.prefix), 1)) : Bs("", !0), e.strokePrice && e.srLabelStrokePrice ? (ks(), As("span", Ku, Z(e.srLabelStrokePrice) + " " + Z(a.value[0]) + " " + Z(e.strokePrice) + " " + Z(a.value[1]), 1)) : Bs("", !0), e.strokePrice ? (ks(), As("div", {
        key: 2,
        class: "ods-price__stroke-price",
        "aria-hidden": !!e.srLabelStrokePrice
      }, [Ds(Z(a.value[0]), 1), Rs("s", null, Z(e.strokePrice), 1), Ds(Z(a.value[1]), 1)], 8, Yu)) : Bs("", !0), Rs("div", Ju, [i.value ? (ks(), As("div", Zu, [e.$slots.comparison && e.lidlPlusHint ? (ks(), As("div", Xu, [e.srLabelComparisonPrice ? (ks(), As("span", ef, Z(e.srLabelComparisonPrice), 1)) : Bs("", !0), pr(e.$slots, "comparison", {}, void 0, !0)])) : Bs("", !0), Rs("div", tf, [Rs("div", of, [e.srLabelPointerBox ? (ks(), As("span", rf, Z(e.srLabelPointerBox), 1)) : Bs("", !0), e.lidlPlusHint ? (ks(), As("div", sf, Z(e.lidlPlusHint), 1)) : Bs("", !0), Rs("div", nf, [Rs("span", af, Z(e.pointerBox), 1)])]), e.lidlPlusHint ? (ks(), As("div", lf, [Is(Hu)])) : Bs("", !0)])])) : Bs("", !0), e.srLabelCurrentPrice ? (ks(), As("span", cf, Z(e.srLabelCurrentPrice) + " " + Z(e.lidlPlusHint), 1)) : Bs("", !0), Rs("div", df, Z(e.value), 1)]), e.doubleCurrencyStrokePrice || e.doubleCurrencyPrice ? (ks(), As("div", pf, [e.srLabelDoubleCurrency ? (ks(), As("span", uf, Z(e.srLabelDoubleCurrency) + " " + Z(e.srLabelStrokePrice) + " " + Z(l.value[0]) + " " + Z(e.doubleCurrencyStrokePrice) + " " + Z(l.value[1]), 1)) : Bs("", !0), e.doubleCurrencyStrokePrice ? (ks(), As("span", {
        key: 1,
        class: "ods-price__double-currency-stroke-price",
        "aria-hidden": !!e.srLabelDoubleCurrency
      }, [Ds(Z(l.value[0]), 1), Rs("s", null, Z(e.doubleCurrencyStrokePrice), 1), Ds(Z(l.value[1]), 1)], 8, ff)) : Bs("", !0), e.doubleCurrencyPrice ? (ks(), As("span", mf, Z(e.doubleCurrencyPrice), 1)) : Bs("", !0)])) : Bs("", !0), r.value ? (ks(), As("div", bf, [pr(e.$slots, "default", {}, void 0, !0)])) : Bs("", !0)], 2))
    }
  }), [
    ["__scopeId", "data-v-87bc7ea2"]
  ]),
  gf = "standard",
  _f = "multiline",
  vf = {
    Timed: "Timed",
    Feedback: "feedback"
  },
  yf = {
    class: "ods-snack-bar-item__layout"
  },
  kf = {
    class: "ods-snack-bar-item__content"
  },
  xf = {
    class: "ods-snack-bar-item__message"
  },
  Ef = {
    key: 0,
    class: "ods-snack-bar-item__footer"
  },
  wf = zp(zo({
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
        default: gf
      },
      messageType: {},
      nextFocusTargetSelector: {}
    },
    emits: ["close"],
    setup(e, {
      emit: t
    }) {
      const o = e,
        r = t,
        s = si(() => o.isError ? "exclamation-triangle" : o.isSuccess ? "hook-circle" : "placeholder"),
        i = si(() => ({
          "ods-snack-bar-item__icon": !0,
          "ods-snack-bar-item__icon--error": o.isError,
          "ods-snack-bar-item__icon--success": o.isSuccess
        })),
        n = At(),
        a = At(null),
        l = At(null),
        c = At(!1),
        d = () => {
          if (a.value) {
            a.value.ref.offsetWidth > l.value.offsetWidth / 2 && (c.value = !0)
          }
        },
        p = () => {
          let e = n.value;
          if (o.nextFocusTargetSelector) {
            const t = document.querySelector(o.nextFocusTargetSelector);
            t && (e = t)
          }
          if (e) try {
            e.focus({
              preventScroll: !0
            })
          } catch {}
        };
      Zo(() => {
        n.value = document.activeElement
      }), tr(() => {
        Yt(p)
      }), Zo(d), er(d);
      const u = () => {
          r("close"), o.closeClick()
        },
        f = () => {
          r("close"), o.buttonClick()
        },
        m = si(() => ({
          "ods-snack-bar-item": !0,
          [`ods-snack-bar-item--type-${o.type}`]: !0
        })),
        b = si(() => "multiline" === o.type || c.value);
      return (e, t) => (ks(), As("div", {
        ref_key: "notificationContainer",
        ref: l,
        class: Q(m.value),
        role: "alert"
      }, [Is(h, {
        "is-active": e.messageType === Ot(vf)
          .Feedback
      }, {
        default: ao(() => [Rs("div", yf, [Rs("div", kf, [e.isError || e.isSuccess ? (ks(), Ls(Np, {
          key: 0,
          class: Q(i.value),
          name: s.value
        }, null, 8, ["class", "name"])) : Bs("", !0), Rs("div", xf, Z(e.message), 1)]), e.buttonText && !b.value ? (ks(), Ls(Gp, {
          key: 0,
          ref_key: "feedbackButton",
          ref: a,
          class: "ods-snack-bar-item__button",
          label: e.buttonText,
          level: "tertiary",
          onClick: f
        }, null, 8, ["label"])) : Bs("", !0), Is(eu, {
          class: "ods-snack-bar-item__button-close",
          icon: "close",
          size: "small",
          variant: "negative",
          onClick: u
        })]), e.buttonText && b.value ? (ks(), As("div", Ef, [Is(Gp, {
          class: "ods-snack-bar-item__button",
          label: e.buttonText,
          level: "tertiary",
          onClick: f
        }, null, 8, ["label"])])) : Bs("", !0)]),
        _: 1
      }, 8, ["is-active"])], 2))
    }
  }), [
    ["__scopeId", "data-v-66e6c7df"]
  ]),
  Af = {
    class: "ods-snack-bar__message-spot ods-snack-bar__message-spot--top"
  },
  Lf = {
    class: "ods-snack-bar__message-spot ods-snack-bar__message-spot--center"
  },
  Pf = zp(zo({
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
        default: 1e3
      }
    },
    setup(e) {
      Bi(e => ({
        "01aae92a": e.zIndex
      }));
      const t = e,
        o = At([]),
        r = At([]),
        s = At({}),
        i = (e, t) => {
          window.clearTimeout(s.value[e]), s.value[e] = void 0, window.setTimeout(() => {
            o.value = o.value.filter(t => t.id !== e)
          }, t ? 0 : 300)
        },
        n = e => {
          r.value = r.value.filter((t, o) => o !== e)
        },
        a = e => {
          const t = e.detail,
            a = (e => {
              let t, o, r = 0;
              if (0 === e.length) return r;
              for (t = 0; t < e.length; t++) o = e.charCodeAt(t), r = (r << 5) - r + o, r |= 0;
              return r
            })(t.message + t.buttonText + t.isError + t.isSuccess);
          if (t.buttonText) 3 === r.value.length && n(0), r.value.push({
            ...t,
            id: a
          });
          else {
            if (3 === o.value.length) {
              const {
                id: e
              } = o.value[0];
              i(e, !0)
            }
            const e = s.value[a];
            e || window.clearTimeout(e);
            const r = (e => {
              const t = 60 * e.message.length * 1.5;
              return t > 1e4 ? 1e4 : t < 4e3 ? 4e3 : t
            })(t);
            o.value.push({
              ...t,
              id: a
            }), s.value[a] = window.setTimeout(() => {
              i(a, !0)
            }, r)
          }
        };
      Zo(() => {
        document.addEventListener(t.eventName, a)
      }), or(() => {
        document.removeEventListener(t.eventName, a)
      });
      const l = gr();
      return (e, t) => (ks(), Ls(Po, {
        to: "body"
      }, [Rs("div", Ns({
        class: ["ods-snack-bar", e.themeClass]
      }, Ot(l)), [Rs("div", Af, [Is(cn, {
        name: "ods-snack-bar__list",
        tag: "div",
        class: "ods-snack-bar__list"
      }, {
        default: ao(() => [(ks(!0), As(bs, null, dr(o.value, (e, t) => (ks(), Ls(wf, {
          key: t,
          message: e.message,
          "is-error": e.isError,
          "is-success": e.isSuccess,
          "button-text": e.buttonText,
          type: e.type,
          "data-messages": e.id,
          class: "ods-snack-bar__message ods-snack-bar__message--is-entering",
          "close-click": e.closeClick,
          "button-click": e.buttonClick,
          "message-type": Ot(vf)
            .Timed,
          "next-focus-target-selector": e.nextFocusTargetSelector,
          onClose: t => i(e.id, !1)
        }, null, 8, ["message", "is-error", "is-success", "button-text", "type", "data-messages", "close-click", "button-click", "message-type", "next-focus-target-selector", "onClose"]))), 128))]),
        _: 1
      })]), Rs("div", Lf, [Is(cn, {
        name: "ods-snack-bar__list",
        tag: "div",
        class: "ods-snack-bar__list ods-snack-bar__list--reverse"
      }, {
        default: ao(() => [(ks(!0), As(bs, null, dr(r.value, (e, t) => (ks(), Ls(wf, {
          key: t,
          message: e.message,
          "is-error": e.isError,
          "is-success": e.isSuccess,
          "button-text": e.buttonText,
          "data-messages": e.id,
          type: e.type,
          class: "ods-snack-bar__message ods-snack-bar__message--is-entering",
          "close-click": e.closeClick,
          "button-click": e.buttonClick,
          "message-type": Ot(vf)
            .Feedback,
          "next-focus-target-selector": e.nextFocusTargetSelector,
          onClose: e => n(t)
        }, null, 8, ["message", "is-error", "is-success", "button-text", "data-messages", "type", "close-click", "button-click", "message-type", "next-focus-target-selector", "onClose"]))), 128))]),
        _: 1
      })])], 16)]))
    }
  }), [
    ["__scopeId", "data-v-c81cb238"]
  ]),
  Tf = e => !0 === e || "true" === e || 1 === e || "1" === e,
  Of = (e, t) => {
    const o = e.__vccOpts || e;
    for (const [r, s] of t) o[r] = s;
    return o
  },
  Cf = Of(zo({
    __name: "AButtons",
    props: {
      confirmText: {
        default: "",
        type: String
      },
      cancelText: {
        default: "",
        type: String
      },
      displayColumn: {
        type: Boolean,
        default: !1
      },
      confirmAbTestingTag: {
        default: void 0,
        type: String
      },
      isOverlay: {
        type: Boolean,
        default: !1
      },
      isCheckoutLoading: {
        type: Boolean,
        default: !1
      }
    },
    emits: ["confirm", "cancel"],
    setup(e, {
      emit: t
    }) {
      const {
        t: o
      } = kp(), r = e, s = t, i = si(() => r.cancelText ? r.cancelText : o("widgets.flyout.continueShoppingButton")), n = si(() => r.confirmText ? r.confirmText : o("widgets.flyout.goToCheckoutButton")), a = si(() => ({
        "pca-a-widget-buttons": !0,
        "pca-a-widget-buttons--column": Tf(r.displayColumn),
        "pca-a-widget-buttons--overlay": Tf(r.isOverlay)
      }));
      return (t, o) => (ks(), As("div", {
        class: Q(a.value)
      }, [Is(Ot(Gp), {
        "v-ab": r.confirmAbTestingTag,
        as: "button",
        label: i.value,
        level: Ot(qp)
          .Secondary,
        onClick: o[0] || (o[0] = e => s("cancel"))
      }, null, 8, ["v-ab", "label", "level"]), Is(Ot(Gp), {
        "v-ab": r.confirmAbTestingTag,
        as: "button",
        "is-loading": e.isCheckoutLoading,
        "is-disabled": e.isCheckoutLoading,
        label: n.value,
        level: Ot(qp)
          .Primary,
        onClick: o[1] || (o[1] = e => s("confirm"))
      }, null, 8, ["v-ab", "is-loading", "is-disabled", "label", "level"])], 2))
    }
  }), [
    ["styles", ['.ods-button[data-v-5bc501b6]{--ods-button-width: auto;--ods-button-min-height: 2.75rem;all:unset;border-radius:var(--ods-button-border-radius);display:inline-flex;gap:var(--ods-gap-content-m, .5rem);outline:none;align-items:center;justify-content:center;width:var(--ods-button-width);min-height:var(--ods-button-min-height);padding:var(--ods-button-padding);text-overflow:ellipsis;-webkit-user-select:none;user-select:none;box-sizing:border-box;cursor:pointer;position:relative}.ods-button[data-v-5bc501b6]:focus-visible{position:relative}.ods-button[data-v-5bc501b6]:focus-visible:before{content:"";display:block;width:100%;height:100%;position:absolute;outline:solid .125rem var(--ods-component-browser-focus-border-color-outer, #ffffff);outline-offset:.25rem;pointer-events:none;left:0;top:0}.ods-button[data-v-5bc501b6]:focus-visible:after{content:"";display:block;width:100%;height:100%;position:absolute;outline:solid .125rem var(--ods-component-browser-focus-border-color-inner, #0050aa);outline-offset:.125rem;pointer-events:none;left:0;top:0}.ods-button--size-small[data-v-5bc501b6]:not(.ods-button--no-label){--ods-button-icon-size: 1rem;--ods-button-min-height: 2.25rem;--ods-button-padding: var(--ods-padding-content-s, .5rem) var(--ods-padding-content-m, .75rem);font-family:var(--ods-typography-font-family-primary, "LidlFontPro");font-size:var(--ods-mobile-body-small-2-font-size, .8125rem);font-weight:var(--ods-typography-font-weight-prominent, 600);line-height:var(--ods-mobile-body-small-2-line-height, 1.25rem);letter-spacing:var(--ods-mobile-body-small-2-letter-spacing, .25)}@media(min-width:90rem){.ods-button--size-small[data-v-5bc501b6]:not(.ods-button--no-label){font-size:var(--ods-desktop-body-small-2-font-size, .875rem);line-height:var(--ods-desktop-body-small-2-line-height, 1.25rem);letter-spacing:var(--ods-desktop-body-small-2-letter-spacing, .25)}}.ods-button--size-medium[data-v-5bc501b6]:not(.ods-button--no-label){--ods-button-icon-size: 1.5rem;--ods-button-min-height: 2.75rem;--ods-button-padding: var(--ods-padding-content-s, .5rem) var(--ods-padding-content-l, 1rem);font-family:var(--ods-typography-font-family-primary, "LidlFontPro");font-size:var(--ods-mobile-body-tight-font-size, 1rem);font-weight:var(--ods-typography-font-weight-prominent, 600);line-height:var(--ods-mobile-body-tight-line-height, 1.25rem);letter-spacing:var(--ods-mobile-body-tight-letter-spacing, 0)}@media(min-width:90rem){.ods-button--size-medium[data-v-5bc501b6]:not(.ods-button--no-label){font-size:var(--ods-desktop-body-tight-font-size, 1.125rem);line-height:var(--ods-desktop-body-tight-line-height, 1.5rem);letter-spacing:var(--ods-desktop-body-tight-letter-spacing, 0)}}.ods-button--size-large[data-v-5bc501b6]:not(.ods-button--no-label){--ods-button-icon-size: 1.5rem;--ods-button-min-height: 2.75rem;--ods-button-padding: var(--ods-padding-content-s, .5rem) var(--ods-padding-content-l, 1rem);font-family:var(--ods-typography-font-family-primary, "LidlFontPro");font-size:var(--ods-mobile-body-tight-font-size, 1rem);font-weight:var(--ods-typography-font-weight-prominent, 600);line-height:var(--ods-mobile-body-tight-line-height, 1.25rem);letter-spacing:var(--ods-mobile-body-tight-letter-spacing, 0)}@media(min-width:90rem){.ods-button--size-large[data-v-5bc501b6]:not(.ods-button--no-label){font-size:var(--ods-desktop-body-tight-font-size, 1.125rem);line-height:var(--ods-desktop-body-tight-line-height, 1.5rem);letter-spacing:var(--ods-desktop-body-tight-letter-spacing, 0)}}@media(min-width:90rem){.ods-button--size-large[data-v-5bc501b6]:not(.ods-button--no-label){--ods-button-icon-size: 2rem;--ods-button-min-height: 3.5rem;--ods-button-padding: var(--ods-padding-content-m, .75rem) var(--ods-padding-content-xl, 1.5rem);font-family:var(--ods-typography-font-family-primary, "LidlFontPro");font-size:var(--ods-mobile-headline-5-font-size, 1.125rem);font-weight:var(--ods-typography-font-weight-prominent, 600);line-height:var(--ods-mobile-headline-5-line-height, 1.5rem);letter-spacing:var(--ods-mobile-headline-5-letter-spacing, 0)}}@media(min-width:90rem)and (min-width:90rem){.ods-button--size-large[data-v-5bc501b6]:not(.ods-button--no-label){font-size:var(--ods-desktop-headline-5-font-size, 1.25rem);line-height:var(--ods-desktop-headline-5-line-height, 1.75rem);letter-spacing:var(--ods-desktop-headline-5-letter-spacing, 0)}}.ods-button--loading .ods-button__icon[data-v-5bc501b6],.ods-button--loading[data-v-5bc501b6] .ods-button__text{opacity:0}.ods-button[data-v-5bc501b6] .ods-button__loading{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:1.5rem;height:1.5rem}.ods-button__loading-icon[data-v-5bc501b6]{fill:var(--ods-button-font-color);animation:rotate-5bc501b6 1s linear infinite}@keyframes rotate-5bc501b6{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.ods-button[data-v-5bc501b6] .ods-button__text{display:-webkit-box;-webkit-line-clamp:var(--ods-line-clamp, 2);-webkit-box-orient:vertical;word-break:none;overflow:hidden;-webkit-hyphens:auto;hyphens:auto;text-align:center;--ods-is-single-line: 1 - Clamp(0, Calc(var(--ods-line-clamp) - 1), var(--ods-line-clamp));--ods-is-single-line-delay: Calc(-1s * (var(--ods-is-single-line, 1) - 1));animation:states-5bc501b6 1s var(--ods-is-single-line-delay) paused}@keyframes states-5bc501b6{0%{word-break:break-word}}.ods-button--hyphens-none[data-v-5bc501b6] .ods-button__text{-webkit-hyphens:none;hyphens:none}.ods-button__icon[data-v-5bc501b6]{fill:var(--ods-button-icon-color);width:var(--ods-button-icon-size);height:var(--ods-button-icon-size);flex-shrink:0}.ods-button--no-label[data-v-5bc501b6]{--ods-button-width: 2.75rem;--ods-button-min-height: 2.75rem;--ods-button-icon-size: 1.5rem;justify-content:center}.ods-button--primary[data-v-5bc501b6]{--ods-button-border-radius: var(--ods-radius-action, 62.4375rem);--ods-button-background-color: var( --ods-color-surface-interaction-primary-default, var(--ods-default-color-surface-interaction-primary-default, #0050aa) );--ods-button-background-focus-color: var( --ods-color-surface-interaction-primary-focus, var(--ods-default-color-surface-interaction-primary-focus, #002466) );--ods-button-background-hover-color: var( --ods-color-surface-interaction-primary-hover, var(--ods-default-color-surface-interaction-primary-hover, #002466) );--ods-button-background-pressed-color: var( --ods-color-surface-interaction-primary-pressed, var(--ods-default-color-surface-interaction-primary-pressed, #002466) );--ods-button-font-color: var( --ods-color-text-surface-interaction-primary-default, var(--ods-default-color-text-surface-interaction-primary-default, #ffffff) );--ods-button-font-focus-color: var( --ods-color-text-surface-interaction-primary-focus, var(--ods-default-color-text-surface-interaction-primary-focus, #ffffff) );--ods-button-font-hover-color: var( --ods-color-text-surface-interaction-primary-hover, var(--ods-default-color-text-surface-interaction-primary-hover, #ffffff) );--ods-button-font-pressed-color: var( --ods-color-text-surface-interaction-primary-pressed, var(--ods-default-color-text-surface-interaction-primary-pressed, #ffffff) );--ods-button-icon-color: var( --ods-color-icon-surface-interaction-primary-default, var(--ods-default-color-icon-surface-interaction-primary-default, #ffffff) );--ods-button-icon-focus-color: var( --ods-color-icon-surface-interaction-primary-focus, var(--ods-default-color-icon-surface-interaction-primary-focus, #ffffff) );--ods-button-icon-hover-color: var( --ods-color-icon-surface-interaction-primary-hover, var(--ods-default-color-icon-surface-interaction-primary-hover, #ffffff) );--ods-button-icon-pressed-color: var( --ods-color-icon-surface-interaction-primary-pressed, var(--ods-default-color-icon-surface-interaction-primary-pressed, #ffffff) )}.ods-button--secondary[data-v-5bc501b6]{--ods-button-border-radius: var(--ods-radius-action, 62.4375rem);--ods-button-background-color: var( --ods-color-surface-interaction-secondary-default, var(--ods-default-color-surface-interaction-secondary-default, rgb(255 255 255 / 0%)) );--ods-button-background-hover-color: var( --ods-color-surface-interaction-secondary-hover, var(--ods-default-color-surface-interaction-secondary-hover, rgb(255 255 255 / 0%)) );--ods-button-background-focus-color: var( --ods-color-surface-interaction-secondary-focus, var(--ods-default-color-surface-interaction-secondary-focus, rgb(255 255 255 / 0%)) );--ods-button-background-pressed-color: var( --ods-color-surface-interaction-secondary-pressed, var(--ods-default-color-surface-interaction-secondary-pressed, rgb(255 255 255 / 0%)) );--ods-button-font-color: var( --ods-color-text-surface-interaction-secondary-default, var(--ods-default-color-text-surface-interaction-secondary-default, #0050aa) );--ods-button-font-focus-color: var( --ods-color-text-surface-interaction-secondary-focus, var(--ods-default-color-text-surface-interaction-secondary-focus, #002466) );--ods-button-font-hover-color: var( --ods-color-text-surface-interaction-secondary-hover, var(--ods-default-color-text-surface-interaction-secondary-hover, #002466) );--ods-button-font-pressed-color: var( --ods-color-text-surface-interaction-secondary-pressed, var(--ods-default-color-text-surface-interaction-secondary-pressed, #002466) );--ods-button-border-width: var( --ods-component-button-secondary-border-width-default, var(--ods-default-component-button-secondary-border-width-default, .125rem) );--ods-button-border-width-hover: var( --ods-border-width-hover, var(--ods-default-border-width-hover, .125rem) );--ods-button-border-width-focus: var( --ods-border-width-focus, var(--ods-default-border-width-focus, .125rem) );--ods-button-border-width-pressed: var( --ods-border-width-pressed, var(--ods-default-border-width-pressed, .125rem) );--ods-button-border-color: var( --ods-color-border-interaction-secondary-default, var(--ods-default-color-border-interaction-secondary-default, #0050aa) );--ods-button-border-color-hover: var( --ods-color-border-interaction-secondary-hover, var(--ods-default-color-border-interaction-secondary-hover, #002466) );--ods-button-border-color-focus: var( --ods-color-border-interaction-secondary-focus, var(--ods-default-color-border-interaction-secondary-focus, #002466) );--ods-button-border-color-pressed: var( --ods-color-border-interaction-secondary-pressed, var(--ods-default-color-border-interaction-secondary-pressed, #002466) );--ods-button-icon-color: var( --ods-color-icon-surface-interaction-secondary-default, var(--ods-default-color-icon-surface-interaction-secondary-default, #0050aa) );--ods-button-icon-focus-color: var( --ods-color-icon-surface-interaction-secondary-focus, var(--ods-default-color-icon-surface-interaction-secondary-focus, #002466) );--ods-button-icon-hover-color: var( --ods-color-icon-surface-interaction-secondary-hover, var(--ods-default-color-icon-surface-interaction-secondary-hover, #002466) );--ods-button-icon-pressed-color: var( --ods-color-icon-surface-interaction-secondary-pressed, var(--ods-default-color-icon-surface-interaction-secondary-pressed, #002466) )}.ods-button--tertiary[data-v-5bc501b6]{--ods-button-font-color: var( --ods-color-text-surface-interaction-tertiary-default, var(--ods-default-color-text-surface-interaction-tertiary-default, #0050aa) );--ods-button-font-hover-color: var( --ods-default-color-text-surface-interaction-tertiary-hover, var(--ods-color-text-surface-interaction-tertiary-hover, #002466) );--ods-button-font-active-color: var( --ods-default-color-text-surface-interaction-tertiary-pressed, var(--ods-color-text-surface-interaction-tertiary-pressed, #002466) );--ods-button-font-focus-color: var( --ods-default-color-text-surface-interaction-tertiary-focus, var(--ods-color-text-surface-interaction-tertiary-focus, #002466) );--ods-button-font-pressed-color: var( --ods-default-color-text-surface-interaction-tertiary-pressed, var(--ods-color-text-surface-interaction-tertiary-pressed, #002466) );--ods-button-background-color: var( --ods-default-color-surface-interaction-tertiary-default, var(--ods-color-surface-interaction-tertiary-default, rgba(255, 255, 255, 0)) );--ods-button-background-focus-color: var( --ods-default-color-surface-interaction-tertiary-focus, var(--ods-color-surface-interaction-tertiary-focus, rgba(255, 255, 255, 0)) );--ods-button-background-hover-color: var( --ods-default-color-surface-interaction-tertiary-hover, var(--ods-color-surface-interaction-tertiary-hover, rgba(255, 255, 255, 0)) );--ods-button-background-pressed-color: var( --ods-color-surface-interaction-tertiary-pressed, var(--ods-color-surface-interaction-tertiary-pressed, rgba(255, 255, 255, 0)) );--ods-button-icon-color: var( --ods-color-icon-surface-interaction-tertiary-default, var(--ods-default-color-icon-surface-interaction-tertiary-default, #0050aa) );--ods-button-icon-focus-color: var( --ods-color-icon-surface-interaction-tertiary-focus, var(--ods-default-color-icon-surface-interaction-tertiary-focus, #002466) );--ods-button-icon-hover-color: var( --ods-color-icon-surface-interaction-tertiary-hover, var(--ods-default-color-icon-surface-interaction-tertiary-hover, #002466) );--ods-button-icon-pressed-color: var( --ods-color-icon-surface-interaction-tertiary-pressed, var(--ods-default-color-icon-surface-interaction-tertiary-pressed, #002466) )}.ods-button--disabled[data-v-5bc501b6]{opacity:var(--ods-opacity-disabled, .3);cursor:default}.ods-button--primary[data-v-5bc501b6],.ods-button--secondary[data-v-5bc501b6],.ods-button--tertiary[data-v-5bc501b6]{background-color:var(--ods-button-background-color);color:var(--ods-button-font-color)}.ods-button--primary[data-v-5bc501b6]:hover:not(.ods-button--disabled),.ods-button--secondary[data-v-5bc501b6]:hover:not(.ods-button--disabled),.ods-button--tertiary[data-v-5bc501b6]:hover:not(.ods-button--disabled){color:var(--ods-button-font-hover-color);background-color:var(--ods-button-background-hover-color);border-width:var(--ods-button-border-width-hover);border-color:var(--ods-button-border-color-hover)}.ods-button--primary:hover:not(.ods-button--disabled) .ods-button__icon[data-v-5bc501b6],.ods-button--secondary:hover:not(.ods-button--disabled) .ods-button__icon[data-v-5bc501b6],.ods-button--tertiary:hover:not(.ods-button--disabled) .ods-button__icon[data-v-5bc501b6]{fill:var(--ods-button-icon-hover-color)}.ods-button--primary[data-v-5bc501b6]:focus-visible:not(.ods-button--disabled),.ods-button--secondary[data-v-5bc501b6]:focus-visible:not(.ods-button--disabled),.ods-button--tertiary[data-v-5bc501b6]:focus-visible:not(.ods-button--disabled){color:var(--ods-button-font-focus-color);background-color:var(--ods-button-background-focus-color);border-width:var(--ods-button-border-width-focus);border-color:var(--ods-button-border-color-focus)}.ods-button--primary:focus-visible:not(.ods-button--disabled) .ods-button__icon[data-v-5bc501b6],.ods-button--secondary:focus-visible:not(.ods-button--disabled) .ods-button__icon[data-v-5bc501b6],.ods-button--tertiary:focus-visible:not(.ods-button--disabled) .ods-button__icon[data-v-5bc501b6]{fill:var(--ods-button-icon-focus-color)}.ods-button--primary[data-v-5bc501b6]:active:not(.ods-button--disabled),.ods-button--secondary[data-v-5bc501b6]:active:not(.ods-button--disabled),.ods-button--tertiary[data-v-5bc501b6]:active:not(.ods-button--disabled){color:var(--ods-button-font-pressed-color);background-color:var(--ods-button-background-pressed-color);border-width:var(--ods-button-border-width-pressed);border-color:var(--ods-button-border-color-pressed)}.ods-button--primary:active:not(.ods-button--disabled) .ods-button__icon[data-v-5bc501b6],.ods-button--secondary:active:not(.ods-button--disabled) .ods-button__icon[data-v-5bc501b6],.ods-button--tertiary:active:not(.ods-button--disabled) .ods-button__icon[data-v-5bc501b6]{fill:var(--ods-button-icon-pressed-color)}.ods-button--primary[data-v-5bc501b6]{border:none}.ods-button--secondary[data-v-5bc501b6]{border:var(--ods-button-border-width) solid var(--ods-button-border-color)}.ods-button--secondary[data-v-5bc501b6]:focus-visible{position:relative}.ods-button--secondary[data-v-5bc501b6]:focus-visible:before{content:"";display:block;width:100%;height:100%;position:absolute;outline:solid .125rem var(--ods-component-browser-focus-border-color-outer, #ffffff);outline-offset:6px;pointer-events:none;left:0;top:0}.ods-button--secondary[data-v-5bc501b6]:focus-visible:after{content:"";display:block;width:100%;height:100%;position:absolute;outline:solid .125rem var(--ods-component-browser-focus-border-color-inner, #0050aa);outline-offset:4px;pointer-events:none;left:0;top:0}.ods-button[data-v-5bc501b6]:is(.ods-button--tertiary){--ods-button-min-height: auto;--ods-button-padding: unset;--ods-button-border-radius: none;flex-direction:row-reverse;border:none}.ods-button:is(.ods-button--tertiary).ods-button--size-small[data-v-5bc501b6]{--ods-button-min-height: 1.25rem}.ods-button:is(.ods-button--tertiary).ods-button--size-medium[data-v-5bc501b6]{--ods-button-min-height: 1.5rem}.ods-button:is(.ods-button--tertiary).ods-button--size-large[data-v-5bc501b6]{--ods-button-min-height: 1.75rem}.ods-button:is(.ods-button--tertiary).ods-button--size-small .ods-button__icon[data-v-5bc501b6]{--ods-button-icon-size: 1rem}.ods-button:is(.ods-button--tertiary).ods-button--size-medium .ods-button__icon[data-v-5bc501b6]{--ods-button-icon-size: 1rem}.ods-button:is(.ods-button--tertiary).ods-button--size-large .ods-button__icon[data-v-5bc501b6]{--ods-button-icon-size: 1.5rem}.ods-button.ods-button--theme-primary.ods-button--primary[data-v-5bc501b6]{--ods-default-color-surface-interaction-primary-default: #fff000;--ods-default-color-surface-interaction-primary-focus: #ffc400;--ods-default-color-surface-interaction-primary-hover: #ffc400;--ods-default-color-surface-interaction-primary-pressed: #ffc400;--ods-default-color-text-surface-interaction-primary-default: #1e2124;--ods-default-color-text-surface-interaction-primary-focus: #1e2124;--ods-default-color-text-surface-interaction-primary-hover: #1e2124;--ods-default-color-text-surface-interaction-primary-pressed: #1e2124;--ods-default-color-icon-surface-interaction-primary-default: #1e2124;--ods-default-color-icon-surface-interaction-primary-focus: #1e2124;--ods-default-color-icon-surface-interaction-primary-hover: #1e2124;--ods-default-color-icon-surface-interaction-primary-pressed: #1e2124}.ods-button.ods-button--theme-negative.ods-button--primary[data-v-5bc501b6]{--ods-default-color-surface-interaction-primary-default: #ffffff;--ods-default-color-surface-interaction-primary-focus: #c2dfff;--ods-default-color-surface-interaction-primary-hover: #c2dfff;--ods-default-color-surface-interaction-primary-pressed: #c2dfff;--ods-default-color-text-surface-interaction-primary-default: #1e2124;--ods-default-color-text-surface-interaction-primary-focus: #1e2124;--ods-default-color-text-surface-interaction-primary-hover: #1e2124;--ods-default-color-text-surface-interaction-primary-pressed: #1e2124;--ods-default-color-icon-surface-interaction-primary-default: #1e2124;--ods-default-color-icon-surface-interaction-primary-focus: #1e2124;--ods-default-color-icon-surface-interaction-primary-hover: #1e2124;--ods-default-color-icon-surface-interaction-primary-pressed: #1e2124}.ods-button.ods-button--theme-primary.ods-button--secondary[data-v-5bc501b6]{--ods-default-color-surface-interaction-secondary-default: rgb(255 255 255 / 0%);--ods-default-color-surface-interaction-secondary-hover: rgb(255 255 255 / 0%);--ods-default-color-surface-interaction-secondary-focus: rgb(255 255 255 / 0%);--ods-default-color-surface-interaction-secondary-pressed: rgb(255 255 255 / 0%);--ods-default-color-text-surface-interaction-secondary-default: #fff000;--ods-default-color-text-surface-interaction-secondary-focus: #ffc400;--ods-default-color-text-surface-interaction-secondary-hover: #ffc400;--ods-default-color-text-surface-interaction-secondary-pressed: #ffc400;--ods-default-component-button-secondary-border-width-default: .125rem;--ods-default-border-width-hover: .125rem;--ods-default-border-width-focus: .125rem;--ods-default-border-width-pressed: .125rem;--ods-default-color-border-interaction-secondary-default: #fff000;--ods-default-color-border-interaction-secondary-hover: #ffc400;--ods-default-color-border-interaction-secondary-focus: #ffc400;--ods-default-color-border-interaction-secondary-pressed: #ffc400;--ods-default-color-icon-surface-interaction-secondary-default: #fff000;--ods-default-color-icon-surface-interaction-secondary-focus: #ffc400;--ods-default-color-icon-surface-interaction-secondary-hover: #ffc400;--ods-default-color-icon-surface-interaction-secondary-pressed: #ffc400}.ods-button.ods-button--theme-negative.ods-button--secondary[data-v-5bc501b6]{--ods-default-color-surface-interaction-secondary-default: rgb(255 255 255 / 0%);--ods-default-color-surface-interaction-secondary-hover: rgb(255 255 255 / 0%);--ods-default-color-surface-interaction-secondary-focus: rgb(255 255 255 / 0%);--ods-default-color-surface-interaction-secondary-pressed: rgb(255 255 255 / 0%);--ods-default-color-text-surface-interaction-secondary-default: #ffffff;--ods-default-color-text-surface-interaction-secondary-focus: #ffffff;--ods-default-color-text-surface-interaction-secondary-hover: #ffffff;--ods-default-color-text-surface-interaction-secondary-pressed: #ffffff;--ods-default-component-button-secondary-border-width-default: .125rem;--ods-default-border-width-hover: .125rem;--ods-default-border-width-focus: .125rem;--ods-default-border-width-pressed: .125rem;--ods-default-color-border-interaction-secondary-default: #ffffff;--ods-default-color-border-interaction-secondary-hover: #c2dfff;--ods-default-color-border-interaction-secondary-focus: #c2dfff;--ods-default-color-border-interaction-secondary-pressed: #c2dfff;--ods-default-color-icon-surface-interaction-secondary-default: #ffffff;--ods-default-color-icon-surface-interaction-secondary-focus: #ffffff;--ods-default-color-icon-surface-interaction-secondary-hover: #ffffff;--ods-default-color-icon-surface-interaction-secondary-pressed: #ffffff}.ods-button.ods-button--theme-primary.ods-button--tertiary[data-v-5bc501b6]{--ods-default-color-text-surface-interaction-tertiary-default: #fff000;--ods-default-color-text-surface-interaction-tertiary-hover: #ffc400;--ods-default-color-text-surface-interaction-tertiary-focus: #ffc400;--ods-default-color-text-surface-interaction-tertiary-pressed: #ffc400;--ods-default-color-surface-interaction-tertiary-default: rgb(255 255 255 / 0%);--ods-default-color-surface-interaction-tertiary-hover: rgb(255 255 255 / 0%);--ods-default-color-surface-interaction-tertiary-focus: rgb(255 255 255 / 0%);--ods-default-color-surface-interaction-tertiary-pressed: rgb(255 255 255 / 0%);--ods-default-color-icon-surface-interaction-tertiary-default: #fff000;--ods-default-color-icon-surface-interaction-tertiary-focus: #ffc400;--ods-default-color-icon-surface-interaction-tertiary-hover: #ffc400;--ods-default-color-icon-surface-interaction-tertiary-pressed: #ffc400}.ods-button.ods-button--theme-negative.ods-button--tertiary[data-v-5bc501b6]{--ods-default-color-text-surface-interaction-tertiary-default: #ffffff;--ods-default-color-text-surface-interaction-tertiary-hover: #c2dfff;--ods-default-color-text-surface-interaction-tertiary-focus: #c2dfff;--ods-default-color-text-surface-interaction-tertiary-pressed: #c2dfff;--ods-default-color-surface-interaction-tertiary-default: rgb(255 255 255 / 0%);--ods-default-color-surface-interaction-tertiary-focus: rgb(255 255 255 / 0%);--ods-default-color-surface-interaction-tertiary-pressed: rgb(255 255 255 / 0%);--ods-default-color-icon-surface-interaction-tertiary-default: #ffffff;--ods-default-color-icon-surface-interaction-tertiary-focus: #c2dfff;--ods-default-color-icon-surface-interaction-tertiary-hover: #c2dfff;--ods-default-color-icon-surface-interaction-tertiary-pressed: #c2dfff}.ods-icon[data-v-2591fada]{display:inline-block}.ods-icon[data-v-2591fada] svg{width:100%;height:100%;fill:inherit;display:block}.ods-icon[data-v-2591fada] svg path{fill:inherit}.pca-a-widget-buttons{display:flex;flex-flow:row nowrap;justify-content:flex-end;align-items:center;text-align:center;gap:1rem}.pca-a-widget-buttons--column{flex-direction:column-reverse;flex-wrap:nowrap;justify-content:normal;align-items:stretch}.pca-a-widget-buttons--column .pca-a-widget-buttons__button{width:100%}.pca-a-widget-buttons--overlay{width:100%;gap:.5rem}@media(min-width:568px)and (max-width:767px),(min-width:1024px){.pca-a-widget-buttons--overlay{flex-direction:row;gap:1rem}.pca-a-widget-buttons--overlay .ods-button{width:50%}}.pca-a-widget-buttons .ods-button__loading-icon{line-height:0;padding:0;margin:0}']]
  ]),
  Rf = e => {
    const t = If(),
      o = e.toFixed(2)
      .toString()
      .split("."),
      r = o[0] ?? "0",
      s = "00" === o[1] ? t.doubleZeroDecimals : o[1] || "0";
    s.padEnd(2, "0");
    return {
      price: e,
      predecimal: r,
      decimal: s,
      separator: t.currencySeparator,
      symbol: t.currencySymbol,
      toString: o => {
        if ("percentage" === o) return `-${e}%`;
        let i = r + ("" !== s ? t.currencySeparator + s : "");
        return i += t.isCurrencySymbolShown ? ` ${t.currencySymbol}` : "", i
      }
    }
  },
  If = () => {
    const {
      configs: e
    } = Ha(), {
      isFeatureEnabled: t
    } = Ka();
    return {
      doubleZeroDecimals: String(e.value?.doubleZeroDecimals),
      currencySeparator: String(e.value?.currencySeparator),
      currencySymbol: String(e.value?.currencySymbol),
      isCurrencySymbolShown: t("isCurrencySymbolShown")
    }
  },
  Sf = {
    class: "pca-cart-flyout__cart-item-image-wrapper"
  },
  Df = ["src", "alt"],
  jf = {
    class: "pca-cart-flyout__cart-item-information"
  },
  Bf = {
    class: "pca-cart-flyout__cart-item-name"
  },
  zf = {
    class: "pca-cart-flyout__cart-item-quantity"
  },
  Ff = {
    class: "pca-cart-flyout__cart-item-price-wrapper"
  },
  Vf = {
    key: 0,
    class: "pca-cart-flyout__cart-item-price"
  },
  Nf = {
    key: 0,
    class: "pca-cart-flyout__cart-item-information pca-cart-flyout__cart-item-information--no-break"
  },
  Mf = {
    class: "pca-cart-flyout__cart-item-price-wrapper"
  },
  Uf = {
    class: "pca-cart-flyout__cart-item-price"
  },
  qf = Of(zo({
    __name: "ACartItem",
    props: {
      showDiscount: {
        type: Boolean,
        default: !1
      },
      showPercentage: {
        type: Boolean,
        default: !1
      },
      percentage: {
        default: void 0,
        type: null
      },
      name: {
        default: "",
        type: String
      },
      quantity: {
        default: 0,
        type: Number
      },
      price: {
        default: 0,
        type: Number
      },
      thumbnail: {
        default: "",
        type: String
      },
      priceDisplayBox: {
        type: Boolean,
        default: !1
      },
      showDivider: {
        type: Boolean,
        default: !0
      }
    },
    setup(e) {
      const {
        t: t
      } = kp(), o = e, r = si(() => Rf(o.price)
        .toString()
        .trim());
      return (o, s) => (ks(), As("div", {
        class: Q(["pca-cart-flyout__cart-item", {
          "pca-cart-flyout__cart-item--no-divider": !e.showDivider
        }])
      }, [Rs("div", Sf, [Rs("img", {
        class: "pca-cart-flyout__cart-item-image",
        src: e.thumbnail,
        alt: e.name
      }, null, 8, Df)]), Rs("div", jf, [Rs("p", Bf, Z(e.name), 1), Rs("div", zf, Z(Ot(t)("widgets.flyout.productCount")) + ": " + Z(e.quantity), 1), Rs("div", Ff, [Ot(Tf)(e.priceDisplayBox) ? Bs("", !0) : (ks(), As("div", Vf, Z(r.value), 1))])]), Ot(Tf)(e.priceDisplayBox) ? (ks(), As("div", Nf, [Rs("span", Mf, [Rs("span", Uf, [Is(Ot(hf), {
        value: r.value,
        variant: "medium"
      }, null, 8, ["value"])])])])) : Bs("", !0)], 2))
    }
  }), [
    ["styles", ['.ods-price[data-v-87bc7ea2]{--ods-price-main-color: var(--ods-price-color, var(--ods-color-text-surface-price, #e60a14));--ods-price-main-font-color: var( --ods-price-font-color, var(--ods-color-text-bg-primary, #1e2124) );--ods-price-main-box-color: var( --ods-price-box-color, var(--ods-component-price-pointer-box-surface-color-primary, #e60a14) );--ods-price-main-box-font-color: var( --ods-price-box-font-color, var(--ods-component-price-pointer-box-text-color-primary, #ffffff) );--ods-price-icon-overlap: .1875rem;--ods-price-pointer-box-text-align: inherit;--ods-price-lidl-plus-icon-size: 2.25rem;--ods-price-pointer-top-space: .035em;--ods-price-remove-line-height-space: -.12em;--ods-price-pointer-box-remove-line-height-space: -.13em;display:inline-grid;grid-template-areas:"prefix empty-top" "prefix stroke-price" "prefix price" "empty double-currency" "empty footer";grid-template-columns:min-content auto;grid-template-rows:auto min-content min-content auto auto;color:var(--ods-price-main-font-color)}@supports (-moz-appearance: none){.ods-price[data-v-87bc7ea2]{--ods-price-pointer-top-space: 0em}}.ods-price__prefix[data-v-87bc7ea2]{white-space:nowrap;grid-area:prefix;writing-mode:vertical-rl;transform:rotate(180deg);margin-right:var(--ods-padding-content-xs, .25rem);margin-bottom:.2rem;align-self:end;justify-self:end}.ods-price__stroke-price[data-v-87bc7ea2]{grid-area:stroke-price;margin-bottom:var(--ods-padding-content-xs, .25rem)}.ods-price__main-wrapper[data-v-87bc7ea2]{grid-area:price;display:flex;flex-direction:column;align-items:flex-start}.ods-price__main-wrapper+div[data-v-87bc7ea2]{margin-top:var(--ods-padding-content-xs, .25rem)}.ods-price__main-wrapper+.ods-price__footer[data-v-87bc7ea2]:empty{margin-top:0;display:none}.ods-price__box-wrapper[data-v-87bc7ea2]{display:flex;flex-direction:column;align-items:stretch;min-width:var(--ods-price-box-min-width)}.ods-price__comparison[data-v-87bc7ea2]{background-color:var(--ods-component-price-pv-box-surface-color-primary, #ad080f);padding:var(--ods-padding-content-xs, .25rem)}.ods-price__comparison .ods-price[data-v-87bc7ea2]{--ods-price-color: var(--ods-component-price-pv-box-text-color-primary, #ffffff);--ods-price-font-color: var(--ods-component-price-pv-box-text-color-primary, #ffffff);--ods-price-box-color: var( --ods-component-price-pv-pointer-box-surface-color-primary, #ffffff );--ods-price-box-font-color: var( --ods-component-price-pv-pointer-box-text-color-primary, #ad080f )}.ods-price__box[data-v-87bc7ea2]{background-color:var(--ods-price-main-box-color);color:var(--ods-price-main-box-font-color);text-align:var(--ods-price-pointer-box-text-align);display:flex;align-items:flex-end}.ods-price__box-content-wrapper[data-v-87bc7ea2]{flex-grow:1;display:flex;flex-direction:column;gap:var(--ods-gap-content-s, .25rem);padding:var(--ods-padding-content-xs, .25rem)}.ods-price__lidl-plus-hint[data-v-87bc7ea2]{display:-webkit-box;-webkit-line-clamp:var(--ods-line-clamp, 1);-webkit-box-orient:vertical;word-break:none;overflow:hidden;-webkit-hyphens:auto;hyphens:auto;text-align:left;--ods-is-single-line: 1 - Clamp(0, Calc(var(--ods-line-clamp) - 1), var(--ods-line-clamp));--ods-is-single-line-delay: Calc(-1s * (var(--ods-is-single-line, 1) - 1));animation:states-87bc7ea2 1s var(--ods-is-single-line-delay) paused}.ods-price__lidl-plus-hint[data-v-87bc7ea2]{margin-top:var(--ods-price-pointer-box-remove-line-height-space);margin-bottom:var(--ods-price-pointer-box-remove-line-height-space)}.ods-price__box-content[data-v-87bc7ea2]{display:-webkit-box;-webkit-line-clamp:var(--ods-line-clamp, 3);-webkit-box-orient:vertical;word-break:none;overflow:hidden;-webkit-hyphens:auto;hyphens:auto;text-align:left;--ods-is-single-line: 1 - Clamp(0, Calc(var(--ods-line-clamp) - 1), var(--ods-line-clamp));--ods-is-single-line-delay: Calc(-1s * (var(--ods-is-single-line, 1) - 1));animation:states-87bc7ea2 1s var(--ods-is-single-line-delay) paused}@keyframes states-87bc7ea2{0%{word-break:break-word}}.ods-price__box-content[data-v-87bc7ea2]{text-transform:uppercase;margin-top:var(--ods-price-pointer-box-remove-line-height-space);margin-bottom:var(--ods-price-pointer-box-remove-line-height-space);margin:-.125rem 0 -.1875rem}.ods-price__box-content-text-el[data-v-87bc7ea2]{line-height:1.1}.ods-price__lidl-plus-icon[data-v-87bc7ea2]{height:var(--ods-price-lidl-plus-icon-size);width:var(--ods-price-lidl-plus-icon-size);align-self:flex-end;flex-shrink:0;margin-top:calc(var(--ods-price-icon-overlap) * -1);margin-right:calc(var(--ods-price-icon-overlap) * -1);margin-bottom:calc(var(--ods-price-icon-overlap) * -1)}.ods-price__lidl-plus-icon svg[data-v-87bc7ea2]{height:100%;width:100%;display:block}.ods-price__value[data-v-87bc7ea2]{color:var(--ods-price-main-color);margin-top:var(--ods-price-remove-line-height-space)}.ods-price__double-currency-wrapper[data-v-87bc7ea2]{grid-area:double-currency;display:flex;justify-content:flex-start;gap:var(--gap-content-s, .25rem)}.ods-price__stroke-price s[data-v-87bc7ea2],.ods-price__double-currency-stroke-price s[data-v-87bc7ea2]{text-decoration:line-through}.ods-price__footer[data-v-87bc7ea2]{grid-area:footer}.ods-price--pointer-box>.ods-price__main-wrapper .ods-price__value[data-v-87bc7ea2]{margin-top:var(--ods-price-pointer-top-space)}.ods-price--variant-extra-small[data-v-87bc7ea2]{--ods-price-box-min-width: 1.5rem}@media(min-width:90rem){.ods-price--variant-extra-small[data-v-87bc7ea2]{--ods-price-box-min-width: 1.75rem}}.ods-price--variant-extra-small .ods-price__prefix[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-2xs-prefix-font-family, "LidlFontCondPro");font-size:var(--ods-mobile-price-2xs-prefix-font-size, .75rem);font-weight:var(--ods-mobile-price-2xs-prefix-prominent, 700);line-height:var(--ods-mobile-price-2xs-prefix-line-height, .75rem);letter-spacing:var(--ods-mobile-price-2xs-prefix-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-extra-small .ods-price__prefix[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-2xs-prefix-font-family, "LidlFontCondPro");font-size:var(--ods-desktop-price-2xs-prefix-font-size, .75rem);font-weight:var(--ods-desktop-price-2xs-prefix-prominent, 700);line-height:var(--ods-desktop-price-2xs-prefix-line-height, .75rem);letter-spacing:var(--ods-desktop-price-2xs-prefix-letter-spacing, 0)}}.ods-price--variant-extra-small .ods-price__stroke-price[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-2xs-tag-font-family, "LidlFontPro");font-size:var(--ods-mobile-price-2xs-tag-font-size, .75rem);font-weight:var(--ods-mobile-price-2xs-tag-base, 500);line-height:var(--ods-mobile-price-2xs-tag-line-height, .75rem);letter-spacing:var(--ods-mobile-price-2xs-tag-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-extra-small .ods-price__stroke-price[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-2xs-tag-font-family, "LidlFontPro");font-size:var(--ods-desktop-price-2xs-tag-font-size, .75rem);font-weight:var(--ods-desktop-price-2xs-tag-base, 500);line-height:var(--ods-desktop-price-2xs-tag-line-height, .75rem);letter-spacing:var(--ods-desktop-price-2xs-tag-letter-spacing, 0)}}.ods-price--variant-extra-small .ods-price__stroke-price s[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-2xs-stroke-font-family, "LidlFontPro");font-size:var(--ods-mobile-price-2xs-stroke-font-size, .75rem);font-weight:var(--ods-mobile-price-2xs-stroke-base, 500);line-height:var(--ods-mobile-price-2xs-stroke-line-height, .75rem);letter-spacing:var(--ods-mobile-price-2xs-stroke-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-extra-small .ods-price__stroke-price s[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-2xs-stroke-font-family, "LidlFontPro");font-size:var(--ods-desktop-price-2xs-stroke-font-size, .75rem);font-weight:var(--ods-desktop-price-2xs-stroke-base, 500);line-height:var(--ods-desktop-price-2xs-stroke-line-height, .75rem);letter-spacing:var(--ods-desktop-price-2xs-stroke-letter-spacing, 0)}}.ods-price--variant-extra-small .ods-price__comparison .ods-price .ods-price__box-content[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-2xs-pv-pointer-box-font-family, "LidlFontPro");font-size:var(--ods-mobile-price-2xs-pv-pointer-box-font-size, .75rem);font-weight:var(--ods-mobile-price-2xs-pv-pointer-box-prominent, 700);line-height:var(--ods-mobile-price-2xs-pv-pointer-box-line-height, .75rem);letter-spacing:var(--ods-mobile-price-2xs-pv-pointer-box-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-extra-small .ods-price__comparison .ods-price .ods-price__box-content[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-2xs-pv-pointer-box-font-family, "LidlFontPro");font-size:var(--ods-desktop-price-2xs-pv-pointer-box-font-size, .75rem);font-weight:var(--ods-desktop-price-2xs-pv-pointer-box-prominent, 700);line-height:var(--ods-desktop-price-2xs-pv-pointer-box-line-height, .75rem);letter-spacing:var(--ods-desktop-price-2xs-pv-pointer-box-letter-spacing, 0)}}.ods-price--variant-extra-small .ods-price__comparison .ods-price .ods-price__value[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-2xs-pv-price-font-family, "LidlFontPricePublicBeta");font-size:var(--ods-mobile-price-2xs-pv-price-font-size, 1.5625rem);font-weight:var(--ods-mobile-price-2xs-pv-price-large-pointer, 710);line-height:var(--ods-mobile-price-2xs-pv-price-line-height, 1.5625rem);letter-spacing:var(--ods-mobile-price-2xs-pv-price-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-extra-small .ods-price__comparison .ods-price .ods-price__value[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-2xs-pv-price-font-family, "LidlFontPricePublicBeta");font-size:var(--ods-desktop-price-2xs-pv-price-font-size, 1.5625rem);font-weight:var(--ods-desktop-price-2xs-pv-price-large-pointer, 710);line-height:var(--ods-desktop-price-2xs-pv-price-line-height, 1.5625rem);letter-spacing:var(--ods-desktop-price-2xs-pv-price-letter-spacing, 0)}}.ods-price--variant-extra-small .ods-price__lidl-plus-hint[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-2xs-pointer-box-lp-font-family, "LidlFontPro");font-size:var(--ods-mobile-price-2xs-pointer-box-lp-font-size, .6875rem);font-weight:var(--ods-mobile-price-2xs-pointer-box-lp-prominent, 700);line-height:var(--ods-mobile-price-2xs-pointer-box-lp-line-height, .6875rem);letter-spacing:var(--ods-mobile-price-2xs-pointer-box-lp-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-extra-small .ods-price__lidl-plus-hint[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-2xs-pointer-box-lp-font-family, "LidlFontPro");font-size:var(--ods-desktop-price-2xs-pointer-box-lp-font-size, .6875rem);font-weight:var(--ods-desktop-price-2xs-pointer-box-lp-prominent, 700);line-height:var(--ods-desktop-price-2xs-pointer-box-lp-line-height, .6875rem);letter-spacing:var(--ods-desktop-price-2xs-pointer-box-lp-letter-spacing, 0)}}.ods-price--variant-extra-small .ods-price__box-content[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-2xs-pointer-box-font-family, "LidlFontPro");font-size:var(--ods-mobile-price-2xs-pointer-box-font-size, .75rem);font-weight:var(--ods-mobile-price-2xs-pointer-box-prominent, 700);line-height:var(--ods-mobile-price-2xs-pointer-box-line-height, .75rem);letter-spacing:var(--ods-mobile-price-2xs-pointer-box-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-extra-small .ods-price__box-content[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-2xs-pointer-box-font-family, "LidlFontPro");font-size:var(--ods-desktop-price-2xs-pointer-box-font-size, .875rem);font-weight:var(--ods-desktop-price-2xs-pointer-box-prominent, 700);line-height:var(--ods-desktop-price-2xs-pointer-box-line-height, .875rem);letter-spacing:var(--ods-desktop-price-2xs-pointer-box-letter-spacing, 0)}}.ods-price--variant-extra-small .ods-price__value[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-2xs-font-family, "LidlFontPricePublicBeta");font-size:var(--ods-mobile-price-2xs-font-size, 1.5625rem);font-weight:var(--ods-mobile-price-2xs-without-pointer, 700);line-height:var(--ods-mobile-price-2xs-line-height, 1.5625rem);letter-spacing:var(--ods-mobile-price-2xs-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-extra-small .ods-price__value[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-2xs-font-family, "LidlFontPricePublicBeta");font-size:var(--ods-desktop-price-2xs-font-size, 2.0625rem);font-weight:var(--ods-desktop-price-2xs-without-pointer, 700);line-height:var(--ods-desktop-price-2xs-line-height, 2.0625rem);letter-spacing:var(--ods-desktop-price-2xs-letter-spacing, 0)}}.ods-price--variant-extra-small.ods-price--pointer-box .ods-price__value[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-2xs-font-family, "LidlFontPricePublicBeta");font-size:var(--ods-mobile-price-2xs-font-size, 1.5625rem);font-weight:var(--ods-mobile-price-2xs-large-pointer, 710);line-height:var(--ods-mobile-price-2xs-line-height, 1.5625rem);letter-spacing:var(--ods-mobile-price-2xs-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-extra-small.ods-price--pointer-box .ods-price__value[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-2xs-font-family, "LidlFontPricePublicBeta");font-size:var(--ods-desktop-price-2xs-font-size, 2.0625rem);font-weight:var(--ods-desktop-price-2xs-large-pointer, 710);line-height:var(--ods-desktop-price-2xs-line-height, 2.0625rem);letter-spacing:var(--ods-desktop-price-2xs-letter-spacing, 0)}}.ods-price--variant-extra-small .ods-price__double-currency-wrapper[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-2xs-double-currency-font-family, "LidlFontPro");font-size:var(--ods-mobile-price-2xs-double-currency-font-size, .75rem);font-weight:var(--ods-mobile-price-2xs-double-currency-base, 500);line-height:var(--ods-mobile-price-2xs-double-currency-line-height, .75rem);letter-spacing:var(--ods-mobile-price-2xs-double-currency-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-extra-small .ods-price__double-currency-wrapper[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-2xs-double-currency-font-family, "LidlFontPro");font-size:var(--ods-desktop-price-2xs-double-currency-font-size, .75rem);font-weight:var(--ods-desktop-price-2xs-double-currency-base, 500);line-height:var(--ods-desktop-price-2xs-double-currency-line-height, .75rem);letter-spacing:var(--ods-desktop-price-2xs-double-currency-letter-spacing, 0)}}.ods-price--variant-extra-small .ods-price__footer[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-2xs-footer-font-family, "LidlFontPro");font-size:var(--ods-mobile-price-2xs-footer-font-size, .75rem);font-weight:var(--ods-mobile-price-2xs-footer-base, 500);line-height:var(--ods-mobile-price-2xs-footer-line-height, 1rem);letter-spacing:var(--ods-mobile-price-2xs-footer-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-extra-small .ods-price__footer[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-2xs-footer-font-family, "LidlFontPro");font-size:var(--ods-desktop-price-2xs-footer-font-size, .75rem);font-weight:var(--ods-desktop-price-2xs-footer-base, 500);line-height:var(--ods-desktop-price-2xs-footer-line-height, 1rem);letter-spacing:var(--ods-desktop-price-2xs-footer-letter-spacing, 0)}}.ods-price--variant-medium[data-v-87bc7ea2]{--ods-price-box-min-width: 1.75rem}@media(min-width:90rem){.ods-price--variant-medium[data-v-87bc7ea2]{--ods-price-box-min-width: 2.25rem}}.ods-price--variant-medium .ods-price__prefix[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-m-prefix-font-family, "LidlFontCondPro");font-size:var(--ods-mobile-price-m-prefix-font-size, .75rem);font-weight:var(--ods-mobile-price-m-prefix-prominent, 700);line-height:var(--ods-mobile-price-m-prefix-line-height, .75rem);letter-spacing:var(--ods-mobile-price-m-prefix-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-medium .ods-price__prefix[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-m-prefix-font-family, "LidlFontCondPro");font-size:var(--ods-desktop-price-m-prefix-font-size, .75rem);font-weight:var(--ods-desktop-price-m-prefix-prominent, 700);line-height:var(--ods-desktop-price-m-prefix-line-height, .75rem);letter-spacing:var(--ods-desktop-price-m-prefix-letter-spacing, 0)}}.ods-price--variant-medium .ods-price__stroke-price[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-m-tag-font-family, "LidlFontPro");font-size:var(--ods-mobile-price-m-tag-font-size, .75rem);font-weight:var(--ods-mobile-price-m-tag-base, 500);line-height:var(--ods-mobile-price-m-tag-line-height, .75rem);letter-spacing:var(--ods-mobile-price-m-tag-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-medium .ods-price__stroke-price[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-m-tag-font-family, "LidlFontPro");font-size:var(--ods-desktop-price-m-tag-font-size, .875rem);font-weight:var(--ods-desktop-price-m-tag-base, 500);line-height:var(--ods-desktop-price-m-tag-line-height, .875rem);letter-spacing:var(--ods-desktop-price-m-tag-letter-spacing, 0)}}.ods-price--variant-medium .ods-price__stroke-price s[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-m-stroke-font-family, "LidlFontPro");font-size:var(--ods-mobile-price-m-stroke-font-size, .75rem);font-weight:var(--ods-mobile-price-m-stroke-base, 500);line-height:var(--ods-mobile-price-m-stroke-line-height, .75rem);letter-spacing:var(--ods-mobile-price-m-stroke-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-medium .ods-price__stroke-price s[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-m-stroke-font-family, "LidlFontPro");font-size:var(--ods-desktop-price-m-stroke-font-size, .875rem);font-weight:var(--ods-desktop-price-m-stroke-base, 500);line-height:var(--ods-desktop-price-m-stroke-line-height, .875rem);letter-spacing:var(--ods-desktop-price-m-stroke-letter-spacing, 0)}}.ods-price--variant-medium .ods-price__comparison .ods-price .ods-price__box-content[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-m-pv-pointer-box-font-family, "LidlFontPro");font-size:var(--ods-mobile-price-m-pv-pointer-box-font-size, .75rem);font-weight:var(--ods-mobile-price-m-pv-pointer-box-prominent, 700);line-height:var(--ods-mobile-price-m-pv-pointer-box-line-height, .75rem);letter-spacing:var(--ods-mobile-price-m-pv-pointer-box-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-medium .ods-price__comparison .ods-price .ods-price__box-content[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-m-pv-pointer-box-font-family, "LidlFontPro");font-size:var(--ods-desktop-price-m-pv-pointer-box-font-size, .75rem);font-weight:var(--ods-desktop-price-m-pv-pointer-box-prominent, 700);line-height:var(--ods-desktop-price-m-pv-pointer-box-line-height, .75rem);letter-spacing:var(--ods-desktop-price-m-pv-pointer-box-letter-spacing, 0)}}.ods-price--variant-medium .ods-price__comparison .ods-price .ods-price__value[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-m-pv-price-font-family, "LidlFontPricePublicBeta");font-size:var(--ods-mobile-price-m-pv-price-font-size, 1.5625rem);font-weight:var(--ods-mobile-price-m-pv-price-large-pointer, 710);line-height:var(--ods-mobile-price-m-pv-price-line-height, 1.5625rem);letter-spacing:var(--ods-mobile-price-m-pv-price-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-medium .ods-price__comparison .ods-price .ods-price__value[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-m-pv-price-font-family, "LidlFontPricePublicBeta");font-size:var(--ods-desktop-price-m-pv-price-font-size, 1.5625rem);font-weight:var(--ods-desktop-price-m-pv-price-large-pointer, 710);line-height:var(--ods-desktop-price-m-pv-price-line-height, 1.5625rem);letter-spacing:var(--ods-desktop-price-m-pv-price-letter-spacing, 0)}}.ods-price--variant-medium .ods-price__lidl-plus-hint[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-m-pointer-box-lp-font-family, "LidlFontPro");font-size:var(--ods-mobile-price-m-pointer-box-lp-font-size, .6875rem);font-weight:var(--ods-mobile-price-m-pointer-box-lp-prominent, 700);line-height:var(--ods-mobile-price-m-pointer-box-lp-line-height, .6875rem);letter-spacing:var(--ods-mobile-price-m-pointer-box-lp-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-medium .ods-price__lidl-plus-hint[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-m-pointer-box-lp-font-family, "LidlFontPro");font-size:var(--ods-desktop-price-m-pointer-box-lp-font-size, .6875rem);font-weight:var(--ods-desktop-price-m-pointer-box-lp-prominent, 700);line-height:var(--ods-desktop-price-m-pointer-box-lp-line-height, .6875rem);letter-spacing:var(--ods-desktop-price-m-pointer-box-lp-letter-spacing, 0)}}.ods-price--variant-medium .ods-price__box-content[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-m-pointer-box-font-family, "LidlFontPro");font-size:var(--ods-mobile-price-m-pointer-box-font-size, .875rem);font-weight:var(--ods-mobile-price-m-pointer-box-prominent, 700);line-height:var(--ods-mobile-price-m-pointer-box-line-height, .875rem);letter-spacing:var(--ods-mobile-price-m-pointer-box-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-medium .ods-price__box-content[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-m-pointer-box-font-family, "LidlFontPro");font-size:var(--ods-desktop-price-m-pointer-box-font-size, .875rem);font-weight:var(--ods-desktop-price-m-pointer-box-prominent, 700);line-height:var(--ods-desktop-price-m-pointer-box-line-height, .875rem);letter-spacing:var(--ods-desktop-price-m-pointer-box-letter-spacing, 0)}}.ods-price--variant-medium .ods-price__value[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-m-font-family, "LidlFontPricePublicBeta");font-size:var(--ods-mobile-price-m-font-size, 2rem);font-weight:var(--ods-mobile-price-m-without-pointer, 700);line-height:var(--ods-mobile-price-m-line-height, 2rem);letter-spacing:var(--ods-mobile-price-m-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-medium .ods-price__value[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-m-font-family, "LidlFontPricePublicBeta");font-size:var(--ods-desktop-price-m-font-size, 2.625rem);font-weight:var(--ods-desktop-price-m-without-pointer, 700);line-height:var(--ods-desktop-price-m-line-height, 2.625rem);letter-spacing:var(--ods-desktop-price-m-letter-spacing, 0)}}.ods-price--variant-medium.ods-price--pointer-box .ods-price__value[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-m-font-family, "LidlFontPricePublicBeta");font-size:var(--ods-mobile-price-m-font-size, 2rem);font-weight:var(--ods-mobile-price-m-large-pointer, 710);line-height:var(--ods-mobile-price-m-line-height, 2rem);letter-spacing:var(--ods-mobile-price-m-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-medium.ods-price--pointer-box .ods-price__value[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-m-font-family, "LidlFontPricePublicBeta");font-size:var(--ods-desktop-price-m-font-size, 2.625rem);font-weight:var(--ods-desktop-price-m-large-pointer, 710);line-height:var(--ods-desktop-price-m-line-height, 2.625rem);letter-spacing:var(--ods-desktop-price-m-letter-spacing, 0)}}.ods-price--variant-medium .ods-price__double-currency-wrapper[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-m-double-currency-font-family, "LidlFontPro");font-size:var(--ods-mobile-price-m-double-currency-font-size, .75rem);font-weight:var(--ods-mobile-price-m-double-currency-base, 500);line-height:var(--ods-mobile-price-m-double-currency-line-height, .75rem);letter-spacing:var(--ods-mobile-price-m-double-currency-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-medium .ods-price__double-currency-wrapper[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-m-double-currency-font-family, "LidlFontPro");font-size:var(--ods-desktop-price-m-double-currency-font-size, .75rem);font-weight:var(--ods-desktop-price-m-double-currency-base, 500);line-height:var(--ods-desktop-price-m-double-currency-line-height, .75rem);letter-spacing:var(--ods-desktop-price-m-double-currency-letter-spacing, 0)}}.ods-price--variant-medium .ods-price__footer[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-m-footer-font-family, "LidlFontPro");font-size:var(--ods-mobile-price-m-footer-font-size, .75rem);font-weight:var(--ods-mobile-price-m-footer-base, 500);line-height:var(--ods-mobile-price-m-footer-line-height, 1rem);letter-spacing:var(--ods-mobile-price-m-footer-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-medium .ods-price__footer[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-m-footer-font-family, "LidlFontPro");font-size:var(--ods-desktop-price-m-footer-font-size, .75rem);font-weight:var(--ods-desktop-price-m-footer-base, 500);line-height:var(--ods-desktop-price-m-footer-line-height, 1rem);letter-spacing:var(--ods-desktop-price-m-footer-letter-spacing, 0)}}.ods-price--variant-large[data-v-87bc7ea2]{--ods-price-box-min-width: 2rem}@media(min-width:90rem){.ods-price--variant-large[data-v-87bc7ea2]{--ods-price-box-min-width: 2.5rem}}.ods-price--variant-large .ods-price__prefix[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-l-prefix-font-family, "LidlFontCondPro");font-size:var(--ods-mobile-price-l-prefix-font-size, .75rem);font-weight:var(--ods-mobile-price-l-prefix-prominent, 700);line-height:var(--ods-mobile-price-l-prefix-line-height, .75rem);letter-spacing:var(--ods-mobile-price-l-prefix-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-large .ods-price__prefix[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-l-prefix-font-family, "LidlFontCondPro");font-size:var(--ods-desktop-price-l-prefix-font-size, .75rem);font-weight:var(--ods-desktop-price-l-prefix-prominent, 700);line-height:var(--ods-desktop-price-l-prefix-line-height, .75rem);letter-spacing:var(--ods-desktop-price-l-prefix-letter-spacing, 0)}}.ods-price--variant-large .ods-price__stroke-price[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-l-tag-font-family, "LidlFontPro");font-size:var(--ods-mobile-price-l-tag-font-size, .75rem);font-weight:var(--ods-mobile-price-l-tag-base, 500);line-height:var(--ods-mobile-price-l-tag-line-height, .75rem);letter-spacing:var(--ods-mobile-price-l-tag-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-large .ods-price__stroke-price[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-l-tag-font-family, "LidlFontPro");font-size:var(--ods-desktop-price-l-tag-font-size, .875rem);font-weight:var(--ods-desktop-price-l-tag-base, 500);line-height:var(--ods-desktop-price-l-tag-line-height, .875rem);letter-spacing:var(--ods-desktop-price-l-tag-letter-spacing, 0)}}.ods-price--variant-large .ods-price__stroke-price s[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-l-stroke-font-family, "LidlFontPro");font-size:var(--ods-mobile-price-l-stroke-font-size, .75rem);font-weight:var(--ods-mobile-price-l-stroke-base, 500);line-height:var(--ods-mobile-price-l-stroke-line-height, .75rem);letter-spacing:var(--ods-mobile-price-l-stroke-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-large .ods-price__stroke-price s[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-l-stroke-font-family, "LidlFontPro");font-size:var(--ods-desktop-price-l-stroke-font-size, .875rem);font-weight:var(--ods-desktop-price-l-stroke-base, 500);line-height:var(--ods-desktop-price-l-stroke-line-height, .875rem);letter-spacing:var(--ods-desktop-price-l-stroke-letter-spacing, 0)}}.ods-price--variant-large .ods-price__comparison .ods-price .ods-price__box-content[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-l-pv-pointer-box-font-family, "LidlFontPro");font-size:var(--ods-mobile-price-l-pv-pointer-box-font-size, .75rem);font-weight:var(--ods-mobile-price-l-pv-pointer-box-prominent, 700);line-height:var(--ods-mobile-price-l-pv-pointer-box-line-height, .75rem);letter-spacing:var(--ods-mobile-price-l-pv-pointer-box-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-large .ods-price__comparison .ods-price .ods-price__box-content[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-l-pv-pointer-box-font-family, "LidlFontPro");font-size:var(--ods-desktop-price-l-pv-pointer-box-font-size, .75rem);font-weight:var(--ods-desktop-price-l-pv-pointer-box-prominent, 700);line-height:var(--ods-desktop-price-l-pv-pointer-box-line-height, .75rem);letter-spacing:var(--ods-desktop-price-l-pv-pointer-box-letter-spacing, 0)}}.ods-price--variant-large .ods-price__comparison .ods-price .ods-price__value[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-l-pv-price-font-family, "LidlFontPricePublicBeta");font-size:var(--ods-mobile-price-l-pv-price-font-size, 1.5625rem);font-weight:var(--ods-mobile-price-l-pv-price-large-pointer, 710);line-height:var(--ods-mobile-price-l-pv-price-line-height, 1.5625rem);letter-spacing:var(--ods-mobile-price-l-pv-price-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-large .ods-price__comparison .ods-price .ods-price__value[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-l-pv-price-font-family, "LidlFontPricePublicBeta");font-size:var(--ods-desktop-price-l-pv-price-font-size, 1.5625rem);font-weight:var(--ods-desktop-price-l-pv-price-large-pointer, 710);line-height:var(--ods-desktop-price-l-pv-price-line-height, 1.5625rem);letter-spacing:var(--ods-desktop-price-l-pv-price-letter-spacing, 0)}}.ods-price--variant-large .ods-price__lidl-plus-hint[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-l-pointer-box-lp-font-family, "LidlFontPro");font-size:var(--ods-mobile-price-l-pointer-box-lp-font-size, .6875rem);font-weight:var(--ods-mobile-price-l-pointer-box-lp-prominent, 700);line-height:var(--ods-mobile-price-l-pointer-box-lp-line-height, .6875rem);letter-spacing:var(--ods-mobile-price-l-pointer-box-lp-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-large .ods-price__lidl-plus-hint[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-l-pointer-box-lp-font-family, "LidlFontPro");font-size:var(--ods-desktop-price-l-pointer-box-lp-font-size, .6875rem);font-weight:var(--ods-desktop-price-l-pointer-box-lp-prominent, 700);line-height:var(--ods-desktop-price-l-pointer-box-lp-line-height, .6875rem);letter-spacing:var(--ods-desktop-price-l-pointer-box-lp-letter-spacing, 0)}}.ods-price--variant-large .ods-price__box-content[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-l-pointer-box-font-family, "LidlFontPro");font-size:var(--ods-mobile-price-l-pointer-box-font-size, .875rem);font-weight:var(--ods-mobile-price-l-pointer-box-prominent, 700);line-height:var(--ods-mobile-price-l-pointer-box-line-height, .875rem);letter-spacing:var(--ods-mobile-price-l-pointer-box-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-large .ods-price__box-content[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-l-pointer-box-font-family, "LidlFontPro");font-size:var(--ods-desktop-price-l-pointer-box-font-size, .875rem);font-weight:var(--ods-desktop-price-l-pointer-box-prominent, 700);line-height:var(--ods-desktop-price-l-pointer-box-line-height, .875rem);letter-spacing:var(--ods-desktop-price-l-pointer-box-letter-spacing, 0)}}.ods-price--variant-large .ods-price__value[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-l-font-family, "LidlFontPricePublicBeta");font-size:var(--ods-mobile-price-l-font-size, 2.25rem);font-weight:var(--ods-mobile-price-l-without-pointer, 700);line-height:var(--ods-mobile-price-l-line-height, 2.25rem);letter-spacing:var(--ods-mobile-price-l-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-large .ods-price__value[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-l-font-family, "LidlFontPricePublicBeta");font-size:var(--ods-desktop-price-l-font-size, 3rem);font-weight:var(--ods-desktop-price-l-without-pointer, 700);line-height:var(--ods-desktop-price-l-line-height, 3rem);letter-spacing:var(--ods-desktop-price-l-letter-spacing, 0)}}.ods-price--variant-large.ods-price--pointer-box .ods-price__value[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-l-font-family, "LidlFontPricePublicBeta");font-size:var(--ods-mobile-price-l-font-size, 2.25rem);font-weight:var(--ods-mobile-price-l-large-pointer, 710);line-height:var(--ods-mobile-price-l-line-height, 2.25rem);letter-spacing:var(--ods-mobile-price-l-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-large.ods-price--pointer-box .ods-price__value[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-l-font-family, "LidlFontPricePublicBeta");font-size:var(--ods-desktop-price-l-font-size, 3rem);font-weight:var(--ods-desktop-price-l-large-pointer, 710);line-height:var(--ods-desktop-price-l-line-height, 3rem);letter-spacing:var(--ods-desktop-price-l-letter-spacing, 0)}}.ods-price--variant-large .ods-price__double-currency-wrapper[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-l-double-currency-font-family, "LidlFontPro");font-size:var(--ods-mobile-price-l-double-currency-font-size, .75rem);font-weight:var(--ods-mobile-price-l-double-currency-base, 500);line-height:var(--ods-mobile-price-l-double-currency-line-height, .75rem);letter-spacing:var(--ods-mobile-price-l-double-currency-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-large .ods-price__double-currency-wrapper[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-l-double-currency-font-family, "LidlFontPro");font-size:var(--ods-desktop-price-l-double-currency-font-size, .75rem);font-weight:var(--ods-desktop-price-l-double-currency-base, 500);line-height:var(--ods-desktop-price-l-double-currency-line-height, .75rem);letter-spacing:var(--ods-desktop-price-l-double-currency-letter-spacing, 0)}}.ods-price--variant-large .ods-price__footer[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-l-footer-font-family, "LidlFontPro");font-size:var(--ods-mobile-price-l-footer-font-size, .75rem);font-weight:var(--ods-mobile-price-l-footer-base, 500);line-height:var(--ods-mobile-price-l-footer-line-height, 1rem);letter-spacing:var(--ods-mobile-price-l-footer-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-large .ods-price__footer[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-l-footer-font-family, "LidlFontPro");font-size:var(--ods-desktop-price-l-footer-font-size, .75rem);font-weight:var(--ods-desktop-price-l-footer-base, 500);line-height:var(--ods-desktop-price-l-footer-line-height, 1rem);letter-spacing:var(--ods-desktop-price-l-footer-letter-spacing, 0)}}.ods-price--variant-extra-large[data-v-87bc7ea2]{--ods-price-box-min-width: 2.5rem}@media(min-width:90rem){.ods-price--variant-extra-large[data-v-87bc7ea2]{--ods-price-box-min-width: 3rem}}.ods-price--variant-extra-large .ods-price__prefix[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-2xl-prefix-font-family, "LidlFontCondPro");font-size:var(--ods-mobile-price-2xl-prefix-font-size, .75rem);font-weight:var(--ods-mobile-price-2xl-prefix-prominent, 700);line-height:var(--ods-mobile-price-2xl-prefix-line-height, .75rem);letter-spacing:var(--ods-mobile-price-2xl-prefix-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-extra-large .ods-price__prefix[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-2xl-prefix-font-family, "LidlFontCondPro");font-size:var(--ods-desktop-price-2xl-prefix-font-size, .75rem);font-weight:var(--ods-desktop-price-2xl-prefix-prominent, 700);line-height:var(--ods-desktop-price-2xl-prefix-line-height, .75rem);letter-spacing:var(--ods-desktop-price-2xl-prefix-letter-spacing, 0)}}.ods-price--variant-extra-large .ods-price__stroke-price[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-2xl-tag-font-family, "LidlFontPro");font-size:var(--ods-mobile-price-2xl-tag-font-size, .875rem);font-weight:var(--ods-mobile-price-2xl-tag-base, 500);line-height:var(--ods-mobile-price-2xl-tag-line-height, .875rem);letter-spacing:var(--ods-mobile-price-2xl-tag-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-extra-large .ods-price__stroke-price[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-2xl-tag-font-family, "LidlFontPro");font-size:var(--ods-desktop-price-2xl-tag-font-size, 1rem);font-weight:var(--ods-desktop-price-2xl-tag-base, 500);line-height:var(--ods-desktop-price-2xl-tag-line-height, 1rem);letter-spacing:var(--ods-desktop-price-2xl-tag-letter-spacing, 0)}}.ods-price--variant-extra-large .ods-price__stroke-price s[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-2xl-stroke-font-family, "LidlFontPro");font-size:var(--ods-mobile-price-2xl-stroke-font-size, .875rem);font-weight:var(--ods-mobile-price-2xl-stroke-base, 500);line-height:var(--ods-mobile-price-2xl-stroke-line-height, .875rem);letter-spacing:var(--ods-mobile-price-2xl-stroke-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-extra-large .ods-price__stroke-price s[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-2xl-stroke-font-family, "LidlFontPro");font-size:var(--ods-desktop-price-2xl-stroke-font-size, 1rem);font-weight:var(--ods-desktop-price-2xl-stroke-base, 500);line-height:var(--ods-desktop-price-2xl-stroke-line-height, 1rem);letter-spacing:var(--ods-desktop-price-2xl-stroke-letter-spacing, 0)}}.ods-price--variant-extra-large .ods-price__comparison .ods-price .ods-price__box-content[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-2xl-pv-pointer-box-font-family, "LidlFontPro");font-size:var(--ods-mobile-price-2xl-pv-pointer-box-font-size, .75rem);font-weight:var(--ods-mobile-price-2xl-pv-pointer-box-prominent, 700);line-height:var(--ods-mobile-price-2xl-pv-pointer-box-line-height, .75rem);letter-spacing:var(--ods-mobile-price-2xl-pv-pointer-box-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-extra-large .ods-price__comparison .ods-price .ods-price__box-content[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-2xl-pv-pointer-box-font-family, "LidlFontPro");font-size:var(--ods-desktop-price-2xl-pv-pointer-box-font-size, .75rem);font-weight:var(--ods-desktop-price-2xl-pv-pointer-box-prominent, 700);line-height:var(--ods-desktop-price-2xl-pv-pointer-box-line-height, .75rem);letter-spacing:var(--ods-desktop-price-2xl-pv-pointer-box-letter-spacing, 0)}}.ods-price--variant-extra-large .ods-price__comparison .ods-price .ods-price__value[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-2xl-pv-price-font-family, "LidlFontPricePublicBeta");font-size:var(--ods-mobile-price-2xl-pv-price-font-size, 1.5625rem);font-weight:var(--ods-mobile-price-2xl-pv-price-large-pointer, 710);line-height:var(--ods-mobile-price-2xl-pv-price-line-height, 1.5625rem);letter-spacing:var(--ods-mobile-price-2xl-pv-price-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-extra-large .ods-price__comparison .ods-price .ods-price__value[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-2xl-pv-price-font-family, "LidlFontPricePublicBeta");font-size:var(--ods-desktop-price-2xl-pv-price-font-size, 1.5625rem);font-weight:var(--ods-desktop-price-2xl-pv-price-large-pointer, 710);line-height:var(--ods-desktop-price-2xl-pv-price-line-height, 1.5625rem);letter-spacing:var(--ods-desktop-price-2xl-pv-price-letter-spacing, 0)}}.ods-price--variant-extra-large .ods-price__lidl-plus-hint[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-2xl-pointer-box-lp-font-family, "LidlFontPro");font-size:var(--ods-mobile-price-2xl-pointer-box-lp-font-size, .6875rem);font-weight:var(--ods-mobile-price-2xl-pointer-box-lp-prominent, 700);line-height:var(--ods-mobile-price-2xl-pointer-box-lp-line-height, .6875rem);letter-spacing:var(--ods-mobile-price-2xl-pointer-box-lp-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-extra-large .ods-price__lidl-plus-hint[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-2xl-pointer-box-lp-font-family, "LidlFontPro");font-size:var(--ods-desktop-price-2xl-pointer-box-lp-font-size, .6875rem);font-weight:var(--ods-desktop-price-2xl-pointer-box-lp-prominent, 700);line-height:var(--ods-desktop-price-2xl-pointer-box-lp-line-height, .6875rem);letter-spacing:var(--ods-desktop-price-2xl-pointer-box-lp-letter-spacing, 0)}}.ods-price--variant-extra-large .ods-price__box-content[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-2xl-pointer-box-font-family, "LidlFontPro");font-size:var(--ods-mobile-price-2xl-pointer-box-font-size, .875rem);font-weight:var(--ods-mobile-price-2xl-pointer-box-prominent, 700);line-height:var(--ods-mobile-price-2xl-pointer-box-line-height, .875rem);letter-spacing:var(--ods-mobile-price-2xl-pointer-box-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-extra-large .ods-price__box-content[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-2xl-pointer-box-font-family, "LidlFontPro");font-size:var(--ods-desktop-price-2xl-pointer-box-font-size, 1rem);font-weight:var(--ods-desktop-price-2xl-pointer-box-prominent, 700);line-height:var(--ods-desktop-price-2xl-pointer-box-line-height, 1rem);letter-spacing:var(--ods-desktop-price-2xl-pointer-box-letter-spacing, 0)}}.ods-price--variant-extra-large .ods-price__value[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-2xl-font-family, "LidlFontPricePublicBeta");font-size:var(--ods-mobile-price-2xl-font-size, 2.875rem);font-weight:var(--ods-mobile-price-2xl-without-pointer, 700);line-height:var(--ods-mobile-price-2xl-line-height, 2.875rem);letter-spacing:var(--ods-mobile-price-2xl-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-extra-large .ods-price__value[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-2xl-font-family, "LidlFontPricePublicBeta");font-size:var(--ods-desktop-price-2xl-font-size, 3.75rem);font-weight:var(--ods-desktop-price-2xl-without-pointer, 700);line-height:var(--ods-desktop-price-2xl-line-height, 3.75rem);letter-spacing:var(--ods-desktop-price-2xl-letter-spacing, 0)}}.ods-price--variant-extra-large.ods-price--pointer-box .ods-price__value[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-2xl-font-family, "LidlFontPricePublicBeta");font-size:var(--ods-mobile-price-2xl-font-size, 2.875rem);font-weight:var(--ods-mobile-price-2xl-large-pointer, 710);line-height:var(--ods-mobile-price-2xl-line-height, 2.875rem);letter-spacing:var(--ods-mobile-price-2xl-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-extra-large.ods-price--pointer-box .ods-price__value[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-2xl-font-family, "LidlFontPricePublicBeta");font-size:var(--ods-desktop-price-2xl-font-size, 3.75rem);font-weight:var(--ods-desktop-price-2xl-large-pointer, 710);line-height:var(--ods-desktop-price-2xl-line-height, 3.75rem);letter-spacing:var(--ods-desktop-price-2xl-letter-spacing, 0)}}.ods-price--variant-extra-large .ods-price__double-currency-wrapper[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-2xl-double-currency-font-family, "LidlFontPro");font-size:var(--ods-mobile-price-2xl-double-currency-font-size, .75rem);font-weight:var(--ods-mobile-price-2xl-double-currency-base, 500);line-height:var(--ods-mobile-price-2xl-double-currency-line-height, .75rem);letter-spacing:var(--ods-mobile-price-2xl-double-currency-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-extra-large .ods-price__double-currency-wrapper[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-2xl-double-currency-font-family, "LidlFontPro");font-size:var(--ods-desktop-price-2xl-double-currency-font-size, .75rem);font-weight:var(--ods-desktop-price-2xl-double-currency-base, 500);line-height:var(--ods-desktop-price-2xl-double-currency-line-height, .75rem);letter-spacing:var(--ods-desktop-price-2xl-double-currency-letter-spacing, 0)}}.ods-price--variant-extra-large .ods-price__footer[data-v-87bc7ea2]{font-family:var(--ods-mobile-price-2xl-footer-font-family, "LidlFontPro");font-size:var(--ods-mobile-price-2xl-footer-font-size, .75rem);font-weight:var(--ods-mobile-price-2xl-footer-base, 500);line-height:var(--ods-mobile-price-2xl-footer-line-height, 1rem);letter-spacing:var(--ods-mobile-price-2xl-footer-letter-spacing, 0)}@media(min-width:90rem){.ods-price--variant-extra-large .ods-price__footer[data-v-87bc7ea2]{font-family:var(--ods-desktop-price-2xl-footer-font-family, "LidlFontPro");font-size:var(--ods-desktop-price-2xl-footer-font-size, .75rem);font-weight:var(--ods-desktop-price-2xl-footer-base, 500);line-height:var(--ods-desktop-price-2xl-footer-line-height, 1rem);letter-spacing:var(--ods-desktop-price-2xl-footer-letter-spacing, 0)}}[lang=bg-BG] .ods-price[data-v-87bc7ea2]:not(.ods-price--value-font-family-global),.ods-price--value-font-family-bg-BG[data-v-87bc7ea2]{--ods-mobile-price-2xs-font-family: LidlFontPricePublicBetaBG;--ods-desktop-price-2xs-font-family: LidlFontPricePublicBetaBG;--ods-mobile-price-2xs-pv-price-font-family: LidlFontPricePublicBetaBG;--ods-desktop-price-2xs-pv-price-font-family: LidlFontPricePublicBetaBG;--ods-mobile-price-m-font-family: LidlFontPricePublicBetaBG;--ods-desktop-price-m-font-family: LidlFontPricePublicBetaBG;--ods-mobile-price-m-pv-price-font-family: LidlFontPricePublicBetaBG;--ods-desktop-price-m-pv-price-font-family: LidlFontPricePublicBetaBG;--ods-mobile-price-l-font-family: LidlFontPricePublicBetaBG;--ods-desktop-price-l-font-family: LidlFontPricePublicBetaBG;--ods-mobile-price-l-pv-price-font-family: LidlFontPricePublicBetaBG;--ods-desktop-price-l-pv-price-font-family: LidlFontPricePublicBetaBG;--ods-mobile-price-2xl-font-family: LidlFontPricePublicBetaBG;--ods-desktop-price-2xl-font-family: LidlFontPricePublicBetaBG;--ods-mobile-price-2xl-pv-price-font-family: LidlFontPricePublicBetaBG;--ods-desktop-price-2xl-pv-price-font-family: LidlFontPricePublicBetaBG}.ods-price--special-offer[data-v-87bc7ea2]{--ods-price-pointer-box-text-align: center}.ods-price--lidl-plus>.ods-price__main-wrapper>.ods-price__box-wrapper[data-v-87bc7ea2]{margin-right:var(--ods-price-icon-overlap)}.ods-price--lidl-plus .ods-price__stroke-price s[data-v-87bc7ea2]{text-decoration:none}.ods-price--lidl-plus:has(.ods-price__comparison .ods-price) .ods-price__stroke-price s[data-v-87bc7ea2]{text-decoration:line-through}.ods-price--lidl-plus.ods-price--stoke-price-stroked-on-lidl-plus .ods-price__stroke-price s[data-v-87bc7ea2]{text-decoration:line-through}.ods-price__screen-reader-only-text[data-v-87bc7ea2]{left:-100vw;position:absolute;top:auto;width:1px;height:1px;overflow:hidden;z-index:-999}.pca-cart-flyout__cart-item{display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:flex-start;align-content:flex-start;border-bottom:solid 2px #e3e4e5;margin:0 0 1rem;padding:0 0 1rem;gap:.5rem;width:100%}.pca-cart-flyout__cart-item--no-divider{border-bottom:none;margin:0 0 .75rem;padding:0}.pca-cart-flyout__cart-item-borderless{display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:flex-start;align-content:flex-start;margin:0 0 1rem;padding:0 0 1rem}.pca-cart-flyout__cart-item-borderless:last-child{margin-bottom:0}.pca-cart-flyout__cart-item-image-wrapper{max-height:4.1875rem;margin:0 1rem 0 0}@media(max-width:600px){.pca-cart-flyout__cart-item-image-wrapper{margin:0}}.pca-cart-flyout__cart-item-image{max-width:5.75rem;height:auto}.pca-cart-flyout__cart-item-information{flex-grow:1;overflow:hidden}.pca-cart-flyout__cart-item-information--no-break{flex-shrink:0}.pca-cart-flyout__cart-item-name{font-size:1rem;font-weight:700;line-height:1.2;margin:0 0 .5rem}@media(min-width:1280px){.pca-cart-flyout__cart-item-name{font-size:1.125rem}}.pca-cart-flyout__cart-item-quantity{font-family:LidlFontCondPro,Trebuchet MS,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:1rem;line-height:1.4;color:#353b42;text-decoration:none;font-weight:400;margin:0 0 .5rem}@media(min-width:1280px){.pca-cart-flyout__cart-item-quantity{font-size:1.125rem}}.pca-cart-flyout__cart-item-price-wrapper{display:flex;flex-flow:row nowrap;justify-content:flex-end;margin-left:.5rem}.pca-cart-flyout__cart-item-price{margin-right:5px;display:inline-block}.pca-square-box{border:solid 2px #c6c9cc;padding:6px}']]
  ]),
  Wf = {
    Info: "info",
    Warning: "warning",
    Error: "error",
    Success: "success"
  },
  $f = e => {
    switch (e.toUpperCase()) {
      case "INFO":
      default:
        return Wf.Info;
      case "WARNING":
        return Wf.Warning;
      case "ERROR":
        return Wf.Error;
      case "SUCCESS":
        return Wf.Success
    }
  },
  Hf = {
    class: "pca-a-message__meaning"
  },
  Qf = {
    class: "pca-a-message__icon"
  },
  Gf = ["name"],
  Kf = {
    class: "pca-a-message__body"
  },
  Yf = {
    key: 0,
    class: "pca-a-message__headline"
  },
  Jf = Of(zo({
    __name: "AMessage",
    props: {
      level: {
        default: Wf.Info,
        type: null
      },
      headline: {
        default: "",
        type: String
      },
      text: {
        default: "",
        type: String
      }
    },
    emits: ["close"],
    setup(e, {
      emit: t
    }) {
      const o = e,
        r = t,
        s = si(() => ({
          "pca-a-message": !0,
          [`pca-a-message--${o.level}`]: !0
        })),
        i = si(() => {
          switch (o.level) {
            case Wf.Error:
              return "exclamation-triangle";
            case Wf.Warning:
              return "exclamation-circle";
            case Wf.Success:
              return "hook-circle";
            default:
              return "information-circle"
          }
        });
      return (t, o) => (ks(), As("div", {
        class: Q(s.value),
        role: "alert"
      }, [Rs("div", Hf, [Rs("span", Qf, [Rs("pca-v-icon", {
        name: i.value,
        width: "100%",
        height: "100%"
      }, null, 8, Gf)])]), Rs("div", Kf, [e.headline ? (ks(), As("h3", Yf, Z(e.headline), 1)) : Bs("", !0), lo(Rs("span", null, null, 512), [
        [Ot(Ua), e.text]
      ])]), Rs("button", {
        class: "pca-a-message__close",
        onClick: o[0] || (o[0] = e => r("close")),
        type: "button"
      }, [...o[1] || (o[1] = [Rs("span", {
        class: "pca-a-message__close-icon"
      }, [Rs("pca-v-icon", {
        name: "cross",
        width: "100%",
        height: "100%"
      })], -1)])])], 2))
    }
  }), [
    ["styles", [".pca-a-message{border-radius:.125rem;box-shadow:0 2px 4px #00000026;background:#f5f8fc;color:#003673;border:.0625rem solid #003673;display:flex;padding:1rem}.pca-a-message--error{background:#fef5f6;color:#e60a14;border-color:#e60a14}.pca-a-message--success{background:#f7faf8;color:#348553;border-color:#348553}.pca-a-message--warning{background:#fcf8f6;color:#be591d;border-color:#be591d}.pca-a-message--neutral{background:#fafafa;color:#4e5761;border-color:#4e5761}.pca-a-message__meaning{margin:0 1rem 0 0;min-width:1.5rem;min-height:1.5rem;width:1.5rem;height:1.5rem}.pca-a-message__headline{font-size:1.25rem;font-weight:700;margin:0 0 .5rem}@media(min-width:1280px){.pca-a-message__headline{font-size:1.375rem}}.pca-a-message__body{flex:1 1 auto;align-self:center}.pca-a-message__icon{display:block;background-size:contain;background-color:inherit;width:1.5rem;height:1.5rem}.pca-a-message__close{cursor:pointer;background:none;border:none;align-self:flex-start;width:1rem;height:1rem;padding:0}.pca-a-message__close-icon{display:block;background-size:contain;background-color:inherit;width:1rem;height:1rem}"]]
  ]);
var Zf, Xf;
(Xf = Zf || (Zf = {}))
.cartlayerToCheckout = "cartlayer-to-checkout", Xf.cartOverlayToCheckout = "cartoverlay-to-checkout", Xf.basketToCheckout = "basket-to-checkout", Xf.loginPage = "step1-login", Xf.addressPage = "step2-address", Xf.addressDeliveryOptions = "step2.1-delivery-options", Xf.addressDeliveryAddress = "step2.2-delivery-address", Xf.paymentPage = "step3-payment", Xf.summaryPage = "step4-summary";
var em = (e => (e.Add2CartOverlay = "t79", e.HideCouponField = "t95", e))(em || {}),
  tm = (e => (e.DEFAULT = "default", e.A1 = "a1", e.T95 = "a1_hidecouponfield", e))(tm || {});
const om = {
    mounted(e, t) {
      !t.value || t?.value?.length <= 0 || e.setAttribute("data-ab", t.value)
    }
  },
  rm = () => {
    const e = At();
    return {
      withDebounce: (t, o) => (clearTimeout(e.value), (...r) => {
        clearTimeout(e.value), e.value = setTimeout(() => {
          t.apply(void 0, r)
        }, o)
      })
    }
  };
class sm {
  constructor(e) {
    this.options = e, this.options || (this.options = {}), this.options.ignoreErrors || (this.options.ignoreErrors = !1), this.options.eventElementSource || (this.options.eventElementSource = window)
  }
  emit(e, t, o) {
    try {
      const r = new CustomEvent(e, {
        detail: t ?? void 0
      });
      (o ?? this.options)
      ?.eventElementSource?.dispatchEvent(r)
    } catch (q_) {
      if ((o ?? this.options)
        ?.logger?.error(q_), (o ?? this.options)
        ?.ignoreErrors) return;
      throw q_
    }
  }
  on(e, t) {
    return (this.options?.eventElementSource ?? window)
      .addEventListener(e, e => {
        t(e)
      }), () => {
        (this.options?.eventElementSource ?? window)
        .removeEventListener(e, t)
      }
  }
}
var im = (e => (e.CART = "CART", e.SUMMARY = "SUMMARY", e.PDP = "PDP", e.WISHLIST = "WISHLIST", e.SEARCH = "SEARCH", e))(im || {});
const nm = "ai-voucher-cart",
  am = "cart-quantity-changed";
var lm = (e => (e.PAGE_LOAD = "page", e.BUTTON_CLICK = "button", e.LINK = "link", e))(lm || {}),
  cm = (e => (e[e.CART = 0] = "CART", e[e.LOGIN = 1] = "LOGIN", e[e.ADDRESS = 2] = "ADDRESS", e[e.PAYMENT = 3] = "PAYMENT", e[e.SUMMARY = 4] = "SUMMARY", e[e.SUCCESS = 5] = "SUCCESS", e[e.UNKNOWN = 6] = "UNKNOWN", e[e.WISHLIST = 7] = "WISHLIST", e[e.DELIVERY_OPTIONS = 8] = "DELIVERY_OPTIONS", e))(cm || {});
const dm = e => {
    try {
      const e = xn("tracking-info");
      if (e) {
        const t = jn.Buffer.from(e, "base64")
          .toString("utf-8");
        return JSON.parse(t)
      }
    } catch (q_) {
      e?.error(q_)
    }
    return {
      customerStatus: "",
      accountId: "",
      customerType: ""
    }
  },
  pm = e => {
    switch (e) {
      case cm.CART:
        return 0;
      case cm.LOGIN:
        return 1;
      case cm.ADDRESS:
        return 2;
      case cm.PAYMENT:
        return 3;
      case cm.SUMMARY:
        return 4;
      case cm.SUCCESS:
        return 5;
      case cm.WISHLIST:
        return 7;
      case cm.DELIVERY_OPTIONS:
        return 8;
      default:
        return -1
    }
  },
  um = e => {
    switch (e) {
      case cm.CART:
        return "cart";
      case cm.LOGIN:
        return "login";
      case cm.ADDRESS:
        return "address";
      case cm.PAYMENT:
        return "payment";
      case cm.SUMMARY:
        return "summary";
      case cm.SUCCESS:
        return "success";
      case cm.WISHLIST:
        return "wishlist";
      case cm.DELIVERY_OPTIONS:
        return "delivery_options";
      default:
        return ""
    }
  };
class fm {
  constructor(e, t) {
    this.trackingService = e, this.dataLayer = t
  }
  push(e) {
    try {
      this.dataLayer.push(e)
    } catch (q_) {
      this.trackingService.options?.logger?.error(q_)
    }
  }
}
class mm extends fm {
  calcShippingCost(...e) {
    let t = 0;
    return e.forEach(e => {
      t += e
    }), t || 0
  }
  resolveCartItem(e) {
    return {
      id: e?.erpNumber,
      category: e?.category,
      price: e?.unitPrice,
      name: e?.name,
      brand: e?.brand,
      quantity: e?.quantity,
      variant: e?.productVariantId || void 0
    }
  }
  resolveCart(e) {
    return e && e.cartItems && 0 !== e.cartItems.length ? e?.cartItems?.map(e => this.resolveCartItem({
      ...e,
      oldDeviceTakebackChecked: !1
    })) : []
  }
  constructor(e) {
    window.dataLayer = window.dataLayer || [];
    const t = window.dataLayer;
    t.push({
      event: "gtm.js",
      "gtm.start": (new Date)
        .getTime()
    }), super(e, t)
  }
  customDimensionUserType() {
    const e = dm(this.trackingService?.options?.logger);
    "NEW_CUSTOMER" !== e.customerStatus ? "REGISTERED_CUSTOMER" !== e.customerStatus ? this.push({
      userType: "Guest Order"
    }) : this.push({
      userType: "Existing Customer"
    }) : this.push({
      userType: "Register new"
    })
  }
  pageView(e) {
    this.push({
      event: "nuxtRoute",
      pageType: "PageView",
      pageUrl: e?.path || location?.pathname,
      routeName: e?.name || document?.title
    })
  }
  subsequentRegistrationClick() {
    this.push({
      event: "gaEvent",
      eventCategory: "Checkout",
      eventAction: "Registration_From Guest",
      eventLabel: "Success Page"
    })
  }
  checkoutLogin(e) {
    this.push({
      event: "EECcheckoutOption",
      ecommerce: {
        checkout_option: {
          actionField: {
            step: cm.LOGIN,
            option: e
          }
        }
      }
    })
  }
  startCheckout(e) {
    this.push({
      event: "gaEvent",
      eventCategory: "checkout start",
      eventAction: e
    })
  }
  legalTextClick(e) {
    return {
      event: "gaEvent",
      eventCategory: "Checkout",
      eventAction: "Click legal text link",
      eventLabel: e
    }
  }
  basketRemoveItem(e) {
    this.push({
      event: "EECremoveFromCart",
      ecommerce: {
        currencyCode: e?.currency || "",
        remove: {
          products: e ? [this.resolveCartItem(e)] : []
        }
      }
    })
  }
  basketAddItem(e) {
    this.push({
      event: "EECaddToCart",
      ecommerce: {
        currencyCode: e?.currency || "",
        add: {
          products: e ? [this.resolveCartItem(e)] : []
        }
      }
    })
  }
  basketPageView(e) {
    this.push({
      event: "EECbasketProducts",
      ecommerce: {
        basket: {
          actionField: {
            list: ""
          },
          products: this.resolveCart(e)
        }
      }
    })
  }
  ratingsOptIn(e, t) {
    this.push({
      eventName: e,
      eventValue: t
    })
  }
  purchase(e, t) {
    const o = t?.discountItems?.find(e => "COUPON" === e.discountType);
    this.push({
      event: "EECPurchase",
      ecommerce: {
        purchase: {
          actionField: {
            id: e,
            shipping: this.calcShippingCost(t?.shippingCostStandardAfterCoupon, t?.shippingCostAdditional),
            tax: t?.tax || void 0,
            revenue: t?.cartAmountAfterCoupon,
            coupon: o && o.code || void 0,
            couponvalue: o && o.discount || void 0,
            action: "purchase"
          },
          products: this.resolveCart(t)
        }
      }
    })
  }
  checkoutOption(e, t) {
    const o = {
      step: e,
      action: "checkout_option"
    };
    var r;
    null != (r = t) && ("object" != typeof r || r.length > 0 || 0 !== r.length && (0 !== Object.keys(r)
      .length || r.constructor !== Object)) && Object.assign(o, {
      option: t
    }), this.push({
      event: "EECcheckoutOption",
      ecommerce: {
        checkout_option: {
          actionField: o
        }
      }
    })
  }
  pageVisit(e, t) {
    this.push({
      event: "EECcheckout",
      ecommerce: {
        checkout: {
          actionField: {
            step: e,
            action: "checkout"
          },
          products: this.resolveCart(t)
        }
      }
    })
  }
}
class bm extends fm {
  constructor(e) {
    window.dataLayerService = window.dataLayerService || [], super(e, window.dataLayerService)
  }
  get UserType() {
    const e = dm(this.trackingService?.options?.logger);
    switch (e.customerType) {
      case "REGISTERED":
        return "NEW_CUSTOMER" === e.customerStatus ? "new customer" : "customer";
      case "GUEST":
        return "guest";
      default:
        return "unregistered"
    }
  }
  resolveEvent(e) {
    const t = {
        applicationID: this.trackingService.options.meta.applicationID,
        moduleID: this.trackingService.options.meta.moduleID,
        region: void 0,
        managementUnit: void 0,
        country: this.trackingService.options.meta.country,
        language: this.trackingService.options.meta.language,
        locale: `${this.trackingService.options.meta.language}-${this.trackingService.options.meta.country}`,
        currency: this.trackingService.options.meta.currency,
        applicationVersion: void 0,
        applicationEnvironment: this.trackingService.options.meta.env
      },
      o = e.eventInfo,
      r = e?.content ? {
        contentID: e.content.contentID,
        contentType: e.content.contentType ?? e.eventType.toString(),
        contentLabel: e.content.contentLabel
      } : void 0,
      s = e?.process ? {
        stepName: e?.process?.stepName ?? um(e.process.page),
        stepNumber: pm(e.process.page)
      } : void 0,
      i = {
        userType: this.UserType,
        salesChannel: {
          [vn.WEB]: "01",
          [vn.MOBILE_APP]: Tn(),
          [vn.LIDL_PLUS]: void 0
        } [this.trackingService.options.meta.appContext] ?? ""
      },
      n = e?.ecommerce,
      a = e?.products,
      l = e?.click,
      c = {
        pageURL: `${window.location.origin}${window.location.pathname}`,
        pageParameter: window.location.search,
        pageTitle: window.location.pathname.split("/")
          .pop(),
        pageCategory: this.trackingService.options.meta.pageCategory
      },
      d = {
        scenarioName: e.scenarioName,
        collections: {
          application: t,
          content: r
        }
      };
    return o && (d.collections.eventInfo = o), s && (d.collections.process = s), i && (d.collections.user = i), n && (d.collections.ecommerce = n), a && (d.collections.products = a), l && (d.collections.click = l), c && (d.collections.page = c), d
  }
  PageLoadTemplate(e, t) {
    return {
      scenarioName: e,
      eventType: lm.PAGE_LOAD,
      process: {
        page: t
      },
      eventInfo: {
        eventAction: e,
        eventCategory: "pageload",
        eventInteractionType: "load"
      }
    }
  }
  ErrorMessageTemplate({
    adressType: e,
    paymentMethod: t,
    paymentMethodsAvailable: o,
    cartId: r,
    translationKey: s,
    errorMessage: i,
    errorHeader: n
  }) {
    const a = "Error_Message";
    return {
      scenarioName: a,
      eventInfo: {
        eventAction: a,
        eventCategory: "Load",
        eventInteractionType: "Form_Error",
        errorMessage: i
      },
      content: {
        contentID: s,
        contentType: "ErrorMessage",
        contentLabel: n
      },
      ecommerce: {
        cartId: r,
        adressType: e,
        paymentMethod: t,
        paymentMethodsAvailable: o
      }
    }
  }
  SuccessPageLoadTemplate(e, t, o) {
    return {
      scenarioName: e,
      eventType: lm.PAGE_LOAD,
      eventInfo: {
        eventAction: e,
        eventCategory: "pageload",
        eventInteractionType: "load"
      },
      process: {
        page: t
      },
      ecommerce: {
        transactionID: o
      }
    }
  }
  ButtonClickTemplate(e, t) {
    return {
      scenarioName: e,
      eventType: lm.BUTTON_CLICK,
      eventInfo: {
        eventCategory: "click"
      },
      process: {
        page: t
      }
    }
  }
  LinkClickTemplate(e, t) {
    return {
      scenarioName: e,
      eventType: lm.LINK,
      eventInfo: {
        eventCategory: "click"
      },
      process: {
        page: t
      }
    }
  }
  emit(e, ...t) {
    let o = {};
    for (const s of t) o = Pn(o, s);
    const r = this.resolveEvent(Pn(o, e));
    this.push(r), this.trackingService.options?.logger?.info("Tracking.service: pushing event", r.scenarioName, r)
  }
}
class hm {
  constructor(e) {
    this.options = e, this.trackingProviderGoogleAnalytics = new mm(this), this.trackingProviderUnifiedTracking = new bm(this), this.runCookiebotScripts()
  }
  runCookiebotScripts() {
    window.Cookiebot && window.Cookiebot.consent && window.Cookiebot.runScripts && window.Cookiebot.runScripts()
  }
}

function gm(e) {
  const t = {
      logger: "prod" !== e.env ? window.console : void 0,
      ignoreErrors: !0,
      eventElementSource: window
    },
    o = new sm(t);
  return {
    emitCartChangeEvent: r => {
      try {
        const t = {
          country: e.country,
          language: e.language,
          currency: e.currency ?? r?.cartItems?.[0]?.currency ?? "EUR",
          cartId: r.id,
          accountId: dm()
            .accountId,
          cartItems: r.cartItems?.map(t => ({
            erpNumber: t.erpNumber ?? "",
            quantity: t.quantity ?? 1,
            currency: t.currency ?? e.currency ?? "EUR",
            unitPrice: t.unitPrice ?? 0,
            scarcityBelowThreshold: t.scarcityBelowThreshold ?? !1,
            ranking: t.ranking ?? 0,
            shippingCostAbsolute: t.shippingCostAbsolute ?? 0,
            shippingCostAdditive: t.shippingCostAdditive ?? 0,
            brand: t.brand ?? "",
            ownBrand: t.ownBrand ?? !1,
            vatRate: t.vatRate ?? 0,
            category: t.category,
            categoryIds: t.categoryIds,
            categoryNames: t.categoryNames,
            freeShipping: t.freeShipping ?? !1
          })) ?? [],
          cartAmount: {
            cartAmountAfterCoupon: r.cartAmountAfterCoupon ?? 0,
            cartAmountBeforeCoupon: r.cartAmountBeforeCoupon ?? 0,
            subTotalCartValue: r.subTotalCartValue ?? 0,
            totalCartValueWithoutPaymentFees: r.totalCartValueWithoutPaymentFees ?? 0
          },
          discountItems: (r.discountItems ?? [])
            .map(e => ({
              code: e.code ?? "",
              couponType: e.couponType ?? "GENERIC",
              discount: e.discount ?? 0,
              discountType: e.discountType ?? "PROMOTION",
              promotionReasonCode: e.promotionReasonCode,
              promotionText: e.promotionText,
              validationId: e.validationId
            })),
          eventOrigin: im.PDP,
          timestamp: new Date
        };
        o.emit(nm, t)
      } catch (q_) {
        t.logger?.error("Error emitting PCA_CART_CHANGED event", q_)
      }
    },
    emitCartQuantityChangedEvent: e => {
      o.emit(am, e, {
        eventElementSource: document
      })
    },
    emitWishlistButtonClickEvent: e => {
      o.emit("WishlistButtonResult", e, {
        eventElementSource: document
      })
    }
  }
}
const _m = e => {
    const t = e.value?.getRootNode()
      ?.host;
    return {
      hostNode: t,
      resetStyles: () => {
        if (!t) return void console.warn("No host node found", e.value);
        const o = t?.classList;
        t.setAttribute("style", ""), t.setAttribute("class", "");
        new MutationObserver(e => {
            for (const r of e)
              if ("attributes" === r.type && "class" === r.attributeName)
                for (const e of t.classList) o.contains(e) && t.classList.remove(e)
          })
          .observe(t, {
            attributes: !0,
            attributeFilter: ["class"]
          })
      }
    }
  },
  vm = (e = !1) => {
    const t = At(e);
    return {
      isLoading: t,
      withLoading: o => async (...r) => {
        t.value = !e, await o.apply(void 0, r), t.value = e
      }
    }
  },
  ym = {
    LOCKER: "PARCEL_LOCKER",
    PARCELLOCKER: "PARCEL_LOCKER",
    PARCELLOCKERLIDL: "PARCEL_LOCKER_LIDL",
    PARCELLOCKERLIDLPLUS: "PARCEL_LOCKER_LIDL_PLUS",
    SHOP: "PARCEL_SHOP",
    PARCELSHOP: "PARCEL_SHOP",
    HOME: "HOME_DELIVERY",
    HOMEDELIVERY: "HOME_DELIVERY",
    HOMEXL: "HOME_DELIVERY_XL",
    HOMEDELIVERYXL: "HOME_DELIVERY_XL",
    "2MH": "2MH"
  };

function km(e) {
  const {
    t: t
  } = kp(), o = (e, t, o, r) => {
    try {
      s.trackingProviderUnifiedTracking.emit({
        scenarioName: "Cart_Button_Click",
        eventInfo: {
          eventAction: "Cart_Button_Click",
          eventCategory: "click",
          eventInteractionType: t
        },
        click: {
          linkName: o,
          linkType: "internal"
        }
      }, i({
        listItems: e.cartItems,
        cart: e
      }), n({
        cart: e
      }), s.trackingProviderUnifiedTracking.ButtonClickTemplate("Cart_Button_Click", cm.CART))
    } catch (a) {
      console.error("Error in tracking", r, a)
    }
  }, r = {
    meta: {
      country: e.country,
      language: e.language,
      env: e.env,
      appContext: vn.WEB,
      applicationID: "shop",
      moduleID: "checkout",
      currency: e.currency ?? "EUR",
      pageCategory: "pdp"
    },
    logger: e.env !== yn.PROD ? window.console : void 0
  }, s = new hm(r), i = e => {
    let t = e?.listItems ?? e.cart?.cartItems ?? [];
    return e?.includeErpNumbers?.length && (t = t.filter(t => e?.includeErpNumbers?.includes(t?.erpNumber ?? ""))), {
      products: {
        list: t.map(e => {
          const t = e?.productId && e?.productVariantId && e.productId !== e.productVariantId ? "v_pdp" : "p_pdp",
            o = e?.categories?.[0]?.superCategories?.filter(e => e?.name)
            ?.map(e => e?.name ?? "")
            ?.reverse() ?? [],
            s = `${o?.join("/")}${o&&o.length>0?"/":""}${e?.categories?.[0]?.name}`,
            i = e?.categories?.[0]?.superCategories?.filter(e => e?.code)
            ?.map(e => e?.code ?? "")
            ?.reverse() ?? [],
            n = `${i?.join("/")}${i&&i.length>0?"/":""}${e?.categories?.[0]?.code}`,
            a = e?.shippingCosts?.find(e => {
              return "HOME_DELIVERY" === (t = e.deliveryType, ym[t] ?? t);
              var t
            })
            ?.shippingCost;
          return {
            brand: e?.brand,
            type: t,
            id: String(e?.productId),
            name: e?.name ?? e?.title ?? "",
            categoryPrimary: s,
            categoryPrimaryPath: n,
            wonCategoryPrimary: e?.wonCategoryPrimary,
            wonCategoryPrimaryPath: e?.wonCategoryPrimaryPath,
            quantity: e?.quantity ?? 1,
            price: e?.unitPrice ?? e?.price?.price ?? void 0,
            currency: e?.currency ?? e?.price?.currencyCode ?? r.meta.currency ?? void 0,
            availability: void 0,
            forwardingSurcharge: void 0,
            productDeliveryTime: e?.expectedDeliveryDate ? String(e?.expectedDeliveryDate) : void 0,
            ranking: e?.ranking,
            status: void 0,
            tradeType: void 0,
            ratingAverage: void 0,
            shippingCostHomeDeliveryCharge: a
          }
        })
      }
    }
  }, n = e => {
    let t = 0;
    for (const r of e.cart?.cartItems ?? []) t += (r?.aov ?? r?.unitPrice) * r.quantity;
    return {
      ecommerce: {
        basketValueGross: e.cart?.cartAmountBeforeCoupon,
        additionalShippingCost: e.cart?.shippingCostAdditional,
        shippingCost: e.cart?.shippingCostStandardAfterCoupon,
        cartId: e.cart?.id,
        paymentMethodsAvailable: "",
        basketValueNet: e.cart?.tax ? e.cart?.cartAmountBeforeCoupon - e.cart?.tax : void 0,
        basketValueTax: e.cart?.tax,
        additionalServiceCost: (o = e.cart.cartItems, (o ?? [])
          .flatMap(e => e?.additionalServices ?? [])
          .filter(e => e?.selected && e.price)
          .reduce((e, t) => e + t.price, 0)),
        paymentMethod: null,
        basketValueAOV: t,
        paymentFees: e.cart?.paymentFeeCalculated,
        deliveryOptionsAvailable: "",
        zoneSurcharge: e.cart?.zoneSurcharge
      }
    };
    var o
  };
  return {
    cartOverlayView: e => {
      try {
        s.trackingProviderUnifiedTracking.emit({
          scenarioName: "Cart_Overlay_View",
          eventInfo: {
            eventAction: "Cart_Overlay_View",
            eventCategory: "view",
            eventInteractionType: "hover"
          }
        }, {
          process: {
            stepName: "cart",
            stepNumber: 0
          }
        }, i({
          listItems: e.cart?.cartItems,
          cart: e.cart
        }), n({
          cart: e.cart
        }))
      } catch (t) {
        console.error("Error in tracking", "cartOverlayView", t)
      }
    },
    basketAddItem: e => {
      s.trackingProviderGoogleAnalytics.basketAddItem(e.cartItems[0])
    },
    continueShopping: e => o(e.cart, "continue_shopping", t("widgets.flyout.continueShoppingButton"), "continueShopping"),
    initCheckout: e => o(e.cart, "start_checkout", t("widgets.flyout.goToCheckoutButton"), "initCheckout")
  }
}
class xm extends Error {
  response;
  request;
  options;
  constructor(e, t, o) {
    const r = `${e.status||0===e.status?e.status:""} ${e.statusText??""}`.trim();
    super(`Request failed with ${r?`status code ${r}`:"an unknown error"}: ${t.method} ${t.url}`), this.name = "HTTPError", this.response = e, this.request = t, this.options = o
  }
}
class Em extends Error {
  name = "NonError";
  value;
  constructor(e) {
    let t = "Non-error value was thrown";
    try {
      "string" == typeof e ? t = e : e && "object" == typeof e && "message" in e && "string" == typeof e.message && (t = e.message)
    } catch {}
    super(t), this.value = e
  }
}
class wm extends Error {
  name = "ForceRetryError";
  customDelay;
  code;
  customRequest;
  constructor(e) {
    const t = e?.cause ? e.cause instanceof Error ? e.cause : new Em(e.cause) : void 0;
    super(e?.code ? `Forced retry: ${e.code}` : "Forced retry", t ? {
      cause: t
    } : void 0), this.customDelay = e?.delay, this.code = e?.code, this.customRequest = e?.request
  }
}
const Am = (() => {
    let e = !1,
      t = !1;
    const o = "function" == typeof globalThis.ReadableStream,
      r = "function" == typeof globalThis.Request;
    if (o && r) try {
      t = new globalThis.Request("https://empty.invalid", {
          body: new globalThis.ReadableStream,
          method: "POST",
          get duplex() {
            return e = !0, "half"
          }
        })
        .headers.has("Content-Type")
    } catch (s) {
      if (s instanceof Error && "unsupported BodyInit type" === s.message) return !1;
      throw s
    }
    return e && !t
  })(),
  Lm = "function" == typeof globalThis.AbortController,
  Pm = "function" == typeof globalThis.AbortSignal && "function" == typeof globalThis.AbortSignal.any,
  Tm = "function" == typeof globalThis.ReadableStream,
  Om = "function" == typeof globalThis.FormData,
  Cm = ["get", "post", "put", "patch", "head", "delete"],
  Rm = {
    json: "application/json",
    text: "text/*",
    formData: "multipart/form-data",
    arrayBuffer: "*/*",
    blob: "*/*",
    bytes: "*/*"
  },
  Im = 2147483647,
  Sm = (new TextEncoder)
  .encode("------WebKitFormBoundaryaxpyiPgbbPti10Rw")
  .length,
  Dm = Symbol("stop");
class jm {
  options;
  constructor(e) {
    this.options = e
  }
}
const Bm = e => new jm(e),
  zm = {
    json: !0,
    parseJson: !0,
    stringifyJson: !0,
    searchParams: !0,
    prefixUrl: !0,
    retry: !0,
    timeout: !0,
    hooks: !0,
    throwHttpErrors: !0,
    onDownloadProgress: !0,
    onUploadProgress: !0,
    fetch: !0,
    context: !0
  },
  Fm = {
    next: !0
  },
  Vm = {
    method: !0,
    headers: !0,
    body: !0,
    mode: !0,
    credentials: !0,
    cache: !0,
    redirect: !0,
    referrer: !0,
    referrerPolicy: !0,
    integrity: !0,
    keepalive: !0,
    signal: !0,
    window: !0,
    duplex: !0
  },
  Nm = (e, t, o) => {
    let r, s = 0;
    return e.pipeThrough(new TransformStream({
      transform(e, i) {
        if (i.enqueue(e), r) {
          s += r.byteLength;
          let e = 0 === t ? 0 : s / t;
          e >= 1 && (e = 1 - Number.EPSILON), o?.({
            percent: e,
            totalBytes: Math.max(t, s),
            transferredBytes: s
          }, r)
        }
        r = e
      },
      flush() {
        r && (s += r.byteLength, o?.({
          percent: 1,
          totalBytes: Math.max(t, s),
          transferredBytes: s
        }, r))
      }
    }))
  },
  Mm = (e, t, o) => {
    if (!e.body) return e;
    const r = (e => {
      if (!e) return 0;
      if (e instanceof FormData) {
        let t = 0;
        for (const [o, r] of e) t += Sm, t += (new TextEncoder)
          .encode(`Content-Disposition: form-data; name="${o}"`)
          .length, t += "string" == typeof r ? (new TextEncoder)
          .encode(r)
          .length : r.size;
        return t
      }
      if (e instanceof Blob) return e.size;
      if (e instanceof ArrayBuffer) return e.byteLength;
      if ("string" == typeof e) return (new TextEncoder)
        .encode(e)
        .length;
      if (e instanceof URLSearchParams) return (new TextEncoder)
        .encode(e.toString())
        .length;
      if ("byteLength" in e) return e.byteLength;
      if ("object" == typeof e && null !== e) try {
        const t = JSON.stringify(e);
        return (new TextEncoder)
          .encode(t)
          .length
      } catch {
        return 0
      }
      return 0
    })(o ?? e.body);
    return new Request(e, {
      duplex: "half",
      body: Nm(e.body, r, t)
    })
  },
  Um = e => null !== e && "object" == typeof e,
  qm = (...e) => {
    for (const t of e)
      if ((!Um(t) || Array.isArray(t)) && void 0 !== t) throw new TypeError("The `options` argument must be an object");
    return Gm({}, ...e)
  },
  Wm = (e = {}, t = {}) => {
    const o = new globalThis.Headers(e),
      r = t instanceof globalThis.Headers,
      s = new globalThis.Headers(t);
    for (const [i, n] of s.entries()) r && "undefined" === n || void 0 === n ? o.delete(i) : o.set(i, n);
    return o
  };

function $m(e, t, o) {
  return Object.hasOwn(t, o) && void 0 === t[o] ? [] : Gm(e[o] ?? [], t[o] ?? [])
}
const Hm = (e = {}, t = {}) => ({
    beforeRequest: $m(e, t, "beforeRequest"),
    beforeRetry: $m(e, t, "beforeRetry"),
    afterResponse: $m(e, t, "afterResponse"),
    beforeError: $m(e, t, "beforeError")
  }),
  Qm = (e, t) => {
    const o = new URLSearchParams;
    for (const r of [e, t])
      if (void 0 !== r)
        if (r instanceof URLSearchParams)
          for (const [e, t] of r.entries()) o.append(e, t);
        else if (Array.isArray(r))
      for (const e of r) {
        if (!Array.isArray(e) || 2 !== e.length) throw new TypeError("Array search parameters must be provided in [[key, value], ...] format");
        o.append(String(e[0]), String(e[1]))
      } else if (Um(r))
        for (const [e, t] of Object.entries(r)) void 0 !== t && o.append(e, String(t));
      else {
        const e = new URLSearchParams(r);
        for (const [t, r] of e.entries()) o.append(t, r)
      } return o
  },
  Gm = (...e) => {
    let t, o = {},
      r = {},
      s = {};
    const i = [];
    for (const n of e)
      if (Array.isArray(n)) Array.isArray(o) || (o = []), o = [...o, ...n];
      else if (Um(n)) {
      for (let [e, r] of Object.entries(n))
        if ("signal" === e && r instanceof globalThis.AbortSignal) i.push(r);
        else if ("context" !== e) "searchParams" !== e ? (Um(r) && e in o && (r = Gm(o[e], r)), o = {
        ...o,
        [e]: r
      }) : t = null == r ? void 0 : void 0 === t ? r : Qm(t, r);
      else {
        if (null != r && (!Um(r) || Array.isArray(r))) throw new TypeError("The `context` option must be an object");
        o = {
          ...o,
          context: null == r ? {} : {
            ...o.context,
            ...r
          }
        }
      }
      Um(n.hooks) && (s = Hm(s, n.hooks), o.hooks = s), Um(n.headers) && (r = Wm(r, n.headers), o.headers = r)
    }
    return void 0 !== t && (o.searchParams = t), i.length > 0 && (1 === i.length ? o.signal = i[0] : o.signal = Pm ? AbortSignal.any(i) : i.at(-1)), o
  },
  Km = e => Cm.includes(e) ? e.toUpperCase() : e,
  Ym = {
    limit: 2,
    methods: ["get", "put", "head", "delete", "options", "trace"],
    statusCodes: [408, 413, 429, 500, 502, 503, 504],
    afterStatusCodes: [413, 429, 503],
    maxRetryAfter: Number.POSITIVE_INFINITY,
    backoffLimit: Number.POSITIVE_INFINITY,
    delay: e => .3 * 2 ** (e - 1) * 1e3,
    jitter: void 0,
    retryOnTimeout: !1
  },
  Jm = (e = {}) => {
    if ("number" == typeof e) return {
      ...Ym,
      limit: e
    };
    if (e.methods && !Array.isArray(e.methods)) throw new Error("retry.methods must be an array");
    if (e.methods &&= e.methods.map(e => e.toLowerCase()), e.statusCodes && !Array.isArray(e.statusCodes)) throw new Error("retry.statusCodes must be an array");
    const t = Object.fromEntries(Object.entries(e)
      .filter(([, e]) => void 0 !== e));
    return {
      ...Ym,
      ...t
    }
  };
class Zm extends Error {
  request;
  constructor(e) {
    super(`Request timed out: ${e.method} ${e.url}`), this.name = "TimeoutError", this.request = e
  }
}
class Xm {
  static create(e, t) {
    const o = new Xm(e, t),
      r = o.#e(async () => {
        if ("number" == typeof o.#t.timeout && o.#t.timeout > Im) throw new RangeError("The `timeout` option cannot be greater than 2147483647");
        await Promise.resolve();
        let e = await o.#o();
        for (const r of o.#t.hooks.afterResponse) {
          const s = o.#r(e.clone());
          let i;
          try {
            i = await r(o.request, o.#s(), s, {
              retryCount: o.#i
            })
          } catch (t) {
            throw o.#n(s), o.#n(e), t
          }
          if (i instanceof jm) throw o.#n(s), o.#n(e), new wm(i.options);
          const n = i instanceof globalThis.Response ? i : e;
          s !== n && o.#n(s), e !== n && o.#n(e), e = n
        }
        if (o.#r(e), !e.ok && ("function" == typeof o.#t.throwHttpErrors ? o.#t.throwHttpErrors(e.status) : o.#t.throwHttpErrors)) {
          let t = new xm(e, o.request, o.#s());
          for (const e of o.#t.hooks.beforeError) t = await e(t, {
            retryCount: o.#i
          });
          throw t
        }
        if (o.#t.onDownloadProgress) {
          if ("function" != typeof o.#t.onDownloadProgress) throw new TypeError("The `onDownloadProgress` option must be a function");
          if (!Tm) throw new Error("Streams are not supported in your environment. `ReadableStream` is missing.");
          const t = e.clone();
          return o.#n(e), ((e, t) => {
            if (!e.body) return e;
            if (204 === e.status) return new Response(null, {
              status: e.status,
              statusText: e.statusText,
              headers: e.headers
            });
            const o = Math.max(0, Number(e.headers.get("content-length")) || 0);
            return new Response(Nm(e.body, o, t), {
              status: e.status,
              statusText: e.statusText,
              headers: e.headers
            })
          })(t, o.#t.onDownloadProgress)
        }
        return e
      })
      .finally(() => {
        const e = o.#a;
        o.#l(e?.body ?? void 0), o.#l(o.request.body ?? void 0)
      });
    for (const [s, i] of Object.entries(Rm)) "bytes" === s && "function" != typeof globalThis.Response?.prototype?.bytes || (r[s] = async () => {
      o.request.headers.set("accept", o.request.headers.get("accept") || i);
      const e = await r;
      if ("json" === s) {
        if (204 === e.status) return "";
        const o = await e.text();
        return "" === o ? "" : t.parseJson ? t.parseJson(o) : JSON.parse(o)
      }
      return e[s]()
    });
    return r
  }
  static #c(e) {
    return !e || "object" != typeof e || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.fromEntries(Object.entries(e)
      .filter(([, e]) => void 0 !== e))
  }
  request;
  #d;
  #i = 0;
  #p;
  #t;
  #a;
  #u;
  #f;
  constructor(e, t = {}) {
    if (this.#p = e, this.#t = {
        ...t,
        headers: Wm(this.#p.headers, t.headers),
        hooks: Hm({
          beforeRequest: [],
          beforeRetry: [],
          beforeError: [],
          afterResponse: []
        }, t.hooks),
        method: Km(t.method ?? this.#p.method ?? "GET"),
        prefixUrl: String(t.prefixUrl || ""),
        retry: Jm(t.retry),
        throwHttpErrors: t.throwHttpErrors ?? !0,
        timeout: t.timeout ?? 1e4,
        fetch: t.fetch ?? globalThis.fetch.bind(globalThis),
        context: t.context ?? {}
      }, "string" != typeof this.#p && !(this.#p instanceof URL || this.#p instanceof globalThis.Request)) throw new TypeError("`input` must be a string, URL, or Request");
    if (this.#t.prefixUrl && "string" == typeof this.#p) {
      if (this.#p.startsWith("/")) throw new Error("`input` must not begin with a slash when using `prefixUrl`");
      this.#t.prefixUrl.endsWith("/") || (this.#t.prefixUrl += "/"), this.#p = this.#t.prefixUrl + this.#p
    }
    Lm && Pm && (this.#u = this.#t.signal ?? this.#p.signal, this.#d = new globalThis.AbortController, this.#t.signal = this.#u ? AbortSignal.any([this.#u, this.#d.signal]) : this.#d.signal), Am && (this.#t.duplex = "half"), void 0 !== this.#t.json && (this.#t.body = this.#t.stringifyJson?.(this.#t.json) ?? JSON.stringify(this.#t.json), this.#t.headers.set("content-type", this.#t.headers.get("content-type") ?? "application/json"));
    const o = t.headers && new globalThis.Headers(t.headers)
      .has("content-type");
    if (this.#p instanceof globalThis.Request && (Om && this.#t.body instanceof globalThis.FormData || this.#t.body instanceof URLSearchParams) && !o && this.#t.headers.delete("content-type"), this.request = new globalThis.Request(this.#p, this.#t), void 0 !== (r = this.#t.searchParams) && (Array.isArray(r) ? r.length > 0 : r instanceof URLSearchParams ? r.size > 0 : "object" == typeof r ? Object.keys(r)
        .length > 0 : "string" == typeof r ? r.trim()
        .length > 0 : Boolean(r))) {
      const e = "?" + ("string" == typeof this.#t.searchParams ? this.#t.searchParams.replace(/^\?/, "") : new URLSearchParams(Xm.#c(this.#t.searchParams))
          .toString()),
        t = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, e);
      this.request = new globalThis.Request(t, this.#t)
    }
    var r;
    if (this.#t.onUploadProgress) {
      if ("function" != typeof this.#t.onUploadProgress) throw new TypeError("The `onUploadProgress` option must be a function");
      if (!Am) throw new Error("Request streams are not supported in your environment. The `duplex` option for `Request` is not available.");
      this.request = this.#m(this.request, this.#t.body ?? void 0)
    }
  }
  #b() {
    const e = this.#t.retry.delay(this.#i);
    let t = e;
    !0 === this.#t.retry.jitter ? t = Math.random() * e : "function" == typeof this.#t.retry.jitter && (t = this.#t.retry.jitter(e), (!Number.isFinite(t) || t < 0) && (t = e));
    const o = this.#t.retry.backoffLimit ?? Number.POSITIVE_INFINITY;
    return Math.min(o, t)
  }
  async #h(e) {
    if (this.#i++, this.#i > this.#t.retry.limit) throw e;
    const t = e instanceof Error ? e : new Em(e);
    if (t instanceof wm) return t.customDelay ?? this.#b();
    if (!this.#t.retry.methods.includes(this.request.method.toLowerCase())) throw e;
    if (void 0 !== this.#t.retry.shouldRetry) {
      const o = await this.#t.retry.shouldRetry({
        error: t,
        retryCount: this.#i
      });
      if (!1 === o) throw e;
      if (!0 === o) return this.#b()
    }
    if (function(e) {
        return e instanceof Zm || e?.name === Zm.name
      }(e) && !this.#t.retry.retryOnTimeout) throw e;
    if (function(e) {
        return e instanceof xm || e?.name === xm.name
      }(e)) {
      if (!this.#t.retry.statusCodes.includes(e.response.status)) throw e;
      const t = e.response.headers.get("Retry-After") ?? e.response.headers.get("RateLimit-Reset") ?? e.response.headers.get("X-RateLimit-Retry-After") ?? e.response.headers.get("X-RateLimit-Reset") ?? e.response.headers.get("X-Rate-Limit-Reset");
      if (t && this.#t.retry.afterStatusCodes.includes(e.response.status)) {
        let e = 1e3 * Number(t);
        Number.isNaN(e) ? e = Date.parse(t) - Date.now() : e >= Date.parse("2024-01-01") && (e -= Date.now());
        const o = this.#t.retry.maxRetryAfter ?? e;
        return e < o ? e : o
      }
      if (413 === e.response.status) throw e
    }
    return this.#b()
  }
  #r(e) {
    return this.#t.parseJson && (e.json = async () => this.#t.parseJson(await e.text())), e
  }
  #l(e) {
    e && e.cancel()
      .catch(() => {})
  }
  #n(e) {
    this.#l(e.body ?? void 0)
  }
  async #e(e) {
    try {
      return await e()
    } catch (t) {
      const o = Math.min(await this.#h(t), Im);
      if (this.#i < 1) throw t;
      if (await async function(e, {
          signal: t
        }) {
          return new Promise((o, r) => {
            function s() {
              clearTimeout(i), r(t.reason)
            }
            t && (t.throwIfAborted(), t.addEventListener("abort", s, {
              once: !0
            }));
            const i = setTimeout(() => {
              t?.removeEventListener("abort", s), o()
            }, e)
          })
        }(o, this.#u ? {
          signal: this.#u
        } : {}), t instanceof wm && t.customRequest) {
        const e = this.#t.signal ? new globalThis.Request(t.customRequest, {
          signal: this.#t.signal
        }) : new globalThis.Request(t.customRequest);
        this.#g(e)
      }
      for (const e of this.#t.hooks.beforeRetry) {
        const o = await e({
          request: this.request,
          options: this.#s(),
          error: t,
          retryCount: this.#i
        });
        if (o instanceof globalThis.Request) {
          this.#g(o);
          break
        }
        if (o instanceof globalThis.Response) return o;
        if (o === Dm) return
      }
      return this.#e(e)
    }
  }
  async #o() {
    this.#d?.signal.aborted && (this.#d = new globalThis.AbortController, this.#t.signal = this.#u ? AbortSignal.any([this.#u, this.#d.signal]) : this.#d.signal, this.request = new globalThis.Request(this.request, {
      signal: this.#t.signal
    }));
    for (const t of this.#t.hooks.beforeRequest) {
      const e = await t(this.request, this.#s(), {
        retryCount: this.#i
      });
      if (e instanceof Response) return e;
      if (e instanceof globalThis.Request) {
        this.#g(e);
        break
      }
    }
    const e = ((e, t) => {
      const o = {};
      for (const r in t) Object.hasOwn(t, r) && (r in Vm || r in zm || r in e && !(r in Fm) || (o[r] = t[r]));
      return o
    })(this.request, this.#t);
    return this.#a = this.request, this.request = this.#a.clone(), !1 === this.#t.timeout ? this.#t.fetch(this.#a, e) : async function(e, t, o, r) {
      return new Promise((s, i) => {
        const n = setTimeout(() => {
          o && o.abort(), i(new Zm(e))
        }, r.timeout);
        r.fetch(e, t)
          .then(s)
          .catch(i)
          .then(() => {
            clearTimeout(n)
          })
      })
    }(this.#a, e, this.#d, this.#t)
  }
  #s() {
    if (!this.#f) {
      const {
        hooks: e,
        ...t
      } = this.#t;
      this.#f = Object.freeze(t)
    }
    return this.#f
  }
  #g(e) {
    this.#f = void 0, this.request = this.#m(e)
  }
  #m(e, t) {
    return this.#t.onUploadProgress && e.body ? Mm(e, this.#t.onUploadProgress, t ?? this.#t.body ?? void 0) : e
  }
}
const eb = e => {
    const t = (t, o) => Xm.create(t, qm(e, o));
    for (const o of Cm) t[o] = (t, r) => Xm.create(t, qm(e, r, {
      method: o
    }));
    return t.create = e => eb(qm(e)), t.extend = t => ("function" == typeof t && (t = t(e ?? {})), eb(qm(e, t))), t.stop = Dm, t.retry = Bm, t
  },
  tb = eb(),
  ob = "newAddToCartMessage",
  rb = "AddToCartResult",
  sb = "authToken",
  ib = "CART_ID",
  nb = "zn",
  ab = {
    success: {
      apiKey: "",
      i18nKey: "widgets.addToCartButton.messages.success",
      eventCode: void 0,
      level: "SUCCESS"
    },
    quantityRestricted: {
      apiKey: "validation.cart.item.maxQuantity.restricted",
      i18nKey: "widgets.addToCartButton.messages.quantityRestricted",
      eventCode: "addToCartQuantityRestricted",
      level: "ERROR"
    },
    unavailable: {
      apiKey: "validation.cart.item.unavailable",
      i18nKey: "widgets.addToCartButton.messages.productUnavailable",
      eventCode: "addToCartFullyOutOfStock",
      level: "ERROR"
    },
    partiallyUnavailable: {
      apiKey: "validation.cart.item.partially.unavailable",
      i18nKey: "widgets.addToCartButton.messages.productPartiallyUnavailable",
      eventCode: "addToCartPartiallyOutOfStock",
      level: "WARNING"
    },
    default: {
      apiKey: "addToCartGenericError",
      i18nKey: "widgets.genericErrorMessage",
      eventCode: "addToCartGenericError",
      level: "ERROR"
    }
  },
  lb = new Headers({
    Accept: "*/*",
    Pragma: "no-cache",
    "Cache-Control": "no-cache",
    "Content-Type": "application/json"
  }),
  cb = async e => {
    try {
      return await e()
    } catch (q_) {
      let t = ab.default;
      if (q_ instanceof xm) {
        const o = await (async t => {
          try {
            return await t.response.json()
          } catch (e) {
            return void console.info(e)
          }
        })(q_);
        return o && (t = (e => {
          const t = e.map(e => e.translationKey) ?? [],
            o = e.find(e => !!e.defaultMessage);
          for (const r of Object.values(ab)
              .filter(e => "SUCCESS" !== e.level))
            if (t.includes(r.apiKey)) return r;
          return null != o ? {
            i18nKey: o.translationKey ?? "",
            apiKey: o.translationKey ?? "",
            defaultMessage: o?.defaultMessage,
            eventCode: "addToCartGenericError",
            level: "ERROR"
          } : ab.default
        })(o.messages)), {
          ok: !1,
          payload: o?.payload ?? void 0,
          message: t,
          addedAmount: o?.addedAmount
        }
      }
      return {
        ok: !1,
        payload: void 0,
        message: t,
        addedAmount: void 0
      }
    }
  }, db = async ({
    country: e,
    language: t,
    params: o,
    cartId: r,
    customerNumber: s
  }) => cb(async () => {
    const i = {
      customerNumber: s,
      erpQuantityDTOs: o.map(({
        erpNumber: e,
        quantity: t,
        additionalServices: o
      }) => ({
        additionalServices: o ?? [],
        erpNumber: e,
        quantity: t ?? 1
      }))
    };
    let n = `?language=${t}`;
    r && (n += `&cartId=${r}`);
    const a = await tb.post(`/cart-api/v3/cart/list/${e}${n}`, {
        json: i,
        headers: lb
      })
      .json();
    return {
      ok: !0,
      addedAmount: a?.addedAmount,
      payload: a?.payload,
      message: ab.success
    }
  }), pb = () => {
    const e = (() => {
      try {
        const {
          getLocale: e
        } = qa(), [t, o] = e()
          .split("-");
        return {
          country: o?.toUpperCase(),
          language: t?.toLowerCase()
        }
      } catch (e) {
        return {
          country: void 0,
          language: void 0
        }
      }
    })();
    return {
      country: e.country ?? window?.mindShiftNav?.country?.toUpperCase() ?? "",
      language: e.language ?? window.mindShiftNav?.language?.toLowerCase() ?? ""
    }
  }, ub = (e, t) => {
    document.dispatchEvent(new CustomEvent(e, {
      detail: t
    }))
  }, fb = e => {
    const t = () => e?.getAttribute("clear-initial")
      ?.split(";")
      ?.map(e => e.trim()) ?? [],
      o = () => {
        e.innerHTML = ""
      };
    return {
      getInitialAttributes: t,
      clearInitialAttributes: () => {
        const r = t();
        for (const t of r) "slot" !== t ? e.removeAttribute(t) : o()
      },
      clearSlot: o
    }
  }, mb = ["disabled", "aria-label"], bb = {
    class: "pca-v-button__inner"
  };
var hb = (e => (e.Primary = "primary", e.Secondary = "secondary", e.Rounded = "rounded", e))(hb || {});
const gb = Of(zo({
    __name: "VButton",
    props: {
      transparent: {
        type: Boolean,
        default: !1
      },
      disabled: {
        type: Boolean,
        default: !1
      },
      type: {
        default: "primary",
        type: String
      },
      class: {
        default: "",
        type: String
      },
      abTestingTag: {
        default: void 0,
        type: String
      },
      ariaLabel: {
        type: String
      }
    },
    emits: ["click"],
    setup(e) {
      const t = e,
        o = si(() => {
          let e = {};
          if (t.class)
            for (const o of t.class.split(" ")) e[o] = !0;
          return e = {
            ...e
          }, e["pca-v-button--redesign"] = !0, e["pca-v-button--redesign--secondary"] = "secondary" === t.type, e
        }),
        r = si(() => Tf(t.disabled));
      return (e, s) => lo((ks(), As("button", {
        class: Q(o.value),
        type: "button",
        disabled: r.value,
        "aria-label": t.ariaLabel
      }, [Rs("span", bb, [pr(e.$slots, "default")])], 10, mb)), [
        [Ot(om), t.abTestingTag]
      ])
    }
  }), [
    ["styles", ['.pca-v-button--redesign{font-family:var(--ods-typography-font-family-primary, "LidlFontPro");font-size:var(--ods-mobile-body-tight-font-size, 1rem);font-weight:var(--ods-typography-font-weight-prominent, 600);line-height:var(--ods-mobile-body-tight-line-height, 1.25rem);letter-spacing:var(--ods-mobile-body-tight-letter-spacing, 0)}@media(min-width:90rem){.pca-v-button--redesign{font-size:var(--ods-desktop-body-tight-font-size, 1.125rem);line-height:var(--ods-desktop-body-tight-line-height, 1.5rem);letter-spacing:var(--ods-desktop-body-tight-letter-spacing, 0)}}.pca-v-button--redesign:focus-within{position:relative;outline:solid .125rem var(--ods-component-browser-focus-border-color-inner, #0050aa);outline-offset:.125rem}.pca-v-button--redesign:focus-within:before{content:"";display:block;width:100%;height:100%;position:absolute;outline:solid .125rem var(--ods-component-browser-focus-border-color-outer, #ffffff);outline-offset:.25rem;pointer-events:none}.pca-v-button--redesign:focus-visible{position:relative}.pca-v-button--redesign:focus-visible:before{content:"";display:block;width:100%;height:100%;position:absolute;outline:solid .125rem var(--ods-component-browser-focus-border-color-outer, #ffffff);outline-offset:.25rem;pointer-events:none;left:0;top:0}.pca-v-button--redesign:focus-visible:after{content:"";display:block;width:100%;height:100%;position:absolute;outline:solid .125rem var(--ods-component-browser-focus-border-color-inner, #0050aa);outline-offset:.125rem;pointer-events:none;left:0;top:0}.pca-v-button--redesign{--ods-ad-tag-font-size: .6875rem;--ods-ad-tag-letter-spacing: .3;--ods-ad-tag-line-height: 1rem;--ods-desktop-body-footnote-base: 500;--ods-desktop-body-footnote-font-family: "LidlFontPro";--ods-desktop-body-footnote-font-size: .8125rem;--ods-desktop-body-footnote-letter-spacing: .25;--ods-desktop-body-footnote-line-height: 1.25rem;--ods-desktop-body-footnote-prominent: 600;--ods-desktop-body-normal-base: 500;--ods-desktop-body-normal-font-family: "LidlFontPro";--ods-desktop-body-normal-font-size: 1.125rem;--ods-desktop-body-normal-letter-spacing: 0;--ods-desktop-body-normal-line-height: 1.75rem;--ods-desktop-body-normal-prominent: 600;--ods-desktop-body-small-1-base: 500;--ods-desktop-body-small-1-font-family: "LidlFontPro";--ods-desktop-body-small-1-font-size: 1rem;--ods-desktop-body-small-1-letter-spacing: 0;--ods-desktop-body-small-1-line-height: 1.5rem;--ods-desktop-body-small-1-prominent: 600;--ods-desktop-body-small-2-base: 500;--ods-desktop-body-small-2-font-family: "LidlFontPro";--ods-desktop-body-small-2-font-size: .875rem;--ods-desktop-body-small-2-letter-spacing: .25;--ods-desktop-body-small-2-line-height: 1.25rem;--ods-desktop-body-small-2-prominent: 600;--ods-desktop-body-tight-base: 500;--ods-desktop-body-tight-font-family: "LidlFontPro";--ods-desktop-body-tight-font-size: 1.125rem;--ods-desktop-body-tight-letter-spacing: 0;--ods-desktop-body-tight-line-height: 1.5rem;--ods-desktop-body-tight-prominent: 600;--ods-desktop-call-to-action-large-font-size: 1.25rem;--ods-desktop-call-to-action-large-letter-spacing: 0;--ods-desktop-call-to-action-large-line-height: 1.75rem;--ods-desktop-call-to-action-medium-font-size: 1.125rem;--ods-desktop-call-to-action-medium-letter-spacing: 0;--ods-desktop-call-to-action-medium-line-height: 1.5rem;--ods-desktop-call-to-action-small-font-size: .875rem;--ods-desktop-call-to-action-small-letter-spacing: .25;--ods-desktop-call-to-action-small-line-height: 1.25rem;--ods-desktop-display-1-base: 500;--ods-desktop-display-1-font-family: "LidlFontPro";--ods-desktop-display-1-font-size: 3.625rem;--ods-desktop-display-1-letter-spacing: 0;--ods-desktop-display-1-line-height: 4rem;--ods-desktop-display-1-strong: 700;--ods-desktop-display-2-base: 500;--ods-desktop-display-2-font-family: "LidlFontPro";--ods-desktop-display-2-font-size: 3.25rem;--ods-desktop-display-2-letter-spacing: 0;--ods-desktop-display-2-line-height: 3.75rem;--ods-desktop-display-2-strong: 700;--ods-desktop-display-3-base: 500;--ods-desktop-display-3-font-family: "LidlFontPro";--ods-desktop-display-3-font-size: 2.875rem;--ods-desktop-display-3-letter-spacing: 0;--ods-desktop-display-3-line-height: 3.25rem;--ods-desktop-display-3-strong: 700;--ods-desktop-display-4-base: 500;--ods-desktop-display-4-font-family: "LidlFontPro";--ods-desktop-display-4-font-size: 2.5625rem;--ods-desktop-display-4-letter-spacing: 0;--ods-desktop-display-4-line-height: 3rem;--ods-desktop-display-4-strong: 700;--ods-desktop-display-5-base: 500;--ods-desktop-display-5-font-family: "LidlFontPro";--ods-desktop-display-5-font-size: 2.3125rem;--ods-desktop-display-5-letter-spacing: 0;--ods-desktop-display-5-line-height: 2.75rem;--ods-desktop-display-5-strong: 700;--ods-desktop-headline-1-base: 500;--ods-desktop-headline-1-font-family: "LidlFontPro";--ods-desktop-headline-1-font-size: 2rem;--ods-desktop-headline-1-letter-spacing: 0;--ods-desktop-headline-1-line-height: 2.5rem;--ods-desktop-headline-1-prominent: 600;--ods-desktop-headline-2-base: 500;--ods-desktop-headline-2-font-family: "LidlFontPro";--ods-desktop-headline-2-font-size: 1.8125rem;--ods-desktop-headline-2-letter-spacing: 0;--ods-desktop-headline-2-line-height: 2.25rem;--ods-desktop-headline-2-prominent: 600;--ods-desktop-headline-3-base: 500;--ods-desktop-headline-3-font-family: "LidlFontPro";--ods-desktop-headline-3-font-size: 1.625rem;--ods-desktop-headline-3-letter-spacing: 0;--ods-desktop-headline-3-line-height: 2rem;--ods-desktop-headline-3-prominent: 600;--ods-desktop-headline-4-base: 500;--ods-desktop-headline-4-font-family: "LidlFontPro";--ods-desktop-headline-4-font-size: 1.4375rem;--ods-desktop-headline-4-letter-spacing: 0;--ods-desktop-headline-4-line-height: 2rem;--ods-desktop-headline-4-prominent: 600;--ods-desktop-headline-5-base: 500;--ods-desktop-headline-5-font-family: "LidlFontPro";--ods-desktop-headline-5-font-size: 1.25rem;--ods-desktop-headline-5-letter-spacing: 0;--ods-desktop-headline-5-line-height: 1.75rem;--ods-desktop-headline-5-prominent: 600;--ods-desktop-headline-6-base: 500;--ods-desktop-headline-6-font-family: "LidlFontPro";--ods-desktop-headline-6-font-size: 1.125rem;--ods-desktop-headline-6-letter-spacing: 0;--ods-desktop-headline-6-line-height: 1.5rem;--ods-desktop-headline-6-prominent: 600;--ods-desktop-price-2xl-double-currency-base: 500;--ods-desktop-price-2xl-double-currency-font-family: "LidlFontPro";--ods-desktop-price-2xl-double-currency-font-size: .75rem;--ods-desktop-price-2xl-double-currency-letter-spacing: 0;--ods-desktop-price-2xl-double-currency-line-height: 1rem;--ods-desktop-price-2xl-font-family: "LidlFontPricePublicBeta";--ods-desktop-price-2xl-font-size: 3.75rem;--ods-desktop-price-2xl-footer-base: 500;--ods-desktop-price-2xl-footer-font-family: "LidlFontPro";--ods-desktop-price-2xl-footer-font-size: .75rem;--ods-desktop-price-2xl-footer-letter-spacing: 0;--ods-desktop-price-2xl-footer-line-height: 1rem;--ods-desktop-price-2xl-large-pointer: 710;--ods-desktop-price-2xl-letter-spacing: 0;--ods-desktop-price-2xl-line-height: 3.75rem;--ods-desktop-price-2xl-pointer-box-lp-font-family: "LidlFontPro";--ods-desktop-price-2xl-pointer-box-lp-font-size: .6875rem;--ods-desktop-price-2xl-pointer-box-lp-letter-spacing: 0;--ods-desktop-price-2xl-pointer-box-lp-line-height: .6875rem;--ods-desktop-price-2xl-pointer-box-lp-prominent: 700;--ods-desktop-price-2xl-pointer-box-font-family: "LidlFontPro";--ods-desktop-price-2xl-pointer-box-font-size: 1rem;--ods-desktop-price-2xl-pointer-box-letter-spacing: 0;--ods-desktop-price-2xl-pointer-box-line-height: 1rem;--ods-desktop-price-2xl-pointer-box-prominent: 700;--ods-desktop-price-2xl-prefix-font-family: "LidlFontCondPro";--ods-desktop-price-2xl-prefix-font-size: .75rem;--ods-desktop-price-2xl-prefix-letter-spacing: 0;--ods-desktop-price-2xl-prefix-line-height: .75rem;--ods-desktop-price-2xl-prefix-prominent: 500;--ods-desktop-price-2xl-pv-pointer-box-font-family: "LidlFontPro";--ods-desktop-price-2xl-pv-pointer-box-font-size: .75rem;--ods-desktop-price-2xl-pv-pointer-box-letter-spacing: 0;--ods-desktop-price-2xl-pv-pointer-box-line-height: .75rem;--ods-desktop-price-2xl-pv-pointer-box-prominent: 700;--ods-desktop-price-2xl-pv-price-font-family: "LidlFontPricePublicBeta";--ods-desktop-price-2xl-pv-price-font-size: 1.5625rem;--ods-desktop-price-2xl-pv-price-large-pointer: 710;--ods-desktop-price-2xl-pv-price-letter-spacing: 0;--ods-desktop-price-2xl-pv-price-line-height: 1.5625rem;--ods-desktop-price-2xl-stroke-base: 500;--ods-desktop-price-2xl-stroke-font-family: "LidlFontPro";--ods-desktop-price-2xl-stroke-font-size: 1rem;--ods-desktop-price-2xl-stroke-letter-spacing: 0;--ods-desktop-price-2xl-stroke-line-height: 1rem;--ods-desktop-price-2xl-tag-base: 500;--ods-desktop-price-2xl-tag-font-family: "LidlFontPro";--ods-desktop-price-2xl-tag-font-size: 1rem;--ods-desktop-price-2xl-tag-letter-spacing: 0;--ods-desktop-price-2xl-tag-line-height: 1rem;--ods-desktop-price-2xl-without-pointer: 700;--ods-desktop-price-2xs-double-currency-base: 500;--ods-desktop-price-2xs-double-currency-font-family: "LidlFontPro";--ods-desktop-price-2xs-double-currency-font-size: .75rem;--ods-desktop-price-2xs-double-currency-letter-spacing: 0;--ods-desktop-price-2xs-double-currency-line-height: 1rem;--ods-desktop-price-2xs-font-family: "LidlFontPricePublicBeta";--ods-desktop-price-2xs-font-size: 2.0625rem;--ods-desktop-price-2xs-footer-base: 500;--ods-desktop-price-2xs-footer-font-family: "LidlFontPro";--ods-desktop-price-2xs-footer-font-size: .75rem;--ods-desktop-price-2xs-footer-letter-spacing: 0;--ods-desktop-price-2xs-footer-line-height: 1rem;--ods-desktop-price-2xs-large-pointer: 710;--ods-desktop-price-2xs-letter-spacing: 0;--ods-desktop-price-2xs-line-height: 2.0625rem;--ods-desktop-price-2xs-pointer-box-lp-font-family: "LidlFontPro";--ods-desktop-price-2xs-pointer-box-lp-font-size: .6875rem;--ods-desktop-price-2xs-pointer-box-lp-letter-spacing: 0;--ods-desktop-price-2xs-pointer-box-lp-line-height: .6875rem;--ods-desktop-price-2xs-pointer-box-lp-prominent: 700;--ods-desktop-price-2xs-pointer-box-font-family: "LidlFontPro";--ods-desktop-price-2xs-pointer-box-font-size: .875rem;--ods-desktop-price-2xs-pointer-box-letter-spacing: 0;--ods-desktop-price-2xs-pointer-box-line-height: .875rem;--ods-desktop-price-2xs-pointer-box-prominent: 700;--ods-desktop-price-2xs-prefix-font-family: "LidlFontCondPro";--ods-desktop-price-2xs-prefix-font-size: .75rem;--ods-desktop-price-2xs-prefix-letter-spacing: 0;--ods-desktop-price-2xs-prefix-line-height: .75rem;--ods-desktop-price-2xs-prefix-prominent: 500;--ods-desktop-price-2xs-pv-pointer-box-font-family: "LidlFontPro";--ods-desktop-price-2xs-pv-pointer-box-font-size: .75rem;--ods-desktop-price-2xs-pv-pointer-box-letter-spacing: 0;--ods-desktop-price-2xs-pv-pointer-box-line-height: .75rem;--ods-desktop-price-2xs-pv-pointer-box-prominent: 700;--ods-desktop-price-2xs-pv-price-font-family: "LidlFontPricePublicBeta";--ods-desktop-price-2xs-pv-price-font-size: 1.5625rem;--ods-desktop-price-2xs-pv-price-large-pointer: 710;--ods-desktop-price-2xs-pv-price-letter-spacing: 0;--ods-desktop-price-2xs-pv-price-line-height: 1.5625rem;--ods-desktop-price-2xs-stroke-base: 500;--ods-desktop-price-2xs-stroke-font-family: "LidlFontPro";--ods-desktop-price-2xs-stroke-font-size: .75rem;--ods-desktop-price-2xs-stroke-letter-spacing: 0;--ods-desktop-price-2xs-stroke-line-height: .75rem;--ods-desktop-price-2xs-tag-base: 500;--ods-desktop-price-2xs-tag-font-family: "LidlFontPro";--ods-desktop-price-2xs-tag-font-size: .75rem;--ods-desktop-price-2xs-tag-letter-spacing: 0;--ods-desktop-price-2xs-tag-line-height: .75rem;--ods-desktop-price-2xs-without-pointer: 700;--ods-desktop-price-l-double-currency-base: 500;--ods-desktop-price-l-double-currency-font-family: "LidlFontPro";--ods-desktop-price-l-double-currency-font-size: .75rem;--ods-desktop-price-l-double-currency-letter-spacing: 0;--ods-desktop-price-l-double-currency-line-height: 1rem;--ods-desktop-price-l-font-family: "LidlFontPricePublicBeta";--ods-desktop-price-l-font-size: 3rem;--ods-desktop-price-l-footer-base: 500;--ods-desktop-price-l-footer-font-family: "LidlFontPro";--ods-desktop-price-l-footer-font-size: .75rem;--ods-desktop-price-l-footer-letter-spacing: 0;--ods-desktop-price-l-footer-line-height: 1rem;--ods-desktop-price-l-large-pointer: 710;--ods-desktop-price-l-letter-spacing: 0;--ods-desktop-price-l-line-height: 3rem;--ods-desktop-price-l-pointer-box-lp-font-family: "LidlFontPro";--ods-desktop-price-l-pointer-box-lp-font-size: .6875rem;--ods-desktop-price-l-pointer-box-lp-letter-spacing: 0;--ods-desktop-price-l-pointer-box-lp-line-height: .6875rem;--ods-desktop-price-l-pointer-box-lp-prominent: 700;--ods-desktop-price-l-pointer-box-font-family: "LidlFontPro";--ods-desktop-price-l-pointer-box-font-size: .875rem;--ods-desktop-price-l-pointer-box-letter-spacing: 0;--ods-desktop-price-l-pointer-box-line-height: .875rem;--ods-desktop-price-l-pointer-box-prominent: 700;--ods-desktop-price-l-prefix-font-family: "LidlFontCondPro";--ods-desktop-price-l-prefix-font-size: .75rem;--ods-desktop-price-l-prefix-letter-spacing: 0;--ods-desktop-price-l-prefix-line-height: .75rem;--ods-desktop-price-l-prefix-prominent: 500;--ods-desktop-price-l-pv-pointer-box-font-family: "LidlFontPro";--ods-desktop-price-l-pv-pointer-box-font-size: .75rem;--ods-desktop-price-l-pv-pointer-box-letter-spacing: 0;--ods-desktop-price-l-pv-pointer-box-line-height: .75rem;--ods-desktop-price-l-pv-pointer-box-prominent: 700;--ods-desktop-price-l-pv-price-font-family: "LidlFontPricePublicBeta";--ods-desktop-price-l-pv-price-font-size: 1.5625rem;--ods-desktop-price-l-pv-price-large-pointer: 710;--ods-desktop-price-l-pv-price-letter-spacing: 0;--ods-desktop-price-l-pv-price-line-height: 1.5625rem;--ods-desktop-price-l-stroke-base: 500;--ods-desktop-price-l-stroke-font-family: "LidlFontPro";--ods-desktop-price-l-stroke-font-size: .875rem;--ods-desktop-price-l-stroke-letter-spacing: 0;--ods-desktop-price-l-stroke-line-height: .875rem;--ods-desktop-price-l-tag-base: 500;--ods-desktop-price-l-tag-font-family: "LidlFontPro";--ods-desktop-price-l-tag-font-size: .875rem;--ods-desktop-price-l-tag-letter-spacing: 0;--ods-desktop-price-l-tag-line-height: .875rem;--ods-desktop-price-l-without-pointer: 700;--ods-desktop-price-m-double-currency-base: 500;--ods-desktop-price-m-double-currency-font-family: "LidlFontPro";--ods-desktop-price-m-double-currency-font-size: .75rem;--ods-desktop-price-m-double-currency-letter-spacing: 0;--ods-desktop-price-m-double-currency-line-height: 1rem;--ods-desktop-price-m-font-family: "LidlFontPricePublicBeta";--ods-desktop-price-m-font-size: 2.625rem;--ods-desktop-price-m-footer-base: 500;--ods-desktop-price-m-footer-font-family: "LidlFontPro";--ods-desktop-price-m-footer-font-size: .75rem;--ods-desktop-price-m-footer-letter-spacing: 0;--ods-desktop-price-m-footer-line-height: 1rem;--ods-desktop-price-m-large-pointer: 710;--ods-desktop-price-m-letter-spacing: 0;--ods-desktop-price-m-line-height: 2.625rem;--ods-desktop-price-m-pointer-box-lp-font-family: "LidlFontPro";--ods-desktop-price-m-pointer-box-lp-font-size: .6875rem;--ods-desktop-price-m-pointer-box-lp-letter-spacing: 0;--ods-desktop-price-m-pointer-box-lp-line-height: .6875rem;--ods-desktop-price-m-pointer-box-lp-prominent: 700;--ods-desktop-price-m-pointer-box-font-family: "LidlFontPro";--ods-desktop-price-m-pointer-box-font-size: .875rem;--ods-desktop-price-m-pointer-box-letter-spacing: 0;--ods-desktop-price-m-pointer-box-line-height: .875rem;--ods-desktop-price-m-pointer-box-prominent: 700;--ods-desktop-price-m-prefix-font-family: "LidlFontCondPro";--ods-desktop-price-m-prefix-font-size: .75rem;--ods-desktop-price-m-prefix-letter-spacing: 0;--ods-desktop-price-m-prefix-line-height: .75rem;--ods-desktop-price-m-prefix-prominent: 500;--ods-desktop-price-m-pv-pointer-box-font-family: "LidlFontPro";--ods-desktop-price-m-pv-pointer-box-font-size: .75rem;--ods-desktop-price-m-pv-pointer-box-letter-spacing: 0;--ods-desktop-price-m-pv-pointer-box-line-height: .75rem;--ods-desktop-price-m-pv-pointer-box-prominent: 700;--ods-desktop-price-m-pv-price-font-family: "LidlFontPricePublicBeta";--ods-desktop-price-m-pv-price-font-size: 1.5625rem;--ods-desktop-price-m-pv-price-large-pointer: 710;--ods-desktop-price-m-pv-price-letter-spacing: 0;--ods-desktop-price-m-pv-price-line-height: 1.5625rem;--ods-desktop-price-m-stroke-base: 500;--ods-desktop-price-m-stroke-font-family: "LidlFontPro";--ods-desktop-price-m-stroke-font-size: .875rem;--ods-desktop-price-m-stroke-letter-spacing: 0;--ods-desktop-price-m-stroke-line-height: .875rem;--ods-desktop-price-m-tag-base: 500;--ods-desktop-price-m-tag-font-family: "LidlFontPro";--ods-desktop-price-m-tag-font-size: .875rem;--ods-desktop-price-m-tag-letter-spacing: 0;--ods-desktop-price-m-tag-line-height: .875rem;--ods-desktop-price-m-without-pointer: 700;--ods-indication-font-family: "LidlFontPro";--ods-indication-font-size: .6875rem;--ods-indication-letter-spacing: .3;--ods-indication-line-height: 1rem;--ods-indication-prominent: 600;--ods-mobile-body-footnote-base: 500;--ods-mobile-body-footnote-font-family: "LidlFontPro";--ods-mobile-body-footnote-font-size: .6875rem;--ods-mobile-body-footnote-letter-spacing: .3;--ods-mobile-body-footnote-line-height: 1rem;--ods-mobile-body-footnote-prominent: 600;--ods-mobile-body-normal-base: 500;--ods-mobile-body-normal-font-family: "LidlFontPro";--ods-mobile-body-normal-font-size: 1rem;--ods-mobile-body-normal-letter-spacing: 0;--ods-mobile-body-normal-line-height: 1.5rem;--ods-mobile-body-normal-prominent: 600;--ods-mobile-body-small-1-base: 500;--ods-mobile-body-small-1-font-family: "LidlFontPro";--ods-mobile-body-small-1-font-size: .875rem;--ods-mobile-body-small-1-letter-spacing: 0;--ods-mobile-body-small-1-line-height: 1.25rem;--ods-mobile-body-small-1-prominent: 600;--ods-mobile-body-small-2-base: 500;--ods-mobile-body-small-2-font-family: "LidlFontPro";--ods-mobile-body-small-2-font-size: .8125rem;--ods-mobile-body-small-2-letter-spacing: .25;--ods-mobile-body-small-2-line-height: 1.25rem;--ods-mobile-body-small-2-prominent: 600;--ods-mobile-body-tight-base: 500;--ods-mobile-body-tight-font-family: "LidlFontPro";--ods-mobile-body-tight-font-size: 1rem;--ods-mobile-body-tight-letter-spacing: 0;--ods-mobile-body-tight-line-height: 1.25rem;--ods-mobile-body-tight-prominent: 600;--ods-mobile-call-to-action-large-font-size: 1rem;--ods-mobile-call-to-action-large-letter-spacing: 0;--ods-mobile-call-to-action-large-line-height: 1.25rem;--ods-mobile-call-to-action-medium-font-size: 1rem;--ods-mobile-call-to-action-medium-letter-spacing: 0;--ods-mobile-call-to-action-medium-line-height: 1.25rem;--ods-mobile-call-to-action-small-font-size: .8125rem;--ods-mobile-call-to-action-small-letter-spacing: .25;--ods-mobile-call-to-action-small-line-height: 1.25rem;--ods-mobile-display-1-base: 500;--ods-mobile-display-1-font-family: "LidlFontPro";--ods-mobile-display-1-font-size: 2.3125rem;--ods-mobile-display-1-letter-spacing: 0;--ods-mobile-display-1-line-height: 2.75rem;--ods-mobile-display-1-prominent: 700;--ods-mobile-display-2-base: 500;--ods-mobile-display-2-font-family: "LidlFontPro";--ods-mobile-display-2-font-size: 2rem;--ods-mobile-display-2-letter-spacing: 0;--ods-mobile-display-2-line-height: 2.5rem;--ods-mobile-display-2-strong: 700;--ods-mobile-display-3-base: 500;--ods-mobile-display-3-font-family: "LidlFontPro";--ods-mobile-display-3-font-size: 1.8125rem;--ods-mobile-display-3-letter-spacing: 0;--ods-mobile-display-3-line-height: 2.25rem;--ods-mobile-display-3-strong: 700;--ods-mobile-display-4-base: 500;--ods-mobile-display-4-font-family: "LidlFontPro";--ods-mobile-display-4-font-size: 1.625rem;--ods-mobile-display-4-letter-spacing: 0;--ods-mobile-display-4-line-height: 2rem;--ods-mobile-display-4-strong: 700;--ods-mobile-display-5-base: 500;--ods-mobile-display-5-font-family: "LidlFontPro";--ods-mobile-display-5-font-size: 1.4375rem;--ods-mobile-display-5-letter-spacing: 0;--ods-mobile-display-5-line-height: 2rem;--ods-mobile-display-5-strong: 700;--ods-mobile-headline-1-base: 500;--ods-mobile-headline-1-font-family: "LidlFontPro";--ods-mobile-headline-1-font-size: 1.8125rem;--ods-mobile-headline-1-letter-spacing: 0;--ods-mobile-headline-1-line-height: 2.25rem;--ods-mobile-headline-1-prominent: 600;--ods-mobile-headline-2-base: 500;--ods-mobile-headline-2-font-family: "LidlFontPro";--ods-mobile-headline-2-font-size: 1.625rem;--ods-mobile-headline-2-letter-spacing: 0;--ods-mobile-headline-2-line-height: 2rem;--ods-mobile-headline-2-prominent: 600;--ods-mobile-headline-3-base: 500;--ods-mobile-headline-3-font-family: "LidlFontPro";--ods-mobile-headline-3-font-size: 1.4375rem;--ods-mobile-headline-3-letter-spacing: 0;--ods-mobile-headline-3-line-height: 2rem;--ods-mobile-headline-3-prominent: 600;--ods-mobile-headline-4-base: 500;--ods-mobile-headline-4-font-family: "LidlFontPro";--ods-mobile-headline-4-font-size: 1.25rem;--ods-mobile-headline-4-letter-spacing: 0;--ods-mobile-headline-4-line-height: 1.75rem;--ods-mobile-headline-4-prominent: 600;--ods-mobile-headline-5-base: 500;--ods-mobile-headline-5-font-family: "LidlFontPro";--ods-mobile-headline-5-font-size: 1.125rem;--ods-mobile-headline-5-letter-spacing: 0;--ods-mobile-headline-5-line-height: 1.5rem;--ods-mobile-headline-5-prominent: 600;--ods-mobile-headline-6-base: 500;--ods-mobile-headline-6-font-family: "LidlFontPro";--ods-mobile-headline-6-font-size: 1rem;--ods-mobile-headline-6-letter-spacing: 0;--ods-mobile-headline-6-line-height: 1.25rem;--ods-mobile-headline-6-prominent: 600;--ods-mobile-price-2xl-double-currency-base: 500;--ods-mobile-price-2xl-double-currency-font-family: "LidlFontPro";--ods-mobile-price-2xl-double-currency-font-size: .75rem;--ods-mobile-price-2xl-double-currency-letter-spacing: 0;--ods-mobile-price-2xl-double-currency-line-height: 1rem;--ods-mobile-price-2xl-font-family: "LidlFontPricePublicBeta";--ods-mobile-price-2xl-font-size: 2.875rem;--ods-mobile-price-2xl-footer-base: 500;--ods-mobile-price-2xl-footer-font-family: "LidlFontPro";--ods-mobile-price-2xl-footer-font-size: .75rem;--ods-mobile-price-2xl-footer-letter-spacing: 0;--ods-mobile-price-2xl-footer-line-height: 1rem;--ods-mobile-price-2xl-large-pointer: 710;--ods-mobile-price-2xl-letter-spacing: 0;--ods-mobile-price-2xl-line-height: 2.875rem;--ods-mobile-price-2xl-pointer-box-lp-font-family: "LidlFontPro";--ods-mobile-price-2xl-pointer-box-lp-font-size: .6875rem;--ods-mobile-price-2xl-pointer-box-lp-letter-spacing: 0;--ods-mobile-price-2xl-pointer-box-lp-line-height: .6875rem;--ods-mobile-price-2xl-pointer-box-lp-prominent: 700;--ods-mobile-price-2xl-pointer-box-font-family: "LidlFontPro";--ods-mobile-price-2xl-pointer-box-font-size: .875rem;--ods-mobile-price-2xl-pointer-box-letter-spacing: 0;--ods-mobile-price-2xl-pointer-box-line-height: .875rem;--ods-mobile-price-2xl-pointer-box-prominent: 700;--ods-mobile-price-2xl-prefix-font-family: "LidlFontCondPro";--ods-mobile-price-2xl-prefix-font-size: .75rem;--ods-mobile-price-2xl-prefix-letter-spacing: 0;--ods-mobile-price-2xl-prefix-line-height: .75rem;--ods-mobile-price-2xl-prefix-prominent: 500;--ods-mobile-price-2xl-pv-pointer-box-font-family: "LidlFontPro";--ods-mobile-price-2xl-pv-pointer-box-font-size: .75rem;--ods-mobile-price-2xl-pv-pointer-box-letter-spacing: 0;--ods-mobile-price-2xl-pv-pointer-box-line-height: .75rem;--ods-mobile-price-2xl-pv-pointer-box-prominent: 700;--ods-mobile-price-2xl-pv-price-font-family: "LidlFontPricePublicBeta";--ods-mobile-price-2xl-pv-price-font-size: 1.5625rem;--ods-mobile-price-2xl-pv-price-large-pointer: 710;--ods-mobile-price-2xl-pv-price-letter-spacing: 0;--ods-mobile-price-2xl-pv-price-line-height: 1.5625rem;--ods-mobile-price-2xl-stroke-base: 500;--ods-mobile-price-2xl-stroke-font-family: "LidlFontPro";--ods-mobile-price-2xl-stroke-font-size: .875rem;--ods-mobile-price-2xl-stroke-letter-spacing: 0;--ods-mobile-price-2xl-stroke-line-height: .875rem;--ods-mobile-price-2xl-tag-base: 500;--ods-mobile-price-2xl-tag-font-family: "LidlFontPro";--ods-mobile-price-2xl-tag-font-size: .875rem;--ods-mobile-price-2xl-tag-letter-spacing: 0;--ods-mobile-price-2xl-tag-line-height: .875rem;--ods-mobile-price-2xl-without-pointer: 700;--ods-mobile-price-2xs-double-currency-base: 500;--ods-mobile-price-2xs-double-currency-font-family: "LidlFontPro";--ods-mobile-price-2xs-double-currency-font-size: .75rem;--ods-mobile-price-2xs-double-currency-letter-spacing: 0;--ods-mobile-price-2xs-double-currency-line-height: 1rem;--ods-mobile-price-2xs-font-family: "LidlFontPricePublicBeta";--ods-mobile-price-2xs-font-size: 1.5625rem;--ods-mobile-price-2xs-footer-base: 500;--ods-mobile-price-2xs-footer-font-family: "LidlFontPro";--ods-mobile-price-2xs-footer-font-size: .75rem;--ods-mobile-price-2xs-footer-letter-spacing: 0;--ods-mobile-price-2xs-footer-line-height: 1rem;--ods-mobile-price-2xs-large-pointer: 710;--ods-mobile-price-2xs-letter-spacing: 0;--ods-mobile-price-2xs-line-height: 1.5625rem;--ods-mobile-price-2xs-pointer-box-lp-font-family: "LidlFontPro";--ods-mobile-price-2xs-pointer-box-lp-font-size: .6875rem;--ods-mobile-price-2xs-pointer-box-lp-letter-spacing: 0;--ods-mobile-price-2xs-pointer-box-lp-line-height: .6875rem;--ods-mobile-price-2xs-pointer-box-lp-prominent: 700;--ods-mobile-price-2xs-pointer-box-font-family: "LidlFontPro";--ods-mobile-price-2xs-pointer-box-font-size: .75rem;--ods-mobile-price-2xs-pointer-box-letter-spacing: 0;--ods-mobile-price-2xs-pointer-box-line-height: .75rem;--ods-mobile-price-2xs-pointer-box-prominent: 700;--ods-mobile-price-2xs-prefix-font-family: "LidlFontCondPro";--ods-mobile-price-2xs-prefix-font-size: .75rem;--ods-mobile-price-2xs-prefix-letter-spacing: 0;--ods-mobile-price-2xs-prefix-line-height: .75rem;--ods-mobile-price-2xs-prefix-prominent: 500;--ods-mobile-price-2xs-pv-pointer-box-font-family: "LidlFontPro";--ods-mobile-price-2xs-pv-pointer-box-font-size: .75rem;--ods-mobile-price-2xs-pv-pointer-box-letter-spacing: 0;--ods-mobile-price-2xs-pv-pointer-box-line-height: .75rem;--ods-mobile-price-2xs-pv-pointer-box-prominent: 700;--ods-mobile-price-2xs-pv-price-font-family: "LidlFontPricePublicBeta";--ods-mobile-price-2xs-pv-price-font-size: 1.5625rem;--ods-mobile-price-2xs-pv-price-large-pointer: 710;--ods-mobile-price-2xs-pv-price-letter-spacing: 0;--ods-mobile-price-2xs-pv-price-line-height: 1.5625rem;--ods-mobile-price-2xs-stroke-base: 500;--ods-mobile-price-2xs-stroke-font-family: "LidlFontPro";--ods-mobile-price-2xs-stroke-font-size: .75rem;--ods-mobile-price-2xs-stroke-letter-spacing: 0;--ods-mobile-price-2xs-stroke-line-height: .75rem;--ods-mobile-price-2xs-tag-base: 500;--ods-mobile-price-2xs-tag-font-family: "LidlFontPro";--ods-mobile-price-2xs-tag-font-size: .75rem;--ods-mobile-price-2xs-tag-letter-spacing: 0;--ods-mobile-price-2xs-tag-line-height: .75rem;--ods-mobile-price-2xs-without-pointer: 700;--ods-mobile-price-l-double-currency-base: 500;--ods-mobile-price-l-double-currency-font-family: "LidlFontPro";--ods-mobile-price-l-double-currency-font-size: .75rem;--ods-mobile-price-l-double-currency-letter-spacing: 0;--ods-mobile-price-l-double-currency-line-height: 1rem;--ods-mobile-price-l-font-family: "LidlFontPricePublicBeta";--ods-mobile-price-l-font-size: 2.25rem;--ods-mobile-price-l-footer-base: 500;--ods-mobile-price-l-footer-font-family: "LidlFontPro";--ods-mobile-price-l-footer-font-size: .75rem;--ods-mobile-price-l-footer-letter-spacing: 0;--ods-mobile-price-l-footer-line-height: 1rem;--ods-mobile-price-l-large-pointer: 710;--ods-mobile-price-l-letter-spacing: 0;--ods-mobile-price-l-line-height: 2.25rem;--ods-mobile-price-l-pointer-box-lp-font-family: "LidlFontPro";--ods-mobile-price-l-pointer-box-lp-font-size: .6875rem;--ods-mobile-price-l-pointer-box-lp-letter-spacing: 0;--ods-mobile-price-l-pointer-box-lp-line-height: .6875rem;--ods-mobile-price-l-pointer-box-lp-prominent: 700;--ods-mobile-price-l-pointer-box-font-family: "LidlFontPro";--ods-mobile-price-l-pointer-box-font-size: .875rem;--ods-mobile-price-l-pointer-box-letter-spacing: 0;--ods-mobile-price-l-pointer-box-line-height: .875rem;--ods-mobile-price-l-pointer-box-prominent: 700;--ods-mobile-price-l-prefix-font-family: "LidlFontCondPro";--ods-mobile-price-l-prefix-font-size: .75rem;--ods-mobile-price-l-prefix-letter-spacing: 0;--ods-mobile-price-l-prefix-line-height: .75rem;--ods-mobile-price-l-prefix-prominent: 500;--ods-mobile-price-l-pv-pointer-box-font-family: "LidlFontPro";--ods-mobile-price-l-pv-pointer-box-font-size: .75rem;--ods-mobile-price-l-pv-pointer-box-letter-spacing: 0;--ods-mobile-price-l-pv-pointer-box-line-height: .75rem;--ods-mobile-price-l-pv-pointer-box-prominent: 700;--ods-mobile-price-l-pv-price-font-family: "LidlFontPricePublicBeta";--ods-mobile-price-l-pv-price-font-size: 1.5625rem;--ods-mobile-price-l-pv-price-large-pointer: 710;--ods-mobile-price-l-pv-price-letter-spacing: 0;--ods-mobile-price-l-pv-price-line-height: 1.5625rem;--ods-mobile-price-l-stroke-base: 500;--ods-mobile-price-l-stroke-font-family: "LidlFontPro";--ods-mobile-price-l-stroke-font-size: .75rem;--ods-mobile-price-l-stroke-letter-spacing: 0;--ods-mobile-price-l-stroke-line-height: .75rem;--ods-mobile-price-l-tag-base: 500;--ods-mobile-price-l-tag-font-family: "LidlFontPro";--ods-mobile-price-l-tag-font-size: .75rem;--ods-mobile-price-l-tag-letter-spacing: 0;--ods-mobile-price-l-tag-line-height: .75rem;--ods-mobile-price-l-without-pointer: 700;--ods-mobile-price-m-double-currency-base: 500;--ods-mobile-price-m-double-currency-font-family: "LidlFontPro";--ods-mobile-price-m-double-currency-font-size: .75rem;--ods-mobile-price-m-double-currency-letter-spacing: 0;--ods-mobile-price-m-double-currency-line-height: 1rem;--ods-mobile-price-m-font-family: "LidlFontPricePublicBeta";--ods-mobile-price-m-font-size: 2rem;--ods-mobile-price-m-footer-base: 500;--ods-mobile-price-m-footer-font-family: "LidlFontPro";--ods-mobile-price-m-footer-font-size: .75rem;--ods-mobile-price-m-footer-letter-spacing: 0;--ods-mobile-price-m-footer-line-height: 1rem;--ods-mobile-price-m-large-pointer: 710;--ods-mobile-price-m-letter-spacing: 0;--ods-mobile-price-m-line-height: 2rem;--ods-mobile-price-m-pointer-box-lp-font-family: "LidlFontPro";--ods-mobile-price-m-pointer-box-lp-font-size: .6875rem;--ods-mobile-price-m-pointer-box-lp-letter-spacing: 0;--ods-mobile-price-m-pointer-box-lp-line-height: .6875rem;--ods-mobile-price-m-pointer-box-lp-prominent: 700;--ods-mobile-price-m-pointer-box-font-family: "LidlFontPro";--ods-mobile-price-m-pointer-box-font-size: .875rem;--ods-mobile-price-m-pointer-box-letter-spacing: 0;--ods-mobile-price-m-pointer-box-line-height: .875rem;--ods-mobile-price-m-pointer-box-prominent: 700;--ods-mobile-price-m-prefix-font-family: "LidlFontCondPro";--ods-mobile-price-m-prefix-font-size: .75rem;--ods-mobile-price-m-prefix-letter-spacing: 0;--ods-mobile-price-m-prefix-line-height: .75rem;--ods-mobile-price-m-prefix-prominent: 500;--ods-mobile-price-m-pv-pointer-box-font-family: "LidlFontPro";--ods-mobile-price-m-pv-pointer-box-font-size: .75rem;--ods-mobile-price-m-pv-pointer-box-letter-spacing: 0;--ods-mobile-price-m-pv-pointer-box-line-height: .75rem;--ods-mobile-price-m-pv-pointer-box-prominent: 700;--ods-mobile-price-m-pv-price-font-family: "LidlFontPricePublicBeta";--ods-mobile-price-m-pv-price-font-size: 1.5625rem;--ods-mobile-price-m-pv-price-large-pointer: 710;--ods-mobile-price-m-pv-price-letter-spacing: 0;--ods-mobile-price-m-pv-price-line-height: 1.5625rem;--ods-mobile-price-m-stroke-base: 500;--ods-mobile-price-m-stroke-font-family: "LidlFontPro";--ods-mobile-price-m-stroke-font-size: .75rem;--ods-mobile-price-m-stroke-letter-spacing: 0;--ods-mobile-price-m-stroke-line-height: .75rem;--ods-mobile-price-m-tag-base: 500;--ods-mobile-price-m-tag-font-family: "LidlFontPro";--ods-mobile-price-m-tag-font-size: .75rem;--ods-mobile-price-m-tag-letter-spacing: 0;--ods-mobile-price-m-tag-line-height: .75rem;--ods-mobile-price-m-without-pointer: 700;--ods-gap-button-layout: 1rem;--ods-gap-card-layout: 1rem;--ods-gap-content-l: .75rem;--ods-gap-content-m: .5rem;--ods-gap-content-s: .25rem;--ods-gap-content-xl: 1rem;--ods-gap-layout-l: 1rem;--ods-gap-layout-m: .5rem;--ods-gap-layout-s: .25rem;--ods-gap-none: 0rem;--ods-gap-section-desktop-divider: 2rem;--ods-gap-section-desktop-footer: 4rem;--ods-gap-section-desktop-header: 1.5rem;--ods-gap-section-mobile-divider: 1rem;--ods-gap-section-mobile-footer: 2rem;--ods-gap-section-mobile-header: 1rem;--ods-gap-small-image-layout: .5rem;--ods-gap-tooltip-layout: .75rem;--ods-minimum-width-button-primary-l: 7rem;--ods-minimum-width-button-primary-m: 5.5rem;--ods-minimum-width-button-primary-s: 4.5rem;--ods-minimum-width-button-secondary-l: 7rem;--ods-minimum-width-button-secondary-m: 5.5rem;--ods-minimum-width-button-secondary-s: 4.5rem;--ods-minimum-width-button-tertiary-l: 3.5rem;--ods-minimum-width-button-tertiary-m: 3rem;--ods-minimum-width-button-tertiary-s: 2.5rem;--ods-padding-content-2xl: 2rem;--ods-padding-content-2xs: .125rem;--ods-padding-content-l: 1rem;--ods-padding-content-m: .75rem;--ods-padding-content-s: .5rem;--ods-padding-content-xl: 1.5rem;--ods-padding-content-xs: .25rem;--ods-padding-icon-touch: .625rem;--ods-padding-indicator-horizontal: .5rem;--ods-padding-indicator-vertical: .25rem;--ods-padding-none: 0rem;--ods-padding-section-desktop: 2rem;--ods-padding-section-mobile: 1.5rem;--ods-padding-small-cards: .5rem;--ods-padding-standard: 1rem;--ods-border-width-1: .0625rem;--ods-border-width-2: .125rem;--ods-color-blue-200: #f0f7ff;--ods-color-blue-300: #c2dfff;--ods-color-blue-400: #008cd2;--ods-color-blue-500: #0050aa;--ods-color-blue-900: #002466;--ods-color-crivit-green-200: #f0fffa;--ods-color-crivit-green-300: #c2ffec;--ods-color-crivit-green-400: #00e09d;--ods-color-crivit-green-500: #00a170;--ods-color-crivit-green-900: #00704e;--ods-color-crivit-magenta-400: #935cfb;--ods-color-crivit-magenta-800: #400078;--ods-color-crivit-neutral-0: #ffffff;--ods-color-crivit-neutral-100: #e6e6e6;--ods-color-crivit-neutral-1000: #000000;--ods-color-crivit-neutral-200: #d1d1d1;--ods-color-crivit-neutral-300: #b3b3b3;--ods-color-crivit-neutral-400: #949494;--ods-color-crivit-neutral-50: #f2f2f2;--ods-color-crivit-neutral-500: #757575;--ods-color-crivit-neutral-600: #636363;--ods-color-crivit-neutral-700: #474747;--ods-color-crivit-neutral-800: #2f2f2f;--ods-color-crivit-neutral-900: #161616;--ods-color-crivit-orange-100: #ffa654;--ods-color-crivit-orange-200: #ff903e;--ods-color-crivit-orange-300: #ff7828;--ods-color-crivit-orange-400: #ff6419;--ods-color-crivit-orange-50: #ffbc6a;--ods-color-crivit-orange-500: #ff5028;--ods-color-crivit-red-200: #fff1f0;--ods-color-crivit-red-300: #ffc6c2;--ods-color-crivit-red-400: #ff6e66;--ods-color-crivit-red-500: #f62d36;--ods-color-crivit-red-900: #ac0209;--ods-color-green-200: #f0fffa;--ods-color-green-300: #c2ffec;--ods-color-green-400: #00e09d;--ods-color-green-500: #00a170;--ods-color-green-900: #00704e;--ods-color-kaufland-app-black-0: #ffffff;--ods-color-kaufland-app-black-0-0: rgb(255 255 255 / 0%);--ods-color-kaufland-app-black-200: #f5f5f5;--ods-color-kaufland-app-black-400: #dedede;--ods-color-kaufland-app-black-500: #c2c2c2;--ods-color-kaufland-app-black-600: #8e8e8e;--ods-color-kaufland-app-black-700: #747474;--ods-color-kaufland-app-black-900: #3c3c3c;--ods-color-kaufland-app-blue-50: #e6f5fb;--ods-color-kaufland-app-blue-600: #0091c4;--ods-color-kaufland-app-blue-700: #007199;--ods-color-kaufland-app-blue-fbk-50: #1da1f2;--ods-color-kaufland-app-blue-fbk-700: #4267b2;--ods-color-kaufland-app-blue-k-card-50: #a3c4e9;--ods-color-kaufland-app-blue-k-card-900: #5d9ad3;--ods-color-kaufland-app-blue-star-50: #e6effa;--ods-color-kaufland-app-blue-star-900: #064192;--ods-color-kaufland-app-green-50: #eaf7e9;--ods-color-kaufland-app-green-600: #2d9c1c;--ods-color-kaufland-app-green-700: #237916;--ods-color-kaufland-app-green-800: #195610;--ods-color-kaufland-app-green-900: #14450d;--ods-color-kaufland-app-orange-50: #fff6e6;--ods-color-kaufland-app-orange-600: #da591a;--ods-color-kaufland-app-orange-700: #bf4b13;--ods-color-kaufland-app-orange-warning-medium: #ffda7f;--ods-color-kaufland-app-red-50: #fce6e8;--ods-color-kaufland-app-red-700: #e10915;--ods-color-kaufland-app-red-900: #a0060f;--ods-color-kaufland-app-yellow-star-gold-600: #c2a35a;--ods-color-kaufland-app-yellow-treuepunkte: #fdc403;--ods-color-neutral-0: #ffffff;--ods-color-neutral-0-0: rgb(255 255 255 / 0%);--ods-color-neutral-0-15: rgb(255 255 255 / 15%);--ods-color-neutral-0-40: rgb(255 255 255 / 40%);--ods-color-neutral-0-55: rgb(255 255 255 / 55%);--ods-color-neutral-1000: #000000;--ods-color-neutral-1000-0: rgb(0 0 0 / 0%);--ods-color-neutral-1000-45: rgb(0 0 0 / 45%);--ods-color-neutral-1000-60: rgb(0 0 0 / 60%);--ods-color-neutral-1000-75: rgb(0 0 0 / 75%);--ods-color-neutral-200: #f1f2f4;--ods-color-neutral-300: #dde0e3;--ods-color-neutral-400: #8c96a1;--ods-color-neutral-500: #636d79;--ods-color-neutral-800: #1e2124;--ods-color-overlay-45: rgb(0 0 0 / 45%);--ods-color-red-200: #fff1f0;--ods-color-red-300: #ffc6c2;--ods-color-red-400: #ff6e66;--ods-color-red-500: #e60a14;--ods-color-red-900: #ad080f;--ods-color-won-crivit-500: #ff7828;--ods-color-won-crivit-600: #ff6419;--ods-color-won-esmara-500: #fff3e3;--ods-color-won-esmara-600: #ebebe9;--ods-color-won-livarno-500: #d3c3ab;--ods-color-won-livarno-600: #627362;--ods-color-won-lupilu-500: #e01970;--ods-color-won-lupilu-600: #bac81e;--ods-color-won-parkside-500: #143c28;--ods-color-won-parkside-600: #232d32;--ods-color-won-silvercrest-500: #cccccc;--ods-color-won-silvercrest-600: #000000;--ods-color-won-wine-spirits-500: #8a1538;--ods-color-yellow-200: #fffcef;--ods-color-yellow-300: #fff2a6;--ods-color-yellow-400: #ffed70;--ods-color-yellow-500: #fff000;--ods-color-yellow-600: #ffc400;--ods-color-yellow-700: #ff9500;--ods-color-yellow-900: #a84700;--ods-minimum-width-0: 0rem;--ods-minimum-width-112: 7rem;--ods-minimum-width-40: 2.5rem;--ods-minimum-width-48: 3rem;--ods-minimum-width-56: 3.5rem;--ods-minimum-width-72: 4.5rem;--ods-minimum-width-88: 5.5rem;--ods-opacity-0: 0%;--ods-opacity-12: 12%;--ods-opacity-14: 14%;--ods-opacity-15: 15%;--ods-opacity-30: 30%;--ods-opacity-4: 4%;--ods-opacity-40: 40%;--ods-opacity-45: 45%;--ods-opacity-55: 55%;--ods-opacity-60: 60%;--ods-opacity-75: 75%;--ods-opacity-8: 8%;--ods-radius-0: 0rem;--ods-radius-4: .25rem;--ods-radius-8: .5rem;--ods-radius-999: 62.4375rem;--ods-shadow-blur-12: .75rem;--ods-shadow-blur-16: 1rem;--ods-shadow-blur-4: .25rem;--ods-shadow-blur-6: .375rem;--ods-shadow-color-800-12: rgb(30 33 36 / 12%);--ods-shadow-color-800-14: rgb(30 33 36 / 14%);--ods-shadow-color-800-4: rgb(30 33 36 / 4%);--ods-shadow-color-800-8: rgb(30 33 36 / 8%);--ods-shadow-spread-0: 0rem;--ods-shadow-x-0: 0rem;--ods-shadow-y-0: 0rem;--ods-shadow-y-3: .1875rem;--ods-shadow-y-4: .25rem;--ods-shadow-y-n2: -.125rem;--ods-space-0: 0rem;--ods-space-10: .625rem;--ods-space-12: .75rem;--ods-space-14: .875rem;--ods-space-16: 1rem;--ods-space-2: .125rem;--ods-space-20: 1.25rem;--ods-space-24: 1.5rem;--ods-space-32: 2rem;--ods-space-4: .25rem;--ods-space-40: 2.5rem;--ods-space-48: 3rem;--ods-space-6: .375rem;--ods-space-64: 4rem;--ods-space-8: .5rem;--ods-space-n2: -.125rem;--ods-space-n40: -2.5rem;--ods-typography-font-family-crivit-font: "Crivit Font";--ods-typography-font-family-crivit-font-expanded: "Crivit Font Expanded";--ods-typography-font-family-kaufland: "Kaufland";--ods-typography-font-family-kaufland-roboto: "Roboto";--ods-typography-font-family-kaufland-sf-pro: "SF Pro";--ods-typography-font-family-lidl-font-cond-pro: "LidlFontCondPro";--ods-typography-font-family-lidl-font-price: "LidlFontPricePublicBeta";--ods-typography-font-family-lidl-font-pro: "LidlFontPro";--ods-typography-font-size-10: .625rem;--ods-typography-font-size-11: .6875rem;--ods-typography-font-size-12: .75rem;--ods-typography-font-size-13: .8125rem;--ods-typography-font-size-14: .875rem;--ods-typography-font-size-16: 1rem;--ods-typography-font-size-18: 1.125rem;--ods-typography-font-size-20: 1.25rem;--ods-typography-font-size-22: 1.375rem;--ods-typography-font-size-23: 1.4375rem;--ods-typography-font-size-24: 1.5rem;--ods-typography-font-size-25: 1.5625rem;--ods-typography-font-size-26: 1.625rem;--ods-typography-font-size-28: 1.75rem;--ods-typography-font-size-29: 1.8125rem;--ods-typography-font-size-32: 2rem;--ods-typography-font-size-33: 2.0625rem;--ods-typography-font-size-36: 2.25rem;--ods-typography-font-size-37: 2.3125rem;--ods-typography-font-size-38: 2.375rem;--ods-typography-font-size-41: 2.5625rem;--ods-typography-font-size-42: 2.625rem;--ods-typography-font-size-46: 2.875rem;--ods-typography-font-size-47: 2.9375rem;--ods-typography-font-size-48: 3rem;--ods-typography-font-size-52: 3.25rem;--ods-typography-font-size-58: 3.625rem;--ods-typography-font-size-60: 3.75rem;--ods-typography-font-weight-400: 400;--ods-typography-font-weight-500: 500;--ods-typography-font-weight-600: 600;--ods-typography-font-weight-700: 700;--ods-typography-font-weight-705: 705;--ods-typography-font-weight-710: 710;--ods-typography-letter-spacing-dense: .25;--ods-typography-letter-spacing-denser: .3;--ods-typography-letter-spacing-normal: 0;--ods-typography-line-height-12: .75rem;--ods-typography-line-height-16: 1rem;--ods-typography-line-height-20: 1.25rem;--ods-typography-line-height-24: 1.5rem;--ods-typography-line-height-25: 1.5625rem;--ods-typography-line-height-28: 1.75rem;--ods-typography-line-height-32: 2rem;--ods-typography-line-height-33: 2.0625rem;--ods-typography-line-height-36: 2.25rem;--ods-typography-line-height-40: 2.5rem;--ods-typography-line-height-44: 2.75rem;--ods-typography-line-height-48: 3rem;--ods-typography-line-height-52: 3.25rem;--ods-typography-line-height-60: 3.75rem;--ods-typography-line-height-64: 4rem;border-radius:62.4375rem;padding:.5rem 1rem;background-color:var(--ods-color-blue-500);border-color:#2466eb;border-width:0;color:#fff;min-width:3.3125rem;min-height:2.75rem;text-align:center;width:100%}.pca-v-button--redesign:not(:disabled){cursor:pointer}.pca-v-button--redesign:not(:disabled):focus-within,.pca-v-button--redesign:not(:disabled):focus,.pca-v-button--redesign:not(:disabled):hover,.pca-v-button--redesign:not(:disabled):active{background-color:var(--ods-color-blue-900);border-color:#1353d2;outline:none}.pca-v-button--redesign:not(:disabled):focus-within:before,.pca-v-button--redesign:not(:disabled):focus:before,.pca-v-button--redesign:not(:disabled):hover:before,.pca-v-button--redesign:not(:disabled):active:before{content:none}.pca-v-button--redesign--secondary{border:.125rem solid var(--ods-color-blue-500);background-color:transparent;color:var(--ods-color-blue-500)}.pca-v-button--redesign--secondary:not(:disabled){cursor:pointer}.pca-v-button--redesign--secondary:not(:disabled):focus-within,.pca-v-button--redesign--secondary:not(:disabled):focus,.pca-v-button--redesign--secondary:not(:disabled):hover,.pca-v-button--redesign--secondary:not(:disabled):active{background-color:transparent;color:var(--ods-color-blue-900);border-color:var(--ods-color-blue-900);outline:none}.pca-v-button--redesign--secondary:not(:disabled):focus-within:before,.pca-v-button--redesign--secondary:not(:disabled):focus:before,.pca-v-button--redesign--secondary:not(:disabled):hover:before,.pca-v-button--redesign--secondary:not(:disabled):active:before{content:none}.pca-v-button--redesign:disabled{opacity:.3;cursor:default}', '.pca-v-button{width:100%;font-family:LidlFontCondPro,Trebuchet MS,sans-serif;font-size:1.125rem;font-weight:700;line-height:1.2;text-transform:uppercase;border-radius:.125rem;border:none;padding:.875rem 1rem .8125rem;background:#0050aa;color:#fff;cursor:pointer;text-decoration:none;justify-content:center;align-items:center;display:inline-flex;font-weight:600}@media(max-width:960px){.pca-v-button{font-size:1rem}}.pca-v-button:before{background-color:#fff}.pca-v-button:hover,.pca-v-button:focus,.pca-v-button:active{box-shadow:3000px 0 #00000052 inset}.pca-v-button--secondary:not(:disabled){font-size:1.125rem;font-weight:700;line-height:1.2;text-transform:uppercase;border-radius:.125rem;border:none;display:inline-flex;padding:.875rem 1rem .8125rem;background:none;border:.0625rem solid;border-color:#0050aa;color:#0050aa;cursor:pointer}@media(max-width:960px){.pca-v-button--secondary:not(:disabled){font-size:1rem}}.pca-v-button--secondary:not(:disabled):before{background-color:#0050aa}.pca-v-button--secondary:not(:disabled):hover,.pca-v-button--secondary:not(:disabled):focus,.pca-v-button--secondary:not(:disabled):active{background:#0050aa;color:#fff;border-color:transparent;background-clip:padding-box}.pca-v-button--secondary:not(:disabled):hover:before,.pca-v-button--secondary:not(:disabled):focus:before,.pca-v-button--secondary:not(:disabled):active:before{background-color:#fff}.pca-v-button--secondary:not(:disabled):hover,.pca-v-button--secondary:not(:disabled):focus,.pca-v-button--secondary:not(:disabled):active{box-shadow:3000px 0 #00000052 inset}.pca-v-button[disabled],.pca-v-button:disabled{font-size:1.125rem;font-weight:700;line-height:1.2;text-transform:uppercase;border-radius:.125rem;border:none;display:inline-flex;padding:.875rem 1rem .8125rem;background:#0050aa;color:#fff;cursor:default;-webkit-background-clip:text;background-clip:text;opacity:.32;position:relative;color:#0050aa;cursor:not-allowed}@media(max-width:960px){.pca-v-button[disabled],.pca-v-button:disabled{font-size:1rem}}.pca-v-button[disabled]:before,.pca-v-button:disabled:before{background-color:#fff}.pca-v-button[disabled]:hover,.pca-v-button:disabled:hover,.pca-v-button[disabled]:focus,.pca-v-button:disabled:focus,.pca-v-button[disabled]:active,.pca-v-button:disabled:active{box-shadow:none}.pca-v-button[disabled]:after,.pca-v-button:disabled:after{content:"";position:absolute;inset:0;opacity:.5;z-index:-1}.pca-v-button[disabled] _:-ms-fullscreen,.pca-v-button:disabled _:-ms-fullscreen{color:#fff}.pca-v-button[disabled]:after,.pca-v-button:disabled:after{background:#0050aa;background-color:#0050aa}.pca-v-button[disabled]:before,.pca-v-button:disabled:before{background-color:#0050aa}.pca-v-button--rounded{all:unset}.pca-v-button--rounded:hover,.pca-v-button--rounded:active,.pca-v-button--rounded:focus{all:unset}.pca-v-button--rounded .pca-v-button__inner{display:flex;align-items:center;justify-content:center;cursor:pointer;min-width:.75rem;height:2.75rem;border-radius:999px;background:#0050aa;padding:0 1rem;position:relative;color:#fff}.pca-v-button--rounded .pca-v-button__inner:focus{outline:2px #0050aa solid;outline-offset:0;position:relative;box-shadow:#fff 0 0 0 4px}.pca-v-button--rounded:focus>.pca-v-button__inner{background:#1353d2}.pca-v-button--rounded:hover>.pca-v-button__inner{background:#1353d2}.pca-v-button--rounded:active>.pca-v-button__inner{background:#1353d2}.pca-v-button--transparent .pca-v-button__inner{background:transparent;color:#0050aa}.pca-v-button--transparent:focus>.pca-v-button__inner{background:transparent;color:#1353d2}.pca-v-button--transparent:hover>.pca-v-button__inner{background:transparent;color:#1353d2}.pca-v-button--transparent:active>.pca-v-button__inner{background:transparent;color:#1353d2}.pca-v-button--transparent[disabled]{opacity:.4}']]
  ]),
  _b = ["disabled", "type", "id", "title"],
  vb = Of(zo({
    __name: "TheButton",
    props: yr({
      country: {
        type: String
      },
      language: {
        type: String
      },
      quantity: {
        type: Number
      },
      erpNumber: {
        type: String
      },
      additionalServices: {
        type: String
      },
      erpNumbers: {
        type: String
      },
      cartId: {
        type: String
      },
      elementId: {
        type: String
      },
      elementTitle: {
        type: String
      },
      dataLayerAttrs: {
        type: String
      },
      disabled: {
        type: Boolean
      },
      primary: {
        type: Boolean
      },
      preventSuccessMessage: {
        type: Boolean
      },
      clearInitial: {
        type: String
      }
    }, {
      ...pb(),
      additionalServices: "[]",
      cartId: void 0,
      dataLayerAttrs: "{}",
      disabled: !1,
      primary: !1,
      elementId: "addToCart",
      elementTitle: "",
      preventSuccessMessage: !1
    }),
    setup(e) {
      const {
        t: t,
        te: o
      } = kp(), {
        getEnvironment: r
      } = kn(), s = e, {
        isLoading: i,
        withLoading: n
      } = vm(), {
        withDebounce: a
      } = rm(), {
        isABTestVariantActive: l
      } = (() => {
        const e = e => {
          const t = window?.[e];
          return t && "string" == typeof t && Object.values(tm)
            .includes(t) ? t : tm.DEFAULT
        };
        return {
          getABTestVariant: e,
          isABTestVariantActive: (t, o) => e(t) === o
        }
      })(), c = {
        country: s.country,
        language: s.language,
        env: r()
      }, {
        emitCartChangeEvent: d,
        emitCartQuantityChangedEvent: p
      } = gm(c), {
        basketAddItem: u
      } = km(c), f = At(), m = si(() => (!s.erpNumber || !s.quantity) && !!s.erpNumbers), b = si(() => {
        try {
          return s.erpNumber && s.quantity ? [s.erpNumber] : JSON.parse(s.erpNumbers)
            .map(e => String(e))
        } catch (q_) {
          return console.error("Error parsing erpNumbers", q_), []
        }
      }), g = si(() => {
        try {
          return JSON.parse(s.additionalServices)
        } catch (q_) {
          return []
        }
      }), _ = si(() => i.value || Tf(s.disabled)), v = () => {
        a(n(async () => {
          let {
            ok: e,
            payload: r,
            message: i,
            addedAmount: n
          } = await (async () => {
            const e = s.cartId ?? void 0;
            if (m.value) {
              const t = void 0;
              return await db({
                country: s.country,
                language: s.language,
                cartId: e,
                customerNumber: t,
                params: b.value.map(e => ({
                  erpNumber: e,
                  quantity: s.quantity ?? 1
                }))
              })
            }
            return await db({
              country: s.country,
              language: s.language,
              customerNumber: void 0,
              params: [{
                erpNumber: s.erpNumber,
                quantity: s.quantity,
                additionalServices: g.value
              }],
              cartId: xn(ib) ?? ""
            })
          })();
          const a = n ?? s.quantity ?? 1;
          e ? (a < (s.quantity ?? 1) && (i = ab.quantityRestricted), ub(rb, {
            success: !0,
            errorcode: i.eventCode ?? void 0,
            addedAmount: a,
            cart: r
          }), p({
            erpNumber: Number.parseInt(b.value[0] ?? "0", 10),
            erpNumbers: b.value?.map(e => Number.parseInt(e, 10)),
            quantity: s.quantity,
            payload: r
          }), d(r), u({
            cart: r,
            cartItems: r?.cartItems?.filter(e => b.value.includes(e.erpNumber)),
            quantityAdded: a
          })) : ub(rb, {
            success: !1,
            errorcode: i.eventCode,
            addedAmount: 0,
            cart: void 0
          }), e ? (!Tf(s.preventSuccessMessage) && l(em.Add2CartOverlay, tm.DEFAULT) || i.level?.toLowerCase() !== Wf.Success?.toLowerCase()) && ub(ob, {
            level: Wf.Success,
            message: t(i.i18nKey, {
              quantity: s.quantity,
              name: r?.cartItems?.find(e => e.erpNumber === b.value[0])
                ?.name,
              addedAmount: a
            }),
            headline: "",
            type: "multiline"
          }) : ub(ob, {
            level: $f(i.level),
            message: o(i.i18nKey) ? t(i.i18nKey, {
              quantity: s.quantity,
              name: r?.cartItems?.find(e => e.erpNumber === b.value[0])
                ?.name,
              addedAmount: a
            }) : i.defaultMessage ?? "",
            headline: "",
            type: "multiline"
          })
        }), 1e3)()
      }, y = () => {
        window.location.search.includes("salesChannel=") ? a(() => {
          p({
            erpNumber: Number.parseInt(b.value[0] ?? "0", 10),
            erpNumbers: b.value?.map(e => Number.parseInt(e, 10)),
            quantity: s.quantity
          })
        }, 1e3)() : v()
      };
      return Zo(async () => {
        const {
          resetStyles: e,
          hostNode: t
        } = _m(f), {
          clearInitialAttributes: o
        } = fb(t);
        e(), o()
      }), (e, o) => (ks(), As("pca-v-button", {
        onClick: y,
        disabled: _.value,
        type: Ot(Tf)(s.primary) ? Ot(hb)
          .Primary : Ot(hb)
          .Secondary,
        id: s.elementId,
        title: s.elementTitle,
        ref_key: "buttonTemplateEl",
        ref: f
      }, [pr(e.$slots, "default", {}, () => [Ds(Z(Ot(t)("widgets.addToCartButton.label")), 1)])], 8, _b))
    }
  }), [
    ["styles", ['.pca-the-button--redesign{font-family:var(--ods-typography-font-family-primary, "LidlFontPro");font-size:var(--ods-mobile-body-tight-font-size, 1rem);font-weight:var(--ods-typography-font-weight-prominent, 600);line-height:var(--ods-mobile-body-tight-line-height, 1.25rem);letter-spacing:var(--ods-mobile-body-tight-letter-spacing, 0)}@media(min-width:90rem){.pca-the-button--redesign{font-size:var(--ods-desktop-body-tight-font-size, 1.125rem);line-height:var(--ods-desktop-body-tight-line-height, 1.5rem);letter-spacing:var(--ods-desktop-body-tight-letter-spacing, 0)}}.pca-the-button--redesign:focus-within{position:relative;outline:solid .125rem var(--ods-component-browser-focus-border-color-inner, #0050aa);outline-offset:.125rem}.pca-the-button--redesign:focus-within:before{content:"";display:block;width:100%;height:100%;position:absolute;outline:solid .125rem var(--ods-component-browser-focus-border-color-outer, #ffffff);outline-offset:.25rem;pointer-events:none}.pca-the-button--redesign:focus-visible{position:relative}.pca-the-button--redesign:focus-visible:before{content:"";display:block;width:100%;height:100%;position:absolute;outline:solid .125rem var(--ods-component-browser-focus-border-color-outer, #ffffff);outline-offset:.25rem;pointer-events:none;left:0;top:0}.pca-the-button--redesign:focus-visible:after{content:"";display:block;width:100%;height:100%;position:absolute;outline:solid .125rem var(--ods-component-browser-focus-border-color-inner, #0050aa);outline-offset:.125rem;pointer-events:none;left:0;top:0}.pca-the-button--redesign{--ods-ad-tag-font-size: .6875rem;--ods-ad-tag-letter-spacing: .3;--ods-ad-tag-line-height: 1rem;--ods-desktop-body-footnote-base: 500;--ods-desktop-body-footnote-font-family: "LidlFontPro";--ods-desktop-body-footnote-font-size: .8125rem;--ods-desktop-body-footnote-letter-spacing: .25;--ods-desktop-body-footnote-line-height: 1.25rem;--ods-desktop-body-footnote-prominent: 600;--ods-desktop-body-normal-base: 500;--ods-desktop-body-normal-font-family: "LidlFontPro";--ods-desktop-body-normal-font-size: 1.125rem;--ods-desktop-body-normal-letter-spacing: 0;--ods-desktop-body-normal-line-height: 1.75rem;--ods-desktop-body-normal-prominent: 600;--ods-desktop-body-small-1-base: 500;--ods-desktop-body-small-1-font-family: "LidlFontPro";--ods-desktop-body-small-1-font-size: 1rem;--ods-desktop-body-small-1-letter-spacing: 0;--ods-desktop-body-small-1-line-height: 1.5rem;--ods-desktop-body-small-1-prominent: 600;--ods-desktop-body-small-2-base: 500;--ods-desktop-body-small-2-font-family: "LidlFontPro";--ods-desktop-body-small-2-font-size: .875rem;--ods-desktop-body-small-2-letter-spacing: .25;--ods-desktop-body-small-2-line-height: 1.25rem;--ods-desktop-body-small-2-prominent: 600;--ods-desktop-body-tight-base: 500;--ods-desktop-body-tight-font-family: "LidlFontPro";--ods-desktop-body-tight-font-size: 1.125rem;--ods-desktop-body-tight-letter-spacing: 0;--ods-desktop-body-tight-line-height: 1.5rem;--ods-desktop-body-tight-prominent: 600;--ods-desktop-call-to-action-large-font-size: 1.25rem;--ods-desktop-call-to-action-large-letter-spacing: 0;--ods-desktop-call-to-action-large-line-height: 1.75rem;--ods-desktop-call-to-action-medium-font-size: 1.125rem;--ods-desktop-call-to-action-medium-letter-spacing: 0;--ods-desktop-call-to-action-medium-line-height: 1.5rem;--ods-desktop-call-to-action-small-font-size: .875rem;--ods-desktop-call-to-action-small-letter-spacing: .25;--ods-desktop-call-to-action-small-line-height: 1.25rem;--ods-desktop-display-1-base: 500;--ods-desktop-display-1-font-family: "LidlFontPro";--ods-desktop-display-1-font-size: 3.625rem;--ods-desktop-display-1-letter-spacing: 0;--ods-desktop-display-1-line-height: 4rem;--ods-desktop-display-1-strong: 700;--ods-desktop-display-2-base: 500;--ods-desktop-display-2-font-family: "LidlFontPro";--ods-desktop-display-2-font-size: 3.25rem;--ods-desktop-display-2-letter-spacing: 0;--ods-desktop-display-2-line-height: 3.75rem;--ods-desktop-display-2-strong: 700;--ods-desktop-display-3-base: 500;--ods-desktop-display-3-font-family: "LidlFontPro";--ods-desktop-display-3-font-size: 2.875rem;--ods-desktop-display-3-letter-spacing: 0;--ods-desktop-display-3-line-height: 3.25rem;--ods-desktop-display-3-strong: 700;--ods-desktop-display-4-base: 500;--ods-desktop-display-4-font-family: "LidlFontPro";--ods-desktop-display-4-font-size: 2.5625rem;--ods-desktop-display-4-letter-spacing: 0;--ods-desktop-display-4-line-height: 3rem;--ods-desktop-display-4-strong: 700;--ods-desktop-display-5-base: 500;--ods-desktop-display-5-font-family: "LidlFontPro";--ods-desktop-display-5-font-size: 2.3125rem;--ods-desktop-display-5-letter-spacing: 0;--ods-desktop-display-5-line-height: 2.75rem;--ods-desktop-display-5-strong: 700;--ods-desktop-headline-1-base: 500;--ods-desktop-headline-1-font-family: "LidlFontPro";--ods-desktop-headline-1-font-size: 2rem;--ods-desktop-headline-1-letter-spacing: 0;--ods-desktop-headline-1-line-height: 2.5rem;--ods-desktop-headline-1-prominent: 600;--ods-desktop-headline-2-base: 500;--ods-desktop-headline-2-font-family: "LidlFontPro";--ods-desktop-headline-2-font-size: 1.8125rem;--ods-desktop-headline-2-letter-spacing: 0;--ods-desktop-headline-2-line-height: 2.25rem;--ods-desktop-headline-2-prominent: 600;--ods-desktop-headline-3-base: 500;--ods-desktop-headline-3-font-family: "LidlFontPro";--ods-desktop-headline-3-font-size: 1.625rem;--ods-desktop-headline-3-letter-spacing: 0;--ods-desktop-headline-3-line-height: 2rem;--ods-desktop-headline-3-prominent: 600;--ods-desktop-headline-4-base: 500;--ods-desktop-headline-4-font-family: "LidlFontPro";--ods-desktop-headline-4-font-size: 1.4375rem;--ods-desktop-headline-4-letter-spacing: 0;--ods-desktop-headline-4-line-height: 2rem;--ods-desktop-headline-4-prominent: 600;--ods-desktop-headline-5-base: 500;--ods-desktop-headline-5-font-family: "LidlFontPro";--ods-desktop-headline-5-font-size: 1.25rem;--ods-desktop-headline-5-letter-spacing: 0;--ods-desktop-headline-5-line-height: 1.75rem;--ods-desktop-headline-5-prominent: 600;--ods-desktop-headline-6-base: 500;--ods-desktop-headline-6-font-family: "LidlFontPro";--ods-desktop-headline-6-font-size: 1.125rem;--ods-desktop-headline-6-letter-spacing: 0;--ods-desktop-headline-6-line-height: 1.5rem;--ods-desktop-headline-6-prominent: 600;--ods-desktop-price-2xl-double-currency-base: 500;--ods-desktop-price-2xl-double-currency-font-family: "LidlFontPro";--ods-desktop-price-2xl-double-currency-font-size: .75rem;--ods-desktop-price-2xl-double-currency-letter-spacing: 0;--ods-desktop-price-2xl-double-currency-line-height: 1rem;--ods-desktop-price-2xl-font-family: "LidlFontPricePublicBeta";--ods-desktop-price-2xl-font-size: 3.75rem;--ods-desktop-price-2xl-footer-base: 500;--ods-desktop-price-2xl-footer-font-family: "LidlFontPro";--ods-desktop-price-2xl-footer-font-size: .75rem;--ods-desktop-price-2xl-footer-letter-spacing: 0;--ods-desktop-price-2xl-footer-line-height: 1rem;--ods-desktop-price-2xl-large-pointer: 710;--ods-desktop-price-2xl-letter-spacing: 0;--ods-desktop-price-2xl-line-height: 3.75rem;--ods-desktop-price-2xl-pointer-box-lp-font-family: "LidlFontPro";--ods-desktop-price-2xl-pointer-box-lp-font-size: .6875rem;--ods-desktop-price-2xl-pointer-box-lp-letter-spacing: 0;--ods-desktop-price-2xl-pointer-box-lp-line-height: .6875rem;--ods-desktop-price-2xl-pointer-box-lp-prominent: 700;--ods-desktop-price-2xl-pointer-box-font-family: "LidlFontPro";--ods-desktop-price-2xl-pointer-box-font-size: 1rem;--ods-desktop-price-2xl-pointer-box-letter-spacing: 0;--ods-desktop-price-2xl-pointer-box-line-height: 1rem;--ods-desktop-price-2xl-pointer-box-prominent: 700;--ods-desktop-price-2xl-prefix-font-family: "LidlFontCondPro";--ods-desktop-price-2xl-prefix-font-size: .75rem;--ods-desktop-price-2xl-prefix-letter-spacing: 0;--ods-desktop-price-2xl-prefix-line-height: .75rem;--ods-desktop-price-2xl-prefix-prominent: 500;--ods-desktop-price-2xl-pv-pointer-box-font-family: "LidlFontPro";--ods-desktop-price-2xl-pv-pointer-box-font-size: .75rem;--ods-desktop-price-2xl-pv-pointer-box-letter-spacing: 0;--ods-desktop-price-2xl-pv-pointer-box-line-height: .75rem;--ods-desktop-price-2xl-pv-pointer-box-prominent: 700;--ods-desktop-price-2xl-pv-price-font-family: "LidlFontPricePublicBeta";--ods-desktop-price-2xl-pv-price-font-size: 1.5625rem;--ods-desktop-price-2xl-pv-price-large-pointer: 710;--ods-desktop-price-2xl-pv-price-letter-spacing: 0;--ods-desktop-price-2xl-pv-price-line-height: 1.5625rem;--ods-desktop-price-2xl-stroke-base: 500;--ods-desktop-price-2xl-stroke-font-family: "LidlFontPro";--ods-desktop-price-2xl-stroke-font-size: 1rem;--ods-desktop-price-2xl-stroke-letter-spacing: 0;--ods-desktop-price-2xl-stroke-line-height: 1rem;--ods-desktop-price-2xl-tag-base: 500;--ods-desktop-price-2xl-tag-font-family: "LidlFontPro";--ods-desktop-price-2xl-tag-font-size: 1rem;--ods-desktop-price-2xl-tag-letter-spacing: 0;--ods-desktop-price-2xl-tag-line-height: 1rem;--ods-desktop-price-2xl-without-pointer: 700;--ods-desktop-price-2xs-double-currency-base: 500;--ods-desktop-price-2xs-double-currency-font-family: "LidlFontPro";--ods-desktop-price-2xs-double-currency-font-size: .75rem;--ods-desktop-price-2xs-double-currency-letter-spacing: 0;--ods-desktop-price-2xs-double-currency-line-height: 1rem;--ods-desktop-price-2xs-font-family: "LidlFontPricePublicBeta";--ods-desktop-price-2xs-font-size: 2.0625rem;--ods-desktop-price-2xs-footer-base: 500;--ods-desktop-price-2xs-footer-font-family: "LidlFontPro";--ods-desktop-price-2xs-footer-font-size: .75rem;--ods-desktop-price-2xs-footer-letter-spacing: 0;--ods-desktop-price-2xs-footer-line-height: 1rem;--ods-desktop-price-2xs-large-pointer: 710;--ods-desktop-price-2xs-letter-spacing: 0;--ods-desktop-price-2xs-line-height: 2.0625rem;--ods-desktop-price-2xs-pointer-box-lp-font-family: "LidlFontPro";--ods-desktop-price-2xs-pointer-box-lp-font-size: .6875rem;--ods-desktop-price-2xs-pointer-box-lp-letter-spacing: 0;--ods-desktop-price-2xs-pointer-box-lp-line-height: .6875rem;--ods-desktop-price-2xs-pointer-box-lp-prominent: 700;--ods-desktop-price-2xs-pointer-box-font-family: "LidlFontPro";--ods-desktop-price-2xs-pointer-box-font-size: .875rem;--ods-desktop-price-2xs-pointer-box-letter-spacing: 0;--ods-desktop-price-2xs-pointer-box-line-height: .875rem;--ods-desktop-price-2xs-pointer-box-prominent: 700;--ods-desktop-price-2xs-prefix-font-family: "LidlFontCondPro";--ods-desktop-price-2xs-prefix-font-size: .75rem;--ods-desktop-price-2xs-prefix-letter-spacing: 0;--ods-desktop-price-2xs-prefix-line-height: .75rem;--ods-desktop-price-2xs-prefix-prominent: 500;--ods-desktop-price-2xs-pv-pointer-box-font-family: "LidlFontPro";--ods-desktop-price-2xs-pv-pointer-box-font-size: .75rem;--ods-desktop-price-2xs-pv-pointer-box-letter-spacing: 0;--ods-desktop-price-2xs-pv-pointer-box-line-height: .75rem;--ods-desktop-price-2xs-pv-pointer-box-prominent: 700;--ods-desktop-price-2xs-pv-price-font-family: "LidlFontPricePublicBeta";--ods-desktop-price-2xs-pv-price-font-size: 1.5625rem;--ods-desktop-price-2xs-pv-price-large-pointer: 710;--ods-desktop-price-2xs-pv-price-letter-spacing: 0;--ods-desktop-price-2xs-pv-price-line-height: 1.5625rem;--ods-desktop-price-2xs-stroke-base: 500;--ods-desktop-price-2xs-stroke-font-family: "LidlFontPro";--ods-desktop-price-2xs-stroke-font-size: .75rem;--ods-desktop-price-2xs-stroke-letter-spacing: 0;--ods-desktop-price-2xs-stroke-line-height: .75rem;--ods-desktop-price-2xs-tag-base: 500;--ods-desktop-price-2xs-tag-font-family: "LidlFontPro";--ods-desktop-price-2xs-tag-font-size: .75rem;--ods-desktop-price-2xs-tag-letter-spacing: 0;--ods-desktop-price-2xs-tag-line-height: .75rem;--ods-desktop-price-2xs-without-pointer: 700;--ods-desktop-price-l-double-currency-base: 500;--ods-desktop-price-l-double-currency-font-family: "LidlFontPro";--ods-desktop-price-l-double-currency-font-size: .75rem;--ods-desktop-price-l-double-currency-letter-spacing: 0;--ods-desktop-price-l-double-currency-line-height: 1rem;--ods-desktop-price-l-font-family: "LidlFontPricePublicBeta";--ods-desktop-price-l-font-size: 3rem;--ods-desktop-price-l-footer-base: 500;--ods-desktop-price-l-footer-font-family: "LidlFontPro";--ods-desktop-price-l-footer-font-size: .75rem;--ods-desktop-price-l-footer-letter-spacing: 0;--ods-desktop-price-l-footer-line-height: 1rem;--ods-desktop-price-l-large-pointer: 710;--ods-desktop-price-l-letter-spacing: 0;--ods-desktop-price-l-line-height: 3rem;--ods-desktop-price-l-pointer-box-lp-font-family: "LidlFontPro";--ods-desktop-price-l-pointer-box-lp-font-size: .6875rem;--ods-desktop-price-l-pointer-box-lp-letter-spacing: 0;--ods-desktop-price-l-pointer-box-lp-line-height: .6875rem;--ods-desktop-price-l-pointer-box-lp-prominent: 700;--ods-desktop-price-l-pointer-box-font-family: "LidlFontPro";--ods-desktop-price-l-pointer-box-font-size: .875rem;--ods-desktop-price-l-pointer-box-letter-spacing: 0;--ods-desktop-price-l-pointer-box-line-height: .875rem;--ods-desktop-price-l-pointer-box-prominent: 700;--ods-desktop-price-l-prefix-font-family: "LidlFontCondPro";--ods-desktop-price-l-prefix-font-size: .75rem;--ods-desktop-price-l-prefix-letter-spacing: 0;--ods-desktop-price-l-prefix-line-height: .75rem;--ods-desktop-price-l-prefix-prominent: 500;--ods-desktop-price-l-pv-pointer-box-font-family: "LidlFontPro";--ods-desktop-price-l-pv-pointer-box-font-size: .75rem;--ods-desktop-price-l-pv-pointer-box-letter-spacing: 0;--ods-desktop-price-l-pv-pointer-box-line-height: .75rem;--ods-desktop-price-l-pv-pointer-box-prominent: 700;--ods-desktop-price-l-pv-price-font-family: "LidlFontPricePublicBeta";--ods-desktop-price-l-pv-price-font-size: 1.5625rem;--ods-desktop-price-l-pv-price-large-pointer: 710;--ods-desktop-price-l-pv-price-letter-spacing: 0;--ods-desktop-price-l-pv-price-line-height: 1.5625rem;--ods-desktop-price-l-stroke-base: 500;--ods-desktop-price-l-stroke-font-family: "LidlFontPro";--ods-desktop-price-l-stroke-font-size: .875rem;--ods-desktop-price-l-stroke-letter-spacing: 0;--ods-desktop-price-l-stroke-line-height: .875rem;--ods-desktop-price-l-tag-base: 500;--ods-desktop-price-l-tag-font-family: "LidlFontPro";--ods-desktop-price-l-tag-font-size: .875rem;--ods-desktop-price-l-tag-letter-spacing: 0;--ods-desktop-price-l-tag-line-height: .875rem;--ods-desktop-price-l-without-pointer: 700;--ods-desktop-price-m-double-currency-base: 500;--ods-desktop-price-m-double-currency-font-family: "LidlFontPro";--ods-desktop-price-m-double-currency-font-size: .75rem;--ods-desktop-price-m-double-currency-letter-spacing: 0;--ods-desktop-price-m-double-currency-line-height: 1rem;--ods-desktop-price-m-font-family: "LidlFontPricePublicBeta";--ods-desktop-price-m-font-size: 2.625rem;--ods-desktop-price-m-footer-base: 500;--ods-desktop-price-m-footer-font-family: "LidlFontPro";--ods-desktop-price-m-footer-font-size: .75rem;--ods-desktop-price-m-footer-letter-spacing: 0;--ods-desktop-price-m-footer-line-height: 1rem;--ods-desktop-price-m-large-pointer: 710;--ods-desktop-price-m-letter-spacing: 0;--ods-desktop-price-m-line-height: 2.625rem;--ods-desktop-price-m-pointer-box-lp-font-family: "LidlFontPro";--ods-desktop-price-m-pointer-box-lp-font-size: .6875rem;--ods-desktop-price-m-pointer-box-lp-letter-spacing: 0;--ods-desktop-price-m-pointer-box-lp-line-height: .6875rem;--ods-desktop-price-m-pointer-box-lp-prominent: 700;--ods-desktop-price-m-pointer-box-font-family: "LidlFontPro";--ods-desktop-price-m-pointer-box-font-size: .875rem;--ods-desktop-price-m-pointer-box-letter-spacing: 0;--ods-desktop-price-m-pointer-box-line-height: .875rem;--ods-desktop-price-m-pointer-box-prominent: 700;--ods-desktop-price-m-prefix-font-family: "LidlFontCondPro";--ods-desktop-price-m-prefix-font-size: .75rem;--ods-desktop-price-m-prefix-letter-spacing: 0;--ods-desktop-price-m-prefix-line-height: .75rem;--ods-desktop-price-m-prefix-prominent: 500;--ods-desktop-price-m-pv-pointer-box-font-family: "LidlFontPro";--ods-desktop-price-m-pv-pointer-box-font-size: .75rem;--ods-desktop-price-m-pv-pointer-box-letter-spacing: 0;--ods-desktop-price-m-pv-pointer-box-line-height: .75rem;--ods-desktop-price-m-pv-pointer-box-prominent: 700;--ods-desktop-price-m-pv-price-font-family: "LidlFontPricePublicBeta";--ods-desktop-price-m-pv-price-font-size: 1.5625rem;--ods-desktop-price-m-pv-price-large-pointer: 710;--ods-desktop-price-m-pv-price-letter-spacing: 0;--ods-desktop-price-m-pv-price-line-height: 1.5625rem;--ods-desktop-price-m-stroke-base: 500;--ods-desktop-price-m-stroke-font-family: "LidlFontPro";--ods-desktop-price-m-stroke-font-size: .875rem;--ods-desktop-price-m-stroke-letter-spacing: 0;--ods-desktop-price-m-stroke-line-height: .875rem;--ods-desktop-price-m-tag-base: 500;--ods-desktop-price-m-tag-font-family: "LidlFontPro";--ods-desktop-price-m-tag-font-size: .875rem;--ods-desktop-price-m-tag-letter-spacing: 0;--ods-desktop-price-m-tag-line-height: .875rem;--ods-desktop-price-m-without-pointer: 700;--ods-indication-font-family: "LidlFontPro";--ods-indication-font-size: .6875rem;--ods-indication-letter-spacing: .3;--ods-indication-line-height: 1rem;--ods-indication-prominent: 600;--ods-mobile-body-footnote-base: 500;--ods-mobile-body-footnote-font-family: "LidlFontPro";--ods-mobile-body-footnote-font-size: .6875rem;--ods-mobile-body-footnote-letter-spacing: .3;--ods-mobile-body-footnote-line-height: 1rem;--ods-mobile-body-footnote-prominent: 600;--ods-mobile-body-normal-base: 500;--ods-mobile-body-normal-font-family: "LidlFontPro";--ods-mobile-body-normal-font-size: 1rem;--ods-mobile-body-normal-letter-spacing: 0;--ods-mobile-body-normal-line-height: 1.5rem;--ods-mobile-body-normal-prominent: 600;--ods-mobile-body-small-1-base: 500;--ods-mobile-body-small-1-font-family: "LidlFontPro";--ods-mobile-body-small-1-font-size: .875rem;--ods-mobile-body-small-1-letter-spacing: 0;--ods-mobile-body-small-1-line-height: 1.25rem;--ods-mobile-body-small-1-prominent: 600;--ods-mobile-body-small-2-base: 500;--ods-mobile-body-small-2-font-family: "LidlFontPro";--ods-mobile-body-small-2-font-size: .8125rem;--ods-mobile-body-small-2-letter-spacing: .25;--ods-mobile-body-small-2-line-height: 1.25rem;--ods-mobile-body-small-2-prominent: 600;--ods-mobile-body-tight-base: 500;--ods-mobile-body-tight-font-family: "LidlFontPro";--ods-mobile-body-tight-font-size: 1rem;--ods-mobile-body-tight-letter-spacing: 0;--ods-mobile-body-tight-line-height: 1.25rem;--ods-mobile-body-tight-prominent: 600;--ods-mobile-call-to-action-large-font-size: 1rem;--ods-mobile-call-to-action-large-letter-spacing: 0;--ods-mobile-call-to-action-large-line-height: 1.25rem;--ods-mobile-call-to-action-medium-font-size: 1rem;--ods-mobile-call-to-action-medium-letter-spacing: 0;--ods-mobile-call-to-action-medium-line-height: 1.25rem;--ods-mobile-call-to-action-small-font-size: .8125rem;--ods-mobile-call-to-action-small-letter-spacing: .25;--ods-mobile-call-to-action-small-line-height: 1.25rem;--ods-mobile-display-1-base: 500;--ods-mobile-display-1-font-family: "LidlFontPro";--ods-mobile-display-1-font-size: 2.3125rem;--ods-mobile-display-1-letter-spacing: 0;--ods-mobile-display-1-line-height: 2.75rem;--ods-mobile-display-1-prominent: 700;--ods-mobile-display-2-base: 500;--ods-mobile-display-2-font-family: "LidlFontPro";--ods-mobile-display-2-font-size: 2rem;--ods-mobile-display-2-letter-spacing: 0;--ods-mobile-display-2-line-height: 2.5rem;--ods-mobile-display-2-strong: 700;--ods-mobile-display-3-base: 500;--ods-mobile-display-3-font-family: "LidlFontPro";--ods-mobile-display-3-font-size: 1.8125rem;--ods-mobile-display-3-letter-spacing: 0;--ods-mobile-display-3-line-height: 2.25rem;--ods-mobile-display-3-strong: 700;--ods-mobile-display-4-base: 500;--ods-mobile-display-4-font-family: "LidlFontPro";--ods-mobile-display-4-font-size: 1.625rem;--ods-mobile-display-4-letter-spacing: 0;--ods-mobile-display-4-line-height: 2rem;--ods-mobile-display-4-strong: 700;--ods-mobile-display-5-base: 500;--ods-mobile-display-5-font-family: "LidlFontPro";--ods-mobile-display-5-font-size: 1.4375rem;--ods-mobile-display-5-letter-spacing: 0;--ods-mobile-display-5-line-height: 2rem;--ods-mobile-display-5-strong: 700;--ods-mobile-headline-1-base: 500;--ods-mobile-headline-1-font-family: "LidlFontPro";--ods-mobile-headline-1-font-size: 1.8125rem;--ods-mobile-headline-1-letter-spacing: 0;--ods-mobile-headline-1-line-height: 2.25rem;--ods-mobile-headline-1-prominent: 600;--ods-mobile-headline-2-base: 500;--ods-mobile-headline-2-font-family: "LidlFontPro";--ods-mobile-headline-2-font-size: 1.625rem;--ods-mobile-headline-2-letter-spacing: 0;--ods-mobile-headline-2-line-height: 2rem;--ods-mobile-headline-2-prominent: 600;--ods-mobile-headline-3-base: 500;--ods-mobile-headline-3-font-family: "LidlFontPro";--ods-mobile-headline-3-font-size: 1.4375rem;--ods-mobile-headline-3-letter-spacing: 0;--ods-mobile-headline-3-line-height: 2rem;--ods-mobile-headline-3-prominent: 600;--ods-mobile-headline-4-base: 500;--ods-mobile-headline-4-font-family: "LidlFontPro";--ods-mobile-headline-4-font-size: 1.25rem;--ods-mobile-headline-4-letter-spacing: 0;--ods-mobile-headline-4-line-height: 1.75rem;--ods-mobile-headline-4-prominent: 600;--ods-mobile-headline-5-base: 500;--ods-mobile-headline-5-font-family: "LidlFontPro";--ods-mobile-headline-5-font-size: 1.125rem;--ods-mobile-headline-5-letter-spacing: 0;--ods-mobile-headline-5-line-height: 1.5rem;--ods-mobile-headline-5-prominent: 600;--ods-mobile-headline-6-base: 500;--ods-mobile-headline-6-font-family: "LidlFontPro";--ods-mobile-headline-6-font-size: 1rem;--ods-mobile-headline-6-letter-spacing: 0;--ods-mobile-headline-6-line-height: 1.25rem;--ods-mobile-headline-6-prominent: 600;--ods-mobile-price-2xl-double-currency-base: 500;--ods-mobile-price-2xl-double-currency-font-family: "LidlFontPro";--ods-mobile-price-2xl-double-currency-font-size: .75rem;--ods-mobile-price-2xl-double-currency-letter-spacing: 0;--ods-mobile-price-2xl-double-currency-line-height: 1rem;--ods-mobile-price-2xl-font-family: "LidlFontPricePublicBeta";--ods-mobile-price-2xl-font-size: 2.875rem;--ods-mobile-price-2xl-footer-base: 500;--ods-mobile-price-2xl-footer-font-family: "LidlFontPro";--ods-mobile-price-2xl-footer-font-size: .75rem;--ods-mobile-price-2xl-footer-letter-spacing: 0;--ods-mobile-price-2xl-footer-line-height: 1rem;--ods-mobile-price-2xl-large-pointer: 710;--ods-mobile-price-2xl-letter-spacing: 0;--ods-mobile-price-2xl-line-height: 2.875rem;--ods-mobile-price-2xl-pointer-box-lp-font-family: "LidlFontPro";--ods-mobile-price-2xl-pointer-box-lp-font-size: .6875rem;--ods-mobile-price-2xl-pointer-box-lp-letter-spacing: 0;--ods-mobile-price-2xl-pointer-box-lp-line-height: .6875rem;--ods-mobile-price-2xl-pointer-box-lp-prominent: 700;--ods-mobile-price-2xl-pointer-box-font-family: "LidlFontPro";--ods-mobile-price-2xl-pointer-box-font-size: .875rem;--ods-mobile-price-2xl-pointer-box-letter-spacing: 0;--ods-mobile-price-2xl-pointer-box-line-height: .875rem;--ods-mobile-price-2xl-pointer-box-prominent: 700;--ods-mobile-price-2xl-prefix-font-family: "LidlFontCondPro";--ods-mobile-price-2xl-prefix-font-size: .75rem;--ods-mobile-price-2xl-prefix-letter-spacing: 0;--ods-mobile-price-2xl-prefix-line-height: .75rem;--ods-mobile-price-2xl-prefix-prominent: 500;--ods-mobile-price-2xl-pv-pointer-box-font-family: "LidlFontPro";--ods-mobile-price-2xl-pv-pointer-box-font-size: .75rem;--ods-mobile-price-2xl-pv-pointer-box-letter-spacing: 0;--ods-mobile-price-2xl-pv-pointer-box-line-height: .75rem;--ods-mobile-price-2xl-pv-pointer-box-prominent: 700;--ods-mobile-price-2xl-pv-price-font-family: "LidlFontPricePublicBeta";--ods-mobile-price-2xl-pv-price-font-size: 1.5625rem;--ods-mobile-price-2xl-pv-price-large-pointer: 710;--ods-mobile-price-2xl-pv-price-letter-spacing: 0;--ods-mobile-price-2xl-pv-price-line-height: 1.5625rem;--ods-mobile-price-2xl-stroke-base: 500;--ods-mobile-price-2xl-stroke-font-family: "LidlFontPro";--ods-mobile-price-2xl-stroke-font-size: .875rem;--ods-mobile-price-2xl-stroke-letter-spacing: 0;--ods-mobile-price-2xl-stroke-line-height: .875rem;--ods-mobile-price-2xl-tag-base: 500;--ods-mobile-price-2xl-tag-font-family: "LidlFontPro";--ods-mobile-price-2xl-tag-font-size: .875rem;--ods-mobile-price-2xl-tag-letter-spacing: 0;--ods-mobile-price-2xl-tag-line-height: .875rem;--ods-mobile-price-2xl-without-pointer: 700;--ods-mobile-price-2xs-double-currency-base: 500;--ods-mobile-price-2xs-double-currency-font-family: "LidlFontPro";--ods-mobile-price-2xs-double-currency-font-size: .75rem;--ods-mobile-price-2xs-double-currency-letter-spacing: 0;--ods-mobile-price-2xs-double-currency-line-height: 1rem;--ods-mobile-price-2xs-font-family: "LidlFontPricePublicBeta";--ods-mobile-price-2xs-font-size: 1.5625rem;--ods-mobile-price-2xs-footer-base: 500;--ods-mobile-price-2xs-footer-font-family: "LidlFontPro";--ods-mobile-price-2xs-footer-font-size: .75rem;--ods-mobile-price-2xs-footer-letter-spacing: 0;--ods-mobile-price-2xs-footer-line-height: 1rem;--ods-mobile-price-2xs-large-pointer: 710;--ods-mobile-price-2xs-letter-spacing: 0;--ods-mobile-price-2xs-line-height: 1.5625rem;--ods-mobile-price-2xs-pointer-box-lp-font-family: "LidlFontPro";--ods-mobile-price-2xs-pointer-box-lp-font-size: .6875rem;--ods-mobile-price-2xs-pointer-box-lp-letter-spacing: 0;--ods-mobile-price-2xs-pointer-box-lp-line-height: .6875rem;--ods-mobile-price-2xs-pointer-box-lp-prominent: 700;--ods-mobile-price-2xs-pointer-box-font-family: "LidlFontPro";--ods-mobile-price-2xs-pointer-box-font-size: .75rem;--ods-mobile-price-2xs-pointer-box-letter-spacing: 0;--ods-mobile-price-2xs-pointer-box-line-height: .75rem;--ods-mobile-price-2xs-pointer-box-prominent: 700;--ods-mobile-price-2xs-prefix-font-family: "LidlFontCondPro";--ods-mobile-price-2xs-prefix-font-size: .75rem;--ods-mobile-price-2xs-prefix-letter-spacing: 0;--ods-mobile-price-2xs-prefix-line-height: .75rem;--ods-mobile-price-2xs-prefix-prominent: 500;--ods-mobile-price-2xs-pv-pointer-box-font-family: "LidlFontPro";--ods-mobile-price-2xs-pv-pointer-box-font-size: .75rem;--ods-mobile-price-2xs-pv-pointer-box-letter-spacing: 0;--ods-mobile-price-2xs-pv-pointer-box-line-height: .75rem;--ods-mobile-price-2xs-pv-pointer-box-prominent: 700;--ods-mobile-price-2xs-pv-price-font-family: "LidlFontPricePublicBeta";--ods-mobile-price-2xs-pv-price-font-size: 1.5625rem;--ods-mobile-price-2xs-pv-price-large-pointer: 710;--ods-mobile-price-2xs-pv-price-letter-spacing: 0;--ods-mobile-price-2xs-pv-price-line-height: 1.5625rem;--ods-mobile-price-2xs-stroke-base: 500;--ods-mobile-price-2xs-stroke-font-family: "LidlFontPro";--ods-mobile-price-2xs-stroke-font-size: .75rem;--ods-mobile-price-2xs-stroke-letter-spacing: 0;--ods-mobile-price-2xs-stroke-line-height: .75rem;--ods-mobile-price-2xs-tag-base: 500;--ods-mobile-price-2xs-tag-font-family: "LidlFontPro";--ods-mobile-price-2xs-tag-font-size: .75rem;--ods-mobile-price-2xs-tag-letter-spacing: 0;--ods-mobile-price-2xs-tag-line-height: .75rem;--ods-mobile-price-2xs-without-pointer: 700;--ods-mobile-price-l-double-currency-base: 500;--ods-mobile-price-l-double-currency-font-family: "LidlFontPro";--ods-mobile-price-l-double-currency-font-size: .75rem;--ods-mobile-price-l-double-currency-letter-spacing: 0;--ods-mobile-price-l-double-currency-line-height: 1rem;--ods-mobile-price-l-font-family: "LidlFontPricePublicBeta";--ods-mobile-price-l-font-size: 2.25rem;--ods-mobile-price-l-footer-base: 500;--ods-mobile-price-l-footer-font-family: "LidlFontPro";--ods-mobile-price-l-footer-font-size: .75rem;--ods-mobile-price-l-footer-letter-spacing: 0;--ods-mobile-price-l-footer-line-height: 1rem;--ods-mobile-price-l-large-pointer: 710;--ods-mobile-price-l-letter-spacing: 0;--ods-mobile-price-l-line-height: 2.25rem;--ods-mobile-price-l-pointer-box-lp-font-family: "LidlFontPro";--ods-mobile-price-l-pointer-box-lp-font-size: .6875rem;--ods-mobile-price-l-pointer-box-lp-letter-spacing: 0;--ods-mobile-price-l-pointer-box-lp-line-height: .6875rem;--ods-mobile-price-l-pointer-box-lp-prominent: 700;--ods-mobile-price-l-pointer-box-font-family: "LidlFontPro";--ods-mobile-price-l-pointer-box-font-size: .875rem;--ods-mobile-price-l-pointer-box-letter-spacing: 0;--ods-mobile-price-l-pointer-box-line-height: .875rem;--ods-mobile-price-l-pointer-box-prominent: 700;--ods-mobile-price-l-prefix-font-family: "LidlFontCondPro";--ods-mobile-price-l-prefix-font-size: .75rem;--ods-mobile-price-l-prefix-letter-spacing: 0;--ods-mobile-price-l-prefix-line-height: .75rem;--ods-mobile-price-l-prefix-prominent: 500;--ods-mobile-price-l-pv-pointer-box-font-family: "LidlFontPro";--ods-mobile-price-l-pv-pointer-box-font-size: .75rem;--ods-mobile-price-l-pv-pointer-box-letter-spacing: 0;--ods-mobile-price-l-pv-pointer-box-line-height: .75rem;--ods-mobile-price-l-pv-pointer-box-prominent: 700;--ods-mobile-price-l-pv-price-font-family: "LidlFontPricePublicBeta";--ods-mobile-price-l-pv-price-font-size: 1.5625rem;--ods-mobile-price-l-pv-price-large-pointer: 710;--ods-mobile-price-l-pv-price-letter-spacing: 0;--ods-mobile-price-l-pv-price-line-height: 1.5625rem;--ods-mobile-price-l-stroke-base: 500;--ods-mobile-price-l-stroke-font-family: "LidlFontPro";--ods-mobile-price-l-stroke-font-size: .75rem;--ods-mobile-price-l-stroke-letter-spacing: 0;--ods-mobile-price-l-stroke-line-height: .75rem;--ods-mobile-price-l-tag-base: 500;--ods-mobile-price-l-tag-font-family: "LidlFontPro";--ods-mobile-price-l-tag-font-size: .75rem;--ods-mobile-price-l-tag-letter-spacing: 0;--ods-mobile-price-l-tag-line-height: .75rem;--ods-mobile-price-l-without-pointer: 700;--ods-mobile-price-m-double-currency-base: 500;--ods-mobile-price-m-double-currency-font-family: "LidlFontPro";--ods-mobile-price-m-double-currency-font-size: .75rem;--ods-mobile-price-m-double-currency-letter-spacing: 0;--ods-mobile-price-m-double-currency-line-height: 1rem;--ods-mobile-price-m-font-family: "LidlFontPricePublicBeta";--ods-mobile-price-m-font-size: 2rem;--ods-mobile-price-m-footer-base: 500;--ods-mobile-price-m-footer-font-family: "LidlFontPro";--ods-mobile-price-m-footer-font-size: .75rem;--ods-mobile-price-m-footer-letter-spacing: 0;--ods-mobile-price-m-footer-line-height: 1rem;--ods-mobile-price-m-large-pointer: 710;--ods-mobile-price-m-letter-spacing: 0;--ods-mobile-price-m-line-height: 2rem;--ods-mobile-price-m-pointer-box-lp-font-family: "LidlFontPro";--ods-mobile-price-m-pointer-box-lp-font-size: .6875rem;--ods-mobile-price-m-pointer-box-lp-letter-spacing: 0;--ods-mobile-price-m-pointer-box-lp-line-height: .6875rem;--ods-mobile-price-m-pointer-box-lp-prominent: 700;--ods-mobile-price-m-pointer-box-font-family: "LidlFontPro";--ods-mobile-price-m-pointer-box-font-size: .875rem;--ods-mobile-price-m-pointer-box-letter-spacing: 0;--ods-mobile-price-m-pointer-box-line-height: .875rem;--ods-mobile-price-m-pointer-box-prominent: 700;--ods-mobile-price-m-prefix-font-family: "LidlFontCondPro";--ods-mobile-price-m-prefix-font-size: .75rem;--ods-mobile-price-m-prefix-letter-spacing: 0;--ods-mobile-price-m-prefix-line-height: .75rem;--ods-mobile-price-m-prefix-prominent: 500;--ods-mobile-price-m-pv-pointer-box-font-family: "LidlFontPro";--ods-mobile-price-m-pv-pointer-box-font-size: .75rem;--ods-mobile-price-m-pv-pointer-box-letter-spacing: 0;--ods-mobile-price-m-pv-pointer-box-line-height: .75rem;--ods-mobile-price-m-pv-pointer-box-prominent: 700;--ods-mobile-price-m-pv-price-font-family: "LidlFontPricePublicBeta";--ods-mobile-price-m-pv-price-font-size: 1.5625rem;--ods-mobile-price-m-pv-price-large-pointer: 710;--ods-mobile-price-m-pv-price-letter-spacing: 0;--ods-mobile-price-m-pv-price-line-height: 1.5625rem;--ods-mobile-price-m-stroke-base: 500;--ods-mobile-price-m-stroke-font-family: "LidlFontPro";--ods-mobile-price-m-stroke-font-size: .75rem;--ods-mobile-price-m-stroke-letter-spacing: 0;--ods-mobile-price-m-stroke-line-height: .75rem;--ods-mobile-price-m-tag-base: 500;--ods-mobile-price-m-tag-font-family: "LidlFontPro";--ods-mobile-price-m-tag-font-size: .75rem;--ods-mobile-price-m-tag-letter-spacing: 0;--ods-mobile-price-m-tag-line-height: .75rem;--ods-mobile-price-m-without-pointer: 700;--ods-gap-button-layout: 1rem;--ods-gap-card-layout: 1rem;--ods-gap-content-l: .75rem;--ods-gap-content-m: .5rem;--ods-gap-content-s: .25rem;--ods-gap-content-xl: 1rem;--ods-gap-layout-l: 1rem;--ods-gap-layout-m: .5rem;--ods-gap-layout-s: .25rem;--ods-gap-none: 0rem;--ods-gap-section-desktop-divider: 2rem;--ods-gap-section-desktop-footer: 4rem;--ods-gap-section-desktop-header: 1.5rem;--ods-gap-section-mobile-divider: 1rem;--ods-gap-section-mobile-footer: 2rem;--ods-gap-section-mobile-header: 1rem;--ods-gap-small-image-layout: .5rem;--ods-gap-tooltip-layout: .75rem;--ods-minimum-width-button-primary-l: 7rem;--ods-minimum-width-button-primary-m: 5.5rem;--ods-minimum-width-button-primary-s: 4.5rem;--ods-minimum-width-button-secondary-l: 7rem;--ods-minimum-width-button-secondary-m: 5.5rem;--ods-minimum-width-button-secondary-s: 4.5rem;--ods-minimum-width-button-tertiary-l: 3.5rem;--ods-minimum-width-button-tertiary-m: 3rem;--ods-minimum-width-button-tertiary-s: 2.5rem;--ods-padding-content-2xl: 2rem;--ods-padding-content-2xs: .125rem;--ods-padding-content-l: 1rem;--ods-padding-content-m: .75rem;--ods-padding-content-s: .5rem;--ods-padding-content-xl: 1.5rem;--ods-padding-content-xs: .25rem;--ods-padding-icon-touch: .625rem;--ods-padding-indicator-horizontal: .5rem;--ods-padding-indicator-vertical: .25rem;--ods-padding-none: 0rem;--ods-padding-section-desktop: 2rem;--ods-padding-section-mobile: 1.5rem;--ods-padding-small-cards: .5rem;--ods-padding-standard: 1rem;--ods-border-width-1: .0625rem;--ods-border-width-2: .125rem;--ods-color-blue-200: #f0f7ff;--ods-color-blue-300: #c2dfff;--ods-color-blue-400: #008cd2;--ods-color-blue-500: #0050aa;--ods-color-blue-900: #002466;--ods-color-crivit-green-200: #f0fffa;--ods-color-crivit-green-300: #c2ffec;--ods-color-crivit-green-400: #00e09d;--ods-color-crivit-green-500: #00a170;--ods-color-crivit-green-900: #00704e;--ods-color-crivit-magenta-400: #935cfb;--ods-color-crivit-magenta-800: #400078;--ods-color-crivit-neutral-0: #ffffff;--ods-color-crivit-neutral-100: #e6e6e6;--ods-color-crivit-neutral-1000: #000000;--ods-color-crivit-neutral-200: #d1d1d1;--ods-color-crivit-neutral-300: #b3b3b3;--ods-color-crivit-neutral-400: #949494;--ods-color-crivit-neutral-50: #f2f2f2;--ods-color-crivit-neutral-500: #757575;--ods-color-crivit-neutral-600: #636363;--ods-color-crivit-neutral-700: #474747;--ods-color-crivit-neutral-800: #2f2f2f;--ods-color-crivit-neutral-900: #161616;--ods-color-crivit-orange-100: #ffa654;--ods-color-crivit-orange-200: #ff903e;--ods-color-crivit-orange-300: #ff7828;--ods-color-crivit-orange-400: #ff6419;--ods-color-crivit-orange-50: #ffbc6a;--ods-color-crivit-orange-500: #ff5028;--ods-color-crivit-red-200: #fff1f0;--ods-color-crivit-red-300: #ffc6c2;--ods-color-crivit-red-400: #ff6e66;--ods-color-crivit-red-500: #f62d36;--ods-color-crivit-red-900: #ac0209;--ods-color-green-200: #f0fffa;--ods-color-green-300: #c2ffec;--ods-color-green-400: #00e09d;--ods-color-green-500: #00a170;--ods-color-green-900: #00704e;--ods-color-kaufland-app-black-0: #ffffff;--ods-color-kaufland-app-black-0-0: rgb(255 255 255 / 0%);--ods-color-kaufland-app-black-200: #f5f5f5;--ods-color-kaufland-app-black-400: #dedede;--ods-color-kaufland-app-black-500: #c2c2c2;--ods-color-kaufland-app-black-600: #8e8e8e;--ods-color-kaufland-app-black-700: #747474;--ods-color-kaufland-app-black-900: #3c3c3c;--ods-color-kaufland-app-blue-50: #e6f5fb;--ods-color-kaufland-app-blue-600: #0091c4;--ods-color-kaufland-app-blue-700: #007199;--ods-color-kaufland-app-blue-fbk-50: #1da1f2;--ods-color-kaufland-app-blue-fbk-700: #4267b2;--ods-color-kaufland-app-blue-k-card-50: #a3c4e9;--ods-color-kaufland-app-blue-k-card-900: #5d9ad3;--ods-color-kaufland-app-blue-star-50: #e6effa;--ods-color-kaufland-app-blue-star-900: #064192;--ods-color-kaufland-app-green-50: #eaf7e9;--ods-color-kaufland-app-green-600: #2d9c1c;--ods-color-kaufland-app-green-700: #237916;--ods-color-kaufland-app-green-800: #195610;--ods-color-kaufland-app-green-900: #14450d;--ods-color-kaufland-app-orange-50: #fff6e6;--ods-color-kaufland-app-orange-600: #da591a;--ods-color-kaufland-app-orange-700: #bf4b13;--ods-color-kaufland-app-orange-warning-medium: #ffda7f;--ods-color-kaufland-app-red-50: #fce6e8;--ods-color-kaufland-app-red-700: #e10915;--ods-color-kaufland-app-red-900: #a0060f;--ods-color-kaufland-app-yellow-star-gold-600: #c2a35a;--ods-color-kaufland-app-yellow-treuepunkte: #fdc403;--ods-color-neutral-0: #ffffff;--ods-color-neutral-0-0: rgb(255 255 255 / 0%);--ods-color-neutral-0-15: rgb(255 255 255 / 15%);--ods-color-neutral-0-40: rgb(255 255 255 / 40%);--ods-color-neutral-0-55: rgb(255 255 255 / 55%);--ods-color-neutral-1000: #000000;--ods-color-neutral-1000-0: rgb(0 0 0 / 0%);--ods-color-neutral-1000-45: rgb(0 0 0 / 45%);--ods-color-neutral-1000-60: rgb(0 0 0 / 60%);--ods-color-neutral-1000-75: rgb(0 0 0 / 75%);--ods-color-neutral-200: #f1f2f4;--ods-color-neutral-300: #dde0e3;--ods-color-neutral-400: #8c96a1;--ods-color-neutral-500: #636d79;--ods-color-neutral-800: #1e2124;--ods-color-overlay-45: rgb(0 0 0 / 45%);--ods-color-red-200: #fff1f0;--ods-color-red-300: #ffc6c2;--ods-color-red-400: #ff6e66;--ods-color-red-500: #e60a14;--ods-color-red-900: #ad080f;--ods-color-won-crivit-500: #ff7828;--ods-color-won-crivit-600: #ff6419;--ods-color-won-esmara-500: #fff3e3;--ods-color-won-esmara-600: #ebebe9;--ods-color-won-livarno-500: #d3c3ab;--ods-color-won-livarno-600: #627362;--ods-color-won-lupilu-500: #e01970;--ods-color-won-lupilu-600: #bac81e;--ods-color-won-parkside-500: #143c28;--ods-color-won-parkside-600: #232d32;--ods-color-won-silvercrest-500: #cccccc;--ods-color-won-silvercrest-600: #000000;--ods-color-won-wine-spirits-500: #8a1538;--ods-color-yellow-200: #fffcef;--ods-color-yellow-300: #fff2a6;--ods-color-yellow-400: #ffed70;--ods-color-yellow-500: #fff000;--ods-color-yellow-600: #ffc400;--ods-color-yellow-700: #ff9500;--ods-color-yellow-900: #a84700;--ods-minimum-width-0: 0rem;--ods-minimum-width-112: 7rem;--ods-minimum-width-40: 2.5rem;--ods-minimum-width-48: 3rem;--ods-minimum-width-56: 3.5rem;--ods-minimum-width-72: 4.5rem;--ods-minimum-width-88: 5.5rem;--ods-opacity-0: 0%;--ods-opacity-12: 12%;--ods-opacity-14: 14%;--ods-opacity-15: 15%;--ods-opacity-30: 30%;--ods-opacity-4: 4%;--ods-opacity-40: 40%;--ods-opacity-45: 45%;--ods-opacity-55: 55%;--ods-opacity-60: 60%;--ods-opacity-75: 75%;--ods-opacity-8: 8%;--ods-radius-0: 0rem;--ods-radius-4: .25rem;--ods-radius-8: .5rem;--ods-radius-999: 62.4375rem;--ods-shadow-blur-12: .75rem;--ods-shadow-blur-16: 1rem;--ods-shadow-blur-4: .25rem;--ods-shadow-blur-6: .375rem;--ods-shadow-color-800-12: rgb(30 33 36 / 12%);--ods-shadow-color-800-14: rgb(30 33 36 / 14%);--ods-shadow-color-800-4: rgb(30 33 36 / 4%);--ods-shadow-color-800-8: rgb(30 33 36 / 8%);--ods-shadow-spread-0: 0rem;--ods-shadow-x-0: 0rem;--ods-shadow-y-0: 0rem;--ods-shadow-y-3: .1875rem;--ods-shadow-y-4: .25rem;--ods-shadow-y-n2: -.125rem;--ods-space-0: 0rem;--ods-space-10: .625rem;--ods-space-12: .75rem;--ods-space-14: .875rem;--ods-space-16: 1rem;--ods-space-2: .125rem;--ods-space-20: 1.25rem;--ods-space-24: 1.5rem;--ods-space-32: 2rem;--ods-space-4: .25rem;--ods-space-40: 2.5rem;--ods-space-48: 3rem;--ods-space-6: .375rem;--ods-space-64: 4rem;--ods-space-8: .5rem;--ods-space-n2: -.125rem;--ods-space-n40: -2.5rem;--ods-typography-font-family-crivit-font: "Crivit Font";--ods-typography-font-family-crivit-font-expanded: "Crivit Font Expanded";--ods-typography-font-family-kaufland: "Kaufland";--ods-typography-font-family-kaufland-roboto: "Roboto";--ods-typography-font-family-kaufland-sf-pro: "SF Pro";--ods-typography-font-family-lidl-font-cond-pro: "LidlFontCondPro";--ods-typography-font-family-lidl-font-price: "LidlFontPricePublicBeta";--ods-typography-font-family-lidl-font-pro: "LidlFontPro";--ods-typography-font-size-10: .625rem;--ods-typography-font-size-11: .6875rem;--ods-typography-font-size-12: .75rem;--ods-typography-font-size-13: .8125rem;--ods-typography-font-size-14: .875rem;--ods-typography-font-size-16: 1rem;--ods-typography-font-size-18: 1.125rem;--ods-typography-font-size-20: 1.25rem;--ods-typography-font-size-22: 1.375rem;--ods-typography-font-size-23: 1.4375rem;--ods-typography-font-size-24: 1.5rem;--ods-typography-font-size-25: 1.5625rem;--ods-typography-font-size-26: 1.625rem;--ods-typography-font-size-28: 1.75rem;--ods-typography-font-size-29: 1.8125rem;--ods-typography-font-size-32: 2rem;--ods-typography-font-size-33: 2.0625rem;--ods-typography-font-size-36: 2.25rem;--ods-typography-font-size-37: 2.3125rem;--ods-typography-font-size-38: 2.375rem;--ods-typography-font-size-41: 2.5625rem;--ods-typography-font-size-42: 2.625rem;--ods-typography-font-size-46: 2.875rem;--ods-typography-font-size-47: 2.9375rem;--ods-typography-font-size-48: 3rem;--ods-typography-font-size-52: 3.25rem;--ods-typography-font-size-58: 3.625rem;--ods-typography-font-size-60: 3.75rem;--ods-typography-font-weight-400: 400;--ods-typography-font-weight-500: 500;--ods-typography-font-weight-600: 600;--ods-typography-font-weight-700: 700;--ods-typography-font-weight-705: 705;--ods-typography-font-weight-710: 710;--ods-typography-letter-spacing-dense: .25;--ods-typography-letter-spacing-denser: .3;--ods-typography-letter-spacing-normal: 0;--ods-typography-line-height-12: .75rem;--ods-typography-line-height-16: 1rem;--ods-typography-line-height-20: 1.25rem;--ods-typography-line-height-24: 1.5rem;--ods-typography-line-height-25: 1.5625rem;--ods-typography-line-height-28: 1.75rem;--ods-typography-line-height-32: 2rem;--ods-typography-line-height-33: 2.0625rem;--ods-typography-line-height-36: 2.25rem;--ods-typography-line-height-40: 2.5rem;--ods-typography-line-height-44: 2.75rem;--ods-typography-line-height-48: 3rem;--ods-typography-line-height-52: 3.25rem;--ods-typography-line-height-60: 3.75rem;--ods-typography-line-height-64: 4rem;border-radius:62.4375rem;padding:.5rem 1rem;background-color:var(--ods-color-blue-500);border-color:#2466eb;border-width:0;color:#fff;min-width:3.3125rem;min-height:2.75rem;text-align:center;width:100%}.pca-the-button--redesign:not(:disabled){cursor:pointer}.pca-the-button--redesign:not(:disabled):focus-within,.pca-the-button--redesign:not(:disabled):focus,.pca-the-button--redesign:not(:disabled):hover,.pca-the-button--redesign:not(:disabled):active{background-color:var(--ods-color-blue-900);border-color:#1353d2;outline:none}.pca-the-button--redesign:not(:disabled):focus-within:before,.pca-the-button--redesign:not(:disabled):focus:before,.pca-the-button--redesign:not(:disabled):hover:before,.pca-the-button--redesign:not(:disabled):active:before{content:none}.pca-the-button--redesign--secondary{border:.125rem solid var(--ods-color-blue-500);background-color:transparent;color:var(--ods-color-blue-500)}.pca-the-button--redesign--secondary:not(:disabled){cursor:pointer}.pca-the-button--redesign--secondary:not(:disabled):focus-within,.pca-the-button--redesign--secondary:not(:disabled):focus,.pca-the-button--redesign--secondary:not(:disabled):hover,.pca-the-button--redesign--secondary:not(:disabled):active{background-color:transparent;color:var(--ods-color-blue-900);border-color:var(--ods-color-blue-900);outline:none}.pca-the-button--redesign--secondary:not(:disabled):focus-within:before,.pca-the-button--redesign--secondary:not(:disabled):focus:before,.pca-the-button--redesign--secondary:not(:disabled):hover:before,.pca-the-button--redesign--secondary:not(:disabled):active:before{content:none}.pca-the-button--redesign:disabled{opacity:.3;cursor:default}', '.pca-the-button{width:100%;font-family:LidlFontCondPro,Trebuchet MS,sans-serif;font-size:1.125rem;font-weight:700;line-height:1.2;text-transform:uppercase;border-radius:.125rem;border:none;padding:.875rem 1rem .8125rem;background:#0050aa;color:#fff;cursor:pointer;text-decoration:none;justify-content:center;align-items:center;display:inline-flex;font-weight:600}@media(max-width:960px){.pca-the-button{font-size:1rem}}.pca-the-button:before{background-color:#fff}.pca-the-button:hover,.pca-the-button:focus,.pca-the-button:active{box-shadow:3000px 0 #00000052 inset}.pca-the-button--secondary:not(:disabled){font-size:1.125rem;font-weight:700;line-height:1.2;text-transform:uppercase;border-radius:.125rem;border:none;display:inline-flex;padding:.875rem 1rem .8125rem;background:none;border:.0625rem solid;border-color:#0050aa;color:#0050aa;cursor:pointer}@media(max-width:960px){.pca-the-button--secondary:not(:disabled){font-size:1rem}}.pca-the-button--secondary:not(:disabled):before{background-color:#0050aa}.pca-the-button--secondary:not(:disabled):hover,.pca-the-button--secondary:not(:disabled):focus,.pca-the-button--secondary:not(:disabled):active{background:#0050aa;color:#fff;border-color:transparent;background-clip:padding-box}.pca-the-button--secondary:not(:disabled):hover:before,.pca-the-button--secondary:not(:disabled):focus:before,.pca-the-button--secondary:not(:disabled):active:before{background-color:#fff}.pca-the-button--secondary:not(:disabled):hover,.pca-the-button--secondary:not(:disabled):focus,.pca-the-button--secondary:not(:disabled):active{box-shadow:3000px 0 #00000052 inset}.pca-the-button[disabled],.pca-the-button:disabled{font-size:1.125rem;font-weight:700;line-height:1.2;text-transform:uppercase;border-radius:.125rem;border:none;display:inline-flex;padding:.875rem 1rem .8125rem;background:#0050aa;color:#fff;cursor:default;-webkit-background-clip:text;background-clip:text;opacity:.32;position:relative;color:#0050aa;cursor:not-allowed}@media(max-width:960px){.pca-the-button[disabled],.pca-the-button:disabled{font-size:1rem}}.pca-the-button[disabled]:before,.pca-the-button:disabled:before{background-color:#fff}.pca-the-button[disabled]:hover,.pca-the-button:disabled:hover,.pca-the-button[disabled]:focus,.pca-the-button:disabled:focus,.pca-the-button[disabled]:active,.pca-the-button:disabled:active{box-shadow:none}.pca-the-button[disabled]:after,.pca-the-button:disabled:after{content:"";position:absolute;inset:0;opacity:.5;z-index:-1}.pca-the-button[disabled] _:-ms-fullscreen,.pca-the-button:disabled _:-ms-fullscreen{color:#fff}.pca-the-button[disabled]:after,.pca-the-button:disabled:after{background:#0050aa;background-color:#0050aa}.pca-the-button[disabled]:before,.pca-the-button:disabled:before{background-color:#0050aa}.pca-the-button--rounded{all:unset}.pca-the-button--rounded:hover,.pca-the-button--rounded:active,.pca-the-button--rounded:focus{all:unset}.pca-the-button--rounded .pca-the-button__inner{display:flex;align-items:center;justify-content:center;cursor:pointer;min-width:.75rem;height:2.75rem;border-radius:999px;background:#0050aa;padding:0 1rem;position:relative;color:#fff}.pca-the-button--rounded .pca-the-button__inner:focus{outline:2px #0050aa solid;outline-offset:0;position:relative;box-shadow:#fff 0 0 0 4px}.pca-the-button--rounded:focus>.pca-the-button__inner{background:#1353d2}.pca-the-button--rounded:hover>.pca-the-button__inner{background:#1353d2}.pca-the-button--rounded:active>.pca-the-button__inner{background:#1353d2}.pca-the-button--transparent .pca-the-button__inner{background:transparent;color:#0050aa}.pca-the-button--transparent:focus>.pca-the-button__inner{background:transparent;color:#1353d2}.pca-the-button--transparent:hover>.pca-the-button__inner{background:transparent;color:#1353d2}.pca-the-button--transparent:active>.pca-the-button__inner{background:transparent;color:#1353d2}.pca-the-button--transparent[disabled]{opacity:.4}']]
  ]);

function yb(e, t) {
  return function() {
    return e.apply(t, arguments)
  }
}
const {
  toString: kb
} = Object.prototype, {
  getPrototypeOf: xb
} = Object, {
  iterator: Eb,
  toStringTag: wb
} = Symbol, Ab = (e => t => {
  const o = kb.call(t);
  return e[o] || (e[o] = o.slice(8, -1)
    .toLowerCase())
})(Object.create(null)), Lb = e => (e = e.toLowerCase(), t => Ab(t) === e), Pb = e => t => typeof t === e, {
  isArray: Tb
} = Array, Ob = Pb("undefined");

function Cb(e) {
  return null !== e && !Ob(e) && null !== e.constructor && !Ob(e.constructor) && Sb(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const Rb = Lb("ArrayBuffer");
const Ib = Pb("string"),
  Sb = Pb("function"),
  Db = Pb("number"),
  jb = e => null !== e && "object" == typeof e,
  Bb = e => {
    if ("object" !== Ab(e)) return !1;
    const t = xb(e);
    return !(null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t) || wb in e || Eb in e)
  },
  zb = Lb("Date"),
  Fb = Lb("File"),
  Vb = Lb("Blob"),
  Nb = Lb("FileList"),
  Mb = Lb("URLSearchParams"),
  [Ub, qb, Wb, $b] = ["ReadableStream", "Request", "Response", "Headers"].map(Lb);

function Hb(e, t, {
  allOwnKeys: o = !1
} = {}) {
  if (null == e) return;
  let r, s;
  if ("object" != typeof e && (e = [e]), Tb(e))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    if (Cb(e)) return;
    const s = o ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = s.length;
    let n;
    for (r = 0; r < i; r++) n = s[r], t.call(null, e[n], n, e)
  }
}

function Qb(e, t) {
  if (Cb(e)) return null;
  t = t.toLowerCase();
  const o = Object.keys(e);
  let r, s = o.length;
  for (; s-- > 0;)
    if (r = o[s], t === r.toLowerCase()) return r;
  return null
}
const Gb = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global,
  Kb = e => !Ob(e) && e !== Gb;
const Yb = (e => t => e && t instanceof e)("undefined" != typeof Uint8Array && xb(Uint8Array)),
  Jb = Lb("HTMLFormElement"),
  Zb = (({
    hasOwnProperty: e
  }) => (t, o) => e.call(t, o))(Object.prototype),
  Xb = Lb("RegExp"),
  eh = (e, t) => {
    const o = Object.getOwnPropertyDescriptors(e),
      r = {};
    Hb(o, (o, s) => {
      let i;
      !1 !== (i = t(o, s, e)) && (r[s] = i || o)
    }), Object.defineProperties(e, r)
  };
const th = Lb("AsyncFunction"),
  oh = (rh = "function" == typeof setImmediate, sh = Sb(Gb.postMessage), rh ? setImmediate : sh ? (ih = `axios@${Math.random()}`, nh = [], Gb.addEventListener("message", ({
    source: e,
    data: t
  }) => {
    e === Gb && t === ih && nh.length && nh.shift()()
  }, !1), e => {
    nh.push(e), Gb.postMessage(ih, "*")
  }) : e => setTimeout(e));
var rh, sh, ih, nh;
const ah = "undefined" != typeof queueMicrotask ? queueMicrotask.bind(Gb) : "undefined" != typeof process && process.nextTick || oh,
  lh = {
    isArray: Tb,
    isArrayBuffer: Rb,
    isBuffer: Cb,
    isFormData: e => {
      let t;
      return e && ("function" == typeof FormData && e instanceof FormData || Sb(e.append) && ("formdata" === (t = Ab(e)) || "object" === t && Sb(e.toString) && "[object FormData]" === e.toString()))
    },
    isArrayBufferView: function(e) {
      let t;
      return t = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && Rb(e.buffer), t
    },
    isString: Ib,
    isNumber: Db,
    isBoolean: e => !0 === e || !1 === e,
    isObject: jb,
    isPlainObject: Bb,
    isEmptyObject: e => {
      if (!jb(e) || Cb(e)) return !1;
      try {
        return 0 === Object.keys(e)
          .length && Object.getPrototypeOf(e) === Object.prototype
      } catch (q_) {
        return !1
      }
    },
    isReadableStream: Ub,
    isRequest: qb,
    isResponse: Wb,
    isHeaders: $b,
    isUndefined: Ob,
    isDate: zb,
    isFile: Fb,
    isBlob: Vb,
    isRegExp: Xb,
    isFunction: Sb,
    isStream: e => jb(e) && Sb(e.pipe),
    isURLSearchParams: Mb,
    isTypedArray: Yb,
    isFileList: Nb,
    forEach: Hb,
    merge: function e() {
      const {
        caseless: t,
        skipUndefined: o
      } = Kb(this) && this || {}, r = {}, s = (s, i) => {
        if ("__proto__" === i || "constructor" === i || "prototype" === i) return;
        const n = t && Qb(r, i) || i;
        Bb(r[n]) && Bb(s) ? r[n] = e(r[n], s) : Bb(s) ? r[n] = e({}, s) : Tb(s) ? r[n] = s.slice() : o && Ob(s) || (r[n] = s)
      };
      for (let i = 0, n = arguments.length; i < n; i++) arguments[i] && Hb(arguments[i], s);
      return r
    },
    extend: (e, t, o, {
      allOwnKeys: r
    } = {}) => (Hb(t, (t, r) => {
      o && Sb(t) ? Object.defineProperty(e, r, {
        value: yb(t, o),
        writable: !0,
        enumerable: !0,
        configurable: !0
      }) : Object.defineProperty(e, r, {
        value: t,
        writable: !0,
        enumerable: !0,
        configurable: !0
      })
    }, {
      allOwnKeys: r
    }), e),
    trim: e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
    stripBOM: e => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
    inherits: (e, t, o, r) => {
      e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
        value: e,
        writable: !0,
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e, "super", {
        value: t.prototype
      }), o && Object.assign(e.prototype, o)
    },
    toFlatObject: (e, t, o, r) => {
      let s, i, n;
      const a = {};
      if (t = t || {}, null == e) return t;
      do {
        for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0;) n = s[i], r && !r(n, e, t) || a[n] || (t[n] = e[n], a[n] = !0);
        e = !1 !== o && xb(e)
      } while (e && (!o || o(e, t)) && e !== Object.prototype);
      return t
    },
    kindOf: Ab,
    kindOfTest: Lb,
    endsWith: (e, t, o) => {
      e = String(e), (void 0 === o || o > e.length) && (o = e.length), o -= t.length;
      const r = e.indexOf(t, o);
      return -1 !== r && r === o
    },
    toArray: e => {
      if (!e) return null;
      if (Tb(e)) return e;
      let t = e.length;
      if (!Db(t)) return null;
      const o = new Array(t);
      for (; t-- > 0;) o[t] = e[t];
      return o
    },
    forEachEntry: (e, t) => {
      const o = (e && e[Eb])
        .call(e);
      let r;
      for (;
        (r = o.next()) && !r.done;) {
        const o = r.value;
        t.call(e, o[0], o[1])
      }
    },
    matchAll: (e, t) => {
      let o;
      const r = [];
      for (; null !== (o = e.exec(t));) r.push(o);
      return r
    },
    isHTMLForm: Jb,
    hasOwnProperty: Zb,
    hasOwnProp: Zb,
    reduceDescriptors: eh,
    freezeMethods: e => {
      eh(e, (t, o) => {
        if (Sb(e) && -1 !== ["arguments", "caller", "callee"].indexOf(o)) return !1;
        const r = e[o];
        Sb(r) && (t.enumerable = !1, "writable" in t ? t.writable = !1 : t.set || (t.set = () => {
          throw Error("Can not rewrite read-only method '" + o + "'")
        }))
      })
    },
    toObjectSet: (e, t) => {
      const o = {},
        r = e => {
          e.forEach(e => {
            o[e] = !0
          })
        };
      return Tb(e) ? r(e) : r(String(e)
        .split(t)), o
    },
    toCamelCase: e => e.toLowerCase()
      .replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, o) {
        return t.toUpperCase() + o
      }),
    noop: () => {},
    toFiniteNumber: (e, t) => null != e && Number.isFinite(e = +e) ? e : t,
    findKey: Qb,
    global: Gb,
    isContextDefined: Kb,
    isSpecCompliantForm: function(e) {
      return !!(e && Sb(e.append) && "FormData" === e[wb] && e[Eb])
    },
    toJSONObject: e => {
      const t = new Array(10),
        o = (e, r) => {
          if (jb(e)) {
            if (t.indexOf(e) >= 0) return;
            if (Cb(e)) return e;
            if (!("toJSON" in e)) {
              t[r] = e;
              const s = Tb(e) ? [] : {};
              return Hb(e, (e, t) => {
                const i = o(e, r + 1);
                !Ob(i) && (s[t] = i)
              }), t[r] = void 0, s
            }
          }
          return e
        };
      return o(e, 0)
    },
    isAsyncFn: th,
    isThenable: e => e && (jb(e) || Sb(e)) && Sb(e.then) && Sb(e.catch),
    setImmediate: oh,
    asap: ah,
    isIterable: e => null != e && Sb(e[Eb])
  };
let ch = class e extends Error {
  static from(t, o, r, s, i, n) {
    const a = new e(t.message, o || t.code, r, s, i);
    return a.cause = t, a.name = t.name, n && Object.assign(a, n), a
  }
  constructor(e, t, o, r, s) {
    super(e), this.name = "AxiosError", this.isAxiosError = !0, t && (this.code = t), o && (this.config = o), r && (this.request = r), s && (this.response = s, this.status = s.status)
  }
  toJSON() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: lh.toJSONObject(this.config),
      code: this.code,
      status: this.status
    }
  }
};
ch.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE", ch.ERR_BAD_OPTION = "ERR_BAD_OPTION", ch.ECONNABORTED = "ECONNABORTED", ch.ETIMEDOUT = "ETIMEDOUT", ch.ERR_NETWORK = "ERR_NETWORK", ch.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS", ch.ERR_DEPRECATED = "ERR_DEPRECATED", ch.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE", ch.ERR_BAD_REQUEST = "ERR_BAD_REQUEST", ch.ERR_CANCELED = "ERR_CANCELED", ch.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT", ch.ERR_INVALID_URL = "ERR_INVALID_URL";

function dh(e) {
  return lh.isPlainObject(e) || lh.isArray(e)
}

function ph(e) {
  return lh.endsWith(e, "[]") ? e.slice(0, -2) : e
}

function uh(e, t, o) {
  return e ? e.concat(t)
    .map(function(e, t) {
      return e = ph(e), !o && t ? "[" + e + "]" : e
    })
    .join(o ? "." : "") : t
}
const fh = lh.toFlatObject(lh, {}, null, function(e) {
  return /^is[A-Z]/.test(e)
});

function mh(e, t, o) {
  if (!lh.isObject(e)) throw new TypeError("target must be an object");
  t = t || new FormData;
  const r = (o = lh.toFlatObject(o, {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    }, !1, function(e, t) {
      return !lh.isUndefined(t[e])
    }))
    .metaTokens,
    s = o.visitor || c,
    i = o.dots,
    n = o.indexes,
    a = (o.Blob || "undefined" != typeof Blob && Blob) && lh.isSpecCompliantForm(t);
  if (!lh.isFunction(s)) throw new TypeError("visitor must be a function");

  function l(e) {
    if (null === e) return "";
    if (lh.isDate(e)) return e.toISOString();
    if (lh.isBoolean(e)) return e.toString();
    if (!a && lh.isBlob(e)) throw new ch("Blob is not supported. Use a Buffer instead.");
    return lh.isArrayBuffer(e) || lh.isTypedArray(e) ? a && "function" == typeof Blob ? new Blob([e]) : Buffer.from(e) : e
  }

  function c(e, o, s) {
    let a = e;
    if (e && !s && "object" == typeof e)
      if (lh.endsWith(o, "{}")) o = r ? o : o.slice(0, -2), e = JSON.stringify(e);
      else if (lh.isArray(e) && function(e) {
        return lh.isArray(e) && !e.some(dh)
      }(e) || (lh.isFileList(e) || lh.endsWith(o, "[]")) && (a = lh.toArray(e))) return o = ph(o), a.forEach(function(e, r) {
      !lh.isUndefined(e) && null !== e && t.append(!0 === n ? uh([o], r, i) : null === n ? o : o + "[]", l(e))
    }), !1;
    return !!dh(e) || (t.append(uh(s, o, i), l(e)), !1)
  }
  const d = [],
    p = Object.assign(fh, {
      defaultVisitor: c,
      convertValue: l,
      isVisitable: dh
    });
  if (!lh.isObject(e)) throw new TypeError("data must be an object");
  return function e(o, r) {
    if (!lh.isUndefined(o)) {
      if (-1 !== d.indexOf(o)) throw Error("Circular reference detected in " + r.join("."));
      d.push(o), lh.forEach(o, function(o, i) {
        !0 === (!(lh.isUndefined(o) || null === o) && s.call(t, o, lh.isString(i) ? i.trim() : i, r, p)) && e(o, r ? r.concat(i) : [i])
      }), d.pop()
    }
  }(e), t
}

function bh(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e)
    .replace(/[!'()~]|%20|%00/g, function(e) {
      return t[e]
    })
}

function hh(e, t) {
  this._pairs = [], e && mh(e, this, t)
}
const gh = hh.prototype;

function _h(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
}

function vh(e, t, o) {
  if (!t) return e;
  const r = o && o.encode || _h,
    s = lh.isFunction(o) ? {
      serialize: o
    } : o,
    i = s && s.serialize;
  let n;
  if (n = i ? i(t, s) : lh.isURLSearchParams(t) ? t.toString() : new hh(t, s)
    .toString(r), n) {
    const t = e.indexOf("#"); - 1 !== t && (e = e.slice(0, t)), e += (-1 === e.indexOf("?") ? "?" : "&") + n
  }
  return e
}
gh.append = function(e, t) {
  this._pairs.push([e, t])
}, gh.toString = function(e) {
  const t = e ? function(t) {
    return e.call(this, t, bh)
  } : bh;
  return this._pairs.map(function(e) {
      return t(e[0]) + "=" + t(e[1])
    }, "")
    .join("&")
};
class yh {
  constructor() {
    this.handlers = []
  }
  use(e, t, o) {
    return this.handlers.push({
      fulfilled: e,
      rejected: t,
      synchronous: !!o && o.synchronous,
      runWhen: o ? o.runWhen : null
    }), this.handlers.length - 1
  }
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null)
  }
  clear() {
    this.handlers && (this.handlers = [])
  }
  forEach(e) {
    lh.forEach(this.handlers, function(t) {
      null !== t && e(t)
    })
  }
}
const kh = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
    legacyInterceptorReqResOrdering: !0
  },
  xh = {
    isBrowser: !0,
    classes: {
      URLSearchParams: "undefined" != typeof URLSearchParams ? URLSearchParams : hh,
      FormData: "undefined" != typeof FormData ? FormData : null,
      Blob: "undefined" != typeof Blob ? Blob : null
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
  },
  Eh = "undefined" != typeof window && "undefined" != typeof document,
  wh = "object" == typeof navigator && navigator || void 0,
  Ah = Eh && (!wh || ["ReactNative", "NativeScript", "NS"].indexOf(wh.product) < 0),
  Lh = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts,
  Ph = Eh && window.location.href || "http://localhost",
  Th = {
    ...Object.freeze(Object.defineProperty({
      __proto__: null,
      hasBrowserEnv: Eh,
      hasStandardBrowserEnv: Ah,
      hasStandardBrowserWebWorkerEnv: Lh,
      navigator: wh,
      origin: Ph
    }, Symbol.toStringTag, {
      value: "Module"
    })),
    ...xh
  };

function Oh(e) {
  function t(e, o, r, s) {
    let i = e[s++];
    if ("__proto__" === i) return !0;
    const n = Number.isFinite(+i),
      a = s >= e.length;
    if (i = !i && lh.isArray(r) ? r.length : i, a) return lh.hasOwnProp(r, i) ? r[i] = [r[i], o] : r[i] = o, !n;
    r[i] && lh.isObject(r[i]) || (r[i] = []);
    return t(e, o, r[i], s) && lh.isArray(r[i]) && (r[i] = function(e) {
      const t = {},
        o = Object.keys(e);
      let r;
      const s = o.length;
      let i;
      for (r = 0; r < s; r++) i = o[r], t[i] = e[i];
      return t
    }(r[i])), !n
  }
  if (lh.isFormData(e) && lh.isFunction(e.entries)) {
    const o = {};
    return lh.forEachEntry(e, (e, r) => {
      t(function(e) {
        return lh.matchAll(/\w+|\[(\w*)]/g, e)
          .map(e => "[]" === e[0] ? "" : e[1] || e[0])
      }(e), r, o, 0)
    }), o
  }
  return null
}
const Ch = {
  transitional: kh,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, t) {
    const o = t.getContentType() || "",
      r = o.indexOf("application/json") > -1,
      s = lh.isObject(e);
    s && lh.isHTMLForm(e) && (e = new FormData(e));
    if (lh.isFormData(e)) return r ? JSON.stringify(Oh(e)) : e;
    if (lh.isArrayBuffer(e) || lh.isBuffer(e) || lh.isStream(e) || lh.isFile(e) || lh.isBlob(e) || lh.isReadableStream(e)) return e;
    if (lh.isArrayBufferView(e)) return e.buffer;
    if (lh.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let i;
    if (s) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1) return function(e, t) {
          return mh(e, new Th.classes.URLSearchParams, {
            visitor: function(e, t, o, r) {
              return Th.isNode && lh.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments)
            },
            ...t
          })
        }(e, this.formSerializer)
        .toString();
      if ((i = lh.isFileList(e)) || o.indexOf("multipart/form-data") > -1) {
        const t = this.env && this.env.FormData;
        return mh(i ? {
          "files[]": e
        } : e, t && new t, this.formSerializer)
      }
    }
    return s || r ? (t.setContentType("application/json", !1), function(e, t, o) {
      if (lh.isString(e)) try {
        return (t || JSON.parse)(e), lh.trim(e)
      } catch (q_) {
        if ("SyntaxError" !== q_.name) throw q_
      }
      return (o || JSON.stringify)(e)
    }(e)) : e
  }],
  transformResponse: [function(e) {
    const t = this.transitional || Ch.transitional,
      o = t && t.forcedJSONParsing,
      r = "json" === this.responseType;
    if (lh.isResponse(e) || lh.isReadableStream(e)) return e;
    if (e && lh.isString(e) && (o && !this.responseType || r)) {
      const o = !(t && t.silentJSONParsing) && r;
      try {
        return JSON.parse(e, this.parseReviver)
      } catch (q_) {
        if (o) {
          if ("SyntaxError" === q_.name) throw ch.from(q_, ch.ERR_BAD_RESPONSE, this, null, this.response);
          throw q_
        }
      }
    }
    return e
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Th.classes.FormData,
    Blob: Th.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
lh.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
  Ch.headers[e] = {}
});
const Rh = lh.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
  Ih = Symbol("internals");

function Sh(e) {
  return e && String(e)
    .trim()
    .toLowerCase()
}

function Dh(e) {
  return !1 === e || null == e ? e : lh.isArray(e) ? e.map(Dh) : String(e)
}

function jh(e, t, o, r, s) {
  return lh.isFunction(r) ? r.call(this, t, o) : (s && (t = o), lh.isString(t) ? lh.isString(r) ? -1 !== t.indexOf(r) : lh.isRegExp(r) ? r.test(t) : void 0 : void 0)
}
let Bh = class {
  constructor(e) {
    e && this.set(e)
  }
  set(e, t, o) {
    const r = this;

    function s(e, t, o) {
      const s = Sh(t);
      if (!s) throw new Error("header name must be a non-empty string");
      const i = lh.findKey(r, s);
      (!i || void 0 === r[i] || !0 === o || void 0 === o && !1 !== r[i]) && (r[i || t] = Dh(e))
    }
    const i = (e, t) => lh.forEach(e, (e, o) => s(e, o, t));
    if (lh.isPlainObject(e) || e instanceof this.constructor) i(e, t);
    else if (lh.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())) i((e => {
      const t = {};
      let o, r, s;
      return e && e.split("\n")
        .forEach(function(e) {
          s = e.indexOf(":"), o = e.substring(0, s)
            .trim()
            .toLowerCase(), r = e.substring(s + 1)
            .trim(), !o || t[o] && Rh[o] || ("set-cookie" === o ? t[o] ? t[o].push(r) : t[o] = [r] : t[o] = t[o] ? t[o] + ", " + r : r)
        }), t
    })(e), t);
    else if (lh.isObject(e) && lh.isIterable(e)) {
      let o, r, s = {};
      for (const t of e) {
        if (!lh.isArray(t)) throw TypeError("Object iterator must return a key-value pair");
        s[r = t[0]] = (o = s[r]) ? lh.isArray(o) ? [...o, t[1]] : [o, t[1]] : t[1]
      }
      i(s, t)
    } else null != e && s(t, e, o);
    return this
  }
  get(e, t) {
    if (e = Sh(e)) {
      const o = lh.findKey(this, e);
      if (o) {
        const e = this[o];
        if (!t) return e;
        if (!0 === t) return function(e) {
          const t = Object.create(null),
            o = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
          let r;
          for (; r = o.exec(e);) t[r[1]] = r[2];
          return t
        }(e);
        if (lh.isFunction(t)) return t.call(this, e, o);
        if (lh.isRegExp(t)) return t.exec(e);
        throw new TypeError("parser must be boolean|regexp|function")
      }
    }
  }
  has(e, t) {
    if (e = Sh(e)) {
      const o = lh.findKey(this, e);
      return !(!o || void 0 === this[o] || t && !jh(0, this[o], o, t))
    }
    return !1
  }
  delete(e, t) {
    const o = this;
    let r = !1;

    function s(e) {
      if (e = Sh(e)) {
        const s = lh.findKey(o, e);
        !s || t && !jh(0, o[s], s, t) || (delete o[s], r = !0)
      }
    }
    return lh.isArray(e) ? e.forEach(s) : s(e), r
  }
  clear(e) {
    const t = Object.keys(this);
    let o = t.length,
      r = !1;
    for (; o--;) {
      const s = t[o];
      e && !jh(0, this[s], s, e, !0) || (delete this[s], r = !0)
    }
    return r
  }
  normalize(e) {
    const t = this,
      o = {};
    return lh.forEach(this, (r, s) => {
      const i = lh.findKey(o, s);
      if (i) return t[i] = Dh(r), void delete t[s];
      const n = e ? function(e) {
          return e.trim()
            .toLowerCase()
            .replace(/([a-z\d])(\w*)/g, (e, t, o) => t.toUpperCase() + o)
        }(s) : String(s)
        .trim();
      n !== s && delete t[s], t[n] = Dh(r), o[n] = !0
    }), this
  }
  concat(...e) {
    return this.constructor.concat(this, ...e)
  }
  toJSON(e) {
    const t = Object.create(null);
    return lh.forEach(this, (o, r) => {
      null != o && !1 !== o && (t[r] = e && lh.isArray(o) ? o.join(", ") : o)
    }), t
  } [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]()
  }
  toString() {
    return Object.entries(this.toJSON())
      .map(([e, t]) => e + ": " + t)
      .join("\n")
  }
  getSetCookie() {
    return this.get("set-cookie") || []
  }
  get[Symbol.toStringTag]() {
    return "AxiosHeaders"
  }
  static from(e) {
    return e instanceof this ? e : new this(e)
  }
  static concat(e, ...t) {
    const o = new this(e);
    return t.forEach(e => o.set(e)), o
  }
  static accessor(e) {
    const t = (this[Ih] = this[Ih] = {
        accessors: {}
      })
      .accessors,
      o = this.prototype;

    function r(e) {
      const r = Sh(e);
      t[r] || (! function(e, t) {
        const o = lh.toCamelCase(" " + t);
        ["get", "set", "has"].forEach(r => {
          Object.defineProperty(e, r + o, {
            value: function(e, o, s) {
              return this[r].call(this, t, e, o, s)
            },
            configurable: !0
          })
        })
      }(o, e), t[r] = !0)
    }
    return lh.isArray(e) ? e.forEach(r) : r(e), this
  }
};

function zh(e, t) {
  const o = this || Ch,
    r = t || o,
    s = Bh.from(r.headers);
  let i = r.data;
  return lh.forEach(e, function(e) {
    i = e.call(o, i, s.normalize(), t ? t.status : void 0)
  }), s.normalize(), i
}

function Fh(e) {
  return !(!e || !e.__CANCEL__)
}
Bh.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), lh.reduceDescriptors(Bh.prototype, ({
  value: e
}, t) => {
  let o = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(e) {
      this[o] = e
    }
  }
}), lh.freezeMethods(Bh);
let Vh = class extends ch {
  constructor(e, t, o) {
    super(null == e ? "canceled" : e, ch.ERR_CANCELED, t, o), this.name = "CanceledError", this.__CANCEL__ = !0
  }
};

function Nh(e, t, o) {
  const r = o.config.validateStatus;
  o.status && r && !r(o.status) ? t(new ch("Request failed with status code " + o.status, [ch.ERR_BAD_REQUEST, ch.ERR_BAD_RESPONSE][Math.floor(o.status / 100) - 4], o.config, o.request, o)) : e(o)
}
const Mh = (e, t, o = 3) => {
    let r = 0;
    const s = function(e, t) {
      e = e || 10;
      const o = new Array(e),
        r = new Array(e);
      let s, i = 0,
        n = 0;
      return t = void 0 !== t ? t : 1e3,
        function(a) {
          const l = Date.now(),
            c = r[n];
          s || (s = l), o[i] = a, r[i] = l;
          let d = n,
            p = 0;
          for (; d !== i;) p += o[d++], d %= e;
          if (i = (i + 1) % e, i === n && (n = (n + 1) % e), l - s < t) return;
          const u = c && l - c;
          return u ? Math.round(1e3 * p / u) : void 0
        }
    }(50, 250);
    return function(e, t) {
      let o, r, s = 0,
        i = 1e3 / t;
      const n = (t, i = Date.now()) => {
        s = i, o = null, r && (clearTimeout(r), r = null), e(...t)
      };
      return [(...e) => {
        const t = Date.now(),
          a = t - s;
        a >= i ? n(e, t) : (o = e, r || (r = setTimeout(() => {
          r = null, n(o)
        }, i - a)))
      }, () => o && n(o)]
    }(o => {
      const i = o.loaded,
        n = o.lengthComputable ? o.total : void 0,
        a = i - r,
        l = s(a);
      r = i;
      e({
        loaded: i,
        total: n,
        progress: n ? i / n : void 0,
        bytes: a,
        rate: l || void 0,
        estimated: l && n && i <= n ? (n - i) / l : void 0,
        event: o,
        lengthComputable: null != n,
        [t ? "download" : "upload"]: !0
      })
    }, o)
  },
  Uh = (e, t) => {
    const o = null != e;
    return [r => t[0]({
      lengthComputable: o,
      total: e,
      loaded: r
    }), t[1]]
  },
  qh = e => (...t) => lh.asap(() => e(...t)),
  Wh = Th.hasStandardBrowserEnv ? ((e, t) => o => (o = new URL(o, Th.origin), e.protocol === o.protocol && e.host === o.host && (t || e.port === o.port)))(new URL(Th.origin), Th.navigator && /(msie|trident)/i.test(Th.navigator.userAgent)) : () => !0,
  $h = Th.hasStandardBrowserEnv ? {
    write(e, t, o, r, s, i, n) {
      if ("undefined" == typeof document) return;
      const a = [`${e}=${encodeURIComponent(t)}`];
      lh.isNumber(o) && a.push(`expires=${new Date(o).toUTCString()}`), lh.isString(r) && a.push(`path=${r}`), lh.isString(s) && a.push(`domain=${s}`), !0 === i && a.push("secure"), lh.isString(n) && a.push(`SameSite=${n}`), document.cookie = a.join("; ")
    },
    read(e) {
      if ("undefined" == typeof document) return null;
      const t = document.cookie.match(new RegExp("(?:^|; )" + e + "=([^;]*)"));
      return t ? decodeURIComponent(t[1]) : null
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5, "/")
    }
  } : {
    write() {},
    read: () => null,
    remove() {}
  };

function Hh(e, t, o) {
  let r = !("string" == typeof(s = t) && /^([a-z][a-z\d+\-.]*:)?\/\//i.test(s));
  var s;
  return e && (r || 0 == o) ? function(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
  }(e, t) : t
}
const Qh = e => e instanceof Bh ? {
  ...e
} : e;

function Gh(e, t) {
  t = t || {};
  const o = {};

  function r(e, t, o, r) {
    return lh.isPlainObject(e) && lh.isPlainObject(t) ? lh.merge.call({
      caseless: r
    }, e, t) : lh.isPlainObject(t) ? lh.merge({}, t) : lh.isArray(t) ? t.slice() : t
  }

  function s(e, t, o, s) {
    return lh.isUndefined(t) ? lh.isUndefined(e) ? void 0 : r(void 0, e, 0, s) : r(e, t, 0, s)
  }

  function i(e, t) {
    if (!lh.isUndefined(t)) return r(void 0, t)
  }

  function n(e, t) {
    return lh.isUndefined(t) ? lh.isUndefined(e) ? void 0 : r(void 0, e) : r(void 0, t)
  }

  function a(o, s, i) {
    return i in t ? r(o, s) : i in e ? r(void 0, o) : void 0
  }
  const l = {
    url: i,
    method: i,
    data: i,
    baseURL: n,
    transformRequest: n,
    transformResponse: n,
    paramsSerializer: n,
    timeout: n,
    timeoutMessage: n,
    withCredentials: n,
    withXSRFToken: n,
    adapter: n,
    responseType: n,
    xsrfCookieName: n,
    xsrfHeaderName: n,
    onUploadProgress: n,
    onDownloadProgress: n,
    decompress: n,
    maxContentLength: n,
    maxBodyLength: n,
    beforeRedirect: n,
    transport: n,
    httpAgent: n,
    httpsAgent: n,
    cancelToken: n,
    socketPath: n,
    responseEncoding: n,
    validateStatus: a,
    headers: (e, t, o) => s(Qh(e), Qh(t), 0, !0)
  };
  return lh.forEach(Object.keys({
    ...e,
    ...t
  }), function(r) {
    if ("__proto__" === r || "constructor" === r || "prototype" === r) return;
    const i = lh.hasOwnProp(l, r) ? l[r] : s,
      n = i(e[r], t[r], r);
    lh.isUndefined(n) && i !== a || (o[r] = n)
  }), o
}
const Kh = e => {
    const t = Gh({}, e);
    let {
      data: o,
      withXSRFToken: r,
      xsrfHeaderName: s,
      xsrfCookieName: i,
      headers: n,
      auth: a
    } = t;
    if (t.headers = n = Bh.from(n), t.url = vh(Hh(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && n.set("Authorization", "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))), lh.isFormData(o))
      if (Th.hasStandardBrowserEnv || Th.hasStandardBrowserWebWorkerEnv) n.setContentType(void 0);
      else if (lh.isFunction(o.getHeaders)) {
      const e = o.getHeaders(),
        t = ["content-type", "content-length"];
      Object.entries(e)
        .forEach(([e, o]) => {
          t.includes(e.toLowerCase()) && n.set(e, o)
        })
    }
    if (Th.hasStandardBrowserEnv && (r && lh.isFunction(r) && (r = r(t)), r || !1 !== r && Wh(t.url))) {
      const e = s && i && $h.read(i);
      e && n.set(s, e)
    }
    return t
  },
  Yh = "undefined" != typeof XMLHttpRequest && function(e) {
    return new Promise(function(t, o) {
      const r = Kh(e);
      let s = r.data;
      const i = Bh.from(r.headers)
        .normalize();
      let n, a, l, c, d, {
        responseType: p,
        onUploadProgress: u,
        onDownloadProgress: f
      } = r;

      function m() {
        c && c(), d && d(), r.cancelToken && r.cancelToken.unsubscribe(n), r.signal && r.signal.removeEventListener("abort", n)
      }
      let b = new XMLHttpRequest;

      function g() {
        if (!b) return;
        const r = Bh.from("getAllResponseHeaders" in b && b.getAllResponseHeaders());
        Nh(function(e) {
          t(e), m()
        }, function(e) {
          o(e), m()
        }, {
          data: p && "text" !== p && "json" !== p ? b.response : b.responseText,
          status: b.status,
          statusText: b.statusText,
          headers: r,
          config: e,
          request: b
        }), b = null
      }
      b.open(r.method.toUpperCase(), r.url, !0), b.timeout = r.timeout, "onloadend" in b ? b.onloadend = g : b.onreadystatechange = function() {
        b && 4 === b.readyState && (0 !== b.status || b.responseURL && 0 === b.responseURL.indexOf("file:")) && setTimeout(g)
      }, b.onabort = function() {
        b && (o(new ch("Request aborted", ch.ECONNABORTED, e, b)), b = null)
      }, b.onerror = function(t) {
        const r = t && t.message ? t.message : "Network Error",
          s = new ch(r, ch.ERR_NETWORK, e, b);
        s.event = t || null, o(s), b = null
      }, b.ontimeout = function() {
        let t = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
        const s = r.transitional || kh;
        r.timeoutErrorMessage && (t = r.timeoutErrorMessage), o(new ch(t, s.clarifyTimeoutError ? ch.ETIMEDOUT : ch.ECONNABORTED, e, b)), b = null
      }, void 0 === s && i.setContentType(null), "setRequestHeader" in b && lh.forEach(i.toJSON(), function(e, t) {
        b.setRequestHeader(t, e)
      }), lh.isUndefined(r.withCredentials) || (b.withCredentials = !!r.withCredentials), p && "json" !== p && (b.responseType = r.responseType), f && ([l, d] = Mh(f, !0), b.addEventListener("progress", l)), u && b.upload && ([a, c] = Mh(u), b.upload.addEventListener("progress", a), b.upload.addEventListener("loadend", c)), (r.cancelToken || r.signal) && (n = t => {
        b && (o(!t || t.type ? new Vh(null, e, b) : t), b.abort(), b = null)
      }, r.cancelToken && r.cancelToken.subscribe(n), r.signal && (r.signal.aborted ? n() : r.signal.addEventListener("abort", n)));
      const _ = function(e) {
        const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
        return t && t[1] || ""
      }(r.url);
      _ && -1 === Th.protocols.indexOf(_) ? o(new ch("Unsupported protocol " + _ + ":", ch.ERR_BAD_REQUEST, e)) : b.send(s || null)
    })
  },
  Jh = (e, t) => {
    const {
      length: o
    } = e = e ? e.filter(Boolean) : [];
    if (t || o) {
      let o, r = new AbortController;
      const s = function(e) {
        if (!o) {
          o = !0, n();
          const t = e instanceof Error ? e : this.reason;
          r.abort(t instanceof ch ? t : new Vh(t instanceof Error ? t.message : t))
        }
      };
      let i = t && setTimeout(() => {
        i = null, s(new ch(`timeout of ${t}ms exceeded`, ch.ETIMEDOUT))
      }, t);
      const n = () => {
        e && (i && clearTimeout(i), i = null, e.forEach(e => {
          e.unsubscribe ? e.unsubscribe(s) : e.removeEventListener("abort", s)
        }), e = null)
      };
      e.forEach(e => e.addEventListener("abort", s));
      const {
        signal: a
      } = r;
      return a.unsubscribe = () => lh.asap(n), a
    }
  },
  Zh = function*(e, t) {
    let o = e.byteLength;
    if (o < t) return void(yield e);
    let r, s = 0;
    for (; s < o;) r = s + t, yield e.slice(s, r), s = r
  },
  Xh = async function*(e) {
    if (e[Symbol.asyncIterator]) return void(yield* e);
    const t = e.getReader();
    try {
      for (;;) {
        const {
          done: e,
          value: o
        } = await t.read();
        if (e) break;
        yield o
      }
    } finally {
      await t.cancel()
    }
  }, eg = (e, t, o, r) => {
    const s = async function*(e, t) {
      for await (const o of Xh(e)) yield* Zh(o, t)
    }(e, t);
    let i, n = 0,
      a = e => {
        i || (i = !0, r && r(e))
      };
    return new ReadableStream({
      async pull(e) {
        try {
          const {
            done: t,
            value: r
          } = await s.next();
          if (t) return a(), void e.close();
          let i = r.byteLength;
          if (o) {
            let e = n += i;
            o(e)
          }
          e.enqueue(new Uint8Array(r))
        } catch (t) {
          throw a(t), t
        }
      },
      cancel: e => (a(e), s.return())
    }, {
      highWaterMark: 2
    })
  }, {
    isFunction: tg
  } = lh, og = (({
    Request: e,
    Response: t
  }) => ({
    Request: e,
    Response: t
  }))(lh.global), {
    ReadableStream: rg,
    TextEncoder: sg
  } = lh.global, ig = (e, ...t) => {
    try {
      return !!e(...t)
    } catch (q_) {
      return !1
    }
  }, ng = e => {
    e = lh.merge.call({
      skipUndefined: !0
    }, og, e);
    const {
      fetch: t,
      Request: o,
      Response: r
    } = e, s = t ? tg(t) : "function" == typeof fetch, i = tg(o), n = tg(r);
    if (!s) return !1;
    const a = s && tg(rg),
      l = s && ("function" == typeof sg ? (e => t => e.encode(t))(new sg) : async e => new Uint8Array(await new o(e)
        .arrayBuffer())),
      c = i && a && ig(() => {
        let e = !1;
        const t = new o(Th.origin, {
            body: new rg,
            method: "POST",
            get duplex() {
              return e = !0, "half"
            }
          })
          .headers.has("Content-Type");
        return e && !t
      }),
      d = n && a && ig(() => lh.isReadableStream(new r("")
        .body)),
      p = {
        stream: d && (e => e.body)
      };
    s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(e => {
      !p[e] && (p[e] = (t, o) => {
        let r = t && t[e];
        if (r) return r.call(t);
        throw new ch(`Response type '${e}' is not supported`, ch.ERR_NOT_SUPPORT, o)
      })
    });
    const u = async (e, t) => {
      const r = lh.toFiniteNumber(e.getContentLength());
      return null == r ? (async e => {
        if (null == e) return 0;
        if (lh.isBlob(e)) return e.size;
        if (lh.isSpecCompliantForm(e)) {
          const t = new o(Th.origin, {
            method: "POST",
            body: e
          });
          return (await t.arrayBuffer())
            .byteLength
        }
        return lh.isArrayBufferView(e) || lh.isArrayBuffer(e) ? e.byteLength : (lh.isURLSearchParams(e) && (e += ""), lh.isString(e) ? (await l(e))
          .byteLength : void 0)
      })(t) : r
    };
    return async e => {
      let {
        url: s,
        method: n,
        data: a,
        signal: l,
        cancelToken: f,
        timeout: m,
        onDownloadProgress: b,
        onUploadProgress: g,
        responseType: _,
        headers: v,
        withCredentials: y = "same-origin",
        fetchOptions: k
      } = Kh(e), x = t || fetch;
      _ = _ ? (_ + "")
        .toLowerCase() : "text";
      let E = Jh([l, f && f.toAbortSignal()], m),
        w = null;
      const A = E && E.unsubscribe && (() => {
        E.unsubscribe()
      });
      let L;
      try {
        if (g && c && "get" !== n && "head" !== n && 0 !== (L = await u(v, a))) {
          let e, t = new o(s, {
            method: "POST",
            body: a,
            duplex: "half"
          });
          if (lh.isFormData(a) && (e = t.headers.get("content-type")) && v.setContentType(e), t.body) {
            const [e, o] = Uh(L, Mh(qh(g)));
            a = eg(t.body, 65536, e, o)
          }
        }
        lh.isString(y) || (y = y ? "include" : "omit");
        const t = i && "credentials" in o.prototype,
          l = {
            ...k,
            signal: E,
            method: n.toUpperCase(),
            headers: v.normalize()
              .toJSON(),
            body: a,
            duplex: "half",
            credentials: t ? y : void 0
          };
        w = i && new o(s, l);
        let f = await (i ? x(w, k) : x(s, l));
        const m = d && ("stream" === _ || "response" === _);
        if (d && (b || m && A)) {
          const e = {};
          ["status", "statusText", "headers"].forEach(t => {
            e[t] = f[t]
          });
          const t = lh.toFiniteNumber(f.headers.get("content-length")),
            [o, s] = b && Uh(t, Mh(qh(b), !0)) || [];
          f = new r(eg(f.body, 65536, o, () => {
            s && s(), A && A()
          }), e)
        }
        _ = _ || "text";
        let P = await p[lh.findKey(p, _) || "text"](f, e);
        return !m && A && A(), await new Promise((t, o) => {
          Nh(t, o, {
            data: P,
            headers: Bh.from(f.headers),
            status: f.status,
            statusText: f.statusText,
            config: e,
            request: w
          })
        })
      } catch (P) {
        if (A && A(), P && "TypeError" === P.name && /Load failed|fetch/i.test(P.message)) throw Object.assign(new ch("Network Error", ch.ERR_NETWORK, e, w, P && P.response), {
          cause: P.cause || P
        });
        throw ch.from(P, P && P.code, e, w, P && P.response)
      }
    }
  }, ag = new Map, lg = e => {
    let t = e && e.env || {};
    const {
      fetch: o,
      Request: r,
      Response: s
    } = t, i = [r, s, o];
    let n, a, l = i.length,
      c = ag;
    for (; l--;) n = i[l], a = c.get(n), void 0 === a && c.set(n, a = l ? new Map : ng(t)), c = a;
    return a
  };
lg();
const cg = {
  http: null,
  xhr: Yh,
  fetch: {
    get: lg
  }
};
lh.forEach(cg, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", {
        value: t
      })
    } catch (q_) {}
    Object.defineProperty(e, "adapterName", {
      value: t
    })
  }
});
const dg = e => `- ${e}`,
  pg = e => lh.isFunction(e) || null === e || !1 === e;
const ug = {
  getAdapter: function(e, t) {
    e = lh.isArray(e) ? e : [e];
    const {
      length: o
    } = e;
    let r, s;
    const i = {};
    for (let n = 0; n < o; n++) {
      let o;
      if (r = e[n], s = r, !pg(r) && (s = cg[(o = String(r))
          .toLowerCase()], void 0 === s)) throw new ch(`Unknown adapter '${o}'`);
      if (s && (lh.isFunction(s) || (s = s.get(t)))) break;
      i[o || "#" + n] = s
    }
    if (!s) {
      const e = Object.entries(i)
        .map(([e, t]) => `adapter ${e} ` + (!1 === t ? "is not supported by the environment" : "is not available in the build"));
      let t = o ? e.length > 1 ? "since :\n" + e.map(dg)
        .join("\n") : " " + dg(e[0]) : "as no adapter specified";
      throw new ch("There is no suitable adapter to dispatch the request " + t, "ERR_NOT_SUPPORT")
    }
    return s
  },
  adapters: cg
};

function fg(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new Vh(null, e)
}

function mg(e) {
  fg(e), e.headers = Bh.from(e.headers), e.data = zh.call(e, e.transformRequest), -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1);
  return ug.getAdapter(e.adapter || Ch.adapter, e)(e)
    .then(function(t) {
      return fg(e), t.data = zh.call(e, e.transformResponse, t), t.headers = Bh.from(t.headers), t
    }, function(t) {
      return Fh(t) || (fg(e), t && t.response && (t.response.data = zh.call(e, e.transformResponse, t.response), t.response.headers = Bh.from(t.response.headers))), Promise.reject(t)
    })
}
const bg = "1.13.5",
  hg = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  hg[e] = function(o) {
    return typeof o === e || "a" + (t < 1 ? "n " : " ") + e
  }
});
const gg = {};
hg.transitional = function(e, t, o) {
  function r(e, t) {
    return "[Axios v" + bg + "] Transitional option '" + e + "'" + t + (o ? ". " + o : "")
  }
  return (o, s, i) => {
    if (!1 === e) throw new ch(r(s, " has been removed" + (t ? " in " + t : "")), ch.ERR_DEPRECATED);
    return t && !gg[s] && (gg[s] = !0, console.warn(r(s, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(o, s, i)
  }
}, hg.spelling = function(e) {
  return (t, o) => (console.warn(`${o} is likely a misspelling of ${e}`), !0)
};
const _g = {
    assertOptions: function(e, t, o) {
      if ("object" != typeof e) throw new ch("options must be an object", ch.ERR_BAD_OPTION_VALUE);
      const r = Object.keys(e);
      let s = r.length;
      for (; s-- > 0;) {
        const i = r[s],
          n = t[i];
        if (n) {
          const t = e[i],
            o = void 0 === t || n(t, i, e);
          if (!0 !== o) throw new ch("option " + i + " must be " + o, ch.ERR_BAD_OPTION_VALUE);
          continue
        }
        if (!0 !== o) throw new ch("Unknown option " + i, ch.ERR_BAD_OPTION)
      }
    },
    validators: hg
  },
  vg = _g.validators;
let yg = class {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new yh,
      response: new yh
    }
  }
  async request(e, t) {
    try {
      return await this._request(e, t)
    } catch (o) {
      if (o instanceof Error) {
        let e = {};
        Error.captureStackTrace ? Error.captureStackTrace(e) : e = new Error;
        const t = e.stack ? e.stack.replace(/^.+\n/, "") : "";
        try {
          o.stack ? t && !String(o.stack)
            .endsWith(t.replace(/^.+\n.+\n/, "")) && (o.stack += "\n" + t) : o.stack = t
        } catch (q_) {}
      }
      throw o
    }
  }
  _request(e, t) {
    "string" == typeof e ? (t = t || {})
      .url = e : t = e || {}, t = Gh(this.defaults, t);
    const {
      transitional: o,
      paramsSerializer: r,
      headers: s
    } = t;
    void 0 !== o && _g.assertOptions(o, {
        silentJSONParsing: vg.transitional(vg.boolean),
        forcedJSONParsing: vg.transitional(vg.boolean),
        clarifyTimeoutError: vg.transitional(vg.boolean),
        legacyInterceptorReqResOrdering: vg.transitional(vg.boolean)
      }, !1), null != r && (lh.isFunction(r) ? t.paramsSerializer = {
        serialize: r
      } : _g.assertOptions(r, {
        encode: vg.function,
        serialize: vg.function
      }, !0)), void 0 !== t.allowAbsoluteUrls || (void 0 !== this.defaults.allowAbsoluteUrls ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), _g.assertOptions(t, {
        baseUrl: vg.spelling("baseURL"),
        withXsrfToken: vg.spelling("withXSRFToken")
      }, !0), t.method = (t.method || this.defaults.method || "get")
      .toLowerCase();
    let i = s && lh.merge(s.common, s[t.method]);
    s && lh.forEach(["delete", "get", "head", "post", "put", "patch", "common"], e => {
      delete s[e]
    }), t.headers = Bh.concat(i, s);
    const n = [];
    let a = !0;
    this.interceptors.request.forEach(function(e) {
      if ("function" == typeof e.runWhen && !1 === e.runWhen(t)) return;
      a = a && e.synchronous;
      const o = t.transitional || kh;
      o && o.legacyInterceptorReqResOrdering ? n.unshift(e.fulfilled, e.rejected) : n.push(e.fulfilled, e.rejected)
    });
    const l = [];
    let c;
    this.interceptors.response.forEach(function(e) {
      l.push(e.fulfilled, e.rejected)
    });
    let d, p = 0;
    if (!a) {
      const e = [mg.bind(this), void 0];
      for (e.unshift(...n), e.push(...l), d = e.length, c = Promise.resolve(t); p < d;) c = c.then(e[p++], e[p++]);
      return c
    }
    d = n.length;
    let u = t;
    for (; p < d;) {
      const e = n[p++],
        t = n[p++];
      try {
        u = e(u)
      } catch (f) {
        t.call(this, f);
        break
      }
    }
    try {
      c = mg.call(this, u)
    } catch (f) {
      return Promise.reject(f)
    }
    for (p = 0, d = l.length; p < d;) c = c.then(l[p++], l[p++]);
    return c
  }
  getUri(e) {
    return vh(Hh((e = Gh(this.defaults, e))
      .baseURL, e.url, e.allowAbsoluteUrls), e.params, e.paramsSerializer)
  }
};
lh.forEach(["delete", "get", "head", "options"], function(e) {
  yg.prototype[e] = function(t, o) {
    return this.request(Gh(o || {}, {
      method: e,
      url: t,
      data: (o || {})
        .data
    }))
  }
}), lh.forEach(["post", "put", "patch"], function(e) {
  function t(t) {
    return function(o, r, s) {
      return this.request(Gh(s || {}, {
        method: e,
        headers: t ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: r
      }))
    }
  }
  yg.prototype[e] = t(), yg.prototype[e + "Form"] = t(!0)
});
const kg = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(kg)
  .forEach(([e, t]) => {
    kg[t] = e
  });
const xg = function e(t) {
  const o = new yg(t),
    r = yb(yg.prototype.request, o);
  return lh.extend(r, yg.prototype, o, {
    allOwnKeys: !0
  }), lh.extend(r, o, null, {
    allOwnKeys: !0
  }), r.create = function(o) {
    return e(Gh(t, o))
  }, r
}(Ch);
xg.Axios = yg, xg.CanceledError = Vh, xg.CancelToken = class e {
  constructor(e) {
    if ("function" != typeof e) throw new TypeError("executor must be a function.");
    let t;
    this.promise = new Promise(function(e) {
      t = e
    });
    const o = this;
    this.promise.then(e => {
      if (!o._listeners) return;
      let t = o._listeners.length;
      for (; t-- > 0;) o._listeners[t](e);
      o._listeners = null
    }), this.promise.then = e => {
      let t;
      const r = new Promise(e => {
          o.subscribe(e), t = e
        })
        .then(e);
      return r.cancel = function() {
        o.unsubscribe(t)
      }, r
    }, e(function(e, r, s) {
      o.reason || (o.reason = new Vh(e, r, s), t(o.reason))
    })
  }
  throwIfRequested() {
    if (this.reason) throw this.reason
  }
  subscribe(e) {
    this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
  }
  unsubscribe(e) {
    if (!this._listeners) return;
    const t = this._listeners.indexOf(e); - 1 !== t && this._listeners.splice(t, 1)
  }
  toAbortSignal() {
    const e = new AbortController,
      t = t => {
        e.abort(t)
      };
    return this.subscribe(t), e.signal.unsubscribe = () => this.unsubscribe(t), e.signal
  }
  static source() {
    let t;
    return {
      token: new e(function(e) {
        t = e
      }),
      cancel: t
    }
  }
}, xg.isCancel = Fh, xg.VERSION = bg, xg.toFormData = mh, xg.AxiosError = ch, xg.Cancel = xg.CanceledError, xg.all = function(e) {
  return Promise.all(e)
}, xg.spread = function(e) {
  return function(t) {
    return e.apply(null, t)
  }
}, xg.isAxiosError = function(e) {
  return lh.isObject(e) && !0 === e.isAxiosError
}, xg.mergeConfig = Gh, xg.AxiosHeaders = Bh, xg.formToJSON = e => Oh(lh.isHTMLForm(e) ? new FormData(e) : e), xg.getAdapter = ug.getAdapter, xg.HttpStatusCode = kg, xg.default = xg;
const {
  Axios: Eg,
  AxiosError: wg,
  CanceledError: Ag,
  isCancel: Lg,
  CancelToken: Pg,
  VERSION: Tg,
  all: Og,
  Cancel: Cg,
  isAxiosError: Rg,
  spread: Ig,
  toFormData: Sg,
  AxiosHeaders: Dg,
  HttpStatusCode: jg,
  formToJSON: Bg,
  getAdapter: zg,
  mergeConfig: Fg
} = xg;
var Vg = (e => (e.GET = "GET", e.POST = "POST", e.PUT = "PUT", e.PATCH = "PATCH", e.DELETE = "DELETE", e))(Vg || {}),
  Ng = (e => (e[e.OK = 200] = "OK", e[e.CREATED = 201] = "CREATED", e[e.ACCEPTED = 202] = "ACCEPTED", e[e.BAD_REQUEST = 400] = "BAD_REQUEST", e[e.UNAUTHORIZED = 401] = "UNAUTHORIZED", e[e.FORBIDDEN = 403] = "FORBIDDEN", e[e.NOT_FOUND = 404] = "NOT_FOUND", e[e.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", e[e.CONFLICT = 409] = "CONFLICT", e[e.GONE = 410] = "GONE", e[e.PAGE_EXPIRED = 419] = "PAGE_EXPIRED", e[e.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", e[e.LOGIN_TIMEOUT = 440] = "LOGIN_TIMEOUT", e[e.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", e[e.BAD_GATEWAY = 502] = "BAD_GATEWAY", e[e.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", e[e.UNKOWN = 0] = "UNKOWN", e))(Ng || {});
class Mg {
  constructor(e) {
    this.options = e, this.headers = {}, this.queryParams = {}, this.pathParams = {}, this.middlewares = [], this.client = xg.create({})
  }
  useHeader(e) {
    this.headers = {
      ...this.headers,
      ...e
    }
  }
  useAcceptJSON() {
    this.headers.Accept = "application/json"
  }
  useContentTypeJSON(e = !1) {
    this.headers["Content-Type"] = "application/json" + (e ? ";charset=utf-8" : "")
  }
  useApplePayFlag() {
    this.headers["X-Apple-Pay"] = String(void 0 !== window.ApplePaySession)
  }
  usePathParameter(e) {
    this.pathParams = {
      ...this.pathParams,
      ...e
    }
  }
  useQueryParameter(e, t) {
    this.queryParams[e] = String(t)
  }
  useCancelToken(e) {
    this.cancelToken = e
  }
  useMiddleware(e) {
    this.middlewares.push(e)
  }
  preparePath(e, ...t) {
    for (const o of t)
      if (void 0 !== o)
        for (const t in o) void 0 !== o[t] && (e = e.replace(`{${t}}`, encodeURIComponent(o[t])));
    return e
  }
  prepareHeaders(...e) {
    const t = new Dg;
    for (const o of e)
      if (void 0 !== o)
        for (const e in o) t.set(e, o[e]);
    return t
  }
  prepareQueryParameters(...e) {
    const t = {};
    for (const o of e)
      if (void 0 !== o)
        for (const e in o) void 0 !== o[e] && (t[e] = String(o[e]));
    return t
  }
  async request(e, t, o, r, s, i, n) {
    const a = this.prepareHeaders(this.options.headers, this.headers, i),
      l = this.prepareQueryParameters(this.options.queryParams, this.queryParams, r);
    a.has("Content-Type") && !s && (s = {});
    let c = Pn({
      baseURL: this.options.baseUrl
    }, this.options?.requestOptions ?? {});
    c = Pn(c, n ?? {}), c = Pn(c, {
      url: this.preparePath(e, this.pathParams, t),
      method: o ?? Vg.GET,
      params: l,
      headers: a,
      data: s,
      cancelToken: this.cancelToken
    });
    for (const p of [...this.options.middlewares ?? [], ...this.middlewares]) c = await p.beforeRequest(c);
    try {
      let e = await this.client.request(c),
        t = {
          ...e,
          statusCode: e.status,
          status: Object.keys(Ng)[Object.values(Ng)
            .indexOf(e.status)] ?? Ng.UNKOWN
        };
      for (const o of [...this.options.middlewares ?? [], ...this.middlewares]) t = await o.afterSuccessfulRequest(c, t);
      return t
    } catch (q_) {
      let t;
      q_ instanceof wg && (t = q_);
      let o = {
        statusCode: t?.response?.status ?? 500,
        status: t ? Object.keys(Ng)[Object.values(Ng)
          .indexOf(t?.response?.status ?? 0)] ?? Ng.UNKOWN : Ng.UNKOWN,
        isRequestError: void 0 !== t,
        isAxiosError: void 0 !== t,
        error: t ?? q_,
        data: t?.response?.data
      };
      for (const r of [...this.options.middlewares ?? [], ...this.middlewares]) try {
        return await r.afterFailedRequest(c, o)
      } catch (d) {
        o = d
      }
      throw o
    }
  }
  async get(e) {
    return this.request(e.path, e.pathParams, Vg.GET, e.queryParams, void 0, e.headers, e.requestOptions)
  }
  async post(e) {
    return this.request(e.path, e.pathParams, Vg.POST, e.queryParams, e.body, e.headers, e.requestOptions)
  }
  async put(e) {
    return this.request(e.path, e.pathParams, Vg.PUT, e.queryParams, e.body, e.headers, e.requestOptions)
  }
  async patch(e) {
    return this.request(e.path, e.pathParams, Vg.PATCH, e.queryParams, e.body, e.headers, e.requestOptions)
  }
  async delete(e) {
    return this.request(e.path, e.pathParams, Vg.DELETE, e.queryParams, e.body, e.headers, e.requestOptions)
  }
}
class Ug {
  async beforeRequest(e) {
    return e
  }
  async afterSuccessfulRequest(e, t) {
    return t
  }
  async afterFailedRequest(e, t) {
    throw t
  }
}
const qg = (e, t) => {
  if (Array.isArray(t) || (t = [t]), t.includes(e)) return !0;
  const o = Ng[e];
  return !!t.includes(o)
};
class Wg extends Ug {
  async afterFailedRequest(e, t) {
    throw {
      ...t,
      messages: t?.data?.messages,
      flowHint: t?.data?.flowHint
    }
  }
}
class $g extends Mg {
  constructor(e) {
    super({
      baseUrl: "/cart-api/v3"
    }), this.useAcceptJSON(), this.useMiddleware(new Wg), e?.forEach(e => {
      this.useMiddleware(e)
    })
  }
  buildParameters(e) {
    const t = {},
      o = {};
    return e.cartId && (t.cartId = e.cartId), e.language && (t.language = e.language), e.country && (o.country = e.country), void 0 !== e.zoneId && (t.zoneId = e.zoneId), {
      queryParams: t,
      pathParams: o
    }
  }
  async getCart(e, t, o) {
    if (!e.cartId) return t ? await this.get({
      path: "/cart/customer"
    }) : void console.error("cartId is missing for request GET /cart/{country}");
    const {
      queryParams: r,
      pathParams: s
    } = this.buildParameters(e);
    return await this.get({
      path: "/cart/{country}",
      queryParams: {
        ...r,
        isMergeEnabled: !1 !== o
      },
      pathParams: s
    })
  }
  async updateCartItem(e, t) {
    if (!e.cartId) throw new Error("cartId is missing for request PATCH /cart/{country}");
    const {
      queryParams: o,
      pathParams: r
    } = this.buildParameters(e);
    return await this.patch({
      path: "/cart/{country}",
      queryParams: o,
      pathParams: r,
      body: t
    })
  }
  async addCartItem(e, t) {
    const {
      queryParams: o,
      pathParams: r
    } = this.buildParameters(e);
    return await this.post({
      path: "/cart/list/{country}",
      queryParams: o,
      pathParams: r,
      body: t
    })
  }
  async removeCartItem(e, t, o) {
    if (!e.cartId) throw new Error("cartId is missing for request DELETE /cart/{country}");
    const {
      queryParams: r,
      pathParams: s
    } = this.buildParameters(e);
    return await this.delete({
      path: "/cart/{country}",
      queryParams: {
        ...r,
        erpNumber: t
      },
      pathParams: s,
      requestOptions: o
    })
  }
  async applyCoupon(e, t, o, r, s) {
    if (!e.cartId) throw new Error("cartId is missing for request POST /coupon/{country}");
    const {
      queryParams: i,
      pathParams: n
    } = this.buildParameters(e);
    return await this.post({
      path: "/coupon/{country}",
      body: {
        couponCode: t,
        couponCheckbox: o,
        captchaResponse: r
      },
      queryParams: i,
      pathParams: n,
      requestOptions: s
    })
  }
  async removeCoupon(e, t) {
    if (!e.cartId) throw new Error("cartId is missing for request DELETE /coupon/{country}");
    const {
      queryParams: o,
      pathParams: r
    } = this.buildParameters(e);
    return await this.delete({
      path: "/coupon/{country}",
      queryParams: o,
      pathParams: r,
      requestOptions: t
    })
  }
}
class Hg extends Ug {
  async beforeRequest(e) {
    if (Object.hasOwn(e.params, "cartId") && !e.params.cartId) {
      const t = `No cartId found for request ${e?.method?.toString()}, ${e?.url?.toString()}`;
      throw console.info(t), {
        errorCode: "NO_CART_ID"
      }
    }
    return e
  }
  async afterFailedRequest(e, t) {
    throw {
      ...t,
      messages: t?.data?.messages,
      flowHint: t?.data?.flowHint
    }
  }
}
class Qg extends Mg {
  constructor(e) {
    super({
      baseUrl: "/checkout-api/v3"
    }), this.useAcceptJSON(), this.useContentTypeJSON(), this.useApplePayFlag(), this.useMiddleware(new Hg), e?.forEach(e => {
      this.useMiddleware(e)
    })
  }
  buildParameters(e) {
    const t = {},
      o = {};
    e.country && (o.country = e.country, delete e.country);
    for (const [r, s] of Object.entries(e)) t[r] = s;
    return {
      queryParams: t,
      pathParams: o
    }
  }
  cleanupBirthdateField(e) {
    if (0 !== e?.day || 0 !== e?.month || 0 !== e?.year) return e
  }
  async getAddress(e) {
    const {
      queryParams: t,
      pathParams: o
    } = this.buildParameters(e);
    return await this.get({
      path: "/address/{country}",
      queryParams: t,
      pathParams: o
    })
  }
  async patchDeliveryAddress(e, t, o) {
    const {
      queryParams: r,
      pathParams: s
    } = this.buildParameters(e);
    return (o = o || {})
      .baseURL = "/checkout-api/v4", await this.patch({
        path: "/address/delivery/{country}",
        body: {
          addressId: t
        },
        queryParams: r,
        pathParams: s,
        requestOptions: o
      })
  }
  async postDeliveryAddress(e, t, o) {
    const {
      queryParams: r,
      pathParams: s
    } = this.buildParameters(e);
    return await this.post({
      path: "/address/delivery/{country}",
      body: t,
      queryParams: r,
      pathParams: s,
      requestOptions: o
    })
  }
  async putInvoiceAddress(e, t, o) {
    const {
      queryParams: r,
      pathParams: s
    } = this.buildParameters(e);
    return t.birthDate = this.cleanupBirthdateField(t?.birthDate), await this.put({
      path: "/address/invoice/{country}",
      body: t,
      queryParams: r,
      pathParams: s,
      requestOptions: o
    })
  }
  async postAvailableCarrierOptions(e, t) {
    const {
      queryParams: o,
      pathParams: r
    } = this.buildParameters(e);
    return await this.post({
      path: "/address/carrier/{country}",
      queryParams: o,
      pathParams: r,
      body: t
    })
  }
  async postCheckoutCart(e, t) {
    const {
      queryParams: o,
      pathParams: r
    } = this.buildParameters(e);
    return await this.post({
      path: "/checkout/cart/{country}",
      queryParams: o,
      pathParams: r,
      body: t
    })
  }
  async getConfirmation(e) {
    return await this.get({
      path: "/confirmation",
      queryParams: {
        orderSnapshotId: e
      }
    })
  }
  async getFlow(e) {
    const {
      queryParams: t,
      pathParams: o
    } = this.buildParameters(e);
    return await this.get({
      path: "/flow/{country}",
      queryParams: t,
      pathParams: o
    })
  }
  async postGuestCheckout(e, t, o) {
    const {
      pathParams: r
    } = this.buildParameters(e);
    return await this.post({
      path: "/user/guest/{country}",
      pathParams: r,
      body: t,
      requestOptions: o
    })
  }
  async postGuestRegistration(e, t) {
    const {
      queryParams: o,
      pathParams: r
    } = this.buildParameters(e);
    return await this.post({
      path: "/user/guest-registration/{country}",
      queryParams: o,
      pathParams: r,
      body: t
    })
  }
  async getCheckoutOneClick(e) {
    const {
      queryParams: t,
      pathParams: o
    } = this.buildParameters(e);
    return await this.get({
      path: "/one-click/{country}",
      queryParams: t,
      pathParams: o
    })
  }
  async postCheckoutOneClick(e, t) {
    const {
      queryParams: o,
      pathParams: r
    } = this.buildParameters(e);
    return await this.post({
      path: "/one-click/{country}",
      queryParams: o,
      pathParams: r,
      body: t
    })
  }
  async getPayment(e) {
    const {
      queryParams: t,
      pathParams: o
    } = this.buildParameters(e);
    return await this.get({
      path: "/payment/{country}",
      queryParams: t,
      pathParams: o
    })
  }
  async postPayment(e, t, o) {
    const {
      queryParams: r
    } = this.buildParameters(e);
    return await this.post({
      path: "/payment",
      body: t,
      queryParams: r,
      requestOptions: o
    })
  }
  async postCheckoutSession(e) {
    const {
      queryParams: t,
      pathParams: o
    } = this.buildParameters(e);
    return await this.post({
      path: "/init/{country}",
      queryParams: t,
      pathParams: o
    })
  }
  async postCheckoutSessionFlashsales(e) {
    const {
      queryParams: t,
      pathParams: o
    } = this.buildParameters(e);
    return await this.post({
      path: "/init/flash-sales/{country}",
      queryParams: t,
      pathParams: o
    })
  }
  async getSummary(e) {
    const {
      queryParams: t,
      pathParams: o
    } = this.buildParameters(e);
    return await this.get({
      path: "/summary/{country}",
      queryParams: t,
      pathParams: o
    })
  }
  async postSummary(e, t, o) {
    const {
      queryParams: r,
      pathParams: s
    } = this.buildParameters(e);
    return await this.post({
      path: "/summary/{country}",
      queryParams: r,
      pathParams: s,
      body: t,
      requestOptions: o
    })
  }
  async postGiftCard(e, t, o) {
    const {
      queryParams: r,
      pathParams: s
    } = this.buildParameters(e);
    return await this.post({
      path: "/giftcard/{country}",
      queryParams: r,
      pathParams: s,
      body: t,
      requestOptions: o
    })
  }
  async removeGiftCard(e, t) {
    const {
      queryParams: o,
      pathParams: r
    } = this.buildParameters(e);
    return await this.delete({
      path: "/giftcard/{country}",
      queryParams: o,
      pathParams: r,
      requestOptions: t
    })
  }
}
const Gg = {
    class: "pca-cart-flyout__flyout"
  },
  Kg = {
    class: "pca-cart-flyout__header",
    role: "heading"
  },
  Yg = {
    key: 0,
    class: "pca-cart-flyout__loading-section",
    "transition:fade": ""
  },
  Jg = {
    key: 1,
    class: "pca-cart-flyout__empty-cart-message",
    "data-otc": "cart-flyout-empty-cart-message"
  },
  Zg = {
    key: 2,
    class: "pca-cart-flyout__items"
  },
  Xg = ["name", "quantity", "price", "thumbnail"],
  e_ = {
    key: 3,
    class: "pca-cart-flyout__price-information-wrapper"
  },
  t_ = ["text", "price"],
  o_ = ["text", "price"],
  r_ = ["text", "price"],
  s_ = ["text", "price"],
  i_ = ["text", "price"],
  n_ = ["text", "price"],
  a_ = ["text", "price"],
  l_ = ["text", "price"],
  c_ = ["isCheckoutLoading", "confirm-ab-testing-tag"],
  d_ = "cart-flyout-close",
  p_ = Of(zo({
    __name: "TheFlyout",
    props: yr({
      country: {
        type: String
      },
      language: {
        type: String
      },
      triggerElementSelector: {
        type: String
      },
      toggleElementSelector: {
        type: String
      },
      cancelElementSelector: {
        type: String
      },
      toggleHiddenClassName: {
        type: String
      }
    }, {
      ...pb(),
      triggerElementSelector: "",
      toggleElementSelector: "",
      cancelElementSelector: "",
      toggleHiddenClassName: ""
    }),
    emits: ["cart-flyout-close"],
    setup(e, {
      emit: t
    }) {
      const {
        t: o
      } = kp(), {
        isFeatureEnabled: r
      } = Ka(), {
        getEnvironment: s
      } = kn(), i = e, n = t, {
        continueShopping: a,
        initCheckout: l,
        cartOverlayView: c
      } = km({
        country: i.country,
        language: i.language,
        env: s()
      }), d = new $g, p = new Qg, u = At(!1), f = At(null), m = At(), b = At(), g = At(), _ = At(null), v = At(!1), y = si(() => (_.value?.shippingCostStandardAfterCoupon ?? 0) <= 0 || !r("showPlaceholderForShippingCostOnCartPage")), k = si(() => null === _.value && v.value), x = At(!1), E = si(() => !!_.value && !!_.value.cartItems && _.value.cartItems.length > 0), w = si(() => _.value?.discountItems?.find(e => "COUPON" === e.discountType)), A = si(() => y.value ? _.value?.finalCartValueWithoutPaymentFees : _.value?.finalCartValueWithoutPaymentAndStandardShippingFee), L = si(() => _.value?.discountItems?.filter(e => "PROMOTION" === e.discountType)), P = () => {
        v.value = !!xn(ib) || !!xn(sb)
      }, T = async (e = !1) => {
        try {
          if (!e && f.value && Date.now() - f.value.getTime() < 5e3) return;
          f.value = new Date;
          const t = pb(),
            o = await d.getCart({
              language: t.language ?? "",
              country: t.country ?? "",
              cartId: xn(ib) ?? "",
              zoneId: "ES" === t.country ? xn(nb) ?? void 0 : void 0
            }, !!xn(sb));
          o?.data?.payload && (_.value = o.data.payload)
        } catch (q_) {
          console.error("Error fetching cart", q_)
        }
      }, O = async () => {
        (window.innerWidth ?? document.documentElement.clientWidth ?? document.body.clientWidth) < 768 || (P(), await T(), x.value = !0, b.value.classList.remove(i.toggleHiddenClassName), c({
          cart: _.value
        }))
      }, C = async () => {
        b.value.classList.add(i.toggleHiddenClassName), x.value = !1
      }, R = () => {
        O()
      }, I = () => {
        C()
      }, S = () => {
        x.value && T(!0)
      }, D = () => {
        C()
      }, j = () => {
        C()
      }, B = () => {
        n("cart-flyout-close"), C(), a({
          cart: _.value
        })
      }, z = async () => {
        try {
          u.value = !0;
          const e = pb();
          await p.postCheckoutSession({
            country: String(e.country),
            language: String(e.language),
            cartId: xn(ib) ?? "",
            zoneId: "ES" === String(e.country) ? xn(nb) ?? void 0 : void 0
          }), l({
            cart: _.value
          }), window.location.href = `${window.location.origin}/otc/checkout/flow`
        } catch (e) {
          ub(ob, {
            level: Wf.Error,
            message: o("widgets.genericErrorMessage"),
            headline: ""
          }), u.value = !1;
          qg(e.status, Ng.UNAUTHORIZED) && (window.location.href = "/otc/checkout/login"), console.error("Error starting checkout session", e)
        }
      };
      return Jo(async () => {
        P(), u.value = !1
      }), Zo(() => {
        (() => {
          for (const o of ["triggerElementSelector", "toggleElementSelector", "toggleHiddenClassName"])
            if (!i[o]) return console.error(`pca-the-flyout: ${o} not set`), !1;
          const e = document.querySelector(i.triggerElementSelector);
          if (!e) return console.error("Trigger element not found"), !1;
          const t = document.querySelector(i.toggleElementSelector);
          if (!t) return console.error("Toggle element not found"), !1;
          if (i.cancelElementSelector) {
            const e = document.querySelector(i.cancelElementSelector);
            e && (g.value = e)
          }
          return m.value = e, b.value = t, !0
        })() && (window.location.href.includes("/otc/cart") || (m.value?.addEventListener("mouseenter", R), m.value?.addEventListener("mouseleave", I), document.addEventListener(am, S), document.addEventListener(d_, D), g.value && g.value.addEventListener("click", j)))
      }), tr(() => {
        m.value?.removeEventListener("mouseenter", R), m.value?.removeEventListener("mouseleave", I), document.removeEventListener(am, S), document.removeEventListener(d_, D)
      }), (e, t) => (ks(), As("div", {
        class: Q({
          "pca-cart-flyout": !0,
          "pca-cart-flyout--dont-paint": !x.value
        })
      }, [Rs("div", Gg, [Rs("h3", Kg, Z(Ot(o)("widgets.flyout.headline")), 1), Rs("div", {
        class: Q({
          "pca-cart-flyout__items-wrapper": !0,
          "pca-cart-flyout__items-wrapper--no-scroll": !E.value
        })
      }, [k.value ? (ks(), As("div", Yg, [...t[0] || (t[0] = [Rs("div", {
        class: "pca-cart-flyout__loading-icon"
      }, null, -1)])])) : E.value ? (ks(), As("ul", Zg, [(ks(!0), As(bs, null, dr(_.value?.cartItems ?? [], e => (ks(), As("li", {
        key: e.erpNumber,
        class: "pca-cart-flyout__cart-list-item"
      }, [Rs("pca-a-cart-item", {
        name: e.name,
        quantity: e.quantity,
        price: e.lineItemAmountBeforeCoupon,
        thumbnail: e.thumbnailImageMap?.thumb ?? e.thumbnailImageMap?.small ?? ""
      }, null, 8, Xg)]))), 128))])) : (ks(), As("div", Jg, Z(Ot(o)("widgets.flyout.emptyCart")), 1)), _.value?.id ? (ks(), As("div", e_, [_.value?.additionalServicesAmount ? (ks(), As("pca-v-price-information", {
        key: 0,
        text: Ot(o)("widgets.flyout.additionalServicesLabel"),
        price: Ot(Rf)(_.value?.additionalServicesAmount)
          .toString()
      }, null, 8, t_)) : Bs("", !0), _.value?.shippingCostStandardBeforeCoupon && y.value ? (ks(), As("pca-v-price-information", {
        key: 1,
        text: Ot(o)("widgets.flyout.shippingCostLabel"),
        price: Ot(Rf)(_.value?.shippingCostStandardBeforeCoupon)
          .toString()
      }, null, 8, o_)) : Bs("", !0), _.value?.shippingCostAdditional ? (ks(), As("pca-v-price-information", {
        key: 2,
        text: Ot(o)("widgets.flyout.shippingCostAdditionalLabel"),
        price: Ot(Rf)(_.value?.shippingCostAdditional)
          .toString()
      }, null, 8, r_)) : Bs("", !0), (_.value?.zoneSurcharge ?? 0) > 0 ? (ks(), As("pca-v-price-information", {
        key: 3,
        text: Ot(o)("widgets.flyout.zoneSurchargeLabel"),
        price: Ot(Rf)(_.value.zoneSurcharge ?? 0)
          .toString()
      }, null, 8, s_)) : Bs("", !0), w.value ? (ks(), As("pca-v-price-information", {
        key: 4,
        text: `${Ot(o)("widgets.flyout.couponItemLabel")} (${w.value.code})`,
        price: "-" + Ot(Rf)(w.value?.discount ?? 0)
          .toString()
      }, null, 8, i_)) : Bs("", !0), _.value?.giftCardDetails ? (ks(), As("pca-v-price-information", {
        key: 5,
        text: Ot(o)("widgets.flyout.giftCardLabel"),
        price: "-" + Ot(Rf)(_.value.giftCardDetails.value ?? 0)
          .toString()
      }, null, 8, n_)) : Bs("", !0), (ks(!0), As(bs, null, dr(L.value, e => (ks(), As("pca-v-price-information", {
        key: e.code,
        text: "" + ("OMNICHANNEL" === e.couponType ? `${Ot(o)("widgets.flyout.promotionOmnichannelLabel")}${e.promotionText?` (${e.promotionText})`:""}` : `${Ot(o)("widgets.flyout.promotionGenericLabel")}${e.code?` (${e.code})`:""}`),
        price: "-" + Ot(Rf)(e.discount ?? 0)
          .toString()
      }, null, 8, a_))), 128))])) : Bs("", !0)], 2), E.value && !k.value ? (ks(), As("div", {
        key: 0,
        "data-otc": "cart-flyout-buttons",
        class: Q({
          "pca-cart-flyout__buttons": !0,
          "pca-cart-flyout__buttons--dont-paint": k.value
        })
      }, [Rs("pca-v-price-information", {
        text: Ot(o)("widgets.flyout.totalPriceLabel"),
        price: Ot(Rf)(A.value ?? 0)
          .toString(),
        "is-total-price": ""
      }, null, 8, l_), Rs("pca-a-buttons", {
        isCheckoutLoading: u.value,
        "widget-variant": "redesign",
        onCancel: B,
        onConfirm: z,
        "display-column": "",
        "confirm-ab-testing-tag": Ot(Zf)
          .cartlayerToCheckout
      }, null, 40, c_)], 2)) : Bs("", !0)])], 2))
    }
  }), [
    ["styles", ['.ods-button[data-v-5bc501b6]{--ods-button-width: auto;--ods-button-min-height: 2.75rem;all:unset;border-radius:var(--ods-button-border-radius);display:inline-flex;gap:var(--ods-gap-content-m, .5rem);outline:none;align-items:center;justify-content:center;width:var(--ods-button-width);min-height:var(--ods-button-min-height);padding:var(--ods-button-padding);text-overflow:ellipsis;-webkit-user-select:none;user-select:none;box-sizing:border-box;cursor:pointer;position:relative}.ods-button[data-v-5bc501b6]:focus-visible{position:relative}.ods-button[data-v-5bc501b6]:focus-visible:before{content:"";display:block;width:100%;height:100%;position:absolute;outline:solid .125rem var(--ods-component-browser-focus-border-color-outer, #ffffff);outline-offset:.25rem;pointer-events:none;left:0;top:0}.ods-button[data-v-5bc501b6]:focus-visible:after{content:"";display:block;width:100%;height:100%;position:absolute;outline:solid .125rem var(--ods-component-browser-focus-border-color-inner, #0050aa);outline-offset:.125rem;pointer-events:none;left:0;top:0}.ods-button--size-small[data-v-5bc501b6]:not(.ods-button--no-label){--ods-button-icon-size: 1rem;--ods-button-min-height: 2.25rem;--ods-button-padding: var(--ods-padding-content-s, .5rem) var(--ods-padding-content-m, .75rem);font-family:var(--ods-typography-font-family-primary, "LidlFontPro");font-size:var(--ods-mobile-body-small-2-font-size, .8125rem);font-weight:var(--ods-typography-font-weight-prominent, 600);line-height:var(--ods-mobile-body-small-2-line-height, 1.25rem);letter-spacing:var(--ods-mobile-body-small-2-letter-spacing, .25)}@media(min-width:90rem){.ods-button--size-small[data-v-5bc501b6]:not(.ods-button--no-label){font-size:var(--ods-desktop-body-small-2-font-size, .875rem);line-height:var(--ods-desktop-body-small-2-line-height, 1.25rem);letter-spacing:var(--ods-desktop-body-small-2-letter-spacing, .25)}}.ods-button--size-medium[data-v-5bc501b6]:not(.ods-button--no-label){--ods-button-icon-size: 1.5rem;--ods-button-min-height: 2.75rem;--ods-button-padding: var(--ods-padding-content-s, .5rem) var(--ods-padding-content-l, 1rem);font-family:var(--ods-typography-font-family-primary, "LidlFontPro");font-size:var(--ods-mobile-body-tight-font-size, 1rem);font-weight:var(--ods-typography-font-weight-prominent, 600);line-height:var(--ods-mobile-body-tight-line-height, 1.25rem);letter-spacing:var(--ods-mobile-body-tight-letter-spacing, 0)}@media(min-width:90rem){.ods-button--size-medium[data-v-5bc501b6]:not(.ods-button--no-label){font-size:var(--ods-desktop-body-tight-font-size, 1.125rem);line-height:var(--ods-desktop-body-tight-line-height, 1.5rem);letter-spacing:var(--ods-desktop-body-tight-letter-spacing, 0)}}.ods-button--size-large[data-v-5bc501b6]:not(.ods-button--no-label){--ods-button-icon-size: 1.5rem;--ods-button-min-height: 2.75rem;--ods-button-padding: var(--ods-padding-content-s, .5rem) var(--ods-padding-content-l, 1rem);font-family:var(--ods-typography-font-family-primary, "LidlFontPro");font-size:var(--ods-mobile-body-tight-font-size, 1rem);font-weight:var(--ods-typography-font-weight-prominent, 600);line-height:var(--ods-mobile-body-tight-line-height, 1.25rem);letter-spacing:var(--ods-mobile-body-tight-letter-spacing, 0)}@media(min-width:90rem){.ods-button--size-large[data-v-5bc501b6]:not(.ods-button--no-label){font-size:var(--ods-desktop-body-tight-font-size, 1.125rem);line-height:var(--ods-desktop-body-tight-line-height, 1.5rem);letter-spacing:var(--ods-desktop-body-tight-letter-spacing, 0)}}@media(min-width:90rem){.ods-button--size-large[data-v-5bc501b6]:not(.ods-button--no-label){--ods-button-icon-size: 2rem;--ods-button-min-height: 3.5rem;--ods-button-padding: var(--ods-padding-content-m, .75rem) var(--ods-padding-content-xl, 1.5rem);font-family:var(--ods-typography-font-family-primary, "LidlFontPro");font-size:var(--ods-mobile-headline-5-font-size, 1.125rem);font-weight:var(--ods-typography-font-weight-prominent, 600);line-height:var(--ods-mobile-headline-5-line-height, 1.5rem);letter-spacing:var(--ods-mobile-headline-5-letter-spacing, 0)}}@media(min-width:90rem)and (min-width:90rem){.ods-button--size-large[data-v-5bc501b6]:not(.ods-button--no-label){font-size:var(--ods-desktop-headline-5-font-size, 1.25rem);line-height:var(--ods-desktop-headline-5-line-height, 1.75rem);letter-spacing:var(--ods-desktop-headline-5-letter-spacing, 0)}}.ods-button--loading .ods-button__icon[data-v-5bc501b6],.ods-button--loading[data-v-5bc501b6] .ods-button__text{opacity:0}.ods-button[data-v-5bc501b6] .ods-button__loading{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:1.5rem;height:1.5rem}.ods-button__loading-icon[data-v-5bc501b6]{fill:var(--ods-button-font-color);animation:rotate-5bc501b6 1s linear infinite}@keyframes rotate-5bc501b6{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.ods-button[data-v-5bc501b6] .ods-button__text{display:-webkit-box;-webkit-line-clamp:var(--ods-line-clamp, 2);-webkit-box-orient:vertical;word-break:none;overflow:hidden;-webkit-hyphens:auto;hyphens:auto;text-align:center;--ods-is-single-line: 1 - Clamp(0, Calc(var(--ods-line-clamp) - 1), var(--ods-line-clamp));--ods-is-single-line-delay: Calc(-1s * (var(--ods-is-single-line, 1) - 1));animation:states-5bc501b6 1s var(--ods-is-single-line-delay) paused}@keyframes states-5bc501b6{0%{word-break:break-word}}.ods-button--hyphens-none[data-v-5bc501b6] .ods-button__text{-webkit-hyphens:none;hyphens:none}.ods-button__icon[data-v-5bc501b6]{fill:var(--ods-button-icon-color);width:var(--ods-button-icon-size);height:var(--ods-button-icon-size);flex-shrink:0}.ods-button--no-label[data-v-5bc501b6]{--ods-button-width: 2.75rem;--ods-button-min-height: 2.75rem;--ods-button-icon-size: 1.5rem;justify-content:center}.ods-button--primary[data-v-5bc501b6]{--ods-button-border-radius: var(--ods-radius-action, 62.4375rem);--ods-button-background-color: var( --ods-color-surface-interaction-primary-default, var(--ods-default-color-surface-interaction-primary-default, #0050aa) );--ods-button-background-focus-color: var( --ods-color-surface-interaction-primary-focus, var(--ods-default-color-surface-interaction-primary-focus, #002466) );--ods-button-background-hover-color: var( --ods-color-surface-interaction-primary-hover, var(--ods-default-color-surface-interaction-primary-hover, #002466) );--ods-button-background-pressed-color: var( --ods-color-surface-interaction-primary-pressed, var(--ods-default-color-surface-interaction-primary-pressed, #002466) );--ods-button-font-color: var( --ods-color-text-surface-interaction-primary-default, var(--ods-default-color-text-surface-interaction-primary-default, #ffffff) );--ods-button-font-focus-color: var( --ods-color-text-surface-interaction-primary-focus, var(--ods-default-color-text-surface-interaction-primary-focus, #ffffff) );--ods-button-font-hover-color: var( --ods-color-text-surface-interaction-primary-hover, var(--ods-default-color-text-surface-interaction-primary-hover, #ffffff) );--ods-button-font-pressed-color: var( --ods-color-text-surface-interaction-primary-pressed, var(--ods-default-color-text-surface-interaction-primary-pressed, #ffffff) );--ods-button-icon-color: var( --ods-color-icon-surface-interaction-primary-default, var(--ods-default-color-icon-surface-interaction-primary-default, #ffffff) );--ods-button-icon-focus-color: var( --ods-color-icon-surface-interaction-primary-focus, var(--ods-default-color-icon-surface-interaction-primary-focus, #ffffff) );--ods-button-icon-hover-color: var( --ods-color-icon-surface-interaction-primary-hover, var(--ods-default-color-icon-surface-interaction-primary-hover, #ffffff) );--ods-button-icon-pressed-color: var( --ods-color-icon-surface-interaction-primary-pressed, var(--ods-default-color-icon-surface-interaction-primary-pressed, #ffffff) )}.ods-button--secondary[data-v-5bc501b6]{--ods-button-border-radius: var(--ods-radius-action, 62.4375rem);--ods-button-background-color: var( --ods-color-surface-interaction-secondary-default, var(--ods-default-color-surface-interaction-secondary-default, rgb(255 255 255 / 0%)) );--ods-button-background-hover-color: var( --ods-color-surface-interaction-secondary-hover, var(--ods-default-color-surface-interaction-secondary-hover, rgb(255 255 255 / 0%)) );--ods-button-background-focus-color: var( --ods-color-surface-interaction-secondary-focus, var(--ods-default-color-surface-interaction-secondary-focus, rgb(255 255 255 / 0%)) );--ods-button-background-pressed-color: var( --ods-color-surface-interaction-secondary-pressed, var(--ods-default-color-surface-interaction-secondary-pressed, rgb(255 255 255 / 0%)) );--ods-button-font-color: var( --ods-color-text-surface-interaction-secondary-default, var(--ods-default-color-text-surface-interaction-secondary-default, #0050aa) );--ods-button-font-focus-color: var( --ods-color-text-surface-interaction-secondary-focus, var(--ods-default-color-text-surface-interaction-secondary-focus, #002466) );--ods-button-font-hover-color: var( --ods-color-text-surface-interaction-secondary-hover, var(--ods-default-color-text-surface-interaction-secondary-hover, #002466) );--ods-button-font-pressed-color: var( --ods-color-text-surface-interaction-secondary-pressed, var(--ods-default-color-text-surface-interaction-secondary-pressed, #002466) );--ods-button-border-width: var( --ods-component-button-secondary-border-width-default, var(--ods-default-component-button-secondary-border-width-default, .125rem) );--ods-button-border-width-hover: var( --ods-border-width-hover, var(--ods-default-border-width-hover, .125rem) );--ods-button-border-width-focus: var( --ods-border-width-focus, var(--ods-default-border-width-focus, .125rem) );--ods-button-border-width-pressed: var( --ods-border-width-pressed, var(--ods-default-border-width-pressed, .125rem) );--ods-button-border-color: var( --ods-color-border-interaction-secondary-default, var(--ods-default-color-border-interaction-secondary-default, #0050aa) );--ods-button-border-color-hover: var( --ods-color-border-interaction-secondary-hover, var(--ods-default-color-border-interaction-secondary-hover, #002466) );--ods-button-border-color-focus: var( --ods-color-border-interaction-secondary-focus, var(--ods-default-color-border-interaction-secondary-focus, #002466) );--ods-button-border-color-pressed: var( --ods-color-border-interaction-secondary-pressed, var(--ods-default-color-border-interaction-secondary-pressed, #002466) );--ods-button-icon-color: var( --ods-color-icon-surface-interaction-secondary-default, var(--ods-default-color-icon-surface-interaction-secondary-default, #0050aa) );--ods-button-icon-focus-color: var( --ods-color-icon-surface-interaction-secondary-focus, var(--ods-default-color-icon-surface-interaction-secondary-focus, #002466) );--ods-button-icon-hover-color: var( --ods-color-icon-surface-interaction-secondary-hover, var(--ods-default-color-icon-surface-interaction-secondary-hover, #002466) );--ods-button-icon-pressed-color: var( --ods-color-icon-surface-interaction-secondary-pressed, var(--ods-default-color-icon-surface-interaction-secondary-pressed, #002466) )}.ods-button--tertiary[data-v-5bc501b6]{--ods-button-font-color: var( --ods-color-text-surface-interaction-tertiary-default, var(--ods-default-color-text-surface-interaction-tertiary-default, #0050aa) );--ods-button-font-hover-color: var( --ods-default-color-text-surface-interaction-tertiary-hover, var(--ods-color-text-surface-interaction-tertiary-hover, #002466) );--ods-button-font-active-color: var( --ods-default-color-text-surface-interaction-tertiary-pressed, var(--ods-color-text-surface-interaction-tertiary-pressed, #002466) );--ods-button-font-focus-color: var( --ods-default-color-text-surface-interaction-tertiary-focus, var(--ods-color-text-surface-interaction-tertiary-focus, #002466) );--ods-button-font-pressed-color: var( --ods-default-color-text-surface-interaction-tertiary-pressed, var(--ods-color-text-surface-interaction-tertiary-pressed, #002466) );--ods-button-background-color: var( --ods-default-color-surface-interaction-tertiary-default, var(--ods-color-surface-interaction-tertiary-default, rgba(255, 255, 255, 0)) );--ods-button-background-focus-color: var( --ods-default-color-surface-interaction-tertiary-focus, var(--ods-color-surface-interaction-tertiary-focus, rgba(255, 255, 255, 0)) );--ods-button-background-hover-color: var( --ods-default-color-surface-interaction-tertiary-hover, var(--ods-color-surface-interaction-tertiary-hover, rgba(255, 255, 255, 0)) );--ods-button-background-pressed-color: var( --ods-color-surface-interaction-tertiary-pressed, var(--ods-color-surface-interaction-tertiary-pressed, rgba(255, 255, 255, 0)) );--ods-button-icon-color: var( --ods-color-icon-surface-interaction-tertiary-default, var(--ods-default-color-icon-surface-interaction-tertiary-default, #0050aa) );--ods-button-icon-focus-color: var( --ods-color-icon-surface-interaction-tertiary-focus, var(--ods-default-color-icon-surface-interaction-tertiary-focus, #002466) );--ods-button-icon-hover-color: var( --ods-color-icon-surface-interaction-tertiary-hover, var(--ods-default-color-icon-surface-interaction-tertiary-hover, #002466) );--ods-button-icon-pressed-color: var( --ods-color-icon-surface-interaction-tertiary-pressed, var(--ods-default-color-icon-surface-interaction-tertiary-pressed, #002466) )}.ods-button--disabled[data-v-5bc501b6]{opacity:var(--ods-opacity-disabled, .3);cursor:default}.ods-button--primary[data-v-5bc501b6],.ods-button--secondary[data-v-5bc501b6],.ods-button--tertiary[data-v-5bc501b6]{background-color:var(--ods-button-background-color);color:var(--ods-button-font-color)}.ods-button--primary[data-v-5bc501b6]:hover:not(.ods-button--disabled),.ods-button--secondary[data-v-5bc501b6]:hover:not(.ods-button--disabled),.ods-button--tertiary[data-v-5bc501b6]:hover:not(.ods-button--disabled){color:var(--ods-button-font-hover-color);background-color:var(--ods-button-background-hover-color);border-width:var(--ods-button-border-width-hover);border-color:var(--ods-button-border-color-hover)}.ods-button--primary:hover:not(.ods-button--disabled) .ods-button__icon[data-v-5bc501b6],.ods-button--secondary:hover:not(.ods-button--disabled) .ods-button__icon[data-v-5bc501b6],.ods-button--tertiary:hover:not(.ods-button--disabled) .ods-button__icon[data-v-5bc501b6]{fill:var(--ods-button-icon-hover-color)}.ods-button--primary[data-v-5bc501b6]:focus-visible:not(.ods-button--disabled),.ods-button--secondary[data-v-5bc501b6]:focus-visible:not(.ods-button--disabled),.ods-button--tertiary[data-v-5bc501b6]:focus-visible:not(.ods-button--disabled){color:var(--ods-button-font-focus-color);background-color:var(--ods-button-background-focus-color);border-width:var(--ods-button-border-width-focus);border-color:var(--ods-button-border-color-focus)}.ods-button--primary:focus-visible:not(.ods-button--disabled) .ods-button__icon[data-v-5bc501b6],.ods-button--secondary:focus-visible:not(.ods-button--disabled) .ods-button__icon[data-v-5bc501b6],.ods-button--tertiary:focus-visible:not(.ods-button--disabled) .ods-button__icon[data-v-5bc501b6]{fill:var(--ods-button-icon-focus-color)}.ods-button--primary[data-v-5bc501b6]:active:not(.ods-button--disabled),.ods-button--secondary[data-v-5bc501b6]:active:not(.ods-button--disabled),.ods-button--tertiary[data-v-5bc501b6]:active:not(.ods-button--disabled){color:var(--ods-button-font-pressed-color);background-color:var(--ods-button-background-pressed-color);border-width:var(--ods-button-border-width-pressed);border-color:var(--ods-button-border-color-pressed)}.ods-button--primary:active:not(.ods-button--disabled) .ods-button__icon[data-v-5bc501b6],.ods-button--secondary:active:not(.ods-button--disabled) .ods-button__icon[data-v-5bc501b6],.ods-button--tertiary:active:not(.ods-button--disabled) .ods-button__icon[data-v-5bc501b6]{fill:var(--ods-button-icon-pressed-color)}.ods-button--primary[data-v-5bc501b6]{border:none}.ods-button--secondary[data-v-5bc501b6]{border:var(--ods-button-border-width) solid var(--ods-button-border-color)}.ods-button--secondary[data-v-5bc501b6]:focus-visible{position:relative}.ods-button--secondary[data-v-5bc501b6]:focus-visible:before{content:"";display:block;width:100%;height:100%;position:absolute;outline:solid .125rem var(--ods-component-browser-focus-border-color-outer, #ffffff);outline-offset:6px;pointer-events:none;left:0;top:0}.ods-button--secondary[data-v-5bc501b6]:focus-visible:after{content:"";display:block;width:100%;height:100%;position:absolute;outline:solid .125rem var(--ods-component-browser-focus-border-color-inner, #0050aa);outline-offset:4px;pointer-events:none;left:0;top:0}.ods-button[data-v-5bc501b6]:is(.ods-button--tertiary){--ods-button-min-height: auto;--ods-button-padding: unset;--ods-button-border-radius: none;flex-direction:row-reverse;border:none}.ods-button:is(.ods-button--tertiary).ods-button--size-small[data-v-5bc501b6]{--ods-button-min-height: 1.25rem}.ods-button:is(.ods-button--tertiary).ods-button--size-medium[data-v-5bc501b6]{--ods-button-min-height: 1.5rem}.ods-button:is(.ods-button--tertiary).ods-button--size-large[data-v-5bc501b6]{--ods-button-min-height: 1.75rem}.ods-button:is(.ods-button--tertiary).ods-button--size-small .ods-button__icon[data-v-5bc501b6]{--ods-button-icon-size: 1rem}.ods-button:is(.ods-button--tertiary).ods-button--size-medium .ods-button__icon[data-v-5bc501b6]{--ods-button-icon-size: 1rem}.ods-button:is(.ods-button--tertiary).ods-button--size-large .ods-button__icon[data-v-5bc501b6]{--ods-button-icon-size: 1.5rem}.ods-button.ods-button--theme-primary.ods-button--primary[data-v-5bc501b6]{--ods-default-color-surface-interaction-primary-default: #fff000;--ods-default-color-surface-interaction-primary-focus: #ffc400;--ods-default-color-surface-interaction-primary-hover: #ffc400;--ods-default-color-surface-interaction-primary-pressed: #ffc400;--ods-default-color-text-surface-interaction-primary-default: #1e2124;--ods-default-color-text-surface-interaction-primary-focus: #1e2124;--ods-default-color-text-surface-interaction-primary-hover: #1e2124;--ods-default-color-text-surface-interaction-primary-pressed: #1e2124;--ods-default-color-icon-surface-interaction-primary-default: #1e2124;--ods-default-color-icon-surface-interaction-primary-focus: #1e2124;--ods-default-color-icon-surface-interaction-primary-hover: #1e2124;--ods-default-color-icon-surface-interaction-primary-pressed: #1e2124}.ods-button.ods-button--theme-negative.ods-button--primary[data-v-5bc501b6]{--ods-default-color-surface-interaction-primary-default: #ffffff;--ods-default-color-surface-interaction-primary-focus: #c2dfff;--ods-default-color-surface-interaction-primary-hover: #c2dfff;--ods-default-color-surface-interaction-primary-pressed: #c2dfff;--ods-default-color-text-surface-interaction-primary-default: #1e2124;--ods-default-color-text-surface-interaction-primary-focus: #1e2124;--ods-default-color-text-surface-interaction-primary-hover: #1e2124;--ods-default-color-text-surface-interaction-primary-pressed: #1e2124;--ods-default-color-icon-surface-interaction-primary-default: #1e2124;--ods-default-color-icon-surface-interaction-primary-focus: #1e2124;--ods-default-color-icon-surface-interaction-primary-hover: #1e2124;--ods-default-color-icon-surface-interaction-primary-pressed: #1e2124}.ods-button.ods-button--theme-primary.ods-button--secondary[data-v-5bc501b6]{--ods-default-color-surface-interaction-secondary-default: rgb(255 255 255 / 0%);--ods-default-color-surface-interaction-secondary-hover: rgb(255 255 255 / 0%);--ods-default-color-surface-interaction-secondary-focus: rgb(255 255 255 / 0%);--ods-default-color-surface-interaction-secondary-pressed: rgb(255 255 255 / 0%);--ods-default-color-text-surface-interaction-secondary-default: #fff000;--ods-default-color-text-surface-interaction-secondary-focus: #ffc400;--ods-default-color-text-surface-interaction-secondary-hover: #ffc400;--ods-default-color-text-surface-interaction-secondary-pressed: #ffc400;--ods-default-component-button-secondary-border-width-default: .125rem;--ods-default-border-width-hover: .125rem;--ods-default-border-width-focus: .125rem;--ods-default-border-width-pressed: .125rem;--ods-default-color-border-interaction-secondary-default: #fff000;--ods-default-color-border-interaction-secondary-hover: #ffc400;--ods-default-color-border-interaction-secondary-focus: #ffc400;--ods-default-color-border-interaction-secondary-pressed: #ffc400;--ods-default-color-icon-surface-interaction-secondary-default: #fff000;--ods-default-color-icon-surface-interaction-secondary-focus: #ffc400;--ods-default-color-icon-surface-interaction-secondary-hover: #ffc400;--ods-default-color-icon-surface-interaction-secondary-pressed: #ffc400}.ods-button.ods-button--theme-negative.ods-button--secondary[data-v-5bc501b6]{--ods-default-color-surface-interaction-secondary-default: rgb(255 255 255 / 0%);--ods-default-color-surface-interaction-secondary-hover: rgb(255 255 255 / 0%);--ods-default-color-surface-interaction-secondary-focus: rgb(255 255 255 / 0%);--ods-default-color-surface-interaction-secondary-pressed: rgb(255 255 255 / 0%);--ods-default-color-text-surface-interaction-secondary-default: #ffffff;--ods-default-color-text-surface-interaction-secondary-focus: #ffffff;--ods-default-color-text-surface-interaction-secondary-hover: #ffffff;--ods-default-color-text-surface-interaction-secondary-pressed: #ffffff;--ods-default-component-button-secondary-border-width-default: .125rem;--ods-default-border-width-hover: .125rem;--ods-default-border-width-focus: .125rem;--ods-default-border-width-pressed: .125rem;--ods-default-color-border-interaction-secondary-default: #ffffff;--ods-default-color-border-interaction-secondary-hover: #c2dfff;--ods-default-color-border-interaction-secondary-focus: #c2dfff;--ods-default-color-border-interaction-secondary-pressed: #c2dfff;--ods-default-color-icon-surface-interaction-secondary-default: #ffffff;--ods-default-color-icon-surface-interaction-secondary-focus: #ffffff;--ods-default-color-icon-surface-interaction-secondary-hover: #ffffff;--ods-default-color-icon-surface-interaction-secondary-pressed: #ffffff}.ods-button.ods-button--theme-primary.ods-button--tertiary[data-v-5bc501b6]{--ods-default-color-text-surface-interaction-tertiary-default: #fff000;--ods-default-color-text-surface-interaction-tertiary-hover: #ffc400;--ods-default-color-text-surface-interaction-tertiary-focus: #ffc400;--ods-default-color-text-surface-interaction-tertiary-pressed: #ffc400;--ods-default-color-surface-interaction-tertiary-default: rgb(255 255 255 / 0%);--ods-default-color-surface-interaction-tertiary-hover: rgb(255 255 255 / 0%);--ods-default-color-surface-interaction-tertiary-focus: rgb(255 255 255 / 0%);--ods-default-color-surface-interaction-tertiary-pressed: rgb(255 255 255 / 0%);--ods-default-color-icon-surface-interaction-tertiary-default: #fff000;--ods-default-color-icon-surface-interaction-tertiary-focus: #ffc400;--ods-default-color-icon-surface-interaction-tertiary-hover: #ffc400;--ods-default-color-icon-surface-interaction-tertiary-pressed: #ffc400}.ods-button.ods-button--theme-negative.ods-button--tertiary[data-v-5bc501b6]{--ods-default-color-text-surface-interaction-tertiary-default: #ffffff;--ods-default-color-text-surface-interaction-tertiary-hover: #c2dfff;--ods-default-color-text-surface-interaction-tertiary-focus: #c2dfff;--ods-default-color-text-surface-interaction-tertiary-pressed: #c2dfff;--ods-default-color-surface-interaction-tertiary-default: rgb(255 255 255 / 0%);--ods-default-color-surface-interaction-tertiary-focus: rgb(255 255 255 / 0%);--ods-default-color-surface-interaction-tertiary-pressed: rgb(255 255 255 / 0%);--ods-default-color-icon-surface-interaction-tertiary-default: #ffffff;--ods-default-color-icon-surface-interaction-tertiary-focus: #c2dfff;--ods-default-color-icon-surface-interaction-tertiary-hover: #c2dfff;--ods-default-color-icon-surface-interaction-tertiary-pressed: #c2dfff}.pca-cart-flyout--dont-paint{visibility:hidden;opacity:0;transition:visibility 0s;pointer-events:none}.pca-cart-flyout__loading-section{height:23.75rem;max-height:23.75rem;padding:2rem 0 0;width:100%;display:flex;flex-flow:row nowrap;justify-content:center;align-items:center}.pca-cart-flyout__loading-icon{background-size:contain;background-image:url(data:image/gif;base64,R0lGODlhEAAQAOZtAOzt7q2xte3u7tnc3dve4Njb3bi8v6+zt+3t7trd36+ytq6ytrC0uLG1ue7u7+3u7+fo6bK1ube6vrW4vNba2+Tl5uXm5+Lk5czO0Ly/w8jKzdfZ27q9wd7g4eHi5NbZ2tve39zg4b7CxcXIy7a5vNTW2d3f4b3Bw7S4u6uwtN/h4ri7v+nq69ja3Nzf4O/w8by+wtHT1sLGybK2uayvs7G1uLe6vdjc3tTY2N/i49XZ266xtqywta2xtM7R07G2ubu+wejp6rO2urG0uKyxtNnb3ayxtcDDxvT09a2wtNvd37W5vrCzt6+yt+rq66+0uNja3fX19ujp6a+0t7q+wtjb3K6xtayws/Lz86+zttna3bC1ubi7wLC1uOrs7a6zt7u9wuzu79ra3ejo6vDx8bS3u+zs7dfa3NbZ2+vs7dXY2urr7KywtP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBABtACwAAAAAEAAQAAAHPoAiBoOEBk08iIk8ZWyNjmwpj46MkpCVbJSSkZWZj5uSnY6fj6GNo5OXp42llpypl6yqmK+ulbKxsLSguo+BACH5BAUEAG0ALAAAAAAQABAAAAc7gAaCg4JDQgqIiWyLjIs7iZCNjY+QiJKMlJWXjpWWm5mRn50Km2ygiqKdpaeel6ykqZqxoa6jq7aziYEAIfkEBQQAbQAsCAAAAAgAEAAAByaAHA2DhCI2hIQnh4gNioyNi4iOjJOSkYmXg5WYj5uamZCdoJ6NgQAh+QQFBABtACwIAAAACAAQAAAHKoBtZYODBAQGhINqaoiJi42Ej4llko6Mk5WRl5aQipuanZSfnqGZpJhqgQAh+QQFBABtACwIAAAABgAQAAAHJIAZEhJHBASCEiJqaoiKjIOOjYuSj4mTkJeWlZGYm5mcmpSUgQAh+QQFBABtACwIAAAABAAQAAAHGIAnBIMwaoaFh4ZqiIuKjI+OkYmTjZSMgQAh+QQFBABtACwHAAAAAgAQAAAHDoAuJS5qhIaFiIeKiYyBACH5BAUEAG0ALAUAAAAEABAAAAcYgASCVYIEA4WHgomGiI2KjoyPkpGUiwOBACH5BAUEAG0ALAMAAAAGABAAAAcggBQJgwlFH4QJN4eEioiNjIuDj5KRiZWTlo6Xm5qdjIEAIfkEBQQAbQAsAgAAAAcAEAAABx6AA4KDUIODBYaCiImLho2HiQOPipGTkpWYjJmOlYEAIfkEBQQAbQAsAAAAAAkAEAAABy2AMh9thIRVZxw4hYUtiYuEjYqPkY9tlJOOmJKLl5yZnpuMn6KhkKOmpZanloEAIfkEBQQAbQAsAAAAAAkAEAAAByeARQWDhAVnaoWEh4mDi4yOiZCFkoqIj5aRmJOalYyGnI2gn56UjYEAIfkEBQQAbQAsAAAAAAkAEAAABySAJmeDhC0UBISJZ4iKg4yNj4qRiZOElY6NmJmXi5mdm56cnIEAIfkEBQQAbQAsAAAAAAkAEAAABySAbYKDBQMFJoOJbYiKgoyNj4qRiZODlY6NmJmXi5mdm56cnIEAIfkEBQQAbQAsAAAAAAkAEAAAByyALmiDbS1tbVAgg4uDFIqMjY+QjpCRlWiUlZmTkoybnp2Ln6KhlpqlmKgUgQAh+QQFBABtACwAAAAACAAQAAAHJoAmG2dVBQMDCSFti4xtio2Lj5CSjZSMlpGQmZqYjpqenJ+do5+BACH5BAUEAG0ALAAAAAAIABAAAAcjgB4FA4SFHWiIiWiHioiMjY+KkYmTjo2Wl5WLl5uZnJqgnIEAIfkEBQQAbQAsAAAAAAcAEAAAByGAFwNtCW2EOYaJbYiKi42OjYyKkomUhpaQk4+YnJuejYEAIfkEBQQAbQAsAAAAAAkAEAAAByuAbQWDhAUbKmqJimo6iIuJjY+Qjo+RkpaVlIuYm5qKnJ+ek5KMoqWkoJCBACH5BAUEAG0ALAAAAAAQABAAAAc2gAMbg4SFhmhqiYqLjIiMj4qOkI+Sk4uVlomYmZuWaCWgoaKjBJmMpaaKqKlqq6muprCZspaBACH5BAUEAG0ALAAAAAAQAAkAAAcegAOCg4SFA2iIiYqLjI2Oj5CRkpOLZ5SIapmam5yBACH5BAUEAG0ALAAAAAAQAAkAAAcdgABrg4SFhmeIiYqLjI2Oj5CRkpOUjUUbmJmam4EAIfkEBQQAbQAsAAAAABAACQAAByeALwKDhIWGZmuJiouMHY6PkJEdBZSVlpeYmZqbnJ2elFVooqOkpYEAIfkEBQQAbQAsAAACABAABwAAByGAZmuDhIWGgoaJhC4hjY6PkAmSk5SVlpeYmZRnnJ2en4EAIfkEBQQAbQAsAAAEABAABQAABx6AZmuDhIWGgoaJhBeMjY6PFyCSk5SVIAMfmZqbnIEAIfkEBQQAbQAsAAAGABAAAwAABxKAZmuDhIWGgoaJhARnjY6PkIEAIfkEBQQAbQAsAAAIABAAAwAABxGACA6DhIWGh4iEThCMjY6PgQAh+QQFBABtACwAAAgAEAAFAAAHFIBpDoOEhYaHiImKi4kVHo+QkZKBACH5BAUEAG0ALAAACAAQAAYAAAcVgGsAg4SFhg+IiYqLjI2Oj5CRkoiBACH5BAUEAG0ALAAACAAQAAcAAAcWgE5rg4SFhgiIiYqLjI2Oj5CRkpOLgQAh+QQFBABtACwAAAgAEAAIAAAHHIAIgoOEhQgAiImKi4yNjo+QkZKTi0EQl5iZmoEAIfkEBQQAbQAsAAAIABAACAAABxWAAgCDhIWGaYaJiouMjY6PkJGSAIEAIfkEBQQAbQAsAAAIABAACAAABxiADwiDhIWGa2aJiouMjY6PkJGSk5SVjYEAIfkEBQQAbQAsAAAIABAACAAABxaAAGmDhIWGbYaJhWuKjY6PkJGSk5CBACH5BAUEAG0ALAAACAAQAAQAAAcVgAIAg4SFhm2IiYqLbSyMj4hrkI+BACH5BAUEAG0ALAAACAAQAAYAAAcXgABpg4SFhl6GiYqLhk6MiWuPhpGShIEAIfkEBQQAbQAsAAAJAAEABgAABweAayxrhGuBACH5BAUEAG0ALAAACQABAAcAAAcIgE5tLIMsa4EAIfkEBQQAbQAsAAAIAAEABwAABweAZmuDLIOBACH5BAUEAG0ALAAACAAQAAgAAAcbgGlrg4SFhmaGiYWIioqMjYeQiY+Sg5SVl5KBACH5BAUEAG0ALAAAAAAQABAAAAdQgGRmg4SFhlEPaW2LjI2MUWZpAI6UbVGKaYqVj4ySm4tIZp2Tm0iai56VSJSpjqGsYZSmla2gn7Wrt6RtuZ8ApFifnV5twcKoAFinqI6KAIEAIfkEBQQAbQAsAAAAABAAEAAAB2KAG0FthIWGhhgWEIeMhBoWFYuNhiMWbRWWk4QykpiabTIXhZCaRx6GFpmMHKKoqoZAp4epjBkmjbSGBre4FYZlRZoVvoQSG5+ebSvHyJYoJZ+EmGUjRR4eHReYqRYsYxAVgQAh+QQFBABtACwAAAAADwAQAAAHbYBnEG2EhYaFGm0Wh4xtIhUWi42FHB1pFhWThGUbaZeZk2UYnmltF6EjLKSmjWUZEKSlp4dlKBWxpaCFZWwmuLKGvCW/pR6GbKPEFrO8IkHEl5tsK6fQmLxsJxoxRRcQqqSLbOPkBwYyGCUmmYEAIfkEBQQAbQAsAAAAABAAEAAAB16ALW2DhIWGHBCGioRlJomLhmUybY+QhAcQAJWWbGcAmpaDbBmfoJwLmZ9SnGw+paaLbBKvsIZsbBe0q4q3GrQAu4W3bDGppZttw7dAZ0HHtspsBzIeLLXCymUaFRaBACH5BAUEAG0ALAAAAQAPAA8AAAdFgAZtg4SFhiSGiYRsG4qJbGwIjoZsK5KTg5AVl5OQkQgQmJBHCJyKnkGlopBOpaGnnhqujp5sNKlSnZ4iprCQJpiLbAaBACH5BAUEAG0ALAAAAAAQABAAAAc9gDFtg4SFhm0Yh4qDM4mLh2WOj4WRk4VsEz6WhJiSlmwkmptsoKKfoJ6PpKGbbaQoqYukma2uQrGPlbWNgQAh+QQFBABtACwAAAAAEAAQAAAHQIAabYOEhYZtGReHi4MZGIyLGQYWkIaSI5WFJwYGEJmNnCKfbZsGGaOSBoqfqaOIBqKjQKquMAaubTCYtR64GYEAIfkEBQQAbQAsAQABAA8ADwAAB02AHBoWbYWGh4ZAKzJFiI5tVBISGT5Bj4aRkgYjhJcZkqAyLJdAoJIel22foCKpbaWSKxCusBIaroWalq4ckiW4qpOjuL2owEAywIVggQAh+QQFBABtACwBAAAADwAQAAAHVYAda22EhYaFBicaHxWHjisTEytHPiosjoSQkRMSGSMlF4+boxwmjgajmxiYqKkZQaypKxCYba2RJEq1tqMal7W3J7C7miQqu5mRPsjJIsyZXM+EXIEAIfkEBQQAbQAsAAAAABAAEAAAB26AGTFKKhWGh4iGTRMGJyMYJQMXLGuVlmxsKGWbJAZURyM+BSqUmJmbqKhLVEVrpj2aqagkMa6mAbGyZRospphWualHQb6YuLpAEMXGwWUSJsvMqUtq0dKbKBjW17vb10femEmaBuGYRihL5qYogQAh+QQFBABtACwAAAAAEAAQAAAHXIBAGCViHoZtiImKZRMGHBlHIxgxJUUeQRAsiGURnZ5CEyQkKzIViZyeqZ0TEIuqqWUgim2or2Uxs7SvEWUYubqvGr/AqSPDxJ1Hx8gcy8QrzsDQ0Zwk0Ztl15uBACH5BAUEAG0ALAEAAAAPABAAAAdlgBgxalpaRR4qHR4VFReMQhNLMyscBhwiRzIjIxhKKT8MoaKjDQwybJ+jqgwNQGxsRKCroiKvsLKzJ7ZsPbiqHLu3sxLBwqrExbGqJMWvyqLMzcYMKNLOskLWtqDZ2rcz3q8pM4EAIfkEBQQAbQAsAAAAABAAEAAAB2SAHBoYMYUlh2pKSlpKHiZtEWVlDSQTMyQrEzYcBhwibWw1B6OkpaNLbaCipqYkqW09q6ynr7CyrEK1qbelM7q2s2W/wKa+w7GmDcOpyKTGy80HEcuvzQzUr0miytivNdzdoA2BACH5BAUEAG0ALAAAAAAQABAAAAddgBwaGBg+hYYxiYklMQs1DTUHZTOSZZU1MytsNAwLnp+gngxsm52hoaOkbKannkOqbDysp12wbEmzoAe2sbmeW7y9tMHCusTFng3HyMDLsp67y6ULqdIpDEzSqpyBACH5BAUEAG0ALAAAAAAQABAAAAdYgBwaGISFhoUaTUMMDAsRDAENkAwNAQxCbCkHAZydnpwHbJmbn6WibESkpaCnbEaqpaGtPbCfraKvq7K3uZ8Mt6e9nsDBsLvEwsfIpFbEwJvKzq/RzilTgQAh+QQFBABtACwAAAAAEAAQAAAHRYBtIxptbRqEgxojiSMLbUNPj5GQhZFMQ200hZucnYWanqGFV6KibKWhSaiep6ucrZ0Hpq6vtJuwbQyrsAGuoLanjrSagQAh+QQFBABtACwBAAAADwAMAAAHLYAabYODgoMybSMyiG0MAQ0Mg0xtT5Ftk4SZmm0Lm56foKGio6KdpKeonKcHgQAh+QQFBABtACwBAAAADwAQAAAHTIAjbYOChCOFg0wMU2wMB41ZbF8LbFkHbZRsmpucbAGDmZ2dg5iinJ+koaILpKCmmq2uorGpq7SynLe4nrq4rL2lsMClv8MLqMNtWYEAIfkEBQQAbQAsAAAAABAAEAAABy+AIgaDhIWGZWyJiouMiIyPio6Qj5KTi5WWiZiZm5adk5+QoZSZjaWXp5GpmqtsgQAh+QQFBABtACwAAAAAAQABAAAHA4BtgQAh+QQFBABtACwAAAAAAQABAAAHA4BtgQA7);background-repeat:no-repeat;width:1rem;height:1rem}.pca-cart-flyout__flyout{font-family:LidlFontCondPro,Trebuchet MS,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:1rem;line-height:1.4;color:#353b42;text-decoration:none;font-weight:400;margin:0 -1rem;padding:0;z-index:4000;background-color:#fff}@media(min-width:1280px){.pca-cart-flyout__flyout{font-size:1.125rem}}.pca-cart-flyout__header{font-size:1.25rem;font-weight:700;line-height:1.2;padding:0 1rem;margin-top:0;background:#fff;display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center}@media(min-width:1280px){.pca-cart-flyout__header{font-size:1.375rem}}.pca-cart-flyout__items-wrapper{max-height:23.75rem;padding:0 1rem;overflow-y:auto}.pca-cart-flyout__items-wrapper--no-scroll{overflow-y:hidden}.pca-cart-flyout__empty-cart-message{height:23.75rem;max-height:23.75rem;transition:all ease .7s,visibility 0s;display:flex;flex-flow:row nowrap;align-content:center;align-items:center;justify-content:center}.pca-cart-flyout__items{padding:0;margin:0 0 2rem;list-style-type:none}.pca-cart-flyout__cart-list-item:last-child{border-color:#c6c9cc;margin-bottom:0}.pca-cart-flyout__price-information-wrapper{font-weight:700}@media(min-width:1280px){.pca-cart-flyout__price-information-wrapper{font-size:1.125rem}}.pca-cart-flyout__buttons{background:#fff;padding:.5rem 1rem 0;display:flex;flex-flow:column nowrap;justify-content:center;text-align:center}']]
  ]),
  u_ = ["aria-label"],
  f_ = zo({
    __name: "TheIndicator",
    setup(e) {
      const {
        t: t
      } = kp(), o = At(0), r = At([]), s = () => {
        const e = xn("CART_QUANTITY");
        return null === e ? 0 : parseInt(e, 10)
      }, i = si(() => null !== o.value && o.value > 0), n = () => {
        i.value ? r.value.forEach(e => {
          e.style.display = ""
        }) : r.value.forEach(e => {
          e.style.display = "none"
        })
      };
      return bo(() => o.value, n), Zo(() => {
        o.value = s(), r.value = Array.from(document.querySelectorAll("pca-the-indicator")), n(), setInterval(() => {
          o.value = s()
        }, 5e3), window.addEventListener(nm, () => {
          o.value = s()
        })
      }), (e, r) => (ks(), As("span", {
        "aria-label": Ot(t)("widgets.cartIndicator.label", o.value)
      }, Z(o.value), 9, u_))
    }
  }),
  m_ = {
    class: "pca-the-messages__list"
  },
  b_ = ["level", "headline", "text", "data-messages", "onClose"],
  h_ = "pca-the-messages-event",
  g_ = Of(zo({
    __name: "TheMessages",
    setup(e) {
      const t = At({}),
        o = At({}),
        r = At({}),
        s = At(),
        i = e => {
          e && o.value[e] && delete o.value[e]
        },
        n = ({
          detail: e
        }) => {
          const t = e;
          e.id && o.value[e.id] || (document.dispatchEvent(new CustomEvent(h_, {
            detail: {
              isSuccess: "success" === t.level,
              isError: "error" === t.level,
              message: t.message,
              buttonText: t?.buttonText,
              buttonClick: async () => {
                i(e.id), t?.buttonClick?.()
              },
              closeClick: async () => {
                await i(e.id)
              },
              type: t.type ?? gf
            }
          })), e.id && (o.value[e.id] = t))
        };
      return Zo(() => {
        document.addEventListener(ob, n)
      }), or(() => {
        document.removeEventListener(ob, n)
      }), (e, o) => (ks(), As("div", {
        class: "pca-the-messages",
        ref_key: "messagesElement",
        ref: s
      }, [Rs("div", m_, [o[0] || (Es(-1, !0), (o[0] = Is(Ot(Pf), {
          "event-name": h_
        }))
        .cacheIndex = 0, Es(1), o[0]), (ks(!0), As(bs, null, dr(t.value, (e, o, i) => (ks(), As("pca-a-message", {
        key: `${o}-${i}`,
        level: e.level,
        headline: e.headline,
        text: e.message,
        "data-messages": o,
        onClose: e => (e => {
          window.clearTimeout(e), r.value[e] = void 0;
          const o = s.value.querySelector(`[data-messages="${e}"]`);
          o && o.classList.add("pca-the-messages__message--is-leaving"), window.setTimeout(() => {
            delete t.value[e]
          }, 600)
        })(o),
        class: "pca-the-messages__message the-messages__message--is-entering"
      }, null, 40, b_))), 128))])], 512))
    }
  }), [
    ["styles", [".pca-the-messages{position:fixed;top:0;right:0;left:0;width:100%;max-width:80rem;margin:0 auto;z-index:9999;font-family:LidlFontCondPro,Trebuchet MS,sans-serif}.pca-the-messages__list{display:flex;flex-flow:column nowrap;align-items:flex-end;padding:.5rem}.pca-the-messages__message{width:100%;margin-bottom:.5rem;animation:slideIn .6s forwards}@media(min-width:960px){.pca-the-messages__message{max-width:29rem}}.pca-the-messages__message--is-leaving{animation:slideOut .6s forwards}@keyframes slideIn{0%{transform:translateY(-100vh);opacity:0}50%{transform:translateY(0)}to{opacity:1}}@keyframes slideOut{to{transform:translateY(-100vh);opacity:0}}"]]
  ]),
  __ = {
    class: "pca-the-overlay__items"
  },
  v_ = ["show-discount", "show-percentage", "percentage", "name", "quantity", "thumbnail", "price"],
  y_ = {
    class: "pca-the-overlay__container"
  },
  k_ = {
    class: "pca-the-overlay__buttons"
  },
  x_ = ["isCheckoutLoading", "confirm-ab-testing-tag"],
  E_ = {
    class: "pca-the-overlay__recommendations"
  },
  w_ = ["data-heading"],
  A_ = Of(zo({
    __name: "TheOverlay",
    props: yr({
      country: {
        type: String
      },
      language: {
        type: String
      }
    }, {
      ...pb()
    }),
    emits: ["cart-overlay-close"],
    setup(e, {
      emit: t
    }) {
      const o = e,
        r = t,
        {
          t: s
        } = kp(),
        {
          getEnvironment: i
        } = kn(),
        {
          continueShopping: n,
          initCheckout: a
        } = km({
          country: o.country,
          language: o.language,
          env: i()
        }),
        l = At(!1),
        c = At(!1),
        d = At(0),
        p = At(!1),
        u = new $g,
        f = new Qg,
        m = At(null),
        b = At(null),
        g = At([]),
        _ = si(() => m.value?.cartItems?.filter(e => g.value?.includes(e.erpNumber) ?? !1) ?? []),
        v = async e => {
          e || void 0 === e && !1 === p.value ? (p.value = !0, c.value = !1, d.value = 0) : p.value = !1
        }, y = async e => {
          b.value = e?.detail?.payload?.id ?? "", g.value = e.detail?.erpNumbers?.map(e => String(e)) ?? [String(e.detail.erpNumber)], await (async () => {
              if (b.value) try {
                const e = pb(),
                  t = await u.getCart({
                    language: String(e.language),
                    country: String(e.country),
                    cartId: xn(ib) ?? "",
                    zoneId: "ES" === String(e.country) ? xn(nb) ?? void 0 : void 0
                  }, !!xn(sb));
                t?.data?.payload && (m.value = t.data.payload)
              } catch (e) {
                console.error("Error fetching cart", e)
              }
            })(), await v(!0), (new sm)
            .emit("recommendations-slider-show", E.value)
        }, k = () => {
          r("cart-overlay-close"), l.value = !1, v(!1), c.value = !1, n({
            cart: m.value
          })
        }, x = async () => {
          try {
            l.value = !0, c.value = !1;
            const e = pb();
            await f.postCheckoutSession({
              country: String(e.country),
              language: String(e.language),
              cartId: xn(ib) ?? "",
              zoneId: "ES" === String(e.country) ? xn(nb) ?? void 0 : void 0
            }), a({
              cart: m.value
            }), window.location.href = `${window.location.origin}/otc/checkout/flow`
          } catch (e) {
            c.value = !0, d.value += 1, l.value = !1;
            qg(e.status, Ng.UNAUTHORIZED) && (window.location.href = "/otc/checkout/login"), console.error("Error starting checkout session", e)
          }
        }, E = At(), w = async e => {
          await y(e)
        }, A = e => {
          e.persisted && (l.value = !1)
        };
      return Zo(() => {
        l.value = !1, c.value = !1, document.addEventListener(am, w), window.addEventListener("pageshow", A)
      }), tr(() => {
        document.removeEventListener(am, w), window.removeEventListener("pageshow", A)
      }), (e, t) => (ks(), Ls(Ot(Wu), {
        "z-index": 4e3,
        "is-open": p.value,
        title: Ot(s)("widgets.overlay.headline"),
        class: "pca-the-overlay",
        "destory-on-close": "",
        "mask-closable": "",
        "accessible-close-text": Ot(s)("widgets.overlay.closeText"),
        "bottom-sheet-props": {
          isInvisibleWhenClosed: !0
        },
        "onUpdate:isOpen": v
      }, {
        default: ao(() => [0 == c.value && 0 == d.value ? (ks(), Ls(Ot(lu), {
          key: 0,
          type: "success",
          "accessible-title": Ot(s)("widgets.overlay.subtitle"),
          icon: "hook",
          closable: !1,
          "accessible-close-text": Ot(s)("widgets.overlay.closeText")
        }, {
          title: ao(() => [Ds(Z(Ot(s)("widgets.overlay.subtitle")), 1)]),
          _: 1
        }, 8, ["accessible-title", "accessible-close-text"])) : Bs("", !0), 1 == c.value && 0 == l.value ? (ks(), Ls(Ot(lu), {
          key: 1,
          type: "danger",
          "accessible-title": Ot(s)("OverlaySubtitle"),
          icon: "exclamation-circle",
          closable: !1,
          "accessible-close-text": Ot(s)("OverlayCloseText")
        }, {
          title: ao(() => [Ds(Z(Ot(s)("widgets.genericErrorMessage")), 1)]),
          _: 1
        }, 8, ["accessible-title", "accessible-close-text"])) : Bs("", !0), Rs("ul", __, [(ks(!0), As(bs, null, dr(_.value, (e, t) => (ks(), As("li", {
          key: `cart-widget-overlay-cart-item-${t}`
        }, [Rs("pca-a-cart-item", {
          "show-discount": e.discount?.showDiscount,
          "show-percentage": e.discount?.showPercentage,
          percentage: e.discount?.percentageDiscount,
          name: e.name,
          quantity: e.quantity,
          "show-divider": !1,
          thumbnail: e.thumbnailImageMap?.thumb ?? "",
          price: e.lineItemAmountBeforeCoupon,
          priceDisplayBox: !0
        }, null, 8, v_)]))), 128))]), Rs("div", y_, [Rs("div", k_, [Rs("pca-a-buttons", {
          "display-column": "",
          "widget-variant": "redesign",
          isCheckoutLoading: l.value,
          onCancel: k,
          onConfirm: x,
          "confirm-ab-testing-tag": Ot(Zf)
            .cartOverlayToCheckout,
          "is-overlay": ""
        }, null, 40, x_)]), Rs("div", E_, [Rs("div", {
          "data-recommendations": "",
          "data-heading": Ot(s)("widgets.overlay.recoHeadline"),
          "data-type": "cartoverlay",
          "data-min": "true",
          ref_key: "recommendationsContainer",
          ref: E
        }, null, 8, w_)])])]),
        _: 1
      }, 8, ["is-open", "title", "accessible-close-text"]))
    }
  }), [
    ["styles", ['.ods-button[data-v-5bc501b6]{--ods-button-width: auto;--ods-button-min-height: 2.75rem;all:unset;border-radius:var(--ods-button-border-radius);display:inline-flex;gap:var(--ods-gap-content-m, .5rem);outline:none;align-items:center;justify-content:center;width:var(--ods-button-width);min-height:var(--ods-button-min-height);padding:var(--ods-button-padding);text-overflow:ellipsis;-webkit-user-select:none;user-select:none;box-sizing:border-box;cursor:pointer;position:relative}.ods-button[data-v-5bc501b6]:focus-visible{position:relative}.ods-button[data-v-5bc501b6]:focus-visible:before{content:"";display:block;width:100%;height:100%;position:absolute;outline:solid .125rem var(--ods-component-browser-focus-border-color-outer, #ffffff);outline-offset:.25rem;pointer-events:none;left:0;top:0}.ods-button[data-v-5bc501b6]:focus-visible:after{content:"";display:block;width:100%;height:100%;position:absolute;outline:solid .125rem var(--ods-component-browser-focus-border-color-inner, #0050aa);outline-offset:.125rem;pointer-events:none;left:0;top:0}.ods-button--size-small[data-v-5bc501b6]:not(.ods-button--no-label){--ods-button-icon-size: 1rem;--ods-button-min-height: 2.25rem;--ods-button-padding: var(--ods-padding-content-s, .5rem) var(--ods-padding-content-m, .75rem);font-family:var(--ods-typography-font-family-primary, "LidlFontPro");font-size:var(--ods-mobile-body-small-2-font-size, .8125rem);font-weight:var(--ods-typography-font-weight-prominent, 600);line-height:var(--ods-mobile-body-small-2-line-height, 1.25rem);letter-spacing:var(--ods-mobile-body-small-2-letter-spacing, .25)}@media(min-width:90rem){.ods-button--size-small[data-v-5bc501b6]:not(.ods-button--no-label){font-size:var(--ods-desktop-body-small-2-font-size, .875rem);line-height:var(--ods-desktop-body-small-2-line-height, 1.25rem);letter-spacing:var(--ods-desktop-body-small-2-letter-spacing, .25)}}.ods-button--size-medium[data-v-5bc501b6]:not(.ods-button--no-label){--ods-button-icon-size: 1.5rem;--ods-button-min-height: 2.75rem;--ods-button-padding: var(--ods-padding-content-s, .5rem) var(--ods-padding-content-l, 1rem);font-family:var(--ods-typography-font-family-primary, "LidlFontPro");font-size:var(--ods-mobile-body-tight-font-size, 1rem);font-weight:var(--ods-typography-font-weight-prominent, 600);line-height:var(--ods-mobile-body-tight-line-height, 1.25rem);letter-spacing:var(--ods-mobile-body-tight-letter-spacing, 0)}@media(min-width:90rem){.ods-button--size-medium[data-v-5bc501b6]:not(.ods-button--no-label){font-size:var(--ods-desktop-body-tight-font-size, 1.125rem);line-height:var(--ods-desktop-body-tight-line-height, 1.5rem);letter-spacing:var(--ods-desktop-body-tight-letter-spacing, 0)}}.ods-button--size-large[data-v-5bc501b6]:not(.ods-button--no-label){--ods-button-icon-size: 1.5rem;--ods-button-min-height: 2.75rem;--ods-button-padding: var(--ods-padding-content-s, .5rem) var(--ods-padding-content-l, 1rem);font-family:var(--ods-typography-font-family-primary, "LidlFontPro");font-size:var(--ods-mobile-body-tight-font-size, 1rem);font-weight:var(--ods-typography-font-weight-prominent, 600);line-height:var(--ods-mobile-body-tight-line-height, 1.25rem);letter-spacing:var(--ods-mobile-body-tight-letter-spacing, 0)}@media(min-width:90rem){.ods-button--size-large[data-v-5bc501b6]:not(.ods-button--no-label){font-size:var(--ods-desktop-body-tight-font-size, 1.125rem);line-height:var(--ods-desktop-body-tight-line-height, 1.5rem);letter-spacing:var(--ods-desktop-body-tight-letter-spacing, 0)}}@media(min-width:90rem){.ods-button--size-large[data-v-5bc501b6]:not(.ods-button--no-label){--ods-button-icon-size: 2rem;--ods-button-min-height: 3.5rem;--ods-button-padding: var(--ods-padding-content-m, .75rem) var(--ods-padding-content-xl, 1.5rem);font-family:var(--ods-typography-font-family-primary, "LidlFontPro");font-size:var(--ods-mobile-headline-5-font-size, 1.125rem);font-weight:var(--ods-typography-font-weight-prominent, 600);line-height:var(--ods-mobile-headline-5-line-height, 1.5rem);letter-spacing:var(--ods-mobile-headline-5-letter-spacing, 0)}}@media(min-width:90rem)and (min-width:90rem){.ods-button--size-large[data-v-5bc501b6]:not(.ods-button--no-label){font-size:var(--ods-desktop-headline-5-font-size, 1.25rem);line-height:var(--ods-desktop-headline-5-line-height, 1.75rem);letter-spacing:var(--ods-desktop-headline-5-letter-spacing, 0)}}.ods-button--loading .ods-button__icon[data-v-5bc501b6],.ods-button--loading[data-v-5bc501b6] .ods-button__text{opacity:0}.ods-button[data-v-5bc501b6] .ods-button__loading{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:1.5rem;height:1.5rem}.ods-button__loading-icon[data-v-5bc501b6]{fill:var(--ods-button-font-color);animation:rotate-5bc501b6 1s linear infinite}@keyframes rotate-5bc501b6{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.ods-button[data-v-5bc501b6] .ods-button__text{display:-webkit-box;-webkit-line-clamp:var(--ods-line-clamp, 2);-webkit-box-orient:vertical;word-break:none;overflow:hidden;-webkit-hyphens:auto;hyphens:auto;text-align:center;--ods-is-single-line: 1 - Clamp(0, Calc(var(--ods-line-clamp) - 1), var(--ods-line-clamp));--ods-is-single-line-delay: Calc(-1s * (var(--ods-is-single-line, 1) - 1));animation:states-5bc501b6 1s var(--ods-is-single-line-delay) paused}@keyframes states-5bc501b6{0%{word-break:break-word}}.ods-button--hyphens-none[data-v-5bc501b6] .ods-button__text{-webkit-hyphens:none;hyphens:none}.ods-button__icon[data-v-5bc501b6]{fill:var(--ods-button-icon-color);width:var(--ods-button-icon-size);height:var(--ods-button-icon-size);flex-shrink:0}.ods-button--no-label[data-v-5bc501b6]{--ods-button-width: 2.75rem;--ods-button-min-height: 2.75rem;--ods-button-icon-size: 1.5rem;justify-content:center}.ods-button--primary[data-v-5bc501b6]{--ods-button-border-radius: var(--ods-radius-action, 62.4375rem);--ods-button-background-color: var( --ods-color-surface-interaction-primary-default, var(--ods-default-color-surface-interaction-primary-default, #0050aa) );--ods-button-background-focus-color: var( --ods-color-surface-interaction-primary-focus, var(--ods-default-color-surface-interaction-primary-focus, #002466) );--ods-button-background-hover-color: var( --ods-color-surface-interaction-primary-hover, var(--ods-default-color-surface-interaction-primary-hover, #002466) );--ods-button-background-pressed-color: var( --ods-color-surface-interaction-primary-pressed, var(--ods-default-color-surface-interaction-primary-pressed, #002466) );--ods-button-font-color: var( --ods-color-text-surface-interaction-primary-default, var(--ods-default-color-text-surface-interaction-primary-default, #ffffff) );--ods-button-font-focus-color: var( --ods-color-text-surface-interaction-primary-focus, var(--ods-default-color-text-surface-interaction-primary-focus, #ffffff) );--ods-button-font-hover-color: var( --ods-color-text-surface-interaction-primary-hover, var(--ods-default-color-text-surface-interaction-primary-hover, #ffffff) );--ods-button-font-pressed-color: var( --ods-color-text-surface-interaction-primary-pressed, var(--ods-default-color-text-surface-interaction-primary-pressed, #ffffff) );--ods-button-icon-color: var( --ods-color-icon-surface-interaction-primary-default, var(--ods-default-color-icon-surface-interaction-primary-default, #ffffff) );--ods-button-icon-focus-color: var( --ods-color-icon-surface-interaction-primary-focus, var(--ods-default-color-icon-surface-interaction-primary-focus, #ffffff) );--ods-button-icon-hover-color: var( --ods-color-icon-surface-interaction-primary-hover, var(--ods-default-color-icon-surface-interaction-primary-hover, #ffffff) );--ods-button-icon-pressed-color: var( --ods-color-icon-surface-interaction-primary-pressed, var(--ods-default-color-icon-surface-interaction-primary-pressed, #ffffff) )}.ods-button--secondary[data-v-5bc501b6]{--ods-button-border-radius: var(--ods-radius-action, 62.4375rem);--ods-button-background-color: var( --ods-color-surface-interaction-secondary-default, var(--ods-default-color-surface-interaction-secondary-default, rgb(255 255 255 / 0%)) );--ods-button-background-hover-color: var( --ods-color-surface-interaction-secondary-hover, var(--ods-default-color-surface-interaction-secondary-hover, rgb(255 255 255 / 0%)) );--ods-button-background-focus-color: var( --ods-color-surface-interaction-secondary-focus, var(--ods-default-color-surface-interaction-secondary-focus, rgb(255 255 255 / 0%)) );--ods-button-background-pressed-color: var( --ods-color-surface-interaction-secondary-pressed, var(--ods-default-color-surface-interaction-secondary-pressed, rgb(255 255 255 / 0%)) );--ods-button-font-color: var( --ods-color-text-surface-interaction-secondary-default, var(--ods-default-color-text-surface-interaction-secondary-default, #0050aa) );--ods-button-font-focus-color: var( --ods-color-text-surface-interaction-secondary-focus, var(--ods-default-color-text-surface-interaction-secondary-focus, #002466) );--ods-button-font-hover-color: var( --ods-color-text-surface-interaction-secondary-hover, var(--ods-default-color-text-surface-interaction-secondary-hover, #002466) );--ods-button-font-pressed-color: var( --ods-color-text-surface-interaction-secondary-pressed, var(--ods-default-color-text-surface-interaction-secondary-pressed, #002466) );--ods-button-border-width: var( --ods-component-button-secondary-border-width-default, var(--ods-default-component-button-secondary-border-width-default, .125rem) );--ods-button-border-width-hover: var( --ods-border-width-hover, var(--ods-default-border-width-hover, .125rem) );--ods-button-border-width-focus: var( --ods-border-width-focus, var(--ods-default-border-width-focus, .125rem) );--ods-button-border-width-pressed: var( --ods-border-width-pressed, var(--ods-default-border-width-pressed, .125rem) );--ods-button-border-color: var( --ods-color-border-interaction-secondary-default, var(--ods-default-color-border-interaction-secondary-default, #0050aa) );--ods-button-border-color-hover: var( --ods-color-border-interaction-secondary-hover, var(--ods-default-color-border-interaction-secondary-hover, #002466) );--ods-button-border-color-focus: var( --ods-color-border-interaction-secondary-focus, var(--ods-default-color-border-interaction-secondary-focus, #002466) );--ods-button-border-color-pressed: var( --ods-color-border-interaction-secondary-pressed, var(--ods-default-color-border-interaction-secondary-pressed, #002466) );--ods-button-icon-color: var( --ods-color-icon-surface-interaction-secondary-default, var(--ods-default-color-icon-surface-interaction-secondary-default, #0050aa) );--ods-button-icon-focus-color: var( --ods-color-icon-surface-interaction-secondary-focus, var(--ods-default-color-icon-surface-interaction-secondary-focus, #002466) );--ods-button-icon-hover-color: var( --ods-color-icon-surface-interaction-secondary-hover, var(--ods-default-color-icon-surface-interaction-secondary-hover, #002466) );--ods-button-icon-pressed-color: var( --ods-color-icon-surface-interaction-secondary-pressed, var(--ods-default-color-icon-surface-interaction-secondary-pressed, #002466) )}.ods-button--tertiary[data-v-5bc501b6]{--ods-button-font-color: var( --ods-color-text-surface-interaction-tertiary-default, var(--ods-default-color-text-surface-interaction-tertiary-default, #0050aa) );--ods-button-font-hover-color: var( --ods-default-color-text-surface-interaction-tertiary-hover, var(--ods-color-text-surface-interaction-tertiary-hover, #002466) );--ods-button-font-active-color: var( --ods-default-color-text-surface-interaction-tertiary-pressed, var(--ods-color-text-surface-interaction-tertiary-pressed, #002466) );--ods-button-font-focus-color: var( --ods-default-color-text-surface-interaction-tertiary-focus, var(--ods-color-text-surface-interaction-tertiary-focus, #002466) );--ods-button-font-pressed-color: var( --ods-default-color-text-surface-interaction-tertiary-pressed, var(--ods-color-text-surface-interaction-tertiary-pressed, #002466) );--ods-button-background-color: var( --ods-default-color-surface-interaction-tertiary-default, var(--ods-color-surface-interaction-tertiary-default, rgba(255, 255, 255, 0)) );--ods-button-background-focus-color: var( --ods-default-color-surface-interaction-tertiary-focus, var(--ods-color-surface-interaction-tertiary-focus, rgba(255, 255, 255, 0)) );--ods-button-background-hover-color: var( --ods-default-color-surface-interaction-tertiary-hover, var(--ods-color-surface-interaction-tertiary-hover, rgba(255, 255, 255, 0)) );--ods-button-background-pressed-color: var( --ods-color-surface-interaction-tertiary-pressed, var(--ods-color-surface-interaction-tertiary-pressed, rgba(255, 255, 255, 0)) );--ods-button-icon-color: var( --ods-color-icon-surface-interaction-tertiary-default, var(--ods-default-color-icon-surface-interaction-tertiary-default, #0050aa) );--ods-button-icon-focus-color: var( --ods-color-icon-surface-interaction-tertiary-focus, var(--ods-default-color-icon-surface-interaction-tertiary-focus, #002466) );--ods-button-icon-hover-color: var( --ods-color-icon-surface-interaction-tertiary-hover, var(--ods-default-color-icon-surface-interaction-tertiary-hover, #002466) );--ods-button-icon-pressed-color: var( --ods-color-icon-surface-interaction-tertiary-pressed, var(--ods-default-color-icon-surface-interaction-tertiary-pressed, #002466) )}.ods-button--disabled[data-v-5bc501b6]{opacity:var(--ods-opacity-disabled, .3);cursor:default}.ods-button--primary[data-v-5bc501b6],.ods-button--secondary[data-v-5bc501b6],.ods-button--tertiary[data-v-5bc501b6]{background-color:var(--ods-button-background-color);color:var(--ods-button-font-color)}.ods-button--primary[data-v-5bc501b6]:hover:not(.ods-button--disabled),.ods-button--secondary[data-v-5bc501b6]:hover:not(.ods-button--disabled),.ods-button--tertiary[data-v-5bc501b6]:hover:not(.ods-button--disabled){color:var(--ods-button-font-hover-color);background-color:var(--ods-button-background-hover-color);border-width:var(--ods-button-border-width-hover);border-color:var(--ods-button-border-color-hover)}.ods-button--primary:hover:not(.ods-button--disabled) .ods-button__icon[data-v-5bc501b6],.ods-button--secondary:hover:not(.ods-button--disabled) .ods-button__icon[data-v-5bc501b6],.ods-button--tertiary:hover:not(.ods-button--disabled) .ods-button__icon[data-v-5bc501b6]{fill:var(--ods-button-icon-hover-color)}.ods-button--primary[data-v-5bc501b6]:focus-visible:not(.ods-button--disabled),.ods-button--secondary[data-v-5bc501b6]:focus-visible:not(.ods-button--disabled),.ods-button--tertiary[data-v-5bc501b6]:focus-visible:not(.ods-button--disabled){color:var(--ods-button-font-focus-color);background-color:var(--ods-button-background-focus-color);border-width:var(--ods-button-border-width-focus);border-color:var(--ods-button-border-color-focus)}.ods-button--primary:focus-visible:not(.ods-button--disabled) .ods-button__icon[data-v-5bc501b6],.ods-button--secondary:focus-visible:not(.ods-button--disabled) .ods-button__icon[data-v-5bc501b6],.ods-button--tertiary:focus-visible:not(.ods-button--disabled) .ods-button__icon[data-v-5bc501b6]{fill:var(--ods-button-icon-focus-color)}.ods-button--primary[data-v-5bc501b6]:active:not(.ods-button--disabled),.ods-button--secondary[data-v-5bc501b6]:active:not(.ods-button--disabled),.ods-button--tertiary[data-v-5bc501b6]:active:not(.ods-button--disabled){color:var(--ods-button-font-pressed-color);background-color:var(--ods-button-background-pressed-color);border-width:var(--ods-button-border-width-pressed);border-color:var(--ods-button-border-color-pressed)}.ods-button--primary:active:not(.ods-button--disabled) .ods-button__icon[data-v-5bc501b6],.ods-button--secondary:active:not(.ods-button--disabled) .ods-button__icon[data-v-5bc501b6],.ods-button--tertiary:active:not(.ods-button--disabled) .ods-button__icon[data-v-5bc501b6]{fill:var(--ods-button-icon-pressed-color)}.ods-button--primary[data-v-5bc501b6]{border:none}.ods-button--secondary[data-v-5bc501b6]{border:var(--ods-button-border-width) solid var(--ods-button-border-color)}.ods-button--secondary[data-v-5bc501b6]:focus-visible{position:relative}.ods-button--secondary[data-v-5bc501b6]:focus-visible:before{content:"";display:block;width:100%;height:100%;position:absolute;outline:solid .125rem var(--ods-component-browser-focus-border-color-outer, #ffffff);outline-offset:6px;pointer-events:none;left:0;top:0}.ods-button--secondary[data-v-5bc501b6]:focus-visible:after{content:"";display:block;width:100%;height:100%;position:absolute;outline:solid .125rem var(--ods-component-browser-focus-border-color-inner, #0050aa);outline-offset:4px;pointer-events:none;left:0;top:0}.ods-button[data-v-5bc501b6]:is(.ods-button--tertiary){--ods-button-min-height: auto;--ods-button-padding: unset;--ods-button-border-radius: none;flex-direction:row-reverse;border:none}.ods-button:is(.ods-button--tertiary).ods-button--size-small[data-v-5bc501b6]{--ods-button-min-height: 1.25rem}.ods-button:is(.ods-button--tertiary).ods-button--size-medium[data-v-5bc501b6]{--ods-button-min-height: 1.5rem}.ods-button:is(.ods-button--tertiary).ods-button--size-large[data-v-5bc501b6]{--ods-button-min-height: 1.75rem}.ods-button:is(.ods-button--tertiary).ods-button--size-small .ods-button__icon[data-v-5bc501b6]{--ods-button-icon-size: 1rem}.ods-button:is(.ods-button--tertiary).ods-button--size-medium .ods-button__icon[data-v-5bc501b6]{--ods-button-icon-size: 1rem}.ods-button:is(.ods-button--tertiary).ods-button--size-large .ods-button__icon[data-v-5bc501b6]{--ods-button-icon-size: 1.5rem}.ods-button.ods-button--theme-primary.ods-button--primary[data-v-5bc501b6]{--ods-default-color-surface-interaction-primary-default: #fff000;--ods-default-color-surface-interaction-primary-focus: #ffc400;--ods-default-color-surface-interaction-primary-hover: #ffc400;--ods-default-color-surface-interaction-primary-pressed: #ffc400;--ods-default-color-text-surface-interaction-primary-default: #1e2124;--ods-default-color-text-surface-interaction-primary-focus: #1e2124;--ods-default-color-text-surface-interaction-primary-hover: #1e2124;--ods-default-color-text-surface-interaction-primary-pressed: #1e2124;--ods-default-color-icon-surface-interaction-primary-default: #1e2124;--ods-default-color-icon-surface-interaction-primary-focus: #1e2124;--ods-default-color-icon-surface-interaction-primary-hover: #1e2124;--ods-default-color-icon-surface-interaction-primary-pressed: #1e2124}.ods-button.ods-button--theme-negative.ods-button--primary[data-v-5bc501b6]{--ods-default-color-surface-interaction-primary-default: #ffffff;--ods-default-color-surface-interaction-primary-focus: #c2dfff;--ods-default-color-surface-interaction-primary-hover: #c2dfff;--ods-default-color-surface-interaction-primary-pressed: #c2dfff;--ods-default-color-text-surface-interaction-primary-default: #1e2124;--ods-default-color-text-surface-interaction-primary-focus: #1e2124;--ods-default-color-text-surface-interaction-primary-hover: #1e2124;--ods-default-color-text-surface-interaction-primary-pressed: #1e2124;--ods-default-color-icon-surface-interaction-primary-default: #1e2124;--ods-default-color-icon-surface-interaction-primary-focus: #1e2124;--ods-default-color-icon-surface-interaction-primary-hover: #1e2124;--ods-default-color-icon-surface-interaction-primary-pressed: #1e2124}.ods-button.ods-button--theme-primary.ods-button--secondary[data-v-5bc501b6]{--ods-default-color-surface-interaction-secondary-default: rgb(255 255 255 / 0%);--ods-default-color-surface-interaction-secondary-hover: rgb(255 255 255 / 0%);--ods-default-color-surface-interaction-secondary-focus: rgb(255 255 255 / 0%);--ods-default-color-surface-interaction-secondary-pressed: rgb(255 255 255 / 0%);--ods-default-color-text-surface-interaction-secondary-default: #fff000;--ods-default-color-text-surface-interaction-secondary-focus: #ffc400;--ods-default-color-text-surface-interaction-secondary-hover: #ffc400;--ods-default-color-text-surface-interaction-secondary-pressed: #ffc400;--ods-default-component-button-secondary-border-width-default: .125rem;--ods-default-border-width-hover: .125rem;--ods-default-border-width-focus: .125rem;--ods-default-border-width-pressed: .125rem;--ods-default-color-border-interaction-secondary-default: #fff000;--ods-default-color-border-interaction-secondary-hover: #ffc400;--ods-default-color-border-interaction-secondary-focus: #ffc400;--ods-default-color-border-interaction-secondary-pressed: #ffc400;--ods-default-color-icon-surface-interaction-secondary-default: #fff000;--ods-default-color-icon-surface-interaction-secondary-focus: #ffc400;--ods-default-color-icon-surface-interaction-secondary-hover: #ffc400;--ods-default-color-icon-surface-interaction-secondary-pressed: #ffc400}.ods-button.ods-button--theme-negative.ods-button--secondary[data-v-5bc501b6]{--ods-default-color-surface-interaction-secondary-default: rgb(255 255 255 / 0%);--ods-default-color-surface-interaction-secondary-hover: rgb(255 255 255 / 0%);--ods-default-color-surface-interaction-secondary-focus: rgb(255 255 255 / 0%);--ods-default-color-surface-interaction-secondary-pressed: rgb(255 255 255 / 0%);--ods-default-color-text-surface-interaction-secondary-default: #ffffff;--ods-default-color-text-surface-interaction-secondary-focus: #ffffff;--ods-default-color-text-surface-interaction-secondary-hover: #ffffff;--ods-default-color-text-surface-interaction-secondary-pressed: #ffffff;--ods-default-component-button-secondary-border-width-default: .125rem;--ods-default-border-width-hover: .125rem;--ods-default-border-width-focus: .125rem;--ods-default-border-width-pressed: .125rem;--ods-default-color-border-interaction-secondary-default: #ffffff;--ods-default-color-border-interaction-secondary-hover: #c2dfff;--ods-default-color-border-interaction-secondary-focus: #c2dfff;--ods-default-color-border-interaction-secondary-pressed: #c2dfff;--ods-default-color-icon-surface-interaction-secondary-default: #ffffff;--ods-default-color-icon-surface-interaction-secondary-focus: #ffffff;--ods-default-color-icon-surface-interaction-secondary-hover: #ffffff;--ods-default-color-icon-surface-interaction-secondary-pressed: #ffffff}.ods-button.ods-button--theme-primary.ods-button--tertiary[data-v-5bc501b6]{--ods-default-color-text-surface-interaction-tertiary-default: #fff000;--ods-default-color-text-surface-interaction-tertiary-hover: #ffc400;--ods-default-color-text-surface-interaction-tertiary-focus: #ffc400;--ods-default-color-text-surface-interaction-tertiary-pressed: #ffc400;--ods-default-color-surface-interaction-tertiary-default: rgb(255 255 255 / 0%);--ods-default-color-surface-interaction-tertiary-hover: rgb(255 255 255 / 0%);--ods-default-color-surface-interaction-tertiary-focus: rgb(255 255 255 / 0%);--ods-default-color-surface-interaction-tertiary-pressed: rgb(255 255 255 / 0%);--ods-default-color-icon-surface-interaction-tertiary-default: #fff000;--ods-default-color-icon-surface-interaction-tertiary-focus: #ffc400;--ods-default-color-icon-surface-interaction-tertiary-hover: #ffc400;--ods-default-color-icon-surface-interaction-tertiary-pressed: #ffc400}.ods-button.ods-button--theme-negative.ods-button--tertiary[data-v-5bc501b6]{--ods-default-color-text-surface-interaction-tertiary-default: #ffffff;--ods-default-color-text-surface-interaction-tertiary-hover: #c2dfff;--ods-default-color-text-surface-interaction-tertiary-focus: #c2dfff;--ods-default-color-text-surface-interaction-tertiary-pressed: #c2dfff;--ods-default-color-surface-interaction-tertiary-default: rgb(255 255 255 / 0%);--ods-default-color-surface-interaction-tertiary-focus: rgb(255 255 255 / 0%);--ods-default-color-surface-interaction-tertiary-pressed: rgb(255 255 255 / 0%);--ods-default-color-icon-surface-interaction-tertiary-default: #ffffff;--ods-default-color-icon-surface-interaction-tertiary-focus: #c2dfff;--ods-default-color-icon-surface-interaction-tertiary-hover: #c2dfff;--ods-default-color-icon-surface-interaction-tertiary-pressed: #c2dfff}.pca-the-overlay .ods-sheet__title-text{margin-block:0}.pca-the-overlay *{box-sizing:border-box}.pca-the-overlay__container{position:relative;cursor:auto;z-index:1022;overflow-y:auto;flex:0 1 auto;width:100%}.pca-the-overlay__items{padding:1rem;margin:0;list-style-type:none}.pca-the-overlay__buttons,.pca-the-overlay__recommendations{padding:0 1rem 1rem}']]
  ]),
  L_ = "/wishlist-api",
  P_ = new Headers({
    Accept: "*/*",
    Pragma: "no-cache",
    "Cache-Control": "no-cache",
    "Content-Type": "application/json"
  });
var T_ = (e => (e[e.Unauthorized = 0] = "Unauthorized", e[e.Generic = 1] = "Generic", e))(T_ || {});
const O_ = async e => {
  try {
    return await e()
  } catch (q_) {
    console.info(q_);
    let t = !1,
      o = 1;
    return q_ instanceof xm && 401 === q_.response.status && (t = !0, o = 0), {
      ok: !1,
      isUnauthorized: t,
      eventCode: o,
      payload: void 0,
      messages: []
    }
  }
};
class C_ {
  static KEY = "lidl-wishlist";
  static saveErpNumber(e) {
    const t = C_.getOrCreateWishlist();
    C_.appendToWishlist(t, e), C_.saveWishlist(t)
  }
  static deleteErpNumber(e) {
    const t = C_.getOrCreateWishlist(),
      o = C_.removeFromWishlist(t, e);
    C_.saveWishlist(o)
  }
  static clear() {
    "undefined" != typeof localStorage && localStorage.setItem(C_.KEY, JSON.stringify([]))
  }
  static appendToWishlist(e, t) {
    -1 === e.indexOf(t) && e.push(t)
  }
  static removeFromWishlist(e, t) {
    return -1 !== e.indexOf(t) ? e.filter(e => e !== t) : e
  }
  static getOrCreateWishlist() {
    if ("undefined" == typeof localStorage) return [];
    const e = localStorage.getItem(C_.KEY);
    return e ? JSON.parse(e) : []
  }
  static saveWishlist(e) {
    "undefined" != typeof localStorage && localStorage.setItem(C_.KEY, JSON.stringify(e))
  }
}
const R_ = ["disabled", "id", "aria-label", "title"],
  I_ = {
    key: 0,
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    xmlns: "http://www.w3.org/2000/svg"
  },
  S_ = {
    key: 1,
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    xmlns: "http://www.w3.org/2000/svg"
  },
  D_ = Of(zo({
    __name: "TheWishlistButton",
    props: yr({
      country: {
        type: String
      },
      language: {
        type: String
      },
      erpNumber: {
        type: String
      },
      elementId: {
        type: String
      },
      elementTitle: {
        type: String
      },
      disabled: {
        type: Boolean
      },
      debug: {
        type: Boolean
      },
      clearInitial: {
        type: String
      }
    }, {
      ...pb(),
      disabled: !1,
      debug: !1,
      elementId: "addToWishlist",
      elementTitle: ""
    }),
    setup(e) {
      const {
        t: t
      } = kp(), {
        getEnvironment: o
      } = kn(), r = e, s = {
        country: r.country,
        language: r.language,
        env: o()
      }, {
        emitWishlistButtonClickEvent: i
      } = gm(s), {
        isLoading: n,
        withLoading: a
      } = vm(), {
        withDebounce: l
      } = rm(), c = At([]), d = At(), p = si(() => c.value.indexOf(String(r.erpNumber)) > -1), u = async () => p.value ? await (async ({
        erpNumber: e
      }) => O_(async () => {
        const t = await tb.delete(`${L_}/wishlist?erpNumber=${encodeURIComponent(e)}`, {
            headers: {
              ...P_,
              "Content-Type": void 0
            }
          })
          .json();
        return {
          ok: !0,
          isUnauthorized: !1,
          payload: t.payload,
          messages: t.messages
        }
      }))({
        erpNumber: r.erpNumber
      }) : await (async ({
        erpNumber: e
      }) => O_(async () => {
        const t = {
            erpNumber: e
          },
          o = await tb.post(`${L_}/wishlist`, {
            json: t,
            headers: P_
          })
          .json();
        return {
          ok: !0,
          isUnauthorized: !1,
          payload: o.payload,
          messages: o.messages
        }
      }))({
        erpNumber: r.erpNumber
      }), f = () => {
        l(a(async () => {
          const e = async () => {
            const {
              ok: e,
              isUnauthorized: o,
              eventCode: s,
              payload: n
            } = await u();
            if (e) p.value ? C_.deleteErpNumber(r.erpNumber) : C_.saveErpNumber(r.erpNumber), ub(ob, {
              level: Wf.Success,
              message: t(p.value ? "widgets.addToWishlistButton.message.productRemovedMessage" : "widgets.addToWishlistButton.message.productAddedMessage"),
              headline: "",
              type: "multiline"
            }), p.value ? i({
              success: !0,
              errorcode: void 0,
              wishlist: n,
              action: "removed"
            }) : i({
              success: !0,
              errorcode: void 0,
              wishlist: n,
              action: "added"
            }), c.value = C_.getOrCreateWishlist();
            else {
              o ? C_.clear() : p.value || C_.deleteErpNumber(r.erpNumber);
              const e = {
                id: "wishlist-error",
                level: Wf.Error,
                message: t("widgets.genericErrorMessage"),
                headline: "",
                type: "multiline"
              };
              s !== T_.Generic && (e.message = t("widgets.addToWishlistButton.message.loginRequiredMessage"), e.buttonText = t("widgets.addToWishlistButton.message.loginButtonLabel"), e.buttonClick = () => {
                window.location.href = `/user-api/login?redirect=${encodeURIComponent(window.location.href)}`
              }, e.type = _f), ub(ob, e), i({
                success: !1,
                errorcode: void 0,
                wishlist: void 0,
                action: void 0
              })
            }
          };
          ub("wishlist-update", {
            callback: async () => {
              await e()
            }
          })
        }), 1e3)()
      };
      return Zo(async () => {
        const {
          resetStyles: e,
          hostNode: t
        } = _m(d), {
          clearInitialAttributes: o
        } = fb(t);
        e(), o();
        dm()
          .accountId || C_.clear(), c.value = C_.getOrCreateWishlist()
      }), (o, s) => (ks(), As("button", {
        ref_key: "buttonTemplateEl",
        ref: d,
        disabled: Ot(Tf)(e.disabled) || Ot(n),
        class: "pca-the-wishlist-button--redesign",
        id: r.elementId,
        "aria-label": p.value ? Ot(t)("widgets.addToWishlistButton.removeLabel") : Ot(t)("widgets.addToWishlistButton.label"),
        title: r.elementTitle,
        onClick: f
      }, [Rs("span", {
        class: Q(["pca-the-wishlist-button--redesign__icon", {
          "pca-the-wishlist-button--redesign__icon-active": p.value
        }])
      }, [p.value ? (ks(), As("svg", I_, [...s[0] || (s[0] = [Rs("path", {
        d: "M52.35 5.44989C48.81 2.36989 44.39 1.01989 39.91 1.64989L39.8 1.66989C39.45 1.71989 39.1 1.78989 38.76 1.85989C35.4 2.58989 32.29 4.57989 30 7.40989C27.71 4.57989 24.6 2.57989 21.25 1.84989C20.9 1.76989 20.56 1.70989 20.21 1.65989L20.09 1.63989C15.61 1.00989 11.19 2.35989 7.65 5.43989C3.74 8.84989 1.5 13.9099 1.5 19.3299V19.9499C1.5 25.2299 3.42 30.2199 6.89 34.0099L28.52 57.6099C29.31 58.4699 30.68 58.4699 31.47 57.6099L53.1 34.0099C56.58 30.2199 58.5 25.2299 58.5 19.9499V19.3299C58.5 13.9099 56.26 8.84989 52.35 5.44989Z"
      }, null, -1)])])) : (ks(), As("svg", S_, [...s[1] || (s[1] = [Rs("path", {
        d: "M52.35 5.44989C48.81 2.36989 44.39 1.01989 39.91 1.64989L39.8 1.66989C39.45 1.71989 39.1 1.78989 38.76 1.85989C35.4 2.58989 32.29 4.57989 30 7.40989C27.71 4.57989 24.6 2.57989 21.25 1.84989C20.9 1.76989 20.56 1.70989 20.21 1.65989L20.09 1.63989C15.61 1.00989 11.19 2.35989 7.65 5.43989C3.74 8.84989 1.5 13.9099 1.5 19.3299V19.9499C1.5 25.2299 3.42 30.2199 6.89 34.0099L28.52 57.6099C29.31 58.4699 30.68 58.4699 31.47 57.6099L53.1 34.0099C56.58 30.2199 58.5 25.2299 58.5 19.9499V19.3299C58.5 13.9099 56.26 8.84989 52.35 5.44989ZM55.5 19.9599C55.5 24.4899 53.87 28.7599 50.89 31.9899L30 54.7799L9.1 31.9899C6.13 28.7599 4.5 24.4899 4.5 19.9599V19.3399C4.5 14.7899 6.37 10.5499 9.62 7.71989C12.03 5.61989 14.93 4.50989 17.98 4.50989C18.57 4.50989 19.17 4.54989 19.76 4.63989C20.04 4.67989 20.33 4.72989 20.61 4.79989C23.74 5.47989 26.63 7.55989 28.54 10.5099C29.23 11.5699 30.78 11.5699 31.47 10.5099C33.38 7.55989 36.26 5.47989 39.4 4.79989C39.68 4.73989 39.96 4.68989 40.34 4.62989C43.94 4.11989 47.52 5.21989 50.39 7.71989C53.64 10.5499 55.51 14.7799 55.51 19.3399L55.5 19.9599Z"
      }, null, -1)])]))], 2)], 8, R_))
    }
  }), [
    ["styles", ['@keyframes bounceAnimation{0%,to{transform:scale(1)}10%{transform:scale(1.45)}18%{transform:scale(1.3)}23%{transform:scale(1.45)}30%,65%{transform:scale(1.3)}85%{transform:scale(1.3)}90%{transform:scale(.9)}95%{transform:scale(1.1)}}:root *{box-sizing:border-box}.pca-the-wishlist-button--redesign{--ods-icon-button-background-color: rgba(0, 0, 0, .4470588235);--ods-icon-button-background-color-focused: rgba(0, 0, 0, .6);--ods-icon-button-background-color-pressed: rgba(0, 0, 0, .7490196078);--ods-icon-button-icon-color: white;--ods-icon-button-icon-color-focused: white;--ods-icon-button-icon-color-pressed: white;box-sizing:border-box;height:2.5rem;width:2.5rem;all:unset;border-radius:62.4375rem;display:inline-block;background-color:var(--ods-icon-button-background-color);font-size:0;cursor:pointer}.pca-the-wishlist-button--redesign:focus-visible{position:relative}.pca-the-wishlist-button--redesign:focus-visible:before{content:"";display:block;width:100%;height:100%;position:absolute;outline:solid .125rem var(--ods-component-browser-focus-border-color-outer, #ffffff);outline-offset:.25rem;pointer-events:none;left:0;top:0}.pca-the-wishlist-button--redesign:focus-visible:after{content:"";display:block;width:100%;height:100%;position:absolute;outline:solid .125rem var(--ods-component-browser-focus-border-color-inner, #0050aa);outline-offset:.125rem;pointer-events:none;left:0;top:0}.pca-the-wishlist-button--redesign{padding:.5rem;line-height:initial}.pca-the-wishlist-button--redesign:hover:not(:disabled),.pca-the-wishlist-button--redesign:focus-visible:not(:disabled){background:var(--ods-icon-button-background-color-focused)}.pca-the-wishlist-button--redesign:hover:not(:disabled) .pca-the-wishlist-button--redesign__icon,.pca-the-wishlist-button--redesign:focus-visible:not(:disabled) .pca-the-wishlist-button--redesign__icon{fill:var(--ods-icon-button-icon-color-focused)}.pca-the-wishlist-button--redesign:active:not(:disabled){background:var(--ods-icon-button-background-color-pressed)}.pca-the-wishlist-button--redesign:active:not(:disabled) .pca-the-wishlist-button--redesign__icon{fill:var(--ods-icon-button-icon-color-focused)}.pca-the-wishlist-button--redesign__icon{position:relative;display:block}@media screen and (hover:none){.pca-the-wishlist-button--redesign__icon:after{content:"";position:absolute;top:50%;left:50%;min-width:2.75rem;min-height:2.75rem;width:auto;height:auto;transform:translate(-50%,-50%)}}.pca-the-wishlist-button--redesign__icon{display:inline-block}.pca-the-wishlist-button--redesign__icon svg{width:100%;height:100%;fill:inherit;display:block}.pca-the-wishlist-button--redesign__icon svg path{fill:inherit}.pca-the-wishlist-button--redesign__icon{fill:var(--ods-icon-button-icon-color);width:1.5rem;height:1.5rem;transition:transform .2s cubic-bezier(.175,.885,.32,1.275)}.pca-the-wishlist-button--redesign__icon-active{animation:bounceAnimation 1.3s}.pca-the-wishlist-button--redesign:disabled,.pca-the-wishlist-button--redesign--disabled{opacity:.3;cursor:default}', ".pca-the-wishlist-button{width:100%;font-family:LidlFontCondPro,Trebuchet MS,sans-serif;font-size:1.125rem;font-weight:700;line-height:1.2;text-transform:uppercase;border-radius:.125rem;border:none;padding:.875rem 1rem .8125rem;background:none;border:.0625rem solid;border-color:#0050aa;color:#0050aa;cursor:pointer;text-decoration:none;justify-content:center;align-items:center;display:inline-flex;font-weight:600}@media(max-width:960px){.pca-the-wishlist-button{font-size:1rem}}.pca-the-wishlist-button:before{background-color:#0050aa}.pca-the-wishlist-button:hover,.pca-the-wishlist-button:focus,.pca-the-wishlist-button:active{background:#0050aa;color:#fff;border-color:transparent;background-clip:padding-box}.pca-the-wishlist-button:hover:before,.pca-the-wishlist-button:focus:before,.pca-the-wishlist-button:active:before{background-color:#fff}.pca-the-wishlist-button:hover,.pca-the-wishlist-button:focus,.pca-the-wishlist-button:active{box-shadow:3000px 0 #00000052 inset}.pca-the-wishlist-button[disabled],.pca-the-wishlist-button:disabled{font-size:1.125rem;font-weight:700;line-height:1.2;text-transform:uppercase;border-radius:.125rem;border:none;display:inline-flex;padding:.875rem 1rem .8125rem;background:none;border:.0625rem solid;border-color:#0050aa;color:#0050aa;opacity:.16;cursor:default;cursor:not-allowed}@media(max-width:960px){.pca-the-wishlist-button[disabled],.pca-the-wishlist-button:disabled{font-size:1rem}}.pca-the-wishlist-button[disabled]:before,.pca-the-wishlist-button:disabled:before{background-color:#0050aa}.pca-the-wishlist-button[disabled]:hover,.pca-the-wishlist-button:disabled:hover,.pca-the-wishlist-button[disabled]:focus,.pca-the-wishlist-button:disabled:focus,.pca-the-wishlist-button[disabled]:active,.pca-the-wishlist-button:disabled:active{box-shadow:none;background:none;color:#0050aa;border-color:#0050aa;-webkit-background-clip:text;background-clip:text}.pca-the-wishlist-button[disabled]:hover:before,.pca-the-wishlist-button:disabled:hover:before,.pca-the-wishlist-button[disabled]:focus:before,.pca-the-wishlist-button:disabled:focus:before,.pca-the-wishlist-button[disabled]:active:before,.pca-the-wishlist-button:disabled:active:before{background-color:#0050aa}.pca-the-wishlist-button:hover .pca-the-wishlist-button__image,.pca-the-wishlist-button:active .pca-the-wishlist-button__image,.pca-the-wishlist-button:focus .pca-the-wishlist-button__image{background-color:#fff}.pca-the-wishlist-button:hover .pca-the-wishlist-button__image--disabled,.pca-the-wishlist-button:active .pca-the-wishlist-button__image--disabled,.pca-the-wishlist-button:focus .pca-the-wishlist-button__image--disabled{background-color:#0050aa}.pca-the-wishlist-button__image{display:inline-block;flex:0 0 auto;width:1rem;height:1rem;margin-top:.1rem;margin-right:.2rem;mask-image:url(/cdn/assets/icons/1.0.0/heart.svg);-webkit-mask-image:url(/cdn/assets/icons/1.0.0/heart.svg);background-color:#0050aa;mask-repeat:no-repeat;-webkit-mask-repeat:no-repeat}"]]
  ]),
  j_ = "/cdn/assets/icons/1.0.0",
  B_ = zo({
    __name: "VIcon",
    props: {
      name: {
        default: "placeholder",
        type: String
      },
      width: {
        default: "1.5rem",
        type: String
      },
      height: {
        default: "1.5rem",
        type: String
      },
      color: {
        default: "currentcolor",
        type: String
      }
    },
    setup(e) {
      const t = e,
        o = si(() => ({
          "mask-image": `url(${j_}/${t.name}.svg)`,
          "-webkit-mask-image": `url(${j_}/${t.name}.svg)`,
          "background-color": `${t.color}`,
          width: t.width,
          height: t.height,
          display: "inline-block"
        }));
      return (e, t) => (ks(), As("span", {
        class: "pca-v-icon",
        style: U(o.value)
      }, null, 4))
    }
  }),
  z_ = {
    class: "pca-cart-flyout__price-information-text"
  },
  F_ = ["href"],
  V_ = {
    class: "pca-cart-flyout__price-information-price"
  },
  N_ = Of(zo({
    __name: "VPriceInformation",
    props: {
      price: {
        default: "",
        type: String
      },
      text: {
        default: "",
        type: String
      },
      linkSrc: {
        default: "",
        type: String
      },
      isTotalPrice: {
        type: Boolean,
        default: !1
      }
    },
    setup(e) {
      const t = e;
      return (e, o) => (ks(), As("div", {
        class: Q({
          "pca-cart-flyout__price-information": !0,
          "pca-cart-flyout__price-information--total-price": Ot(Tf)(t.isTotalPrice)
        })
      }, [Rs("span", z_, [t.linkSrc ? (ks(), As("a", {
        key: 0,
        href: t.linkSrc,
        target: "_blank",
        class: "pca-cart-flyout__link",
        rel: "noopener"
      }, Z(t.text), 9, F_)) : (ks(), As(bs, {
        key: 1
      }, [Ds(Z(t.text), 1)], 64))]), Rs("span", V_, Z(t.price), 1)], 2))
    }
  }), [
    ["styles", [".pca-cart-flyout__price-information{padding:0 0 1rem;border-bottom:solid 1px #e3e4e5;display:flex;flex-flow:row nowrap;justify-content:space-between}.pca-cart-flyout__price-information:last-child{border-bottom:0}.pca-cart-flyout__price-information--total-price{font-size:1.25rem;font-weight:700;border-bottom:0;margin:0;padding:0 0 1rem}@media(min-width:1280px){.pca-cart-flyout__price-information--total-price{font-size:1.375rem}}"]]
  ]);
var M_, U_;
M_ = "cart-widget", U_ = {
  versionTag: "v-cart-widget-25.5.3-RELEASE"
}, window.__pca = window.__pca ?? {}, window.__pca.versions = window.__pca.versions ?? {}, window.__pca.versions[M_] = window.__pca.versions[M_] ?? {}, window.__pca.versions[M_].versionTag = U_.versionTag ?? window.__pca.versions[M_].versionTag;
(async () => {
  await (async () => {
    {
      const {
        init: e
      } = Ha();
      await e()
    } {
      const {
        init: e
      } = Ka();
      await e()
    } {
      const {
        init: e
      } = kp();
      await e()
    }
  })(), customElements.define("pca-a-message", tn(Jf)), customElements.define("pca-the-messages", tn(g_)), customElements.define("pca-the-overlay", tn(A_, {
    shadowRoot: !1
  })), customElements.define("pca-the-flyout", tn(p_)), customElements.define("pca-the-indicator", tn(f_)), customElements.define("pca-the-button", tn(vb)), customElements.define("pca-the-wishlist-button", tn(D_)), customElements.define("pca-v-icon", tn(B_)), customElements.define("pca-v-button", tn(gb)), customElements.define("pca-v-price-information", tn(N_)), customElements.define("pca-a-cart-item", tn(qf)), customElements.define("pca-a-buttons", tn(Cf));
  document.querySelector("pca-the-messages") || document.body.appendChild(document.createElement("pca-the-messages"))
})();
export {
  t as _, As as c, zo as d, yr as m, Q as n, ks as o, At as r, Ep as v, bo as w
};