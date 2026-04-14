(function() {
  const e = document.createElement("link")
    .relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
  new MutationObserver(o => {
      for (const s of o)
        if (s.type === "childList")
          for (const r of s.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && n(r)
    })
    .observe(document, {
      childList: !0,
      subtree: !0
    });

  function t(o) {
    const s = {};
    return o.integrity && (s.integrity = o.integrity), o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
  }

  function n(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = t(o);
    fetch(o.href, s)
  }
})();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const j = globalThis,
  se = j.ShadowRoot && (j.ShadyCSS === void 0 || j.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
  ve = Symbol(),
  de = new WeakMap;
let Le = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== ve) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (se && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = de.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet)
        .replaceSync(this.cssText), n && de.set(t, e))
    }
    return e
  }
  toString() {
    return this.cssText
  }
};
const xe = i => new Le(typeof i == "string" ? i : i + "", void 0, ve),
  Ie = (i, e) => {
    if (se) i.adoptedStyleSheets = e.map((t => t instanceof CSSStyleSheet ? t : t.styleSheet));
    else
      for (const t of e) {
        const n = document.createElement("style"),
          o = j.litNonce;
        o !== void 0 && n.setAttribute("nonce", o), n.textContent = t.cssText, i.appendChild(n)
      }
  },
  he = se ? i => i : i => i instanceof CSSStyleSheet ? (e => {
    let t = "";
    for (const n of e.cssRules) t += n.cssText;
    return xe(t)
  })(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const {
  is: Te,
  defineProperty: Re,
  getOwnPropertyDescriptor: Oe,
  getOwnPropertyNames: Me,
  getOwnPropertySymbols: Ue,
  getPrototypeOf: We
} = Object, P = globalThis, ue = P.trustedTypes, Ve = ue ? ue.emptyScript : "", ee = P.reactiveElementPolyfillSupport, U = (i, e) => i, K = {
  toAttribute(i, e) {
    switch (e) {
      case Boolean:
        i = i ? Ve : null;
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
}, re = (i, e) => !Te(i, e), _e = {
  attribute: !0,
  type: String,
  converter: K,
  reflect: !1,
  useDefault: !1,
  hasChanged: re
};
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), P.litPropertyMetadata ?? (P.litPropertyMetadata = new WeakMap);
let T = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = []))
      .push(e)
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()]
  }
  static createProperty(e, t = _e) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t))
        .wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(),
        o = this.getPropertyDescriptor(e, n, t);
      o !== void 0 && Re(this.prototype, e, o)
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const {
      get: o,
      set: s
    } = Oe(this.prototype, e) ?? {
      get() {
        return this[t]
      },
      set(r) {
        this[t] = r
      }
    };
    return {
      get: o,
      set(r) {
        const c = o == null ? void 0 : o.call(this);
        s == null || s.call(this, r), this.requestUpdate(e, c, n)
      },
      configurable: !0,
      enumerable: !0
    }
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? _e
  }
  static _$Ei() {
    if (this.hasOwnProperty(U("elementProperties"))) return;
    const e = We(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties)
  }
  static finalize() {
    if (this.hasOwnProperty(U("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(U("properties"))) {
      const t = this.properties,
        n = [...Me(t), ...Ue(t)];
      for (const o of n) this.createProperty(o, t[o])
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0)
        for (const [n, o] of t) this.elementProperties.set(n, o)
    }
    this._$Eh = new Map;
    for (const [t, n] of this.elementProperties) {
      const o = this._$Eu(t, n);
      o !== void 0 && this._$Eh.set(o, t)
    }
    this.elementStyles = this.finalizeStyles(this.styles)
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0)
        .reverse());
      for (const o of n) t.unshift(he(o))
    } else e !== void 0 && t.push(he(e));
    return t
  }
  static _$Eu(e, t) {
    const n = t.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev()
  }
  _$Ev() {
    var e;
    this._$ES = new Promise((t => this.enableUpdating = t)), this._$AL = new Map, this._$E_(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach((t => t(this)))
  }
  addController(e) {
    var t;
    (this._$EO ?? (this._$EO = new Set))
    .add(e), this.renderRoot !== void 0 && this.isConnected && ((t = e.hostConnected) == null || t.call(e))
  }
  removeController(e) {
    var t;
    (t = this._$EO) == null || t.delete(e)
  }
  _$E_() {
    const e = new Map,
      t = this.constructor.elementProperties;
    for (const n of t.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
    e.size > 0 && (this._$Ep = e)
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Ie(e, this.constructor.elementStyles), e
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((t => {
      var n;
      return (n = t.hostConnected) == null ? void 0 : n.call(t)
    }))
  }
  enableUpdating(e) {}
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((t => {
      var n;
      return (n = t.hostDisconnected) == null ? void 0 : n.call(t)
    }))
  }
  attributeChangedCallback(e, t, n) {
    this._$AK(e, n)
  }
  _$ET(e, t) {
    var s;
    const n = this.constructor.elementProperties.get(e),
      o = this.constructor._$Eu(e, n);
    if (o !== void 0 && n.reflect === !0) {
      const r = (((s = n.converter) == null ? void 0 : s.toAttribute) !== void 0 ? n.converter : K)
        .toAttribute(t, n.type);
      this._$Em = e, r == null ? this.removeAttribute(o) : this.setAttribute(o, r), this._$Em = null
    }
  }
  _$AK(e, t) {
    var s, r;
    const n = this.constructor,
      o = n._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const c = n.getPropertyOptions(o),
        a = typeof c.converter == "function" ? {
          fromAttribute: c.converter
        } : ((s = c.converter) == null ? void 0 : s.fromAttribute) !== void 0 ? c.converter : K;
      this._$Em = o;
      const l = a.fromAttribute(t, c.type);
      this[o] = l ?? ((r = this._$Ej) == null ? void 0 : r.get(o)) ?? l, this._$Em = null
    }
  }
  requestUpdate(e, t, n) {
    var o;
    if (e !== void 0) {
      const s = this.constructor,
        r = this[e];
      if (n ?? (n = s.getPropertyOptions(e)), !((n.hasChanged ?? re)(r, t) || n.useDefault && n.reflect && r === ((o = this._$Ej) == null ? void 0 : o.get(e)) && !this.hasAttribute(s._$Eu(e, n)))) return;
      this.C(e, t, n)
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP())
  }
  C(e, t, {
    useDefault: n,
    reflect: o,
    wrapped: s
  }, r) {
    n && !(this._$Ej ?? (this._$Ej = new Map))
      .has(e) && (this._$Ej.set(e, r ?? t ?? this[e]), s !== !0 || r !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), o === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = new Set))
        .add(e))
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES
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
    var n;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [s, r] of this._$Ep) this[s] = r;
        this._$Ep = void 0
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0)
        for (const [s, r] of o) {
          const {
            wrapped: c
          } = r, a = this[s];
          c !== !0 || this._$AL.has(s) || a === void 0 || this.C(s, void 0, r, a)
        }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (n = this._$EO) == null || n.forEach((o => {
        var s;
        return (s = o.hostUpdate) == null ? void 0 : s.call(o)
      })), this.update(t)) : this._$EM()
    } catch (o) {
      throw e = !1, this._$EM(), o
    }
    e && this._$AE(t)
  }
  willUpdate(e) {}
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((n => {
      var o;
      return (o = n.hostUpdated) == null ? void 0 : o.call(n)
    })), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e)
  }
  _$EM() {
    this._$AL = new Map, this.isUpdatePending = !1
  }
  get updateComplete() {
    return this.getUpdateComplete()
  }
  getUpdateComplete() {
    return this._$ES
  }
  shouldUpdate(e) {
    return !0
  }
  update(e) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((t => this._$ET(t, this[t])))), this._$EM()
  }
  updated(e) {}
  firstUpdated(e) {}
};
T.elementStyles = [], T.shadowRootOptions = {
    mode: "open"
  }, T[U("elementProperties")] = new Map, T[U("finalized")] = new Map, ee == null || ee({
    ReactiveElement: T
  }), (P.reactiveElementVersions ?? (P.reactiveElementVersions = []))
  .push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const W = globalThis,
  J = W.trustedTypes,
  ge = J ? J.createPolicy("lit-html", {
    createHTML: i => i
  }) : void 0,
  Pe = "$lit$",
  v = `lit$${Math.random().toFixed(9).slice(2)}$`,
  $e = "?" + v,
  Be = `<${$e}>`,
  L = document,
  B = () => L.createComment(""),
  G = i => i === null || typeof i != "object" && typeof i != "function",
  ae = Array.isArray,
  Ge = i => ae(i) || typeof(i == null ? void 0 : i[Symbol.iterator]) == "function",
  te = `[ 	
\f\r]`,
  M = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  pe = /-->/g,
  fe = />/g,
  A = RegExp(`>|${te}(?:([^\\s"'>=/]+)(${te}*=${te}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"),
  me = /'/g,
  ye = /"/g,
  Ae = /^(?:script|style|textarea|title)$/i,
  Fe = i => (e, ...t) => ({
    _$litType$: i,
    strings: e,
    values: t
  }),
  C = Fe(1),
  R = Symbol.for("lit-noChange"),
  _ = Symbol.for("lit-nothing"),
  be = new WeakMap,
  S = L.createTreeWalker(L, 129);

function De(i, e) {
  if (!ae(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return ge !== void 0 ? ge.createHTML(e) : e
}
const He = (i, e) => {
  const t = i.length - 1,
    n = [];
  let o, s = e === 2 ? "<svg>" : e === 3 ? "<math>" : "",
    r = M;
  for (let c = 0; c < t; c++) {
    const a = i[c];
    let l, h, d = -1,
      p = 0;
    for (; p < a.length && (r.lastIndex = p, h = r.exec(a), h !== null);) p = r.lastIndex, r === M ? h[1] === "!--" ? r = pe : h[1] !== void 0 ? r = fe : h[2] !== void 0 ? (Ae.test(h[2]) && (o = RegExp("</" + h[2], "g")), r = A) : h[3] !== void 0 && (r = A) : r === A ? h[0] === ">" ? (r = o ?? M, d = -1) : h[1] === void 0 ? d = -2 : (d = r.lastIndex - h[2].length, l = h[1], r = h[3] === void 0 ? A : h[3] === '"' ? ye : me) : r === ye || r === me ? r = A : r === pe || r === fe ? r = M : (r = A, o = void 0);
    const b = r === A && i[c + 1].startsWith("/>") ? " " : "";
    s += r === M ? a + Be : d >= 0 ? (n.push(l), a.slice(0, d) + Pe + a.slice(d) + v + b) : a + v + (d === -2 ? c : b)
  }
  return [De(i, s + (i[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n]
};
class F {
  constructor({
    strings: e,
    _$litType$: t
  }, n) {
    let o;
    this.parts = [];
    let s = 0,
      r = 0;
    const c = e.length - 1,
      a = this.parts,
      [l, h] = He(e, t);
    if (this.el = F.createElement(l, n), S.currentNode = this.el.content, t === 2 || t === 3) {
      const d = this.el.content.firstChild;
      d.replaceWith(...d.childNodes)
    }
    for (;
      (o = S.nextNode()) !== null && a.length < c;) {
      if (o.nodeType === 1) {
        if (o.hasAttributes())
          for (const d of o.getAttributeNames())
            if (d.endsWith(Pe)) {
              const p = h[r++],
                b = o.getAttribute(d)
                .split(v),
                y = /([.?@])?(.*)/.exec(p);
              a.push({
                type: 1,
                index: s,
                name: y[2],
                strings: b,
                ctor: y[1] === "." ? qe : y[1] === "?" ? je : y[1] === "@" ? Ke : Z
              }), o.removeAttribute(d)
            } else d.startsWith(v) && (a.push({
              type: 6,
              index: s
            }), o.removeAttribute(d));
        if (Ae.test(o.tagName)) {
          const d = o.textContent.split(v),
            p = d.length - 1;
          if (p > 0) {
            o.textContent = J ? J.emptyScript : "";
            for (let b = 0; b < p; b++) o.append(d[b], B()), S.nextNode(), a.push({
              type: 2,
              index: ++s
            });
            o.append(d[p], B())
          }
        }
      } else if (o.nodeType === 8)
        if (o.data === $e) a.push({
          type: 2,
          index: s
        });
        else {
          let d = -1;
          for (;
            (d = o.data.indexOf(v, d + 1)) !== -1;) a.push({
            type: 7,
            index: s
          }), d += v.length - 1
        } s++
    }
  }
  static createElement(e, t) {
    const n = L.createElement("template");
    return n.innerHTML = e, n
  }
}

function O(i, e, t = i, n) {
  var r, c;
  if (e === R) return e;
  let o = n !== void 0 ? (r = t._$Co) == null ? void 0 : r[n] : t._$Cl;
  const s = G(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== s && ((c = o == null ? void 0 : o._$AO) == null || c.call(o, !1), s === void 0 ? o = void 0 : (o = new s(i), o._$AT(i, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = o : t._$Cl = o), o !== void 0 && (e = O(i, o._$AS(i, e.values), o, n)), e
}
class ze {
  constructor(e, t) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t
  }
  get parentNode() {
    return this._$AM.parentNode
  }
  get _$AU() {
    return this._$AM._$AU
  }
  u(e) {
    const {
      el: {
        content: t
      },
      parts: n
    } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? L)
      .importNode(t, !0);
    S.currentNode = o;
    let s = S.nextNode(),
      r = 0,
      c = 0,
      a = n[0];
    for (; a !== void 0;) {
      if (r === a.index) {
        let l;
        a.type === 2 ? l = new H(s, s.nextSibling, this, e) : a.type === 1 ? l = new a.ctor(s, a.name, a.strings, this, e) : a.type === 6 && (l = new Je(s, this, e)), this._$AV.push(l), a = n[++c]
      }
      r !== (a == null ? void 0 : a.index) && (s = S.nextNode(), r++)
    }
    return S.currentNode = L, o
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++
  }
}
class H {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv
  }
  constructor(e, t, n, o) {
    this.type = 2, this._$AH = _, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = t.parentNode), e
  }
  get startNode() {
    return this._$AA
  }
  get endNode() {
    return this._$AB
  }
  _$AI(e, t = this) {
    e = O(this, e, t), G(e) ? e === _ || e == null || e === "" ? (this._$AH !== _ && this._$AR(), this._$AH = _) : e !== this._$AH && e !== R && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Ge(e) ? this.k(e) : this._(e)
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB)
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e))
  }
  _(e) {
    this._$AH !== _ && G(this._$AH) ? this._$AA.nextSibling.data = e : this.T(L.createTextNode(e)), this._$AH = e
  }
  $(e) {
    var s;
    const {
      values: t,
      _$litType$: n
    } = e, o = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = F.createElement(De(n.h, n.h[0]), this.options)), n);
    if (((s = this._$AH) == null ? void 0 : s._$AD) === o) this._$AH.p(t);
    else {
      const r = new ze(o, this),
        c = r.u(this.options);
      r.p(t), this.T(c), this._$AH = r
    }
  }
  _$AC(e) {
    let t = be.get(e.strings);
    return t === void 0 && be.set(e.strings, t = new F(e)), t
  }
  k(e) {
    ae(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, o = 0;
    for (const s of e) o === t.length ? t.push(n = new H(this.O(B()), this.O(B()), this, this.options)) : n = t[o], n._$AI(s), o++;
    o < t.length && (this._$AR(n && n._$AB.nextSibling, o), t.length = o)
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB;) {
      const o = e.nextSibling;
      e.remove(), e = o
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e))
  }
}
class Z {
  get tagName() {
    return this.element.tagName
  }
  get _$AU() {
    return this._$AM._$AU
  }
  constructor(e, t, n, o, s) {
    this.type = 1, this._$AH = _, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = s, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1)
      .fill(new String), this.strings = n) : this._$AH = _
  }
  _$AI(e, t = this, n, o) {
    const s = this.strings;
    let r = !1;
    if (s === void 0) e = O(this, e, t, 0), r = !G(e) || e !== this._$AH && e !== R, r && (this._$AH = e);
    else {
      const c = e;
      let a, l;
      for (e = s[0], a = 0; a < s.length - 1; a++) l = O(this, c[n + a], t, a), l === R && (l = this._$AH[a]), r || (r = !G(l) || l !== this._$AH[a]), l === _ ? e = _ : e !== _ && (e += (l ?? "") + s[a + 1]), this._$AH[a] = l
    }
    r && !o && this.j(e)
  }
  j(e) {
    e === _ ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "")
  }
}
class qe extends Z {
  constructor() {
    super(...arguments), this.type = 3
  }
  j(e) {
    this.element[this.name] = e === _ ? void 0 : e
  }
}
class je extends Z {
  constructor() {
    super(...arguments), this.type = 4
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== _)
  }
}
class Ke extends Z {
  constructor(e, t, n, o, s) {
    super(e, t, n, o, s), this.type = 5
  }
  _$AI(e, t = this) {
    if ((e = O(this, e, t, 0) ?? _) === R) return;
    const n = this._$AH,
      o = e === _ && n !== _ || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive,
      s = e !== _ && (n === _ || o);
    o && this.element.removeEventListener(this.name, this, n), s && this.element.addEventListener(this.name, this, e), this._$AH = e
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e)
  }
}
class Je {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n
  }
  get _$AU() {
    return this._$AM._$AU
  }
  _$AI(e) {
    O(this, e)
  }
}
const ie = W.litHtmlPolyfillSupport;
ie == null || ie(F, H), (W.litHtmlVersions ?? (W.litHtmlVersions = []))
  .push("3.3.1");
const Qe = (i, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = n._$litPart$;
  if (o === void 0) {
    const s = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = o = new H(e.insertBefore(B(), s), s, void 0, t ?? {})
  }
  return o._$AI(i), o
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const E = globalThis;
class V extends T {
  constructor() {
    super(...arguments), this.renderOptions = {
      host: this
    }, this._$Do = void 0
  }
  createRenderRoot() {
    var t;
    const e = super.createRenderRoot();
    return (t = this.renderOptions)
      .renderBefore ?? (t.renderBefore = e.firstChild), e
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Qe(t, this.renderRoot, this.renderOptions)
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) == null || e.setConnected(!0)
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) == null || e.setConnected(!1)
  }
  render() {
    return R
  }
}
var Ce;
V._$litElement$ = !0, V.finalized = !0, (Ce = E.litElementHydrateSupport) == null || Ce.call(E, {
  LitElement: V
});
const oe = E.litElementPolyfillSupport;
oe == null || oe({
  LitElement: V
});
(E.litElementVersions ?? (E.litElementVersions = []))
.push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ze = i => (e, t) => {
  t !== void 0 ? t.addInitializer((() => {
    customElements.define(i, e)
  })) : customElements.define(i, e)
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ye = {
    attribute: !0,
    type: String,
    converter: K,
    reflect: !1,
    hasChanged: re
  },
  Xe = (i = Ye, e, t) => {
    const {
      kind: n,
      metadata: o
    } = t;
    let s = globalThis.litPropertyMetadata.get(o);
    if (s === void 0 && globalThis.litPropertyMetadata.set(o, s = new Map), n === "setter" && ((i = Object.create(i))
        .wrapped = !0), s.set(t.name, i), n === "accessor") {
      const {
        name: r
      } = t;
      return {
        set(c) {
          const a = e.get.call(this);
          e.set.call(this, c), this.requestUpdate(r, a, i)
        },
        init(c) {
          return c !== void 0 && this.C(r, void 0, i, c), c
        }
      }
    }
    if (n === "setter") {
      const {
        name: r
      } = t;
      return function(c) {
        const a = this[r];
        e.call(this, c), this.requestUpdate(r, a, i)
      }
    }
    throw Error("Unsupported decorator location: " + n)
  };

function k(i) {
  return (e, t) => typeof t == "object" ? Xe(i, e, t) : ((n, o, s) => {
    const r = o.hasOwnProperty(s);
    return o.constructor.createProperty(s, n), r ? Object.getOwnPropertyDescriptor(o, s) : void 0
  })(i, e, t)
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Y(i) {
  return k({
    ...i,
    state: !0,
    attribute: !1
  })
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ne = (i, e, t) => (t.configurable = !0, t.enumerable = !0, Reflect.decorate && typeof e != "object" && Object.defineProperty(i, e, t), t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function et(i, e) {
  return (t, n, o) => {
    const s = r => {
      var c;
      return ((c = r.renderRoot) == null ? void 0 : c.querySelector(i)) ?? null
    };
    return Ne(t, n, {
      get() {
        return s(this)
      }
    })
  }
}
var D = (i => (i.PDP_Pageload = "PDP_Pageload", i.PDP_Click = "PDP_Click", i.PLP_Product_Click = "PLP_Product_Click", i.PDP_Social_Click = "PDP_Social_Click", i.PDP_Image_Click = "PDP_Image_Click", i.PDP_Section_EnterViewport = "PDP_Section_EnterViewport", i.PDP_Recommendation_Load = "PDP_Recommendation_Load", i.PDP_Recommendation_EnterViewport = "PDP_Recommendation_EnterViewport", i.PDP_Recommendation_Click = "PDP_Recommendation_Click", i.PDP_Rating_Click = "PDP_Rating_Click", i.PDP_Information_Load = "PDP_Information_Load", i.PDP_A_Goods_Link_Click = "PDP_A_Goods_Link_Click", i.PDP_B_Goods_Link_Click = "PDP_B_Goods_Link_Click", i.PDP_Downloads_Link_Click = "PDP_Downloads_Link_Click", i.PDP_Downloads_Section_Click = "PDP_Downloads_Section_Click", i.PDP_Install_Calc_Link_Click = "PDP_Install_Calc_Link_Click", i.General_Pageload = "General_Pageload", i.General_Recommendation_Load = "General_Recommendation_Load", i.General_RecommendationProduct_EnterViewport = "General_RecommendationProduct_EnterViewport", i.General_Product_Click = "General_Product_Click", i.General_Section_EnterViewport = "General_Section_EnterViewport", i.General_Teaser_Click = "General_Teaser_Click", i.General_Link_Click = "General_Link_Click", i.PLP_Pageload = "PLP_Pageload", i.PLP_FilterSelect_Click = "PLP_FilterSelect_Click", i.PLP_FilterSelect_Intent = "PLP_FilterSelect_Intent", i.PLP_FilterDeselect_Click = "PLP_FilterDeselect_Click", i.PLP_ProductImageSlider_Click = "PLP_ProductImageSlider_Click", i.PLP_Show_More_Click = "PLP_Show_More_Click", i.PLP_Information_Load = "PLP_Information_Load", i.General_SearchTermConfirm_Click = "General_SearchTermConfirm_Click", i.Cart_Pageload = "Cart_Pageload", i.Cart_Pageload_Split = "Cart_Pageload_Split", i.Cart_Button_Click = "Cart_Button_Click", i.Cart_Success_Pageload = "Cart_Success_Pageload", i.Banner_Promotion_Load = "Banner_Promotion_Load", i.General_Product_View = "General_Product_View", i.General_Product_Load = "General_Product_Load", i.General_Promotion_View = "General_Promotion_View", i.General_Promotion_View_Split = "General_Promotion_View_Split", i.General_Promotion_Load = "General_Promotion_Load", i.General_Promotion_Click = "General_Promotion_Click", i.General_Promotion_Qualified = "General_Promotion_Qualified", i.General_Promotion_Shown = "General_Promotion_Shown", i.General_Navigation_Click = "General_Navigation_Click", i.Wishlist_Pageload = "Wishlist_Pageload", i.Wishlist_Button_Click = "Wishlist_Button_Click", i.StoreSearch_Pageload = "StoreSearch_Pageload", i.StoreSearch_Click = "StoreSearch_Click", i.StoreSearchDP_Pageload = "StoreSearchDP_Pageload", i.StoreSearchDP_Click = "StoreSearchDP_Click", i.MyAccount_Pageload = "MyAccount_Pageload", i.MyAccount_Click = "MyAccount_Click", i.Flyer_Click = "Flyer_Click", i.Flyer_View = "Flyer_View", i.Flyer_ChangeViewport = "Flyer_ChangeViewport", i.Flyer_Categories_Select = "Flyer_Categories_Select", i.Kameleoon_Experiment = "Kameleoon_Experiment", i.Order_Cancellation_Click = "Order_Cancellation_Click", i.Order_ViewDetails_Click = "Order_ViewDetails_Click", i.Order_Invoice_Download_Click = "Order_Invoice_Download_Click", i.Order_Return_Click = "Order_Return_Click", i.Order_Cancellation_Confirmation = "Order_Cancellation_Confirmation", i.Order_Return_Confirmation = "Order_Return_Confirmation", i.Start_Login_Click = "Start_Login_Click", i.Login_Button_Click = "Login_Button_Click", i.Login_Success = "Login_Success", i.Login_Link_Click = "Login_Link_Click", i.Forgotten_Password_Click = "Forgotten_Password_Click", i.Password_Reset = "Password_Reset", i.Register_Link_Click = "Register_Link_Click", i.Registration_Success = "Registration_Success", i.Error_Message = "Error_Message", i.Newsletter_Form_Submit = "Newsletter_Form_Submit", i.Newsletter_Form_Success = "Newsletter_Form_Success", i.Flyer_View_50 = "Flyer_View_50", i.Flyer_View_75 = "Flyer_View_75", i.Flyer_View_100 = "Flyer_View_100", i.User_Consent_Update = "User_Consent_Update", i.Review_Product_Start = "Review_Product_Start", i.Review_Product_Click = "Review_Product_Click", i.Review_Product_Submit = "Review_Product_Submit", i.Review_Product_Error = "Review_Product_Error", i.Review_Product_Success = "Review_Product_Success", i.Return_Chatbot_WindowOpen_Click = "Return_Chatbot_WindowOpen_Click", i.Return_Chatbot_WindowClosed_Click = "Return_Chatbot_WindowClosed_Click", i.Session_Start = "Session_Start", i.First_Visit = "First_Visit", i.Add_Product_To_Wishlist_In_Flyer = "Add_Product_To_Wishlist_In_Flyer", i.ProductView_In_Flyer = "ProductView_In_Flyer", i.Retail_StartPage_Visit = "Retail_StartPage_Visit", i.View_Store_Article = "View_Store_Article", i.WT_Visit = "WT_Visit", i.Switch_Login_Type = "Switch_Login_Type", i.Confirm_Token = "Confirm_Token", i.Request_New_Token = "Request_New_Token", i.Confirm_Mobile_Number = "Confirm_Mobile_Number", i.Password_Reset_Success = "Password_Reset_Success", i.Contact_Customer_Service = "Contact_Customer_Service", i.Login_Accept_Terms = "Login_Accept_Terms", i.Register_Continue_Click = "Register_Continue_Click", i.Register_Change_Phone = "Register_Change_Phone", i.Video_Start = "Video_Start", i.Video_Progress = "Video_Progress", i.Video_Complete = "Video_Complete", i.General_Scroll_Action = "General_Scroll_Action", i.Promotion_Information_Click = "Promotion_Information_Click", i))(D || {});

function $(i) {
  let e = "";
  if (document.cookie && document.cookie !== "") {
    const t = document.cookie.split(";");
    for (let n = 0; n < t.length; n += 1) {
      const o = t[n].replace(/^\s+/, "")
        .replace(/\s+$/, "");
      if (o.substring(0, i.length + 1) === `${i}=`) {
        try {
          e = decodeURIComponent(o.substring(i.length + 1)
            .replace(/\+/g, " "))
        } catch (s) {
          console.log("decode err", s)
        }
        break
      }
    }
  }
  return e
}

function u(i, e = !1, t = "log") {
  if (e || $("dataLayerService")) switch (t) {
    case "warn":
      console.warn(i);
      break;
    case "error":
      console.error(i);
      break;
    default:
      console.log(i)
  }
}

function tt(i) {
  const e = $("adSessionId");
  if (e) return e;
  const t = i(),
    n = "; max-age=" + 1440 * 60 * 30;
  return document.cookie = "adSessionId=" + t + n + "; secure; path=/", t
}
const it = "mobile_flow";

function we(i) {
  const e = $("tracking-info") || "{}";
  try {
    const t = window.atob(e),
      n = JSON.parse(t);
    return n == null ? void 0 : n[i]
  } catch {
    return ""
  }
}

function ot(i) {
  const e = new TextEncoder()
    .encode(i);
  return crypto.subtle.digest("SHA-256", e)
    .then(t => Array.from(new Uint8Array(t))
      .map(s => s.toString(16)
        .padStart(2, "0"))
      .join(""))
}
const q = {
    statistics: "C0003",
    preferences: "C0002",
    marketing: "C0004",
    necessary: "C0001"
  },
  ce = class ce {
    static parseOneTrustCookie() {
      const e = "OptanonConsent";
      try {
        const t = $(e);
        return t ? decodeURIComponent(t)
          .split("&")
          .reduce((o, s) => {
            const [r, c] = s.split("=");
            return o[r] = c, o
          }, {}) : null
      } catch {
        return null
      }
    }
    static getOneTrustConsentCookie() {
      const e = this.parseOneTrustCookie();
      if (!e) return null;
      const {
        groups: t
      } = e;
      return t ? {
        marketing: t.includes(`${q.marketing}:1`),
        statistics: t.includes(`${q.statistics}:1`),
        preferences: t.includes(`${q.preferences}:1`),
        necessary: t.includes(`${q.necessary}:1`)
      } : null
    }
    static extractOneTrustConsentData() {
      const e = this.parseOneTrustCookie();
      if (!e) return null;
      const {
        groups: t,
        consentId: n
      } = e;
      return !t || !n ? null : {
        consentId: n,
        groups: t
      }
    }
    static getLidlConsentCookie() {
      var t;
      const e = $("LidlConsent") || $("lidl-consent");
      if (!e) return null;
      try {
        const n = (t = e.split("&")
          .find(o => o.startsWith("groups="))) == null ? void 0 : t.split("=")[1];
        return n ? {
          marketing: n.includes("C0004:1"),
          statistics: n.includes("C0003:1"),
          preferences: n.includes("C0002:1"),
          necessary: !0
        } : null
      } catch {
        return null
      }
    }
    static initializeConsentListener() {
      this.getConsentCookie() && this.notifyConsentListeners();
      const t = () => {
        window.OneTrust.OnConsentChanged(() => {
          this.notifyConsentListeners()
        })
      };
      if (typeof window.OneTrust < "u" && window.OneTrust.OnConsentChanged) t();
      else {
        const n = setInterval(() => {
          typeof window.OneTrust < "u" && window.OneTrust.OnConsentChanged && (clearInterval(n), t())
        }, 1e3);
        setTimeout(() => {
          clearInterval(n), typeof window.OneTrust > "u" && console.warn("OneTrust not loaded after timeout. Consent changes may not be tracked.")
        }, 3e4)
      }
    }
    static getConsentCookie() {
      const e = this.getLidlConsentCookie();
      return e || this.getOneTrustConsentCookie() || {
        marketing: !1,
        statistics: !1,
        preferences: !1
      }
    }
    static onConsentChanged(e) {
      this.consentListeners.push(e), e(this.getConsentCookie())
    }
    static notifyConsentListeners() {
      const e = this.getConsentCookie();
      this.consentListeners.forEach(t => t(e))
    }
    static async getNecessaryUUID4CookieIfNotPresent(e) {
      const t = window.location.hostname,
        n = t.includes("lidl.es"),
        o = t.includes("lidl.com");
      let s = "";
      n || o ? s = e ? `/t/gtm/uuid4-cookie?puuidv=${encodeURIComponent(e)}` : "/t/gtm/uuid4-cookie" : s = e ? `/t/p/uuid4-cookie?puuidv=${encodeURIComponent(e)}` : "/t/p/uuid4-cookie", await fetch(s)
    }
  };
ce.consentListeners = [];
let Q = ce;
Q.initializeConsentListener();
const nt = ".ad-tooltip--theme{font-size:12/16rem;font-weight:400;border-radius:2/16rem;padding:16/16rem;color:#4e5761;text-align:left;background-color:#fafafa;border:1px solid #E3E4E5}@media (min-width: 1280px){.ad-tooltip--theme{font-size:14/16rem}}:host{display:block;font-family:LidlFontCondPro,Trebuchet MS,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:16/16rem;line-height:1.4;color:#353b42;border-radius:2/16rem}:host a{display:flex;text-decoration:none;color:unset}:host .banner{position:relative;width:100%;max-height:300px;cursor:pointer;overflow:hidden;box-shadow:0 2px 4px #00000026;border-radius:2/16rem;background-size:cover;background-position:center;background-repeat:no-repeat}:host .banner__viewHomeApiDesktop{position:relative;background-position:center;background-repeat:no-repeat;height:300px;background-size:cover;max-width:1400px}:host .banner__viewHomeApiMobile{position:relative;background-position:center}@media (min-width: 360px) and (max-width: 749px){:host .banner__viewHomeApiMobile{aspect-ratio:3 / 2;background-size:cover;max-height:900px;max-width:1350px}}:host .banner__viewSearchResultApiDesktop,:host .banner__viewCategoryApiDesktop{position:relative;max-width:1400px;height:200px;background-position:center;background-size:cover}@media (min-width: 1400px){:host .banner__viewSearchResultApiDesktop,:host .banner__viewCategoryApiDesktop{max-width:1400px}}:host .banner__viewSearchResultApiMobile,:host .banner__viewCategoryApiMobile{position:relative}@media (min-width: 360px) and (max-width: 749px){:host .banner__viewSearchResultApiMobile,:host .banner__viewCategoryApiMobile{aspect-ratio:2.36;max-height:570px;max-width:1350px;background-size:cover;background-position:center}}:host .banner-new{border-radius:1rem;background-color:#fff;box-shadow:0 2px 4px #00000026}:host .banner-new__wrapper{position:relative}:host .banner-new__img{width:100%;height:100%;border-style:none;box-shadow:0 2px 4px #00000026}:host .banner-new__label{padding:.5rem;border-radius:0 0 1rem 1rem}:host .banner-new__headline{word-wrap:break-word;overflow:hidden;line-height:120%;display:-webkit-box;min-height:3rem}:host .banner-old{display:block;position:relative;background-color:#fff;overflow:hidden}:host .banner-old__img{width:100%;height:100%;border-style:none}:host .banner-old__label{position:absolute;bottom:0;left:0;width:100%;background-color:#ffffffb3;padding:.5rem 1rem;color:#353b42}:host .banner-old__headline{word-wrap:break-word;overflow:hidden;max-height:3rem;line-height:1.4rem;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}:host .ads-tag{display:flex;position:absolute;bottom:0;right:0;padding:4px;background-color:#fff}:host .ads-tag__img{width:100%;height:100%;border-style:none}:host .ads-tag__icon{margin-left:4px;margin-top:3px;width:12px;height:12px;mask-image:url(/cdn/assets/icons/1.0.0/information-circle.svg);-webkit-mask-image:url(/cdn/assets/icons/1.0.0/information-circle.svg);background-color:#4e5761}:host .ads-tag__text{font-size:.75rem;font-weight:400}@media (min-width: 1280px){:host .ads-tag__text{font-size:.875rem}}:host .rounded-corners{border-radius:1rem 1rem 0 0}:host .ad-tooltip{background:none;border:none;padding:0;margin:0;cursor:pointer;color:inherit;display:inline-flex}:host .skeleton{width:100%;max-width:320px;height:150px;position:relative;margin:1rem auto;display:flex;vertical-align:middle;cursor:progress;background-color:#e3e4e6;background-image:linear-gradient(90deg,transparent 25%,#fff 50%,transparent 75%);background-size:200% 200%;animation:skeleton-shimmer 2s linear infinite}@keyframes skeleton-shimmer{0%{background-position-x:200%}50%{background-position-x:100%}to{background-position-x:0}}@media (min-width: 600px){:host .skeleton{height:250px}}",
  g = [];
for (let i = 0; i < 256; ++i) g.push((i + 256)
  .toString(16)
  .slice(1));

function st(i, e = 0) {
  return (g[i[e + 0]] + g[i[e + 1]] + g[i[e + 2]] + g[i[e + 3]] + "-" + g[i[e + 4]] + g[i[e + 5]] + "-" + g[i[e + 6]] + g[i[e + 7]] + "-" + g[i[e + 8]] + g[i[e + 9]] + "-" + g[i[e + 10]] + g[i[e + 11]] + g[i[e + 12]] + g[i[e + 13]] + g[i[e + 14]] + g[i[e + 15]])
    .toLowerCase()
}
let ne;
const rt = new Uint8Array(16);

function at() {
  if (!ne) {
    if (typeof crypto > "u" || !crypto.getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    ne = crypto.getRandomValues.bind(crypto)
  }
  return ne(rt)
}
const ct = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  ke = {
    randomUUID: ct
  };

function lt(i, e, t) {
  var o;
  if (ke.randomUUID && !i) return ke.randomUUID();
  i = i || {};
  const n = i.random ?? ((o = i.rng) == null ? void 0 : o.call(i)) ?? at();
  if (n.length < 16) throw new Error("Random bytes length must be >= 16");
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, st(n)
}

function x(i = void 0, e) {
  return function(t, n, o) {
    const s = o.value,
      r = `${t.constructor.name}.${n}`;
    return o.value = function(...c) {
      try {
        const a = s.apply(this, c);
        return a && typeof a.then == "function" ? a.catch(l => (console.log(`[DataLayerService] Error in ${r}: `, l), i)) : a
      } catch (a) {
        return console.log(`[DataLayerService] Error in ${r}: `, a), i
      }
    }, o
  }
}
var dt = Object.defineProperty,
  ht = Object.getOwnPropertyDescriptor,
  I = (i, e, t, n) => {
    for (var o = ht(e, t), s = i.length - 1, r; s >= 0; s--)(r = i[s]) && (o = r(e, t, o) || o);
    return o && dt(e, t, o), o
  };
class w {
  static getItem(e) {
    return localStorage.getItem(e)
  }
  static setItem(e, t) {
    localStorage.setItem(e, t)
  }
  static removeItem(e) {
    localStorage.removeItem(e)
  }
  static getCookieValue(e) {
    var o;
    const n = `; ${document.cookie}`.split(`; ${e}=`);
    return n.length === 2 && ((o = n.pop()) == null ? void 0 : o.split(";")
      .shift()) || null
  }
  static getJSONParsedCookieValue(e) {
    try {
      const t = this.getCookieValue(e);
      return t ? this.parseJSON(t) : null
    } catch {
      return null
    }
  }
  static setCookie(e, t, n = "") {
    document.cookie = `${e}=${t}; ${n}`
  }
  static deleteCookie(e) {
    document.cookie = `${e}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
  }
  static parseJSON(e) {
    return e ? JSON.parse(e) : null
  }
}
I([x(null)], w, "getItem");
I([x()], w, "setItem");
I([x()], w, "removeItem");
I([x(null)], w, "getCookieValue");
I([x()], w, "setCookie");
I([x()], w, "deleteCookie");
I([x(null)], w, "parseJSON");
class ut {
  constructor(e) {
    this.registration = null, this.isReady = !1, this.config = e
  }
  async initialize() {
    var e, t, n, o;
    if (u(["ServiceWorker initialize() called"]), !("serviceWorker" in navigator)) return u(["Service Worker not supported"]), !1;
    try {
      return this.registration = await this.getOrRegisterServiceWorker(), u(["ServiceWorker initialize debug:"]), u(["- registration:", this.registration ? "Found" : "Not found"]), u(["- registration.active:", (e = this.registration) != null && e.active ? "Yes" : "No"]), u(["- registration state:", (n = (t = this.registration) == null ? void 0 : t.active) == null ? void 0 : n.state]), this.setupEventListeners(), (o = this.registration) != null && o.active ? (this.isReady = !0, u(["Service Worker already active and ready - isReady set to true"]), !0) : (u(["Service Worker not immediately active, waiting for ready..."]), await this.waitForReady(), this.isReady)
    } catch (s) {
      return u(["Service Worker initialization failed:", s]), !1
    }
  }
  async getOrRegisterServiceWorker() {
    const e = await navigator.serviceWorker.getRegistration(this.config.scope);
    return e ? (u(["Using existing Service Worker registration"]), e) : (u(["Registering new Service Worker"]), navigator.serviceWorker.register(this.config.url, {
      scope: this.config.scope
    }))
  }
  async waitForReady() {
    const e = navigator.serviceWorker.ready,
      t = new Promise((n, o) => setTimeout(() => o(new Error("Service Worker ready timeout")), this.config.readyTimeout));
    try {
      (await Promise.race([e, t]))
      .active && (this.isReady = !0, u(["Service Worker is ready"]))
    } catch {
      u(["Service Worker ready timeout, using fallback"])
    }
  }
  setupEventListeners() {
    this.registration && (this.registration.installing && this.registration.installing.addEventListener("statechange", () => {
      var e, t;
      u(["ServiceWorker installing state changed to:", (t = (e = this.registration) == null ? void 0 : e.installing) == null ? void 0 : t.state]), this.checkAndUpdateReadyState()
    }), this.registration.waiting && this.registration.waiting.addEventListener("statechange", () => {
      var e, t;
      u(["ServiceWorker waiting state changed to:", (t = (e = this.registration) == null ? void 0 : e.waiting) == null ? void 0 : t.state]), this.checkAndUpdateReadyState()
    }), this.registration.active && this.registration.active.addEventListener("statechange", () => {
      var e, t;
      u(["ServiceWorker active state changed to:", (t = (e = this.registration) == null ? void 0 : e.active) == null ? void 0 : t.state]), this.checkAndUpdateReadyState()
    })), navigator.serviceWorker.addEventListener("controllerchange", () => {
      u(["Service Worker controller changed"]), this.checkAndUpdateReadyState()
    })
  }
  checkAndUpdateReadyState() {
    var t;
    const e = this.isReady;
    (t = this.registration) != null && t.active && (this.isReady = !0, e || u(["ServiceWorker became ready - isReady set to true"]))
  }
  postMessage(e) {
    var n;
    const t = (n = this.registration) == null ? void 0 : n.active;
    if (!this.isReady) return u(["ServiceWorker not ready, cannot post message"]), !1;
    if (!t) return u(["No ServiceWorker target available - registration.active is null"]), !1;
    try {
      return t.postMessage(e), !0
    } catch (o) {
      return u(["Service Worker messaging failed:", o]), !1
    }
  }
  get ready() {
    return this.isReady
  }
}
var _t = Object.defineProperty,
  gt = Object.getOwnPropertyDescriptor,
  m = (i, e, t, n) => {
    for (var o = n > 1 ? void 0 : n ? gt(e, t) : e, s = i.length - 1, r; s >= 0; s--)(r = i[s]) && (o = (n ? r(e, t, o) : r(o)) || o);
    return n && o && _t(e, t, o), o
  };
