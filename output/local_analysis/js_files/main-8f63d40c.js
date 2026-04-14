const Ke = function() {
  const e = document.createElement("link")
    .relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) o(i);
  new MutationObserver(i => {
      for (const r of i)
        if (r.type === "childList")
          for (const s of r.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && o(s)
    })
    .observe(document, {
      childList: !0,
      subtree: !0
    });

  function t(i) {
    const r = {};
    return i.integrity && (r.integrity = i.integrity), i.referrerpolicy && (r.referrerPolicy = i.referrerpolicy), i.crossorigin === "use-credentials" ? r.credentials = "include" : i.crossorigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r
  }

  function o(i) {
    if (i.ep) return;
    i.ep = !0;
    const r = t(i);
    fetch(i.href, r)
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
const Qe = n => new Ze(typeof n == "string" ? n : n + "", void 0, Oe),
  Xe = (n, e) => {
    ue ? n.adoptedStyleSheets = e.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet) : e.forEach(t => {
      const o = document.createElement("style"),
        i = window.litNonce;
      i !== void 0 && o.setAttribute("nonce", i), o.textContent = t.cssText, n.appendChild(o)
    })
  },
  $e = ue ? n => n : n => n instanceof CSSStyleSheet ? (e => {
    let t = "";
    for (const o of e.cssRules) t += o.cssText;
    return Qe(t)
  })(n) : n;
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
    toAttribute(n, e) {
      switch (e) {
        case Boolean:
          n = n ? Ye : null;
          break;
        case Object:
        case Array:
          n = n == null ? n : JSON.stringify(n)
      }
      return n
    },
    fromAttribute(n, e) {
      let t = n;
      switch (e) {
        case Boolean:
          t = n !== null;
          break;
        case Number:
          t = n === null ? null : Number(n);
          break;
        case Object:
        case Array:
          try {
            t = JSON.parse(n)
          } catch {
            t = null
          }
      }
      return t
    }
  },
  Me = (n, e) => e !== n && (e == e || n == n),
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
      const i = this._$Ep(o, t);
      i !== void 0 && (this._$Ev.set(i, o), e.push(i))
    }), e
  }
  static createProperty(e, t = se) {
    if (t.state && (t.attribute = !1), this.finalize(), this.elementProperties.set(e, t), !t.noAccessor && !this.prototype.hasOwnProperty(e)) {
      const o = typeof e == "symbol" ? Symbol() : "__" + e,
        i = this.getPropertyDescriptor(e, o, t);
      i !== void 0 && Object.defineProperty(this.prototype, e, i)
    }
  }
  static getPropertyDescriptor(e, t, o) {
    return {
      get() {
        return this[t]
      },
      set(i) {
        const r = this[e];
        this[t] = i, this.requestUpdate(e, r, o)
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
      for (const i of o) this.createProperty(i, t[i])
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const o = new Set(e.flat(1 / 0)
        .reverse());
      for (const i of o) t.unshift($e(i))
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
    var i, r;
    const s = this.constructor._$Ep(e, o);
    if (s !== void 0 && o.reflect === !0) {
      const h = ((r = (i = o.converter) === null || i === void 0 ? void 0 : i.toAttribute) !== null && r !== void 0 ? r : ce.toAttribute)(t, o.type);
      this._$El = e, h == null ? this.removeAttribute(s) : this.setAttribute(s, h), this._$El = null
    }
  }
  _$AK(e, t) {
    var o, i;
    const r = this.constructor,
      s = r._$Ev.get(e);
    if (s !== void 0 && this._$El !== s) {
      const h = r.getPropertyOptions(s),
        l = h.converter,
        c = (i = (o = l == null ? void 0 : l.fromAttribute) !== null && o !== void 0 ? o : typeof l == "function" ? l : null) !== null && i !== void 0 ? i : ce.fromAttribute;
      this._$El = s, this[s] = c(t, h.type), this._$El = null
    }
  }
  requestUpdate(e, t, o) {
    let i = !0;
    e !== void 0 && (((o = o || this.constructor.getPropertyOptions(e))
      .hasChanged || Me)(this[e], t) ? (this._$AL.has(e) || this._$AL.set(e, t), o.reflect === !0 && this._$El !== e && (this._$EC === void 0 && (this._$EC = new Map), this._$EC.set(e, o))) : i = !1), !this.isUpdatePending && i && (this._$E_ = this._$Ej())
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
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((i, r) => this[r] = i), this._$Ei = void 0);
    let t = !1;
    const o = this._$AL;
    try {
      t = this.shouldUpdate(o), t ? (this.willUpdate(o), (e = this._$ES) === null || e === void 0 || e.forEach(i => {
        var r;
        return (r = i.hostUpdate) === null || r === void 0 ? void 0 : r.call(i)
      }), this.update(o)) : this._$Ek()
    } catch (i) {
      throw t = !1, this._$Ek(), i
    }
    t && this._$AE(o)
  }
  willUpdate(e) {}
  _$AE(e) {
    var t;
    (t = this._$ES) === null || t === void 0 || t.forEach(o => {
      var i;
      return (i = o.hostUpdated) === null || i === void 0 ? void 0 : i.call(o)
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
    createHTML: n => n
  }) : void 0,
  D = `lit$${(Math.random()+"").slice(9)}$`,
  Ie = "?" + D,
  et = `<${Ie}>`,
  H = document,
  N = (n = "") => H.createComment(n),
  W = n => n === null || typeof n != "object" && typeof n != "function",
  He = Array.isArray,
  tt = n => He(n) || typeof(n == null ? void 0 : n[Symbol.iterator]) == "function",
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
  ot = n => (e, ...t) => ({
    _$litType$: n,
    strings: e,
    values: t
  }),
  A = ot(1),
  U = Symbol.for("lit-noChange"),
  w = Symbol.for("lit-nothing"),
  De = new WeakMap,
  nt = (n, e, t) => {
    var o, i;
    const r = (o = t == null ? void 0 : t.renderBefore) !== null && o !== void 0 ? o : e;
    let s = r._$litPart$;
    if (s === void 0) {
      const h = (i = t == null ? void 0 : t.renderBefore) !== null && i !== void 0 ? i : null;
      r._$litPart$ = s = new K(e.insertBefore(N(), h), h, void 0, t != null ? t : {})
    }
    return s._$AI(n), s
  },
  M = H.createTreeWalker(H, 129, null, !1),
  it = (n, e) => {
    const t = n.length - 1,
      o = [];
    let i, r = e === 2 ? "<svg>" : "",
      s = j;
    for (let l = 0; l < t; l++) {
      const c = n[l];
      let S, f, g = -1,
        y = 0;
      for (; y < c.length && (s.lastIndex = y, f = s.exec(c), f !== null);) y = s.lastIndex, s === j ? f[1] === "!--" ? s = Pe : f[1] !== void 0 ? s = Ee : f[2] !== void 0 ? (Ue.test(f[2]) && (i = RegExp("</" + f[2], "g")), s = L) : f[3] !== void 0 && (s = L) : s === L ? f[0] === ">" ? (s = i != null ? i : j, g = -1) : f[1] === void 0 ? g = -2 : (g = s.lastIndex - f[2].length, S = f[1], s = f[3] === void 0 ? L : f[3] === '"' ? Te : xe) : s === Te || s === xe ? s = L : s === Pe || s === Ee ? s = j : (s = L, i = void 0);
      const P = s === L && n[l + 1].startsWith("/>") ? " " : "";
      r += s === j ? c + et : g >= 0 ? (o.push(S), c.slice(0, g) + "$lit$" + c.slice(g) + D + P) : c + D + (g === -2 ? (o.push(void 0), l) : P)
    }
    const h = r + (n[t] || "<?>") + (e === 2 ? "</svg>" : "");
    if (!Array.isArray(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return [Ae !== void 0 ? Ae.createHTML(h) : h, o]
  };
class F {
  constructor({
    strings: e,
    _$litType$: t
  }, o) {
    let i;
    this.parts = [];
    let r = 0,
      s = 0;
    const h = e.length - 1,
      l = this.parts,
      [c, S] = it(e, t);
    if (this.el = F.createElement(c, o), M.currentNode = this.el.content, t === 2) {
      const f = this.el.content,
        g = f.firstChild;
      g.remove(), f.append(...g.childNodes)
    }
    for (;
      (i = M.nextNode()) !== null && l.length < h;) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) {
          const f = [];
          for (const g of i.getAttributeNames())
            if (g.endsWith("$lit$") || g.startsWith(D)) {
              const y = S[s++];
              if (f.push(g), y !== void 0) {
                const P = i.getAttribute(y.toLowerCase() + "$lit$")
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
            } for (const g of f) i.removeAttribute(g)
        }
        if (Ue.test(i.tagName)) {
          const f = i.textContent.split(D),
            g = f.length - 1;
          if (g > 0) {
            i.textContent = I ? I.emptyScript : "";
            for (let y = 0; y < g; y++) i.append(f[y], N()), M.nextNode(), l.push({
              type: 2,
              index: ++r
            });
            i.append(f[g], N())
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === Ie) l.push({
          type: 2,
          index: r
        });
        else {
          let f = -1;
          for (;
            (f = i.data.indexOf(D, f + 1)) !== -1;) l.push({
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

function q(n, e, t = n, o) {
  var i, r, s, h;
  if (e === U) return e;
  let l = o !== void 0 ? (i = t._$Cl) === null || i === void 0 ? void 0 : i[o] : t._$Cu;
  const c = W(e) ? void 0 : e._$litDirective$;
  return (l == null ? void 0 : l.constructor) !== c && ((r = l == null ? void 0 : l._$AO) === null || r === void 0 || r.call(l, !1), c === void 0 ? l = void 0 : (l = new c(n), l._$AT(n, t, o)), o !== void 0 ? ((s = (h = t)
    ._$Cl) !== null && s !== void 0 ? s : h._$Cl = [])[o] = l : t._$Cu = l), l !== void 0 && (e = q(n, l._$AS(n, e.values), l, o)), e
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
      parts: i
    } = this._$AD, r = ((t = e == null ? void 0 : e.creationScope) !== null && t !== void 0 ? t : H)
      .importNode(o, !0);
    M.currentNode = r;
    let s = M.nextNode(),
      h = 0,
      l = 0,
      c = i[0];
    for (; c !== void 0;) {
      if (h === c.index) {
        let S;
        c.type === 2 ? S = new K(s, s.nextSibling, this, e) : c.type === 1 ? S = new c.ctor(s, c.name, c.strings, this, e) : c.type === 6 && (S = new ht(s, this, e)), this.v.push(S), c = i[++l]
      }
      h !== (c == null ? void 0 : c.index) && (s = M.nextNode(), h++)
    }
    return r
  }
  m(e) {
    let t = 0;
    for (const o of this.v) o !== void 0 && (o.strings !== void 0 ? (o._$AI(e, o, t), t += o.strings.length - 2) : o._$AI(e[t])), t++
  }
}
class K {
  constructor(e, t, o, i) {
    var r;
    this.type = 2, this._$AH = w, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = o, this.options = i, this._$C_ = (r = i == null ? void 0 : i.isConnected) === null || r === void 0 || r
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
      _$litType$: i
    } = e, r = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = F.createElement(i.h, this.options)), i);
    if (((t = this._$AH) === null || t === void 0 ? void 0 : t._$AD) === r) this._$AH.m(o);
    else {
      const s = new rt(r, this),
        h = s.p(this.options);
      s.m(o), this.k(h), this._$AH = s
    }
  }
  _$AC(e) {
    let t = De.get(e.strings);
    return t === void 0 && De.set(e.strings, t = new F(e)), t
  }
  S(e) {
    He(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let o, i = 0;
    for (const r of e) i === t.length ? t.push(o = new K(this.j(N()), this.j(N()), this, this.options)) : o = t[i], o._$AI(r), i++;
    i < t.length && (this._$AR(o && o._$AB.nextSibling, i), t.length = i)
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var o;
    for ((o = this._$AP) === null || o === void 0 || o.call(this, !1, !0, t); e && e !== this._$AB;) {
      const i = e.nextSibling;
      e.remove(), e = i
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$C_ = e, (t = this._$AP) === null || t === void 0 || t.call(this, e))
  }
}
class ee {
  constructor(e, t, o, i, r) {
    this.type = 1, this._$AH = w, this._$AN = void 0, this.element = e, this.name = t, this._$AM = i, this.options = r, o.length > 2 || o[0] !== "" || o[1] !== "" ? (this._$AH = Array(o.length - 1)
      .fill(new String), this.strings = o) : this._$AH = w
  }
  get tagName() {
    return this.element.tagName
  }
  get _$AU() {
    return this._$AM._$AU
  }
  _$AI(e, t = this, o, i) {
    const r = this.strings;
    let s = !1;
    if (r === void 0) e = q(this, e, t, 0), s = !W(e) || e !== this._$AH && e !== U, s && (this._$AH = e);
    else {
      const h = e;
      let l, c;
      for (e = r[0], l = 0; l < r.length - 1; l++) c = q(this, h[o + l], t, l), c === U && (c = this._$AH[l]), s || (s = !W(c) || c !== this._$AH[l]), c === w ? e = w : e !== w && (e += (c != null ? c : "") + r[l + 1]), this._$AH[l] = c
    }
    s && !i && this.P(e)
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
  constructor(e, t, o, i, r) {
    super(e, t, o, i, r), this.type = 5
  }
  _$AI(e, t = this) {
    var o;
    if ((e = (o = q(this, e, t, 0)) !== null && o !== void 0 ? o : w) === U) return;
    const i = this._$AH,
      r = e === w && i !== w || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive,
      s = e !== w && (i === w || r);
    r && this.element.removeEventListener(this.name, this, i), s && this.element.addEventListener(this.name, this, e), this._$AH = e
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
const ct = n => e => typeof e == "function" ? ((t, o) => (window.customElements.define(t, o), o))(n, e) : ((t, o) => {
  const {
    kind: i,
    elements: r
  } = o;
  return {
    kind: i,
    elements: r,
    finisher(s) {
      window.customElements.define(t, s)
    }
  }
})(n, e);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ut = (n, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? {
  ...e,
  finisher(t) {
    t.createProperty(e.key, n)
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
    t.createProperty(e.key, n)
  }
};

function T(n) {
  return (e, t) => t !== void 0 ? ((o, i, r) => {
    i.constructor.createProperty(r, o)
  })(n, e, t) : ut(n, e)
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function te(n) {
  return T({
    ...n,
    state: !0
  })
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pt = ({
  finisher: n,
  descriptor: e
}) => (t, o) => {
  var i;
  if (o === void 0) {
    const r = (i = t.originalKey) !== null && i !== void 0 ? i : t.key,
      s = e != null ? {
        kind: "method",
        placement: "prototype",
        key: r,
        descriptor: e(t.key)
      } : {
        ...t,
        key: r
      };
    return n != null && (s.finisher = function(h) {
      n(h, r)
    }), s
  } {
    const r = t.constructor;
    e !== void 0 && Object.defineProperty(t, o, e(o)), n == null || n(r, o)
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ft(n, e) {
  return pt({
    descriptor: t => {
      const o = {
        get() {
          var i, r;
          return (r = (i = this.renderRoot) === null || i === void 0 ? void 0 : i.querySelector(n)) !== null && r !== void 0 ? r : null
        },
        enumerable: !0,
        configurable: !0
      };
      if (e) {
        const i = typeof t == "symbol" ? Symbol() : "__" + t;
        o.get = function() {
          var r, s;
          return this[i] === void 0 && (this[i] = (s = (r = this.renderRoot) === null || r === void 0 ? void 0 : r.querySelector(n)) !== null && s !== void 0 ? s : null), this[i]
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
var G = (n => (n.PDP_Pageload = "PDP_Pageload", n.PDP_Click = "PDP_Click", n.PDP_Social_Click = "PDP_Social_Click", n.PDP_Image_Click = "PDP_Image_Click", n.PDP_Section_EnterViewport = "PDP_Section_EnterViewport", n.PDP_Recommendation_Load = "PDP_Recommendation_Load", n.PDP_Recommendation_EnterViewport = "PDP_Recommendation_EnterViewport", n.PDP_Recommendation_Click = "PDP_Recommendation_Click", n.PDP_Rating_Click = "PDP_Rating_Click", n.PDP_Information_Load = "PDP_Information_Load", n.General_Pageload = "General_Pageload", n.General_Recommendation_Load = "General_Recommendation_Load", n.General_RecommendationProduct_EnterViewport = "General_RecommendationProduct_EnterViewport", n.General_Product_Click = "General_Product_Click", n.General_Section_EnterViewport = "General_Section_EnterViewport", n.General_Teaser_Click = "General_Teaser_Click", n.General_Link_Click = "General_Link_Click", n.PLP_Pageload = "PLP_Pageload", n.PLP_FilterSelect_Click = "PLP_FilterSelect_Click", n.General_SearchTermConfirm_Click = "General_SearchTermConfirm_Click", n.Cart_Pageload = "Cart_Pageload", n.Cart_Button_Click = "Cart_Button_Click", n.Cart_Success_Pageload = "Cart_Success_Pageload", n.General_Detection_Pageload = "General_Detection_Pageload", n.General_Product_View = "General_Product_View", n.General_Promotion_View = "General_Promotion_View", n.General_Promotion_Click = "General_Promotion_Click", n.Wishlist_Pageload = "Wishlist_Pageload", n.Wishlist_Button_Click = "Wishlist_Button_Click", n.StoreSearch_Pageload = "StoreSearch_Pageload", n.StoreSearch_Click = "StoreSearch_Click", n.StoreSearchDP_Pageload = "StoreSearchDP_Pageload", n.StoreSearchDP_Click = "StoreSearchDP_Click", n.MyAccount_Pageload = "MyAccount_Pageload", n.MyAccount_Click = "MyAccount_Click", n))(G || {});
class J {
  static getCookieValue(e) {
    var o;
    const t = "(^|;) ?" + e + "=([^;]*)(;|$)";
    try {
      const i = (o = document == null ? void 0 : document.cookie) == null ? void 0 : o.match(t),
        r = i && i[2];
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
      const i = decodeURIComponent(t)
        .replace(/%2c/g, ",")
        .replace(/'/g, '"')
        .replace(/([{\[,])\s*([a-zA-Z0-9_]+?):/g, '$1"$2":'),
        r = JSON.parse(i);
      return r.hasOwnProperty("marketing") && r.hasOwnProperty("statistics") && r.hasOwnProperty("preferences") ? r : void 0
    } catch {
      return
    }
  }
  static onConsent() {
    return new Promise(e => {
      var S, f;
      const t = J.getConsentCookie(),
        i = ((S = window == null ? void 0 : window.Cookiebot) != null && S.hasResponse ? (f = window == null ? void 0 : window.Cookiebot) == null ? void 0 : f.consent : void 0) || t;
      if (i) {
        e(i);
        return
      }
      let r, s = 0;
      const h = 30,
        l = () => {
          var g;
          clearTimeout(r), window.removeEventListener("CookiebotOnLoad", l), e((g = window == null ? void 0 : window.Cookiebot) == null ? void 0 : g.consent)
        },
        c = () => {
          var y, P, x;
          if (!((y = window == null ? void 0 : window.Cookiebot) == null ? void 0 : y.consent) && s < h) {
            s++, r = setTimeout(c, 100);
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
      c()
    })
  }
}(function() {
  if (typeof document > "u" || "adoptedStyleSheets" in document) return;

  function n(a, u) {
    for (var d = 0; d < u.length; d++) {
      var p = u[d];
      p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(a, p.key, p)
    }
  }

  function e(a, u, d) {
    return u && n(a.prototype, u), d && n(a, d), a
  }
  var t = "ShadyCSS" in window && !window.ShadyCSS.nativeShadow,
    o = [],
    i = [],
    r = [],
    s = new WeakMap,
    h = new WeakMap,
    l = new WeakMap,
    c = new WeakMap,
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

  function Be(a, u) {
    var d = u === document ? "Document" : "ShadowRoot";
    if (!Array.isArray(a)) throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + d + ": Iterator getter is not callable.");
    if (!a.every(ve)) throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + d + ": Failed to convert value to 'CSSStyleSheet'");
    var p = a.filter(function(m, _) {
      return a.indexOf(m) === _
    });
    return s.set(u, p), p
  }

  function pe() {
    return document.readyState === "loading"
  }

  function fe(a) {
    return s.get(a.parentNode === document.documentElement ? document : a)
  }

  function ge(a) {
    a === void 0 && (a = "");
    var u = a.match(x) || [],
      d = a;
    return u.length && (console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"), u.forEach(function(p) {
      d = d.replace(p, "")
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
    var u = h.get(a),
      d = u.adopters,
      p = u.basicStyleElement;
    d.forEach(function(m) {
      m.innerHTML = p.innerHTML
    })
  }
  var Q = function() {
    function a() {
      var d = document.createElement("style");
      g.loaded ? y.body.appendChild(d) : (document.head.appendChild(d), d.disabled = !0, o.push(d)), h.set(this, {
        adopters: new Map,
        actions: [],
        basicStyleElement: d
      })
    }
    var u = a.prototype;
    return u.replace = function(p) {
      var m = ge(p);
      try {
        if (!h.has(this)) throw new TypeError(Z);
        var _ = h.get(this),
          v = _.basicStyleElement;
        return v.innerHTML = m, _e(this), Promise.resolve(this)
      } catch ($) {
        return Promise.reject($)
      }
    }, u.replaceSync = function(p) {
      var m = ge(p);
      if (!h.has(this)) throw new TypeError(Z);
      var _ = h.get(this),
        v = _.basicStyleElement;
      return v.innerHTML = m, _e(this), this
    }, e(a, [{
      key: "cssRules",
      get: function() {
        if (!h.has(this)) throw new TypeError(Z);
        var p = h.get(this),
          m = p.basicStyleElement;
        return m.sheet.cssRules
      }
    }]), a
  }();
  ze.forEach(function(a) {
    Q.prototype[a] = function() {
      if (!h.has(this)) throw new TypeError(Z);
      var u = arguments,
        d = h.get(this),
        p = d.adopters,
        m = d.actions,
        _ = d.basicStyleElement,
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
    for (var u = document.createDocumentFragment(), d = fe(a), p = S.get(a), m = 0, _ = d.length; m < _; m++) {
      var v = h.get(d[m]),
        $ = v.adopters,
        E = v.basicStyleElement,
        b = $.get(a);
      b ? (p.disconnect(), u.appendChild(b), (!b.innerHTML || b.sheet && !b.sheet.cssText) && (b.innerHTML = E.innerHTML), p.observe()) : (b = document.createElement("style"), b.innerHTML = E.innerHTML, l.set(b, a), f.set(b, 0), $.set(a, b), u.appendChild(b)), a === document.head && i.push(b)
    }
    a.insertBefore(u, a.lastChild);
    for (var B = 0, oe = d.length; B < oe; B++) {
      var z = h.get(d[B]),
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

  function je(a, u) {
    for (var d = fe(a), p = 0, m = u.length; p < m; p++)
      if (!(d.indexOf(u[p]) > -1)) {
        var _ = h.get(u[p]),
          v = _.adopters,
          $ = S.get(a),
          E = v.get(a);
        E || (E = v.get(document.head)), $.disconnect(), E.parentNode.removeChild(E), $.observe()
      }
  }

  function Ge(a) {
    if (!!document)
      for (var u = 0, d = a.length; u < d; u++) {
        for (var p = a[u], m = p.addedNodes, _ = p.removedNodes, v = 0, $ = _.length; v < $; v++) {
          var E = l.get(_[v]);
          E && X(E)
        }
        if (!t)
          for (var b = 0, B = m.length; b < B; b++)
            for (var oe = document.createNodeIterator(m[b], NodeFilter.SHOW_ELEMENT, function(ne) {
                var R = c.get(ne);
                return R && R.adoptedStyleSheets.length > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
              }, null, !1), z = void 0; z = oe.nextNode();) X(c.get(z))
      }
  }

  function ye(a) {
    var u = new MutationObserver(Ge),
      d = {
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
    S.set(a, d), d.observe()
  }

  function we() {
    var a = document.createElement("iframe");
    a.hidden = !0, document.body.appendChild(a), y.body = a.contentWindow.document.body, y.CSSStyleSheet = a.contentWindow.CSSStyleSheet, me(a.contentWindow.CSSStyleSheet.prototype), ye(document.body), g.loaded = !0;
    for (var u = document.createDocumentFragment(), d = 0, p = o.length; d < p; d++) o[d].disabled = !1, u.appendChild(o[d]);
    y.body.appendChild(u);
    for (var m = 0, _ = i.length; m < _; m++) u.appendChild(i[m]);
    document.body.insertBefore(u, document.body.firstChild);
    for (var v = 0, $ = r.length; v < $; v++) X(r[v]);
    r.length = 0, o.length = 0, i.length = 0
  }

  function Ve() {
    var a = {
      configurable: !0,
      get: function() {
        return s.get(this) || []
      },
      set: function(p) {
        var m = s.get(this) || [];
        Be(p, this);
        var _ = this === document ? pe() ? this.head : this.body : this,
          v = "isConnected" in _ ? _.isConnected : document.body.contains(_);
        v ? window.requestAnimationFrame(function() {
          X(_), je(_, m)
        }) : r.push(_)
      }
    };
    if (Object.defineProperty(Document.prototype, "adoptedStyleSheets", a), typeof ShadowRoot < "u") {
      var u = Element.prototype.attachShadow;
      Element.prototype.attachShadow = function() {
        var d = t ? this : u.apply(this, arguments);
        return c.set(this, d), ye(d), d
      }, Object.defineProperty(ShadowRoot.prototype, "adoptedStyleSheets", a)
    }
  }
  me(P.prototype), window.CSSStyleSheet = Q, Ve(), pe() ? document.addEventListener("DOMContentLoaded", we) : we()
})();
const gt = `.ad-tooltip--theme{font-size:12/16rem;font-weight:400;border-radius:2/16rem;box-shadow:0 2px 4px #00000026;padding:16/16rem;color:#4e5761;text-align:left;background-color:#fafafa;border:1px solid #E3E4E5}@media (min-width: 1280px){.ad-tooltip--theme{font-size:14/16rem}}.ad-tooltip--theme .tippy-arrow:after{display:block;content:"";width:11/16rem;height:11/16rem;background:#FAFAFA;border:1px solid #E3E4E5}.ad-tooltip--theme[x-placement^=top]{margin-bottom:8/16rem}.ad-tooltip--theme[x-placement^=top] .tippy-arrow{border-top-color:#fafafa}.ad-tooltip--theme[x-placement^=top] .tippy-arrow:after{transform:translate(-50%,-105%) rotate(45deg);border-left:none;border-top:none}.ad-tooltip--theme[x-placement^=bottom]{margin-top:8/16rem}.ad-tooltip--theme[x-placement^=bottom] .tippy-arrow{border-bottom-color:#fafafa}.ad-tooltip--theme[x-placement^=bottom] .tippy-arrow:after{transform:translate(-50%,5%) rotate(45deg);border-bottom:none;border-right:none}.ad-tooltip--theme[x-placement^=right]{margin-left:8/16rem}.ad-tooltip--theme[x-placement^=right] .tippy-arrow{border-right-color:#fafafa}.ad-tooltip--theme[x-placement^=right] .tippy-arrow:after{transform:translate(5%,-50%) rotate(45deg);border-top:none;border-right:none}.ad-tooltip--theme[x-placement^=left]{margin-right:8/16rem}.ad-tooltip--theme[x-placement^=left] .tippy-arrow{border-left-color:#fafafa}.ad-tooltip--theme[x-placement^=left] .tippy-arrow:after{transform:translate(-105%,-50%) rotate(45deg);border-left:none;border-bottom:none}:host{display:block;font-family:LidlFontCondPro,Trebuchet MS,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:16/16rem;line-height:1.4;color:#353b42;border-radius:2/16rem}:host a{text-decoration:none;color:unset}:host .banner{margin:0 auto;position:relative}:host .banner--large{max-width:320px;height:150px;box-shadow:0 2px 4px #00000026}@media (min-width: 600px){:host .banner--large{max-width:970px;height:250px}}:host .banner--small{aspect-ratio:auto 4 / 3;width:100%}:host .banner-new{border-radius:1rem;background-color:#fff;box-shadow:0 2px 4px #00000026}:host .banner-new__wrapper{position:relative}:host .banner-new__img{width:100%;height:100%;object-fit:cover;border-style:none}:host .banner-new__label{padding:.5rem;border-radius:0 0 1rem 1rem}:host .banner-new__headline{word-wrap:break-word;overflow:hidden;line-height:120%;display:-webkit-box;min-height:3rem}:host .banner-old{display:block;position:relative;background-color:#fff;overflow:hidden}:host .banner-old__img{width:100%;height:100%;object-fit:cover;border-style:none}:host .banner-old__label{position:absolute;bottom:0;left:0;width:100%;background-color:#ffffffb3;padding:.5rem 1rem;color:#353b42}:host .banner-old__headline{word-wrap:break-word;overflow:hidden;max-height:3rem;line-height:1.4rem;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}:host .ads-tag{display:flex;position:absolute;bottom:0;right:0;padding:4px;background-color:#fff}:host .ads-tag__img{width:100%;height:100%;object-fit:cover;border-style:none}:host .ads-tag__icon{margin-left:4px;margin-top:3px;width:12px;height:12px;mask-image:url(/cdn/assets/icons/1.0.0/information-circle.svg);-webkit-mask-image:url(/cdn/assets/icons/1.0.0/information-circle.svg);background-color:#4e5761}:host .ads-tag__text{font-size:.75rem;font-weight:400}@media (min-width: 1280px){:host .ads-tag__text{font-size:.875rem}}:host .rounded-corners{border-radius:1rem 1rem 0 0}:host .ad-tooltip{background:none;border:none;padding:0;margin:0;cursor:pointer;color:inherit;display:inline-flex}:host .skeleton{width:100%;max-width:320px;height:150px;position:relative;margin:0 auto;display:flex;vertical-align:middle;cursor:progress;background-color:#e3e4e6;background-image:linear-gradient(90deg,transparent 25%,#fff 50%,transparent 75%);background-size:200% 200%;animation:skeleton-shimmer 2s linear infinite}@keyframes skeleton-shimmer{0%{background-position-x:200%}50%{background-position-x:100%}to{background-position-x:0%}}@media (min-width: 600px){:host .skeleton{max-width:970px;height:250px}}
`;
var mt = Object.defineProperty,
  _t = Object.getOwnPropertyDescriptor,
  k = (n, e, t, o) => {
    for (var i = o > 1 ? void 0 : o ? _t(e, t) : e, r = n.length - 1, s; r >= 0; r--)(s = n[r]) && (i = (o ? s(e, t, i) : s(i)) || i);
    return o && i && mt(e, t, i), i
  };
const qe = new CSSStyleSheet;
qe.replaceSync(gt);
let C = class extends V {
  constructor() {
    super(...arguments), this.tagText = "Ads", this.showTag = !0, this.size = "large", this.title = "", this.showLoading = !1, this.debug = !1, this.adsData = null, this.requestData = "", this._showNewDesign = !1, this._showBanner = !1, this._showSkeleton = !1, this.consent = {}, this.mql = window.matchMedia && window.matchMedia("(max-width: 600px)"), this._toggleDesign = n => {
      this._showNewDesign = n && n.matches
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
    var n, e;
    return A`
      <a .href="${(n=this._pqData)==null?void 0:n.clickthru}" target="_blank"
         @click=${this._onClickImpression}>
        <img src="${(e=this._pqData)==null?void 0:e.asset_url}" alt="Banner Ads" class="ads-tag__img">
      </a>
      ${this.showTag?this.adsTagTemplate():""}
    `
  }
  newDesignTemplate() {
    var n, e;
    return A`
      <div class="banner-new">
        <img src="${(n=this._pqData)==null?void 0:n.asset_url}" alt="Banner Ads"
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
    var n;
    return A`
      <div class="banner-old">
        <img src="${(n=this._pqData)==null?void 0:n.asset_url}" alt="Banner Ads"
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
  async updated(n) {
    if (n.has("requestData")) {
      const e = n.get("requestData");
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
    const n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    let e = new Array(36),
      t = 0,
      o;
    for (let s = 0; s < 36; s++) s === 8 || s === 13 || s === 18 || s === 23 ? e[s] = "-" : s === 14 ? e[s] = "4" : (t <= 2 && (t = 33554432 + Math.random() * 16777216 | 0), o = t & 15, t = t >> 4, e[s] = n[s === 19 ? o & 3 | 8 : o]);
    const i = e.join(""),
      r = "; max-age=" + 24 * 60 * 60 * 730;
    return document.cookie = "adSessionId=" + i + r + "; secure; path=/", i
  }
  fetchWithTimeout(n, e = {}, t = 5e3) {
    let o = {
        ...e
      },
      i = null;
    if (typeof window.AbortController == "function") {
      const r = new AbortController;
      o = {
        ...e,
        signal: r.signal
      };
      const s = Date.now(),
        h = () => {
          if (Date.now() - s >= t) r.abort();
          else {
            let l = t - (Date.now() - s);
            l < 0 && (l = 0), i = setTimeout(h, l)
          }
        };
      h()
    }
    return fetch(n, o)
      .then(r => {
        if (i && clearTimeout(i), !r.ok) throw new Error(`${r.status}: ${r.statusText}`);
        return r
      })
      .catch(r => {
        throw i && clearTimeout(i), this._showSkeleton = !1, r.name === "AbortError" ? new Error("Response timed out") : new Error(r.message)
      })
  }
  async _getAd() {
    var n;
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
          .then(i => i[0]), !(this._pqData && ((n = this._pqData) == null ? void 0 : n.clickthru))) return;
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
    const n = ((e = this._pqData) == null ? void 0 : e.clickthru) || "";
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
          linkType: /^(#|\/)/.test(n) || n.indexOf(window.location.hostname) > -1 ? "internal" : "external",
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
    fromAttribute: n => n && JSON.parse(decodeURI(n))
  }
})], C.prototype, "adsData", 2);
k([T({
  type: String,
  converter: {
    fromAttribute: n => n && decodeURI(n)
  },
  hasChanged(n, e) {
    return n !== e
  }
})], C.prototype, "requestData", 2);
k([te()], C.prototype, "_pqData", 2);
k([te()], C.prototype, "_showNewDesign", 2);
k([te()], C.prototype, "_showBanner", 2);
k([te()], C.prototype, "_showSkeleton", 2);
k([ft("#tooltip")], C.prototype, "tooltip", 2);
C = k([ct("banner-ads")], C);