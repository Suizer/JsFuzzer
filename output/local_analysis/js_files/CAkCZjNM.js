const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./DtPERwyr.js", "./CbDIU0U_.js", "./DtSF93O_.js", "./index.D2QOIWH_.css", "./C1Ak-wks.js", "./index.IpRQhp-t.css", "./DhiQqYYJ.js", "./index.a42gqDtr.css", "./D4PVHm5X.js", "./index.BqNgU3wt.css", "./BWOwZLAL.js", "./default.CZPHuanM.css", "./Bkq-lVKm.js", "./staticlayout.BYcDLcR5.css"]))) => i.map(i => d[i]);
var Up = Object.defineProperty;
var Gp = (e, t, r) => t in e ? Up(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[t] = r;
var Lt = (e, t, r) => Gp(e, typeof t != "symbol" ? t + "" : t, r);
(function() {
  const t = document.createElement("link")
    .relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s);
  new MutationObserver(s => {
      for (const i of s)
        if (i.type === "childList")
          for (const a of i.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && n(a)
    })
    .observe(document, {
      childList: !0,
      subtree: !0
    });

  function r(s) {
    const i = {};
    return s.integrity && (i.integrity = s.integrity), s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? i.credentials = "include" : s.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
  }

  function n(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = r(s);
    fetch(s.href, i)
  }
})();
/**
 * @vue/shared v3.5.29
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function gl(e) {
  const t = Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return r => r in t
}
const Oe = {},
  Un = [],
  Xt = () => {},
  id = () => !1,
  js = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  vl = e => e.startsWith("onUpdate:"),
  et = Object.assign,
  yl = (e, t) => {
    const r = e.indexOf(t);
    r > -1 && e.splice(r, 1)
  },
  $p = Object.prototype.hasOwnProperty,
  xe = (e, t) => $p.call(e, t),
  fe = Array.isArray,
  Gn = e => ns(e) === "[object Map]",
  na = e => ns(e) === "[object Set]",
  wc = e => ns(e) === "[object Date]",
  Wp = e => ns(e) === "[object RegExp]",
  pe = e => typeof e == "function",
  je = e => typeof e == "string",
  Jt = e => typeof e == "symbol",
  Ne = e => e !== null && typeof e == "object",
  El = e => (Ne(e) || pe(e)) && pe(e.then) && pe(e.catch),
  ad = Object.prototype.toString,
  ns = e => ad.call(e),
  jp = e => ns(e)
  .slice(8, -1),
  od = e => ns(e) === "[object Object]",
  sa = e => je(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  vn = gl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
  ia = e => {
    const t = Object.create(null);
    return (r => t[r] || (t[r] = e(r)))
  },
  Kp = /-\w/g,
  Nt = ia(e => e.replace(Kp, t => t.slice(1)
    .toUpperCase())),
  Yp = /\B([A-Z])/g,
  Nr = ia(e => e.replace(Yp, "-$1")
    .toLowerCase()),
  aa = ia(e => e.charAt(0)
    .toUpperCase() + e.slice(1)),
  Ba = ia(e => e ? `on${aa(e)}` : ""),
  Rt = (e, t) => !Object.is(e, t),
  $n = (e, ...t) => {
    for (let r = 0; r < e.length; r++) e[r](...t)
  },
  ld = (e, t, r, n = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: n,
      value: r
    })
  },
  wl = e => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t
  },
  cd = e => {
    const t = je(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
  };
let bc;
const oa = () => bc || (bc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function la(e) {
  if (fe(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r],
        s = je(n) ? zp(n) : la(n);
      if (s)
        for (const i in s) t[i] = s[i]
    }
    return t
  } else if (je(e) || Ne(e)) return e
}
const Xp = /;(?![^(]*\))/g,
  qp = /:([^]+)/,
  Zp = /\/\*[^]*?\*\//g;

function zp(e) {
  const t = {};
  return e.replace(Zp, "")
    .split(Xp)
    .forEach(r => {
      if (r) {
        const n = r.split(qp);
        n.length > 1 && (t[n[0].trim()] = n[1].trim())
      }
    }), t
}

function ca(e) {
  let t = "";
  if (je(e)) t = e;
  else if (fe(e))
    for (let r = 0; r < e.length; r++) {
      const n = ca(e[r]);
      n && (t += n + " ")
    } else if (Ne(e))
      for (const r in e) e[r] && (t += r + " ");
  return t.trim()
}

function JA(e) {
  if (!e) return null;
  let {
    class: t,
    style: r
  } = e;
  return t && !je(t) && (e.class = ca(t)), r && (e.style = la(r)), e
}
const Jp = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Qp = gl(Jp);

function ud(e) {
  return !!e || e === ""
}

function em(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++) r = bn(e[n], t[n]);
  return r
}

function bn(e, t) {
  if (e === t) return !0;
  let r = wc(e),
    n = wc(t);
  if (r || n) return r && n ? e.getTime() === t.getTime() : !1;
  if (r = Jt(e), n = Jt(t), r || n) return e === t;
  if (r = fe(e), n = fe(t), r || n) return r && n ? em(e, t) : !1;
  if (r = Ne(e), n = Ne(t), r || n) {
    if (!r || !n) return !1;
    const s = Object.keys(e)
      .length,
      i = Object.keys(t)
      .length;
    if (s !== i) return !1;
    for (const a in e) {
      const o = e.hasOwnProperty(a),
        l = t.hasOwnProperty(a);
      if (o && !l || !o && l || !bn(e[a], t[a])) return !1
    }
  }
  return String(e) === String(t)
}

function fd(e, t) {
  return e.findIndex(r => bn(r, t))
}
const dd = e => !!(e && e.__v_isRef === !0),
  hd = e => je(e) ? e : e == null ? "" : fe(e) || Ne(e) && (e.toString === ad || !pe(e.toString)) ? dd(e) ? hd(e.value) : JSON.stringify(e, _d, 2) : String(e),
  _d = (e, t) => dd(t) ? _d(e, t.value) : Gn(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce((r, [n, s], i) => (r[Va(n, i) + " =>"] = s, r), {})
  } : na(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(r => Va(r))
  } : Jt(t) ? Va(t) : Ne(t) && !fe(t) && !od(t) ? String(t) : t,
  Va = (e, t = "") => {
    var r;
    return Jt(e) ? `Symbol(${(r=e.description)!=null?r:t})` : e
  };

function tm(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e)
}
/**
 * @vue/reactivity v3.5.29
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let yt;
class pd {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = yt, !t && yt && (this.index = (yt.scopes || (yt.scopes = []))
      .push(this) - 1)
  }
  get active() {
    return this._active
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, r;
      if (this.scopes)
        for (t = 0, r = this.scopes.length; t < r; t++) this.scopes[t].pause();
      for (t = 0, r = this.effects.length; t < r; t++) this.effects[t].pause()
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, r;
      if (this.scopes)
        for (t = 0, r = this.scopes.length; t < r; t++) this.scopes[t].resume();
      for (t = 0, r = this.effects.length; t < r; t++) this.effects[t].resume()
    }
  }
  run(t) {
    if (this._active) {
      const r = yt;
      try {
        return yt = this, t()
      } finally {
        yt = r
      }
    }
  }
  on() {
    ++this._on === 1 && (this.prevScope = yt, yt = this)
  }
  off() {
    this._on > 0 && --this._on === 0 && (yt = this.prevScope, this.prevScope = void 0)
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let r, n;
      for (r = 0, n = this.effects.length; r < n; r++) this.effects[r].stop();
      for (this.effects.length = 0, r = 0, n = this.cleanups.length; r < n; r++) this.cleanups[r]();
      if (this.cleanups.length = 0, this.scopes) {
        for (r = 0, n = this.scopes.length; r < n; r++) this.scopes[r].stop(!0);
        this.scopes.length = 0
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index)
      }
      this.parent = void 0
    }
  }
}

function ss(e) {
  return new pd(e)
}

function ua() {
  return yt
}

function ks(e, t = !1) {
  yt && yt.cleanups.push(e)
}
let Be;
const Ua = new WeakSet;
class md {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, yt && yt.active && yt.effects.push(this)
  }
  pause() {
    this.flags |= 64
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ua.has(this) && (Ua.delete(this), this.trigger()))
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || vd(this)
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, Tc(this), yd(this);
    const t = Be,
      r = qt;
    Be = this, qt = !0;
    try {
      return this.fn()
    } finally {
      Ed(this), Be = t, qt = r, this.flags &= -3
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Sl(t);
      this.deps = this.depsTail = void 0, Tc(this), this.onStop && this.onStop(), this.flags &= -2
    }
  }
  trigger() {
    this.flags & 64 ? Ua.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
  }
  runIfDirty() {
    bo(this) && this.run()
  }
  get dirty() {
    return bo(this)
  }
}
let gd = 0,
  bs, Ts;

function vd(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ts, Ts = e;
    return
  }
  e.next = bs, bs = e
}

function bl() {
  gd++
}

function Tl() {
  if (--gd > 0) return;
  if (Ts) {
    let t = Ts;
    for (Ts = void 0; t;) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r
    }
  }
  let e;
  for (; bs;) {
    let t = bs;
    for (bs = void 0; t;) {
      const r = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
        t.trigger()
      } catch (n) {
        e || (e = n)
      }
      t = r
    }
  }
  if (e) throw e
}

function yd(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t
}

function Ed(e) {
  let t, r = e.depsTail,
    n = r;
  for (; n;) {
    const s = n.prevDep;
    n.version === -1 ? (n === r && (r = s), Sl(n), rm(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = s
  }
  e.deps = t, e.depsTail = r
}

function bo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (wd(t.dep.computed) || t.dep.version !== t.version)) return !0;
  return !!e._dirty
}

function wd(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ns) || (e.globalVersion = Ns, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !bo(e)))) return;
  e.flags |= 2;
  const t = e.dep,
    r = Be,
    n = qt;
  Be = e, qt = !0;
  try {
    yd(e);
    const s = e.fn(e._value);
    (t.version === 0 || Rt(s, e._value)) && (e.flags |= 128, e._value = s, t.version++)
  } catch (s) {
    throw t.version++, s
  } finally {
    Be = r, qt = n, Ed(e), e.flags &= -3
  }
}

function Sl(e, t = !1) {
  const {
    dep: r,
    prevSub: n,
    nextSub: s
  } = e;
  if (n && (n.nextSub = s, e.prevSub = void 0), s && (s.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let i = r.computed.deps; i; i = i.nextDep) Sl(i, !0)
  }!t && !--r.sc && r.map && r.map.delete(r.key)
}

function rm(e) {
  const {
    prevDep: t,
    nextDep: r
  } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0)
}
let qt = !0;
const bd = [];

function Lr() {
  bd.push(qt), qt = !1
}

function Dr() {
  const e = bd.pop();
  qt = e === void 0 ? !0 : e
}

function Tc(e) {
  const {
    cleanup: t
  } = e;
  if (e.cleanup = void 0, t) {
    const r = Be;
    Be = void 0;
    try {
      t()
    } finally {
      Be = r
    }
  }
}
let Ns = 0;
class nm {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
  }
}
class fa {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0
  }
  track(t) {
    if (!Be || !qt || Be === this.computed) return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== Be) r = this.activeLink = new nm(Be, this), Be.deps ? (r.prevDep = Be.depsTail, Be.depsTail.nextDep = r, Be.depsTail = r) : Be.deps = Be.depsTail = r, Td(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = Be.depsTail, r.nextDep = void 0, Be.depsTail.nextDep = r, Be.depsTail = r, Be.deps === r && (Be.deps = n)
    }
    return r
  }
  trigger(t) {
    this.version++, Ns++, this.notify(t)
  }
  notify(t) {
    bl();
    try {
      for (let r = this.subs; r; r = r.prevSub) r.sub.notify() && r.sub.dep.notify()
    } finally {
      Tl()
    }
  }
}

function Td(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep) Td(n)
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e
  }
}
const Ii = new WeakMap,
  yn = Symbol(""),
  To = Symbol(""),
  Ms = Symbol("");

function Et(e, t, r) {
  if (qt && Be) {
    let n = Ii.get(e);
    n || Ii.set(e, n = new Map);
    let s = n.get(r);
    s || (n.set(r, s = new fa), s.map = n, s.key = r), s.track()
  }
}

function wr(e, t, r, n, s, i) {
  const a = Ii.get(e);
  if (!a) {
    Ns++;
    return
  }
  const o = l => {
    l && l.trigger()
  };
  if (bl(), t === "clear") a.forEach(o);
  else {
    const l = fe(e),
      u = l && sa(r);
    if (l && r === "length") {
      const c = Number(n);
      a.forEach((f, d) => {
        (d === "length" || d === Ms || !Jt(d) && d >= c) && o(f)
      })
    } else switch ((r !== void 0 || a.has(void 0)) && o(a.get(r)), u && o(a.get(Ms)), t) {
      case "add":
        l ? u && o(a.get("length")) : (o(a.get(yn)), Gn(e) && o(a.get(To)));
        break;
      case "delete":
        l || (o(a.get(yn)), Gn(e) && o(a.get(To)));
        break;
      case "set":
        Gn(e) && o(a.get(yn));
        break
    }
  }
  Tl()
}

function sm(e, t) {
  const r = Ii.get(e);
  return r && r.get(t)
}

function Dn(e) {
  const t = Se(e);
  return t === e ? t : (Et(t, "iterate", Ms), kt(e) ? t : t.map(Qt))
}

function da(e) {
  return Et(e = Se(e), "iterate", Ms), e
}

function Wr(e, t) {
  return fr(e) ? Xn(Zt(e) ? Qt(t) : t) : Qt(t)
}
const im = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ga(this, Symbol.iterator, e => Wr(this, e))
  },
  concat(...e) {
    return Dn(this)
      .concat(...e.map(t => fe(t) ? Dn(t) : t))
  },
  entries() {
    return Ga(this, "entries", e => (e[1] = Wr(this, e[1]), e))
  },
  every(e, t) {
    return pr(this, "every", e, t, void 0, arguments)
  },
  filter(e, t) {
    return pr(this, "filter", e, t, r => r.map(n => Wr(this, n)), arguments)
  },
  find(e, t) {
    return pr(this, "find", e, t, r => Wr(this, r), arguments)
  },
  findIndex(e, t) {
    return pr(this, "findIndex", e, t, void 0, arguments)
  },
  findLast(e, t) {
    return pr(this, "findLast", e, t, r => Wr(this, r), arguments)
  },
  findLastIndex(e, t) {
    return pr(this, "findLastIndex", e, t, void 0, arguments)
  },
  forEach(e, t) {
    return pr(this, "forEach", e, t, void 0, arguments)
  },
  includes(...e) {
    return $a(this, "includes", e)
  },
  indexOf(...e) {
    return $a(this, "indexOf", e)
  },
  join(e) {
    return Dn(this)
      .join(e)
  },
  lastIndexOf(...e) {
    return $a(this, "lastIndexOf", e)
  },
  map(e, t) {
    return pr(this, "map", e, t, void 0, arguments)
  },
  pop() {
    return ds(this, "pop")
  },
  push(...e) {
    return ds(this, "push", e)
  },
  reduce(e, ...t) {
    return Sc(this, "reduce", e, t)
  },
  reduceRight(e, ...t) {
    return Sc(this, "reduceRight", e, t)
  },
  shift() {
    return ds(this, "shift")
  },
  some(e, t) {
    return pr(this, "some", e, t, void 0, arguments)
  },
  splice(...e) {
    return ds(this, "splice", e)
  },
  toReversed() {
    return Dn(this)
      .toReversed()
  },
  toSorted(e) {
    return Dn(this)
      .toSorted(e)
  },
  toSpliced(...e) {
    return Dn(this)
      .toSpliced(...e)
  },
  unshift(...e) {
    return ds(this, "unshift", e)
  },
  values() {
    return Ga(this, "values", e => Wr(this, e))
  }
};

function Ga(e, t, r) {
  const n = da(e),
    s = n[t]();
  return n !== e && !kt(e) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.done || (i.value = r(i.value)), i
  }), s
}
const am = Array.prototype;

function pr(e, t, r, n, s, i) {
  const a = da(e),
    o = a !== e && !kt(e),
    l = a[t];
  if (l !== am[t]) {
    const f = l.apply(e, i);
    return o ? Qt(f) : f
  }
  let u = r;
  a !== e && (o ? u = function(f, d) {
    return r.call(this, Wr(e, f), d, e)
  } : r.length > 2 && (u = function(f, d) {
    return r.call(this, f, d, e)
  }));
  const c = l.call(a, u, n);
  return o && s ? s(c) : c
}

function Sc(e, t, r, n) {
  const s = da(e);
  let i = r;
  return s !== e && (kt(e) ? r.length > 3 && (i = function(a, o, l) {
    return r.call(this, a, o, l, e)
  }) : i = function(a, o, l) {
    return r.call(this, a, Wr(e, o), l, e)
  }), s[t](i, ...n)
}

function $a(e, t, r) {
  const n = Se(e);
  Et(n, "iterate", Ms);
  const s = n[t](...r);
  return (s === -1 || s === !1) && ha(r[0]) ? (r[0] = Se(r[0]), n[t](...r)) : s
}

function ds(e, t, r = []) {
  Lr(), bl();
  const n = Se(e)[t].apply(e, r);
  return Tl(), Dr(), n
}
const om = gl("__proto__,__v_isRef,__isVue"),
  Sd = new Set(Object.getOwnPropertyNames(Symbol)
    .filter(e => e !== "arguments" && e !== "caller")
    .map(e => Symbol[e])
    .filter(Jt));

function lm(e) {
  Jt(e) || (e = String(e));
  const t = Se(this);
  return Et(t, "has", e), t.hasOwnProperty(e)
}
class Pd {
  constructor(t = !1, r = !1) {
    this._isReadonly = t, this._isShallow = r
  }
  get(t, r, n) {
    if (r === "__v_skip") return t.__v_skip;
    const s = this._isReadonly,
      i = this._isShallow;
    if (r === "__v_isReactive") return !s;
    if (r === "__v_isReadonly") return s;
    if (r === "__v_isShallow") return i;
    if (r === "__v_raw") return n === (s ? i ? vm : Od : i ? Rd : Ad)
      .get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const a = fe(t);
    if (!s) {
      let l;
      if (a && (l = im[r])) return l;
      if (r === "hasOwnProperty") return lm
    }
    const o = Reflect.get(t, r, Ue(t) ? t : n);
    if ((Jt(r) ? Sd.has(r) : om(r)) || (s || Et(t, "get", r), i)) return o;
    if (Ue(o)) {
      const l = a && sa(r) ? o : o.value;
      return s && Ne(l) ? Po(l) : l
    }
    return Ne(o) ? s ? Po(o) : Mr(o) : o
  }
}
class Cd extends Pd {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, r, n, s) {
    let i = t[r];
    const a = fe(t) && sa(r);
    if (!this._isShallow) {
      const u = fr(i);
      if (!kt(n) && !fr(n) && (i = Se(i), n = Se(n)), !a && Ue(i) && !Ue(n)) return u || (i.value = n), !0
    }
    const o = a ? Number(r) < t.length : xe(t, r),
      l = Reflect.set(t, r, n, Ue(t) ? t : s);
    return t === Se(s) && (o ? Rt(n, i) && wr(t, "set", r, n) : wr(t, "add", r, n)), l
  }
  deleteProperty(t, r) {
    const n = xe(t, r);
    t[r];
    const s = Reflect.deleteProperty(t, r);
    return s && n && wr(t, "delete", r, void 0), s
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!Jt(r) || !Sd.has(r)) && Et(t, "has", r), n
  }
  ownKeys(t) {
    return Et(t, "iterate", fe(t) ? "length" : yn), Reflect.ownKeys(t)
  }
}
class cm extends Pd {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, r) {
    return !0
  }
  deleteProperty(t, r) {
    return !0
  }
}
const um = new Cd,
  fm = new cm,
  dm = new Cd(!0);
const So = e => e,
  ii = e => Reflect.getPrototypeOf(e);

function hm(e, t, r) {
  return function(...n) {
    const s = this.__v_raw,
      i = Se(s),
      a = Gn(i),
      o = e === "entries" || e === Symbol.iterator && a,
      l = e === "keys" && a,
      u = s[e](...n),
      c = r ? So : t ? Xn : Qt;
    return !t && Et(i, "iterate", l ? To : yn), et(Object.create(u), {
      next() {
        const {
          value: f,
          done: d
        } = u.next();
        return d ? {
          value: f,
          done: d
        } : {
          value: o ? [c(f[0]), c(f[1])] : c(f),
          done: d
        }
      }
    })
  }
}

function ai(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this
  }
}

function _m(e, t) {
  const r = {
    get(s) {
      const i = this.__v_raw,
        a = Se(i),
        o = Se(s);
      e || (Rt(s, o) && Et(a, "get", s), Et(a, "get", o));
      const {
        has: l
      } = ii(a), u = t ? So : e ? Xn : Qt;
      if (l.call(a, s)) return u(i.get(s));
      if (l.call(a, o)) return u(i.get(o));
      i !== a && i.get(s)
    },
    get size() {
      const s = this.__v_raw;
      return !e && Et(Se(s), "iterate", yn), s.size
    },
    has(s) {
      const i = this.__v_raw,
        a = Se(i),
        o = Se(s);
      return e || (Rt(s, o) && Et(a, "has", s), Et(a, "has", o)), s === o ? i.has(s) : i.has(s) || i.has(o)
    },
    forEach(s, i) {
      const a = this,
        o = a.__v_raw,
        l = Se(o),
        u = t ? So : e ? Xn : Qt;
      return !e && Et(l, "iterate", yn), o.forEach((c, f) => s.call(i, u(c), u(f), a))
    }
  };
  return et(r, e ? {
    add: ai("add"),
    set: ai("set"),
    delete: ai("delete"),
    clear: ai("clear")
  } : {
    add(s) {
      !t && !kt(s) && !fr(s) && (s = Se(s));
      const i = Se(this);
      return ii(i)
        .has.call(i, s) || (i.add(s), wr(i, "add", s, s)), this
    },
    set(s, i) {
      !t && !kt(i) && !fr(i) && (i = Se(i));
      const a = Se(this),
        {
          has: o,
          get: l
        } = ii(a);
      let u = o.call(a, s);
      u || (s = Se(s), u = o.call(a, s));
      const c = l.call(a, s);
      return a.set(s, i), u ? Rt(i, c) && wr(a, "set", s, i) : wr(a, "add", s, i), this
    },
    delete(s) {
      const i = Se(this),
        {
          has: a,
          get: o
        } = ii(i);
      let l = a.call(i, s);
      l || (s = Se(s), l = a.call(i, s)), o && o.call(i, s);
      const u = i.delete(s);
      return l && wr(i, "delete", s, void 0), u
    },
    clear() {
      const s = Se(this),
        i = s.size !== 0,
        a = s.clear();
      return i && wr(s, "clear", void 0, void 0), a
    }
  }), ["keys", "values", "entries", Symbol.iterator].forEach(s => {
    r[s] = hm(s, e, t)
  }), r
}

function Pl(e, t) {
  const r = _m(e, t);
  return (n, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? n : Reflect.get(xe(r, s) && s in n ? r : n, s, i)
}
const pm = {
    get: Pl(!1, !1)
  },
  mm = {
    get: Pl(!1, !0)
  },
  gm = {
    get: Pl(!0, !1)
  };
const Ad = new WeakMap,
  Rd = new WeakMap,
  Od = new WeakMap,
  vm = new WeakMap;

function ym(e) {
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
}

function Em(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ym(jp(e))
}

function Mr(e) {
  return fr(e) ? e : Cl(e, !1, um, pm, Ad)
}

function Pr(e) {
  return Cl(e, !1, dm, mm, Rd)
}

function Po(e) {
  return Cl(e, !0, fm, gm, Od)
}

function Cl(e, t, r, n, s) {
  if (!Ne(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const i = Em(e);
  if (i === 0) return e;
  const a = s.get(e);
  if (a) return a;
  const o = new Proxy(e, i === 2 ? n : r);
  return s.set(e, o), o
}

function Zt(e) {
  return fr(e) ? Zt(e.__v_raw) : !!(e && e.__v_isReactive)
}

function fr(e) {
  return !!(e && e.__v_isReadonly)
}

function kt(e) {
  return !!(e && e.__v_isShallow)
}

function ha(e) {
  return e ? !!e.__v_raw : !1
}

function Se(e) {
  const t = e && e.__v_raw;
  return t ? Se(t) : e
}

function Al(e) {
  return !xe(e, "__v_skip") && Object.isExtensible(e) && ld(e, "__v_skip", !0), e
}
const Qt = e => Ne(e) ? Mr(e) : e,
  Xn = e => Ne(e) ? Po(e) : e;

function Ue(e) {
  return e ? e.__v_isRef === !0 : !1
}

function _e(e) {
  return Id(e, !1)
}

function zt(e) {
  return Id(e, !0)
}

function Id(e, t) {
  return Ue(e) ? e : new wm(e, t)
}
class wm {
  constructor(t, r) {
    this.dep = new fa, this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : Se(t), this._value = r ? t : Qt(t), this.__v_isShallow = r
  }
  get value() {
    return this.dep.track(), this._value
  }
  set value(t) {
    const r = this._rawValue,
      n = this.__v_isShallow || kt(t) || fr(t);
    t = n ? t : Se(t), Rt(t, r) && (this._rawValue = t, this._value = n ? t : Qt(t), this.dep.trigger())
  }
}

function ze(e) {
  return Ue(e) ? e.value : e
}

function Ld(e) {
  return pe(e) ? e() : ze(e)
}
const bm = {
  get: (e, t, r) => t === "__v_raw" ? e : ze(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const s = e[t];
    return Ue(s) && !Ue(r) ? (s.value = r, !0) : Reflect.set(e, t, r, n)
  }
};

function Dd(e) {
  return Zt(e) ? e : new Proxy(e, bm)
}
class Tm {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const r = this.dep = new fa,
      {
        get: n,
        set: s
      } = t(r.track.bind(r), r.trigger.bind(r));
    this._get = n, this._set = s
  }
  get value() {
    return this._value = this._get()
  }
  set value(t) {
    this._set(t)
  }
}

function Sm(e) {
  return new Tm(e)
}

function Pm(e) {
  const t = fe(e) ? new Array(e.length) : {};
  for (const r in e) t[r] = kd(e, r);
  return t
}
class Cm {
  constructor(t, r, n) {
    this._object = t, this._key = r, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._raw = Se(t);
    let s = !0,
      i = t;
    if (!fe(t) || !sa(String(r)))
      do s = !ha(i) || kt(i); while (s && (i = i.__v_raw));
    this._shallow = s
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = ze(t)), this._value = t === void 0 ? this._defaultValue : t
  }
  set value(t) {
    if (this._shallow && Ue(this._raw[this._key])) {
      const r = this._object[this._key];
      if (Ue(r)) {
        r.value = t;
        return
      }
    }
    this._object[this._key] = t
  }
  get dep() {
    return sm(this._raw, this._key)
  }
}
class Am {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0
  }
  get value() {
    return this._value = this._getter()
  }
}

function Rl(e, t, r) {
  return Ue(e) ? e : pe(e) ? new Am(e) : Ne(e) && arguments.length > 1 ? kd(e, t, r) : _e(e)
}

function kd(e, t, r) {
  return new Cm(e, t, r)
}
class Rm {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new fa(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ns - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && Be !== this) return vd(this, !0), !0
  }
  get value() {
    const t = this.dep.track();
    return wd(this), t && (t.version = this.dep.version), this._value
  }
  set value(t) {
    this.setter && this.setter(t)
  }
}

function Om(e, t, r = !1) {
  let n, s;
  return pe(e) ? n = e : (n = e.get, s = e.set), new Rm(n, s, r)
}
const oi = {},
  Li = new WeakMap;
let _n;

function Im(e, t = !1, r = _n) {
  if (r) {
    let n = Li.get(r);
    n || Li.set(r, n = []), n.push(e)
  }
}

function Lm(e, t, r = Oe) {
  const {
    immediate: n,
    deep: s,
    once: i,
    scheduler: a,
    augmentJob: o,
    call: l
  } = r, u = p => s ? p : kt(p) || s === !1 || s === 0 ? br(p, 1) : br(p);
  let c, f, d, _, m = !1,
    E = !1;
  if (Ue(e) ? (f = () => e.value, m = kt(e)) : Zt(e) ? (f = () => u(e), m = !0) : fe(e) ? (E = !0, m = e.some(p => Zt(p) || kt(p)), f = () => e.map(p => {
      if (Ue(p)) return p.value;
      if (Zt(p)) return u(p);
      if (pe(p)) return l ? l(p, 2) : p()
    })) : pe(e) ? t ? f = l ? () => l(e, 2) : e : f = () => {
      if (d) {
        Lr();
        try {
          d()
        } finally {
          Dr()
        }
      }
      const p = _n;
      _n = c;
      try {
        return l ? l(e, 3, [_]) : e(_)
      } finally {
        _n = p
      }
    } : f = Xt, t && s) {
    const p = f,
      v = s === !0 ? 1 / 0 : s;
    f = () => br(p(), v)
  }
  const R = ua(),
    O = () => {
      c.stop(), R && R.active && yl(R.effects, c)
    };
  if (i && t) {
    const p = t;
    t = (...v) => {
      p(...v), O()
    }
  }
  let T = E ? new Array(e.length)
    .fill(oi) : oi;
  const h = p => {
    if (!(!(c.flags & 1) || !c.dirty && !p))
      if (t) {
        const v = c.run();
        if (s || m || (E ? v.some((P, g) => Rt(P, T[g])) : Rt(v, T))) {
          d && d();
          const P = _n;
          _n = c;
          try {
            const g = [v, T === oi ? void 0 : E && T[0] === oi ? [] : T, _];
            T = v, l ? l(t, 3, g) : t(...g)
          } finally {
            _n = P
          }
        }
      } else c.run()
  };
  return o && o(h), c = new md(f), c.scheduler = a ? () => a(h, !1) : h, _ = p => Im(p, !1, c), d = c.onStop = () => {
    const p = Li.get(c);
    if (p) {
      if (l) l(p, 4);
      else
        for (const v of p) v();
      Li.delete(c)
    }
  }, t ? n ? h(!0) : T = c.run() : a ? a(h.bind(null, !0), !0) : c.run(), O.pause = c.pause.bind(c), O.resume = c.resume.bind(c), O.stop = O, O
}

function br(e, t = 1 / 0, r) {
  if (t <= 0 || !Ne(e) || e.__v_skip || (r = r || new Map, (r.get(e) || 0) >= t)) return e;
  if (r.set(e, t), t--, Ue(e)) br(e.value, t, r);
  else if (fe(e))
    for (let n = 0; n < e.length; n++) br(e[n], t, r);
  else if (na(e) || Gn(e)) e.forEach(n => {
    br(n, t, r)
  });
  else if (od(e)) {
    for (const n in e) br(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, n) && br(e[n], t, r)
  }
  return e
}
/**
 * @vue/runtime-core v3.5.29
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function Ks(e, t, r, n) {
  try {
    return n ? e(...n) : e()
  } catch (s) {
    is(s, t, r)
  }
}

function er(e, t, r, n) {
  if (pe(e)) {
    const s = Ks(e, t, r, n);
    return s && El(s) && s.catch(i => {
      is(i, t, r)
    }), s
  }
  if (fe(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++) s.push(er(e[i], t, r, n));
    return s
  }
}

function is(e, t, r, n = !0) {
  const s = t ? t.vnode : null,
    {
      errorHandler: i,
      throwUnhandledErrorInProduction: a
    } = t && t.appContext.config || Oe;
  if (t) {
    let o = t.parent;
    const l = t.proxy,
      u = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; o;) {
      const c = o.ec;
      if (c) {
        for (let f = 0; f < c.length; f++)
          if (c[f](e, l, u) === !1) return
      }
      o = o.parent
    }
    if (i) {
      Lr(), Ks(i, null, 10, [e, l, u]), Dr();
      return
    }
  }
  Dm(e, r, s, n, a)
}

function Dm(e, t, r, n = !0, s = !1) {
  if (s) throw e;
  console.error(e)
}
const Pt = [];
let ar = -1;
const Wn = [];
let jr = null,
  xn = 0;
const Nd = Promise.resolve();
let Di = null;

function Tn(e) {
  const t = Di || Nd;
  return e ? t.then(this ? e.bind(this) : e) : t
}

function km(e) {
  let t = ar + 1,
    r = Pt.length;
  for (; t < r;) {
    const n = t + r >>> 1,
      s = Pt[n],
      i = xs(s);
    i < e || i === e && s.flags & 2 ? t = n + 1 : r = n
  }
  return t
}

function Ol(e) {
  if (!(e.flags & 1)) {
    const t = xs(e),
      r = Pt[Pt.length - 1];
    !r || !(e.flags & 2) && t >= xs(r) ? Pt.push(e) : Pt.splice(km(t), 0, e), e.flags |= 1, Md()
  }
}

function Md() {
  Di || (Di = Nd.then(xd))
}

function ki(e) {
  fe(e) ? Wn.push(...e) : jr && e.id === -1 ? jr.splice(xn + 1, 0, e) : e.flags & 1 || (Wn.push(e), e.flags |= 1), Md()
}

function Pc(e, t, r = ar + 1) {
  for (; r < Pt.length; r++) {
    const n = Pt[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid) continue;
      Pt.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2)
    }
  }
}

function Ni(e) {
  if (Wn.length) {
    const t = [...new Set(Wn)].sort((r, n) => xs(r) - xs(n));
    if (Wn.length = 0, jr) {
      jr.push(...t);
      return
    }
    for (jr = t, xn = 0; xn < jr.length; xn++) {
      const r = jr[xn];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2
    }
    jr = null, xn = 0
  }
}
const xs = e => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;

function xd(e) {
  try {
    for (ar = 0; ar < Pt.length; ar++) {
      const t = Pt[ar];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ks(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2))
    }
  } finally {
    for (; ar < Pt.length; ar++) {
      const t = Pt[ar];
      t && (t.flags &= -2)
    }
    ar = -1, Pt.length = 0, Ni(), Di = null, (Pt.length || Wn.length) && xd()
  }
}
let mt = null,
  Fd = null;

function Mi(e) {
  const t = mt;
  return mt = e, Fd = e && e.type.__scopeId || null, t
}

function Il(e, t = mt, r) {
  if (!t || e._n) return e;
  const n = (...s) => {
    n._d && Vi(-1);
    const i = Mi(t);
    let a;
    try {
      a = e(...s)
    } finally {
      Mi(i), n._d && Vi(1)
    }
    return a
  };
  return n._n = !0, n._c = !0, n._d = !0, n
}

function QA(e, t) {
  if (mt === null) return e;
  const r = va(mt),
    n = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, a, o, l = Oe] = t[s];
    i && (pe(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && br(a), n.push({
      dir: i,
      instance: r,
      value: a,
      oldValue: void 0,
      arg: o,
      modifiers: l
    }))
  }
  return e
}

function or(e, t, r, n) {
  const s = e.dirs,
    i = t && t.dirs;
  for (let a = 0; a < s.length; a++) {
    const o = s[a];
    i && (o.oldValue = i[a].value);
    let l = o.dir[n];
    l && (Lr(), er(l, r, 8, [e.el, o, e, t]), Dr())
  }
}

function qr(e, t) {
  if (pt) {
    let r = pt.provides;
    const n = pt.parent && pt.parent.provides;
    n === r && (r = pt.provides = Object.create(n)), r[e] = t
  }
}

function at(e, t, r = !1) {
  const n = tt();
  if (n || En) {
    let s = En ? En._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return r && pe(t) ? t.call(n && n.proxy) : t
  }
}

function Ys() {
  return !!(tt() || En)
}
const Nm = Symbol.for("v-scx"),
  Mm = () => at(Nm);

function xm(e, t) {
  return _a(e, null, t)
}

function Fm(e, t) {
  return _a(e, null, {
    flush: "sync"
  })
}

function gt(e, t, r) {
  return _a(e, t, r)
}

function _a(e, t, r = Oe) {
  const {
    immediate: n,
    deep: s,
    flush: i,
    once: a
  } = r, o = et({}, r), l = t && n || !t && i !== "post";
  let u;
  if (Zn) {
    if (i === "sync") {
      const _ = Mm();
      u = _.__watcherHandles || (_.__watcherHandles = [])
    } else if (!l) {
      const _ = () => {};
      return _.stop = Xt, _.resume = Xt, _.pause = Xt, _
    }
  }
  const c = pt;
  o.call = (_, m, E) => er(_, c, m, E);
  let f = !1;
  i === "post" ? o.scheduler = _ => {
    Je(_, c && c.suspense)
  } : i !== "sync" && (f = !0, o.scheduler = (_, m) => {
    m ? _() : Ol(_)
  }), o.augmentJob = _ => {
    t && (_.flags |= 4), f && (_.flags |= 2, c && (_.id = c.uid, _.i = c))
  };
  const d = Lm(e, t, o);
  return Zn && (u ? u.push(d) : l && d()), d
}

function Hm(e, t, r) {
  const n = this.proxy,
    s = je(e) ? e.includes(".") ? Hd(n, e) : () => n[e] : e.bind(n, n);
  let i;
  pe(t) ? i = t : (i = t.handler, r = t);
  const a = Pn(this),
    o = _a(s, i.bind(n), r);
  return a(), o
}

function Hd(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let s = 0; s < r.length && n; s++) n = n[r[s]];
    return n
  }
}
const Bd = Symbol("_vte"),
  Vd = e => e.__isTeleport,
  Ss = e => e && (e.disabled || e.disabled === ""),
  Cc = e => e && (e.defer || e.defer === ""),
  Ac = e => typeof SVGElement < "u" && e instanceof SVGElement,
  Rc = e => typeof MathMLElement == "function" && e instanceof MathMLElement,
  Co = (e, t) => {
    const r = e && e.to;
    return je(r) ? t ? t(r) : null : r
  },
  Ud = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, r, n, s, i, a, o, l, u) {
      const {
        mc: c,
        pc: f,
        pbc: d,
        o: {
          insert: _,
          querySelector: m,
          createText: E,
          createComment: R
        }
      } = u, O = Ss(t.props);
      let {
        shapeFlag: T,
        children: h,
        dynamicChildren: p
      } = t;
      if (e == null) {
        const v = t.el = E(""),
          P = t.anchor = E("");
        _(v, r, n), _(P, r, n);
        const g = (b, N) => {
            T & 16 && c(h, b, N, s, i, a, o, l)
          },
          L = () => {
            const b = t.target = Co(t.props, m),
              N = Ao(b, t, E, _);
            b && (a !== "svg" && Ac(b) ? a = "svg" : a !== "mathml" && Rc(b) && (a = "mathml"), s && s.isCE && (s.ce._teleportTargets || (s.ce._teleportTargets = new Set))
              .add(b), O || (g(b, N), Ei(t, !1)))
          };
        O && (g(r, P), Ei(t, !0)), Cc(t.props) ? (t.el.__isMounted = !1, Je(() => {
          L(), delete t.el.__isMounted
        }, i)) : L()
      } else {
        if (Cc(t.props) && e.el.__isMounted === !1) {
          Je(() => {
            Ud.process(e, t, r, n, s, i, a, o, l, u)
          }, i);
          return
        }
        t.el = e.el, t.targetStart = e.targetStart;
        const v = t.anchor = e.anchor,
          P = t.target = e.target,
          g = t.targetAnchor = e.targetAnchor,
          L = Ss(e.props),
          b = L ? r : P,
          N = L ? v : g;
        if (a === "svg" || Ac(P) ? a = "svg" : (a === "mathml" || Rc(P)) && (a = "mathml"), p ? (d(e.dynamicChildren, p, b, s, i, a, o), Bl(e, t, !0)) : l || f(e, t, b, N, s, i, a, o, !1), O) L ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : li(t, r, v, u, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const B = t.target = Co(t.props, m);
          B && li(t, B, null, u, 0)
        } else L && li(t, P, g, u, 1);
        Ei(t, O)
      }
    },
    remove(e, t, r, {
      um: n,
      o: {
        remove: s
      }
    }, i) {
      const {
        shapeFlag: a,
        children: o,
        anchor: l,
        targetStart: u,
        targetAnchor: c,
        target: f,
        props: d
      } = e;
      if (f && (s(u), s(c)), i && s(l), a & 16) {
        const _ = i || !Ss(d);
        for (let m = 0; m < o.length; m++) {
          const E = o[m];
          n(E, t, r, _, !!E.dynamicChildren)
        }
      }
    },
    move: li,
    hydrate: Bm
  };

function li(e, t, r, {
  o: {
    insert: n
  },
  m: s
}, i = 2) {
  i === 0 && n(e.targetAnchor, t, r);
  const {
    el: a,
    anchor: o,
    shapeFlag: l,
    children: u,
    props: c
  } = e, f = i === 2;
  if (f && n(a, t, r), (!f || Ss(c)) && l & 16)
    for (let d = 0; d < u.length; d++) s(u[d], t, r, 2);
  f && n(o, t, r)
}

function Bm(e, t, r, n, s, i, {
  o: {
    nextSibling: a,
    parentNode: o,
    querySelector: l,
    insert: u,
    createText: c
  }
}, f) {
  function d(R, O) {
    let T = O;
    for (; T;) {
      if (T && T.nodeType === 8) {
        if (T.data === "teleport start anchor") t.targetStart = T;
        else if (T.data === "teleport anchor") {
          t.targetAnchor = T, R._lpa = t.targetAnchor && a(t.targetAnchor);
          break
        }
      }
      T = a(T)
    }
  }

  function _(R, O) {
    O.anchor = f(a(R), O, o(R), r, n, s, i)
  }
  const m = t.target = Co(t.props, l),
    E = Ss(t.props);
  if (m) {
    const R = m._lpa || m.firstChild;
    t.shapeFlag & 16 && (E ? (_(e, t), d(m, R), t.targetAnchor || Ao(m, t, c, u, o(e) === m ? e : null)) : (t.anchor = a(e), d(m, R), t.targetAnchor || Ao(m, t, c, u), f(R && a(R), t, m, r, n, s, i))), Ei(t, E)
  } else E && t.shapeFlag & 16 && (_(e, t), t.targetStart = e, t.targetAnchor = a(e));
  return t.anchor && a(t.anchor)
}
const eR = Ud;

function Ei(e, t) {
  const r = e.ctx;
  if (r && r.ut) {
    let n, s;
    for (t ? (n = e.el, s = e.anchor) : (n = e.targetStart, s = e.targetAnchor); n && n !== s;) n.nodeType === 1 && n.setAttribute("data-v-owner", r.uid), n = n.nextSibling;
    r.ut()
  }
}

function Ao(e, t, r, n, s = null) {
  const i = t.targetStart = r(""),
    a = t.targetAnchor = r("");
  return i[Bd] = a, e && (n(i, e, s), n(a, e, s)), a
}
const lr = Symbol("_leaveCb"),
  hs = Symbol("_enterCb");

function Gd() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map
  };
  return An(() => {
    e.isMounted = !0
  }), qs(() => {
    e.isUnmounting = !0
  }), e
}
const Ht = [Function, Array],
  $d = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Ht,
    onEnter: Ht,
    onAfterEnter: Ht,
    onEnterCancelled: Ht,
    onBeforeLeave: Ht,
    onLeave: Ht,
    onAfterLeave: Ht,
    onLeaveCancelled: Ht,
    onBeforeAppear: Ht,
    onAppear: Ht,
    onAfterAppear: Ht,
    onAppearCancelled: Ht
  },
  Wd = e => {
    const t = e.subTree;
    return t.component ? Wd(t.component) : t
  },
  Vm = {
    name: "BaseTransition",
    props: $d,
    setup(e, {
      slots: t
    }) {
      const r = tt(),
        n = Gd();
      return () => {
        const s = t.default && Ll(t.default(), !0);
        if (!s || !s.length) return;
        const i = jd(s),
          a = Se(e),
          {
            mode: o
          } = a;
        if (n.isLeaving) return Wa(i);
        const l = Oc(i);
        if (!l) return Wa(i);
        let u = Fs(l, a, n, r, f => u = f);
        l.type !== st && Jr(l, u);
        let c = r.subTree && Oc(r.subTree);
        if (c && c.type !== st && !jt(c, l) && Wd(r)
          .type !== st) {
          let f = Fs(c, a, n, r);
          if (Jr(c, f), o === "out-in" && l.type !== st) return n.isLeaving = !0, f.afterLeave = () => {
            n.isLeaving = !1, r.job.flags & 8 || r.update(), delete f.afterLeave, c = void 0
          }, Wa(i);
          o === "in-out" && l.type !== st ? f.delayLeave = (d, _, m) => {
            const E = Kd(n, c);
            E[String(c.key)] = c, d[lr] = () => {
              _(), d[lr] = void 0, delete u.delayedLeave, c = void 0
            }, u.delayedLeave = () => {
              m(), delete u.delayedLeave, c = void 0
            }
          } : c = void 0
        } else c && (c = void 0);
        return i
      }
    }
  };

function jd(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const r of e)
      if (r.type !== st) {
        t = r;
        break
      }
  }
  return t
}
const Um = Vm;

function Kd(e, t) {
  const {
    leavingVNodes: r
  } = e;
  let n = r.get(t.type);
  return n || (n = Object.create(null), r.set(t.type, n)), n
}

function Fs(e, t, r, n, s) {
  const {
    appear: i,
    mode: a,
    persisted: o = !1,
    onBeforeEnter: l,
    onEnter: u,
    onAfterEnter: c,
    onEnterCancelled: f,
    onBeforeLeave: d,
    onLeave: _,
    onAfterLeave: m,
    onLeaveCancelled: E,
    onBeforeAppear: R,
    onAppear: O,
    onAfterAppear: T,
    onAppearCancelled: h
  } = t, p = String(e.key), v = Kd(r, e), P = (b, N) => {
    b && er(b, n, 9, N)
  }, g = (b, N) => {
    const B = N[1];
    P(b, N), fe(b) ? b.every(k => k.length <= 1) && B() : b.length <= 1 && B()
  }, L = {
    mode: a,
    persisted: o,
    beforeEnter(b) {
      let N = l;
      if (!r.isMounted)
        if (i) N = R || l;
        else return;
      b[lr] && b[lr](!0);
      const B = v[p];
      B && jt(e, B) && B.el[lr] && B.el[lr](), P(N, [b])
    },
    enter(b) {
      if (v[p] === e) return;
      let N = u,
        B = c,
        k = f;
      if (!r.isMounted)
        if (i) N = O || u, B = T || c, k = h || f;
        else return;
      let W = !1;
      b[hs] = ee => {
        W || (W = !0, ee ? P(k, [b]) : P(B, [b]), L.delayedLeave && L.delayedLeave(), b[hs] = void 0)
      };
      const Y = b[hs].bind(null, !1);
      N ? g(N, [b, Y]) : Y()
    },
    leave(b, N) {
      const B = String(e.key);
      if (b[hs] && b[hs](!0), r.isUnmounting) return N();
      P(d, [b]);
      let k = !1;
      b[lr] = Y => {
        k || (k = !0, N(), Y ? P(E, [b]) : P(m, [b]), b[lr] = void 0, v[B] === e && delete v[B])
      };
      const W = b[lr].bind(null, !1);
      v[B] = e, _ ? g(_, [b, W]) : W()
    },
    clone(b) {
      const N = Fs(b, t, r, n, s);
      return s && s(N), N
    }
  };
  return L
}

function Wa(e) {
  if (Xs(e)) return e = kr(e), e.children = null, e
}

function Oc(e) {
  if (!Xs(e)) return Vd(e.type) && e.children ? jd(e.children) : e;
  if (e.component) return e.component.subTree;
  const {
    shapeFlag: t,
    children: r
  } = e;
  if (r) {
    if (t & 16) return r[0];
    if (t & 32 && pe(r.default)) return r.default()
  }
}

function Jr(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Jr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}

function Ll(e, t = !1, r) {
  let n = [],
    s = 0;
  for (let i = 0; i < e.length; i++) {
    let a = e[i];
    const o = r == null ? a.key : String(r) + String(a.key != null ? a.key : i);
    a.type === nt ? (a.patchFlag & 128 && s++, n = n.concat(Ll(a.children, t, o))) : (t || a.type !== st) && n.push(o != null ? kr(a, {
      key: o
    }) : a)
  }
  if (s > 1)
    for (let i = 0; i < n.length; i++) n[i].patchFlag = -2;
  return n
}

function Mt(e, t) {
  return pe(e) ? et({
    name: e.name
  }, t, {
    setup: e
  }) : e
}

function tR() {
  const e = tt();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : ""
}

function Dl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}

function rR(e) {
  const t = tt(),
    r = zt(null);
  if (t) {
    const s = t.refs === Oe ? t.refs = {} : t.refs;
    Object.defineProperty(s, e, {
      enumerable: !0,
      get: () => r.value,
      set: i => r.value = i
    })
  }
  return r
}

function Ic(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable)
}
const xi = new WeakMap;

function jn(e, t, r, n, s = !1) {
  if (fe(e)) {
    e.forEach((E, R) => jn(E, t && (fe(t) ? t[R] : t), r, n, s));
    return
  }
  if (Ar(n) && !s) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && jn(e, t, r, n.component.subTree);
    return
  }
  const i = n.shapeFlag & 4 ? va(n.component) : n.el,
    a = s ? null : i,
    {
      i: o,
      r: l
    } = e,
    u = t && t.r,
    c = o.refs === Oe ? o.refs = {} : o.refs,
    f = o.setupState,
    d = Se(f),
    _ = f === Oe ? id : E => Ic(c, E) ? !1 : xe(d, E),
    m = (E, R) => !(R && Ic(c, R));
  if (u != null && u !== l) {
    if (Lc(t), je(u)) c[u] = null, _(u) && (f[u] = null);
    else if (Ue(u)) {
      const E = t;
      m(u, E.k) && (u.value = null), E.k && (c[E.k] = null)
    }
  }
  if (pe(l)) Ks(l, o, 12, [a, c]);
  else {
    const E = je(l),
      R = Ue(l);
    if (E || R) {
      const O = () => {
        if (e.f) {
          const T = E ? _(l) ? f[l] : c[l] : m() || !e.k ? l.value : c[e.k];
          if (s) fe(T) && yl(T, i);
          else if (fe(T)) T.includes(i) || T.push(i);
          else if (E) c[l] = [i], _(l) && (f[l] = c[l]);
          else {
            const h = [i];
            m(l, e.k) && (l.value = h), e.k && (c[e.k] = h)
          }
        } else E ? (c[l] = a, _(l) && (f[l] = a)) : R && (m(l, e.k) && (l.value = a), e.k && (c[e.k] = a))
      };
      if (a) {
        const T = () => {
          O(), xi.delete(e)
        };
        T.id = -1, xi.set(e, T), Je(T, r)
      } else Lc(e), O()
    }
  }
}

function Lc(e) {
  const t = xi.get(e);
  t && (t.flags |= 8, xi.delete(e))
}
let Dc = !1;
const kn = () => {
    Dc || (console.error("Hydration completed but contains mismatches."), Dc = !0)
  },
  Gm = e => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject",
  $m = e => e.namespaceURI.includes("MathML"),
  ci = e => {
    if (e.nodeType === 1) {
      if (Gm(e)) return "svg";
      if ($m(e)) return "mathml"
    }
  },
  Bn = e => e.nodeType === 8;

function Wm(e) {
  const {
    mt: t,
    p: r,
    o: {
      patchProp: n,
      createText: s,
      nextSibling: i,
      parentNode: a,
      remove: o,
      insert: l,
      createComment: u
    }
  } = e, c = (h, p) => {
    if (!p.hasChildNodes()) {
      r(null, h, p), Ni(), p._vnode = h;
      return
    }
    f(p.firstChild, h, null, null, null), Ni(), p._vnode = h
  }, f = (h, p, v, P, g, L = !1) => {
    L = L || !!p.dynamicChildren;
    const b = Bn(h) && h.data === "[",
      N = () => E(h, p, v, P, g, b),
      {
        type: B,
        ref: k,
        shapeFlag: W,
        patchFlag: Y
      } = p;
    let ee = h.nodeType;
    p.el = h, Y === -2 && (L = !1, p.dynamicChildren = null);
    let X = null;
    switch (B) {
      case Zr:
        ee !== 3 ? p.children === "" ? (l(p.el = s(""), a(h), h), X = h) : X = N() : (h.data !== p.children && (kn(), h.data = p.children), X = i(h));
        break;
      case st:
        T(h) ? (X = i(h), O(p.el = h.content.firstChild, h, v)) : ee !== 8 || b ? X = N() : X = i(h);
        break;
      case Yn:
        if (b && (h = i(h), ee = h.nodeType), ee === 1 || ee === 3) {
          X = h;
          const re = !p.children.length;
          for (let se = 0; se < p.staticCount; se++) re && (p.children += X.nodeType === 1 ? X.outerHTML : X.data), se === p.staticCount - 1 && (p.anchor = X), X = i(X);
          return b ? i(X) : X
        } else N();
        break;
      case nt:
        b ? X = m(h, p, v, P, g, L) : X = N();
        break;
      default:
        if (W & 1)(ee !== 1 || p.type.toLowerCase() !== h.tagName.toLowerCase()) && !T(h) ? X = N() : X = d(h, p, v, P, g, L);
        else if (W & 6) {
          p.slotScopeIds = g;
          const re = a(h);
          if (b ? X = R(h) : Bn(h) && h.data === "teleport start" ? X = R(h, h.data, "teleport end") : X = i(h), t(p, re, null, v, P, ci(re), L), Ar(p) && !p.type.__asyncResolved) {
            let se;
            b ? (se = Xe(nt), se.anchor = X ? X.previousSibling : re.lastChild) : se = h.nodeType === 3 ? Ph("") : Xe("div"), se.el = h, p.component.subTree = se
          }
        } else W & 64 ? ee !== 8 ? X = N() : X = p.type.hydrate(h, p, v, P, g, L, e, _) : W & 128 && (X = p.type.hydrate(h, p, v, P, ci(a(h)), g, L, e, f))
    }
    return k != null && jn(k, null, P, p), X
  }, d = (h, p, v, P, g, L) => {
    L = L || !!p.dynamicChildren;
    const {
      type: b,
      props: N,
      patchFlag: B,
      shapeFlag: k,
      dirs: W,
      transition: Y
    } = p, ee = b === "input" || b === "option";
    if (ee || B !== -1) {
      W && or(p, null, v, "created");
      let X = !1;
      if (T(h)) {
        X = mh(null, Y) && v && v.vnode.props && v.vnode.props.appear;
        const se = h.content.firstChild;
        if (X) {
          const de = se.getAttribute("class");
          de && (se.$cls = de), Y.beforeEnter(se)
        }
        O(se, h, v), p.el = h = se
      }
      if (k & 16 && !(N && (N.innerHTML || N.textContent))) {
        let se = _(h.firstChild, p, h, v, P, g, L);
        for (; se;) {
          ui(h, 1) || kn();
          const de = se;
          se = se.nextSibling, o(de)
        }
      } else if (k & 8) {
        let se = p.children;
        se[0] === `
` && (h.tagName === "PRE" || h.tagName === "TEXTAREA") && (se = se.slice(1));
        const {
          textContent: de
        } = h;
        de !== se && de !== se.replace(/\r\n|\r/g, `
`) && (ui(h, 0) || kn(), h.textContent = p.children)
      }
      if (N) {
        if (ee || !L || B & 48) {
          const se = h.tagName.includes("-");
          for (const de in N)(ee && (de.endsWith("value") || de === "indeterminate") || js(de) && !vn(de) || de[0] === "." || se && !vn(de)) && n(h, de, null, N[de], void 0, v)
        } else if (N.onClick) n(h, "onClick", null, N.onClick, void 0, v);
        else if (B & 4 && Zt(N.style))
          for (const se in N.style) N.style[se]
      }
      let re;
      (re = N && N.onVnodeBeforeMount) && At(re, v, p), W && or(p, null, v, "beforeMount"), ((re = N && N.onVnodeMounted) || W || X) && Eh(() => {
        re && At(re, v, p), X && Y.enter(h), W && or(p, null, v, "mounted")
      }, P)
    }
    return h.nextSibling
  }, _ = (h, p, v, P, g, L, b) => {
    b = b || !!p.dynamicChildren;
    const N = p.children,
      B = N.length;
    for (let k = 0; k < B; k++) {
      const W = b ? N[k] : N[k] = Dt(N[k]),
        Y = W.type === Zr;
      h ? (Y && !b && k + 1 < B && Dt(N[k + 1])
        .type === Zr && (l(s(h.data.slice(W.children.length)), v, i(h)), h.data = W.children), h = f(h, W, P, g, L, b)) : Y && !W.children ? l(W.el = s(""), v) : (ui(v, 1) || kn(), r(null, W, v, null, P, g, ci(v), L))
    }
    return h
  }, m = (h, p, v, P, g, L) => {
    const {
      slotScopeIds: b
    } = p;
    b && (g = g ? g.concat(b) : b);
    const N = a(h),
      B = _(i(h), p, N, v, P, g, L);
    return B && Bn(B) && B.data === "]" ? i(p.anchor = B) : (kn(), l(p.anchor = u("]"), N, B), B)
  }, E = (h, p, v, P, g, L) => {
    if (ui(h.parentElement, 1) || kn(), p.el = null, L) {
      const B = R(h);
      for (;;) {
        const k = i(h);
        if (k && k !== B) o(k);
        else break
      }
    }
    const b = i(h),
      N = a(h);
    return o(h), r(null, p, N, b, v, P, ci(N), g), v && (v.vnode.el = p.el, ga(v, p.el)), b
  }, R = (h, p = "[", v = "]") => {
    let P = 0;
    for (; h;)
      if (h = i(h), h && Bn(h) && (h.data === p && P++, h.data === v)) {
        if (P === 0) return i(h);
        P--
      } return h
  }, O = (h, p, v) => {
    const P = p.parentNode;
    P && P.replaceChild(h, p);
    let g = v;
    for (; g;) g.vnode.el === p && (g.vnode.el = g.subTree.el = h), g = g.parent
  }, T = h => h.nodeType === 1 && h.tagName === "TEMPLATE";
  return [c, f]
}
const kc = "data-allow-mismatch",
  jm = {
    0: "text",
    1: "children",
    2: "class",
    3: "style",
    4: "attribute"
  };

function ui(e, t) {
  if (t === 0 || t === 1)
    for (; e && !e.hasAttribute(kc);) e = e.parentElement;
  const r = e && e.getAttribute(kc);
  if (r == null) return !1;
  if (r === "") return !0;
  {
    const n = r.split(",");
    return t === 0 && n.includes("children") ? !0 : n.includes(jm[t])
  }
}
oa()
  .requestIdleCallback;
oa()
  .cancelIdleCallback;

function Km(e, t) {
  if (Bn(e) && e.data === "[") {
    let r = 1,
      n = e.nextSibling;
    for (; n;) {
      if (n.nodeType === 1) {
        if (t(n) === !1) break
      } else if (Bn(n))
        if (n.data === "]") {
          if (--r === 0) break
        } else n.data === "[" && r++;
      n = n.nextSibling
    }
  } else t(e)
}
const Ar = e => !!e.type.__asyncLoader;

function Nc(e) {
  pe(e) && (e = {
    loader: e
  });
  const {
    loader: t,
    loadingComponent: r,
    errorComponent: n,
    delay: s = 200,
    hydrate: i,
    timeout: a,
    suspensible: o = !0,
    onError: l
  } = e;
  let u = null,
    c, f = 0;
  const d = () => (f++, u = null, _()),
    _ = () => {
      let m;
      return u || (m = u = t()
        .catch(E => {
          if (E = E instanceof Error ? E : new Error(String(E)), l) return new Promise((R, O) => {
            l(E, () => R(d()), () => O(E), f + 1)
          });
          throw E
        })
        .then(E => m !== u && u ? u : (E && (E.__esModule || E[Symbol.toStringTag] === "Module") && (E = E.default), c = E, E)))
    };
  return Mt({
    name: "AsyncComponentWrapper",
    __asyncLoader: _,
    __asyncHydrate(m, E, R) {
      let O = !1;
      (E.bu || (E.bu = []))
      .push(() => O = !0);
      const T = () => {
          O || R()
        },
        h = i ? () => {
          const p = i(T, v => Km(m, v));
          p && (E.bum || (E.bum = []))
            .push(p)
        } : T;
      c ? h() : _()
        .then(() => !E.isUnmounted && h())
    },
    get __asyncResolved() {
      return c
    },
    setup() {
      const m = pt;
      if (Dl(m), c) return () => fi(c, m);
      const E = h => {
        u = null, is(h, m, 13, !n)
      };
      if (o && m.suspense || Zn) return _()
        .then(h => () => fi(h, m))
        .catch(h => (E(h), () => n ? Xe(n, {
          error: h
        }) : null));
      const R = _e(!1),
        O = _e(),
        T = _e(!!s);
      return s && setTimeout(() => {
          T.value = !1
        }, s), a != null && setTimeout(() => {
          if (!R.value && !O.value) {
            const h = new Error(`Async component timed out after ${a}ms.`);
            E(h), O.value = h
          }
        }, a), _()
        .then(() => {
          R.value = !0, m.parent && Xs(m.parent.vnode) && m.parent.update()
        })
        .catch(h => {
          E(h), O.value = h
        }), () => {
          if (R.value && c) return fi(c, m);
          if (O.value && n) return Xe(n, {
            error: O.value
          });
          if (r && !T.value) return fi(r, m)
        }
    }
  })
}

function fi(e, t) {
  const {
    ref: r,
    props: n,
    children: s,
    ce: i
  } = t.vnode, a = Xe(e, n, s);
  return a.ref = r, a.ce = i, delete t.vnode.ce, a
}
const Xs = e => e.type.__isKeepAlive,
  Ym = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number]
    },
    setup(e, {
      slots: t
    }) {
      const r = tt(),
        n = r.ctx;
      if (!n.renderer) return () => {
        const T = t.default && t.default();
        return T && T.length === 1 ? T[0] : T
      };
      const s = new Map,
        i = new Set;
      let a = null;
      const o = r.suspense,
        {
          renderer: {
            p: l,
            m: u,
            um: c,
            o: {
              createElement: f
            }
          }
        } = n,
        d = f("div");
      n.activate = (T, h, p, v, P) => {
        const g = T.component;
        u(T, h, p, 0, o), l(g.vnode, T, h, p, g, o, v, T.slotScopeIds, P), Je(() => {
          g.isDeactivated = !1, g.a && $n(g.a);
          const L = T.props && T.props.onVnodeMounted;
          L && At(L, g.parent, T)
        }, o)
      }, n.deactivate = T => {
        const h = T.component;
        Hi(h.m), Hi(h.a), u(T, d, null, 1, o), Je(() => {
          h.da && $n(h.da);
          const p = T.props && T.props.onVnodeUnmounted;
          p && At(p, h.parent, T), h.isDeactivated = !0
        }, o)
      };

      function _(T) {
        ja(T), c(T, r, o, !0)
      }

      function m(T) {
        s.forEach((h, p) => {
          const v = Mo(Ar(h) ? h.type.__asyncResolved || {} : h.type);
          v && !T(v) && E(p)
        })
      }

      function E(T) {
        const h = s.get(T);
        h && (!a || !jt(h, a)) ? _(h) : a && ja(a), s.delete(T), i.delete(T)
      }
      gt(() => [e.include, e.exclude], ([T, h]) => {
        T && m(p => Es(T, p)), h && m(p => !Es(h, p))
      }, {
        flush: "post",
        deep: !0
      });
      let R = null;
      const O = () => {
        R != null && (Bi(r.subTree.type) ? Je(() => {
          s.set(R, di(r.subTree))
        }, r.subTree.suspense) : s.set(R, di(r.subTree)))
      };
      return An(O), Nl(O), qs(() => {
        s.forEach(T => {
          const {
            subTree: h,
            suspense: p
          } = r, v = di(h);
          if (T.type === v.type && T.key === v.key) {
            ja(v);
            const P = v.component.da;
            P && Je(P, p);
            return
          }
          _(T)
        })
      }), () => {
        if (R = null, !t.default) return a = null;
        const T = t.default(),
          h = T[0];
        if (T.length > 1) return a = null, T;
        if (!Sn(h) || !(h.shapeFlag & 4) && !(h.shapeFlag & 128)) return a = null, h;
        let p = di(h);
        if (p.type === st) return a = null, p;
        const v = p.type,
          P = Mo(Ar(p) ? p.type.__asyncResolved || {} : v),
          {
            include: g,
            exclude: L,
            max: b
          } = e;
        if (g && (!P || !Es(g, P)) || L && P && Es(L, P)) return p.shapeFlag &= -257, a = p, h;
        const N = p.key == null ? v : p.key,
          B = s.get(N);
        return p.el && (p = kr(p), h.shapeFlag & 128 && (h.ssContent = p)), R = N, B ? (p.el = B.el, p.component = B.component, p.transition && Jr(p, p.transition), p.shapeFlag |= 512, i.delete(N), i.add(N)) : (i.add(N), b && i.size > parseInt(b, 10) && E(i.values()
          .next()
          .value)), p.shapeFlag |= 256, a = p, Bi(h.type) ? h : p
      }
    }
  },
  Xm = Ym;

function Es(e, t) {
  return fe(e) ? e.some(r => Es(r, t)) : je(e) ? e.split(",")
    .includes(t) : Wp(e) ? (e.lastIndex = 0, e.test(t)) : !1
}

function Yd(e, t) {
  qd(e, "a", t)
}

function Xd(e, t) {
  qd(e, "da", t)
}

function qd(e, t, r = pt) {
  const n = e.__wdc || (e.__wdc = () => {
    let s = r;
    for (; s;) {
      if (s.isDeactivated) return;
      s = s.parent
    }
    return e()
  });
  if (pa(t, n, r), r) {
    let s = r.parent;
    for (; s && s.parent;) Xs(s.parent.vnode) && qm(n, t, r, s), s = s.parent
  }
}

function qm(e, t, r, n) {
  const s = pa(t, e, n, !0);
  as(() => {
    yl(n[t], s)
  }, r)
}

function ja(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513
}

function di(e) {
  return e.shapeFlag & 128 ? e.ssContent : e
}

function pa(e, t, r = pt, n = !1) {
  if (r) {
    const s = r[e] || (r[e] = []),
      i = t.__weh || (t.__weh = (...a) => {
        Lr();
        const o = Pn(r),
          l = er(t, r, e, a);
        return o(), Dr(), l
      });
    return n ? s.unshift(i) : s.push(i), i
  }
}
const xr = e => (t, r = pt) => {
    (!Zn || e === "sp") && pa(e, (...n) => t(...n), r)
  },
  kl = xr("bm"),
  An = xr("m"),
  Zd = xr("bu"),
  Nl = xr("u"),
  qs = xr("bum"),
  as = xr("um"),
  Zm = xr("sp"),
  zm = xr("rtg"),
  Jm = xr("rtc");

function zd(e, t = pt) {
  pa("ec", e, t)
}
const Ml = "components",
  Qm = "directives";

function nR(e, t) {
  return xl(Ml, e, !0, t) || e
}
const Jd = Symbol.for("v-ndc");

function eg(e) {
  return je(e) ? xl(Ml, e, !1) || e : e || Jd
}

function sR(e) {
  return xl(Qm, e)
}

function xl(e, t, r = !0, n = !1) {
  const s = mt || pt;
  if (s) {
    const i = s.type;
    if (e === Ml) {
      const o = Mo(i, !1);
      if (o && (o === t || o === Nt(t) || o === aa(Nt(t)))) return i
    }
    const a = Mc(s[e] || i[e], t) || Mc(s.appContext[e], t);
    return !a && n ? i : a
  }
}

function Mc(e, t) {
  return e && (e[t] || e[Nt(t)] || e[aa(Nt(t))])
}

function iR(e, t, r, n) {
  let s;
  const i = r,
    a = fe(e);
  if (a || je(e)) {
    const o = a && Zt(e);
    let l = !1,
      u = !1;
    o && (l = !kt(e), u = fr(e), e = da(e)), s = new Array(e.length);
    for (let c = 0, f = e.length; c < f; c++) s[c] = t(l ? u ? Xn(Qt(e[c])) : Qt(e[c]) : e[c], c, void 0, i)
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let o = 0; o < e; o++) s[o] = t(o + 1, o, void 0, i)
  } else if (Ne(e))
    if (e[Symbol.iterator]) s = Array.from(e, (o, l) => t(o, l, void 0, i));
    else {
      const o = Object.keys(e);
      s = new Array(o.length);
      for (let l = 0, u = o.length; l < u; l++) {
        const c = o[l];
        s[l] = t(e[c], c, l, i)
      }
    }
  else s = [];
  return s
}

function aR(e, t) {
  for (let r = 0; r < t.length; r++) {
    const n = t[r];
    if (fe(n))
      for (let s = 0; s < n.length; s++) e[n[s].name] = n[s].fn;
    else n && (e[n.name] = n.key ? (...s) => {
      const i = n.fn(...s);
      return i && (i.key = n.key), i
    } : n.fn)
  }
  return e
}

function oR(e, t, r = {}, n, s) {
  if (mt.ce || mt.parent && Ar(mt.parent) && mt.parent.ce) {
    const u = Object.keys(r)
      .length > 0;
    return t !== "default" && (r.name = t), Ot(), Tr(nt, null, [Xe("slot", r, n && n())], u ? -2 : 64)
  }
  let i = e[t];
  i && i._c && (i._d = !1), Ot();
  const a = i && Qd(i(r)),
    o = r.key || a && a.key,
    l = Tr(nt, {
      key: (o && !Jt(o) ? o : `_${t}`) + (!a && n ? "_fb" : "")
    }, a || (n ? n() : []), a && e._ === 1 ? 64 : -2);
  return !s && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), i && i._c && (i._d = !0), l
}

function Qd(e) {
  return e.some(t => Sn(t) ? !(t.type === st || t.type === nt && !Qd(t.children)) : !0) ? e : null
}
const Ro = e => e ? Ah(e) ? va(e) : Ro(e.parent) : null,
  Ps = et(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => Ro(e.parent),
    $root: e => Ro(e.root),
    $host: e => e.ce,
    $emit: e => e.emit,
    $options: e => rh(e),
    $forceUpdate: e => e.f || (e.f = () => {
      Ol(e.update)
    }),
    $nextTick: e => e.n || (e.n = Tn.bind(e.proxy)),
    $watch: e => Hm.bind(e)
  }),
  Ka = (e, t) => e !== Oe && !e.__isScriptSetup && xe(e, t),
  tg = {
    get({
      _: e
    }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: r,
        setupState: n,
        data: s,
        props: i,
        accessCache: a,
        type: o,
        appContext: l
      } = e;
      if (t[0] !== "$") {
        const d = a[t];
        if (d !== void 0) switch (d) {
          case 1:
            return n[t];
          case 2:
            return s[t];
          case 4:
            return r[t];
          case 3:
            return i[t]
        } else {
          if (Ka(n, t)) return a[t] = 1, n[t];
          if (s !== Oe && xe(s, t)) return a[t] = 2, s[t];
          if (xe(i, t)) return a[t] = 3, i[t];
          if (r !== Oe && xe(r, t)) return a[t] = 4, r[t];
          Oo && (a[t] = 0)
        }
      }
      const u = Ps[t];
      let c, f;
      if (u) return t === "$attrs" && Et(e.attrs, "get", ""), u(e);
      if ((c = o.__cssModules) && (c = c[t])) return c;
      if (r !== Oe && xe(r, t)) return a[t] = 4, r[t];
      if (f = l.config.globalProperties, xe(f, t)) return f[t]
    },
    set({
      _: e
    }, t, r) {
      const {
        data: n,
        setupState: s,
        ctx: i
      } = e;
      return Ka(s, t) ? (s[t] = r, !0) : n !== Oe && xe(n, t) ? (n[t] = r, !0) : xe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = r, !0)
    },
    has({
      _: {
        data: e,
        setupState: t,
        accessCache: r,
        ctx: n,
        appContext: s,
        props: i,
        type: a
      }
    }, o) {
      let l;
      return !!(r[o] || e !== Oe && o[0] !== "$" && xe(e, o) || Ka(t, o) || xe(i, o) || xe(n, o) || xe(Ps, o) || xe(s.config.globalProperties, o) || (l = a.__cssModules) && l[o])
    },
    defineProperty(e, t, r) {
      return r.get != null ? e._.accessCache[t] = 0 : xe(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r)
    }
  };

function lR() {
  return eh()
    .slots
}

function cR() {
  return eh()
    .attrs
}

function eh(e) {
  const t = tt();
  return t.setupContext || (t.setupContext = Oh(t))
}

function Hs(e) {
  return fe(e) ? e.reduce((t, r) => (t[r] = null, t), {}) : e
}

function uR(e, t) {
  const r = Hs(e);
  for (const n in t) {
    if (n.startsWith("__skip")) continue;
    let s = r[n];
    s ? fe(s) || pe(s) ? s = r[n] = {
      type: s,
      default: t[n]
    } : s.default = t[n] : s === null && (s = r[n] = {
      default: t[n]
    }), s && t[`__skip_${n}`] && (s.skipFactory = !0)
  }
  return r
}

function fR(e, t) {
  return !e || !t ? e || t : fe(e) && fe(t) ? e.concat(t) : et({}, Hs(e), Hs(t))
}

function dR(e) {
  const t = tt();
  let r = e();
  Gi();
  const n = () => {
    tt() !== t && t.scope.off(), Gi()
  };
  return El(r) && (r = r.catch(s => {
    throw Pn(t), Promise.resolve()
      .then(() => Promise.resolve()
        .then(n)), s
  })), [r, () => {
    Pn(t), Promise.resolve()
      .then(n)
  }]
}
let Oo = !0;

function rg(e) {
  const t = rh(e),
    r = e.proxy,
    n = e.ctx;
  Oo = !1, t.beforeCreate && xc(t.beforeCreate, e, "bc");
  const {
    data: s,
    computed: i,
    methods: a,
    watch: o,
    provide: l,
    inject: u,
    created: c,
    beforeMount: f,
    mounted: d,
    beforeUpdate: _,
    updated: m,
    activated: E,
    deactivated: R,
    beforeDestroy: O,
    beforeUnmount: T,
    destroyed: h,
    unmounted: p,
    render: v,
    renderTracked: P,
    renderTriggered: g,
    errorCaptured: L,
    serverPrefetch: b,
    expose: N,
    inheritAttrs: B,
    components: k,
    directives: W,
    filters: Y
  } = t;
  if (u && ng(u, n, null), a)
    for (const re in a) {
      const se = a[re];
      pe(se) && (n[re] = se.bind(r))
    }
  if (s) {
    const re = s.call(r, r);
    Ne(re) && (e.data = Mr(re))
  }
  if (Oo = !0, i)
    for (const re in i) {
      const se = i[re],
        de = pe(se) ? se.bind(r, r) : pe(se.get) ? se.get.bind(r, r) : Xt,
        Pe = !pe(se) && pe(se.set) ? se.set.bind(r) : Xt,
        we = $({
          get: de,
          set: Pe
        });
      Object.defineProperty(n, re, {
        enumerable: !0,
        configurable: !0,
        get: () => we.value,
        set: ye => we.value = ye
      })
    }
  if (o)
    for (const re in o) th(o[re], n, r, re);
  if (l) {
    const re = pe(l) ? l.call(r) : l;
    Reflect.ownKeys(re)
      .forEach(se => {
        qr(se, re[se])
      })
  }
  c && xc(c, e, "c");

  function X(re, se) {
    fe(se) ? se.forEach(de => re(de.bind(r))) : se && re(se.bind(r))
  }
  if (X(kl, f), X(An, d), X(Zd, _), X(Nl, m), X(Yd, E), X(Xd, R), X(zd, L), X(Jm, P), X(zm, g), X(qs, T), X(as, p), X(Zm, b), fe(N))
    if (N.length) {
      const re = e.exposed || (e.exposed = {});
      N.forEach(se => {
        Object.defineProperty(re, se, {
          get: () => r[se],
          set: de => r[se] = de,
          enumerable: !0
        })
      })
    } else e.exposed || (e.exposed = {});
  v && e.render === Xt && (e.render = v), B != null && (e.inheritAttrs = B), k && (e.components = k), W && (e.directives = W), b && Dl(e)
}

function ng(e, t, r = Xt) {
  fe(e) && (e = Io(e));
  for (const n in e) {
    const s = e[n];
    let i;
    Ne(s) ? "default" in s ? i = at(s.from || n, s.default, !0) : i = at(s.from || n) : i = at(s), Ue(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: a => i.value = a
    }) : t[n] = i
  }
}

function xc(e, t, r) {
  er(fe(e) ? e.map(n => n.bind(t.proxy)) : e.bind(t.proxy), t, r)
}

function th(e, t, r, n) {
  let s = n.includes(".") ? Hd(r, n) : () => r[n];
  if (je(e)) {
    const i = t[e];
    pe(i) && gt(s, i)
  } else if (pe(e)) gt(s, e.bind(r));
  else if (Ne(e))
    if (fe(e)) e.forEach(i => th(i, t, r, n));
    else {
      const i = pe(e.handler) ? e.handler.bind(r) : t[e.handler];
      pe(i) && gt(s, i, e)
    }
}

function rh(e) {
  const t = e.type,
    {
      mixins: r,
      extends: n
    } = t,
    {
      mixins: s,
      optionsCache: i,
      config: {
        optionMergeStrategies: a
      }
    } = e.appContext,
    o = i.get(t);
  let l;
  return o ? l = o : !s.length && !r && !n ? l = t : (l = {}, s.length && s.forEach(u => Fi(l, u, a, !0)), Fi(l, t, a)), Ne(t) && i.set(t, l), l
}

function Fi(e, t, r, n = !1) {
  const {
    mixins: s,
    extends: i
  } = t;
  i && Fi(e, i, r, !0), s && s.forEach(a => Fi(e, a, r, !0));
  for (const a in t)
    if (!(n && a === "expose")) {
      const o = sg[a] || r && r[a];
      e[a] = o ? o(e[a], t[a]) : t[a]
    } return e
}
const sg = {
  data: Fc,
  props: Hc,
  emits: Hc,
  methods: ws,
  computed: ws,
  beforeCreate: bt,
  created: bt,
  beforeMount: bt,
  mounted: bt,
  beforeUpdate: bt,
  updated: bt,
  beforeDestroy: bt,
  beforeUnmount: bt,
  destroyed: bt,
  unmounted: bt,
  activated: bt,
  deactivated: bt,
  errorCaptured: bt,
  serverPrefetch: bt,
  components: ws,
  directives: ws,
  watch: ag,
  provide: Fc,
  inject: ig
};

function Fc(e, t) {
  return t ? e ? function() {
    return et(pe(e) ? e.call(this, this) : e, pe(t) ? t.call(this, this) : t)
  } : t : e
}

function ig(e, t) {
  return ws(Io(e), Io(t))
}

function Io(e) {
  if (fe(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) t[e[r]] = e[r];
    return t
  }
  return e
}

function bt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}

function ws(e, t) {
  return e ? et(Object.create(null), e, t) : t
}

function Hc(e, t) {
  return e ? fe(e) && fe(t) ? [...new Set([...e, ...t])] : et(Object.create(null), Hs(e), Hs(t ?? {})) : t
}

function ag(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = et(Object.create(null), e);
  for (const n in t) r[n] = bt(e[n], t[n]);
  return r
}

function nh() {
  return {
    app: null,
    config: {
      isNativeTag: id,
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
let og = 0;

function lg(e, t) {
  return function(n, s = null) {
    pe(n) || (n = et({}, n)), s != null && !Ne(s) && (s = null);
    const i = nh(),
      a = new WeakSet,
      o = [];
    let l = !1;
    const u = i.app = {
      _uid: og++,
      _component: n,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: Bg,
      get config() {
        return i.config
      },
      set config(c) {},
      use(c, ...f) {
        return a.has(c) || (c && pe(c.install) ? (a.add(c), c.install(u, ...f)) : pe(c) && (a.add(c), c(u, ...f))), u
      },
      mixin(c) {
        return i.mixins.includes(c) || i.mixins.push(c), u
      },
      component(c, f) {
        return f ? (i.components[c] = f, u) : i.components[c]
      },
      directive(c, f) {
        return f ? (i.directives[c] = f, u) : i.directives[c]
      },
      mount(c, f, d) {
        if (!l) {
          const _ = u._ceVNode || Xe(n, s);
          return _.appContext = i, d === !0 ? d = "svg" : d === !1 && (d = void 0), f && t ? t(_, c) : e(_, c, d), l = !0, u._container = c, c.__vue_app__ = u, va(_.component)
        }
      },
      onUnmount(c) {
        o.push(c)
      },
      unmount() {
        l && (er(o, u._instance, 16), e(null, u._container), delete u._container.__vue_app__)
      },
      provide(c, f) {
        return i.provides[c] = f, u
      },
      runWithContext(c) {
        const f = En;
        En = u;
        try {
          return c()
        } finally {
          En = f
        }
      }
    };
    return u
  }
}
let En = null;

function hR(e, t, r = Oe) {
  const n = tt(),
    s = Nt(t),
    i = Nr(t),
    a = sh(e, s),
    o = Sm((l, u) => {
      let c, f = Oe,
        d;
      return Fm(() => {
        const _ = e[s];
        Rt(c, _) && (c = _, u())
      }), {
        get() {
          return l(), r.get ? r.get(c) : c
        },
        set(_) {
          const m = r.set ? r.set(_) : _;
          if (!Rt(m, c) && !(f !== Oe && Rt(_, f))) return;
          const E = n.vnode.props;
          E && (t in E || s in E || i in E) && (`onUpdate:${t}` in E || `onUpdate:${s}` in E || `onUpdate:${i}` in E) || (c = _, u()), n.emit(`update:${t}`, m), Rt(_, m) && Rt(_, f) && !Rt(m, d) && u(), f = _, d = m
        }
      }
    });
  return o[Symbol.iterator] = () => {
    let l = 0;
    return {
      next() {
        return l < 2 ? {
          value: l++ ? a || Oe : o,
          done: !1
        } : {
          done: !0
        }
      }
    }
  }, o
}
const sh = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Nt(t)}Modifiers`] || e[`${Nr(t)}Modifiers`];

function cg(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Oe;
  let s = r;
  const i = t.startsWith("update:"),
    a = i && sh(n, t.slice(7));
  a && (a.trim && (s = r.map(c => je(c) ? c.trim() : c)), a.number && (s = r.map(wl)));
  let o, l = n[o = Ba(t)] || n[o = Ba(Nt(t))];
  !l && i && (l = n[o = Ba(Nr(t))]), l && er(l, e, 6, s);
  const u = n[o + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[o]) return;
    e.emitted[o] = !0, er(u, e, 6, s)
  }
}
const ug = new WeakMap;

function ih(e, t, r = !1) {
  const n = r ? ug : t.emitsCache,
    s = n.get(e);
  if (s !== void 0) return s;
  const i = e.emits;
  let a = {},
    o = !1;
  if (!pe(e)) {
    const l = u => {
      const c = ih(u, t, !0);
      c && (o = !0, et(a, c))
    };
    !r && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l)
  }
  return !i && !o ? (Ne(e) && n.set(e, null), null) : (fe(i) ? i.forEach(l => a[l] = null) : et(a, i), Ne(e) && n.set(e, a), a)
}

function ma(e, t) {
  return !e || !js(t) ? !1 : (t = t.slice(2)
    .replace(/Once$/, ""), xe(e, t[0].toLowerCase() + t.slice(1)) || xe(e, Nr(t)) || xe(e, t))
}

function Ya(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: s,
    propsOptions: [i],
    slots: a,
    attrs: o,
    emit: l,
    render: u,
    renderCache: c,
    props: f,
    data: d,
    setupState: _,
    ctx: m,
    inheritAttrs: E
  } = e, R = Mi(e);
  let O, T;
  try {
    if (r.shapeFlag & 4) {
      const p = s || n,
        v = p;
      O = Dt(u.call(v, p, c, f, _, d, m)), T = o
    } else {
      const p = t;
      O = Dt(p.length > 1 ? p(f, {
        attrs: o,
        slots: a,
        emit: l
      }) : p(f, null)), T = t.props ? o : dg(o)
    }
  } catch (p) {
    Cs.length = 0, is(p, e, 1), O = Xe(st)
  }
  let h = O;
  if (T && E !== !1) {
    const p = Object.keys(T),
      {
        shapeFlag: v
      } = h;
    p.length && v & 7 && (i && p.some(vl) && (T = hg(T, i)), h = kr(h, T, !1, !0))
  }
  return r.dirs && (h = kr(h, null, !1, !0), h.dirs = h.dirs ? h.dirs.concat(r.dirs) : r.dirs), r.transition && Jr(h, r.transition), O = h, Mi(R), O
}

function fg(e, t = !0) {
  let r;
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    if (Sn(s)) {
      if (s.type !== st || s.children === "v-if") {
        if (r) return;
        r = s
      }
    } else return
  }
  return r
}
const dg = e => {
    let t;
    for (const r in e)(r === "class" || r === "style" || js(r)) && ((t || (t = {}))[r] = e[r]);
    return t
  },
  hg = (e, t) => {
    const r = {};
    for (const n in e)(!vl(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
    return r
  };

function _g(e, t, r) {
  const {
    props: n,
    children: s,
    component: i
  } = e, {
    props: a,
    children: o,
    patchFlag: l
  } = t, u = i.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (r && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return n ? Bc(n, a, u) : !!a;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const d = c[f];
        if (ah(a, n, d) && !ma(u, d)) return !0
      }
    }
  } else return (s || o) && (!o || !o.$stable) ? !0 : n === a ? !1 : n ? a ? Bc(n, a, u) : !0 : !!a;
  return !1
}

function Bc(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e)
    .length) return !0;
  for (let s = 0; s < n.length; s++) {
    const i = n[s];
    if (ah(t, e, i) && !ma(r, i)) return !0
  }
  return !1
}

function ah(e, t, r) {
  const n = e[r],
    s = t[r];
  return r === "style" && Ne(n) && Ne(s) ? !bn(n, s) : n !== s
}

function ga({
  vnode: e,
  parent: t
}, r) {
  for (; t;) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)(e = t.vnode)
      .el = r, t = t.parent;
    else break
  }
}
const oh = {},
  lh = () => Object.create(oh),
  ch = e => Object.getPrototypeOf(e) === oh;

function pg(e, t, r, n = !1) {
  const s = {},
    i = lh();
  e.propsDefaults = Object.create(null), uh(e, t, s, i);
  for (const a in e.propsOptions[0]) a in s || (s[a] = void 0);
  r ? e.props = n ? s : Pr(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i
}

function mg(e, t, r, n) {
  const {
    props: s,
    attrs: i,
    vnode: {
      patchFlag: a
    }
  } = e, o = Se(s), [l] = e.propsOptions;
  let u = !1;
  if ((n || a > 0) && !(a & 16)) {
    if (a & 8) {
      const c = e.vnode.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        let d = c[f];
        if (ma(e.emitsOptions, d)) continue;
        const _ = t[d];
        if (l)
          if (xe(i, d)) _ !== i[d] && (i[d] = _, u = !0);
          else {
            const m = Nt(d);
            s[m] = Lo(l, o, m, _, e, !1)
          }
        else _ !== i[d] && (i[d] = _, u = !0)
      }
    }
  } else {
    uh(e, t, s, i) && (u = !0);
    let c;
    for (const f in o)(!t || !xe(t, f) && ((c = Nr(f)) === f || !xe(t, c))) && (l ? r && (r[f] !== void 0 || r[c] !== void 0) && (s[f] = Lo(l, o, f, void 0, e, !0)) : delete s[f]);
    if (i !== o)
      for (const f in i)(!t || !xe(t, f)) && (delete i[f], u = !0)
  }
  u && wr(e.attrs, "set", "")
}

function uh(e, t, r, n) {
  const [s, i] = e.propsOptions;
  let a = !1,
    o;
  if (t)
    for (let l in t) {
      if (vn(l)) continue;
      const u = t[l];
      let c;
      s && xe(s, c = Nt(l)) ? !i || !i.includes(c) ? r[c] = u : (o || (o = {}))[c] = u : ma(e.emitsOptions, l) || (!(l in n) || u !== n[l]) && (n[l] = u, a = !0)
    }
  if (i) {
    const l = Se(r),
      u = o || Oe;
    for (let c = 0; c < i.length; c++) {
      const f = i[c];
      r[f] = Lo(s, l, f, u[f], e, !xe(u, f))
    }
  }
  return a
}

function Lo(e, t, r, n, s, i) {
  const a = e[r];
  if (a != null) {
    const o = xe(a, "default");
    if (o && n === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && pe(l)) {
        const {
          propsDefaults: u
        } = s;
        if (r in u) n = u[r];
        else {
          const c = Pn(s);
          n = u[r] = l.call(null, t), c()
        }
      } else n = l;
      s.ce && s.ce._setProp(r, n)
    }
    a[0] && (i && !o ? n = !1 : a[1] && (n === "" || n === Nr(r)) && (n = !0))
  }
  return n
}
const gg = new WeakMap;

function fh(e, t, r = !1) {
  const n = r ? gg : t.propsCache,
    s = n.get(e);
  if (s) return s;
  const i = e.props,
    a = {},
    o = [];
  let l = !1;
  if (!pe(e)) {
    const c = f => {
      l = !0;
      const [d, _] = fh(f, t, !0);
      et(a, d), _ && o.push(..._)
    };
    !r && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c)
  }
  if (!i && !l) return Ne(e) && n.set(e, Un), Un;
  if (fe(i))
    for (let c = 0; c < i.length; c++) {
      const f = Nt(i[c]);
      Vc(f) && (a[f] = Oe)
    } else if (i)
      for (const c in i) {
        const f = Nt(c);
        if (Vc(f)) {
          const d = i[c],
            _ = a[f] = fe(d) || pe(d) ? {
              type: d
            } : et({}, d),
            m = _.type;
          let E = !1,
            R = !0;
          if (fe(m))
            for (let O = 0; O < m.length; ++O) {
              const T = m[O],
                h = pe(T) && T.name;
              if (h === "Boolean") {
                E = !0;
                break
              } else h === "String" && (R = !1)
            } else E = pe(m) && m.name === "Boolean";
          _[0] = E, _[1] = R, (E || xe(_, "default")) && o.push(f)
        }
      }
  const u = [a, o];
  return Ne(e) && n.set(e, u), u
}

function Vc(e) {
  return e[0] !== "$" && !vn(e)
}
const Fl = e => e === "_" || e === "_ctx" || e === "$stable",
  Hl = e => fe(e) ? e.map(Dt) : [Dt(e)],
  vg = (e, t, r) => {
    if (t._n) return t;
    const n = Il((...s) => Hl(t(...s)), r);
    return n._c = !1, n
  },
  dh = (e, t, r) => {
    const n = e._ctx;
    for (const s in e) {
      if (Fl(s)) continue;
      const i = e[s];
      if (pe(i)) t[s] = vg(s, i, n);
      else if (i != null) {
        const a = Hl(i);
        t[s] = () => a
      }
    }
  },
  hh = (e, t) => {
    const r = Hl(t);
    e.slots.default = () => r
  },
  _h = (e, t, r) => {
    for (const n in t)(r || !Fl(n)) && (e[n] = t[n])
  },
  yg = (e, t, r) => {
    const n = e.slots = lh();
    if (e.vnode.shapeFlag & 32) {
      const s = t._;
      s ? (_h(n, t, r), r && ld(n, "_", s, !0)) : dh(t, n)
    } else t && hh(e, t)
  },
  Eg = (e, t, r) => {
    const {
      vnode: n,
      slots: s
    } = e;
    let i = !0,
      a = Oe;
    if (n.shapeFlag & 32) {
      const o = t._;
      o ? r && o === 1 ? i = !1 : _h(s, t, r) : (i = !t.$stable, dh(t, s)), a = t
    } else t && (hh(e, t), a = {
      default: 1
    });
    if (i)
      for (const o in s) !Fl(o) && a[o] == null && delete s[o]
  },
  Je = Eh;

function wg(e) {
  return ph(e)
}

function bg(e) {
  return ph(e, Wm)
}

function ph(e, t) {
  const r = oa();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: s,
    patchProp: i,
    createElement: a,
    createText: o,
    createComment: l,
    setText: u,
    setElementText: c,
    parentNode: f,
    nextSibling: d,
    setScopeId: _ = Xt,
    insertStaticContent: m
  } = e, E = (I, S, F, q = null, j = null, J = null, ie = void 0, C = null, y = !!S.dynamicChildren) => {
    if (I === S) return;
    I && !jt(I, S) && (q = H(I), ye(I, j, J, !0), I = null), S.patchFlag === -2 && (y = !1, S.dynamicChildren = null);
    const {
      type: D,
      ref: K,
      shapeFlag: z
    } = S;
    switch (D) {
      case Zr:
        R(I, S, F, q);
        break;
      case st:
        O(I, S, F, q);
        break;
      case Yn:
        I == null && T(S, F, q, ie);
        break;
      case nt:
        k(I, S, F, q, j, J, ie, C, y);
        break;
      default:
        z & 1 ? v(I, S, F, q, j, J, ie, C, y) : z & 6 ? W(I, S, F, q, j, J, ie, C, y) : (z & 64 || z & 128) && D.process(I, S, F, q, j, J, ie, C, y, ae)
    }
    K != null && j ? jn(K, I && I.ref, J, S || I, !S) : K == null && I && I.ref != null && jn(I.ref, null, J, I, !0)
  }, R = (I, S, F, q) => {
    if (I == null) n(S.el = o(S.children), F, q);
    else {
      const j = S.el = I.el;
      S.children !== I.children && u(j, S.children)
    }
  }, O = (I, S, F, q) => {
    I == null ? n(S.el = l(S.children || ""), F, q) : S.el = I.el
  }, T = (I, S, F, q) => {
    [I.el, I.anchor] = m(I.children, S, F, q, I.el, I.anchor)
  }, h = ({
    el: I,
    anchor: S
  }, F, q) => {
    let j;
    for (; I && I !== S;) j = d(I), n(I, F, q), I = j;
    n(S, F, q)
  }, p = ({
    el: I,
    anchor: S
  }) => {
    let F;
    for (; I && I !== S;) F = d(I), s(I), I = F;
    s(S)
  }, v = (I, S, F, q, j, J, ie, C, y) => {
    if (S.type === "svg" ? ie = "svg" : S.type === "math" && (ie = "mathml"), I == null) P(S, F, q, j, J, ie, C, y);
    else {
      const D = I.el && I.el._isVueCE ? I.el : null;
      try {
        D && D._beginPatch(), b(I, S, j, J, ie, C, y)
      } finally {
        D && D._endPatch()
      }
    }
  }, P = (I, S, F, q, j, J, ie, C) => {
    let y, D;
    const {
      props: K,
      shapeFlag: z,
      transition: Z,
      dirs: x
    } = I;
    if (y = I.el = a(I.type, J, K && K.is, K), z & 8 ? c(y, I.children) : z & 16 && L(I.children, y, null, q, j, Xa(I, J), ie, C), x && or(I, null, q, "created"), g(y, I, I.scopeId, ie, q), K) {
      for (const le in K) le !== "value" && !vn(le) && i(y, le, null, K[le], J, q);
      "value" in K && i(y, "value", null, K.value, J), (D = K.onVnodeBeforeMount) && At(D, q, I)
    }
    x && or(I, null, q, "beforeMount");
    const V = mh(j, Z);
    V && Z.beforeEnter(y), n(y, S, F), ((D = K && K.onVnodeMounted) || V || x) && Je(() => {
      D && At(D, q, I), V && Z.enter(y), x && or(I, null, q, "mounted")
    }, j)
  }, g = (I, S, F, q, j) => {
    if (F && _(I, F), q)
      for (let J = 0; J < q.length; J++) _(I, q[J]);
    if (j) {
      let J = j.subTree;
      if (S === J || Bi(J.type) && (J.ssContent === S || J.ssFallback === S)) {
        const ie = j.vnode;
        g(I, ie, ie.scopeId, ie.slotScopeIds, j.parent)
      }
    }
  }, L = (I, S, F, q, j, J, ie, C, y = 0) => {
    for (let D = y; D < I.length; D++) {
      const K = I[D] = C ? Er(I[D]) : Dt(I[D]);
      E(null, K, S, F, q, j, J, ie, C)
    }
  }, b = (I, S, F, q, j, J, ie) => {
    const C = S.el = I.el;
    let {
      patchFlag: y,
      dynamicChildren: D,
      dirs: K
    } = S;
    y |= I.patchFlag & 16;
    const z = I.props || Oe,
      Z = S.props || Oe;
    let x;
    if (F && on(F, !1), (x = Z.onVnodeBeforeUpdate) && At(x, F, S, I), K && or(S, I, F, "beforeUpdate"), F && on(F, !0), (z.innerHTML && Z.innerHTML == null || z.textContent && Z.textContent == null) && c(C, ""), D ? N(I.dynamicChildren, D, C, F, q, Xa(S, j), J) : ie || se(I, S, C, null, F, q, Xa(S, j), J, !1), y > 0) {
      if (y & 16) B(C, z, Z, F, j);
      else if (y & 2 && z.class !== Z.class && i(C, "class", null, Z.class, j), y & 4 && i(C, "style", z.style, Z.style, j), y & 8) {
        const V = S.dynamicProps;
        for (let le = 0; le < V.length; le++) {
          const ue = V[le],
            Ae = z[ue],
            Re = Z[ue];
          (Re !== Ae || ue === "value") && i(C, ue, Ae, Re, j, F)
        }
      }
      y & 1 && I.children !== S.children && c(C, S.children)
    } else !ie && D == null && B(C, z, Z, F, j);
    ((x = Z.onVnodeUpdated) || K) && Je(() => {
      x && At(x, F, S, I), K && or(S, I, F, "updated")
    }, q)
  }, N = (I, S, F, q, j, J, ie) => {
    for (let C = 0; C < S.length; C++) {
      const y = I[C],
        D = S[C],
        K = y.el && (y.type === nt || !jt(y, D) || y.shapeFlag & 198) ? f(y.el) : F;
      E(y, D, K, null, q, j, J, ie, !0)
    }
  }, B = (I, S, F, q, j) => {
    if (S !== F) {
      if (S !== Oe)
        for (const J in S) !vn(J) && !(J in F) && i(I, J, S[J], null, j, q);
      for (const J in F) {
        if (vn(J)) continue;
        const ie = F[J],
          C = S[J];
        ie !== C && J !== "value" && i(I, J, C, ie, j, q)
      }
      "value" in F && i(I, "value", S.value, F.value, j)
    }
  }, k = (I, S, F, q, j, J, ie, C, y) => {
    const D = S.el = I ? I.el : o(""),
      K = S.anchor = I ? I.anchor : o("");
    let {
      patchFlag: z,
      dynamicChildren: Z,
      slotScopeIds: x
    } = S;
    x && (C = C ? C.concat(x) : x), I == null ? (n(D, F, q), n(K, F, q), L(S.children || [], F, K, j, J, ie, C, y)) : z > 0 && z & 64 && Z && I.dynamicChildren && I.dynamicChildren.length === Z.length ? (N(I.dynamicChildren, Z, F, j, J, ie, C), (S.key != null || j && S === j.subTree) && Bl(I, S, !0)) : se(I, S, F, K, j, J, ie, C, y)
  }, W = (I, S, F, q, j, J, ie, C, y) => {
    S.slotScopeIds = C, I == null ? S.shapeFlag & 512 ? j.ctx.activate(S, F, q, ie, y) : Y(S, F, q, j, J, ie, y) : ee(I, S, y)
  }, Y = (I, S, F, q, j, J, ie) => {
    const C = I.component = Ng(I, q, j);
    if (Xs(I) && (C.ctx.renderer = ae), Mg(C, !1, ie), C.asyncDep) {
      if (j && j.registerDep(C, X, ie), !I.el) {
        const y = C.subTree = Xe(st);
        O(null, y, S, F), I.placeholder = y.el
      }
    } else X(C, I, S, F, j, J, ie)
  }, ee = (I, S, F) => {
    const q = S.component = I.component;
    if (_g(I, S, F))
      if (q.asyncDep && !q.asyncResolved) {
        re(q, S, F);
        return
      } else q.next = S, q.update();
    else S.el = I.el, q.vnode = S
  }, X = (I, S, F, q, j, J, ie) => {
    const C = () => {
      if (I.isMounted) {
        let {
          next: z,
          bu: Z,
          u: x,
          parent: V,
          vnode: le
        } = I;
        {
          const rt = gh(I);
          if (rt) {
            z && (z.el = le.el, re(I, z, ie)), rt.asyncDep.then(() => {
              Je(() => {
                I.isUnmounted || D()
              }, j)
            });
            return
          }
        }
        let ue = z,
          Ae;
        on(I, !1), z ? (z.el = le.el, re(I, z, ie)) : z = le, Z && $n(Z), (Ae = z.props && z.props.onVnodeBeforeUpdate) && At(Ae, V, z, le), on(I, !0);
        const Re = Ya(I),
          Ge = I.subTree;
        I.subTree = Re, E(Ge, Re, f(Ge.el), H(Ge), I, j, J), z.el = Re.el, ue === null && ga(I, Re.el), x && Je(x, j), (Ae = z.props && z.props.onVnodeUpdated) && Je(() => At(Ae, V, z, le), j)
      } else {
        let z;
        const {
          el: Z,
          props: x
        } = S, {
          bm: V,
          m: le,
          parent: ue,
          root: Ae,
          type: Re
        } = I, Ge = Ar(S);
        if (on(I, !1), V && $n(V), !Ge && (z = x && x.onVnodeBeforeMount) && At(z, ue, S), on(I, !0), Z && Ee) {
          const rt = () => {
            I.subTree = Ya(I), Ee(Z, I.subTree, I, j, null)
          };
          Ge && Re.__asyncHydrate ? Re.__asyncHydrate(Z, I, rt) : rt()
        } else {
          Ae.ce && Ae.ce._hasShadowRoot() && Ae.ce._injectChildStyle(Re);
          const rt = I.subTree = Ya(I);
          E(null, rt, F, q, I, j, J), S.el = rt.el
        }
        if (le && Je(le, j), !Ge && (z = x && x.onVnodeMounted)) {
          const rt = S;
          Je(() => At(z, ue, rt), j)
        }(S.shapeFlag & 256 || ue && Ar(ue.vnode) && ue.vnode.shapeFlag & 256) && I.a && Je(I.a, j), I.isMounted = !0, S = F = q = null
      }
    };
    I.scope.on();
    const y = I.effect = new md(C);
    I.scope.off();
    const D = I.update = y.run.bind(y),
      K = I.job = y.runIfDirty.bind(y);
    K.i = I, K.id = I.uid, y.scheduler = () => Ol(K), on(I, !0), D()
  }, re = (I, S, F) => {
    S.component = I;
    const q = I.vnode.props;
    I.vnode = S, I.next = null, mg(I, S.props, q, F), Eg(I, S.children, F), Lr(), Pc(I), Dr()
  }, se = (I, S, F, q, j, J, ie, C, y = !1) => {
    const D = I && I.children,
      K = I ? I.shapeFlag : 0,
      z = S.children,
      {
        patchFlag: Z,
        shapeFlag: x
      } = S;
    if (Z > 0) {
      if (Z & 128) {
        Pe(D, z, F, q, j, J, ie, C, y);
        return
      } else if (Z & 256) {
        de(D, z, F, q, j, J, ie, C, y);
        return
      }
    }
    x & 8 ? (K & 16 && ke(D, j, J), z !== D && c(F, z)) : K & 16 ? x & 16 ? Pe(D, z, F, q, j, J, ie, C, y) : ke(D, j, J, !0) : (K & 8 && c(F, ""), x & 16 && L(z, F, q, j, J, ie, C, y))
  }, de = (I, S, F, q, j, J, ie, C, y) => {
    I = I || Un, S = S || Un;
    const D = I.length,
      K = S.length,
      z = Math.min(D, K);
    let Z;
    for (Z = 0; Z < z; Z++) {
      const x = S[Z] = y ? Er(S[Z]) : Dt(S[Z]);
      E(I[Z], x, F, null, j, J, ie, C, y)
    }
    D > K ? ke(I, j, J, !0, !1, z) : L(S, F, q, j, J, ie, C, y, z)
  }, Pe = (I, S, F, q, j, J, ie, C, y) => {
    let D = 0;
    const K = S.length;
    let z = I.length - 1,
      Z = K - 1;
    for (; D <= z && D <= Z;) {
      const x = I[D],
        V = S[D] = y ? Er(S[D]) : Dt(S[D]);
      if (jt(x, V)) E(x, V, F, null, j, J, ie, C, y);
      else break;
      D++
    }
    for (; D <= z && D <= Z;) {
      const x = I[z],
        V = S[Z] = y ? Er(S[Z]) : Dt(S[Z]);
      if (jt(x, V)) E(x, V, F, null, j, J, ie, C, y);
      else break;
      z--, Z--
    }
    if (D > z) {
      if (D <= Z) {
        const x = Z + 1,
          V = x < K ? S[x].el : q;
        for (; D <= Z;) E(null, S[D] = y ? Er(S[D]) : Dt(S[D]), F, V, j, J, ie, C, y), D++
      }
    } else if (D > Z)
      for (; D <= z;) ye(I[D], j, J, !0), D++;
    else {
      const x = D,
        V = D,
        le = new Map;
      for (D = V; D <= Z; D++) {
        const ht = S[D] = y ? Er(S[D]) : Dt(S[D]);
        ht.key != null && le.set(ht.key, D)
      }
      let ue, Ae = 0;
      const Re = Z - V + 1;
      let Ge = !1,
        rt = 0;
      const Gt = new Array(Re);
      for (D = 0; D < Re; D++) Gt[D] = 0;
      for (D = x; D <= z; D++) {
        const ht = I[D];
        if (Ae >= Re) {
          ye(ht, j, J, !0);
          continue
        }
        let xt;
        if (ht.key != null) xt = le.get(ht.key);
        else
          for (ue = V; ue <= Z; ue++)
            if (Gt[ue - V] === 0 && jt(ht, S[ue])) {
              xt = ue;
              break
            } xt === void 0 ? ye(ht, j, J, !0) : (Gt[xt - V] = D + 1, xt >= rt ? rt = xt : Ge = !0, E(ht, S[xt], F, null, j, J, ie, C, y), Ae++)
      }
      const nn = Ge ? Tg(Gt) : Un;
      for (ue = nn.length - 1, D = Re - 1; D >= 0; D--) {
        const ht = V + D,
          xt = S[ht],
          sn = S[ht + 1],
          Js = ht + 1 < K ? sn.el || vh(sn) : q;
        Gt[D] === 0 ? E(null, xt, F, Js, j, J, ie, C, y) : Ge && (ue < 0 || D !== nn[ue] ? we(xt, F, Js, 2) : ue--)
      }
    }
  }, we = (I, S, F, q, j = null) => {
    const {
      el: J,
      type: ie,
      transition: C,
      children: y,
      shapeFlag: D
    } = I;
    if (D & 6) {
      we(I.component.subTree, S, F, q);
      return
    }
    if (D & 128) {
      I.suspense.move(S, F, q);
      return
    }
    if (D & 64) {
      ie.move(I, S, F, ae);
      return
    }
    if (ie === nt) {
      n(J, S, F);
      for (let z = 0; z < y.length; z++) we(y[z], S, F, q);
      n(I.anchor, S, F);
      return
    }
    if (ie === Yn) {
      h(I, S, F);
      return
    }
    if (q !== 2 && D & 1 && C)
      if (q === 0) C.beforeEnter(J), n(J, S, F), Je(() => C.enter(J), j);
      else {
        const {
          leave: z,
          delayLeave: Z,
          afterLeave: x
        } = C, V = () => {
          I.ctx.isUnmounted ? s(J) : n(J, S, F)
        }, le = () => {
          J._isLeaving && J[lr](!0), z(J, () => {
            V(), x && x()
          })
        };
        Z ? Z(J, V, le) : le()
      }
    else n(J, S, F)
  }, ye = (I, S, F, q = !1, j = !1) => {
    const {
      type: J,
      props: ie,
      ref: C,
      children: y,
      dynamicChildren: D,
      shapeFlag: K,
      patchFlag: z,
      dirs: Z,
      cacheIndex: x
    } = I;
    if (z === -2 && (j = !1), C != null && (Lr(), jn(C, null, F, I, !0), Dr()), x != null && (S.renderCache[x] = void 0), K & 256) {
      S.ctx.deactivate(I);
      return
    }
    const V = K & 1 && Z,
      le = !Ar(I);
    let ue;
    if (le && (ue = ie && ie.onVnodeBeforeUnmount) && At(ue, S, I), K & 6) De(I.component, F, q);
    else {
      if (K & 128) {
        I.suspense.unmount(F, q);
        return
      }
      V && or(I, null, S, "beforeUnmount"), K & 64 ? I.type.remove(I, S, F, ae, q) : D && !D.hasOnce && (J !== nt || z > 0 && z & 64) ? ke(D, S, F, !1, !0) : (J === nt && z & 384 || !j && K & 16) && ke(y, S, F), q && Ye(I)
    }(le && (ue = ie && ie.onVnodeUnmounted) || V) && Je(() => {
      ue && At(ue, S, I), V && or(I, null, S, "unmounted")
    }, F)
  }, Ye = I => {
    const {
      type: S,
      el: F,
      anchor: q,
      transition: j
    } = I;
    if (S === nt) {
      He(F, q);
      return
    }
    if (S === Yn) {
      p(I);
      return
    }
    const J = () => {
      s(F), j && !j.persisted && j.afterLeave && j.afterLeave()
    };
    if (I.shapeFlag & 1 && j && !j.persisted) {
      const {
        leave: ie,
        delayLeave: C
      } = j, y = () => ie(F, J);
      C ? C(I.el, J, y) : y()
    } else J()
  }, He = (I, S) => {
    let F;
    for (; I !== S;) F = d(I), s(I), I = F;
    s(S)
  }, De = (I, S, F) => {
    const {
      bum: q,
      scope: j,
      job: J,
      subTree: ie,
      um: C,
      m: y,
      a: D
    } = I;
    Hi(y), Hi(D), q && $n(q), j.stop(), J && (J.flags |= 8, ye(ie, I, S, F)), C && Je(C, S), Je(() => {
      I.isUnmounted = !0
    }, S)
  }, ke = (I, S, F, q = !1, j = !1, J = 0) => {
    for (let ie = J; ie < I.length; ie++) ye(I[ie], S, F, q, j)
  }, H = I => {
    if (I.shapeFlag & 6) return H(I.component.subTree);
    if (I.shapeFlag & 128) return I.suspense.next();
    const S = d(I.anchor || I.el),
      F = S && S[Bd];
    return F ? d(F) : S
  };
  let ne = !1;
  const Q = (I, S, F) => {
      let q;
      I == null ? S._vnode && (ye(S._vnode, null, null, !0), q = S._vnode.component) : E(S._vnode || null, I, S, null, null, null, F), S._vnode = I, ne || (ne = !0, Pc(q), Ni(), ne = !1)
    },
    ae = {
      p: E,
      um: ye,
      m: we,
      r: Ye,
      mt: Y,
      mc: L,
      pc: se,
      pbc: N,
      n: H,
      o: e
    };
  let he, Ee;
  return t && ([he, Ee] = t(ae)), {
    render: Q,
    hydrate: he,
    createApp: lg(Q, he)
  }
}

function Xa({
  type: e,
  props: t
}, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r
}

function on({
  effect: e,
  job: t
}, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5)
}

function mh(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted
}

function Bl(e, t, r = !1) {
  const n = e.children,
    s = t.children;
  if (fe(n) && fe(s))
    for (let i = 0; i < n.length; i++) {
      const a = n[i];
      let o = s[i];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = s[i] = Er(s[i]), o.el = a.el), !r && o.patchFlag !== -2 && Bl(a, o)), o.type === Zr && (o.patchFlag === -1 && (o = s[i] = Er(o)), o.el = a.el), o.type === st && !o.el && (o.el = a.el)
    }
}

function Tg(e) {
  const t = e.slice(),
    r = [0];
  let n, s, i, a, o;
  const l = e.length;
  for (n = 0; n < l; n++) {
    const u = e[n];
    if (u !== 0) {
      if (s = r[r.length - 1], e[s] < u) {
        t[n] = s, r.push(n);
        continue
      }
      for (i = 0, a = r.length - 1; i < a;) o = i + a >> 1, e[r[o]] < u ? i = o + 1 : a = o;
      u < e[r[i]] && (i > 0 && (t[n] = r[i - 1]), r[i] = n)
    }
  }
  for (i = r.length, a = r[i - 1]; i-- > 0;) r[i] = a, a = t[a];
  return r
}

function gh(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : gh(t)
}

function Hi(e) {
  if (e)
    for (let t = 0; t < e.length; t++) e[t].flags |= 8
}

function vh(e) {
  if (e.placeholder) return e.placeholder;
  const t = e.component;
  return t ? vh(t.subTree) : null
}
const Bi = e => e.__isSuspense;
let Do = 0;
const Sg = {
    name: "Suspense",
    __isSuspense: !0,
    process(e, t, r, n, s, i, a, o, l, u) {
      if (e == null) Pg(t, r, n, s, i, a, o, l, u);
      else {
        if (i && i.deps > 0 && !e.suspense.isInFallback) {
          t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
          return
        }
        Cg(e, t, r, n, s, a, o, l, u)
      }
    },
    hydrate: Ag,
    normalize: Rg
  },
  Vl = Sg;

function Bs(e, t) {
  const r = e.props && e.props[t];
  pe(r) && r()
}

function Pg(e, t, r, n, s, i, a, o, l) {
  const {
    p: u,
    o: {
      createElement: c
    }
  } = l, f = c("div"), d = e.suspense = yh(e, s, n, t, f, r, i, a, o, l);
  u(null, d.pendingBranch = e.ssContent, f, null, n, d, i, a), d.deps > 0 ? (Bs(e, "onPending"), Bs(e, "onFallback"), u(null, e.ssFallback, t, r, n, null, i, a), Kn(d, e.ssFallback)) : d.resolve(!1, !0)
}

function Cg(e, t, r, n, s, i, a, o, {
  p: l,
  um: u,
  o: {
    createElement: c
  }
}) {
  const f = t.suspense = e.suspense;
  f.vnode = t, t.el = e.el;
  const d = t.ssContent,
    _ = t.ssFallback,
    {
      activeBranch: m,
      pendingBranch: E,
      isInFallback: R,
      isHydrating: O
    } = f;
  if (E) f.pendingBranch = d, jt(E, d) ? (l(E, d, f.hiddenContainer, null, s, f, i, a, o), f.deps <= 0 ? f.resolve() : R && (O || (l(m, _, r, n, s, null, i, a, o), Kn(f, _)))) : (f.pendingId = Do++, O ? (f.isHydrating = !1, f.activeBranch = E) : u(E, s, f), f.deps = 0, f.effects.length = 0, f.hiddenContainer = c("div"), R ? (l(null, d, f.hiddenContainer, null, s, f, i, a, o), f.deps <= 0 ? f.resolve() : (l(m, _, r, n, s, null, i, a, o), Kn(f, _))) : m && jt(m, d) ? (l(m, d, r, n, s, f, i, a, o), f.resolve(!0)) : (l(null, d, f.hiddenContainer, null, s, f, i, a, o), f.deps <= 0 && f.resolve()));
  else if (m && jt(m, d)) l(m, d, r, n, s, f, i, a, o), Kn(f, d);
  else if (Bs(t, "onPending"), f.pendingBranch = d, d.shapeFlag & 512 ? f.pendingId = d.component.suspenseId : f.pendingId = Do++, l(null, d, f.hiddenContainer, null, s, f, i, a, o), f.deps <= 0) f.resolve();
  else {
    const {
      timeout: T,
      pendingId: h
    } = f;
    T > 0 ? setTimeout(() => {
      f.pendingId === h && f.fallback(_)
    }, T) : T === 0 && f.fallback(_)
  }
}

function yh(e, t, r, n, s, i, a, o, l, u, c = !1) {
  const {
    p: f,
    m: d,
    um: _,
    n: m,
    o: {
      parentNode: E,
      remove: R
    }
  } = u;
  let O;
  const T = Og(e);
  T && t && t.pendingBranch && (O = t.pendingId, t.deps++);
  const h = e.props ? cd(e.props.timeout) : void 0,
    p = i,
    v = {
      vnode: e,
      parent: t,
      parentComponent: r,
      namespace: a,
      container: n,
      hiddenContainer: s,
      deps: 0,
      pendingId: Do++,
      timeout: typeof h == "number" ? h : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !c,
      isHydrating: c,
      isUnmounted: !1,
      effects: [],
      resolve(P = !1, g = !1) {
        const {
          vnode: L,
          activeBranch: b,
          pendingBranch: N,
          pendingId: B,
          effects: k,
          parentComponent: W,
          container: Y,
          isInFallback: ee
        } = v;
        let X = !1;
        v.isHydrating ? v.isHydrating = !1 : P || (X = b && N.transition && N.transition.mode === "out-in", X && (b.transition.afterLeave = () => {
          B === v.pendingId && (d(N, Y, i === p ? m(b) : i, 0), ki(k), ee && L.ssFallback && (L.ssFallback.el = null))
        }), b && (E(b.el) === Y && (i = m(b)), _(b, W, v, !0), !X && ee && L.ssFallback && Je(() => L.ssFallback.el = null, v)), X || d(N, Y, i, 0)), Kn(v, N), v.pendingBranch = null, v.isInFallback = !1;
        let re = v.parent,
          se = !1;
        for (; re;) {
          if (re.pendingBranch) {
            re.effects.push(...k), se = !0;
            break
          }
          re = re.parent
        }!se && !X && ki(k), v.effects = [], T && t && t.pendingBranch && O === t.pendingId && (t.deps--, t.deps === 0 && !g && t.resolve()), Bs(L, "onResolve")
      },
      fallback(P) {
        if (!v.pendingBranch) return;
        const {
          vnode: g,
          activeBranch: L,
          parentComponent: b,
          container: N,
          namespace: B
        } = v;
        Bs(g, "onFallback");
        const k = m(L),
          W = () => {
            v.isInFallback && (f(null, P, N, k, b, null, B, o, l), Kn(v, P))
          },
          Y = P.transition && P.transition.mode === "out-in";
        Y && (L.transition.afterLeave = W), v.isInFallback = !0, _(L, b, null, !0), Y || W()
      },
      move(P, g, L) {
        v.activeBranch && d(v.activeBranch, P, g, L), v.container = P
      },
      next() {
        return v.activeBranch && m(v.activeBranch)
      },
      registerDep(P, g, L) {
        const b = !!v.pendingBranch;
        b && v.deps++;
        const N = P.vnode.el;
        P.asyncDep.catch(B => {
            is(B, P, 0)
          })
          .then(B => {
            if (P.isUnmounted || v.isUnmounted || v.pendingId !== P.suspenseId) return;
            P.asyncResolved = !0;
            const {
              vnode: k
            } = P;
            No(P, B), N && (k.el = N);
            const W = !N && P.subTree.el;
            g(P, k, E(N || P.subTree.el), N ? null : m(P.subTree), v, a, L), W && (k.placeholder = null, R(W)), ga(P, k.el), b && --v.deps === 0 && v.resolve()
          })
      },
      unmount(P, g) {
        v.isUnmounted = !0, v.activeBranch && _(v.activeBranch, r, P, g), v.pendingBranch && _(v.pendingBranch, r, P, g)
      }
    };
  return v
}

function Ag(e, t, r, n, s, i, a, o, l) {
  const u = t.suspense = yh(t, n, r, e.parentNode, document.createElement("div"), null, s, i, a, o, !0),
    c = l(e, u.pendingBranch = t.ssContent, r, u, i, a);
  return u.deps === 0 && u.resolve(!1, !0), c
}

function Rg(e) {
  const {
    shapeFlag: t,
    children: r
  } = e, n = t & 32;
  e.ssContent = Uc(n ? r.default : r), e.ssFallback = n ? Uc(r.fallback) : Xe(st)
}

function Uc(e) {
  let t;
  if (pe(e)) {
    const r = qn && e._c;
    r && (e._d = !1, Ot()), e = e(), r && (e._d = !0, t = It, wh())
  }
  return fe(e) && (e = fg(e)), e = Dt(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter(r => r !== e)), e
}

function Eh(e, t) {
  t && t.pendingBranch ? fe(e) ? t.effects.push(...e) : t.effects.push(e) : ki(e)
}

function Kn(e, t) {
  e.activeBranch = t;
  const {
    vnode: r,
    parentComponent: n
  } = e;
  let s = t.el;
  for (; !s && t.component;) t = t.component.subTree, s = t.el;
  r.el = s, n && n.subTree === r && (n.vnode.el = s, ga(n, s))
}

function Og(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1
}
const nt = Symbol.for("v-fgt"),
  Zr = Symbol.for("v-txt"),
  st = Symbol.for("v-cmt"),
  Yn = Symbol.for("v-stc"),
  Cs = [];
let It = null;

function Ot(e = !1) {
  Cs.push(It = e ? null : [])
}

function wh() {
  Cs.pop(), It = Cs[Cs.length - 1] || null
}
let qn = 1;

function Vi(e, t = !1) {
  qn += e, e < 0 && It && t && (It.hasOnce = !0)
}

function bh(e) {
  return e.dynamicChildren = qn > 0 ? It || Un : null, wh(), qn > 0 && It && It.push(e), e
}

function As(e, t, r, n, s, i) {
  return bh(Sh(e, t, r, n, s, i, !0))
}

function Tr(e, t, r, n, s) {
  return bh(Xe(e, t, r, n, s, !0))
}

function Sn(e) {
  return e ? e.__v_isVNode === !0 : !1
}

function jt(e, t) {
  return e.type === t.type && e.key === t.key
}
const Th = ({
    key: e
  }) => e ?? null,
  wi = ({
    ref: e,
    ref_key: t,
    ref_for: r
  }) => (typeof e == "number" && (e = "" + e), e != null ? je(e) || Ue(e) || pe(e) ? {
    i: mt,
    r: e,
    k: t,
    f: !!r
  } : e : null);

function Sh(e, t = null, r = null, n = 0, s = null, i = e === nt ? 0 : 1, a = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Th(t),
    ref: t && wi(t),
    scopeId: Fd,
    slotScopeIds: null,
    children: r,
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
    patchFlag: n,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: mt
  };
  return o ? (Ul(l, r), i & 128 && e.normalize(l)) : r && (l.shapeFlag |= je(r) ? 8 : 16), qn > 0 && !a && It && (l.patchFlag > 0 || i & 6) && l.patchFlag !== 32 && It.push(l), l
}
const Xe = Ig;

function Ig(e, t = null, r = null, n = 0, s = null, i = !1) {
  if ((!e || e === Jd) && (e = st), Sn(e)) {
    const o = kr(e, t, !0);
    return r && Ul(o, r), qn > 0 && !i && It && (o.shapeFlag & 6 ? It[It.indexOf(e)] = o : It.push(o)), o.patchFlag = -2, o
  }
  if (Hg(e) && (e = e.__vccOpts), t) {
    t = Lg(t);
    let {
      class: o,
      style: l
    } = t;
    o && !je(o) && (t.class = ca(o)), Ne(l) && (ha(l) && !fe(l) && (l = et({}, l)), t.style = la(l))
  }
  const a = je(e) ? 1 : Bi(e) ? 128 : Vd(e) ? 64 : Ne(e) ? 4 : pe(e) ? 2 : 0;
  return Sh(e, t, r, n, s, a, i, !0)
}

function Lg(e) {
  return e ? ha(e) || ch(e) ? et({}, e) : e : null
}

function kr(e, t, r = !1, n = !1) {
  const {
    props: s,
    ref: i,
    patchFlag: a,
    children: o,
    transition: l
  } = e, u = t ? Ch(s || {}, t) : s, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && Th(u),
    ref: t && t.ref ? r && i ? fe(i) ? i.concat(wi(t)) : [i, wi(t)] : wi(t) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== nt ? a === -1 ? 16 : a | 16 : a,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && kr(e.ssContent),
    ssFallback: e.ssFallback && kr(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && n && Jr(c, l.clone(c)), c
}

function Ph(e = " ", t = 0) {
  return Xe(Zr, null, e, t)
}

function _R(e, t) {
  const r = Xe(Yn, null, e);
  return r.staticCount = t, r
}

function pR(e = "", t = !1) {
  return t ? (Ot(), Tr(st, null, e)) : Xe(st, null, e)
}

function Dt(e) {
  return e == null || typeof e == "boolean" ? Xe(st) : fe(e) ? Xe(nt, null, e.slice()) : Sn(e) ? Er(e) : Xe(Zr, null, String(e))
}

function Er(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : kr(e)
}

function Ul(e, t) {
  let r = 0;
  const {
    shapeFlag: n
  } = e;
  if (t == null) t = null;
  else if (fe(t)) r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Ul(e, s()), s._c && (s._d = !0));
      return
    } else {
      r = 32;
      const s = t._;
      !s && !ch(t) ? t._ctx = mt : s === 3 && mt && (mt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
    }
  else pe(t) ? (t = {
    default: t,
    _ctx: mt
  }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [Ph(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r
}

function Ch(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const s in n)
      if (s === "class") t.class !== n.class && (t.class = ca([t.class, n.class]));
      else if (s === "style") t.style = la([t.style, n.style]);
    else if (js(s)) {
      const i = t[s],
        a = n[s];
      a && i !== a && !(fe(i) && i.includes(a)) && (t[s] = i ? [].concat(i, a) : a)
    } else s !== "" && (t[s] = n[s])
  }
  return t
}

function At(e, t, r, n = null) {
  er(e, t, 7, [r, n])
}
const Dg = nh();
let kg = 0;

function Ng(e, t, r) {
  const n = e.type,
    s = (t ? t.appContext : e.appContext) || Dg,
    i = {
      uid: kg++,
      vnode: e,
      type: n,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new pd(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      ids: t ? t.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: fh(n, s),
      emitsOptions: ih(n, s),
      emit: null,
      emitted: null,
      propsDefaults: Oe,
      inheritAttrs: n.inheritAttrs,
      ctx: Oe,
      data: Oe,
      props: Oe,
      attrs: Oe,
      slots: Oe,
      refs: Oe,
      setupState: Oe,
      setupContext: null,
      suspense: r,
      suspenseId: r ? r.pendingId : 0,
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
  return i.ctx = {
    _: i
  }, i.root = t ? t.root : i, i.emit = cg.bind(null, i), e.ce && e.ce(i), i
}
let pt = null;
const tt = () => pt || mt;
let Ui, ko;
{
  const e = oa(),
    t = (r, n) => {
      let s;
      return (s = e[r]) || (s = e[r] = []), s.push(n), i => {
        s.length > 1 ? s.forEach(a => a(i)) : s[0](i)
      }
    };
  Ui = t("__VUE_INSTANCE_SETTERS__", r => pt = r), ko = t("__VUE_SSR_SETTERS__", r => Zn = r)
}
const Pn = e => {
    const t = pt;
    return Ui(e), e.scope.on(), () => {
      e.scope.off(), Ui(t)
    }
  },
  Gi = () => {
    pt && pt.scope.off(), Ui(null)
  };

function Ah(e) {
  return e.vnode.shapeFlag & 4
}
let Zn = !1;

function Mg(e, t = !1, r = !1) {
  t && ko(t);
  const {
    props: n,
    children: s
  } = e.vnode, i = Ah(e);
  pg(e, n, i, t), yg(e, s, r || t);
  const a = i ? xg(e, t) : void 0;
  return t && ko(!1), a
}

function xg(e, t) {
  const r = e.type;
  e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, tg);
  const {
    setup: n
  } = r;
  if (n) {
    Lr();
    const s = e.setupContext = n.length > 1 ? Oh(e) : null,
      i = Pn(e),
      a = Ks(n, e, 0, [e.props, s]),
      o = El(a);
    if (Dr(), i(), (o || e.sp) && !Ar(e) && Dl(e), o) {
      if (a.then(Gi, Gi), t) return a.then(l => {
          No(e, l)
        })
        .catch(l => {
          is(l, e, 0)
        });
      e.asyncDep = a
    } else No(e, a)
  } else Rh(e)
}

function No(e, t, r) {
  pe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ne(t) && (e.setupState = Dd(t)), Rh(e)
}

function Rh(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || Xt);
  {
    const s = Pn(e);
    Lr();
    try {
      rg(e)
    } finally {
      Dr(), s()
    }
  }
}
const Fg = {
  get(e, t) {
    return Et(e, "get", ""), e[t]
  }
};

function Oh(e) {
  const t = r => {
    e.exposed = r || {}
  };
  return {
    attrs: new Proxy(e.attrs, Fg),
    slots: e.slots,
    emit: e.emit,
    expose: t
  }
}

function va(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Dd(Al(e.exposed)), {
    get(t, r) {
      if (r in t) return t[r];
      if (r in Ps) return Ps[r](e)
    },
    has(t, r) {
      return r in t || r in Ps
    }
  })) : e.proxy
}

function Mo(e, t = !0) {
  return pe(e) ? e.displayName || e.name : e.name || t && e.__name
}

function Hg(e) {
  return pe(e) && "__vccOpts" in e
}
const $ = (e, t) => Om(e, t, Zn);

function ft(e, t, r) {
  try {
    Vi(-1);
    const n = arguments.length;
    return n === 2 ? Ne(t) && !fe(t) ? Sn(t) ? Xe(e, null, [t]) : Xe(e, t) : Xe(e, null, t) : (n > 3 ? r = Array.prototype.slice.call(arguments, 2) : n === 3 && Sn(r) && (r = [r]), Xe(e, t, r))
  } finally {
    Vi(1)
  }
}
const Bg = "3.5.29";
/**
 * @vue/runtime-dom v3.5.29
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let xo;
const Gc = typeof window < "u" && window.trustedTypes;
if (Gc) try {
  xo = Gc.createPolicy("vue", {
    createHTML: e => e
  })
} catch {}
const Ih = xo ? e => xo.createHTML(e) : e => e,
  Vg = "http://www.w3.org/2000/svg",
  Ug = "http://www.w3.org/1998/Math/MathML",
  yr = typeof document < "u" ? document : null,
  $c = yr && yr.createElement("template"),
  Gg = {
    insert: (e, t, r) => {
      t.insertBefore(e, r || null)
    },
    remove: e => {
      const t = e.parentNode;
      t && t.removeChild(e)
    },
    createElement: (e, t, r, n) => {
      const s = t === "svg" ? yr.createElementNS(Vg, e) : t === "mathml" ? yr.createElementNS(Ug, e) : r ? yr.createElement(e, {
        is: r
      }) : yr.createElement(e);
      return e === "select" && n && n.multiple != null && s.setAttribute("multiple", n.multiple), s
    },
    createText: e => yr.createTextNode(e),
    createComment: e => yr.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => yr.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "")
    },
    insertStaticContent(e, t, r, n, s, i) {
      const a = r ? r.previousSibling : t.lastChild;
      if (s && (s === i || s.nextSibling))
        for (; t.insertBefore(s.cloneNode(!0), r), !(s === i || !(s = s.nextSibling)););
      else {
        $c.innerHTML = Ih(n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e);
        const o = $c.content;
        if (n === "svg" || n === "mathml") {
          const l = o.firstChild;
          for (; l.firstChild;) o.appendChild(l.firstChild);
          o.removeChild(l)
        }
        t.insertBefore(o, r)
      }
      return [a ? a.nextSibling : t.firstChild, r ? r.previousSibling : t.lastChild]
    }
  },
  Vr = "transition",
  _s = "animation",
  zn = Symbol("_vtc"),
  Lh = {
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
  Dh = et({}, $d, Lh),
  $g = e => (e.displayName = "Transition", e.props = Dh, e),
  Wg = $g((e, {
    slots: t
  }) => ft(Um, kh(e), t)),
  ln = (e, t = []) => {
    fe(e) ? e.forEach(r => r(...t)) : e && e(...t)
  },
  Wc = e => e ? fe(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

function kh(e) {
  const t = {};
  for (const k in e) k in Lh || (t[k] = e[k]);
  if (e.css === !1) return t;
  const {
    name: r = "v",
    type: n,
    duration: s,
    enterFromClass: i = `${r}-enter-from`,
    enterActiveClass: a = `${r}-enter-active`,
    enterToClass: o = `${r}-enter-to`,
    appearFromClass: l = i,
    appearActiveClass: u = a,
    appearToClass: c = o,
    leaveFromClass: f = `${r}-leave-from`,
    leaveActiveClass: d = `${r}-leave-active`,
    leaveToClass: _ = `${r}-leave-to`
  } = e, m = jg(s), E = m && m[0], R = m && m[1], {
    onBeforeEnter: O,
    onEnter: T,
    onEnterCancelled: h,
    onLeave: p,
    onLeaveCancelled: v,
    onBeforeAppear: P = O,
    onAppear: g = T,
    onAppearCancelled: L = h
  } = t, b = (k, W, Y, ee) => {
    k._enterCancelled = ee, Gr(k, W ? c : o), Gr(k, W ? u : a), Y && Y()
  }, N = (k, W) => {
    k._isLeaving = !1, Gr(k, f), Gr(k, _), Gr(k, d), W && W()
  }, B = k => (W, Y) => {
    const ee = k ? g : T,
      X = () => b(W, k, Y);
    ln(ee, [W, X]), jc(() => {
      Gr(W, k ? l : i), ir(W, k ? c : o), Wc(ee) || Kc(W, n, E, X)
    })
  };
  return et(t, {
    onBeforeEnter(k) {
      ln(O, [k]), ir(k, i), ir(k, a)
    },
    onBeforeAppear(k) {
      ln(P, [k]), ir(k, l), ir(k, u)
    },
    onEnter: B(!1),
    onAppear: B(!0),
    onLeave(k, W) {
      k._isLeaving = !0;
      const Y = () => N(k, W);
      ir(k, f), k._enterCancelled ? (ir(k, d), Fo(k)) : (Fo(k), ir(k, d)), jc(() => {
        k._isLeaving && (Gr(k, f), ir(k, _), Wc(p) || Kc(k, n, R, Y))
      }), ln(p, [k, Y])
    },
    onEnterCancelled(k) {
      b(k, !1, void 0, !0), ln(h, [k])
    },
    onAppearCancelled(k) {
      b(k, !0, void 0, !0), ln(L, [k])
    },
    onLeaveCancelled(k) {
      N(k), ln(v, [k])
    }
  })
}

function jg(e) {
  if (e == null) return null;
  if (Ne(e)) return [qa(e.enter), qa(e.leave)];
  {
    const t = qa(e);
    return [t, t]
  }
}

function qa(e) {
  return cd(e)
}

function ir(e, t) {
  t.split(/\s+/)
    .forEach(r => r && e.classList.add(r)), (e[zn] || (e[zn] = new Set))
    .add(t)
}

function Gr(e, t) {
  t.split(/\s+/)
    .forEach(n => n && e.classList.remove(n));
  const r = e[zn];
  r && (r.delete(t), r.size || (e[zn] = void 0))
}

function jc(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let Kg = 0;

function Kc(e, t, r, n) {
  const s = e._endId = ++Kg,
    i = () => {
      s === e._endId && n()
    };
  if (r != null) return setTimeout(i, r);
  const {
    type: a,
    timeout: o,
    propCount: l
  } = Nh(e, t);
  if (!a) return n();
  const u = a + "end";
  let c = 0;
  const f = () => {
      e.removeEventListener(u, d), i()
    },
    d = _ => {
      _.target === e && ++c >= l && f()
    };
  setTimeout(() => {
    c < l && f()
  }, o + 1), e.addEventListener(u, d)
}

function Nh(e, t) {
  const r = window.getComputedStyle(e),
    n = m => (r[m] || "")
    .split(", "),
    s = n(`${Vr}Delay`),
    i = n(`${Vr}Duration`),
    a = Yc(s, i),
    o = n(`${_s}Delay`),
    l = n(`${_s}Duration`),
    u = Yc(o, l);
  let c = null,
    f = 0,
    d = 0;
  t === Vr ? a > 0 && (c = Vr, f = a, d = i.length) : t === _s ? u > 0 && (c = _s, f = u, d = l.length) : (f = Math.max(a, u), c = f > 0 ? a > u ? Vr : _s : null, d = c ? c === Vr ? i.length : l.length : 0);
  const _ = c === Vr && /\b(?:transform|all)(?:,|$)/.test(n(`${Vr}Property`)
    .toString());
  return {
    type: c,
    timeout: f,
    propCount: d,
    hasTransform: _
  }
}

function Yc(e, t) {
  for (; e.length < t.length;) e = e.concat(e);
  return Math.max(...t.map((r, n) => Xc(r) + Xc(e[n])))
}

function Xc(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1)
    .replace(",", ".")) * 1e3
}

function Fo(e) {
  return (e ? e.ownerDocument : document)
    .body.offsetHeight
}

function Yg(e, t, r) {
  const n = e[zn];
  n && (t = (t ? [t, ...n] : [...n])
    .join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t
}
const $i = Symbol("_vod"),
  Mh = Symbol("_vsh"),
  mR = {
    name: "show",
    beforeMount(e, {
      value: t
    }, {
      transition: r
    }) {
      e[$i] = e.style.display === "none" ? "" : e.style.display, r && t ? r.beforeEnter(e) : ps(e, t)
    },
    mounted(e, {
      value: t
    }, {
      transition: r
    }) {
      r && t && r.enter(e)
    },
    updated(e, {
      value: t,
      oldValue: r
    }, {
      transition: n
    }) {
      !t != !r && (n ? t ? (n.beforeEnter(e), ps(e, !0), n.enter(e)) : n.leave(e, () => {
        ps(e, !1)
      }) : ps(e, t))
    },
    beforeUnmount(e, {
      value: t
    }) {
      ps(e, t)
    }
  };

function ps(e, t) {
  e.style.display = t ? e[$i] : "none", e[Mh] = !t
}
const xh = Symbol("");

function gR(e) {
  const t = tt();
  if (!t) return;
  const r = t.ut = (s = e(t.proxy)) => {
      Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`))
        .forEach(i => Wi(i, s))
    },
    n = () => {
      const s = e(t.proxy);
      t.ce ? Wi(t.ce, s) : Ho(t.subTree, s), r(s)
    };
  Zd(() => {
    ki(n)
  }), An(() => {
    gt(n, Xt, {
      flush: "post"
    });
    const s = new MutationObserver(n);
    s.observe(t.subTree.el.parentNode, {
      childList: !0
    }), as(() => s.disconnect())
  })
}

function Ho(e, t) {
  if (e.shapeFlag & 128) {
    const r = e.suspense;
    e = r.activeBranch, r.pendingBranch && !r.isHydrating && r.effects.push(() => {
      Ho(r.activeBranch, t)
    })
  }
  for (; e.component;) e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el) Wi(e.el, t);
  else if (e.type === nt) e.children.forEach(r => Ho(r, t));
  else if (e.type === Yn) {
    let {
      el: r,
      anchor: n
    } = e;
    for (; r && (Wi(r, t), r !== n);) r = r.nextSibling
  }
}

function Wi(e, t) {
  if (e.nodeType === 1) {
    const r = e.style;
    let n = "";
    for (const s in t) {
      const i = tm(t[s]);
      r.setProperty(`--${s}`, i), n += `--${s}: ${i};`
    }
    r[xh] = n
  }
}
const Xg = /(?:^|;)\s*display\s*:/;

function qg(e, t, r) {
  const n = e.style,
    s = je(r);
  let i = !1;
  if (r && !s) {
    if (t)
      if (je(t))
        for (const a of t.split(";")) {
          const o = a.slice(0, a.indexOf(":"))
            .trim();
          r[o] == null && bi(n, o, "")
        } else
          for (const a in t) r[a] == null && bi(n, a, "");
    for (const a in r) a === "display" && (i = !0), bi(n, a, r[a])
  } else if (s) {
    if (t !== r) {
      const a = n[xh];
      a && (r += ";" + a), n.cssText = r, i = Xg.test(r)
    }
  } else t && e.removeAttribute("style");
  $i in e && (e[$i] = i ? n.display : "", e[Mh] && (n.display = "none"))
}
const qc = /\s*!important$/;

function bi(e, t, r) {
  if (fe(r)) r.forEach(n => bi(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--")) e.setProperty(t, r);
  else {
    const n = Zg(e, t);
    qc.test(r) ? e.setProperty(Nr(n), r.replace(qc, ""), "important") : e[n] = r
  }
}
const Zc = ["Webkit", "Moz", "ms"],
  Za = {};

function Zg(e, t) {
  const r = Za[t];
  if (r) return r;
  let n = Nt(t);
  if (n !== "filter" && n in e) return Za[t] = n;
  n = aa(n);
  for (let s = 0; s < Zc.length; s++) {
    const i = Zc[s] + n;
    if (i in e) return Za[t] = i
  }
  return t
}
const zc = "http://www.w3.org/1999/xlink";

function Jc(e, t, r, n, s, i = Qp(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(zc, t.slice(6, t.length)) : e.setAttributeNS(zc, t, r) : r == null || i && !ud(r) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : Jt(r) ? String(r) : r)
}

function Qc(e, t, r, n, s) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? Ih(r) : r);
    return
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
    const o = i === "OPTION" ? e.getAttribute("value") || "" : e.value,
      l = r == null ? e.type === "checkbox" ? "on" : "" : String(r);
    (o !== l || !("_value" in e)) && (e.value = l), r == null && e.removeAttribute(t), e._value = r;
    return
  }
  let a = !1;
  if (r === "" || r == null) {
    const o = typeof e[t];
    o === "boolean" ? r = ud(r) : r == null && o === "string" ? (r = "", a = !0) : o === "number" && (r = 0, a = !0)
  }
  try {
    e[t] = r
  } catch {}
  a && e.removeAttribute(s || t)
}

function Yr(e, t, r, n) {
  e.addEventListener(t, r, n)
}

function zg(e, t, r, n) {
  e.removeEventListener(t, r, n)
}
const eu = Symbol("_vei");

function Jg(e, t, r, n, s = null) {
  const i = e[eu] || (e[eu] = {}),
    a = i[t];
  if (n && a) a.value = n;
  else {
    const [o, l] = Qg(t);
    if (n) {
      const u = i[t] = rv(n, s);
      Yr(e, o, u, l)
    } else a && (zg(e, o, a, l), i[t] = void 0)
  }
}
const tu = /(?:Once|Passive|Capture)$/;

function Qg(e) {
  let t;
  if (tu.test(e)) {
    t = {};
    let n;
    for (; n = e.match(tu);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0
  }
  return [e[2] === ":" ? e.slice(3) : Nr(e.slice(2)), t]
}
let za = 0;
const ev = Promise.resolve(),
  tv = () => za || (ev.then(() => za = 0), za = Date.now());

function rv(e, t) {
  const r = n => {
    if (!n._vts) n._vts = Date.now();
    else if (n._vts <= r.attached) return;
    er(nv(n, r.value), t, 5, [n])
  };
  return r.value = e, r.attached = tv(), r
}

function nv(e, t) {
  if (fe(t)) {
    const r = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      r.call(e), e._stopped = !0
    }, t.map(n => s => !s._stopped && n && n(s))
  } else return t
}
const ru = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
  sv = (e, t, r, n, s, i) => {
    const a = s === "svg";
    t === "class" ? Yg(e, n, a) : t === "style" ? qg(e, r, n) : js(t) ? vl(t) || Jg(e, t, r, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : iv(e, t, n, a)) ? (Qc(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Jc(e, t, n, a, i, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !je(n)) ? Qc(e, Nt(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Jc(e, t, n, a))
  };

function iv(e, t, r, n) {
  if (n) return !!(t === "innerHTML" || t === "textContent" || t in e && ru(t) && pe(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE") return !1
  }
  return ru(t) && je(r) ? !1 : t in e
}
const Fh = new WeakMap,
  Hh = new WeakMap,
  ji = Symbol("_moveCb"),
  nu = Symbol("_enterCb"),
  av = e => (delete e.props.mode, e),
  ov = av({
    name: "TransitionGroup",
    props: et({}, Dh, {
      tag: String,
      moveClass: String
    }),
    setup(e, {
      slots: t
    }) {
      const r = tt(),
        n = Gd();
      let s, i;
      return Nl(() => {
        if (!s.length) return;
        const a = e.moveClass || `${e.name||"v"}-move`;
        if (!fv(s[0].el, r.vnode.el, a)) {
          s = [];
          return
        }
        s.forEach(lv), s.forEach(cv);
        const o = s.filter(uv);
        Fo(r.vnode.el), o.forEach(l => {
          const u = l.el,
            c = u.style;
          ir(u, a), c.transform = c.webkitTransform = c.transitionDuration = "";
          const f = u[ji] = d => {
            d && d.target !== u || (!d || d.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", f), u[ji] = null, Gr(u, a))
          };
          u.addEventListener("transitionend", f)
        }), s = []
      }), () => {
        const a = Se(e),
          o = kh(a);
        let l = a.tag || nt;
        if (s = [], i)
          for (let u = 0; u < i.length; u++) {
            const c = i[u];
            c.el && c.el instanceof Element && (s.push(c), Jr(c, Fs(c, o, n, r)), Fh.set(c, Bh(c.el)))
          }
        i = t.default ? Ll(t.default()) : [];
        for (let u = 0; u < i.length; u++) {
          const c = i[u];
          c.key != null && Jr(c, Fs(c, o, n, r))
        }
        return Xe(l, null, i)
      }
    }
  }),
  vR = ov;

function lv(e) {
  const t = e.el;
  t[ji] && t[ji](), t[nu] && t[nu]()
}

function cv(e) {
  Hh.set(e, Bh(e.el))
}

function uv(e) {
  const t = Fh.get(e),
    r = Hh.get(e),
    n = t.left - r.left,
    s = t.top - r.top;
  if (n || s) {
    const i = e.el,
      a = i.style,
      o = i.getBoundingClientRect();
    let l = 1,
      u = 1;
    return i.offsetWidth && (l = o.width / i.offsetWidth), i.offsetHeight && (u = o.height / i.offsetHeight), (!Number.isFinite(l) || l === 0) && (l = 1), (!Number.isFinite(u) || u === 0) && (u = 1), Math.abs(l - 1) < .01 && (l = 1), Math.abs(u - 1) < .01 && (u = 1), a.transform = a.webkitTransform = `translate(${n/l}px,${s/u}px)`, a.transitionDuration = "0s", e
  }
}

function Bh(e) {
  const t = e.getBoundingClientRect();
  return {
    left: t.left,
    top: t.top
  }
}

function fv(e, t, r) {
  const n = e.cloneNode(),
    s = e[zn];
  s && s.forEach(o => {
      o.split(/\s+/)
        .forEach(l => l && n.classList.remove(l))
    }), r.split(/\s+/)
    .forEach(o => o && n.classList.add(o)), n.style.display = "none";
  const i = t.nodeType === 1 ? t : t.parentNode;
  i.appendChild(n);
  const {
    hasTransform: a
  } = Nh(n);
  return i.removeChild(n), a
}
const Jn = e => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return fe(t) ? r => $n(t, r) : t
};

function dv(e) {
  e.target.composing = !0
}

function su(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
}
const Rr = Symbol("_assign");

function iu(e, t, r) {
  return t && (e = e.trim()), r && (e = wl(e)), e
}
const yR = {
    created(e, {
      modifiers: {
        lazy: t,
        trim: r,
        number: n
      }
    }, s) {
      e[Rr] = Jn(s);
      const i = n || s.props && s.props.type === "number";
      Yr(e, t ? "change" : "input", a => {
        a.target.composing || e[Rr](iu(e.value, r, i))
      }), (r || i) && Yr(e, "change", () => {
        e.value = iu(e.value, r, i)
      }), t || (Yr(e, "compositionstart", dv), Yr(e, "compositionend", su), Yr(e, "change", su))
    },
    mounted(e, {
      value: t
    }) {
      e.value = t ?? ""
    },
    beforeUpdate(e, {
      value: t,
      oldValue: r,
      modifiers: {
        lazy: n,
        trim: s,
        number: i
      }
    }, a) {
      if (e[Rr] = Jn(a), e.composing) return;
      const o = (i || e.type === "number") && !/^0\d/.test(e.value) ? wl(e.value) : e.value,
        l = t ?? "";
      o !== l && (document.activeElement === e && e.type !== "range" && (n && t === r || s && e.value.trim() === l) || (e.value = l))
    }
  },
  ER = {
    deep: !0,
    created(e, t, r) {
      e[Rr] = Jn(r), Yr(e, "change", () => {
        const n = e._modelValue,
          s = Vh(e),
          i = e.checked,
          a = e[Rr];
        if (fe(n)) {
          const o = fd(n, s),
            l = o !== -1;
          if (i && !l) a(n.concat(s));
          else if (!i && l) {
            const u = [...n];
            u.splice(o, 1), a(u)
          }
        } else if (na(n)) {
          const o = new Set(n);
          i ? o.add(s) : o.delete(s), a(o)
        } else a(Uh(e, i))
      })
    },
    mounted: au,
    beforeUpdate(e, t, r) {
      e[Rr] = Jn(r), au(e, t, r)
    }
  };

function au(e, {
  value: t,
  oldValue: r
}, n) {
  e._modelValue = t;
  let s;
  if (fe(t)) s = fd(t, n.props.value) > -1;
  else if (na(t)) s = t.has(n.props.value);
  else {
    if (t === r) return;
    s = bn(t, Uh(e, !0))
  }
  e.checked !== s && (e.checked = s)
}
const wR = {
  created(e, {
    value: t
  }, r) {
    e.checked = bn(t, r.props.value), e[Rr] = Jn(r), Yr(e, "change", () => {
      e[Rr](Vh(e))
    })
  },
  beforeUpdate(e, {
    value: t,
    oldValue: r
  }, n) {
    e[Rr] = Jn(n), t !== r && (e.checked = bn(t, n.props.value))
  }
};

function Vh(e) {
  return "_value" in e ? e._value : e.value
}

function Uh(e, t) {
  const r = t ? "_trueValue" : "_falseValue";
  return r in e ? e[r] : t
}
const hv = ["ctrl", "shift", "alt", "meta"],
  _v = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => "button" in e && e.button !== 0,
    middle: e => "button" in e && e.button !== 1,
    right: e => "button" in e && e.button !== 2,
    exact: (e, t) => hv.some(r => e[`${r}Key`] && !t.includes(r))
  },
  bR = (e, t) => {
    if (!e) return e;
    const r = e._withMods || (e._withMods = {}),
      n = t.join(".");
    return r[n] || (r[n] = ((s, ...i) => {
      for (let a = 0; a < t.length; a++) {
        const o = _v[t[a]];
        if (o && o(s, t)) return
      }
      return e(s, ...i)
    }))
  },
  pv = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
  },
  TR = (e, t) => {
    const r = e._withKeys || (e._withKeys = {}),
      n = t.join(".");
    return r[n] || (r[n] = (s => {
      if (!("key" in s)) return;
      const i = Nr(s.key);
      if (t.some(a => a === i || pv[a] === i)) return e(s)
    }))
  },
  Gh = et({
    patchProp: sv
  }, Gg);
let Rs, ou = !1;

function mv() {
  return Rs || (Rs = wg(Gh))
}

function gv() {
  return Rs = ou ? Rs : bg(Gh), ou = !0, Rs
}
const vv = ((...e) => {
    const t = mv()
      .createApp(...e),
      {
        mount: r
      } = t;
    return t.mount = n => {
      const s = Wh(n);
      if (!s) return;
      const i = t._component;
      !pe(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
      const a = r(s, !1, $h(s));
      return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), a
    }, t
  }),
  yv = ((...e) => {
    const t = gv()
      .createApp(...e),
      {
        mount: r
      } = t;
    return t.mount = n => {
      const s = Wh(n);
      if (s) return r(s, !0, $h(s))
    }, t
  });

function $h(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml"
}

function Wh(e) {
  return je(e) ? document.querySelector(e) : e
}
const Ev = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  wv = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  bv = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;

function Tv(e, t) {
  if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype" in t) {
    Sv(e);
    return
  }
  return t
}

function Sv(e) {
  console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)
}

function Ki(e, t = {}) {
  if (typeof e != "string") return e;
  if (e[0] === '"' && e[e.length - 1] === '"' && e.indexOf("\\") === -1) return e.slice(1, -1);
  const r = e.trim();
  if (r.length <= 9) switch (r.toLowerCase()) {
    case "true":
      return !0;
    case "false":
      return !1;
    case "undefined":
      return;
    case "null":
      return null;
    case "nan":
      return Number.NaN;
    case "infinity":
      return Number.POSITIVE_INFINITY;
    case "-infinity":
      return Number.NEGATIVE_INFINITY
  }
  if (!bv.test(e)) {
    if (t.strict) throw new SyntaxError("[destr] Invalid JSON");
    return e
  }
  try {
    if (Ev.test(e) || wv.test(e)) {
      if (t.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(e, Tv)
    }
    return JSON.parse(e)
  } catch (n) {
    if (t.strict) throw n;
    return e
  }
}
const Pv = /#/g,
  Cv = /&/g,
  Av = /\//g,
  Rv = /=/g,
  Gl = /\+/g,
  Ov = /%5e/gi,
  Iv = /%60/gi,
  Lv = /%7c/gi,
  Dv = /%20/gi;

function kv(e) {
  return encodeURI("" + e)
    .replace(Lv, "|")
}

function Bo(e) {
  return kv(typeof e == "string" ? e : JSON.stringify(e))
    .replace(Gl, "%2B")
    .replace(Dv, "+")
    .replace(Pv, "%23")
    .replace(Cv, "%26")
    .replace(Iv, "`")
    .replace(Ov, "^")
    .replace(Av, "%2F")
}

function Ja(e) {
  return Bo(e)
    .replace(Rv, "%3D")
}

function Yi(e = "") {
  try {
    return decodeURIComponent("" + e)
  } catch {
    return "" + e
  }
}

function Nv(e) {
  return Yi(e.replace(Gl, " "))
}

function Mv(e) {
  return Yi(e.replace(Gl, " "))
}

function jh(e = "") {
  const t = Object.create(null);
  e[0] === "?" && (e = e.slice(1));
  for (const r of e.split("&")) {
    const n = r.match(/([^=]+)=?(.*)/) || [];
    if (n.length < 2) continue;
    const s = Nv(n[1]);
    if (s === "__proto__" || s === "constructor") continue;
    const i = Mv(n[2] || "");
    t[s] === void 0 ? t[s] = i : Array.isArray(t[s]) ? t[s].push(i) : t[s] = [t[s], i]
  }
  return t
}

function xv(e, t) {
  return (typeof t == "number" || typeof t == "boolean") && (t = String(t)), t ? Array.isArray(t) ? t.map(r => `${Ja(e)}=${Bo(r)}`)
    .join("&") : `${Ja(e)}=${Bo(t)}` : Ja(e)
}

function Fv(e) {
  return Object.keys(e)
    .filter(t => e[t] !== void 0)
    .map(t => xv(t, e[t]))
    .filter(Boolean)
    .join("&")
}
const Hv = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
  Bv = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
  Vv = /^([/\\]\s*){2,}[^/\\]/,
  Uv = /^[\s\0]*(blob|data|javascript|vbscript):$/i,
  Gv = /\/$|\/\?|\/#/,
  $v = /^\.?\//;

function Rn(e, t = {}) {
  return typeof t == "boolean" && (t = {
    acceptRelative: t
  }), t.strict ? Hv.test(e) : Bv.test(e) || (t.acceptRelative ? Vv.test(e) : !1)
}

function Wv(e) {
  return !!e && Uv.test(e)
}

function Vo(e = "", t) {
  return t ? Gv.test(e) : e.endsWith("/")
}

function Vs(e = "", t) {
  if (!t) return (Vo(e) ? e.slice(0, -1) : e) || "/";
  if (!Vo(e, !0)) return e || "/";
  let r = e,
    n = "";
  const s = e.indexOf("#");
  s !== -1 && (r = e.slice(0, s), n = e.slice(s));
  const [i, ...a] = r.split("?");
  return ((i.endsWith("/") ? i.slice(0, -1) : i) || "/") + (a.length > 0 ? `?${a.join("?")}` : "") + n
}

function jv(e = "", t) {
  if (!t) return e.endsWith("/") ? e : e + "/";
  if (Vo(e, !0)) return e || "/";
  let r = e,
    n = "";
  const s = e.indexOf("#");
  if (s !== -1 && (r = e.slice(0, s), n = e.slice(s), !r)) return n;
  const [i, ...a] = r.split("?");
  return i + "/" + (a.length > 0 ? `?${a.join("?")}` : "") + n
}

function SR(e = "") {
  return e.split("://")
    .map(t => t.replace(/\/{2,}/g, "/"))
    .join("://")
}

function Kv(e, t) {
  if (Yh(t) || Rn(e)) return e;
  const r = Vs(t);
  return e.startsWith(r) ? e : Xh(r, e)
}

function lu(e, t) {
  if (Yh(t)) return e;
  const r = Vs(t);
  if (!e.startsWith(r)) return e;
  const n = e.slice(r.length);
  return n[0] === "/" ? n : "/" + n
}

function Kh(e, t) {
  const r = zh(e),
    n = {
      ...jh(r.search),
      ...t
    };
  return r.search = Fv(n), qv(r)
}

function Yh(e) {
  return !e || e === "/"
}

function Yv(e) {
  return e && e !== "/"
}

function Xh(e, ...t) {
  let r = e || "";
  for (const n of t.filter(s => Yv(s)))
    if (r) {
      const s = n.replace($v, "");
      r = jv(r) + s
    } else r = n;
  return r
}

function qh(...e) {
  var a, o, l, u;
  const t = /\/(?!\/)/,
    r = e.filter(Boolean),
    n = [];
  let s = 0;
  for (const c of r)
    if (!(!c || c === "/")) {
      for (const [f, d] of c.split(t)
        .entries())
        if (!(!d || d === ".")) {
          if (d === "..") {
            if (n.length === 1 && Rn(n[0])) continue;
            n.pop(), s--;
            continue
          }
          if (f === 1 && ((a = n[n.length - 1]) != null && a.endsWith(":/"))) {
            n[n.length - 1] += "/" + d;
            continue
          }
          n.push(d), s++
        }
    } let i = n.join("/");
  return s >= 0 ? (o = r[0]) != null && o.startsWith("/") && !i.startsWith("/") ? i = "/" + i : (l = r[0]) != null && l.startsWith("./") && !i.startsWith("./") && (i = "./" + i) : i = "../".repeat(-1 * s) + i, (u = r[r.length - 1]) != null && u.endsWith("/") && !i.endsWith("/") && (i += "/"), i
}

function Xv(e, t) {
  return Yi(Vs(e)) === Yi(Vs(t))
}
const Zh = Symbol.for("ufo:protocolRelative");

function zh(e = "", t) {
  const r = e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (r) {
    const [, f, d = ""] = r;
    return {
      protocol: f.toLowerCase(),
      pathname: d,
      href: f + d,
      auth: "",
      host: "",
      search: "",
      hash: ""
    }
  }
  if (!Rn(e, {
      acceptRelative: !0
    })) return cu(e);
  const [, n = "", s, i = ""] = e.replace(/\\/g, "/")
    .match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, a = "", o = ""] = i.match(/([^#/?]*)(.*)?/) || [];
  n === "file:" && (o = o.replace(/\/(?=[A-Za-z]:)/, ""));
  const {
    pathname: l,
    search: u,
    hash: c
  } = cu(o);
  return {
    protocol: n.toLowerCase(),
    auth: s ? s.slice(0, Math.max(0, s.length - 1)) : "",
    host: a,
    pathname: l,
    search: u,
    hash: c,
    [Zh]: !n
  }
}

function cu(e = "") {
  const [t = "", r = "", n = ""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || [])
  .splice(1);
  return {
    pathname: t,
    search: r,
    hash: n
  }
}

function qv(e) {
  const t = e.pathname || "",
    r = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : "",
    n = e.hash || "",
    s = e.auth ? e.auth + "@" : "",
    i = e.host || "";
  return (e.protocol || e[Zh] ? (e.protocol || "") + "//" : "") + s + i + t + r + n
}
class Zv extends Error {
  constructor(t, r) {
    super(t, r), this.name = "FetchError", r != null && r.cause && !this.cause && (this.cause = r.cause)
  }
}

function zv(e) {
  var l, u, c, f, d;
  const t = ((l = e.error) == null ? void 0 : l.message) || ((u = e.error) == null ? void 0 : u.toString()) || "",
    r = ((c = e.request) == null ? void 0 : c.method) || ((f = e.options) == null ? void 0 : f.method) || "GET",
    n = ((d = e.request) == null ? void 0 : d.url) || String(e.request) || "/",
    s = `[${r}] ${JSON.stringify(n)}`,
    i = e.response ? `${e.response.status} ${e.response.statusText}` : "<no response>",
    a = `${s}: ${i}${t?` ${t}`:""}`,
    o = new Zv(a, e.error ? {
      cause: e.error
    } : void 0);
  for (const _ of ["request", "options", "response"]) Object.defineProperty(o, _, {
    get() {
      return e[_]
    }
  });
  for (const [_, m] of [
      ["data", "_data"],
      ["status", "status"],
      ["statusCode", "status"],
      ["statusText", "statusText"],
      ["statusMessage", "statusText"]
    ]) Object.defineProperty(o, _, {
    get() {
      return e.response && e.response[m]
    }
  });
  return o
}
const Jv = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));

function uu(e = "GET") {
  return Jv.has(e.toUpperCase())
}

function Qv(e) {
  if (e === void 0) return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean" || t === null ? !0 : t !== "object" ? !1 : Array.isArray(e) ? !0 : e.buffer || e instanceof FormData || e instanceof URLSearchParams ? !1 : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function"
}
const ey = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]),
  ty = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;

function ry(e = "") {
  if (!e) return "json";
  const t = e.split(";")
    .shift() || "";
  return ty.test(t) ? "json" : t === "text/event-stream" ? "stream" : ey.has(t) || t.startsWith("text/") ? "text" : "blob"
}

function ny(e, t, r, n) {
  const s = sy((t == null ? void 0 : t.headers) ?? (e == null ? void 0 : e.headers), r == null ? void 0 : r.headers, n);
  let i;
  return (r != null && r.query || r != null && r.params || t != null && t.params || t != null && t.query) && (i = {
    ...r == null ? void 0 : r.params,
    ...r == null ? void 0 : r.query,
    ...t == null ? void 0 : t.params,
    ...t == null ? void 0 : t.query
  }), {
    ...r,
    ...t,
    query: i,
    params: i,
    headers: s
  }
}

function sy(e, t, r) {
  if (!t) return new r(e);
  const n = new r(t);
  if (e)
    for (const [s, i] of Symbol.iterator in e || Array.isArray(e) ? e : new r(e)) n.set(s, i);
  return n
}
async function hi(e, t) {
  if (t)
    if (Array.isArray(t))
      for (const r of t) await r(e);
    else await t(e)
}
const iy = new Set([408, 409, 425, 429, 500, 502, 503, 504]),
  ay = new Set([101, 204, 205, 304]);

function Jh(e = {}) {
  const {
    fetch: t = globalThis.fetch,
    Headers: r = globalThis.Headers,
    AbortController: n = globalThis.AbortController
  } = e;
  async function s(o) {
    const l = o.error && o.error.name === "AbortError" && !o.options.timeout || !1;
    if (o.options.retry !== !1 && !l) {
      let c;
      typeof o.options.retry == "number" ? c = o.options.retry : c = uu(o.options.method) ? 0 : 1;
      const f = o.response && o.response.status || 500;
      if (c > 0 && (Array.isArray(o.options.retryStatusCodes) ? o.options.retryStatusCodes.includes(f) : iy.has(f))) {
        const d = typeof o.options.retryDelay == "function" ? o.options.retryDelay(o) : o.options.retryDelay || 0;
        return d > 0 && await new Promise(_ => setTimeout(_, d)), i(o.request, {
          ...o.options,
          retry: c - 1
        })
      }
    }
    const u = zv(o);
    throw Error.captureStackTrace && Error.captureStackTrace(u, i), u
  }
  const i = async function(l, u = {}) {
    const c = {
      request: l,
      options: ny(l, u, e.defaults, r),
      response: void 0,
      error: void 0
    };
    if (c.options.method && (c.options.method = c.options.method.toUpperCase()), c.options.onRequest && (await hi(c, c.options.onRequest), c.options.headers instanceof r || (c.options.headers = new r(c.options.headers || {}))), typeof c.request == "string" && (c.options.baseURL && (c.request = Kv(c.request, c.options.baseURL)), c.options.query && (c.request = Kh(c.request, c.options.query), delete c.options.query), "query" in c.options && delete c.options.query, "params" in c.options && delete c.options.params), c.options.body && uu(c.options.method))
      if (Qv(c.options.body)) {
        const _ = c.options.headers.get("content-type");
        typeof c.options.body != "string" && (c.options.body = _ === "application/x-www-form-urlencoded" ? new URLSearchParams(c.options.body)
          .toString() : JSON.stringify(c.options.body)), _ || c.options.headers.set("content-type", "application/json"), c.options.headers.has("accept") || c.options.headers.set("accept", "application/json")
      } else("pipeTo" in c.options.body && typeof c.options.body.pipeTo == "function" || typeof c.options.body.pipe == "function") && ("duplex" in c.options || (c.options.duplex = "half"));
    let f;
    if (!c.options.signal && c.options.timeout) {
      const _ = new n;
      f = setTimeout(() => {
        const m = new Error("[TimeoutError]: The operation was aborted due to timeout");
        m.name = "TimeoutError", m.code = 23, _.abort(m)
      }, c.options.timeout), c.options.signal = _.signal
    }
    try {
      c.response = await t(c.request, c.options)
    } catch (_) {
      return c.error = _, c.options.onRequestError && await hi(c, c.options.onRequestError), await s(c)
    } finally {
      f && clearTimeout(f)
    }
    if ((c.response.body || c.response._bodyInit) && !ay.has(c.response.status) && c.options.method !== "HEAD") {
      const _ = (c.options.parseResponse ? "json" : c.options.responseType) || ry(c.response.headers.get("content-type") || "");
      switch (_) {
        case "json": {
          const m = await c.response.text(),
            E = c.options.parseResponse || Ki;
          c.response._data = E(m);
          break
        }
        case "stream": {
          c.response._data = c.response.body || c.response._bodyInit;
          break
        }
        default:
          c.response._data = await c.response[_]()
      }
    }
    return c.options.onResponse && await hi(c, c.options.onResponse), !c.options.ignoreResponseError && c.response.status >= 400 && c.response.status < 600 ? (c.options.onResponseError && await hi(c, c.options.onResponseError), await s(c)) : c.response
  }, a = async function(l, u) {
    return (await i(l, u))
      ._data
  };
  return a.raw = i, a.native = (...o) => t(...o), a.create = (o = {}, l = {}) => Jh({
    ...e,
    ...l,
    defaults: {
      ...e.defaults,
      ...l.defaults,
      ...o
    }
  }), a
}
const Xi = (function() {
    if (typeof globalThis < "u") return globalThis;
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof global < "u") return global;
    throw new Error("unable to locate global object")
  })(),
  oy = Xi.fetch ? (...e) => Xi.fetch(...e) : () => Promise.reject(new Error("[ofetch] global.fetch is not supported!")),
  ly = Xi.Headers,
  cy = Xi.AbortController,
  uy = Jh({
    fetch: oy,
    Headers: ly,
    AbortController: cy
  }),
  fy = uy,
  dy = () => {
    var e;
    return ((e = window == null ? void 0 : window.__NUXT__) == null ? void 0 : e.config) || {}
  },
  qi = dy()
  .app,
  hy = () => qi.baseURL,
  _y = () => qi.buildAssetsDir,
  $l = (...e) => qh(Qh(), _y(), ...e),
  Qh = (...e) => {
    const t = qi.cdnURL || qi.baseURL;
    return e.length ? qh(t, ...e) : t
  };
globalThis.__buildAssetsURL = $l, globalThis.__publicAssetsURL = Qh;
globalThis.$fetch || (globalThis.$fetch = fy.create({
  baseURL: hy()
}));

function Uo(e, t = {}, r) {
  for (const n in e) {
    const s = e[n],
      i = r ? `${r}:${n}` : n;
    typeof s == "object" && s !== null ? Uo(s, t, i) : typeof s == "function" && (t[i] = s)
  }
  return t
}
const py = {
    run: e => e()
  },
  my = () => py,
  e_ = typeof console.createTask < "u" ? console.createTask : my;

function gy(e, t) {
  const r = t.shift(),
    n = e_(r);
  return e.reduce((s, i) => s.then(() => n.run(() => i(...t))), Promise.resolve())
}

function vy(e, t) {
  const r = t.shift(),
    n = e_(r);
  return Promise.all(e.map(s => n.run(() => s(...t))))
}

function Qa(e, t) {
  for (const r of [...e]) r(t)
}
let yy = class {
  constructor() {
    this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this)
  }
  hook(t, r, n = {}) {
    if (!t || typeof r != "function") return () => {};
    const s = t;
    let i;
    for (; this._deprecatedHooks[t];) i = this._deprecatedHooks[t], t = i.to;
    if (i && !n.allowDeprecated) {
      let a = i.message;
      a || (a = `${s} hook has been deprecated` + (i.to ? `, please use ${i.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = new Set), this._deprecatedMessages.has(a) || (console.warn(a), this._deprecatedMessages.add(a))
    }
    if (!r.name) try {
      Object.defineProperty(r, "name", {
        get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb",
        configurable: !0
      })
    } catch {}
    return this._hooks[t] = this._hooks[t] || [], this._hooks[t].push(r), () => {
      r && (this.removeHook(t, r), r = void 0)
    }
  }
  hookOnce(t, r) {
    let n, s = (...i) => (typeof n == "function" && n(), n = void 0, s = void 0, r(...i));
    return n = this.hook(t, s), n
  }
  removeHook(t, r) {
    if (this._hooks[t]) {
      const n = this._hooks[t].indexOf(r);
      n !== -1 && this._hooks[t].splice(n, 1), this._hooks[t].length === 0 && delete this._hooks[t]
    }
  }
  deprecateHook(t, r) {
    this._deprecatedHooks[t] = typeof r == "string" ? {
      to: r
    } : r;
    const n = this._hooks[t] || [];
    delete this._hooks[t];
    for (const s of n) this.hook(t, s)
  }
  deprecateHooks(t) {
    Object.assign(this._deprecatedHooks, t);
    for (const r in t) this.deprecateHook(r, t[r])
  }
  addHooks(t) {
    const r = Uo(t),
      n = Object.keys(r)
      .map(s => this.hook(s, r[s]));
    return () => {
      for (const s of n.splice(0, n.length)) s()
    }
  }
  removeHooks(t) {
    const r = Uo(t);
    for (const n in r) this.removeHook(n, r[n])
  }
  removeAllHooks() {
    for (const t in this._hooks) delete this._hooks[t]
  }
  callHook(t, ...r) {
    return r.unshift(t), this.callHookWith(gy, t, ...r)
  }
  callHookParallel(t, ...r) {
    return r.unshift(t), this.callHookWith(vy, t, ...r)
  }
  callHookWith(t, r, ...n) {
    const s = this._before || this._after ? {
      name: r,
      args: n,
      context: {}
    } : void 0;
    this._before && Qa(this._before, s);
    const i = t(r in this._hooks ? [...this._hooks[r]] : [], n);
    return i instanceof Promise ? i.finally(() => {
      this._after && s && Qa(this._after, s)
    }) : (this._after && s && Qa(this._after, s), i)
  }
  beforeEach(t) {
    return this._before = this._before || [], this._before.push(t), () => {
      if (this._before !== void 0) {
        const r = this._before.indexOf(t);
        r !== -1 && this._before.splice(r, 1)
      }
    }
  }
  afterEach(t) {
    return this._after = this._after || [], this._after.push(t), () => {
      if (this._after !== void 0) {
        const r = this._after.indexOf(t);
        r !== -1 && this._after.splice(r, 1)
      }
    }
  }
};

function Ey() {
  return new yy
}

function wy(e = {}) {
  let t, r = !1;
  const n = a => {
    if (t && t !== a) throw new Error("Context conflict")
  };
  let s;
  if (e.asyncContext) {
    const a = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    a ? s = new a : console.warn("[unctx] `AsyncLocalStorage` is not provided.")
  }
  const i = () => {
    if (s) {
      const a = s.getStore();
      if (a !== void 0) return a
    }
    return t
  };
  return {
    use: () => {
      const a = i();
      if (a === void 0) throw new Error("Context is not available");
      return a
    },
    tryUse: () => i(),
    set: (a, o) => {
      o || n(a), t = a, r = !0
    },
    unset: () => {
      t = void 0, r = !1
    },
    call: (a, o) => {
      n(a), t = a;
      try {
        return s ? s.run(a, o) : o()
      } finally {
        r || (t = void 0)
      }
    },
    async callAsync(a, o) {
      t = a;
      const l = () => {
          t = a
        },
        u = () => t === a ? l : void 0;
      Go.add(u);
      try {
        const c = s ? s.run(a, o) : o();
        return r || (t = void 0), await c
      } finally {
        Go.delete(u)
      }
    }
  }
}

function by(e = {}) {
  const t = {};
  return {
    get(r, n = {}) {
      return t[r] || (t[r] = wy({
        ...e,
        ...n
      })), t[r]
    }
  }
}
const Zi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {},
  fu = "__unctx__",
  Ty = Zi[fu] || (Zi[fu] = by()),
  Sy = (e, t = {}) => Ty.get(e, t),
  du = "__unctx_async_handlers__",
  Go = Zi[du] || (Zi[du] = new Set);

function zr(e) {
  const t = [];
  for (const s of Go) {
    const i = s();
    i && t.push(i)
  }
  const r = () => {
    for (const s of t) s()
  };
  let n = e();
  return n && typeof n == "object" && "catch" in n && (n = n.catch(s => {
    throw r(), s
  })), [n, r]
}
const Py = !1,
  hu = !1,
  Cy = !1,
  CR = {
    componentName: "NuxtLink",
    prefetch: !0,
    prefetchOn: {
      visibility: !0
    }
  },
  Cr = {
    value: null,
    errorValue: null,
    deep: !0
  },
  Ay = null,
  Ry = "#pdp-view",
  t_ = "pdp-view",
  _u = 36e5,
  Oy = "vite:preloadError";

function r_(e = t_) {
  return Sy(e, {
    asyncContext: !1
  })
}
const Iy = "__nuxt_plugin";

function Ly(e) {
  var s;
  let t = 0;
  const r = {
    _id: e.id || t_ || "nuxt-app",
    _scope: ss(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.17.2"
      },
      get vue() {
        return r.vueApp.version
      }
    },
    payload: Pr({
      ...((s = e.ssrContext) == null ? void 0 : s.payload) || {},
      data: Pr({}),
      state: Mr({}),
      once: new Set,
      _errors: Pr({})
    }),
    static: {
      data: {}
    },
    runWithContext(i) {
      return r._scope.active && !ua() ? r._scope.run(() => pu(r, i)) : pu(r, i)
    },
    isHydrating: !0,
    deferHydration() {
      if (!r.isHydrating) return () => {};
      t++;
      let i = !1;
      return () => {
        if (!i && (i = !0, t--, t === 0)) return r.isHydrating = !1, r.callHook("app:suspense:resolve")
      }
    },
    _asyncDataPromises: {},
    _asyncData: Pr({}),
    _payloadRevivers: {},
    ...e
  };
  {
    const i = window.__NUXT__;
    if (i)
      for (const a in i) switch (a) {
        case "data":
        case "state":
        case "_errors":
          Object.assign(r.payload[a], i[a]);
          break;
        default:
          r.payload[a] = i[a]
      }
  }
  r.hooks = Ey(), r.hook = r.hooks.hook, r.callHook = r.hooks.callHook, r.provide = (i, a) => {
    const o = "$" + i;
    _i(r, o, a), _i(r.vueApp.config.globalProperties, o, a)
  }, _i(r.vueApp, "$nuxt", r), _i(r.vueApp.config.globalProperties, "$nuxt", r);
  {
    window.addEventListener(Oy, a => {
      r.callHook("app:chunkError", {
        error: a.payload
      }), (r.isHydrating || a.payload.message.includes("Unable to preload CSS")) && a.preventDefault()
    }), window.useNuxtApp || (window.useNuxtApp = qe);
    const i = r.hook("app:error", (...a) => {
      console.error("[nuxt] error caught during app initialization", ...a)
    });
    r.hook("app:mounted", i)
  }
  const n = r.payload.config;
  return r.provide("config", n), r
}

function Dy(e, t) {
  t.hooks && e.hooks.addHooks(t.hooks)
}
async function ky(e, t) {
  if (typeof t == "function") {
    const {
      provide: r
    } = await e.runWithContext(() => t(e)) || {};
    if (r && typeof r == "object")
      for (const n in r) e.provide(n, r[n])
  }
}
async function Ny(e, t) {
  const r = [],
    n = [],
    s = [],
    i = [];
  let a = 0;
  async function o(l) {
    var c;
    const u = ((c = l.dependsOn) == null ? void 0 : c.filter(f => t.some(d => d._name === f) && !r.includes(f))) ?? [];
    if (u.length > 0) n.push([new Set(u), l]);
    else {
      const f = ky(e, l)
        .then(async () => {
          l._name && (r.push(l._name), await Promise.all(n.map(async ([d, _]) => {
            d.has(l._name) && (d.delete(l._name), d.size === 0 && (a++, await o(_)))
          })))
        });
      l.parallel ? s.push(f.catch(d => i.push(d))) : await f
    }
  }
  for (const l of t) Dy(e, l);
  for (const l of t) await o(l);
  if (await Promise.all(s), a)
    for (let l = 0; l < a; l++) await Promise.all(s);
  if (i.length) throw i[0]
}

function Ke(e) {
  if (typeof e == "function") return e;
  const t = e._name || e.name;
  return delete e.name, Object.assign(e.setup || (() => {}), e, {
    [Iy]: !0,
    _name: t
  })
}

function pu(e, t, r) {
  const n = () => t();
  return r_(e._id)
    .set(e), e.vueApp.runWithContext(n)
}

function My(e) {
  var r;
  let t;
  return Ys() && (t = (r = tt()) == null ? void 0 : r.appContext.app.$nuxt), t || (t = r_(e)
    .tryUse()), t || null
}

function qe(e) {
  const t = My(e);
  if (!t) throw new Error("[nuxt] instance unavailable");
  return t
}

function Fr(e) {
  return qe()
    .$config
}

function _i(e, t, r) {
  Object.defineProperty(e, t, {
    get: () => r
  })
}

function xy(e, t) {
  return {
    ctx: {
      table: e
    },
    matchAll: r => s_(r, e)
  }
}

function n_(e) {
  const t = {};
  for (const r in e) t[r] = r === "dynamic" ? new Map(Object.entries(e[r])
    .map(([n, s]) => [n, n_(s)])) : new Map(Object.entries(e[r]));
  return t
}

function Fy(e) {
  return xy(n_(e))
}

function s_(e, t, r) {
  e.endsWith("/") && (e = e.slice(0, -1) || "/");
  const n = [];
  for (const [i, a] of mu(t.wildcard))(e === i || e.startsWith(i + "/")) && n.push(a);
  for (const [i, a] of mu(t.dynamic))
    if (e.startsWith(i + "/")) {
      const o = "/" + e.slice(i.length)
        .split("/")
        .splice(2)
        .join("/");
      n.push(...s_(o, a))
    } const s = t.static.get(e);
  return s && n.push(s), n.filter(Boolean)
}

function mu(e) {
  return [...e.entries()].sort((t, r) => t[0].length - r[0].length)
}

function eo(e) {
  if (e === null || typeof e != "object") return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0
}

function $o(e, t, r = ".", n) {
  if (!eo(t)) return $o(e, {}, r, n);
  const s = Object.assign({}, t);
  for (const i in e) {
    if (i === "__proto__" || i === "constructor") continue;
    const a = e[i];
    a != null && (n && n(s, i, a, r) || (Array.isArray(a) && Array.isArray(s[i]) ? s[i] = [...a, ...s[i]] : eo(a) && eo(s[i]) ? s[i] = $o(a, s[i], (r ? `${r}.` : "") + i.toString(), n) : s[i] = a))
  }
  return s
}

function Hy(e) {
  return (...t) => t.reduce((r, n) => $o(r, n, "", e), {})
}
const i_ = Hy();

function By(e, t) {
  try {
    return t in e
  } catch {
    return !1
  }
}
class Wo extends Error {
  constructor(r, n = {}) {
    super(r, n);
    Lt(this, "statusCode", 500);
    Lt(this, "fatal", !1);
    Lt(this, "unhandled", !1);
    Lt(this, "statusMessage");
    Lt(this, "data");
    Lt(this, "cause");
    n.cause && !this.cause && (this.cause = n.cause)
  }
  toJSON() {
    const r = {
      message: this.message,
      statusCode: jo(this.statusCode, 500)
    };
    return this.statusMessage && (r.statusMessage = a_(this.statusMessage)), this.data !== void 0 && (r.data = this.data), r
  }
}
Lt(Wo, "__h3_error__", !0);

function Vy(e) {
  if (typeof e == "string") return new Wo(e);
  if (Uy(e)) return e;
  const t = new Wo(e.message ?? e.statusMessage ?? "", {
    cause: e.cause || e
  });
  if (By(e, "stack")) try {
    Object.defineProperty(t, "stack", {
      get() {
        return e.stack
      }
    })
  } catch {
    try {
      t.stack = e.stack
    } catch {}
  }
  if (e.data && (t.data = e.data), e.statusCode ? t.statusCode = jo(e.statusCode, t.statusCode) : e.status && (t.statusCode = jo(e.status, t.statusCode)), e.statusMessage ? t.statusMessage = e.statusMessage : e.statusText && (t.statusMessage = e.statusText), t.statusMessage) {
    const r = t.statusMessage;
    a_(t.statusMessage) !== r && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")
  }
  return e.fatal !== void 0 && (t.fatal = e.fatal), e.unhandled !== void 0 && (t.unhandled = e.unhandled), t
}

function Uy(e) {
  var t;
  return ((t = e == null ? void 0 : e.constructor) == null ? void 0 : t.__h3_error__) === !0
}
const Gy = /[^\u0009\u0020-\u007E]/g;

function a_(e = "") {
  return e.replace(Gy, "")
}

function jo(e, t = 200) {
  return !e || (typeof e == "string" && (e = Number.parseInt(e, 10)), e < 100 || e > 999) ? t : e
}
const o_ = Symbol("layout-meta"),
  Cn = Symbol("route"),
  Ut = () => {
    var e;
    return (e = qe()) == null ? void 0 : e.$router
  },
  os = () => Ys() ? at(Cn, qe()
    ._route) : qe()
  ._route;

function AR(e) {
  return e
}
const $y = (e, t, r = {}) => {
    const n = qe(),
      s = r.global || typeof e != "string",
      i = typeof e != "string" ? e : t;
    if (!i) {
      console.warn("[nuxt] No route middleware passed to `addRouteMiddleware`.", e);
      return
    }
    s ? n._middleware.global.push(i) : n._middleware.named[e] = i
  },
  Wy = () => {
    try {
      if (qe()
        ._processingMiddleware) return !0
    } catch {
      return !1
    }
    return !1
  },
  gu = (e, t) => {
    e || (e = "/");
    const r = typeof e == "string" ? e : "path" in e ? jy(e) : Ut()
      .resolve(e)
      .href;
    if (t != null && t.open) {
      const {
        target: l = "_blank",
        windowFeatures: u = {}
      } = t.open, c = Object.entries(u)
        .filter(([f, d]) => d !== void 0)
        .map(([f, d]) => `${f.toLowerCase()}=${d}`)
        .join(", ");
      return open(r, l, c), Promise.resolve()
    }
    const n = Rn(r, {
        acceptRelative: !0
      }),
      s = (t == null ? void 0 : t.external) || n;
    if (s) {
      if (!(t != null && t.external)) throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
      const {
        protocol: l
      } = new URL(r, window.location.href);
      if (l && Wv(l)) throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)
    }
    const i = Wy();
    if (!s && i) {
      if (t != null && t.replace) {
        if (typeof e == "string") {
          const {
            pathname: l,
            search: u,
            hash: c
          } = zh(e);
          return {
            path: l,
            ...u && {
              query: jh(u)
            },
            ...c && {
              hash: c
            },
            replace: !0
          }
        }
        return {
          ...e,
          replace: !0
        }
      }
      return e
    }
    const a = Ut(),
      o = qe();
    return s ? (o._scope.stop(), t != null && t.replace ? location.replace(r) : location.href = r, i ? o.isHydrating ? new Promise(() => {}) : !1 : Promise.resolve()) : t != null && t.replace ? a.replace(e) : a.push(e)
  };

function jy(e) {
  return Kh(e.path || "", e.query || {}) + (e.hash || "")
}
const l_ = "__nuxt_error",
  ya = () => Rl(qe()
    .payload, "error"),
  pn = e => {
    const t = Or(e);
    try {
      const r = qe(),
        n = ya();
      r.hooks.callHook("app:error", t), n.value || (n.value = t)
    } catch {
      throw t
    }
    return t
  },
  Ky = async (e = {}) => {
    const t = qe(),
      r = ya();
    t.callHook("app:error:cleared", e), e.redirect && await Ut()
      .replace(e.redirect), r.value = Ay
  }, c_ = e => !!e && typeof e == "object" && l_ in e, Or = e => {
    const t = Vy(e);
    return Object.defineProperty(t, l_, {
      value: !0,
      configurable: !1,
      writable: !1
    }), t
  };

function Yy(e) {
  const t = qy(e),
    r = new ArrayBuffer(t.length),
    n = new DataView(r);
  for (let s = 0; s < r.byteLength; s++) n.setUint8(s, t.charCodeAt(s));
  return r
}
const Xy = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

function qy(e) {
  e.length % 4 === 0 && (e = e.replace(/==?$/, ""));
  let t = "",
    r = 0,
    n = 0;
  for (let s = 0; s < e.length; s++) r <<= 6, r |= Xy.indexOf(e[s]), n += 6, n === 24 && (t += String.fromCharCode((r & 16711680) >> 16), t += String.fromCharCode((r & 65280) >> 8), t += String.fromCharCode(r & 255), r = n = 0);
  return n === 12 ? (r >>= 4, t += String.fromCharCode(r)) : n === 18 && (r >>= 2, t += String.fromCharCode((r & 65280) >> 8), t += String.fromCharCode(r & 255)), t
}
const Zy = -1,
  zy = -2,
  Jy = -3,
  Qy = -4,
  eE = -5,
  tE = -6,
  rE = -7;

function nE(e, t) {
  return sE(JSON.parse(e), t)
}

function sE(e, t) {
  if (typeof e == "number") return i(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw new Error("Invalid input");
  const r = e,
    n = Array(r.length);
  let s = null;

  function i(a, o = !1) {
    if (a === Zy) return;
    if (a === Jy) return NaN;
    if (a === Qy) return 1 / 0;
    if (a === eE) return -1 / 0;
    if (a === tE) return -0;
    if (o || typeof a != "number") throw new Error("Invalid input");
    if (a in n) return n[a];
    const l = r[a];
    if (!l || typeof l != "object") n[a] = l;
    else if (Array.isArray(l))
      if (typeof l[0] == "string") {
        const u = l[0],
          c = t && Object.hasOwn(t, u) ? t[u] : void 0;
        if (c) {
          let f = l[1];
          if (typeof f != "number" && (f = r.push(l[1]) - 1), s ?? (s = new Set), s.has(f)) throw new Error("Invalid circular reference");
          return s.add(f), n[a] = c(i(f)), s.delete(f), n[a]
        }
        switch (u) {
          case "Date":
            n[a] = new Date(l[1]);
            break;
          case "Set":
            const f = new Set;
            n[a] = f;
            for (let m = 1; m < l.length; m += 1) f.add(i(l[m]));
            break;
          case "Map":
            const d = new Map;
            n[a] = d;
            for (let m = 1; m < l.length; m += 2) d.set(i(l[m]), i(l[m + 1]));
            break;
          case "RegExp":
            n[a] = new RegExp(l[1], l[2]);
            break;
          case "Object":
            n[a] = Object(l[1]);
            break;
          case "BigInt":
            n[a] = BigInt(l[1]);
            break;
          case "null":
            const _ = Object.create(null);
            n[a] = _;
            for (let m = 1; m < l.length; m += 2) _[l[m]] = i(l[m + 1]);
            break;
          case "Int8Array":
          case "Uint8Array":
          case "Uint8ClampedArray":
          case "Int16Array":
          case "Uint16Array":
          case "Int32Array":
          case "Uint32Array":
          case "Float32Array":
          case "Float64Array":
          case "BigInt64Array":
          case "BigUint64Array": {
            if (r[l[1]][0] !== "ArrayBuffer") throw new Error("Invalid data");
            const m = globalThis[u],
              E = i(l[1]),
              R = new m(E);
            n[a] = l[2] !== void 0 ? R.subarray(l[2], l[3]) : R;
            break
          }
          case "ArrayBuffer": {
            const m = l[1];
            if (typeof m != "string") throw new Error("Invalid ArrayBuffer encoding");
            const E = Yy(m);
            n[a] = E;
            break
          }
          case "Temporal.Duration":
          case "Temporal.Instant":
          case "Temporal.PlainDate":
          case "Temporal.PlainTime":
          case "Temporal.PlainDateTime":
          case "Temporal.PlainMonthDay":
          case "Temporal.PlainYearMonth":
          case "Temporal.ZonedDateTime": {
            const m = u.slice(9);
            n[a] = Temporal[m].from(l[1]);
            break
          }
          case "URL": {
            const m = new URL(l[1]);
            n[a] = m;
            break
          }
          case "URLSearchParams": {
            const m = new URLSearchParams(l[1]);
            n[a] = m;
            break
          }
          default:
            throw new Error(`Unknown type ${u}`)
        }
      } else if (l[0] === rE) {
      const u = l[1],
        c = new Array(u);
      n[a] = c;
      for (let f = 2; f < l.length; f += 2) {
        const d = l[f];
        c[d] = i(l[f + 1])
      }
    } else {
      const u = new Array(l.length);
      n[a] = u;
      for (let c = 0; c < l.length; c += 1) {
        const f = l[c];
        f !== zy && (u[c] = i(f))
      }
    } else {
      const u = {};
      n[a] = u;
      for (const c of Object.keys(l)) {
        if (c === "__proto__") throw new Error("Cannot parse an object with a `__proto__` property");
        const f = l[c];
        u[c] = i(f)
      }
    }
    return n[a]
  }
  return i(0)
}
const iE = new Set(["link", "style", "script", "noscript"]),
  aE = new Set(["title", "titleTemplate", "script", "style", "noscript"]),
  vu = new Set(["base", "meta", "link", "style", "script", "noscript"]),
  oE = new Set(["title", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"]),
  lE = new Set(["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"]),
  cE = new Set(["key", "tagPosition", "tagPriority", "tagDuplicateStrategy", "innerHTML", "textContent", "processTemplateParams"]),
  uE = new Set(["templateParams", "htmlAttrs", "bodyAttrs"]),
  fE = new Set(["theme-color", "google-site-verification", "og", "article", "book", "profile", "twitter", "author"]);

function Ko(e, t = {}, r) {
  for (const n in e) {
    const s = e[n],
      i = r ? `${r}:${n}` : n;
    typeof s == "object" && s !== null ? Ko(s, t, i) : typeof s == "function" && (t[i] = s)
  }
  return t
}
const u_ = (() => {
  if (console.createTask) return console.createTask;
  const e = {
    run: t => t()
  };
  return () => e
})();

function f_(e, t, r, n) {
  for (let s = r; s < e.length; s += 1) try {
    const i = n ? n.run(() => e[s](...t)) : e[s](...t);
    if (i instanceof Promise) return i.then(() => f_(e, t, s + 1, n))
  } catch (i) {
    return Promise.reject(i)
  }
}

function dE(e, t, r) {
  if (e.length > 0) return f_(e, t, 0, u_(r))
}

function hE(e, t, r) {
  if (e.length > 0) {
    const n = u_(r);
    return Promise.all(e.map(s => n.run(() => s(...t))))
  }
}

function to(e, t) {
  for (const r of [...e]) r(t)
}
var _E = class {
  constructor() {
    Lt(this, "_hooks");
    Lt(this, "_before");
    Lt(this, "_after");
    Lt(this, "_deprecatedHooks");
    Lt(this, "_deprecatedMessages");
    this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this)
  }
  hook(e, t, r = {}) {
    if (!e || typeof t != "function") return () => {};
    const n = e;
    let s;
    for (; this._deprecatedHooks[e];) s = this._deprecatedHooks[e], e = s.to;
    if (s && !r.allowDeprecated) {
      let i = s.message;
      i || (i = `${n} hook has been deprecated` + (s.to ? `, please use ${s.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = new Set), this._deprecatedMessages.has(i) || (console.warn(i), this._deprecatedMessages.add(i))
    }
    if (!t.name) try {
      Object.defineProperty(t, "name", {
        get: () => "_" + e.replace(/\W+/g, "_") + "_hook_cb",
        configurable: !0
      })
    } catch {}
    return this._hooks[e] = this._hooks[e] || [], this._hooks[e].push(t), () => {
      t && (this.removeHook(e, t), t = void 0)
    }
  }
  hookOnce(e, t) {
    let r, n = (...s) => (typeof r == "function" && r(), r = void 0, n = void 0, t(...s));
    return r = this.hook(e, n), r
  }
  removeHook(e, t) {
    const r = this._hooks[e];
    if (r) {
      const n = r.indexOf(t);
      n !== -1 && r.splice(n, 1), r.length === 0 && (this._hooks[e] = void 0)
    }
  }
  deprecateHook(e, t) {
    this._deprecatedHooks[e] = typeof t == "string" ? {
      to: t
    } : t;
    const r = this._hooks[e] || [];
    this._hooks[e] = void 0;
    for (const n of r) this.hook(e, n)
  }
  deprecateHooks(e) {
    for (const t in e) this.deprecateHook(t, e[t])
  }
  addHooks(e) {
    const t = Ko(e),
      r = Object.keys(t)
      .map(n => this.hook(n, t[n]));
    return () => {
      for (const n of r) n();
      r.length = 0
    }
  }
  removeHooks(e) {
    const t = Ko(e);
    for (const r in t) this.removeHook(r, t[r])
  }
  removeAllHooks() {
    this._hooks = {}
  }
  callHook(e, ...t) {
    return this.callHookWith(dE, e, t)
  }
  callHookParallel(e, ...t) {
    return this.callHookWith(hE, e, t)
  }
  callHookWith(e, t, r) {
    const n = this._before || this._after ? {
      name: t,
      args: r,
      context: {}
    } : void 0;
    this._before && to(this._before, n);
    const s = e(this._hooks[t] ? [...this._hooks[t]] : [], r, t);
    return s instanceof Promise ? s.finally(() => {
      this._after && n && to(this._after, n)
    }) : (this._after && n && to(this._after, n), s)
  }
  beforeEach(e) {
    return this._before = this._before || [], this._before.push(e), () => {
      if (this._before !== void 0) {
        const t = this._before.indexOf(e);
        t !== -1 && this._before.splice(t, 1)
      }
    }
  }
  afterEach(e) {
    return this._after = this._after || [], this._after.push(e), () => {
      if (this._after !== void 0) {
        const t = this._after.indexOf(e);
        t !== -1 && this._after.splice(t, 1)
      }
    }
  }
};

function pE() {
  return new _E
}
const mE = ["name", "property", "http-equiv"],
  gE = new Set(["viewport", "description", "keywords", "robots"]);

function d_(e) {
  const t = e.split(":");
  return t.length ? fE.has(t[1]) : !1
}

function Yo(e) {
  const {
    props: t,
    tag: r
  } = e;
  if (lE.has(r)) return r;
  if (r === "link" && t.rel === "canonical") return "canonical";
  if (r === "link" && t.rel === "alternate") {
    const n = t.hreflang || t.type;
    if (n) return `alternate:${n}`
  }
  if (t.charset) return "charset";
  if (e.tag === "meta") {
    for (const n of mE)
      if (t[n] !== void 0) {
        const s = t[n],
          i = s && typeof s == "string" && s.includes(":"),
          a = s && gE.has(s),
          l = !(i || a) && e.key ? `:key:${e.key}` : "";
        return `${r}:${s}${l}`
      }
  }
  if (e.key) return `${r}:key:${e.key}`;
  if (t.id) return `${r}:id:${t.id}`;
  if (r === "link" && t.rel === "alternate") return `alternate:${t.href||""}`;
  if (aE.has(r)) {
    const n = e.textContent || e.innerHTML;
    if (n) return `${r}:content:${n}`
  }
}

function h_(e) {
  const t = e._h || e._d;
  if (t) return t;
  const r = e.textContent || e.innerHTML;
  return r || `${e.tag}:${Object.entries(e.props).map(([n,s])=>`${n}:${String(s)}`).join(",")}`
}

function zi(e, t, r) {
  typeof e === "function" && (!r || r !== "titleTemplate" && !(r[0] === "o" && r[1] === "n")) && (e = e());
  const s = t ? t(r, e) : e;
  if (Array.isArray(s)) return s.map(i => zi(i, t));
  if ((s == null ? void 0 : s.constructor) === Object) {
    const i = {};
    for (const a of Object.keys(s)) i[a] = zi(s[a], t, a);
    return i
  }
  return s
}

function vE(e, t) {
  const r = e === "style" ? new Map : new Set;

  function n(s) {
    if (s == null || s === void 0) return;
    const i = String(s)
      .trim();
    if (i)
      if (e === "style") {
        const [a, ...o] = i.split(":")
          .map(l => l ? l.trim() : "");
        a && o.length && r.set(a, o.join(":"))
      } else i.split(" ")
        .filter(Boolean)
        .forEach(a => r.add(a))
  }
  return typeof t == "string" ? e === "style" ? t.split(";")
    .forEach(n) : n(t) : Array.isArray(t) ? t.forEach(s => n(s)) : t && typeof t == "object" && Object.entries(t)
    .forEach(([s, i]) => {
      i && i !== "false" && (e === "style" ? r.set(String(s)
        .trim(), String(i)) : n(s))
    }), r
}

function __(e, t) {
  return e.props = e.props || {}, t ? e.tag === "templateParams" ? (e.props = t, e) : (Object.entries(t)
    .forEach(([r, n]) => {
      if (n === null) {
        e.props[r] = null;
        return
      }
      if (r === "class" || r === "style") {
        e.props[r] = vE(r, n);
        return
      }
      if (cE.has(r)) {
        if (["textContent", "innerHTML"].includes(r) && typeof n == "object") {
          let o = t.type;
          if (t.type || (o = "application/json"), !(o != null && o.endsWith("json")) && o !== "speculationrules") return;
          t.type = o, e.props.type = o, e[r] = JSON.stringify(n)
        } else e[r] = n;
        return
      }
      const s = String(n),
        i = r.startsWith("data-"),
        a = e.tag === "meta" && r === "content";
      s === "true" || s === "" ? e.props[r] = i || a ? s : !0 : !n && i && s === "false" ? e.props[r] = "false" : n !== void 0 && (e.props[r] = n)
    }), e) : e
}

function yE(e, t) {
  const r = typeof t == "object" && typeof t != "function" ? t : {
      [e === "script" || e === "noscript" || e === "style" ? "innerHTML" : "textContent"]: t
    },
    n = __({
      tag: e,
      props: {}
    }, r);
  return n.key && iE.has(n.tag) && (n.props["data-hid"] = n._h = n.key), n.tag === "script" && typeof n.innerHTML == "object" && (n.innerHTML = JSON.stringify(n.innerHTML), n.props.type = n.props.type || "application/json"), Array.isArray(n.props.content) ? n.props.content.map(s => ({
    ...n,
    props: {
      ...n.props,
      content: s
    }
  })) : n
}

function EE(e, t) {
  if (!e) return [];
  typeof e == "function" && (e = e());
  const r = (s, i) => {
    for (let a = 0; a < t.length; a++) i = t[a](s, i);
    return i
  };
  e = r(void 0, e);
  const n = [];
  return e = zi(e, r), Object.entries(e || {})
    .forEach(([s, i]) => {
      if (i !== void 0)
        for (const a of Array.isArray(i) ? i : [i]) n.push(yE(s, a))
    }), n.flat()
}
const Xo = (e, t) => e._w === t._w ? e._p - t._p : e._w - t._w,
  yu = {
    base: -10,
    title: 10
  },
  wE = {
    critical: -8,
    high: -1,
    low: 2
  },
  Eu = {
    meta: {
      "content-security-policy": -30,
      charset: -20,
      viewport: -15
    },
    link: {
      preconnect: 20,
      stylesheet: 60,
      preload: 70,
      modulepreload: 70,
      prefetch: 90,
      "dns-prefetch": 90,
      prerender: 90
    },
    script: {
      async: 30,
      defer: 80,
      sync: 50
    },
    style: {
      imported: 40,
      sync: 60
    }
  },
  bE = /@import/,
  ms = e => e === "" || e === !0;

function TE(e, t) {
  if (typeof t.tagPriority == "number") return t.tagPriority;
  let r = 100;
  const n = wE[t.tagPriority] || 0,
    s = e.resolvedOptions.disableCapoSorting ? {
      link: {},
      script: {},
      style: {}
    } : Eu;
  if (t.tag in yu) r = yu[t.tag];
  else if (t.tag === "meta") {
    const i = t.props["http-equiv"] === "content-security-policy" ? "content-security-policy" : t.props.charset ? "charset" : t.props.name === "viewport" ? "viewport" : null;
    i && (r = Eu.meta[i])
  } else if (t.tag === "link" && t.props.rel) r = s.link[t.props.rel];
  else if (t.tag === "script") {
    const i = String(t.props.type);
    ms(t.props.async) ? r = s.script.async : t.props.src && !ms(t.props.defer) && !ms(t.props.async) && i !== "module" && !i.endsWith("json") || t.innerHTML && !i.endsWith("json") ? r = s.script.sync : (ms(t.props.defer) && t.props.src && !ms(t.props.async) || i === "module") && (r = s.script.defer)
  } else t.tag === "style" && (r = t.innerHTML && bE.test(t.innerHTML) ? s.style.imported : s.style.sync);
  return (r || 100) + n
}

function wu(e, t) {
  const r = typeof t == "function" ? t(e) : t,
    n = r.key || String(e.plugins.size + 1);
  e.plugins.get(n) || (e.plugins.set(n, r), e.hooks.addHooks(r.hooks || {}))
}

function SE(e = {}) {
  var o;
  const t = pE();
  t.addHooks(e.hooks || {});
  const r = !e.document,
    n = new Map,
    s = new Map,
    i = new Set,
    a = {
      _entryCount: 1,
      plugins: s,
      dirty: !1,
      resolvedOptions: e,
      hooks: t,
      ssr: r,
      entries: n,
      headEntries() {
        return [...n.values()]
      },
      use: l => wu(a, l),
      push(l, u) {
        const c = {
          ...u || {}
        };
        delete c.head;
        const f = c._index ?? a._entryCount++,
          d = {
            _i: f,
            input: l,
            options: c
          },
          _ = {
            _poll(m = !1) {
              a.dirty = !0, !m && i.add(f), t.callHook("entries:updated", a)
            },
            dispose() {
              n.delete(f) && a.invalidate()
            },
            patch(m) {
              (!c.mode || c.mode === "server" && r || c.mode === "client" && !r) && (d.input = m, n.set(f, d), _._poll())
            }
          };
        return _.patch(l), _
      },
      async resolveTags() {
        const l = {
          tagMap: new Map,
          tags: [],
          entries: [...a.entries.values()]
        };
        for (await t.callHook("entries:resolve", l); i.size;) {
          const _ = i.values()
            .next()
            .value;
          i.delete(_);
          const m = n.get(_);
          if (m) {
            const E = {
              tags: EE(m.input, e.propResolvers || [])
                .map(R => Object.assign(R, m.options)),
              entry: m
            };
            await t.callHook("entries:normalize", E), m._tags = E.tags.map((R, O) => (R._w = TE(a, R), R._p = (m._i << 10) + O, R._d = Yo(R), R._d || (R._h = h_(R)), R))
          }
        }
        let u = !1;
        l.entries.flatMap(_ => (_._tags || [])
            .map(m => ({
              ...m,
              props: {
                ...m.props
              }
            })))
          .sort(Xo)
          .reduce((_, m) => {
            const E = m._d || m._h;
            if (!_.has(E)) return _.set(E, m);
            const R = _.get(E);
            if (((m == null ? void 0 : m.tagDuplicateStrategy) || (uE.has(m.tag) ? "merge" : null) || (m.key && m.key === R.key ? "merge" : null)) === "merge") {
              const T = {
                ...R.props
              };
              Object.entries(m.props)
                .forEach(([h, p]) => T[h] = h === "style" ? new Map([...R.props.style || new Map, ...p]) : h === "class" ? new Set([...R.props.class || new Set, ...p]) : p), _.set(E, {
                  ...m,
                  props: T
                })
            } else m._p >> 10 === R._p >> 10 && m.tag === "meta" && d_(E) ? (_.set(E, Object.assign([...Array.isArray(R) ? R : [R], m], m)), u = !0) : (m._w === R._w ? m._p > R._p : (m == null ? void 0 : m._w) < (R == null ? void 0 : R._w)) && _.set(E, m);
            return _
          }, l.tagMap);
        const c = l.tagMap.get("title"),
          f = l.tagMap.get("titleTemplate");
        if (a._title = c == null ? void 0 : c.textContent, f) {
          const _ = f == null ? void 0 : f.textContent;
          if (a._titleTemplate = _, _) {
            let m = typeof _ == "function" ? _(c == null ? void 0 : c.textContent) : _;
            typeof m == "string" && !a.plugins.has("template-params") && (m = m.replace("%s", (c == null ? void 0 : c.textContent) || "")), c ? m === null ? l.tagMap.delete("title") : l.tagMap.set("title", {
              ...c,
              textContent: m
            }) : (f.tag = "title", f.textContent = m)
          }
        }
        l.tags = Array.from(l.tagMap.values()), u && (l.tags = l.tags.flat()
          .sort(Xo)), await t.callHook("tags:beforeResolve", l), await t.callHook("tags:resolve", l), await t.callHook("tags:afterResolve", l);
        const d = [];
        for (const _ of l.tags) {
          const {
            innerHTML: m,
            tag: E,
            props: R
          } = _;
          if (oE.has(E) && !(Object.keys(R)
              .length === 0 && !_.innerHTML && !_.textContent) && !(E === "meta" && !R.content && !R["http-equiv"] && !R.charset)) {
            if (E === "script" && m) {
              if (String(R.type)
                .endsWith("json")) {
                const O = typeof m == "string" ? m : JSON.stringify(m);
                _.innerHTML = O.replace(/</g, "\\u003C")
              } else typeof m == "string" && (_.innerHTML = m.replace(new RegExp(`</${E}`, "g"), `<\\/${E}`));
              _._d = Yo(_)
            }
            d.push(_)
          }
        }
        return d
      },
      invalidate() {
        for (const l of n.values()) i.add(l._i);
        a.dirty = !0, t.callHook("entries:updated", a)
      }
    };
  return ((e == null ? void 0 : e.plugins) || [])
    .forEach(l => wu(a, l)), a.hooks.callHook("init", a), (o = e.init) == null || o.forEach(l => l && a.push(l)), a
}
const ro = "%separator";

function PE(e, t, r = !1) {
  var s;
  let n;
  if (t === "s" || t === "pageTitle") n = e.pageTitle;
  else if (t.includes(".")) {
    const i = t.indexOf(".");
    n = (s = e[t.substring(0, i)]) == null ? void 0 : s[t.substring(i + 1)]
  } else n = e[t];
  if (n !== void 0) return r ? (n || "")
    .replace(/\\/g, "\\\\")
    .replace(/</g, "\\u003C")
    .replace(/"/g, '\\"') : n || ""
}

function pi(e, t, r, n = !1) {
  if (typeof e != "string" || !e.includes("%")) return e;
  let s = e;
  try {
    s = decodeURI(e)
  } catch {}
  const i = s.match(/%\w+(?:\.\w+)?/g);
  if (!i) return e;
  const a = e.includes(ro);
  return e = e.replace(/%\w+(?:\.\w+)?/g, o => {
      if (o === ro || !i.includes(o)) return o;
      const l = PE(t, o.slice(1), n);
      return l !== void 0 ? l : o
    })
    .trim(), a && (e = e.split(ro)
      .map(o => o.trim())
      .filter(o => o !== "")
      .join(r ? ` ${r} ` : " ")), e
}
const bu = e => e.includes(":key") ? e : e.split(":")
  .join(":key:"),
  CE = {
    key: "aliasSorting",
    hooks: {
      "tags:resolve": e => {
        let t = !1;
        for (const r of e.tags) {
          const n = r.tagPriority;
          if (!n) continue;
          const s = String(n);
          if (s.startsWith("before:")) {
            const i = bu(s.slice(7)),
              a = e.tagMap.get(i);
            a && (typeof a.tagPriority == "number" && (r.tagPriority = a.tagPriority), r._p = a._p - 1, t = !0)
          } else if (s.startsWith("after:")) {
            const i = bu(s.slice(6)),
              a = e.tagMap.get(i);
            a && (typeof a.tagPriority == "number" && (r.tagPriority = a.tagPriority), r._p = a._p + 1, t = !0)
          }
        }
        t && (e.tags = e.tags.sort(Xo))
      }
    }
  },
  AE = {
    key: "deprecations",
    hooks: {
      "entries:normalize": ({
        tags: e
      }) => {
        for (const t of e) t.props.children && (t.innerHTML = t.props.children, delete t.props.children), t.props.hid && (t.key = t.props.hid, delete t.props.hid), t.props.vmid && (t.key = t.props.vmid, delete t.props.vmid), t.props.body && (t.tagPosition = "bodyClose", delete t.props.body)
      }
    }
  };
async function qo(e) {
  if (typeof e === "function") return e;
  if (e instanceof Promise) return await e;
  if (Array.isArray(e)) return await Promise.all(e.map(r => qo(r)));
  if ((e == null ? void 0 : e.constructor) === Object) {
    const r = {};
    for (const n of Object.keys(e)) r[n] = await qo(e[n]);
    return r
  }
  return e
}
const RE = {
    key: "promises",
    hooks: {
      "entries:resolve": async e => {
        const t = [];
        for (const r in e.entries) e.entries[r]._promisesProcessed || t.push(qo(e.entries[r].input)
          .then(n => {
            e.entries[r].input = n, e.entries[r]._promisesProcessed = !0
          }));
        await Promise.all(t)
      }
    }
  },
  OE = {
    meta: "content",
    link: "href",
    htmlAttrs: "lang"
  },
  IE = ["innerHTML", "textContent"],
  LE = e => ({
    key: "template-params",
    hooks: {
      "entries:normalize": t => {
        var n, s, i;
        const r = ((s = (n = t.tags.filter(a => a.tag === "templateParams" && a.mode === "server")) == null ? void 0 : n[0]) == null ? void 0 : s.props) || {};
        Object.keys(r)
          .length && (e._ssrPayload = {
            templateParams: {
              ...((i = e._ssrPayload) == null ? void 0 : i.templateParams) || {},
              ...r
            }
          })
      },
      "tags:resolve": ({
        tagMap: t,
        tags: r
      }) => {
        var i;
        const n = ((i = t.get("templateParams")) == null ? void 0 : i.props) || {},
          s = n.separator || "|";
        delete n.separator, n.pageTitle = pi(n.pageTitle || e._title || "", n, s);
        for (const a of r) {
          if (a.processTemplateParams === !1) continue;
          const o = OE[a.tag];
          if (o && typeof a.props[o] == "string") a.props[o] = pi(a.props[o], n, s);
          else if (a.processTemplateParams || a.tag === "titleTemplate" || a.tag === "title")
            for (const l of IE) typeof a[l] == "string" && (a[l] = pi(a[l], n, s, a.tag === "script" && a.props.type.endsWith("json")))
        }
        e._templateParams = n, e._separator = s
      },
      "tags:afterResolve": ({
        tagMap: t
      }) => {
        const r = t.get("title");
        r != null && r.textContent && r.processTemplateParams !== !1 && (r.textContent = pi(r.textContent, e._templateParams, e._separator))
      }
    }
  }),
  DE = (e, t) => Ue(t) ? Ld(t) : t,
  p_ = "usehead";

function kE(e) {
  return {
    install(r) {
      r.config.globalProperties.$unhead = e, r.config.globalProperties.$head = e, r.provide(p_, e)
    }
  }.install
}

function NE() {
  if (Ys()) {
    const e = at(p_);
    if (e) return e
  }
  throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")
}

function RR(e, t = {}) {
  const r = t.head || NE();
  return r.ssr ? r.push(e || {}, t) : ME(r, e, t)
}

function ME(e, t, r = {}) {
  const n = _e(!1);
  let s;
  return xm(() => {
    const a = n.value ? {} : zi(t, DE);
    s ? s.patch(a) : s = e.push(a, r)
  }), tt() && (qs(() => {
    s.dispose()
  }), Xd(() => {
    n.value = !0
  }), Yd(() => {
    n.value = !1
  })), s
}
const xE = "modulepreload",
  FE = function(e, t) {
    return new URL(e, t)
      .href
  },
  Tu = {},
  G = function(t, r, n) {
    let s = Promise.resolve();
    if (r && r.length > 0) {
      let a = function(c) {
        return Promise.all(c.map(f => Promise.resolve(f)
          .then(d => ({
            status: "fulfilled",
            value: d
          }), d => ({
            status: "rejected",
            reason: d
          }))))
      };
      const o = document.getElementsByTagName("link"),
        l = document.querySelector("meta[property=csp-nonce]"),
        u = (l == null ? void 0 : l.nonce) || (l == null ? void 0 : l.getAttribute("nonce"));
      s = a(r.map(c => {
        if (c = FE(c, n), c in Tu) return;
        Tu[c] = !0;
        const f = c.endsWith(".css"),
          d = f ? '[rel="stylesheet"]' : "";
        if (!!n)
          for (let E = o.length - 1; E >= 0; E--) {
            const R = o[E];
            if (R.href === c && (!f || R.rel === "stylesheet")) return
          } else if (document.querySelector(`link[href="${c}"]${d}`)) return;
        const m = document.createElement("link");
        if (m.rel = f ? "stylesheet" : xE, f || (m.as = "script"), m.crossOrigin = "", m.href = c, u && m.setAttribute("nonce", u), document.head.appendChild(m), f) return new Promise((E, R) => {
          m.addEventListener("load", E), m.addEventListener("error", () => R(new Error(`Unable to preload CSS for ${c}`)))
        })
      }))
    }

    function i(a) {
      const o = new Event("vite:preloadError", {
        cancelable: !0
      });
      if (o.payload = a, window.dispatchEvent(o), !o.defaultPrevented) throw a
    }
    return s.then(a => {
      for (const o of a || []) o.status === "rejected" && i(o.reason);
      return t()
        .catch(i)
    })
  };
let Ti, Si;

function HE() {
  return Ti = $fetch($l(`builds/meta/${Fr().app.buildId}.json`), {
      responseType: "json"
    }), Ti.then(e => {
      Si = Fy(e.matcher)
    })
    .catch(e => {
      console.error("[nuxt] Error fetching app manifest.", e)
    }), Ti
}

function Ea() {
  return Ti || HE()
}
async function Wl(e) {
  const t = typeof e == "string" ? e : e.path;
  if (await Ea(), !Si) return console.error("[nuxt] Error creating app manifest matcher.", Si), {};
  try {
    return i_({}, ...Si.matchAll(t)
      .reverse())
  } catch (r) {
    return console.error("[nuxt] Error matching route rules.", r), {}
  }
}
async function Su(e, t = {}) {
  if (!await g_(e)) return null;
  const n = await VE(e, t);
  return await m_(n) || null
}
const BE = "_payload.json";
async function VE(e, t = {}) {
  const r = new URL(e, "http://localhost");
  if (r.host !== "localhost" || Rn(r.pathname, {
      acceptRelative: !0
    })) throw new Error("Payload URL must not include hostname: " + e);
  const n = Fr(),
    s = t.hash || (t.fresh ? Date.now() : n.app.buildId),
    i = n.app.cdnURL,
    a = i && await g_(e) ? i : n.app.baseURL;
  return Xh(a, r.pathname, BE + (s ? `?${s}` : ""))
}
async function m_(e) {
  const t = fetch(e, {
      cache: "force-cache"
    })
    .then(r => r.text()
      .then(v_));
  try {
    return await t
  } catch (r) {
    console.warn("[nuxt] Cannot load payload ", e, r)
  }
  return null
}
async function g_(e = os()
  .path) {
  const t = qe();
  return e = Vs(e), (await Ea())
    .prerendered.includes(e) ? !0 : t.runWithContext(async () => {
      const n = await Wl({
        path: e
      });
      return !!n.prerender && !n.redirect
    })
}
let cn = null;
async function UE() {
  var n;
  if (cn) return cn;
  const e = document.getElementById("__NUXT_DATA__");
  if (!e) return {};
  const t = await v_(e.textContent || ""),
    r = e.dataset.src ? await m_(e.dataset.src) : void 0;
  return cn = {
    ...t,
    ...r,
    ...window.__NUXT__
  }, (n = cn.config) != null && n.public && (cn.config.public = Mr(cn.config.public)), cn
}
async function v_(e) {
  return await nE(e, qe()
    ._payloadRevivers)
}

function GE(e, t) {
  qe()
    ._payloadRevivers[e] = t
}
const $E = [
    ["NuxtError", e => Or(e)],
    ["EmptyShallowRef", e => zt(e === "_" ? void 0 : e === "0n" ? BigInt(0) : Ki(e))],
    ["EmptyRef", e => _e(e === "_" ? void 0 : e === "0n" ? BigInt(0) : Ki(e))],
    ["ShallowRef", e => zt(e)],
    ["ShallowReactive", e => Pr(e)],
    ["Ref", e => _e(e)],
    ["Reactive", e => Mr(e)]
  ],
  WE = Ke({
    name: "nuxt:revive-payload:client",
    order: -30,
    async setup(e) {
      let t, r;
      for (const [n, s] of $E) GE(n, s);
      Object.assign(e.payload, ([t, r] = zr(() => e.runWithContext(UE)), t = await t, r(), t)), window.__NUXT__ = e.payload
    }
  });
async function jl(e, t = {}) {
  const r = t.document || e.resolvedOptions.document;
  if (!r || !e.dirty) return;
  const n = {
    shouldRender: !0,
    tags: []
  };
  if (await e.hooks.callHook("dom:beforeRender", n), !!n.shouldRender) return e._domUpdatePromise || (e._domUpdatePromise = new Promise(async s => {
      var _;
      const i = new Map,
        a = new Promise(m => {
          e.resolveTags()
            .then(E => {
              m(E.map(R => {
                const O = i.get(R._d) || 0,
                  T = {
                    tag: R,
                    id: (O ? `${R._d}:${O}` : R._d) || R._h,
                    shouldRender: !0
                  };
                return R._d && d_(R._d) && i.set(R._d, O + 1), T
              }))
            })
        });
      let o = e._dom;
      if (!o) {
        o = {
          title: r.title,
          elMap: new Map()
            .set("htmlAttrs", r.documentElement)
            .set("bodyAttrs", r.body)
        };
        for (const m of ["body", "head"]) {
          const E = (_ = r[m]) == null ? void 0 : _.children;
          for (const R of E) {
            const O = R.tagName.toLowerCase();
            if (!vu.has(O)) continue;
            const T = __({
              tag: O,
              props: {}
            }, {
              innerHTML: R.innerHTML,
              ...R.getAttributeNames()
              .reduce((h, p) => (h[p] = R.getAttribute(p), h), {}) || {}
            });
            if (T.key = R.getAttribute("data-hid") || void 0, T._d = Yo(T) || h_(T), o.elMap.has(T._d)) {
              let h = 1,
                p = T._d;
              for (; o.elMap.has(p);) p = `${T._d}:${h++}`;
              o.elMap.set(p, R)
            } else o.elMap.set(T._d, R)
          }
        }
      }
      o.pendingSideEffects = {
        ...o.sideEffects
      }, o.sideEffects = {};

      function l(m, E, R) {
        const O = `${m}:${E}`;
        o.sideEffects[O] = R, delete o.pendingSideEffects[O]
      }

      function u({
        id: m,
        $el: E,
        tag: R
      }) {
        const O = R.tag.endsWith("Attrs");
        o.elMap.set(m, E), O || (R.textContent && R.textContent !== E.textContent && (E.textContent = R.textContent), R.innerHTML && R.innerHTML !== E.innerHTML && (E.innerHTML = R.innerHTML), l(m, "el", () => {
          E == null || E.remove(), o.elMap.delete(m)
        }));
        for (const T in R.props) {
          if (!Object.prototype.hasOwnProperty.call(R.props, T)) continue;
          const h = R.props[T];
          if (T.startsWith("on") && typeof h == "function") {
            const v = E == null ? void 0 : E.dataset;
            if (v && v[`${T}fired`]) {
              const P = T.slice(0, -5);
              h.call(E, new Event(P.substring(2)))
            }
            E.getAttribute(`data-${T}`) !== "" && ((R.tag === "bodyAttrs" ? r.defaultView : E)
              .addEventListener(T.substring(2), h.bind(E)), E.setAttribute(`data-${T}`, ""));
            continue
          }
          const p = `attr:${T}`;
          if (T === "class") {
            if (!h) continue;
            for (const v of h) O && l(m, `${p}:${v}`, () => E.classList.remove(v)), !E.classList.contains(v) && E.classList.add(v)
          } else if (T === "style") {
            if (!h) continue;
            for (const [v, P] of h) l(m, `${p}:${v}`, () => {
              E.style.removeProperty(v)
            }), E.style.setProperty(v, P)
          } else h !== !1 && h !== null && (E.getAttribute(T) !== h && E.setAttribute(T, h === !0 ? "" : String(h)), O && l(m, p, () => E.removeAttribute(T)))
        }
      }
      const c = [],
        f = {
          bodyClose: void 0,
          bodyOpen: void 0,
          head: void 0
        },
        d = await a;
      for (const m of d) {
        const {
          tag: E,
          shouldRender: R,
          id: O
        } = m;
        if (R) {
          if (E.tag === "title") {
            r.title = E.textContent, l("title", "", () => r.title = o.title);
            continue
          }
          m.$el = m.$el || o.elMap.get(O), m.$el ? u(m) : vu.has(E.tag) && c.push(m)
        }
      }
      for (const m of c) {
        const E = m.tag.tagPosition || "head";
        m.$el = r.createElement(m.tag.tag), u(m), f[E] = f[E] || r.createDocumentFragment(), f[E].appendChild(m.$el)
      }
      for (const m of d) await e.hooks.callHook("dom:renderTag", m, r, l);
      f.head && r.head.appendChild(f.head), f.bodyOpen && r.body.insertBefore(f.bodyOpen, r.body.firstChild), f.bodyClose && r.body.appendChild(f.bodyClose);
      for (const m in o.pendingSideEffects) o.pendingSideEffects[m]();
      e._dom = o, await e.hooks.callHook("dom:rendered", {
        renders: d
      }), s()
    })
    .finally(() => {
      e._domUpdatePromise = void 0, e.dirty = !1
    })), e._domUpdatePromise
}

function jE(e = {}) {
  var n, s, i;
  const t = ((n = e.domOptions) == null ? void 0 : n.render) || jl;
  e.document = e.document || (typeof window < "u" ? document : void 0);
  const r = ((i = (s = e.document) == null ? void 0 : s.head.querySelector('script[id="unhead:payload"]')) == null ? void 0 : i.innerHTML) || !1;
  return SE({
    ...e,
    plugins: [...e.plugins || [], {
      key: "client",
      hooks: {
        "entries:updated": t
      }
    }],
    init: [r ? JSON.parse(r) : !1, ...e.init || []]
  })
}

function KE(e, t) {
  let r = 0;
  return () => {
    const n = ++r;
    t(() => {
      r === n && e()
    })
  }
}

function YE(e = {}) {
  const t = jE({
    domOptions: {
      render: KE(() => jl(t), r => setTimeout(r, 0))
    },
    ...e
  });
  return t.install = kE(t), t
}
const XE = {
    disableDefaults: !0,
    disableCapoSorting: !1,
    plugins: [AE, RE, LE, CE]
  },
  qE = Ke({
    name: "nuxt:head",
    enforce: "pre",
    setup(e) {
      const t = YE(XE);
      e.vueApp.use(t);
      {
        let r = !0;
        const n = async () => {
          r = !1, await jl(t)
        };
        t.hooks.hook("dom:beforeRender", s => {
          s.shouldRender = !r
        }), e.hooks.hook("page:start", () => {
          r = !0
        }), e.hooks.hook("page:finish", () => {
          e.isHydrating || n()
        }), e.hooks.hook("app:error", n), e.hooks.hook("app:suspense:resolve", n)
      }
    }
  });
/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
const Fn = typeof document < "u";

function y_(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
}

function ZE(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && y_(e.default)
}
const Me = Object.assign;

function no(e, t) {
  const r = {};
  for (const n in t) {
    const s = t[n];
    r[n] = tr(s) ? s.map(e) : e(s)
  }
  return r
}
const Os = () => {},
  tr = Array.isArray;

function Pu(e, t) {
  const r = {};
  for (const n in e) r[n] = n in t ? t[n] : e[n];
  return r
}
const E_ = /#/g,
  zE = /&/g,
  JE = /\//g,
  QE = /=/g,
  ew = /\?/g,
  w_ = /\+/g,
  tw = /%5B/g,
  rw = /%5D/g,
  b_ = /%5E/g,
  nw = /%60/g,
  T_ = /%7B/g,
  sw = /%7C/g,
  S_ = /%7D/g,
  iw = /%20/g;

function Kl(e) {
  return e == null ? "" : encodeURI("" + e)
    .replace(sw, "|")
    .replace(tw, "[")
    .replace(rw, "]")
}

function aw(e) {
  return Kl(e)
    .replace(T_, "{")
    .replace(S_, "}")
    .replace(b_, "^")
}

function Zo(e) {
  return Kl(e)
    .replace(w_, "%2B")
    .replace(iw, "+")
    .replace(E_, "%23")
    .replace(zE, "%26")
    .replace(nw, "`")
    .replace(T_, "{")
    .replace(S_, "}")
    .replace(b_, "^")
}

function ow(e) {
  return Zo(e)
    .replace(QE, "%3D")
}

function lw(e) {
  return Kl(e)
    .replace(E_, "%23")
    .replace(ew, "%3F")
}

function cw(e) {
  return lw(e)
    .replace(JE, "%2F")
}

function Us(e) {
  if (e == null) return null;
  try {
    return decodeURIComponent("" + e)
  } catch {}
  return "" + e
}
const uw = /\/$/,
  fw = e => e.replace(uw, "");

function so(e, t, r = "/") {
  let n, s = {},
    i = "",
    a = "";
  const o = t.indexOf("#");
  let l = t.indexOf("?");
  return l = o >= 0 && l > o ? -1 : l, l >= 0 && (n = t.slice(0, l), i = t.slice(l, o > 0 ? o : t.length), s = e(i.slice(1))), o >= 0 && (n = n || t.slice(0, o), a = t.slice(o, t.length)), n = pw(n ?? t, r), {
    fullPath: n + i + a,
    path: n,
    query: s,
    hash: Us(a)
  }
}

function dw(e, t) {
  const r = t.query ? e(t.query) : "";
  return t.path + (r && "?") + r + (t.hash || "")
}

function Cu(e, t) {
  return !t || !e.toLowerCase()
    .startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}

function hw(e, t, r) {
  const n = t.matched.length - 1,
    s = r.matched.length - 1;
  return n > -1 && n === s && Qn(t.matched[n], r.matched[s]) && P_(t.params, r.params) && e(t.query) === e(r.query) && t.hash === r.hash
}

function Qn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}

function P_(e, t) {
  if (Object.keys(e)
    .length !== Object.keys(t)
    .length) return !1;
  for (var r in e)
    if (!_w(e[r], t[r])) return !1;
  return !0
}

function _w(e, t) {
  return tr(e) ? Au(e, t) : tr(t) ? Au(t, e) : (e == null ? void 0 : e.valueOf()) === (t == null ? void 0 : t.valueOf())
}

function Au(e, t) {
  return tr(t) ? e.length === t.length && e.every((r, n) => r === t[n]) : e.length === 1 && e[0] === t
}

function pw(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const r = t.split("/"),
    n = e.split("/"),
    s = n[n.length - 1];
  (s === ".." || s === ".") && n.push("");
  let i = r.length - 1,
    a, o;
  for (a = 0; a < n.length; a++)
    if (o = n[a], o !== ".")
      if (o === "..") i > 1 && i--;
      else break;
  return r.slice(0, i)
    .join("/") + "/" + n.slice(a)
    .join("/")
}
const Bt = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
let zo = (function(e) {
    return e.pop = "pop", e.push = "push", e
  })({}),
  io = (function(e) {
    return e.back = "back", e.forward = "forward", e.unknown = "", e
  })({});

function mw(e) {
  if (!e)
    if (Fn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "")
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), fw(e)
}
const gw = /^[^#]+#/;

function vw(e, t) {
  return e.replace(gw, "#") + t
}

function yw(e, t) {
  const r = document.documentElement.getBoundingClientRect(),
    n = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: n.left - r.left - (t.left || 0),
    top: n.top - r.top - (t.top || 0)
  }
}
const wa = () => ({
  left: window.scrollX,
  top: window.scrollY
});

function Ew(e) {
  let t;
  if ("el" in e) {
    const r = e.el,
      n = typeof r == "string" && r.startsWith("#"),
      s = typeof r == "string" ? n ? document.getElementById(r.slice(1)) : document.querySelector(r) : r;
    if (!s) return;
    t = yw(s, e)
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}

function Ru(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const Jo = new Map;

function ww(e, t) {
  Jo.set(e, t)
}

function bw(e) {
  const t = Jo.get(e);
  return Jo.delete(e), t
}

function Tw(e) {
  return typeof e == "string" || e && typeof e == "object"
}

function C_(e) {
  return typeof e == "string" || typeof e == "symbol"
}
let Ze = (function(e) {
  return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e
})({});
const A_ = Symbol("");
Ze.MATCHER_NOT_FOUND + "", Ze.NAVIGATION_GUARD_REDIRECT + "", Ze.NAVIGATION_ABORTED + "", Ze.NAVIGATION_CANCELLED + "", Ze.NAVIGATION_DUPLICATED + "";

function es(e, t) {
  return Me(new Error, {
    type: e,
    [A_]: !0
  }, t)
}

function mr(e, t) {
  return e instanceof Error && A_ in e && (t == null || !!(e.type & t))
}
const Sw = ["params", "query", "hash"];

function Pw(e) {
  if (typeof e == "string") return e;
  if (e.path != null) return e.path;
  const t = {};
  for (const r of Sw) r in e && (t[r] = e[r]);
  return JSON.stringify(t, null, 2)
}

function Cw(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const r = (e[0] === "?" ? e.slice(1) : e)
    .split("&");
  for (let n = 0; n < r.length; ++n) {
    const s = r[n].replace(w_, " "),
      i = s.indexOf("="),
      a = Us(i < 0 ? s : s.slice(0, i)),
      o = i < 0 ? null : Us(s.slice(i + 1));
    if (a in t) {
      let l = t[a];
      tr(l) || (l = t[a] = [l]), l.push(o)
    } else t[a] = o
  }
  return t
}

function Ou(e) {
  let t = "";
  for (let r in e) {
    const n = e[r];
    if (r = ow(r), n == null) {
      n !== void 0 && (t += (t.length ? "&" : "") + r);
      continue
    }(tr(n) ? n.map(s => s && Zo(s)) : [n && Zo(n)])
    .forEach(s => {
      s !== void 0 && (t += (t.length ? "&" : "") + r, s != null && (t += "=" + s))
    })
  }
  return t
}

function Aw(e) {
  const t = {};
  for (const r in e) {
    const n = e[r];
    n !== void 0 && (t[r] = tr(n) ? n.map(s => s == null ? null : "" + s) : n == null ? n : "" + n)
  }
  return t
}
const Rw = Symbol(""),
  Iu = Symbol(""),
  ba = Symbol(""),
  Yl = Symbol(""),
  Qo = Symbol("");

function gs() {
  let e = [];

  function t(n) {
    return e.push(n), () => {
      const s = e.indexOf(n);
      s > -1 && e.splice(s, 1)
    }
  }

  function r() {
    e = []
  }
  return {
    add: t,
    list: () => e.slice(),
    reset: r
  }
}

function Kr(e, t, r, n, s, i = a => a()) {
  const a = n && (n.enterCallbacks[s] = n.enterCallbacks[s] || []);
  return () => new Promise((o, l) => {
    const u = d => {
        d === !1 ? l(es(Ze.NAVIGATION_ABORTED, {
          from: r,
          to: t
        })) : d instanceof Error ? l(d) : Tw(d) ? l(es(Ze.NAVIGATION_GUARD_REDIRECT, {
          from: t,
          to: d
        })) : (a && n.enterCallbacks[s] === a && typeof d == "function" && a.push(d), o())
      },
      c = i(() => e.call(n && n.instances[s], t, r, u));
    let f = Promise.resolve(c);
    e.length < 3 && (f = f.then(u)), f.catch(d => l(d))
  })
}

function ao(e, t, r, n, s = i => i()) {
  const i = [];
  for (const a of e)
    for (const o in a.components) {
      let l = a.components[o];
      if (!(t !== "beforeRouteEnter" && !a.instances[o]))
        if (y_(l)) {
          const u = (l.__vccOpts || l)[t];
          u && i.push(Kr(u, r, n, a, o, s))
        } else {
          let u = l();
          i.push(() => u.then(c => {
            if (!c) throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);
            const f = ZE(c) ? c.default : c;
            a.mods[o] = c, a.components[o] = f;
            const d = (f.__vccOpts || f)[t];
            return d && Kr(d, r, n, a, o, s)()
          }))
        }
    }
  return i
}

function Ow(e, t) {
  const r = [],
    n = [],
    s = [],
    i = Math.max(t.matched.length, e.matched.length);
  for (let a = 0; a < i; a++) {
    const o = t.matched[a];
    o && (e.matched.find(u => Qn(u, o)) ? n.push(o) : r.push(o));
    const l = e.matched[a];
    l && (t.matched.find(u => Qn(u, l)) || s.push(l))
  }
  return [r, n, s]
}
/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Iw = () => location.protocol + "//" + location.host;

function R_(e, t) {
  const {
    pathname: r,
    search: n,
    hash: s
  } = t, i = e.indexOf("#");
  if (i > -1) {
    let a = s.includes(e.slice(i)) ? e.slice(i)
      .length : 1,
      o = s.slice(a);
    return o[0] !== "/" && (o = "/" + o), Cu(o, "")
  }
  return Cu(r, e) + n + s
}

function Lw(e, t, r, n) {
  let s = [],
    i = [],
    a = null;
  const o = ({
    state: d
  }) => {
    const _ = R_(e, location),
      m = r.value,
      E = t.value;
    let R = 0;
    if (d) {
      if (r.value = _, t.value = d, a && a === m) {
        a = null;
        return
      }
      R = E ? d.position - E.position : 0
    } else n(_);
    s.forEach(O => {
      O(r.value, m, {
        delta: R,
        type: zo.pop,
        direction: R ? R > 0 ? io.forward : io.back : io.unknown
      })
    })
  };

  function l() {
    a = r.value
  }

  function u(d) {
    s.push(d);
    const _ = () => {
      const m = s.indexOf(d);
      m > -1 && s.splice(m, 1)
    };
    return i.push(_), _
  }

  function c() {
    if (document.visibilityState === "hidden") {
      const {
        history: d
      } = window;
      if (!d.state) return;
      d.replaceState(Me({}, d.state, {
        scroll: wa()
      }), "")
    }
  }

  function f() {
    for (const d of i) d();
    i = [], window.removeEventListener("popstate", o), window.removeEventListener("pagehide", c), document.removeEventListener("visibilitychange", c)
  }
  return window.addEventListener("popstate", o), window.addEventListener("pagehide", c), document.addEventListener("visibilitychange", c), {
    pauseListeners: l,
    listen: u,
    destroy: f
  }
}

function Lu(e, t, r, n = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: r,
    replaced: n,
    position: window.history.length,
    scroll: s ? wa() : null
  }
}

function Dw(e) {
  const {
    history: t,
    location: r
  } = window, n = {
    value: R_(e, r)
  }, s = {
    value: t.state
  };
  s.value || i(n.value, {
    back: null,
    current: n.value,
    forward: null,
    position: t.length - 1,
    replaced: !0,
    scroll: null
  }, !0);

  function i(l, u, c) {
    const f = e.indexOf("#"),
      d = f > -1 ? (r.host && document.querySelector("base") ? e : e.slice(f)) + l : Iw() + e + l;
    try {
      t[c ? "replaceState" : "pushState"](u, "", d), s.value = u
    } catch (_) {
      console.error(_), r[c ? "replace" : "assign"](d)
    }
  }

  function a(l, u) {
    i(l, Me({}, t.state, Lu(s.value.back, l, s.value.forward, !0), u, {
      position: s.value.position
    }), !0), n.value = l
  }

  function o(l, u) {
    const c = Me({}, s.value, t.state, {
      forward: l,
      scroll: wa()
    });
    i(c.current, c, !0), i(l, Me({}, Lu(n.value, l, null), {
      position: c.position + 1
    }, u), !1), n.value = l
  }
  return {
    location: n,
    state: s,
    push: o,
    replace: a
  }
}

function kw(e) {
  e = mw(e);
  const t = Dw(e),
    r = Lw(e, t.state, t.location, t.replace);

  function n(i, a = !0) {
    a || r.pauseListeners(), history.go(i)
  }
  const s = Me({
    location: "",
    base: e,
    go: n,
    createHref: vw.bind(null, e)
  }, t, r);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s
}
let gn = (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e
})({});
var lt = (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e
})(lt || {});
const Nw = {
    type: gn.Static,
    value: ""
  },
  Mw = /[a-zA-Z0-9_]/;

function xw(e) {
  if (!e) return [
    []
  ];
  if (e === "/") return [
    [Nw]
  ];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);

  function t(_) {
    throw new Error(`ERR (${r})/"${u}": ${_}`)
  }
  let r = lt.Static,
    n = r;
  const s = [];
  let i;

  function a() {
    i && s.push(i), i = []
  }
  let o = 0,
    l, u = "",
    c = "";

  function f() {
    u && (r === lt.Static ? i.push({
      type: gn.Static,
      value: u
    }) : r === lt.Param || r === lt.ParamRegExp || r === lt.ParamRegExpEnd ? (i.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`), i.push({
      type: gn.Param,
      value: u,
      regexp: c,
      repeatable: l === "*" || l === "+",
      optional: l === "*" || l === "?"
    })) : t("Invalid state to consume buffer"), u = "")
  }

  function d() {
    u += l
  }
  for (; o < e.length;) {
    if (l = e[o++], l === "\\" && r !== lt.ParamRegExp) {
      n = r, r = lt.EscapeNext;
      continue
    }
    switch (r) {
      case lt.Static:
        l === "/" ? (u && f(), a()) : l === ":" ? (f(), r = lt.Param) : d();
        break;
      case lt.EscapeNext:
        d(), r = n;
        break;
      case lt.Param:
        l === "(" ? r = lt.ParamRegExp : Mw.test(l) ? d() : (f(), r = lt.Static, l !== "*" && l !== "?" && l !== "+" && o--);
        break;
      case lt.ParamRegExp:
        l === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + l : r = lt.ParamRegExpEnd : c += l;
        break;
      case lt.ParamRegExpEnd:
        f(), r = lt.Static, l !== "*" && l !== "?" && l !== "+" && o--, c = "";
        break;
      default:
        t("Unknown state");
        break
    }
  }
  return r === lt.ParamRegExp && t(`Unfinished custom RegExp for param "${u}"`), f(), a(), s
}
const Du = "[^/]+?",
  Fw = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
  };
var St = (function(e) {
  return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = .7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = .25] = "BonusCaseSensitive", e
})(St || {});
const Hw = /[.+*?^${}()[\]/\\]/g;

function Bw(e, t) {
  const r = Me({}, Fw, t),
    n = [];
  let s = r.start ? "^" : "";
  const i = [];
  for (const u of e) {
    const c = u.length ? [] : [St.Root];
    r.strict && !u.length && (s += "/");
    for (let f = 0; f < u.length; f++) {
      const d = u[f];
      let _ = St.Segment + (r.sensitive ? St.BonusCaseSensitive : 0);
      if (d.type === gn.Static) f || (s += "/"), s += d.value.replace(Hw, "\\$&"), _ += St.Static;
      else if (d.type === gn.Param) {
        const {
          value: m,
          repeatable: E,
          optional: R,
          regexp: O
        } = d;
        i.push({
          name: m,
          repeatable: E,
          optional: R
        });
        const T = O || Du;
        if (T !== Du) {
          _ += St.BonusCustomRegExp;
          try {
            `${T}`
          } catch (p) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${T}): ` + p.message)
          }
        }
        let h = E ? `((?:${T})(?:/(?:${T}))*)` : `(${T})`;
        f || (h = R && u.length < 2 ? `(?:/${h})` : "/" + h), R && (h += "?"), s += h, _ += St.Dynamic, R && (_ += St.BonusOptional), E && (_ += St.BonusRepeatable), T === ".*" && (_ += St.BonusWildcard)
      }
      c.push(_)
    }
    n.push(c)
  }
  if (r.strict && r.end) {
    const u = n.length - 1;
    n[u][n[u].length - 1] += St.BonusStrict
  }
  r.strict || (s += "/?"), r.end ? s += "$" : r.strict && !s.endsWith("/") && (s += "(?:/|$)");
  const a = new RegExp(s, r.sensitive ? "" : "i");

  function o(u) {
    const c = u.match(a),
      f = {};
    if (!c) return null;
    for (let d = 1; d < c.length; d++) {
      const _ = c[d] || "",
        m = i[d - 1];
      f[m.name] = _ && m.repeatable ? _.split("/") : _
    }
    return f
  }

  function l(u) {
    let c = "",
      f = !1;
    for (const d of e) {
      (!f || !c.endsWith("/")) && (c += "/"), f = !1;
      for (const _ of d)
        if (_.type === gn.Static) c += _.value;
        else if (_.type === gn.Param) {
        const {
          value: m,
          repeatable: E,
          optional: R
        } = _, O = m in u ? u[m] : "";
        if (tr(O) && !E) throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
        const T = tr(O) ? O.join("/") : O;
        if (!T)
          if (R) d.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : f = !0);
          else throw new Error(`Missing required param "${m}"`);
        c += T
      }
    }
    return c || "/"
  }
  return {
    re: a,
    score: n,
    keys: i,
    parse: o,
    stringify: l
  }
}

function Vw(e, t) {
  let r = 0;
  for (; r < e.length && r < t.length;) {
    const n = t[r] - e[r];
    if (n) return n;
    r++
  }
  return e.length < t.length ? e.length === 1 && e[0] === St.Static + St.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === St.Static + St.Segment ? 1 : -1 : 0
}

function O_(e, t) {
  let r = 0;
  const n = e.score,
    s = t.score;
  for (; r < n.length && r < s.length;) {
    const i = Vw(n[r], s[r]);
    if (i) return i;
    r++
  }
  if (Math.abs(s.length - n.length) === 1) {
    if (ku(n)) return 1;
    if (ku(s)) return -1
  }
  return s.length - n.length
}

function ku(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0
}
const Uw = {
  strict: !1,
  end: !0,
  sensitive: !1
};

function Gw(e, t, r) {
  const n = Bw(xw(e.path), r),
    s = Me(n, {
      record: e,
      parent: t,
      children: [],
      alias: []
    });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s
}

function $w(e, t) {
  const r = [],
    n = new Map;
  t = Pu(Uw, t);

  function s(f) {
    return n.get(f)
  }

  function i(f, d, _) {
    const m = !_,
      E = Mu(f);
    E.aliasOf = _ && _.record;
    const R = Pu(t, f),
      O = [E];
    if ("alias" in f) {
      const p = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const v of p) O.push(Mu(Me({}, E, {
        components: _ ? _.record.components : E.components,
        path: v,
        aliasOf: _ ? _.record : E
      })))
    }
    let T, h;
    for (const p of O) {
      const {
        path: v
      } = p;
      if (d && v[0] !== "/") {
        const P = d.record.path,
          g = P[P.length - 1] === "/" ? "" : "/";
        p.path = d.record.path + (v && g + v)
      }
      if (T = Gw(p, d, R), _ ? _.alias.push(T) : (h = h || T, h !== T && h.alias.push(T), m && f.name && !xu(T) && a(f.name)), I_(T) && l(T), E.children) {
        const P = E.children;
        for (let g = 0; g < P.length; g++) i(P[g], T, _ && _.children[g])
      }
      _ = _ || T
    }
    return h ? () => {
      a(h)
    } : Os
  }

  function a(f) {
    if (C_(f)) {
      const d = n.get(f);
      d && (n.delete(f), r.splice(r.indexOf(d), 1), d.children.forEach(a), d.alias.forEach(a))
    } else {
      const d = r.indexOf(f);
      d > -1 && (r.splice(d, 1), f.record.name && n.delete(f.record.name), f.children.forEach(a), f.alias.forEach(a))
    }
  }

  function o() {
    return r
  }

  function l(f) {
    const d = Kw(f, r);
    r.splice(d, 0, f), f.record.name && !xu(f) && n.set(f.record.name, f)
  }

  function u(f, d) {
    let _, m = {},
      E, R;
    if ("name" in f && f.name) {
      if (_ = n.get(f.name), !_) throw es(Ze.MATCHER_NOT_FOUND, {
        location: f
      });
      R = _.record.name, m = Me(Nu(d.params, _.keys.filter(h => !h.optional)
        .concat(_.parent ? _.parent.keys.filter(h => h.optional) : [])
        .map(h => h.name)), f.params && Nu(f.params, _.keys.map(h => h.name))), E = _.stringify(m)
    } else if (f.path != null) E = f.path, _ = r.find(h => h.re.test(E)), _ && (m = _.parse(E), R = _.record.name);
    else {
      if (_ = d.name ? n.get(d.name) : r.find(h => h.re.test(d.path)), !_) throw es(Ze.MATCHER_NOT_FOUND, {
        location: f,
        currentLocation: d
      });
      R = _.record.name, m = Me({}, d.params, f.params), E = _.stringify(m)
    }
    const O = [];
    let T = _;
    for (; T;) O.unshift(T.record), T = T.parent;
    return {
      name: R,
      path: E,
      params: m,
      matched: O,
      meta: jw(O)
    }
  }
  e.forEach(f => i(f));

  function c() {
    r.length = 0, n.clear()
  }
  return {
    addRoute: i,
    resolve: u,
    removeRoute: a,
    clearRoutes: c,
    getRoutes: o,
    getRecordMatcher: s
  }
}

function Nu(e, t) {
  const r = {};
  for (const n of t) n in e && (r[n] = e[n]);
  return r
}

function Mu(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: Ww(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set,
    updateGuards: new Set,
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && {
      default: e.component
    }
  };
  return Object.defineProperty(t, "mods", {
    value: {}
  }), t
}

function Ww(e) {
  const t = {},
    r = e.props || !1;
  if ("component" in e) t.default = r;
  else
    for (const n in e.components) t[n] = typeof r == "object" ? r[n] : r;
  return t
}

function xu(e) {
  for (; e;) {
    if (e.record.aliasOf) return !0;
    e = e.parent
  }
  return !1
}

function jw(e) {
  return e.reduce((t, r) => Me(t, r.meta), {})
}

function Kw(e, t) {
  let r = 0,
    n = t.length;
  for (; r !== n;) {
    const i = r + n >> 1;
    O_(e, t[i]) < 0 ? n = i : r = i + 1
  }
  const s = Yw(e);
  return s && (n = t.lastIndexOf(s, n - 1)), n
}

function Yw(e) {
  let t = e;
  for (; t = t.parent;)
    if (I_(t) && O_(e, t) === 0) return t
}

function I_({
  record: e
}) {
  return !!(e.name || e.components && Object.keys(e.components)
    .length || e.redirect)
}

function Fu(e) {
  const t = at(ba),
    r = at(Yl),
    n = $(() => {
      const l = ze(e.to);
      return t.resolve(l)
    }),
    s = $(() => {
      const {
        matched: l
      } = n.value, {
        length: u
      } = l, c = l[u - 1], f = r.matched;
      if (!c || !f.length) return -1;
      const d = f.findIndex(Qn.bind(null, c));
      if (d > -1) return d;
      const _ = Hu(l[u - 2]);
      return u > 1 && Hu(c) === _ && f[f.length - 1].path !== _ ? f.findIndex(Qn.bind(null, l[u - 2])) : d
    }),
    i = $(() => s.value > -1 && Jw(r.params, n.value.params)),
    a = $(() => s.value > -1 && s.value === r.matched.length - 1 && P_(r.params, n.value.params));

  function o(l = {}) {
    if (zw(l)) {
      const u = t[ze(e.replace) ? "replace" : "push"](ze(e.to))
        .catch(Os);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => u), u
    }
    return Promise.resolve()
  }
  return {
    route: n,
    href: $(() => n.value.href),
    isActive: i,
    isExactActive: a,
    navigate: o
  }
}

function Xw(e) {
  return e.length === 1 ? e[0] : e
}
const qw = Mt({
    name: "RouterLink",
    compatConfig: {
      MODE: 3
    },
    props: {
      to: {
        type: [String, Object],
        required: !0
      },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        default: "page"
      },
      viewTransition: Boolean
    },
    useLink: Fu,
    setup(e, {
      slots: t
    }) {
      const r = Mr(Fu(e)),
        {
          options: n
        } = at(ba),
        s = $(() => ({
          [Bu(e.activeClass, n.linkActiveClass, "router-link-active")]: r.isActive,
          [Bu(e.exactActiveClass, n.linkExactActiveClass, "router-link-exact-active")]: r.isExactActive
        }));
      return () => {
        const i = t.default && Xw(t.default(r));
        return e.custom ? i : ft("a", {
          "aria-current": r.isExactActive ? e.ariaCurrentValue : null,
          href: r.href,
          onClick: r.navigate,
          class: s.value
        }, i)
      }
    }
  }),
  Zw = qw;

function zw(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}

function Jw(e, t) {
  for (const r in t) {
    const n = t[r],
      s = e[r];
    if (typeof n == "string") {
      if (n !== s) return !1
    } else if (!tr(s) || s.length !== n.length || n.some((i, a) => i.valueOf() !== s[a].valueOf())) return !1
  }
  return !0
}

function Hu(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const Bu = (e, t, r) => e ?? t ?? r,
  Qw = Mt({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
      name: {
        type: String,
        default: "default"
      },
      route: Object
    },
    compatConfig: {
      MODE: 3
    },
    setup(e, {
      attrs: t,
      slots: r
    }) {
      const n = at(Qo),
        s = $(() => e.route || n.value),
        i = at(Iu, 0),
        a = $(() => {
          let u = ze(i);
          const {
            matched: c
          } = s.value;
          let f;
          for (;
            (f = c[u]) && !f.components;) u++;
          return u
        }),
        o = $(() => s.value.matched[a.value]);
      qr(Iu, $(() => a.value + 1)), qr(Rw, o), qr(Qo, s);
      const l = _e();
      return gt(() => [l.value, o.value, e.name], ([u, c, f], [d, _, m]) => {
        c && (c.instances[f] = u, _ && _ !== c && u && u === d && (c.leaveGuards.size || (c.leaveGuards = _.leaveGuards), c.updateGuards.size || (c.updateGuards = _.updateGuards))), u && c && (!_ || !Qn(c, _) || !d) && (c.enterCallbacks[f] || [])
          .forEach(E => E(u))
      }, {
        flush: "post"
      }), () => {
        const u = s.value,
          c = e.name,
          f = o.value,
          d = f && f.components[c];
        if (!d) return Vu(r.default, {
          Component: d,
          route: u
        });
        const _ = f.props[c],
          m = _ ? _ === !0 ? u.params : typeof _ == "function" ? _(u) : _ : null,
          R = ft(d, Me({}, m, t, {
            onVnodeUnmounted: O => {
              O.component.isUnmounted && (f.instances[c] = null)
            },
            ref: l
          }));
        return Vu(r.default, {
          Component: R,
          route: u
        }) || R
      }
    }
  });

function Vu(e, t) {
  if (!e) return null;
  const r = e(t);
  return r.length === 1 ? r[0] : r
}
const L_ = Qw;

function eb(e) {
  const t = $w(e.routes, e),
    r = e.parseQuery || Cw,
    n = e.stringifyQuery || Ou,
    s = e.history,
    i = gs(),
    a = gs(),
    o = gs(),
    l = zt(Bt);
  let u = Bt;
  Fn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const c = no.bind(null, H => "" + H),
    f = no.bind(null, cw),
    d = no.bind(null, Us);

  function _(H, ne) {
    let Q, ae;
    return C_(H) ? (Q = t.getRecordMatcher(H), ae = ne) : ae = H, t.addRoute(ae, Q)
  }

  function m(H) {
    const ne = t.getRecordMatcher(H);
    ne && t.removeRoute(ne)
  }

  function E() {
    return t.getRoutes()
      .map(H => H.record)
  }

  function R(H) {
    return !!t.getRecordMatcher(H)
  }

  function O(H, ne) {
    if (ne = Me({}, ne || l.value), typeof H == "string") {
      const S = so(r, H, ne.path),
        F = t.resolve({
          path: S.path
        }, ne),
        q = s.createHref(S.fullPath);
      return Me(S, F, {
        params: d(F.params),
        hash: Us(S.hash),
        redirectedFrom: void 0,
        href: q
      })
    }
    let Q;
    if (H.path != null) Q = Me({}, H, {
      path: so(r, H.path, ne.path)
        .path
    });
    else {
      const S = Me({}, H.params);
      for (const F in S) S[F] == null && delete S[F];
      Q = Me({}, H, {
        params: f(S)
      }), ne.params = f(ne.params)
    }
    const ae = t.resolve(Q, ne),
      he = H.hash || "";
    ae.params = c(d(ae.params));
    const Ee = dw(n, Me({}, H, {
        hash: aw(he),
        path: ae.path
      })),
      I = s.createHref(Ee);
    return Me({
      fullPath: Ee,
      hash: he,
      query: n === Ou ? Aw(H.query) : H.query || {}
    }, ae, {
      redirectedFrom: void 0,
      href: I
    })
  }

  function T(H) {
    return typeof H == "string" ? so(r, H, l.value.path) : Me({}, H)
  }

  function h(H, ne) {
    if (u !== H) return es(Ze.NAVIGATION_CANCELLED, {
      from: ne,
      to: H
    })
  }

  function p(H) {
    return g(H)
  }

  function v(H) {
    return p(Me(T(H), {
      replace: !0
    }))
  }

  function P(H, ne) {
    const Q = H.matched[H.matched.length - 1];
    if (Q && Q.redirect) {
      const {
        redirect: ae
      } = Q;
      let he = typeof ae == "function" ? ae(H, ne) : ae;
      return typeof he == "string" && (he = he.includes("?") || he.includes("#") ? he = T(he) : {
        path: he
      }, he.params = {}), Me({
        query: H.query,
        hash: H.hash,
        params: he.path != null ? {} : H.params
      }, he)
    }
  }

  function g(H, ne) {
    const Q = u = O(H),
      ae = l.value,
      he = H.state,
      Ee = H.force,
      I = H.replace === !0,
      S = P(Q, ae);
    if (S) return g(Me(T(S), {
      state: typeof S == "object" ? Me({}, he, S.state) : he,
      force: Ee,
      replace: I
    }), ne || Q);
    const F = Q;
    F.redirectedFrom = ne;
    let q;
    return !Ee && hw(n, ae, Q) && (q = es(Ze.NAVIGATION_DUPLICATED, {
        to: F,
        from: ae
      }), we(ae, ae, !0, !1)), (q ? Promise.resolve(q) : N(F, ae))
      .catch(j => mr(j) ? mr(j, Ze.NAVIGATION_GUARD_REDIRECT) ? j : Pe(j) : se(j, F, ae))
      .then(j => {
        if (j) {
          if (mr(j, Ze.NAVIGATION_GUARD_REDIRECT)) return g(Me({
            replace: I
          }, T(j.to), {
            state: typeof j.to == "object" ? Me({}, he, j.to.state) : he,
            force: Ee
          }), ne || F)
        } else j = k(F, ae, !0, I, he);
        return B(F, ae, j), j
      })
  }

  function L(H, ne) {
    const Q = h(H, ne);
    return Q ? Promise.reject(Q) : Promise.resolve()
  }

  function b(H) {
    const ne = He.values()
      .next()
      .value;
    return ne && typeof ne.runWithContext == "function" ? ne.runWithContext(H) : H()
  }

  function N(H, ne) {
    let Q;
    const [ae, he, Ee] = Ow(H, ne);
    Q = ao(ae.reverse(), "beforeRouteLeave", H, ne);
    for (const S of ae) S.leaveGuards.forEach(F => {
      Q.push(Kr(F, H, ne))
    });
    const I = L.bind(null, H, ne);
    return Q.push(I), ke(Q)
      .then(() => {
        Q = [];
        for (const S of i.list()) Q.push(Kr(S, H, ne));
        return Q.push(I), ke(Q)
      })
      .then(() => {
        Q = ao(he, "beforeRouteUpdate", H, ne);
        for (const S of he) S.updateGuards.forEach(F => {
          Q.push(Kr(F, H, ne))
        });
        return Q.push(I), ke(Q)
      })
      .then(() => {
        Q = [];
        for (const S of Ee)
          if (S.beforeEnter)
            if (tr(S.beforeEnter))
              for (const F of S.beforeEnter) Q.push(Kr(F, H, ne));
            else Q.push(Kr(S.beforeEnter, H, ne));
        return Q.push(I), ke(Q)
      })
      .then(() => (H.matched.forEach(S => S.enterCallbacks = {}), Q = ao(Ee, "beforeRouteEnter", H, ne, b), Q.push(I), ke(Q)))
      .then(() => {
        Q = [];
        for (const S of a.list()) Q.push(Kr(S, H, ne));
        return Q.push(I), ke(Q)
      })
      .catch(S => mr(S, Ze.NAVIGATION_CANCELLED) ? S : Promise.reject(S))
  }

  function B(H, ne, Q) {
    o.list()
      .forEach(ae => b(() => ae(H, ne, Q)))
  }

  function k(H, ne, Q, ae, he) {
    const Ee = h(H, ne);
    if (Ee) return Ee;
    const I = ne === Bt,
      S = Fn ? history.state : {};
    Q && (ae || I ? s.replace(H.fullPath, Me({
      scroll: I && S && S.scroll
    }, he)) : s.push(H.fullPath, he)), l.value = H, we(H, ne, Q, I), Pe()
  }
  let W;

  function Y() {
    W || (W = s.listen((H, ne, Q) => {
      if (!De.listening) return;
      const ae = O(H),
        he = P(ae, De.currentRoute.value);
      if (he) {
        g(Me(he, {
            replace: !0,
            force: !0
          }), ae)
          .catch(Os);
        return
      }
      u = ae;
      const Ee = l.value;
      Fn && ww(Ru(Ee.fullPath, Q.delta), wa()), N(ae, Ee)
        .catch(I => mr(I, Ze.NAVIGATION_ABORTED | Ze.NAVIGATION_CANCELLED) ? I : mr(I, Ze.NAVIGATION_GUARD_REDIRECT) ? (g(Me(T(I.to), {
            force: !0
          }), ae)
          .then(S => {
            mr(S, Ze.NAVIGATION_ABORTED | Ze.NAVIGATION_DUPLICATED) && !Q.delta && Q.type === zo.pop && s.go(-1, !1)
          })
          .catch(Os), Promise.reject()) : (Q.delta && s.go(-Q.delta, !1), se(I, ae, Ee)))
        .then(I => {
          I = I || k(ae, Ee, !1), I && (Q.delta && !mr(I, Ze.NAVIGATION_CANCELLED) ? s.go(-Q.delta, !1) : Q.type === zo.pop && mr(I, Ze.NAVIGATION_ABORTED | Ze.NAVIGATION_DUPLICATED) && s.go(-1, !1)), B(ae, Ee, I)
        })
        .catch(Os)
    }))
  }
  let ee = gs(),
    X = gs(),
    re;

  function se(H, ne, Q) {
    Pe(H);
    const ae = X.list();
    return ae.length ? ae.forEach(he => he(H, ne, Q)) : console.error(H), Promise.reject(H)
  }

  function de() {
    return re && l.value !== Bt ? Promise.resolve() : new Promise((H, ne) => {
      ee.add([H, ne])
    })
  }

  function Pe(H) {
    return re || (re = !H, Y(), ee.list()
      .forEach(([ne, Q]) => H ? Q(H) : ne()), ee.reset()), H
  }

  function we(H, ne, Q, ae) {
    const {
      scrollBehavior: he
    } = e;
    if (!Fn || !he) return Promise.resolve();
    const Ee = !Q && bw(Ru(H.fullPath, 0)) || (ae || !Q) && history.state && history.state.scroll || null;
    return Tn()
      .then(() => he(H, ne, Ee))
      .then(I => I && Ew(I))
      .catch(I => se(I, H, ne))
  }
  const ye = H => s.go(H);
  let Ye;
  const He = new Set,
    De = {
      currentRoute: l,
      listening: !0,
      addRoute: _,
      removeRoute: m,
      clearRoutes: t.clearRoutes,
      hasRoute: R,
      getRoutes: E,
      resolve: O,
      options: e,
      push: p,
      replace: v,
      go: ye,
      back: () => ye(-1),
      forward: () => ye(1),
      beforeEach: i.add,
      beforeResolve: a.add,
      afterEach: o.add,
      onError: X.add,
      isReady: de,
      install(H) {
        H.component("RouterLink", Zw), H.component("RouterView", L_), H.config.globalProperties.$router = De, Object.defineProperty(H.config.globalProperties, "$route", {
          enumerable: !0,
          get: () => ze(l)
        }), Fn && !Ye && l.value === Bt && (Ye = !0, p(s.location)
          .catch(ae => {}));
        const ne = {};
        for (const ae in Bt) Object.defineProperty(ne, ae, {
          get: () => l.value[ae],
          enumerable: !0
        });
        H.provide(ba, De), H.provide(Yl, Pr(ne)), H.provide(Qo, l);
        const Q = H.unmount;
        He.add(H), H.unmount = function() {
          He.delete(H), He.size < 1 && (u = Bt, W && W(), W = null, l.value = Bt, Ye = !1, re = !1), Q()
        }
      }
    };

  function ke(H) {
    return H.reduce((ne, Q) => ne.then(() => b(Q)), Promise.resolve())
  }
  return De
}

function OR() {
  return at(ba)
}

function tb(e) {
  return at(Yl)
}
const rb = /(:\w+)\([^)]+\)/g,
  nb = /(:\w+)[?+*]/g,
  sb = /:\w+/g,
  ib = (e, t) => t.path.replace(rb, "$1")
  .replace(nb, "$1")
  .replace(sb, r => {
    var n;
    return ((n = e.params[r.slice(1)]) == null ? void 0 : n.toString()) || ""
  }),
  el = (e, t) => {
    const r = e.route.matched.find(s => {
        var i;
        return ((i = s.components) == null ? void 0 : i.default) === e.Component.type
      }),
      n = t ?? (r == null ? void 0 : r.meta.key) ?? (r && ib(e.route, r));
    return typeof n == "function" ? n(e.route) : n
  },
  ab = (e, t) => ({
    default: () => e ? ft(Xm, e === !0 ? {} : e, t) : t
  });

function Xl(e) {
  return Array.isArray(e) ? e : [e]
}
const Uu = {
    validate: ({
      params: e
    }) => /^[pd]\d+$/.test(e.erp)
  },
  Gu = {
    layout: "staticlayout",
    meta: {
      disableEsi: !0
    }
  },
  oo = [{
    name: "p-productName-erp",
    path: "/p/:productName?/:erp()",
    meta: {
      ...Uu || {},
      middleware: ["referrer", "product"]
    },
    component: () => G(() => import("./DtPERwyr.js")
      .then(e => e.i), __vite__mapDeps([0, 1, 2, 3]), import.meta.url)
  }, {
    name: "p-deliveryCharges-erp",
    path: "/p/deliveryCharges/:erp()",
    meta: {
      ...Gu || {},
      middleware: "meta"
    },
    component: () => G(() => import("./C1Ak-wks.js"), __vite__mapDeps([4, 2, 5]), import.meta.url)
  }, {
    name: "p-static-deliveryCharges",
    path: "/p/static/deliveryCharges",
    component: () => G(() => import("./DhiQqYYJ.js"), __vite__mapDeps([6, 7]), import.meta.url)
  }, {
    name: "p-static-additionalServices",
    path: "/p/static/additionalServices",
    component: () => G(() => import("./D4PVHm5X.js"), __vite__mapDeps([8, 9]), import.meta.url)
  }, {
    name: "delivery-charges-dynamic-content-multilingual-shops",
    path: "/p/:language-:country/deliveryCharges/:erp",
    meta: {
      ...Gu || {},
      middleware: "meta"
    },
    component: () => G(() => import("./C1Ak-wks.js"), __vite__mapDeps([4, 2, 5]), import.meta.url)
  }, {
    name: "delivery-charges-multilingual-shops",
    path: "/p/:language-:country/static/deliveryCharges",
    component: () => G(() => import("./DhiQqYYJ.js"), __vite__mapDeps([6, 7]), import.meta.url)
  }, {
    name: "additional-services-multilingual-shops",
    path: "/p/:language-:country/static/additionalServices",
    component: () => G(() => import("./D4PVHm5X.js"), __vite__mapDeps([8, 9]), import.meta.url)
  }, {
    name: "multilingual-shops",
    path: "/p/:language-:country/:productName/:erp",
    meta: {
      ...Uu || {},
      middleware: ["referrer", "product"]
    },
    component: () => G(() => import("./DtPERwyr.js")
      .then(e => e.i), __vite__mapDeps([0, 1, 2, 3]), import.meta.url)
  }],
  D_ = (e, t) => ({
    default: () => {
      var r;
      return e ? ft(Wg, e === !0 ? {} : e, t) : (r = t.default) == null ? void 0 : r.call(t)
    }
  }),
  ob = /(:\w+)\([^)]+\)/g,
  lb = /(:\w+)[?+*]/g,
  cb = /:\w+/g;

function $u(e) {
  const t = (e == null ? void 0 : e.meta.key) ?? e.path.replace(ob, "$1")
    .replace(lb, "$1")
    .replace(cb, r => {
      var n;
      return ((n = e.params[r.slice(1)]) == null ? void 0 : n.toString()) || ""
    });
  return typeof t == "function" ? t(e) : t
}

function ub(e, t) {
  return e === t || t === Bt ? !1 : $u(e) !== $u(t) ? !0 : !e.matched.every((n, s) => {
    var i, a;
    return n.components && n.components.default === ((a = (i = t.matched[s]) == null ? void 0 : i.components) == null ? void 0 : a.default)
  })
}
const fb = {
  scrollBehavior(e, t, r) {
    var l;
    const n = qe(),
      s = ((l = Ut()
        .options) == null ? void 0 : l.scrollBehaviorType) ?? "auto";
    if (e.path === t.path) return t.hash && !e.hash ? {
      left: 0,
      top: 0
    } : e.hash ? {
      el: e.hash,
      top: k_(e.hash),
      behavior: s
    } : !1;
    if ((typeof e.meta.scrollToTop == "function" ? e.meta.scrollToTop(e, t) : e.meta.scrollToTop) === !1) return !1;
    let a = r || void 0;
    !a && ub(e, t) && (a = {
      left: 0,
      top: 0
    });
    const o = n._runningTransition ? "page:transition:finish" : "page:loading:end";
    return new Promise(u => {
      if (t === Bt) {
        u(Wu(e, "instant", a));
        return
      }
      n.hooks.hookOnce(o, () => {
        requestAnimationFrame(() => u(Wu(e, "instant", a)))
      })
    })
  }
};

function k_(e) {
  try {
    const t = document.querySelector(e);
    if (t) return (Number.parseFloat(getComputedStyle(t)
      .scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle(document.documentElement)
      .scrollPaddingTop) || 0)
  } catch {}
  return 0
}

function Wu(e, t, r) {
  return r || (e.hash ? {
    el: e.hash,
    top: k_(e.hash),
    behavior: t
  } : {
    left: 0,
    top: 0,
    behavior: t
  })
}
const db = {
    hashMode: !1,
    scrollBehaviorType: "auto"
  },
  sr = {
    ...db,
    ...fb
  },
  hb = async (e, t) => {
    var a;
    let r, n;
    if (!((a = e.meta) != null && a.validate)) return;
    const s = ([r, n] = zr(() => Promise.resolve(e.meta.validate(e))), r = await r, n(), r);
    if (s === !0) return;
    const i = Or({
      fatal: !0,
      statusCode: s && s.statusCode || 404,
      statusMessage: s && s.statusMessage || `Page Not Found: ${e.fullPath}`,
      data: {
        path: e.fullPath
      }
    });
    return typeof window < "u" && window.history.pushState({}, "", t.fullPath), i
  };
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let ql;
const Zs = e => ql = e,
  Ie = () => Ys() && at(Zl) || ql,
  Zl = Symbol();

function tl(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
}
var Is;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function"
})(Is || (Is = {}));

function _b() {
  const e = ss(!0),
    t = e.run(() => _e({}));
  let r = [],
    n = [];
  const s = Al({
    install(i) {
      Zs(s), s._a = i, i.provide(Zl, s), i.config.globalProperties.$pinia = s, n.forEach(a => r.push(a)), n = []
    },
    use(i) {
      return this._a ? r.push(i) : n.push(i), this
    },
    _p: r,
    _a: null,
    _e: e,
    _s: new Map,
    state: t
  });
  return s
}
const N_ = () => {};

function ju(e, t, r, n = N_) {
  e.push(t);
  const s = () => {
    const i = e.indexOf(t);
    i > -1 && (e.splice(i, 1), n())
  };
  return !r && ua() && ks(s), s
}

function Nn(e, ...t) {
  e.slice()
    .forEach(r => {
      r(...t)
    })
}
const pb = e => e(),
  Ku = Symbol(),
  lo = Symbol();

function rl(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((r, n) => e.set(n, r)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const r in t) {
    if (!t.hasOwnProperty(r)) continue;
    const n = t[r],
      s = e[r];
    tl(s) && tl(n) && e.hasOwnProperty(r) && !Ue(n) && !Zt(n) ? e[r] = rl(s, n) : e[r] = n
  }
  return e
}
const mb = Symbol();

function gb(e) {
  return !tl(e) || !e.hasOwnProperty(mb)
}
const {
  assign: $r
} = Object;

function vb(e) {
  return !!(Ue(e) && e.effect)
}

function yb(e, t, r, n) {
  const {
    state: s,
    actions: i,
    getters: a
  } = t, o = r.state.value[e];
  let l;

  function u() {
    o || (r.state.value[e] = s ? s() : {});
    const c = Pm(r.state.value[e]);
    return $r(c, i, Object.keys(a || {})
      .reduce((f, d) => (f[d] = Al($(() => {
        Zs(r);
        const _ = r._s.get(e);
        return a[d].call(_, _)
      })), f), {}))
  }
  return l = M_(e, u, t, r, n, !0), l
}

function M_(e, t, r = {}, n, s, i) {
  let a;
  const o = $r({
      actions: {}
    }, r),
    l = {
      deep: !0
    };
  let u, c, f = [],
    d = [],
    _;
  const m = n.state.value[e];
  !i && !m && (n.state.value[e] = {});
  let E;

  function R(L) {
    let b;
    u = c = !1, typeof L == "function" ? (L(n.state.value[e]), b = {
      type: Is.patchFunction,
      storeId: e,
      events: _
    }) : (rl(n.state.value[e], L), b = {
      type: Is.patchObject,
      payload: L,
      storeId: e,
      events: _
    });
    const N = E = Symbol();
    Tn()
      .then(() => {
        E === N && (u = !0)
      }), c = !0, Nn(f, b, n.state.value[e])
  }
  const O = i ? function() {
    const {
      state: b
    } = r, N = b ? b() : {};
    this.$patch(B => {
      $r(B, N)
    })
  } : N_;

  function T() {
    a.stop(), f = [], d = [], n._s.delete(e)
  }
  const h = (L, b = "") => {
      if (Ku in L) return L[lo] = b, L;
      const N = function() {
        Zs(n);
        const B = Array.from(arguments),
          k = [],
          W = [];

        function Y(re) {
          k.push(re)
        }

        function ee(re) {
          W.push(re)
        }
        Nn(d, {
          args: B,
          name: N[lo],
          store: v,
          after: Y,
          onError: ee
        });
        let X;
        try {
          X = L.apply(this && this.$id === e ? this : v, B)
        } catch (re) {
          throw Nn(W, re), re
        }
        return X instanceof Promise ? X.then(re => (Nn(k, re), re))
          .catch(re => (Nn(W, re), Promise.reject(re))) : (Nn(k, X), X)
      };
      return N[Ku] = !0, N[lo] = b, N
    },
    p = {
      _p: n,
      $id: e,
      $onAction: ju.bind(null, d),
      $patch: R,
      $reset: O,
      $subscribe(L, b = {}) {
        const N = ju(f, L, b.detached, () => B()),
          B = a.run(() => gt(() => n.state.value[e], k => {
            (b.flush === "sync" ? c : u) && L({
              storeId: e,
              type: Is.direct,
              events: _
            }, k)
          }, $r({}, l, b)));
        return N
      },
      $dispose: T
    },
    v = Mr(p);
  n._s.set(e, v);
  const g = (n._a && n._a.runWithContext || pb)(() => n._e.run(() => (a = ss())
    .run(() => t({
      action: h
    }))));
  for (const L in g) {
    const b = g[L];
    if (Ue(b) && !vb(b) || Zt(b)) i || (m && gb(b) && (Ue(b) ? b.value = m[L] : rl(b, m[L])), n.state.value[e][L] = b);
    else if (typeof b == "function") {
      const N = h(b, L);
      g[L] = N, o.actions[L] = b
    }
  }
  return $r(v, g), $r(Se(v), g), Object.defineProperty(v, "$state", {
    get: () => n.state.value[e],
    set: L => {
      R(b => {
        $r(b, L)
      })
    }
  }), n._p.forEach(L => {
    $r(v, a.run(() => L({
      store: v,
      app: n._a,
      pinia: n,
      options: o
    })))
  }), m && i && r.hydrate && r.hydrate(v.$state, m), u = !0, c = !0, v
} /*! #__NO_SIDE_EFFECTS__ */
function ot(e, t, r) {
  let n, s;
  const i = typeof t == "function";
  typeof e == "string" ? (n = e, s = i ? r : t) : (s = e, n = e.id);

  function a(o, l) {
    const u = Ys();
    return o = o || (u ? at(Zl, null) : null), o && Zs(o), o = ql, o._s.has(n) || (i ? M_(n, t, s, o) : yb(n, s, o)), o._s.get(n)
  }
  return a.$id = n, a
}

function Ir(e) {
  {
    const t = Se(e),
      r = {};
    for (const n in t) {
      const s = t[n];
      s.effect ? r[n] = $({
        get: () => e[n],
        set(i) {
          e[n] = i
        }
      }) : (Ue(s) || Zt(s)) && (r[n] = Rl(e, n))
    }
    return r
  }
}
var ge = (e => (e.de_DE = "de_DE", e.en_GB = "en_GB", e.sk_SK = "sk_SK", e.pl_PL = "pl_PL", e.nl_NL = "nl_NL", e.cs_CZ = "cs_CZ", e.fr_BE = "fr_BE", e.nl_BE = "nl_BE", e.de_AT = "de_AT", e.es_ES = "es_ES", e.en_US = "en_US", e.da_DK = "da_DK", e.it_IT = "it_IT", e.hu_HU = "hu_HU", e.fr_FR = "fr_FR", e.ix_IX = "ix_IX", e.en_MT = "en_MT", e.de_CH = "de_CH", e.fr_CH = "fr_CH", e.it_CH = "it_CH", e.sr_RS = "sr_RS", e.sv_SE = "sv_SE", e.ro_RO = "ro_RO", e.bg_BG = "bg_BG", e.el_GR = "el_GR", e.en_CY = "en_CY", e.el_CY = "el_CY", e.en_IE = "en_IE", e.en_XI = "en_XI", e.fr_LU = "fr_LU", e.sl_SI = "sl_SI", e.pt_PT = "pt_PT", e.fi_FI = "fi_FI", e.lv_LV = "lv_LV", e.lt_LT = "lt_LT", e.ru_LV = "ru_LV", e.et_EE = "et_EE", e.ru_EE = "ru_EE", e.hr_HR = "hr_HR", e))(ge || {});
const Eb = /^(?<language>[a-z]{2})[-_](?<country>[A-Z]{2,3})$/i,
  dr = ot("locale", {
    state: () => ({
      country: "GB",
      language: "en"
    }),
    getters: {
      locale: e => ge[`${e.language}_${e.country}`]
    },
    actions: {
      setLocale(e) {
        var s, i, a;
        const t = (s = Eb.exec(e)) == null ? void 0 : s.groups,
          r = (i = t == null ? void 0 : t.country) == null ? void 0 : i.toUpperCase(),
          n = (a = t == null ? void 0 : t.language) == null ? void 0 : a.toLowerCase();
        r && n && `${n}_${r}` in ge && (this.country = r, this.language = n)
      }
    }
  }),
  wb = ({
    query: e
  }) => {
    const t = dr(),
      r = e.locale;
    r && t.setLocale(r)
  },
  bb = async e => {
    let t, r;
    const n = ([t, r] = zr(() => Wl({
      path: e.path
    })), t = await t, r(), t);
    if (n.redirect) return Rn(n.redirect, {
      acceptRelative: !0
    }) ? (window.location.href = n.redirect, !1) : n.redirect
  }, Tb = [hb, wb, bb], Ls = {
    meta: () => G(() => import("./hNxPAx8C.js"), [], import.meta.url),
    product: () => G(() => import("./CqFKUVWf.js"), [], import.meta.url),
    referrer: () => G(() => import("./B2qYlI2D.js"), [], import.meta.url)
  };

function Sb(e, t, r) {
  const {
    pathname: n,
    search: s,
    hash: i
  } = t, a = e.indexOf("#");
  if (a > -1) {
    const u = i.includes(e.slice(a)) ? e.slice(a)
      .length : 1;
    let c = i.slice(u);
    return c[0] !== "/" && (c = "/" + c), lu(c, "")
  }
  const o = lu(n, e),
    l = !r || Xv(o, r) ? o : r;
  return l + (l.includes("?") ? "" : s) + i
}
const Pb = Ke({
    name: "nuxt:router",
    enforce: "pre",
    async setup(e) {
      var R;
      let t, r, n = Fr()
        .app.baseURL;
      const s = ((R = sr.history) == null ? void 0 : R.call(sr, n)) ?? kw(n),
        i = sr.routes ? ([t, r] = zr(() => sr.routes(oo)), t = await t, r(), t ?? oo) : oo;
      let a;
      const o = eb({
        ...sr,
        scrollBehavior: (O, T, h) => {
          if (T === Bt) {
            a = h;
            return
          }
          if (sr.scrollBehavior) {
            if (o.options.scrollBehavior = sr.scrollBehavior, "scrollRestoration" in window.history) {
              const p = o.beforeEach(() => {
                p(), window.history.scrollRestoration = "manual"
              })
            }
            return sr.scrollBehavior(O, Bt, a || h)
          }
        },
        history: s,
        routes: i
      });
      "scrollRestoration" in window.history && (window.history.scrollRestoration = "auto"), e.vueApp.use(o);
      const l = zt(o.currentRoute.value);
      o.afterEach((O, T) => {
        l.value = T
      }), Object.defineProperty(e.vueApp.config.globalProperties, "previousRoute", {
        get: () => l.value
      });
      const u = Sb(n, window.location, e.payload.path),
        c = zt(o.currentRoute.value),
        f = () => {
          c.value = o.currentRoute.value
        };
      e.hook("page:finish", f), o.afterEach((O, T) => {
        var h, p, v, P;
        ((p = (h = O.matched[0]) == null ? void 0 : h.components) == null ? void 0 : p.default) === ((P = (v = T.matched[0]) == null ? void 0 : v.components) == null ? void 0 : P.default) && f()
      });
      const d = {};
      for (const O in c.value) Object.defineProperty(d, O, {
        get: () => c.value[O],
        enumerable: !0
      });
      e._route = Pr(d), e._middleware || (e._middleware = {
        global: [],
        named: {}
      });
      const _ = ya();
      o.afterEach(async (O, T, h) => {
        delete e._processingMiddleware, !e.isHydrating && _.value && await e.runWithContext(Ky), h && await e.callHook("page:loading:end")
      });
      try {
        [t, r] = zr(() => o.isReady()), await t, r()
      } catch (O) {
        [t, r] = zr(() => e.runWithContext(() => pn(O))), await t, r()
      }
      const m = u !== o.currentRoute.value.fullPath ? o.resolve(u) : o.currentRoute.value;
      f();
      const E = e.payload.state._layout;
      return o.beforeEach(async (O, T) => {
        var h;
        await e.callHook("page:loading:start"), O.meta = Mr(O.meta), e.isHydrating && E && !fr(O.meta.layout) && (O.meta.layout = E), e._processingMiddleware = !0;
        {
          const p = new Set([...Tb, ...e._middleware.global]);
          for (const v of O.matched) {
            const P = v.meta.middleware;
            if (P)
              for (const g of Xl(P)) p.add(g)
          } {
            const v = await e.runWithContext(() => Wl({
              path: O.path
            }));
            if (v.appMiddleware)
              for (const P in v.appMiddleware) v.appMiddleware[P] ? p.add(P) : p.delete(P)
          }
          for (const v of p) {
            const P = typeof v == "string" ? e._middleware.named[v] || await ((h = Ls[v]) == null ? void 0 : h.call(Ls)
              .then(g => g.default || g)) : v;
            if (!P) throw new Error(`Unknown route middleware: '${v}'.`);
            try {
              const g = await e.runWithContext(() => P(O, T));
              if (!e.payload.serverRendered && e.isHydrating && (g === !1 || g instanceof Error)) {
                const L = g || Or({
                  statusCode: 404,
                  statusMessage: `Page Not Found: ${u}`
                });
                return await e.runWithContext(() => pn(L)), !1
              }
              if (g === !0) continue;
              if (g === !1) return g;
              if (g) return c_(g) && g.fatal && await e.runWithContext(() => pn(g)), g
            } catch (g) {
              const L = Or(g);
              return L.fatal && await e.runWithContext(() => pn(L)), L
            }
          }
        }
      }), o.onError(async () => {
        delete e._processingMiddleware, await e.callHook("page:loading:end")
      }), o.afterEach(async (O, T) => {
        O.matched.length === 0 && await e.runWithContext(() => pn(Or({
          statusCode: 404,
          fatal: !1,
          statusMessage: `Page not found: ${O.fullPath}`,
          data: {
            path: O.fullPath
          }
        })))
      }), e.hooks.hookOnce("app:created", async () => {
        try {
          "name" in m && (m.name = void 0), await o.replace({
            ...m,
            force: !0
          }), o.options.scrollBehavior = sr.scrollBehavior
        } catch (O) {
          await e.runWithContext(() => pn(O))
        }
      }), {
        provide: {
          router: o
        }
      }
    }
  }),
  Yu = globalThis.requestIdleCallback || (e => {
    const t = Date.now(),
      r = {
        didTimeout: !1,
        timeRemaining: () => Math.max(0, 50 - (Date.now() - t))
      };
    return setTimeout(() => {
      e(r)
    }, 1)
  }),
  IR = globalThis.cancelIdleCallback || (e => {
    clearTimeout(e)
  }),
  zl = e => {
    const t = qe();
    t.isHydrating ? t.hooks.hookOnce("app:suspense:resolve", () => {
      Yu(() => e())
    }) : Yu(() => e())
  },
  Cb = Ke({
    name: "nuxt:payload",
    setup(e) {
      const t = new Set;
      Ut()
        .beforeResolve(async (r, n) => {
          if (r.path === n.path) return;
          const s = await Su(r.path);
          if (s) {
            for (const i of t) delete e.static.data[i];
            for (const i in s.data) i in e.static.data || t.add(i), e.static.data[i] = s.data[i]
          }
        }), zl(() => {
          var r;
          e.hooks.hook("link:prefetch", async n => {
            const {
              hostname: s
            } = new URL(n, window.location.href);
            s === window.location.hostname && await Su(n)
              .catch(() => {
                console.warn("[nuxt] Error preloading payload for", n)
              })
          }), ((r = navigator.connection) == null ? void 0 : r.effectiveType) !== "slow-2g" && setTimeout(Ea, 1e3)
        })
    }
  }),
  Ab = Ke(() => {
    const e = Ut();
    zl(() => {
      e.beforeResolve(async () => {
        await new Promise(t => {
          setTimeout(t, 100), requestAnimationFrame(() => {
            setTimeout(t, 0)
          })
        })
      })
    })
  }),
  Rb = Ke(e => {
    let t;
    async function r() {
      const n = await Ea();
      t && clearTimeout(t), t = setTimeout(r, _u);
      try {
        const s = await $fetch($l("builds/latest.json") + `?${Date.now()}`);
        s.id !== n.id && e.hooks.callHook("app:manifest:update", s)
      } catch {}
    }
    zl(() => {
      t = setTimeout(r, _u)
    })
  });

function Ob(e = {}) {
  const t = e.path || window.location.pathname;
  let r = {};
  try {
    r = Ki(sessionStorage.getItem("nuxt:reload") || "{}")
  } catch {}
  if (e.force || (r == null ? void 0 : r.path) !== t || (r == null ? void 0 : r.expires) < Date.now()) {
    try {
      sessionStorage.setItem("nuxt:reload", JSON.stringify({
        path: t,
        expires: Date.now() + (e.ttl ?? 1e4)
      }))
    } catch {}
    if (e.persistState) try {
      sessionStorage.setItem("nuxt:reload:state", JSON.stringify({
        state: qe()
          .payload.state
      }))
    } catch {}
    window.location.pathname !== t ? window.location.href = t : window.location.reload()
  }
}
const Xu = e => {
    Ob({
      persistState: !0,
      path: e
    })
  },
  Ib = Ke({
    name: "nuxt:chunk-reload-immediate",
    setup(e) {
      let t = null;
      $y(r => {
        t = r.path
      }), e.hook("app:chunkError", () => Xu(t ?? e._route.path)), e.hook("app:manifest:update", () => Xu(e._route.path))
    }
  }),
  Lb = {
    trailing: !0
  };

function Db(e, t = 25, r = {}) {
  if (r = {
      ...Lb,
      ...r
    }, !Number.isFinite(t)) throw new TypeError("Expected `wait` to be a finite number");
  let n, s, i = [],
    a, o;
  const l = (u, c) => (a = kb(e, u, c), a.finally(() => {
    if (a = null, r.trailing && o && !s) {
      const f = l(u, o);
      return o = null, f
    }
  }), a);
  return function(...u) {
    return a ? (r.trailing && (o = u), a) : new Promise(c => {
      const f = !s && r.leading;
      clearTimeout(s), s = setTimeout(() => {
        s = null;
        const d = r.leading ? n : l(this, u);
        for (const _ of i) _(d);
        i = []
      }, t), f ? (n = l(this, u), c(n)) : i.push(c)
    })
  }
}
async function kb(e, t, r) {
  return await e.apply(t, r)
}
const x_ = Symbol.for("nuxt:client-only"),
  LR = Mt({
    name: "ClientOnly",
    inheritAttrs: !1,
    props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
    setup(e, {
      slots: t,
      attrs: r
    }) {
      const n = _e(!1);
      An(() => {
        n.value = !0
      });
      const s = tt();
      return s && (s._nuxtClientOnly = !0), qr(x_, !0), i => {
        var u;
        if (n.value) return (u = t.default) == null ? void 0 : u.call(t);
        const a = t.fallback || t.placeholder;
        if (a) return a();
        const o = i.fallback || i.placeholder || "",
          l = i.fallbackTag || i.placeholderTag || "span";
        return As(l, r, o)
      }
    }
  }),
  Nb = e => e === "defer" || e === !1;

function Mb(...e) {
  var E;
  const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
  typeof e[0] != "string" && typeof e[0] != "object" && !(typeof e[0] == "function" && typeof e[1] == "function") && e.unshift(t);
  let [r, n, s = {}] = e;
  const i = $(() => Ld(r));
  if (typeof i.value != "string") throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
  if (typeof n != "function") throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
  const a = qe(),
    o = () => Cr.value,
    l = (R, O, T) => {
      if (O.isHydrating) return O.payload.data[R];
      if (T.cause !== "refresh:manual" && T.cause !== "refresh:hook") return O.static.data[R]
    };
  s.server ?? (s.server = !0), s.default ?? (s.default = o), s.getCachedData ?? (s.getCachedData = l), s.lazy ?? (s.lazy = !1), s.immediate ?? (s.immediate = !0), s.deep ?? (s.deep = Cr.deep), s.dedupe ?? (s.dedupe = "cancel"), s._functionName, a._asyncData[i.value];
  const u = s.getCachedData(i.value, a, {
    cause: "initial"
  });
  (E = a._asyncData[i.value]) != null && E._init || (a._asyncData[i.value] = Zu(a, i.value, n, s, u));
  const c = a._asyncData[i.value];
  c._deps++;
  const f = () => a._asyncData[i.value].execute({
      cause: "initial",
      dedupe: s.dedupe
    }),
    d = s.server !== !1 && a.payload.serverRendered;
  {
    let R = function(v) {
      const P = a._asyncData[v];
      P != null && P._deps && (P._deps--, P._deps === 0 && (P == null || P._off(), P._init = !1, qu(a, v), P.execute = () => Promise.resolve(), a._asyncData[v].data.value = Cr.value))
    };
    const O = tt();
    if (O && d && s.immediate && !O.sp && (O.sp = []), O && !O._nuxtOnBeforeMountCbs) {
      O._nuxtOnBeforeMountCbs = [];
      const v = O._nuxtOnBeforeMountCbs;
      kl(() => {
        v.forEach(P => {
          P()
        }), v.splice(0, v.length)
      }), as(() => v.splice(0, v.length))
    }
    const T = O && (O._nuxtClientOnly || at(x_, !1));
    d && a.isHydrating && (c.error.value || u != null) ? (c.pending.value = !1, c.status.value = c.error.value ? "error" : "success") : O && !T && (a.payload.serverRendered && a.isHydrating || s.lazy) && s.immediate ? O._nuxtOnBeforeMountCbs.push(f) : s.immediate && f();
    const h = ua();
    if (s.watch) {
      const v = gt(s.watch, () => {
        c._execute({
          cause: "watch",
          dedupe: s.dedupe
        })
      }, {
        flush: "post"
      });
      h && ks(() => v())
    }
    const p = gt(i, (v, P) => {
      var L, b;
      const g = ((L = a._asyncData[P]) == null ? void 0 : L.data.value) !== Cr.value;
      P && R(P), (b = a._asyncData[v]) != null && b._init || (a._asyncData[v] = Zu(a, v, n, s, s.getCachedData(v, a, {
        cause: "initial"
      }))), a._asyncData[v]._deps++, (s.immediate || g) && a._asyncData[v].execute({
        cause: "initial",
        dedupe: s.dedupe
      })
    }, {
      flush: "sync"
    });
    h && ks(() => {
      p(), R(i.value)
    })
  }
  const _ = {
      data: mi(() => {
        var R;
        return (R = a._asyncData[i.value]) == null ? void 0 : R.data
      }),
      pending: mi(() => {
        var R;
        return (R = a._asyncData[i.value]) == null ? void 0 : R.pending
      }),
      status: mi(() => {
        var R;
        return (R = a._asyncData[i.value]) == null ? void 0 : R.status
      }),
      error: mi(() => {
        var R;
        return (R = a._asyncData[i.value]) == null ? void 0 : R.error
      }),
      refresh: (...R) => a._asyncData[i.value].execute(...R),
      execute: (...R) => a._asyncData[i.value].execute(...R),
      clear: () => qu(a, i.value)
    },
    m = Promise.resolve(a._asyncDataPromises[i.value])
    .then(() => _);
  return Object.assign(m, _), m
}

function mi(e) {
  return $({
    get() {
      var t;
      return (t = e()) == null ? void 0 : t.value
    },
    set(t) {
      const r = e();
      r && (r.value = t)
    }
  })
}

function qu(e, t) {
  t in e.payload.data && (e.payload.data[t] = void 0), t in e.payload._errors && (e.payload._errors[t] = Cr.errorValue), e._asyncData[t] && (e._asyncData[t].data.value = void 0, e._asyncData[t].error.value = Cr.errorValue, e._asyncData[t].pending.value = !1, e._asyncData[t].status.value = "idle"), t in e._asyncDataPromises && (e._asyncDataPromises[t] && (e._asyncDataPromises[t].cancelled = !0), e._asyncDataPromises[t] = void 0)
}

function xb(e, t) {
  const r = {};
  for (const n of t) r[n] = e[n];
  return r
}

function Zu(e, t, r, n, s) {
  var u;
  (u = e.payload._errors)[t] ?? (u[t] = Cr.errorValue);
  const i = r,
    a = n.deep ? _e : zt,
    o = s != null,
    l = {
      data: a(o ? s : n.default()),
      pending: zt(!o),
      error: Rl(e.payload._errors, t),
      status: zt("idle"),
      execute: (c = {}) => {
        if (e._asyncDataPromises[t]) {
          if (Nb(c.dedupe ?? n.dedupe)) return e._asyncDataPromises[t];
          e._asyncDataPromises[t].cancelled = !0
        }
        if (c.cause === "initial" || e.isHydrating) {
          const d = c.cause === "initial" ? s : n.getCachedData(t, e, {
            cause: c.cause ?? "refresh:manual"
          });
          if (d != null) return e.payload.data[t] = l.data.value = d, l.error.value = Cr.errorValue, l.status.value = "success", Promise.resolve(d)
        }
        l.pending.value = !0, l.status.value = "pending";
        const f = new Promise((d, _) => {
            try {
              d(i(e))
            } catch (m) {
              _(m)
            }
          })
          .then(async d => {
            if (f.cancelled) return e._asyncDataPromises[t];
            let _ = d;
            n.transform && (_ = await n.transform(d)), n.pick && (_ = xb(_, n.pick)), e.payload.data[t] = _, l.data.value = _, l.error.value = Cr.errorValue, l.status.value = "success"
          })
          .catch(d => {
            if (f.cancelled) return e._asyncDataPromises[t];
            l.error.value = Or(d), l.data.value = ze(n.default()), l.status.value = "error"
          })
          .finally(() => {
            f.cancelled || (l.pending.value = !1, delete e._asyncDataPromises[t])
          });
        return e._asyncDataPromises[t] = f, e._asyncDataPromises[t]
      },
      _execute: Db((...c) => l.execute(...c), 0, {
        leading: !0
      }),
      _default: n.default,
      _deps: 0,
      _init: !0,
      _hash: void 0,
      _off: e.hook("app:data:refresh", async c => {
        (!c || c.includes(t)) && await l.execute({
          cause: "refresh:hook"
        })
      })
    };
  return l
}

function DR(e) {}
const Fb = Ke({
    name: "pinia",
    setup(e) {
      const t = _b();
      return e.vueApp.use(t), Zs(t), e.payload && e.payload.pinia && (t.state.value = e.payload.pinia), {
        provide: {
          pinia: t
        }
      }
    }
  }),
  Hb = Ke({
    name: "nuxt:global-components"
  }),
  Xr = {
    default: Nc(() => G(() => import("./BWOwZLAL.js"), __vite__mapDeps([10, 1, 2, 11]), import.meta.url)
      .then(e => e.default || e)),
    staticlayout: Nc(() => G(() => import("./Bkq-lVKm.js"), __vite__mapDeps([12, 13]), import.meta.url)
      .then(e => e.default || e))
  },
  Bb = Ke({
    name: "nuxt:prefetch",
    setup(e) {
      const t = Ut();
      e.hooks.hook("app:mounted", () => {
        t.beforeEach(async r => {
          var s;
          const n = (s = r == null ? void 0 : r.meta) == null ? void 0 : s.layout;
          n && typeof Xr[n] == "function" && await Xr[n]()
        })
      }), e.hooks.hook("link:prefetch", r => {
        if (Rn(r)) return;
        const n = t.resolve(r);
        if (!n) return;
        const s = n.meta.layout;
        let i = Xl(n.meta.middleware);
        i = i.filter(a => typeof a == "string");
        for (const a of i) typeof Ls[a] == "function" && Ls[a]();
        s && typeof Xr[s] == "function" && Xr[s]()
      })
    }
  });
var gi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Ta(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var co, zu;

function Vb() {
  if (zu) return co;
  zu = 1;
  var e = "Expected a function",
    t = NaN,
    r = "[object Symbol]",
    n = /^\s+|\s+$/g,
    s = /^[-+]0x[0-9a-f]+$/i,
    i = /^0b[01]+$/i,
    a = /^0o[0-7]+$/i,
    o = parseInt,
    l = typeof gi == "object" && gi && gi.Object === Object && gi,
    u = typeof self == "object" && self && self.Object === Object && self,
    c = l || u || Function("return this")(),
    f = Object.prototype,
    d = f.toString,
    _ = Math.max,
    m = Math.min,
    E = function() {
      return c.Date.now()
    };

  function R(v, P, g) {
    var L, b, N, B, k, W, Y = 0,
      ee = !1,
      X = !1,
      re = !0;
    if (typeof v != "function") throw new TypeError(e);
    P = p(P) || 0, O(g) && (ee = !!g.leading, X = "maxWait" in g, N = X ? _(p(g.maxWait) || 0, P) : N, re = "trailing" in g ? !!g.trailing : re);

    function se(H) {
      var ne = L,
        Q = b;
      return L = b = void 0, Y = H, B = v.apply(Q, ne), B
    }

    function de(H) {
      return Y = H, k = setTimeout(ye, P), ee ? se(H) : B
    }

    function Pe(H) {
      var ne = H - W,
        Q = H - Y,
        ae = P - ne;
      return X ? m(ae, N - Q) : ae
    }

    function we(H) {
      var ne = H - W,
        Q = H - Y;
      return W === void 0 || ne >= P || ne < 0 || X && Q >= N
    }

    function ye() {
      var H = E();
      if (we(H)) return Ye(H);
      k = setTimeout(ye, Pe(H))
    }

    function Ye(H) {
      return k = void 0, re && L ? se(H) : (L = b = void 0, B)
    }

    function He() {
      k !== void 0 && clearTimeout(k), Y = 0, L = W = b = k = void 0
    }

    function De() {
      return k === void 0 ? B : Ye(E())
    }

    function ke() {
      var H = E(),
        ne = we(H);
      if (L = arguments, b = this, W = H, ne) {
        if (k === void 0) return de(W);
        if (X) return k = setTimeout(ye, P), se(W)
      }
      return k === void 0 && (k = setTimeout(ye, P)), B
    }
    return ke.cancel = He, ke.flush = De, ke
  }

  function O(v) {
    var P = typeof v;
    return !!v && (P == "object" || P == "function")
  }

  function T(v) {
    return !!v && typeof v == "object"
  }

  function h(v) {
    return typeof v == "symbol" || T(v) && d.call(v) == r
  }

  function p(v) {
    if (typeof v == "number") return v;
    if (h(v)) return t;
    if (O(v)) {
      var P = typeof v.valueOf == "function" ? v.valueOf() : v;
      v = O(P) ? P + "" : P
    }
    if (typeof v != "string") return v === 0 ? v : +v;
    v = v.replace(n, "");
    var g = i.test(v);
    return g || a.test(v) ? o(v.slice(2), g ? 2 : 8) : s.test(v) ? t : +v
  }
  return co = R, co
}
var Ub = Vb();
const Gb = Ta(Ub);
var F_ = (e => (e.GENERIC_EVENT = "gaEvent", e.PRODUCT_CLICK = "EECproductClick", e.GTM_LINK_CLICK = "gtm.linkClick", e.PRODUCT_DETAIL_VIEW = "EECproductDetailView", e.PRODUCT_IMPRESSION = "EECproductImpression", e))(F_ || {});
const H_ = e => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push(JSON.parse(JSON.stringify(e)))
  },
  $b = {
    "always-active-add-to-cart-click": "Always-active-add-to-cart_Click with add to cart event",
    "always-active-add-to-cart-invalid": "Always-active-add-to-cart_Click with invalid variant selection",
    "always-active-add-to-cart-missing": "Always-active-add-to-cart_Click without all variant attributes selected",
    "always-active-add-to-wishlist-click": "Always-active-add-to-wishlist_Click with add to wishlist event",
    "always-active-add-to-wishlist-invalid": "Always-active-add-to-wishlist_Click with invalid variant selection",
    "always-active-add-to-wishlist-missing": "Always-active-add-to-wishlist_Click without all variant attributes selected",
    "sticky-add-to-cart-click": "Sticky-add-to-cart_Click with add to cart event",
    "sticky-add-to-cart-invalid": "Sticky-add-to-cart_Click with invalid variant selection",
    "sticky-add-to-cart-missing": "Sticky-add-to-cart_Click without all variant attributes selected",
    "gallery-next": "Media Gallery_Click on Next Image Button",
    "gallery-previous": "Media Gallery_Click on Previous Image Button",
    "overlay-next": "Media Gallery Overlay_Click on Next Image Button",
    "overlay-previous": "Media Gallery Overlay_Click on Previous Image Button",
    "gallery-image": "Media Gallery_Click on Image",
    "thumbnail-image": "Media Gallery_Click on Thumbnail",
    "click-zoom": "Media Gallery Overlay_Click to Zoom",
    "pinch-zoom": "Media Gallery Overlay_Pinch to Zoom",
    "video-base": "Media Gallery_Click on Product Video",
    "video-360": "Media Gallery_Click on 360°-Image",
    "keyfacts-description-jump": "Product Description_Click on Jump to Product Description",
    "keyfacts-info-tabs": "Product Description_Click on Info Tabs",
    "delivery-charge": "Buy Box_Click on Delivery Cost Information Link",
    "energy-label-display": "Energy Label and Product Fiche_Displayed Energy Labels",
    "energy-label": "Energy Label and Product Fiche_Click on Energy Label",
    "energy-fiche-text": "Energy Label and Product Fiche_Displayed Product Fiche",
    "energy-label-fiche": "Energy Label and Product Fiche_Click on Energy Label",
    "brand-image": "Product Description_Click on Brand Image",
    "rating-stars": {
      label: "Click Stars",
      category: "Product Rating"
    },
    "rating-stars-tab": {
      label: "Click on Tab",
      category: "Product Rating"
    },
    "download-tab": {
      label: "Click on Tab",
      category: "Product Download"
    },
    "back-in-stock-btn-display": "Back in Stock_Displayed Back in Stock Button is visible and clickable",
    "back-in-stock-notification-display": "Back in Stock_Displayed Back in Stock Notification_Flat and Variant",
    "back-in-stock-subscription-display": "Back in Stock_Displayed Back in Stock Subscription Dialog",
    "back-in-stock-error-display": "Back in Stock_Displayed Generic Error",
    "back-in-stock-already-subscribed-error-display": "Back in Stock_Displayed Already Subscribed Error",
    "back-in-stock-btn-click": "Back in Stock_Click Back in Stock Button",
    "back-in-stock-notification-click": "Back in Stock_Click Back in Stock Button in Notification for Flat and Variants",
    "back-in-stock-subscription-click": "Back in Stock_Click Back in Stock Dialog Subscription Button",
    "global-display-error": "Global_Displayed loading error",
    "scarcity-main": "Scarcity_MAIN",
    "scarcity-variant-percentage": "Scarcity_VARIANT_PERCENTAGE",
    "sold-out-notification-display": "Product_SOLDOUT",
    "sold-out-notification-click": "Product_SOLDOUT_Click on Link"
  },
  Wb = e => ({
    event: F_.GENERIC_EVENT,
    eventCategory: "Product Detail Page",
    eventAction: e
  }),
  jb = e => {
    const t = e.parentElement;
    return e.dataset.tracking || t.dataset.tracking
  },
  Pi = (e, t) => {
    const r = Wb(e),
      n = $b[t];
    if (!n) return;
    Object.hasOwnProperty.call(n, "category") ? (r.eventLabel = n.label, r.eventCategory = n.category) : r.eventLabel = n, H_(r)
  };

function Ju(e) {
  return {
    listener: {
      data: e,
      handleEvent(t) {
        if (this.data.target) {
          const r = jb(t.target);
          r && Pi("click", `${this.data.value}-${r}`);
          return
        }
        if (this.data.touchZoom) {
          Gb(() => Pi("click", e.value), 500);
          return
        }
        Pi("click", this.data.value)
      }
    }
  }
}
const Kb = Ke(({
  vueApp: e
}) => {
  e.directive("analytics", {
    beforeMount: (t, {
      arg: r,
      value: n,
      modifiers: s,
      instance: i
    }) => {
      const {
        touchZoom: a,
        timeout: o
      } = i;
      Fr()
        .public.trackingCustomEvents && (r === "click" && t.addEventListener("click", Ju({
            value: n,
            touchZoom: a,
            timeout: o,
            ...s
          })
          .listener), r === "visibility" && Pi("displayed", n))
    },
    unmounted: (t, {
      value: r
    }) => {
      t.removeEventListener("click", Ju({
          value: r
        })
        .listener)
    }
  })
});
var $e = (e => (e.PDP_Pageload = "PDP_Pageload", e.PDP_Click = "PDP_Click", e.PLP_Product_Click = "PLP_Product_Click", e.PDP_Social_Click = "PDP_Social_Click", e.PDP_Image_Click = "PDP_Image_Click", e.PDP_Section_EnterViewport = "PDP_Section_EnterViewport", e.PDP_Recommendation_Load = "PDP_Recommendation_Load", e.PDP_Recommendation_EnterViewport = "PDP_Recommendation_EnterViewport", e.PDP_Recommendation_Click = "PDP_Recommendation_Click", e.PDP_Rating_Click = "PDP_Rating_Click", e.PDP_Information_Load = "PDP_Information_Load", e.PDP_A_Goods_Link_Click = "PDP_A_Goods_Link_Click", e.PDP_Downloads_Link_Click = "PDP_Downloads_Link_Click", e.PDP_Downloads_Section_Click = "PDP_Downloads_Section_Click", e.PDP_Install_Calc_Link_Click = "PDP_Install_Calc_Link_Click", e.General_Pageload = "General_Pageload", e.General_Recommendation_Load = "General_Recommendation_Load", e.General_RecommendationProduct_EnterViewport = "General_RecommendationProduct_EnterViewport", e.General_Product_Click = "General_Product_Click", e.General_Section_EnterViewport = "General_Section_EnterViewport", e.General_Teaser_Click = "General_Teaser_Click", e.General_Link_Click = "General_Link_Click", e.PLP_Pageload = "PLP_Pageload", e.PLP_FilterSelect_Click = "PLP_FilterSelect_Click", e.PLP_ProductImageSlider_Click = "PLP_ProductImageSlider_Click", e.General_SearchTermConfirm_Click = "General_SearchTermConfirm_Click", e.Cart_Pageload = "Cart_Pageload", e.Cart_Pageload_Split = "Cart_Pageload_Split", e.Cart_Button_Click = "Cart_Button_Click", e.Cart_Success_Pageload = "Cart_Success_Pageload", e.Banner_Promotion_Load = "Banner_Promotion_Load", e.General_Product_View = "General_Product_View", e.General_Promotion_View = "General_Promotion_View", e.General_Promotion_View_Split = "General_Promotion_View_Split", e.General_Promotion_Load = "General_Promotion_Load", e.General_Promotion_Click = "General_Promotion_Click", e.General_Navigation_Click = "General_Navigation_Click", e.Wishlist_Pageload = "Wishlist_Pageload", e.Wishlist_Button_Click = "Wishlist_Button_Click", e.StoreSearch_Pageload = "StoreSearch_Pageload", e.StoreSearch_Click = "StoreSearch_Click", e.StoreSearchDP_Pageload = "StoreSearchDP_Pageload", e.StoreSearchDP_Click = "StoreSearchDP_Click", e.MyAccount_Pageload = "MyAccount_Pageload", e.MyAccount_Click = "MyAccount_Click", e.Flyer_Click = "Flyer_Click", e.Flyer_View = "Flyer_View", e.Flyer_ChangeViewport = "Flyer_ChangeViewport", e.Flyer_Categories_Select = "Flyer_Categories_Select", e.Kameleoon_Experiment = "Kameleoon_Experiment", e.Order_Cancellation_Click = "Order_Cancellation_Click", e.Order_ViewDetails_Click = "Order_ViewDetails_Click", e.Order_Invoice_Download_Click = "Order_Invoice_Download_Click", e.Order_Return_Click = "Order_Return_Click", e.Order_Cancellation_Confirmation = "Order_Cancellation_Confirmation", e.Order_Return_Confirmation = "Order_Return_Confirmation", e.Start_Login_Click = "Start_Login_Click", e.Login_Button_Click = "Login_Button_Click", e.Login_Success = "Login_Success", e.Failed_Login = "Failed_Login", e.Login_Link_Click = "Login_Link_Click", e.Forgotten_Password_Click = "Forgotten_Password_Click", e.Password_Reset = "Password_Reset", e.Register_Link_Click = "Register_Link_Click", e.Finish_Registration_Click = "Finish_Registration_Click", e.Registration_Success = "Registration_Success", e.Send_Confirmation_Email = "Send_Confirmation_Email", e.Failed_Registration = "Failed_Registration", e.Error_Message = "Error_Message", e.Newsletter_Form_Submit = "Newsletter_Form_Submit", e.Newsletter_Form_Success = "Newsletter_Form_Success", e.Flyer_View_50 = "Flyer_View_50", e.Flyer_View_75 = "Flyer_View_75", e.Flyer_View_100 = "Flyer_View_100", e.User_Consent_Update = "User_Consent_Update", e))($e || {}),
  Yb = (e => (e.VARIANT = "VARIANT", e.HEAD_VARIANT = "HEAD_VARIANT", e.FLAT = "FLAT", e.FIXED_SET = "FIXED_SET", e.LOOSE_SET = "LOOSE_SET", e.FIXED_SET_COMPONENT = "FIXED_SET_COMPONENT", e.GROUP_ARTICLE_SALES = "GROUP_ARTICLE_SALES", e.DIGITAL = "DIGITAL", e.GROUP_ARTICLE_LOGISTICS = "GROUP_ARTICLE_LOGISTICS", e.LOGISTICS_COMPONENT = "LOGISTICS_COMPONENT", e))(Yb || {}),
  wn = (e => (e[e.NOT_AVAILABLE = 1] = "NOT_AVAILABLE", e[e.SOON_AVAILABLE = 2] = "SOON_AVAILABLE", e[e.AVAILABLE = 3] = "AVAILABLE", e))(wn || {}),
  nl = (e => (e.MAIN = "MAIN", e.VARIANT_PERCENTAGE = "VARIANT_PERCENTAGE", e))(nl || {}),
  Xb = (e => (e.OPEN_OVERLAY = "open-overlay", e.CLOSE_OVERLAY = "close-overlay", e.ERROR_OVERLAY = "error-overlay", e))(Xb || {});
const kR = "%tooltip%",
  NR = "blue",
  qb = ["red", "green", "blue", "yellow", "orange", "lightblue", "top-rated"];

function MR(e) {
  return qb.includes(e)
}
const xR = {
    loading: "Loading...",
    body: "Unfortunately, this article is already sold out online. Do not miss an offer and sign up for the {0}.",
    pleaseNote: "Please Note:",
    head: "Deal of the day",
    newsletter: "newsletter",
    hours: "Hrs.",
    minutes: "Min.",
    seconds: "Sec."
  },
  Zb = {
    gallery: "Gallery",
    galleryOverlay: "Gallery_Overlay"
  };
var zb = (e => (e.PEN = "PEN", e.BAL = "BAL", e.CAN = "CAN", e))(zb || {});
const Qu = "ONLINE";
var vs = {},
  ef;

function Jb() {
  if (ef) return vs;
  ef = 1, Object.defineProperty(vs, "__esModule", {
    value: !0
  }), vs.parse = a, vs.serialize = u;
  const e = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    t = /^[\u0021-\u003A\u003C-\u007E]*$/,
    r = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    n = /^[\u0020-\u003A\u003D-\u007E]*$/,
    s = Object.prototype.toString,
    i = (() => {
      const d = function() {};
      return d.prototype = Object.create(null), d
    })();

  function a(d, _) {
    const m = new i,
      E = d.length;
    if (E < 2) return m;
    const R = (_ == null ? void 0 : _.decode) || c;
    let O = 0;
    do {
      const T = d.indexOf("=", O);
      if (T === -1) break;
      const h = d.indexOf(";", O),
        p = h === -1 ? E : h;
      if (T > p) {
        O = d.lastIndexOf(";", T - 1) + 1;
        continue
      }
      const v = o(d, O, T),
        P = l(d, T, v),
        g = d.slice(v, P);
      if (m[g] === void 0) {
        let L = o(d, T + 1, p),
          b = l(d, p, L);
        const N = R(d.slice(L, b));
        m[g] = N
      }
      O = p + 1
    } while (O < E);
    return m
  }

  function o(d, _, m) {
    do {
      const E = d.charCodeAt(_);
      if (E !== 32 && E !== 9) return _
    } while (++_ < m);
    return m
  }

  function l(d, _, m) {
    for (; _ > m;) {
      const E = d.charCodeAt(--_);
      if (E !== 32 && E !== 9) return _ + 1
    }
    return m
  }

  function u(d, _, m) {
    const E = (m == null ? void 0 : m.encode) || encodeURIComponent;
    if (!e.test(d)) throw new TypeError(`argument name is invalid: ${d}`);
    const R = E(_);
    if (!t.test(R)) throw new TypeError(`argument val is invalid: ${_}`);
    let O = d + "=" + R;
    if (!m) return O;
    if (m.maxAge !== void 0) {
      if (!Number.isInteger(m.maxAge)) throw new TypeError(`option maxAge is invalid: ${m.maxAge}`);
      O += "; Max-Age=" + m.maxAge
    }
    if (m.domain) {
      if (!r.test(m.domain)) throw new TypeError(`option domain is invalid: ${m.domain}`);
      O += "; Domain=" + m.domain
    }
    if (m.path) {
      if (!n.test(m.path)) throw new TypeError(`option path is invalid: ${m.path}`);
      O += "; Path=" + m.path
    }
    if (m.expires) {
      if (!f(m.expires) || !Number.isFinite(m.expires.valueOf())) throw new TypeError(`option expires is invalid: ${m.expires}`);
      O += "; Expires=" + m.expires.toUTCString()
    }
    if (m.httpOnly && (O += "; HttpOnly"), m.secure && (O += "; Secure"), m.partitioned && (O += "; Partitioned"), m.priority) switch (typeof m.priority == "string" ? m.priority.toLowerCase() : void 0) {
      case "low":
        O += "; Priority=Low";
        break;
      case "medium":
        O += "; Priority=Medium";
        break;
      case "high":
        O += "; Priority=High";
        break;
      default:
        throw new TypeError(`option priority is invalid: ${m.priority}`)
    }
    if (m.sameSite) switch (typeof m.sameSite == "string" ? m.sameSite.toLowerCase() : m.sameSite) {
      case !0:
      case "strict":
        O += "; SameSite=Strict";
        break;
      case "lax":
        O += "; SameSite=Lax";
        break;
      case "none":
        O += "; SameSite=None";
        break;
      default:
        throw new TypeError(`option sameSite is invalid: ${m.sameSite}`)
    }
    return O
  }

  function c(d) {
    if (d.indexOf("%") === -1) return d;
    try {
      return decodeURIComponent(d)
    } catch {
      return d
    }
  }

  function f(d) {
    return s.call(d) === "[object Date]"
  }
  return vs
}
var Ci = Jb();

function Qb() {
  const e = typeof global > "u" ? void 0 : global.TEST_HAS_DOCUMENT_COOKIE;
  return typeof e == "boolean" ? e : typeof document == "object" && typeof document.cookie == "string"
}

function eT(e) {
  return typeof e == "string" ? Ci.parse(e) : typeof e == "object" && e !== null ? e : {}
}

function uo(e, t = {}) {
  const r = tT(e);
  if (!t.doNotParse) try {
    return JSON.parse(r)
  } catch {}
  return e
}

function tT(e) {
  return e && e[0] === "j" && e[1] === ":" ? e.substr(2) : e
}
class Jl {
  constructor(t, r = {}) {
    this.changeListeners = [], this.HAS_DOCUMENT_COOKIE = !1, this.update = () => {
      if (!this.HAS_DOCUMENT_COOKIE) return;
      const s = this.cookies;
      this.cookies = Ci.parse(document.cookie), this._checkChanges(s)
    };
    const n = typeof document > "u" ? "" : document.cookie;
    this.cookies = eT(t || n), this.defaultSetOptions = r, this.HAS_DOCUMENT_COOKIE = Qb()
  }
  _emitChange(t) {
    for (let r = 0; r < this.changeListeners.length; ++r) this.changeListeners[r](t)
  }
  _checkChanges(t) {
    new Set(Object.keys(t)
        .concat(Object.keys(this.cookies)))
      .forEach(n => {
        t[n] !== this.cookies[n] && this._emitChange({
          name: n,
          value: uo(this.cookies[n])
        })
      })
  }
  _startPolling() {
    this.pollingInterval = setInterval(this.update, 300)
  }
  _stopPolling() {
    this.pollingInterval && clearInterval(this.pollingInterval)
  }
  get(t, r = {}) {
    return r.doNotUpdate || this.update(), uo(this.cookies[t], r)
  }
  getAll(t = {}) {
    t.doNotUpdate || this.update();
    const r = {};
    for (let n in this.cookies) r[n] = uo(this.cookies[n], t);
    return r
  }
  set(t, r, n) {
    n ? n = Object.assign(Object.assign({}, this.defaultSetOptions), n) : n = this.defaultSetOptions;
    const s = typeof r == "string" ? r : JSON.stringify(r);
    this.cookies = Object.assign(Object.assign({}, this.cookies), {
      [t]: s
    }), this.HAS_DOCUMENT_COOKIE && (document.cookie = Ci.serialize(t, s, n)), this._emitChange({
      name: t,
      value: r,
      options: n
    })
  }
  remove(t, r) {
    const n = r = Object.assign(Object.assign(Object.assign({}, this.defaultSetOptions), r), {
      expires: new Date(1970, 1, 1, 0, 0, 1),
      maxAge: 0
    });
    this.cookies = Object.assign({}, this.cookies), delete this.cookies[t], this.HAS_DOCUMENT_COOKIE && (document.cookie = Ci.serialize(t, "", n)), this._emitChange({
      name: t,
      value: void 0,
      options: r
    })
  }
  addChangeListener(t) {
    this.changeListeners.push(t), this.HAS_DOCUMENT_COOKIE && this.changeListeners.length === 1 && (typeof window == "object" && "cookieStore" in window ? window.cookieStore.addEventListener("change", this.update) : this._startPolling())
  }
  removeChangeListener(t) {
    const r = this.changeListeners.indexOf(t);
    r >= 0 && this.changeListeners.splice(r, 1), this.HAS_DOCUMENT_COOKIE && this.changeListeners.length === 0 && (typeof window == "object" && "cookieStore" in window ? window.cookieStore.removeEventListener("change", this.update) : this._stopPolling())
  }
  removeAllChangeListeners() {
    for (; this.changeListeners.length > 0;) this.removeChangeListener(this.changeListeners[0])
  }
}
const tf = "/q/search",
  rf = "/404",
  rT = "not_found",
  FR = "ldi-tracking-info",
  HR = "disp-originalReferrer",
  BR = {
    SCRIPT_BASE_URL: "/prm/static/webcomponent/index.js",
    SCRIPT_ID: "lidl-plus-voucher-script",
    DATA_SECTION_PDP: "coupon_web_pdp"
  };
var sl = (e => (e[e.NOT_AVAILABLE = 1] = "NOT_AVAILABLE", e[e.SOON_AVAILABLE = 2] = "SOON_AVAILABLE", e[e.AVAILABLE = 3] = "AVAILABLE", e))(sl || {}),
  nT = (e => (e.MARKETING = "marketing", e.STATISTICS = "statistics", e.IGNORE = "ignore", e))(nT || {}),
  sT = (e => (e.SHOP_THE_LOOK_ESI_PATH = "/c/fragment/shopthelook", e.SHOP_THE_LOOK_SLIDER_LOADER_ESI_PATH = "/c/fragment/shopthelooksliderloader/", e))(sT || {}),
  iT = (e => (e.PRODUCTS = "products", e.PERSONALIZATION = "personalization", e.LAST_SEEN = "last_seen", e.PRODUCT_BUNDLE = "bundles", e.SPONSORED = "sponsored", e.COMPARISONS = "comparisons", e.CROSS = "cross", e.BEST_SELLERS_CATEGORY = "bestsellers_category_2_productBased_url", e.BEST_SELLERS_BRAND = "bestsellers_brand_productBased_url", e.STL = "shopthelook", e))(iT || {}),
  aT = (e => (e.PDP = "PRODUCT_DETAIL_PAGE", e))(aT || {});
const VR = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
  UR = ["P_GROESSE", "GROESSE", "MIGR_GR2", "T_GROESSE"];
var oT = (e => (e.MARKETING = "optanon-category-C0004", e))(oT || {});
const lT = {
    md: 720
  },
  cT = "t70_newpdp_a1",
  uT = "msAbTestVariationKey",
  fT = "t70_newpdp_a1",
  dT = "msAbTestVariationKey",
  hT = "cx",
  _T = "layout",
  pT = "flyer",
  GR = {
    mainProductImage: "Main_Product_Image",
    imageAndVideos: "Image_And_Videos",
    image3dView: "3D_Image_View"
  },
  $R = "AddToCartResult",
  WR = "cart-quantity-changed",
  jR = "ppay-button-clicked",
  KR = "ppay-aplazame-resize",
  YR = "/payments/installment/calculator";

function mT(e, t) {
  const {
    public: r
  } = Fr();
  let n = !1;
  if (r.nodeEnv === "test") return !0;
  if (!r.one.enabled) return !1;
  if (r.one.queryParamEnabled) {
    const s = e == null ? void 0 : e[dT];
    s && (n = n || s === hT)
  } {
    const s = new Jl()
      .get(uT);
    s && (n = n || s === fT)
  }
  return t && (n = n || t === cT), n
}
const Sa = () => qe()
  .$pinia,
  gT = ot("one-cx", () => {
    const e = _e(!1);
    return {
      show1CX: e,
      init: (r, n) => {
        e.value = e.value || mT(r, n)
      }
    }
  }),
  vT = e => e.slice(1)
  .slice(0, -1),
  nf = e => (e[0] === "(" ? vT(e) : e)
  .split("%%"),
  Ds = e => {
    var t;
    return ((t = e == null ? void 0 : e.split("|")) == null ? void 0 : t[0]) ?? ""
  },
  XR = (e, t) => {
    const r = e.x - t.x,
      n = e.y - t.y;
    return Math.atan2(n, r) * (180 / Math.PI)
  },
  yT = (e = {}, t = {}) => {
    const r = {};
    return Object.entries(t)
      .forEach(([n, s]) => {
        var a, o, l;
        const i = {
          availabilityIndicator: ((a = s.stockAvailability) == null ? void 0 : a.availabilityIndicator) || 0,
          scarcity: s.scarcity ?? "",
          erpNumbers: (s == null ? void 0 : s.erpNumbers) ?? [],
          erpNumber: s.erpNumber,
          preventSelling: s.preventSelling,
          previewImageIds: [],
          backInStockNotification: (o = s.stockAvailability) == null ? void 0 : o.backInStockNotification,
          backInStockNotificationSoldOut: (l = s.stockAvailability) == null ? void 0 : l.backInStockNotificationSoldOut
        };
        r[n] = i
      }), Object.entries(e)
      .forEach(([n, s]) => {
        const i = r[n] || {};
        r[n] = {
          ...i,
          ...s
        }
      }), r
  },
  sf = ({
    availabilityIndicator: e,
    scarcity: t,
    preventSelling: r,
    backInStockNotification: n,
    backInStockNotificationSoldOut: s,
    backInStockInfo: i
  } = {}) => ({
    soldOut: e === sl.NOT_AVAILABLE,
    soonAvailable: e === sl.SOON_AVAILABLE,
    belowThreshold: t === nl.MAIN,
    halfSoldOut: t === nl.VARIANT_PERCENTAGE,
    preventSelling: r,
    availabilityIndicator: e,
    isEnabled: void 0,
    exists: !0,
    backInStockNotification: n,
    backInStockNotificationSoldOut: s,
    backInStockInfo: i
  }),
  ET = e => {
    var n, s;
    const t = (n = e == null ? void 0 : e.groupedBy) == null ? void 0 : n.split("&&"),
      r = (s = e == null ? void 0 : e.code) == null ? void 0 : s.split("&&");
    return (t == null ? void 0 : t.map((i, a) => `${i}|${r[a]}`)) ?? []
  },
  Pa = ot("attributes-cx", () => {
    const e = _e({}),
      t = _e({}),
      r = _e([]),
      n = _e({}),
      s = _e(["", ""]),
      i = _e({}),
      a = _e({}),
      o = $(() => Object.values(n.value)),
      l = $(() => s.value[0]),
      u = $(() => r.value.map(({
        key: b
      }) => b)),
      c = $(() => o.value.filter(b => !!b)
        .length === r.value.length),
      f = b => {
        const N = Ds(b);
        s.value[1] !== N && (s.value.push(N), s.value = s.value.slice(1))
      },
      d = b => {
        const N = new Array(r.value.length)
          .fill(void 0);
        return b.forEach(B => {
          N[u.value.indexOf(Ds(B))] = B
        }), N
      },
      _ = b => d(b)
      .filter(N => N)
      .join("&&"),
      m = () => {
        var b, N;
        return (N = (b = t.value) == null ? void 0 : b[_(o.value)]) == null ? void 0 : N.erpNumber
      },
      E = () => {
        const b = it(Ie());
        b.select(m() ?? b.productId)
      },
      R = b => {
        b && (f(b), n.value[Ds(b)] = b, c.value && E(), V_()
          .selectImage(0))
      },
      O = () => Object.values(e.value)
      .reduce((b, N) => ({
        ...b,
        [_(nf(N.attributesCode))]: N
      }), {}),
      T = () => Object.entries(i.value)
      .reduce((b, [N, B]) => {
        var Y, ee;
        const k = (Y = B == null ? void 0 : B.code) == null ? void 0 : Y.split("&&"),
          W = _(((ee = B == null ? void 0 : B.groupedBy) == null ? void 0 : ee.split("&&")
            .map((X, re) => `${X}|${k[re]}`)) ?? []);
        return W ? {
          ...b,
          [W]: {
            ...B,
            id: N
          }
        } : {}
      }, {}),
      h = b => {
        var N;
        if (!((N = e.value[b]) != null && N.attributesCode)) {
          it(Ie())
            .select(b);
          return
        }
        nf(e.value[b].attributesCode)
          .forEach(R)
      },
      p = b => {
        var N;
        ET((N = i.value) == null ? void 0 : N[b])
          .forEach(R), E()
      },
      v = $(() => {
        var N;
        const b = Object.keys(a.value)
          .find(B => B.split("&&")
            .every(k => o.value.includes(k)));
        return b ? (N = a.value) == null ? void 0 : N[b].id : void 0
      }),
      P = b => {
        var k, W;
        e.value = b.variants ?? {}, r.value = ((k = b.attributes) == null ? void 0 : k.attributes) ?? [], i.value = b.variantGroupingByCode ?? {};
        const N = ((W = b.attributes) == null ? void 0 : W.attributesFlattened) ?? {},
          B = O() ?? {};
        t.value = yT(N, B), n.value = r.value.reduce((Y, {
          key: ee
        }) => ({
          ...Y,
          [ee]: void 0
        }), {}), a.value = T()
      },
      g = $(() => {
        const b = u.value.find(N => N && !n.value[N]);
        return r.value.find(({
          key: N
        }) => N === b)
      }),
      L = $(() => {
        var k;
        let b = t.value[_(o.value)];
        return (k = b == null ? void 0 : b.erpNumbers) != null && k.length || [...d(o.value)].reverse()
          .forEach(W => {
            var ee, X;
            if ((ee = b == null ? void 0 : b.erpNumbers) != null && ee.length) return;
            const Y = t.value[_(o.value.filter(re => re !== W))];
            (X = Y == null ? void 0 : Y.erpNumbers) != null && X.length && (b = Y)
          }), b
      });
    return {
      init: P,
      select: R,
      getAttributesCode: _,
      preselectVariant: h,
      preselectByVariantGrouping: p,
      sort: d,
      current: L,
      nextPendingAttribute: g,
      selectedList: o,
      selected: n,
      lastSelectedAttribute: l,
      lastSelectedAttributes: s,
      attributesMap: t,
      attributes: r,
      currentVariantId: v
    }
  }),
  qR = 6,
  ZR = "ldi-ratings-voted-up",
  zR = "ldi-ratings-voted-down",
  JR = "ldi-ratings-reported",
  QR = {
    productName: "",
    variantNames: {},
    ratingsPerLocale: {},
    globalRating: {
      average: 0,
      count: 0,
      recommendedYes: 0,
      recommendedNo: 0,
      recommendedNotSet: 0
    },
    ratings: {
      pageStart: 0,
      totalItems: 0
    },
    queryMillis: 0
  },
  eO = ["WAY_TOO_BIG", "LITTLE_TOO_BIG", "FITS_PERFECTLY", "LITTLE_TOO_SMALL", "WAY_TOO_SMALL"],
  tO = "DE",
  rO = "de",
  wT = /^(?<language>[a-z]{2})[-_](?<country>[A-Z]{2,3})$/i,
  nO = ["de_DE"],
  sO = "ratings-snack-bar",
  af = {
    de_DE: "de_DE",
    en_GB: "en_GB",
    sk_SK: "sk_SK",
    pl_PL: "pl_PL",
    nl_NL: "nl_NL",
    cs_CZ: "cs_CZ",
    fr_BE: "fr_BE",
    nl_BE: "nl_BE",
    de_AT: "de_AT",
    da_DK: "da_DK",
    it_IT: "it_IT",
    hu_HU: "hu_HU",
    fr_FR: "fr_FR",
    ix_IX: "ix_IX",
    en_MT: "en_MT",
    de_CH: "de_CH",
    fr_CH: "fr_CH",
    it_CH: "it_CH",
    sr_RS: "sr_RS",
    sv_SE: "sv_SE",
    ro_RO: "ro_RO",
    bg_BG: "bg_BG",
    el_GR: "el_GR",
    en_CY: "en_CY",
    el_CY: "el_CY",
    en_IE: "en_IE",
    en_XI: "en_XI",
    de_LU: "de_LU",
    fr_LU: "fr_LU",
    sl_SI: "sl_SI",
    pt_PT: "pt_PT",
    fi_FI: "fi_FI",
    lv_LV: "lv_LV",
    lt_LT: "lt_LT",
    ru_LV: "ru_LV",
    et_EE: "et_EE",
    ru_EE: "ru_EE",
    hr_HR: "hr_HR",
    es_ES: "es_ES"
  },
  bT = ot("ratingsLocale", {
    state: () => ({
      country: "GB",
      language: "en"
    }),
    getters: {
      locale: e => af[`${e.language}_${e.country}`]
    },
    actions: {
      setLocale(e) {
        var s, i, a;
        const t = (s = wT.exec(e)) == null ? void 0 : s.groups,
          r = (i = t == null ? void 0 : t.country) == null ? void 0 : i.toUpperCase(),
          n = (a = t == null ? void 0 : t.language) == null ? void 0 : a.toLowerCase();
        r && n && `${n}_${r}` in af && (this.country = r, this.language = n)
      }
    }
  }),
  TT = ot("back-in-stock", {
    state: () => ({
      byId: {},
      success: !1
    }),
    getters: {
      enabled(e) {
        const t = it();
        return t.selected && !!e.byId[t.selected].soonAvailable || !1
      },
      enabledSoldOut(e) {
        const t = it();
        return t.selected && !!e.byId[t.selected].soldOut || !1
      }
    },
    actions: {
      init(e) {
        this.byId = Object.entries({
            [e.erpNumber || ""]: e,
            ...e.variants
          })
          .reduce((t, [r, n]) => {
            var s, i;
            return {
              ...t,
              [r]: {
                soonAvailable: ((s = n == null ? void 0 : n.stockAvailability) == null ? void 0 : s.backInStockNotification) ?? !1,
                soldOut: ((i = n == null ? void 0 : n.stockAvailability) == null ? void 0 : i.backInStockNotificationSoldOut) ?? !1
              }
            }
          }, {})
      },
      async subscribe(e, t, r, n) {
        const s = dr(Sa()),
          i = new FormData;
        return i.set("email", t), i.set("erp", e), i.set("token", n), r && i.set("captchaResponse", r), $fetch(`/p/api/back-in-stock/subscription/${s.country}/${s.language}`, {
          method: "POST",
          body: i,
          timeout: +Fr()
            .public.apiTimeout * 4
        })
      },
      async getSubscriber() {
        return $fetch("/p/api/back-in-stock/subscriber")
      }
    }
  }),
  ST = ot("energy-labels", {
    state: () => ({
      byId: {},
      hint: void 0
    }),
    getters: {
      energyLabels: e => t => e.byId[t] || []
    },
    actions: {
      init(e) {
        const t = {
          ...e != null && e.erpNumber ? {
            [e.erpNumber]: e
          } : {},
          ...(e == null ? void 0 : e.variants) || {}
        };
        this.hint = e == null ? void 0 : e.energyLabelSelectVariant, this.byId = Object.entries(t)
          .reduce((r, [n, s]) => ({
            ...r,
            [n]: s == null ? void 0 : s.energyLabels
          }), {})
      }
    }
  });
var il = (e => (e.ECO = "ECO", e.COPYRIGHT = "COPYRIGHT", e))(il || {});
const PT = ot("history", {
    state: () => ({
      _successor: null
    }),
    getters: {
      hasSuccessor(e) {
        var r;
        const t = Ql();
        return !!e._successor && ((r = t.availability()) == null ? void 0 : r.status) === wn.NOT_AVAILABLE
      },
      successor(e) {
        return this.hasSuccessor ? e._successor : null
      }
    },
    actions: {
      setSuccessor(e) {
        this._successor = e || null
      }
    }
  }),
  CT = ot("meta", {
    state: () => ({
      byId: {}
    }),
    getters: {
      meta(e) {
        const t = it();
        return t.selected && e.byId[t.selected] || {}
      },
      servingCanonicalUrl: () => e => {
        var n;
        const t = it();
        let r = e.fullPath;
        return e.hash && (r = r.replace(e.hash, "")), e.query.locale && (r = r.replace(/([?&])locale=[^&]*(&?)/, (s, i, a) => a ? i : "")), r === ((n = t.current) == null ? void 0 : n.canonicalPath)
      }
    },
    actions: {
      init(e) {
        this.byId = Object.entries({
            [e.erpNumber || ""]: e,
            ...e.variants
          })
          .reduce((t, [r, n]) => ({
            ...t,
            [r]: {
              ...(n == null ? void 0 : n.meta) || {}
            }
          }), {})
      }
    }
  }),
  fo = {
    [ge.de_DE]: {
      showRetailItemNumber: !1,
      showStoreAvailability: !0,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !0,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !0,
      otherRecoSliderType: "last_seen",
      showComparisonsTable: !0,
      showProductBundleSlider: !0,
      showSizeRatings: !0,
      showLegacyDeStyles: !0,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "SHORT",
      showBargainHintFromPercentage: 20,
      showMedalliaSurveys: !0,
      showRatingsSearch: !0,
      showMarginRibbon: !0,
      specialCampaigns: ["singlesday", "blackdealsdays"],
      redirectToSearch: !0,
      vltExpectedDeliveryDate: !0,
      installmentEnabled: !0,
      showAiSummaries: !0,
      lidlPlusCouponsEnabled: !0
    },
    [ge.sk_SK]: {
      showStoreAvailability: !0,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !1,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !1,
      otherRecoSliderType: "last_seen",
      showProductBundleSlider: !0,
      showSizeRatings: !0,
      showLegacyDeStyles: !1,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "NONE",
      showBargainHintFromPercentage: 0,
      showMedalliaSurveys: !1,
      showRatingsSearch: !1,
      showMarginRibbon: !0,
      specialCampaigns: ["singlesday", "blackdealsdays"],
      listenToKameleoon: !1,
      redirectToSearch: !0,
      vltExpectedDeliveryDate: !0,
      lidlPlusCouponsEnabled: !0
    },
    [ge.pl_PL]: {
      showRetailItemNumber: !1,
      showStoreAvailability: !0,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !0,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !1,
      otherRecoSliderType: "last_seen",
      showProductBundleSlider: !0,
      showSizeRatings: !0,
      showLegacyDeStyles: !1,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "SHORT",
      showBargainHintFromPercentage: 0,
      showMedalliaSurveys: !1,
      showRatingsSearch: !0,
      showMarginRibbon: !0,
      specialCampaigns: ["singlesday", "blackdealsdays"],
      listenToKameleoon: !1,
      redirectToSearch: !0,
      vltExpectedDeliveryDate: !0,
      lidlPlusCouponsEnabled: !0
    },
    [ge.cs_CZ]: {
      showStoreAvailability: !0,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showComparisonsTable: !0,
      showVatTextGlobalPlus: !0,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !1,
      otherRecoSliderType: "last_seen",
      showProductBundleSlider: !0,
      showSizeRatings: !0,
      showLegacyDeStyles: !1,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "NONE",
      listenToKameleoon: !1,
      showBargainHintFromPercentage: 0,
      showMedalliaSurveys: !0,
      showRatingsSearch: !0,
      showMarginRibbon: !0,
      specialCampaigns: ["singlesday", "blackdealsdays"],
      redirectToSearch: !0,
      vltExpectedDeliveryDate: !0,
      lidlPlusCouponsEnabled: !0,
      shopTheLookSliderEnabled: !0
    },
    [ge.nl_NL]: {
      showStoreAvailability: !0,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !0,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !1,
      otherRecoSliderType: "last_seen",
      showComparisonsTable: !1,
      showProductBundleSlider: !0,
      showSizeRatings: !0,
      showLegacyDeStyles: !0,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "SHORT",
      showBargainHintFromPercentage: 0,
      showMedalliaSurveys: !1,
      showRatingsSearch: !0,
      showMarginRibbon: !0,
      specialCampaigns: ["singlesday", "blackdealsdays"],
      listenToKameleoon: !1,
      redirectToSearch: !0,
      vltExpectedDeliveryDate: !0,
      lidlPlusCouponsEnabled: !0
    },
    [ge.fr_BE]: {
      showRetailItemNumber: !1,
      showStoreAvailability: !0,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !0,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !1,
      otherRecoSliderType: "last_seen",
      showProductBundleSlider: !0,
      showSizeRatings: !0,
      showLegacyDeStyles: !1,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "SHORT",
      showBargainHintFromPercentage: 0,
      showMedalliaSurveys: !1,
      showRatingsSearch: !1,
      showMarginRibbon: !0,
      specialCampaigns: ["singlesday", "blackdealsdays"],
      listenToKameleoon: !1,
      redirectToSearch: !0,
      vltExpectedDeliveryDate: !0,
      lidlPlusCouponsEnabled: !0
    },
    [ge.nl_BE]: {
      showRetailItemNumber: !1,
      showStoreAvailability: !0,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !0,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !1,
      otherRecoSliderType: "last_seen",
      showProductBundleSlider: !0,
      showSizeRatings: !0,
      showLegacyDeStyles: !1,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "SHORT",
      showBargainHintFromPercentage: 0,
      showMedalliaSurveys: !1,
      showRatingsSearch: !1,
      showMarginRibbon: !0,
      specialCampaigns: ["singlesday", "blackdealsdays"],
      listenToKameleoon: !1,
      redirectToSearch: !0,
      vltExpectedDeliveryDate: !0,
      lidlPlusCouponsEnabled: !0
    },
    [ge.es_ES]: {
      showRetailItemNumber: !1,
      showStoreAvailability: !0,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !1,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !0,
      otherRecoSliderType: "last_seen",
      showComparisonsTable: !0,
      showProductBundleSlider: !0,
      showSizeRatings: !0,
      showLegacyDeStyles: !0,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "SHORT",
      showBargainHintFromPercentage: 20,
      showMedalliaSurveys: !0,
      showRatingsSearch: !0,
      showMarginRibbon: !0,
      specialCampaigns: ["singlesday", "blackdealsdays"],
      redirectToSearch: !0,
      vltExpectedDeliveryDate: !0,
      installmentEnabled: !1,
      showAiSummaries: !0,
      showAplazameButton: !0,
      lidlPlusCouponsEnabled: !0
    },
    [ge.de_AT]: {
      showRetailItemNumber: !1,
      showStoreAvailability: !0,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !0,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !1,
      otherRecoSliderType: "last_seen",
      showProductBundleSlider: !0,
      showSizeRatings: !0,
      showLegacyDeStyles: !0,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "SHORT",
      showBargainHintFromPercentage: 20,
      showMedalliaSurveys: !1,
      showRatingsSearch: !1,
      specialCampaigns: ["singlesday", "blackdealsdays"]
    },
    [ge.da_DK]: {
      showRetailItemNumber: !1,
      showStoreAvailability: !0,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !0,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !1,
      showProductBundleSlider: !1,
      otherRecoSliderType: "last_seen",
      showSizeRatings: !0,
      showLegacyDeStyles: !0,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !1,
      showSupplementalDescriptionGridBox: "SHORT",
      showBargainHintFromPercentage: 20,
      listenToKameleoon: !1,
      showMedalliaSurveys: !1,
      showRatingsSearch: !1,
      specialCampaigns: ["singlesday", "blackdealsdays"]
    },
    [ge.it_IT]: {
      showStoreAvailability: !0,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !0,
      showRetailItemNumber: !1,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !1,
      showProductBundleSlider: !1,
      otherRecoSliderType: "last_seen",
      showSizeRatings: !0,
      showLegacyDeStyles: !0,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "SHORT",
      showBargainHintFromPercentage: 20,
      showMedalliaSurveys: !1,
      showRatingsSearch: !1,
      specialCampaigns: ["singlesday", "blackdealsdays"]
    },
    [ge.hu_HU]: {
      showRetailItemNumber: !1,
      showStoreAvailability: !0,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !0,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !1,
      otherRecoSliderType: "last_seen",
      showProductBundleSlider: !1,
      showSizeRatings: !0,
      showLegacyDeStyles: !0,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "SHORT",
      showBargainHintFromPercentage: 20,
      showMedalliaSurveys: !1,
      showRatingsSearch: !1,
      specialCampaigns: ["singlesday", "blackdealsdays"]
    },
    [ge.fr_FR]: {
      showStoreAvailability: !0,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !1,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !0,
      otherRecoSliderType: "last_seen",
      showProductBundleSlider: !0,
      showSizeRatings: !0,
      showLegacyDeStyles: !0,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "SHORT",
      showBargainHintFromPercentage: 20,
      showMedalliaSurveys: !1,
      showRatingsSearch: !1,
      specialCampaigns: ["singlesday", "blackdealsdays"],
      showDifferentDeliveryDuration: !0,
      redirectToSearch: !0,
      vltExpectedDeliveryDate: !0,
      listenToKameleoon: !1,
      lidlPlusCouponsEnabled: !0
    },
    [ge.en_MT]: {
      showStoreAvailability: !0,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !1,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !0,
      showRetailItemNumber: !1,
      otherRecoSliderType: "last_seen",
      showProductBundleSlider: !0,
      showSizeRatings: !0,
      showLegacyDeStyles: !0,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "SHORT",
      showBargainHintFromPercentage: 100,
      showMedalliaSurveys: !1,
      showRatingsSearch: !1,
      specialCampaigns: ["singlesday", "blackdealsdays"]
    },
    [ge.de_CH]: {
      showRetailItemNumber: !1,
      showStoreAvailability: !0,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !1,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !0,
      otherRecoSliderType: "last_seen",
      showProductBundleSlider: !0,
      showSizeRatings: !0,
      showLegacyDeStyles: !0,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "SHORT",
      showBargainHintFromPercentage: 100,
      showMedalliaSurveys: !1,
      showRatingsSearch: !1,
      specialCampaigns: ["singlesday", "blackdealsdays"]
    },
    [ge.fr_CH]: {
      showRetailItemNumber: !1,
      showStoreAvailability: !0,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !1,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !0,
      otherRecoSliderType: "last_seen",
      showProductBundleSlider: !0,
      showSizeRatings: !0,
      showLegacyDeStyles: !0,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "SHORT",
      showBargainHintFromPercentage: 100,
      showMedalliaSurveys: !1,
      showRatingsSearch: !1,
      specialCampaigns: ["singlesday", "blackdealsdays"]
    },
    [ge.it_CH]: {
      showRetailItemNumber: !1,
      showStoreAvailability: !0,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !1,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !0,
      otherRecoSliderType: "last_seen",
      showProductBundleSlider: !0,
      showSizeRatings: !0,
      showLegacyDeStyles: !0,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "SHORT",
      showBargainHintFromPercentage: 100,
      showMedalliaSurveys: !1,
      showRatingsSearch: !1,
      specialCampaigns: ["singlesday", "blackdealsdays"]
    },
    [ge.sr_RS]: {
      showRetailItemNumber: !1,
      showStoreAvailability: !0,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !1,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !0,
      otherRecoSliderType: "last_seen",
      showProductBundleSlider: !0,
      showSizeRatings: !0,
      showLegacyDeStyles: !0,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "SHORT",
      showBargainHintFromPercentage: 100,
      showMedalliaSurveys: !1,
      showRatingsSearch: !1,
      specialCampaigns: ["singlesday", "blackdealsdays"]
    },
    [ge.sv_SE]: {
      showRetailItemNumber: !1,
      showStoreAvailability: !0,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !1,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !0,
      otherRecoSliderType: "last_seen",
      showProductBundleSlider: !0,
      showSizeRatings: !0,
      showLegacyDeStyles: !0,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "SHORT",
      showBargainHintFromPercentage: 100,
      showMedalliaSurveys: !1,
      showRatingsSearch: !1,
      specialCampaigns: ["singlesday", "blackdealsdays"]
    },
    [ge.ro_RO]: {
      showRetailItemNumber: !1,
      showStoreAvailability: !0,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !1,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !0,
      otherRecoSliderType: "last_seen",
      showProductBundleSlider: !0,
      showSizeRatings: !0,
      showLegacyDeStyles: !0,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "SHORT",
      showBargainHintFromPercentage: 100,
      showMedalliaSurveys: !1,
      showRatingsSearch: !1,
      specialCampaigns: ["singlesday", "blackdealsdays"]
    },
    [ge.bg_BG]: {
      showRetailItemNumber: !1,
      showStoreAvailability: !0,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !1,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !0,
      otherRecoSliderType: "last_seen",
      showProductBundleSlider: !0,
      showSizeRatings: !0,
      showLegacyDeStyles: !0,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "SHORT",
      showBargainHintFromPercentage: 100,
      showMedalliaSurveys: !1,
      showRatingsSearch: !1,
      specialCampaigns: ["singlesday", "blackdealsdays"],
      priceFontFamily: "bg-BG"
    },
    [ge.el_GR]: {
      showRetailItemNumber: !1,
      showStoreAvailability: !1,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !1,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !0,
      otherRecoSliderType: "last_seen",
      showProductBundleSlider: !0,
      showSizeRatings: !0,
      showLegacyDeStyles: !0,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "SHORT",
      showBargainHintFromPercentage: 100,
      showMedalliaSurveys: !1,
      showRatingsSearch: !1,
      specialCampaigns: ["singlesday", "blackdealsdays"]
    },
    [ge.en_CY]: {
      showRetailItemNumber: !1,
      showStoreAvailability: !1,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !1,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !0,
      otherRecoSliderType: "last_seen",
      showProductBundleSlider: !0,
      showSizeRatings: !0,
      showLegacyDeStyles: !0,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "SHORT",
      showBargainHintFromPercentage: 100,
      showMedalliaSurveys: !1,
      showRatingsSearch: !1,
      specialCampaigns: ["singlesday", "blackdealsdays"]
    },
    [ge.el_CY]: {
      showRetailItemNumber: !1,
      showStoreAvailability: !1,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !1,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !0,
      otherRecoSliderType: "last_seen",
      showProductBundleSlider: !0,
      showSizeRatings: !0,
      showLegacyDeStyles: !0,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "SHORT",
      showBargainHintFromPercentage: 100,
      showMedalliaSurveys: !1,
      showRatingsSearch: !1,
      specialCampaigns: ["singlesday", "blackdealsdays"]
    },
    [ge.en_IE]: {
      showRetailItemNumber: !1,
      showStoreAvailability: !0,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !1,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !0,
      otherRecoSliderType: "last_seen",
      showProductBundleSlider: !0,
      showSizeRatings: !0,
      showLegacyDeStyles: !0,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "SHORT",
      showBargainHintFromPercentage: 100,
      showMedalliaSurveys: !1,
      showRatingsSearch: !1,
      specialCampaigns: ["singlesday", "blackdealsdays"]
    },
    [ge.en_XI]: {
      showRetailItemNumber: !1,
      showStoreAvailability: !0,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !1,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !0,
      otherRecoSliderType: "last_seen",
      showProductBundleSlider: !0,
      showSizeRatings: !0,
      showLegacyDeStyles: !0,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "SHORT",
      showBargainHintFromPercentage: 100,
      showMedalliaSurveys: !1,
      showRatingsSearch: !1,
      specialCampaigns: ["singlesday", "blackdealsdays"]
    },
    [ge.fr_LU]: {
      showRetailItemNumber: !1,
      showStoreAvailability: !1,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !1,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !0,
      otherRecoSliderType: "last_seen",
      showProductBundleSlider: !0,
      showSizeRatings: !0,
      showLegacyDeStyles: !0,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "SHORT",
      showBargainHintFromPercentage: 100,
      showMedalliaSurveys: !1,
      showRatingsSearch: !1,
      specialCampaigns: ["singlesday", "blackdealsdays"]
    },
    [ge.sl_SI]: {
      showRetailItemNumber: !1,
      showStoreAvailability: !0,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !1,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !0,
      otherRecoSliderType: "last_seen",
      showProductBundleSlider: !0,
      showSizeRatings: !0,
      showLegacyDeStyles: !0,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "SHORT",
      showBargainHintFromPercentage: 100,
      showMedalliaSurveys: !1,
      showRatingsSearch: !1,
      specialCampaigns: ["singlesday", "blackdealsdays"]
    },
    [ge.pt_PT]: {
      showStoreAvailability: !0,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !1,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !0,
      otherRecoSliderType: "last_seen",
      showProductBundleSlider: !0,
      showSizeRatings: !0,
      showLegacyDeStyles: !0,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "SHORT",
      showBargainHintFromPercentage: 100,
      showMedalliaSurveys: !1,
      showRatingsSearch: !1,
      specialCampaigns: ["singlesday", "blackdealsdays"]
    },
    [ge.en_GB]: {
      showStoreAvailability: !0,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !1,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !0,
      otherRecoSliderType: "last_seen",
      showProductBundleSlider: !0,
      showSizeRatings: !0,
      showLegacyDeStyles: !0,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "SHORT",
      showBargainHintFromPercentage: 100,
      showMedalliaSurveys: !1,
      showRatingsSearch: !1,
      specialCampaigns: ["singlesday", "blackdealsdays"]
    },
    [ge.fi_FI]: {
      showRetailItemNumber: !1,
      showStoreAvailability: !0,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !1,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !0,
      otherRecoSliderType: "last_seen",
      showProductBundleSlider: !0,
      showSizeRatings: !0,
      showLegacyDeStyles: !0,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "SHORT",
      showBargainHintFromPercentage: 100,
      showMedalliaSurveys: !1,
      showRatingsSearch: !1,
      specialCampaigns: ["singlesday", "blackdealsdays"]
    },
    [ge.lt_LT]: {
      showRetailItemNumber: !1,
      showStoreAvailability: !0,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !1,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !0,
      otherRecoSliderType: "last_seen",
      showProductBundleSlider: !0,
      showSizeRatings: !0,
      showLegacyDeStyles: !0,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "SHORT",
      showBargainHintFromPercentage: 100,
      showMedalliaSurveys: !1,
      showRatingsSearch: !1,
      specialCampaigns: ["singlesday", "blackdealsdays"]
    },
    [ge.lv_LV]: {
      showRetailItemNumber: !1,
      showStoreAvailability: !0,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !1,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !0,
      otherRecoSliderType: "last_seen",
      showProductBundleSlider: !0,
      showSizeRatings: !0,
      showLegacyDeStyles: !0,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "SHORT",
      showBargainHintFromPercentage: 100,
      showMedalliaSurveys: !1,
      showRatingsSearch: !1,
      specialCampaigns: ["singlesday", "blackdealsdays"]
    },
    [ge.ru_LV]: {
      showRetailItemNumber: !1,
      showStoreAvailability: !0,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !1,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !0,
      otherRecoSliderType: "last_seen",
      showProductBundleSlider: !0,
      showSizeRatings: !0,
      showLegacyDeStyles: !0,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "SHORT",
      showBargainHintFromPercentage: 100,
      showMedalliaSurveys: !1,
      showRatingsSearch: !1,
      specialCampaigns: ["singlesday", "blackdealsdays"]
    },
    [ge.et_EE]: {
      showRetailItemNumber: !1,
      showStoreAvailability: !0,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !1,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !0,
      otherRecoSliderType: "last_seen",
      showProductBundleSlider: !0,
      showSizeRatings: !0,
      showLegacyDeStyles: !0,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "SHORT",
      showBargainHintFromPercentage: 100,
      showMedalliaSurveys: !1,
      showRatingsSearch: !1,
      specialCampaigns: ["singlesday", "blackdealsdays"]
    },
    [ge.en_US]: {
      showRetailItemNumber: !1,
      showStoreAvailability: !0,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !1,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !0,
      otherRecoSliderType: "last_seen",
      showProductBundleSlider: !0,
      showSizeRatings: !0,
      showLegacyDeStyles: !0,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "SHORT",
      showBargainHintFromPercentage: 100,
      showMedalliaSurveys: !1,
      showRatingsSearch: !1,
      specialCampaigns: ["singlesday", "blackdealsdays"]
    },
    [ge.ru_EE]: {
      showRetailItemNumber: !1,
      showStoreAvailability: !0,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !1,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !0,
      otherRecoSliderType: "last_seen",
      showProductBundleSlider: !0,
      showSizeRatings: !0,
      showLegacyDeStyles: !0,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "SHORT",
      showBargainHintFromPercentage: 100,
      showMedalliaSurveys: !1,
      showRatingsSearch: !1,
      specialCampaigns: ["singlesday", "blackdealsdays"]
    },
    [ge.hr_HR]: {
      showRetailItemNumber: !1,
      showStoreAvailability: !0,
      alwaysActiveAddToCartButton: !0,
      alwaysActiveAddToWishlistButton: !0,
      showVatTextGlobalPlus: !1,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !0,
      showSponsoredRecoSlider: !0,
      otherRecoSliderType: "last_seen",
      showProductBundleSlider: !0,
      showSizeRatings: !0,
      showLegacyDeStyles: !0,
      showWishlistButton: !0,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "SHORT",
      showBargainHintFromPercentage: 100,
      showMedalliaSurveys: !1,
      showRatingsSearch: !1,
      specialCampaigns: ["singlesday", "blackdealsdays"]
    },
    default: {
      showRetailItemNumber: !0,
      showStoreAvailability: !1,
      alwaysActiveAddToCartButton: !1,
      alwaysActiveAddToWishlistButton: !1,
      showVatTextGlobalPlus: !0,
      showDeliverChargesForFreeDelivery: !0,
      showOtherRecoSlider: !1,
      showSponsoredRecoSlider: !1,
      otherRecoSliderType: "products",
      showComparisonsTable: !1,
      showProductBundleSlider: !1,
      showSizeRatings: !0,
      showLegacyDeStyles: !1,
      showWishlistButton: !1,
      showDeliveryInfoAdditionalShippingCharges: !0,
      showSupplementalDescriptionGridBox: "NONE",
      listenToKameleoon: !1,
      showBargainHintFromPercentage: 0,
      showMedalliaSurveys: !1,
      showRatingsSearch: !1,
      showMarginRibbon: !1,
      specialCampaigns: ["singlesday", "blackdealsdays"],
      showDifferentDeliveryDuration: !1,
      redirectToSearch: !1,
      vltExpectedDeliveryDate: !1,
      installmentEnabled: !1,
      showAiSummaries: !1,
      priceFontFamily: "default",
      showAplazameButton: !1,
      lidlPlusCouponsEnabled: !1,
      shopTheLookEnabled: !0,
      shopTheLookSliderEnabled: !1
    }
  };

function AT(e, t) {
  const r = fo[e];
  return r ? (r == null ? void 0 : r[t]) ?? fo.default[t] : fo.default[t]
}
const Ji = (e, t) => $(() => AT(e, t)),
  RT = ot("ratingsDetail", {
    state: () => ({
      ratings: {}
    }),
    getters: {
      enabled(e) {
        return !!e.ratings.average
      },
      showSizeRatings(e) {
        var r;
        const t = dr(Sa());
        return Ji(t.locale, "showSizeRatings")
          .value && !!((r = e.ratings) != null && r.sizeType)
      }
    }
  }),
  OT = e => encodeURIComponent(e)
  .replace(/(%22|%27|'|"|%3C|%2F|%3C|%3E)/g, ""),
  IT = ot("version", {
    state: () => ({
      version: void 0
    }),
    getters: {
      getParamSuffix: e => t => e.version ? t.includes("?v=") || t.includes("&v=") ? "" : `${t.includes("?")?"&":"?"}v=${e.version}` : ""
    },
    actions: {
      init() {
        var e, t;
        this.version = (t = (e = this.$nuxt) == null ? void 0 : e.query) != null && t.v ? OT(this.$nuxt.query.v) : this.version
      }
    }
  }),
  it = ot("products", {
    state: () => ({
      productId: null,
      designTheme: null,
      selected: null,
      byId: {}
    }),
    getters: {
      current: e => e.selected ? e.byId[e.selected] : null,
      hasVariants: e => Object.keys(e.byId)
        .length > 1,
      isHead: e => e.productId === e.selected,
      isVariant: e => e.productId !== e.selected,
      rootProduct: e => e.productId ? e.byId[e.productId] : null,
      type() {
        var e;
        return ((e = this.rootProduct) == null ? void 0 : e.productType) ?? void 0
      },
      currentPriceWithZones() {
        var s, i, a, o;
        const e = zs(),
          {
            zonePrice: t
          } = Ir(e),
          {
            productHasZones: r
          } = Ir(ta());
        if (r.value && t.value) return t.value;
        const n = (a = (i = (s = this.rootProduct) == null ? void 0 : s.lidlPlus) == null ? void 0 : i[0]) == null ? void 0 : a.price;
        return n || (((o = this.current) == null ? void 0 : o.price) ?? null)
      },
      finalPriceNumber() {
        const e = this.currentPriceWithZones;
        return e ? e.price ?? e : null
      }
    },
    actions: {
      async fetch(e) {
        const t = qe()
          .$api,
          {
            data: {
              value: r
            },
            error: n
          } = await Mb(`&erp${e}`, s => {
            var i;
            return (i = s == null ? void 0 : s.payload) == null || delete i.path, t.getDetail(e)
          });
        if (n.value) throw {
          ...n.value,
          status: 404
        };
        return await this.setup(r), r
      },
      setup(e) {
        this.productId = e.erpNumber, this.designTheme = e.designTheme, this.byId = {
            [e.erpNumber || ""]: e,
            ...e.variants || {}
          }, IT()
          .init(), CT()
          .init(e), Pa()
          .init(e), V_()
          .init(e), Ql()
          .init(), kT()
          .init(e), ST()
          .init(e);
        const s = RT();
        s.ratings = e.ratings || {}, TT()
          .init(e), PT()
          .setSuccessor(e.successor), MC()
          .init(e), ta(Ie())
          .init(), bT()
          .setLocale(dr()
            .locale)
      },
      select(e) {
        e in this.byId && (this.selected = e)
      },
      selectTheme(e) {
        this.designTheme = e
      }
    }
  }),
  Ql = ot("availability-cx", () => {
    const e = Pa(Ie()),
      {
        attributesMap: t,
        selected: r,
        lastSelectedAttribute: n,
        attributes: s,
        selectedList: i
      } = Ir(e),
      {
        getAttributesCode: a,
        select: o
      } = e,
      l = T => {
        var N, B;
        const {
          soldOut: h,
          preventSelling: p,
          backInStockNotification: v,
          backInStockInfo: P,
          ...g
        } = sf((N = t.value) == null ? void 0 : N[T]), L = T.split("&&")
          .length === s.value.length, b = !!((B = t.value) != null && B[T]);
        return {
          ...g,
          backInStockNotification: v,
          backInStockInfo: P,
          soldOut: h,
          preventSelling: p,
          exists: b,
          isEnabled: L ? b && !h && !p : !h && !p
        }
      },
      u = T => {
        const h = Object.values({
          ...r.value,
          ...T ? {
            [Ds(T)]: T
          } : {}
        });
        return l(a(h))
      },
      c = T => typeof T.isEnabled < "u" ? T.isEnabled && !T.soldOut && !T.preventSelling : !T.soldOut && !T.preventSelling,
      f = T => n.value === T ? c(u(r.value[T])) : !0,
      d = $(() => {
        const T = it(Ie())
          .current;
        return sf({
          ...T,
          ...T == null ? void 0 : T.stockAvailability
        })
      }),
      _ = $(() => i.value.filter(T => T)
        .length ? u() : d.value),
      m = (T = []) => {
        const h = [];
        for (const p in T) {
          const {
            key: v
          } = T[p], P = Object.keys(r.value)
            .length ? u(v) : l(v);
          if (c(P) && h.push(v), h.length > 1) break
        }
        return h
      },
      E = () => {
        s.value.forEach(({
          options: T
        }) => {
          const [h, ...p] = m(T);
          r.value[Ds(h)] || p.length || o(h)
        })
      },
      R = $(() => {
        var h, p, v, P, g;
        const T = it(Ie())
          .current;
        return !!((h = _.value) != null && h.preventSelling || (p = _.value) != null && p.belowThreshold || (v = _.value) != null && v.halfSoldOut || (P = _.value) != null && P.soonAvailable || (g = _.value) != null && g.soldOut || T != null && T.flashSales)
      });
    return gt(r, E, {
      deep: !0
    }), {
      init: E,
      getSelectedOptionsAvailability: u,
      attributeAvailability: f,
      isAvailable: c,
      showHint: R,
      current: _
    }
  }),
  B_ = () => {
    const e = _e(),
      t = _e(),
      r = () => {
        clearTimeout(e.value), e.value = void 0, t.value = void 0
      },
      n = i => {
        e.value = setTimeout(() => {
          var a;
          (a = t.value) == null || a.call(t), r()
        }, i)
      },
      s = (i, a = 50) => {
        e.value || (t.value = i, n(a))
      };
    return ss()
      .run(() => {
        ks(r)
      }), {
        cooldown: s
      }
  },
  ho = 1,
  of = (e, t, r) => [...e.slice(0, t), r, ...e.slice(t)],
  Mn = ({
    gallery: e,
    imageMap: t
  } = {}) => {
    var r;
    return ((r = e == null ? void 0 : e.images) == null ? void 0 : r.flatMap(n => t != null && t[n] ? {
      ...t == null ? void 0 : t[n],
      type: "IMAGE"
    } : [])) ?? []
  },
  V_ = ot("media-cx", () => {
    const e = Pa(Ie()),
      {
        cooldown: t
      } = B_(),
      r = _e({}),
      n = _e({}),
      s = _e(0),
      i = _e(void 0),
      a = $(() => {
        const {
          isVariant: g,
          selected: L
        } = Ir(it(Ie()));
        return g.value ? r.value[L.value] : n.value
      }),
      o = $(() => {
        var g;
        (g = a.value) != null && g.threesixty
      }),
      l = $(() => {
        var g, L;
        return (L = (g = a.value) == null ? void 0 : g.youtube) == null ? void 0 : L.map(b => ({
          ...b,
          type: "YOUTUBE"
        }))
      }),
      u = $(() => {
        var b, N, B, k;
        const g = Object.keys(((N = (b = a.value) == null ? void 0 : b.media) == null ? void 0 : N.videoMap) ?? {}),
          L = (k = (B = a.value) == null ? void 0 : B.media) == null ? void 0 : k.videoMap;
        if (L) return g.map(W => ({
          ...L[W],
          type: "DEMOUP",
          interactive: !0
        }))
      }),
      c = g => {
        const L = [...l.value ?? [], ...u.value ?? []];
        if (!L.length) return g;
        const [b, ...N] = L;
        return [...of(g, ho, b), ...N]
      },
      f = $(() => ["T_FARBE", "P_FARBE", "MIGR_FR2"].some(L => !!e.selected[L])),
      d = $(() => {
        var b, N;
        const g = ((N = (b = n.value.media) == null ? void 0 : b.gallery) == null ? void 0 : N.images) ?? [],
          L = Object.values(r.value)
          .flatMap(B => {
            var k, W;
            return ((W = (k = B == null ? void 0 : B.media) == null ? void 0 : k.gallery) == null ? void 0 : W.images) ?? []
          });
        return [...new Set([...g, ...L])]
      }),
      _ = $(() => {
        var b, N, B, k, W;
        const g = it(Ie());
        if (!e.selectedList.length) return Mn(n.value.media);
        if (g.isVariant) return Mn((b = a.value) == null ? void 0 : b.media);
        if (!f.value || !((B = (N = e == null ? void 0 : e.current) == null ? void 0 : N.erpNumbers) != null && B.length)) return Mn(n.value.media);
        const L = (W = (k = e.current) == null ? void 0 : k.erpNumbers) == null ? void 0 : W.reduce((Y, ee) => {
          var X, re;
          return {
            ...Y,
            ...((re = (X = r.value[ee]) == null ? void 0 : X.media) == null ? void 0 : re.imageMap) ?? {}
          }
        }, {});
        return Mn({
            gallery: {
              images: d.value
            },
            imageMap: L
          })
          .flatMap(Y => ({
            ...Y,
            type: "IMAGE"
          }))
      }),
      m = $(() => {
        var L, b, N;
        const g = _.value[0];
        return (N = (b = (L = a.value) == null ? void 0 : L.media) == null ? void 0 : b.glbMedias) == null ? void 0 : N.map(B => ({
          id: B,
          type: "3D",
          thumbUrl: g == null ? void 0 : g.thumbUrl,
          mediumUrl: g == null ? void 0 : g.mediumUrl,
          accessibility: g == null ? void 0 : g.accessibility,
          description: g == null ? void 0 : g.description
        }))
      }),
      E = g => {
        var B, k, W, Y;
        if (!((B = m.value) != null && B.length)) return g;
        const L = !!((k = l.value) != null && k.length) || !!((W = o.value) != null && W.length) || !!((Y = u.value) != null && Y.length),
          [b, ...N] = m.value;
        return [...of(g, L ? ho + 1 : ho, b), ...N]
      },
      R = $(() => E(c(_.value))
        .map((g, L) => ({
          ...g,
          index: L
        }))),
      O = (g, L) => {
        t(() => {
          s.value = g
        }, L ? 0 : 100)
      },
      T = g => {
        i.value = g
      },
      h = $(() => {
        var L;
        const g = {
          ...((L = n.value.media) == null ? void 0 : L.imageMap) ?? {}
        };
        return Object.values(r.value)
          .forEach(b => {
            var N;
            (N = b == null ? void 0 : b.media) != null && N.imageMap && Object.assign(g, b.media.imageMap)
          }), g
      }),
      p = $(() => R.value.length > 1),
      v = $(() => i.value !== void 0 ? Mn(n.value.media)
        .find(g => g.id === i.value) : void 0);
    return {
      init: g => {
        r.value = g.variants ?? {}, n.value = g ?? {}
      },
      selectImage: O,
      selectPreview: T,
      getPreviewMedia: v,
      allImagesById: h,
      selectedImage: s,
      multimediaGallery: R,
      youtube: l,
      threesixty: o,
      models: m,
      hasMoreThanOneItem: p
    }
  }),
  LT = (e, t, r) => Math.min(Math.max(e, t), r),
  DT = ot("quantity", () => {
    const e = _e(1),
      t = $(() => {
        var d;
        return (d = it(Ie())
          .current) == null ? void 0 : d.stockAvailability
      }),
      r = $(() => {
        var d;
        return (d = t.value) == null ? void 0 : d.orderableQuantities
      }),
      n = $(() => it(Ie())
        .rootProduct),
      s = $(() => {
        var d, _;
        return (_ = (d = n.value) == null ? void 0 : d.stockAvailability) == null ? void 0 : _.preselectedQuantity
      }),
      i = $(() => {
        var d;
        return ((d = t.value) == null ? void 0 : d.minOrderableQuantity) ?? 0
      }),
      a = $(() => {
        var _, m, E, R;
        const d = it(Ie());
        return !((_ = d.current) != null && _.flashSales) && !((m = d.current) != null && m.preventSelling) && ((E = t.value) == null ? void 0 : E.onlineAvailable) && !!((R = d.current) != null && R.price)
      }),
      o = $(() => {
        var d;
        return ((d = r.value) == null ? void 0 : d.flatMap(({
          value: _
        }) => _ ?? [])) ?? []
      }),
      l = $(() => {
        const d = it(Ie());
        return o.value.length && a.value ? d.hasVariants ? d.isVariant : !0 : !1
      }),
      u = $(() => {
        var d, _, m;
        return ((_ = (d = r.value) == null ? void 0 : d[0]) == null ? void 0 : _.value) || ((m = t.value) == null ? void 0 : m.minOrderableQuantity) || 1
      }),
      c = $(() => {
        var d, _;
        return (_ = (d = r == null ? void 0 : r.value) == null ? void 0 : d.sort((m, E) => m.value - E.value)
          .at(-1)) == null ? void 0 : _.value
      }),
      f = () => {
        e.value = s.value ?? u.value
      };
    return gt(() => it(Ie())
      .selected, () => {
        const d = u.value ?? 0,
          _ = c.value ?? 1 / 0;
        e.value = LT(e.value, d, _)
      }), {
      init: f,
      enabled: l,
      minimum: u,
      maximum: c,
      availableValues: o,
      selected: e,
      minOrderableQuantity: i
    }
  }),
  kT = ot("repairability-index", {
    state: () => ({
      byId: {}
    }),
    getters: {
      repairabilityIndex: e => t => e.byId[t] || {}
    },
    actions: {
      init(e) {
        const t = {
          ...e != null && e.erpNumber ? {
            [e.erpNumber]: e
          } : {},
          ...(e == null ? void 0 : e.variants) || {}
        };
        this.byId = Object.entries(t)
          .reduce((r, [n, s]) => {
            var i;
            return {
              ...r,
              [n]: (i = s == null ? void 0 : s.repairabilityIndex) == null ? void 0 : i.map(a => ({
                datasheet: a.repairabilityDataSheet,
                image: a.repairabilityImage,
                label: a.repairabilityLabel,
                accessibility: a.repairabilityAccessibility
              }))
            }
          }, {})
      }
    }
  });

function NT(e, t) {
  for (const [r, n] of Object.entries(t)) {
    const s = `{${r}}`;
    e.includes(s) && (e = e.replace(s, n))
  }
  return e
}

function iO(e) {
  function t(r, n) {
    const s = e[r] || "";
    return s && n ? NT(s, n) : s
  }
  return {
    t
  }
}
const MT = {
    showDiscount: ["cs-CZ", "da-DK", "de-AT", "de-CH", "de-DE", "es-ES", "en-GB", "en-IE", "en-MT", "en-XI", "fr-CH", "fr-FR", "hu-HU", "it-CH", "it-IT", "nl-NL", "pl-PL", "sk-SK", "sr-RS", "sv-SE", "bg-BG", "de-LU", "el-CY", "el-GR", "en-CY", "et-EE", "fi-FI", "fr-LU", "hr-HR", "lt-LT", "lv-LV", "pt-PT", "ro-RO", "ru-EE", "ru-LV", "sl-SI"],
    showCurrencyAsSuffix: ["cs-CZ", "da-DK", "de-AT", "de-CH", "de-DE", "es-ES", "fr-BE", "fr-CH", "fr-FR", "hu-HU", "it-CH", "it-IT", "nl-BE", "nl-NL", "pl-PL", "sk-SK", "sr-RS", "sv-SE", "bg-BG", "de-LU", "el-CY", "el-GR", "en-CY", "et-EE", "fi-FI", "fr-LU", "hr-HR", "lt-LT", "lv-LV", "pt-PT", "ro-RO", "ru-EE", "ru-LV", "sl-SI"],
    showStrikePriceSuffix: ["hu-HU"],
    showDiscountPriceSuffix: ["hu-HU"],
    showDiscountOldPricePrefixSingle: [],
    showDiscountOldPricePrefixGroup: ["cs-CZ", "de-AT", "de-CH", "de-DE", "es-ES", "en-MT", "fr-CH", "fr-FR", "it-CH", "nl-NL", "sr-RS", "sv-SE", "nl-BE", "fr-BE"],
    showDiscountOldPriceDoubleAsterisk: ["de-AT", "de-CH", "de-DE", "es-ES", "en-MT", "fr-CH", "fr-FR", "it-CH", "sr-RS", "sv-SE"],
    showDiscountOldPricePrefix: ["de-AT", "de-DE", "es-ES"],
    showDiscountUvpPricePrefix: ["bg-BG", "cs-CZ", "de-AT", "de-DE", "es-ES", "de-LU", "en-GB", "en-CY", "en-IE", "en-XI", "el-CY", "el-GR", "et-EE", "fi-FI", "fr-BE", "fr-FR", "fr-LU", "hu-HU", "hr-HR", "lt-LT", "lv-LV", "nl-BE", "nl-NL", "pt-PT", "ro-RO", "ru-EE", "ru-LV", "sl-SI"],
    showDiscountOldPriceStrikeGroup: ["bg-BG", "de-LU", "el-CY", "el-GR", "en-CY", "cs-CZ", "da-DK", "de-AT", "de-CH", "de-DE", "es-ES", "en-GB", "en-IE", "en-MT", "en-XI", "et-EE", "fi-FI", "fr-BE", "fr-CH", "fr-LU", "hu-HU", "hr-HR", "it-CH", "it-IT", "lt-LT", "lv-LV", "nl-BE", "nl-NL", "pt-PT", "ro-RO", "ru-EE", "ru-LV", "sl-SI", "sk-SK", "sr-RS", "sv-SE"],
    showDiscountOldPriceStrikeSingle: ["cs-CZ", "da-DK", "de-AT", "de-CH", "de-DE", "es-ES", "en-GB", "en-IE", "en-MT", "en-XI", "fr-BE", "fr-CH", "fr-FR", "hu-HU", "it-CH", "it-IT", "nl-BE", "nl-NL", "sk-SK", "sr-RS", "sv-SE", "bg-BG", "de-LU", "el-CY", "el-GR", "en-CY", "et-EE", "fi-FI", "fr-LU", "hr-HR", "lt-LT", "lv-LV", "pt-PT", "ro-RO", "ru-EE", "ru-LV", "sl-SI"],
    showDiscountUvpPriceStrikeSingle: ["cs-CZ", "da-DK", "de-AT", "de-CH", "de-DE", "en-GB", "en-IE", "en-MT", "en-XI", "fr-CH", "hu-HU", "it-CH", "it-IT", "sk-SK", "sr-RS", "sv-SE", "bg-BG", "de-LU", "el-CY", "el-GR", "en-CY", "et-EE", "fi-FI", "fr-LU", "hr-HR", "lt-LT", "lv-LV", "pt-PT", "ro-RO", "ru-EE", "ru-LV", "sl-SI"],
    showDiscountUvpPriceStrikeGroup: ["cs-CZ", "da-DK", "de-AT", "de-CH", "de-DE", "en-GB", "en-IE", "en-MT", "en-XI", "fr-CH", "hu-HU", "it-CH", "it-IT", "pl-PL", "sk-SK", "sr-RS", "sv-SE", "bg-BG", "de-LU", "el-CY", "el-GR", "en-CY", "et-EE", "fi-FI", "fr-LU", "hr-HR", "lt-LT", "lv-LV", "pt-PT", "ro-RO", "ru-EE", "ru-LV", "sl-SI"],
    showDiscountOldPriceStrikeGroupLogistics: ["cs-CZ", "de-DE", "es-ES", "fr-BE", "fr-FR", "hu-HU", "nl-BE", "nl-NL", "sk-SK"],
    showDiscountUvpPriceStrikeGroupLogistics: ["cs-CZ", "de-DE", "hu-HU", "pl-PL", "sk-SK"],
    showDiscountOldPriceSuffixGroup: ["cs-CZ", "nl-NL", "pl-PL"],
    showDiscountOldPriceSuffixSingle: ["da-DK", "de-AT", "de-CH", "de-DE", "es-ES", "en-GB", "en-IE", "en-MT", "en-XI", "fr-BE", "fr-CH", "fr-FR", "hu-HU", "it-CH", "it-IT", "nl-BE", "sk-SK", "sr-RS", "sv-SE", "bg-BG", "de-LU", "el-CY", "el-GR", "en-CY", "et-EE", "fi-FI", "fr-LU", "hr-HR", "lt-LT", "lv-LV", "pt-PT", "ro-RO", "ru-EE", "ru-LV", "sl-SI"],
    showDiscountOldPriceCurrencySuffixSingle: ["pl-PL", "sk-SK"],
    showDiscountOldPriceCurrencySuffixGroup: ["cs-CZ"],
    showDiscountRecommendedPriceSuffix: ["nl-NL"],
    showDiscountTextOnlyGroup: ["fr-FR"],
    showDiscountRecommendedPrice: ["cs-CZ", "da-DK", "de-AT", "de-CH", "de-DE", "es-ES", "en-GB", "en-IE", "en-MT", "en-XI", "fr-CH", "fr-FR", "hu-HU", "it-CH", "it-IT", "pl-PL", "sk-SK", "sr-RS", "sv-SE", "bg-BG", "de-LU", "el-CY", "el-GR", "en-CY", "et-EE", "fi-FI", "fr-LU", "hr-HR", "lt-LT", "lv-LV", "pt-PT", "ro-RO", "ru-EE", "ru-LV", "sl-SI"],
    showDiscountOldPrice: ["cs-CZ", "da-DK", "de-AT", "de-CH", "de-DE", "es-ES", "en-GB", "en-IE", "en-MT", "en-XI", "fr-BE", "fr-CH", "fr-FR", "hu-HU", "it-CH", "it-IT", "nl-BE", "nl-NL", "pl-PL", "sk-SK", "sr-RS", "sv-SE", "bg-BG", "de-LU", "el-CY", "el-GR", "en-CY", "et-EE", "fi-FI", "fr-LU", "hr-HR", "lt-LT", "lv-LV", "pt-PT", "ro-RO", "ru-EE", "ru-LV", "sl-SI"],
    showLowestPriceText: ["pl-PL", "sk-SK"],
    showLowestPriceTextGroup: ["pl-PL"],
    showDiscountRecommendedPriceText: ["nl-NL"],
    hasDiscountSuffix: ["en-IE", "en-XI", "bg-BG", "de-LU", "el-CY", "el-GR", "en-CY", "et-EE", "fi-FI", "fr-LU", "hr-HR", "lt-LT", "lv-LV", "pt-PT", "ro-RO", "ru-EE", "ru-LV", "sl-SI"],
    showDiscountAsterisk: ["cs-CZ", "da-DK", "de-AT", "de-CH", "de-DE", "es-ES", "en-GB", "en-IE", "en-MT", "en-XI", "fr-CH", "fr-FR", "hu-HU", "it-CH", "it-IT", "nl-NL", "sk-SK", "sr-RS", "sv-SE", "bg-BG", "de-LU", "el-CY", "el-GR", "en-CY", "et-EE", "fi-FI", "fr-LU", "hr-HR", "lt-LT", "lv-LV", "pt-PT", "ro-RO", "ru-EE", "ru-LV", "sl-SI"]
  },
  aO = e => {
    const t = {};
    for (const [r, n] of Object.entries(MT)) t[r] = n.includes(e);
    return t
  },
  Ce = e => ({
    leadingZeroPart: "0",
    trailingZeroPart: "00",
    decimalSeparator: ",",
    groupSeparator: "",
    decimalSeparatorTrailingZero: "",
    currency: "EUR",
    currencySymbol: "",
    ...e
  }),
  xT = Ce({
    currency: "BGN",
    decimalSeparator: "."
  }),
  FT = Ce({
    trailingZeroPart: "",
    currency: "CZK"
  }),
  HT = Ce({
    trailingZeroPart: "-",
    currency: "DKK"
  }),
  BT = Ce({
    leadingZeroPart: "-",
    decimalSeparator: "."
  }),
  VT = Ce({
    leadingZeroPart: "-",
    trailingZeroPart: "-",
    decimalSeparator: ".",
    currency: "CHF"
  }),
  UT = Ce({
    leadingZeroPart: "-",
    decimalSeparator: "."
  }),
  GT = Ce({
    leadingZeroPart: "-",
    decimalSeparator: "."
  }),
  $T = Ce({
    decimalSeparator: "."
  }),
  WT = Ce({
    trailingZeroPart: ""
  }),
  jT = Ce({
    trailingZeroPart: ""
  }),
  KT = Ce({
    decimalSeparator: ".",
    currency: "GBP"
  }),
  YT = Ce({
    trailingZeroPart: ""
  }),
  XT = Ce({
    decimalSeparator: "."
  }),
  qT = Ce({
    decimalSeparator: "."
  }),
  ZT = Ce({
    decimalSeparator: ".",
    currency: "GBP"
  }),
  zT = Ce({
    decimalSeparator: ".",
    currency: "USD"
  }),
  JT = Ce({
    decimalSeparator: "."
  }),
  QT = Ce({
    leadingZeroPart: "-",
    trailingZeroPart: "-",
    decimalSeparator: ".",
    currency: "CHF"
  }),
  eS = Ce({
    decimalSeparator: "."
  }),
  tS = Ce({
    decimalSeparator: "."
  }),
  rS = Ce({
    trailingZeroPart: "",
    currency: "HUF"
  }),
  nS = Ce({
    trailingZeroPart: "-",
    decimalSeparator: "."
  }),
  sS = Ce({
    leadingZeroPart: "-",
    trailingZeroPart: "-",
    decimalSeparator: ".",
    currency: "CHF",
    currencySymbol: "fr."
  }),
  iS = Ce({
    decimalSeparator: "."
  }),
  aS = Ce({
    decimalSeparator: "."
  }),
  oS = Ce({
    trailingZeroPart: "-",
    decimalSeparator: "."
  }),
  lS = Ce({
    currency: "PLN"
  }),
  cS = Ce({
    decimalSeparator: "."
  }),
  uS = Ce({
    currency: "RON"
  }),
  fS = Ce({
    decimalSeparator: "."
  }),
  dS = Ce({
    decimalSeparator: "."
  }),
  hS = Ce({
    trailingZeroPart: "-",
    decimalSeparator: ".",
    currency: "RSD"
  }),
  _S = Ce({
    trailingZeroPart: "-",
    decimalSeparator: ".",
    decimalSeparatorTrailingZero: ":",
    currency: "SEK"
  }),
  pS = new Proxy({
    "bg-BG": xT,
    "cs-CZ": FT,
    "da-DK": HT,
    "de-AT": BT,
    "de-CH": VT,
    "de-DE": UT,
    "es-ES": GT,
    "de-LU": $T,
    "el-CY": WT,
    "el-GR": jT,
    "en-GB": KT,
    "en-CY": YT,
    "en-IE": XT,
    "en-MT": qT,
    "en-XI": ZT,
    "en-US": zT,
    "fr-BE": JT,
    "fr-CH": QT,
    "fr-FR": eS,
    "fr-LU": tS,
    "hu-HU": rS,
    "hr-HR": nS,
    "it-CH": sS,
    "it-IT": iS,
    "nl-BE": aS,
    "nl-NL": oS,
    "pl-PL": lS,
    "pt-PT": cS,
    "ro-RO": uS,
    "sk-SK": fS,
    "sl-SI": dS,
    "sr-RS": hS,
    "sv-SE": _S
  }, {
    get: (e, t) => (e == null ? void 0 : e[t]) ?? Ce()
  }),
  lf = pS,
  mS = "*",
  un = "GROUP_ARTICLE_SALES";

function oO(e, t, r) {
  const n = (k, W) => k ? `${W} ${k}` : W,
    s = $(() => e.discount && Object.keys(e.discount)
      .length > 0 ? e.discount : void 0),
    i = $(() => {
      var k;
      return !!e.displayDiscountPrecalc || !!((k = s.value) != null && k.showDiscount)
    }),
    a = $(() => e.productType === "RETAIL" || e.productType === "RETAIL_FLAT" || e.productType === "RETAIL_HEAD" || e.productType === "RETAIL_VARIANT"),
    o = $(() => {
      if (!s.value) return "";
      if (s.value.discountText) return s.value.discountText;
      if (s.value.showPercentage) {
        const k = `${s.value.percentageDiscount}%`;
        return s.value.showUpTo ? r("Global_Up_To", {
          percentage: k
        }) : `-${k}`
      }
      return r("Global_Cheaper")
    }),
    l = $(() => {
      var k, W;
      return a.value && e.highlightText ? e.highlightText : (k = s.value) != null && k.fromRecommendedPrice && !t.value.showDiscountRecommendedPrice ? "" : i.value && e.productType === un && t.value.showDiscountTextOnlyGroup ? r("Global_Cheaper_Group") : i.value ? o.value : (W = s.value) == null ? void 0 : W.discountText
    }),
    u = $(() => {
      var k;
      const W = ((k = s.value) == null ? void 0 : k.fromRecommendedPrice) ?? !1;
      return e.productType === un ? !W && t.value.showDiscountOldPriceStrikeGroup || W && t.value.showDiscountUvpPriceStrikeGroup : e.productType === "GROUP_ARTICLE_LOGISTICS" ? !W && t.value.showDiscountOldPriceStrikeGroupLogistics || W && t.value.showDiscountUvpPriceStrikeGroupLogistics : !W && t.value.showDiscountOldPriceStrikeSingle || W && t.value.showDiscountUvpPriceStrikeSingle
    }),
    c = $(() => !!s.value && !s.value.fromRecommendedPrice && !a.value && (e.productType !== un || t.value.showLowestPriceTextGroup) && t.value.showLowestPriceText),
    f = $(() => {
      var k;
      return !!((k = s.value) != null && k.fromRecommendedPrice) && t.value.showDiscountRecommendedPriceText
    }),
    d = $(() => {
      var k;
      return (k = s.value) != null && k.fromRecommendedPrice && !t.value.showDiscountRecommendedPrice ? u.value : !0
    }),
    _ = $(() => {
      var k;
      return !!((k = s.value) != null && k.fromRecommendedPrice) && t.value.showDiscountUvpPricePrefix
    }),
    m = $(() => {
      var k;
      return !((k = s.value) != null && k.fromRecommendedPrice) && e.productType !== un && t.value.showDiscountOldPricePrefixSingle
    }),
    E = $(() => {
      var k;
      return !((k = s.value) != null && k.fromRecommendedPrice) && e.productType === un && t.value.showDiscountOldPricePrefixGroup
    }),
    R = $(() => {
      var k;
      return !((k = s.value) != null && k.fromRecommendedPrice) && t.value.showDiscountOldPricePrefix
    }),
    O = $(() => {
      var k;
      return !((k = s.value) != null && k.fromRecommendedPrice) && e.productType === un && t.value.showDiscountOldPriceCurrencySuffixGroup
    }),
    T = $(() => {
      var k, W, Y, ee, X;
      const re = (W = (k = s.value) == null ? void 0 : k.discountTitle) == null ? void 0 : W.toLowerCase(),
        se = (Y = l.value) == null ? void 0 : Y.toLowerCase();
      if ((ee = s.value) != null && ee.discountTitle && re !== se) return s.value.discountTitle;
      let de = "";
      _.value && (de = "Global_RecommendedRetailPrice"), R.value && (de = "Global_Before_Colon"), m.value && (de = "Global_Before_Single_Colon"), (E.value || O.value) && (de = "Global_Before_Group_Colon");
      const Pe = (X = s.value) != null && X.showFrom ? r("Global_From") : "";
      return de ? n(Pe, r(de)) : Pe
    }),
    h = $(() => {
      var k;
      const W = i.value ? T.value : (k = s.value) == null ? void 0 : k.discountTitle;
      return W === l.value ? void 0 : W
    }),
    p = $(() => {
      var k;
      return !((k = s.value) != null && k.fromRecommendedPrice) && t.value.showDiscountOldPriceCurrencySuffixSingle
    }),
    v = $(() => {
      var k;
      return !!((k = s.value) != null && k.fromRecommendedPrice) && t.value.showDiscountRecommendedPriceSuffix
    }),
    P = $(() => {
      var k;
      return (k = s.value) == null ? void 0 : k.suffix
    }),
    g = $(() => !!(e.showFrom && t.value.showDiscountPriceSuffix)),
    L = $(() => t.value.showCurrencyAsSuffix ? e.displayedCurrency && g.value ? `${e.displayedCurrency}${r("Global_From")}` : e.displayedCurrency || "" : ""),
    b = $(() => {
      const k = e.productType === un ? O.value : p.value;
      return t.value.showDiscountAsterisk && P.value ? "" : v.value || (k || e.hasDiscountStar) && (!a.value || t.value.showDiscountAsterisk && e.productType === "RETAIL") ? mS : ""
    }),
    N = $(() => f.value ? r("Recommended_Price") : ""),
    B = $(() => c.value ? r("Lowest_Price") : "");
  return {
    displayDiscount: i,
    label: l,
    rrpHasStrike: u,
    showTexts: {
      showLowestPriceText: c,
      showDiscountRecommendedPriceText: f
    },
    ui: {
      showArrowHint: d
    },
    discountGetter: h,
    discountSuffix: P,
    showDiscountPriceSuffix: g,
    displayedSuffix: L,
    starRrp: b,
    discountRecommendedPriceText: N,
    lowestPriceText: B
  }
}
const mn = (e, t, r) => {
    if (!e) return "";
    let n = !1;
    const {
      decimalSeparator: s,
      groupSeparator: i,
      leadingZeroPart: a,
      trailingZeroPart: o,
      decimalSeparatorTrailingZero: l
    } = t, u = parseFloat(String(e)), c = new Intl.NumberFormat(r || "en-US", {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
      .formatToParts(u)
      .reduce((f, {
        type: d,
        value: _
      }) => ({
        ...f,
        ...f[d] ? {
          integer2: _
        } : {
          [d]: _
        }
      }), {});
    return c.group = i !== void 0 && c.group ? i : c.group, c.integer = a && c.integer === "0" && !c.integer2 ? a : c.integer, (o && c.fraction === "0" || c.fraction === "00") && (c.fraction = o, n = !0), s !== void 0 && (c.fraction ? n && l ? c.decimal = l : c.decimal = s : c.decimal = ""), Object.values(c)
      .reduce((f, d) => `${f}${d??""}`, "")
  },
  _o = "*";

function lO(e, t, r, n) {
  const s = $(() => mn(e.price, r.value, e.locale)),
    i = $(() => {
      var O;
      return mn((O = e.priceSecond) == null ? void 0 : O.price, r.value, e.locale)
    }),
    a = $(() => e.discount && JSON.stringify(e.discount) !== "{}" ? e.discount : void 0),
    o = $(() => {
      var O;
      return !((O = a.value) != null && O.fromRecommendedPrice) && t.value.showDiscountOldPriceDoubleAsterisk
    }),
    l = $(() => {
      const O = e.priceFormattedPrecalc ?? s.value;
      return !t.value.showCurrencyAsSuffix && e.displayedCurrency ? `${e.displayedCurrency}${O}` : O.toString()
    }),
    u = $(() => {
      var O;
      if (e.priceSecond) return {
        currency: e.priceSecond.currency,
        price: mn((O = e.priceSecond.price) == null ? void 0 : O.toString(), r.value, e.locale)
      }
    }),
    c = $(() => {
      var O;
      return !!((O = a.value) != null && O.showFrom) && t.value.showStrikePriceSuffix
    }),
    f = $(() => {
      var O, T, h;
      let p = e.deletedPriceFormattedPrecalc || (O = a.value) != null && O.deletedPrice ? mn(a.value.deletedPrice.toString(), r.value, e.locale) : "";
      if (p !== "" && (e.displayedCurrency && t.value.showCurrencyAsSuffix ? p += ` ${e.displayedCurrency}${c.value&&(T=a.value)!=null&&T.showFrom?n("Global_From"):""}` : e.displayedCurrency && !t.value.showCurrencyAsSuffix && (p = `${e.displayedCurrency} ${p}`), e.productType === "GROUP_ARTICLE_SALES" && (o.value ? p += ` ${_o}${_o}` : t.value.showLowestPriceTextGroup && (p += ` ${_o}`))), (h = e.priceSecond) != null && h.deletedPrice) {
        const v = `(${_.value} ${e.priceSecond.currency})`;
        p = p !== "" ? `${p} ${v}` : v
      }
      return p.trim()
    }),
    d = $(() => !!(e.showFrom && t.value.showDiscountPriceSuffix)),
    _ = $(() => {
      var O;
      return (O = e.priceSecond) != null && O.deletedPrice ? mn(e.priceSecond.deletedPrice.toString(), r.value, e.locale) : ""
    }),
    m = $(() => e.prefix || (e.showFrom && !d.value ? n("Global_From") : "")),
    E = $(() => {
      var O;
      if (!e.basePrice) return "";
      const T = e.basePrice,
        h = T.text ?? (T.amount != null && T.unit != null ? `${T.amount} ${T.unit} = ${mn(((O=T.price)==null?void 0:O.toString())??"",r.value,e.locale)}` : "");
      return h === "" ? "" : T.prefix ? `${n("Global_From")} ${h}` : h
    }),
    R = $(() => {
      const O = e.hasStar ? "*" : "",
        T = e.superscript || "";
      return O && T ? `${O} ${T}` : `${O}${T}`
    });
  return {
    priceFormatted: l,
    priceSecondFormatted: u,
    deletedPriceFormatted: f,
    deletedPriceSecondFormatted: _,
    prefixText: m,
    basePriceText: E,
    superscriptText: R,
    localizedSecondPrice: i
  }
}
const gS = 0,
  vS = 1,
  yS = 2,
  po = e => {
    const t = Math.floor(e)
      .toString()
      .split("");
    return t.length <= 1 && t.unshift("0"), t.map(Number)
  },
  cO = () => {
    const e = _e(0),
      t = _e(0),
      r = _e(),
      n = 1e3,
      s = _e([
        [0, 0],
        [0, 0],
        [0, 0]
      ]),
      i = u => {
        t.value = new Date(u)
          .getTime()
      },
      a = () => {
        const u = new Date()
          .getTime(),
          c = t.value - u;
        c > 0 ? (s.value[gS] = po(c / (1e3 * 60 * 60)), s.value[vS] = po(c / 1e3 / 60 % 60), s.value[yS] = po(c / 1e3 % 60)) : (window.cancelAnimationFrame(e.value), s.value = [
          [0, 0],
          [0, 0],
          [0, 0]
        ])
      },
      o = u => {
        u - (r.value || 0) > n && (a(), r.value = u), window.requestAnimationFrame(o)
      },
      l = () => {
        document.visibilityState === "hidden" && e.value ? window.cancelAnimationFrame(e.value) : document.visibilityState === "visible" && (e.value = window.requestAnimationFrame(o))
      };
    return An(() => {
      e.value = window.requestAnimationFrame(o), window.addEventListener("visibilitychange", l)
    }), as(() => {
      e.value && window.cancelAnimationFrame(e.value), window.removeEventListener("visibilitychange", l)
    }), {
      setEnd: i,
      digits: s
    }
  },
  ES = {
    bg_BG: "bg-BG",
    cs_CZ: "cs-CZ",
    da_DK: "da-DK",
    de_AT: "de-AT",
    de_CH: "de-CH",
    de_DE: "de-DE",
    es_ES: "es-ES",
    de_LU: "de-LU",
    el_CY: "el-CY",
    el_GR: "el-GR",
    en_CY: "en-CY",
    en_GB: "en-GB",
    en_IE: "en-IE",
    en_MT: "en-MT",
    en_XI: "en-XI",
    en_US: "en-US",
    et_EE: "et-EE",
    fi_FI: "fi-FI",
    fr_BE: "fr-BE",
    fr_CH: "fr-CH",
    fr_FR: "fr-FR",
    fr_LU: "fr-LU",
    hu_HU: "hu-HU",
    hr_HR: "hr-HR",
    it_CH: "it-CH",
    it_IT: "it-IT",
    lt_LT: "lt-LT",
    lv_LV: "lv-LV",
    nl_BE: "nl-BE",
    nl_NL: "nl-NL",
    pl_PL: "pl-PL",
    pt_PT: "pt-PT",
    ro_RO: "ro-RO",
    ru_EE: "ru-EE",
    ru_LV: "ru-LV",
    sk_SK: "sk-SK",
    sl_SI: "sl-SI",
    sr_RS: "sr-RS",
    sv_SE: "sv-SE"
  };

function cf(...e) {
  let t = "",
    r = "";
  if (e.length == 2) t = e[0].toUpperCase(), r = e[1].toLowerCase();
  else if (e.length == 1) {
    const n = /-|_/;
    if (!e[0].match(n)) return;
    const [s, i] = e[0].split(n);
    r = s.toLowerCase(), t = i.toUpperCase()
  } else return;
  return ES[`${r}_${t}`] ?? void 0
}

function U_(e, t, r) {
  const n = t ? new Date(t)
    .getTime() : -1 / 0,
    s = r ? new Date(r)
    .getTime() : 1 / 0;
  return e >= n && e < s
}

function uf(e) {
  return e ? e > Date.now() : null
}

function ff(e) {
  const t = new Date(e);
  return t.setUTCDate(t.getUTCDate() - 1), t.toISOString()
}
const df = (e, t, r = !1) => {
    if (!e) return "";
    const n = new Date(e);
    return Number.isNaN(n.getTime()) ? "" : (r && n.setMinutes(n.getMinutes() - 1), n.toLocaleDateString(t, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    }))
  },
  uO = (e, t, r, n) => {
    if (!(e != null && e.startDate)) return null;
    const s = df(e.startDate, t),
      i = df(e.endDate || e.endDateExclusive, t, !0);
    {
      if (e.showEndDate && s && i) return n("Product.Price_Valid_Range", {
        start: s,
        end: i
      });
      if (i) return `${n("Product.Price_Valid_Until")} ${i}`;
      if (s) return `${n("Product.Price_Valid_From")} ${s}`
    }
    return e.showEndDate && i ? `${n("Price.Global_CampaignEndDate")} ${i}` : null
  },
  fO = (e, t, r, n) => {
    var c;
    if (!n || !((c = e == null ? void 0 : e.discount) != null && c.deletedPrice)) return {
      strokeData: null,
      cleanedDiscount: e == null ? void 0 : e.discount
    };
    const {
      discount: s
    } = e, i = mn(s.deletedPrice.toString(), t, r), a = s.discountTitle ? `${s.discountTitle} ` : "", o = s.suffix ? ` ${s.suffix}` : "", l = `${a}{1}${o}`, u = {
      ...s,
      deletedPrice: void 0,
      discountTitle: void 0,
      suffix: void 0
    };
    return {
      strokeData: {
        value: i,
        template: l
      },
      cleanedDiscount: u
    }
  },
  dO = (e, t) => {
    if (!e || typeof e != "object") return e;
    const r = e,
      n = r.endDateExclusive || r.endDate;
    return U_(t, r.startDate, n) ? e : void 0
  },
  fn = {
    ACTIVE_EXACT: 1,
    ACTIVE_END_ONLY: 2,
    ACTIVE_START_ONLY: 3,
    FUTURE_EXACT: 4,
    FUTURE_START_ONLY: 5,
    INDEFINITE: 6,
    UNKNOWN: 7
  },
  Ai = 1e3,
  hf = (e, t) => {
    const r = e.validFrom != null,
      n = e.validUntil != null,
      s = r ? e.validFrom * Ai : 0,
      i = r && s > t;
    return !r && !n ? fn.INDEFINITE : i ? n ? fn.FUTURE_EXACT : fn.FUTURE_START_ONLY : r && n ? fn.ACTIVE_EXACT : !r && n ? fn.ACTIVE_END_ONLY : r && !n ? fn.ACTIVE_START_ONLY : fn.UNKNOWN
  },
  wS = e => {
    if (!e || !Array.isArray(e) || e.length === 0) return;
    const t = Date.now(),
      r = e.filter(n => !(!n.badges || n.badges.length === 0 || n.validUntil !== void 0 && n.validUntil !== null && n.validUntil * Ai < t));
    if (r.length !== 0) return r.sort((n, s) => {
      const i = hf(n, t),
        a = hf(s, t);
      if (i !== a) return i - a;
      const o = n.validFrom ? n.validFrom * Ai : 0,
        l = s.validFrom ? s.validFrom * Ai : 0;
      return o - l
    }), r[0]
  },
  mo = ["NOT_IN_THIS_STORE", "SOLD_OUT", "LOW_STOCK", "AVAILABLE"],
  zs = ot("store-availability", () => {
    const e = it(Ie()),
      t = dr(Ie()),
      {
        activeZone: r,
        productHasZones: n,
        isZoneDisplayable: s,
        productRegions: i,
        productHasRegions: a,
        productHasRegionsV2: o,
        productRegionsV2Count: l,
        activeRegionV2: u,
        activeRegionV2Data: c,
        activeRegionV2Key: f,
        productRegionsV2: d,
        selectedRegion: _
      } = Ir(ta(Ie())),
      {
        query: m
      } = os(),
      E = $(() => {
        const y = m.timestamp;
        if (!y) return;
        const D = Number(y);
        return Number.isNaN(D) ? void 0 : D
      }),
      R = _e(),
      O = _e(),
      T = _e(!1),
      h = _e(!1),
      p = _e({}),
      v = _e("IDLE"),
      P = Ji(t.locale, "showStoreAvailability"),
      g = Ji(t.locale, "listenToKameleoon"),
      L = $(() => {
        var y;
        return (y = e.rootProduct) == null ? void 0 : y.storeFacts
      }),
      b = $(() => {
        var y;
        return !!((y = L.value) != null && y.store)
      }),
      N = $(() => {
        var y;
        return !!((y = L.value) != null && y.online)
      }),
      B = $(() => {
        var y;
        return !!((y = L.value) != null && y.retail)
      }),
      k = $(() => b.value && N.value),
      W = $(() => B.value),
      Y = $(() => {
        var z, Z, x;
        const y = (Z = (z = e.current) == null ? void 0 : z.stockAvailability) == null ? void 0 : Z.badgeInfoV2,
          D = wS(y);
        if (!((x = D == null ? void 0 : D.badges) != null && x.length)) return;
        const K = D.badges.filter(V => {
          var le;
          return (le = V.type) == null ? void 0 : le.toUpperCase()
            .includes("STORE")
        });
        return K.length > 0 ? K : void 0
      }),
      ee = $(() => {
        var D;
        return (g.value ? P.value && T.value : !0) && !!((D = L.value) != null && D.showStoreAvailability)
      }),
      X = y => {
        T.value = y
      },
      re = async y => {
        v.value = "LOADING";
        try {
          const K = await qe()
            .$api.getStoreAvailability(e.selected, y);
          return v.value = "IDLE", K
        } catch {
          v.value = "ERROR"
        }
      }, se = y => (y == null || y.sort((D, K) => mo.indexOf(K.storeAvailabilityIndicator) - mo.indexOf(D.storeAvailabilityIndicator)), (y == null ? void 0 : y.find(D => mo.includes(D.storeAvailabilityIndicator))) ?? (y == null ? void 0 : y[0])), de = async y => {
        var z, Z;
        if (!((z = R.value) != null && z.id) || !b.value || !ee.value) return;
        const D = await re(R.value.id),
          K = se(D);
        K && (p.value = {
          ...p.value,
          [e.selected]: K.storeAvailabilityIndicator
        }, (!h.value || ((Z = O.value) == null ? void 0 : Z.id) !== R.value.id) && (y == null || y(), O.value = R.value), h.value || (h.value = !0))
      }, Pe = y => {
        R.value = {
          id: y.EntityID,
          region: y.ar,
          city: y.city,
          street: y.street,
          zip: y.zip
        }
      }, we = async y => {
        var D;
        if (!y) {
          R.value = void 0;
          return
        }
        y.EntityID !== ((D = R.value) == null ? void 0 : D.id) && (p.value = {}, Pe(y), await de())
      }, ye = $(() => {
        const y = r.value ?? {},
          K = ["price", "currentOfferPrice", "currentLidlPlusPrice", "currentPrice", "offerPrice"].find(z => y[z] != null);
        return K ? y[K] : null
      }), Ye = $(() => e.hasVariants ? e.isVariant : !0), He = $(() => {
        var y;
        return ((y = p.value) == null ? void 0 : y[e.selected]) ?? (Ye.value ? "SELECT_STORE" : "SELECT_VARIANT")
      }), De = $(() => {
        var K, z, Z;
        if (!o.value) return null;
        const y = (K = e.current) != null && K.regionsPrices ? e.current : e.rootProduct;
        if (f.value && c.value) {
          const x = c.value.regionPriceId;
          return x ? ((z = y == null ? void 0 : y.regionsPrices) == null ? void 0 : z[x]) ?? null : null
        }
        const D = Object.values(d.value)
          .find(x => x == null ? void 0 : x.isDefault);
        return D != null && D.regionPriceId ? ((Z = y == null ? void 0 : y.regionsPrices) == null ? void 0 : Z[D.regionPriceId]) ?? null : null
      }), ke = $(() => !_.value || !i.value ? null : i.value.find(({
        id: y,
        ar: D,
        code: K,
        region: z
      }) => y === _.value || D === _.value || K === _.value || z === _.value) ?? null), H = $(() => !a.value && !o.value ? !0 : o.value ? !!u.value && !!De.value : a.value ? !0 : !!_.value && !!ke.value), ne = $(() => {
        var z, Z;
        const y = B.value ? De.value : r.value,
          D = y == null ? void 0 : y.currentPrice;
        if (!D) return "";
        if (W.value && E.value && uf(E.value)) {
          if (D.endDate) return D.endDate;
          const x = (z = y.futurePrices) == null ? void 0 : z[0],
            V = (Z = x == null ? void 0 : x.price) == null ? void 0 : Z.startDate;
          return V ? ff(V) : ""
        }
        return D.showEndDate ? D.endDate ?? "" : ""
      }), Q = $(() => {
        var z, Z, x;
        const y = B.value ? De.value : r.value,
          D = (z = y == null ? void 0 : y.currentLidlPlusPrice) == null ? void 0 : z.price;
        if (!D) return "";
        if (W.value && E.value && uf(E.value)) {
          if (D.endDate) return D.endDate;
          const V = (Z = y.futureLidlPlusPrices) == null ? void 0 : Z[0],
            le = ((x = V == null ? void 0 : V.price) == null ? void 0 : x.startDate) ?? (V == null ? void 0 : V.startDate);
          return le ? ff(le) : ""
        }
        return D.showEndDate ? D.endDate ?? "" : ""
      }), ae = $(() => {
        var K, z, Z, x, V, le, ue;
        const y = r.value ?? {};
        if (E.value && y.futurePrices && Array.isArray(y.futurePrices)) {
          const Ae = y.futurePrices.find(Re => U_(E.value, Re.startDate, Re.endDateExclusive));
          if (Ae) return Ae.endDateExclusive
        }
        if (n.value) return ((K = ye.value) == null ? void 0 : K.endDate) || ((z = ye.value) == null ? void 0 : z.endDateExclusive);
        const D = De.value;
        return D ? ((Z = D.currentLidlPlusPrice) == null ? void 0 : Z.endDate) ?? ((x = D.currentPrice) == null ? void 0 : x.endDate) ?? ((V = D.currentOfferPrice) == null ? void 0 : V.endDate) ?? null : ((le = ye.value) == null ? void 0 : le.endDate) || ((ue = ye.value) == null ? void 0 : ue.endDateExclusive)
      }), he = $(() => N.value || k.value ? !n.value || !r.value ? !0 : s.value : B.value ? H.value : !0), Ee = $(() => he.value), I = $(() => he.value), S = $(() => he.value), F = $(() => a.value ? !!ke.value : !0), q = $(() => N.value || k.value ? !n.value || s.value : B.value ? (o.value || !!_.value) && F.value : !0), j = $(() => o.value ? !!u.value && !!De.value : !!_.value && F.value), J = $(() => {
        var y;
        return B.value ? j.value : k.value ? o.value ? !!(f.value || (y = L.value) != null && y.showStoreAvailability) : !0 : !1
      }), ie = $(() => B.value && !k.value && !N.value && o.value), C = $(() => {
        if (!B.value) return null;
        if (o.value) return l.value === 1 ? null : _.value ? !u.value || !De.value ? "Product.SpecificProduct_ProductNotInRegion" : null : "Product.SpecificProduct_ChooseWarehouse";
        if (a.value) {
          if (!_.value) return "Product.SpecificProduct_ChooseWarehouse";
          if (_.value && !ke.value) return "Product.SpecificProduct_ProductNotInRegion"
        }
        return null
      });
    return gt(() => e.selected, () => {
      de()
    }), {
      branch: R,
      zonePrice: ye,
      effectiveEndDate: ae,
      activeRegionPriceData: De,
      storeFacts: L,
      current: He,
      loadingStatus: v,
      showStoreAvailabilityEnabled: ee,
      isTrackingPageLoaded: h,
      isStore: b,
      isOnline: N,
      isRetail: B,
      isOmnichannel: k,
      isFuturePricesAllowed: W,
      storeBadges: Y,
      setStore: we,
      update: de,
      setEnabledByEvent: X,
      showPriceBox: he,
      showAddToCart: Ee,
      showAddToWishlist: I,
      showDeliveryBlock: S,
      showBadges: q,
      showStoreBadge: J,
      retailStatusMessageKey: C,
      displayRegionV2Price: ie,
      urlTimestamp: E,
      priceEndDateLabel: ne,
      lidlPlusPriceEndDateLabel: Q
    }
  }),
  bS = {
    [wn.AVAILABLE]: "available",
    [wn.SOON_AVAILABLE]: "soon_available",
    [wn.NOT_AVAILABLE]: "not_available"
  },
  TS = (e, t, r) => ({
    scenarioName: t,
    collections: {
      ...r,
      application: {
        ...r.application,
        applicationVersion: e
      },
      page: {
        ...r.page,
        pageParameter: window.location.search + window.location.hash
      },
      products: {
        ...r.products
      }
    }
  }),
  SS = (e, t) => ({
    type: Object.keys(t.modifiers)[0] || "base",
    value: t.value,
    element: e
  }),
  PS = () => {
    const e = Ie(),
      {
        productHasZones: t
      } = Ir(ta(e)),
      {
        current: r,
        rootProduct: n
      } = Ir(it(e)),
      {
        displayRegionV2Price: s,
        activeRegionPriceData: i,
        isRetail: a,
        zonePrice: o
      } = Ir(zs(e));
    return $(() => {
      var u, c, f, d, _, m, E, R;
      return s.value ? ((c = (u = i.value) == null ? void 0 : u.currentLidlPlusPrice) == null ? void 0 : c.price) ?? ((f = i.value) == null ? void 0 : f.currentPrice) ?? ((d = i.value) == null ? void 0 : d.currentOfferPrice) ?? {} : t.value && o.value && !a.value ? o.value : ((E = (m = (_ = n.value) == null ? void 0 : _.lidlPlus) == null ? void 0 : m[0]) == null ? void 0 : E.price) ?? (((R = r.value) == null ? void 0 : R.price) || {})
    })
  },
  _f = ot("tracking-cx", () => {
    const e = Fr()
      .public,
      t = dr(Ie()),
      {
        rootProduct: r,
        current: n,
        hasVariants: s
      } = Ir(it(Ie())),
      i = Pa(Ie()),
      a = zs(Ie()),
      o = Ql(),
      l = DT(Ie()),
      u = $(() => o.current.availabilityIndicator ? bS[o.current.availabilityIndicator] : void 0),
      c = $(() => {
        var g, L, b, N;
        return (L = (g = r.value) == null ? void 0 : g.storeFacts) != null && L.online ? (N = (b = r.value) == null ? void 0 : b.storeFacts) != null && N.store ? "both" : "online" : "retail"
      }),
      f = $(() => {
        var g;
        return a.isStore ? {
          storeId: (g = a.branch) == null ? void 0 : g.id,
          storeAvailability: a.current
        } : {}
      }),
      d = PS(),
      _ = g => {
        var L, b, N, B, k;
        return (k = (B = (N = (b = (L = n.value) == null ? void 0 : L.price) == null ? void 0 : b.specialTaxes) == null ? void 0 : N.find(({
          type: W
        }) => W === g)) == null ? void 0 : B.amountIncVat) == null ? void 0 : k.toString()
      },
      m = () => {
        var g, L, b;
        return !s.value || !((g = r.value) != null && g.variants) ? ((b = (L = r.value) == null ? void 0 : L.stockAvailability) == null ? void 0 : b.availabilityIndicator) === wn.AVAILABLE ? 1 : 0 : Object.values(r.value.variants)
          .filter(N => {
            var B;
            return ((B = N == null ? void 0 : N.stockAvailability) == null ? void 0 : B.availabilityIndicator) === wn.AVAILABLE
          })
          .length
      },
      E = () => {
        var b;
        const g = (b = r.value) == null ? void 0 : b.variants,
          L = g ? Object.keys(g)
          .length : 0;
        return g && L > 0 ? L : 1
      },
      R = g => ({
        aov: g.aov,
        availability: g.availability,
        brand: g.brand,
        categoryPrimary: g.categoryPrimary,
        categoryPrimaryPath: g.categoryPrimaryPath,
        copyrightTax: g.copyrightTax,
        currency: g.currency,
        energyClass: g.energyClass,
        environmentTax: g.environmentTax,
        forwardingSurcharge: g.forwardingSurcharge,
        id: g.id,
        listId: void 0,
        listName: void 0,
        name: g.name,
        netPrice: void 0,
        parentId: g.parentId,
        position: void 0,
        price: g.price,
        productDeliveryTime: g.productDeliveryTime,
        quantity: g.quantity,
        ranking: g.ranking,
        ratingAverage: g.ratingAverage,
        sapId: void 0,
        shippingCostHomeDeliveryCharge: g.shippingCostHomeDeliveryCharge,
        shippingCostHomeDeliveryXlCharge: g.shippingCostHomeDeliveryXlCharge,
        shippingCostParcelLockerDeliveryCharge: g.shippingCostParcelLockerDeliveryCharge,
        shippingCostParcelShopDeliveryCharge: g.shippingCostParcelShopDeliveryCharge,
        status: g.status,
        ...g.optionalParameters,
        tradeType: g.tradeType,
        type: g.type,
        variantAttributes: g.variantAttributes,
        variantGroupId: g.variantGroupId,
        variantId: g.variantId,
        variantsAvailable: g.variantsAvailable,
        variantsTotal: g.variantsTotal,
        wonCategoryPrimary: g.wonCategoryPrimary,
        wonCategoryPrimaryPath: g.wonCategoryPrimaryPath
      }),
      O = $(() => {
        var L, b, N, B, k, W, Y, ee, X, re, se, de, Pe, we, ye, Ye, He, De, ke, H, ne, Q, ae, he, Ee, I, S, F, q, j, J, ie, C, y, D, K, z, Z, x, V, le, ue, Ae, Re, Ge, rt, Gt, nn;
        const g = {
          aov: (b = (L = n.value) == null ? void 0 : L.margin) == null ? void 0 : b.aov,
          availability: u.value,
          brand: (k = (B = (N = r.value) == null ? void 0 : N.info) == null ? void 0 : B.brand) == null ? void 0 : k.name,
          categoryPrimary: (Y = (W = r.value) == null ? void 0 : W.keyfacts) == null ? void 0 : Y.analyticsCategory,
          categoryPrimaryPath: (ee = r.value) == null ? void 0 : ee.categorySecondaryPath,
          copyrightTax: _(il.COPYRIGHT),
          currency: lf[cf(t.locale)].currency,
          energyClass: (se = (re = (X = n.value) == null ? void 0 : X.energyLabels) == null ? void 0 : re.flatMap(({
            classCode: ht
          }) => ht)) == null ? void 0 : se.join(","),
          environmentTax: _(il.ECO),
          forwardingSurcharge: ((Pe = (de = n.value) == null ? void 0 : de.deliveryCharges) == null ? void 0 : Pe.additiveDeliveryCharge) ?? ((ye = (we = n.value) == null ? void 0 : we.deliveryCharges) == null ? void 0 : ye.absoluteDeliveryCharge),
          id: (Ye = r.value) == null ? void 0 : Ye.erpNumber,
          name: (De = (He = r.value) == null ? void 0 : He.keyfacts) == null ? void 0 : De.title,
          optionalParameters: f.value,
          parentId: ((ke = n.value) == null ? void 0 : ke.erpNumber) === ((H = r.value) == null ? void 0 : H.erpNumber) || (ne = r.value) == null ? void 0 : ne.erpNumber,
          price: ((Q = d.value) == null ? void 0 : Q.price) ?? ((he = (ae = n.value) == null ? void 0 : ae.price) == null ? void 0 : he.price),
          productDeliveryTime: (S = (I = (Ee = n.value) == null ? void 0 : Ee.deliveryInfo) == null ? void 0 : I.deliveryTime) == null ? void 0 : S.toString(),
          quantity: l.selected,
          ranking: (q = (F = n.value) == null ? void 0 : F.margin) == null ? void 0 : q.ranking,
          ratingAverage: (J = (j = r.value) == null ? void 0 : j.ratings) == null ? void 0 : J.average,
          shippingCostHomeDeliveryCharge: (C = (ie = n.value) == null ? void 0 : ie.deliveryCharges) == null ? void 0 : C.homeDeliveryCharge,
          shippingCostHomeDeliveryXlCharge: (D = (y = n.value) == null ? void 0 : y.deliveryCharges) == null ? void 0 : D.homeDeliveryXlCharge,
          shippingCostParcelLockerDeliveryCharge: (z = (K = n.value) == null ? void 0 : K.deliveryCharges) == null ? void 0 : z.parcelLockerDeliveryCharge,
          shippingCostParcelShopDeliveryCharge: (x = (Z = n.value) == null ? void 0 : Z.deliveryCharges) == null ? void 0 : x.parcelShopDeliveryCharge,
          status: "main-product",
          tradeType: c.value,
          type: s.value ? "v_pdp" : "p_pdp",
          variantAttributes: (V = n.value) == null ? void 0 : V.attributesCode,
          variantGroupId: i.currentVariantId,
          variantId: ((le = n.value) == null ? void 0 : le.erpNumber) === ((ue = r.value) == null ? void 0 : ue.erpNumber) || (Re = (Ae = n.value) == null ? void 0 : Ae.variantId) == null ? void 0 : Re.toString(),
          variantsAvailable: m(),
          variantsTotal: E(),
          wonCategoryPrimary: (rt = (Ge = r.value) == null ? void 0 : Ge.keyfacts) == null ? void 0 : rt.wonCategoryPrimary,
          wonCategoryPrimaryPath: (nn = (Gt = r.value) == null ? void 0 : Gt.keyfacts) == null ? void 0 : nn.wonCategoryPrimaryPath
        };
        return R(g)
      }),
      T = g => {
        var L;
        e[`unifiedDatalayer${t.country}`] && ((L = window.dataLayerService) == null || L.push(g))
      },
      h = g => {
        var k, W, Y, ee, X, re, se, de;
        let L, b;
        const N = (k = g == null ? void 0 : g.categories) == null ? void 0 : k[0];
        if (N != null && N.superCategories) {
          const Pe = [...N.superCategories.toReversed(), N];
          L = Pe.map(({
              name: we
            }) => we)
            .join("/"), b = Pe.map(({
              code: we
            }) => we)
            .join("/")
        }
        const B = {
          aov: g == null ? void 0 : g.aov,
          availability: void 0,
          brand: g == null ? void 0 : g.brand,
          categoryPrimary: L,
          categoryPrimaryPath: b,
          copyrightTax: g == null ? void 0 : g.copyrightTaxAmountInclVat,
          currency: lf[cf(t.locale)].currency,
          energyClass: (Y = (W = g == null ? void 0 : g.energyLabels) == null ? void 0 : W.flatMap(({
            classCode: Pe
          }) => Pe)) == null ? void 0 : Y.join(","),
          environmentTax: g == null ? void 0 : g.ecoTaxAmountInclVat,
          forwardingSurcharge: void 0,
          id: g == null ? void 0 : g.erpNumber,
          name: g == null ? void 0 : g.name,
          optionalParameters: f.value,
          parentId: g == null ? void 0 : g.productId,
          price: g == null ? void 0 : g.unitPrice,
          productDeliveryTime: (ee = g == null ? void 0 : g.deliveryTimeInDays) == null ? void 0 : ee.toString(),
          quantity: g == null ? void 0 : g.quantity,
          ranking: g == null ? void 0 : g.ranking,
          ratingAverage: void 0,
          shippingCostHomeDeliveryCharge: (X = g == null ? void 0 : g.deliveryCharges) == null ? void 0 : X.homeDeliveryCharge,
          shippingCostHomeDeliveryXlCharge: (re = g == null ? void 0 : g.deliveryCharges) == null ? void 0 : re.homeDeliveryXlCharge,
          shippingCostParcelLockerDeliveryCharge: (se = g == null ? void 0 : g.deliveryCharges) == null ? void 0 : se.parcelLockerDeliveryCharge,
          shippingCostParcelShopDeliveryCharge: (de = g == null ? void 0 : g.deliveryCharges) == null ? void 0 : de.parcelShopDeliveryCharge,
          status: "bundled-product",
          tradeType: void 0,
          type: g != null && g.variantGroupId ? "v_pdp" : "p_pdp",
          variantAttributes: g == null ? void 0 : g.attributesCode,
          variantGroupId: g == null ? void 0 : g.variantGroupId,
          variantId: g == null ? void 0 : g.productVariantId,
          variantsAvailable: void 0,
          variantsTotal: void 0,
          wonCategoryPrimary: g == null ? void 0 : g.wonCategoryPrimary,
          wonCategoryPrimaryPath: g == null ? void 0 : g.wonCategoryPrimaryPath
        };
        return R(B)
      },
      p = (g, L = {}) => {
        var N, B;
        const b = TS(e.branch, g, L);
        b.scenarioName === $e.PDP_Click ? (N = b.collections.products)
          .list ?? (N.list = [O.value]) : b.scenarioName === $e.PDP_Install_Calc_Link_Click || b.scenarioName.startsWith("PDP_") && ((B = b.collections.products)
            .list ?? (B.list = []), b.collections.products.list.push(O.value)), T(b)
      };
    return {
      current: O,
      track: p,
      trackClick: (g, L) => {
        p(g, {
          click: {
            linkName: L,
            linkType: L,
            linkURL: L
          },
          content: {
            contentID: L,
            contentPlaceholderID: L,
            contentType: L
          }
        })
      },
      trackPageload: () => {
        p($e.PDP_Pageload)
      },
      createTrackingProductFromCartItem: h
    }
  });
/*!
 * shared v9.14.5
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */
function CS(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack))
}
const Qi = typeof window < "u",
  en = (e, t = !1) => t ? Symbol.for(e) : Symbol(e),
  AS = (e, t, r) => RS({
    l: e,
    k: t,
    s: r
  }),
  RS = e => JSON.stringify(e)
  .replace(/\u2028/g, "\\u2028")
  .replace(/\u2029/g, "\\u2029")
  .replace(/\u0027/g, "\\u0027"),
  Qe = e => typeof e == "number" && isFinite(e),
  OS = e => $_(e) === "[object Date]",
  Qr = e => $_(e) === "[object RegExp]",
  Ca = e => ve(e) && Object.keys(e)
  .length === 0,
  vt = Object.assign,
  IS = Object.create,
  Fe = (e = null) => IS(e);
let pf;
const Sr = () => pf || (pf = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : Fe());

function mf(e) {
  return e.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
    .replace(/\//g, "&#x2F;")
    .replace(/=/g, "&#x3D;")
}

function gf(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}

function LS(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (n, s, i) => `${s}="${gf(i)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (n, s, i) => `${s}='${gf(i)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi, /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach(n => {
    e = e.replace(n, "$1javascript&#58;")
  }), e
}
const DS = Object.prototype.hasOwnProperty;

function Kt(e, t) {
  return DS.call(e, t)
}
const We = Array.isArray,
  Ve = e => typeof e == "function",
  oe = e => typeof e == "string",
  be = e => typeof e == "boolean",
  Le = e => e !== null && typeof e == "object",
  kS = e => Le(e) && Ve(e.then) && Ve(e.catch),
  G_ = Object.prototype.toString,
  $_ = e => G_.call(e),
  ve = e => {
    if (!Le(e)) return !1;
    const t = Object.getPrototypeOf(e);
    return t === null || t.constructor === Object
  },
  NS = e => e == null ? "" : We(e) || ve(e) && e.toString === G_ ? JSON.stringify(e, null, 2) : String(e);

function MS(e, t = "") {
  return e.reduce((r, n, s) => s === 0 ? r + n : r + t + n, "")
}

function Aa(e) {
  let t = e;
  return () => ++t
}
const vi = e => !Le(e) || We(e);

function Ri(e, t) {
  if (vi(e) || vi(t)) throw new Error("Invalid value");
  const r = [{
    src: e,
    des: t
  }];
  for (; r.length;) {
    const {
      src: n,
      des: s
    } = r.pop();
    Object.keys(n)
      .forEach(i => {
        i !== "__proto__" && (Le(n[i]) && !Le(s[i]) && (s[i] = Array.isArray(n[i]) ? [] : Fe()), vi(s[i]) || vi(n[i]) ? s[i] = n[i] : r.push({
          src: n[i],
          des: s[i]
        }))
      })
  }
}
/*!
 * message-compiler v9.14.5
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */
function xS(e, t, r) {
  return {
    line: e,
    column: t,
    offset: r
  }
}

function ea(e, t, r) {
  return {
    start: e,
    end: t
  }
}
const FS = /\{([0-9a-zA-Z]+)\}/g;

function W_(e, ...t) {
  return t.length === 1 && HS(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(FS, (r, n) => t.hasOwnProperty(n) ? t[n] : "")
}
const j_ = Object.assign,
  vf = e => typeof e == "string",
  HS = e => e !== null && typeof e == "object";

function K_(e, t = "") {
  return e.reduce((r, n, s) => s === 0 ? r + n : r + t + n, "")
}
const ec = {
    USE_MODULO_SYNTAX: 1,
    __EXTEND_POINT__: 2
  },
  BS = {
    [ec.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
  };

function VS(e, t, ...r) {
  const n = W_(BS[e], ...r || []),
    s = {
      message: String(n),
      code: e
    };
  return t && (s.location = t), s
}
const me = {
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
    UNHANDLED_CODEGEN_NODE_TYPE: 15,
    UNHANDLED_MINIFIER_NODE_TYPE: 16,
    __EXTEND_POINT__: 17
  },
  US = {
    [me.EXPECTED_TOKEN]: "Expected token: '{0}'",
    [me.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
    [me.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
    [me.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
    [me.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
    [me.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
    [me.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
    [me.EMPTY_PLACEHOLDER]: "Empty placeholder",
    [me.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
    [me.INVALID_LINKED_FORMAT]: "Invalid linked format",
    [me.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
    [me.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
    [me.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
    [me.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
    [me.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
    [me.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
  };

function ls(e, t, r = {}) {
  const {
    domain: n,
    messages: s,
    args: i
  } = r, a = W_((s || US)[e] || "", ...i || []), o = new SyntaxError(String(a));
  return o.code = e, t && (o.location = t), o.domain = n, o
}

function GS(e) {
  throw e
}
const gr = " ",
  $S = "\r",
  Tt = `
`,
  WS = "
",
  jS = "
";

function KS(e) {
  const t = e;
  let r = 0,
    n = 1,
    s = 1,
    i = 0;
  const a = g => t[g] === $S && t[g + 1] === Tt,
    o = g => t[g] === Tt,
    l = g => t[g] === jS,
    u = g => t[g] === WS,
    c = g => a(g) || o(g) || l(g) || u(g),
    f = () => r,
    d = () => n,
    _ = () => s,
    m = () => i,
    E = g => a(g) || l(g) || u(g) ? Tt : t[g],
    R = () => E(r),
    O = () => E(r + i);

  function T() {
    return i = 0, c(r) && (n++, s = 0), a(r) && r++, r++, s++, t[r]
  }

  function h() {
    return a(r + i) && i++, i++, t[r + i]
  }

  function p() {
    r = 0, n = 1, s = 1, i = 0
  }

  function v(g = 0) {
    i = g
  }

  function P() {
    const g = r + i;
    for (; g !== r;) T();
    i = 0
  }
  return {
    index: f,
    line: d,
    column: _,
    peekOffset: m,
    charAt: E,
    currentChar: R,
    currentPeek: O,
    next: T,
    peek: h,
    reset: p,
    resetPeek: v,
    skipToPeek: P
  }
}
const Ur = void 0,
  YS = ".",
  yf = "'",
  XS = "tokenizer";

function qS(e, t = {}) {
  const r = t.location !== !1,
    n = KS(e),
    s = () => n.index(),
    i = () => xS(n.line(), n.column(), n.index()),
    a = i(),
    o = s(),
    l = {
      currentType: 14,
      offset: o,
      startLoc: a,
      endLoc: a,
      lastType: 14,
      lastOffset: o,
      lastStartLoc: a,
      lastEndLoc: a,
      braceNest: 0,
      inLinked: !1,
      text: ""
    },
    u = () => l,
    {
      onError: c
    } = t;

  function f(C, y, D, ...K) {
    const z = u();
    if (y.column += D, y.offset += D, c) {
      const Z = r ? ea(z.startLoc, y) : null,
        x = ls(C, Z, {
          domain: XS,
          args: K
        });
      c(x)
    }
  }

  function d(C, y, D) {
    C.endLoc = i(), C.currentType = y;
    const K = {
      type: y
    };
    return r && (K.loc = ea(C.startLoc, C.endLoc)), D != null && (K.value = D), K
  }
  const _ = C => d(C, 14);

  function m(C, y) {
    return C.currentChar() === y ? (C.next(), y) : (f(me.EXPECTED_TOKEN, i(), 0, y), "")
  }

  function E(C) {
    let y = "";
    for (; C.currentPeek() === gr || C.currentPeek() === Tt;) y += C.currentPeek(), C.peek();
    return y
  }

  function R(C) {
    const y = E(C);
    return C.skipToPeek(), y
  }

  function O(C) {
    if (C === Ur) return !1;
    const y = C.charCodeAt(0);
    return y >= 97 && y <= 122 || y >= 65 && y <= 90 || y === 95
  }

  function T(C) {
    if (C === Ur) return !1;
    const y = C.charCodeAt(0);
    return y >= 48 && y <= 57
  }

  function h(C, y) {
    const {
      currentType: D
    } = y;
    if (D !== 2) return !1;
    E(C);
    const K = O(C.currentPeek());
    return C.resetPeek(), K
  }

  function p(C, y) {
    const {
      currentType: D
    } = y;
    if (D !== 2) return !1;
    E(C);
    const K = C.currentPeek() === "-" ? C.peek() : C.currentPeek(),
      z = T(K);
    return C.resetPeek(), z
  }

  function v(C, y) {
    const {
      currentType: D
    } = y;
    if (D !== 2) return !1;
    E(C);
    const K = C.currentPeek() === yf;
    return C.resetPeek(), K
  }

  function P(C, y) {
    const {
      currentType: D
    } = y;
    if (D !== 8) return !1;
    E(C);
    const K = C.currentPeek() === ".";
    return C.resetPeek(), K
  }

  function g(C, y) {
    const {
      currentType: D
    } = y;
    if (D !== 9) return !1;
    E(C);
    const K = O(C.currentPeek());
    return C.resetPeek(), K
  }

  function L(C, y) {
    const {
      currentType: D
    } = y;
    if (!(D === 8 || D === 12)) return !1;
    E(C);
    const K = C.currentPeek() === ":";
    return C.resetPeek(), K
  }

  function b(C, y) {
    const {
      currentType: D
    } = y;
    if (D !== 10) return !1;
    const K = () => {
        const Z = C.currentPeek();
        return Z === "{" ? O(C.peek()) : Z === "@" || Z === "%" || Z === "|" || Z === ":" || Z === "." || Z === gr || !Z ? !1 : Z === Tt ? (C.peek(), K()) : k(C, !1)
      },
      z = K();
    return C.resetPeek(), z
  }

  function N(C) {
    E(C);
    const y = C.currentPeek() === "|";
    return C.resetPeek(), y
  }

  function B(C) {
    const y = E(C),
      D = C.currentPeek() === "%" && C.peek() === "{";
    return C.resetPeek(), {
      isModulo: D,
      hasSpace: y.length > 0
    }
  }

  function k(C, y = !0) {
    const D = (z = !1, Z = "", x = !1) => {
        const V = C.currentPeek();
        return V === "{" ? Z === "%" ? !1 : z : V === "@" || !V ? Z === "%" ? !0 : z : V === "%" ? (C.peek(), D(z, "%", !0)) : V === "|" ? Z === "%" || x ? !0 : !(Z === gr || Z === Tt) : V === gr ? (C.peek(), D(!0, gr, x)) : V === Tt ? (C.peek(), D(!0, Tt, x)) : !0
      },
      K = D();
    return y && C.resetPeek(), K
  }

  function W(C, y) {
    const D = C.currentChar();
    return D === Ur ? Ur : y(D) ? (C.next(), D) : null
  }

  function Y(C) {
    const y = C.charCodeAt(0);
    return y >= 97 && y <= 122 || y >= 65 && y <= 90 || y >= 48 && y <= 57 || y === 95 || y === 36
  }

  function ee(C) {
    return W(C, Y)
  }

  function X(C) {
    const y = C.charCodeAt(0);
    return y >= 97 && y <= 122 || y >= 65 && y <= 90 || y >= 48 && y <= 57 || y === 95 || y === 36 || y === 45
  }

  function re(C) {
    return W(C, X)
  }

  function se(C) {
    const y = C.charCodeAt(0);
    return y >= 48 && y <= 57
  }

  function de(C) {
    return W(C, se)
  }

  function Pe(C) {
    const y = C.charCodeAt(0);
    return y >= 48 && y <= 57 || y >= 65 && y <= 70 || y >= 97 && y <= 102
  }

  function we(C) {
    return W(C, Pe)
  }

  function ye(C) {
    let y = "",
      D = "";
    for (; y = de(C);) D += y;
    return D
  }

  function Ye(C) {
    R(C);
    const y = C.currentChar();
    return y !== "%" && f(me.EXPECTED_TOKEN, i(), 0, y), C.next(), "%"
  }

  function He(C) {
    let y = "";
    for (;;) {
      const D = C.currentChar();
      if (D === "{" || D === "}" || D === "@" || D === "|" || !D) break;
      if (D === "%")
        if (k(C)) y += D, C.next();
        else break;
      else if (D === gr || D === Tt)
        if (k(C)) y += D, C.next();
        else {
          if (N(C)) break;
          y += D, C.next()
        }
      else y += D, C.next()
    }
    return y
  }

  function De(C) {
    R(C);
    let y = "",
      D = "";
    for (; y = re(C);) D += y;
    return C.currentChar() === Ur && f(me.UNTERMINATED_CLOSING_BRACE, i(), 0), D
  }

  function ke(C) {
    R(C);
    let y = "";
    return C.currentChar() === "-" ? (C.next(), y += `-${ye(C)}`) : y += ye(C), C.currentChar() === Ur && f(me.UNTERMINATED_CLOSING_BRACE, i(), 0), y
  }

  function H(C) {
    return C !== yf && C !== Tt
  }

  function ne(C) {
    R(C), m(C, "'");
    let y = "",
      D = "";
    for (; y = W(C, H);) y === "\\" ? D += Q(C) : D += y;
    const K = C.currentChar();
    return K === Tt || K === Ur ? (f(me.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, i(), 0), K === Tt && (C.next(), m(C, "'")), D) : (m(C, "'"), D)
  }

  function Q(C) {
    const y = C.currentChar();
    switch (y) {
      case "\\":
      case "'":
        return C.next(), `\\${y}`;
      case "u":
        return ae(C, y, 4);
      case "U":
        return ae(C, y, 6);
      default:
        return f(me.UNKNOWN_ESCAPE_SEQUENCE, i(), 0, y), ""
    }
  }

  function ae(C, y, D) {
    m(C, y);
    let K = "";
    for (let z = 0; z < D; z++) {
      const Z = we(C);
      if (!Z) {
        f(me.INVALID_UNICODE_ESCAPE_SEQUENCE, i(), 0, `\\${y}${K}${C.currentChar()}`);
        break
      }
      K += Z
    }
    return `\\${y}${K}`
  }

  function he(C) {
    return C !== "{" && C !== "}" && C !== gr && C !== Tt
  }

  function Ee(C) {
    R(C);
    let y = "",
      D = "";
    for (; y = W(C, he);) D += y;
    return D
  }

  function I(C) {
    let y = "",
      D = "";
    for (; y = ee(C);) D += y;
    return D
  }

  function S(C) {
    const y = D => {
      const K = C.currentChar();
      return K === "{" || K === "%" || K === "@" || K === "|" || K === "(" || K === ")" || !K || K === gr ? D : (D += K, C.next(), y(D))
    };
    return y("")
  }

  function F(C) {
    R(C);
    const y = m(C, "|");
    return R(C), y
  }

  function q(C, y) {
    let D = null;
    switch (C.currentChar()) {
      case "{":
        return y.braceNest >= 1 && f(me.NOT_ALLOW_NEST_PLACEHOLDER, i(), 0), C.next(), D = d(y, 2, "{"), R(C), y.braceNest++, D;
      case "}":
        return y.braceNest > 0 && y.currentType === 2 && f(me.EMPTY_PLACEHOLDER, i(), 0), C.next(), D = d(y, 3, "}"), y.braceNest--, y.braceNest > 0 && R(C), y.inLinked && y.braceNest === 0 && (y.inLinked = !1), D;
      case "@":
        return y.braceNest > 0 && f(me.UNTERMINATED_CLOSING_BRACE, i(), 0), D = j(C, y) || _(y), y.braceNest = 0, D;
      default: {
        let z = !0,
          Z = !0,
          x = !0;
        if (N(C)) return y.braceNest > 0 && f(me.UNTERMINATED_CLOSING_BRACE, i(), 0), D = d(y, 1, F(C)), y.braceNest = 0, y.inLinked = !1, D;
        if (y.braceNest > 0 && (y.currentType === 5 || y.currentType === 6 || y.currentType === 7)) return f(me.UNTERMINATED_CLOSING_BRACE, i(), 0), y.braceNest = 0, J(C, y);
        if (z = h(C, y)) return D = d(y, 5, De(C)), R(C), D;
        if (Z = p(C, y)) return D = d(y, 6, ke(C)), R(C), D;
        if (x = v(C, y)) return D = d(y, 7, ne(C)), R(C), D;
        if (!z && !Z && !x) return D = d(y, 13, Ee(C)), f(me.INVALID_TOKEN_IN_PLACEHOLDER, i(), 0, D.value), R(C), D;
        break
      }
    }
    return D
  }

  function j(C, y) {
    const {
      currentType: D
    } = y;
    let K = null;
    const z = C.currentChar();
    switch ((D === 8 || D === 9 || D === 12 || D === 10) && (z === Tt || z === gr) && f(me.INVALID_LINKED_FORMAT, i(), 0), z) {
      case "@":
        return C.next(), K = d(y, 8, "@"), y.inLinked = !0, K;
      case ".":
        return R(C), C.next(), d(y, 9, ".");
      case ":":
        return R(C), C.next(), d(y, 10, ":");
      default:
        return N(C) ? (K = d(y, 1, F(C)), y.braceNest = 0, y.inLinked = !1, K) : P(C, y) || L(C, y) ? (R(C), j(C, y)) : g(C, y) ? (R(C), d(y, 12, I(C))) : b(C, y) ? (R(C), z === "{" ? q(C, y) || K : d(y, 11, S(C))) : (D === 8 && f(me.INVALID_LINKED_FORMAT, i(), 0), y.braceNest = 0, y.inLinked = !1, J(C, y))
    }
  }

  function J(C, y) {
    let D = {
      type: 14
    };
    if (y.braceNest > 0) return q(C, y) || _(y);
    if (y.inLinked) return j(C, y) || _(y);
    switch (C.currentChar()) {
      case "{":
        return q(C, y) || _(y);
      case "}":
        return f(me.UNBALANCED_CLOSING_BRACE, i(), 0), C.next(), d(y, 3, "}");
      case "@":
        return j(C, y) || _(y);
      default: {
        if (N(C)) return D = d(y, 1, F(C)), y.braceNest = 0, y.inLinked = !1, D;
        const {
          isModulo: z,
          hasSpace: Z
        } = B(C);
        if (z) return Z ? d(y, 0, He(C)) : d(y, 4, Ye(C));
        if (k(C)) return d(y, 0, He(C));
        break
      }
    }
    return D
  }

  function ie() {
    const {
      currentType: C,
      offset: y,
      startLoc: D,
      endLoc: K
    } = l;
    return l.lastType = C, l.lastOffset = y, l.lastStartLoc = D, l.lastEndLoc = K, l.offset = s(), l.startLoc = i(), n.currentChar() === Ur ? d(l, 14) : J(n, l)
  }
  return {
    nextToken: ie,
    currentOffset: s,
    currentPosition: i,
    context: u
  }
}
const ZS = "parser",
  zS = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;

function JS(e, t, r) {
  switch (e) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const n = parseInt(t || r, 16);
      return n <= 55295 || n >= 57344 ? String.fromCodePoint(n) : "�"
    }
  }
}

function QS(e = {}) {
  const t = e.location !== !1,
    {
      onError: r,
      onWarn: n
    } = e;

  function s(h, p, v, P, ...g) {
    const L = h.currentPosition();
    if (L.offset += P, L.column += P, r) {
      const b = t ? ea(v, L) : null,
        N = ls(p, b, {
          domain: ZS,
          args: g
        });
      r(N)
    }
  }

  function i(h, p, v, P, ...g) {
    const L = h.currentPosition();
    if (L.offset += P, L.column += P, n) {
      const b = t ? ea(v, L) : null;
      n(VS(p, b, g))
    }
  }

  function a(h, p, v) {
    const P = {
      type: h
    };
    return t && (P.start = p, P.end = p, P.loc = {
      start: v,
      end: v
    }), P
  }

  function o(h, p, v, P) {
    t && (h.end = p, h.loc && (h.loc.end = v))
  }

  function l(h, p) {
    const v = h.context(),
      P = a(3, v.offset, v.startLoc);
    return P.value = p, o(P, h.currentOffset(), h.currentPosition()), P
  }

  function u(h, p) {
    const v = h.context(),
      {
        lastOffset: P,
        lastStartLoc: g
      } = v,
      L = a(5, P, g);
    return L.index = parseInt(p, 10), h.nextToken(), o(L, h.currentOffset(), h.currentPosition()), L
  }

  function c(h, p, v) {
    const P = h.context(),
      {
        lastOffset: g,
        lastStartLoc: L
      } = P,
      b = a(4, g, L);
    return b.key = p, v === !0 && (b.modulo = !0), h.nextToken(), o(b, h.currentOffset(), h.currentPosition()), b
  }

  function f(h, p) {
    const v = h.context(),
      {
        lastOffset: P,
        lastStartLoc: g
      } = v,
      L = a(9, P, g);
    return L.value = p.replace(zS, JS), h.nextToken(), o(L, h.currentOffset(), h.currentPosition()), L
  }

  function d(h) {
    const p = h.nextToken(),
      v = h.context(),
      {
        lastOffset: P,
        lastStartLoc: g
      } = v,
      L = a(8, P, g);
    return p.type !== 12 ? (s(h, me.UNEXPECTED_EMPTY_LINKED_MODIFIER, v.lastStartLoc, 0), L.value = "", o(L, P, g), {
      nextConsumeToken: p,
      node: L
    }) : (p.value == null && s(h, me.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Wt(p)), L.value = p.value || "", o(L, h.currentOffset(), h.currentPosition()), {
      node: L
    })
  }

  function _(h, p) {
    const v = h.context(),
      P = a(7, v.offset, v.startLoc);
    return P.value = p, o(P, h.currentOffset(), h.currentPosition()), P
  }

  function m(h) {
    const p = h.context(),
      v = a(6, p.offset, p.startLoc);
    let P = h.nextToken();
    if (P.type === 9) {
      const g = d(h);
      v.modifier = g.node, P = g.nextConsumeToken || h.nextToken()
    }
    switch (P.type !== 10 && s(h, me.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Wt(P)), P = h.nextToken(), P.type === 2 && (P = h.nextToken()), P.type) {
      case 11:
        P.value == null && s(h, me.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Wt(P)), v.key = _(h, P.value || "");
        break;
      case 5:
        P.value == null && s(h, me.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Wt(P)), v.key = c(h, P.value || "");
        break;
      case 6:
        P.value == null && s(h, me.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Wt(P)), v.key = u(h, P.value || "");
        break;
      case 7:
        P.value == null && s(h, me.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Wt(P)), v.key = f(h, P.value || "");
        break;
      default: {
        s(h, me.UNEXPECTED_EMPTY_LINKED_KEY, p.lastStartLoc, 0);
        const g = h.context(),
          L = a(7, g.offset, g.startLoc);
        return L.value = "", o(L, g.offset, g.startLoc), v.key = L, o(v, g.offset, g.startLoc), {
          nextConsumeToken: P,
          node: v
        }
      }
    }
    return o(v, h.currentOffset(), h.currentPosition()), {
      node: v
    }
  }

  function E(h) {
    const p = h.context(),
      v = p.currentType === 1 ? h.currentOffset() : p.offset,
      P = p.currentType === 1 ? p.endLoc : p.startLoc,
      g = a(2, v, P);
    g.items = [];
    let L = null,
      b = null;
    do {
      const k = L || h.nextToken();
      switch (L = null, k.type) {
        case 0:
          k.value == null && s(h, me.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Wt(k)), g.items.push(l(h, k.value || ""));
          break;
        case 6:
          k.value == null && s(h, me.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Wt(k)), g.items.push(u(h, k.value || ""));
          break;
        case 4:
          b = !0;
          break;
        case 5:
          k.value == null && s(h, me.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Wt(k)), g.items.push(c(h, k.value || "", !!b)), b && (i(h, ec.USE_MODULO_SYNTAX, p.lastStartLoc, 0, Wt(k)), b = null);
          break;
        case 7:
          k.value == null && s(h, me.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Wt(k)), g.items.push(f(h, k.value || ""));
          break;
        case 8: {
          const W = m(h);
          g.items.push(W.node), L = W.nextConsumeToken || null;
          break
        }
      }
    } while (p.currentType !== 14 && p.currentType !== 1);
    const N = p.currentType === 1 ? p.lastOffset : h.currentOffset(),
      B = p.currentType === 1 ? p.lastEndLoc : h.currentPosition();
    return o(g, N, B), g
  }

  function R(h, p, v, P) {
    const g = h.context();
    let L = P.items.length === 0;
    const b = a(1, p, v);
    b.cases = [], b.cases.push(P);
    do {
      const N = E(h);
      L || (L = N.items.length === 0), b.cases.push(N)
    } while (g.currentType !== 14);
    return L && s(h, me.MUST_HAVE_MESSAGES_IN_PLURAL, v, 0), o(b, h.currentOffset(), h.currentPosition()), b
  }

  function O(h) {
    const p = h.context(),
      {
        offset: v,
        startLoc: P
      } = p,
      g = E(h);
    return p.currentType === 14 ? g : R(h, v, P, g)
  }

  function T(h) {
    const p = qS(h, j_({}, e)),
      v = p.context(),
      P = a(0, v.offset, v.startLoc);
    return t && P.loc && (P.loc.source = h), P.body = O(p), e.onCacheKey && (P.cacheKey = e.onCacheKey(h)), v.currentType !== 14 && s(p, me.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, h[v.offset] || ""), o(P, p.currentOffset(), p.currentPosition()), P
  }
  return {
    parse: T
  }
}

function Wt(e) {
  if (e.type === 14) return "EOF";
  const t = (e.value || "")
    .replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t
}

function eP(e, t = {}) {
  const r = {
    ast: e,
    helpers: new Set
  };
  return {
    context: () => r,
    helper: i => (r.helpers.add(i), i)
  }
}

function Ef(e, t) {
  for (let r = 0; r < e.length; r++) tc(e[r], t)
}

function tc(e, t) {
  switch (e.type) {
    case 1:
      Ef(e.cases, t), t.helper("plural");
      break;
    case 2:
      Ef(e.items, t);
      break;
    case 6: {
      tc(e.key, t), t.helper("linked"), t.helper("type");
      break
    }
    case 5:
      t.helper("interpolate"), t.helper("list");
      break;
    case 4:
      t.helper("interpolate"), t.helper("named");
      break
  }
}

function tP(e, t = {}) {
  const r = eP(e);
  r.helper("normalize"), e.body && tc(e.body, r);
  const n = r.context();
  e.helpers = Array.from(n.helpers)
}

function rP(e) {
  const t = e.body;
  return t.type === 2 ? wf(t) : t.cases.forEach(r => wf(r)), e
}

function wf(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value)
  } else {
    const t = [];
    for (let r = 0; r < e.items.length; r++) {
      const n = e.items[r];
      if (!(n.type === 3 || n.type === 9) || n.value == null) break;
      t.push(n.value)
    }
    if (t.length === e.items.length) {
      e.static = K_(t);
      for (let r = 0; r < e.items.length; r++) {
        const n = e.items[r];
        (n.type === 3 || n.type === 9) && delete n.value
      }
    }
  }
}
const nP = "minifier";

function Hn(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Hn(t.body), t.b = t.body, delete t.body;
      break
    }
    case 1: {
      const t = e,
        r = t.cases;
      for (let n = 0; n < r.length; n++) Hn(r[n]);
      t.c = r, delete t.cases;
      break
    }
    case 2: {
      const t = e,
        r = t.items;
      for (let n = 0; n < r.length; n++) Hn(r[n]);
      t.i = r, delete t.items, t.static && (t.s = t.static, delete t.static);
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
      Hn(t.key), t.k = t.key, delete t.key, t.modifier && (Hn(t.modifier), t.m = t.modifier, delete t.modifier);
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
    default:
      throw ls(me.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: nP,
        args: [e.type]
      })
  }
  delete e.type
}
const sP = "parser";

function iP(e, t) {
  const {
    filename: r,
    breakLineCode: n,
    needIndent: s
  } = t, i = t.location !== !1, a = {
    filename: r,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: n,
    needIndent: s,
    indentLevel: 0
  };
  i && e.loc && (a.source = e.loc.source);
  const o = () => a;

  function l(E, R) {
    a.code += E
  }

  function u(E, R = !0) {
    const O = R ? n : "";
    l(s ? O + "  ".repeat(E) : O)
  }

  function c(E = !0) {
    const R = ++a.indentLevel;
    E && u(R)
  }

  function f(E = !0) {
    const R = --a.indentLevel;
    E && u(R)
  }

  function d() {
    u(a.indentLevel)
  }
  return {
    context: o,
    push: l,
    indent: c,
    deindent: f,
    newline: d,
    helper: E => `_${E}`,
    needIndent: () => a.needIndent
  }
}

function aP(e, t) {
  const {
    helper: r
  } = e;
  e.push(`${r("linked")}(`), ts(e, t.key), t.modifier ? (e.push(", "), ts(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")")
}

function oP(e, t) {
  const {
    helper: r,
    needIndent: n
  } = e;
  e.push(`${r("normalize")}([`), e.indent(n());
  const s = t.items.length;
  for (let i = 0; i < s && (ts(e, t.items[i]), i !== s - 1); i++) e.push(", ");
  e.deindent(n()), e.push("])")
}

function lP(e, t) {
  const {
    helper: r,
    needIndent: n
  } = e;
  if (t.cases.length > 1) {
    e.push(`${r("plural")}([`), e.indent(n());
    const s = t.cases.length;
    for (let i = 0; i < s && (ts(e, t.cases[i]), i !== s - 1); i++) e.push(", ");
    e.deindent(n()), e.push("])")
  }
}

function cP(e, t) {
  t.body ? ts(e, t.body) : e.push("null")
}

function ts(e, t) {
  const {
    helper: r
  } = e;
  switch (t.type) {
    case 0:
      cP(e, t);
      break;
    case 1:
      lP(e, t);
      break;
    case 2:
      oP(e, t);
      break;
    case 6:
      aP(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${r("interpolate")}(${r("list")}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${r("interpolate")}(${r("named")}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
    default:
      throw ls(me.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: sP,
        args: [t.type]
      })
  }
}
const uP = (e, t = {}) => {
  const r = vf(t.mode) ? t.mode : "normal",
    n = vf(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const s = t.breakLineCode != null ? t.breakLineCode : r === "arrow" ? ";" : `
`,
    i = t.needIndent ? t.needIndent : r !== "arrow",
    a = e.helpers || [],
    o = iP(e, {
      filename: n,
      breakLineCode: s,
      needIndent: i
    });
  o.push(r === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), o.indent(i), a.length > 0 && (o.push(`const { ${K_(a.map(c=>`${c}: _${c}`),", ")} } = ctx`), o.newline()), o.push("return "), ts(o, e), o.deindent(i), o.push("}"), delete e.helpers;
  const {
    code: l,
    map: u
  } = o.context();
  return {
    ast: e,
    code: l,
    map: u ? u.toJSON() : void 0
  }
};

function fP(e, t = {}) {
  const r = j_({}, t),
    n = !!r.jit,
    s = !!r.minify,
    i = r.optimize == null ? !0 : r.optimize,
    o = QS(r)
    .parse(e);
  return n ? (i && rP(o), s && Hn(o), {
    ast: o,
    code: ""
  }) : (tP(o, r), uP(o, r))
}
/*!
 * core-base v9.14.5
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */
function dP() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Sr()
    .__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Sr()
    .__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Sr()
    .__INTLIFY_DROP_MESSAGE_COMPILER__ = !1)
}

function ur(e) {
  return Le(e) && rc(e) === 0 && (Kt(e, "b") || Kt(e, "body"))
}
const Y_ = ["b", "body"];

function hP(e) {
  return tn(e, Y_)
}
const X_ = ["c", "cases"];

function _P(e) {
  return tn(e, X_, [])
}
const q_ = ["s", "static"];

function pP(e) {
  return tn(e, q_)
}
const Z_ = ["i", "items"];

function mP(e) {
  return tn(e, Z_, [])
}
const z_ = ["t", "type"];

function rc(e) {
  return tn(e, z_)
}
const J_ = ["v", "value"];

function yi(e, t) {
  const r = tn(e, J_);
  if (r != null) return r;
  throw Gs(t)
}
const Q_ = ["m", "modifier"];

function gP(e) {
  return tn(e, Q_)
}
const ep = ["k", "key"];

function vP(e) {
  const t = tn(e, ep);
  if (t) return t;
  throw Gs(6)
}

function tn(e, t, r) {
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (Kt(e, s) && e[s] != null) return e[s]
  }
  return r
}
const tp = [...Y_, ...X_, ...q_, ...Z_, ...ep, ...Q_, ...J_, ...z_];

function Gs(e) {
  return new Error(`unhandled node type: ${e}`)
}
const rn = [];
rn[0] = {
  w: [0],
  i: [3, 0],
  "[": [4],
  o: [7]
};
rn[1] = {
  w: [1],
  ".": [2],
  "[": [4],
  o: [7]
};
rn[2] = {
  w: [2],
  i: [3, 0],
  0: [3, 0]
};
rn[3] = {
  i: [3, 0],
  0: [3, 0],
  w: [1, 1],
  ".": [2, 1],
  "[": [4, 1],
  o: [7, 1]
};
rn[4] = {
  "'": [5, 0],
  '"': [6, 0],
  "[": [4, 2],
  "]": [1, 3],
  o: 8,
  l: [4, 0]
};
rn[5] = {
  "'": [4, 0],
  o: 8,
  l: [5, 0]
};
rn[6] = {
  '"': [4, 0],
  o: 8,
  l: [6, 0]
};
const yP = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

function EP(e) {
  return yP.test(e)
}

function wP(e) {
  const t = e.charCodeAt(0),
    r = e.charCodeAt(e.length - 1);
  return t === r && (t === 34 || t === 39) ? e.slice(1, -1) : e
}

function bP(e) {
  if (e == null) return "o";
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

function TP(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : EP(t) ? wP(t) : "*" + t
}

function SP(e) {
  const t = [];
  let r = -1,
    n = 0,
    s = 0,
    i, a, o, l, u, c, f;
  const d = [];
  d[0] = () => {
    a === void 0 ? a = o : a += o
  }, d[1] = () => {
    a !== void 0 && (t.push(a), a = void 0)
  }, d[2] = () => {
    d[0](), s++
  }, d[3] = () => {
    if (s > 0) s--, n = 4, d[0]();
    else {
      if (s = 0, a === void 0 || (a = TP(a), a === !1)) return !1;
      d[1]()
    }
  };

  function _() {
    const m = e[r + 1];
    if (n === 5 && m === "'" || n === 6 && m === '"') return r++, o = "\\" + m, d[0](), !0
  }
  for (; n !== null;)
    if (r++, i = e[r], !(i === "\\" && _())) {
      if (l = bP(i), f = rn[n], u = f[l] || f.l || 8, u === 8 || (n = u[0], u[1] !== void 0 && (c = d[u[1]], c && (o = i, c() === !1)))) return;
      if (n === 7) return t
    }
}
const bf = new Map;

function PP(e, t) {
  return Le(e) ? e[t] : null
}

function CP(e, t) {
  if (!Le(e)) return null;
  let r = bf.get(t);
  if (r || (r = SP(t), r && bf.set(t, r)), !r) return null;
  const n = r.length;
  let s = e,
    i = 0;
  for (; i < n;) {
    const a = r[i];
    if (tp.includes(a) && ur(s)) return null;
    const o = s[a];
    if (o === void 0 || Ve(s)) return null;
    s = o, i++
  }
  return s
}
const AP = e => e,
  RP = e => "",
  OP = "text",
  IP = e => e.length === 0 ? "" : MS(e),
  LP = NS;

function Tf(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
}

function DP(e) {
  const t = Qe(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Qe(e.named.count) || Qe(e.named.n)) ? Qe(e.named.count) ? e.named.count : Qe(e.named.n) ? e.named.n : t : t
}

function kP(e, t) {
  t.count || (t.count = e), t.n || (t.n = e)
}

function NP(e = {}) {
  const t = e.locale,
    r = DP(e),
    n = Le(e.pluralRules) && oe(t) && Ve(e.pluralRules[t]) ? e.pluralRules[t] : Tf,
    s = Le(e.pluralRules) && oe(t) && Ve(e.pluralRules[t]) ? Tf : void 0,
    i = O => O[n(r, O.length, s)],
    a = e.list || [],
    o = O => a[O],
    l = e.named || Fe();
  Qe(e.pluralIndex) && kP(r, l);
  const u = O => l[O];

  function c(O) {
    const T = Ve(e.messages) ? e.messages(O) : Le(e.messages) ? e.messages[O] : !1;
    return T || (e.parent ? e.parent.message(O) : RP)
  }
  const f = O => e.modifiers ? e.modifiers[O] : AP,
    d = ve(e.processor) && Ve(e.processor.normalize) ? e.processor.normalize : IP,
    _ = ve(e.processor) && Ve(e.processor.interpolate) ? e.processor.interpolate : LP,
    m = ve(e.processor) && oe(e.processor.type) ? e.processor.type : OP,
    R = {
      list: o,
      named: u,
      plural: i,
      linked: (O, ...T) => {
        const [h, p] = T;
        let v = "text",
          P = "";
        T.length === 1 ? Le(h) ? (P = h.modifier || P, v = h.type || v) : oe(h) && (P = h || P) : T.length === 2 && (oe(h) && (P = h || P), oe(p) && (v = p || v));
        const g = c(O)(R),
          L = v === "vnode" && We(g) && P ? g[0] : g;
        return P ? f(P)(L, v) : L
      },
      message: c,
      type: m,
      interpolate: _,
      normalize: d,
      values: vt(Fe(), a, l)
    };
  return R
}
let $s = null;

function MP(e) {
  $s = e
}

function xP(e, t, r) {
  $s && $s.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: r
  })
}
const FP = HP("function:translate");

function HP(e) {
  return t => $s && $s.emit(e, t)
}
const BP = ec.__EXTEND_POINT__,
  dn = Aa(BP),
  VP = {
    FALLBACK_TO_TRANSLATE: dn(),
    CANNOT_FORMAT_NUMBER: dn(),
    FALLBACK_TO_NUMBER_FORMAT: dn(),
    CANNOT_FORMAT_DATE: dn(),
    FALLBACK_TO_DATE_FORMAT: dn(),
    EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: dn(),
    __EXTEND_POINT__: dn()
  },
  rp = me.__EXTEND_POINT__,
  hn = Aa(rp),
  Yt = {
    INVALID_ARGUMENT: rp,
    INVALID_DATE_ARGUMENT: hn(),
    INVALID_ISO_DATE_ARGUMENT: hn(),
    NOT_SUPPORT_NON_STRING_MESSAGE: hn(),
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: hn(),
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: hn(),
    NOT_SUPPORT_LOCALE_TYPE: hn(),
    __EXTEND_POINT__: hn()
  };

function cr(e) {
  return ls(e, null, void 0)
}

function nc(e, t) {
  return t.locale != null ? Sf(t.locale) : Sf(e.locale)
}
let go;

function Sf(e) {
  if (oe(e)) return e;
  if (Ve(e)) {
    if (e.resolvedOnce && go != null) return go;
    if (e.constructor.name === "Function") {
      const t = e();
      if (kS(t)) throw cr(Yt.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return go = t
    } else throw cr(Yt.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)
  } else throw cr(Yt.NOT_SUPPORT_LOCALE_TYPE)
}

function UP(e, t, r) {
  return [...new Set([r, ...We(t) ? t : Le(t) ? Object.keys(t) : oe(t) ? [t] : [r]])]
}

function np(e, t, r) {
  const n = oe(r) ? r : rs,
    s = e;
  s.__localeChainCache || (s.__localeChainCache = new Map);
  let i = s.__localeChainCache.get(n);
  if (!i) {
    i = [];
    let a = [r];
    for (; We(a);) a = Pf(i, a, t);
    const o = We(t) || !ve(t) ? t : t.default ? t.default : null;
    a = oe(o) ? [o] : o, We(a) && Pf(i, a, !1), s.__localeChainCache.set(n, i)
  }
  return i
}

function Pf(e, t, r) {
  let n = !0;
  for (let s = 0; s < t.length && be(n); s++) {
    const i = t[s];
    oe(i) && (n = GP(e, t[s], r))
  }
  return n
}

function GP(e, t, r) {
  let n;
  const s = t.split("-");
  do {
    const i = s.join("-");
    n = $P(e, i, r), s.splice(-1, 1)
  } while (s.length && n === !0);
  return n
}

function $P(e, t, r) {
  let n = !1;
  if (!e.includes(t) && (n = !0, t)) {
    n = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (We(r) || ve(r)) && r[s] && (n = r[s])
  }
  return n
}
const WP = "9.14.5",
  Ra = -1,
  rs = "en-US",
  Cf = "",
  Af = e => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;

function jP() {
  return {
    upper: (e, t) => t === "text" && oe(e) ? e.toUpperCase() : t === "vnode" && Le(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && oe(e) ? e.toLowerCase() : t === "vnode" && Le(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && oe(e) ? Af(e) : t === "vnode" && Le(e) && "__v_isVNode" in e ? Af(e.children) : e
  }
}
let sp;

function Rf(e) {
  sp = e
}
let ip;

function KP(e) {
  ip = e
}
let ap;

function YP(e) {
  ap = e
}
let op = null;
const XP = e => {
    op = e
  },
  qP = () => op;
let lp = null;
const Of = e => {
    lp = e
  },
  ZP = () => lp;
let If = 0;

function zP(e = {}) {
  const t = Ve(e.onWarn) ? e.onWarn : CS,
    r = oe(e.version) ? e.version : WP,
    n = oe(e.locale) || Ve(e.locale) ? e.locale : rs,
    s = Ve(n) ? rs : n,
    i = We(e.fallbackLocale) || ve(e.fallbackLocale) || oe(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s,
    a = ve(e.messages) ? e.messages : vo(s),
    o = ve(e.datetimeFormats) ? e.datetimeFormats : vo(s),
    l = ve(e.numberFormats) ? e.numberFormats : vo(s),
    u = vt(Fe(), e.modifiers, jP()),
    c = e.pluralRules || Fe(),
    f = Ve(e.missing) ? e.missing : null,
    d = be(e.missingWarn) || Qr(e.missingWarn) ? e.missingWarn : !0,
    _ = be(e.fallbackWarn) || Qr(e.fallbackWarn) ? e.fallbackWarn : !0,
    m = !!e.fallbackFormat,
    E = !!e.unresolving,
    R = Ve(e.postTranslation) ? e.postTranslation : null,
    O = ve(e.processor) ? e.processor : null,
    T = be(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    h = !!e.escapeParameter,
    p = Ve(e.messageCompiler) ? e.messageCompiler : sp,
    v = Ve(e.messageResolver) ? e.messageResolver : ip || PP,
    P = Ve(e.localeFallbacker) ? e.localeFallbacker : ap || UP,
    g = Le(e.fallbackContext) ? e.fallbackContext : void 0,
    L = e,
    b = Le(L.__datetimeFormatters) ? L.__datetimeFormatters : new Map,
    N = Le(L.__numberFormatters) ? L.__numberFormatters : new Map,
    B = Le(L.__meta) ? L.__meta : {};
  If++;
  const k = {
    version: r,
    cid: If,
    locale: n,
    fallbackLocale: i,
    messages: a,
    modifiers: u,
    pluralRules: c,
    missing: f,
    missingWarn: d,
    fallbackWarn: _,
    fallbackFormat: m,
    unresolving: E,
    postTranslation: R,
    processor: O,
    warnHtmlMessage: T,
    escapeParameter: h,
    messageCompiler: p,
    messageResolver: v,
    localeFallbacker: P,
    fallbackContext: g,
    onWarn: t,
    __meta: B
  };
  return k.datetimeFormats = o, k.numberFormats = l, k.__datetimeFormatters = b, k.__numberFormatters = N, __INTLIFY_PROD_DEVTOOLS__ && xP(k, r, B), k
}
const vo = e => ({
  [e]: Fe()
});

function sc(e, t, r, n, s) {
  const {
    missing: i,
    onWarn: a
  } = e;
  if (i !== null) {
    const o = i(e, r, t, s);
    return oe(o) ? o : t
  } else return t
}

function ys(e, t, r) {
  const n = e;
  n.__localeChainCache = new Map, e.localeFallbacker(e, r, t)
}

function JP(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0]
}

function QP(e, t) {
  const r = t.indexOf(e);
  if (r === -1) return !1;
  for (let n = r + 1; n < t.length; n++)
    if (JP(e, t[n])) return !0;
  return !1
}

function yo(e) {
  return r => eC(r, e)
}

function eC(e, t) {
  const r = hP(t);
  if (r == null) throw Gs(0);
  if (rc(r) === 1) {
    const i = _P(r);
    return e.plural(i.reduce((a, o) => [...a, Lf(e, o)], []))
  } else return Lf(e, r)
}

function Lf(e, t) {
  const r = pP(t);
  if (r != null) return e.type === "text" ? r : e.normalize([r]);
  {
    const n = mP(t)
      .reduce((s, i) => [...s, al(e, i)], []);
    return e.normalize(n)
  }
}

function al(e, t) {
  const r = rc(t);
  switch (r) {
    case 3:
      return yi(t, r);
    case 9:
      return yi(t, r);
    case 4: {
      const n = t;
      if (Kt(n, "k") && n.k) return e.interpolate(e.named(n.k));
      if (Kt(n, "key") && n.key) return e.interpolate(e.named(n.key));
      throw Gs(r)
    }
    case 5: {
      const n = t;
      if (Kt(n, "i") && Qe(n.i)) return e.interpolate(e.list(n.i));
      if (Kt(n, "index") && Qe(n.index)) return e.interpolate(e.list(n.index));
      throw Gs(r)
    }
    case 6: {
      const n = t,
        s = gP(n),
        i = vP(n);
      return e.linked(al(e, i), s ? al(e, s) : void 0, e.type)
    }
    case 7:
      return yi(t, r);
    case 8:
      return yi(t, r);
    default:
      throw new Error(`unhandled node on format message part: ${r}`)
  }
}
const cp = e => e;
let Vn = Fe();

function up(e, t = {}) {
  let r = !1;
  const n = t.onError || GS;
  return t.onError = s => {
    r = !0, n(s)
  }, {
    ...fP(e, t),
    detectError: r
  }
}
const tC = (e, t) => {
  if (!oe(e)) throw cr(Yt.NOT_SUPPORT_NON_STRING_MESSAGE);
  {
    be(t.warnHtmlMessage) && t.warnHtmlMessage;
    const n = (t.onCacheKey || cp)(e),
      s = Vn[n];
    if (s) return s;
    const {
      code: i,
      detectError: a
    } = up(e, t), o = new Function(`return ${i}`)();
    return a ? o : Vn[n] = o
  }
};

function rC(e, t) {
  if (__INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && oe(e)) {
    be(t.warnHtmlMessage) && t.warnHtmlMessage;
    const n = (t.onCacheKey || cp)(e),
      s = Vn[n];
    if (s) return s;
    const {
      ast: i,
      detectError: a
    } = up(e, {
      ...t,
      location: !1,
      jit: !0
    }), o = yo(i);
    return a ? o : Vn[n] = o
  } else {
    const r = e.cacheKey;
    if (r) {
      const n = Vn[r];
      return n || (Vn[r] = yo(e))
    } else return yo(e)
  }
}
const Df = () => "",
  Vt = e => Ve(e);

function kf(e, ...t) {
  const {
    fallbackFormat: r,
    postTranslation: n,
    unresolving: s,
    messageCompiler: i,
    fallbackLocale: a,
    messages: o
  } = e, [l, u] = ol(...t), c = be(u.missingWarn) ? u.missingWarn : e.missingWarn, f = be(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, d = be(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, _ = !!u.resolvedMessage, m = oe(u.default) || be(u.default) ? be(u.default) ? i ? l : () => l : u.default : r ? i ? l : () => l : "", E = r || m !== "", R = nc(e, u);
  d && nC(u);
  let [O, T, h] = _ ? [l, R, o[R] || Fe()] : fp(e, l, R, a, f, c), p = O, v = l;
  if (!_ && !(oe(p) || ur(p) || Vt(p)) && E && (p = m, v = p), !_ && (!(oe(p) || ur(p) || Vt(p)) || !oe(T))) return s ? Ra : l;
  let P = !1;
  const g = () => {
      P = !0
    },
    L = Vt(p) ? p : dp(e, l, T, p, v, g);
  if (P) return p;
  const b = aC(e, T, h, u),
    N = NP(b),
    B = sC(e, L, N);
  let k = n ? n(B, l) : B;
  if (d && oe(k) && (k = LS(k)), __INTLIFY_PROD_DEVTOOLS__) {
    const W = {
      timestamp: Date.now(),
      key: oe(l) ? l : Vt(p) ? p.key : "",
      locale: T || (Vt(p) ? p.locale : ""),
      format: oe(p) ? p : Vt(p) ? p.source : "",
      message: k
    };
    W.meta = vt({}, e.__meta, qP() || {}), FP(W)
  }
  return k
}

function nC(e) {
  We(e.list) ? e.list = e.list.map(t => oe(t) ? mf(t) : t) : Le(e.named) && Object.keys(e.named)
    .forEach(t => {
      oe(e.named[t]) && (e.named[t] = mf(e.named[t]))
    })
}

function fp(e, t, r, n, s, i) {
  const {
    messages: a,
    onWarn: o,
    messageResolver: l,
    localeFallbacker: u
  } = e, c = u(e, n, r);
  let f = Fe(),
    d, _ = null;
  const m = "translate";
  for (let E = 0; E < c.length && (d = c[E], f = a[d] || Fe(), (_ = l(f, t)) === null && (_ = f[t]), !(oe(_) || ur(_) || Vt(_))); E++)
    if (!QP(d, c)) {
      const R = sc(e, t, d, i, m);
      R !== t && (_ = R)
    } return [_, d, f]
}

function dp(e, t, r, n, s, i) {
  const {
    messageCompiler: a,
    warnHtmlMessage: o
  } = e;
  if (Vt(n)) {
    const u = n;
    return u.locale = u.locale || r, u.key = u.key || t, u
  }
  if (a == null) {
    const u = (() => n);
    return u.locale = r, u.key = t, u
  }
  const l = a(n, iC(e, r, s, n, o, i));
  return l.locale = r, l.key = t, l.source = n, l
}

function sC(e, t, r) {
  return t(r)
}

function ol(...e) {
  const [t, r, n] = e, s = Fe();
  if (!oe(t) && !Qe(t) && !Vt(t) && !ur(t)) throw cr(Yt.INVALID_ARGUMENT);
  const i = Qe(t) ? String(t) : (Vt(t), t);
  return Qe(r) ? s.plural = r : oe(r) ? s.default = r : ve(r) && !Ca(r) ? s.named = r : We(r) && (s.list = r), Qe(n) ? s.plural = n : oe(n) ? s.default = n : ve(n) && vt(s, n), [i, s]
}

function iC(e, t, r, n, s, i) {
  return {
    locale: t,
    key: r,
    warnHtmlMessage: s,
    onError: a => {
      throw i && i(a), a
    },
    onCacheKey: a => AS(t, r, a)
  }
}

function aC(e, t, r, n) {
  const {
    modifiers: s,
    pluralRules: i,
    messageResolver: a,
    fallbackLocale: o,
    fallbackWarn: l,
    missingWarn: u,
    fallbackContext: c
  } = e, d = {
    locale: t,
    modifiers: s,
    pluralRules: i,
    messages: _ => {
      let m = a(r, _);
      if (m == null && c) {
        const [, , E] = fp(c, _, t, o, l, u);
        m = a(E, _)
      }
      if (oe(m) || ur(m)) {
        let E = !1;
        const O = dp(e, _, t, m, _, () => {
          E = !0
        });
        return E ? Df : O
      } else return Vt(m) ? m : Df
    }
  };
  return e.processor && (d.processor = e.processor), n.list && (d.list = n.list), n.named && (d.named = n.named), Qe(n.plural) && (d.pluralIndex = n.plural), d
}

function Nf(e, ...t) {
  const {
    datetimeFormats: r,
    unresolving: n,
    fallbackLocale: s,
    onWarn: i,
    localeFallbacker: a
  } = e, {
    __datetimeFormatters: o
  } = e, [l, u, c, f] = ll(...t), d = be(c.missingWarn) ? c.missingWarn : e.missingWarn;
  be(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const _ = !!c.part,
    m = nc(e, c),
    E = a(e, s, m);
  if (!oe(l) || l === "") return new Intl.DateTimeFormat(m, f)
    .format(u);
  let R = {},
    O, T = null;
  const h = "datetime format";
  for (let P = 0; P < E.length && (O = E[P], R = r[O] || {}, T = R[l], !ve(T)); P++) sc(e, l, O, d, h);
  if (!ve(T) || !oe(O)) return n ? Ra : l;
  let p = `${O}__${l}`;
  Ca(f) || (p = `${p}__${JSON.stringify(f)}`);
  let v = o.get(p);
  return v || (v = new Intl.DateTimeFormat(O, vt({}, T, f)), o.set(p, v)), _ ? v.formatToParts(u) : v.format(u)
}
const hp = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];

function ll(...e) {
  const [t, r, n, s] = e, i = Fe();
  let a = Fe(),
    o;
  if (oe(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l) throw cr(Yt.INVALID_ISO_DATE_ARGUMENT);
    const u = l[3] ? l[3].trim()
      .startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    o = new Date(u);
    try {
      o.toISOString()
    } catch {
      throw cr(Yt.INVALID_ISO_DATE_ARGUMENT)
    }
  } else if (OS(t)) {
    if (isNaN(t.getTime())) throw cr(Yt.INVALID_DATE_ARGUMENT);
    o = t
  } else if (Qe(t)) o = t;
  else throw cr(Yt.INVALID_ARGUMENT);
  return oe(r) ? i.key = r : ve(r) && Object.keys(r)
    .forEach(l => {
      hp.includes(l) ? a[l] = r[l] : i[l] = r[l]
    }), oe(n) ? i.locale = n : ve(n) && (a = n), ve(s) && (a = s), [i.key || "", o, i, a]
}

function Mf(e, t, r) {
  const n = e;
  for (const s in r) {
    const i = `${t}__${s}`;
    n.__datetimeFormatters.has(i) && n.__datetimeFormatters.delete(i)
  }
}

function xf(e, ...t) {
  const {
    numberFormats: r,
    unresolving: n,
    fallbackLocale: s,
    onWarn: i,
    localeFallbacker: a
  } = e, {
    __numberFormatters: o
  } = e, [l, u, c, f] = cl(...t), d = be(c.missingWarn) ? c.missingWarn : e.missingWarn;
  be(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const _ = !!c.part,
    m = nc(e, c),
    E = a(e, s, m);
  if (!oe(l) || l === "") return new Intl.NumberFormat(m, f)
    .format(u);
  let R = {},
    O, T = null;
  const h = "number format";
  for (let P = 0; P < E.length && (O = E[P], R = r[O] || {}, T = R[l], !ve(T)); P++) sc(e, l, O, d, h);
  if (!ve(T) || !oe(O)) return n ? Ra : l;
  let p = `${O}__${l}`;
  Ca(f) || (p = `${p}__${JSON.stringify(f)}`);
  let v = o.get(p);
  return v || (v = new Intl.NumberFormat(O, vt({}, T, f)), o.set(p, v)), _ ? v.formatToParts(u) : v.format(u)
}
const _p = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];

function cl(...e) {
  const [t, r, n, s] = e, i = Fe();
  let a = Fe();
  if (!Qe(t)) throw cr(Yt.INVALID_ARGUMENT);
  const o = t;
  return oe(r) ? i.key = r : ve(r) && Object.keys(r)
    .forEach(l => {
      _p.includes(l) ? a[l] = r[l] : i[l] = r[l]
    }), oe(n) ? i.locale = n : ve(n) && (a = n), ve(s) && (a = s), [i.key || "", o, i, a]
}

function Ff(e, t, r) {
  const n = e;
  for (const s in r) {
    const i = `${t}__${s}`;
    n.__numberFormatters.has(i) && n.__numberFormatters.delete(i)
  }
}
dP();
/*!
 * vue-i18n v9.14.5
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */
const oC = "9.14.5";

function lC() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Sr()
    .__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Sr()
    .__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Sr()
    .__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Sr()
    .__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Sr()
    .__INTLIFY_PROD_DEVTOOLS__ = !1)
}
const cC = VP.__EXTEND_POINT__,
  vr = Aa(cC);
vr(), vr(), vr(), vr(), vr(), vr(), vr(), vr(), vr();
const pp = Yt.__EXTEND_POINT__,
  Ct = Aa(pp),
  ct = {
    UNEXPECTED_RETURN_TYPE: pp,
    INVALID_ARGUMENT: Ct(),
    MUST_BE_CALL_SETUP_TOP: Ct(),
    NOT_INSTALLED: Ct(),
    NOT_AVAILABLE_IN_LEGACY_MODE: Ct(),
    REQUIRED_VALUE: Ct(),
    INVALID_VALUE: Ct(),
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Ct(),
    NOT_INSTALLED_WITH_PROVIDE: Ct(),
    UNEXPECTED_ERROR: Ct(),
    NOT_COMPATIBLE_LEGACY_VUE_I18N: Ct(),
    BRIDGE_SUPPORT_VUE_2_ONLY: Ct(),
    MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Ct(),
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Ct(),
    __EXTEND_POINT__: Ct()
  };

function dt(e, ...t) {
  return ls(e, null, void 0)
}
const ul = en("__translateVNode"),
  fl = en("__datetimeParts"),
  dl = en("__numberParts"),
  mp = en("__setPluralRules"),
  gp = en("__injectWithOption"),
  hl = en("__dispose");

function Ws(e) {
  if (!Le(e) || ur(e)) return e;
  for (const t in e)
    if (Kt(e, t))
      if (!t.includes(".")) Le(e[t]) && Ws(e[t]);
      else {
        const r = t.split("."),
          n = r.length - 1;
        let s = e,
          i = !1;
        for (let a = 0; a < n; a++) {
          if (r[a] === "__proto__") throw new Error(`unsafe key: ${r[a]}`);
          if (r[a] in s || (s[r[a]] = Fe()), !Le(s[r[a]])) {
            i = !0;
            break
          }
          s = s[r[a]]
        }
        if (i || (ur(s) ? tp.includes(r[n]) || delete e[t] : (s[r[n]] = e[t], delete e[t])), !ur(s)) {
          const a = s[r[n]];
          Le(a) && Ws(a)
        }
      } return e
}

function Oa(e, t) {
  const {
    messages: r,
    __i18n: n,
    messageResolver: s,
    flatJson: i
  } = t, a = ve(r) ? r : We(n) ? Fe() : {
    [e]: Fe()
  };
  if (We(n) && n.forEach(o => {
      if ("locale" in o && "resource" in o) {
        const {
          locale: l,
          resource: u
        } = o;
        l ? (a[l] = a[l] || Fe(), Ri(u, a[l])) : Ri(u, a)
      } else oe(o) && Ri(JSON.parse(o), a)
    }), s == null && i)
    for (const o in a) Kt(a, o) && Ws(a[o]);
  return a
}

function vp(e) {
  return e.type
}

function yp(e, t, r) {
  let n = Le(t.messages) ? t.messages : Fe();
  "__i18nGlobal" in r && (n = Oa(e.locale.value, {
    messages: n,
    __i18n: r.__i18nGlobal
  }));
  const s = Object.keys(n);
  s.length && s.forEach(i => {
    e.mergeLocaleMessage(i, n[i])
  });
  {
    if (Le(t.datetimeFormats)) {
      const i = Object.keys(t.datetimeFormats);
      i.length && i.forEach(a => {
        e.mergeDateTimeFormat(a, t.datetimeFormats[a])
      })
    }
    if (Le(t.numberFormats)) {
      const i = Object.keys(t.numberFormats);
      i.length && i.forEach(a => {
        e.mergeNumberFormat(a, t.numberFormats[a])
      })
    }
  }
}

function Hf(e) {
  return Xe(Zr, null, e, 0)
}
const Bf = "__INTLIFY_META__",
  Vf = () => [],
  uC = () => !1;
let Uf = 0;

function Gf(e) {
  return ((t, r, n, s) => e(r, n, tt() || void 0, s))
}
const fC = () => {
  const e = tt();
  let t = null;
  return e && (t = vp(e)[Bf]) ? {
    [Bf]: t
  } : null
};

function ic(e = {}, t) {
  const {
    __root: r,
    __injectWithOption: n
  } = e, s = r === void 0, i = e.flatJson, a = Qi ? _e : zt, o = !!e.translateExistCompatible;
  let l = be(e.inheritLocale) ? e.inheritLocale : !0;
  const u = a(r && l ? r.locale.value : oe(e.locale) ? e.locale : rs),
    c = a(r && l ? r.fallbackLocale.value : oe(e.fallbackLocale) || We(e.fallbackLocale) || ve(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : u.value),
    f = a(Oa(u.value, e)),
    d = a(ve(e.datetimeFormats) ? e.datetimeFormats : {
      [u.value]: {}
    }),
    _ = a(ve(e.numberFormats) ? e.numberFormats : {
      [u.value]: {}
    });
  let m = r ? r.missingWarn : be(e.missingWarn) || Qr(e.missingWarn) ? e.missingWarn : !0,
    E = r ? r.fallbackWarn : be(e.fallbackWarn) || Qr(e.fallbackWarn) ? e.fallbackWarn : !0,
    R = r ? r.fallbackRoot : be(e.fallbackRoot) ? e.fallbackRoot : !0,
    O = !!e.fallbackFormat,
    T = Ve(e.missing) ? e.missing : null,
    h = Ve(e.missing) ? Gf(e.missing) : null,
    p = Ve(e.postTranslation) ? e.postTranslation : null,
    v = r ? r.warnHtmlMessage : be(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    P = !!e.escapeParameter;
  const g = r ? r.modifiers : ve(e.modifiers) ? e.modifiers : {};
  let L = e.pluralRules || r && r.pluralRules,
    b;
  b = (() => {
    s && Of(null);
    const x = {
      version: oC,
      locale: u.value,
      fallbackLocale: c.value,
      messages: f.value,
      modifiers: g,
      pluralRules: L,
      missing: h === null ? void 0 : h,
      missingWarn: m,
      fallbackWarn: E,
      fallbackFormat: O,
      unresolving: !0,
      postTranslation: p === null ? void 0 : p,
      warnHtmlMessage: v,
      escapeParameter: P,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: {
        framework: "vue"
      }
    };
    x.datetimeFormats = d.value, x.numberFormats = _.value, x.__datetimeFormatters = ve(b) ? b.__datetimeFormatters : void 0, x.__numberFormatters = ve(b) ? b.__numberFormatters : void 0;
    const V = zP(x);
    return s && Of(V), V
  })(), ys(b, u.value, c.value);

  function B() {
    return [u.value, c.value, f.value, d.value, _.value]
  }
  const k = $({
      get: () => u.value,
      set: x => {
        u.value = x, b.locale = u.value
      }
    }),
    W = $({
      get: () => c.value,
      set: x => {
        c.value = x, b.fallbackLocale = c.value, ys(b, u.value, x)
      }
    }),
    Y = $(() => f.value),
    ee = $(() => d.value),
    X = $(() => _.value);

  function re() {
    return Ve(p) ? p : null
  }

  function se(x) {
    p = x, b.postTranslation = x
  }

  function de() {
    return T
  }

  function Pe(x) {
    x !== null && (h = Gf(x)), T = x, b.missing = h
  }
  const we = (x, V, le, ue, Ae, Re) => {
    B();
    let Ge;
    try {
      __INTLIFY_PROD_DEVTOOLS__,
      s || (b.fallbackContext = r ? ZP() : void 0),
      Ge = x(b)
    }
    finally {
      __INTLIFY_PROD_DEVTOOLS__,
      s || (b.fallbackContext = void 0)
    }
    if (le !== "translate exists" && Qe(Ge) && Ge === Ra || le === "translate exists" && !Ge) {
      const [rt, Gt] = V();
      return r && R ? ue(r) : Ae(rt)
    } else {
      if (Re(Ge)) return Ge;
      throw dt(ct.UNEXPECTED_RETURN_TYPE)
    }
  };

  function ye(...x) {
    return we(V => Reflect.apply(kf, null, [V, ...x]), () => ol(...x), "translate", V => Reflect.apply(V.t, V, [...x]), V => V, V => oe(V))
  }

  function Ye(...x) {
    const [V, le, ue] = x;
    if (ue && !Le(ue)) throw dt(ct.INVALID_ARGUMENT);
    return ye(V, le, vt({
      resolvedMessage: !0
    }, ue || {}))
  }

  function He(...x) {
    return we(V => Reflect.apply(Nf, null, [V, ...x]), () => ll(...x), "datetime format", V => Reflect.apply(V.d, V, [...x]), () => Cf, V => oe(V))
  }

  function De(...x) {
    return we(V => Reflect.apply(xf, null, [V, ...x]), () => cl(...x), "number format", V => Reflect.apply(V.n, V, [...x]), () => Cf, V => oe(V))
  }

  function ke(x) {
    return x.map(V => oe(V) || Qe(V) || be(V) ? Hf(String(V)) : V)
  }
  const ne = {
    normalize: ke,
    interpolate: x => x,
    type: "vnode"
  };

  function Q(...x) {
    return we(V => {
      let le;
      const ue = V;
      try {
        ue.processor = ne, le = Reflect.apply(kf, null, [ue, ...x])
      } finally {
        ue.processor = null
      }
      return le
    }, () => ol(...x), "translate", V => V[ul](...x), V => [Hf(V)], V => We(V))
  }

  function ae(...x) {
    return we(V => Reflect.apply(xf, null, [V, ...x]), () => cl(...x), "number format", V => V[dl](...x), Vf, V => oe(V) || We(V))
  }

  function he(...x) {
    return we(V => Reflect.apply(Nf, null, [V, ...x]), () => ll(...x), "datetime format", V => V[fl](...x), Vf, V => oe(V) || We(V))
  }

  function Ee(x) {
    L = x, b.pluralRules = L
  }

  function I(x, V) {
    return we(() => {
      if (!x) return !1;
      const le = oe(V) ? V : u.value,
        ue = q(le),
        Ae = b.messageResolver(ue, x);
      return o ? Ae != null : ur(Ae) || Vt(Ae) || oe(Ae)
    }, () => [x], "translate exists", le => Reflect.apply(le.te, le, [x, V]), uC, le => be(le))
  }

  function S(x) {
    let V = null;
    const le = np(b, c.value, u.value);
    for (let ue = 0; ue < le.length; ue++) {
      const Ae = f.value[le[ue]] || {},
        Re = b.messageResolver(Ae, x);
      if (Re != null) {
        V = Re;
        break
      }
    }
    return V
  }

  function F(x) {
    const V = S(x);
    return V ?? (r ? r.tm(x) || {} : {})
  }

  function q(x) {
    return f.value[x] || {}
  }

  function j(x, V) {
    if (i) {
      const le = {
        [x]: V
      };
      for (const ue in le) Kt(le, ue) && Ws(le[ue]);
      V = le[x]
    }
    f.value[x] = V, b.messages = f.value
  }

  function J(x, V) {
    f.value[x] = f.value[x] || {};
    const le = {
      [x]: V
    };
    if (i)
      for (const ue in le) Kt(le, ue) && Ws(le[ue]);
    V = le[x], Ri(V, f.value[x]), b.messages = f.value
  }

  function ie(x) {
    return d.value[x] || {}
  }

  function C(x, V) {
    d.value[x] = V, b.datetimeFormats = d.value, Mf(b, x, V)
  }

  function y(x, V) {
    d.value[x] = vt(d.value[x] || {}, V), b.datetimeFormats = d.value, Mf(b, x, V)
  }

  function D(x) {
    return _.value[x] || {}
  }

  function K(x, V) {
    _.value[x] = V, b.numberFormats = _.value, Ff(b, x, V)
  }

  function z(x, V) {
    _.value[x] = vt(_.value[x] || {}, V), b.numberFormats = _.value, Ff(b, x, V)
  }
  Uf++, r && Qi && (gt(r.locale, x => {
    l && (u.value = x, b.locale = x, ys(b, u.value, c.value))
  }), gt(r.fallbackLocale, x => {
    l && (c.value = x, b.fallbackLocale = x, ys(b, u.value, c.value))
  }));
  const Z = {
    id: Uf,
    locale: k,
    fallbackLocale: W,
    get inheritLocale() {
      return l
    },
    set inheritLocale(x) {
      l = x, x && r && (u.value = r.locale.value, c.value = r.fallbackLocale.value, ys(b, u.value, c.value))
    },
    get availableLocales() {
      return Object.keys(f.value)
        .sort()
    },
    messages: Y,
    get modifiers() {
      return g
    },
    get pluralRules() {
      return L || {}
    },
    get isGlobal() {
      return s
    },
    get missingWarn() {
      return m
    },
    set missingWarn(x) {
      m = x, b.missingWarn = m
    },
    get fallbackWarn() {
      return E
    },
    set fallbackWarn(x) {
      E = x, b.fallbackWarn = E
    },
    get fallbackRoot() {
      return R
    },
    set fallbackRoot(x) {
      R = x
    },
    get fallbackFormat() {
      return O
    },
    set fallbackFormat(x) {
      O = x, b.fallbackFormat = O
    },
    get warnHtmlMessage() {
      return v
    },
    set warnHtmlMessage(x) {
      v = x, b.warnHtmlMessage = x
    },
    get escapeParameter() {
      return P
    },
    set escapeParameter(x) {
      P = x, b.escapeParameter = x
    },
    t: ye,
    getLocaleMessage: q,
    setLocaleMessage: j,
    mergeLocaleMessage: J,
    getPostTranslationHandler: re,
    setPostTranslationHandler: se,
    getMissingHandler: de,
    setMissingHandler: Pe,
    [mp]: Ee
  };
  return Z.datetimeFormats = ee, Z.numberFormats = X, Z.rt = Ye, Z.te = I, Z.tm = F, Z.d = He, Z.n = De, Z.getDateTimeFormat = ie, Z.setDateTimeFormat = C, Z.mergeDateTimeFormat = y, Z.getNumberFormat = D, Z.setNumberFormat = K, Z.mergeNumberFormat = z, Z[gp] = n, Z[ul] = Q, Z[fl] = he, Z[dl] = ae, Z
}

function dC(e) {
  const t = oe(e.locale) ? e.locale : rs,
    r = oe(e.fallbackLocale) || We(e.fallbackLocale) || ve(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t,
    n = Ve(e.missing) ? e.missing : void 0,
    s = be(e.silentTranslationWarn) || Qr(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0,
    i = be(e.silentFallbackWarn) || Qr(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0,
    a = be(e.fallbackRoot) ? e.fallbackRoot : !0,
    o = !!e.formatFallbackMessages,
    l = ve(e.modifiers) ? e.modifiers : {},
    u = e.pluralizationRules,
    c = Ve(e.postTranslation) ? e.postTranslation : void 0,
    f = oe(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0,
    d = !!e.escapeParameterHtml,
    _ = be(e.sync) ? e.sync : !0;
  let m = e.messages;
  if (ve(e.sharedMessages)) {
    const P = e.sharedMessages;
    m = Object.keys(P)
      .reduce((L, b) => {
        const N = L[b] || (L[b] = {});
        return vt(N, P[b]), L
      }, m || {})
  }
  const {
    __i18n: E,
    __root: R,
    __injectWithOption: O
  } = e, T = e.datetimeFormats, h = e.numberFormats, p = e.flatJson, v = e.translateExistCompatible;
  return {
    locale: t,
    fallbackLocale: r,
    messages: m,
    flatJson: p,
    datetimeFormats: T,
    numberFormats: h,
    missing: n,
    missingWarn: s,
    fallbackWarn: i,
    fallbackRoot: a,
    fallbackFormat: o,
    modifiers: l,
    pluralRules: u,
    postTranslation: c,
    warnHtmlMessage: f,
    escapeParameter: d,
    messageResolver: e.messageResolver,
    inheritLocale: _,
    translateExistCompatible: v,
    __i18n: E,
    __root: R,
    __injectWithOption: O
  }
}

function _l(e = {}, t) {
  {
    const r = ic(dC(e)),
      {
        __extender: n
      } = e,
      s = {
        id: r.id,
        get locale() {
          return r.locale.value
        },
        set locale(i) {
          r.locale.value = i
        },
        get fallbackLocale() {
          return r.fallbackLocale.value
        },
        set fallbackLocale(i) {
          r.fallbackLocale.value = i
        },
        get messages() {
          return r.messages.value
        },
        get datetimeFormats() {
          return r.datetimeFormats.value
        },
        get numberFormats() {
          return r.numberFormats.value
        },
        get availableLocales() {
          return r.availableLocales
        },
        get formatter() {
          return {
            interpolate() {
              return []
            }
          }
        },
        set formatter(i) {},
        get missing() {
          return r.getMissingHandler()
        },
        set missing(i) {
          r.setMissingHandler(i)
        },
        get silentTranslationWarn() {
          return be(r.missingWarn) ? !r.missingWarn : r.missingWarn
        },
        set silentTranslationWarn(i) {
          r.missingWarn = be(i) ? !i : i
        },
        get silentFallbackWarn() {
          return be(r.fallbackWarn) ? !r.fallbackWarn : r.fallbackWarn
        },
        set silentFallbackWarn(i) {
          r.fallbackWarn = be(i) ? !i : i
        },
        get modifiers() {
          return r.modifiers
        },
        get formatFallbackMessages() {
          return r.fallbackFormat
        },
        set formatFallbackMessages(i) {
          r.fallbackFormat = i
        },
        get postTranslation() {
          return r.getPostTranslationHandler()
        },
        set postTranslation(i) {
          r.setPostTranslationHandler(i)
        },
        get sync() {
          return r.inheritLocale
        },
        set sync(i) {
          r.inheritLocale = i
        },
        get warnHtmlInMessage() {
          return r.warnHtmlMessage ? "warn" : "off"
        },
        set warnHtmlInMessage(i) {
          r.warnHtmlMessage = i !== "off"
        },
        get escapeParameterHtml() {
          return r.escapeParameter
        },
        set escapeParameterHtml(i) {
          r.escapeParameter = i
        },
        get preserveDirectiveContent() {
          return !0
        },
        set preserveDirectiveContent(i) {},
        get pluralizationRules() {
          return r.pluralRules || {}
        },
        __composer: r,
        t(...i) {
          const [a, o, l] = i, u = {};
          let c = null,
            f = null;
          if (!oe(a)) throw dt(ct.INVALID_ARGUMENT);
          const d = a;
          return oe(o) ? u.locale = o : We(o) ? c = o : ve(o) && (f = o), We(l) ? c = l : ve(l) && (f = l), Reflect.apply(r.t, r, [d, c || f || {}, u])
        },
        rt(...i) {
          return Reflect.apply(r.rt, r, [...i])
        },
        tc(...i) {
          const [a, o, l] = i, u = {
            plural: 1
          };
          let c = null,
            f = null;
          if (!oe(a)) throw dt(ct.INVALID_ARGUMENT);
          const d = a;
          return oe(o) ? u.locale = o : Qe(o) ? u.plural = o : We(o) ? c = o : ve(o) && (f = o), oe(l) ? u.locale = l : We(l) ? c = l : ve(l) && (f = l), Reflect.apply(r.t, r, [d, c || f || {}, u])
        },
        te(i, a) {
          return r.te(i, a)
        },
        tm(i) {
          return r.tm(i)
        },
        getLocaleMessage(i) {
          return r.getLocaleMessage(i)
        },
        setLocaleMessage(i, a) {
          r.setLocaleMessage(i, a)
        },
        mergeLocaleMessage(i, a) {
          r.mergeLocaleMessage(i, a)
        },
        d(...i) {
          return Reflect.apply(r.d, r, [...i])
        },
        getDateTimeFormat(i) {
          return r.getDateTimeFormat(i)
        },
        setDateTimeFormat(i, a) {
          r.setDateTimeFormat(i, a)
        },
        mergeDateTimeFormat(i, a) {
          r.mergeDateTimeFormat(i, a)
        },
        n(...i) {
          return Reflect.apply(r.n, r, [...i])
        },
        getNumberFormat(i) {
          return r.getNumberFormat(i)
        },
        setNumberFormat(i, a) {
          r.setNumberFormat(i, a)
        },
        mergeNumberFormat(i, a) {
          r.mergeNumberFormat(i, a)
        },
        getChoiceIndex(i, a) {
          return -1
        }
      };
    return s.__extender = n, s
  }
}
const ac = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    validator: e => e === "parent" || e === "global",
    default: "parent"
  },
  i18n: {
    type: Object
  }
};

function hC({
  slots: e
}, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : [])
    .reduce((n, s) => [...n, ...s.type === nt ? s.children : [s]], []) : t.reduce((r, n) => {
      const s = e[n];
      return s && (r[n] = s()), r
    }, Fe())
}

function Ep(e) {
  return nt
}
const _C = Mt({
    name: "i18n-t",
    props: vt({
      keypath: {
        type: String,
        required: !0
      },
      plural: {
        type: [Number, String],
        validator: e => Qe(e) || !isNaN(e)
      }
    }, ac),
    setup(e, t) {
      const {
        slots: r,
        attrs: n
      } = t, s = e.i18n || oc({
        useScope: e.scope,
        __useComponent: !0
      });
      return () => {
        const i = Object.keys(r)
          .filter(f => f !== "_"),
          a = Fe();
        e.locale && (a.locale = e.locale), e.plural !== void 0 && (a.plural = oe(e.plural) ? +e.plural : e.plural);
        const o = hC(t, i),
          l = s[ul](e.keypath, o, a),
          u = vt(Fe(), n),
          c = oe(e.tag) || Le(e.tag) ? e.tag : Ep();
        return ft(c, u, l)
      }
    }
  }),
  $f = _C;

function pC(e) {
  return We(e) && !oe(e[0])
}

function wp(e, t, r, n) {
  const {
    slots: s,
    attrs: i
  } = t;
  return () => {
    const a = {
      part: !0
    };
    let o = Fe();
    e.locale && (a.locale = e.locale), oe(e.format) ? a.key = e.format : Le(e.format) && (oe(e.format.key) && (a.key = e.format.key), o = Object.keys(e.format)
      .reduce((d, _) => r.includes(_) ? vt(Fe(), d, {
        [_]: e.format[_]
      }) : d, Fe()));
    const l = n(e.value, a, o);
    let u = [a.key];
    We(l) ? u = l.map((d, _) => {
      const m = s[d.type],
        E = m ? m({
          [d.type]: d.value,
          index: _,
          parts: l
        }) : [d.value];
      return pC(E) && (E[0].key = `${d.type}-${_}`), E
    }) : oe(l) && (u = [l]);
    const c = vt(Fe(), i),
      f = oe(e.tag) || Le(e.tag) ? e.tag : Ep();
    return ft(f, c, u)
  }
}
const mC = Mt({
    name: "i18n-n",
    props: vt({
      value: {
        type: Number,
        required: !0
      },
      format: {
        type: [String, Object]
      }
    }, ac),
    setup(e, t) {
      const r = e.i18n || oc({
        useScope: e.scope,
        __useComponent: !0
      });
      return wp(e, t, _p, (...n) => r[dl](...n))
    }
  }),
  Wf = mC,
  gC = Mt({
    name: "i18n-d",
    props: vt({
      value: {
        type: [Number, Date],
        required: !0
      },
      format: {
        type: [String, Object]
      }
    }, ac),
    setup(e, t) {
      const r = e.i18n || oc({
        useScope: e.scope,
        __useComponent: !0
      });
      return wp(e, t, hp, (...n) => r[fl](...n))
    }
  }),
  jf = gC;

function vC(e, t) {
  const r = e;
  if (e.mode === "composition") return r.__getInstance(t) || e.global;
  {
    const n = r.__getInstance(t);
    return n != null ? n.__composer : e.global.__composer
  }
}

function yC(e) {
  const t = a => {
    const {
      instance: o,
      modifiers: l,
      value: u
    } = a;
    if (!o || !o.$) throw dt(ct.UNEXPECTED_ERROR);
    const c = vC(e, o.$),
      f = Kf(u);
    return [Reflect.apply(c.t, c, [...Yf(f)]), c]
  };
  return {
    created: (a, o) => {
      const [l, u] = t(o);
      Qi && e.global === u && (a.__i18nWatcher = gt(u.locale, () => {
        o.instance && o.instance.$forceUpdate()
      })), a.__composer = u, a.textContent = l
    },
    unmounted: a => {
      Qi && a.__i18nWatcher && (a.__i18nWatcher(), a.__i18nWatcher = void 0, delete a.__i18nWatcher), a.__composer && (a.__composer = void 0, delete a.__composer)
    },
    beforeUpdate: (a, {
      value: o
    }) => {
      if (a.__composer) {
        const l = a.__composer,
          u = Kf(o);
        a.textContent = Reflect.apply(l.t, l, [...Yf(u)])
      }
    },
    getSSRProps: a => {
      const [o] = t(a);
      return {
        textContent: o
      }
    }
  }
}

function Kf(e) {
  if (oe(e)) return {
    path: e
  };
  if (ve(e)) {
    if (!("path" in e)) throw dt(ct.REQUIRED_VALUE, "path");
    return e
  } else throw dt(ct.INVALID_VALUE)
}

function Yf(e) {
  const {
    path: t,
    locale: r,
    args: n,
    choice: s,
    plural: i
  } = e, a = {}, o = n || {};
  return oe(r) && (a.locale = r), Qe(s) && (a.plural = s), Qe(i) && (a.plural = i), [t, o, a]
}

function EC(e, t, ...r) {
  const n = ve(r[0]) ? r[0] : {},
    s = !!n.useI18nComponentName;
  (be(n.globalInstall) ? n.globalInstall : !0) && ([s ? "i18n" : $f.name, "I18nT"].forEach(a => e.component(a, $f)), [Wf.name, "I18nN"].forEach(a => e.component(a, Wf)), [jf.name, "I18nD"].forEach(a => e.component(a, jf))), e.directive("t", yC(t))
}

function wC(e, t, r) {
  return {
    beforeCreate() {
      const n = tt();
      if (!n) throw dt(ct.UNEXPECTED_ERROR);
      const s = this.$options;
      if (s.i18n) {
        const i = s.i18n;
        if (s.__i18n && (i.__i18n = s.__i18n), i.__root = t, this === this.$root) this.$i18n = Xf(e, i);
        else {
          i.__injectWithOption = !0, i.__extender = r.__vueI18nExtend, this.$i18n = _l(i);
          const a = this.$i18n;
          a.__extender && (a.__disposer = a.__extender(this.$i18n))
        }
      } else if (s.__i18n)
        if (this === this.$root) this.$i18n = Xf(e, s);
        else {
          this.$i18n = _l({
            __i18n: s.__i18n,
            __injectWithOption: !0,
            __extender: r.__vueI18nExtend,
            __root: t
          });
          const i = this.$i18n;
          i.__extender && (i.__disposer = i.__extender(this.$i18n))
        }
      else this.$i18n = e;
      s.__i18nGlobal && yp(t, s, s), this.$t = (...i) => this.$i18n.t(...i), this.$rt = (...i) => this.$i18n.rt(...i), this.$tc = (...i) => this.$i18n.tc(...i), this.$te = (i, a) => this.$i18n.te(i, a), this.$d = (...i) => this.$i18n.d(...i), this.$n = (...i) => this.$i18n.n(...i), this.$tm = i => this.$i18n.tm(i), r.__setInstance(n, this.$i18n)
    },
    mounted() {},
    unmounted() {
      const n = tt();
      if (!n) throw dt(ct.UNEXPECTED_ERROR);
      const s = this.$i18n;
      delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, s.__disposer && (s.__disposer(), delete s.__disposer, delete s.__extender), r.__deleteInstance(n), delete this.$i18n
    }
  }
}

function Xf(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[mp](t.pluralizationRules || e.pluralizationRules);
  const r = Oa(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(r)
    .forEach(n => e.mergeLocaleMessage(n, r[n])), t.datetimeFormats && Object.keys(t.datetimeFormats)
    .forEach(n => e.mergeDateTimeFormat(n, t.datetimeFormats[n])), t.numberFormats && Object.keys(t.numberFormats)
    .forEach(n => e.mergeNumberFormat(n, t.numberFormats[n])), e
}
const bC = en("global-vue-i18n");

function TC(e = {}, t) {
  const r = __VUE_I18N_LEGACY_API__ && be(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__,
    n = be(e.globalInjection) ? e.globalInjection : !0,
    s = __VUE_I18N_LEGACY_API__ && r ? !!e.allowComposition : !0,
    i = new Map,
    [a, o] = SC(e, r),
    l = en("");

  function u(d) {
    return i.get(d) || null
  }

  function c(d, _) {
    i.set(d, _)
  }

  function f(d) {
    i.delete(d)
  } {
    const d = {
      get mode() {
        return __VUE_I18N_LEGACY_API__ && r ? "legacy" : "composition"
      },
      get allowComposition() {
        return s
      },
      async install(_, ...m) {
        if (_.__VUE_I18N_SYMBOL__ = l, _.provide(_.__VUE_I18N_SYMBOL__, d), ve(m[0])) {
          const O = m[0];
          d.__composerExtend = O.__composerExtend, d.__vueI18nExtend = O.__vueI18nExtend
        }
        let E = null;
        !r && n && (E = kC(_, d.global)), __VUE_I18N_FULL_INSTALL__ && EC(_, d, ...m), __VUE_I18N_LEGACY_API__ && r && _.mixin(wC(o, o.__composer, d));
        const R = _.unmount;
        _.unmount = () => {
          E && E(), d.dispose(), R()
        }
      },
      get global() {
        return o
      },
      dispose() {
        a.stop()
      },
      __instances: i,
      __getInstance: u,
      __setInstance: c,
      __deleteInstance: f
    };
    return d
  }
}

function oc(e = {}) {
  const t = tt();
  if (t == null) throw dt(ct.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw dt(ct.NOT_INSTALLED);
  const r = PC(t),
    n = AC(r),
    s = vp(t),
    i = CC(e, s);
  if (__VUE_I18N_LEGACY_API__ && r.mode === "legacy" && !e.__useComponent) {
    if (!r.allowComposition) throw dt(ct.NOT_AVAILABLE_IN_LEGACY_MODE);
    return LC(t, i, n, e)
  }
  if (i === "global") return yp(n, e, s), n;
  if (i === "parent") {
    let l = RC(r, t, e.__useComponent);
    return l == null && (l = n), l
  }
  const a = r;
  let o = a.__getInstance(t);
  if (o == null) {
    const l = vt({}, e);
    "__i18n" in s && (l.__i18n = s.__i18n), n && (l.__root = n), o = ic(l), a.__composerExtend && (o[hl] = a.__composerExtend(o)), IC(a, t, o), a.__setInstance(t, o)
  }
  return o
}

function SC(e, t, r) {
  const n = ss();
  {
    const s = __VUE_I18N_LEGACY_API__ && t ? n.run(() => _l(e)) : n.run(() => ic(e));
    if (s == null) throw dt(ct.UNEXPECTED_ERROR);
    return [n, s]
  }
}

function PC(e) {
  {
    const t = at(e.isCE ? bC : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t) throw dt(e.isCE ? ct.NOT_INSTALLED_WITH_PROVIDE : ct.UNEXPECTED_ERROR);
    return t
  }
}

function CC(e, t) {
  return Ca(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local"
}

function AC(e) {
  return e.mode === "composition" ? e.global : e.global.__composer
}

function RC(e, t, r = !1) {
  let n = null;
  const s = t.root;
  let i = OC(t, r);
  for (; i != null;) {
    const a = e;
    if (e.mode === "composition") n = a.__getInstance(i);
    else if (__VUE_I18N_LEGACY_API__) {
      const o = a.__getInstance(i);
      o != null && (n = o.__composer, r && n && !n[gp] && (n = null))
    }
    if (n != null || s === i) break;
    i = i.parent
  }
  return n
}

function OC(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent
}

function IC(e, t, r) {
  An(() => {}, t), as(() => {
    const n = r;
    e.__deleteInstance(t);
    const s = n[hl];
    s && (s(), delete n[hl])
  }, t)
}

function LC(e, t, r, n = {}) {
  const s = t === "local",
    i = zt(null);
  if (s && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n)) throw dt(ct.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const a = be(n.inheritLocale) ? n.inheritLocale : !oe(n.locale),
    o = _e(!s || a ? r.locale.value : oe(n.locale) ? n.locale : rs),
    l = _e(!s || a ? r.fallbackLocale.value : oe(n.fallbackLocale) || We(n.fallbackLocale) || ve(n.fallbackLocale) || n.fallbackLocale === !1 ? n.fallbackLocale : o.value),
    u = _e(Oa(o.value, n)),
    c = _e(ve(n.datetimeFormats) ? n.datetimeFormats : {
      [o.value]: {}
    }),
    f = _e(ve(n.numberFormats) ? n.numberFormats : {
      [o.value]: {}
    }),
    d = s ? r.missingWarn : be(n.missingWarn) || Qr(n.missingWarn) ? n.missingWarn : !0,
    _ = s ? r.fallbackWarn : be(n.fallbackWarn) || Qr(n.fallbackWarn) ? n.fallbackWarn : !0,
    m = s ? r.fallbackRoot : be(n.fallbackRoot) ? n.fallbackRoot : !0,
    E = !!n.fallbackFormat,
    R = Ve(n.missing) ? n.missing : null,
    O = Ve(n.postTranslation) ? n.postTranslation : null,
    T = s ? r.warnHtmlMessage : be(n.warnHtmlMessage) ? n.warnHtmlMessage : !0,
    h = !!n.escapeParameter,
    p = s ? r.modifiers : ve(n.modifiers) ? n.modifiers : {},
    v = n.pluralRules || s && r.pluralRules;

  function P() {
    return [o.value, l.value, u.value, c.value, f.value]
  }
  const g = $({
      get: () => i.value ? i.value.locale.value : o.value,
      set: S => {
        i.value && (i.value.locale.value = S), o.value = S
      }
    }),
    L = $({
      get: () => i.value ? i.value.fallbackLocale.value : l.value,
      set: S => {
        i.value && (i.value.fallbackLocale.value = S), l.value = S
      }
    }),
    b = $(() => i.value ? i.value.messages.value : u.value),
    N = $(() => c.value),
    B = $(() => f.value);

  function k() {
    return i.value ? i.value.getPostTranslationHandler() : O
  }

  function W(S) {
    i.value && i.value.setPostTranslationHandler(S)
  }

  function Y() {
    return i.value ? i.value.getMissingHandler() : R
  }

  function ee(S) {
    i.value && i.value.setMissingHandler(S)
  }

  function X(S) {
    return P(), S()
  }

  function re(...S) {
    return i.value ? X(() => Reflect.apply(i.value.t, null, [...S])) : X(() => "")
  }

  function se(...S) {
    return i.value ? Reflect.apply(i.value.rt, null, [...S]) : ""
  }

  function de(...S) {
    return i.value ? X(() => Reflect.apply(i.value.d, null, [...S])) : X(() => "")
  }

  function Pe(...S) {
    return i.value ? X(() => Reflect.apply(i.value.n, null, [...S])) : X(() => "")
  }

  function we(S) {
    return i.value ? i.value.tm(S) : {}
  }

  function ye(S, F) {
    return i.value ? i.value.te(S, F) : !1
  }

  function Ye(S) {
    return i.value ? i.value.getLocaleMessage(S) : {}
  }

  function He(S, F) {
    i.value && (i.value.setLocaleMessage(S, F), u.value[S] = F)
  }

  function De(S, F) {
    i.value && i.value.mergeLocaleMessage(S, F)
  }

  function ke(S) {
    return i.value ? i.value.getDateTimeFormat(S) : {}
  }

  function H(S, F) {
    i.value && (i.value.setDateTimeFormat(S, F), c.value[S] = F)
  }

  function ne(S, F) {
    i.value && i.value.mergeDateTimeFormat(S, F)
  }

  function Q(S) {
    return i.value ? i.value.getNumberFormat(S) : {}
  }

  function ae(S, F) {
    i.value && (i.value.setNumberFormat(S, F), f.value[S] = F)
  }

  function he(S, F) {
    i.value && i.value.mergeNumberFormat(S, F)
  }
  const Ee = {
    get id() {
      return i.value ? i.value.id : -1
    },
    locale: g,
    fallbackLocale: L,
    messages: b,
    datetimeFormats: N,
    numberFormats: B,
    get inheritLocale() {
      return i.value ? i.value.inheritLocale : a
    },
    set inheritLocale(S) {
      i.value && (i.value.inheritLocale = S)
    },
    get availableLocales() {
      return i.value ? i.value.availableLocales : Object.keys(u.value)
    },
    get modifiers() {
      return i.value ? i.value.modifiers : p
    },
    get pluralRules() {
      return i.value ? i.value.pluralRules : v
    },
    get isGlobal() {
      return i.value ? i.value.isGlobal : !1
    },
    get missingWarn() {
      return i.value ? i.value.missingWarn : d
    },
    set missingWarn(S) {
      i.value && (i.value.missingWarn = S)
    },
    get fallbackWarn() {
      return i.value ? i.value.fallbackWarn : _
    },
    set fallbackWarn(S) {
      i.value && (i.value.missingWarn = S)
    },
    get fallbackRoot() {
      return i.value ? i.value.fallbackRoot : m
    },
    set fallbackRoot(S) {
      i.value && (i.value.fallbackRoot = S)
    },
    get fallbackFormat() {
      return i.value ? i.value.fallbackFormat : E
    },
    set fallbackFormat(S) {
      i.value && (i.value.fallbackFormat = S)
    },
    get warnHtmlMessage() {
      return i.value ? i.value.warnHtmlMessage : T
    },
    set warnHtmlMessage(S) {
      i.value && (i.value.warnHtmlMessage = S)
    },
    get escapeParameter() {
      return i.value ? i.value.escapeParameter : h
    },
    set escapeParameter(S) {
      i.value && (i.value.escapeParameter = S)
    },
    t: re,
    getPostTranslationHandler: k,
    setPostTranslationHandler: W,
    getMissingHandler: Y,
    setMissingHandler: ee,
    rt: se,
    d: de,
    n: Pe,
    tm: we,
    te: ye,
    getLocaleMessage: Ye,
    setLocaleMessage: He,
    mergeLocaleMessage: De,
    getDateTimeFormat: ke,
    setDateTimeFormat: H,
    mergeDateTimeFormat: ne,
    getNumberFormat: Q,
    setNumberFormat: ae,
    mergeNumberFormat: he
  };

  function I(S) {
    S.locale.value = o.value, S.fallbackLocale.value = l.value, Object.keys(u.value)
      .forEach(F => {
        S.mergeLocaleMessage(F, u.value[F])
      }), Object.keys(c.value)
      .forEach(F => {
        S.mergeDateTimeFormat(F, c.value[F])
      }), Object.keys(f.value)
      .forEach(F => {
        S.mergeNumberFormat(F, f.value[F])
      }), S.escapeParameter = h, S.fallbackFormat = E, S.fallbackRoot = m, S.fallbackWarn = _, S.missingWarn = d, S.warnHtmlMessage = T
  }
  return kl(() => {
    if (e.proxy == null || e.proxy.$i18n == null) throw dt(ct.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const S = i.value = e.proxy.$i18n.__composer;
    t === "global" ? (o.value = S.locale.value, l.value = S.fallbackLocale.value, u.value = S.messages.value, c.value = S.datetimeFormats.value, f.value = S.numberFormats.value) : s && I(S)
  }), Ee
}
const DC = ["locale", "fallbackLocale", "availableLocales"],
  qf = ["t", "rt", "d", "n", "tm", "te"];

function kC(e, t) {
  const r = Object.create(null);
  return DC.forEach(s => {
    const i = Object.getOwnPropertyDescriptor(t, s);
    if (!i) throw dt(ct.UNEXPECTED_ERROR);
    const a = Ue(i.value) ? {
      get() {
        return i.value.value
      },
      set(o) {
        i.value.value = o
      }
    } : {
      get() {
        return i.get && i.get()
      }
    };
    Object.defineProperty(r, s, a)
  }), e.config.globalProperties.$i18n = r, qf.forEach(s => {
    const i = Object.getOwnPropertyDescriptor(t, s);
    if (!i || !i.value) throw dt(ct.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${s}`, i)
  }), () => {
    delete e.config.globalProperties.$i18n, qf.forEach(s => {
      delete e.config.globalProperties[`$${s}`]
    })
  }
}
lC();
__INTLIFY_JIT_COMPILATION__ ? Rf(rC) : Rf(tC);
KP(CP);
YP(np);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const e = Sr();
  e.__INTLIFY__ = !0, MP(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)
}
const NC = ot("flyer", () => {
    const e = _e(!1);
    return {
      init: r => {
        e.value || (e.value = (r == null ? void 0 : r[_T]) === pT)
      },
      isFlyer: e
    }
  }),
  MC = ot("additional-services", {
    state: () => ({
      byId: {},
      selected: [],
      headAdditionalServices: []
    }),
    getters: {
      additionalServices: e => t => e.byId[t] || []
    },
    actions: {
      init(e) {
        var i, a, o;
        const r = ((i = zs(Ie())
          .activeZone) == null ? void 0 : i.id) ?? null;
        this.byId = {};
        const n = (e == null ? void 0 : e.variants) || {};
        Object.entries(n)
          .forEach(([l, u]) => {
            var f, d, _, m, E, R, O;
            if (!u) return;
            const c = r && ((_ = (d = (f = u.zones) == null ? void 0 : f[r]) == null ? void 0 : d.additionalServices) == null ? void 0 : _.deliveryOptions);
            c != null && c.length ? this.byId[l] = c : r ? this.byId[l] = [] : (E = (m = u.additionalServices) == null ? void 0 : m.deliveryOptions) != null && E.length ? this.byId[l] = u.additionalServices.deliveryOptions : (O = (R = e == null ? void 0 : e.additionalServices) == null ? void 0 : R.deliveryOptions) != null && O.length && (this.byId[l] = e.additionalServices.deliveryOptions)
          });
        const s = this.getHeadAdditionalServices(n);
        e != null && e.erpNumber && (s != null && s.length) ? this.byId[e.erpNumber] = s : !Object.keys(n)
          .length && ((o = (a = e == null ? void 0 : e.additionalServices) == null ? void 0 : a.deliveryOptions) != null && o.length) && (this.byId[e.erpNumber] = e.additionalServices.deliveryOptions)
      },
      select(e) {
        e && this.selected.push(e)
      },
      deselect(e) {
        if (!e) return;
        const t = this.selected.findIndex(r => r === e);
        this.selected.splice(t, 1)
      },
      resetSelected() {
        const {
          selected: e
        } = this;
        this.headAdditionalServices && this.headAdditionalServices.forEach(t => {
          const r = e.findIndex(n => n === t);
          r >= 0 && e.splice(r, 1)
        }), this.selected = e
      },
      getHeadAdditionalServices(e) {
        const t = [],
          r = Object.keys(e);
        return r ? (r.forEach(n => {
          var i, a;
          (a = (i = e[n].additionalServices) == null ? void 0 : i.deliveryOptions) == null || a.forEach(o => {
            var u;
            const l = t.findIndex(c => o.shipmentDirection === c.shipmentDirection);
            if (l < 0) t.push(JSON.parse(JSON.stringify(o)));
            else {
              const c = t[l].additionalServices ?? [];
              (u = o.additionalServices) == null || u.forEach(f => {
                c.push(f)
              }), t[l].additionalServices = c
            }
          })
        }), this.flatAdditionalServices(t, r.length)) : t
      },
      flatAdditionalServices(e, t) {
        return e.map(r => {
          var n;
          return {
            ...r,
            additionalServices: (n = r.additionalServices) == null ? void 0 : n.reduce((s, i) => {
              var l;
              const a = (l = r.additionalServices) == null ? void 0 : l.filter(u => i.type === u.type)
                .length,
                o = s.find(u => u.type === i.type);
              return o ? o.price !== i.price && (o.price = void 0, this.headAdditionalServices.push(i.type)) : a !== t ? (s.push({
                ...i,
                price: void 0
              }), this.headAdditionalServices.push(i.type)) : s.push(i), s
            }, [])
          }
        })
      }
    }
  });
let Zf = null;
const xC = "zn",
  FC = "ar",
  HC = "wh";

function pl() {
  return Zf ?? (Zf = new Jl(null, {
    path: "/"
  })), Zf
}

function ml(e) {
  return decodeURIComponent(e)
    .split(";")
    .map(r => r.split("="))
    .reduce((r, [n, s]) => ({
      ...r,
      [n]: s
    }), {})
}

function zf() {
  return pl()
    .get(xC)
}

function BC() {
  let e = pl()
    .get(HC);
  if (e && typeof e != "string" && (e = String(e)), !e) {
    const t = pl()
      .get(FC);
    e = ml(t)
      .ar
  }
  return e
}
const ta = ot("context-store", () => {
    const e = it(Ie()),
      t = _e(void 0),
      r = _e(void 0),
      n = _e(void 0),
      s = _e(void 0),
      i = _e(),
      a = _e(null),
      o = _e(void 0),
      l = $(() => {
        var Y;
        return ((Y = e.rootProduct) == null ? void 0 : Y.regions) ?? null
      }),
      u = $(() => Array.isArray(l.value) && l.value.length > 0),
      c = $(() => {
        var ee, X;
        const Y = (ee = e.current) == null ? void 0 : ee.regionsV2;
        return Y && Object.keys(Y)
          .length > 0 ? Y : ((X = e.rootProduct) == null ? void 0 : X.regionsV2) ?? {}
      }),
      f = $(() => Object.fromEntries(Object.entries(c.value)
        .filter(([, Y]) => Y && Y.status === Qu))),
      d = () => {
        if (!s.value) {
          o.value = void 0;
          return
        }
        if (t.value && s.value[t.value]) {
          o.value = t.value;
          return
        }
        o.value = a.value ?? void 0
      },
      _ = (Y, ee) => {
        var X;
        t.value = Y, r.value = ee, Y && ((X = s.value) != null && X[Y]) && (i.value = Y, d())
      },
      m = $(() => !!s.value && Object.keys(s.value)
        .length > 0),
      E = () => {
        var Y;
        a.value = ((Y = Object.values(s.value ?? {})
          .find(ee => ee == null ? void 0 : ee.isDefault)) == null ? void 0 : Y.id) ?? null
      },
      R = () => {
        const Y = f.value ?? {};
        n.value = Object.keys(Y)
          .find(ee => {
            var X, re;
            return ((X = Y[ee]) == null ? void 0 : X.isDefault) && ((re = Y[ee]) == null ? void 0 : re.status) === Qu
          })
      },
      O = () => {
        r.value || (r.value = BC()), t.value || (t.value = zf()), R(), d()
      },
      T = () => {
        var ee;
        const Y = e.current || e.rootProduct;
        if (s.value = (Y == null ? void 0 : Y.zones) || {}, E(), !t.value) {
          const X = zf();
          X && (t.value = X)
        }
        t.value && ((ee = s.value) != null && ee[t.value]) ? i.value = t.value : i.value = a.value ?? void 0, d()
      },
      h = $(() => {
        var Y, ee;
        return o.value && ((Y = s.value) != null && Y[o.value]) ? s.value[o.value] : a.value && ((ee = s.value) != null && ee[a.value]) ? s.value[a.value] : null
      }),
      p = $(() => o.value ? o.value : a.value ? a.value : null),
      v = $(() => {
        var X, re, se, de, Pe;
        if (!o.value) return !1;
        const Y = we => we === "DISPLAY" || we === "display";
        if ((X = e.current) != null && X.variants && Object.keys(e.current.variants)
          .length > 0) return Object.values((re = e.current) == null ? void 0 : re.variants)
          .some(ye => {
            var He, De;
            const Ye = (De = (He = ye.zones) == null ? void 0 : He[o.value]) == null ? void 0 : De.statusDisplayStorefront;
            return Y(Ye)
          });
        const ee = (Pe = (de = (se = e.current) == null ? void 0 : se.zones) == null ? void 0 : de[o.value]) == null ? void 0 : Pe.statusDisplayStorefront;
        return Y(ee)
      }),
      P = $(() => {
        const Y = f.value ?? null;
        return !Y || typeof Y != "object" ? [] : Object.entries(Y)
          .map(([ee, X]) => ({
            key: ee,
            ...X
          }))
      }),
      g = $(() => P.value.length),
      L = $(() => {
        var ee;
        const Y = (ee = e.rootProduct) == null ? void 0 : ee.regionsV2;
        return Y ? Object.keys(Y)
          .length : 0
      }),
      b = $(() => f.value ? Array.isArray(f.value) ? f.value.length > 0 : typeof f.value == "object" ? Object.keys(f.value)
        .length > 0 : !1 : !1),
      N = $(() => {
        const Y = c.value;
        if (!Y || Object.keys(Y)
          .length === 0) return null;
        if (r.value) {
          const ee = Object.keys(Y)
            .find(X => X === r.value || X.toLowerCase() === r.value);
          if (ee) return ee
        }
        return n.value ?? null
      }),
      B = $(() => {
        const Y = N.value;
        return Y ? P.value.find(ee => ee.key === Y) ?? null : null
      }),
      k = $(() => !N.value || !f.value ? null : f.value[N.value]),
      W = $(() => {
        const Y = f.value;
        return Y ? Object.values(Y)
          .map(ee => ee == null ? void 0 : ee.regionPriceId)
          .filter(ee => typeof ee == "string" && ee.length > 0) : []
      });
    return gt(() => e.current, () => {
      T()
    }, {
      immediate: !0
    }), {
      selectedZone: t,
      selectedRegion: r,
      zones: s,
      zone: i,
      activeZone: h,
      activeZoneId: o,
      activeZoneKey: p,
      defaultZoneId: a,
      defaultRegion: n,
      productHasZones: m,
      isZoneDisplayable: v,
      productHasRegions: u,
      productRegions: l,
      productHasRegionsV2: b,
      productRegionsV2: f,
      productRegionsV2Count: g,
      rawRegionsV2Count: L,
      activeRegionV2: B,
      activeRegionV2Data: k,
      activeRegionV2Key: N,
      productRegionsV2Entries: P,
      regionPrices: W,
      init: O,
      initHeader: _
    }
  }),
  VC = () => {
    const e = new WeakMap,
      {
        cooldown: t
      } = B_();
    return {
      add: (s, i, a) => {
        const o = l => t(() => a(l), 1);
        i == null || i.addEventListener(s, o), e.set(i, o)
      },
      remove: s => {
        const i = e.get(s);
        i && (s == null || s.removeEventListener("click", i), e.delete(s))
      }
    }
  },
  UC = () => {
    const {
      add: e,
      remove: t
    } = VC(), s = {
      click: i => {
        const a = _f(Ie()),
          o = (l, u) => {
            i.type === l && e("click", i.element, () => u(i))
          };
        o("base", ({
          element: l
        }) => {
          a.trackClick($e.PDP_Click, l)
        }), o("ratings", ({
          element: l,
          value: u
        }) => {
          u !== void 0 && u === !1 || a.track($e.PDP_Rating_Click, {
            click: {
              linkName: void 0,
              linkType: void 0,
              linkURL: void 0
            },
            content: {
              contentID: "openCloseRatings",
              contentPlaceholderID: l,
              contentName: l.dataset.qaLabel,
              contentType: "button"
            },
            eventInfo: {
              eventAction: $e.PDP_Rating_Click,
              eventCategory: "click",
              eventInteractionType: "rating-open-close"
            }
          })
        }), o("downloads-section", () => {
          a.track($e.PDP_Downloads_Section_Click, {
            eventInfo: {
              eventAction: $e.PDP_Downloads_Section_Click,
              eventCategory: "click",
              eventInteractionType: "downloads-section-open-close"
            },
            content: {
              contentID: "openCloseDownloads",
              contentPlaceholderID: {
                _prevClass: "accordion__trigger"
              },
              contentType: "button"
            }
          })
        }), o("downloads", ({
          value: l
        }) => {
          a.track($e.PDP_Downloads_Link_Click, {
            click: {
              linkName: "download_icon",
              linkType: "external",
              linkURL: l.url
            },
            eventInfo: {
              eventAction: $e.PDP_Downloads_Link_Click,
              eventCategory: "click",
              eventInteractionType: "downloads-link-click"
            },
            content: {
              contentID: l.isDisplay ? "PDP_Downloads_Display_Link" : "PDP_Downloads_Download_Click",
              contentType: "button"
            }
          })
        }), o("overlay", ({
          element: l,
          value: u
        }) => {
          if (!u) {
            a.trackClick($e.PDP_Click, l);
            return
          }
          a.track($e.PDP_Image_Click, {
            content: {
              contentID: u.id,
              contentType: Zb.galleryOverlay
            }
          })
        }), o("image", ({
          element: l,
          value: u
        }) => {
          if (!u) {
            a.trackClick($e.PDP_Click, l);
            return
          }
          a.track($e.PDP_Image_Click, {
            content: {
              contentID: u.id,
              contentPlaceholderID: l,
              contentType: u.type
            },
            file: {
              fileName: u.name,
              fileURL: u.src
            }
          })
        }), o("arrow", () => {
          a.track($e.PDP_Image_Click, {
            eventInfo: {
              eventAction: $e.PDP_Image_Click,
              eventCategory: "click",
              eventInteractionType: "arrow click"
            }
          })
        }), o("load", ({
          element: l
        }) => {
          a.trackClick($e.PDP_Click, l), a.trackClick($e.PDP_Information_Load, l)
        }), o("a-goods", () => {
          var u;
          const l = (u = it(Ie())
            .current) == null ? void 0 : u.usedProducts;
          a.track($e.PDP_A_Goods_Link_Click, {
            eventInfo: {
              eventAction: $e.PDP_A_Goods_Link_Click,
              eventCategory: "click",
              eventInteractionType: "a-goods-link-click"
            },
            content: {
              contentID: "clickAGoods",
              contentType: "button"
            },
            click: {
              linkName: "a_goods_link",
              linkType: "internal",
              linkURL: l == null ? void 0 : l.referenceUrl
            },
            products: {
              list: [{
                ...a.current
              }]
            }
          })
        }), o("installment", () => {
          a.track($e.PDP_Install_Calc_Link_Click, {
            click: {
              linkName: "pdp_install_calc_link",
              linkType: "Internal",
              linkURL: "https://www.lidl.de/payments/installment/calculator"
            },
            eventInfo: {
              eventAction: $e.PDP_Install_Calc_Link_Click,
              eventCategory: "click",
              eventInteractionType: "pdp-install-calc-link-click"
            },
            content: {
              contentID: "clickInstallmentCalculator",
              contentType: "button"
            },
            products: {
              list: [{
                ...a.current
              }]
            }
          })
        })
      },
      mouseenter: i => {
        const a = _f(Ie());
        ((l, u) => {
          i.type === l && e("mouseenter", i.element, () => u(i))
        })("image", ({
          element: l,
          value: u
        }) => {
          if (!u) {
            a.trackClick($e.PDP_Click, l);
            return
          }
          a.track($e.PDP_Image_Click, {
            content: {
              contentID: u.id,
              contentPlaceholderID: l,
              contentType: u.type
            },
            file: {
              fileName: u.name,
              fileURL: u.src
            }
          })
        })
      }
    };
    return {
      mounted: (i, a) => {
        var o;
        (o = s[a.arg ?? "click"]) == null || o.call(s, SS(i, a))
      },
      beforeUnmount: t
    }
  },
  GC = Ke(({
    vueApp: e
  }) => {
    e.directive("trackingcx", UC())
  }),
  $C = Ke(() => {}),
  WC = Ke(() => {});
var Oi = {
    exports: {}
  },
  jC = Oi.exports,
  Jf;

function KC() {
  return Jf || (Jf = 1, (function(e) {
    (function(t, r) {
      e.exports ? e.exports = r() : t.svg4everybody = r()
    })(jC, function() {
      /*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */
      function t(i, a, o) {
        if (o) {
          var l = document.createDocumentFragment(),
            u = !a.hasAttribute("viewBox") && o.getAttribute("viewBox");
          u && a.setAttribute("viewBox", u);
          for (var c = o.cloneNode(!0); c.childNodes.length;) l.appendChild(c.firstChild);
          i.appendChild(l)
        }
      }

      function r(i) {
        i.onreadystatechange = function() {
          if (i.readyState === 4) {
            var a = i._cachedDocument;
            a || (a = i._cachedDocument = document.implementation.createHTMLDocument(""), a.body.innerHTML = i.responseText, i._cachedTarget = {}), i._embeds.splice(0)
              .map(function(o) {
                var l = i._cachedTarget[o.id];
                l || (l = i._cachedTarget[o.id] = a.getElementById(o.id)), t(o.parent, o.svg, l)
              })
          }
        }, i.onreadystatechange()
      }

      function n(i) {
        function a() {
          for (var T = 0; T < R.length;) {
            var h = R[T],
              p = h.parentNode,
              v = s(p),
              P = h.getAttribute("xlink:href") || h.getAttribute("href");
            if (!P && l.attributeName && (P = h.getAttribute(l.attributeName)), v && P) {
              if (o)
                if (!l.validate || l.validate(P, v, h)) {
                  p.removeChild(h);
                  var g = P.split("#"),
                    L = g.shift(),
                    b = g.join("#");
                  if (L.length) {
                    var N = m[L];
                    N || (N = m[L] = new XMLHttpRequest, N.open("GET", L), N.send(), N._embeds = []), N._embeds.push({
                      parent: p,
                      svg: v,
                      id: b
                    }), r(N)
                  } else t(p, v, document.getElementById(b))
                } else ++T, ++O
            } else ++T
          }(!R.length || R.length - O > 0) && E(a, 67)
        }
        var o, l = Object(i),
          u = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,
          c = /\bAppleWebKit\/(\d+)\b/,
          f = /\bEdge\/12\.(\d+)\b/,
          d = /\bEdge\/.(\d+)\b/,
          _ = window.top !== window.self;
        o = "polyfill" in l ? l.polyfill : u.test(navigator.userAgent) || (navigator.userAgent.match(f) || [])[1] < 10547 || (navigator.userAgent.match(c) || [])[1] < 537 || d.test(navigator.userAgent) && _;
        var m = {},
          E = window.requestAnimationFrame || setTimeout,
          R = document.getElementsByTagName("use"),
          O = 0;
        o && a()
      }

      function s(i) {
        for (var a = i; a.nodeName.toLowerCase() !== "svg" && (a = a.parentNode););
        return a
      }
      return n
    })
  })(Oi)), Oi.exports
}
var YC = KC();
const XC = Ta(YC); /*! npm.im/object-fit-images 3.2.4 */
var Eo, Qf;

function qC() {
  if (Qf) return Eo;
  Qf = 1;
  var e = "bfred-it:object-fit-images",
    t = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,
    r = typeof Image > "u" ? {
      style: {
        "object-position": 1
      }
    } : new Image,
    n = "object-fit" in r.style,
    s = "object-position" in r.style,
    i = "background-size" in r.style,
    a = typeof r.currentSrc == "string",
    o = r.getAttribute,
    l = r.setAttribute,
    u = !1;

  function c(h, p) {
    return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + h + "' height='" + p + "'%3E%3C/svg%3E"
  }

  function f(h) {
    if (h.srcset && !a && window.picturefill) {
      var p = window.picturefill._;
      (!h[p.ns] || !h[p.ns].evaled) && p.fillImg(h, {
        reselect: !0
      }), h[p.ns].curSrc || (h[p.ns].supported = !1, p.fillImg(h, {
        reselect: !0
      })), h.currentSrc = h[p.ns].curSrc || h.src
    }
  }

  function d(h) {
    for (var p = getComputedStyle(h)
        .fontFamily, v, P = {};
      (v = t.exec(p)) !== null;) P[v[1]] = v[2];
    return P
  }

  function _(h, p, v) {
    var P = c(p || 1, v || 0);
    o.call(h, "src") !== P && l.call(h, "src", P)
  }

  function m(h, p) {
    h.naturalWidth ? p(h) : setTimeout(m, 100, h, p)
  }

  function E(h) {
    var p = d(h),
      v = h[e];
    if (p["object-fit"] = p["object-fit"] || "fill", !(!v.img && (p["object-fit"] === "fill" || !v.skipTest && n && !p["object-position"]))) {
      if (!v.img) {
        v.img = new Image(h.width, h.height), v.img.srcset = o.call(h, "data-ofi-srcset") || h.srcset, v.img.src = o.call(h, "data-ofi-src") || h.src, l.call(h, "data-ofi-src", h.src), h.srcset && l.call(h, "data-ofi-srcset", h.srcset), _(h, h.naturalWidth || h.width, h.naturalHeight || h.height), h.srcset && (h.srcset = "");
        try {
          R(h)
        } catch {
          window.console && console.warn("https://bit.ly/ofi-old-browser")
        }
      }
      f(v.img), h.style.backgroundImage = 'url("' + (v.img.currentSrc || v.img.src)
        .replace(/"/g, '\\"') + '")', h.style.backgroundPosition = p["object-position"] || "center", h.style.backgroundRepeat = "no-repeat", h.style.backgroundOrigin = "content-box", /scale-down/.test(p["object-fit"]) ? m(v.img, function() {
          v.img.naturalWidth > h.width || v.img.naturalHeight > h.height ? h.style.backgroundSize = "contain" : h.style.backgroundSize = "auto"
        }) : h.style.backgroundSize = p["object-fit"].replace("none", "auto")
        .replace("fill", "100% 100%"), m(v.img, function(P) {
          _(h, P.naturalWidth, P.naturalHeight)
        })
    }
  }

  function R(h) {
    var p = {
      get: function(P) {
        return h[e].img[P || "src"]
      },
      set: function(P, g) {
        return h[e].img[g || "src"] = P, l.call(h, "data-ofi-" + g, P), E(h), P
      }
    };
    Object.defineProperty(h, "src", p), Object.defineProperty(h, "currentSrc", {
      get: function() {
        return p.get("currentSrc")
      }
    }), Object.defineProperty(h, "srcset", {
      get: function() {
        return p.get("srcset")
      },
      set: function(v) {
        return p.set(v, "srcset")
      }
    })
  }

  function O() {
    function h(p, v) {
      return p[e] && p[e].img && (v === "src" || v === "srcset") ? p[e].img : p
    }
    s || (HTMLImageElement.prototype.getAttribute = function(p) {
      return o.call(h(this, p), p)
    }, HTMLImageElement.prototype.setAttribute = function(p, v) {
      return l.call(h(this, p), p, String(v))
    })
  }

  function T(h, p) {
    var v = !u && !h;
    if (p = p || {}, h = h || "img", s && !p.skipTest || !i) return !1;
    h === "img" ? h = document.getElementsByTagName("img") : typeof h == "string" ? h = document.querySelectorAll(h) : "length" in h || (h = [h]);
    for (var P = 0; P < h.length; P++) h[P][e] = h[P][e] || {
      skipTest: p.skipTest
    }, E(h[P]);
    v && (document.body.addEventListener("load", function(g) {
      g.target.tagName === "IMG" && T(g.target, {
        skipTest: p.skipTest
      })
    }, !0), u = !0, h = "img"), p.watchMQ && window.addEventListener("resize", T.bind(null, h, {
      skipTest: p.skipTest
    }))
  }
  return T.supportsObjectFit = n, T.supportsObjectPosition = s, O(), Eo = T, Eo
}
var ZC = qC();
const zC = Ta(ZC);
window && (XC(), zC());
const JC = Ke(() => {}),
  QC = (e, t, r = 1) => {
    const n = new Date(Date.now() + r * 864e5)
      .toUTCString();
    document.cookie = `${encodeURIComponent(e)}=${encodeURIComponent(t)}; expires=${n}; path=/`
  },
  eA = e => {
    const t = encodeURIComponent(e),
      n = new RegExp(`(?:^|;\\s*)${t}=([^;]*)`)
      .exec(document.cookie);
    return n ? decodeURIComponent(n[1]) : null
  },
  hO = e => e ? `https://img.youtube.com/vi/${e}/0.jpg` : void 0,
  tA = Ke(e => {
    if (!e) return;
    const t = 10,
      r = "cache_bypass_attempts",
      n = 1,
      s = ["resolve component", "app initialization ul:", "fetch dynamically imported"],
      i = l => {
        const u = (l == null ? void 0 : l.message) ?? "",
          c = l.filename ?? "",
          f = /\.(js|json)/.test(u) && u.includes("/details-view-dist/") || c.includes("/details-view-dist/"),
          d = s.some(_ => u.includes(_));
        return f || d
      },
      a = () => {
        const l = parseInt(eA(r) ?? "0", 10);
        if (l >= t) return;
        QC(r, (l + 1)
          .toString(), n);
        const u = new URL(window.location.href);
        u.searchParams.set("disp", Date.now()
          .toString()), window.location.href = u.toString()
      },
      o = l => {
        i(l) && a()
      };
    e.hook("app:chunkError", a), e.hook("app:error", o), e.hook("vue:error", o), window.addEventListener("error", ({
      error: l
    }) => {
      l instanceof Error && i(l) && a()
    })
  }),
  rA = Ke({
    name: "one-cx",
    setup: () => {
      const e = gT(Ie()),
        {
          query: t
        } = os(),
        r = void 0;
      e.init(t, r)
    }
  }),
  nA = Ke(e => {
    const t = dr(Ie()),
      r = +Fr()
      .public.apiTimeout;
    globalThis.$fetch = $fetch.create({
      timeout: r,
      retry: !1
    });
    const n = {
      async getDetail(s) {
        return $fetch(`/p/api/detail/${s}/${t.country}/${t.language}`)
      },
      async getStoreAvailability(s, i) {
        return $fetch(`/p/api/storestock/${t.country}/${t.language}/${s}?storeids=${i}`, {
          timeout: r * 4
        })
      },
      async getProductErpByProductId(s) {
        return $fetch(`/p/api/erp/${s}/${t.country}/${t.language}`)
      },
      async getDigitalConditions(s, i) {
        return $fetch(`/p/api/digital/${i}/${s}/${t.country}/${t.language}`)
      },
      async getDeliveryCharges(s, i) {
        return $fetch(`/p/api/delivery-charges/${s}/${t.country}/${t.language}?zone=${i}`)
      },
      async getExpectedDeliveryDate(s, i, a) {
        const o = {
          country: t.country,
          languageId: t.language,
          articleNumber: s,
          zipCode: i
        };
        return a && (o.zone = a), $fetch("/vlt/edd-api/v1/my-api/edd/v1", {
          params: o
        })
      }
    };
    e.provide("api", n)
  }),
  sA = Ke(e => {}),
  iA = (e, t) => {
    const {
      hash: r,
      pathname: n
    } = new URL(t);
    return !!r && n === e
  },
  aA = Ke(() => {
    const e = NC(Ie());
    e.init(os()
      .query), e.isFlyer && document.addEventListener("click", t => {
      const r = t.target.closest("a");
      r != null && r.href && (iA(Ut()
        .currentRoute.value.path, r.href) || (t.preventDefault(), window.open(r.href, "_blank")))
    })
  }),
  oA = Ke(e => {
    const t = !!Fr()
      .public[`gtmId${dr(Sa()).country}`],
      r = {
        init() {
          window.dataLayer = window.dataLayer || []
        },
        pushEvent(n) {
          t && H_(n)
        }
      };
    e.provide("googleTagManager", r)
  }),
  lA = async (e, t) => {
    if (e === ge.ix_IX) {
      const r = await t(ge.en_GB);
      return r.ix_IX = r.en_GB, r
    }
    try {
      return await t(ge[e])
    } catch (r) {
      console.warn("Requested locale is not listed in core's /stores/locale or translation file not found, falling back to en_GB for this locale", r);
      const n = await t(ge.en_GB);
      return n[e] = n.en_GB, n
    }
  };

function ed(e, t) {
  let r;
  return e === 1 ? r = 0 : e > 1 && e < 5 ? r = 1 : r = 2, t < 3 && r === 2 ? 1 : r
}

function cA(e, t) {
  let r;
  return e === 1 ? r = 0 : e >= 12 && e <= 14 ? r = 2 : e % 10 >= 2 && e % 10 <= 4 ? r = 1 : r = 2, t < 3 && r === 2 ? 1 : r
}
const uA = {
  sk_SK: ed,
  pl_PL: cA,
  cs_CZ: ed
};
async function fA(e) {
  let t, r, n, s;
  return await {
    en_GB: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./3QLd_dUd.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./BMS_sTJI.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, n = (await G(async () => {
          const {
            default: a
          } = await import("./IGMo9NUf.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, s = (await G(async () => {
          const {
            default: a
          } = await import("./CUBQLUx7.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    de_DE: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./Co8qsVyI.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./sU1ILaUV.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, n = (await G(async () => {
          const {
            default: a
          } = await import("./_3Ne_T-b.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, s = (await G(async () => {
          const {
            default: a
          } = await import("./BnNnMjV5.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    pl_PL: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./CmAMTOeO.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./Bvz_J915.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, n = (await G(async () => {
          const {
            default: a
          } = await import("./8a9tu1L5.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, s = (await G(async () => {
          const {
            default: a
          } = await import("./Brsnps-L.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    cs_CZ: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./BL3wgg-D.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./BbGxqhkh.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, n = (await G(async () => {
          const {
            default: a
          } = await import("./CNxc4HVb.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, s = (await G(async () => {
          const {
            default: a
          } = await import("./BSNXjNKx.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    da_DK: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./D_26W0za.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./B-serevd.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, n = (await G(async () => {
          const {
            default: a
          } = await import("./BqbTtTIm.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, s = (await G(async () => {
          const {
            default: a
          } = await import("./B7bR4yXP.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    de_AT: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./Qp_GE2GV.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./B_Icehph.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, n = (await G(async () => {
          const {
            default: a
          } = await import("./CMzaJsRo.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, s = (await G(async () => {
          const {
            default: a
          } = await import("./CPO0z9nN.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    de_CH: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./BHz1TDWL.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./IE6QdhJ5.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, n = (await G(async () => {
          const {
            default: a
          } = await import("./1fn6jFP4.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, s = (await G(async () => {
          const {
            default: a
          } = await import("./Ct2cb97-.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    el_CY: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./CSXAmzn4.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./Y6R_XFF2.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, s = (await G(async () => {
          const {
            default: a
          } = await import("./DevU0oFL.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    el_GR: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./D1dzQD6v.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./DlYygIGV.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, s = (await G(async () => {
          const {
            default: a
          } = await import("./B8yjFEYq.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    en_CY: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./CTJbPuIk.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./DZh5skP0.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, s = (await G(async () => {
          const {
            default: a
          } = await import("./ch6Gu6ti.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    en_IE: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./f2hXr8vz.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./H95Mhuy-.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, s = (await G(async () => {
          const {
            default: a
          } = await import("./D_WZ2xCC.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    en_MT: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./C_FGC2LM.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./DDt5i6yo.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, s = (await G(async () => {
          const {
            default: a
          } = await import("./BdCpwljS.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    en_XI: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./BWYxB9CJ.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./BIiG897a.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, s = (await G(async () => {
          const {
            default: a
          } = await import("./D0EIelm3.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    es_ES: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./Ctcfw11K.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./DFgq8Uwt.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, n = (await G(async () => {
          const {
            default: a
          } = await import("./wK9MFP66.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, s = (await G(async () => {
          const {
            default: a
          } = await import("./YH3cY2JA.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    en_US: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./8pbxjSKu.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./DljC_yYj.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, s = (await G(async () => {
          const {
            default: a
          } = await import("./BhKAfwoV.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    et_EE: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./6YIStQA4.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./Cf0uPkKJ.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, s = (await G(async () => {
          const {
            default: a
          } = await import("./xZgnRHJi.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    fi_FI: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./DcPOG4bW.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./C3NXkbJk.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, s = (await G(async () => {
          const {
            default: a
          } = await import("./hdiU5091.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    fr_BE: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./BbEpdAmt.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./Db1O3Ey7.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, n = (await G(async () => {
          const {
            default: a
          } = await import("./BN7HFL2d.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, s = (await G(async () => {
          const {
            default: a
          } = await import("./BM2Tx8TA.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    fr_CH: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./BvuPKmfU.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./Cf5EZ7uc.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, n = (await G(async () => {
          const {
            default: a
          } = await import("./DIS-JF1d.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, s = (await G(async () => {
          const {
            default: a
          } = await import("./BaZifFYB.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    fr_FR: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./DwObSMI-.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./DXi_oUYz.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, n = (await G(async () => {
          const {
            default: a
          } = await import("./CBsY2I9w.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, s = (await G(async () => {
          const {
            default: a
          } = await import("./DYBCavh3.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    fr_LU: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./BdKWUU6F.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./t0EsZFXC.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, s = (await G(async () => {
          const {
            default: a
          } = await import("./BpwFHH9n.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    hr_HR: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./yY5bwr6j.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./D_y7Ngh4.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, s = (await G(async () => {
          const {
            default: a
          } = await import("./Byq9q2Bf.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    hu_HU: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./LyuJys-s.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./D_Z95ZHv.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, n = (await G(async () => {
          const {
            default: a
          } = await import("./Dy-Hfhmb.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, s = (await G(async () => {
          const {
            default: a
          } = await import("./uC3-6iaj.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    it_CH: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./DIhdcc2D.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./DXVZk0y7.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, n = (await G(async () => {
          const {
            default: a
          } = await import("./CpuUSgNQ.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, s = (await G(async () => {
          const {
            default: a
          } = await import("./CEwmj8XS.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    it_IT: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./BaZ67Jrq.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./DDKU3SyM.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, n = (await G(async () => {
          const {
            default: a
          } = await import("./YYe9wN5I.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, s = (await G(async () => {
          const {
            default: a
          } = await import("./35GomAOk.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    lt_LT: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./D3h1xZ-0.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./CzPEYpcD.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, s = (await G(async () => {
          const {
            default: a
          } = await import("./DEefjcEg.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    lv_LV: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./BfGdGYNh.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./CzLP07Az.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, s = (await G(async () => {
          const {
            default: a
          } = await import("./CB6AtmLC.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    nl_BE: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./DHhHudB1.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./1X0Lvriy.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, n = (await G(async () => {
          const {
            default: a
          } = await import("./B41QKLEy.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, s = (await G(async () => {
          const {
            default: a
          } = await import("./B7LWdgrY.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    nl_NL: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./1RlC8SYD.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./DUyzAWK_.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, n = (await G(async () => {
          const {
            default: a
          } = await import("./Xv_DXy-k.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, s = (await G(async () => {
          const {
            default: a
          } = await import("./DPsPnLIV.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    pt_PT: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./Co29Y7Lb.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./Cb_tfdN9.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, s = (await G(async () => {
          const {
            default: a
          } = await import("./CX_FywwR.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    ro_RO: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./DsO9Jl0V.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./UAb-8hyl.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, s = (await G(async () => {
          const {
            default: a
          } = await import("./CqdZSn5S.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    ru_EE: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./izoecZI0.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./DsWIpDPd.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, s = (await G(async () => {
          const {
            default: a
          } = await import("./CCEiUZXS.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    ru_LV: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./CteLfkBX.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./BkmSUoXg.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, s = (await G(async () => {
          const {
            default: a
          } = await import("./Dp9-zI6d.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    sk_SK: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./B2TxY0rs.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./DFLUkduc.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, n = (await G(async () => {
          const {
            default: a
          } = await import("./CYdmGw9r.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, s = (await G(async () => {
          const {
            default: a
          } = await import("./utokuexj.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    sl_SI: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./hwGrirQG.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./DVPPdQrf.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, s = (await G(async () => {
          const {
            default: a
          } = await import("./BGkutw4b.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    sr_RS: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./BxfouKXQ.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./DmJ8Tngx.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, s = (await G(async () => {
          const {
            default: a
          } = await import("./BQWkIlCq.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    sv_SE: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./DvT2Q6gM.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./DMOnYtBa.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, n = (await G(async () => {
          const {
            default: a
          } = await import("./Ch8wwUVd.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, s = (await G(async () => {
          const {
            default: a
          } = await import("./DXI5nat_.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    },
    bg_BG: async () => {
      t = (await G(async () => {
          const {
            default: a
          } = await import("./3urEdExh.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default, r = (await G(async () => {
          const {
            default: a
          } = await import("./PY3aPxwr.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default.Product, s = (await G(async () => {
          const {
            default: a
          } = await import("./DfAJ5qNK.js");
          return {
            default: a
          }
        }, [], import.meta.url))
        .default
    }
  } [e](), {
    [e]: {
      ...t,
      Product: {
        ...t.Product,
        ...r
      },
      ...n,
      ...s
    }
  }
}
const dA = Ke(async ({
  vueApp: e
}) => {
  let t, r;
  const n = dr(Sa());
  if (n.locale in ge) e.use(TC({
    legacy: !1,
    locale: n.locale,
    warnHtmlMessage: !1,
    fallbackWarn: !1,
    silentTranslationWarn: !0,
    silentFallbackWarn: !0,
    messages: ([t, r] = zr(() => lA(n.locale, fA)), t = await t, r(), t),
    pluralRules: uA
  }));
  else throw Or({
    message: "Cannot determine locale",
    statusCode: 400
  })
});
var wo = {
  exports: {}
};
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
var td;

function hA() {
  return td || (td = 1, (function(e) {
    (function(t, r, n, s) {
      var i = ["", "webkit", "Moz", "MS", "ms", "o"],
        a = r.createElement("div"),
        o = "function",
        l = Math.round,
        u = Math.abs,
        c = Date.now;

      function f(w, A, M) {
        return setTimeout(h(w, M), A)
      }

      function d(w, A, M) {
        return Array.isArray(w) ? (_(w, M[A], M), !0) : !1
      }

      function _(w, A, M) {
        var U;
        if (w)
          if (w.forEach) w.forEach(A, M);
          else if (w.length !== s)
          for (U = 0; U < w.length;) A.call(M, w[U], U, w), U++;
        else
          for (U in w) w.hasOwnProperty(U) && A.call(M, w[U], U, w)
      }

      function m(w, A, M) {
        var U = "DEPRECATED METHOD: " + A + `
` + M + ` AT 
`;
        return function() {
          var te = new Error("get-stack-trace"),
            ce = te && te.stack ? te.stack.replace(/^[^\(]+?[\n$]/gm, "")
            .replace(/^\s+at\s+/gm, "")
            .replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
            Te = t.console && (t.console.warn || t.console.log);
          return Te && Te.call(t.console, U, ce), w.apply(this, arguments)
        }
      }
      var E;
      typeof Object.assign != "function" ? E = function(A) {
        if (A === s || A === null) throw new TypeError("Cannot convert undefined or null to object");
        for (var M = Object(A), U = 1; U < arguments.length; U++) {
          var te = arguments[U];
          if (te !== s && te !== null)
            for (var ce in te) te.hasOwnProperty(ce) && (M[ce] = te[ce])
        }
        return M
      } : E = Object.assign;
      var R = m(function(A, M, U) {
          for (var te = Object.keys(M), ce = 0; ce < te.length;)(!U || U && A[te[ce]] === s) && (A[te[ce]] = M[te[ce]]), ce++;
          return A
        }, "extend", "Use `assign`."),
        O = m(function(A, M) {
          return R(A, M, !0)
        }, "merge", "Use `assign`.");

      function T(w, A, M) {
        var U = A.prototype,
          te;
        te = w.prototype = Object.create(U), te.constructor = w, te._super = U, M && E(te, M)
      }

      function h(w, A) {
        return function() {
          return w.apply(A, arguments)
        }
      }

      function p(w, A) {
        return typeof w == o ? w.apply(A && A[0] || s, A) : w
      }

      function v(w, A) {
        return w === s ? A : w
      }

      function P(w, A, M) {
        _(N(A), function(U) {
          w.addEventListener(U, M, !1)
        })
      }

      function g(w, A, M) {
        _(N(A), function(U) {
          w.removeEventListener(U, M, !1)
        })
      }

      function L(w, A) {
        for (; w;) {
          if (w == A) return !0;
          w = w.parentNode
        }
        return !1
      }

      function b(w, A) {
        return w.indexOf(A) > -1
      }

      function N(w) {
        return w.trim()
          .split(/\s+/g)
      }

      function B(w, A, M) {
        if (w.indexOf && !M) return w.indexOf(A);
        for (var U = 0; U < w.length;) {
          if (M && w[U][M] == A || !M && w[U] === A) return U;
          U++
        }
        return -1
      }

      function k(w) {
        return Array.prototype.slice.call(w, 0)
      }

      function W(w, A, M) {
        for (var U = [], te = [], ce = 0; ce < w.length;) {
          var Te = w[ce][A];
          B(te, Te) < 0 && U.push(w[ce]), te[ce] = Te, ce++
        }
        return U = U.sort(function(_t, wt) {
          return _t[A] > wt[A]
        }), U
      }

      function Y(w, A) {
        for (var M, U, te = A[0].toUpperCase() + A.slice(1), ce = 0; ce < i.length;) {
          if (M = i[ce], U = M ? M + te : A, U in w) return U;
          ce++
        }
        return s
      }
      var ee = 1;

      function X() {
        return ee++
      }

      function re(w) {
        var A = w.ownerDocument || w;
        return A.defaultView || A.parentWindow || t
      }
      var se = /mobile|tablet|ip(ad|hone|od)|android/i,
        de = "ontouchstart" in t,
        Pe = Y(t, "PointerEvent") !== s,
        we = de && se.test(navigator.userAgent),
        ye = "touch",
        Ye = "pen",
        He = "mouse",
        De = "kinect",
        ke = 25,
        H = 1,
        ne = 2,
        Q = 4,
        ae = 8,
        he = 1,
        Ee = 2,
        I = 4,
        S = 8,
        F = 16,
        q = Ee | I,
        j = S | F,
        J = q | j,
        ie = ["x", "y"],
        C = ["clientX", "clientY"];

      function y(w, A) {
        var M = this;
        this.manager = w, this.callback = A, this.element = w.element, this.target = w.options.inputTarget, this.domHandler = function(U) {
          p(w.options.enable, [w]) && M.handler(U)
        }, this.init()
      }
      y.prototype = {
        handler: function() {},
        init: function() {
          this.evEl && P(this.element, this.evEl, this.domHandler), this.evTarget && P(this.target, this.evTarget, this.domHandler), this.evWin && P(re(this.element), this.evWin, this.domHandler)
        },
        destroy: function() {
          this.evEl && g(this.element, this.evEl, this.domHandler), this.evTarget && g(this.target, this.evTarget, this.domHandler), this.evWin && g(re(this.element), this.evWin, this.domHandler)
        }
      };

      function D(w) {
        var A, M = w.options.inputClass;
        return M ? A = M : Pe ? A = Ia : we ? A = Qs : de ? A = La : A = sn, new A(w, K)
      }

      function K(w, A, M) {
        var U = M.pointers.length,
          te = M.changedPointers.length,
          ce = A & H && U - te === 0,
          Te = A & (Q | ae) && U - te === 0;
        M.isFirst = !!ce, M.isFinal = !!Te, ce && (w.session = {}), M.eventType = A, z(w, M), w.emit("hammer.input", M), w.recognize(M), w.session.prevInput = M
      }

      function z(w, A) {
        var M = w.session,
          U = A.pointers,
          te = U.length;
        M.firstInput || (M.firstInput = V(A)), te > 1 && !M.firstMultiple ? M.firstMultiple = V(A) : te === 1 && (M.firstMultiple = !1);
        var ce = M.firstInput,
          Te = M.firstMultiple,
          ut = Te ? Te.center : ce.center,
          _t = A.center = le(U);
        A.timeStamp = c(), A.deltaTime = A.timeStamp - ce.timeStamp, A.angle = Ge(ut, _t), A.distance = Re(ut, _t), Z(M, A), A.offsetDirection = Ae(A.deltaX, A.deltaY);
        var wt = ue(A.deltaTime, A.deltaX, A.deltaY);
        A.overallVelocityX = wt.x, A.overallVelocityY = wt.y, A.overallVelocity = u(wt.x) > u(wt.y) ? wt.x : wt.y, A.scale = Te ? Gt(Te.pointers, U) : 1, A.rotation = Te ? rt(Te.pointers, U) : 0, A.maxPointers = M.prevInput ? A.pointers.length > M.prevInput.maxPointers ? A.pointers.length : M.prevInput.maxPointers : A.pointers.length, x(M, A);
        var nr = w.element;
        L(A.srcEvent.target, nr) && (nr = A.srcEvent.target), A.target = nr
      }

      function Z(w, A) {
        var M = A.center,
          U = w.offsetDelta || {},
          te = w.prevDelta || {},
          ce = w.prevInput || {};
        (A.eventType === H || ce.eventType === Q) && (te = w.prevDelta = {
          x: ce.deltaX || 0,
          y: ce.deltaY || 0
        }, U = w.offsetDelta = {
          x: M.x,
          y: M.y
        }), A.deltaX = te.x + (M.x - U.x), A.deltaY = te.y + (M.y - U.y)
      }

      function x(w, A) {
        var M = w.lastInterval || A,
          U = A.timeStamp - M.timeStamp,
          te, ce, Te, ut;
        if (A.eventType != ae && (U > ke || M.velocity === s)) {
          var _t = A.deltaX - M.deltaX,
            wt = A.deltaY - M.deltaY,
            nr = ue(U, _t, wt);
          ce = nr.x, Te = nr.y, te = u(nr.x) > u(nr.y) ? nr.x : nr.y, ut = Ae(_t, wt), w.lastInterval = A
        } else te = M.velocity, ce = M.velocityX, Te = M.velocityY, ut = M.direction;
        A.velocity = te, A.velocityX = ce, A.velocityY = Te, A.direction = ut
      }

      function V(w) {
        for (var A = [], M = 0; M < w.pointers.length;) A[M] = {
          clientX: l(w.pointers[M].clientX),
          clientY: l(w.pointers[M].clientY)
        }, M++;
        return {
          timeStamp: c(),
          pointers: A,
          center: le(A),
          deltaX: w.deltaX,
          deltaY: w.deltaY
        }
      }

      function le(w) {
        var A = w.length;
        if (A === 1) return {
          x: l(w[0].clientX),
          y: l(w[0].clientY)
        };
        for (var M = 0, U = 0, te = 0; te < A;) M += w[te].clientX, U += w[te].clientY, te++;
        return {
          x: l(M / A),
          y: l(U / A)
        }
      }

      function ue(w, A, M) {
        return {
          x: A / w || 0,
          y: M / w || 0
        }
      }

      function Ae(w, A) {
        return w === A ? he : u(w) >= u(A) ? w < 0 ? Ee : I : A < 0 ? S : F
      }

      function Re(w, A, M) {
        M || (M = ie);
        var U = A[M[0]] - w[M[0]],
          te = A[M[1]] - w[M[1]];
        return Math.sqrt(U * U + te * te)
      }

      function Ge(w, A, M) {
        M || (M = ie);
        var U = A[M[0]] - w[M[0]],
          te = A[M[1]] - w[M[1]];
        return Math.atan2(te, U) * 180 / Math.PI
      }

      function rt(w, A) {
        return Ge(A[1], A[0], C) + Ge(w[1], w[0], C)
      }

      function Gt(w, A) {
        return Re(A[0], A[1], C) / Re(w[0], w[1], C)
      }
      var nn = {
          mousedown: H,
          mousemove: ne,
          mouseup: Q
        },
        ht = "mousedown",
        xt = "mousemove mouseup";

      function sn() {
        this.evEl = ht, this.evWin = xt, this.pressed = !1, y.apply(this, arguments)
      }
      T(sn, y, {
        handler: function(A) {
          var M = nn[A.type];
          M & H && A.button === 0 && (this.pressed = !0), M & ne && A.which !== 1 && (M = Q), this.pressed && (M & Q && (this.pressed = !1), this.callback(this.manager, M, {
            pointers: [A],
            changedPointers: [A],
            pointerType: He,
            srcEvent: A
          }))
        }
      });
      var Js = {
          pointerdown: H,
          pointermove: ne,
          pointerup: Q,
          pointercancel: ae,
          pointerout: ae
        },
        Pp = {
          2: ye,
          3: Ye,
          4: He,
          5: De
        },
        lc = "pointerdown",
        cc = "pointermove pointerup pointercancel";
      t.MSPointerEvent && !t.PointerEvent && (lc = "MSPointerDown", cc = "MSPointerMove MSPointerUp MSPointerCancel");

      function Ia() {
        this.evEl = lc, this.evWin = cc, y.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
      }
      T(Ia, y, {
        handler: function(A) {
          var M = this.store,
            U = !1,
            te = A.type.toLowerCase()
            .replace("ms", ""),
            ce = Js[te],
            Te = Pp[A.pointerType] || A.pointerType,
            ut = Te == ye,
            _t = B(M, A.pointerId, "pointerId");
          ce & H && (A.button === 0 || ut) ? _t < 0 && (M.push(A), _t = M.length - 1) : ce & (Q | ae) && (U = !0), !(_t < 0) && (M[_t] = A, this.callback(this.manager, ce, {
            pointers: M,
            changedPointers: [A],
            pointerType: Te,
            srcEvent: A
          }), U && M.splice(_t, 1))
        }
      });
      var Cp = {
          touchstart: H,
          touchmove: ne,
          touchend: Q,
          touchcancel: ae
        },
        Ap = "touchstart",
        Rp = "touchstart touchmove touchend touchcancel";

      function uc() {
        this.evTarget = Ap, this.evWin = Rp, this.started = !1, y.apply(this, arguments)
      }
      T(uc, y, {
        handler: function(A) {
          var M = Cp[A.type];
          if (M === H && (this.started = !0), !!this.started) {
            var U = Op.call(this, A, M);
            M & (Q | ae) && U[0].length - U[1].length === 0 && (this.started = !1), this.callback(this.manager, M, {
              pointers: U[0],
              changedPointers: U[1],
              pointerType: ye,
              srcEvent: A
            })
          }
        }
      });

      function Op(w, A) {
        var M = k(w.touches),
          U = k(w.changedTouches);
        return A & (Q | ae) && (M = W(M.concat(U), "identifier")), [M, U]
      }
      var Ip = {
          touchstart: H,
          touchmove: ne,
          touchend: Q,
          touchcancel: ae
        },
        Lp = "touchstart touchmove touchend touchcancel";

      function Qs() {
        this.evTarget = Lp, this.targetIds = {}, y.apply(this, arguments)
      }
      T(Qs, y, {
        handler: function(A) {
          var M = Ip[A.type],
            U = Dp.call(this, A, M);
          U && this.callback(this.manager, M, {
            pointers: U[0],
            changedPointers: U[1],
            pointerType: ye,
            srcEvent: A
          })
        }
      });

      function Dp(w, A) {
        var M = k(w.touches),
          U = this.targetIds;
        if (A & (H | ne) && M.length === 1) return U[M[0].identifier] = !0, [M, M];
        var te, ce, Te = k(w.changedTouches),
          ut = [],
          _t = this.target;
        if (ce = M.filter(function(wt) {
            return L(wt.target, _t)
          }), A === H)
          for (te = 0; te < ce.length;) U[ce[te].identifier] = !0, te++;
        for (te = 0; te < Te.length;) U[Te[te].identifier] && ut.push(Te[te]), A & (Q | ae) && delete U[Te[te].identifier], te++;
        if (ut.length) return [W(ce.concat(ut), "identifier"), ut]
      }
      var kp = 2500,
        fc = 25;

      function La() {
        y.apply(this, arguments);
        var w = h(this.handler, this);
        this.touch = new Qs(this.manager, w), this.mouse = new sn(this.manager, w), this.primaryTouch = null, this.lastTouches = []
      }
      T(La, y, {
        handler: function(A, M, U) {
          var te = U.pointerType == ye,
            ce = U.pointerType == He;
          if (!(ce && U.sourceCapabilities && U.sourceCapabilities.firesTouchEvents)) {
            if (te) Np.call(this, M, U);
            else if (ce && Mp.call(this, U)) return;
            this.callback(A, M, U)
          }
        },
        destroy: function() {
          this.touch.destroy(), this.mouse.destroy()
        }
      });

      function Np(w, A) {
        w & H ? (this.primaryTouch = A.changedPointers[0].identifier, dc.call(this, A)) : w & (Q | ae) && dc.call(this, A)
      }

      function dc(w) {
        var A = w.changedPointers[0];
        if (A.identifier === this.primaryTouch) {
          var M = {
            x: A.clientX,
            y: A.clientY
          };
          this.lastTouches.push(M);
          var U = this.lastTouches,
            te = function() {
              var ce = U.indexOf(M);
              ce > -1 && U.splice(ce, 1)
            };
          setTimeout(te, kp)
        }
      }

      function Mp(w) {
        for (var A = w.srcEvent.clientX, M = w.srcEvent.clientY, U = 0; U < this.lastTouches.length; U++) {
          var te = this.lastTouches[U],
            ce = Math.abs(A - te.x),
            Te = Math.abs(M - te.y);
          if (ce <= fc && Te <= fc) return !0
        }
        return !1
      }
      var hc = Y(a.style, "touchAction"),
        _c = hc !== s,
        pc = "compute",
        mc = "auto",
        Da = "manipulation",
        an = "none",
        cs = "pan-x",
        us = "pan-y",
        ei = Fp();

      function ka(w, A) {
        this.manager = w, this.set(A)
      }
      ka.prototype = {
        set: function(w) {
          w == pc && (w = this.compute()), _c && this.manager.element.style && ei[w] && (this.manager.element.style[hc] = w), this.actions = w.toLowerCase()
            .trim()
        },
        update: function() {
          this.set(this.manager.options.touchAction)
        },
        compute: function() {
          var w = [];
          return _(this.manager.recognizers, function(A) {
            p(A.options.enable, [A]) && (w = w.concat(A.getTouchAction()))
          }), xp(w.join(" "))
        },
        preventDefaults: function(w) {
          var A = w.srcEvent,
            M = w.offsetDirection;
          if (this.manager.session.prevented) {
            A.preventDefault();
            return
          }
          var U = this.actions,
            te = b(U, an) && !ei[an],
            ce = b(U, us) && !ei[us],
            Te = b(U, cs) && !ei[cs];
          if (te) {
            var ut = w.pointers.length === 1,
              _t = w.distance < 2,
              wt = w.deltaTime < 250;
            if (ut && _t && wt) return
          }
          if (!(Te && ce) && (te || ce && M & q || Te && M & j)) return this.preventSrc(A)
        },
        preventSrc: function(w) {
          this.manager.session.prevented = !0, w.preventDefault()
        }
      };

      function xp(w) {
        if (b(w, an)) return an;
        var A = b(w, cs),
          M = b(w, us);
        return A && M ? an : A || M ? A ? cs : us : b(w, Da) ? Da : mc
      }

      function Fp() {
        if (!_c) return !1;
        var w = {},
          A = t.CSS && t.CSS.supports;
        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(M) {
          w[M] = A ? t.CSS.supports("touch-action", M) : !0
        }), w
      }
      var ti = 1,
        Ft = 2,
        Ln = 4,
        Hr = 8,
        hr = Hr,
        fs = 16,
        rr = 32;

      function _r(w) {
        this.options = E({}, this.defaults, w || {}), this.id = X(), this.manager = null, this.options.enable = v(this.options.enable, !0), this.state = ti, this.simultaneous = {}, this.requireFail = []
      }
      _r.prototype = {
        defaults: {},
        set: function(w) {
          return E(this.options, w), this.manager && this.manager.touchAction.update(), this
        },
        recognizeWith: function(w) {
          if (d(w, "recognizeWith", this)) return this;
          var A = this.simultaneous;
          return w = ri(w, this), A[w.id] || (A[w.id] = w, w.recognizeWith(this)), this
        },
        dropRecognizeWith: function(w) {
          return d(w, "dropRecognizeWith", this) ? this : (w = ri(w, this), delete this.simultaneous[w.id], this)
        },
        requireFailure: function(w) {
          if (d(w, "requireFailure", this)) return this;
          var A = this.requireFail;
          return w = ri(w, this), B(A, w) === -1 && (A.push(w), w.requireFailure(this)), this
        },
        dropRequireFailure: function(w) {
          if (d(w, "dropRequireFailure", this)) return this;
          w = ri(w, this);
          var A = B(this.requireFail, w);
          return A > -1 && this.requireFail.splice(A, 1), this
        },
        hasRequireFailures: function() {
          return this.requireFail.length > 0
        },
        canRecognizeWith: function(w) {
          return !!this.simultaneous[w.id]
        },
        emit: function(w) {
          var A = this,
            M = this.state;

          function U(te) {
            A.manager.emit(te, w)
          }
          M < Hr && U(A.options.event + gc(M)), U(A.options.event), w.additionalEvent && U(w.additionalEvent), M >= Hr && U(A.options.event + gc(M))
        },
        tryEmit: function(w) {
          if (this.canEmit()) return this.emit(w);
          this.state = rr
        },
        canEmit: function() {
          for (var w = 0; w < this.requireFail.length;) {
            if (!(this.requireFail[w].state & (rr | ti))) return !1;
            w++
          }
          return !0
        },
        recognize: function(w) {
          var A = E({}, w);
          if (!p(this.options.enable, [this, A])) {
            this.reset(), this.state = rr;
            return
          }
          this.state & (hr | fs | rr) && (this.state = ti), this.state = this.process(A), this.state & (Ft | Ln | Hr | fs) && this.tryEmit(A)
        },
        process: function(w) {},
        getTouchAction: function() {},
        reset: function() {}
      };

      function gc(w) {
        return w & fs ? "cancel" : w & Hr ? "end" : w & Ln ? "move" : w & Ft ? "start" : ""
      }

      function vc(w) {
        return w == F ? "down" : w == S ? "up" : w == Ee ? "left" : w == I ? "right" : ""
      }

      function ri(w, A) {
        var M = A.manager;
        return M ? M.get(w) : w
      }

      function $t() {
        _r.apply(this, arguments)
      }
      T($t, _r, {
        defaults: {
          pointers: 1
        },
        attrTest: function(w) {
          var A = this.options.pointers;
          return A === 0 || w.pointers.length === A
        },
        process: function(w) {
          var A = this.state,
            M = w.eventType,
            U = A & (Ft | Ln),
            te = this.attrTest(w);
          return U && (M & ae || !te) ? A | fs : U || te ? M & Q ? A | Hr : A & Ft ? A | Ln : Ft : rr
        }
      });

      function ni() {
        $t.apply(this, arguments), this.pX = null, this.pY = null
      }
      T(ni, $t, {
        defaults: {
          event: "pan",
          threshold: 10,
          pointers: 1,
          direction: J
        },
        getTouchAction: function() {
          var w = this.options.direction,
            A = [];
          return w & q && A.push(us), w & j && A.push(cs), A
        },
        directionTest: function(w) {
          var A = this.options,
            M = !0,
            U = w.distance,
            te = w.direction,
            ce = w.deltaX,
            Te = w.deltaY;
          return te & A.direction || (A.direction & q ? (te = ce === 0 ? he : ce < 0 ? Ee : I, M = ce != this.pX, U = Math.abs(w.deltaX)) : (te = Te === 0 ? he : Te < 0 ? S : F, M = Te != this.pY, U = Math.abs(w.deltaY))), w.direction = te, M && U > A.threshold && te & A.direction
        },
        attrTest: function(w) {
          return $t.prototype.attrTest.call(this, w) && (this.state & Ft || !(this.state & Ft) && this.directionTest(w))
        },
        emit: function(w) {
          this.pX = w.deltaX, this.pY = w.deltaY;
          var A = vc(w.direction);
          A && (w.additionalEvent = this.options.event + A), this._super.emit.call(this, w)
        }
      });

      function Na() {
        $t.apply(this, arguments)
      }
      T(Na, $t, {
        defaults: {
          event: "pinch",
          threshold: 0,
          pointers: 2
        },
        getTouchAction: function() {
          return [an]
        },
        attrTest: function(w) {
          return this._super.attrTest.call(this, w) && (Math.abs(w.scale - 1) > this.options.threshold || this.state & Ft)
        },
        emit: function(w) {
          if (w.scale !== 1) {
            var A = w.scale < 1 ? "in" : "out";
            w.additionalEvent = this.options.event + A
          }
          this._super.emit.call(this, w)
        }
      });

      function Ma() {
        _r.apply(this, arguments), this._timer = null, this._input = null
      }
      T(Ma, _r, {
        defaults: {
          event: "press",
          pointers: 1,
          time: 251,
          threshold: 9
        },
        getTouchAction: function() {
          return [mc]
        },
        process: function(w) {
          var A = this.options,
            M = w.pointers.length === A.pointers,
            U = w.distance < A.threshold,
            te = w.deltaTime > A.time;
          if (this._input = w, !U || !M || w.eventType & (Q | ae) && !te) this.reset();
          else if (w.eventType & H) this.reset(), this._timer = f(function() {
            this.state = hr, this.tryEmit()
          }, A.time, this);
          else if (w.eventType & Q) return hr;
          return rr
        },
        reset: function() {
          clearTimeout(this._timer)
        },
        emit: function(w) {
          this.state === hr && (w && w.eventType & Q ? this.manager.emit(this.options.event + "up", w) : (this._input.timeStamp = c(), this.manager.emit(this.options.event, this._input)))
        }
      });

      function xa() {
        $t.apply(this, arguments)
      }
      T(xa, $t, {
        defaults: {
          event: "rotate",
          threshold: 0,
          pointers: 2
        },
        getTouchAction: function() {
          return [an]
        },
        attrTest: function(w) {
          return this._super.attrTest.call(this, w) && (Math.abs(w.rotation) > this.options.threshold || this.state & Ft)
        }
      });

      function Fa() {
        $t.apply(this, arguments)
      }
      T(Fa, $t, {
        defaults: {
          event: "swipe",
          threshold: 10,
          velocity: .3,
          direction: q | j,
          pointers: 1
        },
        getTouchAction: function() {
          return ni.prototype.getTouchAction.call(this)
        },
        attrTest: function(w) {
          var A = this.options.direction,
            M;
          return A & (q | j) ? M = w.overallVelocity : A & q ? M = w.overallVelocityX : A & j && (M = w.overallVelocityY), this._super.attrTest.call(this, w) && A & w.offsetDirection && w.distance > this.options.threshold && w.maxPointers == this.options.pointers && u(M) > this.options.velocity && w.eventType & Q
        },
        emit: function(w) {
          var A = vc(w.offsetDirection);
          A && this.manager.emit(this.options.event + A, w), this.manager.emit(this.options.event, w)
        }
      });

      function si() {
        _r.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
      }
      T(si, _r, {
        defaults: {
          event: "tap",
          pointers: 1,
          taps: 1,
          interval: 300,
          time: 250,
          threshold: 9,
          posThreshold: 10
        },
        getTouchAction: function() {
          return [Da]
        },
        process: function(w) {
          var A = this.options,
            M = w.pointers.length === A.pointers,
            U = w.distance < A.threshold,
            te = w.deltaTime < A.time;
          if (this.reset(), w.eventType & H && this.count === 0) return this.failTimeout();
          if (U && te && M) {
            if (w.eventType != Q) return this.failTimeout();
            var ce = this.pTime ? w.timeStamp - this.pTime < A.interval : !0,
              Te = !this.pCenter || Re(this.pCenter, w.center) < A.posThreshold;
            this.pTime = w.timeStamp, this.pCenter = w.center, !Te || !ce ? this.count = 1 : this.count += 1, this._input = w;
            var ut = this.count % A.taps;
            if (ut === 0) return this.hasRequireFailures() ? (this._timer = f(function() {
              this.state = hr, this.tryEmit()
            }, A.interval, this), Ft) : hr
          }
          return rr
        },
        failTimeout: function() {
          return this._timer = f(function() {
            this.state = rr
          }, this.options.interval, this), rr
        },
        reset: function() {
          clearTimeout(this._timer)
        },
        emit: function() {
          this.state == hr && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
      });

      function Br(w, A) {
        return A = A || {}, A.recognizers = v(A.recognizers, Br.defaults.preset), new Ha(w, A)
      }
      Br.VERSION = "2.0.7", Br.defaults = {
        domEvents: !1,
        touchAction: pc,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [
          [xa, {
            enable: !1
          }],
          [Na, {
              enable: !1
            },
            ["rotate"]
          ],
          [Fa, {
            direction: q
          }],
          [ni, {
              direction: q
            },
            ["swipe"]
          ],
          [si],
          [si, {
              event: "doubletap",
              taps: 2
            },
            ["tap"]
          ],
          [Ma]
        ],
        cssProps: {
          userSelect: "none",
          touchSelect: "none",
          touchCallout: "none",
          contentZooming: "none",
          userDrag: "none",
          tapHighlightColor: "rgba(0,0,0,0)"
        }
      };
      var Hp = 1,
        yc = 2;

      function Ha(w, A) {
        this.options = E({}, Br.defaults, A || {}), this.options.inputTarget = this.options.inputTarget || w, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = w, this.input = D(this), this.touchAction = new ka(this, this.options.touchAction), Ec(this, !0), _(this.options.recognizers, function(M) {
          var U = this.add(new M[0](M[1]));
          M[2] && U.recognizeWith(M[2]), M[3] && U.requireFailure(M[3])
        }, this)
      }
      Ha.prototype = {
        set: function(w) {
          return E(this.options, w), w.touchAction && this.touchAction.update(), w.inputTarget && (this.input.destroy(), this.input.target = w.inputTarget, this.input.init()), this
        },
        stop: function(w) {
          this.session.stopped = w ? yc : Hp
        },
        recognize: function(w) {
          var A = this.session;
          if (!A.stopped) {
            this.touchAction.preventDefaults(w);
            var M, U = this.recognizers,
              te = A.curRecognizer;
            (!te || te && te.state & hr) && (te = A.curRecognizer = null);
            for (var ce = 0; ce < U.length;) M = U[ce], A.stopped !== yc && (!te || M == te || M.canRecognizeWith(te)) ? M.recognize(w) : M.reset(), !te && M.state & (Ft | Ln | Hr) && (te = A.curRecognizer = M), ce++
          }
        },
        get: function(w) {
          if (w instanceof _r) return w;
          for (var A = this.recognizers, M = 0; M < A.length; M++)
            if (A[M].options.event == w) return A[M];
          return null
        },
        add: function(w) {
          if (d(w, "add", this)) return this;
          var A = this.get(w.options.event);
          return A && this.remove(A), this.recognizers.push(w), w.manager = this, this.touchAction.update(), w
        },
        remove: function(w) {
          if (d(w, "remove", this)) return this;
          if (w = this.get(w), w) {
            var A = this.recognizers,
              M = B(A, w);
            M !== -1 && (A.splice(M, 1), this.touchAction.update())
          }
          return this
        },
        on: function(w, A) {
          if (w !== s && A !== s) {
            var M = this.handlers;
            return _(N(w), function(U) {
              M[U] = M[U] || [], M[U].push(A)
            }), this
          }
        },
        off: function(w, A) {
          if (w !== s) {
            var M = this.handlers;
            return _(N(w), function(U) {
              A ? M[U] && M[U].splice(B(M[U], A), 1) : delete M[U]
            }), this
          }
        },
        emit: function(w, A) {
          this.options.domEvents && Bp(w, A);
          var M = this.handlers[w] && this.handlers[w].slice();
          if (!(!M || !M.length)) {
            A.type = w, A.preventDefault = function() {
              A.srcEvent.preventDefault()
            };
            for (var U = 0; U < M.length;) M[U](A), U++
          }
        },
        destroy: function() {
          this.element && Ec(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
      };

      function Ec(w, A) {
        var M = w.element;
        if (M.style) {
          var U;
          _(w.options.cssProps, function(te, ce) {
            U = Y(M.style, ce), A ? (w.oldCssProps[U] = M.style[U], M.style[U] = te) : M.style[U] = w.oldCssProps[U] || ""
          }), A || (w.oldCssProps = {})
        }
      }

      function Bp(w, A) {
        var M = r.createEvent("Event");
        M.initEvent(w, !0, !0), M.gesture = A, A.target.dispatchEvent(M)
      }
      E(Br, {
        INPUT_START: H,
        INPUT_MOVE: ne,
        INPUT_END: Q,
        INPUT_CANCEL: ae,
        STATE_POSSIBLE: ti,
        STATE_BEGAN: Ft,
        STATE_CHANGED: Ln,
        STATE_ENDED: Hr,
        STATE_RECOGNIZED: hr,
        STATE_CANCELLED: fs,
        STATE_FAILED: rr,
        DIRECTION_NONE: he,
        DIRECTION_LEFT: Ee,
        DIRECTION_RIGHT: I,
        DIRECTION_UP: S,
        DIRECTION_DOWN: F,
        DIRECTION_HORIZONTAL: q,
        DIRECTION_VERTICAL: j,
        DIRECTION_ALL: J,
        Manager: Ha,
        Input: y,
        TouchAction: ka,
        TouchInput: Qs,
        MouseInput: sn,
        PointerEventInput: Ia,
        TouchMouseInput: La,
        SingleTouchInput: uc,
        Recognizer: _r,
        AttrRecognizer: $t,
        Tap: si,
        Pan: ni,
        Swipe: Fa,
        Pinch: Na,
        Rotate: xa,
        Press: Ma,
        on: P,
        off: g,
        each: _,
        merge: O,
        extend: R,
        assign: E,
        inherit: T,
        bindFn: h,
        prefixed: Y
      });
      var Vp = typeof t < "u" ? t : typeof self < "u" ? self : {};
      Vp.Hammer = Br, e.exports ? e.exports = Br : t[n] = Br
    })(window, document, "Hammer")
  })(wo)), wo.exports
}
var _A = hA();
const pA = Ta(_A),
  ra = {};

function On(e, t) {
  let r = ra[t];
  return r || (r = new pA(e), ra[t] = r), r
}

function In(e) {
  e && ra[e] && delete ra[e]
}
const mA = {
    beforeMount(e, t) {
      typeof t.value == "function" && On(e, t.instance._uid)
        .on("swipe", t.value)
    },
    unmounted(e, t) {
      var r;
      In((r = t.instance) == null ? void 0 : r._.uid)
    }
  },
  gA = {
    beforeMount(e, t) {
      if (typeof t.value == "function") {
        const r = On(e, t.instance._uid);
        r.get("pinch")
          .set({
            enable: !0
          }), r.on("pinch", t.value)
      }
    },
    unmounted(e, t) {
      var r;
      In((r = t.instance) == null ? void 0 : r._.uid)
    }
  },
  vA = {
    beforeMount(e, t) {
      if (typeof t.value == "function") {
        const r = On(e, t.instance._uid);
        r.get("pinch")
          .set({
            enable: !0
          }), r.on("pinchstart", t.value)
      }
    },
    unmounted(e, t) {
      var r;
      In((r = t.instance) == null ? void 0 : r._.uid)
    }
  },
  yA = {
    beforeMount(e, t) {
      if (typeof t.value == "function") {
        const r = On(e, t.instance._uid);
        r.get("pinch")
          .set({
            enable: !0
          }), r.on("pinchend", t.value)
      }
    },
    unmounted(e, t) {
      var r;
      In((r = t.instance) == null ? void 0 : r._.uid)
    }
  },
  EA = {
    beforeMount(e, t) {
      if (typeof t.value == "function") {
        const r = On(e, t.instance._uid);
        r.get("pan")
          .set({
            threshold: 0
          }), r.on("pan", t.value)
      }
    },
    unmounted(e, t) {
      var r;
      In((r = t.instance) == null ? void 0 : r._.uid)
    }
  },
  wA = {
    beforeMount(e, t) {
      if (typeof t.value == "function") {
        const r = On(e, t.instance._uid);
        r.get("pan")
          .set({
            threshold: 0
          }), r.on("panend", t.value)
      }
    },
    unmounted(e, t) {
      var r;
      In((r = t.instance) == null ? void 0 : r._.uid)
    }
  },
  bA = {
    beforeMount(e, t) {
      typeof t.value == "function" && On(e, t.instance._uid)
        .on("tap", t.value)
    },
    unmounted(e, t) {
      var r;
      In((r = t.instance) == null ? void 0 : r._.uid)
    }
  },
  bp = e => {
    const t = e._observe;
    t && (t.observer.unobserve(e), delete e._observe)
  },
  TA = (e, t, r, n) => {
    if (typeof window > "u" || !("IntersectionObserver" in window)) return;
    const s = t.modifiers || {},
      {
        value: i
      } = t,
      {
        handler: a,
        options: o
      } = typeof i == "object" ? i : {
        handler: i,
        options: {}
      },
      l = new IntersectionObserver((u = []) => {
        const {
          _observe: c
        } = e;
        if (!c) return;
        const f = u.some(d => d.isIntersecting);
        a && (!s.quiet || c.init) && (!s.once || f || c.init) && a(u, l), f && s.once ? bp(e) : c.init = !0
      }, o);
    e._observe = {
      init: !1,
      observer: l
    }, l.observe(e)
  },
  SA = {
    beforeMount: TA,
    unmounted: bp
  },
  PA = Ke(({
    vueApp: e
  }) => {
    e.directive("intersect", SA), e.directive("swipe", mA), e.directive("pinch", gA), e.directive("pinchstart", vA), e.directive("pinchend", yA), e.directive("pan", EA), e.directive("panend", wA), e.directive("tap", bA)
  }),
  CA = new Jl,
  AA = "ar",
  RA = "storesearch",
  OA = Ke(async () => {
    let e, t;
    const r = zs(Ie()),
      n = CA.get(AA);
    if (n) {
      const s = ml(n);
      [e, t] = zr(() => r.setStore(s)), await e, t()
    }
    window.addEventListener(RA, async s => {
      if (s.detail.cookieContent === !1 && await r.setStore(), typeof s.detail.cookieContent == "string") {
        const i = ml(s.detail.cookieContent);
        await r.setStore(i)
      }
    })
  }),
  IA = Ke(e => {
    const t = _e(!0),
      r = ss(),
      n = () => {
        t.value = window.innerWidth < lT.md
      };
    r.run(() => {
      const s = window.matchMedia("(min-width: 720px)");
      s.addEventListener("change", n), n(), ks(() => {
        s.removeEventListener("change", n)
      })
    }), e.provide("viewport", {
      isViewportSM: t
    })
  }),
  LA = [WE, qE, Pb, Cb, Ab, Rb, Ib, Fb, Hb, Bb, Kb, GC, $C, WC, JC, tA, rA, nA, sA, aA, oA, dA, PA, OA, IA],
  Tp = (e = "RouteProvider") => Mt({
    name: e,
    props: {
      vnode: {
        type: Object,
        required: !0
      },
      route: {
        type: Object,
        required: !0
      },
      vnodeRef: Object,
      renderKey: String,
      trackRootNodes: Boolean
    },
    setup(t) {
      const r = t.renderKey,
        n = t.route,
        s = {};
      for (const i in t.route) Object.defineProperty(s, i, {
        get: () => r === t.renderKey ? t.route[i] : n[i],
        enumerable: !0
      });
      return qr(Cn, Pr(s)), () => ft(t.vnode, {
        ref: t.vnodeRef
      })
    }
  }),
  DA = Tp(),
  rd = new WeakMap,
  kA = Mt({
    name: "NuxtPage",
    inheritAttrs: !1,
    props: {
      name: {
        type: String
      },
      transition: {
        type: [Boolean, Object],
        default: void 0
      },
      keepalive: {
        type: [Boolean, Object],
        default: void 0
      },
      route: {
        type: Object
      },
      pageKey: {
        type: [Function, String],
        default: null
      }
    },
    setup(e, {
      attrs: t,
      slots: r,
      expose: n
    }) {
      const s = qe(),
        i = _e(),
        a = at(Cn, null);
      let o;
      n({
        pageRef: i
      });
      const l = at(o_, null);
      let u;
      const c = s.deferHydration();
      if (s.isHydrating) {
        const d = s.hooks.hookOnce("app:error", c);
        Ut()
          .beforeEach(d)
      }
      e.pageKey && gt(() => e.pageKey, (d, _) => {
        d !== _ && s.callHook("page:loading:start")
      });
      let f = !1;
      {
        const d = Ut()
          .beforeResolve(() => {
            f = !1
          });
        qs(() => {
          d()
        })
      }
      return () => ft(L_, {
        name: e.name,
        route: e.route,
        ...t
      }, {
        default: d => {
          const _ = MA(a, d.route, d.Component),
            m = a && a.matched.length === d.route.matched.length;
          if (!d.Component) {
            if (u && !m) return u;
            c();
            return
          }
          if (u && l && !l.isCurrent(d.route)) return u;
          if (_ && a && (!l || l != null && l.isCurrent(a))) return m ? u : null;
          const E = el(d, e.pageKey),
            R = xA(a, d.route, d.Component);
          !s.isHydrating && o === E && !R && Tn(() => {
            f = !0, s.callHook("page:loading:end")
          }), o = E;
          const O = !!(e.transition ?? d.route.meta.pageTransition ?? hu),
            T = O && NA([e.transition, d.route.meta.pageTransition, hu, {
              onBeforeLeave() {
                s._runningTransition = !0
              },
              onAfterLeave() {
                delete s._runningTransition, s.callHook("page:transition:finish", d.Component)
              }
            }]),
            h = e.keepalive ?? d.route.meta.keepalive ?? Cy;
          return u = D_(O && T, ab(h, ft(Vl, {
              suspensible: !0,
              onPending: () => s.callHook("page:start", d.Component),
              onResolve: () => {
                Tn(() => s.callHook("page:finish", d.Component)
                  .then(() => {
                    if (!f && !R) return f = !0, s.callHook("page:loading:end")
                  })
                  .finally(c))
              }
            }, {
              default: () => {
                const p = {
                  key: E || void 0,
                  vnode: r.default ? FA(r.default, d) : d.Component,
                  route: d.route,
                  renderKey: E || void 0,
                  trackRootNodes: O,
                  vnodeRef: i
                };
                if (!h) return ft(DA, p);
                const v = d.Component.type,
                  P = v;
                let g = rd.get(P);
                return g || (g = Tp(v.name || v.__name), rd.set(P, g)), ft(g, p)
              }
            })))
            .default(), u
        }
      })
    }
  });

function NA(e) {
  const t = e.filter(Boolean)
    .map(r => ({
      ...r,
      onAfterLeave: r.onAfterLeave ? Xl(r.onAfterLeave) : void 0
    }));
  return i_(...t)
}

function MA(e, t, r) {
  if (!e) return !1;
  const n = t.matched.findIndex(s => {
    var i;
    return ((i = s.components) == null ? void 0 : i.default) === (r == null ? void 0 : r.type)
  });
  return !n || n === -1 ? !1 : t.matched.slice(0, n)
    .some((s, i) => {
      var a, o, l;
      return ((a = s.components) == null ? void 0 : a.default) !== ((l = (o = e.matched[i]) == null ? void 0 : o.components) == null ? void 0 : l.default)
    }) || r && el({
      route: t,
      Component: r
    }) !== el({
      route: e,
      Component: r
    })
}

function xA(e, t, r) {
  return e ? t.matched.findIndex(s => {
    var i;
    return ((i = s.components) == null ? void 0 : i.default) === (r == null ? void 0 : r.type)
  }) < t.matched.length - 1 : !1
}

function FA(e, t) {
  const r = e(t);
  return r.length === 1 ? ft(r[0]) : ft(nt, void 0, r)
}
const HA = Mt({
    name: "LayoutLoader",
    inheritAttrs: !1,
    props: {
      name: String,
      layoutProps: Object
    },
    setup(e, t) {
      return () => ft(Xr[e.name], e.layoutProps, t.slots)
    }
  }),
  BA = {
    name: {
      type: [String, Boolean, Object],
      default: null
    },
    fallback: {
      type: [String, Object],
      default: null
    }
  },
  VA = Mt({
    name: "NuxtLayout",
    inheritAttrs: !1,
    props: BA,
    setup(e, t) {
      const r = qe(),
        n = at(Cn),
        s = n === os() ? tb() : n,
        i = $(() => {
          let l = ze(e.name) ?? s.meta.layout ?? "default";
          return l && !(l in Xr) && e.fallback && (l = ze(e.fallback)), l
        }),
        a = _e();
      t.expose({
        layoutRef: a
      });
      const o = r.deferHydration();
      if (r.isHydrating) {
        const l = r.hooks.hookOnce("app:error", o);
        Ut()
          .beforeEach(l)
      }
      return () => {
        const l = i.value && i.value in Xr,
          u = s.meta.layoutTransition ?? Py;
        return D_(l && u, {
            default: () => ft(Vl, {
              suspensible: !0,
              onResolve: () => {
                Tn(o)
              }
            }, {
              default: () => ft(UA, {
                layoutProps: Ch(t.attrs, {
                  ref: a
                }),
                key: i.value || void 0,
                name: i.value,
                shouldProvide: !e.name,
                hasTransition: !!u
              }, t.slots)
            })
          })
          .default()
      }
    }
  }),
  UA = Mt({
    name: "NuxtLayoutProvider",
    inheritAttrs: !1,
    props: {
      name: {
        type: [String, Boolean]
      },
      layoutProps: {
        type: Object
      },
      hasTransition: {
        type: Boolean
      },
      shouldProvide: {
        type: Boolean
      }
    },
    setup(e, t) {
      const r = e.name;
      return e.shouldProvide && qr(o_, {
        isCurrent: n => r === (n.meta.layout ?? "default")
      }), () => {
        var n, s;
        return !r || typeof r == "string" && !(r in Xr) ? (s = (n = t.slots)
          .default) == null ? void 0 : s.call(n) : ft(HA, {
          key: r,
          layoutProps: e.layoutProps,
          name: r
        }, t.slots)
      }
    }
  }),
  Sp = (e, t) => {
    const r = e.__vccOpts || e;
    for (const [n, s] of t) r[n] = s;
    return r
  },
  GA = {};

function $A(e, t) {
  const r = kA,
    n = VA;
  return Ot(), Tr(n, null, {
    default: Il(() => [Xe(r)]),
    _: 1
  })
}
const WA = Sp(GA, [
    ["render", $A]
  ]),
  jA = Mt({
    props: {
      error: {
        type: Object,
        required: !0
      }
    },
    computed: {
      notFound() {
        return this.error.statusCode === 404
      },
      redirectToSearch() {
        return Ji(dr()
            .locale, "redirectToSearch")
          .value
      }
    },
    async mounted() {
      var e, t, r;
      if (!(!this.notFound || this.isEndpoint(tf) || this.isEndpoint(rf))) {
        if (this.notFound && !this.redirectToSearch) {
          await gu({
            path: rf
          }), window.location.reload();
          return
        }
        await gu({
          path: tf,
          query: {
            q: encodeURIComponent(((e = (this._.provides[Cn] || this.$route)
              .params.productName) == null ? void 0 : e.replace(/-/g, " ")) || "*"),
            log: rT,
            v: new URLSearchParams((r = (t = window.location) == null ? void 0 : t.search) == null ? void 0 : r.slice(1))
              .get("v") ?? void 0,
            ...(this._.provides[Cn] || this.$route)
            .query
          }
        }), window.location.reload()
      }
    },
    methods: {
      isEndpoint(e) {
        return window.location.pathname === e
      }
    }
  }),
  KA = {
    key: 0
  },
  YA = {
    key: 1
  };

function XA(e, t, r, n, s, i) {
  return Ot(), As("section", null, [e.notFound ? (Ot(), As("h1", KA, "Not found")) : (Ot(), As("h1", YA, hd(e.error.message), 1))])
}
const qA = Sp(jA, [
    ["render", XA]
  ]),
  ZA = {
    key: 0
  },
  nd = {
    __name: "nuxt-root",
    setup(e) {
      const t = () => null,
        r = qe(),
        n = r.deferHydration();
      if (r.isHydrating) {
        const l = r.hooks.hookOnce("app:error", n);
        Ut()
          .beforeEach(l)
      }
      const s = !1;
      qr(Cn, os()), r.hooks.callHookWith(l => l.map(u => u()), "vue:setup");
      const i = ya(),
        a = !1;
      zd((l, u, c) => {
        if (r.hooks.callHook("vue:error", l, u, c)
          .catch(f => console.error("[nuxt] Error in `vue:error` hook", f)), c_(l) && (l.fatal || l.unhandled)) return r.runWithContext(() => pn(l)), !1
      });
      const o = !1;
      return (l, u) => (Ot(), Tr(Vl, {
        onResolve: ze(n)
      }, {
        default: Il(() => [ze(a) ? (Ot(), As("div", ZA)) : ze(i) ? (Ot(), Tr(ze(qA), {
          key: 1,
          error: ze(i)
        }, null, 8, ["error"])) : ze(o) ? (Ot(), Tr(ze(t), {
          key: 2,
          context: ze(o)
        }, null, 8, ["context"])) : ze(s) ? (Ot(), Tr(eg(ze(s)), {
          key: 3
        })) : (Ot(), Tr(ze(WA), {
          key: 4
        }))]),
        _: 1
      }, 8, ["onResolve"]))
    }
  };
let sd;
{
  let e;
  sd = async function() {
      var a, o;
      if (e) return e;
      const n = !!(((a = window.__NUXT__) == null ? void 0 : a.serverRendered) ?? ((o = document.getElementById("__NUXT_DATA__")) == null ? void 0 : o.dataset.ssr) === "true") ? yv(nd) : vv(nd),
        s = Ly({
          vueApp: n
        });
      async function i(l) {
        var u;
        await s.callHook("app:error", l), (u = s.payload)
          .error || (u.error = Or(l))
      }
      n.config.errorHandler = i, s.hook("app:suspense:resolve", () => {
        n.config.errorHandler === i && (n.config.errorHandler = void 0)
      });
      try {
        await Ny(s, LA)
      } catch (l) {
        i(l)
      }
      try {
        await s.hooks.callHook("app:created", n), await s.hooks.callHook("app:beforeMount", n), n.mount(Ry), await s.hooks.callHook("app:mounted", n), await Tn()
      } catch (l) {
        i(l)
      }
      return n
    }, e = sd()
    .catch(t => {
      throw console.error("Error while mounting app:", t), t
    })
}
export {
  mR as $, eg as A, uR as B, zt as C, lR as D, Tn as E, nt as F, tt as G, As as H, Il as I, Xe as J, ca as K, pR as L, ze as M, cR as N, xm as O, oR as P, hd as Q, aR as R, Sh as S, Ph as T, Ys as U, ua as V, ks as W, Ld as X, QA as Y, la as Z, G as _, qe as a, VR as a$, Wg as a0, eR as a1, Mr as a2, gR as a3, rR as a4, iR as a5, as as a6, Nl as a7, JA as a8, Lg as a9, Ir as aA, Sp as aB, DT as aC, RT as aD, LR as aE, bR as aF, TR as aG, sR as aH, NR as aI, MR as aJ, Ji as aK, xR as aL, cO as aM, hR as aN, fR as aO, Ue as aP, NC as aQ, Ql as aR, Pa as aS, TT as aT, MC as aU, cf as aV, mn as aW, sl as aX, ST as aY, Xb as aZ, dR as a_, ER as aa, yR as ab, _R as ac, st as ad, Zr as ae, kl as af, vR as ag, qr as ah, iO as ai, oO as aj, lO as ak, aO as al, lf as am, ot as an, zs as ao, Ie as ap, ta as aq, dr as ar, it as as, oc as at, AT as au, Yb as av, os as aw, Vi as ax, SR as ay, Kh as az, zl as b, fO as b0, uO as b1, ss as b2, zb as b3, il as b4, dO as b5, uf as b6, wR as b7, qR as b8, QR as b9, Gb as bA, kR as bB, wn as bC, wS as bD, sO as bE, nO as bF, Vl as bG, Mb as bH, DR as bI, WR as bJ, iT as bK, aT as bL, sT as bM, RR as bN, My as bO, p_ as bP, AR as bQ, zr as bR, Or as bS, tb as bT, HR as bU, OR as bV, Jl as bW, FR as bX, nT as bY, oT as bZ, CT as b_, JR as ba, ZR as bb, zR as bc, bT as bd, rO as be, tO as bf, fy as bg, eO as bh, V_ as bi, Ds as bj, XR as bk, UR as bl, kT as bm, YR as bn, _f as bo, jR as bp, $e as bq, KR as br, BR as bs, $R as bt, Sa as bu, B_ as bv, hO as bw, tR as bx, Zb as by, GR as bz, qs as c, Mt as d, IR as e, nR as f, _e as g, ft as h, jy as i, $ as j, Rn as k, Xh as l, CR as m, gu as n, An as o, jh as p, Vs as q, Yu as r, Fr as s, at as t, Ut as u, gt as v, jv as w, Ot as x, Tr as y, Ch as z
};