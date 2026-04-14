const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["static/AccessData-BDWJV9l9.js", "static/MenuItem-IyrOrDXI.js", "static/_plugin-vue_export-helper-DlAUqK2U.js", "static/MenuItem-B2a56-pw.css", "static/AccessData-BEDF0rei.css", "static/AddressData-DY263Aaz.js", "static/AddressData-DPJKAq0w.css", "static/DeliveryAddressPage-BnT0t2pp.js", "static/setSuggestedData-DwPL-kko.js", "static/setSuggestedData-d8mfcCBk.css", "static/DeliveryAddressPage-YMeME-sa.css", "static/InvoiceAddressPage-ComrHVnu.js", "static/InvoiceAddressPage-DOiGH2dp.css"]))) => i.map(i => d[i]);
(function() {
  const t = document.createElement("link")
    .relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver(s => {
      for (const i of s)
        if (i.type === "childList")
          for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    })
    .observe(document, {
      childList: !0,
      subtree: !0
    });

  function n(s) {
    const i = {};
    return s.integrity && (i.integrity = s.integrity), s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? i.credentials = "include" : s.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
  }

  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = n(s);
    fetch(s.href, i)
  }
})();

function rf(e) {
  const t = Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return n => n in t
}
const sf = {},
  of = () => {},
  lf = Object.assign,
  af = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
  },
  cf = Object.prototype.hasOwnProperty,
  es = (e, t) => cf.call(e, t),
  Jt = Array.isArray,
  cr = e => hs(e) === "[object Map]",
  uf = e => hs(e) === "[object Set]",
  yr = e => typeof e == "function",
  ff = e => typeof e == "string",
  Dr = e => typeof e == "symbol",
  Zn = e => e !== null && typeof e == "object",
  df = Object.prototype.toString,
  hs = e => df.call(e),
  hf = e => hs(e)
  .slice(8, -1),
  mf = e => hs(e) === "[object Object]",
  $i = e => ff(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  un = (e, t) => !Object.is(e, t),
  pf = (e, t, n, r = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: r,
      value: n
    })
  };
let nt;
class Na {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = nt, !t && nt && (this.index = (nt.scopes || (nt.scopes = []))
      .push(this) - 1)
  }
  get active() {
    return this._active
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause()
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume()
    }
  }
  run(t) {
    if (this._active) {
      const n = nt;
      try {
        return nt = this, t()
      } finally {
        nt = n
      }
    }
  }
  on() {
    ++this._on === 1 && (this.prevScope = nt, nt = this)
  }
  off() {
    this._on > 0 && --this._on === 0 && (nt = this.prevScope, this.prevScope = void 0)
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
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

function Ui(e) {
  return new Na(e)
}

function Pa() {
  return nt
}

function gf(e, t = !1) {
  nt && nt.cleanups.push(e)
}
let Pe;
const ks = new WeakSet;
class La {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, nt && nt.active && nt.effects.push(this)
  }
  pause() {
    this.flags |= 64
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ks.has(this) && (ks.delete(this), this.trigger()))
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Da(this)
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, ko(this), Fa(this);
    const t = Pe,
      n = Lt;
    Pe = this, Lt = !0;
    try {
      return this.fn()
    } finally {
      xa(this), Pe = t, Lt = n, this.flags &= -3
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Wi(t);
      this.deps = this.depsTail = void 0, ko(this), this.onStop && this.onStop(), this.flags &= -2
    }
  }
  trigger() {
    this.flags & 64 ? ks.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
  }
  runIfDirty() {
    ri(this) && this.run()
  }
  get dirty() {
    return ri(this)
  }
}
let wa = 0,
  ur, fr;

function Da(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = fr, fr = e;
    return
  }
  e.next = ur, ur = e
}

function Bi() {
  wa++
}

function Hi() {
  if (--wa > 0) return;
  if (fr) {
    let t = fr;
    for (fr = void 0; t;) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n
    }
  }
  let e;
  for (; ur;) {
    let t = ur;
    for (ur = void 0; t;) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
        t.trigger()
      } catch (r) {
        e || (e = r)
      }
      t = n
    }
  }
  if (e) throw e
}

function Fa(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t
}

function xa(e) {
  let t, n = e.depsTail,
    r = n;
  for (; r;) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), Wi(r), _f(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s
  }
  e.deps = t, e.depsTail = n
}

function ri(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ka(t.dep.computed) || t.dep.version !== t.version)) return !0;
  return !!e._dirty
}

function ka(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === br) || (e.globalVersion = br, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ri(e)))) return;
  e.flags |= 2;
  const t = e.dep,
    n = Pe,
    r = Lt;
  Pe = e, Lt = !0;
  try {
    Fa(e);
    const s = e.fn(e._value);
    (t.version === 0 || un(s, e._value)) && (e.flags |= 128, e._value = s, t.version++)
  } catch (s) {
    throw t.version++, s
  } finally {
    Pe = n, Lt = r, xa(e), e.flags &= -3
  }
}

function Wi(e, t = !1) {
  const {
    dep: n,
    prevSub: r,
    nextSub: s
  } = e;
  if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep) Wi(i, !0)
  }!t && !--n.sc && n.map && n.map.delete(n.key)
}

function _f(e) {
  const {
    prevDep: t,
    nextDep: n
  } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0)
}
let Lt = !0;
const Ma = [];

function zt() {
  Ma.push(Lt), Lt = !1
}

function en() {
  const e = Ma.pop();
  Lt = e === void 0 ? !0 : e
}

function ko(e) {
  const {
    cleanup: t
  } = e;
  if (e.cleanup = void 0, t) {
    const n = Pe;
    Pe = void 0;
    try {
      t()
    } finally {
      Pe = n
    }
  }
}
let br = 0;
class vf {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
  }
}
class ms {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0
  }
  track(t) {
    if (!Pe || !Lt || Pe === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Pe) n = this.activeLink = new vf(Pe, this), Pe.deps ? (n.prevDep = Pe.depsTail, Pe.depsTail.nextDep = n, Pe.depsTail = n) : Pe.deps = Pe.depsTail = n, Va(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Pe.depsTail, n.nextDep = void 0, Pe.depsTail.nextDep = n, Pe.depsTail = n, Pe.deps === n && (Pe.deps = r)
    }
    return n
  }
  trigger(t) {
    this.version++, br++, this.notify(t)
  }
  notify(t) {
    Bi();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify()
    } finally {
      Hi()
    }
  }
}

function Va(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep) Va(r)
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e
  }
}
const ts = new WeakMap,
  On = Symbol(""),
  si = Symbol(""),
  Er = Symbol("");

function rt(e, t, n) {
  if (Lt && Pe) {
    let r = ts.get(e);
    r || ts.set(e, r = new Map);
    let s = r.get(n);
    s || (r.set(n, s = new ms), s.map = r, s.key = n), s.track()
  }
}

function Kt(e, t, n, r, s, i) {
  const o = ts.get(e);
  if (!o) {
    br++;
    return
  }
  const l = a => {
    a && a.trigger()
  };
  if (Bi(), t === "clear") o.forEach(l);
  else {
    const a = Jt(e),
      c = a && $i(n);
    if (a && n === "length") {
      const f = Number(r);
      o.forEach((u, d) => {
        (d === "length" || d === Er || !Dr(d) && d >= f) && l(u)
      })
    } else switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), c && l(o.get(Er)), t) {
      case "add":
        a ? c && l(o.get("length")) : (l(o.get(On)), cr(e) && l(o.get(si)));
        break;
      case "delete":
        a || (l(o.get(On)), cr(e) && l(o.get(si)));
        break;
      case "set":
        cr(e) && l(o.get(On));
        break
    }
  }
  Hi()
}

function yf(e, t) {
  const n = ts.get(e);
  return n && n.get(t)
}

function Pn(e) {
  const t = ge(e);
  return t === e ? t : (rt(t, "iterate", Er), It(e) ? t : t.map(qe))
}

function ps(e) {
  return rt(e = ge(e), "iterate", Er), e
}
const bf = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ms(this, Symbol.iterator, qe)
  },
  concat(...e) {
    return Pn(this)
      .concat(...e.map(t => Jt(t) ? Pn(t) : t))
  },
  entries() {
    return Ms(this, "entries", e => (e[1] = qe(e[1]), e))
  },
  every(e, t) {
    return $t(this, "every", e, t, void 0, arguments)
  },
  filter(e, t) {
    return $t(this, "filter", e, t, n => n.map(qe), arguments)
  },
  find(e, t) {
    return $t(this, "find", e, t, qe, arguments)
  },
  findIndex(e, t) {
    return $t(this, "findIndex", e, t, void 0, arguments)
  },
  findLast(e, t) {
    return $t(this, "findLast", e, t, qe, arguments)
  },
  findLastIndex(e, t) {
    return $t(this, "findLastIndex", e, t, void 0, arguments)
  },
  forEach(e, t) {
    return $t(this, "forEach", e, t, void 0, arguments)
  },
  includes(...e) {
    return Vs(this, "includes", e)
  },
  indexOf(...e) {
    return Vs(this, "indexOf", e)
  },
  join(e) {
    return Pn(this)
      .join(e)
  },
  lastIndexOf(...e) {
    return Vs(this, "lastIndexOf", e)
  },
  map(e, t) {
    return $t(this, "map", e, t, void 0, arguments)
  },
  pop() {
    return tr(this, "pop")
  },
  push(...e) {
    return tr(this, "push", e)
  },
  reduce(e, ...t) {
    return Mo(this, "reduce", e, t)
  },
  reduceRight(e, ...t) {
    return Mo(this, "reduceRight", e, t)
  },
  shift() {
    return tr(this, "shift")
  },
  some(e, t) {
    return $t(this, "some", e, t, void 0, arguments)
  },
  splice(...e) {
    return tr(this, "splice", e)
  },
  toReversed() {
    return Pn(this)
      .toReversed()
  },
  toSorted(e) {
    return Pn(this)
      .toSorted(e)
  },
  toSpliced(...e) {
    return Pn(this)
      .toSpliced(...e)
  },
  unshift(...e) {
    return tr(this, "unshift", e)
  },
  values() {
    return Ms(this, "values", qe)
  }
};

function Ms(e, t, n) {
  const r = ps(e),
    s = r[t]();
  return r !== e && !It(e) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.value && (i.value = n(i.value)), i
  }), s
}
const Ef = Array.prototype;

function $t(e, t, n, r, s, i) {
  const o = ps(e),
    l = o !== e && !It(e),
    a = o[t];
  if (a !== Ef[t]) {
    const u = a.apply(e, i);
    return l ? qe(u) : u
  }
  let c = n;
  o !== e && (l ? c = function(u, d) {
    return n.call(this, qe(u), d, e)
  } : n.length > 2 && (c = function(u, d) {
    return n.call(this, u, d, e)
  }));
  const f = a.call(o, c, r);
  return l && s ? s(f) : f
}

function Mo(e, t, n, r) {
  const s = ps(e);
  let i = n;
  return s !== e && (It(e) ? n.length > 3 && (i = function(o, l, a) {
    return n.call(this, o, l, a, e)
  }) : i = function(o, l, a) {
    return n.call(this, o, qe(l), a, e)
  }), s[t](i, ...r)
}

function Vs(e, t, n) {
  const r = ge(e);
  rt(r, "iterate", Er);
  const s = r[t](...n);
  return (s === -1 || s === !1) && qi(n[0]) ? (n[0] = ge(n[0]), r[t](...n)) : s
}

function tr(e, t, n = []) {
  zt(), Bi();
  const r = ge(e)[t].apply(e, n);
  return Hi(), en(), r
}
const Af = rf("__proto__,__v_isRef,__isVue"),
  ja = new Set(Object.getOwnPropertyNames(Symbol)
    .filter(e => e !== "arguments" && e !== "caller")
    .map(e => Symbol[e])
    .filter(Dr));

function Of(e) {
  Dr(e) || (e = String(e));
  const t = ge(this);
  return rt(t, "has", e), t.hasOwnProperty(e)
}
class $a {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly,
      i = this._isShallow;
    if (n === "__v_isReactive") return !s;
    if (n === "__v_isReadonly") return s;
    if (n === "__v_isShallow") return i;
    if (n === "__v_raw") return r === (s ? i ? Df : Wa : i ? Ha : Ba)
      .get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const o = Jt(t);
    if (!s) {
      let a;
      if (o && (a = bf[n])) return a;
      if (n === "hasOwnProperty") return Of
    }
    const l = Reflect.get(t, n, Te(t) ? t : r);
    return (Dr(n) ? ja.has(n) : Af(n)) || (s || rt(t, "get", n), i) ? l : Te(l) ? o && $i(n) ? l : l.value : Zn(l) ? s ? Ki(l) : tn(l) : l
  }
}
class Ua extends $a {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, r, s) {
    let i = t[n];
    if (!this._isShallow) {
      const a = dn(i);
      if (!It(r) && !dn(r) && (i = ge(i), r = ge(r)), !Jt(t) && Te(i) && !Te(r)) return a ? !1 : (i.value = r, !0)
    }
    const o = Jt(t) && $i(n) ? Number(n) < t.length : es(t, n),
      l = Reflect.set(t, n, r, Te(t) ? t : s);
    return t === ge(s) && (o ? un(r, i) && Kt(t, "set", n, r) : Kt(t, "add", n, r)), l
  }
  deleteProperty(t, n) {
    const r = es(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && Kt(t, "delete", n, void 0), s
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Dr(n) || !ja.has(n)) && rt(t, "has", n), r
  }
  ownKeys(t) {
    return rt(t, "iterate", Jt(t) ? "length" : On), Reflect.ownKeys(t)
  }
}
class Sf extends $a {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, n) {
    return !0
  }
  deleteProperty(t, n) {
    return !0
  }
}
const If = new Ua,
  Cf = new Sf,
  Tf = new Ua(!0);
const ii = e => e,
  Mr = e => Reflect.getPrototypeOf(e);

function Rf(e, t, n) {
  return function(...r) {
    const s = this.__v_raw,
      i = ge(s),
      o = cr(i),
      l = e === "entries" || e === Symbol.iterator && o,
      a = e === "keys" && o,
      c = s[e](...r),
      f = n ? ii : t ? ns : qe;
    return !t && rt(i, "iterate", a ? si : On), {
      next() {
        const {
          value: u,
          done: d
        } = c.next();
        return d ? {
          value: u,
          done: d
        } : {
          value: l ? [f(u[0]), f(u[1])] : f(u),
          done: d
        }
      },
      [Symbol.iterator]() {
        return this
      }
    }
  }
}

function Vr(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this
  }
}

function Nf(e, t) {
  const n = {
    get(s) {
      const i = this.__v_raw,
        o = ge(i),
        l = ge(s);
      e || (un(s, l) && rt(o, "get", s), rt(o, "get", l));
      const {
        has: a
      } = Mr(o), c = t ? ii : e ? ns : qe;
      if (a.call(o, s)) return c(i.get(s));
      if (a.call(o, l)) return c(i.get(l));
      i !== o && i.get(s)
    },
    get size() {
      const s = this.__v_raw;
      return !e && rt(ge(s), "iterate", On), Reflect.get(s, "size", s)
    },
    has(s) {
      const i = this.__v_raw,
        o = ge(i),
        l = ge(s);
      return e || (un(s, l) && rt(o, "has", s), rt(o, "has", l)), s === l ? i.has(s) : i.has(s) || i.has(l)
    },
    forEach(s, i) {
      const o = this,
        l = o.__v_raw,
        a = ge(l),
        c = t ? ii : e ? ns : qe;
      return !e && rt(a, "iterate", On), l.forEach((f, u) => s.call(i, c(f), c(u), o))
    }
  };
  return lf(n, e ? {
    add: Vr("add"),
    set: Vr("set"),
    delete: Vr("delete"),
    clear: Vr("clear")
  } : {
    add(s) {
      !t && !It(s) && !dn(s) && (s = ge(s));
      const i = ge(this);
      return Mr(i)
        .has.call(i, s) || (i.add(s), Kt(i, "add", s, s)), this
    },
    set(s, i) {
      !t && !It(i) && !dn(i) && (i = ge(i));
      const o = ge(this),
        {
          has: l,
          get: a
        } = Mr(o);
      let c = l.call(o, s);
      c || (s = ge(s), c = l.call(o, s));
      const f = a.call(o, s);
      return o.set(s, i), c ? un(i, f) && Kt(o, "set", s, i) : Kt(o, "add", s, i), this
    },
    delete(s) {
      const i = ge(this),
        {
          has: o,
          get: l
        } = Mr(i);
      let a = o.call(i, s);
      a || (s = ge(s), a = o.call(i, s)), l && l.call(i, s);
      const c = i.delete(s);
      return a && Kt(i, "delete", s, void 0), c
    },
    clear() {
      const s = ge(this),
        i = s.size !== 0,
        o = s.clear();
      return i && Kt(s, "clear", void 0, void 0), o
    }
  }), ["keys", "values", "entries", Symbol.iterator].forEach(s => {
    n[s] = Rf(s, e, t)
  }), n
}

function Gi(e, t) {
  const n = Nf(e, t);
  return (r, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(es(n, s) && s in r ? n : r, s, i)
}
const Pf = {
    get: Gi(!1, !1)
  },
  Lf = {
    get: Gi(!1, !0)
  },
  wf = {
    get: Gi(!0, !1)
  };
const Ba = new WeakMap,
  Ha = new WeakMap,
  Wa = new WeakMap,
  Df = new WeakMap;

function Ff(e) {
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

function xf(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ff(hf(e))
}

function tn(e) {
  return dn(e) ? e : Yi(e, !1, If, Pf, Ba)
}

function Ga(e) {
  return Yi(e, !1, Tf, Lf, Ha)
}

function Ki(e) {
  return Yi(e, !0, Cf, wf, Wa)
}

function Yi(e, t, n, r, s) {
  if (!Zn(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const i = xf(e);
  if (i === 0) return e;
  const o = s.get(e);
  if (o) return o;
  const l = new Proxy(e, i === 2 ? r : n);
  return s.set(e, l), l
}

function fn(e) {
  return dn(e) ? fn(e.__v_raw) : !!(e && e.__v_isReactive)
}

function dn(e) {
  return !!(e && e.__v_isReadonly)
}

function It(e) {
  return !!(e && e.__v_isShallow)
}

function qi(e) {
  return e ? !!e.__v_raw : !1
}

function ge(e) {
  const t = e && e.__v_raw;
  return t ? ge(t) : e
}

function Xi(e) {
  return !es(e, "__v_skip") && Object.isExtensible(e) && pf(e, "__v_skip", !0), e
}
const qe = e => Zn(e) ? tn(e) : e,
  ns = e => Zn(e) ? Ki(e) : e;

function Te(e) {
  return e ? e.__v_isRef === !0 : !1
}

function Ge(e) {
  return Ka(e, !1)
}

function gs(e) {
  return Ka(e, !0)
}

function Ka(e, t) {
  return Te(e) ? e : new kf(e, t)
}
class kf {
  constructor(t, n) {
    this.dep = new ms, this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : ge(t), this._value = n ? t : qe(t), this.__v_isShallow = n
  }
  get value() {
    return this.dep.track(), this._value
  }
  set value(t) {
    const n = this._rawValue,
      r = this.__v_isShallow || It(t) || dn(t);
    t = r ? t : ge(t), un(t, n) && (this._rawValue = t, this._value = r ? t : qe(t), this.dep.trigger())
  }
}

function pe(e) {
  return Te(e) ? e.value : e
}

function te(e) {
  return yr(e) ? e() : pe(e)
}
const Mf = {
  get: (e, t, n) => t === "__v_raw" ? e : pe(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return Te(s) && !Te(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r)
  }
};

function Ya(e) {
  return fn(e) ? e : new Proxy(e, Mf)
}
class Vf {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new ms,
      {
        get: r,
        set: s
      } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = r, this._set = s
  }
  get value() {
    return this._value = this._get()
  }
  set value(t) {
    this._set(t)
  }
}

function jf(e) {
  return new Vf(e)
}

function $f(e) {
  const t = Jt(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = qa(e, n);
  return t
}
class Uf {
  constructor(t, n, r) {
    this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0, this._value = void 0
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t
  }
  set value(t) {
    this._object[this._key] = t
  }
  get dep() {
    return yf(ge(this._object), this._key)
  }
}
class Bf {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0
  }
  get value() {
    return this._value = this._getter()
  }
}

function Lv(e, t, n) {
  return Te(e) ? e : yr(e) ? new Bf(e) : Zn(e) && arguments.length > 1 ? qa(e, t, n) : Ge(e)
}

function qa(e, t, n) {
  const r = e[t];
  return Te(r) ? r : new Uf(e, t, n)
}
class Hf {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ms(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = br - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && Pe !== this) return Da(this, !0), !0
  }
  get value() {
    const t = this.dep.track();
    return ka(this), t && (t.version = this.dep.version), this._value
  }
  set value(t) {
    this.setter && this.setter(t)
  }
}

function Wf(e, t, n = !1) {
  let r, s;
  return yr(e) ? r = e : (r = e.get, s = e.set), new Hf(r, s, n)
}
const jr = {},
  rs = new WeakMap;
let yn;

function Gf(e, t = !1, n = yn) {
  if (n) {
    let r = rs.get(n);
    r || rs.set(n, r = []), r.push(e)
  }
}

function Kf(e, t, n = sf) {
  const {
    immediate: r,
    deep: s,
    once: i,
    scheduler: o,
    augmentJob: l,
    call: a
  } = n, c = S => s ? S : It(S) || s === !1 || s === 0 ? Yt(S, 1) : Yt(S);
  let f, u, d, h, b = !1,
    y = !1;
  if (Te(e) ? (u = () => e.value, b = It(e)) : fn(e) ? (u = () => c(e), b = !0) : Jt(e) ? (y = !0, b = e.some(S => fn(S) || It(S)), u = () => e.map(S => {
      if (Te(S)) return S.value;
      if (fn(S)) return c(S);
      if (yr(S)) return a ? a(S, 2) : S()
    })) : yr(e) ? t ? u = a ? () => a(e, 2) : e : u = () => {
      if (d) {
        zt();
        try {
          d()
        } finally {
          en()
        }
      }
      const S = yn;
      yn = f;
      try {
        return a ? a(e, 3, [h]) : e(h)
      } finally {
        yn = S
      }
    } : u = of, t && s) {
    const S = u,
      P = s === !0 ? 1 / 0 : s;
    u = () => Yt(S(), P)
  }
  const D = Pa(),
    v = () => {
      f.stop(), D && D.active && af(D.effects, f)
    };
  if (i && t) {
    const S = t;
    t = (...P) => {
      S(...P), v()
    }
  }
  let O = y ? new Array(e.length)
    .fill(jr) : jr;
  const R = S => {
    if (!(!(f.flags & 1) || !f.dirty && !S))
      if (t) {
        const P = f.run();
        if (s || b || (y ? P.some((x, w) => un(x, O[w])) : un(P, O))) {
          d && d();
          const x = yn;
          yn = f;
          try {
            const w = [P, O === jr ? void 0 : y && O[0] === jr ? [] : O, h];
            O = P, a ? a(t, 3, w) : t(...w)
          } finally {
            yn = x
          }
        }
      } else f.run()
  };
  return l && l(R), f = new La(u), f.scheduler = o ? () => o(R, !1) : R, h = S => Gf(S, !1, f), d = f.onStop = () => {
    const S = rs.get(f);
    if (S) {
      if (a) a(S, 4);
      else
        for (const P of S) P();
      rs.delete(f)
    }
  }, t ? r ? R(!0) : O = f.run() : o ? o(R.bind(null, !0), !0) : f.run(), v.pause = f.pause.bind(f), v.resume = f.resume.bind(f), v.stop = v, v
}

function Yt(e, t = 1 / 0, n) {
  if (t <= 0 || !Zn(e) || e.__v_skip || (n = n || new Set, n.has(e))) return e;
  if (n.add(e), t--, Te(e)) Yt(e.value, t, n);
  else if (Jt(e))
    for (let r = 0; r < e.length; r++) Yt(e[r], t, n);
  else if (uf(e) || cr(e)) e.forEach(r => {
    Yt(r, t, n)
  });
  else if (mf(e)) {
    for (const r in e) Yt(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && Yt(e[r], t, n)
  }
  return e
}

function Yf(e) {
  const t = Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return n => n in t
}
const ve = {},
  Mn = [],
  Zt = () => {},
  qf = () => !1,
  Ji = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Xa = e => e.startsWith("onUpdate:"),
  Ze = Object.assign,
  Ja = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
  },
  Xf = Object.prototype.hasOwnProperty,
  Le = (e, t) => Xf.call(e, t),
  ue = Array.isArray,
  Jf = e => zi(e) === "[object Map]",
  Zf = e => zi(e) === "[object Set]",
  ce = e => typeof e == "function",
  Qe = e => typeof e == "string",
  Zi = e => typeof e == "symbol",
  Ye = e => e !== null && typeof e == "object",
  Qi = e => (Ye(e) || ce(e)) && ce(e.then) && ce(e.catch),
  Za = Object.prototype.toString,
  zi = e => Za.call(e),
  Qf = e => zi(e) === "[object Object]",
  dr = Yf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
  _s = e => {
    const t = Object.create(null);
    return n => t[n] || (t[n] = e(n))
  },
  zf = /-(\w)/g,
  Tt = _s(e => e.replace(zf, (t, n) => n ? n.toUpperCase() : "")),
  ed = /\B([A-Z])/g,
  Qn = _s(e => e.replace(ed, "-$1")
    .toLowerCase()),
  eo = _s(e => e.charAt(0)
    .toUpperCase() + e.slice(1)),
  Xr = _s(e => e ? `on${eo(e)}` : ""),
  Ln = (e, t) => !Object.is(e, t),
  js = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t)
  },
  Vo = (e, t, n, r = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: r,
      value: n
    })
  },
  td = e => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t
  },
  nd = e => {
    const t = Qe(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
  };
let jo;
const vs = () => jo || (jo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" || typeof window < "u" ? window : {});

function to(e) {
  if (ue(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = Qe(r) ? od(r) : to(r);
      if (s)
        for (const i in s) t[i] = s[i]
    }
    return t
  } else if (Qe(e) || Ye(e)) return e
}
const rd = /;(?![^(]*\))/g,
  sd = /:([^]+)/,
  id = /\/\*[^]*?\*\//g;

function od(e) {
  const t = {};
  return e.replace(id, "")
    .split(rd)
    .forEach(n => {
      if (n) {
        const r = n.split(sd);
        r.length > 1 && (t[r[0].trim()] = r[1].trim())
      }
    }), t
}

function no(e) {
  let t = "";
  if (Qe(e)) t = e;
  else if (ue(e))
    for (let n = 0; n < e.length; n++) {
      const r = no(e[n]);
      r && (t += r + " ")
    } else if (Ye(e))
      for (const n in e) e[n] && (t += n + " ");
  return t.trim()
}
const Qa = e => !!(e && e.__v_isRef === !0),
  ld = e => Qe(e) ? e : e == null ? "" : ue(e) || Ye(e) && (e.toString === Za || !ce(e.toString)) ? Qa(e) ? ld(e.value) : JSON.stringify(e, za, 2) : String(e),
  za = (e, t) => Qa(t) ? za(e, t.value) : Jf(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, s], i) => (n[$s(r, i) + " =>"] = s, n), {})
  } : Zf(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(n => $s(n))
  } : Zi(t) ? $s(t) : Ye(t) && !ue(t) && !Qf(t) ? String(t) : t,
  $s = (e, t = "") => {
    var n;
    return Zi(e) ? `Symbol(${(n=e.description)!=null?n:t})` : e
  };

function Fr(e, t, n, r) {
  try {
    return r ? e(...r) : e()
  } catch (s) {
    zn(s, t, n)
  }
}

function jt(e, t, n, r) {
  if (ce(e)) {
    const s = Fr(e, t, n, r);
    return s && Qi(s) && s.catch(i => {
      zn(i, t, n)
    }), s
  }
  if (ue(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++) s.push(jt(e[i], t, n, r));
    return s
  }
}

function zn(e, t, n, r = !0) {
  const s = t ? t.vnode : null,
    {
      errorHandler: i,
      throwUnhandledErrorInProduction: o
    } = t && t.appContext.config || ve;
  if (t) {
    let l = t.parent;
    const a = t.proxy,
      c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l;) {
      const f = l.ec;
      if (f) {
        for (let u = 0; u < f.length; u++)
          if (f[u](e, a, c) === !1) return
      }
      l = l.parent
    }
    if (i) {
      zt(), Fr(i, null, 10, [e, a, c]), en();
      return
    }
  }
  ad(e, n, s, r, o)
}

function ad(e, t, n, r = !0, s = !1) {
  if (s) throw e;
  console.error(e)
}
const lt = [];
let Mt = -1;
const Vn = [];
let on = null,
  Dn = 0;
const ec = Promise.resolve();
let ss = null;

function yt(e) {
  const t = ss || ec;
  return e ? t.then(this ? e.bind(this) : e) : t
}

function cd(e) {
  let t = Mt + 1,
    n = lt.length;
  for (; t < n;) {
    const r = t + n >>> 1,
      s = lt[r],
      i = Ar(s);
    i < e || i === e && s.flags & 2 ? t = r + 1 : n = r
  }
  return t
}

function ro(e) {
  if (!(e.flags & 1)) {
    const t = Ar(e),
      n = lt[lt.length - 1];
    !n || !(e.flags & 2) && t >= Ar(n) ? lt.push(e) : lt.splice(cd(t), 0, e), e.flags |= 1, tc()
  }
}

function tc() {
  ss || (ss = ec.then(rc))
}

function oi(e) {
  ue(e) ? Vn.push(...e) : on && e.id === -1 ? on.splice(Dn + 1, 0, e) : e.flags & 1 || (Vn.push(e), e.flags |= 1), tc()
}

function $o(e, t, n = Mt + 1) {
  for (; n < lt.length; n++) {
    const r = lt[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid) continue;
      lt.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2)
    }
  }
}

function nc(e) {
  if (Vn.length) {
    const t = [...new Set(Vn)].sort((n, r) => Ar(n) - Ar(r));
    if (Vn.length = 0, on) {
      on.push(...t);
      return
    }
    for (on = t, Dn = 0; Dn < on.length; Dn++) {
      const n = on[Dn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2
    }
    on = null, Dn = 0
  }
}
const Ar = e => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;

function rc(e) {
  try {
    for (Mt = 0; Mt < lt.length; Mt++) {
      const t = lt[Mt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Fr(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2))
    }
  } finally {
    for (; Mt < lt.length; Mt++) {
      const t = lt[Mt];
      t && (t.flags &= -2)
    }
    Mt = -1, lt.length = 0, nc(), ss = null, (lt.length || Vn.length) && rc()
  }
}
let Je = null,
  sc = null;

function is(e) {
  const t = Je;
  return Je = e, sc = e && e.type.__scopeId || null, t
}

function ud(e, t = Je, n) {
  if (!t || e._n) return e;
  const r = (...s) => {
    r._d && el(-1);
    const i = is(t);
    let o;
    try {
      o = e(...s)
    } finally {
      is(i), r._d && el(1)
    }
    return o
  };
  return r._n = !0, r._c = !0, r._d = !0, r
}

function wv(e, t) {
  if (Je === null) return e;
  const n = Os(Je),
    r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, o, l, a = ve] = t[s];
    i && (ce(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Yt(o), r.push({
      dir: i,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }))
  }
  return e
}

function gn(e, t, n, r) {
  const s = e.dirs,
    i = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const l = s[o];
    i && (l.oldValue = i[o].value);
    let a = l.dir[r];
    a && (zt(), jt(a, n, 8, [e.el, l, e, t]), en())
  }
}
const ic = Symbol("_vte"),
  fd = e => e.__isTeleport,
  hr = e => e && (e.disabled || e.disabled === ""),
  Uo = e => e && (e.defer || e.defer === ""),
  Bo = e => typeof SVGElement < "u" && e instanceof SVGElement,
  Ho = e => typeof MathMLElement == "function" && e instanceof MathMLElement,
  li = (e, t) => {
    const n = e && e.to;
    return Qe(n) ? t ? t(n) : null : n
  },
  oc = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, r, s, i, o, l, a, c) {
      const {
        mc: f,
        pc: u,
        pbc: d,
        o: {
          insert: h,
          querySelector: b,
          createText: y,
          createComment: D
        }
      } = c, v = hr(t.props);
      let {
        shapeFlag: O,
        children: R,
        dynamicChildren: S
      } = t;
      if (e == null) {
        const P = t.el = y(""),
          x = t.anchor = y("");
        h(P, n, r), h(x, n, r);
        const w = (H, Q) => {
            O & 16 && (s && s.isCE && (s.ce._teleportTarget = H), f(R, H, Q, s, i, o, l, a))
          },
          W = () => {
            const H = t.target = li(t.props, b),
              Q = lc(H, t, y, h);
            H && (o !== "svg" && Bo(H) ? o = "svg" : o !== "mathml" && Ho(H) && (o = "mathml"), v || (w(H, Q), Jr(t, !1)))
          };
        v && (w(n, x), Jr(t, !0)), Uo(t.props) ? (t.el.__isMounted = !1, it(() => {
          W(), delete t.el.__isMounted
        }, i)) : W()
      } else {
        if (Uo(t.props) && e.el.__isMounted === !1) {
          it(() => {
            oc.process(e, t, n, r, s, i, o, l, a, c)
          }, i);
          return
        }
        t.el = e.el, t.targetStart = e.targetStart;
        const P = t.anchor = e.anchor,
          x = t.target = e.target,
          w = t.targetAnchor = e.targetAnchor,
          W = hr(e.props),
          H = W ? n : x,
          Q = W ? P : w;
        if (o === "svg" || Bo(x) ? o = "svg" : (o === "mathml" || Ho(x)) && (o = "mathml"), S ? (d(e.dynamicChildren, S, H, s, i, o, l), fo(e, t, !0)) : a || u(e, t, H, Q, s, i, o, l, !1), v) W ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : $r(t, n, P, c, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const se = t.target = li(t.props, b);
          se && $r(t, se, null, c, 0)
        } else W && $r(t, x, w, c, 1);
        Jr(t, v)
      }
    },
    remove(e, t, n, {
      um: r,
      o: {
        remove: s
      }
    }, i) {
      const {
        shapeFlag: o,
        children: l,
        anchor: a,
        targetStart: c,
        targetAnchor: f,
        target: u,
        props: d
      } = e;
      if (u && (s(c), s(f)), i && s(a), o & 16) {
        const h = i || !hr(d);
        for (let b = 0; b < l.length; b++) {
          const y = l[b];
          r(y, t, n, h, !!y.dynamicChildren)
        }
      }
    },
    move: $r,
    hydrate: dd
  };

function $r(e, t, n, {
  o: {
    insert: r
  },
  m: s
}, i = 2) {
  i === 0 && r(e.targetAnchor, t, n);
  const {
    el: o,
    anchor: l,
    shapeFlag: a,
    children: c,
    props: f
  } = e, u = i === 2;
  if (u && r(o, t, n), (!u || hr(f)) && a & 16)
    for (let d = 0; d < c.length; d++) s(c[d], t, n, 2);
  u && r(l, t, n)
}

function dd(e, t, n, r, s, i, {
  o: {
    nextSibling: o,
    parentNode: l,
    querySelector: a,
    insert: c,
    createText: f
  }
}, u) {
  const d = t.target = li(t.props, a);
  if (d) {
    const h = hr(t.props),
      b = d._lpa || d.firstChild;
    if (t.shapeFlag & 16)
      if (h) t.anchor = u(o(e), t, l(e), n, r, s, i), t.targetStart = b, t.targetAnchor = b && o(b);
      else {
        t.anchor = o(e);
        let y = b;
        for (; y;) {
          if (y && y.nodeType === 8) {
            if (y.data === "teleport start anchor") t.targetStart = y;
            else if (y.data === "teleport anchor") {
              t.targetAnchor = y, d._lpa = t.targetAnchor && o(t.targetAnchor);
              break
            }
          }
          y = o(y)
        }
        t.targetAnchor || lc(d, t, f, c), u(b && o(b), t, d, n, r, s, i)
      } Jr(t, h)
  }
  return t.anchor && o(t.anchor)
}
const Dv = oc;

function Jr(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, s;
    for (t ? (r = e.el, s = e.anchor) : (r = e.targetStart, s = e.targetAnchor); r && r !== s;) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut()
  }
}

function lc(e, t, n, r) {
  const s = t.targetStart = n(""),
    i = t.targetAnchor = n("");
  return s[ic] = i, e && (r(s, e), r(i, e)), i
}

function so(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, so(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}

function Nn(e, t) {
  return ce(e) ? Ze({
    name: e.name
  }, t, {
    setup: e
  }) : e
}

function io(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}

function Fv(e) {
  const t = ft(),
    n = gs(null);
  if (t) {
    const s = t.refs === ve ? t.refs = {} : t.refs;
    Object.defineProperty(s, e, {
      enumerable: !0,
      get: () => n.value,
      set: i => n.value = i
    })
  }
  return n
}

function mr(e, t, n, r, s = !1) {
  if (ue(e)) {
    e.forEach((b, y) => mr(b, t && (ue(t) ? t[y] : t), n, r, s));
    return
  }
  if (jn(r) && !s) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && mr(e, t, n, r.component.subTree);
    return
  }
  const i = r.shapeFlag & 4 ? Os(r.component) : r.el,
    o = s ? null : i,
    {
      i: l,
      r: a
    } = e,
    c = t && t.r,
    f = l.refs === ve ? l.refs = {} : l.refs,
    u = l.setupState,
    d = ge(u),
    h = u === ve ? () => !1 : b => Le(d, b);
  if (c != null && c !== a && (Qe(c) ? (f[c] = null, h(c) && (u[c] = null)) : Te(c) && (c.value = null)), ce(a)) Fr(a, l, 12, [o, f]);
  else {
    const b = Qe(a),
      y = Te(a);
    if (b || y) {
      const D = () => {
        if (e.f) {
          const v = b ? h(a) ? u[a] : f[a] : a.value;
          s ? ue(v) && Ja(v, i) : ue(v) ? v.includes(i) || v.push(i) : b ? (f[a] = [i], h(a) && (u[a] = f[a])) : (a.value = [i], e.k && (f[e.k] = a.value))
        } else b ? (f[a] = o, h(a) && (u[a] = o)) : y && (a.value = o, e.k && (f[e.k] = o))
      };
      o ? (D.id = -1, it(D, n)) : D()
    }
  }
}
const Wo = e => e.nodeType === 8;
vs()
  .requestIdleCallback;
