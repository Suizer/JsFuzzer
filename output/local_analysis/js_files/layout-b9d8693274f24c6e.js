(self.webpackChunk_N_E = self.webpackChunk_N_E || [])
.push([
  [1203], {
    1654: function(e, t, n) {
      Promise.resolve()
        .then(n.bind(n, 6456)), Promise.resolve()
        .then(n.bind(n, 8842)), Promise.resolve()
        .then(n.bind(n, 9793)), Promise.resolve()
        .then(n.t.bind(n, 5878, 23)), Promise.resolve()
        .then(n.t.bind(n, 500, 23)), Promise.resolve()
        .then(n.bind(n, 1523)), Promise.resolve()
        .then(n.bind(n, 49)), Promise.resolve()
        .then(n.t.bind(n, 1699, 23)), Promise.resolve()
        .then(n.t.bind(n, 467, 23)), Promise.resolve()
        .then(n.t.bind(n, 1712, 23)), Promise.resolve()
        .then(n.bind(n, 4246)), Promise.resolve()
        .then(n.bind(n, 277)), Promise.resolve()
        .then(n.bind(n, 6636)), Promise.resolve()
        .then(n.bind(n, 7153)), Promise.resolve()
        .then(n.bind(n, 6506)), Promise.resolve()
        .then(n.bind(n, 8320)), Promise.resolve()
        .then(n.bind(n, 140)), Promise.resolve()
        .then(n.bind(n, 7841)), Promise.resolve()
        .then(n.bind(n, 5671)), Promise.resolve()
        .then(n.bind(n, 300)), Promise.resolve()
        .then(n.bind(n, 6183)), Promise.resolve()
        .then(n.bind(n, 3)), Promise.resolve()
        .then(n.bind(n, 3609)), Promise.resolve()
        .then(n.bind(n, 2176)), Promise.resolve()
        .then(n.bind(n, 6334)), Promise.resolve()
        .then(n.bind(n, 6291)), Promise.resolve()
        .then(n.bind(n, 7826)), Promise.resolve()
        .then(n.bind(n, 4559))
    },
    6506: function(e, t, n) {
      "use strict";
      var i = n(7437),
        l = n(4056),
        r = n(4560),
        o = n(4317),
        a = n(7798),
        s = n(2146),
        c = n(2265),
        d = n(6334);
      t.default = () => {
        let [e, t] = (0, c.useState)(!1), [n, u] = (0, c.useState)(!1), m = () => {
          u(!0), setTimeout(() => {
            u(!1)
          }, 1e3)
        }, p = async () => {
          let e = JSON.stringify({
            ...(0, o.an)(),
            webview: (0, a.q)()
          });
          if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(e), m();
          else {
            let t = document.createElement("textarea");
            t.value = e, t.style.position = "absolute", t.style.left = "-999999px", document.body.prepend(t), t.select();
            try {
              document.execCommand("copy"), m()
            } catch (e) {
              console.error(e)
            } finally {
              t.remove()
            }
          }
        };
        return (0, c.useEffect)(() => {
          t((0, s.y)())
        }, []), e && (0, i.jsxs)("div", {
          className: "mr-auto ml-auto flex flex-row gap-4 items-center justify-center",
          children: [(0, i.jsx)(d.default, {
            className: "bg-lidl-color-red_dark hover:bg-lidl-color-red",
            onClick: p,
            children: (0, i.jsx)(r.x, {
              typography: "small_1",
              color: "basic_white",
              isProminent: !0,
              children: n ? "Errors copied to clipboard" : "Copy local errors"
            })
          }), (0, i.jsx)(l.StandardIconButton, {
            className: "w-8 h-8 p-2 rounded bg-lidl-color-red_dark hover:bg-lidl-color-red",
            variant: "negative",
            icon: "interaction/trash",
            onClick: o.C7
          })]
        })
      }
    },
    4559: function(e, t, n) {
      "use strict";
      n.d(t, {
        UnleashVariantDashboard: function() {
          return m
        }
      });
      var i = n(7437),
        l = n(4056),
        r = n(4560),
        o = n(129),
        a = n(910),
        s = n(6898),
        c = n(2265),
        d = n(6334),
        u = n(5125);
      let m = () => {
        let [e, t] = (0, c.useState)(), [n, m] = (0, c.useState)(!1), [p, v] = (0, c.useState)({}), f = Object.keys(o.X)
          .filter(e => !p || !Object.keys(p)
            .includes(e)), b = (e, t) => {
            v(n => ({
              ...n,
              [e]: t
            }))
          }, g = e => {
            v(t => {
              let {
                [e]: n, ...i
              } = t || {};
              return {
                ...i
              }
            })
          }, h = async () => {
            t(void 0);
            let e = Object.fromEntries(Object.entries(p)
              .filter(e => {
                let [t, n] = e;
                return !!n
              }));
            (await (0, s.Y)("UNLEASH_TEST_FF_OVERRIDE", JSON.stringify(e), 36e5))
            .ok ? (t({
              status: "success",
              message: "Variants overwritten. Page will be refreshed now."
            }), setTimeout(() => {
              window.location.reload()
            }, 2e3)) : t({
              status: "error",
              message: "Failed to overwrite variants."
            })
          };
        return ((0, c.useEffect)(() => {
            let e = async () => {
              v(await (0, a.w)() || {})
            };
            n && e()
          }, [n]), Object.keys(o.X)
          .length) ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(d.default, {
            className: "mr-auto ml-auto",
            onClick: () => m(!0),
            children: (0, i.jsx)(r.x, {
              typography: "small_1",
              color: "yellow",
              isProminent: !0,
              children: "Open Unleash variant dashboard"
            })
          }), (0, i.jsx)(u.Z, {
            onClose: () => m(!1),
            title: "Override Unleash variants",
            visible: n,
            primaryButton: {
              onPress: h,
              text: "Save variants"
            },
            secondaryButton: {
              onPress: () => m(!1),
              text: "Cancel"
            },
            children: (0, i.jsxs)("div", {
              className: "p-6 pt-0",
              children: [e && (0, i.jsx)("div", {
                className: "p-4 mb-4 rounded-md border-2 ".concat("error" === e.status ? "border-lidl-color-red_dark bg-lidl-color-red/10 text-lidl-color-red_dark" : "border-lidl-color-green_dark bg-lidl-color-green/10 text-lidl-color-green_dark"),
                children: e.message
              }), (0, i.jsxs)("ul", {
                className: "flex flex-col gap-4",
                children: [Object.keys(p)
                  .map(e => (0, i.jsxs)("li", {
                    className: "flex flex-col gap-1 items-start",
                    children: [(0, i.jsx)(r.x, {
                      as: "span",
                      typography: "small_1",
                      isProminent: !0,
                      children: e
                    }), (0, i.jsxs)("div", {
                      className: "flex flex-row gap-4 items-center w-full",
                      children: [(0, i.jsxs)("select", {
                        className: "p-2 border rounded flex-grow min-w-0",
                        value: p[e],
                        onChange: t => b(e, t.target.value),
                        children: [(0, i.jsx)("option", {
                            value: "",
                            children: "Select variant"
                          }), Object.keys(o.X[e])
                          .map(e => (0, i.jsx)("option", {
                            value: e,
                            children: e
                          }, e))
                        ]
                      }), (0, i.jsx)(l.StandardIconButton, {
                        icon: "navigation/cross",
                        size: "small",
                        variant: "discrete",
                        onClick: () => g(e)
                      })]
                    })]
                  }, "feature-flag-".concat(e))), (0, i.jsx)("li", {}), f.length > 0 && (0, i.jsx)("li", {
                    children: (0, i.jsxs)("select", {
                      className: "p-2 border rounded w-full min-w-0",
                      value: "",
                      onChange: e => {
                        v(t => ({
                          ...t,
                          [e.target.value]: ""
                        }))
                      },
                      children: [(0, i.jsx)("option", {
                        value: "",
                        children: "Select new Feature Flag to override"
                      }), f.map(e => (0, i.jsx)("option", {
                        value: e,
                        children: e
                      }, e))]
                    })
                  })
                ]
              })]
            })
          })]
        }) : null
      }
    },
    6633: function(e, t, n) {
      "use strict";
      n.d(t, {
        q: function() {
          return l
        }
      });
      var i = n(7437);
      let l = (0, n(2265)
        .forwardRef)(function(e, t) {
        let {
          active: n
        } = e;
        return n ? (0, i.jsx)("span", {
          ref: t,
          tabIndex: 0,
          className: "sr-only"
        }) : null
      })
    },
    8313: function(e, t, n) {
      "use strict";
      n.d(t, {
        Z: function() {
          return r
        }
      });
      var i = n(2265),
        l = n(4887);

      function r(e) {
        let {
          portalId: t,
          children: n
        } = e, [r, o] = (0, i.useState)(!1), [a, s] = (0, i.useState)(null);
        return ((0, i.useEffect)(() => {
          s(document.getElementById(t)), o(!0)
        }, []), r && a) ? (0, l.createPortal)(n, a) : null
      }
    },
    8725: function(e, t, n) {
      "use strict";
      var i = n(7437);
      t.Z = e => {
        let {
          children: t,
          className: n = "",
          isBgGray: l = !1,
          "data-testid": r
        } = e;
        return (0, i.jsx)("div", {
          className: l ? "bg-gray-lightest" : void 0,
          "data-testid": r,
          children: (0, i.jsx)("div", {
            className: "grid grid-cols-12 gap-4 lg:gap-6 px-4 mdp:px-6 mdl:px-8 lg:px-0 w-full\n          lg:max-w-[1320px] lg:mx-auto ".concat(n),
            children: t
          })
        })
      }
    },
    7841: function(e, t, n) {
      "use strict";
      n.r(t);
      var i = n(7437),
        l = n(2265);
      t.default = () => {
        let [e, t] = (0, l.useState)(!1);
        return (0, i.jsxs)("div", {
          children: [(0, i.jsxs)("div", {
            className: "fixed z-[1001] top-1 right-2 w-18 h-6",
            children: [(0, i.jsx)("span", {
              className: "font-bold text-sm",
              children: "grid: "
            }), (0, i.jsxs)("label", {
              className: "relative inline-block w-8 h-5",
              children: [(0, i.jsx)("input", {
                type: "checkbox",
                className: "opacity-0 w-0 h-0",
                checked: e,
                onChange: () => t(e => !e)
              }), (0, i.jsx)("span", {
                className: "absolute cursor-pointer inset-0 bg-yellow-300 rounded-full before:absolute\n              before:content-[''] before:w-5 before:h-5 before:rounded-full\n              ".concat(e ? "before:bg-yellow-800 before:translate-x-3" : "before:bg-yellow-600")
              })]
            })]
          }), e && (0, i.jsxs)("div", {
            className: "fixed left-1/2 -translate-x-1/2 z-[1000] w-full lg:w-[1320px] h-screen grid grid-cols-12 px-4 mdp:px-6 mdl:px-8 lg:px-0 gap-4 lg:gap-6 pointer-events-none",
            children: [(0, i.jsx)("span", {
              className: "opacity-20 bg-yellow-400"
            }), (0, i.jsx)("span", {
              className: "opacity-20 bg-yellow-400"
            }), (0, i.jsx)("span", {
              className: "opacity-20 bg-yellow-400"
            }), (0, i.jsx)("span", {
              className: "opacity-20 bg-yellow-400"
            }), (0, i.jsx)("span", {
              className: "opacity-20 bg-yellow-400"
            }), (0, i.jsx)("span", {
              className: "opacity-20 bg-yellow-400"
            }), (0, i.jsx)("span", {
              className: "opacity-20 bg-yellow-400"
            }), (0, i.jsx)("span", {
              className: "opacity-20 bg-yellow-400"
            }), (0, i.jsx)("span", {
              className: "opacity-20 bg-yellow-400"
            }), (0, i.jsx)("span", {
              className: "opacity-20 bg-yellow-400"
            }), (0, i.jsx)("span", {
              className: "opacity-20 bg-yellow-400"
            }), (0, i.jsx)("span", {
              className: "opacity-20 bg-yellow-400"
            })]
          })]
        })
      }
    },
    2176: function(e, t, n) {
      "use strict";
      var i = n(7437),
        l = n(4056),
        r = n(4560),
        o = n(910),
        a = n(2265);
      t.default = () => {
        let [e, t] = (0, a.useState)(!1);
        return (0, a.useEffect)(() => {
          (async () => {
            await (0, o.w)() && t(!0)
          })()
        }, []), e && (0, i.jsxs)("div", {
          className: "fixed opacity-70 z-50 top-2 left-2 bg-lidl-color-red_dark py-1 pl-3 pr-2 rounded-full flex flex-row gap-2 justify-center items-center",
          children: [(0, i.jsx)(r.x, {
            as: "span",
            color: "basic_white",
            typography: "small_2",
            children: "Unleash overriden"
          }), (0, i.jsx)(l.StandardIconButton, {
            className: "w-5",
            icon: "navigation/cross",
            size: "small",
            variant: "negative",
            onClick: () => t(!1)
          })]
        })
      }
    },
    8320: function(e, t, n) {
      "use strict";
      n.r(t);
      var i = n(7437),
        l = n(6166),
        r = n(8732);
      t.default = e => {
        let {
          dropdownOptions: t
        } = e, n = t.map(e => ({
          ...e,
          id: e.languageName,
          label: e.languageName
        })), o = e => {
          if (e === t[0].languageName) return;
          let i = "recipe-" + e.toLocaleLowerCase(),
            l = n.find(t => e === t.languageName)
            .link,
            o = document.getElementsByTagName("meta")[i] && document.getElementsByTagName("meta")[i].content || "";
          (0, r.Z)({
            event: "change_language",
            type: e
          }), window.location.href = "".concat(l)
            .concat(o)
        };
        return (0, i.jsx)(l.Z, {
          label: t[0].languageName,
          name: "languageDropdown",
          options: n,
          onChange: e => o(e[e.length - 1])
        })
      }
    },
    140: function(e, t, n) {
      "use strict";
      n.r(t);
      var i = n(7437),
        l = n(6166),
        r = n(8732);
      t.default = e => {
        let {
          dropdownType: t,
          dropdownTitle: n,
          dropdownOptions: o
        } = e, a = o.map(e => ({
          ...e,
          id: e.name,
          label: e.name
        })), s = e => {
          let n = a.find(t => e === t.name)
            .link;
          "country" === t ? (0, r.Z)({
            event: "click_footer_link",
            type: "main_menu",
            link_url: n
          }) : (0, r.Z)({
            event: "click_footer_link",
            type: "info",
            link_url: n
          }), window.location.href = n
        };
        return (0, i.jsx)("div", {
          onClick: () => {
            "country" === t ? (0, r.Z)({
              event: "display_footer_links",
              type: "main_menu"
            }) : (0, r.Z)({
              event: "display_footer_links",
              type: "info"
            })
          },
          children: (0, i.jsx)(l.Z, {
            label: n,
            name: n,
            options: a,
            onChange: e => s(e[e.length - 1])
          })
        })
      }
    },
    5671: function(e, t, n) {
      "use strict";
      n.d(t, {
        FavoritesIcon: function() {
          return b
        }
      });
      var i = n(7437),
        l = n(4056),
        r = n(531),
        o = n(6633),
        a = n(5666),
        s = n(7826),
        c = n(5125),
        d = n(875),
        u = n(8732),
        m = n(5411),
        p = n(9376),
        v = n(2265);
      let f = e => {
          var t, n;
          let {
            urlFavorites: l,
            userSession: r,
            isFavoritesSelected: o,
            toggleModal: a,
            children: c
          } = e;
          return r && r.isAuth ? (0, i.jsx)(s.default, {
            href: l,
            tabIndex: 0,
            trackClick: {
              event: "navigation",
              type: "user_navigation",
              nav_name: "favorites",
              sso_id: null !== (n = null == r ? void 0 : null === (t = r.user) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : "notlogged"
            },
            className: "group mdp:px-3 mdp:py-[15px] mdp:border-b-2 hover:border-b-[#002466]\n        focus-visible:border-b-[#002466] mdp:focus-visible:outline focus-visible:outline-2\n        focus-visible:outline-primary-base focus-visible:outline-offset-2\n        active:border-b-primary-base\n        ".concat(o ? "border-primary-base" : "border-transparent"),
            children: c
          }) : (0, i.jsx)("span", {
            tabIndex: 0,
            className: "group mdp:px-3 mdp:py-[15px] mdp:border-b-2 hover:border-b-[#002466]\n        focus-visible:border-b-[#002466] mdp:focus-visible:outline focus-visible:outline-2\n        focus-visible:outline-primary-base focus-visible:outline-offset-2\n        active:border-b-primary-base cursor-pointer\n        ".concat(o ? "border-primary-base" : "border-transparent"),
            onClick: a,
            onKeyDown: (0, m.H)(a),
            children: c
          })
        },
        b = e => {
          let {
            userSession: t,
            loc: n
          } = e, s = (0, p.usePathname)(), m = (0, d.r)(), b = null == m ? void 0 : m.pageType, [g, h] = (0, v.useState)(!1), x = (0, v.useRef)(null), y = s === n.urlFavorites || s === "".concat(n.urlFavorites, "/");
          return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)(f, {
              urlFavorites: n.urlFavorites,
              userSession: t,
              isFavoritesSelected: y,
              toggleModal: () => {
                h(e => !e)
              },
              children: [(0, i.jsx)(l.StandardIconButton, {
                icon: "heart-regular",
                className: "mdp:hidden"
              }), (0, i.jsx)(a.Z, {
                name: "heart-regular",
                className: "hidden mdp:inline group-focus-visible:fill-[#002466]\n            group-hover:fill-[#002466] group-active:fill-primary-base\n            ".concat(y ? "fill-primary-base" : "fill-gray-550")
              })]
            }), (0, i.jsx)(o.q, {
              active: g,
              ref: x
            }), (0, i.jsx)(c.Z, {
              visible: g,
              title: n.favoriteSignInTitle,
              description: n.favoriteSignInDescription,
              imageUrl: r.Z.src,
              onShow: () => {
                var e, n;
                return (0, u.Z)({
                  event: "page_view_custom",
                  screen_name: "login_modal",
                  sso_id: null !== (n = null == t ? void 0 : null === (e = t.user) || void 0 === e ? void 0 : e.id) && void 0 !== n ? n : "notlogged",
                  page_type: b
                })
              },
              onClose: () => h(!1),
              primaryButton: {
                text: n.favoriteSignInButton,
                onPress: () => {
                  (0, u.Z)({
                    event: "click_signin",
                    origin: "authentication_modal"
                  }), h(!1);
                  try {
                    var e, t;
                    let i = null === (t = window) || void 0 === t ? void 0 : null === (e = t.location) || void 0 === e ? void 0 : e.origin,
                      l = i ? "/sso_handler?lp_website=true&redirect_uri=".concat(encodeURIComponent("".concat(i)
                        .concat(n.urlFavorites))) : n.urlFavorites;
                    window.location.href = l
                  } catch (e) {
                    console.warn("Error during login and redirect from favorites icon:", e)
                  }
                }
              },
              refFocusOnClose: x
            })]
          })
        }
    },
    300: function(e, t, n) {
      "use strict";
      n.d(t, {
        default: function() {
          return g
        }
      });
      var i = n(7437),
        l = n(4056),
        r = n(5666),
        o = n(396),
        a = n(8732),
        s = n(7798),
        c = n(2265),
        d = n(8725),
        u = n(8484),
        m = n(4560),
        p = n(7826),
        v = n(875),
        f = e => {
          let {
            buttonHref: t,
            buttonPrimary: n,
            buttonText: r,
            title: o,
            description: s,
            onInteractionStart: d,
            onClose: u
          } = e, f = (0, v.r)(), b = null == f ? void 0 : f.pageType;
          return (0, c.useEffect)(() => {
            (0, a.Z)({
              event: "page_view_custom",
              screen_name: "navigation_login_modal",
              sso_id: "notlogged",
              page_type: b
            })
          }, [b]), (0, i.jsxs)("div", {
            "data-testid": "login-menu",
            className: "relative",
            children: [(0, i.jsx)(l.StandardIconButton, {
              "data-testid": "login-menu-close",
              icon: "navigation/cross",
              className: "absolute top-0 right-0",
              size: "small",
              onClick: u
            }), (0, i.jsx)(m.x, {
              className: "pr-10",
              color: "grayscale_darkest",
              isProminent: !0,
              typography: "headline_5",
              children: o
            }), !!s && (0, i.jsx)(m.x, {
              "data-testid": "login-menu-description",
              className: "mt-space-small-200",
              color: "grayscale_light",
              typography: "body_normal",
              children: s
            }), (0, i.jsx)(p.default, {
              "data-testid": "login-menu-interaction-button",
              className: "".concat(n ? "ods-primary-button" : "ods-secondary-button", " w-full\n          mt-space-medium-400"),
              prefetch: !1,
              href: t,
              trackClick: {
                event: t.includes("logout") ? "click_logout" : "click_signin",
                origin: "user_menu"
              },
              onClick: d,
              children: (0, i.jsx)("span", {
                className: "font-body_normal-prominent-mobile mdl:font-body_normal-prominent-desktop",
                children: r
              })
            })]
          })
        },
        b = n(5411),
        g = e => {
          var t, n, m, p;
          let {
            hasWebviewCookieEnabled: v,
            userSession: g,
            loc: h
          } = e, [x, y] = (0, c.useState)(!1), [_, w] = (0, c.useState)(!1), N = null == g ? void 0 : g.isAuth, S = null == g ? void 0 : null === (t = g.user) || void 0 === t ? void 0 : t.name, j = null === (m = window) || void 0 === m ? void 0 : null === (n = m.location) || void 0 === n ? void 0 : n.href, C = v || !!(null === (p = (0, s.q)()) || void 0 === p ? void 0 : p.isWebview), k = e => {
            y(!1), w(!0), e && setTimeout(() => window.location.reload(), 1500)
          }, O = () => {
            var e, t;
            x || (0, a.Z)({
              event: "navigation",
              type: "user_navigation",
              nav_name: "user",
              sso_id: null !== (t = null == g ? void 0 : null === (e = g.user) || void 0 === e ? void 0 : e.id) && void 0 !== t ? t : "notlogged"
            }), y(e => !e)
          };
          return C ? null : (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)("div", {
              className: "relative mdp:hidden",
              children: [(0, i.jsx)(l.StandardIconButton, {
                icon: "interaction/user",
                "data-testid": "login-icon-button",
                disabled: _,
                onClick: O,
                className: "mdp:hidden"
              }), N && (0, i.jsx)("span", {
                className: "login-dot green-dot"
              })]
            }), (0, i.jsxs)("div", {
              className: "relative group hidden mdp:block mdp:px-3 mdp:py-[15px] hover:cursor-pointer mdp:border-b-2 border-transparent hover:border-b-[#002466] active:border-b-primary-base focus-visible:border-b-[#002466] mdp:focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-base focus-visible:outline-offset-2",
              tabIndex: 0,
              onClick: O,
              onKeyDown: (0, b.H)(O),
              children: [(0, i.jsx)(r.Z, {
                name: "interaction/user",
                className: "hidden mdp:inline fill-gray-550 group-focus-visible:fill-[#002466] group-hover:fill-[#002466] group-active:fill-primary-base"
              }), N && (0, i.jsx)("span", {
                className: "login-dot green-dot"
              })]
            }), x && (0, i.jsxs)("div", {
              "data-testid": "login-menu-container",
              className: "absolute w-full top-14 left-0 z-30",
              children: [(0, i.jsx)("div", {
                className: "fixed top-0 left-0 w-full h-full",
                onClick: O
              }), (0, i.jsx)(d.Z, {
                children: (0, i.jsx)(u.Z, {
                  cols: 12,
                  xslCols: 8,
                  xslStartCol: 5,
                  mdpCols: 6,
                  mdpStartCol: 7,
                  mdlCols: 5,
                  mdlStartCol: 8,
                  lgCols: 4,
                  lgStartCol: 9,
                  className: "rounded-2xl p-space-medium-400 bg-white shadow-ods-sm-lightgrey",
                  children: N ? (0, i.jsx)(f, {
                    onClose: O,
                    buttonHref: "/sso/logout?redirect_uri=".concat(encodeURIComponent(j)),
                    buttonPrimary: !1,
                    buttonText: h.signoutButton,
                    title: S ? (0, o.Z)(h.loggedTitleWithName, {
                      username: S
                    }) : h.loggedTitle,
                    onInteractionStart: () => k(!0)
                  }) : (0, i.jsx)(f, {
                    onClose: O,
                    buttonHref: "/sso_handler?lp_website=true&redirect_uri=".concat(encodeURIComponent(j)),
                    buttonPrimary: !0,
                    buttonText: h.signinButton,
                    title: h.notLoggedTitle,
                    description: h.notLoggedDescription,
                    onInteractionStart: () => k()
                  })
                })
              })]
            })]
          })
        }
    },
    6183: function(e, t, n) {
      "use strict";
      var i = n(7437),
        l = n(4056),
        r = n(7777),
        o = n(9968),
        a = n(5666),
        s = n(7826),
        c = n(8732),
        d = n(7798),
        u = n(5411),
        m = n(1994),
        p = n(9376),
        v = n(2265);
      t.default = e => {
        var t;
        let {
          hasWebviewCookieEnabled: n = !0,
          loc: f
        } = e, [b, g] = (0, v.useState)(!1), h = (0, p.usePathname)(), x = n || !!(null === (t = (0, d.q)()) || void 0 === t ? void 0 : t.isWebview), y = () => {
          if (b) {
            g(!1);
            return
          }
          g(!0), (0, c.Z)({
            event: "navigation",
            type: "user_navigation",
            nav_name: "burger_menu"
          })
        };
        return (0, v.useEffect)(() => {
          g(!1)
        }, [h]), (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)("span", {
            className: "mdp:hidden",
            children: (0, i.jsx)(l.StandardIconButton, {
              icon: b ? "navigation/cross" : "interaction/bars-horizontal",
              className: (0, m.Z)(b && "relative before:bg-white before:absolute before:content-[''] before:-left-24\n              before:top-0 before:w-24 before:h-full"),
              "data-testid": "mobile-menu-button",
              type: "button",
              onClick: y,
              title: f.textMainMenuTitle,
              "aria-expanded": b,
              "aria-controls": "mobile-menu-wrapper",
              "aria-label": f.textMainMenuTitle
            })
          }), (0, i.jsx)("span", {
            className: "hidden mdp:inline-block px-4 py-[13px]",
            "data-testid": "desktop-menu-button",
            role: "button",
            tabIndex: 0,
            onKeyDown: (0, u.H)(y),
            onClick: y,
            title: f.textMainMenuTitle,
            "aria-expanded": b,
            "aria-controls": "mobile-menu-wrapper",
            "aria-label": f.textMainMenuTitle,
            children: (0, i.jsx)(a.Z, {
              name: b ? "navigation/cross" : "interaction/bars-horizontal",
              className: "text-gray-550 group-focus-visible:fill-[#002466] group-hover:fill-[#002466] group-active:fill-primary-base"
            })
          }), (0, i.jsxs)("div", {
            id: "mobile-menu-wrapper",
            "data-testid": "mobile-menu-wrapper",
            className: "fixed top-[65px] bottom-0 inset-x-0 flex items-stretch justify-start\n          ".concat(b ? "block global-no-scroll" : "hidden"),
            children: [(0, i.jsx)("div", {
              className: "hidden mdp:block absolute bg-black opacity-50 inset-0 z-50",
              onClick: () => g(!1)
            }), (0, i.jsx)("div", {
              className: "basis-full mdp:basis-1/2 mdl:basis-1/3 bg-white flex flex-col overflow-y-scroll z-[51]",
              "data-testid": "sheet-recipes-menu",
              children: (0, i.jsxs)("nav", {
                "aria-label": "mobile-menu",
                children: [(0, i.jsx)("div", {
                  className: "no-underline",
                  children: (0, i.jsxs)("nav", {
                    className: "text-sm",
                    children: [(0, i.jsx)(s.default, {
                      href: "/",
                      trackClick: {
                        event: "navigation",
                        type: "recipes_menu",
                        nav_name: f.textRecipesMenuHomeTitle,
                        link_url: "/"
                      },
                      children: (0, i.jsx)(o.Z, {
                        title: f.textRecipesMenuHomeTitle,
                        showDivider: !0
                      })
                    }), (0, i.jsx)(s.default, {
                      href: f.textSearchUrl,
                      trackClick: {
                        event: "navigation",
                        type: "recipes_menu",
                        nav_name: f.textAllRecipesTitle,
                        link_url: f.textSearchUrl
                      },
                      children: (0, i.jsx)(o.Z, {
                        title: f.textAllRecipesTitle,
                        showDivider: !0
                      })
                    }), f.subMenuLinks.map(e => (0, i.jsx)(s.default, {
                      href: e.url,
                      trackClick: {
                        event: "navigation",
                        type: "recipes_menu",
                        nav_name: e.title,
                        link_url: e.url
                      },
                      children: (0, i.jsx)(o.Z, {
                        title: e.title,
                        showDivider: !0
                      })
                    }, e.title))]
                  })
                }), (0, i.jsx)("div", {
                  className: "mt-10 no-underline",
                  children: f.mainMenuLinks.map(e => (0, i.jsx)(s.default, {
                    href: e.url,
                    target: x ? "_self" : "_blank",
                    trackClick: {
                      event: "navigation",
                      type: "main_menu",
                      nav_name: e.title,
                      link_url: e.url
                    },
                    children: (0, i.jsx)(o.Z, {
                      title: e.title,
                      showDivider: !1,
                      endContent: (0, i.jsx)(r.JO, {
                        name: "interaction/external-link",
                        color: "grayscale_light"
                      })
                    })
                  }, e.title))
                })]
              })
            })]
          })]
        })
      }
    },
    3: function(e, t, n) {
      "use strict";
      n.d(t, {
        RecipesLinkClient: function() {
          return a
        }
      });
      var i = n(7437),
        l = n(9376),
        r = n(4560),
        o = n(7826);
      let a = e => {
        let {
          textRecipes: t,
          textUrlFavorites: n
        } = e, a = (0, l.usePathname)(), s = !(a === n || a === "".concat(n, "/"));
        return (0, i.jsx)(o.default, {
          href: "/",
          className: "group hidden mdp:block px-3 py-[15px] lg:py-[13px] border-b-2\n        hover:border-b-[#002466] active:border-b-primary-base focus-visible:border-b-[#002466]\n        focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-base\n        focus-visible:outline-offset-2\n        ".concat(s ? "border-primary-base" : "border-transparent"),
          children: (0, i.jsx)(r.x, {
            as: "span",
            typography: "body_normal",
            className: "text-primary-base whitespace-nowrap group-focus-visible:text-[#002466]\n          group-active:text-primary-base group-hover:text-[#002466]\n          ".concat(s ? "text-primary-base" : "text-gray-550 "),
            children: t
          })
        })
      }
    },
    3609: function(e, t, n) {
      "use strict";
      var i = n(7437),
        l = n(1079),
        r = n(2265);
      t.default = e => {
        let {
          hintText: t,
          placeholder: n,
          inputAriaLabel: o,
          submitAriaLabel: a,
          textUrlSearch: s,
          searchInputId: c,
          className: d = ""
        } = e, [u, m] = (0, r.useState)("");
        return (0, i.jsxs)("form", {
          id: c,
          action: s,
          method: "GET",
          className: d,
          "aria-label": "form",
          children: [(0, i.jsx)("label", {
            className: "hidden",
            htmlFor: "".concat(c, "-input"),
            children: o
          }), (0, i.jsx)("div", {
            className: "relative",
            children: (0, i.jsx)(l.U, {
              id: "".concat(c, "-input"),
              type: "text",
              defaultValue: t,
              onInput: e => m(e.currentTarget.value),
              onChange: e => m(e.currentTarget.value),
              name: "q",
              value: u,
              cancelText: "",
              onCancelPress: () => m(""),
              placeholder: n,
              "data-testid": "search-input",
              "data-rid": "search-input",
              "aria-label": o
            })
          }), (0, i.jsx)("button", {
            "data-testid": "search-submit-button",
            className: "hidden",
            "aria-label": a,
            type: "submit",
            "data-name": "search-submit"
          })]
        })
      }
    },
    6334: function(e, t, n) {
      "use strict";
      var i = n(7437),
        l = n(1574),
        r = n(8785),
        o = n(8732);
      t.default = e => {
        let {
          label: t,
          children: n,
          icon: a,
          onClick: s,
          variant: c = "positive",
          trackClick: d,
          disabled: u = !1,
          className: m = "",
          status: p = "",
          isLoading: v = !1
        } = e;
        return p ? (0, i.jsx)(l.M, {
          className: m,
          type: "button",
          icon: a,
          disabled: u,
          text: t,
          variant: c,
          status: p,
          isLoading: v,
          onPress: d ? e => {
            (0, o.Z)({
              ...d
            }), null == s || s(e)
          } : s,
          children: n
        }) : (0, i.jsx)(r.D, {
          className: m,
          type: "button",
          icon: a,
          disabled: u,
          text: t,
          variant: c,
          onPress: d ? e => {
            (0, o.Z)({
              ...d
            }), null == s || s(e)
          } : s,
          children: n
        })
      }
    },
    6291: function(e, t, n) {
      "use strict";
      var i = n(7437),
        l = n(2265);
      let r = {
        lidl: "/assets/lidl.7799737d945605ff.svg",
        nucleus: "/assets/nucleus.06ec81d8e758b55d.svg"
      };
      t.default = e => {
        let {
          bundle: t,
          icon: n,
          className: o,
          title: a
        } = e, s = (0, l.useId)();
        return (0, i.jsxs)("svg", {
          className: o,
          "aria-hidden": "true",
          "aria-labelledby": a ? s : void 0,
          role: "img",
          focusable: "false",
          "data-testid": "icon-".concat(n),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 1 1",
          children: [a && (0, i.jsx)("title", {
            id: s,
            children: a
          }), (0, i.jsx)("use", {
            href: "".concat(r[t], "#")
              .concat(n)
          })]
        })
      }
    },
    5666: function(e, t, n) {
      "use strict";
      var i = n(7437),
        l = n(7777);
      t.Z = e => {
        let {
          dataTestId: t,
          ...n
        } = e;
        return (0, i.jsx)(l.JO, {
          ...n,
          "data-testid": null != t ? t : "icon-badge"
        })
      }
    },
    5125: function(e, t, n) {
      "use strict";
      var i = n(7437),
        l = n(3200),
        r = n(3145),
        o = n(2265),
        a = n(8313);
      t.Z = e => {
        let {
          visible: t,
          onShow: n,
          onClose: s,
          title: c,
          children: d,
          description: u,
          disablePageScroll: m = !0,
          actionStyle: p = "primary",
          imageUrl: v,
          primaryButton: f,
          secondaryButton: b,
          refFocusOnClose: g
        } = e, h = (0, o.useRef)(null), x = () => {
          var e;
          s(), null == g || null === (e = g.current) || void 0 === e || e.focus()
        };
        return (0, o.useEffect)(() => {
          if (t && n) {
            var e;
            n(), null === (e = h.current) || void 0 === e || e.focus()
          }
        }, [t]), (0, i.jsx)(a.Z, {
          portalId: "modal-portal",
          children: t && (0, i.jsxs)("div", {
            className: "fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50\n          ".concat(m ? "global-no-scroll" : ""),
            children: [(0, i.jsx)("div", {
              onClick: x,
              "data-testid": "modal-dialog-overlay",
              className: "absolute top-0 left-0 w-full h-full"
            }), (0, i.jsx)("div", {
              className: "flex justify-center align-middle w-full focus:outline-none",
              role: "dialog",
              tabIndex: 0,
              ref: h,
              children: (0, i.jsx)(l.V, {
                actionStyle: p,
                content: d,
                image: v ? (0, i.jsx)(r.default, {
                  className: "self-center",
                  width: 424,
                  height: 240,
                  src: v,
                  alt: "",
                  "data-testid": "modal-image"
                }) : void 0,
                title: c,
                description: u,
                onClosePress: x,
                positiveAction: f,
                negativeAction: b
              })
            })]
          })
        })
      }
    },
    5777: function(e, t, n) {
      "use strict";
      n.d(t, {
        Q: function() {
          return i
        }
      });
      let i = {
        accessToken: "accessToken",
        lidlWebview: "lidlWebview",
        session: "session",
        referer: "referer",
        user: "user",
        snapAndCookId: "snapAndCookId"
      }
    },
    129: function(e, t, n) {
      "use strict";
      n.d(t, {
        X: function() {
          return i
        }
      });
      let i = {
        [n(438)
          .T.FF_SREC4112_SNAPNCOOK_ENTRYPOINT_AB
        ]: {
          VAR_SHOW_SNAPNCOOK: "VAR_SHOW_SNAPNCOOK",
          VAR_HIDE_SNAPNCOOK: "VAR_HIDE_SNAPNCOOK"
        }
      }
    },
    438: function(e, t, n) {
      "use strict";
      n.d(t, {
        T: function() {
          return i
        }
      });
      let i = {
        FF_SREC3261_PRODUCT_CAROUSEL: "FF_SREC3261_PRODUCT_CAROUSEL",
        FF_SREC3740_AI_FRIDGE: "FF_SREC3740_AI_FRIDGE",
        FF_3563_PERSONALISED_RECIPES: "FF_3563_PERSONALISED_RECIPES",
        FF_SREC4112_SNAPNCOOK_ENTRYPOINT_AB: "FF_SREC4112_SNAPNCOOK_ENTRYPOINT_AB",
        FF_SREC4228_PHAR_SESSIONID: "FF_SREC4228_PHAR_SESSIONID",
        FF_SREC_4331_SMART_TOOLS_SEO_PAGES: "FF_SREC_4331_SMART_TOOLS_SEO_PAGES",
        FF_SREC_4448_LAB_COLLECTIONS_AI: "FF_SREC_4448_LAB_COLLECTIONS_AI",
        FF_SREC_4453_FAVORITES_COUNT: "FF_SREC_4453_FAVORITES_COUNT",
        FF_SREC4938_PERSONALIZED_HOME: "FF_SREC4938_PERSONALIZED_HOME"
      }
    },
    910: function(e, t, n) {
      "use strict";
      n.d(t, {
        w: function() {
          return l
        }
      });
      let i = e => {
        if (!e) return;
        let t = JSON.parse(decodeURIComponent(e));
        if (Object.keys(t)
          .length) return t
      };
      async function l() {
        try {
          var e;
          let t = null === (e = document.cookie.split("; ")
            .find(e => e.startsWith("".concat("UNLEASH_TEST_FF_OVERRIDE", "=")))) || void 0 === e ? void 0 : e.split("=")[1];
          return i(t)
        } catch (e) {
          console.error("Error reading client cookie:", e);
          return
        }
      }
    },
    396: function(e, t) {
      "use strict";
      t.Z = (e, t) => t ? e.replace(RegExp("%(".concat(Object.keys(t)
        .join("|"), ")%"), "gm"), (e, n) => t[n]) : e
    },
    9007: function(e, t, n) {
      "use strict";
      n.d(t, {
        JG: function() {
          return l
        },
        zf: function() {
          return i
        }
      });
      let i = e => {
          if ("undefined" != typeof document)
            for (let t of (document.cookie || "")
                .split("; ")) {
              let [n, i] = t.trim()
                .split("=");
              if (n === e) return decodeURIComponent(i)
            }
        },
        l = (e, t, n) => {
          if ("undefined" == typeof document) return;
          let i = "";
          if (n) {
            var l = new Date;
            l.setDate(l.getDate() + n), i = "; expires=" + l.toUTCString()
          }
          document.cookie = "".concat(e, "=")
            .concat(t || "")
            .concat(i, "; path=/")
        }
    },
    6898: function(e, t, n) {
      "use strict";
      async function i(e, t, n) {
        return await fetch("/api/set-cookie", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: e,
            value: t,
            expirationTimeMs: n
          })
        })
      }
      n.d(t, {
        Y: function() {
          return i
        }
      })
    },
    4317: function(e, t, n) {
      "use strict";
      n.d(t, {
        C7: function() {
          return u
        },
        Tf: function() {
          return p
        },
        an: function() {
          return m
        }
      });
      var i = n(5777),
        l = n(181),
        r = n(2146);
      let o = "clientErrorLogs",
        a = () => "enabled" === (0, l.M)("CLIENT_ERROR_LOGGING"),
        s = (e, t) => {
          if (null == t ? void 0 : t.name) {
            var n;
            return {
              ...JSON.parse(JSON.stringify(t, Object.getOwnPropertyNames(t))),
              name: t.name,
              message: t.message,
              stack: "".concat(null === (n = t.stack) || void 0 === n ? void 0 : n.substring(0, 1500), "..."),
              cause: t.cause
            }
          }
          return t
        },
        c = () => {
          let e = m();
          return ((null == e ? void 0 : e.clientErrors) || [])
            .filter(e => new Date(e.timestampUtc)
              .getTime() > Date.now() - 864e5)
        },
        d = e => {
          let t = m(),
            n = new Date;
          if (!(null == t ? void 0 : t.lastAdded)) {
            let t = {
              clientErrors: [e],
              lastAdded: n.toJSON(),
              lastCleaned: n.toJSON()
            };
            return localStorage.setItem(o, JSON.stringify(t))
          }
          return (!t.lastCleaned || new Date(t.lastCleaned)
            .getTime() < Date.now() - 864e5) && (t.clientErrors = c() || [], t.lastCleaned = n.toJSON()), t.clientErrors = [e, ...t.clientErrors || []], t.lastAdded = n.toJSON(), localStorage.setItem(o, JSON.stringify(t))
        },
        u = () => {
          if (!(0, r.y)()) return;
          let e = m();
          if (e) try {
            e.clientErrors = [], e.lastCleaned = new Date()
              .toJSON(), localStorage.setItem(o, JSON.stringify(e))
          } catch (e) {
            console.warn("Error while trying to clean errors from localStorage", e)
          }
        },
        m = () => a() && (0, r.y)() ? JSON.parse(localStorage.getItem(o) || "null") : null,
        p = (e, t) => {
          var n, l, o, c;
          if (!a() || !(0, r.y)()) return;
          let u = null === (l = document) || void 0 === l ? void 0 : null === (n = l.cookie) || void 0 === n ? void 0 : n.split("; ")
            .reduce((e, t) => {
              let [n, l] = t.split("=");
              return n !== i.Q.session && (e[n.trim()] = null == l ? void 0 : l.trim()), e
            }, {}),
            m = {
              error: JSON.parse(JSON.stringify(e || {}, s)),
              message: (null == t ? void 0 : t.message) ? t.message : "",
              componentOrPage: null == t ? void 0 : t.componentOrPage,
              payload: (null == t ? void 0 : t.payload) ? {
                ...JSON.parse(JSON.stringify(t.payload))
              } : null,
              method: null == t ? void 0 : t.method,
              timestampUtc: new Date()
                .toJSON(),
              cookies: u,
              currentUrl: null === (c = window) || void 0 === c ? void 0 : null === (o = c.location) || void 0 === o ? void 0 : o.href
            };
          try {
            d(m)
          } catch (e) {
            console.warn("Error while trying to log errors into localStorage", e, {
              payload: m
            })
          }
        }
    },
    181: function(e, t, n) {
      "use strict";
      n.d(t, {
        M: function() {
          return l
        }
      });
      var i = n(5566);
      let l = function(e) {
        var t, n, l, r;
        let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return null !== (r = null !== (l = null === (t = globalThis.publicEnv) || void 0 === t ? void 0 : t[e]) && void 0 !== l ? l : null == i ? void 0 : null === (n = i.env) || void 0 === n ? void 0 : n[e]) && void 0 !== r ? r : o
      }
    },
    7798: function(e, t, n) {
      "use strict";
      n.d(t, {
        q: function() {
          return r
        }
      });
      var i = n(5777),
        l = n(9007);
      let r = function() {
        var e, t;
        let n = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
          r = window,
          o = r.LidlPlusWebviewOS,
          a = !!o && o.toLowerCase()
          .includes("android"),
          s = (null === (t = r.webkit) || void 0 === t ? void 0 : null === (e = t.messageHandlers) || void 0 === e ? void 0 : e.LidlPlusWebviewOS) || r.LidlPlusWebviewOS,
          c = !!s && s.toLowerCase()
          .includes("ios"),
          d = a || c;
        return d && n && (0, l.JG)(i.Q.lidlWebview, "".concat(d), 1), {
          isWebview: d,
          isAndroid: a,
          isIOS: c,
          webviewData: {
            LidlPlusWebviewOS: r.LidlPlusWebviewOS,
            webkit: r.webkit
          }
        }
      }
    },
    5411: function(e, t, n) {
      "use strict";
      n.d(t, {
        H: function() {
          return i
        }
      });
      let i = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ["Enter"];
        return n => {
          t.includes(n.key) && (n.preventDefault(), e(n))
        }
      }
    },
    2146: function(e, t, n) {
      "use strict";
      n.d(t, {
        y: function() {
          return i
        }
      });
      let i = () => {
        let e = "localStorage_browser_feature_test";
        if ("undefined" == typeof document || "undefined" == typeof localStorage || null === localStorage) return !1;
        try {
          if (localStorage.setItem(e, e), localStorage.getItem(e) === e) return localStorage.removeItem(e), !0;
          return !1
        } catch (e) {
          return !1
        }
      }
    },
    1712: function() {},
    4246: function(e, t, n) {
      "use strict";
      n.r(t), t.default = {
        src: "/_next/static/media/app-store-apple.1dc319da.svg",
        height: 40,
        width: 130,
        blurWidth: 0,
        blurHeight: 0
      }
    },
    277: function(e, t, n) {
      "use strict";
      n.r(t), t.default = {
        src: "/_next/static/media/google-play-badge.288029c1.svg",
        height: 40,
        width: 130,
        blurWidth: 0,
        blurHeight: 0
      }
    },
    6636: function(e, t, n) {
      "use strict";
      n.r(t), t.default = {
        src: "/_next/static/media/huawei-store-badge.e2e772bb.svg",
        height: 40,
        width: 132,
        blurWidth: 0,
        blurHeight: 0
      }
    },
    7153: function(e, t, n) {
      "use strict";
      n.r(t), t.default = {
        src: "/_next/static/media/logo_default.1f8c4711.svg",
        height: 115,
        width: 115,
        blurWidth: 0,
        blurHeight: 0
      }
    },
    531: function(e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/recipesEmptyFavorites.96f1d583.svg",
        height: 184,
        width: 328,
        blurWidth: 0,
        blurHeight: 0
      }
    }
  },
  function(e) {
    e.O(0, [8566, 1603, 9689, 318, 5541, 8159, 4497, 1732, 72, 1079, 4693, 8613, 9452, 2971, 2117, 1744], function() {
      return e(e.s = 1654)
    }), _N_E = e.O()
  }
]);