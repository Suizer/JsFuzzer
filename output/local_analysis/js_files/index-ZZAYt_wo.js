const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/checkout-handover-page-BpjK8phP.js", "assets/localeUtils-B11qAgy2.js", "assets/checkout-handover-page--hXsQu_c.css", "assets/checkout-handover-flashsales-page-BKIk4Fhs.js", "assets/checkout-handover-flashsales-page-CLcglAZc.css", "assets/login-view-D6CoqNaf.js", "assets/AccountBenefits-D4O77GJB.js", "assets/dynamic-asset.util-Dx_OVdkr.js", "assets/AccountBenefits-CpCKkWYK.css", "assets/BaseInput-lTUDQyun.js", "assets/BaseInput-jJGVBX5x.css", "assets/login-view-DrFDS5yK.css", "assets/checkout-view-Df0c0iiS.js", "assets/TheDeliveryAndBillingAddressSummary-BnpEwh2A.js", "assets/TheDeliveryAndBillingAddressSummary-CXXkyCG_.css", "assets/OdsDialog-B2COzwGZ.js", "assets/OdsDialog-D7_kaE_n.css", "assets/checkout-view-DaFVzvvm.css", "assets/checkout-flow-view-CObZW5nY.js", "assets/checkout-flow-view-Bae2rTF8.css", "assets/checkout-success-view-DOHhuhxS.js", "assets/error-view-Cqog9-Zj.js", "assets/error-view-Cmk_4rW5.css", "assets/checkout-success-view-BZfi6V8Y.css"]))) => i.map(i => d[i]);
(function() {
  const t = document.createElement("link")
    .relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver(s => {
      for (const o of s)
        if (o.type === "childList")
          for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    })
    .observe(document, {
      childList: !0,
      subtree: !0
    });

  function n(s) {
    const o = {};
    return s.integrity && (o.integrity = s.integrity), s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? o.credentials = "include" : s.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
  }

  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const o = n(s);
    fetch(s.href, o)
  }
})();
const FE = "modulepreload",
  BE = function(e) {
    return "/otc/" + e
  },
  kd = {},
  _ = function(t, n, r) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
      let c = function(l) {
        return Promise.all(l.map(u => Promise.resolve(u)
          .then(d => ({
            status: "fulfilled",
            value: d
          }), d => ({
            status: "rejected",
            reason: d
          }))))
      };
      document.getElementsByTagName("link");
      const i = document.querySelector("meta[property=csp-nonce]"),
        a = i?.nonce || i?.getAttribute("nonce");
      s = c(n.map(l => {
        if (l = BE(l), l in kd) return;
        kd[l] = !0;
        const u = l.endsWith(".css"),
          d = u ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${l}"]${d}`)) return;
        const g = document.createElement("link");
        if (g.rel = u ? "stylesheet" : FE, u || (g.as = "script"), g.crossOrigin = "", g.href = l, a && g.setAttribute("nonce", a), document.head.appendChild(g), u) return new Promise((p, m) => {
          g.addEventListener("load", p), g.addEventListener("error", () => m(new Error(`Unable to preload CSS for ${l}`)))
        })
      }))
    }

    function o(i) {
      const a = new Event("vite:preloadError", {
        cancelable: !0
      });
      if (a.payload = i, window.dispatchEvent(a), !a.defaultPrevented) throw i
    }
    return s.then(i => {
      for (const a of i || []) a.status === "rejected" && o(a.reason);
      return t()
        .catch(o)
    })
  };

function Eu(e) {
  const t = Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return n => n in t
}
const Je = {},
  Hs = [],
  Un = () => {},
  fm = () => !1,
  Ma = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  yu = e => e.startsWith("onUpdate:"),
  St = Object.assign,
  bu = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
  },
  UE = Object.prototype.hasOwnProperty,
  ot = (e, t) => UE.call(e, t),
  De = Array.isArray,
  qs = e => _i(e) === "[object Map]",
  Fa = e => _i(e) === "[object Set]",
  xd = e => _i(e) === "[object Date]",
  Ve = e => typeof e == "function",
  bt = e => typeof e == "string",
  Hn = e => typeof e == "symbol",
  nt = e => e !== null && typeof e == "object",
  pm = e => (nt(e) || Ve(e)) && Ve(e.then) && Ve(e.catch),
  _m = Object.prototype.toString,
  _i = e => _m.call(e),
  jE = e => _i(e)
  .slice(8, -1),
  mm = e => _i(e) === "[object Object]",
  Ba = e => bt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  xo = Eu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
  Ua = e => {
    const t = Object.create(null);
    return (n => t[n] || (t[n] = e(n)))
  },
  HE = /-\w/g,
  On = Ua(e => e.replace(HE, t => t.slice(1)
    .toUpperCase())),
  qE = /\B([A-Z])/g,
  kr = Ua(e => e.replace(qE, "-$1")
    .toLowerCase()),
  ja = Ua(e => e.charAt(0)
    .toUpperCase() + e.slice(1)),
  Pc = Ua(e => e ? `on${ja(e)}` : ""),
  pn = (e, t) => !Object.is(e, t),
  Zi = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t)
  },
  hm = (e, t, n, r = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: r,
      value: n
    })
  },
  WE = e => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t
  },
  GE = e => {
    const t = bt(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
  };
let Nd;
const Ha = () => Nd || (Nd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function mi(e) {
  if (De(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = bt(r) ? XE(r) : mi(r);
      if (s)
        for (const o in s) t[o] = s[o]
    }
    return t
  } else if (bt(e) || nt(e)) return e
}
const KE = /;(?![^(]*\))/g,
  YE = /:([^]+)/,
  zE = /\/\*[^]*?\*\//g;

function XE(e) {
  const t = {};
  return e.replace(zE, "")
    .split(KE)
    .forEach(n => {
      if (n) {
        const r = n.split(YE);
        r.length > 1 && (t[r[0].trim()] = r[1].trim())
      }
    }), t
}

function we(e) {
  let t = "";
  if (bt(e)) t = e;
  else if (De(e))
    for (let n = 0; n < e.length; n++) {
      const r = we(e[n]);
      r && (t += r + " ")
    } else if (nt(e))
      for (const n in e) e[n] && (t += n + " ");
  return t.trim()
}

function wM(e) {
  if (!e) return null;
  let {
    class: t,
    style: n
  } = e;
  return t && !bt(t) && (e.class = we(t)), n && (e.style = mi(n)), e
}
const JE = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  QE = Eu(JE);

function gm(e) {
  return !!e || e === ""
}

function ZE(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++) n = As(e[r], t[r]);
  return n
}

function As(e, t) {
  if (e === t) return !0;
  let n = xd(e),
    r = xd(t);
  if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Hn(e), r = Hn(t), n || r) return e === t;
  if (n = De(e), r = De(t), n || r) return n && r ? ZE(e, t) : !1;
  if (n = nt(e), r = nt(t), n || r) {
    if (!n || !r) return !1;
    const s = Object.keys(e)
      .length,
      o = Object.keys(t)
      .length;
    if (s !== o) return !1;
    for (const i in e) {
      const a = e.hasOwnProperty(i),
        c = t.hasOwnProperty(i);
      if (a && !c || !a && c || !As(e[i], t[i])) return !1
    }
  }
  return String(e) === String(t)
}

function vm(e, t) {
  return e.findIndex(n => As(n, t))
}
const Em = e => !!(e && e.__v_isRef === !0),
  Ce = e => bt(e) ? e : e == null ? "" : De(e) || nt(e) && (e.toString === _m || !Ve(e.toString)) ? Em(e) ? Ce(e.value) : JSON.stringify(e, ym, 2) : String(e),
  ym = (e, t) => Em(t) ? ym(e, t.value) : qs(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, s], o) => (n[Cc(r, o) + " =>"] = s, n), {})
  } : Fa(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(n => Cc(n))
  } : Hn(t) ? Cc(t) : nt(t) && !De(t) && !mm(t) ? String(t) : t,
  Cc = (e, t = "") => {
    var n;
    return Hn(e) ? `Symbol(${(n=e.description)!=null?n:t})` : e
  };

function ey(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e)
}
let Gt;
class bm {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Gt, !t && Gt && (this.index = (Gt.scopes || (Gt.scopes = []))
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
      const n = Gt;
      try {
        return Gt = this, t()
      } finally {
        Gt = n
      }
    }
  }
  on() {
    ++this._on === 1 && (this.prevScope = Gt, Gt = this)
  }
  off() {
    this._on > 0 && --this._on === 0 && (Gt = this.prevScope, this.prevScope = void 0)
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

function Au(e) {
  return new bm(e)
}

function hi() {
  return Gt
}

function Tu(e, t = !1) {
  Gt && Gt.cleanups.push(e)
}
let _t;
const Lc = new WeakSet;
class Am {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Gt && Gt.active && Gt.effects.push(this)
  }
  pause() {
    this.flags |= 64
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Lc.has(this) && (Lc.delete(this), this.trigger()))
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Om(this)
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, $d(this), Im(this);
    const t = _t,
      n = jn;
    _t = this, jn = !0;
    try {
      return this.fn()
    } finally {
      Sm(this), _t = t, jn = n, this.flags &= -3
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Su(t);
      this.deps = this.depsTail = void 0, $d(this), this.onStop && this.onStop(), this.flags &= -2
    }
  }
  trigger() {
    this.flags & 64 ? Lc.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
  }
  runIfDirty() {
    El(this) && this.run()
  }
  get dirty() {
    return El(this)
  }
}
let Tm = 0,
  No, $o;

function Om(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = $o, $o = e;
    return
  }
  e.next = No, No = e
}

function Ou() {
  Tm++
}

function Iu() {
  if (--Tm > 0) return;
  if ($o) {
    let t = $o;
    for ($o = void 0; t;) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n
    }
  }
  let e;
  for (; No;) {
    let t = No;
    for (No = void 0; t;) {
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

function Im(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t
}

function Sm(e) {
  let t, n = e.depsTail,
    r = n;
  for (; r;) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), Su(r), ty(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s
  }
  e.deps = t, e.depsTail = n
}

function El(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Rm(t.dep.computed) || t.dep.version !== t.version)) return !0;
  return !!e._dirty
}

function Rm(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Wo) || (e.globalVersion = Wo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !El(e)))) return;
  e.flags |= 2;
  const t = e.dep,
    n = _t,
    r = jn;
  _t = e, jn = !0;
  try {
    Im(e);
    const s = e.fn(e._value);
    (t.version === 0 || pn(s, e._value)) && (e.flags |= 128, e._value = s, t.version++)
  } catch (s) {
    throw t.version++, s
  } finally {
    _t = n, jn = r, Sm(e), e.flags &= -3
  }
}

function Su(e, t = !1) {
  const {
    dep: n,
    prevSub: r,
    nextSub: s
  } = e;
  if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep) Su(o, !0)
  }!t && !--n.sc && n.map && n.map.delete(n.key)
}

function ty(e) {
  const {
    prevDep: t,
    nextDep: n
  } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0)
}
let jn = !0;
const wm = [];

function Lr() {
  wm.push(jn), jn = !1
}

function Dr() {
  const e = wm.pop();
  jn = e === void 0 ? !0 : e
}

function $d(e) {
  const {
    cleanup: t
  } = e;
  if (e.cleanup = void 0, t) {
    const n = _t;
    _t = void 0;
    try {
      t()
    } finally {
      _t = n
    }
  }
}
let Wo = 0;
class ny {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
  }
}
class qa {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0
  }
  track(t) {
    if (!_t || !jn || _t === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== _t) n = this.activeLink = new ny(_t, this), _t.deps ? (n.prevDep = _t.depsTail, _t.depsTail.nextDep = n, _t.depsTail = n) : _t.deps = _t.depsTail = n, Pm(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = _t.depsTail, n.nextDep = void 0, _t.depsTail.nextDep = n, _t.depsTail = n, _t.deps === n && (_t.deps = r)
    }
    return n
  }
  trigger(t) {
    this.version++, Wo++, this.notify(t)
  }
  notify(t) {
    Ou();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify()
    } finally {
      Iu()
    }
  }
}

function Pm(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep) Pm(r)
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e
  }
}
const ga = new WeakMap,
  vs = Symbol(""),
  yl = Symbol(""),
  Go = Symbol("");

function Yt(e, t, n) {
  if (jn && _t) {
    let r = ga.get(e);
    r || ga.set(e, r = new Map);
    let s = r.get(n);
    s || (r.set(n, s = new qa), s.map = r, s.key = n), s.track()
  }
}

function Ar(e, t, n, r, s, o) {
  const i = ga.get(e);
  if (!i) {
    Wo++;
    return
  }
  const a = c => {
    c && c.trigger()
  };
  if (Ou(), t === "clear") i.forEach(a);
  else {
    const c = De(e),
      l = c && Ba(n);
    if (c && n === "length") {
      const u = Number(r);
      i.forEach((d, g) => {
        (g === "length" || g === Go || !Hn(g) && g >= u) && a(d)
      })
    } else switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), l && a(i.get(Go)), t) {
      case "add":
        c ? l && a(i.get("length")) : (a(i.get(vs)), qs(e) && a(i.get(yl)));
        break;
      case "delete":
        c || (a(i.get(vs)), qs(e) && a(i.get(yl)));
        break;
      case "set":
        qs(e) && a(i.get(vs));
        break
    }
  }
  Iu()
}

function ry(e, t) {
  const n = ga.get(e);
  return n && n.get(t)
}

function Ns(e) {
  const t = qe(e);
  return t === e ? t : (Yt(t, "iterate", Go), An(e) ? t : t.map(qn))
}

function Wa(e) {
  return Yt(e = qe(e), "iterate", Go), e
}

function qr(e, t) {
  return fr(e) ? zs(lr(e) ? qn(t) : t) : qn(t)
}
const sy = {
  __proto__: null,
  [Symbol.iterator]() {
    return Dc(this, Symbol.iterator, e => qr(this, e))
  },
  concat(...e) {
    return Ns(this)
      .concat(...e.map(t => De(t) ? Ns(t) : t))
  },
  entries() {
    return Dc(this, "entries", e => (e[1] = qr(this, e[1]), e))
  },
  every(e, t) {
    return hr(this, "every", e, t, void 0, arguments)
  },
  filter(e, t) {
    return hr(this, "filter", e, t, n => n.map(r => qr(this, r)), arguments)
  },
  find(e, t) {
    return hr(this, "find", e, t, n => qr(this, n), arguments)
  },
  findIndex(e, t) {
    return hr(this, "findIndex", e, t, void 0, arguments)
  },
  findLast(e, t) {
    return hr(this, "findLast", e, t, n => qr(this, n), arguments)
  },
  findLastIndex(e, t) {
    return hr(this, "findLastIndex", e, t, void 0, arguments)
  },
  forEach(e, t) {
    return hr(this, "forEach", e, t, void 0, arguments)
  },
  includes(...e) {
    return kc(this, "includes", e)
  },
  indexOf(...e) {
    return kc(this, "indexOf", e)
  },
  join(e) {
    return Ns(this)
      .join(e)
  },
  lastIndexOf(...e) {
    return kc(this, "lastIndexOf", e)
  },
  map(e, t) {
    return hr(this, "map", e, t, void 0, arguments)
  },
  pop() {
    return _o(this, "pop")
  },
  push(...e) {
    return _o(this, "push", e)
  },
  reduce(e, ...t) {
    return Vd(this, "reduce", e, t)
  },
  reduceRight(e, ...t) {
    return Vd(this, "reduceRight", e, t)
  },
  shift() {
    return _o(this, "shift")
  },
  some(e, t) {
    return hr(this, "some", e, t, void 0, arguments)
  },
  splice(...e) {
    return _o(this, "splice", e)
  },
  toReversed() {
    return Ns(this)
      .toReversed()
  },
  toSorted(e) {
    return Ns(this)
      .toSorted(e)
  },
  toSpliced(...e) {
    return Ns(this)
      .toSpliced(...e)
  },
  unshift(...e) {
    return _o(this, "unshift", e)
  },
  values() {
    return Dc(this, "values", e => qr(this, e))
  }
};

function Dc(e, t, n) {
  const r = Wa(e),
    s = r[t]();
  return r !== e && !An(e) && (s._next = s.next, s.next = () => {
    const o = s._next();
    return o.done || (o.value = n(o.value)), o
  }), s
}
const oy = Array.prototype;

function hr(e, t, n, r, s, o) {
  const i = Wa(e),
    a = i !== e && !An(e),
    c = i[t];
  if (c !== oy[t]) {
    const d = c.apply(e, o);
    return a ? qn(d) : d
  }
  let l = n;
  i !== e && (a ? l = function(d, g) {
    return n.call(this, qr(e, d), g, e)
  } : n.length > 2 && (l = function(d, g) {
    return n.call(this, d, g, e)
  }));
  const u = c.call(i, l, r);
  return a && s ? s(u) : u
}

function Vd(e, t, n, r) {
  const s = Wa(e);
  let o = n;
  return s !== e && (An(e) ? n.length > 3 && (o = function(i, a, c) {
    return n.call(this, i, a, c, e)
  }) : o = function(i, a, c) {
    return n.call(this, i, qr(e, a), c, e)
  }), s[t](o, ...r)
}

function kc(e, t, n) {
  const r = qe(e);
  Yt(r, "iterate", Go);
  const s = r[t](...n);
  return (s === -1 || s === !1) && Ga(n[0]) ? (n[0] = qe(n[0]), r[t](...n)) : s
}

function _o(e, t, n = []) {
  Lr(), Ou();
  const r = qe(e)[t].apply(e, n);
  return Iu(), Dr(), r
}
const iy = Eu("__proto__,__v_isRef,__isVue"),
  Cm = new Set(Object.getOwnPropertyNames(Symbol)
    .filter(e => e !== "arguments" && e !== "caller")
    .map(e => Symbol[e])
    .filter(Hn));

function ay(e) {
  Hn(e) || (e = String(e));
  const t = qe(this);
  return Yt(t, "has", e), t.hasOwnProperty(e)
}
class Lm {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly,
      o = this._isShallow;
    if (n === "__v_isReactive") return !s;
    if (n === "__v_isReadonly") return s;
    if (n === "__v_isShallow") return o;
    if (n === "__v_raw") return r === (s ? o ? gy : Nm : o ? xm : km)
      .get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = De(t);
    if (!s) {
      let c;
      if (i && (c = sy[n])) return c;
      if (n === "hasOwnProperty") return ay
    }
    const a = Reflect.get(t, n, ft(t) ? t : r);
    if ((Hn(n) ? Cm.has(n) : iy(n)) || (s || Yt(t, "get", n), o)) return a;
    if (ft(a)) {
      const c = i && Ba(n) ? a : a.value;
      return s && nt(c) ? Ko(c) : c
    }
    return nt(a) ? s ? Ko(a) : dr(a) : a
  }
}
class Dm extends Lm {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, r, s) {
    let o = t[n];
    const i = De(t) && Ba(n);
    if (!this._isShallow) {
      const l = fr(o);
      if (!An(r) && !fr(r) && (o = qe(o), r = qe(r)), !i && ft(o) && !ft(r)) return l || (o.value = r), !0
    }
    const a = i ? Number(n) < t.length : ot(t, n),
      c = Reflect.set(t, n, r, ft(t) ? t : s);
    return t === qe(s) && (a ? pn(r, o) && Ar(t, "set", n, r) : Ar(t, "add", n, r)), c
  }
  deleteProperty(t, n) {
    const r = ot(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && Ar(t, "delete", n, void 0), s
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Hn(n) || !Cm.has(n)) && Yt(t, "has", n), r
  }
  ownKeys(t) {
    return Yt(t, "iterate", De(t) ? "length" : vs), Reflect.ownKeys(t)
  }
}
class cy extends Lm {
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
const ly = new Dm,
  uy = new cy,
  dy = new Dm(!0);
const bl = e => e,
  ki = e => Reflect.getPrototypeOf(e);

function fy(e, t, n) {
  return function(...r) {
    const s = this.__v_raw,
      o = qe(s),
      i = qs(o),
      a = e === "entries" || e === Symbol.iterator && i,
      c = e === "keys" && i,
      l = s[e](...r),
      u = n ? bl : t ? zs : qn;
    return !t && Yt(o, "iterate", c ? yl : vs), St(Object.create(l), {
      next() {
        const {
          value: d,
          done: g
        } = l.next();
        return g ? {
          value: d,
          done: g
        } : {
          value: a ? [u(d[0]), u(d[1])] : u(d),
          done: g
        }
      }
    })
  }
}

function xi(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this
  }
}

function py(e, t) {
  const n = {
    get(s) {
      const o = this.__v_raw,
        i = qe(o),
        a = qe(s);
      e || (pn(s, a) && Yt(i, "get", s), Yt(i, "get", a));
      const {
        has: c
      } = ki(i), l = t ? bl : e ? zs : qn;
      if (c.call(i, s)) return l(o.get(s));
      if (c.call(i, a)) return l(o.get(a));
      o !== i && o.get(s)
    },
    get size() {
      const s = this.__v_raw;
      return !e && Yt(qe(s), "iterate", vs), s.size
    },
    has(s) {
      const o = this.__v_raw,
        i = qe(o),
        a = qe(s);
      return e || (pn(s, a) && Yt(i, "has", s), Yt(i, "has", a)), s === a ? o.has(s) : o.has(s) || o.has(a)
    },
    forEach(s, o) {
      const i = this,
        a = i.__v_raw,
        c = qe(a),
        l = t ? bl : e ? zs : qn;
      return !e && Yt(c, "iterate", vs), a.forEach((u, d) => s.call(o, l(u), l(d), i))
    }
  };
  return St(n, e ? {
    add: xi("add"),
    set: xi("set"),
    delete: xi("delete"),
    clear: xi("clear")
  } : {
    add(s) {
      !t && !An(s) && !fr(s) && (s = qe(s));
      const o = qe(this);
      return ki(o)
        .has.call(o, s) || (o.add(s), Ar(o, "add", s, s)), this
    },
    set(s, o) {
      !t && !An(o) && !fr(o) && (o = qe(o));
      const i = qe(this),
        {
          has: a,
          get: c
        } = ki(i);
      let l = a.call(i, s);
      l || (s = qe(s), l = a.call(i, s));
      const u = c.call(i, s);
      return i.set(s, o), l ? pn(o, u) && Ar(i, "set", s, o) : Ar(i, "add", s, o), this
    },
    delete(s) {
      const o = qe(this),
        {
          has: i,
          get: a
        } = ki(o);
      let c = i.call(o, s);
      c || (s = qe(s), c = i.call(o, s)), a && a.call(o, s);
      const l = o.delete(s);
      return c && Ar(o, "delete", s, void 0), l
    },
    clear() {
      const s = qe(this),
        o = s.size !== 0,
        i = s.clear();
      return o && Ar(s, "clear", void 0, void 0), i
    }
  }), ["keys", "values", "entries", Symbol.iterator].forEach(s => {
    n[s] = fy(s, e, t)
  }), n
}

function Ru(e, t) {
  const n = py(e, t);
  return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(ot(n, s) && s in r ? n : r, s, o)
}
const _y = {
    get: Ru(!1, !1)
  },
  my = {
    get: Ru(!1, !0)
  },
  hy = {
    get: Ru(!0, !1)
  };
const km = new WeakMap,
  xm = new WeakMap,
  Nm = new WeakMap,
  gy = new WeakMap;

function vy(e) {
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

function Ey(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : vy(jE(e))
}

function dr(e) {
  return fr(e) ? e : wu(e, !1, ly, _y, km)
}

function $m(e) {
  return wu(e, !1, dy, my, xm)
}

function Ko(e) {
  return wu(e, !0, uy, hy, Nm)
}

function wu(e, t, n, r, s) {
  if (!nt(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const o = Ey(e);
  if (o === 0) return e;
  const i = s.get(e);
  if (i) return i;
  const a = new Proxy(e, o === 2 ? r : n);
  return s.set(e, a), a
}

function lr(e) {
  return fr(e) ? lr(e.__v_raw) : !!(e && e.__v_isReactive)
}

function fr(e) {
  return !!(e && e.__v_isReadonly)
}

function An(e) {
  return !!(e && e.__v_isShallow)
}

function Ga(e) {
  return e ? !!e.__v_raw : !1
}

function qe(e) {
  const t = e && e.__v_raw;
  return t ? qe(t) : e
}

function Pu(e) {
  return !ot(e, "__v_skip") && Object.isExtensible(e) && hm(e, "__v_skip", !0), e
}
const qn = e => nt(e) ? dr(e) : e,
  zs = e => nt(e) ? Ko(e) : e;

function ft(e) {
  return e ? e.__v_isRef === !0 : !1
}

function ce(e) {
  return Vm(e, !1)
}

function mn(e) {
  return Vm(e, !0)
}

function Vm(e, t) {
  return ft(e) ? e : new yy(e, t)
}
class yy {
  constructor(t, n) {
    this.dep = new qa, this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : qe(t), this._value = n ? t : qn(t), this.__v_isShallow = n
  }
  get value() {
    return this.dep.track(), this._value
  }
  set value(t) {
    const n = this._rawValue,
      r = this.__v_isShallow || An(t) || fr(t);
    t = r ? t : qe(t), pn(t, n) && (this._rawValue = t, this._value = r ? t : qn(t), this.dep.trigger())
  }
}

function F(e) {
  return ft(e) ? e.value : e
}

function Tn(e) {
  return Ve(e) ? e() : F(e)
}
const by = {
  get: (e, t, n) => t === "__v_raw" ? e : F(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return ft(s) && !ft(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r)
  }
};

function Mm(e) {
  return lr(e) ? e : new Proxy(e, by)
}
class Ay {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new qa,
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

function Fm(e) {
  return new Ay(e)
}

function Ty(e) {
  const t = De(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Bm(e, n);
  return t
}
class Oy {
  constructor(t, n, r) {
    this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0, this._value = void 0, this._raw = qe(t);
    let s = !0,
      o = t;
    if (!De(t) || !Ba(String(n)))
      do s = !Ga(o) || An(o); while (s && (o = o.__v_raw));
    this._shallow = s
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = F(t)), this._value = t === void 0 ? this._defaultValue : t
  }
  set value(t) {
    if (this._shallow && ft(this._raw[this._key])) {
      const n = this._object[this._key];
      if (ft(n)) {
        n.value = t;
        return
      }
    }
    this._object[this._key] = t
  }
  get dep() {
    return ry(this._raw, this._key)
  }
}
class Iy {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0
  }
  get value() {
    return this._value = this._getter()
  }
}

function Sy(e, t, n) {
  return ft(e) ? e : Ve(e) ? new Iy(e) : nt(e) && arguments.length > 1 ? Bm(e, t, n) : ce(e)
}

function Bm(e, t, n) {
  return new Oy(e, t, n)
}
class Ry {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new qa(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Wo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && _t !== this) return Om(this, !0), !0
  }
  get value() {
    const t = this.dep.track();
    return Rm(this), t && (t.version = this.dep.version), this._value
  }
  set value(t) {
    this.setter && this.setter(t)
  }
}

function wy(e, t, n = !1) {
  let r, s;
  return Ve(e) ? r = e : (r = e.get, s = e.set), new Ry(r, s, n)
}
const Ni = {},
  va = new WeakMap;
let ds;

function Py(e, t = !1, n = ds) {
  if (n) {
    let r = va.get(n);
    r || va.set(n, r = []), r.push(e)
  }
}

function Cy(e, t, n = Je) {
  const {
    immediate: r,
    deep: s,
    once: o,
    scheduler: i,
    augmentJob: a,
    call: c
  } = n, l = O => s ? O : An(O) || s === !1 || s === 0 ? Tr(O, 1) : Tr(O);
  let u, d, g, p, m = !1,
    E = !1;
  if (ft(e) ? (d = () => e.value, m = An(e)) : lr(e) ? (d = () => l(e), m = !0) : De(e) ? (E = !0, m = e.some(O => lr(O) || An(O)), d = () => e.map(O => {
      if (ft(O)) return O.value;
      if (lr(O)) return l(O);
      if (Ve(O)) return c ? c(O, 2) : O()
    })) : Ve(e) ? t ? d = c ? () => c(e, 2) : e : d = () => {
      if (g) {
        Lr();
        try {
          g()
        } finally {
          Dr()
        }
      }
      const O = ds;
      ds = u;
      try {
        return c ? c(e, 3, [p]) : e(p)
      } finally {
        ds = O
      }
    } : d = Un, t && s) {
    const O = d,
      L = s === !0 ? 1 / 0 : s;
    d = () => Tr(O(), L)
  }
  const b = hi(),
    v = () => {
      u.stop(), b && b.active && bu(b.effects, u)
    };
  if (o && t) {
    const O = t;
    t = (...L) => {
      O(...L), v()
    }
  }
  let A = E ? new Array(e.length)
    .fill(Ni) : Ni;
  const R = O => {
    if (!(!(u.flags & 1) || !u.dirty && !O))
      if (t) {
        const L = u.run();
        if (s || m || (E ? L.some((P, D) => pn(P, A[D])) : pn(L, A))) {
          g && g();
          const P = ds;
          ds = u;
          try {
            const D = [L, A === Ni ? void 0 : E && A[0] === Ni ? [] : A, p];
            A = L, c ? c(t, 3, D) : t(...D)
          } finally {
            ds = P
          }
        }
      } else u.run()
  };
  return a && a(R), u = new Am(d), u.scheduler = i ? () => i(R, !1) : R, p = O => Py(O, !1, u), g = u.onStop = () => {
    const O = va.get(u);
    if (O) {
      if (c) c(O, 4);
      else
        for (const L of O) L();
      va.delete(u)
    }
  }, t ? r ? R(!0) : A = u.run() : i ? i(R.bind(null, !0), !0) : u.run(), v.pause = u.pause.bind(u), v.resume = u.resume.bind(u), v.stop = v, v
}

function Tr(e, t = 1 / 0, n) {
  if (t <= 0 || !nt(e) || e.__v_skip || (n = n || new Map, (n.get(e) || 0) >= t)) return e;
  if (n.set(e, t), t--, ft(e)) Tr(e.value, t, n);
  else if (De(e))
    for (let r = 0; r < e.length; r++) Tr(e[r], t, n);
  else if (Fa(e) || qs(e)) e.forEach(r => {
    Tr(r, t, n)
  });
  else if (mm(e)) {
    for (const r in e) Tr(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && Tr(e[r], t, n)
  }
  return e
}

function gi(e, t, n, r) {
  try {
    return r ? e(...r) : e()
  } catch (s) {
    Ka(s, t, n)
  }
}

function Wn(e, t, n, r) {
  if (Ve(e)) {
    const s = gi(e, t, n, r);
    return s && pm(s) && s.catch(o => {
      Ka(o, t, n)
    }), s
  }
  if (De(e)) {
    const s = [];
    for (let o = 0; o < e.length; o++) s.push(Wn(e[o], t, n, r));
    return s
  }
}

function Ka(e, t, n, r = !0) {
  const s = t ? t.vnode : null,
    {
      errorHandler: o,
      throwUnhandledErrorInProduction: i
    } = t && t.appContext.config || Je;
  if (t) {
    let a = t.parent;
    const c = t.proxy,
      l = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a;) {
      const u = a.ec;
      if (u) {
        for (let d = 0; d < u.length; d++)
          if (u[d](e, c, l) === !1) return
      }
      a = a.parent
    }
    if (o) {
      Lr(), gi(o, null, 10, [e, c, l]), Dr();
      return
    }
  }
  Ly(e, n, s, r, i)
}

function Ly(e, t, n, r = !0, s = !1) {
  if (s) throw e;
  console.error(e)
}
const sn = [];
let or = -1;
const Ws = [];
let Wr = null,
  Bs = 0;
const Um = Promise.resolve();
let Ea = null;

function In(e) {
  const t = Ea || Um;
  return e ? t.then(this ? e.bind(this) : e) : t
}

function Dy(e) {
  let t = or + 1,
    n = sn.length;
  for (; t < n;) {
    const r = t + n >>> 1,
      s = sn[r],
      o = Yo(s);
    o < e || o === e && s.flags & 2 ? t = r + 1 : n = r
  }
  return t
}

function Cu(e) {
  if (!(e.flags & 1)) {
    const t = Yo(e),
      n = sn[sn.length - 1];
    !n || !(e.flags & 2) && t >= Yo(n) ? sn.push(e) : sn.splice(Dy(t), 0, e), e.flags |= 1, jm()
  }
}

function jm() {
  Ea || (Ea = Um.then(Wm))
}

function Hm(e) {
  De(e) ? Ws.push(...e) : Wr && e.id === -1 ? Wr.splice(Bs + 1, 0, e) : e.flags & 1 || (Ws.push(e), e.flags |= 1), jm()
}

function Md(e, t, n = or + 1) {
  for (; n < sn.length; n++) {
    const r = sn[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid) continue;
      sn.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2)
    }
  }
}

function qm(e) {
  if (Ws.length) {
    const t = [...new Set(Ws)].sort((n, r) => Yo(n) - Yo(r));
    if (Ws.length = 0, Wr) {
      Wr.push(...t);
      return
    }
    for (Wr = t, Bs = 0; Bs < Wr.length; Bs++) {
      const n = Wr[Bs];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2
    }
    Wr = null, Bs = 0
  }
}
const Yo = e => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;

function Wm(e) {
  try {
    for (or = 0; or < sn.length; or++) {
      const t = sn[or];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), gi(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2))
    }
  } finally {
    for (; or < sn.length; or++) {
      const t = sn[or];
      t && (t.flags &= -2)
    }
    or = -1, sn.length = 0, qm(), Ea = null, (sn.length || Ws.length) && Wm()
  }
}
let Mt = null,
  Gm = null;

function ya(e) {
  const t = Mt;
  return Mt = e, Gm = e && e.type.__scopeId || null, t
}

function Be(e, t = Mt, n) {
  if (!t || e._n) return e;
  const r = (...s) => {
    r._d && Dn(-1);
    const o = ya(t);
    let i;
    try {
      i = e(...s)
    } finally {
      ya(o), r._d && Dn(1)
    }
    return i
  };
  return r._n = !0, r._c = !0, r._d = !0, r
}

function Ft(e, t) {
  if (Mt === null) return e;
  const n = Za(Mt),
    r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [o, i, a, c = Je] = t[s];
    o && (Ve(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Tr(i), r.push({
      dir: o,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: a,
      modifiers: c
    }))
  }
  return e
}

function as(e, t, n, r) {
  const s = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const a = s[i];
    o && (a.oldValue = o[i].value);
    let c = a.dir[r];
    c && (Lr(), Wn(c, n, 8, [e.el, a, e, t]), Dr())
  }
}

function Gs(e, t) {
  if (Xt) {
    let n = Xt.provides;
    const r = Xt.parent && Xt.parent.provides;
    r === n && (n = Xt.provides = Object.create(r)), n[e] = t
  }
}

function Ot(e, t, n = !1) {
  const r = un();
  if (r || Es) {
    let s = Es ? Es._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && Ve(t) ? t.call(r && r.proxy) : t
  }
}

function Lu() {
  return !!(un() || Es)
}
const ky = Symbol.for("v-scx"),
  xy = () => Ot(ky);

function zo(e, t) {
  return Ya(e, null, t)
}

function Ny(e, t) {
  return Ya(e, null, {
    flush: "sync"
  })
}

function We(e, t, n) {
  return Ya(e, t, n)
}

function Ya(e, t, n = Je) {
  const {
    immediate: r,
    deep: s,
    flush: o,
    once: i
  } = n, a = St({}, n), c = t && r || !t && o !== "post";
  let l;
  if (ti) {
    if (o === "sync") {
      const p = xy();
      l = p.__watcherHandles || (p.__watcherHandles = [])
    } else if (!c) {
      const p = () => {};
      return p.stop = Un, p.resume = Un, p.pause = Un, p
    }
  }
  const u = Xt;
  a.call = (p, m, E) => Wn(p, u, m, E);
  let d = !1;
  o === "post" ? a.scheduler = p => {
    Wt(p, u && u.suspense)
  } : o !== "sync" && (d = !0, a.scheduler = (p, m) => {
    m ? p() : Cu(p)
  }), a.augmentJob = p => {
    t && (p.flags |= 4), d && (p.flags |= 2, u && (p.id = u.uid, p.i = u))
  };
  const g = Cy(e, t, a);
  return ti && (l ? l.push(g) : c && g()), g
}

function $y(e, t, n) {
  const r = this.proxy,
    s = bt(e) ? e.includes(".") ? Km(r, e) : () => r[e] : e.bind(r, r);
  let o;
  Ve(t) ? o = t : (o = t.handler, n = t);
  const i = yi(this),
    a = Ya(s, o.bind(r), n);
  return i(), a
}

function Km(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++) r = r[n[s]];
    return r
  }
}
const Ym = Symbol("_vte"),
  zm = e => e.__isTeleport,
  Vo = e => e && (e.disabled || e.disabled === ""),
  Fd = e => e && (e.defer || e.defer === ""),
  Bd = e => typeof SVGElement < "u" && e instanceof SVGElement,
  Ud = e => typeof MathMLElement == "function" && e instanceof MathMLElement,
  Al = (e, t) => {
    const n = e && e.to;
    return bt(n) ? t ? t(n) : null : n
  },
  Xm = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, r, s, o, i, a, c, l) {
      const {
        mc: u,
        pc: d,
        pbc: g,
        o: {
          insert: p,
          querySelector: m,
          createText: E,
          createComment: b
        }
      } = l, v = Vo(t.props);
      let {
        shapeFlag: A,
        children: R,
        dynamicChildren: O
      } = t;
      if (e == null) {
        const L = t.el = E(""),
          P = t.anchor = E("");
        p(L, n, r), p(P, n, r);
        const D = (k, Y) => {
            A & 16 && u(R, k, Y, s, o, i, a, c)
          },
          J = () => {
            const k = t.target = Al(t.props, m),
              Y = Tl(k, t, E, p);
            k && (i !== "svg" && Bd(k) ? i = "svg" : i !== "mathml" && Ud(k) && (i = "mathml"), s && s.isCE && (s.ce._teleportTargets || (s.ce._teleportTargets = new Set))
              .add(k), v || (D(k, Y), ea(t, !1)))
          };
        v && (D(n, P), ea(t, !0)), Fd(t.props) ? (t.el.__isMounted = !1, Wt(() => {
          J(), delete t.el.__isMounted
        }, o)) : J()
      } else {
        if (Fd(t.props) && e.el.__isMounted === !1) {
          Wt(() => {
            Xm.process(e, t, n, r, s, o, i, a, c, l)
          }, o);
          return
        }
        t.el = e.el, t.targetStart = e.targetStart;
        const L = t.anchor = e.anchor,
          P = t.target = e.target,
          D = t.targetAnchor = e.targetAnchor,
          J = Vo(e.props),
          k = J ? n : P,
          Y = J ? L : D;
        if (i === "svg" || Bd(P) ? i = "svg" : (i === "mathml" || Ud(P)) && (i = "mathml"), O ? (g(e.dynamicChildren, O, k, s, o, i, a), Fu(e, t, !0)) : c || d(e, t, k, Y, s, o, i, a, !1), v) J ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : $i(t, n, L, l, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const H = t.target = Al(t.props, m);
          H && $i(t, H, null, l, 0)
        } else J && $i(t, P, D, l, 1);
        ea(t, v)
      }
    },
    remove(e, t, n, {
      um: r,
      o: {
        remove: s
      }
    }, o) {
      const {
        shapeFlag: i,
        children: a,
        anchor: c,
        targetStart: l,
        targetAnchor: u,
        target: d,
        props: g
      } = e;
      if (d && (s(l), s(u)), o && s(c), i & 16) {
        const p = o || !Vo(g);
        for (let m = 0; m < a.length; m++) {
          const E = a[m];
          r(E, t, n, p, !!E.dynamicChildren)
        }
      }
    },
    move: $i,
    hydrate: Vy
  };

function $i(e, t, n, {
  o: {
    insert: r
  },
  m: s
}, o = 2) {
  o === 0 && r(e.targetAnchor, t, n);
  const {
    el: i,
    anchor: a,
    shapeFlag: c,
    children: l,
    props: u
  } = e, d = o === 2;
  if (d && r(i, t, n), (!d || Vo(u)) && c & 16)
    for (let g = 0; g < l.length; g++) s(l[g], t, n, 2);
  d && r(a, t, n)
}

function Vy(e, t, n, r, s, o, {
  o: {
    nextSibling: i,
    parentNode: a,
    querySelector: c,
    insert: l,
    createText: u
  }
}, d) {
  function g(b, v) {
    let A = v;
    for (; A;) {
      if (A && A.nodeType === 8) {
        if (A.data === "teleport start anchor") t.targetStart = A;
        else if (A.data === "teleport anchor") {
          t.targetAnchor = A, b._lpa = t.targetAnchor && i(t.targetAnchor);
          break
        }
      }
      A = i(A)
    }
  }

  function p(b, v) {
    v.anchor = d(i(b), v, a(b), n, r, s, o)
  }
  const m = t.target = Al(t.props, c),
    E = Vo(t.props);
  if (m) {
    const b = m._lpa || m.firstChild;
    t.shapeFlag & 16 && (E ? (p(e, t), g(m, b), t.targetAnchor || Tl(m, t, u, l, a(e) === m ? e : null)) : (t.anchor = i(e), g(m, b), t.targetAnchor || Tl(m, t, u, l), d(b && i(b), t, m, n, r, s, o))), ea(t, E)
  } else E && t.shapeFlag & 16 && (p(e, t), t.targetStart = e, t.targetAnchor = i(e));
  return t.anchor && i(t.anchor)
}
const Jm = Xm;

function ea(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, s;
    for (t ? (r = e.el, s = e.anchor) : (r = e.targetStart, s = e.targetAnchor); r && r !== s;) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut()
  }
}

function Tl(e, t, n, r, s = null) {
  const o = t.targetStart = n(""),
    i = t.targetAnchor = n("");
  return o[Ym] = i, e && (r(o, e, s), r(i, e, s)), i
}
const ir = Symbol("_leaveCb"),
  mo = Symbol("_enterCb");

function Qm() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map
  };
  return Rt(() => {
    e.isMounted = !0
  }), Nr(() => {
    e.isUnmounting = !0
  }), e
}
const Rn = [Function, Array],
  Zm = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Rn,
    onEnter: Rn,
    onAfterEnter: Rn,
    onEnterCancelled: Rn,
    onBeforeLeave: Rn,
    onLeave: Rn,
    onAfterLeave: Rn,
    onLeaveCancelled: Rn,
    onBeforeAppear: Rn,
    onAppear: Rn,
    onAfterAppear: Rn,
    onAppearCancelled: Rn
  },
  eh = e => {
    const t = e.subTree;
    return t.component ? eh(t.component) : t
  },
  My = {
    name: "BaseTransition",
    props: Zm,
    setup(e, {
      slots: t
    }) {
      const n = un(),
        r = Qm();
      return () => {
        const s = t.default && Du(t.default(), !0);
        if (!s || !s.length) return;
        const o = th(s),
          i = qe(e),
          {
            mode: a
          } = i;
        if (r.isLeaving) return xc(o);
        const c = jd(o);
        if (!c) return xc(o);
        let l = Xo(c, i, r, n, d => l = d);
        c.type !== zt && Ts(c, l);
        let u = n.subTree && jd(n.subTree);
        if (u && u.type !== zt && !ps(u, c) && eh(n)
          .type !== zt) {
          let d = Xo(u, i, r, n);
          if (Ts(u, d), a === "out-in" && c.type !== zt) return r.isLeaving = !0, d.afterLeave = () => {
            r.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, u = void 0
          }, xc(o);
          a === "in-out" && c.type !== zt ? d.delayLeave = (g, p, m) => {
            const E = nh(r, u);
            E[String(u.key)] = u, g[ir] = () => {
              p(), g[ir] = void 0, delete l.delayedLeave, u = void 0
            }, l.delayedLeave = () => {
              m(), delete l.delayedLeave, u = void 0
            }
          } : u = void 0
        } else u && (u = void 0);
        return o
      }
    }
  };

function th(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== zt) {
        t = n;
        break
      }
  }
  return t
}
const Fy = My;

function nh(e, t) {
  const {
    leavingVNodes: n
  } = e;
  let r = n.get(t.type);
  return r || (r = Object.create(null), n.set(t.type, r)), r
}

function Xo(e, t, n, r, s) {
  const {
    appear: o,
    mode: i,
    persisted: a = !1,
    onBeforeEnter: c,
    onEnter: l,
    onAfterEnter: u,
    onEnterCancelled: d,
    onBeforeLeave: g,
    onLeave: p,
    onAfterLeave: m,
    onLeaveCancelled: E,
    onBeforeAppear: b,
    onAppear: v,
    onAfterAppear: A,
    onAppearCancelled: R
  } = t, O = String(e.key), L = nh(n, e), P = (k, Y) => {
    k && Wn(k, r, 9, Y)
  }, D = (k, Y) => {
    const H = Y[1];
    P(k, Y), De(k) ? k.every(G => G.length <= 1) && H() : k.length <= 1 && H()
  }, J = {
    mode: i,
    persisted: a,
    beforeEnter(k) {
      let Y = c;
      if (!n.isMounted)
        if (o) Y = b || c;
        else return;
      k[ir] && k[ir](!0);
      const H = L[O];
      H && ps(e, H) && H.el[ir] && H.el[ir](), P(Y, [k])
    },
    enter(k) {
      let Y = l,
        H = u,
        G = d;
      if (!n.isMounted)
        if (o) Y = v || l, H = A || u, G = R || d;
        else return;
      let me = !1;
      k[mo] = X => {
        me || (me = !0, X ? P(G, [k]) : P(H, [k]), J.delayedLeave && J.delayedLeave(), k[mo] = void 0)
      };
      const de = k[mo].bind(null, !1);
      Y ? D(Y, [k, de]) : de()
    },
    leave(k, Y) {
      const H = String(e.key);
      if (k[mo] && k[mo](!0), n.isUnmounting) return Y();
      P(g, [k]);
      let G = !1;
      k[ir] = de => {
        G || (G = !0, Y(), de ? P(E, [k]) : P(m, [k]), k[ir] = void 0, L[H] === e && delete L[H])
      };
      const me = k[ir].bind(null, !1);
      L[H] = e, p ? D(p, [k, me]) : me()
    },
    clone(k) {
      const Y = Xo(k, t, n, r, s);
      return s && s(Y), Y
    }
  };
  return J
}

function xc(e) {
  if (za(e)) return e = Xr(e), e.children = null, e
}

function jd(e) {
  if (!za(e)) return zm(e.type) && e.children ? th(e.children) : e;
  if (e.component) return e.component.subTree;
  const {
    shapeFlag: t,
    children: n
  } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && Ve(n.default)) return n.default()
  }
}

function Ts(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Ts(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}

function Du(e, t = !1, n) {
  let r = [],
    s = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === Xe ? (i.patchFlag & 128 && s++, r = r.concat(Du(i.children, t, a))) : (t || i.type !== zt) && r.push(a != null ? Xr(i, {
      key: a
    }) : i)
  }
  if (s > 1)
    for (let o = 0; o < r.length; o++) r[o].patchFlag = -2;
  return r
}

function Ie(e, t) {
  return Ve(e) ? St({
    name: e.name
  }, t, {
    setup: e
  }) : e
}

function rh(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}

function PM(e) {
  const t = un(),
    n = mn(null);
  if (t) {
    const s = t.refs === Je ? t.refs = {} : t.refs;
    Object.defineProperty(s, e, {
      enumerable: !0,
      get: () => n.value,
      set: o => n.value = o
    })
  }
  return n
}

function Hd(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable)
}
const ba = new WeakMap;

function Mo(e, t, n, r, s = !1) {
  if (De(e)) {
    e.forEach((E, b) => Mo(E, t && (De(t) ? t[b] : t), n, r, s));
    return
  }
  if (Ks(r) && !s) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Mo(e, t, n, r.component.subTree);
    return
  }
  const o = r.shapeFlag & 4 ? Za(r.component) : r.el,
    i = s ? null : o,
    {
      i: a,
      r: c
    } = e,
    l = t && t.r,
    u = a.refs === Je ? a.refs = {} : a.refs,
    d = a.setupState,
    g = qe(d),
    p = d === Je ? fm : E => Hd(u, E) ? !1 : ot(g, E),
    m = (E, b) => !(b && Hd(u, b));
  if (l != null && l !== c) {
    if (qd(t), bt(l)) u[l] = null, p(l) && (d[l] = null);
    else if (ft(l)) {
      const E = t;
      m(l, E.k) && (l.value = null), E.k && (u[E.k] = null)
    }
  }
  if (Ve(c)) gi(c, a, 12, [i, u]);
  else {
    const E = bt(c),
      b = ft(c);
    if (E || b) {
      const v = () => {
        if (e.f) {
          const A = E ? p(c) ? d[c] : u[c] : m() || !e.k ? c.value : u[e.k];
          if (s) De(A) && bu(A, o);
          else if (De(A)) A.includes(o) || A.push(o);
          else if (E) u[c] = [o], p(c) && (d[c] = u[c]);
          else {
            const R = [o];
            m(c, e.k) && (c.value = R), e.k && (u[e.k] = R)
          }
        } else E ? (u[c] = i, p(c) && (d[c] = i)) : b && (m(c, e.k) && (c.value = i), e.k && (u[e.k] = i))
      };
      if (i) {
        const A = () => {
          v(), ba.delete(e)
        };
        A.id = -1, ba.set(e, A), Wt(A, n)
      } else qd(e), v()
    }
  }
}

function qd(e) {
  const t = ba.get(e);
  t && (t.flags |= 8, ba.delete(e))
}
Ha()
  .requestIdleCallback;
Ha()
  .cancelIdleCallback;
const Ks = e => !!e.type.__asyncLoader,
  za = e => e.type.__isKeepAlive;

function By(e, t) {
  sh(e, "a", t)
}

function Uy(e, t) {
  sh(e, "da", t)
}

function sh(e, t, n = Xt) {
  const r = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s;) {
      if (s.isDeactivated) return;
      s = s.parent
    }
    return e()
  });
  if (Xa(t, r, n), n) {
    let s = n.parent;
    for (; s && s.parent;) za(s.parent.vnode) && jy(r, t, n, s), s = s.parent
  }
}

function jy(e, t, n, r) {
  const s = Xa(t, e, r, !0);
  co(() => {
    bu(r[t], s)
  }, n)
}

function Xa(e, t, n = Xt, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      o = t.__weh || (t.__weh = (...i) => {
        Lr();
        const a = yi(n),
          c = Wn(t, n, e, i);
        return a(), Dr(), c
      });
    return r ? s.unshift(o) : s.push(o), o
  }
}
const xr = e => (t, n = Xt) => {
    (!ti || e === "sp") && Xa(e, (...r) => t(...r), n)
  },
  ao = xr("bm"),
  Rt = xr("m"),
  oh = xr("bu"),
  ku = xr("u"),
  Nr = xr("bum"),
  co = xr("um"),
  Hy = xr("sp"),
  qy = xr("rtg"),
  Wy = xr("rtc");

function Gy(e, t = Xt) {
  Xa("ec", e, t)
}
const xu = "components",
  Ky = "directives";

function Ja(e, t) {
  return Nu(xu, e, !0, t) || e
}
const ih = Symbol.for("v-ndc");

function zr(e) {
  return bt(e) ? Nu(xu, e, !1) || e : e || ih
}

function $r(e) {
  return Nu(Ky, e)
}

function Nu(e, t, n = !0, r = !1) {
  const s = Mt || Xt;
  if (s) {
    const o = s.type;
    if (e === xu) {
      const a = Pb(o, !1);
      if (a && (a === t || a === On(t) || a === ja(On(t)))) return o
    }
    const i = Wd(s[e] || o[e], t) || Wd(s.appContext[e], t);
    return !i && r ? o : i
  }
}

function Wd(e, t) {
  return e && (e[t] || e[On(t)] || e[ja(On(t))])
}

function Gn(e, t, n, r) {
  let s;
  const o = n,
    i = De(e);
  if (i || bt(e)) {
    const a = i && lr(e);
    let c = !1,
      l = !1;
    a && (c = !An(e), l = fr(e), e = Wa(e)), s = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++) s[u] = t(c ? l ? zs(qn(e[u])) : qn(e[u]) : e[u], u, void 0, o)
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let a = 0; a < e; a++) s[a] = t(a + 1, a, void 0, o)
  } else if (nt(e))
    if (e[Symbol.iterator]) s = Array.from(e, (a, c) => t(a, c, void 0, o));
    else {
      const a = Object.keys(e);
      s = new Array(a.length);
      for (let c = 0, l = a.length; c < l; c++) {
        const u = a[c];
        s[c] = t(e[u], u, c, o)
      }
    }
  else s = [];
  return s
}

function Yy(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (De(r))
      for (let s = 0; s < r.length; s++) e[r[s].name] = r[s].fn;
    else r && (e[r.name] = r.key ? (...s) => {
      const o = r.fn(...s);
      return o && (o.key = r.key), o
    } : r.fn)
  }
  return e
}

function et(e, t, n = {}, r, s) {
  if (Mt.ce || Mt.parent && Ks(Mt.parent) && Mt.parent.ce) {
    const l = Object.keys(n)
      .length > 0;
    return t !== "default" && (n.name = t), B(), be(Xe, null, [Te("slot", n, r && r())], l ? -2 : 64)
  }
  let o = e[t];
  o && o._c && (o._d = !1), B();
  const i = o && ah(o(n)),
    a = n.key || i && i.key,
    c = be(Xe, {
      key: (a && !Hn(a) ? a : `_${t}`) + (!i && r ? "_fb" : "")
    }, i || (r ? r() : []), i && e._ === 1 ? 64 : -2);
  return !s && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), o && o._c && (o._d = !0), c
}

function ah(e) {
  return e.some(t => ei(t) ? !(t.type === zt || t.type === Xe && !ah(t.children)) : !0) ? e : null
}
const Ol = e => e ? wh(e) ? Za(e) : Ol(e.parent) : null,
  Fo = St(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => Ol(e.parent),
    $root: e => Ol(e.root),
    $host: e => e.ce,
    $emit: e => e.emit,
    $options: e => uh(e),
    $forceUpdate: e => e.f || (e.f = () => {
      Cu(e.update)
    }),
    $nextTick: e => e.n || (e.n = In.bind(e.proxy)),
    $watch: e => $y.bind(e)
  }),
  Nc = (e, t) => e !== Je && !e.__isScriptSetup && ot(e, t),
  zy = {
    get({
      _: e
    }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: r,
        data: s,
        props: o,
        accessCache: i,
        type: a,
        appContext: c
      } = e;
      if (t[0] !== "$") {
        const g = i[t];
        if (g !== void 0) switch (g) {
          case 1:
            return r[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return o[t]
        } else {
          if (Nc(r, t)) return i[t] = 1, r[t];
          if (s !== Je && ot(s, t)) return i[t] = 2, s[t];
          if (ot(o, t)) return i[t] = 3, o[t];
          if (n !== Je && ot(n, t)) return i[t] = 4, n[t];
          Il && (i[t] = 0)
        }
      }
      const l = Fo[t];
      let u, d;
      if (l) return t === "$attrs" && Yt(e.attrs, "get", ""), l(e);
      if ((u = a.__cssModules) && (u = u[t])) return u;
      if (n !== Je && ot(n, t)) return i[t] = 4, n[t];
      if (d = c.config.globalProperties, ot(d, t)) return d[t]
    },
    set({
      _: e
    }, t, n) {
      const {
        data: r,
        setupState: s,
        ctx: o
      } = e;
      return Nc(s, t) ? (s[t] = n, !0) : r !== Je && ot(r, t) ? (r[t] = n, !0) : ot(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0)
    },
    has({
      _: {
        data: e,
        setupState: t,
        accessCache: n,
        ctx: r,
        appContext: s,
        props: o,
        type: i
      }
    }, a) {
      let c;
      return !!(n[a] || e !== Je && a[0] !== "$" && ot(e, a) || Nc(t, a) || ot(o, a) || ot(r, a) || ot(Fo, a) || ot(s.config.globalProperties, a) || (c = i.__cssModules) && c[a])
    },
    defineProperty(e, t, n) {
      return n.get != null ? e._.accessCache[t] = 0 : ot(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
    }
  };

function CM() {
  return ch()
    .slots
}

function vi() {
  return ch()
    .attrs
}

function ch(e) {
  const t = un();
  return t.setupContext || (t.setupContext = Ch(t))
}

function Jo(e) {
  return De(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e
}

function Zt(e, t) {
  const n = Jo(e);
  for (const r in t) {
    if (r.startsWith("__skip")) continue;
    let s = n[r];
    s ? De(s) || Ve(s) ? s = n[r] = {
      type: s,
      default: t[r]
    } : s.default = t[r] : s === null && (s = n[r] = {
      default: t[r]
    }), s && t[`__skip_${r}`] && (s.skipFactory = !0)
  }
  return n
}

function Qo(e, t) {
  return !e || !t ? e || t : De(e) && De(t) ? e.concat(t) : St({}, Jo(e), Jo(t))
}
let Il = !0;

function Xy(e) {
  const t = uh(e),
    n = e.proxy,
    r = e.ctx;
  Il = !1, t.beforeCreate && Gd(t.beforeCreate, e, "bc");
  const {
    data: s,
    computed: o,
    methods: i,
    watch: a,
    provide: c,
    inject: l,
    created: u,
    beforeMount: d,
    mounted: g,
    beforeUpdate: p,
    updated: m,
    activated: E,
    deactivated: b,
    beforeDestroy: v,
    beforeUnmount: A,
    destroyed: R,
    unmounted: O,
    render: L,
    renderTracked: P,
    renderTriggered: D,
    errorCaptured: J,
    serverPrefetch: k,
    expose: Y,
    inheritAttrs: H,
    components: G,
    directives: me,
    filters: de
  } = t;
  if (l && Jy(l, r, null), i)
    for (const K in i) {
      const ee = i[K];
      Ve(ee) && (r[K] = ee.bind(n))
    }
  if (s) {
    const K = s.call(n, n);
    nt(K) && (e.data = dr(K))
  }
  if (Il = !0, o)
    for (const K in o) {
      const ee = o[K],
        _e = Ve(ee) ? ee.bind(n, n) : Ve(ee.get) ? ee.get.bind(n, n) : Un,
        Q = !Ve(ee) && Ve(ee.set) ? ee.set.bind(n) : Un,
        V = q({
          get: _e,
          set: Q
        });
      Object.defineProperty(r, K, {
        enumerable: !0,
        configurable: !0,
        get: () => V.value,
        set: oe => V.value = oe
      })
    }
  if (a)
    for (const K in a) lh(a[K], r, n, K);
  if (c) {
    const K = Ve(c) ? c.call(n) : c;
    Reflect.ownKeys(K)
      .forEach(ee => {
        Gs(ee, K[ee])
      })
  }
  u && Gd(u, e, "c");

  function N(K, ee) {
    De(ee) ? ee.forEach(_e => K(_e.bind(n))) : ee && K(ee.bind(n))
  }
  if (N(ao, d), N(Rt, g), N(oh, p), N(ku, m), N(By, E), N(Uy, b), N(Gy, J), N(Wy, P), N(qy, D), N(Nr, A), N(co, O), N(Hy, k), De(Y))
    if (Y.length) {
      const K = e.exposed || (e.exposed = {});
      Y.forEach(ee => {
        Object.defineProperty(K, ee, {
          get: () => n[ee],
          set: _e => n[ee] = _e,
          enumerable: !0
        })
      })
    } else e.exposed || (e.exposed = {});
  L && e.render === Un && (e.render = L), H != null && (e.inheritAttrs = H), G && (e.components = G), me && (e.directives = me), k && rh(e)
}

function Jy(e, t, n = Un) {
  De(e) && (e = Sl(e));
  for (const r in e) {
    const s = e[r];
    let o;
    nt(s) ? "default" in s ? o = Ot(s.from || r, s.default, !0) : o = Ot(s.from || r) : o = Ot(s), ft(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: i => o.value = i
    }) : t[r] = o
  }
}

function Gd(e, t, n) {
  Wn(De(e) ? e.map(r => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}

function lh(e, t, n, r) {
  let s = r.includes(".") ? Km(n, r) : () => n[r];
  if (bt(e)) {
    const o = t[e];
    Ve(o) && We(s, o)
  } else if (Ve(e)) We(s, e.bind(n));
  else if (nt(e))
    if (De(e)) e.forEach(o => lh(o, t, n, r));
    else {
      const o = Ve(e.handler) ? e.handler.bind(n) : t[e.handler];
      Ve(o) && We(s, o, e)
    }
}

function uh(e) {
  const t = e.type,
    {
      mixins: n,
      extends: r
    } = t,
    {
      mixins: s,
      optionsCache: o,
      config: {
        optionMergeStrategies: i
      }
    } = e.appContext,
    a = o.get(t);
  let c;
  return a ? c = a : !s.length && !n && !r ? c = t : (c = {}, s.length && s.forEach(l => Aa(c, l, i, !0)), Aa(c, t, i)), nt(t) && o.set(t, c), c
}

function Aa(e, t, n, r = !1) {
  const {
    mixins: s,
    extends: o
  } = t;
  o && Aa(e, o, n, !0), s && s.forEach(i => Aa(e, i, n, !0));
  for (const i in t)
    if (!(r && i === "expose")) {
      const a = Qy[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i]
    } return e
}
const Qy = {
  data: Kd,
  props: Yd,
  emits: Yd,
  methods: Po,
  computed: Po,
  beforeCreate: tn,
  created: tn,
  beforeMount: tn,
  mounted: tn,
  beforeUpdate: tn,
  updated: tn,
  beforeDestroy: tn,
  beforeUnmount: tn,
  destroyed: tn,
  unmounted: tn,
  activated: tn,
  deactivated: tn,
  errorCaptured: tn,
  serverPrefetch: tn,
  components: Po,
  directives: Po,
  watch: eb,
  provide: Kd,
  inject: Zy
};

function Kd(e, t) {
  return t ? e ? function() {
    return St(Ve(e) ? e.call(this, this) : e, Ve(t) ? t.call(this, this) : t)
  } : t : e
}

function Zy(e, t) {
  return Po(Sl(e), Sl(t))
}

function Sl(e) {
  if (De(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t
  }
  return e
}

function tn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}

function Po(e, t) {
  return e ? St(Object.create(null), e, t) : t
}

function Yd(e, t) {
  return e ? De(e) && De(t) ? [...new Set([...e, ...t])] : St(Object.create(null), Jo(e), Jo(t ?? {})) : t
}

function eb(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = St(Object.create(null), e);
  for (const r in t) n[r] = tn(e[r], t[r]);
  return n
}

function dh() {
  return {
    app: null,
    config: {
      isNativeTag: fm,
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
let tb = 0;

function nb(e, t) {
  return function(r, s = null) {
    Ve(r) || (r = St({}, r)), s != null && !nt(s) && (s = null);
    const o = dh(),
      i = new WeakSet,
      a = [];
    let c = !1;
    const l = o.app = {
      _uid: tb++,
      _component: r,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: Lb,
      get config() {
        return o.config
      },
      set config(u) {},
      use(u, ...d) {
        return i.has(u) || (u && Ve(u.install) ? (i.add(u), u.install(l, ...d)) : Ve(u) && (i.add(u), u(l, ...d))), l
      },
      mixin(u) {
        return o.mixins.includes(u) || o.mixins.push(u), l
      },
      component(u, d) {
        return d ? (o.components[u] = d, l) : o.components[u]
      },
      directive(u, d) {
        return d ? (o.directives[u] = d, l) : o.directives[u]
      },
      mount(u, d, g) {
        if (!c) {
          const p = l._ceVNode || Te(r, s);
          return p.appContext = o, g === !0 ? g = "svg" : g === !1 && (g = void 0), e(p, u, g), c = !0, l._container = u, u.__vue_app__ = l, Za(p.component)
        }
      },
      onUnmount(u) {
        a.push(u)
      },
      unmount() {
        c && (Wn(a, l._instance, 16), e(null, l._container), delete l._container.__vue_app__)
      },
      provide(u, d) {
        return o.provides[u] = d, l
      },
      runWithContext(u) {
        const d = Es;
        Es = l;
        try {
          return u()
        } finally {
          Es = d
        }
      }
    };
    return l
  }
}
let Es = null;

function $u(e, t, n = Je) {
  const r = un(),
    s = On(t),
    o = kr(t),
    i = fh(e, s),
    a = Fm((c, l) => {
      let u, d = Je,
        g;
      return Ny(() => {
        const p = e[s];
        pn(u, p) && (u = p, l())
      }), {
        get() {
          return c(), n.get ? n.get(u) : u
        },
        set(p) {
          const m = n.set ? n.set(p) : p;
          if (!pn(m, u) && !(d !== Je && pn(p, d))) return;
          const E = r.vnode.props;
          E && (t in E || s in E || o in E) && (`onUpdate:${t}` in E || `onUpdate:${s}` in E || `onUpdate:${o}` in E) || (u = p, l()), r.emit(`update:${t}`, m), pn(p, m) && pn(p, d) && !pn(m, g) && l(), d = p, g = m
        }
      }
    });
  return a[Symbol.iterator] = () => {
    let c = 0;
    return {
      next() {
        return c < 2 ? {
          value: c++ ? i || Je : a,
          done: !1
        } : {
          done: !0
        }
      }
    }
  }, a
}
const fh = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${On(t)}Modifiers`] || e[`${kr(t)}Modifiers`];

function rb(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Je;
  let s = n;
  const o = t.startsWith("update:"),
    i = o && fh(r, t.slice(7));
  i && (i.trim && (s = n.map(u => bt(u) ? u.trim() : u)), i.number && (s = n.map(WE)));
  let a, c = r[a = Pc(t)] || r[a = Pc(On(t))];
  !c && o && (c = r[a = Pc(kr(t))]), c && Wn(c, e, 6, s);
  const l = r[a + "Once"];
  if (l) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    e.emitted[a] = !0, Wn(l, e, 6, s)
  }
}
const sb = new WeakMap;

function ph(e, t, n = !1) {
  const r = n ? sb : t.emitsCache,
    s = r.get(e);
  if (s !== void 0) return s;
  const o = e.emits;
  let i = {},
    a = !1;
  if (!Ve(e)) {
    const c = l => {
      const u = ph(l, t, !0);
      u && (a = !0, St(i, u))
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c)
  }
  return !o && !a ? (nt(e) && r.set(e, null), null) : (De(o) ? o.forEach(c => i[c] = null) : St(i, o), nt(e) && r.set(e, i), i)
}

function Qa(e, t) {
  return !e || !Ma(t) ? !1 : (t = t.slice(2)
    .replace(/Once$/, ""), ot(e, t[0].toLowerCase() + t.slice(1)) || ot(e, kr(t)) || ot(e, t))
}

function zd(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    propsOptions: [o],
    slots: i,
    attrs: a,
    emit: c,
    render: l,
    renderCache: u,
    props: d,
    data: g,
    setupState: p,
    ctx: m,
    inheritAttrs: E
  } = e, b = ya(e);
  let v, A;
  try {
    if (n.shapeFlag & 4) {
      const O = s || r,
        L = O;
      v = ar(l.call(L, O, u, d, p, g, m)), A = a
    } else {
      const O = t;
      v = ar(O.length > 1 ? O(d, {
        attrs: a,
        slots: i,
        emit: c
      }) : O(d, null)), A = t.props ? a : ob(a)
    }
  } catch (O) {
    Bo.length = 0, Ka(O, e, 1), v = Te(zt)
  }
  let R = v;
  if (A && E !== !1) {
    const O = Object.keys(A),
      {
        shapeFlag: L
      } = R;
    O.length && L & 7 && (o && O.some(yu) && (A = ib(A, o)), R = Xr(R, A, !1, !0))
  }
  return n.dirs && (R = Xr(R, null, !1, !0), R.dirs = R.dirs ? R.dirs.concat(n.dirs) : n.dirs), n.transition && Ts(R, n.transition), v = R, ya(b), v
}
const ob = e => {
    let t;
    for (const n in e)(n === "class" || n === "style" || Ma(n)) && ((t || (t = {}))[n] = e[n]);
    return t
  },
  ib = (e, t) => {
    const n = {};
    for (const r in e)(!yu(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n
  };

function ab(e, t, n) {
  const {
    props: r,
    children: s,
    component: o
  } = e, {
    props: i,
    children: a,
    patchFlag: c
  } = t, l = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && c >= 0) {
    if (c & 1024) return !0;
    if (c & 16) return r ? Xd(r, i, l) : !!i;
    if (c & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const g = u[d];
        if (_h(i, r, g) && !Qa(l, g)) return !0
      }
    }
  } else return (s || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? i ? Xd(r, i, l) : !0 : !!i;
  return !1
}

function Xd(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e)
    .length) return !0;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    if (_h(t, e, o) && !Qa(n, o)) return !0
  }
  return !1
}

function _h(e, t, n) {
  const r = e[n],
    s = t[n];
  return n === "style" && nt(r) && nt(s) ? !As(r, s) : r !== s
}

function cb({
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
const mh = {},
  hh = () => Object.create(mh),
  gh = e => Object.getPrototypeOf(e) === mh;

function lb(e, t, n, r = !1) {
  const s = {},
    o = hh();
  e.propsDefaults = Object.create(null), vh(e, t, s, o);
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0);
  n ? e.props = r ? s : $m(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o
}

function ub(e, t, n, r) {
  const {
    props: s,
    attrs: o,
    vnode: {
      patchFlag: i
    }
  } = e, a = qe(s), [c] = e.propsOptions;
  let l = !1;
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let g = u[d];
        if (Qa(e.emitsOptions, g)) continue;
        const p = t[g];
        if (c)
          if (ot(o, g)) p !== o[g] && (o[g] = p, l = !0);
          else {
            const m = On(g);
            s[m] = Rl(c, a, m, p, e, !1)
          }
        else p !== o[g] && (o[g] = p, l = !0)
      }
    }
  } else {
    vh(e, t, s, o) && (l = !0);
    let u;
    for (const d in a)(!t || !ot(t, d) && ((u = kr(d)) === d || !ot(t, u))) && (c ? n && (n[d] !== void 0 || n[u] !== void 0) && (s[d] = Rl(c, a, d, void 0, e, !0)) : delete s[d]);
    if (o !== a)
      for (const d in o)(!t || !ot(t, d)) && (delete o[d], l = !0)
  }
  l && Ar(e.attrs, "set", "")
}

function vh(e, t, n, r) {
  const [s, o] = e.propsOptions;
  let i = !1,
    a;
  if (t)
    for (let c in t) {
      if (xo(c)) continue;
      const l = t[c];
      let u;
      s && ot(s, u = On(c)) ? !o || !o.includes(u) ? n[u] = l : (a || (a = {}))[u] = l : Qa(e.emitsOptions, c) || (!(c in r) || l !== r[c]) && (r[c] = l, i = !0)
    }
  if (o) {
    const c = qe(n),
      l = a || Je;
    for (let u = 0; u < o.length; u++) {
      const d = o[u];
      n[d] = Rl(s, c, d, l[d], e, !ot(l, d))
    }
  }
  return i
}

function Rl(e, t, n, r, s, o) {
  const i = e[n];
  if (i != null) {
    const a = ot(i, "default");
    if (a && r === void 0) {
      const c = i.default;
      if (i.type !== Function && !i.skipFactory && Ve(c)) {
        const {
          propsDefaults: l
        } = s;
        if (n in l) r = l[n];
        else {
          const u = yi(s);
          r = l[n] = c.call(null, t), u()
        }
      } else r = c;
      s.ce && s.ce._setProp(n, r)
    }
    i[0] && (o && !a ? r = !1 : i[1] && (r === "" || r === kr(n)) && (r = !0))
  }
  return r
}
const db = new WeakMap;

function Eh(e, t, n = !1) {
  const r = n ? db : t.propsCache,
    s = r.get(e);
  if (s) return s;
  const o = e.props,
    i = {},
    a = [];
  let c = !1;
  if (!Ve(e)) {
    const u = d => {
      c = !0;
      const [g, p] = Eh(d, t, !0);
      St(i, g), p && a.push(...p)
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u)
  }
  if (!o && !c) return nt(e) && r.set(e, Hs), Hs;
  if (De(o))
    for (let u = 0; u < o.length; u++) {
      const d = On(o[u]);
      Jd(d) && (i[d] = Je)
    } else if (o)
      for (const u in o) {
        const d = On(u);
        if (Jd(d)) {
          const g = o[u],
            p = i[d] = De(g) || Ve(g) ? {
              type: g
            } : St({}, g),
            m = p.type;
          let E = !1,
            b = !0;
          if (De(m))
            for (let v = 0; v < m.length; ++v) {
              const A = m[v],
                R = Ve(A) && A.name;
              if (R === "Boolean") {
                E = !0;
                break
              } else R === "String" && (b = !1)
            } else E = Ve(m) && m.name === "Boolean";
          p[0] = E, p[1] = b, (E || ot(p, "default")) && a.push(d)
        }
      }
  const l = [i, a];
  return nt(e) && r.set(e, l), l
}

function Jd(e) {
  return e[0] !== "$" && !xo(e)
}
const Vu = e => e === "_" || e === "_ctx" || e === "$stable",
  Mu = e => De(e) ? e.map(ar) : [ar(e)],
  fb = (e, t, n) => {
    if (t._n) return t;
    const r = Be((...s) => Mu(t(...s)), n);
    return r._c = !1, r
  },
  yh = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
      if (Vu(s)) continue;
      const o = e[s];
      if (Ve(o)) t[s] = fb(s, o, r);
      else if (o != null) {
        const i = Mu(o);
        t[s] = () => i
      }
    }
  },
  bh = (e, t) => {
    const n = Mu(t);
    e.slots.default = () => n
  },
  Ah = (e, t, n) => {
    for (const r in t)(n || !Vu(r)) && (e[r] = t[r])
  },
  pb = (e, t, n) => {
    const r = e.slots = hh();
    if (e.vnode.shapeFlag & 32) {
      const s = t._;
      s ? (Ah(r, t, n), n && hm(r, "_", s, !0)) : yh(t, r)
    } else t && bh(e, t)
  },
  _b = (e, t, n) => {
    const {
      vnode: r,
      slots: s
    } = e;
    let o = !0,
      i = Je;
    if (r.shapeFlag & 32) {
      const a = t._;
      a ? n && a === 1 ? o = !1 : Ah(s, t, n) : (o = !t.$stable, yh(t, s)), i = t
    } else t && (bh(e, t), i = {
      default: 1
    });
    if (o)
      for (const a in s) !Vu(a) && i[a] == null && delete s[a]
  },
  Wt = Eb;

function mb(e) {
  return hb(e)
}

function hb(e, t) {
  const n = Ha();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: s,
    patchProp: o,
    createElement: i,
    createText: a,
    createComment: c,
    setText: l,
    setElementText: u,
    parentNode: d,
    nextSibling: g,
    setScopeId: p = Un,
    insertStaticContent: m
  } = e, E = (w, C, U, te = null, ie = null, se = null, S = void 0, T = null, x = !!C.dynamicChildren) => {
    if (w === C) return;
    w && !ps(w, C) && (te = W(w), oe(w, ie, se, !0), w = null), C.patchFlag === -2 && (x = !1, C.dynamicChildren = null);
    const {
      type: z,
      ref: Ee,
      shapeFlag: le
    } = C;
    switch (z) {
      case Ei:
        b(w, C, U, te);
        break;
      case zt:
        v(w, C, U, te);
        break;
      case ta:
        w == null && A(C, U, te, S);
        break;
      case Xe:
        G(w, C, U, te, ie, se, S, T, x);
        break;
      default:
        le & 1 ? L(w, C, U, te, ie, se, S, T, x) : le & 6 ? me(w, C, U, te, ie, se, S, T, x) : (le & 64 || le & 128) && z.process(w, C, U, te, ie, se, S, T, x, ye)
    }
    Ee != null && ie ? Mo(Ee, w && w.ref, se, C || w, !C) : Ee == null && w && w.ref != null && Mo(w.ref, null, se, w, !0)
  }, b = (w, C, U, te) => {
    if (w == null) r(C.el = a(C.children), U, te);
    else {
      const ie = C.el = w.el;
      C.children !== w.children && l(ie, C.children)
    }
  }, v = (w, C, U, te) => {
    w == null ? r(C.el = c(C.children || ""), U, te) : C.el = w.el
  }, A = (w, C, U, te) => {
    [w.el, w.anchor] = m(w.children, C, U, te, w.el, w.anchor)
  }, R = ({
    el: w,
    anchor: C
  }, U, te) => {
    let ie;
    for (; w && w !== C;) ie = g(w), r(w, U, te), w = ie;
    r(C, U, te)
  }, O = ({
    el: w,
    anchor: C
  }) => {
    let U;
    for (; w && w !== C;) U = g(w), s(w), w = U;
    s(C)
  }, L = (w, C, U, te, ie, se, S, T, x) => {
    if (C.type === "svg" ? S = "svg" : C.type === "math" && (S = "mathml"), w == null) P(C, U, te, ie, se, S, T, x);
    else {
      const z = w.el && w.el._isVueCE ? w.el : null;
      try {
        z && z._beginPatch(), k(w, C, ie, se, S, T, x)
      } finally {
        z && z._endPatch()
      }
    }
  }, P = (w, C, U, te, ie, se, S, T) => {
    let x, z;
    const {
      props: Ee,
      shapeFlag: le,
      transition: j,
      dirs: ne
    } = w;
    if (x = w.el = i(w.type, se, Ee && Ee.is, Ee), le & 8 ? u(x, w.children) : le & 16 && J(w.children, x, null, te, ie, $c(w, se), S, T), ne && as(w, null, te, "created"), D(x, w, w.scopeId, S, te), Ee) {
      for (const y in Ee) y !== "value" && !xo(y) && o(x, y, null, Ee[y], se, te);
      "value" in Ee && o(x, "value", null, Ee.value, se), (z = Ee.onVnodeBeforeMount) && Zn(z, te, w)
    }
    ne && as(w, null, te, "beforeMount");
    const Oe = gb(ie, j);
    Oe && j.beforeEnter(x), r(x, C, U), ((z = Ee && Ee.onVnodeMounted) || Oe || ne) && Wt(() => {
      z && Zn(z, te, w), Oe && j.enter(x), ne && as(w, null, te, "mounted")
    }, ie)
  }, D = (w, C, U, te, ie) => {
    if (U && p(w, U), te)
      for (let se = 0; se < te.length; se++) p(w, te[se]);
    if (ie) {
      let se = ie.subTree;
      if (C === se || Ih(se.type) && (se.ssContent === C || se.ssFallback === C)) {
        const S = ie.vnode;
        D(w, S, S.scopeId, S.slotScopeIds, ie.parent)
      }
    }
  }, J = (w, C, U, te, ie, se, S, T, x = 0) => {
    for (let z = x; z < w.length; z++) {
      const Ee = w[z] = T ? br(w[z]) : ar(w[z]);
      E(null, Ee, C, U, te, ie, se, S, T)
    }
  }, k = (w, C, U, te, ie, se, S) => {
    const T = C.el = w.el;
    let {
      patchFlag: x,
      dynamicChildren: z,
      dirs: Ee
    } = C;
    x |= w.patchFlag & 16;
    const le = w.props || Je,
      j = C.props || Je;
    let ne;
    if (U && cs(U, !1), (ne = j.onVnodeBeforeUpdate) && Zn(ne, U, C, w), Ee && as(C, w, U, "beforeUpdate"), U && cs(U, !0), (le.innerHTML && j.innerHTML == null || le.textContent && j.textContent == null) && u(T, ""), z ? Y(w.dynamicChildren, z, T, U, te, $c(C, ie), se) : S || ee(w, C, T, null, U, te, $c(C, ie), se, !1), x > 0) {
      if (x & 16) H(T, le, j, U, ie);
      else if (x & 2 && le.class !== j.class && o(T, "class", null, j.class, ie), x & 4 && o(T, "style", le.style, j.style, ie), x & 8) {
        const Oe = C.dynamicProps;
        for (let y = 0; y < Oe.length; y++) {
          const f = Oe[y],
            h = le[f],
            I = j[f];
          (I !== h || f === "value") && o(T, f, h, I, ie, U)
        }
      }
      x & 1 && w.children !== C.children && u(T, C.children)
    } else !S && z == null && H(T, le, j, U, ie);
    ((ne = j.onVnodeUpdated) || Ee) && Wt(() => {
      ne && Zn(ne, U, C, w), Ee && as(C, w, U, "updated")
    }, te)
  }, Y = (w, C, U, te, ie, se, S) => {
    for (let T = 0; T < C.length; T++) {
      const x = w[T],
        z = C[T],
        Ee = x.el && (x.type === Xe || !ps(x, z) || x.shapeFlag & 198) ? d(x.el) : U;
      E(x, z, Ee, null, te, ie, se, S, !0)
    }
  }, H = (w, C, U, te, ie) => {
    if (C !== U) {
      if (C !== Je)
        for (const se in C) !xo(se) && !(se in U) && o(w, se, C[se], null, ie, te);
      for (const se in U) {
        if (xo(se)) continue;
        const S = U[se],
          T = C[se];
        S !== T && se !== "value" && o(w, se, T, S, ie, te)
      }
      "value" in U && o(w, "value", C.value, U.value, ie)
    }
  }, G = (w, C, U, te, ie, se, S, T, x) => {
    const z = C.el = w ? w.el : a(""),
      Ee = C.anchor = w ? w.anchor : a("");
    let {
      patchFlag: le,
      dynamicChildren: j,
      slotScopeIds: ne
    } = C;
    ne && (T = T ? T.concat(ne) : ne), w == null ? (r(z, U, te), r(Ee, U, te), J(C.children || [], U, Ee, ie, se, S, T, x)) : le > 0 && le & 64 && j && w.dynamicChildren && w.dynamicChildren.length === j.length ? (Y(w.dynamicChildren, j, U, ie, se, S, T), (C.key != null || ie && C === ie.subTree) && Fu(w, C, !0)) : ee(w, C, U, Ee, ie, se, S, T, x)
  }, me = (w, C, U, te, ie, se, S, T, x) => {
    C.slotScopeIds = T, w == null ? C.shapeFlag & 512 ? ie.ctx.activate(C, U, te, S, x) : de(C, U, te, ie, se, S, x) : X(w, C, x)
  }, de = (w, C, U, te, ie, se, S) => {
    const T = w.component = Ib(w, te, ie);
    if (za(w) && (T.ctx.renderer = ye), Sb(T, !1, S), T.asyncDep) {
      if (ie && ie.registerDep(T, N, S), !w.el) {
        const x = T.subTree = Te(zt);
        v(null, x, C, U), w.placeholder = x.el
      }
    } else N(T, w, C, U, ie, se, S)
  }, X = (w, C, U) => {
    const te = C.component = w.component;
    if (ab(w, C, U))
      if (te.asyncDep && !te.asyncResolved) {
        K(te, C, U);
        return
      } else te.next = C, te.update();
    else C.el = w.el, te.vnode = C
  }, N = (w, C, U, te, ie, se, S) => {
    const T = () => {
      if (w.isMounted) {
        let {
          next: le,
          bu: j,
          u: ne,
          parent: Oe,
          vnode: y
        } = w;
        {
          const Z = Th(w);
          if (Z) {
            le && (le.el = y.el, K(w, le, S)), Z.asyncDep.then(() => {
              Wt(() => {
                w.isUnmounted || z()
              }, ie)
            });
            return
          }
        }
        let f = le,
          h;
        cs(w, !1), le ? (le.el = y.el, K(w, le, S)) : le = y, j && Zi(j), (h = le.props && le.props.onVnodeBeforeUpdate) && Zn(h, Oe, le, y), cs(w, !0);
        const I = zd(w),
          $ = w.subTree;
        w.subTree = I, E($, I, d($.el), W($), w, ie, se), le.el = I.el, f === null && cb(w, I.el), ne && Wt(ne, ie), (h = le.props && le.props.onVnodeUpdated) && Wt(() => Zn(h, Oe, le, y), ie)
      } else {
        let le;
        const {
          el: j,
          props: ne
        } = C, {
          bm: Oe,
          m: y,
          parent: f,
          root: h,
          type: I
        } = w, $ = Ks(C);
        cs(w, !1), Oe && Zi(Oe), !$ && (le = ne && ne.onVnodeBeforeMount) && Zn(le, f, C), cs(w, !0);
        {
          h.ce && h.ce._hasShadowRoot() && h.ce._injectChildStyle(I);
          const Z = w.subTree = zd(w);
          E(null, Z, U, te, w, ie, se), C.el = Z.el
        }
        if (y && Wt(y, ie), !$ && (le = ne && ne.onVnodeMounted)) {
          const Z = C;
          Wt(() => Zn(le, f, Z), ie)
        }(C.shapeFlag & 256 || f && Ks(f.vnode) && f.vnode.shapeFlag & 256) && w.a && Wt(w.a, ie), w.isMounted = !0, C = U = te = null
      }
    };
    w.scope.on();
    const x = w.effect = new Am(T);
    w.scope.off();
    const z = w.update = x.run.bind(x),
      Ee = w.job = x.runIfDirty.bind(x);
    Ee.i = w, Ee.id = w.uid, x.scheduler = () => Cu(Ee), cs(w, !0), z()
  }, K = (w, C, U) => {
    C.component = w;
    const te = w.vnode.props;
    w.vnode = C, w.next = null, ub(w, C.props, te, U), _b(w, C.children, U), Lr(), Md(w), Dr()
  }, ee = (w, C, U, te, ie, se, S, T, x = !1) => {
    const z = w && w.children,
      Ee = w ? w.shapeFlag : 0,
      le = C.children,
      {
        patchFlag: j,
        shapeFlag: ne
      } = C;
    if (j > 0) {
      if (j & 128) {
        Q(z, le, U, te, ie, se, S, T, x);
        return
      } else if (j & 256) {
        _e(z, le, U, te, ie, se, S, T, x);
        return
      }
    }
    ne & 8 ? (Ee & 16 && He(z, ie, se), le !== z && u(U, le)) : Ee & 16 ? ne & 16 ? Q(z, le, U, te, ie, se, S, T, x) : He(z, ie, se, !0) : (Ee & 8 && u(U, ""), ne & 16 && J(le, U, te, ie, se, S, T, x))
  }, _e = (w, C, U, te, ie, se, S, T, x) => {
    w = w || Hs, C = C || Hs;
    const z = w.length,
      Ee = C.length,
      le = Math.min(z, Ee);
    let j;
    for (j = 0; j < le; j++) {
      const ne = C[j] = x ? br(C[j]) : ar(C[j]);
      E(w[j], ne, U, null, ie, se, S, T, x)
    }
    z > Ee ? He(w, ie, se, !0, !1, le) : J(C, U, te, ie, se, S, T, x, le)
  }, Q = (w, C, U, te, ie, se, S, T, x) => {
    let z = 0;
    const Ee = C.length;
    let le = w.length - 1,
      j = Ee - 1;
    for (; z <= le && z <= j;) {
      const ne = w[z],
        Oe = C[z] = x ? br(C[z]) : ar(C[z]);
      if (ps(ne, Oe)) E(ne, Oe, U, null, ie, se, S, T, x);
      else break;
      z++
    }
    for (; z <= le && z <= j;) {
      const ne = w[le],
        Oe = C[j] = x ? br(C[j]) : ar(C[j]);
      if (ps(ne, Oe)) E(ne, Oe, U, null, ie, se, S, T, x);
      else break;
      le--, j--
    }
    if (z > le) {
      if (z <= j) {
        const ne = j + 1,
          Oe = ne < Ee ? C[ne].el : te;
        for (; z <= j;) E(null, C[z] = x ? br(C[z]) : ar(C[z]), U, Oe, ie, se, S, T, x), z++
      }
    } else if (z > j)
      for (; z <= le;) oe(w[z], ie, se, !0), z++;
    else {
      const ne = z,
        Oe = z,
        y = new Map;
      for (z = Oe; z <= j; z++) {
        const Me = C[z] = x ? br(C[z]) : ar(C[z]);
        Me.key != null && y.set(Me.key, z)
      }
      let f, h = 0;
      const I = j - Oe + 1;
      let $ = !1,
        Z = 0;
      const ae = new Array(I);
      for (z = 0; z < I; z++) ae[z] = 0;
      for (z = ne; z <= le; z++) {
        const Me = w[z];
        if (h >= I) {
          oe(Me, ie, se, !0);
          continue
        }
        let Ue;
        if (Me.key != null) Ue = y.get(Me.key);
        else
          for (f = Oe; f <= j; f++)
            if (ae[f - Oe] === 0 && ps(Me, C[f])) {
              Ue = f;
              break
            } Ue === void 0 ? oe(Me, ie, se, !0) : (ae[Ue - Oe] = z + 1, Ue >= Z ? Z = Ue : $ = !0, E(Me, C[Ue], U, null, ie, se, S, T, x), h++)
      }
      const Fe = $ ? vb(ae) : Hs;
      for (f = Fe.length - 1, z = I - 1; z >= 0; z--) {
        const Me = Oe + z,
          Ue = C[Me],
          ct = C[Me + 1],
          ze = Me + 1 < Ee ? ct.el || Oh(ct) : te;
        ae[z] === 0 ? E(null, Ue, U, ze, ie, se, S, T, x) : $ && (f < 0 || z !== Fe[f] ? V(Ue, U, ze, 2) : f--)
      }
    }
  }, V = (w, C, U, te, ie = null) => {
    const {
      el: se,
      type: S,
      transition: T,
      children: x,
      shapeFlag: z
    } = w;
    if (z & 6) {
      V(w.component.subTree, C, U, te);
      return
    }
    if (z & 128) {
      w.suspense.move(C, U, te);
      return
    }
    if (z & 64) {
      S.move(w, C, U, ye);
      return
    }
    if (S === Xe) {
      r(se, C, U);
      for (let le = 0; le < x.length; le++) V(x[le], C, U, te);
      r(w.anchor, C, U);
      return
    }
    if (S === ta) {
      R(w, C, U);
      return
    }
    if (te !== 2 && z & 1 && T)
      if (te === 0) T.beforeEnter(se), r(se, C, U), Wt(() => T.enter(se), ie);
      else {
        const {
          leave: le,
          delayLeave: j,
          afterLeave: ne
        } = T, Oe = () => {
          w.ctx.isUnmounted ? s(se) : r(se, C, U)
        }, y = () => {
          se._isLeaving && se[ir](!0), le(se, () => {
            Oe(), ne && ne()
          })
        };
        j ? j(se, Oe, y) : y()
      }
    else r(se, C, U)
  }, oe = (w, C, U, te = !1, ie = !1) => {
    const {
      type: se,
      props: S,
      ref: T,
      children: x,
      dynamicChildren: z,
      shapeFlag: Ee,
      patchFlag: le,
      dirs: j,
      cacheIndex: ne
    } = w;
    if (le === -2 && (ie = !1), T != null && (Lr(), Mo(T, null, U, w, !0), Dr()), ne != null && (C.renderCache[ne] = void 0), Ee & 256) {
      C.ctx.deactivate(w);
      return
    }
    const Oe = Ee & 1 && j,
      y = !Ks(w);
    let f;
    if (y && (f = S && S.onVnodeBeforeUnmount) && Zn(f, C, w), Ee & 6) Le(w.component, U, te);
    else {
      if (Ee & 128) {
        w.suspense.unmount(U, te);
        return
      }
      Oe && as(w, null, C, "beforeUnmount"), Ee & 64 ? w.type.remove(w, C, U, ye, te) : z && !z.hasOnce && (se !== Xe || le > 0 && le & 64) ? He(z, C, U, !1, !0) : (se === Xe && le & 384 || !ie && Ee & 16) && He(x, C, U), te && Ae(w)
    }(y && (f = S && S.onVnodeUnmounted) || Oe) && Wt(() => {
      f && Zn(f, C, w), Oe && as(w, null, C, "unmounted")
    }, U)
  }, Ae = w => {
    const {
      type: C,
      el: U,
      anchor: te,
      transition: ie
    } = w;
    if (C === Xe) {
      Ne(U, te);
      return
    }
    if (C === ta) {
      O(w);
      return
    }
    const se = () => {
      s(U), ie && !ie.persisted && ie.afterLeave && ie.afterLeave()
    };
    if (w.shapeFlag & 1 && ie && !ie.persisted) {
      const {
        leave: S,
        delayLeave: T
      } = ie, x = () => S(U, se);
      T ? T(w.el, se, x) : x()
    } else se()
  }, Ne = (w, C) => {
    let U;
    for (; w !== C;) U = g(w), s(w), w = U;
    s(C)
  }, Le = (w, C, U) => {
    const {
      bum: te,
      scope: ie,
      job: se,
      subTree: S,
      um: T,
      m: x,
      a: z
    } = w;
    Qd(x), Qd(z), te && Zi(te), ie.stop(), se && (se.flags |= 8, oe(S, w, C, U)), T && Wt(T, C), Wt(() => {
      w.isUnmounted = !0
    }, C)
  }, He = (w, C, U, te = !1, ie = !1, se = 0) => {
    for (let S = se; S < w.length; S++) oe(w[S], C, U, te, ie)
  }, W = w => {
    if (w.shapeFlag & 6) return W(w.component.subTree);
    if (w.shapeFlag & 128) return w.suspense.next();
    const C = g(w.anchor || w.el),
      U = C && C[Ym];
    return U ? g(U) : C
  };
  let he = !1;
  const pe = (w, C, U) => {
      let te;
      w == null ? C._vnode && (oe(C._vnode, null, null, !0), te = C._vnode.component) : E(C._vnode || null, w, C, null, null, null, U), C._vnode = w, he || (he = !0, Md(te), qm(), he = !1)
    },
    ye = {
      p: E,
      um: oe,
      m: V,
      r: Ae,
      mt: de,
      mc: J,
      pc: ee,
      pbc: Y,
      n: W,
      o: e
    };
  return {
    render: pe,
    hydrate: void 0,
    createApp: nb(pe)
  }
}

function $c({
  type: e,
  props: t
}, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}

function cs({
  effect: e,
  job: t
}, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5)
}

function gb(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted
}

function Fu(e, t, n = !1) {
  const r = e.children,
    s = t.children;
  if (De(r) && De(s))
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      let a = s[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[o] = br(s[o]), a.el = i.el), !n && a.patchFlag !== -2 && Fu(i, a)), a.type === Ei && (a.patchFlag === -1 && (a = s[o] = br(a)), a.el = i.el), a.type === zt && !a.el && (a.el = i.el)
    }
}

function vb(e) {
  const t = e.slice(),
    n = [0];
  let r, s, o, i, a;
  const c = e.length;
  for (r = 0; r < c; r++) {
    const l = e[r];
    if (l !== 0) {
      if (s = n[n.length - 1], e[s] < l) {
        t[r] = s, n.push(r);
        continue
      }
      for (o = 0, i = n.length - 1; o < i;) a = o + i >> 1, e[n[a]] < l ? o = a + 1 : i = a;
      l < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r)
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0;) n[o] = i, i = t[i];
  return n
}

function Th(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Th(t)
}

function Qd(e) {
  if (e)
    for (let t = 0; t < e.length; t++) e[t].flags |= 8
}

function Oh(e) {
  if (e.placeholder) return e.placeholder;
  const t = e.component;
  return t ? Oh(t.subTree) : null
}
const Ih = e => e.__isSuspense;

function Eb(e, t) {
  t && t.pendingBranch ? De(e) ? t.effects.push(...e) : t.effects.push(e) : Hm(e)
}
const Xe = Symbol.for("v-fgt"),
  Ei = Symbol.for("v-txt"),
  zt = Symbol.for("v-cmt"),
  ta = Symbol.for("v-stc"),
  Bo = [];
let bn = null;

function B(e = !1) {
  Bo.push(bn = e ? null : [])
}

function yb() {
  Bo.pop(), bn = Bo[Bo.length - 1] || null
}
let Zo = 1;

function Dn(e, t = !1) {
  Zo += e, e < 0 && bn && t && (bn.hasOnce = !0)
}

function Sh(e) {
  return e.dynamicChildren = Zo > 0 ? bn || Hs : null, yb(), Zo > 0 && bn && bn.push(e), e
}

function ue(e, t, n, r, s, o) {
  return Sh(fe(e, t, n, r, s, o, !0))
}

function be(e, t, n, r, s) {
  return Sh(Te(e, t, n, r, s, !0))
}

function ei(e) {
  return e ? e.__v_isVNode === !0 : !1
}

function ps(e, t) {
  return e.type === t.type && e.key === t.key
}
const Rh = ({
    key: e
  }) => e ?? null,
  na = ({
    ref: e,
    ref_key: t,
    ref_for: n
  }) => (typeof e == "number" && (e = "" + e), e != null ? bt(e) || ft(e) || Ve(e) ? {
    i: Mt,
    r: e,
    k: t,
    f: !!n
  } : e : null);

function fe(e, t = null, n = null, r = 0, s = null, o = e === Xe ? 0 : 1, i = !1, a = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Rh(t),
    ref: t && na(t),
    scopeId: Gm,
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
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Mt
  };
  return a ? (Bu(c, n), o & 128 && e.normalize(c)) : n && (c.shapeFlag |= bt(n) ? 8 : 16), Zo > 0 && !i && bn && (c.patchFlag > 0 || o & 6) && c.patchFlag !== 32 && bn.push(c), c
}
const Te = bb;

function bb(e, t = null, n = null, r = 0, s = null, o = !1) {
  if ((!e || e === ih) && (e = zt), ei(e)) {
    const a = Xr(e, t, !0);
    return n && Bu(a, n), Zo > 0 && !o && bn && (a.shapeFlag & 6 ? bn[bn.indexOf(e)] = a : bn.push(a)), a.patchFlag = -2, a
  }
  if (Cb(e) && (e = e.__vccOpts), t) {
    t = Ab(t);
    let {
      class: a,
      style: c
    } = t;
    a && !bt(a) && (t.class = we(a)), nt(c) && (Ga(c) && !De(c) && (c = St({}, c)), t.style = mi(c))
  }
  const i = bt(e) ? 1 : Ih(e) ? 128 : zm(e) ? 64 : nt(e) ? 4 : Ve(e) ? 2 : 0;
  return fe(e, t, n, r, s, i, o, !0)
}

function Ab(e) {
  return e ? Ga(e) || gh(e) ? St({}, e) : e : null
}

function Xr(e, t, n = !1, r = !1) {
  const {
    props: s,
    ref: o,
    patchFlag: i,
    children: a,
    transition: c
  } = e, l = t ? ln(s || {}, t) : s, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Rh(l),
    ref: t && t.ref ? n && o ? De(o) ? o.concat(na(t)) : [o, na(t)] : na(t) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Xe ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Xr(e.ssContent),
    ssFallback: e.ssFallback && Xr(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && r && Ts(u, c.clone(u)), u
}

function Vt(e = " ", t = 0) {
  return Te(Ei, null, e, t)
}

function ge(e = "", t = !1) {
  return t ? (B(), be(zt, null, e)) : Te(zt, null, e)
}

function ar(e) {
  return e == null || typeof e == "boolean" ? Te(zt) : De(e) ? Te(Xe, null, e.slice()) : ei(e) ? br(e) : Te(Ei, null, String(e))
}

function br(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Xr(e)
}

function Bu(e, t) {
  let n = 0;
  const {
    shapeFlag: r
  } = e;
  if (t == null) t = null;
  else if (De(t)) n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Bu(e, s()), s._c && (s._d = !0));
      return
    } else {
      n = 32;
      const s = t._;
      !s && !gh(t) ? t._ctx = Mt : s === 3 && Mt && (Mt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
    }
  else Ve(t) ? (t = {
    default: t,
    _ctx: Mt
  }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Vt(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n
}

function ln(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class") t.class !== r.class && (t.class = we([t.class, r.class]));
      else if (s === "style") t.style = mi([t.style, r.style]);
    else if (Ma(s)) {
      const o = t[s],
        i = r[s];
      i && o !== i && !(De(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i)
    } else s !== "" && (t[s] = r[s])
  }
  return t
}

function Zn(e, t, n, r = null) {
  Wn(e, t, 7, [n, r])
}
const Tb = dh();
let Ob = 0;

function Ib(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || Tb,
    o = {
      uid: Ob++,
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
      scope: new bm(!0),
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
      propsOptions: Eh(r, s),
      emitsOptions: ph(r, s),
      emit: null,
      emitted: null,
      propsDefaults: Je,
      inheritAttrs: r.inheritAttrs,
      ctx: Je,
      data: Je,
      props: Je,
      attrs: Je,
      slots: Je,
      refs: Je,
      setupState: Je,
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
  return o.ctx = {
    _: o
  }, o.root = t ? t.root : o, o.emit = rb.bind(null, o), e.ce && e.ce(o), o
}
let Xt = null;
const un = () => Xt || Mt;
let Ta, wl;
{
  const e = Ha(),
    t = (n, r) => {
      let s;
      return (s = e[n]) || (s = e[n] = []), s.push(r), o => {
        s.length > 1 ? s.forEach(i => i(o)) : s[0](o)
      }
    };
  Ta = t("__VUE_INSTANCE_SETTERS__", n => Xt = n), wl = t("__VUE_SSR_SETTERS__", n => ti = n)
}
const yi = e => {
    const t = Xt;
    return Ta(e), e.scope.on(), () => {
      e.scope.off(), Ta(t)
    }
  },
  Zd = () => {
    Xt && Xt.scope.off(), Ta(null)
  };

function wh(e) {
  return e.vnode.shapeFlag & 4
}
let ti = !1;

function Sb(e, t = !1, n = !1) {
  t && wl(t);
  const {
    props: r,
    children: s
  } = e.vnode, o = wh(e);
  lb(e, r, o, t), pb(e, s, n || t);
  const i = o ? Rb(e, t) : void 0;
  return t && wl(!1), i
}

function Rb(e, t) {
  const n = e.type;
  e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, zy);
  const {
    setup: r
  } = n;
  if (r) {
    Lr();
    const s = e.setupContext = r.length > 1 ? Ch(e) : null,
      o = yi(e),
      i = gi(r, e, 0, [e.props, s]),
      a = pm(i);
    if (Dr(), o(), (a || e.sp) && !Ks(e) && rh(e), a) {
      if (i.then(Zd, Zd), t) return i.then(c => {
          ef(e, c)
        })
        .catch(c => {
          Ka(c, e, 0)
        });
      e.asyncDep = i
    } else ef(e, i)
  } else Ph(e)
}

function ef(e, t, n) {
  Ve(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : nt(t) && (e.setupState = Mm(t)), Ph(e)
}

function Ph(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Un);
  {
    const s = yi(e);
    Lr();
    try {
      Xy(e)
    } finally {
      Dr(), s()
    }
  }
}
const wb = {
  get(e, t) {
    return Yt(e, "get", ""), e[t]
  }
};

function Ch(e) {
  const t = n => {
    e.exposed = n || {}
  };
  return {
    attrs: new Proxy(e.attrs, wb),
    slots: e.slots,
    emit: e.emit,
    expose: t
  }
}

function Za(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Mm(Pu(e.exposed)), {
    get(t, n) {
      if (n in t) return t[n];
      if (n in Fo) return Fo[n](e)
    },
    has(t, n) {
      return n in t || n in Fo
    }
  })) : e.proxy
}

function Pb(e, t = !0) {
  return Ve(e) ? e.displayName || e.name : e.name || t && e.__name
}

function Cb(e) {
  return Ve(e) && "__vccOpts" in e
}
const q = (e, t) => wy(e, t, ti);

function bi(e, t, n) {
  try {
    Dn(-1);
    const r = arguments.length;
    return r === 2 ? nt(t) && !De(t) ? ei(t) ? Te(e, null, [t]) : Te(e, t) : Te(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && ei(n) && (n = [n]), Te(e, t, n))
  } finally {
    Dn(1)
  }
}
const Lb = "3.5.28";
let Pl;
const tf = typeof window < "u" && window.trustedTypes;
if (tf) try {
  Pl = tf.createPolicy("vue", {
    createHTML: e => e
  })
} catch {}
const Lh = Pl ? e => Pl.createHTML(e) : e => e,
  Db = "http://www.w3.org/2000/svg",
  kb = "http://www.w3.org/1998/Math/MathML",
  Er = typeof document < "u" ? document : null,
  nf = Er && Er.createElement("template"),
  xb = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: e => {
      const t = e.parentNode;
      t && t.removeChild(e)
    },
    createElement: (e, t, n, r) => {
      const s = t === "svg" ? Er.createElementNS(Db, e) : t === "mathml" ? Er.createElementNS(kb, e) : n ? Er.createElement(e, {
        is: n
      }) : Er.createElement(e);
      return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s
    },
    createText: e => Er.createTextNode(e),
    createComment: e => Er.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => Er.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, r, s, o) {
      const i = n ? n.previousSibling : t.lastChild;
      if (s && (s === o || s.nextSibling))
        for (; t.insertBefore(s.cloneNode(!0), n), !(s === o || !(s = s.nextSibling)););
      else {
        nf.innerHTML = Lh(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
        const a = nf.content;
        if (r === "svg" || r === "mathml") {
          const c = a.firstChild;
          for (; c.firstChild;) a.appendChild(c.firstChild);
          a.removeChild(c)
        }
        t.insertBefore(a, n)
      }
      return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
  },
  Mr = "transition",
  ho = "animation",
  Xs = Symbol("_vtc"),
  Dh = {
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
  kh = St({}, Zm, Dh),
  Nb = e => (e.displayName = "Transition", e.props = kh, e),
  LM = Nb((e, {
    slots: t
  }) => bi(Fy, xh(e), t)),
  ls = (e, t = []) => {
    De(e) ? e.forEach(n => n(...t)) : e && e(...t)
  },
  rf = e => e ? De(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

function xh(e) {
  const t = {};
  for (const G in e) G in Dh || (t[G] = e[G]);
  if (e.css === !1) return t;
  const {
    name: n = "v",
    type: r,
    duration: s,
    enterFromClass: o = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: a = `${n}-enter-to`,
    appearFromClass: c = o,
    appearActiveClass: l = i,
    appearToClass: u = a,
    leaveFromClass: d = `${n}-leave-from`,
    leaveActiveClass: g = `${n}-leave-active`,
    leaveToClass: p = `${n}-leave-to`
  } = e, m = $b(s), E = m && m[0], b = m && m[1], {
    onBeforeEnter: v,
    onEnter: A,
    onEnterCancelled: R,
    onLeave: O,
    onLeaveCancelled: L,
    onBeforeAppear: P = v,
    onAppear: D = A,
    onAppearCancelled: J = R
  } = t, k = (G, me, de, X) => {
    G._enterCancelled = X, Br(G, me ? u : a), Br(G, me ? l : i), de && de()
  }, Y = (G, me) => {
    G._isLeaving = !1, Br(G, d), Br(G, p), Br(G, g), me && me()
  }, H = G => (me, de) => {
    const X = G ? D : A,
      N = () => k(me, G, de);
    ls(X, [me, N]), sf(() => {
      Br(me, G ? c : o), rr(me, G ? u : a), rf(X) || of(me, r, E, N)
    })
  };
  return St(t, {
    onBeforeEnter(G) {
      ls(v, [G]), rr(G, o), rr(G, i)
    },
    onBeforeAppear(G) {
      ls(P, [G]), rr(G, c), rr(G, l)
    },
    onEnter: H(!1),
    onAppear: H(!0),
    onLeave(G, me) {
      G._isLeaving = !0;
      const de = () => Y(G, me);
      rr(G, d), G._enterCancelled ? (rr(G, g), Cl(G)) : (Cl(G), rr(G, g)), sf(() => {
        G._isLeaving && (Br(G, d), rr(G, p), rf(O) || of(G, r, b, de))
      }), ls(O, [G, de])
    },
    onEnterCancelled(G) {
      k(G, !1, void 0, !0), ls(R, [G])
    },
    onAppearCancelled(G) {
      k(G, !0, void 0, !0), ls(J, [G])
    },
    onLeaveCancelled(G) {
      Y(G), ls(L, [G])
    }
  })
}

function $b(e) {
  if (e == null) return null;
  if (nt(e)) return [Vc(e.enter), Vc(e.leave)];
  {
    const t = Vc(e);
    return [t, t]
  }
}

function Vc(e) {
  return GE(e)
}

function rr(e, t) {
  t.split(/\s+/)
    .forEach(n => n && e.classList.add(n)), (e[Xs] || (e[Xs] = new Set))
    .add(t)
}

function Br(e, t) {
  t.split(/\s+/)
    .forEach(r => r && e.classList.remove(r));
  const n = e[Xs];
  n && (n.delete(t), n.size || (e[Xs] = void 0))
}

function sf(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let Vb = 0;

function of(e, t, n, r) {
  const s = e._endId = ++Vb,
    o = () => {
      s === e._endId && r()
    };
  if (n != null) return setTimeout(o, n);
  const {
    type: i,
    timeout: a,
    propCount: c
  } = Nh(e, t);
  if (!i) return r();
  const l = i + "end";
  let u = 0;
  const d = () => {
      e.removeEventListener(l, g), o()
    },
    g = p => {
      p.target === e && ++u >= c && d()
    };
  setTimeout(() => {
    u < c && d()
  }, a + 1), e.addEventListener(l, g)
}

function Nh(e, t) {
  const n = window.getComputedStyle(e),
    r = m => (n[m] || "")
    .split(", "),
    s = r(`${Mr}Delay`),
    o = r(`${Mr}Duration`),
    i = af(s, o),
    a = r(`${ho}Delay`),
    c = r(`${ho}Duration`),
    l = af(a, c);
  let u = null,
    d = 0,
    g = 0;
  t === Mr ? i > 0 && (u = Mr, d = i, g = o.length) : t === ho ? l > 0 && (u = ho, d = l, g = c.length) : (d = Math.max(i, l), u = d > 0 ? i > l ? Mr : ho : null, g = u ? u === Mr ? o.length : c.length : 0);
  const p = u === Mr && /\b(?:transform|all)(?:,|$)/.test(r(`${Mr}Property`)
    .toString());
  return {
    type: u,
    timeout: d,
    propCount: g,
    hasTransform: p
  }
}

function af(e, t) {
  for (; e.length < t.length;) e = e.concat(e);
  return Math.max(...t.map((n, r) => cf(n) + cf(e[r])))
}

function cf(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1)
    .replace(",", ".")) * 1e3
}

function Cl(e) {
  return (e ? e.ownerDocument : document)
    .body.offsetHeight
}

function Mb(e, t, n) {
  const r = e[Xs];
  r && (t = (t ? [t, ...r] : [...r])
    .join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const Oa = Symbol("_vod"),
  $h = Symbol("_vsh"),
  Co = {
    name: "show",
    beforeMount(e, {
      value: t
    }, {
      transition: n
    }) {
      e[Oa] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : go(e, t)
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
      !t != !n && (r ? t ? (r.beforeEnter(e), go(e, !0), r.enter(e)) : r.leave(e, () => {
        go(e, !1)
      }) : go(e, t))
    },
    beforeUnmount(e, {
      value: t
    }) {
      go(e, t)
    }
  };

function go(e, t) {
  e.style.display = t ? e[Oa] : "none", e[$h] = !t
}
const Vh = Symbol("");

function Mh(e) {
  const t = un();
  if (!t) return;
  const n = t.ut = (s = e(t.proxy)) => {
      Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`))
        .forEach(o => Ia(o, s))
    },
    r = () => {
      const s = e(t.proxy);
      t.ce ? Ia(t.ce, s) : Ll(t.subTree, s), n(s)
    };
  oh(() => {
    Hm(r)
  }), Rt(() => {
    We(r, Un, {
      flush: "post"
    });
    const s = new MutationObserver(r);
    s.observe(t.subTree.el.parentNode, {
      childList: !0
    }), co(() => s.disconnect())
  })
}

function Ll(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      Ll(n.activeBranch, t)
    })
  }
  for (; e.component;) e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el) Ia(e.el, t);
  else if (e.type === Xe) e.children.forEach(n => Ll(n, t));
  else if (e.type === ta) {
    let {
      el: n,
      anchor: r
    } = e;
    for (; n && (Ia(n, t), n !== r);) n = n.nextSibling
  }
}

function Ia(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let r = "";
    for (const s in t) {
      const o = ey(t[s]);
      n.setProperty(`--${s}`, o), r += `--${s}: ${o};`
    }
    n[Vh] = r
  }
}
const Fb = /(?:^|;)\s*display\s*:/;

function Bb(e, t, n) {
  const r = e.style,
    s = bt(n);
  let o = !1;
  if (n && !s) {
    if (t)
      if (bt(t))
        for (const i of t.split(";")) {
          const a = i.slice(0, i.indexOf(":"))
            .trim();
          n[a] == null && ra(r, a, "")
        } else
          for (const i in t) n[i] == null && ra(r, i, "");
    for (const i in n) i === "display" && (o = !0), ra(r, i, n[i])
  } else if (s) {
    if (t !== n) {
      const i = r[Vh];
      i && (n += ";" + i), r.cssText = n, o = Fb.test(n)
    }
  } else t && e.removeAttribute("style");
  Oa in e && (e[Oa] = o ? r.display : "", e[$h] && (r.display = "none"))
}
const lf = /\s*!important$/;

function ra(e, t, n) {
  if (De(n)) n.forEach(r => ra(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const r = Ub(e, t);
    lf.test(n) ? e.setProperty(kr(r), n.replace(lf, ""), "important") : e[r] = n
  }
}
const uf = ["Webkit", "Moz", "ms"],
  Mc = {};

function Ub(e, t) {
  const n = Mc[t];
  if (n) return n;
  let r = On(t);
  if (r !== "filter" && r in e) return Mc[t] = r;
  r = ja(r);
  for (let s = 0; s < uf.length; s++) {
    const o = uf[s] + r;
    if (o in e) return Mc[t] = o
  }
  return t
}
const df = "http://www.w3.org/1999/xlink";

function ff(e, t, n, r, s, o = QE(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(df, t.slice(6, t.length)) : e.setAttributeNS(df, t, n) : n == null || o && !gm(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : Hn(n) ? String(n) : n)
}

function pf(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Lh(n) : n);
    return
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && !o.includes("-")) {
    const a = o === "OPTION" ? e.getAttribute("value") || "" : e.value,
      c = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
    (a !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
    return
  }
  let i = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = gm(n) : n == null && a === "string" ? (n = "", i = !0) : a === "number" && (n = 0, i = !0)
  }
  try {
    e[t] = n
  } catch {}
  i && e.removeAttribute(s || t)
}

function Uu(e, t, n, r) {
  e.addEventListener(t, n, r)
}

function jb(e, t, n, r) {
  e.removeEventListener(t, n, r)
}
const _f = Symbol("_vei");

function Hb(e, t, n, r, s = null) {
  const o = e[_f] || (e[_f] = {}),
    i = o[t];
  if (r && i) i.value = r;
  else {
    const [a, c] = qb(t);
    if (r) {
      const l = o[t] = Kb(r, s);
      Uu(e, a, l, c)
    } else i && (jb(e, a, i, c), o[t] = void 0)
  }
}
const mf = /(?:Once|Passive|Capture)$/;

function qb(e) {
  let t;
  if (mf.test(e)) {
    t = {};
    let r;
    for (; r = e.match(mf);) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0
  }
  return [e[2] === ":" ? e.slice(3) : kr(e.slice(2)), t]
}
let Fc = 0;
const Wb = Promise.resolve(),
  Gb = () => Fc || (Wb.then(() => Fc = 0), Fc = Date.now());

function Kb(e, t) {
  const n = r => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    Wn(Yb(r, n.value), t, 5, [r])
  };
  return n.value = e, n.attached = Gb(), n
}

function Yb(e, t) {
  if (De(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0
    }, t.map(r => s => !s._stopped && r && r(s))
  } else return t
}
const hf = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
  zb = (e, t, n, r, s, o) => {
    const i = s === "svg";
    t === "class" ? Mb(e, r, i) : t === "style" ? Bb(e, n, r) : Ma(t) ? yu(t) || Hb(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Xb(e, t, r, i)) ? (pf(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ff(e, t, r, i, o, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !bt(r)) ? pf(e, On(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), ff(e, t, r, i))
  };

function Xb(e, t, n, r) {
  if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && hf(t) && Ve(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE") return !1
  }
  return hf(t) && bt(n) ? !1 : t in e
}
const Fh = new WeakMap,
  Bh = new WeakMap,
  Sa = Symbol("_moveCb"),
  gf = Symbol("_enterCb"),
  Jb = e => (delete e.props.mode, e),
  Qb = Jb({
    name: "TransitionGroup",
    props: St({}, kh, {
      tag: String,
      moveClass: String
    }),
    setup(e, {
      slots: t
    }) {
      const n = un(),
        r = Qm();
      let s, o;
      return ku(() => {
        if (!s.length) return;
        const i = e.moveClass || `${e.name||"v"}-move`;
        if (!n0(s[0].el, n.vnode.el, i)) {
          s = [];
          return
        }
        s.forEach(Zb), s.forEach(e0);
        const a = s.filter(t0);
        Cl(n.vnode.el), a.forEach(c => {
          const l = c.el,
            u = l.style;
          rr(l, i), u.transform = u.webkitTransform = u.transitionDuration = "";
          const d = l[Sa] = g => {
            g && g.target !== l || (!g || g.propertyName.endsWith("transform")) && (l.removeEventListener("transitionend", d), l[Sa] = null, Br(l, i))
          };
          l.addEventListener("transitionend", d)
        }), s = []
      }), () => {
        const i = qe(e),
          a = xh(i);
        let c = i.tag || Xe;
        if (s = [], o)
          for (let l = 0; l < o.length; l++) {
            const u = o[l];
            u.el && u.el instanceof Element && (s.push(u), Ts(u, Xo(u, a, r, n)), Fh.set(u, Uh(u.el)))
          }
        o = t.default ? Du(t.default()) : [];
        for (let l = 0; l < o.length; l++) {
          const u = o[l];
          u.key != null && Ts(u, Xo(u, a, r, n))
        }
        return Te(c, null, o)
      }
    }
  }),
  vf = Qb;

function Zb(e) {
  const t = e.el;
  t[Sa] && t[Sa](), t[gf] && t[gf]()
}

function e0(e) {
  Bh.set(e, Uh(e.el))
}

function t0(e) {
  const t = Fh.get(e),
    n = Bh.get(e),
    r = t.left - n.left,
    s = t.top - n.top;
  if (r || s) {
    const o = e.el,
      i = o.style,
      a = o.getBoundingClientRect();
    let c = 1,
      l = 1;
    return o.offsetWidth && (c = a.width / o.offsetWidth), o.offsetHeight && (l = a.height / o.offsetHeight), (!Number.isFinite(c) || c === 0) && (c = 1), (!Number.isFinite(l) || l === 0) && (l = 1), Math.abs(c - 1) < .01 && (c = 1), Math.abs(l - 1) < .01 && (l = 1), i.transform = i.webkitTransform = `translate(${r/c}px,${s/l}px)`, i.transitionDuration = "0s", e
  }
}

function Uh(e) {
  const t = e.getBoundingClientRect();
  return {
    left: t.left,
    top: t.top
  }
}

function n0(e, t, n) {
  const r = e.cloneNode(),
    s = e[Xs];
  s && s.forEach(a => {
      a.split(/\s+/)
        .forEach(c => c && r.classList.remove(c))
    }), n.split(/\s+/)
    .forEach(a => a && r.classList.add(a)), r.style.display = "none";
  const o = t.nodeType === 1 ? t : t.parentNode;
  o.appendChild(r);
  const {
    hasTransform: i
  } = Nh(r);
  return o.removeChild(r), i
}
const Ra = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return De(t) ? n => Zi(t, n) : t
  },
  Ys = Symbol("_assign"),
  r0 = {
    deep: !0,
    created(e, t, n) {
      e[Ys] = Ra(n), Uu(e, "change", () => {
        const r = e._modelValue,
          s = jh(e),
          o = e.checked,
          i = e[Ys];
        if (De(r)) {
          const a = vm(r, s),
            c = a !== -1;
          if (o && !c) i(r.concat(s));
          else if (!o && c) {
            const l = [...r];
            l.splice(a, 1), i(l)
          }
        } else if (Fa(r)) {
          const a = new Set(r);
          o ? a.add(s) : a.delete(s), i(a)
        } else i(Hh(e, o))
      })
    },
    mounted: Ef,
    beforeUpdate(e, t, n) {
      e[Ys] = Ra(n), Ef(e, t, n)
    }
  };

function Ef(e, {
  value: t,
  oldValue: n
}, r) {
  e._modelValue = t;
  let s;
  if (De(t)) s = vm(t, r.props.value) > -1;
  else if (Fa(t)) s = t.has(r.props.value);
  else {
    if (t === n) return;
    s = As(t, Hh(e, !0))
  }
  e.checked !== s && (e.checked = s)
}
const DM = {
  created(e, {
    value: t
  }, n) {
    e.checked = As(t, n.props.value), e[Ys] = Ra(n), Uu(e, "change", () => {
      e[Ys](jh(e))
    })
  },
  beforeUpdate(e, {
    value: t,
    oldValue: n
  }, r) {
    e[Ys] = Ra(r), t !== n && (e.checked = As(t, r.props.value))
  }
};

function jh(e) {
  return "_value" in e ? e._value : e.value
}

function Hh(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t
}
const s0 = ["ctrl", "shift", "alt", "meta"],
  o0 = {
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
    exact: (e, t) => s0.some(n => e[`${n}Key`] && !t.includes(n))
  },
  Os = (e, t) => {
    if (!e) return e;
    const n = e._withMods || (e._withMods = {}),
      r = t.join(".");
    return n[r] || (n[r] = ((s, ...o) => {
      for (let i = 0; i < t.length; i++) {
        const a = o0[t[i]];
        if (a && a(s, t)) return
      }
      return e(s, ...o)
    }))
  },
  i0 = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
  },
  kM = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      r = t.join(".");
    return n[r] || (n[r] = (s => {
      if (!("key" in s)) return;
      const o = kr(s.key);
      if (t.some(i => i === o || i0[i] === o)) return e(s)
    }))
  },
  a0 = St({
    patchProp: zb
  }, xb);
let yf;

function c0() {
  return yf || (yf = mb(a0))
}
const l0 = ((...e) => {
  const t = c0()
    .createApp(...e),
    {
      mount: n
    } = t;
  return t.mount = r => {
    const s = d0(r);
    if (!s) return;
    const o = t._component;
    !Ve(o) && !o.render && !o.template && (o.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const i = n(s, !1, u0(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i
  }, t
});

function u0(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml"
}

function d0(e) {
  return bt(e) ? document.querySelector(e) : e
}
var yt = (e => (e.LIDL_PLUS = "lidl_plus", e.MOBILE_APP = "mobile_app", e.WEB = "web", e))(yt || {}),
  Or = (e => (e.DEV = "dev", e.TEST = "test", e.QA = "qa", e.PROD = "prod", e))(Or || {});
class ni extends Error {
  constructor(t, n) {
    super(t), this.message = t, this.statusCode = n
  }
}
const ju = () => {
    const e = () => window?.__pca?.cfg?.env ?? window?.$pcaStage ?? null,
      t = () => {
        const r = window.location.hostname.toLowerCase();
        return r.startsWith("dev.") || r.startsWith("localhost") ? Or.DEV : r.startsWith("test.") ? Or.TEST : r.startsWith("qa.") ? Or.QA : r.startsWith("www.") || r.startsWith("lidl.") ? Or.PROD : null
      };
    return {
      getEnvironment: () => e() ?? t() ?? Or.PROD
    }
  },
  f0 = "Thu, 01 Jan 1970 00:00:00 GMT",
  Yr = (e, t, n) => {
    let r = "";
    if (n) {
      const s = new Date;
      s.setTime(s.getTime() + parseInt(n, 10) * 24 * 60 * 60 * 1e3), r = `expires=${s.toUTCString()}`
    }
    document.cookie = `${e}=${encodeURIComponent(t)}; ${r}; path=/`
  },
  Ut = e => {
    let t = null;
    if (document.cookie && document.cookie !== "") {
      const n = document.cookie.split(";");
      for (let r of n)
        if (r = r.trim(), r.substring(0, e.length + 1) === `${e}=`) {
          t = decodeURIComponent(r.substring(e.length + 1)
            .replace(/\+/g, " "));
          break
        }
    }
    return t
  },
  p0 = e => {
    document.cookie = `${e}=;expires=${f0}`
  };
var qh = typeof global == "object" && global && global.Object === Object && global,
  _0 = typeof self == "object" && self && self.Object === Object && self,
  zn = qh || _0 || Function("return this")(),
  Jr = zn.Symbol,
  Wh = Object.prototype,
  m0 = Wh.hasOwnProperty,
  h0 = Wh.toString,
  vo = Jr ? Jr.toStringTag : void 0;

function g0(e) {
  var t = m0.call(e, vo),
    n = e[vo];
  try {
    e[vo] = void 0;
    var r = !0
  } catch {}
  var s = h0.call(e);
  return r && (t ? e[vo] = n : delete e[vo]), s
}
var v0 = Object.prototype,
  E0 = v0.toString;

function y0(e) {
  return E0.call(e)
}
var b0 = "[object Null]",
  A0 = "[object Undefined]",
  bf = Jr ? Jr.toStringTag : void 0;

function lo(e) {
  return e == null ? e === void 0 ? A0 : b0 : bf && bf in Object(e) ? g0(e) : y0(e)
}

function Qr(e) {
  return e != null && typeof e == "object"
}
var T0 = "[object Symbol]";

function O0(e) {
  return typeof e == "symbol" || Qr(e) && lo(e) == T0
}
var Js = Array.isArray,
  I0 = /\s/;

function S0(e) {
  for (var t = e.length; t-- && I0.test(e.charAt(t)););
  return t
}
var R0 = /^\s+/;

function w0(e) {
  return e && e.slice(0, S0(e) + 1)
    .replace(R0, "")
}

function Zr(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function")
}
var Af = NaN,
  P0 = /^[-+]0x[0-9a-f]+$/i,
  C0 = /^0b[01]+$/i,
  L0 = /^0o[0-7]+$/i,
  D0 = parseInt;

function Tf(e) {
  if (typeof e == "number") return e;
  if (O0(e)) return Af;
  if (Zr(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Zr(t) ? t + "" : t
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = w0(e);
  var n = C0.test(e);
  return n || L0.test(e) ? D0(e.slice(2), n ? 2 : 8) : P0.test(e) ? Af : +e
}
var k0 = "[object AsyncFunction]",
  x0 = "[object Function]",
  N0 = "[object GeneratorFunction]",
  $0 = "[object Proxy]";

function Gh(e) {
  if (!Zr(e)) return !1;
  var t = lo(e);
  return t == x0 || t == N0 || t == k0 || t == $0
}
var Bc = zn["__core-js_shared__"],
  Of = (function() {
    var e = /[^.]+$/.exec(Bc && Bc.keys && Bc.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : ""
  })();

function V0(e) {
  return !!Of && Of in e
}
var M0 = Function.prototype,
  F0 = M0.toString;

function ws(e) {
  if (e != null) {
    try {
      return F0.call(e)
    } catch {}
    try {
      return e + ""
    } catch {}
  }
  return ""
}
var B0 = /[\\^$.*+?()[\]{}|]/g,
  U0 = /^\[object .+?Constructor\]$/,
  j0 = Function.prototype,
  H0 = Object.prototype,
  q0 = j0.toString,
  W0 = H0.hasOwnProperty,
  G0 = RegExp("^" + q0.call(W0)
    .replace(B0, "\\$&")
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function K0(e) {
  if (!Zr(e) || V0(e)) return !1;
  var t = Gh(e) ? G0 : U0;
  return t.test(ws(e))
}

function Y0(e, t) {
  return e?.[t]
}

function Ps(e, t) {
  var n = Y0(e, t);
  return K0(n) ? n : void 0
}
var Dl = Ps(zn, "WeakMap"),
  If = Object.create,
  z0 = (function() {
    function e() {}
    return function(t) {
      if (!Zr(t)) return {};
      if (If) return If(t);
      e.prototype = t;
      var n = new e;
      return e.prototype = void 0, n
    }
  })(),
  Sf = (function() {
    try {
      var e = Ps(Object, "defineProperty");
      return e({}, "", {}), e
    } catch {}
  })();

function X0(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
  return e
}
var J0 = 9007199254740991,
  Q0 = /^(?:0|[1-9]\d*)$/;

function Z0(e, t) {
  var n = typeof e;
  return t = t ?? J0, !!t && (n == "number" || n != "symbol" && Q0.test(e)) && e > -1 && e % 1 == 0 && e < t
}

function eA(e, t, n) {
  t == "__proto__" && Sf ? Sf(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n
}

function Hu(e, t) {
  return e === t || e !== e && t !== t
}
var tA = Object.prototype,
  nA = tA.hasOwnProperty;

function rA(e, t, n) {
  var r = e[t];
  (!(nA.call(e, t) && Hu(r, n)) || n === void 0 && !(t in e)) && eA(e, t, n)
}
var sA = 9007199254740991;

function Kh(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= sA
}

function Yh(e) {
  return e != null && Kh(e.length) && !Gh(e)
}
var oA = Object.prototype;

function qu(e) {
  var t = e && e.constructor,
    n = typeof t == "function" && t.prototype || oA;
  return e === n
}

function iA(e, t) {
  for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
  return r
}
var aA = "[object Arguments]";

function Rf(e) {
  return Qr(e) && lo(e) == aA
}
var zh = Object.prototype,
  cA = zh.hasOwnProperty,
  lA = zh.propertyIsEnumerable,
  Xh = Rf((function() {
    return arguments
  })()) ? Rf : function(e) {
    return Qr(e) && cA.call(e, "callee") && !lA.call(e, "callee")
  };

function uA() {
  return !1
}
var Jh = typeof exports == "object" && exports && !exports.nodeType && exports,
  wf = Jh && typeof module == "object" && module && !module.nodeType && module,
  dA = wf && wf.exports === Jh,
  Pf = dA ? zn.Buffer : void 0,
  fA = Pf ? Pf.isBuffer : void 0,
  ri = fA || uA,
  pA = "[object Arguments]",
  _A = "[object Array]",
  mA = "[object Boolean]",
  hA = "[object Date]",
  gA = "[object Error]",
  vA = "[object Function]",
  EA = "[object Map]",
  yA = "[object Number]",
  bA = "[object Object]",
  AA = "[object RegExp]",
  TA = "[object Set]",
  OA = "[object String]",
  IA = "[object WeakMap]",
  SA = "[object ArrayBuffer]",
  RA = "[object DataView]",
  wA = "[object Float32Array]",
  PA = "[object Float64Array]",
  CA = "[object Int8Array]",
  LA = "[object Int16Array]",
  DA = "[object Int32Array]",
  kA = "[object Uint8Array]",
  xA = "[object Uint8ClampedArray]",
  NA = "[object Uint16Array]",
  $A = "[object Uint32Array]",
  ht = {};
ht[wA] = ht[PA] = ht[CA] = ht[LA] = ht[DA] = ht[kA] = ht[xA] = ht[NA] = ht[$A] = !0;
ht[pA] = ht[_A] = ht[SA] = ht[mA] = ht[RA] = ht[hA] = ht[gA] = ht[vA] = ht[EA] = ht[yA] = ht[bA] = ht[AA] = ht[TA] = ht[OA] = ht[IA] = !1;

function VA(e) {
  return Qr(e) && Kh(e.length) && !!ht[lo(e)]
}

function Wu(e) {
  return function(t) {
    return e(t)
  }
}
var Qh = typeof exports == "object" && exports && !exports.nodeType && exports,
  Uo = Qh && typeof module == "object" && module && !module.nodeType && module,
  MA = Uo && Uo.exports === Qh,
  Uc = MA && qh.process,
  Qs = (function() {
    try {
      var e = Uo && Uo.require && Uo.require("util")
        .types;
      return e || Uc && Uc.binding && Uc.binding("util")
    } catch {}
  })(),
  Cf = Qs && Qs.isTypedArray,
  Gu = Cf ? Wu(Cf) : VA,
  FA = Object.prototype,
  BA = FA.hasOwnProperty;

function UA(e, t) {
  var n = Js(e),
    r = !n && Xh(e),
    s = !n && !r && ri(e),
    o = !n && !r && !s && Gu(e),
    i = n || r || s || o,
    a = i ? iA(e.length, String) : [],
    c = a.length;
  for (var l in e) BA.call(e, l) && !(i && (l == "length" || s && (l == "offset" || l == "parent") || o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || Z0(l, c))) && a.push(l);
  return a
}

function Zh(e, t) {
  return function(n) {
    return e(t(n))
  }
}
var jA = Zh(Object.keys, Object),
  HA = Object.prototype,
  qA = HA.hasOwnProperty;

function eg(e) {
  if (!qu(e)) return jA(e);
  var t = [];
  for (var n in Object(e)) qA.call(e, n) && n != "constructor" && t.push(n);
  return t
}

function WA(e) {
  return Yh(e) ? UA(e) : eg(e)
}
var si = Ps(Object, "create");

function GA() {
  this.__data__ = si ? si(null) : {}, this.size = 0
}

function KA(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t
}
var YA = "__lodash_hash_undefined__",
  zA = Object.prototype,
  XA = zA.hasOwnProperty;

function JA(e) {
  var t = this.__data__;
  if (si) {
    var n = t[e];
    return n === YA ? void 0 : n
  }
  return XA.call(t, e) ? t[e] : void 0
}
var QA = Object.prototype,
  ZA = QA.hasOwnProperty;

function eT(e) {
  var t = this.__data__;
  return si ? t[e] !== void 0 : ZA.call(t, e)
}
var tT = "__lodash_hash_undefined__";

function nT(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = si && t === void 0 ? tT : t, this
}

function Is(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n;) {
    var r = e[t];
    this.set(r[0], r[1])
  }
}
Is.prototype.clear = GA;
Is.prototype.delete = KA;
Is.prototype.get = JA;
Is.prototype.has = eT;
Is.prototype.set = nT;

function rT() {
  this.__data__ = [], this.size = 0
}

function ec(e, t) {
  for (var n = e.length; n--;)
    if (Hu(e[n][0], t)) return n;
  return -1
}
var sT = Array.prototype,
  oT = sT.splice;

function iT(e) {
  var t = this.__data__,
    n = ec(t, e);
  if (n < 0) return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : oT.call(t, n, 1), --this.size, !0
}

function aT(e) {
  var t = this.__data__,
    n = ec(t, e);
  return n < 0 ? void 0 : t[n][1]
}

function cT(e) {
  return ec(this.__data__, e) > -1
}

function lT(e, t) {
  var n = this.__data__,
    r = ec(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
}

function Vr(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n;) {
    var r = e[t];
    this.set(r[0], r[1])
  }
}
Vr.prototype.clear = rT;
Vr.prototype.delete = iT;
Vr.prototype.get = aT;
Vr.prototype.has = cT;
Vr.prototype.set = lT;
var oi = Ps(zn, "Map");

function uT() {
  this.size = 0, this.__data__ = {
    hash: new Is,
    map: new(oi || Vr),
    string: new Is
  }
}

function dT(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
}

function tc(e, t) {
  var n = e.__data__;
  return dT(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map
}

function fT(e) {
  var t = tc(this, e)
    .delete(e);
  return this.size -= t ? 1 : 0, t
}

function pT(e) {
  return tc(this, e)
    .get(e)
}

function _T(e) {
  return tc(this, e)
    .has(e)
}

function mT(e, t) {
  var n = tc(this, e),
    r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this
}

function Cs(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n;) {
    var r = e[t];
    this.set(r[0], r[1])
  }
}
Cs.prototype.clear = uT;
Cs.prototype.delete = fT;
Cs.prototype.get = pT;
Cs.prototype.has = _T;
Cs.prototype.set = mT;

function hT(e, t) {
  for (var n = -1, r = t.length, s = e.length; ++n < r;) e[s + n] = t[n];
  return e
}
var gT = Zh(Object.getPrototypeOf, Object);

function vT() {
  this.__data__ = new Vr, this.size = 0
}

function ET(e) {
  var t = this.__data__,
    n = t.delete(e);
  return this.size = t.size, n
}

function yT(e) {
  return this.__data__.get(e)
}

function bT(e) {
  return this.__data__.has(e)
}
var AT = 200;

function TT(e, t) {
  var n = this.__data__;
  if (n instanceof Vr) {
    var r = n.__data__;
    if (!oi || r.length < AT - 1) return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Cs(r)
  }
  return n.set(e, t), this.size = n.size, this
}

function wr(e) {
  var t = this.__data__ = new Vr(e);
  this.size = t.size
}
wr.prototype.clear = vT;
wr.prototype.delete = ET;
wr.prototype.get = yT;
wr.prototype.has = bT;
wr.prototype.set = TT;
var tg = typeof exports == "object" && exports && !exports.nodeType && exports,
  Lf = tg && typeof module == "object" && module && !module.nodeType && module,
  OT = Lf && Lf.exports === tg,
  Df = OT ? zn.Buffer : void 0;
Df && Df.allocUnsafe;

function IT(e, t) {
  return e.slice()
}

function ST(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, s = 0, o = []; ++n < r;) {
    var i = e[n];
    t(i, n, e) && (o[s++] = i)
  }
  return o
}

function RT() {
  return []
}
var wT = Object.prototype,
  PT = wT.propertyIsEnumerable,
  kf = Object.getOwnPropertySymbols,
  CT = kf ? function(e) {
    return e == null ? [] : (e = Object(e), ST(kf(e), function(t) {
      return PT.call(e, t)
    }))
  } : RT;

function LT(e, t, n) {
  var r = t(e);
  return Js(e) ? r : hT(r, n(e))
}

function kl(e) {
  return LT(e, WA, CT)
}
var xl = Ps(zn, "DataView"),
  Nl = Ps(zn, "Promise"),
  $l = Ps(zn, "Set"),
  xf = "[object Map]",
  DT = "[object Object]",
  Nf = "[object Promise]",
  $f = "[object Set]",
  Vf = "[object WeakMap]",
  Mf = "[object DataView]",
  kT = ws(xl),
  xT = ws(oi),
  NT = ws(Nl),
  $T = ws($l),
  VT = ws(Dl),
  Pn = lo;
(xl && Pn(new xl(new ArrayBuffer(1))) != Mf || oi && Pn(new oi) != xf || Nl && Pn(Nl.resolve()) != Nf || $l && Pn(new $l) != $f || Dl && Pn(new Dl) != Vf) && (Pn = function(e) {
  var t = lo(e),
    n = t == DT ? e.constructor : void 0,
    r = n ? ws(n) : "";
  if (r) switch (r) {
    case kT:
      return Mf;
    case xT:
      return xf;
    case NT:
      return Nf;
    case $T:
      return $f;
    case VT:
      return Vf
  }
  return t
});
var MT = Object.prototype,
  FT = MT.hasOwnProperty;

function BT(e) {
  var t = e.length,
    n = new e.constructor(t);
  return t && typeof e[0] == "string" && FT.call(e, "index") && (n.index = e.index, n.input = e.input), n
}
var wa = zn.Uint8Array;

function Ku(e) {
  var t = new e.constructor(e.byteLength);
  return new wa(t)
    .set(new wa(e)), t
}

function UT(e, t) {
  var n = Ku(e.buffer);
  return new e.constructor(n, e.byteOffset, e.byteLength)
}
var jT = /\w*$/;

function HT(e) {
  var t = new e.constructor(e.source, jT.exec(e));
  return t.lastIndex = e.lastIndex, t
}
var Ff = Jr ? Jr.prototype : void 0,
  Bf = Ff ? Ff.valueOf : void 0;

function qT(e) {
  return Bf ? Object(Bf.call(e)) : {}
}

function WT(e, t) {
  var n = Ku(e.buffer);
  return new e.constructor(n, e.byteOffset, e.length)
}
var GT = "[object Boolean]",
  KT = "[object Date]",
  YT = "[object Map]",
  zT = "[object Number]",
  XT = "[object RegExp]",
  JT = "[object Set]",
  QT = "[object String]",
  ZT = "[object Symbol]",
  eO = "[object ArrayBuffer]",
  tO = "[object DataView]",
  nO = "[object Float32Array]",
  rO = "[object Float64Array]",
  sO = "[object Int8Array]",
  oO = "[object Int16Array]",
  iO = "[object Int32Array]",
  aO = "[object Uint8Array]",
  cO = "[object Uint8ClampedArray]",
  lO = "[object Uint16Array]",
  uO = "[object Uint32Array]";

function dO(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case eO:
      return Ku(e);
    case GT:
    case KT:
      return new r(+e);
    case tO:
      return UT(e);
    case nO:
    case rO:
    case sO:
    case oO:
    case iO:
    case aO:
    case cO:
    case lO:
    case uO:
      return WT(e);
    case YT:
      return new r;
    case zT:
    case QT:
      return new r(e);
    case XT:
      return HT(e);
    case JT:
      return new r;
    case ZT:
      return qT(e)
  }
}

function fO(e) {
  return typeof e.constructor == "function" && !qu(e) ? z0(gT(e)) : {}
}
var pO = "[object Map]";

function _O(e) {
  return Qr(e) && Pn(e) == pO
}
var Uf = Qs && Qs.isMap,
  mO = Uf ? Wu(Uf) : _O,
  hO = "[object Set]";

function gO(e) {
  return Qr(e) && Pn(e) == hO
}
var jf = Qs && Qs.isSet,
  vO = jf ? Wu(jf) : gO,
  ng = "[object Arguments]",
  EO = "[object Array]",
  yO = "[object Boolean]",
  bO = "[object Date]",
  AO = "[object Error]",
  rg = "[object Function]",
  TO = "[object GeneratorFunction]",
  OO = "[object Map]",
  IO = "[object Number]",
  sg = "[object Object]",
  SO = "[object RegExp]",
  RO = "[object Set]",
  wO = "[object String]",
  PO = "[object Symbol]",
  CO = "[object WeakMap]",
  LO = "[object ArrayBuffer]",
  DO = "[object DataView]",
  kO = "[object Float32Array]",
  xO = "[object Float64Array]",
  NO = "[object Int8Array]",
  $O = "[object Int16Array]",
  VO = "[object Int32Array]",
  MO = "[object Uint8Array]",
  FO = "[object Uint8ClampedArray]",
  BO = "[object Uint16Array]",
  UO = "[object Uint32Array]",
  pt = {};
pt[ng] = pt[EO] = pt[LO] = pt[DO] = pt[yO] = pt[bO] = pt[kO] = pt[xO] = pt[NO] = pt[$O] = pt[VO] = pt[OO] = pt[IO] = pt[sg] = pt[SO] = pt[RO] = pt[wO] = pt[PO] = pt[MO] = pt[FO] = pt[BO] = pt[UO] = !0;
pt[AO] = pt[rg] = pt[CO] = !1;

function sa(e, t, n, r, s, o) {
  var i;
  if (i !== void 0) return i;
  if (!Zr(e)) return e;
  var a = Js(e);
  if (a) i = BT(e);
  else {
    var c = Pn(e),
      l = c == rg || c == TO;
    if (ri(e)) return IT(e);
    if (c == sg || c == ng || l && !s) i = l ? {} : fO(e);
    else {
      if (!pt[c]) return s ? e : {};
      i = dO(e, c)
    }
  }
  o || (o = new wr);
  var u = o.get(e);
  if (u) return u;
  o.set(e, i), vO(e) ? e.forEach(function(p) {
    i.add(sa(p, t, n, p, e, o))
  }) : mO(e) && e.forEach(function(p, m) {
    i.set(m, sa(p, t, n, m, e, o))
  });
  var d = kl,
    g = a ? void 0 : d(e);
  return X0(g || e, function(p, m) {
    g && (m = p, p = e[m]), rA(i, m, sa(p, t, n, m, e, o))
  }), i
}
var jO = 1,
  HO = 4;

function qO(e) {
  return sa(e, jO | HO)
}
var WO = "__lodash_hash_undefined__";

function GO(e) {
  return this.__data__.set(e, WO), this
}

function KO(e) {
  return this.__data__.has(e)
}

function Pa(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.__data__ = new Cs; ++t < n;) this.add(e[t])
}
Pa.prototype.add = Pa.prototype.push = GO;
Pa.prototype.has = KO;

function YO(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r;)
    if (t(e[n], n, e)) return !0;
  return !1
}

function zO(e, t) {
  return e.has(t)
}
var XO = 1,
  JO = 2;

function og(e, t, n, r, s, o) {
  var i = n & XO,
    a = e.length,
    c = t.length;
  if (a != c && !(i && c > a)) return !1;
  var l = o.get(e),
    u = o.get(t);
  if (l && u) return l == t && u == e;
  var d = -1,
    g = !0,
    p = n & JO ? new Pa : void 0;
  for (o.set(e, t), o.set(t, e); ++d < a;) {
    var m = e[d],
      E = t[d];
    if (r) var b = i ? r(E, m, d, t, e, o) : r(m, E, d, e, t, o);
    if (b !== void 0) {
      if (b) continue;
      g = !1;
      break
    }
    if (p) {
      if (!YO(t, function(v, A) {
          if (!zO(p, A) && (m === v || s(m, v, n, r, o))) return p.push(A)
        })) {
        g = !1;
        break
      }
    } else if (!(m === E || s(m, E, n, r, o))) {
      g = !1;
      break
    }
  }
  return o.delete(e), o.delete(t), g
}

function QO(e) {
  var t = -1,
    n = Array(e.size);
  return e.forEach(function(r, s) {
    n[++t] = [s, r]
  }), n
}

function ZO(e) {
  var t = -1,
    n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r
  }), n
}
var eI = 1,
  tI = 2,
  nI = "[object Boolean]",
  rI = "[object Date]",
  sI = "[object Error]",
  oI = "[object Map]",
  iI = "[object Number]",
  aI = "[object RegExp]",
  cI = "[object Set]",
  lI = "[object String]",
  uI = "[object Symbol]",
  dI = "[object ArrayBuffer]",
  fI = "[object DataView]",
  Hf = Jr ? Jr.prototype : void 0,
  jc = Hf ? Hf.valueOf : void 0;

function pI(e, t, n, r, s, o, i) {
  switch (n) {
    case fI:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
      e = e.buffer, t = t.buffer;
    case dI:
      return !(e.byteLength != t.byteLength || !o(new wa(e), new wa(t)));
    case nI:
    case rI:
    case iI:
      return Hu(+e, +t);
    case sI:
      return e.name == t.name && e.message == t.message;
    case aI:
    case lI:
      return e == t + "";
    case oI:
      var a = QO;
    case cI:
      var c = r & eI;
      if (a || (a = ZO), e.size != t.size && !c) return !1;
      var l = i.get(e);
      if (l) return l == t;
      r |= tI, i.set(e, t);
      var u = og(a(e), a(t), r, s, o, i);
      return i.delete(e), u;
    case uI:
      if (jc) return jc.call(e) == jc.call(t)
  }
  return !1
}
var _I = 1,
  mI = Object.prototype,
  hI = mI.hasOwnProperty;

function gI(e, t, n, r, s, o) {
  var i = n & _I,
    a = kl(e),
    c = a.length,
    l = kl(t),
    u = l.length;
  if (c != u && !i) return !1;
  for (var d = c; d--;) {
    var g = a[d];
    if (!(i ? g in t : hI.call(t, g))) return !1
  }
  var p = o.get(e),
    m = o.get(t);
  if (p && m) return p == t && m == e;
  var E = !0;
  o.set(e, t), o.set(t, e);
  for (var b = i; ++d < c;) {
    g = a[d];
    var v = e[g],
      A = t[g];
    if (r) var R = i ? r(A, v, g, t, e, o) : r(v, A, g, e, t, o);
    if (!(R === void 0 ? v === A || s(v, A, n, r, o) : R)) {
      E = !1;
      break
    }
    b || (b = g == "constructor")
  }
  if (E && !b) {
    var O = e.constructor,
      L = t.constructor;
    O != L && "constructor" in e && "constructor" in t && !(typeof O == "function" && O instanceof O && typeof L == "function" && L instanceof L) && (E = !1)
  }
  return o.delete(e), o.delete(t), E
}
var vI = 1,
  qf = "[object Arguments]",
  Wf = "[object Array]",
  Vi = "[object Object]",
  EI = Object.prototype,
  Gf = EI.hasOwnProperty;

function yI(e, t, n, r, s, o) {
  var i = Js(e),
    a = Js(t),
    c = i ? Wf : Pn(e),
    l = a ? Wf : Pn(t);
  c = c == qf ? Vi : c, l = l == qf ? Vi : l;
  var u = c == Vi,
    d = l == Vi,
    g = c == l;
  if (g && ri(e)) {
    if (!ri(t)) return !1;
    i = !0, u = !1
  }
  if (g && !u) return o || (o = new wr), i || Gu(e) ? og(e, t, n, r, s, o) : pI(e, t, c, n, r, s, o);
  if (!(n & vI)) {
    var p = u && Gf.call(e, "__wrapped__"),
      m = d && Gf.call(t, "__wrapped__");
    if (p || m) {
      var E = p ? e.value() : e,
        b = m ? t.value() : t;
      return o || (o = new wr), s(E, b, n, r, o)
    }
  }
  return g ? (o || (o = new wr), gI(e, t, n, r, s, o)) : !1
}

function ig(e, t, n, r, s) {
  return e === t ? !0 : e == null || t == null || !Qr(e) && !Qr(t) ? e !== e && t !== t : yI(e, t, n, r, ig, s)
}
var Hc = function() {
    return zn.Date.now()
  },
  bI = "Expected a function",
  AI = Math.max,
  TI = Math.min;

function ag(e, t, n) {
  var r, s, o, i, a, c, l = 0,
    u = !1,
    d = !1,
    g = !0;
  if (typeof e != "function") throw new TypeError(bI);
  t = Tf(t) || 0, Zr(n) && (u = !!n.leading, d = "maxWait" in n, o = d ? AI(Tf(n.maxWait) || 0, t) : o, g = "trailing" in n ? !!n.trailing : g);

  function p(P) {
    var D = r,
      J = s;
    return r = s = void 0, l = P, i = e.apply(J, D), i
  }

  function m(P) {
    return l = P, a = setTimeout(v, t), u ? p(P) : i
  }

  function E(P) {
    var D = P - c,
      J = P - l,
      k = t - D;
    return d ? TI(k, o - J) : k
  }

  function b(P) {
    var D = P - c,
      J = P - l;
    return c === void 0 || D >= t || D < 0 || d && J >= o
  }

  function v() {
    var P = Hc();
    if (b(P)) return A(P);
    a = setTimeout(v, E(P))
  }

  function A(P) {
    return a = void 0, g && r ? p(P) : (r = s = void 0, i)
  }

  function R() {
    a !== void 0 && clearTimeout(a), l = 0, r = c = s = a = void 0
  }

  function O() {
    return a === void 0 ? i : A(Hc())
  }

  function L() {
    var P = Hc(),
      D = b(P);
    if (r = arguments, s = this, c = P, D) {
      if (a === void 0) return m(c);
      if (d) return clearTimeout(a), a = setTimeout(v, t), p(c)
    }
    return a === void 0 && (a = setTimeout(v, t)), i
  }
  return L.cancel = R, L.flush = O, L
}
var OI = "[object Map]",
  II = "[object Set]",
  SI = Object.prototype,
  RI = SI.hasOwnProperty;

function wI(e) {
  if (e == null) return !0;
  if (Yh(e) && (Js(e) || typeof e == "string" || typeof e.splice == "function" || ri(e) || Gu(e) || Xh(e))) return !e.length;
  var t = Pn(e);
  if (t == OI || t == II) return !e.size;
  if (qu(e)) return !eg(e)
    .length;
  for (var n in e)
    if (RI.call(e, n)) return !1;
  return !0
}

function PI(e, t) {
  return ig(e, t)
}
var CI = "Expected a function";

function Zs(e, t, n) {
  var r = !0,
    s = !0;
  if (typeof e != "function") throw new TypeError(CI);
  return Zr(n) && (r = "leading" in n ? !!n.leading : r, s = "trailing" in n ? !!n.trailing : s), ag(e, t, {
    leading: r,
    maxWait: t,
    trailing: s
  })
}
const LI = e => qO(e);

function Ai(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var qc, Kf;

function DI() {
  if (Kf) return qc;
  Kf = 1;
  var e = function(A) {
    return t(A) && !n(A)
  };

  function t(v) {
    return !!v && typeof v == "object"
  }

  function n(v) {
    var A = Object.prototype.toString.call(v);
    return A === "[object RegExp]" || A === "[object Date]" || o(v)
  }
  var r = typeof Symbol == "function" && Symbol.for,
    s = r ? Symbol.for("react.element") : 60103;

  function o(v) {
    return v.$$typeof === s
  }

  function i(v) {
    return Array.isArray(v) ? [] : {}
  }

  function a(v, A) {
    return A.clone !== !1 && A.isMergeableObject(v) ? E(i(v), v, A) : v
  }

  function c(v, A, R) {
    return v.concat(A)
      .map(function(O) {
        return a(O, R)
      })
  }

  function l(v, A) {
    if (!A.customMerge) return E;
    var R = A.customMerge(v);
    return typeof R == "function" ? R : E
  }

  function u(v) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(v)
      .filter(function(A) {
        return Object.propertyIsEnumerable.call(v, A)
      }) : []
  }

  function d(v) {
    return Object.keys(v)
      .concat(u(v))
  }

  function g(v, A) {
    try {
      return A in v
    } catch {
      return !1
    }
  }

  function p(v, A) {
    return g(v, A) && !(Object.hasOwnProperty.call(v, A) && Object.propertyIsEnumerable.call(v, A))
  }

  function m(v, A, R) {
    var O = {};
    return R.isMergeableObject(v) && d(v)
      .forEach(function(L) {
        O[L] = a(v[L], R)
      }), d(A)
      .forEach(function(L) {
        p(v, L) || (g(v, L) && R.isMergeableObject(A[L]) ? O[L] = l(L, R)(v[L], A[L], R) : O[L] = a(A[L], R))
      }), O
  }

  function E(v, A, R) {
    R = R || {}, R.arrayMerge = R.arrayMerge || c, R.isMergeableObject = R.isMergeableObject || e, R.cloneUnlessOtherwiseSpecified = a;
    var O = Array.isArray(A),
      L = Array.isArray(v),
      P = O === L;
    return P ? O ? R.arrayMerge(v, A, R) : m(v, A, R) : a(A, R)
  }
  E.all = function(A, R) {
    if (!Array.isArray(A)) throw new Error("first argument should be an array");
    return A.reduce(function(O, L) {
      return E(O, L, R)
    }, {})
  };
  var b = E;
  return qc = b, qc
}
var kI = DI();
const xI = Ai(kI),
  ys = (e, t) => xI(e, t),
  NI = () => window.ApplePaySession !== void 0,
  $I = e => e == null ? !0 : typeof e != "object" || e.length > 0 ? !1 : e.length === 0 ? !0 : Object.keys(e)
  .length === 0 && e.constructor === Object,
  VI = "otc-mobile-checkout-parameters";
var Vl = (e => (e.WEB = "01", e.IOS = "02", e.CUSTOMER_SERVICE = "03", e.ANDROID = "05", e.ONE_APP_ANDROID = "06", e.FLASH_SALES_ANDROID = "06_FS", e.ONE_APP_IOS = "07", e.FLASH_SALES_IOS = "07_FS", e))(Vl || {});
const MI = () => {
    try {
      const e = Ut(VI);
      if (e) return JSON.parse(e)
    } catch (e) {
      console.error("failed to get mobile parameters", e)
    }
    return null
  },
  FI = () => {
    const e = MI();
    return e && e.salesChannel ? e.salesChannel : void 0
  };
var Wc = {},
  Eo = {},
  Yf;

function BI() {
  if (Yf) return Eo;
  Yf = 1, Eo.byteLength = a, Eo.toByteArray = l, Eo.fromByteArray = g;
  for (var e = [], t = [], n = typeof Uint8Array < "u" ? Uint8Array : Array, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, o = r.length; s < o; ++s) e[s] = r[s], t[r.charCodeAt(s)] = s;
  t[45] = 62, t[95] = 63;

  function i(p) {
    var m = p.length;
    if (m % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var E = p.indexOf("=");
    E === -1 && (E = m);
    var b = E === m ? 0 : 4 - E % 4;
    return [E, b]
  }

  function a(p) {
    var m = i(p),
      E = m[0],
      b = m[1];
    return (E + b) * 3 / 4 - b
  }

  function c(p, m, E) {
    return (m + E) * 3 / 4 - E
  }

  function l(p) {
    var m, E = i(p),
      b = E[0],
      v = E[1],
      A = new n(c(p, b, v)),
      R = 0,
      O = v > 0 ? b - 4 : b,
      L;
    for (L = 0; L < O; L += 4) m = t[p.charCodeAt(L)] << 18 | t[p.charCodeAt(L + 1)] << 12 | t[p.charCodeAt(L + 2)] << 6 | t[p.charCodeAt(L + 3)], A[R++] = m >> 16 & 255, A[R++] = m >> 8 & 255, A[R++] = m & 255;
    return v === 2 && (m = t[p.charCodeAt(L)] << 2 | t[p.charCodeAt(L + 1)] >> 4, A[R++] = m & 255), v === 1 && (m = t[p.charCodeAt(L)] << 10 | t[p.charCodeAt(L + 1)] << 4 | t[p.charCodeAt(L + 2)] >> 2, A[R++] = m >> 8 & 255, A[R++] = m & 255), A
  }

  function u(p) {
    return e[p >> 18 & 63] + e[p >> 12 & 63] + e[p >> 6 & 63] + e[p & 63]
  }

  function d(p, m, E) {
    for (var b, v = [], A = m; A < E; A += 3) b = (p[A] << 16 & 16711680) + (p[A + 1] << 8 & 65280) + (p[A + 2] & 255), v.push(u(b));
    return v.join("")
  }

  function g(p) {
    for (var m, E = p.length, b = E % 3, v = [], A = 16383, R = 0, O = E - b; R < O; R += A) v.push(d(p, R, R + A > O ? O : R + A));
    return b === 1 ? (m = p[E - 1], v.push(e[m >> 2] + e[m << 4 & 63] + "==")) : b === 2 && (m = (p[E - 2] << 8) + p[E - 1], v.push(e[m >> 10] + e[m >> 4 & 63] + e[m << 2 & 63] + "=")), v.join("")
  }
  return Eo
}
var Mi = {};
var zf;

function UI() {
  return zf || (zf = 1, Mi.read = function(e, t, n, r, s) {
    var o, i, a = s * 8 - r - 1,
      c = (1 << a) - 1,
      l = c >> 1,
      u = -7,
      d = n ? s - 1 : 0,
      g = n ? -1 : 1,
      p = e[t + d];
    for (d += g, o = p & (1 << -u) - 1, p >>= -u, u += a; u > 0; o = o * 256 + e[t + d], d += g, u -= 8);
    for (i = o & (1 << -u) - 1, o >>= -u, u += r; u > 0; i = i * 256 + e[t + d], d += g, u -= 8);
    if (o === 0) o = 1 - l;
    else {
      if (o === c) return i ? NaN : (p ? -1 : 1) * (1 / 0);
      i = i + Math.pow(2, r), o = o - l
    }
    return (p ? -1 : 1) * i * Math.pow(2, o - r)
  }, Mi.write = function(e, t, n, r, s, o) {
    var i, a, c, l = o * 8 - s - 1,
      u = (1 << l) - 1,
      d = u >> 1,
      g = s === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
      p = r ? 0 : o - 1,
      m = r ? 1 : -1,
      E = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
    for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, i = u) : (i = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -i)) < 1 && (i--, c *= 2), i + d >= 1 ? t += g / c : t += g * Math.pow(2, 1 - d), t * c >= 2 && (i++, c /= 2), i + d >= u ? (a = 0, i = u) : i + d >= 1 ? (a = (t * c - 1) * Math.pow(2, s), i = i + d) : (a = t * Math.pow(2, d - 1) * Math.pow(2, s), i = 0)); s >= 8; e[n + p] = a & 255, p += m, a /= 256, s -= 8);
    for (i = i << s | a, l += s; l > 0; e[n + p] = i & 255, p += m, i /= 256, l -= 8);
    e[n + p - m] |= E * 128
  }), Mi
}
var Xf;

function jI() {
  return Xf || (Xf = 1, (function(e) {
    const t = BI(),
      n = UI(),
      r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    e.Buffer = a, e.SlowBuffer = A, e.INSPECT_MAX_BYTES = 50;
    const s = 2147483647;
    e.kMaxLength = s, a.TYPED_ARRAY_SUPPORT = o(), !a.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");

    function o() {
      try {
        const y = new Uint8Array(1),
          f = {
            foo: function() {
              return 42
            }
          };
        return Object.setPrototypeOf(f, Uint8Array.prototype), Object.setPrototypeOf(y, f), y.foo() === 42
      } catch {
        return !1
      }
    }
    Object.defineProperty(a.prototype, "parent", {
      enumerable: !0,
      get: function() {
        if (a.isBuffer(this)) return this.buffer
      }
    }), Object.defineProperty(a.prototype, "offset", {
      enumerable: !0,
      get: function() {
        if (a.isBuffer(this)) return this.byteOffset
      }
    });

    function i(y) {
      if (y > s) throw new RangeError('The value "' + y + '" is invalid for option "size"');
      const f = new Uint8Array(y);
      return Object.setPrototypeOf(f, a.prototype), f
    }

    function a(y, f, h) {
      if (typeof y == "number") {
        if (typeof f == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return d(y)
      }
      return c(y, f, h)
    }
    a.poolSize = 8192;

    function c(y, f, h) {
      if (typeof y == "string") return g(y, f);
      if (ArrayBuffer.isView(y)) return m(y);
      if (y == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof y);
      if (Ee(y, ArrayBuffer) || y && Ee(y.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Ee(y, SharedArrayBuffer) || y && Ee(y.buffer, SharedArrayBuffer))) return E(y, f, h);
      if (typeof y == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
      const I = y.valueOf && y.valueOf();
      if (I != null && I !== y) return a.from(I, f, h);
      const $ = b(y);
      if ($) return $;
      if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof y[Symbol.toPrimitive] == "function") return a.from(y[Symbol.toPrimitive]("string"), f, h);
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof y)
    }
    a.from = function(y, f, h) {
      return c(y, f, h)
    }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array);

    function l(y) {
      if (typeof y != "number") throw new TypeError('"size" argument must be of type number');
      if (y < 0) throw new RangeError('The value "' + y + '" is invalid for option "size"')
    }

    function u(y, f, h) {
      return l(y), y <= 0 ? i(y) : f !== void 0 ? typeof h == "string" ? i(y)
        .fill(f, h) : i(y)
        .fill(f) : i(y)
    }
    a.alloc = function(y, f, h) {
      return u(y, f, h)
    };

    function d(y) {
      return l(y), i(y < 0 ? 0 : v(y) | 0)
    }
    a.allocUnsafe = function(y) {
      return d(y)
    }, a.allocUnsafeSlow = function(y) {
      return d(y)
    };

    function g(y, f) {
      if ((typeof f != "string" || f === "") && (f = "utf8"), !a.isEncoding(f)) throw new TypeError("Unknown encoding: " + f);
      const h = R(y, f) | 0;
      let I = i(h);
      const $ = I.write(y, f);
      return $ !== h && (I = I.slice(0, $)), I
    }

    function p(y) {
      const f = y.length < 0 ? 0 : v(y.length) | 0,
        h = i(f);
      for (let I = 0; I < f; I += 1) h[I] = y[I] & 255;
      return h
    }

    function m(y) {
      if (Ee(y, Uint8Array)) {
        const f = new Uint8Array(y);
        return E(f.buffer, f.byteOffset, f.byteLength)
      }
      return p(y)
    }

    function E(y, f, h) {
      if (f < 0 || y.byteLength < f) throw new RangeError('"offset" is outside of buffer bounds');
      if (y.byteLength < f + (h || 0)) throw new RangeError('"length" is outside of buffer bounds');
      let I;
      return f === void 0 && h === void 0 ? I = new Uint8Array(y) : h === void 0 ? I = new Uint8Array(y, f) : I = new Uint8Array(y, f, h), Object.setPrototypeOf(I, a.prototype), I
    }

    function b(y) {
      if (a.isBuffer(y)) {
        const f = v(y.length) | 0,
          h = i(f);
        return h.length === 0 || y.copy(h, 0, 0, f), h
      }
      if (y.length !== void 0) return typeof y.length != "number" || le(y.length) ? i(0) : p(y);
      if (y.type === "Buffer" && Array.isArray(y.data)) return p(y.data)
    }

    function v(y) {
      if (y >= s) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
      return y | 0
    }

    function A(y) {
      return +y != y && (y = 0), a.alloc(+y)
    }
    a.isBuffer = function(f) {
      return f != null && f._isBuffer === !0 && f !== a.prototype
    }, a.compare = function(f, h) {
      if (Ee(f, Uint8Array) && (f = a.from(f, f.offset, f.byteLength)), Ee(h, Uint8Array) && (h = a.from(h, h.offset, h.byteLength)), !a.isBuffer(f) || !a.isBuffer(h)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (f === h) return 0;
      let I = f.length,
        $ = h.length;
      for (let Z = 0, ae = Math.min(I, $); Z < ae; ++Z)
        if (f[Z] !== h[Z]) {
          I = f[Z], $ = h[Z];
          break
        } return I < $ ? -1 : $ < I ? 1 : 0
    }, a.isEncoding = function(f) {
      switch (String(f)
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
    }, a.concat = function(f, h) {
      if (!Array.isArray(f)) throw new TypeError('"list" argument must be an Array of Buffers');
      if (f.length === 0) return a.alloc(0);
      let I;
      if (h === void 0)
        for (h = 0, I = 0; I < f.length; ++I) h += f[I].length;
      const $ = a.allocUnsafe(h);
      let Z = 0;
      for (I = 0; I < f.length; ++I) {
        let ae = f[I];
        if (Ee(ae, Uint8Array)) Z + ae.length > $.length ? (a.isBuffer(ae) || (ae = a.from(ae)), ae.copy($, Z)) : Uint8Array.prototype.set.call($, ae, Z);
        else if (a.isBuffer(ae)) ae.copy($, Z);
        else throw new TypeError('"list" argument must be an Array of Buffers');
        Z += ae.length
      }
      return $
    };

    function R(y, f) {
      if (a.isBuffer(y)) return y.length;
      if (ArrayBuffer.isView(y) || Ee(y, ArrayBuffer)) return y.byteLength;
      if (typeof y != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof y);
      const h = y.length,
        I = arguments.length > 2 && arguments[2] === !0;
      if (!I && h === 0) return 0;
      let $ = !1;
      for (;;) switch (f) {
        case "ascii":
        case "latin1":
        case "binary":
          return h;
        case "utf8":
        case "utf-8":
          return se(y)
            .length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return h * 2;
        case "hex":
          return h >>> 1;
        case "base64":
          return x(y)
            .length;
        default:
          if ($) return I ? -1 : se(y)
            .length;
          f = ("" + f)
            .toLowerCase(), $ = !0
      }
    }
    a.byteLength = R;

    function O(y, f, h) {
      let I = !1;
      if ((f === void 0 || f < 0) && (f = 0), f > this.length || ((h === void 0 || h > this.length) && (h = this.length), h <= 0) || (h >>>= 0, f >>>= 0, h <= f)) return "";
      for (y || (y = "utf8");;) switch (y) {
        case "hex":
          return _e(this, f, h);
        case "utf8":
        case "utf-8":
          return de(this, f, h);
        case "ascii":
          return K(this, f, h);
        case "latin1":
        case "binary":
          return ee(this, f, h);
        case "base64":
          return me(this, f, h);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Q(this, f, h);
        default:
          if (I) throw new TypeError("Unknown encoding: " + y);
          y = (y + "")
            .toLowerCase(), I = !0
      }
    }
    a.prototype._isBuffer = !0;

    function L(y, f, h) {
      const I = y[f];
      y[f] = y[h], y[h] = I
    }
    a.prototype.swap16 = function() {
      const f = this.length;
      if (f % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let h = 0; h < f; h += 2) L(this, h, h + 1);
      return this
    }, a.prototype.swap32 = function() {
      const f = this.length;
      if (f % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let h = 0; h < f; h += 4) L(this, h, h + 3), L(this, h + 1, h + 2);
      return this
    }, a.prototype.swap64 = function() {
      const f = this.length;
      if (f % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let h = 0; h < f; h += 8) L(this, h, h + 7), L(this, h + 1, h + 6), L(this, h + 2, h + 5), L(this, h + 3, h + 4);
      return this
    }, a.prototype.toString = function() {
      const f = this.length;
      return f === 0 ? "" : arguments.length === 0 ? de(this, 0, f) : O.apply(this, arguments)
    }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(f) {
      if (!a.isBuffer(f)) throw new TypeError("Argument must be a Buffer");
      return this === f ? !0 : a.compare(this, f) === 0
    }, a.prototype.inspect = function() {
      let f = "";
      const h = e.INSPECT_MAX_BYTES;
      return f = this.toString("hex", 0, h)
        .replace(/(.{2})/g, "$1 ")
        .trim(), this.length > h && (f += " ... "), "<Buffer " + f + ">"
    }, r && (a.prototype[r] = a.prototype.inspect), a.prototype.compare = function(f, h, I, $, Z) {
      if (Ee(f, Uint8Array) && (f = a.from(f, f.offset, f.byteLength)), !a.isBuffer(f)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof f);
      if (h === void 0 && (h = 0), I === void 0 && (I = f ? f.length : 0), $ === void 0 && ($ = 0), Z === void 0 && (Z = this.length), h < 0 || I > f.length || $ < 0 || Z > this.length) throw new RangeError("out of range index");
      if ($ >= Z && h >= I) return 0;
      if ($ >= Z) return -1;
      if (h >= I) return 1;
      if (h >>>= 0, I >>>= 0, $ >>>= 0, Z >>>= 0, this === f) return 0;
      let ae = Z - $,
        Fe = I - h;
      const Me = Math.min(ae, Fe),
        Ue = this.slice($, Z),
        ct = f.slice(h, I);
      for (let ze = 0; ze < Me; ++ze)
        if (Ue[ze] !== ct[ze]) {
          ae = Ue[ze], Fe = ct[ze];
          break
        } return ae < Fe ? -1 : Fe < ae ? 1 : 0
    };

    function P(y, f, h, I, $) {
      if (y.length === 0) return -1;
      if (typeof h == "string" ? (I = h, h = 0) : h > 2147483647 ? h = 2147483647 : h < -2147483648 && (h = -2147483648), h = +h, le(h) && (h = $ ? 0 : y.length - 1), h < 0 && (h = y.length + h), h >= y.length) {
        if ($) return -1;
        h = y.length - 1
      } else if (h < 0)
        if ($) h = 0;
        else return -1;
      if (typeof f == "string" && (f = a.from(f, I)), a.isBuffer(f)) return f.length === 0 ? -1 : D(y, f, h, I, $);
      if (typeof f == "number") return f = f & 255, typeof Uint8Array.prototype.indexOf == "function" ? $ ? Uint8Array.prototype.indexOf.call(y, f, h) : Uint8Array.prototype.lastIndexOf.call(y, f, h) : D(y, [f], h, I, $);
      throw new TypeError("val must be string, number or Buffer")
    }

    function D(y, f, h, I, $) {
      let Z = 1,
        ae = y.length,
        Fe = f.length;
      if (I !== void 0 && (I = String(I)
          .toLowerCase(), I === "ucs2" || I === "ucs-2" || I === "utf16le" || I === "utf-16le")) {
        if (y.length < 2 || f.length < 2) return -1;
        Z = 2, ae /= 2, Fe /= 2, h /= 2
      }

      function Me(ct, ze) {
        return Z === 1 ? ct[ze] : ct.readUInt16BE(ze * Z)
      }
      let Ue;
      if ($) {
        let ct = -1;
        for (Ue = h; Ue < ae; Ue++)
          if (Me(y, Ue) === Me(f, ct === -1 ? 0 : Ue - ct)) {
            if (ct === -1 && (ct = Ue), Ue - ct + 1 === Fe) return ct * Z
          } else ct !== -1 && (Ue -= Ue - ct), ct = -1
      } else
        for (h + Fe > ae && (h = ae - Fe), Ue = h; Ue >= 0; Ue--) {
          let ct = !0;
          for (let ze = 0; ze < Fe; ze++)
            if (Me(y, Ue + ze) !== Me(f, ze)) {
              ct = !1;
              break
            } if (ct) return Ue
        }
      return -1
    }
    a.prototype.includes = function(f, h, I) {
      return this.indexOf(f, h, I) !== -1
    }, a.prototype.indexOf = function(f, h, I) {
      return P(this, f, h, I, !0)
    }, a.prototype.lastIndexOf = function(f, h, I) {
      return P(this, f, h, I, !1)
    };

    function J(y, f, h, I) {
      h = Number(h) || 0;
      const $ = y.length - h;
      I ? (I = Number(I), I > $ && (I = $)) : I = $;
      const Z = f.length;
      I > Z / 2 && (I = Z / 2);
      let ae;
      for (ae = 0; ae < I; ++ae) {
        const Fe = parseInt(f.substr(ae * 2, 2), 16);
        if (le(Fe)) return ae;
        y[h + ae] = Fe
      }
      return ae
    }

    function k(y, f, h, I) {
      return z(se(f, y.length - h), y, h, I)
    }

    function Y(y, f, h, I) {
      return z(S(f), y, h, I)
    }

    function H(y, f, h, I) {
      return z(x(f), y, h, I)
    }

    function G(y, f, h, I) {
      return z(T(f, y.length - h), y, h, I)
    }
    a.prototype.write = function(f, h, I, $) {
      if (h === void 0) $ = "utf8", I = this.length, h = 0;
      else if (I === void 0 && typeof h == "string") $ = h, I = this.length, h = 0;
      else if (isFinite(h)) h = h >>> 0, isFinite(I) ? (I = I >>> 0, $ === void 0 && ($ = "utf8")) : ($ = I, I = void 0);
      else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      const Z = this.length - h;
      if ((I === void 0 || I > Z) && (I = Z), f.length > 0 && (I < 0 || h < 0) || h > this.length) throw new RangeError("Attempt to write outside buffer bounds");
      $ || ($ = "utf8");
      let ae = !1;
      for (;;) switch ($) {
        case "hex":
          return J(this, f, h, I);
        case "utf8":
        case "utf-8":
          return k(this, f, h, I);
        case "ascii":
        case "latin1":
        case "binary":
          return Y(this, f, h, I);
        case "base64":
          return H(this, f, h, I);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return G(this, f, h, I);
        default:
          if (ae) throw new TypeError("Unknown encoding: " + $);
          $ = ("" + $)
            .toLowerCase(), ae = !0
      }
    }, a.prototype.toJSON = function() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      }
    };

    function me(y, f, h) {
      return f === 0 && h === y.length ? t.fromByteArray(y) : t.fromByteArray(y.slice(f, h))
    }

    function de(y, f, h) {
      h = Math.min(y.length, h);
      const I = [];
      let $ = f;
      for (; $ < h;) {
        const Z = y[$];
        let ae = null,
          Fe = Z > 239 ? 4 : Z > 223 ? 3 : Z > 191 ? 2 : 1;
        if ($ + Fe <= h) {
          let Me, Ue, ct, ze;
          switch (Fe) {
            case 1:
              Z < 128 && (ae = Z);
              break;
            case 2:
              Me = y[$ + 1], (Me & 192) === 128 && (ze = (Z & 31) << 6 | Me & 63, ze > 127 && (ae = ze));
              break;
            case 3:
              Me = y[$ + 1], Ue = y[$ + 2], (Me & 192) === 128 && (Ue & 192) === 128 && (ze = (Z & 15) << 12 | (Me & 63) << 6 | Ue & 63, ze > 2047 && (ze < 55296 || ze > 57343) && (ae = ze));
              break;
            case 4:
              Me = y[$ + 1], Ue = y[$ + 2], ct = y[$ + 3], (Me & 192) === 128 && (Ue & 192) === 128 && (ct & 192) === 128 && (ze = (Z & 15) << 18 | (Me & 63) << 12 | (Ue & 63) << 6 | ct & 63, ze > 65535 && ze < 1114112 && (ae = ze))
          }
        }
        ae === null ? (ae = 65533, Fe = 1) : ae > 65535 && (ae -= 65536, I.push(ae >>> 10 & 1023 | 55296), ae = 56320 | ae & 1023), I.push(ae), $ += Fe
      }
      return N(I)
    }
    const X = 4096;

    function N(y) {
      const f = y.length;
      if (f <= X) return String.fromCharCode.apply(String, y);
      let h = "",
        I = 0;
      for (; I < f;) h += String.fromCharCode.apply(String, y.slice(I, I += X));
      return h
    }

    function K(y, f, h) {
      let I = "";
      h = Math.min(y.length, h);
      for (let $ = f; $ < h; ++$) I += String.fromCharCode(y[$] & 127);
      return I
    }

    function ee(y, f, h) {
      let I = "";
      h = Math.min(y.length, h);
      for (let $ = f; $ < h; ++$) I += String.fromCharCode(y[$]);
      return I
    }

    function _e(y, f, h) {
      const I = y.length;
      (!f || f < 0) && (f = 0), (!h || h < 0 || h > I) && (h = I);
      let $ = "";
      for (let Z = f; Z < h; ++Z) $ += j[y[Z]];
      return $
    }

    function Q(y, f, h) {
      const I = y.slice(f, h);
      let $ = "";
      for (let Z = 0; Z < I.length - 1; Z += 2) $ += String.fromCharCode(I[Z] + I[Z + 1] * 256);
      return $
    }
    a.prototype.slice = function(f, h) {
      const I = this.length;
      f = ~~f, h = h === void 0 ? I : ~~h, f < 0 ? (f += I, f < 0 && (f = 0)) : f > I && (f = I), h < 0 ? (h += I, h < 0 && (h = 0)) : h > I && (h = I), h < f && (h = f);
      const $ = this.subarray(f, h);
      return Object.setPrototypeOf($, a.prototype), $
    };

    function V(y, f, h) {
      if (y % 1 !== 0 || y < 0) throw new RangeError("offset is not uint");
      if (y + f > h) throw new RangeError("Trying to access beyond buffer length")
    }
    a.prototype.readUintLE = a.prototype.readUIntLE = function(f, h, I) {
      f = f >>> 0, h = h >>> 0, I || V(f, h, this.length);
      let $ = this[f],
        Z = 1,
        ae = 0;
      for (; ++ae < h && (Z *= 256);) $ += this[f + ae] * Z;
      return $
    }, a.prototype.readUintBE = a.prototype.readUIntBE = function(f, h, I) {
      f = f >>> 0, h = h >>> 0, I || V(f, h, this.length);
      let $ = this[f + --h],
        Z = 1;
      for (; h > 0 && (Z *= 256);) $ += this[f + --h] * Z;
      return $
    }, a.prototype.readUint8 = a.prototype.readUInt8 = function(f, h) {
      return f = f >>> 0, h || V(f, 1, this.length), this[f]
    }, a.prototype.readUint16LE = a.prototype.readUInt16LE = function(f, h) {
      return f = f >>> 0, h || V(f, 2, this.length), this[f] | this[f + 1] << 8
    }, a.prototype.readUint16BE = a.prototype.readUInt16BE = function(f, h) {
      return f = f >>> 0, h || V(f, 2, this.length), this[f] << 8 | this[f + 1]
    }, a.prototype.readUint32LE = a.prototype.readUInt32LE = function(f, h) {
      return f = f >>> 0, h || V(f, 4, this.length), (this[f] | this[f + 1] << 8 | this[f + 2] << 16) + this[f + 3] * 16777216
    }, a.prototype.readUint32BE = a.prototype.readUInt32BE = function(f, h) {
      return f = f >>> 0, h || V(f, 4, this.length), this[f] * 16777216 + (this[f + 1] << 16 | this[f + 2] << 8 | this[f + 3])
    }, a.prototype.readBigUInt64LE = ne(function(f) {
      f = f >>> 0, C(f, "offset");
      const h = this[f],
        I = this[f + 7];
      (h === void 0 || I === void 0) && U(f, this.length - 8);
      const $ = h + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + this[++f] * 2 ** 24,
        Z = this[++f] + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + I * 2 ** 24;
      return BigInt($) + (BigInt(Z) << BigInt(32))
    }), a.prototype.readBigUInt64BE = ne(function(f) {
      f = f >>> 0, C(f, "offset");
      const h = this[f],
        I = this[f + 7];
      (h === void 0 || I === void 0) && U(f, this.length - 8);
      const $ = h * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + this[++f],
        Z = this[++f] * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + I;
      return (BigInt($) << BigInt(32)) + BigInt(Z)
    }), a.prototype.readIntLE = function(f, h, I) {
      f = f >>> 0, h = h >>> 0, I || V(f, h, this.length);
      let $ = this[f],
        Z = 1,
        ae = 0;
      for (; ++ae < h && (Z *= 256);) $ += this[f + ae] * Z;
      return Z *= 128, $ >= Z && ($ -= Math.pow(2, 8 * h)), $
    }, a.prototype.readIntBE = function(f, h, I) {
      f = f >>> 0, h = h >>> 0, I || V(f, h, this.length);
      let $ = h,
        Z = 1,
        ae = this[f + --$];
      for (; $ > 0 && (Z *= 256);) ae += this[f + --$] * Z;
      return Z *= 128, ae >= Z && (ae -= Math.pow(2, 8 * h)), ae
    }, a.prototype.readInt8 = function(f, h) {
      return f = f >>> 0, h || V(f, 1, this.length), this[f] & 128 ? (255 - this[f] + 1) * -1 : this[f]
    }, a.prototype.readInt16LE = function(f, h) {
      f = f >>> 0, h || V(f, 2, this.length);
      const I = this[f] | this[f + 1] << 8;
      return I & 32768 ? I | 4294901760 : I
    }, a.prototype.readInt16BE = function(f, h) {
      f = f >>> 0, h || V(f, 2, this.length);
      const I = this[f + 1] | this[f] << 8;
      return I & 32768 ? I | 4294901760 : I
    }, a.prototype.readInt32LE = function(f, h) {
      return f = f >>> 0, h || V(f, 4, this.length), this[f] | this[f + 1] << 8 | this[f + 2] << 16 | this[f + 3] << 24
    }, a.prototype.readInt32BE = function(f, h) {
      return f = f >>> 0, h || V(f, 4, this.length), this[f] << 24 | this[f + 1] << 16 | this[f + 2] << 8 | this[f + 3]
    }, a.prototype.readBigInt64LE = ne(function(f) {
      f = f >>> 0, C(f, "offset");
      const h = this[f],
        I = this[f + 7];
      (h === void 0 || I === void 0) && U(f, this.length - 8);
      const $ = this[f + 4] + this[f + 5] * 2 ** 8 + this[f + 6] * 2 ** 16 + (I << 24);
      return (BigInt($) << BigInt(32)) + BigInt(h + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + this[++f] * 2 ** 24)
    }), a.prototype.readBigInt64BE = ne(function(f) {
      f = f >>> 0, C(f, "offset");
      const h = this[f],
        I = this[f + 7];
      (h === void 0 || I === void 0) && U(f, this.length - 8);
      const $ = (h << 24) + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + this[++f];
      return (BigInt($) << BigInt(32)) + BigInt(this[++f] * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + I)
    }), a.prototype.readFloatLE = function(f, h) {
      return f = f >>> 0, h || V(f, 4, this.length), n.read(this, f, !0, 23, 4)
    }, a.prototype.readFloatBE = function(f, h) {
      return f = f >>> 0, h || V(f, 4, this.length), n.read(this, f, !1, 23, 4)
    }, a.prototype.readDoubleLE = function(f, h) {
      return f = f >>> 0, h || V(f, 8, this.length), n.read(this, f, !0, 52, 8)
    }, a.prototype.readDoubleBE = function(f, h) {
      return f = f >>> 0, h || V(f, 8, this.length), n.read(this, f, !1, 52, 8)
    };

    function oe(y, f, h, I, $, Z) {
      if (!a.isBuffer(y)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (f > $ || f < Z) throw new RangeError('"value" argument is out of bounds');
      if (h + I > y.length) throw new RangeError("Index out of range")
    }
    a.prototype.writeUintLE = a.prototype.writeUIntLE = function(f, h, I, $) {
      if (f = +f, h = h >>> 0, I = I >>> 0, !$) {
        const Fe = Math.pow(2, 8 * I) - 1;
        oe(this, f, h, I, Fe, 0)
      }
      let Z = 1,
        ae = 0;
      for (this[h] = f & 255; ++ae < I && (Z *= 256);) this[h + ae] = f / Z & 255;
      return h + I
    }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(f, h, I, $) {
      if (f = +f, h = h >>> 0, I = I >>> 0, !$) {
        const Fe = Math.pow(2, 8 * I) - 1;
        oe(this, f, h, I, Fe, 0)
      }
      let Z = I - 1,
        ae = 1;
      for (this[h + Z] = f & 255; --Z >= 0 && (ae *= 256);) this[h + Z] = f / ae & 255;
      return h + I
    }, a.prototype.writeUint8 = a.prototype.writeUInt8 = function(f, h, I) {
      return f = +f, h = h >>> 0, I || oe(this, f, h, 1, 255, 0), this[h] = f & 255, h + 1
    }, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(f, h, I) {
      return f = +f, h = h >>> 0, I || oe(this, f, h, 2, 65535, 0), this[h] = f & 255, this[h + 1] = f >>> 8, h + 2
    }, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(f, h, I) {
      return f = +f, h = h >>> 0, I || oe(this, f, h, 2, 65535, 0), this[h] = f >>> 8, this[h + 1] = f & 255, h + 2
    }, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(f, h, I) {
      return f = +f, h = h >>> 0, I || oe(this, f, h, 4, 4294967295, 0), this[h + 3] = f >>> 24, this[h + 2] = f >>> 16, this[h + 1] = f >>> 8, this[h] = f & 255, h + 4
    }, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(f, h, I) {
      return f = +f, h = h >>> 0, I || oe(this, f, h, 4, 4294967295, 0), this[h] = f >>> 24, this[h + 1] = f >>> 16, this[h + 2] = f >>> 8, this[h + 3] = f & 255, h + 4
    };

    function Ae(y, f, h, I, $) {
      w(f, I, $, y, h, 7);
      let Z = Number(f & BigInt(4294967295));
      y[h++] = Z, Z = Z >> 8, y[h++] = Z, Z = Z >> 8, y[h++] = Z, Z = Z >> 8, y[h++] = Z;
      let ae = Number(f >> BigInt(32) & BigInt(4294967295));
      return y[h++] = ae, ae = ae >> 8, y[h++] = ae, ae = ae >> 8, y[h++] = ae, ae = ae >> 8, y[h++] = ae, h
    }

    function Ne(y, f, h, I, $) {
      w(f, I, $, y, h, 7);
      let Z = Number(f & BigInt(4294967295));
      y[h + 7] = Z, Z = Z >> 8, y[h + 6] = Z, Z = Z >> 8, y[h + 5] = Z, Z = Z >> 8, y[h + 4] = Z;
      let ae = Number(f >> BigInt(32) & BigInt(4294967295));
      return y[h + 3] = ae, ae = ae >> 8, y[h + 2] = ae, ae = ae >> 8, y[h + 1] = ae, ae = ae >> 8, y[h] = ae, h + 8
    }
    a.prototype.writeBigUInt64LE = ne(function(f, h = 0) {
      return Ae(this, f, h, BigInt(0), BigInt("0xffffffffffffffff"))
    }), a.prototype.writeBigUInt64BE = ne(function(f, h = 0) {
      return Ne(this, f, h, BigInt(0), BigInt("0xffffffffffffffff"))
    }), a.prototype.writeIntLE = function(f, h, I, $) {
      if (f = +f, h = h >>> 0, !$) {
        const Me = Math.pow(2, 8 * I - 1);
        oe(this, f, h, I, Me - 1, -Me)
      }
      let Z = 0,
        ae = 1,
        Fe = 0;
      for (this[h] = f & 255; ++Z < I && (ae *= 256);) f < 0 && Fe === 0 && this[h + Z - 1] !== 0 && (Fe = 1), this[h + Z] = (f / ae >> 0) - Fe & 255;
      return h + I
    }, a.prototype.writeIntBE = function(f, h, I, $) {
      if (f = +f, h = h >>> 0, !$) {
        const Me = Math.pow(2, 8 * I - 1);
        oe(this, f, h, I, Me - 1, -Me)
      }
      let Z = I - 1,
        ae = 1,
        Fe = 0;
      for (this[h + Z] = f & 255; --Z >= 0 && (ae *= 256);) f < 0 && Fe === 0 && this[h + Z + 1] !== 0 && (Fe = 1), this[h + Z] = (f / ae >> 0) - Fe & 255;
      return h + I
    }, a.prototype.writeInt8 = function(f, h, I) {
      return f = +f, h = h >>> 0, I || oe(this, f, h, 1, 127, -128), f < 0 && (f = 255 + f + 1), this[h] = f & 255, h + 1
    }, a.prototype.writeInt16LE = function(f, h, I) {
      return f = +f, h = h >>> 0, I || oe(this, f, h, 2, 32767, -32768), this[h] = f & 255, this[h + 1] = f >>> 8, h + 2
    }, a.prototype.writeInt16BE = function(f, h, I) {
      return f = +f, h = h >>> 0, I || oe(this, f, h, 2, 32767, -32768), this[h] = f >>> 8, this[h + 1] = f & 255, h + 2
    }, a.prototype.writeInt32LE = function(f, h, I) {
      return f = +f, h = h >>> 0, I || oe(this, f, h, 4, 2147483647, -2147483648), this[h] = f & 255, this[h + 1] = f >>> 8, this[h + 2] = f >>> 16, this[h + 3] = f >>> 24, h + 4
    }, a.prototype.writeInt32BE = function(f, h, I) {
      return f = +f, h = h >>> 0, I || oe(this, f, h, 4, 2147483647, -2147483648), f < 0 && (f = 4294967295 + f + 1), this[h] = f >>> 24, this[h + 1] = f >>> 16, this[h + 2] = f >>> 8, this[h + 3] = f & 255, h + 4
    }, a.prototype.writeBigInt64LE = ne(function(f, h = 0) {
      return Ae(this, f, h, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    }), a.prototype.writeBigInt64BE = ne(function(f, h = 0) {
      return Ne(this, f, h, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    });

    function Le(y, f, h, I, $, Z) {
      if (h + I > y.length) throw new RangeError("Index out of range");
      if (h < 0) throw new RangeError("Index out of range")
    }

    function He(y, f, h, I, $) {
      return f = +f, h = h >>> 0, $ || Le(y, f, h, 4), n.write(y, f, h, I, 23, 4), h + 4
    }
    a.prototype.writeFloatLE = function(f, h, I) {
      return He(this, f, h, !0, I)
    }, a.prototype.writeFloatBE = function(f, h, I) {
      return He(this, f, h, !1, I)
    };

    function W(y, f, h, I, $) {
      return f = +f, h = h >>> 0, $ || Le(y, f, h, 8), n.write(y, f, h, I, 52, 8), h + 8
    }
    a.prototype.writeDoubleLE = function(f, h, I) {
      return W(this, f, h, !0, I)
    }, a.prototype.writeDoubleBE = function(f, h, I) {
      return W(this, f, h, !1, I)
    }, a.prototype.copy = function(f, h, I, $) {
      if (!a.isBuffer(f)) throw new TypeError("argument should be a Buffer");
      if (I || (I = 0), !$ && $ !== 0 && ($ = this.length), h >= f.length && (h = f.length), h || (h = 0), $ > 0 && $ < I && ($ = I), $ === I || f.length === 0 || this.length === 0) return 0;
      if (h < 0) throw new RangeError("targetStart out of bounds");
      if (I < 0 || I >= this.length) throw new RangeError("Index out of range");
      if ($ < 0) throw new RangeError("sourceEnd out of bounds");
      $ > this.length && ($ = this.length), f.length - h < $ - I && ($ = f.length - h + I);
      const Z = $ - I;
      return this === f && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(h, I, $) : Uint8Array.prototype.set.call(f, this.subarray(I, $), h), Z
    }, a.prototype.fill = function(f, h, I, $) {
      if (typeof f == "string") {
        if (typeof h == "string" ? ($ = h, h = 0, I = this.length) : typeof I == "string" && ($ = I, I = this.length), $ !== void 0 && typeof $ != "string") throw new TypeError("encoding must be a string");
        if (typeof $ == "string" && !a.isEncoding($)) throw new TypeError("Unknown encoding: " + $);
        if (f.length === 1) {
          const ae = f.charCodeAt(0);
          ($ === "utf8" && ae < 128 || $ === "latin1") && (f = ae)
        }
      } else typeof f == "number" ? f = f & 255 : typeof f == "boolean" && (f = Number(f));
      if (h < 0 || this.length < h || this.length < I) throw new RangeError("Out of range index");
      if (I <= h) return this;
      h = h >>> 0, I = I === void 0 ? this.length : I >>> 0, f || (f = 0);
      let Z;
      if (typeof f == "number")
        for (Z = h; Z < I; ++Z) this[Z] = f;
      else {
        const ae = a.isBuffer(f) ? f : a.from(f, $),
          Fe = ae.length;
        if (Fe === 0) throw new TypeError('The value "' + f + '" is invalid for argument "value"');
        for (Z = 0; Z < I - h; ++Z) this[Z + h] = ae[Z % Fe]
      }
      return this
    };
    const he = {};

    function pe(y, f, h) {
      he[y] = class extends h {
        constructor() {
          super(), Object.defineProperty(this, "message", {
            value: f.apply(this, arguments),
            writable: !0,
            configurable: !0
          }), this.name = `${this.name} [${y}]`, this.stack, delete this.name
        }
        get code() {
          return y
        }
        set code($) {
          Object.defineProperty(this, "code", {
            configurable: !0,
            enumerable: !0,
            value: $,
            writable: !0
          })
        }
        toString() {
          return `${this.name} [${y}]: ${this.message}`
        }
      }
    }
    pe("ERR_BUFFER_OUT_OF_BOUNDS", function(y) {
      return y ? `${y} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
    }, RangeError), pe("ERR_INVALID_ARG_TYPE", function(y, f) {
      return `The "${y}" argument must be of type number. Received type ${typeof f}`
    }, TypeError), pe("ERR_OUT_OF_RANGE", function(y, f, h) {
      let I = `The value of "${y}" is out of range.`,
        $ = h;
      return Number.isInteger(h) && Math.abs(h) > 2 ** 32 ? $ = ye(String(h)) : typeof h == "bigint" && ($ = String(h), (h > BigInt(2) ** BigInt(32) || h < -(BigInt(2) ** BigInt(32))) && ($ = ye($)), $ += "n"), I += ` It must be ${f}. Received ${$}`, I
    }, RangeError);

    function ye(y) {
      let f = "",
        h = y.length;
      const I = y[0] === "-" ? 1 : 0;
      for (; h >= I + 4; h -= 3) f = `_${y.slice(h-3,h)}${f}`;
      return `${y.slice(0,h)}${f}`
    }

    function Re(y, f, h) {
      C(f, "offset"), (y[f] === void 0 || y[f + h] === void 0) && U(f, y.length - (h + 1))
    }

    function w(y, f, h, I, $, Z) {
      if (y > h || y < f) {
        const ae = typeof f == "bigint" ? "n" : "";
        let Fe;
        throw f === 0 || f === BigInt(0) ? Fe = `>= 0${ae} and < 2${ae} ** ${(Z+1)*8}${ae}` : Fe = `>= -(2${ae} ** ${(Z+1)*8-1}${ae}) and < 2 ** ${(Z+1)*8-1}${ae}`, new he.ERR_OUT_OF_RANGE("value", Fe, y)
      }
      Re(I, $, Z)
    }

    function C(y, f) {
      if (typeof y != "number") throw new he.ERR_INVALID_ARG_TYPE(f, "number", y)
    }

    function U(y, f, h) {
      throw Math.floor(y) !== y ? (C(y, h), new he.ERR_OUT_OF_RANGE("offset", "an integer", y)) : f < 0 ? new he.ERR_BUFFER_OUT_OF_BOUNDS : new he.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${f}`, y)
    }
    const te = /[^+/0-9A-Za-z-_]/g;

    function ie(y) {
      if (y = y.split("=")[0], y = y.trim()
        .replace(te, ""), y.length < 2) return "";
      for (; y.length % 4 !== 0;) y = y + "=";
      return y
    }

    function se(y, f) {
      f = f || 1 / 0;
      let h;
      const I = y.length;
      let $ = null;
      const Z = [];
      for (let ae = 0; ae < I; ++ae) {
        if (h = y.charCodeAt(ae), h > 55295 && h < 57344) {
          if (!$) {
            if (h > 56319) {
              (f -= 3) > -1 && Z.push(239, 191, 189);
              continue
            } else if (ae + 1 === I) {
              (f -= 3) > -1 && Z.push(239, 191, 189);
              continue
            }
            $ = h;
            continue
          }
          if (h < 56320) {
            (f -= 3) > -1 && Z.push(239, 191, 189), $ = h;
            continue
          }
          h = ($ - 55296 << 10 | h - 56320) + 65536
        } else $ && (f -= 3) > -1 && Z.push(239, 191, 189);
        if ($ = null, h < 128) {
          if ((f -= 1) < 0) break;
          Z.push(h)
        } else if (h < 2048) {
          if ((f -= 2) < 0) break;
          Z.push(h >> 6 | 192, h & 63 | 128)
        } else if (h < 65536) {
          if ((f -= 3) < 0) break;
          Z.push(h >> 12 | 224, h >> 6 & 63 | 128, h & 63 | 128)
        } else if (h < 1114112) {
          if ((f -= 4) < 0) break;
          Z.push(h >> 18 | 240, h >> 12 & 63 | 128, h >> 6 & 63 | 128, h & 63 | 128)
        } else throw new Error("Invalid code point")
      }
      return Z
    }

    function S(y) {
      const f = [];
      for (let h = 0; h < y.length; ++h) f.push(y.charCodeAt(h) & 255);
      return f
    }

    function T(y, f) {
      let h, I, $;
      const Z = [];
      for (let ae = 0; ae < y.length && !((f -= 2) < 0); ++ae) h = y.charCodeAt(ae), I = h >> 8, $ = h % 256, Z.push($), Z.push(I);
      return Z
    }

    function x(y) {
      return t.toByteArray(ie(y))
    }

    function z(y, f, h, I) {
      let $;
      for ($ = 0; $ < I && !($ + h >= f.length || $ >= y.length); ++$) f[$ + h] = y[$];
      return $
    }

    function Ee(y, f) {
      return y instanceof f || y != null && y.constructor != null && y.constructor.name != null && y.constructor.name === f.name
    }

    function le(y) {
      return y !== y
    }
    const j = (function() {
      const y = "0123456789abcdef",
        f = new Array(256);
      for (let h = 0; h < 16; ++h) {
        const I = h * 16;
        for (let $ = 0; $ < 16; ++$) f[I + $] = y[h] + y[$]
      }
      return f
    })();

    function ne(y) {
      return typeof BigInt > "u" ? Oe : y
    }

    function Oe() {
      throw new Error("BigInt not supported")
    }
  })(Wc)), Wc
}
var Ml = jI();
const HI = e => {
  try {
    const [t, n, r] = e.split(".");
    return !t || !n || !r ? null : {
      header: JSON.parse(Ml.Buffer.from(t, "base64")
        .toString()),
      payload: JSON.parse(Ml.Buffer.from(n, "base64")
        .toString()),
      signature: r
    }
  } catch {
    return null
  }
};
const {
  entries: cg,
  setPrototypeOf: Jf,
  isFrozen: qI,
  getPrototypeOf: WI,
  getOwnPropertyDescriptor: GI
} = Object;
let {
  freeze: an,
  seal: kn,
  create: Fl
} = Object, {
  apply: Bl,
  construct: Ul
} = typeof Reflect < "u" && Reflect;
an || (an = function(t) {
  return t
});
kn || (kn = function(t) {
  return t
});
Bl || (Bl = function(t, n) {
  for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) s[o - 2] = arguments[o];
  return t.apply(n, s)
});
Ul || (Ul = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) r[s - 1] = arguments[s];
  return new t(...r)
});
const Fi = cn(Array.prototype.forEach),
  KI = cn(Array.prototype.lastIndexOf),
  Qf = cn(Array.prototype.pop),
  yo = cn(Array.prototype.push),
  YI = cn(Array.prototype.splice),
  oa = cn(String.prototype.toLowerCase),
  Gc = cn(String.prototype.toString),
  Kc = cn(String.prototype.match),
  bo = cn(String.prototype.replace),
  zI = cn(String.prototype.indexOf),
  XI = cn(String.prototype.trim),
  $n = cn(Object.prototype.hasOwnProperty),
  en = cn(RegExp.prototype.test),
  Ao = JI(TypeError);

function cn(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) r[s - 1] = arguments[s];
    return Bl(e, t, r)
  }
}

function JI(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    return Ul(e, n)
  }
}

function Ge(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : oa;
  Jf && Jf(e, null);
  let r = t.length;
  for (; r--;) {
    let s = t[r];
    if (typeof s == "string") {
      const o = n(s);
      o !== s && (qI(t) || (t[r] = o), s = o)
    }
    e[s] = !0
  }
  return e
}

function QI(e) {
  for (let t = 0; t < e.length; t++) $n(e, t) || (e[t] = null);
  return e
}

function sr(e) {
  const t = Fl(null);
  for (const [n, r] of cg(e)) $n(e, n) && (Array.isArray(r) ? t[n] = QI(r) : r && typeof r == "object" && r.constructor === Object ? t[n] = sr(r) : t[n] = r);
  return t
}

function To(e, t) {
  for (; e !== null;) {
    const r = GI(e, t);
    if (r) {
      if (r.get) return cn(r.get);
      if (typeof r.value == "function") return cn(r.value)
    }
    e = WI(e)
  }

  function n() {
    return null
  }
  return n
}
const Zf = an(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
  Yc = an(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
  zc = an(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
  ZI = an(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
  Xc = an(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]),
  eS = an(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
  ep = an(["#text"]),
  tp = an(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]),
  Jc = an(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
  np = an(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
  Bi = an(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
  tS = kn(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
  nS = kn(/<%[\w\W]*|[\w\W]*%>/gm),
  rS = kn(/\$\{[\w\W]*/gm),
  sS = kn(/^data-[\-\w.\u00B7-\uFFFF]+$/),
  oS = kn(/^aria-[\-\w]+$/),
  lg = kn(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
  iS = kn(/^(?:\w+script|data):/i),
  aS = kn(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
  ug = kn(/^html$/i),
  cS = kn(/^[a-z][.\w]*(-[.\w]+)+$/i);
var rp = Object.freeze({
  __proto__: null,
  ARIA_ATTR: oS,
  ATTR_WHITESPACE: aS,
  CUSTOM_ELEMENT: cS,
  DATA_ATTR: sS,
  DOCTYPE_NAME: ug,
  ERB_EXPR: nS,
  IS_ALLOWED_URI: lg,
  IS_SCRIPT_OR_DATA: iS,
  MUSTACHE_EXPR: tS,
  TMPLIT_EXPR: rS
});
const Oo = {
    element: 1,
    text: 3,
    progressingInstruction: 7,
    comment: 8,
    document: 9
  },
  lS = function() {
    return typeof window > "u" ? null : window
  },
  uS = function(t, n) {
    if (typeof t != "object" || typeof t.createPolicy != "function") return null;
    let r = null;
    const s = "data-tt-policy-suffix";
    n && n.hasAttribute(s) && (r = n.getAttribute(s));
    const o = "dompurify" + (r ? "#" + r : "");
    try {
      return t.createPolicy(o, {
        createHTML(i) {
          return i
        },
        createScriptURL(i) {
          return i
        }
      })
    } catch {
      return console.warn("TrustedTypes policy " + o + " could not be created."), null
    }
  },
  sp = function() {
    return {
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
  };

function dg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : lS();
  const t = ke => dg(ke);
  if (t.version = "3.3.1", t.removed = [], !e || !e.document || e.document.nodeType !== Oo.document || !e.Element) return t.isSupported = !1, t;
  let {
    document: n
  } = e;
  const r = n,
    s = r.currentScript,
    {
      DocumentFragment: o,
      HTMLTemplateElement: i,
      Node: a,
      Element: c,
      NodeFilter: l,
      NamedNodeMap: u = e.NamedNodeMap || e.MozNamedAttrMap,
      HTMLFormElement: d,
      DOMParser: g,
      trustedTypes: p
    } = e,
    m = c.prototype,
    E = To(m, "cloneNode"),
    b = To(m, "remove"),
    v = To(m, "nextSibling"),
    A = To(m, "childNodes"),
    R = To(m, "parentNode");
  if (typeof i == "function") {
    const ke = n.createElement("template");
    ke.content && ke.content.ownerDocument && (n = ke.content.ownerDocument)
  }
  let O, L = "";
  const {
    implementation: P,
    createNodeIterator: D,
    createDocumentFragment: J,
    getElementsByTagName: k
  } = n, {
    importNode: Y
  } = r;
  let H = sp();
  t.isSupported = typeof cg == "function" && typeof R == "function" && P && P.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: G,
    ERB_EXPR: me,
    TMPLIT_EXPR: de,
    DATA_ATTR: X,
    ARIA_ATTR: N,
    IS_SCRIPT_OR_DATA: K,
    ATTR_WHITESPACE: ee,
    CUSTOM_ELEMENT: _e
  } = rp;
  let {
    IS_ALLOWED_URI: Q
  } = rp, V = null;
  const oe = Ge({}, [...Zf, ...Yc, ...zc, ...Xc, ...ep]);
  let Ae = null;
  const Ne = Ge({}, [...tp, ...Jc, ...np, ...Bi]);
  let Le = Object.seal(Fl(null, {
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
    He = null,
    W = null;
  const he = Object.seal(Fl(null, {
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
  let pe = !0,
    ye = !0,
    Re = !1,
    w = !0,
    C = !1,
    U = !0,
    te = !1,
    ie = !1,
    se = !1,
    S = !1,
    T = !1,
    x = !1,
    z = !0,
    Ee = !1;
  const le = "user-content-";
  let j = !0,
    ne = !1,
    Oe = {},
    y = null;
  const f = Ge({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let h = null;
  const I = Ge({}, ["audio", "video", "img", "source", "image", "track"]);
  let $ = null;
  const Z = Ge({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
    ae = "http://www.w3.org/1998/Math/MathML",
    Fe = "http://www.w3.org/2000/svg",
    Me = "http://www.w3.org/1999/xhtml";
  let Ue = Me,
    ct = !1,
    ze = null;
  const DE = Ge({}, [ae, Fe, Me], Gc);
  let Li = Ge({}, ["mi", "mo", "mn", "ms", "mtext"]),
    Di = Ge({}, ["annotation-xml"]);
  const kE = Ge({}, ["title", "style", "font", "a", "script"]);
  let po = null;
  const xE = ["application/xhtml+xml", "text/html"],
    NE = "text/html";
  let Lt = null,
    ks = null;
  const $E = n.createElement("form"),
    bd = function(M) {
      return M instanceof RegExp || M instanceof Function
    },
    Sc = function() {
      let M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (!(ks && ks === M)) {
        if ((!M || typeof M != "object") && (M = {}), M = sr(M), po = xE.indexOf(M.PARSER_MEDIA_TYPE) === -1 ? NE : M.PARSER_MEDIA_TYPE, Lt = po === "application/xhtml+xml" ? Gc : oa, V = $n(M, "ALLOWED_TAGS") ? Ge({}, M.ALLOWED_TAGS, Lt) : oe, Ae = $n(M, "ALLOWED_ATTR") ? Ge({}, M.ALLOWED_ATTR, Lt) : Ne, ze = $n(M, "ALLOWED_NAMESPACES") ? Ge({}, M.ALLOWED_NAMESPACES, Gc) : DE, $ = $n(M, "ADD_URI_SAFE_ATTR") ? Ge(sr(Z), M.ADD_URI_SAFE_ATTR, Lt) : Z, h = $n(M, "ADD_DATA_URI_TAGS") ? Ge(sr(I), M.ADD_DATA_URI_TAGS, Lt) : I, y = $n(M, "FORBID_CONTENTS") ? Ge({}, M.FORBID_CONTENTS, Lt) : f, He = $n(M, "FORBID_TAGS") ? Ge({}, M.FORBID_TAGS, Lt) : sr({}), W = $n(M, "FORBID_ATTR") ? Ge({}, M.FORBID_ATTR, Lt) : sr({}), Oe = $n(M, "USE_PROFILES") ? M.USE_PROFILES : !1, pe = M.ALLOW_ARIA_ATTR !== !1, ye = M.ALLOW_DATA_ATTR !== !1, Re = M.ALLOW_UNKNOWN_PROTOCOLS || !1, w = M.ALLOW_SELF_CLOSE_IN_ATTR !== !1, C = M.SAFE_FOR_TEMPLATES || !1, U = M.SAFE_FOR_XML !== !1, te = M.WHOLE_DOCUMENT || !1, S = M.RETURN_DOM || !1, T = M.RETURN_DOM_FRAGMENT || !1, x = M.RETURN_TRUSTED_TYPE || !1, se = M.FORCE_BODY || !1, z = M.SANITIZE_DOM !== !1, Ee = M.SANITIZE_NAMED_PROPS || !1, j = M.KEEP_CONTENT !== !1, ne = M.IN_PLACE || !1, Q = M.ALLOWED_URI_REGEXP || lg, Ue = M.NAMESPACE || Me, Li = M.MATHML_TEXT_INTEGRATION_POINTS || Li, Di = M.HTML_INTEGRATION_POINTS || Di, Le = M.CUSTOM_ELEMENT_HANDLING || {}, M.CUSTOM_ELEMENT_HANDLING && bd(M.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Le.tagNameCheck = M.CUSTOM_ELEMENT_HANDLING.tagNameCheck), M.CUSTOM_ELEMENT_HANDLING && bd(M.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Le.attributeNameCheck = M.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), M.CUSTOM_ELEMENT_HANDLING && typeof M.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (Le.allowCustomizedBuiltInElements = M.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), C && (ye = !1), T && (S = !0), Oe && (V = Ge({}, ep), Ae = [], Oe.html === !0 && (Ge(V, Zf), Ge(Ae, tp)), Oe.svg === !0 && (Ge(V, Yc), Ge(Ae, Jc), Ge(Ae, Bi)), Oe.svgFilters === !0 && (Ge(V, zc), Ge(Ae, Jc), Ge(Ae, Bi)), Oe.mathMl === !0 && (Ge(V, Xc), Ge(Ae, np), Ge(Ae, Bi))), M.ADD_TAGS && (typeof M.ADD_TAGS == "function" ? he.tagCheck = M.ADD_TAGS : (V === oe && (V = sr(V)), Ge(V, M.ADD_TAGS, Lt))), M.ADD_ATTR && (typeof M.ADD_ATTR == "function" ? he.attributeCheck = M.ADD_ATTR : (Ae === Ne && (Ae = sr(Ae)), Ge(Ae, M.ADD_ATTR, Lt))), M.ADD_URI_SAFE_ATTR && Ge($, M.ADD_URI_SAFE_ATTR, Lt), M.FORBID_CONTENTS && (y === f && (y = sr(y)), Ge(y, M.FORBID_CONTENTS, Lt)), M.ADD_FORBID_CONTENTS && (y === f && (y = sr(y)), Ge(y, M.ADD_FORBID_CONTENTS, Lt)), j && (V["#text"] = !0), te && Ge(V, ["html", "head", "body"]), V.table && (Ge(V, ["tbody"]), delete He.tbody), M.TRUSTED_TYPES_POLICY) {
          if (typeof M.TRUSTED_TYPES_POLICY.createHTML != "function") throw Ao('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
          if (typeof M.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Ao('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
          O = M.TRUSTED_TYPES_POLICY, L = O.createHTML("")
        } else O === void 0 && (O = uS(p, s)), O !== null && typeof L == "string" && (L = O.createHTML(""));
        an && an(M), ks = M
      }
    },
    Ad = Ge({}, [...Yc, ...zc, ...ZI]),
    Td = Ge({}, [...Xc, ...eS]),
    VE = function(M) {
      let ve = R(M);
      (!ve || !ve.tagName) && (ve = {
        namespaceURI: Ue,
        tagName: "template"
      });
      const Pe = oa(M.tagName),
        Et = oa(ve.tagName);
      return ze[M.namespaceURI] ? M.namespaceURI === Fe ? ve.namespaceURI === Me ? Pe === "svg" : ve.namespaceURI === ae ? Pe === "svg" && (Et === "annotation-xml" || Li[Et]) : !!Ad[Pe] : M.namespaceURI === ae ? ve.namespaceURI === Me ? Pe === "math" : ve.namespaceURI === Fe ? Pe === "math" && Di[Et] : !!Td[Pe] : M.namespaceURI === Me ? ve.namespaceURI === Fe && !Di[Et] || ve.namespaceURI === ae && !Li[Et] ? !1 : !Td[Pe] && (kE[Pe] || !Ad[Pe]) : !!(po === "application/xhtml+xml" && ze[M.namespaceURI]) : !1
    },
    Qn = function(M) {
      yo(t.removed, {
        element: M
      });
      try {
        R(M)
          .removeChild(M)
      } catch {
        b(M)
      }
    },
    is = function(M, ve) {
      try {
        yo(t.removed, {
          attribute: ve.getAttributeNode(M),
          from: ve
        })
      } catch {
        yo(t.removed, {
          attribute: null,
          from: ve
        })
      }
      if (ve.removeAttribute(M), M === "is")
        if (S || T) try {
          Qn(ve)
        } catch {} else try {
          ve.setAttribute(M, "")
        } catch {}
    },
    Od = function(M) {
      let ve = null,
        Pe = null;
      if (se) M = "<remove></remove>" + M;
      else {
        const Pt = Kc(M, /^[\r\n\t ]+/);
        Pe = Pt && Pt[0]
      }
      po === "application/xhtml+xml" && Ue === Me && (M = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + M + "</body></html>");
      const Et = O ? O.createHTML(M) : M;
      if (Ue === Me) try {
        ve = new g()
          .parseFromString(Et, po)
      } catch {}
      if (!ve || !ve.documentElement) {
        ve = P.createDocument(Ue, "template", null);
        try {
          ve.documentElement.innerHTML = ct ? L : Et
        } catch {}
      }
      const Ht = ve.body || ve.documentElement;
      return M && Pe && Ht.insertBefore(n.createTextNode(Pe), Ht.childNodes[0] || null), Ue === Me ? k.call(ve, te ? "html" : "body")[0] : te ? ve.documentElement : Ht
    },
    Id = function(M) {
      return D.call(M.ownerDocument || M, M, l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION, null)
    },
    Rc = function(M) {
      return M instanceof d && (typeof M.nodeName != "string" || typeof M.textContent != "string" || typeof M.removeChild != "function" || !(M.attributes instanceof u) || typeof M.removeAttribute != "function" || typeof M.setAttribute != "function" || typeof M.namespaceURI != "string" || typeof M.insertBefore != "function" || typeof M.hasChildNodes != "function")
    },
    Sd = function(M) {
      return typeof a == "function" && M instanceof a
    };

  function _r(ke, M, ve) {
    Fi(ke, Pe => {
      Pe.call(t, M, ve, ks)
    })
  }
  const Rd = function(M) {
      let ve = null;
      if (_r(H.beforeSanitizeElements, M, null), Rc(M)) return Qn(M), !0;
      const Pe = Lt(M.nodeName);
      if (_r(H.uponSanitizeElement, M, {
          tagName: Pe,
          allowedTags: V
        }), U && M.hasChildNodes() && !Sd(M.firstElementChild) && en(/<[/\w!]/g, M.innerHTML) && en(/<[/\w!]/g, M.textContent) || M.nodeType === Oo.progressingInstruction || U && M.nodeType === Oo.comment && en(/<[/\w]/g, M.data)) return Qn(M), !0;
      if (!(he.tagCheck instanceof Function && he.tagCheck(Pe)) && (!V[Pe] || He[Pe])) {
        if (!He[Pe] && Pd(Pe) && (Le.tagNameCheck instanceof RegExp && en(Le.tagNameCheck, Pe) || Le.tagNameCheck instanceof Function && Le.tagNameCheck(Pe))) return !1;
        if (j && !y[Pe]) {
          const Et = R(M) || M.parentNode,
            Ht = A(M) || M.childNodes;
          if (Ht && Et) {
            const Pt = Ht.length;
            for (let dn = Pt - 1; dn >= 0; --dn) {
              const mr = E(Ht[dn], !0);
              mr.__removalCount = (M.__removalCount || 0) + 1, Et.insertBefore(mr, v(M))
            }
          }
        }
        return Qn(M), !0
      }
      return M instanceof c && !VE(M) || (Pe === "noscript" || Pe === "noembed" || Pe === "noframes") && en(/<\/no(script|embed|frames)/i, M.innerHTML) ? (Qn(M), !0) : (C && M.nodeType === Oo.text && (ve = M.textContent, Fi([G, me, de], Et => {
        ve = bo(ve, Et, " ")
      }), M.textContent !== ve && (yo(t.removed, {
        element: M.cloneNode()
      }), M.textContent = ve)), _r(H.afterSanitizeElements, M, null), !1)
    },
    wd = function(M, ve, Pe) {
      if (z && (ve === "id" || ve === "name") && (Pe in n || Pe in $E)) return !1;
      if (!(ye && !W[ve] && en(X, ve))) {
        if (!(pe && en(N, ve))) {
          if (!(he.attributeCheck instanceof Function && he.attributeCheck(ve, M))) {
            if (!Ae[ve] || W[ve]) {
              if (!(Pd(M) && (Le.tagNameCheck instanceof RegExp && en(Le.tagNameCheck, M) || Le.tagNameCheck instanceof Function && Le.tagNameCheck(M)) && (Le.attributeNameCheck instanceof RegExp && en(Le.attributeNameCheck, ve) || Le.attributeNameCheck instanceof Function && Le.attributeNameCheck(ve, M)) || ve === "is" && Le.allowCustomizedBuiltInElements && (Le.tagNameCheck instanceof RegExp && en(Le.tagNameCheck, Pe) || Le.tagNameCheck instanceof Function && Le.tagNameCheck(Pe)))) return !1
            } else if (!$[ve]) {
              if (!en(Q, bo(Pe, ee, ""))) {
                if (!((ve === "src" || ve === "xlink:href" || ve === "href") && M !== "script" && zI(Pe, "data:") === 0 && h[M])) {
                  if (!(Re && !en(K, bo(Pe, ee, "")))) {
                    if (Pe) return !1
                  }
                }
              }
            }
          }
        }
      }
      return !0
    },
    Pd = function(M) {
      return M !== "annotation-xml" && Kc(M, _e)
    },
    Cd = function(M) {
      _r(H.beforeSanitizeAttributes, M, null);
      const {
        attributes: ve
      } = M;
      if (!ve || Rc(M)) return;
      const Pe = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: Ae,
        forceKeepAttr: void 0
      };
      let Et = ve.length;
      for (; Et--;) {
        const Ht = ve[Et],
          {
            name: Pt,
            namespaceURI: dn,
            value: mr
          } = Ht,
          xs = Lt(Pt),
          wc = mr;
        let $t = Pt === "value" ? wc : XI(wc);
        if (Pe.attrName = xs, Pe.attrValue = $t, Pe.keepAttr = !0, Pe.forceKeepAttr = void 0, _r(H.uponSanitizeAttribute, M, Pe), $t = Pe.attrValue, Ee && (xs === "id" || xs === "name") && (is(Pt, M), $t = le + $t), U && en(/((--!?|])>)|<\/(style|title|textarea)/i, $t)) {
          is(Pt, M);
          continue
        }
        if (xs === "attributename" && Kc($t, "href")) {
          is(Pt, M);
          continue
        }
        if (Pe.forceKeepAttr) continue;
        if (!Pe.keepAttr) {
          is(Pt, M);
          continue
        }
        if (!w && en(/\/>/i, $t)) {
          is(Pt, M);
          continue
        }
        C && Fi([G, me, de], Dd => {
          $t = bo($t, Dd, " ")
        });
        const Ld = Lt(M.nodeName);
        if (!wd(Ld, xs, $t)) {
          is(Pt, M);
          continue
        }
        if (O && typeof p == "object" && typeof p.getAttributeType == "function" && !dn) switch (p.getAttributeType(Ld, xs)) {
          case "TrustedHTML": {
            $t = O.createHTML($t);
            break
          }
          case "TrustedScriptURL": {
            $t = O.createScriptURL($t);
            break
          }
        }
        if ($t !== wc) try {
          dn ? M.setAttributeNS(dn, Pt, $t) : M.setAttribute(Pt, $t), Rc(M) ? Qn(M) : Qf(t.removed)
        } catch {
          is(Pt, M)
        }
      }
      _r(H.afterSanitizeAttributes, M, null)
    },
    ME = function ke(M) {
      let ve = null;
      const Pe = Id(M);
      for (_r(H.beforeSanitizeShadowDOM, M, null); ve = Pe.nextNode();) _r(H.uponSanitizeShadowNode, ve, null), Rd(ve), Cd(ve), ve.content instanceof o && ke(ve.content);
      _r(H.afterSanitizeShadowDOM, M, null)
    };
  return t.sanitize = function(ke) {
    let M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      ve = null,
      Pe = null,
      Et = null,
      Ht = null;
    if (ct = !ke, ct && (ke = "<!-->"), typeof ke != "string" && !Sd(ke))
      if (typeof ke.toString == "function") {
        if (ke = ke.toString(), typeof ke != "string") throw Ao("dirty is not a string, aborting")
      } else throw Ao("toString is not a function");
    if (!t.isSupported) return ke;
    if (ie || Sc(M), t.removed = [], typeof ke == "string" && (ne = !1), ne) {
      if (ke.nodeName) {
        const mr = Lt(ke.nodeName);
        if (!V[mr] || He[mr]) throw Ao("root node is forbidden and cannot be sanitized in-place")
      }
    } else if (ke instanceof a) ve = Od("<!---->"), Pe = ve.ownerDocument.importNode(ke, !0), Pe.nodeType === Oo.element && Pe.nodeName === "BODY" || Pe.nodeName === "HTML" ? ve = Pe : ve.appendChild(Pe);
    else {
      if (!S && !C && !te && ke.indexOf("<") === -1) return O && x ? O.createHTML(ke) : ke;
      if (ve = Od(ke), !ve) return S ? null : x ? L : ""
    }
    ve && se && Qn(ve.firstChild);
    const Pt = Id(ne ? ke : ve);
    for (; Et = Pt.nextNode();) Rd(Et), Cd(Et), Et.content instanceof o && ME(Et.content);
    if (ne) return ke;
    if (S) {
      if (T)
        for (Ht = J.call(ve.ownerDocument); ve.firstChild;) Ht.appendChild(ve.firstChild);
      else Ht = ve;
      return (Ae.shadowroot || Ae.shadowrootmode) && (Ht = Y.call(r, Ht, !0)), Ht
    }
    let dn = te ? ve.outerHTML : ve.innerHTML;
    return te && V["!doctype"] && ve.ownerDocument && ve.ownerDocument.doctype && ve.ownerDocument.doctype.name && en(ug, ve.ownerDocument.doctype.name) && (dn = "<!DOCTYPE " + ve.ownerDocument.doctype.name + `>
` + dn), C && Fi([G, me, de], mr => {
      dn = bo(dn, mr, " ")
    }), O && x ? O.createHTML(dn) : dn
  }, t.setConfig = function() {
    let ke = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Sc(ke), ie = !0
  }, t.clearConfig = function() {
    ks = null, ie = !1
  }, t.isValidAttribute = function(ke, M, ve) {
    ks || Sc({});
    const Pe = Lt(ke),
      Et = Lt(M);
    return wd(Pe, Et, ve)
  }, t.addHook = function(ke, M) {
    typeof M == "function" && yo(H[ke], M)
  }, t.removeHook = function(ke, M) {
    if (M !== void 0) {
      const ve = KI(H[ke], M);
      return ve === -1 ? void 0 : YI(H[ke], ve, 1)[0]
    }
    return Qf(H[ke])
  }, t.removeHooks = function(ke) {
    H[ke] = []
  }, t.removeAllHooks = function() {
    H = sp()
  }, t
}
var fg = dg();
const dS = {};
fg.addHook("afterSanitizeAttributes", e => {
  "target" in e && e instanceof HTMLElement && (e.setAttribute("target", "_blank"), e.setAttribute("rel", "noopener"))
});
const fS = (e, t = dS) => fg.sanitize(e, t),
  pS = (e, t) => {
    window.__pca = window.__pca ?? {}, window.__pca.versions = window.__pca.versions ?? {}, window.__pca.versions[e] = window.__pca.versions[e] ?? {}, window.__pca.versions[e].versionTag = t.versionTag ?? window.__pca.versions[e].versionTag
  },
  Ur = async (e, t, n = 5e3) => {
    const r = (s, o) => o.split(".")
      .reduce((i, a) => i && i?.[a], s);
    return new Promise(s => {
      const o = setInterval(() => {
        r(e, t) && (clearInterval(o), s(!0))
      }, 84);
      setTimeout(() => {
        clearInterval(o), s(!1)
      }, n)
    })
  }, op = (e, t) => {
    e.innerHTML = fS(t.value)
  }, _S = {
    mounted: op,
    updated: op
  }, mS = "lidl_locale", hS = "de-DE", Yu = () => {
    const e = () => {
        try {
          if (window?.__pca?.cfg?.locale) return window.__pca.cfg.locale;
          if (window?.mindShiftNav?.locale) return window?.mindShiftNav?.locale;
          if (window?.mindShiftNav?.language && window?.mindShiftNav?.country) return `${window.mindShiftNav.language}-${window.mindShiftNav.country}`
        } catch (r) {
          console.error(`Unable to get locale from window.mindShiftNav: ${r}`)
        }
        return null
      },
      t = () => Ut(mS);
    return {
      getLocale: () => t() ?? e() ?? hS
    }
  }, ip = Object.assign({
    "../../pca-configs/config/cs-CZ_dev.json": () => _(() => import("./cs-CZ_dev-BrMpGak7.js"), []),
    "../../pca-configs/config/cs-CZ_prod.json": () => _(() => import("./cs-CZ_prod-DmQiHIyD.js"), []),
    "../../pca-configs/config/cs-CZ_qa.json": () => _(() => import("./cs-CZ_qa-Ccmtr1ux.js"), []),
    "../../pca-configs/config/cs-CZ_test.json": () => _(() => import("./cs-CZ_test-Cj58NJ9n.js"), []),
    "../../pca-configs/config/de-DE_dev.json": () => _(() => import("./de-DE_dev-BFspD1dL.js"), []),
    "../../pca-configs/config/de-DE_prod.json": () => _(() => import("./de-DE_prod-CJ0GKopF.js"), []),
    "../../pca-configs/config/de-DE_qa.json": () => _(() => import("./de-DE_qa-G5qPR0i3.js"), []),
    "../../pca-configs/config/de-DE_test.json": () => _(() => import("./de-DE_test-ChLwoufT.js"), []),
    "../../pca-configs/config/es-ES_dev.json": () => _(() => import("./es-ES_dev-aWMYXNJn.js"), []),
    "../../pca-configs/config/es-ES_prod.json": () => _(() => import("./es-ES_prod-BMBtT27N.js"), []),
    "../../pca-configs/config/es-ES_qa.json": () => _(() => import("./es-ES_qa-BTp9wUz2.js"), []),
    "../../pca-configs/config/es-ES_test.json": () => _(() => import("./es-ES_test-De-yi8rT.js"), []),
    "../../pca-configs/config/fr-BE_dev.json": () => _(() => import("./fr-BE_dev-xoPXNO09.js"), []),
    "../../pca-configs/config/fr-BE_prod.json": () => _(() => import("./fr-BE_prod-_CWNzKlK.js"), []),
    "../../pca-configs/config/fr-BE_qa.json": () => _(() => import("./fr-BE_qa-DUnUtwhO.js"), []),
    "../../pca-configs/config/fr-BE_test.json": () => _(() => import("./fr-BE_test-oDmvJteU.js"), []),
    "../../pca-configs/config/fr-FR_dev.json": () => _(() => import("./fr-FR_dev-4RwaBwbd.js"), []),
    "../../pca-configs/config/fr-FR_prod.json": () => _(() => import("./fr-FR_prod-DSlFuZ6A.js"), []),
    "../../pca-configs/config/fr-FR_qa.json": () => _(() => import("./fr-FR_qa-OmU-2NXa.js"), []),
    "../../pca-configs/config/fr-FR_test.json": () => _(() => import("./fr-FR_test-BLS54bqK.js"), []),
    "../../pca-configs/config/nl-BE_dev.json": () => _(() => import("./nl-BE_dev-BqJkOxPE.js"), []),
    "../../pca-configs/config/nl-BE_prod.json": () => _(() => import("./nl-BE_prod-Bl7KGh5_.js"), []),
    "../../pca-configs/config/nl-BE_qa.json": () => _(() => import("./nl-BE_qa-CJH7mS7w.js"), []),
    "../../pca-configs/config/nl-BE_test.json": () => _(() => import("./nl-BE_test-CRMtqv09.js"), []),
    "../../pca-configs/config/nl-NL_dev.json": () => _(() => import("./nl-NL_dev-TJ6rOlsV.js"), []),
    "../../pca-configs/config/nl-NL_prod.json": () => _(() => import("./nl-NL_prod-tEf2gBjj.js"), []),
    "../../pca-configs/config/nl-NL_qa.json": () => _(() => import("./nl-NL_qa-Ares0OOL.js"), []),
    "../../pca-configs/config/nl-NL_test.json": () => _(() => import("./nl-NL_test-DsXzxPts.js"), []),
    "../../pca-configs/config/pl-PL_dev.json": () => _(() => import("./pl-PL_dev-AYqRitGN.js"), []),
    "../../pca-configs/config/pl-PL_prod.json": () => _(() => import("./pl-PL_prod-Bpbj9Mod.js"), []),
    "../../pca-configs/config/pl-PL_qa.json": () => _(() => import("./pl-PL_qa-B73P5tc_.js"), []),
    "../../pca-configs/config/pl-PL_test.json": () => _(() => import("./pl-PL_test-BLHmRN_o.js"), []),
    "../../pca-configs/config/sk-SK_dev.json": () => _(() => import("./sk-SK_dev-DuZjhXdr.js"), []),
    "../../pca-configs/config/sk-SK_prod.json": () => _(() => import("./sk-SK_prod-qJNT2c3P.js"), []),
    "../../pca-configs/config/sk-SK_qa.json": () => _(() => import("./sk-SK_qa-CegX0TDP.js"), []),
    "../../pca-configs/config/sk-SK_test.json": () => _(() => import("./sk-SK_test-Cgvv5sYH.js"), [])
  }), ap = ce(), Ye = () => {
    const {
      getLocale: e
    } = Yu(), {
      getEnvironment: t
    } = ju(), n = e(), r = t(), s = c => {
      ap.value = Object.freeze({
        ...c
      })
    }, o = () => window?.__pca?.cfg ? {
      ...window.__pca.cfg
    } : null, i = async c => {
      try {
        const u = Object.keys(ip)
          .find(g => g.endsWith(c));
        if (!u) throw new Error(`configs: no config file found for locale ${n} and environment ${r}`);
        return (await ip[u]())
          .default
      } catch (l) {
        console.error(`configs: error loading configs for locale ${n} and environment ${r}`, l)
      }
      return null
    }, a = async () => {
      const c = o() ?? await i(`/${n}_${r}.json`);
      return c ? (s(c), !0) : (console.error(`configs: no configs found for locale ${n} and environment ${r}`), !1)
    };
    return window.__pca?.isConfigInitialized === void 0 && ((window.__pca ??= {})
      .isConfigInitialized = a()), {
      configs: ap,
      init: async () => await window.__pca?.isConfigInitialized,
      _updateConfig: s
    }
  }, cp = Object.assign({
    "../../pca-configs/feature-toggles/cs-CZ_dev.json": () => _(() => import("./cs-CZ_dev-qHsedpKR.js"), []),
    "../../pca-configs/feature-toggles/cs-CZ_prod.json": () => _(() => import("./cs-CZ_prod-2dQ7t-Sx.js"), []),
    "../../pca-configs/feature-toggles/cs-CZ_qa.json": () => _(() => import("./cs-CZ_qa-LzrjQWny.js"), []),
    "../../pca-configs/feature-toggles/cs-CZ_test.json": () => _(() => import("./cs-CZ_test-GZN8KpDR.js"), []),
    "../../pca-configs/feature-toggles/de-DE_dev.json": () => _(() => import("./de-DE_dev-8dp6-nsG.js"), []),
    "../../pca-configs/feature-toggles/de-DE_prod.json": () => _(() => import("./de-DE_prod-DgVLnopF.js"), []),
    "../../pca-configs/feature-toggles/de-DE_qa.json": () => _(() => import("./de-DE_qa-ledCeidj.js"), []),
    "../../pca-configs/feature-toggles/de-DE_test.json": () => _(() => import("./de-DE_test-CFCJOCiO.js"), []),
    "../../pca-configs/feature-toggles/es-ES_dev.json": () => _(() => import("./es-ES_dev-ofx9UZDL.js"), []),
    "../../pca-configs/feature-toggles/es-ES_prod.json": () => _(() => import("./es-ES_prod-ofx9UZDL.js"), []),
    "../../pca-configs/feature-toggles/es-ES_qa.json": () => _(() => import("./es-ES_qa-ofx9UZDL.js"), []),
    "../../pca-configs/feature-toggles/es-ES_test.json": () => _(() => import("./es-ES_test-ofx9UZDL.js"), []),
    "../../pca-configs/feature-toggles/fr-BE_dev.json": () => _(() => import("./fr-BE_dev-CCYGNuvC.js"), []),
    "../../pca-configs/feature-toggles/fr-BE_prod.json": () => _(() => import("./fr-BE_prod-CCYGNuvC.js"), []),
    "../../pca-configs/feature-toggles/fr-BE_qa.json": () => _(() => import("./fr-BE_qa-CCYGNuvC.js"), []),
    "../../pca-configs/feature-toggles/fr-BE_test.json": () => _(() => import("./fr-BE_test-CCYGNuvC.js"), []),
    "../../pca-configs/feature-toggles/fr-FR_dev.json": () => _(() => import("./fr-FR_dev-TZGssMst.js"), []),
    "../../pca-configs/feature-toggles/fr-FR_prod.json": () => _(() => import("./fr-FR_prod-BQscEygP.js"), []),
    "../../pca-configs/feature-toggles/fr-FR_qa.json": () => _(() => import("./fr-FR_qa-BQscEygP.js"), []),
    "../../pca-configs/feature-toggles/fr-FR_test.json": () => _(() => import("./fr-FR_test-CWr6ss28.js"), []),
    "../../pca-configs/feature-toggles/nl-BE_dev.json": () => _(() => import("./nl-BE_dev-D8PbGNJ8.js"), []),
    "../../pca-configs/feature-toggles/nl-BE_prod.json": () => _(() => import("./nl-BE_prod-D8PbGNJ8.js"), []),
    "../../pca-configs/feature-toggles/nl-BE_qa.json": () => _(() => import("./nl-BE_qa-D8PbGNJ8.js"), []),
    "../../pca-configs/feature-toggles/nl-BE_test.json": () => _(() => import("./nl-BE_test-D8PbGNJ8.js"), []),
    "../../pca-configs/feature-toggles/nl-NL_dev.json": () => _(() => import("./nl-NL_dev-CZlEHXeA.js"), []),
    "../../pca-configs/feature-toggles/nl-NL_prod.json": () => _(() => import("./nl-NL_prod-LJ9ZLTEb.js"), []),
    "../../pca-configs/feature-toggles/nl-NL_qa.json": () => _(() => import("./nl-NL_qa-LJ9ZLTEb.js"), []),
    "../../pca-configs/feature-toggles/nl-NL_test.json": () => _(() => import("./nl-NL_test-LJ9ZLTEb.js"), []),
    "../../pca-configs/feature-toggles/pl-PL_dev.json": () => _(() => import("./pl-PL_dev-Cqmjx3K6.js"), []),
    "../../pca-configs/feature-toggles/pl-PL_prod.json": () => _(() => import("./pl-PL_prod-Cqmjx3K6.js"), []),
    "../../pca-configs/feature-toggles/pl-PL_qa.json": () => _(() => import("./pl-PL_qa-Cqmjx3K6.js"), []),
    "../../pca-configs/feature-toggles/pl-PL_test.json": () => _(() => import("./pl-PL_test-Cqmjx3K6.js"), []),
    "../../pca-configs/feature-toggles/sk-SK_dev.json": () => _(() => import("./sk-SK_dev-OhyMaGMu.js"), []),
    "../../pca-configs/feature-toggles/sk-SK_prod.json": () => _(() => import("./sk-SK_prod-OhyMaGMu.js"), []),
    "../../pca-configs/feature-toggles/sk-SK_qa.json": () => _(() => import("./sk-SK_qa-OhyMaGMu.js"), []),
    "../../pca-configs/feature-toggles/sk-SK_test.json": () => _(() => import("./sk-SK_test-OhyMaGMu.js"), [])
  }), Qc = ce(), jt = () => {
    const {
      getLocale: e
    } = Yu(), {
      getEnvironment: t
    } = ju(), n = e(), r = t(), s = () => window?.__pca?.featureToggles ? Object.freeze({
      ...window.__pca.featureToggles
    }) : null, o = async u => {
      try {
        const g = Object.keys(cp)
          .find(p => p.endsWith(u));
        if (!g) throw new Error(`feature-toggles: no feature-toggles file found for locale ${n} and environment ${r}`);
        return Object.freeze((await cp[g]())
          .default)
      } catch (d) {
        console.error(`feature-toggles: error loading feature-toggles for locale ${n} and environment ${r}`, d)
      }
      return null
    }, i = async () => {
      const u = s() ?? await o(`/${n}_${r}.json`);
      return u ? (Qc.value = u, !0) : (console.error(`feature-toggles: no toggles found for locale ${n} and environment ${r}`), !1)
    }, a = u => Qc.value?.[u] === !0, c = u => !a(u), l = u => {
      for (const d of u)
        if (a(d)) return !0;
      return !1
    };
    return window.__pca?.isFeatureTogglesInitialized === void 0 && ((window.__pca ??= {})
      .isFeatureTogglesInitialized = i()), {
      featureToggles: Qc,
      isFeatureEnabled: a,
      isFeatureDisabled: c,
      isFeatureEnabledOneOf: l,
      init: async () => await window.__pca?.isFeatureTogglesInitialized
    }
  };

function gS(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack))
}
const Ca = typeof window < "u",
  ts = (e, t = !1) => t ? Symbol.for(e) : Symbol(e),
  vS = (e, t, n) => ES({
    l: e,
    k: t,
    s: n
  }),
  ES = e => JSON.stringify(e)
  .replace(/\u2028/g, "\\u2028")
  .replace(/\u2029/g, "\\u2029")
  .replace(/\u0027/g, "\\u0027"),
  Ct = e => typeof e == "number" && isFinite(e),
  yS = e => zu(e) === "[object Date]",
  eo = e => zu(e) === "[object RegExp]",
  nc = e => Ke(e) && Object.keys(e)
  .length === 0,
  kt = Object.assign,
  bS = Object.create,
  lt = (e = null) => bS(e);
let lp;
const _s = () => lp || (lp = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : lt());

function up(e) {
  return e.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
    .replace(/\//g, "&#x2F;")
    .replace(/=/g, "&#x3D;")
}

function dp(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}

function AS(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, s, o) => `${s}="${dp(o)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, s, o) => `${s}='${dp(o)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi, /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach(r => {
    e = e.replace(r, "$1javascript&#58;")
  }), e
}
const TS = Object.prototype.hasOwnProperty;

function Fn(e, t) {
  return TS.call(e, t)
}
const Tt = Array.isArray,
  gt = e => typeof e == "function",
  Se = e => typeof e == "string",
  Qe = e => typeof e == "boolean",
  tt = e => e !== null && typeof e == "object",
  OS = e => tt(e) && gt(e.then) && gt(e.catch),
  pg = Object.prototype.toString,
  zu = e => pg.call(e),
  Ke = e => zu(e) === "[object Object]",
  IS = e => e == null ? "" : Tt(e) || Ke(e) && e.toString === pg ? JSON.stringify(e, null, 2) : String(e);

function Xu(e, t = "") {
  return e.reduce((n, r, s) => s === 0 ? n + r : n + t + r, "")
}
const Ui = e => !tt(e) || Tt(e);

function ia(e, t) {
  if (Ui(e) || Ui(t)) throw new Error("Invalid value");
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
      .forEach(o => {
        o !== "__proto__" && (tt(r[o]) && !tt(s[o]) && (s[o] = Array.isArray(r[o]) ? [] : lt()), Ui(s[o]) || Ui(r[o]) ? s[o] = r[o] : n.push({
          src: r[o],
          des: s[o]
        }))
      })
  }
}

function SS(e, t, n) {
  return {
    line: e,
    column: t,
    offset: n
  }
}

function jl(e, t, n) {
  return {
    start: e,
    end: t
  }
}
const st = {
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
  RS = 17;

function rc(e, t, n = {}) {
  const {
    domain: r,
    messages: s,
    args: o
  } = n, i = e, a = new SyntaxError(String(i));
  return a.code = e, t && (a.location = t), a.domain = r, a
}

function wS(e) {
  throw e
}
const er = " ",
  PS = "\r",
  qt = `
`,
  CS = "
",
  LS = "
";

function DS(e) {
  const t = e;
  let n = 0,
    r = 1,
    s = 1,
    o = 0;
  const i = D => t[D] === PS && t[D + 1] === qt,
    a = D => t[D] === qt,
    c = D => t[D] === LS,
    l = D => t[D] === CS,
    u = D => i(D) || a(D) || c(D) || l(D),
    d = () => n,
    g = () => r,
    p = () => s,
    m = () => o,
    E = D => i(D) || c(D) || l(D) ? qt : t[D],
    b = () => E(n),
    v = () => E(n + o);

  function A() {
    return o = 0, u(n) && (r++, s = 0), i(n) && n++, n++, s++, t[n]
  }

  function R() {
    return i(n + o) && o++, o++, t[n + o]
  }

  function O() {
    n = 0, r = 1, s = 1, o = 0
  }

  function L(D = 0) {
    o = D
  }

  function P() {
    const D = n + o;
    for (; D !== n;) A();
    o = 0
  }
  return {
    index: d,
    line: g,
    column: p,
    peekOffset: m,
    charAt: E,
    currentChar: b,
    currentPeek: v,
    next: A,
    peek: R,
    reset: O,
    resetPeek: L,
    skipToPeek: P
  }
}
const gr = void 0,
  kS = ".",
  fp = "'",
  xS = "tokenizer";

function NS(e, t = {}) {
  const n = t.location !== !1,
    r = DS(e),
    s = () => r.index(),
    o = () => SS(r.line(), r.column(), r.index()),
    i = o(),
    a = s(),
    c = {
      currentType: 13,
      offset: a,
      startLoc: i,
      endLoc: i,
      lastType: 13,
      lastOffset: a,
      lastStartLoc: i,
      lastEndLoc: i,
      braceNest: 0,
      inLinked: !1,
      text: ""
    },
    l = () => c,
    {
      onError: u
    } = t;

  function d(S, T, x, ...z) {
    const Ee = l();
    if (T.column += x, T.offset += x, u) {
      const le = n ? jl(Ee.startLoc, T) : null,
        j = rc(S, le, {
          domain: xS,
          args: z
        });
      u(j)
    }
  }

  function g(S, T, x) {
    S.endLoc = o(), S.currentType = T;
    const z = {
      type: T
    };
    return n && (z.loc = jl(S.startLoc, S.endLoc)), x != null && (z.value = x), z
  }
  const p = S => g(S, 13);

  function m(S, T) {
    return S.currentChar() === T ? (S.next(), T) : (d(st.EXPECTED_TOKEN, o(), 0, T), "")
  }

  function E(S) {
    let T = "";
    for (; S.currentPeek() === er || S.currentPeek() === qt;) T += S.currentPeek(), S.peek();
    return T
  }

  function b(S) {
    const T = E(S);
    return S.skipToPeek(), T
  }

  function v(S) {
    if (S === gr) return !1;
    const T = S.charCodeAt(0);
    return T >= 97 && T <= 122 || T >= 65 && T <= 90 || T === 95
  }

  function A(S) {
    if (S === gr) return !1;
    const T = S.charCodeAt(0);
    return T >= 48 && T <= 57
  }

  function R(S, T) {
    const {
      currentType: x
    } = T;
    if (x !== 2) return !1;
    E(S);
    const z = v(S.currentPeek());
    return S.resetPeek(), z
  }

  function O(S, T) {
    const {
      currentType: x
    } = T;
    if (x !== 2) return !1;
    E(S);
    const z = S.currentPeek() === "-" ? S.peek() : S.currentPeek(),
      Ee = A(z);
    return S.resetPeek(), Ee
  }

  function L(S, T) {
    const {
      currentType: x
    } = T;
    if (x !== 2) return !1;
    E(S);
    const z = S.currentPeek() === fp;
    return S.resetPeek(), z
  }

  function P(S, T) {
    const {
      currentType: x
    } = T;
    if (x !== 7) return !1;
    E(S);
    const z = S.currentPeek() === ".";
    return S.resetPeek(), z
  }

  function D(S, T) {
    const {
      currentType: x
    } = T;
    if (x !== 8) return !1;
    E(S);
    const z = v(S.currentPeek());
    return S.resetPeek(), z
  }

  function J(S, T) {
    const {
      currentType: x
    } = T;
    if (!(x === 7 || x === 11)) return !1;
    E(S);
    const z = S.currentPeek() === ":";
    return S.resetPeek(), z
  }

  function k(S, T) {
    const {
      currentType: x
    } = T;
    if (x !== 9) return !1;
    const z = () => {
        const le = S.currentPeek();
        return le === "{" ? v(S.peek()) : le === "@" || le === "|" || le === ":" || le === "." || le === er || !le ? !1 : le === qt ? (S.peek(), z()) : H(S, !1)
      },
      Ee = z();
    return S.resetPeek(), Ee
  }

  function Y(S) {
    E(S);
    const T = S.currentPeek() === "|";
    return S.resetPeek(), T
  }

  function H(S, T = !0) {
    const x = (Ee = !1, le = "") => {
        const j = S.currentPeek();
        return j === "{" || j === "@" || !j ? Ee : j === "|" ? !(le === er || le === qt) : j === er ? (S.peek(), x(!0, er)) : j === qt ? (S.peek(), x(!0, qt)) : !0
      },
      z = x();
    return T && S.resetPeek(), z
  }

  function G(S, T) {
    const x = S.currentChar();
    return x === gr ? gr : T(x) ? (S.next(), x) : null
  }

  function me(S) {
    const T = S.charCodeAt(0);
    return T >= 97 && T <= 122 || T >= 65 && T <= 90 || T >= 48 && T <= 57 || T === 95 || T === 36
  }

  function de(S) {
    return G(S, me)
  }

  function X(S) {
    const T = S.charCodeAt(0);
    return T >= 97 && T <= 122 || T >= 65 && T <= 90 || T >= 48 && T <= 57 || T === 95 || T === 36 || T === 45
  }

  function N(S) {
    return G(S, X)
  }

  function K(S) {
    const T = S.charCodeAt(0);
    return T >= 48 && T <= 57
  }

  function ee(S) {
    return G(S, K)
  }

  function _e(S) {
    const T = S.charCodeAt(0);
    return T >= 48 && T <= 57 || T >= 65 && T <= 70 || T >= 97 && T <= 102
  }

  function Q(S) {
    return G(S, _e)
  }

  function V(S) {
    let T = "",
      x = "";
    for (; T = ee(S);) x += T;
    return x
  }

  function oe(S) {
    let T = "";
    for (;;) {
      const x = S.currentChar();
      if (x === "{" || x === "}" || x === "@" || x === "|" || !x) break;
      if (x === er || x === qt)
        if (H(S)) T += x, S.next();
        else {
          if (Y(S)) break;
          T += x, S.next()
        }
      else T += x, S.next()
    }
    return T
  }

  function Ae(S) {
    b(S);
    let T = "",
      x = "";
    for (; T = N(S);) x += T;
    const z = S.currentChar();
    if (z && z !== "}" && z !== gr && z !== er && z !== qt && z !== "　") {
      const Ee = ye(S);
      return d(st.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, x + Ee), x + Ee
    }
    return S.currentChar() === gr && d(st.UNTERMINATED_CLOSING_BRACE, o(), 0), x
  }

  function Ne(S) {
    b(S);
    let T = "";
    return S.currentChar() === "-" ? (S.next(), T += `-${V(S)}`) : T += V(S), S.currentChar() === gr && d(st.UNTERMINATED_CLOSING_BRACE, o(), 0), T
  }

  function Le(S) {
    return S !== fp && S !== qt
  }

  function He(S) {
    b(S), m(S, "'");
    let T = "",
      x = "";
    for (; T = G(S, Le);) T === "\\" ? x += W(S) : x += T;
    const z = S.currentChar();
    return z === qt || z === gr ? (d(st.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0), z === qt && (S.next(), m(S, "'")), x) : (m(S, "'"), x)
  }

  function W(S) {
    const T = S.currentChar();
    switch (T) {
      case "\\":
      case "'":
        return S.next(), `\\${T}`;
      case "u":
        return he(S, T, 4);
      case "U":
        return he(S, T, 6);
      default:
        return d(st.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, T), ""
    }
  }

  function he(S, T, x) {
    m(S, T);
    let z = "";
    for (let Ee = 0; Ee < x; Ee++) {
      const le = Q(S);
      if (!le) {
        d(st.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${T}${z}${S.currentChar()}`);
        break
      }
      z += le
    }
    return `\\${T}${z}`
  }

  function pe(S) {
    return S !== "{" && S !== "}" && S !== er && S !== qt
  }

  function ye(S) {
    b(S);
    let T = "",
      x = "";
    for (; T = G(S, pe);) x += T;
    return x
  }

  function Re(S) {
    let T = "",
      x = "";
    for (; T = de(S);) x += T;
    return x
  }

  function w(S) {
    const T = x => {
      const z = S.currentChar();
      return z === "{" || z === "@" || z === "|" || z === "(" || z === ")" || !z || z === er ? x : (x += z, S.next(), T(x))
    };
    return T("")
  }

  function C(S) {
    b(S);
    const T = m(S, "|");
    return b(S), T
  }

  function U(S, T) {
    let x = null;
    switch (S.currentChar()) {
      case "{":
        return T.braceNest >= 1 && d(st.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0), S.next(), x = g(T, 2, "{"), b(S), T.braceNest++, x;
      case "}":
        return T.braceNest > 0 && T.currentType === 2 && d(st.EMPTY_PLACEHOLDER, o(), 0), S.next(), x = g(T, 3, "}"), T.braceNest--, T.braceNest > 0 && b(S), T.inLinked && T.braceNest === 0 && (T.inLinked = !1), x;
      case "@":
        return T.braceNest > 0 && d(st.UNTERMINATED_CLOSING_BRACE, o(), 0), x = te(S, T) || p(T), T.braceNest = 0, x;
      default: {
        let Ee = !0,
          le = !0,
          j = !0;
        if (Y(S)) return T.braceNest > 0 && d(st.UNTERMINATED_CLOSING_BRACE, o(), 0), x = g(T, 1, C(S)), T.braceNest = 0, T.inLinked = !1, x;
        if (T.braceNest > 0 && (T.currentType === 4 || T.currentType === 5 || T.currentType === 6)) return d(st.UNTERMINATED_CLOSING_BRACE, o(), 0), T.braceNest = 0, ie(S, T);
        if (Ee = R(S, T)) return x = g(T, 4, Ae(S)), b(S), x;
        if (le = O(S, T)) return x = g(T, 5, Ne(S)), b(S), x;
        if (j = L(S, T)) return x = g(T, 6, He(S)), b(S), x;
        if (!Ee && !le && !j) return x = g(T, 12, ye(S)), d(st.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, x.value), b(S), x;
        break
      }
    }
    return x
  }

  function te(S, T) {
    const {
      currentType: x
    } = T;
    let z = null;
    const Ee = S.currentChar();
    switch ((x === 7 || x === 8 || x === 11 || x === 9) && (Ee === qt || Ee === er) && d(st.INVALID_LINKED_FORMAT, o(), 0), Ee) {
      case "@":
        return S.next(), z = g(T, 7, "@"), T.inLinked = !0, z;
      case ".":
        return b(S), S.next(), g(T, 8, ".");
      case ":":
        return b(S), S.next(), g(T, 9, ":");
      default:
        return Y(S) ? (z = g(T, 1, C(S)), T.braceNest = 0, T.inLinked = !1, z) : P(S, T) || J(S, T) ? (b(S), te(S, T)) : D(S, T) ? (b(S), g(T, 11, Re(S))) : k(S, T) ? (b(S), Ee === "{" ? U(S, T) || z : g(T, 10, w(S))) : (x === 7 && d(st.INVALID_LINKED_FORMAT, o(), 0), T.braceNest = 0, T.inLinked = !1, ie(S, T))
    }
  }

  function ie(S, T) {
    let x = {
      type: 13
    };
    if (T.braceNest > 0) return U(S, T) || p(T);
    if (T.inLinked) return te(S, T) || p(T);
    switch (S.currentChar()) {
      case "{":
        return U(S, T) || p(T);
      case "}":
        return d(st.UNBALANCED_CLOSING_BRACE, o(), 0), S.next(), g(T, 3, "}");
      case "@":
        return te(S, T) || p(T);
      default: {
        if (Y(S)) return x = g(T, 1, C(S)), T.braceNest = 0, T.inLinked = !1, x;
        if (H(S)) return g(T, 0, oe(S));
        break
      }
    }
    return x
  }

  function se() {
    const {
      currentType: S,
      offset: T,
      startLoc: x,
      endLoc: z
    } = c;
    return c.lastType = S, c.lastOffset = T, c.lastStartLoc = x, c.lastEndLoc = z, c.offset = s(), c.startLoc = o(), r.currentChar() === gr ? g(c, 13) : ie(r, c)
  }
  return {
    nextToken: se,
    currentOffset: s,
    currentPosition: o,
    context: l
  }
}
const $S = "parser",
  VS = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;

function MS(e, t, n) {
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

function FS(e = {}) {
  const t = e.location !== !1,
    {
      onError: n
    } = e;

  function r(v, A, R, O, ...L) {
    const P = v.currentPosition();
    if (P.offset += O, P.column += O, n) {
      const D = t ? jl(R, P) : null,
        J = rc(A, D, {
          domain: $S,
          args: L
        });
      n(J)
    }
  }

  function s(v, A, R) {
    const O = {
      type: v
    };
    return t && (O.start = A, O.end = A, O.loc = {
      start: R,
      end: R
    }), O
  }

  function o(v, A, R, O) {
    t && (v.end = A, v.loc && (v.loc.end = R))
  }

  function i(v, A) {
    const R = v.context(),
      O = s(3, R.offset, R.startLoc);
    return O.value = A, o(O, v.currentOffset(), v.currentPosition()), O
  }

  function a(v, A) {
    const R = v.context(),
      {
        lastOffset: O,
        lastStartLoc: L
      } = R,
      P = s(5, O, L);
    return P.index = parseInt(A, 10), v.nextToken(), o(P, v.currentOffset(), v.currentPosition()), P
  }

  function c(v, A) {
    const R = v.context(),
      {
        lastOffset: O,
        lastStartLoc: L
      } = R,
      P = s(4, O, L);
    return P.key = A, v.nextToken(), o(P, v.currentOffset(), v.currentPosition()), P
  }

  function l(v, A) {
    const R = v.context(),
      {
        lastOffset: O,
        lastStartLoc: L
      } = R,
      P = s(9, O, L);
    return P.value = A.replace(VS, MS), v.nextToken(), o(P, v.currentOffset(), v.currentPosition()), P
  }

  function u(v) {
    const A = v.nextToken(),
      R = v.context(),
      {
        lastOffset: O,
        lastStartLoc: L
      } = R,
      P = s(8, O, L);
    return A.type !== 11 ? (r(v, st.UNEXPECTED_EMPTY_LINKED_MODIFIER, R.lastStartLoc, 0), P.value = "", o(P, O, L), {
      nextConsumeToken: A,
      node: P
    }) : (A.value == null && r(v, st.UNEXPECTED_LEXICAL_ANALYSIS, R.lastStartLoc, 0, tr(A)), P.value = A.value || "", o(P, v.currentOffset(), v.currentPosition()), {
      node: P
    })
  }

  function d(v, A) {
    const R = v.context(),
      O = s(7, R.offset, R.startLoc);
    return O.value = A, o(O, v.currentOffset(), v.currentPosition()), O
  }

  function g(v) {
    const A = v.context(),
      R = s(6, A.offset, A.startLoc);
    let O = v.nextToken();
    if (O.type === 8) {
      const L = u(v);
      R.modifier = L.node, O = L.nextConsumeToken || v.nextToken()
    }
    switch (O.type !== 9 && r(v, st.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, tr(O)), O = v.nextToken(), O.type === 2 && (O = v.nextToken()), O.type) {
      case 10:
        O.value == null && r(v, st.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, tr(O)), R.key = d(v, O.value || "");
        break;
      case 4:
        O.value == null && r(v, st.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, tr(O)), R.key = c(v, O.value || "");
        break;
      case 5:
        O.value == null && r(v, st.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, tr(O)), R.key = a(v, O.value || "");
        break;
      case 6:
        O.value == null && r(v, st.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, tr(O)), R.key = l(v, O.value || "");
        break;
      default: {
        r(v, st.UNEXPECTED_EMPTY_LINKED_KEY, A.lastStartLoc, 0);
        const L = v.context(),
          P = s(7, L.offset, L.startLoc);
        return P.value = "", o(P, L.offset, L.startLoc), R.key = P, o(R, L.offset, L.startLoc), {
          nextConsumeToken: O,
          node: R
        }
      }
    }
    return o(R, v.currentOffset(), v.currentPosition()), {
      node: R
    }
  }

  function p(v) {
    const A = v.context(),
      R = A.currentType === 1 ? v.currentOffset() : A.offset,
      O = A.currentType === 1 ? A.endLoc : A.startLoc,
      L = s(2, R, O);
    L.items = [];
    let P = null;
    do {
      const k = P || v.nextToken();
      switch (P = null, k.type) {
        case 0:
          k.value == null && r(v, st.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, tr(k)), L.items.push(i(v, k.value || ""));
          break;
        case 5:
          k.value == null && r(v, st.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, tr(k)), L.items.push(a(v, k.value || ""));
          break;
        case 4:
          k.value == null && r(v, st.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, tr(k)), L.items.push(c(v, k.value || ""));
          break;
        case 6:
          k.value == null && r(v, st.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, tr(k)), L.items.push(l(v, k.value || ""));
          break;
        case 7: {
          const Y = g(v);
          L.items.push(Y.node), P = Y.nextConsumeToken || null;
          break
        }
      }
    } while (A.currentType !== 13 && A.currentType !== 1);
    const D = A.currentType === 1 ? A.lastOffset : v.currentOffset(),
      J = A.currentType === 1 ? A.lastEndLoc : v.currentPosition();
    return o(L, D, J), L
  }

  function m(v, A, R, O) {
    const L = v.context();
    let P = O.items.length === 0;
    const D = s(1, A, R);
    D.cases = [], D.cases.push(O);
    do {
      const J = p(v);
      P || (P = J.items.length === 0), D.cases.push(J)
    } while (L.currentType !== 13);
    return P && r(v, st.MUST_HAVE_MESSAGES_IN_PLURAL, R, 0), o(D, v.currentOffset(), v.currentPosition()), D
  }

  function E(v) {
    const A = v.context(),
      {
        offset: R,
        startLoc: O
      } = A,
      L = p(v);
    return A.currentType === 13 ? L : m(v, R, O, L)
  }

  function b(v) {
    const A = NS(v, kt({}, e)),
      R = A.context(),
      O = s(0, R.offset, R.startLoc);
    return t && O.loc && (O.loc.source = v), O.body = E(A), e.onCacheKey && (O.cacheKey = e.onCacheKey(v)), R.currentType !== 13 && r(A, st.UNEXPECTED_LEXICAL_ANALYSIS, R.lastStartLoc, 0, v[R.offset] || ""), o(O, A.currentOffset(), A.currentPosition()), O
  }
  return {
    parse: b
  }
}

function tr(e) {
  if (e.type === 13) return "EOF";
  const t = (e.value || "")
    .replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t
}

function BS(e, t = {}) {
  const n = {
    ast: e,
    helpers: new Set
  };
  return {
    context: () => n,
    helper: o => (n.helpers.add(o), o)
  }
}

function pp(e, t) {
  for (let n = 0; n < e.length; n++) Ju(e[n], t)
}

function Ju(e, t) {
  switch (e.type) {
    case 1:
      pp(e.cases, t), t.helper("plural");
      break;
    case 2:
      pp(e.items, t);
      break;
    case 6: {
      Ju(e.key, t), t.helper("linked"), t.helper("type");
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

function US(e, t = {}) {
  const n = BS(e);
  n.helper("normalize"), e.body && Ju(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers)
}

function jS(e) {
  const t = e.body;
  return t.type === 2 ? _p(t) : t.cases.forEach(n => _p(n)), e
}

function _p(e) {
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
      e.static = Xu(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value
      }
    }
  }
}

function Us(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Us(t.body), t.b = t.body, delete t.body;
      break
    }
    case 1: {
      const t = e,
        n = t.cases;
      for (let r = 0; r < n.length; r++) Us(n[r]);
      t.c = n, delete t.cases;
      break
    }
    case 2: {
      const t = e,
        n = t.items;
      for (let r = 0; r < n.length; r++) Us(n[r]);
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
      Us(t.key), t.k = t.key, delete t.key, t.modifier && (Us(t.modifier), t.m = t.modifier, delete t.modifier);
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

function HS(e, t) {
  const {
    filename: n,
    breakLineCode: r,
    needIndent: s
  } = t, o = t.location !== !1, i = {
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
  o && e.loc && (i.source = e.loc.source);
  const a = () => i;

  function c(E, b) {
    i.code += E
  }

  function l(E, b = !0) {
    const v = b ? r : "";
    c(s ? v + "  ".repeat(E) : v)
  }

  function u(E = !0) {
    const b = ++i.indentLevel;
    E && l(b)
  }

  function d(E = !0) {
    const b = --i.indentLevel;
    E && l(b)
  }

  function g() {
    l(i.indentLevel)
  }
  return {
    context: a,
    push: c,
    indent: u,
    deindent: d,
    newline: g,
    helper: E => `_${E}`,
    needIndent: () => i.needIndent
  }
}

function qS(e, t) {
  const {
    helper: n
  } = e;
  e.push(`${n("linked")}(`), to(e, t.key), t.modifier ? (e.push(", "), to(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")")
}

function WS(e, t) {
  const {
    helper: n,
    needIndent: r
  } = e;
  e.push(`${n("normalize")}([`), e.indent(r());
  const s = t.items.length;
  for (let o = 0; o < s && (to(e, t.items[o]), o !== s - 1); o++) e.push(", ");
  e.deindent(r()), e.push("])")
}

function GS(e, t) {
  const {
    helper: n,
    needIndent: r
  } = e;
  if (t.cases.length > 1) {
    e.push(`${n("plural")}([`), e.indent(r());
    const s = t.cases.length;
    for (let o = 0; o < s && (to(e, t.cases[o]), o !== s - 1); o++) e.push(", ");
    e.deindent(r()), e.push("])")
  }
}

function KS(e, t) {
  t.body ? to(e, t.body) : e.push("null")
}

function to(e, t) {
  const {
    helper: n
  } = e;
  switch (t.type) {
    case 0:
      KS(e, t);
      break;
    case 1:
      GS(e, t);
      break;
    case 2:
      WS(e, t);
      break;
    case 6:
      qS(e, t);
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
const YS = (e, t = {}) => {
  const n = Se(t.mode) ? t.mode : "normal",
    r = Se(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const s = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`,
    o = t.needIndent ? t.needIndent : n !== "arrow",
    i = e.helpers || [],
    a = HS(e, {
      filename: r,
      breakLineCode: s,
      needIndent: o
    });
  a.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), a.indent(o), i.length > 0 && (a.push(`const { ${Xu(i.map(u=>`${u}: _${u}`),", ")} } = ctx`), a.newline()), a.push("return "), to(a, e), a.deindent(o), a.push("}"), delete e.helpers;
  const {
    code: c,
    map: l
  } = a.context();
  return {
    ast: e,
    code: c,
    map: l ? l.toJSON() : void 0
  }
};

function zS(e, t = {}) {
  const n = kt({}, t),
    r = !!n.jit,
    s = !!n.minify,
    o = n.optimize == null ? !0 : n.optimize,
    a = FS(n)
    .parse(e);
  return r ? (o && jS(a), s && Us(a), {
    ast: a,
    code: ""
  }) : (US(a, n), YS(a, n))
}

function XS() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (_s()
    .__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (_s()
    .__INTLIFY_DROP_MESSAGE_COMPILER__ = !1)
}

function ur(e) {
  return tt(e) && Qu(e) === 0 && (Fn(e, "b") || Fn(e, "body"))
}
const _g = ["b", "body"];

function JS(e) {
  return ns(e, _g)
}
const mg = ["c", "cases"];

function QS(e) {
  return ns(e, mg, [])
}
const hg = ["s", "static"];

function ZS(e) {
  return ns(e, hg)
}
const gg = ["i", "items"];

function eR(e) {
  return ns(e, gg, [])
}
const vg = ["t", "type"];

function Qu(e) {
  return ns(e, vg)
}
const Eg = ["v", "value"];

function ji(e, t) {
  const n = ns(e, Eg);
  if (n != null) return n;
  throw ii(t)
}
const yg = ["m", "modifier"];

function tR(e) {
  return ns(e, yg)
}
const bg = ["k", "key"];

function nR(e) {
  const t = ns(e, bg);
  if (t) return t;
  throw ii(6)
}

function ns(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    if (Fn(e, s) && e[s] != null) return e[s]
  }
  return n
}
const Ag = [..._g, ...mg, ...hg, ...gg, ...bg, ...yg, ...Eg, ...vg];

function ii(e) {
  return new Error(`unhandled node type: ${e}`)
}

function Zc(e) {
  return n => rR(n, e)
}

function rR(e, t) {
  const n = JS(t);
  if (n == null) throw ii(0);
  if (Qu(n) === 1) {
    const o = QS(n);
    return e.plural(o.reduce((i, a) => [...i, mp(e, a)], []))
  } else return mp(e, n)
}

function mp(e, t) {
  const n = ZS(t);
  if (n != null) return e.type === "text" ? n : e.normalize([n]);
  {
    const r = eR(t)
      .reduce((s, o) => [...s, Hl(e, o)], []);
    return e.normalize(r)
  }
}

function Hl(e, t) {
  const n = Qu(t);
  switch (n) {
    case 3:
      return ji(t, n);
    case 9:
      return ji(t, n);
    case 4: {
      const r = t;
      if (Fn(r, "k") && r.k) return e.interpolate(e.named(r.k));
      if (Fn(r, "key") && r.key) return e.interpolate(e.named(r.key));
      throw ii(n)
    }
    case 5: {
      const r = t;
      if (Fn(r, "i") && Ct(r.i)) return e.interpolate(e.list(r.i));
      if (Fn(r, "index") && Ct(r.index)) return e.interpolate(e.list(r.index));
      throw ii(n)
    }
    case 6: {
      const r = t,
        s = tR(r),
        o = nR(r);
      return e.linked(Hl(e, o), s ? Hl(e, s) : void 0, e.type)
    }
    case 7:
      return ji(t, n);
    case 8:
      return ji(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`)
  }
}
const sR = e => e;
let Hi = lt();

function oR(e, t = {}) {
  let n = !1;
  const r = t.onError || wS;
  return t.onError = s => {
    n = !0, r(s)
  }, {
    ...zS(e, t),
    detectError: n
  }
}

function iR(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && Se(e)) {
    Qe(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || sR)(e),
      s = Hi[r];
    if (s) return s;
    const {
      ast: o,
      detectError: i
    } = oR(e, {
      ...t,
      location: !1,
      jit: !0
    }), a = Zc(o);
    return i ? a : Hi[r] = a
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = Hi[n];
      return r || (Hi[n] = Zc(e))
    } else return Zc(e)
  }
}
let ai = null;

function aR(e) {
  ai = e
}

function cR(e, t, n) {
  ai && ai.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  })
}
const lR = uR("function:translate");

function uR(e) {
  return t => ai && ai.emit(e, t)
}
const Sr = {
    INVALID_ARGUMENT: RS,
    INVALID_DATE_ARGUMENT: 18,
    INVALID_ISO_DATE_ARGUMENT: 19,
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
    NOT_SUPPORT_LOCALE_TYPE: 23
  },
  dR = 24;

function Rr(e) {
  return rc(e, null, void 0)
}

function Zu(e, t) {
  return t.locale != null ? hp(t.locale) : hp(e.locale)
}
let el;

function hp(e) {
  if (Se(e)) return e;
  if (gt(e)) {
    if (e.resolvedOnce && el != null) return el;
    if (e.constructor.name === "Function") {
      const t = e();
      if (OS(t)) throw Rr(Sr.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return el = t
    } else throw Rr(Sr.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)
  } else throw Rr(Sr.NOT_SUPPORT_LOCALE_TYPE)
}

function fR(e, t, n) {
  return [...new Set([n, ...Tt(t) ? t : tt(t) ? Object.keys(t) : Se(t) ? [t] : [n]])]
}

function Tg(e, t, n) {
  const r = Se(n) ? n : ci,
    s = e;
  s.__localeChainCache || (s.__localeChainCache = new Map);
  let o = s.__localeChainCache.get(r);
  if (!o) {
    o = [];
    let i = [n];
    for (; Tt(i);) i = gp(o, i, t);
    const a = Tt(t) || !Ke(t) ? t : t.default ? t.default : null;
    i = Se(a) ? [a] : a, Tt(i) && gp(o, i, !1), s.__localeChainCache.set(r, o)
  }
  return o
}

function gp(e, t, n) {
  let r = !0;
  for (let s = 0; s < t.length && Qe(r); s++) {
    const o = t[s];
    Se(o) && (r = pR(e, t[s], n))
  }
  return r
}

function pR(e, t, n) {
  let r;
  const s = t.split("-");
  do {
    const o = s.join("-");
    r = _R(e, o, n), s.splice(-1, 1)
  } while (s.length && r === !0);
  return r
}

function _R(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (Tt(n) || Ke(n)) && n[s] && (r = n[s])
  }
  return r
}
const rs = [];
rs[0] = {
  w: [0],
  i: [3, 0],
  "[": [4],
  o: [7]
};
rs[1] = {
  w: [1],
  ".": [2],
  "[": [4],
  o: [7]
};
rs[2] = {
  w: [2],
  i: [3, 0],
  0: [3, 0]
};
rs[3] = {
  i: [3, 0],
  0: [3, 0],
  w: [1, 1],
  ".": [2, 1],
  "[": [4, 1],
  o: [7, 1]
};
rs[4] = {
  "'": [5, 0],
  '"': [6, 0],
  "[": [4, 2],
  "]": [1, 3],
  o: 8,
  l: [4, 0]
};
rs[5] = {
  "'": [4, 0],
  o: 8,
  l: [5, 0]
};
rs[6] = {
  '"': [4, 0],
  o: 8,
  l: [6, 0]
};
const mR = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

function hR(e) {
  return mR.test(e)
}

function gR(e) {
  const t = e.charCodeAt(0),
    n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e
}

function vR(e) {
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

function ER(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : hR(t) ? gR(t) : "*" + t
}

function yR(e) {
  const t = [];
  let n = -1,
    r = 0,
    s = 0,
    o, i, a, c, l, u, d;
  const g = [];
  g[0] = () => {
    i === void 0 ? i = a : i += a
  }, g[1] = () => {
    i !== void 0 && (t.push(i), i = void 0)
  }, g[2] = () => {
    g[0](), s++
  }, g[3] = () => {
    if (s > 0) s--, r = 4, g[0]();
    else {
      if (s = 0, i === void 0 || (i = ER(i), i === !1)) return !1;
      g[1]()
    }
  };

  function p() {
    const m = e[n + 1];
    if (r === 5 && m === "'" || r === 6 && m === '"') return n++, a = "\\" + m, g[0](), !0
  }
  for (; r !== null;)
    if (n++, o = e[n], !(o === "\\" && p())) {
      if (c = vR(o), d = rs[r], l = d[c] || d.l || 8, l === 8 || (r = l[0], l[1] !== void 0 && (u = g[l[1]], u && (a = o, u() === !1)))) return;
      if (r === 7) return t
    }
}
const vp = new Map;

function bR(e, t) {
  return tt(e) ? e[t] : null
}

function AR(e, t) {
  if (!tt(e)) return null;
  let n = vp.get(t);
  if (n || (n = yR(t), n && vp.set(t, n)), !n) return null;
  const r = n.length;
  let s = e,
    o = 0;
  for (; o < r;) {
    const i = n[o];
    if (Ag.includes(i) && ur(s)) return null;
    const a = s[i];
    if (a === void 0 || gt(s)) return null;
    s = a, o++
  }
  return s
}
const TR = "11.2.8",
  sc = -1,
  ci = "en-US",
  Ep = "",
  yp = e => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;

function OR() {
  return {
    upper: (e, t) => t === "text" && Se(e) ? e.toUpperCase() : t === "vnode" && tt(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && Se(e) ? e.toLowerCase() : t === "vnode" && tt(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && Se(e) ? yp(e) : t === "vnode" && tt(e) && "__v_isVNode" in e ? yp(e.children) : e
  }
}
let Og;

function IR(e) {
  Og = e
}
let Ig;

function SR(e) {
  Ig = e
}
let Sg;

function RR(e) {
  Sg = e
}
let Rg = null;
const wR = e => {
    Rg = e
  },
  PR = () => Rg;
let wg = null;
const bp = e => {
    wg = e
  },
  CR = () => wg;
let Ap = 0;

function LR(e = {}) {
  const t = gt(e.onWarn) ? e.onWarn : gS,
    n = Se(e.version) ? e.version : TR,
    r = Se(e.locale) || gt(e.locale) ? e.locale : ci,
    s = gt(r) ? ci : r,
    o = Tt(e.fallbackLocale) || Ke(e.fallbackLocale) || Se(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s,
    i = Ke(e.messages) ? e.messages : tl(s),
    a = Ke(e.datetimeFormats) ? e.datetimeFormats : tl(s),
    c = Ke(e.numberFormats) ? e.numberFormats : tl(s),
    l = kt(lt(), e.modifiers, OR()),
    u = e.pluralRules || lt(),
    d = gt(e.missing) ? e.missing : null,
    g = Qe(e.missingWarn) || eo(e.missingWarn) ? e.missingWarn : !0,
    p = Qe(e.fallbackWarn) || eo(e.fallbackWarn) ? e.fallbackWarn : !0,
    m = !!e.fallbackFormat,
    E = !!e.unresolving,
    b = gt(e.postTranslation) ? e.postTranslation : null,
    v = Ke(e.processor) ? e.processor : null,
    A = Qe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    R = !!e.escapeParameter,
    O = gt(e.messageCompiler) ? e.messageCompiler : Og,
    L = gt(e.messageResolver) ? e.messageResolver : Ig || bR,
    P = gt(e.localeFallbacker) ? e.localeFallbacker : Sg || fR,
    D = tt(e.fallbackContext) ? e.fallbackContext : void 0,
    J = e,
    k = tt(J.__datetimeFormatters) ? J.__datetimeFormatters : new Map,
    Y = tt(J.__numberFormatters) ? J.__numberFormatters : new Map,
    H = tt(J.__meta) ? J.__meta : {};
  Ap++;
  const G = {
    version: n,
    cid: Ap,
    locale: r,
    fallbackLocale: o,
    messages: i,
    modifiers: l,
    pluralRules: u,
    missing: d,
    missingWarn: g,
    fallbackWarn: p,
    fallbackFormat: m,
    unresolving: E,
    postTranslation: b,
    processor: v,
    warnHtmlMessage: A,
    escapeParameter: R,
    messageCompiler: O,
    messageResolver: L,
    localeFallbacker: P,
    fallbackContext: D,
    onWarn: t,
    __meta: H
  };
  return G.datetimeFormats = a, G.numberFormats = c, G.__datetimeFormatters = k, G.__numberFormatters = Y, __INTLIFY_PROD_DEVTOOLS__ && cR(G, n, H), G
}
const tl = e => ({
  [e]: lt()
});

function ed(e, t, n, r, s) {
  const {
    missing: o,
    onWarn: i
  } = e;
  if (o !== null) {
    const a = o(e, n, t, s);
    return Se(a) ? a : t
  } else return t
}

function Io(e, t, n) {
  const r = e;
  r.__localeChainCache = new Map, e.localeFallbacker(e, n, t)
}

function DR(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0]
}

function kR(e, t) {
  const n = t.indexOf(e);
  if (n === -1) return !1;
  for (let r = n + 1; r < t.length; r++)
    if (DR(e, t[r])) return !0;
  return !1
}

function Tp(e, ...t) {
  const {
    datetimeFormats: n,
    unresolving: r,
    fallbackLocale: s,
    onWarn: o,
    localeFallbacker: i
  } = e, {
    __datetimeFormatters: a
  } = e, [c, l, u, d] = ql(...t), g = Qe(u.missingWarn) ? u.missingWarn : e.missingWarn;
  Qe(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
  const p = !!u.part,
    m = Zu(e, u),
    E = i(e, s, m);
  if (!Se(c) || c === "") return new Intl.DateTimeFormat(m, d)
    .format(l);
  let b = {},
    v, A = null;
  const R = "datetime format";
  for (let P = 0; P < E.length && (v = E[P], b = n[v] || {}, A = b[c], !Ke(A)); P++) ed(e, c, v, g, R);
  if (!Ke(A) || !Se(v)) return r ? sc : c;
  let O = `${v}__${c}`;
  nc(d) || (O = `${O}__${JSON.stringify(d)}`);
  let L = a.get(O);
  return L || (L = new Intl.DateTimeFormat(v, kt({}, A, d)), a.set(O, L)), p ? L.formatToParts(l) : L.format(l)
}
const Pg = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];

function ql(...e) {
  const [t, n, r, s] = e, o = lt();
  let i = lt(),
    a;
  if (Se(t)) {
    const c = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!c) throw Rr(Sr.INVALID_ISO_DATE_ARGUMENT);
    const l = c[3] ? c[3].trim()
      .startsWith("T") ? `${c[1].trim()}${c[3].trim()}` : `${c[1].trim()}T${c[3].trim()}` : c[1].trim();
    a = new Date(l);
    try {
      a.toISOString()
    } catch {
      throw Rr(Sr.INVALID_ISO_DATE_ARGUMENT)
    }
  } else if (yS(t)) {
    if (isNaN(t.getTime())) throw Rr(Sr.INVALID_DATE_ARGUMENT);
    a = t
  } else if (Ct(t)) a = t;
  else throw Rr(Sr.INVALID_ARGUMENT);
  return Se(n) ? o.key = n : Ke(n) && Object.keys(n)
    .forEach(c => {
      Pg.includes(c) ? i[c] = n[c] : o[c] = n[c]
    }), Se(r) ? o.locale = r : Ke(r) && (i = r), Ke(s) && (i = s), [o.key || "", a, o, i]
}

function Op(e, t, n) {
  const r = e;
  for (const s in n) {
    const o = `${t}__${s}`;
    r.__datetimeFormatters.has(o) && r.__datetimeFormatters.delete(o)
  }
}

function Ip(e, ...t) {
  const {
    numberFormats: n,
    unresolving: r,
    fallbackLocale: s,
    onWarn: o,
    localeFallbacker: i
  } = e, {
    __numberFormatters: a
  } = e, [c, l, u, d] = Wl(...t), g = Qe(u.missingWarn) ? u.missingWarn : e.missingWarn;
  Qe(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
  const p = !!u.part,
    m = Zu(e, u),
    E = i(e, s, m);
  if (!Se(c) || c === "") return new Intl.NumberFormat(m, d)
    .format(l);
  let b = {},
    v, A = null;
  const R = "number format";
  for (let P = 0; P < E.length && (v = E[P], b = n[v] || {}, A = b[c], !Ke(A)); P++) ed(e, c, v, g, R);
  if (!Ke(A) || !Se(v)) return r ? sc : c;
  let O = `${v}__${c}`;
  nc(d) || (O = `${O}__${JSON.stringify(d)}`);
  let L = a.get(O);
  return L || (L = new Intl.NumberFormat(v, kt({}, A, d)), a.set(O, L)), p ? L.formatToParts(l) : L.format(l)
}
const Cg = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];

function Wl(...e) {
  const [t, n, r, s] = e, o = lt();
  let i = lt();
  if (!Ct(t)) throw Rr(Sr.INVALID_ARGUMENT);
  const a = t;
  return Se(n) ? o.key = n : Ke(n) && Object.keys(n)
    .forEach(c => {
      Cg.includes(c) ? i[c] = n[c] : o[c] = n[c]
    }), Se(r) ? o.locale = r : Ke(r) && (i = r), Ke(s) && (i = s), [o.key || "", a, o, i]
}

function Sp(e, t, n) {
  const r = e;
  for (const s in n) {
    const o = `${t}__${s}`;
    r.__numberFormatters.has(o) && r.__numberFormatters.delete(o)
  }
}
const xR = e => e,
  NR = e => "",
  $R = "text",
  VR = e => e.length === 0 ? "" : Xu(e),
  MR = IS;

function Rp(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
}

function FR(e) {
  const t = Ct(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ct(e.named.count) || Ct(e.named.n)) ? Ct(e.named.count) ? e.named.count : Ct(e.named.n) ? e.named.n : t : t
}

function BR(e, t) {
  t.count || (t.count = e), t.n || (t.n = e)
}

function UR(e = {}) {
  const t = e.locale,
    n = FR(e),
    r = tt(e.pluralRules) && Se(t) && gt(e.pluralRules[t]) ? e.pluralRules[t] : Rp,
    s = tt(e.pluralRules) && Se(t) && gt(e.pluralRules[t]) ? Rp : void 0,
    o = v => v[r(n, v.length, s)],
    i = e.list || [],
    a = v => i[v],
    c = e.named || lt();
  Ct(e.pluralIndex) && BR(n, c);
  const l = v => c[v];

  function u(v, A) {
    const R = gt(e.messages) ? e.messages(v, !!A) : tt(e.messages) ? e.messages[v] : !1;
    return R || (e.parent ? e.parent.message(v) : NR)
  }
  const d = v => e.modifiers ? e.modifiers[v] : xR,
    g = Ke(e.processor) && gt(e.processor.normalize) ? e.processor.normalize : VR,
    p = Ke(e.processor) && gt(e.processor.interpolate) ? e.processor.interpolate : MR,
    m = Ke(e.processor) && Se(e.processor.type) ? e.processor.type : $R,
    b = {
      list: a,
      named: l,
      plural: o,
      linked: (v, ...A) => {
        const [R, O] = A;
        let L = "text",
          P = "";
        A.length === 1 ? tt(R) ? (P = R.modifier || P, L = R.type || L) : Se(R) && (P = R || P) : A.length === 2 && (Se(R) && (P = R || P), Se(O) && (L = O || L));
        const D = u(v, !0)(b),
          J = L === "vnode" && Tt(D) && P ? D[0] : D;
        return P ? d(P)(J, L) : J
      },
      message: u,
      type: m,
      interpolate: p,
      normalize: g,
      values: kt(lt(), i, c)
    };
  return b
}
const wp = () => "",
  Cn = e => gt(e);

function Pp(e, ...t) {
  const {
    fallbackFormat: n,
    postTranslation: r,
    unresolving: s,
    messageCompiler: o,
    fallbackLocale: i,
    messages: a
  } = e, [c, l] = Gl(...t), u = Qe(l.missingWarn) ? l.missingWarn : e.missingWarn, d = Qe(l.fallbackWarn) ? l.fallbackWarn : e.fallbackWarn, g = Qe(l.escapeParameter) ? l.escapeParameter : e.escapeParameter, p = !!l.resolvedMessage, m = Se(l.default) || Qe(l.default) ? Qe(l.default) ? o ? c : () => c : l.default : n ? o ? c : () => c : null, E = n || m != null && (Se(m) || gt(m)), b = Zu(e, l);
  g && jR(l);
  let [v, A, R] = p ? [c, b, a[b] || lt()] : Lg(e, c, b, i, d, u), O = v, L = c;
  if (!p && !(Se(O) || ur(O) || Cn(O)) && E && (O = m, L = O), !p && (!(Se(O) || ur(O) || Cn(O)) || !Se(A))) return s ? sc : c;
  let P = !1;
  const D = () => {
      P = !0
    },
    J = Cn(O) ? O : Dg(e, c, A, O, L, D);
  if (P) return O;
  const k = WR(e, A, R, l),
    Y = UR(k),
    H = HR(e, J, Y);
  let G = r ? r(H, c) : H;
  if (g && Se(G) && (G = AS(G)), __INTLIFY_PROD_DEVTOOLS__) {
    const me = {
      timestamp: Date.now(),
      key: Se(c) ? c : Cn(O) ? O.key : "",
      locale: A || (Cn(O) ? O.locale : ""),
      format: Se(O) ? O : Cn(O) ? O.source : "",
      message: G
    };
    me.meta = kt({}, e.__meta, PR() || {}), lR(me)
  }
  return G
}

function jR(e) {
  Tt(e.list) ? e.list = e.list.map(t => Se(t) ? up(t) : t) : tt(e.named) && Object.keys(e.named)
    .forEach(t => {
      Se(e.named[t]) && (e.named[t] = up(e.named[t]))
    })
}

function Lg(e, t, n, r, s, o) {
  const {
    messages: i,
    onWarn: a,
    messageResolver: c,
    localeFallbacker: l
  } = e, u = l(e, r, n);
  let d = lt(),
    g, p = null;
  const m = "translate";
  for (let E = 0; E < u.length && (g = u[E], d = i[g] || lt(), (p = c(d, t)) === null && (p = d[t]), !(Se(p) || ur(p) || Cn(p))); E++)
    if (!kR(g, u)) {
      const b = ed(e, t, g, o, m);
      b !== t && (p = b)
    } return [p, g, d]
}

function Dg(e, t, n, r, s, o) {
  const {
    messageCompiler: i,
    warnHtmlMessage: a
  } = e;
  if (Cn(r)) {
    const l = r;
    return l.locale = l.locale || n, l.key = l.key || t, l
  }
  if (i == null) {
    const l = (() => r);
    return l.locale = n, l.key = t, l
  }
  const c = i(r, qR(e, n, s, r, a, o));
  return c.locale = n, c.key = t, c.source = r, c
}

function HR(e, t, n) {
  return t(n)
}

function Gl(...e) {
  const [t, n, r] = e, s = lt();
  if (!Se(t) && !Ct(t) && !Cn(t) && !ur(t)) throw Rr(Sr.INVALID_ARGUMENT);
  const o = Ct(t) ? String(t) : (Cn(t), t);
  return Ct(n) ? s.plural = n : Se(n) ? s.default = n : Ke(n) && !nc(n) ? s.named = n : Tt(n) && (s.list = n), Ct(r) ? s.plural = r : Se(r) ? s.default = r : Ke(r) && kt(s, r), [o, s]
}

function qR(e, t, n, r, s, o) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: i => {
      throw o && o(i), i
    },
    onCacheKey: i => vS(t, n, i)
  }
}

function WR(e, t, n, r) {
  const {
    modifiers: s,
    pluralRules: o,
    messageResolver: i,
    fallbackLocale: a,
    fallbackWarn: c,
    missingWarn: l,
    fallbackContext: u
  } = e, g = {
    locale: t,
    modifiers: s,
    pluralRules: o,
    messages: (p, m) => {
      let E = i(n, p);
      if (E == null && (u || m)) {
        const [, , b] = Lg(u || e, p, t, a, c, l);
        E = i(b, p)
      }
      if (Se(E) || ur(E)) {
        let b = !1;
        const A = Dg(e, p, t, E, p, () => {
          b = !0
        });
        return b ? wp : A
      } else return Cn(E) ? E : wp
    }
  };
  return e.processor && (g.processor = e.processor), r.list && (g.list = r.list), r.named && (g.named = r.named), Ct(r.plural) && (g.pluralIndex = r.plural), g
}
XS();
const GR = "11.2.8";

function KR() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (_s()
    .__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (_s()
    .__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (_s()
    .__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (_s()
    .__INTLIFY_PROD_DEVTOOLS__ = !1)
}
const vn = {
  UNEXPECTED_RETURN_TYPE: dR,
  INVALID_ARGUMENT: 25,
  MUST_BE_CALL_SETUP_TOP: 26,
  NOT_INSTALLED: 27,
  REQUIRED_VALUE: 28,
  INVALID_VALUE: 29,
  NOT_INSTALLED_WITH_PROVIDE: 31,
  UNEXPECTED_ERROR: 32
};

function Sn(e, ...t) {
  return rc(e, null, void 0)
}
const Kl = ts("__translateVNode"),
  Yl = ts("__datetimeParts"),
  zl = ts("__numberParts"),
  kg = ts("__setPluralRules"),
  xg = ts("__injectWithOption"),
  Xl = ts("__dispose");

function li(e) {
  if (!tt(e) || ur(e)) return e;
  for (const t in e)
    if (Fn(e, t))
      if (!t.includes(".")) tt(e[t]) && li(e[t]);
      else {
        const n = t.split("."),
          r = n.length - 1;
        let s = e,
          o = !1;
        for (let i = 0; i < r; i++) {
          if (n[i] === "__proto__") throw new Error(`unsafe key: ${n[i]}`);
          if (n[i] in s || (s[n[i]] = lt()), !tt(s[n[i]])) {
            o = !0;
            break
          }
          s = s[n[i]]
        }
        if (o || (ur(s) ? Ag.includes(n[r]) || delete e[t] : (s[n[r]] = e[t], delete e[t])), !ur(s)) {
          const i = s[n[r]];
          tt(i) && li(i)
        }
      } return e
}

function td(e, t) {
  const {
    messages: n,
    __i18n: r,
    messageResolver: s,
    flatJson: o
  } = t, i = Ke(n) ? n : Tt(r) ? lt() : {
    [e]: lt()
  };
  if (Tt(r) && r.forEach(a => {
      if ("locale" in a && "resource" in a) {
        const {
          locale: c,
          resource: l
        } = a;
        c ? (i[c] = i[c] || lt(), ia(l, i[c])) : ia(l, i)
      } else Se(a) && ia(JSON.parse(a), i)
    }), s == null && o)
    for (const a in i) Fn(i, a) && li(i[a]);
  return i
}

function Ng(e) {
  return e.type
}

function $g(e, t, n) {
  let r = tt(t.messages) ? t.messages : lt();
  "__i18nGlobal" in n && (r = td(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const s = Object.keys(r);
  s.length && s.forEach(o => {
    e.mergeLocaleMessage(o, r[o])
  });
  {
    if (tt(t.datetimeFormats)) {
      const o = Object.keys(t.datetimeFormats);
      o.length && o.forEach(i => {
        e.mergeDateTimeFormat(i, t.datetimeFormats[i])
      })
    }
    if (tt(t.numberFormats)) {
      const o = Object.keys(t.numberFormats);
      o.length && o.forEach(i => {
        e.mergeNumberFormat(i, t.numberFormats[i])
      })
    }
  }
}

function Cp(e) {
  return Te(Ei, null, e, 0)
}

function ui() {
  return un()
}
const Lp = "__INTLIFY_META__",
  Dp = () => [],
  YR = () => !1;
let kp = 0;

function xp(e) {
  return ((t, n, r, s) => e(n, r, ui() || void 0, s))
}
const zR = () => {
  const e = ui();
  let t = null;
  return e && (t = Ng(e)[Lp]) ? {
    [Lp]: t
  } : null
};

function nd(e = {}) {
  const {
    __root: t,
    __injectWithOption: n
  } = e, r = t === void 0, s = e.flatJson, o = Ca ? ce : mn;
  let i = Qe(e.inheritLocale) ? e.inheritLocale : !0;
  const a = o(t && i ? t.locale.value : Se(e.locale) ? e.locale : ci),
    c = o(t && i ? t.fallbackLocale.value : Se(e.fallbackLocale) || Tt(e.fallbackLocale) || Ke(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : a.value),
    l = o(td(a.value, e)),
    u = o(Ke(e.datetimeFormats) ? e.datetimeFormats : {
      [a.value]: {}
    }),
    d = o(Ke(e.numberFormats) ? e.numberFormats : {
      [a.value]: {}
    });
  let g = t ? t.missingWarn : Qe(e.missingWarn) || eo(e.missingWarn) ? e.missingWarn : !0,
    p = t ? t.fallbackWarn : Qe(e.fallbackWarn) || eo(e.fallbackWarn) ? e.fallbackWarn : !0,
    m = t ? t.fallbackRoot : Qe(e.fallbackRoot) ? e.fallbackRoot : !0,
    E = !!e.fallbackFormat,
    b = gt(e.missing) ? e.missing : null,
    v = gt(e.missing) ? xp(e.missing) : null,
    A = gt(e.postTranslation) ? e.postTranslation : null,
    R = t ? t.warnHtmlMessage : Qe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    O = !!e.escapeParameter;
  const L = t ? t.modifiers : Ke(e.modifiers) ? e.modifiers : {};
  let P = e.pluralRules || t && t.pluralRules,
    D;
  D = (() => {
    r && bp(null);
    const j = {
      version: GR,
      locale: a.value,
      fallbackLocale: c.value,
      messages: l.value,
      modifiers: L,
      pluralRules: P,
      missing: v === null ? void 0 : v,
      missingWarn: g,
      fallbackWarn: p,
      fallbackFormat: E,
      unresolving: !0,
      postTranslation: A === null ? void 0 : A,
      warnHtmlMessage: R,
      escapeParameter: O,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: {
        framework: "vue"
      }
    };
    j.datetimeFormats = u.value, j.numberFormats = d.value, j.__datetimeFormatters = Ke(D) ? D.__datetimeFormatters : void 0, j.__numberFormatters = Ke(D) ? D.__numberFormatters : void 0;
    const ne = LR(j);
    return r && bp(ne), ne
  })(), Io(D, a.value, c.value);

  function k() {
    return [a.value, c.value, l.value, u.value, d.value]
  }
  const Y = q({
      get: () => a.value,
      set: j => {
        D.locale = j, a.value = j
      }
    }),
    H = q({
      get: () => c.value,
      set: j => {
        D.fallbackLocale = j, c.value = j, Io(D, a.value, j)
      }
    }),
    G = q(() => l.value),
    me = q(() => u.value),
    de = q(() => d.value);

  function X() {
    return gt(A) ? A : null
  }

  function N(j) {
    A = j, D.postTranslation = j
  }

  function K() {
    return b
  }

  function ee(j) {
    j !== null && (v = xp(j)), b = j, D.missing = v
  }
  const _e = (j, ne, Oe, y, f, h) => {
    k();
    let I;
    try {
      __INTLIFY_PROD_DEVTOOLS__,
      r || (D.fallbackContext = t ? CR() : void 0),
      I = j(D)
    }
    finally {
      __INTLIFY_PROD_DEVTOOLS__,
      r || (D.fallbackContext = void 0)
    }
    if (Oe !== "translate exists" && Ct(I) && I === sc || Oe === "translate exists" && !I) {
      const [$, Z] = ne();
      return t && m ? y(t) : f($)
    } else {
      if (h(I)) return I;
      throw Sn(vn.UNEXPECTED_RETURN_TYPE)
    }
  };

  function Q(...j) {
    return _e(ne => Reflect.apply(Pp, null, [ne, ...j]), () => Gl(...j), "translate", ne => Reflect.apply(ne.t, ne, [...j]), ne => ne, ne => Se(ne))
  }

  function V(...j) {
    const [ne, Oe, y] = j;
    if (y && !tt(y)) throw Sn(vn.INVALID_ARGUMENT);
    return Q(ne, Oe, kt({
      resolvedMessage: !0
    }, y || {}))
  }

  function oe(...j) {
    return _e(ne => Reflect.apply(Tp, null, [ne, ...j]), () => ql(...j), "datetime format", ne => Reflect.apply(ne.d, ne, [...j]), () => Ep, ne => Se(ne) || Tt(ne))
  }

  function Ae(...j) {
    return _e(ne => Reflect.apply(Ip, null, [ne, ...j]), () => Wl(...j), "number format", ne => Reflect.apply(ne.n, ne, [...j]), () => Ep, ne => Se(ne) || Tt(ne))
  }

  function Ne(j) {
    return j.map(ne => Se(ne) || Ct(ne) || Qe(ne) ? Cp(String(ne)) : ne)
  }
  const He = {
    normalize: Ne,
    interpolate: j => j,
    type: "vnode"
  };

  function W(...j) {
    return _e(ne => {
      let Oe;
      const y = ne;
      try {
        y.processor = He, Oe = Reflect.apply(Pp, null, [y, ...j])
      } finally {
        y.processor = null
      }
      return Oe
    }, () => Gl(...j), "translate", ne => ne[Kl](...j), ne => [Cp(ne)], ne => Tt(ne))
  }

  function he(...j) {
    return _e(ne => Reflect.apply(Ip, null, [ne, ...j]), () => Wl(...j), "number format", ne => ne[zl](...j), Dp, ne => Se(ne) || Tt(ne))
  }

  function pe(...j) {
    return _e(ne => Reflect.apply(Tp, null, [ne, ...j]), () => ql(...j), "datetime format", ne => ne[Yl](...j), Dp, ne => Se(ne) || Tt(ne))
  }

  function ye(j) {
    P = j, D.pluralRules = P
  }

  function Re(j, ne) {
    return _e(() => {
      if (!j) return !1;
      const Oe = Se(ne) ? ne : a.value,
        y = U(Oe),
        f = D.messageResolver(y, j);
      return ur(f) || Cn(f) || Se(f)
    }, () => [j], "translate exists", Oe => Reflect.apply(Oe.te, Oe, [j, ne]), YR, Oe => Qe(Oe))
  }

  function w(j) {
    let ne = null;
    const Oe = Tg(D, c.value, a.value);
    for (let y = 0; y < Oe.length; y++) {
      const f = l.value[Oe[y]] || {},
        h = D.messageResolver(f, j);
      if (h != null) {
        ne = h;
        break
      }
    }
    return ne
  }

  function C(j) {
    const ne = w(j);
    return ne ?? (t ? t.tm(j) || {} : {})
  }

  function U(j) {
    return l.value[j] || {}
  }

  function te(j, ne) {
    if (s) {
      const Oe = {
        [j]: ne
      };
      for (const y in Oe) Fn(Oe, y) && li(Oe[y]);
      ne = Oe[j]
    }
    l.value[j] = ne, D.messages = l.value
  }

  function ie(j, ne) {
    l.value[j] = l.value[j] || {};
    const Oe = {
      [j]: ne
    };
    if (s)
      for (const y in Oe) Fn(Oe, y) && li(Oe[y]);
    ne = Oe[j], ia(ne, l.value[j]), D.messages = l.value
  }

  function se(j) {
    return u.value[j] || {}
  }

  function S(j, ne) {
    u.value[j] = ne, D.datetimeFormats = u.value, Op(D, j, ne)
  }

  function T(j, ne) {
    u.value[j] = kt(u.value[j] || {}, ne), D.datetimeFormats = u.value, Op(D, j, ne)
  }

  function x(j) {
    return d.value[j] || {}
  }

  function z(j, ne) {
    d.value[j] = ne, D.numberFormats = d.value, Sp(D, j, ne)
  }

  function Ee(j, ne) {
    d.value[j] = kt(d.value[j] || {}, ne), D.numberFormats = d.value, Sp(D, j, ne)
  }
  kp++, t && Ca && (We(t.locale, j => {
    i && (a.value = j, D.locale = j, Io(D, a.value, c.value))
  }), We(t.fallbackLocale, j => {
    i && (c.value = j, D.fallbackLocale = j, Io(D, a.value, c.value))
  }));
  const le = {
    id: kp,
    locale: Y,
    fallbackLocale: H,
    get inheritLocale() {
      return i
    },
    set inheritLocale(j) {
      i = j, j && t && (a.value = t.locale.value, c.value = t.fallbackLocale.value, Io(D, a.value, c.value))
    },
    get availableLocales() {
      return Object.keys(l.value)
        .sort()
    },
    messages: G,
    get modifiers() {
      return L
    },
    get pluralRules() {
      return P || {}
    },
    get isGlobal() {
      return r
    },
    get missingWarn() {
      return g
    },
    set missingWarn(j) {
      g = j, D.missingWarn = g
    },
    get fallbackWarn() {
      return p
    },
    set fallbackWarn(j) {
      p = j, D.fallbackWarn = p
    },
    get fallbackRoot() {
      return m
    },
    set fallbackRoot(j) {
      m = j
    },
    get fallbackFormat() {
      return E
    },
    set fallbackFormat(j) {
      E = j, D.fallbackFormat = E
    },
    get warnHtmlMessage() {
      return R
    },
    set warnHtmlMessage(j) {
      R = j, D.warnHtmlMessage = j
    },
    get escapeParameter() {
      return O
    },
    set escapeParameter(j) {
      O = j, D.escapeParameter = j
    },
    t: Q,
    getLocaleMessage: U,
    setLocaleMessage: te,
    mergeLocaleMessage: ie,
    getPostTranslationHandler: X,
    setPostTranslationHandler: N,
    getMissingHandler: K,
    setMissingHandler: ee,
    [kg]: ye
  };
  return le.datetimeFormats = me, le.numberFormats = de, le.rt = V, le.te = Re, le.tm = C, le.d = oe, le.n = Ae, le.getDateTimeFormat = se, le.setDateTimeFormat = S, le.mergeDateTimeFormat = T, le.getNumberFormat = x, le.setNumberFormat = z, le.mergeNumberFormat = Ee, le[xg] = n, le[Kl] = W, le[Yl] = pe, le[zl] = he, le
}

function XR(e) {
  const t = Se(e.locale) ? e.locale : ci,
    n = Se(e.fallbackLocale) || Tt(e.fallbackLocale) || Ke(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t,
    r = gt(e.missing) ? e.missing : void 0,
    s = Qe(e.silentTranslationWarn) || eo(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0,
    o = Qe(e.silentFallbackWarn) || eo(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0,
    i = Qe(e.fallbackRoot) ? e.fallbackRoot : !0,
    a = !!e.formatFallbackMessages,
    c = Ke(e.modifiers) ? e.modifiers : {},
    l = e.pluralizationRules,
    u = gt(e.postTranslation) ? e.postTranslation : void 0,
    d = Se(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0,
    g = !!e.escapeParameterHtml,
    p = Qe(e.sync) ? e.sync : !0;
  let m = e.messages;
  if (Ke(e.sharedMessages)) {
    const L = e.sharedMessages;
    m = Object.keys(L)
      .reduce((D, J) => {
        const k = D[J] || (D[J] = {});
        return kt(k, L[J]), D
      }, m || {})
  }
  const {
    __i18n: E,
    __root: b,
    __injectWithOption: v
  } = e, A = e.datetimeFormats, R = e.numberFormats, O = e.flatJson;
  return {
    locale: t,
    fallbackLocale: n,
    messages: m,
    flatJson: O,
    datetimeFormats: A,
    numberFormats: R,
    missing: r,
    missingWarn: s,
    fallbackWarn: o,
    fallbackRoot: i,
    fallbackFormat: a,
    modifiers: c,
    pluralRules: l,
    postTranslation: u,
    warnHtmlMessage: d,
    escapeParameter: g,
    messageResolver: e.messageResolver,
    inheritLocale: p,
    __i18n: E,
    __root: b,
    __injectWithOption: v
  }
}

function Jl(e = {}) {
  const t = nd(XR(e)),
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
        return Qe(t.missingWarn) ? !t.missingWarn : t.missingWarn
      },
      set silentTranslationWarn(s) {
        t.missingWarn = Qe(s) ? !s : s
      },
      get silentFallbackWarn() {
        return Qe(t.fallbackWarn) ? !t.fallbackWarn : t.fallbackWarn
      },
      set silentFallbackWarn(s) {
        t.fallbackWarn = Qe(s) ? !s : s
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
      te(s, o) {
        return t.te(s, o)
      },
      tm(s) {
        return t.tm(s)
      },
      getLocaleMessage(s) {
        return t.getLocaleMessage(s)
      },
      setLocaleMessage(s, o) {
        t.setLocaleMessage(s, o)
      },
      mergeLocaleMessage(s, o) {
        t.mergeLocaleMessage(s, o)
      },
      d(...s) {
        return Reflect.apply(t.d, t, [...s])
      },
      getDateTimeFormat(s) {
        return t.getDateTimeFormat(s)
      },
      setDateTimeFormat(s, o) {
        t.setDateTimeFormat(s, o)
      },
      mergeDateTimeFormat(s, o) {
        t.mergeDateTimeFormat(s, o)
      },
      n(...s) {
        return Reflect.apply(t.n, t, [...s])
      },
      getNumberFormat(s) {
        return t.getNumberFormat(s)
      },
      setNumberFormat(s, o) {
        t.setNumberFormat(s, o)
      },
      mergeNumberFormat(s, o) {
        t.mergeNumberFormat(s, o)
      }
    };
  return r.__extender = n, r
}

function JR(e, t, n) {
  return {
    beforeCreate() {
      const r = ui();
      if (!r) throw Sn(vn.UNEXPECTED_ERROR);
      const s = this.$options;
      if (s.i18n) {
        const o = s.i18n;
        if (s.__i18n && (o.__i18n = s.__i18n), o.__root = t, this === this.$root) this.$i18n = Np(e, o);
        else {
          o.__injectWithOption = !0, o.__extender = n.__vueI18nExtend, this.$i18n = Jl(o);
          const i = this.$i18n;
          i.__extender && (i.__disposer = i.__extender(this.$i18n))
        }
      } else if (s.__i18n)
        if (this === this.$root) this.$i18n = Np(e, s);
        else {
          this.$i18n = Jl({
            __i18n: s.__i18n,
            __injectWithOption: !0,
            __extender: n.__vueI18nExtend,
            __root: t
          });
          const o = this.$i18n;
          o.__extender && (o.__disposer = o.__extender(this.$i18n))
        }
      else this.$i18n = e;
      s.__i18nGlobal && $g(t, s, s), this.$t = (...o) => this.$i18n.t(...o), this.$rt = (...o) => this.$i18n.rt(...o), this.$te = (o, i) => this.$i18n.te(o, i), this.$d = (...o) => this.$i18n.d(...o), this.$n = (...o) => this.$i18n.n(...o), this.$tm = o => this.$i18n.tm(o), n.__setInstance(r, this.$i18n)
    },
    mounted() {},
    unmounted() {
      const r = ui();
      if (!r) throw Sn(vn.UNEXPECTED_ERROR);
      const s = this.$i18n;
      delete this.$t, delete this.$rt, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, s.__disposer && (s.__disposer(), delete s.__disposer, delete s.__extender), n.__deleteInstance(r), delete this.$i18n
    }
  }
}

function Np(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[kg](t.pluralizationRules || e.pluralizationRules);
  const n = td(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n)
    .forEach(r => e.mergeLocaleMessage(r, n[r])), t.datetimeFormats && Object.keys(t.datetimeFormats)
    .forEach(r => e.mergeDateTimeFormat(r, t.datetimeFormats[r])), t.numberFormats && Object.keys(t.numberFormats)
    .forEach(r => e.mergeNumberFormat(r, t.numberFormats[r])), e
}
const rd = {
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

function QR({
  slots: e
}, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : [])
    .reduce((r, s) => [...r, ...s.type === Xe ? s.children : [s]], []) : t.reduce((n, r) => {
      const s = e[r];
      return s && (n[r] = s()), n
    }, lt())
}

function Vg() {
  return Xe
}
const ZR = Ie({
    name: "i18n-t",
    props: kt({
      keypath: {
        type: String,
        required: !0
      },
      plural: {
        type: [Number, String],
        validator: e => Ct(e) || !isNaN(e)
      }
    }, rd),
    setup(e, t) {
      const {
        slots: n,
        attrs: r
      } = t, s = e.i18n || mt({
        useScope: e.scope,
        __useComponent: !0
      });
      return () => {
        const o = Object.keys(n)
          .filter(d => d[0] !== "_"),
          i = lt();
        e.locale && (i.locale = e.locale), e.plural !== void 0 && (i.plural = Se(e.plural) ? +e.plural : e.plural);
        const a = QR(t, o),
          c = s[Kl](e.keypath, a, i),
          l = kt(lt(), r),
          u = Se(e.tag) || tt(e.tag) ? e.tag : Vg();
        return bi(u, l, c)
      }
    }
  }),
  $p = ZR;

function ew(e) {
  return Tt(e) && !Se(e[0])
}

function Mg(e, t, n, r) {
  const {
    slots: s,
    attrs: o
  } = t;
  return () => {
    const i = {
      part: !0
    };
    let a = lt();
    e.locale && (i.locale = e.locale), Se(e.format) ? i.key = e.format : tt(e.format) && (Se(e.format.key) && (i.key = e.format.key), a = Object.keys(e.format)
      .reduce((g, p) => n.includes(p) ? kt(lt(), g, {
        [p]: e.format[p]
      }) : g, lt()));
    const c = r(e.value, i, a);
    let l = [i.key];
    Tt(c) ? l = c.map((g, p) => {
      const m = s[g.type],
        E = m ? m({
          [g.type]: g.value,
          index: p,
          parts: c
        }) : [g.value];
      return ew(E) && (E[0].key = `${g.type}-${p}`), E
    }) : Se(c) && (l = [c]);
    const u = kt(lt(), o),
      d = Se(e.tag) || tt(e.tag) ? e.tag : Vg();
    return bi(d, u, l)
  }
}
const tw = Ie({
    name: "i18n-n",
    props: kt({
      value: {
        type: Number,
        required: !0
      },
      format: {
        type: [String, Object]
      }
    }, rd),
    setup(e, t) {
      const n = e.i18n || mt({
        useScope: e.scope,
        __useComponent: !0
      });
      return Mg(e, t, Cg, (...r) => n[zl](...r))
    }
  }),
  Vp = tw;

function nw(e, t) {
  const n = e;
  if (e.mode === "composition") return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer
  }
}

function rw(e) {
  const t = i => {
    const {
      instance: a,
      value: c
    } = i;
    if (!a || !a.$) throw Sn(vn.UNEXPECTED_ERROR);
    const l = nw(e, a.$),
      u = Mp(c);
    return [Reflect.apply(l.t, l, [...Fp(u)]), l]
  };
  return {
    created: (i, a) => {
      const [c, l] = t(a);
      Ca && e.global === l && (i.__i18nWatcher = We(l.locale, () => {
        a.instance && a.instance.$forceUpdate()
      })), i.__composer = l, i.textContent = c
    },
    unmounted: i => {
      Ca && i.__i18nWatcher && (i.__i18nWatcher(), i.__i18nWatcher = void 0, delete i.__i18nWatcher), i.__composer && (i.__composer = void 0, delete i.__composer)
    },
    beforeUpdate: (i, {
      value: a
    }) => {
      if (i.__composer) {
        const c = i.__composer,
          l = Mp(a);
        i.textContent = Reflect.apply(c.t, c, [...Fp(l)])
      }
    },
    getSSRProps: i => {
      const [a] = t(i);
      return {
        textContent: a
      }
    }
  }
}

function Mp(e) {
  if (Se(e)) return {
    path: e
  };
  if (Ke(e)) {
    if (!("path" in e)) throw Sn(vn.REQUIRED_VALUE, "path");
    return e
  } else throw Sn(vn.INVALID_VALUE)
}

function Fp(e) {
  const {
    path: t,
    locale: n,
    args: r,
    choice: s,
    plural: o
  } = e, i = {}, a = r || {};
  return Se(n) && (i.locale = n), Ct(s) && (i.plural = s), Ct(o) && (i.plural = o), [t, a, i]
}

function sw(e, t, ...n) {
  const r = Ke(n[0]) ? n[0] : {};
  (!Qe(r.globalInstall) || r.globalInstall) && ([$p.name, "I18nT"].forEach(o => e.component(o, $p)), [Vp.name, "I18nN"].forEach(o => e.component(o, Vp)), [Up.name, "I18nD"].forEach(o => e.component(o, Up))), e.directive("t", rw(t))
}
const ow = ts("global-vue-i18n");

function iw(e = {}) {
  const t = __VUE_I18N_LEGACY_API__ && Qe(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__,
    n = Qe(e.globalInjection) ? e.globalInjection : !0,
    r = new Map,
    [s, o] = aw(e, t),
    i = ts("");

  function a(d) {
    return r.get(d) || null
  }

  function c(d, g) {
    r.set(d, g)
  }

  function l(d) {
    r.delete(d)
  }
  const u = {
    get mode() {
      return __VUE_I18N_LEGACY_API__ && t ? "legacy" : "composition"
    },
    async install(d, ...g) {
      if (d.__VUE_I18N_SYMBOL__ = i, d.provide(d.__VUE_I18N_SYMBOL__, u), Ke(g[0])) {
        const E = g[0];
        u.__composerExtend = E.__composerExtend, u.__vueI18nExtend = E.__vueI18nExtend
      }
      let p = null;
      !t && n && (p = mw(d, u.global)), __VUE_I18N_FULL_INSTALL__ && sw(d, u, ...g), __VUE_I18N_LEGACY_API__ && t && d.mixin(JR(o, o.__composer, u));
      const m = d.unmount;
      d.unmount = () => {
        p && p(), u.dispose(), m()
      }
    },
    get global() {
      return o
    },
    dispose() {
      s.stop()
    },
    __instances: r,
    __getInstance: a,
    __setInstance: c,
    __deleteInstance: l
  };
  return u
}

function mt(e = {}) {
  const t = ui();
  if (t == null) throw Sn(vn.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw Sn(vn.NOT_INSTALLED);
  const n = cw(t),
    r = uw(n),
    s = Ng(t),
    o = lw(e, s);
  if (o === "global") return $g(r, e, s), r;
  if (o === "parent") {
    let c = dw(n, t, e.__useComponent);
    return c == null && (c = r), c
  }
  const i = n;
  let a = i.__getInstance(t);
  if (a == null) {
    const c = kt({}, e);
    "__i18n" in s && (c.__i18n = s.__i18n), r && (c.__root = r), a = nd(c), i.__composerExtend && (a[Xl] = i.__composerExtend(a)), pw(i, t, a), i.__setInstance(t, a)
  }
  return a
}

function aw(e, t) {
  const n = Au(),
    r = __VUE_I18N_LEGACY_API__ && t ? n.run(() => Jl(e)) : n.run(() => nd(e));
  if (r == null) throw Sn(vn.UNEXPECTED_ERROR);
  return [n, r]
}

function cw(e) {
  const t = Ot(e.isCE ? ow : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t) throw Sn(e.isCE ? vn.NOT_INSTALLED_WITH_PROVIDE : vn.UNEXPECTED_ERROR);
  return t
}

function lw(e, t) {
  return nc(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local"
}

function uw(e) {
  return e.mode === "composition" ? e.global : e.global.__composer
}

function dw(e, t, n = !1) {
  let r = null;
  const s = t.root;
  let o = fw(t, n);
  for (; o != null;) {
    const i = e;
    if (e.mode === "composition") r = i.__getInstance(o);
    else if (__VUE_I18N_LEGACY_API__) {
      const a = i.__getInstance(o);
      a != null && (r = a.__composer, n && r && !r[xg] && (r = null))
    }
    if (r != null || s === o) break;
    o = o.parent
  }
  return r
}

function fw(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent
}

function pw(e, t, n) {
  Rt(() => {}, t), co(() => {
    const r = n;
    e.__deleteInstance(t);
    const s = r[Xl];
    s && (s(), delete r[Xl])
  }, t)
}
const _w = ["locale", "fallbackLocale", "availableLocales"],
  Bp = ["t", "rt", "d", "n", "tm", "te"];

function mw(e, t) {
  const n = Object.create(null);
  return _w.forEach(s => {
    const o = Object.getOwnPropertyDescriptor(t, s);
    if (!o) throw Sn(vn.UNEXPECTED_ERROR);
    const i = ft(o.value) ? {
      get() {
        return o.value.value
      },
      set(a) {
        o.value.value = a
      }
    } : {
      get() {
        return o.get && o.get()
      }
    };
    Object.defineProperty(n, s, i)
  }), e.config.globalProperties.$i18n = n, Bp.forEach(s => {
    const o = Object.getOwnPropertyDescriptor(t, s);
    if (!o || !o.value) throw Sn(vn.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${s}`, o)
  }), () => {
    delete e.config.globalProperties.$i18n, Bp.forEach(s => {
      delete e.config.globalProperties[`$${s}`]
    })
  }
}
const hw = Ie({
    name: "i18n-d",
    props: kt({
      value: {
        type: [Number, Date],
        required: !0
      },
      format: {
        type: [String, Object]
      }
    }, rd),
    setup(e, t) {
      const n = e.i18n || mt({
        useScope: e.scope,
        __useComponent: !0
      });
      return Mg(e, t, Pg, (...r) => n[Yl](...r))
    }
  }),
  Up = hw;
KR();
IR(iR);
SR(AR);
RR(Tg);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const e = _s();
  e.__INTLIFY__ = !0, aR(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)
}
const jp = Object.assign({
    "../../pca-configs/i18n/cs-CZ.json": () => _(() => import("./cs-CZ-CZ6aZzK1.js"), []),
    "../../pca-configs/i18n/de-DE.json": () => _(() => import("./de-DE-CmcQaKWI.js"), []),
    "../../pca-configs/i18n/en-GB.json": () => _(() => import("./en-GB-kHeQujyC.js"), []),
    "../../pca-configs/i18n/es-ES.json": () => _(() => import("./es-ES-DBWsYPBQ.js"), []),
    "../../pca-configs/i18n/fr-BE.json": () => _(() => import("./fr-BE-tkGi4ZC9.js"), []),
    "../../pca-configs/i18n/fr-FR.json": () => _(() => import("./fr-FR-ZUC0LBa1.js"), []),
    "../../pca-configs/i18n/nl-BE.json": () => _(() => import("./nl-BE-BH1Il5Ez.js"), []),
    "../../pca-configs/i18n/nl-NL.json": () => _(() => import("./nl-NL-unEa2SO8.js"), []),
    "../../pca-configs/i18n/pl-PL.json": () => _(() => import("./pl-PL-DgfwmJEb.js"), []),
    "../../pca-configs/i18n/sk-SK.json": () => _(() => import("./sk-SK-CExFtvWb.js"), [])
  }),
  $s = ce(),
  qi = ce(),
  sd = e => {
    const {
      getLocale: t
    } = Yu(), {
      getEnvironment: n
    } = ju(), r = t(), s = n(), o = () => window?.__pca?.i18n ? Object.freeze({
      ...window.__pca.i18n
    }) : null, i = async u => {
      try {
        const g = Object.keys(jp)
          .find(p => p.endsWith(u));
        if (!g) throw new Error(`i18n: no i18n file found for locale ${r}`);
        return Object.freeze((await jp[g]())
          .default)
      } catch (d) {
        console.error(`i18n: error loading messages for locale ${r}`, d)
      }
      return null
    }, a = async () => {
      const u = o() ?? await i(`/${r}.json`);
      return u ? ($s.value = {
        [r]: u
      }, qi.value = iw({
        legacy: !1,
        locale: r,
        messages: $s.value,
        warnHtmlMessage: s !== Or.PROD,
        missingWarn: s !== Or.PROD
      }), !0) : (console.error(`i18n: no messages found for locale ${r}`), !1)
    }, c = (u, d) => qi.value?.global?.t ? qi.value.global.t(u, d) : s !== Or.PROD ? String(u) : "", l = u => $s.value ? u != null && !!$s.value[r] && u in $s.value[r] && c(u) !== "" : !1;
    return window.__pca?.isI18nInitialized === void 0 && ((window.__pca ??= {})
      .isI18nInitialized = a()), {
      i18n: qi,
      messages: $s,
      t: c,
      te: l,
      init: async () => await window.__pca?.isI18nInitialized
    }
  },
  gw = async e => {
    {
      const {
        init: t
      } = Ye();
      await t()
    } {
      const {
        init: t
      } = jt();
      await t()
    } {
      const {
        init: t
      } = sd();
      await t()
    }
  };
let Fg;
const oc = e => Fg = e,
  Bg = Symbol();

function Ql(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
}
var jo;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function"
})(jo || (jo = {}));

function vw() {
  const e = Au(!0),
    t = e.run(() => ce({}));
  let n = [],
    r = [];
  const s = Pu({
    install(o) {
      oc(s), s._a = o, o.provide(Bg, s), o.config.globalProperties.$pinia = s, r.forEach(i => n.push(i)), r = []
    },
    use(o) {
      return this._a ? n.push(o) : r.push(o), this
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map,
    state: t
  });
  return s
}
const Ug = () => {};

function Hp(e, t, n, r = Ug) {
  e.add(t);
  const s = () => {
    e.delete(t) && r()
  };
  return !n && hi() && Tu(s), s
}

function Vs(e, ...t) {
  e.forEach(n => {
    n(...t)
  })
}
const Ew = e => e(),
  qp = Symbol(),
  nl = Symbol();

function Zl(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, r) => e.set(r, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue;
    const r = t[n],
      s = e[n];
    Ql(s) && Ql(r) && e.hasOwnProperty(n) && !ft(r) && !lr(r) ? e[n] = Zl(s, r) : e[n] = r
  }
  return e
}
const yw = Symbol();

function bw(e) {
  return !Ql(e) || !Object.prototype.hasOwnProperty.call(e, yw)
}
const {
  assign: jr
} = Object;

function Aw(e) {
  return !!(ft(e) && e.effect)
}

function Tw(e, t, n, r) {
  const {
    state: s,
    actions: o,
    getters: i
  } = t, a = n.state.value[e];
  let c;

  function l() {
    a || (n.state.value[e] = s ? s() : {});
    const u = Ty(n.state.value[e]);
    return jr(u, o, Object.keys(i || {})
      .reduce((d, g) => (d[g] = Pu(q(() => {
        oc(n);
        const p = n._s.get(e);
        return i[g].call(p, p)
      })), d), {}))
  }
  return c = jg(e, l, t, n, r, !0), c
}

function jg(e, t, n = {}, r, s, o) {
  let i;
  const a = jr({
      actions: {}
    }, n),
    c = {
      deep: !0
    };
  let l, u, d = new Set,
    g = new Set,
    p;
  const m = r.state.value[e];
  !o && !m && (r.state.value[e] = {});
  let E;

  function b(J) {
    let k;
    l = u = !1, typeof J == "function" ? (J(r.state.value[e]), k = {
      type: jo.patchFunction,
      storeId: e,
      events: p
    }) : (Zl(r.state.value[e], J), k = {
      type: jo.patchObject,
      payload: J,
      storeId: e,
      events: p
    });
    const Y = E = Symbol();
    In()
      .then(() => {
        E === Y && (l = !0)
      }), u = !0, Vs(d, k, r.state.value[e])
  }
  const v = o ? function() {
    const {
      state: k
    } = n, Y = k ? k() : {};
    this.$patch(H => {
      jr(H, Y)
    })
  } : Ug;

  function A() {
    i.stop(), d.clear(), g.clear(), r._s.delete(e)
  }
  const R = (J, k = "") => {
      if (qp in J) return J[nl] = k, J;
      const Y = function() {
        oc(r);
        const H = Array.from(arguments),
          G = new Set,
          me = new Set;

        function de(K) {
          G.add(K)
        }

        function X(K) {
          me.add(K)
        }
        Vs(g, {
          args: H,
          name: Y[nl],
          store: L,
          after: de,
          onError: X
        });
        let N;
        try {
          N = J.apply(this && this.$id === e ? this : L, H)
        } catch (K) {
          throw Vs(me, K), K
        }
        return N instanceof Promise ? N.then(K => (Vs(G, K), K))
          .catch(K => (Vs(me, K), Promise.reject(K))) : (Vs(G, N), N)
      };
      return Y[qp] = !0, Y[nl] = k, Y
    },
    O = {
      _p: r,
      $id: e,
      $onAction: Hp.bind(null, g),
      $patch: b,
      $reset: v,
      $subscribe(J, k = {}) {
        const Y = Hp(d, J, k.detached, () => H()),
          H = i.run(() => We(() => r.state.value[e], G => {
            (k.flush === "sync" ? u : l) && J({
              storeId: e,
              type: jo.direct,
              events: p
            }, G)
          }, jr({}, c, k)));
        return Y
      },
      $dispose: A
    },
    L = dr(O);
  r._s.set(e, L);
  const D = (r._a && r._a.runWithContext || Ew)(() => r._e.run(() => (i = Au())
    .run(() => t({
      action: R
    }))));
  for (const J in D) {
    const k = D[J];
    if (ft(k) && !Aw(k) || lr(k)) o || (m && bw(k) && (ft(k) ? k.value = m[J] : Zl(k, m[J])), r.state.value[e][J] = k);
    else if (typeof k == "function") {
      const Y = R(k, J);
      D[J] = Y, a.actions[J] = k
    }
  }
  return jr(L, D), jr(qe(L), D), Object.defineProperty(L, "$state", {
    get: () => r.state.value[e],
    set: J => {
      b(k => {
        jr(k, J)
      })
    }
  }), r._p.forEach(J => {
    jr(L, i.run(() => J({
      store: L,
      app: r._a,
      pinia: r,
      options: a
    })))
  }), m && o && n.hydrate && n.hydrate(L.$state, m), l = !0, u = !0, L
}

function Nn(e, t, n) {
  let r;
  const s = typeof t == "function";
  r = s ? n : t;

  function o(i, a) {
    const c = Lu();
    return i = i || (c ? Ot(Bg, null) : null), i && oc(i), i = Fg, i._s.has(e) || (s ? jg(e, t, r, i) : Tw(e, r, i)), i._s.get(e)
  }
  return o.$id = e, o
}

function Ow() {
  return {
    history: [],
    pushHistory() {},
    debug() {},
    info() {},
    warn() {},
    error() {},
    fatal() {}
  }
}

function Iw(e) {
  return {
    history: [],
    pushHistory(...t) {
      this.history.length >= parseInt(e, 10) && this.history.shift(), this.history.push(t)
    },
    debug(...t) {
      console.info(t)
    },
    info(...t) {
      console.info(t)
    },
    warn(...t) {
      console.info(t)
    },
    error(...t) {
      console.info(t)
    },
    fatal(...t) {
      console.info(t)
    }
  }
}

function Sw(e, t) {
  return e ? Iw(t) : Ow()
}
const {
  i18n: Rw
} = sd(), {
  configs: Wp
} = Ye(), od = Rw.value, rn = Sw(Wp.value.logEnabled, Wp.value.logMaxStack), NM = () => {
  id() && qg(0, 0)
}, Hg = (e, t) => {
  if (!id()) return;
  const n = typeof e == "string" ? document.getElementById(e) : e;
  n && qg(0, n.getBoundingClientRect()
    .top + window.scrollY)
}, qg = (e = 0, t) => {
  ww() ? window.scrollTo({
    top: t,
    left: e,
    behavior: "smooth"
  }) : window.scrollTo(e, t)
}, id = () => typeof window < "u" && typeof document < "u", ww = () => id() ? Object.hasOwn(document.documentElement.style, "scrollBehavior") : !1, Pw = () => {
  let e = !1;
  document.addEventListener("keydown", t => {
    t.key === "Tab" && (e = !0)
  }), document.addEventListener("mousedown", () => {
    e = !1
  }), document.addEventListener("focusin", t => {
    e && t.target?.scrollIntoView({
      behavior: "smooth",
      block: "center"
    })
  })
};
const js = typeof document < "u";

function Wg(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
}

function Cw(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && Wg(e.default)
}
const rt = Object.assign;

function rl(e, t) {
  const n = {};
  for (const r in t) {
    const s = t[r];
    n[r] = Kn(s) ? s.map(e) : e(s)
  }
  return n
}
const Ho = () => {},
  Kn = Array.isArray;

function Gp(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n
}
const Gg = /#/g,
  Lw = /&/g,
  Dw = /\//g,
  kw = /=/g,
  xw = /\?/g,
  Kg = /\+/g,
  Nw = /%5B/g,
  $w = /%5D/g,
  Yg = /%5E/g,
  Vw = /%60/g,
  zg = /%7B/g,
  Mw = /%7C/g,
  Xg = /%7D/g,
  Fw = /%20/g;

function ad(e) {
  return e == null ? "" : encodeURI("" + e)
    .replace(Mw, "|")
    .replace(Nw, "[")
    .replace($w, "]")
}

function Bw(e) {
  return ad(e)
    .replace(zg, "{")
    .replace(Xg, "}")
    .replace(Yg, "^")
}

function eu(e) {
  return ad(e)
    .replace(Kg, "%2B")
    .replace(Fw, "+")
    .replace(Gg, "%23")
    .replace(Lw, "%26")
    .replace(Vw, "`")
    .replace(zg, "{")
    .replace(Xg, "}")
    .replace(Yg, "^")
}

function Uw(e) {
  return eu(e)
    .replace(kw, "%3D")
}

function jw(e) {
  return ad(e)
    .replace(Gg, "%23")
    .replace(xw, "%3F")
}

function Hw(e) {
  return jw(e)
    .replace(Dw, "%2F")
}

function di(e) {
  if (e == null) return null;
  try {
    return decodeURIComponent("" + e)
  } catch {}
  return "" + e
}
const qw = /\/$/,
  Ww = e => e.replace(qw, "");

function sl(e, t, n = "/") {
  let r, s = {},
    o = "",
    i = "";
  const a = t.indexOf("#");
  let c = t.indexOf("?");
  return c = a >= 0 && c > a ? -1 : c, c >= 0 && (r = t.slice(0, c), o = t.slice(c, a > 0 ? a : t.length), s = e(o.slice(1))), a >= 0 && (r = r || t.slice(0, a), i = t.slice(a, t.length)), r = zw(r ?? t, n), {
    fullPath: r + o + i,
    path: r,
    query: s,
    hash: di(i)
  }
}

function Gw(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "")
}

function Kp(e, t) {
  return !t || !e.toLowerCase()
    .startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}

function Kw(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1;
  return r > -1 && r === s && no(t.matched[r], n.matched[s]) && Jg(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}

function no(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}

function Jg(e, t) {
  if (Object.keys(e)
    .length !== Object.keys(t)
    .length) return !1;
  for (var n in e)
    if (!Yw(e[n], t[n])) return !1;
  return !0
}

function Yw(e, t) {
  return Kn(e) ? Yp(e, t) : Kn(t) ? Yp(t, e) : e?.valueOf() === t?.valueOf()
}

function Yp(e, t) {
  return Kn(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t
}

function zw(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    r = e.split("/"),
    s = r[r.length - 1];
  (s === ".." || s === ".") && r.push("");
  let o = n.length - 1,
    i, a;
  for (i = 0; i < r.length; i++)
    if (a = r[i], a !== ".")
      if (a === "..") o > 1 && o--;
      else break;
  return n.slice(0, o)
    .join("/") + "/" + r.slice(i)
    .join("/")
}
const Fr = {
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
let tu = (function(e) {
    return e.pop = "pop", e.push = "push", e
  })({}),
  ol = (function(e) {
    return e.back = "back", e.forward = "forward", e.unknown = "", e
  })({});

function Xw(e) {
  if (!e)
    if (js) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "")
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Ww(e)
}
const Jw = /^[^#]+#/;

function Qw(e, t) {
  return e.replace(Jw, "#") + t
}

function Zw(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0)
  }
}
const ic = () => ({
  left: window.scrollX,
  top: window.scrollY
});

function eP(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      r = typeof n == "string" && n.startsWith("#"),
      s = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!s) return;
    t = Zw(s, e)
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}

function zp(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const nu = new Map;

function tP(e, t) {
  nu.set(e, t)
}

function nP(e) {
  const t = nu.get(e);
  return nu.delete(e), t
}

function rP(e) {
  return typeof e == "string" || e && typeof e == "object"
}

function Qg(e) {
  return typeof e == "string" || typeof e == "symbol"
}
let At = (function(e) {
  return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e
})({});
const Zg = Symbol("");
At.MATCHER_NOT_FOUND + "", At.NAVIGATION_GUARD_REDIRECT + "", At.NAVIGATION_ABORTED + "", At.NAVIGATION_CANCELLED + "", At.NAVIGATION_DUPLICATED + "";

function ro(e, t) {
  return rt(new Error, {
    type: e,
    [Zg]: !0
  }, t)
}

function vr(e, t) {
  return e instanceof Error && Zg in e && (t == null || !!(e.type & t))
}
const sP = ["params", "query", "hash"];

function oP(e) {
  if (typeof e == "string") return e;
  if (e.path != null) return e.path;
  const t = {};
  for (const n of sP) n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2)
}

function iP(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const n = (e[0] === "?" ? e.slice(1) : e)
    .split("&");
  for (let r = 0; r < n.length; ++r) {
    const s = n[r].replace(Kg, " "),
      o = s.indexOf("="),
      i = di(o < 0 ? s : s.slice(0, o)),
      a = o < 0 ? null : di(s.slice(o + 1));
    if (i in t) {
      let c = t[i];
      Kn(c) || (c = t[i] = [c]), c.push(a)
    } else t[i] = a
  }
  return t
}

function Xp(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (n = Uw(n), r == null) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue
    }(Kn(r) ? r.map(s => s && eu(s)) : [r && eu(r)])
    .forEach(s => {
      s !== void 0 && (t += (t.length ? "&" : "") + n, s != null && (t += "=" + s))
    })
  }
  return t
}

function aP(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 && (t[n] = Kn(r) ? r.map(s => s == null ? null : "" + s) : r == null ? r : "" + r)
  }
  return t
}
const cP = Symbol(""),
  Jp = Symbol(""),
  ac = Symbol(""),
  cd = Symbol(""),
  ru = Symbol("");

function So() {
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

function Gr(e, t, n, r, s, o = i => i()) {
  const i = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
  return () => new Promise((a, c) => {
    const l = g => {
        g === !1 ? c(ro(At.NAVIGATION_ABORTED, {
          from: n,
          to: t
        })) : g instanceof Error ? c(g) : rP(g) ? c(ro(At.NAVIGATION_GUARD_REDIRECT, {
          from: t,
          to: g
        })) : (i && r.enterCallbacks[s] === i && typeof g == "function" && i.push(g), a())
      },
      u = o(() => e.call(r && r.instances[s], t, n, l));
    let d = Promise.resolve(u);
    e.length < 3 && (d = d.then(l)), d.catch(g => c(g))
  })
}

function il(e, t, n, r, s = o => o()) {
  const o = [];
  for (const i of e)
    for (const a in i.components) {
      let c = i.components[a];
      if (!(t !== "beforeRouteEnter" && !i.instances[a]))
        if (Wg(c)) {
          const l = (c.__vccOpts || c)[t];
          l && o.push(Gr(l, n, r, i, a, s))
        } else {
          let l = c();
          o.push(() => l.then(u => {
            if (!u) throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);
            const d = Cw(u) ? u.default : u;
            i.mods[a] = u, i.components[a] = d;
            const g = (d.__vccOpts || d)[t];
            return g && Gr(g, n, r, i, a, s)()
          }))
        }
    }
  return o
}

function lP(e, t) {
  const n = [],
    r = [],
    s = [],
    o = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < o; i++) {
    const a = t.matched[i];
    a && (e.matched.find(l => no(l, a)) ? r.push(a) : n.push(a));
    const c = e.matched[i];
    c && (t.matched.find(l => no(l, c)) || s.push(c))
  }
  return [n, r, s]
}
let uP = () => location.protocol + "//" + location.host;

function ev(e, t) {
  const {
    pathname: n,
    search: r,
    hash: s
  } = t, o = e.indexOf("#");
  if (o > -1) {
    let i = s.includes(e.slice(o)) ? e.slice(o)
      .length : 1,
      a = s.slice(i);
    return a[0] !== "/" && (a = "/" + a), Kp(a, "")
  }
  return Kp(n, e) + r + s
}

function dP(e, t, n, r) {
  let s = [],
    o = [],
    i = null;
  const a = ({
    state: g
  }) => {
    const p = ev(e, location),
      m = n.value,
      E = t.value;
    let b = 0;
    if (g) {
      if (n.value = p, t.value = g, i && i === m) {
        i = null;
        return
      }
      b = E ? g.position - E.position : 0
    } else r(p);
    s.forEach(v => {
      v(n.value, m, {
        delta: b,
        type: tu.pop,
        direction: b ? b > 0 ? ol.forward : ol.back : ol.unknown
      })
    })
  };

  function c() {
    i = n.value
  }

  function l(g) {
    s.push(g);
    const p = () => {
      const m = s.indexOf(g);
      m > -1 && s.splice(m, 1)
    };
    return o.push(p), p
  }

  function u() {
    if (document.visibilityState === "hidden") {
      const {
        history: g
      } = window;
      if (!g.state) return;
      g.replaceState(rt({}, g.state, {
        scroll: ic()
      }), "")
    }
  }

  function d() {
    for (const g of o) g();
    o = [], window.removeEventListener("popstate", a), window.removeEventListener("pagehide", u), document.removeEventListener("visibilitychange", u)
  }
  return window.addEventListener("popstate", a), window.addEventListener("pagehide", u), document.addEventListener("visibilitychange", u), {
    pauseListeners: c,
    listen: l,
    destroy: d
  }
}

function Qp(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? ic() : null
  }
}

function fP(e) {
  const {
    history: t,
    location: n
  } = window, r = {
    value: ev(e, n)
  }, s = {
    value: t.state
  };
  s.value || o(r.value, {
    back: null,
    current: r.value,
    forward: null,
    position: t.length - 1,
    replaced: !0,
    scroll: null
  }, !0);

  function o(c, l, u) {
    const d = e.indexOf("#"),
      g = d > -1 ? (n.host && document.querySelector("base") ? e : e.slice(d)) + c : uP() + e + c;
    try {
      t[u ? "replaceState" : "pushState"](l, "", g), s.value = l
    } catch (p) {
      console.error(p), n[u ? "replace" : "assign"](g)
    }
  }

  function i(c, l) {
    o(c, rt({}, t.state, Qp(s.value.back, c, s.value.forward, !0), l, {
      position: s.value.position
    }), !0), r.value = c
  }

  function a(c, l) {
    const u = rt({}, s.value, t.state, {
      forward: c,
      scroll: ic()
    });
    o(u.current, u, !0), o(c, rt({}, Qp(r.value, c, null), {
      position: u.position + 1
    }, l), !1), r.value = c
  }
  return {
    location: r,
    state: s,
    push: a,
    replace: i
  }
}

function pP(e) {
  e = Xw(e);
  const t = fP(e),
    n = dP(e, t.state, t.location, t.replace);

  function r(o, i = !0) {
    i || n.pauseListeners(), history.go(o)
  }
  const s = rt({
    location: "",
    base: e,
    go: r,
    createHref: Qw.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s
}
let ms = (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e
})({});
var Dt = (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e
})(Dt || {});
const _P = {
    type: ms.Static,
    value: ""
  },
  mP = /[a-zA-Z0-9_]/;

function hP(e) {
  if (!e) return [
    []
  ];
  if (e === "/") return [
    [_P]
  ];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);

  function t(p) {
    throw new Error(`ERR (${n})/"${l}": ${p}`)
  }
  let n = Dt.Static,
    r = n;
  const s = [];
  let o;

  function i() {
    o && s.push(o), o = []
  }
  let a = 0,
    c, l = "",
    u = "";

  function d() {
    l && (n === Dt.Static ? o.push({
      type: ms.Static,
      value: l
    }) : n === Dt.Param || n === Dt.ParamRegExp || n === Dt.ParamRegExpEnd ? (o.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`), o.push({
      type: ms.Param,
      value: l,
      regexp: u,
      repeatable: c === "*" || c === "+",
      optional: c === "*" || c === "?"
    })) : t("Invalid state to consume buffer"), l = "")
  }

  function g() {
    l += c
  }
  for (; a < e.length;) {
    if (c = e[a++], c === "\\" && n !== Dt.ParamRegExp) {
      r = n, n = Dt.EscapeNext;
      continue
    }
    switch (n) {
      case Dt.Static:
        c === "/" ? (l && d(), i()) : c === ":" ? (d(), n = Dt.Param) : g();
        break;
      case Dt.EscapeNext:
        g(), n = r;
        break;
      case Dt.Param:
        c === "(" ? n = Dt.ParamRegExp : mP.test(c) ? g() : (d(), n = Dt.Static, c !== "*" && c !== "?" && c !== "+" && a--);
        break;
      case Dt.ParamRegExp:
        c === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + c : n = Dt.ParamRegExpEnd : u += c;
        break;
      case Dt.ParamRegExpEnd:
        d(), n = Dt.Static, c !== "*" && c !== "?" && c !== "+" && a--, u = "";
        break;
      default:
        t("Unknown state");
        break
    }
  }
  return n === Dt.ParamRegExp && t(`Unfinished custom RegExp for param "${l}"`), d(), i(), s
}
const Zp = "[^/]+?",
  gP = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
  };
var nn = (function(e) {
  return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = .7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = .25] = "BonusCaseSensitive", e
})(nn || {});
const vP = /[.+*?^${}()[\]/\\]/g;

function EP(e, t) {
  const n = rt({}, gP, t),
    r = [];
  let s = n.start ? "^" : "";
  const o = [];
  for (const l of e) {
    const u = l.length ? [] : [nn.Root];
    n.strict && !l.length && (s += "/");
    for (let d = 0; d < l.length; d++) {
      const g = l[d];
      let p = nn.Segment + (n.sensitive ? nn.BonusCaseSensitive : 0);
      if (g.type === ms.Static) d || (s += "/"), s += g.value.replace(vP, "\\$&"), p += nn.Static;
      else if (g.type === ms.Param) {
        const {
          value: m,
          repeatable: E,
          optional: b,
          regexp: v
        } = g;
        o.push({
          name: m,
          repeatable: E,
          optional: b
        });
        const A = v || Zp;
        if (A !== Zp) {
          p += nn.BonusCustomRegExp;
          try {
            `${A}`
          } catch (O) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${A}): ` + O.message)
          }
        }
        let R = E ? `((?:${A})(?:/(?:${A}))*)` : `(${A})`;
        d || (R = b && l.length < 2 ? `(?:/${R})` : "/" + R), b && (R += "?"), s += R, p += nn.Dynamic, b && (p += nn.BonusOptional), E && (p += nn.BonusRepeatable), A === ".*" && (p += nn.BonusWildcard)
      }
      u.push(p)
    }
    r.push(u)
  }
  if (n.strict && n.end) {
    const l = r.length - 1;
    r[l][r[l].length - 1] += nn.BonusStrict
  }
  n.strict || (s += "/?"), n.end ? s += "$" : n.strict && !s.endsWith("/") && (s += "(?:/|$)");
  const i = new RegExp(s, n.sensitive ? "" : "i");

  function a(l) {
    const u = l.match(i),
      d = {};
    if (!u) return null;
    for (let g = 1; g < u.length; g++) {
      const p = u[g] || "",
        m = o[g - 1];
      d[m.name] = p && m.repeatable ? p.split("/") : p
    }
    return d
  }

  function c(l) {
    let u = "",
      d = !1;
    for (const g of e) {
      (!d || !u.endsWith("/")) && (u += "/"), d = !1;
      for (const p of g)
        if (p.type === ms.Static) u += p.value;
        else if (p.type === ms.Param) {
        const {
          value: m,
          repeatable: E,
          optional: b
        } = p, v = m in l ? l[m] : "";
        if (Kn(v) && !E) throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
        const A = Kn(v) ? v.join("/") : v;
        if (!A)
          if (b) g.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : d = !0);
          else throw new Error(`Missing required param "${m}"`);
        u += A
      }
    }
    return u || "/"
  }
  return {
    re: i,
    score: r,
    keys: o,
    parse: a,
    stringify: c
  }
}

function yP(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length;) {
    const r = t[n] - e[n];
    if (r) return r;
    n++
  }
  return e.length < t.length ? e.length === 1 && e[0] === nn.Static + nn.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === nn.Static + nn.Segment ? 1 : -1 : 0
}

function tv(e, t) {
  let n = 0;
  const r = e.score,
    s = t.score;
  for (; n < r.length && n < s.length;) {
    const o = yP(r[n], s[n]);
    if (o) return o;
    n++
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (e_(r)) return 1;
    if (e_(s)) return -1
  }
  return s.length - r.length
}

function e_(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0
}
const bP = {
  strict: !1,
  end: !0,
  sensitive: !1
};

function AP(e, t, n) {
  const r = EP(hP(e.path), n),
    s = rt(r, {
      record: e,
      parent: t,
      children: [],
      alias: []
    });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s
}

function TP(e, t) {
  const n = [],
    r = new Map;
  t = Gp(bP, t);

  function s(d) {
    return r.get(d)
  }

  function o(d, g, p) {
    const m = !p,
      E = n_(d);
    E.aliasOf = p && p.record;
    const b = Gp(t, d),
      v = [E];
    if ("alias" in d) {
      const O = typeof d.alias == "string" ? [d.alias] : d.alias;
      for (const L of O) v.push(n_(rt({}, E, {
        components: p ? p.record.components : E.components,
        path: L,
        aliasOf: p ? p.record : E
      })))
    }
    let A, R;
    for (const O of v) {
      const {
        path: L
      } = O;
      if (g && L[0] !== "/") {
        const P = g.record.path,
          D = P[P.length - 1] === "/" ? "" : "/";
        O.path = g.record.path + (L && D + L)
      }
      if (A = AP(O, g, b), p ? p.alias.push(A) : (R = R || A, R !== A && R.alias.push(A), m && d.name && !r_(A) && i(d.name)), nv(A) && c(A), E.children) {
        const P = E.children;
        for (let D = 0; D < P.length; D++) o(P[D], A, p && p.children[D])
      }
      p = p || A
    }
    return R ? () => {
      i(R)
    } : Ho
  }

  function i(d) {
    if (Qg(d)) {
      const g = r.get(d);
      g && (r.delete(d), n.splice(n.indexOf(g), 1), g.children.forEach(i), g.alias.forEach(i))
    } else {
      const g = n.indexOf(d);
      g > -1 && (n.splice(g, 1), d.record.name && r.delete(d.record.name), d.children.forEach(i), d.alias.forEach(i))
    }
  }

  function a() {
    return n
  }

  function c(d) {
    const g = SP(d, n);
    n.splice(g, 0, d), d.record.name && !r_(d) && r.set(d.record.name, d)
  }

  function l(d, g) {
    let p, m = {},
      E, b;
    if ("name" in d && d.name) {
      if (p = r.get(d.name), !p) throw ro(At.MATCHER_NOT_FOUND, {
        location: d
      });
      b = p.record.name, m = rt(t_(g.params, p.keys.filter(R => !R.optional)
        .concat(p.parent ? p.parent.keys.filter(R => R.optional) : [])
        .map(R => R.name)), d.params && t_(d.params, p.keys.map(R => R.name))), E = p.stringify(m)
    } else if (d.path != null) E = d.path, p = n.find(R => R.re.test(E)), p && (m = p.parse(E), b = p.record.name);
    else {
      if (p = g.name ? r.get(g.name) : n.find(R => R.re.test(g.path)), !p) throw ro(At.MATCHER_NOT_FOUND, {
        location: d,
        currentLocation: g
      });
      b = p.record.name, m = rt({}, g.params, d.params), E = p.stringify(m)
    }
    const v = [];
    let A = p;
    for (; A;) v.unshift(A.record), A = A.parent;
    return {
      name: b,
      path: E,
      params: m,
      matched: v,
      meta: IP(v)
    }
  }
  e.forEach(d => o(d));

  function u() {
    n.length = 0, r.clear()
  }
  return {
    addRoute: o,
    resolve: l,
    removeRoute: i,
    clearRoutes: u,
    getRoutes: a,
    getRecordMatcher: s
  }
}

function t_(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n
}

function n_(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: OP(e),
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

function OP(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else
    for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
  return t
}

function r_(e) {
  for (; e;) {
    if (e.record.aliasOf) return !0;
    e = e.parent
  }
  return !1
}

function IP(e) {
  return e.reduce((t, n) => rt(t, n.meta), {})
}

function SP(e, t) {
  let n = 0,
    r = t.length;
  for (; n !== r;) {
    const o = n + r >> 1;
    tv(e, t[o]) < 0 ? r = o : n = o + 1
  }
  const s = RP(e);
  return s && (r = t.lastIndexOf(s, r - 1)), r
}

function RP(e) {
  let t = e;
  for (; t = t.parent;)
    if (nv(t) && tv(e, t) === 0) return t
}

function nv({
  record: e
}) {
  return !!(e.name || e.components && Object.keys(e.components)
    .length || e.redirect)
}

function s_(e) {
  const t = Ot(ac),
    n = Ot(cd),
    r = q(() => {
      const c = F(e.to);
      return t.resolve(c)
    }),
    s = q(() => {
      const {
        matched: c
      } = r.value, {
        length: l
      } = c, u = c[l - 1], d = n.matched;
      if (!u || !d.length) return -1;
      const g = d.findIndex(no.bind(null, u));
      if (g > -1) return g;
      const p = o_(c[l - 2]);
      return l > 1 && o_(u) === p && d[d.length - 1].path !== p ? d.findIndex(no.bind(null, c[l - 2])) : g
    }),
    o = q(() => s.value > -1 && DP(n.params, r.value.params)),
    i = q(() => s.value > -1 && s.value === n.matched.length - 1 && Jg(n.params, r.value.params));

  function a(c = {}) {
    if (LP(c)) {
      const l = t[F(e.replace) ? "replace" : "push"](F(e.to))
        .catch(Ho);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => l), l
    }
    return Promise.resolve()
  }
  return {
    route: r,
    href: q(() => r.value.href),
    isActive: o,
    isExactActive: i,
    navigate: a
  }
}

function wP(e) {
  return e.length === 1 ? e[0] : e
}
const PP = Ie({
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
    useLink: s_,
    setup(e, {
      slots: t
    }) {
      const n = dr(s_(e)),
        {
          options: r
        } = Ot(ac),
        s = q(() => ({
          [i_(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
          [i_(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
      return () => {
        const o = t.default && wP(t.default(n));
        return e.custom ? o : bi("a", {
          "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
          href: n.href,
          onClick: n.navigate,
          class: s.value
        }, o)
      }
    }
  }),
  CP = PP;

function LP(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}

function DP(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n];
    if (typeof r == "string") {
      if (r !== s) return !1
    } else if (!Kn(s) || s.length !== r.length || r.some((o, i) => o.valueOf() !== s[i].valueOf())) return !1
  }
  return !0
}

function o_(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const i_ = (e, t, n) => e ?? t ?? n,
  kP = Ie({
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
      const r = Ot(ru),
        s = q(() => e.route || r.value),
        o = Ot(Jp, 0),
        i = q(() => {
          let l = F(o);
          const {
            matched: u
          } = s.value;
          let d;
          for (;
            (d = u[l]) && !d.components;) l++;
          return l
        }),
        a = q(() => s.value.matched[i.value]);
      Gs(Jp, q(() => i.value + 1)), Gs(cP, a), Gs(ru, s);
      const c = ce();
      return We(() => [c.value, a.value, e.name], ([l, u, d], [g, p, m]) => {
        u && (u.instances[d] = l, p && p !== u && l && l === g && (u.leaveGuards.size || (u.leaveGuards = p.leaveGuards), u.updateGuards.size || (u.updateGuards = p.updateGuards))), l && u && (!p || !no(u, p) || !g) && (u.enterCallbacks[d] || [])
          .forEach(E => E(l))
      }, {
        flush: "post"
      }), () => {
        const l = s.value,
          u = e.name,
          d = a.value,
          g = d && d.components[u];
        if (!g) return a_(n.default, {
          Component: g,
          route: l
        });
        const p = d.props[u],
          m = p ? p === !0 ? l.params : typeof p == "function" ? p(l) : p : null,
          b = bi(g, rt({}, m, t, {
            onVnodeUnmounted: v => {
              v.component.isUnmounted && (d.instances[u] = null)
            },
            ref: c
          }));
        return a_(n.default, {
          Component: b,
          route: l
        }) || b
      }
    }
  });

function a_(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n
}
const rv = kP;

function xP(e) {
  const t = TP(e.routes, e),
    n = e.parseQuery || iP,
    r = e.stringifyQuery || Xp,
    s = e.history,
    o = So(),
    i = So(),
    a = So(),
    c = mn(Fr);
  let l = Fr;
  js && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u = rl.bind(null, W => "" + W),
    d = rl.bind(null, Hw),
    g = rl.bind(null, di);

  function p(W, he) {
    let pe, ye;
    return Qg(W) ? (pe = t.getRecordMatcher(W), ye = he) : ye = W, t.addRoute(ye, pe)
  }

  function m(W) {
    const he = t.getRecordMatcher(W);
    he && t.removeRoute(he)
  }

  function E() {
    return t.getRoutes()
      .map(W => W.record)
  }

  function b(W) {
    return !!t.getRecordMatcher(W)
  }

  function v(W, he) {
    if (he = rt({}, he || c.value), typeof W == "string") {
      const U = sl(n, W, he.path),
        te = t.resolve({
          path: U.path
        }, he),
        ie = s.createHref(U.fullPath);
      return rt(U, te, {
        params: g(te.params),
        hash: di(U.hash),
        redirectedFrom: void 0,
        href: ie
      })
    }
    let pe;
    if (W.path != null) pe = rt({}, W, {
      path: sl(n, W.path, he.path)
        .path
    });
    else {
      const U = rt({}, W.params);
      for (const te in U) U[te] == null && delete U[te];
      pe = rt({}, W, {
        params: d(U)
      }), he.params = d(he.params)
    }
    const ye = t.resolve(pe, he),
      Re = W.hash || "";
    ye.params = u(g(ye.params));
    const w = Gw(r, rt({}, W, {
        hash: Bw(Re),
        path: ye.path
      })),
      C = s.createHref(w);
    return rt({
      fullPath: w,
      hash: Re,
      query: r === Xp ? aP(W.query) : W.query || {}
    }, ye, {
      redirectedFrom: void 0,
      href: C
    })
  }

  function A(W) {
    return typeof W == "string" ? sl(n, W, c.value.path) : rt({}, W)
  }

  function R(W, he) {
    if (l !== W) return ro(At.NAVIGATION_CANCELLED, {
      from: he,
      to: W
    })
  }

  function O(W) {
    return D(W)
  }

  function L(W) {
    return O(rt(A(W), {
      replace: !0
    }))
  }

  function P(W, he) {
    const pe = W.matched[W.matched.length - 1];
    if (pe && pe.redirect) {
      const {
        redirect: ye
      } = pe;
      let Re = typeof ye == "function" ? ye(W, he) : ye;
      return typeof Re == "string" && (Re = Re.includes("?") || Re.includes("#") ? Re = A(Re) : {
        path: Re
      }, Re.params = {}), rt({
        query: W.query,
        hash: W.hash,
        params: Re.path != null ? {} : W.params
      }, Re)
    }
  }

  function D(W, he) {
    const pe = l = v(W),
      ye = c.value,
      Re = W.state,
      w = W.force,
      C = W.replace === !0,
      U = P(pe, ye);
    if (U) return D(rt(A(U), {
      state: typeof U == "object" ? rt({}, Re, U.state) : Re,
      force: w,
      replace: C
    }), he || pe);
    const te = pe;
    te.redirectedFrom = he;
    let ie;
    return !w && Kw(r, ye, pe) && (ie = ro(At.NAVIGATION_DUPLICATED, {
        to: te,
        from: ye
      }), V(ye, ye, !0, !1)), (ie ? Promise.resolve(ie) : Y(te, ye))
      .catch(se => vr(se) ? vr(se, At.NAVIGATION_GUARD_REDIRECT) ? se : Q(se) : ee(se, te, ye))
      .then(se => {
        if (se) {
          if (vr(se, At.NAVIGATION_GUARD_REDIRECT)) return D(rt({
            replace: C
          }, A(se.to), {
            state: typeof se.to == "object" ? rt({}, Re, se.to.state) : Re,
            force: w
          }), he || te)
        } else se = G(te, ye, !0, C, Re);
        return H(te, ye, se), se
      })
  }

  function J(W, he) {
    const pe = R(W, he);
    return pe ? Promise.reject(pe) : Promise.resolve()
  }

  function k(W) {
    const he = Ne.values()
      .next()
      .value;
    return he && typeof he.runWithContext == "function" ? he.runWithContext(W) : W()
  }

  function Y(W, he) {
    let pe;
    const [ye, Re, w] = lP(W, he);
    pe = il(ye.reverse(), "beforeRouteLeave", W, he);
    for (const U of ye) U.leaveGuards.forEach(te => {
      pe.push(Gr(te, W, he))
    });
    const C = J.bind(null, W, he);
    return pe.push(C), He(pe)
      .then(() => {
        pe = [];
        for (const U of o.list()) pe.push(Gr(U, W, he));
        return pe.push(C), He(pe)
      })
      .then(() => {
        pe = il(Re, "beforeRouteUpdate", W, he);
        for (const U of Re) U.updateGuards.forEach(te => {
          pe.push(Gr(te, W, he))
        });
        return pe.push(C), He(pe)
      })
      .then(() => {
        pe = [];
        for (const U of w)
          if (U.beforeEnter)
            if (Kn(U.beforeEnter))
              for (const te of U.beforeEnter) pe.push(Gr(te, W, he));
            else pe.push(Gr(U.beforeEnter, W, he));
        return pe.push(C), He(pe)
      })
      .then(() => (W.matched.forEach(U => U.enterCallbacks = {}), pe = il(w, "beforeRouteEnter", W, he, k), pe.push(C), He(pe)))
      .then(() => {
        pe = [];
        for (const U of i.list()) pe.push(Gr(U, W, he));
        return pe.push(C), He(pe)
      })
      .catch(U => vr(U, At.NAVIGATION_CANCELLED) ? U : Promise.reject(U))
  }

  function H(W, he, pe) {
    a.list()
      .forEach(ye => k(() => ye(W, he, pe)))
  }

  function G(W, he, pe, ye, Re) {
    const w = R(W, he);
    if (w) return w;
    const C = he === Fr,
      U = js ? history.state : {};
    pe && (ye || C ? s.replace(W.fullPath, rt({
      scroll: C && U && U.scroll
    }, Re)) : s.push(W.fullPath, Re)), c.value = W, V(W, he, pe, C), Q()
  }
  let me;

  function de() {
    me || (me = s.listen((W, he, pe) => {
      if (!Le.listening) return;
      const ye = v(W),
        Re = P(ye, Le.currentRoute.value);
      if (Re) {
        D(rt(Re, {
            replace: !0,
            force: !0
          }), ye)
          .catch(Ho);
        return
      }
      l = ye;
      const w = c.value;
      js && tP(zp(w.fullPath, pe.delta), ic()), Y(ye, w)
        .catch(C => vr(C, At.NAVIGATION_ABORTED | At.NAVIGATION_CANCELLED) ? C : vr(C, At.NAVIGATION_GUARD_REDIRECT) ? (D(rt(A(C.to), {
            force: !0
          }), ye)
          .then(U => {
            vr(U, At.NAVIGATION_ABORTED | At.NAVIGATION_DUPLICATED) && !pe.delta && pe.type === tu.pop && s.go(-1, !1)
          })
          .catch(Ho), Promise.reject()) : (pe.delta && s.go(-pe.delta, !1), ee(C, ye, w)))
        .then(C => {
          C = C || G(ye, w, !1), C && (pe.delta && !vr(C, At.NAVIGATION_CANCELLED) ? s.go(-pe.delta, !1) : pe.type === tu.pop && vr(C, At.NAVIGATION_ABORTED | At.NAVIGATION_DUPLICATED) && s.go(-1, !1)), H(ye, w, C)
        })
        .catch(Ho)
    }))
  }
  let X = So(),
    N = So(),
    K;

  function ee(W, he, pe) {
    Q(W);
    const ye = N.list();
    return ye.length ? ye.forEach(Re => Re(W, he, pe)) : console.error(W), Promise.reject(W)
  }

  function _e() {
    return K && c.value !== Fr ? Promise.resolve() : new Promise((W, he) => {
      X.add([W, he])
    })
  }

  function Q(W) {
    return K || (K = !W, de(), X.list()
      .forEach(([he, pe]) => W ? pe(W) : he()), X.reset()), W
  }

  function V(W, he, pe, ye) {
    const {
      scrollBehavior: Re
    } = e;
    if (!js || !Re) return Promise.resolve();
    const w = !pe && nP(zp(W.fullPath, 0)) || (ye || !pe) && history.state && history.state.scroll || null;
    return In()
      .then(() => Re(W, he, w))
      .then(C => C && eP(C))
      .catch(C => ee(C, W, he))
  }
  const oe = W => s.go(W);
  let Ae;
  const Ne = new Set,
    Le = {
      currentRoute: c,
      listening: !0,
      addRoute: p,
      removeRoute: m,
      clearRoutes: t.clearRoutes,
      hasRoute: b,
      getRoutes: E,
      resolve: v,
      options: e,
      push: O,
      replace: L,
      go: oe,
      back: () => oe(-1),
      forward: () => oe(1),
      beforeEach: o.add,
      beforeResolve: i.add,
      afterEach: a.add,
      onError: N.add,
      isReady: _e,
      install(W) {
        W.component("RouterLink", CP), W.component("RouterView", rv), W.config.globalProperties.$router = Le, Object.defineProperty(W.config.globalProperties, "$route", {
          enumerable: !0,
          get: () => F(c)
        }), js && !Ae && c.value === Fr && (Ae = !0, O(s.location)
          .catch(ye => {}));
        const he = {};
        for (const ye in Fr) Object.defineProperty(he, ye, {
          get: () => c.value[ye],
          enumerable: !0
        });
        W.provide(ac, Le), W.provide(cd, $m(he)), W.provide(ru, c);
        const pe = W.unmount;
        Ne.add(W), W.unmount = function() {
          Ne.delete(W), Ne.size < 1 && (l = Fr, me && me(), me = null, c.value = Fr, Ae = !1, K = !1), pe()
        }
      }
    };

  function He(W) {
    return W.reduce((he, pe) => he.then(() => k(pe)), Promise.resolve())
  }
  return Le
}

function ld() {
  return Ot(ac)
}

function sv(e) {
  return Ot(cd)
}
const NP = Ie({
  __name: "App",
  setup(e) {
    return (t, n) => (B(), be(F(rv)))
  }
});
var Lo = (e => (e.PAGE_LOAD = "page", e.BUTTON_CLICK = "button", e.LINK = "link", e))(Lo || {}),
  Ze = (e => (e[e.CART = 0] = "CART", e[e.LOGIN = 1] = "LOGIN", e[e.ADDRESS = 2] = "ADDRESS", e[e.PAYMENT = 3] = "PAYMENT", e[e.SUMMARY = 4] = "SUMMARY", e[e.SUCCESS = 5] = "SUCCESS", e[e.UNKNOWN = 6] = "UNKNOWN", e[e.WISHLIST = 7] = "WISHLIST", e[e.DELIVERY_OPTIONS = 8] = "DELIVERY_OPTIONS", e))(Ze || {});
const $P = "tracking-info",
  ov = e => {
    try {
      const t = Ut($P);
      if (t) {
        const n = Ml.Buffer.from(t, "base64")
          .toString("utf-8");
        return JSON.parse(n)
      }
    } catch (t) {
      e?.error(t)
    }
    return {
      customerStatus: "",
      accountId: "",
      customerType: ""
    }
  },
  VP = e => {
    switch (e) {
      case Ze.CART:
        return 0;
      case Ze.LOGIN:
        return 1;
      case Ze.ADDRESS:
        return 2;
      case Ze.PAYMENT:
        return 3;
      case Ze.SUMMARY:
        return 4;
      case Ze.SUCCESS:
        return 5;
      case Ze.WISHLIST:
        return 7;
      case Ze.DELIVERY_OPTIONS:
        return 8;
      default:
        return -1
    }
  },
  ud = e => {
    switch (e) {
      case Ze.CART:
        return "cart";
      case Ze.LOGIN:
        return "login";
      case Ze.ADDRESS:
        return "address";
      case Ze.PAYMENT:
        return "payment";
      case Ze.SUMMARY:
        return "summary";
      case Ze.SUCCESS:
        return "success";
      case Ze.WISHLIST:
        return "wishlist";
      case Ze.DELIVERY_OPTIONS:
        return "delivery_options";
      default:
        return ""
    }
  };
var aa = (e => (e.REGISTER = "Register", e.LOGIN = "Login", e.GUEST_ORDER = "Guest Order", e))(aa || {});
class iv {
  constructor(t, n) {
    this.trackingService = t, this.dataLayer = n
  }
  push(t) {
    try {
      this.dataLayer.push(t)
    } catch (n) {
      this.trackingService.options?.logger?.error(n)
    }
  }
}
class MP extends iv {
  calcShippingCost(...t) {
    let n = 0;
    return t.forEach(r => {
      n += r
    }), n || 0
  }
  resolveCartItem(t) {
    return {
      id: t?.erpNumber,
      category: t?.category,
      price: t?.unitPrice,
      name: t?.name,
      brand: t?.brand,
      quantity: t?.quantity,
      variant: t?.productVariantId || void 0
    }
  }
  resolveCart(t) {
    return !t || !t.cartItems || t.cartItems.length === 0 ? [] : t?.cartItems?.map(n => this.resolveCartItem({
      ...n,
      oldDeviceTakebackChecked: !1
    }))
  }
  constructor(t) {
    window.dataLayer = window.dataLayer || [];
    const n = window.dataLayer;
    n.push({
      event: "gtm.js",
      "gtm.start": new Date()
        .getTime()
    }), super(t, n)
  }
  customDimensionUserType() {
    const t = ov(this.trackingService?.options?.logger);
    if (t.customerStatus === "NEW_CUSTOMER") {
      this.push({
        userType: "Register new"
      });
      return
    }
    if (t.customerStatus === "REGISTERED_CUSTOMER") {
      this.push({
        userType: "Existing Customer"
      });
      return
    }
    this.push({
      userType: "Guest Order"
    })
  }
  pageView(t) {
    this.push({
      event: "nuxtRoute",
      pageType: "PageView",
      pageUrl: t?.path || location?.pathname,
      routeName: t?.name || document?.title
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
  checkoutLogin(t) {
    this.push({
      event: "EECcheckoutOption",
      ecommerce: {
        checkout_option: {
          actionField: {
            step: Ze.LOGIN,
            option: t
          }
        }
      }
    })
  }
  startCheckout(t) {
    this.push({
      event: "gaEvent",
      eventCategory: "checkout start",
      eventAction: t
    })
  }
  legalTextClick(t) {
    return {
      event: "gaEvent",
      eventCategory: "Checkout",
      eventAction: "Click legal text link",
      eventLabel: t
    }
  }
  basketRemoveItem(t) {
    this.push({
      event: "EECremoveFromCart",
      ecommerce: {
        currencyCode: t?.currency || "",
        remove: {
          products: t ? [this.resolveCartItem(t)] : []
        }
      }
    })
  }
  basketAddItem(t) {
    this.push({
      event: "EECaddToCart",
      ecommerce: {
        currencyCode: t?.currency || "",
        add: {
          products: t ? [this.resolveCartItem(t)] : []
        }
      }
    })
  }
  basketPageView(t) {
    this.push({
      event: "EECbasketProducts",
      ecommerce: {
        basket: {
          actionField: {
            list: ""
          },
          products: this.resolveCart(t)
        }
      }
    })
  }
  ratingsOptIn(t, n) {
    this.push({
      eventName: t,
      eventValue: n
    })
  }
  purchase(t, n) {
    const r = n?.discountItems?.find(s => s.discountType === "COUPON");
    this.push({
      event: "EECPurchase",
      ecommerce: {
        purchase: {
          actionField: {
            id: t,
            shipping: this.calcShippingCost(n?.shippingCostStandardAfterCoupon, n?.shippingCostAdditional),
            tax: n?.tax || void 0,
            revenue: n?.cartAmountAfterCoupon,
            coupon: r && r.code || void 0,
            couponvalue: r && r.discount || void 0,
            action: "purchase"
          },
          products: this.resolveCart(n)
        }
      }
    })
  }
  checkoutOption(t, n) {
    const r = {
      step: t,
      action: "checkout_option"
    };
    $I(n) || Object.assign(r, {
      option: n
    }), this.push({
      event: "EECcheckoutOption",
      ecommerce: {
        checkout_option: {
          actionField: r
        }
      }
    })
  }
  pageVisit(t, n) {
    this.push({
      event: "EECcheckout",
      ecommerce: {
        checkout: {
          actionField: {
            step: t,
            action: "checkout"
          },
          products: this.resolveCart(n)
        }
      }
    })
  }
}
class FP extends iv {
  constructor(t) {
    window.dataLayerService = window.dataLayerService || [], super(t, window.dataLayerService)
  }
  get UserType() {
    const t = ov(this.trackingService?.options?.logger);
    switch (t.customerType) {
      case "REGISTERED":
        return t.customerStatus === "NEW_CUSTOMER" ? "new customer" : "customer";
      case "GUEST":
        return "guest";
      default:
        return "unregistered"
    }
  }
  resolveEvent(t) {
    const n = {
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
      r = t.eventInfo,
      s = t?.content ? {
        contentID: t.content.contentID,
        contentType: t.content.contentType ?? t.eventType.toString(),
        contentLabel: t.content.contentLabel
      } : void 0,
      o = t?.process ? {
        stepName: t?.process?.stepName ?? ud(t.process.page),
        stepNumber: VP(t.process.page)
      } : void 0,
      i = {
        userType: this.UserType,
        salesChannel: {
          [yt.WEB]: "01",
          [yt.MOBILE_APP]: FI(),
          [yt.LIDL_PLUS]: void 0
        } [this.trackingService.options.meta.appContext] ?? ""
      },
      a = t?.ecommerce,
      c = t?.products,
      l = t?.click,
      u = {
        pageURL: `${window.location.origin}${window.location.pathname}`,
        pageParameter: window.location.search,
        pageTitle: window.location.pathname.split("/")
          .pop(),
        pageCategory: this.trackingService.options.meta.pageCategory
      },
      d = {
        scenarioName: t.scenarioName,
        collections: {
          application: n,
          content: s
        }
      };
    return r && (d.collections.eventInfo = r), o && (d.collections.process = o), i && (d.collections.user = i), a && (d.collections.ecommerce = a), c && (d.collections.products = c), l && (d.collections.click = l), u && (d.collections.page = u), d
  }
  PageLoadTemplate(t, n) {
    return {
      scenarioName: t,
      eventType: Lo.PAGE_LOAD,
      process: {
        page: n
      },
      eventInfo: {
        eventAction: t,
        eventCategory: "pageload",
        eventInteractionType: "load"
      }
    }
  }
  ErrorMessageTemplate({
    adressType: t,
    paymentMethod: n,
    paymentMethodsAvailable: r,
    cartId: s,
    translationKey: o,
    errorMessage: i,
    errorHeader: a
  }) {
    const c = "Error_Message";
    return {
      scenarioName: c,
      eventInfo: {
        eventAction: c,
        eventCategory: "Load",
        eventInteractionType: "Form_Error",
        errorMessage: i
      },
      content: {
        contentID: o,
        contentType: "ErrorMessage",
        contentLabel: a
      },
      ecommerce: {
        cartId: s,
        adressType: t,
        paymentMethod: n,
        paymentMethodsAvailable: r
      }
    }
  }
  SuccessPageLoadTemplate(t, n, r) {
    return {
      scenarioName: t,
      eventType: Lo.PAGE_LOAD,
      eventInfo: {
        eventAction: t,
        eventCategory: "pageload",
        eventInteractionType: "load"
      },
      process: {
        page: n
      },
      ecommerce: {
        transactionID: r
      }
    }
  }
  ButtonClickTemplate(t, n) {
    return {
      scenarioName: t,
      eventType: Lo.BUTTON_CLICK,
      eventInfo: {
        eventCategory: "click"
      },
      process: {
        page: n
      }
    }
  }
  LinkClickTemplate(t, n) {
    return {
      scenarioName: t,
      eventType: Lo.LINK,
      eventInfo: {
        eventCategory: "click"
      },
      process: {
        page: n
      }
    }
  }
  emit(t, ...n) {
    let r = {};
    for (const o of n) r = ys(r, o);
    const s = this.resolveEvent(ys(r, t));
    this.push(s), this.trackingService.options?.logger?.info("Tracking.service: pushing event", s.scenarioName, s)
  }
}
class BP {
  constructor(t) {
    this.options = t, this.trackingProviderGoogleAnalytics = new MP(this), this.trackingProviderUnifiedTracking = new FP(this), this.runCookiebotScripts()
  }
  runCookiebotScripts() {
    window.Cookiebot && window.Cookiebot.consent && window.Cookiebot.runScripts && window.Cookiebot.runScripts()
  }
}

function UP(e) {
  return hi() ? (Tu(e), !0) : !1
}
const jP = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const HP = Object.prototype.toString,
  qP = e => HP.call(e) === "[object Object]",
  WP = () => {};

function GP(e, t) {
  function n(...r) {
    return new Promise((s, o) => {
      Promise.resolve(e(() => t.apply(this, r), {
          fn: t,
          thisArg: this,
          args: r
        }))
        .then(s)
        .catch(o)
    })
  }
  return n
}
const av = e => e();

function KP(e = av, t = {}) {
  const {
    initialState: n = "active"
  } = t, r = zP(n === "active");

  function s() {
    r.value = !1
  }

  function o() {
    r.value = !0
  }
  return {
    isActive: Ko(r),
    pause: s,
    resume: o,
    eventFilter: (...a) => {
      r.value && e(...a)
    }
  }
}

function YP(e) {
  return un()
}

function al(e) {
  return Array.isArray(e) ? e : [e]
}

function zP(...e) {
  if (e.length !== 1) return Sy(...e);
  const t = e[0];
  return typeof t == "function" ? Ko(Fm(() => ({
    get: t,
    set: WP
  }))) : ce(t)
}

function XP(e, t, n = {}) {
  const {
    eventFilter: r = av,
    ...s
  } = n;
  return We(e, GP(r, t), s)
}

function JP(e, t, n = {}) {
  const {
    eventFilter: r,
    initialState: s = "active",
    ...o
  } = n, {
    eventFilter: i,
    pause: a,
    resume: c,
    isActive: l
  } = KP(r, {
    initialState: s
  });
  return {
    stop: XP(e, t, {
      ...o,
      eventFilter: i
    }),
    pause: a,
    resume: c,
    isActive: l
  }
}

function QP(e, t = !0, n) {
  YP() ? Rt(e, n) : t ? e() : In(e)
}

function ZP(e, t, n) {
  return We(e, t, {
    ...n,
    immediate: !0
  })
}
const su = jP ? window : void 0;

function eC(e) {
  var t;
  const n = Tn(e);
  return (t = n?.$el) != null ? t : n
}

function c_(...e) {
  const t = [],
    n = () => {
      t.forEach(a => a()), t.length = 0
    },
    r = (a, c, l, u) => (a.addEventListener(c, l, u), () => a.removeEventListener(c, l, u)),
    s = q(() => {
      const a = al(Tn(e[0]))
        .filter(c => c != null);
      return a.every(c => typeof c != "string") ? a : void 0
    }),
    o = ZP(() => {
      var a, c;
      return [(c = (a = s.value) == null ? void 0 : a.map(l => eC(l))) != null ? c : [su].filter(l => l != null), al(Tn(s.value ? e[1] : e[0])), al(F(s.value ? e[2] : e[1])), Tn(s.value ? e[3] : e[2])]
    }, ([a, c, l, u]) => {
      if (n(), !a?.length || !c?.length || !l?.length) return;
      const d = qP(u) ? {
        ...u
      } : u;
      t.push(...a.flatMap(g => c.flatMap(p => l.map(m => r(g, p, m, d)))))
    }, {
      flush: "post"
    }),
    i = () => {
      o(), n()
    };
  return UP(n), i
}
const Wi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
  Gi = "__vueuse_ssr_handlers__",
  tC = nC();

function nC() {
  return Gi in Wi || (Wi[Gi] = Wi[Gi] || {}), Wi[Gi]
}

function rC(e, t) {
  return tC[e] || t
}

function sC(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number"
}
const oC = {
    boolean: {
      read: e => e === "true",
      write: e => String(e)
    },
    object: {
      read: e => JSON.parse(e),
      write: e => JSON.stringify(e)
    },
    number: {
      read: e => Number.parseFloat(e),
      write: e => String(e)
    },
    any: {
      read: e => e,
      write: e => String(e)
    },
    string: {
      read: e => e,
      write: e => String(e)
    },
    map: {
      read: e => new Map(JSON.parse(e)),
      write: e => JSON.stringify(Array.from(e.entries()))
    },
    set: {
      read: e => new Set(JSON.parse(e)),
      write: e => JSON.stringify(Array.from(e))
    },
    date: {
      read: e => new Date(e),
      write: e => e.toISOString()
    }
  },
  l_ = "vueuse-storage";

function iC(e, t, n, r = {}) {
  var s;
  const {
    flush: o = "pre",
    deep: i = !0,
    listenToStorageChanges: a = !0,
    writeDefaults: c = !0,
    mergeDefaults: l = !1,
    shallow: u,
    window: d = su,
    eventFilter: g,
    onError: p = H => {
      console.error(H)
    },
    initOnMounted: m
  } = r, E = (u ? mn : ce)(typeof t == "function" ? t() : t), b = q(() => Tn(e));
  if (!n) try {
    n = rC("getDefaultStorage", () => {
      var H;
      return (H = su) == null ? void 0 : H.localStorage
    })()
  } catch (H) {
    p(H)
  }
  if (!n) return E;
  const v = Tn(t),
    A = sC(v),
    R = (s = r.serializer) != null ? s : oC[A],
    {
      pause: O,
      resume: L
    } = JP(E, () => D(E.value), {
      flush: o,
      deep: i,
      eventFilter: g
    });
  We(b, () => k(), {
    flush: o
  }), d && a && QP(() => {
    n instanceof Storage ? c_(d, "storage", k, {
      passive: !0
    }) : c_(d, l_, Y), m && k()
  }), m || k();

  function P(H, G) {
    if (d) {
      const me = {
        key: b.value,
        oldValue: H,
        newValue: G,
        storageArea: n
      };
      d.dispatchEvent(n instanceof Storage ? new StorageEvent("storage", me) : new CustomEvent(l_, {
        detail: me
      }))
    }
  }

  function D(H) {
    try {
      const G = n.getItem(b.value);
      if (H == null) P(G, null), n.removeItem(b.value);
      else {
        const me = R.write(H);
        G !== me && (n.setItem(b.value, me), P(G, me))
      }
    } catch (G) {
      p(G)
    }
  }

  function J(H) {
    const G = H ? H.newValue : n.getItem(b.value);
    if (G == null) return c && v != null && n.setItem(b.value, R.write(v)), v;
    if (!H && l) {
      const me = R.read(G);
      return typeof l == "function" ? l(me, v) : A === "object" && !Array.isArray(me) ? {
        ...v,
        ...me
      } : me
    } else return typeof G != "string" ? G : R.read(G)
  }

  function k(H) {
    if (!(H && H.storageArea !== n)) {
      if (H && H.key == null) {
        E.value = v;
        return
      }
      if (!(H && H.key !== b.value)) {
        O();
        try {
          H?.newValue !== R.write(E.value) && (E.value = J(H))
        } catch (G) {
          p(G)
        } finally {
          H ? In(L) : L()
        }
      }
    }
  }

  function Y(H) {
    k(H.detail)
  }
  return E
}
var ca = {
    exports: {}
  },
  aC = ca.exports,
  u_;

function cC() {
  return u_ || (u_ = 1, (function(e, t) {
    (function(n, r) {
      e.exports = r()
    })(aC, (function() {
      var n = 1e3,
        r = 6e4,
        s = 36e5,
        o = "millisecond",
        i = "second",
        a = "minute",
        c = "hour",
        l = "day",
        u = "week",
        d = "month",
        g = "quarter",
        p = "year",
        m = "date",
        E = "Invalid Date",
        b = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
        v = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        A = {
          name: "en",
          weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
          months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
          ordinal: function(de) {
            var X = ["th", "st", "nd", "rd"],
              N = de % 100;
            return "[" + de + (X[(N - 20) % 10] || X[N] || X[0]) + "]"
          }
        },
        R = function(de, X, N) {
          var K = String(de);
          return !K || K.length >= X ? de : "" + Array(X + 1 - K.length)
            .join(N) + de
        },
        O = {
          s: R,
          z: function(de) {
            var X = -de.utcOffset(),
              N = Math.abs(X),
              K = Math.floor(N / 60),
              ee = N % 60;
            return (X <= 0 ? "+" : "-") + R(K, 2, "0") + ":" + R(ee, 2, "0")
          },
          m: function de(X, N) {
            if (X.date() < N.date()) return -de(N, X);
            var K = 12 * (N.year() - X.year()) + (N.month() - X.month()),
              ee = X.clone()
              .add(K, d),
              _e = N - ee < 0,
              Q = X.clone()
              .add(K + (_e ? -1 : 1), d);
            return +(-(K + (N - ee) / (_e ? ee - Q : Q - ee)) || 0)
          },
          a: function(de) {
            return de < 0 ? Math.ceil(de) || 0 : Math.floor(de)
          },
          p: function(de) {
            return {
              M: d,
              y: p,
              w: u,
              d: l,
              D: m,
              h: c,
              m: a,
              s: i,
              ms: o,
              Q: g
            } [de] || String(de || "")
              .toLowerCase()
              .replace(/s$/, "")
          },
          u: function(de) {
            return de === void 0
          }
        },
        L = "en",
        P = {};
      P[L] = A;
      var D = "$isDayjsObject",
        J = function(de) {
          return de instanceof G || !(!de || !de[D])
        },
        k = function de(X, N, K) {
          var ee;
          if (!X) return L;
          if (typeof X == "string") {
            var _e = X.toLowerCase();
            P[_e] && (ee = _e), N && (P[_e] = N, ee = _e);
            var Q = X.split("-");
            if (!ee && Q.length > 1) return de(Q[0])
          } else {
            var V = X.name;
            P[V] = X, ee = V
          }
          return !K && ee && (L = ee), ee || !K && L
        },
        Y = function(de, X) {
          if (J(de)) return de.clone();
          var N = typeof X == "object" ? X : {};
          return N.date = de, N.args = arguments, new G(N)
        },
        H = O;
      H.l = k, H.i = J, H.w = function(de, X) {
        return Y(de, {
          locale: X.$L,
          utc: X.$u,
          x: X.$x,
          $offset: X.$offset
        })
      };
      var G = (function() {
          function de(N) {
            this.$L = k(N.locale, null, !0), this.parse(N), this.$x = this.$x || N.x || {}, this[D] = !0
          }
          var X = de.prototype;
          return X.parse = function(N) {
            this.$d = (function(K) {
              var ee = K.date,
                _e = K.utc;
              if (ee === null) return new Date(NaN);
              if (H.u(ee)) return new Date;
              if (ee instanceof Date) return new Date(ee);
              if (typeof ee == "string" && !/Z$/i.test(ee)) {
                var Q = ee.match(b);
                if (Q) {
                  var V = Q[2] - 1 || 0,
                    oe = (Q[7] || "0")
                    .substring(0, 3);
                  return _e ? new Date(Date.UTC(Q[1], V, Q[3] || 1, Q[4] || 0, Q[5] || 0, Q[6] || 0, oe)) : new Date(Q[1], V, Q[3] || 1, Q[4] || 0, Q[5] || 0, Q[6] || 0, oe)
                }
              }
              return new Date(ee)
            })(N), this.init()
          }, X.init = function() {
            var N = this.$d;
            this.$y = N.getFullYear(), this.$M = N.getMonth(), this.$D = N.getDate(), this.$W = N.getDay(), this.$H = N.getHours(), this.$m = N.getMinutes(), this.$s = N.getSeconds(), this.$ms = N.getMilliseconds()
          }, X.$utils = function() {
            return H
          }, X.isValid = function() {
            return this.$d.toString() !== E
          }, X.isSame = function(N, K) {
            var ee = Y(N);
            return this.startOf(K) <= ee && ee <= this.endOf(K)
          }, X.isAfter = function(N, K) {
            return Y(N) < this.startOf(K)
          }, X.isBefore = function(N, K) {
            return this.endOf(K) < Y(N)
          }, X.$g = function(N, K, ee) {
            return H.u(N) ? this[K] : this.set(ee, N)
          }, X.unix = function() {
            return Math.floor(this.valueOf() / 1e3)
          }, X.valueOf = function() {
            return this.$d.getTime()
          }, X.startOf = function(N, K) {
            var ee = this,
              _e = !!H.u(K) || K,
              Q = H.p(N),
              V = function(pe, ye) {
                var Re = H.w(ee.$u ? Date.UTC(ee.$y, ye, pe) : new Date(ee.$y, ye, pe), ee);
                return _e ? Re : Re.endOf(l)
              },
              oe = function(pe, ye) {
                return H.w(ee.toDate()[pe].apply(ee.toDate("s"), (_e ? [0, 0, 0, 0] : [23, 59, 59, 999])
                  .slice(ye)), ee)
              },
              Ae = this.$W,
              Ne = this.$M,
              Le = this.$D,
              He = "set" + (this.$u ? "UTC" : "");
            switch (Q) {
              case p:
                return _e ? V(1, 0) : V(31, 11);
              case d:
                return _e ? V(1, Ne) : V(0, Ne + 1);
              case u:
                var W = this.$locale()
                  .weekStart || 0,
                  he = (Ae < W ? Ae + 7 : Ae) - W;
                return V(_e ? Le - he : Le + (6 - he), Ne);
              case l:
              case m:
                return oe(He + "Hours", 0);
              case c:
                return oe(He + "Minutes", 1);
              case a:
                return oe(He + "Seconds", 2);
              case i:
                return oe(He + "Milliseconds", 3);
              default:
                return this.clone()
            }
          }, X.endOf = function(N) {
            return this.startOf(N, !1)
          }, X.$set = function(N, K) {
            var ee, _e = H.p(N),
              Q = "set" + (this.$u ? "UTC" : ""),
              V = (ee = {}, ee[l] = Q + "Date", ee[m] = Q + "Date", ee[d] = Q + "Month", ee[p] = Q + "FullYear", ee[c] = Q + "Hours", ee[a] = Q + "Minutes", ee[i] = Q + "Seconds", ee[o] = Q + "Milliseconds", ee)[_e],
              oe = _e === l ? this.$D + (K - this.$W) : K;
            if (_e === d || _e === p) {
              var Ae = this.clone()
                .set(m, 1);
              Ae.$d[V](oe), Ae.init(), this.$d = Ae.set(m, Math.min(this.$D, Ae.daysInMonth()))
                .$d
            } else V && this.$d[V](oe);
            return this.init(), this
          }, X.set = function(N, K) {
            return this.clone()
              .$set(N, K)
          }, X.get = function(N) {
            return this[H.p(N)]()
          }, X.add = function(N, K) {
            var ee, _e = this;
            N = Number(N);
            var Q = H.p(K),
              V = function(Ne) {
                var Le = Y(_e);
                return H.w(Le.date(Le.date() + Math.round(Ne * N)), _e)
              };
            if (Q === d) return this.set(d, this.$M + N);
            if (Q === p) return this.set(p, this.$y + N);
            if (Q === l) return V(1);
            if (Q === u) return V(7);
            var oe = (ee = {}, ee[a] = r, ee[c] = s, ee[i] = n, ee)[Q] || 1,
              Ae = this.$d.getTime() + N * oe;
            return H.w(Ae, this)
          }, X.subtract = function(N, K) {
            return this.add(-1 * N, K)
          }, X.format = function(N) {
            var K = this,
              ee = this.$locale();
            if (!this.isValid()) return ee.invalidDate || E;
            var _e = N || "YYYY-MM-DDTHH:mm:ssZ",
              Q = H.z(this),
              V = this.$H,
              oe = this.$m,
              Ae = this.$M,
              Ne = ee.weekdays,
              Le = ee.months,
              He = ee.meridiem,
              W = function(ye, Re, w, C) {
                return ye && (ye[Re] || ye(K, _e)) || w[Re].slice(0, C)
              },
              he = function(ye) {
                return H.s(V % 12 || 12, ye, "0")
              },
              pe = He || function(ye, Re, w) {
                var C = ye < 12 ? "AM" : "PM";
                return w ? C.toLowerCase() : C
              };
            return _e.replace(v, (function(ye, Re) {
              return Re || (function(w) {
                switch (w) {
                  case "YY":
                    return String(K.$y)
                      .slice(-2);
                  case "YYYY":
                    return H.s(K.$y, 4, "0");
                  case "M":
                    return Ae + 1;
                  case "MM":
                    return H.s(Ae + 1, 2, "0");
                  case "MMM":
                    return W(ee.monthsShort, Ae, Le, 3);
                  case "MMMM":
                    return W(Le, Ae);
                  case "D":
                    return K.$D;
                  case "DD":
                    return H.s(K.$D, 2, "0");
                  case "d":
                    return String(K.$W);
                  case "dd":
                    return W(ee.weekdaysMin, K.$W, Ne, 2);
                  case "ddd":
                    return W(ee.weekdaysShort, K.$W, Ne, 3);
                  case "dddd":
                    return Ne[K.$W];
                  case "H":
                    return String(V);
                  case "HH":
                    return H.s(V, 2, "0");
                  case "h":
                    return he(1);
                  case "hh":
                    return he(2);
                  case "a":
                    return pe(V, oe, !0);
                  case "A":
                    return pe(V, oe, !1);
                  case "m":
                    return String(oe);
                  case "mm":
                    return H.s(oe, 2, "0");
                  case "s":
                    return String(K.$s);
                  case "ss":
                    return H.s(K.$s, 2, "0");
                  case "SSS":
                    return H.s(K.$ms, 3, "0");
                  case "Z":
                    return Q
                }
                return null
              })(ye) || Q.replace(":", "")
            }))
          }, X.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
          }, X.diff = function(N, K, ee) {
            var _e, Q = this,
              V = H.p(K),
              oe = Y(N),
              Ae = (oe.utcOffset() - this.utcOffset()) * r,
              Ne = this - oe,
              Le = function() {
                return H.m(Q, oe)
              };
            switch (V) {
              case p:
                _e = Le() / 12;
                break;
              case d:
                _e = Le();
                break;
              case g:
                _e = Le() / 3;
                break;
              case u:
                _e = (Ne - Ae) / 6048e5;
                break;
              case l:
                _e = (Ne - Ae) / 864e5;
                break;
              case c:
                _e = Ne / s;
                break;
              case a:
                _e = Ne / r;
                break;
              case i:
                _e = Ne / n;
                break;
              default:
                _e = Ne
            }
            return ee ? _e : H.a(_e)
          }, X.daysInMonth = function() {
            return this.endOf(d)
              .$D
          }, X.$locale = function() {
            return P[this.$L]
          }, X.locale = function(N, K) {
            if (!N) return this.$L;
            var ee = this.clone(),
              _e = k(N, K, !0);
            return _e && (ee.$L = _e), ee
          }, X.clone = function() {
            return H.w(this.$d, this)
          }, X.toDate = function() {
            return new Date(this.valueOf())
          }, X.toJSON = function() {
            return this.isValid() ? this.toISOString() : null
          }, X.toISOString = function() {
            return this.$d.toISOString()
          }, X.toString = function() {
            return this.$d.toUTCString()
          }, de
        })(),
        me = G.prototype;
      return Y.prototype = me, [
        ["$ms", o],
        ["$s", i],
        ["$m", a],
        ["$H", c],
        ["$W", l],
        ["$M", d],
        ["$y", p],
        ["$D", m]
      ].forEach((function(de) {
        me[de[1]] = function(X) {
          return this.$g(X, de[0], de[1])
        }
      })), Y.extend = function(de, X) {
        return de.$i || (de(X, G, Y), de.$i = !0), Y
      }, Y.locale = k, Y.isDayjs = J, Y.unix = function(de) {
        return Y(1e3 * de)
      }, Y.en = P[L], Y.Ls = P, Y.p = {}, Y
    }))
  })(ca)), ca.exports
}
var lC = cC();
const Qt = Ai(lC);

function La(e) {
  const {
    configs: t
  } = Ye(), {
    t: n,
    messages: r
  } = sd();
  return r.value ? e != null && Object.hasOwn(r.value[t.value.locale], e) && n(e) !== "" : !1
}
const cc = Nn("location", () => {
    const e = ce(null);
    return {
      currentStep: e,
      setCurrentLocation: n => {
        n.includes("cart") ? e.value = Ze.CART : n.includes("login") ? e.value = Ze.LOGIN : n.includes("success") ? e.value = Ze.SUCCESS : n.includes("delivery_options") ? e.value = Ze.DELIVERY_OPTIONS : n.includes("delivery_address") ? e.value = Ze.ADDRESS : n.includes("payment") ? e.value = Ze.PAYMENT : n.includes("summary") && (e.value = Ze.SUMMARY)
      }
    }
  }),
  uC = () => {
    const e = async (r, s, o = "") => {
      const {
        useTracking: i
      } = await _(async () => {
        const {
          useTracking: u
        } = await Promise.resolve()
          .then(() => x$);
        return {
          useTracking: u
        }
      }, void 0), a = od.global.t, {
        errorMessageTracking: c
      } = i(), {
        currentStep: l
      } = cc();
      c({
        page: l,
        translationKey: s,
        errorMessage: La(s) ? a(s) : o,
        errorHeader: r
      })
    }, t = Zs(async (r, s) => {
      Hg(r), await e(r, s)
    }, 500, {
      leading: !1,
      trailing: !0
    });
    return {
      handleValidationError: async (r, s) => {
        t.cancel(), await t(r, s)
      },
      trackError: e
    }
  };
var vt = (e => (e.SUCCESS = "SUCCESS", e.ERROR = "ERROR", e.WARNING = "WARNING", e.INFO = "INFO", e))(vt || {}),
  xt = (e => (e.TOAST = "TOAST", e.PAGE = "PAGE", e))(xt || {}),
  pr = (e => (e.API_MESSAGE = "API_MESSAGE", e.API_STATUS = "API_STATUS", e.PRESERVED = "PRESERVED", e.CUSTOM = "CUSTOM", e))(pr || {});
const dd = "pca-checkoutview-snack",
  yr = ce([]),
  Ro = ce(Object.create(null)),
  qo = iC("lidl_preservedAppMessages", [], sessionStorage),
  dC = ce(xt.TOAST),
  fC = () => {
    const {
      getAppMessageContent: e
    } = Yn();
    yr.value = [];
    for (const t of qo.value) {
      if (t.location === xt.TOAST) {
        setTimeout(() => {
          document.dispatchEvent(new CustomEvent(dd, {
            detail: {
              message: e(t),
              buttonText: t.buttonText,
              isError: t.level === vt.ERROR,
              isSuccess: t.level === vt.SUCCESS,
              type: "multiline",
              buttonClick: async () => t?.buttonCallback ? await t.buttonCallback() : "",
              closeClick: async () => t?.closeCallBack ? await t.closeCallBack() : ""
            }
          }))
        }, 500);
        continue
      }
      yr.value.push(t)
    }
    qo.value = []
  },
  Yn = () => {
    const e = od.global.t,
      t = p => p?.messageTranslationKey && La(p?.messageTranslationKey) ? e(p.messageTranslationKey, p?.messageTranslationParam) : p?.message,
      n = (p, m) => "message" in p && "message" in m && p.message === m.message || "messageTranslationKey" in p && "messageTranslationKey" in m && p.messageTranslationKey === m.messageTranslationKey && p.origin === m.origin && p.location === m.location && p.level === m.level,
      r = 500,
      s = () => {
        const p = Qt()
          .subtract(r, "milliseconds");
        for (const [m, E] of Object.entries(Ro.value)) p.isAfter(Qt(Number.parseInt(E, 10))) && delete Ro.value[m]
      },
      o = (p, m = "multiline") => {
        const E = t(p);
        if (p.level === "ERROR") {
          const {
            trackError: v
          } = uC(), {
            currentStep: A
          } = cc(), R = p;
          v(ud(A), R.messageTranslationKey, E)
            .then(O => {})
        }
        if (p.location === xt.TOAST) {
          s();
          const v = Ro.value[E];
          if (Ro.value[E] = Qt()
            .valueOf()
            .toString(10), v) return;
          document.dispatchEvent(new CustomEvent(dd, {
            detail: {
              message: E,
              buttonText: p.buttonText,
              isError: p.level === vt.ERROR,
              isSuccess: p.level === vt.SUCCESS,
              buttonClick: async () => p?.buttonCallback ? await p.buttonCallback() : "",
              closeClick: async () => p?.closeCallBack ? await p.closeCallBack() : "",
              type: m
            }
          }));
          return
        }
        yr.value.find(v => n(v, p)) || yr.value.push(p)
      },
      i = p => typeof p[0] == "string" && (p[0] === "standard" || p[0] === "multiline") ? {
        snackBarType: p[0],
        messages: p.slice(1)
      } : {
        snackBarType: "standard",
        messages: p
      },
      a = (...p) => {
        const {
          snackBarType: m,
          messages: E
        } = i(p);
        for (const b of E) o(b, m)
      },
      c = () => {
        yr.value = []
      },
      l = p => {
        yr.value.splice(p, 1)
      },
      u = p => {
        yr.value.splice(yr.value.findIndex(m => n(m, p)), 1)
      },
      d = p => {
        qo.value.find(E => n(E, p)) || qo.value.push(p)
      };
    return {
      messages: yr,
      preservedMessages: qo,
      cachedToastMessages: Ro,
      defaultMessageLocation: dC,
      addAppMessage: o,
      addAppMessages: a,
      clearMessages: c,
      deleteAppMessageByIndex: l,
      areAppMessagesEqual: n,
      deleteAppMessage: u,
      getAppMessageContent: t,
      addPreservedAppMessage: d,
      addPreservedAppMessages: (...p) => {
        for (const m of p) d(m)
      }
    }
  };
var It = (e => (e.LOGIN = "LoginPage", e.ADDRESS = "AddressPage", e.PAYMENT = "PaymentPage", e.SUMMARY = "SummaryPage", e.SUCCESS = "SuccessPage", e.ERROR = "ErrorPage", e.CART = "CartPage", e.HANDOVER = "HandoverPage", e.HANDOVER_FLASHSALES = "HandoverFlashsalesPage", e.FLOW = "FlowPage", e))(It || {});
const Do = ["delivery_options", "delivery_address", "payment", "summary"];

function pC(e) {
  const {
    configs: t
  } = Ye(), n = t.value.locale, r = {}, s = [], o = ce([]), i = P => typeof P == "object" ? P : {
      type: "CODE",
      value: P
    }, a = () => {
      o.value = []
    }, c = P => P.prefix ? `${P.prefix} ` : "", l = P => {
      switch (P.type) {
        case "CODE":
          return r[P.value] || "";
        case "TEXT":
          return P.value;
        default:
          return ""
      }
    }, u = P => P.type === "CODE" || P.type === "TEXT", d = P => c(P) + l(P), g = P => typeof P == "string" && P.trim()
    .length === 0, p = P => !(g(String(r[P.value])) || g(P.value)), m = (P, D, J) => {
      let k = -1;
      for (let Y = 0; Y < J.length; Y++)
        if (J[Y].value === P.value) {
          k = Y;
          break
        } return k === D
    }, E = P => P.map(i)
    .filter(u)
    .filter(p)
    .filter(m), b = P => {
      a();
      const D = E(P);
      o.value = D.map(J => ({
        htmlContent: d(J),
        id: J.id
      }))
    }, v = P => {
      const D = [];
      P?.forEach && (P?.forEach((J, k) => {
          const Y = i(J),
            H = Y.value;
          Y.type === "CODE" && !r[H] && (r[H] = " ", D[k] = fetch(`/n/disclaimer-text/${H}${n?`?locale=${n}`:""}`)
            .then(async G => {
              if (G.status === 204) throw new Error("No content");
              return await G.json()
            })
            .then(G => {
              r[H] = G.text
            })
            .catch(console.warn))
        }), Promise.all(D)
        .then(J => {
          b(P)
        })
        .catch(() => {}))
    }, A = async () => {
      const P = document.querySelectorAll('img[src*="/static/assets/dt_"]');
      let D = [];
      P.forEach(H => {
        D.push(H.getAttribute("src"))
      });
      const J = new Set(D);
      D = Array.from(J);
      const k = D.map(async H => await fetch(`/n/api/asset-dts?asset=${String(H)}`)
          .then(async G => await G.json())),
        Y = [];
      return await Promise.all(k)
        .then(H => {
          const G = H.flat();
          return Array.prototype.push.apply(Y, G), Y
        })
    }, R = () => {
      const P = "data-n-disclaimers",
        D = document.querySelectorAll(`[${P}]:not([${P}=""])`);
      let J = [];
      return D.forEach(k => {
        const Y = k.getAttribute(P)
          .split(",");
        J = J.concat(Y)
      }), J
    }, O = async () => {
      let P = R();
      return await A()
        .then(D => {
          Array.prototype.push.apply(s, D), Array.prototype.push.apply(P, D);
          const J = new Set(P);
          return P = Array.from(J), P
        })
    };
  return e && (P => {
    let D = Array.isArray(P) ? [...P] : [];
    window.disclaimerData = {
        push: function() {
          const J = Array.prototype.slice.call(arguments);
          Array.prototype.push.apply(D, J), v(D)
        },
        pop: function() {
          D.pop(), b(D)
        },
        update: function() {
          const J = Array.prototype.slice.call(arguments);
          for (let k = 0; k < J.length; k++) {
            const Y = J[k];
            if (!Object.hasOwn(Y, "id")) return;
            const H = D.filter(function(G) {
              return G?.id === Y.id
            });
            D[D.indexOf(H[0])] = {
              type: "TEXT",
              value: Y.value,
              id: Y.id
            }
          }
          v(D.filter(k => k !== ""))
        },
        remove: function(J) {
          J = typeof J == "object" ? J : {
            type: "CODE",
            value: J
          };
          const Y = D.filter(G => G?.value === J.value)[0],
            H = D.indexOf(Y);
          H > -1 && (D.splice(H, 1), b(D))
        },
        removeAll: function(J) {
          J = typeof J == "object" ? J : {
            type: "CODE",
            value: J
          }, D = D.reduce((k, Y) => (Y?.value !== J.value && k.push(Y), k), []), b(D)
        },
        clear: function() {
          D.splice(0, D.length), b(D)
        },
        rescanAssets: function() {
          s.forEach(J => {
              window.disclaimerData.remove(J)
            }), s.splice(0, s.length), A()
            .then(function(J) {
              Array.prototype.push.apply(s, J), Array.prototype.push.apply(D, J), v(D)
            })
            .catch(() => {})
        }
      }, O()
      .then(J => {
        Array.prototype.push.apply(D, J), v(D)
      })
      .catch(() => {})
  })(window.disclaimerData), {
    push: async (...P) => {
      await Ur(window, "disclaimerData.push") && window.disclaimerData.push(...P)
    },
    pop: async () => {
      await Ur(window, "disclaimerData.pop") && window.disclaimerData.pop()
    },
    update: async (...P) => {
      await Ur(window, "disclaimerData.update") && window.disclaimerData.update(...P)
    },
    remove: async P => {
      await Ur(window, "disclaimerData.remove") && window.disclaimerData.remove(P)
    },
    removeAll: async P => {
      await Ur(window, "disclaimerData.removeAll") && window.disclaimerData.removeAll(P)
    },
    clear: async () => {
      await Ur(window, "disclaimerData.clear") && window.disclaimerData.clear()
    },
    rescanAssets: async () => {
      await Ur(window, "disclaimerData.rescanAssets") && window.disclaimerData.rescanAssets()
    },
    disclaimerEntries: o
  }
}
const $M = "lidl_locale",
  _C = "authToken",
  cv = "zn";

function lv(e, t) {
  return function() {
    return e.apply(t, arguments)
  }
}
const {
  toString: mC
} = Object.prototype, {
  getPrototypeOf: fd
} = Object, {
  iterator: lc,
  toStringTag: uv
} = Symbol, uc = (e => t => {
  const n = mC.call(t);
  return e[n] || (e[n] = n.slice(8, -1)
    .toLowerCase())
})(Object.create(null)), Xn = e => (e = e.toLowerCase(), t => uc(t) === e), dc = e => t => typeof t === e, {
  isArray: uo
} = Array, so = dc("undefined");

function Ti(e) {
  return e !== null && !so(e) && e.constructor !== null && !so(e.constructor) && hn(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const dv = Xn("ArrayBuffer");

function hC(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && dv(e.buffer), t
}
const gC = dc("string"),
  hn = dc("function"),
  fv = dc("number"),
  Oi = e => e !== null && typeof e == "object",
  vC = e => e === !0 || e === !1,
  la = e => {
    if (uc(e) !== "object") return !1;
    const t = fd(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(uv in e) && !(lc in e)
  },
  EC = e => {
    if (!Oi(e) || Ti(e)) return !1;
    try {
      return Object.keys(e)
        .length === 0 && Object.getPrototypeOf(e) === Object.prototype
    } catch {
      return !1
    }
  },
  yC = Xn("Date"),
  bC = Xn("File"),
  AC = Xn("Blob"),
  TC = Xn("FileList"),
  OC = e => Oi(e) && hn(e.pipe),
  IC = e => {
    let t;
    return e && (typeof FormData == "function" && e instanceof FormData || hn(e.append) && ((t = uc(e)) === "formdata" || t === "object" && hn(e.toString) && e.toString() === "[object FormData]"))
  },
  SC = Xn("URLSearchParams"),
  [RC, wC, PC, CC] = ["ReadableStream", "Request", "Response", "Headers"].map(Xn),
  LC = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function Ii(e, t, {
  allOwnKeys: n = !1
} = {}) {
  if (e === null || typeof e > "u") return;
  let r, s;
  if (typeof e != "object" && (e = [e]), uo(e))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    if (Ti(e)) return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length;
    let a;
    for (r = 0; r < i; r++) a = o[r], t.call(null, e[a], a, e)
  }
}

function pv(e, t) {
  if (Ti(e)) return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0;)
    if (s = n[r], t === s.toLowerCase()) return s;
  return null
}
const hs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global,
  _v = e => !so(e) && e !== hs;

function ou() {
  const {
    caseless: e,
    skipUndefined: t
  } = _v(this) && this || {}, n = {}, r = (s, o) => {
    if (o === "__proto__" || o === "constructor" || o === "prototype") return;
    const i = e && pv(n, o) || o;
    la(n[i]) && la(s) ? n[i] = ou(n[i], s) : la(s) ? n[i] = ou({}, s) : uo(s) ? n[i] = s.slice() : (!t || !so(s)) && (n[i] = s)
  };
  for (let s = 0, o = arguments.length; s < o; s++) arguments[s] && Ii(arguments[s], r);
  return n
}
const DC = (e, t, n, {
    allOwnKeys: r
  } = {}) => (Ii(t, (s, o) => {
    n && hn(s) ? Object.defineProperty(e, o, {
      value: lv(s, n),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(e, o, {
      value: s,
      writable: !0,
      enumerable: !0,
      configurable: !0
    })
  }, {
    allOwnKeys: r
  }), e),
  kC = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  xC = (e, t, n, r) => {
    e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
      value: e,
      writable: !0,
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "super", {
      value: t.prototype
    }), n && Object.assign(e.prototype, n)
  },
  NC = (e, t, n, r) => {
    let s, o, i;
    const a = {};
    if (t = t || {}, e == null) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0;) i = s[o], (!r || r(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
      e = n !== !1 && fd(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t
  },
  $C = (e, t, n) => {
    e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
    const r = e.indexOf(t, n);
    return r !== -1 && r === n
  },
  VC = e => {
    if (!e) return null;
    if (uo(e)) return e;
    let t = e.length;
    if (!fv(t)) return null;
    const n = new Array(t);
    for (; t-- > 0;) n[t] = e[t];
    return n
  },
  MC = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && fd(Uint8Array)),
  FC = (e, t) => {
    const r = (e && e[lc])
      .call(e);
    let s;
    for (;
      (s = r.next()) && !s.done;) {
      const o = s.value;
      t.call(e, o[0], o[1])
    }
  },
  BC = (e, t) => {
    let n;
    const r = [];
    for (;
      (n = e.exec(t)) !== null;) r.push(n);
    return r
  },
  UC = Xn("HTMLFormElement"),
  jC = e => e.toLowerCase()
  .replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, s) {
    return r.toUpperCase() + s
  }),
  d_ = (({
    hasOwnProperty: e
  }) => (t, n) => e.call(t, n))(Object.prototype),
  HC = Xn("RegExp"),
  mv = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Ii(n, (s, o) => {
      let i;
      (i = t(s, o, e)) !== !1 && (r[o] = i || s)
    }), Object.defineProperties(e, r)
  },
  qC = e => {
    mv(e, (t, n) => {
      if (hn(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return !1;
      const r = e[n];
      if (hn(r)) {
        if (t.enumerable = !1, "writable" in t) {
          t.writable = !1;
          return
        }
        t.set || (t.set = () => {
          throw Error("Can not rewrite read-only method '" + n + "'")
        })
      }
    })
  },
  WC = (e, t) => {
    const n = {},
      r = s => {
        s.forEach(o => {
          n[o] = !0
        })
      };
    return uo(e) ? r(e) : r(String(e)
      .split(t)), n
  },
  GC = () => {},
  KC = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;

function YC(e) {
  return !!(e && hn(e.append) && e[uv] === "FormData" && e[lc])
}
const zC = e => {
    const t = new Array(10),
      n = (r, s) => {
        if (Oi(r)) {
          if (t.indexOf(r) >= 0) return;
          if (Ti(r)) return r;
          if (!("toJSON" in r)) {
            t[s] = r;
            const o = uo(r) ? [] : {};
            return Ii(r, (i, a) => {
              const c = n(i, s + 1);
              !so(c) && (o[a] = c)
            }), t[s] = void 0, o
          }
        }
        return r
      };
    return n(e, 0)
  },
  XC = Xn("AsyncFunction"),
  JC = e => e && (Oi(e) || hn(e)) && hn(e.then) && hn(e.catch),
  hv = ((e, t) => e ? setImmediate : t ? ((n, r) => (hs.addEventListener("message", ({
    source: s,
    data: o
  }) => {
    s === hs && o === n && r.length && r.shift()()
  }, !1), s => {
    r.push(s), hs.postMessage(n, "*")
  }))(`axios@${Math.random()}`, []) : n => setTimeout(n))(typeof setImmediate == "function", hn(hs.postMessage)),
  QC = typeof queueMicrotask < "u" ? queueMicrotask.bind(hs) : typeof process < "u" && process.nextTick || hv,
  ZC = e => e != null && hn(e[lc]),
  re = {
    isArray: uo,
    isArrayBuffer: dv,
    isBuffer: Ti,
    isFormData: IC,
    isArrayBufferView: hC,
    isString: gC,
    isNumber: fv,
    isBoolean: vC,
    isObject: Oi,
    isPlainObject: la,
    isEmptyObject: EC,
    isReadableStream: RC,
    isRequest: wC,
    isResponse: PC,
    isHeaders: CC,
    isUndefined: so,
    isDate: yC,
    isFile: bC,
    isBlob: AC,
    isRegExp: HC,
    isFunction: hn,
    isStream: OC,
    isURLSearchParams: SC,
    isTypedArray: MC,
    isFileList: TC,
    forEach: Ii,
    merge: ou,
    extend: DC,
    trim: LC,
    stripBOM: kC,
    inherits: xC,
    toFlatObject: NC,
    kindOf: uc,
    kindOfTest: Xn,
    endsWith: $C,
    toArray: VC,
    forEachEntry: FC,
    matchAll: BC,
    isHTMLForm: UC,
    hasOwnProperty: d_,
    hasOwnProp: d_,
    reduceDescriptors: mv,
    freezeMethods: qC,
    toObjectSet: WC,
    toCamelCase: jC,
    noop: GC,
    toFiniteNumber: KC,
    findKey: pv,
    global: hs,
    isContextDefined: _v,
    isSpecCompliantForm: YC,
    toJSONObject: zC,
    isAsyncFn: XC,
    isThenable: JC,
    setImmediate: hv,
    asap: QC,
    isIterable: ZC
  };
let $e = class gv extends Error {
  static from(t, n, r, s, o, i) {
    const a = new gv(t.message, n || t.code, r, s, o);
    return a.cause = t, a.name = t.name, i && Object.assign(a, i), a
  }
  constructor(t, n, r, s, o) {
    super(t), this.name = "AxiosError", this.isAxiosError = !0, n && (this.code = n), r && (this.config = r), s && (this.request = s), o && (this.response = o, this.status = o.status)
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
      config: re.toJSONObject(this.config),
      code: this.code,
      status: this.status
    }
  }
};
$e.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
$e.ERR_BAD_OPTION = "ERR_BAD_OPTION";
$e.ECONNABORTED = "ECONNABORTED";
$e.ETIMEDOUT = "ETIMEDOUT";
$e.ERR_NETWORK = "ERR_NETWORK";
$e.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
$e.ERR_DEPRECATED = "ERR_DEPRECATED";
$e.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
$e.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
$e.ERR_CANCELED = "ERR_CANCELED";
$e.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
$e.ERR_INVALID_URL = "ERR_INVALID_URL";
const eL = null;

function iu(e) {
  return re.isPlainObject(e) || re.isArray(e)
}

function vv(e) {
  return re.endsWith(e, "[]") ? e.slice(0, -2) : e
}

function f_(e, t, n) {
  return e ? e.concat(t)
    .map(function(s, o) {
      return s = vv(s), !n && o ? "[" + s + "]" : s
    })
    .join(n ? "." : "") : t
}

function tL(e) {
  return re.isArray(e) && !e.some(iu)
}
const nL = re.toFlatObject(re, {}, null, function(t) {
  return /^is[A-Z]/.test(t)
});

function fc(e, t, n) {
  if (!re.isObject(e)) throw new TypeError("target must be an object");
  t = t || new FormData, n = re.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(E, b) {
    return !re.isUndefined(b[E])
  });
  const r = n.metaTokens,
    s = n.visitor || u,
    o = n.dots,
    i = n.indexes,
    c = (n.Blob || typeof Blob < "u" && Blob) && re.isSpecCompliantForm(t);
  if (!re.isFunction(s)) throw new TypeError("visitor must be a function");

  function l(m) {
    if (m === null) return "";
    if (re.isDate(m)) return m.toISOString();
    if (re.isBoolean(m)) return m.toString();
    if (!c && re.isBlob(m)) throw new $e("Blob is not supported. Use a Buffer instead.");
    return re.isArrayBuffer(m) || re.isTypedArray(m) ? c && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m
  }

  function u(m, E, b) {
    let v = m;
    if (m && !b && typeof m == "object") {
      if (re.endsWith(E, "{}")) E = r ? E : E.slice(0, -2), m = JSON.stringify(m);
      else if (re.isArray(m) && tL(m) || (re.isFileList(m) || re.endsWith(E, "[]")) && (v = re.toArray(m))) return E = vv(E), v.forEach(function(R, O) {
        !(re.isUndefined(R) || R === null) && t.append(i === !0 ? f_([E], O, o) : i === null ? E : E + "[]", l(R))
      }), !1
    }
    return iu(m) ? !0 : (t.append(f_(b, E, o), l(m)), !1)
  }
  const d = [],
    g = Object.assign(nL, {
      defaultVisitor: u,
      convertValue: l,
      isVisitable: iu
    });

  function p(m, E) {
    if (!re.isUndefined(m)) {
      if (d.indexOf(m) !== -1) throw Error("Circular reference detected in " + E.join("."));
      d.push(m), re.forEach(m, function(v, A) {
        (!(re.isUndefined(v) || v === null) && s.call(t, v, re.isString(A) ? A.trim() : A, E, g)) === !0 && p(v, E ? E.concat(A) : [A])
      }), d.pop()
    }
  }
  if (!re.isObject(e)) throw new TypeError("data must be an object");
  return p(e), t
}

function p_(e) {
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
    .replace(/[!'()~]|%20|%00/g, function(r) {
      return t[r]
    })
}

function pd(e, t) {
  this._pairs = [], e && fc(e, this, t)
}
const Ev = pd.prototype;
Ev.append = function(t, n) {
  this._pairs.push([t, n])
};
Ev.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, p_)
  } : p_;
  return this._pairs.map(function(s) {
      return n(s[0]) + "=" + n(s[1])
    }, "")
    .join("&")
};

function rL(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
}

function yv(e, t, n) {
  if (!t) return e;
  const r = n && n.encode || rL,
    s = re.isFunction(n) ? {
      serialize: n
    } : n,
    o = s && s.serialize;
  let i;
  if (o ? i = o(t, s) : i = re.isURLSearchParams(t) ? t.toString() : new pd(t, s)
    .toString(r), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i
  }
  return e
}
class __ {
  constructor() {
    this.handlers = []
  }
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null)
  }
  clear() {
    this.handlers && (this.handlers = [])
  }
  forEach(t) {
    re.forEach(this.handlers, function(r) {
      r !== null && t(r)
    })
  }
}
const _d = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
    legacyInterceptorReqResOrdering: !0
  },
  sL = typeof URLSearchParams < "u" ? URLSearchParams : pd,
  oL = typeof FormData < "u" ? FormData : null,
  iL = typeof Blob < "u" ? Blob : null,
  aL = {
    isBrowser: !0,
    classes: {
      URLSearchParams: sL,
      FormData: oL,
      Blob: iL
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
  },
  md = typeof window < "u" && typeof document < "u",
  au = typeof navigator == "object" && navigator || void 0,
  cL = md && (!au || ["ReactNative", "NativeScript", "NS"].indexOf(au.product) < 0),
  lL = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function",
  uL = md && window.location.href || "http://localhost",
  dL = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: md,
    hasStandardBrowserEnv: cL,
    hasStandardBrowserWebWorkerEnv: lL,
    navigator: au,
    origin: uL
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Jt = {
    ...dL,
    ...aL
  };

function fL(e, t) {
  return fc(e, new Jt.classes.URLSearchParams, {
    visitor: function(n, r, s, o) {
      return Jt.isNode && re.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments)
    },
    ...t
  })
}

function pL(e) {
  return re.matchAll(/\w+|\[(\w*)]/g, e)
    .map(t => t[0] === "[]" ? "" : t[1] || t[0])
}

function _L(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++) o = n[r], t[o] = e[o];
  return t
}

function bv(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i),
      c = o >= n.length;
    return i = !i && re.isArray(s) ? s.length : i, c ? (re.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !a) : ((!s[i] || !re.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && re.isArray(s[i]) && (s[i] = _L(s[i])), !a)
  }
  if (re.isFormData(e) && re.isFunction(e.entries)) {
    const n = {};
    return re.forEachEntry(e, (r, s) => {
      t(pL(r), s, n, 0)
    }), n
  }
  return null
}

function mL(e, t, n) {
  if (re.isString(e)) try {
    return (t || JSON.parse)(e), re.trim(e)
  } catch (r) {
    if (r.name !== "SyntaxError") throw r
  }
  return (n || JSON.stringify)(e)
}
const Si = {
  transitional: _d,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "",
      s = r.indexOf("application/json") > -1,
      o = re.isObject(t);
    if (o && re.isHTMLForm(t) && (t = new FormData(t)), re.isFormData(t)) return s ? JSON.stringify(bv(t)) : t;
    if (re.isArrayBuffer(t) || re.isBuffer(t) || re.isStream(t) || re.isFile(t) || re.isBlob(t) || re.isReadableStream(t)) return t;
    if (re.isArrayBufferView(t)) return t.buffer;
    if (re.isURLSearchParams(t)) return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1) return fL(t, this.formSerializer)
        .toString();
      if ((a = re.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return fc(a ? {
          "files[]": t
        } : t, c && new c, this.formSerializer)
      }
    }
    return o || s ? (n.setContentType("application/json", !1), mL(t)) : t
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Si.transitional,
      r = n && n.forcedJSONParsing,
      s = this.responseType === "json";
    if (re.isResponse(t) || re.isReadableStream(t)) return t;
    if (t && re.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t, this.parseReviver)
      } catch (a) {
        if (i) throw a.name === "SyntaxError" ? $e.from(a, $e.ERR_BAD_RESPONSE, this, null, this.response) : a
      }
    }
    return t
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Jt.classes.FormData,
    Blob: Jt.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
re.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
  Si.headers[e] = {}
});
const hL = re.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
  gL = e => {
    const t = {};
    let n, r, s;
    return e && e.split(`
`)
      .forEach(function(i) {
        s = i.indexOf(":"), n = i.substring(0, s)
          .trim()
          .toLowerCase(), r = i.substring(s + 1)
          .trim(), !(!n || t[n] && hL[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
      }), t
  },
  m_ = Symbol("internals");

function wo(e) {
  return e && String(e)
    .trim()
    .toLowerCase()
}

function ua(e) {
  return e === !1 || e == null ? e : re.isArray(e) ? e.map(ua) : String(e)
}

function vL(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e);) t[r[1]] = r[2];
  return t
}
const EL = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());

function cl(e, t, n, r, s) {
  if (re.isFunction(r)) return r.call(this, t, n);
  if (s && (t = n), !!re.isString(t)) {
    if (re.isString(r)) return t.indexOf(r) !== -1;
    if (re.isRegExp(r)) return r.test(t)
  }
}

function yL(e) {
  return e.trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}

function bL(e, t) {
  const n = re.toCamelCase(" " + t);
  ["get", "set", "has"].forEach(r => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i)
      },
      configurable: !0
    })
  })
}
let gn = class {
  constructor(t) {
    t && this.set(t)
  }
  set(t, n, r) {
    const s = this;

    function o(a, c, l) {
      const u = wo(c);
      if (!u) throw new Error("header name must be a non-empty string");
      const d = re.findKey(s, u);
      (!d || s[d] === void 0 || l === !0 || l === void 0 && s[d] !== !1) && (s[d || c] = ua(a))
    }
    const i = (a, c) => re.forEach(a, (l, u) => o(l, u, c));
    if (re.isPlainObject(t) || t instanceof this.constructor) i(t, n);
    else if (re.isString(t) && (t = t.trim()) && !EL(t)) i(gL(t), n);
    else if (re.isObject(t) && re.isIterable(t)) {
      let a = {},
        c, l;
      for (const u of t) {
        if (!re.isArray(u)) throw TypeError("Object iterator must return a key-value pair");
        a[l = u[0]] = (c = a[l]) ? re.isArray(c) ? [...c, u[1]] : [c, u[1]] : u[1]
      }
      i(a, n)
    } else t != null && o(n, t, r);
    return this
  }
  get(t, n) {
    if (t = wo(t), t) {
      const r = re.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return vL(s);
        if (re.isFunction(n)) return n.call(this, s, r);
        if (re.isRegExp(n)) return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function")
      }
    }
  }
  has(t, n) {
    if (t = wo(t), t) {
      const r = re.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || cl(this, this[r], r, n)))
    }
    return !1
  }
  delete(t, n) {
    const r = this;
    let s = !1;

    function o(i) {
      if (i = wo(i), i) {
        const a = re.findKey(r, i);
        a && (!n || cl(r, r[a], a, n)) && (delete r[a], s = !0)
      }
    }
    return re.isArray(t) ? t.forEach(o) : o(t), s
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--;) {
      const o = n[r];
      (!t || cl(this, this[o], o, t, !0)) && (delete this[o], s = !0)
    }
    return s
  }
  normalize(t) {
    const n = this,
      r = {};
    return re.forEach(this, (s, o) => {
      const i = re.findKey(r, o);
      if (i) {
        n[i] = ua(s), delete n[o];
        return
      }
      const a = t ? yL(o) : String(o)
        .trim();
      a !== o && delete n[o], n[a] = ua(s), r[a] = !0
    }), this
  }
  concat(...t) {
    return this.constructor.concat(this, ...t)
  }
  toJSON(t) {
    const n = Object.create(null);
    return re.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && re.isArray(r) ? r.join(", ") : r)
    }), n
  } [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]()
  }
  toString() {
    return Object.entries(this.toJSON())
      .map(([t, n]) => t + ": " + n)
      .join(`
`)
  }
  getSetCookie() {
    return this.get("set-cookie") || []
  }
  get[Symbol.toStringTag]() {
    return "AxiosHeaders"
  }
  static from(t) {
    return t instanceof this ? t : new this(t)
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach(s => r.set(s)), r
  }
  static accessor(t) {
    const r = (this[m_] = this[m_] = {
        accessors: {}
      })
      .accessors,
      s = this.prototype;

    function o(i) {
      const a = wo(i);
      r[a] || (bL(s, i), r[a] = !0)
    }
    return re.isArray(t) ? t.forEach(o) : o(t), this
  }
};
gn.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
re.reduceDescriptors(gn.prototype, ({
  value: e
}, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r
    }
  }
});
re.freezeMethods(gn);

function ll(e, t) {
  const n = this || Si,
    r = t || n,
    s = gn.from(r.headers);
  let o = r.data;
  return re.forEach(e, function(a) {
    o = a.call(n, o, s.normalize(), t ? t.status : void 0)
  }), s.normalize(), o
}

function Av(e) {
  return !!(e && e.__CANCEL__)
}
let Ri = class extends $e {
  constructor(t, n, r) {
    super(t ?? "canceled", $e.ERR_CANCELED, n, r), this.name = "CanceledError", this.__CANCEL__ = !0
  }
};

function Tv(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new $e("Request failed with status code " + n.status, [$e.ERR_BAD_REQUEST, $e.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n))
}

function AL(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || ""
}

function TL(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    o = 0,
    i;
  return t = t !== void 0 ? t : 1e3,
    function(c) {
      const l = Date.now(),
        u = r[o];
      i || (i = l), n[s] = c, r[s] = l;
      let d = o,
        g = 0;
      for (; d !== s;) g += n[d++], d = d % e;
      if (s = (s + 1) % e, s === o && (o = (o + 1) % e), l - i < t) return;
      const p = u && l - u;
      return p ? Math.round(g * 1e3 / p) : void 0
    }
}

function OL(e, t) {
  let n = 0,
    r = 1e3 / t,
    s, o;
  const i = (l, u = Date.now()) => {
    n = u, s = null, o && (clearTimeout(o), o = null), e(...l)
  };
  return [(...l) => {
    const u = Date.now(),
      d = u - n;
    d >= r ? i(l, u) : (s = l, o || (o = setTimeout(() => {
      o = null, i(s)
    }, r - d)))
  }, () => s && i(s)]
}
const Da = (e, t, n = 3) => {
    let r = 0;
    const s = TL(50, 250);
    return OL(o => {
      const i = o.loaded,
        a = o.lengthComputable ? o.total : void 0,
        c = i - r,
        l = s(c),
        u = i <= a;
      r = i;
      const d = {
        loaded: i,
        total: a,
        progress: a ? i / a : void 0,
        bytes: c,
        rate: l || void 0,
        estimated: l && a && u ? (a - i) / l : void 0,
        event: o,
        lengthComputable: a != null,
        [t ? "download" : "upload"]: !0
      };
      e(d)
    }, n)
  },
  h_ = (e, t) => {
    const n = e != null;
    return [r => t[0]({
      lengthComputable: n,
      total: e,
      loaded: r
    }), t[1]]
  },
  g_ = e => (...t) => re.asap(() => e(...t)),
  IL = Jt.hasStandardBrowserEnv ? ((e, t) => n => (n = new URL(n, Jt.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(Jt.origin), Jt.navigator && /(msie|trident)/i.test(Jt.navigator.userAgent)) : () => !0,
  SL = Jt.hasStandardBrowserEnv ? {
    write(e, t, n, r, s, o, i) {
      if (typeof document > "u") return;
      const a = [`${e}=${encodeURIComponent(t)}`];
      re.isNumber(n) && a.push(`expires=${new Date(n).toUTCString()}`), re.isString(r) && a.push(`path=${r}`), re.isString(s) && a.push(`domain=${s}`), o === !0 && a.push("secure"), re.isString(i) && a.push(`SameSite=${i}`), document.cookie = a.join("; ")
    },
    read(e) {
      if (typeof document > "u") return null;
      const t = document.cookie.match(new RegExp("(?:^|; )" + e + "=([^;]*)"));
      return t ? decodeURIComponent(t[1]) : null
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5, "/")
    }
  } : {
    write() {},
    read() {
      return null
    },
    remove() {}
  };

function RL(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}

function wL(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
}

function Ov(e, t, n) {
  let r = !RL(t);
  return e && (r || n == !1) ? wL(e, t) : t
}
const v_ = e => e instanceof gn ? {
  ...e
} : e;

function Ss(e, t) {
  t = t || {};
  const n = {};

  function r(l, u, d, g) {
    return re.isPlainObject(l) && re.isPlainObject(u) ? re.merge.call({
      caseless: g
    }, l, u) : re.isPlainObject(u) ? re.merge({}, u) : re.isArray(u) ? u.slice() : u
  }

  function s(l, u, d, g) {
    if (re.isUndefined(u)) {
      if (!re.isUndefined(l)) return r(void 0, l, d, g)
    } else return r(l, u, d, g)
  }

  function o(l, u) {
    if (!re.isUndefined(u)) return r(void 0, u)
  }

  function i(l, u) {
    if (re.isUndefined(u)) {
      if (!re.isUndefined(l)) return r(void 0, l)
    } else return r(void 0, u)
  }

  function a(l, u, d) {
    if (d in t) return r(l, u);
    if (d in e) return r(void 0, l)
  }
  const c = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (l, u, d) => s(v_(l), v_(u), d, !0)
  };
  return re.forEach(Object.keys({
    ...e,
    ...t
  }), function(u) {
    if (u === "__proto__" || u === "constructor" || u === "prototype") return;
    const d = re.hasOwnProp(c, u) ? c[u] : s,
      g = d(e[u], t[u], u);
    re.isUndefined(g) && d !== a || (n[u] = g)
  }), n
}
const Iv = e => {
    const t = Ss({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: s,
      xsrfCookieName: o,
      headers: i,
      auth: a
    } = t;
    if (t.headers = i = gn.from(i), t.url = yv(Ov(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && i.set("Authorization", "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))), re.isFormData(n)) {
      if (Jt.hasStandardBrowserEnv || Jt.hasStandardBrowserWebWorkerEnv) i.setContentType(void 0);
      else if (re.isFunction(n.getHeaders)) {
        const c = n.getHeaders(),
          l = ["content-type", "content-length"];
        Object.entries(c)
          .forEach(([u, d]) => {
            l.includes(u.toLowerCase()) && i.set(u, d)
          })
      }
    }
    if (Jt.hasStandardBrowserEnv && (r && re.isFunction(r) && (r = r(t)), r || r !== !1 && IL(t.url))) {
      const c = s && o && SL.read(o);
      c && i.set(s, c)
    }
    return t
  },
  PL = typeof XMLHttpRequest < "u",
  CL = PL && function(e) {
    return new Promise(function(n, r) {
      const s = Iv(e);
      let o = s.data;
      const i = gn.from(s.headers)
        .normalize();
      let {
        responseType: a,
        onUploadProgress: c,
        onDownloadProgress: l
      } = s, u, d, g, p, m;

      function E() {
        p && p(), m && m(), s.cancelToken && s.cancelToken.unsubscribe(u), s.signal && s.signal.removeEventListener("abort", u)
      }
      let b = new XMLHttpRequest;
      b.open(s.method.toUpperCase(), s.url, !0), b.timeout = s.timeout;

      function v() {
        if (!b) return;
        const R = gn.from("getAllResponseHeaders" in b && b.getAllResponseHeaders()),
          L = {
            data: !a || a === "text" || a === "json" ? b.responseText : b.response,
            status: b.status,
            statusText: b.statusText,
            headers: R,
            config: e,
            request: b
          };
        Tv(function(D) {
          n(D), E()
        }, function(D) {
          r(D), E()
        }, L), b = null
      }
      "onloadend" in b ? b.onloadend = v : b.onreadystatechange = function() {
        !b || b.readyState !== 4 || b.status === 0 && !(b.responseURL && b.responseURL.indexOf("file:") === 0) || setTimeout(v)
      }, b.onabort = function() {
        b && (r(new $e("Request aborted", $e.ECONNABORTED, e, b)), b = null)
      }, b.onerror = function(O) {
        const L = O && O.message ? O.message : "Network Error",
          P = new $e(L, $e.ERR_NETWORK, e, b);
        P.event = O || null, r(P), b = null
      }, b.ontimeout = function() {
        let O = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
        const L = s.transitional || _d;
        s.timeoutErrorMessage && (O = s.timeoutErrorMessage), r(new $e(O, L.clarifyTimeoutError ? $e.ETIMEDOUT : $e.ECONNABORTED, e, b)), b = null
      }, o === void 0 && i.setContentType(null), "setRequestHeader" in b && re.forEach(i.toJSON(), function(O, L) {
        b.setRequestHeader(L, O)
      }), re.isUndefined(s.withCredentials) || (b.withCredentials = !!s.withCredentials), a && a !== "json" && (b.responseType = s.responseType), l && ([g, m] = Da(l, !0), b.addEventListener("progress", g)), c && b.upload && ([d, p] = Da(c), b.upload.addEventListener("progress", d), b.upload.addEventListener("loadend", p)), (s.cancelToken || s.signal) && (u = R => {
        b && (r(!R || R.type ? new Ri(null, e, b) : R), b.abort(), b = null)
      }, s.cancelToken && s.cancelToken.subscribe(u), s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
      const A = AL(s.url);
      if (A && Jt.protocols.indexOf(A) === -1) {
        r(new $e("Unsupported protocol " + A + ":", $e.ERR_BAD_REQUEST, e));
        return
      }
      b.send(o || null)
    })
  },
  LL = (e, t) => {
    const {
      length: n
    } = e = e ? e.filter(Boolean) : [];
    if (t || n) {
      let r = new AbortController,
        s;
      const o = function(l) {
        if (!s) {
          s = !0, a();
          const u = l instanceof Error ? l : this.reason;
          r.abort(u instanceof $e ? u : new Ri(u instanceof Error ? u.message : u))
        }
      };
      let i = t && setTimeout(() => {
        i = null, o(new $e(`timeout of ${t}ms exceeded`, $e.ETIMEDOUT))
      }, t);
      const a = () => {
        e && (i && clearTimeout(i), i = null, e.forEach(l => {
          l.unsubscribe ? l.unsubscribe(o) : l.removeEventListener("abort", o)
        }), e = null)
      };
      e.forEach(l => l.addEventListener("abort", o));
      const {
        signal: c
      } = r;
      return c.unsubscribe = () => re.asap(a), c
    }
  },
  DL = function*(e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return
    }
    let r = 0,
      s;
    for (; r < n;) s = r + t, yield e.slice(r, s), r = s
  },
  kL = async function*(e, t) {
    for await (const n of xL(e)) yield* DL(n, t)
  }, xL = async function*(e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return
    }
    const t = e.getReader();
    try {
      for (;;) {
        const {
          done: n,
          value: r
        } = await t.read();
        if (n) break;
        yield r
      }
    } finally {
      await t.cancel()
    }
  }, E_ = (e, t, n, r) => {
    const s = kL(e, t);
    let o = 0,
      i, a = c => {
        i || (i = !0, r && r(c))
      };
    return new ReadableStream({
      async pull(c) {
        try {
          const {
            done: l,
            value: u
          } = await s.next();
          if (l) {
            a(), c.close();
            return
          }
          let d = u.byteLength;
          if (n) {
            let g = o += d;
            n(g)
          }
          c.enqueue(new Uint8Array(u))
        } catch (l) {
          throw a(l), l
        }
      },
      cancel(c) {
        return a(c), s.return()
      }
    }, {
      highWaterMark: 2
    })
  }, y_ = 64 * 1024, {
    isFunction: Ki
  } = re, NL = (({
    Request: e,
    Response: t
  }) => ({
    Request: e,
    Response: t
  }))(re.global), {
    ReadableStream: b_,
    TextEncoder: A_
  } = re.global, T_ = (e, ...t) => {
    try {
      return !!e(...t)
    } catch {
      return !1
    }
  }, $L = e => {
    e = re.merge.call({
      skipUndefined: !0
    }, NL, e);
    const {
      fetch: t,
      Request: n,
      Response: r
    } = e, s = t ? Ki(t) : typeof fetch == "function", o = Ki(n), i = Ki(r);
    if (!s) return !1;
    const a = s && Ki(b_),
      c = s && (typeof A_ == "function" ? (m => E => m.encode(E))(new A_) : async m => new Uint8Array(await new n(m)
        .arrayBuffer())),
      l = o && a && T_(() => {
        let m = !1;
        const E = new n(Jt.origin, {
            body: new b_,
            method: "POST",
            get duplex() {
              return m = !0, "half"
            }
          })
          .headers.has("Content-Type");
        return m && !E
      }),
      u = i && a && T_(() => re.isReadableStream(new r("")
        .body)),
      d = {
        stream: u && (m => m.body)
      };
    s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(m => {
      !d[m] && (d[m] = (E, b) => {
        let v = E && E[m];
        if (v) return v.call(E);
        throw new $e(`Response type '${m}' is not supported`, $e.ERR_NOT_SUPPORT, b)
      })
    });
    const g = async m => {
      if (m == null) return 0;
      if (re.isBlob(m)) return m.size;
      if (re.isSpecCompliantForm(m)) return (await new n(Jt.origin, {
            method: "POST",
            body: m
          })
          .arrayBuffer())
        .byteLength;
      if (re.isArrayBufferView(m) || re.isArrayBuffer(m)) return m.byteLength;
      if (re.isURLSearchParams(m) && (m = m + ""), re.isString(m)) return (await c(m))
        .byteLength
    }, p = async (m, E) => {
      const b = re.toFiniteNumber(m.getContentLength());
      return b ?? g(E)
    };
    return async m => {
      let {
        url: E,
        method: b,
        data: v,
        signal: A,
        cancelToken: R,
        timeout: O,
        onDownloadProgress: L,
        onUploadProgress: P,
        responseType: D,
        headers: J,
        withCredentials: k = "same-origin",
        fetchOptions: Y
      } = Iv(m), H = t || fetch;
      D = D ? (D + "")
        .toLowerCase() : "text";
      let G = LL([A, R && R.toAbortSignal()], O),
        me = null;
      const de = G && G.unsubscribe && (() => {
        G.unsubscribe()
      });
      let X;
      try {
        if (P && l && b !== "get" && b !== "head" && (X = await p(J, v)) !== 0) {
          let V = new n(E, {
              method: "POST",
              body: v,
              duplex: "half"
            }),
            oe;
          if (re.isFormData(v) && (oe = V.headers.get("content-type")) && J.setContentType(oe), V.body) {
            const [Ae, Ne] = h_(X, Da(g_(P)));
            v = E_(V.body, y_, Ae, Ne)
          }
        }
        re.isString(k) || (k = k ? "include" : "omit");
        const N = o && "credentials" in n.prototype,
          K = {
            ...Y,
            signal: G,
            method: b.toUpperCase(),
            headers: J.normalize()
              .toJSON(),
            body: v,
            duplex: "half",
            credentials: N ? k : void 0
          };
        me = o && new n(E, K);
        let ee = await (o ? H(me, Y) : H(E, K));
        const _e = u && (D === "stream" || D === "response");
        if (u && (L || _e && de)) {
          const V = {};
          ["status", "statusText", "headers"].forEach(Le => {
            V[Le] = ee[Le]
          });
          const oe = re.toFiniteNumber(ee.headers.get("content-length")),
            [Ae, Ne] = L && h_(oe, Da(g_(L), !0)) || [];
          ee = new r(E_(ee.body, y_, Ae, () => {
            Ne && Ne(), de && de()
          }), V)
        }
        D = D || "text";
        let Q = await d[re.findKey(d, D) || "text"](ee, m);
        return !_e && de && de(), await new Promise((V, oe) => {
          Tv(V, oe, {
            data: Q,
            headers: gn.from(ee.headers),
            status: ee.status,
            statusText: ee.statusText,
            config: m,
            request: me
          })
        })
      } catch (N) {
        throw de && de(), N && N.name === "TypeError" && /Load failed|fetch/i.test(N.message) ? Object.assign(new $e("Network Error", $e.ERR_NETWORK, m, me, N && N.response), {
          cause: N.cause || N
        }) : $e.from(N, N && N.code, m, me, N && N.response)
      }
    }
  }, VL = new Map, Sv = e => {
    let t = e && e.env || {};
    const {
      fetch: n,
      Request: r,
      Response: s
    } = t, o = [r, s, n];
    let i = o.length,
      a = i,
      c, l, u = VL;
    for (; a--;) c = o[a], l = u.get(c), l === void 0 && u.set(c, l = a ? new Map : $L(t)), u = l;
    return l
  };
Sv();
const hd = {
  http: eL,
  xhr: CL,
  fetch: {
    get: Sv
  }
};
re.forEach(hd, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", {
        value: t
      })
    } catch {}
    Object.defineProperty(e, "adapterName", {
      value: t
    })
  }
});
const O_ = e => `- ${e}`,
  ML = e => re.isFunction(e) || e === null || e === !1;

function FL(e, t) {
  e = re.isArray(e) ? e : [e];
  const {
    length: n
  } = e;
  let r, s;
  const o = {};
  for (let i = 0; i < n; i++) {
    r = e[i];
    let a;
    if (s = r, !ML(r) && (s = hd[(a = String(r))
        .toLowerCase()], s === void 0)) throw new $e(`Unknown adapter '${a}'`);
    if (s && (re.isFunction(s) || (s = s.get(t)))) break;
    o[a || "#" + i] = s
  }
  if (!s) {
    const i = Object.entries(o)
      .map(([c, l]) => `adapter ${c} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build"));
    let a = n ? i.length > 1 ? `since :
` + i.map(O_)
      .join(`
`) : " " + O_(i[0]) : "as no adapter specified";
    throw new $e("There is no suitable adapter to dispatch the request " + a, "ERR_NOT_SUPPORT")
  }
  return s
}
const Rv = {
  getAdapter: FL,
  adapters: hd
};

function ul(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new Ri(null, e)
}

function I_(e) {
  return ul(e), e.headers = gn.from(e.headers), e.data = ll.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Rv.getAdapter(e.adapter || Si.adapter, e)(e)
    .then(function(r) {
      return ul(e), r.data = ll.call(e, e.transformResponse, r), r.headers = gn.from(r.headers), r
    }, function(r) {
      return Av(r) || (ul(e), r && r.response && (r.response.data = ll.call(e, e.transformResponse, r.response), r.response.headers = gn.from(r.response.headers))), Promise.reject(r)
    })
}
const wv = "1.13.5",
  pc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  pc[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
  }
});
const S_ = {};
pc.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + wv + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "")
  }
  return (o, i, a) => {
    if (t === !1) throw new $e(s(i, " has been removed" + (n ? " in " + n : "")), $e.ERR_DEPRECATED);
    return n && !S_[i] && (S_[i] = !0, console.warn(s(i, " has been deprecated since v" + n + " and will be removed in the near future"))), t ? t(o, i, a) : !0
  }
};
pc.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0)
};

function BL(e, t, n) {
  if (typeof e != "object") throw new $e("options must be an object", $e.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0;) {
    const o = r[s],
      i = t[o];
    if (i) {
      const a = e[o],
        c = a === void 0 || i(a, o, e);
      if (c !== !0) throw new $e("option " + o + " must be " + c, $e.ERR_BAD_OPTION_VALUE);
      continue
    }
    if (n !== !0) throw new $e("Unknown option " + o, $e.ERR_BAD_OPTION)
  }
}
const da = {
    assertOptions: BL,
    validators: pc
  },
  wn = da.validators;
let bs = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new __,
      response: new __
    }
  }
  async request(t, n) {
    try {
      return await this._request(t, n)
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error;
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack)
            .endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o
        } catch {}
      }
      throw r
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Ss(this.defaults, n);
    const {
      transitional: r,
      paramsSerializer: s,
      headers: o
    } = n;
    r !== void 0 && da.assertOptions(r, {
        silentJSONParsing: wn.transitional(wn.boolean),
        forcedJSONParsing: wn.transitional(wn.boolean),
        clarifyTimeoutError: wn.transitional(wn.boolean),
        legacyInterceptorReqResOrdering: wn.transitional(wn.boolean)
      }, !1), s != null && (re.isFunction(s) ? n.paramsSerializer = {
        serialize: s
      } : da.assertOptions(s, {
        encode: wn.function,
        serialize: wn.function
      }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), da.assertOptions(n, {
        baseUrl: wn.spelling("baseURL"),
        withXsrfToken: wn.spelling("withXSRFToken")
      }, !0), n.method = (n.method || this.defaults.method || "get")
      .toLowerCase();
    let i = o && re.merge(o.common, o[n.method]);
    o && re.forEach(["delete", "get", "head", "post", "put", "patch", "common"], m => {
      delete o[m]
    }), n.headers = gn.concat(i, o);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(E) {
      if (typeof E.runWhen == "function" && E.runWhen(n) === !1) return;
      c = c && E.synchronous;
      const b = n.transitional || _d;
      b && b.legacyInterceptorReqResOrdering ? a.unshift(E.fulfilled, E.rejected) : a.push(E.fulfilled, E.rejected)
    });
    const l = [];
    this.interceptors.response.forEach(function(E) {
      l.push(E.fulfilled, E.rejected)
    });
    let u, d = 0,
      g;
    if (!c) {
      const m = [I_.bind(this), void 0];
      for (m.unshift(...a), m.push(...l), g = m.length, u = Promise.resolve(n); d < g;) u = u.then(m[d++], m[d++]);
      return u
    }
    g = a.length;
    let p = n;
    for (; d < g;) {
      const m = a[d++],
        E = a[d++];
      try {
        p = m(p)
      } catch (b) {
        E.call(this, b);
        break
      }
    }
    try {
      u = I_.call(this, p)
    } catch (m) {
      return Promise.reject(m)
    }
    for (d = 0, g = l.length; d < g;) u = u.then(l[d++], l[d++]);
    return u
  }
  getUri(t) {
    t = Ss(this.defaults, t);
    const n = Ov(t.baseURL, t.url, t.allowAbsoluteUrls);
    return yv(n, t.params, t.paramsSerializer)
  }
};
re.forEach(["delete", "get", "head", "options"], function(t) {
  bs.prototype[t] = function(n, r) {
    return this.request(Ss(r || {}, {
      method: t,
      url: n,
      data: (r || {})
        .data
    }))
  }
});
re.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, a) {
      return this.request(Ss(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }))
    }
  }
  bs.prototype[t] = n(), bs.prototype[t + "Form"] = n(!0)
});
let UL = class Pv {
  constructor(t) {
    if (typeof t != "function") throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o
    });
    const r = this;
    this.promise.then(s => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0;) r._listeners[o](s);
      r._listeners = null
    }), this.promise.then = s => {
      let o;
      const i = new Promise(a => {
          r.subscribe(a), o = a
        })
        .then(s);
      return i.cancel = function() {
        r.unsubscribe(o)
      }, i
    }, t(function(o, i, a) {
      r.reason || (r.reason = new Ri(o, i, a), n(r.reason))
    })
  }
  throwIfRequested() {
    if (this.reason) throw this.reason
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t]
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1)
  }
  toAbortSignal() {
    const t = new AbortController,
      n = r => {
        t.abort(r)
      };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal
  }
  static source() {
    let t;
    return {
      token: new Pv(function(s) {
        t = s
      }),
      cancel: t
    }
  }
};

function jL(e) {
  return function(n) {
    return e.apply(null, n)
  }
}

function HL(e) {
  return re.isObject(e) && e.isAxiosError === !0
}
const cu = {
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
Object.entries(cu)
  .forEach(([e, t]) => {
    cu[t] = e
  });

function Cv(e) {
  const t = new bs(e),
    n = lv(bs.prototype.request, t);
  return re.extend(n, bs.prototype, t, {
    allOwnKeys: !0
  }), re.extend(n, t, null, {
    allOwnKeys: !0
  }), n.create = function(s) {
    return Cv(Ss(e, s))
  }, n
}
const wt = Cv(Si);
wt.Axios = bs;
wt.CanceledError = Ri;
wt.CancelToken = UL;
wt.isCancel = Av;
wt.VERSION = wv;
wt.toFormData = fc;
wt.AxiosError = $e;
wt.Cancel = wt.CanceledError;
wt.all = function(t) {
  return Promise.all(t)
};
wt.spread = jL;
wt.isAxiosError = HL;
wt.mergeConfig = Ss;
wt.AxiosHeaders = gn;
wt.formToJSON = e => bv(re.isHTMLForm(e) ? new FormData(e) : e);
wt.getAdapter = Rv.getAdapter;
wt.HttpStatusCode = cu;
wt.default = wt;
const {
  Axios: BM,
  AxiosError: qL,
  CanceledError: UM,
  isCancel: jM,
  CancelToken: HM,
  VERSION: qM,
  all: WM,
  Cancel: GM,
  isAxiosError: KM,
  spread: YM,
  toFormData: zM,
  AxiosHeaders: WL,
  HttpStatusCode: XM,
  formToJSON: JM,
  getAdapter: QM,
  mergeConfig: ZM
} = wt;
var fs = (e => (e.GET = "GET", e.POST = "POST", e.PUT = "PUT", e.PATCH = "PATCH", e.DELETE = "DELETE", e))(fs || {}),
  it = (e => (e[e.OK = 200] = "OK", e[e.CREATED = 201] = "CREATED", e[e.ACCEPTED = 202] = "ACCEPTED", e[e.BAD_REQUEST = 400] = "BAD_REQUEST", e[e.UNAUTHORIZED = 401] = "UNAUTHORIZED", e[e.FORBIDDEN = 403] = "FORBIDDEN", e[e.NOT_FOUND = 404] = "NOT_FOUND", e[e.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", e[e.CONFLICT = 409] = "CONFLICT", e[e.GONE = 410] = "GONE", e[e.PAGE_EXPIRED = 419] = "PAGE_EXPIRED", e[e.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", e[e.LOGIN_TIMEOUT = 440] = "LOGIN_TIMEOUT", e[e.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", e[e.BAD_GATEWAY = 502] = "BAD_GATEWAY", e[e.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", e[e.UNKOWN = 0] = "UNKOWN", e))(it || {});
class gd {
  constructor(t) {
    this.options = t, this.headers = {}, this.queryParams = {}, this.pathParams = {}, this.middlewares = [], this.client = wt.create({})
  }
  useHeader(t) {
    this.headers = {
      ...this.headers,
      ...t
    }
  }
  useAcceptJSON() {
    this.headers.Accept = "application/json"
  }
  useContentTypeJSON(t = !1) {
    this.headers["Content-Type"] = `application/json${t?";charset=utf-8":""}`
  }
  useApplePayFlag() {
    this.headers["X-Apple-Pay"] = String(NI())
  }
  usePathParameter(t) {
    this.pathParams = {
      ...this.pathParams,
      ...t
    }
  }
  useQueryParameter(t, n) {
    this.queryParams[t] = String(n)
  }
  useCancelToken(t) {
    this.cancelToken = t
  }
  useMiddleware(t) {
    this.middlewares.push(t)
  }
  preparePath(t, ...n) {
    for (const r of n)
      if (r !== void 0)
        for (const s in r) r[s] !== void 0 && (t = t.replace(`{${s}}`, encodeURIComponent(r[s])));
    return t
  }
  prepareHeaders(...t) {
    const n = new WL;
    for (const r of t)
      if (r !== void 0)
        for (const s in r) n.set(s, r[s]);
    return n
  }
  prepareQueryParameters(...t) {
    const n = {};
    for (const r of t)
      if (r !== void 0)
        for (const s in r) r[s] !== void 0 && (n[s] = String(r[s]));
    return n
  }
  async request(t, n, r, s, o, i, a) {
    const c = this.prepareHeaders(this.options.headers, this.headers, i),
      l = this.prepareQueryParameters(this.options.queryParams, this.queryParams, s);
    c.has("Content-Type") && !o && (o = {});
    let u = ys({
      baseURL: this.options.baseUrl
    }, this.options?.requestOptions ?? {});
    u = ys(u, a ?? {}), u = ys(u, {
      url: this.preparePath(t, this.pathParams, n),
      method: r ?? fs.GET,
      params: l,
      headers: c,
      data: o,
      cancelToken: this.cancelToken
    });
    for (const d of [...this.options.middlewares ?? [], ...this.middlewares]) u = await d.beforeRequest(u);
    try {
      let d = await this.client.request(u),
        g = {
          ...d,
          statusCode: d.status,
          status: Object.keys(it)[Object.values(it)
            .indexOf(d.status)] ?? it.UNKOWN
        };
      for (const p of [...this.options.middlewares ?? [], ...this.middlewares]) g = await p.afterSuccessfulRequest(u, g);
      return g
    } catch (d) {
      let g;
      d instanceof qL && (g = d);
      let p = {
        statusCode: g?.response?.status ?? 500,
        status: g ? Object.keys(it)[Object.values(it)
          .indexOf(g?.response?.status ?? 0)] ?? it.UNKOWN : it.UNKOWN,
        isRequestError: g !== void 0,
        isAxiosError: g !== void 0,
        error: g ?? d,
        data: g?.response?.data
      };
      for (const m of [...this.options.middlewares ?? [], ...this.middlewares]) try {
        return await m.afterFailedRequest(u, p)
      } catch (E) {
        p = E
      }
      throw p
    }
  }
  async get(t) {
    return this.request(t.path, t.pathParams, fs.GET, t.queryParams, void 0, t.headers, t.requestOptions)
  }
  async post(t) {
    return this.request(t.path, t.pathParams, fs.POST, t.queryParams, t.body, t.headers, t.requestOptions)
  }
  async put(t) {
    return this.request(t.path, t.pathParams, fs.PUT, t.queryParams, t.body, t.headers, t.requestOptions)
  }
  async patch(t) {
    return this.request(t.path, t.pathParams, fs.PATCH, t.queryParams, t.body, t.headers, t.requestOptions)
  }
  async delete(t) {
    return this.request(t.path, t.pathParams, fs.DELETE, t.queryParams, t.body, t.headers, t.requestOptions)
  }
}
class Ls {
  async beforeRequest(t) {
    return t
  }
  async afterSuccessfulRequest(t, n) {
    return n
  }
  async afterFailedRequest(t, n) {
    throw n
  }
}
class GL extends Ls {
  constructor(t) {
    super(), this.options = t
  }
  async afterFailedRequest(t, n) {
    throw n.isAxiosError || await this.options.callback(n, t), n
  }
}
const Mn = (e, t) => {
  if (Array.isArray(t) || (t = [t]), t.includes(e)) return !0;
  const n = it[e];
  return !!t.includes(n)
};
class fo extends Ls {
  constructor(t) {
    super(), this.options = t
  }
  async afterSuccessfulRequest(t, n) {
    return Mn(n.status, this.options.responseStatus) && await this.options.callback(null, n.status, t, n), n
  }
  async afterFailedRequest(t, n) {
    throw n.isAxiosError && Mn(n.status, this.options.responseStatus) && await this.options.callback(n, n.status, t), n
  }
}
class KL extends Ls {
  async afterFailedRequest(t, n) {
    throw {
      ...n,
      messages: n?.data?.messages,
      flowHint: n?.data?.flowHint
    }
  }
}
class YL extends gd {
  constructor(t) {
    const n = {
      baseUrl: "/cart-api/v3"
    };
    super(n), this.useAcceptJSON(), this.useMiddleware(new KL), t?.forEach(r => {
      this.useMiddleware(r)
    })
  }
  buildParameters(t) {
    const n = {},
      r = {};
    return t.cartId && (n.cartId = t.cartId), t.language && (n.language = t.language), t.country && (r.country = t.country), t.zoneId !== void 0 && (n.zoneId = t.zoneId), {
      queryParams: n,
      pathParams: r
    }
  }
  async getCart(t, n, r) {
    if (!t.cartId) {
      if (n) return await this.get({
        path: "/cart/customer"
      });
      console.error("cartId is missing for request GET /cart/{country}");
      return
    }
    const {
      queryParams: s,
      pathParams: o
    } = this.buildParameters(t);
    return await this.get({
      path: "/cart/{country}",
      queryParams: {
        ...s,
        isMergeEnabled: r !== !1
      },
      pathParams: o
    })
  }
  async updateCartItem(t, n) {
    if (!t.cartId) throw new Error("cartId is missing for request PATCH /cart/{country}");
    const {
      queryParams: r,
      pathParams: s
    } = this.buildParameters(t);
    return await this.patch({
      path: "/cart/{country}",
      queryParams: r,
      pathParams: s,
      body: n
    })
  }
  async addCartItem(t, n) {
    const {
      queryParams: r,
      pathParams: s
    } = this.buildParameters(t);
    return await this.post({
      path: "/cart/list/{country}",
      queryParams: r,
      pathParams: s,
      body: n
    })
  }
  async removeCartItem(t, n, r) {
    if (!t.cartId) throw new Error("cartId is missing for request DELETE /cart/{country}");
    const {
      queryParams: s,
      pathParams: o
    } = this.buildParameters(t);
    return await this.delete({
      path: "/cart/{country}",
      queryParams: {
        ...s,
        erpNumber: n
      },
      pathParams: o,
      requestOptions: r
    })
  }
  async applyCoupon(t, n, r, s, o) {
    if (!t.cartId) throw new Error("cartId is missing for request POST /coupon/{country}");
    const {
      queryParams: i,
      pathParams: a
    } = this.buildParameters(t);
    return await this.post({
      path: "/coupon/{country}",
      body: {
        couponCode: n,
        couponCheckbox: r,
        captchaResponse: s
      },
      queryParams: i,
      pathParams: a,
      requestOptions: o
    })
  }
  async removeCoupon(t, n) {
    if (!t.cartId) throw new Error("cartId is missing for request DELETE /coupon/{country}");
    const {
      queryParams: r,
      pathParams: s
    } = this.buildParameters(t);
    return await this.delete({
      path: "/coupon/{country}",
      queryParams: r,
      pathParams: s,
      requestOptions: n
    })
  }
}
var zL = (e => (e.NO_CART_ID = "NO_CART_ID", e))(zL || {});
class XL extends Ls {
  async beforeRequest(t) {
    if (Object.hasOwn(t.params, "cartId") && !t.params.cartId) {
      const n = `No cartId found for request ${t?.method?.toString()}, ${t?.url?.toString()}`;
      throw console.info(n), {
        errorCode: "NO_CART_ID"
      }
    }
    return t
  }
  async afterFailedRequest(t, n) {
    throw {
      ...n,
      messages: n?.data?.messages,
      flowHint: n?.data?.flowHint
    }
  }
}
class _c extends gd {
  constructor(t) {
    const n = {
      baseUrl: "/checkout-api/v3"
    };
    super(n), this.useAcceptJSON(), this.useContentTypeJSON(), this.useApplePayFlag(), this.useMiddleware(new XL), t?.forEach(r => {
      this.useMiddleware(r)
    })
  }
  buildParameters(t) {
    const n = {},
      r = {};
    t.country && (r.country = t.country, delete t.country);
    for (const [s, o] of Object.entries(t)) n[s] = o;
    return {
      queryParams: n,
      pathParams: r
    }
  }
  cleanupBirthdateField(t) {
    if (!(t?.day === 0 && t?.month === 0 && t?.year === 0)) return t
  }
  async getAddress(t) {
    const {
      queryParams: n,
      pathParams: r
    } = this.buildParameters(t);
    return await this.get({
      path: "/address/{country}",
      queryParams: n,
      pathParams: r
    })
  }
  async patchDeliveryAddress(t, n, r) {
    const {
      queryParams: s,
      pathParams: o
    } = this.buildParameters(t);
    return r = r || {}, r.baseURL = "/checkout-api/v4", await this.patch({
      path: "/address/delivery/{country}",
      body: {
        addressId: n
      },
      queryParams: s,
      pathParams: o,
      requestOptions: r
    })
  }
  async postDeliveryAddress(t, n, r) {
    const {
      queryParams: s,
      pathParams: o
    } = this.buildParameters(t);
    return await this.post({
      path: "/address/delivery/{country}",
      body: n,
      queryParams: s,
      pathParams: o,
      requestOptions: r
    })
  }
  async putInvoiceAddress(t, n, r) {
    const {
      queryParams: s,
      pathParams: o
    } = this.buildParameters(t);
    return n.birthDate = this.cleanupBirthdateField(n?.birthDate), await this.put({
      path: "/address/invoice/{country}",
      body: n,
      queryParams: s,
      pathParams: o,
      requestOptions: r
    })
  }
  async postAvailableCarrierOptions(t, n) {
    const {
      queryParams: r,
      pathParams: s
    } = this.buildParameters(t);
    return await this.post({
      path: "/address/carrier/{country}",
      queryParams: r,
      pathParams: s,
      body: n
    })
  }
  async postCheckoutCart(t, n) {
    const {
      queryParams: r,
      pathParams: s
    } = this.buildParameters(t);
    return await this.post({
      path: "/checkout/cart/{country}",
      queryParams: r,
      pathParams: s,
      body: n
    })
  }
  async getConfirmation(t) {
    return await this.get({
      path: "/confirmation",
      queryParams: {
        orderSnapshotId: t
      }
    })
  }
  async getFlow(t) {
    const {
      queryParams: n,
      pathParams: r
    } = this.buildParameters(t);
    return await this.get({
      path: "/flow/{country}",
      queryParams: n,
      pathParams: r
    })
  }
  async postGuestCheckout(t, n, r) {
    const {
      pathParams: s
    } = this.buildParameters(t);
    return await this.post({
      path: "/user/guest/{country}",
      pathParams: s,
      body: n,
      requestOptions: r
    })
  }
  async postGuestRegistration(t, n) {
    const {
      queryParams: r,
      pathParams: s
    } = this.buildParameters(t);
    return await this.post({
      path: "/user/guest-registration/{country}",
      queryParams: r,
      pathParams: s,
      body: n
    })
  }
  async getCheckoutOneClick(t) {
    const {
      queryParams: n,
      pathParams: r
    } = this.buildParameters(t);
    return await this.get({
      path: "/one-click/{country}",
      queryParams: n,
      pathParams: r
    })
  }
  async postCheckoutOneClick(t, n) {
    const {
      queryParams: r,
      pathParams: s
    } = this.buildParameters(t);
    return await this.post({
      path: "/one-click/{country}",
      queryParams: r,
      pathParams: s,
      body: n
    })
  }
  async getPayment(t) {
    const {
      queryParams: n,
      pathParams: r
    } = this.buildParameters(t);
    return await this.get({
      path: "/payment/{country}",
      queryParams: n,
      pathParams: r
    })
  }
  async postPayment(t, n, r) {
    const {
      queryParams: s
    } = this.buildParameters(t);
    return await this.post({
      path: "/payment",
      body: n,
      queryParams: s,
      requestOptions: r
    })
  }
  async postCheckoutSession(t) {
    const {
      queryParams: n,
      pathParams: r
    } = this.buildParameters(t);
    return await this.post({
      path: "/init/{country}",
      queryParams: n,
      pathParams: r
    })
  }
  async postCheckoutSessionFlashsales(t) {
    const {
      queryParams: n,
      pathParams: r
    } = this.buildParameters(t);
    return await this.post({
      path: "/init/flash-sales/{country}",
      queryParams: n,
      pathParams: r
    })
  }
  async getSummary(t) {
    const {
      queryParams: n,
      pathParams: r
    } = this.buildParameters(t);
    return await this.get({
      path: "/summary/{country}",
      queryParams: n,
      pathParams: r
    })
  }
  async postSummary(t, n, r) {
    const {
      queryParams: s,
      pathParams: o
    } = this.buildParameters(t);
    return await this.post({
      path: "/summary/{country}",
      queryParams: s,
      pathParams: o,
      body: n,
      requestOptions: r
    })
  }
  async postGiftCard(t, n, r) {
    const {
      queryParams: s,
      pathParams: o
    } = this.buildParameters(t);
    return await this.post({
      path: "/giftcard/{country}",
      queryParams: s,
      pathParams: o,
      body: n,
      requestOptions: r
    })
  }
  async removeGiftCard(t, n) {
    const {
      queryParams: r,
      pathParams: s
    } = this.buildParameters(t);
    return await this.delete({
      path: "/giftcard/{country}",
      queryParams: r,
      pathParams: s,
      requestOptions: n
    })
  }
}
class JL extends gd {
  constructor(t) {
    const n = {
      baseUrl: "/p/api"
    };
    super(n), this._options = t, this._options?.middlewares?.forEach(r => {
      this.useMiddleware(r)
    })
  }
  async getGeneralTerms(t, n, r) {
    return await this.get({
      path: "/digital/general-terms/{brand}/{country}/{language}",
      pathParams: {
        brand: t,
        country: n,
        language: r
      }
    })
  }
  async getRedemptionConditions(t, n, r) {
    return await this.get({
      path: "/digital/redemption-conditions/{brand}/{country}/{language}",
      pathParams: {
        brand: t,
        country: n,
        language: r
      }
    })
  }
}
class QL extends Ls {
  mapMessageToLevel(t) {
    switch (t) {
      case "ERROR":
        return vt.ERROR;
      case "INFO":
        return vt.INFO;
      case "WARNING":
        return vt.WARNING
    }
    return vt.INFO
  }
  handleMessages(t) {
    const {
      addAppMessage: n,
      defaultMessageLocation: r
    } = Yn();
    for (const s of t) n({
      message: s?.defaultMessage,
      messageTranslationKey: s?.translationKey,
      level: this.mapMessageToLevel(s?.level),
      location: r.value,
      origin: pr.API_MESSAGE,
      buttonText: ""
    })
  }
  async afterSuccessfulRequest(t, n) {
    return n?.data?.messages && Array.isArray(n?.data?.messages) && this.handleMessages(n?.data?.messages), n
  }
  async afterFailedRequest(t, n) {
    throw n?.data?.messages && Array.isArray(n?.data?.messages) && this.handleMessages(n?.data?.messages), n
  }
}
const mc = new QL,
  Lv = () => Ut("otc-mobile-flash-sales-checkout") != null,
  Dv = () => Ut("otc-mobile-checkout") != null,
  Ds = () => Lv() ? yt.LIDL_PLUS : Dv() ? yt.MOBILE_APP : yt.WEB,
  ZL = (e = window) => !!(e?.__pca?.platform === "app-checkout" || Lv() || Dv()),
  eD = e => ({
    salesChannel: e.query?.salesChannel?.toString(),
    track: e.query?.track?.toString(),
    gaDataSource: e.query?.gaDataSource?.toString(),
    gaClientID: e.query?.gaClientID?.toString()
  });
var Ln = (e => (e.WEB = "01", e.IOS = "02", e.CUSTOMER_SERVICE = "03", e.ANDROID = "05", e.ONE_APP_ANDROID = "06", e.FLASH_SALES_ANDROID = "06_FS", e.ONE_APP_IOS = "07", e.FLASH_SALES_IOS = "07_FS", e))(Ln || {});
const tD = "mobile_checkout_flow",
  kv = (e, t) => {
    let n;
    const r = Object.keys(Ln)
      .find(s => s === e);
    if (r && (n = Ln[r]), !n) {
      const s = Object.values(Ln)
        .indexOf(e);
      n = Ln[Object.keys(Ln)[s]]
    }
    n || (n = "01"), Yr(tD, ["02", "05", "06", "06_FS", "07", "07_FS"].includes(n)
      .toString())
  };

function on(e, t) {
  t ? window.location.replace(e) : window.location.href = e
}

function nD() {
  on("//lidl://genericerror")
}

function eF() {
  on("//lidl://onlineStartpage")
}
const ka = "session",
  xv = "lost",
  Nv = "/user-api/login",
  vd = "authToken",
  $v = (e, t) => {
    const n = new URLSearchParams;
    if (n.set("redirect", encodeURI(`${window.location.origin}/otc/checkout/flow${window.location.search}`)), n.set("step", e), Ds() === yt.MOBILE_APP) {
      const r = eD(t.currentRoute.value);
      r.track && r.salesChannel && (n.set("track", r.track), n.set("gaClientID", r.gaClientID), n.set("gaDataSource", r.gaDataSource), n.set("salesChannel", r.salesChannel))
    }
    return `${Nv}?${n.toString()}`
  },
  tF = e => {
    on($v("register", e))
  },
  rD = e => {
    on($v("login", e))
  },
  sD = e => !!e && !!e[ka] && e[ka] === xv,
  Vv = () => {
    const e = Ut(vd),
      t = HI(e);
    return !e || !t ? !1 : !!Qt(t?.payload?.exp * 1e3)
      .isBefore(Qt())
  },
  oD = e => {
    const t = `?redirect=${encodeURIComponent(e)}`;
    return `${Nv}${t}`
  },
  Mv = () => {
    if (Vv()) return oD("/otc/cart?refresh");
    const e = new URLSearchParams;
    return e.set(ka, xv), `/otc/cart?${e.toString()}`
  },
  iD = () => !!Ut(vd),
  hc = new fo({
    responseStatus: [it.PAGE_EXPIRED],
    async callback() {
      switch (Ds()) {
        case yt.MOBILE_APP:
        case yt.LIDL_PLUS:
          nD();
          return;
        case yt.WEB:
          on(Mv(), !0)
      }
    }
  }),
  gc = new GL({
    async callback(e) {
      throw e
    }
  });
class aD extends Ls {
  redirectToFlowHint(t) {
    String(t)
      .toUpperCase() === "SUMMARY" ? window.location.href = "/otc/checkout/summary" : String(t)
      .toUpperCase() === "ADDRESS" ? window.location.href = "/otc/checkout/delivery_options" : String(t)
      .toUpperCase() === "PAYMENT" && (window.location.href = "/otc/checkout/payment")
  }
  async afterSuccessfulRequest(t, n) {
    return n?.data?.flowHint && this.redirectToFlowHint(n?.data?.flowHint), n
  }
  async afterFailedRequest(t, n) {
    throw n?.data?.flowHint && this.redirectToFlowHint(n?.data?.flowHint), n
  }
}
const vc = new aD,
  Fv = {
    origin: pr.API_MESSAGE,
    level: vt.WARNING,
    messageTranslationKey: "app.message.paymentCancelled",
    messageTranslationParam: null,
    location: xt.TOAST
  },
  cD = {
    origin: pr.API_MESSAGE,
    level: vt.WARNING,
    messageTranslationKey: "app.message.paymentFailed",
    messageTranslationParam: null,
    location: xt.TOAST
  },
  R_ = {
    origin: pr.API_MESSAGE,
    level: vt.WARNING,
    messageTranslationKey: "app.message.paymentFailed",
    messageTranslationParam: null,
    location: xt.TOAST
  },
  es = {
    origin: pr.CUSTOM,
    level: vt.INFO,
    messageTranslationKey: "app.message.invalidSessionMessage.content",
    messageTranslationParam: null,
    location: xt.TOAST
  },
  Bv = {
    origin: pr.CUSTOM,
    level: vt.INFO,
    messageTranslationKey: "app.message.sessionRenewed.content",
    messageTranslationParam: null,
    location: xt.TOAST
  },
  lD = {
    origin: pr.CUSTOM,
    level: vt.WARNING,
    messageTranslationKey: "pages.cartView.articleReservationInfo.message",
    messageTranslationParam: null,
    isClosable: !0,
    location: xt.PAGE
  },
  uD = {
    origin: pr.API_MESSAGE,
    level: vt.WARNING,
    messageTranslationKey: "widgets.genericErrorMessage",
    messageTranslationParam: null,
    location: xt.TOAST
  },
  Ed = new fo({
    responseStatus: [it.UNAUTHORIZED],
    async callback(e) {
      const {
        default: t
      } = await _(async () => {
        const {
          default: s
        } = await Promise.resolve()
          .then(() => Ic);
        return {
          default: s
        }
      }, void 0), {
        addPreservedAppMessage: n
      } = Yn();
      switch (Ds()) {
        case yt.MOBILE_APP:
        case yt.LIDL_PLUS:
          n(es), await t.push({
            name: It.LOGIN
          });
          return;
        case yt.WEB:
        default:
          if (Ut(vd)) {
            n(Bv);
            const s = new URLSearchParams(window.location.search);
            s.set("refresh", "true");
            const o = s.toString();
            throw on(`/user-api/login?redirect=${encodeURIComponent(window.location.pathname+(o?`?${o}`:""))}`), new ni("checkoutService | Redirecting to user-api due to invalid authToken cookie", 401)
          }
          throw n({
            ...es,
            location: xt.PAGE
          }), await t.push({
            name: It.LOGIN
          }), new ni("checkoutService | Redirecting to login-page due to missing authToken cookie", 401)
      }
    }
  }),
  us = new YL([gc, vc, mc, Ed, hc]),
  dD = new fo({
    responseStatus: [it.FORBIDDEN],
    async callback() {
      const {
        default: e
      } = await _(async () => {
        const {
          default: r
        } = await Promise.resolve()
          .then(() => Ic);
        return {
          default: r
        }
      }, void 0), {
        addPreservedAppMessage: t
      } = Yn();
      switch (Ds()) {
        case yt.MOBILE_APP:
        case yt.LIDL_PLUS:
          t(es), await e.push({
            name: It.LOGIN
          });
          return;
        case yt.WEB:
        default: {
          t(Bv);
          const r = new URLSearchParams(window.location.search);
          r.set("refresh", "true");
          const s = r.toString();
          on(`/user-api/login?redirect=${encodeURIComponent(window.location.pathname+(s?`?${s}`:""))}&maxAge=1800`)
        }
      }
      throw new ni("checkoutService | Redirecting to user-api due to invalid authToken (required threshold not met)", 403)
    }
  }),
  fD = new fo({
    responseStatus: [it.LOGIN_TIMEOUT],
    async callback() {
      const {
        default: e
      } = await _(async () => {
        const {
          default: r
        } = await Promise.resolve()
          .then(() => Ic);
        return {
          default: r
        }
      }, void 0), {
        addPreservedAppMessage: t
      } = Yn();
      switch (Ds()) {
        case yt.MOBILE_APP:
        case yt.LIDL_PLUS:
          t(es), await e.push({
            name: It.LOGIN
          });
          return;
        case yt.WEB:
        default:
          t({
            ...es,
            location: xt.PAGE
          }), await e.push({
            name: It.LOGIN
          })
      }
      throw new ni("checkoutService | Redirecting to login page due to invalid ldi-customertoken cookie", 440)
    }
  });
class pD extends Ls {
  async afterFailedRequest(t, n) {
    throw n.statusCode === it.NOT_FOUND && !n.error?.request?.responseURL?.includes("v4") && on("/otc/cart"), n
  }
}
const Uv = new pD,
  _D = new fo({
    responseStatus: [it.REQUEST_TIMEOUT],
    async callback() {
      const {
        default: e
      } = await _(async () => {
        const {
          default: r
        } = await Promise.resolve()
          .then(() => Ic);
        return {
          default: r
        }
      }, void 0), {
        addPreservedAppMessage: t
      } = Yn();
      switch (Ds()) {
        case yt.MOBILE_APP:
        case yt.LIDL_PLUS:
          t(es), await e.push({
            name: It.LOGIN
          });
          return;
        case yt.WEB:
        default:
          t({
            ...es,
            location: xt.PAGE
          }), await e.push({
            name: It.LOGIN
          })
      }
      throw new ni("checkoutService | Redirecting to login page due to invalid lidl_checkout cookie", 440)
    }
  }),
  jv = [gc, vc, mc, hc, Uv, dD, fD, _D],
  Bt = new _c([Ed, ...jv]),
  mD = new _c([...jv]),
  w_ = new JL;
class xe {
  static GENERIC_ERROR_REDIRECT_ROUTE = "//lidl://genericerror";
  static PARAM_SALES_CHANNEL = "salesChannel";
  static PARAM_TRACKING_CONSENT = "track";
  static PARAM_CLIENT_ID = "gaClientID";
  static PARAM_DATA_SOURCE = "gaDataSource";
  static SALES_CHANNEL_IOS = "02";
  static SALES_CHANNEL_IOS_ONEAPP = "07";
  static SALES_CHANNEL_ANDROID = "05";
  static SALES_CHANNEL_ANDROID_ONEAPP = "06";
  static MOBILE_COOKIE = "otc-mobile-checkout";
  static CART_ID_COOKIE = "CART_ID";
  static COOKIE_NAME = "otc-mobile-checkout-parameters";
  static PARAM_CART_ID = "cartId";
  static PARAM_AD_SESSION_ID = "adSessionId";
  static CHECKOUT_API_SALES_CHANNEL_COOKIE = "sales_channel";
  static CHECKOUT_SUCCESS_EVENT_NAME = "appCheckoutSuccess";
  static isAppCheckout() {
    return Ut(xe.MOBILE_COOKIE) != null
  }
  static setMobileCheckoutCookie(t) {
    Yr(this.MOBILE_COOKIE, !0), Yr(this.CART_ID_COOKIE, t)
  }
  static setAdSessionIdCookie(t) {
    Yr(xe.PARAM_AD_SESSION_ID, t, "730")
  }
  static getSalesChannel() {
    const t = xe.getMobileParametersCookie();
    return t && t.salesChannel ? t.salesChannel : void 0
  }
  static handleMobileParametersInCheckout(t) {
    const n = xe.getMobileParametersCookie();
    n && xe.setMobileParametersToQueryString(t, n)
  }
  static handleTargetBlankLinks(t, n) {
    xe.isAppCheckout() && n && [xe.SALES_CHANNEL_IOS, xe.SALES_CHANNEL_IOS_ONEAPP].includes(n) && t.isReady()
      .then(() => xe.rewriteTargetBlankLinks())
      .catch(r => rn.error(r))
  }
  static storeMobileQueryParamsInCookie(t) {
    const n = {
      [xe.PARAM_CLIENT_ID]: t[xe.PARAM_CLIENT_ID] || null,
      [xe.PARAM_DATA_SOURCE]: t[xe.PARAM_DATA_SOURCE] || null,
      [xe.PARAM_CART_ID]: t[xe.PARAM_CART_ID] || null,
      [xe.PARAM_SALES_CHANNEL]: t[xe.PARAM_SALES_CHANNEL] || null,
      [xe.PARAM_TRACKING_CONSENT]: t[xe.PARAM_TRACKING_CONSENT] || null
    };
    return kv(String(n[xe.PARAM_SALES_CHANNEL])), xe.setMobileParametersCookie(n), xe.setCheckoutApiSalesChannelCookie(t[xe.PARAM_SALES_CHANNEL]), t[xe.PARAM_AD_SESSION_ID] && xe.setAdSessionIdCookie(t[xe.PARAM_AD_SESSION_ID]), n
  }
  static buildCheckoutRedirectUrl(t, n) {
    try {
      const r = new URLSearchParams(t)
        .toString();
      return `${n}?${r}`
    } catch {
      return n
    }
  }
  static clearExistingMobileCookieOnHandover() {
    try {
      p0(xe.COOKIE_NAME)
    } catch (t) {
      rn.error("failed to clear session on handover", t)
    }
  }
  static emitCheckoutSuccessEvent() {
    window.dispatchEvent(new CustomEvent(xe.CHECKOUT_SUCCESS_EVENT_NAME))
  }
  static setMobileParametersCookie(t) {
    try {
      Yr(xe.COOKIE_NAME, JSON.stringify(t))
    } catch (n) {
      rn.error("failed to set mobile parameters", n)
    }
  }
  static setCheckoutApiSalesChannelCookie(t) {
    try {
      Yr(xe.CHECKOUT_API_SALES_CHANNEL_COOKIE, t)
    } catch (n) {
      rn.error("failed to set mobile parameters", n)
    }
  }
  static getMobileParametersCookie() {
    const t = Ut(xe.COOKIE_NAME);
    return t ? JSON.parse(t) : null
  }
  static setMobileParametersToQueryString(t, n) {
    try {
      const r = {
        ...t.currentRoute.query
      };
      r[xe.PARAM_CLIENT_ID] = n[xe.PARAM_CLIENT_ID], r[xe.PARAM_DATA_SOURCE] = n[xe.PARAM_DATA_SOURCE], r[xe.PARAM_CART_ID] = n[xe.PARAM_CART_ID], r[xe.PARAM_TRACKING_CONSENT] = n[xe.PARAM_TRACKING_CONSENT], r[xe.PARAM_SALES_CHANNEL] = n[xe.PARAM_SALES_CHANNEL], t.replace({
        query: r
      })
    } catch (r) {
      rn.error(r)
    }
  }
  static rewriteTargetBlankLinks() {
    try {
      const t = new RegExp(/(http:\/\/)|(https:\/\/)/);
      document.querySelectorAll('[target="_blank"][href]')
        .forEach(n => {
          t.test(n.href) && (n.href = n.href.replace(t, "blanks://"))
        }), rn.info("app context: handling links with target='_blank'")
    } catch (t) {
      rn.error("app context: no target='_blank' links found", t)
    }
  }
}
const nF = (e, t) => ({
    ...e,
    toString: r => {
      let o = "";
      return r === "named" && (o += `${e?.firstName} ${e?.lastName}
`), o += `${e.street} ${e.houseNumber}
${e.postalCode} ${e.city}`, t.locale === "fr-FR" && (o = `${e.houseNumber} ${e.street}
${e.postalCode} ${e.city}`), r === "locality" ? o : `
      ${o}${e.additionalInformation?`
${e.additionalInformation}`:""}${r==="full"&&e.countryCode?`
${t.t(`country.name.${e.countryCode}`)}`:""}
    `
    }
  }),
  rF = (e, t) => ({
    locale: e.locale,
    t
  });

function sF(e) {
  return {
    firstName: e?.firstName,
    lastName: e?.lastName,
    postalCode: e?.postalCode,
    city: e?.city,
    street: e?.street,
    houseNumber: e?.streetNumber,
    additionalInformation: e?.additionalInformation,
    countryCode: e?.countryCode,
    lidlStore: !1,
    name: "",
    storeTimes: []
  }
}

function hD(e, t) {
  let n = !1;
  return !e && !t ? !0 : (e && t && (n = e.day === t.day && e.month === t.month && e.year === t.year), n)
}

function gD(e) {
  return !!e.firstName && !!e.lastName && !!e.city && !!e.countryCode && !!e.postalCode && !!e.street && !!e.streetNumber && !!e.salutation
}

function P_(e, t) {
  return e == null && t == null ? !0 : e === t
}

function vD(e, t) {
  return e == null && t == null ? !0 : e === t
}

function Kt(e, t) {
  return !e && !t ? !0 : e === t
}

function ED(e, t) {
  const {
    configs: n
  } = Ye();
  if (!e && !t) return !0;
  const r = e?.startsWith(n.value.phoneNumberPrefix) ? e?.slice(n.value.phoneNumberPrefix.length) : e,
    s = t?.startsWith(n.value.phoneNumberPrefix) ? t?.slice(n.value.phoneNumberPrefix.length) : t;
  return r?.replace(/\s/g, "") === s?.replace(/\s/g, "")
}

function oF(e, t) {
  return !e || !t ? !1 : Hv(e.address, t.address) && hD(e.birthDate, t.birthDate) && ED(e.phoneNumber, t.phoneNumber) && Kt(e.vatNumber, t.vatNumber)
}

function yD(e, t) {
  return !e || !t ? !1 : Hv(e.address, t.address) && Kt(e.addressType, t.addressType) && Kt(e.carrierNumber, t.carrierNumber) && Kt(e.carrierServiceCode, t.carrierServiceCode) && P_(e.latitude, t.latitude) && P_(e.longitude, t.longitude) && vD(e.lidlStore, t.lidlStore) && Kt(e.name, t.name) && Kt(e.postNumber, t.postNumber)
}

function Hv(e, t) {
  return !e || !t ? !1 : Kt(e.firstName, t.firstName) && Kt(e.lastName, t.lastName) && Kt(e.street, t.street) && Kt(e.streetNumber, t.streetNumber) && Kt(e.postalCode, t.postalCode) && Kt(e.countryCode, t.countryCode) && Kt(e.city, t.city) && Kt(e.additionalInformation, t.additionalInformation) && Kt(e.company, t.company) && Kt(e.salutation, t.salutation)
}
const C_ = {
    AT: "####",
    BE: "####",
    BG: "####",
    HR: "#####",
    CH: "####",
    CY: "####",
    CZ: "### ##",
    DK: "####",
    DE: "#####",
    EE: "#####",
    FI: "#####",
    FR: "#####",
    GI: "AA## #AA",
    GR: "### ##",
    HU: "####",
    IS: "###",
    IE: "A#* ****",
    IT: "#####",
    LV: "####",
    LI: "####",
    LT: "#####",
    LU: "####",
    MT: "AAA ####",
    NL: "#### AA",
    NO: "####",
    PL: "##-###",
    PT: "####-###",
    RO: "######",
    SK: "### ##",
    SI: "####",
    ES: "#####",
    SE: "### ##",
    GB: "********",
    DEFAULT: ""
  },
  iF = e => {
    const t = e.toUpperCase();
    return C_[t] ?? C_.DEFAULT
  },
  bD = "CART_ID";
crypto.randomUUID();
const dt = e => (e || Ut(bD)) ?? "",
  AD = (e, t) => !e || !t ? !1 : e?.address?.city === t?.address?.city && e?.address?.company === t?.address?.company && e?.address?.additionalInformation === t?.address?.additionalInformation && e?.address?.firstName === t?.address?.firstName && e?.address?.lastName === t?.address?.lastName && e?.address?.street === t?.address?.street && e?.address?.streetNumber === t?.address?.streetNumber && e?.address?.countryCode === t?.address?.countryCode && e?.address?.postalCode === t?.address?.postalCode && e?.address?.salutation === t?.address?.salutation,
  qv = e => {
    e = LI(e);
    let t = e.address?.salutation ?? "MR";
    return t === "COMPANY" && (t = "MR"), e?.address?.company != null && (e.address.company = null), {
      ...e,
      address: {
        ...e.address,
        salutation: t
      }
    }
  },
  Nt = () => {
    const {
      configs: e
    } = Ye();
    if (e.value.locale === "es-ES") return Ut(cv) ?? void 0
  },
  TD = async (e, t = document.head) => {
    t.appendChild(e), await new Promise((n, r) => {
      e.onload = () => {
        n()
      }, e.onerror = s => {
        r(s)
      }
    })
  };

function OD() {
  const e = at(),
    {
      configs: t
    } = Ye(),
    n = `https://www.google.com/recaptcha/api.js?render=${t.value.recaptchaSiteKey}`,
    r = ce(!1),
    s = q(() => e?.cart?.captchaRequired),
    o = async () => s.value ? await new Promise(a => {
      window.grecaptcha.ready(() => {
        window.grecaptcha.execute(t.value.recaptchaSiteKey, {
            action: "submit"
          })
          .then(c => {
            a(c)
          })
          .catch(() => a(""))
      }), setTimeout(() => {
        a("")
      }, 3e3)
    }) : "", i = async () => {
      if (!s.value) return;
      if (document.querySelector(`script[src="${n}"]`)) {
        r.value = !0;
        return
      }
      const a = document.createElement("script");
      a.src = n, a.dataset.cookieconsent = "ignore", await TD(a, document.head)
    };
  return Rt(async () => {
    await Ur(e.cart, "captchaRequired"), await i()
  }), {
    generateCaptchaToken: o,
    initializeRecaptchaScript: i
  }
}
var fn = (e => (e.BLACKLISTED = "blacklisted", e.CANCELLED = "cancelled", e.SUCCESS = "success", e.FAILED = "failed", e.ERROR = "error", e.PENDING = "pending", e))(fn || {});
const ID = {
    WEB: "WEB"
  },
  wi = Nn("invoice-address", () => {
    const e = Pi(),
      {
        configs: t
      } = Ye(),
      n = ce(null),
      r = q(() => !!n.value?.address?.postalCode && !!n.value?.address?.city && !!n.value?.address?.street);
    return {
      invoiceAddress: n,
      isInvoiceAddressAvailable: r,
      fetch: async () => {
        await e.fetch()
      },
      update: async i => {
        await Bt.putInvoiceAddress({
          country: t.value.country,
          language: t.value.language,
          cartId: dt(at()
            .cart?.id)
        }, i), n.value = i
      }
    }
  });
var fa = (e => (e.LIDL_PLUS = "lidl_plus", e.MOBILE_APP = "mobile_app", e.WEB = "web", e))(fa || {});
class Vn {
  static GENERIC_ERROR_REDIRECT_ROUTE = "//lidl://genericerror";
  static PARAM_DATA = "d";
  static PARAM_HASH = "h";
  static PARAM_FLASH_SALES = "flashSalesCheckout";
  static CHECKOUT_COMPLETED_ROUTE = "//successCheckout/close";
  static CHECKOUT_CANCEL_ROUTE = "//cancelcheckout/close";
  static COOKIE_NAME = "otc-mobile-flash-sales-checkout";
  static TRACKING_COOKIE_NAME = "otc-mobile-flash-sales-checkout-parameters";
  static isLidlPlusApp() {
    return Ut(Vn.COOKIE_NAME) != null
  }
  static setLidlPlusCheckoutCookie() {
    Yr(Vn.COOKIE_NAME, !0)
  }
  static setLidlPlusCheckoutTrackingParametersCookie() {
    const t = new URLSearchParams(window.location.search);
    t.delete(Vn.PARAM_HASH), t.delete(Vn.PARAM_DATA), Yr(Vn.TRACKING_COOKIE_NAME, JSON.stringify(Object.fromEntries(t)))
  }
  static getLidlPlusCheckoutTrackingParametersCookie() {
    return Ut(Vn.TRACKING_COOKIE_NAME)
  }
  static routerParamsExist(t) {
    const n = (o, i) => !!i[o] && i[o] !== "",
      r = n(Vn.PARAM_DATA, t.currentRoute.value.query),
      s = n(Vn.PARAM_HASH, t.currentRoute.value.query);
    return r && s
  }
  static redirectToCheckoutCompleteRoute() {
    on(Vn.CHECKOUT_COMPLETED_ROUTE)
  }
  static handleParametersInCheckout(t) {
    try {
      const n = JSON.parse(this.getLidlPlusCheckoutTrackingParametersCookie()),
        r = {
          ...t.currentRoute.value.query,
          ...n
        };
      r[this.PARAM_FLASH_SALES] = "true", t.replace({
          query: r
        })
        .then(() => {})
        .catch(() => {})
    } catch {}
  }
}

function SD() {
  return Vn.isLidlPlusApp() ? fa.LIDL_PLUS : xe.isAppCheckout() ? fa.MOBILE_APP : fa.WEB
}

function RD(e) {
  const t = e[SD()];
  if (t) return t()
}
var Wv = (e => (e.SUBMITTED = "SUBMITTED", e.PAYMENTSUCCEEDED = "PAYMENT_SUCCEEDED", e.PAYMENTFAILED = "PAYMENT_FAILED", e.PAYMENTCANCELED = "PAYMENT_CANCELED", e.PAYMENTBLACKLISTED = "PAYMENT_BLACKLISTED", e))(Wv || {});

function wD(e) {
  const t = ss(),
    n = at(),
    r = wi();
  e.orderNumber && (t.orderNumber = e.orderNumber), e.email && (t.email = e.email), e.cart && (n.cart = e.cart), e.invoiceAddress && (r.invoiceAddress = e.invoiceAddress), RD({
    [yt.MOBILE_APP]: () => xe.emitCheckoutSuccessEvent()
  })
}
async function dl({
  orderStatus: e,
  orderNumber: t,
  email: n,
  cart: r,
  invoiceAddress: s
}) {
  const o = ss();
  switch (e) {
    case fn.PENDING:
    case fn.SUCCESS:
    case "SUBMITTED":
    case "PAYMENT_SUCCEEDED":
      wD({
        orderNumber: t,
        email: n,
        cart: r,
        invoiceAddress: s
      });
      break;
    case fn.BLACKLISTED:
    case "PAYMENT_BLACKLISTED":
      await o.redirect({
        to: "/otc/checkout/summary"
      });
      break;
    case fn.CANCELLED:
    case "PAYMENT_CANCELED":
      await o.redirect({
        to: "/otc/checkout/summary",
        messages: [Fv]
      });
      break;
    case fn.ERROR:
    case fn.FAILED:
      await o.redirect({
        to: "/otc/checkout/summary",
        messages: [cD]
      });
      break;
    default:
      await o.redirect({
        to: "/otc/checkout/summary"
      });
      break
  }
}
const PD = [gc, vc, mc, Ed, hc, Uv],
  CD = new fo({
    responseStatus: [it.OK],
    async callback(e, t, n, r) {
      if (!r?.data?.addressId) throw new Error("checkoutService.parcelDeliveryAddressAdapter.client | Invalid response received from api")
    }
  }),
  LD = new _c([...PD, CD]),
  Gv = Nn("address-form-input-store", () => {
    const {
      configs: e
    } = Ye(), t = ce(), n = q(() => ({
      city: "",
      countryCode: e.value.country,
      firstName: "",
      company: "",
      lastName: "",
      postalCode: "",
      street: "",
      streetNumber: ""
    })), r = {
      address: n.value,
      addressType: "HOME_DELIVERY",
      isValidated: !1
    }, s = ce(!0), o = ce({
      address: structuredClone(r.address)
    }), i = ce(structuredClone(r)), a = q({
      get: () => s.value ? {
        ...structuredClone(r),
        address: o.value.address
      } : i.value,
      set: v => {
        i.value = structuredClone(qe(v))
      }
    }), {
      isFeatureEnabled: c
    } = jt(), l = at(), u = q(() => !!o.value && !!l.cart?.subTotalCartValue && c("isThresholdSpecificSalutationEnabled") && l.cart?.subTotalCartValue > e.value.salutationThreshold);

    function d(v) {
      if (!(u.value && v.address?.salutation !== "COMPANY")) return v.address.salutation
    }
    We(() => l.cart?.subTotalCartValue, () => {
      o.value?.address?.salutation && (o.value.address.salutation = d(o.value))
    }, {
      immediate: !0
    }), We(() => s.value, v => {
      v ? o.value = {
        ...o.value,
        address: structuredClone(qe(i.value.address))
      } : m({
        isValidated: a.value.isValidated,
        addressType: a.value.addressType,
        ...a.value,
        address: {
          ...o.value?.address ?? a.value?.address
        }
      })
    });
    const g = async () => {
      await In(), o.value = {
        address: structuredClone(r.address)
      }, a.value = structuredClone(r)
    }, p = () => {
      a.value = structuredClone(r)
    }, m = v => {
      (s.value || t.value === "PARCEL_LOCKER" || t.value === "PARCEL_SHOP") && (o.value.address = structuredClone(qe(v.address ?? n.value))), a.value = v
    };
    return {
      _deliveryAddressModel: i,
      invoiceAddress: o,
      deliveryAddress: a,
      isInvoiceSameAsDelivery: s,
      defaultDeliveryAddressModel: r,
      selectedAddressType: t,
      reset: g,
      setInvoiceAddressByDeliveryAddress: v => {
        o.value = {
          address: structuredClone(qe(v?.address ?? n.value))
        }
      },
      setDeliveryAddress: m,
      setInvoiceAddress: v => {
        const A = d(v),
          R = structuredClone(qe(v));
        R.address.salutation = A, s.value && (a.value = {
          ...structuredClone(r),
          address: R.address
        }), o.value = structuredClone(qe(R))
      },
      resetDeliveryAddress: p,
      onlyCompanyInvoiceAllowed: u
    }
  }),
  Ec = Nn("delivery-address", () => {
    const e = Pi(),
      t = ss(),
      n = Gv(),
      {
        configs: r
      } = Ye(),
      s = ce(null),
      o = q(() => s.value?.id?.length > 0);
    return {
      deliveryAddress: s,
      isDeliveryAddressAvailable: o,
      fetch: async () => {
        await e.fetch()
      },
      addDeliveryAddress: async l => {
        await LD.postDeliveryAddress({
          country: r.value.country,
          language: r.value.language,
          sales_channel: xe.getSalesChannel() ?? Vl.WEB,
          cartId: dt(at()
            .cart?.id)
        }, qv(l)), s.value = l, Zs(async () => {
          await t.fetch()
        }, 300, {
          leading: !1,
          trailing: !0
        })()
      },
      resetDeliveryAddressIfExists: async () => {
        gD(n.deliveryAddress?.address) && (await Bt.postDeliveryAddress({
          country: r.value.country,
          language: r.value.language,
          sales_channel: xe.getSalesChannel() ?? Vl.WEB,
          cartId: dt(at()
            .cart?.id)
        }, {}), await Zs(async () => {
          await t.fetch(), await n.reset()
        }, 300, {
          leading: !1,
          trailing: !0
        })())
      }
    }
  }),
  yd = Nn("payment-store", () => {
    const {
      configs: e
    } = Ye(), t = ce([]), n = ce([]), r = ce(null);
    return {
      inactive: n,
      allowed: t,
      selected: r,
      fetch: async () => {
        let a = null;
        const c = at()
          .cart?.id;
        try {
          a = await Bt.getPayment({
            country: e.value.country,
            language: e.value.language,
            cartId: dt(c),
            zoneId: Nt()
          })
        } catch (l) {
          Mn(l.status, [it.CONFLICT, it.TOO_MANY_REQUESTS]) && (await new Promise(d => setTimeout(d, 3e3)), a = await Bt.getPayment({
            country: e.value.country,
            language: e.value.language,
            cartId: dt(c),
            zoneId: Nt()
          }))
        }
        t.value = a?.data?.payload?.allowed ?? [], n.value = a?.data?.payload?.inactive ?? [], r.value = a?.data?.payload?.selected ?? null
      },
      setPayment: async a => {
        const c = await Bt.postPayment({
          cartId: dt(at()
            .cart?.id)
        }, a);
        c?.data?.payload?.allowed && (t.value = c.data.payload.allowed ?? []), c?.data?.payload?.inactive && (n.value = c.data.payload.inactive ?? []), c?.data?.payload?.selected && (r.value = c.data.payload.selected ?? null)
      },
      setPaymentSelected: a => {
        r.value = a
      }
    }
  }),
  DD = e => {
    if (Array.isArray(e)) {
      if (e.length > 0) return e[0]
    } else return e
  },
  kD = (e, t) => !e || t && e === Wv.SUBMITTED ? t : e,
  xD = {
    LOCKER: "PARCEL_LOCKER",
    PARCELLOCKER: "PARCEL_LOCKER",
    PARCEL_LOCKER: "PARCEL_LOCKER",
    SHOP: "PARCEL_SHOP",
    PARCELSHOP: "PARCEL_SHOP",
    PARCEL_SHOP: "PARCEL_SHOP",
    HOME: "HOME_DELIVERY",
    HOMEDELIVERY: "HOME_DELIVERY",
    HOME_DELIVERY: "HOME_DELIVERY",
    HOMEXL: "HOME_DELIVERY",
    HOME_XL: "HOME_DELIVERY",
    HOMEDELIVERYXL: "HOME_DELIVERY",
    HOME_DELIVERY_XL: "HOME_DELIVERY",
    "2MH": "HOME_DELIVERY"
  },
  pa = e => xD[e] ?? e,
  ko = e => {
    e?.shippingCosts && (e.shippingCosts = e?.shippingCosts?.map(t => ({
      ...t,
      addressType: t.addressType ? pa(String(t?.addressType)) : void 0,
      deliveryType: t.deliveryType ? pa(t.deliveryType) : void 0
    }))), e?.deliveryType && (e.deliveryType = pa(e.deliveryType))
  },
  ND = Nn("order-confirmation-store", () => {
    const e = wi(),
      t = Ec(),
      n = ss(),
      r = at(),
      s = yd(),
      o = ce(null),
      i = ce(null),
      a = ce(null),
      c = ce(null);
    return {
      customerNumber: o,
      installmentDetails: i,
      orderStatus: a,
      purchaseEventSent: c,
      fetch: async u => {
        const d = DD(n.paymentStatus ? n.paymentStatus : ""),
          g = fn[d.toUpperCase()];
        try {
          let p;
          p = await Bt.getConfirmation(String(u));
          const m = p.data.payload,
            E = m.cart;
          m.orderStatus === "SUBMITTED" && (await new Promise(b => setTimeout(b, 3e3)), p = await Bt.getConfirmation(String(u))), kv(m.salesChannel, !0), o.value = m.customerNumber, i.value = m.installmentDetails, a.value = m.orderStatus, c.value = m.purchaseEventSent, s.setPaymentSelected(m.paymentMethod ? String(m.paymentMethod) : ""), e.invoiceAddress = m.invoiceAddress, t.deliveryAddress = m.deliveryAddress, ko(E), r.cart = E, r.pageOrigin = _n.Success, n.email = m.email, n.isGuest = m.guest, n.orderSnapshotId = u, n.orderNumber = m.orderNumber, await dl({
            orderNumber: m.orderNumber,
            email: m.email,
            cart: m.cart,
            invoiceAddress: m.invoiceAddress,
            orderStatus: kD(m.orderStatus, g)
          })
        } catch (p) {
          const m = p,
            E = n.paymentStatus ? fn[n.paymentStatus.toUpperCase()] : fn.FAILED;
          Mn(m.status, [it.UNAUTHORIZED, it.PAGE_EXPIRED]) && await dl({
            orderStatus: E,
            orderNumber: n.orderNumber
          }), Mn(m.status, [it.GONE]) && [fn.CANCELLED, fn.BLACKLISTED, fn.ERROR, fn.FAILED].includes(E) && await dl({
            orderStatus: E,
            orderNumber: n.orderNumber
          })
        }
      }
    }
  });

function $D(e, t) {
  try {
    return Object.values(e)
      .includes(t)
  } catch {
    return !1
  }
}
const Kv = Nn("delivery-address-list", () => {
    const e = Pi(),
      t = ce([]),
      n = q({
        get: () => t.value?.filter((o, i) => i === t.value.findLastIndex(a => AD(o, a))),
        set: o => {
          t.value = o
        }
      });
    return {
      deliveryAddresses: n,
      fetch: async () => {
        await e.fetch()
      },
      getDeliveryAddressesByAddressType: o => n.value?.filter(i => i.addressType === o)
    }
  }),
  ss = Nn("checkout-store", () => {
    const {
      initializeRecaptchaScript: e
    } = OD(), t = yc(), n = Kv(), r = Ec(), s = wi(), o = yd(), i = at(), a = Yn(), c = ld(), l = ce(null), u = ce(null), d = ce(void 0), g = ce(!1), p = ce(!1), m = ce(null), E = ce(null), b = ce(!1), v = ce(!1), A = ce(null), R = () => {
      l.value = null, u.value = null, d.value = !1, g.value = !1, p.value = !1, m.value = null, E.value = null, b.value = !1, v.value = !1, A.value = null
    }, {
      configs: O
    } = Ye(), L = ce(O.value.optInBox?.ratings?.checkboxPreselectedValue), P = ce(O.value.optInBox?.newsletter?.checkboxPreselectedValue), D = Q => {
      L.value = Q
    }, J = Q => {
      P.value = Q
    }, k = {
      LOCKER: "PARCEL_LOCKER",
      PARCELLOCKER: "PARCEL_LOCKER",
      PARCEL_LOCKER: "PARCEL_LOCKER",
      SHOP: "PARCEL_SHOP",
      PARCELSHOP: "PARCEL_SHOP",
      PARCEL_SHOP: "PARCEL_SHOP",
      HOME: "HOME_DELIVERY",
      HOMEDELIVERY: "HOME_DELIVERY",
      HOME_DELIVERY: "HOME_DELIVERY",
      HOMEXL: "HOME_DELIVERY",
      HOME_XL: "HOME_DELIVERY",
      HOMEDELIVERYXL: "HOME_DELIVERY",
      HOME_DELIVERY_XL: "HOME_DELIVERY",
      "2MH": "HOME_DELIVERY",
      HD: "HOME_DELIVERY",
      SP: "PARCEL_LOCKER",
      PS: "PARCEL_SHOP"
    }, Y = Q => k[Q] ?? Q, H = Q => {
      l.value = Q.orderData?.email ?? null, u.value = Q.orderData?.orderNumber ?? null, d.value = Q.guest, g.value = Q.incentivized, p.value = Q.oneClick, m.value = Q.orderData?.paymentRedirectUrl, E.value = Q.orderData?.orderSnapshotId, t.birthDateSectionEnabled = Q.addressPageDto.addressConfig.birthDateSectionEnabled, t.deliveryCountryCodes = Q.addressPageDto.addressConfig.deliveryCountryCodes, t.invoiceCountryCodes = Q.addressPageDto.addressConfig.invoiceCountryCodes, t.isPhoneNumberRequired = Q.addressPageDto.addressConfig.isPhoneNumberRequired, t.isSalutationRequired = Q.addressPageDto.addressConfig.isSalutationRequired, t.addressTypes = Q.addressPageDto.addressForm.carrierOptions?.map(oe => Y(oe)), t.carrierOptions = Q.addressPageDto.addressForm.carrierOptions, t.country = Q.addressPageDto.addressForm.country, t.shippingCosts = Q.addressPageDto.addressForm.shippingCosts, n.deliveryAddresses = Q.addressPageDto.addressForm.deliveryAddresses, r.deliveryAddress = Q.addressPageDto.addressForm.deliveryAddress, s.invoiceAddress = Q.addressPageDto.addressForm.invoiceAddress, Q?.paymentStep && (o.allowed = Q?.paymentStep?.allowed ?? [], o.selected = Q?.paymentStep?.selected, o.inactive = Q?.paymentStep?.inactive ?? []);
      const V = {
        ...Q.cart,
        shippingCosts: Q?.addressPageDto?.addressForm?.shippingCosts?.map(oe => ({
          deliveryType: oe.addressType,
          shippingCost: oe.shippingCost
        }))
      };
      i.cart = V
    }, G = async () => {
      try {
        const Q = await Bt.getSummary({
          country: O.value.country,
          language: O.value.language,
          cartId: dt(i.cart?.id),
          zoneId: Nt()
        });
        H(Q.data.payload), await e()
      } catch (Q) {
        const V = Q;
        if (Mn(V.status, it.BAD_REQUEST) && !(V?.data?.payload)
          .cart?.id) return on("/otc/cart")
      }
    }, me = Zs(async () => {
      await G()
    }, 500, {
      leading: !1,
      trailing: !0
    }), de = async () => {
      me.cancel(), await me()
    }, X = async () => {
      try {
        await Bt.postCheckoutSession({
          country: O.value.country,
          language: O.value.language,
          cartId: dt(i.cart?.id),
          zoneId: Nt()
        }), on("/otc/checkout/flow")
      } catch (Q) {
        throw Mn(Q.status, [it.BAD_REQUEST, it.NOT_FOUND]) && (at()
          .cart = {
            id: ""
          }), Q
      }
    }, N = async () => {
      try {
        const Q = await Bt.postGuestRegistration({
          country: O.value.country,
          language: O.value.language,
          customerNumber: ND()
            .customerNumber,
          cartId: dt(i.cart?.id)
        }, {
          emailAddress: l.value
        });
        Q.data?.payload?.registrationLink && on(String(Q.data.payload.registrationLink))
      } catch (Q) {
        rn.error("Error during guest registration", Q)
      }
    }, K = async () => {
      try {
        await new _c([gc, vc, mc, hc])
          .getFlow({
            country: O.value.country,
            language: O.value.language,
            cartId: dt(i.cart?.id),
            sales_channel: xe.getSalesChannel() ?? Ln.WEB,
            zoneId: Nt()
          })
      } catch (Q) {
        const V = Q;
        let oe = It.LOGIN;
        Vv() && Mn(V.status, [it.UNAUTHORIZED, it.PAGE_EXPIRED]) && (oe = Mv()), Mn(V.status, it.INTERNAL_SERVER_ERROR) && (oe = It.CART), await _e({
          to: oe,
          replaceHistory: !0
        })
      }
    }, ee = async () => {
      const Q = {
        heurekaOptIn: L.value,
        newsletterOptIn: P.value
      };
      try {
        const V = await Bt.postSummary({
            country: O.value.country,
            language: O.value.language,
            cartId: dt(i.cart?.id),
            sales_channel: xe.getSalesChannel() ?? Ln.WEB,
            zoneId: Nt()
          }, Q, {
            middlewareOptions: {
              clearOldMessages: !0
            }
          }),
          {
            orderData: oe,
            cart: Ae
          } = V.data.payload;
        return oe && !oe.paymentRedirectUrl && (H(V.data.payload), Ae?.fullyPaidByLgc) ? (await _e({
          to: It.SUCCESS
        }), !0) : oe?.paymentRedirectUrl ? (on(String(oe?.paymentRedirectUrl)), !0) : (await _e({
          to: It.SUCCESS
        }), !0)
      } catch (V) {
        const oe = V;
        if (Mn(oe.status, it.BAD_REQUEST)) {
          const Ae = oe?.data?.payload;
          Ae?.addressPageDto && await Pi()
            .setAddressPage(Ae.addressPageDto), Ae?.paymentStep && (o.allowed = Ae.paymentStep.allowed, o.inactive = Ae.paymentStep.inactive, o.selected = Ae.paymentStep.selected), Ae?.cart && (i.cart = Ae.cart)
        }
        return !1
      }
    }, _e = async Q => {
      Q.messages && Q.messages.length > 0 && a.addPreservedAppMessages(...Q.messages), $D(It, Q.to) ? (Q.replaceHistory ? await c?.replace({
        name: Q.to
      }) : await c?.push({
        name: Q.to
      }), Q.forceReload && c?.go(0)) : on(Q.to, Q.replaceHistory)
    };
    return {
      email: l,
      orderNumber: u,
      isGuest: d,
      isIncentivized: g,
      isOneClick: p,
      paymentRedirectUrl: m,
      orderSnapshotId: E,
      fetch: G,
      postSummary: ee,
      setState: H,
      isOptInForNewsletter: P,
      isOptInForRating: L,
      setIsOptInForNewsletter: J,
      setIsOptedInForRating: D,
      createCheckoutSession: X,
      initiateCheckoutFlow: K,
      sessionLost: b,
      paymentPending: v,
      paymentStatus: A,
      redirect: _e,
      reset: R,
      postGuestRegistration: N,
      throttledFetchSummary: de
    }
  }),
  Pi = Nn("address-store", () => {
    const e = yc(),
      t = Kv(),
      n = Ec(),
      r = wi(),
      s = ss(),
      {
        configs: o
      } = Ye(),
      i = async () => {
        const p = await Bt.getAddress({
          country: o.value.country,
          language: o.value.language,
          cartId: dt(at()
            .cart?.id),
          zoneId: Nt()
        });
        await g(p.data.payload)
      }, {
        featureToggles: a
      } = jt(), c = q(() => o.value.phoneNumberPrefix), l = q(() => a.value.isPhoneNumberPrefixIncludedInValue), u = p => {
        if (p && (p = p.replace(/\s/g, ""), c.value && l.value && !p.startsWith(c.value) ? p = c.value + p : c.value && !l.value && p.startsWith(c.value) && (p = p.replace(c.value, "")), !(p === c.value || !p))) return p
      }, d = async p => {
        const m = {
            ...p.invoiceAddress,
            phoneNumber: u(p.invoiceAddress.phoneNumber)
          },
          E = async v => {
            await Bt.postDeliveryAddress({
              country: o.value.country,
              language: o.value.language,
              sales_channel: xe.getSalesChannel() ?? Ln.WEB,
              cartId: dt(at()
                .cart?.id)
            }, qv(v))
          }, b = t.deliveryAddresses.find(v => yD(v, p.deliveryAddress));
        if (b !== void 0) try {
          await Bt.patchDeliveryAddress({
            country: o.value.country,
            language: o.value.language,
            sales_channel: xe.getSalesChannel() ?? Ln.WEB,
            cartId: dt(at()
              .cart?.id)
          }, b.id)
        } catch (v) {
          const A = v;
          if (Mn(A.status, it.NOT_FOUND)) await E(p.deliveryAddress);
          else throw A
        } else await E(p.deliveryAddress);
        await Bt.putInvoiceAddress({
          country: o.value.country,
          language: o.value.language,
          sales_channel: xe.getSalesChannel() ?? Ln.WEB,
          cartId: dt(at()
            .cart?.id)
        }, m), await s.fetch()
      }, g = async p => {
        s.isGuest = p.addressConfig.guest, e.birthDateSectionEnabled, e.birthDateSectionEnabled = p.addressConfig.birthDateSectionEnabled, e.deliveryCountryCodes = p.addressConfig.deliveryCountryCodes, e.invoiceCountryCodes = p.addressConfig.invoiceCountryCodes, e.isPhoneNumberRequired = p.addressConfig.isPhoneNumberRequired, e.isSalutationRequired = p.addressConfig.isSalutationRequired, e.addressTypes = p.addressForm.addressTypes, e.carrierOptions = p.addressForm.carrierOptions, e.country = p.addressForm.country, e.shippingCosts = p.addressForm.shippingCosts, t.deliveryAddresses = p.addressForm.deliveryAddresses, n.deliveryAddress = p.addressForm.deliveryAddress, r.invoiceAddress = p.addressForm.invoiceAddress
      };
    return {
      fetch: i,
      setAddressForm: d,
      setAddressPage: g
    }
  }),
  yc = Nn("address-config", () => {
    const e = Pi(),
      t = ss(),
      {
        isFeatureEnabled: n
      } = jt(),
      r = ce(null),
      s = ce([]),
      o = ce([]),
      i = ce(null),
      a = ce(null),
      c = ce([]),
      l = ce([]),
      u = ce(null),
      d = ce([]),
      g = async () => {
        await e.fetch()
      }, p = (E, b = !1) => {
        let v = d.value.find(A => String(A.addressType) === String(E))
          ?.shippingCost ?? void 0;
        if (b && n("isLidlLockerFilteringEnabled")) {
          let A;
          t.isGuest ? A = d.value.find(R => String(R.addressType) === `${String(E)}_LIDL`)
            ?.shippingCost ?? void 0 : A = d.value.find(R => String(R.addressType) === `${String(E)}_LIDL_PLUS`)
            ?.shippingCost ?? void 0, A !== void 0 && (v = A)
        }
        return v
      }, m = q(() => {
        const E = ["MR", "MRS"];
        return n("isUnspecifiedSalutationOptionEnabled") && E.push("UNSPECIFIED"), n("isCompanySalutationOptionEnabled") && E.push("COMPANY"), E
      });
    return {
      birthDateSectionEnabled: r,
      deliveryCountryCodes: s,
      invoiceCountryCodes: o,
      isPhoneNumberRequired: i,
      isSalutationRequired: a,
      salutationOptions: m,
      addressTypes: c,
      carrierOptions: l,
      country: u,
      shippingCosts: d,
      fetch: g,
      getShippingCostByAddressType: p
    }
  });
var _n = (e => (e[e.Cart = 0] = "Cart", e[e.Checkout = 1] = "Checkout", e[e.Success = 2] = "Success", e))(_n || {});
const at = Nn("cart-store", () => {
    const {
      isFeatureEnabled: e
    } = jt(), {
      configs: t
    } = Ye(), n = ce(null), r = yc(), s = ss(), o = ce(0), i = q(() => {
      const k = n.value?.cartItems?.reduce((Y, H) => {
        const G = new Date(Y.expectedDeliveryDate);
        return new Date(H.expectedDeliveryDate) > G ? H : Y
      }, n.value?.cartItems[0]);
      if (k?.expectedDeliveryDate) return new Date(k.expectedDeliveryDate)
    }), a = q(() => {
      if (n.value?.cartItems?.length <= 0) return [];
      const k = n.value?.cartItems?.filter(G => !!G.discount && !!G.discount.showDiscount && !!G.discount.deletedPrice && !!G.discount.discountHasStar) ?? [],
        Y = k?.length > 1;
      let H = 1;
      return k.map(G => ({
        symbol: Y ? `${H++}` : "*",
        content: G.discount?.discountDisclaimerText
      }))
    }), c = q(() => n.value?.shippingCostStandardAfterCoupon <= 0 || n.value?.cartItems?.every(H => H.freeShipping === !0) ? !0 : (n.value?.discountItems ?? [])
      .reduce((H, G) => H + (G.creditedShippingCosts ?? 0), 0) >= n.value?.shippingCostStandardBeforeCoupon), l = q(() => n.value?.minimumPurchaseValue != null && e("isFreeShippingWarningCheckboxEnabled") && (n.value.cartItems.length > 1 || n.value?.cartItems?.[0].quantity > 1)), u = async () => {
      if (o.value === 0) {
        const k = dt(n.value?.id),
          Y = await us.getCart({
            language: t.value.language,
            country: t.value.country,
            cartId: k,
            zoneId: Nt()
          }, !!Ut(_C));
        ko(Y?.data?.payload), n.value = Y?.data?.payload
      } else await s.fetch()
    }, d = ce([]), g = ce(""), p = () => {
      d.value = d.value.filter(k => k)
    }, m = k => {
      const Y = n.value.cartItems.find(H => H.erpNumber === k);
      Y && d.value.push({
        ...Y,
        quantity: 1
      }), d.value = d.value.filter(H => H !== void 0)
    }, E = Zs(async k => {
      if (o.value === 0) {
        const Y = await us.updateCartItem({
          language: t.value.language,
          country: t.value.country,
          cartId: dt(n.value?.id),
          zoneId: Nt()
        }, k);
        ko(Y?.data?.payload), n.value = Y.data.payload
      } else await us.updateCartItem({
        language: t.value.language,
        country: t.value.country,
        cartId: dt(n.value?.id),
        zoneId: Nt()
      }, k), await s.throttledFetchSummary()
    }, 200, {
      leading: !1,
      trailing: !0
    }), b = async k => {
      E.cancel(), await E(k)
    }, v = async k => {
      if (o.value === 0) {
        const Y = await us.addCartItem({
          country: t.value.country,
          language: t.value.language,
          cartId: dt(n.value?.id),
          zoneId: Nt()
        }, k);
        ko(Y?.data?.payload), n.value = Y.data.payload
      } else await us.addCartItem({
        country: t.value.country,
        language: t.value.language,
        cartId: dt(n.value?.id),
        zoneId: Nt()
      }, k), await s.throttledFetchSummary()
    }, A = async k => {
      if (E.cancel(), o.value === 0) {
        m(k);
        const Y = await us.removeCartItem({
          country: t.value.country,
          language: t.value.language,
          cartId: dt(n.value?.id),
          zoneId: Nt()
        }, k);
        ko(Y?.data?.payload), n.value = Y.data.payload
      } else m(k), await us.removeCartItem({
        country: t.value.country,
        language: t.value.language,
        cartId: dt(n.value?.id),
        zoneId: Nt()
      }, k), await s.throttledFetchSummary()
    }, R = async (k, Y) => {
      o.value === 1 && (await Bt.postCheckoutCart({
        country: t.value.country,
        language: t.value.language,
        cartId: dt(n.value?.id),
        zoneId: Nt()
      }, {
        erpNumber: k,
        oldDeviceTakebackChecked: Y
      }), await s.throttledFetchSummary())
    }, O = async k => {
      try {
        const {
          data: Y
        } = await w_.getGeneralTerms(k, t.value.country, t.value.language);
        g.value = Y
      } catch (Y) {
        rn.error(O, Y)
      }
    }, L = async k => {
      try {
        const {
          data: Y
        } = await w_.getRedemptionConditions(k, t.value.country, t.value.language);
        g.value = Y
      } catch (Y) {
        rn.error(L, Y)
      }
    }, P = q(() => {
      if (!n?.value?.cartItems) return {};
      const k = n.value.cartItems.filter(X => X.digital)
        ?.reduce((X, N) => {
          const K = N.deliveryTime;
          return X[K] = X[K] || [], X[K].push(N), X
        }, {}) ?? [],
        Y = n.value.cartItems.filter(X => !X.digital)
        .reduce((X, N) => {
          const K = N.expectedDeliveryDate ?? N.deliveryTime ?? "unsupported";
          return X[K] = X[K] || [], X[K].push(N), X
        }, {}),
        H = Object.keys(Y),
        G = H.filter(X => Qt(X)
          .isValid()),
        me = H.filter(X => !Qt(X)
          .isValid() && X !== "unsupported");
      G.sort((X, N) => {
        const K = Qt(X),
          ee = Qt(N);
        return K.isSame(ee) ? 0 : K.isBefore(ee) ? -1 : 1
      });
      const de = {};
      return Object.keys(k)
        ?.forEach(X => {
          de[X] = k[X]
        }), [...G, ...me].forEach(X => {
          de[X] = Y[X]
        }), de.unsupported = Y.unsupported, de
    }), D = q(() => o.value === 0 ? n.value?.shippingCosts : n.value?.shippingCosts?.filter(k => k.deliveryType !== "PARCEL_LOCKER_LIDL_PLUS" && s.isGuest || k.deliveryType !== "PARCEL_LOCKER_LIDL" && !s.isGuest)
      .filter(k => r.addressTypes.find(Y => k.deliveryType.startsWith(String(Y)))) ?? []), J = q(() => n?.value.cartItems.every(k => k.digital) ?? !1);
    return {
      cart: n,
      latestDeliveryDate: i,
      lastRemovedItemArr: d,
      pageOrigin: o,
      digitalPopupContent: g,
      discountDisclaimers: a,
      removeUndefinedLastRemovedItems: p,
      fetch: u,
      removeCartItem: A,
      updateCartItem: b,
      addCartItem: v,
      updateOldDeviceTakeback: R,
      fetchDigitalGeneralTerms: O,
      fetchDigitalRedemptionConditions: L,
      availableShippingCosts: D,
      isFreeShipping: c,
      isPartialReturnActive: l,
      getCartItemsSortedByEDD: P,
      isEveryCartItemDigital: J
    }
  }),
  VD = {
    key: 0,
    class: "legal-texts"
  },
  MD = ["id"],
  FD = Ie({
    __name: "TheLegalTexts",
    props: {
      headingLevel: {
        type: Number,
        default: 5
      },
      useOwnImplementation: {
        type: Boolean,
        default: !1
      }
    },
    setup(e) {
      const {
        t
      } = mt(), n = at(), r = e, {
        push: s,
        disclaimerEntries: o
      } = pC(r.useOwnImplementation), i = async () => {
        for (const a of n.discountDisclaimers) await s({
          id: `cart-${a.symbol}`,
          type: "TEXT",
          value: `${a.symbol==="*"?"*":`<sup>${a.symbol}</sup>`} ${a.content}`
        })
      };
      return We(() => n.discountDisclaimers, async () => await i()), Rt(async () => {
        await s("Basic"), await i()
      }), (a, c) => {
        const l = $r("secure-html");
        return F(o)
          .length > 0 ? (B(), ue("footer", VD, [(B(), be(zr("h" + e.headingLevel), {
            class: "legal-texts__headline"
          }, {
            default: Be(() => [Vt(Ce(F(t)("footer.legalTexts.headline.label")), 1)]),
            _: 1
          })), (B(!0), ue(Xe, null, Gn(F(o), u => Ft((B(), ue("p", {
            key: u.htmlContent.substring(0, 10),
            class: "legal-texts__disclaimer",
            id: u.id
          }, null, 8, MD)), [
            [l, u.htmlContent]
          ])), 128))])) : ge("", !0)
      }
    }
  }),
  je = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, s] of t) n[r] = s;
    return n
  },
  Yv = je(FD, [
    ["__scopeId", "data-v-14710943"]
  ]),
  zv = e => {
    const {
      t
    } = mt(), n = q(() => t(e === "CART" ? "global.title.cart" : "global.title.checkout"));
    ao(() => {
      document.title = String(n.value)
    })
  },
  BD = {
    class: "cart-layout"
  },
  UD = Ie({
    __name: "cart-layout",
    setup(e) {
      return zv("CART"), (t, n) => {
        const r = Ja("router-view");
        return B(), ue("main", BD, [Te(r), Te(Yv, {
          "use-own-implementation": !1,
          headingLevel: 2
        })])
      }
    }
  }),
  jD = je(UD, [
    ["__scopeId", "data-v-d45a0025"]
  ]),
  HD = {
    class: "checkout-footer-reduced",
    "data-ee": "checkout-footer"
  },
  qD = {
    key: 0,
    class: "dont-paint"
  },
  WD = {
    class: "checkout-footer-reduced__section"
  },
  GD = {
    class: "checkout-footer-reduced__list"
  },
  KD = {
    class: "checkout-footer-reduced__list-item"
  },
  YD = ["href"],
  zD = {
    class: "checkout-footer-reduced__list-item"
  },
  XD = ["href"],
  JD = {
    class: "checkout-footer-reduced__list-item"
  },
  QD = ["href"],
  ZD = {
    class: "checkout-footer-reduced__list-item"
  },
  ek = ["href"],
  tk = {
    key: 0,
    class: "checkout-footer-reduced__list-item"
  },
  nk = ["href"],
  rk = Ie({
    __name: "TheFooter",
    setup(e) {
      const {
        t
      } = mt(), {
        configs: n
      } = Ye(), r = q(() => n.value.locale === "de-DE");
      return (s, o) => (B(), ue("footer", HD, [F(t)("footer.title")
        ?.length > 0 ? (B(), ue("h2", qD, Ce(F(t)("footer.title")), 1)) : ge("", !0), fe("div", WD, [fe("ul", GD, [fe("li", KD, [fe("a", {
          class: "checkout-footer-reduced__list-item-link",
          href: F(t)("footer.url.imprint"),
          target: "_blank",
          rel: "noopener"
        }, Ce(F(t)("footer.navigation.imprint")), 9, YD)]), fe("li", zD, [fe("a", {
          class: "checkout-footer-reduced__list-item-link",
          href: F(t)("footer.url.privacyPolicy"),
          target: "_blank",
          rel: "noopener"
        }, Ce(F(t)("footer.navigation.privacyPolicy")), 9, XD)]), fe("li", JD, [fe("a", {
          class: "checkout-footer-reduced__list-item-link",
          href: F(t)("footer.url.rightToRecall"),
          target: "_blank",
          rel: "noopener"
        }, Ce(F(t)("footer.navigation.rightToRecall")), 9, QD)]), fe("li", ZD, [fe("a", {
          class: "checkout-footer-reduced__list-item-link",
          href: F(t)("footer.url.termsAndConditions"),
          target: "_blank",
          rel: "noopener"
        }, Ce(F(t)("footer.navigation.termsAndConditions")), 9, ek)]), r.value ? (B(), ue("li", tk, [fe("a", {
          class: "checkout-footer-reduced__list-item-link",
          href: F(t)("footer.url.deviceTakeback"),
          target: "_blank",
          rel: "noopener"
        }, Ce(F(t)("footer.navigation.deviceTakeback")), 9, nk)])) : ge("", !0)])])
      ]))
    }
  }),
  sk = je(rk, [
    ["__scopeId", "data-v-2c095347"]
  ]),
  ok = "/otc/brand-default.svg",
  bc = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, s] of t) n[r] = s;
    return n
  },
  ik = {
    name: "placeholder",
    baseClass: "core-icon"
  },
  ak = Symbol(),
  L_ = "OdsIconLocal",
  ck = Ie({
    __name: "CoreIcon",
    props: Zt({
      name: {},
      baseClass: {}
    }, {
      ...ik,
      baseClass: "core-icon"
    }),
    setup(e) {
      const t = e,
        n = mn(),
        r = Ot(ak, L_);
      return We(() => t.name, async () => {
        if (r == L_) {
          const s = await _(() => import("./CoreIconLocal.UDaNewX1-Cto88cL9.js"), []);
          n.value = s.default
        } else n.value = r
      }, {
        immediate: !0
      }), (s, o) => (B(), be(zr(n.value), ln({
        ...s.$attrs,
        ...t
      }, {
        class: s.baseClass
      }), null, 16, ["class"]))
    }
  }),
  oo = bc(ck, [
    ["__scopeId", "data-v-e61d77e7"]
  ]),
  lk = Symbol(),
  En = {
    Info: "info",
    Warning: "warning",
    Error: "error"
  },
  Ms = {},
  Xv = e => {
    const t = {
        enableLogs: !1,
        logLevel: En.Error
      },
      n = Ot(lk, t),
      r = s => {
        if (n && n.enableLogs) switch (s) {
          case En.Info:
            return !0;
          case En.Warning:
            return n.logLevel === En.Warning || n.logLevel === En.Error;
          case En.Error:
            return n.logLevel === En.Error
        }
        return !1
      };
    return {
      warn: (s, ...o) => {
        r(En.Warning) && console.warn(`[OdsLidl/${e}] - ${s}`, ...o)
      },
      error: (s, ...o) => {
        r(En.Error) && console.error(`[OdsLidl/${e}] - ${s}`, ...o)
      },
      info: (s, ...o) => {
        r(En.Info) && console.log(`[OdsLidl/${e}] - ${s}`, ...o)
      },
      errorOnce: (s, ...o) => {
        r(En.Error) && !Ms[s] && (console.error(`[OdsLidl/${e}] - ${s}`, ...o), Ms[s] = !0)
      },
      warnOnce: (s, ...o) => {
        r(En.Warning) && !Ms[s] && (console.warn(`[OdsLidl/${e}] - ${s}`, ...o), Ms[s] = !0)
      },
      infoOnce: (s, ...o) => {
        r(En.Info) && !Ms[s] && (console.log(`[OdsLidl/${e}] - ${s}`, ...o), Ms[s] = !0)
      }
    }
  },
  Jv = {
    name: "placeholder"
  },
  D_ = (e, t, n) => {
    const r = e[t];
    return r ? typeof r == "function" ? r() : Promise.resolve(r) : new Promise((s, o) => {
      (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(o.bind(null, new Error("Unknown variable dynamic import: " + t + (t.split("/")
        .length !== n ? ". Note that variables only represent file names one level deep." : ""))))
    })
  },
  uk = ["innerHTML"],
  dk = "placeholder",
  fk = Ie({
    __name: "OdsIconLocal",
    props: Zt({
      name: {}
    }, {
      ...Jv
    }),
    setup(e) {
      const t = e,
        n = ce();
      return We(() => t.name, async r => {
        try {
          const s = await D_(Object.assign({
            "../../assets/icons/360-degree.svg": () => _(() => import("./360-degree.Bl1hS1BE-C-9aGpsB.js"), []),
            "../../assets/icons/apple.svg": () => _(() => import("./apple.Ckdpv1md-rDDFLwgG.js"), []),
            "../../assets/icons/arrow-down.svg": () => _(() => import("./arrow-down.Btr3GJfq-Dw8kulxu.js"), []),
            "../../assets/icons/arrow-left-circle.svg": () => _(() => import("./arrow-left-circle.Cto7S_qn-QgddAfzO.js"), []),
            "../../assets/icons/arrow-left.svg": () => _(() => import("./arrow-left.BzTqyRJc-DfiQMK6K.js"), []),
            "../../assets/icons/arrow-right-circle.svg": () => _(() => import("./arrow-right-circle.CaTeQvlU-DjQR7uXE.js"), []),
            "../../assets/icons/arrow-right.svg": () => _(() => import("./arrow-right.D6tDlMr8-B2I8JGzb.js"), []),
            "../../assets/icons/arrow-up.svg": () => _(() => import("./arrow-up.DoxiLcxO-yHB-B7IC.js"), []),
            "../../assets/icons/arrows-expand.svg": () => _(() => import("./arrows-expand.EVMxnO11-wIonTrHB.js"), []),
            "../../assets/icons/arrows-vertical.svg": () => _(() => import("./arrows-vertical.C5WseRFJ-dliglezC.js"), []),
            "../../assets/icons/award.svg": () => _(() => import("./award.Ciqgfdph-hHBpGmtG.js"), []),
            "../../assets/icons/baby changing station.svg": () => _(() => import("./baby changing station.qEeD3Siq-BVBLqpaX.js"), []),
            "../../assets/icons/bad-solid.svg": () => _(() => import("./bad-solid.BRuaMV0I-DnymZ5TC.js"), []),
            "../../assets/icons/bad.svg": () => _(() => import("./bad.C7XOupTR-C6H4K7DI.js"), []),
            "../../assets/icons/bakery-products.svg": () => _(() => import("./bakery-products.DZ97pD17-Bhk4fDDI.js"), []),
            "../../assets/icons/barrel.svg": () => _(() => import("./barrel.D2Ek_gWc-CnjruoQr.js"), []),
            "../../assets/icons/bars-horizontal.svg": () => _(() => import("./bars-horizontal.Bfwy3STy-BaPidoiq.js"), []),
            "../../assets/icons/basket.svg": () => _(() => import("./basket.VnEO18-h-ClT22X9i.js"), []),
            "../../assets/icons/beer-glass.svg": () => _(() => import("./beer-glass.ai9YC3u3-pYxH4K7F.js"), []),
            "../../assets/icons/bell-regular.svg": () => _(() => import("./bell-regular.BzG7rHVC-BnKeo0qQ.js"), []),
            "../../assets/icons/bell-solid.svg": () => _(() => import("./bell-solid.CKvLpXgk-bAnOj_rR.js"), []),
            "../../assets/icons/benefits.svg": () => _(() => import("./benefits.-vhU2qej-Dkl_l6fv.js"), []),
            "../../assets/icons/best-solid.svg": () => _(() => import("./best-solid.DUjn2jjy-DD3JONHn.js"), []),
            "../../assets/icons/best.svg": () => _(() => import("./best.qQcssm_T-Bn3UY4e8.js"), []),
            "../../assets/icons/better-solid.svg": () => _(() => import("./better-solid.N7QrjAEq-D_xpqCc_.js"), []),
            "../../assets/icons/better.svg": () => _(() => import("./better.CfdieLmO-c4DAUTzm.js"), []),
            "../../assets/icons/bicycle.svg": () => _(() => import("./bicycle.XlOMsN_C-C9ZFClQO.js"), []),
            "../../assets/icons/bio-leaf.svg": () => _(() => import("./bio-leaf.Rm9ev2qG-C-FDdib1.js"), []),
            "../../assets/icons/book-open.svg": () => _(() => import("./book-open.Ds9w8_Ky-T43ZHwG1.js"), []),
            "../../assets/icons/bookmark-regular.svg": () => _(() => import("./bookmark-regular.BHUiSEkf-5x78oLvl.js"), []),
            "../../assets/icons/bookmark-solid.svg": () => _(() => import("./bookmark-solid.DrFls93T-DlMp0RG4.js"), []),
            "../../assets/icons/bottle.svg": () => _(() => import("./bottle.B93RPyNG-C0FLdvtu.js"), []),
            "../../assets/icons/bottles.svg": () => _(() => import("./bottles.DGSOXPaz-8hU_7bfN.js"), []),
            "../../assets/icons/box-coins-return.svg": () => _(() => import("./box-coins-return.C04AHukr-D0L7OVdQ.js"), []),
            "../../assets/icons/box-multiple.svg": () => _(() => import("./box-multiple.Duv8gCIL-B5UhA3uE.js"), []),
            "../../assets/icons/box-open.svg": () => _(() => import("./box-open.tdTQC2TH-DNctT7Qd.js"), []),
            "../../assets/icons/box-return-30-days.svg": () => _(() => import("./box-return-30-days.D66vQ_q7-E8ny3HNS.js"), []),
            "../../assets/icons/box-return-90-days.svg": () => _(() => import("./box-return-90-days.DWEwX0By-CcEIOcKq.js"), []),
            "../../assets/icons/box-return.svg": () => _(() => import("./box-return.x5tDljW5-DJXn-aaL.js"), []),
            "../../assets/icons/box.svg": () => _(() => import("./box.rJNmr86u-VjE57-6s.js"), []),
            "../../assets/icons/bread.svg": () => _(() => import("./bread.Cc2qBm1Q-CZnK2j1f.js"), []),
            "../../assets/icons/bulletlist.svg": () => _(() => import("./bulletlist.COMX8RPo-8YA2J4g-.js"), []),
            "../../assets/icons/bun.svg": () => _(() => import("./bun.B_D4BEKw-DOeEFqSD.js"), []),
            "../../assets/icons/calendar-clock.svg": () => _(() => import("./calendar-clock.BAWkpm5O-BubJ3poj.js"), []),
            "../../assets/icons/calendar.svg": () => _(() => import("./calendar.Dk86CNzu-C_dAZyYf.js"), []),
            "../../assets/icons/camera.svg": () => _(() => import("./camera.C9vQGkNq-DcbZb9PZ.js"), []),
            "../../assets/icons/car.svg": () => _(() => import("./car.DPerU7Xa-tR-9hhoE.js"), []),
            "../../assets/icons/cash-cashless.svg": () => _(() => import("./cash-cashless.DVpLsP_9-N9aio1Gl.js"), []),
            "../../assets/icons/cattle.svg": () => _(() => import("./cattle.tKeHjx8x-BhXJOz5i.js"), []),
            "../../assets/icons/certificate.svg": () => _(() => import("./certificate.CTiqmBge-IuO9bOap.js"), []),
            "../../assets/icons/checklist.svg": () => _(() => import("./checklist.-JDCDLd6-BA3My9Oh.js"), []),
            "../../assets/icons/cheese-1.svg": () => _(() => import("./cheese-1.eddHsrY7-4W3IQo6H.js"), []),
            "../../assets/icons/cheese-2.svg": () => _(() => import("./cheese-2.D2D3zUcr-BuD-faVZ.js"), []),
            "../../assets/icons/chefs-hat.svg": () => _(() => import("./chefs-hat.ttszwXAA-DP5peS3E.js"), []),
            "../../assets/icons/chicken.svg": () => _(() => import("./chicken.BhrVSq4j-3k6cezX1.js"), []),
            "../../assets/icons/chocolate-bar.svg": () => _(() => import("./chocolate-bar.BBcD_dKf-CTfyIC_2.js"), []),
            "../../assets/icons/clip.svg": () => _(() => import("./clip.1wTfqQfO-CEEDUmlM.js"), []),
            "../../assets/icons/clock.svg": () => _(() => import("./clock.FSKiaSI0-QeCoxZsc.js"), []),
            "../../assets/icons/close.svg": () => _(() => import("./close.Bpj89sWM-CouQHr_D.js"), []),
            "../../assets/icons/cloud.svg": () => _(() => import("./cloud.DlpRaiK8-DZC0jr15.js"), []),
            "../../assets/icons/coffee.svg": () => _(() => import("./coffee.CH3qFbRe-B954AHdB.js"), []),
            "../../assets/icons/cogwheel.svg": () => _(() => import("./cogwheel.DL4CR938-Ckf7t5IG.js"), []),
            "../../assets/icons/comment.svg": () => _(() => import("./comment.CtIpkFiT-SSaA8Qx7.js"), []),
            "../../assets/icons/computer-mouse.svg": () => _(() => import("./computer-mouse.-0cCMQjt-BZbV0V00.js"), []),
            "../../assets/icons/contactless-payment.svg": () => _(() => import("./contactless-payment.DgT_j_c--BsvDXYSm.js"), []),
            "../../assets/icons/controls.svg": () => _(() => import("./controls.BQLRk3k6-Szj5R4f5.js"), []),
            "../../assets/icons/conversation-ballons-chat.svg": () => _(() => import("./conversation-ballons-chat.CSou0c8a-Br3weCS7.js"), []),
            "../../assets/icons/conversation-ballons.svg": () => _(() => import("./conversation-ballons.DgA5OZBx-C4-673gI.js"), []),
            "../../assets/icons/crab.svg": () => _(() => import("./crab.BxV0U8CG-SbeXR9f2.js"), []),
            "../../assets/icons/credit-card.svg": () => _(() => import("./credit-card.BOhKYJge-xXkHSjQX.js"), []),
            "../../assets/icons/cross.svg": () => _(() => import("./cross.5JsoxcAz-Dcf711Zg.js"), []),
            "../../assets/icons/crosshair.svg": () => _(() => import("./crosshair.BDSfMQe5-CI_-1ZQi.js"), []),
            "../../assets/icons/cupcake.svg": () => _(() => import("./cupcake.sS34Feae-Dm--lbl3.js"), []),
            "../../assets/icons/cutlery-plate.svg": () => _(() => import("./cutlery-plate.C33BhugE-Co0dh2N_.js"), []),
            "../../assets/icons/deer.svg": () => _(() => import("./deer.B75nlyta-Bv5a__-9.js"), []),
            "../../assets/icons/deposit-machine.svg": () => _(() => import("./deposit-machine.DR94RETQ-BTQt8_8n.js"), []),
            "../../assets/icons/dice-percentage.svg": () => _(() => import("./dice-percentage.Bp5LZxv9-C5LgLmjH.js"), []),
            "../../assets/icons/different-bottles.svg": () => _(() => import("./different-bottles.tNvcnKUS-B82PmIUJ.js"), []),
            "../../assets/icons/direction.svg": () => _(() => import("./direction.JaLYTEkN-DgO5ikzm.js"), []),
            "../../assets/icons/display-play.svg": () => _(() => import("./display-play.RpVlnzg1-LqZx0k70.js"), []),
            "../../assets/icons/display.svg": () => _(() => import("./display.CYsqam6J-mZdLm9bw.js"), []),
            "../../assets/icons/dog.svg": () => _(() => import("./dog.DmLFkC-Y-BWXIaVPo.js"), []),
            "../../assets/icons/download.svg": () => _(() => import("./download.flLZkZ3M-Cw1suCgp.js"), []),
            "../../assets/icons/e-charging-station.svg": () => _(() => import("./e-charging-station.KmaF2KHK-Mzc0digD.js"), []),
            "../../assets/icons/earth-map-marker.svg": () => _(() => import("./earth-map-marker.CJl1OsNV-C542segJ.js"), []),
            "../../assets/icons/earth.svg": () => _(() => import("./earth.DgT9rfHA-ByzVA52c.js"), []),
            "../../assets/icons/ecology-2.svg": () => _(() => import("./ecology-2.DVermmrr-BM-PAOdG.js"), []),
            "../../assets/icons/ecology.svg": () => _(() => import("./ecology.D9OnpAJz-DapCbi4U.js"), []),
            "../../assets/icons/ellipsis-horizontal.svg": () => _(() => import("./ellipsis-horizontal.D92_gSEK-BvtDuYRR.js"), []),
            "../../assets/icons/envelope-close.svg": () => _(() => import("./envelope-close.CJHjoOaA-B2fFhAdq.js"), []),
            "../../assets/icons/envelope-open.svg": () => _(() => import("./envelope-open.Q4kzV1B2-BFRaFOm8.js"), []),
            "../../assets/icons/exclamation-ballon.svg": () => _(() => import("./exclamation-ballon.5cLUh0wp-CV5wbwyp.js"), []),
            "../../assets/icons/exclamation-circle.svg": () => _(() => import("./exclamation-circle.DJnZN7Zs-ul9V9RXy.js"), []),
            "../../assets/icons/exclamation-triangle.svg": () => _(() => import("./exclamation-triangle.Bk7L2uib-BVEf8VaK.js"), []),
            "../../assets/icons/express-delivery.svg": () => _(() => import("./express-delivery.71-hpQ_u-CfuVgTh5.js"), []),
            "../../assets/icons/external-link.svg": () => _(() => import("./external-link.B2e-mlDf-jKIhOW8v.js"), []),
            "../../assets/icons/eye-close.svg": () => _(() => import("./eye-close.C9JokYzK-BOQgAp68.js"), []),
            "../../assets/icons/eye-open.svg": () => _(() => import("./eye-open.CTx2QkGB-BnWi8KtQ.js"), []),
            "../../assets/icons/file.svg": () => _(() => import("./file.DccRj6Mg-VTU7t6ZO.js"), []),
            "../../assets/icons/fingerprint.svg": () => _(() => import("./fingerprint.Bw25RU79-x5LvbDVH.js"), []),
            "../../assets/icons/fireworks.svg": () => _(() => import("./fireworks.CvBTPV-r-BesWO5np.js"), []),
            "../../assets/icons/fish.svg": () => _(() => import("./fish.BogkyIMJ-BlEKLEsS.js"), []),
            "../../assets/icons/flash-on.svg": () => _(() => import("./flash-on.Bl-S1dSt-azgpf5H7.js"), []),
            "../../assets/icons/flower.svg": () => _(() => import("./flower.BF9A7KKY-C8AkZk3C.js"), []),
            "../../assets/icons/flyer.svg": () => _(() => import("./flyer.CAmTfLZI-CLS42lgi.js"), []),
            "../../assets/icons/food-1.svg": () => _(() => import("./food-1.CMU3eJCw-B4LrKBoG.js"), []),
            "../../assets/icons/food-2.svg": () => _(() => import("./food-2.Bo09o7VV-BTfnDADl.js"), []),
            "../../assets/icons/food-quality.svg": () => _(() => import("./food-quality.ujB9VE-t-BKwINvcD.js"), []),
            "../../assets/icons/gift-close.svg": () => _(() => import("./gift-close.CsmhARcM-DP6VXsG6.js"), []),
            "../../assets/icons/gift-open.svg": () => _(() => import("./gift-open.DJn0J5Yu-DqYLUN5j.js"), []),
            "../../assets/icons/glass-bottle-percentage.svg": () => _(() => import("./glass-bottle-percentage.B91voyuv-BX-XJeJc.js"), []),
            "../../assets/icons/good-solid.svg": () => _(() => import("./good-solid.Boe8O9EA-D9DT0iTj.js"), []),
            "../../assets/icons/good.svg": () => _(() => import("./good.ylYOJtWs-DvnKpdmx.js"), []),
            "../../assets/icons/goose.svg": () => _(() => import("./goose.uDnc_z3U-BUpFT1kS.js"), []),
            "../../assets/icons/grapes.svg": () => _(() => import("./grapes.nQxxyfgQ-OwDiukCz.js"), []),
            "../../assets/icons/grill.svg": () => _(() => import("./grill.Dy6cUpmT-focXuVrV.js"), []),
            "../../assets/icons/hand-coins.svg": () => _(() => import("./hand-coins.CVNLGAOb-BmvcJalT.js"), []),
            "../../assets/icons/hand-pointer.svg": () => _(() => import("./hand-pointer.BreliwgU-CxFqv5rR.js"), []),
            "../../assets/icons/handshake.svg": () => _(() => import("./handshake.CyAu3pYE-vXAsseS3.js"), []),
            "../../assets/icons/heart-regular.svg": () => _(() => import("./heart-regular.1A51sryE-BRUGV3-9.js"), []),
            "../../assets/icons/heart-solid.svg": () => _(() => import("./heart-solid.Db7VGR4_-Dwayi6A9.js"), []),
            "../../assets/icons/heartbeat.svg": () => _(() => import("./heartbeat.DkkutMOD-Mqkeeyyb.js"), []),
            "../../assets/icons/hook-bold.svg": () => _(() => import("./hook-bold.BmmKQbeY-DmikxLdt.js"), []),
            "../../assets/icons/hook-circle.svg": () => _(() => import("./hook-circle.BkYxQRA3-DSBw2Gc-.js"), []),
            "../../assets/icons/hook-shield.svg": () => _(() => import("./hook-shield.CX02pkRd-B5IJTsKQ.js"), []),
            "../../assets/icons/hook-square.svg": () => _(() => import("./hook-square.iTSf85fr-BR6YV11B.js"), []),
            "../../assets/icons/hook.svg": () => _(() => import("./hook.Bkn8vjhQ-Csw5SraL.js"), []),
            "../../assets/icons/house.svg": () => _(() => import("./house.DjseruVR-B6wXLMy8.js"), []),
            "../../assets/icons/information-circle.svg": () => _(() => import("./information-circle.DoIBSAVi-phECqYRF.js"), []),
            "../../assets/icons/invoice.svg": () => _(() => import("./invoice.BLoTMPQJ-4kfklZf0.js"), []),
            "../../assets/icons/keyboard.svg": () => _(() => import("./keyboard.EOXNjU7r-sM6uNwaF.js"), []),
            "../../assets/icons/kitchenware.svg": () => _(() => import("./kitchenware.CyPk7IaM-DHPrYrob.js"), []),
            "../../assets/icons/leaf.svg": () => _(() => import("./leaf.CIyrULgK-Cn592nik.js"), []),
            "../../assets/icons/legal.svg": () => _(() => import("./legal.C8_lHh04-CTtZsyss.js"), []),
            "../../assets/icons/lidl-plus-vertical.svg": () => _(() => import("./lidl-plus-vertical.CWl97nF6-Cw6KdUJn.js"), []),
            "../../assets/icons/lightbulb-off.svg": () => _(() => import("./lightbulb-off.C4ICstBC-BZcoJW-B.js"), []),
            "../../assets/icons/lightbulb-on.svg": () => _(() => import("./lightbulb-on.D0srEQF4-Ci3NNIKs.js"), []),
            "../../assets/icons/lock-close.svg": () => _(() => import("./lock-close.BzsvJqeh-D8cDpreu.js"), []),
            "../../assets/icons/lock-open.svg": () => _(() => import("./lock-open.-by6C0eK-CkaP4wgB.js"), []),
            "../../assets/icons/log-in.svg": () => _(() => import("./log-in.CIoVWXLC-D3XU1-QO.js"), []),
            "../../assets/icons/log-out.svg": () => _(() => import("./log-out.qW1aEZyR-By0rxlj7.js"), []),
            "../../assets/icons/magnifier-minus.svg": () => _(() => import("./magnifier-minus.RpSaT2km-BmBKgZKt.js"), []),
            "../../assets/icons/magnifier-plus.svg": () => _(() => import("./magnifier-plus.CCUCjvKe-CzZWmwqF.js"), []),
            "../../assets/icons/magnifier.svg": () => _(() => import("./magnifier.CgsoXhBF-CajoQY2y.js"), []),
            "../../assets/icons/map-marker.svg": () => _(() => import("./map-marker.C10_eEqG-hh-tcyz2.js"), []),
            "../../assets/icons/map.svg": () => _(() => import("./map.CUJ726Qw-BIrptDxp.js"), []),
            "../../assets/icons/meat-bio.svg": () => _(() => import("./meat-bio.D0YED-Pn-CZmoBu6R.js"), []),
            "../../assets/icons/megaphone.svg": () => _(() => import("./megaphone.Bm3c49HM-B211ajrH.js"), []),
            "../../assets/icons/microphone-on.svg": () => _(() => import("./microphone-on.BZIszQ75-BiW5aDaX.js"), []),
            "../../assets/icons/minus.svg": () => _(() => import("./minus.BapPo0kr-CcivAB2U.js"), []),
            "../../assets/icons/money-return.svg": () => _(() => import("./money-return.B3WgxItw-Dtk_mFyF.js"), []),
            "../../assets/icons/money.svg": () => _(() => import("./money.CU2g1YsK-B3w51uwB.js"), []),
            "../../assets/icons/mug-hot.svg": () => _(() => import("./mug-hot.luK4U62N-MVcuvOBx.js"), []),
            "../../assets/icons/neutral-solid.svg": () => _(() => import("./neutral-solid.DmEP9wKA-DBV1MF2h.js"), []),
            "../../assets/icons/neutral.svg": () => _(() => import("./neutral.Bw_BhWuC-B3j2NgRH.js"), []),
            "../../assets/icons/newspaper.svg": () => _(() => import("./newspaper.Di_c_AO_-CUU0I39i.js"), []),
            "../../assets/icons/non-food.svg": () => _(() => import("./non-food.CJWsvTFg-BFOr3ccS.js"), []),
            "../../assets/icons/offers.svg": () => _(() => import("./offers._4xVUv4_-B-q7Rc5S.js"), []),
            "../../assets/icons/olive-cheese.svg": () => _(() => import("./olive-cheese.BBiztZcW-DrmtLPGn.js"), []),
            "../../assets/icons/orange-juice.svg": () => _(() => import("./orange-juice.C0a_o5NP-BY-mCrQ4.js"), []),
            "../../assets/icons/packstation.svg": () => _(() => import("./packstation.DWfVk-Vv-B-nVGfWW.js"), []),
            "../../assets/icons/paper-plane.svg": () => _(() => import("./paper-plane.SXgruGBE-CZSapIFW.js"), []),
            "../../assets/icons/paragraph-circle.svg": () => _(() => import("./paragraph-circle.Cyl9qOUI-DfgFYe6l.js"), []),
            "../../assets/icons/parking-clock.svg": () => _(() => import("./parking-clock.C-YExa31-kT3uvn8H.js"), []),
            "../../assets/icons/parking-disabled-people.svg": () => _(() => import("./parking-disabled-people.C58SLGml-Ci4I3YSh.js"), []),
            "../../assets/icons/parking-garage.svg": () => _(() => import("./parking-garage.JLD78Ufz-DDX5k9qv.js"), []),
            "../../assets/icons/parking.svg": () => _(() => import("./parking.gczhpqB7-pdbaN9X-.js"), []),
            "../../assets/icons/pause-circle.svg": () => _(() => import("./pause-circle.QvaA7zYp-Bp9SJrVu.js"), []),
            "../../assets/icons/peach.svg": () => _(() => import("./peach.DD6uqwJt-Dya_oCWI.js"), []),
            "../../assets/icons/pencil.svg": () => _(() => import("./pencil.CHGJaWg7-BrntuoF-.js"), []),
            "../../assets/icons/phone-envelope.svg": () => _(() => import("./phone-envelope.CTeSkXwx-MSzRDvEn.js"), []),
            "../../assets/icons/phone.svg": () => _(() => import("./phone.C5PK8RJX-Bb0whSQw.js"), []),
            "../../assets/icons/piece-of-cake.svg": () => _(() => import("./piece-of-cake.CWKSqEV2-ykE-1ugO.js"), []),
            "../../assets/icons/pig.svg": () => _(() => import("./pig.Dg-zmLGq-DVZT-lZB.js"), []),
            "../../assets/icons/piggy-bank.svg": () => _(() => import("./piggy-bank.CSNUwdHF-COE2ltQ9.js"), []),
            "../../assets/icons/placeholder.svg": () => _(() => import("./placeholder.CK_gTbU7-B6p63vjX.js"), []),
            "../../assets/icons/plane.svg": () => _(() => import("./plane.KGqeuqsN-DYz1QtE0.js"), []),
            "../../assets/icons/plastic-packaging.svg": () => _(() => import("./plastic-packaging.DPqAO8TQ-DYt17Fq0.js"), []),
            "../../assets/icons/play-circle.svg": () => _(() => import("./play-circle.DfLe2b_Y-B1028tgW.js"), []),
            "../../assets/icons/plus.svg": () => _(() => import("./plus.DpGmV8pZ-aqdnI7nt.js"), []),
            "../../assets/icons/power.svg": () => _(() => import("./power.Buhpbs2U-BKNQtA7m.js"), []),
            "../../assets/icons/pretzel.svg": () => _(() => import("./pretzel.Dgi0n82--BP7yCWTc.js"), []),
            "../../assets/icons/printer.svg": () => _(() => import("./printer.BnPIdLm5-DWcmLkA2.js"), []),
            "../../assets/icons/qr-code.svg": () => _(() => import("./qr-code.CU0Dg5oL-DUg0mVnc.js"), []),
            "../../assets/icons/questionmark-ballon.svg": () => _(() => import("./questionmark-ballon.B9cYwaE_-8W-vgB1H.js"), []),
            "../../assets/icons/questionmark-circle.svg": () => _(() => import("./questionmark-circle.BeFien8P-341iAbmQ.js"), []),
            "../../assets/icons/rabbit.svg": () => _(() => import("./rabbit.CMuZmug0-13R8pdo_.js"), []),
            "../../assets/icons/receipt.svg": () => _(() => import("./receipt.BYYfOUX_-I2k0uOzs.js"), []),
            "../../assets/icons/rotate.svg": () => _(() => import("./rotate.Q0lARl7x-BwMXOw75.js"), []),
            "../../assets/icons/salad-bowl.svg": () => _(() => import("./salad-bowl.DrYONfkk-YLDR4c9i.js"), []),
            "../../assets/icons/salami.svg": () => _(() => import("./salami.D8Ps0PNY-CCr-4vAk.js"), []),
            "../../assets/icons/self-check-out.svg": () => _(() => import("./self-check-out.DtVg76wO-DgN1EVDI.js"), []),
            "../../assets/icons/share.svg": () => _(() => import("./share.Cmwx5TFM-Bm_Ml9qm.js"), []),
            "../../assets/icons/shell.svg": () => _(() => import("./shell.BjFK405c-DPPN5oFg.js"), []),
            "../../assets/icons/shopping-bag.svg": () => _(() => import("./shopping-bag.Daeg1kd9-COmZBxbX.js"), []),
            "../../assets/icons/shopping-cart-1.svg": () => _(() => import("./shopping-cart-1.Cjngz99K-B6w7vvlk.js"), []),
            "../../assets/icons/shopping-cart-2.svg": () => _(() => import("./shopping-cart-2.BZIvW8uF-DRCAa2M5.js"), []),
            "../../assets/icons/shrimp.svg": () => _(() => import("./shrimp.C9A-SSPe-Cf0a4kXk.js"), []),
            "../../assets/icons/smartphone.svg": () => _(() => import("./smartphone.CiaIBt_0-CtfwcLLJ.js"), []),
            "../../assets/icons/snowflake.svg": () => _(() => import("./snowflake.Dsn3jiKS-ZK_nvlMG.js"), []),
            "../../assets/icons/social-share.svg": () => _(() => import("./social-share.BIM5VrPi-txUMchmB.js"), []),
            "../../assets/icons/square.svg": () => _(() => import("./square.BiPO2B5u-DmK3XbT8.js"), []),
            "../../assets/icons/star-regular.svg": () => _(() => import("./star-regular.B-XMXBIq-Bb-30AmU.js"), []),
            "../../assets/icons/star-solid.svg": () => _(() => import("./star-solid.B-vfolxL-DSLWhRL-.js"), []),
            "../../assets/icons/steak.svg": () => _(() => import("./steak.0sx8BRx1-BOXRdzNq.js"), []),
            "../../assets/icons/stop-sign.svg": () => _(() => import("./stop-sign.D6C-cSU--D9Hdxv2h.js"), []),
            "../../assets/icons/stopwatch.svg": () => _(() => import("./stopwatch.Xnl6qIkq-BVCxqj95.js"), []),
            "../../assets/icons/store-magnifier.svg": () => _(() => import("./store-magnifier.xpUCbvNV-BcY4gAuY.js"), []),
            "../../assets/icons/store-star.svg": () => _(() => import("./store-star.DNG3EWYU-C2TAxg0W.js"), []),
            "../../assets/icons/store.svg": () => _(() => import("./store.BWhJdhIk-D-shvLGf.js"), []),
            "../../assets/icons/sun.svg": () => _(() => import("./sun.DCgDrmkj-D408hk8S.js"), []),
            "../../assets/icons/sushi.svg": () => _(() => import("./sushi.BCMvrUqK-Bhx2-_21.js"), []),
            "../../assets/icons/sync.svg": () => _(() => import("./sync.BPWr9zzk-DIB7A3pZ.js"), []),
            "../../assets/icons/taxfree.svg": () => _(() => import("./taxfree.1GcvUp2c-1CYNLUf7.js"), []),
            "../../assets/icons/thermometer.svg": () => _(() => import("./thermometer.DwfD-zj4-Ayo_lPnp.js"), []),
            "../../assets/icons/thumbs-down-regular.svg": () => _(() => import("./thumbs-down-regular.DQxe-MTZ-UTIXoJGT.js"), []),
            "../../assets/icons/thumbs-down-solid.svg": () => _(() => import("./thumbs-down-solid.Ccg2QOmG-DB_A6ciU.js"), []),
            "../../assets/icons/thumbs-up-ballon.svg": () => _(() => import("./thumbs-up-ballon.DO3kPh9k-5bknrtKm.js"), []),
            "../../assets/icons/thumbs-up-regular.svg": () => _(() => import("./thumbs-up-regular.D23SBdq4-DaJDW5Yx.js"), []),
            "../../assets/icons/thumbs-up-solid.svg": () => _(() => import("./thumbs-up-solid.otnNnJ7U-y1muWFde.js"), []),
            "../../assets/icons/toilet.svg": () => _(() => import("./toilet.C9Mf6N46-BZkzEs99.js"), []),
            "../../assets/icons/train.svg": () => _(() => import("./train.lXatSvNM-JASP4GSR.js"), []),
            "../../assets/icons/trash.svg": () => _(() => import("./trash.CBK8FSjr-Coe6yJzW.js"), []),
            "../../assets/icons/triangle.svg": () => _(() => import("./triangle.Db6jG841-CY4jvbPZ.js"), []),
            "../../assets/icons/trophy.svg": () => _(() => import("./trophy.BlPh8asp-Muwc_Tns.js"), []),
            "../../assets/icons/truck-bag.svg": () => _(() => import("./truck-bag.DRwtHyes-D3iQFYoB.js"), []),
            "../../assets/icons/truck.svg": () => _(() => import("./truck.CaMQ1Evw-Bv-s3YY0.js"), []),
            "../../assets/icons/turkey.svg": () => _(() => import("./turkey.BFSLKKLe-vtzGQslw.js"), []),
            "../../assets/icons/undo.svg": () => _(() => import("./undo.CZNENTnh-CZRD08JX.js"), []),
            "../../assets/icons/upload.svg": () => _(() => import("./upload.pJkwlNV4-Cg4R3CQh.js"), []),
            "../../assets/icons/user-eighteen-plus.svg": () => _(() => import("./user-eighteen-plus.AW8tDV7U-BNBMnVL7.js"), []),
            "../../assets/icons/user.svg": () => _(() => import("./user.D05og-pt-oY5EWahn.js"), []),
            "../../assets/icons/vegetables.svg": () => _(() => import("./vegetables.B4NldhMA-CQ70g-z_.js"), []),
            "../../assets/icons/volume-up.svg": () => _(() => import("./volume-up.DO9ZBlgC-B-LzQnMj.js"), []),
            "../../assets/icons/voucher-euro.svg": () => _(() => import("./voucher-euro.BypZ1MU1-B_Ejve2S.js"), []),
            "../../assets/icons/voucher-gift.svg": () => _(() => import("./voucher-gift.CFfQp_It-BEtA1tHS.js"), []),
            "../../assets/icons/voucher-percentage.svg": () => _(() => import("./voucher-percentage.TZYc-A-_-F4J_puYi.js"), []),
            "../../assets/icons/wallet-coins.svg": () => _(() => import("./wallet-coins.C5176kyL-DPl23x0K.js"), []),
            "../../assets/icons/wet-stamp.svg": () => _(() => import("./wet-stamp.C_c63Yz--C03mHu1l.js"), []),
            "../../assets/icons/wheelchair.svg": () => _(() => import("./wheelchair.NUcEnYf_-DpJsRKpP.js"), []),
            "../../assets/icons/wifi.svg": () => _(() => import("./wifi.ClxV_5ww-CvAYLDYD.js"), []),
            "../../assets/icons/wine-glass-1.svg": () => _(() => import("./wine-glass-1.Bcl-5R8V-Bg8Q4wul.js"), []),
            "../../assets/icons/wine-glass-2.svg": () => _(() => import("./wine-glass-2.DBTwC1iW-DyBON5Ic.js"), []),
            "../../assets/icons/wine-glasses.svg": () => _(() => import("./wine-glasses.CQpZ_Rpy-C89iADnx.js"), []),
            "../../assets/icons/worst-solid.svg": () => _(() => import("./worst-solid.DIkSDDHz-B3usgC2L.js"), []),
            "../../assets/icons/worst.svg": () => _(() => import("./worst.AgXHX1XR-DZcmwm5p.js"), [])
          }), `../../assets/icons/${r}.svg`, 5);
          n.value = s.default
        } catch {
          const s = await D_(Object.assign({
            "../../assets/icons/360-degree.svg": () => _(() => import("./360-degree.Bl1hS1BE-C-9aGpsB.js"), []),
            "../../assets/icons/apple.svg": () => _(() => import("./apple.Ckdpv1md-rDDFLwgG.js"), []),
            "../../assets/icons/arrow-down.svg": () => _(() => import("./arrow-down.Btr3GJfq-Dw8kulxu.js"), []),
            "../../assets/icons/arrow-left-circle.svg": () => _(() => import("./arrow-left-circle.Cto7S_qn-QgddAfzO.js"), []),
            "../../assets/icons/arrow-left.svg": () => _(() => import("./arrow-left.BzTqyRJc-DfiQMK6K.js"), []),
            "../../assets/icons/arrow-right-circle.svg": () => _(() => import("./arrow-right-circle.CaTeQvlU-DjQR7uXE.js"), []),
            "../../assets/icons/arrow-right.svg": () => _(() => import("./arrow-right.D6tDlMr8-B2I8JGzb.js"), []),
            "../../assets/icons/arrow-up.svg": () => _(() => import("./arrow-up.DoxiLcxO-yHB-B7IC.js"), []),
            "../../assets/icons/arrows-expand.svg": () => _(() => import("./arrows-expand.EVMxnO11-wIonTrHB.js"), []),
            "../../assets/icons/arrows-vertical.svg": () => _(() => import("./arrows-vertical.C5WseRFJ-dliglezC.js"), []),
            "../../assets/icons/award.svg": () => _(() => import("./award.Ciqgfdph-hHBpGmtG.js"), []),
            "../../assets/icons/baby changing station.svg": () => _(() => import("./baby changing station.qEeD3Siq-BVBLqpaX.js"), []),
            "../../assets/icons/bad-solid.svg": () => _(() => import("./bad-solid.BRuaMV0I-DnymZ5TC.js"), []),
            "../../assets/icons/bad.svg": () => _(() => import("./bad.C7XOupTR-C6H4K7DI.js"), []),
            "../../assets/icons/bakery-products.svg": () => _(() => import("./bakery-products.DZ97pD17-Bhk4fDDI.js"), []),
            "../../assets/icons/barrel.svg": () => _(() => import("./barrel.D2Ek_gWc-CnjruoQr.js"), []),
            "../../assets/icons/bars-horizontal.svg": () => _(() => import("./bars-horizontal.Bfwy3STy-BaPidoiq.js"), []),
            "../../assets/icons/basket.svg": () => _(() => import("./basket.VnEO18-h-ClT22X9i.js"), []),
            "../../assets/icons/beer-glass.svg": () => _(() => import("./beer-glass.ai9YC3u3-pYxH4K7F.js"), []),
            "../../assets/icons/bell-regular.svg": () => _(() => import("./bell-regular.BzG7rHVC-BnKeo0qQ.js"), []),
            "../../assets/icons/bell-solid.svg": () => _(() => import("./bell-solid.CKvLpXgk-bAnOj_rR.js"), []),
            "../../assets/icons/benefits.svg": () => _(() => import("./benefits.-vhU2qej-Dkl_l6fv.js"), []),
            "../../assets/icons/best-solid.svg": () => _(() => import("./best-solid.DUjn2jjy-DD3JONHn.js"), []),
            "../../assets/icons/best.svg": () => _(() => import("./best.qQcssm_T-Bn3UY4e8.js"), []),
            "../../assets/icons/better-solid.svg": () => _(() => import("./better-solid.N7QrjAEq-D_xpqCc_.js"), []),
            "../../assets/icons/better.svg": () => _(() => import("./better.CfdieLmO-c4DAUTzm.js"), []),
            "../../assets/icons/bicycle.svg": () => _(() => import("./bicycle.XlOMsN_C-C9ZFClQO.js"), []),
            "../../assets/icons/bio-leaf.svg": () => _(() => import("./bio-leaf.Rm9ev2qG-C-FDdib1.js"), []),
            "../../assets/icons/book-open.svg": () => _(() => import("./book-open.Ds9w8_Ky-T43ZHwG1.js"), []),
            "../../assets/icons/bookmark-regular.svg": () => _(() => import("./bookmark-regular.BHUiSEkf-5x78oLvl.js"), []),
            "../../assets/icons/bookmark-solid.svg": () => _(() => import("./bookmark-solid.DrFls93T-DlMp0RG4.js"), []),
            "../../assets/icons/bottle.svg": () => _(() => import("./bottle.B93RPyNG-C0FLdvtu.js"), []),
            "../../assets/icons/bottles.svg": () => _(() => import("./bottles.DGSOXPaz-8hU_7bfN.js"), []),
            "../../assets/icons/box-coins-return.svg": () => _(() => import("./box-coins-return.C04AHukr-D0L7OVdQ.js"), []),
            "../../assets/icons/box-multiple.svg": () => _(() => import("./box-multiple.Duv8gCIL-B5UhA3uE.js"), []),
            "../../assets/icons/box-open.svg": () => _(() => import("./box-open.tdTQC2TH-DNctT7Qd.js"), []),
            "../../assets/icons/box-return-30-days.svg": () => _(() => import("./box-return-30-days.D66vQ_q7-E8ny3HNS.js"), []),
            "../../assets/icons/box-return-90-days.svg": () => _(() => import("./box-return-90-days.DWEwX0By-CcEIOcKq.js"), []),
            "../../assets/icons/box-return.svg": () => _(() => import("./box-return.x5tDljW5-DJXn-aaL.js"), []),
            "../../assets/icons/box.svg": () => _(() => import("./box.rJNmr86u-VjE57-6s.js"), []),
            "../../assets/icons/bread.svg": () => _(() => import("./bread.Cc2qBm1Q-CZnK2j1f.js"), []),
            "../../assets/icons/bulletlist.svg": () => _(() => import("./bulletlist.COMX8RPo-8YA2J4g-.js"), []),
            "../../assets/icons/bun.svg": () => _(() => import("./bun.B_D4BEKw-DOeEFqSD.js"), []),
            "../../assets/icons/calendar-clock.svg": () => _(() => import("./calendar-clock.BAWkpm5O-BubJ3poj.js"), []),
            "../../assets/icons/calendar.svg": () => _(() => import("./calendar.Dk86CNzu-C_dAZyYf.js"), []),
            "../../assets/icons/camera.svg": () => _(() => import("./camera.C9vQGkNq-DcbZb9PZ.js"), []),
            "../../assets/icons/car.svg": () => _(() => import("./car.DPerU7Xa-tR-9hhoE.js"), []),
            "../../assets/icons/cash-cashless.svg": () => _(() => import("./cash-cashless.DVpLsP_9-N9aio1Gl.js"), []),
            "../../assets/icons/cattle.svg": () => _(() => import("./cattle.tKeHjx8x-BhXJOz5i.js"), []),
            "../../assets/icons/certificate.svg": () => _(() => import("./certificate.CTiqmBge-IuO9bOap.js"), []),
            "../../assets/icons/checklist.svg": () => _(() => import("./checklist.-JDCDLd6-BA3My9Oh.js"), []),
            "../../assets/icons/cheese-1.svg": () => _(() => import("./cheese-1.eddHsrY7-4W3IQo6H.js"), []),
            "../../assets/icons/cheese-2.svg": () => _(() => import("./cheese-2.D2D3zUcr-BuD-faVZ.js"), []),
            "../../assets/icons/chefs-hat.svg": () => _(() => import("./chefs-hat.ttszwXAA-DP5peS3E.js"), []),
            "../../assets/icons/chicken.svg": () => _(() => import("./chicken.BhrVSq4j-3k6cezX1.js"), []),
            "../../assets/icons/chocolate-bar.svg": () => _(() => import("./chocolate-bar.BBcD_dKf-CTfyIC_2.js"), []),
            "../../assets/icons/clip.svg": () => _(() => import("./clip.1wTfqQfO-CEEDUmlM.js"), []),
            "../../assets/icons/clock.svg": () => _(() => import("./clock.FSKiaSI0-QeCoxZsc.js"), []),
            "../../assets/icons/close.svg": () => _(() => import("./close.Bpj89sWM-CouQHr_D.js"), []),
            "../../assets/icons/cloud.svg": () => _(() => import("./cloud.DlpRaiK8-DZC0jr15.js"), []),
            "../../assets/icons/coffee.svg": () => _(() => import("./coffee.CH3qFbRe-B954AHdB.js"), []),
            "../../assets/icons/cogwheel.svg": () => _(() => import("./cogwheel.DL4CR938-Ckf7t5IG.js"), []),
            "../../assets/icons/comment.svg": () => _(() => import("./comment.CtIpkFiT-SSaA8Qx7.js"), []),
            "../../assets/icons/computer-mouse.svg": () => _(() => import("./computer-mouse.-0cCMQjt-BZbV0V00.js"), []),
            "../../assets/icons/contactless-payment.svg": () => _(() => import("./contactless-payment.DgT_j_c--BsvDXYSm.js"), []),
            "../../assets/icons/controls.svg": () => _(() => import("./controls.BQLRk3k6-Szj5R4f5.js"), []),
            "../../assets/icons/conversation-ballons-chat.svg": () => _(() => import("./conversation-ballons-chat.CSou0c8a-Br3weCS7.js"), []),
            "../../assets/icons/conversation-ballons.svg": () => _(() => import("./conversation-ballons.DgA5OZBx-C4-673gI.js"), []),
            "../../assets/icons/crab.svg": () => _(() => import("./crab.BxV0U8CG-SbeXR9f2.js"), []),
            "../../assets/icons/credit-card.svg": () => _(() => import("./credit-card.BOhKYJge-xXkHSjQX.js"), []),
            "../../assets/icons/cross.svg": () => _(() => import("./cross.5JsoxcAz-Dcf711Zg.js"), []),
            "../../assets/icons/crosshair.svg": () => _(() => import("./crosshair.BDSfMQe5-CI_-1ZQi.js"), []),
            "../../assets/icons/cupcake.svg": () => _(() => import("./cupcake.sS34Feae-Dm--lbl3.js"), []),
            "../../assets/icons/cutlery-plate.svg": () => _(() => import("./cutlery-plate.C33BhugE-Co0dh2N_.js"), []),
            "../../assets/icons/deer.svg": () => _(() => import("./deer.B75nlyta-Bv5a__-9.js"), []),
            "../../assets/icons/deposit-machine.svg": () => _(() => import("./deposit-machine.DR94RETQ-BTQt8_8n.js"), []),
            "../../assets/icons/dice-percentage.svg": () => _(() => import("./dice-percentage.Bp5LZxv9-C5LgLmjH.js"), []),
            "../../assets/icons/different-bottles.svg": () => _(() => import("./different-bottles.tNvcnKUS-B82PmIUJ.js"), []),
            "../../assets/icons/direction.svg": () => _(() => import("./direction.JaLYTEkN-DgO5ikzm.js"), []),
            "../../assets/icons/display-play.svg": () => _(() => import("./display-play.RpVlnzg1-LqZx0k70.js"), []),
            "../../assets/icons/display.svg": () => _(() => import("./display.CYsqam6J-mZdLm9bw.js"), []),
            "../../assets/icons/dog.svg": () => _(() => import("./dog.DmLFkC-Y-BWXIaVPo.js"), []),
            "../../assets/icons/download.svg": () => _(() => import("./download.flLZkZ3M-Cw1suCgp.js"), []),
            "../../assets/icons/e-charging-station.svg": () => _(() => import("./e-charging-station.KmaF2KHK-Mzc0digD.js"), []),
            "../../assets/icons/earth-map-marker.svg": () => _(() => import("./earth-map-marker.CJl1OsNV-C542segJ.js"), []),
            "../../assets/icons/earth.svg": () => _(() => import("./earth.DgT9rfHA-ByzVA52c.js"), []),
            "../../assets/icons/ecology-2.svg": () => _(() => import("./ecology-2.DVermmrr-BM-PAOdG.js"), []),
            "../../assets/icons/ecology.svg": () => _(() => import("./ecology.D9OnpAJz-DapCbi4U.js"), []),
            "../../assets/icons/ellipsis-horizontal.svg": () => _(() => import("./ellipsis-horizontal.D92_gSEK-BvtDuYRR.js"), []),
            "../../assets/icons/envelope-close.svg": () => _(() => import("./envelope-close.CJHjoOaA-B2fFhAdq.js"), []),
            "../../assets/icons/envelope-open.svg": () => _(() => import("./envelope-open.Q4kzV1B2-BFRaFOm8.js"), []),
            "../../assets/icons/exclamation-ballon.svg": () => _(() => import("./exclamation-ballon.5cLUh0wp-CV5wbwyp.js"), []),
            "../../assets/icons/exclamation-circle.svg": () => _(() => import("./exclamation-circle.DJnZN7Zs-ul9V9RXy.js"), []),
            "../../assets/icons/exclamation-triangle.svg": () => _(() => import("./exclamation-triangle.Bk7L2uib-BVEf8VaK.js"), []),
            "../../assets/icons/express-delivery.svg": () => _(() => import("./express-delivery.71-hpQ_u-CfuVgTh5.js"), []),
            "../../assets/icons/external-link.svg": () => _(() => import("./external-link.B2e-mlDf-jKIhOW8v.js"), []),
            "../../assets/icons/eye-close.svg": () => _(() => import("./eye-close.C9JokYzK-BOQgAp68.js"), []),
            "../../assets/icons/eye-open.svg": () => _(() => import("./eye-open.CTx2QkGB-BnWi8KtQ.js"), []),
            "../../assets/icons/file.svg": () => _(() => import("./file.DccRj6Mg-VTU7t6ZO.js"), []),
            "../../assets/icons/fingerprint.svg": () => _(() => import("./fingerprint.Bw25RU79-x5LvbDVH.js"), []),
            "../../assets/icons/fireworks.svg": () => _(() => import("./fireworks.CvBTPV-r-BesWO5np.js"), []),
            "../../assets/icons/fish.svg": () => _(() => import("./fish.BogkyIMJ-BlEKLEsS.js"), []),
            "../../assets/icons/flash-on.svg": () => _(() => import("./flash-on.Bl-S1dSt-azgpf5H7.js"), []),
            "../../assets/icons/flower.svg": () => _(() => import("./flower.BF9A7KKY-C8AkZk3C.js"), []),
            "../../assets/icons/flyer.svg": () => _(() => import("./flyer.CAmTfLZI-CLS42lgi.js"), []),
            "../../assets/icons/food-1.svg": () => _(() => import("./food-1.CMU3eJCw-B4LrKBoG.js"), []),
            "../../assets/icons/food-2.svg": () => _(() => import("./food-2.Bo09o7VV-BTfnDADl.js"), []),
            "../../assets/icons/food-quality.svg": () => _(() => import("./food-quality.ujB9VE-t-BKwINvcD.js"), []),
            "../../assets/icons/gift-close.svg": () => _(() => import("./gift-close.CsmhARcM-DP6VXsG6.js"), []),
            "../../assets/icons/gift-open.svg": () => _(() => import("./gift-open.DJn0J5Yu-DqYLUN5j.js"), []),
            "../../assets/icons/glass-bottle-percentage.svg": () => _(() => import("./glass-bottle-percentage.B91voyuv-BX-XJeJc.js"), []),
            "../../assets/icons/good-solid.svg": () => _(() => import("./good-solid.Boe8O9EA-D9DT0iTj.js"), []),
            "../../assets/icons/good.svg": () => _(() => import("./good.ylYOJtWs-DvnKpdmx.js"), []),
            "../../assets/icons/goose.svg": () => _(() => import("./goose.uDnc_z3U-BUpFT1kS.js"), []),
            "../../assets/icons/grapes.svg": () => _(() => import("./grapes.nQxxyfgQ-OwDiukCz.js"), []),
            "../../assets/icons/grill.svg": () => _(() => import("./grill.Dy6cUpmT-focXuVrV.js"), []),
            "../../assets/icons/hand-coins.svg": () => _(() => import("./hand-coins.CVNLGAOb-BmvcJalT.js"), []),
            "../../assets/icons/hand-pointer.svg": () => _(() => import("./hand-pointer.BreliwgU-CxFqv5rR.js"), []),
            "../../assets/icons/handshake.svg": () => _(() => import("./handshake.CyAu3pYE-vXAsseS3.js"), []),
            "../../assets/icons/heart-regular.svg": () => _(() => import("./heart-regular.1A51sryE-BRUGV3-9.js"), []),
            "../../assets/icons/heart-solid.svg": () => _(() => import("./heart-solid.Db7VGR4_-Dwayi6A9.js"), []),
            "../../assets/icons/heartbeat.svg": () => _(() => import("./heartbeat.DkkutMOD-Mqkeeyyb.js"), []),
            "../../assets/icons/hook-bold.svg": () => _(() => import("./hook-bold.BmmKQbeY-DmikxLdt.js"), []),
            "../../assets/icons/hook-circle.svg": () => _(() => import("./hook-circle.BkYxQRA3-DSBw2Gc-.js"), []),
            "../../assets/icons/hook-shield.svg": () => _(() => import("./hook-shield.CX02pkRd-B5IJTsKQ.js"), []),
            "../../assets/icons/hook-square.svg": () => _(() => import("./hook-square.iTSf85fr-BR6YV11B.js"), []),
            "../../assets/icons/hook.svg": () => _(() => import("./hook.Bkn8vjhQ-Csw5SraL.js"), []),
            "../../assets/icons/house.svg": () => _(() => import("./house.DjseruVR-B6wXLMy8.js"), []),
            "../../assets/icons/information-circle.svg": () => _(() => import("./information-circle.DoIBSAVi-phECqYRF.js"), []),
            "../../assets/icons/invoice.svg": () => _(() => import("./invoice.BLoTMPQJ-4kfklZf0.js"), []),
            "../../assets/icons/keyboard.svg": () => _(() => import("./keyboard.EOXNjU7r-sM6uNwaF.js"), []),
            "../../assets/icons/kitchenware.svg": () => _(() => import("./kitchenware.CyPk7IaM-DHPrYrob.js"), []),
            "../../assets/icons/leaf.svg": () => _(() => import("./leaf.CIyrULgK-Cn592nik.js"), []),
            "../../assets/icons/legal.svg": () => _(() => import("./legal.C8_lHh04-CTtZsyss.js"), []),
            "../../assets/icons/lidl-plus-vertical.svg": () => _(() => import("./lidl-plus-vertical.CWl97nF6-Cw6KdUJn.js"), []),
            "../../assets/icons/lightbulb-off.svg": () => _(() => import("./lightbulb-off.C4ICstBC-BZcoJW-B.js"), []),
            "../../assets/icons/lightbulb-on.svg": () => _(() => import("./lightbulb-on.D0srEQF4-Ci3NNIKs.js"), []),
            "../../assets/icons/lock-close.svg": () => _(() => import("./lock-close.BzsvJqeh-D8cDpreu.js"), []),
            "../../assets/icons/lock-open.svg": () => _(() => import("./lock-open.-by6C0eK-CkaP4wgB.js"), []),
            "../../assets/icons/log-in.svg": () => _(() => import("./log-in.CIoVWXLC-D3XU1-QO.js"), []),
            "../../assets/icons/log-out.svg": () => _(() => import("./log-out.qW1aEZyR-By0rxlj7.js"), []),
            "../../assets/icons/magnifier-minus.svg": () => _(() => import("./magnifier-minus.RpSaT2km-BmBKgZKt.js"), []),
            "../../assets/icons/magnifier-plus.svg": () => _(() => import("./magnifier-plus.CCUCjvKe-CzZWmwqF.js"), []),
            "../../assets/icons/magnifier.svg": () => _(() => import("./magnifier.CgsoXhBF-CajoQY2y.js"), []),
            "../../assets/icons/map-marker.svg": () => _(() => import("./map-marker.C10_eEqG-hh-tcyz2.js"), []),
            "../../assets/icons/map.svg": () => _(() => import("./map.CUJ726Qw-BIrptDxp.js"), []),
            "../../assets/icons/meat-bio.svg": () => _(() => import("./meat-bio.D0YED-Pn-CZmoBu6R.js"), []),
            "../../assets/icons/megaphone.svg": () => _(() => import("./megaphone.Bm3c49HM-B211ajrH.js"), []),
            "../../assets/icons/microphone-on.svg": () => _(() => import("./microphone-on.BZIszQ75-BiW5aDaX.js"), []),
            "../../assets/icons/minus.svg": () => _(() => import("./minus.BapPo0kr-CcivAB2U.js"), []),
            "../../assets/icons/money-return.svg": () => _(() => import("./money-return.B3WgxItw-Dtk_mFyF.js"), []),
            "../../assets/icons/money.svg": () => _(() => import("./money.CU2g1YsK-B3w51uwB.js"), []),
            "../../assets/icons/mug-hot.svg": () => _(() => import("./mug-hot.luK4U62N-MVcuvOBx.js"), []),
            "../../assets/icons/neutral-solid.svg": () => _(() => import("./neutral-solid.DmEP9wKA-DBV1MF2h.js"), []),
            "../../assets/icons/neutral.svg": () => _(() => import("./neutral.Bw_BhWuC-B3j2NgRH.js"), []),
            "../../assets/icons/newspaper.svg": () => _(() => import("./newspaper.Di_c_AO_-CUU0I39i.js"), []),
            "../../assets/icons/non-food.svg": () => _(() => import("./non-food.CJWsvTFg-BFOr3ccS.js"), []),
            "../../assets/icons/offers.svg": () => _(() => import("./offers._4xVUv4_-B-q7Rc5S.js"), []),
            "../../assets/icons/olive-cheese.svg": () => _(() => import("./olive-cheese.BBiztZcW-DrmtLPGn.js"), []),
            "../../assets/icons/orange-juice.svg": () => _(() => import("./orange-juice.C0a_o5NP-BY-mCrQ4.js"), []),
            "../../assets/icons/packstation.svg": () => _(() => import("./packstation.DWfVk-Vv-B-nVGfWW.js"), []),
            "../../assets/icons/paper-plane.svg": () => _(() => import("./paper-plane.SXgruGBE-CZSapIFW.js"), []),
            "../../assets/icons/paragraph-circle.svg": () => _(() => import("./paragraph-circle.Cyl9qOUI-DfgFYe6l.js"), []),
            "../../assets/icons/parking-clock.svg": () => _(() => import("./parking-clock.C-YExa31-kT3uvn8H.js"), []),
            "../../assets/icons/parking-disabled-people.svg": () => _(() => import("./parking-disabled-people.C58SLGml-Ci4I3YSh.js"), []),
            "../../assets/icons/parking-garage.svg": () => _(() => import("./parking-garage.JLD78Ufz-DDX5k9qv.js"), []),
            "../../assets/icons/parking.svg": () => _(() => import("./parking.gczhpqB7-pdbaN9X-.js"), []),
            "../../assets/icons/pause-circle.svg": () => _(() => import("./pause-circle.QvaA7zYp-Bp9SJrVu.js"), []),
            "../../assets/icons/peach.svg": () => _(() => import("./peach.DD6uqwJt-Dya_oCWI.js"), []),
            "../../assets/icons/pencil.svg": () => _(() => import("./pencil.CHGJaWg7-BrntuoF-.js"), []),
            "../../assets/icons/phone-envelope.svg": () => _(() => import("./phone-envelope.CTeSkXwx-MSzRDvEn.js"), []),
            "../../assets/icons/phone.svg": () => _(() => import("./phone.C5PK8RJX-Bb0whSQw.js"), []),
            "../../assets/icons/piece-of-cake.svg": () => _(() => import("./piece-of-cake.CWKSqEV2-ykE-1ugO.js"), []),
            "../../assets/icons/pig.svg": () => _(() => import("./pig.Dg-zmLGq-DVZT-lZB.js"), []),
            "../../assets/icons/piggy-bank.svg": () => _(() => import("./piggy-bank.CSNUwdHF-COE2ltQ9.js"), []),
            "../../assets/icons/placeholder.svg": () => _(() => import("./placeholder.CK_gTbU7-B6p63vjX.js"), []),
            "../../assets/icons/plane.svg": () => _(() => import("./plane.KGqeuqsN-DYz1QtE0.js"), []),
            "../../assets/icons/plastic-packaging.svg": () => _(() => import("./plastic-packaging.DPqAO8TQ-DYt17Fq0.js"), []),
            "../../assets/icons/play-circle.svg": () => _(() => import("./play-circle.DfLe2b_Y-B1028tgW.js"), []),
            "../../assets/icons/plus.svg": () => _(() => import("./plus.DpGmV8pZ-aqdnI7nt.js"), []),
            "../../assets/icons/power.svg": () => _(() => import("./power.Buhpbs2U-BKNQtA7m.js"), []),
            "../../assets/icons/pretzel.svg": () => _(() => import("./pretzel.Dgi0n82--BP7yCWTc.js"), []),
            "../../assets/icons/printer.svg": () => _(() => import("./printer.BnPIdLm5-DWcmLkA2.js"), []),
            "../../assets/icons/qr-code.svg": () => _(() => import("./qr-code.CU0Dg5oL-DUg0mVnc.js"), []),
            "../../assets/icons/questionmark-ballon.svg": () => _(() => import("./questionmark-ballon.B9cYwaE_-8W-vgB1H.js"), []),
            "../../assets/icons/questionmark-circle.svg": () => _(() => import("./questionmark-circle.BeFien8P-341iAbmQ.js"), []),
            "../../assets/icons/rabbit.svg": () => _(() => import("./rabbit.CMuZmug0-13R8pdo_.js"), []),
            "../../assets/icons/receipt.svg": () => _(() => import("./receipt.BYYfOUX_-I2k0uOzs.js"), []),
            "../../assets/icons/rotate.svg": () => _(() => import("./rotate.Q0lARl7x-BwMXOw75.js"), []),
            "../../assets/icons/salad-bowl.svg": () => _(() => import("./salad-bowl.DrYONfkk-YLDR4c9i.js"), []),
            "../../assets/icons/salami.svg": () => _(() => import("./salami.D8Ps0PNY-CCr-4vAk.js"), []),
            "../../assets/icons/self-check-out.svg": () => _(() => import("./self-check-out.DtVg76wO-DgN1EVDI.js"), []),
            "../../assets/icons/share.svg": () => _(() => import("./share.Cmwx5TFM-Bm_Ml9qm.js"), []),
            "../../assets/icons/shell.svg": () => _(() => import("./shell.BjFK405c-DPPN5oFg.js"), []),
            "../../assets/icons/shopping-bag.svg": () => _(() => import("./shopping-bag.Daeg1kd9-COmZBxbX.js"), []),
            "../../assets/icons/shopping-cart-1.svg": () => _(() => import("./shopping-cart-1.Cjngz99K-B6w7vvlk.js"), []),
            "../../assets/icons/shopping-cart-2.svg": () => _(() => import("./shopping-cart-2.BZIvW8uF-DRCAa2M5.js"), []),
            "../../assets/icons/shrimp.svg": () => _(() => import("./shrimp.C9A-SSPe-Cf0a4kXk.js"), []),
            "../../assets/icons/smartphone.svg": () => _(() => import("./smartphone.CiaIBt_0-CtfwcLLJ.js"), []),
            "../../assets/icons/snowflake.svg": () => _(() => import("./snowflake.Dsn3jiKS-ZK_nvlMG.js"), []),
            "../../assets/icons/social-share.svg": () => _(() => import("./social-share.BIM5VrPi-txUMchmB.js"), []),
            "../../assets/icons/square.svg": () => _(() => import("./square.BiPO2B5u-DmK3XbT8.js"), []),
            "../../assets/icons/star-regular.svg": () => _(() => import("./star-regular.B-XMXBIq-Bb-30AmU.js"), []),
            "../../assets/icons/star-solid.svg": () => _(() => import("./star-solid.B-vfolxL-DSLWhRL-.js"), []),
            "../../assets/icons/steak.svg": () => _(() => import("./steak.0sx8BRx1-BOXRdzNq.js"), []),
            "../../assets/icons/stop-sign.svg": () => _(() => import("./stop-sign.D6C-cSU--D9Hdxv2h.js"), []),
            "../../assets/icons/stopwatch.svg": () => _(() => import("./stopwatch.Xnl6qIkq-BVCxqj95.js"), []),
            "../../assets/icons/store-magnifier.svg": () => _(() => import("./store-magnifier.xpUCbvNV-BcY4gAuY.js"), []),
            "../../assets/icons/store-star.svg": () => _(() => import("./store-star.DNG3EWYU-C2TAxg0W.js"), []),
            "../../assets/icons/store.svg": () => _(() => import("./store.BWhJdhIk-D-shvLGf.js"), []),
            "../../assets/icons/sun.svg": () => _(() => import("./sun.DCgDrmkj-D408hk8S.js"), []),
            "../../assets/icons/sushi.svg": () => _(() => import("./sushi.BCMvrUqK-Bhx2-_21.js"), []),
            "../../assets/icons/sync.svg": () => _(() => import("./sync.BPWr9zzk-DIB7A3pZ.js"), []),
            "../../assets/icons/taxfree.svg": () => _(() => import("./taxfree.1GcvUp2c-1CYNLUf7.js"), []),
            "../../assets/icons/thermometer.svg": () => _(() => import("./thermometer.DwfD-zj4-Ayo_lPnp.js"), []),
            "../../assets/icons/thumbs-down-regular.svg": () => _(() => import("./thumbs-down-regular.DQxe-MTZ-UTIXoJGT.js"), []),
            "../../assets/icons/thumbs-down-solid.svg": () => _(() => import("./thumbs-down-solid.Ccg2QOmG-DB_A6ciU.js"), []),
            "../../assets/icons/thumbs-up-ballon.svg": () => _(() => import("./thumbs-up-ballon.DO3kPh9k-5bknrtKm.js"), []),
            "../../assets/icons/thumbs-up-regular.svg": () => _(() => import("./thumbs-up-regular.D23SBdq4-DaJDW5Yx.js"), []),
            "../../assets/icons/thumbs-up-solid.svg": () => _(() => import("./thumbs-up-solid.otnNnJ7U-y1muWFde.js"), []),
            "../../assets/icons/toilet.svg": () => _(() => import("./toilet.C9Mf6N46-BZkzEs99.js"), []),
            "../../assets/icons/train.svg": () => _(() => import("./train.lXatSvNM-JASP4GSR.js"), []),
            "../../assets/icons/trash.svg": () => _(() => import("./trash.CBK8FSjr-Coe6yJzW.js"), []),
            "../../assets/icons/triangle.svg": () => _(() => import("./triangle.Db6jG841-CY4jvbPZ.js"), []),
            "../../assets/icons/trophy.svg": () => _(() => import("./trophy.BlPh8asp-Muwc_Tns.js"), []),
            "../../assets/icons/truck-bag.svg": () => _(() => import("./truck-bag.DRwtHyes-D3iQFYoB.js"), []),
            "../../assets/icons/truck.svg": () => _(() => import("./truck.CaMQ1Evw-Bv-s3YY0.js"), []),
            "../../assets/icons/turkey.svg": () => _(() => import("./turkey.BFSLKKLe-vtzGQslw.js"), []),
            "../../assets/icons/undo.svg": () => _(() => import("./undo.CZNENTnh-CZRD08JX.js"), []),
            "../../assets/icons/upload.svg": () => _(() => import("./upload.pJkwlNV4-Cg4R3CQh.js"), []),
            "../../assets/icons/user-eighteen-plus.svg": () => _(() => import("./user-eighteen-plus.AW8tDV7U-BNBMnVL7.js"), []),
            "../../assets/icons/user.svg": () => _(() => import("./user.D05og-pt-oY5EWahn.js"), []),
            "../../assets/icons/vegetables.svg": () => _(() => import("./vegetables.B4NldhMA-CQ70g-z_.js"), []),
            "../../assets/icons/volume-up.svg": () => _(() => import("./volume-up.DO9ZBlgC-B-LzQnMj.js"), []),
            "../../assets/icons/voucher-euro.svg": () => _(() => import("./voucher-euro.BypZ1MU1-B_Ejve2S.js"), []),
            "../../assets/icons/voucher-gift.svg": () => _(() => import("./voucher-gift.CFfQp_It-BEtA1tHS.js"), []),
            "../../assets/icons/voucher-percentage.svg": () => _(() => import("./voucher-percentage.TZYc-A-_-F4J_puYi.js"), []),
            "../../assets/icons/wallet-coins.svg": () => _(() => import("./wallet-coins.C5176kyL-DPl23x0K.js"), []),
            "../../assets/icons/wet-stamp.svg": () => _(() => import("./wet-stamp.C_c63Yz--C03mHu1l.js"), []),
            "../../assets/icons/wheelchair.svg": () => _(() => import("./wheelchair.NUcEnYf_-DpJsRKpP.js"), []),
            "../../assets/icons/wifi.svg": () => _(() => import("./wifi.ClxV_5ww-CvAYLDYD.js"), []),
            "../../assets/icons/wine-glass-1.svg": () => _(() => import("./wine-glass-1.Bcl-5R8V-Bg8Q4wul.js"), []),
            "../../assets/icons/wine-glass-2.svg": () => _(() => import("./wine-glass-2.DBTwC1iW-DyBON5Ic.js"), []),
            "../../assets/icons/wine-glasses.svg": () => _(() => import("./wine-glasses.CQpZ_Rpy-C89iADnx.js"), []),
            "../../assets/icons/worst-solid.svg": () => _(() => import("./worst-solid.DIkSDDHz-B3usgC2L.js"), []),
            "../../assets/icons/worst.svg": () => _(() => import("./worst.AgXHX1XR-DZcmwm5p.js"), [])
          }), `../../assets/icons/${dk}.svg`, 5);
          n.value = s.default
        }
      }, {
        immediate: !0
      }), (r, s) => (B(), ue("span", {
        innerHTML: n.value
      }, null, 8, uk))
    }
  }),
  Jn = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, s] of t) n[r] = s;
    return n
  },
  pk = Symbol(),
  k_ = "OdsIconLocal",
  _k = Ie({
    __name: "OdsIcon",
    props: Zt({
      name: {}
    }, {
      ...Jv
    }),
    setup(e) {
      const t = e,
        n = mn(fk),
        r = Ot(pk, k_);
      return We(() => t.name, async () => {
        r !== k_ && (n.value = r)
      }, {
        immediate: !0
      }), (s, o) => (B(), be(zr(n.value), ln({
        ...s.$attrs,
        ...t
      }, {
        class: "ods-icon"
      }), null, 16))
    }
  }),
  xn = Jn(_k, [
    ["__scopeId", "data-v-2591fada"]
  ]),
  lu = {
    Positive: "positive",
    Primary: "primary",
    Negative: "negative"
  },
  mk = Symbol(),
  Qv = {
    Primary: "primary",
    Secondary: "secondary",
    Tertiary: "tertiary"
  },
  hk = {
    Medium: "medium"
  },
  Zv = {
    Auto: "auto",
    None: "none"
  },
  eE = {
    level: Qv.Primary,
    as: "button",
    href: "",
    label: "",
    isDisabled: !1,
    icon: "",
    theme: void 0,
    size: hk.Medium,
    isLoading: !1,
    hyphens: Zv.Auto
  },
  uu = Ie({
    inheritAttrs: !1,
    __name: "CoreButton",
    props: Zt({
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
      ...eE,
      baseClass: "core-button"
    }),
    setup(e, {
      expose: t
    }) {
      const n = e,
        r = vi(),
        s = Ot(mk, {
          theme: lu.Positive
        }),
        o = q(() => {
          var l;
          return {
            [n.baseClass]: !0,
            [`${n.baseClass}--theme-${n.theme??s.theme}`]: !0,
            [`${n.baseClass}--${n.level}`]: !0,
            [`${n.baseClass}--disabled`]: n.isDisabled,
            [`${n.baseClass}--no-label`]: !((l = n.label) != null && l.length),
            [`${n.baseClass}--size-${n.size}`]: !0,
            "core-brand-lidl ods-theme-promotion": n.theme === "primary" || s.theme === "primary",
            "core-brand-lidl ods-theme-black-friday": n.theme === "negative" || s.theme === "negative",
            [`${n.baseClass}--loading`]: n.isLoading,
            [`${n.baseClass}--hyphens-${n.hyphens}`]: n.hyphens === Zv.None
          }
        }),
        i = q(() => {
          switch (n.as) {
            case "a":
              return {
                ...r, href: n.isDisabled || n.isLoading ? void 0 : n.href
              };
            case "RouterLink":
            case "NuxtLink":
              return {
                ...r, to: n.isDisabled || n.isLoading ? void 0 : n.href
              };
            case "button":
              return {
                type: "button", ...r, disabled: n.isDisabled || n.isLoading
              };
            default:
              return r
          }
        }),
        a = ce(null);
      t({
        ref: a
      });
      const c = Xv("OdsButton");
      return zo(() => {
        n.theme && c.warnOnce("Property theme is deprecated. Please use new tokens with theming instead.")
      }), zo(() => {
        !n.label && !r.ariaLabel && c.warnOnce("Use aria-label attributer to make your component accessible if you have icon only button.")
      }), (l, u) => (B(), be(zr(l.as), ln({
        ref_key: "buttonRef",
        ref: a
      }, i.value, {
        class: o.value
      }), {
        default: Be(() => {
          var d;
          return [et(l.$slots, "coreIcon", {
            iconName: l.icon
          }, () => [l.icon ? (B(), be(oo, {
            key: 0,
            name: l.icon,
            class: we(`${l.baseClass}__icon`)
          }, null, 8, ["name", "class"])) : ge("", !0)]), (d = l.label) != null && d.length ? (B(), ue("span", {
            key: 0,
            class: we(`${l.baseClass}__text`)
          }, Ce(l.label), 3)) : ge("", !0), l.isLoading ? (B(), ue("span", {
            key: 1,
            class: we(`${l.baseClass}__loading`)
          }, [et(l.$slots, "coreIconRotate", {}, () => [Te(oo, {
            name: "rotate",
            class: we(`${l.baseClass}__loading-icon`)
          }, null, 8, ["class"])])], 2)) : ge("", !0)]
        }),
        _: 3
      }, 16, ["class"]))
    }
  }),
  fl = "ods-button",
  gk = Ie({
    __name: "OdsButton",
    props: Zt({
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
    }, eE),
    setup(e, {
      expose: t
    }) {
      const n = e,
        r = ce(null),
        s = q(() => {
          var o;
          return (o = r.value) == null ? void 0 : o.ref
        });
      return t({
        ref: s
      }), (o, i) => (B(), be(F(uu), ln(n, {
        ref_key: "coreButtonInstanceRef",
        ref: r,
        "base-class": fl
      }), {
        coreIcon: Be(({
          iconName: a
        }) => [a ? (B(), be(xn, {
          key: 0,
          name: a,
          class: we(`${fl}__icon`)
        }, null, 8, ["name", "class"])) : ge("", !0)]),
        coreIconRotate: Be(() => [Te(xn, {
          name: "rotate",
          class: we(`${fl}__loading-icon`)
        }, null, 8, ["class"])]),
        _: 1
      }, 16))
    }
  }),
  Rs = Jn(gk, [
    ["__scopeId", "data-v-5bc501b6"]
  ]),
  x_ = {
    Positive: "positive",
    Primary: "primary",
    Negative: "negative"
  },
  Pr = {
    Positive: "positive",
    Negative: "negative",
    Discrete: "discrete",
    Primary: "primary"
  },
  tE = {
    variant: Pr.Positive,
    as: "button",
    href: "",
    isDisabled: !1,
    icon: "placeholder",
    size: "medium",
    ariaLabel: ""
  },
  nE = Ie({
    inheritAttrs: !1,
    __name: "CoreIconButton",
    props: Zt({
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
      ...tE,
      baseClass: "core-icon-button",
      icon: "placeholder",
      size: "medium"
    }),
    setup(e) {
      const t = e,
        n = q(() => ({
          [t.baseClass]: !0,
          [`${t.baseClass}--variant-${t.variant}`]: !0,
          [`${t.baseClass}--size-${t.size}`]: !0,
          [`${t.baseClass}--disabled`]: t.isDisabled
        })),
        r = vi(),
        s = Xv("OdsIconButton");
      zo(() => {
        t.ariaLabel || s.warnOnce("Please provide aria-label property to make button accessible for assistive technology."), t.variant === Pr.Negative && s.warnOnce(`Variant ${Pr.Negative} is deprecated.`), t.variant === Pr.Primary && t.size === "small" && s.warnOnce("Size small is not possible for variant primary.")
      });
      const o = q(() => {
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
      return (i, a) => (B(), be(zr(i.as), ln({
        class: n.value
      }, o.value, {
        "aria-label": i.ariaLabel
      }), {
        default: Be(() => [et(i.$slots, "coreIcon", {
          iconName: i.icon
        }, () => [Te(oo, {
          name: i.icon,
          class: we(`${i.baseClass}__icon`)
        }, null, 8, ["name", "class"])])]),
        _: 3
      }, 16, ["class", "aria-label"]))
    }
  }),
  N_ = "ods-icon-button",
  vk = Ie({
    __name: "OdsIconButton",
    props: Zt({
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
      ...tE,
      icon: "placeholder",
      size: "medium"
    }),
    setup(e) {
      const t = e,
        n = q(() => t.variant === Pr.Primary ? "medium" : t.size);
      return (r, s) => (B(), be(F(nE), ln(t, {
        "base-class": N_,
        size: n.value
      }), {
        coreIcon: Be(({
          iconName: o
        }) => [o ? (B(), be(xn, {
          key: 0,
          name: o,
          class: we(`${N_}__icon`)
        }, null, 8, ["name", "class"])) : ge("", !0)]),
        _: 1
      }, 16, ["size"]))
    }
  }),
  io = Jn(vk, [
    ["__scopeId", "data-v-061666db"]
  ]),
  Ir = {
    Info: "info",
    Warning: "warning",
    Success: "success",
    Danger: "danger"
  },
  rE = {
    title: "",
    accessibleTitle: "info",
    titleAs: "h4",
    icon: !0,
    closable: !0,
    accessibleCloseText: "close",
    type: Ir.Info,
    confirmText: "",
    cancelText: "",
    baseClass: "core-alert"
  },
  Ek = ["role", "aria-label"],
  yk = Ie({
    __name: "CoreAlert",
    props: Zt({
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
      ...rE,
      baseClass: "core-alert"
    }),
    emits: ["close", "confirm", "cancel"],
    setup(e, {
      emit: t
    }) {
      const n = e,
        r = t,
        s = q(() => [n.baseClass, `${n.baseClass}--${n.type}`]),
        o = q(() => n.confirmText !== "" || n.cancelText !== ""),
        i = q(() => o.value ? "alertdialog" : "alert"),
        a = q(() => n.type === Ir.Danger ? "exclamation-triangle" : n.type === Ir.Warning ? "exclamation-circle" : n.type === Ir.Success ? "hook-circle" : typeof n.icon == "boolean" ? "information-circle" : n.icon);
      return (c, l) => (B(), ue("div", {
        class: we(s.value),
        role: i.value,
        "aria-label": c.accessibleTitle
      }, [c.icon ? et(c.$slots, "coreIcon", {
        key: 0,
        iconName: a.value
      }, () => [Te(oo, {
        name: a.value,
        class: we(`${n.baseClass}__icon`)
      }, null, 8, ["name", "class"])], !0) : ge("", !0), fe("div", {
        class: we(`${c.baseClass}__content`)
      }, [fe("div", {
        class: we(`${c.baseClass}__title`)
      }, [et(c.$slots, "title", {}, () => [(B(), be(zr(c.titleAs), {
        class: we(`${c.baseClass}__headline`)
      }, {
        default: Be(() => [Vt(Ce(c.title), 1)]),
        _: 1
      }, 8, ["class"]))], !0)], 2), et(c.$slots, "default", {}, void 0, !0), o.value ? (B(), ue("div", {
        key: 0,
        class: we(`${c.baseClass}__controls`)
      }, [c.cancelText ? (B(), ue("div", {
        key: 0,
        class: we([`${c.baseClass}__control`, `${c.baseClass}__control--cancel`])
      }, [et(c.$slots, "coreCancel", {}, () => [Te(uu, {
        level: "tertiary",
        theme: F(lu)
          .Positive,
        label: c.cancelText,
        onClick: l[0] || (l[0] = u => r("cancel", u))
      }, null, 8, ["theme", "label"])], !0)], 2)) : ge("", !0), c.confirmText ? (B(), ue("div", {
        key: 1,
        class: we([`${c.baseClass}__control`, `${c.baseClass}__control--confirm`])
      }, [et(c.$slots, "coreConfirm", {}, () => [Te(uu, {
        level: "tertiary",
        theme: F(lu)
          .Positive,
        label: c.confirmText,
        onClick: l[1] || (l[1] = u => r("confirm", u))
      }, null, 8, ["theme", "label"])], !0)], 2)) : ge("", !0)], 2)) : ge("", !0)], 2), et(c.$slots, "coreClose", {}, () => [c.closable ? (B(), be(nE, {
        key: 0,
        variant: F(Pr)
          .Positive,
        icon: "close",
        size: "small",
        "aria-label": c.accessibleCloseText,
        onClick: l[2] || (l[2] = u => r("close", u))
      }, null, 8, ["variant", "aria-label"])) : ge("", !0)], !0)], 10, Ek))
    }
  }),
  bk = bc(yk, [
    ["__scopeId", "data-v-0faeb638"]
  ]),
  $_ = "ods-alert",
  Ak = Ie({
    __name: "OdsAlert",
    props: Zt({
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
    }, rE),
    emits: ["close", "confirm", "cancel"],
    setup(e, {
      emit: t
    }) {
      const n = e,
        r = t;
      return (s, o) => (B(), be(F(bk), ln(n, {
        "base-class": $_
      }), Yy({
        coreIcon: Be(({
          iconName: i
        }) => [i ? (B(), be(xn, {
          key: 0,
          name: i,
          class: we(`${$_}__icon`)
        }, null, 8, ["name", "class"])) : ge("", !0)]),
        coreCancel: Be(() => [Te(Rs, {
          level: "tertiary",
          theme: F(x_)
            .Positive,
          label: s.cancelText,
          onClick: o[0] || (o[0] = i => r("cancel", i))
        }, null, 8, ["theme", "label"])]),
        coreConfirm: Be(() => [Te(Rs, {
          level: "tertiary",
          theme: F(x_)
            .Positive,
          label: s.confirmText,
          onClick: o[1] || (o[1] = i => r("confirm", i))
        }, null, 8, ["theme", "label"])]),
        coreClose: Be(() => [s.closable ? (B(), be(io, {
          key: 0,
          variant: F(Pr)
            .Positive,
          icon: "close",
          size: "small",
          "aria-label": s.accessibleCloseText,
          onClick: o[2] || (o[2] = i => r("close", i))
        }, null, 8, ["variant", "aria-label"])) : ge("", !0)]),
        default: Be(() => [et(s.$slots, "default", {}, void 0, !0)]),
        _: 2
      }, [s.$slots.title ? {
        name: "title",
        fn: Be(() => [et(s.$slots, "title", {}, void 0, !0)]),
        key: "0"
      } : void 0]), 1040))
    }
  }),
  Tk = Jn(Ak, [
    ["__scopeId", "data-v-f7b46fef"]
  ]),
  Ok = Symbol(),
  yn = {
    Info: "info",
    Warning: "warning",
    Error: "error"
  },
  Fs = {},
  Ik = e => {
    const t = {
        enableLogs: !1,
        logLevel: yn.Error
      },
      n = Ot(Ok, t),
      r = s => {
        if (n && n.enableLogs) switch (s) {
          case yn.Info:
            return !0;
          case yn.Warning:
            return n.logLevel === yn.Warning || n.logLevel === yn.Error;
          case yn.Error:
            return n.logLevel === yn.Error
        }
        return !1
      };
    return {
      warn: (s, ...o) => {
        r(yn.Warning) && console.warn(`[OdsLidl/${e}] - ${s}`, ...o)
      },
      error: (s, ...o) => {
        r(yn.Error) && console.error(`[OdsLidl/${e}] - ${s}`, ...o)
      },
      info: (s, ...o) => {
        r(yn.Info) && console.log(`[OdsLidl/${e}] - ${s}`, ...o)
      },
      errorOnce: (s, ...o) => {
        r(yn.Error) && !Fs[s] && (console.error(`[OdsLidl/${e}] - ${s}`, ...o), Fs[s] = !0)
      },
      warnOnce: (s, ...o) => {
        r(yn.Warning) && !Fs[s] && (console.warn(`[OdsLidl/${e}] - ${s}`, ...o), Fs[s] = !0)
      },
      infoOnce: (s, ...o) => {
        r(yn.Info) && !Fs[s] && (console.log(`[OdsLidl/${e}] - ${s}`, ...o), Fs[s] = !0)
      }
    }
  },
  sE = {
    Primary: "primary",
    Secondary: "secondary"
  },
  oE = {
    Blue: "blue",
    Yellow: "yellow"
  },
  iE = {
    variant: sE.Primary,
    appearance: oE.Blue,
    icon: void 0
  },
  Sk = Ie({
    __name: "CoreBadge",
    props: Zt({
      variant: {},
      appearance: {},
      label: {},
      icon: {},
      baseClass: {}
    }, {
      ...iE,
      baseClass: "core-badge"
    }),
    setup(e) {
      const t = e,
        n = q(() => ({
          [t.baseClass]: !0,
          [`${t.baseClass}--variant-${t.variant}`]: !0,
          [`${t.baseClass}--appearance-${t.appearance}`]: !0
        }));
      return (r, s) => (B(), ue("span", {
        class: we(n.value)
      }, [et(r.$slots, "coreIcon", {
        iconName: r.icon
      }, () => [r.icon ? (B(), be(oo, {
        key: 0,
        name: r.icon,
        class: we(`${t.baseClass}__icon`)
      }, null, 8, ["name", "class"])) : ge("", !0)]), fe("span", {
        class: we(`${t.baseClass}__label`)
      }, Ce(r.label), 3)], 2))
    }
  }),
  V_ = "ods-badge",
  Rk = Ie({
    __name: "OdsBadge",
    props: Zt({
      variant: {},
      appearance: {},
      label: {},
      icon: {}
    }, {
      ...iE,
      icon: void 0
    }),
    setup(e) {
      const t = e;
      return (n, r) => (B(), be(F(Sk), ln(t, {
        "base-class": V_
      }), {
        coreIcon: Be(({
          iconName: s
        }) => [s ? (B(), be(xn, {
          key: 0,
          name: s,
          class: we(`${V_}__icon`)
        }, null, 8, ["name", "class"])) : ge("", !0)]),
        _: 1
      }, 16))
    }
  }),
  wk = Jn(Rk, [
    ["__scopeId", "data-v-c573cfb3"]
  ]);

function aE(e, t) {
  return hi() ? (Tu(e, t), !0) : !1
}
const pl = new WeakMap,
  Pk = (...e) => {
    var t;
    const n = e[0],
      r = (t = un()) === null || t === void 0 ? void 0 : t.proxy,
      s = r ?? hi();
    if (s == null && !Lu()) throw new Error("injectLocal must be called in setup");
    return s && pl.has(s) && n in pl.get(s) ? pl.get(s)[n] : Ot(...e)
  },
  Ck = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Lk = Object.prototype.toString,
  Dk = e => Lk.call(e) === "[object Object]";

function M_(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e)
}

function _a(e) {
  return Array.isArray(e) ? e : [e]
}

function kk(e) {
  return un()
}

function cE(e, t = !0, n) {
  kk() ? Rt(e, n) : t ? e() : In(e)
}

function xk(e, t, n) {
  return We(e, t, {
    ...n,
    immediate: !0
  })
}
const Ci = Ck ? window : void 0;

function gs(e) {
  var t;
  const n = Tn(e);
  return (t = n?.$el) !== null && t !== void 0 ? t : n
}

function du(...e) {
  const t = [],
    n = () => {
      t.forEach(a => a()), t.length = 0
    },
    r = (a, c, l, u) => (a.addEventListener(c, l, u), () => a.removeEventListener(c, l, u)),
    s = q(() => {
      const a = _a(Tn(e[0]))
        .filter(c => c != null);
      return a.every(c => typeof c != "string") ? a : void 0
    }),
    o = xk(() => {
      var a, c;
      return [(a = (c = s.value) === null || c === void 0 ? void 0 : c.map(l => gs(l))) !== null && a !== void 0 ? a : [Ci].filter(l => l != null), _a(Tn(s.value ? e[1] : e[0])), _a(F(s.value ? e[2] : e[1])), Tn(s.value ? e[3] : e[2])]
    }, ([a, c, l, u]) => {
      if (n(), !a?.length || !c?.length || !l?.length) return;
      const d = Dk(u) ? {
        ...u
      } : u;
      t.push(...a.flatMap(g => c.flatMap(p => l.map(m => r(g, p, m, d)))))
    }, {
      flush: "post"
    }),
    i = () => {
      o(), n()
    };
  return aE(n), i
}

function Nk() {
  const e = mn(!1),
    t = un();
  return t && Rt(() => {
    e.value = !0
  }, t), e
}

function lE(e) {
  const t = Nk();
  return q(() => (t.value, !!e()))
}
const $k = Symbol("vueuse-ssr-width");

function Vk() {
  const e = Lu() ? Pk($k, null) : null;
  return typeof e == "number" ? e : void 0
}

function uE(e, t = {}) {
  const {
    window: n = Ci,
    ssrWidth: r = Vk()
  } = t, s = lE(() => n && "matchMedia" in n && typeof n.matchMedia == "function"), o = mn(typeof r == "number"), i = mn(), a = mn(!1), c = l => {
    a.value = l.matches
  };
  return zo(() => {
    if (o.value) {
      o.value = !s.value, a.value = Tn(e)
        .split(",")
        .some(l => {
          const u = l.includes("not all"),
            d = l.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),
            g = l.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
          let p = !!(d || g);
          return d && p && (p = r >= M_(d[1])), g && p && (p = r <= M_(g[1])), u ? !p : p
        });
      return
    }
    s.value && (i.value = n.matchMedia(Tn(e)), a.value = i.value.matches)
  }), du(i, "change", c, {
    passive: !0
  }), q(() => a.value)
}

function Mk(e, t, n = {}) {
  const {
    window: r = Ci,
    ...s
  } = n;
  let o;
  const i = lE(() => r && "ResizeObserver" in r),
    a = () => {
      o && (o.disconnect(), o = void 0)
    },
    c = We(q(() => {
      const u = Tn(e);
      return Array.isArray(u) ? u.map(d => gs(d)) : [gs(u)]
    }), u => {
      if (a(), i.value && r) {
        o = new ResizeObserver(t);
        for (const d of u) d && o.observe(d, s)
      }
    }, {
      immediate: !0,
      flush: "post"
    }),
    l = () => {
      a(), c()
    };
  return aE(l), {
    isSupported: i,
    stop: l
  }
}

function Yi(e, t = {
  width: 0,
  height: 0
}, n = {}) {
  const {
    window: r = Ci,
    box: s = "content-box"
  } = n, o = q(() => {
    var d;
    return (d = gs(e)) === null || d === void 0 || (d = d.namespaceURI) === null || d === void 0 ? void 0 : d.includes("svg")
  }), i = mn(t.width), a = mn(t.height), {
    stop: c
  } = Mk(e, ([d]) => {
    const g = s === "border-box" ? d.borderBoxSize : s === "content-box" ? d.contentBoxSize : d.devicePixelContentBoxSize;
    if (r && o.value) {
      const p = gs(e);
      if (p) {
        const m = p.getBoundingClientRect();
        i.value = m.width, a.value = m.height
      }
    } else if (g) {
      const p = _a(g);
      i.value = p.reduce((m, {
        inlineSize: E
      }) => m + E, 0), a.value = p.reduce((m, {
        blockSize: E
      }) => m + E, 0)
    } else i.value = d.contentRect.width, a.value = d.contentRect.height
  }, n);
  cE(() => {
    const d = gs(e);
    d && (i.value = "offsetWidth" in d ? d.offsetWidth : t.width, a.value = "offsetHeight" in d ? d.offsetHeight : t.height)
  });
  const l = We(() => gs(e), d => {
    i.value = d ? t.width : 0, a.value = d ? t.height : 0
  });

  function u() {
    c(), l()
  }
  return {
    width: i,
    height: a,
    stop: u
  }
}

function Fk(e = {}) {
  const {
    window: t = Ci,
    initialWidth: n = Number.POSITIVE_INFINITY,
    initialHeight: r = Number.POSITIVE_INFINITY,
    listenOrientation: s = !0,
    includeScrollbar: o = !0,
    type: i = "inner"
  } = e, a = mn(n), c = mn(r), l = () => {
    if (t)
      if (i === "outer") a.value = t.outerWidth, c.value = t.outerHeight;
      else if (i === "visual" && t.visualViewport) {
      const {
        width: d,
        height: g,
        scale: p
      } = t.visualViewport;
      a.value = Math.round(d * p), c.value = Math.round(g * p)
    } else o ? (a.value = t.innerWidth, c.value = t.innerHeight) : (a.value = t.document.documentElement.clientWidth, c.value = t.document.documentElement.clientHeight)
  };
  l(), cE(l);
  const u = {
    passive: !0
  };
  return du("resize", l, u), t && i === "visual" && t.visualViewport && du(t.visualViewport, "resize", l, u), s && We(uE("(orientation: portrait)"), () => l()), {
    width: a,
    height: c
  }
}
const dE = Ie({
    __name: "OdsFocusTrap",
    props: {
      isActive: {
        type: Boolean
      }
    },
    setup(e) {
      const t = e,
        n = ce(),
        r = ce(),
        s = ce(),
        o = ce(),
        i = c => {
          var l, u;
          const {
            activeElement: d
          } = document;
          c && d === r.value ? (l = n.value) == null || l.focus({
            preventScroll: !0
          }) : !c && d === n.value && ((u = r.value) == null || u.focus({
            preventScroll: !0
          }))
        },
        a = c => {
          c.key === "Tab" && i(!c.shiftKey)
        };
      return Rt(() => {
        We(() => t.isActive, c => {
          var l;
          c ? ((l = s.value) != null && l.contains(document.activeElement) || (o.value = document.activeElement, In(() => {
            var u;
            (u = n.value) == null || u.focus({
              preventScroll: !0
            })
          })), document.addEventListener("keydown", a)) : (o.value && o.value.focus({
            preventScroll: !0
          }), document.removeEventListener("keydown", a))
        }, {
          immediate: !0
        })
      }), Nr(() => {
        if (document.removeEventListener("keydown", a), o.value) try {
          o.value.focus({
            preventScroll: !0
          })
        } catch {}
      }), (c, l) => (B(), ue("div", {
        ref_key: "wrapperRef",
        ref: s
      }, [fe("div", {
        ref_key: "focusableStartRef",
        ref: n,
        tabindex: "0",
        class: "ods-focus-trap-ref"
      }, null, 512), et(c.$slots, "default"), fe("div", {
        ref_key: "focusableEndRef",
        ref: r,
        tabindex: "0",
        class: "ods-focus-trap-ref"
      }, null, 512)], 512))
    }
  }),
  Bk = "Escape";
let F_ = "",
  B_ = "",
  U_ = "",
  j_ = "";
const H_ = ce("0px");

function Uk(e) {
  if (typeof document > "u") return;
  const t = document.documentElement,
    n = () => {
      t.style.marginRight = F_, t.style.overflow = B_, t.style.overflowX = U_, t.style.overflowY = j_, H_.value = "0px"
    },
    r = () => {
      const s = window.innerWidth - t.offsetWidth;
      s > 0 && (F_ = t.style.marginRight, t.style.marginRight = `${s}px`, H_.value = `${s}px`), B_ = t.style.overflow, U_ = t.style.overflowX, j_ = t.style.overflowY, t.style.overflow = "hidden", t.style.overflowX = "hidden", t.style.overflowY = "hidden"
    };
  We(e, s => {
    s ? r() : n()
  }, {
    immediate: !0
  })
}
const jk = 1e3,
  fE = {
    VShow: "v-show",
    VIf: "v-if"
  },
  Hr = {
    Auto: "auto",
    SideSheet: "sideSheet",
    BottomSheet: "bottomSheet"
  },
  Hk = {
    title: "",
    isOpen: !1,
    isCalloutOpen: !1,
    isInvisibleWhenClosed: !1,
    accessibleBackText: "",
    accessibleCloseText: "",
    accessibleOpenText: "",
    zIndex: jk,
    destroyOnClose: !1,
    forceRender: !1,
    maskClosable: !0,
    hasFullWidthContent: !1,
    displayMode: Hr.Auto,
    hiddenCalloutDirective: fE.VIf
  },
  qk = ["aria-label"],
  Wk = ["disabled", "aria-label"],
  Gk = {
    key: 1,
    class: "ods-sheet__icon"
  },
  Kk = {
    class: "ods-sheet__title-text"
  },
  Yk = 500,
  zk = 50,
  Xk = Ie({
    __name: "OdsSheet",
    props: Zt({
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
    }, Hk),
    emits: ["update:isOpen", "update:isCalloutOpen"],
    setup(e, {
      emit: t
    }) {
      Mh(T => ({
        d165ed24: T.zIndex,
        "46d7aca6": J.value,
        d67cd16a: ee.value,
        "63c27143": g.value
      }));
      const n = e,
        r = t,
        s = uE("(max-width: 767px)"),
        o = q(() => typeof n.bottomSheetProps == "object" && n.bottomSheetProps.isInvisibleWhenClosed !== null ? n.bottomSheetProps.isInvisibleWhenClosed : n.isInvisibleWhenClosed),
        i = q(() => n.displayMode === Hr.Auto ? s.value ? Hr.BottomSheet : Hr.SideSheet : n.displayMode),
        {
          abs: a,
          max: c,
          min: l
        } = Math,
        u = ce(void 0),
        d = ce(n.isCalloutOpen),
        g = ce("auto"),
        p = ce(!1),
        m = ce(null),
        E = ce(null),
        b = ce(null),
        v = ce(null),
        A = ce(!1),
        R = dr([0, 0]),
        O = dr([0, 0]),
        L = ce(!1),
        P = ce(0),
        D = ce(n.isOpen),
        J = q(() => {
          const {
            height: T
          } = Fk();
          return `${T.value}px`
        }),
        k = Yi(E, {
          width: 0,
          height: 0
        }, {
          box: "border-box"
        }),
        Y = Yi(b, {
          width: 0,
          height: 0
        }, {
          box: "border-box"
        }),
        H = Yi(v, {
          width: 0,
          height: 0
        }, {
          box: "border-box"
        }),
        G = Yi(v, {
          width: 0,
          height: 0
        }, {
          box: "border-box"
        }),
        me = q(() => G.height.value);
      Uk(D);
      const de = q(() => {
          let T = "";
          return _e.value && (T = getComputedStyle(_e.value)
            .marginBottom.replace("px", "")), k.height.value + Y.height.value + H.height.value + Number(T)
        }),
        X = q(() => R[0] - O[0]),
        N = q(() => R[1] - O[1]),
        K = q(() => c(a(X.value), a(N.value)) >= 8),
        ee = q(() => L.value ? "0s" : "0.5s"),
        _e = ce(null),
        Q = ce(0),
        V = ce(0),
        oe = T => {
          Q.value = T.target.scrollTop
        },
        Ae = T => [T.touches[0].clientX, T.touches[0].clientY],
        Ne = (T, [x, z]) => {
          T[0] = x, T[1] = z
        },
        Le = () => {
          if (me.value)
            if (!n.isOpen && N.value > 0) {
              const T = a(N.value);
              u.value = `${T}px`
            } else {
              const T = P.value - l(N.value, 0) * -1;
              u.value = `${T}px`
            }
        },
        He = () => {
          a(N.value) >= zk && r("update:isOpen", !n.isOpen), u.value = void 0
        },
        W = T => {
          if (T.touches.length !== 1) return;
          const x = Ae(T);
          Ne(R, x), Ne(O, x), m.value && (P.value = Number(m.value.offsetHeight))
        },
        he = T => {
          if (T.preventDefault(), T.touches.length !== 1) return;
          const x = Ae(T);
          Ne(O, x), !L.value && K.value && (L.value = !0), L.value && Le()
        },
        pe = () => {
          L.value && He(), L.value = !1
        },
        ye = () => {
          n.maskClosable && r("update:isOpen", !1)
        },
        Re = T => {
          n.isOpen && T.key === Bk && r("update:isOpen", !1)
        },
        w = Ik("OdsSheet");
      zo(() => {
        n.accessibleCloseText || w.warnOnce("Use accessibleCloseText property to make the close button accessible."), !n.accessibleOpenText && !n.isInvisibleWhenClosed && w.warnOnce("Use accessibleOpenText property to make the Pill button accessible."), !n.accessibleBackText && n.isCalloutOpen && w.warnOnce("Use accessibleBackText property to make the back button (left arrow on callouts) accessible.")
      });
      const C = q(() => n.accessibleCloseText ? n.accessibleCloseText : "close"),
        U = q(() => n.accessibleOpenText ? n.accessibleOpenText : "open"),
        te = q(() => n.accessibleBackText ? n.accessibleBackText : "back");
      Rt(() => {
        We(() => n.isOpen, T => {
          A.value = !1, setTimeout(() => {
            A.value = !0
          }, Yk), T ? (p.value = !0, D.value = !0, document.addEventListener("keydown", Re)) : (document.removeEventListener("keydown", Re), D.value = !1)
        }, {
          immediate: !0
        }), We(() => n.isOpen, T => {
          T || r("update:isCalloutOpen", d.value)
        })
      });
      const ie = q(() => !!(n.forceRender || n.isOpen || p.value && !n.destroyOnClose || !o.value));
      We(() => n.isCalloutOpen, async T => {
        n.isOpen && (T ? (V.value = Q.value, g.value = `${H.width.value}px`, _e.value && (_e.value.scrollTop = 0)) : (await In(), _e.value && (_e.value.scrollTop = V.value), g.value = "auto", V.value = 0))
      }), We(s, () => {
        g.value = "auto"
      });
      const se = q(() => ({
          "ods-sheet": !0,
          "ods-sheet--side": i.value === Hr.SideSheet,
          "ods-sheet--bottom": i.value === Hr.BottomSheet,
          "ods-sheet--is-open": n.isOpen,
          "ods-sheet--is-transition-ended": A.value,
          "ods-sheet--is-invisible-when-closed": o.value && !n.isOpen
        })),
        S = q(() => i.value === Hr.BottomSheet ? {
          height: n.isOpen && !L.value ? `${de.value}px` : u.value
        } : {});
      return (T, x) => ie.value ? (B(), be(Jm, {
        key: 0,
        to: "body"
      }, [Ft(fe("div", {
        class: we(["ods-sheet__background-pane", {
          "ods-sheet__background-pane--closable": T.maskClosable
        }]),
        role: "none",
        onClick: ye
      }, null, 2), [
        [Co, T.isOpen]
      ]), fe("div", ln(T.$attrs, {
        ref_key: "container",
        ref: m,
        class: se.value,
        style: S.value,
        "aria-label": T.title,
        "aria-modal": "true",
        role: "dialog"
      }), [Te(dE, {
        "is-active": T.isOpen,
        class: "ods-sheet__wrapper"
      }, {
        default: Be(() => [Ft(fe("div", {
          ref_key: "target",
          ref: E,
          class: "ods-sheet__handle"
        }, [fe("button", {
          disabled: o.value && !T.isOpen,
          class: "ods-sheet__pill-wrapper",
          "aria-label": T.isOpen ? C.value : U.value,
          onClick: x[0] || (x[0] = z => T.isOpen ? r("update:isOpen", !1) : r("update:isOpen", !0)),
          onTouchstartPassive: W,
          onTouchmove: he,
          onTouchend: pe,
          onTouchcancel: pe
        }, x[3] || (x[3] = [fe("span", {
          class: "ods-sheet__pill"
        }, null, -1)]), 40, Wk)], 512), [
          [Co, i.value === F(Hr)
            .BottomSheet
          ]
        ]), fe("div", {
          ref_key: "header",
          ref: b,
          class: "ods-sheet__title"
        }, [T.isCalloutOpen ? (B(), be(io, {
          key: 0,
          class: "ods-sheet__back-button",
          variant: F(Pr)
            .Positive,
          icon: "arrow-left",
          size: "small",
          "aria-label": te.value,
          onClick: x[1] || (x[1] = z => r("update:isCalloutOpen", !1))
        }, null, 8, ["variant", "aria-label"])) : ge("", !0), T.$slots.icon ? (B(), ue("div", Gk, [et(T.$slots, "icon", {}, void 0, !0)])) : ge("", !0), fe("h3", Kk, Ce(T.title), 1), Te(io, {
          class: "ods-sheet__close",
          variant: F(Pr)
            .Positive,
          icon: "cross",
          size: "small",
          "aria-label": C.value,
          onClick: x[2] || (x[2] = z => r("update:isOpen", !1))
        }, null, 8, ["variant", "aria-label"])], 512), fe("div", {
          ref_key: "scrollContainer",
          ref: _e,
          class: we(["ods-sheet__content", {
            "ods-sheet__content--spacing": !T.hasFullWidthContent
          }]),
          role: "document",
          onScrollPassive: oe
        }, [fe("div", {
          ref_key: "content",
          ref: v,
          class: "ods-sheet__content-container"
        }, [T.hiddenCalloutDirective === F(fE)
          .VIf ? (B(), ue(Xe, {
            key: 0
          }, [T.isCalloutOpen ? et(T.$slots, "callout", {
            key: 0
          }, void 0, !0) : et(T.$slots, "default", {
            key: 1
          }, void 0, !0)], 64)) : (B(), ue(Xe, {
            key: 1
          }, [Ft(fe("div", null, [et(T.$slots, "callout", {}, void 0, !0)], 512), [
            [Co, T.isCalloutOpen]
          ]), Ft(fe("div", null, [et(T.$slots, "default", {}, void 0, !0)], 512), [
            [Co, !T.isCalloutOpen]
          ])], 64))
        ], 512)], 34)]),
        _: 3
      }, 8, ["is-active"])], 16, qk)])) : ge("", !0)
    }
  }),
  Ac = Jn(Xk, [
    ["__scopeId", "data-v-1aabe2ce"]
  ]),
  cr = {
    Disabled: "disabled",
    Info: "info",
    Success: "success",
    Error: "error",
    Warning: "warning"
  },
  _l = {
    Success: "hook-circle",
    Error: "exclamation-triangle",
    Warning: "information-circle"
  },
  pE = {
    type: cr.Info
  },
  Jk = (e, t) => {
    const n = q(() => e.isDisabled ? "disabled" : e.isReadOnly ? "read-only" : e.isError ? "error" : e.isSuccess ? "success" : "default"),
      r = q(() => e.isDisabled ? cr.Disabled : e.isError ? cr.Error : e.isSuccess ? cr.Success : cr.Info),
      s = q(() => {
        if (e.isError) return "alert"
      });
    return {
      classes: q(() => ({
        [`${t}`]: !0,
        [`${t}--${n.value}`]: !0,
        [`${t}--indeterminate`]: e.isIndeterminate
      })),
      type: n,
      hintType: r,
      hintRole: s
    }
  },
  _E = {
    value: "",
    label: "",
    isDisabled: !1,
    isError: !1,
    isIndeterminate: !1,
    modelValue: "",
    name: "",
    class: ""
  },
  Qk = ["name", "disabled", "isError", "value"],
  Zk = Ie({
    inheritAttrs: !1,
    __name: "CoreCheckbox",
    props: Zt({
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
      ..._E,
      baseClass: "core-checkbox"
    }),
    emits: ["update:modelValue"],
    setup(e, {
      expose: t,
      emit: n
    }) {
      const r = e,
        s = n,
        o = vi();
      t({
        id: o.id,
        value: r.value,
        isDisabled: r.isDisabled
      });
      const {
        classes: i
      } = Jk(r, r.baseClass), a = q({
        get() {
          return r.modelValue
        },
        set(c) {
          s("update:modelValue", c)
        }
      });
      return (c, l) => (B(), ue("span", {
        class: we([F(i), r.class])
      }, [fe("label", {
        class: we(`${c.baseClass}__label`)
      }, [Ft(fe("input", ln(c.$attrs, {
        "onUpdate:modelValue": l[0] || (l[0] = u => a.value = u),
        type: "checkbox",
        name: c.name,
        disabled: c.isDisabled,
        isError: c.isError,
        value: c.value,
        class: `${c.baseClass}__input`
      }), null, 16, Qk), [
        [r0, a.value]
      ]), fe("span", {
        class: we(`${c.baseClass}__label-wrapper`)
      }, [Ft(fe("span", {
        class: we(`${c.baseClass}__label-content`)
      }, [c.label ? (B(), ue("span", {
        key: 0,
        class: we(`${c.baseClass}__label-text`)
      }, Ce(c.label), 3)) : ge("", !0), c.$slots.default ? (B(), ue("span", {
        key: 1,
        class: we(`${c.baseClass}__label-slot`)
      }, [et(c.$slots, "default", {}, void 0, !0)], 2)) : ge("", !0)], 2), [
        [Co, c.label || c.$slots.default]
      ])], 2)], 2)], 2))
    }
  }),
  e1 = bc(Zk, [
    ["__scopeId", "data-v-c22f9291"]
  ]),
  t1 = Ie({
    __name: "OdsCheckbox",
    props: Zt({
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
      ..._E
    }),
    emits: ["update:modelValue"],
    setup(e, {
      expose: t,
      emit: n
    }) {
      const r = e,
        s = n,
        o = vi();
      return t({
        id: o.id,
        value: r.value,
        isDisabled: r.isDisabled
      }), (i, a) => (B(), be(F(e1), ln(r, {
        "base-class": "ods-checkbox",
        "onUpdate:modelValue": a[0] || (a[0] = c => s("update:modelValue", c))
      }), {
        default: Be(() => [et(i.$slots, "default", {}, void 0, !0)]),
        _: 3
      }, 16))
    }
  }),
  n1 = Jn(t1, [
    ["__scopeId", "data-v-8e91a60f"]
  ]),
  r1 = Ie({
    __name: "CoreDivider",
    props: {
      baseClass: {
        default: "core-divider"
      }
    },
    setup(e) {
      return (t, n) => (B(), ue("hr", {
        class: we(t.baseClass)
      }, null, 2))
    }
  }),
  s1 = Ie({
    __name: "OdsDivider",
    setup(e) {
      return (t, n) => (B(), be(F(r1), {
        "base-class": "ods-divider"
      }))
    }
  }),
  fu = Jn(s1, [
    ["__scopeId", "data-v-8991ba43"]
  ]),
  o1 = Ie({
    __name: "CoreHint",
    props: Zt({
      type: {},
      baseClass: {}
    }, {
      ...pE,
      baseClass: "core-hint"
    }),
    setup(e) {
      const t = e,
        n = q(() => {
          switch (t.type) {
            case cr.Disabled:
            case cr.Info:
              return "";
            case cr.Error:
              return _l.Error;
            case cr.Success:
              return _l.Success;
            case cr.Warning:
              return _l.Warning;
            default:
              return ""
          }
        }),
        r = q(() => [t.baseClass, `${t.baseClass}--${t.type}`]);
      return (s, o) => (B(), ue("span", {
        class: we(r.value)
      }, [et(s.$slots, "coreIcon", {
        iconName: n.value
      }, () => [n.value ? (B(), be(oo, {
        key: 0,
        name: n.value,
        class: we(`${s.baseClass}__icon`)
      }, null, 8, ["name", "class"])) : ge("", !0)], !0), fe("pre", {
        class: we(`${s.baseClass}__text-wrapper`)
      }, [et(s.$slots, "default", {}, void 0, !0)], 2)], 2))
    }
  }),
  i1 = bc(o1, [
    ["__scopeId", "data-v-0e121db0"]
  ]),
  q_ = "ods-hint",
  a1 = Ie({
    __name: "OdsHint",
    props: Zt({
      type: {}
    }, pE),
    setup(e) {
      const t = e;
      return (n, r) => (B(), be(F(i1), ln(t, {
        "base-class": q_
      }), {
        coreIcon: Be(({
          iconName: s
        }) => [s ? (B(), be(xn, {
          key: 0,
          name: s,
          class: we(`${q_}__icon`)
        }, null, 8, ["name", "class"])) : ge("", !0)]),
        default: Be(() => [et(n.$slots, "default", {}, void 0, !0)]),
        _: 3
      }, 16))
    }
  }),
  c1 = Jn(a1, [
    ["__scopeId", "data-v-3283c1d4"]
  ]),
  l1 = {
    Standard: "standard"
  },
  pu = {
    Timed: "Timed",
    Feedback: "feedback"
  },
  u1 = {
    class: "ods-snack-bar-item__layout"
  },
  d1 = {
    class: "ods-snack-bar-item__content"
  },
  f1 = {
    class: "ods-snack-bar-item__message"
  },
  p1 = {
    key: 0,
    class: "ods-snack-bar-item__footer"
  },
  _1 = Ie({
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
        default: l1.Standard
      },
      messageType: {},
      nextFocusTargetSelector: {}
    },
    emits: ["close"],
    setup(e, {
      emit: t
    }) {
      const n = e,
        r = t,
        s = q(() => n.isError ? "exclamation-triangle" : n.isSuccess ? "hook-circle" : "placeholder"),
        o = q(() => ({
          "ods-snack-bar-item__icon": !0,
          "ods-snack-bar-item__icon--error": n.isError,
          "ods-snack-bar-item__icon--success": n.isSuccess
        })),
        i = ce(),
        a = ce(null),
        c = ce(null),
        l = ce(!1),
        u = () => {
          if (a.value) {
            const b = a.value.ref.offsetWidth,
              v = c.value.offsetWidth;
            b > v / 2 && (l.value = !0)
          }
        },
        d = () => {
          let b = i.value;
          if (n.nextFocusTargetSelector) {
            const v = document.querySelector(n.nextFocusTargetSelector);
            v && (b = v)
          }
          if (b) try {
            b.focus({
              preventScroll: !0
            })
          } catch {}
        };
      Rt(() => {
        i.value = document.activeElement
      }), Nr(() => {
        In(d)
      }), Rt(u), ku(u);
      const g = () => {
          r("close"), n.closeClick()
        },
        p = () => {
          r("close"), n.buttonClick()
        },
        m = q(() => ({
          "ods-snack-bar-item": !0,
          [`ods-snack-bar-item--type-${n.type}`]: !0
        })),
        E = q(() => n.type === "multiline" || l.value);
      return (b, v) => (B(), ue("div", {
        ref_key: "notificationContainer",
        ref: c,
        class: we(m.value),
        role: "alert"
      }, [Te(dE, {
        "is-active": b.messageType === F(pu)
          .Feedback
      }, {
        default: Be(() => [fe("div", u1, [fe("div", d1, [b.isError || b.isSuccess ? (B(), be(xn, {
          key: 0,
          class: we(o.value),
          name: s.value
        }, null, 8, ["class", "name"])) : ge("", !0), fe("div", f1, Ce(b.message), 1)]), b.buttonText && !E.value ? (B(), be(Rs, {
          key: 0,
          ref_key: "feedbackButton",
          ref: a,
          class: "ods-snack-bar-item__button",
          label: b.buttonText,
          level: "tertiary",
          onClick: p
        }, null, 8, ["label"])) : ge("", !0), Te(io, {
          class: "ods-snack-bar-item__button-close",
          icon: "close",
          size: "small",
          variant: "negative",
          onClick: g
        })]), b.buttonText && E.value ? (B(), ue("div", p1, [Te(Rs, {
          class: "ods-snack-bar-item__button",
          label: b.buttonText,
          level: "tertiary",
          onClick: p
        }, null, 8, ["label"])])) : ge("", !0)]),
        _: 1
      }, 8, ["is-active"])], 2))
    }
  }),
  W_ = Jn(_1, [
    ["__scopeId", "data-v-66e6c7df"]
  ]),
  m1 = 1e3,
  h1 = {
    class: "ods-snack-bar__message-spot ods-snack-bar__message-spot--top"
  },
  g1 = {
    class: "ods-snack-bar__message-spot ods-snack-bar__message-spot--center"
  },
  G_ = 3,
  v1 = 300,
  E1 = Ie({
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
        default: m1
      }
    },
    setup(e) {
      Mh(d => ({
        "01aae92a": d.zIndex
      }));
      const t = e,
        n = ce([]),
        r = ce([]),
        s = ce({}),
        o = d => {
          let g = 0,
            p, m;
          if (d.length === 0) return g;
          for (p = 0; p < d.length; p++) m = d.charCodeAt(p), g = (g << 5) - g + m, g |= 0;
          return g
        },
        i = (d, g) => {
          window.clearTimeout(s.value[d]), s.value[d] = void 0, window.setTimeout(() => {
            n.value = n.value.filter(p => p.id !== d)
          }, g ? 0 : v1)
        },
        a = d => {
          r.value = r.value.filter((g, p) => p !== d)
        },
        c = d => {
          const g = d.message.length * 60 * 1.5,
            p = 1e4,
            m = 4e3;
          return g > p ? p : g < m ? m : g
        },
        l = d => {
          const g = d.detail,
            p = o(g.message + g.buttonText + g.isError + g.isSuccess);
          if (g.buttonText) r.value.length === G_ && a(0), r.value.push({
            ...g,
            id: p
          });
          else {
            if (n.value.length === G_) {
              const {
                id: b
              } = n.value[0];
              i(b, !0)
            }
            const m = s.value[p];
            m || window.clearTimeout(m);
            const E = c(g);
            n.value.push({
              ...g,
              id: p
            }), s.value[p] = window.setTimeout(() => {
              i(p, !0)
            }, E)
          }
        };
      Rt(() => {
        document.addEventListener(t.eventName, l)
      }), co(() => {
        document.removeEventListener(t.eventName, l)
      });
      const u = vi();
      return (d, g) => (B(), be(Jm, {
        to: "body"
      }, [fe("div", ln({
        class: ["ods-snack-bar", d.themeClass]
      }, F(u)), [fe("div", h1, [Te(vf, {
        name: "ods-snack-bar__list",
        tag: "div",
        class: "ods-snack-bar__list"
      }, {
        default: Be(() => [(B(!0), ue(Xe, null, Gn(n.value, (p, m) => (B(), be(W_, {
          key: m,
          message: p.message,
          "is-error": p.isError,
          "is-success": p.isSuccess,
          "button-text": p.buttonText,
          type: p.type,
          "data-messages": p.id,
          class: "ods-snack-bar__message ods-snack-bar__message--is-entering",
          "close-click": p.closeClick,
          "button-click": p.buttonClick,
          "message-type": F(pu)
            .Timed,
          "next-focus-target-selector": p.nextFocusTargetSelector,
          onClose: E => i(p.id, !1)
        }, null, 8, ["message", "is-error", "is-success", "button-text", "type", "data-messages", "close-click", "button-click", "message-type", "next-focus-target-selector", "onClose"]))), 128))]),
        _: 1
      })]), fe("div", g1, [Te(vf, {
        name: "ods-snack-bar__list",
        tag: "div",
        class: "ods-snack-bar__list ods-snack-bar__list--reverse"
      }, {
        default: Be(() => [(B(!0), ue(Xe, null, Gn(r.value, (p, m) => (B(), be(W_, {
          key: m,
          message: p.message,
          "is-error": p.isError,
          "is-success": p.isSuccess,
          "button-text": p.buttonText,
          "data-messages": p.id,
          type: p.type,
          class: "ods-snack-bar__message ods-snack-bar__message--is-entering",
          "close-click": p.closeClick,
          "button-click": p.buttonClick,
          "message-type": F(pu)
            .Feedback,
          "next-focus-target-selector": p.nextFocusTargetSelector,
          onClose: E => a(m)
        }, null, 8, ["message", "is-error", "is-success", "button-text", "data-messages", "type", "close-click", "button-click", "message-type", "next-focus-target-selector", "onClose"]))), 128))]),
        _: 1
      })])], 16)]))
    }
  }),
  y1 = Jn(E1, [
    ["__scopeId", "data-v-c81cb238"]
  ]),
  K_ = {
    [Do[0]]: "delivery-options-accordion-header",
    [Do[1]]: "delivery-address-accordion-header",
    [Do[2]]: "payment-options-accordion-header",
    [Do[3]]: "summary-options-accordion-header"
  },
  b1 = {
    class: "base-safe-badge"
  },
  A1 = {
    class: "base-safe-badge__caption"
  },
  T1 = Ie({
    __name: "BaseSafeBadge",
    setup(e) {
      const {
        t
      } = mt();
      return (n, r) => (B(), ue("div", b1, [fe("span", A1, [Te(F(xn), {
        class: "base-safe-badge__icon",
        name: "lock-close",
        "aria-hidden": "true"
      }), Vt(" " + Ce(F(t)("header.safeConnection.label")), 1)])]))
    }
  }),
  O1 = je(T1, [
    ["__scopeId", "data-v-0d9c4edd"]
  ]),
  I1 = {
    key: 1,
    class: "the-header__container"
  },
  S1 = {
    key: 0,
    class: "the-header__content"
  },
  R1 = ["aria-label"],
  w1 = Ie({
    __name: "TheHeader",
    props: {
      hasSafeConnection: {
        type: Boolean,
        default: !1
      },
      hasOnlyLogo: {
        type: Boolean,
        default: !1
      },
      hasHeaderContent: {
        type: Boolean,
        default: !0
      }
    },
    setup(e) {
      const {
        t
      } = mt(), n = at(), r = sv(), s = e, o = q(() => n.pageOrigin === _n.Success), i = q(() => o.value ? 0 : n.cart?.cartItems?.reduce((u, d) => u + d.quantity, 0) ?? Number.parseInt(Ut("CART_QUANTITY"), 10) ?? 0), a = q(() => i.value <= 0 ? "" : i.value > 99 ? "99+" : String(i.value)), c = () => {
        o.value && on("/otc/cart"), Hg(K_.summary), document.getElementById(K_.summary)
          .focus()
      }, l = q(() => !s.hasOnlyLogo && r.name !== It.LOGIN);
      return (u, d) => {
        const g = $r("secure-html");
        return B(), ue("nav", {
          class: we(["the-header", {
            "the-header--only-logo": s.hasOnlyLogo
          }])
        }, [s.hasSafeConnection ? (B(), be(O1, {
          key: 0
        })) : ge("", !0), e.hasHeaderContent ? (B(), ue("div", I1, [d[0] || (d[0] = fe("a", {
          href: "/",
          "aria-label": "Home",
          class: "the-header__logo_link"
        }, [fe("img", {
          src: ok,
          alt: "Lidl",
          class: "the-header__logo"
        })], -1)), s.hasOnlyLogo ? ge("", !0) : Ft((B(), ue("p", S1, null, 512)), [
          [g, F(t)("header.serviceInfo.text")]
        ]), l.value ? (B(), ue("button", {
          key: 1,
          class: "the-header__nav-item",
          "aria-label": F(t)("pages.cartView.shoppingCart.headline.label", i.value),
          onClick: c,
          "data-testid": "cartIcon"
        }, [fe("span", {
          class: we({
            "the-header__cross": !0,
            "the-header__cross--empty": i.value <= 0
          })
        }, Ce(a.value), 3), Te(F(xn), {
          class: "the-header__icon",
          name: "shopping-cart-1"
        })], 8, R1)) : ge("", !0)])) : ge("", !0)], 2)
      }
    }
  }),
  P1 = je(w1, [
    ["__scopeId", "data-v-6784cc17"]
  ]),
  C1 = {
    class: "checkout-layout"
  },
  L1 = {
    class: "checkout-layout__container"
  },
  D1 = Ie({
    __name: "checkout-layout",
    setup(e) {
      zv("CHECKOUT");
      const t = q(() => !ZL());
      return (n, r) => {
        const s = Ja("router-view");
        return B(), ue("div", C1, [Te(P1, {
          "has-safe-connection": "",
          "has-header-content": t.value
        }, null, 8, ["has-header-content"]), fe("main", L1, [Te(s), Te(Yv, {
          "use-own-implementation": !0,
          headingLevel: 2
        })]), t.value ? (B(), be(sk, {
          key: 0
        })) : ge("", !0)])
      }
    }
  }),
  k1 = je(D1, [
    ["__scopeId", "data-v-8b70ef29"]
  ]);
var _u;
(e => {
  e.cartlayerToCheckout = "cartlayer-to-checkout", e.cartOverlayToCheckout = "cartoverlay-to-checkout", e.basketToCheckout = "basket-to-checkout", e.loginPage = "step1-login", e.addressPage = "step2-address", e.addressDeliveryOptions = "step2.1-delivery-options", e.addressDeliveryAddress = "step2.2-delivery-address", e.paymentPage = "step3-payment", e.summaryPage = "step4-summary"
})(_u || (_u = {}));
var x1 = (e => (e.Add2CartOverlay = "t79", e.HideCouponField = "t95", e))(x1 || {}),
  N1 = (e => (e.DEFAULT = "default", e.A1 = "a1", e.T95 = "a1_hidecouponfield", e))(N1 || {});
const $1 = {
  mounted(e, t) {
    !t.value || t?.value?.length <= 0 || e.setAttribute("data-ab", t.value)
  }
};
class mE {
  constructor(t) {
    this.options = t, this.options || (this.options = {}), this.options.ignoreErrors || (this.options.ignoreErrors = !1), this.options.eventElementSource || (this.options.eventElementSource = window)
  }
  emit(t, n, r) {
    try {
      const s = n ?? void 0,
        o = new CustomEvent(t, {
          detail: s
        });
      (r ?? this.options)
      ?.eventElementSource?.dispatchEvent(o)
    } catch (s) {
      if ((r ?? this.options)
        ?.logger?.error(s), (r ?? this.options)
        ?.ignoreErrors) return;
      throw s
    }
  }
  on(t, n) {
    return (this.options?.eventElementSource ?? window)
      .addEventListener(t, r => {
        n(r)
      }), () => {
        (this.options?.eventElementSource ?? window)
        .removeEventListener(t, n)
      }
  }
}
const V1 = "ArticlePromotionStatusChanged",
  M1 = {};

function F1(e, t) {
  return B(), ue("div", null, [...t[0] || (t[0] = [fe("svg", {
    class: "container",
    viewBox: "0 0 66 66",
    height: "66",
    width: "66"
  }, [fe("circle", {
    class: "car",
    cx: "33",
    cy: "33",
    r: "33",
    pathLength: "100",
    "stroke-width": "7px",
    fill: "none"
  })], -1)])])
}
const hE = je(M1, [
    ["render", F1],
    ["__scopeId", "data-v-7672816d"]
  ]),
  Bn = (e, t) => {
    const r = (e?.toFixed(2)
        .toString() ?? "")
      .split("."),
      s = r[0],
      o = r[1] === "00" ? t.doubleZeroDecimals : r[1] || "0";
    o?.padEnd(2, "0");
    const i = a => {
      if (a === "percentage") return `-${e}%`;
      let c = s + (o !== "" ? t.currencySeparator + o : "");
      return c += t.isCurrencySymbolShown ? ` ${t.currencySymbol}` : "", c += t.isAsteriskShown ? " *" : "", c
    };
    return {
      price: e,
      predecimal: s,
      decimal: o,
      separator: t.currencySeparator,
      symbol: t.currencySymbol,
      toString: i
    }
  },
  Cr = (e, t) => ({
    doubleZeroDecimals: e.doubleZeroDecimals,
    currencySeparator: e.currencySeparator,
    currencySymbol: e.currencySymbol,
    isCurrencySymbolShown: t.isCurrencySymbolShown,
    isAsteriskShown: t.isAsteriskShown
  });

function Y_(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s)
        .enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Kr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Y_(Object(n), !0)
      .forEach(function(r) {
        B1(e, r, n[r])
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Y_(Object(n))
      .forEach(function(r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
      })
  }
  return e
}

function B1(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function z_(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return Object.keys(e)
    .reduce((n, r) => (t.includes(r) || (n[r] = F(e[r])), n), {})
}

function xa(e) {
  return typeof e == "function"
}

function U1(e) {
  return lr(e) || fr(e)
}

function gE(e, t, n) {
  let r = e;
  const s = t.split(".");
  for (let o = 0; o < s.length; o++) {
    if (!r[s[o]]) return n;
    r = r[s[o]]
  }
  return r
}

function ml(e, t, n) {
  return q(() => e.some(r => gE(t, r, {
    [n]: !1
  })[n]))
}

function X_(e, t, n) {
  return q(() => e.reduce((r, s) => {
    const o = gE(t, s, {
      [n]: !1
    })[n] || [];
    return r.concat(o)
  }, []))
}

function vE(e, t, n, r) {
  return e.call(r, F(t), F(n), r)
}

function EE(e) {
  return e.$valid !== void 0 ? !e.$valid : !e
}

function j1(e, t, n, r, s, o, i) {
  let {
    $lazy: a,
    $rewardEarly: c
  } = s, l = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : [], u = arguments.length > 8 ? arguments[8] : void 0, d = arguments.length > 9 ? arguments[9] : void 0, g = arguments.length > 10 ? arguments[10] : void 0;
  const p = ce(!!r.value),
    m = ce(0);
  n.value = !1;
  const E = We([t, r].concat(l, g), () => {
    if (a && !r.value || c && !d.value && !n.value) return;
    let b;
    try {
      b = vE(e, t, u, i)
    } catch (v) {
      b = Promise.reject(v)
    }
    m.value++, n.value = !!m.value, p.value = !1, Promise.resolve(b)
      .then(v => {
        m.value--, n.value = !!m.value, o.value = v, p.value = EE(v)
      })
      .catch(v => {
        m.value--, n.value = !!m.value, o.value = v, p.value = !0
      })
  }, {
    immediate: !0,
    deep: typeof t == "object"
  });
  return {
    $invalid: p,
    $unwatch: E
  }
}

function H1(e, t, n, r, s, o, i, a) {
  let {
    $lazy: c,
    $rewardEarly: l
  } = r;
  const u = () => ({}),
    d = q(() => {
      if (c && !n.value || l && !a.value) return !1;
      let g = !0;
      try {
        const p = vE(e, t, i, o);
        s.value = p, g = EE(p)
      } catch (p) {
        s.value = p
      }
      return g
    });
  return {
    $unwatch: u,
    $invalid: d
  }
}

function q1(e, t, n, r, s, o, i, a, c, l, u) {
  const d = ce(!1),
    g = e.$params || {},
    p = ce(null);
  let m, E;
  e.$async ? {
    $invalid: m,
    $unwatch: E
  } = j1(e.$validator, t, d, n, r, p, s, e.$watchTargets, c, l, u) : {
    $invalid: m,
    $unwatch: E
  } = H1(e.$validator, t, n, r, p, s, c, l);
  const b = e.$message;
  return {
    $message: xa(b) ? q(() => b(z_({
      $pending: d,
      $invalid: m,
      $params: z_(g),
      $model: t,
      $response: p,
      $validator: o,
      $propertyPath: a,
      $property: i
    }))) : b || "",
    $params: g,
    $pending: d,
    $invalid: m,
    $response: p,
    $unwatch: E
  }
}

function W1() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = F(e),
    n = Object.keys(t),
    r = {},
    s = {},
    o = {};
  let i = null;
  return n.forEach(a => {
    const c = t[a];
    switch (!0) {
      case xa(c.$validator):
        r[a] = c;
        break;
      case xa(c):
        r[a] = {
          $validator: c
        };
        break;
      case a === "$validationGroups":
        i = c;
        break;
      case a.startsWith("$"):
        o[a] = c;
        break;
      default:
        s[a] = c
    }
  }), {
    rules: r,
    nestedValidators: s,
    config: o,
    validationGroups: i
  }
}
const G1 = "__root";

function K1(e, t, n, r, s, o, i, a, c) {
  const l = Object.keys(e),
    u = r.get(s, e),
    d = ce(!1),
    g = ce(!1),
    p = ce(0);
  if (u) {
    if (!u.$partial) return u;
    u.$unwatch(), d.value = u.$dirty.value
  }
  const m = {
    $dirty: d,
    $path: s,
    $touch: () => {
      d.value || (d.value = !0)
    },
    $reset: () => {
      d.value && (d.value = !1)
    },
    $commit: () => {}
  };
  return l.length ? (l.forEach(E => {
    m[E] = q1(e[E], t, m.$dirty, o, i, E, n, s, c, g, p)
  }), m.$externalResults = q(() => a.value ? [].concat(a.value)
    .map((E, b) => ({
      $propertyPath: s,
      $property: n,
      $validator: "$externalResults",
      $uid: `${s}-externalResult-${b}`,
      $message: E,
      $params: {},
      $response: null,
      $pending: !1
    })) : []), m.$invalid = q(() => {
    const E = l.some(b => F(m[b].$invalid));
    return g.value = E, !!m.$externalResults.value.length || E
  }), m.$pending = q(() => l.some(E => F(m[E].$pending))), m.$error = q(() => m.$dirty.value ? m.$pending.value || m.$invalid.value : !1), m.$silentErrors = q(() => l.filter(E => F(m[E].$invalid))
    .map(E => {
      const b = m[E];
      return dr({
        $propertyPath: s,
        $property: n,
        $validator: E,
        $uid: `${s}-${E}`,
        $message: b.$message,
        $params: b.$params,
        $response: b.$response,
        $pending: b.$pending
      })
    })
    .concat(m.$externalResults.value)), m.$errors = q(() => m.$dirty.value ? m.$silentErrors.value : []), m.$unwatch = () => l.forEach(E => {
    m[E].$unwatch()
  }), m.$commit = () => {
    g.value = !0, p.value = Date.now()
  }, r.set(s, e, m), m) : (u && r.set(s, e, m), m)
}

function Y1(e, t, n, r, s, o, i) {
  const a = Object.keys(e);
  return a.length ? a.reduce((c, l) => (c[l] = mu({
    validations: e[l],
    state: t,
    key: l,
    parentKey: n,
    resultsCache: r,
    globalConfig: s,
    instance: o,
    externalResults: i
  }), c), {}) : {}
}

function z1(e, t, n) {
  const r = q(() => [t, n].filter(m => m)
      .reduce((m, E) => m.concat(Object.values(F(E))), [])),
    s = q({
      get() {
        return e.$dirty.value || (r.value.length ? r.value.every(m => m.$dirty) : !1)
      },
      set(m) {
        e.$dirty.value = m
      }
    }),
    o = q(() => {
      const m = F(e.$silentErrors) || [],
        E = r.value.filter(b => (F(b)
            .$silentErrors || [])
          .length)
        .reduce((b, v) => b.concat(...v.$silentErrors), []);
      return m.concat(E)
    }),
    i = q(() => {
      const m = F(e.$errors) || [],
        E = r.value.filter(b => (F(b)
            .$errors || [])
          .length)
        .reduce((b, v) => b.concat(...v.$errors), []);
      return m.concat(E)
    }),
    a = q(() => r.value.some(m => m.$invalid) || F(e.$invalid) || !1),
    c = q(() => r.value.some(m => F(m.$pending)) || F(e.$pending) || !1),
    l = q(() => r.value.some(m => m.$dirty) || r.value.some(m => m.$anyDirty) || s.value),
    u = q(() => s.value ? c.value || a.value : !1),
    d = () => {
      e.$touch(), r.value.forEach(m => {
        m.$touch()
      })
    },
    g = () => {
      e.$commit(), r.value.forEach(m => {
        m.$commit()
      })
    },
    p = () => {
      e.$reset(), r.value.forEach(m => {
        m.$reset()
      })
    };
  return r.value.length && r.value.every(m => m.$dirty) && d(), {
    $dirty: s,
    $errors: i,
    $invalid: a,
    $anyDirty: l,
    $error: u,
    $pending: c,
    $touch: d,
    $reset: p,
    $silentErrors: o,
    $commit: g
  }
}

function mu(e) {
  let {
    validations: t,
    state: n,
    key: r,
    parentKey: s,
    childResults: o,
    resultsCache: i,
    globalConfig: a = {},
    instance: c,
    externalResults: l
  } = e;
  const u = s ? `${s}.${r}` : r,
    {
      rules: d,
      nestedValidators: g,
      config: p,
      validationGroups: m
    } = W1(t),
    E = Kr(Kr({}, a), p),
    b = r ? q(() => {
      const Q = F(n);
      return Q ? F(Q[r]) : void 0
    }) : n,
    v = Kr({}, F(l) || {}),
    A = q(() => {
      const Q = F(l);
      return r ? Q ? F(Q[r]) : void 0 : Q
    }),
    R = K1(d, b, r, i, u, E, c, A, n),
    O = Y1(g, b, u, i, E, c, A),
    L = {};
  m && Object.entries(m)
    .forEach(Q => {
      let [V, oe] = Q;
      L[V] = {
        $invalid: ml(oe, O, "$invalid"),
        $error: ml(oe, O, "$error"),
        $pending: ml(oe, O, "$pending"),
        $errors: X_(oe, O, "$errors"),
        $silentErrors: X_(oe, O, "$silentErrors")
      }
    });
  const {
    $dirty: P,
    $errors: D,
    $invalid: J,
    $anyDirty: k,
    $error: Y,
    $pending: H,
    $touch: G,
    $reset: me,
    $silentErrors: de,
    $commit: X
  } = z1(R, O, o), N = r ? q({
    get: () => F(b),
    set: Q => {
      P.value = !0;
      const V = F(n),
        oe = F(l);
      oe && (oe[r] = v[r]), ft(V[r]) ? V[r].value = Q : V[r] = Q
    }
  }) : null;
  r && E.$autoDirty && We(b, () => {
    P.value || G();
    const Q = F(l);
    Q && (Q[r] = v[r])
  }, {
    flush: "sync"
  });
  async function K() {
    return G(), E.$rewardEarly && (X(), await In()), await In(), new Promise(Q => {
      if (!H.value) return Q(!J.value);
      const V = We(H, () => {
        Q(!J.value), V()
      })
    })
  }

  function ee(Q) {
    return (o.value || {})[Q]
  }

  function _e() {
    ft(l) ? l.value = v : Object.keys(v)
      .length === 0 ? Object.keys(l)
      .forEach(Q => {
        delete l[Q]
      }) : Object.assign(l, v)
  }
  return dr(Kr(Kr(Kr({}, R), {}, {
    $model: N,
    $dirty: P,
    $error: Y,
    $errors: D,
    $invalid: J,
    $anyDirty: k,
    $pending: H,
    $touch: G,
    $reset: me,
    $path: u || G1,
    $silentErrors: de,
    $validate: K,
    $commit: X
  }, o && {
    $getResultsForChild: ee,
    $clearExternalResults: _e,
    $validationGroups: L
  }), O))
}
class X1 {
  constructor() {
    this.storage = new Map
  }
  set(t, n, r) {
    this.storage.set(t, {
      rules: n,
      result: r
    })
  }
  checkRulesValidity(t, n, r) {
    const s = Object.keys(r),
      o = Object.keys(n);
    return o.length !== s.length || !o.every(a => s.includes(a)) ? !1 : o.every(a => n[a].$params ? Object.keys(n[a].$params)
      .every(c => F(r[a].$params[c]) === F(n[a].$params[c])) : !0)
  }
  get(t, n) {
    const r = this.storage.get(t);
    if (!r) return;
    const {
      rules: s,
      result: o
    } = r, i = this.checkRulesValidity(t, n, s), a = o.$unwatch ? o.$unwatch : () => ({});
    return i ? o : {
      $dirty: o.$dirty,
      $partial: !0,
      $unwatch: a
    }
  }
}
const ma = {
    COLLECT_ALL: !0,
    COLLECT_NONE: !1
  },
  J_ = Symbol("vuelidate#injectChildResults"),
  Q_ = Symbol("vuelidate#removeChildResults");

function J1(e) {
  let {
    $scope: t,
    instance: n
  } = e;
  const r = {},
    s = ce([]),
    o = q(() => s.value.reduce((u, d) => (u[d] = F(r[d]), u), {}));

  function i(u, d) {
    let {
      $registerAs: g,
      $scope: p,
      $stopPropagation: m
    } = d;
    m || t === ma.COLLECT_NONE || p === ma.COLLECT_NONE || t !== ma.COLLECT_ALL && t !== p || (r[g] = u, s.value.push(g))
  }
  n.__vuelidateInjectInstances = [].concat(n.__vuelidateInjectInstances || [], i);

  function a(u) {
    s.value = s.value.filter(d => d !== u), delete r[u]
  }
  n.__vuelidateRemoveInstances = [].concat(n.__vuelidateRemoveInstances || [], a);
  const c = Ot(J_, []);
  Gs(J_, n.__vuelidateInjectInstances);
  const l = Ot(Q_, []);
  return Gs(Q_, n.__vuelidateRemoveInstances), {
    childResults: o,
    sendValidationResultsToParent: c,
    removeValidationResultsFromParent: l
  }
}

function yE(e) {
  return new Proxy(e, {
    get(t, n) {
      return typeof t[n] == "object" ? yE(t[n]) : q(() => t[n])
    }
  })
}
let Z_ = 0;

function Q1(e, t) {
  var n;
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  arguments.length === 1 && (r = e, e = void 0, t = void 0);
  let {
    $registerAs: s,
    $scope: o = ma.COLLECT_ALL,
    $stopPropagation: i,
    $externalResults: a,
    currentVueInstance: c
  } = r;
  const l = c || ((n = un()) === null || n === void 0 ? void 0 : n.proxy),
    u = l ? l.$options : {};
  s || (Z_ += 1, s = `_vuelidate_${Z_}`);
  const d = ce({}),
    g = new X1,
    {
      childResults: p,
      sendValidationResultsToParent: m,
      removeValidationResultsFromParent: E
    } = l ? J1({
      $scope: o,
      instance: l
    }) : {
      childResults: ce({})
    };
  if (!e && u.validations) {
    const b = u.validations;
    t = ce({}), ao(() => {
      t.value = l, We(() => xa(b) ? b.call(t.value, new yE(t.value)) : b, v => {
        d.value = mu({
          validations: v,
          state: t,
          childResults: p,
          resultsCache: g,
          globalConfig: r,
          instance: l,
          externalResults: a || l.vuelidateExternalResults
        })
      }, {
        immediate: !0
      })
    }), r = u.validationsConfig || r
  } else {
    const b = ft(e) || U1(e) ? e : dr(e || {});
    We(b, v => {
      d.value = mu({
        validations: v,
        state: t,
        childResults: p,
        resultsCache: g,
        globalConfig: r,
        instance: l ?? {},
        externalResults: a
      })
    }, {
      immediate: !0
    })
  }
  return l && (m.forEach(b => b(d, {
    $registerAs: s,
    $scope: o,
    $stopPropagation: i
  })), Nr(() => E.forEach(b => b(s)))), q(() => Kr(Kr({}, F(d.value)), p.value))
}

function em(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s)
        .enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function fi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? em(Object(n), !0)
      .forEach(function(r) {
        Z1(e, r, n[r])
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : em(Object(n))
      .forEach(function(r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
      })
  }
  return e
}

function Z1(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function Na(e) {
  return typeof e == "function"
}

function hu(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e)
}

function Tc(e) {
  return Na(e.$validator) ? fi({}, e) : {
    $validator: e
  }
}

function bE(e) {
  return typeof e == "object" ? e.$valid : e
}

function AE(e) {
  return e.$validator || e
}

function ex(e, t) {
  if (!hu(e)) throw new Error(`[@vuelidate/validators]: First parameter to "withParams" should be an object, provided ${typeof e}`);
  if (!hu(t) && !Na(t)) throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");
  const n = Tc(t);
  return n.$params = fi(fi({}, n.$params || {}), e), n
}

function tx(e, t) {
  if (!Na(e) && typeof F(e) != "string") throw new Error(`[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided ${typeof e}`);
  if (!hu(t) && !Na(t)) throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");
  const n = Tc(t);
  return n.$message = e, n
}

function nx(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  const n = Tc(e);
  return fi(fi({}, n), {}, {
    $async: !0,
    $watchTargets: t
  })
}

function rx(e) {
  return {
    $validator(t) {
      for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) r[s - 1] = arguments[s];
      return F(t)
        .reduce((o, i, a) => {
          const c = Object.entries(i)
            .reduce((l, u) => {
              let [d, g] = u;
              const p = e[d] || {},
                m = Object.entries(p)
                .reduce((E, b) => {
                  let [v, A] = b;
                  const O = AE(A)
                    .call(this, g, i, a, ...r),
                    L = bE(O);
                  if (E.$data[v] = O, E.$data.$invalid = !L || !!E.$data.$invalid, E.$data.$error = E.$data.$invalid, !L) {
                    let P = A.$message || "";
                    const D = A.$params || {};
                    typeof P == "function" && (P = P({
                      $pending: !1,
                      $invalid: !L,
                      $params: D,
                      $model: g,
                      $response: O
                    })), E.$errors.push({
                      $property: d,
                      $message: P,
                      $params: D,
                      $response: O,
                      $model: g,
                      $pending: !1,
                      $validator: v
                    })
                  }
                  return {
                    $valid: E.$valid && L,
                    $data: E.$data,
                    $errors: E.$errors
                  }
                }, {
                  $valid: !0,
                  $data: {},
                  $errors: []
                });
              return l.$data[d] = m.$data, l.$errors[d] = m.$errors, {
                $valid: l.$valid && m.$valid,
                $data: l.$data,
                $errors: l.$errors
              }
            }, {
              $valid: !0,
              $data: {},
              $errors: {}
            });
          return {
            $valid: o.$valid && c.$valid,
            $data: o.$data.concat(c.$data),
            $errors: o.$errors.concat(c.$errors)
          }
        }, {
          $valid: !0,
          $data: [],
          $errors: []
        })
    },
    $message: t => {
      let {
        $response: n
      } = t;
      return n ? n.$errors.map(r => Object.values(r)
        .map(s => s.map(o => o.$message))
        .reduce((s, o) => s.concat(o), [])) : []
    }
  }
}
const TE = e => {
    if (e = F(e), Array.isArray(e)) return !!e.length;
    if (e == null) return !1;
    if (e === !1) return !0;
    if (e instanceof Date) return !isNaN(e.getTime());
    if (typeof e == "object") {
      for (let t in e) return !0;
      return !1
    }
    return !!String(e)
      .length
  },
  sx = e => (e = F(e), Array.isArray(e) ? e.length : typeof e == "object" ? Object.keys(e)
    .length : String(e)
    .length);

function os() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return r => (r = F(r), !TE(r) || t.every(s => (s.lastIndex = 0, s.test(r))))
}
var ut = Object.freeze({
  __proto__: null,
  forEach: rx,
  len: sx,
  normalizeValidatorObject: Tc,
  regex: os,
  req: TE,
  unwrap: F,
  unwrapNormalizedValidator: AE,
  unwrapValidatorResponse: bE,
  withAsync: nx,
  withMessage: tx,
  withParams: ex
});
os(/^[a-zA-Z]*$/);
os(/^[a-zA-Z0-9]*$/);
os(/^\d*(\.\d+)?$/);
const ox = /^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
os(ox);
const ix = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
os(ix);
os(/(^[0-9]*$)|(^-[0-9]+$)/);
os(/^[-]?\d*(\.\d+)?$/);
var ha = {
    exports: {}
  },
  ax = ha.exports,
  tm;

function cx() {
  return tm || (tm = 1, (function(e, t) {
    (function(n, r) {
      e.exports = r()
    })(ax, (function() {
      var n = {
          LTS: "h:mm:ss A",
          LT: "h:mm A",
          L: "MM/DD/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY h:mm A",
          LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
        s = /\d/,
        o = /\d\d/,
        i = /\d\d?/,
        a = /\d*[^-_:/,()\s\d]+/,
        c = {},
        l = function(b) {
          return (b = +b) + (b > 68 ? 1900 : 2e3)
        },
        u = function(b) {
          return function(v) {
            this[b] = +v
          }
        },
        d = [/[+-]\d\d:?(\d\d)?|Z/, function(b) {
          (this.zone || (this.zone = {}))
          .offset = (function(v) {
            if (!v || v === "Z") return 0;
            var A = v.match(/([+-]|\d\d)/g),
              R = 60 * A[1] + (+A[2] || 0);
            return R === 0 ? 0 : A[0] === "+" ? -R : R
          })(b)
        }],
        g = function(b) {
          var v = c[b];
          return v && (v.indexOf ? v : v.s.concat(v.f))
        },
        p = function(b, v) {
          var A, R = c.meridiem;
          if (R) {
            for (var O = 1; O <= 24; O += 1)
              if (b.indexOf(R(O, 0, v)) > -1) {
                A = O > 12;
                break
              }
          } else A = b === (v ? "pm" : "PM");
          return A
        },
        m = {
          A: [a, function(b) {
            this.afternoon = p(b, !1)
          }],
          a: [a, function(b) {
            this.afternoon = p(b, !0)
          }],
          Q: [s, function(b) {
            this.month = 3 * (b - 1) + 1
          }],
          S: [s, function(b) {
            this.milliseconds = 100 * +b
          }],
          SS: [o, function(b) {
            this.milliseconds = 10 * +b
          }],
          SSS: [/\d{3}/, function(b) {
            this.milliseconds = +b
          }],
          s: [i, u("seconds")],
          ss: [i, u("seconds")],
          m: [i, u("minutes")],
          mm: [i, u("minutes")],
          H: [i, u("hours")],
          h: [i, u("hours")],
          HH: [i, u("hours")],
          hh: [i, u("hours")],
          D: [i, u("day")],
          DD: [o, u("day")],
          Do: [a, function(b) {
            var v = c.ordinal,
              A = b.match(/\d+/);
            if (this.day = A[0], v)
              for (var R = 1; R <= 31; R += 1) v(R)
                .replace(/\[|\]/g, "") === b && (this.day = R)
          }],
          w: [i, u("week")],
          ww: [o, u("week")],
          M: [i, u("month")],
          MM: [o, u("month")],
          MMM: [a, function(b) {
            var v = g("months"),
              A = (g("monthsShort") || v.map((function(R) {
                return R.slice(0, 3)
              })))
              .indexOf(b) + 1;
            if (A < 1) throw new Error;
            this.month = A % 12 || A
          }],
          MMMM: [a, function(b) {
            var v = g("months")
              .indexOf(b) + 1;
            if (v < 1) throw new Error;
            this.month = v % 12 || v
          }],
          Y: [/[+-]?\d+/, u("year")],
          YY: [o, function(b) {
            this.year = l(b)
          }],
          YYYY: [/\d{4}/, u("year")],
          Z: d,
          ZZ: d
        };

      function E(b) {
        var v, A;
        v = b, A = c && c.formats;
        for (var R = (b = v.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(Y, H, G) {
              var me = G && G.toUpperCase();
              return H || A[G] || n[G] || A[me].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(de, X, N) {
                return X || N.slice(1)
              }))
            })))
            .match(r), O = R.length, L = 0; L < O; L += 1) {
          var P = R[L],
            D = m[P],
            J = D && D[0],
            k = D && D[1];
          R[L] = k ? {
            regex: J,
            parser: k
          } : P.replace(/^\[|\]$/g, "")
        }
        return function(Y) {
          for (var H = {}, G = 0, me = 0; G < O; G += 1) {
            var de = R[G];
            if (typeof de == "string") me += de.length;
            else {
              var X = de.regex,
                N = de.parser,
                K = Y.slice(me),
                ee = X.exec(K)[0];
              N.call(H, ee), Y = Y.replace(ee, "")
            }
          }
          return (function(_e) {
            var Q = _e.afternoon;
            if (Q !== void 0) {
              var V = _e.hours;
              Q ? V < 12 && (_e.hours += 12) : V === 12 && (_e.hours = 0), delete _e.afternoon
            }
          })(H), H
        }
      }
      return function(b, v, A) {
        A.p.customParseFormat = !0, b && b.parseTwoDigitYear && (l = b.parseTwoDigitYear);
        var R = v.prototype,
          O = R.parse;
        R.parse = function(L) {
          var P = L.date,
            D = L.utc,
            J = L.args;
          this.$u = D;
          var k = J[1];
          if (typeof k == "string") {
            var Y = J[2] === !0,
              H = J[3] === !0,
              G = Y || H,
              me = J[2];
            H && (me = J[2]), c = this.$locale(), !Y && me && (c = A.Ls[me]), this.$d = (function(K, ee, _e, Q) {
              try {
                if (["x", "X"].indexOf(ee) > -1) return new Date((ee === "X" ? 1e3 : 1) * K);
                var V = E(ee)(K),
                  oe = V.year,
                  Ae = V.month,
                  Ne = V.day,
                  Le = V.hours,
                  He = V.minutes,
                  W = V.seconds,
                  he = V.milliseconds,
                  pe = V.zone,
                  ye = V.week,
                  Re = new Date,
                  w = Ne || (oe || Ae ? 1 : Re.getDate()),
                  C = oe || Re.getFullYear(),
                  U = 0;
                oe && !Ae || (U = Ae > 0 ? Ae - 1 : Re.getMonth());
                var te, ie = Le || 0,
                  se = He || 0,
                  S = W || 0,
                  T = he || 0;
                return pe ? new Date(Date.UTC(C, U, w, ie, se, S, T + 60 * pe.offset * 1e3)) : _e ? new Date(Date.UTC(C, U, w, ie, se, S, T)) : (te = new Date(C, U, w, ie, se, S, T), ye && (te = Q(te)
                  .week(ye)
                  .toDate()), te)
              } catch {
                return new Date("")
              }
            })(P, k, D, A), this.init(), me && me !== !0 && (this.$L = this.locale(me)
              .$L), G && P != this.format(k) && (this.$d = new Date("")), c = {}
          } else if (k instanceof Array)
            for (var de = k.length, X = 1; X <= de; X += 1) {
              J[1] = k[X - 1];
              var N = A.apply(this, J);
              if (N.isValid()) {
                this.$d = N.$d, this.$L = N.$L, this.init();
                break
              }
              X === de && (this.$d = new Date(""))
            } else O.call(this, L)
        }
      }
    }))
  })(ha)), ha.exports
}
var lx = cx();
const ux = Ai(lx),
  dx = "birthdate",
  fx = "31.12.1899",
  px = e => {
    if (!ut.req(e)) return !0;
    const {
      configs: t
    } = Ye();
    Qt.extend(ux);
    const n = ["DD.MM.YYYY", "D.M.YYYY"],
      r = Qt(e, n, !0),
      s = t.value.addressValidationRules.startBirthdate || fx;
    return r.isValid() ? !ut.req(e) || r.isAfter(Qt(s, n)) && r.isBefore(Qt()) : !1
  },
  _x = ut.withMessage(() => "global.forms.validation.birthdate.error", px),
  mx = "exact-length-without-whitespace",
  hx = e => t => !ut.req(t) || t.replace(/\s/g, "")
  .length === e.exactLengthWithoutWhitespace,
  gx = e => ut.withMessage(() => "global.forms.validation.exactLength.error", hx(e)),
  vx = "min-length-without-whitespace",
  Ex = e => t => !ut.req(t) || t.replace(/\s/g, "")
  .length >= e.minLengthWithoutWhitespace,
  yx = e => ut.withMessage(() => "global.forms.validation.minLength.error", Ex(e)),
  bx = "delivery-country",
  Ax = e => {
    const {
      configs: t
    } = Ye();
    return e === t.value.country
  },
  Tx = e => !ut.req(e) || Ax(e),
  Ox = ut.withMessage(() => "global.forms.validation.deliveryCountryCode.error", Tx),
  Ix = "email",
  Sx = 254,
  Rx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function wx(e) {
  return new RegExp(Rx, "gi")
    .test(e)
}
const Px = e => ut.req(e) ? e.length > Sx ? !1 : wx(e) : !0,
  Cx = ut.withMessage(() => "global.forms.validation.email.error", Px);
var zi = {
    exports: {}
  },
  Xi = {
    exports: {}
  },
  nm;

function OE() {
  return nm || (nm = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = n;

    function n(r) {
      if (r == null) throw new TypeError("Expected a string but received a ".concat(r));
      if (r.constructor.name !== "String") throw new TypeError("Expected a string but received a ".concat(r.constructor.name))
    }
    e.exports = t.default, e.exports.default = t.default
  })(Xi, Xi.exports)), Xi.exports
}
var rm;

function Lx() {
  return rm || (rm = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = s;
    var n = r(OE());

    function r(o) {
      return o && o.__esModule ? o : {
        default: o
      }
    }

    function s(o, i) {
      return (0, n.default)(o), o === i
    }
    e.exports = t.default, e.exports.default = t.default
  })(zi, zi.exports)), zi.exports
}
var Dx = Lx();
const kx = Ai(Dx),
  xx = "equal",
  Nx = e => t => !ut.req(t) || kx(t, e.value),
  $x = e => {
    const t = Ot(e.referenceValue);
    return ut.withMessage(() => "global.forms.validation.equal.error", Nx(t))
  },
  Vx = "exact-length",
  Mx = e => t => !ut.req(t) || t.length === e.exactLength,
  Fx = e => ut.withMessage(() => "global.forms.validation.exactLength.error", Mx(e)),
  Bx = "max-length",
  Ux = e => t => !ut.req(t) || t.length <= e.maxLength,
  jx = e => ut.withMessage(() => "global.forms.validation.maxLength.error", Ux(e)),
  Hx = "max-length-without-whitespace",
  qx = e => t => !ut.req(t) || t.replace(/\s/g, "")
  .length <= e.maxLengthWithoutWhitespace,
  Wx = e => ut.withMessage(() => "global.forms.validation.maxLength.error", qx(e)),
  Gx = "min-length",
  Kx = e => t => !ut.req(t) || t.length >= e.minLength,
  Yx = e => ut.withMessage(() => "global.forms.validation.minLength.error", Kx(e)),
  zx = "numeric",
  Xx = e => ut.req(e) ? /^\d+$/.test(e) : !0,
  Jx = ut.withMessage("validation.invalidFormat", Xx);
var Ji = {
    exports: {}
  },
  Qi = {
    exports: {}
  },
  sm;

function Qx() {
  return sm || (sm = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = n;

    function n() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        s = arguments.length > 1 ? arguments[1] : void 0;
      for (var o in s) typeof r[o] > "u" && (r[o] = s[o]);
      return r
    }
    e.exports = t.default, e.exports.default = t.default
  })(Qi, Qi.exports)), Qi.exports
}
var om;

function Zx() {
  return om || (om = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = s(OE()),
      r = s(Qx());

    function s(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }
    var o = {
      ignore_whitespace: !1
    };

    function i(a, c) {
      return (0, n.default)(a), c = (0, r.default)(c, o), (c.ignore_whitespace ? a.trim()
        .length : a.length) === 0
    }
    e.exports = t.default, e.exports.default = t.default
  })(Ji, Ji.exports)), Ji.exports
}
var eN = Zx();
const IE = Ai(eN),
  tN = (e, t) => e.replace(t, "")
  .replace(/\s/g, ""),
  nN = "phone-number-required",
  rN = e => {
    if (e === void 0) return !1;
    const {
      configs: t
    } = Ye();
    return typeof e == "string" ? !IE(tN(e, t.value.phoneNumberPrefix)) : !1
  },
  sN = ut.withMessage(() => "global.forms.validation.required.error", rN),
  oN = "required",
  iN = e => e === void 0 ? !1 : typeof e == "boolean" ? e : !IE(String(e)),
  aN = ut.withMessage(() => "global.forms.validation.required.error", iN),
  cN = "vat-forbidden",
  lN = e => t => e !== "PL" || !ut.req(t) ? !0 : !/^(\d{10}$)|(\d{3}[- ]\d{2,3}[- ]\d{2,3}[- ]\d{2,3}$)/gi.test(t),
  uN = () => {
    const {
      configs: e
    } = Ye(), t = e.value.country;
    return ut.withMessage(() => "global.forms.validation.vatForbidden.error", lN(t))
  },
  dN = (e, t) => {
    switch (e) {
      case dx:
        return _x;
      case Ix:
        return Cx;
      case oN:
        return aN;
      case xx:
        return $x({
          referenceValue: t?.[0] || ""
        });
      case Gx:
        return Yx({
          minLength: parseInt(t?.[0] || "0", 10)
        });
      case Bx:
        return jx({
          maxLength: parseInt(t?.[0] || "0", 10)
        });
      case Hx:
        return Wx({
          maxLengthWithoutWhitespace: parseInt(t?.[0] || "0", 10)
        });
      case vx:
        return yx({
          minLengthWithoutWhitespace: parseInt(t?.[0] || "0", 10)
        });
      case Vx:
        return Fx({
          exactLength: parseInt(t?.[0] || "0", 10)
        });
      case mx:
        return gx({
          exactLengthWithoutWhitespace: parseInt(t?.[0] || "0", 10)
        });
      case cN:
        return uN();
      case nN:
        return sN;
      case bx:
        return Ox;
      case zx:
        return Jx
    }
    e !== "" && console.error(`validation rule with name "${e}" not found`)
  },
  fN = e => {
    const [t, n] = e.split(":");
    return {
      name: t,
      params: n?.split(",")
    }
  },
  SE = (e, t = "|") => {
    const n = e.split(t),
      r = {};
    for (const s of n) {
      const o = fN(s);
      r[o.name] = o.params
    }
    return r
  },
  pN = (e, t = {}, n = "|") => {
    const r = {},
      s = SE(e, n);
    for (const o in s) {
      const i = s[o],
        a = dN(o, i);
      a && (r[o] = ut.withParams(t, a))
    }
    return r
  },
  _N = {
    class: "base-checkbox"
  },
  mN = Ie({
    __name: "BaseCheckbox",
    props: Qo({
      name: {
        type: String,
        required: !0
      },
      label: {
        type: String,
        default: ""
      },
      hint: {
        type: String,
        default: ""
      },
      isRequired: {
        type: Boolean,
        default: !1
      },
      isError: {
        type: Boolean,
        default: !1
      },
      isSuccess: {
        type: Boolean,
        default: !1
      },
      isDisabled: {
        type: Boolean,
        default: !1
      },
      isReadonly: {
        type: Boolean,
        default: !1
      },
      validationRules: {
        type: String,
        default: ""
      },
      validationScope: {
        type: String,
        default: ""
      },
      validationErrors: {
        type: Array,
        default: () => []
      },
      validationMode: {
        type: String,
        default: "lazy"
      }
    }, {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    }),
    emits: Qo(["update:validationErrors"], ["update:modelValue"]),
    setup(e, {
      emit: t
    }) {
      const {
        t: n
      } = mt(), r = t, s = e, o = $u(e, "modelValue", {
        set: g => s.isReadonly ? i : g
      }), i = ce(o.value);
      We(() => s.isReadonly, (g, p) => {
        g && g !== p && (i.value = o.value)
      });
      const a = q(() => pN(s.validationRules)),
        c = Q1({
          [s.name]: a
        }, {
          [s.name]: o
        }, {
          $scope: s.validationScope
        }),
        l = q(() => {
          const g = SE(String(s.validationRules));
          return c.value?.$errors?.map(p => n(p.$message, g[p.$validator])) ?? []
        }),
        u = q(() => l.value.length > 0);
      We(() => l.value, () => r("update:validationErrors", l.value)), s.validationMode === "eager" && We(() => o.value, () => c.value?.$touch());
      const d = q(() => s.isError || u ? "error" : "info");
      return Rt(() => {
        s.validationMode === "aggressive" && c.value?.$touch(), i.value = o.value
      }), (g, p) => (B(), ue("div", _N, [Te(F(n1), {
        id: s.name,
        modelValue: o.value,
        "onUpdate:modelValue": p[0] || (p[0] = m => o.value = m),
        name: s.name,
        label: `${e.label}${s.isRequired?"*":""}`,
        "is-disabled": s.isDisabled,
        "is-error": s.isError || u.value,
        class: "base-checkbox__checkbox"
      }, null, 8, ["id", "modelValue", "name", "label", "is-disabled", "is-error"]), l.value.length > 0 || s.hint ? (B(), be(F(c1), {
        key: 0,
        type: d.value
      }, {
        default: Be(() => [Vt(Ce(l.value.length > 0 ? l.value?.join(`\r
`) : s.hint), 1)]),
        _: 1
      }, 8, ["type"])) : ge("", !0)]))
    }
  }),
  RE = je(mN, [
    ["__scopeId", "data-v-07a2e810"]
  ]),
  hN = ["aria-label"],
  gN = {
    class: "base-additional-info__content"
  },
  vN = Ie({
    __name: "BaseAdditionalInfo",
    props: Qo({
      label: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        default: ""
      }
    }, {
      modelValue: {
        type: Boolean
      },
      modelModifiers: {}
    }),
    emits: Qo(["open", "close"], ["update:modelValue"]),
    setup(e, {
      emit: t
    }) {
      const {
        t: n
      } = mt(), r = t, s = $u(e, "modelValue"), o = c => {
        c ? a() : i()
      }, i = () => {
        s.value = !1, r("close")
      }, a = () => {
        s.value = !0, r("open")
      };
      return (c, l) => (B(), ue("aside", {
        "aria-label": e.label
      }, [Te(F(Ac), {
        "z-index": 4e3,
        title: e.title,
        "is-open": s.value,
        "accessible-close-text": F(n)("global.close"),
        "destroy-on-close": !1,
        "bottom-sheet-props": {
          isInvisibleWhenClosed: !0
        },
        "onUpdate:isOpen": o
      }, {
        default: Be(() => [fe("article", gN, [et(c.$slots, "default", {}, void 0, !0)])]),
        _: 3
      }, 8, ["title", "is-open", "accessible-close-text"])], 8, hN))
    }
  }),
  wE = je(vN, [
    ["__scopeId", "data-v-ac723131"]
  ]),
  EN = {
    class: "tooltip"
  },
  yN = ["aria-label"],
  bN = Ie({
    __name: "BaseCustomTooltip",
    props: {
      icon: {},
      title: {},
      heading: {},
      content: {},
      linkText: {}
    },
    setup(e) {
      const t = e,
        n = ce(!1),
        r = () => {
          n.value = !n.value
        };
      return (s, o) => {
        const i = $r("secure-html");
        return B(), ue("div", EN, [fe("button", {
          class: we(["tooltip__icon", {
            "tooltip__icon--link": t.linkText
          }]),
          "aria-label": t.title,
          onClick: r
        }, [Vt(Ce(t.linkText) + " ", 1), Te(F(xn), {
          class: "icon",
          name: t.icon
        }, null, 8, ["name"])], 10, yN), Te(wE, {
          modelValue: n.value,
          "onUpdate:modelValue": o[0] || (o[0] = a => n.value = a),
          title: t.title,
          label: t.heading
        }, {
          default: Be(() => [Ft(fe("p", null, null, 512), [
            [i, t.content]
          ])]),
          _: 1
        }, 8, ["modelValue", "title", "label"])])
      }
    }
  }),
  PE = je(bN, [
    ["__scopeId", "data-v-e47f2c4c"]
  ]),
  AN = {
    key: 0,
    class: "additional-services"
  },
  TN = {
    "data-ee": "pca-additional-services-title"
  },
  ON = {
    class: "service-item__details"
  },
  IN = {
    class: "service-price",
    "data-ee": "pca-additional-services-price"
  },
  SN = Ie({
    __name: "AdditionalServices",
    props: {
      product: {},
      freeText: {},
      servicesText: {}
    },
    emits: ["updateAdditionalServices"],
    setup(e, {
      emit: t
    }) {
      const n = e,
        r = t,
        {
          t: s
        } = mt(),
        {
          configs: o
        } = Ye(),
        {
          featureToggles: i
        } = jt(),
        a = ce([]),
        c = q(() => d => {
          const g = Cr(o.value, i.value);
          return g.isAsteriskShown = !1, d === 0 ? `${n.freeText} (${Bn(d,g)})` : Bn(d, g)
            .toString()
        }),
        l = q(() => n.product?.additionalServices?.length),
        u = async d => {
          d.selected ? a.value = a.value?.filter(g => g !== String(d?.type)) ?? [] : a.value = [...a.value, String(d?.type)], r("updateAdditionalServices", a.value)
        };
      return ao(() => {
        a.value = n.product.additionalServices?.filter(d => d?.selected)
          ?.map(d => String(d?.type)) ?? []
      }), (d, g) => l.value ? (B(), ue("div", AN, [fe("h3", TN, Ce(n.servicesText), 1), (B(!0), ue(Xe, null, Gn(n.product.additionalServices, (p, m) => (B(), ue("div", {
        key: `${p.type}_${m+1}`,
        class: we([`${p.type}_${m+1}`, "service-item"])
      }, [fe("div", ON, [Te(RE, {
        class: "service-item__checkbox",
        modelValue: p.selected,
        "onUpdate:modelValue": E => p.selected = E,
        "data-ee": "pca-additional-services-checkbox",
        id: `additionalServiceCheckbox_${n.product.erpNumber}_${p.type}_${p.text}`,
        name: `additionalServiceCheckbox_${n.product.erpNumber}_${p.type}_${p.text}`,
        label: p.text,
        onInput: E => u(p)
      }, null, 8, ["modelValue", "onUpdate:modelValue", "id", "name", "label", "onInput"]), F(La)("pages.cartView.itemList.additionalServices." + p.type + ".toolTip.title") && F(La)("pages.cartView.itemList.additionalServices." + p.type + ".toolTip.content") ? (B(), be(PE, {
        key: 0,
        title: F(s)("pages.cartView.itemList.additionalServices." + p.type + ".toolTip.title"),
        heading: p.text,
        content: F(s)("pages.cartView.itemList.additionalServices." + p.type + ".toolTip.content"),
        icon: "information-circle"
      }, null, 8, ["title", "heading", "content"])) : ge("", !0)]), fe("span", IN, Ce(c.value(p.price)), 1)], 2))), 128))])) : ge("", !0)
    }
  }),
  RN = je(SN, [
    ["__scopeId", "data-v-358a32e9"]
  ]);
var pi = (e => (e.REMOVE = "remove", e.ADD = "add", e))(pi || {});
const wN = ["aria-describedby"],
  PN = ["aria-describedby"],
  CN = Ie({
    __name: "AddRemoveToCartButtons",
    props: {
      actionType: {},
      productContainerId: {},
      quantity: {},
      quantityValues: {}
    },
    emits: ["updateItemQuantity"],
    setup(e, {
      emit: t
    }) {
      const n = e,
        {
          t: r
        } = mt(),
        s = t,
        o = q(() => n.actionType === pi.REMOVE && n.quantity > n.quantityValues[0]),
        i = q(() => n.actionType === pi.ADD && n.quantity < 1);
      return (a, c) => (B(), ue(Xe, null, [o.value ? (B(), ue("button", {
        key: 0,
        class: "action-button action",
        "aria-describedby": n.productContainerId,
        "data-ee": "pca-article-quantity-remove",
        onClick: c[0] || (c[0] = Os(l => s("updateItemQuantity", 0), ["prevent"]))
      }, Ce(F(r)("pages.cartView.itemList.item.remove")), 9, wN)) : ge("", !0), i.value ? (B(), ue("button", {
        key: 1,
        "aria-describedby": n.productContainerId,
        class: "action-button action",
        onClick: c[1] || (c[1] = Os(l => s("updateItemQuantity", n.quantity + 1), ["prevent"]))
      }, Ce(F(r)("pages.cartView.itemList.item.addToCArt")), 9, PN)) : ge("", !0)], 64))
    }
  }),
  im = je(CN, [
    ["__scopeId", "data-v-d23493ce"]
  ]),
  LN = 567,
  aF = 767,
  DN = 1024,
  cF = 1439,
  lF = 1440,
  kN = ["srcset", "media"],
  xN = ["srcset", "media"],
  NN = ["src", "alt"],
  $N = Ie({
    __name: "BasePicture",
    props: {
      alt: {},
      sources: {}
    },
    setup(e) {
      const t = at(),
        n = e,
        r = q(() => n.sources.thumb !== void 0),
        s = q(() => [_n.Checkout, _n.Success].includes(t.pageOrigin));
      return (o, i) => (B(), ue("picture", {
        class: we(["picture picture--responsive picture--loaded base-picture", {
          picture__small: s.value
        }])
      }, [r.value ? (B(), ue("source", {
        key: 0,
        srcset: n.sources.basket,
        media: `(max-width: ${F(LN)}px)`
      }, null, 8, kN)) : ge("", !0), r.value ? (B(), ue("source", {
        key: 1,
        srcset: n.sources.small,
        media: `(max-width: ${F(DN)}px)`
      }, null, 8, xN)) : ge("", !0), fe("img", {
        src: n.sources.medium,
        alt: e.alt,
        "data-ee": "pca-article-image"
      }, null, 8, NN)], 2))
    }
  }),
  VN = je($N, [
    ["__scopeId", "data-v-29d5f8fc"]
  ]),
  MN = ["aria-label"],
  FN = Ie({
    __name: "ButtonAsLink",
    props: {
      ariaLabel: {}
    },
    emits: ["click"],
    setup(e, {
      emit: t
    }) {
      const n = t;
      return (r, s) => (B(), ue("button", {
        type: "button",
        class: "button-as-link",
        "aria-label": e.ariaLabel,
        onClick: s[0] || (s[0] = o => n("click", o))
      }, [et(r.$slots, "default", {}, void 0, !0)], 8, MN))
    }
  }),
  gu = je(FN, [
    ["__scopeId", "data-v-b55a0eec"]
  ]),
  BN = {
    class: "base-discount__price"
  },
  UN = {
    key: 1,
    class: "base-discount__price--disabled"
  },
  jN = {
    class: ""
  },
  HN = Ie({
    __name: "BaseDiscountPrice",
    props: {
      discount: {
        type: String,
        required: !0
      },
      discountType: {
        type: String,
        default: "red"
      },
      price: {
        type: Number,
        required: !0
      },
      isStrikeThroughEnabled: {
        type: Boolean,
        default: !0
      }
    },
    setup(e) {
      const t = e,
        {
          configs: n
        } = Ye(),
        {
          featureToggles: r
        } = jt(),
        s = q(() => t.discountType === "yellow"),
        o = q(() => {
          const i = Cr(n.value, r.value);
          return i.isAsteriskShown = !1, Bn(t.price, i)
            .toString()
        });
      return (i, a) => e.isStrikeThroughEnabled ? (B(), ue("div", {
        key: 0,
        class: we(["base-discount", {
          "base-discount--yellow-base": s.value
        }])
      }, [fe("p", {
        class: we(["base-discount__discount", {
          "base-discount--yellow": s.value
        }])
      }, Ce(t.discount), 3), fe("p", BN, [fe("s", null, Ce(o.value), 1)])], 2)) : e.isStrikeThroughEnabled ? ge("", !0) : (B(), ue("div", UN, [fe("p", jN, Ce(i.$t("pages.cartView.itemList.item.price.targetPrice")) + Ce(": ") + Ce(o.value), 1)]))
    }
  }),
  vu = je(HN, [
    ["__scopeId", "data-v-4b9c9510"]
  ]),
  qN = {
    class: "price__block"
  },
  WN = {
    class: "price__total"
  },
  GN = {
    class: "amount",
    "data-ee": "pca-article-price"
  },
  KN = {
    key: 2,
    class: "price__each-amount"
  },
  YN = Ie({
    __name: "CartItemPrice",
    props: {
      product: {}
    },
    setup(e) {
      const {
        t
      } = mt(), n = e, {
        configs: r
      } = Ye(), {
        featureToggles: s,
        isFeatureEnabled: o
      } = jt(), i = Cr(r.value, s.value);
      i.isAsteriskShown = !1;
      const a = q(() => Bn(n.product?.lineItemAmountAfterCoupon, i)
          .toString()),
        c = q(() => Bn(n.product?.unitPrice, i)
          .toString()),
        l = q(() => n.product?.quantity && n.product.discount?.percentageDiscount),
        u = q(() => Bn(n.product.discount?.percentageDiscount, Cr(r.value, s.value))
          ?.toString("percentage")),
        d = q(() => Bn(-n.product.lineItemAmountLidlPlusCouponDiscount, Cr(r.value, s.value))
          ?.toString("price")),
        g = q(() => n.product.lineItemAmountLidlPlusCouponDiscount),
        p = q(() => {
          let m = n.product.discount?.fromRecommendedPrice;
          return o("isStrikethroughPriceEnabled") || m != null && !m
        });
      return (m, E) => (B(), ue("div", qN, [fe("div", WN, [l.value ? (B(), be(vu, {
        key: 0,
        id: "discount-" + n.product.erpNumber,
        "discount-type": "red",
        price: n.product.discount?.deletedPrice,
        discount: u.value,
        "is-strike-through-enabled": p.value
      }, null, 8, ["id", "price", "discount", "is-strike-through-enabled"])) : ge("", !0), g.value ? (B(), be(vu, {
        key: 1,
        id: "coupon-" + n.product.erpNumber,
        "discount-type": "yellow",
        price: n.product.lineItemAmountBeforeCoupon,
        discount: d.value
      }, null, 8, ["id", "price", "discount"])) : ge("", !0), fe("span", GN, Ce(a.value), 1), n.product?.quantity > 1 ? (B(), ue("span", KN, Ce(F(t)("pages.cartView.itemList.item.price.each")) + " " + Ce(c.value), 1)) : ge("", !0)])]))
    }
  }),
  zN = je(YN, [
    ["__scopeId", "data-v-7738e749"]
  ]),
  XN = {
    key: 0
  },
  JN = Ie({
    __name: "BaseFeatureToggle",
    props: {
      name: {}
    },
    setup(e) {
      const t = e,
        {
          isFeatureEnabled: n
        } = jt(),
        r = q(() => n(t.name));
      return (s, o) => r.value ? (B(), ue("div", XN, [et(s.$slots, "default")])) : ge("", !0)
    }
  }),
  QN = Ie({
    __name: "EnergyLabelSheet",
    props: {
      isOpenSheet: {
        type: Boolean,
        required: !1
      },
      title: {
        type: String,
        required: !0
      }
    },
    emits: ["back"],
    setup(e, {
      emit: t
    }) {
      const {
        t: n
      } = mt(), r = t, s = e, o = (i = !0) => {
        r("back", i)
      };
      return (i, a) => (B(), be(F(Ac), {
        title: s.title,
        "z-index": 4e3,
        class: we(["energy-label__sheet", {
          "energy-label__sheet--hidden": !e.isOpenSheet
        }]),
        "is-open": e.isOpenSheet,
        "destroy-on-close": !0,
        "is-callout-open": !1,
        "mask-closable": !0,
        "accessible-close-text": F(n)("global.close"),
        "bottom-sheet-props": {
          isInvisibleWhenClosed: !0
        },
        "onUpdate:isOpen": o
      }, {
        default: Be(() => [et(i.$slots, "default", {}, void 0, !0)]),
        _: 3
      }, 8, ["title", "class", "is-open", "accessible-close-text"]))
    }
  }),
  am = je(QN, [
    ["__scopeId", "data-v-ea827d30"]
  ]),
  ZN = ["aria-label", "data"],
  e$ = ["src", "alt"],
  t$ = {
    class: "energy-label__wrapper"
  },
  n$ = {
    class: "energy-label__wrapper__logo"
  },
  r$ = ["href"],
  s$ = ["alt", "src"],
  o$ = {
    key: 0,
    class: "energy-label__text-list"
  },
  i$ = ["href"],
  a$ = Ie({
    __name: "EnergyLabel",
    props: {
      colorCode: {
        type: String,
        required: !0
      },
      classCode: {
        type: String,
        required: !0
      },
      titles: {
        type: Array,
        required: !0
      },
      logo: {
        type: String
      },
      fiche: {
        type: String
      },
      ficheText: {
        type: String,
        default: ""
      },
      modifier: {
        type: String
      }
    },
    setup(e) {
      const t = g => /\.pdf$/.test(g),
        {
          t: n
        } = mt(),
        r = e,
        s = ce(!1),
        o = ce(!1),
        i = (g = !0, p) => {
          if (t(p)) {
            s.value = g;
            return
          }
          o.value = g
        },
        a = q(() => r.classCode.charAt(0)),
        c = q(() => r.classCode.substring(1)),
        l = q(() => ({
          "energy-label__arrow": !0,
          [`energy-label__arrow--${r.colorCode}`]: !0,
          [`energy-label__arrow--${r.modifier}`]: r.modifier
        })),
        u = q(() => r.classCode.toLowerCase()
          .includes("new")),
        d = q(() => !!(r.modifier && !u.value));
      return (g, p) => (B(), ue("div", {
        class: we([{
          ["energy-label--" + r.modifier]: d.value
        }, "energy-label"])
      }, [Te(am, {
        "is-open-sheet": s.value,
        title: F(n)("pages.cartView.itemList.product.datasheet"),
        onBack: p[0] || (p[0] = m => i(!1, r.fiche))
      }, {
        default: Be(() => [r.fiche && t(r.fiche) ? (B(), ue("object", {
          key: 0,
          "aria-label": F(n)("pages.cartView.itemList.product.datasheet"),
          class: "image-fiche image-pdf",
          data: r.fiche,
          type: "application/pdf"
        }, null, 8, ZN)) : ge("", !0)]),
        _: 1
      }, 8, ["is-open-sheet", "title"]), Te(am, {
        "is-open-sheet": o.value,
        title: String(r.titles[0]),
        onBack: p[1] || (p[1] = m => i(!1, r.logo))
      }, {
        default: Be(() => [fe("img", {
          src: r.logo,
          class: "image-fiche__logo",
          alt: String(r.titles[0])
        }, null, 8, e$)]),
        _: 1
      }, 8, ["is-open-sheet", "title"]), fe("div", t$, [fe("div", n$, [fe("a", {
        class: we([u.value ? "energy-label__arrow energy-label__arrow--NEW eel-new" : l.value]),
        href: r.fiche,
        onClick: p[2] || (p[2] = Os(m => i(!0, r.logo), ["prevent"]))
      }, [u.value ? (B(), ue("img", {
        key: 0,
        alt: r.classCode,
        class: "image-fiche",
        src: `/otc/images/energy-labels/EEL-${r.classCode}.svg`
      }, null, 8, s$)) : ge("", !0), u.value ? ge("", !0) : (B(), ue(Xe, {
        key: 1
      }, [Vt(Ce(a.value) + " ", 1), c.value ? (B(), ue("sup", {
        key: 0,
        class: we([{
          ["energy-label__suffix--" + r.modifier]: r.modifier
        }, "energy-label__suffix"])
      }, Ce(c.value), 3)) : ge("", !0)], 64))], 10, r$)]), r.titles.length > 0 ? (B(), ue("div", o$, [r.fiche ? (B(), ue("a", {
        key: 0,
        href: r.fiche,
        class: "base-link",
        onClick: p[3] || (p[3] = Os(m => i(!0, r.fiche), ["prevent"]))
      }, Ce(F(n)("pages.cartView.itemList.product.datasheet")), 9, i$)) : ge("", !0)])) : ge("", !0)])], 2))
    }
  }),
  c$ = je(a$, [
    ["__scopeId", "data-v-33894123"]
  ]),
  l$ = {
    class: "product-details"
  },
  u$ = ["id"],
  d$ = {
    key: 0,
    class: "product-details__description"
  },
  f$ = {
    key: 1,
    class: "product-details__amount"
  },
  p$ = {
    key: 2,
    class: "product-data"
  },
  _$ = Ie({
    __name: "CartItemProductDetail",
    props: {
      product: {},
      labelSheet: {},
      isOrderAlreadyFinished: {
        type: Boolean,
        default: !1
      }
    },
    setup(e) {
      const {
        t
      } = mt(), n = e, r = q(() => s => {
        const o = s.energyLabels;
        return s && o && o.length > 0
      });
      return (s, o) => {
        const i = $r("secure-html");
        return B(), ue("div", l$, [Ft(fe("div", {
          class: "product-details__headline",
          id: `product-details-${e.product.erpNumber}`,
          "data-ee": "pca-article-name"
        }, null, 8, u$), [
          [i, n.product.headName ?? n.product.name]
        ]), n.product.variantInfo ? Ft((B(), ue("p", d$, null, 512)), [
          [i, n.product.variantInfo]
        ]) : ge("", !0), e.isOrderAlreadyFinished ? (B(), ue("div", f$, Ce(F(t)("pages.success.summary.amount")) + ": " + Ce(n.product.quantity), 1)) : ge("", !0), r.value(e.product) ? (B(), ue("div", p$, [Te(JN, {
          name: "energyLabelEnabled",
          reversed: !1
        }, {
          default: Be(() => [(B(!0), ue(Xe, null, Gn(n.product.energyLabels, (a, c) => (B(), ue("div", {
            key: c,
            class: "cartitem__icon-wrapper--energy-labels"
          }, [Te(c$, {
            "class-code": a.classCode,
            "color-code": a.colorCode,
            logo: a.logo,
            fiche: a.fiche,
            titles: [a.title],
            "fiche-text": n.labelSheet
          }, null, 8, ["class-code", "color-code", "logo", "fiche", "titles", "fiche-text"])]))), 128))]),
          _: 1
        })])) : ge("", !0), et(s.$slots, "default", {}, void 0, !0)])
      }
    }
  }),
  m$ = je(_$, [
    ["__scopeId", "data-v-60771da5"]
  ]),
  h$ = {
    class: "container"
  },
  g$ = {
    class: "subgrid"
  },
  v$ = {
    class: "counter-item-button"
  },
  E$ = {
    class: "counter-item-button__counter",
    "data-ee": "pca-article-quantity",
    "aria-live": "polite"
  },
  y$ = {
    key: 0,
    class: "minimum-quantity"
  },
  b$ = Ie({
    __name: "CounterItem",
    props: {
      quantity: {},
      quantitySelectionValues: {},
      minimumLabel: {}
    },
    emits: ["updateItemQuantity"],
    setup(e, {
      emit: t
    }) {
      const {
        t: n
      } = mt(), r = e, s = t, o = ce(r.quantitySelectionValues.indexOf(r.quantity)), i = ce(r.quantitySelectionValues[o.value]), a = q(() => i.value <= 0), c = q(() => o.value === r.quantitySelectionValues.length - 1), l = q(() => `${r.minimumLabel} ${g.value}`), u = () => {
        o.value < r.quantitySelectionValues.length - 1 && (o.value++, i.value = r.quantitySelectionValues[o.value], s("updateItemQuantity", i.value))
      }, d = () => {
        o.value > 0 ? (o.value--, i.value = r.quantitySelectionValues[o.value], s("updateItemQuantity", i.value)) : o.value === 0 && (i.value = 0, s("updateItemQuantity", 0))
      }, g = q(() => r.quantitySelectionValues[0]), p = q(() => i.value === 0 || i.value === g.value ? "trash" : "minus");
      return (m, E) => (B(), ue("div", h$, [fe("div", g$, [fe("div", v$, [Te(F(io), {
        "aria-label": F(n)("counterItem.reduce"),
        "data-testid": "subtract",
        as: "button",
        icon: p.value,
        "is-disabled": a.value,
        class: "counter-item-button__button--subtract",
        "data-ee": "pca-article-quantity-subtract",
        onClick: d
      }, null, 8, ["aria-label", "icon", "is-disabled"]), fe("span", E$, Ce(i.value), 1), Te(F(io), {
        "aria-label": F(n)("counterItem.increase"),
        "data-testid": "add",
        as: "button",
        icon: "plus",
        "is-disabled": c.value,
        class: "counter-item-button__button--add",
        "data-ee": "pca-article-quantity-add",
        onClick: u
      }, null, 8, ["aria-label", "is-disabled"])]), g.value > 1 ? (B(), ue("div", y$, Ce(l.value), 1)) : ge("", !0)])]))
    }
  }),
  A$ = je(b$, [
    ["__scopeId", "data-v-d94d8339"]
  ]),
  T$ = "cookieconsent";

function CE(e) {
  const t = ce([]);
  e || (e = {
    origin: "CART"
  }), e?.origin || (e.origin = "CART");
  const n = {
      logger: rn,
      ignoreErrors: !0,
      eventElementSource: window
    },
    r = new mE(n),
    s = o => {
      t.value.push(r.on(V1, o))
    };
  return Nr(() => {
    for (const o of t.value) o();
    t.value = []
  }), {
    listenOnLidlPlusVoucherChangeEvent: s
  }
}
const hl = "lidl-plus-voucher-script",
  LE = () => {
    const e = at(),
      t = q(() => jt()
        .isFeatureEnabled("isLidlPlusVoucherEnabled")),
      n = q(() => at()
        .cart?.zoneId ?? Nt()),
      r = () => !!document.querySelector(`#${hl}`),
      s = async () => {
        if (!r() && t.value) {
          const c = document.createElement("script"),
            l = Ye()
            .configs.value.env !== "prod",
            u = Qt()
            .unix()
            .toString(10);
          c.src = `/prm/static/webcomponent/index.js${l?`?v=${u}`:""}`, c.id = hl, c.type = "module", c.dataset[T$] = "ignore", document.head.appendChild(c)
        }
      }, o = () => {
        const c = document.querySelector(`#${hl}`);
        c && document.head.removeChild(c)
      }, i = async () => {
        t.value && (o(), await In(), s())
      }, a = () => {
        e.fetch()
      };
    return Rt(async () => {
      await s();
      const {
        listenOnLidlPlusVoucherChangeEvent: c
      } = CE();
      c(() => a())
    }), We(() => e.cart?.cartItems?.length, async (c, l) => {
      c === void 0 || l === void 0 || c === l || ag(() => i(), 500, {
        leading: !0,
        trailing: !1
      })()
    }), {
      isLidlPlusCouponEnabled: t,
      reloadScript: i,
      dataZone: n
    }
  },
  O$ = {
    key: 0,
    class: "lidl-plus-coupon"
  },
  I$ = ["data-zone", "data-articles-ids", "data-country", "data-lang", "data-categories-ids"],
  S$ = Ie({
    __name: "LidlPlusCoupon",
    props: {
      erpNumber: {},
      categoryIds: {
        default: () => []
      }
    },
    setup(e) {
      const {
        configs: t
      } = Ye(), {
        isLidlPlusCouponEnabled: n,
        dataZone: r
      } = LE();
      return (s, o) => F(n) ? (B(), ue("div", O$, [fe("coupon-component", {
        "data-zone": F(r),
        "data-articles-ids": e.erpNumber,
        "data-country": F(t)
          .country,
        "data-lang": F(t)
          .language,
        "data-categories-ids": e.categoryIds.join(","),
        "data-section": "coupon_web_cart"
      }, null, 8, I$)])) : ge("", !0)
    }
  }),
  R$ = je(S$, [
    ["__scopeId", "data-v-8d2a7ecf"]
  ]),
  w$ = {
    class: "service-item__equipment"
  },
  P$ = Ie({
    __name: "OldEquipment",
    props: {
      product: {},
      headline: {},
      title: {},
      toolTipText: {}
    },
    emits: ["updateOldDeviceTakeback"],
    setup(e, {
      emit: t
    }) {
      const n = e,
        r = t,
        s = ce(!1),
        o = () => {
          r("updateOldDeviceTakeback", !s.value)
        };
      return ao(() => {
        s.value = n.product.oldDeviceTakebackChecked
      }), (i, a) => (B(), ue("div", w$, [Te(RE, {
        id: `additionalServiceCheckbox_${n.product.erpNumber}`,
        modelValue: s.value,
        "onUpdate:modelValue": a[0] || (a[0] = c => s.value = c),
        name: `additionalServiceCheckbox_${n.product.erpNumber}`,
        label: n.headline,
        onInput: o
      }, null, 8, ["id", "modelValue", "name", "label"]), Te(PE, {
        title: n.headline,
        heading: n.title,
        content: n.toolTipText,
        icon: "information-circle"
      }, null, 8, ["title", "heading", "content"])]))
    }
  }),
  C$ = je(P$, [
    ["__scopeId", "data-v-123f2834"]
  ]);

function L$(e, t) {
  return PI(e, t)
}

function D$(e) {
  return e = e?.map(t => pa(t)) ?? [], e.indexOf("HOME_DELIVERY") !== -1 ? !1 : e.indexOf("PARCEL_LOCKER") !== -1 || e.indexOf("PARCEL_SHOP") !== -1
}

function k$(e, t) {
  return ["PARCEL_SHOP", "PARCEL_LOCKER"].includes(e.addressType) && e?.carrierServiceCode != "" && D$(t) && t?.includes(e.addressType)
}

function $a() {
  const {
    configs: e
  } = Ye(), t = at(), n = yd(), r = Ec(), s = yc(), o = wi(), i = Gv(), a = () => t.cart, c = () => n.selected, l = () => n.allowed?.join(",") ?? "", u = () => {
      try {
        return r.deliveryAddress ? k$(r.deliveryAddress, s.carrierOptions) ? "post pick up station" : L$(r.deliveryAddress?.address, o.invoiceAddress?.address) ? "identical delivery address" : "deviating shipping address" : void 0
      } catch {
        return
      }
    }, d = V => V.map(({
      discountItem: oe,
      value: Ae
    }) => `${oe?.promotionText??""};${oe?.code??""};${Ae}`)
    .join("|"), g = V => {
      let oe = 0;
      for (const Ae of V ?? [])
        for (const Ne of Ae?.additionalServices ?? []) !Ne?.selected || !Ne?.price || (oe += Ne.price);
      return oe
    }, p = {
      meta: {
        country: e.value.country,
        language: e.value.language,
        env: e.value.env,
        appContext: Ds(),
        applicationID: "shop",
        moduleID: "checkout",
        currency: e.value.currency,
        pageCategory: "cart"
      },
      logger: rn
    }, m = new BP(p), E = V => {
      const oe = a(),
        Ae = oe?.discountItems ?? [];
      let Ne = 0;
      for (const W of oe?.cartItems ?? []) Ne += (W?.aov ?? W?.unitPrice) * W.quantity;
      const Le = {
        paymentMethodsAvailable: l(),
        basketValueNet: oe?.tax ? oe?.cartAmountBeforeCoupon - oe?.tax : void 0,
        basketValueGross: oe?.cartAmountBeforeCoupon,
        basketValueTax: oe?.tax ? oe?.tax : void 0,
        additionalShippingCost: oe?.shippingCostAdditional,
        additionalServiceCost: g(oe?.cartItems),
        voucherCode: Ae.length > 0 ? d(Ae.map(W => ({
          discountItem: W,
          value: W?.discount
        }))) : void 0,
        shippingCost: oe?.shippingCostStandardAfterCoupon,
        additionalServices: void 0,
        transactionID: void 0,
        cartId: oe?.id,
        adressType: u(),
        paymentMethod: c(),
        basketValueAOV: parseFloat(Ne.toFixed(2)),
        paymentFees: oe?.paymentFeeCalculated,
        deliveryOptionsAvailable: s?.addressTypes?.join(","),
        deliveryOptionsSelected: i.selectedAddressType ?? r?.deliveryAddress?.addressType,
        zoneSurcharge: oe?.zoneSurcharge
      };
      let He = V?.listItems ?? oe?.cartItems ?? [];
      return V?.includeErpNumbers?.length > 0 && (He = He.filter(W => V?.includeErpNumbers?.includes(W.erpNumber))), {
        ecommerce: Le,
        products: {
          list: He.map(W => {
            const he = oe?.discountItems?.filter(te => {
                const ie = te?.items?.find(se => se?.erpNumber === W?.erpNumber);
                return !(!ie || ie.totalDiscount <= 0)
              }),
              pe = d(he.map(te => ({
                discountItem: te,
                value: te?.items?.find(ie => ie?.erpNumber === W?.erpNumber)
                  ?.totalDiscount ?? 0
              }))),
              ye = W?.productId && W?.productVariantId && W.productId !== W.productVariantId ? "v_pdp" : "p_pdp",
              Re = W?.categories?.[0]?.superCategories?.filter(te => te?.name)
              ?.map(te => te?.name ?? "")
              ?.reverse(),
              w = `${Re?.join("/")}${Re&&Re.length>0?"/":""}${W?.categories?.[0]?.name}`,
              C = W?.categories?.[0]?.superCategories?.filter(te => te?.code)
              ?.map(te => te?.code ?? "")
              ?.reverse(),
              U = `${C?.join("/")}${C&&C.length>0?"/":""}${W?.categories?.[0]?.code}`;
            return {
              brand: W?.brand,
              type: ye,
              variantId: W?.productVariantId ? String(W?.productVariantId) : void 0,
              variantGroupId: W?.variantGroupId ? String(W?.variantGroupId) : void 0,
              sapId: String(W?.productId),
              Id: String(W?.productId),
              parentId: String(W?.productId),
              name: W?.name,
              categoryPrimary: w,
              categoryPrimaryPath: U,
              wonCategoryPrimary: W?.wonCategoryPrimary,
              wonCategoryPrimaryPath: W?.wonCategoryPrimaryPath,
              categorySecondary: void 0,
              categoryTree: void 0,
              campaignTree: void 0,
              price: W?.unitPrice,
              currency: W?.currency,
              netPrice: void 0,
              grossPrice: void 0,
              quantity: W?.quantity,
              availability: "available",
              tradeType: void 0,
              variantAttributes: void 0,
              forwardingSurcharge: void 0,
              environmentTax: W?.ecoTaxAmount,
              productDeliveryTime: W?.expectedDeliveryDate ? String(W?.expectedDeliveryDate) : void 0,
              recommendationPosition: void 0,
              status: void 0,
              statusRecommandation: void 0,
              ratingAverage: void 0,
              aov: W?.aov,
              ranking: W?.ranking,
              additionalShippingCost: W?.shippingCostAbsolute || W?.shippingCostAdditive || 0,
              additionalServiceCost: g([W]),
              additionalShippingCostType: W?.shippingCostAbsolute ? "Absolute" : W?.shippingCostAdditive ? "Additive" : void 0,
              voucherCode: pe
            }
          })
        }
      }
    };
  return {
    legalText: V => {
      m.trackingProviderGoogleAnalytics.legalTextClick(V.textLabel), m.trackingProviderUnifiedTracking.emit({
        eventInfo: {
          eventInteractionType: "load",
          eventAction: "Cart_Button_Click"
        },
        content: {
          contentID: "legal_text"
        }
      }, E(), m.trackingProviderUnifiedTracking.LinkClickTemplate("Cart_Button_Click", V.page))
    },
    ratingsOptIn: V => {
      m.trackingProviderGoogleAnalytics.ratingsOptIn(V.eventName, V.eventValue)
    },
    customDimensionUserType: () => {
      m.trackingProviderGoogleAnalytics.customDimensionUserType()
    },
    registration: V => {
      m.trackingProviderGoogleAnalytics.subsequentRegistrationClick(), m.trackingProviderUnifiedTracking.emit({
        eventInfo: {
          eventInteractionType: "register",
          eventAction: "Cart_Button_Click"
        },
        content: {
          contentID: "registration",
          contentLabel: "success_page"
        }
      }, E(), m.trackingProviderUnifiedTracking.ButtonClickTemplate("Cart_Button_Click", V.page))
    },
    login: V => {
      m.trackingProviderGoogleAnalytics.checkoutLogin(V.loginMethod);
      let oe = "";
      switch (V.loginMethod) {
        case aa.REGISTER:
          oe = "account_register";
          break;
        case aa.GUEST_ORDER:
          oe = "account_guest";
          break;
        case aa.LOGIN:
          oe = "account_login";
          break
      }
      m.trackingProviderUnifiedTracking.emit({
        eventInfo: {
          eventInteractionType: "login_loginpage",
          eventAction: "Cart_Button_Click"
        },
        process: {
          stepName: oe
        }
      }, E(), m.trackingProviderUnifiedTracking.ButtonClickTemplate("Cart_Button_Click", V.page))
    },
    startCheckout: V => {
      m.trackingProviderGoogleAnalytics.startCheckout(V.buttonText), m.trackingProviderUnifiedTracking.emit({
        eventInfo: {
          eventInteractionType: "start_checkout",
          eventAction: "Cart_Button_Click"
        }
      }, E(), m.trackingProviderUnifiedTracking.ButtonClickTemplate("Cart_Button_Click", V.page))
    },
    basketRemoveItem: V => {
      m.trackingProviderGoogleAnalytics.basketRemoveItem(V.cartItem), m.trackingProviderUnifiedTracking.emit({
        eventInfo: {
          eventAction: "Cart_Button_Click",
          eventInteractionType: "remove_from_cart"
        },
        content: {
          contentID: "remove_from_cart",
          contentLabel: "cart"
        }
      }, E({
        listItems: [ys(V.cartItem, {
          quantity: V.quantityRemoved
        })]
      }), m.trackingProviderUnifiedTracking.ButtonClickTemplate("Cart_Button_Click", V.page))
    },
    basketAddItem: V => {
      m.trackingProviderGoogleAnalytics.basketAddItem(V.cartItem), m.trackingProviderUnifiedTracking.emit({
        eventInfo: {
          eventAction: "Cart_Button_Click",
          eventInteractionType: "add_to_cart"
        },
        content: {
          contentID: "add_to_cart",
          contentLabel: "cart"
        }
      }, E({
        listItems: [ys(V.cartItem, {
          quantity: V.quantityAdded
        })]
      }), m.trackingProviderUnifiedTracking.ButtonClickTemplate("Cart_Button_Click", V.page))
    },
    purchase: V => {
      m.trackingProviderGoogleAnalytics.purchase(V.orderNumber, a())
    },
    basketPageView: V => {
      m.trackingProviderGoogleAnalytics.basketPageView(a()), m.trackingProviderUnifiedTracking.emit({}, E(), m.trackingProviderUnifiedTracking.PageLoadTemplate("Cart_Pageload", V.page))
    },
    pageVisit: V => {
      m.trackingProviderGoogleAnalytics.pageVisit(V.page, a())
    },
    pageView: V => {
      m.trackingProviderGoogleAnalytics.pageView(V?.route), V.page && m.trackingProviderUnifiedTracking.emit({}, E(), m.trackingProviderUnifiedTracking.PageLoadTemplate("Cart_Pageload", V.page))
    },
    pageViewSuccess: V => {
      m.trackingProviderUnifiedTracking.emit({}, E(), m.trackingProviderUnifiedTracking.SuccessPageLoadTemplate("Cart_Success_Pageload", V.page, V.orderNumber))
    },
    proceedToPayment: V => {
      m.trackingProviderUnifiedTracking.emit({
        eventInfo: {
          eventInteractionType: "proceed_to_payment"
        }
      }, E(), m.trackingProviderUnifiedTracking.ButtonClickTemplate("Cart_Button_Click", V.page))
    },
    proceedToSummary: V => {
      m.trackingProviderUnifiedTracking.emit({
        eventInfo: {
          eventInteractionType: "proceed_to_summary"
        }
      }, E(), m.trackingProviderUnifiedTracking.ButtonClickTemplate("Cart_Button_Click", V.page))
    },
    backToAddress: V => {
      m.trackingProviderUnifiedTracking.emit({
        eventInfo: {
          eventInteractionType: "back_to_address"
        }
      }, E(), m.trackingProviderUnifiedTracking.ButtonClickTemplate("Cart_Button_Click", V.page))
    },
    proceedToConfirmation: V => {
      m.trackingProviderUnifiedTracking.emit({
        eventInfo: {
          eventInteractionType: "proceed_to_confirmation"
        }
      }, E(), m.trackingProviderUnifiedTracking.ButtonClickTemplate("Cart_Button_Click", V.page))
    },
    backToPayment: V => {
      m.trackingProviderUnifiedTracking.emit({
        eventInfo: {
          eventInteractionType: "back_to_payment"
        }
      }, E(), m.trackingProviderUnifiedTracking.ButtonClickTemplate("Cart_Button_Click", V.page))
    },
    productLink: V => {
      m.trackingProviderUnifiedTracking.emit({
        eventInfo: {
          eventAction: "Cart_Product_Click",
          eventInteractionType: "load"
        },
        content: {
          contentID: "cart_product",
          contentType: "thumbnail_product",
          contentLabel: `${ud(V.page)}_page`
        }
      }, E({
        includeErpNumbers: V.erpNumbers
      }), m.trackingProviderUnifiedTracking.ButtonClickTemplate("General_Product_Click", V.page))
    },
    checkoutOption: V => {
      m.trackingProviderGoogleAnalytics.checkoutOption(V.page, V.option)
    },
    errorMessageTracking: V => {
      const oe = m.trackingProviderUnifiedTracking.ErrorMessageTemplate({
        adressType: u(),
        translationKey: V.translationKey,
        errorMessage: V.errorMessage,
        errorHeader: V.errorHeader,
        cartId: a()
          ?.id,
        paymentMethod: c(),
        paymentMethodsAvailable: l()
      });
      m.trackingProviderUnifiedTracking.emit({
        process: {
          page: V.page
        }
      }, oe, E())
    }
  }
}
const x$ = Object.freeze(Object.defineProperty({
    __proto__: null,
    useTracking: $a
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  N$ = Ie({
    __name: "ScarcityHint",
    props: {
      appearance: {
        type: String,
        default: oE.Yellow
      },
      variant: {
        type: String,
        default: sE.Secondary
      },
      icon: {
        type: String,
        default: "exclamation-circle"
      }
    },
    setup(e) {
      const {
        t
      } = mt(), {
        configs: n
      } = Ye(), r = t("pages.cartView.itemList.item.scarcity.hint"), s = e, o = q(() => n.value.country === "SK");
      return (i, a) => (B(), be(F(wk), {
        "data-ee": "pca-article-low-stock",
        variant: s.variant,
        appearance: s.appearance,
        label: F(r),
        icon: s.icon,
        class: we({
          "scarcity-hint--long": o.value
        })
      }, null, 8, ["variant", "appearance", "label", "icon", "class"]))
    }
  }),
  cm = je(N$, [
    ["__scopeId", "data-v-27c53b5a"]
  ]),
  $$ = {
    class: "grid cart-item"
  },
  V$ = {
    key: 0,
    class: "scarcity-message__desktop"
  },
  M$ = {
    class: "product-info"
  },
  F$ = {
    key: 0,
    class: "scarcity-message_mobile"
  },
  B$ = {
    key: 0,
    class: "enddate"
  },
  U$ = {
    class: "remove-button remove-button__desktop"
  },
  j$ = {
    key: 3,
    class: "product-digital"
  },
  H$ = {
    class: "product-details__digital"
  },
  q$ = {
    class: "product-remove"
  },
  W$ = {
    key: 4,
    class: "product-old-equipment"
  },
  G$ = {
    class: "product-additional-services"
  },
  K$ = Ie({
    __name: "CartItem",
    props: {
      product: {}
    },
    emits: ["changeSideSheet"],
    setup(e, {
      emit: t
    }) {
      const n = N => ({
          basket: N.basket || "",
          medium: N.medium || "",
          small: N.small || "",
          thumb: N.thumb || ""
        }),
        {
          t: r
        } = mt(),
        s = at(),
        o = Yn(),
        {
          productLink: i,
          basketAddItem: a,
          basketRemoveItem: c
        } = $a(),
        {
          configs: l
        } = Ye(),
        u = ce(null),
        d = ce(!1),
        g = q(() => s.pageOrigin === _n.Cart),
        p = t,
        m = e,
        E = q(() => s.pageOrigin === _n.Cart),
        b = q(() => m.product.oldDeviceTakeback && cc()
          .currentStep !== Ze.CART),
        v = N => N?.filter(K => K.selected)
        .map(K => K.type),
        A = N => {
          if (N) return Qt(N)
            .format(l.value.dateFormat || "DD.MM.YYYY")
        },
        R = N => {
          if (N === 0) return pi.ADD;
          if (N > 1) return pi.REMOVE
        },
        O = q(() => s.pageOrigin === _n.Cart ? Ze.CART : Ze.SUMMARY),
        L = async (N, K) => {
          const ee = structuredClone(N.quantity),
            _e = N.quantitySelectionValues.sort((V, oe) => V - oe)[0];
          K < _e || K <= 0 ? (u.value = N, await D(u.value)) : await P({
            ...N,
            quantity: K
          });
          const Q = N;
          ee > K ? c({
            page: O.value,
            cartItem: Q,
            quantityRemoved: ee - K
          }) : a({
            page: O.value,
            cartItem: Q,
            quantityAdded: K - ee
          })
        }, P = async N => {
          const K = {
            cartId: dt(s.cart?.id),
            erpNumber: N.erpNumber,
            quantity: N.quantity,
            additionalServices: v(N.additionalServices),
            customerNumber: s.cart?.customerNumber
          };
          d.value = !0, await s.updateCartItem(K)
        }, D = async N => {
          await s.removeCartItem(N.erpNumber);
          const ee = {
            message: r("pages.cartView.itemList.item.remove.message", {
              productName: N.name
            }),
            level: vt.SUCCESS,
            location: xt.TOAST,
            origin: pr.CUSTOM,
            isClosable: !0,
            buttonText: r("pages.cartView.itemList.item.undo"),
            buttonCallback: async () => {
              const _e = s.lastRemovedItemArr.findIndex(V => V.erpNumber === N.erpNumber),
                Q = s.lastRemovedItemArr[_e];
              await J(Q), $a()
                .basketAddItem({
                  page: O.value,
                  cartItem: Q,
                  quantityAdded: Q.quantity
                }), s.lastRemovedItemArr.splice(_e, 1)
            }
          };
          o.addAppMessage(ee, "standard")
        }, J = async N => {
          if (!N) return;
          const K = {
            erpQuantityDTOs: [{
              erpNumber: N.erpNumber,
              quantity: N.quantity,
              additionalServices: v(N.additionalServices)
            }]
          };
          await s.addCartItem(K)
        }, k = async (N, K) => {
          await s.updateCartItem({
            additionalServices: K,
            cartId: dt(s.cart?.id),
            erpNumber: N.erpNumber,
            quantity: N.quantity
          })
        }, Y = async (N, K) => {
          await s.updateOldDeviceTakeback(N.erpNumber, K)
        }, H = N => {
          g.value && i({
            page: Ze.CART,
            erpNumbers: [N.erpNumber]
          })
        }, G = async (N, K) => {
          await s.fetchDigitalGeneralTerms(N), p("changeSideSheet", `${r("pages.cartView.itemList.item.digital.disclaimer.digital.sideSheet.tocTitle")} - ${K}`)
        }, me = async (N, K) => {
          await s.fetchDigitalRedemptionConditions(N), p("changeSideSheet", `${r("pages.cartView.itemList.item.digital.disclaimer.digital.sideSheet.redeemTitle")} - ${K}`)
        }, de = q(() => [_n.Checkout, _n.Success].includes(s.pageOrigin)), X = q(() => m.product.scarcityBelowThreshold);
      return (N, K) => (B(), ue("div", $$, [X.value ? (B(), ue("div", V$, [Te(cm)])) : ge("", !0), fe("div", {
        class: we(["product-image", {
          "product-image--success": de.value
        }])
      }, [(B(), be(zr(g.value ? "a" : "div"), {
        href: g.value ? e.product?.canonicalUrl : void 0,
        target: g.value ? "_blank" : void 0,
        "aria-hidden": g.value ? !0 : void 0,
        tabindex: g.value ? -1 : void 0,
        class: we({
          "base-info": !0,
          "base-info--link": g.value
        }),
        onClick: K[0] || (K[0] = ee => H(e.product))
      }, {
        default: Be(() => [Te(VN, {
          alt: e.product.name,
          sources: n(e.product.thumbnailImageMap),
          class: "picture"
        }, null, 8, ["alt", "sources"])]),
        _: 1
      }, 8, ["href", "target", "aria-hidden", "tabindex", "class"]))], 2), fe("div", M$, [(B(), be(zr(g.value ? "a" : "div"), {
        href: g.value ? e.product?.canonicalUrl : void 0,
        target: g.value ? "_blank" : void 0,
        class: we({
          "base-info": !0,
          "base-info--link": g.value
        }),
        onClick: K[1] || (K[1] = ee => H(e.product))
      }, {
        default: Be(() => [Te(m$, {
          product: e.product,
          "label-sheet": F(r)("pages.cartView.itemList.energyLabels.ficheText"),
          class: "product-details",
          "is-order-already-finished": !1
        }, {
          default: Be(() => [X.value ? (B(), ue("div", F$, [Te(cm)])) : ge("", !0)]),
          _: 1
        }, 8, ["product", "label-sheet"])]),
        _: 1
      }, 8, ["href", "target", "class"]))]), e.product.quantity > 0 ? (B(), be(A$, {
        key: 1,
        class: we([{
          "counter-item__no__digital": !e.product.digital
        }, "product-counter"]),
        quantity: e.product?.quantity,
        "quantity-selection-values": e.product?.quantitySelectionValues,
        "minimum-label": F(r)("pages.cartView.itemList.item.counter-item.minimum"),
        onUpdateItemQuantity: K[2] || (K[2] = ee => L(e.product, ee))
      }, null, 8, ["class", "quantity", "quantity-selection-values", "minimum-label"])) : ge("", !0), fe("div", {
        class: we(["product-price", {
          "product-price__no__digital": !e.product.digital
        }])
      }, [Te(zN, {
        product: e.product
      }, null, 8, ["product"]), e.product?.endDate ? (B(), ue("div", B$, Ce(F(r)("pages.cartView.itemList.item.endDate", {
        endDate: A(e.product?.endDate)
      })), 1)) : ge("", !0), fe("div", U$, [Te(im, {
        "action-type": R(e.product.quantity),
        quantity: e.product.quantity,
        "quantity-values": e.product.quantitySelectionValues,
        "product-container-id": `product-details-${e.product.erpNumber}`,
        onUpdateItemQuantity: K[3] || (K[3] = ee => L(e.product, ee))
      }, null, 8, ["action-type", "quantity", "quantity-values", "product-container-id"])])], 2), K[4] || (Dn(-1, !0), (K[4] = E.value ? (B(), be(R$, {
          key: 2,
          class: "product-coupon",
          "erp-number": e.product.erpNumber,
          categoryIds: e.product.categoryIds
        }, null, 8, ["erp-number", "categoryIds"])) : ge("", !0))
        .cacheIndex = 4, Dn(1), K[4]), e.product.digital ? (B(), ue("div", j$, [fe("span", H$, [Vt(Ce(F(r)("pages.cartView.itemList.item.digital.disclaimer.digital.before")) + " ", 1), Te(gu, {
        class: "button-as-link",
        "data-ee": "cart-item-toc-link",
        onClick: K[5] || (K[5] = Os(ee => G(e.product.brandCode, e.product.brand), ["prevent"]))
      }, {
        default: Be(() => [Vt(Ce(F(r)("pages.cartView.itemList.item.digital.disclaimer.digital.tocLinkText")), 1)]),
        _: 1
      }), Vt(" " + Ce(F(r)("pages.cartView.itemList.item.digital.disclaimer.digital.inBetween")) + " ", 1), Te(gu, {
        class: "button-as-link",
        "data-ee": "cart-item-redeem-link",
        onClick: K[6] || (K[6] = Os(ee => me(e.product.brandCode, e.product.brand), ["prevent"]))
      }, {
        default: Be(() => [Vt(Ce(F(r)("pages.cartView.itemList.item.digital.disclaimer.digital.redeemLinkText")), 1)]),
        _: 1
      }), Vt(" " + Ce(F(r)("pages.cartView.itemList.item.digital.disclaimer.agb", {
        brandName: e.product.brand
      })), 1)])])) : ge("", !0), fe("div", q$, [Te(im, {
        productContainerId: `product-details-${e.product.erpNumber}`,
        "action-type": R(e.product.quantity),
        quantity: e.product.quantity,
        "quantity-values": e.product.quantitySelectionValues,
        onUpdateItemQuantity: K[7] || (K[7] = ee => L(e.product, ee))
      }, null, 8, ["productContainerId", "action-type", "quantity", "quantity-values"])]), b.value ? (B(), ue("div", W$, [Te(C$, {
        class: "product-old-equipment",
        product: e.product,
        title: e.product.name,
        headline: F(r)("pages.cartView.itemList.item.oldEquipment"),
        "tool-tip-text": F(r)("pages.cartView.itemList.item.oldEquipment.toolTip"),
        onUpdateOldDeviceTakeback: K[8] || (K[8] = ee => Y(e.product, ee))
      }, null, 8, ["product", "title", "headline", "tool-tip-text"])])) : ge("", !0), fe("div", G$, [Te(RN, {
        class: "product-additional-services",
        product: e.product,
        "free-text": F(r)("pages.cartView.itemList.item.services.free"),
        "services-text": F(r)("pages.cartView.itemList.additionalServices"),
        onUpdateAdditionalServices: K[9] || (K[9] = ee => k(e.product, ee))
      }, null, 8, ["product", "free-text", "services-text"])])]))
    }
  }),
  Y$ = je(K$, [
    ["__scopeId", "data-v-da4e2d16"]
  ]),
  z$ = {
    class: "cart-item-hint__icon-wrapper"
  },
  X$ = Ie({
    __name: "CartItemHint",
    props: {
      icon: {},
      iconFill: {},
      iconBgColor: {},
      fullWidth: {
        type: Boolean
      },
      bgColor: {},
      textColor: {}
    },
    setup(e) {
      const t = e,
        n = q(() => {
          const r = {};
          return t.bgColor && (r["--hint-bg-color"] = t.bgColor), t.iconFill && (r["--hint-icon-fill"] = t.iconFill), t.iconBgColor && (r["--hint-icon-bgColor"] = t.iconBgColor), t.textColor && (r["--hint-text-color"] = t.textColor), r
        });
      return (r, s) => (B(), ue("div", {
        class: we(["cart-item-hint", {
          "full-width": t.fullWidth ?? !1
        }]),
        style: mi(n.value)
      }, [fe("div", z$, [Te(F(xn), {
        class: "cart-item-hint__icon",
        name: t.icon
      }, null, 8, ["name"])]), et(r.$slots, "default", {}, void 0, !0)], 6))
    }
  }),
  J$ = je(X$, [
    ["__scopeId", "data-v-4ccb2f23"]
  ]),
  Q$ = "/otc/images/icons/postman.svg",
  Z$ = {
    class: "icon-wrapper"
  },
  eV = {
    key: 1,
    alt: "delivery",
    class: "icon",
    src: Q$
  },
  tV = {
    class: "text--highlighted"
  },
  nV = {
    class: "text--highlighted"
  },
  rV = {
    key: 1,
    class: "text"
  },
  sV = Ie({
    __name: "DeliveryTime",
    props: {
      cartItem: {
        type: Object,
        required: !0
      },
      fullWidth: {
        type: Boolean,
        required: !1,
        default: !1
      }
    },
    setup(e) {
      const {
        configs: t
      } = Ye(), n = e, r = q(() => n.cartItem?.digital ? "envelope-close" : "postman"), s = q(() => !n.cartItem?.digital && n.cartItem?.expectedDeliveryDate && n.cartItem?.expectedDeliveryWeekday), o = q(() => Qt(String(n.cartItem?.expectedDeliveryDate))
        .format(t.value.dateFormat || "DD.MM.YYYY")), i = q(() => n.cartItem?.expectedDeliveryWeekday), a = q(() => n.cartItem?.deliveryTime ?? "-");
      return (c, l) => {
        const u = Ja("i18n-t"),
          d = $r("secure-html");
        return B(), ue("div", {
          class: we(["delivery-time", {
            "full-width": e.fullWidth
          }]),
          "data-ee": "pca-article-estimated-delivery"
        }, [fe("div", Z$, [r.value !== "postman" ? (B(), be(F(xn), {
          key: 0,
          class: "icon",
          name: r.value
        }, null, 8, ["name"])) : (B(), ue("img", eV))]), s.value ? (B(), be(u, {
          key: 0,
          tag: "div",
          class: "text",
          keypath: "pages.cartView.itemList.item.expectedDeliveryTime"
        }, {
          expectedDeliveryWeekday: Be(() => [fe("span", tV, Ce(i.value), 1)]),
          expectedDeliveryDate: Be(() => [fe("span", nV, Ce(o.value), 1)]),
          _: 1
        })) : Ft((B(), ue("div", rV, null, 512)), [
          [d, a.value]
        ])], 2)
      }
    }
  }),
  oV = je(sV, [
    ["__scopeId", "data-v-8f06c2c1"]
  ]),
  iV = "7071",
  uF = "9001",
  aV = {
    class: "the-delivery-time-heading"
  },
  cV = {
    class: "text"
  },
  lV = Ie({
    __name: "TheDeliveryTimeHeading",
    props: {
      cartItem: {
        type: Object,
        required: !0
      },
      dividerGap: {
        type: String,
        required: !0,
        default: "none"
      }
    },
    setup(e) {
      const {
        t
      } = mt(), n = e, r = q(() => n.cartItem.categoryId == iV && n.cartItem.digital === !0);
      return (s, o) => {
        const i = $r("secure-html");
        return B(), ue("div", aV, [Te(F(fu), {
          class: we(["divider", n.dividerGap])
        }, null, 8, ["class"]), r.value ? ge("", !0) : (B(), be(oV, {
          key: 0,
          class: "badge",
          "cart-item": n.cartItem,
          "full-width": ""
        }, null, 8, ["cart-item"])), r.value ? (B(), be(J$, {
          key: 1,
          icon: "file",
          class: "badge",
          "full-width": ""
        }, {
          default: Be(() => [fe("div", null, [Ft(fe("span", cV, null, 512), [
            [i, F(t)("pages.cartView.itemList.item.cartItemHint.digitalGiftCard")]
          ])])]),
          _: 1
        })) : ge("", !0), Te(F(fu), {
          class: we(["divider", n.dividerGap])
        }, null, 8, ["class"])])
      }
    }
  }),
  uV = je(lV, [
    ["__scopeId", "data-v-ca540c87"]
  ]),
  dV = {
    class: "cart-item-list"
  },
  fV = {
    class: "cart-item-list__items"
  },
  pV = Ie({
    __name: "CartItemList",
    setup(e) {
      const t = ce(""),
        n = ce(!1),
        r = at(),
        {
          t: s
        } = mt(),
        o = i => {
          t.value = i, n.value = !n.value
        };
      return (i, a) => {
        const c = $r("secure-html");
        return B(), ue("div", dV, [fe("ul", fV, [(B(!0), ue(Xe, null, Gn(F(r)
            .getCartItemsSortedByEDD, (l, u) => (B(), ue("li", {
              key: u
            }, [l?.length && u ? (B(), be(uV, {
              key: 0,
              "cart-item": l[0],
              "divider-gap": F(r)
                .pageOrigin === F(_n)
                .Cart ? "none" : "small"
            }, null, 8, ["cart-item", "divider-gap"])) : ge("", !0), fe("ul", null, [(B(!0), ue(Xe, null, Gn(l, d => (B(), ue("li", {
              key: d.productId,
              class: "product-list-item"
            }, [Te(Y$, {
              product: d,
              onChangeSideSheet: o
            }, null, 8, ["product"])]))), 128))])]))), 128))]), F(r)
          .digitalPopupContent ? (B(), be(F(Ac), {
            key: 0,
            "is-open": n.value,
            "onUpdate:isOpen": a[0] || (a[0] = l => n.value = l),
            "z-index": 4e3,
            title: t.value,
            "accessible-close-text": F(s)("global.close"),
            "is-callout-open": !1,
            "mask-closable": !0,
            "bottom-sheet-props": {
              isInvisibleWhenClosed: !0
            }
          }, {
            default: Be(() => [Ft(fe("p", null, null, 512), [
              [c, F(r)
                .digitalPopupContent
              ]
            ])]),
            _: 1
          }, 8, ["is-open", "title", "accessible-close-text"])) : ge("", !0)
        ])
      }
    }
  }),
  _V = je(pV, [
    ["__scopeId", "data-v-a4400a81"]
  ]),
  mV = {
    class: "base-legal-text-section"
  },
  hV = Ie({
    __name: "BaseLegalText",
    props: {
      disclaimer: {}
    },
    setup(e) {
      const t = e;
      return (n, r) => {
        const s = $r("secure-html");
        return Ft((B(), ue("div", mV, null, 512)), [
          [s, t.disclaimer]
        ])
      }
    }
  }),
  gV = je(hV, [
    ["__scopeId", "data-v-98ba52f3"]
  ]),
  vV = Ie({
    __name: "CartCheckoutButton",
    props: {
      isLoading: {
        type: Boolean
      },
      isDisabled: {
        type: Boolean
      },
      labelButton: {},
      level: {},
      submit: {
        type: Boolean
      },
      abTestTag: {},
      dataEe: {}
    },
    emits: ["submit"],
    setup(e, {
      emit: t
    }) {
      const n = e,
        r = t,
        s = () => {
          const o = n.submit ? "submit" : "click";
          r("submit", o)
        };
      return (o, i) => Ft((B(), be(F(Rs), {
        class: "cart__button__checkout",
        as: "button",
        "data-testid": "cart-button-checkout",
        "is-loading": n.isLoading,
        "is-disabled": n.isDisabled,
        label: n.labelButton,
        level: n.level,
        "data-ee": n.dataEe,
        onClick: s
      }, null, 8, ["is-loading", "is-disabled", "label", "level", "data-ee"])), [
        [F($1), n.abTestTag]
      ])
    }
  }),
  EV = je(vV, [
    ["__scopeId", "data-v-0a0b9638"]
  ]),
  yV = {
    class: "cart-submit-section"
  },
  bV = Ie({
    __name: "CartSubmitSection",
    props: {
      isLoading: {
        type: Boolean
      },
      isButtonDisabled: {
        type: Boolean
      },
      abTestTag: {}
    },
    emits: ["submit"],
    setup(e, {
      emit: t
    }) {
      const {
        t: n
      } = mt(), r = e, s = t, o = q(() => n("submit.section.disclaimer")
        .trim());
      return (i, a) => (B(), ue("section", yV, [Te(gV, {
        class: "cart-submit-section__legal-text",
        disclaimer: o.value
      }, null, 8, ["disclaimer"]), Te(EV, {
        "is-loading": r.isLoading,
        "is-disabled": r.isButtonDisabled,
        "label-button": F(n)("submit.section.button.label"),
        level: F(Qv)
          .Primary,
        submit: !0,
        "ab-test-tag": r.abTestTag,
        "data-ee": "pca-cart-submit",
        onSubmit: a[0] || (a[0] = c => s("submit"))
      }, null, 8, ["is-loading", "is-disabled", "label-button", "level", "ab-test-tag"])]))
    }
  }),
  AV = je(bV, [
    ["__scopeId", "data-v-07f1624a"]
  ]),
  TV = {
    key: 0,
    class: "lidl-plus-voucher"
  },
  OV = ["data-zone", "data-country", "data-lang"],
  IV = Ie({
    __name: "LidlPlusVoucher",
    setup(e) {
      const {
        configs: t
      } = Ye(), {
        isLidlPlusCouponEnabled: n,
        dataZone: r
      } = LE();
      return (s, o) => F(n) ? (B(), ue("div", TV, [fe("voucher-component", {
        "data-zone": F(r),
        "data-country": F(t)
          .country,
        "data-lang": F(t)
          .language,
        "data-section": "coupon_web_cart"
      }, null, 8, OV)])) : ge("", !0)
    }
  }),
  SV = ["id", "title", "src"],
  RV = Ie({
    __name: "OneClickButton",
    props: {
      paymentMode: {
        type: String,
        required: !0
      },
      amount: {
        type: Number,
        required: !0
      },
      companyAccount: {
        type: String,
        required: !0
      },
      currency: {
        type: String,
        required: !0
      },
      salesChannel: {
        type: String,
        required: !0
      },
      cartId: {
        type: String,
        required: !0
      }
    },
    setup(e) {
      const {
        configs: t
      } = Ye(), n = e;
      We(() => n.amount, (s, o) => {
        s !== o && un()
          ?.proxy?.$forceUpdate()
      });
      const r = q(() => {
        const s = new URL(`/payments/express/${n.paymentMode.toLowerCase()}`, window.location.origin);
        return s.search = new URLSearchParams({
            amount: n.amount?.toString(),
            companyAccount: n.companyAccount?.toString(),
            currency: n.currency?.toString(),
            locale: t.value.locale?.toString(),
            salesChannel: n.salesChannel?.toString(),
            cartId: n.cartId?.toString()
          })
          .toString(), s.toString()
      });
      return (s, o) => (B(), ue("iframe", {
        id: `checkout-one-click-button-${n.paymentMode}`,
        class: "one-click-button",
        allow: "payment",
        scrolling: "no",
        title: n.paymentMode,
        src: r.value,
        "data-ee": "pca-one-click-button"
      }, null, 8, SV))
    }
  }),
  wV = je(RV, [
    ["__scopeId", "data-v-a95b4114"]
  ]),
  PV = {},
  CV = {
    class: "section-heading"
  },
  LV = {
    class: "section-heading__title"
  };

function DV(e, t) {
  return B(), ue("div", CV, [fe("h2", LV, [et(e.$slots, "default", {}, void 0, !0)])])
}
const kV = je(PV, [
  ["render", DV],
  ["__scopeId", "data-v-1b0383c0"]
]);

function xV(e) {
  switch (e) {
    case "9018":
      return "gpay";
    case "9019":
      return "apay";
    case "9003":
      return "paypal";
    default:
      return ""
  }
}

function gl(e) {
  switch (e) {
    case "gpay":
      return "9018";
    case "apay":
      return "9019";
    case "paypal":
      return "9003";
    default:
      return ""
  }
}

function NV(e, t) {
  switch (e) {
    case "9018":
      return t("oneClickCheckoutEnabledGooglePay");
    case "9019":
      return t("oneClickCheckoutEnabledApplePay");
    case "9003":
      return t("oneClickCheckoutEnabledPayPal");
    default:
      return !1
  }
}
const $V = {
    class: "one-click"
  },
  VV = {
    class: "one-click__buttons"
  },
  MV = Ie({
    __name: "OneClick",
    props: {
      cart: {
        type: Object,
        required: !0
      },
      allowedPaymentMethods: {
        type: Object,
        required: !0
      }
    },
    emits: ["success", "error", "cancel", "panic"],
    setup(e, {
      emit: t
    }) {
      const {
        configs: n
      } = Ye(), {
        isFeatureEnabled: r
      } = jt(), s = t, o = e, i = q(() => {
        const d = [];
        for (const g of o.allowedPaymentMethods ?? []) NV(g, r) && d.push(g);
        return d
      }), a = q(() => `LidlOnlineShop_${n.value.country.toUpperCase()}`), c = q(() => ({
        cartId: o.cart.id,
        amount: o.cart.cartAmountAfterCoupon,
        companyAccount: a.value,
        currency: n.value.currency,
        salesChannel: ID.WEB
      })), l = d => xV(d), u = d => {
        let g = new URL("/", window.location.origin)
          .toString();
        g.endsWith("/") && (g = g.slice(0, -1));
        const p = m => {
          const E = m;
          return !!E.data.paymentDetails || !!E.data.walletCancel || !!E.data.walletError
        };
        d.origin === g && p(d) && (d.data.paymentDetails ? s("success", d.data.paymentDetails) : d.data.walletError ? s("error", d.data.walletError) : d.data.walletCancel ? s("cancel", d.data.walletCancel) : s("panic", {
          paymentMode: d?.data?.paymentDetails?.paymentMode
        }))
      };
      return Rt(() => {
        window.addEventListener("message", u)
      }), Nr(() => {
        window.removeEventListener("message", u)
      }), (d, g) => (B(), ue("div", $V, [Te(kV, null, {
        default: Be(() => [Vt(Ce(d.$t("pages.cartView.expressCheckout.headline")), 1)]),
        _: 1
      }), fe("div", VV, [(B(!0), ue(Xe, null, Gn(i.value, p => (B(), be(wV, ln({
        key: p,
        "payment-mode": l(p)
      }, {
        ref_for: !0
      }, c.value), null, 16, ["payment-mode"]))), 128))])]))
    }
  }),
  FV = je(MV, [
    ["__scopeId", "data-v-19eae4f3"]
  ]),
  lm = Ie({
    __name: "PPAYAplazame",
    props: {
      showAplazame: {
        type: Boolean,
        default: !1
      }
    },
    setup(e) {
      const t = at(),
        n = e,
        r = ce(null),
        s = q(() => t?.cart?.finalCartValueWithoutPaymentFees ?? 0);
      Rt(() => {
        o(s.value)
      }), We(() => s.value, i => {
        o(i)
      });
      const o = i => {
        const a = r.value?.querySelector("ppay-aplazame-offer-widget");
        a && a.setAttribute("amount", i.toString())
      };
      return (i, a) => {
        const c = Ja("ppay-aplazame-offer-widget");
        return n.showAplazame ? (B(), ue("div", {
          key: 0,
          class: "ppay-aplazame",
          ref_key: "ppayAplazameRef",
          ref: r
        }, [a[0] || (Dn(-1, !0), (a[0] = Te(c))
          .cacheIndex = 0, Dn(1), a[0])], 512)) : ge("", !0)
      }
    }
  }),
  BV = {
    class: "aplazame-container"
  },
  UV = ["src"],
  um = "ppay-button-clicked",
  jV = Ie({
    __name: "PPAYAplazameSideSheet",
    setup(e) {
      const t = ce(!0),
        n = () => {
          t.value = !1
        },
        {
          configs: r
        } = Ye(),
        s = at(),
        o = q(() => {
          const c = new URL("/payments/installment/calculator", window.location.origin);
          return c.search = new URLSearchParams({
              locale: r.value.locale.substring(0, 5),
              amount: parseFloat(s.cart?.finalCartValueWithoutPaymentFees?.toString() ?? "0")
                .toString(),
              currency: r.value.currency.substring(0, 3)
            })
            .toString(), c.toString()
        }),
        i = ce(!1),
        a = () => {
          i.value = !0
        };
      return Rt(() => {
        document.addEventListener(um, a)
      }), co(() => {
        document.removeEventListener(um, a)
      }), (c, l) => (B(), be(F(Ac), {
        "is-open": i.value,
        "accessible-close-text": c.$t("global.close"),
        title: c.$t("payment.aplazame.header"),
        "bottom-sheet-props": {
          isInvisibleWhenClosed: !0
        },
        zIndex: 1004,
        "onUpdate:isOpen": l[0] || (l[0] = u => i.value = !i.value)
      }, {
        default: Be(() => [fe("div", BV, [fe("iframe", {
          id: "ppay-aplazame-calculator-id",
          class: "ppay-calculator",
          onLoad: n,
          src: o.value
        }, null, 40, UV), t.value ? (B(), be(hE, {
          key: 0,
          class: "loading-spinner-aplazame"
        })) : ge("", !0)])]),
        _: 1
      }, 8, ["is-open", "accessible-close-text", "title"]))
    }
  }),
  HV = je(jV, [
    ["__scopeId", "data-v-0c8d9ab2"]
  ]),
  qV = {
    class: "app-messages"
  },
  WV = Ie({
    __name: "TheAppMessages",
    props: {
      location: {
        type: String,
        default: xt.PAGE
      }
    },
    setup(e) {
      const {
        t
      } = mt(), {
        messages: n,
        deleteAppMessage: r,
        getAppMessageContent: s
      } = Yn(), o = e, i = q(() => n.value.filter(g => g.location === o.location || g?.location === void 0 && o.location === void 0)), a = g => {
        switch (g.level) {
          case vt.ERROR:
            return Ir.Danger;
          case vt.WARNING:
            return Ir.Warning;
          case vt.INFO:
            return Ir.Info;
          case vt.SUCCESS:
            return Ir.Success
        }
        return rn.error("AppMessages", "mapAppMessageLevel", "message.level has no matching type on ODS", g.level), Ir.Info
      }, c = g => {
        switch (g.level) {
          case vt.ERROR:
            return "exclamation-triangle";
          case vt.WARNING:
            return "exclamation-circle";
          case vt.INFO:
            return "information-circle";
          case vt.SUCCESS:
            return "hook-circle"
        }
        return rn.error("AppMessages", "mapAppMessageLevel", "message.level has no matching type on ODS", g.level), "information-circle"
      }, l = g => {
        r(g)
      }, u = g => {
        l(g)
      }, d = () => {};
      return (g, p) => (B(), ue("section", qV, [p[0] || (Dn(-1, !0), (p[0] = o.location === F(xt)
          .TOAST ? (B(), be(F(y1), {
            key: 0,
            "event-name": F(dd),
            "z-index": 9999
          }, null, 8, ["event-name"])) : (B(!0), ue(Xe, {
            key: 1
          }, Gn(i.value, m => (B(), be(F(Tk), {
            key: m?.message ?? m.messageTranslationKey,
            title: m?.headline,
            type: a(m),
            "accessible-title": m?.headline,
            "title-as": "h3",
            icon: c(m),
            closable: m.isClosable === !0,
            "accessible-close-text": F(t)("global.close"),
            onClose: E => l(m),
            onCancel: E => u(m),
            onConfirm: p[1] || (p[1] = E => d())
          }, {
            default: Be(() => [Vt(Ce(F(s)(m)), 1)]),
            _: 2
          }, 1032, ["title", "type", "accessible-title", "icon", "closable", "accessible-close-text", "onClose", "onCancel"]))), 128)))
        .cacheIndex = 0, Dn(1), p[0])]))
    }
  }),
  dm = je(WV, [
    ["__scopeId", "data-v-4efe5f4a"]
  ]),
  GV = {},
  KV = {
    class: "divider"
  };

function YV(e, t) {
  return B(), ue("div", KV)
}
const zV = je(GV, [
    ["render", YV],
    ["__scopeId", "data-v-836e38d2"]
  ]),
  XV = {
    class: "the-empty-cart-wrapper"
  },
  JV = {
    class: "the-empty-cart"
  },
  QV = {
    class: "main-content"
  },
  ZV = ["data-heading"],
  eM = Ie({
    __name: "TheEmptyCart",
    setup(e) {
      const t = ld(),
        n = q(() => iD()),
        r = () => {
          rD(t)
        };
      return (s, o) => (B(), ue("div", XV, [fe("div", JV, [fe("h1", null, Ce(s.$t("pages.cartView.emptyPage.title")), 1), fe("div", QV, [Te(F(Rs), {
        class: "the-empty-cart__primary-button",
        as: "a",
        href: "/",
        label: s.$t("pages.cartView.emptyPage.primaryButton"),
        level: "primary"
      }, null, 8, ["label"]), n.value ? ge("", !0) : (B(), ue(Xe, {
        key: 0
      }, [Te(zV), fe("h2", null, Ce(s.$t("pages.cartView.emptyPage.subtitle")), 1), Te(F(Rs), {
        class: "the-empty-cart__secondary-button",
        as: "button",
        label: s.$t("pages.cartView.emptyPage.secondaryButton"),
        level: "secondary",
        onClick: r
      }, null, 8, ["label"])], 64))])]), fe("div", {
        class: "recommendation",
        "data-recommendations": "",
        "data-heading": s.$t("pages.cartView.recommendations.title"),
        "data-type": "last_seen"
      }, null, 8, ZV)]))
    }
  }),
  tM = je(eM, [
    ["__scopeId", "data-v-c2b57a8b"]
  ]);
var Va = (e => (e.DEFAULT = "default", e.LARGE = "large", e))(Va || {});
const nM = ["value", "data-ee"],
  rM = Ie({
    __name: "BasePrice",
    props: {
      price: {
        type: Number,
        required: !0
      },
      isPricePlaceholder: {
        type: Boolean,
        default: !1
      },
      dataEe: {
        type: String,
        default: ""
      }
    },
    setup(e) {
      const {
        configs: t
      } = Ye(), {
        featureToggles: n
      } = jt(), r = e, s = q(() => r.isPricePlaceholder ? "-.--" : Bn(r.price, Cr(t.value, n.value))
        .toString("price"));
      return (o, i) => (B(), ue("data", {
        value: r.price,
        "data-ee": r.dataEe
      }, Ce(s.value), 9, nM))
    }
  }),
  sM = {
    key: 1,
    class: "base-price-info__discount base-price-info__price"
  },
  oM = {
    class: "base-price-info__additional"
  },
  iM = Ie({
    __name: "BasePriceInfo",
    props: {
      price: {
        type: Number,
        required: !0
      },
      isPricePlaceholder: {
        type: Boolean,
        default: !1
      },
      label: {
        type: String,
        required: !0
      },
      info: {
        type: String,
        default: ""
      },
      theme: {
        type: String,
        default: "default"
      },
      dataEe: {
        type: String,
        default: ""
      },
      isStandaloneDiscount: {
        type: Boolean,
        default: !1
      },
      hasStrikeThroughDiscount: {
        type: Boolean,
        default: !1
      },
      couponAmount: {
        type: Number,
        default: 0
      }
    },
    setup(e) {
      const {
        configs: t
      } = Ye(), {
        featureToggles: n
      } = jt(), r = e, s = q(() => Bn(r.price, Cr(t.value, n.value))
        .toString("price")), o = q(() => Bn(r.couponAmount, Cr(t.value, n.value))
        .toString("price"));
      return (i, a) => {
        const c = $r("secure-html");
        return B(), ue("div", {
          class: we(["base-price-info", {
            "base-price-info--large": r.theme === F(Va)
              .LARGE,
            "base-price-info--padding": r.isStandaloneDiscount
          }])
        }, [Ft((B(), ue("span", {
          class: we(["base-price-info__label", {
            "base-price-info--large": r.theme === F(Va)
              .LARGE
          }])
        }, [Vt(Ce(r.label), 1)], 2)), [
          [c, r.label]
        ]), et(i.$slots, "price-prefix", {
          class: "base-price-info__prefix"
        }, void 0, !0), !e.isStandaloneDiscount && !e.hasStrikeThroughDiscount ? (B(), be(rM, {
          key: 0,
          "data-ee": r.dataEe,
          class: "base-price-info__price",
          price: r.price,
          "is-price-placeholder": r.isPricePlaceholder
        }, null, 8, ["data-ee", "price", "is-price-placeholder"])) : e.isStandaloneDiscount ? (B(), ue("p", sM, Ce(s.value), 1)) : (B(), be(vu, {
          key: 2,
          price: r.price,
          "discount-type": "yellow",
          discount: o.value
        }, null, 8, ["price", "discount"])), fe("span", oM, Ce(r.info), 1)], 2)
      }
    }
  }),
  nr = je(iM, [
    ["__scopeId", "data-v-97035c7b"]
  ]),
  aM = {
    class: "delivery-costs__description"
  },
  cM = {
    class: "delivery-costs__list"
  },
  lM = Ie({
    __name: "DeliveryCosts",
    props: Qo({
      labelSuffix: {
        type: String,
        default: "",
        required: !1
      }
    }, {
      modelValue: {
        type: Boolean
      },
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(e) {
      const {
        t
      } = mt(), {
        configs: n
      } = Ye(), {
        featureToggles: r,
        isFeatureEnabled: s
      } = jt(), o = at(), i = e, a = ["HOME_DELIVERY", "PARCEL_SHOP", "PARCEL_LOCKER"];
      s("isLidlLockerFilteringEnabled") && a.push("PARCEL_LOCKER_LIDL", "PARCEL_LOCKER_LIDL_PLUS");
      const c = $u(e, "modelValue"),
        l = q(() => (o.availableShippingCosts ?? [])
          .filter(u => a.includes(u.deliveryType))
          .map(u => ({
            labelTranslationKey: `deliveryCosts.methods.${u.deliveryType.toUpperCase()}`,
            price: Bn(u.shippingCost, {
                ...Cr(n.value, r.value),
                isAsteriskShown: !1
              })
              .toString("price"),
            addressType: u.deliveryType
          })));
      return (u, d) => (B(), be(wE, {
        modelValue: c.value,
        "onUpdate:modelValue": d[0] || (d[0] = g => c.value = g),
        title: F(t)("deliveryCosts.label"),
        label: F(t)("deliveryCosts.label") + (i.labelSuffix ? ` ${i.labelSuffix}` : ""),
        onClose: d[1] || (d[1] = g => c.value = !1)
      }, {
        default: Be(() => [fe("p", aM, Ce(F(t)("deliveryCosts.description")), 1), fe("ul", cM, [(B(!0), ue(Xe, null, Gn(l.value, g => (B(), ue("li", {
          key: g.addressType
        }, [Vt(Ce(F(t)(g.labelTranslationKey)) + ": ", 1), fe("strong", null, Ce(g.price), 1)]))), 128))])]),
        _: 1
      }, 8, ["modelValue", "title", "label"]))
    }
  }),
  uM = je(lM, [
    ["__scopeId", "data-v-8221cc5f"]
  ]),
  dM = {
    class: "price-summary"
  },
  fM = {
    class: "price-summary__single-positions"
  },
  pM = {
    key: 0,
    class: "price-summary__single-positions"
  },
  _M = Ie({
    __name: "ThePriceSummary",
    props: {
      showTotalPrice: {
        type: Boolean,
        default: !0,
        required: !1
      },
      isShippingCostsLinkAvailable: {
        type: Boolean,
        default: !0,
        required: !1
      },
      location: {
        type: String,
        default: "top",
        required: !1
      }
    },
    setup(e) {
      const {
        t
      } = mt(), n = at(), r = jt(), s = e, o = q(() => !!n.cart?.discountItems.some(O => O?.couponType === "OMNICHANNEL" && O?.creditedShippingCosts > 0)), i = ce(!1), a = q(() => n.cart?.shippingCostStandardAfterCoupon <= 0 ? !1 : r.isFeatureEnabled("showPlaceholderForShippingCostOnCartPage") && n.pageOrigin === _n.Cart), c = q(() => n.cart?.shippingCostStandardBeforeCoupon ?? 0), l = q(() => n.cart?.cartItems?.reduce((O, L) => O + L.quantity, 0) ?? 0), u = q(() => n.cart?.discountItems ?? []), d = q(() => a.value ? n.cart?.finalCartValueWithoutPaymentAndStandardShippingFee ?? 0 : n.pageOrigin === _n.Cart ? n.cart?.finalCartValueWithoutPaymentFees ?? 0 : n.cart?.cartAmountAfterCoupon ?? 0), g = q(() => r.isFeatureEnabled("isShippingCostLinkEnabled")), p = O => (O?.percentageDiscount?.value ?? 0) > 0, m = O => O.couponType === "OMNICHANNEL" || !O.code ? O.promotionText : O.code, E = O => O.discount - O.creditedShippingCosts, b = O => {
        let L = m(O);
        L && (L = ` (${L})`);
        let P = "";
        return O.discountType === "COUPON" ? P = `${t("pricing.summary.coupon")}${L}` : O.discountType === "PROMOTION" && (P = `${t("pricing.summary.promotion")}${L}`), p(O) && (P = `${Math.trunc(O?.percentageDiscount?.value??0)}% ${P}`), n.isPartialReturnActive && O.couponType === "OMNICHANNEL" && O?.promotionReasonCode === 220 && (P = `${P}<sup>32</sup>`), P
      }, v = O => !O.isVisibleOnItem, A = q(() => n?.cart?.subTotalCartValueWithProductLevelCoupons), R = q(() => {
        const O = {
          CAN: "pricing.summary.finalPrice",
          DEFAULT: "pricing.summary.vat.include"
        };
        return O[n.cart?.zoneId] ?? O[Ut(cv)] ?? O.DEFAULT
      });
      return (O, L) => (B(), ue("section", dM, [fe("div", fM, [A.value ? (B(), be(nr, {
          key: 0,
          label: F(t)("pricing.summary.subtotal"),
          price: A.value,
          "data-ee": "pca-subtotal-price"
        }, null, 8, ["label", "price"])) : ge("", !0), Te(nr, {
          "has-strike-through-discount": o.value,
          "coupon-amount": 0,
          label: F(t)("pricing.summary.shipping")
            .toString(),
          price: c.value,
          "is-price-placeholder": a.value,
          "data-ee": "pca-delivery-charges"
        }, null, 8, ["has-strike-through-discount", "label", "price", "is-price-placeholder"]), g.value && s.isShippingCostsLinkAvailable ? (B(), be(gu, {
          key: 1,
          class: "price-summary__link",
          onClick: L[0] || (L[0] = Os(P => i.value = !0, ["prevent"]))
        }, {
          default: Be(() => [Vt(Ce(F(t)("pricing.summary.shipping.info-link")), 1)]),
          _: 1
        })) : ge("", !0), F(n)
        .cart?.shippingCostAdditional ? (B(), be(nr, {
          key: 2,
          label: F(t)("pricing.summary.shippingAdditional"),
          "data-ee": "pca-additional-shipping-costs",
          price: F(n)
            .cart?.shippingCostAdditional
        }, null, 8, ["label", "price"])) : ge("", !0), F(n)
        .cart?.additionalServicesAmount ? (B(), be(nr, {
          key: 3,
          label: F(t)("pricing.summary.additionalServices"),
          price: F(n)
            .cart?.additionalServicesAmount,
          "data-ee": "pca-additional-services-price"
        }, null, 8, ["label", "price"])) : ge("", !0), F(n)
        .cart?.paymentFeeCalculated ? (B(), be(nr, {
          key: 4,
          label: F(t)("pricing.summary.paymentFee"),
          price: F(n)
            .cart?.paymentFeeCalculated,
          "data-ee": "pca-payment-fee"
        }, null, 8, ["label", "price"])) : ge("", !0), F(n)
        .cart?.zoneSurcharge > 0 ? (B(), be(nr, {
          key: 5,
          label: F(t)("pricing.summary.zoneSurcharge"),
          "data-ee": "pca-additional-shipping-costs",
          price: F(n)
            .cart?.zoneSurcharge
        }, null, 8, ["label", "price"])) : ge("", !0), F(n)
        .cart?.giftCardDetails?.value ? (B(), be(nr, {
          key: 6,
          label: F(t)("pricing.summary.giftCard"),
          price: -F(n)
            .cart?.giftCardDetails?.value,
          "data-ee": "pca-gift-card-discount"
        }, null, 8, ["label", "price"])) : ge("", !0), (B(!0), ue(Xe, null, Gn(u.value, P => (B(), ue("div", {
          key: P.validationId
        }, [v(P) ? (B(), ue("div", pM, [E(P) > 0 ? (B(), be(nr, {
          key: 0,
          "is-standalone-discount": P.couponType === "OMNICHANNEL",
          "data-ee": "price-promotion",
          label: b(P),
          price: -E(P)
        }, null, 8, ["is-standalone-discount", "label", "price"])) : ge("", !0), P?.creditedShippingCosts > 0 && P.couponType !== "OMNICHANNEL" ? (B(), be(nr, {
          key: 1,
          "data-ee": "price-promotion",
          label: b(P),
          price: -P.creditedShippingCosts
        }, null, 8, ["label", "price"])) : ge("", !0)])) : ge("", !0)]))), 128))
      ]), e.showTotalPrice ? (B(), be(F(fu), {
        key: 0,
        class: "price-summary__divider"
      })) : ge("", !0), e.showTotalPrice ? (B(), be(nr, {
        key: 1,
        class: "summary-price",
        price: d.value,
        label: F(t)("pricing.summary.total", {
          articleCount: l.value
        }),
        info: F(t)(`${R.value}`),
        theme: F(Va)
          .LARGE,
        "data-ee": "pca-total-price"
      }, null, 8, ["price", "label", "info", "theme"])) : ge("", !0), Te(uM, {
        modelValue: i.value,
        "onUpdate:modelValue": L[1] || (L[1] = P => i.value = P),
        "label-suffix": s.location === "top" ? "1" : "2"
      }, null, 8, ["modelValue", "label-suffix"])]))
    }
  }),
  vl = je(_M, [
    ["__scopeId", "data-v-618b4f73"]
  ]),
  mM = (e = 768) => {
    const t = ce(window.innerWidth < e),
      n = Zs(() => {
        t.value = window.innerWidth < e
      }, 200);
    return Rt(() => {
      window.addEventListener("resize", n)
    }), Nr(() => {
      window.removeEventListener("resize", n)
    }), {
      isMobile: t
    }
  },
  hM = Nn("one-click-store", () => {
    const {
      configs: e
    } = Ye(), t = ce([]), n = () => t.value.length > 0, r = c => {
      if (!c?.allowedPaymentMethods) {
        t.value = [];
        return
      }
      t.value = c.allowedPaymentMethods
    }, s = () => {
      t.value = []
    };
    return {
      allowedPaymentMethods: t,
      isOneClickAvailable: n,
      setOneClick: r,
      clearOneClick: s,
      removeOneClickPaymentMethod: c => {
        t.value = t.value.filter(l => l !== c)
      },
      fetchOneClickData: async () => {
        s();
        try {
          const c = await mD.getCheckoutOneClick({
            country: e.value.country,
            language: e.value.language,
            cartId: dt(at()
              .cart?.id),
            zoneId: Nt()
          });
          r(c.data.payload)
        } catch {
          r(null)
        }
      },
      oneClickDataSubmit: async c => {
        await Bt.postCheckoutOneClick({
          country: e.value.country,
          language: e.value.language,
          cartId: dt(at()
            .cart?.id),
          sales_channel: xe.getSalesChannel() ?? Ln.WEB,
          zoneId: Nt()
        }, c)
      }
    }
  }),
  gM = {
    key: 0,
    class: "loading-spinner"
  },
  vM = {
    key: 1,
    class: "cart-view"
  },
  EM = {
    class: "cart-view__left"
  },
  yM = {
    class: "cart-view__title"
  },
  bM = {
    class: "title-headline"
  },
  AM = {
    class: "title-subheadline"
  },
  TM = {
    class: "cart-view__right"
  },
  OM = {
    class: "right-order-summary"
  },
  IM = Ie({
    __name: "cart-view",
    setup(e) {
      const {
        t
      } = mt(), {
        startCheckout: n,
        basketPageView: r
      } = $a(), {
        isMobile: s
      } = mM(1440), o = at(), i = hM(), a = Yn(), c = ce(0), l = ce(!1), u = q(() => c.value === 0 || o.cart.cartItems.some(X => X.quantity === 0) || l.value), d = q(() => o.cart?.cartItems?.length ?? 0), g = ce(!1), {
        isFeatureEnabledOneOf: p
      } = jt(), m = q(() => !!customElements.get("ppay-aplazame-offer-widget") && !!o.cart), E = q(() => o.cart?.cartItems ? wI(o.cart.cartItems) : !0), b = q(() => o.cart?.cartItems && o.cart.cartItems.reduce((X, N) => X + (N?.quantity ?? 0), 0) <= 1 ? t("pages.cartView.cartItemsHeader.singleArticle") : t("pages.cartView.cartItemsHeader.multipleArticles")), v = ss(), A = async () => {
        l.value = !0, n({
            page: Ze.CART,
            buttonText: String(t("submit.section.button.label"))
          }), await v.createCheckoutSession()
          .catch(X => {
            g.value = !0, l.value = !1, X.status === it.INTERNAL_SERVER_ERROR && a.addAppMessage(uD)
          })
      }, R = q(() => p(["oneClickCheckoutEnabledPayPal", "oneClickCheckoutEnabledApplePay", "oneClickCheckoutEnabledGooglePay"]) && i.isOneClickAvailable() && !E.value), O = async X => {
        i.removeOneClickPaymentMethod(gl(X.paymentMode)), a.addAppMessage(R_)
      }, L = async X => {
        i.removeOneClickPaymentMethod(gl(X.paymentMode)), a.addAppMessage(Fv)
      }, P = async X => {
        i.removeOneClickPaymentMethod(gl(X.paymentMode)), a.addAppMessage(R_)
      }, D = async X => {
        const N = {
          cardNetwork: X.cardType,
          dateOfBirth: X.dateOfBirth,
          emailAddress: X.emailAddress,
          invoiceAddress: X.invoiceAddress,
          paymentMode: X.paymentMode,
          phone: X.phone,
          shippingAddress: X.shippingAddress,
          token: X.token
        };
        await i.oneClickDataSubmit(N)
      }, J = () => {
        E.value && new mE({
            logger: rn
          })
          .emit("recommendations-slider-show")
      }, k = ce(!0), Y = sv(), H = ld(), G = Yn();
      CE();
      const me = jt(),
        de = X => {
          X.persisted && (l.value = !1)
        };
      return ao(() => {
        o.$patch({
          pageOrigin: _n.Cart
        }), l.value = !1
      }), Rt(async () => {
        if (Y?.query?.refresh !== void 0 && await A(), await o.fetch(), k.value = !1, sD(Y?.query)) {
          G.addAppMessage(es);
          const X = Object.assign({}, Y?.query);
          delete X[ka], await H.replace({
            query: X
          })
        }!E.value && me.isFeatureEnabled("isCartScarcityMessageEnabled") && G.addAppMessage(lD), p(["oneClickCheckoutEnabledPayPal", "oneClickCheckoutEnabledApplePay", "oneClickCheckoutEnabledGooglePay"]) && !E.value && await i.fetchOneClickData(), J(), c.value = o.cart?.cartItems.length, r({
          page: Ze.CART
        }), window.addEventListener("pageshow", de)
      }), Nr(() => {
        window.removeEventListener("pageshow", de)
      }), (X, N) => (B(), ue("div", null, [(B(), be(dm, {
        key: `toast-${F(a).messages.value.length}`,
        location: F(xt)
          .TOAST,
        class: "cart-view__app-messages"
      }, null, 8, ["location"])), k.value ? (B(), ue("div", gM, [Te(hE)])) : E.value ? (B(), be(tM, {
        key: 2
      })) : (B(), ue("div", vM, [fe("div", EM, [(B(), be(dm, {
          key: `page-${F(a).messages.value.length}`,
          location: F(xt)
            .PAGE,
          class: "cart-view__app-messages"
        }, null, 8, ["location"])), fe("div", yM, [fe("h1", bM, Ce(F(t)("pages.cartView.shoppingCart.headline.label")), 1), fe("h2", AM, Ce(b.value), 1)]), d.value > 2 ? (B(), be(vl, {
          key: 0,
          class: "cart-view__mobile",
          location: "top"
        })) : ge("", !0), F(o)
        .cart?.cartItems ? (B(), be(_V, {
          key: 1
        })) : ge("", !0)
      ]), fe("div", TM, [fe("div", OM, [F(s) ? ge("", !0) : (B(), be(vl, {
          key: 0,
          class: "cart-view__desktop",
          location: "bottom"
        })), F(s) ? ge("", !0) : (B(), be(lm, {
          key: 1,
          "show-aplazame": m.value
        }, null, 8, ["show-aplazame"])), N[0] || (Dn(-1, !0), (N[0] = Te(IV))
          .cacheIndex = 0, Dn(1), N[0]), F(s) ? (B(), be(vl, {
          key: 2,
          class: "cart-view__mobile",
          location: "bottom"
        })) : ge("", !0), F(s) ? (B(), be(lm, {
          key: 3,
          "show-aplazame": m.value
        }, null, 8, ["show-aplazame"])) : ge("", !0), m.value ? (B(), be(HV, {
          key: 4
        })) : ge("", !0), F(o)
        .cart ? (B(), be(AV, {
          key: 5,
          "is-loading": l.value,
          "is-button-disabled": u.value,
          "ab-test-tag": F(_u)
            .basketToCheckout,
          onSubmit: A
        }, null, 8, ["is-loading", "is-button-disabled", "ab-test-tag"])) : ge("", !0), R.value ? (B(), be(FV, {
          key: 6,
          cart: F(o)
            .cart,
          "allowed-payment-methods": F(i)
            .allowedPaymentMethods,
          onCancel: L,
          onPanic: O,
          onError: P,
          onSuccess: D
        }, null, 8, ["cart", "allowed-payment-methods"])) : ge("", !0)
      ])])]))]))
    }
  }),
  SM = je(IM, [
    ["__scopeId", "data-v-252485b5"]
  ]),
  RM = [{
    path: "",
    redirect: "/checkout/flow"
  }, {
    path: "/checkout",
    redirect: "/checkout/flow"
  }, {
    path: "/handover",
    component: async () => await _(() => import("./layout-handover-Ap1zKIzi.js"), []),
    children: [{
      path: "",
      name: It.HANDOVER,
      component: async () => await _(() => import("./checkout-handover-page-BpjK8phP.js"), __vite__mapDeps([0, 1, 2]))
    }, {
      path: "flash-sales",
      name: It.HANDOVER_FLASHSALES,
      component: async () => await _(() => import("./checkout-handover-flashsales-page-BKIk4Fhs.js"), __vite__mapDeps([3, 1, 4]))
    }]
  }, {
    path: "/cart",
    component: jD,
    children: [{
      path: "",
      name: It.CART,
      component: SM
    }]
  }, {
    path: "/checkout",
    component: k1,
    children: [{
      path: "",
      redirect: "/checkout/login"
    }, {
      name: It.LOGIN,
      path: "login",
      component: async () => await _(() => import("./login-view-D6CoqNaf.js"), __vite__mapDeps([5, 6, 7, 8, 9, 10, 11]))
    }, {
      path: `:step(${Do.join("|")})`,
      props: !0,
      component: async () => await _(() => import("./checkout-view-Df0c0iiS.js"), __vite__mapDeps([12, 13, 7, 14, 9, 10, 15, 16, 17]))
    }, {
      path: "flow",
      name: It.FLOW,
      component: async () => await _(() => import("./checkout-flow-view-CObZW5nY.js"), __vite__mapDeps([18, 19]))
    }, {
      path: "success",
      name: It.SUCCESS,
      component: async () => await _(() => import("./checkout-success-view-DOHhuhxS.js"), __vite__mapDeps([20, 6, 7, 8, 13, 14, 21, 15, 16, 22, 23]))
    }, {
      path: ":pathMatch(.*)*",
      name: It.ERROR,
      component: async () => await _(() => import("./error-view-Cqog9-Zj.js"), __vite__mapDeps([21, 15, 16, 22]))
    }]
  }],
  Oc = xP({
    routes: RM,
    history: pP("/otc")
  });
Oc.afterEach(fC);
Oc.afterEach(e => {
  const {
    setCurrentLocation: t
  } = cc();
  t(e.fullPath)
});
const Ic = Object.freeze(Object.defineProperty({
  __proto__: null,
  default: Oc
}, Symbol.toStringTag, {
  value: "Module"
}));
(async () => {
  const e = vw();
  await gw();
  const t = l0(NP)
    .use(Oc)
    .use(od)
    .use(e);
  t.directive("secure-html", _S), t.mount("#app"), pS("checkoutview", {
    versionTag: "v-checkoutview-82.0.0-RELEASE"
  }), Pw()
})();
export {
  gd as $, q as A, hE as B, _c as C, Be as D, Tk as E, fu as F, ce as G, Ze as H, tF as I, rD as J, Vt as K, Vn as L, xe as M, Gs as N, ao as O, Nt as P, Rs as Q, dt as R, zL as S, aa as T, Ft as U, xt as V, dm as W, $1 as X, _u as Y, cv as Z, je as _, fe as a, RE as a$, Zt as a0, et as a1, ln as a2, Hr as a3, Ac as a4, Hk as a5, Jn as a6, bc as a7, Jk as a8, DM as a9, Mn as aA, it as aB, ko as aC, gu as aD, x1 as aE, K_ as aF, _V as aG, vl as aH, LM as aI, CM as aJ, zr as aK, Do as aL, sF as aM, jt as aN, dr as aO, kM as aP, wM as aQ, Ab as aR, wt as aS, Q1 as aT, pN as aU, SE as aV, Yy as aW, wE as aX, iF as aY, Pi as aZ, Kv as a_, we as aa, Co as ab, cr as ac, Xe as ad, Gn as ae, xn as af, c1 as ag, N1 as ah, od as ai, zV as aj, gV as ak, Qo as al, $u as am, Ec as an, yc as ao, Gv as ap, nF as aq, rF as ar, n1 as as, $r as at, Os as au, La as av, ss as aw, JN as ax, OD as ay, us as az, Te as b, Tn as b0, Hg as b1, In as b2, AD as b3, Bn as b4, Cr as b5, ok as b6, wk as b7, io as b8, Pr as b9, m$ as bA, PI as bB, T$ as bC, FI as bD, Vl as bE, NM as bF, Ds as bG, fa as bH, eF as bI, iV as bJ, uF as bK, mi as bL, Jv as bM, PE as bN, vi as bO, nE as bP, uu as bQ, _ as bR, ik as bS, _S as ba, wi as bb, mM as bc, PM as bd, Qv as be, pa as bf, rM as bg, TD as bh, yd as bi, uC as bj, _n as bk, Hv as bl, gD as bm, oF as bn, wI as bo, un as bp, oo as bq, i1 as br, oN as bs, ND as bt, aF as bu, cF as bv, lF as bw, uV as bx, zN as by, VN as bz, ue as c, Ie as d, Rt as e, sv as f, gc as g, Ut as h, on as i, $M as j, ld as k, rn as l, Nn as m, Bt as n, B as o, mt as p, at as q, Ja as r, Yr as s, $a as t, Ye as u, be as v, We as w, ge as x, Ce as y, F as z
};