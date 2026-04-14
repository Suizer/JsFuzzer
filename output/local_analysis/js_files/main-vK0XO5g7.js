(function() {
  const e = document.createElement("link")
    .relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) s(i);
  new MutationObserver(i => {
      for (const n of i)
        if (n.type === "childList")
          for (const r of n.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && s(r)
    })
    .observe(document, {
      childList: !0,
      subtree: !0
    });

  function o(i) {
    const n = {};
    return i.integrity && (n.integrity = i.integrity), i.referrerPolicy && (n.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? n.credentials = "include" : i.crossOrigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin", n
  }

  function s(i) {
    if (i.ep) return;
    i.ep = !0;
    const n = o(i);
    fetch(i.href, n)
  }
})();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const q = globalThis,
  oe = q.ShadowRoot && (q.ShadyCSS === void 0 || q.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
  we = Symbol(),
  re = new WeakMap;
let Ae = class {
  constructor(e, o, s) {
    if (this._$cssResult$ = !0, s !== we) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = o
  }
  get styleSheet() {
    let e = this.o;
    const o = this.t;
    if (oe && e === void 0) {
      const s = o !== void 0 && o.length === 1;
      s && (e = re.get(o)), e === void 0 && ((this.o = e = new CSSStyleSheet)
        .replaceSync(this.cssText), s && re.set(o, e))
    }
    return e
  }
  toString() {
    return this.cssText
  }
};
const De = t => new Ae(typeof t == "string" ? t : t + "", void 0, we),
  Le = (t, e) => {
    if (oe) t.adoptedStyleSheets = e.map((o => o instanceof CSSStyleSheet ? o : o.styleSheet));
    else
      for (const o of e) {
        const s = document.createElement("style"),
          i = q.litNonce;
        i !== void 0 && s.setAttribute("nonce", i), s.textContent = o.cssText, t.appendChild(s)
      }
  },
  ae = oe ? t => t : t => t instanceof CSSStyleSheet ? (e => {
    let o = "";
    for (const s of e.cssRules) o += s.cssText;
    return De(o)
  })(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const {
  is: Se,
  defineProperty: xe,
  getOwnPropertyDescriptor: Te,
  getOwnPropertyNames: Ie,
  getOwnPropertySymbols: Ee,
  getPrototypeOf: Re
} = Object, v = globalThis, le = v.trustedTypes, Oe = le ? le.emptyScript : "", Y = v.reactiveElementPolyfillSupport, B = (t, e) => t, K = {
  toAttribute(t, e) {
    switch (e) {
      case Boolean:
        t = t ? Oe : null;
        break;
      case Object:
      case Array:
        t = t == null ? t : JSON.stringify(t)
    }
    return t
  },
  fromAttribute(t, e) {
    let o = t;
    switch (e) {
      case Boolean:
        o = t !== null;
        break;
      case Number:
        o = t === null ? null : Number(t);
        break;
      case Object:
      case Array:
        try {
          o = JSON.parse(t)
        } catch {
          o = null
        }
    }
    return o
  }
}, ie = (t, e) => !Se(t, e), ce = {
  attribute: !0,
  type: String,
  converter: K,
  reflect: !1,
  useDefault: !1,
  hasChanged: ie
};
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), v.litPropertyMetadata ?? (v.litPropertyMetadata = new WeakMap);
let I = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = []))
      .push(e)
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()]
  }
  static createProperty(e, o = ce) {
    if (o.state && (o.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((o = Object.create(o))
        .wrapped = !0), this.elementProperties.set(e, o), !o.noAccessor) {
      const s = Symbol(),
        i = this.getPropertyDescriptor(e, s, o);
      i !== void 0 && xe(this.prototype, e, i)
    }
  }
  static getPropertyDescriptor(e, o, s) {
    const {
      get: i,
      set: n
    } = Te(this.prototype, e) ?? {
      get() {
        return this[o]
      },
      set(r) {
        this[o] = r
      }
    };
    return {
      get: i,
      set(r) {
        const l = i == null ? void 0 : i.call(this);
        n == null || n.call(this, r), this.requestUpdate(e, l, s)
      },
      configurable: !0,
      enumerable: !0
    }
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? ce
  }
  static _$Ei() {
    if (this.hasOwnProperty(B("elementProperties"))) return;
    const e = Re(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties)
  }
  static finalize() {
    if (this.hasOwnProperty(B("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(B("properties"))) {
      const o = this.properties,
        s = [...Ie(o), ...Ee(o)];
      for (const i of s) this.createProperty(i, o[i])
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const o = litPropertyMetadata.get(e);
      if (o !== void 0)
        for (const [s, i] of o) this.elementProperties.set(s, i)
    }
    this._$Eh = new Map;
    for (const [o, s] of this.elementProperties) {
      const i = this._$Eu(o, s);
      i !== void 0 && this._$Eh.set(i, o)
    }
    this.elementStyles = this.finalizeStyles(this.styles)
  }
  static finalizeStyles(e) {
    const o = [];
    if (Array.isArray(e)) {
      const s = new Set(e.flat(1 / 0)
        .reverse());
      for (const i of s) o.unshift(ae(i))
    } else e !== void 0 && o.push(ae(e));
    return o
  }
  static _$Eu(e, o) {
    const s = o.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof e == "string" ? e.toLowerCase() : void 0
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev()
  }
  _$Ev() {
    var e;
    this._$ES = new Promise((o => this.enableUpdating = o)), this._$AL = new Map, this._$E_(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach((o => o(this)))
  }
  addController(e) {
    var o;
    (this._$EO ?? (this._$EO = new Set))
    .add(e), this.renderRoot !== void 0 && this.isConnected && ((o = e.hostConnected) == null || o.call(e))
  }
  removeController(e) {
    var o;
    (o = this._$EO) == null || o.delete(e)
  }
  _$E_() {
    const e = new Map,
      o = this.constructor.elementProperties;
    for (const s of o.keys()) this.hasOwnProperty(s) && (e.set(s, this[s]), delete this[s]);
    e.size > 0 && (this._$Ep = e)
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Le(e, this.constructor.elementStyles), e
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((o => {
      var s;
      return (s = o.hostConnected) == null ? void 0 : s.call(o)
    }))
  }
  enableUpdating(e) {}
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((o => {
      var s;
      return (s = o.hostDisconnected) == null ? void 0 : s.call(o)
    }))
  }
  attributeChangedCallback(e, o, s) {
    this._$AK(e, s)
  }
  _$ET(e, o) {
    var n;
    const s = this.constructor.elementProperties.get(e),
      i = this.constructor._$Eu(e, s);
    if (i !== void 0 && s.reflect === !0) {
      const r = (((n = s.converter) == null ? void 0 : n.toAttribute) !== void 0 ? s.converter : K)
        .toAttribute(o, s.type);
      this._$Em = e, r == null ? this.removeAttribute(i) : this.setAttribute(i, r), this._$Em = null
    }
  }
  _$AK(e, o) {
    var n, r;
    const s = this.constructor,
      i = s._$Eh.get(e);
    if (i !== void 0 && this._$Em !== i) {
      const l = s.getPropertyOptions(i),
        a = typeof l.converter == "function" ? {
          fromAttribute: l.converter
        } : ((n = l.converter) == null ? void 0 : n.fromAttribute) !== void 0 ? l.converter : K;
      this._$Em = i;
      const c = a.fromAttribute(o, l.type);
      this[i] = c ?? ((r = this._$Ej) == null ? void 0 : r.get(i)) ?? c, this._$Em = null
    }
  }
  requestUpdate(e, o, s) {
    var i;
    if (e !== void 0) {
      const n = this.constructor,
        r = this[e];
      if (s ?? (s = n.getPropertyOptions(e)), !((s.hasChanged ?? ie)(r, o) || s.useDefault && s.reflect && r === ((i = this._$Ej) == null ? void 0 : i.get(e)) && !this.hasAttribute(n._$Eu(e, s)))) return;
      this.C(e, o, s)
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP())
  }
  C(e, o, {
    useDefault: s,
    reflect: i,
    wrapped: n
  }, r) {
    s && !(this._$Ej ?? (this._$Ej = new Map))
      .has(e) && (this._$Ej.set(e, r ?? o ?? this[e]), n !== !0 || r !== void 0) || (this._$AL.has(e) || (this.hasUpdated || s || (o = void 0), this._$AL.set(e, o)), i === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = new Set))
        .add(e))
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES
    } catch (o) {
      Promise.reject(o)
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
      const i = this.constructor.elementProperties;
      if (i.size > 0)
        for (const [n, r] of i) {
          const {
            wrapped: l
          } = r, a = this[n];
          l !== !0 || this._$AL.has(n) || a === void 0 || this.C(n, void 0, r, a)
        }
    }
    let e = !1;
    const o = this._$AL;
    try {
      e = this.shouldUpdate(o), e ? (this.willUpdate(o), (s = this._$EO) == null || s.forEach((i => {
        var n;
        return (n = i.hostUpdate) == null ? void 0 : n.call(i)
      })), this.update(o)) : this._$EM()
    } catch (i) {
      throw e = !1, this._$EM(), i
    }
    e && this._$AE(o)
  }
  willUpdate(e) {}
  _$AE(e) {
    var o;
    (o = this._$EO) == null || o.forEach((s => {
      var i;
      return (i = s.hostUpdated) == null ? void 0 : i.call(s)
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
    this._$Eq && (this._$Eq = this._$Eq.forEach((o => this._$ET(o, this[o])))), this._$EM()
  }
  updated(e) {}
  firstUpdated(e) {}
};
I.elementStyles = [], I.shadowRootOptions = {
    mode: "open"
  }, I[B("elementProperties")] = new Map, I[B("finalized")] = new Map, Y == null || Y({
    ReactiveElement: I
  }), (v.reactiveElementVersions ?? (v.reactiveElementVersions = []))
  .push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const V = globalThis,
  J = V.trustedTypes,
  de = J ? J.createPolicy("lit-html", {
    createHTML: t => t
  }) : void 0,
  be = "$lit$",
  k = `lit$${Math.random().toFixed(9).slice(2)}$`,
  Ce = "?" + k,
  Be = `<${Ce}>`,
  S = document,
  U = () => S.createComment(""),
  F = t => t === null || typeof t != "object" && typeof t != "function",
  se = Array.isArray,
  Ve = t => se(t) || typeof(t == null ? void 0 : t[Symbol.iterator]) == "function",
  X = `[ 	
\f\r]`,
  O = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  he = /-->/g,
  ue = />/g,
  $ = RegExp(`>|${X}(?:([^\\s"'>=/]+)(${X}*=${X}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"),
  _e = /'/g,
  pe = /"/g,
  ke = /^(?:script|style|textarea|title)$/i,
  Me = t => (e, ...o) => ({
    _$litType$: t,
    strings: e,
    values: o
  }),
  C = Me(1),
  E = Symbol.for("lit-noChange"),
  p = Symbol.for("lit-nothing"),
  ge = new WeakMap,
  D = S.createTreeWalker(S, 129);

function ve(t, e) {
  if (!se(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return de !== void 0 ? de.createHTML(e) : e
}
const Ue = (t, e) => {
  const o = t.length - 1,
    s = [];
  let i, n = e === 2 ? "<svg>" : e === 3 ? "<math>" : "",
    r = O;
  for (let l = 0; l < o; l++) {
    const a = t[l];
    let c, _, d = -1,
      h = 0;
    for (; h < a.length && (r.lastIndex = h, _ = r.exec(a), _ !== null);) h = r.lastIndex, r === O ? _[1] === "!--" ? r = he : _[1] !== void 0 ? r = ue : _[2] !== void 0 ? (ke.test(_[2]) && (i = RegExp("</" + _[2], "g")), r = $) : _[3] !== void 0 && (r = $) : r === $ ? _[0] === ">" ? (r = i ?? O, d = -1) : _[1] === void 0 ? d = -2 : (d = r.lastIndex - _[2].length, c = _[1], r = _[3] === void 0 ? $ : _[3] === '"' ? pe : _e) : r === pe || r === _e ? r = $ : r === he || r === ue ? r = O : (r = $, i = void 0);
    const w = r === $ && t[l + 1].startsWith("/>") ? " " : "";
    n += r === O ? a + Be : d >= 0 ? (s.push(c), a.slice(0, d) + be + a.slice(d) + k + w) : a + k + (d === -2 ? l : w)
  }
  return [ve(t, n + (t[o] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), s]
};
class W {
  constructor({
    strings: e,
    _$litType$: o
  }, s) {
    let i;
    this.parts = [];
    let n = 0,
      r = 0;
    const l = e.length - 1,
      a = this.parts,
      [c, _] = Ue(e, o);
    if (this.el = W.createElement(c, s), D.currentNode = this.el.content, o === 2 || o === 3) {
      const d = this.el.content.firstChild;
      d.replaceWith(...d.childNodes)
    }
    for (;
      (i = D.nextNode()) !== null && a.length < l;) {
      if (i.nodeType === 1) {
        if (i.hasAttributes())
          for (const d of i.getAttributeNames())
            if (d.endsWith(be)) {
              const h = _[r++],
                w = i.getAttribute(d)
                .split(k),
                z = /([.?@])?(.*)/.exec(h);
              a.push({
                type: 1,
                index: n,
                name: z[2],
                strings: w,
                ctor: z[1] === "." ? We : z[1] === "?" ? Ge : z[1] === "@" ? He : Z
              }), i.removeAttribute(d)
            } else d.startsWith(k) && (a.push({
              type: 6,
              index: n
            }), i.removeAttribute(d));
        if (ke.test(i.tagName)) {
          const d = i.textContent.split(k),
            h = d.length - 1;
          if (h > 0) {
            i.textContent = J ? J.emptyScript : "";
            for (let w = 0; w < h; w++) i.append(d[w], U()), D.nextNode(), a.push({
              type: 2,
              index: ++n
            });
            i.append(d[h], U())
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === Ce) a.push({
          type: 2,
          index: n
        });
        else {
          let d = -1;
          for (;
            (d = i.data.indexOf(k, d + 1)) !== -1;) a.push({
            type: 7,
            index: n
          }), d += k.length - 1
        } n++
    }
  }
  static createElement(e, o) {
    const s = S.createElement("template");
    return s.innerHTML = e, s
  }
}

function R(t, e, o = t, s) {
  var r, l;
  if (e === E) return e;
  let i = s !== void 0 ? (r = o._$Co) == null ? void 0 : r[s] : o._$Cl;
  const n = F(e) ? void 0 : e._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== n && ((l = i == null ? void 0 : i._$AO) == null || l.call(i, !1), n === void 0 ? i = void 0 : (i = new n(t), i._$AT(t, o, s)), s !== void 0 ? (o._$Co ?? (o._$Co = []))[s] = i : o._$Cl = i), i !== void 0 && (e = R(t, i._$AS(t, e.values), i, s)), e
}
class Fe {
  constructor(e, o) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = o
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
        content: o
      },
      parts: s
    } = this._$AD, i = ((e == null ? void 0 : e.creationScope) ?? S)
      .importNode(o, !0);
    D.currentNode = i;
    let n = D.nextNode(),
      r = 0,
      l = 0,
      a = s[0];
    for (; a !== void 0;) {
      if (r === a.index) {
        let c;
        a.type === 2 ? c = new G(n, n.nextSibling, this, e) : a.type === 1 ? c = new a.ctor(n, a.name, a.strings, this, e) : a.type === 6 && (c = new ze(n, this, e)), this._$AV.push(c), a = s[++l]
      }
      r !== (a == null ? void 0 : a.index) && (n = D.nextNode(), r++)
    }
    return D.currentNode = S, i
  }
  p(e) {
    let o = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(e, s, o), o += s.strings.length - 2) : s._$AI(e[o])), o++
  }
}
class G {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv
  }
  constructor(e, o, s, i) {
    this.type = 2, this._$AH = p, this._$AN = void 0, this._$AA = e, this._$AB = o, this._$AM = s, this.options = i, this._$Cv = (i == null ? void 0 : i.isConnected) ?? !0
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const o = this._$AM;
    return o !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = o.parentNode), e
  }
  get startNode() {
    return this._$AA
  }
  get endNode() {
    return this._$AB
  }
  _$AI(e, o = this) {
    e = R(this, e, o), F(e) ? e === p || e == null || e === "" ? (this._$AH !== p && this._$AR(), this._$AH = p) : e !== this._$AH && e !== E && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Ve(e) ? this.k(e) : this._(e)
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB)
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e))
  }
  _(e) {
    this._$AH !== p && F(this._$AH) ? this._$AA.nextSibling.data = e : this.T(S.createTextNode(e)), this._$AH = e
  }
  $(e) {
    var n;
    const {
      values: o,
      _$litType$: s
    } = e, i = typeof s == "number" ? this._$AC(e) : (s.el === void 0 && (s.el = W.createElement(ve(s.h, s.h[0]), this.options)), s);
    if (((n = this._$AH) == null ? void 0 : n._$AD) === i) this._$AH.p(o);
    else {
      const r = new Fe(i, this),
        l = r.u(this.options);
      r.p(o), this.T(l), this._$AH = r
    }
  }
  _$AC(e) {
    let o = ge.get(e.strings);
    return o === void 0 && ge.set(e.strings, o = new W(e)), o
  }
  k(e) {
    se(this._$AH) || (this._$AH = [], this._$AR());
    const o = this._$AH;
    let s, i = 0;
    for (const n of e) i === o.length ? o.push(s = new G(this.O(U()), this.O(U()), this, this.options)) : s = o[i], s._$AI(n), i++;
    i < o.length && (this._$AR(s && s._$AB.nextSibling, i), o.length = i)
  }
  _$AR(e = this._$AA.nextSibling, o) {
    var s;
    for ((s = this._$AP) == null ? void 0 : s.call(this, !1, !0, o); e !== this._$AB;) {
      const i = e.nextSibling;
      e.remove(), e = i
    }
  }
  setConnected(e) {
    var o;
    this._$AM === void 0 && (this._$Cv = e, (o = this._$AP) == null || o.call(this, e))
  }
}
class Z {
  get tagName() {
    return this.element.tagName
  }
  get _$AU() {
    return this._$AM._$AU
  }
  constructor(e, o, s, i, n) {
    this.type = 1, this._$AH = p, this._$AN = void 0, this.element = e, this.name = o, this._$AM = i, this.options = n, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1)
      .fill(new String), this.strings = s) : this._$AH = p
  }
  _$AI(e, o = this, s, i) {
    const n = this.strings;
    let r = !1;
    if (n === void 0) e = R(this, e, o, 0), r = !F(e) || e !== this._$AH && e !== E, r && (this._$AH = e);
    else {
      const l = e;
      let a, c;
      for (e = n[0], a = 0; a < n.length - 1; a++) c = R(this, l[s + a], o, a), c === E && (c = this._$AH[a]), r || (r = !F(c) || c !== this._$AH[a]), c === p ? e = p : e !== p && (e += (c ?? "") + n[a + 1]), this._$AH[a] = c
    }
    r && !i && this.j(e)
  }
  j(e) {
    e === p ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "")
  }
}
class We extends Z {
  constructor() {
    super(...arguments), this.type = 3
  }
  j(e) {
    this.element[this.name] = e === p ? void 0 : e
  }
}
class Ge extends Z {
  constructor() {
    super(...arguments), this.type = 4
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== p)
  }
}
class He extends Z {
  constructor(e, o, s, i, n) {
    super(e, o, s, i, n), this.type = 5
  }
  _$AI(e, o = this) {
    if ((e = R(this, e, o, 0) ?? p) === E) return;
    const s = this._$AH,
      i = e === p && s !== p || e.capture !== s.capture || e.once !== s.once || e.passive !== s.passive,
      n = e !== p && (s === p || i);
    i && this.element.removeEventListener(this.name, this, s), n && this.element.addEventListener(this.name, this, e), this._$AH = e
  }
  handleEvent(e) {
    var o;
    typeof this._$AH == "function" ? this._$AH.call(((o = this.options) == null ? void 0 : o.host) ?? this.element, e) : this._$AH.handleEvent(e)
  }
}
class ze {
  constructor(e, o, s) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = o, this.options = s
  }
  get _$AU() {
    return this._$AM._$AU
  }
  _$AI(e) {
    R(this, e)
  }
}
const N = V.litHtmlPolyfillSupport;
N == null || N(W, G), (V.litHtmlVersions ?? (V.litHtmlVersions = []))
  .push("3.3.1");
const je = (t, e, o) => {
  const s = (o == null ? void 0 : o.renderBefore) ?? e;
  let i = s._$litPart$;
  if (i === void 0) {
    const n = (o == null ? void 0 : o.renderBefore) ?? null;
    s._$litPart$ = i = new G(e.insertBefore(U(), n), n, void 0, o ?? {})
  }
  return i._$AI(t), i
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const L = globalThis;
class M extends I {
  constructor() {
    super(...arguments), this.renderOptions = {
      host: this
    }, this._$Do = void 0
  }
  createRenderRoot() {
    var o;
    const e = super.createRenderRoot();
    return (o = this.renderOptions)
      .renderBefore ?? (o.renderBefore = e.firstChild), e
  }
  update(e) {
    const o = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = je(o, this.renderRoot, this.renderOptions)
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
    return E
  }
}
var ye;
M._$litElement$ = !0, M.finalized = !0, (ye = L.litElementHydrateSupport) == null || ye.call(L, {
  LitElement: M
});
const ee = L.litElementPolyfillSupport;
ee == null || ee({
  LitElement: M
});
(L.litElementVersions ?? (L.litElementVersions = []))
.push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const qe = t => (e, o) => {
  o !== void 0 ? o.addInitializer((() => {
    customElements.define(t, e)
  })) : customElements.define(t, e)
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ke = {
    attribute: !0,
    type: String,
    converter: K,
    reflect: !1,
    hasChanged: ie
  },
  Je = (t = Ke, e, o) => {
    const {
      kind: s,
      metadata: i
    } = o;
    let n = globalThis.litPropertyMetadata.get(i);
    if (n === void 0 && globalThis.litPropertyMetadata.set(i, n = new Map), s === "setter" && ((t = Object.create(t))
        .wrapped = !0), n.set(o.name, t), s === "accessor") {
      const {
        name: r
      } = o;
      return {
        set(l) {
          const a = e.get.call(this);
          e.set.call(this, l), this.requestUpdate(r, a, t)
        },
        init(l) {
          return l !== void 0 && this.C(r, void 0, t, l), l
        }
      }
    }
    if (s === "setter") {
      const {
        name: r
      } = o;
      return function(l) {
        const a = this[r];
        e.call(this, l), this.requestUpdate(r, a, t)
      }
    }
    throw Error("Unsupported decorator location: " + s)
  };

function b(t) {
  return (e, o) => typeof o == "object" ? Je(t, e, o) : ((s, i, n) => {
    const r = i.hasOwnProperty(n);
    return i.constructor.createProperty(n, s), r ? Object.getOwnPropertyDescriptor(i, n) : void 0
  })(t, e, o)
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function H(t) {
  return b({
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
const Qe = (t, e, o) => (o.configurable = !0, o.enumerable = !0, Reflect.decorate && typeof e != "object" && Object.defineProperty(t, e, o), o);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Ze(t, e) {
  return (o, s, i) => {
    const n = r => {
      var l;
      return ((l = r.renderRoot) == null ? void 0 : l.querySelector(t)) ?? null
    };
    return Qe(o, s, {
      get() {
        return n(this)
      }
    })
  }
}
var A = (t => (t.PDP_Pageload = "PDP_Pageload", t.PDP_Click = "PDP_Click", t.PLP_Product_Click = "PLP_Product_Click", t.PDP_Social_Click = "PDP_Social_Click", t.PDP_Image_Click = "PDP_Image_Click", t.PDP_Section_EnterViewport = "PDP_Section_EnterViewport", t.PDP_Recommendation_Load = "PDP_Recommendation_Load", t.PDP_Recommendation_EnterViewport = "PDP_Recommendation_EnterViewport", t.PDP_Recommendation_Click = "PDP_Recommendation_Click", t.PDP_Rating_Click = "PDP_Rating_Click", t.PDP_Information_Load = "PDP_Information_Load", t.PDP_A_Goods_Link_Click = "PDP_A_Goods_Link_Click", t.PDP_B_Goods_Link_Click = "PDP_B_Goods_Link_Click", t.PDP_Downloads_Link_Click = "PDP_Downloads_Link_Click", t.PDP_Downloads_Section_Click = "PDP_Downloads_Section_Click", t.PDP_Install_Calc_Link_Click = "PDP_Install_Calc_Link_Click", t.General_Pageload = "General_Pageload", t.General_Recommendation_Load = "General_Recommendation_Load", t.General_RecommendationProduct_EnterViewport = "General_RecommendationProduct_EnterViewport", t.General_Product_Click = "General_Product_Click", t.General_Section_EnterViewport = "General_Section_EnterViewport", t.General_Teaser_Click = "General_Teaser_Click", t.General_Link_Click = "General_Link_Click", t.PLP_Pageload = "PLP_Pageload", t.PLP_FilterSelect_Click = "PLP_FilterSelect_Click", t.PLP_FilterSelect_Intent = "PLP_FilterSelect_Intent", t.PLP_FilterDeselect_Click = "PLP_FilterDeselect_Click", t.PLP_ProductImageSlider_Click = "PLP_ProductImageSlider_Click", t.PLP_Show_More_Click = "PLP_Show_More_Click", t.PLP_Information_Load = "PLP_Information_Load", t.General_SearchTermConfirm_Click = "General_SearchTermConfirm_Click", t.Cart_Pageload = "Cart_Pageload", t.Cart_Pageload_Split = "Cart_Pageload_Split", t.Cart_Button_Click = "Cart_Button_Click", t.Cart_Success_Pageload = "Cart_Success_Pageload", t.Cart_Checkbox_Click = "Cart_Checkbox_Click", t.Banner_Promotion_Load = "Banner_Promotion_Load", t.General_Product_View = "General_Product_View", t.General_Product_Load = "General_Product_Load", t.General_Promotion_View = "General_Promotion_View", t.General_Promotion_View_Split = "General_Promotion_View_Split", t.General_Promotion_Load = "General_Promotion_Load", t.General_Promotion_Click = "General_Promotion_Click", t.General_Promotion_Qualified = "General_Promotion_Qualified", t.General_Promotion_Shown = "General_Promotion_Shown", t.General_Navigation_Click = "General_Navigation_Click", t.Wishlist_Pageload = "Wishlist_Pageload", t.Wishlist_Button_Click = "Wishlist_Button_Click", t.StoreSearch_Pageload = "StoreSearch_Pageload", t.StoreSearch_Click = "StoreSearch_Click", t.StoreSearchDP_Pageload = "StoreSearchDP_Pageload", t.StoreSearchDP_Click = "StoreSearchDP_Click", t.MyAccount_Pageload = "MyAccount_Pageload", t.MyAccount_Click = "MyAccount_Click", t.Flyer_Click = "Flyer_Click", t.Flyer_View = "Flyer_View", t.Flyer_ChangeViewport = "Flyer_ChangeViewport", t.Flyer_Categories_Select = "Flyer_Categories_Select", t.Kameleoon_Experiment = "Kameleoon_Experiment", t.Order_Cancellation_Click = "Order_Cancellation_Click", t.Order_ViewDetails_Click = "Order_ViewDetails_Click", t.Order_Invoice_Download_Click = "Order_Invoice_Download_Click", t.Order_Return_Click = "Order_Return_Click", t.Order_Cancellation_Confirmation = "Order_Cancellation_Confirmation", t.Order_Return_Confirmation = "Order_Return_Confirmation", t.Start_Login_Click = "Start_Login_Click", t.Login_Button_Click = "Login_Button_Click", t.Login_Success = "Login_Success", t.Login_Link_Click = "Login_Link_Click", t.Forgotten_Password_Click = "Forgotten_Password_Click", t.Password_Reset = "Password_Reset", t.Register_Link_Click = "Register_Link_Click", t.Registration_Success = "Registration_Success", t.Error_Message = "Error_Message", t.Competition_Form_Submit = "Competition_Form_Submit", t.Newsletter_Form_Submit = "Newsletter_Form_Submit", t.Newsletter_Form_Success = "Newsletter_Form_Success", t.Flyer_View_50 = "Flyer_View_50", t.Flyer_View_75 = "Flyer_View_75", t.Flyer_View_100 = "Flyer_View_100", t.User_Consent_Update = "User_Consent_Update", t.Review_Product_Start = "Review_Product_Start", t.Review_Product_Click = "Review_Product_Click", t.Review_Product_Submit = "Review_Product_Submit", t.Review_Product_Error = "Review_Product_Error", t.Review_Product_Success = "Review_Product_Success", t.Return_Chatbot_WindowOpen_Click = "Return_Chatbot_WindowOpen_Click", t.Return_Chatbot_WindowClosed_Click = "Return_Chatbot_WindowClosed_Click", t.Session_Start = "Session_Start", t.First_Visit = "First_Visit", t.Add_Product_To_Wishlist_In_Flyer = "Add_Product_To_Wishlist_In_Flyer", t.ProductView_In_Flyer = "ProductView_In_Flyer", t.Retail_StartPage_Visit = "Retail_StartPage_Visit", t.View_Store_Article = "View_Store_Article", t.WT_Visit = "WT_Visit", t.Switch_Login_Type = "Switch_Login_Type", t.Confirm_Token = "Confirm_Token", t.Request_New_Token = "Request_New_Token", t.Confirm_Mobile_Number = "Confirm_Mobile_Number", t.Password_Reset_Success = "Password_Reset_Success", t.Contact_Customer_Service = "Contact_Customer_Service", t.Login_Accept_Terms = "Login_Accept_Terms", t.Register_Continue_Click = "Register_Continue_Click", t.Register_Change_Phone = "Register_Change_Phone", t.Video_Start = "Video_Start", t.Video_Progress = "Video_Progress", t.Video_Complete = "Video_Complete", t.General_Scroll_Action = "General_Scroll_Action", t.Promotion_Information_Click = "Promotion_Information_Click", t.STL_Product_Checkbox_Click = "STL_Product_Checkbox_Click", t.STL_Add2Cart_Click = "STL_Add2Cart_Click", t.STL_Variant_Selected = "STL_Variant_Selected", t.STL_Select_Variant_Click = "STL_Select_Variant_Click", t))(A || {});

function x(t = void 0, e) {
  return function(o, s, i) {
    const n = i.value,
      r = `${o.constructor.name}.${s}`;
    return i.value = function(...l) {
      try {
        const a = n.apply(this, l);
        return a && typeof a.then == "function" ? a.catch(c => (console.log(`[DataLayerService] Error in ${r}: `, c), t)) : a
      } catch (a) {
        return console.log(`[DataLayerService] Error in ${r}: `, a), t
      }
    }, i
  }
}
var Ye = Object.defineProperty,
  Xe = Object.getOwnPropertyDescriptor,
  T = (t, e, o, s) => {
    for (var i = Xe(e, o), n = t.length - 1, r; n >= 0; n--)(r = t[n]) && (i = r(e, o, i) || i);
    return i && Ye(e, o, i), i
  };
class y {
  static getItem(e) {
    return localStorage.getItem(e)
  }
  static setItem(e, o) {
    localStorage.setItem(e, o)
  }
  static removeItem(e) {
    localStorage.removeItem(e)
  }
  static getCookieValue(e) {
    var i;
    const s = `; ${document.cookie}`.split(`; ${e}=`);
    return s.length === 2 && ((i = s.pop()) == null ? void 0 : i.split(";")
      .shift()) || null
  }
  static getJSONParsedCookieValue(e) {
    try {
      const o = this.getCookieValue(e);
      return o ? this.parseJSON(o) : null
    } catch {
      return null
    }
  }
  static setCookie(e, o, s = "") {
    document.cookie = `${e}=${o}; ${s}`
  }
  static deleteCookie(e) {
    document.cookie = `${e}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
  }
  static parseJSON(e) {
    return e ? JSON.parse(e) : null
  }
}
T([x(null)], y, "getItem");
T([x()], y, "setItem");
T([x()], y, "removeItem");
T([x(null)], y, "getCookieValue");
T([x()], y, "setCookie");
T([x()], y, "deleteCookie");
T([x(null)], y, "parseJSON");

function P(t) {
  let e = "";
  if (document.cookie && document.cookie !== "") {
    const o = document.cookie.split(";");
    for (let s = 0; s < o.length; s += 1) {
      const i = o[s].replace(/^\s+/, "")
        .replace(/\s+$/, "");
      if (i.substring(0, t.length + 1) === `${t}=`) {
        try {
          e = decodeURIComponent(i.substring(t.length + 1)
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

function u(t, e = !1, o = "log") {
  if (e || P("dataLayerService")) switch (o) {
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

function Ne(t) {
  const e = P("adSessionId");
  if (e) return e;
  const o = t(),
    s = "; max-age=" + 1440 * 60 * 30;
  return document.cookie = "adSessionId=" + o + s + "; secure; path=/", o
}
const et = "mobile_flow";

function fe(t) {
  const e = P("tracking-info") || "{}";
  try {
    const o = window.atob(e),
      s = JSON.parse(o),
      i = s == null ? void 0 : s[t];
    return i !== "null" ? i : ""
  } catch {
    return ""
  }
}

function tt(t) {
  const e = new TextEncoder()
    .encode(t);
  return crypto.subtle.digest("SHA-256", e)
    .then(o => Array.from(new Uint8Array(o))
      .map(n => n.toString(16)
        .padStart(2, "0"))
      .join(""))
}
const g = [];
for (let t = 0; t < 256; ++t) g.push((t + 256)
  .toString(16)
  .slice(1));

function ot(t, e = 0) {
  return (g[t[e + 0]] + g[t[e + 1]] + g[t[e + 2]] + g[t[e + 3]] + "-" + g[t[e + 4]] + g[t[e + 5]] + "-" + g[t[e + 6]] + g[t[e + 7]] + "-" + g[t[e + 8]] + g[t[e + 9]] + "-" + g[t[e + 10]] + g[t[e + 11]] + g[t[e + 12]] + g[t[e + 13]] + g[t[e + 14]] + g[t[e + 15]])
    .toLowerCase()
}
let te;
const it = new Uint8Array(16);

function st() {
  if (!te) {
    if (typeof crypto > "u" || !crypto.getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    te = crypto.getRandomValues.bind(crypto)
  }
  return te(it)
}
const nt = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  me = {
    randomUUID: nt
  };

function Pe(t, e, o) {
  var i;
  if (me.randomUUID && !t) return me.randomUUID();
  t = t || {};
  const s = t.random ?? ((i = t.rng) == null ? void 0 : i.call(t)) ?? st();
  if (s.length < 16) throw new Error("Random bytes length must be >= 16");
  return s[6] = s[6] & 15 | 64, s[8] = s[8] & 63 | 128, ot(s)
}
const j = {
    statistics: "C0003",
    preferences: "C0002",
    marketing: "C0004",
    necessary: "C0001"
  },
  ne = class ne {
    static parseOneTrustCookie() {
      const e = "OptanonConsent";
      try {
        const o = P(e);
        return o ? decodeURIComponent(o)
          .split("&")
          .reduce((i, n) => {
            const [r, l] = n.split("=");
            return i[r] = l, i
          }, {}) : null
      } catch {
        return null
      }
    }
    static getOneTrustConsentCookie() {
      const e = this.parseOneTrustCookie();
      if (!e) return null;
      const {
        groups: o
      } = e;
      return o ? {
        marketing: o.includes(`${j.marketing}:1`),
        statistics: o.includes(`${j.statistics}:1`),
        preferences: o.includes(`${j.preferences}:1`),
        necessary: o.includes(`${j.necessary}:1`)
      } : null
    }
    static extractOneTrustConsentData() {
      const e = this.parseOneTrustCookie();
      if (!e) return null;
      const {
        groups: o,
        consentId: s
      } = e;
      return !o || !s ? null : {
        consentId: s,
        groups: o
      }
    }
    static getLidlConsentCookie() {
      var o;
      const e = P("LidlConsent") || P("lidl-consent");
      if (!e) return null;
      try {
        const s = (o = e.split("&")
          .find(i => i.startsWith("groups="))) == null ? void 0 : o.split("=")[1];
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
    static setLidlIDCookie(e) {
      document.cookie = `LidlID=${e}; max-age=31560000; path=/; secure; sameSite=strict`
    }
    static async synchronizeLidlId() {
      const e = y.getCookieValue("LidlID"),
        o = y.getItem("puuidv");
      if (e && !o) y.setItem("puuidv", e);
      else if (!e && o) this.setLidlIDCookie(o), await this.getNecessaryUUID4CookieIfNotPresent(o);
      else if (!e && !o) {
        const s = Pe();
        this.setLidlIDCookie(s), y.setItem("puuidv", s), await this.getNecessaryUUID4CookieIfNotPresent(s)
      }
    }
    static initializeConsentListener() {
      this.getConsentCookie() && this.notifyConsentListeners();
      const o = () => {
        window.OneTrust.OnConsentChanged(() => {
          this.notifyConsentListeners()
        })
      };
      if (typeof window.OneTrust < "u" && window.OneTrust.OnConsentChanged) o();
      else {
        const s = setInterval(() => {
          typeof window.OneTrust < "u" && window.OneTrust.OnConsentChanged && (clearInterval(s), o())
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
      this.consentListeners.forEach(o => o(e))
    }
    static async getNecessaryUUID4CookieIfNotPresent(e) {
      const s = window.location.hostname.includes("lidl.es");
      let i = "";
      s ? i = e ? `/t/gtm/uuid4-cookie?puuidv=${encodeURIComponent(e)}` : "/t/gtm/uuid4-cookie" : i = e ? `/t/p/uuid4-cookie?puuidv=${encodeURIComponent(e)}` : "/t/p/uuid4-cookie", await fetch(i)
    }
  };
ne.consentListeners = [];
let Q = ne;
Q.initializeConsentListener();
const rt = '@font-face{font-family:LidlFontPro;font-style:normal;font-weight:500;font-display:swap;src:url(/cdn/assets/fonts/2.0.0/LidlFontPro-Book.woff2) format("woff2"),url(/cdn/assets/fonts/2.0.0/LidlFontPro-Book.woff) format("woff")}@font-face{font-family:LidlFontPro;font-style:normal;font-weight:600;font-display:swap;src:url(/cdn/assets/fonts/2.0.0/LidlFontPro-Semibold.woff2) format("woff2"),url(/cdn/assets/fonts/2.0.0/LidlFontPro-Semibold.woff) format("woff")}@font-face{font-family:LidlFontPro;font-style:normal;font-weight:700;font-display:swap;src:url(/cdn/assets/fonts/2.0.0/LidlFontPro-Bold.woff2) format("woff2"),url(/cdn/assets/fonts/2.0.0/LidlFontPro-Bold.woff) format("woff")}@font-face{font-family:LidlFontCondPro;font-style:normal;font-weight:400;font-display:swap;src:url(/cdn/assets/fonts/2.0.0/LidlFontCondPro-Regular.woff2) format("woff2"),url(/cdn/assets/fonts/2.0.0/LidlFontCondPro-Regular.woff) format("woff")}@font-face{font-family:LidlFontCondPro;font-style:normal;font-weight:700;font-display:swap;src:url(/cdn/assets/fonts/2.0.0/LidlFontCondPro-Semibold.woff2) format("woff2"),url(/cdn/assets/fonts/2.0.0/LidlFontCondPro-Semibold.woff) format("woff")}@font-face{font-family:LidlFontCondPro;font-style:normal;font-weight:800;font-display:swap;src:url(/cdn/assets/fonts/2.0.0/LidlFontCondPro-Bold.woff2) format("woff2"),url(/cdn/assets/fonts/2.0.0/LidlFontCondPro-Bold.woff) format("woff")}@font-face{font-family:LidlFontPricePublicBeta;font-style:normal;font-weight:700;font-display:swap;src:url(/cdn/assets/fonts/2.0.0/LidlFontPricePublicBeta-WithoutPointer.woff2) format("woff2"),url(/cdn/assets/fonts/2.0.0/LidlFontPricePublicBeta-WithoutPointer.woff) format("woff")}@font-face{font-family:LidlFontPricePublicBeta;font-style:normal;font-weight:710;font-display:swap;src:url(/cdn/assets/fonts/2.0.0/LidlFontPricePublicBeta-LargePointer.woff2) format("woff2"),url(/cdn/assets/fonts/2.0.0/LidlFontPricePublicBeta-LargePointer.woff) format("woff")}@font-face{font-family:LidlFontPricePublicBetaBG;font-style:normal;font-weight:700;font-display:swap;src:url(/cdn/assets/fonts/2.0.0/LidlFontPricePublicBetaBG-WithoutPointer.woff2) format("woff2"),url(/cdn/assets/fonts/2.0.0/LidlFontPricePublicBetaBG-WithoutPointer.woff) format("woff")}@font-face{font-family:LidlFontPricePublicBetaBG;font-style:normal;font-weight:710;font-display:swap;src:url(/cdn/assets/fonts/2.0.0/LidlFontPricePublicBetaBG-LargePointer.woff2) format("woff2"),url(/cdn/assets/fonts/2.0.0/LidlFontPricePublicBetaBG-LargePointer.woff) format("woff")}.ods-add-typography-basics{font-family:var(--ods-typography-font-family-primary, "LidlFontPro");font-size:var(--ods-ad-tag-font-size, .6875rem);font-weight:var(--ods-typography-font-weight-base, 500);line-height:var(--ods-ad-tag-line-height, 1rem);letter-spacing:var(--ods-ad-tag-letter-spacing, .3)}:host{display:block;font-family:LidlFontCondPro,Trebuchet MS,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:16/16rem;line-height:1.4;color:#353b42;border-radius:2/16rem}:host a{display:flex;text-decoration:none;color:unset}:host .banner{position:relative;width:100%;max-height:300px;cursor:pointer;overflow:hidden;box-shadow:0 2px 4px #00000026;border-radius:2/16rem;background-size:cover;background-position:center;background-repeat:no-repeat}:host .banner__viewHomeApiDesktop{position:relative;background-position:center;background-repeat:no-repeat;background-size:cover;max-width:1400px}:host .banner__viewHomeApiMobile{position:relative;background-position:center}@media (min-width: 300px) and (max-width: 900px){:host .banner__viewHomeApiMobile{aspect-ratio:3 / 2;background-size:cover;max-height:900px;max-width:1350px}}:host .banner__viewSearchResultApiDesktop,:host .banner__viewCategoryApiDesktop{position:relative;max-width:1400px;height:200px;background-position:center;background-size:cover;background-repeat:no-repeat}:host .banner__viewSearchResultApiMobile,:host .banner__viewCategoryApiMobile,:host .banner__viewCategoryApiAios,:host .banner__viewCategoryApiAa{position:relative;aspect-ratio:1350 / 570;max-height:none;max-width:1350px;background-size:cover;background-position:center;background-repeat:no-repeat}@media (min-width: 750px){:host .banner__viewCategoryApiAios,:host .banner__viewCategoryApiAa{aspect-ratio:auto;height:200px;max-width:1400px}}:host .banner-new{border-radius:1rem;background-color:#fff;box-shadow:0 2px 4px #00000026}:host .banner-new__wrapper{position:relative}:host .banner-new__img{width:100%;height:100%;border-style:none;box-shadow:0 2px 4px #00000026}:host .banner-new__label{padding:.5rem;border-radius:0 0 1rem 1rem}:host .banner-new__headline{word-wrap:break-word;overflow:hidden;line-height:120%;display:-webkit-box;min-height:3rem}:host .banner-old{display:block;position:relative;background-color:#fff;overflow:hidden}:host .banner-old__img{width:100%;height:100%;border-style:none}:host .banner-old__label{position:absolute;bottom:0;left:0;width:100%;background-color:#ffffffb3;padding:.5rem 1rem;color:#353b42}:host .banner-old__headline{word-wrap:break-word;overflow:hidden;max-height:3rem;line-height:1.4rem;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}:host .ads-tag{display:inline-flex;flex-flow:row nowrap;gap:var(--ods-gap-content-s, .25rem);align-items:center;position:absolute;bottom:0;right:0;padding:var(--ods-padding-content-xs, .25rem);background-color:var(--ods-color-surface-interaction-default, #fff);cursor:pointer;color:var(--ods-color-text-surface-interaction-default, #636d79);border:none;border-radius:var(--ods-radius-full-width, 0);font-family:var(--ods-typography-font-family-primary, "LidlFontPro");font-size:var(--ods-ad-tag-font-size, .6875rem);font-weight:var(--ods-typography-font-weight-base, 500);line-height:var(--ods-ad-tag-line-height, 1rem);letter-spacing:var(--ods-ad-tag-letter-spacing, .3)}:host .ads-tag:is(button){cursor:pointer}:host .ads-tag:is(button):focus-visible{position:relative}:host .ads-tag:is(button):focus-visible:before{content:"";display:block;width:100%;height:100%;position:absolute;outline:solid .125rem var(--ods-component-browser-focus-border-color-outer, #ffffff);outline-offset:.25rem;pointer-events:none;left:0;top:0}:host .ads-tag:is(button):focus-visible:after{content:"";display:block;width:100%;height:100%;position:absolute;outline:solid .125rem var(--ods-component-browser-focus-border-color-inner, #0050aa);outline-offset:.125rem;pointer-events:none;left:0;top:0}:host .ads-tag:is(button):hover{--ods-ad-tag-background-color: var(--ods-color-surface-interaction-hover, #fff);--ods-ad-tag-text-color: var(--ods-color-text-surface-interaction-hover, #002466);--ods-ad-tag-icon-color: var(--ods-color-icon-surface-interaction-hover, #002466)}:host .ads-tag:is(button):focus-visible{--ods-ad-tag-background-color: var(--ods-color-surface-interaction-focus, #fff);--ods-ad-tag-text-color: var(--ods-color-text-surface-interaction-focus, #002466);--ods-ad-tag-icon-color: var(--ods-color-icon-surface-interaction-focus, #002466)}:host .ads-tag:is(button):active{--ods-ad-tag-background-color: var(--ods-color-surface-interaction-pressed, #fff);--ods-ad-tag-text-color: var(--ods-color-text-surface-interaction-pressed, #002466);--ods-ad-tag-icon-color: var(--ods-color-icon-surface-interaction-pressed, #002466)}:host .ads-tag__img{width:100%;height:100%;border-style:none}:host .ads-tag__icon{height:.75rem;width:.75rem;background-color:var(--ods-color-icon-surface-interaction-default, #636d79);flex-shrink:0;mask-image:url(/cdn/assets/icons/1.0.0/information-circle.svg);-webkit-mask-image:url(/cdn/assets/icons/1.0.0/information-circle.svg)}:host .ads-tag__tooltip{position:absolute;bottom:calc(100% + 8px);right:0;width:280px;z-index:1000}:host .ads-tag__tooltip-content{background-color:#1e2124;color:#fff;padding:.5rem;border-radius:.25rem;font-family:var(--ods-typography-font-family-primary, "LidlFontPro");font-size:var(--ods-mobile-body-small-1-font-size, .875rem);font-weight:var(--ods-typography-font-weight-base, 500);line-height:var(--ods-mobile-body-small-1-line-height, 1.25rem);letter-spacing:var(--ods-mobile-body-small-1-letter-spacing, 0);text-align:left}:host .ads-tag__tooltip-arrow{position:absolute;bottom:-6px;right:16px;width:12px;height:12px;background-color:#1e2124;transform:rotate(45deg)}:host .rounded-corners{border-radius:1rem 1rem 0 0}:host .ad-tooltip{background:none;border:none;padding:0;margin:0;cursor:pointer;color:inherit;display:inline-flex}:host .skeleton{width:100%;max-width:320px;height:150px;position:relative;margin:1rem auto;display:flex;vertical-align:middle;cursor:progress;background-color:#e3e4e6;background-image:linear-gradient(90deg,transparent 25%,#fff 50%,transparent 75%);background-size:200% 200%;animation:skeleton-shimmer 2s linear infinite}@keyframes skeleton-shimmer{0%{background-position-x:200%}50%{background-position-x:100%}to{background-position-x:0}}@media (min-width: 600px){:host .skeleton{height:250px}}';
class at {
  constructor(e) {
    this.registration = null, this.isReady = !1, this.config = e
  }
  async initialize() {
    var e, o, s, i;
    if (u(["ServiceWorker initialize() called"]), !("serviceWorker" in navigator)) return u(["Service Worker not supported"]), !1;
    try {
      return this.registration = await this.getOrRegisterServiceWorker(), u(["ServiceWorker initialize debug:"]), u(["- registration:", this.registration ? "Found" : "Not found"]), u(["- registration.active:", (e = this.registration) != null && e.active ? "Yes" : "No"]), u(["- registration state:", (s = (o = this.registration) == null ? void 0 : o.active) == null ? void 0 : s.state]), this.setupEventListeners(), (i = this.registration) != null && i.active ? (this.isReady = !0, u(["Service Worker already active and ready - isReady set to true"]), !0) : (u(["Service Worker not immediately active, waiting for ready..."]), await this.waitForReady(), this.isReady)
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
      o = new Promise((s, i) => setTimeout(() => i(new Error("Service Worker ready timeout")), this.config.readyTimeout));
    try {
      (await Promise.race([e, o]))
      .active && (this.isReady = !0, u(["Service Worker is ready"]))
    } catch {
      u(["Service Worker ready timeout, using fallback"])
    }
  }
  setupEventListeners() {
    this.registration && (this.registration.installing && this.registration.installing.addEventListener("statechange", () => {
      var e, o;
      u(["ServiceWorker installing state changed to:", (o = (e = this.registration) == null ? void 0 : e.installing) == null ? void 0 : o.state]), this.checkAndUpdateReadyState()
    }), this.registration.waiting && this.registration.waiting.addEventListener("statechange", () => {
      var e, o;
      u(["ServiceWorker waiting state changed to:", (o = (e = this.registration) == null ? void 0 : e.waiting) == null ? void 0 : o.state]), this.checkAndUpdateReadyState()
    }), this.registration.active && this.registration.active.addEventListener("statechange", () => {
      var e, o;
      u(["ServiceWorker active state changed to:", (o = (e = this.registration) == null ? void 0 : e.active) == null ? void 0 : o.state]), this.checkAndUpdateReadyState()
    })), navigator.serviceWorker.addEventListener("controllerchange", () => {
      u(["Service Worker controller changed"]), this.checkAndUpdateReadyState()
    })
  }
  checkAndUpdateReadyState() {
    var o;
    const e = this.isReady;
    (o = this.registration) != null && o.active && (this.isReady = !0, e || u(["ServiceWorker became ready - isReady set to true"]))
  }
  postMessage(e) {
    var s;
    const o = (s = this.registration) == null ? void 0 : s.active;
    if (!this.isReady) return u(["ServiceWorker not ready, cannot post message"]), !1;
    if (!o) return u(["No ServiceWorker target available - registration.active is null"]), !1;
    try {
      return o.postMessage(e), !0
    } catch (i) {
      return u(["Service Worker messaging failed:", i]), !1
    }
  }
  get ready() {
    return this.isReady
  }
}
const lt = "3014";
var ct = Object.defineProperty,
  dt = Object.getOwnPropertyDescriptor,
  m = (t, e, o, s) => {
    for (var i = s > 1 ? void 0 : s ? dt(e, o) : e, n = t.length - 1, r; n >= 0; n--)(r = t[n]) && (i = (s ? r(e, o, i) : r(i)) || i);
    return s && i && ct(e, o, i), i
  };
const $e = new CSSStyleSheet;
$e.replaceSync(rt);
const ht = {
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
let f = class extends M {
  constructor() {
    super(...arguments), this.showTag = !0, this.title = "", this.showLoading = !1, this.debug = !0, this.demo = !1, this.baseUrl = "", this.adsData = null, this.requestData = null, this.placementAdData = null, this._criteoExtractedData = null, this._showBanner = !1, this._showSkeleton = !1, this._tooltipVisible = !1, this.tagText = "", this.tooltipText = "", this._consent = null, this._debugCookie = !1, this._debugInstanceId = this.generateSecureRandomNumber(0, 1e3), this._requestInProgress = !1, this._serviceWorkerManager = null, this._hasPlacementInput = !1, this._handleClickOutside = t => {
      var s;
      const e = t.composedPath(),
        o = (s = this.shadowRoot) == null ? void 0 : s.querySelector(".ads-tag");
      o && !e.includes(o) && (this._tooltipVisible = !1, document.removeEventListener("click", this._handleClickOutside))
    }
  }
  static get styles() {
    return [$e]
  }
  async initializeServiceWorker() {
    this._serviceWorkerManager = new at({
      url: "/t/cdn/track-sw.js",
      scope: "/t/cdn/",
      readyTimeout: 5e3
    }), await this._serviceWorkerManager.initialize()
  }
  isServiceWorkerReady() {
    var t;
    return ((t = this._serviceWorkerManager) == null ? void 0 : t.ready) ?? !1
  }
  sendCriteoViaSW(t, e, o = "GET") {
    return this._serviceWorkerManager ? this._serviceWorkerManager.postMessage({
      type: "CRITEO_BEACON",
      payload: {
        url: t,
        data: e,
        method: o
      }
    }) : !1
  }
  consoleDebugLog(t, e) {
    if (!this._debugCookie) return;
    let o;
    try {
      o = typeof e == "object" ? JSON.stringify(e) : e, o === "{}" && (o = e)
    } catch {
      o = e
    }
    console.log(this._debugInstanceId + ": ", t + " - ", o)
  }
  isMobileWebview() {
    const t = P(et),
      e = y.getCookieValue("track_device_id");
    return t === "true" || e !== null
  }
  adsTagTemplate() {
    return C`
      <button class="ads-tag"
           @click=${this._toggleTooltip}
           @mouseenter=${this._showTooltip}
           @mouseleave=${this._hideTooltip}>
          ${this.tagText}
          <div class="ads-tag__icon"></div>
        ${this._tooltipVisible?C`
          <div class="ads-tag__tooltip">
            <div class="ads-tag__tooltip-content">${this.tooltipText}</div>
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
  isValidPlacementAdData(t) {
    return t !== null && t !== "" ? Object.keys(t)
      .length !== 0 : !1
  }
  adsImageTemplate() {
    if (!this._criteoExtractedData || !this._criteoExtractedData.rendering) return C``;
    const t = this._criteoExtractedData.rendering,
      o = window.innerWidth < 750,
      s = o ? t.mobile_background_image : t.desktop_background_image,
      i = o ? t.mobile_background_image_alt_text : t.desktop_background_image_alt_text,
      n = this.isMobileWebview() ? t.redirect_url_app : t.redirect_url || "",
      l = `background-image: url('${s!=null&&s.startsWith("//")?`https:${s}`:s}');`,
      a = this.getPageType()
      .pageId;
    return C`
      <a .href="${n}" target="_self" @click=${this._onClickImpression}
        class="banner banner__${a}"
        style="${l}"
        role="img"
        aria-label="${i||"Banner Ad"}">
       ${this.showTag?this.adsTagTemplate():""}
      </a>
    `
  }
  async connectedCallback() {
    var r;
    super.connectedCallback();
    const t = window.location.origin,
      e = "t/cdn/tracking-components/banner-ads/tag-texts",
      o = ((r = window.mindShiftNav) == null ? void 0 : r.locale) || "de-DE",
      s = `${t}/${e}/${o}.json`,
      i = await fetch(s);
    if (!i.ok) return;
    const n = await i.json();
    this.tagText = n.tagText, this.tooltipText = n.tooltipText;
    try {
      if (this.placementAdData) {
        const l = decodeURIComponent(this.placementAdData),
          a = JSON.parse(l);
        this.isValidPlacementAdData(a) && (this._hasPlacementInput = !0)
      } else this._hasPlacementInput = !1
    } catch (l) {
      this.consoleDebugLog("Error parsing placementAdData", l)
    }
    this._debugCookie = P("bannerAdsDebugConsoleLog"), this.consoleDebugLog("DebugCookie", this._debugCookie), await this.initializeServiceWorker(), this.consoleDebugLog("ServiceWorker initialized", this.isServiceWorkerReady()), this._showSkeleton = this.showLoading, this._showSkeleton && this.consoleDebugLog("Init show Skeleton", this._showSkeleton), Q.onConsentChanged(this.handleConsentChange.bind(this))
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
    }), C`
      ${this._showBanner?C`
          ${this._adsData?this.adsImageTemplate():""}
        `:C`${this._showSkeleton?C`
          <div class="skeleton"></div>`:""}`}
    `
  }
  getPageType() {
    const t = window.location.pathname,
      e = window.location.search,
      o = window.innerWidth < 750,
      s = this.getDeviceType(o),
      i = new URLSearchParams;
    let n = "Home";
    if (t === "/" || t === "") n = "Home";
    else if (t.startsWith("/q/search")) {
      n = "Search";
      const a = new URLSearchParams(e)
        .get("q") || "";
      a && i.append("keywords", a)
    } else if (t.startsWith("/h/") && (n = "Category", this.requestData)) try {
      const l = JSON.parse(this.requestData);
      if (l.categoryNode && Array.isArray(l.categoryNode)) {
        const a = l.categoryNode.join(">");
        i.append("category", a)
      }
    } catch (l) {
      this.consoleDebugLog("Failed to parse requestData:", l)
    }
    const r = ht[n][s];
    return {
      eventType: r.eventType,
      pageId: r.pageId,
      placementKey: r.placementKey,
      params: i
    }
  }
  extractCriteoRenderingData(t, e) {
    if (this._hasPlacementInput && this._adsData) return {
      rendering: this._adsData.rendering,
      beacons: {
        onLoad: this._adsData.OnLoadBeacon,
        onView: this._adsData.OnViewBeacon,
        onClick: this._adsData.OnClickBeacon,
        onFileClick: this._adsData.OnFileClickBeacon,
        onBundleBasketChange: this._adsData.onBundleBasketChange
      }
    };
    const o = {
      rendering: null,
      beacons: {
        onLoad: null,
        onView: null,
        onClick: null,
        onFileClick: null,
        onBundleBasketChange: null
      }
    };
    if (!t || !t.placements || t.placements.length === 0) return this.consoleDebugLog("extractCriteoRenderingData: No placements found"), o;
    let s = null;
    for (const i of t.placements)
      if (i[e]) {
        s = i[e];
        break
      } if (!s) return this.consoleDebugLog("extractCriteoRenderingData: No placement found for key", e), o;
    if (Array.isArray(s) && s.length > 0) {
      const i = s[0];
      i.rendering && typeof i.rendering == "object" && (o.rendering = i.rendering), i.OnLoadBeacon && (o.beacons.onLoad = i.OnLoadBeacon), i.OnViewBeacon && (o.beacons.onView = i.OnViewBeacon), i.OnClickBeacon && (o.beacons.onClick = i.OnClickBeacon), i.OnFileClickBeacon && (o.beacons.onFileClick = i.OnFileClickBeacon), i.OnBundleBasketChangeBeacon && (o.beacons.onBundleBasketChange = i.OnBundleBasketChangeBeacon)
    }
    return o
  }
  handleConsentChange(t) {
    this._consent = t, this.demo && (this._consent = {
      marketing: !0,
      statistics: !0,
      preferences: !0
    }), this.consoleDebugLog("CookieBot consent changed", this._consent), this._consent && this._consent.marketing ? this._getAd() : (this._showSkeleton = !1, this._showBanner = !1)
  }
  async fetchWithTimeout(t, e = {}, o = 5e3) {
    let s = {
        ...e
      },
      i = null;
    if (typeof window.AbortController == "function") {
      this.consoleDebugLog("fetchWithTimeout AbortController support", !0);
      const n = new AbortController;
      s = {
        ...e,
        signal: n.signal
      };
      const r = Date.now();
      this.consoleDebugLog("fetchWithTimeout startTime", r);
      const l = () => {
        const a = Date.now();
        if (a - r >= o) this.consoleDebugLog("fetchWithTimeout abortFunc aborting", {
          currTime: a,
          startTime: r,
          "currTime - startTime": a - r,
          time: o,
          timeoutId: i
        }), n.abort(), i && clearTimeout(i);
        else {
          let c = o - (a - r);
          c < 0 && (c = 0), this.consoleDebugLog("fetchWithTimeout abortFunc startTimer", {
            currTime: a,
            startTime: r,
            "currTime - startTime": a - r,
            time: o,
            timeoutId: i,
            remainingTime: c
          }), i = setTimeout(l, c)
        }
      };
      l()
    }
    return fetch(t, s)
      .then(n => {
        if (this.consoleDebugLog("fetchWithTimeout response ok", n.ok), i && clearTimeout(i), !n.ok) throw new Error(`${n.status}: ${n.statusText}`);
        return n
      })
      .catch(n => {
        throw this.consoleDebugLog("fetchWithTimeout response error", n), i && clearTimeout(i), this._showSkeleton = !1, n.name === "AbortError" ? new Error("Response timed out") : new Error(n.message)
      })
  }
  getDeviceIdCookieProp(t) {
    const e = y.getCookieValue("track_device_id") || "",
      o = decodeURIComponent(e);
    if (o.length === 0) return "";
    const s = o.split(";");
    for (const i of s) {
      const [n, r] = i.split("=");
      if (n.trim() === t) return r
    }
    return ""
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
      let t = null;
      if (this.placementAdData) try {
        const h = decodeURIComponent(this.placementAdData);
        t = JSON.parse(h)
      } catch (h) {
        this.consoleDebugLog("In-page placementAdData is invalid JSON", h)
      }
      if (this._hasPlacementInput && t) {
        this._adsData = t;
        const h = this.getPageType();
        return this._criteoExtractedData = this.extractCriteoRenderingData(this._adsData, h.placementKey), this._showBanner = !0, this._showSkeleton = !1, this._bannerAdsImpression(), this._initViewTracking(), null
      }
      if (this._requestInProgress) return this.consoleDebugLog("_getAd requestInProgress"), null;
      if (this._requestInProgress = !0, this.consoleDebugLog("_getAd init"), this.consoleDebugLog("CookieBot consent", this._consent), !this._consent || this._consent && !this._consent.marketing) return this.consoleDebugLog("_getAd exit", {
        consent: this._consent
      }), this._showSkeleton = !1, this._requestInProgress = !1, null;
      const e = this.isMobileWebview(),
        o = this.getPageType(),
        s = e ? this.getDeviceIdCookieProp("SSO_ID") : fe("ssoId"),
        i = this.getDeviceIdCookieProp("DEVICE_ID") || "",
        n = e ? i : y.getCookieValue("LidlID"),
        r = fe("email"),
        l = e ? this.getDeviceIdCookieProp("EMAIL_HASH") : await tt(r),
        a = new URLSearchParams({
          "criteo-partner-id": lt,
          "page-id": o.pageId,
          "event-type": o.eventType,
          "retailer-visitor-id": n || "",
          "customer-id": s,
          email: l
        });
      o.params.forEach((h, w) => {
        a.append(w, h)
      });
      const _ = `${this.demo&&this.baseUrl?`${this.baseUrl}/t/cri/delivery/retailmedia`:"/t/cri/delivery/retailmedia"}?${a.toString()}`;
      this.consoleDebugLog("_getAd Criteo URL", _), this._showBanner = !1;
      const d = await this.fetchWithTimeout(_, {
        method: "GET"
      }, 5e3);
      if (this._showSkeleton = !1, this._requestInProgress = !1, d.ok && d.status === 200) {
        if (this.consoleDebugLog("_getAd resp.ok"), this._adsData = await d.json(), this.consoleDebugLog("_getAd CriteoData", this._adsData), !this._adsData || !this._adsData.placements || this._adsData.placements.length === 0) return this.consoleDebugLog("_getAd no placements in response"), null;
        const h = this.extractCriteoRenderingData(this._adsData, o.placementKey);
        return this.consoleDebugLog("_getAd Extracted Criteo Data", h), this._criteoExtractedData = h, this._showBanner = !0, this._bannerAdsImpression(), this._initViewTracking(), h
      }
      return null
    } catch (t) {
      return this.consoleDebugLog("_getAd error", t), this._requestInProgress = !1, this._showSkeleton = !1, this.debug && console.log(t), null
    }
  }
  _initViewTracking() {
    if (!this.hostElement) {
      this.consoleDebugLog("hostElement missing retry"), requestAnimationFrame(() => this._initViewTracking());
      return
    }
    if (!("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype)) {
      this._bannerAdsView();
      return
    }
    let e;
    const o = new IntersectionObserver(s => {
      s.forEach(i => {
        const n = Math.round(i.intersectionRatio * 100);
        i.isIntersecting && n > 45 ? (this.consoleDebugLog("Passed 50%"), e || (e = setTimeout(() => {
          this.consoleDebugLog("Send impression timeout"), this._bannerAdsView(), o.unobserve(this.hostElement)
        }, 1e3))) : e && (clearTimeout(e), e = void 0)
      })
    }, {
      root: null,
      rootMargin: "0px",
      threshold: [0, .5, 1]
    });
    this.hostElement && o.observe(this.hostElement)
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
    var o, s, i, n, r;
    const t = this.isMobileWebview() ? (n = (i = this._criteoExtractedData) == null ? void 0 : i.rendering) == null ? void 0 : n.mobile_background_image_alt_text : (s = (o = this._criteoExtractedData) == null ? void 0 : o.rendering) == null ? void 0 : s.desktop_background_image_alt_text,
      e = ((r = this.adsData) == null ? void 0 : r.creativeSlot) || "slot0";
    return {
      promotionName: "banner-ads",
      promotionId: "banner-ads",
      creativeName: t,
      creativeSlot: e
    }
  }
  _onClickImpression() {
    var e, o, s, i;
    window.dataLayerService = window.dataLayerService || [];
    const t = ((o = (e = this._criteoExtractedData) == null ? void 0 : e.rendering) == null ? void 0 : o.optional_footer_redirect_url) || "";
    window.dataLayerService.push({
      scenarioName: A.General_Promotion_Click,
      collections: {
        eventInfo: {
          eventAction: A.General_Promotion_Click,
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
    }), (i = (s = this._criteoExtractedData) == null ? void 0 : s.beacons) != null && i.onClick && this.sendCriteoBeacon(this._criteoExtractedData.beacons.onClick)
  }
  _bannerAdsImpression() {
    var e, o, s, i;
    const t = this.isMobileWebview();
    window.dataLayerService = window.dataLayerService || [], window.dataLayerService.push({
      scenarioName: A.Banner_Promotion_Load,
      collections: {
        eventInfo: {
          eventAction: A.Banner_Promotion_Load,
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
          adPlacementLoadBeacon: (o = (e = this._criteoExtractedData) == null ? void 0 : e.beacons) == null ? void 0 : o.onLoad
        }
      }
    }), !t && ((i = (s = this._criteoExtractedData) == null ? void 0 : s.beacons) != null && i.onLoad) && this.sendCriteoBeacon(this._criteoExtractedData.beacons.onLoad)
  }
  _bannerAdsView() {
    var o, s, i;
    const t = this.isMobileWebview(),
      {
        onView: e
      } = ((o = this._criteoExtractedData) == null ? void 0 : o.beacons) || "";
    window.dataLayerService = window.dataLayerService || [], window.dataLayerService.push({
      scenarioName: A.General_Promotion_View,
      collections: {
        eventInfo: {
          eventAction: A.General_Promotion_View,
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
          adPlacementViewBeacon: (i = (s = this._criteoExtractedData) == null ? void 0 : s.beacons) == null ? void 0 : i.onView
        },
        promotions: {
          list: [{}]
        }
      }
    }), Ne(() => Pe()), !t && e && this.sendCriteoBeacon(e)
  }
  isAlreadySentBeacon(t) {
    var o, s;
    return globalThis.savedCriteoBeacons = (globalThis == null ? void 0 : globalThis.savedCriteoBeacons) || [], ((o = globalThis == null ? void 0 : globalThis.savedCriteoBeacons) == null ? void 0 : o.includes(t)) ? !0 : ((s = globalThis == null ? void 0 : globalThis.savedCriteoBeacons) == null || s.push(t), !1)
  }
  async sendCriteoBeacon(t) {
    if (!t) {
      this.consoleDebugLog("sendCriteoBeacon: No beacon URL provided");
      return
    }
    const e = t == null ? void 0 : t.replace(/^\/\//, "");
    if (e ? this.isAlreadySentBeacon(e) : !1) {
      this.consoleDebugLog("sendCriteoBeacon: Beacon has already been sent", t);
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
      const n = await fetch(i, {
        method: "GET"
      });
      n.ok ? this.consoleDebugLog("sendCriteoBeacon: Request successful") : this.consoleDebugLog("sendCriteoBeacon: Request failed", {
        status: n.status,
        statusText: n.statusText
      })
    } catch (s) {
      this.consoleDebugLog("sendCriteoBeacon: Error", s)
    }
  }
  generateSecureRandomNumber(t, e) {
    const o = e - t,
      s = Math.ceil(Math.log2(o + 1) / 8),
      i = new Uint8Array(s);
    return crypto.getRandomValues(i), parseInt(i.join(""), 10) % (o + 1) + t
  }
};
m([b({
  type: Boolean
})], f.prototype, "showTag", 2);
m([b({
  type: String
})], f.prototype, "title", 2);
m([b({
  type: Boolean
})], f.prototype, "showLoading", 2);
m([b({
  type: Boolean
})], f.prototype, "debug", 2);
m([b({
  type: Boolean
})], f.prototype, "demo", 2);
m([b({
  type: String
})], f.prototype, "baseUrl", 2);
m([b({
  type: String,
  converter: {
    fromAttribute: t => t && JSON.parse(decodeURI(t))
  }
})], f.prototype, "adsData", 2);
m([b({
  type: String,
  converter: {
    fromAttribute: t => t && decodeURIComponent(t)
  }
})], f.prototype, "requestData", 2);
m([b({
  type: String
})], f.prototype, "placementAdData", 2);
m([H()], f.prototype, "_adsData", 2);
m([H()], f.prototype, "_criteoExtractedData", 2);
m([H()], f.prototype, "_showBanner", 2);
m([H()], f.prototype, "_showSkeleton", 2);
m([H()], f.prototype, "_tooltipVisible", 2);
m([Ze(".banner")], f.prototype, "hostElement", 2);
f = m([qe("banner-ads")], f);