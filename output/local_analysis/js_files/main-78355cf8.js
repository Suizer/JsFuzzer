const v = {
  statistics: "C0003",
  preferences: "C0002",
  marketing: "C0004"
};
class r {
  static getCookieValue(e) {
    var l;
    const i = "(^|;) ?" + e + "=([^;]*)(;|$)";
    try {
      const s = (l = document == null ? void 0 : document.cookie) == null ? void 0 : l.match(i),
        n = s && s[2];
      return n || ""
    } catch {
      return ""
    }
  }
  static getCookieBotConsentCookie() {
    const e = "CookieConsent";
    try {
      const i = r.getCookieValue(e);
      if (!i) return null;
      const s = decodeURIComponent(i)
        .replace(/%2c/g, ",")
        .replace(/'/g, '"')
        .replace(/([{\[,])\s*([a-zA-Z0-9_]+?):/g, '$1"$2":'),
        n = JSON.parse(s);
      return n.hasOwnProperty("marketing") && n.hasOwnProperty("statistics") && n.hasOwnProperty("preferences") ? n : null
    } catch {
      return null
    }
  }
  static getOneTrustConsentCookie() {
    const e = "OptanonConsent";
    try {
      const i = r.getCookieValue(e);
      if (!i) return null;
      const s = decodeURIComponent(i)
        .split("&")
        .reduce((p, k) => {
          const [a, E] = k.split("=");
          return p[a] = E, p
        }, {}),
        {
          groups: n
        } = s;
      return n ? {
        marketing: n.includes(`${v.marketing}:1`),
        statistics: n.includes(`${v.statistics}:1`),
        preferences: n.includes(`${v.preferences}:1`)
      } : null
    } catch {
      return null
    }
  }
  static getConsentCookie() {
    const e = r.getCookieBotConsentCookie();
    return r.getOneTrustConsentCookie() || e
  }
  static getWindowsConsent() {
    var l, s, n, p, k;
    const e = (l = window == null ? void 0 : window.Cookiebot) == null ? void 0 : l.hasResponse;
    return r.OneTrustResponse() ? {
      marketing: (s = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : s.includes(v.marketing),
      statistics: (n = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : n.includes(v.statistics),
      preferences: (p = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : p.includes(v.preferences)
    } : e ? (k = window == null ? void 0 : window.Cookiebot) == null ? void 0 : k.consent : null
  }
  static OneTrustResponse() {
    var e;
    return (window == null ? void 0 : window.OneTrust) && (window == null ? void 0 : window.OneTrust) instanceof HTMLElement ? null : (e = window == null ? void 0 : window.OneTrust) == null ? void 0 : e.IsAlertBoxClosedAndValid()
  }
  static onConsent() {
    return new Promise(e => {
      var T;
      const i = r.getConsentCookie(),
        s = r.getWindowsConsent() || i;
      if ((r.OneTrustResponse() || ((T = window == null ? void 0 : window.Cookiebot) == null ? void 0 : T.hasResponse)) && s) {
        e(s);
        return
      }
      let n, p = 0;
      const k = 30,
        a = () => {
          var O, u, t, I;
          clearTimeout(n), window.removeEventListener("CookieConsentLoad", a), r.OneTrustResponse() ? e({
            marketing: (O = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : O.includes(v.marketing),
            statistics: (u = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : u.includes(v.statistics),
            preferences: (t = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : t.includes(v.preferences)
          }) : e((I = window == null ? void 0 : window.Cookiebot) == null ? void 0 : I.consent)
        },
        E = () => {
          var u, t, I, L;
          if (!(r.OneTrustResponse() || ((u = window == null ? void 0 : window.Cookiebot) == null ? void 0 : u.hasResponse)) && p < k) {
            p++, n = setTimeout(E, 1e3);
            return
          }
          if (r.OneTrustResponse() || ((t = window == null ? void 0 : window.Cookiebot) == null ? void 0 : t.hasResponse)) {
            a();
            return
          }
          if (r.OneTrustResponse() === !1 && ((I = window == null ? void 0 : window.OneTrust) == null || I.OnConsentChanged(() => a())), ((L = window == null ? void 0 : window.Cookiebot) == null ? void 0 : L.hasResponse) === !1) {
            window.addEventListener("CookiebotOnLoad", a);
            return
          }
          a()
        };
      E()
    })
  }
  static async getNecessaryUUID4CookieIfNotPresent() {
    ["lidl.de", "lidl.fr"].includes(window.location.hostname.slice(window.location.hostname.indexOf(".") + 1)) && (this.getCookieValue("LidlID") || await fetch("/t/gtm/uuid4-cookie"))
  }
}
const R = async y => {
  const {
    accountId: e
  } = JSON.parse(atob(y));
  !e || await batchSDK(i => {
    i.setCustomUserID(`${e}`)
  })
}, D = y => {
  const e = setInterval(() => {
    typeof batchSDK < "u" && (clearInterval(e), y && y())
  }, 500)
}, K = (y = 5, e = 500) => new Promise(i => {
  let l = 0;
  const s = r.getCookieValue("tracking-info"),
    n = setInterval(() => {
      l++, (s || l > y) && (clearInterval(n), i(s || ""))
    }, e)
});
(async function() {
  window.dataLayer = window.dataLayer || [];
  const e = ["www.lidl.de", "www.lidl.sk", "localhost", "www.lidl.cz", "www.lidl.be", "www.lidl.fr", "www.lidl.nl", "www.lidl.pl", "www.lidl.sk"].join("|"),
    i = window.location.href.match(new RegExp(`(${e})`)),
    l = ["/c/newsletter-abmeldung"],
    s = await r.onConsent(),
    n = !s || s && s.marketing,
    p = 5e3,
    k = "t/cdn/tracking-components/web-push-sdk/domainSetup",
    a = window.mindShiftNav.topDomain,
    T = `${window.location.origin}/${k}/${a}.json`,
    O = await K();
  try {
    const u = await fetch(T);
    if (!u.ok) throw new Error(`Failed to fetch JSON (${u.status} ${u.statusText})`);
    const t = await u.json(),
      I = () => {
        const {
          pathname: m
        } = window.location, C = m.match(/(\/u\/|\/p\/|\/c\/|\/$)/), f = l.some(b => m.indexOf(b) !== -1);
        return C && !f
      },
      L = (m, C, f, b) => {
        const d = "batchSDK";
        m[d] = m[d] || function() {
          (m[d].q = m[d].q || [])
          .push(arguments)
        };
        const h = C.createElement(f),
          o = C.getElementsByTagName(f)[0];
        h.async = !0, h.src = b, o.parentNode.insertBefore(h, o)
      };
    if (!n || n && !i) return;
    const N = sessionStorage.getItem("web-push-delay-init"),
      P = Date.now();
    let _ = 1e4;
    N ? _ = _ - (Date.now() - N) : sessionStorage.setItem("web-push-delay-init", P + ""), L(window, document, "script", "https://via.batch.com/v3/bootstrap.min.js"), document.addEventListener("datalayerservice:ga4", m => {
      const {
        detail: C
      } = m, {
        event: f,
        ecommerce: b
      } = C;
      if (b && b.items && b.items.length) {
        const {
          item_name: d,
          item_id: h,
          price: o,
          item_category2: g,
          item_category: w
        } = b.items[0];
        f === "add_to_cart" && D(() => batchSDK(S => {
          S.trackEvent("add_to_cart", {
            attributes: {
              name: d,
              item_id: h,
              price: o,
              category: g || w
            }
          })
        })), f === "view_item" && D(() => batchSDK(S => {
          S.trackEvent("view_item", {
            attributes: {
              name: d,
              item_id: h,
              price: o,
              category: g || w
            }
          })
        }))
      }
      if (f === "remove_from_cart") {
        const {
          dataLayer: d
        } = window || [];
        if (d) {
          const h = d.find(o => o.event === "EECremoveFromCart");
          if (h) {
            const {
              ecommerce: o
            } = h;
            if (o && o.remove && o.remove.products) {
              const {
                products: g
              } = o.remove;
              D(() => batchSDK(w => {
                w.trackEvent("remove_from_cart", {
                  attributes: {
                    item_id: parseInt(g.id, 10)
                  }
                })
              }))
            }
          } else D(() => batchSDK(o => {
            o.trackEvent("remove_from_cart")
          }))
        }
      }
      f === "purchase" && D(() => batchSDK(d => {
        d.trackEvent("purchase")
      }))
    });
    let c = {};
    switch (window.mindShiftNav.locale) {
      case "fr-BE":
        c.acceptNotifications = t.fr_BE.acceptNotifications, c.declineNotifications = t.fr_BE.declineNotifications, c.popupText = t.fr_BE.popupText, c.label = t.fr_BE.privacyPolicy.label, c.link = t.fr_BE.privacyPolicy.link;
        break;
      case "nl-BE":
        c.acceptNotifications = t.nl_BE.acceptNotifications, c.declineNotifications = t.nl_BE.declineNotifications, c.popupText = t.nl_BE.popupText, c.label = t.nl_BE.privacyPolicy.label, c.link = t.nl_BE.privacyPolicy.link;
        break
    }
    setTimeout(() => {
      const m = {
        alert: {
          autoShow: !1,
          text: a === "be" ? c.popupText : t.popupText,
          positiveSubBtnLabel: a === "be" ? c.acceptNotifications : t.acceptNotifications,
          negativeBtnLabel: a === "be" ? c.declineNotifications : t.declineNotifications,
          icon: "https://www.lidl.de/static/assets/c6855ba1-a17c-468f-b8b0-09fdab67dea7.svg",
          hideFor: 604800,
          extraBtn: {
            label: a === "be" ? c.label : t.privacyPolicy.label,
            link: a === "be" ? c.link : t.privacyPolicy.link
          },
          positiveBtnStyle: {
            backgroundColor: "blue",
            textColor: "white",
            fontSize: 25,
            shadow: !0
          }
        }
      };
      try {
        const C = () => {
            window.dataLayer.push({
              event: "gaEvent",
              eventAction: "Opt_In Impression",
              eventCategory: "Web Push",
              eventLabel: "Opt_In message shown"
            })
          },
          f = () => {
            window.dataLayer.push({
              event: "gaEvent",
              eventCategory: "Web Push",
              eventAction: "Opt_In Click",
              eventLabel: "Opt_In denied"
            })
          },
          b = () => {
            window.dataLayer.push({
              event: "gaEvent",
              eventCategory: "Web Push",
              eventAction: "Opt_In Click",
              eventLabel: "Opt_In granted"
            })
          },
          d = () => {
            window.dataLayer.push({
              event: "gaEvent",
              eventCategory: "Web Push",
              eventAction: "Opt_In Click",
              eventLabel: "Opt_In subscribed"
            })
          };
        batchSDK(o => {
          o.on("uiReady", async g => {
            const w = await g.getSubscriptionState(),
              S = await g.getCustomUserID();
            !S && O ? R(O) : S && !O && o.setCustomUserID(null), w.permission === "default" && I() && setTimeout(() => {
              g.ui.show("alert"), C()
            }, p)
          }), o.on("subscriptionChanged", async g => {
            const w = await g.getSubscriptionState();
            w.permission === "denied" && f(), w.permission === "granted" && !w.subscribed && (b(), o.ui.hide("alert")), w.permission === "granted" && w.subscribed && (d(), o.ui.hide("alert"))
          })
        });
        const h = {
          apiKey: t.apiKey,
          subdomain: t.subdomain,
          authKey: t.authKey,
          dev: !1,
          vapidPublicKey: t.vapidPublicKey,
          ui: m,
          serviceWorkerPathOverride: "/t/gtm/web-push-sw",
          safari: {
            [`https://www.lidl.${a}`]: `web.${a}.lidl`
          }
        };
        batchSDK("setup", {
          ...h
        })
      } catch (C) {
        console.log("batchSDK", C)
      }
    }, _)
  } catch (u) {
    console.error(`Error loading ${T}: ${u}`)
  }
})();