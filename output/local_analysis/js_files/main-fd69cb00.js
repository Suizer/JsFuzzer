const v = {
  statistics: "C0003",
  preferences: "C0002",
  marketing: "C0004"
};
class r {
  static getCookieValue(e) {
    var l;
    const s = "(^|;) ?" + e + "=([^;]*)(;|$)";
    try {
      const i = (l = document == null ? void 0 : document.cookie) == null ? void 0 : l.match(s),
        n = i && i[2];
      return n || ""
    } catch {
      return ""
    }
  }
  static getCookieBotConsentCookie() {
    const e = "CookieConsent";
    try {
      const s = r.getCookieValue(e);
      if (!s) return null;
      const i = decodeURIComponent(s)
        .replace(/%2c/g, ",")
        .replace(/'/g, '"')
        .replace(/([{\[,])\s*([a-zA-Z0-9_]+?):/g, '$1"$2":'),
        n = JSON.parse(i);
      return n.hasOwnProperty("marketing") && n.hasOwnProperty("statistics") && n.hasOwnProperty("preferences") ? n : null
    } catch {
      return null
    }
  }
  static getOneTrustConsentCookie() {
    const e = "OptanonConsent";
    try {
      const s = r.getCookieValue(e);
      if (!s) return null;
      const i = decodeURIComponent(s)
        .split("&")
        .reduce((p, k) => {
          const [a, E] = k.split("=");
          return p[a] = E, p
        }, {}),
        {
          groups: n
        } = i;
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
    var l, i, n, p, k;
    const e = (l = window == null ? void 0 : window.Cookiebot) == null ? void 0 : l.hasResponse;
    return r.OneTrustResponse() ? {
      marketing: (i = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : i.includes(v.marketing),
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
      const s = r.getConsentCookie(),
        i = r.getWindowsConsent() || s;
      if ((r.OneTrustResponse() || ((T = window == null ? void 0 : window.Cookiebot) == null ? void 0 : T.hasResponse)) && i) {
        e(i);
        return
      }
      let n, p = 0;
      const k = 30,
        a = () => {
          var O, u, t, S;
          clearTimeout(n), window.removeEventListener("CookieConsentLoad", a), r.OneTrustResponse() ? e({
            marketing: (O = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : O.includes(v.marketing),
            statistics: (u = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : u.includes(v.statistics),
            preferences: (t = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : t.includes(v.preferences)
          }) : e((S = window == null ? void 0 : window.Cookiebot) == null ? void 0 : S.consent)
        },
        E = () => {
          var u, t, S, N;
          if (!(r.OneTrustResponse() || ((u = window == null ? void 0 : window.Cookiebot) == null ? void 0 : u.hasResponse)) && p < k) {
            p++, n = setTimeout(E, 1e3);
            return
          }
          if (r.OneTrustResponse() || ((t = window == null ? void 0 : window.Cookiebot) == null ? void 0 : t.hasResponse)) {
            a();
            return
          }
          if (r.OneTrustResponse() === !1 && ((S = window == null ? void 0 : window.OneTrust) == null || S.OnConsentChanged(() => a())), ((N = window == null ? void 0 : window.Cookiebot) == null ? void 0 : N.hasResponse) === !1) {
            window.addEventListener("CookiebotOnLoad", a);
            return
          }
          a()
        };
      E()
    })
  }
  static async getNecessaryUUID4CookieIfNotPresent() {
    ["lidl.de", "lidl.fr"].includes(window.location.hostname.slice(window.location.hostname.indexOf(".") + 1)) && await fetch("/t/gtm/uuid4-cookie")
  }
}
const K = async y => {
  const {
    accountId: e
  } = JSON.parse(atob(y));
  !e || await batchSDK(s => {
    s.setCustomUserID(`${e}`)
  })
}, D = y => {
  const e = setInterval(() => {
    typeof batchSDK < "u" && (clearInterval(e), y && y())
  }, 500)
}, x = (y = 5, e = 500) => new Promise(s => {
  let l = 0;
  const i = r.getCookieValue("tracking-info"),
    n = setInterval(() => {
      l++, (i || l > y) && (clearInterval(n), s(i || ""))
    }, e)
});
(async function() {
  window.dataLayer = window.dataLayer || [];
  const e = ["www.lidl.de", "www.lidl.sk", "localhost", "www.lidl.cz", "www.lidl.be", "www.lidl.fr", "www.lidl.nl", "www.lidl.pl", "www.lidl.sk"].join("|"),
    s = window.location.href.match(new RegExp(`(${e})`)),
    l = ["/c/newsletter-abmeldung"],
    i = await r.onConsent(),
    n = !i || i && i.marketing,
    p = 5e3,
    k = "t/cdn/tracking-components/web-push-sdk/domainSetup",
    a = window.mindShiftNav && window.mindShiftNav.topDomain ? window.mindShiftNav.topDomain : new URL(window.location.href)
    .hostname.split(".")
    .pop(),
    T = `${window.location.origin}/${k}/${a}.json`,
    O = await x();
  try {
    const u = await fetch(T);
    if (!u.ok) throw new Error(`Failed to fetch JSON (${u.status} ${u.statusText})`);
    const t = await u.json(),
      S = () => {
        const {
          pathname: m
        } = window.location, b = m.match(/(\/u\/|\/p\/|\/c\/|\/$)/), f = l.some(g => m.indexOf(g) !== -1);
        return b && !f
      },
      N = (m, b, f, g) => {
        const d = "batchSDK";
        m[d] = m[d] || function() {
          (m[d].q = m[d].q || [])
          .push(arguments)
        };
        const h = b.createElement(f),
          o = b.getElementsByTagName(f)[0];
        h.async = !0, h.src = g, o.parentNode.insertBefore(h, o)
      };
    if (!n || n && !s) return;
    const _ = sessionStorage.getItem("web-push-delay-init"),
      P = Date.now();
    let L = 1e4;
    _ ? L = L - (Date.now() - _) : sessionStorage.setItem("web-push-delay-init", P + ""), N(window, document, "script", "https://via.batch.com/v3/bootstrap.min.js"), document.addEventListener("datalayerservice:ga4", m => {
      const {
        detail: b
      } = m, {
        event: f,
        ecommerce: g
      } = b;
      if (g && g.items && g.items.length) {
        const {
          item_name: d,
          item_id: h,
          price: o,
          item_category2: C,
          item_category: w
        } = g.items[0];
        f === "add_to_cart" && D(() => batchSDK(I => {
          I.trackEvent("add_to_cart", {
            attributes: {
              name: d,
              item_id: h,
              price: o,
              category: C || w
            }
          })
        })), f === "view_item" && D(() => batchSDK(I => {
          I.trackEvent("view_item", {
            attributes: {
              name: d,
              item_id: h,
              price: o,
              category: C || w
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
                products: C
              } = o.remove;
              D(() => batchSDK(w => {
                w.trackEvent("remove_from_cart", {
                  attributes: {
                    item_id: parseInt(C.id, 10)
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
    const R = window.mindShiftNav && window.mindShiftNav.locale ? window.mindShiftNav.locale : window.location.href.includes("/l/nl/") ? "nl-BE" : window.location.href.includes("/l/fr/") ? "fr-BE" : null;
    let c = {};
    switch (R) {
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
        const b = () => {
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
          g = () => {
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
          o.on("uiReady", async C => {
            const w = await C.getSubscriptionState(),
              I = await C.getCustomUserID();
            !I && O ? K(O) : I && !O && o.setCustomUserID(null), w.permission === "default" && S() && setTimeout(() => {
              C.ui.show("alert"), b()
            }, p)
          }), o.on("subscriptionChanged", async C => {
            const w = await C.getSubscriptionState();
            w.permission === "denied" && f(), w.permission === "granted" && !w.subscribed && (g(), o.ui.hide("alert")), w.permission === "granted" && w.subscribed && (d(), o.ui.hide("alert"))
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
      } catch (b) {
        console.log("batchSDK", b)
      }
    }, L)
  } catch (u) {
    console.error(`Error loading ${T}: ${u}`)
  }
})();