vs()
  .cancelIdleCallback;

function hd(e, t) {
  if (Wo(e) && e.data === "[") {
    let n = 1,
      r = e.nextSibling;
    for (; r;) {
      if (r.nodeType === 1) {
        if (t(r) === !1) break
      } else if (Wo(r))
        if (r.data === "]") {
          if (--n === 0) break
        } else r.data === "[" && n++;
      r = r.nextSibling
    }
  } else t(e)
}
const jn = e => !!e.type.__asyncLoader;

function xv(e) {
  ce(e) && (e = {
    loader: e
  });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: r,
    delay: s = 200,
    hydrate: i,
    timeout: o,
    suspensible: l = !0,
    onError: a
  } = e;
  let c = null,
    f, u = 0;
  const d = () => (u++, c = null, h()),
    h = () => {
      let b;
      return c || (b = c = t()
        .catch(y => {
          if (y = y instanceof Error ? y : new Error(String(y)), a) return new Promise((D, v) => {
            a(y, () => D(d()), () => v(y), u + 1)
          });
          throw y
        })
        .then(y => b !== c && c ? c : (y && (y.__esModule || y[Symbol.toStringTag] === "Module") && (y = y.default), f = y, y)))
    };
  return Nn({
    name: "AsyncComponentWrapper",
    __asyncLoader: h,
    __asyncHydrate(b, y, D) {
      let v = !1;
      (y.bu || (y.bu = []))
      .push(() => v = !0);
      const O = () => {
          v || D()
        },
        R = i ? () => {
          const S = i(O, P => hd(b, P));
          S && (y.bum || (y.bum = []))
            .push(S)
        } : O;
      f ? R() : h()
        .then(() => !y.isUnmounted && R())
    },
    get __asyncResolved() {
      return f
    },
    setup() {
      const b = Xe;
      if (io(b), f) return () => Us(f, b);
      const y = R => {
        c = null, zn(R, b, 13, !r)
      };
      if (l && b.suspense || Gn) return h()
        .then(R => () => Us(R, b))
        .catch(R => (y(R), () => r ? Ue(r, {
          error: R
        }) : null));
      const D = Ge(!1),
        v = Ge(),
        O = Ge(!!s);
      return s && setTimeout(() => {
          O.value = !1
        }, s), o != null && setTimeout(() => {
          if (!D.value && !v.value) {
            const R = new Error(`Async component timed out after ${o}ms.`);
            y(R), v.value = R
          }
        }, o), h()
        .then(() => {
          D.value = !0, b.parent && oo(b.parent.vnode) && b.parent.update()
        })
        .catch(R => {
          y(R), v.value = R
        }), () => {
          if (D.value && f) return Us(f, b);
          if (v.value && r) return Ue(r, {
            error: v.value
          });
          if (n && !O.value) return Ue(n)
        }
    }
  })
}

function Us(e, t) {
  const {
    ref: n,
    props: r,
    children: s,
    ce: i
  } = t.vnode, o = Ue(e, r, s);
  return o.ref = n, o.ce = i, delete t.vnode.ce, o
}
const oo = e => e.type.__isKeepAlive;

function md(e, t) {
  ac(e, "a", t)
}

function pd(e, t) {
  ac(e, "da", t)
}

function ac(e, t, n = Xe) {
  const r = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s;) {
      if (s.isDeactivated) return;
      s = s.parent
    }
    return e()
  });
  if (ys(t, r, n), n) {
    let s = n.parent;
    for (; s && s.parent;) oo(s.parent.vnode) && gd(r, t, n, s), s = s.parent
  }
}

function gd(e, t, n, r) {
  const s = ys(t, e, r, !0);
  lo(() => {
    Ja(r[t], s)
  }, n)
}

function ys(e, t, n = Xe, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      i = t.__weh || (t.__weh = (...o) => {
        zt();
        const l = Cn(n),
          a = jt(t, n, e, o);
        return l(), en(), a
      });
    return r ? s.unshift(i) : s.push(i), i
  }
}
const nn = e => (t, n = Xe) => {
    (!Gn || e === "sp") && ys(e, (...r) => t(...r), n)
  },
  cc = nn("bm"),
  bs = nn("m"),
  _d = nn("bu"),
  vd = nn("u"),
  uc = nn("bum"),
  lo = nn("um"),
  yd = nn("sp"),
  bd = nn("rtg"),
  Ed = nn("rtc");

function Ad(e, t = Xe) {
  ys("ec", e, t)
}
const fc = "components";

function kv(e, t) {
  return hc(fc, e, !0, t) || e
}
const dc = Symbol.for("v-ndc");

function Mv(e) {
  return Qe(e) ? hc(fc, e, !1) || e : e || dc
}

function hc(e, t, n = !0, r = !1) {
  const s = Je || Xe;
  if (s) {
    const i = s.type;
    {
      const l = _h(i, !1);
      if (l && (l === t || l === Tt(t) || l === eo(Tt(t)))) return i
    }
    const o = Go(s[e] || i[e], t) || Go(s.appContext[e], t);
    return !o && r ? i : o
  }
}

function Go(e, t) {
  return e && (e[t] || e[Tt(t)] || e[eo(Tt(t))])
}

function Vv(e, t, n, r) {
  let s;
  const i = n,
    o = ue(e);
  if (o || Qe(e)) {
    const l = o && fn(e);
    let a = !1,
      c = !1;
    l && (a = !It(e), c = dn(e), e = ps(e)), s = new Array(e.length);
    for (let f = 0, u = e.length; f < u; f++) s[f] = t(a ? c ? ns(qe(e[f])) : qe(e[f]) : e[f], f, void 0, i)
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let l = 0; l < e; l++) s[l] = t(l + 1, l, void 0, i)
  } else if (Ye(e))
    if (e[Symbol.iterator]) s = Array.from(e, (l, a) => t(l, a, void 0, i));
    else {
      const l = Object.keys(e);
      s = new Array(l.length);
      for (let a = 0, c = l.length; a < c; a++) {
        const f = l[a];
        s[a] = t(e[f], f, a, i)
      }
    }
  else s = [];
  return s
}

function jv(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (ue(r))
      for (let s = 0; s < r.length; s++) e[r[s].name] = r[s].fn;
    else r && (e[r.name] = r.key ? (...s) => {
      const i = r.fn(...s);
      return i && (i.key = r.key), i
    } : r.fn)
  }
  return e
}

function $v(e, t, n = {}, r, s) {
  if (Je.ce || Je.parent && jn(Je.parent) && Je.parent.ce) return t !== "default" && (n.name = t), Ir(), hi(mt, null, [Ue("slot", n, r && r())], 64);
  let i = e[t];
  i && i._c && (i._d = !1), Ir();
  const o = i && mc(i(n)),
    l = n.key || o && o.key,
    a = hi(mt, {
      key: (l && !Zi(l) ? l : `_${t}`) + (!o && r ? "_fb" : "")
    }, o || (r ? r() : []), o && e._ === 1 ? 64 : -2);
  return !s && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), i && i._c && (i._d = !0), a
}

function mc(e) {
  return e.some(t => Hn(t) ? !(t.type === wt || t.type === mt && !mc(t.children)) : !0) ? e : null
}

function Uv(e, t) {
  const n = {};
  for (const r in e) n[Xr(r)] = e[r];
  return n
}
const ai = e => e ? Fc(e) ? Os(e) : ai(e.parent) : null,
  pr = Ze(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => ai(e.parent),
    $root: e => ai(e.root),
    $host: e => e.ce,
    $emit: e => e.emit,
    $options: e => ao(e),
    $forceUpdate: e => e.f || (e.f = () => {
      ro(e.update)
    }),
    $nextTick: e => e.n || (e.n = yt.bind(e.proxy)),
    $watch: e => Yd.bind(e)
  }),
  Bs = (e, t) => e !== ve && !e.__isScriptSetup && Le(e, t),
  Od = {
    get({
      _: e
    }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: r,
        data: s,
        props: i,
        accessCache: o,
        type: l,
        appContext: a
      } = e;
      let c;
      if (t[0] !== "$") {
        const h = o[t];
        if (h !== void 0) switch (h) {
          case 1:
            return r[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return i[t]
        } else {
          if (Bs(r, t)) return o[t] = 1, r[t];
          if (s !== ve && Le(s, t)) return o[t] = 2, s[t];
          if ((c = e.propsOptions[0]) && Le(c, t)) return o[t] = 3, i[t];
          if (n !== ve && Le(n, t)) return o[t] = 4, n[t];
          ci && (o[t] = 0)
        }
      }
      const f = pr[t];
      let u, d;
      if (f) return t === "$attrs" && rt(e.attrs, "get", ""), f(e);
      if ((u = l.__cssModules) && (u = u[t])) return u;
      if (n !== ve && Le(n, t)) return o[t] = 4, n[t];
      if (d = a.config.globalProperties, Le(d, t)) return d[t]
    },
    set({
      _: e
    }, t, n) {
      const {
        data: r,
        setupState: s,
        ctx: i
      } = e;
      return Bs(s, t) ? (s[t] = n, !0) : r !== ve && Le(r, t) ? (r[t] = n, !0) : Le(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0)
    },
    has({
      _: {
        data: e,
        setupState: t,
        accessCache: n,
        ctx: r,
        appContext: s,
        propsOptions: i
      }
    }, o) {
      let l;
      return !!n[o] || e !== ve && Le(e, o) || Bs(t, o) || (l = i[0]) && Le(l, o) || Le(r, o) || Le(pr, o) || Le(s.config.globalProperties, o)
    },
    defineProperty(e, t, n) {
      return n.get != null ? e._.accessCache[t] = 0 : Le(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
    }
  };

function Bv() {
  return Sd()
    .attrs
}

function Sd(e) {
  const t = ft();
  return t.setupContext || (t.setupContext = kc(t))
}

function Or(e) {
  return ue(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e
}

function Hv(e, t) {
  const n = Or(e);
  for (const r in t) {
    if (r.startsWith("__skip")) continue;
    let s = n[r];
    s ? ue(s) || ce(s) ? s = n[r] = {
      type: s,
      default: t[r]
    } : s.default = t[r] : s === null && (s = n[r] = {
      default: t[r]
    }), s && t[`__skip_${r}`] && (s.skipFactory = !0)
  }
  return n
}

function Wv(e, t) {
  return !e || !t ? e || t : ue(e) && ue(t) ? e.concat(t) : Ze({}, Or(e), Or(t))
}

function Gv(e) {
  const t = ft();
  let n = e();
  return pi(), Qi(n) && (n = n.catch(r => {
    throw Cn(t), r
  })), [n, () => Cn(t)]
}
let ci = !0;

function Id(e) {
  const t = ao(e),
    n = e.proxy,
    r = e.ctx;
  ci = !1, t.beforeCreate && Ko(t.beforeCreate, e, "bc");
  const {
    data: s,
    computed: i,
    methods: o,
    watch: l,
    provide: a,
    inject: c,
    created: f,
    beforeMount: u,
    mounted: d,
    beforeUpdate: h,
    updated: b,
    activated: y,
    deactivated: D,
    beforeDestroy: v,
    beforeUnmount: O,
    destroyed: R,
    unmounted: S,
    render: P,
    renderTracked: x,
    renderTriggered: w,
    errorCaptured: W,
    serverPrefetch: H,
    expose: Q,
    inheritAttrs: se,
    components: ne,
    directives: me,
    filters: Ie
  } = t;
  if (c && Cd(c, r, null), o)
    for (const J in o) {
      const de = o[J];
      ce(de) && (r[J] = de.bind(n))
    }
  if (s) {
    const J = s.call(n, n);
    Ye(J) && (e.data = tn(J))
  }
  if (ci = !0, i)
    for (const J in i) {
      const de = i[J],
        Ae = ce(de) ? de.bind(n, n) : ce(de.get) ? de.get.bind(n, n) : Zt,
        Ve = !ce(de) && ce(de.set) ? de.set.bind(n) : Zt,
        je = le({
          get: Ae,
          set: Ve
        });
      Object.defineProperty(r, J, {
        enumerable: !0,
        configurable: !0,
        get: () => je.value,
        set: xe => je.value = xe
      })
    }
  if (l)
    for (const J in l) pc(l[J], r, n, J);
  if (a) {
    const J = ce(a) ? a.call(n) : a;
    Reflect.ownKeys(J)
      .forEach(de => {
        In(de, J[de])
      })
  }
  f && Ko(f, e, "c");

  function ae(J, de) {
    ue(de) ? de.forEach(Ae => J(Ae.bind(n))) : de && J(de.bind(n))
  }
  if (ae(cc, u), ae(bs, d), ae(_d, h), ae(vd, b), ae(md, y), ae(pd, D), ae(Ad, W), ae(Ed, x), ae(bd, w), ae(uc, O), ae(lo, S), ae(yd, H), ue(Q))
    if (Q.length) {
      const J = e.exposed || (e.exposed = {});
      Q.forEach(de => {
        Object.defineProperty(J, de, {
          get: () => n[de],
          set: Ae => n[de] = Ae,
          enumerable: !0
        })
      })
    } else e.exposed || (e.exposed = {});
  P && e.render === Zt && (e.render = P), se != null && (e.inheritAttrs = se), ne && (e.components = ne), me && (e.directives = me), H && io(e)
}

function Cd(e, t, n = Zt) {
  ue(e) && (e = ui(e));
  for (const r in e) {
    const s = e[r];
    let i;
    Ye(s) ? "default" in s ? i = Ct(s.from || r, s.default, !0) : i = Ct(s.from || r) : i = Ct(s), Te(i) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: o => i.value = o
    }) : t[r] = i
  }
}

function Ko(e, t, n) {
  jt(ue(e) ? e.map(r => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}

function pc(e, t, n, r) {
  let s = r.includes(".") ? Cc(n, r) : () => n[r];
  if (Qe(e)) {
    const i = t[e];
    ce(i) && ct(s, i)
  } else if (ce(e)) ct(s, e.bind(n));
  else if (Ye(e))
    if (ue(e)) e.forEach(i => pc(i, t, n, r));
    else {
      const i = ce(e.handler) ? e.handler.bind(n) : t[e.handler];
      ce(i) && ct(s, i, e)
    }
}

function ao(e) {
  const t = e.type,
    {
      mixins: n,
      extends: r
    } = t,
    {
      mixins: s,
      optionsCache: i,
      config: {
        optionMergeStrategies: o
      }
    } = e.appContext,
    l = i.get(t);
  let a;
  return l ? a = l : !s.length && !n && !r ? a = t : (a = {}, s.length && s.forEach(c => os(a, c, o, !0)), os(a, t, o)), Ye(t) && i.set(t, a), a
}

function os(e, t, n, r = !1) {
  const {
    mixins: s,
    extends: i
  } = t;
  i && os(e, i, n, !0), s && s.forEach(o => os(e, o, n, !0));
  for (const o in t)
    if (!(r && o === "expose")) {
      const l = Td[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o]
    } return e
}
const Td = {
  data: Yo,
  props: qo,
  emits: qo,
  methods: or,
  computed: or,
  beforeCreate: st,
  created: st,
  beforeMount: st,
  mounted: st,
  beforeUpdate: st,
  updated: st,
  beforeDestroy: st,
  beforeUnmount: st,
  destroyed: st,
  unmounted: st,
  activated: st,
  deactivated: st,
  errorCaptured: st,
  serverPrefetch: st,
  components: or,
  directives: or,
  watch: Nd,
  provide: Yo,
  inject: Rd
};

function Yo(e, t) {
  return t ? e ? function() {
    return Ze(ce(e) ? e.call(this, this) : e, ce(t) ? t.call(this, this) : t)
  } : t : e
}

function Rd(e, t) {
  return or(ui(e), ui(t))
}

function ui(e) {
  if (ue(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t
  }
  return e
}

function st(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}

function or(e, t) {
  return e ? Ze(Object.create(null), e, t) : t
}

function qo(e, t) {
  return e ? ue(e) && ue(t) ? [...new Set([...e, ...t])] : Ze(Object.create(null), Or(e), Or(t ?? {})) : t
}

function Nd(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ze(Object.create(null), e);
  for (const r in t) n[r] = st(e[r], t[r]);
  return n
}

function gc() {
  return {
    app: null,
    config: {
      isNativeTag: qf,
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
let Pd = 0;

function Ld(e, t) {
  return function(r, s = null) {
    ce(r) || (r = Ze({}, r)), s != null && !Ye(s) && (s = null);
    const i = gc(),
      o = new WeakSet,
      l = [];
    let a = !1;
    const c = i.app = {
      _uid: Pd++,
      _component: r,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: yh,
      get config() {
        return i.config
      },
      set config(f) {},
      use(f, ...u) {
        return o.has(f) || (f && ce(f.install) ? (o.add(f), f.install(c, ...u)) : ce(f) && (o.add(f), f(c, ...u))), c
      },
      mixin(f) {
        return i.mixins.includes(f) || i.mixins.push(f), c
      },
      component(f, u) {
        return u ? (i.components[f] = u, c) : i.components[f]
      },
      directive(f, u) {
        return u ? (i.directives[f] = u, c) : i.directives[f]
      },
      mount(f, u, d) {
        if (!a) {
          const h = c._ceVNode || Ue(r, s);
          return h.appContext = i, d === !0 ? d = "svg" : d === !1 && (d = void 0), e(h, f, d), a = !0, c._container = f, f.__vue_app__ = c, Os(h.component)
        }
      },
      onUnmount(f) {
        l.push(f)
      },
      unmount() {
        a && (jt(l, c._instance, 16), e(null, c._container), delete c._container.__vue_app__)
      },
      provide(f, u) {
        return i.provides[f] = u, c
      },
      runWithContext(f) {
        const u = Sn;
        Sn = c;
        try {
          return f()
        } finally {
          Sn = u
        }
      }
    };
    return c
  }
}
let Sn = null;

function In(e, t) {
  if (Xe) {
    let n = Xe.provides;
    const r = Xe.parent && Xe.parent.provides;
    r === n && (n = Xe.provides = Object.create(r)), n[e] = t
  }
}

function Ct(e, t, n = !1) {
  const r = ft();
  if (r || Sn) {
    let s = Sn ? Sn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && ce(t) ? t.call(r && r.proxy) : t
  }
}

function wd() {
  return !!(ft() || Sn)
}
const _c = {},
  vc = () => Object.create(_c),
  yc = e => Object.getPrototypeOf(e) === _c;

function Dd(e, t, n, r = !1) {
  const s = {},
    i = vc();
  e.propsDefaults = Object.create(null), bc(e, t, s, i);
  for (const o in e.propsOptions[0]) o in s || (s[o] = void 0);
  n ? e.props = r ? s : Ga(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i
}

function Fd(e, t, n, r) {
  const {
    props: s,
    attrs: i,
    vnode: {
      patchFlag: o
    }
  } = e, l = ge(s), [a] = e.propsOptions;
  let c = !1;
  if ((r || o > 0) && !(o & 16)) {
    if (o & 8) {
      const f = e.vnode.dynamicProps;
      for (let u = 0; u < f.length; u++) {
        let d = f[u];
        if (As(e.emitsOptions, d)) continue;
        const h = t[d];
        if (a)
          if (Le(i, d)) h !== i[d] && (i[d] = h, c = !0);
          else {
            const b = Tt(d);
            s[b] = fi(a, l, b, h, e, !1)
          }
        else h !== i[d] && (i[d] = h, c = !0)
      }
    }
  } else {
    bc(e, t, s, i) && (c = !0);
    let f;
    for (const u in l)(!t || !Le(t, u) && ((f = Qn(u)) === u || !Le(t, f))) && (a ? n && (n[u] !== void 0 || n[f] !== void 0) && (s[u] = fi(a, l, u, void 0, e, !0)) : delete s[u]);
    if (i !== l)
      for (const u in i)(!t || !Le(t, u)) && (delete i[u], c = !0)
  }
  c && Kt(e.attrs, "set", "")
}

function bc(e, t, n, r) {
  const [s, i] = e.propsOptions;
  let o = !1,
    l;
  if (t)
    for (let a in t) {
      if (dr(a)) continue;
      const c = t[a];
      let f;
      s && Le(s, f = Tt(a)) ? !i || !i.includes(f) ? n[f] = c : (l || (l = {}))[f] = c : As(e.emitsOptions, a) || (!(a in r) || c !== r[a]) && (r[a] = c, o = !0)
    }
  if (i) {
    const a = ge(n),
      c = l || ve;
    for (let f = 0; f < i.length; f++) {
      const u = i[f];
      n[u] = fi(s, a, u, c[u], e, !Le(c, u))
    }
  }
  return o
}

function fi(e, t, n, r, s, i) {
  const o = e[n];
  if (o != null) {
    const l = Le(o, "default");
    if (l && r === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && ce(a)) {
        const {
          propsDefaults: c
        } = s;
        if (n in c) r = c[n];
        else {
          const f = Cn(s);
          r = c[n] = a.call(null, t), f()
        }
      } else r = a;
      s.ce && s.ce._setProp(n, r)
    }
    o[0] && (i && !l ? r = !1 : o[1] && (r === "" || r === Qn(n)) && (r = !0))
  }
  return r
}
const xd = new WeakMap;

function Ec(e, t, n = !1) {
  const r = n ? xd : t.propsCache,
    s = r.get(e);
  if (s) return s;
  const i = e.props,
    o = {},
    l = [];
  let a = !1;
  if (!ce(e)) {
    const f = u => {
      a = !0;
      const [d, h] = Ec(u, t, !0);
      Ze(o, d), h && l.push(...h)
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f)
  }
  if (!i && !a) return Ye(e) && r.set(e, Mn), Mn;
  if (ue(i))
    for (let f = 0; f < i.length; f++) {
      const u = Tt(i[f]);
      Xo(u) && (o[u] = ve)
    } else if (i)
      for (const f in i) {
        const u = Tt(f);
        if (Xo(u)) {
          const d = i[f],
            h = o[u] = ue(d) || ce(d) ? {
              type: d
            } : Ze({}, d),
            b = h.type;
          let y = !1,
            D = !0;
          if (ue(b))
            for (let v = 0; v < b.length; ++v) {
              const O = b[v],
                R = ce(O) && O.name;
              if (R === "Boolean") {
                y = !0;
                break
              } else R === "String" && (D = !1)
            } else y = ce(b) && b.name === "Boolean";
          h[0] = y, h[1] = D, (y || Le(h, "default")) && l.push(u)
        }
      }
  const c = [o, l];
  return Ye(e) && r.set(e, c), c
}

function Xo(e) {
  return e[0] !== "$" && !dr(e)
}
const co = e => e === "_" || e === "__" || e === "_ctx" || e === "$stable",
  uo = e => ue(e) ? e.map(Rt) : [Rt(e)],
  kd = (e, t, n) => {
    if (t._n) return t;
    const r = ud((...s) => uo(t(...s)), n);
    return r._c = !1, r
  },
  Ac = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
      if (co(s)) continue;
      const i = e[s];
      if (ce(i)) t[s] = kd(s, i, r);
      else if (i != null) {
        const o = uo(i);
        t[s] = () => o
      }
    }
  },
  Oc = (e, t) => {
    const n = uo(t);
    e.slots.default = () => n
  },
  Sc = (e, t, n) => {
    for (const r in t)(n || !co(r)) && (e[r] = t[r])
  },
  Md = (e, t, n) => {
    const r = e.slots = vc();
    if (e.vnode.shapeFlag & 32) {
      const s = t.__;
      s && Vo(r, "__", s, !0);
      const i = t._;
      i ? (Sc(r, t, n), n && Vo(r, "_", i, !0)) : Ac(t, r)
    } else t && Oc(e, t)
  },
  Vd = (e, t, n) => {
    const {
      vnode: r,
      slots: s
    } = e;
    let i = !0,
      o = ve;
    if (r.shapeFlag & 32) {
      const l = t._;
      l ? n && l === 1 ? i = !1 : Sc(s, t, n) : (i = !t.$stable, Ac(t, s)), o = t
    } else t && (Oc(e, t), o = {
      default: 1
    });
    if (i)
      for (const l in s) !co(l) && o[l] == null && delete s[l]
  },
  it = sh;

function jd(e) {
  return $d(e)
}

function $d(e, t) {
  const n = vs();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: s,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: a,
    setText: c,
    setElementText: f,
    parentNode: u,
    nextSibling: d,
    setScopeId: h = Zt,
    insertStaticContent: b
  } = e, y = (g, _, I, k = null, j = null, M = null, m = void 0, p = null, E = !!_.dynamicChildren) => {
    if (g === _) return;
    g && !cn(g, _) && (k = L(g), xe(g, j, M, !0), g = null), _.patchFlag === -2 && (E = !1, _.dynamicChildren = null);
    const {
      type: N,
      ref: G,
      shapeFlag: V
    } = _;
    switch (N) {
      case xr:
        D(g, _, I, k);
        break;
      case wt:
        v(g, _, I, k);
        break;
      case Ws:
        g == null && O(_, I, k, m);
        break;
      case mt:
        ne(g, _, I, k, j, M, m, p, E);
        break;
      default:
        V & 1 ? P(g, _, I, k, j, M, m, p, E) : V & 6 ? me(g, _, I, k, j, M, m, p, E) : (V & 64 || V & 128) && N.process(g, _, I, k, j, M, m, p, E, q)
    }
    G != null && j ? mr(G, g && g.ref, M, _ || g, !_) : G == null && g && g.ref != null && mr(g.ref, null, M, g, !0)
  }, D = (g, _, I, k) => {
    if (g == null) r(_.el = l(_.children), I, k);
    else {
      const j = _.el = g.el;
      _.children !== g.children && c(j, _.children)
    }
  }, v = (g, _, I, k) => {
    g == null ? r(_.el = a(_.children || ""), I, k) : _.el = g.el
  }, O = (g, _, I, k) => {
    [g.el, g.anchor] = b(g.children, _, I, k, g.el, g.anchor)
  }, R = ({
    el: g,
    anchor: _
  }, I, k) => {
    let j;
    for (; g && g !== _;) j = d(g), r(g, I, k), g = j;
    r(_, I, k)
  }, S = ({
    el: g,
    anchor: _
  }) => {
    let I;
    for (; g && g !== _;) I = d(g), s(g), g = I;
    s(_)
  }, P = (g, _, I, k, j, M, m, p, E) => {
    _.type === "svg" ? m = "svg" : _.type === "math" && (m = "mathml"), g == null ? x(_, I, k, j, M, m, p, E) : H(g, _, j, M, m, p, E)
  }, x = (g, _, I, k, j, M, m, p) => {
    let E, N;
    const {
      props: G,
      shapeFlag: V,
      transition: A,
      dirs: F
    } = g;
    if (E = g.el = o(g.type, M, G && G.is, G), V & 8 ? f(E, g.children) : V & 16 && W(g.children, E, null, k, j, Hs(g, M), m, p), F && gn(g, null, k, "created"), w(E, g, g.scopeId, m, k), G) {
      for (const ie in G) ie !== "value" && !dr(ie) && i(E, ie, null, G[ie], M, k);
      "value" in G && i(E, "value", null, G.value, M), (N = G.onVnodeBeforeMount) && Ft(N, k, g)
    }
    F && gn(g, null, k, "beforeMount");
    const Z = Ud(j, A);
    Z && A.beforeEnter(E), r(E, _, I), ((N = G && G.onVnodeMounted) || Z || F) && it(() => {
      N && Ft(N, k, g), Z && A.enter(E), F && gn(g, null, k, "mounted")
    }, j)
  }, w = (g, _, I, k, j) => {
    if (I && h(g, I), k)
      for (let M = 0; M < k.length; M++) h(g, k[M]);
    if (j) {
      let M = j.subTree;
      if (_ === M || Nc(M.type) && (M.ssContent === _ || M.ssFallback === _)) {
        const m = j.vnode;
        w(g, m, m.scopeId, m.slotScopeIds, j.parent)
      }
    }
  }, W = (g, _, I, k, j, M, m, p, E = 0) => {
    for (let N = E; N < g.length; N++) {
      const G = g[N] = p ? ln(g[N]) : Rt(g[N]);
      y(null, G, _, I, k, j, M, m, p)
    }
  }, H = (g, _, I, k, j, M, m) => {
    const p = _.el = g.el;
    let {
      patchFlag: E,
      dynamicChildren: N,
      dirs: G
    } = _;
    E |= g.patchFlag & 16;
    const V = g.props || ve,
      A = _.props || ve;
    let F;
    if (I && _n(I, !1), (F = A.onVnodeBeforeUpdate) && Ft(F, I, _, g), G && gn(_, g, I, "beforeUpdate"), I && _n(I, !0), (V.innerHTML && A.innerHTML == null || V.textContent && A.textContent == null) && f(p, ""), N ? Q(g.dynamicChildren, N, p, I, k, Hs(_, j), M) : m || de(g, _, p, null, I, k, Hs(_, j), M, !1), E > 0) {
      if (E & 16) se(p, V, A, I, j);
      else if (E & 2 && V.class !== A.class && i(p, "class", null, A.class, j), E & 4 && i(p, "style", V.style, A.style, j), E & 8) {
        const Z = _.dynamicProps;
        for (let ie = 0; ie < Z.length; ie++) {
          const fe = Z[ie],
            $e = V[fe],
            Fe = A[fe];
          (Fe !== $e || fe === "value") && i(p, fe, $e, Fe, j, I)
        }
      }
      E & 1 && g.children !== _.children && f(p, _.children)
    } else !m && N == null && se(p, V, A, I, j);
    ((F = A.onVnodeUpdated) || G) && it(() => {
      F && Ft(F, I, _, g), G && gn(_, g, I, "updated")
    }, k)
  }, Q = (g, _, I, k, j, M, m) => {
    for (let p = 0; p < _.length; p++) {
      const E = g[p],
        N = _[p],
        G = E.el && (E.type === mt || !cn(E, N) || E.shapeFlag & 198) ? u(E.el) : I;
      y(E, N, G, null, k, j, M, m, !0)
    }
  }, se = (g, _, I, k, j) => {
    if (_ !== I) {
      if (_ !== ve)
        for (const M in _) !dr(M) && !(M in I) && i(g, M, _[M], null, j, k);
      for (const M in I) {
        if (dr(M)) continue;
        const m = I[M],
          p = _[M];
        m !== p && M !== "value" && i(g, M, p, m, j, k)
      }
      "value" in I && i(g, "value", _.value, I.value, j)
    }
  }, ne = (g, _, I, k, j, M, m, p, E) => {
    const N = _.el = g ? g.el : l(""),
      G = _.anchor = g ? g.anchor : l("");
    let {
      patchFlag: V,
      dynamicChildren: A,
      slotScopeIds: F
    } = _;
    F && (p = p ? p.concat(F) : F), g == null ? (r(N, I, k), r(G, I, k), W(_.children || [], I, G, j, M, m, p, E)) : V > 0 && V & 64 && A && g.dynamicChildren ? (Q(g.dynamicChildren, A, I, j, M, m, p), (_.key != null || j && _ === j.subTree) && fo(g, _, !0)) : de(g, _, I, G, j, M, m, p, E)
  }, me = (g, _, I, k, j, M, m, p, E) => {
    _.slotScopeIds = p, g == null ? _.shapeFlag & 512 ? j.ctx.activate(_, I, k, m, E) : Ie(_, I, k, j, M, m, E) : Re(g, _, E)
  }, Ie = (g, _, I, k, j, M, m) => {
    const p = g.component = hh(g, k, j);
    if (oo(g) && (p.ctx.renderer = q), mh(p, !1, m), p.asyncDep) {
      if (j && j.registerDep(p, ae, m), !g.el) {
        const E = p.subTree = Ue(wt);
        v(null, E, _, I), g.placeholder = E.el
      }
    } else ae(p, g, _, I, j, M, m)
  }, Re = (g, _, I) => {
    const k = _.component = g.component;
    if (Qd(g, _, I))
      if (k.asyncDep && !k.asyncResolved) {
        J(k, _, I);
        return
      } else k.next = _, k.update();
    else _.el = g.el, k.vnode = _
  }, ae = (g, _, I, k, j, M, m) => {
    const p = () => {
      if (g.isMounted) {
        let {
          next: V,
          bu: A,
          u: F,
          parent: Z,
          vnode: ie
        } = g;
        {
          const C = Ic(g);
          if (C) {
            V && (V.el = ie.el, J(g, V, m)), C.asyncDep.then(() => {
              g.isUnmounted || p()
            });
            return
          }
        }
        let fe = V,
          $e;
        _n(g, !1), V ? (V.el = ie.el, J(g, V, m)) : V = ie, A && js(A), ($e = V.props && V.props.onVnodeBeforeUpdate) && Ft($e, Z, V, ie), _n(g, !0);
        const Fe = Zo(g),
          T = g.subTree;
        g.subTree = Fe, y(T, Fe, u(T.el), L(T), g, j, M), V.el = Fe.el, fe === null && ho(g, Fe.el), F && it(F, j), ($e = V.props && V.props.onVnodeUpdated) && it(() => Ft($e, Z, V, ie), j)
      } else {
        let V;
        const {
          el: A,
          props: F
        } = _, {
          bm: Z,
          m: ie,
          parent: fe,
          root: $e,
          type: Fe
        } = g, T = jn(_);
        _n(g, !1), Z && js(Z), !T && (V = F && F.onVnodeBeforeMount) && Ft(V, fe, _), _n(g, !0);
        {
          $e.ce && $e.ce._def.shadowRoot !== !1 && $e.ce._injectChildStyle(Fe);
          const C = g.subTree = Zo(g);
          y(null, C, I, k, g, j, M), _.el = C.el
        }
        if (ie && it(ie, j), !T && (V = F && F.onVnodeMounted)) {
          const C = _;
          it(() => Ft(V, fe, C), j)
        }(_.shapeFlag & 256 || fe && jn(fe.vnode) && fe.vnode.shapeFlag & 256) && g.a && it(g.a, j), g.isMounted = !0, _ = I = k = null
      }
    };
    g.scope.on();
    const E = g.effect = new La(p);
    g.scope.off();
    const N = g.update = E.run.bind(E),
      G = g.job = E.runIfDirty.bind(E);
    G.i = g, G.id = g.uid, E.scheduler = () => ro(G), _n(g, !0), N()
  }, J = (g, _, I) => {
    _.component = g;
    const k = g.vnode.props;
    g.vnode = _, g.next = null, Fd(g, _.props, k, I), Vd(g, _.children, I), zt(), $o(g), en()
  }, de = (g, _, I, k, j, M, m, p, E = !1) => {
    const N = g && g.children,
      G = g ? g.shapeFlag : 0,
      V = _.children,
      {
        patchFlag: A,
        shapeFlag: F
      } = _;
    if (A > 0) {
      if (A & 128) {
        Ve(N, V, I, k, j, M, m, p, E);
        return
      } else if (A & 256) {
        Ae(N, V, I, k, j, M, m, p, E);
        return
      }
    }
    F & 8 ? (G & 16 && K(N, j, M), V !== N && f(I, V)) : G & 16 ? F & 16 ? Ve(N, V, I, k, j, M, m, p, E) : K(N, j, M, !0) : (G & 8 && f(I, ""), F & 16 && W(V, I, k, j, M, m, p, E))
  }, Ae = (g, _, I, k, j, M, m, p, E) => {
    g = g || Mn, _ = _ || Mn;
    const N = g.length,
      G = _.length,
      V = Math.min(N, G);
    let A;
    for (A = 0; A < V; A++) {
      const F = _[A] = E ? ln(_[A]) : Rt(_[A]);
      y(g[A], F, I, null, j, M, m, p, E)
    }
    N > G ? K(g, j, M, !0, !1, V) : W(_, I, k, j, M, m, p, E, V)
  }, Ve = (g, _, I, k, j, M, m, p, E) => {
    let N = 0;
    const G = _.length;
    let V = g.length - 1,
      A = G - 1;
    for (; N <= V && N <= A;) {
      const F = g[N],
        Z = _[N] = E ? ln(_[N]) : Rt(_[N]);
      if (cn(F, Z)) y(F, Z, I, null, j, M, m, p, E);
      else break;
      N++
    }
    for (; N <= V && N <= A;) {
      const F = g[V],
        Z = _[A] = E ? ln(_[A]) : Rt(_[A]);
      if (cn(F, Z)) y(F, Z, I, null, j, M, m, p, E);
      else break;
      V--, A--
    }
    if (N > V) {
      if (N <= A) {
        const F = A + 1,
          Z = F < G ? _[F].el : k;
        for (; N <= A;) y(null, _[N] = E ? ln(_[N]) : Rt(_[N]), I, Z, j, M, m, p, E), N++
      }
    } else if (N > A)
      for (; N <= V;) xe(g[N], j, M, !0), N++;
    else {
      const F = N,
        Z = N,
        ie = new Map;
      for (N = Z; N <= A; N++) {
        const z = _[N] = E ? ln(_[N]) : Rt(_[N]);
        z.key != null && ie.set(z.key, N)
      }
      let fe, $e = 0;
      const Fe = A - Z + 1;
      let T = !1,
        C = 0;
      const $ = new Array(Fe);
      for (N = 0; N < Fe; N++) $[N] = 0;
      for (N = F; N <= V; N++) {
        const z = g[N];
        if ($e >= Fe) {
          xe(z, j, M, !0);
          continue
        }
        let re;
        if (z.key != null) re = ie.get(z.key);
        else
          for (fe = Z; fe <= A; fe++)
            if ($[fe - Z] === 0 && cn(z, _[fe])) {
              re = fe;
              break
            } re === void 0 ? xe(z, j, M, !0) : ($[re - Z] = N + 1, re >= C ? C = re : T = !0, y(z, _[re], I, null, j, M, m, p, E), $e++)
      }
      const Y = T ? Bd($) : Mn;
      for (fe = Y.length - 1, N = Fe - 1; N >= 0; N--) {
        const z = Z + N,
          re = _[z],
          ee = _[z + 1],
          Ce = z + 1 < G ? ee.el || ee.placeholder : k;
        $[N] === 0 ? y(null, re, I, Ce, j, M, m, p, E) : T && (fe < 0 || N !== Y[fe] ? je(re, I, Ce, 2) : fe--)
      }
    }
  }, je = (g, _, I, k, j = null) => {
    const {
      el: M,
      type: m,
      transition: p,
      children: E,
      shapeFlag: N
    } = g;
    if (N & 6) {
      je(g.component.subTree, _, I, k);
      return
    }
    if (N & 128) {
      g.suspense.move(_, I, k);
      return
    }
    if (N & 64) {
      m.move(g, _, I, q);
      return
    }
    if (m === mt) {
      r(M, _, I);
      for (let V = 0; V < E.length; V++) je(E[V], _, I, k);
      r(g.anchor, _, I);
      return
    }
    if (m === Ws) {
      R(g, _, I);
      return
    }
    if (k !== 2 && N & 1 && p)
      if (k === 0) p.beforeEnter(M), r(M, _, I), it(() => p.enter(M), j);
      else {
        const {
          leave: V,
          delayLeave: A,
          afterLeave: F
        } = p, Z = () => {
          g.ctx.isUnmounted ? s(M) : r(M, _, I)
        }, ie = () => {
          V(M, () => {
            Z(), F && F()
          })
        };
        A ? A(M, Z, ie) : ie()
      }
    else r(M, _, I)
  }, xe = (g, _, I, k = !1, j = !1) => {
    const {
      type: M,
      props: m,
      ref: p,
      children: E,
      dynamicChildren: N,
      shapeFlag: G,
      patchFlag: V,
      dirs: A,
      cacheIndex: F
    } = g;
    if (V === -2 && (j = !1), p != null && (zt(), mr(p, null, I, g, !0), en()), F != null && (_.renderCache[F] = void 0), G & 256) {
      _.ctx.deactivate(g);
      return
    }
    const Z = G & 1 && A,
      ie = !jn(g);
    let fe;
    if (ie && (fe = m && m.onVnodeBeforeUnmount) && Ft(fe, _, g), G & 6) dt(g.component, I, k);
    else {
      if (G & 128) {
        g.suspense.unmount(I, k);
        return
      }
      Z && gn(g, null, _, "beforeUnmount"), G & 64 ? g.type.remove(g, _, I, q, k) : N && !N.hasOnce && (M !== mt || V > 0 && V & 64) ? K(N, _, I, !1, !0) : (M === mt && V & 384 || !j && G & 16) && K(E, _, I), k && vt(g)
    }(ie && (fe = m && m.onVnodeUnmounted) || Z) && it(() => {
      fe && Ft(fe, _, g), Z && gn(g, null, _, "unmounted")
    }, I)
  }, vt = g => {
    const {
      type: _,
      el: I,
      anchor: k,
      transition: j
    } = g;
    if (_ === mt) {
      Ne(I, k);
      return
    }
    if (_ === Ws) {
      S(g);
      return
    }
    const M = () => {
      s(I), j && !j.persisted && j.afterLeave && j.afterLeave()
    };
    if (g.shapeFlag & 1 && j && !j.persisted) {
      const {
        leave: m,
        delayLeave: p
      } = j, E = () => m(I, M);
      p ? p(g.el, M, E) : E()
    } else M()
  }, Ne = (g, _) => {
    let I;
    for (; g !== _;) I = d(g), s(g), g = I;
    s(_)
  }, dt = (g, _, I) => {
    const {
      bum: k,
      scope: j,
      job: M,
      subTree: m,
      um: p,
      m: E,
      a: N,
      parent: G,
      slots: {
        __: V
      }
    } = g;
    Jo(E), Jo(N), k && js(k), G && ue(V) && V.forEach(A => {
      G.renderCache[A] = void 0
    }), j.stop(), M && (M.flags |= 8, xe(m, g, _, I)), p && it(p, _), it(() => {
      g.isUnmounted = !0
    }, _), _ && _.pendingBranch && !_.isUnmounted && g.asyncDep && !g.asyncResolved && g.suspenseId === _.pendingId && (_.deps--, _.deps === 0 && _.resolve())
  }, K = (g, _, I, k = !1, j = !1, M = 0) => {
    for (let m = M; m < g.length; m++) xe(g[m], _, I, k, j)
  }, L = g => {
    if (g.shapeFlag & 6) return L(g.component.subTree);
    if (g.shapeFlag & 128) return g.suspense.next();
    const _ = d(g.anchor || g.el),
      I = _ && _[ic];
    return I ? d(I) : _
  };
  let B = !1;
  const U = (g, _, I) => {
      g == null ? _._vnode && xe(_._vnode, null, null, !0) : y(_._vnode || null, g, _, null, null, null, I), _._vnode = g, B || (B = !0, $o(), nc(), B = !1)
    },
    q = {
      p: y,
      um: xe,
      m: je,
      r: vt,
      mt: Ie,
      mc: W,
      pc: de,
      pbc: Q,
      n: L,
      o: e
    };
  return {
    render: U,
    hydrate: void 0,
    createApp: Ld(U)
  }
}

function Hs({
  type: e,
  props: t
}, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}

function _n({
  effect: e,
  job: t
}, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5)
}

function Ud(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted
}

function fo(e, t, n = !1) {
  const r = e.children,
    s = t.children;
  if (ue(r) && ue(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let l = s[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[i] = ln(s[i]), l.el = o.el), !n && l.patchFlag !== -2 && fo(o, l)), l.type === xr && (l.el = o.el), l.type === wt && !l.el && (l.el = o.el)
    }
}

function Bd(e) {
  const t = e.slice(),
    n = [0];
  let r, s, i, o, l;
  const a = e.length;
  for (r = 0; r < a; r++) {
    const c = e[r];
    if (c !== 0) {
      if (s = n[n.length - 1], e[s] < c) {
        t[r] = s, n.push(r);
        continue
      }
      for (i = 0, o = n.length - 1; i < o;) l = i + o >> 1, e[n[l]] < c ? i = l + 1 : o = l;
      c < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), n[i] = r)
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0;) n[i] = o, o = t[o];
  return n
}

function Ic(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Ic(t)
}

function Jo(e) {
  if (e)
    for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
const Hd = Symbol.for("v-scx"),
  Wd = () => Ct(Hd);

function Gd(e, t) {
  return Es(e, null, t)
}

function Kd(e, t) {
  return Es(e, null, {
    flush: "sync"
  })
}

function ct(e, t, n) {
  return Es(e, t, n)
}

function Es(e, t, n = ve) {
  const {
    immediate: r,
    deep: s,
    flush: i,
    once: o
  } = n, l = Ze({}, n), a = t && r || !t && i !== "post";
  let c;
  if (Gn) {
    if (i === "sync") {
      const h = Wd();
      c = h.__watcherHandles || (h.__watcherHandles = [])
    } else if (!a) {
      const h = () => {};
      return h.stop = Zt, h.resume = Zt, h.pause = Zt, h
    }
  }
  const f = Xe;
  l.call = (h, b, y) => jt(h, f, b, y);
  let u = !1;
  i === "post" ? l.scheduler = h => {
    it(h, f && f.suspense)
  } : i !== "sync" && (u = !0, l.scheduler = (h, b) => {
    b ? h() : ro(h)
  }), l.augmentJob = h => {
    t && (h.flags |= 4), u && (h.flags |= 2, f && (h.id = f.uid, h.i = f))
  };
  const d = Kf(e, t, l);
  return Gn && (c ? c.push(d) : a && d()), d
}

function Yd(e, t, n) {
  const r = this.proxy,
    s = Qe(e) ? e.includes(".") ? Cc(r, e) : () => r[e] : e.bind(r, r);
  let i;
  ce(t) ? i = t : (i = t.handler, n = t);
  const o = Cn(this),
    l = Es(s, i.bind(r), n);
  return o(), l
}

function Cc(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++) r = r[n[s]];
    return r
  }
}

