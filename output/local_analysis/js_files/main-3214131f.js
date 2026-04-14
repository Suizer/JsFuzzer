var K = Object.defineProperty;
var $ = (n, e, t) => e in n ? K(n, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : n[e] = t;
var D = (n, e, t) => ($(n, typeof e != "symbol" ? e + "" : e, t), t);

function S(n) {
  let e = "";
  if (document.cookie && document.cookie !== "") {
    const t = document.cookie.split(";");
    for (let o = 0; o < t.length; o += 1) {
      const a = t[o].replace(/^\s+/, "")
        .replace(/\s+$/, "");
      if (a.substring(0, n.length + 1) === `${n}=`) {
        try {
          e = decodeURIComponent(a.substring(n.length + 1)
            .replace(/\+/g, " "))
        } catch (w) {
          console.log("decode err", w)
        }
        break
      }
    }
  }
  return e
}
const _ = {
  statistics: "C0003",
  preferences: "C0002",
  marketing: "C0004"
};
class E {
  static getOneTrustConsentCookie() {
    const e = "OptanonConsent";
    try {
      const t = S(e);
      if (!t) return null;
      const a = decodeURIComponent(t)
        .split("&")
        .reduce((l, L) => {
          const [k, C] = L.split("=");
          return l[k] = C, l
        }, {}),
        {
          groups: w
        } = a;
      return w ? {
        marketing: w.includes(`${_.marketing}:1`),
        statistics: w.includes(`${_.statistics}:1`),
        preferences: w.includes(`${_.preferences}:1`)
      } : null
    } catch {
      return null
    }
  }
  static getLidlConsentCookie() {
    var t;
    const e = S("LidlConsent") || S("lidl-consent");
    if (!e) return null;
    try {
      const o = (t = e.split("&")
        .find(a => a.startsWith("groups="))) == null ? void 0 : t.split("=")[1];
      return o ? {
        marketing: o.includes("C0004:1"),
        statistics: o.includes("C0003:1"),
        preferences: o.includes("C0002:1"),
        necessary: !0
      } : null
    } catch {
      return null
    }
  }
  static initializeConsentListener() {
    this.getConsentCookie() && this.notifyConsentListeners();
    const t = () => {
      window.OneTrust.OnConsentChanged(() => {
        this.notifyConsentListeners()
      })
    };
    if (typeof window.OneTrust < "u" && window.OneTrust.OnConsentChanged) t();
    else {
      const o = setInterval(() => {
        typeof window.OneTrust < "u" && window.OneTrust.OnConsentChanged && (clearInterval(o), t())
      }, 1e3);
      setTimeout(() => {
        clearInterval(o), console.warn("OneTrust not loaded after timeout. Consent changes may not be tracked.")
      }, 3e4)
    }
  }
  static getConsentCookie() {
    const e = this.getLidlConsentCookie();
    return e || this.getOneTrustConsentCookie() || {
      marketing: !1,
      statistics: !1,
      preferences: !1
    }
  }
  static onConsentChanged(e) {
    this.consentListeners.push(e), e(this.getConsentCookie())
  }
  static notifyConsentListeners() {
    const e = this.getConsentCookie();
    this.consentListeners.forEach(t => t(e))
  }
  static async getNecessaryUUID4CookieIfNotPresent(e) {
    const o = window.location.hostname.includes("lidl.es");
    let a = "";
    o ? a = e ? `/t/gtm/uuid4-cookie?puuidv=${encodeURIComponent(e)}` : "/t/gtm/uuid4-cookie" : a = e ? `/t/p/uuid4-cookie?puuidv=${encodeURIComponent(e)}` : "/t/p/uuid4-cookie", await fetch(a)
  }
}
D(E, "consentListeners", []);
E.initializeConsentListener();
const U = async n => {
  const {
    accountId: e
  } = JSON.parse(atob(n));
  !e || await batchSDK(t => {
    t.setCustomUserID(`${e}`)
  })
}, y = n => {
  const e = setInterval(() => {
    typeof batchSDK < "u" && (clearInterval(e), n && n())
  }, 500)
}, x = (n = 5, e = 500) => new Promise(t => {
  let o = 0;
  const a = E.getCookieValue("tracking-info"),
    w = setInterval(() => {
      o++, (a || o > n) && (clearInterval(w), t(a || ""))
    }, e)
}), R = n => {
  let e = "/static/assets/43ac4fa5-ffba-4193-b9d5-ffbfce8a1c09.svg";
  return n === "es" && (e = "/imgs/lidl-logo-svg.svg"), e
};
(async function() {
  window.dataLayer = window.dataLayer || [];
  const e = ["www.lidl.de", "www.lidl.sk", "localhost", "www.lidl.cz", "www.lidl.be", "www.lidl.fr", "www.lidl.nl", "www.lidl.pl"].join("|"),
    t = window.location.href.match(new RegExp(`(${e})`)),
    o = ["/c/newsletter-abmeldung"],
    a = 5e3,
    w = "t/cdn/tracking-components/web-push-sdk/domainSetup",
    l = window.mindShiftNav && window.mindShiftNav.topDomain ? window.mindShiftNav.topDomain : new URL(window.location.href)
    .hostname.split(".")
    .pop(),
    k = `${window.location.origin}/${w}/${l}.json`,
    C = await x();
  try {
    const v = await fetch(k);
    if (!v.ok) throw new Error(`Failed to fetch JSON (${v.status} ${v.statusText})`);
    const s = await v.json(),
      N = () => {
        const {
          pathname: u
        } = window.location, m = u.match(/(\/u\/|\/p\/|\/c\/|\/$)/), p = o.some(h => u.indexOf(h) !== -1);
        return m && !p
      },
      T = (u, m, p, h) => {
        const r = "batchSDK";
        u[r] = u[r] || function() {
          (u[r].q = u[r].q || [])
          .push(arguments)
        };
        const f = m.createElement(p),
          i = m.getElementsByTagName(p)[0];
        f.async = !0, f.src = h, i.parentNode.insertBefore(f, i)
      };
    if (!t) return;
    const O = sessionStorage.getItem("web-push-delay-init"),
      B = Date.now();
    let I = 1e4;
    O ? I = I - (Date.now() - O) : sessionStorage.setItem("web-push-delay-init", B + ""), T(window, document, "script", "https://via.batch.com/v3/bootstrap.min.js"), document.addEventListener("datalayerservice:ga4", u => {
      const {
        detail: m
      } = u, {
        event: p,
        ecommerce: h
      } = m;
      if (h && h.items && h.items.length) {
        const {
          item_name: r,
          item_id: f,
          price: i,
          item_category2: g,
          item_category: d
        } = h.items[0];
        p === "add_to_cart" && y(() => batchSDK(b => {
          b.trackEvent("add_to_cart", {
            attributes: {
              name: r,
              item_id: f,
              price: i,
              category: g || d
            }
          })
        })), p === "view_item" && y(() => batchSDK(b => {
          b.trackEvent("view_item", {
            attributes: {
              name: r,
              item_id: f,
              price: i,
              category: g || d
            }
          })
        }))
      }
      if (p === "remove_from_cart") {
        const {
          dataLayer: r
        } = window || [];
        if (r) {
          const f = r.find(i => i.event === "EECremoveFromCart");
          if (f) {
            const {
              ecommerce: i
            } = f;
            if (i && i.remove && i.remove.products) {
              const {
                products: g
              } = i.remove;
              y(() => batchSDK(d => {
                d.trackEvent("remove_from_cart", {
                  attributes: {
                    item_id: parseInt(g.id, 10)
                  }
                })
              }))
            }
          } else y(() => batchSDK(i => {
            i.trackEvent("remove_from_cart")
          }))
        }
      }
      p === "purchase" && y(() => batchSDK(r => {
        r.trackEvent("purchase")
      }))
    });
    const P = window.mindShiftNav && window.mindShiftNav.locale ? window.mindShiftNav.locale : window.location.href.includes("/l/nl/") ? "nl-BE" : window.location.href.includes("/l/fr/") ? "fr-BE" : null;
    let c = {};
    switch (P) {
      case "fr-BE":
        c.acceptNotifications = s.fr_BE.acceptNotifications, c.declineNotifications = s.fr_BE.declineNotifications, c.popupText = s.fr_BE.popupText, c.label = s.fr_BE.privacyPolicy.label, c.link = s.fr_BE.privacyPolicy.link;
        break;
      case "nl-BE":
        c.acceptNotifications = s.nl_BE.acceptNotifications, c.declineNotifications = s.nl_BE.declineNotifications, c.popupText = s.nl_BE.popupText, c.label = s.nl_BE.privacyPolicy.label, c.link = s.nl_BE.privacyPolicy.link;
        break
    }
    setTimeout(() => {
      const u = {
        alert: {
          autoShow: !1,
          text: l === "be" ? c.popupText : s.popupText,
          positiveSubBtnLabel: l === "be" ? c.acceptNotifications : s.acceptNotifications,
          negativeBtnLabel: l === "be" ? c.declineNotifications : s.declineNotifications,
          icon: R(l),
          hideFor: 604800,
          extraBtn: {
            label: l === "be" ? c.label : s.privacyPolicy.label,
            link: l === "be" ? c.link : s.privacyPolicy.link
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
        const m = () => {
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
          h = () => {
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
        batchSDK(i => {
          i.on("uiReady", async g => {
            const d = await g.getSubscriptionState(),
              b = await g.getCustomUserID();
            !b && C ? U(C) : b && !C && i.setCustomUserID(null), d.permission === "default" && N() && setTimeout(() => {
              g.ui.show("alert"), m()
            }, a)
          }), i.on("subscriptionChanged", async g => {
            const d = await g.getSubscriptionState();
            d.permission === "denied" && p(), d.permission === "granted" && !d.subscribed && (h(), i.ui.hide("alert")), d.permission === "granted" && d.subscribed && (r(), i.ui.hide("alert"))
          })
        });
        const f = {
          apiKey: s.apiKey,
          subdomain: s.subdomain,
          authKey: s.authKey,
          dev: !1,
          vapidPublicKey: s.vapidPublicKey,
          ui: u,
          serviceWorkerPathOverride: "/t/gtm/web-push-sw",
          safari: {
            [`https://www.lidl.${l}`]: `web.${l}.lidl`
          }
        };
        batchSDK("setup", {
          ...f
        })
      } catch (m) {
        console.log("batchSDK", m)
      }
    }, I)
  } catch (v) {
    console.error(`Error loading ${k}: ${v}`)
  }
})();