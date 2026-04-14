const C = {
  statistics: "C0003",
  preferences: "C0002",
  marketing: "C0004"
};
class d {
  static getCookieValue(e) {
    var l;
    const s = "(^|;) ?" + e + "=([^;]*)(;|$)";
    try {
      const a = (l = document == null ? void 0 : document.cookie) == null ? void 0 : l.match(s),
        n = a && a[2];
      return n || ""
    } catch {
      return ""
    }
  }
  static getCookieBotConsentCookie() {
    const e = "CookieConsent";
    try {
      const s = d.getCookieValue(e);
      if (!s) return null;
      const a = decodeURIComponent(s)
        .replace(/%2c/g, ",")
        .replace(/'/g, '"')
        .replace(/([{\[,])\s*([a-zA-Z0-9_]+?):/g, '$1"$2":'),
        n = JSON.parse(a);
      return n.hasOwnProperty("marketing") && n.hasOwnProperty("statistics") && n.hasOwnProperty("preferences") ? n : null
    } catch {
      return null
    }
  }
  static getOneTrustConsentCookie() {
    const e = "OptanonConsent";
    try {
      const s = d.getCookieValue(e);
      if (!s) return null;
      const a = decodeURIComponent(s)
        .split("&")
        .reduce((i, S) => {
          const [f, k] = S.split("=");
          return i[f] = k, i
        }, {}),
        {
          groups: n
        } = a;
      return n ? {
        marketing: n.includes(`${C.marketing}:1`),
        statistics: n.includes(`${C.statistics}:1`),
        preferences: n.includes(`${C.preferences}:1`)
      } : null
    } catch {
      return null
    }
  }
  static getConsentCookie() {
    const e = d.getCookieBotConsentCookie();
    return d.getOneTrustConsentCookie() || e
  }
  static getWindowsConsent() {
    var l, a, n, i, S;
    const e = (l = window == null ? void 0 : window.Cookiebot) == null ? void 0 : l.hasResponse;
    return d.OneTrustResponse() ? {
      marketing: (a = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : a.includes(C.marketing),
      statistics: (n = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : n.includes(C.statistics),
      preferences: (i = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : i.includes(C.preferences)
    } : e ? (S = window == null ? void 0 : window.Cookiebot) == null ? void 0 : S.consent : null
  }
  static OneTrustResponse() {
    var e;
    return (window == null ? void 0 : window.OneTrust) && (window == null ? void 0 : window.OneTrust) instanceof HTMLElement ? null : (e = window == null ? void 0 : window.OneTrust) == null ? void 0 : e.IsAlertBoxClosedAndValid()
  }
  static onConsent() {
    return new Promise(e => {
      var v;
      const s = d.getConsentCookie(),
        a = d.getWindowsConsent() || s;
      if ((d.OneTrustResponse() || ((v = window == null ? void 0 : window.Cookiebot) == null ? void 0 : v.hasResponse)) && a) {
        e(a);
        return
      }
      let n, i = 0;
      const S = 300,
        f = () => {
          var t, I, E, y;
          clearTimeout(n), window.removeEventListener("CookieConsentLoad", f), d.OneTrustResponse() ? e({
            marketing: (t = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : t.includes(C.marketing),
            statistics: (I = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : I.includes(C.statistics),
            preferences: (E = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : E.includes(C.preferences)
          }) : e((y = window == null ? void 0 : window.Cookiebot) == null ? void 0 : y.consent)
        },
        k = () => {
          var I, E, y, L;
          if (!(d.OneTrustResponse() || ((I = window == null ? void 0 : window.Cookiebot) == null ? void 0 : I.hasResponse)) && i < S) {
            i++, n = setTimeout(k, 1e3);
            return
          }
          if (d.OneTrustResponse() || ((E = window == null ? void 0 : window.Cookiebot) == null ? void 0 : E.hasResponse)) {
            f();
            return
          }
          if (d.OneTrustResponse() === !1 && ((y = window == null ? void 0 : window.OneTrust) == null || y.OnConsentChanged(() => f())), ((L = window == null ? void 0 : window.Cookiebot) == null ? void 0 : L.hasResponse) === !1) {
            window.addEventListener("CookiebotOnLoad", f);
            return
          }
          f()
        };
      k()
    })
  }
  static async getNecessaryUUID4CookieIfNotPresent() {
    ["lidl.de", "lidl.fr"].includes(window.location.hostname.slice(window.location.hostname.indexOf(".") + 1)) && await fetch("/t/gtm/uuid4-cookie")
  }
}
const P = async O => {
  const {
    accountId: e
  } = JSON.parse(atob(O));
  !e || await batchSDK(s => {
    s.setCustomUserID(`${e}`)
  })
}, D = O => {
  const e = setInterval(() => {
    typeof batchSDK < "u" && (clearInterval(e), O && O())
  }, 500)
}, R = (O = 5, e = 500) => new Promise(s => {
  let l = 0;
  const a = d.getCookieValue("tracking-info"),
    n = setInterval(() => {
      l++, (a || l > O) && (clearInterval(n), s(a || ""))
    }, e)
});
(async function() {
  window.dataLayer = window.dataLayer || [];
  const e = ["www.lidl.de", "www.lidl.sk", "localhost", "www.lidl.cz", "www.lidl.be", "www.lidl.fr", "www.lidl.nl", "www.lidl.pl", "www.lidl.sk"].join("|"),
    s = window.location.href.match(new RegExp(`(${e})`)),
    l = ["/c/newsletter-abmeldung"],
    a = 5e3,
    n = "t/cdn/tracking-components/web-push-sdk/domainSetup",
    i = window.mindShiftNav && window.mindShiftNav.topDomain ? window.mindShiftNav.topDomain : new URL(window.location.href)
    .hostname.split(".")
    .pop(),
    f = `${window.location.origin}/${n}/${i}.json`,
    k = await R();
  try {
    const v = await fetch(f);
    if (!v.ok) throw new Error(`Failed to fetch JSON (${v.status} ${v.statusText})`);
    const t = await v.json(),
      I = () => {
        const {
          pathname: w
        } = window.location, h = w.match(/(\/u\/|\/p\/|\/c\/|\/$)/), p = l.some(b => w.indexOf(b) !== -1);
        return h && !p
      },
      E = (w, h, p, b) => {
        const r = "batchSDK";
        w[r] = w[r] || function() {
          (w[r].q = w[r].q || [])
          .push(arguments)
        };
        const m = h.createElement(p),
          o = h.getElementsByTagName(p)[0];
        m.async = !0, m.src = b, o.parentNode.insertBefore(m, o)
      };
    if (!s) return;
    const y = sessionStorage.getItem("web-push-delay-init"),
      L = Date.now();
    let N = 1e4;
    y ? N = N - (Date.now() - y) : sessionStorage.setItem("web-push-delay-init", L + ""), E(window, document, "script", "https://via.batch.com/v3/bootstrap.min.js"), document.addEventListener("datalayerservice:ga4", w => {
      const {
        detail: h
      } = w, {
        event: p,
        ecommerce: b
      } = h;
      if (b && b.items && b.items.length) {
        const {
          item_name: r,
          item_id: m,
          price: o,
          item_category2: g,
          item_category: u
        } = b.items[0];
        p === "add_to_cart" && D(() => batchSDK(T => {
          T.trackEvent("add_to_cart", {
            attributes: {
              name: r,
              item_id: m,
              price: o,
              category: g || u
            }
          })
        })), p === "view_item" && D(() => batchSDK(T => {
          T.trackEvent("view_item", {
            attributes: {
              name: r,
              item_id: m,
              price: o,
              category: g || u
            }
          })
        }))
      }
      if (p === "remove_from_cart") {
        const {
          dataLayer: r
        } = window || [];
        if (r) {
          const m = r.find(o => o.event === "EECremoveFromCart");
          if (m) {
            const {
              ecommerce: o
            } = m;
            if (o && o.remove && o.remove.products) {
              const {
                products: g
              } = o.remove;
              D(() => batchSDK(u => {
                u.trackEvent("remove_from_cart", {
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
      p === "purchase" && D(() => batchSDK(r => {
        r.trackEvent("purchase")
      }))
    });
    const _ = window.mindShiftNav && window.mindShiftNav.locale ? window.mindShiftNav.locale : window.location.href.includes("/l/nl/") ? "nl-BE" : window.location.href.includes("/l/fr/") ? "fr-BE" : null;
    let c = {};
    switch (_) {
      case "fr-BE":
        c.acceptNotifications = t.fr_BE.acceptNotifications, c.declineNotifications = t.fr_BE.declineNotifications, c.popupText = t.fr_BE.popupText, c.label = t.fr_BE.privacyPolicy.label, c.link = t.fr_BE.privacyPolicy.link;
        break;
      case "nl-BE":
        c.acceptNotifications = t.nl_BE.acceptNotifications, c.declineNotifications = t.nl_BE.declineNotifications, c.popupText = t.nl_BE.popupText, c.label = t.nl_BE.privacyPolicy.label, c.link = t.nl_BE.privacyPolicy.link;
        break
    }
    setTimeout(() => {
      const w = {
        alert: {
          autoShow: !1,
          text: i === "be" ? c.popupText : t.popupText,
          positiveSubBtnLabel: i === "be" ? c.acceptNotifications : t.acceptNotifications,
          negativeBtnLabel: i === "be" ? c.declineNotifications : t.declineNotifications,
          icon: t.iconURL,
          hideFor: 604800,
          extraBtn: {
            label: i === "be" ? c.label : t.privacyPolicy.label,
            link: i === "be" ? c.link : t.privacyPolicy.link
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
        const h = () => {
            window.dataLayer.push({
              event: "gaEvent",
              eventAction: "Opt_In Impression",
              eventCategory: "Web Push",
              eventLabel: "Opt_In message shown"
            })
          },
          p = () => {
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
          r = () => {
            window.dataLayer.push({
              event: "gaEvent",
              eventCategory: "Web Push",
              eventAction: "Opt_In Click",
              eventLabel: "Opt_In subscribed"
            })
          };
        batchSDK(o => {
          o.on("uiReady", async g => {
            const u = await g.getSubscriptionState(),
              T = await g.getCustomUserID();
            !T && k ? P(k) : T && !k && o.setCustomUserID(null), u.permission === "default" && I() && setTimeout(() => {
              g.ui.show("alert"), h()
            }, a)
          }), o.on("subscriptionChanged", async g => {
            const u = await g.getSubscriptionState();
            u.permission === "denied" && p(), u.permission === "granted" && !u.subscribed && (b(), o.ui.hide("alert")), u.permission === "granted" && u.subscribed && (r(), o.ui.hide("alert"))
          })
        });
        const m = {
          apiKey: t.apiKey,
          subdomain: t.subdomain,
          authKey: t.authKey,
          dev: !1,
          vapidPublicKey: t.vapidPublicKey,
          ui: w,
          serviceWorkerPathOverride: "/t/gtm/web-push-sw",
          safari: {
            [`https://www.lidl.${i}`]: `web.${i}.lidl`
          }
        };
        batchSDK("setup", {
          ...m
        })
      } catch (h) {
        console.log("batchSDK", h)
      }
    }, N)
  } catch (v) {
    console.error(`Error loading ${f}: ${v}`)
  }
})();