function Kv(e, t, n = ve) {
  const r = ft(),
    s = Tt(t),
    i = Qn(t),
    o = Tc(e, s),
    l = jf((a, c) => {
      let f, u = ve,
        d;
      return Kd(() => {
        const h = e[s];
        Ln(f, h) && (f = h, c())
      }), {
        get() {
          return a(), n.get ? n.get(f) : f
        },
        set(h) {
          const b = n.set ? n.set(h) : h;
          if (!Ln(b, f) && !(u !== ve && Ln(h, u))) return;
          const y = r.vnode.props;
          y && (t in y || s in y || i in y) && (`onUpdate:${t}` in y || `onUpdate:${s}` in y || `onUpdate:${i}` in y) || (f = h, c()), r.emit(`update:${t}`, b), Ln(h, b) && Ln(h, u) && !Ln(b, d) && c(), u = h, d = b
        }
      }
    });
  return l[Symbol.iterator] = () => {
    let a = 0;
    return {
      next() {
        return a < 2 ? {
          value: a++ ? o || ve : l,
          done: !1
        } : {
          done: !0
        }
      }
    }
  }, l
}
const Tc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Tt(t)}Modifiers`] || e[`${Qn(t)}Modifiers`];

function qd(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || ve;
  let s = n;
  const i = t.startsWith("update:"),
    o = i && Tc(r, t.slice(7));
  o && (o.trim && (s = n.map(f => Qe(f) ? f.trim() : f)), o.number && (s = n.map(td)));
  let l, a = r[l = Xr(t)] || r[l = Xr(Tt(t))];
  !a && i && (a = r[l = Xr(Qn(t))]), a && jt(a, e, 6, s);
  const c = r[l + "Once"];
  if (c) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    e.emitted[l] = !0, jt(c, e, 6, s)
  }
}

function Rc(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e);
  if (s !== void 0) return s;
  const i = e.emits;
  let o = {},
    l = !1;
  if (!ce(e)) {
    const a = c => {
      const f = Rc(c, t, !0);
      f && (l = !0, Ze(o, f))
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a)
  }
  return !i && !l ? (Ye(e) && r.set(e, null), null) : (ue(i) ? i.forEach(a => o[a] = null) : Ze(o, i), Ye(e) && r.set(e, o), o)
}

function As(e, t) {
  return !e || !Ji(t) ? !1 : (t = t.slice(2)
    .replace(/Once$/, ""), Le(e, t[0].toLowerCase() + t.slice(1)) || Le(e, Qn(t)) || Le(e, t))
}

function Zo(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: a,
    render: c,
    renderCache: f,
    props: u,
    data: d,
    setupState: h,
    ctx: b,
    inheritAttrs: y
  } = e, D = is(e);
  let v, O;
  try {
    if (n.shapeFlag & 4) {
      const S = s || r,
        P = S;
      v = Rt(c.call(P, S, f, u, h, d, b)), O = l
    } else {
      const S = t;
      v = Rt(S.length > 1 ? S(u, {
        attrs: l,
        slots: o,
        emit: a
      }) : S(u, null)), O = t.props ? l : Jd(l)
    }
  } catch (S) {
    gr.length = 0, zn(S, e, 1), v = Ue(wt)
  }
  let R = v;
  if (O && y !== !1) {
    const S = Object.keys(O),
      {
        shapeFlag: P
      } = R;
    S.length && P & 7 && (i && S.some(Xa) && (O = Zd(O, i)), R = Wn(R, O, !1, !0))
  }
  return n.dirs && (R = Wn(R, null, !1, !0), R.dirs = R.dirs ? R.dirs.concat(n.dirs) : n.dirs), n.transition && so(R, n.transition), v = R, is(D), v
}

function Xd(e, t = !0) {
  let n;
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    if (Hn(s)) {
      if (s.type !== wt || s.children === "v-if") {
        if (n) return;
        n = s
      }
    } else return
  }
  return n
}
const Jd = e => {
    let t;
    for (const n in e)(n === "class" || n === "style" || Ji(n)) && ((t || (t = {}))[n] = e[n]);
    return t
  },
  Zd = (e, t) => {
    const n = {};
    for (const r in e)(!Xa(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n
  };

function Qd(e, t, n) {
  const {
    props: r,
    children: s,
    component: i
  } = e, {
    props: o,
    children: l,
    patchFlag: a
  } = t, c = i.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && a >= 0) {
    if (a & 1024) return !0;
    if (a & 16) return r ? Qo(r, o, c) : !!o;
    if (a & 8) {
      const f = t.dynamicProps;
      for (let u = 0; u < f.length; u++) {
        const d = f[u];
        if (o[d] !== r[d] && !As(c, d)) return !0
      }
    }
  } else return (s || l) && (!l || !l.$stable) ? !0 : r === o ? !1 : r ? o ? Qo(r, o, c) : !0 : !!o;
  return !1
}

function Qo(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e)
    .length) return !0;
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (t[i] !== e[i] && !As(n, i)) return !0
  }
  return !1
}

function ho({
  vnode: e,
  parent: t
}, n) {
  for (; t;) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)(e = t.vnode)
      .el = n, t = t.parent;
    else break
  }
}
const Nc = e => e.__isSuspense;
let di = 0;
const zd = {
    name: "Suspense",
    __isSuspense: !0,
    process(e, t, n, r, s, i, o, l, a, c) {
      if (e == null) eh(t, n, r, s, i, o, l, a, c);
      else {
        if (i && i.deps > 0 && !e.suspense.isInFallback) {
          t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
          return
        }
        th(e, t, n, r, s, o, l, a, c)
      }
    },
    hydrate: nh,
    normalize: rh
  },
  Yv = zd;

function Sr(e, t) {
  const n = e.props && e.props[t];
  ce(n) && n()
}

function eh(e, t, n, r, s, i, o, l, a) {
  const {
    p: c,
    o: {
      createElement: f
    }
  } = a, u = f("div"), d = e.suspense = Pc(e, s, r, t, u, n, i, o, l, a);
  c(null, d.pendingBranch = e.ssContent, u, null, r, d, i, o), d.deps > 0 ? (Sr(e, "onPending"), Sr(e, "onFallback"), c(null, e.ssFallback, t, n, r, null, i, o), $n(d, e.ssFallback)) : d.resolve(!1, !0)
}

function th(e, t, n, r, s, i, o, l, {
  p: a,
  um: c,
  o: {
    createElement: f
  }
}) {
  const u = t.suspense = e.suspense;
  u.vnode = t, t.el = e.el;
  const d = t.ssContent,
    h = t.ssFallback,
    {
      activeBranch: b,
      pendingBranch: y,
      isInFallback: D,
      isHydrating: v
    } = u;
  if (y) u.pendingBranch = d, cn(d, y) ? (a(y, d, u.hiddenContainer, null, s, u, i, o, l), u.deps <= 0 ? u.resolve() : D && (v || (a(b, h, n, r, s, null, i, o, l), $n(u, h)))) : (u.pendingId = di++, v ? (u.isHydrating = !1, u.activeBranch = y) : c(y, s, u), u.deps = 0, u.effects.length = 0, u.hiddenContainer = f("div"), D ? (a(null, d, u.hiddenContainer, null, s, u, i, o, l), u.deps <= 0 ? u.resolve() : (a(b, h, n, r, s, null, i, o, l), $n(u, h))) : b && cn(d, b) ? (a(b, d, n, r, s, u, i, o, l), u.resolve(!0)) : (a(null, d, u.hiddenContainer, null, s, u, i, o, l), u.deps <= 0 && u.resolve()));
  else if (b && cn(d, b)) a(b, d, n, r, s, u, i, o, l), $n(u, d);
  else if (Sr(t, "onPending"), u.pendingBranch = d, d.shapeFlag & 512 ? u.pendingId = d.component.suspenseId : u.pendingId = di++, a(null, d, u.hiddenContainer, null, s, u, i, o, l), u.deps <= 0) u.resolve();
  else {
    const {
      timeout: O,
      pendingId: R
    } = u;
    O > 0 ? setTimeout(() => {
      u.pendingId === R && u.fallback(h)
    }, O) : O === 0 && u.fallback(h)
  }
}

function Pc(e, t, n, r, s, i, o, l, a, c, f = !1) {
  const {
    p: u,
    m: d,
    um: h,
    n: b,
    o: {
      parentNode: y,
      remove: D
    }
  } = c;
  let v;
  const O = ih(e);
  O && t && t.pendingBranch && (v = t.pendingId, t.deps++);
  const R = e.props ? nd(e.props.timeout) : void 0,
    S = i,
    P = {
      vnode: e,
      parent: t,
      parentComponent: n,
      namespace: o,
      container: r,
      hiddenContainer: s,
      deps: 0,
      pendingId: di++,
      timeout: typeof R == "number" ? R : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !f,
      isHydrating: f,
      isUnmounted: !1,
      effects: [],
      resolve(x = !1, w = !1) {
        const {
          vnode: W,
          activeBranch: H,
          pendingBranch: Q,
          pendingId: se,
          effects: ne,
          parentComponent: me,
          container: Ie
        } = P;
        let Re = !1;
        P.isHydrating ? P.isHydrating = !1 : x || (Re = H && Q.transition && Q.transition.mode === "out-in", Re && (H.transition.afterLeave = () => {
          se === P.pendingId && (d(Q, Ie, i === S ? b(H) : i, 0), oi(ne))
        }), H && (y(H.el) === Ie && (i = b(H)), h(H, me, P, !0)), Re || d(Q, Ie, i, 0)), $n(P, Q), P.pendingBranch = null, P.isInFallback = !1;
        let ae = P.parent,
          J = !1;
        for (; ae;) {
          if (ae.pendingBranch) {
            ae.effects.push(...ne), J = !0;
            break
          }
          ae = ae.parent
        }!J && !Re && oi(ne), P.effects = [], O && t && t.pendingBranch && v === t.pendingId && (t.deps--, t.deps === 0 && !w && t.resolve()), Sr(W, "onResolve")
      },
      fallback(x) {
        if (!P.pendingBranch) return;
        const {
          vnode: w,
          activeBranch: W,
          parentComponent: H,
          container: Q,
          namespace: se
        } = P;
        Sr(w, "onFallback");
        const ne = b(W),
          me = () => {
            P.isInFallback && (u(null, x, Q, ne, H, null, se, l, a), $n(P, x))
          },
          Ie = x.transition && x.transition.mode === "out-in";
        Ie && (W.transition.afterLeave = me), P.isInFallback = !0, h(W, H, null, !0), Ie || me()
      },
      move(x, w, W) {
        P.activeBranch && d(P.activeBranch, x, w, W), P.container = x
      },
      next() {
        return P.activeBranch && b(P.activeBranch)
      },
      registerDep(x, w, W) {
        const H = !!P.pendingBranch;
        H && P.deps++;
        const Q = x.vnode.el;
        x.asyncDep.catch(se => {
            zn(se, x, 0)
          })
          .then(se => {
            if (x.isUnmounted || P.isUnmounted || P.pendingId !== x.suspenseId) return;
            x.asyncResolved = !0;
            const {
              vnode: ne
            } = x;
            gi(x, se, !1), Q && (ne.el = Q);
            const me = !Q && x.subTree.el;
            w(x, ne, y(Q || x.subTree.el), Q ? null : b(x.subTree), P, o, W), me && D(me), ho(x, ne.el), H && --P.deps === 0 && P.resolve()
          })
      },
      unmount(x, w) {
        P.isUnmounted = !0, P.activeBranch && h(P.activeBranch, n, x, w), P.pendingBranch && h(P.pendingBranch, n, x, w)
      }
    };
  return P
}

function nh(e, t, n, r, s, i, o, l, a) {
  const c = t.suspense = Pc(t, r, n, e.parentNode, document.createElement("div"), null, s, i, o, l, !0),
    f = a(e, c.pendingBranch = t.ssContent, n, c, i, o);
  return c.deps === 0 && c.resolve(!1, !0), f
}

function rh(e) {
  const {
    shapeFlag: t,
    children: n
  } = e, r = t & 32;
  e.ssContent = zo(r ? n.default : n), e.ssFallback = r ? zo(n.fallback) : Ue(wt)
}

function zo(e) {
  let t;
  if (ce(e)) {
    const n = Bn && e._c;
    n && (e._d = !1, Ir()), e = e(), n && (e._d = !0, t = gt, Lc())
  }
  return ue(e) && (e = Xd(e)), e = Rt(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter(n => n !== e)), e
}

function sh(e, t) {
  t && t.pendingBranch ? ue(e) ? t.effects.push(...e) : t.effects.push(e) : oi(e)
}

function $n(e, t) {
  e.activeBranch = t;
  const {
    vnode: n,
    parentComponent: r
  } = e;
  let s = t.el;
  for (; !s && t.component;) t = t.component.subTree, s = t.el;
  n.el = s, r && r.subTree === n && (r.vnode.el = s, ho(r, s))
}

function ih(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1
}
const mt = Symbol.for("v-fgt"),
  xr = Symbol.for("v-txt"),
  wt = Symbol.for("v-cmt"),
  Ws = Symbol.for("v-stc"),
  gr = [];
let gt = null;

function Ir(e = !1) {
  gr.push(gt = e ? null : [])
}

function Lc() {
  gr.pop(), gt = gr[gr.length - 1] || null
}
let Bn = 1;

function el(e, t = !1) {
  Bn += e, e < 0 && gt && t && (gt.hasOnce = !0)
}

function wc(e) {
  return e.dynamicChildren = Bn > 0 ? gt || Mn : null, Lc(), Bn > 0 && gt && gt.push(e), e
}

function oh(e, t, n, r, s, i) {
  return wc(mo(e, t, n, r, s, i, !0))
}

function hi(e, t, n, r, s) {
  return wc(Ue(e, t, n, r, s, !0))
}

function Hn(e) {
  return e ? e.__v_isVNode === !0 : !1
}

function cn(e, t) {
  return e.type === t.type && e.key === t.key
}
const Dc = ({
    key: e
  }) => e ?? null,
  Zr = ({
    ref: e,
    ref_key: t,
    ref_for: n
  }) => (typeof e == "number" && (e = "" + e), e != null ? Qe(e) || Te(e) || ce(e) ? {
    i: Je,
    r: e,
    k: t,
    f: !!n
  } : e : null);

function mo(e, t = null, n = null, r = 0, s = null, i = e === mt ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Dc(t),
    ref: t && Zr(t),
    scopeId: sc,
    slotScopeIds: null,
    children: n,
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
    ctx: Je
  };
  return l ? (po(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= Qe(n) ? 8 : 16), Bn > 0 && !o && gt && (a.patchFlag > 0 || i & 6) && a.patchFlag !== 32 && gt.push(a), a
}
const Ue = lh;

function lh(e, t = null, n = null, r = 0, s = null, i = !1) {
  if ((!e || e === dc) && (e = wt), Hn(e)) {
    const l = Wn(e, t, !0);
    return n && po(l, n), Bn > 0 && !i && gt && (l.shapeFlag & 6 ? gt[gt.indexOf(e)] = l : gt.push(l)), l.patchFlag = -2, l
  }
  if (vh(e) && (e = e.__vccOpts), t) {
    t = ah(t);
    let {
      class: l,
      style: a
    } = t;
    l && !Qe(l) && (t.class = no(l)), Ye(a) && (qi(a) && !ue(a) && (a = Ze({}, a)), t.style = to(a))
  }
  const o = Qe(e) ? 1 : Nc(e) ? 128 : fd(e) ? 64 : Ye(e) ? 4 : ce(e) ? 2 : 0;
  return mo(e, t, n, r, s, o, i, !0)
}

function ah(e) {
  return e ? qi(e) || yc(e) ? Ze({}, e) : e : null
}

function Wn(e, t, n = !1, r = !1) {
  const {
    props: s,
    ref: i,
    patchFlag: o,
    children: l,
    transition: a
  } = e, c = t ? uh(s || {}, t) : s, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Dc(c),
    ref: t && t.ref ? n && i ? ue(i) ? i.concat(Zr(t)) : [i, Zr(t)] : Zr(t) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== mt ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Wn(e.ssContent),
    ssFallback: e.ssFallback && Wn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && r && so(f, a.clone(f)), f
}

function ch(e = " ", t = 0) {
  return Ue(xr, null, e, t)
}

function qv(e = "", t = !1) {
  return t ? (Ir(), hi(wt, null, e)) : Ue(wt, null, e)
}

function Rt(e) {
  return e == null || typeof e == "boolean" ? Ue(wt) : ue(e) ? Ue(mt, null, e.slice()) : Hn(e) ? ln(e) : Ue(xr, null, String(e))
}

function ln(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Wn(e)
}

function po(e, t) {
  let n = 0;
  const {
    shapeFlag: r
  } = e;
  if (t == null) t = null;
  else if (ue(t)) n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), po(e, s()), s._c && (s._d = !0));
      return
    } else {
      n = 32;
      const s = t._;
      !s && !yc(t) ? t._ctx = Je : s === 3 && Je && (Je.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
    }
  else ce(t) ? (t = {
    default: t,
    _ctx: Je
  }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [ch(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n
}

function uh(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class") t.class !== r.class && (t.class = no([t.class, r.class]));
      else if (s === "style") t.style = to([t.style, r.style]);
    else if (Ji(s)) {
      const i = t[s],
        o = r[s];
      o && i !== o && !(ue(i) && i.includes(o)) && (t[s] = i ? [].concat(i, o) : o)
    } else s !== "" && (t[s] = r[s])
  }
  return t
}

function Ft(e, t, n, r = null) {
  jt(e, t, 7, [n, r])
}
const fh = gc();
let dh = 0;

function hh(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || fh,
    i = {
      uid: dh++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Na(!0),
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
      propsOptions: Ec(r, s),
      emitsOptions: Rc(r, s),
      emit: null,
      emitted: null,
      propsDefaults: ve,
      inheritAttrs: r.inheritAttrs,
      ctx: ve,
      data: ve,
      props: ve,
      attrs: ve,
      slots: ve,
      refs: ve,
      setupState: ve,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
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
  }, i.root = t ? t.root : i, i.emit = qd.bind(null, i), e.ce && e.ce(i), i
}
let Xe = null;
const ft = () => Xe || Je;
let ls, mi;
{
  const e = vs(),
    t = (n, r) => {
      let s;
      return (s = e[n]) || (s = e[n] = []), s.push(r), i => {
        s.length > 1 ? s.forEach(o => o(i)) : s[0](i)
      }
    };
  ls = t("__VUE_INSTANCE_SETTERS__", n => Xe = n), mi = t("__VUE_SSR_SETTERS__", n => Gn = n)
}
const Cn = e => {
    const t = Xe;
    return ls(e), e.scope.on(), () => {
      e.scope.off(), ls(t)
    }
  },
  pi = () => {
    Xe && Xe.scope.off(), ls(null)
  };

function Fc(e) {
  return e.vnode.shapeFlag & 4
}
let Gn = !1;

function mh(e, t = !1, n = !1) {
  t && mi(t);
  const {
    props: r,
    children: s
  } = e.vnode, i = Fc(e);
  Dd(e, r, i, t), Md(e, s, n || t);
  const o = i ? ph(e, t) : void 0;
  return t && mi(!1), o
}

function ph(e, t) {
  const n = e.type;
  e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, Od);
  const {
    setup: r
  } = n;
  if (r) {
    zt();
    const s = e.setupContext = r.length > 1 ? kc(e) : null,
      i = Cn(e),
      o = Fr(r, e, 0, [e.props, s]),
      l = Qi(o);
    if (en(), i(), (l || e.sp) && !jn(e) && io(e), l) {
      if (o.then(pi, pi), t) return o.then(a => {
          gi(e, a, t)
        })
        .catch(a => {
          zn(a, e, 0)
        });
      e.asyncDep = o
    } else gi(e, o, t)
  } else xc(e, t)
}

function gi(e, t, n) {
  ce(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ye(t) && (e.setupState = Ya(t)), xc(e, n)
}
let tl;

function xc(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && tl && !r.render) {
      const s = r.template || ao(e)
        .template;
      if (s) {
        const {
          isCustomElement: i,
          compilerOptions: o
        } = e.appContext.config, {
          delimiters: l,
          compilerOptions: a
        } = r, c = Ze(Ze({
          isCustomElement: i,
          delimiters: l
        }, o), a);
        r.render = tl(s, c)
      }
    }
    e.render = r.render || Zt
  } {
    const s = Cn(e);
    zt();
    try {
      Id(e)
    } finally {
      en(), s()
    }
  }
}
const gh = {
  get(e, t) {
    return rt(e, "get", ""), e[t]
  }
};

function kc(e) {
  const t = n => {
    e.exposed = n || {}
  };
  return {
    attrs: new Proxy(e.attrs, gh),
    slots: e.slots,
    emit: e.emit,
    expose: t
  }
}

function Os(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ya(Xi(e.exposed)), {
    get(t, n) {
      if (n in t) return t[n];
      if (n in pr) return pr[n](e)
    },
    has(t, n) {
      return n in t || n in pr
    }
  })) : e.proxy
}

function _h(e, t = !0) {
  return ce(e) ? e.displayName || e.name : e.name || t && e.__name
}

function vh(e) {
  return ce(e) && "__vccOpts" in e
}
const le = (e, t) => Wf(e, t, Gn);

function Ss(e, t, n) {
  const r = arguments.length;
  return r === 2 ? Ye(t) && !ue(t) ? Hn(t) ? Ue(e, null, [t]) : Ue(e, t) : Ue(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Hn(n) && (n = [n]), Ue(e, t, n))
}
const yh = "3.5.18";

function bh(e) {
  const t = Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return n => n in t
}
const Eh = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Ah = e => e.startsWith("onUpdate:"),
  Oh = Object.assign,
  Tn = Array.isArray,
  Mc = e => jc(e) === "[object Set]",
  nl = e => jc(e) === "[object Date]",
  Vc = e => typeof e == "function",
  Cr = e => typeof e == "string",
  _i = e => typeof e == "symbol",
  rl = e => e !== null && typeof e == "object",
  Sh = Object.prototype.toString,
  jc = e => Sh.call(e),
  go = e => {
    const t = Object.create(null);
    return n => t[n] || (t[n] = e(n))
  },
  Ih = /-(\w)/g,
  Ch = go(e => e.replace(Ih, (t, n) => n ? n.toUpperCase() : "")),
  Th = /\B([A-Z])/g,
  _o = go(e => e.replace(Th, "-$1")
    .toLowerCase()),
  Rh = go(e => e.charAt(0)
    .toUpperCase() + e.slice(1)),
  Nh = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t)
  },
  Ph = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Lh = bh(Ph);

function $c(e) {
  return !!e || e === ""
}

function wh(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++) n = Kn(e[r], t[r]);
  return n
}

function Kn(e, t) {
  if (e === t) return !0;
  let n = nl(e),
    r = nl(t);
  if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
  if (n = _i(e), r = _i(t), n || r) return e === t;
  if (n = Tn(e), r = Tn(t), n || r) return n && r ? wh(e, t) : !1;
  if (n = rl(e), r = rl(t), n || r) {
    if (!n || !r) return !1;
    const s = Object.keys(e)
      .length,
      i = Object.keys(t)
      .length;
    if (s !== i) return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o),
        a = t.hasOwnProperty(o);
      if (l && !a || !l && a || !Kn(e[o], t[o])) return !1
    }
  }
  return String(e) === String(t)
}

function Uc(e, t) {
  return e.findIndex(n => Kn(n, t))
}
let vi;
const sl = typeof window < "u" && window.trustedTypes;
if (sl) try {
  vi = sl.createPolicy("vue", {
    createHTML: e => e
  })
} catch {}
const Bc = vi ? e => vi.createHTML(e) : e => e,
  Dh = "http://www.w3.org/2000/svg",
  Fh = "http://www.w3.org/1998/Math/MathML",
  Gt = typeof document < "u" ? document : null,
  il = Gt && Gt.createElement("template"),
  xh = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: e => {
      const t = e.parentNode;
      t && t.removeChild(e)
    },
    createElement: (e, t, n, r) => {
      const s = t === "svg" ? Gt.createElementNS(Dh, e) : t === "mathml" ? Gt.createElementNS(Fh, e) : n ? Gt.createElement(e, {
        is: n
      }) : Gt.createElement(e);
      return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s
    },
    createText: e => Gt.createTextNode(e),
    createComment: e => Gt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => Gt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, r, s, i) {
      const o = n ? n.previousSibling : t.lastChild;
      if (s && (s === i || s.nextSibling))
        for (; t.insertBefore(s.cloneNode(!0), n), !(s === i || !(s = s.nextSibling)););
      else {
        il.innerHTML = Bc(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
        const l = il.content;
        if (r === "svg" || r === "mathml") {
          const a = l.firstChild;
          for (; a.firstChild;) l.appendChild(a.firstChild);
          l.removeChild(a)
        }
        t.insertBefore(l, n)
      }
      return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
  },
  kh = Symbol("_vtc");

function Mh(e, t, n) {
  const r = e[kh];
  r && (t = (t ? [t, ...r] : [...r])
    .join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const as = Symbol("_vod"),
  Hc = Symbol("_vsh"),
  Xv = {
    beforeMount(e, {
      value: t
    }, {
      transition: n
    }) {
      e[as] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : nr(e, t)
    },
    mounted(e, {
      value: t
    }, {
      transition: n
    }) {
      n && t && n.enter(e)
    },
    updated(e, {
      value: t,
      oldValue: n
    }, {
      transition: r
    }) {
      !t != !n && (r ? t ? (r.beforeEnter(e), nr(e, !0), r.enter(e)) : r.leave(e, () => {
        nr(e, !1)
      }) : nr(e, t))
    },
    beforeUnmount(e, {
      value: t
    }) {
      nr(e, t)
    }
  };

function nr(e, t) {
  e.style.display = t ? e[as] : "none", e[Hc] = !t
}
const Vh = Symbol(""),
  jh = /(^|;)\s*display\s*:/;

function $h(e, t, n) {
  const r = e.style,
    s = Cr(n);
  let i = !1;
  if (n && !s) {
    if (t)
      if (Cr(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":"))
            .trim();
          n[l] == null && Qr(r, l, "")
        } else
          for (const o in t) n[o] == null && Qr(r, o, "");
    for (const o in n) o === "display" && (i = !0), Qr(r, o, n[o])
  } else if (s) {
    if (t !== n) {
      const o = r[Vh];
      o && (n += ";" + o), r.cssText = n, i = jh.test(n)
    }
  } else t && e.removeAttribute("style");
  as in e && (e[as] = i ? r.display : "", e[Hc] && (r.display = "none"))
}
const ol = /\s*!important$/;

function Qr(e, t, n) {
  if (Tn(n)) n.forEach(r => Qr(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const r = Uh(e, t);
    ol.test(n) ? e.setProperty(_o(r), n.replace(ol, ""), "important") : e[r] = n
  }
}
const ll = ["Webkit", "Moz", "ms"],
  Gs = {};

function Uh(e, t) {
  const n = Gs[t];
  if (n) return n;
  let r = Tt(t);
  if (r !== "filter" && r in e) return Gs[t] = r;
  r = Rh(r);
  for (let s = 0; s < ll.length; s++) {
    const i = ll[s] + r;
    if (i in e) return Gs[t] = i
  }
  return t
}
const al = "http://www.w3.org/1999/xlink";

function cl(e, t, n, r, s, i = Lh(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(al, t.slice(6, t.length)) : e.setAttributeNS(al, t, n) : n == null || i && !$c(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : _i(n) ? String(n) : n)
}

function ul(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Bc(n) : n);
    return
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value,
      a = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
    (l !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = $c(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0)
  }
  try {
    e[t] = n
  } catch {}
  o && e.removeAttribute(s || t)
}

function vo(e, t, n, r) {
  e.addEventListener(t, n, r)
}

function Bh(e, t, n, r) {
  e.removeEventListener(t, n, r)
}
const fl = Symbol("_vei");

function Hh(e, t, n, r, s = null) {
  const i = e[fl] || (e[fl] = {}),
    o = i[t];
  if (r && o) o.value = r;
  else {
    const [l, a] = Wh(t);
    if (r) {
      const c = i[t] = Yh(r, s);
      vo(e, l, c, a)
    } else o && (Bh(e, l, o, a), i[t] = void 0)
  }
}
const dl = /(?:Once|Passive|Capture)$/;

function Wh(e) {
  let t;
  if (dl.test(e)) {
    t = {};
    let r;
    for (; r = e.match(dl);) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0
  }
  return [e[2] === ":" ? e.slice(3) : _o(e.slice(2)), t]
}
let Ks = 0;
const Gh = Promise.resolve(),
  Kh = () => Ks || (Gh.then(() => Ks = 0), Ks = Date.now());

function Yh(e, t) {
  const n = r => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    jt(qh(r, n.value), t, 5, [r])
  };
  return n.value = e, n.attached = Kh(), n
}

function qh(e, t) {
  if (Tn(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0
    }, t.map(r => s => !s._stopped && r && r(s))
  } else return t
}
const hl = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
  Xh = (e, t, n, r, s, i) => {
    const o = s === "svg";
    t === "class" ? Mh(e, r, o) : t === "style" ? $h(e, n, r) : Eh(t) ? Ah(t) || Hh(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Jh(e, t, r, o)) ? (ul(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && cl(e, t, r, o, i, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !Cr(r)) ? ul(e, Ch(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), cl(e, t, r, o))
  };

function Jh(e, t, n, r) {
  if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && hl(t) && Vc(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE") return !1
  }
  return hl(t) && Cr(n) ? !1 : t in e
}
const cs = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return Tn(t) ? n => Nh(t, n) : t
  },
  Un = Symbol("_assign"),
  Jv = {
    deep: !0,
    created(e, t, n) {
      e[Un] = cs(n), vo(e, "change", () => {
        const r = e._modelValue,
          s = Wc(e),
          i = e.checked,
          o = e[Un];
        if (Tn(r)) {
          const l = Uc(r, s),
            a = l !== -1;
          if (i && !a) o(r.concat(s));
          else if (!i && a) {
            const c = [...r];
            c.splice(l, 1), o(c)
          }
        } else if (Mc(r)) {
          const l = new Set(r);
          i ? l.add(s) : l.delete(s), o(l)
        } else o(Gc(e, i))
      })
    },
    mounted: ml,
    beforeUpdate(e, t, n) {
      e[Un] = cs(n), ml(e, t, n)
    }
  };

function ml(e, {
  value: t,
  oldValue: n
}, r) {
  e._modelValue = t;
  let s;
  if (Tn(t)) s = Uc(t, r.props.value) > -1;
  else if (Mc(t)) s = t.has(r.props.value);
  else {
    if (t === n) return;
    s = Kn(t, Gc(e, !0))
  }
  e.checked !== s && (e.checked = s)
}
const Zv = {
  created(e, {
    value: t
  }, n) {
    e.checked = Kn(t, n.props.value), e[Un] = cs(n), vo(e, "change", () => {
      e[Un](Wc(e))
    })
  },
  beforeUpdate(e, {
    value: t,
    oldValue: n
  }, r) {
    e[Un] = cs(r), t !== n && (e.checked = Kn(t, r.props.value))
  }
};

function Wc(e) {
  return "_value" in e ? e._value : e.value
}

function Gc(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t
}
const Zh = ["ctrl", "shift", "alt", "meta"],
  Qh = {
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
    exact: (e, t) => Zh.some(n => e[`${n}Key`] && !t.includes(n))
  },
  Qv = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      r = t.join(".");
    return n[r] || (n[r] = (s, ...i) => {
      for (let o = 0; o < t.length; o++) {
        const l = Qh[t[o]];
        if (l && l(s, t)) return
      }
      return e(s, ...i)
    })
  },
  zh = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
  },
  zv = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      r = t.join(".");
    return n[r] || (n[r] = s => {
      if (!("key" in s)) return;
      const i = _o(s.key);
      if (t.some(o => o === i || zh[o] === i)) return e(s)
    })
  },
  em = Oh({
    patchProp: Xh
  }, xh);
let pl;

function tm() {
  return pl || (pl = jd(em))
}
const nm = (...e) => {
  const t = tm()
    .createApp(...e),
    {
      mount: n
    } = t;
  return t.mount = r => {
    const s = sm(r);
    if (!s) return;
    const i = t._component;
    !Vc(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const o = n(s, !1, rm(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o
  }, t
};

function rm(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml"
}

function sm(e) {
  return Cr(e) ? document.querySelector(e) : e
}
let Kc;
const Is = e => Kc = e,
  Yc = Symbol();

function yi(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
}
var _r;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function"
})(_r || (_r = {}));

function im() {
  const e = Ui(!0),
    t = e.run(() => Ge({}));
  let n = [],
    r = [];
  const s = Xi({
    install(i) {
      Is(s), s._a = i, i.provide(Yc, s), i.config.globalProperties.$pinia = s, r.forEach(o => n.push(o)), r = []
    },
    use(i) {
      return this._a ? n.push(i) : r.push(i), this
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map,
    state: t
  });
  return s
}
const qc = () => {};

function gl(e, t, n, r = qc) {
  e.add(t);
  const s = () => {
    e.delete(t) && r()
  };
  return !n && Pa() && gf(s), s
}

function wn(e, ...t) {
  e.forEach(n => {
    n(...t)
  })
}
const om = e => e(),
  _l = Symbol(),
  Ys = Symbol();

function bi(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, r) => e.set(r, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue;
    const r = t[n],
      s = e[n];
    yi(s) && yi(r) && e.hasOwnProperty(n) && !Te(r) && !fn(r) ? e[n] = bi(s, r) : e[n] = r
  }
  return e
}
const lm = Symbol();

function am(e) {
  return !yi(e) || !Object.prototype.hasOwnProperty.call(e, lm)
}
const {
  assign: sn
} = Object;

function cm(e) {
  return !!(Te(e) && e.effect)
}

function um(e, t, n, r) {
  const {
    state: s,
    actions: i,
    getters: o
  } = t, l = n.state.value[e];
  let a;

  function c() {
    l || (n.state.value[e] = s ? s() : {});
    const f = $f(n.state.value[e]);
    return sn(f, i, Object.keys(o || {})
      .reduce((u, d) => (u[d] = Xi(le(() => {
        Is(n);
        const h = n._s.get(e);
        return o[d].call(h, h)
      })), u), {}))
  }
  return a = Xc(e, c, t, n, r, !0), a
}

function Xc(e, t, n = {}, r, s, i) {
  let o;
  const l = sn({
      actions: {}
    }, n),
    a = {
      deep: !0
    };
  let c, f, u = new Set,
    d = new Set,
    h;
  const b = r.state.value[e];
  !i && !b && (r.state.value[e] = {}), Ge({});
  let y;

  function D(W) {
    let H;
    c = f = !1, typeof W == "function" ? (W(r.state.value[e]), H = {
      type: _r.patchFunction,
      storeId: e,
      events: h
    }) : (bi(r.state.value[e], W), H = {
      type: _r.patchObject,
      payload: W,
      storeId: e,
      events: h
    });
    const Q = y = Symbol();
    yt()
      .then(() => {
        y === Q && (c = !0)
      }), f = !0, wn(u, H, r.state.value[e])
  }
  const v = i ? function() {
    const {
      state: H
    } = n, Q = H ? H() : {};
    this.$patch(se => {
      sn(se, Q)
    })
  } : qc;

  function O() {
    o.stop(), u.clear(), d.clear(), r._s.delete(e)
  }
  const R = (W, H = "") => {
      if (_l in W) return W[Ys] = H, W;
      const Q = function() {
        Is(r);
        const se = Array.from(arguments),
          ne = new Set,
          me = new Set;

        function Ie(J) {
          ne.add(J)
        }

        function Re(J) {
          me.add(J)
        }
        wn(d, {
          args: se,
          name: Q[Ys],
          store: P,
          after: Ie,
          onError: Re
        });
        let ae;
        try {
          ae = W.apply(this && this.$id === e ? this : P, se)
        } catch (J) {
          throw wn(me, J), J
        }
        return ae instanceof Promise ? ae.then(J => (wn(ne, J), J))
          .catch(J => (wn(me, J), Promise.reject(J))) : (wn(ne, ae), ae)
      };
      return Q[_l] = !0, Q[Ys] = H, Q
    },
    S = {
      _p: r,
      $id: e,
      $onAction: gl.bind(null, d),
      $patch: D,
      $reset: v,
      $subscribe(W, H = {}) {
        const Q = gl(u, W, H.detached, () => se()),
          se = o.run(() => ct(() => r.state.value[e], ne => {
            (H.flush === "sync" ? f : c) && W({
              storeId: e,
              type: _r.direct,
              events: h
            }, ne)
          }, sn({}, a, H)));
        return Q
      },
      $dispose: O
    },
    P = tn(S);
  r._s.set(e, P);
  const w = (r._a && r._a.runWithContext || om)(() => r._e.run(() => (o = Ui())
    .run(() => t({
      action: R
    }))));
  for (const W in w) {
    const H = w[W];
    if (Te(H) && !cm(H) || fn(H)) i || (b && am(H) && (Te(H) ? H.value = b[W] : bi(H, b[W])), r.state.value[e][W] = H);
    else if (typeof H == "function") {
      const Q = R(H, W);
      w[W] = Q, l.actions[W] = H
    }
  }
  return sn(P, w), sn(ge(P), w), Object.defineProperty(P, "$state", {
    get: () => r.state.value[e],
    set: W => {
      D(H => {
        sn(H, W)
      })
    }
  }), r._p.forEach(W => {
    sn(P, o.run(() => W({
      store: P,
      app: r._a,
      pinia: r,
      options: l
    })))
  }), b && i && n.hydrate && n.hydrate(P.$state, b), c = !0, f = !0, P
}

function ey(e, t, n) {
  let r;
  const s = typeof t == "function";
  r = s ? n : t;

  function i(o, l) {
    const a = wd();
    return o = o || (a ? Ct(Yc, null) : null), o && Is(o), o = Kc, o._s.has(e) || (s ? Xc(e, t, r, o) : um(e, r, o)), o._s.get(e)
  }
  return i.$id = e, i
}
const Fn = typeof document < "u";

function Jc(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
}

function fm(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && Jc(e.default)
}
const be = Object.assign;

function qs(e, t) {
  const n = {};
  for (const r in t) {
    const s = t[r];
    n[r] = Dt(s) ? s.map(e) : e(s)
  }
  return n
}
const vr = () => {},
  Dt = Array.isArray;

function vl(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n
}
const Zc = /#/g,
  dm = /&/g,
  hm = /\//g,
  mm = /=/g,
  pm = /\?/g,
  Qc = /\+/g,
  gm = /%5B/g,
  _m = /%5D/g,
  zc = /%5E/g,
  vm = /%60/g,
  eu = /%7B/g,
  ym = /%7C/g,
  tu = /%7D/g,
  bm = /%20/g;

function yo(e) {
  return e == null ? "" : encodeURI("" + e)
    .replace(ym, "|")
    .replace(gm, "[")
    .replace(_m, "]")
}

function Em(e) {
  return yo(e)
    .replace(eu, "{")
    .replace(tu, "}")
    .replace(zc, "^")
}

function Ei(e) {
  return yo(e)
    .replace(Qc, "%2B")
    .replace(bm, "+")
    .replace(Zc, "%23")
    .replace(dm, "%26")
    .replace(vm, "`")
    .replace(eu, "{")
    .replace(tu, "}")
    .replace(zc, "^")
}

