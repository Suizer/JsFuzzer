(function() {
  const e = document.createElement("link")
    .relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver(i => {
      for (const s of i)
        if (s.type === "childList")
          for (const r of s.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && n(r)
    })
    .observe(document, {
      childList: !0,
      subtree: !0
    });

  function t(i) {
    const s = {};
    return i.integrity && (s.integrity = i.integrity), i.referrerpolicy && (s.referrerPolicy = i.referrerpolicy), i.crossorigin === "use-credentials" ? s.credentials = "include" : i.crossorigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
  }

  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = t(i);
    fetch(i.href, s)
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
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== Ie) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (pe && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Se.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet)
        .replaceSync(this.cssText), n && Se.set(t, e))
    }
    return e
  }
  toString() {
    return this.cssText
  }
}
const Qe = o => new Ze(typeof o == "string" ? o : o + "", void 0, Ie),
  Xe = (o, e) => {
    pe ? o.adoptedStyleSheets = e.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet) : e.forEach(t => {
      const n = document.createElement("style"),
        i = window.litNonce;
      i !== void 0 && n.setAttribute("nonce", i), n.textContent = t.cssText, o.appendChild(n)
    })
  },
  $e = pe ? o => o : o => o instanceof CSSStyleSheet ? (e => {
    let t = "";
    for (const n of e.cssRules) t += n.cssText;
    return Qe(t)
  })(o) : o;
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
    toAttribute(o, e) {
      switch (e) {
        case Boolean:
          o = o ? Ye : null;
          break;
        case Object:
        case Array:
          o = o == null ? o : JSON.stringify(o)
      }
      return o
    },
    fromAttribute(o, e) {
      let t = o;
      switch (e) {
        case Boolean:
          t = o !== null;
          break;
        case Number:
          t = o === null ? null : Number(o);
          break;
        case Object:
        case Array:
          try {
            t = JSON.parse(o)
          } catch {
            t = null
          }
      }
      return t
    }
  },
  Me = (o, e) => e !== o && (e == e || o == o),
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
      const i = this._$Ep(n, t);
      i !== void 0 && (this._$Ev.set(i, n), e.push(i))
    }), e
  }
  static createProperty(e, t = ae) {
    if (t.state && (t.attribute = !1), this.finalize(), this.elementProperties.set(e, t), !t.noAccessor && !this.prototype.hasOwnProperty(e)) {
      const n = typeof e == "symbol" ? Symbol() : "__" + e,
        i = this.getPropertyDescriptor(e, n, t);
      i !== void 0 && Object.defineProperty(this.prototype, e, i)
    }
  }
  static getPropertyDescriptor(e, t, n) {
    return {
      get() {
        return this[t]
      },
      set(i) {
        const s = this[e];
        this[t] = i, this.requestUpdate(e, s, n)
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
      for (const i of n) this.createProperty(i, t[i])
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0)
        .reverse());
      for (const i of n) t.unshift($e(i))
    } else e !== void 0 && t.push($e(e));
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
    var i, s;
    const r = this.constructor._$Ep(e, n);
    if (r !== void 0 && n.reflect === !0) {
      const d = ((s = (i = n.converter) === null || i === void 0 ? void 0 : i.toAttribute) !== null && s !== void 0 ? s : ue.toAttribute)(t, n.type);
      this._$El = e, d == null ? this.removeAttribute(r) : this.setAttribute(r, d), this._$El = null
    }
  }
  _$AK(e, t) {
    var n, i;
    const s = this.constructor,
      r = s._$Ev.get(e);
    if (r !== void 0 && this._$El !== r) {
      const d = s.getPropertyOptions(r),
        l = d.converter,
        c = (i = (n = l == null ? void 0 : l.fromAttribute) !== null && n !== void 0 ? n : typeof l == "function" ? l : null) !== null && i !== void 0 ? i : ue.fromAttribute;
      this._$El = r, this[r] = c(t, d.type), this._$El = null
    }
  }
  requestUpdate(e, t, n) {
    let i = !0;
    e !== void 0 && (((n = n || this.constructor.getPropertyOptions(e))
      .hasChanged || Me)(this[e], t) ? (this._$AL.has(e) || this._$AL.set(e, t), n.reflect === !0 && this._$El !== e && (this._$EC === void 0 && (this._$EC = new Map), this._$EC.set(e, n))) : i = !1), !this.isUpdatePending && i && (this._$E_ = this._$Ej())
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
    const n = this._$AL;
    try {
      t = this.shouldUpdate(n), t ? (this.willUpdate(n), (e = this._$ES) === null || e === void 0 || e.forEach(i => {
        var s;
        return (s = i.hostUpdate) === null || s === void 0 ? void 0 : s.call(i)
      }), this.update(n)) : this._$Ek()
    } catch (i) {
      throw t = !1, this._$Ek(), i
    }
    t && this._$AE(n)
  }
  willUpdate(e) {}
  _$AE(e) {
    var t;
    (t = this._$ES) === null || t === void 0 || t.forEach(n => {
      var i;
      return (i = n.hostUpdated) === null || i === void 0 ? void 0 : i.call(n)
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
    createHTML: o => o
  }) : void 0,
  O = `lit$${(Math.random()+"").slice(9)}$`,
  qe = "?" + O,
  et = `<${qe}>`,
  V = document,
  F = (o = "") => V.createComment(o),
  J = o => o === null || typeof o != "object" && typeof o != "function",
  He = Array.isArray,
  tt = o => He(o) || typeof(o == null ? void 0 : o[Symbol.iterator]) == "function",
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
  nt = o => (e, ...t) => ({
    _$litType$: o,
    strings: e,
    values: t
  }),
  E = nt(1),
  G = Symbol.for("lit-noChange"),
  b = Symbol.for("lit-nothing"),
  xe = new WeakMap,
  ot = (o, e, t) => {
    var n, i;
    const s = (n = t == null ? void 0 : t.renderBefore) !== null && n !== void 0 ? n : e;
    let r = s._$litPart$;
    if (r === void 0) {
      const d = (i = t == null ? void 0 : t.renderBefore) !== null && i !== void 0 ? i : null;
      s._$litPart$ = r = new Z(e.insertBefore(F(), d), d, void 0, t != null ? t : {})
    }
    return r._$AI(o), r
  },
  H = V.createTreeWalker(V, 129, null, !1),
  it = (o, e) => {
    const t = o.length - 1,
      n = [];
    let i, s = e === 2 ? "<svg>" : "",
      r = z;
    for (let l = 0; l < t; l++) {
      const c = o[l];
      let w, p, _ = -1,
        v = 0;
      for (; v < c.length && (r.lastIndex = v, p = r.exec(c), p !== null);) v = r.lastIndex, r === z ? p[1] === "!--" ? r = Ee : p[1] !== void 0 ? r = De : p[2] !== void 0 ? (Ue.test(p[2]) && (i = RegExp("</" + p[2], "g")), r = I) : p[3] !== void 0 && (r = I) : r === I ? p[0] === ">" ? (r = i != null ? i : z, _ = -1) : p[1] === void 0 ? _ = -2 : (_ = r.lastIndex - p[2].length, w = p[1], r = p[3] === void 0 ? I : p[3] === '"' ? Le : Te) : r === Le || r === Te ? r = I : r === Ee || r === De ? r = z : (r = I, i = void 0);
      const P = r === I && o[l + 1].startsWith("/>") ? " " : "";
      s += r === z ? c + et : _ >= 0 ? (n.push(w), c.slice(0, _) + "$lit$" + c.slice(_) + O + P) : c + O + (_ === -2 ? (n.push(void 0), l) : P)
    }
    const d = s + (o[t] || "<?>") + (e === 2 ? "</svg>" : "");
    if (!Array.isArray(o) || !o.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return [Pe !== void 0 ? Pe.createHTML(d) : d, n]
  };
class K {
  constructor({
    strings: e,
    _$litType$: t
  }, n) {
    let i;
    this.parts = [];
    let s = 0,
      r = 0;
    const d = e.length - 1,
      l = this.parts,
      [c, w] = it(e, t);
    if (this.el = K.createElement(c, n), H.currentNode = this.el.content, t === 2) {
      const p = this.el.content,
        _ = p.firstChild;
      _.remove(), p.append(..._.childNodes)
    }
    for (;
      (i = H.nextNode()) !== null && l.length < d;) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) {
          const p = [];
          for (const _ of i.getAttributeNames())
            if (_.endsWith("$lit$") || _.startsWith(O)) {
              const v = w[r++];
              if (p.push(_), v !== void 0) {
                const P = i.getAttribute(v.toLowerCase() + "$lit$")
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
            } for (const _ of p) i.removeAttribute(_)
        }
        if (Ue.test(i.tagName)) {
          const p = i.textContent.split(O),
            _ = p.length - 1;
          if (_ > 0) {
            i.textContent = U ? U.emptyScript : "";
            for (let v = 0; v < _; v++) i.append(p[v], F()), H.nextNode(), l.push({
              type: 2,
              index: ++s
            });
            i.append(p[_], F())
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === qe) l.push({
          type: 2,
          index: s
        });
        else {
          let p = -1;
          for (;
            (p = i.data.indexOf(O, p + 1)) !== -1;) l.push({
            type: 7,
            index: s
          }), p += O.length - 1
        } s++
    }
  }
  static createElement(e, t) {
    const n = V.createElement("template");
    return n.innerHTML = e, n
  }
}

function N(o, e, t = o, n) {
  var i, s, r, d;
  if (e === G) return e;
  let l = n !== void 0 ? (i = t._$Cl) === null || i === void 0 ? void 0 : i[n] : t._$Cu;
  const c = J(e) ? void 0 : e._$litDirective$;
  return (l == null ? void 0 : l.constructor) !== c && ((s = l == null ? void 0 : l._$AO) === null || s === void 0 || s.call(l, !1), c === void 0 ? l = void 0 : (l = new c(o), l._$AT(o, t, n)), n !== void 0 ? ((r = (d = t)
    ._$Cl) !== null && r !== void 0 ? r : d._$Cl = [])[n] = l : t._$Cu = l), l !== void 0 && (e = N(o, l._$AS(o, e.values), l, n)), e
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
      parts: i
    } = this._$AD, s = ((t = e == null ? void 0 : e.creationScope) !== null && t !== void 0 ? t : V)
      .importNode(n, !0);
    H.currentNode = s;
    let r = H.nextNode(),
      d = 0,
      l = 0,
      c = i[0];
    for (; c !== void 0;) {
      if (d === c.index) {
        let w;
        c.type === 2 ? w = new Z(r, r.nextSibling, this, e) : c.type === 1 ? w = new c.ctor(r, c.name, c.strings, this, e) : c.type === 6 && (w = new ct(r, this, e)), this.v.push(w), c = i[++l]
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
  constructor(e, t, n, i) {
    var s;
    this.type = 2, this._$AH = b, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = i, this._$C_ = (s = i == null ? void 0 : i.isConnected) === null || s === void 0 || s
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
    e = N(this, e, t), J(e) ? e === b || e == null || e === "" ? (this._$AH !== b && this._$AR(), this._$AH = b) : e !== this._$AH && e !== G && this.T(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.k(e) : tt(e) ? this.S(e) : this.T(e)
  }
  j(e, t = this._$AB) {
    return this._$AA.parentNode.insertBefore(e, t)
  }
  k(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.j(e))
  }
  T(e) {
    this._$AH !== b && J(this._$AH) ? this._$AA.nextSibling.data = e : this.k(V.createTextNode(e)), this._$AH = e
  }
  $(e) {
    var t;
    const {
      values: n,
      _$litType$: i
    } = e, s = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = K.createElement(i.h, this.options)), i);
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
    let n, i = 0;
    for (const s of e) i === t.length ? t.push(n = new Z(this.j(F()), this.j(F()), this, this.options)) : n = t[i], n._$AI(s), i++;
    i < t.length && (this._$AR(n && n._$AB.nextSibling, i), t.length = i)
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) === null || n === void 0 || n.call(this, !1, !0, t); e && e !== this._$AB;) {
      const i = e.nextSibling;
      e.remove(), e = i
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$C_ = e, (t = this._$AP) === null || t === void 0 || t.call(this, e))
  }
}
class te {
  constructor(e, t, n, i, s) {
    this.type = 1, this._$AH = b, this._$AN = void 0, this.element = e, this.name = t, this._$AM = i, this.options = s, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1)
      .fill(new String), this.strings = n) : this._$AH = b
  }
  get tagName() {
    return this.element.tagName
  }
  get _$AU() {
    return this._$AM._$AU
  }
  _$AI(e, t = this, n, i) {
    const s = this.strings;
    let r = !1;
    if (s === void 0) e = N(this, e, t, 0), r = !J(e) || e !== this._$AH && e !== G, r && (this._$AH = e);
    else {
      const d = e;
      let l, c;
      for (e = s[0], l = 0; l < s.length - 1; l++) c = N(this, d[n + l], t, l), c === G && (c = this._$AH[l]), r || (r = !J(c) || c !== this._$AH[l]), c === b ? e = b : e !== b && (e += (c != null ? c : "") + s[l + 1]), this._$AH[l] = c
    }
    r && !i && this.P(e)
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
  constructor(e, t, n, i, s) {
    super(e, t, n, i, s), this.type = 5
  }
  _$AI(e, t = this) {
    var n;
    if ((e = (n = N(this, e, t, 0)) !== null && n !== void 0 ? n : b) === G) return;
    const i = this._$AH,
      s = e === b && i !== b || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive,
      r = e !== b && (i === b || s);
    s && this.element.removeEventListener(this.name, this, i), r && this.element.addEventListener(this.name, this, e), this._$AH = e
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
class j extends q {
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
const ht = o => e => typeof e == "function" ? ((t, n) => (window.customElements.define(t, n), n))(o, e) : ((t, n) => {
  const {
    kind: i,
    elements: s
  } = n;
  return {
    kind: i,
    elements: s,
    finisher(r) {
      window.customElements.define(t, r)
    }
  }
})(o, e);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ut = (o, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? {
  ...e,
  finisher(t) {
    t.createProperty(e.key, o)
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
    t.createProperty(e.key, o)
  }
};

function x(o) {
  return (e, t) => t !== void 0 ? ((n, i, s) => {
    i.constructor.createProperty(s, n)
  })(o, e, t) : ut(o, e)
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ne(o) {
  return x({
    ...o,
    state: !0
  })
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pt = ({
  finisher: o,
  descriptor: e
}) => (t, n) => {
  var i;
  if (n === void 0) {
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
    return o != null && (r.finisher = function(d) {
      o(d, s)
    }), r
  } {
    const s = t.constructor;
    e !== void 0 && Object.defineProperty(t, n, e(n)), o == null || o(s, n)
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function gt(o, e) {
  return pt({
    descriptor: t => {
      const n = {
        get() {
          var i, s;
          return (s = (i = this.renderRoot) === null || i === void 0 ? void 0 : i.querySelector(o)) !== null && s !== void 0 ? s : null
        },
        enumerable: !0,
        configurable: !0
      };
      if (e) {
        const i = typeof t == "symbol" ? Symbol() : "__" + t;
        n.get = function() {
          var s, r;
          return this[i] === void 0 && (this[i] = (r = (s = this.renderRoot) === null || s === void 0 ? void 0 : s.querySelector(o)) !== null && r !== void 0 ? r : null), this[i]
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
var M = (o => (o.PDP_Pageload = "PDP_Pageload", o.PDP_Click = "PDP_Click", o.PDP_Social_Click = "PDP_Social_Click", o.PDP_Image_Click = "PDP_Image_Click", o.PDP_Section_EnterViewport = "PDP_Section_EnterViewport", o.PDP_Recommendation_Load = "PDP_Recommendation_Load", o.PDP_Recommendation_EnterViewport = "PDP_Recommendation_EnterViewport", o.PDP_Recommendation_Click = "PDP_Recommendation_Click", o.PDP_Rating_Click = "PDP_Rating_Click", o.PDP_Information_Load = "PDP_Information_Load", o.General_Pageload = "General_Pageload", o.General_Recommendation_Load = "General_Recommendation_Load", o.General_RecommendationProduct_EnterViewport = "General_RecommendationProduct_EnterViewport", o.General_Product_Click = "General_Product_Click", o.General_Section_EnterViewport = "General_Section_EnterViewport", o.General_Teaser_Click = "General_Teaser_Click", o.General_Link_Click = "General_Link_Click", o.PLP_Pageload = "PLP_Pageload", o.PLP_FilterSelect_Click = "PLP_FilterSelect_Click", o.General_SearchTermConfirm_Click = "General_SearchTermConfirm_Click", o.Cart_Pageload = "Cart_Pageload", o.Cart_Button_Click = "Cart_Button_Click", o.Cart_Success_Pageload = "Cart_Success_Pageload", o.Banner_Promotion_Load = "Banner_Promotion_Load", o.General_Product_View = "General_Product_View", o.General_Promotion_View = "General_Promotion_View", o.General_Promotion_View_Split = "General_Promotion_View_Split", o.General_Promotion_Load = "General_Promotion_Load", o.General_Promotion_Click = "General_Promotion_Click", o.General_Navigation_Click = "General_Navigation_Click", o.Wishlist_Pageload = "Wishlist_Pageload", o.Wishlist_Button_Click = "Wishlist_Button_Click", o.StoreSearch_Pageload = "StoreSearch_Pageload", o.StoreSearch_Click = "StoreSearch_Click", o.StoreSearchDP_Pageload = "StoreSearchDP_Pageload", o.StoreSearchDP_Click = "StoreSearchDP_Click", o.MyAccount_Pageload = "MyAccount_Pageload", o.MyAccount_Click = "MyAccount_Click", o.Flyer_Click = "Flyer_Click", o.Flyer_View = "Flyer_View", o.Flyer_Categories_Select = "Flyer_Categories_Select", o.Kameleoon_Experiment = "Kameleoon_Experiment", o.Order_Cancellation_Click = "Order_Cancellation_Click", o.Order_ViewDetails_Click = "Order_ViewDetails_Click", o.Order_Invoice_Download_Click = "Order_Invoice_Download_Click", o.Order_Return_Click = "Order_Return_Click", o.Order_Cancellation_Confirmation = "Order_Cancellation_Confirmation", o.Order_Return_Confirmation = "Order_Return_Confirmation", o))(M || {});
const L = {
  statistics: "C0003",
  preferences: "C0002",
  marketing: "C0004"
};
class S {
  static getCookieValue(e) {
    var n;
    const t = "(^|;) ?" + e + "=([^;]*)(;|$)";
    try {
      const i = (n = document == null ? void 0 : document.cookie) == null ? void 0 : n.match(t),
        s = i && i[2];
      return s || ""
    } catch {
      return ""
    }
  }
  static getCookieBotConsentCookie() {
    const e = "CookieConsent";
    try {
      const t = S.getCookieValue(e);
      if (!t) return null;
      const i = decodeURIComponent(t)
        .replace(/%2c/g, ",")
        .replace(/'/g, '"')
        .replace(/([{\[,])\s*([a-zA-Z0-9_]+?):/g, '$1"$2":'),
        s = JSON.parse(i);
      return s.hasOwnProperty("marketing") && s.hasOwnProperty("statistics") && s.hasOwnProperty("preferences") ? s : null
    } catch {
      return null
    }
  }
  static getOneTrustConsentCookie() {
    const e = "OptanonConsent";
    try {
      const t = S.getCookieValue(e);
      if (!t) return null;
      const i = decodeURIComponent(t)
        .split("&")
        .reduce((r, d) => {
          const [l, c] = d.split("=");
          return r[l] = c, r
        }, {}),
        {
          groups: s
        } = i;
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
    const e = S.getCookieBotConsentCookie();
    return S.getOneTrustConsentCookie() || e
  }
  static getWindowsConsent() {
    var n, i, s, r, d;
    const e = (n = window == null ? void 0 : window.Cookiebot) == null ? void 0 : n.hasResponse;
    return S.OneTrustResponse() ? {
      marketing: (i = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : i.includes(L.marketing),
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
      const t = S.getConsentCookie(),
        i = S.getWindowsConsent() || t;
      if ((S.OneTrustResponse() || ((w = window == null ? void 0 : window.Cookiebot) == null ? void 0 : w.hasResponse)) && i) {
        e(i);
        return
      }
      let s, r = 0;
      const d = 300,
        l = () => {
          var p, _, v, P;
          clearTimeout(s), window.removeEventListener("CookieConsentLoad", l), S.OneTrustResponse() ? e({
            marketing: (p = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : p.includes(L.marketing),
            statistics: (_ = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : _.includes(L.statistics),
            preferences: (v = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : v.includes(L.preferences)
          }) : e((P = window == null ? void 0 : window.Cookiebot) == null ? void 0 : P.consent)
        },
        c = () => {
          var _, v, P, T;
          if (!(S.OneTrustResponse() || ((_ = window == null ? void 0 : window.Cookiebot) == null ? void 0 : _.hasResponse)) && r < d) {
            r++, s = setTimeout(c, 1e3);
            return
          }
          if (S.OneTrustResponse() || ((v = window == null ? void 0 : window.Cookiebot) == null ? void 0 : v.hasResponse)) {
            l();
            return
          }
          if (S.OneTrustResponse() === !1 && ((P = window == null ? void 0 : window.OneTrust) == null || P.OnConsentChanged(() => l())), ((T = window == null ? void 0 : window.Cookiebot) == null ? void 0 : T.hasResponse) === !1) {
            window.addEventListener("CookiebotOnLoad", l);
            return
          }
          l()
        };
      c()
    })
  }
  static async getNecessaryUUID4CookieIfNotPresent() {
    ["lidl.de", "lidl.fr"].includes(window.location.hostname.slice(window.location.hostname.indexOf(".") + 1)) && await fetch("/t/gtm/uuid4-cookie")
  }
}(function() {
  if (typeof document > "u" || "adoptedStyleSheets" in document) return;

  function o(a, u) {
    for (var h = 0; h < u.length; h++) {
      var g = u[h];
      g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(a, g.key, g)
    }
  }

  function e(a, u, h) {
    return u && o(a.prototype, u), h && o(a, h), a
  }
  var t = "ShadyCSS" in window && !window.ShadyCSS.nativeShadow,
    n = [],
    i = [],
    s = [],
    r = new WeakMap,
    d = new WeakMap,
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
    T = /@import/;

  function Ge(a, u) {
    var h = u === document ? "Document" : "ShadowRoot";
    if (!Array.isArray(a)) throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + h + ": Iterator getter is not callable.");
    if (!a.every(we)) throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + h + ": Failed to convert value to 'CSSStyleSheet'");
    var g = a.filter(function(f, m) {
      return a.indexOf(f) === m
    });
    return r.set(u, g), g
  }

  function ge() {
    return document.readyState === "loading"
  }

  function _e(a) {
    return r.get(a.parentNode === document.documentElement ? document : a)
  }

  function fe(a) {
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
    h.forEach(function(f) {
      f.innerHTML = g.innerHTML
    })
  }
  var X = function() {
    function a() {
      var h = document.createElement("style");
      _.loaded ? v.body.appendChild(h) : (document.head.appendChild(h), h.disabled = !0, n.push(h)), d.set(this, {
        adopters: new Map,
        actions: [],
        basicStyleElement: h
      })
    }
    var u = a.prototype;
    return u.replace = function(g) {
      var f = fe(g);
      try {
        if (!d.has(this)) throw new TypeError(Q);
        var m = d.get(this),
          y = m.basicStyleElement;
        return y.innerHTML = f, ve(this), Promise.resolve(this)
      } catch ($) {
        return Promise.reject($)
      }
    }, u.replaceSync = function(g) {
      var f = fe(g);
      if (!d.has(this)) throw new TypeError(Q);
      var m = d.get(this),
        y = m.basicStyleElement;
      return y.innerHTML = f, ve(this), this
    }, e(a, [{
      key: "cssRules",
      get: function() {
        if (!d.has(this)) throw new TypeError(Q);
        var g = d.get(this),
          f = g.basicStyleElement;
        return f.sheet.cssRules
      }
    }]), a
  }();
  Ne.forEach(function(a) {
    X.prototype[a] = function() {
      if (!d.has(this)) throw new TypeError(Q);
      var u = arguments,
        h = d.get(this),
        g = h.adopters,
        f = h.actions,
        m = h.basicStyleElement,
        y = m.sheet[a].apply(m.sheet, u);
      return g.forEach(function($) {
        $.sheet && $.sheet[a].apply($.sheet, u)
      }), f.push([a, u]), y
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
    for (var u = document.createDocumentFragment(), h = _e(a), g = w.get(a), f = 0, m = h.length; f < m; f++) {
      var y = d.get(h[f]),
        $ = y.adopters,
        D = y.basicStyleElement,
        C = $.get(a);
      C ? (g.disconnect(), u.appendChild(C), (!C.innerHTML || C.sheet && !C.sheet.cssText) && (C.innerHTML = D.innerHTML), g.observe()) : (C = document.createElement("style"), C.innerHTML = D.innerHTML, l.set(C, a), p.set(C, 0), $.set(a, C), u.appendChild(C)), a === document.head && i.push(C)
    }
    a.insertBefore(u, a.lastChild);
    for (var B = 0, oe = h.length; B < oe; B++) {
      var W = d.get(h[B]),
        ie = W.adopters,
        R = W.actions,
        ee = ie.get(a),
        je = p.get(ee);
      if (R.length > 0) {
        for (var se = je, Fe = R.length; se < Fe; se++) {
          var Ce = R[se],
            Je = Ce[0],
            Ke = Ce[1];
          ee.sheet[Je].apply(ee.sheet, Ke)
        }
        p.set(ee, R.length - 1)
      }
    }
  }

  function Be(a, u) {
    for (var h = _e(a), g = 0, f = u.length; g < f; g++)
      if (!(h.indexOf(u[g]) > -1)) {
        var m = d.get(u[g]),
          y = m.adopters,
          $ = w.get(a),
          D = y.get(a);
        D || (D = y.get(document.head)), $.disconnect(), D.parentNode.removeChild(D), $.observe()
      }
  }

  function We(a) {
    if (!!document)
      for (var u = 0, h = a.length; u < h; u++) {
        for (var g = a[u], f = g.addedNodes, m = g.removedNodes, y = 0, $ = m.length; y < $; y++) {
          var D = l.get(m[y]);
          D && Y(D)
        }
        if (!t)
          for (var C = 0, B = f.length; C < B; C++)
            for (var oe = document.createNodeIterator(f[C], NodeFilter.SHOW_ELEMENT, function(ie) {
                var R = c.get(ie);
                return R && R.adoptedStyleSheets.length > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
              }, null, !1), W = void 0; W = oe.nextNode();) Y(c.get(W))
      }
  }

  function ye(a) {
    var u = new MutationObserver(We),
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
    a.hidden = !0, document.body.appendChild(a), v.body = a.contentWindow.document.body, v.CSSStyleSheet = a.contentWindow.CSSStyleSheet, me(a.contentWindow.CSSStyleSheet.prototype), ye(document.body), _.loaded = !0;
    for (var u = document.createDocumentFragment(), h = 0, g = n.length; h < g; h++) n[h].disabled = !1, u.appendChild(n[h]);
    v.body.appendChild(u);
    for (var f = 0, m = i.length; f < m; f++) u.appendChild(i[f]);
    document.body.insertBefore(u, document.body.firstChild);
    for (var y = 0, $ = s.length; y < $; y++) Y(s[y]);
    s.length = 0, n.length = 0, i.length = 0
  }

  function ze() {
    var a = {
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
          Y(m), Be(m, f)
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
const _t = `.ad-tooltip--theme{font-size:12/16rem;font-weight:400;border-radius:2/16rem;padding:16/16rem;color:#4e5761;text-align:left;background-color:#fafafa;border:1px solid #E3E4E5}@media (min-width: 1280px){.ad-tooltip--theme{font-size:14/16rem}}:host{display:block;font-family:LidlFontCondPro,Trebuchet MS,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:16/16rem;line-height:1.4;color:#353b42;border-radius:2/16rem}:host a{display:flex;text-decoration:none;color:unset}:host .banner{margin:1rem auto;position:relative}:host .banner--large{max-width:320px;box-shadow:0 2px 4px #00000026}@media (min-width: 600px){:host .banner--large{max-width:970px}}:host .banner--small{aspect-ratio:auto 4 / 3;width:100%}:host .banner-new{border-radius:1rem;background-color:#fff;box-shadow:0 2px 4px #00000026}:host .banner-new__wrapper{position:relative}:host .banner-new__img{width:100%;height:100%;border-style:none;box-shadow:0 2px 4px #00000026}:host .banner-new__label{padding:.5rem;border-radius:0 0 1rem 1rem}:host .banner-new__headline{word-wrap:break-word;overflow:hidden;line-height:120%;display:-webkit-box;min-height:3rem}:host .banner-old{display:block;position:relative;background-color:#fff;overflow:hidden}:host .banner-old__img{width:100%;height:100%;border-style:none}:host .banner-old__label{position:absolute;bottom:0;left:0;width:100%;background-color:#ffffffb3;padding:.5rem 1rem;color:#353b42}:host .banner-old__headline{word-wrap:break-word;overflow:hidden;max-height:3rem;line-height:1.4rem;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}:host .ads-tag{display:flex;position:absolute;bottom:0;right:0;padding:4px;background-color:#fff}:host .ads-tag__img{width:100%;height:100%;border-style:none}:host .ads-tag__icon{margin-left:4px;margin-top:3px;width:12px;height:12px;mask-image:url(/cdn/assets/icons/1.0.0/information-circle.svg);-webkit-mask-image:url(/cdn/assets/icons/1.0.0/information-circle.svg);background-color:#4e5761}:host .ads-tag__text{font-size:.75rem;font-weight:400}@media (min-width: 1280px){:host .ads-tag__text{font-size:.875rem}}:host .rounded-corners{border-radius:1rem 1rem 0 0}:host .ad-tooltip{background:none;border:none;padding:0;margin:0;cursor:pointer;color:inherit;display:inline-flex}:host .skeleton{width:100%;max-width:320px;height:150px;position:relative;margin:1rem auto;display:flex;vertical-align:middle;cursor:progress;background-color:#e3e4e6;background-image:linear-gradient(90deg,transparent 25%,#fff 50%,transparent 75%);background-size:200% 200%;animation:skeleton-shimmer 2s linear infinite}@keyframes skeleton-shimmer{0%{background-position-x:200%}50%{background-position-x:100%}to{background-position-x:0%}}@media (min-width: 600px){:host .skeleton{max-width:970px;height:250px}}
`;
var ft = Object.defineProperty,
  mt = Object.getOwnPropertyDescriptor,
  A = (o, e, t, n) => {
    for (var i = n > 1 ? void 0 : n ? mt(e, t) : e, s = o.length - 1, r; s >= 0; s--)(r = o[s]) && (i = (n ? r(e, t, i) : r(i)) || i);
    return n && i && ft(e, t, i), i
  };
const Ve = new CSSStyleSheet;
Ve.replaceSync(_t);
let k = class extends j {
  constructor() {
    super(...arguments), this.tagText = "Ads", this.showTag = !0, this.size = "large", this.title = "", this.showLoading = !1, this.debug = !1, this.adsData = null, this.requestData = "", this._showNewDesign = !1, this._showBanner = !1, this._showSkeleton = !1, this._mql = window.matchMedia && window.matchMedia("(max-width: 600px)"), this._debugCookie = !1, this._debugInstanceId = this.generateSecureRandomNumber(0, 1e3), this._requestInProgress = !1, this._toggleDesign = o => {
      this.consoleDebugLog("_toggleDesign", o), this._showNewDesign = o && o.matches
    }
  }
  static get styles() {
    return [Ve]
  }
  consoleDebugLog(o, e) {
    if (!this._debugCookie) return;
    let t;
    try {
      t = typeof e == "object" ? JSON.stringify(e) : e, t === "{}" && (t = e)
    } catch {
      t = e
    }
    console.log(this._debugInstanceId + ": ", o + " - ", t)
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
    var o, e;
    return this.consoleDebugLog("adsImageTemplate", this._pqData), E`
      <a .href="${(o=this._pqData)==null?void 0:o.clickthru}" target="_self"
         @click=${this._onClickImpression}>
        <img src="${(e=this._pqData)==null?void 0:e.asset_url}" alt="Banner Ads" class="ads-tag__img">
      </a>
      ${this.showTag?this.adsTagTemplate():""}
    `
  }
  newDesignTemplate() {
    var o, e;
    return this.consoleDebugLog("newDesignTemplate", this._pqData), E`
      <div class="banner-new">
        <a .href="${(o=this._pqData)==null?void 0:o.clickthru}" target="_self"
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
    var o, e;
    return this.consoleDebugLog("oldDesignTemplate", this._pqData), E`
      <div class="banner-old">
        <a .href="${(o=this._pqData)==null?void 0:o.clickthru}" target="_self"
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
    super.connectedCallback(), this._debugCookie = S.getCookieValue("bannerAdsDebugConsoleLog"), this.consoleDebugLog("DebugCookie", this._debugCookie), this._showSkeleton = this.showLoading, this._showSkeleton && this.consoleDebugLog("Init show Skeleton", this._showSkeleton), await this._getAd(), this._toggleDesign(this._mql), this._mql && this._mql.addEventListener && this._mql.addEventListener("change", this._toggleDesign)
  }
  disconnectedCallback() {
    this.consoleDebugLog("disconnectedCallback"), super.disconnectedCallback(), this._mql && this._mql.removeEventListener && this._mql.removeEventListener("change", this._toggleDesign)
  }
  updated(o) {
    if (this.consoleDebugLog("updated called", o), o.has("requestData")) {
      const e = o.get("requestData");
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
    const o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    let e = new Array(36),
      t = 0,
      n;
    for (let r = 0; r < 36; r++) r === 8 || r === 13 || r === 18 || r === 23 ? e[r] = "-" : r === 14 ? e[r] = "4" : (t <= 2 && (t = 33554432 + this.generateSecureRandomNumber(0, 16777216 - 1)), n = t & 15, t = t >> 4, e[r] = o[r === 19 ? n & 3 | 8 : n]);
    const i = e.join(""),
      s = "; max-age=" + 24 * 60 * 60 * 730;
    return document.cookie = "adSessionId=" + i + s + "; secure; path=/", i
  }
  fetchWithTimeout(o, e = {}, t = 5e3) {
    let n = {
        ...e
      },
      i = null;
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
          timeoutId: i
        }), s.abort(), i && clearTimeout(i);
        else {
          let c = t - (l - r);
          c < 0 && (c = 0), this.consoleDebugLog("fetchWithTimeout abortFunc startTimer", {
            currTime: l,
            startTime: r,
            "currTime - startTime": l - r,
            time: t,
            timeoutId: i,
            remainingTime: c
          }), i = setTimeout(d, c)
        }
      };
      d()
    }
    return fetch(o, n)
      .then(s => {
        if (this.consoleDebugLog("fetchWithTimeout response ok", s.ok), i && clearTimeout(i), !s.ok) throw new Error(`${s.status}: ${s.statusText}`);
        return s
      })
      .catch(s => {
        throw this.consoleDebugLog("fetchWithTimeout response error", s), i && clearTimeout(i), this._showSkeleton = !1, s.name === "AbortError" ? new Error("Response timed out") : new Error(s.message)
      })
  }
  async _getAd() {
    var o;
    try {
      if (this._requestInProgress) {
        this.consoleDebugLog("_getAd requestInProgress");
        return
      }
      if (this._requestInProgress = !0, this.consoleDebugLog("_getAd init"), this._consent || (this.consoleDebugLog("_getAd get consent"), this._consent = this.debug ? {
          marketing: !0
        } : await S.onConsent()), this.consoleDebugLog("CookieBot consent", this._consent), !this._consent || this._consent && !this._consent.marketing || !this.requestData) {
        this.consoleDebugLog("_getAd exit", {
          requestData: this.requestData,
          consent: this._consent
        }), this._showSkeleton = !1, this._requestInProgress = !1;
        return
      }
      const e = S.getCookieValue("adSessionId") || this.setAdSessionId();
      this.consoleDebugLog("_getAd adSessionId", e);
      const t = JSON.parse(this.requestData);
      t.session = e, this.consoleDebugLog("_getAd request", t), this._showBanner = !1;
      const n = await this.fetchWithTimeout("/t/piq/request", {
        method: "POST",
        body: JSON.stringify(t)
      }, 500);
      if (this._showSkeleton = !1, this._requestInProgress = !1, n.ok && n.status === 200) {
        if (this.consoleDebugLog("_getAd resp.ok"), this._pqData = await n.json()
          .then(i => i[0]), this.consoleDebugLog("_getAd PqData", this._pqData), !(this._pqData && ((o = this._pqData) == null ? void 0 : o.clickthru))) return;
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
                _ = Math.round(w.time);
              if (this.consoleDebugLog(`isIntersecting: ${w.isIntersecting}, Ratio:${p}, Time: ${_}`), !w.isIntersecting) {
                s && (s = 0), d && (clearTimeout(d), d = void 0), r = !1;
                return
              }
              p > 45 && (s || (this.consoleDebugLog(" Start counting ", s), s = _), this.consoleDebugLog("Passed 50%"), r = !0, d || (d = setTimeout(() => {
                this.consoleDebugLog("Send impression timeout"), this._bannerAdsView(), l.unobserve(this.hostElement)
              }, 1e3))), _ - s >= 1e3 && r && (d && (clearTimeout(d), d = void 0), this.consoleDebugLog("Send impression intersection"), this._bannerAdsView(), l.unobserve(this.hostElement))
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
    var t, n, i, s, r, d;
    window.dataLayerService = window.dataLayerService || [];
    const o = ((t = this._pqData) == null ? void 0 : t.clickthru) || "";
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
          linkType: /^(#|\/)/.test(o) || o.indexOf(window.location.hostname) > -1 ? "internal" : "external",
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
            id: (i = this._pqData) == null ? void 0 : i.campaign_id,
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
    var e, t, n, i;
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
      dataLayer: o
    } = window;
    o.push({
      event: "EECpromotionImpression",
      ecommerce: {
        promoView: {
          promotions: [{
            id: (e = this._pqData) == null ? void 0 : e.campaign_id,
            name: (t = this.adsData) == null ? void 0 : t.promotionName,
            creative: (n = this.adsData) == null ? void 0 : n.creativeName,
            position: (i = this.adsData) == null ? void 0 : i.creativeSlot
          }]
        }
      }
    })
  }
  generateSecureRandomNumber(o, e) {
    const t = e - o,
      n = Math.ceil(Math.log2(t + 1) / 8),
      i = new Uint8Array(n);
    return crypto.getRandomValues(i), parseInt(i.join(""), 10) % (t + 1) + o
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
    fromAttribute: o => o && JSON.parse(decodeURI(o))
  }
})], k.prototype, "adsData", 2);
A([x({
  type: String,
  converter: {
    fromAttribute: o => o && decodeURI(o)
  }
})], k.prototype, "requestData", 2);
A([ne()], k.prototype, "_pqData", 2);
A([ne()], k.prototype, "_showNewDesign", 2);
A([ne()], k.prototype, "_showBanner", 2);
A([ne()], k.prototype, "_showSkeleton", 2);
A([gt(".banner", !1)], k.prototype, "hostElement", 2);
k = A([ht("banner-ads")], k);