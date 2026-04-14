(function() {
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
})();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ue = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
  Re = Symbol(),
  Se = new WeakMap;
class Ke {
  constructor(e, t, o) {
    if (this._$cssResult$ = !0, o !== Re) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
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
const Ze = i => new Ke(typeof i == "string" ? i : i + "", void 0, Re),
  Qe = (i, e) => {
    ue ? i.adoptedStyleSheets = e.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet) : e.forEach(t => {
      const o = document.createElement("style"),
        n = window.litNonce;
      n !== void 0 && o.setAttribute("nonce", n), o.textContent = t.cssText, i.appendChild(o)
    })
  },
  $e = ue ? i => i : i => i instanceof CSSStyleSheet ? (e => {
    let t = "";
    for (const o of e.cssRules) t += o.cssText;
    return Ze(t)
  })(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var se;
const Ce = window.trustedTypes,
  Xe = Ce ? Ce.emptyScript : "",
  ke = window.reactiveElementPolyfillSupport,
  ce = {
    toAttribute(i, e) {
      switch (e) {
        case Boolean:
          i = i ? Xe : null;
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
  Oe = (i, e) => e !== i && (e == e || i == i),
  re = {
    attribute: !0,
    type: String,
    converter: ce,
    reflect: !1,
    hasChanged: Oe
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
    return Qe(t, this.constructor.elementStyles), t
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
      const h = ((s = (n = o.converter) === null || n === void 0 ? void 0 : n.toAttribute) !== null && s !== void 0 ? s : ce.toAttribute)(t, o.type);
      this._$El = e, h == null ? this.removeAttribute(r) : this.setAttribute(r, h), this._$El = null
    }
  }
  _$AK(e, t) {
    var o, n;
    const s = this.constructor,
      r = s._$Ev.get(e);
    if (r !== void 0 && this._$El !== r) {
      const h = s.getPropertyOptions(r),
        l = h.converter,
        c = (n = (o = l == null ? void 0 : l.fromAttribute) !== null && o !== void 0 ? o : typeof l == "function" ? l : null) !== null && n !== void 0 ? n : ce.fromAttribute;
      this._$El = r, this[r] = c(t, h.type), this._$El = null
    }
  }
  requestUpdate(e, t, o) {
    let n = !0;
    e !== void 0 && (((o = o || this.constructor.getPropertyOptions(e))
      .hasChanged || Oe)(this[e], t) ? (this._$AL.has(e) || this._$AL.set(e, t), o.reflect === !0 && this._$El !== e && (this._$EC === void 0 && (this._$EC = new Map), this._$EC.set(e, o))) : n = !1), !this.isUpdatePending && n && (this._$E_ = this._$Ej())
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
const H = globalThis.trustedTypes,
  Ae = H ? H.createPolicy("lit-html", {
    createHTML: i => i
  }) : void 0,
  L = `lit$${(Math.random()+"").slice(9)}$`,
  Me = "?" + L,
  Ye = `<${Me}>`,
  U = document,
  j = (i = "") => U.createComment(i),
  F = i => i === null || typeof i != "object" && typeof i != "function",
  qe = Array.isArray,
  et = i => qe(i) || typeof(i == null ? void 0 : i[Symbol.iterator]) == "function",
  N = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  Pe = /-->/g,
  Ee = />/g,
  I = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"),
  De = /'/g,
  Te = /"/g,
  He = /^(?:script|style|textarea|title)$/i,
  tt = i => (e, ...t) => ({
    _$litType$: i,
    strings: e,
    values: t
  }),
  A = tt(1),
  B = Symbol.for("lit-noChange"),
  w = Symbol.for("lit-nothing"),
  Le = new WeakMap,
  ot = (i, e, t) => {
    var o, n;
    const s = (o = t == null ? void 0 : t.renderBefore) !== null && o !== void 0 ? o : e;
    let r = s._$litPart$;
    if (r === void 0) {
      const h = (n = t == null ? void 0 : t.renderBefore) !== null && n !== void 0 ? n : null;
      s._$litPart$ = r = new K(e.insertBefore(j(), h), h, void 0, t != null ? t : {})
    }
    return r._$AI(i), r
  },
  M = U.createTreeWalker(U, 129, null, !1),
  it = (i, e) => {
    const t = i.length - 1,
      o = [];
    let n, s = e === 2 ? "<svg>" : "",
      r = N;
    for (let l = 0; l < t; l++) {
      const c = i[l];
      let m, g, _ = -1,
        b = 0;
      for (; b < c.length && (r.lastIndex = b, g = r.exec(c), g !== null);) b = r.lastIndex, r === N ? g[1] === "!--" ? r = Pe : g[1] !== void 0 ? r = Ee : g[2] !== void 0 ? (He.test(g[2]) && (n = RegExp("</" + g[2], "g")), r = I) : g[3] !== void 0 && (r = I) : r === I ? g[0] === ">" ? (r = n != null ? n : N, _ = -1) : g[1] === void 0 ? _ = -2 : (_ = r.lastIndex - g[2].length, m = g[1], r = g[3] === void 0 ? I : g[3] === '"' ? Te : De) : r === Te || r === De ? r = I : r === Pe || r === Ee ? r = N : (r = I, n = void 0);
      const P = r === I && i[l + 1].startsWith("/>") ? " " : "";
      s += r === N ? c + Ye : _ >= 0 ? (o.push(m), c.slice(0, _) + "$lit$" + c.slice(_) + L + P) : c + L + (_ === -2 ? (o.push(void 0), l) : P)
    }
    const h = s + (i[t] || "<?>") + (e === 2 ? "</svg>" : "");
    if (!Array.isArray(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return [Ae !== void 0 ? Ae.createHTML(h) : h, o]
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
    const h = e.length - 1,
      l = this.parts,
      [c, m] = it(e, t);
    if (this.el = J.createElement(c, o), M.currentNode = this.el.content, t === 2) {
      const g = this.el.content,
        _ = g.firstChild;
      _.remove(), g.append(..._.childNodes)
    }
    for (;
      (n = M.nextNode()) !== null && l.length < h;) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) {
          const g = [];
          for (const _ of n.getAttributeNames())
            if (_.endsWith("$lit$") || _.startsWith(L)) {
              const b = m[r++];
              if (g.push(_), b !== void 0) {
                const P = n.getAttribute(b.toLowerCase() + "$lit$")
                  .split(L),
                  D = /([.?@])?(.*)/.exec(b);
                l.push({
                  type: 1,
                  index: s,
                  name: D[2],
                  strings: P,
                  ctor: D[1] === "." ? st : D[1] === "?" ? at : D[1] === "@" ? lt : ee
                })
              } else l.push({
                type: 6,
                index: s
              })
            } for (const _ of g) n.removeAttribute(_)
        }
        if (He.test(n.tagName)) {
          const g = n.textContent.split(L),
            _ = g.length - 1;
          if (_ > 0) {
            n.textContent = H ? H.emptyScript : "";
            for (let b = 0; b < _; b++) n.append(g[b], j()), M.nextNode(), l.push({
              type: 2,
              index: ++s
            });
            n.append(g[_], j())
          }
        }
      } else if (n.nodeType === 8)
        if (n.data === Me) l.push({
          type: 2,
          index: s
        });
        else {
          let g = -1;
          for (;
            (g = n.data.indexOf(L, g + 1)) !== -1;) l.push({
            type: 7,
            index: s
          }), g += L.length - 1
        } s++
    }
  }
  static createElement(e, t) {
    const o = U.createElement("template");
    return o.innerHTML = e, o
  }
}

function V(i, e, t = i, o) {
  var n, s, r, h;
  if (e === B) return e;
  let l = o !== void 0 ? (n = t._$Cl) === null || n === void 0 ? void 0 : n[o] : t._$Cu;
  const c = F(e) ? void 0 : e._$litDirective$;
  return (l == null ? void 0 : l.constructor) !== c && ((s = l == null ? void 0 : l._$AO) === null || s === void 0 || s.call(l, !1), c === void 0 ? l = void 0 : (l = new c(i), l._$AT(i, t, o)), o !== void 0 ? ((r = (h = t)
    ._$Cl) !== null && r !== void 0 ? r : h._$Cl = [])[o] = l : t._$Cu = l), l !== void 0 && (e = V(i, l._$AS(i, e.values), l, o)), e
}
class nt {
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
    } = this._$AD, s = ((t = e == null ? void 0 : e.creationScope) !== null && t !== void 0 ? t : U)
      .importNode(o, !0);
    M.currentNode = s;
    let r = M.nextNode(),
      h = 0,
      l = 0,
      c = n[0];
    for (; c !== void 0;) {
      if (h === c.index) {
        let m;
        c.type === 2 ? m = new K(r, r.nextSibling, this, e) : c.type === 1 ? m = new c.ctor(r, c.name, c.strings, this, e) : c.type === 6 && (m = new ht(r, this, e)), this.v.push(m), c = n[++l]
      }
      h !== (c == null ? void 0 : c.index) && (r = M.nextNode(), h++)
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
    this.type = 2, this._$AH = w, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = o, this.options = n, this._$C_ = (s = n == null ? void 0 : n.isConnected) === null || s === void 0 || s
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
    e = V(this, e, t), F(e) ? e === w || e == null || e === "" ? (this._$AH !== w && this._$AR(), this._$AH = w) : e !== this._$AH && e !== B && this.T(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.k(e) : et(e) ? this.S(e) : this.T(e)
  }
  j(e, t = this._$AB) {
    return this._$AA.parentNode.insertBefore(e, t)
  }
  k(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.j(e))
  }
  T(e) {
    this._$AH !== w && F(this._$AH) ? this._$AA.nextSibling.data = e : this.k(U.createTextNode(e)), this._$AH = e
  }
  $(e) {
    var t;
    const {
      values: o,
      _$litType$: n
    } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = J.createElement(n.h, this.options)), n);
    if (((t = this._$AH) === null || t === void 0 ? void 0 : t._$AD) === s) this._$AH.m(o);
    else {
      const r = new nt(s, this),
        h = r.p(this.options);
      r.m(o), this.k(h), this._$AH = r
    }
  }
  _$AC(e) {
    let t = Le.get(e.strings);
    return t === void 0 && Le.set(e.strings, t = new J(e)), t
  }
  S(e) {
    qe(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let o, n = 0;
    for (const s of e) n === t.length ? t.push(o = new K(this.j(j()), this.j(j()), this, this.options)) : o = t[n], o._$AI(s), n++;
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
    this.type = 1, this._$AH = w, this._$AN = void 0, this.element = e, this.name = t, this._$AM = n, this.options = s, o.length > 2 || o[0] !== "" || o[1] !== "" ? (this._$AH = Array(o.length - 1)
      .fill(new String), this.strings = o) : this._$AH = w
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
    if (s === void 0) e = V(this, e, t, 0), r = !F(e) || e !== this._$AH && e !== B, r && (this._$AH = e);
    else {
      const h = e;
      let l, c;
      for (e = s[0], l = 0; l < s.length - 1; l++) c = V(this, h[o + l], t, l), c === B && (c = this._$AH[l]), r || (r = !F(c) || c !== this._$AH[l]), c === w ? e = w : e !== w && (e += (c != null ? c : "") + s[l + 1]), this._$AH[l] = c
    }
    r && !n && this.P(e)
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
const rt = H ? H.emptyScript : "";
class at extends ee {
  constructor() {
    super(...arguments), this.type = 4
  }
  P(e) {
    e && e !== w ? this.element.setAttribute(this.name, rt) : this.element.removeAttribute(this.name)
  }
}
class lt extends ee {
  constructor(e, t, o, n, s) {
    super(e, t, o, n, s), this.type = 5
  }
  _$AI(e, t = this) {
    var o;
    if ((e = (o = V(this, e, t, 0)) !== null && o !== void 0 ? o : w) === B) return;
    const n = this._$AH,
      s = e === w && n !== w || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive,
      r = e !== w && (n === w || s);
    s && this.element.removeEventListener(this.name, this, n), r && this.element.addEventListener(this.name, this, e), this._$AH = e
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
    V(this, e)
  }
}
const xe = window.litHtmlPolyfillSupport;
xe == null || xe(J, K), ((ae = globalThis.litHtmlVersions) !== null && ae !== void 0 ? ae : globalThis.litHtmlVersions = [])
  .push("2.2.7");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var le, he;
class W extends O {
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
    return B
  }
}
W.finalized = !0, W._$litElement$ = !0, (le = globalThis.litElementHydrateSupport) === null || le === void 0 || le.call(globalThis, {
  LitElement: W
});
const Ie = globalThis.litElementPolyfillSupport;
Ie == null || Ie({
  LitElement: W
});
((he = globalThis.litElementVersions) !== null && he !== void 0 ? he : globalThis.litElementVersions = [])
.push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt = i => e => typeof e == "function" ? ((t, o) => (window.customElements.define(t, o), o))(i, e) : ((t, o) => {
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
const ct = (i, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? {
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
  return (e, t) => t !== void 0 ? ((o, n, s) => {
    n.constructor.createProperty(s, o)
  })(i, e, t) : ct(i, e)
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
    return i != null && (r.finisher = function(h) {
      i(h, s)
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
function pt(i, e) {
  return ut({
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
var R = (i => (i.PDP_Pageload = "PDP_Pageload", i.PDP_Click = "PDP_Click", i.PDP_Social_Click = "PDP_Social_Click", i.PDP_Image_Click = "PDP_Image_Click", i.PDP_Section_EnterViewport = "PDP_Section_EnterViewport", i.PDP_Recommendation_Load = "PDP_Recommendation_Load", i.PDP_Recommendation_EnterViewport = "PDP_Recommendation_EnterViewport", i.PDP_Recommendation_Click = "PDP_Recommendation_Click", i.PDP_Rating_Click = "PDP_Rating_Click", i.PDP_Information_Load = "PDP_Information_Load", i.General_Pageload = "General_Pageload", i.General_Recommendation_Load = "General_Recommendation_Load", i.General_RecommendationProduct_EnterViewport = "General_RecommendationProduct_EnterViewport", i.General_Product_Click = "General_Product_Click", i.General_Section_EnterViewport = "General_Section_EnterViewport", i.General_Teaser_Click = "General_Teaser_Click", i.General_Link_Click = "General_Link_Click", i.PLP_Pageload = "PLP_Pageload", i.PLP_FilterSelect_Click = "PLP_FilterSelect_Click", i.General_SearchTermConfirm_Click = "General_SearchTermConfirm_Click", i.Cart_Pageload = "Cart_Pageload", i.Cart_Button_Click = "Cart_Button_Click", i.Cart_Success_Pageload = "Cart_Success_Pageload", i.General_Detection_Pageload = "General_Detection_Pageload", i.General_Product_View = "General_Product_View", i.General_Promotion_View = "General_Promotion_View", i.General_Promotion_Load = "General_Promotion_Load", i.General_Promotion_Click = "General_Promotion_Click", i.Wishlist_Pageload = "Wishlist_Pageload", i.Wishlist_Button_Click = "Wishlist_Button_Click", i.StoreSearch_Pageload = "StoreSearch_Pageload", i.StoreSearch_Click = "StoreSearch_Click", i.StoreSearchDP_Pageload = "StoreSearchDP_Pageload", i.StoreSearchDP_Click = "StoreSearchDP_Click", i.MyAccount_Pageload = "MyAccount_Pageload", i.MyAccount_Click = "MyAccount_Click", i))(R || {});
class q {
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
      const t = q.getCookieValue(e);
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
      var m, g;
      const t = q.getConsentCookie(),
        n = ((m = window == null ? void 0 : window.Cookiebot) != null && m.hasResponse ? (g = window == null ? void 0 : window.Cookiebot) == null ? void 0 : g.consent : void 0) || t;
      if (n) {
        e(n);
        return
      }
      let s, r = 0;
      const h = 30,
        l = () => {
          var _;
          clearTimeout(s), window.removeEventListener("CookiebotOnLoad", l), e((_ = window == null ? void 0 : window.Cookiebot) == null ? void 0 : _.consent)
        },
        c = () => {
          var b, P, D;
          if (!((b = window == null ? void 0 : window.Cookiebot) == null ? void 0 : b.consent) && r < h) {
            r++, s = setTimeout(c, 100);
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
      c()
    })
  }
}(function() {
  if (typeof document > "u" || "adoptedStyleSheets" in document) return;

  function i(a, u) {
    for (var d = 0; d < u.length; d++) {
      var p = u[d];
      p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(a, p.key, p)
    }
  }

  function e(a, u, d) {
    return u && i(a.prototype, u), d && i(a, d), a
  }
  var t = "ShadyCSS" in window && !window.ShadyCSS.nativeShadow,
    o = [],
    n = [],
    s = [],
    r = new WeakMap,
    h = new WeakMap,
    l = new WeakMap,
    c = new WeakMap,
    m = new WeakMap,
    g = new WeakMap,
    _ = {
      loaded: !1
    },
    b = {
      body: null,
      CSSStyleSheet: null
    },
    P = CSSStyleSheet,
    D = /@import/;

  function Be(a, u) {
    var d = u === document ? "Document" : "ShadowRoot";
    if (!Array.isArray(a)) throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + d + ": Iterator getter is not callable.");
    if (!a.every(me)) throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + d + ": Failed to convert value to 'CSSStyleSheet'");
    var p = a.filter(function(f, v) {
      return a.indexOf(f) === v
    });
    return r.set(u, p), p
  }

  function pe() {
    return document.readyState === "loading"
  }

  function ge(a) {
    return r.get(a.parentNode === document.documentElement ? document : a)
  }

  function _e(a) {
    a === void 0 && (a = "");
    var u = a.match(D) || [],
      d = a;
    return u.length && (console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"), u.forEach(function(p) {
      d = d.replace(p, "")
    })), d
  }
  var Ve = ["addImport", "addPageRule", "addRule", "deleteRule", "insertRule", "removeImport", "removeRule"],
    Z = "Illegal invocation";

  function fe(a) {
    a.replace = function() {
      return Promise.reject(new DOMException("Can't call replace on non-constructed CSSStyleSheets."))
    }, a.replaceSync = function() {
      throw new DOMException("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")
    }
  }

  function ve(a) {
    var u = h.get(a),
      d = u.adopters,
      p = u.basicStyleElement;
    d.forEach(function(f) {
      f.innerHTML = p.innerHTML
    })
  }
  var Q = function() {
    function a() {
      var d = document.createElement("style");
      _.loaded ? b.body.appendChild(d) : (document.head.appendChild(d), d.disabled = !0, o.push(d)), h.set(this, {
        adopters: new Map,
        actions: [],
        basicStyleElement: d
      })
    }
    var u = a.prototype;
    return u.replace = function(p) {
      var f = _e(p);
      try {
        if (!h.has(this)) throw new TypeError(Z);
        var v = h.get(this),
          y = v.basicStyleElement;
        return y.innerHTML = f, ve(this), Promise.resolve(this)
      } catch ($) {
        return Promise.reject($)
      }
    }, u.replaceSync = function(p) {
      var f = _e(p);
      if (!h.has(this)) throw new TypeError(Z);
      var v = h.get(this),
        y = v.basicStyleElement;
      return y.innerHTML = f, ve(this), this
    }, e(a, [{
      key: "cssRules",
      get: function() {
        if (!h.has(this)) throw new TypeError(Z);
        var p = h.get(this),
          f = p.basicStyleElement;
        return f.sheet.cssRules
      }
    }]), a
  }();
  Ve.forEach(function(a) {
    Q.prototype[a] = function() {
      if (!h.has(this)) throw new TypeError(Z);
      var u = arguments,
        d = h.get(this),
        p = d.adopters,
        f = d.actions,
        v = d.basicStyleElement,
        y = v.sheet[a].apply(v.sheet, u);
      return p.forEach(function($) {
        $.sheet && $.sheet[a].apply($.sheet, u)
      }), f.push([a, u]), y
    }
  });

  function me(a) {
    return a && a.constructor === Q || a instanceof P || a instanceof b.CSSStyleSheet
  }
  Object.defineProperty(Q, Symbol.hasInstance, {
    configurable: !0,
    value: me
  });

  function X(a) {
    for (var u = document.createDocumentFragment(), d = ge(a), p = m.get(a), f = 0, v = d.length; f < v; f++) {
      var y = h.get(d[f]),
        $ = y.adopters,
        E = y.basicStyleElement,
        S = $.get(a);
      S ? (p.disconnect(), u.appendChild(S), (!S.innerHTML || S.sheet && !S.sheet.cssText) && (S.innerHTML = E.innerHTML), p.observe()) : (S = document.createElement("style"), S.innerHTML = E.innerHTML, l.set(S, a), g.set(S, 0), $.set(a, S), u.appendChild(S)), a === document.head && n.push(S)
    }
    a.insertBefore(u, a.lastChild);
    for (var G = 0, oe = d.length; G < oe; G++) {
      var z = h.get(d[G]),
        ie = z.adopters,
        x = z.actions,
        Y = ie.get(a),
        We = g.get(Y);
      if (x.length > 0) {
        for (var ne = We, je = x.length; ne < je; ne++) {
          var we = x[ne],
            Fe = we[0],
            Je = we[1];
          Y.sheet[Fe].apply(Y.sheet, Je)
        }
        g.set(Y, x.length - 1)
      }
    }
  }

  function Ge(a, u) {
    for (var d = ge(a), p = 0, f = u.length; p < f; p++)
      if (!(d.indexOf(u[p]) > -1)) {
        var v = h.get(u[p]),
          y = v.adopters,
          $ = m.get(a),
          E = y.get(a);
        E || (E = y.get(document.head)), $.disconnect(), E.parentNode.removeChild(E), $.observe()
      }
  }

  function ze(a) {
    if (!!document)
      for (var u = 0, d = a.length; u < d; u++) {
        for (var p = a[u], f = p.addedNodes, v = p.removedNodes, y = 0, $ = v.length; y < $; y++) {
          var E = l.get(v[y]);
          E && X(E)
        }
        if (!t)
          for (var S = 0, G = f.length; S < G; S++)
            for (var oe = document.createNodeIterator(f[S], NodeFilter.SHOW_ELEMENT, function(ie) {
                var x = c.get(ie);
                return x && x.adoptedStyleSheets.length > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
              }, null, !1), z = void 0; z = oe.nextNode();) X(c.get(z))
      }
  }

  function ye(a) {
    var u = new MutationObserver(ze),
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
    m.set(a, d), d.observe()
  }

  function be() {
    var a = document.createElement("iframe");
    a.hidden = !0, document.body.appendChild(a), b.body = a.contentWindow.document.body, b.CSSStyleSheet = a.contentWindow.CSSStyleSheet, fe(a.contentWindow.CSSStyleSheet.prototype), ye(document.body), _.loaded = !0;
    for (var u = document.createDocumentFragment(), d = 0, p = o.length; d < p; d++) o[d].disabled = !1, u.appendChild(o[d]);
    b.body.appendChild(u);
    for (var f = 0, v = n.length; f < v; f++) u.appendChild(n[f]);
    document.body.insertBefore(u, document.body.firstChild);
    for (var y = 0, $ = s.length; y < $; y++) X(s[y]);
    s.length = 0, o.length = 0, n.length = 0
  }

  function Ne() {
    var a = {
      configurable: !0,
      get: function() {
        return r.get(this) || []
      },
      set: function(p) {
        var f = r.get(this) || [];
        Be(p, this);
        var v = this === document ? pe() ? this.head : this.body : this,
          y = "isConnected" in v ? v.isConnected : document.body.contains(v);
        y ? window.requestAnimationFrame(function() {
          X(v), Ge(v, f)
        }) : s.push(v)
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
  fe(P.prototype), window.CSSStyleSheet = Q, Ne(), pe() ? document.addEventListener("DOMContentLoaded", be) : be()
})();
const gt = `.ad-tooltip--theme{font-size:12/16rem;font-weight:400;border-radius:2/16rem;box-shadow:0 2px 4px #00000026;padding:16/16rem;color:#4e5761;text-align:left;background-color:#fafafa;border:1px solid #E3E4E5}@media (min-width: 1280px){.ad-tooltip--theme{font-size:14/16rem}}:host{display:block;font-family:LidlFontCondPro,Trebuchet MS,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:16/16rem;line-height:1.4;color:#353b42;border-radius:2/16rem}:host a{text-decoration:none;color:unset}:host .banner{margin:1rem auto;position:relative}:host .banner--large{max-width:320px;height:150px;box-shadow:0 2px 4px #00000026}@media (min-width: 600px){:host .banner--large{max-width:970px;height:250px}}:host .banner--small{aspect-ratio:auto 4 / 3;width:100%}:host .banner-new{border-radius:1rem;background-color:#fff;box-shadow:0 2px 4px #00000026}:host .banner-new__wrapper{position:relative}:host .banner-new__img{width:100%;height:100%;border-style:none}:host .banner-new__label{padding:.5rem;border-radius:0 0 1rem 1rem}:host .banner-new__headline{word-wrap:break-word;overflow:hidden;line-height:120%;display:-webkit-box;min-height:3rem}:host .banner-old{display:block;position:relative;background-color:#fff;overflow:hidden}:host .banner-old__img{width:100%;height:100%;border-style:none}:host .banner-old__label{position:absolute;bottom:0;left:0;width:100%;background-color:#ffffffb3;padding:.5rem 1rem;color:#353b42}:host .banner-old__headline{word-wrap:break-word;overflow:hidden;max-height:3rem;line-height:1.4rem;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}:host .ads-tag{display:flex;position:absolute;bottom:0;right:0;padding:4px;background-color:#fff}:host .ads-tag__img{width:100%;height:100%;border-style:none}:host .ads-tag__icon{margin-left:4px;margin-top:3px;width:12px;height:12px;mask-image:url(/cdn/assets/icons/1.0.0/information-circle.svg);-webkit-mask-image:url(/cdn/assets/icons/1.0.0/information-circle.svg);background-color:#4e5761}:host .ads-tag__text{font-size:.75rem;font-weight:400}@media (min-width: 1280px){:host .ads-tag__text{font-size:.875rem}}:host .rounded-corners{border-radius:1rem 1rem 0 0}:host .ad-tooltip{background:none;border:none;padding:0;margin:0;cursor:pointer;color:inherit;display:inline-flex}:host .skeleton{width:100%;max-width:320px;height:150px;position:relative;margin:1rem auto;display:flex;vertical-align:middle;cursor:progress;background-color:#e3e4e6;background-image:linear-gradient(90deg,transparent 25%,#fff 50%,transparent 75%);background-size:200% 200%;animation:skeleton-shimmer 2s linear infinite}@keyframes skeleton-shimmer{0%{background-position-x:200%}50%{background-position-x:100%}to{background-position-x:0%}}@media (min-width: 600px){:host .skeleton{max-width:970px;height:250px}}
`;
var _t = Object.defineProperty,
  ft = Object.getOwnPropertyDescriptor,
  k = (i, e, t, o) => {
    for (var n = o > 1 ? void 0 : o ? ft(e, t) : e, s = i.length - 1, r; s >= 0; s--)(r = i[s]) && (n = (o ? r(e, t, n) : r(n)) || n);
    return o && n && _t(e, t, n), n
  };
const Ue = new CSSStyleSheet;
Ue.replaceSync(gt);
let C = class extends W {
  constructor() {
    super(...arguments), this.tagText = "Ads", this.showTag = !0, this.size = "large", this.title = "", this.showLoading = !1, this.debug = !1, this.adsData = null, this.requestData = "", this._showNewDesign = !1, this._showBanner = !1, this._showSkeleton = !1, this._mql = window.matchMedia && window.matchMedia("(max-width: 600px)"), this._debugCookie = !1, this._debugInstanceId = Math.floor(Math.random() * 1e3), this._requestInProgress = !1, this._toggleDesign = i => {
      this.consoleDebugLog("_toggleDesign", i), this._showNewDesign = i && i.matches
    }
  }
  static get styles() {
    return [Ue]
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
      <a .href="${(i=this._pqData)==null?void 0:i.clickthru}" target="_self"
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
    return this.consoleDebugLog("oldDesignTemplate", this._pqData), A`
      <div class="banner-old">
        <a .href="${(i=this._pqData)==null?void 0:i.clickthru}" target="_self"
           @click=${this._onClickImpression}>
          <img src="${(e=this._pqData)==null?void 0:e.asset_url}" alt="Banner Ads"
               class="banner-old__img">
        </a>
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
    super.connectedCallback(), this._debugCookie = q.getCookieValue("bannerAdsDebugConsoleLog"), this.consoleDebugLog("DebugCookie", this._debugCookie), this._showSkeleton = this.showLoading, this._showSkeleton && this.consoleDebugLog("Init show Skeleton", this._showSkeleton), await this._getAd(), this._toggleDesign(this._mql), this._mql && this._mql.addEventListener && this._mql.addEventListener("change", this._toggleDesign)
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
        `:A`${this._showSkeleton?A`
          <div class="skeleton"></div>`:""}`}
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
      const h = () => {
        const l = Date.now();
        if (l - r >= t) this.consoleDebugLog("fetchWithTimeout abortFunc aborting", {
          currTime: l,
          startTime: r,
          "currTime - startTime": l - r,
          time: t,
          timeoutId: n
        }), s.abort(), n && clearTimeout(n);
        else {
          let c = t - (l - r);
          c < 0 && (c = 0), this.consoleDebugLog("fetchWithTimeout abortFunc startTimer", {
            currTime: l,
            startTime: r,
            "currTime - startTime": l - r,
            time: t,
            timeoutId: n,
            remainingTime: c
          }), n = setTimeout(h, c)
        }
      };
      h()
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
      if (this._requestInProgress) {
        this.consoleDebugLog("_getAd requestInProgress");
        return
      }
      if (this._requestInProgress = !0, this.consoleDebugLog("_getAd init"), this._consent || (this.consoleDebugLog("_getAd get consent"), this._consent = this.debug ? {
          marketing: !0
        } : await q.onConsent()), this.consoleDebugLog("CookieBot consent", this._consent), !this._consent || this._consent && !this._consent.marketing || !this.requestData) {
        this.consoleDebugLog("_getAd exit", {
          requestData: this.requestData,
          consent: this._consent
        }), this._showSkeleton = !1, this._requestInProgress = !1;
        return
      }
      const e = q.getCookieValue("adSessionId") || this.setAdSessionId();
      this.consoleDebugLog("_getAd adSessionId", e);
      const t = JSON.parse(this.requestData);
      t.session = e, this.consoleDebugLog("_getAd request", t), this._showBanner = !1;
      const o = await this.fetchWithTimeout("/t/piq/request", {
        method: "POST",
        body: JSON.stringify(t)
      }, 500);
      if (this._showSkeleton = !1, this._requestInProgress = !1, o.ok && o.status === 200) {
        if (this.consoleDebugLog("_getAd resp.ok"), this._pqData = await o.json()
          .then(n => n[0]), this.consoleDebugLog("_getAd PqData", this._pqData), !(this._pqData && ((i = this._pqData) == null ? void 0 : i.clickthru))) return;
        this._showBanner = !0, setTimeout(() => {
          if (this.consoleDebugLog("_getAd SendBannerImpression"), this.requestUpdate(), this._bannerAdsImpression(), this.consoleDebugLog("_getAd Register Intersection observer host ", this.hostElement), !("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype)) {
            this._bannerAdsView();
            return
          }
          let s = 0,
            r = !1,
            h;
          const l = new IntersectionObserver(c => {
            c.forEach(m => {
              const g = Math.round(m.intersectionRatio * 100),
                _ = Math.round(m.time);
              if (this.consoleDebugLog(`isIntersecting: ${m.isIntersecting}, Ratio:${g}, Time: ${_}`), !m.isIntersecting) {
                s && (s = 0), h && (clearTimeout(h), h = void 0), r = !1;
                return
              }
              g > 45 && (s || (this.consoleDebugLog(" Start counting ", s), s = _), this.consoleDebugLog("Passed 50%"), r = !0, h || (h = setTimeout(() => {
                this.consoleDebugLog("Send impression timeout"), this._bannerAdsView(), l.unobserve(this.hostElement)
              }, 1e3))), _ - s >= 1e3 && r && (h && (clearTimeout(h), h = void 0), this.consoleDebugLog("Send impression intersection"), this._bannerAdsView(), l.unobserve(this.hostElement))
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
    var e, t;
    window.dataLayerService = window.dataLayerService || [];
    const i = ((e = this._pqData) == null ? void 0 : e.clickthru) || "";
    window.dataLayerService.push({
      scenarioName: R.General_Promotion_Click,
      collections: {
        eventInfo: {
          eventAction: R.General_Promotion_Click,
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
      scenarioName: R.General_Promotion_Load,
      collections: {
        eventInfo: {
          eventAction: R.General_Promotion_Load,
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
    window.dataLayerService = window.dataLayerService || [], window.dataLayerService.push({
      scenarioName: R.General_Promotion_View,
      collections: {
        eventInfo: {
          eventAction: R.General_Promotion_View,
          eventCategory: "view",
          eventInteractionType: "view"
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
  }
})], C.prototype, "requestData", 2);
k([te()], C.prototype, "_pqData", 2);
k([te()], C.prototype, "_showNewDesign", 2);
k([te()], C.prototype, "_showBanner", 2);
k([te()], C.prototype, "_showSkeleton", 2);
k([pt(".banner", !1)], C.prototype, "hostElement", 2);
C = k([dt("banner-ads")], C);