function Am(e) {
  return Ei(e)
    .replace(mm, "%3D")
}

function Om(e) {
  return yo(e)
    .replace(Zc, "%23")
    .replace(pm, "%3F")
}

function Sm(e) {
  return Om(e)
    .replace(hm, "%2F")
}

function Tr(e) {
  if (e == null) return null;
  try {
    return decodeURIComponent("" + e)
  } catch {}
  return "" + e
}
const Im = /\/$/,
  Cm = e => e.replace(Im, "");

function Xs(e, t, n = "/") {
  let r, s = {},
    i = "",
    o = "";
  const l = t.indexOf("#");
  let a = t.indexOf("?");
  return a = l >= 0 && a > l ? -1 : a, a >= 0 && (r = t.slice(0, a), i = t.slice(a, l > 0 ? l : t.length), s = e(i.slice(1))), l >= 0 && (r = r || t.slice(0, l), o = t.slice(l, t.length)), r = Pm(r ?? t, n), {
    fullPath: r + i + o,
    path: r,
    query: s,
    hash: Tr(o)
  }
}

function Tm(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "")
}

function yl(e, t) {
  return !t || !e.toLowerCase()
    .startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}

function Rm(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1;
  return r > -1 && r === s && Yn(t.matched[r], n.matched[s]) && nu(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}

function Yn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}

function nu(e, t) {
  if (Object.keys(e)
    .length !== Object.keys(t)
    .length) return !1;
  for (const n in e)
    if (!Nm(e[n], t[n])) return !1;
  return !0
}

function Nm(e, t) {
  return Dt(e) ? bl(e, t) : Dt(t) ? bl(t, e) : e === t
}

function bl(e, t) {
  return Dt(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t
}

function Pm(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    r = e.split("/"),
    s = r[r.length - 1];
  (s === ".." || s === ".") && r.push("");
  let i = n.length - 1,
    o, l;
  for (o = 0; o < r.length; o++)
    if (l = r[o], l !== ".")
      if (l === "..") i > 1 && i--;
      else break;
  return n.slice(0, i)
    .join("/") + "/" + r.slice(o)
    .join("/")
}
const rn = {
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
let Ai = function(e) {
    return e.pop = "pop", e.push = "push", e
  }({}),
  Js = function(e) {
    return e.back = "back", e.forward = "forward", e.unknown = "", e
  }({});

function Lm(e) {
  if (!e)
    if (Fn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "")
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Cm(e)
}
const wm = /^[^#]+#/;

function Dm(e, t) {
  return e.replace(wm, "#") + t
}

function Fm(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0)
  }
}
const Cs = () => ({
  left: window.scrollX,
  top: window.scrollY
});

function xm(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      r = typeof n == "string" && n.startsWith("#"),
      s = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!s) return;
    t = Fm(s, e)
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}

function El(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const Oi = new Map;

function km(e, t) {
  Oi.set(e, t)
}

function Mm(e) {
  const t = Oi.get(e);
  return Oi.delete(e), t
}

function Vm(e) {
  return typeof e == "string" || e && typeof e == "object"
}

function ru(e) {
  return typeof e == "string" || typeof e == "symbol"
}
let ke = function(e) {
  return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e
}({});
const su = Symbol("");
ke.MATCHER_NOT_FOUND + "", ke.NAVIGATION_GUARD_REDIRECT + "", ke.NAVIGATION_ABORTED + "", ke.NAVIGATION_CANCELLED + "", ke.NAVIGATION_DUPLICATED + "";

function qn(e, t) {
  return be(new Error, {
    type: e,
    [su]: !0
  }, t)
}

function Ut(e, t) {
  return e instanceof Error && su in e && (t == null || !!(e.type & t))
}
const jm = ["params", "query", "hash"];

function $m(e) {
  if (typeof e == "string") return e;
  if (e.path != null) return e.path;
  const t = {};
  for (const n of jm) n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2)
}

function Um(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const n = (e[0] === "?" ? e.slice(1) : e)
    .split("&");
  for (let r = 0; r < n.length; ++r) {
    const s = n[r].replace(Qc, " "),
      i = s.indexOf("="),
      o = Tr(i < 0 ? s : s.slice(0, i)),
      l = i < 0 ? null : Tr(s.slice(i + 1));
    if (o in t) {
      let a = t[o];
      Dt(a) || (a = t[o] = [a]), a.push(l)
    } else t[o] = l
  }
  return t
}

function Al(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (n = Am(n), r == null) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue
    }(Dt(r) ? r.map(s => s && Ei(s)) : [r && Ei(r)])
    .forEach(s => {
      s !== void 0 && (t += (t.length ? "&" : "") + n, s != null && (t += "=" + s))
    })
  }
  return t
}

function Bm(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 && (t[n] = Dt(r) ? r.map(s => s == null ? null : "" + s) : r == null ? r : "" + r)
  }
  return t
}
const Hm = Symbol(""),
  Ol = Symbol(""),
  bo = Symbol(""),
  iu = Symbol(""),
  Si = Symbol("");

function rr() {
  let e = [];

  function t(r) {
    return e.push(r), () => {
      const s = e.indexOf(r);
      s > -1 && e.splice(s, 1)
    }
  }

  function n() {
    e = []
  }
  return {
    add: t,
    list: () => e.slice(),
    reset: n
  }
}

function an(e, t, n, r, s, i = o => o()) {
  const o = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
  return () => new Promise((l, a) => {
    const c = d => {
        d === !1 ? a(qn(ke.NAVIGATION_ABORTED, {
          from: n,
          to: t
        })) : d instanceof Error ? a(d) : Vm(d) ? a(qn(ke.NAVIGATION_GUARD_REDIRECT, {
          from: t,
          to: d
        })) : (o && r.enterCallbacks[s] === o && typeof d == "function" && o.push(d), l())
      },
      f = i(() => e.call(r && r.instances[s], t, n, c));
    let u = Promise.resolve(f);
    e.length < 3 && (u = u.then(c)), u.catch(d => a(d))
  })
}

function Zs(e, t, n, r, s = i => i()) {
  const i = [];
  for (const o of e)
    for (const l in o.components) {
      let a = o.components[l];
      if (!(t !== "beforeRouteEnter" && !o.instances[l]))
        if (Jc(a)) {
          const c = (a.__vccOpts || a)[t];
          c && i.push(an(c, n, r, o, l, s))
        } else {
          let c = a();
          i.push(() => c.then(f => {
            if (!f) throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);
            const u = fm(f) ? f.default : f;
            o.mods[l] = f, o.components[l] = u;
            const d = (u.__vccOpts || u)[t];
            return d && an(d, n, r, o, l, s)()
          }))
        }
    }
  return i
}

function Wm(e, t) {
  const n = [],
    r = [],
    s = [],
    i = Math.max(t.matched.length, e.matched.length);
  for (let o = 0; o < i; o++) {
    const l = t.matched[o];
    l && (e.matched.find(c => Yn(c, l)) ? r.push(l) : n.push(l));
    const a = e.matched[o];
    a && (t.matched.find(c => Yn(c, a)) || s.push(a))
  }
  return [n, r, s]
}
let Gm = () => location.protocol + "//" + location.host;

function ou(e, t) {
  const {
    pathname: n,
    search: r,
    hash: s
  } = t, i = e.indexOf("#");
  if (i > -1) {
    let o = s.includes(e.slice(i)) ? e.slice(i)
      .length : 1,
      l = s.slice(o);
    return l[0] !== "/" && (l = "/" + l), yl(l, "")
  }
  return yl(n, e) + r + s
}

function Km(e, t, n, r) {
  let s = [],
    i = [],
    o = null;
  const l = ({
    state: d
  }) => {
    const h = ou(e, location),
      b = n.value,
      y = t.value;
    let D = 0;
    if (d) {
      if (n.value = h, t.value = d, o && o === b) {
        o = null;
        return
      }
      D = y ? d.position - y.position : 0
    } else r(h);
    s.forEach(v => {
      v(n.value, b, {
        delta: D,
        type: Ai.pop,
        direction: D ? D > 0 ? Js.forward : Js.back : Js.unknown
      })
    })
  };

  function a() {
    o = n.value
  }

  function c(d) {
    s.push(d);
    const h = () => {
      const b = s.indexOf(d);
      b > -1 && s.splice(b, 1)
    };
    return i.push(h), h
  }

  function f() {
    if (document.visibilityState === "hidden") {
      const {
        history: d
      } = window;
      if (!d.state) return;
      d.replaceState(be({}, d.state, {
        scroll: Cs()
      }), "")
    }
  }

  function u() {
    for (const d of i) d();
    i = [], window.removeEventListener("popstate", l), window.removeEventListener("pagehide", f), document.removeEventListener("visibilitychange", f)
  }
  return window.addEventListener("popstate", l), window.addEventListener("pagehide", f), document.addEventListener("visibilitychange", f), {
    pauseListeners: a,
    listen: c,
    destroy: u
  }
}

function Sl(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? Cs() : null
  }
}

function Ym(e) {
  const {
    history: t,
    location: n
  } = window, r = {
    value: ou(e, n)
  }, s = {
    value: t.state
  };
  s.value || i(r.value, {
    back: null,
    current: r.value,
    forward: null,
    position: t.length - 1,
    replaced: !0,
    scroll: null
  }, !0);

  function i(a, c, f) {
    const u = e.indexOf("#"),
      d = u > -1 ? (n.host && document.querySelector("base") ? e : e.slice(u)) + a : Gm() + e + a;
    try {
      t[f ? "replaceState" : "pushState"](c, "", d), s.value = c
    } catch (h) {
      console.error(h), n[f ? "replace" : "assign"](d)
    }
  }

  function o(a, c) {
    i(a, be({}, t.state, Sl(s.value.back, a, s.value.forward, !0), c, {
      position: s.value.position
    }), !0), r.value = a
  }

  function l(a, c) {
    const f = be({}, s.value, t.state, {
      forward: a,
      scroll: Cs()
    });
    i(f.current, f, !0), i(a, be({}, Sl(r.value, a, null), {
      position: f.position + 1
    }, c), !1), r.value = a
  }
  return {
    location: r,
    state: s,
    push: l,
    replace: o
  }
}

function qm(e) {
  e = Lm(e);
  const t = Ym(e),
    n = Km(e, t.state, t.location, t.replace);

  function r(i, o = !0) {
    o || n.pauseListeners(), history.go(i)
  }
  const s = be({
    location: "",
    base: e,
    go: r,
    createHref: Dm.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s
}
let En = function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e
}({});
var We = function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e
}(We || {});
const Xm = {
    type: En.Static,
    value: ""
  },
  Jm = /[a-zA-Z0-9_]/;

function Zm(e) {
  if (!e) return [
    []
  ];
  if (e === "/") return [
    [Xm]
  ];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);

  function t(h) {
    throw new Error(`ERR (${n})/"${c}": ${h}`)
  }
  let n = We.Static,
    r = n;
  const s = [];
  let i;

  function o() {
    i && s.push(i), i = []
  }
  let l = 0,
    a, c = "",
    f = "";

  function u() {
    c && (n === We.Static ? i.push({
      type: En.Static,
      value: c
    }) : n === We.Param || n === We.ParamRegExp || n === We.ParamRegExpEnd ? (i.length > 1 && (a === "*" || a === "+") && t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), i.push({
      type: En.Param,
      value: c,
      regexp: f,
      repeatable: a === "*" || a === "+",
      optional: a === "*" || a === "?"
    })) : t("Invalid state to consume buffer"), c = "")
  }

  function d() {
    c += a
  }
  for (; l < e.length;) {
    if (a = e[l++], a === "\\" && n !== We.ParamRegExp) {
      r = n, n = We.EscapeNext;
      continue
    }
    switch (n) {
      case We.Static:
        a === "/" ? (c && u(), o()) : a === ":" ? (u(), n = We.Param) : d();
        break;
      case We.EscapeNext:
        d(), n = r;
        break;
      case We.Param:
        a === "(" ? n = We.ParamRegExp : Jm.test(a) ? d() : (u(), n = We.Static, a !== "*" && a !== "?" && a !== "+" && l--);
        break;
      case We.ParamRegExp:
        a === ")" ? f[f.length - 1] == "\\" ? f = f.slice(0, -1) + a : n = We.ParamRegExpEnd : f += a;
        break;
      case We.ParamRegExpEnd:
        u(), n = We.Static, a !== "*" && a !== "?" && a !== "+" && l--, f = "";
        break;
      default:
        t("Unknown state");
        break
    }
  }
  return n === We.ParamRegExp && t(`Unfinished custom RegExp for param "${c}"`), u(), o(), s
}
const Il = "[^/]+?",
  Qm = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
  };
var ot = function(e) {
  return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = .7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = .25] = "BonusCaseSensitive", e
}(ot || {});
const zm = /[.+*?^${}()[\]/\\]/g;

function ep(e, t) {
  const n = be({}, Qm, t),
    r = [];
  let s = n.start ? "^" : "";
  const i = [];
  for (const c of e) {
    const f = c.length ? [] : [ot.Root];
    n.strict && !c.length && (s += "/");
    for (let u = 0; u < c.length; u++) {
      const d = c[u];
      let h = ot.Segment + (n.sensitive ? ot.BonusCaseSensitive : 0);
      if (d.type === En.Static) u || (s += "/"), s += d.value.replace(zm, "\\$&"), h += ot.Static;
      else if (d.type === En.Param) {
        const {
          value: b,
          repeatable: y,
          optional: D,
          regexp: v
        } = d;
        i.push({
          name: b,
          repeatable: y,
          optional: D
        });
        const O = v || Il;
        if (O !== Il) {
          h += ot.BonusCustomRegExp;
          try {
            `${O}`
          } catch (S) {
            throw new Error(`Invalid custom RegExp for param "${b}" (${O}): ` + S.message)
          }
        }
        let R = y ? `((?:${O})(?:/(?:${O}))*)` : `(${O})`;
        u || (R = D && c.length < 2 ? `(?:/${R})` : "/" + R), D && (R += "?"), s += R, h += ot.Dynamic, D && (h += ot.BonusOptional), y && (h += ot.BonusRepeatable), O === ".*" && (h += ot.BonusWildcard)
      }
      f.push(h)
    }
    r.push(f)
  }
  if (n.strict && n.end) {
    const c = r.length - 1;
    r[c][r[c].length - 1] += ot.BonusStrict
  }
  n.strict || (s += "/?"), n.end ? s += "$" : n.strict && !s.endsWith("/") && (s += "(?:/|$)");
  const o = new RegExp(s, n.sensitive ? "" : "i");

  function l(c) {
    const f = c.match(o),
      u = {};
    if (!f) return null;
    for (let d = 1; d < f.length; d++) {
      const h = f[d] || "",
        b = i[d - 1];
      u[b.name] = h && b.repeatable ? h.split("/") : h
    }
    return u
  }

  function a(c) {
    let f = "",
      u = !1;
    for (const d of e) {
      (!u || !f.endsWith("/")) && (f += "/"), u = !1;
      for (const h of d)
        if (h.type === En.Static) f += h.value;
        else if (h.type === En.Param) {
        const {
          value: b,
          repeatable: y,
          optional: D
        } = h, v = b in c ? c[b] : "";
        if (Dt(v) && !y) throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);
        const O = Dt(v) ? v.join("/") : v;
        if (!O)
          if (D) d.length < 2 && (f.endsWith("/") ? f = f.slice(0, -1) : u = !0);
          else throw new Error(`Missing required param "${b}"`);
        f += O
      }
    }
    return f || "/"
  }
  return {
    re: o,
    score: r,
    keys: i,
    parse: l,
    stringify: a
  }
}

function tp(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length;) {
    const r = t[n] - e[n];
    if (r) return r;
    n++
  }
  return e.length < t.length ? e.length === 1 && e[0] === ot.Static + ot.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === ot.Static + ot.Segment ? 1 : -1 : 0
}

function lu(e, t) {
  let n = 0;
  const r = e.score,
    s = t.score;
  for (; n < r.length && n < s.length;) {
    const i = tp(r[n], s[n]);
    if (i) return i;
    n++
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (Cl(r)) return 1;
    if (Cl(s)) return -1
  }
  return s.length - r.length
}

function Cl(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0
}
const np = {
  strict: !1,
  end: !0,
  sensitive: !1
};

function rp(e, t, n) {
  const r = ep(Zm(e.path), n),
    s = be(r, {
      record: e,
      parent: t,
      children: [],
      alias: []
    });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s
}

function sp(e, t) {
  const n = [],
    r = new Map;
  t = vl(np, t);

  function s(u) {
    return r.get(u)
  }

  function i(u, d, h) {
    const b = !h,
      y = Rl(u);
    y.aliasOf = h && h.record;
    const D = vl(t, u),
      v = [y];
    if ("alias" in u) {
      const S = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const P of S) v.push(Rl(be({}, y, {
        components: h ? h.record.components : y.components,
        path: P,
        aliasOf: h ? h.record : y
      })))
    }
    let O, R;
    for (const S of v) {
      const {
        path: P
      } = S;
      if (d && P[0] !== "/") {
        const x = d.record.path,
          w = x[x.length - 1] === "/" ? "" : "/";
        S.path = d.record.path + (P && w + P)
      }
      if (O = rp(S, d, D), h ? h.alias.push(O) : (R = R || O, R !== O && R.alias.push(O), b && u.name && !Nl(O) && o(u.name)), au(O) && a(O), y.children) {
        const x = y.children;
        for (let w = 0; w < x.length; w++) i(x[w], O, h && h.children[w])
      }
      h = h || O
    }
    return R ? () => {
      o(R)
    } : vr
  }

  function o(u) {
    if (ru(u)) {
      const d = r.get(u);
      d && (r.delete(u), n.splice(n.indexOf(d), 1), d.children.forEach(o), d.alias.forEach(o))
    } else {
      const d = n.indexOf(u);
      d > -1 && (n.splice(d, 1), u.record.name && r.delete(u.record.name), u.children.forEach(o), u.alias.forEach(o))
    }
  }

  function l() {
    return n
  }

  function a(u) {
    const d = lp(u, n);
    n.splice(d, 0, u), u.record.name && !Nl(u) && r.set(u.record.name, u)
  }

  function c(u, d) {
    let h, b = {},
      y, D;
    if ("name" in u && u.name) {
      if (h = r.get(u.name), !h) throw qn(ke.MATCHER_NOT_FOUND, {
        location: u
      });
      D = h.record.name, b = be(Tl(d.params, h.keys.filter(R => !R.optional)
        .concat(h.parent ? h.parent.keys.filter(R => R.optional) : [])
        .map(R => R.name)), u.params && Tl(u.params, h.keys.map(R => R.name))), y = h.stringify(b)
    } else if (u.path != null) y = u.path, h = n.find(R => R.re.test(y)), h && (b = h.parse(y), D = h.record.name);
    else {
      if (h = d.name ? r.get(d.name) : n.find(R => R.re.test(d.path)), !h) throw qn(ke.MATCHER_NOT_FOUND, {
        location: u,
        currentLocation: d
      });
      D = h.record.name, b = be({}, d.params, u.params), y = h.stringify(b)
    }
    const v = [];
    let O = h;
    for (; O;) v.unshift(O.record), O = O.parent;
    return {
      name: D,
      path: y,
      params: b,
      matched: v,
      meta: op(v)
    }
  }
  e.forEach(u => i(u));

  function f() {
    n.length = 0, r.clear()
  }
  return {
    addRoute: i,
    resolve: c,
    removeRoute: o,
    clearRoutes: f,
    getRoutes: l,
    getRecordMatcher: s
  }
}

function Tl(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n
}

function Rl(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: ip(e),
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

function ip(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else
    for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
  return t
}

function Nl(e) {
  for (; e;) {
    if (e.record.aliasOf) return !0;
    e = e.parent
  }
  return !1
}

function op(e) {
  return e.reduce((t, n) => be(t, n.meta), {})
}

function lp(e, t) {
  let n = 0,
    r = t.length;
  for (; n !== r;) {
    const i = n + r >> 1;
    lu(e, t[i]) < 0 ? r = i : n = i + 1
  }
  const s = ap(e);
  return s && (r = t.lastIndexOf(s, r - 1)), r
}

function ap(e) {
  let t = e;
  for (; t = t.parent;)
    if (au(t) && lu(e, t) === 0) return t
}

function au({
  record: e
}) {
  return !!(e.name || e.components && Object.keys(e.components)
    .length || e.redirect)
}

function Pl(e) {
  const t = Ct(bo),
    n = Ct(iu),
    r = le(() => {
      const a = pe(e.to);
      return t.resolve(a)
    }),
    s = le(() => {
      const {
        matched: a
      } = r.value, {
        length: c
      } = a, f = a[c - 1], u = n.matched;
      if (!f || !u.length) return -1;
      const d = u.findIndex(Yn.bind(null, f));
      if (d > -1) return d;
      const h = Ll(a[c - 2]);
      return c > 1 && Ll(f) === h && u[u.length - 1].path !== h ? u.findIndex(Yn.bind(null, a[c - 2])) : d
    }),
    i = le(() => s.value > -1 && hp(n.params, r.value.params)),
    o = le(() => s.value > -1 && s.value === n.matched.length - 1 && nu(n.params, r.value.params));

  function l(a = {}) {
    if (dp(a)) {
      const c = t[pe(e.replace) ? "replace" : "push"](pe(e.to))
        .catch(vr);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => c), c
    }
    return Promise.resolve()
  }
  return {
    route: r,
    href: le(() => r.value.href),
    isActive: i,
    isExactActive: o,
    navigate: l
  }
}

