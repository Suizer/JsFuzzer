const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/WishlistPage-Dn79gTxY.js", "assets/vue.runtime.esm-bundler-BconepBA.js", "assets/redirect-B9wYIa66.js", "assets/WishlistPage-DrKqjQpo.css", "assets/RedirectToCart-DKw9c9Qz.js"]))) => i.map(i => d[i]);
import {
  B as e,
  C as t,
  E as n,
  F as r,
  G as i,
  I as a,
  K as o,
  L as s,
  M as c,
  R as l,
  S as u,
  T as d,
  V as f,
  _ as p,
  b as m,
  f as h,
  g,
  i as _,
  k as v,
  l as y,
  s as b,
  t as x,
  u as S,
  v as ee,
  w as C,
  y as w,
  z as te
} from "./vue.runtime.esm-bundler-BconepBA.js";
(function() {
  let e = document.createElement(`link`)
    .relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver(e => {
      for (let t of e)
        if (t.type === `childList`)
          for (let e of t.addedNodes) e.tagName === `LINK` && e.rel === `modulepreload` && n(e)
    })
    .observe(document, {
      childList: !0,
      subtree: !0
    });

  function t(e) {
    let t = {};
    return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), e.crossOrigin === `use-credentials` ? t.credentials = `include` : e.crossOrigin === `anonymous` ? t.credentials = `omit` : t.credentials = `same-origin`, t
  }

  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n)
  }
})();
var T = typeof document < `u`;

function E(e) {
  return typeof e == `object` || `displayName` in e || `props` in e || `__vccOpts` in e
}

function ne(e) {
  return e.__esModule || e[Symbol.toStringTag] === `Module` || e.default && E(e.default)
}
var D = Object.assign;

function re(e, t) {
  let n = {};
  for (let r in t) {
    let i = t[r];
    n[r] = ae(i) ? i.map(e) : e(i)
  }
  return n
}
var ie = () => {},
  ae = Array.isArray;

function oe(e, t) {
  let n = {};
  for (let r in e) n[r] = r in t ? t[r] : e[r];
  return n
}
var O = function(e) {
    return e[e.MATCHER_NOT_FOUND = 1] = `MATCHER_NOT_FOUND`, e[e.NAVIGATION_GUARD_REDIRECT = 2] = `NAVIGATION_GUARD_REDIRECT`, e[e.NAVIGATION_ABORTED = 4] = `NAVIGATION_ABORTED`, e[e.NAVIGATION_CANCELLED = 8] = `NAVIGATION_CANCELLED`, e[e.NAVIGATION_DUPLICATED = 16] = `NAVIGATION_DUPLICATED`, e
  }({}),
  se = Symbol(``);
O.MATCHER_NOT_FOUND, O.NAVIGATION_GUARD_REDIRECT, O.NAVIGATION_ABORTED, O.NAVIGATION_CANCELLED, O.NAVIGATION_DUPLICATED;

function k(e, t) {
  return D(Error(), {
    type: e,
    [se]: !0
  }, t)
}

function A(e, t) {
  return e instanceof Error && se in e && (t == null || !!(e.type & t))
}
var j = Symbol(``),
  ce = Symbol(``),
  M = Symbol(``),
  le = Symbol(``),
  ue = Symbol(``),
  N = /#/g,
  de = /&/g,
  fe = /\//g,
  pe = /=/g,
  me = /\?/g,
  P = /\+/g,
  he = /%5B/g,
  F = /%5D/g,
  ge = /%5E/g,
  _e = /%60/g,
  ve = /%7B/g,
  ye = /%7C/g,
  be = /%7D/g,
  xe = /%20/g;

function I(e) {
  return e == null ? `` : encodeURI(`` + e)
    .replace(ye, `|`)
    .replace(he, `[`)
    .replace(F, `]`)
}

function Se(e) {
  return I(e)
    .replace(ve, `{`)
    .replace(be, `}`)
    .replace(ge, `^`)
}

function Ce(e) {
  return I(e)
    .replace(P, `%2B`)
    .replace(xe, `+`)
    .replace(N, `%23`)
    .replace(de, `%26`)
    .replace(_e, "`")
    .replace(ve, `{`)
    .replace(be, `}`)
    .replace(ge, `^`)
}

function L(e) {
  return Ce(e)
    .replace(pe, `%3D`)
}

function we(e) {
  return I(e)
    .replace(N, `%23`)
    .replace(me, `%3F`)
}

function Te(e) {
  return we(e)
    .replace(fe, `%2F`)
}

function Ee(e) {
  if (e == null) return null;
  try {
    return decodeURIComponent(`` + e)
  } catch {}
  return `` + e
}
var De = /\/$/,
  Oe = e => e.replace(De, ``);

function ke(e, t, n = `/`) {
  let r, i = {},
    a = ``,
    o = ``,
    s = t.indexOf(`#`),
    c = t.indexOf(`?`);
  return c = s >= 0 && c > s ? -1 : c, c >= 0 && (r = t.slice(0, c), a = t.slice(c, s > 0 ? s : t.length), i = e(a.slice(1))), s >= 0 && (r ||= t.slice(0, s), o = t.slice(s, t.length)), r = Le(r ?? t, n), {
    fullPath: r + a + o,
    path: r,
    query: i,
    hash: Ee(o)
  }
}

function Ae(e, t) {
  let n = t.query ? e(t.query) : ``;
  return t.path + (n && `?`) + n + (t.hash || ``)
}

function je(e, t) {
  return !t || !e.toLowerCase()
    .startsWith(t.toLowerCase()) ? e : e.slice(t.length) || `/`
}

function Me(e, t, n) {
  let r = t.matched.length - 1,
    i = n.matched.length - 1;
  return r > -1 && r === i && Ne(t.matched[r], n.matched[i]) && Pe(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}

function Ne(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}

function Pe(e, t) {
  if (Object.keys(e)
    .length !== Object.keys(t)
    .length) return !1;
  for (var n in e)
    if (!Fe(e[n], t[n])) return !1;
  return !0
}

function Fe(e, t) {
  return ae(e) ? Ie(e, t) : ae(t) ? Ie(t, e) : (e && e.valueOf()) === (t && t.valueOf())
}

function Ie(e, t) {
  return ae(t) ? e.length === t.length && e.every((e, n) => e === t[n]) : e.length === 1 && e[0] === t
}

function Le(e, t) {
  if (e.startsWith(`/`)) return e;
  if (!e) return t;
  let n = t.split(`/`),
    r = e.split(`/`),
    i = r[r.length - 1];
  (i === `..` || i === `.`) && r.push(``);
  let a = n.length - 1,
    o, s;
  for (o = 0; o < r.length; o++)
    if (s = r[o], s !== `.`)
      if (s === `..`) a > 1 && a--;
      else break;
  return n.slice(0, a)
    .join(`/`) + `/` + r.slice(o)
    .join(`/`)
}
var Re = {
    path: `/`,
    name: void 0,
    params: {},
    query: {},
    hash: ``,
    fullPath: `/`,
    matched: [],
    meta: {},
    redirectedFrom: void 0
  },
  ze = function(e) {
    return e.pop = `pop`, e.push = `push`, e
  }({}),
  Be = function(e) {
    return e.back = `back`, e.forward = `forward`, e.unknown = ``, e
  }({});

function Ve(e) {
  if (!e)
    if (T) {
      let t = document.querySelector(`base`);
      e = t && t.getAttribute(`href`) || `/`, e = e.replace(/^\w+:\/\/[^\/]+/, ``)
    } else e = `/`;
  return e[0] !== `/` && e[0] !== `#` && (e = `/` + e), Oe(e)
}
var R = /^[^#]+#/;

function He(e, t) {
  return e.replace(R, `#`) + t
}

function Ue(e, t) {
  let n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0)
  }
}
var We = () => ({
  left: window.scrollX,
  top: window.scrollY
});

function Ge(e) {
  let t;
  if (`el` in e) {
    let n = e.el,
      r = typeof n == `string` && n.startsWith(`#`),
      i = typeof n == `string` ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!i) return;
    t = Ue(i, e)
  } else t = e;
  `scrollBehavior` in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left == null ? window.scrollX : t.left, t.top == null ? window.scrollY : t.top)
}

