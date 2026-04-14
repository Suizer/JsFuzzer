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
    return o.integrity && (s.integrity = o.integrity), o.referrerpolicy && (s.referrerPolicy = o.referrerpolicy), o.crossorigin === "use-credentials" ? s.credentials = "include" : o.crossorigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
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
const pe = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
  Ie = Symbol(),
  $e = new WeakMap;
class Ze {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== Ie) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (pe && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = $e.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet)
        .replaceSync(this.cssText), n && $e.set(t, e))
    }
    return e
  }
  toString() {
    return this.cssText
  }
}
const Qe = i => new Ze(typeof i == "string" ? i : i + "", void 0, Ie),
  Xe = (i, e) => {
    pe ? i.adoptedStyleSheets = e.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet) : e.forEach(t => {
      const n = document.createElement("style"),
        o = window.litNonce;
      o !== void 0 && n.setAttribute("nonce", o), n.textContent = t.cssText, i.appendChild(n)
    })
  },
  Ce = pe ? i => i : i => i instanceof CSSStyleSheet ? (e => {
    let t = "";
    for (const n of e.cssRules) t += n.cssText;
    return Qe(t)
  })(i) : i;
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
    return this.elementProperties.forEach((t, n) => {
      const o = this._$Ep(n, t);
      o !== void 0 && (this._$Ev.set(o, n), e.push(o))
    }), e
  }
  static createProperty(e, t = ae) {
    if (t.state && (t.attribute = !1), this.finalize(), this.elementProperties.set(e, t), !t.noAccessor && !this.prototype.hasOwnProperty(e)) {
      const n = typeof e == "symbol" ? Symbol() : "__" + e,
        o = this.getPropertyDescriptor(e, n, t);
      o !== void 0 && Object.defineProperty(this.prototype, e, o)
    }
  }
  static getPropertyDescriptor(e, t, n) {
    return {
      get() {
        return this[t]
      },
      set(o) {
        const s = this[e];
        this[t] = o, this.requestUpdate(e, s, n)
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
        n = [...Object.getOwnPropertyNames(t), ...Object.getOwnPropertySymbols(t)];
      for (const o of n) this.createProperty(o, t[o])
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0)
        .reverse());
      for (const o of n) t.unshift(Ce(o))
    } else e !== void 0 && t.push(Ce(e));
    return t
  }
  static _$Ep(e, t) {
    const n = t.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0
  }
  u() {
    var e;
    this._$E_ = new Promise(t => this.enableUpdating = t), this._$AL = new Map, this._$Eg(), this.requestUpdate(), (e = this.constructor.h) === null || e === void 0 || e.forEach(t => t(this))
  }
  addController(e) {
    var t, n;
    ((t = this._$ES) !== null && t !== void 0 ? t : this._$ES = [])
    .push(e), this.renderRoot !== void 0 && this.isConnected && ((n = e.hostConnected) === null || n === void 0 || n.call(e))
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
      var n;
      return (n = t.hostConnected) === null || n === void 0 ? void 0 : n.call(t)
    })
  }
  enableUpdating(e) {}
  disconnectedCallback() {
    var e;
    (e = this._$ES) === null || e === void 0 || e.forEach(t => {
      var n;
      return (n = t.hostDisconnected) === null || n === void 0 ? void 0 : n.call(t)
    })
  }
  attributeChangedCallback(e, t, n) {
    this._$AK(e, n)
  }
  _$EO(e, t, n = ae) {
    var o, s;
    const r = this.constructor._$Ep(e, n);
    if (r !== void 0 && n.reflect === !0) {
      const d = ((s = (o = n.converter) === null || o === void 0 ? void 0 : o.toAttribute) !== null && s !== void 0 ? s : ue.toAttribute)(t, n.type);
      this._$El = e, d == null ? this.removeAttribute(r) : this.setAttribute(r, d), this._$El = null
    }
  }
  _$AK(e, t) {
    var n, o;
    const s = this.constructor,
      r = s._$Ev.get(e);
    if (r !== void 0 && this._$El !== r) {
      const d = s.getPropertyOptions(r),
        l = d.converter,
        c = (o = (n = l == null ? void 0 : l.fromAttribute) !== null && n !== void 0 ? n : typeof l == "function" ? l : null) !== null && o !== void 0 ? o : ue.fromAttribute;
      this._$El = r, this[r] = c(t, d.type), this._$El = null
    }
  }
  requestUpdate(e, t, n) {
    let o = !0;
    e !== void 0 && (((n = n || this.constructor.getPropertyOptions(e))
      .hasChanged || Me)(this[e], t) ? (this._$AL.has(e) || this._$AL.set(e, t), n.reflect === !0 && this._$El !== e && (this._$EC === void 0 && (this._$EC = new Map), this._$EC.set(e, n))) : o = !1), !this.isUpdatePending && o && (this._$E_ = this._$Ej())
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
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((o, s) => this[s] = o), this._$Ei = void 0);
    let t = !1;
    const n = this._$AL;
    try {
      t = this.shouldUpdate(n), t ? (this.willUpdate(n), (e = this._$ES) === null || e === void 0 || e.forEach(o => {
        var s;
        return (s = o.hostUpdate) === null || s === void 0 ? void 0 : s.call(o)
      }), this.update(n)) : this._$Ek()
    } catch (o) {
      throw t = !1, this._$Ek(), o
    }
    t && this._$AE(n)
  }
  willUpdate(e) {}
  _$AE(e) {
    var t;
    (t = this._$ES) === null || t === void 0 || t.forEach(n => {
      var o;
      return (o = n.hostUpdated) === null || o === void 0 ? void 0 : o.call(n)
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
    this._$EC !== void 0 && (this._$EC.forEach((t, n) => this._$EO(n, this[n], t)), this._$EC = void 0), this._$Ek()
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
const U = globalThis.trustedTypes,
  Pe = U ? U.createPolicy("lit-html", {
    createHTML: i => i
  }) : void 0,
  O = `lit$${(Math.random()+"").slice(9)}$`,
  qe = "?" + O,
  et = `<${qe}>`,
  G = document,
  F = (i = "") => G.createComment(i),
  J = i => i === null || typeof i != "object" && typeof i != "function",
  He = Array.isArray,
  tt = i => He(i) || typeof(i == null ? void 0 : i[Symbol.iterator]) == "function",
  z = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  Ee = /-->/g,
  De = />/g,
  I = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"),
  Te = /'/g,
  Le = /"/g,
  Ue = /^(?:script|style|textarea|title)$/i,
  nt = i => (e, ...t) => ({
    _$litType$: i,
    strings: e,
    values: t
  }),
  E = nt(1),
  V = Symbol.for("lit-noChange"),
  b = Symbol.for("lit-nothing"),
  xe = new WeakMap,
  ot = (i, e, t) => {
    var n, o;
    const s = (n = t == null ? void 0 : t.renderBefore) !== null && n !== void 0 ? n : e;
    let r = s._$litPart$;
    if (r === void 0) {
      const d = (o = t == null ? void 0 : t.renderBefore) !== null && o !== void 0 ? o : null;
      s._$litPart$ = r = new Z(e.insertBefore(F(), d), d, void 0, t != null ? t : {})
    }
    return r._$AI(i), r
  },
  H = G.createTreeWalker(G, 129, null, !1),
  it = (i, e) => {
    const t = i.length - 1,
      n = [];
    let o, s = e === 2 ? "<svg>" : "",
      r = z;
    for (let l = 0; l < t; l++) {
      const c = i[l];
      let w, p, f = -1,
        v = 0;
      for (; v < c.length && (r.lastIndex = v, p = r.exec(c), p !== null);) v = r.lastIndex, r === z ? p[1] === "!--" ? r = Ee : p[1] !== void 0 ? r = De : p[2] !== void 0 ? (Ue.test(p[2]) && (o = RegExp("</" + p[2], "g")), r = I) : p[3] !== void 0 && (r = I) : r === I ? p[0] === ">" ? (r = o != null ? o : z, f = -1) : p[1] === void 0 ? f = -2 : (f = r.lastIndex - p[2].length, w = p[1], r = p[3] === void 0 ? I : p[3] === '"' ? Le : Te) : r === Le || r === Te ? r = I : r === Ee || r === De ? r = z : (r = I, o = void 0);
      const P = r === I && i[l + 1].startsWith("/>") ? " " : "";
      s += r === z ? c + et : f >= 0 ? (n.push(w), c.slice(0, f) + "$lit$" + c.slice(f) + O + P) : c + O + (f === -2 ? (n.push(void 0), l) : P)
    }
    const d = s + (i[t] || "<?>") + (e === 2 ? "</svg>" : "");
    if (!Array.isArray(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return [Pe !== void 0 ? Pe.createHTML(d) : d, n]
  };
class K {
  constructor({
    strings: e,
    _$litType$: t
  }, n) {
    let o;
    this.parts = [];
    let s = 0,
      r = 0;
    const d = e.length - 1,
      l = this.parts,
      [c, w] = it(e, t);
    if (this.el = K.createElement(c, n), H.currentNode = this.el.content, t === 2) {
      const p = this.el.content,
        f = p.firstChild;
      f.remove(), p.append(...f.childNodes)
    }
    for (;
      (o = H.nextNode()) !== null && l.length < d;) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) {
          const p = [];
          for (const f of o.getAttributeNames())
            if (f.endsWith("$lit$") || f.startsWith(O)) {
              const v = w[r++];
              if (p.push(f), v !== void 0) {
                const P = o.getAttribute(v.toLowerCase() + "$lit$")
                  .split(O),
                  T = /([.?@])?(.*)/.exec(v);
                l.push({
                  type: 1,
                  index: s,
                  name: T[2],
                  strings: P,
                  ctor: T[1] === "." ? rt : T[1] === "?" ? lt : T[1] === "@" ? dt : te
                })
              } else l.push({
                type: 6,
                index: s
              })
            } for (const f of p) o.removeAttribute(f)
        }
        if (Ue.test(o.tagName)) {
          const p = o.textContent.split(O),
            f = p.length - 1;
          if (f > 0) {
            o.textContent = U ? U.emptyScript : "";
            for (let v = 0; v < f; v++) o.append(p[v], F()), H.nextNode(), l.push({
              type: 2,
              index: ++s
            });
            o.append(p[f], F())
          }
        }
      } else if (o.nodeType === 8)
        if (o.data === qe) l.push({
          type: 2,
          index: s
        });
        else {
          let p = -1;
          for (;
            (p = o.data.indexOf(O, p + 1)) !== -1;) l.push({
            type: 7,
            index: s
          }), p += O.length - 1
        } s++
    }
  }
  static createElement(e, t) {
    const n = G.createElement("template");
    return n.innerHTML = e, n
  }
}

function N(i, e, t = i, n) {
  var o, s, r, d;
  if (e === V) return e;
  let l = n !== void 0 ? (o = t._$Cl) === null || o === void 0 ? void 0 : o[n] : t._$Cu;
  const c = J(e) ? void 0 : e._$litDirective$;
  return (l == null ? void 0 : l.constructor) !== c && ((s = l == null ? void 0 : l._$AO) === null || s === void 0 || s.call(l, !1), c === void 0 ? l = void 0 : (l = new c(i), l._$AT(i, t, n)), n !== void 0 ? ((r = (d = t)
    ._$Cl) !== null && r !== void 0 ? r : d._$Cl = [])[n] = l : t._$Cu = l), l !== void 0 && (e = N(i, l._$AS(i, e.values), l, n)), e
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
        content: n
      },
      parts: o
    } = this._$AD, s = ((t = e == null ? void 0 : e.creationScope) !== null && t !== void 0 ? t : G)
      .importNode(n, !0);
    H.currentNode = s;
    let r = H.nextNode(),
      d = 0,
      l = 0,
      c = o[0];
    for (; c !== void 0;) {
      if (d === c.index) {
        let w;
        c.type === 2 ? w = new Z(r, r.nextSibling, this, e) : c.type === 1 ? w = new c.ctor(r, c.name, c.strings, this, e) : c.type === 6 && (w = new ct(r, this, e)), this.v.push(w), c = o[++l]
      }
      d !== (c == null ? void 0 : c.index) && (r = H.nextNode(), d++)
    }
    return s
  }
  m(e) {
    let t = 0;
    for (const n of this.v) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++
  }
}
class Z {
  constructor(e, t, n, o) {
    var s;
    this.type = 2, this._$AH = b, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = o, this._$C_ = (s = o == null ? void 0 : o.isConnected) === null || s === void 0 || s
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
    e = N(this, e, t), J(e) ? e === b || e == null || e === "" ? (this._$AH !== b && this._$AR(), this._$AH = b) : e !== this._$AH && e !== V && this.T(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.k(e) : tt(e) ? this.S(e) : this.T(e)
  }
  j(e, t = this._$AB) {
    return this._$AA.parentNode.insertBefore(e, t)
  }
  k(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.j(e))
  }
  T(e) {
    this._$AH !== b && J(this._$AH) ? this._$AA.nextSibling.data = e : this.k(G.createTextNode(e)), this._$AH = e
  }
  $(e) {
    var t;
    const {
      values: n,
      _$litType$: o
    } = e, s = typeof o == "number" ? this._$AC(e) : (o.el === void 0 && (o.el = K.createElement(o.h, this.options)), o);
    if (((t = this._$AH) === null || t === void 0 ? void 0 : t._$AD) === s) this._$AH.m(n);
    else {
      const r = new st(s, this),
        d = r.p(this.options);
      r.m(n), this.k(d), this._$AH = r
    }
  }
  _$AC(e) {
    let t = xe.get(e.strings);
    return t === void 0 && xe.set(e.strings, t = new K(e)), t
  }
  S(e) {
    He(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, o = 0;
    for (const s of e) o === t.length ? t.push(n = new Z(this.j(F()), this.j(F()), this, this.options)) : n = t[o], n._$AI(s), o++;
    o < t.length && (this._$AR(n && n._$AB.nextSibling, o), t.length = o)
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) === null || n === void 0 || n.call(this, !1, !0, t); e && e !== this._$AB;) {
      const o = e.nextSibling;
      e.remove(), e = o
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$C_ = e, (t = this._$AP) === null || t === void 0 || t.call(this, e))
  }
}
class te {
  constructor(e, t, n, o, s) {
    this.type = 1, this._$AH = b, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = s, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1)
      .fill(new String), this.strings = n) : this._$AH = b
  }
  get tagName() {
    return this.element.tagName
  }
  get _$AU() {
    return this._$AM._$AU
  }
  _$AI(e, t = this, n, o) {
    const s = this.strings;
    let r = !1;
    if (s === void 0) e = N(this, e, t, 0), r = !J(e) || e !== this._$AH && e !== V, r && (this._$AH = e);
    else {
      const d = e;
      let l, c;
      for (e = s[0], l = 0; l < s.length - 1; l++) c = N(this, d[n + l], t, l), c === V && (c = this._$AH[l]), r || (r = !J(c) || c !== this._$AH[l]), c === b ? e = b : e !== b && (e += (c != null ? c : "") + s[l + 1]), this._$AH[l] = c
    }
    r && !o && this.P(e)
  }
  P(e) {
    e === b ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e != null ? e : "")
  }
}
class rt extends te {
  constructor() {
    super(...arguments), this.type = 3
  }
  P(e) {
    this.element[this.name] = e === b ? void 0 : e
  }
}
const at = U ? U.emptyScript : "";
class lt extends te {
  constructor() {
    super(...arguments), this.type = 4
  }
  P(e) {
    e && e !== b ? this.element.setAttribute(this.name, at) : this.element.removeAttribute(this.name)
  }
}
class dt extends te {
  constructor(e, t, n, o, s) {
    super(e, t, n, o, s), this.type = 5
  }
  _$AI(e, t = this) {
    var n;
    if ((e = (n = N(this, e, t, 0)) !== null && n !== void 0 ? n : b) === V) return;
    const o = this._$AH,
      s = e === b && o !== b || e.capture !== o.capture || e.once !== o.once || e.passive !== o.passive,
      r = e !== b && (o === b || s);
    s && this.element.removeEventListener(this.name, this, o), r && this.element.addEventListener(this.name, this, e), this._$AH = e
  }
  handleEvent(e) {
    var t, n;
    typeof this._$AH == "function" ? this._$AH.call((n = (t = this.options) === null || t === void 0 ? void 0 : t.host) !== null && n !== void 0 ? n : this.element, e) : this._$AH.handleEvent(e)
  }
}
class ct {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n
  }
  get _$AU() {
    return this._$AM._$AU
  }
  _$AI(e) {
    N(this, e)
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
class B extends q {
  constructor() {
    super(...arguments), this.renderOptions = {
      host: this
    }, this._$Do = void 0
  }
  createRenderRoot() {
    var e, t;
    const n = super.createRenderRoot();
    return (e = (t = this.renderOptions)
      .renderBefore) !== null && e !== void 0 || (t.renderBefore = n.firstChild), n
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
    return V
  }
}
B.finalized = !0, B._$litElement$ = !0, (de = globalThis.litElementHydrateSupport) === null || de === void 0 || de.call(globalThis, {
  LitElement: B
});
const Re = globalThis.litElementPolyfillSupport;
Re == null || Re({
  LitElement: B
});
((ce = globalThis.litElementVersions) !== null && ce !== void 0 ? ce : globalThis.litElementVersions = [])
.push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht = i => e => typeof e == "function" ? ((t, n) => (window.customElements.define(t, n), n))(i, e) : ((t, n) => {
  const {
    kind: o,
    elements: s
  } = n;
  return {
    kind: o,
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
  return (e, t) => t !== void 0 ? ((n, o, s) => {
    o.constructor.createProperty(s, n)
  })(i, e, t) : ut(i, e)
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ne(i) {
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
}) => (t, n) => {
  var o;
  if (n === void 0) {
    const s = (o = t.originalKey) !== null && o !== void 0 ? o : t.key,
      r = e != null ? {
        kind: "method",
        placement: "prototype",
        key: s,
        descriptor: e(t.key)
      } : {
        ...t,
        key: s
      };
    return i != null && (r.finisher = function(d) {
      i(d, s)
    }), r
  } {
    const s = t.constructor;
    e !== void 0 && Object.defineProperty(t, n, e(n)), i == null || i(s, n)
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
      const n = {
        get() {
          var o, s;
          return (s = (o = this.renderRoot) === null || o === void 0 ? void 0 : o.querySelector(i)) !== null && s !== void 0 ? s : null
        },
        enumerable: !0,
        configurable: !0
      };
      if (e) {
        const o = typeof t == "symbol" ? Symbol() : "__" + t;
        n.get = function() {
          var s, r;
          return this[o] === void 0 && (this[o] = (r = (s = this.renderRoot) === null || s === void 0 ? void 0 : s.querySelector(i)) !== null && r !== void 0 ? r : null), this[o]
        }
      }
      return n
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
var M = (i => (i.PDP_Pageload = "PDP_Pageload", i.PDP_Click = "PDP_Click", i.PDP_Social_Click = "PDP_Social_Click", i.PDP_Image_Click = "PDP_Image_Click", i.PDP_Section_EnterViewport = "PDP_Section_EnterViewport", i.PDP_Recommendation_Load = "PDP_Recommendation_Load", i.PDP_Recommendation_EnterViewport = "PDP_Recommendation_EnterViewport", i.PDP_Recommendation_Click = "PDP_Recommendation_Click", i.PDP_Rating_Click = "PDP_Rating_Click", i.PDP_Information_Load = "PDP_Information_Load", i.General_Pageload = "General_Pageload", i.General_Recommendation_Load = "General_Recommendation_Load", i.General_RecommendationProduct_EnterViewport = "General_RecommendationProduct_EnterViewport", i.General_Product_Click = "General_Product_Click", i.General_Section_EnterViewport = "General_Section_EnterViewport", i.General_Teaser_Click = "General_Teaser_Click", i.General_Link_Click = "General_Link_Click", i.PLP_Pageload = "PLP_Pageload", i.PLP_FilterSelect_Click = "PLP_FilterSelect_Click", i.General_SearchTermConfirm_Click = "General_SearchTermConfirm_Click", i.Cart_Pageload = "Cart_Pageload", i.Cart_Button_Click = "Cart_Button_Click", i.Cart_Success_Pageload = "Cart_Success_Pageload", i.General_Detection_Pageload = "General_Detection_Pageload", i.General_Product_View = "General_Product_View", i.General_Promotion_View = "General_Promotion_View", i.General_Promotion_Load = "General_Promotion_Load", i.General_Promotion_Click = "General_Promotion_Click", i.Wishlist_Pageload = "Wishlist_Pageload", i.Wishlist_Button_Click = "Wishlist_Button_Click", i.StoreSearch_Pageload = "StoreSearch_Pageload", i.StoreSearch_Click = "StoreSearch_Click", i.StoreSearchDP_Pageload = "StoreSearchDP_Pageload", i.StoreSearchDP_Click = "StoreSearchDP_Click", i.MyAccount_Pageload = "MyAccount_Pageload", i.MyAccount_Click = "MyAccount_Click", i))(M || {});
const L = {
  statistics: "C0003",
  preferences: "C0002",
  marketing: "C0004"
};
class $ {
  static getCookieValue(e) {
    var n;
    const t = "(^|;) ?" + e + "=([^;]*)(;|$)";
    try {
      const o = (n = document == null ? void 0 : document.cookie) == null ? void 0 : n.match(t),
        s = o && o[2];
      return s || ""
    } catch {
      return ""
    }
  }
  static getCookieBotConsentCookie() {
    const e = "CookieConsent";
    try {
      const t = $.getCookieValue(e);
      if (!t) return null;
      const o = decodeURIComponent(t)
        .replace(/%2c/g, ",")
        .replace(/'/g, '"')
        .replace(/([{\[,])\s*([a-zA-Z0-9_]+?):/g, '$1"$2":'),
        s = JSON.parse(o);
      return s.hasOwnProperty("marketing") && s.hasOwnProperty("statistics") && s.hasOwnProperty("preferences") ? s : null
    } catch {
      return null
    }
  }
  static getOneTrustConsentCookie() {
    const e = "OptanonConsent";
    try {
      const t = $.getCookieValue(e);
      if (!t) return null;
      const o = decodeURIComponent(t)
        .split("&")
        .reduce((r, d) => {
          const [l, c] = d.split("=");
          return r[l] = c, r
        }, {}),
        {
          groups: s
        } = o;
      return s ? {
        marketing: s.includes(`${L.marketing}:1`),
        statistics: s.includes(`${L.statistics}:1`),
        preferences: s.includes(`${L.preferences}:1`)
      } : null
    } catch {
      return null
    }
  }
  static getConsentCookie() {
    const e = $.getCookieBotConsentCookie();
    return $.getOneTrustConsentCookie() || e
  }
  static getWindowsConsent() {
    var n, o, s, r, d;
    const e = (n = window == null ? void 0 : window.Cookiebot) == null ? void 0 : n.hasResponse;
    return $.OneTrustResponse() ? {
      marketing: (o = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : o.includes(L.marketing),
      statistics: (s = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : s.includes(L.statistics),
      preferences: (r = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : r.includes(L.preferences)
    } : e ? (d = window == null ? void 0 : window.Cookiebot) == null ? void 0 : d.consent : null
  }
  static OneTrustResponse() {
    var e;
    return (window == null ? void 0 : window.OneTrust) && (window == null ? void 0 : window.OneTrust) instanceof HTMLElement ? null : (e = window == null ? void 0 : window.OneTrust) == null ? void 0 : e.IsAlertBoxClosedAndValid()
  }
  static onConsent() {
    return new Promise(e => {
      var w;
      const t = $.getConsentCookie(),
        o = $.getWindowsConsent() || t;
      if (($.OneTrustResponse() || ((w = window == null ? void 0 : window.Cookiebot) == null ? void 0 : w.hasResponse)) && o) {
        e(o);
        return
      }
      let s, r = 0;
      const d = 30,
        l = () => {
          var p, f, v, P;
          clearTimeout(s), window.removeEventListener("CookieConsentLoad", l), $.OneTrustResponse() ? e({
            marketing: (p = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : p.includes(L.marketing),
            statistics: (f = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : f.includes(L.statistics),
            preferences: (v = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : v.includes(L.preferences)
          }) : e((P = window == null ? void 0 : window.Cookiebot) == null ? void 0 : P.consent)
        },
        c = () => {
          var f, v, P, T;
          if (!($.OneTrustResponse() || ((f = window == null ? void 0 : window.Cookiebot) == null ? void 0 : f.hasResponse)) && r < d) {
            r++, s = setTimeout(c, 1e3);
            return
          }
          if ($.OneTrustResponse() || ((v = window == null ? void 0 : window.Cookiebot) == null ? void 0 : v.hasResponse)) {
            l();
            return
          }
          if ($.OneTrustResponse() === !1 && ((P = window == null ? void 0 : window.OneTrust) == null || P.OnConsentChanged(() => l())), ((T = window == null ? void 0 : window.Cookiebot) == null ? void 0 : T.hasResponse) === !1) {
            window.addEventListener("CookiebotOnLoad", l);
            return
          }
          l()
        };
      c()
    })
  }
  static async getNecessaryUUID4CookieIfNotPresent() {
    window.location.hostname.indexOf("lidl.de") !== -1 && (this.getCookieValue("LidlID") || await fetch("/t/gtm/uuid4-cookie"))
  }
}(function() {
  if (typeof document > "u" || "adoptedStyleSheets" in document) return;

  function i(a, u) {
    for (var h = 0; h < u.length; h++) {
      var g = u[h];
      g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(a, g.key, g)
    }
  }

  function e(a, u, h) {
    return u && i(a.prototype, u), h && i(a, h), a
  }
  var t = "ShadyCSS" in window && !window.ShadyCSS.nativeShadow,
    n = [],
    o = [],
    s = [],
    r = new WeakMap,
    d = new WeakMap,
    l = new WeakMap,
    c = new WeakMap,
    w = new WeakMap,
    p = new WeakMap,
    f = {
      loaded: !1
    },
    v = {
      body: null,
      CSSStyleSheet: null
    },
    P = CSSStyleSheet,
    T = /@import/;

  function Ve(a, u) {
    var h = u === document ? "Document" : "ShadowRoot";
    if (!Array.isArray(a)) throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + h + ": Iterator getter is not callable.");
    if (!a.every(we)) throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + h + ": Failed to convert value to 'CSSStyleSheet'");
    var g = a.filter(function(_, m) {
      return a.indexOf(_) === m
    });
    return r.set(u, g), g
  }

  function ge() {
    return document.readyState === "loading"
  }

  function fe(a) {
    return r.get(a.parentNode === document.documentElement ? document : a)
  }

  function _e(a) {
    a === void 0 && (a = "");
    var u = a.match(T) || [],
      h = a;
    return u.length && (console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"), u.forEach(function(g) {
      h = h.replace(g, "")
    })), h
  }
  var Ne = ["addImport", "addPageRule", "addRule", "deleteRule", "insertRule", "removeImport", "removeRule"],
    Q = "Illegal invocation";

  function me(a) {
    a.replace = function() {
      return Promise.reject(new DOMException("Can't call replace on non-constructed CSSStyleSheets."))
    }, a.replaceSync = function() {
      throw new DOMException("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")
    }
  }

  function ve(a) {
    var u = d.get(a),
      h = u.adopters,
      g = u.basicStyleElement;
    h.forEach(function(_) {
      _.innerHTML = g.innerHTML
    })
  }
  var X = function() {
    function a() {
      var h = document.createElement("style");
      f.loaded ? v.body.appendChild(h) : (document.head.appendChild(h), h.disabled = !0, n.push(h)), d.set(this, {
        adopters: new Map,
        actions: [],
        basicStyleElement: h
      })
    }
    var u = a.prototype;
    return u.replace = function(g) {
      var _ = _e(g);
      try {
        if (!d.has(this)) throw new TypeError(Q);
        var m = d.get(this),
          y = m.basicStyleElement;
        return y.innerHTML = _, ve(this), Promise.resolve(this)
      } catch (C) {
        return Promise.reject(C)
      }
    }, u.replaceSync = function(g) {
      var _ = _e(g);
      if (!d.has(this)) throw new TypeError(Q);
      var m = d.get(this),
        y = m.basicStyleElement;
      return y.innerHTML = _, ve(this), this
    }, e(a, [{
      key: "cssRules",
      get: function() {
        if (!d.has(this)) throw new TypeError(Q);
        var g = d.get(this),
          _ = g.basicStyleElement;
        return _.sheet.cssRules
      }
    }]), a
  }();
  Ne.forEach(function(a) {
    X.prototype[a] = function() {
      if (!d.has(this)) throw new TypeError(Q);
      var u = arguments,
        h = d.get(this),
        g = h.adopters,
        _ = h.actions,
        m = h.basicStyleElement,
        y = m.sheet[a].apply(m.sheet, u);
      return g.forEach(function(C) {
        C.sheet && C.sheet[a].apply(C.sheet, u)
      }), _.push([a, u]), y
    }
  });

  function we(a) {
    return a && a.constructor === X || a instanceof P || a instanceof v.CSSStyleSheet
  }
  Object.defineProperty(X, Symbol.hasInstance, {
    configurable: !0,
    value: we
  });

  function Y(a) {
    for (var u = document.createDocumentFragment(), h = fe(a), g = w.get(a), _ = 0, m = h.length; _ < m; _++) {
      var y = d.get(h[_]),
        C = y.adopters,
        D = y.basicStyleElement,
        S = C.get(a);
      S ? (g.disconnect(), u.appendChild(S), (!S.innerHTML || S.sheet && !S.sheet.cssText) && (S.innerHTML = D.innerHTML), g.observe()) : (S = document.createElement("style"), S.innerHTML = D.innerHTML, l.set(S, a), p.set(S, 0), C.set(a, S), u.appendChild(S)), a === document.head && o.push(S)
    }
    a.insertBefore(u, a.lastChild);
    for (var W = 0, oe = h.length; W < oe; W++) {
      var j = d.get(h[W]),
        ie = j.adopters,
        R = j.actions,
        ee = ie.get(a),
        Be = p.get(ee);
      if (R.length > 0) {
        for (var se = Be, Fe = R.length; se < Fe; se++) {
          var Se = R[se],
            Je = Se[0],
            Ke = Se[1];
          ee.sheet[Je].apply(ee.sheet, Ke)
        }
        p.set(ee, R.length - 1)
      }
    }
  }

  function We(a, u) {
    for (var h = fe(a), g = 0, _ = u.length; g < _; g++)
      if (!(h.indexOf(u[g]) > -1)) {
        var m = d.get(u[g]),
          y = m.adopters,
          C = w.get(a),
          D = y.get(a);
        D || (D = y.get(document.head)), C.disconnect(), D.parentNode.removeChild(D), C.observe()
      }
  }

  function je(a) {
    if (!!document)
      for (var u = 0, h = a.length; u < h; u++) {
        for (var g = a[u], _ = g.addedNodes, m = g.removedNodes, y = 0, C = m.length; y < C; y++) {
          var D = l.get(m[y]);
          D && Y(D)
        }
        if (!t)
          for (var S = 0, W = _.length; S < W; S++)
            for (var oe = document.createNodeIterator(_[S], NodeFilter.SHOW_ELEMENT, function(ie) {
                var R = c.get(ie);
                return R && R.adoptedStyleSheets.length > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
              }, null, !1), j = void 0; j = oe.nextNode();) Y(c.get(j))
      }
  }

  function ye(a) {
    var u = new MutationObserver(je),
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
    w.set(a, h), h.observe()
  }

  function be() {
    var a = document.createElement("iframe");
    a.hidden = !0, document.body.appendChild(a), v.body = a.contentWindow.document.body, v.CSSStyleSheet = a.contentWindow.CSSStyleSheet, me(a.contentWindow.CSSStyleSheet.prototype), ye(document.body), f.loaded = !0;
    for (var u = document.createDocumentFragment(), h = 0, g = n.length; h < g; h++) n[h].disabled = !1, u.appendChild(n[h]);
    v.body.appendChild(u);
    for (var _ = 0, m = o.length; _ < m; _++) u.appendChild(o[_]);
    document.body.insertBefore(u, document.body.firstChild);
    for (var y = 0, C = s.length; y < C; y++) Y(s[y]);
    s.length = 0, n.length = 0, o.length = 0
  }

  function ze() {
    var a = {
      configurable: !0,
      get: function() {
        return r.get(this) || []
      },
      set: function(g) {
        var _ = r.get(this) || [];
        Ve(g, this);
        var m = this === document ? ge() ? this.head : this.body : this,
          y = "isConnected" in m ? m.isConnected : document.body.contains(m);
        y ? window.requestAnimationFrame(function() {
          Y(m), We(m, _)
        }) : s.push(m)
      }
    };
    if (Object.defineProperty(Document.prototype, "adoptedStyleSheets", a), typeof ShadowRoot < "u") {
      var u = Element.prototype.attachShadow;
      Element.prototype.attachShadow = function() {
        var h = t ? this : u.apply(this, arguments);
        return c.set(this, h), ye(h), h
      }, Object.defineProperty(ShadowRoot.prototype, "adoptedStyleSheets", a)
    }
  }
  me(P.prototype), window.CSSStyleSheet = X, ze(), ge() ? document.addEventListener("DOMContentLoaded", be) : be()
})();
const ft = `.ad-tooltip--theme{font-size:12/16rem;font-weight:400;border-radius:2/16rem;box-shadow:0 2px 4px #00000026;padding:16/16rem;color:#4e5761;text-align:left;background-color:#fafafa;border:1px solid #E3E4E5}@media (min-width: 1280px){.ad-tooltip--theme{font-size:14/16rem}}:host{display:block;font-family:LidlFontCondPro,Trebuchet MS,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:16/16rem;line-height:1.4;color:#353b42;border-radius:2/16rem}:host a{text-decoration:none;color:unset}:host .banner{margin:1rem auto;position:relative}:host .banner--large{max-width:320px;height:150px;box-shadow:0 2px 4px #00000026}@media (min-width: 600px){:host .banner--large{max-width:970px;height:250px}}:host .banner--small{aspect-ratio:auto 4 / 3;width:100%}:host .banner-new{border-radius:1rem;background-color:#fff;box-shadow:0 2px 4px #00000026}:host .banner-new__wrapper{position:relative}:host .banner-new__img{width:100%;height:100%;border-style:none;object-fit:cover}:host .banner-new__label{padding:.5rem;border-radius:0 0 1rem 1rem}:host .banner-new__headline{word-wrap:break-word;overflow:hidden;line-height:120%;display:-webkit-box;min-height:3rem}:host .banner-old{display:block;position:relative;background-color:#fff;overflow:hidden}:host .banner-old__img{width:100%;height:100%;border-style:none;object-fit:cover}:host .banner-old__label{position:absolute;bottom:0;left:0;width:100%;background-color:#ffffffb3;padding:.5rem 1rem;color:#353b42}:host .banner-old__headline{word-wrap:break-word;overflow:hidden;max-height:3rem;line-height:1.4rem;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}:host .ads-tag{display:flex;position:absolute;bottom:0;right:0;padding:4px;background-color:#fff}:host .ads-tag__img{width:100%;height:100%;border-style:none;object-fit:cover}:host .ads-tag__icon{margin-left:4px;margin-top:3px;width:12px;height:12px;mask-image:url(/cdn/assets/icons/1.0.0/information-circle.svg);-webkit-mask-image:url(/cdn/assets/icons/1.0.0/information-circle.svg);background-color:#4e5761}:host .ads-tag__text{font-size:.75rem;font-weight:400}@media (min-width: 1280px){:host .ads-tag__text{font-size:.875rem}}:host .rounded-corners{border-radius:1rem 1rem 0 0}:host .ad-tooltip{background:none;border:none;padding:0;margin:0;cursor:pointer;color:inherit;display:inline-flex}:host .skeleton{width:100%;max-width:320px;height:150px;position:relative;margin:1rem auto;display:flex;vertical-align:middle;cursor:progress;background-color:#e3e4e6;background-image:linear-gradient(90deg,transparent 25%,#fff 50%,transparent 75%);background-size:200% 200%;animation:skeleton-shimmer 2s linear infinite}@keyframes skeleton-shimmer{0%{background-position-x:200%}50%{background-position-x:100%}to{background-position-x:0%}}@media (min-width: 600px){:host .skeleton{max-width:970px;height:250px}}
`;
var _t = Object.defineProperty,
  mt = Object.getOwnPropertyDescriptor,
  A = (i, e, t, n) => {
    for (var o = n > 1 ? void 0 : n ? mt(e, t) : e, s = i.length - 1, r; s >= 0; s--)(r = i[s]) && (o = (n ? r(e, t, o) : r(o)) || o);
    return n && o && _t(e, t, o), o
  };
const Ge = new CSSStyleSheet;
Ge.replaceSync(ft);
let k = class extends B {
  constructor() {
    super(...arguments), this.tagText = "Ads", this.showTag = !0, this.size = "large", this.title = "", this.showLoading = !1, this.debug = !1, this.adsData = null, this.requestData = "", this._showNewDesign = !1, this._showBanner = !1, this._showSkeleton = !1, this._mql = window.matchMedia && window.matchMedia("(max-width: 600px)"), this._debugCookie = !1, this._debugInstanceId = Math.floor(Math.random() * 1e3), this._requestInProgress = !1, this._toggleDesign = i => {
      this.consoleDebugLog("_toggleDesign", i), this._showNewDesign = i && i.matches
    }
  }
  static get styles() {
    return [Ge]
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
    var i, e;
    return this.consoleDebugLog("adsImageTemplate", this._pqData), E`
      <a .href="${(i=this._pqData)==null?void 0:i.clickthru}" target="_self"
         @click=${this._onClickImpression}>
        <img src="${(e=this._pqData)==null?void 0:e.asset_url}" alt="Banner Ads" class="ads-tag__img">
      </a>
      ${this.showTag?this.adsTagTemplate():""}
    `
  }
  newDesignTemplate() {
    var i, e;
    return this.consoleDebugLog("newDesignTemplate", this._pqData), E`
      <div class="banner-new">
        <a .href="${(i=this._pqData)==null?void 0:i.clickthru}" target="_self"
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
    var i, e;
    return this.consoleDebugLog("oldDesignTemplate", this._pqData), E`
      <div class="banner-old">
        <a .href="${(i=this._pqData)==null?void 0:i.clickthru}" target="_self"
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
    super.connectedCallback(), this._debugCookie = $.getCookieValue("bannerAdsDebugConsoleLog"), this.consoleDebugLog("DebugCookie", this._debugCookie), this._showSkeleton = this.showLoading, this._showSkeleton && this.consoleDebugLog("Init show Skeleton", this._showSkeleton), await this._getAd(), this._toggleDesign(this._mql), this._mql && this._mql.addEventListener && this._mql.addEventListener("change", this._toggleDesign)
  }
  disconnectedCallback() {
    this.consoleDebugLog("disconnectedCallback"), super.disconnectedCallback(), this._mql && this._mql.removeEventListener && this._mql.removeEventListener("change", this._toggleDesign)
  }
  updated(i) {
    if (this.consoleDebugLog("updated called", i), i.has("requestData")) {
      const e = i.get("requestData");
      this.requestData && this.requestData !== e && (this.consoleDebugLog("updated requestData", {
        requestData: this.requestData,
        prevValue: e
      }), this._showSkeleton = this.showLoading, this._getAd())
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
    const i = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    let e = new Array(36),
      t = 0,
      n;
    for (let r = 0; r < 36; r++) r === 8 || r === 13 || r === 18 || r === 23 ? e[r] = "-" : r === 14 ? e[r] = "4" : (t <= 2 && (t = 33554432 + Math.random() * 16777216 | 0), n = t & 15, t = t >> 4, e[r] = i[r === 19 ? n & 3 | 8 : n]);
    const o = e.join(""),
      s = "; max-age=" + 24 * 60 * 60 * 730;
    return document.cookie = "adSessionId=" + o + s + "; secure; path=/", o
  }
  fetchWithTimeout(i, e = {}, t = 5e3) {
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
      const d = () => {
        const l = Date.now();
        if (l - r >= t) this.consoleDebugLog("fetchWithTimeout abortFunc aborting", {
          currTime: l,
          startTime: r,
          "currTime - startTime": l - r,
          time: t,
          timeoutId: o
        }), s.abort(), o && clearTimeout(o);
        else {
          let c = t - (l - r);
          c < 0 && (c = 0), this.consoleDebugLog("fetchWithTimeout abortFunc startTimer", {
            currTime: l,
            startTime: r,
            "currTime - startTime": l - r,
            time: t,
            timeoutId: o,
            remainingTime: c
          }), o = setTimeout(d, c)
        }
      };
      d()
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
  async _getAd() {
    var i;
    try {
      if (this._requestInProgress) {
        this.consoleDebugLog("_getAd requestInProgress");
        return
      }
      if (this._requestInProgress = !0, this.consoleDebugLog("_getAd init"), this._consent || (this.consoleDebugLog("_getAd get consent"), this._consent = this.debug ? {
          marketing: !0
        } : await $.onConsent()), this.consoleDebugLog("CookieBot consent", this._consent), !this._consent || this._consent && !this._consent.marketing || !this.requestData) {
        this.consoleDebugLog("_getAd exit", {
          requestData: this.requestData,
          consent: this._consent
        }), this._showSkeleton = !1, this._requestInProgress = !1;
        return
      }
      const e = $.getCookieValue("adSessionId") || this.setAdSessionId();
      this.consoleDebugLog("_getAd adSessionId", e);
      const t = JSON.parse(this.requestData);
      t.session = e, this.consoleDebugLog("_getAd request", t), this._showBanner = !1;
      const n = await this.fetchWithTimeout("/t/piq/request", {
        method: "POST",
        body: JSON.stringify(t)
      }, 500);
      if (this._showSkeleton = !1, this._requestInProgress = !1, n.ok && n.status === 200) {
        if (this.consoleDebugLog("_getAd resp.ok"), this._pqData = await n.json()
          .then(o => o[0]), this.consoleDebugLog("_getAd PqData", this._pqData), !(this._pqData && ((i = this._pqData) == null ? void 0 : i.clickthru))) return;
        this._showBanner = !0, setTimeout(() => {
          if (this.consoleDebugLog("_getAd SendBannerImpression"), this.requestUpdate(), this._bannerAdsImpression(), this.consoleDebugLog("_getAd Register Intersection observer host ", this.hostElement), !("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype)) {
            this._bannerAdsView();
            return
          }
          let s = 0,
            r = !1,
            d;
          const l = new IntersectionObserver(c => {
            c.forEach(w => {
              const p = Math.round(w.intersectionRatio * 100),
                f = Math.round(w.time);
              if (this.consoleDebugLog(`isIntersecting: ${w.isIntersecting}, Ratio:${p}, Time: ${f}`), !w.isIntersecting) {
                s && (s = 0), d && (clearTimeout(d), d = void 0), r = !1;
                return
              }
              p > 45 && (s || (this.consoleDebugLog(" Start counting ", s), s = f), this.consoleDebugLog("Passed 50%"), r = !0, d || (d = setTimeout(() => {
                this.consoleDebugLog("Send impression timeout"), this._bannerAdsView(), l.unobserve(this.hostElement)
              }, 1e3))), f - s >= 1e3 && r && (d && (clearTimeout(d), d = void 0), this.consoleDebugLog("Send impression intersection"), this._bannerAdsView(), l.unobserve(this.hostElement))
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
    var t, n, o, s, r, d;
    window.dataLayerService = window.dataLayerService || [];
    const i = ((t = this._pqData) == null ? void 0 : t.clickthru) || "";
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
          linkType: /^(#|\/)/.test(i) || i.indexOf(window.location.hostname) > -1 ? "internal" : "external",
          linkURL: (n = this._pqData) == null ? void 0 : n.clickthru
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
            id: (o = this._pqData) == null ? void 0 : o.campaign_id,
            name: (s = this.adsData) == null ? void 0 : s.promotionName,
            creative: (r = this.adsData) == null ? void 0 : r.creativeName,
            position: (d = this.adsData) == null ? void 0 : d.creativeSlot
          }]
        }
      }
    })
  }
  _bannerAdsImpression() {
    window.dataLayerService = window.dataLayerService || [], window.dataLayerService.push({
      scenarioName: M.General_Promotion_Load,
      collections: {
        eventInfo: {
          eventAction: M.General_Promotion_Load,
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
    var e, t, n, o;
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
      dataLayer: i
    } = window;
    i.push({
      event: "EECpromotionImpression",
      ecommerce: {
        promoView: {
          promotions: [{
            id: (e = this._pqData) == null ? void 0 : e.campaign_id,
            name: (t = this.adsData) == null ? void 0 : t.promotionName,
            creative: (n = this.adsData) == null ? void 0 : n.creativeName,
            position: (o = this.adsData) == null ? void 0 : o.creativeSlot
          }]
        }
      }
    })
  }
};
A([x({
  type: String
})], k.prototype, "tagText", 2);
A([x({
  type: Boolean
})], k.prototype, "showTag", 2);
A([x({
  type: String
})], k.prototype, "size", 2);
A([x({
  type: String
})], k.prototype, "title", 2);
A([x({
  type: Boolean
})], k.prototype, "showLoading", 2);
A([x({
  type: Boolean
})], k.prototype, "debug", 2);
A([x({
  type: String,
  converter: {
    fromAttribute: i => i && JSON.parse(decodeURI(i))
  }
})], k.prototype, "adsData", 2);
A([x({
  type: String,
  converter: {
    fromAttribute: i => i && decodeURI(i)
  }
})], k.prototype, "requestData", 2);
A([ne()], k.prototype, "_pqData", 2);
A([ne()], k.prototype, "_showNewDesign", 2);
A([ne()], k.prototype, "_showBanner", 2);
A([ne()], k.prototype, "_showSkeleton", 2);
A([gt(".banner", !1)], k.prototype, "hostElement", 2);
k = A([ht("banner-ads")], k);