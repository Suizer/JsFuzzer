import {
  a as v,
  u as x,
  _ as h
} from "./B-VhoCyh.js";
import {
  e as C
} from "./CDXQzon8.js";
import {
  d as T,
  i as w,
  h as q,
  j as H,
  p as I,
  k as D,
  l as Q,
  q as k,
  y as A,
  m as B,
  E as u,
  n as E,
  x as M,
  a as O,
  u as i,
  g as a,
  o as W
} from "./QvGuN4mp.js";
import {
  u as $
} from "./BZqGDSdX.js";
import "./XKpuMyXA.js";
const z = T({
  __name: "index",
  async setup(G) {
    let n, s;
    const o = w(),
      l = q(),
      c = v(),
      d = H(),
      m = I(),
      r = D(),
      {
        initPage: p
      } = x(),
      {
        t: g
      } = Q(),
      {
        queryParams: y
      } = k(),
      f = A();
    B(() => {
      r.setPageType(u.query)
    });
    const e = a(() => c.allDetails.namedQuery),
      _ = a(() => e.value?.headingTitle || y.value.q),
      S = a(() => {
        const t = d.numFound ?? 0;
        return `${t} ${g("Search.productsTotal",t)}`
      }),
      P = a(() => e.value?.isWebsiteIndexed ? e.value?.isWebsiteIndexed === "true" || e.value?.isWebsiteIndexed === !0 : !0);
    return [n, s] = E(async () => $(async () => (r.setPageType(u.query), o.setConfig({
      isEmbedded: !1,
      paginationType: "loadMore"
    }), o.setRenderingConfig({
      onlyGrid: !1,
      showCategoryPills: !0
    }), await p(), !0), {
      default: () => !0
    }, "$OPC0KgM0u-")), await n, s(), M({
      htmlAttrs: {
        lang: m.iso
      },
      title: e.value?.pageTitle || "Lidl",
      meta: [{
        name: "description",
        content: e.value?.metaDescription || e.value?.name || ""
      }, {
        name: "keywords",
        content: e.value?.searchKeywords || e.value?.name || ""
      }, {
        name: "robots",
        content: C(f.query, l.validOffset, P.value)
      }]
    }), (t, K) => {
      const b = h;
      return W(), O(b, {
        pageHeading: i(_),
        pageSubHeading: i(S)
      }, null, 8, ["pageHeading", "pageSubHeading"])
    }
  }
});
export {
  z as
  default
};