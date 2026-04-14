import {
  u as b,
  _ as h
} from "./B-VhoCyh.js";
import {
  L as v,
  u as E
} from "./BLbcEFh7.js";
import {
  d as T,
  i as x,
  h as $,
  j as q,
  p as H,
  k,
  l as w,
  q as L,
  s as M,
  m as A,
  E as l,
  v as F,
  n as N,
  x as B,
  a as U,
  u as d,
  g as r,
  o as V
} from "./QvGuN4mp.js";
import {
  u as D
} from "./Ch4ap8W-.js";
import {
  u as G
} from "./BZqGDSdX.js";
const z = T({
  __name: "index",
  async setup(I) {
    let u, i;
    const t = x(),
      g = $(),
      p = q(),
      n = H(),
      s = k(),
      {
        t: a
      } = w(),
      {
        initPage: m
      } = b(),
      {
        setNavLangUrls: f
      } = E(),
      {
        queryParams: o
      } = L(),
      {
        isFeatureEnabled: S
      } = M(),
      _ = r(() => {
        if (!t.getConfigValue("isEmbedded")) return o.value.q ?? "*"
      }),
      y = r(() => {
        if (t.getConfigValue("isEmbedded")) return;
        const e = p.numFound ?? 0;
        return `${e} ${a("Search.productsTotal",e)}`
      }),
      P = r(() => t.getConfigValue("isEmbedded") ? g.campaignPageName : c());

    function c() {
      const e = `${a("Search.resultsOn")} ${a("Search.domain")}`;
      return o.value.q ? `${e} ${a("Search.for")}: ${o.value.q}` : e
    }
    return A(() => {
      s.setPageType(l.search);
      const e = {
        type: v.Search,
        q: o.value.q
      };
      S(F.isCriteo) && D()
        .loadCriteoProducts(), f(e, n.isCountryMultiLang, n.country)
    }), [u, i] = N(async () => G(async () => (s.setPageType(l.search), t.setConfig({
      isEmbedded: !1,
      paginationType: "loadMore"
    }), t.setRenderingConfig({
      onlyGrid: !1,
      showCategoryPills: !0
    }), await m(), !0), {
      default: () => !0
    }, "$6XlW5ExtWM")), await u, i(), s.isEmbeddedPage || B({
      htmlAttrs: {
        lang: n.iso
      },
      title: P.value,
      meta: [{
        name: "description",
        content: c()
      }, {
        name: "robots",
        content: "noindex,follow"
      }]
    }), (e, O) => {
      const C = h;
      return V(), U(C, {
        pageHeading: d(_),
        pageSubHeading: d(y)
      }, null, 8, ["pageHeading", "pageSubHeading"])
    }
  }
});
export {
  z as _
};