const Se = new CSSStyleSheet;
Se.replaceSync(nt);
const pt = "3014",
  ft = {
    Home: {
      Desktop: {
        placementKey: "viewHomeApiDesktop-banner",
        pageId: "viewHomeApiDesktop",
        eventType: "viewHome"
      },
      Mobile: {
        placementKey: "viewHomeApiMobile-banner",
        pageId: "viewHomeApiMobile",
        eventType: "viewHome"
      }
    },
    Search: {
      Desktop: {
        placementKey: "viewSearchResultApiDesktop-inGridDP",
        pageId: "viewSearchResultApiDesktop",
        eventType: "viewSearchResult"
      },
      Mobile: {
        placementKey: "viewSearchResultApiMobile-inGridDP",
        pageId: "viewSearchResultApiMobile",
        eventType: "viewSearchResult"
      }
    },
    Category: {
      Desktop: {
        placementKey: "viewCategoryApiDesktop-inGridDP",
        pageId: "viewCategoryApiDesktop",
        eventType: "viewCategory"
      },
      Mobile: {
        placementKey: "viewCategoryApiMobile-inGridDP",
        pageId: "viewCategoryApiMobile",
        eventType: "viewCategory"
      },
      Android: {
        placementKey: "viewCategoryApiAa-inGridDP",
        pageId: "viewCategoryApiAa",
        eventType: "viewCategory"
      },
      iOS: {
        placementKey: "viewCategoryApiAios-inGridDP",
        pageId: "viewCategoryApiAios",
        eventType: "viewCategory"
      }
    }
  };