function cp(e) {
  return e.length === 1 ? e[0] : e
}
const up = Nn({
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
    useLink: Pl,
    setup(e, {
      slots: t
    }) {
      const n = tn(Pl(e)),
        {
          options: r
        } = Ct(bo),
        s = le(() => ({
          [wl(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
          [wl(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
      return () => {
        const i = t.default && cp(t.default(n));
        return e.custom ? i : Ss("a", {
          "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
          href: n.href,
          onClick: n.navigate,
          class: s.value
        }, i)
      }
    }
  }),
  fp = up;

function dp(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}

function hp(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n];
    if (typeof r == "string") {
      if (r !== s) return !1
    } else if (!Dt(s) || s.length !== r.length || r.some((i, o) => i !== s[o])) return !1
  }
  return !0
}

function Ll(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const wl = (e, t, n) => e ?? t ?? n,
  mp = Nn({
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
      slots: n
    }) {
      const r = Ct(Si),
        s = le(() => e.route || r.value),
        i = Ct(Ol, 0),
        o = le(() => {
          let c = pe(i);
          const {
            matched: f
          } = s.value;
          let u;
          for (;
            (u = f[c]) && !u.components;) c++;
          return c
        }),
        l = le(() => s.value.matched[o.value]);
      In(Ol, le(() => o.value + 1)), In(Hm, l), In(Si, s);
      const a = Ge();
      return ct(() => [a.value, l.value, e.name], ([c, f, u], [d, h, b]) => {
        f && (f.instances[u] = c, h && h !== f && c && c === d && (f.leaveGuards.size || (f.leaveGuards = h.leaveGuards), f.updateGuards.size || (f.updateGuards = h.updateGuards))), c && f && (!h || !Yn(f, h) || !d) && (f.enterCallbacks[u] || [])
          .forEach(y => y(c))
      }, {
        flush: "post"
      }), () => {
        const c = s.value,
          f = e.name,
          u = l.value,
          d = u && u.components[f];
        if (!d) return Dl(n.default, {
          Component: d,
          route: c
        });
        const h = u.props[f],
          b = h ? h === !0 ? c.params : typeof h == "function" ? h(c) : h : null,
          D = Ss(d, be({}, b, t, {
            onVnodeUnmounted: v => {
              v.component.isUnmounted && (u.instances[f] = null)
            },
            ref: a
          }));
        return Dl(n.default, {
          Component: D,
          route: c
        }) || D
      }
    }
  });

function Dl(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n
}
const cu = mp;

function pp(e) {
  const t = sp(e.routes, e),
    n = e.parseQuery || Um,
    r = e.stringifyQuery || Al,
    s = e.history,
    i = rr(),
    o = rr(),
    l = rr(),
    a = gs(rn);
  let c = rn;
  Fn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const f = qs.bind(null, L => "" + L),
    u = qs.bind(null, Sm),
    d = qs.bind(null, Tr);

  function h(L, B) {
    let U, q;
    return ru(L) ? (U = t.getRecordMatcher(L), q = B) : q = L, t.addRoute(q, U)
  }

  function b(L) {
    const B = t.getRecordMatcher(L);
    B && t.removeRoute(B)
  }

  function y() {
    return t.getRoutes()
      .map(L => L.record)
  }

  function D(L) {
    return !!t.getRecordMatcher(L)
  }

  function v(L, B) {
    if (B = be({}, B || a.value), typeof L == "string") {
      const I = Xs(n, L, B.path),
        k = t.resolve({
          path: I.path
        }, B),
        j = s.createHref(I.fullPath);
      return be(I, k, {
        params: d(k.params),
        hash: Tr(I.hash),
        redirectedFrom: void 0,
        href: j
      })
    }
    let U;
    if (L.path != null) U = be({}, L, {
      path: Xs(n, L.path, B.path)
        .path
    });
    else {
      const I = be({}, L.params);
      for (const k in I) I[k] == null && delete I[k];
      U = be({}, L, {
        params: u(I)
      }), B.params = u(B.params)
    }
    const q = t.resolve(U, B),
      oe = L.hash || "";
    q.params = f(d(q.params));
    const g = Tm(r, be({}, L, {
        hash: Em(oe),
        path: q.path
      })),
      _ = s.createHref(g);
    return be({
      fullPath: g,
      hash: oe,
      query: r === Al ? Bm(L.query) : L.query || {}
    }, q, {
      redirectedFrom: void 0,
      href: _
    })
  }

  function O(L) {
    return typeof L == "string" ? Xs(n, L, a.value.path) : be({}, L)
  }

  function R(L, B) {
    if (c !== L) return qn(ke.NAVIGATION_CANCELLED, {
      from: B,
      to: L
    })
  }

  function S(L) {
    return w(L)
  }

  function P(L) {
    return S(be(O(L), {
      replace: !0
    }))
  }

  function x(L, B) {
    const U = L.matched[L.matched.length - 1];
    if (U && U.redirect) {
      const {
        redirect: q
      } = U;
      let oe = typeof q == "function" ? q(L, B) : q;
      return typeof oe == "string" && (oe = oe.includes("?") || oe.includes("#") ? oe = O(oe) : {
        path: oe
      }, oe.params = {}), be({
        query: L.query,
        hash: L.hash,
        params: oe.path != null ? {} : L.params
      }, oe)
    }
  }

  function w(L, B) {
    const U = c = v(L),
      q = a.value,
      oe = L.state,
      g = L.force,
      _ = L.replace === !0,
      I = x(U, q);
    if (I) return w(be(O(I), {
      state: typeof I == "object" ? be({}, oe, I.state) : oe,
      force: g,
      replace: _
    }), B || U);
    const k = U;
    k.redirectedFrom = B;
    let j;
    return !g && Rm(r, q, U) && (j = qn(ke.NAVIGATION_DUPLICATED, {
        to: k,
        from: q
      }), je(q, q, !0, !1)), (j ? Promise.resolve(j) : Q(k, q))
      .catch(M => Ut(M) ? Ut(M, ke.NAVIGATION_GUARD_REDIRECT) ? M : Ve(M) : de(M, k, q))
      .then(M => {
        if (M) {
          if (Ut(M, ke.NAVIGATION_GUARD_REDIRECT)) return w(be({
            replace: _
          }, O(M.to), {
            state: typeof M.to == "object" ? be({}, oe, M.to.state) : oe,
            force: g
          }), B || k)
        } else M = ne(k, q, !0, _, oe);
        return se(k, q, M), M
      })
  }

  function W(L, B) {
    const U = R(L, B);
    return U ? Promise.reject(U) : Promise.resolve()
  }

  function H(L) {
    const B = Ne.values()
      .next()
      .value;
    return B && typeof B.runWithContext == "function" ? B.runWithContext(L) : L()
  }

  function Q(L, B) {
    let U;
    const [q, oe, g] = Wm(L, B);
    U = Zs(q.reverse(), "beforeRouteLeave", L, B);
    for (const I of q) I.leaveGuards.forEach(k => {
      U.push(an(k, L, B))
    });
    const _ = W.bind(null, L, B);
    return U.push(_), K(U)
      .then(() => {
        U = [];
        for (const I of i.list()) U.push(an(I, L, B));
        return U.push(_), K(U)
      })
      .then(() => {
        U = Zs(oe, "beforeRouteUpdate", L, B);
        for (const I of oe) I.updateGuards.forEach(k => {
          U.push(an(k, L, B))
        });
        return U.push(_), K(U)
      })
      .then(() => {
        U = [];
        for (const I of g)
          if (I.beforeEnter)
            if (Dt(I.beforeEnter))
              for (const k of I.beforeEnter) U.push(an(k, L, B));
            else U.push(an(I.beforeEnter, L, B));
        return U.push(_), K(U)
      })
      .then(() => (L.matched.forEach(I => I.enterCallbacks = {}), U = Zs(g, "beforeRouteEnter", L, B, H), U.push(_), K(U)))
      .then(() => {
        U = [];
        for (const I of o.list()) U.push(an(I, L, B));
        return U.push(_), K(U)
      })
      .catch(I => Ut(I, ke.NAVIGATION_CANCELLED) ? I : Promise.reject(I))
  }

  function se(L, B, U) {
    l.list()
      .forEach(q => H(() => q(L, B, U)))
  }

  function ne(L, B, U, q, oe) {
    const g = R(L, B);
    if (g) return g;
    const _ = B === rn,
      I = Fn ? history.state : {};
    U && (q || _ ? s.replace(L.fullPath, be({
      scroll: _ && I && I.scroll
    }, oe)) : s.push(L.fullPath, oe)), a.value = L, je(L, B, U, _), Ve()
  }
  let me;

  function Ie() {
    me || (me = s.listen((L, B, U) => {
      if (!dt.listening) return;
      const q = v(L),
        oe = x(q, dt.currentRoute.value);
      if (oe) {
        w(be(oe, {
            replace: !0,
            force: !0
          }), q)
          .catch(vr);
        return
      }
      c = q;
      const g = a.value;
      Fn && km(El(g.fullPath, U.delta), Cs()), Q(q, g)
        .catch(_ => Ut(_, ke.NAVIGATION_ABORTED | ke.NAVIGATION_CANCELLED) ? _ : Ut(_, ke.NAVIGATION_GUARD_REDIRECT) ? (w(be(O(_.to), {
            force: !0
          }), q)
          .then(I => {
            Ut(I, ke.NAVIGATION_ABORTED | ke.NAVIGATION_DUPLICATED) && !U.delta && U.type === Ai.pop && s.go(-1, !1)
          })
          .catch(vr), Promise.reject()) : (U.delta && s.go(-U.delta, !1), de(_, q, g)))
        .then(_ => {
          _ = _ || ne(q, g, !1), _ && (U.delta && !Ut(_, ke.NAVIGATION_CANCELLED) ? s.go(-U.delta, !1) : U.type === Ai.pop && Ut(_, ke.NAVIGATION_ABORTED | ke.NAVIGATION_DUPLICATED) && s.go(-1, !1)), se(q, g, _)
        })
        .catch(vr)
    }))
  }
  let Re = rr(),
    ae = rr(),
    J;

  function de(L, B, U) {
    Ve(L);
    const q = ae.list();
    return q.length ? q.forEach(oe => oe(L, B, U)) : console.error(L), Promise.reject(L)
  }

  function Ae() {
    return J && a.value !== rn ? Promise.resolve() : new Promise((L, B) => {
      Re.add([L, B])
    })
  }

  function Ve(L) {
    return J || (J = !L, Ie(), Re.list()
      .forEach(([B, U]) => L ? U(L) : B()), Re.reset()), L
  }

  function je(L, B, U, q) {
    const {
      scrollBehavior: oe
    } = e;
    if (!Fn || !oe) return Promise.resolve();
    const g = !U && Mm(El(L.fullPath, 0)) || (q || !U) && history.state && history.state.scroll || null;
    return yt()
      .then(() => oe(L, B, g))
      .then(_ => _ && xm(_))
      .catch(_ => de(_, L, B))
  }
  const xe = L => s.go(L);
  let vt;
  const Ne = new Set,
    dt = {
      currentRoute: a,
      listening: !0,
      addRoute: h,
      removeRoute: b,
      clearRoutes: t.clearRoutes,
      hasRoute: D,
      getRoutes: y,
      resolve: v,
      options: e,
      push: S,
      replace: P,
      go: xe,
      back: () => xe(-1),
      forward: () => xe(1),
      beforeEach: i.add,
      beforeResolve: o.add,
      afterEach: l.add,
      onError: ae.add,
      isReady: Ae,
      install(L) {
        L.component("RouterLink", fp), L.component("RouterView", cu), L.config.globalProperties.$router = dt, Object.defineProperty(L.config.globalProperties, "$route", {
          enumerable: !0,
          get: () => pe(a)
        }), Fn && !vt && a.value === rn && (vt = !0, S(s.location)
          .catch(q => {}));
        const B = {};
        for (const q in rn) Object.defineProperty(B, q, {
          get: () => a.value[q],
          enumerable: !0
        });
        L.provide(bo, dt), L.provide(iu, Ga(B)), L.provide(Si, a);
        const U = L.unmount;
        Ne.add(L), L.unmount = function() {
          Ne.delete(L), Ne.size < 1 && (c = rn, me && me(), me = null, a.value = rn, vt = !1, J = !1), U()
        }
      }
    };

  function K(L) {
    return L.reduce((B, U) => B.then(() => H(U)), Promise.resolve())
  }
  return dt
}

function gp(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack))
}
const us = typeof window < "u",
  hn = (e, t = !1) => t ? Symbol.for(e) : Symbol(e),
  _p = (e, t, n) => vp({
    l: e,
    k: t,
    s: n
  }),
  vp = e => JSON.stringify(e)
  .replace(/\u2028/g, "\\u2028")
  .replace(/\u2029/g, "\\u2029")
  .replace(/\u0027/g, "\\u0027"),
  He = e => typeof e == "number" && isFinite(e),
  yp = e => Eo(e) === "[object Date]",
  Xn = e => Eo(e) === "[object RegExp]",
  Ts = e => he(e) && Object.keys(e)
  .length === 0,
  Ke = Object.assign,
  bp = Object.create,
  Se = (e = null) => bp(e);
let Fl;
const An = () => Fl || (Fl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" || typeof window < "u" ? window : Se());

function xl(e) {
  return e.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
    .replace(/\//g, "&#x2F;")
    .replace(/=/g, "&#x3D;")
}

function kl(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}

function Ep(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, s, i) => `${s}="${kl(i)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, s, i) => `${s}='${kl(i)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi, /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach(r => {
    e = e.replace(r, "$1javascript&#58;")
  }), e
}
const Ap = Object.prototype.hasOwnProperty;

function Nt(e, t) {
  return Ap.call(e, t)
}
const Me = Array.isArray,
  De = e => typeof e == "function",
  X = e => typeof e == "string",
  _e = e => typeof e == "boolean",
  ye = e => e !== null && typeof e == "object",
  Op = e => ye(e) && De(e.then) && De(e.catch),
  uu = Object.prototype.toString,
  Eo = e => uu.call(e),
  he = e => Eo(e) === "[object Object]",
  Sp = e => e == null ? "" : Me(e) || he(e) && e.toString === uu ? JSON.stringify(e, null, 2) : String(e);

function Ao(e, t = "") {
  return e.reduce((n, r, s) => s === 0 ? n + r : n + t + r, "")
}
const Ur = e => !ye(e) || Me(e);

function zr(e, t) {
  if (Ur(e) || Ur(t)) throw new Error("Invalid value");
  const n = [{
    src: e,
    des: t
  }];
  for (; n.length;) {
    const {
      src: r,
      des: s
    } = n.pop();
    Object.keys(r)
      .forEach(i => {
        i !== "__proto__" && (ye(r[i]) && !ye(s[i]) && (s[i] = Array.isArray(r[i]) ? [] : Se()), Ur(s[i]) || Ur(r[i]) ? s[i] = r[i] : n.push({
          src: r[i],
          des: s[i]
        }))
      })
  }
}

function Ip(e, t, n) {
  return {
    line: e,
    column: t,
    offset: n
  }
}

function Ii(e, t, n) {
  return {
    start: e,
    end: t
  }
}
const Ee = {
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
    UNEXPECTED_LEXICAL_ANALYSIS: 14
  },
  Cp = 17;

function Rs(e, t, n = {}) {
  const {
    domain: r,
    messages: s,
    args: i
  } = n, o = e, l = new SyntaxError(String(o));
  return l.code = e, t && (l.location = t), l.domain = r, l
}

function Tp(e) {
  throw e
}
const xt = " ",
  Rp = "\r",
  tt = `
`,
  Np = "
",
  Pp = "
";

function Lp(e) {
  const t = e;
  let n = 0,
    r = 1,
    s = 1,
    i = 0;
  const o = w => t[w] === Rp && t[w + 1] === tt,
    l = w => t[w] === tt,
    a = w => t[w] === Pp,
    c = w => t[w] === Np,
    f = w => o(w) || l(w) || a(w) || c(w),
    u = () => n,
    d = () => r,
    h = () => s,
    b = () => i,
    y = w => o(w) || a(w) || c(w) ? tt : t[w],
    D = () => y(n),
    v = () => y(n + i);

  function O() {
    return i = 0, f(n) && (r++, s = 0), o(n) && n++, n++, s++, t[n]
  }

  function R() {
    return o(n + i) && i++, i++, t[n + i]
  }

  function S() {
    n = 0, r = 1, s = 1, i = 0
  }

  function P(w = 0) {
    i = w
  }

  function x() {
    const w = n + i;
    for (; w !== n;) O();
    i = 0
  }
  return {
    index: u,
    line: d,
    column: h,
    peekOffset: b,
    charAt: y,
    currentChar: D,
    currentPeek: v,
    next: O,
    peek: R,
    reset: S,
    resetPeek: P,
    skipToPeek: x
  }
}
const Bt = void 0,
  wp = ".",
  Ml = "'",
  Dp = "tokenizer";

function Fp(e, t = {}) {
  const n = t.location !== !1,
    r = Lp(e),
    s = () => r.index(),
    i = () => Ip(r.line(), r.column(), r.index()),
    o = i(),
    l = s(),
    a = {
      currentType: 13,
      offset: l,
      startLoc: o,
      endLoc: o,
      lastType: 13,
      lastOffset: l,
      lastStartLoc: o,
      lastEndLoc: o,
      braceNest: 0,
      inLinked: !1,
      text: ""
    },
    c = () => a,
    {
      onError: f
    } = t;

  function u(m, p, E, ...N) {
    const G = c();
    if (p.column += E, p.offset += E, f) {
      const V = n ? Ii(G.startLoc, p) : null,
        A = Rs(m, V, {
          domain: Dp,
          args: N
        });
      f(A)
    }
  }

  function d(m, p, E) {
    m.endLoc = i(), m.currentType = p;
    const N = {
      type: p
    };
    return n && (N.loc = Ii(m.startLoc, m.endLoc)), E != null && (N.value = E), N
  }
  const h = m => d(m, 13);

  function b(m, p) {
    return m.currentChar() === p ? (m.next(), p) : (u(Ee.EXPECTED_TOKEN, i(), 0, p), "")
  }

  function y(m) {
    let p = "";
    for (; m.currentPeek() === xt || m.currentPeek() === tt;) p += m.currentPeek(), m.peek();
    return p
  }

  function D(m) {
    const p = y(m);
    return m.skipToPeek(), p
  }

  function v(m) {
    if (m === Bt) return !1;
    const p = m.charCodeAt(0);
    return p >= 97 && p <= 122 || p >= 65 && p <= 90 || p === 95
  }

  function O(m) {
    if (m === Bt) return !1;
    const p = m.charCodeAt(0);
    return p >= 48 && p <= 57
  }

  function R(m, p) {
    const {
      currentType: E
    } = p;
    if (E !== 2) return !1;
    y(m);
    const N = v(m.currentPeek());
    return m.resetPeek(), N
  }

  function S(m, p) {
    const {
      currentType: E
    } = p;
    if (E !== 2) return !1;
    y(m);
    const N = m.currentPeek() === "-" ? m.peek() : m.currentPeek(),
      G = O(N);
    return m.resetPeek(), G
  }

  function P(m, p) {
    const {
      currentType: E
    } = p;
    if (E !== 2) return !1;
    y(m);
    const N = m.currentPeek() === Ml;
    return m.resetPeek(), N
  }

  function x(m, p) {
    const {
      currentType: E
    } = p;
    if (E !== 7) return !1;
    y(m);
    const N = m.currentPeek() === ".";
    return m.resetPeek(), N
  }

  function w(m, p) {
    const {
      currentType: E
    } = p;
    if (E !== 8) return !1;
    y(m);
    const N = v(m.currentPeek());
    return m.resetPeek(), N
  }

  function W(m, p) {
    const {
      currentType: E
    } = p;
    if (!(E === 7 || E === 11)) return !1;
    y(m);
    const N = m.currentPeek() === ":";
    return m.resetPeek(), N
  }

  function H(m, p) {
    const {
      currentType: E
    } = p;
    if (E !== 9) return !1;
    const N = () => {
        const V = m.currentPeek();
        return V === "{" ? v(m.peek()) : V === "@" || V === "|" || V === ":" || V === "." || V === xt || !V ? !1 : V === tt ? (m.peek(), N()) : se(m, !1)
      },
      G = N();
    return m.resetPeek(), G
  }

  function Q(m) {
    y(m);
    const p = m.currentPeek() === "|";
    return m.resetPeek(), p
  }

  function se(m, p = !0) {
    const E = (G = !1, V = "") => {
        const A = m.currentPeek();
        return A === "{" || A === "@" || !A ? G : A === "|" ? !(V === xt || V === tt) : A === xt ? (m.peek(), E(!0, xt)) : A === tt ? (m.peek(), E(!0, tt)) : !0
      },
      N = E();
    return p && m.resetPeek(), N
  }

  function ne(m, p) {
    const E = m.currentChar();
    return E === Bt ? Bt : p(E) ? (m.next(), E) : null
  }

  function me(m) {
    const p = m.charCodeAt(0);
    return p >= 97 && p <= 122 || p >= 65 && p <= 90 || p >= 48 && p <= 57 || p === 95 || p === 36
  }

  function Ie(m) {
    return ne(m, me)
  }

  function Re(m) {
    const p = m.charCodeAt(0);
    return p >= 97 && p <= 122 || p >= 65 && p <= 90 || p >= 48 && p <= 57 || p === 95 || p === 36 || p === 45
  }

  function ae(m) {
    return ne(m, Re)
  }

  function J(m) {
    const p = m.charCodeAt(0);
    return p >= 48 && p <= 57
  }

  function de(m) {
    return ne(m, J)
  }

  function Ae(m) {
    const p = m.charCodeAt(0);
    return p >= 48 && p <= 57 || p >= 65 && p <= 70 || p >= 97 && p <= 102
  }

  function Ve(m) {
    return ne(m, Ae)
  }

  function je(m) {
    let p = "",
      E = "";
    for (; p = de(m);) E += p;
    return E
  }

  function xe(m) {
    let p = "";
    for (;;) {
      const E = m.currentChar();
      if (E === "{" || E === "}" || E === "@" || E === "|" || !E) break;
      if (E === xt || E === tt)
        if (se(m)) p += E, m.next();
        else {
          if (Q(m)) break;
          p += E, m.next()
        }
      else p += E, m.next()
    }
    return p
  }

  function vt(m) {
    D(m);
    let p = "",
      E = "";
    for (; p = ae(m);) E += p;
    const N = m.currentChar();
    if (N && N !== "}" && N !== Bt && N !== xt && N !== tt && N !== "　") {
      const G = q(m);
      return u(Ee.INVALID_TOKEN_IN_PLACEHOLDER, i(), 0, E + G), E + G
    }
    return m.currentChar() === Bt && u(Ee.UNTERMINATED_CLOSING_BRACE, i(), 0), E
  }

  function Ne(m) {
    D(m);
    let p = "";
    return m.currentChar() === "-" ? (m.next(), p += `-${je(m)}`) : p += je(m), m.currentChar() === Bt && u(Ee.UNTERMINATED_CLOSING_BRACE, i(), 0), p
  }

  function dt(m) {
    return m !== Ml && m !== tt
  }

  function K(m) {
    D(m), b(m, "'");
    let p = "",
      E = "";
    for (; p = ne(m, dt);) p === "\\" ? E += L(m) : E += p;
    const N = m.currentChar();
    return N === tt || N === Bt ? (u(Ee.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, i(), 0), N === tt && (m.next(), b(m, "'")), E) : (b(m, "'"), E)
  }

  function L(m) {
    const p = m.currentChar();
    switch (p) {
      case "\\":
      case "'":
        return m.next(), `\\${p}`;
      case "u":
        return B(m, p, 4);
      case "U":
        return B(m, p, 6);
      default:
        return u(Ee.UNKNOWN_ESCAPE_SEQUENCE, i(), 0, p), ""
    }
  }

  function B(m, p, E) {
    b(m, p);
    let N = "";
    for (let G = 0; G < E; G++) {
      const V = Ve(m);
      if (!V) {
        u(Ee.INVALID_UNICODE_ESCAPE_SEQUENCE, i(), 0, `\\${p}${N}${m.currentChar()}`);
        break
      }
      N += V
    }
    return `\\${p}${N}`
  }

  function U(m) {
    return m !== "{" && m !== "}" && m !== xt && m !== tt
  }

  function q(m) {
    D(m);
    let p = "",
      E = "";
    for (; p = ne(m, U);) E += p;
    return E
  }

  function oe(m) {
    let p = "",
      E = "";
    for (; p = Ie(m);) E += p;
    return E
  }

  function g(m) {
    const p = E => {
      const N = m.currentChar();
      return N === "{" || N === "@" || N === "|" || N === "(" || N === ")" || !N || N === xt ? E : (E += N, m.next(), p(E))
    };
    return p("")
  }

  function _(m) {
    D(m);
    const p = b(m, "|");
    return D(m), p
  }

  function I(m, p) {
    let E = null;
    switch (m.currentChar()) {
      case "{":
        return p.braceNest >= 1 && u(Ee.NOT_ALLOW_NEST_PLACEHOLDER, i(), 0), m.next(), E = d(p, 2, "{"), D(m), p.braceNest++, E;
      case "}":
        return p.braceNest > 0 && p.currentType === 2 && u(Ee.EMPTY_PLACEHOLDER, i(), 0), m.next(), E = d(p, 3, "}"), p.braceNest--, p.braceNest > 0 && D(m), p.inLinked && p.braceNest === 0 && (p.inLinked = !1), E;
      case "@":
        return p.braceNest > 0 && u(Ee.UNTERMINATED_CLOSING_BRACE, i(), 0), E = k(m, p) || h(p), p.braceNest = 0, E;
      default: {
        let G = !0,
          V = !0,
          A = !0;
        if (Q(m)) return p.braceNest > 0 && u(Ee.UNTERMINATED_CLOSING_BRACE, i(), 0), E = d(p, 1, _(m)), p.braceNest = 0, p.inLinked = !1, E;
        if (p.braceNest > 0 && (p.currentType === 4 || p.currentType === 5 || p.currentType === 6)) return u(Ee.UNTERMINATED_CLOSING_BRACE, i(), 0), p.braceNest = 0, j(m, p);
        if (G = R(m, p)) return E = d(p, 4, vt(m)), D(m), E;
        if (V = S(m, p)) return E = d(p, 5, Ne(m)), D(m), E;
        if (A = P(m, p)) return E = d(p, 6, K(m)), D(m), E;
        if (!G && !V && !A) return E = d(p, 12, q(m)), u(Ee.INVALID_TOKEN_IN_PLACEHOLDER, i(), 0, E.value), D(m), E;
        break
      }
    }
    return E
  }

  function k(m, p) {
    const {
      currentType: E
    } = p;
    let N = null;
    const G = m.currentChar();
    switch ((E === 7 || E === 8 || E === 11 || E === 9) && (G === tt || G === xt) && u(Ee.INVALID_LINKED_FORMAT, i(), 0), G) {
      case "@":
        return m.next(), N = d(p, 7, "@"), p.inLinked = !0, N;
      case ".":
        return D(m), m.next(), d(p, 8, ".");
      case ":":
        return D(m), m.next(), d(p, 9, ":");
      default:
        return Q(m) ? (N = d(p, 1, _(m)), p.braceNest = 0, p.inLinked = !1, N) : x(m, p) || W(m, p) ? (D(m), k(m, p)) : w(m, p) ? (D(m), d(p, 11, oe(m))) : H(m, p) ? (D(m), G === "{" ? I(m, p) || N : d(p, 10, g(m))) : (E === 7 && u(Ee.INVALID_LINKED_FORMAT, i(), 0), p.braceNest = 0, p.inLinked = !1, j(m, p))
    }
  }

  function j(m, p) {
    let E = {
      type: 13
    };
    if (p.braceNest > 0) return I(m, p) || h(p);
    if (p.inLinked) return k(m, p) || h(p);
    switch (m.currentChar()) {
      case "{":
        return I(m, p) || h(p);
      case "}":
        return u(Ee.UNBALANCED_CLOSING_BRACE, i(), 0), m.next(), d(p, 3, "}");
      case "@":
        return k(m, p) || h(p);
      default: {
        if (Q(m)) return E = d(p, 1, _(m)), p.braceNest = 0, p.inLinked = !1, E;
        if (se(m)) return d(p, 0, xe(m));
        break
      }
    }
    return E
  }

  function M() {
    const {
      currentType: m,
      offset: p,
      startLoc: E,
      endLoc: N
    } = a;
    return a.lastType = m, a.lastOffset = p, a.lastStartLoc = E, a.lastEndLoc = N, a.offset = s(), a.startLoc = i(), r.currentChar() === Bt ? d(a, 13) : j(r, a)
  }
  return {
    nextToken: M,
    currentOffset: s,
    currentPosition: i,
    context: c
  }
}
const xp = "parser",
  kp = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;

function Mp(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const r = parseInt(t || n, 16);
      return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "�"
    }
  }
}

function Vp(e = {}) {
  const t = e.location !== !1,
    {
      onError: n
    } = e;

  function r(v, O, R, S, ...P) {
    const x = v.currentPosition();
    if (x.offset += S, x.column += S, n) {
      const w = t ? Ii(R, x) : null,
        W = Rs(O, w, {
          domain: xp,
          args: P
        });
      n(W)
    }
  }

  function s(v, O, R) {
    const S = {
      type: v
    };
    return t && (S.start = O, S.end = O, S.loc = {
      start: R,
      end: R
    }), S
  }

  function i(v, O, R, S) {
    t && (v.end = O, v.loc && (v.loc.end = R))
  }

  function o(v, O) {
    const R = v.context(),
      S = s(3, R.offset, R.startLoc);
    return S.value = O, i(S, v.currentOffset(), v.currentPosition()), S
  }

  function l(v, O) {
    const R = v.context(),
      {
        lastOffset: S,
        lastStartLoc: P
      } = R,
      x = s(5, S, P);
    return x.index = parseInt(O, 10), v.nextToken(), i(x, v.currentOffset(), v.currentPosition()), x
  }

  function a(v, O) {
    const R = v.context(),
      {
        lastOffset: S,
        lastStartLoc: P
      } = R,
      x = s(4, S, P);
    return x.key = O, v.nextToken(), i(x, v.currentOffset(), v.currentPosition()), x
  }

  function c(v, O) {
    const R = v.context(),
      {
        lastOffset: S,
        lastStartLoc: P
      } = R,
      x = s(9, S, P);
    return x.value = O.replace(kp, Mp), v.nextToken(), i(x, v.currentOffset(), v.currentPosition()), x
  }

  function f(v) {
    const O = v.nextToken(),
      R = v.context(),
      {
        lastOffset: S,
        lastStartLoc: P
      } = R,
      x = s(8, S, P);
    return O.type !== 11 ? (r(v, Ee.UNEXPECTED_EMPTY_LINKED_MODIFIER, R.lastStartLoc, 0), x.value = "", i(x, S, P), {
      nextConsumeToken: O,
      node: x
    }) : (O.value == null && r(v, Ee.UNEXPECTED_LEXICAL_ANALYSIS, R.lastStartLoc, 0, kt(O)), x.value = O.value || "", i(x, v.currentOffset(), v.currentPosition()), {
      node: x
    })
  }

  function u(v, O) {
    const R = v.context(),
      S = s(7, R.offset, R.startLoc);
    return S.value = O, i(S, v.currentOffset(), v.currentPosition()), S
  }

  function d(v) {
    const O = v.context(),
      R = s(6, O.offset, O.startLoc);
    let S = v.nextToken();
    if (S.type === 8) {
      const P = f(v);
      R.modifier = P.node, S = P.nextConsumeToken || v.nextToken()
    }
    switch (S.type !== 9 && r(v, Ee.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, kt(S)), S = v.nextToken(), S.type === 2 && (S = v.nextToken()), S.type) {
      case 10:
        S.value == null && r(v, Ee.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, kt(S)), R.key = u(v, S.value || "");
        break;
      case 4:
        S.value == null && r(v, Ee.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, kt(S)), R.key = a(v, S.value || "");
        break;
      case 5:
        S.value == null && r(v, Ee.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, kt(S)), R.key = l(v, S.value || "");
        break;
      case 6:
        S.value == null && r(v, Ee.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, kt(S)), R.key = c(v, S.value || "");
        break;
      default: {
        r(v, Ee.UNEXPECTED_EMPTY_LINKED_KEY, O.lastStartLoc, 0);
        const P = v.context(),
          x = s(7, P.offset, P.startLoc);
        return x.value = "", i(x, P.offset, P.startLoc), R.key = x, i(R, P.offset, P.startLoc), {
          nextConsumeToken: S,
          node: R
        }
      }
    }
    return i(R, v.currentOffset(), v.currentPosition()), {
      node: R
    }
  }

  function h(v) {
    const O = v.context(),
      R = O.currentType === 1 ? v.currentOffset() : O.offset,
      S = O.currentType === 1 ? O.endLoc : O.startLoc,
      P = s(2, R, S);
    P.items = [];
    let x = null;
    do {
      const H = x || v.nextToken();
      switch (x = null, H.type) {
        case 0:
          H.value == null && r(v, Ee.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, kt(H)), P.items.push(o(v, H.value || ""));
          break;
        case 5:
          H.value == null && r(v, Ee.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, kt(H)), P.items.push(l(v, H.value || ""));
          break;
        case 4:
          H.value == null && r(v, Ee.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, kt(H)), P.items.push(a(v, H.value || ""));
          break;
        case 6:
          H.value == null && r(v, Ee.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, kt(H)), P.items.push(c(v, H.value || ""));
          break;
        case 7: {
          const Q = d(v);
          P.items.push(Q.node), x = Q.nextConsumeToken || null;
          break
        }
      }
    } while (O.currentType !== 13 && O.currentType !== 1);
    const w = O.currentType === 1 ? O.lastOffset : v.currentOffset(),
      W = O.currentType === 1 ? O.lastEndLoc : v.currentPosition();
    return i(P, w, W), P
  }

  function b(v, O, R, S) {
    const P = v.context();
    let x = S.items.length === 0;
    const w = s(1, O, R);
    w.cases = [], w.cases.push(S);
    do {
      const W = h(v);
      x || (x = W.items.length === 0), w.cases.push(W)
    } while (P.currentType !== 13);
    return x && r(v, Ee.MUST_HAVE_MESSAGES_IN_PLURAL, R, 0), i(w, v.currentOffset(), v.currentPosition()), w
  }

  function y(v) {
    const O = v.context(),
      {
        offset: R,
        startLoc: S
      } = O,
      P = h(v);
    return O.currentType === 13 ? P : b(v, R, S, P)
  }

  function D(v) {
    const O = Fp(v, Ke({}, e)),
      R = O.context(),
      S = s(0, R.offset, R.startLoc);
    return t && S.loc && (S.loc.source = v), S.body = y(O), e.onCacheKey && (S.cacheKey = e.onCacheKey(v)), R.currentType !== 13 && r(O, Ee.UNEXPECTED_LEXICAL_ANALYSIS, R.lastStartLoc, 0, v[R.offset] || ""), i(S, O.currentOffset(), O.currentPosition()), S
  }
  return {
    parse: D
  }
}

function kt(e) {
  if (e.type === 13) return "EOF";
  const t = (e.value || "")
    .replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t
}

function jp(e, t = {}) {
  const n = {
    ast: e,
    helpers: new Set
  };
  return {
    context: () => n,
    helper: i => (n.helpers.add(i), i)
  }
}

function Vl(e, t) {
  for (let n = 0; n < e.length; n++) Oo(e[n], t)
}

function Oo(e, t) {
  switch (e.type) {
    case 1:
      Vl(e.cases, t), t.helper("plural");
      break;
    case 2:
      Vl(e.items, t);
      break;
    case 6: {
      Oo(e.key, t), t.helper("linked"), t.helper("type");
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

function $p(e, t = {}) {
  const n = jp(e);
  n.helper("normalize"), e.body && Oo(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers)
}

function Up(e) {
  const t = e.body;
  return t.type === 2 ? jl(t) : t.cases.forEach(n => jl(n)), e
}

function jl(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value)
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const r = e.items[n];
      if (!(r.type === 3 || r.type === 9) || r.value == null) break;
      t.push(r.value)
    }
    if (t.length === e.items.length) {
      e.static = Ao(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value
      }
    }
  }
}

function xn(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      xn(t.body), t.b = t.body, delete t.body;
      break
    }
    case 1: {
      const t = e,
        n = t.cases;
      for (let r = 0; r < n.length; r++) xn(n[r]);
      t.c = n, delete t.cases;
      break
    }
    case 2: {
      const t = e,
        n = t.items;
      for (let r = 0; r < n.length; r++) xn(n[r]);
      t.i = n, delete t.items, t.static && (t.s = t.static, delete t.static);
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
      xn(t.key), t.k = t.key, delete t.key, t.modifier && (xn(t.modifier), t.m = t.modifier, delete t.modifier);
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

function Bp(e, t) {
  const {
    filename: n,
    breakLineCode: r,
    needIndent: s
  } = t, i = t.location !== !1, o = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: r,
    needIndent: s,
    indentLevel: 0
  };
  i && e.loc && (o.source = e.loc.source);
  const l = () => o;

  function a(y, D) {
    o.code += y
  }

  function c(y, D = !0) {
    const v = D ? r : "";
    a(s ? v + "  ".repeat(y) : v)
  }

  function f(y = !0) {
    const D = ++o.indentLevel;
    y && c(D)
  }

  function u(y = !0) {
    const D = --o.indentLevel;
    y && c(D)
  }

  function d() {
    c(o.indentLevel)
  }
  return {
    context: l,
    push: a,
    indent: f,
    deindent: u,
    newline: d,
    helper: y => `_${y}`,
    needIndent: () => o.needIndent
  }
}

function Hp(e, t) {
  const {
    helper: n
  } = e;
  e.push(`${n("linked")}(`), Jn(e, t.key), t.modifier ? (e.push(", "), Jn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")")
}

function Wp(e, t) {
  const {
    helper: n,
    needIndent: r
  } = e;
  e.push(`${n("normalize")}([`), e.indent(r());
  const s = t.items.length;
  for (let i = 0; i < s && (Jn(e, t.items[i]), i !== s - 1); i++) e.push(", ");
  e.deindent(r()), e.push("])")
}

function Gp(e, t) {
  const {
    helper: n,
    needIndent: r
  } = e;
  if (t.cases.length > 1) {
    e.push(`${n("plural")}([`), e.indent(r());
    const s = t.cases.length;
    for (let i = 0; i < s && (Jn(e, t.cases[i]), i !== s - 1); i++) e.push(", ");
    e.deindent(r()), e.push("])")
  }
}

function Kp(e, t) {
  t.body ? Jn(e, t.body) : e.push("null")
}

function Jn(e, t) {
  const {
    helper: n
  } = e;
  switch (t.type) {
    case 0:
      Kp(e, t);
      break;
    case 1:
      Gp(e, t);
      break;
    case 2:
      Wp(e, t);
      break;
    case 6:
      Hp(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break
  }
}
const Yp = (e, t = {}) => {
  const n = X(t.mode) ? t.mode : "normal",
    r = X(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const s = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`,
    i = t.needIndent ? t.needIndent : n !== "arrow",
    o = e.helpers || [],
    l = Bp(e, {
      filename: r,
      breakLineCode: s,
      needIndent: i
    });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(i), o.length > 0 && (l.push(`const { ${Ao(o.map(f=>`${f}: _${f}`),", ")} } = ctx`), l.newline()), l.push("return "), Jn(l, e), l.deindent(i), l.push("}"), delete e.helpers;
  const {
    code: a,
    map: c
  } = l.context();
  return {
    ast: e,
    code: a,
    map: c ? c.toJSON() : void 0
  }
};

function qp(e, t = {}) {
  const n = Ke({}, t),
    r = !!n.jit,
    s = !!n.minify,
    i = n.optimize == null ? !0 : n.optimize,
    l = Vp(n)
    .parse(e);
  return r ? (i && Up(l), s && xn(l), {
    ast: l,
    code: ""
  }) : ($p(l, n), Yp(l, n))
}

function Xp() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (An()
    .__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (An()
    .__INTLIFY_DROP_MESSAGE_COMPILER__ = !1)
}

function Vt(e) {
  return ye(e) && So(e) === 0 && (Nt(e, "b") || Nt(e, "body"))
}
const fu = ["b", "body"];

function Jp(e) {
  return mn(e, fu)
}
const du = ["c", "cases"];

function Zp(e) {
  return mn(e, du, [])
}
const hu = ["s", "static"];

function Qp(e) {
  return mn(e, hu)
}
const mu = ["i", "items"];

function zp(e) {
  return mn(e, mu, [])
}
const pu = ["t", "type"];

function So(e) {
  return mn(e, pu)
}
const gu = ["v", "value"];

function Br(e, t) {
  const n = mn(e, gu);
  if (n != null) return n;
  throw Rr(t)
}
const _u = ["m", "modifier"];

function eg(e) {
  return mn(e, _u)
}
const vu = ["k", "key"];

function tg(e) {
  const t = mn(e, vu);
  if (t) return t;
  throw Rr(6)
}

function mn(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    if (Nt(e, s) && e[s] != null) return e[s]
  }
  return n
}
const yu = [...fu, ...du, ...hu, ...mu, ...vu, ..._u, ...gu, ...pu];

function Rr(e) {
  return new Error(`unhandled node type: ${e}`)
}

function Qs(e) {
  return n => ng(n, e)
}

function ng(e, t) {
  const n = Jp(t);
  if (n == null) throw Rr(0);
  if (So(n) === 1) {
    const i = Zp(n);
    return e.plural(i.reduce((o, l) => [...o, $l(e, l)], []))
  } else return $l(e, n)
}

function $l(e, t) {
  const n = Qp(t);
  if (n != null) return e.type === "text" ? n : e.normalize([n]);
  {
    const r = zp(t)
      .reduce((s, i) => [...s, Ci(e, i)], []);
    return e.normalize(r)
  }
}

function Ci(e, t) {
  const n = So(t);
  switch (n) {
    case 3:
      return Br(t, n);
    case 9:
      return Br(t, n);
    case 4: {
      const r = t;
      if (Nt(r, "k") && r.k) return e.interpolate(e.named(r.k));
      if (Nt(r, "key") && r.key) return e.interpolate(e.named(r.key));
      throw Rr(n)
    }
    case 5: {
      const r = t;
      if (Nt(r, "i") && He(r.i)) return e.interpolate(e.list(r.i));
      if (Nt(r, "index") && He(r.index)) return e.interpolate(e.list(r.index));
      throw Rr(n)
    }
    case 6: {
      const r = t,
        s = eg(r),
        i = tg(r);
      return e.linked(Ci(e, i), s ? Ci(e, s) : void 0, e.type)
    }
    case 7:
      return Br(t, n);
    case 8:
      return Br(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`)
  }
}
const rg = e => e;
let Hr = Se();

function sg(e, t = {}) {
  let n = !1;
  const r = t.onError || Tp;
  return t.onError = s => {
    n = !0, r(s)
  }, {
    ...qp(e, t),
    detectError: n
  }
}

function ig(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && X(e)) {
    _e(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || rg)(e),
      s = Hr[r];
    if (s) return s;
    const {
      ast: i,
      detectError: o
    } = sg(e, {
      ...t,
      location: !1,
      jit: !0
    }), l = Qs(i);
    return o ? l : Hr[r] = l
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = Hr[n];
      return r || (Hr[n] = Qs(e))
    } else return Qs(e)
  }
}
let Nr = null;

function og(e) {
  Nr = e
}

function lg(e, t, n) {
  Nr && Nr.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  })
}
const ag = cg("function:translate");

function cg(e) {
  return t => Nr && Nr.emit(e, t)
}
const qt = {
    INVALID_ARGUMENT: Cp,
    INVALID_DATE_ARGUMENT: 18,
    INVALID_ISO_DATE_ARGUMENT: 19,
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
    NOT_SUPPORT_LOCALE_TYPE: 23
  },
  ug = 24;

function Xt(e) {
  return Rs(e, null, void 0)
}

function Io(e, t) {
  return t.locale != null ? Ul(t.locale) : Ul(e.locale)
}
let zs;

