const Ke = function() {
  const e = document.createElement("link")
    .relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) o(i);
  new MutationObserver(i => {
      for (const s of i)
        if (s.type === "childList")
          for (const r of s.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && o(r)
    })
    .observe(document, {
      childList: !0,
      subtree: !0
    });

  function t(i) {
    const s = {};
    return i.integrity && (s.integrity = i.integrity), i.referrerpolicy && (s.referrerPolicy = i.referrerpolicy), i.crossorigin === "use-credentials" ? s.credentials = "include" : i.crossorigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
  }

  function o(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = t(i);
    fetch(i.href, s)
  }
};
Ke();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ue = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
  Re = Symbol(),
  Se = new WeakMap;
class Ze {
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
const Qe = n => new Ze(typeof n == "string" ? n : n + "", void 0, Re),
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
var se;
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
  Oe = (n, e) => e !== n && (e == e || n == n),
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
      const i = this._$Ep(o, t);
      i !== void 0 && (this._$Ev.set(i, o), e.push(i))
    }), e
  }
  static createProperty(e, t = re) {
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
        const s = this[e];
        this[t] = i, this.requestUpdate(e, s, o)
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
  _$EO(e, t, o = re) {
    var i, s;
    const r = this.constructor._$Ep(e, o);
    if (r !== void 0 && o.reflect === !0) {
      const c = ((s = (i = o.converter) === null || i === void 0 ? void 0 : i.toAttribute) !== null && s !== void 0 ? s : ce.toAttribute)(t, o.type);
      this._$El = e, c == null ? this.removeAttribute(r) : this.setAttribute(r, c), this._$El = null
    }
  }
  _$AK(e, t) {
    var o, i;
    const s = this.constructor,
      r = s._$Ev.get(e);
    if (r !== void 0 && this._$El !== r) {
      const c = s.getPropertyOptions(r),
        l = c.converter,
        h = (i = (o = l == null ? void 0 : l.fromAttribute) !== null && o !== void 0 ? o : typeof l == "function" ? l : null) !== null && i !== void 0 ? i : ce.fromAttribute;
      this._$El = r, this[r] = h(t, c.type), this._$El = null
    }
  }
  requestUpdate(e, t, o) {
    let i = !0;
    e !== void 0 && (((o = o || this.constructor.getPropertyOptions(e))
      .hasChanged || Oe)(this[e], t) ? (this._$AL.has(e) || this._$AL.set(e, t), o.reflect === !0 && this._$El !== e && (this._$EC === void 0 && (this._$EC = new Map), this._$EC.set(e, o))) : i = !1), !this.isUpdatePending && i && (this._$E_ = this._$Ej())
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
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((i, s) => this[s] = i), this._$Ei = void 0);
    let t = !1;
    const o = this._$AL;
    try {
      t = this.shouldUpdate(o), t ? (this.willUpdate(o), (e = this._$ES) === null || e === void 0 || e.forEach(i => {
        var s;
        return (s = i.hostUpdate) === null || s === void 0 ? void 0 : s.call(i)
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
    createHTML: n => n
  }) : void 0,
  T = `lit$${(Math.random()+"").slice(9)}$`,
  Me = "?" + T,
  et = `<${Me}>`,
  U = document,
  j = (n = "") => U.createComment(n),
  F = n => n === null || typeof n != "object" && typeof n != "function",
  qe = Array.isArray,
  tt = n => qe(n) || typeof(n == null ? void 0 : n[Symbol.iterator]) == "function",
  N = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  Pe = /-->/g,
  Ee = />/g,
  I = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"),
  De = /'/g,
  xe = /"/g,
  He = /^(?:script|style|textarea|title)$/i,
  ot = n => (e, ...t) => ({
    _$litType$: n,
    strings: e,
    values: t
  }),
  A = ot(1),
  B = Symbol.for("lit-noChange"),
  w = Symbol.for("lit-nothing"),
  Te = new WeakMap,
  nt = (n, e, t) => {
    var o, i;
    const s = (o = t == null ? void 0 : t.renderBefore) !== null && o !== void 0 ? o : e;
    let r = s._$litPart$;
    if (r === void 0) {
      const c = (i = t == null ? void 0 : t.renderBefore) !== null && i !== void 0 ? i : null;
      s._$litPart$ = r = new K(e.insertBefore(j(), c), c, void 0, t != null ? t : {})
    }
    return r._$AI(n), r
  },
  M = U.createTreeWalker(U, 129, null, !1),
  it = (n, e) => {
    const t = n.length - 1,
      o = [];
    let i, s = e === 2 ? "<svg>" : "",
      r = N;
    for (let l = 0; l < t; l++) {
      const h = n[l];
      let b, p, _ = -1,
        y = 0;
      for (; y < h.length && (r.lastIndex = y, p = r.exec(h), p !== null);) y = r.lastIndex, r === N ? p[1] === "!--" ? r = Pe : p[1] !== void 0 ? r = Ee : p[2] !== void 0 ? (He.test(p[2]) && (i = RegExp("</" + p[2], "g")), r = I) : p[3] !== void 0 && (r = I) : r === I ? p[0] === ">" ? (r = i != null ? i : N, _ = -1) : p[1] === void 0 ? _ = -2 : (_ = r.lastIndex - p[2].length, b = p[1], r = p[3] === void 0 ? I : p[3] === '"' ? xe : De) : r === xe || r === De ? r = I : r === Pe || r === Ee ? r = N : (r = I, i = void 0);
      const P = r === I && n[l + 1].startsWith("/>") ? " " : "";
      s += r === N ? h + et : _ >= 0 ? (o.push(b), h.slice(0, _) + "$lit$" + h.slice(_) + T + P) : h + T + (_ === -2 ? (o.push(void 0), l) : P)
    }
    const c = s + (n[t] || "<?>") + (e === 2 ? "</svg>" : "");
    if (!Array.isArray(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return [Ae !== void 0 ? Ae.createHTML(c) : c, o]
  };
class J {
  constructor({
    strings: e,
    _$litType$: t
  }, o) {
    let i;
    this.parts = [];
    let s = 0,
      r = 0;
    const c = e.length - 1,
      l = this.parts,
      [h, b] = it(e, t);
    if (this.el = J.createElement(h, o), M.currentNode = this.el.content, t === 2) {
      const p = this.el.content,
        _ = p.firstChild;
      _.remove(), p.append(..._.childNodes)
    }
    for (;
      (i = M.nextNode()) !== null && l.length < c;) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) {
          const p = [];
          for (const _ of i.getAttributeNames())
            if (_.endsWith("$lit$") || _.startsWith(T)) {
              const y = b[r++];
              if (p.push(_), y !== void 0) {
                const P = i.getAttribute(y.toLowerCase() + "$lit$")
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
            } for (const _ of p) i.removeAttribute(_)
        }
        if (He.test(i.tagName)) {
          const p = i.textContent.split(T),
            _ = p.length - 1;
          if (_ > 0) {
            i.textContent = H ? H.emptyScript : "";
            for (let y = 0; y < _; y++) i.append(p[y], j()), M.nextNode(), l.push({
              type: 2,
              index: ++s
            });
            i.append(p[_], j())
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === Me) l.push({
          type: 2,
          index: s
        });
        else {
          let p = -1;
          for (;
            (p = i.data.indexOf(T, p + 1)) !== -1;) l.push({
            type: 7,
            index: s
          }), p += T.length - 1
        } s++
    }
  }
  static createElement(e, t) {
    const o = U.createElement("template");
    return o.innerHTML = e, o
  }
}

function V(n, e, t = n, o) {
  var i, s, r, c;
  if (e === B) return e;
  let l = o !== void 0 ? (i = t._$Cl) === null || i === void 0 ? void 0 : i[o] : t._$Cu;
  const h = F(e) ? void 0 : e._$litDirective$;
  return (l == null ? void 0 : l.constructor) !== h && ((s = l == null ? void 0 : l._$AO) === null || s === void 0 || s.call(l, !1), h === void 0 ? l = void 0 : (l = new h(n), l._$AT(n, t, o)), o !== void 0 ? ((r = (c = t)
    ._$Cl) !== null && r !== void 0 ? r : c._$Cl = [])[o] = l : t._$Cu = l), l !== void 0 && (e = V(n, l._$AS(n, e.values), l, o)), e
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
      parts: i
    } = this._$AD, s = ((t = e == null ? void 0 : e.creationScope) !== null && t !== void 0 ? t : U)
      .importNode(o, !0);
    M.currentNode = s;
    let r = M.nextNode(),
      c = 0,
      l = 0,
      h = i[0];
    for (; h !== void 0;) {
      if (c === h.index) {
        let b;
        h.type === 2 ? b = new K(r, r.nextSibling, this, e) : h.type === 1 ? b = new h.ctor(r, h.name, h.strings, this, e) : h.type === 6 && (b = new dt(r, this, e)), this.v.push(b), h = i[++l]
      }
      c !== (h == null ? void 0 : h.index) && (r = M.nextNode(), c++)
    }
    return s
  }
  m(e) {
    let t = 0;
    for (const o of this.v) o !== void 0 && (o.strings !== void 0 ? (o._$AI(e, o, t), t += o.strings.length - 2) : o._$AI(e[t])), t++
  }
}
class K {
  constructor(e, t, o, i) {
    var s;
    this.type = 2, this._$AH = w, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = o, this.options = i, this._$C_ = (s = i == null ? void 0 : i.isConnected) === null || s === void 0 || s
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
    e = V(this, e, t), F(e) ? e === w || e == null || e === "" ? (this._$AH !== w && this._$AR(), this._$AH = w) : e !== this._$AH && e !== B && this.T(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.k(e) : tt(e) ? this.S(e) : this.T(e)
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
      _$litType$: i
    } = e, s = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = J.createElement(i.h, this.options)), i);
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
    let o, i = 0;
    for (const s of e) i === t.length ? t.push(o = new K(this.j(j()), this.j(j()), this, this.options)) : o = t[i], o._$AI(s), i++;
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
  constructor(e, t, o, i, s) {
    this.type = 1, this._$AH = w, this._$AN = void 0, this.element = e, this.name = t, this._$AM = i, this.options = s, o.length > 2 || o[0] !== "" || o[1] !== "" ? (this._$AH = Array(o.length - 1)
      .fill(new String), this.strings = o) : this._$AH = w
  }
  get tagName() {
    return this.element.tagName
  }
  get _$AU() {
    return this._$AM._$AU
  }
  _$AI(e, t = this, o, i) {
    const s = this.strings;
    let r = !1;
    if (s === void 0) e = V(this, e, t, 0), r = !F(e) || e !== this._$AH && e !== B, r && (this._$AH = e);
    else {
      const c = e;
      let l, h;
      for (e = s[0], l = 0; l < s.length - 1; l++) h = V(this, c[o + l], t, l), h === B && (h = this._$AH[l]), r || (r = !F(h) || h !== this._$AH[l]), h === w ? e = w : e !== w && (e += (h != null ? h : "") + s[l + 1]), this._$AH[l] = h
    }
    r && !i && this.P(e)
  }
  P(e) {
    e === w ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e != null ? e : "")
  }
}
class rt extends ee {
  constructor() {
    super(...arguments), this.type = 3
  }
  P(e) {
    this.element[this.name] = e === w ? void 0 : e
  }
}
const at = H ? H.emptyScript : "";
class lt extends ee {
  constructor() {
    super(...arguments), this.type = 4
  }
  P(e) {
    e && e !== w ? this.element.setAttribute(this.name, at) : this.element.removeAttribute(this.name)
  }
}
class ht extends ee {
  constructor(e, t, o, i, s) {
    super(e, t, o, i, s), this.type = 5
  }
  _$AI(e, t = this) {
    var o;
    if ((e = (o = V(this, e, t, 0)) !== null && o !== void 0 ? o : w) === B) return;
    const i = this._$AH,
      s = e === w && i !== w || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive,
      r = e !== w && (i === w || s);
    s && this.element.removeEventListener(this.name, this, i), r && this.element.addEventListener(this.name, this, e), this._$AH = e
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
    V(this, e)
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
const ct = n => e => typeof e == "function" ? ((t, o) => (window.customElements.define(t, o), o))(n, e) : ((t, o) => {
  const {
    kind: i,
    elements: s
  } = o;
  return {
    kind: i,
    elements: s,
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
  return (e, t) => t !== void 0 ? ((o, i, s) => {
    i.constructor.createProperty(s, o)
  })(n, e, t) : ut(n, e)
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function te(n) {
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
  var i;
  if (o === void 0) {
    const s = (i = t.originalKey) !== null && i !== void 0 ? i : t.key,
      r = e != null ? {
        kind: "method",
        placement: "prototype",
        key: s,
        descriptor: e(t.key)
      } : {
        ...t,
        key: s
      };
    return n != null && (r.finisher = function(c) {
      n(c, s)
    }), r
  } {
    const s = t.constructor;
    e !== void 0 && Object.defineProperty(t, o, e(o)), n == null || n(s, o)
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
          var i, s;
          return (s = (i = this.renderRoot) === null || i === void 0 ? void 0 : i.querySelector(n)) !== null && s !== void 0 ? s : null
        },
        enumerable: !0,
        configurable: !0
      };
      if (e) {
        const i = typeof t == "symbol" ? Symbol() : "__" + t;
        o.get = function() {
          var s, r;
          return this[i] === void 0 && (this[i] = (r = (s = this.renderRoot) === null || s === void 0 ? void 0 : s.querySelector(n)) !== null && r !== void 0 ? r : null), this[i]
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
var R = (n => (n.PDP_Pageload = "PDP_Pageload", n.PDP_Click = "PDP_Click", n.PDP_Social_Click = "PDP_Social_Click", n.PDP_Image_Click = "PDP_Image_Click", n.PDP_Section_EnterViewport = "PDP_Section_EnterViewport", n.PDP_Recommendation_Load = "PDP_Recommendation_Load", n.PDP_Recommendation_EnterViewport = "PDP_Recommendation_EnterViewport", n.PDP_Recommendation_Click = "PDP_Recommendation_Click", n.PDP_Rating_Click = "PDP_Rating_Click", n.PDP_Information_Load = "PDP_Information_Load", n.General_Pageload = "General_Pageload", n.General_Recommendation_Load = "General_Recommendation_Load", n.General_RecommendationProduct_EnterViewport = "General_RecommendationProduct_EnterViewport", n.General_Product_Click = "General_Product_Click", n.General_Section_EnterViewport = "General_Section_EnterViewport", n.General_Teaser_Click = "General_Teaser_Click", n.General_Link_Click = "General_Link_Click", n.PLP_Pageload = "PLP_Pageload", n.PLP_FilterSelect_Click = "PLP_FilterSelect_Click", n.General_SearchTermConfirm_Click = "General_SearchTermConfirm_Click", n.Cart_Pageload = "Cart_Pageload", n.Cart_Button_Click = "Cart_Button_Click", n.Cart_Success_Pageload = "Cart_Success_Pageload", n.General_Detection_Pageload = "General_Detection_Pageload", n.General_Product_View = "General_Product_View", n.General_Promotion_View = "General_Promotion_View", n.General_Promotion_Load = "General_Promotion_Load", n.General_Promotion_Click = "General_Promotion_Click", n.Wishlist_Pageload = "Wishlist_Pageload", n.Wishlist_Button_Click = "Wishlist_Button_Click", n.StoreSearch_Pageload = "StoreSearch_Pageload", n.StoreSearch_Click = "StoreSearch_Click", n.StoreSearchDP_Pageload = "StoreSearchDP_Pageload", n.StoreSearchDP_Click = "StoreSearchDP_Click", n.MyAccount_Pageload = "MyAccount_Pageload", n.MyAccount_Click = "MyAccount_Click", n))(R || {});
class q {
  static getCookieValue(e) {
    var o;
    const t = "(^|;) ?" + e + "=([^;]*)(;|$)";
    try {
      const i = (o = document == null ? void 0 : document.cookie) == null ? void 0 : o.match(t),
        s = i && i[2];
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
      const i = decodeURIComponent(t)
        .replace(/%2c/g, ",")
        .replace(/'/g, '"')
        .replace(/([{\[,])\s*([a-zA-Z0-9_]+?):/g, '$1"$2":'),
        s = JSON.parse(i);
      return s.hasOwnProperty("marketing") && s.hasOwnProperty("statistics") && s.hasOwnProperty("preferences") ? s : void 0
    } catch {
      return
    }
  }
  static onConsent() {
    return new Promise(e => {
      var b, p;
      const t = q.getConsentCookie(),
        i = ((b = window == null ? void 0 : window.Cookiebot) != null && b.hasResponse ? (p = window == null ? void 0 : window.Cookiebot) == null ? void 0 : p.consent : void 0) || t;
      if (i) {
        e(i);
        return
      }
      let s, r = 0;
      const c = 30,
        l = () => {
          var _;
          clearTimeout(s), window.removeEventListener("CookiebotOnLoad", l), e((_ = window == null ? void 0 : window.Cookiebot) == null ? void 0 : _.consent)
        },
        h = () => {
          var y, P, D;
          if (!((y = window == null ? void 0 : window.Cookiebot) == null ? void 0 : y.consent) && r < c) {
            r++, s = setTimeout(h, 100);
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
      h()
    })
  }
}(function() {
  if (typeof document > "u" || "adoptedStyleSheets" in document) return;

  function n(a, u) {
    for (var d = 0; d < u.length; d++) {
      var g = u[d];
      g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(a, g.key, g)
    }
  }

  function e(a, u, d) {
    return u && n(a.prototype, u), d && n(a, d), a
  }
  var t = "ShadyCSS" in window && !window.ShadyCSS.nativeShadow,
    o = [],
    i = [],
    s = [],
    r = new WeakMap,
    c = new WeakMap,
    l = new WeakMap,
    h = new WeakMap,
    b = new WeakMap,
    p = new WeakMap,
    _ = {
      loaded: !1
    },
    y = {
      body: null,
      CSSStyleSheet: null
    },
    P = CSSStyleSheet,
    D = /@import/;

  function Be(a, u) {
    var d = u === document ? "Document" : "ShadowRoot";
    if (!Array.isArray(a)) throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + d + ": Iterator getter is not callable.");
    if (!a.every(ve)) throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + d + ": Failed to convert value to 'CSSStyleSheet'");
    var g = a.filter(function(f, m) {
      return a.indexOf(f) === m
    });
    return r.set(u, g), g
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
    return u.length && (console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"), u.forEach(function(g) {
      d = d.replace(g, "")
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

  function me(a) {
    var u = c.get(a),
      d = u.adopters,
      g = u.basicStyleElement;
    d.forEach(function(f) {
      f.innerHTML = g.innerHTML
    })
  }
  var Q = function() {
    function a() {
      var d = document.createElement("style");
      _.loaded ? y.body.appendChild(d) : (document.head.appendChild(d), d.disabled = !0, o.push(d)), c.set(this, {
        adopters: new Map,
        actions: [],
        basicStyleElement: d
      })
    }
    var u = a.prototype;
    return u.replace = function(g) {
      var f = _e(g);
      try {
        if (!c.has(this)) throw new TypeError(Z);
        var m = c.get(this),
          v = m.basicStyleElement;
        return v.innerHTML = f, me(this), Promise.resolve(this)
      } catch ($) {
        return Promise.reject($)
      }
    }, u.replaceSync = function(g) {
      var f = _e(g);
      if (!c.has(this)) throw new TypeError(Z);
      var m = c.get(this),
        v = m.basicStyleElement;
      return v.innerHTML = f, me(this), this
    }, e(a, [{
      key: "cssRules",
      get: function() {
        if (!c.has(this)) throw new TypeError(Z);
        var g = c.get(this),
          f = g.basicStyleElement;
        return f.sheet.cssRules
      }
    }]), a
  }();
  Ve.forEach(function(a) {
    Q.prototype[a] = function() {
      if (!c.has(this)) throw new TypeError(Z);
      var u = arguments,
        d = c.get(this),
        g = d.adopters,
        f = d.actions,
        m = d.basicStyleElement,
        v = m.sheet[a].apply(m.sheet, u);
      return g.forEach(function($) {
        $.sheet && $.sheet[a].apply($.sheet, u)
      }), f.push([a, u]), v
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
    for (var u = document.createDocumentFragment(), d = ge(a), g = b.get(a), f = 0, m = d.length; f < m; f++) {
      var v = c.get(d[f]),
        $ = v.adopters,
        E = v.basicStyleElement,
        S = $.get(a);
      S ? (g.disconnect(), u.appendChild(S), (!S.innerHTML || S.sheet && !S.sheet.cssText) && (S.innerHTML = E.innerHTML), g.observe()) : (S = document.createElement("style"), S.innerHTML = E.innerHTML, l.set(S, a), p.set(S, 0), $.set(a, S), u.appendChild(S)), a === document.head && i.push(S)
    }
    a.insertBefore(u, a.lastChild);
    for (var G = 0, oe = d.length; G < oe; G++) {
      var z = c.get(d[G]),
        ne = z.adopters,
        L = z.actions,
        Y = ne.get(a),
        We = p.get(Y);
      if (L.length > 0) {
        for (var ie = We, je = L.length; ie < je; ie++) {
          var we = L[ie],
            Fe = we[0],
            Je = we[1];
          Y.sheet[Fe].apply(Y.sheet, Je)
        }
        p.set(Y, L.length - 1)
      }
    }
  }

  function Ge(a, u) {
    for (var d = ge(a), g = 0, f = u.length; g < f; g++)
      if (!(d.indexOf(u[g]) > -1)) {
        var m = c.get(u[g]),
          v = m.adopters,
          $ = b.get(a),
          E = v.get(a);
        E || (E = v.get(document.head)), $.disconnect(), E.parentNode.removeChild(E), $.observe()
      }
  }

  function ze(a) {
    if (!!document)
      for (var u = 0, d = a.length; u < d; u++) {
        for (var g = a[u], f = g.addedNodes, m = g.removedNodes, v = 0, $ = m.length; v < $; v++) {
          var E = l.get(m[v]);
          E && X(E)
        }
        if (!t)
          for (var S = 0, G = f.length; S < G; S++)
            for (var oe = document.createNodeIterator(f[S], NodeFilter.SHOW_ELEMENT, function(ne) {
                var L = h.get(ne);
                return L && L.adoptedStyleSheets.length > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
              }, null, !1), z = void 0; z = oe.nextNode();) X(h.get(z))
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
    b.set(a, d), d.observe()
  }

  function be() {
    var a = document.createElement("iframe");
    a.hidden = !0, document.body.appendChild(a), y.body = a.contentWindow.document.body, y.CSSStyleSheet = a.contentWindow.CSSStyleSheet, fe(a.contentWindow.CSSStyleSheet.prototype), ye(document.body), _.loaded = !0;
    for (var u = document.createDocumentFragment(), d = 0, g = o.length; d < g; d++) o[d].disabled = !1, u.appendChild(o[d]);
    y.body.appendChild(u);
    for (var f = 0, m = i.length; f < m; f++) u.appendChild(i[f]);
    document.body.insertBefore(u, document.body.firstChild);
    for (var v = 0, $ = s.length; v < $; v++) X(s[v]);
    s.length = 0, o.length = 0, i.length = 0
  }

  function Ne() {
    var a = {
      configurable: !0,
      get: function() {
        return r.get(this) || []
      },
      set: function(g) {
        var f = r.get(this) || [];
        Be(g, this);
        var m = this === document ? pe() ? this.head : this.body : this,
          v = "isConnected" in m ? m.isConnected : document.body.contains(m);
        v ? window.requestAnimationFrame(function() {
          X(m), Ge(m, f)
        }) : s.push(m)
      }
    };
    if (Object.defineProperty(Document.prototype, "adoptedStyleSheets", a), typeof ShadowRoot < "u") {
      var u = Element.prototype.attachShadow;
      Element.prototype.attachShadow = function() {
        var d = t ? this : u.apply(this, arguments);
        return h.set(this, d), ye(d), d
      }, Object.defineProperty(ShadowRoot.prototype, "adoptedStyleSheets", a)
    }
  }
  fe(P.prototype), window.CSSStyleSheet = Q, Ne(), pe() ? document.addEventListener("DOMContentLoaded", be) : be()
})();
const _t = `.ad-tooltip--theme{font-size:12/16rem;font-weight:400;border-radius:2/16rem;box-shadow:0 2px 4px #00000026;padding:16/16rem;color:#4e5761;text-align:left;background-color:#fafafa;border:1px solid #E3E4E5}@media (min-width: 1280px){.ad-tooltip--theme{font-size:14/16rem}}.ad-tooltip--theme .tippy-arrow:after{display:block;content:"";width:11/16rem;height:11/16rem;background:#FAFAFA;border:1px solid #E3E4E5}.ad-tooltip--theme[x-placement^=top]{margin-bottom:8/16rem}.ad-tooltip--theme[x-placement^=top] .tippy-arrow{border-top-color:#fafafa}.ad-tooltip--theme[x-placement^=top] .tippy-arrow:after{transform:translate(-50%,-105%) rotate(45deg);border-left:none;border-top:none}.ad-tooltip--theme[x-placement^=bottom]{margin-top:8/16rem}.ad-tooltip--theme[x-placement^=bottom] .tippy-arrow{border-bottom-color:#fafafa}.ad-tooltip--theme[x-placement^=bottom] .tippy-arrow:after{transform:translate(-50%,5%) rotate(45deg);border-bottom:none;border-right:none}.ad-tooltip--theme[x-placement^=right]{margin-left:8/16rem}.ad-tooltip--theme[x-placement^=right] .tippy-arrow{border-right-color:#fafafa}.ad-tooltip--theme[x-placement^=right] .tippy-arrow:after{transform:translate(5%,-50%) rotate(45deg);border-top:none;border-right:none}.ad-tooltip--theme[x-placement^=left]{margin-right:8/16rem}.ad-tooltip--theme[x-placement^=left] .tippy-arrow{border-left-color:#fafafa}.ad-tooltip--theme[x-placement^=left] .tippy-arrow:after{transform:translate(-105%,-50%) rotate(45deg);border-left:none;border-bottom:none}:host{display:block;font-family:LidlFontCondPro,Trebuchet MS,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:16/16rem;line-height:1.4;color:#353b42;border-radius:2/16rem}:host a{text-decoration:none;color:unset}:host .banner{margin:1rem auto;position:relative}:host .banner--large{max-width:320px;height:150px;box-shadow:0 2px 4px #00000026}@media (min-width: 600px){:host .banner--large{max-width:970px;height:250px}}:host .banner--small{aspect-ratio:auto 4 / 3;width:100%}:host .banner-new{border-radius:1rem;background-color:#fff;box-shadow:0 2px 4px #00000026}:host .banner-new__wrapper{position:relative}:host .banner-new__img{width:100%;height:100%;border-style:none}:host .banner-new__label{padding:.5rem;border-radius:0 0 1rem 1rem}:host .banner-new__headline{word-wrap:break-word;overflow:hidden;line-height:120%;display:-webkit-box;min-height:3rem}:host .banner-old{display:block;position:relative;background-color:#fff;overflow:hidden}:host .banner-old__img{width:100%;height:100%;border-style:none}:host .banner-old__label{position:absolute;bottom:0;left:0;width:100%;background-color:#ffffffb3;padding:.5rem 1rem;color:#353b42}:host .banner-old__headline{word-wrap:break-word;overflow:hidden;max-height:3rem;line-height:1.4rem;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}:host .ads-tag{display:flex;position:absolute;bottom:0;right:0;padding:4px;background-color:#fff}:host .ads-tag__img{width:100%;height:100%;border-style:none}:host .ads-tag__icon{margin-left:4px;margin-top:3px;width:12px;height:12px;mask-image:url(/cdn/assets/icons/1.0.0/information-circle.svg);-webkit-mask-image:url(/cdn/assets/icons/1.0.0/information-circle.svg);background-color:#4e5761}:host .ads-tag__text{font-size:.75rem;font-weight:400}@media (min-width: 1280px){:host .ads-tag__text{font-size:.875rem}}:host .rounded-corners{border-radius:1rem 1rem 0 0}:host .ad-tooltip{background:none;border:none;padding:0;margin:0;cursor:pointer;color:inherit;display:inline-flex}:host .skeleton{width:100%;max-width:320px;height:150px;position:relative;margin:1rem auto;display:flex;vertical-align:middle;cursor:progress;background-color:#e3e4e6;background-image:linear-gradient(90deg,transparent 25%,#fff 50%,transparent 75%);background-size:200% 200%;animation:skeleton-shimmer 2s linear infinite}@keyframes skeleton-shimmer{0%{background-position-x:200%}50%{background-position-x:100%}to{background-position-x:0%}}@media (min-width: 600px){:host .skeleton{max-width:970px;height:250px}}
`;
var ft = Object.defineProperty,
  mt = Object.getOwnPropertyDescriptor,
  k = (n, e, t, o) => {
    for (var i = o > 1 ? void 0 : o ? mt(e, t) : e, s = n.length - 1, r; s >= 0; s--)(r = n[s]) && (i = (o ? r(e, t, i) : r(i)) || i);
    return o && i && ft(e, t, i), i
  };
const Ue = new CSSStyleSheet;
Ue.replaceSync(_t);
let C = class extends W {
  constructor() {
    super(...arguments), this.tagText = "Ads", this.showTag = !0, this.size = "large", this.title = "", this.showLoading = !1, this.debug = !1, this.adsData = null, this.requestData = "", this._showNewDesign = !1, this._showBanner = !1, this._showSkeleton = !1, this._mql = window.matchMedia && window.matchMedia("(max-width: 600px)"), this._debugCookie = !1, this._debugInstanceId = Math.floor(Math.random() * 1e3), this._requestInProgress = !1, this._toggleDesign = n => {
      this.consoleDebugLog("_toggleDesign", n), this._showNewDesign = n && n.matches
    }
  }
  static get styles() {
    return [Ue]
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
    return this.consoleDebugLog("adsImageTemplate", this._pqData), A`
      <a .href="${(n=this._pqData)==null?void 0:n.clickthru}" target="_blank"
         @click=${this._onClickImpression}>
        <img src="${(e=this._pqData)==null?void 0:e.asset_url}" alt="Banner Ads" class="ads-tag__img">
      </a>
      ${this.showTag?this.adsTagTemplate():""}
    `
  }
  newDesignTemplate() {
    var n, e;
    return this.consoleDebugLog("newDesignTemplate", this._pqData), A`
      <div class="banner-new">
        <a .href="${(n=this._pqData)==null?void 0:n.clickthru}" target="_blank"
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
    return this.consoleDebugLog("oldDesignTemplate", this._pqData), A`
      <div class="banner-old">
        <a .href="${(n=this._pqData)==null?void 0:n.clickthru}" target="_blank"
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
  updated(n) {
    if (this.consoleDebugLog("updated called", n), n.has("requestData")) {
      const e = n.get("requestData");
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
    const n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    let e = new Array(36),
      t = 0,
      o;
    for (let r = 0; r < 36; r++) r === 8 || r === 13 || r === 18 || r === 23 ? e[r] = "-" : r === 14 ? e[r] = "4" : (t <= 2 && (t = 33554432 + Math.random() * 16777216 | 0), o = t & 15, t = t >> 4, e[r] = n[r === 19 ? o & 3 | 8 : o]);
    const i = e.join(""),
      s = "; max-age=" + 24 * 60 * 60 * 730;
    return document.cookie = "adSessionId=" + i + s + "; secure; path=/", i
  }
  fetchWithTimeout(n, e = {}, t = 5e3) {
    let o = {
        ...e
      },
      i = null;
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
          timeoutId: i
        }), s.abort(), i && clearTimeout(i);
        else {
          let h = t - (l - r);
          h < 0 && (h = 0), this.consoleDebugLog("fetchWithTimeout abortFunc startTimer", {
            currTime: l,
            startTime: r,
            "currTime - startTime": l - r,
            time: t,
            timeoutId: i,
            remainingTime: h
          }), i = setTimeout(c, h)
        }
      };
      c()
    }
    return fetch(n, o)
      .then(s => {
        if (this.consoleDebugLog("fetchWithTimeout response ok", s.ok), i && clearTimeout(i), !s.ok) throw new Error(`${s.status}: ${s.statusText}`);
        return s
      })
      .catch(s => {
        throw this.consoleDebugLog("fetchWithTimeout response error", s), i && clearTimeout(i), this._showSkeleton = !1, s.name === "AbortError" ? new Error("Response timed out") : new Error(s.message)
      })
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
          .then(i => i[0]), this.consoleDebugLog("_getAd PqData", this._pqData), !(this._pqData && ((n = this._pqData) == null ? void 0 : n.clickthru))) return;
        this._showBanner = !0, setTimeout(() => {
          if (this.consoleDebugLog("_getAd SendBannerImpression"), this.requestUpdate(), this._bannerAdsImpression(), this.consoleDebugLog("_getAd Register Intersection observer host ", this.hostElement), !("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype)) {
            this._bannerAdsView();
            return
          }
          let s = 0,
            r = !1;
          const c = new IntersectionObserver(l => {
            l.forEach(h => {
              const b = Math.round(h.intersectionRatio * 100),
                p = Math.round(h.time);
              if (this.consoleDebugLog(`isIntersecting: ${h.isIntersecting}, Ratio:${b}, Time: ${p}`), !h.isIntersecting) {
                s && (s = 0);
                return
              }
              b > 45 && (s || (this.consoleDebugLog(" Start counting ", s), s = p), this.consoleDebugLog("Passed 50%"), r = !0), p - s >= 1e3 && r && (this.consoleDebugLog("Send impression"), this._bannerAdsView(), c.unobserve(this.hostElement))
            })
          }, {
            root: null,
            rootMargin: "0px",
            threshold: [0, .5, 1]
          });
          c.observe(this.hostElement)
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
    const n = ((e = this._pqData) == null ? void 0 : e.clickthru) || "";
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
    fromAttribute: n => n && JSON.parse(decodeURI(n))
  }
})], C.prototype, "adsData", 2);
k([x({
  type: String,
  converter: {
    fromAttribute: n => n && decodeURI(n)
  }
})], C.prototype, "requestData", 2);
k([te()], C.prototype, "_pqData", 2);
k([te()], C.prototype, "_showNewDesign", 2);
k([te()], C.prototype, "_showBanner", 2);
k([te()], C.prototype, "_showSkeleton", 2);
k([gt(".banner", !1)], C.prototype, "hostElement", 2);
C = k([ct("banner-ads")], C);