let f = class extends V {
  constructor() {
    super(...arguments), this.tagText = "Ads", this.showTag = !0, this.title = "", this.showLoading = !1, this.debug = !0, this.demo = !1, this.baseUrl = "", this.adsData = null, this.requestData = null, this._criteoExtractedData = null, this._showBanner = !1, this._showSkeleton = !1, this._consent = null, this._debugCookie = !1, this._debugInstanceId = this.generateSecureRandomNumber(0, 1e3), this._requestInProgress = !1, this._serviceWorkerManager = null
  }
  static get styles() {
    return [Se]
  }
  async initializeServiceWorker() {
    this._serviceWorkerManager = new ut({
      url: "/t/cdn/track-sw.js",
      scope: "/t/cdn/",
      readyTimeout: 5e3
    }), await this._serviceWorkerManager.initialize()
  }
  isServiceWorkerReady() {
    var i;
    return ((i = this._serviceWorkerManager) == null ? void 0 : i.ready) ?? !1
  }
  sendCriteoViaSW(i, e, t = "GET") {
    return this._serviceWorkerManager ? this._serviceWorkerManager.postMessage({
      type: "CRITEO_BEACON",
      payload: {
        url: i,
        data: e,
        method: t
      }
    }) : !1
  }
  consoleDebugLog(i, e) {
    if (!this._debugCookie) return;
    let t;
    try {
      t = typeof e == "object" ? JSON.stringify(e) : e, t === "{}" && (t = e)
    } catch {
      t = e
    }
    console.log(this._debugInstanceId + ": ", i + " - ", t)
  }
  isFeatureEnabled() {
    return this.baseUrl ? !0 : window.location.hostname === "qa.lidl.de"
  }
  isMobileWebview() {
    const i = $(it),
      e = w.getCookieValue("track_device_id");
    return i === "true" || e !== null
  }
  adsTagTemplate() {
    return C`
      <div class="ads-tag">
        <div id="tooltip" class="ad-tooltip">
          <div class="ads-tag__text">${this.tagText}</div>
          <div class="ads-tag__icon"></div>
        </div>
      </div>
    `
  }
  adsImageTemplate() {
    if (!this._criteoExtractedData || !this._criteoExtractedData.rendering) return C``;
    const i = this._criteoExtractedData.rendering,
      t = window.innerWidth < 750,
      n = t ? i.mobile_background_image : i.desktop_background_image,
      o = t ? i.mobile_background_image_alt_text : i.desktop_background_image_alt_text,
      s = this.isMobileWebview() ? i.redirect_url_app : i.redirect_url || "",
      c = `background-image: url('${n!=null&&n.startsWith("//")?`https:${n}`:n}');`,
      a = this.getPageType()
      .pageId;
    return C`
      <a .href="${s}" target="_self" @click=${this._onClickImpression}
        class="banner banner__${a}"
        style="${c}"
        role="img"
        aria-label="${o||"Banner Ad"}">
       ${this.showTag?this.adsTagTemplate():""}
      </a>
    `
  }
  async connectedCallback() {
    if (super.connectedCallback(), !this.isFeatureEnabled()) {
      this.consoleDebugLog("Feature disabled - not on qa.lidl.de");
      return
    }
    this._debugCookie = $("bannerAdsDebugConsoleLog"), this.consoleDebugLog("DebugCookie", this._debugCookie), await this.initializeServiceWorker(), this.consoleDebugLog("ServiceWorker initialized", this.isServiceWorkerReady()), this._showSkeleton = this.showLoading, this._showSkeleton && this.consoleDebugLog("Init show Skeleton", this._showSkeleton), Q.onConsentChanged(this.handleConsentChange.bind(this))
  }
  disconnectedCallback() {
    this.consoleDebugLog("disconnectedCallback"), super.disconnectedCallback()
  }
  async updated(i) {
    this.consoleDebugLog("updated called", i)
  }
  render() {
    return this.isFeatureEnabled() ? (this.consoleDebugLog("render", {
      showBanner: this._showBanner,
      showSkeleton: this._showSkeleton
    }), C`
      ${this._showBanner?C`
          ${this._adsData?this.adsImageTemplate():""}
        `:C`${this._showSkeleton?C`
          <div class="skeleton"></div>`:""}`}
    `) : C``
  }
  getPageType() {
    const i = window.location.pathname,
      e = window.location.search,
      t = window.innerWidth < 750,
      n = this.getDeviceType(t),
      o = new URLSearchParams;
    let s = "Home";
    if (i === "/" || i === "") s = "Home";
    else if (i.startsWith("/q/search")) {
      s = "Search";
      const a = new URLSearchParams(e)
        .get("q") || "";
      a && o.append("keywords", a)
    } else if (i.startsWith("/h/") && (s = "Category", this.requestData)) try {
      const c = JSON.parse(this.requestData);
      if (c.categoryNode && Array.isArray(c.categoryNode)) {
        const a = c.categoryNode.join(">");
        o.append("category", a)
      }
    } catch (c) {
      this.consoleDebugLog("Failed to parse requestData:", c)
    }
    const r = ft[s][n];
    return {
      eventType: r.eventType,
      pageId: r.pageId,
      placementKey: r.placementKey,
      params: o
    }
  }
  extractCriteoRenderingData(i, e) {
    const t = {
      rendering: null,
      beacons: {
        onLoad: null,
        onView: null,
        onClick: null,
        onFileClick: null,
        onBundleBasketChange: null
      }
    };
    if (!i || !i.placements || i.placements.length === 0) return this.consoleDebugLog("extractCriteoRenderingData: No placements found"), t;
    let n = null;
    for (const o of i.placements)
      if (o[e]) {
        n = o[e];
        break
      } if (!n) return this.consoleDebugLog("extractCriteoRenderingData: No placement found for key", e), t;
    if (Array.isArray(n) && n.length > 0) {
      const o = n[0];
      o.rendering && typeof o.rendering == "object" && (t.rendering = o.rendering), o.OnLoadBeacon && (t.beacons.onLoad = o.OnLoadBeacon), o.OnViewBeacon && (t.beacons.onView = o.OnViewBeacon), o.OnClickBeacon && (t.beacons.onClick = o.OnClickBeacon), o.OnFileClickBeacon && (t.beacons.onFileClick = o.OnFileClickBeacon), o.OnBundleBasketChangeBeacon && (t.beacons.onBundleBasketChange = o.OnBundleBasketChangeBeacon)
    }
    return t
  }
  handleConsentChange(i) {
    this._consent = i, this.demo && (this._consent = {
      marketing: !0,
      statistics: !0,
      preferences: !0
    }), this.consoleDebugLog("CookieBot consent changed", this._consent), this._consent && this._consent.marketing ? this._getAd() : (this._showSkeleton = !1, this._showBanner = !1)
  }
  async fetchWithTimeout(i, e = {}, t = 5e3) {
    let n = {
        ...e
      },
      o = null;
    if (typeof window.AbortController == "function") {
      this.consoleDebugLog("fetchWithTimeout AbortController support", !0);
      const s = new AbortController;
      n = {
        ...e,
        signal: s.signal
      };
      const r = Date.now();
      this.consoleDebugLog("fetchWithTimeout startTime", r);
      const c = () => {
        const a = Date.now();
        if (a - r >= t) this.consoleDebugLog("fetchWithTimeout abortFunc aborting", {
          currTime: a,
          startTime: r,
          "currTime - startTime": a - r,
          time: t,
          timeoutId: o
        }), s.abort(), o && clearTimeout(o);
        else {
          let l = t - (a - r);
          l < 0 && (l = 0), this.consoleDebugLog("fetchWithTimeout abortFunc startTimer", {
            currTime: a,
            startTime: r,
            "currTime - startTime": a - r,
            time: t,
            timeoutId: o,
            remainingTime: l
          }), o = setTimeout(c, l)
        }
      };
      c()
    }
    return fetch(i, n)
      .then(s => {
        if (this.consoleDebugLog("fetchWithTimeout response ok", s.ok), o && clearTimeout(o), !s.ok) throw new Error(`${s.status}: ${s.statusText}`);
        return s
      })
      .catch(s => {
        throw this.consoleDebugLog("fetchWithTimeout response error", s), o && clearTimeout(o), this._showSkeleton = !1, s.name === "AbortError" ? new Error("Response timed out") : new Error(s.message)
      })
  }
  getDeviceIdCookieProp(i) {
    const e = w.getCookieValue("track_device_id") || "",
      t = decodeURIComponent(e);
    if (t.length === 0) return;
    const n = t.split(";");
    for (const o of n) {
      const [s, r] = o.split("=");
      if (s.trim() === i) return r
    }
  }
  getDeviceType(i) {
    let e;
    switch (this.getDeviceIdCookieProp("SALES_CHANNEL")) {
      case "06":
        e = "Android";
        break;
      case "07":
        e = "iOS";
        break;
      default:
        e = i ? "Mobile" : "Desktop";
        break
    }
    return e
  }
  async _getAd() {
    try {
      if (!this.isFeatureEnabled()) return this.consoleDebugLog("_getAd exit - feature disabled"), null;
      if (this._requestInProgress) return this.consoleDebugLog("_getAd requestInProgress"), null;
      if (this._requestInProgress = !0, this.consoleDebugLog("_getAd init"), this.consoleDebugLog("CookieBot consent", this._consent), !this._consent || this._consent && !this._consent.marketing) return this.consoleDebugLog("_getAd exit", {
        consent: this._consent
      }), this._showSkeleton = !1, this._requestInProgress = !1, null;
      const i = this.getPageType(),
        e = we("ssoId"),
        t = this.getDeviceIdCookieProp("DEVICE_ID") || "",
        n = this.isMobileWebview() ? t : w.getCookieValue("LidlID"),
        o = we("email"),
        s = await ot(o),
        r = new URLSearchParams({
          "criteo-partner-id": pt,
          "page-id": i.pageId,
          "event-type": i.eventType,
          "retailer-visitor-id": n || "",
          "customer-id": e,
          email: s
        });
      i.params.forEach((h, d) => {
        r.append(d, h)
      });
      const a = `${this.demo&&this.baseUrl?`${this.baseUrl}/t/cri/delivery/retailmedia`:"/t/cri/delivery/retailmedia"}?${r.toString()}`;
      this.consoleDebugLog("_getAd Criteo URL", a), this._showBanner = !1;
      const l = await this.fetchWithTimeout(a, {
        method: "GET"
      }, 5e3);
      if (this._showSkeleton = !1, this._requestInProgress = !1, l.ok && l.status === 200) {
        if (this.consoleDebugLog("_getAd resp.ok"), this._adsData = await l.json(), this.consoleDebugLog("_getAd CriteoData", this._adsData), !this._adsData || !this._adsData.placements || this._adsData.placements.length === 0) return this.consoleDebugLog("_getAd no placements in response"), null;
        const h = this.extractCriteoRenderingData(this._adsData, i.placementKey);
        return this.consoleDebugLog("_getAd Extracted Criteo Data", h), this._criteoExtractedData = h, this._showBanner = !0, setTimeout(() => {
          if (this.consoleDebugLog("_getAd SendBannerImpression"), this.requestUpdate(), this._bannerAdsImpression(), this.consoleDebugLog("_getAd Register Intersection observer host ", this.hostElement), !("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype)) {
            this._bannerAdsView();
            return
          }
          let p = 0,
            b = !1,
            y;
          const X = new IntersectionObserver(Ee => {
            Ee.forEach(z => {
              const le = Math.round(z.intersectionRatio * 100),
                N = Math.round(z.time);
              if (this.consoleDebugLog(`isIntersecting: ${z.isIntersecting}, Ratio:${le}, Time: ${N}`), !z.isIntersecting) {
                p && (p = 0), y && (clearTimeout(y), y = void 0), b = !1;
                return
              }
              le > 45 && (p || (this.consoleDebugLog(" Start counting ", p), p = N), this.consoleDebugLog("Passed 50%"), b = !0, y || (y = setTimeout(() => {
                this.consoleDebugLog("Send impression timeout"), this._bannerAdsView(), X.unobserve(this.hostElement)
              }, 1e3))), N - p >= 1e3 && b && (y && (clearTimeout(y), y = void 0), this.consoleDebugLog("Send impression intersection"), this._bannerAdsView(), X.unobserve(this.hostElement))
            })
          }, {
            root: null,
            rootMargin: "0px",
            threshold: [0, .5, 1]
          });
          X.observe(this.hostElement)
        }, 100), h
      }
      return null
    } catch (i) {
      return this.consoleDebugLog("_getAd error", i), this._requestInProgress = !1, this._showSkeleton = !1, this.debug && console.log(i), null
    }
  }
  _promotionImpression() {
    return {
      list: [{
        ...this.adsData,
        ad: JSON.stringify(this._adsData)
      }]
    }
  }
  getPromotionItem() {
    var t, n, o, s, r;
    const i = this.isMobileWebview() ? (s = (o = this._criteoExtractedData) == null ? void 0 : o.rendering) == null ? void 0 : s.mobile_background_image_alt_text : (n = (t = this._criteoExtractedData) == null ? void 0 : t.rendering) == null ? void 0 : n.desktop_background_image_alt_text,
      e = ((r = this.adsData) == null ? void 0 : r.creativeSlot) || "slot0";
    return {
      promotionName: "banner-ads",
      promotionId: "banner-ads",
      creativeName: i,
      creativeSlot: e
    }
  }
  _onClickImpression() {
    var e, t, n, o;
    window.dataLayerService = window.dataLayerService || [];
    const i = ((t = (e = this._criteoExtractedData) == null ? void 0 : e.rendering) == null ? void 0 : t.optional_footer_redirect_url) || "";
    window.dataLayerService.push({
      scenarioName: D.General_Promotion_Click,
      collections: {
        eventInfo: {
          eventAction: D.General_Promotion_Click,
          eventCategory: "click",
          eventInteractionType: "click"
        },
        click: {
          linkName: "banner-ads",
          linkType: /^(#|\/)/.test(i) || i.indexOf(window.location.hostname) > -1 ? "internal" : "external",
          linkURL: i
        },
        content: {
          contentID: "CRITEO",
          contentType: "banner",
          contentComponentSource: "ads"
        },
        promotionItem: this.getPromotionItem(),
        promotions: this._promotionImpression(),
        extraParams: {
          adPlacementClickBeacon: this._criteoExtractedData.beacons.onClick
        }
      }
    }), (o = (n = this._criteoExtractedData) == null ? void 0 : n.beacons) != null && o.onClick && this.sendCriteoBeacon(this._criteoExtractedData.beacons.onClick)
  }
  _bannerAdsImpression() {
    var e, t, n, o;
    const i = this.isMobileWebview();
    window.dataLayerService = window.dataLayerService || [], window.dataLayerService.push({
      scenarioName: D.Banner_Promotion_Load,
      collections: {
        eventInfo: {
          eventAction: D.Banner_Promotion_Load,
          eventCategory: "load",
          eventInteractionType: "load"
        },
        content: {
          contentID: "CRITEO",
          contentType: "banner",
          contentComponentSource: "ads"
        },
        promotionItem: this.getPromotionItem(),
        promotions: {
          list: [{}]
        },
        extraParams: {
          adPlacementLoadBeacon: (t = (e = this._criteoExtractedData) == null ? void 0 : e.beacons) == null ? void 0 : t.onLoad
        }
      }
    }), !i && ((o = (n = this._criteoExtractedData) == null ? void 0 : n.beacons) != null && o.onLoad) && this.sendCriteoBeacon(this._criteoExtractedData.beacons.onLoad)
  }
  _bannerAdsView() {
    var t, n, o;
    const i = this.isMobileWebview(),
      {
        onView: e
      } = ((t = this._criteoExtractedData) == null ? void 0 : t.beacons) || "";
    window.dataLayerService = window.dataLayerService || [], window.dataLayerService.push({
      scenarioName: D.General_Promotion_View,
      collections: {
        eventInfo: {
          eventAction: D.General_Promotion_View,
          eventCategory: "view",
          eventInteractionType: "view"
        },
        content: {
          contentID: "CRITEO",
          contentType: "banner",
          contentComponentSource: "ads"
        },
        promotionItem: this.getPromotionItem(),
        extraParams: {
          adPlacementViewBeacon: (o = (n = this._criteoExtractedData) == null ? void 0 : n.beacons) == null ? void 0 : o.onView
        },
        promotions: {
          list: [{}]
        }
      }
    }), tt(() => lt()), !i && e && this.sendCriteoBeacon(e)
  }
  async sendCriteoBeacon(i) {
    if (!i) {
      this.consoleDebugLog("sendCriteoBeacon: No beacon URL provided");
      return
    }
    try {
      const t = `${this.demo&&this.baseUrl?`${this.baseUrl}/t/cri/b`:"/t/cri/b"}${i}`;
      if (this.consoleDebugLog("sendCriteoBeacon: Calling proxy URL", i), this.demo) {
        this.consoleDebugLog("sendCriteoBeacon: In demo mode - logging beacon request but not making call", {
          proxyUrl: t
        });
        return
      }
      const n = this.isServiceWorkerReady();
      if (this.consoleDebugLog("is serviceworker ready", n), n) {
        if (this.sendCriteoViaSW(t, null, "GET")) {
          this.consoleDebugLog("sendCriteoBeacon: Request sent via Service Worker");
          return
        }
        this.consoleDebugLog("sendCriteoBeacon: SW message failed, falling back to fetch")
      }
      const o = await fetch(t, {
        method: "GET"
      });
      o.ok ? this.consoleDebugLog("sendCriteoBeacon: Request successful") : this.consoleDebugLog("sendCriteoBeacon: Request failed", {
        status: o.status,
        statusText: o.statusText
      })
    } catch (e) {
      this.consoleDebugLog("sendCriteoBeacon: Error", e)
    }
  }
  generateSecureRandomNumber(i, e) {
    const t = e - i,
      n = Math.ceil(Math.log2(t + 1) / 8),
      o = new Uint8Array(n);
    return crypto.getRandomValues(o), parseInt(o.join(""), 10) % (t + 1) + i
  }
};
m([k({
  type: String
})], f.prototype, "tagText", 2);
m([k({
  type: Boolean
})], f.prototype, "showTag", 2);
m([k({
  type: String
})], f.prototype, "title", 2);
m([k({
  type: Boolean
})], f.prototype, "showLoading", 2);
m([k({
  type: Boolean
})], f.prototype, "debug", 2);
m([k({
  type: Boolean
})], f.prototype, "demo", 2);
m([k({
  type: String
})], f.prototype, "baseUrl", 2);
m([k({
  type: String,
  converter: {
    fromAttribute: i => i && JSON.parse(decodeURI(i))
  }
})], f.prototype, "adsData", 2);
m([k({
  type: String,
  converter: {
    fromAttribute: i => i && decodeURIComponent(i)
  }
})], f.prototype, "requestData", 2);
m([Y()], f.prototype, "_adsData", 2);
m([Y()], f.prototype, "_criteoExtractedData", 2);
m([Y()], f.prototype, "_showBanner", 2);
m([Y()], f.prototype, "_showSkeleton", 2);
m([et(".banner")], f.prototype, "hostElement", 2);
f = m([Ze("banner-ads")], f);