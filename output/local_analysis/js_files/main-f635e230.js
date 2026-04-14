const Ke = function() {
  const e = document.createElement("link")
    .relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) o(n);
  new MutationObserver(n => {
      for (const s of n)
        if (s.type === "childList")
          for (const r of s.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && o(r)
    })
    .observe(document, {
      childList: !0,
      subtree: !0
    });

  function t(n) {
    const s = {};
    return n.integrity && (s.integrity = n.integrity), n.referrerpolicy && (s.referrerPolicy = n.referrerpolicy), n.crossorigin === "use-credentials" ? s.credentials = "include" : n.crossorigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
  }

  function o(n) {
    if (n.ep) return;
    n.ep = !0;
    const s = t(n);
    fetch(n.href, s)
  }
};
Ke();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ue = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
  Oe = Symbol(),
  Se = new WeakMap;
class Ze {
  constructor(e, t, o) {
    if (this._$cssResult$ = !0, o !== Oe) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (ue && e === void 0) {
      const o = t !== void 0 && t.length === 1;
      o && (e = Se.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet)
        .replaceSync(this.cssText), o && Se.set(t, e))
    }
    return e
  }
  toString() {
    return this.cssText
  }
}
const Qe = i => new Ze(typeof i == "string" ? i : i + "", void 0, Oe),
  Xe = (i, e) => {
    ue ? i.adoptedStyleSheets = e.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet) : e.forEach(t => {
      const o = document.createElement("style"),
        n = window.litNonce;
      n !== void 0 && o.setAttribute("nonce", n), o.textContent = t.cssText, i.appendChild(o)
    })
  },
  $e = ue ? i => i : i => i instanceof CSSStyleSheet ? (e => {
    let t = "";
    for (const o of e.cssRules) t += o.cssText;
    return Qe(t)
  })(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var se;
const Ce = window.trustedTypes,
  Ye = Ce ? Ce.emptyScript : "",
  ke = window.reactiveElementPolyfillSupport,
  ce = {
    toAttribute(i, e) {
      switch (e) {
        case Boolean:
          i = i ? Ye : null;
          break;
        case Object:
        case Array:
          i = i == null ? i : JSON.stringify(i)
      }
      return i
    },
    fromAttribute(i, e) {
      let t = i;
      switch (e) {
        case Boolean:
          t = i !== null;
          break;
        case Number:
          t = i === null ? null : Number(i);
          break;
        case Object:
        case Array:
          try {
            t = JSON.parse(i)
          } catch {
            t = null
          }
      }
      return t
    }
  },
  Me = (i, e) => e !== i && (e == e || i == i),
  re = {
    attribute: !0,
    type: String,
    converter: ce,
    reflect: !1,
    hasChanged: Me
  };
class O extends HTMLElement {
  constructor() {
    super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u()
  }
  static addInitializer(e) {
    var t;
    (t = this.h) !== null && t !== void 0 || (this.h = []), this.h.push(e)
  }
  static get observedAttributes() {
    this.finalize();
    const e = [];
    return this.elementProperties.forEach((t, o) => {
      const n = this._$Ep(o, t);
      n !== void 0 && (this._$Ev.set(n, o), e.push(n))
    }), e
  }
  static createProperty(e, t = re) {
    if (t.state && (t.attribute = !1), this.finalize(), this.elementProperties.set(e, t), !t.noAccessor && !this.prototype.hasOwnProperty(e)) {
      const o = typeof e == "symbol" ? Symbol() : "__" + e,
        n = this.getPropertyDescriptor(e, o, t);
      n !== void 0 && Object.defineProperty(this.prototype, e, n)
    }
  }
  static getPropertyDescriptor(e, t, o) {
    return {
      get() {
        return this[t]
      },
      set(n) {
        const s = this[e];
        this[t] = n, this.requestUpdate(e, s, o)
      },
      configurable: !0,
      enumerable: !0
    }
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) || re
  }
  static finalize() {
    if (this.hasOwnProperty("finalized")) return !1;
    this.finalized = !0;
    const e = Object.getPrototypeOf(this);
    if (e.finalize(), this.elementProperties = new Map(e.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
      const t = this.properties,
        o = [...Object.getOwnPropertyNames(t), ...Object.getOwnPropertySymbols(t)];
      for (const n of o) this.createProperty(n, t[n])
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const o = new Set(e.flat(1 / 0)
        .reverse());
      for (const n of o) t.unshift($e(n))
    } else e !== void 0 && t.push($e(e));
    return t
  }
  static _$Ep(e, t) {
    const o = t.attribute;
    return o === !1 ? void 0 : typeof o == "string" ? o : typeof e == "string" ? e.toLowerCase() : void 0
  }
  u() {
    var e;
    this._$E_ = new Promise(t => this.enableUpdating = t), this._$AL = new Map, this._$Eg(), this.requestUpdate(), (e = this.constructor.h) === null || e === void 0 || e.forEach(t => t(this))
  }
  addController(e) {
    var t, o;
    ((t = this._$ES) !== null && t !== void 0 ? t : this._$ES = [])
    .push(e), this.renderRoot !== void 0 && this.isConnected && ((o = e.hostConnected) === null || o === void 0 || o.call(e))
  }
  removeController(e) {
    var t;
    (t = this._$ES) === null || t === void 0 || t.splice(this._$ES.indexOf(e) >>> 0, 1)
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((e, t) => {
      this.hasOwnProperty(t) && (this._$Ei.set(t, this[t]), delete this[t])
    })
  }
  createRenderRoot() {
    var e;
    const t = (e = this.shadowRoot) !== null && e !== void 0 ? e : this.attachShadow(this.constructor.shadowRootOptions);
    return Xe(t, this.constructor.elementStyles), t
  }
  connectedCallback() {
    var e;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$ES) === null || e === void 0 || e.forEach(t => {
      var o;
      return (o = t.hostConnected) === null || o === void 0 ? void 0 : o.call(t)
    })
  }
  enableUpdating(e) {}
  disconnectedCallback() {
    var e;
    (e = this._$ES) === null || e === void 0 || e.forEach(t => {
      var o;
      return (o = t.hostDisconnected) === null || o === void 0 ? void 0 : o.call(t)
    })
  }
  attributeChangedCallback(e, t, o) {
    this._$AK(e, o)
  }
  _$EO(e, t, o = re) {
    var n, s;
    const r = this.constructor._$Ep(e, o);
    if (r !== void 0 && o.reflect === !0) {
      const c = ((s = (n = o.converter) === null || n === void 0 ? void 0 : n.toAttribute) !== null && s !== void 0 ? s : ce.toAttribute)(t, o.type);
      this._$El = e, c == null ? this.removeAttribute(r) : this.setAttribute(r, c), this._$El = null
    }
  }
  _$AK(e, t) {
    var o, n;
    const s = this.constructor,
      r = s._$Ev.get(e);
    if (r !== void 0 && this._$El !== r) {
      const c = s.getPropertyOptions(r),
        l = c.converter,
        d = (n = (o = l == null ? void 0 : l.fromAttribute) !== null && o !== void 0 ? o : typeof l == "function" ? l : null) !== null && n !== void 0 ? n : ce.fromAttribute;
      this._$El = r, this[r] = d(t, c.type), this._$El = null
    }
  }
  requestUpdate(e, t, o) {
    let n = !0;
    e !== void 0 && (((o = o || this.constructor.getPropertyOptions(e))
      .hasChanged || Me)(this[e], t) ? (this._$AL.has(e) || this._$AL.set(e, t), o.reflect === !0 && this._$El !== e && (this._$EC === void 0 && (this._$EC = new Map), this._$EC.set(e, o))) : n = !1), !this.isUpdatePending && n && (this._$E_ = this._$Ej())
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_
    } catch (t) {
      Promise.reject(t)
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending
  }
  scheduleUpdate() {
    return this.performUpdate()
  }
  performUpdate() {
    var e;
    if (!this.isUpdatePending) return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((n, s) => this[s] = n), this._$Ei = void 0);
    let t = !1;
    const o = this._$AL;
    try {
      t = this.shouldUpdate(o), t ? (this.willUpdate(o), (e = this._$ES) === null || e === void 0 || e.forEach(n => {
        var s;
        return (s = n.hostUpdate) === null || s === void 0 ? void 0 : s.call(n)
      }), this.update(o)) : this._$Ek()
    } catch (n) {
      throw t = !1, this._$Ek(), n
    }
    t && this._$AE(o)
  }
  willUpdate(e) {}
  _$AE(e) {
    var t;
    (t = this._$ES) === null || t === void 0 || t.forEach(o => {
      var n;
      return (n = o.hostUpdated) === null || n === void 0 ? void 0 : n.call(o)
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e)
  }
  _$Ek() {
    this._$AL = new Map, this.isUpdatePending = !1
  }
  get updateComplete() {
    return this.getUpdateComplete()
  }
  getUpdateComplete() {
    return this._$E_
  }
  shouldUpdate(e) {
    return !0
  }
  update(e) {
    this._$EC !== void 0 && (this._$EC.forEach((t, o) => this._$EO(o, this[o], t)), this._$EC = void 0), this._$Ek()
  }
  updated(e) {}
  firstUpdated(e) {}
}
O.finalized = !0, O.elementProperties = new Map, O.elementStyles = [], O.shadowRootOptions = {
    mode: "open"
  }, ke == null || ke({
    ReactiveElement: O
  }), ((se = globalThis.reactiveElementVersions) !== null && se !== void 0 ? se : globalThis.reactiveElementVersions = [])
  .push("1.3.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ae;
const q = globalThis.trustedTypes,
  Ae = q ? q.createPolicy("lit-html", {
    createHTML: i => i
  }) : void 0,
  T = `lit$${(Math.random()+"").slice(9)}$`,
  Ie = "?" + T,
  et = `<${Ie}>`,
  H = document,
  W = (i = "") => H.createComment(i),
  F = i => i === null || typeof i != "object" && typeof i != "function",
  qe = Array.isArray,
  tt = i => qe(i) || typeof(i == null ? void 0 : i[Symbol.iterator]) == "function",
  z = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  Pe = /-->/g,
  Ee = />/g,
  R = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"),
  De = /'/g,
  xe = /"/g,
  He = /^(?:script|style|textarea|title)$/i,
  ot = i => (e, ...t) => ({
    _$litType$: i,
    strings: e,
    values: t
  }),
  A = ot(1),
  U = Symbol.for("lit-noChange"),
  b = Symbol.for("lit-nothing"),
  Te = new WeakMap,
  it = (i, e, t) => {
    var o, n;
    const s = (o = t == null ? void 0 : t.renderBefore) !== null && o !== void 0 ? o : e;
    let r = s._$litPart$;
    if (r === void 0) {
      const c = (n = t == null ? void 0 : t.renderBefore) !== null && n !== void 0 ? n : null;
      s._$litPart$ = r = new K(e.insertBefore(W(), c), c, void 0, t != null ? t : {})
    }
    return r._$AI(i), r
  },
  M = H.createTreeWalker(H, 129, null, !1),
  nt = (i, e) => {
    const t = i.length - 1,
      o = [];
    let n, s = e === 2 ? "<svg>" : "",
      r = z;
    for (let l = 0; l < t; l++) {
      const d = i[l];
      let S, g, f = -1,
        y = 0;
      for (; y < d.length && (r.lastIndex = y, g = r.exec(d), g !== null);) y = r.lastIndex, r === z ? g[1] === "!--" ? r = Pe : g[1] !== void 0 ? r = Ee : g[2] !== void 0 ? (He.test(g[2]) && (n = RegExp("</" + g[2], "g")), r = R) : g[3] !== void 0 && (r = R) : r === R ? g[0] === ">" ? (r = n != null ? n : z, f = -1) : g[1] === void 0 ? f = -2 : (f = r.lastIndex - g[2].length, S = g[1], r = g[3] === void 0 ? R : g[3] === '"' ? xe : De) : r === xe || r === De ? r = R : r === Pe || r === Ee ? r = z : (r = R, n = void 0);
      const P = r === R && i[l + 1].startsWith("/>") ? " " : "";
      s += r === z ? d + et : f >= 0 ? (o.push(S), d.slice(0, f) + "$lit$" + d.slice(f) + T + P) : d + T + (f === -2 ? (o.push(void 0), l) : P)
    }
    const c = s + (i[t] || "<?>") + (e === 2 ? "</svg>" : "");
    if (!Array.isArray(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return [Ae !== void 0 ? Ae.createHTML(c) : c, o]
  };
class J {
  constructor({
    strings: e,
    _$litType$: t
  }, o) {
    let n;
    this.parts = [];
    let s = 0,
      r = 0;
    const c = e.length - 1,
      l = this.parts,
      [d, S] = nt(e, t);
    if (this.el = J.createElement(d, o), M.currentNode = this.el.content, t === 2) {
      const g = this.el.content,
        f = g.firstChild;
      f.remove(), g.append(...f.childNodes)
    }
    for (;
      (n = M.nextNode()) !== null && l.length < c;) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) {
          const g = [];
          for (const f of n.getAttributeNames())
            if (f.endsWith("$lit$") || f.startsWith(T)) {
              const y = S[r++];
              if (g.push(f), y !== void 0) {
                const P = n.getAttribute(y.toLowerCase() + "$lit$")
                  .split(T),
                  D = /([.?@])?(.*)/.exec(y);
                l.push({
                  type: 1,
                  index: s,
                  name: D[2],
                  strings: P,
                  ctor: D[1] === "." ? rt : D[1] === "?" ? lt : D[1] === "@" ? ht : ee
                })
              } else l.push({
                type: 6,
                index: s
              })
            } for (const f of g) n.removeAttribute(f)
        }
        if (He.test(n.tagName)) {
          const g = n.textContent.split(T),
            f = g.length - 1;
          if (f > 0) {
            n.textContent = q ? q.emptyScript : "";
            for (let y = 0; y < f; y++) n.append(g[y], W()), M.nextNode(), l.push({
              type: 2,
              index: ++s
            });
            n.append(g[f], W())
          }
        }
      } else if (n.nodeType === 8)
        if (n.data === Ie) l.push({
          type: 2,
          index: s
        });
        else {
          let g = -1;
          for (;
            (g = n.data.indexOf(T, g + 1)) !== -1;) l.push({
            type: 7,
            index: s
          }), g += T.length - 1
        } s++
    }
  }
  static createElement(e, t) {
    const o = H.createElement("template");
    return o.innerHTML = e, o
  }
}

