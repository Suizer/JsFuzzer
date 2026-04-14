(function() {
  const e = document.createElement("link")
    .relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) s(o);
  new MutationObserver(o => {
      for (const n of o)
        if (n.type === "childList")
          for (const r of n.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && s(r)
    })
    .observe(document, {
      childList: !0,
      subtree: !0
    });

  function i(o) {
    const n = {};
    return o.integrity && (n.integrity = o.integrity), o.referrerPolicy && (n.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? n.credentials = "include" : o.crossOrigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin", n
  }

  function s(o) {
    if (o.ep) return;
    o.ep = !0;
    const n = i(o);
    fetch(o.href, n)
  }
})();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const K = globalThis,
  ne = K.ShadowRoot && (K.ShadyCSS === void 0 || K.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
  Ce = Symbol(),
  de = new WeakMap;
let Le = class {
  constructor(e, i, s) {
    if (this._$cssResult$ = !0, s !== Ce) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = i
  }
  get styleSheet() {
    let e = this.o;
    const i = this.t;
    if (ne && e === void 0) {
      const s = i !== void 0 && i.length === 1;
      s && (e = de.get(i)), e === void 0 && ((this.o = e = new CSSStyleSheet)
        .replaceSync(this.cssText), s && de.set(i, e))
    }
    return e
  }
  toString() {
    return this.cssText
  }
};
const xe = t => new Le(typeof t == "string" ? t : t + "", void 0, Ce),
  Te = (t, e) => {
    if (ne) t.adoptedStyleSheets = e.map((i => i instanceof CSSStyleSheet ? i : i.styleSheet));
    else
      for (const i of e) {
        const s = document.createElement("style"),
          o = K.litNonce;
        o !== void 0 && s.setAttribute("nonce", o), s.textContent = i.cssText, t.appendChild(s)
      }
  },
  he = ne ? t => t : t => t instanceof CSSStyleSheet ? (e => {
    let i = "";
    for (const s of e.cssRules) i += s.cssText;
    return xe(i)
  })(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const {
  is: Ie,
  defineProperty: Re,
  getOwnPropertyDescriptor: Oe,
  getOwnPropertyNames: Me,
  getOwnPropertySymbols: Ve,
  getPrototypeOf: Ue
} = Object, P = globalThis, ue = P.trustedTypes, We = ue ? ue.emptyScript : "", ee = P.reactiveElementPolyfillSupport, V = (t, e) => t, J = {
  toAttribute(t, e) {
    switch (e) {
      case Boolean:
        t = t ? We : null;
        break;
      case Object:
      case Array:
        t = t == null ? t : JSON.stringify(t)
    }
    return t
  },
  fromAttribute(t, e) {
    let i = t;
    switch (e) {
      case Boolean:
        i = t !== null;
        break;
      case Number:
        i = t === null ? null : Number(t);
        break;
      case Object:
      case Array:
        try {
          i = JSON.parse(t)
        } catch {
          i = null
        }
    }
    return i
  }
}, re = (t, e) => !Ie(t, e), _e = {
  attribute: !0,
  type: String,
  converter: J,
  reflect: !1,
  useDefault: !1,
  hasChanged: re
};
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), P.litPropertyMetadata ?? (P.litPropertyMetadata = new WeakMap);
let I = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = []))
      .push(e)
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()]
  }
  static createProperty(e, i = _e) {
    if (i.state && (i.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((i = Object.create(i))
        .wrapped = !0), this.elementProperties.set(e, i), !i.noAccessor) {
      const s = Symbol(),
        o = this.getPropertyDescriptor(e, s, i);
      o !== void 0 && Re(this.prototype, e, o)
    }
  }
  static getPropertyDescriptor(e, i, s) {
    const {
      get: o,
      set: n
    } = Oe(this.prototype, e) ?? {
      get() {
        return this[i]
      },
      set(r) {
        this[i] = r
      }
    };
    return {
      get: o,
      set(r) {
        const c = o == null ? void 0 : o.call(this);
        n == null || n.call(this, r), this.requestUpdate(e, c, s)
      },
      configurable: !0,
      enumerable: !0
    }
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? _e
  }
  static _$Ei() {
    if (this.hasOwnProperty(V("elementProperties"))) return;
    const e = Ue(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties)
  }
  static finalize() {
    if (this.hasOwnProperty(V("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(V("properties"))) {
      const i = this.properties,
        s = [...Me(i), ...Ve(i)];
      for (const o of s) this.createProperty(o, i[o])
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const i = litPropertyMetadata.get(e);
      if (i !== void 0)
        for (const [s, o] of i) this.elementProperties.set(s, o)
    }
    this._$Eh = new Map;
    for (const [i, s] of this.elementProperties) {
      const o = this._$Eu(i, s);
      o !== void 0 && this._$Eh.set(o, i)
    }
    this.elementStyles = this.finalizeStyles(this.styles)
  }
  static finalizeStyles(e) {
    const i = [];
    if (Array.isArray(e)) {
      const s = new Set(e.flat(1 / 0)
        .reverse());
      for (const o of s) i.unshift(he(o))
    } else e !== void 0 && i.push(he(e));
    return i
  }
  static _$Eu(e, i) {
    const s = i.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof e == "string" ? e.toLowerCase() : void 0
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev()
  }
  _$Ev() {
    var e;
    this._$ES = new Promise((i => this.enableUpdating = i)), this._$AL = new Map, this._$E_(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach((i => i(this)))
  }
  addController(e) {
    var i;
    (this._$EO ?? (this._$EO = new Set))
    .add(e), this.renderRoot !== void 0 && this.isConnected && ((i = e.hostConnected) == null || i.call(e))
  }
  removeController(e) {
    var i;
    (i = this._$EO) == null || i.delete(e)
  }
  _$E_() {
    const e = new Map,
      i = this.constructor.elementProperties;
    for (const s of i.keys()) this.hasOwnProperty(s) && (e.set(s, this[s]), delete this[s]);
    e.size > 0 && (this._$Ep = e)
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Te(e, this.constructor.elementStyles), e
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((i => {
      var s;
      return (s = i.hostConnected) == null ? void 0 : s.call(i)
    }))
  }
  enableUpdating(e) {}
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((i => {
      var s;
      return (s = i.hostDisconnected) == null ? void 0 : s.call(i)
    }))
  }
  attributeChangedCallback(e, i, s) {
    this._$AK(e, s)
  }
  _$ET(e, i) {
    var n;
    const s = this.constructor.elementProperties.get(e),
      o = this.constructor._$Eu(e, s);
    if (o !== void 0 && s.reflect === !0) {
      const r = (((n = s.converter) == null ? void 0 : n.toAttribute) !== void 0 ? s.converter : J)
        .toAttribute(i, s.type);
      this._$Em = e, r == null ? this.removeAttribute(o) : this.setAttribute(o, r), this._$Em = null
    }
  }
  _$AK(e, i) {
    var n, r;
    const s = this.constructor,
      o = s._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const c = s.getPropertyOptions(o),
        a = typeof c.converter == "function" ? {
          fromAttribute: c.converter
        } : ((n = c.converter) == null ? void 0 : n.fromAttribute) !== void 0 ? c.converter : J;
      this._$Em = o;
      const l = a.fromAttribute(i, c.type);
      this[o] = l ?? ((r = this._$Ej) == null ? void 0 : r.get(o)) ?? l, this._$Em = null
    }
  }
  requestUpdate(e, i, s) {
    var o;
    if (e !== void 0) {
      const n = this.constructor,
        r = this[e];
      if (s ?? (s = n.getPropertyOptions(e)), !((s.hasChanged ?? re)(r, i) || s.useDefault && s.reflect && r === ((o = this._$Ej) == null ? void 0 : o.get(e)) && !this.hasAttribute(n._$Eu(e, s)))) return;
      this.C(e, i, s)
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP())
  }
  C(e, i, {
    useDefault: s,
    reflect: o,
    wrapped: n
  }, r) {
    s && !(this._$Ej ?? (this._$Ej = new Map))
      .has(e) && (this._$Ej.set(e, r ?? i ?? this[e]), n !== !0 || r !== void 0) || (this._$AL.has(e) || (this.hasUpdated || s || (i = void 0), this._$AL.set(e, i)), o === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = new Set))
        .add(e))
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES
    } catch (i) {
      Promise.reject(i)
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending
  }
  scheduleUpdate() {
    return this.performUpdate()
  }
  performUpdate() {
    var s;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [n, r] of this._$Ep) this[n] = r;
        this._$Ep = void 0
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0)
        for (const [n, r] of o) {
          const {
            wrapped: c
          } = r, a = this[n];
          c !== !0 || this._$AL.has(n) || a === void 0 || this.C(n, void 0, r, a)
        }
    }
    let e = !1;
    const i = this._$AL;
    try {
      e = this.shouldUpdate(i), e ? (this.willUpdate(i), (s = this._$EO) == null || s.forEach((o => {
        var n;
        return (n = o.hostUpdate) == null ? void 0 : n.call(o)
      })), this.update(i)) : this._$EM()
    } catch (o) {
      throw e = !1, this._$EM(), o
    }
    e && this._$AE(i)
  }
  willUpdate(e) {}
  _$AE(e) {
    var i;
    (i = this._$EO) == null || i.forEach((s => {
      var o;
      return (o = s.hostUpdated) == null ? void 0 : o.call(s)
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
    this._$Eq && (this._$Eq = this._$Eq.forEach((i => this._$ET(i, this[i])))), this._$EM()
  }
  updated(e) {}
  firstUpdated(e) {}
};
I.elementStyles = [], I.shadowRootOptions = {
    mode: "open"
  }, I[V("elementProperties")] = new Map, I[V("finalized")] = new Map, ee == null || ee({
    ReactiveElement: I
  }), (P.reactiveElementVersions ?? (P.reactiveElementVersions = []))
  .push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const U = globalThis,
  Q = U.trustedTypes,
  pe = Q ? Q.createPolicy("lit-html", {
    createHTML: t => t
  }) : void 0,
  Pe = "$lit$",
  C = `lit$${Math.random().toFixed(9).slice(2)}$`,
  $e = "?" + C,
  Be = `<${$e}>`,
  L = document,
  B = () => L.createComment(""),
  G = t => t === null || typeof t != "object" && typeof t != "function",
  ae = Array.isArray,
  Ge = t => ae(t) || typeof(t == null ? void 0 : t[Symbol.iterator]) == "function",
  te = `[ 	
\f\r]`,
  M = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  ge = /-->/g,
  fe = />/g,
  A = RegExp(`>|${te}(?:([^\\s"'>=/]+)(${te}*=${te}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"),
  me = /'/g,
  be = /"/g,
  Ae = /^(?:script|style|textarea|title)$/i,
  He = t => (e, ...i) => ({
    _$litType$: t,
    strings: e,
    values: i
  }),
  v = He(1),
  R = Symbol.for("lit-noChange"),
  _ = Symbol.for("lit-nothing"),
  ye = new WeakMap,
  S = L.createTreeWalker(L, 129);

function De(t, e) {
  if (!ae(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return pe !== void 0 ? pe.createHTML(e) : e
}
const Fe = (t, e) => {
  const i = t.length - 1,
    s = [];
  let o, n = e === 2 ? "<svg>" : e === 3 ? "<math>" : "",
    r = M;
  for (let c = 0; c < i; c++) {
    const a = t[c];
    let l, h, d = -1,
      f = 0;
    for (; f < a.length && (r.lastIndex = f, h = r.exec(a), h !== null);) f = r.lastIndex, r === M ? h[1] === "!--" ? r = ge : h[1] !== void 0 ? r = fe : h[2] !== void 0 ? (Ae.test(h[2]) && (o = RegExp("</" + h[2], "g")), r = A) : h[3] !== void 0 && (r = A) : r === A ? h[0] === ">" ? (r = o ?? M, d = -1) : h[1] === void 0 ? d = -2 : (d = r.lastIndex - h[2].length, l = h[1], r = h[3] === void 0 ? A : h[3] === '"' ? be : me) : r === be || r === me ? r = A : r === ge || r === fe ? r = M : (r = A, o = void 0);
    const y = r === A && t[c + 1].startsWith("/>") ? " " : "";
    n += r === M ? a + Be : d >= 0 ? (s.push(l), a.slice(0, d) + Pe + a.slice(d) + C + y) : a + C + (d === -2 ? c : y)
  }
  return [De(t, n + (t[i] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), s]
};
class H {
  constructor({
    strings: e,
    _$litType$: i
  }, s) {
    let o;
    this.parts = [];
    let n = 0,
      r = 0;
    const c = e.length - 1,
      a = this.parts,
      [l, h] = Fe(e, i);
    if (this.el = H.createElement(l, s), S.currentNode = this.el.content, i === 2 || i === 3) {
      const d = this.el.content.firstChild;
      d.replaceWith(...d.childNodes)
    }
    for (;
      (o = S.nextNode()) !== null && a.length < c;) {
      if (o.nodeType === 1) {
        if (o.hasAttributes())
          for (const d of o.getAttributeNames())
            if (d.endsWith(Pe)) {
              const f = h[r++],
                y = o.getAttribute(d)
                .split(C),
                b = /([.?@])?(.*)/.exec(f);
              a.push({
                type: 1,
                index: n,
                name: b[2],
                strings: y,
                ctor: b[1] === "." ? qe : b[1] === "?" ? je : b[1] === "@" ? Ke : Y
              }), o.removeAttribute(d)
            } else d.startsWith(C) && (a.push({
              type: 6,
              index: n
            }), o.removeAttribute(d));
        if (Ae.test(o.tagName)) {
          const d = o.textContent.split(C),
            f = d.length - 1;
          if (f > 0) {
            o.textContent = Q ? Q.emptyScript : "";
            for (let y = 0; y < f; y++) o.append(d[y], B()), S.nextNode(), a.push({
              type: 2,
              index: ++n
            });
            o.append(d[f], B())
          }
        }
      } else if (o.nodeType === 8)
        if (o.data === $e) a.push({
          type: 2,
          index: n
        });
        else {
          let d = -1;
          for (;
            (d = o.data.indexOf(C, d + 1)) !== -1;) a.push({
            type: 7,
            index: n
          }), d += C.length - 1
        } n++
    }
  }
  static createElement(e, i) {
    const s = L.createElement("template");
    return s.innerHTML = e, s
  }
}

function O(t, e, i = t, s) {
  var r, c;
  if (e === R) return e;
  let o = s !== void 0 ? (r = i._$Co) == null ? void 0 : r[s] : i._$Cl;
  const n = G(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== n && ((c = o == null ? void 0 : o._$AO) == null || c.call(o, !1), n === void 0 ? o = void 0 : (o = new n(t), o._$AT(t, i, s)), s !== void 0 ? (i._$Co ?? (i._$Co = []))[s] = o : i._$Cl = o), o !== void 0 && (e = O(t, o._$AS(t, e.values), o, s)), e
}
class ze {
  constructor(e, i) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = i
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
        content: i
      },
      parts: s
    } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? L)
      .importNode(i, !0);
    S.currentNode = o;
    let n = S.nextNode(),
      r = 0,
      c = 0,
      a = s[0];
    for (; a !== void 0;) {
      if (r === a.index) {
        let l;
        a.type === 2 ? l = new F(n, n.nextSibling, this, e) : a.type === 1 ? l = new a.ctor(n, a.name, a.strings, this, e) : a.type === 6 && (l = new Je(n, this, e)), this._$AV.push(l), a = s[++c]
      }
      r !== (a == null ? void 0 : a.index) && (n = S.nextNode(), r++)
    }
    return S.currentNode = L, o
  }
  p(e) {
    let i = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(e, s, i), i += s.strings.length - 2) : s._$AI(e[i])), i++
  }
}
class F {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv
  }
  constructor(e, i, s, o) {
    this.type = 2, this._$AH = _, this._$AN = void 0, this._$AA = e, this._$AB = i, this._$AM = s, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const i = this._$AM;
    return i !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = i.parentNode), e
  }
  get startNode() {
    return this._$AA
  }
  get endNode() {
    return this._$AB
  }
  _$AI(e, i = this) {
    e = O(this, e, i), G(e) ? e === _ || e == null || e === "" ? (this._$AH !== _ && this._$AR(), this._$AH = _) : e !== this._$AH && e !== R && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Ge(e) ? this.k(e) : this._(e)
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
    var n;
    const {
      values: i,
      _$litType$: s
    } = e, o = typeof s == "number" ? this._$AC(e) : (s.el === void 0 && (s.el = H.createElement(De(s.h, s.h[0]), this.options)), s);
    if (((n = this._$AH) == null ? void 0 : n._$AD) === o) this._$AH.p(i);
    else {
      const r = new ze(o, this),
        c = r.u(this.options);
      r.p(i), this.T(c), this._$AH = r
    }
  }
  _$AC(e) {
    let i = ye.get(e.strings);
    return i === void 0 && ye.set(e.strings, i = new H(e)), i
  }
  k(e) {
    ae(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let s, o = 0;
    for (const n of e) o === i.length ? i.push(s = new F(this.O(B()), this.O(B()), this, this.options)) : s = i[o], s._$AI(n), o++;
    o < i.length && (this._$AR(s && s._$AB.nextSibling, o), i.length = o)
  }
  _$AR(e = this._$AA.nextSibling, i) {
    var s;
    for ((s = this._$AP) == null ? void 0 : s.call(this, !1, !0, i); e !== this._$AB;) {
      const o = e.nextSibling;
      e.remove(), e = o
    }
  }
  setConnected(e) {
    var i;
    this._$AM === void 0 && (this._$Cv = e, (i = this._$AP) == null || i.call(this, e))
  }
}
class Y {
  get tagName() {
    return this.element.tagName
  }
  get _$AU() {
    return this._$AM._$AU
  }
  constructor(e, i, s, o, n) {
    this.type = 1, this._$AH = _, this._$AN = void 0, this.element = e, this.name = i, this._$AM = o, this.options = n, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1)
      .fill(new String), this.strings = s) : this._$AH = _
  }
  _$AI(e, i = this, s, o) {
    const n = this.strings;
    let r = !1;
    if (n === void 0) e = O(this, e, i, 0), r = !G(e) || e !== this._$AH && e !== R, r && (this._$AH = e);
    else {
      const c = e;
      let a, l;
      for (e = n[0], a = 0; a < n.length - 1; a++) l = O(this, c[s + a], i, a), l === R && (l = this._$AH[a]), r || (r = !G(l) || l !== this._$AH[a]), l === _ ? e = _ : e !== _ && (e += (l ?? "") + n[a + 1]), this._$AH[a] = l
    }
    r && !o && this.j(e)
  }
  j(e) {
    e === _ ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "")
  }
}
class qe extends Y {
  constructor() {
    super(...arguments), this.type = 3
  }
  j(e) {
    this.element[this.name] = e === _ ? void 0 : e
  }
}
class je extends Y {
  constructor() {
    super(...arguments), this.type = 4
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== _)
  }
}
class Ke extends Y {
  constructor(e, i, s, o, n) {
    super(e, i, s, o, n), this.type = 5
  }
  _$AI(e, i = this) {
    if ((e = O(this, e, i, 0) ?? _) === R) return;
    const s = this._$AH,
      o = e === _ && s !== _ || e.capture !== s.capture || e.once !== s.once || e.passive !== s.passive,
      n = e !== _ && (s === _ || o);
    o && this.element.removeEventListener(this.name, this, s), n && this.element.addEventListener(this.name, this, e), this._$AH = e
  }
  handleEvent(e) {
    var i;
    typeof this._$AH == "function" ? this._$AH.call(((i = this.options) == null ? void 0 : i.host) ?? this.element, e) : this._$AH.handleEvent(e)
  }
}
class Je {
  constructor(e, i, s) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s
  }
  get _$AU() {
    return this._$AM._$AU
  }
  _$AI(e) {
    O(this, e)
  }
}
const ie = U.litHtmlPolyfillSupport;
ie == null || ie(H, F), (U.litHtmlVersions ?? (U.litHtmlVersions = []))
  .push("3.3.1");
const Qe = (t, e, i) => {
  const s = (i == null ? void 0 : i.renderBefore) ?? e;
  let o = s._$litPart$;
  if (o === void 0) {
    const n = (i == null ? void 0 : i.renderBefore) ?? null;
    s._$litPart$ = o = new F(e.insertBefore(B(), n), n, void 0, i ?? {})
  }
  return o._$AI(t), o
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const E = globalThis;
class W extends I {
  constructor() {
    super(...arguments), this.renderOptions = {
      host: this
    }, this._$Do = void 0
  }
  createRenderRoot() {
    var i;
    const e = super.createRenderRoot();
    return (i = this.renderOptions)
      .renderBefore ?? (i.renderBefore = e.firstChild), e
  }
  update(e) {
    const i = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Qe(i, this.renderRoot, this.renderOptions)
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
var ve;
W._$litElement$ = !0, W.finalized = !0, (ve = E.litElementHydrateSupport) == null || ve.call(E, {
  LitElement: W
});
const oe = E.litElementPolyfillSupport;
oe == null || oe({
  LitElement: W
});
(E.litElementVersions ?? (E.litElementVersions = []))
.push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ze = t => (e, i) => {
  i !== void 0 ? i.addInitializer((() => {
    customElements.define(t, e)
  })) : customElements.define(t, e)
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ye = {
    attribute: !0,
    type: String,
    converter: J,
    reflect: !1,
    hasChanged: re
  },
  Xe = (t = Ye, e, i) => {
    const {
      kind: s,
      metadata: o
    } = i;
    let n = globalThis.litPropertyMetadata.get(o);
    if (n === void 0 && globalThis.litPropertyMetadata.set(o, n = new Map), s === "setter" && ((t = Object.create(t))
        .wrapped = !0), n.set(i.name, t), s === "accessor") {
      const {
        name: r
      } = i;
      return {
        set(c) {
          const a = e.get.call(this);
          e.set.call(this, c), this.requestUpdate(r, a, t)
        },
        init(c) {
          return c !== void 0 && this.C(r, void 0, t, c), c
        }
      }
    }
    if (s === "setter") {
      const {
        name: r
      } = i;
      return function(c) {
        const a = this[r];
        e.call(this, c), this.requestUpdate(r, a, t)
      }
    }
    throw Error("Unsupported decorator location: " + s)
  };

function k(t) {
  return (e, i) => typeof i == "object" ? Xe(t, e, i) : ((s, o, n) => {
    const r = o.hasOwnProperty(n);
    return o.constructor.createProperty(n, s), r ? Object.getOwnPropertyDescriptor(o, n) : void 0
  })(t, e, i)
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function z(t) {
  return k({
    ...t,
    state: !0,
    attribute: !1
  })
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ne = (t, e, i) => (i.configurable = !0, i.enumerable = !0, Reflect.decorate && typeof e != "object" && Object.defineProperty(t, e, i), i);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function et(t, e) {
  return (i, s, o) => {
    const n = r => {
      var c;
      return ((c = r.renderRoot) == null ? void 0 : c.querySelector(t)) ?? null
    };
    return Ne(i, s, {
      get() {
        return n(this)
      }
    })
  }
}
var D = (t => (t.PDP_Pageload = "PDP_Pageload", t.PDP_Click = "PDP_Click", t.PLP_Product_Click = "PLP_Product_Click", t.PDP_Social_Click = "PDP_Social_Click", t.PDP_Image_Click = "PDP_Image_Click", t.PDP_Section_EnterViewport = "PDP_Section_EnterViewport", t.PDP_Recommendation_Load = "PDP_Recommendation_Load", t.PDP_Recommendation_EnterViewport = "PDP_Recommendation_EnterViewport", t.PDP_Recommendation_Click = "PDP_Recommendation_Click", t.PDP_Rating_Click = "PDP_Rating_Click", t.PDP_Information_Load = "PDP_Information_Load", t.PDP_A_Goods_Link_Click = "PDP_A_Goods_Link_Click", t.PDP_B_Goods_Link_Click = "PDP_B_Goods_Link_Click", t.PDP_Downloads_Link_Click = "PDP_Downloads_Link_Click", t.PDP_Downloads_Section_Click = "PDP_Downloads_Section_Click", t.PDP_Install_Calc_Link_Click = "PDP_Install_Calc_Link_Click", t.General_Pageload = "General_Pageload", t.General_Recommendation_Load = "General_Recommendation_Load", t.General_RecommendationProduct_EnterViewport = "General_RecommendationProduct_EnterViewport", t.General_Product_Click = "General_Product_Click", t.General_Section_EnterViewport = "General_Section_EnterViewport", t.General_Teaser_Click = "General_Teaser_Click", t.General_Link_Click = "General_Link_Click", t.PLP_Pageload = "PLP_Pageload", t.PLP_FilterSelect_Click = "PLP_FilterSelect_Click", t.PLP_FilterSelect_Intent = "PLP_FilterSelect_Intent", t.PLP_FilterDeselect_Click = "PLP_FilterDeselect_Click", t.PLP_ProductImageSlider_Click = "PLP_ProductImageSlider_Click", t.PLP_Show_More_Click = "PLP_Show_More_Click", t.PLP_Information_Load = "PLP_Information_Load", t.General_SearchTermConfirm_Click = "General_SearchTermConfirm_Click", t.Cart_Pageload = "Cart_Pageload", t.Cart_Pageload_Split = "Cart_Pageload_Split", t.Cart_Button_Click = "Cart_Button_Click", t.Cart_Success_Pageload = "Cart_Success_Pageload", t.Banner_Promotion_Load = "Banner_Promotion_Load", t.General_Product_View = "General_Product_View", t.General_Product_Load = "General_Product_Load", t.General_Promotion_View = "General_Promotion_View", t.General_Promotion_View_Split = "General_Promotion_View_Split", t.General_Promotion_Load = "General_Promotion_Load", t.General_Promotion_Click = "General_Promotion_Click", t.General_Promotion_Qualified = "General_Promotion_Qualified", t.General_Promotion_Shown = "General_Promotion_Shown", t.General_Navigation_Click = "General_Navigation_Click", t.Wishlist_Pageload = "Wishlist_Pageload", t.Wishlist_Button_Click = "Wishlist_Button_Click", t.StoreSearch_Pageload = "StoreSearch_Pageload", t.StoreSearch_Click = "StoreSearch_Click", t.StoreSearchDP_Pageload = "StoreSearchDP_Pageload", t.StoreSearchDP_Click = "StoreSearchDP_Click", t.MyAccount_Pageload = "MyAccount_Pageload", t.MyAccount_Click = "MyAccount_Click", t.Flyer_Click = "Flyer_Click", t.Flyer_View = "Flyer_View", t.Flyer_ChangeViewport = "Flyer_ChangeViewport", t.Flyer_Categories_Select = "Flyer_Categories_Select", t.Kameleoon_Experiment = "Kameleoon_Experiment", t.Order_Cancellation_Click = "Order_Cancellation_Click", t.Order_ViewDetails_Click = "Order_ViewDetails_Click", t.Order_Invoice_Download_Click = "Order_Invoice_Download_Click", t.Order_Return_Click = "Order_Return_Click", t.Order_Cancellation_Confirmation = "Order_Cancellation_Confirmation", t.Order_Return_Confirmation = "Order_Return_Confirmation", t.Start_Login_Click = "Start_Login_Click", t.Login_Button_Click = "Login_Button_Click", t.Login_Success = "Login_Success", t.Login_Link_Click = "Login_Link_Click", t.Forgotten_Password_Click = "Forgotten_Password_Click", t.Password_Reset = "Password_Reset", t.Register_Link_Click = "Register_Link_Click", t.Registration_Success = "Registration_Success", t.Error_Message = "Error_Message", t.Newsletter_Form_Submit = "Newsletter_Form_Submit", t.Newsletter_Form_Success = "Newsletter_Form_Success", t.Flyer_View_50 = "Flyer_View_50", t.Flyer_View_75 = "Flyer_View_75", t.Flyer_View_100 = "Flyer_View_100", t.User_Consent_Update = "User_Consent_Update", t.Review_Product_Start = "Review_Product_Start", t.Review_Product_Click = "Review_Product_Click", t.Review_Product_Submit = "Review_Product_Submit", t.Review_Product_Error = "Review_Product_Error", t.Review_Product_Success = "Review_Product_Success", t.Return_Chatbot_WindowOpen_Click = "Return_Chatbot_WindowOpen_Click", t.Return_Chatbot_WindowClosed_Click = "Return_Chatbot_WindowClosed_Click", t.Session_Start = "Session_Start", t.First_Visit = "First_Visit", t.Add_Product_To_Wishlist_In_Flyer = "Add_Product_To_Wishlist_In_Flyer", t.ProductView_In_Flyer = "ProductView_In_Flyer", t.Retail_StartPage_Visit = "Retail_StartPage_Visit", t.View_Store_Article = "View_Store_Article", t.WT_Visit = "WT_Visit", t.Switch_Login_Type = "Switch_Login_Type", t.Confirm_Token = "Confirm_Token", t.Request_New_Token = "Request_New_Token", t.Confirm_Mobile_Number = "Confirm_Mobile_Number", t.Password_Reset_Success = "Password_Reset_Success", t.Contact_Customer_Service = "Contact_Customer_Service", t.Login_Accept_Terms = "Login_Accept_Terms", t.Register_Continue_Click = "Register_Continue_Click", t.Register_Change_Phone = "Register_Change_Phone", t.Video_Start = "Video_Start", t.Video_Progress = "Video_Progress", t.Video_Complete = "Video_Complete", t.General_Scroll_Action = "General_Scroll_Action", t.Promotion_Information_Click = "Promotion_Information_Click", t))(D || {});

function $(t) {
  let e = "";
  if (document.cookie && document.cookie !== "") {
    const i = document.cookie.split(";");
    for (let s = 0; s < i.length; s += 1) {
      const o = i[s].replace(/^\s+/, "")
        .replace(/\s+$/, "");
      if (o.substring(0, t.length + 1) === `${t}=`) {
        try {
          e = decodeURIComponent(o.substring(t.length + 1)
            .replace(/\+/g, " "))
        } catch (n) {
          console.log("decode err", n)
        }
        break
      }
    }
  }
  return e
}

function u(t, e = !1, i = "log") {
  if (e || $("dataLayerService")) switch (i) {
    case "warn":
      console.warn(t);
      break;
    case "error":
      console.error(t);
      break;
    default:
      console.log(t)
  }
}

function tt(t) {
  const e = $("adSessionId");
  if (e) return e;
  const i = t(),
    s = "; max-age=" + 1440 * 60 * 30;
  return document.cookie = "adSessionId=" + i + s + "; secure; path=/", i
}
const it = "mobile_flow";

function we(t) {
  const e = $("tracking-info") || "{}";
  try {
    const i = window.atob(e),
      s = JSON.parse(i),
      o = s == null ? void 0 : s[t];
    return o !== "null" ? o : ""
  } catch {
    return ""
  }
}

function ot(t) {
  const e = new TextEncoder()
    .encode(t);
  return crypto.subtle.digest("SHA-256", e)
    .then(i => Array.from(new Uint8Array(i))
      .map(n => n.toString(16)
        .padStart(2, "0"))
      .join(""))
}
const j = {
    statistics: "C0003",
    preferences: "C0002",
    marketing: "C0004",
    necessary: "C0001"
  },
  ce = class ce {
    static parseOneTrustCookie() {
      const e = "OptanonConsent";
      try {
        const i = $(e);
        return i ? decodeURIComponent(i)
          .split("&")
          .reduce((o, n) => {
            const [r, c] = n.split("=");
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
        groups: i
      } = e;
      return i ? {
        marketing: i.includes(`${j.marketing}:1`),
        statistics: i.includes(`${j.statistics}:1`),
        preferences: i.includes(`${j.preferences}:1`),
        necessary: i.includes(`${j.necessary}:1`)
      } : null
    }
    static extractOneTrustConsentData() {
      const e = this.parseOneTrustCookie();
      if (!e) return null;
      const {
        groups: i,
        consentId: s
      } = e;
      return !i || !s ? null : {
        consentId: s,
        groups: i
      }
    }
    static getLidlConsentCookie() {
      var i;
      const e = $("LidlConsent") || $("lidl-consent");
      if (!e) return null;
      try {
        const s = (i = e.split("&")
          .find(o => o.startsWith("groups="))) == null ? void 0 : i.split("=")[1];
        return s ? {
          marketing: s.includes("C0004:1"),
          statistics: s.includes("C0003:1"),
          preferences: s.includes("C0002:1"),
          necessary: !0
        } : null
      } catch {
        return null
      }
    }
    static initializeConsentListener() {
      this.getConsentCookie() && this.notifyConsentListeners();
      const i = () => {
        window.OneTrust.OnConsentChanged(() => {
          this.notifyConsentListeners()
        })
      };
      if (typeof window.OneTrust < "u" && window.OneTrust.OnConsentChanged) i();
      else {
        const s = setInterval(() => {
          typeof window.OneTrust < "u" && window.OneTrust.OnConsentChanged && (clearInterval(s), i())
        }, 1e3);
        setTimeout(() => {
          clearInterval(s), typeof window.OneTrust > "u" && console.warn("OneTrust not loaded after timeout. Consent changes may not be tracked.")
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
      this.consentListeners.forEach(i => i(e))
    }
    static async getNecessaryUUID4CookieIfNotPresent(e) {
      const i = window.location.hostname,
        s = i.includes("lidl.es"),
        o = i.includes("lidl.com");
      let n = "";
      s || o ? n = e ? `/t/gtm/uuid4-cookie?puuidv=${encodeURIComponent(e)}` : "/t/gtm/uuid4-cookie" : n = e ? `/t/p/uuid4-cookie?puuidv=${encodeURIComponent(e)}` : "/t/p/uuid4-cookie", await fetch(n)
    }
  };
ce.consentListeners = [];
let Z = ce;
Z.initializeConsentListener();
const st = ".ad-tooltip--theme{font-size:12/16rem;font-weight:400;border-radius:2/16rem;padding:16/16rem;color:#4e5761;text-align:left;background-color:#fafafa;border:1px solid #E3E4E5}@media (min-width: 1280px){.ad-tooltip--theme{font-size:14/16rem}}:host{display:block;font-family:LidlFontCondPro,Trebuchet MS,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:16/16rem;line-height:1.4;color:#353b42;border-radius:2/16rem}:host a{display:flex;text-decoration:none;color:unset}:host .banner{position:relative;width:100%;max-height:300px;cursor:pointer;overflow:hidden;box-shadow:0 2px 4px #00000026;border-radius:2/16rem;background-size:cover;background-position:center;background-repeat:no-repeat}:host .banner__viewHomeApiDesktop{position:relative;background-position:center;background-repeat:no-repeat;height:300px;background-size:cover;max-width:1400px}:host .banner__viewHomeApiMobile{position:relative;background-position:center}@media (min-width: 360px) and (max-width: 749px){:host .banner__viewHomeApiMobile{aspect-ratio:3 / 2;background-size:cover;max-height:900px;max-width:1350px}}:host .banner__viewSearchResultApiDesktop,:host .banner__viewCategoryApiDesktop{position:relative;max-width:1400px;height:200px;background-position:center;background-size:cover}@media (min-width: 1400px){:host .banner__viewSearchResultApiDesktop,:host .banner__viewCategoryApiDesktop{max-width:1400px}}:host .banner__viewSearchResultApiMobile,:host .banner__viewCategoryApiMobile{position:relative}@media (min-width: 360px) and (max-width: 749px){:host .banner__viewSearchResultApiMobile,:host .banner__viewCategoryApiMobile{aspect-ratio:2.36;max-height:570px;max-width:1350px;background-size:cover;background-position:center}}:host .banner-new{border-radius:1rem;background-color:#fff;box-shadow:0 2px 4px #00000026}:host .banner-new__wrapper{position:relative}:host .banner-new__img{width:100%;height:100%;border-style:none;box-shadow:0 2px 4px #00000026}:host .banner-new__label{padding:.5rem;border-radius:0 0 1rem 1rem}:host .banner-new__headline{word-wrap:break-word;overflow:hidden;line-height:120%;display:-webkit-box;min-height:3rem}:host .banner-old{display:block;position:relative;background-color:#fff;overflow:hidden}:host .banner-old__img{width:100%;height:100%;border-style:none}:host .banner-old__label{position:absolute;bottom:0;left:0;width:100%;background-color:#ffffffb3;padding:.5rem 1rem;color:#353b42}:host .banner-old__headline{word-wrap:break-word;overflow:hidden;max-height:3rem;line-height:1.4rem;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}:host .ads-tag{display:flex;position:absolute;bottom:0;right:0;padding:4px;background-color:#fff;cursor:pointer}:host .ads-tag__img{width:100%;height:100%;border-style:none}:host .ads-tag__icon{margin-left:4px;margin-top:3px;width:12px;height:12px;mask-image:url(/cdn/assets/icons/1.0.0/information-circle.svg);-webkit-mask-image:url(/cdn/assets/icons/1.0.0/information-circle.svg);background-color:#4e5761}:host .ads-tag__text{font-size:.75rem;font-weight:400}@media (min-width: 1280px){:host .ads-tag__text{font-size:.875rem}}:host .ads-tag__tooltip{position:absolute;bottom:calc(100% + 8px);right:0;width:280px;z-index:1000}:host .ads-tag__tooltip-content{background-color:#1a1a1a;color:#fff;padding:16px;border-radius:8px;font-size:.875rem;line-height:1.5;text-align:left}:host .ads-tag__tooltip-arrow{position:absolute;bottom:-6px;right:16px;width:12px;height:12px;background-color:#1a1a1a;transform:rotate(45deg)}:host .rounded-corners{border-radius:1rem 1rem 0 0}:host .ad-tooltip{background:none;border:none;padding:0;margin:0;cursor:pointer;color:inherit;display:inline-flex}:host .skeleton{width:100%;max-width:320px;height:150px;position:relative;margin:1rem auto;display:flex;vertical-align:middle;cursor:progress;background-color:#e3e4e6;background-image:linear-gradient(90deg,transparent 25%,#fff 50%,transparent 75%);background-size:200% 200%;animation:skeleton-shimmer 2s linear infinite}@keyframes skeleton-shimmer{0%{background-position-x:200%}50%{background-position-x:100%}to{background-position-x:0}}@media (min-width: 600px){:host .skeleton{height:250px}}",
  p = [];
for (let t = 0; t < 256; ++t) p.push((t + 256)
  .toString(16)
  .slice(1));

function nt(t, e = 0) {
  return (p[t[e + 0]] + p[t[e + 1]] + p[t[e + 2]] + p[t[e + 3]] + "-" + p[t[e + 4]] + p[t[e + 5]] + "-" + p[t[e + 6]] + p[t[e + 7]] + "-" + p[t[e + 8]] + p[t[e + 9]] + "-" + p[t[e + 10]] + p[t[e + 11]] + p[t[e + 12]] + p[t[e + 13]] + p[t[e + 14]] + p[t[e + 15]])
    .toLowerCase()
}
let se;
const rt = new Uint8Array(16);

function at() {
  if (!se) {
    if (typeof crypto > "u" || !crypto.getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    se = crypto.getRandomValues.bind(crypto)
  }
  return se(rt)
}
const ct = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  ke = {
    randomUUID: ct
  };

function lt(t, e, i) {
  var o;
  if (ke.randomUUID && !t) return ke.randomUUID();
  t = t || {};
  const s = t.random ?? ((o = t.rng) == null ? void 0 : o.call(t)) ?? at();
  if (s.length < 16) throw new Error("Random bytes length must be >= 16");
  return s[6] = s[6] & 15 | 64, s[8] = s[8] & 63 | 128, nt(s)
}

function x(t = void 0, e) {
  return function(i, s, o) {
    const n = o.value,
      r = `${i.constructor.name}.${s}`;
    return o.value = function(...c) {
      try {
        const a = n.apply(this, c);
        return a && typeof a.then == "function" ? a.catch(l => (console.log(`[DataLayerService] Error in ${r}: `, l), t)) : a
      } catch (a) {
        return console.log(`[DataLayerService] Error in ${r}: `, a), t
      }
    }, o
  }
}
var dt = Object.defineProperty,
  ht = Object.getOwnPropertyDescriptor,
  T = (t, e, i, s) => {
    for (var o = ht(e, i), n = t.length - 1, r; n >= 0; n--)(r = t[n]) && (o = r(e, i, o) || o);
    return o && dt(e, i, o), o
  };
class w {
  static getItem(e) {
    return localStorage.getItem(e)
  }
  static setItem(e, i) {
    localStorage.setItem(e, i)
  }
  static removeItem(e) {
    localStorage.removeItem(e)
  }
  static getCookieValue(e) {
    var o;
    const s = `; ${document.cookie}`.split(`; ${e}=`);
    return s.length === 2 && ((o = s.pop()) == null ? void 0 : o.split(";")
      .shift()) || null
  }
  static getJSONParsedCookieValue(e) {
    try {
      const i = this.getCookieValue(e);
      return i ? this.parseJSON(i) : null
    } catch {
      return null
    }
  }
  static setCookie(e, i, s = "") {
    document.cookie = `${e}=${i}; ${s}`
  }
  static deleteCookie(e) {
    document.cookie = `${e}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
  }
  static parseJSON(e) {
    return e ? JSON.parse(e) : null
  }
}
T([x(null)], w, "getItem");
T([x()], w, "setItem");
T([x()], w, "removeItem");
T([x(null)], w, "getCookieValue");
T([x()], w, "setCookie");
T([x()], w, "deleteCookie");
T([x(null)], w, "parseJSON");
class ut {
  constructor(e) {
    this.registration = null, this.isReady = !1, this.config = e
  }
  async initialize() {
    var e, i, s, o;
    if (u(["ServiceWorker initialize() called"]), !("serviceWorker" in navigator)) return u(["Service Worker not supported"]), !1;
    try {
      return this.registration = await this.getOrRegisterServiceWorker(), u(["ServiceWorker initialize debug:"]), u(["- registration:", this.registration ? "Found" : "Not found"]), u(["- registration.active:", (e = this.registration) != null && e.active ? "Yes" : "No"]), u(["- registration state:", (s = (i = this.registration) == null ? void 0 : i.active) == null ? void 0 : s.state]), this.setupEventListeners(), (o = this.registration) != null && o.active ? (this.isReady = !0, u(["Service Worker already active and ready - isReady set to true"]), !0) : (u(["Service Worker not immediately active, waiting for ready..."]), await this.waitForReady(), this.isReady)
    } catch (n) {
      return u(["Service Worker initialization failed:", n]), !1
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
      i = new Promise((s, o) => setTimeout(() => o(new Error("Service Worker ready timeout")), this.config.readyTimeout));
    try {
      (await Promise.race([e, i]))
      .active && (this.isReady = !0, u(["Service Worker is ready"]))
    } catch {
      u(["Service Worker ready timeout, using fallback"])
    }
  }
  setupEventListeners() {
    this.registration && (this.registration.installing && this.registration.installing.addEventListener("statechange", () => {
      var e, i;
      u(["ServiceWorker installing state changed to:", (i = (e = this.registration) == null ? void 0 : e.installing) == null ? void 0 : i.state]), this.checkAndUpdateReadyState()
    }), this.registration.waiting && this.registration.waiting.addEventListener("statechange", () => {
      var e, i;
      u(["ServiceWorker waiting state changed to:", (i = (e = this.registration) == null ? void 0 : e.waiting) == null ? void 0 : i.state]), this.checkAndUpdateReadyState()
    }), this.registration.active && this.registration.active.addEventListener("statechange", () => {
      var e, i;
      u(["ServiceWorker active state changed to:", (i = (e = this.registration) == null ? void 0 : e.active) == null ? void 0 : i.state]), this.checkAndUpdateReadyState()
    })), navigator.serviceWorker.addEventListener("controllerchange", () => {
      u(["Service Worker controller changed"]), this.checkAndUpdateReadyState()
    })
  }
  checkAndUpdateReadyState() {
    var i;
    const e = this.isReady;
    (i = this.registration) != null && i.active && (this.isReady = !0, e || u(["ServiceWorker became ready - isReady set to true"]))
  }
  postMessage(e) {
    var s;
    const i = (s = this.registration) == null ? void 0 : s.active;
    if (!this.isReady) return u(["ServiceWorker not ready, cannot post message"]), !1;
    if (!i) return u(["No ServiceWorker target available - registration.active is null"]), !1;
    try {
      return i.postMessage(e), !0
    } catch (o) {
      return u(["Service Worker messaging failed:", o]), !1
    }
  }
  get ready() {
    return this.isReady
  }
}
var _t = Object.defineProperty,
  pt = Object.getOwnPropertyDescriptor,
  m = (t, e, i, s) => {
    for (var o = s > 1 ? void 0 : s ? pt(e, i) : e, n = t.length - 1, r; n >= 0; n--)(r = t[n]) && (o = (s ? r(e, i, o) : r(o)) || o);
    return s && o && _t(e, i, o), o
  };
const Se = new CSSStyleSheet;
Se.replaceSync(st);
const gt = "3014",
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
let g = class extends W {
  constructor() {
    super(...arguments), this.tagText = "Ads", this.showTag = !0, this.title = "", this.showLoading = !1, this.debug = !0, this.demo = !1, this.baseUrl = "", this.adsData = null, this.requestData = null, this._criteoExtractedData = null, this._showBanner = !1, this._showSkeleton = !1, this._tooltipVisible = !1, this._consent = null, this._debugCookie = !1, this._debugInstanceId = this.generateSecureRandomNumber(0, 1e3), this._requestInProgress = !1, this._serviceWorkerManager = null, this._handleClickOutside = t => {
      var s;
      const e = t.composedPath(),
        i = (s = this.shadowRoot) == null ? void 0 : s.querySelector(".ads-tag");
      i && !e.includes(i) && (this._tooltipVisible = !1, document.removeEventListener("click", this._handleClickOutside))
    }
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
    var t;
    return ((t = this._serviceWorkerManager) == null ? void 0 : t.ready) ?? !1
  }
  sendCriteoViaSW(t, e, i = "GET") {
    return this._serviceWorkerManager ? this._serviceWorkerManager.postMessage({
      type: "CRITEO_BEACON",
      payload: {
        url: t,
        data: e,
        method: i
      }
    }) : !1
  }
  consoleDebugLog(t, e) {
    if (!this._debugCookie) return;
    let i;
    try {
      i = typeof e == "object" ? JSON.stringify(e) : e, i === "{}" && (i = e)
    } catch {
      i = e
    }
    console.log(this._debugInstanceId + ": ", t + " - ", i)
  }
  isMobileWebview() {
    const t = $(it),
      e = w.getCookieValue("track_device_id");
    return t === "true" || e !== null
  }
  adsTagTemplate() {
    return v`
      <div class="ads-tag"
           @click=${this._toggleTooltip}
           @mouseenter=${this._showTooltip}
           @mouseleave=${this._hideTooltip}>
        <div id="tooltip" class="ad-tooltip">
          <div class="ads-tag__text">${this.tagText}</div>
          <div class="ads-tag__icon"></div>
        </div>
        ${this._tooltipVisible?v`
          <div class="ads-tag__tooltip">
            <div class="ads-tag__tooltip-content">
              Anzeigen sind gesponserte Produktanzeigen, die von unseren Lieferanten und Partnern finanziert werden. Wenn du auf eine Anzeige klickst, bleibst du in unserem Shop und wirst auf die Produktdetailseite weitergeleitet.
            </div>
            <div class="ads-tag__tooltip-arrow"></div>
          </div>
        `:""}
      </div>
    `
  }
  _toggleTooltip(t) {
    t.preventDefault(), t.stopPropagation(), this._tooltipVisible = !this._tooltipVisible, this._tooltipVisible ? document.addEventListener("click", this._handleClickOutside) : document.removeEventListener("click", this._handleClickOutside)
  }
  _showTooltip() {
    this._tooltipVisible = !0
  }
  _hideTooltip() {
    this._tooltipVisible = !1
  }
  adsImageTemplate() {
    if (!this._criteoExtractedData || !this._criteoExtractedData.rendering) return v``;
    const t = this._criteoExtractedData.rendering,
      i = window.innerWidth < 750,
      s = i ? t.mobile_background_image : t.desktop_background_image,
      o = i ? t.mobile_background_image_alt_text : t.desktop_background_image_alt_text,
      n = this.isMobileWebview() ? t.redirect_url_app : t.redirect_url || "",
      c = `background-image: url('${s!=null&&s.startsWith("//")?`https:${s}`:s}');`,
      a = this.getPageType()
      .pageId;
    return v`
      <a .href="${n}" target="_self" @click=${this._onClickImpression}
        class="banner banner__${a}"
        style="${c}"
        role="img"
        aria-label="${o||"Banner Ad"}">
       ${this.showTag?this.adsTagTemplate():""}
      </a>
    `
  }
  async connectedCallback() {
    super.connectedCallback(), this._debugCookie = $("bannerAdsDebugConsoleLog"), this.consoleDebugLog("DebugCookie", this._debugCookie), await this.initializeServiceWorker(), this.consoleDebugLog("ServiceWorker initialized", this.isServiceWorkerReady()), this._showSkeleton = this.showLoading, this._showSkeleton && this.consoleDebugLog("Init show Skeleton", this._showSkeleton), Z.onConsentChanged(this.handleConsentChange.bind(this))
  }
  disconnectedCallback() {
    this.consoleDebugLog("disconnectedCallback"), document.removeEventListener("click", this._handleClickOutside), super.disconnectedCallback()
  }
  async updated(t) {
    this.consoleDebugLog("updated called", t)
  }
  render() {
    return this.consoleDebugLog("render", {
      showBanner: this._showBanner,
      showSkeleton: this._showSkeleton
    }), v`
      ${this._showBanner?v`
          ${this._adsData?this.adsImageTemplate():""}
        `:v`${this._showSkeleton?v`
          <div class="skeleton"></div>`:""}`}
    `
  }
  getPageType() {
    const t = window.location.pathname,
      e = window.location.search,
      i = window.innerWidth < 750,
      s = this.getDeviceType(i),
      o = new URLSearchParams;
    let n = "Home";
    if (t === "/" || t === "") n = "Home";
    else if (t.startsWith("/q/search")) {
      n = "Search";
      const a = new URLSearchParams(e)
        .get("q") || "";
      a && o.append("keywords", a)
    } else if (t.startsWith("/h/") && (n = "Category", this.requestData)) try {
      const c = JSON.parse(this.requestData);
      if (c.categoryNode && Array.isArray(c.categoryNode)) {
        const a = c.categoryNode.join(">");
        o.append("category", a)
      }
    } catch (c) {
      this.consoleDebugLog("Failed to parse requestData:", c)
    }
    const r = ft[n][s];
    return {
      eventType: r.eventType,
      pageId: r.pageId,
      placementKey: r.placementKey,
      params: o
    }
  }
  extractCriteoRenderingData(t, e) {
    const i = {
      rendering: null,
      beacons: {
        onLoad: null,
        onView: null,
        onClick: null,
        onFileClick: null,
        onBundleBasketChange: null
      }
    };
    if (!t || !t.placements || t.placements.length === 0) return this.consoleDebugLog("extractCriteoRenderingData: No placements found"), i;
    let s = null;
    for (const o of t.placements)
      if (o[e]) {
        s = o[e];
        break
      } if (!s) return this.consoleDebugLog("extractCriteoRenderingData: No placement found for key", e), i;
    if (Array.isArray(s) && s.length > 0) {
      const o = s[0];
      o.rendering && typeof o.rendering == "object" && (i.rendering = o.rendering), o.OnLoadBeacon && (i.beacons.onLoad = o.OnLoadBeacon), o.OnViewBeacon && (i.beacons.onView = o.OnViewBeacon), o.OnClickBeacon && (i.beacons.onClick = o.OnClickBeacon), o.OnFileClickBeacon && (i.beacons.onFileClick = o.OnFileClickBeacon), o.OnBundleBasketChangeBeacon && (i.beacons.onBundleBasketChange = o.OnBundleBasketChangeBeacon)
    }
    return i
  }
  handleConsentChange(t) {
    this._consent = t, this.demo && (this._consent = {
      marketing: !0,
      statistics: !0,
      preferences: !0
    }), this.consoleDebugLog("CookieBot consent changed", this._consent), this._consent && this._consent.marketing ? this._getAd() : (this._showSkeleton = !1, this._showBanner = !1)
  }
  async fetchWithTimeout(t, e = {}, i = 5e3) {
    let s = {
        ...e
      },
      o = null;
    if (typeof window.AbortController == "function") {
      this.consoleDebugLog("fetchWithTimeout AbortController support", !0);
      const n = new AbortController;
      s = {
        ...e,
        signal: n.signal
      };
      const r = Date.now();
      this.consoleDebugLog("fetchWithTimeout startTime", r);
      const c = () => {
        const a = Date.now();
        if (a - r >= i) this.consoleDebugLog("fetchWithTimeout abortFunc aborting", {
          currTime: a,
          startTime: r,
          "currTime - startTime": a - r,
          time: i,
          timeoutId: o
        }), n.abort(), o && clearTimeout(o);
        else {
          let l = i - (a - r);
          l < 0 && (l = 0), this.consoleDebugLog("fetchWithTimeout abortFunc startTimer", {
            currTime: a,
            startTime: r,
            "currTime - startTime": a - r,
            time: i,
            timeoutId: o,
            remainingTime: l
          }), o = setTimeout(c, l)
        }
      };
      c()
    }
    return fetch(t, s)
      .then(n => {
        if (this.consoleDebugLog("fetchWithTimeout response ok", n.ok), o && clearTimeout(o), !n.ok) throw new Error(`${n.status}: ${n.statusText}`);
        return n
      })
      .catch(n => {
        throw this.consoleDebugLog("fetchWithTimeout response error", n), o && clearTimeout(o), this._showSkeleton = !1, n.name === "AbortError" ? new Error("Response timed out") : new Error(n.message)
      })
  }
  getDeviceIdCookieProp(t) {
    const e = w.getCookieValue("track_device_id") || "",
      i = decodeURIComponent(e);
    if (i.length === 0) return;
    const s = i.split(";");
    for (const o of s) {
      const [n, r] = o.split("=");
      if (n.trim() === t) return r
    }
  }
  getDeviceType(t) {
    let e;
    switch (this.getDeviceIdCookieProp("SALES_CHANNEL")) {
      case "06":
        e = "Android";
        break;
      case "07":
        e = "iOS";
        break;
      default:
        e = t ? "Mobile" : "Desktop";
        break
    }
    return e
  }
  async _getAd() {
    try {
      if (this._requestInProgress) return this.consoleDebugLog("_getAd requestInProgress"), null;
      if (this._requestInProgress = !0, this.consoleDebugLog("_getAd init"), this.consoleDebugLog("CookieBot consent", this._consent), !this._consent || this._consent && !this._consent.marketing) return this.consoleDebugLog("_getAd exit", {
        consent: this._consent
      }), this._showSkeleton = !1, this._requestInProgress = !1, null;
      const t = this.getPageType(),
        e = we("ssoId"),
        i = this.getDeviceIdCookieProp("DEVICE_ID") || "",
        s = this.isMobileWebview() ? i : w.getCookieValue("LidlID"),
        o = we("email"),
        n = await ot(o),
        r = new URLSearchParams({
          "criteo-partner-id": gt,
          "page-id": t.pageId,
          "event-type": t.eventType,
          "retailer-visitor-id": s || "",
          "customer-id": e,
          email: n
        });
      t.params.forEach((h, d) => {
        r.append(d, h)
      });
      const a = `${this.demo&&this.baseUrl?`${this.baseUrl}/t/cri/delivery/retailmedia`:"/t/cri/delivery/retailmedia"}?${r.toString()}`;
      this.consoleDebugLog("_getAd Criteo URL", a), this._showBanner = !1;
      const l = await this.fetchWithTimeout(a, {
        method: "GET"
      }, 5e3);
      if (this._showSkeleton = !1, this._requestInProgress = !1, l.ok && l.status === 200) {
        if (this.consoleDebugLog("_getAd resp.ok"), this._adsData = await l.json(), this.consoleDebugLog("_getAd CriteoData", this._adsData), !this._adsData || !this._adsData.placements || this._adsData.placements.length === 0) return this.consoleDebugLog("_getAd no placements in response"), null;
        const h = this.extractCriteoRenderingData(this._adsData, t.placementKey);
        return this.consoleDebugLog("_getAd Extracted Criteo Data", h), this._criteoExtractedData = h, this._showBanner = !0, setTimeout(() => {
          if (this.consoleDebugLog("_getAd SendBannerImpression"), this.requestUpdate(), this._bannerAdsImpression(), this.consoleDebugLog("_getAd Register Intersection observer host ", this.hostElement), !("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype)) {
            this._bannerAdsView();
            return
          }
          let f = 0,
            y = !1,
            b;
          const X = new IntersectionObserver(Ee => {
            Ee.forEach(q => {
              const le = Math.round(q.intersectionRatio * 100),
                N = Math.round(q.time);
              if (this.consoleDebugLog(`isIntersecting: ${q.isIntersecting}, Ratio:${le}, Time: ${N}`), !q.isIntersecting) {
                f && (f = 0), b && (clearTimeout(b), b = void 0), y = !1;
                return
              }
              le > 45 && (f || (this.consoleDebugLog(" Start counting ", f), f = N), this.consoleDebugLog("Passed 50%"), y = !0, b || (b = setTimeout(() => {
                this.consoleDebugLog("Send impression timeout"), this._bannerAdsView(), X.unobserve(this.hostElement)
              }, 1e3))), N - f >= 1e3 && y && (b && (clearTimeout(b), b = void 0), this.consoleDebugLog("Send impression intersection"), this._bannerAdsView(), X.unobserve(this.hostElement))
            })
          }, {
            root: null,
            rootMargin: "0px",
            threshold: [0, .5, 1]
          });
          this.hostElement && X.observe(this.hostElement)
        }, 100), h
      }
      return null
    } catch (t) {
      return this.consoleDebugLog("_getAd error", t), this._requestInProgress = !1, this._showSkeleton = !1, this.debug && console.log(t), null
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
    var i, s, o, n, r;
    const t = this.isMobileWebview() ? (n = (o = this._criteoExtractedData) == null ? void 0 : o.rendering) == null ? void 0 : n.mobile_background_image_alt_text : (s = (i = this._criteoExtractedData) == null ? void 0 : i.rendering) == null ? void 0 : s.desktop_background_image_alt_text,
      e = ((r = this.adsData) == null ? void 0 : r.creativeSlot) || "slot0";
    return {
      promotionName: "banner-ads",
      promotionId: "banner-ads",
      creativeName: t,
      creativeSlot: e
    }
  }
  _onClickImpression() {
    var e, i, s, o;
    window.dataLayerService = window.dataLayerService || [];
    const t = ((i = (e = this._criteoExtractedData) == null ? void 0 : e.rendering) == null ? void 0 : i.optional_footer_redirect_url) || "";
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
          linkType: /^(#|\/)/.test(t) || t.indexOf(window.location.hostname) > -1 ? "internal" : "external",
          linkURL: t
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
    }), (o = (s = this._criteoExtractedData) == null ? void 0 : s.beacons) != null && o.onClick && this.sendCriteoBeacon(this._criteoExtractedData.beacons.onClick)
  }
  _bannerAdsImpression() {
    var e, i, s, o;
    const t = this.isMobileWebview();
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
          adPlacementLoadBeacon: (i = (e = this._criteoExtractedData) == null ? void 0 : e.beacons) == null ? void 0 : i.onLoad
        }
      }
    }), !t && ((o = (s = this._criteoExtractedData) == null ? void 0 : s.beacons) != null && o.onLoad) && this.sendCriteoBeacon(this._criteoExtractedData.beacons.onLoad)
  }
  _bannerAdsView() {
    var i, s, o;
    const t = this.isMobileWebview(),
      {
        onView: e
      } = ((i = this._criteoExtractedData) == null ? void 0 : i.beacons) || "";
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
          adPlacementViewBeacon: (o = (s = this._criteoExtractedData) == null ? void 0 : s.beacons) == null ? void 0 : o.onView
        },
        promotions: {
          list: [{}]
        }
      }
    }), tt(() => lt()), !t && e && this.sendCriteoBeacon(e)
  }
  async sendCriteoBeacon(t) {
    if (!t) {
      this.consoleDebugLog("sendCriteoBeacon: No beacon URL provided");
      return
    }
    try {
      const i = `${this.demo&&this.baseUrl?`${this.baseUrl}/t/cri/b`:"/t/cri/b"}${t}`;
      if (this.consoleDebugLog("sendCriteoBeacon: Calling proxy URL", t), this.demo) {
        this.consoleDebugLog("sendCriteoBeacon: In demo mode - logging beacon request but not making call", {
          proxyUrl: i
        });
        return
      }
      const s = await fetch(i, {
        method: "GET"
      });
      s.ok ? this.consoleDebugLog("sendCriteoBeacon: Request successful") : this.consoleDebugLog("sendCriteoBeacon: Request failed", {
        status: s.status,
        statusText: s.statusText
      })
    } catch (e) {
      this.consoleDebugLog("sendCriteoBeacon: Error", e)
    }
  }
  generateSecureRandomNumber(t, e) {
    const i = e - t,
      s = Math.ceil(Math.log2(i + 1) / 8),
      o = new Uint8Array(s);
    return crypto.getRandomValues(o), parseInt(o.join(""), 10) % (i + 1) + t
  }
};
m([k({
  type: String
})], g.prototype, "tagText", 2);
m([k({
  type: Boolean
})], g.prototype, "showTag", 2);
m([k({
  type: String
})], g.prototype, "title", 2);
m([k({
  type: Boolean
})], g.prototype, "showLoading", 2);
m([k({
  type: Boolean
})], g.prototype, "debug", 2);
m([k({
  type: Boolean
})], g.prototype, "demo", 2);
m([k({
  type: String
})], g.prototype, "baseUrl", 2);
m([k({
  type: String,
  converter: {
    fromAttribute: t => t && JSON.parse(decodeURI(t))
  }
})], g.prototype, "adsData", 2);
m([k({
  type: String,
  converter: {
    fromAttribute: t => t && decodeURIComponent(t)
  }
})], g.prototype, "requestData", 2);
m([z()], g.prototype, "_adsData", 2);
m([z()], g.prototype, "_criteoExtractedData", 2);
m([z()], g.prototype, "_showBanner", 2);
m([z()], g.prototype, "_showSkeleton", 2);
m([z()], g.prototype, "_tooltipVisible", 2);
m([et(".banner")], g.prototype, "hostElement", 2);
g = m([Ze("banner-ads")], g);