function Ul(e) {
  if (X(e)) return e;
  if (De(e)) {
    if (e.resolvedOnce && zs != null) return zs;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Op(t)) throw Xt(qt.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return zs = t
    } else throw Xt(qt.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)
  } else throw Xt(qt.NOT_SUPPORT_LOCALE_TYPE)
}

function fg(e, t, n) {
  return [...new Set([n, ...Me(t) ? t : ye(t) ? Object.keys(t) : X(t) ? [t] : [n]])]
}

function bu(e, t, n) {
  const r = X(n) ? n : Pr,
    s = e;
  s.__localeChainCache || (s.__localeChainCache = new Map);
  let i = s.__localeChainCache.get(r);
  if (!i) {
    i = [];
    let o = [n];
    for (; Me(o);) o = Bl(i, o, t);
    const l = Me(t) || !he(t) ? t : t.default ? t.default : null;
    o = X(l) ? [l] : l, Me(o) && Bl(i, o, !1), s.__localeChainCache.set(r, i)
  }
  return i
}

function Bl(e, t, n) {
  let r = !0;
  for (let s = 0; s < t.length && _e(r); s++) {
    const i = t[s];
    X(i) && (r = dg(e, t[s], n))
  }
  return r
}

function dg(e, t, n) {
  let r;
  const s = t.split("-");
  do {
    const i = s.join("-");
    r = hg(e, i, n), s.splice(-1, 1)
  } while (s.length && r === !0);
  return r
}

function hg(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (Me(n) || he(n)) && n[s] && (r = n[s])
  }
  return r
}
const pn = [];
pn[0] = {
  w: [0],
  i: [3, 0],
  "[": [4],
  o: [7]
};
pn[1] = {
  w: [1],
  ".": [2],
  "[": [4],
  o: [7]
};
pn[2] = {
  w: [2],
  i: [3, 0],
  0: [3, 0]
};
pn[3] = {
  i: [3, 0],
  0: [3, 0],
  w: [1, 1],
  ".": [2, 1],
  "[": [4, 1],
  o: [7, 1]
};
pn[4] = {
  "'": [5, 0],
  '"': [6, 0],
  "[": [4, 2],
  "]": [1, 3],
  o: 8,
  l: [4, 0]
};
pn[5] = {
  "'": [4, 0],
  o: 8,
  l: [5, 0]
};
pn[6] = {
  '"': [4, 0],
  o: 8,
  l: [6, 0]
};
const mg = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

function pg(e) {
  return mg.test(e)
}

function gg(e) {
  const t = e.charCodeAt(0),
    n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e
}