function B(i, e, t = i, o) {
  var n, s, r, c;
  if (e === U) return e;
  let l = o !== void 0 ? (n = t._$Cl) === null || n === void 0 ? void 0 : n[o] : t._$Cu;
  const d = F(e) ? void 0 : e._$litDirective$;
  return (l == null ? void 0 : l.constructor) !== d && ((s = l == null ? void 0 : l._$AO) === null || s === void 0 || s.call(l, !1), d === void 0 ? l = void 0 : (l = new d(i), l._$AT(i, t, o)), o !== void 0 ? ((r = (c = t)
    ._$Cl) !== null && r !== void 0 ? r : c._$Cl = [])[o] = l : t._$Cu = l), l !== void 0 && (e = B(i, l._$AS(i, e.values), l, o)), e
}
class st {
  constructor(e, t) {
    this.v = [], this._$AN = void 0, this._$AD = e, this._$AM = t
  }
  get parentNode() {
    return this._$AM.parentNode
  }
  get _$AU() {
    return this._$AM._$AU
  }
  p(e) {
    var t;
    const {
      el: {
        content: o
      },
      parts: n
    } = this._$AD, s = ((t = e == null ? void 0 : e.creationScope) !== null && t !== void 0 ? t : H)
      .importNode(o, !0);
    M.currentNode = s;
    let r = M.nextNode(),
      c = 0,
      l = 0,
      d = n[0];
    for (; d !== void 0;) {
      if (c === d.index) {
        let S;
        d.type === 2 ? S = new K(r, r.nextSibling, this, e) : d.type === 1 ? S = new d.ctor(r, d.name, d.strings, this, e) : d.type === 6 && (S = new dt(r, this, e)), this.v.push(S), d = n[++l]
      }
      c !== (d == null ? void 0 : d.index) && (r = M.nextNode(), c++)
    }
    return s
  }
  m(e) {
    let t = 0;
    for (const o of this.v) o !== void 0 && (o.strings !== void 0 ? (o._$AI(e, o, t), t += o.strings.length - 2) : o._$AI(e[t])), t++
  }
}
class K {
  constructor(e, t, o, n) {
    var s;
    this.type = 2, this._$AH = b, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = o, this.options = n, this._$C_ = (s = n == null ? void 0 : n.isConnected) === null || s === void 0 || s
  }
  get _$AU() {
    var e, t;
    return (t = (e = this._$AM) === null || e === void 0 ? void 0 : e._$AU) !== null && t !== void 0 ? t : this._$C_
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && e.nodeType === 11 && (e = t.parentNode), e
  }
  get startNode() {
    return this._$AA
  }
  get endNode() {
    return this._$AB
  }
  _$AI(e, t = this) {
    e = B(this, e, t), F(e) ? e === b || e == null || e === "" ? (this._$AH !== b && this._$AR(), this._$AH = b) : e !== this._$AH && e !== U && this.T(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.k(e) : tt(e) ? this.S(e) : this.T(e)
  }
  j(e, t = this._$AB) {
    return this._$AA.parentNode.insertBefore(e, t)
  }
  k(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.j(e))
  }
  T(e) {
    this._$AH !== b && F(this._$AH) ? this._$AA.nextSibling.data = e : this.k(H.createTextNode(e)), this._$AH = e
  }
  $(e) {
    var t;
    const {
      values: o,
      _$litType$: n
    } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = J.createElement(n.h, this.options)), n);
    if (((t = this._$AH) === null || t === void 0 ? void 0 : t._$AD) === s) this._$AH.m(o);
    else {
      const r = new st(s, this),
        c = r.p(this.options);
      r.m(o), this.k(c), this._$AH = r
    }
  }
  _$AC(e) {
    let t = Te.get(e.strings);
    return t === void 0 && Te.set(e.strings, t = new J(e)), t
  }
  S(e) {
    qe(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let o, n = 0;
    for (const s of e) n === t.length ? t.push(o = new K(this.j(W()), this.j(W()), this, this.options)) : o = t[n], o._$AI(s), n++;
    n < t.length && (this._$AR(o && o._$AB.nextSibling, n), t.length = n)
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var o;
    for ((o = this._$AP) === null || o === void 0 || o.call(this, !1, !0, t); e && e !== this._$AB;) {
      const n = e.nextSibling;
      e.remove(), e = n
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$C_ = e, (t = this._$AP) === null || t === void 0 || t.call(this, e))
  }
}
class ee {
  constructor(e, t, o, n, s) {
    this.type = 1, this._$AH = b, this._$AN = void 0, this.element = e, this.name = t, this._$AM = n, this.options = s, o.length > 2 || o[0] !== "" || o[1] !== "" ? (this._$AH = Array(o.length - 1)
      .fill(new String), this.strings = o) : this._$AH = b
  }
  get tagName() {
    return this.element.tagName
  }
  get _$AU() {
    return this._$AM._$AU
  }
  _$AI(e, t = this, o, n) {
    const s = this.strings;
    let r = !1;
    if (s === void 0) e = B(this, e, t, 0), r = !F(e) || e !== this._$AH && e !== U, r && (this._$AH = e);
    else {
      const c = e;
      let l, d;
      for (e = s[0], l = 0; l < s.length - 1; l++) d = B(this, c[o + l], t, l), d === U && (d = this._$AH[l]), r || (r = !F(d) || d !== this._$AH[l]), d === b ? e = b : e !== b && (e += (d != null ? d : "") + s[l + 1]), this._$AH[l] = d
    }
    r && !n && this.P(e)
  }
  P(e) {
    e === b ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e != null ? e : "")
  }
}
class rt extends ee {
  constructor() {
    super(...arguments), this.type = 3
  }
  P(e) {
    this.element[this.name] = e === b ? void 0 : e
  }
}
const at = q ? q.emptyScript : "";
class lt extends ee {
  constructor() {
    super(...arguments), this.type = 4
  }
  P(e) {
    e && e !== b ? this.element.setAttribute(this.name, at) : this.element.removeAttribute(this.name)
  }
}
class ht extends ee {
  constructor(e, t, o, n, s) {
    super(e, t, o, n, s), this.type = 5
  }
  _$AI(e, t = this) {
    var o;
    if ((e = (o = B(this, e, t, 0)) !== null && o !== void 0 ? o : b) === U) return;
    const n = this._$AH,
      s = e === b && n !== b || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive,
      r = e !== b && (n === b || s);
    s && this.element.removeEventListener(this.name, this, n), r && this.element.addEventListener(this.name, this, e), this._$AH = e
  }
  handleEvent(e) {
    var t, o;
    typeof this._$AH == "function" ? this._$AH.call((o = (t = this.options) === null || t === void 0 ? void 0 : t.host) !== null && o !== void 0 ? o : this.element, e) : this._$AH.handleEvent(e)
  }
}
class dt {
  constructor(e, t, o) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = o
  }
  get _$AU() {
    return this._$AM._$AU
  }
  _$AI(e) {
    B(this, e)
  }
}
const Le = window.litHtmlPolyfillSupport;
Le == null || Le(J, K), ((ae = globalThis.litHtmlVersions) !== null && ae !== void 0 ? ae : globalThis.litHtmlVersions = [])
  .push("2.2.7");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var le, he;
