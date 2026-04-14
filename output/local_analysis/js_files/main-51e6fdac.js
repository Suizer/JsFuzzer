const Ke = function() {
  const e = document.createElement("link")
    .relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) o(n);
  new MutationObserver(n => {
      for (const r of n)
        if (r.type === "childList")
          for (const s of r.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && o(s)
    })
    .observe(document, {
      childList: !0,
      subtree: !0
    });

  function t(n) {
    const r = {};
    return n.integrity && (r.integrity = n.integrity), n.referrerpolicy && (r.referrerPolicy = n.referrerpolicy), n.crossorigin === "use-credentials" ? r.credentials = "include" : n.crossorigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r
  }

  function o(n) {
    if (n.ep) return;
    n.ep = !0;
    const r = t(n);
    fetch(n.href, r)
  }
};
Ke();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pe = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
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
    if (pe && e === void 0) {
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
    pe ? i.adoptedStyleSheets = e.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet) : e.forEach(t => {
      const o = document.createElement("style"),
        n = window.litNonce;
      n !== void 0 && o.setAttribute("nonce", n), o.textContent = t.cssText, i.appendChild(o)
    })
  },
  $e = pe ? i => i : i => i instanceof CSSStyleSheet ? (e => {
    let t = "";
    for (const o of e.cssRules) t += o.cssText;
    return Qe(t)
  })(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var re;
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
  se = {
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
  static createProperty(e, t = se) {
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
        const r = this[e];
        this[t] = n, this.requestUpdate(e, r, o)
      },
      configurable: !0,
      enumerable: !0
    }
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) || se
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
  _$EO(e, t, o = se) {
    var n, r;
    const s = this.constructor._$Ep(e, o);
    if (s !== void 0 && o.reflect === !0) {
      const p = ((r = (n = o.converter) === null || n === void 0 ? void 0 : n.toAttribute) !== null && r !== void 0 ? r : ce.toAttribute)(t, o.type);
      this._$El = e, p == null ? this.removeAttribute(s) : this.setAttribute(s, p), this._$El = null
    }
  }
  _$AK(e, t) {
    var o, n;
    const r = this.constructor,
      s = r._$Ev.get(e);
    if (s !== void 0 && this._$El !== s) {
      const p = r.getPropertyOptions(s),
        l = p.converter,
        h = (n = (o = l == null ? void 0 : l.fromAttribute) !== null && o !== void 0 ? o : typeof l == "function" ? l : null) !== null && n !== void 0 ? n : ce.fromAttribute;
      this._$El = s, this[s] = h(t, p.type), this._$El = null
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
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((n, r) => this[r] = n), this._$Ei = void 0);
    let t = !1;
    const o = this._$AL;
    try {
      t = this.shouldUpdate(o), t ? (this.willUpdate(o), (e = this._$ES) === null || e === void 0 || e.forEach(n => {
        var r;
        return (r = n.hostUpdate) === null || r === void 0 ? void 0 : r.call(n)
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
  }), ((re = globalThis.reactiveElementVersions) !== null && re !== void 0 ? re : globalThis.reactiveElementVersions = [])
  .push("1.3.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ae;
const I = globalThis.trustedTypes,
  Ae = I ? I.createPolicy("lit-html", {
    createHTML: i => i
  }) : void 0,
  D = `lit$${(Math.random()+"").slice(9)}$`,
  Ie = "?" + D,
  et = `<${Ie}>`,
  H = document,
  N = (i = "") => H.createComment(i),
  W = i => i === null || typeof i != "object" && typeof i != "function",
  He = Array.isArray,
  tt = i => He(i) || typeof(i == null ? void 0 : i[Symbol.iterator]) == "function",
  j = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  Pe = /-->/g,
  Ee = />/g,
  L = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"),
  xe = /'/g,
  Te = /"/g,
  Ue = /^(?:script|style|textarea|title)$/i,
  ot = i => (e, ...t) => ({
    _$litType$: i,
    strings: e,
    values: t
  }),
  A = ot(1),
  U = Symbol.for("lit-noChange"),
  w = Symbol.for("lit-nothing"),
  De = new WeakMap,
  nt = (i, e, t) => {
    var o, n;
    const r = (o = t == null ? void 0 : t.renderBefore) !== null && o !== void 0 ? o : e;
    let s = r._$litPart$;
    if (s === void 0) {
      const p = (n = t == null ? void 0 : t.renderBefore) !== null && n !== void 0 ? n : null;
      r._$litPart$ = s = new K(e.insertBefore(N(), p), p, void 0, t != null ? t : {})
    }
    return s._$AI(i), s
  },
  M = H.createTreeWalker(H, 129, null, !1),
  it = (i, e) => {
    const t = i.length - 1,
      o = [];
    let n, r = e === 2 ? "<svg>" : "",
      s = j;
    for (let l = 0; l < t; l++) {
      const h = i[l];
      let S, f, g = -1,
        y = 0;
      for (; y < h.length && (s.lastIndex = y, f = s.exec(h), f !== null);) y = s.lastIndex, s === j ? f[1] === "!--" ? s = Pe : f[1] !== void 0 ? s = Ee : f[2] !== void 0 ? (Ue.test(f[2]) && (n = RegExp("</" + f[2], "g")), s = L) : f[3] !== void 0 && (s = L) : s === L ? f[0] === ">" ? (s = n != null ? n : j, g = -1) : f[1] === void 0 ? g = -2 : (g = s.lastIndex - f[2].length, S = f[1], s = f[3] === void 0 ? L : f[3] === '"' ? Te : xe) : s === Te || s === xe ? s = L : s === Pe || s === Ee ? s = j : (s = L, n = void 0);
      const P = s === L && i[l + 1].startsWith("/>") ? " " : "";
      r += s === j ? h + et : g >= 0 ? (o.push(S), h.slice(0, g) + "$lit$" + h.slice(g) + D + P) : h + D + (g === -2 ? (o.push(void 0), l) : P)
    }
    const p = r + (i[t] || "<?>") + (e === 2 ? "</svg>" : "");
    if (!Array.isArray(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return [Ae !== void 0 ? Ae.createHTML(p) : p, o]
  };
class F {
  constructor({
    strings: e,
    _$litType$: t
  }, o) {
    let n;
    this.parts = [];
    let r = 0,
      s = 0;
    const p = e.length - 1,
      l = this.parts,
      [h, S] = it(e, t);
    if (this.el = F.createElement(h, o), M.currentNode = this.el.content, t === 2) {
      const f = this.el.content,
        g = f.firstChild;
      g.remove(), f.append(...g.childNodes)
    }
    for (;
      (n = M.nextNode()) !== null && l.length < p;) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) {
          const f = [];
          for (const g of n.getAttributeNames())
            if (g.endsWith("$lit$") || g.startsWith(D)) {
              const y = S[s++];
              if (f.push(g), y !== void 0) {
                const P = n.getAttribute(y.toLowerCase() + "$lit$")
                  .split(D),
                  x = /([.?@])?(.*)/.exec(y);
                l.push({
                  type: 1,
                  index: r,
                  name: x[2],
                  strings: P,
                  ctor: x[1] === "." ? st : x[1] === "?" ? lt : x[1] === "@" ? dt : ee
                })
              } else l.push({
                type: 6,
                index: r
              })
            } for (const g of f) n.removeAttribute(g)
        }
        if (Ue.test(n.tagName)) {
          const f = n.textContent.split(D),
            g = f.length - 1;
          if (g > 0) {
            n.textContent = I ? I.emptyScript : "";
            for (let y = 0; y < g; y++) n.append(f[y], N()), M.nextNode(), l.push({
              type: 2,
              index: ++r
            });
            n.append(f[g], N())
          }
        }
      } else if (n.nodeType === 8)
        if (n.data === Ie) l.push({
          type: 2,
          index: r
        });
        else {
          let f = -1;
          for (;
            (f = n.data.indexOf(D, f + 1)) !== -1;) l.push({
            type: 7,
            index: r
          }), f += D.length - 1
        } r++
    }
  }
  static createElement(e, t) {
    const o = H.createElement("template");
    return o.innerHTML = e, o
  }
}

function q(i, e, t = i, o) {
  var n, r, s, p;
  if (e === U) return e;
  let l = o !== void 0 ? (n = t._$Cl) === null || n === void 0 ? void 0 : n[o] : t._$Cu;
  const h = W(e) ? void 0 : e._$litDirective$;
  return (l == null ? void 0 : l.constructor) !== h && ((r = l == null ? void 0 : l._$AO) === null || r === void 0 || r.call(l, !1), h === void 0 ? l = void 0 : (l = new h(i), l._$AT(i, t, o)), o !== void 0 ? ((s = (p = t)
    ._$Cl) !== null && s !== void 0 ? s : p._$Cl = [])[o] = l : t._$Cu = l), l !== void 0 && (e = q(i, l._$AS(i, e.values), l, o)), e
}
class rt {
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
    } = this._$AD, r = ((t = e == null ? void 0 : e.creationScope) !== null && t !== void 0 ? t : H)
      .importNode(o, !0);
    M.currentNode = r;
    let s = M.nextNode(),
      p = 0,
      l = 0,
      h = n[0];
    for (; h !== void 0;) {
      if (p === h.index) {
        let S;
        h.type === 2 ? S = new K(s, s.nextSibling, this, e) : h.type === 1 ? S = new h.ctor(s, h.name, h.strings, this, e) : h.type === 6 && (S = new ht(s, this, e)), this.v.push(S), h = n[++l]
      }
      p !== (h == null ? void 0 : h.index) && (s = M.nextNode(), p++)
    }
    return r
  }
  m(e) {
    let t = 0;
    for (const o of this.v) o !== void 0 && (o.strings !== void 0 ? (o._$AI(e, o, t), t += o.strings.length - 2) : o._$AI(e[t])), t++
  }
}
class K {
  constructor(e, t, o, n) {
    var r;
    this.type = 2, this._$AH = w, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = o, this.options = n, this._$C_ = (r = n == null ? void 0 : n.isConnected) === null || r === void 0 || r
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
    e = q(this, e, t), W(e) ? e === w || e == null || e === "" ? (this._$AH !== w && this._$AR(), this._$AH = w) : e !== this._$AH && e !== U && this.T(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.k(e) : tt(e) ? this.S(e) : this.T(e)
  }
  j(e, t = this._$AB) {
    return this._$AA.parentNode.insertBefore(e, t)
  }
  k(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.j(e))
  }
  T(e) {
    this._$AH !== w && W(this._$AH) ? this._$AA.nextSibling.data = e : this.k(H.createTextNode(e)), this._$AH = e
  }
  $(e) {
    var t;
    const {
      values: o,
      _$litType$: n
    } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = F.createElement(n.h, this.options)), n);
    if (((t = this._$AH) === null || t === void 0 ? void 0 : t._$AD) === r) this._$AH.m(o);
    else {
      const s = new rt(r, this),
        p = s.p(this.options);
      s.m(o), this.k(p), this._$AH = s
    }
  }
  _$AC(e) {
    let t = De.get(e.strings);
    return t === void 0 && De.set(e.strings, t = new F(e)), t
  }
  S(e) {
    He(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let o, n = 0;
    for (const r of e) n === t.length ? t.push(o = new K(this.j(N()), this.j(N()), this, this.options)) : o = t[n], o._$AI(r), n++;
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
  constructor(e, t, o, n, r) {
    this.type = 1, this._$AH = w, this._$AN = void 0, this.element = e, this.name = t, this._$AM = n, this.options = r, o.length > 2 || o[0] !== "" || o[1] !== "" ? (this._$AH = Array(o.length - 1)
      .fill(new String), this.strings = o) : this._$AH = w
  }
  get tagName() {
    return this.element.tagName
  }
  get _$AU() {
    return this._$AM._$AU
  }
  _$AI(e, t = this, o, n) {
    const r = this.strings;
    let s = !1;
    if (r === void 0) e = q(this, e, t, 0), s = !W(e) || e !== this._$AH && e !== U, s && (this._$AH = e);
    else {
      const p = e;
      let l, h;
      for (e = r[0], l = 0; l < r.length - 1; l++) h = q(this, p[o + l], t, l), h === U && (h = this._$AH[l]), s || (s = !W(h) || h !== this._$AH[l]), h === w ? e = w : e !== w && (e += (h != null ? h : "") + r[l + 1]), this._$AH[l] = h
    }
    s && !n && this.P(e)
  }
  P(e) {
    e === w ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e != null ? e : "")
  }
}
class st extends ee {
  constructor() {
    super(...arguments), this.type = 3
  }
  P(e) {
    this.element[this.name] = e === w ? void 0 : e
  }
}
const at = I ? I.emptyScript : "";
class lt extends ee {
  constructor() {
    super(...arguments), this.type = 4
  }
  P(e) {
    e && e !== w ? this.element.setAttribute(this.name, at) : this.element.removeAttribute(this.name)
  }
}
class dt extends ee {
  constructor(e, t, o, n, r) {
    super(e, t, o, n, r), this.type = 5
  }
  _$AI(e, t = this) {
    var o;
    if ((e = (o = q(this, e, t, 0)) !== null && o !== void 0 ? o : w) === U) return;
    const n = this._$AH,
      r = e === w && n !== w || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive,
      s = e !== w && (n === w || r);
    r && this.element.removeEventListener(this.name, this, n), s && this.element.addEventListener(this.name, this, e), this._$AH = e
  }
  handleEvent(e) {
    var t, o;
    typeof this._$AH == "function" ? this._$AH.call((o = (t = this.options) === null || t === void 0 ? void 0 : t.host) !== null && o !== void 0 ? o : this.element, e) : this._$AH.handleEvent(e)
  }
}
class ht {
  constructor(e, t, o) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = o
  }
  get _$AU() {
    return this._$AM._$AU
  }
  _$AI(e) {
    q(this, e)
  }
}
const Re = window.litHtmlPolyfillSupport;
Re == null || Re(F, K), ((ae = globalThis.litHtmlVersions) !== null && ae !== void 0 ? ae : globalThis.litHtmlVersions = [])
  .push("2.2.7");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var le, de;
