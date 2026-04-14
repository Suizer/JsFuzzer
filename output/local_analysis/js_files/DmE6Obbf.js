import {
  a as F,
  u as I,
  _ as L
} from "./B-VhoCyh.js";
import {
  d as $,
  i as A,
  h as O,
  j as U,
  p as k,
  k as q,
  l as E,
  q as G,
  L as M,
  y as N,
  s as j,
  m as V,
  E as v,
  v as J,
  n as Q,
  x as W,
  a as Y,
  u as i,
  g as a,
  o as z,
  M as K
} from "./QvGuN4mp.js";
import {
  e as X
} from "./CDXQzon8.js";
import {
  u as Z
} from "./Ch4ap8W-.js";
import {
  u as ee
} from "./BZqGDSdX.js";
import "./XKpuMyXA.js";
const ie = $({
  __name: "index",
  async setup(te) {
    let c, l;
    const g = A(),
      y = O(),
      r = U(),
      x = F(),
      d = k(),
      p = q(),
      {
        getCurrency: P
      } = K(),
      {
        t: S
      } = E(),
      {
        initPage: _
      } = I(),
      {
        queryParams: h
      } = G(),
      {
        domainUrl: s
      } = M(),
      f = N(),
      {
        isFeatureEnabled: C
      } = j(),
      D = a(() => s.value === null ? null : `${s.value}${f.path}`),
      b = a(() => s.value === null ? null : `${s.value}${t.value?.url??""}`),
      t = a(() => x.allDetails.categoryData),
      H = a(() => t.value?.headingTitle || t.value?.name || h.value.q),
      R = a(() => {
        const e = r.numFound ?? 0;
        return `${e} ${S("Search.productsTotal",e)}`
      }),
      T = a(() => t.value?.hasGoogleIndex === "true" || t.value?.hasGoogleIndex === !0),
      m = a(() => {
        const e = [];
        for (const o of r.filteredProducts) {
          const n = o.gridBox?.gridBoxData;
          n?.price?.price && e.push(n.price.price)
        }
        return Math.min(...e)
      }),
      u = a(() => {
        let e = 0;
        for (const o of r.filteredProducts) o.gridBox?.gridBoxData?.ratings && e++;
        return e
      }),
      w = a(() => {
        if (u.value > 0) {
          let e = 0;
          for (const o of r.filteredProducts) {
            const n = o.gridBox?.gridBoxData;
            n?.ratings && (e += n.ratings.average)
          }
          return e / u.value
        } else return
      }),
      B = a(() => {
        const e = {
            "@context": "https://schema.org",
            "@type": "Product",
            name: t.value?.name,
            description: t.value?.metaDescription || t.value?.name || "",
            offers: {
              "@type": "AggregateOffer",
              url: "",
              priceCurrency: P(d.locale),
              lowPrice: m.value ? m.value.toFixed(2) : 0,
              offerCount: r.numFound
            }
          },
          o = u.value > 0 ? {
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: w.value?.toFixed(2),
              reviewCount: u.value
            }
          } : {};
        return JSON.stringify({
          ...e,
          ...o
        })
      });
    return V(() => {
      p.setPageType(v.category), C(J.isCriteo) && Z()
        .loadCriteoProducts()
    }), [c, l] = Q(async () => ee(async () => (p.setPageType(v.category), g.setConfig({
      isEmbedded: !1,
      paginationType: "loadMore"
    }), g.setRenderingConfig({
      onlyGrid: !1,
      showCategoryPills: !0
    }), await _(), !0), {
      default: () => !0
    }, "$F_I3uiY6bO")), await c, l(), W({
      htmlAttrs: {
        lang: d.iso
      },
      title: t.value?.pageTitle || "Lidl",
      meta: [{
        name: "title",
        content: t.value?.pageTitle
      }, {
        name: "description",
        content: t.value?.metaDescription
      }, {
        name: "url",
        content: b.value
      }, {
        name: "robots",
        content: X(f.query, y.validOffset, T.value)
      }],
      script: [{
        type: "application/ld+json",
        textContent: B
      }],
      link: [{
        rel: "canonical",
        href: D.value
      }]
    }), (e, o) => {
      const n = L;
      return z(), Y(n, {
        class: "s-category-page",
        pageHeading: i(H),
        pageSubHeading: i(R),
        hasPageHeader: i(t)
          ?.hasPageHeader,
        wonStyle: i(t)
          ?.wonColor
      }, null, 8, ["pageHeading", "pageSubHeading", "hasPageHeader", "wonStyle"])
    }
  }
});
export {
  ie as
  default
};