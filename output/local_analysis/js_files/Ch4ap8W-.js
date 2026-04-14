import {
  b as Q,
  c as z
} from "./B-VhoCyh.js";
import {
  N as k,
  g as T,
  O as J,
  P as L,
  R as $,
  p as X,
  h as Z,
  j as ee,
  k as te,
  q as oe,
  s as re,
  T as ne,
  v as se,
  A as ae
} from "./QvGuN4mp.js";
import {
  a as ie
} from "./BZqGDSdX.js";
const ce = "base64",
  ue = "utf-8",
  de = "SHA-256",
  B = "";

function le(e) {
  if (!e) return null;
  try {
    const t = Ce(e);
    return JSON.parse(t)
  } catch (t) {
    return console.error(`Failed to decode or parse "${e}":`, t), null
  }
}

function Ae(e) {
  if (!e) return null;
  const t = decodeURIComponent(e);
  return Oe(t)
}

function Oe(e) {
  return Object.fromEntries(e.split(";")
    .map(t => t.split("=")))
}
async function Ie(e) {
  if (!e) return;
  const t = e.trim()
    .toLowerCase()
    .replaceAll(/[,;'"]/g, B),
    n = new TextEncoder()
    .encode(t),
    s = await crypto.subtle.digest(de, n);
  return Array.from(new Uint8Array(s))
    .map(a => a.toString(16)
      .padStart(2, "0"))
    .join(B)
}

function Ce(e) {
  return typeof atob == "function" ? atob(e) : Buffer.from(e, ce)
    .toString(ue)
}
const Ee = "LidlID",
  fe = "track_device_id",
  Re = "tracking-info",
  ge = "DEVICE_ID",
  Se = "SALES_CHANNEL",
  pe = "EMAIL_HASH",
  De = "SSO_ID";

function me() {
  const e = k(Ee),
    t = k(fe),
    o = T(() => {
      const a = Ae(t.value);
      return a ? {
        deviceID: a[ge],
        salesChannel: a[Se],
        emailHash: a[pe],
        ssoId: a[De]
      } : null
    }),
    n = k(Re),
    s = T(() => le(n.value)),
    c = T(() => !!t.value);
  return {
    lidlIDCookie: e,
    trackingInfo: s,
    trackDevice: o,
    isWebView: c
  }
}
var C = (e => (e[e.OTHER = 0] = "OTHER", e[e.IOS = 1] = "IOS", e[e.ANDROID = 2] = "ANDROID", e))(C || {});
class I {
  static getSearchRequestParams(t, o, n, s, c) {
    const a = I.getCriteoPageId(!1, n, s),
      r = I.getRequestParams("viewSearchResult", a, o, c);
    return r.keywords = encodeURIComponent(t), r
  }
  static getCategoryRequestParams(t, o, n, s, c) {
    const a = I.getCriteoPageId(!0, n, s),
      r = I.getRequestParams("viewCategory", a, o, c);
    return r.category = t?.replaceAll("/", ">"), r
  }
  static getCriteoPageId(t, o, n) {
    switch (n) {
      case 2:
        return t ? "viewCategoryApiAa" : "viewSearchResultApiAa";
      case 1:
        return t ? "viewCategoryApiAios" : "viewSearchResultApiAios";
      default:
        return t ? o ? "viewCategoryApiMobile" : "viewCategoryApiDesktop" : o ? "viewSearchResultApiMobile" : "viewSearchResultApiDesktop"
    }
  }
  static getRequestParams(t, o, n, s) {
    return {
      criteoPartnerId: s.criteoPartnerId,
      retailerVisitorId: s.retailerVisitorId,
      email: s.email,
      customerId: s.customerId,
      eventType: t,
      pageId: o,
      item: n.join("|"),
      listSize: n.length
    }
  }
  static mergeProductsWithGridboxes(t, o, n, s, c) {
    const a = n.length,
      r = {};
    if (!o?.length) return r;
    let f = 0;
    for (const O of t.products) {
      const R = o.find(D => D?.productId?.toString() === O.ParentSKU || D?.productId?.toString() === O.ProductId);
      if (R && I.isItemAvailable(R)) {
        const D = n[f];
        if (r[D - 1] = I.modifyGridboxData(R, O, t, s, D, c), ++f === a) break
      }
    }
    return r
  }
  static isItemAvailable(t) {
    return t ? t.data?.stockAvailability?.availabilityIndicator === J.AVAILABLE : !1
  }
  static modifyGridboxData(t, o, n, s, c, a) {
    if (t) {
      const r = t.data;
      r && (r.advertisementId = "CRITEO", r.promoted = !!a, r.list = s ? L.category : L.search, r.adPlacementLoadBeacon = n.OnLoadBeacon, r.adPlacementViewBeacon = n.OnViewBeacon, r.adLoadBeacon = o.OnLoadBeacon, r.adViewBeacon = o.OnViewBeacon, r.adClickBeacon = o.OnClickBeacon, r.adBasketChangeBeacon = o.OnBasketChangeBeacon, r.adWishlistBeacon = o.OnWishlistBeacon, r.position = c)
    }
    return t
  }
  static getURL() {
    return "/t/cri/delivery/retailmedia"
  }
}
var E = (e => (e.SEARCH_DESKTOP = "viewSearchResultApiDesktop-inGrid1", e.SEARCH_MOBILE = "viewSearchResultApiMobile-inGrid1", e.SEARCH_ANDROID = "viewSearchResultApiAa-inGrid1", e.SEARCH_IOS = "viewSearchResultApiAios-inGrid1", e.CATEGORY_DESKTOP = "viewCategoryApiDesktop-inGrid1", e.CATEGORY_MOBILE = "viewCategoryApiMobile-inGrid1", e.CATEGORY_ANDROID = "viewCategoryApiAa-inGrid1", e.CATEGORY_IOS = "viewCategoryApiAios-inGrid1", e))(E || {}),
  m = (e => (e.SEARCH_DESKTOP = "viewSearchResultApiDesktop-inGridDP", e.SEARCH_MOBILE = "viewSearchResultApiMobile-inGridDP", e.CATEGORY_DESKTOP = "viewCategoryApiDesktop-inGridDP", e.CATEGORY_MOBILE = "viewCategoryApiMobile-inGridDP", e.CATEGORY_IOS = "viewCategoryApiAios-inGridDP", e.CATEGORY_ANDROID = "viewCategoryApiAa-inGridDP", e))(m || {});
const w = {
    COOKIE_CONSENT: "OptanonConsent",
    COOKIE_CONSENT_MARKETING: "C0004",
    COOKIE_CONSENT_PREFERENCES: "C0002"
  },
  Te = new Set(["1", "true"]),
  H = "groups";

function he(e) {
  const o = e.split(",")
    .map(n => n.split(":"));
  return Object.fromEntries(o)
}

function ve() {
  const e = k(w.COOKIE_CONSENT),
    t = T(() => c(e.value)),
    o = T(() => t.value?.[H]),
    n = T(() => a(w.COOKIE_CONSENT_MARKETING)),
    s = T(() => a(w.COOKIE_CONSENT_PREFERENCES));

  function c(r) {
    if (!r) return null;
    const f = [...new URLSearchParams(r)].map(([O, R]) => O === H ? [O, he(R)] : [O, decodeURIComponent(R)]);
    return Object.fromEntries(f)
  }

  function a(r) {
    if (!o.value) return !1;
    const f = o.value[r],
      O = String(f)
      .toLowerCase()
      .trim();
    return Te.has(O)
  }
  return {
    oneTrustCookie: e,
    decodedCookie: t,
    cookieConsents: o,
    isMarketingCookieEnabled: n,
    isPreferencesCookieEnabled: s
  }
}

function _e(e, t, o) {
  if (e) switch (o) {
    case C.ANDROID:
      return m.CATEGORY_ANDROID;
    case C.IOS:
      return m.CATEGORY_IOS;
    default:
      return t ? m.CATEGORY_MOBILE : m.CATEGORY_DESKTOP
  } else return t ? m.SEARCH_MOBILE : m.SEARCH_DESKTOP
}

function Pe(e, t) {
  switch (t) {
    case C.ANDROID:
      return E.CATEGORY_ANDROID;
    case C.IOS:
      return E.CATEGORY_IOS;
    default:
      return e ? E.CATEGORY_MOBILE : E.CATEGORY_DESKTOP
  }
}

function ke(e, t) {
  switch (t) {
    case C.ANDROID:
      return E.SEARCH_ANDROID;
    case C.IOS:
      return E.SEARCH_IOS;
    default:
      return e ? E.SEARCH_MOBILE : E.SEARCH_DESKTOP
  }
}

function K(e, t) {
  if (!(t?.status !== "OK" || !Array.isArray(t.placements)))
    for (const o of t.placements) {
      const n = o[e];
      if (n && n.length > 0) return n[0]
    }
}

function V(e) {
  if (!e?.salesChannel) return C.OTHER;
  switch (e.salesChannel) {
    case "06":
      return C.ANDROID;
    case "07":
      return C.IOS;
    default:
      return C.OTHER
  }
}

function we(e, t, o) {
  return e ? Pe(t, o) : ke(t, o)
}

function be() {
  const {
    criteoProductsPositions: e,
    criteoTimeout: t,
    criteoPartnerId: o,
    criteoRetailerVisitorId: n
  } = $()
    .public, s = X(), c = Q(), a = Z(), r = ee(), f = te(), {
      isMobile: O
    } = z(), {
      queryParams: R
    } = oe(), D = re(), q = ne(), Y = ve(), v = me(), {
      trackSponsoredProductLoad: M
    } = ie(), y = ae(void 0), G = {
      criteoPartnerId: o,
      retailerVisitorId: n
    };

  function U() {
    if (Y.isMarketingCookieEnabled.value && D.isFeatureEnabled(se.isCriteo) && f.isCriteoRelated) {
      const l = R.value.q,
        d = a.breadcrumbPageId ?? a.categoryId,
        A = V(v.trackDevice.value);
      N(r.filteredProducts, O.value, A, l, d)
        .then(i => {
          Object.entries(i)
            .length > 0 && (r.setCriteoProducts(i), M(i, y.value))
        })
        .catch(i => {
          q.info({
            err: i
          }, "Criteo load products error")
        })
    }
  }
  async function N(l, d, A, i, u) {
    const g = l?.map(W => W.code ?? "") ?? [],
      S = !!u,
      p = S ? await F(u ?? "", d, g, G) : await x(i ?? "", d, g, G),
      _ = K(_e(S, d, A), p);
    r.setPlacementBannerItem(_);
    const h = K(we(S, d, A), p);
    y.value = h?.OnLoadBeacon;
    let P = {};
    return h?.products?.length && (P = await j(h, S, !0)), P
  }
  async function x(l, d, A, i) {
    return b(l, !1, d, A, i)
  }
  async function F(l, d, A, i) {
    return b(l, !0, d, A, i)
  }
  async function b(l, d, A, i, u) {
    const g = I.getURL(),
      S = v.trackingInfo.value,
      p = v.trackDevice.value,
      _ = v.lidlIDCookie.value;
    _ && (u.retailerVisitorId = _), p ? (u.retailerVisitorId = p.deviceID, u.email = p.emailHash, u.customerId = p.ssoId) : S && (u.email = await Ie(S.email), u.customerId = S.ssoId);
    const h = V(p),
      P = d ? I.getCategoryRequestParams(l, i, A, h, u) : I.getSearchRequestParams(l, i, A, h, u);
    return await c.fetchCriteoProducts(g, P, t)
  }
  async function j(l, d, A) {
    const i = (l.products ?? [])
      .map(g => g.ProductId);
    let u = {};
    if (i.length > 0) {
      const g = await c.fetchGridboxes(s.country, s.language, i);
      u = I.mergeProductsWithGridboxes(l, g, e, d, A)
    }
    return u
  }
  return {
    loadCriteoProducts: U,
    getCriteoSponsoredProducts: N
  }
}
export {
  be as u
};