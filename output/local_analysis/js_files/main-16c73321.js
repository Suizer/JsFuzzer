(async function() {
  window.dataLayer = window.dataLayer || [];
  const _ = ["www.lidl.de", "www.lidl.sk", "localhost", "www.lidl.cz", "www.lidl.be", "www.lidl.fr", "www.lidl.nl", "www.lidl.pl"],
    k = ["/payments/"],
    E = async n => {
      const {
        accountId: e
      } = JSON.parse(atob(n));
      !e || await batchSDK(u => {
        u.setCustomUserID(`${e}`)
      })
    };

  function I(n) {
    let e = "";
    if (document.cookie && document.cookie !== "") {
      const u = document.cookie.split(";");
      for (let m = 0; m < u.length; m += 1) {
        const f = u[m].replace(/^\s+/, "")
          .replace(/\s+$/, "");
        if (f.substring(0, n.length + 1) === `${n}=`) {
          try {
            e = decodeURIComponent(f.substring(n.length + 1)
              .replace(/\+/g, " "))
          } catch (v) {
            console.log("decode err", v)
          }
          break
        }
      }
    }
    return e
  }
  const b = n => {
      const e = setInterval(() => {
        typeof batchSDK < "u" && (clearInterval(e), n && n())
      }, 500)
    },
    D = (n = 5, e = 500) => new Promise(u => {
      let m = 0;
      const f = I("tracking-info"),
        v = setInterval(() => {
          m++, (f || m > n) && (clearInterval(v), u(f || ""))
        }, e)
    }),
    P = n => {
      let e = "/static/assets/43ac4fa5-ffba-4193-b9d5-ffbfce8a1c09.svg";
      return n === "es" && (e = "/imgs/lidl-logo-svg.svg"), e
    },
    N = new RegExp(`(${_.join("|")})`),
    B = new RegExp(`(${k.join("|")})`),
    C = N.test(window.location.hostname),
    K = B.test(window.location.pathname),
    L = ["/c/newsletter-abmeldung"],
    O = 5e3,
    x = "t/cdn/tracking-components/web-push-sdk/domainSetup",
    w = window.mindShiftNav && window.mindShiftNav.topDomain ? window.mindShiftNav.topDomain : new URL(window.location.href)
    .hostname.split(".")
    .pop(),
    S = `${window.location.origin}/${x}/${w}.json`,
    g = await D();
  try {
    const n = await fetch(S);
    if (!n.ok) throw new Error(`Failed to fetch JSON (${n.status} ${n.statusText})`);
    const e = await n.json(),
      u = () => {
        const {
          pathname: c
        } = window.location, l = c.match(/(\/u\/|\/p\/|\/c\/|\/$)/), s = L.some(d => c.indexOf(d) !== -1);
        return l && !s
      },
      m = (c, l, s, d) => {
        const o = "batchSDK";
        c[o] = c[o] || function() {
          (c[o].q = c[o].q || [])
          .push(arguments)
        };
        const r = l.createElement(s),
          t = l.getElementsByTagName(s)[0];
        r.async = !0, r.src = d, t.parentNode.insertBefore(r, t)
      };
    if (!C || K) return;
    const f = sessionStorage.getItem("web-push-delay-init"),
      v = Date.now();
    let y = 1e4;
    f ? y = y - (Date.now() - f) : sessionStorage.setItem("web-push-delay-init", v + ""), m(window, document, "script", "https://via.batch.com/v3/bootstrap.min.js"), document.addEventListener("datalayerservice:ga4", c => {
      const {
        detail: l
      } = c, {
        event: s,
        ecommerce: d
      } = l;
      if (d && d.items && d.items.length) {
        const {
          item_name: o,
          item_id: r,
          price: t,
          item_category2: p,
          item_category: a
        } = d.items[0];
        s === "add_to_cart" && b(() => batchSDK(h => {
          h.trackEvent("add_to_cart", {
            attributes: {
              name: o,
              item_id: r,
              price: t,
              category: p || a
            }
          })
        })), s === "view_item" && b(() => batchSDK(h => {
          h.trackEvent("view_item", {
            attributes: {
              name: o,
              item_id: r,
              price: t,
              category: p || a
            }
          })
        }))
      }
      if (s === "remove_from_cart") {
        const {
          dataLayer: o
        } = window || [];
        if (o) {
          const r = o.find(t => t.event === "EECremoveFromCart");
          if (r) {
            const {
              ecommerce: t
            } = r;
            if (t && t.remove && t.remove.products) {
              const {
                products: p
              } = t.remove;
              b(() => batchSDK(a => {
                a.trackEvent("remove_from_cart", {
                  attributes: {
                    item_id: parseInt(p.id, 10)
                  }
                })
              }))
            }
          } else b(() => batchSDK(t => {
            t.trackEvent("remove_from_cart")
          }))
        }
      }
      s === "purchase" && b(() => batchSDK(o => {
        o.trackEvent("purchase")
      }))
    });
    const $ = window.mindShiftNav && window.mindShiftNav.locale ? window.mindShiftNav.locale : window.location.href.includes("/l/nl/") ? "nl-BE" : window.location.href.includes("/l/fr/") ? "fr-BE" : null;
    let i = {};
    switch ($) {
      case "fr-BE":
        i.acceptNotifications = e.fr_BE.acceptNotifications, i.declineNotifications = e.fr_BE.declineNotifications, i.popupText = e.fr_BE.popupText, i.label = e.fr_BE.privacyPolicy.label, i.link = e.fr_BE.privacyPolicy.link;
        break;
      case "nl-BE":
        i.acceptNotifications = e.nl_BE.acceptNotifications, i.declineNotifications = e.nl_BE.declineNotifications, i.popupText = e.nl_BE.popupText, i.label = e.nl_BE.privacyPolicy.label, i.link = e.nl_BE.privacyPolicy.link;
        break
    }
    setTimeout(() => {
      const c = {
        alert: {
          autoShow: !1,
          text: w === "be" ? i.popupText : e.popupText,
          positiveSubBtnLabel: w === "be" ? i.acceptNotifications : e.acceptNotifications,
          negativeBtnLabel: w === "be" ? i.declineNotifications : e.declineNotifications,
          icon: P(w),
          hideFor: 604800,
          extraBtn: {
            label: w === "be" ? i.label : e.privacyPolicy.label,
            link: w === "be" ? i.link : e.privacyPolicy.link
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
        const l = () => {
            window.dataLayer.push({
              event: "gaEvent",
              eventAction: "Opt_In Impression",
              eventCategory: "Web Push",
              eventLabel: "Opt_In message shown"
            })
          },
          s = () => {
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
        batchSDK(t => {
          t.on("uiReady", async p => {
            const a = await p.getSubscriptionState(),
              h = await p.getCustomUserID();
            !h && g ? E(g) : h && !g && t.setCustomUserID(null), a.permission === "default" && u() && setTimeout(() => {
              p.ui.show("alert"), l()
            }, O)
          }), t.on("subscriptionChanged", async p => {
            const a = await p.getSubscriptionState();
            a.permission === "denied" && s(), a.permission === "granted" && !a.subscribed && (d(), t.ui.hide("alert")), a.permission === "granted" && a.subscribed && (o(), t.ui.hide("alert"))
          })
        });
        const r = {
          apiKey: e.apiKey,
          subdomain: e.subdomain,
          authKey: e.authKey,
          dev: !1,
          vapidPublicKey: e.vapidPublicKey,
          ui: c,
          serviceWorkerPathOverride: "/t/gtm/web-push-sw",
          safari: {
            [`https://www.lidl.${w}`]: `web.${w}.lidl`
          }
        };
        batchSDK("setup", {
          ...r
        })
      } catch (l) {
        console.log("batchSDK", l)
      }
    }, y)
  } catch (n) {
    console.error(`Error loading ${S}: ${n}`)
  }
})();