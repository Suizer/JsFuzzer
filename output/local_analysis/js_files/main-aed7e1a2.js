const C = async a => {
  const {
    accountId: n
  } = JSON.parse(atob(a));
  !n || await batchSDK(f => {
    f.setCustomUserID(`${n}`)
  })
};

function L(a) {
  let n = "";
  if (document.cookie && document.cookie !== "") {
    const f = document.cookie.split(";");
    for (let m = 0; m < f.length; m += 1) {
      const h = f[m].replace(/^\s+/, "")
        .replace(/\s+$/, "");
      if (h.substring(0, a.length + 1) === `${a}=`) {
        try {
          n = decodeURIComponent(h.substring(a.length + 1)
            .replace(/\+/g, " "))
        } catch (g) {
          console.log("decode err", g)
        }
        break
      }
    }
  }
  return n
}
const y = a => {
    const n = setInterval(() => {
      typeof batchSDK < "u" && (clearInterval(n), a && a())
    }, 500)
  },
  P = (a = 5, n = 500) => new Promise(f => {
    let m = 0;
    const h = L("tracking-info"),
      g = setInterval(() => {
        m++, (h || m > a) && (clearInterval(g), f(h || ""))
      }, n)
  }),
  K = a => {
    let n = "/static/assets/43ac4fa5-ffba-4193-b9d5-ffbfce8a1c09.svg";
    return a === "es" && (n = "/imgs/lidl-logo-svg.svg"), n
  };
(async function() {
  window.dataLayer = window.dataLayer || [];
  const n = ["www.lidl.de", "www.lidl.sk", "localhost", "www.lidl.cz", "www.lidl.be", "www.lidl.fr", "www.lidl.nl", "www.lidl.pl"].join("|"),
    f = window.location.href.match(new RegExp(`(${n})`)),
    m = ["/c/newsletter-abmeldung"],
    h = 5e3,
    g = "t/cdn/tracking-components/web-push-sdk/domainSetup",
    u = window.mindShiftNav && window.mindShiftNav.topDomain ? window.mindShiftNav.topDomain : new URL(window.location.href)
    .hostname.split(".")
    .pop(),
    k = `${window.location.origin}/${g}/${u}.json`,
    S = await P();
  try {
    const b = await fetch(k);
    if (!b.ok) throw new Error(`Failed to fetch JSON (${b.status} ${b.statusText})`);
    const t = await b.json(),
      E = () => {
        const {
          pathname: s
        } = window.location, d = s.match(/(\/u\/|\/p\/|\/c\/|\/$)/), r = m.some(p => s.indexOf(p) !== -1);
        return d && !r
      },
      D = (s, d, r, p) => {
        const o = "batchSDK";
        s[o] = s[o] || function() {
          (s[o].q = s[o].q || [])
          .push(arguments)
        };
        const l = d.createElement(r),
          e = d.getElementsByTagName(r)[0];
        l.async = !0, l.src = p, e.parentNode.insertBefore(l, e)
      };
    if (!f) return;
    const I = sessionStorage.getItem("web-push-delay-init"),
      N = Date.now();
    let _ = 1e4;
    I ? _ = _ - (Date.now() - I) : sessionStorage.setItem("web-push-delay-init", N + ""), D(window, document, "script", "https://via.batch.com/v3/bootstrap.min.js"), document.addEventListener("datalayerservice:ga4", s => {
      const {
        detail: d
      } = s, {
        event: r,
        ecommerce: p
      } = d;
      if (p && p.items && p.items.length) {
        const {
          item_name: o,
          item_id: l,
          price: e,
          item_category2: w,
          item_category: c
        } = p.items[0];
        r === "add_to_cart" && y(() => batchSDK(v => {
          v.trackEvent("add_to_cart", {
            attributes: {
              name: o,
              item_id: l,
              price: e,
              category: w || c
            }
          })
        })), r === "view_item" && y(() => batchSDK(v => {
          v.trackEvent("view_item", {
            attributes: {
              name: o,
              item_id: l,
              price: e,
              category: w || c
            }
          })
        }))
      }
      if (r === "remove_from_cart") {
        const {
          dataLayer: o
        } = window || [];
        if (o) {
          const l = o.find(e => e.event === "EECremoveFromCart");
          if (l) {
            const {
              ecommerce: e
            } = l;
            if (e && e.remove && e.remove.products) {
              const {
                products: w
              } = e.remove;
              y(() => batchSDK(c => {
                c.trackEvent("remove_from_cart", {
                  attributes: {
                    item_id: parseInt(w.id, 10)
                  }
                })
              }))
            }
          } else y(() => batchSDK(e => {
            e.trackEvent("remove_from_cart")
          }))
        }
      }
      r === "purchase" && y(() => batchSDK(o => {
        o.trackEvent("purchase")
      }))
    });
    const B = window.mindShiftNav && window.mindShiftNav.locale ? window.mindShiftNav.locale : window.location.href.includes("/l/nl/") ? "nl-BE" : window.location.href.includes("/l/fr/") ? "fr-BE" : null;
    let i = {};
    switch (B) {
      case "fr-BE":
        i.acceptNotifications = t.fr_BE.acceptNotifications, i.declineNotifications = t.fr_BE.declineNotifications, i.popupText = t.fr_BE.popupText, i.label = t.fr_BE.privacyPolicy.label, i.link = t.fr_BE.privacyPolicy.link;
        break;
      case "nl-BE":
        i.acceptNotifications = t.nl_BE.acceptNotifications, i.declineNotifications = t.nl_BE.declineNotifications, i.popupText = t.nl_BE.popupText, i.label = t.nl_BE.privacyPolicy.label, i.link = t.nl_BE.privacyPolicy.link;
        break
    }
    setTimeout(() => {
      const s = {
        alert: {
          autoShow: !1,
          text: u === "be" ? i.popupText : t.popupText,
          positiveSubBtnLabel: u === "be" ? i.acceptNotifications : t.acceptNotifications,
          negativeBtnLabel: u === "be" ? i.declineNotifications : t.declineNotifications,
          icon: K(u),
          hideFor: 604800,
          extraBtn: {
            label: u === "be" ? i.label : t.privacyPolicy.label,
            link: u === "be" ? i.link : t.privacyPolicy.link
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
        const d = () => {
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
          p = () => {
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
        batchSDK(e => {
          e.on("uiReady", async w => {
            const c = await w.getSubscriptionState(),
              v = await w.getCustomUserID();
            !v && S ? C(S) : v && !S && e.setCustomUserID(null), c.permission === "default" && E() && setTimeout(() => {
              w.ui.show("alert"), d()
            }, h)
          }), e.on("subscriptionChanged", async w => {
            const c = await w.getSubscriptionState();
            c.permission === "denied" && r(), c.permission === "granted" && !c.subscribed && (p(), e.ui.hide("alert")), c.permission === "granted" && c.subscribed && (o(), e.ui.hide("alert"))
          })
        });
        const l = {
          apiKey: t.apiKey,
          subdomain: t.subdomain,
          authKey: t.authKey,
          dev: !1,
          vapidPublicKey: t.vapidPublicKey,
          ui: s,
          serviceWorkerPathOverride: "/t/gtm/web-push-sw",
          safari: {
            [`https://www.lidl.${u}`]: `web.${u}.lidl`
          }
        };
        batchSDK("setup", {
          ...l
        })
      } catch (d) {
        console.log("batchSDK", d)
      }
    }, _)
  } catch (b) {
    console.error(`Error loading ${k}: ${b}`)
  }
})();