class V extends O {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = nt(t, this.renderRoot, this.renderOptions)
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
V.finalized = !0, V._$litElement$ = !0, (le = globalThis.litElementHydrateSupport) === null || le === void 0 || le.call(globalThis, {
  LitElement: V
});
const Le = globalThis.litElementPolyfillSupport;
Le == null || Le({
  LitElement: V
});
((de = globalThis.litElementVersions) !== null && de !== void 0 ? de : globalThis.litElementVersions = [])
.push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct = i => e => typeof e == "function" ? ((t, o) => (window.customElements.define(t, o), o))(i, e) : ((t, o) => {
  const {
    kind: n,
    elements: r
  } = o;
  return {
    kind: n,
    elements: r,
    finisher(s) {
      window.customElements.define(t, s)
    }
  }
})(i, e);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pt = (i, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? {
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

function T(i) {
  return (e, t) => t !== void 0 ? ((o, n, r) => {
    n.constructor.createProperty(r, o)
  })(i, e, t) : pt(i, e)
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function te(i) {
  return T({
    ...i,
    state: !0
  })
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ut = ({
  finisher: i,
  descriptor: e
}) => (t, o) => {
  var n;
  if (o === void 0) {
    const r = (n = t.originalKey) !== null && n !== void 0 ? n : t.key,
      s = e != null ? {
        kind: "method",
        placement: "prototype",
        key: r,
        descriptor: e(t.key)
      } : {
        ...t,
        key: r
      };
    return i != null && (s.finisher = function(p) {
      i(p, r)
    }), s
  } {
    const r = t.constructor;
    e !== void 0 && Object.defineProperty(t, o, e(o)), i == null || i(r, o)
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ft(i, e) {
  return ut({
    descriptor: t => {
      const o = {
        get() {
          var n, r;
          return (r = (n = this.renderRoot) === null || n === void 0 ? void 0 : n.querySelector(i)) !== null && r !== void 0 ? r : null
        },
        enumerable: !0,
        configurable: !0
      };
      if (e) {
        const n = typeof t == "symbol" ? Symbol() : "__" + t;
        o.get = function() {
          var r, s;
          return this[n] === void 0 && (this[n] = (s = (r = this.renderRoot) === null || r === void 0 ? void 0 : r.querySelector(i)) !== null && s !== void 0 ? s : null), this[n]
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
var he;
((he = window.HTMLSlotElement) === null || he === void 0 ? void 0 : he.prototype.assignedElements) != null;
var G = (i => (i.PDP_Pageload = "PDP_Pageload", i.PDP_Click = "PDP_Click", i.PDP_Social_Click = "PDP_Social_Click", i.PDP_Image_Click = "PDP_Image_Click", i.PDP_Section_EnterViewport = "PDP_Section_EnterViewport", i.PDP_Recommendation_Load = "PDP_Recommendation_Load", i.PDP_Recommendation_EnterViewport = "PDP_Recommendation_EnterViewport", i.PDP_Recommendation_Click = "PDP_Recommendation_Click", i.PDP_Rating_Click = "PDP_Rating_Click", i.PDP_Information_Load = "PDP_Information_Load", i.General_Pageload = "General_Pageload", i.General_Recommendation_Load = "General_Recommendation_Load", i.General_RecommendationProduct_EnterViewport = "General_RecommendationProduct_EnterViewport", i.General_Product_Click = "General_Product_Click", i.General_Section_EnterViewport = "General_Section_EnterViewport", i.General_Teaser_Click = "General_Teaser_Click", i.General_Link_Click = "General_Link_Click", i.PLP_Pageload = "PLP_Pageload", i.PLP_FilterSelect_Click = "PLP_FilterSelect_Click", i.General_SearchTermConfirm_Click = "General_SearchTermConfirm_Click", i.Cart_Pageload = "Cart_Pageload", i.Cart_Button_Click = "Cart_Button_Click", i.Cart_Success_Pageload = "Cart_Success_Pageload", i.General_Detection_Pageload = "General_Detection_Pageload", i.General_Product_View = "General_Product_View", i.General_Promotion_View = "General_Promotion_View", i.General_Promotion_Click = "General_Promotion_Click", i.Wishlist_Pageload = "Wishlist_Pageload", i.Wishlist_Button_Click = "Wishlist_Button_Click", i.StoreSearch_Pageload = "StoreSearch_Pageload", i.StoreSearch_Click = "StoreSearch_Click", i.StoreSearchDP_Pageload = "StoreSearchDP_Pageload", i.StoreSearchDP_Click = "StoreSearchDP_Click", i.MyAccount_Pageload = "MyAccount_Pageload", i.MyAccount_Click = "MyAccount_Click", i))(G || {});
class J {
  static getCookieValue(e) {
    var o;
    const t = "(^|;) ?" + e + "=([^;]*)(;|$)";
    try {
      const n = (o = document == null ? void 0 : document.cookie) == null ? void 0 : o.match(t),
        r = n && n[2];
      return r || void 0
    } catch {
      return
    }
  }
  static getConsentCookie() {
    const e = "CookieConsent";
    try {
      const t = J.getCookieValue(e);
      if (!t) return;
      const n = decodeURIComponent(t)
        .replace(/%2c/g, ",")
        .replace(/'/g, '"')
        .replace(/([{\[,])\s*([a-zA-Z0-9_]+?):/g, '$1"$2":'),
        r = JSON.parse(n);
      return r.hasOwnProperty("marketing") && r.hasOwnProperty("statistics") && r.hasOwnProperty("preferences") ? r : void 0
    } catch {
      return
    }
  }
  static onConsent() {
    return new Promise(e => {
      var S, f;
      const t = J.getConsentCookie(),
        n = ((S = window == null ? void 0 : window.Cookiebot) != null && S.hasResponse ? (f = window == null ? void 0 : window.Cookiebot) == null ? void 0 : f.consent : void 0) || t;
      if (n) {
        e(n);
        return
      }
      let r, s = 0;
      const p = 30,
        l = () => {
          var g;
          clearTimeout(r), window.removeEventListener("CookiebotOnLoad", l), e((g = window == null ? void 0 : window.Cookiebot) == null ? void 0 : g.consent)
        },
        h = () => {
          var y, P, x;
          if (!((y = window == null ? void 0 : window.Cookiebot) == null ? void 0 : y.consent) && s < p) {
            s++, r = setTimeout(h, 100);
            return
          }
          if ((P = window == null ? void 0 : window.Cookiebot) != null && P.hasResponse) {
            l();
            return
          }
          if (((x = window == null ? void 0 : window.Cookiebot) == null ? void 0 : x.hasResponse) === !1) {
            window.addEventListener("CookiebotOnLoad", l);
            return
          }
          l()
        };
      h()
    })
  }
}(function() {
  if (typeof document > "u" || "adoptedStyleSheets" in document) return;

  function i(a, c) {
    for (var d = 0; d < c.length; d++) {
      var u = c[d];
      u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(a, u.key, u)
    }
  }

  function e(a, c, d) {
    return c && i(a.prototype, c), d && i(a, d), a
  }
  var t = "ShadyCSS" in window && !window.ShadyCSS.nativeShadow,
    o = [],
    n = [],
    r = [],
    s = new WeakMap,
    p = new WeakMap,
    l = new WeakMap,
    h = new WeakMap,
    S = new WeakMap,
    f = new WeakMap,
    g = {
      loaded: !1
    },
    y = {
      body: null,
      CSSStyleSheet: null
    },
    P = CSSStyleSheet,
    x = /@import/;

  function Be(a, c) {
    var d = c === document ? "Document" : "ShadowRoot";
    if (!Array.isArray(a)) throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + d + ": Iterator getter is not callable.");
    if (!a.every(ve)) throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + d + ": Failed to convert value to 'CSSStyleSheet'");
    var u = a.filter(function(m, _) {
      return a.indexOf(m) === _
    });
    return s.set(c, u), u
  }

  function ue() {
    return document.readyState === "loading"
  }

  function fe(a) {
    return s.get(a.parentNode === document.documentElement ? document : a)
  }

  function ge(a) {
    a === void 0 && (a = "");
    var c = a.match(x) || [],
      d = a;
    return c.length && (console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"), c.forEach(function(u) {
      d = d.replace(u, "")
    })), d
  }
  var ze = ["addImport", "addPageRule", "addRule", "deleteRule", "insertRule", "removeImport", "removeRule"],
    Z = "Illegal invocation";

  function me(a) {
    a.replace = function() {
      return Promise.reject(new DOMException("Can't call replace on non-constructed CSSStyleSheets."))
    }, a.replaceSync = function() {
      throw new DOMException("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")
    }
  }

  function _e(a) {
    var c = p.get(a),
      d = c.adopters,
      u = c.basicStyleElement;
    d.forEach(function(m) {
      m.innerHTML = u.innerHTML
    })
  }
  var Q = function() {
    function a() {
      var d = document.createElement("style");
      g.loaded ? y.body.appendChild(d) : (document.head.appendChild(d), d.disabled = !0, o.push(d)), p.set(this, {
        adopters: new Map,
        actions: [],
        basicStyleElement: d
      })
    }
    var c = a.prototype;
    return c.replace = function(u) {
      var m = ge(u);
      try {
        if (!p.has(this)) throw new TypeError(Z);
        var _ = p.get(this),
          v = _.basicStyleElement;
        return v.innerHTML = m, _e(this), Promise.resolve(this)
      } catch ($) {
        return Promise.reject($)
      }
    }, c.replaceSync = function(u) {
      var m = ge(u);
      if (!p.has(this)) throw new TypeError(Z);
      var _ = p.get(this),
        v = _.basicStyleElement;
      return v.innerHTML = m, _e(this), this
    }, e(a, [{
      key: "cssRules",
      get: function() {
        if (!p.has(this)) throw new TypeError(Z);
        var u = p.get(this),
          m = u.basicStyleElement;
        return m.sheet.cssRules
      }
    }]), a
  }();
  ze.forEach(function(a) {
    Q.prototype[a] = function() {
      if (!p.has(this)) throw new TypeError(Z);
      var c = arguments,
        d = p.get(this),
        u = d.adopters,
        m = d.actions,
        _ = d.basicStyleElement,
        v = _.sheet[a].apply(_.sheet, c);
      return u.forEach(function($) {
        $.sheet && $.sheet[a].apply($.sheet, c)
      }), m.push([a, c]), v
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
    for (var c = document.createDocumentFragment(), d = fe(a), u = S.get(a), m = 0, _ = d.length; m < _; m++) {
      var v = p.get(d[m]),
        $ = v.adopters,
        E = v.basicStyleElement,
        b = $.get(a);
      b ? (u.disconnect(), c.appendChild(b), (!b.innerHTML || b.sheet && !b.sheet.cssText) && (b.innerHTML = E.innerHTML), u.observe()) : (b = document.createElement("style"), b.innerHTML = E.innerHTML, l.set(b, a), f.set(b, 0), $.set(a, b), c.appendChild(b)), a === document.head && n.push(b)
    }
    a.insertBefore(c, a.lastChild);
    for (var B = 0, oe = d.length; B < oe; B++) {
      var z = p.get(d[B]),
        ne = z.adopters,
        R = z.actions,
        Y = ne.get(a),
        Ne = f.get(Y);
      if (R.length > 0) {
        for (var ie = Ne, We = R.length; ie < We; ie++) {
          var be = R[ie],
            Fe = be[0],
            Je = be[1];
          Y.sheet[Fe].apply(Y.sheet, Je)
        }
        f.set(Y, R.length - 1)
      }
    }
  }

  function je(a, c) {
    for (var d = fe(a), u = 0, m = c.length; u < m; u++)
      if (!(d.indexOf(c[u]) > -1)) {
        var _ = p.get(c[u]),
          v = _.adopters,
          $ = S.get(a),
          E = v.get(a);
        E || (E = v.get(document.head)), $.disconnect(), E.parentNode.removeChild(E), $.observe()
      }
  }

  function Ge(a) {
    if (!!document)
      for (var c = 0, d = a.length; c < d; c++) {
        for (var u = a[c], m = u.addedNodes, _ = u.removedNodes, v = 0, $ = _.length; v < $; v++) {
          var E = l.get(_[v]);
          E && X(E)
        }
        if (!t)
          for (var b = 0, B = m.length; b < B; b++)
            for (var oe = document.createNodeIterator(m[b], NodeFilter.SHOW_ELEMENT, function(ne) {
                var R = h.get(ne);
                return R && R.adoptedStyleSheets.length > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
              }, null, !1), z = void 0; z = oe.nextNode();) X(h.get(z))
      }
  }

  function ye(a) {
    var c = new MutationObserver(Ge),
      d = {
        observe: function() {
          c.observe(a, {
            childList: !0,
            subtree: !0
          })
        },
        disconnect: function() {
          c.disconnect()
        }
      };
    S.set(a, d), d.observe()
  }

  function we() {
    var a = document.createElement("iframe");
    a.hidden = !0, document.body.appendChild(a), y.body = a.contentWindow.document.body, y.CSSStyleSheet = a.contentWindow.CSSStyleSheet, me(a.contentWindow.CSSStyleSheet.prototype), ye(document.body), g.loaded = !0;
    for (var c = document.createDocumentFragment(), d = 0, u = o.length; d < u; d++) o[d].disabled = !1, c.appendChild(o[d]);
    y.body.appendChild(c);
    for (var m = 0, _ = n.length; m < _; m++) c.appendChild(n[m]);
    document.body.insertBefore(c, document.body.firstChild);
    for (var v = 0, $ = r.length; v < $; v++) X(r[v]);
    r.length = 0, o.length = 0, n.length = 0
  }

  function Ve() {
    var a = {
      configurable: !0,
      get: function() {
        return s.get(this) || []
      },
      set: function(u) {
        var m = s.get(this) || [];
        Be(u, this);
        var _ = this === document ? ue() ? this.head : this.body : this,
          v = "isConnected" in _ ? _.isConnected : document.body.contains(_);
        v ? window.requestAnimationFrame(function() {
          X(_), je(_, m)
        }) : r.push(_)
      }
    };
    if (Object.defineProperty(Document.prototype, "adoptedStyleSheets", a), typeof ShadowRoot < "u") {
      var c = Element.prototype.attachShadow;
      Element.prototype.attachShadow = function() {
        var d = t ? this : c.apply(this, arguments);
        return h.set(this, d), ye(d), d
      }, Object.defineProperty(ShadowRoot.prototype, "adoptedStyleSheets", a)
    }
  }
  me(P.prototype), window.CSSStyleSheet = Q, Ve(), ue() ? document.addEventListener("DOMContentLoaded", we) : we()
})();
const gt = `.ad-tooltip--theme{font-size:12/16rem;font-weight:400;border-radius:2/16rem;box-shadow:0 2px 4px #00000026;padding:16/16rem;color:#4e5761;text-align:left;background-color:#fafafa;border:1px solid #E3E4E5}@media (min-width: 1280px){.ad-tooltip--theme{font-size:14/16rem}}.ad-tooltip--theme .tippy-arrow:after{display:block;content:"";width:11/16rem;height:11/16rem;background:#FAFAFA;border:1px solid #E3E4E5}.ad-tooltip--theme[x-placement^=top]{margin-bottom:8/16rem}.ad-tooltip--theme[x-placement^=top] .tippy-arrow{border-top-color:#fafafa}.ad-tooltip--theme[x-placement^=top] .tippy-arrow:after{transform:translate(-50%,-105%) rotate(45deg);border-left:none;border-top:none}.ad-tooltip--theme[x-placement^=bottom]{margin-top:8/16rem}.ad-tooltip--theme[x-placement^=bottom] .tippy-arrow{border-bottom-color:#fafafa}.ad-tooltip--theme[x-placement^=bottom] .tippy-arrow:after{transform:translate(-50%,5%) rotate(45deg);border-bottom:none;border-right:none}.ad-tooltip--theme[x-placement^=right]{margin-left:8/16rem}.ad-tooltip--theme[x-placement^=right] .tippy-arrow{border-right-color:#fafafa}.ad-tooltip--theme[x-placement^=right] .tippy-arrow:after{transform:translate(5%,-50%) rotate(45deg);border-top:none;border-right:none}.ad-tooltip--theme[x-placement^=left]{margin-right:8/16rem}.ad-tooltip--theme[x-placement^=left] .tippy-arrow{border-left-color:#fafafa}.ad-tooltip--theme[x-placement^=left] .tippy-arrow:after{transform:translate(-105%,-50%) rotate(45deg);border-left:none;border-bottom:none}:host{display:block;font-family:LidlFontCondPro,Trebuchet MS,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:16/16rem;line-height:1.4;color:#353b42;border-radius:2/16rem}:host a{text-decoration:none;color:unset}:host .banner{margin:0 auto;position:relative}:host .banner--large{max-width:320px;height:150px;box-shadow:0 2px 4px #00000026}@media (min-width: 600px){:host .banner--large{max-width:970px;height:250px}}:host .banner--small{aspect-ratio:auto 4 / 3;width:100%}:host .banner-new{border-radius:1rem;background-color:#fff;box-shadow:0 2px 4px #00000026}:host .banner-new__wrapper{position:relative}:host .banner-new__img{width:100%;height:100%;object-fit:cover;border-style:none}:host .banner-new__label{padding:.5rem;border-radius:0 0 1rem 1rem}:host .banner-new__headline{word-wrap:break-word;overflow:hidden;line-height:120%;display:-webkit-box;min-height:3rem}:host .banner-old{display:block;position:relative;background-color:#fff;overflow:hidden}:host .banner-old__img{width:100%;height:100%;object-fit:cover;border-style:none}:host .banner-old__label{position:absolute;bottom:0;left:0;width:100%;background-color:#ffffffb3;padding:.5rem 1rem;color:#353b42}:host .banner-old__headline{word-wrap:break-word;overflow:hidden;max-height:3rem;line-height:1.4rem;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}:host .ads-tag{display:flex;position:absolute;bottom:0;right:0;padding:4px;background-color:#fff}:host .ads-tag__img{width:100%;height:100%;object-fit:cover;border-style:none}:host .ads-tag__icon{margin-left:4px;margin-top:3px;width:12px;height:12px;mask-image:url(/cdn/assets/icons/1.0.0/information-circle.svg);-webkit-mask-image:url(/cdn/assets/icons/1.0.0/information-circle.svg);background-color:#4e5761}:host .ads-tag__text{font-size:.75rem;font-weight:400}@media (min-width: 1280px){:host .ads-tag__text{font-size:.875rem}}:host .rounded-corners{border-radius:1rem 1rem 0 0}:host .ad-tooltip{background:none;border:none;padding:0;margin:0;cursor:pointer;color:inherit;display:inline-flex}:host .skeleton{width:100%;max-width:320px;height:150px;position:relative;margin:0 auto;display:flex;vertical-align:middle;cursor:progress;background-color:#e3e4e6;background-image:linear-gradient(90deg,transparent 25%,#fff 50%,transparent 75%);background-size:200% 200%;animation:skeleton-shimmer 2s linear infinite}@keyframes skeleton-shimmer{0%{background-position-x:200%}50%{background-position-x:100%}to{background-position-x:0%}}@media (min-width: 600px){:host .skeleton{max-width:970px;height:250px}}
`;
var mt = Object.defineProperty,
  _t = Object.getOwnPropertyDescriptor,
  k = (i, e, t, o) => {
    for (var n = o > 1 ? void 0 : o ? _t(e, t) : e, r = i.length - 1, s; r >= 0; r--)(s = i[r]) && (n = (o ? s(e, t, n) : s(n)) || n);
    return o && n && mt(e, t, n), n
  };
const qe = new CSSStyleSheet;
qe.replaceSync(gt);
let C = class extends V {
  constructor() {
    super(...arguments), this.tagText = "Ads", this.showTag = !0, this.size = "large", this.title = "", this.showLoading = !1, this.debug = !1, this.adsData = null, this.requestData = "", this._showNewDesign = !1, this._showBanner = !1, this._showSkeleton = !1, this.consent = {}, this.mql = window.matchMedia && window.matchMedia("(max-width: 600px)"), this._toggleDesign = i => {
      this._showNewDesign = i.matches
    }
  }
  static get styles() {
    return [qe]
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
    return A`
      <a .href="${(i=this._pqData)==null?void 0:i.clickthru}" target="_blank"
         @click=${this._onClickImpression}>
        <img src="${(e=this._pqData)==null?void 0:e.asset_url}" alt="Banner Ads" class="ads-tag__img">
      </a>
      ${this.showTag?this.adsTagTemplate():""}
    `
  }
  newDesignTemplate() {
    var i, e;
    return A`
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
    return A`
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
    return A`
      ${this._pqData?this.adsImageTemplate():""}
    `
  }
  async connectedCallback() {
    if (super.connectedCallback(), this._showSkeleton = this.showLoading, this.consent = this.debug ? {
        marketing: !0
      } : await J.onConsent(), !this.consent || this.consent && !this.consent.marketing) {
      this._showSkeleton = !1;
      return
    }
    await this._getAd(), this._toggleDesign(this.mql), this.mql && this.mql.addEventListener && this.mql.addEventListener("change", this._toggleDesign)
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.mql && this.mql.removeEventListener && this.mql.removeEventListener("change", this._toggleDesign)
  }
  async updated(i) {
    if (i.has("requestData")) {
      const e = i.get("requestData");
      this.requestData && this.requestData !== e && (this._showSkeleton = this.showLoading, await this._getAd())
    }
  }
  render() {
    return A`
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
    for (let s = 0; s < 36; s++) s === 8 || s === 13 || s === 18 || s === 23 ? e[s] = "-" : s === 14 ? e[s] = "4" : (t <= 2 && (t = 33554432 + Math.random() * 16777216 | 0), o = t & 15, t = t >> 4, e[s] = i[s === 19 ? o & 3 | 8 : o]);
    const n = e.join(""),
      r = "; max-age=" + 24 * 60 * 60 * 730;
    return document.cookie = "adSessionId=" + n + r + "; secure; path=/", n
  }
  fetchWithTimeout(i, e = {}, t = 5e3) {
    let o = {};
    if (typeof window.AbortController == "function") {
      const n = new AbortController;
      o = {
        ...e,
        signal: n.signal
      }, setTimeout(() => {
        n.abort()
      }, t)
    }
    return fetch(i, o)
      .then(n => {
        if (!n.ok) throw new Error(`${n.status}: ${n.statusText}`);
        return n
      })
      .catch(n => {
        throw this._showSkeleton = !1, n.name === "AbortError" ? new Error("Response timed out") : new Error(n.message)
      })
  }
  async _getAd() {
    var i;
    try {
      if (!this.requestData || !this.consent || this.consent && !this.consent.marketing) {
        this._showSkeleton = !1;
        return
      }
      const e = J.getCookieValue("adSessionId") || this.setAdSessionId(),
        t = JSON.parse(this.requestData);
      t.session = e;
      const o = await this.fetchWithTimeout("/t/piq/request", {
        method: "POST",
        body: JSON.stringify(t)
      }, 500);
      if (o.ok && o.status === 200) {
        if (this._pqData = await o.json()
          .then(n => n[0]), !(this._pqData && ((i = this._pqData) == null ? void 0 : i.clickthru))) return;
        this._showSkeleton = !1, this._showBanner = !0, setTimeout(() => {
          this._bannerAdsImpression()
        }, 200)
      }
    } catch (e) {
      this._showSkeleton = !1, this.debug && console.log(e)
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
      scenarioName: G.General_Promotion_Click,
      collections: {
        eventInfo: {
          eventAction: G.General_Promotion_Click,
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
      scenarioName: G.General_Promotion_View,
      collections: {
        eventInfo: {
          eventAction: G.General_Promotion_View,
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
k([T({
  type: String
})], C.prototype, "tagText", 2);
k([T({
  type: Boolean
})], C.prototype, "showTag", 2);
k([T({
  type: String
})], C.prototype, "size", 2);
k([T({
  type: String
})], C.prototype, "title", 2);
k([T({
  type: Boolean
})], C.prototype, "showLoading", 2);
k([T({
  type: Boolean
})], C.prototype, "debug", 2);
k([T({
  type: String,
  converter: {
    fromAttribute: i => i && JSON.parse(decodeURI(i))
  }
})], C.prototype, "adsData", 2);
k([T({
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
k([ft("#tooltip")], C.prototype, "tooltip", 2);
C = k([ct("banner-ads")], C);