function Ke(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
var qe = new Map;

function Je(e, t) {
  qe.set(e, t)
}

function Ye(e) {
  let t = qe.get(e);
  return qe.delete(e), t
}

function Xe(e) {
  return typeof e == `string` || e && typeof e == `object`
}

function Ze(e) {
  return typeof e == `string` || typeof e == `symbol`
}

function Qe(e) {
  let t = {};
  if (e === `` || e === `?`) return t;
  let n = (e[0] === `?` ? e.slice(1) : e)
    .split(`&`);
  for (let e = 0; e < n.length; ++e) {
    let r = n[e].replace(P, ` `),
      i = r.indexOf(`=`),
      a = Ee(i < 0 ? r : r.slice(0, i)),
      o = i < 0 ? null : Ee(r.slice(i + 1));
    if (a in t) {
      let e = t[a];
      ae(e) || (e = t[a] = [e]), e.push(o)
    } else t[a] = o
  }
  return t
}

function $e(e) {
  let t = ``;
  for (let n in e) {
    let r = e[n];
    if (n = L(n), r == null) {
      r !== void 0 && (t += (t.length ? `&` : ``) + n);
      continue
    }(ae(r) ? r.map(e => e && Ce(e)) : [r && Ce(r)])
    .forEach(e => {
      e !== void 0 && (t += (t.length ? `&` : ``) + n, e != null && (t += `=` + e))
    })
  }
  return t
}

function et(e) {
  let t = {};
  for (let n in e) {
    let r = e[n];
    r !== void 0 && (t[n] = ae(r) ? r.map(e => e == null ? null : `` + e) : r == null ? r : `` + r)
  }
  return t
}

function tt() {
  let e = [];

  function t(t) {
    return e.push(t), () => {
      let n = e.indexOf(t);
      n > -1 && e.splice(n, 1)
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

function nt(e, t, n, r, i, a = e => e()) {
  let o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
  return () => new Promise((s, c) => {
    let l = e => {
        e === !1 ? c(k(O.NAVIGATION_ABORTED, {
          from: n,
          to: t
        })) : e instanceof Error ? c(e) : Xe(e) ? c(k(O.NAVIGATION_GUARD_REDIRECT, {
          from: t,
          to: e
        })) : (o && r.enterCallbacks[i] === o && typeof e == `function` && o.push(e), s())
      },
      u = a(() => e.call(r && r.instances[i], t, n, l)),
      d = Promise.resolve(u);
    e.length < 3 && (d = d.then(l)), d.catch(e => c(e))
  })
}

function rt(e, t, n, r, i = e => e()) {
  let a = [];
  for (let o of e)
    for (let e in o.components) {
      let s = o.components[e];
      if (!(t !== `beforeRouteEnter` && !o.instances[e]))
        if (E(s)) {
          let c = (s.__vccOpts || s)[t];
          c && a.push(nt(c, n, r, o, e, i))
        } else {
          let c = s();
          a.push(() => c.then(a => {
            if (!a) throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);
            let s = ne(a) ? a.default : a;
            o.mods[e] = a, o.components[e] = s;
            let c = (s.__vccOpts || s)[t];
            return c && nt(c, n, r, o, e, i)()
          }))
        }
    }
  return a
}

function it(e, t) {
  let n = [],
    r = [],
    i = [],
    a = Math.max(t.matched.length, e.matched.length);
  for (let o = 0; o < a; o++) {
    let a = t.matched[o];
    a && (e.matched.find(e => Ne(e, a)) ? r.push(a) : n.push(a));
    let s = e.matched[o];
    s && (t.matched.find(e => Ne(e, s)) || i.push(s))
  }
  return [n, r, i]
}
var at = () => location.protocol + `//` + location.host;

function ot(e, t) {
  let {
    pathname: n,
    search: r,
    hash: i
  } = t, a = e.indexOf(`#`);
  if (a > -1) {
    let t = i.includes(e.slice(a)) ? e.slice(a)
      .length : 1,
      n = i.slice(t);
    return n[0] !== `/` && (n = `/` + n), je(n, ``)
  }
  return je(n, e) + r + i
}

function st(e, t, n, r) {
  let i = [],
    a = [],
    o = null,
    s = ({
      state: a
    }) => {
      let s = ot(e, location),
        c = n.value,
        l = t.value,
        u = 0;
      if (a) {
        if (n.value = s, t.value = a, o && o === c) {
          o = null;
          return
        }
        u = l ? a.position - l.position : 0
      } else r(s);
      i.forEach(e => {
        e(n.value, c, {
          delta: u,
          type: ze.pop,
          direction: u ? u > 0 ? Be.forward : Be.back : Be.unknown
        })
      })
    };

  function c() {
    o = n.value
  }

  function l(e) {
    i.push(e);
    let t = () => {
      let t = i.indexOf(e);
      t > -1 && i.splice(t, 1)
    };
    return a.push(t), t
  }

  function u() {
    if (document.visibilityState === `hidden`) {
      let {
        history: e
      } = window;
      if (!e.state) return;
      e.replaceState(D({}, e.state, {
        scroll: We()
      }), ``)
    }
  }

  function d() {
    for (let e of a) e();
    a = [], window.removeEventListener(`popstate`, s), window.removeEventListener(`pagehide`, u), document.removeEventListener(`visibilitychange`, u)
  }
  return window.addEventListener(`popstate`, s), window.addEventListener(`pagehide`, u), document.addEventListener(`visibilitychange`, u), {
    pauseListeners: c,
    listen: l,
    destroy: d
  }
}

function ct(e, t, n, r = !1, i = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: i ? We() : null
  }
}

function lt(e) {
  let {
    history: t,
    location: n
  } = window, r = {
    value: ot(e, n)
  }, i = {
    value: t.state
  };
  i.value || a(r.value, {
    back: null,
    current: r.value,
    forward: null,
    position: t.length - 1,
    replaced: !0,
    scroll: null
  }, !0);

  function a(r, a, o) {
    let s = e.indexOf(`#`),
      c = s > -1 ? (n.host && document.querySelector(`base`) ? e : e.slice(s)) + r : at() + e + r;
    try {
      t[o ? `replaceState` : `pushState`](a, ``, c), i.value = a
    } catch (e) {
      console.error(e), n[o ? `replace` : `assign`](c)
    }
  }

  function o(e, n) {
    a(e, D({}, t.state, ct(i.value.back, e, i.value.forward, !0), n, {
      position: i.value.position
    }), !0), r.value = e
  }

  function s(e, n) {
    let o = D({}, i.value, t.state, {
      forward: e,
      scroll: We()
    });
    a(o.current, o, !0), a(e, D({}, ct(r.value, e, null), {
      position: o.position + 1
    }, n), !1), r.value = e
  }
  return {
    location: r,
    state: i,
    push: s,
    replace: o
  }
}

function ut(e) {
  e = Ve(e);
  let t = lt(e),
    n = st(e, t.state, t.location, t.replace);

  function r(e, t = !0) {
    t || n.pauseListeners(), history.go(e)
  }
  let i = D({
    location: ``,
    base: e,
    go: r,
    createHref: He.bind(null, e)
  }, t, n);
  return Object.defineProperty(i, `location`, {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(i, `state`, {
    enumerable: !0,
    get: () => t.state.value
  }), i
}
var dt = function(e) {
    return e[e.Static = 0] = `Static`, e[e.Param = 1] = `Param`, e[e.Group = 2] = `Group`, e
  }({}),
  z = function(e) {
    return e[e.Static = 0] = `Static`, e[e.Param = 1] = `Param`, e[e.ParamRegExp = 2] = `ParamRegExp`, e[e.ParamRegExpEnd = 3] = `ParamRegExpEnd`, e[e.EscapeNext = 4] = `EscapeNext`, e
  }(z || {}),
  ft = {
    type: dt.Static,
    value: ``
  },
  pt = /[a-zA-Z0-9_]/;

function mt(e) {
  if (!e) return [
    []
  ];
  if (e === `/`) return [
    [ft]
  ];
  if (!e.startsWith(`/`)) throw Error(`Invalid path "${e}"`);

  function t(e) {
    throw Error(`ERR (${n})/"${l}": ${e}`)
  }
  let n = z.Static,
    r = n,
    i = [],
    a;

  function o() {
    a && i.push(a), a = []
  }
  let s = 0,
    c, l = ``,
    u = ``;

  function d() {
    l &&= (n === z.Static ? a.push({
      type: dt.Static,
      value: l
    }) : n === z.Param || n === z.ParamRegExp || n === z.ParamRegExpEnd ? (a.length > 1 && (c === `*` || c === `+`) && t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`), a.push({
      type: dt.Param,
      value: l,
      regexp: u,
      repeatable: c === `*` || c === `+`,
      optional: c === `*` || c === `?`
    })) : t(`Invalid state to consume buffer`), ``)
  }

  function f() {
    l += c
  }
  for (; s < e.length;) {
    if (c = e[s++], c === `\\` && n !== z.ParamRegExp) {
      r = n, n = z.EscapeNext;
      continue
    }
    switch (n) {
      case z.Static:
        c === `/` ? (l && d(), o()) : c === `:` ? (d(), n = z.Param) : f();
        break;
      case z.EscapeNext:
        f(), n = r;
        break;
      case z.Param:
        c === `(` ? n = z.ParamRegExp : pt.test(c) ? f() : (d(), n = z.Static, c !== `*` && c !== `?` && c !== `+` && s--);
        break;
      case z.ParamRegExp:
        c === `)` ? u[u.length - 1] == `\\` ? u = u.slice(0, -1) + c : n = z.ParamRegExpEnd : u += c;
        break;
      case z.ParamRegExpEnd:
        d(), n = z.Static, c !== `*` && c !== `?` && c !== `+` && s--, u = ``;
        break;
      default:
        t(`Unknown state`);
        break
    }
  }
  return n === z.ParamRegExp && t(`Unfinished custom RegExp for param "${l}"`), d(), o(), i
}
var ht = `[^/]+?`,
  gt = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
  },
  _t = function(e) {
    return e[e._multiplier = 10] = `_multiplier`, e[e.Root = 90] = `Root`, e[e.Segment = 40] = `Segment`, e[e.SubSegment = 30] = `SubSegment`, e[e.Static = 40] = `Static`, e[e.Dynamic = 20] = `Dynamic`, e[e.BonusCustomRegExp = 10] = `BonusCustomRegExp`, e[e.BonusWildcard = -50] = `BonusWildcard`, e[e.BonusRepeatable = -20] = `BonusRepeatable`, e[e.BonusOptional = -8] = `BonusOptional`, e[e.BonusStrict = .7000000000000001] = `BonusStrict`, e[e.BonusCaseSensitive = .25] = `BonusCaseSensitive`, e
  }(_t || {}),
  vt = /[.+*?^${}()[\]/\\]/g;

function yt(e, t) {
  let n = D({}, gt, t),
    r = [],
    i = n.start ? `^` : ``,
    a = [];
  for (let t of e) {
    let e = t.length ? [] : [_t.Root];
    n.strict && !t.length && (i += `/`);
    for (let r = 0; r < t.length; r++) {
      let o = t[r],
        s = _t.Segment + (n.sensitive ? _t.BonusCaseSensitive : 0);
      if (o.type === dt.Static) r || (i += `/`), i += o.value.replace(vt, `\\$&`), s += _t.Static;
      else if (o.type === dt.Param) {
        let {
          value: e,
          repeatable: n,
          optional: c,
          regexp: l
        } = o;
        a.push({
          name: e,
          repeatable: n,
          optional: c
        });
        let u = l || ht;
        if (u !== ht) {
          s += _t.BonusCustomRegExp;
          try {
            RegExp(`(${u})`)
          } catch (t) {
            throw Error(`Invalid custom RegExp for param "${e}" (${u}): ` + t.message)
          }
        }
        let d = n ? `((?:${u})(?:/(?:${u}))*)` : `(${u})`;
        r || (d = c && t.length < 2 ? `(?:/${d})` : `/` + d), c && (d += `?`), i += d, s += _t.Dynamic, c && (s += _t.BonusOptional), n && (s += _t.BonusRepeatable), u === `.*` && (s += _t.BonusWildcard)
      }
      e.push(s)
    }
    r.push(e)
  }
  if (n.strict && n.end) {
    let e = r.length - 1;
    r[e][r[e].length - 1] += _t.BonusStrict
  }
  n.strict || (i += `/?`), n.end ? i += `$` : n.strict && !i.endsWith(`/`) && (i += `(?:/|$)`);
  let o = new RegExp(i, n.sensitive ? `` : `i`);

  function s(e) {
    let t = e.match(o),
      n = {};
    if (!t) return null;
    for (let e = 1; e < t.length; e++) {
      let r = t[e] || ``,
        i = a[e - 1];
      n[i.name] = r && i.repeatable ? r.split(`/`) : r
    }
    return n
  }

  function c(t) {
    let n = ``,
      r = !1;
    for (let i of e) {
      (!r || !n.endsWith(`/`)) && (n += `/`), r = !1;
      for (let e of i)
        if (e.type === dt.Static) n += e.value;
        else if (e.type === dt.Param) {
        let {
          value: a,
          repeatable: o,
          optional: s
        } = e, c = a in t ? t[a] : ``;
        if (ae(c) && !o) throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);
        let l = ae(c) ? c.join(`/`) : c;
        if (!l)
          if (s) i.length < 2 && (n.endsWith(`/`) ? n = n.slice(0, -1) : r = !0);
          else throw Error(`Missing required param "${a}"`);
        n += l
      }
    }
    return n || `/`
  }
  return {
    re: o,
    score: r,
    keys: a,
    parse: s,
    stringify: c
  }
}

function bt(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length;) {
    let r = t[n] - e[n];
    if (r) return r;
    n++
  }
  return e.length < t.length ? e.length === 1 && e[0] === _t.Static + _t.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === _t.Static + _t.Segment ? 1 : -1 : 0
}

function xt(e, t) {
  let n = 0,
    r = e.score,
    i = t.score;
  for (; n < r.length && n < i.length;) {
    let e = bt(r[n], i[n]);
    if (e) return e;
    n++
  }
  if (Math.abs(i.length - r.length) === 1) {
    if (St(r)) return 1;
    if (St(i)) return -1
  }
  return i.length - r.length
}

function St(e) {
  let t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0
}
var Ct = {
  strict: !1,
  end: !0,
  sensitive: !1
};

function wt(e, t, n) {
  let r = D(yt(mt(e.path), n), {
    record: e,
    parent: t,
    children: [],
    alias: []
  });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r
}

function Tt(e, t) {
  let n = [],
    r = new Map;
  t = oe(Ct, t);

  function i(e) {
    return r.get(e)
  }

  function a(e, n, r) {
    let i = !r,
      s = Dt(e);
    s.aliasOf = r && r.record;
    let l = oe(t, e),
      u = [s];
    if (`alias` in e) {
      let t = typeof e.alias == `string` ? [e.alias] : e.alias;
      for (let e of t) u.push(Dt(D({}, s, {
        components: r ? r.record.components : s.components,
        path: e,
        aliasOf: r ? r.record : s
      })))
    }
    let d, f;
    for (let t of u) {
      let {
        path: u
      } = t;
      if (n && u[0] !== `/`) {
        let e = n.record.path,
          r = e[e.length - 1] === `/` ? `` : `/`;
        t.path = n.record.path + (u && r + u)
      }
      if (d = wt(t, n, l), r ? r.alias.push(d) : (f ||= d, f !== d && f.alias.push(d), i && e.name && !kt(d) && o(e.name)), Nt(d) && c(d), s.children) {
        let e = s.children;
        for (let t = 0; t < e.length; t++) a(e[t], d, r && r.children[t])
      }
      r ||= d
    }
    return f ? () => {
      o(f)
    } : ie
  }

  function o(e) {
    if (Ze(e)) {
      let t = r.get(e);
      t && (r.delete(e), n.splice(n.indexOf(t), 1), t.children.forEach(o), t.alias.forEach(o))
    } else {
      let t = n.indexOf(e);
      t > -1 && (n.splice(t, 1), e.record.name && r.delete(e.record.name), e.children.forEach(o), e.alias.forEach(o))
    }
  }

  function s() {
    return n
  }

  function c(e) {
    let t = jt(e, n);
    n.splice(t, 0, e), e.record.name && !kt(e) && r.set(e.record.name, e)
  }

  function l(e, t) {
    let i, a = {},
      o, s;
    if (`name` in e && e.name) {
      if (i = r.get(e.name), !i) throw k(O.MATCHER_NOT_FOUND, {
        location: e
      });
      s = i.record.name, a = D(Et(t.params, i.keys.filter(e => !e.optional)
        .concat(i.parent ? i.parent.keys.filter(e => e.optional) : [])
        .map(e => e.name)), e.params && Et(e.params, i.keys.map(e => e.name))), o = i.stringify(a)
    } else if (e.path != null) o = e.path, i = n.find(e => e.re.test(o)), i && (a = i.parse(o), s = i.record.name);
    else {
      if (i = t.name ? r.get(t.name) : n.find(e => e.re.test(t.path)), !i) throw k(O.MATCHER_NOT_FOUND, {
        location: e,
        currentLocation: t
      });
      s = i.record.name, a = D({}, t.params, e.params), o = i.stringify(a)
    }
    let c = [],
      l = i;
    for (; l;) c.unshift(l.record), l = l.parent;
    return {
      name: s,
      path: o,
      params: a,
      matched: c,
      meta: At(c)
    }
  }
  e.forEach(e => a(e));

  function u() {
    n.length = 0, r.clear()
  }
  return {
    addRoute: a,
    resolve: l,
    removeRoute: o,
    clearRoutes: u,
    getRoutes: s,
    getRecordMatcher: i
  }
}

function Et(e, t) {
  let n = {};
  for (let r of t) r in e && (n[r] = e[r]);
  return n
}

function Dt(e) {
  let t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: Ot(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set,
    updateGuards: new Set,
    enterCallbacks: {},
    components: `components` in e ? e.components || null : e.component && {
      default: e.component
    }
  };
  return Object.defineProperty(t, `mods`, {
    value: {}
  }), t
}

function Ot(e) {
  let t = {},
    n = e.props || !1;
  if (`component` in e) t.default = n;
  else
    for (let r in e.components) t[r] = typeof n == `object` ? n[r] : n;
  return t
}

function kt(e) {
  for (; e;) {
    if (e.record.aliasOf) return !0;
    e = e.parent
  }
  return !1
}

function At(e) {
  return e.reduce((e, t) => D(e, t.meta), {})
}

function jt(e, t) {
  let n = 0,
    r = t.length;
  for (; n !== r;) {
    let i = n + r >> 1;
    xt(e, t[i]) < 0 ? r = i : n = i + 1
  }
  let i = Mt(e);
  return i && (r = t.lastIndexOf(i, r - 1)), r
}

function Mt(e) {
  let t = e;
  for (; t = t.parent;)
    if (Nt(t) && xt(e, t) === 0) return t
}

function Nt({
  record: e
}) {
  return !!(e.name || e.components && Object.keys(e.components)
    .length || e.redirect)
}

function Pt(e) {
  let t = m(M),
    n = m(le),
    r = S(() => {
      let n = f(e.to);
      return t.resolve(n)
    }),
    i = S(() => {
      let {
        matched: e
      } = r.value, {
        length: t
      } = e, i = e[t - 1], a = n.matched;
      if (!i || !a.length) return -1;
      let o = a.findIndex(Ne.bind(null, i));
      if (o > -1) return o;
      let s = zt(e[t - 2]);
      return t > 1 && zt(i) === s && a[a.length - 1].path !== s ? a.findIndex(Ne.bind(null, e[t - 2])) : o
    }),
    a = S(() => i.value > -1 && Rt(n.params, r.value.params)),
    o = S(() => i.value > -1 && i.value === n.matched.length - 1 && Pe(n.params, r.value.params));

  function s(n = {}) {
    if (Lt(n)) {
      let n = t[f(e.replace) ? `replace` : `push`](f(e.to))
        .catch(ie);
      return e.viewTransition && typeof document < `u` && `startViewTransition` in document && document.startViewTransition(() => n), n
    }
    return Promise.resolve()
  }
  return {
    route: r,
    href: S(() => r.value.href),
    isActive: a,
    isExactActive: o,
    navigate: s
  }
}

function Ft(e) {
  return e.length === 1 ? e[0] : e
}
var It = p({
  name: `RouterLink`,
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
      default: `page`
    },
    viewTransition: Boolean
  },
  useLink: Pt,
  setup(e, {
    slots: t
  }) {
    let n = s(Pt(e)),
      {
        options: r
      } = m(M),
      i = S(() => ({
        [Bt(e.activeClass, r.linkActiveClass, `router-link-active`)]: n.isActive,
        [Bt(e.exactActiveClass, r.linkExactActiveClass, `router-link-exact-active`)]: n.isExactActive
      }));
    return () => {
      let r = t.default && Ft(t.default(n));
      return e.custom ? r : w(`a`, {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        onClick: n.navigate,
        class: i.value
      }, r)
    }
  }
});

function Lt(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      let t = e.currentTarget.getAttribute(`target`);
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}

function Rt(e, t) {
  for (let n in t) {
    let r = t[n],
      i = e[n];
    if (typeof r == `string`) {
      if (r !== i) return !1
    } else if (!ae(i) || i.length !== r.length || r.some((e, t) => e.valueOf() !== i[t].valueOf())) return !1
  }
  return !0
}

function zt(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : ``
}
var Bt = (e, t, n) => e ?? t ?? n,
  Vt = p({
    name: `RouterView`,
    inheritAttrs: !1,
    props: {
      name: {
        type: String,
        default: `default`
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
      let i = m(ue),
        a = S(() => e.route || i.value),
        o = m(ce, 0),
        s = S(() => {
          let e = f(o),
            {
              matched: t
            } = a.value,
            n;
          for (;
            (n = t[e]) && !n.components;) e++;
          return e
        }),
        u = S(() => a.value.matched[s.value]);
      n(ce, S(() => s.value + 1)), n(j, u), n(ue, a);
      let d = l();
      return c(() => [d.value, u.value, e.name], ([e, t, n], [r, i, a]) => {
        t && (t.instances[n] = e, i && i !== t && e && e === r && (t.leaveGuards.size || (t.leaveGuards = i.leaveGuards), t.updateGuards.size || (t.updateGuards = i.updateGuards))), e && t && (!i || !Ne(t, i) || !r) && (t.enterCallbacks[n] || [])
          .forEach(t => t(e))
      }, {
        flush: `post`
      }), () => {
        let n = a.value,
          i = e.name,
          o = u.value,
          s = o && o.components[i];
        if (!s) return Ht(r.default, {
          Component: s,
          route: n
        });
        let c = o.props[i],
          l = w(s, D({}, c ? c === !0 ? n.params : typeof c == `function` ? c(n) : c : null, t, {
            onVnodeUnmounted: e => {
              e.component.isUnmounted && (o.instances[i] = null)
            },
            ref: d
          }));
        return Ht(r.default, {
          Component: l,
          route: n
        }) || l
      }
    }
  });

function Ht(e, t) {
  if (!e) return null;
  let n = e(t);
  return n.length === 1 ? n[0] : n
}
var Ut = Vt;

function Wt(t) {
  let n = Tt(t.routes, t),
    r = t.parseQuery || Qe,
    i = t.stringifyQuery || $e,
    a = t.history,
    o = tt(),
    s = tt(),
    c = tt(),
    l = e(Re),
    d = Re;
  T && t.scrollBehavior && `scrollRestoration` in history && (history.scrollRestoration = `manual`);
  let p = re.bind(null, e => `` + e),
    m = re.bind(null, Te),
    h = re.bind(null, Ee);

  function g(e, t) {
    let r, i;
    return Ze(e) ? (r = n.getRecordMatcher(e), i = t) : i = e, n.addRoute(i, r)
  }

  function _(e) {
    let t = n.getRecordMatcher(e);
    t && n.removeRoute(t)
  }

  function v() {
    return n.getRoutes()
      .map(e => e.record)
  }

  function y(e) {
    return !!n.getRecordMatcher(e)
  }

  function b(e, t) {
    if (t = D({}, t || l.value), typeof e == `string`) {
      let i = ke(r, e, t.path),
        o = n.resolve({
          path: i.path
        }, t),
        s = a.createHref(i.fullPath);
      return D(i, o, {
        params: h(o.params),
        hash: Ee(i.hash),
        redirectedFrom: void 0,
        href: s
      })
    }
    let o;
    if (e.path != null) o = D({}, e, {
      path: ke(r, e.path, t.path)
        .path
    });
    else {
      let n = D({}, e.params);
      for (let e in n) n[e] ?? delete n[e];
      o = D({}, e, {
        params: m(n)
      }), t.params = m(t.params)
    }
    let s = n.resolve(o, t),
      c = e.hash || ``;
    s.params = p(h(s.params));
    let u = Ae(i, D({}, e, {
        hash: Se(c),
        path: s.path
      })),
      d = a.createHref(u);
    return D({
      fullPath: u,
      hash: c,
      query: i === $e ? et(e.query) : e.query || {}
    }, s, {
      redirectedFrom: void 0,
      href: d
    })
  }

  function x(e) {
    return typeof e == `string` ? ke(r, e, l.value.path) : D({}, e)
  }

  function S(e, t) {
    if (d !== e) return k(O.NAVIGATION_CANCELLED, {
      from: t,
      to: e
    })
  }

  function ee(e) {
    return E(e)
  }

  function C(e) {
    return ee(D(x(e), {
      replace: !0
    }))
  }

  function w(e, t) {
    let n = e.matched[e.matched.length - 1];
    if (n && n.redirect) {
      let {
        redirect: r
      } = n, i = typeof r == `function` ? r(e, t) : r;
      return typeof i == `string` && (i = i.includes(`?`) || i.includes(`#`) ? i = x(i) : {
        path: i
      }, i.params = {}), D({
        query: e.query,
        hash: e.hash,
        params: i.path == null ? e.params : {}
      }, i)
    }
  }

  function E(e, t) {
    let n = d = b(e),
      r = l.value,
      a = e.state,
      o = e.force,
      s = e.replace === !0,
      c = w(n, r);
    if (c) return E(D(x(c), {
      state: typeof c == `object` ? D({}, a, c.state) : a,
      force: o,
      replace: s
    }), t || n);
    let u = n;
    u.redirectedFrom = t;
    let f;
    return !o && Me(i, r, n) && (f = k(O.NAVIGATION_DUPLICATED, {
        to: u,
        from: r
      }), ge(r, r, !0, !1)), (f ? Promise.resolve(f) : se(u, r))
      .catch(e => A(e) ? A(e, O.NAVIGATION_GUARD_REDIRECT) ? e : F(e) : P(e, u, r))
      .then(e => {
        if (e) {
          if (A(e, O.NAVIGATION_GUARD_REDIRECT)) return E(D({
            replace: s
          }, x(e.to), {
            state: typeof e.to == `object` ? D({}, a, e.to.state) : a,
            force: o
          }), t || u)
        } else e = ce(u, r, !0, s, a);
        return j(u, r, e), e
      })
  }

  function ne(e, t) {
    let n = S(e, t);
    return n ? Promise.reject(n) : Promise.resolve()
  }

  function oe(e) {
    let t = ye.values()
      .next()
      .value;
    return t && typeof t.runWithContext == `function` ? t.runWithContext(e) : e()
  }

  function se(e, t) {
    let n, [r, i, a] = it(e, t);
    n = rt(r.reverse(), `beforeRouteLeave`, e, t);
    for (let i of r) i.leaveGuards.forEach(r => {
      n.push(nt(r, e, t))
    });
    let c = ne.bind(null, e, t);
    return n.push(c), xe(n)
      .then(() => {
        n = [];
        for (let r of o.list()) n.push(nt(r, e, t));
        return n.push(c), xe(n)
      })
      .then(() => {
        n = rt(i, `beforeRouteUpdate`, e, t);
        for (let r of i) r.updateGuards.forEach(r => {
          n.push(nt(r, e, t))
        });
        return n.push(c), xe(n)
      })
      .then(() => {
        n = [];
        for (let r of a)
          if (r.beforeEnter)
            if (ae(r.beforeEnter))
              for (let i of r.beforeEnter) n.push(nt(i, e, t));
            else n.push(nt(r.beforeEnter, e, t));
        return n.push(c), xe(n)
      })
      .then(() => (e.matched.forEach(e => e.enterCallbacks = {}), n = rt(a, `beforeRouteEnter`, e, t, oe), n.push(c), xe(n)))
      .then(() => {
        n = [];
        for (let r of s.list()) n.push(nt(r, e, t));
        return n.push(c), xe(n)
      })
      .catch(e => A(e, O.NAVIGATION_CANCELLED) ? e : Promise.reject(e))
  }

  function j(e, t, n) {
    c.list()
      .forEach(r => oe(() => r(e, t, n)))
  }

  function ce(e, t, n, r, i) {
    let o = S(e, t);
    if (o) return o;
    let s = t === Re,
      c = T ? history.state : {};
    n && (r || s ? a.replace(e.fullPath, D({
      scroll: s && c && c.scroll
    }, i)) : a.push(e.fullPath, i)), l.value = e, ge(e, t, n, s), F()
  }
  let N;

  function de() {
    N ||= a.listen((e, t, n) => {
      if (!be.listening) return;
      let r = b(e),
        i = w(r, be.currentRoute.value);
      if (i) {
        E(D(i, {
            replace: !0,
            force: !0
          }), r)
          .catch(ie);
        return
      }
      d = r;
      let o = l.value;
      T && Je(Ke(o.fullPath, n.delta), We()), se(r, o)
        .catch(e => A(e, O.NAVIGATION_ABORTED | O.NAVIGATION_CANCELLED) ? e : A(e, O.NAVIGATION_GUARD_REDIRECT) ? (E(D(x(e.to), {
            force: !0
          }), r)
          .then(e => {
            A(e, O.NAVIGATION_ABORTED | O.NAVIGATION_DUPLICATED) && !n.delta && n.type === ze.pop && a.go(-1, !1)
          })
          .catch(ie), Promise.reject()) : (n.delta && a.go(-n.delta, !1), P(e, r, o)))
        .then(e => {
          e ||= ce(r, o, !1), e && (n.delta && !A(e, O.NAVIGATION_CANCELLED) ? a.go(-n.delta, !1) : n.type === ze.pop && A(e, O.NAVIGATION_ABORTED | O.NAVIGATION_DUPLICATED) && a.go(-1, !1)), j(r, o, e)
        })
        .catch(ie)
    })
  }
  let fe = tt(),
    pe = tt(),
    me;

  function P(e, t, n) {
    F(e);
    let r = pe.list();
    return r.length ? r.forEach(r => r(e, t, n)) : console.error(e), Promise.reject(e)
  }

  function he() {
    return me && l.value !== Re ? Promise.resolve() : new Promise((e, t) => {
      fe.add([e, t])
    })
  }

  function F(e) {
    return me || (me = !e, de(), fe.list()
      .forEach(([t, n]) => e ? n(e) : t()), fe.reset()), e
  }

  function ge(e, n, r, i) {
    let {
      scrollBehavior: a
    } = t;
    if (!T || !a) return Promise.resolve();
    let o = !r && Ye(Ke(e.fullPath, 0)) || (i || !r) && history.state && history.state.scroll || null;
    return u()
      .then(() => a(e, n, o))
      .then(e => e && Ge(e))
      .catch(t => P(t, e, n))
  }
  let _e = e => a.go(e),
    ve, ye = new Set,
    be = {
      currentRoute: l,
      listening: !0,
      addRoute: g,
      removeRoute: _,
      clearRoutes: n.clearRoutes,
      hasRoute: y,
      getRoutes: v,
      resolve: b,
      options: t,
      push: ee,
      replace: C,
      go: _e,
      back: () => _e(-1),
      forward: () => _e(1),
      beforeEach: o.add,
      beforeResolve: s.add,
      afterEach: c.add,
      onError: pe.add,
      isReady: he,
      install(e) {
        e.component(`RouterLink`, It), e.component(`RouterView`, Ut), e.config.globalProperties.$router = be, Object.defineProperty(e.config.globalProperties, `$route`, {
          enumerable: !0,
          get: () => f(l)
        }), T && !ve && l.value === Re && (ve = !0, ee(a.location)
          .catch(e => {}));
        let t = {};
        for (let e in Re) Object.defineProperty(t, e, {
          get: () => l.value[e],
          enumerable: !0
        });
        e.provide(M, be), e.provide(le, te(t)), e.provide(ue, l);
        let n = e.unmount;
        ye.add(e), e.unmount = function() {
          ye.delete(e), ye.size < 1 && (d = Re, N && N(), N = null, l.value = Re, ve = !1, me = !1), n()
        }
      }
    };

  function xe(e) {
    return e.reduce((e, t) => e.then(() => oe(t)), Promise.resolve())
  }
  return be
}
var Gt = `modulepreload`,
  Kt = function(e) {
    return `/wishlist/` + e
  },
  qt = {},
  B = function(e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      let e = document.getElementsByTagName(`link`),
        i = document.querySelector(`meta[property=csp-nonce]`),
        a = i?.nonce || i?.getAttribute(`nonce`);

      function o(e) {
        return Promise.all(e.map(e => Promise.resolve(e)
          .then(e => ({
            status: `fulfilled`,
            value: e
          }), e => ({
            status: `rejected`,
            reason: e
          }))))
      }
      r = o(t.map(t => {
        if (t = Kt(t, n), t in qt) return;
        qt[t] = !0;
        let r = t.endsWith(`.css`),
          i = r ? `[rel="stylesheet"]` : ``;
        if (n)
          for (let n = e.length - 1; n >= 0; n--) {
            let i = e[n];
            if (i.href === t && (!r || i.rel === `stylesheet`)) return
          } else if (document.querySelector(`link[href="${t}"]${i}`)) return;
        let o = document.createElement(`link`);
        if (o.rel = r ? `stylesheet` : Gt, r || (o.as = `script`), o.crossOrigin = ``, o.href = t, a && o.setAttribute(`nonce`, a), document.head.appendChild(o), r) return new Promise((e, n) => {
          o.addEventListener(`load`, e), o.addEventListener(`error`, () => n(Error(`Unable to preload CSS for ${t}`)))
        })
      }))
    }

    function i(e) {
      let t = new Event(`vite:preloadError`, {
        cancelable: !0
      });
      if (t.payload = e, window.dispatchEvent(t), !t.defaultPrevented) throw e
    }
    return r.then(t => {
      for (let e of t || []) e.status === `rejected` && i(e.reason);
      return e()
        .catch(i)
    })
  },
  Jt = Wt({
    history: ut(),
    routes: [{
      path: `/`,
      redirect: `/wishlist/`
    }, {
      path: `/wishlist/`,
      name: `Wishlist`,
      component: () => B(() => import(`./WishlistPage-Dn79gTxY.js`), __vite__mapDeps([0, 1, 2, 3]))
    }, {
      path: `/cart/`,
      name: `RedirectToCart`,
      component: () => B(() => import(`./RedirectToCart-DKw9c9Qz.js`), __vite__mapDeps([4, 1, 2]))
    }]
  }),
  Yt = function(e) {
    return e.DEV = `dev`, e.TEST = `test`, e.QA = `qa`, e.PROD = `prod`, e
  }({}),
  Xt = () => {
    let e = () => window?.__pca?.cfg?.env ?? window?.$pcaStage ?? null,
      t = () => {
        let e = window.location.hostname.toLowerCase();
        return e.startsWith(`dev.`) || e.startsWith(`localhost`) ? Yt.DEV : e.startsWith(`test.`) ? Yt.TEST : e.startsWith(`qa.`) ? Yt.QA : e.startsWith(`www.`) || e.startsWith(`lidl.`) ? Yt.PROD : null
      };
    return {
      getEnvironment: () => e() ?? t() ?? Yt.PROD
    }
  },
  Zt = e => {
    let t = null;
    if (document.cookie && document.cookie !== ``) {
      let n = document.cookie.split(`;`);
      for (let r of n)
        if (r = r.trim(), r.substring(0, e.length + 1) === `${e}=`) {
          t = decodeURIComponent(r.substring(e.length + 1)
            .replace(/\+/g, ` `));
          break
        }
    }
    return t
  },
  Qt = o(i(((e, t) => {
    var n = function(e) {
      return r(e) && !i(e)
    };

    function r(e) {
      return !!e && typeof e == `object`
    }

    function i(e) {
      var t = Object.prototype.toString.call(e);
      return t === `[object RegExp]` || t === `[object Date]` || o(e)
    }
    var a = typeof Symbol == `function` && Symbol.for ? Symbol.for(`react.element`) : 60103;

    function o(e) {
      return e.$$typeof === a
    }

    function s(e) {
      return Array.isArray(e) ? [] : {}
    }

    function c(e, t) {
      return t.clone !== !1 && t.isMergeableObject(e) ? g(s(e), e, t) : e
    }

    function l(e, t, n) {
      return e.concat(t)
        .map(function(e) {
          return c(e, n)
        })
    }

    function u(e, t) {
      if (!t.customMerge) return g;
      var n = t.customMerge(e);
      return typeof n == `function` ? n : g
    }

    function d(e) {
      return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e)
        .filter(function(t) {
          return Object.propertyIsEnumerable.call(e, t)
        }) : []
    }

    function f(e) {
      return Object.keys(e)
        .concat(d(e))
    }

    function p(e, t) {
      try {
        return t in e
      } catch {
        return !1
      }
    }

    function m(e, t) {
      return p(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
    }

    function h(e, t, n) {
      var r = {};
      return n.isMergeableObject(e) && f(e)
        .forEach(function(t) {
          r[t] = c(e[t], n)
        }), f(t)
        .forEach(function(i) {
          m(e, i) || (p(e, i) && n.isMergeableObject(t[i]) ? r[i] = u(i, n)(e[i], t[i], n) : r[i] = c(t[i], n))
        }), r
    }

    function g(e, t, r) {
      r ||= {}, r.arrayMerge = r.arrayMerge || l, r.isMergeableObject = r.isMergeableObject || n, r.cloneUnlessOtherwiseSpecified = c;
      var i = Array.isArray(t);
      return i === Array.isArray(e) ? i ? r.arrayMerge(e, t, r) : h(e, t, r) : c(t, r)
    }
    g.all = function(e, t) {
      if (!Array.isArray(e)) throw Error(`first argument should be an array`);
      return e.reduce(function(e, n) {
        return g(e, n, t)
      }, {})
    }, t.exports = g
  }))(), 1),
  $t = (e, t) => (0, Qt.default)(e, t),
  en = e => e == null ? !0 : typeof e != `object` || e.length > 0 ? !1 : e.length === 0 ? !0 : Object.keys(e)
  .length === 0 && e.constructor === Object,
  tn = `otc-mobile-checkout-parameters`,
  nn = () => {
    try {
      let e = Zt(tn);
      if (e) return JSON.parse(e)
    } catch (e) {
      console.error(`failed to get mobile parameters`, e)
    }
    return null
  },
  rn = () => {
    let e = nn();
    return e && e.salesChannel ? e.salesChannel : void 0
  },
  an = i((e => {
    e.byteLength = c, e.toByteArray = u, e.fromByteArray = p;
    for (var t = [], n = [], r = typeof Uint8Array < `u` ? Uint8Array : Array, i = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`, a = 0, o = i.length; a < o; ++a) t[a] = i[a], n[i.charCodeAt(a)] = a;
    n[45] = 62, n[95] = 63;

    function s(e) {
      var t = e.length;
      if (t % 4 > 0) throw Error(`Invalid string. Length must be a multiple of 4`);
      var n = e.indexOf(`=`);
      n === -1 && (n = t);
      var r = n === t ? 0 : 4 - n % 4;
      return [n, r]
    }

    function c(e) {
      var t = s(e),
        n = t[0],
        r = t[1];
      return (n + r) * 3 / 4 - r
    }

    function l(e, t, n) {
      return (t + n) * 3 / 4 - n
    }

    function u(e) {
      var t, i = s(e),
        a = i[0],
        o = i[1],
        c = new r(l(e, a, o)),
        u = 0,
        d = o > 0 ? a - 4 : a,
        f;
      for (f = 0; f < d; f += 4) t = n[e.charCodeAt(f)] << 18 | n[e.charCodeAt(f + 1)] << 12 | n[e.charCodeAt(f + 2)] << 6 | n[e.charCodeAt(f + 3)], c[u++] = t >> 16 & 255, c[u++] = t >> 8 & 255, c[u++] = t & 255;
      return o === 2 && (t = n[e.charCodeAt(f)] << 2 | n[e.charCodeAt(f + 1)] >> 4, c[u++] = t & 255), o === 1 && (t = n[e.charCodeAt(f)] << 10 | n[e.charCodeAt(f + 1)] << 4 | n[e.charCodeAt(f + 2)] >> 2, c[u++] = t >> 8 & 255, c[u++] = t & 255), c
    }

    function d(e) {
      return t[e >> 18 & 63] + t[e >> 12 & 63] + t[e >> 6 & 63] + t[e & 63]
    }

    function f(e, t, n) {
      for (var r, i = [], a = t; a < n; a += 3) r = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (e[a + 2] & 255), i.push(d(r));
      return i.join(``)
    }

    function p(e) {
      for (var n, r = e.length, i = r % 3, a = [], o = 16383, s = 0, c = r - i; s < c; s += o) a.push(f(e, s, s + o > c ? c : s + o));
      return i === 1 ? (n = e[r - 1], a.push(t[n >> 2] + t[n << 4 & 63] + `==`)) : i === 2 && (n = (e[r - 2] << 8) + e[r - 1], a.push(t[n >> 10] + t[n >> 4 & 63] + t[n << 2 & 63] + `=`)), a.join(``)
    }
  })),
  on = i((e => {
    e.read = function(e, t, n, r, i) {
      var a, o, s = i * 8 - r - 1,
        c = (1 << s) - 1,
        l = c >> 1,
        u = -7,
        d = n ? i - 1 : 0,
        f = n ? -1 : 1,
        p = e[t + d];
      for (d += f, a = p & (1 << -u) - 1, p >>= -u, u += s; u > 0; a = a * 256 + e[t + d], d += f, u -= 8);
      for (o = a & (1 << -u) - 1, a >>= -u, u += r; u > 0; o = o * 256 + e[t + d], d += f, u -= 8);
      if (a === 0) a = 1 - l;
      else if (a === c) return o ? NaN : (p ? -1 : 1) * (1 / 0);
      else o += 2 ** r, a -= l;
      return (p ? -1 : 1) * o * 2 ** (a - r)
    }, e.write = function(e, t, n, r, i, a) {
      var o, s, c, l = a * 8 - i - 1,
        u = (1 << l) - 1,
        d = u >> 1,
        f = i === 23 ? 2 ** -24 - 2 ** -77 : 0,
        p = r ? 0 : a - 1,
        m = r ? 1 : -1,
        h = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
      for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, o = u) : (o = Math.floor(Math.log(t) / Math.LN2), t * (c = 2 ** -o) < 1 && (o--, c *= 2), o + d >= 1 ? t += f / c : t += f * 2 ** (1 - d), t * c >= 2 && (o++, c /= 2), o + d >= u ? (s = 0, o = u) : o + d >= 1 ? (s = (t * c - 1) * 2 ** i, o += d) : (s = t * 2 ** (d - 1) * 2 ** i, o = 0)); i >= 8; e[n + p] = s & 255, p += m, s /= 256, i -= 8);
      for (o = o << i | s, l += i; l > 0; e[n + p] = o & 255, p += m, o /= 256, l -= 8);
      e[n + p - m] |= h * 128
    }
  })),
  sn = i((e => {
    var t = an(),
      n = on(),
      r = typeof Symbol == `function` && typeof Symbol.for == `function` ? Symbol.for(`nodejs.util.inspect.custom`) : null;
    e.Buffer = s, e.SlowBuffer = v, e.INSPECT_MAX_BYTES = 50;
    var i = 2147483647;
    e.kMaxLength = i, s.TYPED_ARRAY_SUPPORT = a(), !s.TYPED_ARRAY_SUPPORT && typeof console < `u` && typeof console.error == `function` && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");

    function a() {
      try {
        let e = new Uint8Array(1),
          t = {
            foo: function() {
              return 42
            }
          };
        return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), e.foo() === 42
      } catch {
        return !1
      }
    }
    Object.defineProperty(s.prototype, `parent`, {
      enumerable: !0,
      get: function() {
        if (s.isBuffer(this)) return this.buffer
      }
    }), Object.defineProperty(s.prototype, `offset`, {
      enumerable: !0,
      get: function() {
        if (s.isBuffer(this)) return this.byteOffset
      }
    });

    function o(e) {
      if (e > i) throw RangeError(`The value "` + e + `" is invalid for option "size"`);
      let t = new Uint8Array(e);
      return Object.setPrototypeOf(t, s.prototype), t
    }

    function s(e, t, n) {
      if (typeof e == `number`) {
        if (typeof t == `string`) throw TypeError(`The "string" argument must be of type string. Received type number`);
        return d(e)
      }
      return c(e, t, n)
    }
    s.poolSize = 8192;

    function c(e, t, n) {
      if (typeof e == `string`) return f(e, t);
      if (ArrayBuffer.isView(e)) return m(e);
      if (e == null) throw TypeError(`The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ` + typeof e);
      if (I(e, ArrayBuffer) || e && I(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < `u` && (I(e, SharedArrayBuffer) || e && I(e.buffer, SharedArrayBuffer))) return h(e, t, n);
      if (typeof e == `number`) throw TypeError(`The "value" argument must not be of type number. Received type number`);
      let r = e.valueOf && e.valueOf();
      if (r != null && r !== e) return s.from(r, t, n);
      let i = g(e);
      if (i) return i;
      if (typeof Symbol < `u` && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == `function`) return s.from(e[Symbol.toPrimitive](`string`), t, n);
      throw TypeError(`The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ` + typeof e)
    }
    s.from = function(e, t, n) {
      return c(e, t, n)
    }, Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array);

    function l(e) {
      if (typeof e != `number`) throw TypeError(`"size" argument must be of type number`);
      if (e < 0) throw RangeError(`The value "` + e + `" is invalid for option "size"`)
    }

    function u(e, t, n) {
      return l(e), e <= 0 || t === void 0 ? o(e) : typeof n == `string` ? o(e)
        .fill(t, n) : o(e)
        .fill(t)
    }
    s.alloc = function(e, t, n) {
      return u(e, t, n)
    };

    function d(e) {
      return l(e), o(e < 0 ? 0 : _(e) | 0)
    }
    s.allocUnsafe = function(e) {
      return d(e)
    }, s.allocUnsafeSlow = function(e) {
      return d(e)
    };

    function f(e, t) {
      if ((typeof t != `string` || t === ``) && (t = `utf8`), !s.isEncoding(t)) throw TypeError(`Unknown encoding: ` + t);
      let n = y(e, t) | 0,
        r = o(n),
        i = r.write(e, t);
      return i !== n && (r = r.slice(0, i)), r
    }

    function p(e) {
      let t = e.length < 0 ? 0 : _(e.length) | 0,
        n = o(t);
      for (let r = 0; r < t; r += 1) n[r] = e[r] & 255;
      return n
    }

    function m(e) {
      if (I(e, Uint8Array)) {
        let t = new Uint8Array(e);
        return h(t.buffer, t.byteOffset, t.byteLength)
      }
      return p(e)
    }

    function h(e, t, n) {
      if (t < 0 || e.byteLength < t) throw RangeError(`"offset" is outside of buffer bounds`);
      if (e.byteLength < t + (n || 0)) throw RangeError(`"length" is outside of buffer bounds`);
      let r;
      return r = t === void 0 && n === void 0 ? new Uint8Array(e) : n === void 0 ? new Uint8Array(e, t) : new Uint8Array(e, t, n), Object.setPrototypeOf(r, s.prototype), r
    }

    function g(e) {
      if (s.isBuffer(e)) {
        let t = _(e.length) | 0,
          n = o(t);
        return n.length === 0 || e.copy(n, 0, 0, t), n
      }
      if (e.length !== void 0) return typeof e.length != `number` || Se(e.length) ? o(0) : p(e);
      if (e.type === `Buffer` && Array.isArray(e.data)) return p(e.data)
    }

    function _(e) {
      if (e >= i) throw RangeError(`Attempt to allocate Buffer larger than maximum size: 0x` + i.toString(16) + ` bytes`);
      return e | 0
    }

    function v(e) {
      return +e != e && (e = 0), s.alloc(+e)
    }
    s.isBuffer = function(e) {
      return e != null && e._isBuffer === !0 && e !== s.prototype
    }, s.compare = function(e, t) {
      if (I(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), I(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw TypeError(`The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array`);
      if (e === t) return 0;
      let n = e.length,
        r = t.length;
      for (let i = 0, a = Math.min(n, r); i < a; ++i)
        if (e[i] !== t[i]) {
          n = e[i], r = t[i];
          break
        } return n < r ? -1 : r < n ? 1 : 0
    }, s.isEncoding = function(e) {
      switch (String(e)
        .toLowerCase()) {
        case `hex`:
        case `utf8`:
        case `utf-8`:
        case `ascii`:
        case `latin1`:
        case `binary`:
        case `base64`:
        case `ucs2`:
        case `ucs-2`:
        case `utf16le`:
        case `utf-16le`:
          return !0;
        default:
          return !1
      }
    }, s.concat = function(e, t) {
      if (!Array.isArray(e)) throw TypeError(`"list" argument must be an Array of Buffers`);
      if (e.length === 0) return s.alloc(0);
      let n;
      if (t === void 0)
        for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
      let r = s.allocUnsafe(t),
        i = 0;
      for (n = 0; n < e.length; ++n) {
        let t = e[n];
        if (I(t, Uint8Array)) i + t.length > r.length ? (s.isBuffer(t) || (t = s.from(t)), t.copy(r, i)) : Uint8Array.prototype.set.call(r, t, i);
        else if (s.isBuffer(t)) t.copy(r, i);
        else throw TypeError(`"list" argument must be an Array of Buffers`);
        i += t.length
      }
      return r
    };

    function y(e, t) {
      if (s.isBuffer(e)) return e.length;
      if (ArrayBuffer.isView(e) || I(e, ArrayBuffer)) return e.byteLength;
      if (typeof e != `string`) throw TypeError(`The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ` + typeof e);
      let n = e.length,
        r = arguments.length > 2 && arguments[2] === !0;
      if (!r && n === 0) return 0;
      let i = !1;
      for (;;) switch (t) {
        case `ascii`:
        case `latin1`:
        case `binary`:
          return n;
        case `utf8`:
        case `utf-8`:
          return _e(e)
            .length;
        case `ucs2`:
        case `ucs-2`:
        case `utf16le`:
        case `utf-16le`:
          return n * 2;
        case `hex`:
          return n >>> 1;
        case `base64`:
          return be(e)
            .length;
        default:
          if (i) return r ? -1 : _e(e)
            .length;
          t = (`` + t)
            .toLowerCase(), i = !0
      }
    }
    s.byteLength = y;

    function b(e, t, n) {
      let r = !1;
      if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((n === void 0 || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0, t >>>= 0, n <= t)) return ``;
      for (e ||= `utf8`;;) switch (e) {
        case `hex`:
          return O(this, t, n);
        case `utf8`:
        case `utf-8`:
          return D(this, t, n);
        case `ascii`:
          return ae(this, t, n);
        case `latin1`:
        case `binary`:
          return oe(this, t, n);
        case `base64`:
          return ne(this, t, n);
        case `ucs2`:
        case `ucs-2`:
        case `utf16le`:
        case `utf-16le`:
          return se(this, t, n);
        default:
          if (r) throw TypeError(`Unknown encoding: ` + e);
          e = (e + ``)
            .toLowerCase(), r = !0
      }
    }
    s.prototype._isBuffer = !0;

    function x(e, t, n) {
      let r = e[t];
      e[t] = e[n], e[n] = r
    }
    s.prototype.swap16 = function() {
      let e = this.length;
      if (e % 2 != 0) throw RangeError(`Buffer size must be a multiple of 16-bits`);
      for (let t = 0; t < e; t += 2) x(this, t, t + 1);
      return this
    }, s.prototype.swap32 = function() {
      let e = this.length;
      if (e % 4 != 0) throw RangeError(`Buffer size must be a multiple of 32-bits`);
      for (let t = 0; t < e; t += 4) x(this, t, t + 3), x(this, t + 1, t + 2);
      return this
    }, s.prototype.swap64 = function() {
      let e = this.length;
      if (e % 8 != 0) throw RangeError(`Buffer size must be a multiple of 64-bits`);
      for (let t = 0; t < e; t += 8) x(this, t, t + 7), x(this, t + 1, t + 6), x(this, t + 2, t + 5), x(this, t + 3, t + 4);
      return this
    }, s.prototype.toString = function() {
      let e = this.length;
      return e === 0 ? `` : arguments.length === 0 ? D(this, 0, e) : b.apply(this, arguments)
    }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
      if (!s.isBuffer(e)) throw TypeError(`Argument must be a Buffer`);
      return this === e ? !0 : s.compare(this, e) === 0
    }, s.prototype.inspect = function() {
      let t = ``,
        n = e.INSPECT_MAX_BYTES;
      return t = this.toString(`hex`, 0, n)
        .replace(/(.{2})/g, `$1 `)
        .trim(), this.length > n && (t += ` ... `), `<Buffer ` + t + `>`
    }, r && (s.prototype[r] = s.prototype.inspect), s.prototype.compare = function(e, t, n, r, i) {
      if (I(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw TypeError(`The "target" argument must be one of type Buffer or Uint8Array. Received type ` + typeof e);
      if (t === void 0 && (t = 0), n === void 0 && (n = e ? e.length : 0), r === void 0 && (r = 0), i === void 0 && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw RangeError(`out of range index`);
      if (r >= i && t >= n) return 0;
      if (r >= i) return -1;
      if (t >= n) return 1;
      if (t >>>= 0, n >>>= 0, r >>>= 0, i >>>= 0, this === e) return 0;
      let a = i - r,
        o = n - t,
        c = Math.min(a, o),
        l = this.slice(r, i),
        u = e.slice(t, n);
      for (let e = 0; e < c; ++e)
        if (l[e] !== u[e]) {
          a = l[e], o = u[e];
          break
        } return a < o ? -1 : o < a ? 1 : 0
    };

    function S(e, t, n, r, i) {
      if (e.length === 0) return -1;
      if (typeof n == `string` ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, Se(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
        if (i) return -1;
        n = e.length - 1
      } else if (n < 0)
        if (i) n = 0;
        else return -1;
      if (typeof t == `string` && (t = s.from(t, r)), s.isBuffer(t)) return t.length === 0 ? -1 : ee(e, t, n, r, i);
      if (typeof t == `number`) return t &= 255, typeof Uint8Array.prototype.indexOf == `function` ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : ee(e, [t], n, r, i);
      throw TypeError(`val must be string, number or Buffer`)
    }

    function ee(e, t, n, r, i) {
      let a = 1,
        o = e.length,
        s = t.length;
      if (r !== void 0 && (r = String(r)
          .toLowerCase(), r === `ucs2` || r === `ucs-2` || r === `utf16le` || r === `utf-16le`)) {
        if (e.length < 2 || t.length < 2) return -1;
        a = 2, o /= 2, s /= 2, n /= 2
      }

      function c(e, t) {
        return a === 1 ? e[t] : e.readUInt16BE(t * a)
      }
      let l;
      if (i) {
        let r = -1;
        for (l = n; l < o; l++)
          if (c(e, l) === c(t, r === -1 ? 0 : l - r)) {
            if (r === -1 && (r = l), l - r + 1 === s) return r * a
          } else r !== -1 && (l -= l - r), r = -1
      } else
        for (n + s > o && (n = o - s), l = n; l >= 0; l--) {
          let n = !0;
          for (let r = 0; r < s; r++)
            if (c(e, l + r) !== c(t, r)) {
              n = !1;
              break
            } if (n) return l
        }
      return -1
    }
    s.prototype.includes = function(e, t, n) {
      return this.indexOf(e, t, n) !== -1
    }, s.prototype.indexOf = function(e, t, n) {
      return S(this, e, t, n, !0)
    }, s.prototype.lastIndexOf = function(e, t, n) {
      return S(this, e, t, n, !1)
    };

    function C(e, t, n, r) {
      n = Number(n) || 0;
      let i = e.length - n;
      r ? (r = Number(r), r > i && (r = i)) : r = i;
      let a = t.length;
      r > a / 2 && (r = a / 2);
      let o;
      for (o = 0; o < r; ++o) {
        let r = parseInt(t.substr(o * 2, 2), 16);
        if (Se(r)) return o;
        e[n + o] = r
      }
      return o
    }

    function w(e, t, n, r) {
      return xe(_e(t, e.length - n), e, n, r)
    }

    function te(e, t, n, r) {
      return xe(ve(t), e, n, r)
    }

    function T(e, t, n, r) {
      return xe(be(t), e, n, r)
    }

    function E(e, t, n, r) {
      return xe(ye(t, e.length - n), e, n, r)
    }
    s.prototype.write = function(e, t, n, r) {
      if (t === void 0) r = `utf8`, n = this.length, t = 0;
      else if (n === void 0 && typeof t == `string`) r = t, n = this.length, t = 0;
      else if (isFinite(t)) t >>>= 0, isFinite(n) ? (n >>>= 0, r === void 0 && (r = `utf8`)) : (r = n, n = void 0);
      else throw Error(`Buffer.write(string, encoding, offset[, length]) is no longer supported`);
      let i = this.length - t;
      if ((n === void 0 || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw RangeError(`Attempt to write outside buffer bounds`);
      r ||= `utf8`;
      let a = !1;
      for (;;) switch (r) {
        case `hex`:
          return C(this, e, t, n);
        case `utf8`:
        case `utf-8`:
          return w(this, e, t, n);
        case `ascii`:
        case `latin1`:
        case `binary`:
          return te(this, e, t, n);
        case `base64`:
          return T(this, e, t, n);
        case `ucs2`:
        case `ucs-2`:
        case `utf16le`:
        case `utf-16le`:
          return E(this, e, t, n);
        default:
          if (a) throw TypeError(`Unknown encoding: ` + r);
          r = (`` + r)
            .toLowerCase(), a = !0
      }
    }, s.prototype.toJSON = function() {
      return {
        type: `Buffer`,
        data: Array.prototype.slice.call(this._arr || this, 0)
      }
    };

    function ne(e, n, r) {
      return n === 0 && r === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(n, r))
    }

    function D(e, t, n) {
      n = Math.min(e.length, n);
      let r = [],
        i = t;
      for (; i < n;) {
        let t = e[i],
          a = null,
          o = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
        if (i + o <= n) {
          let n, r, s, c;
          switch (o) {
            case 1:
              t < 128 && (a = t);
              break;
            case 2:
              n = e[i + 1], (n & 192) == 128 && (c = (t & 31) << 6 | n & 63, c > 127 && (a = c));
              break;
            case 3:
              n = e[i + 1], r = e[i + 2], (n & 192) == 128 && (r & 192) == 128 && (c = (t & 15) << 12 | (n & 63) << 6 | r & 63, c > 2047 && (c < 55296 || c > 57343) && (a = c));
              break;
            case 4:
              n = e[i + 1], r = e[i + 2], s = e[i + 3], (n & 192) == 128 && (r & 192) == 128 && (s & 192) == 128 && (c = (t & 15) << 18 | (n & 63) << 12 | (r & 63) << 6 | s & 63, c > 65535 && c < 1114112 && (a = c))
          }
        }
        a === null ? (a = 65533, o = 1) : a > 65535 && (a -= 65536, r.push(a >>> 10 & 1023 | 55296), a = 56320 | a & 1023), r.push(a), i += o
      }
      return ie(r)
    }
    var re = 4096;

    function ie(e) {
      let t = e.length;
      if (t <= re) return String.fromCharCode.apply(String, e);
      let n = ``,
        r = 0;
      for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += re));
      return n
    }

    function ae(e, t, n) {
      let r = ``;
      n = Math.min(e.length, n);
      for (let i = t; i < n; ++i) r += String.fromCharCode(e[i] & 127);
      return r
    }

    function oe(e, t, n) {
      let r = ``;
      n = Math.min(e.length, n);
      for (let i = t; i < n; ++i) r += String.fromCharCode(e[i]);
      return r
    }

    function O(e, t, n) {
      let r = e.length;
      (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
      let i = ``;
      for (let r = t; r < n; ++r) i += Ce[e[r]];
      return i
    }

    function se(e, t, n) {
      let r = e.slice(t, n),
        i = ``;
      for (let e = 0; e < r.length - 1; e += 2) i += String.fromCharCode(r[e] + r[e + 1] * 256);
      return i
    }
    s.prototype.slice = function(e, t) {
      let n = this.length;
      e = ~~e, t = t === void 0 ? n : ~~t, e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), t < e && (t = e);
      let r = this.subarray(e, t);
      return Object.setPrototypeOf(r, s.prototype), r
    };

    function k(e, t, n) {
      if (e % 1 != 0 || e < 0) throw RangeError(`offset is not uint`);
      if (e + t > n) throw RangeError(`Trying to access beyond buffer length`)
    }
    s.prototype.readUintLE = s.prototype.readUIntLE = function(e, t, n) {
      e >>>= 0, t >>>= 0, n || k(e, t, this.length);
      let r = this[e],
        i = 1,
        a = 0;
      for (; ++a < t && (i *= 256);) r += this[e + a] * i;
      return r
    }, s.prototype.readUintBE = s.prototype.readUIntBE = function(e, t, n) {
      e >>>= 0, t >>>= 0, n || k(e, t, this.length);
      let r = this[e + --t],
        i = 1;
      for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
      return r
    }, s.prototype.readUint8 = s.prototype.readUInt8 = function(e, t) {
      return e >>>= 0, t || k(e, 1, this.length), this[e]
    }, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(e, t) {
      return e >>>= 0, t || k(e, 2, this.length), this[e] | this[e + 1] << 8
    }, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(e, t) {
      return e >>>= 0, t || k(e, 2, this.length), this[e] << 8 | this[e + 1]
    }, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(e, t) {
      return e >>>= 0, t || k(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216
    }, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(e, t) {
      return e >>>= 0, t || k(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
    }, s.prototype.readBigUInt64LE = L(function(e) {
      e >>>= 0, P(e, `offset`);
      let t = this[e],
        n = this[e + 7];
      (t === void 0 || n === void 0) && he(e, this.length - 8);
      let r = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24,
        i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
      return BigInt(r) + (BigInt(i) << BigInt(32))
    }), s.prototype.readBigUInt64BE = L(function(e) {
      e >>>= 0, P(e, `offset`);
      let t = this[e],
        n = this[e + 7];
      (t === void 0 || n === void 0) && he(e, this.length - 8);
      let r = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e],
        i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
      return (BigInt(r) << BigInt(32)) + BigInt(i)
    }), s.prototype.readIntLE = function(e, t, n) {
      e >>>= 0, t >>>= 0, n || k(e, t, this.length);
      let r = this[e],
        i = 1,
        a = 0;
      for (; ++a < t && (i *= 256);) r += this[e + a] * i;
      return i *= 128, r >= i && (r -= 2 ** (8 * t)), r
    }, s.prototype.readIntBE = function(e, t, n) {
      e >>>= 0, t >>>= 0, n || k(e, t, this.length);
      let r = t,
        i = 1,
        a = this[e + --r];
      for (; r > 0 && (i *= 256);) a += this[e + --r] * i;
      return i *= 128, a >= i && (a -= 2 ** (8 * t)), a
    }, s.prototype.readInt8 = function(e, t) {
      return e >>>= 0, t || k(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e]
    }, s.prototype.readInt16LE = function(e, t) {
      e >>>= 0, t || k(e, 2, this.length);
      let n = this[e] | this[e + 1] << 8;
      return n & 32768 ? n | 4294901760 : n
    }, s.prototype.readInt16BE = function(e, t) {
      e >>>= 0, t || k(e, 2, this.length);
      let n = this[e + 1] | this[e] << 8;
      return n & 32768 ? n | 4294901760 : n
    }, s.prototype.readInt32LE = function(e, t) {
      return e >>>= 0, t || k(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
    }, s.prototype.readInt32BE = function(e, t) {
      return e >>>= 0, t || k(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
    }, s.prototype.readBigInt64LE = L(function(e) {
      e >>>= 0, P(e, `offset`);
      let t = this[e],
        n = this[e + 7];
      (t === void 0 || n === void 0) && he(e, this.length - 8);
      let r = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
      return (BigInt(r) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24)
    }), s.prototype.readBigInt64BE = L(function(e) {
      e >>>= 0, P(e, `offset`);
      let t = this[e],
        n = this[e + 7];
      (t === void 0 || n === void 0) && he(e, this.length - 8);
      let r = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
      return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n)
    }), s.prototype.readFloatLE = function(e, t) {
      return e >>>= 0, t || k(e, 4, this.length), n.read(this, e, !0, 23, 4)
    }, s.prototype.readFloatBE = function(e, t) {
      return e >>>= 0, t || k(e, 4, this.length), n.read(this, e, !1, 23, 4)
    }, s.prototype.readDoubleLE = function(e, t) {
      return e >>>= 0, t || k(e, 8, this.length), n.read(this, e, !0, 52, 8)
    }, s.prototype.readDoubleBE = function(e, t) {
      return e >>>= 0, t || k(e, 8, this.length), n.read(this, e, !1, 52, 8)
    };

    function A(e, t, n, r, i, a) {
      if (!s.isBuffer(e)) throw TypeError(`"buffer" argument must be a Buffer instance`);
      if (t > i || t < a) throw RangeError(`"value" argument is out of bounds`);
      if (n + r > e.length) throw RangeError(`Index out of range`)
    }
    s.prototype.writeUintLE = s.prototype.writeUIntLE = function(e, t, n, r) {
      if (e = +e, t >>>= 0, n >>>= 0, !r) {
        let r = 2 ** (8 * n) - 1;
        A(this, e, t, n, r, 0)
      }
      let i = 1,
        a = 0;
      for (this[t] = e & 255; ++a < n && (i *= 256);) this[t + a] = e / i & 255;
      return t + n
    }, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(e, t, n, r) {
      if (e = +e, t >>>= 0, n >>>= 0, !r) {
        let r = 2 ** (8 * n) - 1;
        A(this, e, t, n, r, 0)
      }
      let i = n - 1,
        a = 1;
      for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
      return t + n
    }, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(e, t, n) {
      return e = +e, t >>>= 0, n || A(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1
    }, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(e, t, n) {
      return e = +e, t >>>= 0, n || A(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2
    }, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(e, t, n) {
      return e = +e, t >>>= 0, n || A(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2
    }, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(e, t, n) {
      return e = +e, t >>>= 0, n || A(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4
    }, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(e, t, n) {
      return e = +e, t >>>= 0, n || A(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4
    };

    function j(e, t, n, r, i) {
      me(t, r, i, e, n, 7);
      let a = Number(t & BigInt(4294967295));
      e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a;
      let o = Number(t >> BigInt(32) & BigInt(4294967295));
      return e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, n
    }

    function ce(e, t, n, r, i) {
      me(t, r, i, e, n, 7);
      let a = Number(t & BigInt(4294967295));
      e[n + 7] = a, a >>= 8, e[n + 6] = a, a >>= 8, e[n + 5] = a, a >>= 8, e[n + 4] = a;
      let o = Number(t >> BigInt(32) & BigInt(4294967295));
      return e[n + 3] = o, o >>= 8, e[n + 2] = o, o >>= 8, e[n + 1] = o, o >>= 8, e[n] = o, n + 8
    }
    s.prototype.writeBigUInt64LE = L(function(e, t = 0) {
      return j(this, e, t, BigInt(0), BigInt(`0xffffffffffffffff`))
    }), s.prototype.writeBigUInt64BE = L(function(e, t = 0) {
      return ce(this, e, t, BigInt(0), BigInt(`0xffffffffffffffff`))
    }), s.prototype.writeIntLE = function(e, t, n, r) {
      if (e = +e, t >>>= 0, !r) {
        let r = 2 ** (8 * n - 1);
        A(this, e, t, n, r - 1, -r)
      }
      let i = 0,
        a = 1,
        o = 0;
      for (this[t] = e & 255; ++i < n && (a *= 256);) e < 0 && o === 0 && this[t + i - 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
      return t + n
    }, s.prototype.writeIntBE = function(e, t, n, r) {
      if (e = +e, t >>>= 0, !r) {
        let r = 2 ** (8 * n - 1);
        A(this, e, t, n, r - 1, -r)
      }
      let i = n - 1,
        a = 1,
        o = 0;
      for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) e < 0 && o === 0 && this[t + i + 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
      return t + n
    }, s.prototype.writeInt8 = function(e, t, n) {
      return e = +e, t >>>= 0, n || A(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1
    }, s.prototype.writeInt16LE = function(e, t, n) {
      return e = +e, t >>>= 0, n || A(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2
    }, s.prototype.writeInt16BE = function(e, t, n) {
      return e = +e, t >>>= 0, n || A(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2
    }, s.prototype.writeInt32LE = function(e, t, n) {
      return e = +e, t >>>= 0, n || A(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
    }, s.prototype.writeInt32BE = function(e, t, n) {
      return e = +e, t >>>= 0, n || A(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4
    }, s.prototype.writeBigInt64LE = L(function(e, t = 0) {
      return j(this, e, t, -BigInt(`0x8000000000000000`), BigInt(`0x7fffffffffffffff`))
    }), s.prototype.writeBigInt64BE = L(function(e, t = 0) {
      return ce(this, e, t, -BigInt(`0x8000000000000000`), BigInt(`0x7fffffffffffffff`))
    });

    function M(e, t, n, r, i, a) {
      if (n + r > e.length || n < 0) throw RangeError(`Index out of range`)
    }

    function le(e, t, r, i, a) {
      return t = +t, r >>>= 0, a || M(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), n.write(e, t, r, i, 23, 4), r + 4
    }
    s.prototype.writeFloatLE = function(e, t, n) {
      return le(this, e, t, !0, n)
    }, s.prototype.writeFloatBE = function(e, t, n) {
      return le(this, e, t, !1, n)
    };

    function ue(e, t, r, i, a) {
      return t = +t, r >>>= 0, a || M(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), n.write(e, t, r, i, 52, 8), r + 8
    }
    s.prototype.writeDoubleLE = function(e, t, n) {
      return ue(this, e, t, !0, n)
    }, s.prototype.writeDoubleBE = function(e, t, n) {
      return ue(this, e, t, !1, n)
    }, s.prototype.copy = function(e, t, n, r) {
      if (!s.isBuffer(e)) throw TypeError(`argument should be a Buffer`);
      if (n ||= 0, !r && r !== 0 && (r = this.length), t >= e.length && (t = e.length), t ||= 0, r > 0 && r < n && (r = n), r === n || e.length === 0 || this.length === 0) return 0;
      if (t < 0) throw RangeError(`targetStart out of bounds`);
      if (n < 0 || n >= this.length) throw RangeError(`Index out of range`);
      if (r < 0) throw RangeError(`sourceEnd out of bounds`);
      r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
      let i = r - n;
      return this === e && typeof Uint8Array.prototype.copyWithin == `function` ? this.copyWithin(t, n, r) : Uint8Array.prototype.set.call(e, this.subarray(n, r), t), i
    }, s.prototype.fill = function(e, t, n, r) {
      if (typeof e == `string`) {
        if (typeof t == `string` ? (r = t, t = 0, n = this.length) : typeof n == `string` && (r = n, n = this.length), r !== void 0 && typeof r != `string`) throw TypeError(`encoding must be a string`);
        if (typeof r == `string` && !s.isEncoding(r)) throw TypeError(`Unknown encoding: ` + r);
        if (e.length === 1) {
          let t = e.charCodeAt(0);
          (r === `utf8` && t < 128 || r === `latin1`) && (e = t)
        }
      } else typeof e == `number` ? e &= 255 : typeof e == `boolean` && (e = Number(e));
      if (t < 0 || this.length < t || this.length < n) throw RangeError(`Out of range index`);
      if (n <= t) return this;
      t >>>= 0, n = n === void 0 ? this.length : n >>> 0, e ||= 0;
      let i;
      if (typeof e == `number`)
        for (i = t; i < n; ++i) this[i] = e;
      else {
        let a = s.isBuffer(e) ? e : s.from(e, r),
          o = a.length;
        if (o === 0) throw TypeError(`The value "` + e + `" is invalid for argument "value"`);
        for (i = 0; i < n - t; ++i) this[i + t] = a[i % o]
      }
      return this
    };
    var N = {};

    function de(e, t, n) {
      N[e] = class extends n {
        constructor() {
          super(), Object.defineProperty(this, `message`, {
            value: t.apply(this, arguments),
            writable: !0,
            configurable: !0
          }), this.name = `${this.name} [${e}]`, this.stack, delete this.name
        }
        get code() {
          return e
        }
        set code(e) {
          Object.defineProperty(this, `code`, {
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
    de(`ERR_BUFFER_OUT_OF_BOUNDS`, function(e) {
      return e ? `${e} is outside of buffer bounds` : `Attempt to access memory outside buffer bounds`
    }, RangeError), de(`ERR_INVALID_ARG_TYPE`, function(e, t) {
      return `The "${e}" argument must be of type number. Received type ${typeof t}`
    }, TypeError), de(`ERR_OUT_OF_RANGE`, function(e, t, n) {
      let r = `The value of "${e}" is out of range.`,
        i = n;
      return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = fe(String(n)) : typeof n == `bigint` && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = fe(i)), i += `n`), r += ` It must be ${t}. Received ${i}`, r
    }, RangeError);

    function fe(e) {
      let t = ``,
        n = e.length,
        r = e[0] === `-` ? 1 : 0;
      for (; n >= r + 4; n -= 3) t = `_${e.slice(n-3,n)}${t}`;
      return `${e.slice(0,n)}${t}`
    }

    function pe(e, t, n) {
      P(t, `offset`), (e[t] === void 0 || e[t + n] === void 0) && he(t, e.length - (n + 1))
    }

    function me(e, t, n, r, i, a) {
      if (e > n || e < t) {
        let r = typeof t == `bigint` ? `n` : ``,
          i;
        throw i = a > 3 ? t === 0 || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${(a+1)*8}${r}` : `>= -(2${r} ** ${(a+1)*8-1}${r}) and < 2 ** ${(a+1)*8-1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new N.ERR_OUT_OF_RANGE(`value`, i, e)
      }
      pe(r, i, a)
    }

    function P(e, t) {
      if (typeof e != `number`) throw new N.ERR_INVALID_ARG_TYPE(t, `number`, e)
    }

    function he(e, t, n) {
      throw Math.floor(e) === e ? t < 0 ? new N.ERR_BUFFER_OUT_OF_BOUNDS : new N.ERR_OUT_OF_RANGE(n || `offset`, `>= ${n?1:0} and <= ${t}`, e) : (P(e, n), new N.ERR_OUT_OF_RANGE(n || `offset`, `an integer`, e))
    }
    var F = /[^+/0-9A-Za-z-_]/g;

    function ge(e) {
      if (e = e.split(`=`)[0], e = e.trim()
        .replace(F, ``), e.length < 2) return ``;
      for (; e.length % 4 != 0;) e += `=`;
      return e
    }

    function _e(e, t) {
      t ||= 1 / 0;
      let n, r = e.length,
        i = null,
        a = [];
      for (let o = 0; o < r; ++o) {
        if (n = e.charCodeAt(o), n > 55295 && n < 57344) {
          if (!i) {
            if (n > 56319) {
              (t -= 3) > -1 && a.push(239, 191, 189);
              continue
            } else if (o + 1 === r) {
              (t -= 3) > -1 && a.push(239, 191, 189);
              continue
            }
            i = n;
            continue
          }
          if (n < 56320) {
            (t -= 3) > -1 && a.push(239, 191, 189), i = n;
            continue
          }
          n = (i - 55296 << 10 | n - 56320) + 65536
        } else i && (t -= 3) > -1 && a.push(239, 191, 189);
        if (i = null, n < 128) {
          if (--t < 0) break;
          a.push(n)
        } else if (n < 2048) {
          if ((t -= 2) < 0) break;
          a.push(n >> 6 | 192, n & 63 | 128)
        } else if (n < 65536) {
          if ((t -= 3) < 0) break;
          a.push(n >> 12 | 224, n >> 6 & 63 | 128, n & 63 | 128)
        } else if (n < 1114112) {
          if ((t -= 4) < 0) break;
          a.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, n & 63 | 128)
        } else throw Error(`Invalid code point`)
      }
      return a
    }

    function ve(e) {
      let t = [];
      for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n) & 255);
      return t
    }

    function ye(e, t) {
      let n, r, i, a = [];
      for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);
      return a
    }

    function be(e) {
      return t.toByteArray(ge(e))
    }

    function xe(e, t, n, r) {
      let i;
      for (i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
      return i
    }

    function I(e, t) {
      return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name
    }

    function Se(e) {
      return e !== e
    }
    var Ce = (function() {
      let e = `0123456789abcdef`,
        t = Array(256);
      for (let n = 0; n < 16; ++n) {
        let r = n * 16;
        for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i]
      }
      return t
    })();

    function L(e) {
      return typeof BigInt > `u` ? we : e
    }

    function we() {
      throw Error(`BigInt not supported`)
    }
  }));
sn();
var {
  entries: cn,
  setPrototypeOf: ln,
  isFrozen: un,
  getPrototypeOf: dn,
  getOwnPropertyDescriptor: fn
} = Object, {
  freeze: pn,
  seal: mn,
  create: hn
} = Object, {
  apply: gn,
  construct: _n
} = typeof Reflect < `u` && Reflect;
pn ||= function(e) {
  return e
}, mn ||= function(e) {
  return e
}, gn ||= function(e, t) {
  var n = [...arguments].slice(2);
  return e.apply(t, n)
}, _n ||= function(e) {
  return new e(...[...arguments].slice(1))
};
var vn = Mn(Array.prototype.forEach),
  yn = Mn(Array.prototype.lastIndexOf),
  bn = Mn(Array.prototype.pop),
  xn = Mn(Array.prototype.push),
  Sn = Mn(Array.prototype.splice),
  Cn = Mn(String.prototype.toLowerCase),
  wn = Mn(String.prototype.toString),
  Tn = Mn(String.prototype.match),
  En = Mn(String.prototype.replace),
  Dn = Mn(String.prototype.indexOf),
  On = Mn(String.prototype.trim),
  kn = Mn(Object.prototype.hasOwnProperty),
  An = Mn(RegExp.prototype.test),
  jn = Nn(TypeError);

function Mn(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    var n = [...arguments].slice(1);
    return gn(e, t, n)
  }
}

function Nn(e) {
  return function() {
    return _n(e, [...arguments])
  }
}

function V(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Cn;
  ln && ln(e, null);
  let r = t.length;
  for (; r--;) {
    let i = t[r];
    if (typeof i == `string`) {
      let e = n(i);
      e !== i && (un(t) || (t[r] = e), i = e)
    }
    e[i] = !0
  }
  return e
}

function Pn(e) {
  for (let t = 0; t < e.length; t++) kn(e, t) || (e[t] = null);
  return e
}

function Fn(e) {
  let t = hn(null);
  for (let [n, r] of cn(e)) kn(e, n) && (Array.isArray(r) ? t[n] = Pn(r) : r && typeof r == `object` && r.constructor === Object ? t[n] = Fn(r) : t[n] = r);
  return t
}

function In(e, t) {
  for (; e !== null;) {
    let n = fn(e, t);
    if (n) {
      if (n.get) return Mn(n.get);
      if (typeof n.value == `function`) return Mn(n.value)
    }
    e = dn(e)
  }

  function n() {
    return null
  }
  return n
}
var Ln = pn(`a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr`.split(`.`)),
  Rn = pn(`svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern`.split(`.`)),
  zn = pn([`feBlend`, `feColorMatrix`, `feComponentTransfer`, `feComposite`, `feConvolveMatrix`, `feDiffuseLighting`, `feDisplacementMap`, `feDistantLight`, `feDropShadow`, `feFlood`, `feFuncA`, `feFuncB`, `feFuncG`, `feFuncR`, `feGaussianBlur`, `feImage`, `feMerge`, `feMergeNode`, `feMorphology`, `feOffset`, `fePointLight`, `feSpecularLighting`, `feSpotLight`, `feTile`, `feTurbulence`]),
  Bn = pn([`animate`, `color-profile`, `cursor`, `discard`, `font-face`, `font-face-format`, `font-face-name`, `font-face-src`, `font-face-uri`, `foreignobject`, `hatch`, `hatchpath`, `mesh`, `meshgradient`, `meshpatch`, `meshrow`, `missing-glyph`, `script`, `set`, `solidcolor`, `unknown`, `use`]),
  Vn = pn(`math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts`.split(`.`)),
  Hn = pn([`maction`, `maligngroup`, `malignmark`, `mlongdiv`, `mscarries`, `mscarry`, `msgroup`, `mstack`, `msline`, `msrow`, `semantics`, `annotation`, `annotation-xml`, `mprescripts`, `none`]),
  Un = pn([`#text`]),
  Wn = pn(`accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns.slot`.split(`.`)),
  Gn = pn(`accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-rendering.textlength.type.u1.u2.unicode.values.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan`.split(`.`)),
  Kn = pn(`accent.accentunder.align.bevelled.close.columnsalign.columnlines.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lspace.lquote.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns`.split(`.`)),
  qn = pn([`xlink:href`, `xml:id`, `xlink:title`, `xml:space`, `xmlns:xlink`]),
  Jn = mn(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
  Yn = mn(/<%[\w\W]*|[\w\W]*%>/gm),
  Xn = mn(/\$\{[\w\W]*/gm),
  Zn = mn(/^data-[\-\w.\u00B7-\uFFFF]+$/),
  Qn = mn(/^aria-[\-\w]+$/),
  $n = mn(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
  er = mn(/^(?:\w+script|data):/i),
  tr = mn(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
  nr = mn(/^html$/i),
  rr = mn(/^[a-z][.\w]*(-[.\w]+)+$/i),
  ir = Object.freeze({
    __proto__: null,
    ARIA_ATTR: Qn,
    ATTR_WHITESPACE: tr,
    CUSTOM_ELEMENT: rr,
    DATA_ATTR: Zn,
    DOCTYPE_NAME: nr,
    ERB_EXPR: Yn,
    IS_ALLOWED_URI: $n,
    IS_SCRIPT_OR_DATA: er,
    MUSTACHE_EXPR: Jn,
    TMPLIT_EXPR: Xn
  }),
  ar = {
    element: 1,
    attribute: 2,
    text: 3,
    cdataSection: 4,
    entityReference: 5,
    entityNode: 6,
    progressingInstruction: 7,
    comment: 8,
    document: 9,
    documentType: 10,
    documentFragment: 11,
    notation: 12
  },
  or = function() {
    return typeof window > `u` ? null : window
  },
  sr = function(e, t) {
    if (typeof e != `object` || typeof e.createPolicy != `function`) return null;
    let n = null,
      r = `data-tt-policy-suffix`;
    t && t.hasAttribute(r) && (n = t.getAttribute(r));
    let i = `dompurify` + (n ? `#` + n : ``);
    try {
      return e.createPolicy(i, {
        createHTML(e) {
          return e
        },
        createScriptURL(e) {
          return e
        }
      })
    } catch {
      return console.warn(`TrustedTypes policy ` + i + ` could not be created.`), null
    }
  },
  cr = function() {
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

function lr() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : or(),
    t = e => lr(e);
  if (t.version = `3.3.3`, t.removed = [], !e || !e.document || e.document.nodeType !== ar.document || !e.Element) return t.isSupported = !1, t;
  let {
    document: n
  } = e, r = n, i = r.currentScript, {
    DocumentFragment: a,
    HTMLTemplateElement: o,
    Node: s,
    Element: c,
    NodeFilter: l,
    NamedNodeMap: u = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: d,
    DOMParser: f,
    trustedTypes: p
  } = e, m = c.prototype, h = In(m, `cloneNode`), g = In(m, `remove`), _ = In(m, `nextSibling`), v = In(m, `childNodes`), y = In(m, `parentNode`);
  if (typeof o == `function`) {
    let e = n.createElement(`template`);
    e.content && e.content.ownerDocument && (n = e.content.ownerDocument)
  }
  let b, x = ``,
    {
      implementation: S,
      createNodeIterator: ee,
      createDocumentFragment: C,
      getElementsByTagName: w
    } = n,
    {
      importNode: te
    } = r,
    T = cr();
  t.isSupported = typeof cn == `function` && typeof y == `function` && S && S.createHTMLDocument !== void 0;
  let {
    MUSTACHE_EXPR: E,
    ERB_EXPR: ne,
    TMPLIT_EXPR: D,
    DATA_ATTR: re,
    ARIA_ATTR: ie,
    IS_SCRIPT_OR_DATA: ae,
    ATTR_WHITESPACE: oe,
    CUSTOM_ELEMENT: O
  } = ir, {
    IS_ALLOWED_URI: se
  } = ir, k = null, A = V({}, [...Ln, ...Rn, ...zn, ...Vn, ...Un]), j = null, ce = V({}, [...Wn, ...Gn, ...Kn, ...qn]), M = Object.seal(hn(null, {
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
  })), le = null, ue = null, N = Object.seal(hn(null, {
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
  })), de = !0, fe = !0, pe = !1, me = !0, P = !1, he = !0, F = !1, ge = !1, _e = !1, ve = !1, ye = !1, be = !1, xe = !0, I = !1, Se = !0, Ce = !1, L = {}, we = null, Te = V({}, [`annotation-xml`, `audio`, `colgroup`, `desc`, `foreignobject`, `head`, `iframe`, `math`, `mi`, `mn`, `mo`, `ms`, `mtext`, `noembed`, `noframes`, `noscript`, `plaintext`, `script`, `style`, `svg`, `template`, `thead`, `title`, `video`, `xmp`]), Ee = null, De = V({}, [`audio`, `video`, `img`, `source`, `image`, `track`]), Oe = null, ke = V({}, [`alt`, `class`, `for`, `id`, `label`, `name`, `pattern`, `placeholder`, `role`, `summary`, `title`, `value`, `style`, `xmlns`]), Ae = `http://www.w3.org/1998/Math/MathML`, je = `http://www.w3.org/2000/svg`, Me = `http://www.w3.org/1999/xhtml`, Ne = Me, Pe = !1, Fe = null, Ie = V({}, [Ae, je, Me], wn), Le = V({}, [`mi`, `mo`, `mn`, `ms`, `mtext`]), Re = V({}, [`annotation-xml`]), ze = V({}, [`title`, `style`, `font`, `a`, `script`]), Be = null, Ve = [`application/xhtml+xml`, `text/html`], R = null, He = null, Ue = n.createElement(`form`), We = function(e) {
    return e instanceof RegExp || e instanceof Function
  }, Ge = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(He && He === e)) {
      if ((!e || typeof e != `object`) && (e = {}), e = Fn(e), Be = Ve.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? `text/html` : e.PARSER_MEDIA_TYPE, R = Be === `application/xhtml+xml` ? wn : Cn, k = kn(e, `ALLOWED_TAGS`) ? V({}, e.ALLOWED_TAGS, R) : A, j = kn(e, `ALLOWED_ATTR`) ? V({}, e.ALLOWED_ATTR, R) : ce, Fe = kn(e, `ALLOWED_NAMESPACES`) ? V({}, e.ALLOWED_NAMESPACES, wn) : Ie, Oe = kn(e, `ADD_URI_SAFE_ATTR`) ? V(Fn(ke), e.ADD_URI_SAFE_ATTR, R) : ke, Ee = kn(e, `ADD_DATA_URI_TAGS`) ? V(Fn(De), e.ADD_DATA_URI_TAGS, R) : De, we = kn(e, `FORBID_CONTENTS`) ? V({}, e.FORBID_CONTENTS, R) : Te, le = kn(e, `FORBID_TAGS`) ? V({}, e.FORBID_TAGS, R) : Fn({}), ue = kn(e, `FORBID_ATTR`) ? V({}, e.FORBID_ATTR, R) : Fn({}), L = kn(e, `USE_PROFILES`) ? e.USE_PROFILES : !1, de = e.ALLOW_ARIA_ATTR !== !1, fe = e.ALLOW_DATA_ATTR !== !1, pe = e.ALLOW_UNKNOWN_PROTOCOLS || !1, me = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, P = e.SAFE_FOR_TEMPLATES || !1, he = e.SAFE_FOR_XML !== !1, F = e.WHOLE_DOCUMENT || !1, ve = e.RETURN_DOM || !1, ye = e.RETURN_DOM_FRAGMENT || !1, be = e.RETURN_TRUSTED_TYPE || !1, _e = e.FORCE_BODY || !1, xe = e.SANITIZE_DOM !== !1, I = e.SANITIZE_NAMED_PROPS || !1, Se = e.KEEP_CONTENT !== !1, Ce = e.IN_PLACE || !1, se = e.ALLOWED_URI_REGEXP || $n, Ne = e.NAMESPACE || Me, Le = e.MATHML_TEXT_INTEGRATION_POINTS || Le, Re = e.HTML_INTEGRATION_POINTS || Re, M = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && We(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (M.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && We(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (M.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == `boolean` && (M.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), P && (fe = !1), ye && (ve = !0), L && (k = V({}, Un), j = hn(null), L.html === !0 && (V(k, Ln), V(j, Wn)), L.svg === !0 && (V(k, Rn), V(j, Gn), V(j, qn)), L.svgFilters === !0 && (V(k, zn), V(j, Gn), V(j, qn)), L.mathMl === !0 && (V(k, Vn), V(j, Kn), V(j, qn))), kn(e, `ADD_TAGS`) || (N.tagCheck = null), kn(e, `ADD_ATTR`) || (N.attributeCheck = null), e.ADD_TAGS && (typeof e.ADD_TAGS == `function` ? N.tagCheck = e.ADD_TAGS : (k === A && (k = Fn(k)), V(k, e.ADD_TAGS, R))), e.ADD_ATTR && (typeof e.ADD_ATTR == `function` ? N.attributeCheck = e.ADD_ATTR : (j === ce && (j = Fn(j)), V(j, e.ADD_ATTR, R))), e.ADD_URI_SAFE_ATTR && V(Oe, e.ADD_URI_SAFE_ATTR, R), e.FORBID_CONTENTS && (we === Te && (we = Fn(we)), V(we, e.FORBID_CONTENTS, R)), e.ADD_FORBID_CONTENTS && (we === Te && (we = Fn(we)), V(we, e.ADD_FORBID_CONTENTS, R)), Se && (k[`#text`] = !0), F && V(k, [`html`, `head`, `body`]), k.table && (V(k, [`tbody`]), delete le.tbody), e.TRUSTED_TYPES_POLICY) {
        if (typeof e.TRUSTED_TYPES_POLICY.createHTML != `function`) throw jn(`TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.`);
        if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != `function`) throw jn(`TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.`);
        b = e.TRUSTED_TYPES_POLICY, x = b.createHTML(``)
      } else b === void 0 && (b = sr(p, i)), b !== null && typeof x == `string` && (x = b.createHTML(``));
      pn && pn(e), He = e
    }
  }, Ke = V({}, [...Rn, ...zn, ...Bn]), qe = V({}, [...Vn, ...Hn]), Je = function(e) {
    let t = y(e);
    (!t || !t.tagName) && (t = {
      namespaceURI: Ne,
      tagName: `template`
    });
    let n = Cn(e.tagName),
      r = Cn(t.tagName);
    return Fe[e.namespaceURI] ? e.namespaceURI === je ? t.namespaceURI === Me ? n === `svg` : t.namespaceURI === Ae ? n === `svg` && (r === `annotation-xml` || Le[r]) : !!Ke[n] : e.namespaceURI === Ae ? t.namespaceURI === Me ? n === `math` : t.namespaceURI === je ? n === `math` && Re[r] : !!qe[n] : e.namespaceURI === Me ? t.namespaceURI === je && !Re[r] || t.namespaceURI === Ae && !Le[r] ? !1 : !qe[n] && (ze[n] || !Ke[n]) : !!(Be === `application/xhtml+xml` && Fe[e.namespaceURI]) : !1
  }, Ye = function(e) {
    xn(t.removed, {
      element: e
    });
    try {
      y(e)
        .removeChild(e)
    } catch {
      g(e)
    }
  }, Xe = function(e, n) {
    try {
      xn(t.removed, {
        attribute: n.getAttributeNode(e),
        from: n
      })
    } catch {
      xn(t.removed, {
        attribute: null,
        from: n
      })
    }
    if (n.removeAttribute(e), e === `is`)
      if (ve || ye) try {
        Ye(n)
      } catch {} else try {
        n.setAttribute(e, ``)
      } catch {}
  }, Ze = function(e) {
    let t = null,
      r = null;
    if (_e) e = `<remove></remove>` + e;
    else {
      let t = Tn(e, /^[\r\n\t ]+/);
      r = t && t[0]
    }
    Be === `application/xhtml+xml` && Ne === Me && (e = `<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>` + e + `</body></html>`);
    let i = b ? b.createHTML(e) : e;
    if (Ne === Me) try {
      t = new f()
        .parseFromString(i, Be)
    } catch {}
    if (!t || !t.documentElement) {
      t = S.createDocument(Ne, `template`, null);
      try {
        t.documentElement.innerHTML = Pe ? x : i
      } catch {}
    }
    let a = t.body || t.documentElement;
    return e && r && a.insertBefore(n.createTextNode(r), a.childNodes[0] || null), Ne === Me ? w.call(t, F ? `html` : `body`)[0] : F ? t.documentElement : a
  }, Qe = function(e) {
    return ee.call(e.ownerDocument || e, e, l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION, null)
  }, $e = function(e) {
    return e instanceof d && (typeof e.nodeName != `string` || typeof e.textContent != `string` || typeof e.removeChild != `function` || !(e.attributes instanceof u) || typeof e.removeAttribute != `function` || typeof e.setAttribute != `function` || typeof e.namespaceURI != `string` || typeof e.insertBefore != `function` || typeof e.hasChildNodes != `function`)
  }, et = function(e) {
    return typeof s == `function` && e instanceof s
  };

  function tt(e, n, r) {
    vn(e, e => {
      e.call(t, n, r, He)
    })
  }
  let nt = function(e) {
      let n = null;
      if (tt(T.beforeSanitizeElements, e, null), $e(e)) return Ye(e), !0;
      let r = R(e.nodeName);
      if (tt(T.uponSanitizeElement, e, {
          tagName: r,
          allowedTags: k
        }), he && e.hasChildNodes() && !et(e.firstElementChild) && An(/<[/\w!]/g, e.innerHTML) && An(/<[/\w!]/g, e.textContent) || e.nodeType === ar.progressingInstruction || he && e.nodeType === ar.comment && An(/<[/\w]/g, e.data)) return Ye(e), !0;
      if (!(N.tagCheck instanceof Function && N.tagCheck(r)) && (!k[r] || le[r])) {
        if (!le[r] && it(r) && (M.tagNameCheck instanceof RegExp && An(M.tagNameCheck, r) || M.tagNameCheck instanceof Function && M.tagNameCheck(r))) return !1;
        if (Se && !we[r]) {
          let t = y(e) || e.parentNode,
            n = v(e) || e.childNodes;
          if (n && t) {
            let r = n.length;
            for (let i = r - 1; i >= 0; --i) {
              let r = h(n[i], !0);
              r.__removalCount = (e.__removalCount || 0) + 1, t.insertBefore(r, _(e))
            }
          }
        }
        return Ye(e), !0
      }
      return e instanceof c && !Je(e) || (r === `noscript` || r === `noembed` || r === `noframes`) && An(/<\/no(script|embed|frames)/i, e.innerHTML) ? (Ye(e), !0) : (P && e.nodeType === ar.text && (n = e.textContent, vn([E, ne, D], e => {
        n = En(n, e, ` `)
      }), e.textContent !== n && (xn(t.removed, {
        element: e.cloneNode()
      }), e.textContent = n)), tt(T.afterSanitizeElements, e, null), !1)
    },
    rt = function(e, t, r) {
      if (ue[t] || xe && (t === `id` || t === `name`) && (r in n || r in Ue)) return !1;
      if (!(fe && !ue[t] && An(re, t)) && !(de && An(ie, t)) && !(N.attributeCheck instanceof Function && N.attributeCheck(t, e))) {
        if (!j[t] || ue[t]) {
          if (!(it(e) && (M.tagNameCheck instanceof RegExp && An(M.tagNameCheck, e) || M.tagNameCheck instanceof Function && M.tagNameCheck(e)) && (M.attributeNameCheck instanceof RegExp && An(M.attributeNameCheck, t) || M.attributeNameCheck instanceof Function && M.attributeNameCheck(t, e)) || t === `is` && M.allowCustomizedBuiltInElements && (M.tagNameCheck instanceof RegExp && An(M.tagNameCheck, r) || M.tagNameCheck instanceof Function && M.tagNameCheck(r)))) return !1
        } else if (!Oe[t] && !An(se, En(r, oe, ``)) && !((t === `src` || t === `xlink:href` || t === `href`) && e !== `script` && Dn(r, `data:`) === 0 && Ee[e]) && !(pe && !An(ae, En(r, oe, ``))) && r) return !1
      }
      return !0
    },
    it = function(e) {
      return e !== `annotation-xml` && Tn(e, O)
    },
    at = function(e) {
      tt(T.beforeSanitizeAttributes, e, null);
      let {
        attributes: n
      } = e;
      if (!n || $e(e)) return;
      let r = {
          attrName: ``,
          attrValue: ``,
          keepAttr: !0,
          allowedAttributes: j,
          forceKeepAttr: void 0
        },
        i = n.length;
      for (; i--;) {
        let {
          name: a,
          namespaceURI: o,
          value: s
        } = n[i], c = R(a), l = s, u = a === `value` ? l : On(l);
        if (r.attrName = c, r.attrValue = u, r.keepAttr = !0, r.forceKeepAttr = void 0, tt(T.uponSanitizeAttribute, e, r), u = r.attrValue, I && (c === `id` || c === `name`) && (Xe(a, e), u = `user-content-` + u), he && An(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, u)) {
          Xe(a, e);
          continue
        }
        if (c === `attributename` && Tn(u, `href`)) {
          Xe(a, e);
          continue
        }
        if (r.forceKeepAttr) continue;
        if (!r.keepAttr) {
          Xe(a, e);
          continue
        }
        if (!me && An(/\/>/i, u)) {
          Xe(a, e);
          continue
        }
        P && vn([E, ne, D], e => {
          u = En(u, e, ` `)
        });
        let d = R(e.nodeName);
        if (!rt(d, c, u)) {
          Xe(a, e);
          continue
        }
        if (b && typeof p == `object` && typeof p.getAttributeType == `function` && !o) switch (p.getAttributeType(d, c)) {
          case `TrustedHTML`:
            u = b.createHTML(u);
            break;
          case `TrustedScriptURL`:
            u = b.createScriptURL(u);
            break
        }
        if (u !== l) try {
          o ? e.setAttributeNS(o, a, u) : e.setAttribute(a, u), $e(e) ? Ye(e) : bn(t.removed)
        } catch {
          Xe(a, e)
        }
      }
      tt(T.afterSanitizeAttributes, e, null)
    },
    ot = function e(t) {
      let n = null,
        r = Qe(t);
      for (tt(T.beforeSanitizeShadowDOM, t, null); n = r.nextNode();) tt(T.uponSanitizeShadowNode, n, null), nt(n), at(n), n.content instanceof a && e(n.content);
      tt(T.afterSanitizeShadowDOM, t, null)
    };
  return t.sanitize = function(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      i = null,
      o = null,
      c = null,
      l = null;
    if (Pe = !e, Pe && (e = `<!-->`), typeof e != `string` && !et(e))
      if (typeof e.toString == `function`) {
        if (e = e.toString(), typeof e != `string`) throw jn(`dirty is not a string, aborting`)
      } else throw jn(`toString is not a function`);
    if (!t.isSupported) return e;
    if (ge || Ge(n), t.removed = [], typeof e == `string` && (Ce = !1), Ce) {
      if (e.nodeName) {
        let t = R(e.nodeName);
        if (!k[t] || le[t]) throw jn(`root node is forbidden and cannot be sanitized in-place`)
      }
    } else if (e instanceof s) i = Ze(`<!---->`), o = i.ownerDocument.importNode(e, !0), o.nodeType === ar.element && o.nodeName === `BODY` || o.nodeName === `HTML` ? i = o : i.appendChild(o);
    else {
      if (!ve && !P && !F && e.indexOf(`<`) === -1) return b && be ? b.createHTML(e) : e;
      if (i = Ze(e), !i) return ve ? null : be ? x : ``
    }
    i && _e && Ye(i.firstChild);
    let u = Qe(Ce ? e : i);
    for (; c = u.nextNode();) nt(c), at(c), c.content instanceof a && ot(c.content);
    if (Ce) return e;
    if (ve) {
      if (ye)
        for (l = C.call(i.ownerDocument); i.firstChild;) l.appendChild(i.firstChild);
      else l = i;
      return (j.shadowroot || j.shadowrootmode) && (l = te.call(r, l, !0)), l
    }
    let d = F ? i.outerHTML : i.innerHTML;
    return F && k[`!doctype`] && i.ownerDocument && i.ownerDocument.doctype && i.ownerDocument.doctype.name && An(nr, i.ownerDocument.doctype.name) && (d = `<!DOCTYPE ` + i.ownerDocument.doctype.name + `>
` + d), P && vn([E, ne, D], e => {
      d = En(d, e, ` `)
    }), b && be ? b.createHTML(d) : d
  }, t.setConfig = function() {
    Ge(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}), ge = !0
  }, t.clearConfig = function() {
    He = null, ge = !1
  }, t.isValidAttribute = function(e, t, n) {
    return He || Ge({}), rt(R(e), R(t), n)
  }, t.addHook = function(e, t) {
    typeof t == `function` && xn(T[e], t)
  }, t.removeHook = function(e, t) {
    if (t !== void 0) {
      let n = yn(T[e], t);
      return n === -1 ? void 0 : Sn(T[e], n, 1)[0]
    }
    return bn(T[e])
  }, t.removeHooks = function(e) {
    T[e] = []
  }, t.removeAllHooks = function() {
    T = cr()
  }, t
}
var ur = lr(),
  dr = {};
ur.addHook(`afterSanitizeAttributes`, e => {
  `target` in e && e instanceof HTMLElement && (e.setAttribute(`target`, `_blank`), e.setAttribute(`rel`, `noopener`))
});
var fr = (e, t = dr) => ur.sanitize(e, t),
  pr = (e, t) => {
    window.__pca = window.__pca ?? {}, window.__pca.versions = window.__pca.versions ?? {}, window.__pca.versions[e] = window.__pca.versions[e] ?? {}, window.__pca.versions[e].versionTag = t.versionTag ?? window.__pca.versions[e].versionTag
  },
  mr = (e, t) => {
    e.innerHTML = fr(t.value)
  },
  hr = {
    mounted: mr,
    updated: mr
  },
  gr = `lidl_locale`,
  _r = `de-DE`,
  vr = () => {
    let e = () => {
        try {
          if (window?.__pca?.cfg?.locale) return window.__pca.cfg.locale;
          if (window?.mindShiftNav?.locale) return window?.mindShiftNav?.locale;
          if (window?.mindShiftNav?.language && window?.mindShiftNav?.country) return `${window.mindShiftNav.language}-${window.mindShiftNav.country}`
        } catch (e) {
          console.error(`Unable to get locale from window.mindShiftNav: ${e}`)
        }
        return null
      },
      t = () => Zt(gr);
    return {
      getLocale: () => t() ?? e() ?? _r
    }
  },
  yr = Object.assign({
    "../../pca-configs/config/cs-CZ_dev.json": () => B(() => import(`./cs-CZ_dev-4TInyLKh.js`), []),
    "../../pca-configs/config/cs-CZ_prod.json": () => B(() => import(`./cs-CZ_prod-CgFLeOkN.js`), []),
    "../../pca-configs/config/cs-CZ_qa.json": () => B(() => import(`./cs-CZ_qa-niwbpIuL.js`), []),
    "../../pca-configs/config/cs-CZ_test.json": () => B(() => import(`./cs-CZ_test-CzzfdPI6.js`), []),
    "../../pca-configs/config/de-DE_dev.json": () => B(() => import(`./de-DE_dev-DR-SZAfM.js`), []),
    "../../pca-configs/config/de-DE_prod.json": () => B(() => import(`./de-DE_prod-C5uWNwtS.js`), []),
    "../../pca-configs/config/de-DE_qa.json": () => B(() => import(`./de-DE_qa-C307foMo.js`), []),
    "../../pca-configs/config/de-DE_test.json": () => B(() => import(`./de-DE_test-XN5Kvv8Z.js`), []),
    "../../pca-configs/config/es-ES_dev.json": () => B(() => import(`./es-ES_dev-Bu1TkkKI.js`), []),
    "../../pca-configs/config/es-ES_prod.json": () => B(() => import(`./es-ES_prod-CJENtxn3.js`), []),
    "../../pca-configs/config/es-ES_qa.json": () => B(() => import(`./es-ES_qa-DaVwPg1L.js`), []),
    "../../pca-configs/config/es-ES_test.json": () => B(() => import(`./es-ES_test-C1uxmRnV.js`), []),
    "../../pca-configs/config/fr-BE_dev.json": () => B(() => import(`./fr-BE_dev-Bmn9jSno.js`), []),
    "../../pca-configs/config/fr-BE_prod.json": () => B(() => import(`./fr-BE_prod-gbO_zgYn.js`), []),
    "../../pca-configs/config/fr-BE_qa.json": () => B(() => import(`./fr-BE_qa-Dn54qwPe.js`), []),
    "../../pca-configs/config/fr-BE_test.json": () => B(() => import(`./fr-BE_test-CvDM3SvY.js`), []),
    "../../pca-configs/config/fr-FR_dev.json": () => B(() => import(`./fr-FR_dev-CsX1Nisr.js`), []),
    "../../pca-configs/config/fr-FR_prod.json": () => B(() => import(`./fr-FR_prod-Dwu8_H8U.js`), []),
    "../../pca-configs/config/fr-FR_qa.json": () => B(() => import(`./fr-FR_qa-cgCIovEb.js`), []),
    "../../pca-configs/config/fr-FR_test.json": () => B(() => import(`./fr-FR_test-DTNyKkiR.js`), []),
    "../../pca-configs/config/nl-BE_dev.json": () => B(() => import(`./nl-BE_dev-Dk_R3MrM.js`), []),
    "../../pca-configs/config/nl-BE_prod.json": () => B(() => import(`./nl-BE_prod-BeQeXPyD.js`), []),
    "../../pca-configs/config/nl-BE_qa.json": () => B(() => import(`./nl-BE_qa-ByOMiaQI.js`), []),
    "../../pca-configs/config/nl-BE_test.json": () => B(() => import(`./nl-BE_test-zAzkYm6V.js`), []),
    "../../pca-configs/config/nl-NL_dev.json": () => B(() => import(`./nl-NL_dev-Cq-nNj7K.js`), []),
    "../../pca-configs/config/nl-NL_prod.json": () => B(() => import(`./nl-NL_prod-DyVicdIs.js`), []),
    "../../pca-configs/config/nl-NL_qa.json": () => B(() => import(`./nl-NL_qa-CkmQnSg2.js`), []),
    "../../pca-configs/config/nl-NL_test.json": () => B(() => import(`./nl-NL_test-DVYF82QD.js`), []),
    "../../pca-configs/config/pl-PL_dev.json": () => B(() => import(`./pl-PL_dev--aFCQNm7.js`), []),
    "../../pca-configs/config/pl-PL_prod.json": () => B(() => import(`./pl-PL_prod-DGCG6FHh.js`), []),
    "../../pca-configs/config/pl-PL_qa.json": () => B(() => import(`./pl-PL_qa-BTtoxvlc.js`), []),
    "../../pca-configs/config/pl-PL_test.json": () => B(() => import(`./pl-PL_test-GfXSQ5Bn.js`), []),
    "../../pca-configs/config/sk-SK_dev.json": () => B(() => import(`./sk-SK_dev-ClWGlwNq.js`), []),
    "../../pca-configs/config/sk-SK_prod.json": () => B(() => import(`./sk-SK_prod-DlXbLBuw.js`), []),
    "../../pca-configs/config/sk-SK_qa.json": () => B(() => import(`./sk-SK_qa-CbH8V0zA.js`), []),
    "../../pca-configs/config/sk-SK_test.json": () => B(() => import(`./sk-SK_test-DOPgMbPj.js`), [])
  }),
  br = l(),
  xr = () => {
    let {
      getLocale: e
    } = vr(), {
      getEnvironment: t
    } = Xt(), n = e(), r = t(), i = e => {
      br.value = Object.freeze({
        ...e
      })
    }, a = () => window?.__pca?.cfg ? {
      ...window.__pca.cfg
    } : null, o = async e => {
      try {
        let t = Object.keys(yr)
          .find(t => t.endsWith(e));
        if (!t) throw Error(`configs: no config file found for locale ${n} and environment ${r}`);
        return (await yr[t]())
          .default
      } catch (e) {
        console.error(`configs: error loading configs for locale ${n} and environment ${r}`, e)
      }
      return null
    }, s = async () => {
      let e = a() ?? await o(`/${n}_${r}.json`);
      return e ? (i(e), !0) : (console.error(`configs: no configs found for locale ${n} and environment ${r}`), !1)
    };
    return window.__pca?.isConfigInitialized === void 0 && ((window.__pca ??= {})
      .isConfigInitialized = s()), {
      configs: br,
      init: async () => await window.__pca?.isConfigInitialized,
      _updateConfig: i
    }
  },
  Sr = Object.assign({
    "../../pca-configs/feature-toggles/cs-CZ_dev.json": () => B(() => import(`./cs-CZ_dev-CB-horY1.js`), []),
    "../../pca-configs/feature-toggles/cs-CZ_prod.json": () => B(() => import(`./cs-CZ_prod-BqW8q8VM.js`), []),
    "../../pca-configs/feature-toggles/cs-CZ_qa.json": () => B(() => import(`./cs-CZ_qa-CFNgr3ab.js`), []),
    "../../pca-configs/feature-toggles/cs-CZ_test.json": () => B(() => import(`./cs-CZ_test-CU-Lszlr.js`), []),
    "../../pca-configs/feature-toggles/de-DE_dev.json": () => B(() => import(`./de-DE_dev-Bw6LnMRH.js`), []),
    "../../pca-configs/feature-toggles/de-DE_prod.json": () => B(() => import(`./de-DE_prod-yBsjCBYQ.js`), []),
    "../../pca-configs/feature-toggles/de-DE_qa.json": () => B(() => import(`./de-DE_qa-Dlxi3BH2.js`), []),
    "../../pca-configs/feature-toggles/de-DE_test.json": () => B(() => import(`./de-DE_test-B8GYIdph.js`), []),
    "../../pca-configs/feature-toggles/es-ES_dev.json": () => B(() => import(`./es-ES_dev-Be3SFEQ3.js`), []),
    "../../pca-configs/feature-toggles/es-ES_prod.json": () => B(() => import(`./es-ES_prod-DKB60P9g.js`), []),
    "../../pca-configs/feature-toggles/es-ES_qa.json": () => B(() => import(`./es-ES_qa-Blhv8buf.js`), []),
    "../../pca-configs/feature-toggles/es-ES_test.json": () => B(() => import(`./es-ES_test-CWpPzOhO.js`), []),
    "../../pca-configs/feature-toggles/fr-BE_dev.json": () => B(() => import(`./fr-BE_dev-Dny9AQEJ.js`), []),
    "../../pca-configs/feature-toggles/fr-BE_prod.json": () => B(() => import(`./fr-BE_prod-DNCk6CI7.js`), []),
    "../../pca-configs/feature-toggles/fr-BE_qa.json": () => B(() => import(`./fr-BE_qa-hj3svPA3.js`), []),
    "../../pca-configs/feature-toggles/fr-BE_test.json": () => B(() => import(`./fr-BE_test-Dha9Oham.js`), []),
    "../../pca-configs/feature-toggles/fr-FR_dev.json": () => B(() => import(`./fr-FR_dev-BxpAM5mZ.js`), []),
    "../../pca-configs/feature-toggles/fr-FR_prod.json": () => B(() => import(`./fr-FR_prod-BfaPoCta.js`), []),
    "../../pca-configs/feature-toggles/fr-FR_qa.json": () => B(() => import(`./fr-FR_qa-EpRrHuJ-.js`), []),
    "../../pca-configs/feature-toggles/fr-FR_test.json": () => B(() => import(`./fr-FR_test-D9qfN378.js`), []),
    "../../pca-configs/feature-toggles/nl-BE_dev.json": () => B(() => import(`./nl-BE_dev-BuBTXi3z.js`), []),
    "../../pca-configs/feature-toggles/nl-BE_prod.json": () => B(() => import(`./nl-BE_prod-CKopMiNu.js`), []),
    "../../pca-configs/feature-toggles/nl-BE_qa.json": () => B(() => import(`./nl-BE_qa-CJ5iBhFv.js`), []),
    "../../pca-configs/feature-toggles/nl-BE_test.json": () => B(() => import(`./nl-BE_test-D-XVdyKR.js`), []),
    "../../pca-configs/feature-toggles/nl-NL_dev.json": () => B(() => import(`./nl-NL_dev-fTakxFko.js`), []),
    "../../pca-configs/feature-toggles/nl-NL_prod.json": () => B(() => import(`./nl-NL_prod-DSx_rsn4.js`), []),
    "../../pca-configs/feature-toggles/nl-NL_qa.json": () => B(() => import(`./nl-NL_qa-CYgoHhHr.js`), []),
    "../../pca-configs/feature-toggles/nl-NL_test.json": () => B(() => import(`./nl-NL_test-BiIPikl8.js`), []),
    "../../pca-configs/feature-toggles/pl-PL_dev.json": () => B(() => import(`./pl-PL_dev-BdMbVYe2.js`), []),
    "../../pca-configs/feature-toggles/pl-PL_prod.json": () => B(() => import(`./pl-PL_prod-B7N0hTrw.js`), []),
    "../../pca-configs/feature-toggles/pl-PL_qa.json": () => B(() => import(`./pl-PL_qa-BZxEP4SE.js`), []),
    "../../pca-configs/feature-toggles/pl-PL_test.json": () => B(() => import(`./pl-PL_test-2FAa-D3x.js`), []),
    "../../pca-configs/feature-toggles/sk-SK_dev.json": () => B(() => import(`./sk-SK_dev-C9vbIKyM.js`), []),
    "../../pca-configs/feature-toggles/sk-SK_prod.json": () => B(() => import(`./sk-SK_prod-yu5hyZx4.js`), []),
    "../../pca-configs/feature-toggles/sk-SK_qa.json": () => B(() => import(`./sk-SK_qa-CM9HKtU1.js`), []),
    "../../pca-configs/feature-toggles/sk-SK_test.json": () => B(() => import(`./sk-SK_test--D1ZvgFy.js`), [])
  }),
  Cr = l(),
  wr = () => {
    let {
      getLocale: e
    } = vr(), {
      getEnvironment: t
    } = Xt(), n = e(), r = t(), i = () => window?.__pca?.featureToggles ? Object.freeze({
      ...window.__pca.featureToggles
    }) : null, a = async e => {
      try {
        let t = Object.keys(Sr)
          .find(t => t.endsWith(e));
        if (!t) throw Error(`feature-toggles: no feature-toggles file found for locale ${n} and environment ${r}`);
        return Object.freeze((await Sr[t]())
          .default)
      } catch (e) {
        console.error(`feature-toggles: error loading feature-toggles for locale ${n} and environment ${r}`, e)
      }
      return null
    }, o = async () => {
      let e = i() ?? await a(`/${n}_${r}.json`);
      return e ? (Cr.value = e, !0) : (console.error(`feature-toggles: no toggles found for locale ${n} and environment ${r}`), !1)
    }, s = e => Cr.value?.[e] === !0, c = e => !s(e), l = e => {
      for (let t of e)
        if (s(t)) return !0;
      return !1
    };
    return window.__pca?.isFeatureTogglesInitialized === void 0 && ((window.__pca ??= {})
      .isFeatureTogglesInitialized = o()), {
      featureToggles: Cr,
      isFeatureEnabled: s,
      isFeatureDisabled: c,
      isFeatureEnabledOneOf: l,
      init: async () => await window.__pca?.isFeatureTogglesInitialized
    }
  };

function Tr(e, t) {
  typeof console < `u` && (console.warn(`[intlify] ` + e), t && console.warn(t.stack))
}
var Er = typeof window < `u`,
  Dr = (e, t = !1) => t ? Symbol.for(e) : Symbol(e),
  Or = (e, t, n) => kr({
    l: e,
    k: t,
    s: n
  }),
  kr = e => JSON.stringify(e)
  .replace(/\u2028/g, `\\u2028`)
  .replace(/\u2029/g, `\\u2029`)
  .replace(/\u0027/g, `\\u0027`),
  H = e => typeof e == `number` && isFinite(e),
  Ar = e => Ur(e) === `[object Date]`,
  jr = e => Ur(e) === `[object RegExp]`,
  Mr = e => X(e) && Object.keys(e)
  .length === 0,
  U = Object.assign,
  Nr = Object.create,
  W = (e = null) => Nr(e),
  Pr, Fr = () => Pr ||= typeof globalThis < `u` ? globalThis : typeof self < `u` ? self : typeof window < `u` ? window : typeof global < `u` ? global : W();

function Ir(e) {
  return e.replace(/&/g, `&amp;`)
    .replace(/</g, `&lt;`)
    .replace(/>/g, `&gt;`)
    .replace(/"/g, `&quot;`)
    .replace(/'/g, `&apos;`)
    .replace(/\//g, `&#x2F;`)
    .replace(/=/g, `&#x3D;`)
}

function Lr(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, `&amp;`)
    .replace(/"/g, `&quot;`)
    .replace(/'/g, `&apos;`)
    .replace(/</g, `&lt;`)
    .replace(/>/g, `&gt;`)
}

function Rr(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (e, t, n) => `${t}="${Lr(n)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (e, t, n) => `${t}='${Lr(n)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, `$1&#111;n$3`)), [/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi, /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach(t => {
    e = e.replace(t, `$1javascript&#58;`)
  }), e
}
var zr = Object.prototype.hasOwnProperty;

function Br(e, t) {
  return zr.call(e, t)
}
var G = Array.isArray,
  K = e => typeof e == `function`,
  q = e => typeof e == `string`,
  J = e => typeof e == `boolean`,
  Y = e => typeof e == `object` && !!e,
  Vr = e => Y(e) && K(e.then) && K(e.catch),
  Hr = Object.prototype.toString,
  Ur = e => Hr.call(e),
  X = e => Ur(e) === `[object Object]`,
  Wr = e => e == null ? `` : G(e) || X(e) && e.toString === Hr ? JSON.stringify(e, null, 2) : String(e);

function Gr(e, t = ``) {
  return e.reduce((e, n, r) => r === 0 ? e + n : e + t + n, ``)
}
var Kr = e => !Y(e) || G(e);

function qr(e, t) {
  if (Kr(e) || Kr(t)) throw Error(`Invalid value`);
  let n = [{
    src: e,
    des: t
  }];
  for (; n.length;) {
    let {
      src: e,
      des: t
    } = n.pop();
    Object.keys(e)
      .forEach(r => {
        r !== `__proto__` && (Y(e[r]) && !Y(t[r]) && (t[r] = Array.isArray(e[r]) ? [] : W()), Kr(t[r]) || Kr(e[r]) ? t[r] = e[r] : n.push({
          src: e[r],
          des: t[r]
        }))
      })
  }
}

function Jr(e, t, n) {
  return {
    line: e,
    column: t,
    offset: n
  }
}

function Yr(e, t, n) {
  let r = {
    start: e,
    end: t
  };
  return n != null && (r.source = n), r
}
var Z = {
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
  UNHANDLED_MINIFIER_NODE_TYPE: 16
};
Z.EXPECTED_TOKEN, Z.INVALID_TOKEN_IN_PLACEHOLDER, Z.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, Z.UNKNOWN_ESCAPE_SEQUENCE, Z.INVALID_UNICODE_ESCAPE_SEQUENCE, Z.UNBALANCED_CLOSING_BRACE, Z.UNTERMINATED_CLOSING_BRACE, Z.EMPTY_PLACEHOLDER, Z.NOT_ALLOW_NEST_PLACEHOLDER, Z.INVALID_LINKED_FORMAT, Z.MUST_HAVE_MESSAGES_IN_PLURAL, Z.UNEXPECTED_EMPTY_LINKED_MODIFIER, Z.UNEXPECTED_EMPTY_LINKED_KEY, Z.UNEXPECTED_LEXICAL_ANALYSIS, Z.UNHANDLED_CODEGEN_NODE_TYPE, Z.UNHANDLED_MINIFIER_NODE_TYPE;

function Xr(e, t, n = {}) {
  let {
    domain: r,
    messages: i,
    args: a
  } = n, o = SyntaxError(String(e));
  return o.code = e, t && (o.location = t), o.domain = r, o
}

function Zr(e) {
  throw e
}
var Qr = ` `,
  $r = `\r`,
  ei = `
`,
  ti = `
`,
  ni = `
`;

function ri(e) {
  let t = e,
    n = 0,
    r = 1,
    i = 1,
    a = 0,
    o = e => t[e] === $r && t[e + 1] === ei,
    s = e => t[e] === ei,
    c = e => t[e] === ni,
    l = e => t[e] === ti,
    u = e => o(e) || s(e) || c(e) || l(e),
    d = () => n,
    f = () => r,
    p = () => i,
    m = () => a,
    h = e => o(e) || c(e) || l(e) ? ei : t[e],
    g = () => h(n),
    _ = () => h(n + a);

  function v() {
    return a = 0, u(n) && (r++, i = 0), o(n) && n++, n++, i++, t[n]
  }

  function y() {
    return o(n + a) && a++, a++, t[n + a]
  }

  function b() {
    n = 0, r = 1, i = 1, a = 0
  }

  function x(e = 0) {
    a = e
  }

  function S() {
    let e = n + a;
    for (; e !== n;) v();
    a = 0
  }
  return {
    index: d,
    line: f,
    column: p,
    peekOffset: m,
    charAt: h,
    currentChar: g,
    currentPeek: _,
    next: v,
    peek: y,
    reset: b,
    resetPeek: x,
    skipToPeek: S
  }
}
var ii = void 0,
  ai = `'`,
  oi = `tokenizer`;

function si(e, t = {}) {
  let n = t.location !== !1,
    r = ri(e),
    i = () => r.index(),
    a = () => Jr(r.line(), r.column(), r.index()),
    o = a(),
    s = i(),
    c = {
      currentType: 13,
      offset: s,
      startLoc: o,
      endLoc: o,
      lastType: 13,
      lastOffset: s,
      lastStartLoc: o,
      lastEndLoc: o,
      braceNest: 0,
      inLinked: !1,
      text: ``
    },
    l = () => c,
    {
      onError: u
    } = t;

  function d(e, t, r, ...i) {
    let a = l();
    t.column += r, t.offset += r, u && u(Xr(e, n ? Yr(a.startLoc, t) : null, {
      domain: oi,
      args: i
    }))
  }

  function f(e, t, r) {
    e.endLoc = a(), e.currentType = t;
    let i = {
      type: t
    };
    return n && (i.loc = Yr(e.startLoc, e.endLoc)), r != null && (i.value = r), i
  }
  let p = e => f(e, 13);

  function m(e, t) {
    return e.currentChar() === t ? (e.next(), t) : (d(Z.EXPECTED_TOKEN, a(), 0, t), ``)
  }

  function h(e) {
    let t = ``;
    for (; e.currentPeek() === Qr || e.currentPeek() === ei;) t += e.currentPeek(), e.peek();
    return t
  }

  function g(e) {
    let t = h(e);
    return e.skipToPeek(), t
  }

  function _(e) {
    if (e === ii) return !1;
    let t = e.charCodeAt(0);
    return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t === 95
  }

  function v(e) {
    if (e === ii) return !1;
    let t = e.charCodeAt(0);
    return t >= 48 && t <= 57
  }

  function y(e, t) {
    let {
      currentType: n
    } = t;
    if (n !== 2) return !1;
    h(e);
    let r = _(e.currentPeek());
    return e.resetPeek(), r
  }

  function b(e, t) {
    let {
      currentType: n
    } = t;
    if (n !== 2) return !1;
    h(e);
    let r = v(e.currentPeek() === `-` ? e.peek() : e.currentPeek());
    return e.resetPeek(), r
  }

  function x(e, t) {
    let {
      currentType: n
    } = t;
    if (n !== 2) return !1;
    h(e);
    let r = e.currentPeek() === ai;
    return e.resetPeek(), r
  }

  function S(e, t) {
    let {
      currentType: n
    } = t;
    if (n !== 7) return !1;
    h(e);
    let r = e.currentPeek() === `.`;
    return e.resetPeek(), r
  }

  function ee(e, t) {
    let {
      currentType: n
    } = t;
    if (n !== 8) return !1;
    h(e);
    let r = _(e.currentPeek());
    return e.resetPeek(), r
  }

  function C(e, t) {
    let {
      currentType: n
    } = t;
    if (!(n === 7 || n === 11)) return !1;
    h(e);
    let r = e.currentPeek() === `:`;
    return e.resetPeek(), r
  }

  function w(e, t) {
    let {
      currentType: n
    } = t;
    if (n !== 9) return !1;
    let r = () => {
        let t = e.currentPeek();
        return t === `{` ? _(e.peek()) : t === `@` || t === `|` || t === `:` || t === `.` || t === Qr || !t ? !1 : t === ei ? (e.peek(), r()) : T(e, !1)
      },
      i = r();
    return e.resetPeek(), i
  }

  function te(e) {
    h(e);
    let t = e.currentPeek() === `|`;
    return e.resetPeek(), t
  }

  function T(e, t = !0) {
    let n = (t = !1, r = ``) => {
        let i = e.currentPeek();
        return i === `{` || i === `@` || !i ? t : i === `|` ? !(r === Qr || r === ei) : i === Qr ? (e.peek(), n(!0, Qr)) : i === ei ? (e.peek(), n(!0, ei)) : !0
      },
      r = n();
    return t && e.resetPeek(), r
  }

  function E(e, t) {
    let n = e.currentChar();
    return n === ii ? ii : t(n) ? (e.next(), n) : null
  }

  function ne(e) {
    let t = e.charCodeAt(0);
    return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t >= 48 && t <= 57 || t === 95 || t === 36
  }

  function D(e) {
    return E(e, ne)
  }

  function re(e) {
    let t = e.charCodeAt(0);
    return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t >= 48 && t <= 57 || t === 95 || t === 36 || t === 45
  }

  function ie(e) {
    return E(e, re)
  }

  function ae(e) {
    let t = e.charCodeAt(0);
    return t >= 48 && t <= 57
  }

  function oe(e) {
    return E(e, ae)
  }

  function O(e) {
    let t = e.charCodeAt(0);
    return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102
  }

  function se(e) {
    return E(e, O)
  }

  function k(e) {
    let t = ``,
      n = ``;
    for (; t = oe(e);) n += t;
    return n
  }

  function A(e) {
    let t = ``;
    for (;;) {
      let n = e.currentChar();
      if (n === `\\`) {
        let r = e.peek();
        r === `{` || r === `}` || r === `@` || r === `|` || r === `\\` ? (t += n + r, e.next(), e.next()) : (e.resetPeek(), t += n, e.next())
      } else if (n === `{` || n === `}` || n === `@` || n === `|` || !n) break;
      else if (n === Qr || n === ei)
        if (T(e)) t += n, e.next();
        else if (te(e)) break;
      else t += n, e.next();
      else t += n, e.next()
    }
    return t
  }

  function j(e) {
    g(e);
    let t = ``,
      n = ``;
    for (; t = ie(e);) n += t;
    let r = e.currentChar();
    if (r && r !== `}` && r !== ii && r !== Qr && r !== ei && r !== `　`) {
      let t = fe(e);
      return d(Z.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, n + t), n + t
    }
    return e.currentChar() === ii && d(Z.UNTERMINATED_CLOSING_BRACE, a(), 0), n
  }

  function ce(e) {
    g(e);
    let t = ``;
    return e.currentChar() === `-` ? (e.next(), t += `-${k(e)}`) : t += k(e), e.currentChar() === ii && d(Z.UNTERMINATED_CLOSING_BRACE, a(), 0), t
  }

  function M(e) {
    return e !== ai && e !== ei
  }

  function le(e) {
    g(e), m(e, `'`);
    let t = ``,
      n = ``;
    for (; t = E(e, M);) t === `\\` ? n += ue(e) : n += t;
    let r = e.currentChar();
    return r === ei || r === ii ? (d(Z.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), r === ei && (e.next(), m(e, `'`)), n) : (m(e, `'`), n)
  }

  function ue(e) {
    let t = e.currentChar();
    switch (t) {
      case `\\`:
      case `'`:
        return e.next(), `\\${t}`;
      case `u`:
        return N(e, t, 4);
      case `U`:
        return N(e, t, 6);
      default:
        return d(Z.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, t), ``
    }
  }

  function N(e, t, n) {
    m(e, t);
    let r = ``;
    for (let i = 0; i < n; i++) {
      let n = se(e);
      if (!n) {
        d(Z.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${t}${r}${e.currentChar()}`);
        break
      }
      r += n
    }
    return `\\${t}${r}`
  }

  function de(e) {
    return e !== `{` && e !== `}` && e !== Qr && e !== ei
  }

  function fe(e) {
    g(e);
    let t = ``,
      n = ``;
    for (; t = E(e, de);) n += t;
    return n
  }

  function pe(e) {
    let t = ``,
      n = ``;
    for (; t = D(e);) n += t;
    return n
  }

  function me(e) {
    let t = n => {
      let r = e.currentChar();
      return r === `{` || r === `@` || r === `|` || r === `(` || r === `)` || !r || r === Qr ? n : (n += r, e.next(), t(n))
    };
    return t(``)
  }

  function P(e) {
    g(e);
    let t = m(e, `|`);
    return g(e), t
  }

  function he(e, t) {
    let n = null;
    switch (e.currentChar()) {
      case `{`:
        return t.braceNest >= 1 && d(Z.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), e.next(), n = f(t, 2, `{`), g(e), t.braceNest++, n;
      case `}`:
        return t.braceNest > 0 && t.currentType === 2 && d(Z.EMPTY_PLACEHOLDER, a(), 0), e.next(), n = f(t, 3, `}`), t.braceNest--, t.braceNest > 0 && g(e), t.inLinked && t.braceNest === 0 && (t.inLinked = !1), n;
      case `@`:
        return t.braceNest > 0 && d(Z.UNTERMINATED_CLOSING_BRACE, a(), 0), n = F(e, t) || p(t), t.braceNest = 0, n;
      default: {
        let r = !0,
          i = !0,
          o = !0;
        if (te(e)) return t.braceNest > 0 && d(Z.UNTERMINATED_CLOSING_BRACE, a(), 0), n = f(t, 1, P(e)), t.braceNest = 0, t.inLinked = !1, n;
        if (t.braceNest > 0 && (t.currentType === 4 || t.currentType === 5 || t.currentType === 6)) return d(Z.UNTERMINATED_CLOSING_BRACE, a(), 0), t.braceNest = 0, ge(e, t);
        if (r = y(e, t)) return n = f(t, 4, j(e)), g(e), n;
        if (i = b(e, t)) return n = f(t, 5, ce(e)), g(e), n;
        if (o = x(e, t)) return n = f(t, 6, le(e)), g(e), n;
        if (!r && !i && !o) return n = f(t, 12, fe(e)), d(Z.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, n.value), g(e), n;
        break
      }
    }
    return n
  }

  function F(e, t) {
    let {
      currentType: n
    } = t, r = null, i = e.currentChar();
    switch ((n === 7 || n === 8 || n === 11 || n === 9) && (i === ei || i === Qr) && d(Z.INVALID_LINKED_FORMAT, a(), 0), i) {
      case `@`:
        return e.next(), r = f(t, 7, `@`), t.inLinked = !0, r;
      case `.`:
        return g(e), e.next(), f(t, 8, `.`);
      case `:`:
        return g(e), e.next(), f(t, 9, `:`);
      default:
        return te(e) ? (r = f(t, 1, P(e)), t.braceNest = 0, t.inLinked = !1, r) : S(e, t) || C(e, t) ? (g(e), F(e, t)) : ee(e, t) ? (g(e), f(t, 11, pe(e))) : w(e, t) ? (g(e), i === `{` ? he(e, t) || r : f(t, 10, me(e))) : (n === 7 && d(Z.INVALID_LINKED_FORMAT, a(), 0), t.braceNest = 0, t.inLinked = !1, ge(e, t))
    }
  }

  function ge(e, t) {
    let n = {
      type: 13
    };
    if (t.braceNest > 0) return he(e, t) || p(t);
    if (t.inLinked) return F(e, t) || p(t);
    switch (e.currentChar()) {
      case `{`:
        return he(e, t) || p(t);
      case `}`:
        return d(Z.UNBALANCED_CLOSING_BRACE, a(), 0), e.next(), f(t, 3, `}`);
      case `@`:
        return F(e, t) || p(t);
      default:
        if (te(e)) return n = f(t, 1, P(e)), t.braceNest = 0, t.inLinked = !1, n;
        if (T(e)) return f(t, 0, A(e));
        break
    }
    return n
  }

  function _e() {
    let {
      currentType: e,
      offset: t,
      startLoc: n,
      endLoc: o
    } = c;
    return c.lastType = e, c.lastOffset = t, c.lastStartLoc = n, c.lastEndLoc = o, c.offset = i(), c.startLoc = a(), r.currentChar() === ii ? f(c, 13) : ge(r, c)
  }
  return {
    nextToken: _e,
    currentOffset: i,
    currentPosition: a,
    context: l
  }
}
var ci = `parser`,
  li = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g,
  ui = /\\([\\@{}|])/g;

function di(e, t) {
  return t
}

function fi(e, t, n) {
  switch (e) {
    case `\\\\`:
      return `\\`;
    case `\\'`:
      return `'`;
    default: {
      let e = parseInt(t || n, 16);
      return e <= 55295 || e >= 57344 ? String.fromCodePoint(e) : `�`
    }
  }
}

function pi(e = {}) {
  let t = e.location !== !1,
    {
      onError: n
    } = e;

  function r(e, r, i, a, ...o) {
    let s = e.currentPosition();
    s.offset += a, s.column += a, n && n(Xr(r, t ? Yr(i, s) : null, {
      domain: ci,
      args: o
    }))
  }

  function i(e, n, r) {
    let i = {
      type: e
    };
    return t && (i.start = n, i.end = n, i.loc = {
      start: r,
      end: r
    }), i
  }

  function a(e, n, r, i) {
    t && (e.end = n, e.loc && (e.loc.end = r))
  }

  function o(e, t) {
    let n = e.context(),
      r = i(3, n.offset, n.startLoc);
    return r.value = t.replace(ui, di), a(r, e.currentOffset(), e.currentPosition()), r
  }

  function s(e, t) {
    let {
      lastOffset: n,
      lastStartLoc: r
    } = e.context(), o = i(5, n, r);
    return o.index = parseInt(t, 10), e.nextToken(), a(o, e.currentOffset(), e.currentPosition()), o
  }

  function c(e, t) {
    let {
      lastOffset: n,
      lastStartLoc: r
    } = e.context(), o = i(4, n, r);
    return o.key = t, e.nextToken(), a(o, e.currentOffset(), e.currentPosition()), o
  }

  function l(e, t) {
    let {
      lastOffset: n,
      lastStartLoc: r
    } = e.context(), o = i(9, n, r);
    return o.value = t.replace(li, fi), e.nextToken(), a(o, e.currentOffset(), e.currentPosition()), o
  }

  function u(e) {
    let t = e.nextToken(),
      n = e.context(),
      {
        lastOffset: o,
        lastStartLoc: s
      } = n,
      c = i(8, o, s);
    return t.type === 11 ? (t.value ?? r(e, Z.UNEXPECTED_LEXICAL_ANALYSIS, n.lastStartLoc, 0, mi(t)), c.value = t.value || ``, a(c, e.currentOffset(), e.currentPosition()), {
      node: c
    }) : (r(e, Z.UNEXPECTED_EMPTY_LINKED_MODIFIER, n.lastStartLoc, 0), c.value = ``, a(c, o, s), {
      nextConsumeToken: t,
      node: c
    })
  }

  function d(e, t) {
    let n = e.context(),
      r = i(7, n.offset, n.startLoc);
    return r.value = t, a(r, e.currentOffset(), e.currentPosition()), r
  }

  function f(e) {
    let t = e.context(),
      n = i(6, t.offset, t.startLoc),
      o = e.nextToken();
    if (o.type === 8) {
      let t = u(e);
      n.modifier = t.node, o = t.nextConsumeToken || e.nextToken()
    }
    switch (o.type !== 9 && r(e, Z.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, mi(o)), o = e.nextToken(), o.type === 2 && (o = e.nextToken()), o.type) {
      case 10:
        o.value ?? r(e, Z.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, mi(o)), n.key = d(e, o.value || ``);
        break;
      case 4:
        o.value ?? r(e, Z.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, mi(o)), n.key = c(e, o.value || ``);
        break;
      case 5:
        o.value ?? r(e, Z.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, mi(o)), n.key = s(e, o.value || ``);
        break;
      case 6:
        o.value ?? r(e, Z.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, mi(o)), n.key = l(e, o.value || ``);
        break;
      default: {
        r(e, Z.UNEXPECTED_EMPTY_LINKED_KEY, t.lastStartLoc, 0);
        let s = e.context(),
          c = i(7, s.offset, s.startLoc);
        return c.value = ``, a(c, s.offset, s.startLoc), n.key = c, a(n, s.offset, s.startLoc), {
          nextConsumeToken: o,
          node: n
        }
      }
    }
    return a(n, e.currentOffset(), e.currentPosition()), {
      node: n
    }
  }

  function p(e) {
    let t = e.context(),
      n = i(2, t.currentType === 1 ? e.currentOffset() : t.offset, t.currentType === 1 ? t.endLoc : t.startLoc);
    n.items = [];
    let u = null;
    do {
      let i = u || e.nextToken();
      switch (u = null, i.type) {
        case 0:
          i.value ?? r(e, Z.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, mi(i)), n.items.push(o(e, i.value || ``));
          break;
        case 5:
          i.value ?? r(e, Z.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, mi(i)), n.items.push(s(e, i.value || ``));
          break;
        case 4:
          i.value ?? r(e, Z.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, mi(i)), n.items.push(c(e, i.value || ``));
          break;
        case 6:
          i.value ?? r(e, Z.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, mi(i)), n.items.push(l(e, i.value || ``));
          break;
        case 7: {
          let t = f(e);
          n.items.push(t.node), u = t.nextConsumeToken || null;
          break
        }
      }
    } while (t.currentType !== 13 && t.currentType !== 1);
    return a(n, t.currentType === 1 ? t.lastOffset : e.currentOffset(), t.currentType === 1 ? t.lastEndLoc : e.currentPosition()), n
  }

  function m(e, t, n, o) {
    let s = e.context(),
      c = o.items.length === 0,
      l = i(1, t, n);
    l.cases = [], l.cases.push(o);
    do {
      let t = p(e);
      c ||= t.items.length === 0, l.cases.push(t)
    } while (s.currentType !== 13);
    return c && r(e, Z.MUST_HAVE_MESSAGES_IN_PLURAL, n, 0), a(l, e.currentOffset(), e.currentPosition()), l
  }

  function h(e) {
    let t = e.context(),
      {
        offset: n,
        startLoc: r
      } = t,
      i = p(e);
    return t.currentType === 13 ? i : m(e, n, r, i)
  }

  function g(n) {
    let o = si(n, U({}, e)),
      s = o.context(),
      c = i(0, s.offset, s.startLoc);
    return t && c.loc && (c.loc.source = n), c.body = h(o), e.onCacheKey && (c.cacheKey = e.onCacheKey(n)), s.currentType !== 13 && r(o, Z.UNEXPECTED_LEXICAL_ANALYSIS, s.lastStartLoc, 0, n[s.offset] || ``), a(c, o.currentOffset(), o.currentPosition()), c
  }
  return {
    parse: g
  }
}

function mi(e) {
  if (e.type === 13) return `EOF`;
  let t = (e.value || ``)
    .replace(/\r?\n/gu, `\\n`);
  return t.length > 10 ? t.slice(0, 9) + `…` : t
}

function hi(e, t = {}) {
  let n = {
    ast: e,
    helpers: new Set
  };
  return {
    context: () => n,
    helper: e => (n.helpers.add(e), e)
  }
}

function gi(e, t) {
  for (let n = 0; n < e.length; n++) _i(e[n], t)
}

function _i(e, t) {
  switch (e.type) {
    case 1:
      gi(e.cases, t), t.helper(`plural`);
      break;
    case 2:
      gi(e.items, t);
      break;
    case 6:
      _i(e.key, t), t.helper(`linked`), t.helper(`type`);
      break;
    case 5:
      t.helper(`interpolate`), t.helper(`list`);
      break;
    case 4:
      t.helper(`interpolate`), t.helper(`named`);
      break
  }
}

function vi(e, t = {}) {
  let n = hi(e);
  n.helper(`normalize`), e.body && _i(e.body, n);
  let r = n.context();
  e.helpers = Array.from(r.helpers)
}

function yi(e) {
  let t = e.body;
  return t.type === 2 ? bi(t) : t.cases.forEach(e => bi(e)), e
}

function bi(e) {
  if (e.items.length === 1) {
    let t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value)
  } else {
    let t = [];
    for (let n = 0; n < e.items.length; n++) {
      let r = e.items[n];
      if (!(r.type === 3 || r.type === 9) || r.value == null) break;
      t.push(r.value)
    }
    if (t.length === e.items.length) {
      e.static = Gr(t);
      for (let t = 0; t < e.items.length; t++) {
        let n = e.items[t];
        (n.type === 3 || n.type === 9) && delete n.value
      }
    }
  }
}

function xi(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      let t = e;
      xi(t.body), t.b = t.body, delete t.body;
      break
    }
    case 1: {
      let t = e,
        n = t.cases;
      for (let e = 0; e < n.length; e++) xi(n[e]);
      t.c = n, delete t.cases;
      break
    }
    case 2: {
      let t = e,
        n = t.items;
      for (let e = 0; e < n.length; e++) xi(n[e]);
      t.i = n, delete t.items, t.static && (t.s = t.static, delete t.static);
      break
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      let t = e;
      t.value && (t.v = t.value, delete t.value);
      break
    }
    case 6: {
      let t = e;
      xi(t.key), t.k = t.key, delete t.key, t.modifier && (xi(t.modifier), t.m = t.modifier, delete t.modifier);
      break
    }
    case 5: {
      let t = e;
      t.i = t.index, delete t.index;
      break
    }
    case 4: {
      let t = e;
      t.k = t.key, delete t.key;
      break
    }
    default:
  }
  delete e.type
}

function Si(e, t) {
  let {
    sourceMap: n,
    filename: r,
    breakLineCode: i,
    needIndent: a
  } = t, o = t.location !== !1, s = {
    filename: r,
    code: ``,
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: i,
    needIndent: a,
    indentLevel: 0
  };
  o && e.loc && (s.source = e.loc.source);
  let c = () => s;

  function l(e, t) {
    s.code += e
  }

  function u(e, t = !0) {
    let n = t ? i : ``;
    l(a ? n + `  `.repeat(e) : n)
  }

  function d(e = !0) {
    let t = ++s.indentLevel;
    e && u(t)
  }

  function f(e = !0) {
    let t = --s.indentLevel;
    e && u(t)
  }

  function p() {
    u(s.indentLevel)
  }
  return {
    context: c,
    push: l,
    indent: d,
    deindent: f,
    newline: p,
    helper: e => `_${e}`,
    needIndent: () => s.needIndent
  }
}

function Ci(e, t) {
  let {
    helper: n
  } = e;
  e.push(`${n(`linked`)}(`), Di(e, t.key), t.modifier ? (e.push(`, `), Di(e, t.modifier), e.push(`, _type`)) : e.push(`, undefined, _type`), e.push(`)`)
}

function wi(e, t) {
  let {
    helper: n,
    needIndent: r
  } = e;
  e.push(`${n(`normalize`)}([`), e.indent(r());
  let i = t.items.length;
  for (let n = 0; n < i && (Di(e, t.items[n]), n !== i - 1); n++) e.push(`, `);
  e.deindent(r()), e.push(`])`)
}

function Ti(e, t) {
  let {
    helper: n,
    needIndent: r
  } = e;
  if (t.cases.length > 1) {
    e.push(`${n(`plural`)}([`), e.indent(r());
    let i = t.cases.length;
    for (let n = 0; n < i && (Di(e, t.cases[n]), n !== i - 1); n++) e.push(`, `);
    e.deindent(r()), e.push(`])`)
  }
}

function Ei(e, t) {
  t.body ? Di(e, t.body) : e.push(`null`)
}

function Di(e, t) {
  let {
    helper: n
  } = e;
  switch (t.type) {
    case 0:
      Ei(e, t);
      break;
    case 1:
      Ti(e, t);
      break;
    case 2:
      wi(e, t);
      break;
    case 6:
      Ci(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n(`interpolate`)}(${n(`list`)}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n(`interpolate`)}(${n(`named`)}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
    default:
  }
}
var Oi = (e, t = {}) => {
  let n = q(t.mode) ? t.mode : `normal`,
    r = q(t.filename) ? t.filename : `message.intl`,
    i = !!t.sourceMap,
    a = t.breakLineCode == null ? n === `arrow` ? `;` : `
` : t.breakLineCode,
    o = t.needIndent ? t.needIndent : n !== `arrow`,
    s = e.helpers || [],
    c = Si(e, {
      mode: n,
      filename: r,
      sourceMap: i,
      breakLineCode: a,
      needIndent: o
    });
  c.push(n === `normal` ? `function __msg__ (ctx) {` : `(ctx) => {`), c.indent(o), s.length > 0 && (c.push(`const { ${Gr(s.map(e=>`${e}: _${e}`),`, `)} } = ctx`), c.newline()), c.push(`return `), Di(c, e), c.deindent(o), c.push(`}`), delete e.helpers;
  let {
    code: l,
    map: u
  } = c.context();
  return {
    ast: e,
    code: l,
    map: u ? u.toJSON() : void 0
  }
};

function ki(e, t = {}) {
  let n = U({}, t),
    r = !!n.jit,
    i = !!n.minify,
    a = n.optimize == null ? !0 : n.optimize,
    o = pi(n)
    .parse(e);
  return r ? (a && yi(o), i && xi(o), {
    ast: o,
    code: ``
  }) : (vi(o, n), Oi(o, n))
}

function Ai() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != `boolean` && (Fr()
    .__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != `boolean` && (Fr()
    .__INTLIFY_DROP_MESSAGE_COMPILER__ = !1)
}

function ji(e) {
  return Y(e) && Vi(e) === 0 && (Br(e, `b`) || Br(e, `body`))
}
var Mi = [`b`, `body`];

function Ni(e) {
  return Ji(e, Mi)
}
var Pi = [`c`, `cases`];

function Fi(e) {
  return Ji(e, Pi, [])
}
var Ii = [`s`, `static`];

function Li(e) {
  return Ji(e, Ii)
}
var Ri = [`i`, `items`];

function zi(e) {
  return Ji(e, Ri, [])
}
var Bi = [`t`, `type`];

function Vi(e) {
  return Ji(e, Bi)
}
var Hi = [`v`, `value`];

function Ui(e, t) {
  let n = Ji(e, Hi);
  if (n != null) return n;
  throw Xi(t)
}
var Wi = [`m`, `modifier`];

function Gi(e) {
  return Ji(e, Wi)
}
var Ki = [`k`, `key`];

function qi(e) {
  let t = Ji(e, Ki);
  if (t) return t;
  throw Xi(6)
}

function Ji(e, t, n) {
  for (let n = 0; n < t.length; n++) {
    let r = t[n];
    if (Br(e, r) && e[r] != null) return e[r]
  }
  return n
}
var Yi = [...Mi, ...Pi, ...Ii, ...Ri, ...Ki, ...Wi, ...Hi, ...Bi];

function Xi(e) {
  return Error(`unhandled node type: ${e}`)
}

function Zi(e) {
  return t => Qi(t, e)
}

function Qi(e, t) {
  let n = Ni(t);
  if (n == null) throw Xi(0);
  if (Vi(n) === 1) {
    let t = Fi(n);
    return e.plural(t.reduce((t, n) => [...t, $i(e, n)], []))
  } else return $i(e, n)
}

function $i(e, t) {
  let n = Li(t);
  if (n != null) return e.type === `text` ? n : e.normalize([n]);
  {
    let n = zi(t)
      .reduce((t, n) => [...t, ea(e, n)], []);
    return e.normalize(n)
  }
}

function ea(e, t) {
  let n = Vi(t);
  switch (n) {
    case 3:
      return Ui(t, n);
    case 9:
      return Ui(t, n);
    case 4: {
      let r = t;
      if (Br(r, `k`) && r.k) return e.interpolate(e.named(r.k));
      if (Br(r, `key`) && r.key) return e.interpolate(e.named(r.key));
      throw Xi(n)
    }
    case 5: {
      let r = t;
      if (Br(r, `i`) && H(r.i)) return e.interpolate(e.list(r.i));
      if (Br(r, `index`) && H(r.index)) return e.interpolate(e.list(r.index));
      throw Xi(n)
    }
    case 6: {
      let n = t,
        r = Gi(n),
        i = qi(n);
      return e.linked(ea(e, i), r ? ea(e, r) : void 0, e.type)
    }
    case 7:
      return Ui(t, n);
    case 8:
      return Ui(t, n);
    default:
      throw Error(`unhandled node on format message part: ${n}`)
  }
}
var ta = e => e,
  na = W();

function ra(e, t = {}) {
  let n = !1,
    r = t.onError || Zr;
  return t.onError = e => {
    n = !0, r(e)
  }, {
    ...ki(e, t),
    detectError: n
  }
}

function ia(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && q(e)) {
    J(t.warnHtmlMessage) && t.warnHtmlMessage;
    let n = (t.onCacheKey || ta)(e),
      r = na[n];
    if (r) return r;
    let {
      ast: i,
      detectError: a
    } = ra(e, {
      ...t,
      location: !1,
      jit: !0
    }), o = Zi(i);
    return a ? o : na[n] = o
  } else {
    let t = e.cacheKey;
    return t ? na[t] || (na[t] = Zi(e)) : Zi(e)
  }
}
var aa = null;

function oa(e) {
  aa = e
}

function sa(e, t, n) {
  aa && aa.emit(`i18n:init`, {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  })
}
var ca = la(`function:translate`);

function la(e) {
  return t => aa && aa.emit(e, t)
}
var Q = {
  INVALID_ARGUMENT: 17,
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_NON_STRING_MESSAGE: 20,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
};

function ua(e) {
  return Xr(e, null, void 0)
}
Q.INVALID_ARGUMENT, Q.INVALID_DATE_ARGUMENT, Q.INVALID_ISO_DATE_ARGUMENT, Q.NOT_SUPPORT_NON_STRING_MESSAGE, Q.NOT_SUPPORT_LOCALE_PROMISE_VALUE, Q.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION, Q.NOT_SUPPORT_LOCALE_TYPE;

function da(e, t) {
  return t.locale == null ? pa(e.locale) : pa(t.locale)
}
var fa;

function pa(e) {
  if (q(e)) return e;
  if (K(e)) {
    if (e.resolvedOnce && fa != null) return fa;
    if (e.constructor.name === `Function`) {
      let t = e();
      if (Vr(t)) throw ua(Q.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return fa = t
    } else throw ua(Q.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)
  } else throw ua(Q.NOT_SUPPORT_LOCALE_TYPE)
}

function ma(e, t, n) {
  return [...new Set([n, ...G(t) ? t : Y(t) ? Object.keys(t) : q(t) ? [t] : [n]])]
}

function ha(e, t, n) {
  let r = q(n) ? n : ja,
    i = e;
  i.__localeChainCache ||= new Map;
  let a = i.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let e = [n];
    for (; G(e);) e = ga(a, e, t);
    let o = G(t) || !X(t) ? t : t.default ? t.default : null;
    e = q(o) ? [o] : o, G(e) && ga(a, e, !1), i.__localeChainCache.set(r, a)
  }
  return a
}

function ga(e, t, n) {
  let r = !0;
  for (let i = 0; i < t.length && J(r); i++) {
    let a = t[i];
    q(a) && (r = _a(e, t[i], n))
  }
  return r
}

function _a(e, t, n) {
  let r, i = t.split(`-`);
  do r = va(e, i.join(`-`), n), i.splice(-1, 1); while (i.length && r === !0);
  return r
}

function va(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== `!`;
    let i = t.replace(/!/g, ``);
    e.push(i), (G(n) || X(n)) && n[i] && (r = n[i])
  }
  return r
}
var ya = [];
ya[0] = {
  w: [0],
  i: [3, 0],
  "[": [4],
  o: [7]
}, ya[1] = {
  w: [1],
  ".": [2],
  "[": [4],
  o: [7]
}, ya[2] = {
  w: [2],
  i: [3, 0],
  0: [3, 0]
}, ya[3] = {
  i: [3, 0],
  0: [3, 0],
  w: [1, 1],
  ".": [2, 1],
  "[": [4, 1],
  o: [7, 1]
}, ya[4] = {
  "'": [5, 0],
  '"': [6, 0],
  "[": [4, 2],
  "]": [1, 3],
  o: 8,
  l: [4, 0]
}, ya[5] = {
  "'": [4, 0],
  o: 8,
  l: [5, 0]
}, ya[6] = {
  '"': [4, 0],
  o: 8,
  l: [6, 0]
};
var ba = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

function xa(e) {
  return ba.test(e)
}

function Sa(e) {
  let t = e.charCodeAt(0);
  return t === e.charCodeAt(e.length - 1) && (t === 34 || t === 39) ? e.slice(1, -1) : e
}

function Ca(e) {
  if (e == null) return `o`;
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
      return `i`;
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return `w`
  }
  return `i`
}

function wa(e) {
  let t = e.trim();
  return e.charAt(0) === `0` && isNaN(parseInt(e)) ? !1 : xa(t) ? Sa(t) : `*` + t
}

function Ta(e) {
  let t = [],
    n = -1,
    r = 0,
    i = 0,
    a, o, s, c, l, u, d, f = [];
  f[0] = () => {
    o === void 0 ? o = s : o += s
  }, f[1] = () => {
    o !== void 0 && (t.push(o), o = void 0)
  }, f[2] = () => {
    f[0](), i++
  }, f[3] = () => {
    if (i > 0) i--, r = 4, f[0]();
    else {
      if (i = 0, o === void 0 || (o = wa(o), o === !1)) return !1;
      f[1]()
    }
  };

  function p() {
    let t = e[n + 1];
    if (r === 5 && t === `'` || r === 6 && t === `"`) return n++, s = `\\` + t, f[0](), !0
  }
  for (; r !== null;)
    if (n++, a = e[n], !(a === `\\` && p())) {
      if (c = Ca(a), d = ya[r], l = d[c] || d.l || 8, l === 8 || (r = l[0], l[1] !== void 0 && (u = f[l[1]], u && (s = a, u() === !1)))) return;
      if (r === 7) return t
    }
}
var Ea = new Map;

function Da(e, t) {
  return Y(e) ? e[t] : null
}

function Oa(e, t) {
  if (!Y(e)) return null;
  let n = Ea.get(t);
  if (n || (n = Ta(t), n && Ea.set(t, n)), !n) return null;
  let r = n.length,
    i = e,
    a = 0;
  for (; a < r;) {
    let e = n[a];
    if (Yi.includes(e) && ji(i) || !Y(i) || !Br(i, e)) return null;
    let t = i[e];
    if (t === void 0 || K(i)) return null;
    i = t, a++
  }
  return i
}
var ka = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
  INVALID_NUMBER_ARGUMENT: 8,
  INVALID_DATE_ARGUMENT: 9
};
ka.NOT_FOUND_KEY, ka.FALLBACK_TO_TRANSLATE, ka.CANNOT_FORMAT_NUMBER, ka.FALLBACK_TO_NUMBER_FORMAT, ka.CANNOT_FORMAT_DATE, ka.FALLBACK_TO_DATE_FORMAT, ka.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER, ka.INVALID_NUMBER_ARGUMENT, ka.INVALID_DATE_ARGUMENT;
var Aa = `11.3.0`,
  ja = `en-US`,
  Ma = e => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;

function Na() {
  return {
    upper: (e, t) => t === `text` && q(e) ? e.toUpperCase() : t === `vnode` && Y(e) && `__v_isVNode` in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === `text` && q(e) ? e.toLowerCase() : t === `vnode` && Y(e) && `__v_isVNode` in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === `text` && q(e) ? Ma(e) : t === `vnode` && Y(e) && `__v_isVNode` in e ? Ma(e.children) : e
  }
}
var Pa;

function Fa(e) {
  Pa = e
}
var Ia;

function La(e) {
  Ia = e
}
var Ra;

function za(e) {
  Ra = e
}
var Ba = null,
  Va = () => Ba,
  Ha = null,
  Ua = e => {
    Ha = e
  },
  Wa = () => Ha,
  Ga = 0;

function Ka(e = {}) {
  let t = K(e.onWarn) ? e.onWarn : Tr,
    n = q(e.version) ? e.version : Aa,
    r = q(e.locale) || K(e.locale) ? e.locale : ja,
    i = K(r) ? ja : r,
    a = G(e.fallbackLocale) || X(e.fallbackLocale) || q(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i,
    o = X(e.messages) ? e.messages : qa(i),
    s = X(e.datetimeFormats) ? e.datetimeFormats : qa(i),
    c = X(e.numberFormats) ? e.numberFormats : qa(i),
    l = U(W(), e.modifiers, Na()),
    u = e.pluralRules || W(),
    d = K(e.missing) ? e.missing : null,
    f = J(e.missingWarn) || jr(e.missingWarn) ? e.missingWarn : !0,
    p = J(e.fallbackWarn) || jr(e.fallbackWarn) ? e.fallbackWarn : !0,
    m = !!e.fallbackFormat,
    h = !!e.unresolving,
    g = K(e.postTranslation) ? e.postTranslation : null,
    _ = X(e.processor) ? e.processor : null,
    v = J(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    y = !!e.escapeParameter,
    b = K(e.messageCompiler) ? e.messageCompiler : Pa,
    x = K(e.messageResolver) ? e.messageResolver : Ia || Da,
    S = K(e.localeFallbacker) ? e.localeFallbacker : Ra || ma,
    ee = Y(e.fallbackContext) ? e.fallbackContext : void 0,
    C = e,
    w = Y(C.__datetimeFormatters) ? C.__datetimeFormatters : new Map,
    te = Y(C.__numberFormatters) ? C.__numberFormatters : new Map,
    T = Y(C.__meta) ? C.__meta : {};
  Ga++;
  let E = {
    version: n,
    cid: Ga,
    locale: r,
    fallbackLocale: a,
    messages: o,
    modifiers: l,
    pluralRules: u,
    missing: d,
    missingWarn: f,
    fallbackWarn: p,
    fallbackFormat: m,
    unresolving: h,
    postTranslation: g,
    processor: _,
    warnHtmlMessage: v,
    escapeParameter: y,
    messageCompiler: b,
    messageResolver: x,
    localeFallbacker: S,
    fallbackContext: ee,
    onWarn: t,
    __meta: T
  };
  return E.datetimeFormats = s, E.numberFormats = c, E.__datetimeFormatters = w, E.__numberFormatters = te, __INTLIFY_PROD_DEVTOOLS__ && sa(E, n, T), E
}
var qa = e => ({
  [e]: W()
});

function Ja(e, t, n, r, i) {
  let {
    missing: a,
    onWarn: o
  } = e;
  if (a !== null) {
    let r = a(e, n, t, i);
    return q(r) ? r : t
  } else return t
}

function Ya(e, t, n) {
  let r = e;
  r.__localeChainCache = new Map, e.localeFallbacker(e, n, t)
}

function Xa(e, t) {
  return e === t ? !1 : e.split(`-`)[0] === t.split(`-`)[0]
}

function Za(e, t) {
  let n = t.indexOf(e);
  if (n === -1) return !1;
  for (let r = n + 1; r < t.length; r++)
    if (Xa(e, t[r])) return !0;
  return !1
}
var Qa = typeof Intl < `u`;
Qa && Intl.DateTimeFormat, Qa && Intl.NumberFormat;

function $a(e, ...t) {
  let {
    datetimeFormats: n,
    unresolving: r,
    fallbackLocale: i,
    onWarn: a,
    localeFallbacker: o
  } = e, {
    __datetimeFormatters: s
  } = e;
  if (!q(t[0]) && !Ar(t[0]) && !H(t[0])) return ``;
  let [c, l, u, d] = to(...t), f = J(u.missingWarn) ? u.missingWarn : e.missingWarn;
  J(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
  let p = !!u.part,
    m = da(e, u),
    h = o(e, i, m);
  if (!q(c) || c === ``) return new Intl.DateTimeFormat(m.replace(/!/g, ``), d)
    .format(l);
  let g = {},
    _, v = null;
  for (let t = 0; t < h.length && (_ = h[t], g = n[_] || {}, v = g[c], !X(v)); t++) Ja(e, c, _, f, `datetime format`);
  if (!X(v) || !q(_)) return r ? -1 : c;
  let y = `${_}__${c}`;
  Mr(d) || (y = `${y}__${JSON.stringify(d)}`);
  let b = s.get(y);
  return b || (b = new Intl.DateTimeFormat(_, U({}, v, d)), s.set(y, b)), p ? b.formatToParts(l) : b.format(l)
}
var eo = [`localeMatcher`, `weekday`, `era`, `year`, `month`, `day`, `hour`, `minute`, `second`, `timeZoneName`, `formatMatcher`, `hour12`, `timeZone`, `dateStyle`, `timeStyle`, `calendar`, `dayPeriod`, `numberingSystem`, `hourCycle`, `fractionalSecondDigits`];

function to(...e) {
  let [t, n, r, i] = e, a = W(), o = W(), s;
  if (q(t)) {
    let e = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!e) throw ua(Q.INVALID_ISO_DATE_ARGUMENT);
    let n = e[3] ? e[3].trim()
      .startsWith(`T`) ? `${e[1].trim()}${e[3].trim()}` : `${e[1].trim()}T${e[3].trim()}` : e[1].trim();
    s = new Date(n);
    try {
      s.toISOString()
    } catch {
      throw ua(Q.INVALID_ISO_DATE_ARGUMENT)
    }
  } else if (Ar(t)) {
    if (isNaN(t.getTime())) throw ua(Q.INVALID_DATE_ARGUMENT);
    s = t
  } else if (H(t)) s = t;
  else throw ua(Q.INVALID_ARGUMENT);
  return q(n) ? a.key = n : X(n) && Object.keys(n)
    .forEach(e => {
      eo.includes(e) ? o[e] = n[e] : a[e] = n[e]
    }), q(r) ? a.locale = r : X(r) && (o = r), X(i) && (o = i), [a.key || ``, s, a, o]
}

function no(e, t, n) {
  let r = e;
  for (let e in n) {
    let n = `${t}__${e}`;
    r.__datetimeFormatters.has(n) && r.__datetimeFormatters.delete(n)
  }
}

function ro(e, ...t) {
  let {
    numberFormats: n,
    unresolving: r,
    fallbackLocale: i,
    onWarn: a,
    localeFallbacker: o
  } = e, {
    __numberFormatters: s
  } = e;
  if (!H(t[0])) return ``;
  let [c, l, u, d] = ao(...t), f = J(u.missingWarn) ? u.missingWarn : e.missingWarn;
  J(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
  let p = !!u.part,
    m = da(e, u),
    h = o(e, i, m);
  if (!q(c) || c === ``) return new Intl.NumberFormat(m.replace(/!/g, ``), d)
    .format(l);
  let g = {},
    _, v = null;
  for (let t = 0; t < h.length && (_ = h[t], g = n[_] || {}, v = g[c], !X(v)); t++) Ja(e, c, _, f, `number format`);
  if (!X(v) || !q(_)) return r ? -1 : c;
  let y = `${_}__${c}`;
  Mr(d) || (y = `${y}__${JSON.stringify(d)}`);
  let b = s.get(y);
  return b || (b = new Intl.NumberFormat(_, U({}, v, d)), s.set(y, b)), p ? b.formatToParts(l) : b.format(l)
}
var io = [`localeMatcher`, `style`, `currency`, `currencyDisplay`, `currencySign`, `useGrouping`, `minimumIntegerDigits`, `minimumFractionDigits`, `maximumFractionDigits`, `minimumSignificantDigits`, `maximumSignificantDigits`, `compactDisplay`, `notation`, `signDisplay`, `unit`, `unitDisplay`, `roundingMode`, `roundingPriority`, `roundingIncrement`, `trailingZeroDisplay`];

function ao(...e) {
  let [t, n, r, i] = e, a = W(), o = W();
  if (!H(t)) throw ua(Q.INVALID_ARGUMENT);
  let s = t;
  return q(n) ? a.key = n : X(n) && Object.keys(n)
    .forEach(e => {
      io.includes(e) ? o[e] = n[e] : a[e] = n[e]
    }), q(r) ? a.locale = r : X(r) && (o = r), X(i) && (o = i), [a.key || ``, s, a, o]
}

function oo(e, t, n) {
  let r = e;
  for (let e in n) {
    let n = `${t}__${e}`;
    r.__numberFormatters.has(n) && r.__numberFormatters.delete(n)
  }
}
var so = e => e,
  co = e => ``,
  lo = `text`,
  uo = e => e.length === 0 ? `` : Gr(e),
  fo = Wr;

function po(e, t) {
  return e = Math.abs(e), t === 2 ? e === 1 ? 0 : 1 : Math.min(e, 2)
}

function mo(e) {
  let t = H(e.pluralIndex) ? e.pluralIndex : -1;
  return H(e.named?.count) ? e.named.count : H(e.named?.n) ? e.named.n : t
}

function ho(e = {}) {
  let t = e.locale,
    n = mo(e),
    r = q(t) && K(e.pluralRules?.[t]) ? e.pluralRules[t] : po,
    i = r === po ? void 0 : po,
    a = e => e[r(n, e.length, i)],
    o = e.list || [],
    s = e => o[e],
    c = e.named || W();
  H(e.pluralIndex) && (c.count ||= e.pluralIndex, c.n ||= e.pluralIndex);
  let l = e => c[e];

  function u(t, n) {
    return (K(e.messages) ? e.messages(t, !!n) : Y(e.messages) ? e.messages[t] : !1) || (e.parent ? e.parent.message(t) : co)
  }
  let d = t => e.modifiers ? e.modifiers[t] : so,
    f = K(e.processor?.normalize) ? e.processor.normalize : uo,
    p = K(e.processor?.interpolate) ? e.processor.interpolate : fo,
    m = {
      list: s,
      named: l,
      plural: a,
      linked: (e, ...t) => {
        let [n, r] = t, i = `text`, a = ``;
        t.length === 1 ? Y(n) ? (a = n.modifier || a, i = n.type || i) : q(n) && (a = n || a) : t.length === 2 && (q(n) && (a = n || a), q(r) && (i = r || i));
        let o = u(e, !0)(m),
          s = o === `` || o === void 0 ? e : o,
          c = i === `vnode` && G(s) && a ? s[0] : s;
        return a ? d(a)(c, i) : c
      },
      message: u,
      type: q(e.processor?.type) ? e.processor.type : lo,
      interpolate: p,
      normalize: f,
      values: U(W(), o, c)
    };
  return m
}
var go = () => ``,
  _o = e => K(e);

function vo(e, ...t) {
  let {
    fallbackFormat: n,
    postTranslation: r,
    unresolving: i,
    messageCompiler: a,
    fallbackLocale: o,
    messages: s
  } = e, [c, l] = Co(...t), u = J(l.missingWarn) ? l.missingWarn : e.missingWarn, d = J(l.fallbackWarn) ? l.fallbackWarn : e.fallbackWarn, f = J(l.escapeParameter) ? l.escapeParameter : e.escapeParameter, p = !!l.resolvedMessage, m = q(l.default) || J(l.default) ? J(l.default) ? a ? c : () => c : l.default : n ? a ? c : () => c : null, h = n || m != null && (q(m) || K(m)), g = da(e, l);
  f && yo(l);
  let [_, v, y] = p ? [c, g, s[g] || W()] : bo(e, c, g, o, d, u), b = _, x = c;
  if (!p && !(q(b) || ji(b) || _o(b)) && h && (b = m, x = b), !p && (!(q(b) || ji(b) || _o(b)) || !q(v))) return i ? -1 : c;
  let S = !1,
    ee = _o(b) ? b : xo(e, c, v, b, x, () => {
      S = !0
    });
  if (S) return b;
  let C = So(e, ee, ho(To(e, v, y, l))),
    w = r ? r(C, c) : C;
  if (f && q(w) && (w = Rr(w)), __INTLIFY_PROD_DEVTOOLS__) {
    let t = {
      timestamp: Date.now(),
      key: q(c) ? c : _o(b) ? b.key : ``,
      locale: v || (_o(b) ? b.locale : ``),
      format: q(b) ? b : _o(b) ? b.source : ``,
      message: w
    };
    t.meta = U({}, e.__meta, Va() || {}), ca(t)
  }
  return w
}

function yo(e) {
  G(e.list) ? e.list = e.list.map(e => q(e) ? Ir(e) : e) : Y(e.named) && Object.keys(e.named)
    .forEach(t => {
      q(e.named[t]) && (e.named[t] = Ir(e.named[t]))
    })
}

function bo(e, t, n, r, i, a) {
  let {
    messages: o,
    onWarn: s,
    messageResolver: c,
    localeFallbacker: l
  } = e, u = l(e, r, n), d = W(), f, p = null;
  for (let n = 0; n < u.length && (f = u[n], d = o[f] || W(), (p = c(d, t)) === null && (p = d[t]), !(q(p) || ji(p) || _o(p))); n++)
    if (!Za(f, u)) {
      let n = Ja(e, t, f, a, `translate`);
      n !== t && (p = n)
    } return [p, f, d]
}

function xo(e, t, n, r, i, a) {
  let {
    messageCompiler: o,
    warnHtmlMessage: s
  } = e;
  if (_o(r)) {
    let e = r;
    return e.locale = e.locale || n, e.key = e.key || t, e
  }
  if (o == null) {
    let e = (() => r);
    return e.locale = n, e.key = t, e
  }
  let c = o(r, wo(e, n, i, r, s, a));
  return c.locale = n, c.key = t, c.source = r, c
}

function So(e, t, n) {
  return t(n)
}

function Co(...e) {
  let [t, n, r] = e, i = W();
  if (!q(t) && !H(t) && !_o(t) && !ji(t)) throw ua(Q.INVALID_ARGUMENT);
  let a = H(t) ? String(t) : (_o(t), t);
  return H(n) ? i.plural = n : q(n) ? i.default = n : X(n) && !Mr(n) ? i.named = n : G(n) && (i.list = n), H(r) ? i.plural = r : q(r) ? i.default = r : X(r) && U(i, r), [a, i]
}

function wo(e, t, n, r, i, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: i,
    onError: e => {
      throw a && a(e), e
    },
    onCacheKey: e => Or(t, n, e)
  }
}

function To(e, t, n, r) {
  let {
    modifiers: i,
    pluralRules: a,
    messageResolver: o,
    fallbackLocale: s,
    fallbackWarn: c,
    missingWarn: l,
    fallbackContext: u
  } = e, d = {
    locale: t,
    modifiers: i,
    pluralRules: a,
    messages: (r, i) => {
      let a = o(n, r);
      if (a == null && (u || i)) {
        let [, , n] = bo(u || e, r, t, s, c, l);
        a = o(n, r)
      }
      if (q(a) || ji(a)) {
        let n = !1,
          i = xo(e, r, t, a, r, () => {
            n = !0
          });
        return n ? go : i
      } else if (_o(a)) return a;
      else return go
    }
  };
  return e.processor && (d.processor = e.processor), r.list && (d.list = r.list), r.named && (d.named = r.named), H(r.plural) && (d.pluralIndex = r.plural), d
}
Ai();
var Eo = `11.3.0`;

function Do() {
  typeof __VUE_I18N_FULL_INSTALL__ != `boolean` && (Fr()
    .__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != `boolean` && (Fr()
    .__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != `boolean` && (Fr()
    .__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != `boolean` && (Fr()
    .__INTLIFY_PROD_DEVTOOLS__ = !1)
}
var $ = {
  UNEXPECTED_RETURN_TYPE: 24,
  INVALID_ARGUMENT: 25,
  MUST_BE_CALL_SETUP_TOP: 26,
  NOT_INSTALLED: 27,
  REQUIRED_VALUE: 28,
  INVALID_VALUE: 29,
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: 30,
  NOT_INSTALLED_WITH_PROVIDE: 31,
  UNEXPECTED_ERROR: 32,
  NOT_COMPATIBLE_LEGACY_VUE_I18N: 33,
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: 34
};

function Oo(e, ...t) {
  return Xr(e, null, void 0)
}
$.UNEXPECTED_RETURN_TYPE, $.INVALID_ARGUMENT, $.MUST_BE_CALL_SETUP_TOP, $.NOT_INSTALLED, $.UNEXPECTED_ERROR, $.REQUIRED_VALUE, $.INVALID_VALUE, $.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN, $.NOT_INSTALLED_WITH_PROVIDE, $.NOT_COMPATIBLE_LEGACY_VUE_I18N, $.NOT_AVAILABLE_COMPOSITION_IN_LEGACY;
var ko = Dr(`__translateVNode`),
  Ao = Dr(`__datetimeParts`),
  jo = Dr(`__numberParts`),
  Mo = Dr(`__setPluralRules`);
Dr(`__intlifyMeta`);
var No = Dr(`__injectWithOption`),
  Po = Dr(`__dispose`),
  Fo = {
    FALLBACK_TO_ROOT: 10,
    NOT_FOUND_PARENT_SCOPE: 11,
    IGNORE_OBJ_FLATTEN: 12,
    DEPRECATE_LEGACY_MODE: 13,
    DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE: 14,
    DUPLICATE_USE_I18N_CALLING: 15
  };
Fo.FALLBACK_TO_ROOT, Fo.NOT_FOUND_PARENT_SCOPE, Fo.IGNORE_OBJ_FLATTEN, Fo.DEPRECATE_LEGACY_MODE, Fo.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE, Fo.DUPLICATE_USE_I18N_CALLING;

function Io(e) {
  if (!Y(e) || ji(e)) return e;
  for (let t in e)
    if (Br(e, t))
      if (!t.includes(`.`)) Y(e[t]) && Io(e[t]);
      else {
        let n = t.split(`.`),
          r = n.length - 1,
          i = e,
          a = !1;
        for (let e = 0; e < r; e++) {
          if (n[e] === `__proto__`) throw Error(`unsafe key: ${n[e]}`);
          if (n[e] in i || (i[n[e]] = W()), !Y(i[n[e]])) {
            a = !0;
            break
          }
          i = i[n[e]]
        }
        if (a || (ji(i) ? Yi.includes(n[r]) || delete e[t] : (i[n[r]] = e[t], delete e[t])), !ji(i)) {
          let e = i[n[r]];
          Y(e) && Io(e)
        }
      } return e
}

function Lo(e, t) {
  let {
    messages: n,
    __i18n: r,
    messageResolver: i,
    flatJson: a
  } = t, o = X(n) ? n : G(r) ? W() : {
    [e]: W()
  };
  if (G(r) && r.forEach(e => {
      if (`locale` in e && `resource` in e) {
        let {
          locale: t,
          resource: n
        } = e;
        t ? (o[t] = o[t] || W(), qr(n, o[t])) : qr(n, o)
      } else q(e) && qr(JSON.parse(e), o)
    }), i == null && a)
    for (let e in o) Br(o, e) && Io(o[e]);
  return o
}

function Ro(e) {
  return e.type
}

function zo(e, t, n) {
  let r = Y(t.messages) ? t.messages : W();
  `__i18nGlobal` in n && (r = Lo(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  let i = Object.keys(r);
  if (i.length && i.forEach(t => {
      e.mergeLocaleMessage(t, r[t])
    }), Y(t.datetimeFormats)) {
    let n = Object.keys(t.datetimeFormats);
    n.length && n.forEach(n => {
      e.mergeDateTimeFormat(n, t.datetimeFormats[n])
    })
  }
  if (Y(t.numberFormats)) {
    let n = Object.keys(t.numberFormats);
    n.length && n.forEach(n => {
      e.mergeNumberFormat(n, t.numberFormats[n])
    })
  }
}

function Bo(e) {
  return g(y, null, e, 0)
}

function Vo() {
  let e = `currentInstance`;
  return e in x ? x[e] : ee()
}
var Ho = () => [],
  Uo = () => !1,
  Wo = 0;

function Go(e) {
  return ((t, n, r, i) => e(n, r, Vo() || void 0, i))
}

function Ko(t = {}) {
  let {
    __root: n,
    __injectWithOption: r
  } = t, i = n === void 0, a = t.flatJson, o = Er ? l : e, s = J(t.inheritLocale) ? t.inheritLocale : !0, u = o(n && s ? n.locale.value : q(t.locale) ? t.locale : ja), d = o(n && s ? n.fallbackLocale.value : q(t.fallbackLocale) || G(t.fallbackLocale) || X(t.fallbackLocale) || t.fallbackLocale === !1 ? t.fallbackLocale : u.value), f = o(Lo(u.value, t)), p = o(X(t.datetimeFormats) ? t.datetimeFormats : {
    [u.value]: {}
  }), m = o(X(t.numberFormats) ? t.numberFormats : {
    [u.value]: {}
  }), h = n ? n.missingWarn : J(t.missingWarn) || jr(t.missingWarn) ? t.missingWarn : !0, g = n ? n.fallbackWarn : J(t.fallbackWarn) || jr(t.fallbackWarn) ? t.fallbackWarn : !0, _ = n ? n.fallbackRoot : J(t.fallbackRoot) ? t.fallbackRoot : !0, v = !!t.fallbackFormat, y = K(t.missing) ? t.missing : null, b = K(t.missing) ? Go(t.missing) : null, x = K(t.postTranslation) ? t.postTranslation : null, ee = n ? n.warnHtmlMessage : J(t.warnHtmlMessage) ? t.warnHtmlMessage : !0, C = !!t.escapeParameter, w = n ? n.modifiers : X(t.modifiers) ? t.modifiers : {}, te = t.pluralRules || n && n.pluralRules, T;
  T = (() => {
    i && Ua(null);
    let e = {
      version: Eo,
      locale: u.value,
      fallbackLocale: d.value,
      messages: f.value,
      modifiers: w,
      pluralRules: te,
      missing: b === null ? void 0 : b,
      missingWarn: h,
      fallbackWarn: g,
      fallbackFormat: v,
      unresolving: !0,
      postTranslation: x === null ? void 0 : x,
      warnHtmlMessage: ee,
      escapeParameter: C,
      messageResolver: t.messageResolver,
      messageCompiler: t.messageCompiler,
      __meta: {
        framework: `vue`
      }
    };
    e.datetimeFormats = p.value, e.numberFormats = m.value, e.__datetimeFormatters = X(T) ? T.__datetimeFormatters : void 0, e.__numberFormatters = X(T) ? T.__numberFormatters : void 0;
    let n = Ka(e);
    return i && Ua(n), n
  })(), Ya(T, u.value, d.value);

  function E() {
    return [u.value, d.value, f.value, p.value, m.value]
  }
  let ne = S({
      get: () => u.value,
      set: e => {
        T.locale = e, u.value = e
      }
    }),
    D = S({
      get: () => d.value,
      set: e => {
        T.fallbackLocale = e, d.value = e, Ya(T, u.value, e)
      }
    }),
    re = S(() => f.value),
    ie = S(() => p.value),
    ae = S(() => m.value);

  function oe() {
    return K(x) ? x : null
  }

  function O(e) {
    x = e, T.postTranslation = e
  }

  function se() {
    return y
  }

  function k(e) {
    e !== null && (b = Go(e)), y = e, T.missing = b
  }
  let A = (e, t, r, a, o, s) => {
    E();
    let c;
    try {
      __INTLIFY_PROD_DEVTOOLS__,
      i || (T.fallbackContext = n ? Wa() : void 0),
      c = e(T)
    }
    finally {
      __INTLIFY_PROD_DEVTOOLS__,
      i || (T.fallbackContext = void 0)
    }
    if (r !== `translate exists` && H(c) && c === -1 || r === `translate exists` && !c) {
      let [e, r] = t();
      return n && _ ? a(n) : o(e)
    } else if (s(c)) return c;
    else throw Oo($.UNEXPECTED_RETURN_TYPE)
  };

  function j(...e) {
    return A(t => Reflect.apply(vo, null, [t, ...e]), () => Co(...e), `translate`, t => Reflect.apply(t.t, t, [...e]), e => e, e => q(e))
  }

  function ce(...e) {
    let [t, n, r] = e;
    if (r && !Y(r)) throw Oo($.INVALID_ARGUMENT);
    return j(t, n, U({
      resolvedMessage: !0
    }, r || {}))
  }

  function M(...e) {
    return A(t => Reflect.apply($a, null, [t, ...e]), () => to(...e), `datetime format`, t => Reflect.apply(t.d, t, [...e]), () => ``, e => q(e) || G(e))
  }

  function le(...e) {
    return A(t => Reflect.apply(ro, null, [t, ...e]), () => ao(...e), `number format`, t => Reflect.apply(t.n, t, [...e]), () => ``, e => q(e) || G(e))
  }

  function ue(e) {
    return e.map(e => q(e) || H(e) || J(e) ? Bo(String(e)) : e)
  }
  let N = {
    normalize: ue,
    interpolate: e => e,
    type: `vnode`
  };

  function de(...e) {
    return A(t => {
      let n, r = t;
      try {
        r.processor = N, n = Reflect.apply(vo, null, [r, ...e])
      } finally {
        r.processor = null
      }
      return n
    }, () => Co(...e), `translate`, t => t[ko](...e), e => [Bo(e)], e => G(e))
  }

  function fe(...e) {
    return A(t => Reflect.apply(ro, null, [t, ...e]), () => ao(...e), `number format`, t => t[jo](...e), Ho, e => q(e) || G(e))
  }

  function pe(...e) {
    return A(t => Reflect.apply($a, null, [t, ...e]), () => to(...e), `datetime format`, t => t[Ao](...e), Ho, e => q(e) || G(e))
  }

  function me(e) {
    te = e, T.pluralRules = te
  }

  function P(e, t) {
    return A(() => {
      if (!e) return !1;
      let n = q(t) ? t : u.value,
        r = q(t) ? [n] : ha(T, d.value, n);
      for (let t = 0; t < r.length; t++) {
        let n = ge(r[t]),
          i = T.messageResolver(n, e);
        if (i === null && (i = n[e]), ji(i) || _o(i) || q(i)) return !0
      }
      return !1
    }, () => [e], `translate exists`, n => Reflect.apply(n.te, n, [e, t]), Uo, e => J(e))
  }

  function he(e) {
    let t = null,
      n = ha(T, d.value, u.value);
    for (let r = 0; r < n.length; r++) {
      let i = f.value[n[r]] || {},
        a = T.messageResolver(i, e);
      if (a != null) {
        t = a;
        break
      }
    }
    return t
  }

  function F(e) {
    return he(e) ?? (n && n.tm(e) || {})
  }

  function ge(e) {
    return f.value[e] || {}
  }

  function _e(e, t) {
    if (a) {
      let n = {
        [e]: t
      };
      for (let e in n) Br(n, e) && Io(n[e]);
      t = n[e]
    }
    f.value[e] = t, T.messages = f.value
  }

  function ve(e, t) {
    f.value[e] = f.value[e] || {};
    let n = {
      [e]: t
    };
    if (a)
      for (let e in n) Br(n, e) && Io(n[e]);
    t = n[e], qr(t, f.value[e]), T.messages = f.value
  }

  function ye(e) {
    return p.value[e] || {}
  }

  function be(e, t) {
    p.value[e] = t, T.datetimeFormats = p.value, no(T, e, t)
  }

  function xe(e, t) {
    p.value[e] = U(p.value[e] || {}, t), T.datetimeFormats = p.value, no(T, e, t)
  }

  function I(e) {
    return m.value[e] || {}
  }

  function Se(e, t) {
    m.value[e] = t, T.numberFormats = m.value, oo(T, e, t)
  }

  function Ce(e, t) {
    m.value[e] = U(m.value[e] || {}, t), T.numberFormats = m.value, oo(T, e, t)
  }
  Wo++, n && Er && (c(n.locale, e => {
    s && (u.value = e, T.locale = e, Ya(T, u.value, d.value))
  }), c(n.fallbackLocale, e => {
    s && (d.value = e, T.fallbackLocale = e, Ya(T, u.value, d.value))
  }));
  let L = {
    id: Wo,
    locale: ne,
    fallbackLocale: D,
    get inheritLocale() {
      return s
    },
    set inheritLocale(e) {
      s = e, e && n && (u.value = n.locale.value, d.value = n.fallbackLocale.value, Ya(T, u.value, d.value))
    },
    get availableLocales() {
      return Object.keys(f.value)
        .sort()
    },
    messages: re,
    get modifiers() {
      return w
    },
    get pluralRules() {
      return te || {}
    },
    get isGlobal() {
      return i
    },
    get missingWarn() {
      return h
    },
    set missingWarn(e) {
      h = e, T.missingWarn = h
    },
    get fallbackWarn() {
      return g
    },
    set fallbackWarn(e) {
      g = e, T.fallbackWarn = g
    },
    get fallbackRoot() {
      return _
    },
    set fallbackRoot(e) {
      _ = e
    },
    get fallbackFormat() {
      return v
    },
    set fallbackFormat(e) {
      v = e, T.fallbackFormat = v
    },
    get warnHtmlMessage() {
      return ee
    },
    set warnHtmlMessage(e) {
      ee = e, T.warnHtmlMessage = e
    },
    get escapeParameter() {
      return C
    },
    set escapeParameter(e) {
      C = e, T.escapeParameter = e
    },
    t: j,
    getLocaleMessage: ge,
    setLocaleMessage: _e,
    mergeLocaleMessage: ve,
    getPostTranslationHandler: oe,
    setPostTranslationHandler: O,
    getMissingHandler: se,
    setMissingHandler: k,
    [Mo]: me
  };
  return L.datetimeFormats = ie, L.numberFormats = ae, L.rt = ce, L.te = P, L.tm = F, L.d = M, L.n = le, L.getDateTimeFormat = ye, L.setDateTimeFormat = be, L.mergeDateTimeFormat = xe, L.getNumberFormat = I, L.setNumberFormat = Se, L.mergeNumberFormat = Ce, L[No] = r, L[ko] = de, L[Ao] = pe, L[jo] = fe, L
}

function qo(e) {
  let t = q(e.locale) ? e.locale : ja,
    n = q(e.fallbackLocale) || G(e.fallbackLocale) || X(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t,
    r = K(e.missing) ? e.missing : void 0,
    i = J(e.silentTranslationWarn) || jr(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0,
    a = J(e.silentFallbackWarn) || jr(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0,
    o = J(e.fallbackRoot) ? e.fallbackRoot : !0,
    s = !!e.formatFallbackMessages,
    c = X(e.modifiers) ? e.modifiers : {},
    l = e.pluralizationRules,
    u = K(e.postTranslation) ? e.postTranslation : void 0,
    d = q(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== `off` : !0,
    f = !!e.escapeParameterHtml,
    p = J(e.sync) ? e.sync : !0,
    m = e.messages;
  if (X(e.sharedMessages)) {
    let t = e.sharedMessages;
    m = Object.keys(t)
      .reduce((e, n) => (U(e[n] || (e[n] = {}), t[n]), e), m || {})
  }
  let {
    __i18n: h,
    __root: g,
    __injectWithOption: _
  } = e, v = e.datetimeFormats, y = e.numberFormats, b = e.flatJson;
  return {
    locale: t,
    fallbackLocale: n,
    messages: m,
    flatJson: b,
    datetimeFormats: v,
    numberFormats: y,
    missing: r,
    missingWarn: i,
    fallbackWarn: a,
    fallbackRoot: o,
    fallbackFormat: s,
    modifiers: c,
    pluralRules: l,
    postTranslation: u,
    warnHtmlMessage: d,
    escapeParameter: f,
    messageResolver: e.messageResolver,
    inheritLocale: p,
    __i18n: h,
    __root: g,
    __injectWithOption: _
  }
}

function Jo(e = {}) {
  let t = Ko(qo(e)),
    {
      __extender: n
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
        return J(t.missingWarn) ? !t.missingWarn : t.missingWarn
      },
      set silentTranslationWarn(e) {
        t.missingWarn = J(e) ? !e : e
      },
      get silentFallbackWarn() {
        return J(t.fallbackWarn) ? !t.fallbackWarn : t.fallbackWarn
      },
      set silentFallbackWarn(e) {
        t.fallbackWarn = J(e) ? !e : e
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
        return t.warnHtmlMessage ? `warn` : `off`
      },
      set warnHtmlInMessage(e) {
        t.warnHtmlMessage = e !== `off`
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
      t(...e) {
        return Reflect.apply(t.t, t, [...e])
      },
      rt(...e) {
        return Reflect.apply(t.rt, t, [...e])
      },
      te(e, n) {
        return t.te(e, n)
      },
      tm(e) {
        return t.tm(e)
      },
      getLocaleMessage(e) {
        return t.getLocaleMessage(e)
      },
      setLocaleMessage(e, n) {
        t.setLocaleMessage(e, n)
      },
      mergeLocaleMessage(e, n) {
        t.mergeLocaleMessage(e, n)
      },
      d(...e) {
        return Reflect.apply(t.d, t, [...e])
      },
      getDateTimeFormat(e) {
        return t.getDateTimeFormat(e)
      },
      setDateTimeFormat(e, n) {
        t.setDateTimeFormat(e, n)
      },
      mergeDateTimeFormat(e, n) {
        t.mergeDateTimeFormat(e, n)
      },
      n(...e) {
        return Reflect.apply(t.n, t, [...e])
      },
      getNumberFormat(e) {
        return t.getNumberFormat(e)
      },
      setNumberFormat(e, n) {
        t.setNumberFormat(e, n)
      },
      mergeNumberFormat(e, n) {
        t.mergeNumberFormat(e, n)
      }
    };
  return r.__extender = n, r
}

function Yo(e, t, n) {
  return {
    beforeCreate() {
      let r = Vo();
      if (!r) throw Oo($.UNEXPECTED_ERROR);
      let i = this.$options;
      if (i.i18n) {
        let r = i.i18n;
        if (i.__i18n && (r.__i18n = i.__i18n), r.__root = t, this === this.$root) this.$i18n = Xo(e, r);
        else {
          r.__injectWithOption = !0, r.__extender = n.__vueI18nExtend, this.$i18n = Jo(r);
          let e = this.$i18n;
          e.__extender && (e.__disposer = e.__extender(this.$i18n))
        }
      } else if (i.__i18n)
        if (this === this.$root) this.$i18n = Xo(e, i);
        else {
          this.$i18n = Jo({
            __i18n: i.__i18n,
            __injectWithOption: !0,
            __extender: n.__vueI18nExtend,
            __root: t
          });
          let e = this.$i18n;
          e.__extender && (e.__disposer = e.__extender(this.$i18n))
        }
      else this.$i18n = e;
      i.__i18nGlobal && zo(t, i, i), this.$t = (...e) => this.$i18n.t(...e), this.$rt = (...e) => this.$i18n.rt(...e), this.$te = (e, t) => this.$i18n.te(e, t), this.$d = (...e) => this.$i18n.d(...e), this.$n = (...e) => this.$i18n.n(...e), this.$tm = e => this.$i18n.tm(e), n.__setInstance(r, this.$i18n)
    },
    mounted() {},
    unmounted() {
      let e = Vo();
      if (!e) throw Oo($.UNEXPECTED_ERROR);
      let t = this.$i18n;
      delete this.$t, delete this.$rt, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, t.__disposer && (t.__disposer(), delete t.__disposer, delete t.__extender), n.__deleteInstance(e), delete this.$i18n
    }
  }
}

function Xo(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[Mo](t.pluralizationRules || e.pluralizationRules);
  let n = Lo(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n)
    .forEach(t => e.mergeLocaleMessage(t, n[t])), t.datetimeFormats && Object.keys(t.datetimeFormats)
    .forEach(n => e.mergeDateTimeFormat(n, t.datetimeFormats[n])), t.numberFormats && Object.keys(t.numberFormats)
    .forEach(n => e.mergeNumberFormat(n, t.numberFormats[n])), e
}
var Zo = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    validator: e => e === `parent` || e === `global`,
    default: `parent`
  },
  i18n: {
    type: Object
  }
};

function Qo({
  slots: e
}, t) {
  return t.length === 1 && t[0] === `default` ? (e.default ? e.default() : [])
    .reduce((e, t) => [...e, ...t.type === b ? t.children : [t]], []) : t.reduce((t, n) => {
      let r = e[n];
      return r && (t[n] = r()), t
    }, W())
}

function $o() {
  return b
}
var es = p({
  name: `i18n-t`,
  props: U({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      validator: e => H(e) || !isNaN(e)
    }
  }, Zo),
  setup(e, t) {
    let {
      slots: n,
      attrs: r
    } = t, i = e.i18n || ds({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      let a = Object.keys(n)
        .filter(e => e[0] !== `_`),
        o = W();
      e.locale && (o.locale = e.locale), e.plural !== void 0 && (o.plural = q(e.plural) ? +e.plural : e.plural);
      let s = Qo(t, a),
        c = i[ko](e.keypath, s, o),
        l = U(W(), r);
      return w(q(e.tag) || Y(e.tag) ? e.tag : $o(), l, c)
    }
  }
});

function ts(e) {
  return G(e) && !q(e[0])
}

function ns(e, t, n, r) {
  let {
    slots: i,
    attrs: a
  } = t;
  return () => {
    let t = {
        part: !0
      },
      o = W();
    e.locale && (t.locale = e.locale), q(e.format) ? t.key = e.format : Y(e.format) && (q(e.format.key) && (t.key = e.format.key), o = Object.keys(e.format)
      .reduce((t, r) => n.includes(r) ? U(W(), t, {
        [r]: e.format[r]
      }) : t, W()));
    let s = r(e.value, t, o),
      c = [t.key];
    G(s) ? c = s.map((e, t) => {
      let n = i[e.type],
        r = n ? n({
          [e.type]: e.value,
          index: t,
          parts: s
        }) : [e.value];
      return ts(r) && (r[0].key = `${e.type}-${t}`), r
    }) : q(s) && (c = [s]);
    let l = U(W(), a);
    return w(q(e.tag) || Y(e.tag) ? e.tag : $o(), l, c)
  }
}
var rs = p({
  name: `i18n-n`,
  props: U({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, Zo),
  setup(e, t) {
    let n = e.i18n || ds({
      useScope: e.scope,
      __useComponent: !0
    });
    return ns(e, t, io, (...e) => n[jo](...e))
  }
});

function is(e, t) {
  let n = e;
  if (e.mode === `composition`) return n.__getInstance(t) || e.global;
  {
    let r = n.__getInstance(t);
    return r == null ? e.global.__composer : r.__composer
  }
}

function as(e) {
  let t = t => {
    let {
      instance: n,
      value: r
    } = t;
    if (!n || !n.$) throw Oo($.UNEXPECTED_ERROR);
    let i = is(e, n.$),
      a = os(r);
    return [Reflect.apply(i.t, i, [...ss(a)]), i]
  };
  return {
    created: (e, n) => {
      let [r, i] = t(n);
      Er && (e.__i18nWatcher = c(i.locale, () => {
        n.instance && n.instance.$forceUpdate()
      })), e.__composer = i, e.textContent = r
    },
    unmounted: e => {
      Er && e.__i18nWatcher && (e.__i18nWatcher(), e.__i18nWatcher = void 0, delete e.__i18nWatcher), e.__composer && (e.__composer = void 0, delete e.__composer)
    },
    beforeUpdate: (e, {
      value: t
    }) => {
      if (e.__composer) {
        let n = e.__composer,
          r = os(t);
        e.textContent = Reflect.apply(n.t, n, [...ss(r)])
      }
    },
    getSSRProps: e => {
      let [n] = t(e);
      return {
        textContent: n
      }
    }
  }
}

function os(e) {
  if (q(e)) return {
    path: e
  };
  if (X(e)) {
    if (!(`path` in e)) throw Oo($.REQUIRED_VALUE, `path`);
    return e
  } else throw Oo($.INVALID_VALUE)
}

function ss(e) {
  let {
    path: t,
    locale: n,
    args: r,
    choice: i,
    plural: a
  } = e, o = {}, s = r || {};
  return q(n) && (o.locale = n), H(i) && (o.plural = i), H(a) && (o.plural = a), [t, s, o]
}

function cs(e, t, ...n) {
  let r = X(n[0]) ? n[0] : {};
  (!J(r.globalInstall) || r.globalInstall) && ([es.name, `I18nT`].forEach(t => e.component(t, es)), [rs.name, `I18nN`].forEach(t => e.component(t, rs)), [Ss.name, `I18nD`].forEach(t => e.component(t, Ss))), e.directive(`t`, as(t))
}
var ls = Dr(`global-vue-i18n`);

function us(e = {}) {
  let t = __VUE_I18N_LEGACY_API__ && J(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__,
    n = J(e.globalInjection) ? e.globalInjection : !0,
    r = new Map,
    [i, a] = fs(e, t),
    o = Dr(``);

  function s(e) {
    return r.get(e) || null
  }

  function c(e, t) {
    r.set(e, t)
  }

  function l(e) {
    r.delete(e)
  }
  let u = {
    get mode() {
      return __VUE_I18N_LEGACY_API__ && t ? `legacy` : `composition`
    },
    async install(e, ...r) {
      if (e.__VUE_I18N_SYMBOL__ = o, e.provide(e.__VUE_I18N_SYMBOL__, u), X(r[0])) {
        let e = r[0];
        u.__composerExtend = e.__composerExtend, u.__vueI18nExtend = e.__vueI18nExtend
      }
      let i = null;
      !t && n && (i = xs(e, u.global)), __VUE_I18N_FULL_INSTALL__ && cs(e, u, ...r), __VUE_I18N_LEGACY_API__ && t && e.mixin(Yo(a, a.__composer, u));
      let s = e.unmount;
      e.unmount = () => {
        i && i(), u.dispose(), s()
      }
    },
    get global() {
      return a
    },
    dispose() {
      i.stop()
    },
    __instances: r,
    __getInstance: s,
    __setInstance: c,
    __deleteInstance: l
  };
  return u
}

function ds(e = {}) {
  let t = Vo();
  if (t == null) throw Oo($.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw Oo($.NOT_INSTALLED);
  let n = ps(t),
    r = hs(n),
    i = Ro(t),
    a = ms(e, i);
  if (a === `global`) return zo(r, e, i), r;
  if (a === `parent`) {
    let i = gs(n, t, e.__useComponent);
    return i ??= r, i
  }
  let o = n,
    s = o.__getInstance(t);
  if (s == null) {
    let n = U({}, e);
    `__i18n` in i && (n.__i18n = i.__i18n), r && (n.__root = r), s = Ko(n), o.__composerExtend && (s[Po] = o.__composerExtend(s)), vs(o, t, s), o.__setInstance(t, s)
  }
  return s
}

function fs(e, t) {
  let n = r(),
    i = __VUE_I18N_LEGACY_API__ && t ? n.run(() => Jo(e)) : n.run(() => Ko(e));
  if (i == null) throw Oo($.UNEXPECTED_ERROR);
  return [n, i]
}

function ps(e) {
  let t = m(e.isCE ? ls : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t) throw Oo(e.isCE ? $.NOT_INSTALLED_WITH_PROVIDE : $.UNEXPECTED_ERROR);
  return t
}

function ms(e, t) {
  return Mr(e) ? `__i18n` in t ? `local` : `global` : e.useScope ? e.useScope : `local`
}

function hs(e) {
  return e.mode === `composition` ? e.global : e.global.__composer
}

function gs(e, t, n = !1) {
  let r = null,
    i = t.root,
    a = _s(t, n);
  for (; a != null;) {
    let t = e;
    if (e.mode === `composition`) r = t.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      let e = t.__getInstance(a);
      e != null && (r = e.__composer, n && r && !r[No] && (r = null))
    }
    if (r != null || i === a) break;
    a = a.parent
  }
  return r
}

function _s(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent
}

function vs(e, n, r) {
  t(() => {}, n), C(() => {
    let t = r;
    e.__deleteInstance(n);
    let i = t[Po];
    i && (i(), delete t[Po])
  }, n)
}
var ys = [`locale`, `fallbackLocale`, `availableLocales`],
  bs = [`t`, `rt`, `d`, `n`, `tm`, `te`];

function xs(e, t) {
  let n = Object.create(null);
  return ys.forEach(e => {
    let r = Object.getOwnPropertyDescriptor(t, e);
    if (!r) throw Oo($.UNEXPECTED_ERROR);
    let i = a(r.value) ? {
      get() {
        return r.value.value
      },
      set(e) {
        r.value.value = e
      }
    } : {
      get() {
        return r.get && r.get()
      }
    };
    Object.defineProperty(n, e, i)
  }), e.config.globalProperties.$i18n = n, bs.forEach(n => {
    let r = Object.getOwnPropertyDescriptor(t, n);
    if (!r || !r.value) throw Oo($.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${n}`, r)
  }), () => {
    delete e.config.globalProperties.$i18n, bs.forEach(t => {
      delete e.config.globalProperties[`$${t}`]
    })
  }
}
var Ss = p({
  name: `i18n-d`,
  props: U({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, Zo),
  setup(e, t) {
    let n = e.i18n || ds({
      useScope: e.scope,
      __useComponent: !0
    });
    return ns(e, t, eo, (...e) => n[Ao](...e))
  }
});
if (Do(), Fa(ia), La(Oa), za(ha), __INTLIFY_PROD_DEVTOOLS__) {
  let e = Fr();
  e.__INTLIFY__ = !0, oa(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)
}
var Cs = Object.assign({
    "../../pca-configs/i18n/cs-CZ.json": () => B(() => import(`./cs-CZ-DmbukPJl.js`), []),
    "../../pca-configs/i18n/de-DE.json": () => B(() => import(`./de-DE-yaFNQ8EE.js`), []),
    "../../pca-configs/i18n/en-GB.json": () => B(() => import(`./en-GB-CKI1UnRR.js`), []),
    "../../pca-configs/i18n/es-ES.json": () => B(() => import(`./es-ES-BE2T5Xpd.js`), []),
    "../../pca-configs/i18n/fr-BE.json": () => B(() => import(`./fr-BE-CAmgMlhX.js`), []),
    "../../pca-configs/i18n/fr-FR.json": () => B(() => import(`./fr-FR-Cku_KqQ9.js`), []),
    "../../pca-configs/i18n/nl-BE.json": () => B(() => import(`./nl-BE-DsQ2DT8D.js`), []),
    "../../pca-configs/i18n/nl-NL.json": () => B(() => import(`./nl-NL-B4AumiE9.js`), []),
    "../../pca-configs/i18n/pl-PL.json": () => B(() => import(`./pl-PL-C8EFZuW9.js`), []),
    "../../pca-configs/i18n/sk-SK.json": () => B(() => import(`./sk-SK-Bs7rqt_y.js`), [])
  }),
  ws = l(),
  Ts = l(),
  Es = e => {
    let {
      getLocale: t
    } = vr(), {
      getEnvironment: n
    } = Xt(), r = t(), i = n(), a = () => window?.__pca?.i18n ? Object.freeze({
      ...window.__pca.i18n
    }) : null, o = async e => {
      try {
        let t = Object.keys(Cs)
          .find(t => t.endsWith(e));
        if (!t) throw Error(`i18n: no i18n file found for locale ${r}`);
        return Object.freeze((await Cs[t]())
          .default)
      } catch (e) {
        console.error(`i18n: error loading messages for locale ${r}`, e)
      }
      return null
    }, s = async () => {
      let e = a() ?? await o(`/${r}.json`);
      return e ? (ws.value = {
        [r]: e
      }, Ts.value = us({
        legacy: !1,
        locale: r,
        allowComposition: !0,
        messages: ws.value,
        warnHtmlMessage: i !== Yt.PROD,
        missingWarn: i !== Yt.PROD
      }), !0) : (console.error(`i18n: no messages found for locale ${r}`), !1)
    }, c = (e, t) => Ts.value?.global?.t ? Ts.value.global.t(e, t) : i === Yt.PROD ? `` : String(e), l = e => ws.value ? e != null && !!ws.value[r] && e in ws.value[r] && c(e) !== `` : !1;
    return window.__pca?.isI18nInitialized === void 0 && ((window.__pca ??= {})
      .isI18nInitialized = s()), {
      i18n: Ts,
      messages: ws,
      t: c,
      te: l,
      init: async () => await window.__pca?.isI18nInitialized
    }
  },
  Ds = async e => {
    if (e?.disableConfigInit !== !0) {
      let {
        init: e
      } = xr();
      await e()
    }
    if (e?.disableFeaturesInit !== !0) {
      let {
        init: e
      } = wr();
      await e()
    }
    if (e?.disableI18nInit !== !0) {
      let {
        init: e
      } = Es();
      await e()
    }
  }, Os = (e, t) => {
    let n = e.__vccOpts || e;
    for (let [e, r] of t) n[e] = r;
    return n
  }, ks = {};

function As(e, t) {
  let n = v(`router-view`);
  return d(), h(n)
}
var js = Os(ks, [
  [`render`, As]
]);
async function Ms() {
  await Ds();
  let e = _(js);
  e.directive(`secure-html`, hr), e.use(Jt), e.mount(`#app`), pr(`wishlistview`, {
    versionTag: `v-wishlistview-12.0.0-RELEASE`
  })
}
Ms();
export {
  sn as a, $t as c, Yt as d, xr as i, Zt as l, Es as n, rn as o, wr as r, en as s, Os as t, Xt as u
};