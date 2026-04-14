const f = {
  statistics: "C0003",
  preferences: "C0002",
  marketing: "C0004"
};
class u {
  static getCookieValue(e) {
    var c;
    const n = "(^|;) ?" + e + "=([^;]*)(;|$)";
    try {
      const s = (c = document == null ? void 0 : document.cookie) == null ? void 0 : c.match(n),
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
          const [h, b] = C.split("=");
          return w[h] = b, w
        }, {}),
        {
          groups: t
        } = s;
      return t ? {
        marketing: t.includes(`${f.marketing}:1`),
        statistics: t.includes(`${f.statistics}:1`),
        preferences: t.includes(`${f.preferences}:1`)
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
    var c, s, t, w, C;
    const e = (c = window == null ? void 0 : window.Cookiebot) == null ? void 0 : c.hasResponse;
    return u.OneTrustResponse() ? {
      marketing: (s = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : s.includes(f.marketing),
      statistics: (t = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : t.includes(f.statistics),
      preferences: (w = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : w.includes(f.preferences)
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
        h = () => {
          var l, r, o, d;
          clearTimeout(t), window.removeEventListener("CookieConsentLoad", h), u.OneTrustResponse() ? e({
            marketing: (l = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : l.includes(f.marketing),
            statistics: (r = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : r.includes(f.statistics),
            preferences: (o = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : o.includes(f.preferences)
          }) : e((d = window == null ? void 0 : window.Cookiebot) == null ? void 0 : d.consent)
        },
        b = () => {
          var r, o, d, i;
          if (!(u.OneTrustResponse() || ((r = window == null ? void 0 : window.Cookiebot) == null ? void 0 : r.hasResponse)) && w < C) {
            w++, t = setTimeout(b, 1e3);
            return
          }
          if (u.OneTrustResponse() || ((o = window == null ? void 0 : window.Cookiebot) == null ? void 0 : o.hasResponse)) {
            h();
            return
          }
          if (u.OneTrustResponse() === !1 && ((d = window == null ? void 0 : window.OneTrust) == null || d.OnConsentChanged(() => h())), ((i = window == null ? void 0 : window.Cookiebot) == null ? void 0 : i.hasResponse) === !1) {
            window.addEventListener("CookiebotOnLoad", h);
            return
          }
          h()
        };
      b()
    })
  }
  static async getNecessaryUUID4CookieIfNotPresent() {
    ["lidl.de", "lidl.fr"].includes(window.location.hostname.slice(window.location.hostname.indexOf(".") + 1)) && (this.getCookieValue("LidlID") || await fetch("/t/gtm/uuid4-cookie"))
  }
}
const S = v => {
    const e = atob(v),
      n = JSON.parse(e),
      {
        accountId: c
      } = n;
    c && batchSDK(s => {
      s.setCustomUserID(`${c}`)
    })
  },
  k = v => {
    const e = setInterval(() => {
      typeof batchSDK < "u" && (clearInterval(e), v && v(k))
    }, 500)
  },
  D = (v = 5, e = 500) => new Promise((n, c) => {
    const s = u.getCookieValue("tracking-info");
    let t = 0;
    const w = setInterval(() => {
      t++, t > v && (clearInterval(w), c()), s && (clearInterval(w), n(s))
    }, e)
  }),
  T = () => u.getCookieValue("PnavLoggedIn");
(async function() {
  window.dataLayer = window.dataLayer || [];
  const v = window.location.href.match(/(qa.lidl.de|www.lidl.de)/),
    e = ["/c/newsletter-abmeldung"],
    n = await u.onConsent(),
    c = !n || n && n.marketing,
    s = 5e3,
    t = () => {
      const {
        pathname: l
      } = window.location, r = l.match(/(\/u\/|\/p\/|\/c\/|\/$)/), o = e.some(d => l.indexOf(d) !== -1);
      return r && !o
    },
    w = (l, r, o, d) => {
      const i = "batchSDK";
      l[i] = l[i] || function() {
        (l[i].q = l[i].q || [])
        .push(arguments)
      };
      const m = r.createElement(o),
        a = r.getElementsByTagName(o)[0];
      m.async = !0, m.src = d, a.parentNode.insertBefore(m, a)
    };
  if (!c || c && !v) return;
  const C = sessionStorage.getItem("web-push-delay-init"),
    h = Date.now();
  let b = 1e4;
  C ? b = b - (Date.now() - C) : sessionStorage.setItem("web-push-delay-init", h + ""), w(window, document, "script", "https://via.batch.com/v3/bootstrap.min.js"), document.addEventListener("datalayerservice:ga4", l => {
    const {
      detail: r
    } = l, {
      event: o,
      ecommerce: d
    } = r;
    if (d && d.items && d.items.length) {
      const {
        item_name: i,
        item_id: m,
        price: a,
        item_category2: g,
        item_category: p
      } = d.items[0];
      o === "add_to_cart" && k(() => batchSDK(O => {
        O.trackEvent("add_to_cart", {
          attributes: {
            name: i,
            item_id: m,
            price: a,
            category: g || p
          }
        })
      })), o === "view_item" && k(() => batchSDK(O => {
        O.trackEvent("view_item", {
          attributes: {
            name: i,
            item_id: m,
            price: a,
            category: g || p
          }
        })
      }))
    }
    if (o === "remove_from_cart") {
      const {
        dataLayer: i
      } = window || [];
      if (i) {
        const m = i.find(a => a.event === "EECremoveFromCart");
        if (m) {
          const {
            ecommerce: a
          } = m;
          if (a && a.remove && a.remove.products) {
            const {
              products: g
            } = a.remove;
            k(() => batchSDK(p => {
              p.trackEvent("remove_from_cart", {
                attributes: {
                  item_id: parseInt(g.id, 10)
                }
              })
            }))
          }
        } else k(() => batchSDK(a => {
          a.trackEvent("remove_from_cart")
        }))
      }
    }
    o === "purchase" && k(() => batchSDK(i => {
      i.trackEvent("purchase")
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
      const r = () => {
          window.dataLayer.push({
            event: "gaEvent",
            eventAction: "Opt_In Impression",
            eventCategory: "Web Push",
            eventLabel: "Opt_In message shown"
          })
        },
        o = () => {
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
        i = () => {
          window.dataLayer.push({
            event: "gaEvent",
            eventCategory: "Web Push",
            eventAction: "Opt_In Click",
            eventLabel: "Opt_In subscribed"
          })
        };
      batchSDK(a => {
        a.on("uiReady", async g => {
          const p = await g.getSubscriptionState();
          !await g.getCustomUserID() && !!T() && D()
            .then(y => {
              S(y)
            }), p.permission === "default" && t() && setTimeout(() => {
              g.ui.show("alert"), r()
            }, s)
        }), a.on("subscriptionChanged", async g => {
          const p = await g.getSubscriptionState();
          p.permission === "denied" && o(), p.permission === "granted" && !p.subscribed && d(), p.permission === "granted" && p.subscribed && i()
        })
      });
      const m = {
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
        ...m
      })
    } catch (r) {
      console.log("batchSDK", r)
    }
  }, b)
})();