(function() {
  const e = document.createElement("link")
    .relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) o(s);
  new MutationObserver(s => {
      for (const i of s)
        if (i.type === "childList")
          for (const r of i.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && o(r)
    })
    .observe(document, {
      childList: !0,
      subtree: !0
    });

  function t(s) {
    const i = {};
    return s.integrity && (i.integrity = s.integrity), s.referrerpolicy && (i.referrerPolicy = s.referrerpolicy), s.crossorigin === "use-credentials" ? i.credentials = "include" : s.crossorigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
  }

  function o(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = t(s);
    fetch(s.href, i)
  }
})();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pe = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
  Ie = Symbol(),
  Se = new WeakMap;
class Ze {
  constructor(e, t, o) {
    if (this._$cssResult$ = !0, o !== Ie) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
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
const Qe = n => new Ze(typeof n == "string" ? n : n + "", void 0, Ie),
  Xe = (n, e) => {
    pe ? n.adoptedStyleSheets = e.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet) : e.forEach(t => {
      const o = document.createElement("style"),
        s = window.litNonce;
      s !== void 0 && o.setAttribute("nonce", s), o.textContent = t.cssText, n.appendChild(o)
    })
  },
  $e = pe ? n => n : n => n instanceof CSSStyleSheet ? (e => {
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
const ke = window.trustedTypes,
  Ye = ke ? ke.emptyScript : "",
  Ae = window.reactiveElementPolyfillSupport,
  ue = {
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
  ae = {
    attribute: !0,
    type: String,
    converter: ue,
    reflect: !1,
    hasChanged: Me
  };
class q extends HTMLElement {
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
      const s = this._$Ep(o, t);
      s !== void 0 && (this._$Ev.set(s, o), e.push(s))
    }), e
  }
  static createProperty(e, t = ae) {
    if (t.state && (t.attribute = !1), this.finalize(), this.elementProperties.set(e, t), !t.noAccessor && !this.prototype.hasOwnProperty(e)) {
      const o = typeof e == "symbol" ? Symbol() : "__" + e,
        s = this.getPropertyDescriptor(e, o, t);
      s !== void 0 && Object.defineProperty(this.prototype, e, s)
    }
  }
  static getPropertyDescriptor(e, t, o) {
    return {
      get() {
        return this[t]
      },
      set(s) {
        const i = this[e];
        this[t] = s, this.requestUpdate(e, i, o)
      },
      configurable: !0,
      enumerable: !0
    }
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) || ae
  }
  static finalize() {
    if (this.hasOwnProperty("finalized")) return !1;
    this.finalized = !0;
    const e = Object.getPrototypeOf(this);
    if (e.finalize(), this.elementProperties = new Map(e.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
      const t = this.properties,
        o = [...Object.getOwnPropertyNames(t), ...Object.getOwnPropertySymbols(t)];
      for (const s of o) this.createProperty(s, t[s])
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const o = new Set(e.flat(1 / 0)
        .reverse());
      for (const s of o) t.unshift($e(s))
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
  _$EO(e, t, o = ae) {
    var s, i;
    const r = this.constructor._$Ep(e, o);
    if (r !== void 0 && o.reflect === !0) {
      const a = ((i = (s = o.converter) === null || s === void 0 ? void 0 : s.toAttribute) !== null && i !== void 0 ? i : ue.toAttribute)(t, o.type);
      this._$El = e, a == null ? this.removeAttribute(r) : this.setAttribute(r, a), this._$El = null
    }
  }
  _$AK(e, t) {
    var o, s;
    const i = this.constructor,
      r = i._$Ev.get(e);
    if (r !== void 0 && this._$El !== r) {
      const a = i.getPropertyOptions(r),
        l = a.converter,
        c = (s = (o = l == null ? void 0 : l.fromAttribute) !== null && o !== void 0 ? o : typeof l == "function" ? l : null) !== null && s !== void 0 ? s : ue.fromAttribute;
      this._$El = r, this[r] = c(t, a.type), this._$El = null
    }
  }
  requestUpdate(e, t, o) {
    let s = !0;
    e !== void 0 && (((o = o || this.constructor.getPropertyOptions(e))
      .hasChanged || Me)(this[e], t) ? (this._$AL.has(e) || this._$AL.set(e, t), o.reflect === !0 && this._$El !== e && (this._$EC === void 0 && (this._$EC = new Map), this._$EC.set(e, o))) : s = !1), !this.isUpdatePending && s && (this._$E_ = this._$Ej())
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
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((s, i) => this[i] = s), this._$Ei = void 0);
    let t = !1;
    const o = this._$AL;
    try {
      t = this.shouldUpdate(o), t ? (this.willUpdate(o), (e = this._$ES) === null || e === void 0 || e.forEach(s => {
        var i;
        return (i = s.hostUpdate) === null || i === void 0 ? void 0 : i.call(s)
      }), this.update(o)) : this._$Ek()
    } catch (s) {
      throw t = !1, this._$Ek(), s
    }
    t && this._$AE(o)
  }
  willUpdate(e) {}
  _$AE(e) {
    var t;
    (t = this._$ES) === null || t === void 0 || t.forEach(o => {
      var s;
      return (s = o.hostUpdated) === null || s === void 0 ? void 0 : s.call(o)
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
q.finalized = !0, q.elementProperties = new Map, q.elementStyles = [], q.shadowRootOptions = {
    mode: "open"
  }, Ae == null || Ae({
    ReactiveElement: q
  }), ((re = globalThis.reactiveElementVersions) !== null && re !== void 0 ? re : globalThis.reactiveElementVersions = [])
  .push("1.3.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var le;
const H = globalThis.trustedTypes,
  Pe = H ? H.createPolicy("lit-html", {
    createHTML: n => n
  }) : void 0,
  O = `lit$${(Math.random()+"").slice(9)}$`,
  qe = "?" + O,
  et = `<${qe}>`,
  V = document,
  N = (n = "") => V.createComment(n),
  J = n => n === null || typeof n != "object" && typeof n != "function",
  Ue = Array.isArray,
  tt = n => Ue(n) || typeof(n == null ? void 0 : n[Symbol.iterator]) == "function",
  z = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  Ee = /-->/g,
  De = />/g,
  I = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"),
  Le = /'/g,
  Te = /"/g,
  He = /^(?:script|style|textarea|title)$/i,
  nt = n => (e, ...t) => ({
    _$litType$: n,
    strings: e,
    values: t
  }),
  E = nt(1),
  G = Symbol.for("lit-noChange"),
  C = Symbol.for("lit-nothing"),
  xe = new WeakMap,
  ot = (n, e, t) => {
    var o, s;
    const i = (o = t == null ? void 0 : t.renderBefore) !== null && o !== void 0 ? o : e;
    let r = i._$litPart$;
    if (r === void 0) {
      const a = (s = t == null ? void 0 : t.renderBefore) !== null && s !== void 0 ? s : null;
      i._$litPart$ = r = new Z(e.insertBefore(N(), a), a, void 0, t != null ? t : {})
    }
    return r._$AI(n), r
  },
  U = V.createTreeWalker(V, 129, null, !1),
  st = (n, e) => {
    const t = n.length - 1,
      o = [];
    let s, i = e === 2 ? "<svg>" : "",
      r = z;
    for (let l = 0; l < t; l++) {
      const c = n[l];
      let w, p, _ = -1,
        v = 0;
      for (; v < c.length && (r.lastIndex = v, p = r.exec(c), p !== null);) v = r.lastIndex, r === z ? p[1] === "!--" ? r = Ee : p[1] !== void 0 ? r = De : p[2] !== void 0 ? (He.test(p[2]) && (s = RegExp("</" + p[2], "g")), r = I) : p[3] !== void 0 && (r = I) : r === I ? p[0] === ">" ? (r = s != null ? s : z, _ = -1) : p[1] === void 0 ? _ = -2 : (_ = r.lastIndex - p[2].length, w = p[1], r = p[3] === void 0 ? I : p[3] === '"' ? Te : Le) : r === Te || r === Le ? r = I : r === Ee || r === De ? r = z : (r = I, s = void 0);
      const P = r === I && n[l + 1].startsWith("/>") ? " " : "";
      i += r === z ? c + et : _ >= 0 ? (o.push(w), c.slice(0, _) + "$lit$" + c.slice(_) + O + P) : c + O + (_ === -2 ? (o.push(void 0), l) : P)
    }
    const a = i + (n[t] || "<?>") + (e === 2 ? "</svg>" : "");
    if (!Array.isArray(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return [Pe !== void 0 ? Pe.createHTML(a) : a, o]
  };
class K {
  constructor({
    strings: e,
    _$litType$: t
  }, o) {
    let s;
    this.parts = [];
    let i = 0,
      r = 0;
    const a = e.length - 1,
      l = this.parts,
      [c, w] = st(e, t);
    if (this.el = K.createElement(c, o), U.currentNode = this.el.content, t === 2) {
      const p = this.el.content,
        _ = p.firstChild;
      _.remove(), p.append(..._.childNodes)
    }
    for (;
      (s = U.nextNode()) !== null && l.length < a;) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) {
          const p = [];
          for (const _ of s.getAttributeNames())
            if (_.endsWith("$lit$") || _.startsWith(O)) {
              const v = w[r++];
              if (p.push(_), v !== void 0) {
                const P = s.getAttribute(v.toLowerCase() + "$lit$")
                  .split(O),
                  L = /([.?@])?(.*)/.exec(v);
                l.push({
                  type: 1,
                  index: i,
                  name: L[2],
                  strings: P,
                  ctor: L[1] === "." ? rt : L[1] === "?" ? lt : L[1] === "@" ? dt : ne
                })
              } else l.push({
                type: 6,
                index: i
              })
            } for (const _ of p) s.removeAttribute(_)
        }
        if (He.test(s.tagName)) {
          const p = s.textContent.split(O),
            _ = p.length - 1;
          if (_ > 0) {
            s.textContent = H ? H.emptyScript : "";
            for (let v = 0; v < _; v++) s.append(p[v], N()), U.nextNode(), l.push({
              type: 2,
              index: ++i
            });
            s.append(p[_], N())
          }
        }
      } else if (s.nodeType === 8)
        if (s.data === qe) l.push({
          type: 2,
          index: i
        });
        else {
          let p = -1;
          for (;
            (p = s.data.indexOf(O, p + 1)) !== -1;) l.push({
            type: 7,
            index: i
          }), p += O.length - 1
        } i++
    }
  }
  static createElement(e, t) {
    const o = V.createElement("template");
    return o.innerHTML = e, o
  }
}

function F(n, e, t = n, o) {
  var s, i, r, a;
  if (e === G) return e;
  let l = o !== void 0 ? (s = t._$Cl) === null || s === void 0 ? void 0 : s[o] : t._$Cu;
  const c = J(e) ? void 0 : e._$litDirective$;
  return (l == null ? void 0 : l.constructor) !== c && ((i = l == null ? void 0 : l._$AO) === null || i === void 0 || i.call(l, !1), c === void 0 ? l = void 0 : (l = new c(n), l._$AT(n, t, o)), o !== void 0 ? ((r = (a = t)
    ._$Cl) !== null && r !== void 0 ? r : a._$Cl = [])[o] = l : t._$Cu = l), l !== void 0 && (e = F(n, l._$AS(n, e.values), l, o)), e
}
class it {
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
      parts: s
    } = this._$AD, i = ((t = e == null ? void 0 : e.creationScope) !== null && t !== void 0 ? t : V)
      .importNode(o, !0);
    U.currentNode = i;
    let r = U.nextNode(),
      a = 0,
      l = 0,
      c = s[0];
    for (; c !== void 0;) {
      if (a === c.index) {
        let w;
        c.type === 2 ? w = new Z(r, r.nextSibling, this, e) : c.type === 1 ? w = new c.ctor(r, c.name, c.strings, this, e) : c.type === 6 && (w = new ct(r, this, e)), this.v.push(w), c = s[++l]
      }
      a !== (c == null ? void 0 : c.index) && (r = U.nextNode(), a++)
    }
    return i
  }
  m(e) {
    let t = 0;
    for (const o of this.v) o !== void 0 && (o.strings !== void 0 ? (o._$AI(e, o, t), t += o.strings.length - 2) : o._$AI(e[t])), t++
  }
}
class Z {
  constructor(e, t, o, s) {
    var i;
    this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = o, this.options = s, this._$C_ = (i = s == null ? void 0 : s.isConnected) === null || i === void 0 || i
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
    e = F(this, e, t), J(e) ? e === C || e == null || e === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : e !== this._$AH && e !== G && this.T(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.k(e) : tt(e) ? this.S(e) : this.T(e)
  }
  j(e, t = this._$AB) {
    return this._$AA.parentNode.insertBefore(e, t)
  }
  k(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.j(e))
  }
  T(e) {
    this._$AH !== C && J(this._$AH) ? this._$AA.nextSibling.data = e : this.k(V.createTextNode(e)), this._$AH = e
  }
  $(e) {
    var t;
    const {
      values: o,
      _$litType$: s
    } = e, i = typeof s == "number" ? this._$AC(e) : (s.el === void 0 && (s.el = K.createElement(s.h, this.options)), s);
    if (((t = this._$AH) === null || t === void 0 ? void 0 : t._$AD) === i) this._$AH.m(o);
    else {
      const r = new it(i, this),
        a = r.p(this.options);
      r.m(o), this.k(a), this._$AH = r
    }
  }
  _$AC(e) {
    let t = xe.get(e.strings);
    return t === void 0 && xe.set(e.strings, t = new K(e)), t
  }
  S(e) {
    Ue(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let o, s = 0;
    for (const i of e) s === t.length ? t.push(o = new Z(this.j(N()), this.j(N()), this, this.options)) : o = t[s], o._$AI(i), s++;
    s < t.length && (this._$AR(o && o._$AB.nextSibling, s), t.length = s)
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var o;
    for ((o = this._$AP) === null || o === void 0 || o.call(this, !1, !0, t); e && e !== this._$AB;) {
      const s = e.nextSibling;
      e.remove(), e = s
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$C_ = e, (t = this._$AP) === null || t === void 0 || t.call(this, e))
  }
}
class ne {
  constructor(e, t, o, s, i) {
    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = i, o.length > 2 || o[0] !== "" || o[1] !== "" ? (this._$AH = Array(o.length - 1)
      .fill(new String), this.strings = o) : this._$AH = C
  }
  get tagName() {
    return this.element.tagName
  }
  get _$AU() {
    return this._$AM._$AU
  }
  _$AI(e, t = this, o, s) {
    const i = this.strings;
    let r = !1;
    if (i === void 0) e = F(this, e, t, 0), r = !J(e) || e !== this._$AH && e !== G, r && (this._$AH = e);
    else {
      const a = e;
      let l, c;
      for (e = i[0], l = 0; l < i.length - 1; l++) c = F(this, a[o + l], t, l), c === G && (c = this._$AH[l]), r || (r = !J(c) || c !== this._$AH[l]), c === C ? e = C : e !== C && (e += (c != null ? c : "") + i[l + 1]), this._$AH[l] = c
    }
    r && !s && this.P(e)
  }
  P(e) {
    e === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e != null ? e : "")
  }
}
class rt extends ne {
  constructor() {
    super(...arguments), this.type = 3
  }
  P(e) {
    this.element[this.name] = e === C ? void 0 : e
  }
}
const at = H ? H.emptyScript : "";
class lt extends ne {
  constructor() {
    super(...arguments), this.type = 4
  }
  P(e) {
    e && e !== C ? this.element.setAttribute(this.name, at) : this.element.removeAttribute(this.name)
  }
}
class dt extends ne {
  constructor(e, t, o, s, i) {
    super(e, t, o, s, i), this.type = 5
  }
  _$AI(e, t = this) {
    var o;
    if ((e = (o = F(this, e, t, 0)) !== null && o !== void 0 ? o : C) === G) return;
    const s = this._$AH,
      i = e === C && s !== C || e.capture !== s.capture || e.once !== s.once || e.passive !== s.passive,
      r = e !== C && (s === C || i);
    i && this.element.removeEventListener(this.name, this, s), r && this.element.addEventListener(this.name, this, e), this._$AH = e
  }
  handleEvent(e) {
    var t, o;
    typeof this._$AH == "function" ? this._$AH.call((o = (t = this.options) === null || t === void 0 ? void 0 : t.host) !== null && o !== void 0 ? o : this.element, e) : this._$AH.handleEvent(e)
  }
}
class ct {
  constructor(e, t, o) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = o
  }
  get _$AU() {
    return this._$AM._$AU
  }
  _$AI(e) {
    F(this, e)
  }
}
const Oe = window.litHtmlPolyfillSupport;
Oe == null || Oe(K, Z), ((le = globalThis.litHtmlVersions) !== null && le !== void 0 ? le : globalThis.litHtmlVersions = [])
  .push("2.2.7");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var de, ce;
class j extends q {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = ot(t, this.renderRoot, this.renderOptions)
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
    return G
  }
}
j.finalized = !0, j._$litElement$ = !0, (de = globalThis.litElementHydrateSupport) === null || de === void 0 || de.call(globalThis, {
  LitElement: j
});
const Re = globalThis.litElementPolyfillSupport;
Re == null || Re({
  LitElement: j
});
((ce = globalThis.litElementVersions) !== null && ce !== void 0 ? ce : globalThis.litElementVersions = [])
.push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht = n => e => typeof e == "function" ? ((t, o) => (window.customElements.define(t, o), o))(n, e) : ((t, o) => {
  const {
    kind: s,
    elements: i
  } = o;
  return {
    kind: s,
    elements: i,
    finisher(r) {
      window.customElements.define(t, r)
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

function x(n) {
  return (e, t) => t !== void 0 ? ((o, s, i) => {
    s.constructor.createProperty(i, o)
  })(n, e, t) : ut(n, e)
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Q(n) {
  return x({
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
  var s;
  if (o === void 0) {
    const i = (s = t.originalKey) !== null && s !== void 0 ? s : t.key,
      r = e != null ? {
        kind: "method",
        placement: "prototype",
        key: i,
        descriptor: e(t.key)
      } : {
        ...t,
        key: i
      };
    return n != null && (r.finisher = function(a) {
      n(a, i)
    }), r
  } {
    const i = t.constructor;
    e !== void 0 && Object.defineProperty(t, o, e(o)), n == null || n(i, o)
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function gt(n, e) {
  return pt({
    descriptor: t => {
      const o = {
        get() {
          var s, i;
          return (i = (s = this.renderRoot) === null || s === void 0 ? void 0 : s.querySelector(n)) !== null && i !== void 0 ? i : null
        },
        enumerable: !0,
        configurable: !0
      };
      if (e) {
        const s = typeof t == "symbol" ? Symbol() : "__" + t;
        o.get = function() {
          var i, r;
          return this[s] === void 0 && (this[s] = (r = (i = this.renderRoot) === null || i === void 0 ? void 0 : i.querySelector(n)) !== null && r !== void 0 ? r : null), this[s]
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
var M = (n => (n.PDP_Pageload = "PDP_Pageload", n.PDP_Click = "PDP_Click", n.PLP_Product_Click = "PLP_Product_Click", n.PDP_Social_Click = "PDP_Social_Click", n.PDP_Image_Click = "PDP_Image_Click", n.PDP_Section_EnterViewport = "PDP_Section_EnterViewport", n.PDP_Recommendation_Load = "PDP_Recommendation_Load", n.PDP_Recommendation_EnterViewport = "PDP_Recommendation_EnterViewport", n.PDP_Recommendation_Click = "PDP_Recommendation_Click", n.PDP_Rating_Click = "PDP_Rating_Click", n.PDP_Information_Load = "PDP_Information_Load", n.General_Pageload = "General_Pageload", n.General_Recommendation_Load = "General_Recommendation_Load", n.General_RecommendationProduct_EnterViewport = "General_RecommendationProduct_EnterViewport", n.General_Product_Click = "General_Product_Click", n.General_Section_EnterViewport = "General_Section_EnterViewport", n.General_Teaser_Click = "General_Teaser_Click", n.General_Link_Click = "General_Link_Click", n.PLP_Pageload = "PLP_Pageload", n.PLP_FilterSelect_Click = "PLP_FilterSelect_Click", n.General_SearchTermConfirm_Click = "General_SearchTermConfirm_Click", n.Cart_Pageload = "Cart_Pageload", n.Cart_Button_Click = "Cart_Button_Click", n.Cart_Success_Pageload = "Cart_Success_Pageload", n.Banner_Promotion_Load = "Banner_Promotion_Load", n.General_Product_View = "General_Product_View", n.General_Promotion_View = "General_Promotion_View", n.General_Promotion_View_Split = "General_Promotion_View_Split", n.General_Promotion_Load = "General_Promotion_Load", n.General_Promotion_Click = "General_Promotion_Click", n.General_Navigation_Click = "General_Navigation_Click", n.Wishlist_Pageload = "Wishlist_Pageload", n.Wishlist_Button_Click = "Wishlist_Button_Click", n.StoreSearch_Pageload = "StoreSearch_Pageload", n.StoreSearch_Click = "StoreSearch_Click", n.StoreSearchDP_Pageload = "StoreSearchDP_Pageload", n.StoreSearchDP_Click = "StoreSearchDP_Click", n.MyAccount_Pageload = "MyAccount_Pageload", n.MyAccount_Click = "MyAccount_Click", n.Flyer_Click = "Flyer_Click", n.Flyer_View = "Flyer_View", n.Flyer_Categories_Select = "Flyer_Categories_Select", n.Kameleoon_Experiment = "Kameleoon_Experiment", n.Order_Cancellation_Click = "Order_Cancellation_Click", n.Order_ViewDetails_Click = "Order_ViewDetails_Click", n.Order_Invoice_Download_Click = "Order_Invoice_Download_Click", n.Order_Return_Click = "Order_Return_Click", n.Order_Cancellation_Confirmation = "Order_Cancellation_Confirmation", n.Order_Return_Confirmation = "Order_Return_Confirmation", n.Start_Login_Click = "Start_Login_Click", n.Login_Button_Click = "Login_Button_Click", n.Login_Success = "Login_Success", n.Failed_Login = "Failed_Login", n.Login_Link_Click = "Login_Link_Click", n.Forgotten_Password_Click = "Forgotten_Password_Click", n.Password_Reset = "Password_Reset", n.Register_Link_Click = "Register_Link_Click", n.Finish_Registration_Click = "Finish_Registration_Click", n.Registration_Success = "Registration_Success", n.Send_Confirmation_Email = "Send_Confirmation_Email", n.Failed_Registration = "Failed_Registration", n.Error_Message = "Error_Message", n.Newsletter_Form_Submit = "Newsletter_Form_Submit", n.Newsletter_Form_Success = "Newsletter_Form_Success", n))(M || {});
const T = {
  statistics: "C0003",
  preferences: "C0002",
  marketing: "C0004"
};
class b {
  static getCookieValue(e) {
    var o;
    const t = "(^|;) ?" + e + "=([^;]*)(;|$)";
    try {
      const s = (o = document == null ? void 0 : document.cookie) == null ? void 0 : o.match(t),
        i = s && s[2];
      return i || ""
    } catch {
      return ""
    }
  }
  static getCookieBotConsentCookie() {
    const e = "CookieConsent";
    try {
      const t = b.getCookieValue(e);
      if (!t) return null;
      const s = decodeURIComponent(t)
        .replace(/%2c/g, ",")
        .replace(/'/g, '"')
        .replace(/([{\[,])\s*([a-zA-Z0-9_]+?):/g, '$1"$2":'),
        i = JSON.parse(s);
      return i.hasOwnProperty("marketing") && i.hasOwnProperty("statistics") && i.hasOwnProperty("preferences") ? i : null
    } catch {
      return null
    }
  }
  static getOneTrustConsentCookie() {
    const e = "OptanonConsent";
    try {
      const t = b.getCookieValue(e);
      if (!t) return null;
      const s = decodeURIComponent(t)
        .split("&")
        .reduce((r, a) => {
          const [l, c] = a.split("=");
          return r[l] = c, r
        }, {}),
        {
          groups: i
        } = s;
      return i ? {
        marketing: i.includes(`${T.marketing}:1`),
        statistics: i.includes(`${T.statistics}:1`),
        preferences: i.includes(`${T.preferences}:1`)
      } : null
    } catch {
      return null
    }
  }
  static getConsentCookie() {
    const e = b.getCookieBotConsentCookie();
    return b.getOneTrustConsentCookie() || e
  }
  static getWindowsConsent() {
    var o, s, i, r, a;
    const e = (o = window == null ? void 0 : window.Cookiebot) == null ? void 0 : o.hasResponse;
    return b.OneTrustResponse() ? {
      marketing: (s = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : s.includes(T.marketing),
      statistics: (i = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : i.includes(T.statistics),
      preferences: (r = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : r.includes(T.preferences)
    } : e ? (a = window == null ? void 0 : window.Cookiebot) == null ? void 0 : a.consent : null
  }
  static OneTrustResponse() {
    var e;
    return (window == null ? void 0 : window.OneTrust) && (window == null ? void 0 : window.OneTrust) instanceof HTMLElement ? null : (e = window == null ? void 0 : window.OneTrust) == null ? void 0 : e.IsAlertBoxClosedAndValid()
  }
  static onConsent() {
    return new Promise(e => {
      var w;
      const t = b.getConsentCookie(),
        s = b.getWindowsConsent() || t;
      if ((b.OneTrustResponse() || ((w = window == null ? void 0 : window.Cookiebot) == null ? void 0 : w.hasResponse)) && s) {
        e(s);
        return
      }
      let i, r = 0;
      const a = 300,
        l = () => {
          var p, _, v, P;
          clearTimeout(i), window.removeEventListener("CookieConsentLoad", l), b.OneTrustResponse() ? e({
            marketing: (p = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : p.includes(T.marketing),
            statistics: (_ = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : _.includes(T.statistics),
            preferences: (v = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : v.includes(T.preferences)
          }) : e((P = window == null ? void 0 : window.Cookiebot) == null ? void 0 : P.consent)
        },
        c = () => {
          var _, v, P, L;
          if (!(b.OneTrustResponse() || ((_ = window == null ? void 0 : window.Cookiebot) == null ? void 0 : _.hasResponse)) && r < a) {
            r++, i = setTimeout(c, 1e3);
            return
          }
          if (b.OneTrustResponse() || ((v = window == null ? void 0 : window.Cookiebot) == null ? void 0 : v.hasResponse)) {
            l();
            return
          }
          if (b.OneTrustResponse() === !1 && ((P = window == null ? void 0 : window.OneTrust) == null || P.OnConsentChanged(() => l())), ((L = window == null ? void 0 : window.Cookiebot) == null ? void 0 : L.hasResponse) === !1) {
            window.addEventListener("CookiebotOnLoad", l);
            return
          }
          l()
        };
      c()
    })
  }
  static async getNecessaryUUID4CookieIfNotPresent() {
    await fetch("/t/gtm/uuid4-cookie")
  }
}(function() {
  if (typeof document > "u" || "adoptedStyleSheets" in document) return;

  function n(d, u) {
    for (var h = 0; h < u.length; h++) {
      var g = u[h];
      g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(d, g.key, g)
    }
  }

  function e(d, u, h) {
    return u && n(d.prototype, u), h && n(d, h), d
  }
  var t = "ShadyCSS" in window && !window.ShadyCSS.nativeShadow,
    o = [],
    s = [],
    i = [],
    r = new WeakMap,
    a = new WeakMap,
    l = new WeakMap,
    c = new WeakMap,
    w = new WeakMap,
    p = new WeakMap,
    _ = {
      loaded: !1
    },
    v = {
      body: null,
      CSSStyleSheet: null
    },
    P = CSSStyleSheet,
    L = /@import/;

  function Ge(d, u) {
    var h = u === document ? "Document" : "ShadowRoot";
    if (!Array.isArray(d)) throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + h + ": Iterator getter is not callable.");
    if (!d.every(we)) throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + h + ": Failed to convert value to 'CSSStyleSheet'");
    var g = d.filter(function(f, m) {
      return d.indexOf(f) === m
    });
    return r.set(u, g), g
  }

  function ge() {
    return document.readyState === "loading"
  }

  function _e(d) {
    return r.get(d.parentNode === document.documentElement ? document : d)
  }

  function fe(d) {
    d === void 0 && (d = "");
    var u = d.match(L) || [],
      h = d;
    return u.length && (console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"), u.forEach(function(g) {
      h = h.replace(g, "")
    })), h
  }
  var Fe = ["addImport", "addPageRule", "addRule", "deleteRule", "insertRule", "removeImport", "removeRule"],
    X = "Illegal invocation";

  function me(d) {
    d.replace = function() {
      return Promise.reject(new DOMException("Can't call replace on non-constructed CSSStyleSheets."))
    }, d.replaceSync = function() {
      throw new DOMException("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")
    }
  }

  function ve(d) {
    var u = a.get(d),
      h = u.adopters,
      g = u.basicStyleElement;
    h.forEach(function(f) {
      f.innerHTML = g.innerHTML
    })
  }
  var Y = function() {
    function d() {
      var h = document.createElement("style");
      _.loaded ? v.body.appendChild(h) : (document.head.appendChild(h), h.disabled = !0, o.push(h)), a.set(this, {
        adopters: new Map,
        actions: [],
        basicStyleElement: h
      })
    }
    var u = d.prototype;
    return u.replace = function(g) {
      var f = fe(g);
      try {
        if (!a.has(this)) throw new TypeError(X);
        var m = a.get(this),
          y = m.basicStyleElement;
        return y.innerHTML = f, ve(this), Promise.resolve(this)
      } catch (k) {
        return Promise.reject(k)
      }
    }, u.replaceSync = function(g) {
      var f = fe(g);
      if (!a.has(this)) throw new TypeError(X);
      var m = a.get(this),
        y = m.basicStyleElement;
      return y.innerHTML = f, ve(this), this
    }, e(d, [{
      key: "cssRules",
      get: function() {
        if (!a.has(this)) throw new TypeError(X);
        var g = a.get(this),
          f = g.basicStyleElement;
        return f.sheet.cssRules
      }
    }]), d
  }();
  Fe.forEach(function(d) {
    Y.prototype[d] = function() {
      if (!a.has(this)) throw new TypeError(X);
      var u = arguments,
        h = a.get(this),
        g = h.adopters,
        f = h.actions,
        m = h.basicStyleElement,
        y = m.sheet[d].apply(m.sheet, u);
      return g.forEach(function(k) {
        k.sheet && k.sheet[d].apply(k.sheet, u)
      }), f.push([d, u]), y
    }
  });

  function we(d) {
    return d && d.constructor === Y || d instanceof P || d instanceof v.CSSStyleSheet
  }
  Object.defineProperty(Y, Symbol.hasInstance, {
    configurable: !0,
    value: we
  });

  function ee(d) {
    for (var u = document.createDocumentFragment(), h = _e(d), g = w.get(d), f = 0, m = h.length; f < m; f++) {
      var y = a.get(h[f]),
        k = y.adopters,
        D = y.basicStyleElement,
        S = k.get(d);
      S ? (g.disconnect(), u.appendChild(S), (!S.innerHTML || S.sheet && !S.sheet.cssText) && (S.innerHTML = D.innerHTML), g.observe()) : (S = document.createElement("style"), S.innerHTML = D.innerHTML, l.set(S, d), p.set(S, 0), k.set(d, S), u.appendChild(S)), d === document.head && s.push(S)
    }
    d.insertBefore(u, d.lastChild);
    for (var B = 0, oe = h.length; B < oe; B++) {
      var W = a.get(h[B]),
        se = W.adopters,
        R = W.actions,
        te = se.get(d),
        je = p.get(te);
      if (R.length > 0) {
        for (var ie = je, Ne = R.length; ie < Ne; ie++) {
          var Ce = R[ie],
            Je = Ce[0],
            Ke = Ce[1];
          te.sheet[Je].apply(te.sheet, Ke)
        }
        p.set(te, R.length - 1)
      }
    }
  }

  function Be(d, u) {
    for (var h = _e(d), g = 0, f = u.length; g < f; g++)
      if (!(h.indexOf(u[g]) > -1)) {
        var m = a.get(u[g]),
          y = m.adopters,
          k = w.get(d),
          D = y.get(d);
        D || (D = y.get(document.head)), k.disconnect(), D.parentNode.removeChild(D), k.observe()
      }
  }

  function We(d) {
    if (!!document)
      for (var u = 0, h = d.length; u < h; u++) {
        for (var g = d[u], f = g.addedNodes, m = g.removedNodes, y = 0, k = m.length; y < k; y++) {
          var D = l.get(m[y]);
          D && ee(D)
        }
        if (!t)
          for (var S = 0, B = f.length; S < B; S++)
            for (var oe = document.createNodeIterator(f[S], NodeFilter.SHOW_ELEMENT, function(se) {
                var R = c.get(se);
                return R && R.adoptedStyleSheets.length > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
              }, null, !1), W = void 0; W = oe.nextNode();) ee(c.get(W))
      }
  }

  function ye(d) {
    var u = new MutationObserver(We),
      h = {
        observe: function() {
          u.observe(d, {
            childList: !0,
            subtree: !0
          })
        },
        disconnect: function() {
          u.disconnect()
        }
      };
    w.set(d, h), h.observe()
  }

  function be() {
    var d = document.createElement("iframe");
    d.hidden = !0, document.body.appendChild(d), v.body = d.contentWindow.document.body, v.CSSStyleSheet = d.contentWindow.CSSStyleSheet, me(d.contentWindow.CSSStyleSheet.prototype), ye(document.body), _.loaded = !0;
    for (var u = document.createDocumentFragment(), h = 0, g = o.length; h < g; h++) o[h].disabled = !1, u.appendChild(o[h]);
    v.body.appendChild(u);
    for (var f = 0, m = s.length; f < m; f++) u.appendChild(s[f]);
    document.body.insertBefore(u, document.body.firstChild);
    for (var y = 0, k = i.length; y < k; y++) ee(i[y]);
    i.length = 0, o.length = 0, s.length = 0
  }

  function ze() {
    var d = {
      configurable: !0,
      get: function() {
        return r.get(this) || []
      },
      set: function(g) {
        var f = r.get(this) || [];
        Ge(g, this);
        var m = this === document ? ge() ? this.head : this.body : this,
          y = "isConnected" in m ? m.isConnected : document.body.contains(m);
        y ? window.requestAnimationFrame(function() {
          ee(m), Be(m, f)
        }) : i.push(m)
      }
    };
    if (Object.defineProperty(Document.prototype, "adoptedStyleSheets", d), typeof ShadowRoot < "u") {
      var u = Element.prototype.attachShadow;
      Element.prototype.attachShadow = function() {
        var h = t ? this : u.apply(this, arguments);
        return c.set(this, h), ye(h), h
      }, Object.defineProperty(ShadowRoot.prototype, "adoptedStyleSheets", d)
    }
  }
  me(P.prototype), window.CSSStyleSheet = Y, ze(), ge() ? document.addEventListener("DOMContentLoaded", be) : be()
})();
const _t = `.ad-tooltip--theme{font-size:12/16rem;font-weight:400;border-radius:2/16rem;padding:16/16rem;color:#4e5761;text-align:left;background-color:#fafafa;border:1px solid #E3E4E5}@media (min-width: 1280px){.ad-tooltip--theme{font-size:14/16rem}}:host{display:block;font-family:LidlFontCondPro,Trebuchet MS,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:16/16rem;line-height:1.4;color:#353b42;border-radius:2/16rem}:host a{display:flex;text-decoration:none;color:unset}:host .banner{margin:1rem auto;position:relative}:host .banner--large{box-shadow:0 2px 4px #00000026}@media (min-width: 600px){:host .banner--large{max-width:970px}}:host .banner--small{aspect-ratio:auto 4 / 3;width:100%}:host .banner-new{border-radius:1rem;background-color:#fff;box-shadow:0 2px 4px #00000026}:host .banner-new__wrapper{position:relative}:host .banner-new__img{width:100%;height:100%;border-style:none;box-shadow:0 2px 4px #00000026}:host .banner-new__label{padding:.5rem;border-radius:0 0 1rem 1rem}:host .banner-new__headline{word-wrap:break-word;overflow:hidden;line-height:120%;display:-webkit-box;min-height:3rem}:host .banner-old{display:block;position:relative;background-color:#fff;overflow:hidden}:host .banner-old__img{width:100%;height:100%;border-style:none}:host .banner-old__label{position:absolute;bottom:0;left:0;width:100%;background-color:#ffffffb3;padding:.5rem 1rem;color:#353b42}:host .banner-old__headline{word-wrap:break-word;overflow:hidden;max-height:3rem;line-height:1.4rem;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}:host .ads-tag{display:flex;position:absolute;bottom:0;right:0;padding:4px;background-color:#fff}:host .ads-tag__img{width:100%;height:100%;border-style:none}:host .ads-tag__icon{margin-left:4px;margin-top:3px;width:12px;height:12px;mask-image:url(/cdn/assets/icons/1.0.0/information-circle.svg);-webkit-mask-image:url(/cdn/assets/icons/1.0.0/information-circle.svg);background-color:#4e5761}:host .ads-tag__text{font-size:.75rem;font-weight:400}@media (min-width: 1280px){:host .ads-tag__text{font-size:.875rem}}:host .rounded-corners{border-radius:1rem 1rem 0 0}:host .ad-tooltip{background:none;border:none;padding:0;margin:0;cursor:pointer;color:inherit;display:inline-flex}:host .skeleton{width:100%;max-width:320px;height:150px;position:relative;margin:1rem auto;display:flex;vertical-align:middle;cursor:progress;background-color:#e3e4e6;background-image:linear-gradient(90deg,transparent 25%,#fff 50%,transparent 75%);background-size:200% 200%;animation:skeleton-shimmer 2s linear infinite}@keyframes skeleton-shimmer{0%{background-position-x:200%}50%{background-position-x:100%}to{background-position-x:0%}}@media (min-width: 600px){:host .skeleton{max-width:970px;height:250px}}
`;
var ft = Object.defineProperty,
  mt = Object.getOwnPropertyDescriptor,
  A = (n, e, t, o) => {
    for (var s = o > 1 ? void 0 : o ? mt(e, t) : e, i = n.length - 1, r; i >= 0; i--)(r = n[i]) && (s = (o ? r(e, t, s) : r(s)) || s);
    return o && s && ft(e, t, s), s
  };
const Ve = new CSSStyleSheet;
Ve.replaceSync(_t);
let $ = class extends j {
  constructor() {
    super(...arguments), this.tagText = "Ads", this.showTag = !0, this.size = "large", this.title = "", this.showLoading = !1, this.debug = !1, this.adsData = null, this.requestData = "", this._showNewDesign = !1, this._showBanner = !1, this._showSkeleton = !1, this._adexSegments = [], this._mql = window.matchMedia && window.matchMedia("(max-width: 600px)"), this._debugCookie = !1, this._debugInstanceId = this.generateSecureRandomNumber(0, 1e3), this._requestInProgress = !1, this._toggleDesign = n => {
      this.consoleDebugLog("_toggleDesign", n), this._showNewDesign = n && n.matches
    }
  }
  static get styles() {
    return [Ve]
  }
  consoleDebugLog(n, e) {
    if (!this._debugCookie) return;
    let t;
    try {
      t = typeof e == "object" ? JSON.stringify(e) : e, t === "{}" && (t = e)
    } catch {
      t = e
    }
    console.log(this._debugInstanceId + ": ", n + " - ", t)
  }
  adsTagTemplate() {
    return E`
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
    return this.consoleDebugLog("adsImageTemplate", this._pqData), E`
      <a .href="${(n=this._pqData)==null?void 0:n.clickthru}" target="_self"
         @click=${this._onClickImpression}>
        <img src="${(e=this._pqData)==null?void 0:e.asset_url}" alt="Banner Ads" class="ads-tag__img">
      </a>
      ${this.showTag?this.adsTagTemplate():""}
    `
  }
  newDesignTemplate() {
    var n, e;
    return this.consoleDebugLog("newDesignTemplate", this._pqData), E`
      <div class="banner-new">
        <a .href="${(n=this._pqData)==null?void 0:n.clickthru}" target="_self"
           @click=${this._onClickImpression}>
          <img src="${(e=this._pqData)==null?void 0:e.asset_url}" alt="Banner Ads" class="banner-new__img rounded-corners">
        </a>
        <div class="banner-new__label">
          <h4 class="banner-new__headline">
            ${this.title}
          </h4>
          <div class="banner-new__wrapper">
            ${this.adsTagTemplate()}
          </div>
        </div>
      </div>
    `
  }
  oldDesignTemplate() {
    var n, e;
    return this.consoleDebugLog("oldDesignTemplate", this._pqData), E`
      <div class="banner-old">
        <a .href="${(n=this._pqData)==null?void 0:n.clickthru}" target="_self"
           @click=${this._onClickImpression}>
          <img src="${(e=this._pqData)==null?void 0:e.asset_url}" alt="Banner Ads"
               class="banner-old__img">
        </a>
        ${this.title?E`
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
    return this.consoleDebugLog("regularAdsTemplate", this._pqData), E`
      ${this._pqData?this.adsImageTemplate():""}
    `
  }
  async connectedCallback() {
    super.connectedCallback(), this._debugCookie = b.getCookieValue("bannerAdsDebugConsoleLog"), this.consoleDebugLog("DebugCookie", this._debugCookie), this._showSkeleton = this.showLoading, this._showSkeleton && this.consoleDebugLog("Init show Skeleton", this._showSkeleton), await this._getAd(), this._toggleDesign(this._mql), this._mql && this._mql.addEventListener && this._mql.addEventListener("change", this._toggleDesign)
  }
  disconnectedCallback() {
    this.consoleDebugLog("disconnectedCallback"), super.disconnectedCallback(), this._mql && this._mql.removeEventListener && this._mql.removeEventListener("change", this._toggleDesign)
  }
  async updated(n) {
    if (this.consoleDebugLog("updated called", n), n.has("requestData")) {
      const e = n.get("requestData");
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
    }), E`
      ${this._showBanner?E`
          <div class="banner">
            ${this.size==="large"?E`
                  <div class="banner banner--large">
                    ${this.regularAdsTemplate()}
                  </div>
                `:E`
                  <div class="banner banner--small">
                    ${this._showNewDesign?this.newDesignTemplate():this.oldDesignTemplate()}
                  </div>
                `}
          </div>
        `:E`${this._showSkeleton?E`
          <div class="skeleton"></div>`:""}`}
    `
  }
  setAdSessionId() {
    const n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    let e = new Array(36),
      t = 0,
      o;
    for (let r = 0; r < 36; r++) r === 8 || r === 13 || r === 18 || r === 23 ? e[r] = "-" : r === 14 ? e[r] = "4" : (t <= 2 && (t = 33554432 + this.generateSecureRandomNumber(0, 16777216 - 1)), o = t & 15, t = t >> 4, e[r] = n[r === 19 ? o & 3 | 8 : o]);
    const s = e.join(""),
      i = "; max-age=" + 24 * 60 * 60 * 730;
    return document.cookie = "adSessionId=" + s + i + "; secure; path=/", s
  }
  async fetchWithTimeout(n, e = {}, t = 5e3) {
    let o = {
        ...e
      },
      s = null;
    if (typeof window.AbortController == "function") {
      this.consoleDebugLog("fetchWithTimeout AbortController support", !0);
      const i = new AbortController;
      o = {
        ...e,
        signal: i.signal
      };
      const r = Date.now();
      this.consoleDebugLog("fetchWithTimeout startTime", r);
      const a = () => {
        const l = Date.now();
        if (l - r >= t) this.consoleDebugLog("fetchWithTimeout abortFunc aborting", {
          currTime: l,
          startTime: r,
          "currTime - startTime": l - r,
          time: t,
          timeoutId: s
        }), i.abort(), s && clearTimeout(s);
        else {
          let c = t - (l - r);
          c < 0 && (c = 0), this.consoleDebugLog("fetchWithTimeout abortFunc startTimer", {
            currTime: l,
            startTime: r,
            "currTime - startTime": l - r,
            time: t,
            timeoutId: s,
            remainingTime: c
          }), s = setTimeout(a, c)
        }
      };
      a()
    }
    return fetch(n, o)
      .then(i => {
        if (this.consoleDebugLog("fetchWithTimeout response ok", i.ok), s && clearTimeout(s), !i.ok) throw new Error(`${i.status}: ${i.statusText}`);
        return i
      })
      .catch(i => {
        throw this.consoleDebugLog("fetchWithTimeout response error", i), s && clearTimeout(s), this._showSkeleton = !1, i.name === "AbortError" ? new Error("Response timed out") : new Error(i.message)
      })
  }
  async _getAdexSegments() {
    var i, r;
    const e = `https://${window.location.hostname.indexOf("qa")>-1?"dmp-qa":"dmp"}.lidl.de/rt/v1/segments`,
      t = b.getCookieValue("axd"),
      o = 0,
      s = this._consent = this.debug ? {
        marketing: !0
      } : await b.onConsent();
    try {
      const a = await this.fetchWithTimeout(`${e}?axd_fuid=${t}&axd_pid=${o}&adex_consent=${s.marketing?1:0}`, {
        method: "GET"
      }, 300);
      if (a.status !== 200) {
        this.consoleDebugLog("AdexSegments error", a);
        return
      }
      const l = await a.json();
      this._adexSegments = (r = (i = l == null ? void 0 : l.data) == null ? void 0 : i.attributes) == null ? void 0 : r.segments, this.consoleDebugLog("AdexSegments data", this._adexSegments)
    } catch (a) {
      this.consoleDebugLog("_getAdexSegments error", a), this.debug && console.log(a)
    }
  }
  async _getAd() {
    var n;
    try {
      if (this._requestInProgress) {
        this.consoleDebugLog("_getAd requestInProgress");
        return
      }
      if (this._requestInProgress = !0, this.consoleDebugLog("_getAd init"), this._consent || (this.consoleDebugLog("_getAd get consent"), this._consent = this.debug ? {
          marketing: !0
        } : await b.onConsent()), this.consoleDebugLog("CookieBot consent", this._consent), !this._consent || this._consent && !this._consent.marketing || !this.requestData) {
        this.consoleDebugLog("_getAd exit", {
          requestData: this.requestData,
          consent: this._consent
        }), this._showSkeleton = !1, this._requestInProgress = !1;
        return
      }
      const e = b.getCookieValue("adSessionId") || this.setAdSessionId();
      this.consoleDebugLog("_getAd adSessionId", e), await this._getAdexSegments();
      const t = JSON.parse(this.requestData);
      t.session = e, t.audiences = this._adexSegments, this.consoleDebugLog("_getAd request", t), this._showBanner = !1;
      const o = await this.fetchWithTimeout("/t/piq/request", {
        method: "POST",
        body: JSON.stringify(t)
      }, 500);
      if (this._showSkeleton = !1, this._requestInProgress = !1, o.ok && o.status === 200) {
        if (this.consoleDebugLog("_getAd resp.ok"), this._pqData = await o.json()
          .then(s => s[0]), this.consoleDebugLog("_getAd PqData", this._pqData), !(this._pqData && ((n = this._pqData) == null ? void 0 : n.clickthru))) return;
        this._showBanner = !0, setTimeout(() => {
          if (this.consoleDebugLog("_getAd SendBannerImpression"), this.requestUpdate(), this._bannerAdsImpression(), this.consoleDebugLog("_getAd Register Intersection observer host ", this.hostElement), !("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype)) {
            this._bannerAdsView();
            return
          }
          let i = 0,
            r = !1,
            a;
          const l = new IntersectionObserver(c => {
            c.forEach(w => {
              const p = Math.round(w.intersectionRatio * 100),
                _ = Math.round(w.time);
              if (this.consoleDebugLog(`isIntersecting: ${w.isIntersecting}, Ratio:${p}, Time: ${_}`), !w.isIntersecting) {
                i && (i = 0), a && (clearTimeout(a), a = void 0), r = !1;
                return
              }
              p > 45 && (i || (this.consoleDebugLog(" Start counting ", i), i = _), this.consoleDebugLog("Passed 50%"), r = !0, a || (a = setTimeout(() => {
                this.consoleDebugLog("Send impression timeout"), this._bannerAdsView(), l.unobserve(this.hostElement)
              }, 1e3))), _ - i >= 1e3 && r && (a && (clearTimeout(a), a = void 0), this.consoleDebugLog("Send impression intersection"), this._bannerAdsView(), l.unobserve(this.hostElement))
            })
          }, {
            root: null,
            rootMargin: "0px",
            threshold: [0, .5, 1]
          });
          l.observe(this.hostElement)
        }, 100)
      }
    } catch (e) {
      this.consoleDebugLog("_getAd error", e), this._requestInProgress = !1, this._showSkeleton = !1, this.debug && console.log(e)
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
    var t, o, s, i, r, a;
    window.dataLayerService = window.dataLayerService || [];
    const n = ((t = this._pqData) == null ? void 0 : t.clickthru) || "";
    window.dataLayerService.push({
      scenarioName: M.General_Promotion_Click,
      collections: {
        eventInfo: {
          eventAction: M.General_Promotion_Click,
          eventCategory: "click",
          eventInteractionType: "click"
        },
        click: {
          linkName: "banner-ads",
          linkType: /^(#|\/)/.test(n) || n.indexOf(window.location.hostname) > -1 ? "internal" : "external",
          linkURL: (o = this._pqData) == null ? void 0 : o.clickthru
        },
        content: {
          contentType: "banner",
          contentComponentSource: "ads"
        },
        promotions: this._promotionImpression()
      }
    }), window.dataLayer = window.dataLayer || [];
    const {
      dataLayer: e
    } = window;
    e.push({
      event: "EECpromotionClick",
      ecommerce: {
        promoClick: {
          promotions: [{
            id: (s = this._pqData) == null ? void 0 : s.campaign_id,
            name: (i = this.adsData) == null ? void 0 : i.promotionName,
            creative: (r = this.adsData) == null ? void 0 : r.creativeName,
            position: (a = this.adsData) == null ? void 0 : a.creativeSlot
          }]
        }
      }
    })
  }
  _bannerAdsImpression() {
    window.dataLayerService = window.dataLayerService || [], window.dataLayerService.push({
      scenarioName: M.Banner_Promotion_Load,
      collections: {
        eventInfo: {
          eventAction: M.Banner_Promotion_Load,
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
  _bannerAdsView() {
    var e, t, o, s;
    window.dataLayerService = window.dataLayerService || [], window.dataLayerService.push({
      scenarioName: M.General_Promotion_View,
      collections: {
        eventInfo: {
          eventAction: M.General_Promotion_View,
          eventCategory: "view",
          eventInteractionType: "view"
        },
        content: {
          contentType: "banner",
          contentComponentSource: "ads"
        },
        promotions: this._promotionImpression()
      }
    }), window.dataLayer = window.dataLayer || [];
    const {
      dataLayer: n
    } = window;
    n.push({
      event: "EECpromotionImpression",
      ecommerce: {
        promoView: {
          promotions: [{
            id: (e = this._pqData) == null ? void 0 : e.campaign_id,
            name: (t = this.adsData) == null ? void 0 : t.promotionName,
            creative: (o = this.adsData) == null ? void 0 : o.creativeName,
            position: (s = this.adsData) == null ? void 0 : s.creativeSlot
          }]
        }
      }
    })
  }
  generateSecureRandomNumber(n, e) {
    const t = e - n,
      o = Math.ceil(Math.log2(t + 1) / 8),
      s = new Uint8Array(o);
    return crypto.getRandomValues(s), parseInt(s.join(""), 10) % (t + 1) + n
  }
};
A([x({
  type: String
})], $.prototype, "tagText", 2);
A([x({
  type: Boolean
})], $.prototype, "showTag", 2);
A([x({
  type: String
})], $.prototype, "size", 2);
A([x({
  type: String
})], $.prototype, "title", 2);
A([x({
  type: Boolean
})], $.prototype, "showLoading", 2);
A([x({
  type: Boolean
})], $.prototype, "debug", 2);
A([x({
  type: String,
  converter: {
    fromAttribute: n => n && JSON.parse(decodeURI(n))
  }
})], $.prototype, "adsData", 2);
A([x({
  type: String,
  converter: {
    fromAttribute: n => n && decodeURI(n)
  }
})], $.prototype, "requestData", 2);
A([Q()], $.prototype, "_pqData", 2);
A([Q()], $.prototype, "_showNewDesign", 2);
A([Q()], $.prototype, "_showBanner", 2);
A([Q()], $.prototype, "_showSkeleton", 2);
A([Q()], $.prototype, "_adexSegments", 2);
A([gt(".banner", !1)], $.prototype, "hostElement", 2);
$ = A([ht("banner-ads")], $);