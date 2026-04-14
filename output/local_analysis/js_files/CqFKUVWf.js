import {
  bQ as N,
  bR as m,
  aS as V,
  ap as P,
  bS as A,
  a as E,
  n as w,
  as as S,
  aX as $
} from "./CAkCZjNM.js";
const _ = async (r, t, e) => {
  if (r.charAt(0) !== "d") return;
  const a = await E()
    .$api.getProductErpByProductId(r.substring(1));
  if (!(a != null && a.data)) throw new Error("Couldn't retrieve the product erpNumber by its ID");
  return a.data.erpNumber === "" ? e.replace(r, r.replace("d", "p")) : a.data.erpNumber && t ? e.replace(r, `p${a.data.erpNumber}`)
    .replace(t, t.replace(/^0+/, "")) : e.replace(r, `p${a.data.erpNumber}`)
}, x = (r, t) => {
  if (!/^[pd]\d+$/.test(r)) throw A({
    statusMessage: `Invalid erp number '${r}'`,
    statusCode: 404
  });
  const e = r.substring(1),
    n = /^\d{11,12}$/.test(e),
    a = t != null,
    s = e.length === 11;
  return {
    erpParam: e,
    headErp: n ? e.substring(0, s ? 8 : 9) : e,
    variantErp: n ? e : t,
    isVariantErp: n,
    variantIdProvided: a
  }
}, B = r => {
  var n;
  const t = Object.keys(r);
  if (t.length === 1) return (n = r[t[0]]) == null ? void 0 : n.erpNumber;
  const e = t.filter(a => {
    var s, c, i;
    return ((c = (s = r[a]) == null ? void 0 : s.stockAvailability) == null ? void 0 : c.availabilityIndicator) !== $.NOT_AVAILABLE && !((i = r[a]) != null && i.preventSelling)
  });
  return e.length === 1 ? e[0] : void 0
}, C = (r, t) => t.variantErp && t.variantErp in (r.variants ?? {}) && t.variantErp || B(r.variants ?? {}) || r.erpNumber || t.headErp, p = (r, t) => {
  if (!r) return;
  const e = {
      ...t.query
    },
    n = document.referrer;
  let a = !1;
  return n && (a = !n.includes(globalThis.location.hostname)), a && n && (e.original_ref = n), w({
    path: r,
    query: e,
    hash: t.hash
  }, {
    external: !0
  })
}, G = async r => {
  const t = S(P());
  try {
    return await t.fetch(r)
  } catch (e) {
    const n = e.status,
      a = {
        statusCode: n,
        statusMessage: e.name
      };
    throw n !== 404 && n >= 400 && n < 500 && console.error(a), A(a)
  }
}, T = N(async r => {
  var g, v;
  let t, e;
  const n = r.query.variantId,
    a = r.params.erp,
    s = x(a, n),
    c = ([t, e] = m(() => _(a, n, r.fullPath)), t = await t, e(), t);
  if (c) return p(c, r);
  const i = ([t, e] = m(() => G(s.headErp)), t = await t, e(), t);
  i.testerProduct;
  const o = (b, I) => {
      const y = V(P());
      if (I) {
        y.preselectByVariantGrouping(b);
        return
      }
      y.preselectVariant(b)
    },
    d = i.canonicalPath,
    l = (v = (g = i.variants) == null ? void 0 : g[s.erpParam]) == null ? void 0 : v.canonicalPath,
    u = i.variantGroupingByCode && s.erpParam && s.erpParam in i.variantGroupingByCode,
    f = s.isVariantErp && !!i.variants,
    h = C(i, s);
  if (f && !u && !i.variants[s.erpParam]) return p(d, r);
  if (f && !u && l && r.path !== l) return o(h), p(l, r);
  if (!f && r.path !== d) return o(h), p(d, r);
  i.variantGrouping && u ? o(s.erpParam, u) : o(h)
});
export {
  T as
  default
};