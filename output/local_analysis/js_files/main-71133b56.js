const h = {
  statistics: "C0003",
  preferences: "C0002",
  marketing: "C0004"
};
class u {
  static getCookieValue(e) {
    var r;
    const n = "(^|;) ?" + e + "=([^;]*)(;|$)";
    try {
      const s = (r = document == null ? void 0 : document.cookie) == null ? void 0 : r.match(n),
        t = s && s[2];
      return t || ""
    } catch {
      return ""
    }
  }
  static getCookieBotConsentCookie() {
    const e = "CookieConsent";
    try {
      const n = u.getCookieValue(e);
      if (!n) return null;
      const s = decodeURIComponent(n)
        .replace(/%2c/g, ",")
        .replace(/'/g, '"')
        .replace(/([{\[,])\s*([a-zA-Z0-9_]+?):/g, '$1"$2":'),
        t = JSON.parse(s);
      return t.hasOwnProperty("marketing") && t.hasOwnProperty("statistics") && t.hasOwnProperty("preferences") ? t : null
    } catch {
      return null
    }
  }
  static getOneTrustConsentCookie() {
    const e = "OptanonConsent";
    try {
      const n = u.getCookieValue(e);
      if (!n) return null;
      const s = decodeURIComponent(n)
        .split("&")
        .reduce((w, C) => {
          const [f, b] = C.split("=");
          return w[f] = b, w
        }, {}),
        {
          groups: t
        } = s;
      return t ? {
        marketing: t.includes(`${h.marketing}:1`),
        statistics: t.includes(`${h.statistics}:1`),
        preferences: t.includes(`${h.preferences}:1`)
      } : null
    } catch {
      return null
    }
  }
  static getConsentCookie() {
    const e = u.getCookieBotConsentCookie();
    return u.getOneTrustConsentCookie() || e
  }
  static getWindowsConsent() {
    var r, s, t, w, C;
    const e = (r = window == null ? void 0 : window.Cookiebot) == null ? void 0 : r.hasResponse;
    return u.OneTrustResponse() ? {
      marketing: (s = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : s.includes(h.marketing),
      statistics: (t = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : t.includes(h.statistics),
      preferences: (w = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : w.includes(h.preferences)
    } : e ? (C = window == null ? void 0 : window.Cookiebot) == null ? void 0 : C.consent : null
  }
  static OneTrustResponse() {
    var e;
    return (window == null ? void 0 : window.OneTrust) && (window == null ? void 0 : window.OneTrust) instanceof HTMLElement ? null : (e = window == null ? void 0 : window.OneTrust) == null ? void 0 : e.IsAlertBoxClosedAndValid()
  }
  static onConsent() {
    return new Promise(e => {
      var I;
      const n = u.getConsentCookie(),
        s = u.getWindowsConsent() || n;
      if ((u.OneTrustResponse() || ((I = window == null ? void 0 : window.Cookiebot) == null ? void 0 : I.hasResponse)) && s) {
        e(s);
        return
      }
      let t, w = 0;
      const C = 30,
        f = () => {
          var l, c, a, d;
          clearTimeout(t), window.removeEventListener("CookieConsentLoad", f), u.OneTrustResponse() ? e({
            marketing: (l = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : l.includes(h.marketing),
            statistics: (c = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : c.includes(h.statistics),
            preferences: (a = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : a.includes(h.preferences)
          }) : e((d = window == null ? void 0 : window.Cookiebot) == null ? void 0 : d.consent)
        },
        b = () => {
          var c, a, d, o;
          if (!(u.OneTrustResponse() || ((c = window == null ? void 0 : window.Cookiebot) == null ? void 0 : c.hasResponse)) && w < C) {
            w++, t = setTimeout(b, 1e3);
            return
          }
          if (u.OneTrustResponse() || ((a = window == null ? void 0 : window.Cookiebot) == null ? void 0 : a.hasResponse)) {
            f();
            return
          }
          if (u.OneTrustResponse() === !1 && ((d = window == null ? void 0 : window.OneTrust) == null || d.OnConsentChanged(() => f())), ((o = window == null ? void 0 : window.Cookiebot) == null ? void 0 : o.hasResponse) === !1) {
            window.addEventListener("CookiebotOnLoad", f);
            return
          }
          f()
        };
      b()
    })
  }
}
const S = v => {
    const e = atob(v),
      n = JSON.parse(e),
      {
        accountId: r
      } = n;
    r && batchSDK(s => {
      s.setCustomUserID(`${r}`)
    })
  },
  k = v => {
    const e = setInterval(() => {
      typeof batchSDK < "u" && (clearInterval(e), v && v(k))
    }, 500)
  },
  T = (v = 5, e = 500) => new Promise((n, r) => {
    const s = u.getCookieValue("tracking-info");
    let t = 0;
    const w = setInterval(() => {
      t++, t > v && (clearInterval(w), r()), s && (clearInterval(w), n(s))
    }, e)
  }),
  D = () => u.getCookieValue("PnavLoggedIn");
(async function() {
  window.dataLayer = window.dataLayer || [];
  const v = window.location.href.match(/(qa.lidl.de|www.lidl.de)/),
    e = ["/c/newsletter-abmeldung"],
    n = await u.onConsent(),
    r = !n || n && n.marketing,
    s = 5e3,
    t = () => {
      const {
        pathname: l
      } = window.location, c = l.match(/(\/u\/|\/p\/|\/c\/|\/$)/), a = e.some(d => l.indexOf(d) !== -1);
      return c && !a
    },
    w = (l, c, a, d, o, p, i) => {
      o = "batchSDK", l[o] = l[o] || function() {
        (l[o].q = l[o].q || [])
        .push(arguments)
      }, p = c.createElement(a), i = c.getElementsByTagName(a)[0], p.async = !0, p.src = d, i.parentNode.insertBefore(p, i)
    };
  if (!r || r && !v) return;
  const C = sessionStorage.getItem("web-push-delay-init"),
    f = Date.now();
  let b = 1e4;
  C ? b = b - (Date.now() - C) : sessionStorage.setItem("web-push-delay-init", f + ""), w(window, document, "script", "https://via.batch.com/v3/bootstrap.min.js"), document.addEventListener("datalayerservice:ga4", l => {
    const {
      detail: c
    } = l, {
      event: a,
      ecommerce: d
    } = c;
    if (d && d.items && d.items.length) {
      const {
        item_name: o,
        item_id: p,
        price: i,
        item_category2: g,
        item_category: m
      } = d.items[0];
      a === "add_to_cart" && k(() => batchSDK(O => {
        O.trackEvent("add_to_cart", {
          attributes: {
            name: o,
            item_id: p,
            price: i,
            category: g || m
          }
        })
      })), a === "view_item" && k(() => batchSDK(O => {
        O.trackEvent("view_item", {
          attributes: {
            name: o,
            item_id: p,
            price: i,
            category: g || m
          }
        })
      }))
    }
    if (a === "remove_from_cart") {
      const {
        dataLayer: o
      } = window || [];
      if (o) {
        const p = o.find(i => i.event === "EECremoveFromCart");
        if (p) {
          const {
            ecommerce: i
          } = p;
          if (i && i.remove && i.remove.products) {
            const {
              products: g
            } = i.remove;
            k(() => batchSDK(m => {
              m.trackEvent("remove_from_cart", {
                attributes: {
                  item_id: parseInt(g.id, 10)
                }
              })
            }))
          }
        } else k(() => batchSDK(i => {
          i.trackEvent("remove_from_cart")
        }))
      }
    }
    a === "purchase" && k(() => batchSDK(o => {
      o.trackEvent("purchase")
    }))
  }), setTimeout(() => {
    const l = {
      alert: {
        autoShow: !1,
        text: "Benachrichtigungen aktivieren und keine Angebote mehr verpassen! Weitere Informationen zur Funktionsweise und auch zu Ihrem Widerrufsrecht finden Sie in unseren Datenschutzbestimmungen.",
        positiveSubBtnLabel: "Benachrichtigungen aktivieren",
        negativeBtnLabel: "Vielleicht sp\xE4ter",
        icon: "https://www.lidl.de/static/assets/c6855ba1-a17c-468f-b8b0-09fdab67dea7.svg",
        hideFor: 604800,
        positiveBtnStyle: {
          backgroundColor: "blue",
          textColor: "white",
          fontSize: 25,
          shadow: !0
        }
      }
    };
    try {
      const c = () => {
          window.dataLayer.push({
            event: "gaEvent",
            eventAction: "Opt_In Impression",
            eventCategory: "Web Push",
            eventLabel: "Opt_In message shown"
          })
        },
        a = () => {
          window.dataLayer.push({
            event: "gaEvent",
            eventCategory: "Web Push",
            eventAction: "Opt_In Click",
            eventLabel: "Opt_In denied"
          })
        },
        d = () => {
          window.dataLayer.push({
            event: "gaEvent",
            eventCategory: "Web Push",
            eventAction: "Opt_In Click",
            eventLabel: "Opt_In granted"
          })
        },
        o = () => {
          window.dataLayer.push({
            event: "gaEvent",
            eventCategory: "Web Push",
            eventAction: "Opt_In Click",
            eventLabel: "Opt_In subscribed"
          })
        };
      batchSDK(i => {
        i.on("uiReady", async g => {
          const m = await g.getSubscriptionState();
          !await g.getCustomUserID() && !!D() && T()
            .then(y => {
              S(y)
            }), m.permission === "default" && t() && setTimeout(() => {
              g.ui.show("alert"), c()
            }, s)
        }), i.on("subscriptionChanged", async g => {
          const m = await g.getSubscriptionState();
          m.permission === "denied" && a(), m.permission === "granted" && !m.subscribed && d(), m.permission === "granted" && m.subscribed && o()
        })
      });
      const p = {
        apiKey: "2A1C6205CE9946228C1C381A4016BFFA",
        subdomain: "lidl1",
        authKey: "2./YIyujr/KiZJMDUycFOSc1/wGRsO26iLBe4FU0VlfLM=",
        dev: !1,
        vapidPublicKey: "BFQInT1U7cwrIsjQqO01hVFZCH+ZLoV4pB0hIJDfmX6wJ8eZhfy3ZWggYDj34Ez3eWeGrclCX2+rXkROHvyUC+s=",
        ui: l,
        serviceWorkerPathOverride: "/t/gtm/web-push-sw",
        safari: {
          "https://www.lidl.de": "web.de.lidl"
        }
      };
      batchSDK("setup", {
        ...p
      })
    } catch (c) {
      console.log("batchSDK", c)
    }
  }, b)
})();