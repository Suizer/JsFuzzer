"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || [])
.push([
  [8159], {
    4593: function(e, t, r) {
      r.d(t, {
        R: function() {
          return l
        }
      });
      var n = r(2265);

      function o() {
        return (o = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)({})
                .hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
          })
          .apply(null, arguments)
      }
      let l = (0, n.forwardRef)(({
        as: e = "div",
        testID: t,
        ...r
      }, l) => n.createElement(e, o({}, r, {
        ref: l
      }, t && {
        "data-testid": t
      })));
      l.displayName = "ComponentAs"
    },
    1015: function(e, t, r) {
      r.d(t, {
        Q_: function() {
          return i
        }
      });
      var n = r(2265);

      function o(e, t, r) {
        return {
          style: t,
          className: e
        }
      }
      let l = (0, n.createContext)([o, () => o]),
        i = () => (0, n.useContext)(l)[0]
    },
    6456: function(e, t, r) {
      r.d(t, {
        Portal: function() {
          return l
        }
      });
      var n = r(2265),
        o = r(4887);
      let l = e => {
        let {
          children: t
        } = e, [r, l] = (0, n.useState)(null);
        return (0, n.useEffect)(() => {
          let e = document.createElement("div");
          return l(e), document.body.appendChild(e), () => {
            document.body.removeChild(e)
          }
        }, []), r ? (0, o.createPortal)(t, r) : null
      }
    },
    639: function(e, t, r) {
      r.d(t, {
        l: function() {
          return o
        }
      });
      var n = r(5822);

      function o(e) {
        return n.b ? "" : Array.isArray(e) ? e.join(" ") : e
      }
    },
    5822: function(e, t, r) {
      r.d(t, {
        b: function() {
          return n
        }
      });
      let n = "undefined" != typeof navigator && "ReactNative" === navigator.product
    },
    8440: function(e, t, r) {
      r.d(t, {
        tv: function() {
          return n
        }
      });
      let n = (0, r(4191)
        .hL)({
        twMergeConfig: {
          classGroups: {
            shadow: ["border", "inner", "none", "2xl", "xl", "lg", "md", "sm", "", "overlay", "overlay-native"]
          }
        }
      })
    },
    4560: function(e, t, r) {
      r.d(t, {
        x: function() {
          return u
        }
      });
      var n = r(2265),
        o = r(4593);

      function l() {
        return (l = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)({})
                .hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
          })
          .apply(null, arguments)
      }
      let i = (0, n.forwardRef)(({
        as: e = "p",
        ...t
      }, r) => n.createElement(o.R, l({
        as: e
      }, t, {
        ref: r
      })));
      i.displayName = "Text";
      let a = (0, r(8440)
        .tv)({
        base: ["text-black"],
        variants: {
          typography: {
            display_1: ["font-display_1-base-mobile", "lg:font-display_1-base-desktop"],
            display_2: ["font-display_2-base-mobile", "lg:font-display_2-base-desktop"],
            display_3: ["font-display_3-base-mobile", "lg:font-display_3-base-desktop"],
            display_4: ["font-display_4-base-mobile", "lg:font-display_4-base-desktop"],
            display_5: ["font-display_5-base-mobile", "lg:font-display_5-base-desktop"],
            headline_1: ["font-headline_1-base-mobile", "lg:font-headline_1-base-desktop"],
            headline_2: ["font-headline_2-base-mobile", "lg:font-headline_2-base-desktop"],
            headline_3: ["font-headline_3-base-mobile", "lg:font-headline_3-base-desktop"],
            headline_4: ["font-headline_4-base-mobile", "lg:font-headline_4-base-desktop"],
            headline_5: ["font-headline_5-base-mobile", "lg:font-headline_5-base-desktop"],
            headline_6: ["font-headline_6-base-mobile", "lg:font-headline_6-base-desktop"],
            body_normal: ["font-body_normal-base-mobile", "lg:font-body_normal-base-desktop"],
            body_tight: ["font-body_tight-base-mobile", "lg:font-body_tight-base-desktop"],
            small_1: ["font-small_1-base-mobile", "lg:font-small_1-base-desktop"],
            small_2: ["font-small_2-base-mobile", "lg:font-small_2-base-desktop"],
            footnote: ["font-footnote-base-mobile", "lg:font-footnote-base-desktop"]
          },
          isProminent: {
            true: []
          },
          color: {
            blue: ["text-lidl-color-blue"],
            blue_light: ["text-lidl-color-blue_light"],
            blue_lighter: ["text-lidl-color-blue_lighter"],
            blue_lightest: ["text-lidl-color-blue_lightest"],
            blue_dark: ["text-lidl-color-blue_dark"],
            interaction_blue: ["text-lidl-color-interaction_blue"],
            interaction_blue_dark: ["text-lidl-color-interaction_blue_dark"],
            yellow: ["text-lidl-color-yellow"],
            yellow_light: ["text-lidl-color-yellow_light"],
            yellow_lighter: ["text-lidl-color-yellow_lighter"],
            yellow_lightest: ["text-lidl-color-yellow_lightest"],
            yellow_dark: ["text-lidl-color-yellow_dark"],
            yellow_darker: ["text-lidl-color-yellow_darker"],
            yellow_darkest: ["text-lidl-color-yellow_darkest"],
            red: ["text-lidl-color-red"],
            red_light: ["text-lidl-color-red_light"],
            red_lighter: ["text-lidl-color-red_lighter"],
            red_lightest: ["text-lidl-color-red_lightest"],
            red_dark: ["text-lidl-color-red_dark"],
            green: ["text-lidl-color-green"],
            green_light: ["text-lidl-color-green_light"],
            green_lighter: ["text-lidl-color-green_lighter"],
            green_lightest: ["text-lidl-color-green_lightest"],
            green_dark: ["text-lidl-color-green_dark"],
            grayscale: ["text-lidl-color-grayscale"],
            grayscale_light: ["text-lidl-color-grayscale_light"],
            grayscale_lighter: ["text-lidl-color-grayscale_lighter"],
            grayscale_lightest: ["text-lidl-color-grayscale_lightest"],
            grayscale_darkest: ["text-lidl-color-grayscale_darkest"],
            basic_black: ["text-lidl-color-basic_black"],
            basic_white: ["text-lidl-color-basic_white"],
            overlay: ["text-lidl-color-overlay"]
          }
        },
        compoundVariants: [{
          typography: "display_1",
          isProminent: !0,
          class: ["font-display_1-prominent-mobile", "lg:font-display_1-prominent-desktop"]
        }, {
          typography: "display_2",
          isProminent: !0,
          class: ["font-display_2-prominent-mobile", "lg:font-display_2-prominent-desktop"]
        }, {
          typography: "display_3",
          isProminent: !0,
          class: ["font-display_3-prominent-mobile", "lg:font-display_3-prominent-desktop"]
        }, {
          typography: "display_4",
          isProminent: !0,
          class: ["font-display_4-prominent-mobile", "lg:font-display_4-prominent-desktop"]
        }, {
          typography: "display_5",
          isProminent: !0,
          class: ["font-display_5-prominent-mobile", "lg:font-display_5-prominent-desktop"]
        }, {
          typography: "headline_1",
          isProminent: !0,
          class: ["font-headline_1-prominent-mobile", "lg:font-headline_1-prominent-desktop"]
        }, {
          typography: "headline_2",
          isProminent: !0,
          class: ["font-headline_2-prominent-mobile", "lg:font-headline_2-prominent-desktop"]
        }, {
          typography: "headline_3",
          isProminent: !0,
          class: ["font-headline_3-prominent-mobile", "lg:font-headline_3-prominent-desktop"]
        }, {
          typography: "headline_4",
          isProminent: !0,
          class: ["font-headline_4-prominent-mobile", "lg:font-headline_4-prominent-desktop"]
        }, {
          typography: "headline_5",
          isProminent: !0,
          class: ["font-headline_5-prominent-mobile", "lg:font-headline_5-prominent-desktop"]
        }, {
          typography: "headline_6",
          isProminent: !0,
          class: ["font-headline_6-prominent-mobile", "lg:font-headline_6-prominent-desktop"]
        }, {
          typography: "body_normal",
          isProminent: !0,
          class: ["font-body_normal-prominent-mobile", "lg:font-body_normal-prominent-desktop"]
        }, {
          typography: "body_tight",
          isProminent: !0,
          class: ["font-body_tight-prominent-mobile", "lg:font-body_tight-prominent-desktop"]
        }, {
          typography: "small_1",
          isProminent: !0,
          class: ["font-small_1-prominent-mobile", "lg:font-small_1-prominent-desktop"]
        }, {
          typography: "small_2",
          isProminent: !0,
          class: ["font-small_2-prominent-mobile", "lg:font-small_2-prominent-desktop"]
        }, {
          typography: "footnote",
          isProminent: !0,
          class: ["font-footnote-prominent-mobile", "lg:font-footnote-prominent-desktop"]
        }]
      });

      function s() {
        return (s = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)({})
                .hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
          })
          .apply(null, arguments)
      }
      let u = (0, n.forwardRef)(({
        typography: e = "body_normal",
        isProminent: t,
        color: r = "basic_black",
        className: o,
        as: l,
        ...u
      }, c) => n.createElement(i, s({
        as: l,
        className: a({
          typography: e,
          isProminent: t,
          color: r,
          class: o
        })
      }, u, {
        ref: c
      })));
      u.displayName = "Text"
    },
    1472: function(e, t, r) {
      r.d(t, {
        X: function() {
          return o
        }
      });
      var n = r(639);
      let o = e => [(0, n.l)("after:absolute after:w-11 after:h-11 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"), e || ""]
    },
    3145: function(e, t, r) {
      r.d(t, {
        default: function() {
          return o.a
        }
      });
      var n = r(8461),
        o = r.n(n)
    },
    7648: function(e, t, r) {
      r.d(t, {
        default: function() {
          return o.a
        }
      });
      var n = r(2972),
        o = r.n(n)
    },
    5449: function(e, t, r) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "addLocale", {
        enumerable: !0,
        get: function() {
          return n
        }
      }), r(8521);
      let n = function(e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        return e
      };
      ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    6958: function(e, t, r) {
      function n(e, t, r, n) {
        return !1
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "getDomainLocale", {
        enumerable: !0,
        get: function() {
          return n
        }
      }), r(8521), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    5878: function(e, t, r) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "Image", {
        enumerable: !0,
        get: function() {
          return _
        }
      });
      let n = r(7043),
        o = r(3099),
        l = r(7437),
        i = o._(r(2265)),
        a = n._(r(4887)),
        s = n._(r(8293)),
        u = r(5346),
        c = r(128),
        d = r(2589);
      r(1765);
      let f = r(5523),
        p = n._(r(5084)),
        g = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1
        };

      function m(e, t, r, n, o, l, i) {
        let a = null == e ? void 0 : e.src;
        e && e["data-loaded-src"] !== a && (e["data-loaded-src"] = a, ("decode" in e ? e.decode() : Promise.resolve())
          .catch(() => {})
          .then(() => {
            if (e.parentElement && e.isConnected) {
              if ("empty" !== t && o(!0), null == r ? void 0 : r.current) {
                let t = new Event("load");
                Object.defineProperty(t, "target", {
                  writable: !1,
                  value: e
                });
                let n = !1,
                  o = !1;
                r.current({
                  ...t,
                  nativeEvent: t,
                  currentTarget: e,
                  target: e,
                  isDefaultPrevented: () => n,
                  isPropagationStopped: () => o,
                  persist: () => {},
                  preventDefault: () => {
                    n = !0, t.preventDefault()
                  },
                  stopPropagation: () => {
                    o = !0, t.stopPropagation()
                  }
                })
              }(null == n ? void 0 : n.current) && n.current(e)
            }
          }))
      }

      function h(e) {
        return i.use ? {
          fetchPriority: e
        } : {
          fetchpriority: e
        }
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let b = (0, i.forwardRef)((e, t) => {
        let {
          src: r,
          srcSet: n,
          sizes: o,
          height: a,
          width: s,
          decoding: u,
          className: c,
          style: d,
          fetchPriority: f,
          placeholder: p,
          loading: g,
          unoptimized: b,
          fill: y,
          onLoadRef: _,
          onLoadingCompleteRef: v,
          setBlurComplete: x,
          setShowAltText: w,
          sizesInput: E,
          onLoad: P,
          onError: R,
          ...S
        } = e;
        return (0, l.jsx)("img", {
          ...S,
          ...h(f),
          loading: g,
          width: s,
          height: a,
          decoding: u,
          "data-nimg": y ? "fill" : "1",
          className: c,
          style: d,
          sizes: o,
          srcSet: n,
          src: r,
          ref: (0, i.useCallback)(e => {
            t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)), e && (R && (e.src = e.src), e.complete && m(e, p, _, v, x, b, E))
          }, [r, p, _, v, x, R, b, E, t]),
          onLoad: e => {
            m(e.currentTarget, p, _, v, x, b, E)
          },
          onError: e => {
            w(!0), "empty" !== p && x(!0), R && R(e)
          }
        })
      });

      function y(e) {
        let {
          isAppRouter: t,
          imgAttributes: r
        } = e, n = {
          as: "image",
          imageSrcSet: r.srcSet,
          imageSizes: r.sizes,
          crossOrigin: r.crossOrigin,
          referrerPolicy: r.referrerPolicy,
          ...h(r.fetchPriority)
        };
        return t && a.default.preload ? (a.default.preload(r.src, n), null) : (0, l.jsx)(s.default, {
          children: (0, l.jsx)("link", {
            rel: "preload",
            href: r.srcSet ? void 0 : r.src,
            ...n
          }, "__nimg-" + r.src + r.srcSet + r.sizes)
        })
      }
      let _ = (0, i.forwardRef)((e, t) => {
        let r = (0, i.useContext)(f.RouterContext),
          n = (0, i.useContext)(d.ImageConfigContext),
          o = (0, i.useMemo)(() => {
            var e;
            let t = g || n || c.imageConfigDefault,
              r = [...t.deviceSizes, ...t.imageSizes].sort((e, t) => e - t),
              o = t.deviceSizes.sort((e, t) => e - t),
              l = null == (e = t.qualities) ? void 0 : e.sort((e, t) => e - t);
            return {
              ...t,
              allSizes: r,
              deviceSizes: o,
              qualities: l
            }
          }, [n]),
          {
            onLoad: a,
            onLoadingComplete: s
          } = e,
          m = (0, i.useRef)(a);
        (0, i.useEffect)(() => {
          m.current = a
        }, [a]);
        let h = (0, i.useRef)(s);
        (0, i.useEffect)(() => {
          h.current = s
        }, [s]);
        let [_, v] = (0, i.useState)(!1), [x, w] = (0, i.useState)(!1), {
          props: E,
          meta: P
        } = (0, u.getImgProps)(e, {
          defaultLoader: p.default,
          imgConf: o,
          blurComplete: _,
          showAltText: x
        });
        return (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(b, {
            ...E,
            unoptimized: P.unoptimized,
            placeholder: P.placeholder,
            fill: P.fill,
            onLoadRef: m,
            onLoadingCompleteRef: h,
            setBlurComplete: v,
            setShowAltText: w,
            sizesInput: e.sizes,
            ref: t
          }), P.priority ? (0, l.jsx)(y, {
            isAppRouter: !r,
            imgAttributes: E
          }) : null]
        })
      });
      ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    2972: function(e, t, r) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
          return v
        }
      });
      let n = r(7043),
        o = r(7437),
        l = n._(r(2265)),
        i = r(5246),
        a = r(3552),
        s = r(7497),
        u = r(3987),
        c = r(5449),
        d = r(5523),
        f = r(1956),
        p = r(6081),
        g = r(6958),
        m = r(1634),
        h = r(4673),
        b = new Set;

      function y(e, t, r, n, o, l) {
        if ("undefined" != typeof window && (l || (0, a.isLocalURL)(t))) {
          if (!n.bypassPrefetchedCheck) {
            let o = t + "%" + r + "%" + (void 0 !== n.locale ? n.locale : "locale" in e ? e.locale : void 0);
            if (b.has(o)) return;
            b.add(o)
          }(async () => l ? e.prefetch(t, o) : e.prefetch(t, r, n))()
          .catch(e => {})
        }
      }

      function _(e) {
        return "string" == typeof e ? e : (0, s.formatUrl)(e)
      }
      let v = l.default.forwardRef(function(e, t) {
        let r, n;
        let {
          href: s,
          as: b,
          children: v,
          prefetch: x = null,
          passHref: w,
          replace: E,
          shallow: P,
          scroll: R,
          locale: S,
          onClick: O,
          onMouseEnter: j,
          onTouchStart: k,
          legacyBehavior: A = !1,
          ...C
        } = e;
        r = v, A && ("string" == typeof r || "number" == typeof r) && (r = (0, o.jsx)("a", {
          children: r
        }));
        let I = l.default.useContext(d.RouterContext),
          N = l.default.useContext(f.AppRouterContext),
          T = null != I ? I : N,
          M = !I,
          z = !1 !== x,
          L = null === x ? h.PrefetchKind.AUTO : h.PrefetchKind.FULL,
          {
            href: D,
            as: U
          } = l.default.useMemo(() => {
            if (!I) {
              let e = _(s);
              return {
                href: e,
                as: b ? _(b) : e
              }
            }
            let [e, t] = (0, i.resolveHref)(I, s, !0);
            return {
              href: e,
              as: b ? (0, i.resolveHref)(I, b) : t || e
            }
          }, [I, s, b]),
          G = l.default.useRef(D),
          F = l.default.useRef(U);
        A && (n = l.default.Children.only(r));
        let V = A ? n && "object" == typeof n && n.ref : t,
          [W, X, $] = (0, p.useIntersection)({
            rootMargin: "200px"
          }),
          B = l.default.useCallback(e => {
            (F.current !== U || G.current !== D) && ($(), F.current = U, G.current = D), W(e), V && ("function" == typeof V ? V(e) : "object" == typeof V && (V.current = e))
          }, [U, V, D, $, W]);
        l.default.useEffect(() => {
          T && X && z && y(T, D, U, {
            locale: S
          }, {
            kind: L
          }, M)
        }, [U, D, X, S, z, null == I ? void 0 : I.locale, T, M, L]);
        let H = {
          ref: B,
          onClick(e) {
            A || "function" != typeof O || O(e), A && n.props && "function" == typeof n.props.onClick && n.props.onClick(e), T && !e.defaultPrevented && function(e, t, r, n, o, i, s, u, c) {
              let {
                nodeName: d
              } = e.currentTarget;
              if ("A" === d.toUpperCase() && (function(e) {
                  let t = e.currentTarget.getAttribute("target");
                  return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                }(e) || !c && !(0, a.isLocalURL)(r))) return;
              e.preventDefault();
              let f = () => {
                let e = null == s || s;
                "beforePopState" in t ? t[o ? "replace" : "push"](r, n, {
                  shallow: i,
                  locale: u,
                  scroll: e
                }) : t[o ? "replace" : "push"](n || r, {
                  scroll: e
                })
              };
              c ? l.default.startTransition(f) : f()
            }(e, T, D, U, E, P, R, S, M)
          },
          onMouseEnter(e) {
            A || "function" != typeof j || j(e), A && n.props && "function" == typeof n.props.onMouseEnter && n.props.onMouseEnter(e), T && (z || !M) && y(T, D, U, {
              locale: S,
              priority: !0,
              bypassPrefetchedCheck: !0
            }, {
              kind: L
            }, M)
          },
          onTouchStart: function(e) {
            A || "function" != typeof k || k(e), A && n.props && "function" == typeof n.props.onTouchStart && n.props.onTouchStart(e), T && (z || !M) && y(T, D, U, {
              locale: S,
              priority: !0,
              bypassPrefetchedCheck: !0
            }, {
              kind: L
            }, M)
          }
        };
        if ((0, u.isAbsoluteUrl)(U)) H.href = U;
        else if (!A || w || "a" === n.type && !("href" in n.props)) {
          let e = void 0 !== S ? S : null == I ? void 0 : I.locale,
            t = (null == I ? void 0 : I.isLocaleDomain) && (0, g.getDomainLocale)(U, e, null == I ? void 0 : I.locales, null == I ? void 0 : I.domainLocales);
          H.href = t || (0, m.addBasePath)((0, c.addLocale)(U, e, null == I ? void 0 : I.defaultLocale))
        }
        return A ? l.default.cloneElement(n, H) : (0, o.jsx)("a", {
          ...C,
          ...H,
          children: r
        })
      });
      ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    3515: function(e, t) {
      Object.defineProperty(t, "__esModule", {
          value: !0
        }),
        function(e, t) {
          for (var r in t) Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }(t, {
          cancelIdleCallback: function() {
            return n
          },
          requestIdleCallback: function() {
            return r
          }
        });
      let r = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
          let t = Date.now();
          return self.setTimeout(function() {
            e({
              didTimeout: !1,
              timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - t))
              }
            })
          }, 1)
        },
        n = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
          return clearTimeout(e)
        };
      ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    5246: function(e, t, r) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "resolveHref", {
        enumerable: !0,
        get: function() {
          return d
        }
      });
      let n = r(8637),
        o = r(7497),
        l = r(7053),
        i = r(3987),
        a = r(8521),
        s = r(3552),
        u = r(6279),
        c = r(7205);

      function d(e, t, r) {
        let d;
        let f = "string" == typeof t ? t : (0, o.formatWithValidation)(t),
          p = f.match(/^[a-zA-Z]{1,}:\/\//),
          g = p ? f.slice(p[0].length) : f;
        if ((g.split("?", 1)[0] || "")
          .match(/(\/\/|\\)/)) {
          console.error("Invalid href '" + f + "' passed to next/router in page: '" + e.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
          let t = (0, i.normalizeRepeatedSlashes)(g);
          f = (p ? p[0] : "") + t
        }
        if (!(0, s.isLocalURL)(f)) return r ? [f] : f;
        try {
          d = new URL(f.startsWith("#") ? e.asPath : e.pathname, "http://n")
        } catch (e) {
          d = new URL("/", "http://n")
        }
        try {
          let e = new URL(f, d);
          e.pathname = (0, a.normalizePathTrailingSlash)(e.pathname);
          let t = "";
          if ((0, u.isDynamicRoute)(e.pathname) && e.searchParams && r) {
            let r = (0, n.searchParamsToUrlQuery)(e.searchParams),
              {
                result: i,
                params: a
              } = (0, c.interpolateAs)(e.pathname, e.pathname, r);
            i && (t = (0, o.formatWithValidation)({
              pathname: i,
              hash: e.hash,
              query: (0, l.omit)(r, a)
            }))
          }
          let i = e.origin === d.origin ? e.href.slice(e.origin.length) : e.href;
          return r ? [i, t || i] : i
        } catch (e) {
          return r ? [f] : f
        }
      }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    6081: function(e, t, r) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "useIntersection", {
        enumerable: !0,
        get: function() {
          return s
        }
      });
      let n = r(2265),
        o = r(3515),
        l = "function" == typeof IntersectionObserver,
        i = new Map,
        a = [];

      function s(e) {
        let {
          rootRef: t,
          rootMargin: r,
          disabled: s
        } = e, u = s || !l, [c, d] = (0, n.useState)(!1), f = (0, n.useRef)(null), p = (0, n.useCallback)(e => {
          f.current = e
        }, []);
        return (0, n.useEffect)(() => {
          if (l) {
            if (u || c) return;
            let e = f.current;
            if (e && e.tagName) return function(e, t, r) {
              let {
                id: n,
                observer: o,
                elements: l
              } = function(e) {
                let t;
                let r = {
                    root: e.root || null,
                    margin: e.rootMargin || ""
                  },
                  n = a.find(e => e.root === r.root && e.margin === r.margin);
                if (n && (t = i.get(n))) return t;
                let o = new Map;
                return t = {
                  id: r,
                  observer: new IntersectionObserver(e => {
                    e.forEach(e => {
                      let t = o.get(e.target),
                        r = e.isIntersecting || e.intersectionRatio > 0;
                      t && r && t(r)
                    })
                  }, e),
                  elements: o
                }, a.push(r), i.set(r, t), t
              }(r);
              return l.set(e, t), o.observe(e),
                function() {
                  if (l.delete(e), o.unobserve(e), 0 === l.size) {
                    o.disconnect(), i.delete(n);
                    let e = a.findIndex(e => e.root === n.root && e.margin === n.margin);
                    e > -1 && a.splice(e, 1)
                  }
                }
            }(e, e => e && d(e), {
              root: null == t ? void 0 : t.current,
              rootMargin: r
            })
          } else if (!c) {
            let e = (0, o.requestIdleCallback)(() => d(!0));
            return () => (0, o.cancelIdleCallback)(e)
          }
        }, [u, r, t, c, f.current]), [p, c, (0, n.useCallback)(() => {
          d(!1)
        }, [])]
      }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    9259: function(e, t) {
      Object.defineProperty(t, "__esModule", {
          value: !0
        }),
        function(e, t) {
          for (var r in t) Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }(t, {
          ACTION_SUFFIX: function() {
            return s
          },
          APP_DIR_ALIAS: function() {
            return O
          },
          CACHE_ONE_YEAR: function() {
            return v
          },
          DOT_NEXT_ALIAS: function() {
            return R
          },
          ESLINT_DEFAULT_DIRS: function() {
            return $
          },
          GSP_NO_RETURNED_VALUE: function() {
            return U
          },
          GSSP_COMPONENT_MEMBER_ERROR: function() {
            return V
          },
          GSSP_NO_RETURNED_VALUE: function() {
            return G
          },
          INSTRUMENTATION_HOOK_FILENAME: function() {
            return E
          },
          MIDDLEWARE_FILENAME: function() {
            return x
          },
          MIDDLEWARE_LOCATION_REGEXP: function() {
            return w
          },
          NEXT_BODY_SUFFIX: function() {
            return d
          },
          NEXT_CACHE_IMPLICIT_TAG_ID: function() {
            return _
          },
          NEXT_CACHE_REVALIDATED_TAGS_HEADER: function() {
            return g
          },
          NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function() {
            return m
          },
          NEXT_CACHE_SOFT_TAGS_HEADER: function() {
            return p
          },
          NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function() {
            return y
          },
          NEXT_CACHE_TAGS_HEADER: function() {
            return f
          },
          NEXT_CACHE_TAG_MAX_ITEMS: function() {
            return h
          },
          NEXT_CACHE_TAG_MAX_LENGTH: function() {
            return b
          },
          NEXT_DATA_SUFFIX: function() {
            return u
          },
          NEXT_INTERCEPTION_MARKER_PREFIX: function() {
            return n
          },
          NEXT_META_SUFFIX: function() {
            return c
          },
          NEXT_QUERY_PARAM_PREFIX: function() {
            return r
          },
          NON_STANDARD_NODE_ENV: function() {
            return W
          },
          PAGES_DIR_ALIAS: function() {
            return P
          },
          PRERENDER_REVALIDATE_HEADER: function() {
            return o
          },
          PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function() {
            return l
          },
          PUBLIC_DIR_MIDDLEWARE_CONFLICT: function() {
            return N
          },
          ROOT_DIR_ALIAS: function() {
            return S
          },
          RSC_ACTION_CLIENT_WRAPPER_ALIAS: function() {
            return I
          },
          RSC_ACTION_ENCRYPTION_ALIAS: function() {
            return C
          },
          RSC_ACTION_PROXY_ALIAS: function() {
            return A
          },
          RSC_ACTION_VALIDATE_ALIAS: function() {
            return k
          },
          RSC_MOD_REF_PROXY_ALIAS: function() {
            return j
          },
          RSC_PREFETCH_SUFFIX: function() {
            return i
          },
          RSC_SUFFIX: function() {
            return a
          },
          SERVER_PROPS_EXPORT_ERROR: function() {
            return D
          },
          SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function() {
            return M
          },
          SERVER_PROPS_SSG_CONFLICT: function() {
            return z
          },
          SERVER_RUNTIME: function() {
            return B
          },
          SSG_FALLBACK_EXPORT_ERROR: function() {
            return X
          },
          SSG_GET_INITIAL_PROPS_CONFLICT: function() {
            return T
          },
          STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function() {
            return L
          },
          UNSTABLE_REVALIDATE_RENAME_ERROR: function() {
            return F
          },
          WEBPACK_LAYERS: function() {
            return Y
          },
          WEBPACK_RESOURCE_QUERIES: function() {
            return K
          }
        });
      let r = "nxtP",
        n = "nxtI",
        o = "x-prerender-revalidate",
        l = "x-prerender-revalidate-if-generated",
        i = ".prefetch.rsc",
        a = ".rsc",
        s = ".action",
        u = ".json",
        c = ".meta",
        d = ".body",
        f = "x-next-cache-tags",
        p = "x-next-cache-soft-tags",
        g = "x-next-revalidated-tags",
        m = "x-next-revalidate-tag-token",
        h = 128,
        b = 256,
        y = 1024,
        _ = "_N_T_",
        v = 31536e3,
        x = "middleware",
        w = `(?:src/)?${x}`,
        E = "instrumentation",
        P = "private-next-pages",
        R = "private-dot-next",
        S = "private-next-root-dir",
        O = "private-next-app-dir",
        j = "private-next-rsc-mod-ref-proxy",
        k = "private-next-rsc-action-validate",
        A = "private-next-rsc-server-reference",
        C = "private-next-rsc-action-encryption",
        I = "private-next-rsc-action-client-wrapper",
        N = "You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict",
        T = "You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps",
        M = "You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.",
        z = "You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps",
        L = "can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props",
        D = "pages with `getServerSideProps` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export",
        U = "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?",
        G = "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?",
        F = "The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.",
        V = "can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member",
        W = 'You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env',
        X = "Pages with `fallback` enabled in `getStaticPaths` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export",
        $ = ["app", "pages", "components", "lib", "src"],
        B = {
          edge: "edge",
          experimentalEdge: "experimental-edge",
          nodejs: "nodejs"
        },
        H = {
          shared: "shared",
          reactServerComponents: "rsc",
          serverSideRendering: "ssr",
          actionBrowser: "action-browser",
          api: "api",
          middleware: "middleware",
          instrument: "instrument",
          edgeAsset: "edge-asset",
          appPagesBrowser: "app-pages-browser",
          appMetadataRoute: "app-metadata-route",
          appRouteHandler: "app-route-handler"
        },
        Y = {
          ...H,
          GROUP: {
            serverOnly: [H.reactServerComponents, H.actionBrowser, H.appMetadataRoute, H.appRouteHandler, H.instrument],
            clientOnly: [H.serverSideRendering, H.appPagesBrowser],
            nonClientServerTarget: [H.middleware, H.api],
            app: [H.reactServerComponents, H.actionBrowser, H.appMetadataRoute, H.appRouteHandler, H.serverSideRendering, H.appPagesBrowser, H.shared, H.instrument]
          }
        },
        K = {
          edgeSSREntry: "__next_edge_ssr_entry__",
          metadata: "__next_metadata__",
          metadataRoute: "__next_metadata_route__",
          metadataImageMeta: "__next_metadata_image_meta__"
        }
    },
    1436: function(e, t, r) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "AmpStateContext", {
        enumerable: !0,
        get: function() {
          return n
        }
      });
      let n = r(7043)
        ._(r(2265))
        .default.createContext({})
    },
    3964: function(e, t) {
      function r(e) {
        let {
          ampFirst: t = !1,
          hybrid: r = !1,
          hasQuery: n = !1
        } = void 0 === e ? {} : e;
        return t || r && n
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "isInAmpMode", {
        enumerable: !0,
        get: function() {
          return r
        }
      })
    },
    42: function(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "escapeStringRegexp", {
        enumerable: !0,
        get: function() {
          return o
        }
      });
      let r = /[|\\{}()[\]^$+*?.-]/,
        n = /[|\\{}()[\]^$+*?.-]/g;

      function o(e) {
        return r.test(e) ? e.replace(n, "\\$&") : e
      }
    },
    5346: function(e, t, r) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "getImgProps", {
        enumerable: !0,
        get: function() {
          return a
        }
      }), r(1765);
      let n = r(6496),
        o = r(128);

      function l(e) {
        return void 0 !== e.default
      }

      function i(e) {
        return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
      }

      function a(e, t) {
        var r, a;
        let s, u, c, {
            src: d,
            sizes: f,
            unoptimized: p = !1,
            priority: g = !1,
            loading: m,
            className: h,
            quality: b,
            width: y,
            height: _,
            fill: v = !1,
            style: x,
            overrideSrc: w,
            onLoad: E,
            onLoadingComplete: P,
            placeholder: R = "empty",
            blurDataURL: S,
            fetchPriority: O,
            decoding: j = "async",
            layout: k,
            objectFit: A,
            objectPosition: C,
            lazyBoundary: I,
            lazyRoot: N,
            ...T
          } = e,
          {
            imgConf: M,
            showAltText: z,
            blurComplete: L,
            defaultLoader: D
          } = t,
          U = M || o.imageConfigDefault;
        if ("allSizes" in U) s = U;
        else {
          let e = [...U.deviceSizes, ...U.imageSizes].sort((e, t) => e - t),
            t = U.deviceSizes.sort((e, t) => e - t),
            n = null == (r = U.qualities) ? void 0 : r.sort((e, t) => e - t);
          s = {
            ...U,
            allSizes: e,
            deviceSizes: t,
            qualities: n
          }
        }
        if (void 0 === D) throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
        let G = T.loader || D;
        delete T.loader, delete T.srcSet;
        let F = "__next_img_default" in G;
        if (F) {
          if ("custom" === s.loader) throw Error('Image with src "' + d + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
        } else {
          let e = G;
          G = t => {
            let {
              config: r,
              ...n
            } = t;
            return e(n)
          }
        }
        if (k) {
          "fill" === k && (v = !0);
          let e = {
            intrinsic: {
              maxWidth: "100%",
              height: "auto"
            },
            responsive: {
              width: "100%",
              height: "auto"
            }
          } [k];
          e && (x = {
            ...x,
            ...e
          });
          let t = {
            responsive: "100vw",
            fill: "100vw"
          } [k];
          t && !f && (f = t)
        }
        let V = "",
          W = i(y),
          X = i(_);
        if ("object" == typeof(a = d) && (l(a) || void 0 !== a.src)) {
          let e = l(d) ? d.default : d;
          if (!e.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e));
          if (!e.height || !e.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e));
          if (u = e.blurWidth, c = e.blurHeight, S = S || e.blurDataURL, V = e.src, !v) {
            if (W || X) {
              if (W && !X) {
                let t = W / e.width;
                X = Math.round(e.height * t)
              } else if (!W && X) {
                let t = X / e.height;
                W = Math.round(e.width * t)
              }
            } else W = e.width, X = e.height
          }
        }
        let $ = !g && ("lazy" === m || void 0 === m);
        (!(d = "string" == typeof d ? d : V) || d.startsWith("data:") || d.startsWith("blob:")) && (p = !0, $ = !1), s.unoptimized && (p = !0), F && d.endsWith(".svg") && !s.dangerouslyAllowSVG && (p = !0), g && (O = "high");
        let B = i(b),
          H = Object.assign(v ? {
            position: "absolute",
            height: "100%",
            width: "100%",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            objectFit: A,
            objectPosition: C
          } : {}, z ? {} : {
            color: "transparent"
          }, x),
          Y = L || "empty" === R ? null : "blur" === R ? 'url("data:image/svg+xml;charset=utf-8,' + (0, n.getImageBlurSvg)({
            widthInt: W,
            heightInt: X,
            blurWidth: u,
            blurHeight: c,
            blurDataURL: S || "",
            objectFit: H.objectFit
          }) + '")' : 'url("' + R + '")',
          K = Y ? {
            backgroundSize: H.objectFit || "cover",
            backgroundPosition: H.objectPosition || "50% 50%",
            backgroundRepeat: "no-repeat",
            backgroundImage: Y
          } : {},
          q = function(e) {
            let {
              config: t,
              src: r,
              unoptimized: n,
              width: o,
              quality: l,
              sizes: i,
              loader: a
            } = e;
            if (n) return {
              src: r,
              srcSet: void 0,
              sizes: void 0
            };
            let {
              widths: s,
              kind: u
            } = function(e, t, r) {
              let {
                deviceSizes: n,
                allSizes: o
              } = e;
              if (r) {
                let e = /(^|\s)(1?\d?\d)vw/g,
                  t = [];
                for (let n; n = e.exec(r); n) t.push(parseInt(n[2]));
                if (t.length) {
                  let e = .01 * Math.min(...t);
                  return {
                    widths: o.filter(t => t >= n[0] * e),
                    kind: "w"
                  }
                }
                return {
                  widths: o,
                  kind: "w"
                }
              }
              return "number" != typeof t ? {
                widths: n,
                kind: "w"
              } : {
                widths: [...new Set([t, 2 * t].map(e => o.find(t => t >= e) || o[o.length - 1]))],
                kind: "x"
              }
            }(t, o, i), c = s.length - 1;
            return {
              sizes: i || "w" !== u ? i : "100vw",
              srcSet: s.map((e, n) => a({
                  config: t,
                  src: r,
                  quality: l,
                  width: e
                }) + " " + ("w" === u ? e : n + 1) + u)
                .join(", "),
              src: a({
                config: t,
                src: r,
                quality: l,
                width: s[c]
              })
            }
          }({
            config: s,
            src: d,
            unoptimized: p,
            width: W,
            quality: B,
            sizes: f,
            loader: G
          });
        return {
          props: {
            ...T,
            loading: $ ? "lazy" : m,
            fetchPriority: O,
            width: W,
            height: X,
            decoding: j,
            className: h,
            style: {
              ...H,
              ...K
            },
            sizes: q.sizes,
            srcSet: q.srcSet,
            src: w || q.src
          },
          meta: {
            unoptimized: p,
            priority: g,
            placeholder: R,
            fill: v
          }
        }
      }
    },
    8293: function(e, t, r) {
      Object.defineProperty(t, "__esModule", {
          value: !0
        }),
        function(e, t) {
          for (var r in t) Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }(t, {
          default: function() {
            return m
          },
          defaultHead: function() {
            return d
          }
        });
      let n = r(7043),
        o = r(3099),
        l = r(7437),
        i = o._(r(2265)),
        a = n._(r(7421)),
        s = r(1436),
        u = r(8701),
        c = r(3964);

      function d(e) {
        void 0 === e && (e = !1);
        let t = [(0, l.jsx)("meta", {
          charSet: "utf-8"
        })];
        return e || t.push((0, l.jsx)("meta", {
          name: "viewport",
          content: "width=device-width"
        })), t
      }

      function f(e, t) {
        return "string" == typeof t || "number" == typeof t ? e : t.type === i.default.Fragment ? e.concat(i.default.Children.toArray(t.props.children)
          .reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
      }
      r(1765);
      let p = ["name", "httpEquiv", "charSet", "itemProp"];

      function g(e, t) {
        let {
          inAmpMode: r
        } = t;
        return e.reduce(f, [])
          .reverse()
          .concat(d(r)
            .reverse())
          .filter(function() {
            let e = new Set,
              t = new Set,
              r = new Set,
              n = {};
            return o => {
              let l = !0,
                i = !1;
              if (o.key && "number" != typeof o.key && o.key.indexOf("$") > 0) {
                i = !0;
                let t = o.key.slice(o.key.indexOf("$") + 1);
                e.has(t) ? l = !1 : e.add(t)
              }
              switch (o.type) {
                case "title":
                case "base":
                  t.has(o.type) ? l = !1 : t.add(o.type);
                  break;
                case "meta":
                  for (let e = 0, t = p.length; e < t; e++) {
                    let t = p[e];
                    if (o.props.hasOwnProperty(t)) {
                      if ("charSet" === t) r.has(t) ? l = !1 : r.add(t);
                      else {
                        let e = o.props[t],
                          r = n[t] || new Set;
                        ("name" !== t || !i) && r.has(e) ? l = !1 : (r.add(e), n[t] = r)
                      }
                    }
                  }
              }
              return l
            }
          }())
          .reverse()
          .map((e, t) => {
            let n = e.key || t;
            if (!r && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(t => e.props.href.startsWith(t))) {
              let t = {
                ...e.props || {}
              };
              return t["data-href"] = t.href, t.href = void 0, t["data-optimized-fonts"] = !0, i.default.cloneElement(e, t)
            }
            return i.default.cloneElement(e, {
              key: n
            })
          })
      }
      let m = function(e) {
        let {
          children: t
        } = e, r = (0, i.useContext)(s.AmpStateContext), n = (0, i.useContext)(u.HeadManagerContext);
        return (0, l.jsx)(a.default, {
          reduceComponentsToState: g,
          headManager: n,
          inAmpMode: (0, c.isInAmpMode)(r),
          children: t
        })
      };
      ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    6496: function(e, t) {
      function r(e) {
        let {
          widthInt: t,
          heightInt: r,
          blurWidth: n,
          blurHeight: o,
          blurDataURL: l,
          objectFit: i
        } = e, a = n ? 40 * n : t, s = o ? 40 * o : r, u = a && s ? "viewBox='0 0 " + a + " " + s + "'" : "";
        return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + u + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (u ? "none" : "contain" === i ? "xMidYMid" : "cover" === i ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + l + "'/%3E%3C/svg%3E"
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "getImageBlurSvg", {
        enumerable: !0,
        get: function() {
          return r
        }
      })
    },
    2589: function(e, t, r) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "ImageConfigContext", {
        enumerable: !0,
        get: function() {
          return l
        }
      });
      let n = r(7043)
        ._(r(2265)),
        o = r(128),
        l = n.default.createContext(o.imageConfigDefault)
    },
    128: function(e, t) {
      Object.defineProperty(t, "__esModule", {
          value: !0
        }),
        function(e, t) {
          for (var r in t) Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }(t, {
          VALID_LOADERS: function() {
            return r
          },
          imageConfigDefault: function() {
            return n
          }
        });
      let r = ["default", "imgix", "cloudinary", "akamai", "custom"],
        n = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "inline",
          localPatterns: void 0,
          remotePatterns: [],
          qualities: void 0,
          unoptimized: !1
        }
    },
    8461: function(e, t, r) {
      Object.defineProperty(t, "__esModule", {
          value: !0
        }),
        function(e, t) {
          for (var r in t) Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }(t, {
          default: function() {
            return s
          },
          getImageProps: function() {
            return a
          }
        });
      let n = r(7043),
        o = r(5346),
        l = r(5878),
        i = n._(r(5084));

      function a(e) {
        let {
          props: t
        } = (0, o.getImgProps)(e, {
          defaultLoader: i.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
          }
        });
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
        return {
          props: t
        }
      }
      let s = l.Image
    },
    5084: function(e, t) {
      function r(e) {
        var t;
        let {
          config: r,
          src: n,
          width: o,
          quality: l
        } = e, i = l || (null == (t = r.qualities) ? void 0 : t.reduce((e, t) => Math.abs(t - 75) < Math.abs(e - 75) ? t : e)) || 75;
        return r.path + "?url=" + encodeURIComponent(n) + "&w=" + o + "&q=" + i
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
          return n
        }
      }), r.__next_img_default = !0;
      let n = r
    },
    5523: function(e, t, r) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "RouterContext", {
        enumerable: !0,
        get: function() {
          return n
        }
      });
      let n = r(7043)
        ._(r(2265))
        .default.createContext(null)
    },
    7497: function(e, t, r) {
      Object.defineProperty(t, "__esModule", {
          value: !0
        }),
        function(e, t) {
          for (var r in t) Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }(t, {
          formatUrl: function() {
            return l
          },
          formatWithValidation: function() {
            return a
          },
          urlObjectKeys: function() {
            return i
          }
        });
      let n = r(3099)
        ._(r(8637)),
        o = /https?|ftp|gopher|file/;

      function l(e) {
        let {
          auth: t,
          hostname: r
        } = e, l = e.protocol || "", i = e.pathname || "", a = e.hash || "", s = e.query || "", u = !1;
        t = t ? encodeURIComponent(t)
          .replace(/%3A/i, ":") + "@" : "", e.host ? u = t + e.host : r && (u = t + (~r.indexOf(":") ? "[" + r + "]" : r), e.port && (u += ":" + e.port)), s && "object" == typeof s && (s = String(n.urlQueryToSearchParams(s)));
        let c = e.search || s && "?" + s || "";
        return l && !l.endsWith(":") && (l += ":"), e.slashes || (!l || o.test(l)) && !1 !== u ? (u = "//" + (u || ""), i && "/" !== i[0] && (i = "/" + i)) : u || (u = ""), a && "#" !== a[0] && (a = "#" + a), c && "?" !== c[0] && (c = "?" + c), "" + l + u + (i = i.replace(/[?#]/g, encodeURIComponent)) + (c = c.replace("#", "%23")) + a
      }
      let i = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

      function a(e) {
        return l(e)
      }
    },
    6279: function(e, t, r) {
      Object.defineProperty(t, "__esModule", {
          value: !0
        }),
        function(e, t) {
          for (var r in t) Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }(t, {
          getSortedRoutes: function() {
            return n.getSortedRoutes
          },
          isDynamicRoute: function() {
            return o.isDynamicRoute
          }
        });
      let n = r(4777),
        o = r(8104)
    },
    7205: function(e, t, r) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "interpolateAs", {
        enumerable: !0,
        get: function() {
          return l
        }
      });
      let n = r(4199),
        o = r(9964);

      function l(e, t, r) {
        let l = "",
          i = (0, o.getRouteRegex)(e),
          a = i.groups,
          s = (t !== e ? (0, n.getRouteMatcher)(i)(t) : "") || r;
        l = e;
        let u = Object.keys(a);
        return u.every(e => {
          let t = s[e] || "",
            {
              repeat: r,
              optional: n
            } = a[e],
            o = "[" + (r ? "..." : "") + e + "]";
          return n && (o = (t ? "" : "/") + "[" + o + "]"), r && !Array.isArray(t) && (t = [t]), (n || e in s) && (l = l.replace(o, r ? t.map(e => encodeURIComponent(e))
            .join("/") : encodeURIComponent(t)) || "/")
        }) || (l = ""), {
          params: u,
          result: l
        }
      }
    },
    8104: function(e, t, r) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "isDynamicRoute", {
        enumerable: !0,
        get: function() {
          return l
        }
      });
      let n = r(1182),
        o = /\/\[[^/]+?\](?=\/|$)/;

      function l(e) {
        return (0, n.isInterceptionRouteAppPath)(e) && (e = (0, n.extractInterceptionRouteInformation)(e)
          .interceptedRoute), o.test(e)
      }
    },
    3552: function(e, t, r) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "isLocalURL", {
        enumerable: !0,
        get: function() {
          return l
        }
      });
      let n = r(3987),
        o = r(1283);

      function l(e) {
        if (!(0, n.isAbsoluteUrl)(e)) return !0;
        try {
          let t = (0, n.getLocationOrigin)(),
            r = new URL(e, t);
          return r.origin === t && (0, o.hasBasePath)(r.pathname)
        } catch (e) {
          return !1
        }
      }
    },
    7053: function(e, t) {
      function r(e, t) {
        let r = {};
        return Object.keys(e)
          .forEach(n => {
            t.includes(n) || (r[n] = e[n])
          }), r
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "omit", {
        enumerable: !0,
        get: function() {
          return r
        }
      })
    },
    8637: function(e, t) {
      function r(e) {
        let t = {};
        return e.forEach((e, r) => {
          void 0 === t[r] ? t[r] = e : Array.isArray(t[r]) ? t[r].push(e) : t[r] = [t[r], e]
        }), t
      }

      function n(e) {
        return "string" != typeof e && ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
      }

      function o(e) {
        let t = new URLSearchParams;
        return Object.entries(e)
          .forEach(e => {
            let [r, o] = e;
            Array.isArray(o) ? o.forEach(e => t.append(r, n(e))) : t.set(r, n(o))
          }), t
      }

      function l(e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        return r.forEach(t => {
          Array.from(t.keys())
            .forEach(t => e.delete(t)), t.forEach((t, r) => e.append(r, t))
        }), e
      }
      Object.defineProperty(t, "__esModule", {
          value: !0
        }),
        function(e, t) {
          for (var r in t) Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }(t, {
          assign: function() {
            return l
          },
          searchParamsToUrlQuery: function() {
            return r
          },
          urlQueryToSearchParams: function() {
            return o
          }
        })
    },
    4199: function(e, t, r) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "getRouteMatcher", {
        enumerable: !0,
        get: function() {
          return o
        }
      });
      let n = r(3987);

      function o(e) {
        let {
          re: t,
          groups: r
        } = e;
        return e => {
          let o = t.exec(e);
          if (!o) return !1;
          let l = e => {
              try {
                return decodeURIComponent(e)
              } catch (e) {
                throw new n.DecodeError("failed to decode param")
              }
            },
            i = {};
          return Object.keys(r)
            .forEach(e => {
              let t = r[e],
                n = o[t.pos];
              void 0 !== n && (i[e] = ~n.indexOf("/") ? n.split("/")
                .map(e => l(e)) : t.repeat ? [l(n)] : l(n))
            }), i
        }
      }
    },
    9964: function(e, t, r) {
      Object.defineProperty(t, "__esModule", {
          value: !0
        }),
        function(e, t) {
          for (var r in t) Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }(t, {
          getNamedMiddlewareRegex: function() {
            return p
          },
          getNamedRouteRegex: function() {
            return f
          },
          getRouteRegex: function() {
            return u
          },
          parseParameter: function() {
            return a
          }
        });
      let n = r(9259),
        o = r(1182),
        l = r(42),
        i = r(6674);

      function a(e) {
        let t = e.startsWith("[") && e.endsWith("]");
        t && (e = e.slice(1, -1));
        let r = e.startsWith("...");
        return r && (e = e.slice(3)), {
          key: e,
          repeat: r,
          optional: t
        }
      }

      function s(e) {
        let t = (0, i.removeTrailingSlash)(e)
          .slice(1)
          .split("/"),
          r = {},
          n = 1;
        return {
          parameterizedRoute: t.map(e => {
              let t = o.INTERCEPTION_ROUTE_MARKERS.find(t => e.startsWith(t)),
                i = e.match(/\[((?:\[.*\])|.+)\]/);
              if (t && i) {
                let {
                  key: e,
                  optional: o,
                  repeat: s
                } = a(i[1]);
                return r[e] = {
                  pos: n++,
                  repeat: s,
                  optional: o
                }, "/" + (0, l.escapeStringRegexp)(t) + "([^/]+?)"
              }
              if (!i) return "/" + (0, l.escapeStringRegexp)(e);
              {
                let {
                  key: e,
                  repeat: t,
                  optional: o
                } = a(i[1]);
                return r[e] = {
                  pos: n++,
                  repeat: t,
                  optional: o
                }, t ? o ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)"
              }
            })
            .join(""),
          groups: r
        }
      }

      function u(e) {
        let {
          parameterizedRoute: t,
          groups: r
        } = s(e);
        return {
          re: RegExp("^" + t + "(?:/)?$"),
          groups: r
        }
      }

      function c(e) {
        let {
          interceptionMarker: t,
          getSafeRouteKey: r,
          segment: n,
          routeKeys: o,
          keyPrefix: i
        } = e, {
          key: s,
          optional: u,
          repeat: c
        } = a(n), d = s.replace(/\W/g, "");
        i && (d = "" + i + d);
        let f = !1;
        (0 === d.length || d.length > 30) && (f = !0), isNaN(parseInt(d.slice(0, 1))) || (f = !0), f && (d = r()), i ? o[d] = "" + i + s : o[d] = s;
        let p = t ? (0, l.escapeStringRegexp)(t) : "";
        return c ? u ? "(?:/" + p + "(?<" + d + ">.+?))?" : "/" + p + "(?<" + d + ">.+?)" : "/" + p + "(?<" + d + ">[^/]+?)"
      }

      function d(e, t) {
        let r;
        let a = (0, i.removeTrailingSlash)(e)
          .slice(1)
          .split("/"),
          s = (r = 0, () => {
            let e = "",
              t = ++r;
            for (; t > 0;) e += String.fromCharCode(97 + (t - 1) % 26), t = Math.floor((t - 1) / 26);
            return e
          }),
          u = {};
        return {
          namedParameterizedRoute: a.map(e => {
              let r = o.INTERCEPTION_ROUTE_MARKERS.some(t => e.startsWith(t)),
                i = e.match(/\[((?:\[.*\])|.+)\]/);
              if (r && i) {
                let [r] = e.split(i[0]);
                return c({
                  getSafeRouteKey: s,
                  interceptionMarker: r,
                  segment: i[1],
                  routeKeys: u,
                  keyPrefix: t ? n.NEXT_INTERCEPTION_MARKER_PREFIX : void 0
                })
              }
              return i ? c({
                getSafeRouteKey: s,
                segment: i[1],
                routeKeys: u,
                keyPrefix: t ? n.NEXT_QUERY_PARAM_PREFIX : void 0
              }) : "/" + (0, l.escapeStringRegexp)(e)
            })
            .join(""),
          routeKeys: u
        }
      }

      function f(e, t) {
        let r = d(e, t);
        return {
          ...u(e),
          namedRegex: "^" + r.namedParameterizedRoute + "(?:/)?$",
          routeKeys: r.routeKeys
        }
      }

      function p(e, t) {
        let {
          parameterizedRoute: r
        } = s(e), {
          catchAll: n = !0
        } = t;
        if ("/" === r) return {
          namedRegex: "^/" + (n ? ".*" : "") + "$"
        };
        let {
          namedParameterizedRoute: o
        } = d(e, !1);
        return {
          namedRegex: "^" + o + (n ? "(?:(/.*)?)" : "") + "$"
        }
      }
    },
    4777: function(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "getSortedRoutes", {
        enumerable: !0,
        get: function() {
          return n
        }
      });
      class r {
        insert(e) {
          this._insert(e.split("/")
            .filter(Boolean), [], !1)
        }
        smoosh() {
          return this._smoosh()
        }
        _smoosh(e) {
          void 0 === e && (e = "/");
          let t = [...this.children.keys()].sort();
          null !== this.slugName && t.splice(t.indexOf("[]"), 1), null !== this.restSlugName && t.splice(t.indexOf("[...]"), 1), null !== this.optionalRestSlugName && t.splice(t.indexOf("[[...]]"), 1);
          let r = t.map(t => this.children.get(t)
              ._smoosh("" + e + t + "/"))
            .reduce((e, t) => [...e, ...t], []);
          if (null !== this.slugName && r.push(...this.children.get("[]")
              ._smoosh(e + "[" + this.slugName + "]/")), !this.placeholder) {
            let t = "/" === e ? "/" : e.slice(0, -1);
            if (null != this.optionalRestSlugName) throw Error('You cannot define a route with the same specificity as a optional catch-all route ("' + t + '" and "' + t + "[[..." + this.optionalRestSlugName + ']]").');
            r.unshift(t)
          }
          return null !== this.restSlugName && r.push(...this.children.get("[...]")
            ._smoosh(e + "[..." + this.restSlugName + "]/")), null !== this.optionalRestSlugName && r.push(...this.children.get("[[...]]")
            ._smoosh(e + "[[..." + this.optionalRestSlugName + "]]/")), r
        }
        _insert(e, t, n) {
          if (0 === e.length) {
            this.placeholder = !1;
            return
          }
          if (n) throw Error("Catch-all must be the last part of the URL.");
          let o = e[0];
          if (o.startsWith("[") && o.endsWith("]")) {
            let r = o.slice(1, -1),
              i = !1;
            if (r.startsWith("[") && r.endsWith("]") && (r = r.slice(1, -1), i = !0), r.startsWith("...") && (r = r.substring(3), n = !0), r.startsWith("[") || r.endsWith("]")) throw Error("Segment names may not start or end with extra brackets ('" + r + "').");
            if (r.startsWith(".")) throw Error("Segment names may not start with erroneous periods ('" + r + "').");

            function l(e, r) {
              if (null !== e && e !== r) throw Error("You cannot use different slug names for the same dynamic path ('" + e + "' !== '" + r + "').");
              t.forEach(e => {
                if (e === r) throw Error('You cannot have the same slug name "' + r + '" repeat within a single dynamic path');
                if (e.replace(/\W/g, "") === o.replace(/\W/g, "")) throw Error('You cannot have the slug names "' + e + '" and "' + r + '" differ only by non-word symbols within a single dynamic path')
              }), t.push(r)
            }
            if (n) {
              if (i) {
                if (null != this.restSlugName) throw Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + e[0] + '" ).');
                l(this.optionalRestSlugName, r), this.optionalRestSlugName = r, o = "[[...]]"
              } else {
                if (null != this.optionalRestSlugName) throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + e[0] + '").');
                l(this.restSlugName, r), this.restSlugName = r, o = "[...]"
              }
            } else {
              if (i) throw Error('Optional route parameters are not yet supported ("' + e[0] + '").');
              l(this.slugName, r), this.slugName = r, o = "[]"
            }
          }
          this.children.has(o) || this.children.set(o, new r), this.children.get(o)
            ._insert(e.slice(1), t, n)
        }
        constructor() {
          this.placeholder = !0, this.children = new Map, this.slugName = null, this.restSlugName = null, this.optionalRestSlugName = null
        }
      }

      function n(e) {
        let t = new r;
        return e.forEach(e => t.insert(e)), t.smoosh()
      }
    },
    7421: function(e, t, r) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
          return a
        }
      });
      let n = r(2265),
        o = "undefined" == typeof window,
        l = o ? () => {} : n.useLayoutEffect,
        i = o ? () => {} : n.useEffect;

      function a(e) {
        let {
          headManager: t,
          reduceComponentsToState: r
        } = e;

        function a() {
          if (t && t.mountedInstances) {
            let o = n.Children.toArray(Array.from(t.mountedInstances)
              .filter(Boolean));
            t.updateHead(r(o, e))
          }
        }
        if (o) {
          var s;
          null == t || null == (s = t.mountedInstances) || s.add(e.children), a()
        }
        return l(() => {
          var r;
          return null == t || null == (r = t.mountedInstances) || r.add(e.children), () => {
            var r;
            null == t || null == (r = t.mountedInstances) || r.delete(e.children)
          }
        }), l(() => (t && (t._pendingUpdate = a), () => {
          t && (t._pendingUpdate = a)
        })), i(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
          t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
        })), null
      }
    },
    3987: function(e, t) {
      Object.defineProperty(t, "__esModule", {
          value: !0
        }),
        function(e, t) {
          for (var r in t) Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }(t, {
          DecodeError: function() {
            return g
          },
          MiddlewareNotFoundError: function() {
            return y
          },
          MissingStaticPage: function() {
            return b
          },
          NormalizeError: function() {
            return m
          },
          PageNotFoundError: function() {
            return h
          },
          SP: function() {
            return f
          },
          ST: function() {
            return p
          },
          WEB_VITALS: function() {
            return r
          },
          execOnce: function() {
            return n
          },
          getDisplayName: function() {
            return s
          },
          getLocationOrigin: function() {
            return i
          },
          getURL: function() {
            return a
          },
          isAbsoluteUrl: function() {
            return l
          },
          isResSent: function() {
            return u
          },
          loadGetInitialProps: function() {
            return d
          },
          normalizeRepeatedSlashes: function() {
            return c
          },
          stringifyError: function() {
            return _
          }
        });
      let r = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

      function n(e) {
        let t, r = !1;
        return function() {
          for (var n = arguments.length, o = Array(n), l = 0; l < n; l++) o[l] = arguments[l];
          return r || (r = !0, t = e(...o)), t
        }
      }
      let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        l = e => o.test(e);

      function i() {
        let {
          protocol: e,
          hostname: t,
          port: r
        } = window.location;
        return e + "//" + t + (r ? ":" + r : "")
      }

      function a() {
        let {
          href: e
        } = window.location, t = i();
        return e.substring(t.length)
      }

      function s(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
      }

      function u(e) {
        return e.finished || e.headersSent
      }

      function c(e) {
        let t = e.split("?");
        return t[0].replace(/\\/g, "/")
          .replace(/\/\/+/g, "/") + (t[1] ? "?" + t.slice(1)
            .join("?") : "")
      }
      async function d(e, t) {
        let r = t.res || t.ctx && t.ctx.res;
        if (!e.getInitialProps) return t.ctx && t.Component ? {
          pageProps: await d(t.Component, t.ctx)
        } : {};
        let n = await e.getInitialProps(t);
        if (r && u(r)) return n;
        if (!n) throw Error('"' + s(e) + '.getInitialProps()" should resolve to an object. But found "' + n + '" instead.');
        return n
      }
      let f = "undefined" != typeof performance,
        p = f && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
      class g extends Error {}
      class m extends Error {}
      class h extends Error {
        constructor(e) {
          super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = "Cannot find module for page: " + e
        }
      }
      class b extends Error {
        constructor(e, t) {
          super(), this.message = "Failed to load static file for page: " + e + " " + t
        }
      }
      class y extends Error {
        constructor() {
          super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
        }
      }

      function _(e) {
        return JSON.stringify({
          message: e.message,
          stack: e.stack
        })
      }
    },
    4191: function(e, t, r) {
      r.d(t, {
        hL: function() {
          return e_
        }
      });
      var n = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e,
        o = e => !e || "object" != typeof e || 0 === Object.keys(e)
        .length,
        l = (e, t) => JSON.stringify(e) === JSON.stringify(t);

      function i(e) {
        let t = [];
        return function e(t, r) {
          t.forEach(function(t) {
            Array.isArray(t) ? e(t, r) : r.push(t)
          })
        }(e, t), t
      }
      var a = (...e) => i(e)
        .filter(Boolean),
        s = (e, t) => {
          let r = {},
            n = Object.keys(e),
            o = Object.keys(t);
          for (let l of n)
            if (o.includes(l)) {
              let n = e[l],
                o = t[l];
              "object" == typeof n && "object" == typeof o ? r[l] = s(n, o) : Array.isArray(n) || Array.isArray(o) ? r[l] = a(o, n) : r[l] = o + " " + n
            } else r[l] = e[l];
          for (let e of o) n.includes(e) || (r[e] = t[e]);
          return r
        },
        u = e => e && "string" == typeof e ? e.replace(/\s+/g, " ")
        .trim() : e;
      let c = e => {
          let t = g(e),
            {
              conflictingClassGroups: r,
              conflictingClassGroupModifiers: n
            } = e;
          return {
            getClassGroupId: e => {
              let r = e.split("-");
              return "" === r[0] && 1 !== r.length && r.shift(), d(r, t) || p(e)
            },
            getConflictingClassGroupIds: (e, t) => {
              let o = r[e] || [];
              return t && n[e] ? [...o, ...n[e]] : o
            }
          }
        },
        d = (e, t) => {
          if (0 === e.length) return t.classGroupId;
          let r = e[0],
            n = t.nextPart.get(r),
            o = n ? d(e.slice(1), n) : void 0;
          if (o) return o;
          if (0 === t.validators.length) return;
          let l = e.join("-");
          return t.validators.find(({
              validator: e
            }) => e(l))
            ?.classGroupId
        },
        f = /^\[(.+)\]$/,
        p = e => {
          if (f.test(e)) {
            let t = f.exec(e)[1],
              r = t?.substring(0, t.indexOf(":"));
            if (r) return "arbitrary.." + r
          }
        },
        g = e => {
          let {
            theme: t,
            prefix: r
          } = e, n = {
            nextPart: new Map,
            validators: []
          };
          return y(Object.entries(e.classGroups), r)
            .forEach(([e, r]) => {
              m(r, n, e, t)
            }), n
        },
        m = (e, t, r, n) => {
          e.forEach(e => {
            if ("string" == typeof e) {
              ("" === e ? t : h(t, e))
              .classGroupId = r;
              return
            }
            if ("function" == typeof e) {
              if (b(e)) {
                m(e(n), t, r, n);
                return
              }
              t.validators.push({
                validator: e,
                classGroupId: r
              });
              return
            }
            Object.entries(e)
              .forEach(([e, o]) => {
                m(o, h(t, e), r, n)
              })
          })
        },
        h = (e, t) => {
          let r = e;
          return t.split("-")
            .forEach(e => {
              r.nextPart.has(e) || r.nextPart.set(e, {
                nextPart: new Map,
                validators: []
              }), r = r.nextPart.get(e)
            }), r
        },
        b = e => e.isThemeGetter,
        y = (e, t) => t ? e.map(([e, r]) => [e, r.map(e => "string" == typeof e ? t + e : "object" == typeof e ? Object.fromEntries(Object.entries(e)
          .map(([e, r]) => [t + e, r])) : e)]) : e,
        _ = e => {
          if (e < 1) return {
            get: () => void 0,
            set: () => {}
          };
          let t = 0,
            r = new Map,
            n = new Map,
            o = (o, l) => {
              r.set(o, l), ++t > e && (t = 0, n = r, r = new Map)
            };
          return {
            get(e) {
              let t = r.get(e);
              return void 0 !== t ? t : void 0 !== (t = n.get(e)) ? (o(e, t), t) : void 0
            },
            set(e, t) {
              r.has(e) ? r.set(e, t) : o(e, t)
            }
          }
        },
        v = e => {
          let {
            separator: t,
            experimentalParseClassName: r
          } = e, n = 1 === t.length, o = t[0], l = t.length, i = e => {
            let r;
            let i = [],
              a = 0,
              s = 0;
            for (let u = 0; u < e.length; u++) {
              let c = e[u];
              if (0 === a) {
                if (c === o && (n || e.slice(u, u + l) === t)) {
                  i.push(e.slice(s, u)), s = u + l;
                  continue
                }
                if ("/" === c) {
                  r = u;
                  continue
                }
              }
              "[" === c ? a++ : "]" === c && a--
            }
            let u = 0 === i.length ? e : e.substring(s),
              c = u.startsWith("!"),
              d = c ? u.substring(1) : u;
            return {
              modifiers: i,
              hasImportantModifier: c,
              baseClassName: d,
              maybePostfixModifierPosition: r && r > s ? r - s : void 0
            }
          };
          return r ? e => r({
            className: e,
            parseClassName: i
          }) : i
        },
        x = e => {
          if (e.length <= 1) return e;
          let t = [],
            r = [];
          return e.forEach(e => {
            "[" === e[0] ? (t.push(...r.sort(), e), r = []) : r.push(e)
          }), t.push(...r.sort()), t
        },
        w = e => ({
          cache: _(e.cacheSize),
          parseClassName: v(e),
          ...c(e)
        }),
        E = /\s+/,
        P = (e, t) => {
          let {
            parseClassName: r,
            getClassGroupId: n,
            getConflictingClassGroupIds: o
          } = t, l = [], i = e.trim()
            .split(E), a = "";
          for (let e = i.length - 1; e >= 0; e -= 1) {
            let t = i[e],
              {
                modifiers: s,
                hasImportantModifier: u,
                baseClassName: c,
                maybePostfixModifierPosition: d
              } = r(t),
              f = !!d,
              p = n(f ? c.substring(0, d) : c);
            if (!p) {
              if (!f || !(p = n(c))) {
                a = t + (a.length > 0 ? " " + a : a);
                continue
              }
              f = !1
            }
            let g = x(s)
              .join(":"),
              m = u ? g + "!" : g,
              h = m + p;
            if (l.includes(h)) continue;
            l.push(h);
            let b = o(p, f);
            for (let e = 0; e < b.length; ++e) {
              let t = b[e];
              l.push(m + t)
            }
            a = t + (a.length > 0 ? " " + a : a)
          }
          return a
        };

      function R() {
        let e, t, r = 0,
          n = "";
        for (; r < arguments.length;)(e = arguments[r++]) && (t = S(e)) && (n && (n += " "), n += t);
        return n
      }
      let S = e => {
        let t;
        if ("string" == typeof e) return e;
        let r = "";
        for (let n = 0; n < e.length; n++) e[n] && (t = S(e[n])) && (r && (r += " "), r += t);
        return r
      };

      function O(e, ...t) {
        let r, n, o;
        let l = function(a) {
          return n = (r = w(t.reduce((e, t) => t(e), e())))
            .cache.get, o = r.cache.set, l = i, i(a)
        };

        function i(e) {
          let t = n(e);
          if (t) return t;
          let l = P(e, r);
          return o(e, l), l
        }
        return function() {
          return l(R.apply(null, arguments))
        }
      }
      let j = e => {
          let t = t => t[e] || [];
          return t.isThemeGetter = !0, t
        },
        k = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        A = /^\d+\/\d+$/,
        C = new Set(["px", "full", "screen"]),
        I = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        N = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        T = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        M = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        z = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
        L = e => U(e) || C.has(e) || A.test(e),
        D = e => J(e, "length", Z),
        U = e => !!e && !Number.isNaN(Number(e)),
        G = e => J(e, "number", U),
        F = e => !!e && Number.isInteger(Number(e)),
        V = e => e.endsWith("%") && U(e.slice(0, -1)),
        W = e => k.test(e),
        X = e => I.test(e),
        $ = new Set(["length", "size", "percentage"]),
        B = e => J(e, $, ee),
        H = e => J(e, "position", ee),
        Y = new Set(["image", "url"]),
        K = e => J(e, Y, er),
        q = e => J(e, "", et),
        Q = () => !0,
        J = (e, t, r) => {
          let n = k.exec(e);
          return !!n && (n[1] ? "string" == typeof t ? n[1] === t : t.has(n[1]) : r(n[2]))
        },
        Z = e => N.test(e) && !T.test(e),
        ee = () => !1,
        et = e => M.test(e),
        er = e => z.test(e),
        en = () => {
          let e = j("colors"),
            t = j("spacing"),
            r = j("blur"),
            n = j("brightness"),
            o = j("borderColor"),
            l = j("borderRadius"),
            i = j("borderSpacing"),
            a = j("borderWidth"),
            s = j("contrast"),
            u = j("grayscale"),
            c = j("hueRotate"),
            d = j("invert"),
            f = j("gap"),
            p = j("gradientColorStops"),
            g = j("gradientColorStopPositions"),
            m = j("inset"),
            h = j("margin"),
            b = j("opacity"),
            y = j("padding"),
            _ = j("saturate"),
            v = j("scale"),
            x = j("sepia"),
            w = j("skew"),
            E = j("space"),
            P = j("translate"),
            R = () => ["auto", "contain", "none"],
            S = () => ["auto", "hidden", "clip", "visible", "scroll"],
            O = () => ["auto", W, t],
            k = () => [W, t],
            A = () => ["", L, D],
            C = () => ["auto", U, W],
            I = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
            N = () => ["solid", "dashed", "dotted", "double", "none"],
            T = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            M = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
            z = () => ["", "0", W],
            $ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            Y = () => [U, W];
          return {
            cacheSize: 500,
            separator: ":",
            theme: {
              colors: [Q],
              spacing: [L, D],
              blur: ["none", "", X, W],
              brightness: Y(),
              borderColor: [e],
              borderRadius: ["none", "", "full", X, W],
              borderSpacing: k(),
              borderWidth: A(),
              contrast: Y(),
              grayscale: z(),
              hueRotate: Y(),
              invert: z(),
              gap: k(),
              gradientColorStops: [e],
              gradientColorStopPositions: [V, D],
              inset: O(),
              margin: O(),
              opacity: Y(),
              padding: k(),
              saturate: Y(),
              scale: Y(),
              sepia: z(),
              skew: Y(),
              space: k(),
              translate: k()
            },
            classGroups: {
              aspect: [{
                aspect: ["auto", "square", "video", W]
              }],
              container: ["container"],
              columns: [{
                columns: [X]
              }],
              "break-after": [{
                "break-after": $()
              }],
              "break-before": [{
                "break-before": $()
              }],
              "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
              }],
              "box-decoration": [{
                "box-decoration": ["slice", "clone"]
              }],
              box: [{
                box: ["border", "content"]
              }],
              display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
              float: [{
                float: ["right", "left", "none", "start", "end"]
              }],
              clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
              }],
              isolation: ["isolate", "isolation-auto"],
              "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
              }],
              "object-position": [{
                object: [...I(), W]
              }],
              overflow: [{
                overflow: S()
              }],
              "overflow-x": [{
                "overflow-x": S()
              }],
              "overflow-y": [{
                "overflow-y": S()
              }],
              overscroll: [{
                overscroll: R()
              }],
              "overscroll-x": [{
                "overscroll-x": R()
              }],
              "overscroll-y": [{
                "overscroll-y": R()
              }],
              position: ["static", "fixed", "absolute", "relative", "sticky"],
              inset: [{
                inset: [m]
              }],
              "inset-x": [{
                "inset-x": [m]
              }],
              "inset-y": [{
                "inset-y": [m]
              }],
              start: [{
                start: [m]
              }],
              end: [{
                end: [m]
              }],
              top: [{
                top: [m]
              }],
              right: [{
                right: [m]
              }],
              bottom: [{
                bottom: [m]
              }],
              left: [{
                left: [m]
              }],
              visibility: ["visible", "invisible", "collapse"],
              z: [{
                z: ["auto", F, W]
              }],
              basis: [{
                basis: O()
              }],
              "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
              }],
              "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
              }],
              flex: [{
                flex: ["1", "auto", "initial", "none", W]
              }],
              grow: [{
                grow: z()
              }],
              shrink: [{
                shrink: z()
              }],
              order: [{
                order: ["first", "last", "none", F, W]
              }],
              "grid-cols": [{
                "grid-cols": [Q]
              }],
              "col-start-end": [{
                col: ["auto", {
                  span: ["full", F, W]
                }, W]
              }],
              "col-start": [{
                "col-start": C()
              }],
              "col-end": [{
                "col-end": C()
              }],
              "grid-rows": [{
                "grid-rows": [Q]
              }],
              "row-start-end": [{
                row: ["auto", {
                  span: [F, W]
                }, W]
              }],
              "row-start": [{
                "row-start": C()
              }],
              "row-end": [{
                "row-end": C()
              }],
              "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
              }],
              "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", W]
              }],
              "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", W]
              }],
              gap: [{
                gap: [f]
              }],
              "gap-x": [{
                "gap-x": [f]
              }],
              "gap-y": [{
                "gap-y": [f]
              }],
              "justify-content": [{
                justify: ["normal", ...M()]
              }],
              "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
              }],
              "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
              }],
              "align-content": [{
                content: ["normal", ...M(), "baseline"]
              }],
              "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
              }],
              "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
              }],
              "place-content": [{
                "place-content": [...M(), "baseline"]
              }],
              "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
              }],
              "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
              }],
              p: [{
                p: [y]
              }],
              px: [{
                px: [y]
              }],
              py: [{
                py: [y]
              }],
              ps: [{
                ps: [y]
              }],
              pe: [{
                pe: [y]
              }],
              pt: [{
                pt: [y]
              }],
              pr: [{
                pr: [y]
              }],
              pb: [{
                pb: [y]
              }],
              pl: [{
                pl: [y]
              }],
              m: [{
                m: [h]
              }],
              mx: [{
                mx: [h]
              }],
              my: [{
                my: [h]
              }],
              ms: [{
                ms: [h]
              }],
              me: [{
                me: [h]
              }],
              mt: [{
                mt: [h]
              }],
              mr: [{
                mr: [h]
              }],
              mb: [{
                mb: [h]
              }],
              ml: [{
                ml: [h]
              }],
              "space-x": [{
                "space-x": [E]
              }],
              "space-x-reverse": ["space-x-reverse"],
              "space-y": [{
                "space-y": [E]
              }],
              "space-y-reverse": ["space-y-reverse"],
              w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", W, t]
              }],
              "min-w": [{
                "min-w": [W, t, "min", "max", "fit"]
              }],
              "max-w": [{
                "max-w": [W, t, "none", "full", "min", "max", "fit", "prose", {
                  screen: [X]
                }, X]
              }],
              h: [{
                h: [W, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
              }],
              "min-h": [{
                "min-h": [W, t, "min", "max", "fit", "svh", "lvh", "dvh"]
              }],
              "max-h": [{
                "max-h": [W, t, "min", "max", "fit", "svh", "lvh", "dvh"]
              }],
              size: [{
                size: [W, t, "auto", "min", "max", "fit"]
              }],
              "font-size": [{
                text: ["base", X, D]
              }],
              "font-smoothing": ["antialiased", "subpixel-antialiased"],
              "font-style": ["italic", "not-italic"],
              "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", G]
              }],
              "font-family": [{
                font: [Q]
              }],
              "fvn-normal": ["normal-nums"],
              "fvn-ordinal": ["ordinal"],
              "fvn-slashed-zero": ["slashed-zero"],
              "fvn-figure": ["lining-nums", "oldstyle-nums"],
              "fvn-spacing": ["proportional-nums", "tabular-nums"],
              "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
              tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", W]
              }],
              "line-clamp": [{
                "line-clamp": ["none", U, G]
              }],
              leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", L, W]
              }],
              "list-image": [{
                "list-image": ["none", W]
              }],
              "list-style-type": [{
                list: ["none", "disc", "decimal", W]
              }],
              "list-style-position": [{
                list: ["inside", "outside"]
              }],
              "placeholder-color": [{
                placeholder: [e]
              }],
              "placeholder-opacity": [{
                "placeholder-opacity": [b]
              }],
              "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
              }],
              "text-color": [{
                text: [e]
              }],
              "text-opacity": [{
                "text-opacity": [b]
              }],
              "text-decoration": ["underline", "overline", "line-through", "no-underline"],
              "text-decoration-style": [{
                decoration: [...N(), "wavy"]
              }],
              "text-decoration-thickness": [{
                decoration: ["auto", "from-font", L, D]
              }],
              "underline-offset": [{
                "underline-offset": ["auto", L, W]
              }],
              "text-decoration-color": [{
                decoration: [e]
              }],
              "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
              "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
              "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
              }],
              indent: [{
                indent: k()
              }],
              "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", W]
              }],
              whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
              }],
              break: [{
                break: ["normal", "words", "all", "keep"]
              }],
              hyphens: [{
                hyphens: ["none", "manual", "auto"]
              }],
              content: [{
                content: ["none", W]
              }],
              "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
              }],
              "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
              }],
              "bg-opacity": [{
                "bg-opacity": [b]
              }],
              "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
              }],
              "bg-position": [{
                bg: [...I(), H]
              }],
              "bg-repeat": [{
                bg: ["no-repeat", {
                  repeat: ["", "x", "y", "round", "space"]
                }]
              }],
              "bg-size": [{
                bg: ["auto", "cover", "contain", B]
              }],
              "bg-image": [{
                bg: ["none", {
                  "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, K]
              }],
              "bg-color": [{
                bg: [e]
              }],
              "gradient-from-pos": [{
                from: [g]
              }],
              "gradient-via-pos": [{
                via: [g]
              }],
              "gradient-to-pos": [{
                to: [g]
              }],
              "gradient-from": [{
                from: [p]
              }],
              "gradient-via": [{
                via: [p]
              }],
              "gradient-to": [{
                to: [p]
              }],
              rounded: [{
                rounded: [l]
              }],
              "rounded-s": [{
                "rounded-s": [l]
              }],
              "rounded-e": [{
                "rounded-e": [l]
              }],
              "rounded-t": [{
                "rounded-t": [l]
              }],
              "rounded-r": [{
                "rounded-r": [l]
              }],
              "rounded-b": [{
                "rounded-b": [l]
              }],
              "rounded-l": [{
                "rounded-l": [l]
              }],
              "rounded-ss": [{
                "rounded-ss": [l]
              }],
              "rounded-se": [{
                "rounded-se": [l]
              }],
              "rounded-ee": [{
                "rounded-ee": [l]
              }],
              "rounded-es": [{
                "rounded-es": [l]
              }],
              "rounded-tl": [{
                "rounded-tl": [l]
              }],
              "rounded-tr": [{
                "rounded-tr": [l]
              }],
              "rounded-br": [{
                "rounded-br": [l]
              }],
              "rounded-bl": [{
                "rounded-bl": [l]
              }],
              "border-w": [{
                border: [a]
              }],
              "border-w-x": [{
                "border-x": [a]
              }],
              "border-w-y": [{
                "border-y": [a]
              }],
              "border-w-s": [{
                "border-s": [a]
              }],
              "border-w-e": [{
                "border-e": [a]
              }],
              "border-w-t": [{
                "border-t": [a]
              }],
              "border-w-r": [{
                "border-r": [a]
              }],
              "border-w-b": [{
                "border-b": [a]
              }],
              "border-w-l": [{
                "border-l": [a]
              }],
              "border-opacity": [{
                "border-opacity": [b]
              }],
              "border-style": [{
                border: [...N(), "hidden"]
              }],
              "divide-x": [{
                "divide-x": [a]
              }],
              "divide-x-reverse": ["divide-x-reverse"],
              "divide-y": [{
                "divide-y": [a]
              }],
              "divide-y-reverse": ["divide-y-reverse"],
              "divide-opacity": [{
                "divide-opacity": [b]
              }],
              "divide-style": [{
                divide: N()
              }],
              "border-color": [{
                border: [o]
              }],
              "border-color-x": [{
                "border-x": [o]
              }],
              "border-color-y": [{
                "border-y": [o]
              }],
              "border-color-s": [{
                "border-s": [o]
              }],
              "border-color-e": [{
                "border-e": [o]
              }],
              "border-color-t": [{
                "border-t": [o]
              }],
              "border-color-r": [{
                "border-r": [o]
              }],
              "border-color-b": [{
                "border-b": [o]
              }],
              "border-color-l": [{
                "border-l": [o]
              }],
              "divide-color": [{
                divide: [o]
              }],
              "outline-style": [{
                outline: ["", ...N()]
              }],
              "outline-offset": [{
                "outline-offset": [L, W]
              }],
              "outline-w": [{
                outline: [L, D]
              }],
              "outline-color": [{
                outline: [e]
              }],
              "ring-w": [{
                ring: A()
              }],
              "ring-w-inset": ["ring-inset"],
              "ring-color": [{
                ring: [e]
              }],
              "ring-opacity": [{
                "ring-opacity": [b]
              }],
              "ring-offset-w": [{
                "ring-offset": [L, D]
              }],
              "ring-offset-color": [{
                "ring-offset": [e]
              }],
              shadow: [{
                shadow: ["", "inner", "none", X, q]
              }],
              "shadow-color": [{
                shadow: [Q]
              }],
              opacity: [{
                opacity: [b]
              }],
              "mix-blend": [{
                "mix-blend": [...T(), "plus-lighter", "plus-darker"]
              }],
              "bg-blend": [{
                "bg-blend": T()
              }],
              filter: [{
                filter: ["", "none"]
              }],
              blur: [{
                blur: [r]
              }],
              brightness: [{
                brightness: [n]
              }],
              contrast: [{
                contrast: [s]
              }],
              "drop-shadow": [{
                "drop-shadow": ["", "none", X, W]
              }],
              grayscale: [{
                grayscale: [u]
              }],
              "hue-rotate": [{
                "hue-rotate": [c]
              }],
              invert: [{
                invert: [d]
              }],
              saturate: [{
                saturate: [_]
              }],
              sepia: [{
                sepia: [x]
              }],
              "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
              }],
              "backdrop-blur": [{
                "backdrop-blur": [r]
              }],
              "backdrop-brightness": [{
                "backdrop-brightness": [n]
              }],
              "backdrop-contrast": [{
                "backdrop-contrast": [s]
              }],
              "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
              }],
              "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [c]
              }],
              "backdrop-invert": [{
                "backdrop-invert": [d]
              }],
              "backdrop-opacity": [{
                "backdrop-opacity": [b]
              }],
              "backdrop-saturate": [{
                "backdrop-saturate": [_]
              }],
              "backdrop-sepia": [{
                "backdrop-sepia": [x]
              }],
              "border-collapse": [{
                border: ["collapse", "separate"]
              }],
              "border-spacing": [{
                "border-spacing": [i]
              }],
              "border-spacing-x": [{
                "border-spacing-x": [i]
              }],
              "border-spacing-y": [{
                "border-spacing-y": [i]
              }],
              "table-layout": [{
                table: ["auto", "fixed"]
              }],
              caption: [{
                caption: ["top", "bottom"]
              }],
              transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", W]
              }],
              duration: [{
                duration: Y()
              }],
              ease: [{
                ease: ["linear", "in", "out", "in-out", W]
              }],
              delay: [{
                delay: Y()
              }],
              animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", W]
              }],
              transform: [{
                transform: ["", "gpu", "none"]
              }],
              scale: [{
                scale: [v]
              }],
              "scale-x": [{
                "scale-x": [v]
              }],
              "scale-y": [{
                "scale-y": [v]
              }],
              rotate: [{
                rotate: [F, W]
              }],
              "translate-x": [{
                "translate-x": [P]
              }],
              "translate-y": [{
                "translate-y": [P]
              }],
              "skew-x": [{
                "skew-x": [w]
              }],
              "skew-y": [{
                "skew-y": [w]
              }],
              "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", W]
              }],
              accent: [{
                accent: ["auto", e]
              }],
              appearance: [{
                appearance: ["none", "auto"]
              }],
              cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", W]
              }],
              "caret-color": [{
                caret: [e]
              }],
              "pointer-events": [{
                "pointer-events": ["none", "auto"]
              }],
              resize: [{
                resize: ["none", "y", "x", ""]
              }],
              "scroll-behavior": [{
                scroll: ["auto", "smooth"]
              }],
              "scroll-m": [{
                "scroll-m": k()
              }],
              "scroll-mx": [{
                "scroll-mx": k()
              }],
              "scroll-my": [{
                "scroll-my": k()
              }],
              "scroll-ms": [{
                "scroll-ms": k()
              }],
              "scroll-me": [{
                "scroll-me": k()
              }],
              "scroll-mt": [{
                "scroll-mt": k()
              }],
              "scroll-mr": [{
                "scroll-mr": k()
              }],
              "scroll-mb": [{
                "scroll-mb": k()
              }],
              "scroll-ml": [{
                "scroll-ml": k()
              }],
              "scroll-p": [{
                "scroll-p": k()
              }],
              "scroll-px": [{
                "scroll-px": k()
              }],
              "scroll-py": [{
                "scroll-py": k()
              }],
              "scroll-ps": [{
                "scroll-ps": k()
              }],
              "scroll-pe": [{
                "scroll-pe": k()
              }],
              "scroll-pt": [{
                "scroll-pt": k()
              }],
              "scroll-pr": [{
                "scroll-pr": k()
              }],
              "scroll-pb": [{
                "scroll-pb": k()
              }],
              "scroll-pl": [{
                "scroll-pl": k()
              }],
              "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
              }],
              "snap-stop": [{
                snap: ["normal", "always"]
              }],
              "snap-type": [{
                snap: ["none", "x", "y", "both"]
              }],
              "snap-strictness": [{
                snap: ["mandatory", "proximity"]
              }],
              touch: [{
                touch: ["auto", "none", "manipulation"]
              }],
              "touch-x": [{
                "touch-pan": ["x", "left", "right"]
              }],
              "touch-y": [{
                "touch-pan": ["y", "up", "down"]
              }],
              "touch-pz": ["touch-pinch-zoom"],
              select: [{
                select: ["none", "text", "all", "auto"]
              }],
              "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", W]
              }],
              fill: [{
                fill: [e, "none"]
              }],
              "stroke-w": [{
                stroke: [L, D, G]
              }],
              stroke: [{
                stroke: [e, "none"]
              }],
              sr: ["sr-only", "not-sr-only"],
              "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
              }]
            },
            conflictingClassGroups: {
              overflow: ["overflow-x", "overflow-y"],
              overscroll: ["overscroll-x", "overscroll-y"],
              inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
              "inset-x": ["right", "left"],
              "inset-y": ["top", "bottom"],
              flex: ["basis", "grow", "shrink"],
              gap: ["gap-x", "gap-y"],
              p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
              px: ["pr", "pl"],
              py: ["pt", "pb"],
              m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
              mx: ["mr", "ml"],
              my: ["mt", "mb"],
              size: ["w", "h"],
              "font-size": ["leading"],
              "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
              "fvn-ordinal": ["fvn-normal"],
              "fvn-slashed-zero": ["fvn-normal"],
              "fvn-figure": ["fvn-normal"],
              "fvn-spacing": ["fvn-normal"],
              "fvn-fraction": ["fvn-normal"],
              "line-clamp": ["display", "overflow"],
              rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
              "rounded-s": ["rounded-ss", "rounded-es"],
              "rounded-e": ["rounded-se", "rounded-ee"],
              "rounded-t": ["rounded-tl", "rounded-tr"],
              "rounded-r": ["rounded-tr", "rounded-br"],
              "rounded-b": ["rounded-br", "rounded-bl"],
              "rounded-l": ["rounded-tl", "rounded-bl"],
              "border-spacing": ["border-spacing-x", "border-spacing-y"],
              "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
              "border-w-x": ["border-w-r", "border-w-l"],
              "border-w-y": ["border-w-t", "border-w-b"],
              "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
              "border-color-x": ["border-color-r", "border-color-l"],
              "border-color-y": ["border-color-t", "border-color-b"],
              "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
              "scroll-mx": ["scroll-mr", "scroll-ml"],
              "scroll-my": ["scroll-mt", "scroll-mb"],
              "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
              "scroll-px": ["scroll-pr", "scroll-pl"],
              "scroll-py": ["scroll-pt", "scroll-pb"],
              touch: ["touch-x", "touch-y", "touch-pz"],
              "touch-x": ["touch"],
              "touch-y": ["touch"],
              "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
              "font-size": ["leading"]
            }
          }
        },
        eo = (e, {
          cacheSize: t,
          prefix: r,
          separator: n,
          experimentalParseClassName: o,
          extend: l = {},
          override: i = {}
        }) => {
          for (let l in el(e, "cacheSize", t), el(e, "prefix", r), el(e, "separator", n), el(e, "experimentalParseClassName", o), i) ei(e[l], i[l]);
          for (let t in l) ea(e[t], l[t]);
          return e
        },
        el = (e, t, r) => {
          void 0 !== r && (e[t] = r)
        },
        ei = (e, t) => {
          if (t)
            for (let r in t) el(e, r, t[r])
        },
        ea = (e, t) => {
          if (t)
            for (let r in t) {
              let n = t[r];
              void 0 !== n && (e[r] = (e[r] || [])
                .concat(n))
            }
        },
        es = (e, ...t) => "function" == typeof e ? O(en, e, ...t) : O(() => eo(en(), e), ...t),
        eu = O(en);
      var ec = {
          twMerge: !0,
          twMergeConfig: {},
          responsiveVariants: !1
        },
        ed = e => e || void 0,
        ef = (...e) => ed(i(e)
          .filter(Boolean)
          .join(" ")),
        ep = null,
        eg = {},
        em = !1,
        eh = (...e) => t => t.twMerge ? ((!ep || em) && (em = !1, ep = o(eg) ? eu : es({
          ...eg,
          extend: {
            theme: eg.theme,
            classGroups: eg.classGroups,
            conflictingClassGroupModifiers: eg.conflictingClassGroupModifiers,
            conflictingClassGroups: eg.conflictingClassGroups,
            ...eg.extend
          }
        })), ed(ep(ef(e)))) : ef(e),
        eb = (e, t) => {
          for (let r in t) e.hasOwnProperty(r) ? e[r] = ef(e[r], t[r]) : e[r] = t[r];
          return e
        },
        ey = (e, t) => {
          let {
            extend: r = null,
            slots: i = {},
            variants: c = {},
            compoundVariants: d = [],
            compoundSlots: f = [],
            defaultVariants: p = {}
          } = e, g = {
            ...ec,
            ...t
          }, m = null != r && r.base ? ef(r.base, null == e ? void 0 : e.base) : null == e ? void 0 : e.base, h = null != r && r.variants && !o(r.variants) ? s(c, r.variants) : c, b = null != r && r.defaultVariants && !o(r.defaultVariants) ? {
            ...r.defaultVariants,
            ...p
          } : p;
          o(g.twMergeConfig) || l(g.twMergeConfig, eg) || (em = !0, eg = g.twMergeConfig);
          let y = o(null == r ? void 0 : r.slots),
            _ = o(i) ? {} : {
              base: ef(null == e ? void 0 : e.base, y && (null == r ? void 0 : r.base)),
              ...i
            },
            v = y ? _ : eb({
              ...null == r ? void 0 : r.slots
            }, o(_) ? {
              base: null == e ? void 0 : e.base
            } : _),
            x = o(null == r ? void 0 : r.compoundVariants) ? d : a(null == r ? void 0 : r.compoundVariants, d),
            w = e => {
              if (o(h) && o(i) && y) return eh(m, null == e ? void 0 : e.class, null == e ? void 0 : e.className)(g);
              if (x && !Array.isArray(x)) throw TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof x}`);
              if (f && !Array.isArray(f)) throw TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof f}`);
              let t = (e, t, r = [], n) => {
                  let o = r;
                  if ("string" == typeof t) o = o.concat(u(t)
                    .split(" ")
                    .map(t => `${e}:${t}`));
                  else if (Array.isArray(t)) o = o.concat(t.reduce((t, r) => t.concat(`${e}:${r}`), []));
                  else if ("object" == typeof t && "string" == typeof n) {
                    for (let r in t)
                      if (t.hasOwnProperty(r) && r === n) {
                        let l = t[r];
                        if (l && "string" == typeof l) {
                          let t = u(l);
                          o[n] ? o[n] = o[n].concat(t.split(" ")
                              .map(t => `${e}:${t}`)) : o[n] = t.split(" ")
                            .map(t => `${e}:${t}`)
                        } else Array.isArray(l) && l.length > 0 && (o[n] = l.reduce((t, r) => t.concat(`${e}:${r}`), []))
                      }
                  }
                  return o
                },
                r = (r, l = h, i = null, a = null) => {
                  var s;
                  let u = l[r];
                  if (!u || o(u)) return null;
                  let c = null != (s = null == a ? void 0 : a[r]) ? s : null == e ? void 0 : e[r];
                  if (null === c) return null;
                  let d = n(c),
                    f = Array.isArray(g.responsiveVariants) && g.responsiveVariants.length > 0 || !0 === g.responsiveVariants,
                    p = null == b ? void 0 : b[r],
                    m = [];
                  if ("object" == typeof d && f)
                    for (let [e, r] of Object.entries(d)) {
                      let n = u[r];
                      if ("initial" === e) {
                        p = r;
                        continue
                      }
                      Array.isArray(g.responsiveVariants) && !g.responsiveVariants.includes(e) || (m = t(e, n, m, i))
                    }
                  let y = u[(null != d && "object" != typeof d ? d : n(p)) || "false"];
                  return "object" == typeof m && "string" == typeof i && m[i] ? eb(m, y) : m.length > 0 ? (m.push(y), m) : y
                },
                l = (e, t) => {
                  if (!h || "object" != typeof h) return null;
                  let n = [];
                  for (let o in h) {
                    let l = r(o, h, e, t),
                      i = "base" === e && "string" == typeof l ? l : l && l[e];
                    i && (n[n.length] = i)
                  }
                  return n
                },
                a = {};
              for (let t in e) void 0 !== e[t] && (a[t] = e[t]);
              let s = (t, r) => {
                  var n;
                  let o = "object" == typeof(null == e ? void 0 : e[t]) ? {
                    [t]: null == (n = e[t]) ? void 0 : n.initial
                  } : {};
                  return {
                    ...b,
                    ...a,
                    ...o,
                    ...r
                  }
                },
                c = (e = [], t) => {
                  let r = [];
                  for (let {
                      class: n,
                      className: o,
                      ...l
                    }
                    of e) {
                    let e = !0;
                    for (let [r, n] of Object.entries(l)) {
                      let o = s(r, t);
                      if (Array.isArray(n)) {
                        if (!n.includes(o[r])) {
                          e = !1;
                          break
                        }
                      } else if (o[r] !== n) {
                        e = !1;
                        break
                      }
                    }
                    e && (n && r.push(n), o && r.push(o))
                  }
                  return r
                },
                d = e => {
                  let t = c(x, e);
                  if (!Array.isArray(t)) return t;
                  let r = {};
                  for (let e of t)
                    if ("string" == typeof e && (r.base = eh(r.base, e)(g)), "object" == typeof e)
                      for (let [t, n] of Object.entries(e)) r[t] = eh(r[t], n)(g);
                  return r
                },
                p = e => {
                  if (f.length < 1) return null;
                  let t = {};
                  for (let {
                      slots: r = [],
                      class: n,
                      className: l,
                      ...i
                    }
                    of f) {
                    if (!o(i)) {
                      let t = !0;
                      for (let r of Object.keys(i)) {
                        let n = s(r, e)[r];
                        if (void 0 === n || (Array.isArray(i[r]) ? !i[r].includes(n) : i[r] !== n)) {
                          t = !1;
                          break
                        }
                      }
                      if (!t) continue
                    }
                    for (let e of r) t[e] = t[e] || [], t[e].push([n, l])
                  }
                  return t
                };
              if (!o(i) || !y) {
                let e = {};
                if ("object" == typeof v && !o(v))
                  for (let t of Object.keys(v)) e[t] = e => {
                    var r, n;
                    return eh(v[t], l(t, e), (null != (r = d(e)) ? r : [])[t], (null != (n = p(e)) ? n : [])[t], null == e ? void 0 : e.class, null == e ? void 0 : e.className)(g)
                  };
                return e
              }
              return eh(m, h ? Object.keys(h)
                .map(e => r(e, h)) : null, c(x), null == e ? void 0 : e.class, null == e ? void 0 : e.className)(g)
            };
          return w.variantKeys = (() => {
            if (!(!h || "object" != typeof h)) return Object.keys(h)
          })(), w.extend = r, w.base = m, w.slots = v, w.variants = h, w.defaultVariants = b, w.compoundSlots = f, w.compoundVariants = x, w
        },
        e_ = e => (t, r) => ey(t, r ? s(e, r) : e)
    }
  }
]);