function _g(e) {
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

function vg(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : pg(t) ? gg(t) : "*" + t
}

function yg(e) {
  const t = [];
  let n = -1,
    r = 0,
    s = 0,
    i, o, l, a, c, f, u;
  const d = [];
  d[0] = () => {
    o === void 0 ? o = l : o += l
  }, d[1] = () => {
    o !== void 0 && (t.push(o), o = void 0)
  }, d[2] = () => {
    d[0](), s++
  }, d[3] = () => {
    if (s > 0) s--, r = 4, d[0]();
    else {
      if (s = 0, o === void 0 || (o = vg(o), o === !1)) return !1;
      d[1]()
    }
  };

  function h() {
    const b = e[n + 1];
    if (r === 5 && b === "'" || r === 6 && b === '"') return n++, l = "\\" + b, d[0](), !0
  }
  for (; r !== null;)
    if (n++, i = e[n], !(i === "\\" && h())) {
      if (a = _g(i), u = pn[r], c = u[a] || u.l || 8, c === 8 || (r = c[0], c[1] !== void 0 && (f = d[c[1]], f && (l = i, f() === !1)))) return;
      if (r === 7) return t
    }
}
const Hl = new Map;

function bg(e, t) {
  return ye(e) ? e[t] : null
}

function Eg(e, t) {
  if (!ye(e)) return null;
  let n = Hl.get(t);
  if (n || (n = yg(t), n && Hl.set(t, n)), !n) return null;
  const r = n.length;
  let s = e,
    i = 0;
  for (; i < r;) {
    const o = n[i];
    if (yu.includes(o) && Vt(s)) return null;
    const l = s[o];
    if (l === void 0 || De(s)) return null;
    s = l, i++
  }
  return s
}
const Ag = "11.1.12",
  Ns = -1,
  Pr = "en-US",
  Wl = "",
  Gl = e => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;

function Og() {
  return {
    upper: (e, t) => t === "text" && X(e) ? e.toUpperCase() : t === "vnode" && ye(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && X(e) ? e.toLowerCase() : t === "vnode" && ye(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && X(e) ? Gl(e) : t === "vnode" && ye(e) && "__v_isVNode" in e ? Gl(e.children) : e
  }
}
let Eu;

function Sg(e) {
  Eu = e
}
let Au;

function Ig(e) {
  Au = e
}
let Ou;

function Cg(e) {
  Ou = e
}
let Su = null;
const Tg = e => {
    Su = e
  },
  Rg = () => Su;
let Iu = null;
const Kl = e => {
    Iu = e
  },
  Ng = () => Iu;
let Yl = 0;

function Pg(e = {}) {
  const t = De(e.onWarn) ? e.onWarn : gp,
    n = X(e.version) ? e.version : Ag,
    r = X(e.locale) || De(e.locale) ? e.locale : Pr,
    s = De(r) ? Pr : r,
    i = Me(e.fallbackLocale) || he(e.fallbackLocale) || X(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s,
    o = he(e.messages) ? e.messages : ei(s),
    l = he(e.datetimeFormats) ? e.datetimeFormats : ei(s),
    a = he(e.numberFormats) ? e.numberFormats : ei(s),
    c = Ke(Se(), e.modifiers, Og()),
    f = e.pluralRules || Se(),
    u = De(e.missing) ? e.missing : null,
    d = _e(e.missingWarn) || Xn(e.missingWarn) ? e.missingWarn : !0,
    h = _e(e.fallbackWarn) || Xn(e.fallbackWarn) ? e.fallbackWarn : !0,
    b = !!e.fallbackFormat,
    y = !!e.unresolving,
    D = De(e.postTranslation) ? e.postTranslation : null,
    v = he(e.processor) ? e.processor : null,
    O = _e(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    R = !!e.escapeParameter,
    S = De(e.messageCompiler) ? e.messageCompiler : Eu,
    P = De(e.messageResolver) ? e.messageResolver : Au || bg,
    x = De(e.localeFallbacker) ? e.localeFallbacker : Ou || fg,
    w = ye(e.fallbackContext) ? e.fallbackContext : void 0,
    W = e,
    H = ye(W.__datetimeFormatters) ? W.__datetimeFormatters : new Map,
    Q = ye(W.__numberFormatters) ? W.__numberFormatters : new Map,
    se = ye(W.__meta) ? W.__meta : {};
  Yl++;
  const ne = {
    version: n,
    cid: Yl,
    locale: r,
    fallbackLocale: i,
    messages: o,
    modifiers: c,
    pluralRules: f,
    missing: u,
    missingWarn: d,
    fallbackWarn: h,
    fallbackFormat: b,
    unresolving: y,
    postTranslation: D,
    processor: v,
    warnHtmlMessage: O,
    escapeParameter: R,
    messageCompiler: S,
    messageResolver: P,
    localeFallbacker: x,
    fallbackContext: w,
    onWarn: t,
    __meta: se
  };
  return ne.datetimeFormats = l, ne.numberFormats = a, ne.__datetimeFormatters = H, ne.__numberFormatters = Q, __INTLIFY_PROD_DEVTOOLS__ && lg(ne, n, se), ne
}
const ei = e => ({
  [e]: Se()
});

function Co(e, t, n, r, s) {
  const {
    missing: i,
    onWarn: o
  } = e;
  if (i !== null) {
    const l = i(e, n, t, s);
    return X(l) ? l : t
  } else return t
}

function sr(e, t, n) {
  const r = e;
  r.__localeChainCache = new Map, e.localeFallbacker(e, n, t)
}

function Lg(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0]
}

function wg(e, t) {
  const n = t.indexOf(e);
  if (n === -1) return !1;
  for (let r = n + 1; r < t.length; r++)
    if (Lg(e, t[r])) return !0;
  return !1
}

function ql(e, ...t) {
  const {
    datetimeFormats: n,
    unresolving: r,
    fallbackLocale: s,
    onWarn: i,
    localeFallbacker: o
  } = e, {
    __datetimeFormatters: l
  } = e, [a, c, f, u] = Ti(...t), d = _e(f.missingWarn) ? f.missingWarn : e.missingWarn;
  _e(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
  const h = !!f.part,
    b = Io(e, f),
    y = o(e, s, b);
  if (!X(a) || a === "") return new Intl.DateTimeFormat(b, u)
    .format(c);
  let D = {},
    v, O = null;
  const R = "datetime format";
  for (let x = 0; x < y.length && (v = y[x], D = n[v] || {}, O = D[a], !he(O)); x++) Co(e, a, v, d, R);
  if (!he(O) || !X(v)) return r ? Ns : a;
  let S = `${v}__${a}`;
  Ts(u) || (S = `${S}__${JSON.stringify(u)}`);
  let P = l.get(S);
  return P || (P = new Intl.DateTimeFormat(v, Ke({}, O, u)), l.set(S, P)), h ? P.formatToParts(c) : P.format(c)
}
const Cu = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];

function Ti(...e) {
  const [t, n, r, s] = e, i = Se();
  let o = Se(),
    l;
  if (X(t)) {
    const a = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!a) throw Xt(qt.INVALID_ISO_DATE_ARGUMENT);
    const c = a[3] ? a[3].trim()
      .startsWith("T") ? `${a[1].trim()}${a[3].trim()}` : `${a[1].trim()}T${a[3].trim()}` : a[1].trim();
    l = new Date(c);
    try {
      l.toISOString()
    } catch {
      throw Xt(qt.INVALID_ISO_DATE_ARGUMENT)
    }
  } else if (yp(t)) {
    if (isNaN(t.getTime())) throw Xt(qt.INVALID_DATE_ARGUMENT);
    l = t
  } else if (He(t)) l = t;
  else throw Xt(qt.INVALID_ARGUMENT);
  return X(n) ? i.key = n : he(n) && Object.keys(n)
    .forEach(a => {
      Cu.includes(a) ? o[a] = n[a] : i[a] = n[a]
    }), X(r) ? i.locale = r : he(r) && (o = r), he(s) && (o = s), [i.key || "", l, i, o]
}

function Xl(e, t, n) {
  const r = e;
  for (const s in n) {
    const i = `${t}__${s}`;
    r.__datetimeFormatters.has(i) && r.__datetimeFormatters.delete(i)
  }
}

function Jl(e, ...t) {
  const {
    numberFormats: n,
    unresolving: r,
    fallbackLocale: s,
    onWarn: i,
    localeFallbacker: o
  } = e, {
    __numberFormatters: l
  } = e, [a, c, f, u] = Ri(...t), d = _e(f.missingWarn) ? f.missingWarn : e.missingWarn;
  _e(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
  const h = !!f.part,
    b = Io(e, f),
    y = o(e, s, b);
  if (!X(a) || a === "") return new Intl.NumberFormat(b, u)
    .format(c);
  let D = {},
    v, O = null;
  const R = "number format";
  for (let x = 0; x < y.length && (v = y[x], D = n[v] || {}, O = D[a], !he(O)); x++) Co(e, a, v, d, R);
  if (!he(O) || !X(v)) return r ? Ns : a;
  let S = `${v}__${a}`;
  Ts(u) || (S = `${S}__${JSON.stringify(u)}`);
  let P = l.get(S);
  return P || (P = new Intl.NumberFormat(v, Ke({}, O, u)), l.set(S, P)), h ? P.formatToParts(c) : P.format(c)
}
const Tu = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];

function Ri(...e) {
  const [t, n, r, s] = e, i = Se();
  let o = Se();
  if (!He(t)) throw Xt(qt.INVALID_ARGUMENT);
  const l = t;
  return X(n) ? i.key = n : he(n) && Object.keys(n)
    .forEach(a => {
      Tu.includes(a) ? o[a] = n[a] : i[a] = n[a]
    }), X(r) ? i.locale = r : he(r) && (o = r), he(s) && (o = s), [i.key || "", l, i, o]
}

function Zl(e, t, n) {
  const r = e;
  for (const s in n) {
    const i = `${t}__${s}`;
    r.__numberFormatters.has(i) && r.__numberFormatters.delete(i)
  }
}
const Dg = e => e,
  Fg = e => "",
  xg = "text",
  kg = e => e.length === 0 ? "" : Ao(e),
  Mg = Sp;

function Ql(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
}

function Vg(e) {
  const t = He(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (He(e.named.count) || He(e.named.n)) ? He(e.named.count) ? e.named.count : He(e.named.n) ? e.named.n : t : t
}

function jg(e, t) {
  t.count || (t.count = e), t.n || (t.n = e)
}

function $g(e = {}) {
  const t = e.locale,
    n = Vg(e),
    r = ye(e.pluralRules) && X(t) && De(e.pluralRules[t]) ? e.pluralRules[t] : Ql,
    s = ye(e.pluralRules) && X(t) && De(e.pluralRules[t]) ? Ql : void 0,
    i = v => v[r(n, v.length, s)],
    o = e.list || [],
    l = v => o[v],
    a = e.named || Se();
  He(e.pluralIndex) && jg(n, a);
  const c = v => a[v];

  function f(v, O) {
    const R = De(e.messages) ? e.messages(v, !!O) : ye(e.messages) ? e.messages[v] : !1;
    return R || (e.parent ? e.parent.message(v) : Fg)
  }
  const u = v => e.modifiers ? e.modifiers[v] : Dg,
    d = he(e.processor) && De(e.processor.normalize) ? e.processor.normalize : kg,
    h = he(e.processor) && De(e.processor.interpolate) ? e.processor.interpolate : Mg,
    b = he(e.processor) && X(e.processor.type) ? e.processor.type : xg,
    D = {
      list: l,
      named: c,
      plural: i,
      linked: (v, ...O) => {
        const [R, S] = O;
        let P = "text",
          x = "";
        O.length === 1 ? ye(R) ? (x = R.modifier || x, P = R.type || P) : X(R) && (x = R || x) : O.length === 2 && (X(R) && (x = R || x), X(S) && (P = S || P));
        const w = f(v, !0)(D),
          W = P === "vnode" && Me(w) && x ? w[0] : w;
        return x ? u(x)(W, P) : W
      },
      message: f,
      type: b,
      interpolate: h,
      normalize: d,
      values: Ke(Se(), o, a)
    };
  return D
}
const zl = () => "",
  Ot = e => De(e);

function ea(e, ...t) {
  const {
    fallbackFormat: n,
    postTranslation: r,
    unresolving: s,
    messageCompiler: i,
    fallbackLocale: o,
    messages: l
  } = e, [a, c] = Ni(...t), f = _e(c.missingWarn) ? c.missingWarn : e.missingWarn, u = _e(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, d = _e(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, h = !!c.resolvedMessage, b = X(c.default) || _e(c.default) ? _e(c.default) ? i ? a : () => a : c.default : n ? i ? a : () => a : null, y = n || b != null && (X(b) || De(b)), D = Io(e, c);
  d && Ug(c);
  let [v, O, R] = h ? [a, D, l[D] || Se()] : Ru(e, a, D, o, u, f), S = v, P = a;
  if (!h && !(X(S) || Vt(S) || Ot(S)) && y && (S = b, P = S), !h && (!(X(S) || Vt(S) || Ot(S)) || !X(O))) return s ? Ns : a;
  let x = !1;
  const w = () => {
      x = !0
    },
    W = Ot(S) ? S : Nu(e, a, O, S, P, w);
  if (x) return S;
  const H = Wg(e, O, R, c),
    Q = $g(H),
    se = Bg(e, W, Q);
  let ne = r ? r(se, a) : se;
  if (d && X(ne) && (ne = Ep(ne)), __INTLIFY_PROD_DEVTOOLS__) {
    const me = {
      timestamp: Date.now(),
      key: X(a) ? a : Ot(S) ? S.key : "",
      locale: O || (Ot(S) ? S.locale : ""),
      format: X(S) ? S : Ot(S) ? S.source : "",
      message: ne
    };
    me.meta = Ke({}, e.__meta, Rg() || {}), ag(me)
  }
  return ne
}

function Ug(e) {
  Me(e.list) ? e.list = e.list.map(t => X(t) ? xl(t) : t) : ye(e.named) && Object.keys(e.named)
    .forEach(t => {
      X(e.named[t]) && (e.named[t] = xl(e.named[t]))
    })
}

function Ru(e, t, n, r, s, i) {
  const {
    messages: o,
    onWarn: l,
    messageResolver: a,
    localeFallbacker: c
  } = e, f = c(e, r, n);
  let u = Se(),
    d, h = null;
  const b = "translate";
  for (let y = 0; y < f.length && (d = f[y], u = o[d] || Se(), (h = a(u, t)) === null && (h = u[t]), !(X(h) || Vt(h) || Ot(h))); y++)
    if (!wg(d, f)) {
      const D = Co(e, t, d, i, b);
      D !== t && (h = D)
    } return [h, d, u]
}

function Nu(e, t, n, r, s, i) {
  const {
    messageCompiler: o,
    warnHtmlMessage: l
  } = e;
  if (Ot(r)) {
    const c = r;
    return c.locale = c.locale || n, c.key = c.key || t, c
  }
  if (o == null) {
    const c = () => r;
    return c.locale = n, c.key = t, c
  }
  const a = o(r, Hg(e, n, s, r, l, i));
  return a.locale = n, a.key = t, a.source = r, a
}

function Bg(e, t, n) {
  return t(n)
}

function Ni(...e) {
  const [t, n, r] = e, s = Se();
  if (!X(t) && !He(t) && !Ot(t) && !Vt(t)) throw Xt(qt.INVALID_ARGUMENT);
  const i = He(t) ? String(t) : (Ot(t), t);
  return He(n) ? s.plural = n : X(n) ? s.default = n : he(n) && !Ts(n) ? s.named = n : Me(n) && (s.list = n), He(r) ? s.plural = r : X(r) ? s.default = r : he(r) && Ke(s, r), [i, s]
}

function Hg(e, t, n, r, s, i) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: o => {
      throw i && i(o), o
    },
    onCacheKey: o => _p(t, n, o)
  }
}

function Wg(e, t, n, r) {
  const {
    modifiers: s,
    pluralRules: i,
    messageResolver: o,
    fallbackLocale: l,
    fallbackWarn: a,
    missingWarn: c,
    fallbackContext: f
  } = e, d = {
    locale: t,
    modifiers: s,
    pluralRules: i,
    messages: (h, b) => {
      let y = o(n, h);
      if (y == null && (f || b)) {
        const [, , D] = Ru(f || e, h, t, l, a, c);
        y = o(D, h)
      }
      if (X(y) || Vt(y)) {
        let D = !1;
        const O = Nu(e, h, t, y, h, () => {
          D = !0
        });
        return D ? zl : O
      } else return Ot(y) ? y : zl
    }
  };
  return e.processor && (d.processor = e.processor), r.list && (d.list = r.list), r.named && (d.named = r.named), He(r.plural) && (d.pluralIndex = r.plural), d
}
Xp();
const Gg = "11.1.12";

function Kg() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (An()
    .__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (An()
    .__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (An()
    .__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (An()
    .__INTLIFY_PROD_DEVTOOLS__ = !1)
}
const _t = {
  UNEXPECTED_RETURN_TYPE: ug,
  INVALID_ARGUMENT: 25,
  MUST_BE_CALL_SETUP_TOP: 26,
  NOT_INSTALLED: 27,
  REQUIRED_VALUE: 28,
  INVALID_VALUE: 29,
  NOT_INSTALLED_WITH_PROVIDE: 31,
  UNEXPECTED_ERROR: 32
};

function Et(e, ...t) {
  return Rs(e, null, void 0)
}
const Pi = hn("__translateVNode"),
  Li = hn("__datetimeParts"),
  wi = hn("__numberParts"),
  Pu = hn("__setPluralRules"),
  Lu = hn("__injectWithOption"),
  Di = hn("__dispose");

function Lr(e) {
  if (!ye(e) || Vt(e)) return e;
  for (const t in e)
    if (Nt(e, t))
      if (!t.includes(".")) ye(e[t]) && Lr(e[t]);
      else {
        const n = t.split("."),
          r = n.length - 1;
        let s = e,
          i = !1;
        for (let o = 0; o < r; o++) {
          if (n[o] === "__proto__") throw new Error(`unsafe key: ${n[o]}`);
          if (n[o] in s || (s[n[o]] = Se()), !ye(s[n[o]])) {
            i = !0;
            break
          }
          s = s[n[o]]
        }
        if (i || (Vt(s) ? yu.includes(n[r]) || delete e[t] : (s[n[r]] = e[t], delete e[t])), !Vt(s)) {
          const o = s[n[r]];
          ye(o) && Lr(o)
        }
      } return e
}

function To(e, t) {
  const {
    messages: n,
    __i18n: r,
    messageResolver: s,
    flatJson: i
  } = t, o = he(n) ? n : Me(r) ? Se() : {
    [e]: Se()
  };
  if (Me(r) && r.forEach(l => {
      if ("locale" in l && "resource" in l) {
        const {
          locale: a,
          resource: c
        } = l;
        a ? (o[a] = o[a] || Se(), zr(c, o[a])) : zr(c, o)
      } else X(l) && zr(JSON.parse(l), o)
    }), s == null && i)
    for (const l in o) Nt(o, l) && Lr(o[l]);
  return o
}

function wu(e) {
  return e.type
}

function Du(e, t, n) {
  let r = ye(t.messages) ? t.messages : Se();
  "__i18nGlobal" in n && (r = To(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const s = Object.keys(r);
  s.length && s.forEach(i => {
    e.mergeLocaleMessage(i, r[i])
  });
  {
    if (ye(t.datetimeFormats)) {
      const i = Object.keys(t.datetimeFormats);
      i.length && i.forEach(o => {
        e.mergeDateTimeFormat(o, t.datetimeFormats[o])
      })
    }
    if (ye(t.numberFormats)) {
      const i = Object.keys(t.numberFormats);
      i.length && i.forEach(o => {
        e.mergeNumberFormat(o, t.numberFormats[o])
      })
    }
  }
}

function ta(e) {
  return Ue(xr, null, e, 0)
}
const na = "__INTLIFY_META__",
  ra = () => [],
  Yg = () => !1;
let sa = 0;

function ia(e) {
  return (t, n, r, s) => e(n, r, ft() || void 0, s)
}
const qg = () => {
  const e = ft();
  let t = null;
  return e && (t = wu(e)[na]) ? {
    [na]: t
  } : null
};

function Ro(e = {}) {
  const {
    __root: t,
    __injectWithOption: n
  } = e, r = t === void 0, s = e.flatJson, i = us ? Ge : gs;
  let o = _e(e.inheritLocale) ? e.inheritLocale : !0;
  const l = i(t && o ? t.locale.value : X(e.locale) ? e.locale : Pr),
    a = i(t && o ? t.fallbackLocale.value : X(e.fallbackLocale) || Me(e.fallbackLocale) || he(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l.value),
    c = i(To(l.value, e)),
    f = i(he(e.datetimeFormats) ? e.datetimeFormats : {
      [l.value]: {}
    }),
    u = i(he(e.numberFormats) ? e.numberFormats : {
      [l.value]: {}
    });
  let d = t ? t.missingWarn : _e(e.missingWarn) || Xn(e.missingWarn) ? e.missingWarn : !0,
    h = t ? t.fallbackWarn : _e(e.fallbackWarn) || Xn(e.fallbackWarn) ? e.fallbackWarn : !0,
    b = t ? t.fallbackRoot : _e(e.fallbackRoot) ? e.fallbackRoot : !0,
    y = !!e.fallbackFormat,
    D = De(e.missing) ? e.missing : null,
    v = De(e.missing) ? ia(e.missing) : null,
    O = De(e.postTranslation) ? e.postTranslation : null,
    R = t ? t.warnHtmlMessage : _e(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    S = !!e.escapeParameter;
  const P = t ? t.modifiers : he(e.modifiers) ? e.modifiers : {};
  let x = e.pluralRules || t && t.pluralRules,
    w;
  w = (() => {
    r && Kl(null);
    const A = {
      version: Gg,
      locale: l.value,
      fallbackLocale: a.value,
      messages: c.value,
      modifiers: P,
      pluralRules: x,
      missing: v === null ? void 0 : v,
      missingWarn: d,
      fallbackWarn: h,
      fallbackFormat: y,
      unresolving: !0,
      postTranslation: O === null ? void 0 : O,
      warnHtmlMessage: R,
      escapeParameter: S,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: {
        framework: "vue"
      }
    };
    A.datetimeFormats = f.value, A.numberFormats = u.value, A.__datetimeFormatters = he(w) ? w.__datetimeFormatters : void 0, A.__numberFormatters = he(w) ? w.__numberFormatters : void 0;
    const F = Pg(A);
    return r && Kl(F), F
  })(), sr(w, l.value, a.value);

  function H() {
    return [l.value, a.value, c.value, f.value, u.value]
  }
  const Q = le({
      get: () => l.value,
      set: A => {
        w.locale = A, l.value = A
      }
    }),
    se = le({
      get: () => a.value,
      set: A => {
        w.fallbackLocale = A, a.value = A, sr(w, l.value, A)
      }
    }),
    ne = le(() => c.value),
    me = le(() => f.value),
    Ie = le(() => u.value);

  function Re() {
    return De(O) ? O : null
  }

  function ae(A) {
    O = A, w.postTranslation = A
  }

  function J() {
    return D
  }

  function de(A) {
    A !== null && (v = ia(A)), D = A, w.missing = v
  }
  const Ae = (A, F, Z, ie, fe, $e) => {
    H();
    let Fe;
    try {
      __INTLIFY_PROD_DEVTOOLS__,
      r || (w.fallbackContext = t ? Ng() : void 0),
      Fe = A(w)
    }
    finally {
      __INTLIFY_PROD_DEVTOOLS__,
      r || (w.fallbackContext = void 0)
    }
    if (Z !== "translate exists" && He(Fe) && Fe === Ns || Z === "translate exists" && !Fe) {
      const [T, C] = F();
      return t && b ? ie(t) : fe(T)
    } else {
      if ($e(Fe)) return Fe;
      throw Et(_t.UNEXPECTED_RETURN_TYPE)
    }
  };

  function Ve(...A) {
    return Ae(F => Reflect.apply(ea, null, [F, ...A]), () => Ni(...A), "translate", F => Reflect.apply(F.t, F, [...A]), F => F, F => X(F))
  }

  function je(...A) {
    const [F, Z, ie] = A;
    if (ie && !ye(ie)) throw Et(_t.INVALID_ARGUMENT);
    return Ve(F, Z, Ke({
      resolvedMessage: !0
    }, ie || {}))
  }

  function xe(...A) {
    return Ae(F => Reflect.apply(ql, null, [F, ...A]), () => Ti(...A), "datetime format", F => Reflect.apply(F.d, F, [...A]), () => Wl, F => X(F) || Me(F))
  }

  function vt(...A) {
    return Ae(F => Reflect.apply(Jl, null, [F, ...A]), () => Ri(...A), "number format", F => Reflect.apply(F.n, F, [...A]), () => Wl, F => X(F) || Me(F))
  }

  function Ne(A) {
    return A.map(F => X(F) || He(F) || _e(F) ? ta(String(F)) : F)
  }
  const K = {
    normalize: Ne,
    interpolate: A => A,
    type: "vnode"
  };

  function L(...A) {
    return Ae(F => {
      let Z;
      const ie = F;
      try {
        ie.processor = K, Z = Reflect.apply(ea, null, [ie, ...A])
      } finally {
        ie.processor = null
      }
      return Z
    }, () => Ni(...A), "translate", F => F[Pi](...A), F => [ta(F)], F => Me(F))
  }

  function B(...A) {
    return Ae(F => Reflect.apply(Jl, null, [F, ...A]), () => Ri(...A), "number format", F => F[wi](...A), ra, F => X(F) || Me(F))
  }

  function U(...A) {
    return Ae(F => Reflect.apply(ql, null, [F, ...A]), () => Ti(...A), "datetime format", F => F[Li](...A), ra, F => X(F) || Me(F))
  }

  function q(A) {
    x = A, w.pluralRules = x
  }

  function oe(A, F) {
    return Ae(() => {
      if (!A) return !1;
      const Z = X(F) ? F : l.value,
        ie = I(Z),
        fe = w.messageResolver(ie, A);
      return Vt(fe) || Ot(fe) || X(fe)
    }, () => [A], "translate exists", Z => Reflect.apply(Z.te, Z, [A, F]), Yg, Z => _e(Z))
  }

  function g(A) {
    let F = null;
    const Z = bu(w, a.value, l.value);
    for (let ie = 0; ie < Z.length; ie++) {
      const fe = c.value[Z[ie]] || {},
        $e = w.messageResolver(fe, A);
      if ($e != null) {
        F = $e;
        break
      }
    }
    return F
  }

  function _(A) {
    const F = g(A);
    return F ?? (t ? t.tm(A) || {} : {})
  }

  function I(A) {
    return c.value[A] || {}
  }

  function k(A, F) {
    if (s) {
      const Z = {
        [A]: F
      };
      for (const ie in Z) Nt(Z, ie) && Lr(Z[ie]);
      F = Z[A]
    }
    c.value[A] = F, w.messages = c.value
  }

  function j(A, F) {
    c.value[A] = c.value[A] || {};
    const Z = {
      [A]: F
    };
    if (s)
      for (const ie in Z) Nt(Z, ie) && Lr(Z[ie]);
    F = Z[A], zr(F, c.value[A]), w.messages = c.value
  }

  function M(A) {
    return f.value[A] || {}
  }

  function m(A, F) {
    f.value[A] = F, w.datetimeFormats = f.value, Xl(w, A, F)
  }

  function p(A, F) {
    f.value[A] = Ke(f.value[A] || {}, F), w.datetimeFormats = f.value, Xl(w, A, F)
  }

  function E(A) {
    return u.value[A] || {}
  }

  function N(A, F) {
    u.value[A] = F, w.numberFormats = u.value, Zl(w, A, F)
  }

  function G(A, F) {
    u.value[A] = Ke(u.value[A] || {}, F), w.numberFormats = u.value, Zl(w, A, F)
  }
  sa++, t && us && (ct(t.locale, A => {
    o && (l.value = A, w.locale = A, sr(w, l.value, a.value))
  }), ct(t.fallbackLocale, A => {
    o && (a.value = A, w.fallbackLocale = A, sr(w, l.value, a.value))
  }));
  const V = {
    id: sa,
    locale: Q,
    fallbackLocale: se,
    get inheritLocale() {
      return o
    },
    set inheritLocale(A) {
      o = A, A && t && (l.value = t.locale.value, a.value = t.fallbackLocale.value, sr(w, l.value, a.value))
    },
    get availableLocales() {
      return Object.keys(c.value)
        .sort()
    },
    messages: ne,
    get modifiers() {
      return P
    },
    get pluralRules() {
      return x || {}
    },
    get isGlobal() {
      return r
    },
    get missingWarn() {
      return d
    },
    set missingWarn(A) {
      d = A, w.missingWarn = d
    },
    get fallbackWarn() {
      return h
    },
    set fallbackWarn(A) {
      h = A, w.fallbackWarn = h
    },
    get fallbackRoot() {
      return b
    },
    set fallbackRoot(A) {
      b = A
    },
    get fallbackFormat() {
      return y
    },
    set fallbackFormat(A) {
      y = A, w.fallbackFormat = y
    },
    get warnHtmlMessage() {
      return R
    },
    set warnHtmlMessage(A) {
      R = A, w.warnHtmlMessage = A
    },
    get escapeParameter() {
      return S
    },
    set escapeParameter(A) {
      S = A, w.escapeParameter = A
    },
    t: Ve,
    getLocaleMessage: I,
    setLocaleMessage: k,
    mergeLocaleMessage: j,
    getPostTranslationHandler: Re,
    setPostTranslationHandler: ae,
    getMissingHandler: J,
    setMissingHandler: de,
    [Pu]: q
  };
  return V.datetimeFormats = me, V.numberFormats = Ie, V.rt = je, V.te = oe, V.tm = _, V.d = xe, V.n = vt, V.getDateTimeFormat = M, V.setDateTimeFormat = m, V.mergeDateTimeFormat = p, V.getNumberFormat = E, V.setNumberFormat = N, V.mergeNumberFormat = G, V[Lu] = n, V[Pi] = L, V[Li] = U, V[wi] = B, V
}

function Xg(e) {
  const t = X(e.locale) ? e.locale : Pr,
    n = X(e.fallbackLocale) || Me(e.fallbackLocale) || he(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t,
    r = De(e.missing) ? e.missing : void 0,
    s = _e(e.silentTranslationWarn) || Xn(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0,
    i = _e(e.silentFallbackWarn) || Xn(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0,
    o = _e(e.fallbackRoot) ? e.fallbackRoot : !0,
    l = !!e.formatFallbackMessages,
    a = he(e.modifiers) ? e.modifiers : {},
    c = e.pluralizationRules,
    f = De(e.postTranslation) ? e.postTranslation : void 0,
    u = X(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0,
    d = !!e.escapeParameterHtml,
    h = _e(e.sync) ? e.sync : !0;
  let b = e.messages;
  if (he(e.sharedMessages)) {
    const P = e.sharedMessages;
    b = Object.keys(P)
      .reduce((w, W) => {
        const H = w[W] || (w[W] = {});
        return Ke(H, P[W]), w
      }, b || {})
  }
  const {
    __i18n: y,
    __root: D,
    __injectWithOption: v
  } = e, O = e.datetimeFormats, R = e.numberFormats, S = e.flatJson;
  return {
    locale: t,
    fallbackLocale: n,
    messages: b,
    flatJson: S,
    datetimeFormats: O,
    numberFormats: R,
    missing: r,
    missingWarn: s,
    fallbackWarn: i,
    fallbackRoot: o,
    fallbackFormat: l,
    modifiers: a,
    pluralRules: c,
    postTranslation: f,
    warnHtmlMessage: u,
    escapeParameter: d,
    messageResolver: e.messageResolver,
    inheritLocale: h,
    __i18n: y,
    __root: D,
    __injectWithOption: v
  }
}

function Fi(e = {}) {
  const t = Ro(Xg(e)),
    {
      __extender: n
    } = e,
    r = {
      id: t.id,
      get locale() {
        return t.locale.value
      },
      set locale(s) {
        t.locale.value = s
      },
      get fallbackLocale() {
        return t.fallbackLocale.value
      },
      set fallbackLocale(s) {
        t.fallbackLocale.value = s
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
      set missing(s) {
        t.setMissingHandler(s)
      },
      get silentTranslationWarn() {
        return _e(t.missingWarn) ? !t.missingWarn : t.missingWarn
      },
      set silentTranslationWarn(s) {
        t.missingWarn = _e(s) ? !s : s
      },
      get silentFallbackWarn() {
        return _e(t.fallbackWarn) ? !t.fallbackWarn : t.fallbackWarn
      },
      set silentFallbackWarn(s) {
        t.fallbackWarn = _e(s) ? !s : s
      },
      get modifiers() {
        return t.modifiers
      },
      get formatFallbackMessages() {
        return t.fallbackFormat
      },
      set formatFallbackMessages(s) {
        t.fallbackFormat = s
      },
      get postTranslation() {
        return t.getPostTranslationHandler()
      },
      set postTranslation(s) {
        t.setPostTranslationHandler(s)
      },
      get sync() {
        return t.inheritLocale
      },
      set sync(s) {
        t.inheritLocale = s
      },
      get warnHtmlInMessage() {
        return t.warnHtmlMessage ? "warn" : "off"
      },
      set warnHtmlInMessage(s) {
        t.warnHtmlMessage = s !== "off"
      },
      get escapeParameterHtml() {
        return t.escapeParameter
      },
      set escapeParameterHtml(s) {
        t.escapeParameter = s
      },
      get pluralizationRules() {
        return t.pluralRules || {}
      },
      __composer: t,
      t(...s) {
        return Reflect.apply(t.t, t, [...s])
      },
      rt(...s) {
        return Reflect.apply(t.rt, t, [...s])
      },
      te(s, i) {
        return t.te(s, i)
      },
      tm(s) {
        return t.tm(s)
      },
      getLocaleMessage(s) {
        return t.getLocaleMessage(s)
      },
      setLocaleMessage(s, i) {
        t.setLocaleMessage(s, i)
      },
      mergeLocaleMessage(s, i) {
        t.mergeLocaleMessage(s, i)
      },
      d(...s) {
        return Reflect.apply(t.d, t, [...s])
      },
      getDateTimeFormat(s) {
        return t.getDateTimeFormat(s)
      },
      setDateTimeFormat(s, i) {
        t.setDateTimeFormat(s, i)
      },
      mergeDateTimeFormat(s, i) {
        t.mergeDateTimeFormat(s, i)
      },
      n(...s) {
        return Reflect.apply(t.n, t, [...s])
      },
      getNumberFormat(s) {
        return t.getNumberFormat(s)
      },
      setNumberFormat(s, i) {
        t.setNumberFormat(s, i)
      },
      mergeNumberFormat(s, i) {
        t.mergeNumberFormat(s, i)
      }
    };
  return r.__extender = n, r
}

function Jg(e, t, n) {
  return {
    beforeCreate() {
      const r = ft();
      if (!r) throw Et(_t.UNEXPECTED_ERROR);
      const s = this.$options;
      if (s.i18n) {
        const i = s.i18n;
        if (s.__i18n && (i.__i18n = s.__i18n), i.__root = t, this === this.$root) this.$i18n = oa(e, i);
        else {
          i.__injectWithOption = !0, i.__extender = n.__vueI18nExtend, this.$i18n = Fi(i);
          const o = this.$i18n;
          o.__extender && (o.__disposer = o.__extender(this.$i18n))
        }
      } else if (s.__i18n)
        if (this === this.$root) this.$i18n = oa(e, s);
        else {
          this.$i18n = Fi({
            __i18n: s.__i18n,
            __injectWithOption: !0,
            __extender: n.__vueI18nExtend,
            __root: t
          });
          const i = this.$i18n;
          i.__extender && (i.__disposer = i.__extender(this.$i18n))
        }
      else this.$i18n = e;
      s.__i18nGlobal && Du(t, s, s), this.$t = (...i) => this.$i18n.t(...i), this.$rt = (...i) => this.$i18n.rt(...i), this.$te = (i, o) => this.$i18n.te(i, o), this.$d = (...i) => this.$i18n.d(...i), this.$n = (...i) => this.$i18n.n(...i), this.$tm = i => this.$i18n.tm(i), n.__setInstance(r, this.$i18n)
    },
    mounted() {},
    unmounted() {
      const r = ft();
      if (!r) throw Et(_t.UNEXPECTED_ERROR);
      const s = this.$i18n;
      delete this.$t, delete this.$rt, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, s.__disposer && (s.__disposer(), delete s.__disposer, delete s.__extender), n.__deleteInstance(r), delete this.$i18n
    }
  }
}

function oa(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[Pu](t.pluralizationRules || e.pluralizationRules);
  const n = To(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n)
    .forEach(r => e.mergeLocaleMessage(r, n[r])), t.datetimeFormats && Object.keys(t.datetimeFormats)
    .forEach(r => e.mergeDateTimeFormat(r, t.datetimeFormats[r])), t.numberFormats && Object.keys(t.numberFormats)
    .forEach(r => e.mergeNumberFormat(r, t.numberFormats[r])), e
}
const No = {
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

function Zg({
  slots: e
}, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : [])
    .reduce((r, s) => [...r, ...s.type === mt ? s.children : [s]], []) : t.reduce((n, r) => {
      const s = e[r];
      return s && (n[r] = s()), n
    }, Se())
}

function Fu() {
  return mt
}
const Qg = Nn({
    name: "i18n-t",
    props: Ke({
      keypath: {
        type: String,
        required: !0
      },
      plural: {
        type: [Number, String],
        validator: e => He(e) || !isNaN(e)
      }
    }, No),
    setup(e, t) {
      const {
        slots: n,
        attrs: r
      } = t, s = e.i18n || Po({
        useScope: e.scope,
        __useComponent: !0
      });
      return () => {
        const i = Object.keys(n)
          .filter(u => u[0] !== "_"),
          o = Se();
        e.locale && (o.locale = e.locale), e.plural !== void 0 && (o.plural = X(e.plural) ? +e.plural : e.plural);
        const l = Zg(t, i),
          a = s[Pi](e.keypath, l, o),
          c = Ke(Se(), r),
          f = X(e.tag) || ye(e.tag) ? e.tag : Fu();
        return Ss(f, c, a)
      }
    }
  }),
  la = Qg;

function zg(e) {
  return Me(e) && !X(e[0])
}

function xu(e, t, n, r) {
  const {
    slots: s,
    attrs: i
  } = t;
  return () => {
    const o = {
      part: !0
    };
    let l = Se();
    e.locale && (o.locale = e.locale), X(e.format) ? o.key = e.format : ye(e.format) && (X(e.format.key) && (o.key = e.format.key), l = Object.keys(e.format)
      .reduce((d, h) => n.includes(h) ? Ke(Se(), d, {
        [h]: e.format[h]
      }) : d, Se()));
    const a = r(e.value, o, l);
    let c = [o.key];
    Me(a) ? c = a.map((d, h) => {
      const b = s[d.type],
        y = b ? b({
          [d.type]: d.value,
          index: h,
          parts: a
        }) : [d.value];
      return zg(y) && (y[0].key = `${d.type}-${h}`), y
    }) : X(a) && (c = [a]);
    const f = Ke(Se(), i),
      u = X(e.tag) || ye(e.tag) ? e.tag : Fu();
    return Ss(u, f, c)
  }
}
const e_ = Nn({
    name: "i18n-n",
    props: Ke({
      value: {
        type: Number,
        required: !0
      },
      format: {
        type: [String, Object]
      }
    }, No),
    setup(e, t) {
      const n = e.i18n || Po({
        useScope: e.scope,
        __useComponent: !0
      });
      return xu(e, t, Tu, (...r) => n[wi](...r))
    }
  }),
  aa = e_;

function t_(e, t) {
  const n = e;
  if (e.mode === "composition") return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer
  }
}

function n_(e) {
  const t = o => {
    const {
      instance: l,
      value: a
    } = o;
    if (!l || !l.$) throw Et(_t.UNEXPECTED_ERROR);
    const c = t_(e, l.$),
      f = ca(a);
    return [Reflect.apply(c.t, c, [...ua(f)]), c]
  };
  return {
    created: (o, l) => {
      const [a, c] = t(l);
      us && e.global === c && (o.__i18nWatcher = ct(c.locale, () => {
        l.instance && l.instance.$forceUpdate()
      })), o.__composer = c, o.textContent = a
    },
    unmounted: o => {
      us && o.__i18nWatcher && (o.__i18nWatcher(), o.__i18nWatcher = void 0, delete o.__i18nWatcher), o.__composer && (o.__composer = void 0, delete o.__composer)
    },
    beforeUpdate: (o, {
      value: l
    }) => {
      if (o.__composer) {
        const a = o.__composer,
          c = ca(l);
        o.textContent = Reflect.apply(a.t, a, [...ua(c)])
      }
    },
    getSSRProps: o => {
      const [l] = t(o);
      return {
        textContent: l
      }
    }
  }
}

function ca(e) {
  if (X(e)) return {
    path: e
  };
  if (he(e)) {
    if (!("path" in e)) throw Et(_t.REQUIRED_VALUE, "path");
    return e
  } else throw Et(_t.INVALID_VALUE)
}

function ua(e) {
  const {
    path: t,
    locale: n,
    args: r,
    choice: s,
    plural: i
  } = e, o = {}, l = r || {};
  return X(n) && (o.locale = n), He(s) && (o.plural = s), He(i) && (o.plural = i), [t, l, o]
}

function r_(e, t, ...n) {
  const r = he(n[0]) ? n[0] : {};
  (_e(r.globalInstall) ? r.globalInstall : !0) && ([la.name, "I18nT"].forEach(i => e.component(i, la)), [aa.name, "I18nN"].forEach(i => e.component(i, aa)), [da.name, "I18nD"].forEach(i => e.component(i, da))), e.directive("t", n_(t))
}
const s_ = hn("global-vue-i18n");

function i_(e = {}) {
  const t = __VUE_I18N_LEGACY_API__ && _e(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__,
    n = _e(e.globalInjection) ? e.globalInjection : !0,
    r = new Map,
    [s, i] = o_(e, t),
    o = hn("");

  function l(u) {
    return r.get(u) || null
  }

  function a(u, d) {
    r.set(u, d)
  }

  function c(u) {
    r.delete(u)
  }
  const f = {
    get mode() {
      return __VUE_I18N_LEGACY_API__ && t ? "legacy" : "composition"
    },
    async install(u, ...d) {
      if (u.__VUE_I18N_SYMBOL__ = o, u.provide(u.__VUE_I18N_SYMBOL__, f), he(d[0])) {
        const y = d[0];
        f.__composerExtend = y.__composerExtend, f.__vueI18nExtend = y.__vueI18nExtend
      }
      let h = null;
      !t && n && (h = m_(u, f.global)), __VUE_I18N_FULL_INSTALL__ && r_(u, f, ...d), __VUE_I18N_LEGACY_API__ && t && u.mixin(Jg(i, i.__composer, f));
      const b = u.unmount;
      u.unmount = () => {
        h && h(), f.dispose(), b()
      }
    },
    get global() {
      return i
    },
    dispose() {
      s.stop()
    },
    __instances: r,
    __getInstance: l,
    __setInstance: a,
    __deleteInstance: c
  };
  return f
}

function Po(e = {}) {
  const t = ft();
  if (t == null) throw Et(_t.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw Et(_t.NOT_INSTALLED);
  const n = l_(t),
    r = c_(n),
    s = wu(t),
    i = a_(e, s);
  if (i === "global") return Du(r, e, s), r;
  if (i === "parent") {
    let a = u_(n, t, e.__useComponent);
    return a == null && (a = r), a
  }
  const o = n;
  let l = o.__getInstance(t);
  if (l == null) {
    const a = Ke({}, e);
    "__i18n" in s && (a.__i18n = s.__i18n), r && (a.__root = r), l = Ro(a), o.__composerExtend && (l[Di] = o.__composerExtend(l)), d_(o, t, l), o.__setInstance(t, l)
  }
  return l
}

function o_(e, t) {
  const n = Ui(),
    r = __VUE_I18N_LEGACY_API__ && t ? n.run(() => Fi(e)) : n.run(() => Ro(e));
  if (r == null) throw Et(_t.UNEXPECTED_ERROR);
  return [n, r]
}

function l_(e) {
  const t = Ct(e.isCE ? s_ : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t) throw Et(e.isCE ? _t.NOT_INSTALLED_WITH_PROVIDE : _t.UNEXPECTED_ERROR);
  return t
}

function a_(e, t) {
  return Ts(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local"
}

function c_(e) {
  return e.mode === "composition" ? e.global : e.global.__composer
}

function u_(e, t, n = !1) {
  let r = null;
  const s = t.root;
  let i = f_(t, n);
  for (; i != null;) {
    const o = e;
    if (e.mode === "composition") r = o.__getInstance(i);
    else if (__VUE_I18N_LEGACY_API__) {
      const l = o.__getInstance(i);
      l != null && (r = l.__composer, n && r && !r[Lu] && (r = null))
    }
    if (r != null || s === i) break;
    i = i.parent
  }
  return r
}

function f_(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent
}

function d_(e, t, n) {
  bs(() => {}, t), lo(() => {
    const r = n;
    e.__deleteInstance(t);
    const s = r[Di];
    s && (s(), delete r[Di])
  }, t)
}
const h_ = ["locale", "fallbackLocale", "availableLocales"],
  fa = ["t", "rt", "d", "n", "tm", "te"];

function m_(e, t) {
  const n = Object.create(null);
  return h_.forEach(s => {
    const i = Object.getOwnPropertyDescriptor(t, s);
    if (!i) throw Et(_t.UNEXPECTED_ERROR);
    const o = Te(i.value) ? {
      get() {
        return i.value.value
      },
      set(l) {
        i.value.value = l
      }
    } : {
      get() {
        return i.get && i.get()
      }
    };
    Object.defineProperty(n, s, o)
  }), e.config.globalProperties.$i18n = n, fa.forEach(s => {
    const i = Object.getOwnPropertyDescriptor(t, s);
    if (!i || !i.value) throw Et(_t.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${s}`, i)
  }), () => {
    delete e.config.globalProperties.$i18n, fa.forEach(s => {
      delete e.config.globalProperties[`$${s}`]
    })
  }
}
const p_ = Nn({
    name: "i18n-d",
    props: Ke({
      value: {
        type: [Number, Date],
        required: !0
      },
      format: {
        type: [String, Object]
      }
    }, No),
    setup(e, t) {
      const n = e.i18n || Po({
        useScope: e.scope,
        __useComponent: !0
      });
      return xu(e, t, Cu, (...r) => n[Li](...r))
    }
  }),
  da = p_;
Kg();
Sg(ig);
Ig(Eg);
Cg(bu);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const e = An();
  e.__INTLIFY__ = !0, og(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)
}

function at(e) {
  return typeof e == "function"
}

function ku(e) {
  return e == null
}
const Rn = e => e !== null && !!e && typeof e == "object" && !Array.isArray(e);

function Lo(e) {
  return Number(e) >= 0
}

function g_(e) {
  const t = parseFloat(e);
  return isNaN(t) ? e : t
}

function __(e) {
  return typeof e == "object" && e !== null
}

function v_(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e)
}

function ha(e) {
  if (!__(e) || v_(e) !== "[object Object]") return !1;
  if (Object.getPrototypeOf(e) === null) return !0;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t
}

function wr(e, t) {
  return Object.keys(t)
    .forEach(n => {
      if (ha(t[n]) && ha(e[n])) {
        e[n] || (e[n] = {}), wr(e[n], t[n]);
        return
      }
      e[n] = t[n]
    }), e
}

function lr(e) {
  const t = e.split(".");
  if (!t.length) return "";
  let n = String(t[0]);
  for (let r = 1; r < t.length; r++) {
    if (Lo(t[r])) {
      n += `[${t[r]}]`;
      continue
    }
    n += `.${t[r]}`
  }
  return n
}
const Mu = {};

function vn(e, t) {
  b_(e, t), Mu[e] = t
}

function y_(e) {
  return Mu[e]
}

function b_(e, t) {
  if (!at(t)) throw new Error(`Extension Error: The validator '${e}' must be a function.`)
}

function ma(e, t, n) {
  typeof n.value == "object" && (n.value = Oe(n.value)), !n.enumerable || n.get || n.set || !n.configurable || !n.writable || t === "__proto__" ? Object.defineProperty(e, t, n) : e[t] = n.value
}

function Oe(e) {
  if (typeof e != "object") return e;
  var t = 0,
    n, r, s, i = Object.prototype.toString.call(e);
  if (i === "[object Object]" ? s = Object.create(e.__proto__ || null) : i === "[object Array]" ? s = Array(e.length) : i === "[object Set]" ? (s = new Set, e.forEach(function(o) {
      s.add(Oe(o))
    })) : i === "[object Map]" ? (s = new Map, e.forEach(function(o, l) {
      s.set(Oe(l), Oe(o))
    })) : i === "[object Date]" ? s = new Date(+e) : i === "[object RegExp]" ? s = new RegExp(e.source, e.flags) : i === "[object DataView]" ? s = new e.constructor(Oe(e.buffer)) : i === "[object ArrayBuffer]" ? s = e.slice(0) : i.slice(-6) === "Array]" && (s = new e.constructor(e)), s) {
    for (r = Object.getOwnPropertySymbols(e); t < r.length; t++) ma(s, r[t], Object.getOwnPropertyDescriptor(e, r[t]));
    for (t = 0, r = Object.getOwnPropertyNames(e); t < r.length; t++) Object.hasOwnProperty.call(s, n = r[t]) && s[n] === e[n] || ma(s, n, Object.getOwnPropertyDescriptor(e, n))
  }
  return s || e
}
const wo = Symbol("vee-validate-form"),
  E_ = Symbol("vee-validate-form-context"),
  A_ = Symbol("vee-validate-field-instance"),
  pa = Symbol("Default empty value"),
  O_ = typeof window < "u";

function xi(e) {
  return at(e) && !!e.__locatorRef
}

function Pt(e) {
  return !!e && at(e.parse) && e.__type === "VVTypedSchema"
}

function fs(e) {
  return !!e && at(e.validate)
}

function Vu(e) {
  return e === "checkbox" || e === "radio"
}

function S_(e) {
  return Rn(e) || Array.isArray(e)
}

function I_(e) {
  return Array.isArray(e) ? e.length === 0 : Rn(e) && Object.keys(e)
    .length === 0
}

function Ps(e) {
  return /^\[.+\]$/i.test(e)
}

function C_(e) {
  return ju(e) && e.multiple
}

function ju(e) {
  return e.tagName === "SELECT"
}

function T_(e) {
  return $u(e) && e.target && "submit" in e.target
}

function $u(e) {
  return e ? !!(typeof Event < "u" && at(Event) && e instanceof Event || e && e.srcElement) : !1
}

function ut(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, s;
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length) return !1;
      for (r = n; r-- !== 0;)
        if (!ut(e[r], t[r])) return !1;
      return !0
    }
    if (e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (r of e.entries())
        if (!t.has(r[0])) return !1;
      for (r of e.entries())
        if (!ut(r[1], t.get(r[0]))) return !1;
      return !0
    }
    if (_a(e) && _a(t)) return !(e.size !== t.size || e.name !== t.name || e.lastModified !== t.lastModified || e.type !== t.type);
    if (e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (r of e.entries())
        if (!t.has(r[0])) return !1;
      return !0
    }
    if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (n = e.length, n != t.length) return !1;
      for (r = n; r-- !== 0;)
        if (e[r] !== t[r]) return !1;
      return !0
    }
    if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
    if (e = ga(e), t = ga(t), s = Object.keys(e), n = s.length, n !== Object.keys(t)
      .length) return !1;
    for (r = n; r-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(t, s[r])) return !1;
    for (r = n; r-- !== 0;) {
      var i = s[r];
      if (!ut(e[i], t[i])) return !1
    }
    return !0
  }
  return e !== e && t !== t
}

function ga(e) {
  return Object.fromEntries(Object.entries(e)
    .filter(([, t]) => t !== void 0))
}

function _a(e) {
  return O_ ? e instanceof File : !1
}

function Do(e) {
  return Ps(e) ? e.replace(/\[|\]/gi, "") : e
}

function pt(e, t, n) {
  return e ? Ps(t) ? e[Do(t)] : (t || "")
    .split(/\.|\[(\d+)\]/)
    .filter(Boolean)
    .reduce((s, i) => S_(s) && i in s ? s[i] : n, e) : n
}

function Wt(e, t, n) {
  if (Ps(t)) {
    e[Do(t)] = n;
    return
  }
  const r = t.split(/\.|\[(\d+)\]/)
    .filter(Boolean);
  let s = e;
  for (let i = 0; i < r.length; i++) {
    if (i === r.length - 1) {
      s[r[i]] = n;
      return
    }(!(r[i] in s) || ku(s[r[i]])) && (s[r[i]] = Lo(r[i + 1]) ? [] : {}), s = s[r[i]]
  }
}

function ti(e, t) {
  if (Array.isArray(e) && Lo(t)) {
    e.splice(Number(t), 1);
    return
  }
  Rn(e) && delete e[t]
}

function va(e, t) {
  if (Ps(t)) {
    delete e[Do(t)];
    return
  }
  const n = t.split(/\.|\[(\d+)\]/)
    .filter(Boolean);
  let r = e;
  for (let i = 0; i < n.length; i++) {
    if (i === n.length - 1) {
      ti(r, n[i]);
      break
    }
    if (!(n[i] in r) || ku(r[n[i]])) break;
    r = r[n[i]]
  }
  const s = n.map((i, o) => pt(e, n.slice(0, o)
    .join(".")));
  for (let i = s.length - 1; i >= 0; i--)
    if (I_(s[i])) {
      if (i === 0) {
        ti(e, n[0]);
        continue
      }
      ti(s[i - 1], n[i - 1])
    }
}

function bt(e) {
  return Object.keys(e)
}

function Uu(e, t = void 0) {
  const n = ft();
  return n?.provides[e] || Ct(e, t)
}

function ya(e, t, n) {
  if (Array.isArray(e)) {
    const r = [...e],
      s = r.findIndex(i => ut(i, t));
    return s >= 0 ? r.splice(s, 1) : r.push(t), r
  }
  return ut(e, t) ? n : t
}

function ba(e, t = 0) {
  let n = null,
    r = [];
  return function(...s) {
    return n && clearTimeout(n), n = setTimeout(() => {
      const i = e(...s);
      r.forEach(o => o(i)), r = []
    }, t), new Promise(i => r.push(i))
  }
}

function R_(e, t) {
  return Rn(t) && t.number ? g_(e) : e
}

function ki(e, t) {
  let n;
  return async function(...s) {
    const i = e(...s);
    n = i;
    const o = await i;
    return i !== n ? o : (n = void 0, t(o, s))
  }
}

function Mi(e) {
  return Array.isArray(e) ? e : e ? [e] : []
}

function Wr(e, t) {
  const n = {};
  for (const r in e) t.includes(r) || (n[r] = e[r]);
  return n
}

function N_(e) {
  let t = null,
    n = [];
  return function(...r) {
    const s = yt(() => {
      if (t !== s) return;
      const i = e(...r);
      n.forEach(o => o(i)), n = [], t = null
    });
    return t = s, new Promise(i => n.push(i))
  }
}

function ni(e) {
  if (Bu(e)) return e._value
}

function Bu(e) {
  return "_value" in e
}

function P_(e) {
  return e.type === "number" || e.type === "range" ? Number.isNaN(e.valueAsNumber) ? e.value : e.valueAsNumber : e.value
}

function ds(e) {
  if (!$u(e)) return e;
  const t = e.target;
  if (Vu(t.type) && Bu(t)) return ni(t);
  if (t.type === "file" && t.files) {
    const n = Array.from(t.files);
    return t.multiple ? n : n[0]
  }
  if (C_(t)) return Array.from(t.options)
    .filter(n => n.selected && !n.disabled)
    .map(ni);
  if (ju(t)) {
    const n = Array.from(t.options)
      .find(r => r.selected);
    return n ? ni(n) : t.value
  }
  return P_(t)
}

function Hu(e) {
  const t = {};
  return Object.defineProperty(t, "_$$isNormalized", {
      value: !0,
      writable: !1,
      enumerable: !1,
      configurable: !1
    }), e ? Rn(e) && e._$$isNormalized ? e : Rn(e) ? Object.keys(e)
    .reduce((n, r) => {
      const s = L_(e[r]);
      return e[r] !== !1 && (n[r] = Ea(s)), n
    }, t) : typeof e != "string" ? t : e.split("|")
    .reduce((n, r) => {
      const s = w_(r);
      return s.name && (n[s.name] = Ea(s.params)), n
    }, t) : t
}

function L_(e) {
  return e === !0 ? [] : Array.isArray(e) || Rn(e) ? e : [e]
}

function Ea(e) {
  const t = n => typeof n == "string" && n[0] === "@" ? D_(n.slice(1)) : n;
  return Array.isArray(e) ? e.map(t) : e instanceof RegExp ? [e] : Object.keys(e)
    .reduce((n, r) => (n[r] = t(e[r]), n), {})
}
const w_ = e => {
  let t = [];
  const n = e.split(":")[0];
  return e.includes(":") && (t = e.split(":")
    .slice(1)
    .join(":")
    .split(",")), {
    name: n,
    params: t
  }
};

function D_(e) {
  const t = n => {
    var r;
    return (r = pt(n, e)) !== null && r !== void 0 ? r : n[e]
  };
  return t.__locatorRef = e, t
}

function F_(e) {
  return Array.isArray(e) ? e.filter(xi) : bt(e)
    .filter(t => xi(e[t]))
    .map(t => e[t])
}
const x_ = {
  generateMessage: ({
    field: e
  }) => `${e} is not valid.`,
  bails: !0,
  validateOnBlur: !0,
  validateOnChange: !0,
  validateOnInput: !1,
  validateOnModelUpdate: !0
};
let Vi = Object.assign({}, x_);
const ar = () => Vi,
  k_ = e => {
    Vi = Object.assign(Object.assign({}, Vi), e)
  },
  M_ = k_;
async function Wu(e, t, n = {}) {
  const r = n?.bails,
    s = {
      name: n?.name || "{field}",
      rules: t,
      label: n?.label,
      bails: r ?? !0,
      formData: n?.values || {}
    },
    i = await V_(s, e);
  return Object.assign(Object.assign({}, i), {
    valid: !i.errors.length
  })
}
async function V_(e, t) {
  const n = e.rules;
  if (Pt(n) || fs(n)) return $_(t, Object.assign(Object.assign({}, e), {
    rules: n
  }));
  if (at(n) || Array.isArray(n)) {
    const l = {
        field: e.label || e.name,
        name: e.name,
        label: e.label,
        form: e.formData,
        value: t
      },
      a = Array.isArray(n) ? n : [n],
      c = a.length,
      f = [];
    for (let u = 0; u < c; u++) {
      const d = a[u],
        h = await d(t, l);
      if (!(typeof h != "string" && !Array.isArray(h) && h)) {
        if (Array.isArray(h)) f.push(...h);
        else {
          const y = typeof h == "string" ? h : Ku(l);
          f.push(y)
        }
        if (e.bails) return {
          errors: f
        }
      }
    }
    return {
      errors: f
    }
  }
  const r = Object.assign(Object.assign({}, e), {
      rules: Hu(n)
    }),
    s = [],
    i = Object.keys(r.rules),
    o = i.length;
  for (let l = 0; l < o; l++) {
    const a = i[l],
      c = await U_(r, t, {
        name: a,
        params: r.rules[a]
      });
    if (c.error && (s.push(c.error), e.bails)) return {
      errors: s
    }
  }
  return {
    errors: s
  }
}

function j_(e) {
  return !!e && e.name === "ValidationError"
}

function Gu(e) {
  return {
    __type: "VVTypedSchema",
    async parse(n, r) {
      var s;
      try {
        return {
          output: await e.validate(n, {
            abortEarly: !1,
            context: r?.formData || {}
          }),
          errors: []
        }
      } catch (i) {
        if (!j_(i)) throw i;
        if (!(!((s = i.inner) === null || s === void 0) && s.length) && i.errors.length) return {
          errors: [{
            path: i.path,
            errors: i.errors
          }]
        };
        const o = i.inner.reduce((l, a) => {
          const c = a.path || "";
          return l[c] || (l[c] = {
            errors: [],
            path: c
          }), l[c].errors.push(...a.errors), l
        }, {});
        return {
          errors: Object.values(o)
        }
      }
    }
  }
}
async function $_(e, t) {
  const r = await (Pt(t.rules) ? t.rules : Gu(t.rules))
    .parse(e, {
      formData: t.formData
    }),
    s = [];
  for (const i of r.errors) i.errors.length && s.push(...i.errors);
  return {
    value: r.value,
    errors: s
  }
}
async function U_(e, t, n) {
  const r = y_(n.name);
  if (!r) throw new Error(`No such validator '${n.name}' exists.`);
  const s = B_(n.params, e.formData),
    i = {
      field: e.label || e.name,
      name: e.name,
      label: e.label,
      value: t,
      form: e.formData,
      rule: Object.assign(Object.assign({}, n), {
        params: s
      })
    },
    o = await r(t, s, i);
  return typeof o == "string" ? {
    error: o
  } : {
    error: o ? void 0 : Ku(i)
  }
}

function Ku(e) {
  const t = ar()
    .generateMessage;
  return t ? t(e) : "Field is invalid"
}

function B_(e, t) {
  const n = r => xi(r) ? r(t) : r;
  return Array.isArray(e) ? e.map(n) : Object.keys(e)
    .reduce((r, s) => (r[s] = n(e[s]), r), {})
}
async function H_(e, t) {
  const r = await (Pt(e) ? e : Gu(e))
    .parse(Oe(t), {
      formData: Oe(t)
    }),
    s = {},
    i = {};
  for (const o of r.errors) {
    const l = o.errors,
      a = (o.path || "")
      .replace(/\["(\d+)"\]/g, (c, f) => `[${f}]`);
    s[a] = {
      valid: !l.length,
      errors: l
    }, l.length && (i[a] = l[0])
  }
  return {
    valid: !r.errors.length,
    results: s,
    errors: i,
    values: r.value,
    source: "schema"
  }
}
async function W_(e, t, n) {
  const s = bt(e)
    .map(async c => {
      var f, u, d;
      const h = (f = n?.names) === null || f === void 0 ? void 0 : f[c],
        b = await Wu(pt(t, c), e[c], {
          name: h?.name || c,
          label: h?.label,
          values: t,
          bails: (d = (u = n?.bailsMap) === null || u === void 0 ? void 0 : u[c]) !== null && d !== void 0 ? d : !0
        });
      return Object.assign(Object.assign({}, b), {
        path: c
      })
    });
  let i = !0;
  const o = await Promise.all(s),
    l = {},
    a = {};
  for (const c of o) l[c.path] = {
    valid: c.valid,
    errors: c.errors
  }, c.valid || (i = !1, a[c.path] = c.errors[0]);
  return {
    valid: i,
    results: l,
    errors: a,
    source: "schema"
  }
}
let Aa = 0;

function G_(e, t) {
  const {
    value: n,
    initialValue: r,
    setInitialValue: s
  } = K_(e, t.modelValue, t.form);
  if (!t.form) {
    let a = function(h) {
      var b;
      "value" in h && (n.value = h.value), "errors" in h && f(h.errors), "touched" in h && (d.touched = (b = h.touched) !== null && b !== void 0 ? b : d.touched), "initialValue" in h && s(h.initialValue)
    };
    const {
      errors: c,
      setErrors: f
    } = X_(), u = Aa >= Number.MAX_SAFE_INTEGER ? 0 : ++Aa, d = q_(n, r, c, t.schema);
    return {
      id: u,
      path: e,
      value: n,
      initialValue: r,
      meta: d,
      flags: {
        pendingUnmount: {
          [u]: !1
        },
        pendingReset: !1
      },
      errors: c,
      setState: a
    }
  }
  const i = t.form.createPathState(e, {
      bails: t.bails,
      label: t.label,
      type: t.type,
      validate: t.validate,
      schema: t.schema
    }),
    o = le(() => i.errors);

  function l(a) {
    var c, f, u;
    "value" in a && (n.value = a.value), "errors" in a && ((c = t.form) === null || c === void 0 || c.setFieldError(pe(e), a.errors)), "touched" in a && ((f = t.form) === null || f === void 0 || f.setFieldTouched(pe(e), (u = a.touched) !== null && u !== void 0 ? u : !1)), "initialValue" in a && s(a.initialValue)
  }
  return {
    id: Array.isArray(i.id) ? i.id[i.id.length - 1] : i.id,
    path: e,
    value: n,
    errors: o,
    meta: i,
    initialValue: r,
    flags: i.__flags,
    setState: l
  }
}

function K_(e, t, n) {
  const r = Ge(pe(t));

  function s() {
    return n ? pt(n.initialValues.value, pe(e), pe(r)) : pe(r)
  }

  function i(c) {
    if (!n) {
      r.value = c;
      return
    }
    n.setFieldInitialValue(pe(e), c, !0)
  }
  const o = le(s);
  if (!n) return {
    value: Ge(s()),
    initialValue: o,
    setInitialValue: i
  };
  const l = Y_(t, n, o, e);
  return n.stageInitialValue(pe(e), l, !0), {
    value: le({
      get() {
        return pt(n.values, pe(e))
      },
      set(c) {
        n.setFieldValue(pe(e), c, !1)
      }
    }),
    initialValue: o,
    setInitialValue: i
  }
}

function Y_(e, t, n, r) {
  return Te(e) ? pe(e) : e !== void 0 ? e : pt(t.values, pe(r), pe(n))
}

function q_(e, t, n, r) {
  const s = le(() => {
      var o, l, a;
      return (a = (l = (o = te(r)) === null || o === void 0 ? void 0 : o.describe) === null || l === void 0 ? void 0 : l.call(o)
        .required) !== null && a !== void 0 ? a : !1
    }),
    i = tn({
      touched: !1,
      pending: !1,
      valid: !0,
      required: s,
      validated: !!pe(n)
        .length,
      initialValue: le(() => pe(t)),
      dirty: le(() => !ut(pe(e), pe(t)))
    });
  return ct(n, o => {
    i.valid = !o.length
  }, {
    immediate: !0,
    flush: "sync"
  }), i
}

function X_() {
  const e = Ge([]);
  return {
    errors: e,
    setErrors: t => {
      e.value = Mi(t)
    }
  }
}

function ty(e, t, n) {
  return Vu(n?.type) ? Z_(e, t, n) : Yu(e, t, n)
}

function Yu(e, t, n) {
  const {
    initialValue: r,
    validateOnMount: s,
    bails: i,
    type: o,
    checkedValue: l,
    label: a,
    validateOnValueUpdate: c,
    uncheckedValue: f,
    controlled: u,
    keepValueOnUnmount: d,
    syncVModel: h,
    form: b
  } = J_(n), y = u ? Uu(wo) : void 0, D = b || y, v = le(() => lr(te(e))), O = le(() => {
    if (te(D?.schema)) return;
    const L = pe(t);
    return fs(L) || Pt(L) || at(L) || Array.isArray(L) ? L : Hu(L)
  }), R = !at(O.value) && Pt(te(t)), {
    id: S,
    value: P,
    initialValue: x,
    meta: w,
    setState: W,
    errors: H,
    flags: Q
  } = G_(v, {
    modelValue: r,
    form: D,
    bails: i,
    label: a,
    type: o,
    validate: O.value ? ae : void 0,
    schema: R ? t : void 0
  }), se = le(() => H.value[0]);
  h && Q_({
    value: P,
    prop: h,
    handleChange: J,
    shouldValidate: () => c && !Q.pendingReset
  });
  const ne = (K, L = !1) => {
    w.touched = !0, L && Ie()
  };
  async function me(K) {
    var L, B;
    if (D?.validateSchema) {
      const {
        results: U
      } = await D.validateSchema(K);
      return (L = U[te(v)]) !== null && L !== void 0 ? L : {
        valid: !0,
        errors: []
      }
    }
    return O.value ? Wu(P.value, O.value, {
      name: te(v),
      label: te(a),
      values: (B = D?.values) !== null && B !== void 0 ? B : {},
      bails: i
    }) : {
      valid: !0,
      errors: []
    }
  }
  const Ie = ki(async () => (w.pending = !0, w.validated = !0, me("validated-only")), K => (Q.pendingUnmount[Ne.id] || (W({
      errors: K.errors
    }), w.pending = !1, w.valid = K.valid), K)),
    Re = ki(async () => me("silent"), K => (w.valid = K.valid, K));

  function ae(K) {
    return K?.mode === "silent" ? Re() : Ie()
  }

  function J(K, L = !0) {
    const B = ds(K);
    je(B, L)
  }
  bs(() => {
    if (s) return Ie();
    (!D || !D.validateSchema) && Re()
  });

  function de(K) {
    w.touched = K
  }

  function Ae(K) {
    var L;
    const B = K && "value" in K ? K.value : x.value;
    W({
      value: Oe(B),
      initialValue: Oe(B),
      touched: (L = K?.touched) !== null && L !== void 0 ? L : !1,
      errors: K?.errors || []
    }), w.pending = !1, w.validated = !1, Re()
  }
  const Ve = ft();

  function je(K, L = !0) {
    P.value = Ve && h ? R_(K, Ve.props.modelModifiers) : K, (L ? Ie : Re)()
  }

  function xe(K) {
    W({
      errors: Array.isArray(K) ? K : [K]
    })
  }
  const vt = le({
      get() {
        return P.value
      },
      set(K) {
        je(K, c)
      }
    }),
    Ne = {
      id: S,
      name: v,
      label: a,
      value: vt,
      meta: w,
      errors: H,
      errorMessage: se,
      type: o,
      checkedValue: l,
      uncheckedValue: f,
      bails: i,
      keepValueOnUnmount: d,
      resetField: Ae,
      handleReset: () => Ae(),
      validate: ae,
      handleChange: J,
      handleBlur: ne,
      setState: W,
      setTouched: de,
      setErrors: xe,
      setValue: je
    };
  if (In(A_, Ne), Te(t) && typeof pe(t) != "function" && ct(t, (K, L) => {
      ut(K, L) || (w.validated ? Ie() : Re())
    }, {
      deep: !0
    }), !D) return Ne;
  const dt = le(() => {
    const K = O.value;
    return !K || at(K) || fs(K) || Pt(K) || Array.isArray(K) ? {} : Object.keys(K)
      .reduce((L, B) => {
        const U = F_(K[B])
          .map(q => q.__locatorRef)
          .reduce((q, oe) => {
            const g = pt(D.values, oe) || D.values[oe];
            return g !== void 0 && (q[oe] = g), q
          }, {});
        return Object.assign(L, U), L
      }, {})
  });
  return ct(dt, (K, L) => {
    if (!Object.keys(K)
      .length) return;
    !ut(K, L) && (w.validated ? Ie() : Re())
  }), uc(() => {
    var K;
    const L = (K = te(Ne.keepValueOnUnmount)) !== null && K !== void 0 ? K : te(D.keepValuesOnUnmount),
      B = te(v);
    if (L || !D || Q.pendingUnmount[Ne.id]) {
      D?.removePathState(B, S);
      return
    }
    Q.pendingUnmount[Ne.id] = !0;
    const U = D.getPathState(B);
    if (Array.isArray(U?.id) && U?.multiple ? U?.id.includes(Ne.id) : U?.id === Ne.id) {
      if (U?.multiple && Array.isArray(U.value)) {
        const oe = U.value.findIndex(g => ut(g, te(Ne.checkedValue)));
        if (oe > -1) {
          const g = [...U.value];
          g.splice(oe, 1), D.setFieldValue(B, g)
        }
        Array.isArray(U.id) && U.id.splice(U.id.indexOf(Ne.id), 1)
      } else D.unsetPathValue(te(v));
      D.removePathState(B, S)
    }
  }), Ne
}

function J_(e) {
  const t = () => ({
      initialValue: void 0,
      validateOnMount: !1,
      bails: !0,
      label: void 0,
      validateOnValueUpdate: !0,
      keepValueOnUnmount: void 0,
      syncVModel: !1,
      controlled: !0
    }),
    n = !!e?.syncVModel,
    r = typeof e?.syncVModel == "string" ? e.syncVModel : e?.modelPropName || "modelValue",
    s = n && !("initialValue" in (e || {})) ? ji(ft(), r) : e?.initialValue;
  if (!e) return Object.assign(Object.assign({}, t()), {
    initialValue: s
  });
  const i = "valueProp" in e ? e.valueProp : e.checkedValue,
    o = "standalone" in e ? !e.standalone : e.controlled,
    l = e?.modelPropName || e?.syncVModel || !1;
  return Object.assign(Object.assign(Object.assign({}, t()), e || {}), {
    initialValue: s,
    controlled: o ?? !0,
    checkedValue: i,
    syncVModel: l
  })
}

function Z_(e, t, n) {
  const r = n?.standalone ? void 0 : Uu(wo),
    s = n?.checkedValue,
    i = n?.uncheckedValue;

  function o(l) {
    const a = l.handleChange,
      c = le(() => {
        const u = te(l.value),
          d = te(s);
        return Array.isArray(u) ? u.findIndex(h => ut(h, d)) >= 0 : ut(d, u)
      });

    function f(u, d = !0) {
      var h, b;
      if (c.value === ((h = u?.target) === null || h === void 0 ? void 0 : h.checked)) {
        d && l.validate();
        return
      }
      const y = te(e),
        D = r?.getPathState(y),
        v = ds(u);
      let O = (b = te(s)) !== null && b !== void 0 ? b : v;
      r && D?.multiple && D.type === "checkbox" ? O = ya(pt(r.values, y) || [], O, void 0) : n?.type === "checkbox" && (O = ya(te(l.value), O, te(i))), a(O, d)
    }
    return Object.assign(Object.assign({}, l), {
      checked: c,
      checkedValue: s,
      uncheckedValue: i,
      handleChange: f
    })
  }
  return o(Yu(e, t, n))
}

function Q_({
  prop: e,
  value: t,
  handleChange: n,
  shouldValidate: r
}) {
  const s = ft();
  if (!s || !e) return;
  const i = typeof e == "string" ? e : "modelValue",
    o = `update:${i}`;
  i in s.props && (ct(t, l => {
    ut(l, ji(s, i)) || s.emit(o, l)
  }), ct(() => ji(s, i), l => {
    if (l === pa && t.value === void 0) return;
    const a = l === pa ? void 0 : l;
    ut(a, t.value) || n(a, r())
  }))
}

function ji(e, t) {
  if (e) return e.props[t]
}
let z_ = 0;
const Gr = ["bails", "fieldsCount", "id", "multiple", "type", "validate"];

function qu(e) {
  const n = Object.assign({}, te({})),
    r = pe(void 0);
  return r && Pt(r) && at(r.cast) ? Oe(r.cast(n) || {}) : Oe(n)
}

function ny(e) {
  var t;
  const n = z_++,
    r = "Form";
  let s = 0;
  const i = Ge(!1),
    o = Ge(!1),
    l = Ge(0),
    a = [],
    c = tn(qu()),
    f = Ge([]),
    u = Ge({}),
    d = Ge({}),
    h = N_(() => {
      d.value = f.value.reduce((T, C) => (T[lr(te(C.path))] = C, T), {})
    });

  function b(T, C) {
    const $ = J(T);
    if (!$) {
      typeof T == "string" && (u.value[lr(T)] = Mi(C));
      return
    }
    if (typeof T == "string") {
      const Y = lr(T);
      u.value[Y] && delete u.value[Y]
    }
    $.errors = Mi(C), $.valid = !$.errors.length
  }

  function y(T) {
    bt(T)
      .forEach(C => {
        b(C, T[C])
      })
  }
  const D = le(() => {
      const T = f.value.reduce((C, $) => ($.errors.length && (C[te($.path)] = $.errors), C), {});
      return Object.assign(Object.assign({}, u.value), T)
    }),
    v = le(() => bt(D.value)
      .reduce((T, C) => {
        const $ = D.value[C];
        return $?.length && (T[C] = $[0]), T
      }, {})),
    O = le(() => f.value.reduce((T, C) => (T[te(C.path)] = {
      name: te(C.path) || "",
      label: C.label || ""
    }, T), {})),
    R = le(() => f.value.reduce((T, C) => {
      var $;
      return T[te(C.path)] = ($ = C.bails) !== null && $ !== void 0 ? $ : !0, T
    }, {})),
    S = Object.assign({}, {}),
    P = (t = void 0) !== null && t !== void 0 ? t : !1,
    {
      initialValues: x,
      originalInitialValues: w,
      setInitialValues: W
    } = tv(f, c),
    H = ev(f, c, w, v),
    Q = le(() => f.value.reduce((T, C) => {
      const $ = pt(c, te(C.path));
      return Wt(T, te(C.path), $), T
    }, {})),
    se = void 0;

  function ne(T, C) {
    var $, Y;
    const z = le(() => pt(x.value, te(T))),
      re = d.value[te(T)],
      ee = C?.type === "checkbox" || C?.type === "radio";
    if (re && ee) {
      re.multiple = !0;
      const At = s++;
      return Array.isArray(re.id) ? re.id.push(At) : re.id = [re.id, At], re.fieldsCount++, re.__flags.pendingUnmount[At] = !1, re
    }
    const Ce = le(() => pt(c, te(T))),
      Be = te(T),
      ze = Ae.findIndex(At => At === Be);
    ze !== -1 && Ae.splice(ze, 1);
    const we = le(() => {
        var At, er, ws, Ds;
        const Fs = te(se);
        if (Pt(Fs)) return (er = (At = Fs.describe) === null || At === void 0 ? void 0 : At.call(Fs, te(T))
          .required) !== null && er !== void 0 ? er : !1;
        const xs = te(C?.schema);
        return Pt(xs) && (Ds = (ws = xs.describe) === null || ws === void 0 ? void 0 : ws.call(xs)
          .required) !== null && Ds !== void 0 ? Ds : !1
      }),
      et = s++,
      ht = tn({
        id: et,
        path: T,
        touched: !1,
        pending: !1,
        valid: !0,
        validated: !!(!(($ = S[Be]) === null || $ === void 0) && $.length),
        required: we,
        initialValue: z,
        errors: gs([]),
        bails: (Y = C?.bails) !== null && Y !== void 0 ? Y : !1,
        label: C?.label,
        type: C?.type || "default",
        value: Ce,
        multiple: !1,
        __flags: {
          pendingUnmount: {
            [et]: !1
          },
          pendingReset: !1
        },
        fieldsCount: 1,
        validate: C?.validate,
        dirty: le(() => !ut(pe(Ce), pe(z)))
      });
    return f.value.push(ht), d.value[Be] = ht, h(), v.value[Be] && !S[Be] && yt(() => {
      E(Be, {
        mode: "silent"
      })
    }), Te(T) && ct(T, At => {
      h();
      const er = Oe(Ce.value);
      d.value[At] = ht, yt(() => {
        Wt(c, At, er)
      })
    }), ht
  }
  const me = ba(A, 5),
    Ie = ba(A, 5),
    Re = ki(async T => await (T === "silent" ? me() : Ie()), (T, [C]) => {
      const $ = bt(L.errorBag.value),
        z = [...new Set([...bt(T.results), ...f.value.map(re => re.path), ...$])].sort()
        .reduce((re, ee) => {
          var Ce;
          const Be = ee,
            ze = J(Be) || de(Be),
            we = ((Ce = T.results[Be]) === null || Ce === void 0 ? void 0 : Ce.errors) || [],
            et = te(ze?.path) || Be,
            ht = nv({
              errors: we,
              valid: !we.length
            }, re.results[et]);
          return re.results[et] = ht, ht.valid || (re.errors[et] = ht.errors[0]), ze && u.value[et] && delete u.value[et], ze ? (ze.valid = ht.valid, C === "silent" || C === "validated-only" && !ze.validated || b(ze, ht.errors), re) : (b(et, we), re)
        }, {
          valid: T.valid,
          results: {},
          errors: {},
          source: T.source
        });
      return T.values && (z.values = T.values, z.source = T.source), bt(z.results)
        .forEach(re => {
          var ee;
          const Ce = J(re);
          Ce && C !== "silent" && (C === "validated-only" && !Ce.validated || b(Ce, (ee = z.results[re]) === null || ee === void 0 ? void 0 : ee.errors))
        }), z
    });

  function ae(T) {
    f.value.forEach(T)
  }

  function J(T) {
    const C = typeof T == "string" ? lr(T) : T;
    return typeof C == "string" ? d.value[C] : C
  }

  function de(T) {
    return f.value.filter($ => T.startsWith(te($.path)))
      .reduce(($, Y) => $ ? Y.path.length > $.path.length ? Y : $ : Y, void 0)
  }
  let Ae = [],
    Ve;

  function je(T) {
    return Ae.push(T), Ve || (Ve = yt(() => {
      [...Ae].sort()
        .reverse()
        .forEach($ => {
          va(c, $)
        }), Ae = [], Ve = null
    })), Ve
  }

  function xe(T) {
    return function($, Y) {
      return function(re) {
        return re instanceof Event && (re.preventDefault(), re.stopPropagation()), ae(ee => ee.touched = !0), i.value = !0, l.value++, p()
          .then(ee => {
            const Ce = Oe(c);
            if (ee.valid && typeof $ == "function") {
              const Be = Oe(Q.value);
              let ze = T ? Be : Ce;
              return ee.values && (ze = ee.source === "schema" ? ee.values : Object.assign({}, ze, ee.values)), $(ze, {
                evt: re,
                controlledValues: Be,
                setErrors: y,
                setFieldError: b,
                setTouched: j,
                setFieldTouched: g,
                setValues: q,
                setFieldValue: B,
                resetForm: m,
                resetField: M
              })
            }!ee.valid && typeof Y == "function" && Y({
              values: Ce,
              evt: re,
              errors: ee.errors,
              results: ee.results
            })
          })
          .then(ee => (i.value = !1, ee), ee => {
            throw i.value = !1, ee
          })
      }
    }
  }
  const Ne = xe(!1);
  Ne.withControlled = xe(!0);

  function dt(T, C) {
    const $ = f.value.findIndex(z => z.path === T && (Array.isArray(z.id) ? z.id.includes(C) : z.id === C)),
      Y = f.value[$];
    if (!($ === -1 || !Y)) {
      if (yt(() => {
          E(T, {
            mode: "silent",
            warn: !1
          })
        }), Y.multiple && Y.fieldsCount && Y.fieldsCount--, Array.isArray(Y.id)) {
        const z = Y.id.indexOf(C);
        z >= 0 && Y.id.splice(z, 1), delete Y.__flags.pendingUnmount[C]
      }(!Y.multiple || Y.fieldsCount <= 0) && (f.value.splice($, 1), N(T), h(), delete d.value[T])
    }
  }

  function K(T) {
    bt(d.value)
      .forEach(C => {
        C.startsWith(T) && delete d.value[C]
      }), f.value = f.value.filter(C => !C.path.startsWith(T)), yt(() => {
        h()
      })
  }
  const L = {
    name: r,
    formId: n,
    values: c,
    controlledValues: Q,
    errorBag: D,
    errors: v,
    schema: se,
    submitCount: l,
    meta: H,
    isSubmitting: i,
    isValidating: o,
    fieldArrays: a,
    keepValuesOnUnmount: P,
    validateSchema: pe(se) ? Re : void 0,
    validate: p,
    setFieldError: b,
    validateField: E,
    setFieldValue: B,
    setValues: q,
    setErrors: y,
    setFieldTouched: g,
    setTouched: j,
    resetForm: m,
    resetField: M,
    handleSubmit: Ne,
    useFieldModel: ie,
    defineInputBinds: fe,
    defineComponentBinds: $e,
    defineField: Z,
    stageInitialValue: G,
    unsetInitialValue: N,
    setFieldInitialValue: V,
    createPathState: ne,
    getPathState: J,
    unsetPathValue: je,
    removePathState: dt,
    initialValues: x,
    getAllPathStates: () => f.value,
    destroyPath: K,
    isFieldTouched: _,
    isFieldDirty: I,
    isFieldValid: k
  };

  function B(T, C, $ = !0) {
    const Y = Oe(C),
      z = typeof T == "string" ? T : T.path;
    J(z) || ne(z), Wt(c, z, Y), $ && E(z)
  }

  function U(T, C = !0) {
    bt(c)
      .forEach($ => {
        delete c[$]
      }), bt(T)
      .forEach($ => {
        B($, T[$], !1)
      }), C && p()
  }

  function q(T, C = !0) {
    wr(c, T), a.forEach($ => $ && $.reset()), C && p()
  }

  function oe(T, C) {
    const $ = J(te(T)) || ne(T);
    return le({
      get() {
        return $.value
      },
      set(Y) {
        var z;
        const re = te(T);
        B(re, Y, (z = te(C)) !== null && z !== void 0 ? z : !1)
      }
    })
  }

  function g(T, C) {
    const $ = J(T);
    $ && ($.touched = C)
  }

  function _(T) {
    const C = J(T);
    return C ? C.touched : f.value.filter($ => $.path.startsWith(T))
      .some($ => $.touched)
  }

  function I(T) {
    const C = J(T);
    return C ? C.dirty : f.value.filter($ => $.path.startsWith(T))
      .some($ => $.dirty)
  }

  function k(T) {
    const C = J(T);
    return C ? C.valid : f.value.filter($ => $.path.startsWith(T))
      .every($ => $.valid)
  }

  function j(T) {
    if (typeof T == "boolean") {
      ae(C => {
        C.touched = T
      });
      return
    }
    bt(T)
      .forEach(C => {
        g(C, !!T[C])
      })
  }

  function M(T, C) {
    var $;
    const Y = C && "value" in C ? C.value : pt(x.value, T),
      z = J(T);
    z && (z.__flags.pendingReset = !0), V(T, Oe(Y), !0), B(T, Y, !1), g(T, ($ = C?.touched) !== null && $ !== void 0 ? $ : !1), b(T, C?.errors || []), yt(() => {
      z && (z.__flags.pendingReset = !1)
    })
  }

  function m(T, C) {
    let $ = Oe(T?.values ? T.values : w.value);
    $ = C?.force ? $ : wr(w.value, $), $ = Pt(se) && at(se.cast) ? se.cast($) : $, W($, {
      force: C?.force
    }), ae(Y => {
      var z;
      Y.__flags.pendingReset = !0, Y.validated = !1, Y.touched = ((z = T?.touched) === null || z === void 0 ? void 0 : z[te(Y.path)]) || !1, B(te(Y.path), pt($, te(Y.path)), !1), b(te(Y.path), void 0)
    }), C?.force ? U($, !1) : q($, !1), y(T?.errors || {}), l.value = T?.submitCount || 0, yt(() => {
      p({
        mode: "silent"
      }), ae(Y => {
        Y.__flags.pendingReset = !1
      })
    })
  }
  async function p(T) {
    const C = T?.mode || "force";
    if (C === "force" && ae(ee => ee.validated = !0), L.validateSchema) return L.validateSchema(C);
    o.value = !0;
    const $ = await Promise.all(f.value.map(ee => ee.validate ? ee.validate(T)
      .then(Ce => ({
        key: te(ee.path),
        valid: Ce.valid,
        errors: Ce.errors,
        value: Ce.value
      })) : Promise.resolve({
        key: te(ee.path),
        valid: !0,
        errors: [],
        value: void 0
      })));
    o.value = !1;
    const Y = {},
      z = {},
      re = {};
    for (const ee of $) Y[ee.key] = {
      valid: ee.valid,
      errors: ee.errors
    }, ee.value && Wt(re, ee.key, ee.value), ee.errors.length && (z[ee.key] = ee.errors[0]);
    return {
      valid: $.every(ee => ee.valid),
      results: Y,
      errors: z,
      values: re,
      source: "fields"
    }
  }
  async function E(T, C) {
    var $;
    const Y = J(T);
    return Y && C?.mode !== "silent" && (Y.validated = !0), Y?.validate ? Y.validate(C) : (!Y && ($ = C?.warn), Promise.resolve({
      errors: [],
      valid: !0
    }))
  }

  function N(T) {
    va(x.value, T)
  }

  function G(T, C, $ = !1) {
    V(T, C), Wt(c, T, C), $ && Wt(w.value, T, Oe(C))
  }

  function V(T, C, $ = !1) {
    Wt(x.value, T, Oe(C)), $ && Wt(w.value, T, Oe(C))
  }
  async function A() {
    const T = pe(se);
    if (!T) return {
      valid: !0,
      results: {},
      errors: {},
      source: "none"
    };
    o.value = !0;
    const C = fs(T) || Pt(T) ? await H_(T, c) : await W_(T, c, {
      names: O.value,
      bailsMap: R.value
    });
    return o.value = !1, C
  }
  const F = Ne((T, {
    evt: C
  }) => {
    T_(C) && C.target.submit()
  });
  bs(() => {
    L.validateSchema && L.validateSchema("silent")
  }), Te(se) && ct(se, () => {
    var T;
    (T = L.validateSchema) === null || T === void 0 || T.call(L, "validated-only")
  }), In(wo, L);

  function Z(T, C) {
    const $ = at(C) ? void 0 : C?.label,
      Y = J(te(T)) || ne(T, {
        label: $
      }),
      z = () => at(C) ? C(Wr(Y, Gr)) : C || {};

    function re() {
      var we;
      Y.touched = !0, ((we = z()
          .validateOnBlur) !== null && we !== void 0 ? we : ar()
        .validateOnBlur) && E(te(Y.path))
    }

    function ee() {
      var we;
      ((we = z()
          .validateOnInput) !== null && we !== void 0 ? we : ar()
        .validateOnInput) && yt(() => {
        E(te(Y.path))
      })
    }

    function Ce() {
      var we;
      ((we = z()
          .validateOnChange) !== null && we !== void 0 ? we : ar()
        .validateOnChange) && yt(() => {
        E(te(Y.path))
      })
    }
    const Be = le(() => {
      const we = {
        onChange: Ce,
        onInput: ee,
        onBlur: re
      };
      return at(C) ? Object.assign(Object.assign({}, we), C(Wr(Y, Gr))
        .props || {}) : C?.props ? Object.assign(Object.assign({}, we), C.props(Wr(Y, Gr))) : we
    });
    return [oe(T, () => {
      var we, et, ht;
      return (ht = (we = z()
        .validateOnModelUpdate) !== null && we !== void 0 ? we : (et = ar()) === null || et === void 0 ? void 0 : et.validateOnModelUpdate) !== null && ht !== void 0 ? ht : !0
    }), Be]
  }

  function ie(T) {
    return Array.isArray(T) ? T.map(C => oe(C, !0)) : oe(T)
  }

  function fe(T, C) {
    const [$, Y] = Z(T, C);

    function z() {
      Y.value.onBlur()
    }

    function re(Ce) {
      const Be = ds(Ce);
      B(te(T), Be, !1), Y.value.onInput()
    }

    function ee(Ce) {
      const Be = ds(Ce);
      B(te(T), Be, !1), Y.value.onChange()
    }
    return le(() => Object.assign(Object.assign({}, Y.value), {
      onBlur: z,
      onInput: re,
      onChange: ee,
      value: $.value
    }))
  }

  function $e(T, C) {
    const [$, Y] = Z(T, C), z = J(te(T));

    function re(ee) {
      $.value = ee
    }
    return le(() => {
      const ee = at(C) ? C(Wr(z, Gr)) : C || {};
      return Object.assign({
        [ee.model || "modelValue"]: $.value,
        [`onUpdate:${ee.model||"modelValue"}`]: re
      }, Y.value)
    })
  }
  const Fe = Object.assign(Object.assign({}, L), {
    values: Ki(c),
    handleReset: () => m(),
    submitForm: F
  });
  return In(E_, Fe), Fe
}

function ev(e, t, n, r) {
  const s = {
      touched: "some",
      pending: "some",
      valid: "every"
    },
    i = le(() => !ut(t, pe(n)));

  function o() {
    const a = e.value;
    return bt(s)
      .reduce((c, f) => {
        const u = s[f];
        return c[f] = a[u](d => d[f]), c
      }, {})
  }
  const l = tn(o());
  return Gd(() => {
    const a = o();
    l.touched = a.touched, l.valid = a.valid, l.pending = a.pending
  }), le(() => Object.assign(Object.assign({
    initialValues: pe(n)
  }, l), {
    valid: l.valid && !bt(r.value)
      .length,
    dirty: i.value
  }))
}

function tv(e, t, n) {
  const r = qu(),
    s = Ge(r),
    i = Ge(Oe(r));

  function o(l, a) {
    a?.force ? (s.value = Oe(l), i.value = Oe(l)) : (s.value = wr(Oe(s.value) || {}, Oe(l)), i.value = wr(Oe(i.value) || {}, Oe(l))), a?.updateFields && e.value.forEach(c => {
      if (c.touched) return;
      const u = pt(s.value, te(c.path));
      Wt(t, te(c.path), Oe(u))
    })
  }
  return {
    initialValues: s,
    originalInitialValues: i,
    setInitialValues: o
  }
}

function nv(e, t) {
  return t ? {
    valid: e.valid && t.valid,
    errors: [...e.errors, ...t.errors]
  } : e
}

function Oa(e) {
  return typeof e == "function"
}

function rv(e) {
  return typeof e == "object" && e !== null
}

function sv(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e)
}

function Sa(e) {
  if (!rv(e) || sv(e) !== "[object Object]") return !1;
  if (Object.getPrototypeOf(e) === null) return !0;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t
}

function Xu(e, t) {
  return Object.keys(t)
    .forEach(n => {
      if (Sa(t[n]) && Sa(e[n])) {
        e[n] || (e[n] = {}), Xu(e[n], t[n]);
        return
      }
      e[n] = t[n]
    }), e
}

function Ia(e, t, n) {
  const {
    prefix: r,
    suffix: s
  } = n, i = iv(r, s);
  return e.replace(i, function(o, l, a) {
    if (!l || !t.params) return a in t ? t[a] : t.params && a in t.params ? t.params[a] : `${r}${a}${s}`;
    if (!Array.isArray(t.params)) return a in t.params ? t.params[a] : `${r}${a}${s}`;
    const c = Number(l.replace(":", ""));
    return c in t.params ? t.params[c] : `${l}${r}${a}${s}`
  })
}

function Ca(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function iv(e, t) {
  const n = Ca(e),
    r = Ca(t);
  return new RegExp(`([0-9]:)?${n}((?:(?!${r}).)+)${r}`, "g")
}
class ov {
  constructor(t, n, r = {
    prefix: "{",
    suffix: "}"
  }) {
    this.container = {}, this.locale = t, this.interpolateOptions = r, this.merge(n)
  }
  resolve(t, n) {
    let r = this.format(this.locale, t, n);
    return !r && this.fallbackLocale && this.fallbackLocale !== this.locale && (r = this.format(this.fallbackLocale, t, n)), r || this.getDefaultMessage(this.locale, t)
  }
  getDefaultMessage(t, n) {
    const {
      label: r,
      name: s
    } = n;
    return `${this.resolveLabel(t,s,r)} is not valid`
  }
  getLocaleDefault(t, n) {
    var r, s, i, o, l;
    return ((i = (s = (r = this.container[t]) === null || r === void 0 ? void 0 : r.fields) === null || s === void 0 ? void 0 : s[n]) === null || i === void 0 ? void 0 : i._default) || ((l = (o = this.container[t]) === null || o === void 0 ? void 0 : o.messages) === null || l === void 0 ? void 0 : l._default)
  }
  resolveLabel(t, n, r) {
    var s, i, o, l;
    return r ? ((i = (s = this.container[t]) === null || s === void 0 ? void 0 : s.names) === null || i === void 0 ? void 0 : i[r]) || r : ((l = (o = this.container[t]) === null || o === void 0 ? void 0 : o.names) === null || l === void 0 ? void 0 : l[n]) || n
  }
  format(t, n, r) {
    var s, i, o, l, a;
    let c;
    const {
      rule: f,
      form: u,
      label: d,
      name: h
    } = n, b = this.resolveLabel(t, h, d);
    return f ? (c = ((o = (i = (s = this.container[t]) === null || s === void 0 ? void 0 : s.fields) === null || i === void 0 ? void 0 : i[h]) === null || o === void 0 ? void 0 : o[f.name]) || ((a = (l = this.container[t]) === null || l === void 0 ? void 0 : l.messages) === null || a === void 0 ? void 0 : a[f.name]), c || (c = this.getLocaleDefault(t, h) || ""), Oa(c) ? c(n) : Ia(c, Object.assign(Object.assign({}, u), {
      field: b,
      params: f.params
    }), r ?? this.interpolateOptions)) : (c = this.getLocaleDefault(t, h) || "", Oa(c) ? c(n) : Ia(c, Object.assign(Object.assign({}, u), {
      field: b
    }), r ?? this.interpolateOptions))
  }
  merge(t) {
    Xu(this.container, t)
  }
}
const Kr = new ov("en", {});

function lv(e, t, n) {
  const r = s => Kr.resolve(s, n);
  return typeof e == "string" ? (Kr.locale = e, t && Kr.merge({
    [e]: t
  }), r) : (Kr.merge(e), r)
}
const Yr = {
    en: /^[0-9A-Z]*$/i,
    cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
    da: /^[0-9A-ZÆØÅ]$/i,
    de: /^[0-9A-ZÄÖÜß]*$/i,
    es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
    fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
    it: /^[0-9A-Z\xC0-\xFF]*$/i,
    lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,
    hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
    nl: /^[0-9A-ZÉËÏÓÖÜ]*$/i,
    pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
    pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
    ru: /^[0-9А-ЯЁ]*$/i,
    kz: /^[0-9А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA]*$/i,
    sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
    sr: /^[0-9A-ZČĆŽŠĐ]*$/i,
    sv: /^[0-9A-ZÅÄÖ]*$/i,
    tr: /^[0-9A-ZÇĞİıÖŞÜ]*$/i,
    uk: /^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,
    ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
    az: /^[0-9A-ZÇƏĞİıÖŞÜ]*$/i,
    ug: /^[0-9A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ]*$/i
  },
  av = e => {
    if (e) return Array.isArray(e) ? e[0] : e.locale
  };

function Ju(e, t) {
  return Array.isArray(e) ? e[0] : e[t]
}

function kr(e) {
  return !!(e == null || e === "" || Array.isArray(e) && e.length === 0)
}
const Fo = (e, t) => {
  if (kr(e)) return !0;
  const n = av(t);
  if (Array.isArray(e)) return e.every(s => Fo(s, {
    locale: n
  }));
  const r = String(e);
  return n ? (Yr[n] || Yr.en)
    .test(r) : Object.keys(Yr)
    .some(s => Yr[s].test(r))
};

function cv(e) {
  return Array.isArray(e) ? {
    min: e[0],
    max: e[1]
  } : e
}
const xo = (e, t) => {
    if (kr(e)) return !0;
    const {
      min: n,
      max: r
    } = cv(t);
    if (Array.isArray(e)) return e.every(i => xo(i, {
      min: n,
      max: r
    }));
    const s = Number(e);
    return Number(n) <= s && Number(r) >= s
  },
  Zu = (e, t) => {
    if (kr(e)) return !0;
    const n = Ju(t, "length");
    return Array.isArray(e) ? e.every(r => Zu(r, {
      length: n
    })) : [...String(e)].length <= Number(n)
  },
  Qu = (e, t) => {
    if (kr(e)) return !0;
    const n = Ju(t, "length");
    return Array.isArray(e) ? e.every(r => Qu(r, {
      length: n
    })) : [...String(e)].length >= Number(n)
  },
  uv = /^[٠١٢٣٤٥٦٧٨٩]+$/,
  fv = /^[0-9]+$/,
  zu = e => {
    if (kr(e)) return !0;
    const t = n => {
      const r = String(n);
      return fv.test(r) || uv.test(r)
    };
    return Array.isArray(e) ? e.every(t) : t(e)
  };

function dv(e) {
  return e == null
}

function hv(e) {
  return Array.isArray(e) && e.length === 0
}
const ef = e => dv(e) || hv(e) || e === !1 ? !1 : !!String(e)
  .trim()
  .length,
  St = {
    Required: "required",
    MinLength: "minLength",
    MaxLength: "maxLength",
    Between: "between",
    Alpha_num: "alpha_num",
    Numeric: "numeric"
  },
  mv = e => {
    vn(St.Required, ef), vn(St.MinLength, Qu), vn(St.MaxLength, Zu), vn(St.Between, xo), vn(St.Alpha_num, Fo), vn(St.Numeric, zu), e.forEach(([t, n]) => vn(t, n))
  },
  pv = 1e3 * 60 * 60 * 24 * 365.25,
  Ta = "|",
  gv = (e, [t]) => e ? e.replace(/\s/g, "")
  .length == parseInt(t) : !0,
  _v = (e, t) => {
    if (e) {
      const {
        day: n,
        month: r,
        year: s
      } = e, i = parseInt(t[0]);
      if (n !== void 0 && r !== void 0 && s !== void 0) {
        const o = new Date(s, r - 1, n),
          a = (new Date()
            .getTime() - o.getTime()) / pv;
        return Math.floor(a) >= i
      }
    }
    return !0
  },
  ry = (e, t) => {
    const n = new Set(t.split(Ta));
    return n.add(e), [...n].join(Ta)
  },
  vv = e => {
    if (e) {
      const {
        day: t,
        month: n,
        year: r
      } = e;
      return e.day === void 0 && e.month === void 0 && e.year === void 0 ? !0 : t !== void 0 || n !== void 0 || r !== void 0
    }
    return !0
  },
  yv = e => {
    if (e) {
      const {
        day: t,
        month: n,
        year: r
      } = e;
      if (t !== void 0 && n !== void 0 && r !== void 0) {
        if (r < 1901 || r > new Date()
          .getFullYear() || n < 1 || n > 12) return !1;
        const s = () => n === 2 ? r % 4 === 0 ? 29 : 28 : [4, 6, 9, 11].indexOf(n) !== -1 ? 30 : 31;
        return !(t < 1 || t > s())
      }
    }
    return !0
  },
  Qt = Object.freeze(window.__TENANT_CONFIG__),
  bn = i_({
    legacy: !1,
    locale: Qt.locale,
    fallbackLocale: Qt.locale,
    globalInjection: !0,
    messages: {
      [Qt.locale]: window.__I18N_MESSAGES__
    }
  }),
  {
    t: Ht
  } = bn.global;
mv([
  ["numeric", zu],
  ["between", xo],
  ["required", ef],
  ["exactLength", gv],
  ["legalAge", _v],
  ["birthDate", yv],
  ["birthDateRequired", vv],
  ["alpha_num", Fo]
]);
M_({
  generateMessage: lv(Qt.locale, {
    messages: {
      [St.Between]: e => {
        const [t, n] = e.rule?.params;
        return Ht("addressForm.errors.valueNotInRange", {
          min: t,
          max: n
        })
      },
      [St.MinLength]: e => {
        const [t] = e.rule?.params;
        return Ht("addressForm.errors.minLength", {
          min: t
        })
      },
      [St.MaxLength]: e => {
        const [t] = e.rule?.params;
        return Ht("addressForm.errors.maxLength", {
          max: t
        })
      },
      exactLength: e => {
        const [t] = e.rule?.params;
        return Ht("addressForm.errors.exactLength", {
          length: t
        })
      },
      legalAge: e => {
        const [t] = e.rule?.params;
        return Ht("addressForm.errors.legalAge", {
          min: t
        })
      },
      birthDate: () => Ht("addressForm.errors.birthDate"),
      [St.Required]: e => {
        const t = e.field;
        return Ht("addressForm.errors.required", {
          fieldName: t
        })
      },
      [St.Alpha_num]: e => {
        const t = e.field;
        return Ht("addressForm.errors.alpha_num", {
          fieldName: t
        })
      },
      [St.Numeric]: e => {
        const t = e.field;
        return Ht("addressForm.errors.numeric", {
          fieldName: t
        })
      }
    }
  })
});
const bv = {
    class: "layout-selfservice-wrapper"
  },
  Ev = {
    class: "layout-selfservice"
  },
  Av = Nn({
    __name: "App",
    setup(e) {
      function t(n) {
        document.documentElement.lang = n
      }
      return cc(() => {
        t(Qt.locale)
      }), (n, r) => (Ir(), oh("div", bv, [mo("main", Ev, [Ue(pe(cu))])]))
    }
  }),
  Ov = "modulepreload",
  Sv = function(e) {
    return "/css/manage-account/" + e
  },
  Ra = {},
  ir = function(t, n, r) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
      let a = function(c) {
        return Promise.all(c.map(f => Promise.resolve(f)
          .then(u => ({
            status: "fulfilled",
            value: u
          }), u => ({
            status: "rejected",
            reason: u
          }))))
      };
      document.getElementsByTagName("link");
      const o = document.querySelector("meta[property=csp-nonce]"),
        l = o?.nonce || o?.getAttribute("nonce");
      s = a(n.map(c => {
        if (c = Sv(c), c in Ra) return;
        Ra[c] = !0;
        const f = c.endsWith(".css"),
          u = f ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${c}"]${u}`)) return;
        const d = document.createElement("link");
        if (d.rel = f ? "stylesheet" : Ov, f || (d.as = "script"), d.crossOrigin = "", d.href = c, l && d.setAttribute("nonce", l), document.head.appendChild(d), f) return new Promise((h, b) => {
          d.addEventListener("load", h), d.addEventListener("error", () => b(new Error(`Unable to preload CSS for ${c}`)))
        })
      }))
    }

    function i(o) {
      const l = new Event("vite:preloadError", {
        cancelable: !0
      });
      if (l.payload = o, window.dispatchEvent(l), !l.defaultPrevented) throw o
    }
    return s.then(o => {
      for (const l of o || []) l.status === "rejected" && i(l.reason);
      return t()
        .catch(i)
    })
  },
  Iv = "authToken",
  sy = "/user-api",
  Cv = "/user-api/login",
  iy = "/address-provisioning/api-ape/v2/",
  oy = "/address-api/address",
  ly = "/address-api/address/delivery/selected/",
  ay = "/address-api/address/delivery",
  cy = "/address-api/address/delivery/",
  uy = "/address-api/address/invoice",
  fy = "/address-api/config/countries";

function dy() {
  const e = [];
  let t = "<br>";
  return {
    addLine(...n) {
      const r = Array.isArray(n) ? n.join(" ") : n;
      return e.push(r), this
    },
    withSeparator(n) {
      return t = n, this
    },
    format() {
      return e.filter(n => n !== " ")
        .join(t)
    }
  }
}

function Tv(e, t) {
  window.location.href = `${Cv}?redirect=${encodeURIComponent(e).replace(/=/g,"")}` + (t ? `&max_age=${t}` : "")
}

function Rv() {
  return {
    getCookie(e) {
      let t = null;
      if (document.cookie && document.cookie !== "") {
        const n = document.cookie.split(";");
        for (let r of n)
          if (r = r.trim(), r.substring(0, e.length + 1) === e + "=") {
            t = decodeURIComponent(r.substring(e.length + 1)
              .replace(/\+/g, " "));
            break
          }
      }
      return t
    }
  }
}
var kn = (e => (e.ACCESS_DATA = "AccessData", e.ADDRESSES = "Addresses", e.DELIVERY_ADDRESS = "DeliveryAddress", e.INVOICE_ADDRESS = "InvoiceAddress", e))(kn || {});

function Nv(e, t, n) {
  tf(e, t, n, Qt.addDeliveryAddressMaxAge)
}

function qr(e, t, n) {
  tf(e, t, n)
}

function tf(e, t, n, r) {
  Rv()
    .getCookie(Iv) ? n() : Tv(document.location.href, r)
}
const Pv = Qt.retailCountries.includes(Qt.country) && Qt.featureToggle.isRetailCountriesEnabled ? [{
    path: "/access-data",
    name: kn.ACCESS_DATA,
    component: () => ir(() => import("./AccessData-BDWJV9l9.js"), __vite__mapDeps([0, 1, 2, 3, 4])),
    props: !0,
    meta: {
      title: bn.global.t("accountSettings.contentTitle")
    },
    beforeEnter: [qr]
  }, {
    path: "/:pathMatch(.*)*",
    redirect: () => ({
      path: "/access-data"
    })
  }] : [{
    path: "/access-data",
    name: kn.ACCESS_DATA,
    component: () => ir(() => import("./AccessData-BDWJV9l9.js"), __vite__mapDeps([0, 1, 2, 3, 4])),
    props: !0,
    meta: {
      title: bn.global.t("accountSettings.contentTitle")
    },
    beforeEnter: [qr]
  }, {
    path: "/addresses",
    name: kn.ADDRESSES,
    component: () => ir(() => import("./AddressData-DY263Aaz.js"), __vite__mapDeps([5, 1, 2, 3, 6])),
    props: !0,
    meta: {
      title: bn.global.t("addressData.pageTitle")
    },
    beforeEnter: [qr]
  }, {
    path: "/addresses/delivery",
    name: kn.DELIVERY_ADDRESS,
    component: () => ir(() => import("./DeliveryAddressPage-BnT0t2pp.js"), __vite__mapDeps([7, 8, 2, 9, 10])),
    props: !0,
    meta: {
      title: bn.global.t("addressData.deliveryTitle")
    },
    beforeEnter: [Nv]
  }, {
    path: "/addresses/invoice",
    name: kn.INVOICE_ADDRESS,
    component: () => ir(() => import("./InvoiceAddressPage-ComrHVnu.js"), __vite__mapDeps([11, 8, 2, 9, 12])),
    props: !0,
    meta: {
      title: bn.global.t("addressData.invoiceTitle")
    },
    beforeEnter: [qr]
  }],
  nf = pp({
    history: qm("/css/manage-account/"),
    routes: Pv
  });
nf.afterEach(e => {
  document.title = e.meta.title ? e.meta.title : ""
});
const Ls = nm(Av);
Ls.use(im());
Ls.use(nf);
Ls.use(bn);
Ls.mount("#app");
export {
  xv as $, ay as A, dy as B, ny as C, Fv as D, ct as E, mt as F, bs as G, Qv as H, ch as I, ry as J, uy as K, gs as L, Ct as M, Mv as N, ft as O, yt as P, Bv as Q, Gd as R, Yv as S, jv as T, sy as U, cc as V, uc as W, Dv as X, Lv as Y, ty as Z, ir as _, mo as a, Te as a0, Ht as a1, Rv as a2, Tv as a3, Iv as a4, oy as a5, fy as a6, iy as a7, te as a8, lo as a9, zv as aa, wv as ab, Uv as ac, Zv as ad, Xv as ae, Jv as af, to as ag, hi as b, oh as c, Nn as d, le as e, kv as f, qv as g, uh as h, $v as i, Wv as j, Kv as k, Po as l, Hv as m, no as n, Ir as o, Gv as p, Qt as q, Vv as r, Ue as s, ld as t, pe as u, ey as v, ud as w, Ge as x, ly as y, cy as z
};