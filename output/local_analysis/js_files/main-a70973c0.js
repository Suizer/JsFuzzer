const k = {
  statistics: "C0003",
  preferences: "C0002",
  marketing: "C0004"
};
class l {
  static getCookieValue(e) {
    var d;
    const s = "(^|;) ?" + e + "=([^;]*)(;|$)";
    try {
      const a = (d = document == null ? void 0 : document.cookie) == null ? void 0 : d.match(s),
        n = a && a[2];
      return n || ""
    } catch {
      return ""
    }
  }
  static getCookieBotConsentCookie() {
    const e = "CookieConsent";
    try {
      const s = l.getCookieValue(e);
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
      const s = l.getCookieValue(e);
      if (!s) return null;
      const a = decodeURIComponent(s)
        .split("&")
        .reduce((i, I) => {
          const [m, y] = I.split("=");
          return i[m] = y, i
        }, {}),
        {
          groups: n
        } = a;
      return n ? {
        marketing: n.includes(`${k.marketing}:1`),
        statistics: n.includes(`${k.statistics}:1`),
        preferences: n.includes(`${k.preferences}:1`)
      } : null
    } catch {
      return null
    }
  }
  static getConsentCookie() {
    const e = l.getCookieBotConsentCookie();
    return l.getOneTrustConsentCookie() || e
  }
  static getWindowsConsent() {
    var d, a, n, i, I;
    const e = (d = window == null ? void 0 : window.Cookiebot) == null ? void 0 : d.hasResponse;
    return l.OneTrustResponse() ? {
      marketing: (a = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : a.includes(k.marketing),
      statistics: (n = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : n.includes(k.statistics),
      preferences: (i = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : i.includes(k.preferences)
    } : e ? (I = window == null ? void 0 : window.Cookiebot) == null ? void 0 : I.consent : null
  }
  static OneTrustResponse() {
    var e;
    return (window == null ? void 0 : window.OneTrust) && (window == null ? void 0 : window.OneTrust) instanceof HTMLElement ? null : (e = window == null ? void 0 : window.OneTrust) == null ? void 0 : e.IsAlertBoxClosedAndValid()
  }
  static onConsent() {
    return new Promise(e => {
      var C;
      const s = l.getConsentCookie(),
        a = l.getWindowsConsent() || s;
      if ((l.OneTrustResponse() || ((C = window == null ? void 0 : window.Cookiebot) == null ? void 0 : C.hasResponse)) && a) {
        e(a);
        return
      }
      let n, i = 0;
      const I = 300,
        m = () => {
          var t, S, E, O;
          clearTimeout(n), window.removeEventListener("CookieConsentLoad", m), l.OneTrustResponse() ? e({
            marketing: (t = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : t.includes(k.marketing),
            statistics: (S = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : S.includes(k.statistics),
            preferences: (E = window == null ? void 0 : window.OnetrustActiveGroups) == null ? void 0 : E.includes(k.preferences)
          }) : e((O = window == null ? void 0 : window.Cookiebot) == null ? void 0 : O.consent)
        },
        y = () => {
          var S, E, O, L;
          if (!(l.OneTrustResponse() || ((S = window == null ? void 0 : window.Cookiebot) == null ? void 0 : S.hasResponse)) && i < I) {
            i++, n = setTimeout(y, 1e3);
            return
          }
          if (l.OneTrustResponse() || ((E = window == null ? void 0 : window.Cookiebot) == null ? void 0 : E.hasResponse)) {
            m();
            return
          }
          if (l.OneTrustResponse() === !1 && ((O = window == null ? void 0 : window.OneTrust) == null || O.OnConsentChanged(() => m())), ((L = window == null ? void 0 : window.Cookiebot) == null ? void 0 : L.hasResponse) === !1) {
            window.addEventListener("CookiebotOnLoad", m);
            return
          }
          m()
        };
      y()
    })
  }
  static async getNecessaryUUID4CookieIfNotPresent() {
    ["lidl.de", "lidl.fr"].includes(window.location.hostname.slice(window.location.hostname.indexOf(".") + 1)) && await fetch("/t/gtm/uuid4-cookie")
  }
}
const P = async v => {
  const {
    accountId: e
  } = JSON.parse(atob(v));
  !e || await batchSDK(s => {
    s.setCustomUserID(`${e}`)
  })
}, D = v => {
  const e = setInterval(() => {
    typeof batchSDK < "u" && (clearInterval(e), v && v())
  }, 500)
}, R = (v = 5, e = 500) => new Promise(s => {
  let d = 0;
  const a = l.getCookieValue("tracking-info"),
    n = setInterval(() => {
      d++, (a || d > v) && (clearInterval(n), s(a || ""))
    }, e)
}), K = v => {
  let e = "/static/assets/43ac4fa5-ffba-4193-b9d5-ffbfce8a1c09.svg";
  return v === "es" && (e = "/imgs/lidl-logo-svg.svg"), e
};
(async function() {
  window.dataLayer = window.dataLayer || [];
  const e = ["www.lidl.de", "www.lidl.sk", "localhost", "www.lidl.cz", "www.lidl.be", "www.lidl.fr", "www.lidl.nl", "www.lidl.pl", "www.lidl.sk"].join("|"),
    s = window.location.href.match(new RegExp(`(${e})`)),
    d = ["/c/newsletter-abmeldung"],
    a = 5e3,
    n = "t/cdn/tracking-components/web-push-sdk/domainSetup",
    i = window.mindShiftNav && window.mindShiftNav.topDomain ? window.mindShiftNav.topDomain : new URL(window.location.href)
    .hostname.split(".")
    .pop(),
    m = `${window.location.origin}/${n}/${i}.json`,
    y = await R();
  try {
    const C = await fetch(m);
    if (!C.ok) throw new Error(`Failed to fetch JSON (${C.status} ${C.statusText})`);
    const t = await C.json(),
      S = () => {
        const {
          pathname: w
        } = window.location, h = w.match(/(\/u\/|\/p\/|\/c\/|\/$)/), p = d.some(g => w.indexOf(g) !== -1);
        return h && !p
      },
      E = (w, h, p, g) => {
        const r = "batchSDK";
        w[r] = w[r] || function() {
          (w[r].q = w[r].q || [])
          .push(arguments)
        };
        const f = h.createElement(p),
          o = h.getElementsByTagName(p)[0];
        f.async = !0, f.src = g, o.parentNode.insertBefore(f, o)
      };
    if (!s) return;
    const O = sessionStorage.getItem("web-push-delay-init"),
      L = Date.now();
    let N = 1e4;
    O ? N = N - (Date.now() - O) : sessionStorage.setItem("web-push-delay-init", L + ""), E(window, document, "script", "https://via.batch.com/v3/bootstrap.min.js"), document.addEventListener("datalayerservice:ga4", w => {
      const {
        detail: h
      } = w, {
        event: p,
        ecommerce: g
      } = h;
      if (g && g.items && g.items.length) {
        const {
          item_name: r,
          item_id: f,
          price: o,
          item_category2: b,
          item_category: u
        } = g.items[0];
        p === "add_to_cart" && D(() => batchSDK(T => {
          T.trackEvent("add_to_cart", {
            attributes: {
              name: r,
              item_id: f,
              price: o,
              category: b || u
            }
          })
        })), p === "view_item" && D(() => batchSDK(T => {
          T.trackEvent("view_item", {
            attributes: {
              name: r,
              item_id: f,
              price: o,
              category: b || u
            }
          })
        }))
      }
      if (p === "remove_from_cart") {
        const {
          dataLayer: r
        } = window || [];
        if (r) {
          const f = r.find(o => o.event === "EECremoveFromCart");
          if (f) {
            const {
              ecommerce: o
            } = f;
            if (o && o.remove && o.remove.products) {
              const {
                products: b
              } = o.remove;
              D(() => batchSDK(u => {
                u.trackEvent("remove_from_cart", {
                  attributes: {
                    item_id: parseInt(b.id, 10)
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
          icon: K(i),
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
          g = () => {
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
          o.on("uiReady", async b => {
            const u = await b.getSubscriptionState(),
              T = await b.getCustomUserID();
            !T && y ? P(y) : T && !y && o.setCustomUserID(null), u.permission === "default" && S() && setTimeout(() => {
              b.ui.show("alert"), h()
            }, a)
          }), o.on("subscriptionChanged", async b => {
            const u = await b.getSubscriptionState();
            u.permission === "denied" && p(), u.permission === "granted" && !u.subscribed && (g(), o.ui.hide("alert")), u.permission === "granted" && u.subscribed && (r(), o.ui.hide("alert"))
          })
        });
        const f = {
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
          ...f
        })
      } catch (h) {
        console.log("batchSDK", h)
      }
    }, N)
  } catch (C) {
    console.error(`Error loading ${m}: ${C}`)
  }
})();