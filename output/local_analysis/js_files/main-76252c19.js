class f {
  static getCookieValue(o) {
    var u;
    const i = "(^|;) ?" + o + "=([^;]*)(;|$)";
    try {
      const s = (u = document == null ? void 0 : document.cookie) == null ? void 0 : u.match(i),
        n = s && s[2];
      return n || void 0
    } catch {
      return
    }
  }
  static getConsentCookie() {
    const o = "CookieConsent";
    try {
      const i = f.getCookieValue(o);
      if (!i) return;
      const s = decodeURIComponent(i)
        .replace(/%2c/g, ",")
        .replace(/'/g, '"')
        .replace(/([{\[,])\s*([a-zA-Z0-9_]+?):/g, '$1"$2":'),
        n = JSON.parse(s);
      return n.hasOwnProperty("marketing") && n.hasOwnProperty("statistics") && n.hasOwnProperty("preferences") ? n : void 0
    } catch {
      return
    }
  }
  static onConsent() {
    return new Promise(o => {
      var I, a;
      const i = f.getConsentCookie(),
        s = ((I = window == null ? void 0 : window.Cookiebot) != null && I.hasResponse ? (a = window == null ? void 0 : window.Cookiebot) == null ? void 0 : a.consent : void 0) || i;
      if (s) {
        o(s);
        return
      }
      let n, h = 0;
      const C = 30,
        g = () => {
          var c;
          clearTimeout(n), window.removeEventListener("CookiebotOnLoad", g), o((c = window == null ? void 0 : window.Cookiebot) == null ? void 0 : c.consent)
        },
        v = () => {
          var r, d, e;
          if (!((r = window == null ? void 0 : window.Cookiebot) == null ? void 0 : r.consent) && h < C) {
            h++, n = setTimeout(v, 100);
            return
          }
          if ((d = window == null ? void 0 : window.Cookiebot) != null && d.hasResponse) {
            g();
            return
          }
          if (((e = window == null ? void 0 : window.Cookiebot) == null ? void 0 : e.hasResponse) === !1) {
            window.addEventListener("CookiebotOnLoad", g);
            return
          }
          g()
        };
      v()
    })
  }
}
const S = p => {
    const o = atob(p),
      i = JSON.parse(o),
      {
        accountId: u
      } = i;
    u && batchSDK(s => {
      s.setCustomUserID(`${u}`)
    })
  },
  b = p => {
    const o = setInterval(() => {
      typeof batchSDK < "u" && (clearInterval(o), p && p(b))
    }, 500)
  },
  O = (p = 5, o = 500) => new Promise((i, u) => {
    const s = f.getCookieValue("tracking-info");
    let n = 0;
    const h = setInterval(() => {
      n++, n > p && (clearInterval(h), u()), s && (clearInterval(h), i(s))
    }, o)
  }),
  D = () => f.getCookieValue("PnavLoggedIn");
(async function() {
  window.dataLayer = window.dataLayer || [];
  const p = window.location.href.match(/(qa.lidl.de|www.lidl.de)/),
    o = ["/c/newsletter-abmeldung"],
    i = await f.onConsent(),
    u = !i || i && i.marketing,
    s = 5e3,
    n = () => {
      const {
        pathname: a
      } = window.location, c = a.match(/(\/u\/|\/p\/|\/c\/|\/$)/), r = o.some(d => a.indexOf(d) !== -1);
      return c && !r
    },
    h = (a, c, r, d, e, l, t) => {
      e = "batchSDK", a[e] = a[e] || function() {
        (a[e].q = a[e].q || [])
        .push(arguments)
      }, l = c.createElement(r), t = c.getElementsByTagName(r)[0], l.async = !0, l.src = d, t.parentNode.insertBefore(l, t)
    };
  if (!u || u && !p) return;
  const C = sessionStorage.getItem("web-push-delay-init"),
    g = Date.now();
  let v = 1e4;
  C ? v = v - (Date.now() - C) : sessionStorage.setItem("web-push-delay-init", g + ""), h(window, document, "script", "https://via.batch.com/v3/bootstrap.min.js"), document.addEventListener("datalayerservice:ga4", a => {
    const {
      detail: c
    } = a, {
      event: r,
      ecommerce: d
    } = c;
    if (d && d.items && d.items.length) {
      const {
        item_name: e,
        item_id: l,
        price: t,
        item_category2: w,
        item_category: m
      } = d.items[0];
      r === "add_to_cart" && b(() => batchSDK(k => {
        k.trackEvent("add_to_cart", {
          attributes: {
            name: e,
            item_id: l,
            price: t,
            category: w || m
          }
        })
      })), r === "view_item" && b(() => batchSDK(k => {
        k.trackEvent("view_item", {
          attributes: {
            name: e,
            item_id: l,
            price: t,
            category: w || m
          }
        })
      }))
    }
    if (r === "remove_from_cart") {
      const {
        dataLayer: e
      } = window || [];
      if (e) {
        const l = e.find(t => t.event === "EECremoveFromCart");
        if (l) {
          const {
            ecommerce: t
          } = l;
          if (t && t.remove && t.remove.products) {
            const {
              products: w
            } = t.remove;
            b(() => batchSDK(m => {
              m.trackEvent("remove_from_cart", {
                attributes: {
                  item_id: parseInt(w.id, 10)
                }
              })
            }))
          }
        } else b(() => batchSDK(t => {
          t.trackEvent("remove_from_cart")
        }))
      }
    }
    r === "purchase" && b(() => batchSDK(e => {
      e.trackEvent("purchase")
    }))
  }), setTimeout(() => {
    const a = {
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
        r = () => {
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
        e = () => {
          window.dataLayer.push({
            event: "gaEvent",
            eventCategory: "Web Push",
            eventAction: "Opt_In Click",
            eventLabel: "Opt_In subscribed"
          })
        };
      batchSDK(t => {
        t.on("uiReady", async w => {
          const m = await w.getSubscriptionState();
          !await w.getCustomUserID() && !!D() && O()
            .then(y => {
              S(y)
            }), m.permission === "default" && n() && setTimeout(() => {
              w.ui.show("alert"), c()
            }, s)
        }), t.on("subscriptionChanged", async w => {
          const m = await w.getSubscriptionState();
          m.permission === "denied" && r(), m.permission === "granted" && !m.subscribed && d(), m.permission === "granted" && m.subscribed && e()
        })
      });
      const l = {
        apiKey: "2A1C6205CE9946228C1C381A4016BFFA",
        subdomain: "lidl1",
        authKey: "2./YIyujr/KiZJMDUycFOSc1/wGRsO26iLBe4FU0VlfLM=",
        dev: !1,
        vapidPublicKey: "BFQInT1U7cwrIsjQqO01hVFZCH+ZLoV4pB0hIJDfmX6wJ8eZhfy3ZWggYDj34Ez3eWeGrclCX2+rXkROHvyUC+s=",
        ui: a,
        serviceWorkerPathOverride: "/t/gtm/web-push-sw",
        safari: {
          "https://www.lidl.de": "web.de.lidl"
        }
      };
      batchSDK("setup", {
        ...l
      })
    } catch (c) {
      console.log("batchSDK", c)
    }
  }, v)
})();