class G extends O {
  constructor() {
    super(...arguments), this.renderOptions = {
      host: this
    }, this._$Do = void 0
  }
  createRenderRoot() {
    var e, t;
    const o = super.createRenderRoot();
    return (e = (t = this.renderOptions)
      .renderBefore) !== null && e !== void 0 || (t.renderBefore = o.firstChild), o
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = it(t, this.renderRoot, this.renderOptions)
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) === null || e === void 0 || e.setConnected(!0)
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) === null || e === void 0 || e.setConnected(!1)
  }
  render() {
    return U
  }
}
G.finalized = !0, G._$litElement$ = !0, (le = globalThis.litElementHydrateSupport) === null || le === void 0 || le.call(globalThis, {
  LitElement: G
});
const Re = globalThis.litElementPolyfillSupport;
Re == null || Re({
  LitElement: G
});
((he = globalThis.litElementVersions) !== null && he !== void 0 ? he : globalThis.litElementVersions = [])
.push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct = i => e => typeof e == "function" ? ((t, o) => (window.customElements.define(t, o), o))(i, e) : ((t, o) => {
  const {
    kind: n,
    elements: s
  } = o;
  return {
    kind: n,
    elements: s,
    finisher(r) {
      window.customElements.define(t, r)
    }
  }
})(i, e);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ut = (i, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? {
  ...e,
  finisher(t) {
    t.createProperty(e.key, i)
  }
} : {
  kind: "field",
  key: Symbol(),
  placement: "own",
  descriptor: {},
  originalKey: e.key,
  initializer() {
    typeof e.initializer == "function" && (this[e.key] = e.initializer.call(this))
  },
  finisher(t) {
    t.createProperty(e.key, i)
  }
};

function x(i) {
  return (e, t) => t !== void 0 ? ((o, n, s) => {
    n.constructor.createProperty(s, o)
  })(i, e, t) : ut(i, e)
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function te(i) {
  return x({
    ...i,
    state: !0
  })
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pt = ({
  finisher: i,
  descriptor: e
}) => (t, o) => {
  var n;
  if (o === void 0) {
    const s = (n = t.originalKey) !== null && n !== void 0 ? n : t.key,
      r = e != null ? {
        kind: "method",
        placement: "prototype",
        key: s,
        descriptor: e(t.key)
      } : {
        ...t,
        key: s
      };
    return i != null && (r.finisher = function(c) {
      i(c, s)
    }), r
  } {
    const s = t.constructor;
    e !== void 0 && Object.defineProperty(t, o, e(o)), i == null || i(s, o)
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function gt(i, e) {
  return pt({
    descriptor: t => {
      const o = {
        get() {
          var n, s;
          return (s = (n = this.renderRoot) === null || n === void 0 ? void 0 : n.querySelector(i)) !== null && s !== void 0 ? s : null
        },
        enumerable: !0,
        configurable: !0
      };
      if (e) {
        const n = typeof t == "symbol" ? Symbol() : "__" + t;
        o.get = function() {
          var s, r;
          return this[n] === void 0 && (this[n] = (r = (s = this.renderRoot) === null || s === void 0 ? void 0 : s.querySelector(i)) !== null && r !== void 0 ? r : null), this[n]
        }
      }
      return o
    }
  })
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var de;
((de = window.HTMLSlotElement) === null || de === void 0 ? void 0 : de.prototype.assignedElements) != null;
var N = (i => (i.PDP_Pageload = "PDP_Pageload", i.PDP_Click = "PDP_Click", i.PDP_Social_Click = "PDP_Social_Click", i.PDP_Image_Click = "PDP_Image_Click", i.PDP_Section_EnterViewport = "PDP_Section_EnterViewport", i.PDP_Recommendation_Load = "PDP_Recommendation_Load", i.PDP_Recommendation_EnterViewport = "PDP_Recommendation_EnterViewport", i.PDP_Recommendation_Click = "PDP_Recommendation_Click", i.PDP_Rating_Click = "PDP_Rating_Click", i.PDP_Information_Load = "PDP_Information_Load", i.General_Pageload = "General_Pageload", i.General_Recommendation_Load = "General_Recommendation_Load", i.General_RecommendationProduct_EnterViewport = "General_RecommendationProduct_EnterViewport", i.General_Product_Click = "General_Product_Click", i.General_Section_EnterViewport = "General_Section_EnterViewport", i.General_Teaser_Click = "General_Teaser_Click", i.General_Link_Click = "General_Link_Click", i.PLP_Pageload = "PLP_Pageload", i.PLP_FilterSelect_Click = "PLP_FilterSelect_Click", i.General_SearchTermConfirm_Click = "General_SearchTermConfirm_Click", i.Cart_Pageload = "Cart_Pageload", i.Cart_Button_Click = "Cart_Button_Click", i.Cart_Success_Pageload = "Cart_Success_Pageload", i.General_Detection_Pageload = "General_Detection_Pageload", i.General_Product_View = "General_Product_View", i.General_Promotion_View = "General_Promotion_View", i.General_Promotion_Click = "General_Promotion_Click", i.Wishlist_Pageload = "Wishlist_Pageload", i.Wishlist_Button_Click = "Wishlist_Button_Click", i.StoreSearch_Pageload = "StoreSearch_Pageload", i.StoreSearch_Click = "StoreSearch_Click", i.StoreSearchDP_Pageload = "StoreSearchDP_Pageload", i.StoreSearchDP_Click = "StoreSearchDP_Click", i.MyAccount_Pageload = "MyAccount_Pageload", i.MyAccount_Click = "MyAccount_Click", i))(N || {});
class I {
  static getCookieValue(e) {
    var o;
    const t = "(^|;) ?" + e + "=([^;]*)(;|$)";
    try {
      const n = (o = document == null ? void 0 : document.cookie) == null ? void 0 : o.match(t),
        s = n && n[2];
      return s || void 0
    } catch {
      return
    }
  }
  static getConsentCookie() {
    const e = "CookieConsent";
    try {
      const t = I.getCookieValue(e);
      if (!t) return;
      const n = decodeURIComponent(t)
        .replace(/%2c/g, ",")
        .replace(/'/g, '"')
        .replace(/([{\[,])\s*([a-zA-Z0-9_]+?):/g, '$1"$2":'),
        s = JSON.parse(n);
      return s.hasOwnProperty("marketing") && s.hasOwnProperty("statistics") && s.hasOwnProperty("preferences") ? s : void 0
    } catch {
      return
    }
  }
  static onConsent() {
    return new Promise(e => {
      var S, g;
      const t = I.getConsentCookie(),
        n = ((S = window == null ? void 0 : window.Cookiebot) != null && S.hasResponse ? (g = window == null ? void 0 : window.Cookiebot) == null ? void 0 : g.consent : void 0) || t;
      if (n) {
        e(n);
        return
      }
      let s, r = 0;
      const c = 30,
        l = () => {
          var f;
          clearTimeout(s), window.removeEventListener("CookiebotOnLoad", l), e((f = window == null ? void 0 : window.Cookiebot) == null ? void 0 : f.consent)
        },
        d = () => {
          var y, P, D;
          if (!((y = window == null ? void 0 : window.Cookiebot) == null ? void 0 : y.consent) && r < c) {
            r++, s = setTimeout(d, 100);
            return
          }
          if ((P = window == null ? void 0 : window.Cookiebot) != null && P.hasResponse) {
            l();
            return
          }
          if (((D = window == null ? void 0 : window.Cookiebot) == null ? void 0 : D.hasResponse) === !1) {
            window.addEventListener("CookiebotOnLoad", l);
            return
          }
          l()
        };
      d()
    })
  }
}(function() {
  if (typeof document > "u" || "adoptedStyleSheets" in document) return;

  function i(a, u) {
    for (var h = 0; h < u.length; h++) {
      var p = u[h];
      p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(a, p.key, p)
    }
  }

  function e(a, u, h) {
    return u && i(a.prototype, u), h && i(a, h), a
  }
  var t = "ShadyCSS" in window && !window.ShadyCSS.nativeShadow,
    o = [],
    n = [],
    s = [],
    r = new WeakMap,
    c = new WeakMap,
    l = new WeakMap,
    d = new WeakMap,
    S = new WeakMap,
    g = new WeakMap,
    f = {
      loaded: !1
    },
    y = {
      body: null,
      CSSStyleSheet: null
    },
    P = CSSStyleSheet,
    D = /@import/;

  function Be(a, u) {
    var h = u === document ? "Document" : "ShadowRoot";
    if (!Array.isArray(a)) throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + h + ": Iterator getter is not callable.");
    if (!a.every(ve)) throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + h + ": Failed to convert value to 'CSSStyleSheet'");
    var p = a.filter(function(m, _) {
      return a.indexOf(m) === _
    });
    return r.set(u, p), p
  }

  function pe() {
    return document.readyState === "loading"
  }

  function ge(a) {
    return r.get(a.parentNode === document.documentElement ? document : a)
  }

  function fe(a) {
    a === void 0 && (a = "");
    var u = a.match(D) || [],
      h = a;
    return u.length && (console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"), u.forEach(function(p) {
      h = h.replace(p, "")
    })), h
  }
  var Ve = ["addImport", "addPageRule", "addRule", "deleteRule", "insertRule", "removeImport", "removeRule"],
    Z = "Illegal invocation";

  function me(a) {
    a.replace = function() {
      return Promise.reject(new DOMException("Can't call replace on non-constructed CSSStyleSheets."))
    }, a.replaceSync = function() {
      throw new DOMException("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")
    }
  }

  function _e(a) {
    var u = c.get(a),
      h = u.adopters,
      p = u.basicStyleElement;
    h.forEach(function(m) {
      m.innerHTML = p.innerHTML
    })
  }
  var Q = function() {
    function a() {
      var h = document.createElement("style");
      f.loaded ? y.body.appendChild(h) : (document.head.appendChild(h), h.disabled = !0, o.push(h)), c.set(this, {
        adopters: new Map,
        actions: [],
        basicStyleElement: h
      })
    }
    var u = a.prototype;
    return u.replace = function(p) {
      var m = fe(p);
      try {
        if (!c.has(this)) throw new TypeError(Z);
        var _ = c.get(this),
          v = _.basicStyleElement;
        return v.innerHTML = m, _e(this), Promise.resolve(this)
      } catch ($) {
        return Promise.reject($)
      }
    }, u.replaceSync = function(p) {
      var m = fe(p);
      if (!c.has(this)) throw new TypeError(Z);
      var _ = c.get(this),
        v = _.basicStyleElement;
      return v.innerHTML = m, _e(this), this
    }, e(a, [{
      key: "cssRules",
      get: function() {
        if (!c.has(this)) throw new TypeError(Z);
        var p = c.get(this),
          m = p.basicStyleElement;
        return m.sheet.cssRules
      }
    }]), a
  }();
  Ve.forEach(function(a) {
    Q.prototype[a] = function() {
      if (!c.has(this)) throw new TypeError(Z);
      var u = arguments,
        h = c.get(this),
        p = h.adopters,
        m = h.actions,
        _ = h.basicStyleElement,
        v = _.sheet[a].apply(_.sheet, u);
      return p.forEach(function($) {
        $.sheet && $.sheet[a].apply($.sheet, u)
      }), m.push([a, u]), v
    }
  });

  function ve(a) {
    return a && a.constructor === Q || a instanceof P || a instanceof y.CSSStyleSheet
  }
  Object.defineProperty(Q, Symbol.hasInstance, {
    configurable: !0,
    value: ve
  });

  function X(a) {
    for (var u = document.createDocumentFragment(), h = ge(a), p = S.get(a), m = 0, _ = h.length; m < _; m++) {
      var v = c.get(h[m]),
        $ = v.adopters,
        E = v.basicStyleElement,
        w = $.get(a);
      w ? (p.disconnect(), u.appendChild(w), (!w.innerHTML || w.sheet && !w.sheet.cssText) && (w.innerHTML = E.innerHTML), p.observe()) : (w = document.createElement("style"), w.innerHTML = E.innerHTML, l.set(w, a), g.set(w, 0), $.set(a, w), u.appendChild(w)), a === document.head && n.push(w)
    }
    a.insertBefore(u, a.lastChild);
    for (var V = 0, oe = h.length; V < oe; V++) {
      var j = c.get(h[V]),
        ie = j.adopters,
        L = j.actions,
        Y = ie.get(a),
        Ge = g.get(Y);
      if (L.length > 0) {
        for (var ne = Ge, We = L.length; ne < We; ne++) {
          var we = L[ne],
            Fe = we[0],
            Je = we[1];
          Y.sheet[Fe].apply(Y.sheet, Je)
        }
        g.set(Y, L.length - 1)
      }
    }
  }

  function je(a, u) {
    for (var h = ge(a), p = 0, m = u.length; p < m; p++)
      if (!(h.indexOf(u[p]) > -1)) {
        var _ = c.get(u[p]),
          v = _.adopters,
          $ = S.get(a),
          E = v.get(a);
        E || (E = v.get(document.head)), $.disconnect(), E.parentNode.removeChild(E), $.observe()
      }
  }

  function ze(a) {
    if (!!document)
      for (var u = 0, h = a.length; u < h; u++) {
        for (var p = a[u], m = p.addedNodes, _ = p.removedNodes, v = 0, $ = _.length; v < $; v++) {
          var E = l.get(_[v]);
          E && X(E)
        }
        if (!t)
          for (var w = 0, V = m.length; w < V; w++)
            for (var oe = document.createNodeIterator(m[w], NodeFilter.SHOW_ELEMENT, function(ie) {
                var L = d.get(ie);
                return L && L.adoptedStyleSheets.length > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
              }, null, !1), j = void 0; j = oe.nextNode();) X(d.get(j))
      }
  }

  function ye(a) {
    var u = new MutationObserver(ze),
      h = {
        observe: function() {
          u.observe(a, {
            childList: !0,
            subtree: !0
          })
        },
        disconnect: function() {
          u.disconnect()
        }
      };
    S.set(a, h), h.observe()
  }

  function be() {
    var a = document.createElement("iframe");
    a.hidden = !0, document.body.appendChild(a), y.body = a.contentWindow.document.body, y.CSSStyleSheet = a.contentWindow.CSSStyleSheet, me(a.contentWindow.CSSStyleSheet.prototype), ye(document.body), f.loaded = !0;
    for (var u = document.createDocumentFragment(), h = 0, p = o.length; h < p; h++) o[h].disabled = !1, u.appendChild(o[h]);
    y.body.appendChild(u);
    for (var m = 0, _ = n.length; m < _; m++) u.appendChild(n[m]);
    document.body.insertBefore(u, document.body.firstChild);
    for (var v = 0, $ = s.length; v < $; v++) X(s[v]);
    s.length = 0, o.length = 0, n.length = 0
  }

  function Ne() {
    var a = {
      configurable: !0,
      get: function() {
        return r.get(this) || []
      },
      set: function(p) {
        var m = r.get(this) || [];
        Be(p, this);
        var _ = this === document ? pe() ? this.head : this.body : this,
          v = "isConnected" in _ ? _.isConnected : document.body.contains(_);
        v ? window.requestAnimationFrame(function() {
          X(_), je(_, m)
        }) : s.push(_)
      }
    };
    if (Object.defineProperty(Document.prototype, "adoptedStyleSheets", a), typeof ShadowRoot < "u") {
      var u = Element.prototype.attachShadow;
      Element.prototype.attachShadow = function() {
        var h = t ? this : u.apply(this, arguments);
        return d.set(this, h), ye(h), h
      }, Object.defineProperty(ShadowRoot.prototype, "adoptedStyleSheets", a)
    }
  }
  me(P.prototype), window.CSSStyleSheet = Q, Ne(), pe() ? document.addEventListener("DOMContentLoaded", be) : be()
})();
const ft = `.ad-tooltip--theme{font-size:12/16rem;font-weight:400;border-radius:2/16rem;box-shadow:0 2px 4px #00000026;padding:16/16rem;color:#4e5761;text-align:left;background-color:#fafafa;border:1px solid #E3E4E5}@media (min-width: 1280px){.ad-tooltip--theme{font-size:14/16rem}}.ad-tooltip--theme .tippy-arrow:after{display:block;content:"";width:11/16rem;height:11/16rem;background:#FAFAFA;border:1px solid #E3E4E5}.ad-tooltip--theme[x-placement^=top]{margin-bottom:8/16rem}.ad-tooltip--theme[x-placement^=top] .tippy-arrow{border-top-color:#fafafa}.ad-tooltip--theme[x-placement^=top] .tippy-arrow:after{transform:translate(-50%,-105%) rotate(45deg);border-left:none;border-top:none}.ad-tooltip--theme[x-placement^=bottom]{margin-top:8/16rem}.ad-tooltip--theme[x-placement^=bottom] .tippy-arrow{border-bottom-color:#fafafa}.ad-tooltip--theme[x-placement^=bottom] .tippy-arrow:after{transform:translate(-50%,5%) rotate(45deg);border-bottom:none;border-right:none}.ad-tooltip--theme[x-placement^=right]{margin-left:8/16rem}.ad-tooltip--theme[x-placement^=right] .tippy-arrow{border-right-color:#fafafa}.ad-tooltip--theme[x-placement^=right] .tippy-arrow:after{transform:translate(5%,-50%) rotate(45deg);border-top:none;border-right:none}.ad-tooltip--theme[x-placement^=left]{margin-right:8/16rem}.ad-tooltip--theme[x-placement^=left] .tippy-arrow{border-left-color:#fafafa}.ad-tooltip--theme[x-placement^=left] .tippy-arrow:after{transform:translate(-105%,-50%) rotate(45deg);border-left:none;border-bottom:none}:host{display:block;font-family:LidlFontCondPro,Trebuchet MS,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:16/16rem;line-height:1.4;color:#353b42;border-radius:2/16rem}:host a{text-decoration:none;color:unset}:host .banner{margin:1rem auto;position:relative}:host .banner--large{max-width:320px;height:150px;box-shadow:0 2px 4px #00000026}@media (min-width: 600px){:host .banner--large{max-width:970px;height:250px}}:host .banner--small{aspect-ratio:auto 4 / 3;width:100%}:host .banner-new{border-radius:1rem;background-color:#fff;box-shadow:0 2px 4px #00000026}:host .banner-new__wrapper{position:relative}:host .banner-new__img{width:100%;height:100%;object-fit:cover;border-style:none}:host .banner-new__label{padding:.5rem;border-radius:0 0 1rem 1rem}:host .banner-new__headline{word-wrap:break-word;overflow:hidden;line-height:120%;display:-webkit-box;min-height:3rem}:host .banner-old{display:block;position:relative;background-color:#fff;overflow:hidden}:host .banner-old__img{width:100%;height:100%;object-fit:cover;border-style:none}:host .banner-old__label{position:absolute;bottom:0;left:0;width:100%;background-color:#ffffffb3;padding:.5rem 1rem;color:#353b42}:host .banner-old__headline{word-wrap:break-word;overflow:hidden;max-height:3rem;line-height:1.4rem;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}:host .ads-tag{display:flex;position:absolute;bottom:0;right:0;padding:4px;background-color:#fff}:host .ads-tag__img{width:100%;height:100%;object-fit:cover;border-style:none}:host .ads-tag__icon{margin-left:4px;margin-top:3px;width:12px;height:12px;mask-image:url(/cdn/assets/icons/1.0.0/information-circle.svg);-webkit-mask-image:url(/cdn/assets/icons/1.0.0/information-circle.svg);background-color:#4e5761}:host .ads-tag__text{font-size:.75rem;font-weight:400}@media (min-width: 1280px){:host .ads-tag__text{font-size:.875rem}}:host .rounded-corners{border-radius:1rem 1rem 0 0}:host .ad-tooltip{background:none;border:none;padding:0;margin:0;cursor:pointer;color:inherit;display:inline-flex}:host .skeleton{width:100%;max-width:320px;height:150px;position:relative;margin:1rem auto;display:flex;vertical-align:middle;cursor:progress;background-color:#e3e4e6;background-image:linear-gradient(90deg,transparent 25%,#fff 50%,transparent 75%);background-size:200% 200%;animation:skeleton-shimmer 2s linear infinite}@keyframes skeleton-shimmer{0%{background-position-x:200%}50%{background-position-x:100%}to{background-position-x:0%}}@media (min-width: 600px){:host .skeleton{max-width:970px;height:250px}}
`;
var mt = Object.defineProperty,
  _t = Object.getOwnPropertyDescriptor,
  k = (i, e, t, o) => {
    for (var n = o > 1 ? void 0 : o ? _t(e, t) : e, s = i.length - 1, r; s >= 0; s--)(r = i[s]) && (n = (o ? r(e, t, n) : r(n)) || n);
    return o && n && mt(e, t, n), n
  };
const Ue = new CSSStyleSheet;
Ue.replaceSync(ft);
let C = class extends G {
  constructor() {
    super(...arguments), this.tagText = "Ads", this.showTag = !0, this.size = "large", this.title = "", this.showLoading = !1, this.debug = !1, this.adsData = null, this.requestData = "", this._showNewDesign = !1, this._showBanner = !1, this._showSkeleton = !1, this.consent = {}, this.mql = window.matchMedia && window.matchMedia("(max-width: 600px)"), this.debugCookie = !1, this.debugInstanceId = Math.floor(Math.random() * 1e3), this._toggleDesign = i => {
      this.consoleDebugLog("_toggleDesign", i), this._showNewDesign = i && i.matches
    }
  }
  static get styles() {
    return [Ue]
  }
  consoleDebugLog(i, e) {
    if (!this.debugCookie) return;
    let t;
    try {
      t = typeof e == "object" ? JSON.stringify(e) : e, t === "{}" && (t = e)
    } catch {
      t = e
    }
    console.log(this.debugInstanceId + ": ", i + " - ", t)
  }
  adsTagTemplate() {
    return A`
      <div class="ads-tag">
        <div id="tooltip" class="ad-tooltip">
          <div class="ads-tag__text">${this.tagText}</div>
          <div class="ads-tag__icon"></div>
        </div>
      </div>
    `
  }
  adsImageTemplate() {
    var i, e;
    return this.consoleDebugLog("adsImageTemplate", this._pqData), A`
      <a .href="${(i=this._pqData)==null?void 0:i.clickthru}" target="_blank"
         @click=${this._onClickImpression}>
        <img src="${(e=this._pqData)==null?void 0:e.asset_url}" alt="Banner Ads" class="ads-tag__img">
      </a>
      ${this.showTag?this.adsTagTemplate():""}
    `
  }
  newDesignTemplate() {
    var i, e;
    return this.consoleDebugLog("newDesignTemplate", this._pqData), A`
      <div class="banner-new">
        <img src="${(i=this._pqData)==null?void 0:i.asset_url}" alt="Banner Ads"
             class="banner-new__img rounded-corners">
        <div class="banner-new__label">
          <h4 class="banner-new__headline">
            ${(e=this._pqData)==null?void 0:e.product.name}
          </h4>
          <div class="banner-new__wrapper">
            ${this.adsTagTemplate()}
          </div>
        </div>
      </div>
    `
  }
  oldDesignTemplate() {
    var i;
    return this.consoleDebugLog("oldDesignTemplate", this._pqData), A`
      <div class="banner-old">
        <img src="${(i=this._pqData)==null?void 0:i.asset_url}" alt="Banner Ads"
             class="banner-old__img">
        ${this.title?A`
            <div class="banner-old__label">
              <h4 class="banner-old__headline">
                ${this.title}
              </h4>
            </div>
          `:""}

      </div>
    `
  }
  regularAdsTemplate() {
    return this.consoleDebugLog("regularAdsTemplate", this._pqData), A`
      ${this._pqData?this.adsImageTemplate():""}
    `
  }
  async connectedCallback() {
    if (super.connectedCallback(), this.debugCookie = I.getCookieValue("bannerAdsDebugConsoleLog"), this.consoleDebugLog("DebugCookie", this.debugCookie), this._showSkeleton = this.showLoading, this._showSkeleton && this.consoleDebugLog("Init show Skeleton", this._showSkeleton), this.consent = this.debug ? {
        marketing: !0
      } : await I.onConsent(), this.consoleDebugLog("CookieBot consent", this.consent), !this.consent || this.consent && !this.consent.marketing) {
      this._showSkeleton = !1;
      return
    }
    await this._getAd(), this._toggleDesign(this.mql), this.mql && this.mql.addEventListener && this.mql.addEventListener("change", this._toggleDesign)
  }
  disconnectedCallback() {
    this.consoleDebugLog("disconnectedCallback"), super.disconnectedCallback(), this.mql && this.mql.removeEventListener && this.mql.removeEventListener("change", this._toggleDesign)
  }
  async updated(i) {
    if (i.has("requestData")) {
      const e = i.get("requestData");
      this.requestData && this.requestData !== e && (this.consoleDebugLog("updated requestData", {
        requestData: this.requestData,
        prevValue: e
      }), this._showSkeleton = this.showLoading, await this._getAd())
    }
  }
  render() {
    return this.consoleDebugLog("render", {
      showBanner: this._showBanner,
      showNewDesign: this._showNewDesign,
      showSkeleton: this._showSkeleton
    }), A`
      ${this._showBanner?A`
          <div class="banner">
            ${this.size==="large"?A`
                  <div class="banner banner--large">
                    ${this.regularAdsTemplate()}
                  </div>
                `:A`
                  <div class="banner banner--small">
                    ${this._showNewDesign?this.newDesignTemplate():this.oldDesignTemplate()}
                  </div>
                `}
          </div>
        `:A`${this._showSkeleton?A`<div class="skeleton"></div>`:""}`}
    `
  }
  setAdSessionId() {
    const i = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    let e = new Array(36),
      t = 0,
      o;
    for (let r = 0; r < 36; r++) r === 8 || r === 13 || r === 18 || r === 23 ? e[r] = "-" : r === 14 ? e[r] = "4" : (t <= 2 && (t = 33554432 + Math.random() * 16777216 | 0), o = t & 15, t = t >> 4, e[r] = i[r === 19 ? o & 3 | 8 : o]);
    const n = e.join(""),
      s = "; max-age=" + 24 * 60 * 60 * 730;
    return document.cookie = "adSessionId=" + n + s + "; secure; path=/", n
  }
  fetchWithTimeout(i, e = {}, t = 5e3) {
    let o = {
        ...e
      },
      n = null;
    if (typeof window.AbortController == "function") {
      this.consoleDebugLog("fetchWithTimeout AbortController support", !0);
      const s = new AbortController;
      o = {
        ...e,
        signal: s.signal
      };
      const r = Date.now();
      this.consoleDebugLog("fetchWithTimeout startTime", r);
      const c = () => {
        const l = Date.now();
        if (l - r >= t) this.consoleDebugLog("fetchWithTimeout abortFunc aborting", {
          currTime: l,
          startTime: r,
          "currTime - startTime": l - r,
          time: t,
          timeoutId: n
        }), s.abort(), n && clearTimeout(n);
        else {
          let d = t - (l - r);
          d < 0 && (d = 0), this.consoleDebugLog("fetchWithTimeout abortFunc startTimer", {
            currTime: l,
            startTime: r,
            "currTime - startTime": l - r,
            time: t,
            timeoutId: n,
            remainingTime: d
          }), n = setTimeout(c, d)
        }
      };
      c()
    }
    return fetch(i, o)
      .then(s => {
        if (this.consoleDebugLog("fetchWithTimeout response ok", s.ok), n && clearTimeout(n), !s.ok) throw new Error(`${s.status}: ${s.statusText}`);
        return s
      })
      .catch(s => {
        throw this.consoleDebugLog("fetchWithTimeout response error", s), n && clearTimeout(n), this._showSkeleton = !1, s.name === "AbortError" ? new Error("Response timed out") : new Error(s.message)
      })
  }
  async _getAd() {
    var i;
    try {
      if (this.consoleDebugLog("_getAd init"), !this.requestData || !this.consent || this.consent && !this.consent.marketing) {
        this.consoleDebugLog("_getAd exit", {
          requestData: this.requestData,
          consent: this.consent
        }), this._showSkeleton = !1;
        return
      }
      const e = I.getCookieValue("adSessionId") || this.setAdSessionId();
      this.consoleDebugLog("_getAd adSessionId", e);
      const t = JSON.parse(this.requestData);
      t.session = e, this.consoleDebugLog("_getAd request", t);
      const o = await this.fetchWithTimeout("/t/piq/request", {
        method: "POST",
        body: JSON.stringify(t)
      }, 500);
      if (this._showSkeleton = !1, o.ok && o.status === 200) {
        if (this.consoleDebugLog("_getAd resp.ok"), this._pqData = await o.json()
          .then(n => n[0]), this.consoleDebugLog("_getAd PqData", this._pqData), !(this._pqData && ((i = this._pqData) == null ? void 0 : i.clickthru))) return;
        this._showBanner = !0, setTimeout(() => {
          this.consoleDebugLog("_getAd SendBannerImpression"), this.requestUpdate(), this._bannerAdsImpression()
        }, 200)
      }
    } catch (e) {
      this.consoleDebugLog("_getAd error", e), this._showSkeleton = !1, this.debug && console.log(e)
    }
  }
  _promotionImpression() {
    return {
      list: [{
        ...this.adsData,
        ad: JSON.stringify(this._pqData)
      }]
    }
  }
  _onClickImpression() {
    var e, t;
    window.dataLayerService = window.dataLayerService || [];
    const i = ((e = this._pqData) == null ? void 0 : e.clickthru) || "";
    window.dataLayerService.push({
      scenarioName: N.General_Promotion_Click,
      collections: {
        eventInfo: {
          eventAction: N.General_Promotion_Click,
          eventCategory: "click",
          eventInteractionType: "click"
        },
        click: {
          linkName: "banner-ads",
          linkType: /^(#|\/)/.test(i) || i.indexOf(window.location.hostname) > -1 ? "internal" : "external",
          linkURL: (t = this._pqData) == null ? void 0 : t.clickthru
        },
        content: {
          contentType: "banner",
          contentComponentSource: "ads"
        },
        promotions: this._promotionImpression()
      }
    })
  }
  _bannerAdsImpression() {
    window.dataLayerService = window.dataLayerService || [], window.dataLayerService.push({
      scenarioName: N.General_Promotion_View,
      collections: {
        eventInfo: {
          eventAction: N.General_Promotion_View,
          eventCategory: "load",
          eventInteractionType: "load"
        },
        content: {
          contentType: "banner",
          contentComponentSource: "ads"
        },
        promotions: this._promotionImpression()
      }
    })
  }
};
k([x({
  type: String
})], C.prototype, "tagText", 2);
k([x({
  type: Boolean
})], C.prototype, "showTag", 2);
k([x({
  type: String
})], C.prototype, "size", 2);
k([x({
  type: String
})], C.prototype, "title", 2);
k([x({
  type: Boolean
})], C.prototype, "showLoading", 2);
k([x({
  type: Boolean
})], C.prototype, "debug", 2);
k([x({
  type: String,
  converter: {
    fromAttribute: i => i && JSON.parse(decodeURI(i))
  }
})], C.prototype, "adsData", 2);
k([x({
  type: String,
  converter: {
    fromAttribute: i => i && decodeURI(i)
  },
  hasChanged(i, e) {
    return i !== e
  }
})], C.prototype, "requestData", 2);
k([te()], C.prototype, "_pqData", 2);
k([te()], C.prototype, "_showNewDesign", 2);
k([te()], C.prototype, "_showBanner", 2);
k([te()], C.prototype, "_showSkeleton", 2);
k([gt("#tooltip")], C.prototype, "tooltip", 2);
C = k([ct("banner-ads")], C);