"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || [])
.push([
  [8506], {
    6086: function(e, t, a) {
      a.d(t, {
        Z: function() {
          return S
        }
      });
      var i = a(7437),
        n = a(4560),
        o = a(531),
        r = a(8584),
        l = a(820),
        s = a(875),
        c = a(2386),
        d = a(6077),
        u = a(8732);
      let f = {
          1: "low",
          2: "medium",
          3: "high"
        },
        p = (e, t, a, i) => {
          var n, o, r, l, s, c;
          return {
            resulting_state: e ? "on" : "off",
            origin: a && i ? "teaser_recipe" : "recipe_detail",
            recipe_id: t.id,
            recipe_name: t.name,
            chef: null === (n = t.chefs) || void 0 === n ? void 0 : n.map(e => e.name)
              .join(","),
            difficulty: t.difficulty ? f[t.difficulty.toString()] : "",
            time: (t.cookingTime || 0) + (t.preparationTime || 0),
            position: a,
            quantity: i,
            recipe_collection: null == t ? void 0 : null === (o = t.collections) || void 0 === o ? void 0 : o.map(e => e.name)
              .join(","),
            recipe_course: null == t ? void 0 : null === (r = t.courses) || void 0 === r ? void 0 : r.map(e => e.name)
              .join(","),
            recipe_diet: null == t ? void 0 : null === (l = t.diets) || void 0 === l ? void 0 : l.map(e => e.name)
              .join(","),
            recipe_food_type: null == t ? void 0 : null === (s = t.foodTypes) || void 0 === s ? void 0 : s.map(e => e.name)
              .join(","),
            recipe_region: null == t ? void 0 : null === (c = t.regions) || void 0 === c ? void 0 : c.map(e => e.name)
              .join(",")
          }
        },
        m = e => {
          let {
            resultingState: t,
            recipe: a,
            position: i,
            totalItems: n,
            pageType: o
          } = e, r = p(t, a, i, n);
          (0, u.Z)({
            event: "add_to_favorites",
            page_type: o,
            ...r
          })
        };
      var v = a(3179),
        g = a(4317),
        x = a(5411),
        h = a(9376),
        y = a(2265),
        w = a(5666),
        b = a(5125),
        j = a(6633),
        _ = a(349),
        S = e => {
          let {
            recipe: t,
            favoritesIds: a,
            favoriteCount: f,
            variant: p = "card",
            loc: S,
            recipePosition: N,
            totalRecipes: k,
            onClick: C
          } = e, I = (0, h.useRouter)(), {
            locale: R
          } = (0, h.useParams)(), [E, T] = (0, y.useState)(!1), [P, O] = (0, y.useState)(f), [D, A] = (0, y.useState)(), [z, U] = (0, y.useState)(null), [J, Z] = (0, y.useState)(!1), L = (0, y.useRef)(null), F = (0, v.jl)(), M = (0, l.Z)(), B = (0, s.r)(), W = null == B ? void 0 : B.pageType, V = (0, y.useCallback)(async () => {
            try {
              let e = a || await (0, d.G4)(R);
              T(null == e ? void 0 : e.includes(t.id))
            } catch (e) {
              (0, g.Tf)(e, {
                componentOrPage: "ClientFavoriteIcon"
              }), console.log(e)
            }
          }, [t.id, a, R]), q = async (e, a) => {
            try {
              if (E && !e) return await (0, d.Ni)(t.id, R), T(!1), m({
                resultingState: !1,
                recipe: t,
                position: N,
                totalItems: k,
                pageType: W
              }), U({
                title: S.toastRemovedFromFavorites,
                button: !0
              }), void 0 !== P && O(Math.max(0, P - 1)), !0;
              return await (0, d.a3)(t.id, R, a), T(!0), m({
                resultingState: !0,
                recipe: t,
                position: N,
                totalItems: k,
                pageType: W
              }), U({
                title: S.toastAddedToFavorites,
                button: !0
              }), void 0 !== P && O(P + 1), !0
            } catch (e) {
              return (0, g.Tf)(e, {
                componentOrPage: "ClientFavoriteIcon"
              }), U({
                type: "warning",
                title: S.toastFavoritesOperationError,
                button: !1
              }), !1
            }
          }, H = (0, y.useCallback)(async e => {
            if (null == e || e.preventDefault(), null == e || e.stopPropagation(), !F) {
              Z(e => !e);
              return
            }
            C && await C(E), await q()
          }, [t.id, R, E, F, S, P]);
          (0, y.useEffect)(() => {
            F && D && V()
          }, [F, t.id, V, a, D]), (0, y.useEffect)(() => {
            O(f)
          }, [f]), (0, c.A)({
            action: r.T.ADD_FAVORITE,
            matchingCallback: async (e, a, i) => {
              e.recipeId === t.id ? (A(!1), await q(!0, i), a(["action", "recipeId"])) : A(!0)
            },
            oppositeCallback: async () => {
              A(!0)
            }
          });
          let G = {
              image: {
                button: "top-0 right-0",
                icon: "w-6 h-6",
                text: "w-12 px-2",
                typography: "body_normal"
              },
              header: {
                button: "top-0 right-0",
                icon: "w-6 h-6",
                text: "w-12 px-2",
                typography: "body_normal"
              },
              card: {
                button: "absolute bottom-3 right-3",
                icon: "w-4 h-4",
                text: "w-10 pl-1 !leading-none",
                typography: "small_2"
              }
            } [p],
            Q = E ? "favorited" : "";
          return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("button", {
              type: "button",
              className: "focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-2\n          focus-visible:outline-lidl-color-blue ".concat(G.button),
              "data-testid": "client-favorite-icon-button",
              "data-favorited": Q,
              onClick: H,
              onKeyDown: (0, x.H)(H),
              children: (0, i.jsxs)("span", {
                className: "p-2 rounded-full pointer-events-auto flex flex-row bg-white items-center\n            fill-primary-base border border-gray-250 hover:bg-gray-lightest active:bg-gray-250",
                children: [(0, i.jsx)(w.Z, {
                  className: G.icon,
                  name: "".concat(E ? "heart-solid" : "heart-regular"),
                  color: "".concat(E ? "interaction_blue" : "grayscale")
                }), !!P && (0, i.jsx)(n.x, {
                  as: "span",
                  "data-testid": "client-favorite-icon-favorite-count",
                  typography: G.typography,
                  className: "inline-block text-center ".concat(G.text),
                  children: P
                })]
              })
            }), (0, i.jsx)(j.q, {
              active: J,
              ref: L
            }), (0, i.jsx)(b.Z, {
              visible: J,
              title: S.favoriteSignInTitle,
              description: S.favoriteSignInDescription,
              imageUrl: o.Z.src,
              onShow: () => (0, u.Z)({
                event: "page_view_custom",
                screen_name: "login_modal",
                sso_id: "notlogged",
                page_type: W
              }),
              onClose: () => Z(!1),
              primaryButton: {
                text: S.favoriteSignInButton,
                onPress: () => {
                  var e;
                  (0, u.Z)({
                    event: "click_signin",
                    origin: "authentication_modal",
                    page_type: W
                  }), Z(!1), M({
                    action: r.T.ADD_FAVORITE,
                    recipeId: null !== (e = t.id) && void 0 !== e ? e : ""
                  })
                }
              },
              refFocusOnClose: L
            }), z && (0, i.jsx)(_.Z, {
              title: z.title,
              type: z.type,
              primaryButton: z.button ? {
                label: S.toastShowButtonLabel,
                onClick: () => {
                  I.push(S.urlFavorites)
                }
              } : void 0,
              onClose: () => U(null)
            })]
          })
        }
    },
    6633: function(e, t, a) {
      a.d(t, {
        q: function() {
          return n
        }
      });
      var i = a(7437);
      let n = (0, a(2265)
        .forwardRef)(function(e, t) {
        let {
          active: a
        } = e;
        return a ? (0, i.jsx)("span", {
          ref: t,
          tabIndex: 0,
          className: "sr-only"
        }) : null
      })
    },
    349: function(e, t, a) {
      var i = a(7437),
        n = a(4910),
        o = a(2265),
        r = a(8725),
        l = a(8484),
        s = a(6291),
        c = a(8313);
      t.Z = e => {
        let {
          title: t,
          autoCloseMs: a = 5e3,
          type: d = "none",
          primaryButton: u,
          onClose: f
        } = e, {
          isIos: p
        } = (0, n.K)();
        return (0, o.useEffect)(() => {
          if (a) {
            let e = setTimeout(f, a);
            return () => {
              clearTimeout(e)
            }
          }
        }), (0, i.jsx)(c.Z, {
          portalId: "notification-portal",
          children: (0, i.jsx)(r.Z, {
            className: "fixed ".concat(p ? "bottom-24" : "bottom-4", " z-50 lg:inset-x-0"),
            children: (0, i.jsx)(l.Z, {
              cols: 12,
              mdpCols: 8,
              mdpStartCol: 5,
              mdlCols: 6,
              mdlStartCol: 7,
              lgCols: 4,
              lgStartCol: 9,
              "data-testid": "notification-snackbar",
              children: (0, i.jsxs)("div", {
                "data-testid": "notification-snackbar-content",
                className: "font-new flex gap-4 relative p-4 items-center rounded-lg min-w-full w-full bg-gray-darkest text-white",
                role: "dialog",
                children: [(0, i.jsxs)("div", {
                  className: "flex flex-grow gap-2 justify-items-start items-center text-left",
                  children: ["none" === d ? null : (0, i.jsx)(s.default, {
                    className: "w-6 flex-shrink-0 fill-ods-red-light",
                    bundle: "lidl",
                    icon: "exclamation-triangle"
                  }), (0, i.jsx)("span", {
                    children: t
                  })]
                }), u && (0, i.jsx)("button", {
                  type: "button",
                  className: "font-semibold text-ods-yellow-base hover:text-ods-yellow-darker",
                  onClick: u.onClick,
                  children: u.label
                }), (0, i.jsx)("button", {
                  type: "button",
                  "data-testid": "notification-snackbar-close",
                  className: "p-1",
                  onClick: f,
                  children: (0, i.jsx)(s.default, {
                    bundle: "nucleus",
                    icon: "close",
                    className: "w-4 fill-current"
                  })
                })]
              })
            })
          })
        })
      }
    },
    8313: function(e, t, a) {
      a.d(t, {
        Z: function() {
          return o
        }
      });
      var i = a(2265),
        n = a(4887);

      function o(e) {
        let {
          portalId: t,
          children: a
        } = e, [o, r] = (0, i.useState)(!1), [l, s] = (0, i.useState)(null);
        return ((0, i.useEffect)(() => {
          s(document.getElementById(t)), r(!0)
        }, []), o && l) ? (0, n.createPortal)(a, l) : null
      }
    },
    8506: function(e, t, a) {
      a.d(t, {
        v: function() {
          return h
        }
      });
      var i = a(7437),
        n = a(4560),
        o = a(7826),
        r = a(287);
      let l = (e, t, a) => 1 === e ? "1 ".concat(t) : "".concat(e, " ")
        .concat(a),
        s = e => {
          let {
            totalMinutes: t,
            loc: a
          } = e, i = Math.floor(t / 60), n = t % 60;
          return 1 === i && 0 === n ? "60 ".concat(a.textMinutesPlural) : i > 0 ? "".concat(l(i, a.textHoursSingular, a.textHoursPlural), " ")
            .concat(l(n, a.textMinutesSingular, a.textMinutesPlural)) : l(n, a.textMinutesSingular, a.textMinutesPlural)
        },
        c = e => {
          let {
            difficulty: t,
            loc: a
          } = e;
          switch ("".concat(t)) {
            case "3":
              return a.textRecipeDifficultyHard;
            case "2":
              return a.textRecipeDifficultyMedium;
            default:
              return a.textRecipeDifficultyEasy
          }
        };
      var d = a(3145),
        u = a(8700),
        f = a(5861),
        p = a(6086);
      let m = e => {
          var t, a;
          return {
            sm: {
              src: null == e ? void 0 : null === (a = e.imageVariations) || void 0 === a ? void 0 : null === (t = a.find(e => "recipe_640x360" === e.filter)) || void 0 === t ? void 0 : t.storageUrl
            }
          }
        },
        v = e => {
          var t, a;
          return {
            sm: {
              src: null == e ? void 0 : null === (a = e.imageVariations) || void 0 === a ? void 0 : null === (t = a.find(e => "recipe_640x360" === e.filter)) || void 0 === t ? void 0 : t.storageUrl
            }
          }
        },
        g = {
          xsp: {
            aspectRatio: "16x9",
            sizes: "60vw"
          },
          mdp: {
            aspectRatio: "16x9",
            sizes: "320px"
          },
          lg: {
            aspectRatio: "16x9",
            sizes: "332px"
          }
        },
        x = {
          xsp: {
            aspectRatio: "4x3",
            sizes: "60vw"
          },
          xsl: {
            aspectRatio: "16x9",
            sizes: "60vw"
          },
          mdp: {
            aspectRatio: "4x3",
            sizes: "320px"
          },
          mdl: {
            aspectRatio: "16x9",
            sizes: "320px"
          },
          lg: {
            aspectRatio: "16x9",
            sizes: "332px"
          }
        },
        h = e => {
          var t, a, l, h, y, w;
          let {
            recipe: b,
            recipePosition: j,
            totalRecipes: _,
            variant: S = "teaser",
            loc: N,
            favoritesIds: k,
            favoriteCount: C,
            accentBadge: I,
            standardBadge: R,
            trackingInfo: E,
            onFavoritesClick: T,
            ...P
          } = e, O = "".concat(N.textUrlRecipes, "/")
            .concat(b.slug), D = "teaser" === S ? m(b) : v(b), A = "teaser" === S ? "aspect-video" : "aspect-4/3 xsl:aspect-video mdp:aspect-4/3 mdl:aspect-video", z = (null !== (a = b.cookingTime) && void 0 !== a ? a : 0) + (null !== (l = b.preparationTime) && void 0 !== l ? l : 0), U = null !== (h = b.difficulty) && void 0 !== h ? h : 0, J = (null === (t = b.chefs) || void 0 === t ? void 0 : t.map(e => {
                let {
                  name: t
                } = e;
                return t
              })
              .join(" & ")) || "";
          return (0, i.jsxs)("article", {
            className: "h-full group/card basis-3/5 md:basis-80 lg:basis-[332px] shrink relative",
            "data-name": b.name,
            "data-testid": O,
            ...P,
            children: [(0, i.jsxs)(o.default, {
              className: "block h-full border border-gray-250 rounded-lg overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-base focus-visible:outline-offset-2",
              href: O,
              trackClick: {
                ...E,
                recipe_name: b.name,
                recipe_id: b.id,
                chef: b.chefs && b.chefs.length > 0 ? b.chefs.map(e => e.name)
                  .toString() : "",
                difficulty: b.difficulty,
                time: (null !== (y = b.cookingTime) && void 0 !== y ? y : 0) + (null !== (w = b.preparationTime) && void 0 !== w ? w : 0),
                position: j
              },
              children: [(0, i.jsxs)("div", {
                className: "relative",
                children: [(0, i.jsxs)("div", {
                  className: "relative",
                  children: [b.imageInfo ? (0, i.jsx)(f.F, {
                    "data-testid": "recipe-card-image",
                    className: "block relative w-full",
                    alt: b.name || "Recipe image",
                    width: 567,
                    imageSet: "teaser" === S ? g : x,
                    imageInfo: b.imageInfo,
                    lazyLoading: !1
                  }) : (0, i.jsx)(r.Z, {
                    "data-testid": "recipe-card-image",
                    className: "block relative w-full ".concat(A),
                    alt: b.name,
                    width: 574,
                    height: 323,
                    imageSet: D,
                    priority: !0
                  }), (0, i.jsx)("div", {
                    className: "absolute inset-0 bg-white opacity-0 group-hover/card:opacity-30"
                  })]
                }), (0, i.jsxs)("div", {
                  className: "absolute top-3 left-3 flex flex-wrap items-center gap-2",
                  children: [I && (0, i.jsx)(u.default, {
                    appearance: "accent",
                    variant: "primary",
                    size: "m",
                    text: I,
                    dataTestId: "accent-badge"
                  }), R && (0, i.jsx)(u.default, {
                    appearance: "standard",
                    variant: "primary",
                    size: "m",
                    text: R,
                    dataTestId: "standard-badge"
                  })]
                })]
              }), (0, i.jsxs)("div", {
                className: "p-3 xsl:pb-4 xsl:px-4 flex flex-col gap-3",
                children: [(0, i.jsxs)("div", {
                  className: "flex flex-col gap-2",
                  children: [(0, i.jsxs)("div", {
                    className: "flex flex-wrap items-center gap-2 grow text-xs xl:text-sm text-gray-650",
                    children: [(0, i.jsx)(u.default, {
                      icon: "interaction/clock",
                      appearance: "neutral",
                      variant: "secondary",
                      size: "s",
                      text: s({
                        totalMinutes: z,
                        loc: N
                      }),
                      dataTestId: N.textLabelCookingTime
                    }), (0, i.jsx)(u.default, {
                      icon: "food-and-beverage/chefs-hat",
                      appearance: "neutral",
                      variant: "secondary",
                      size: "s",
                      text: c({
                        difficulty: U,
                        loc: N
                      }),
                      dataTestId: N.textLabelDifficulty
                    })]
                  }), (0, i.jsx)("div", {
                    children: (0, i.jsx)(n.x, {
                      as: "span",
                      typography: "headline_6",
                      "data-testid": "recipe-name",
                      "data-rid": "recipe-name",
                      isProminent: !0,
                      className: "line-clamp-2 text-ellipsis",
                      children: b.name
                    })
                  })]
                }), b.chefs && b.chefs.length > 0 && (0, i.jsxs)("div", {
                  className: "flex gap-1 items-center self-stretch",
                  children: [(0, i.jsx)("div", {
                    className: "flex shrink-0",
                    children: b.chefs.map(e => e.imageVariations && e.imageVariations.length > 0 ? (0, i.jsx)(d.default, {
                      className: "lirc-o-recipe-meta-chef__image_new",
                      height: 160,
                      width: 160,
                      src: e.imageVariations[0].storageUrl,
                      alt: e.name
                    }, e.name) : null)
                  }), (0, i.jsx)("div", {
                    className: "flex flex-col gap-0.5 justify-start text-sm overflow-hidden",
                    children: (0, i.jsx)("div", {
                      className: "flex font-semibold underline-offset-2",
                      children: (0, i.jsx)(n.x, {
                        as: "span",
                        typography: "small_2",
                        title: J,
                        className: "line-clamp-2 text-ellipsis",
                        children: J
                      })
                    })
                  })]
                })]
              })]
            }), (0, i.jsx)("div", {
              className: "absolute top-0 inset-x-0 pointer-events-none ".concat(A),
              children: (0, i.jsx)(p.Z, {
                recipe: b,
                recipePosition: j,
                totalRecipes: _,
                favoritesIds: k,
                favoriteCount: C,
                variant: "card",
                onClick: T,
                loc: N
              })
            })]
          }, b.id)
        }
    },
    8725: function(e, t, a) {
      var i = a(7437);
      t.Z = e => {
        let {
          children: t,
          className: a = "",
          isBgGray: n = !1,
          "data-testid": o
        } = e;
        return (0, i.jsx)("div", {
          className: n ? "bg-gray-lightest" : void 0,
          "data-testid": o,
          children: (0, i.jsx)("div", {
            className: "grid grid-cols-12 gap-4 lg:gap-6 px-4 mdp:px-6 mdl:px-8 lg:px-0 w-full\n          lg:max-w-[1320px] lg:mx-auto ".concat(a),
            children: t
          })
        })
      }
    },
    8700: function(e, t, a) {
      var i = a(7437),
        n = a(6206);
      t.default = e => {
        let {
          dataTestId: t,
          ...a
        } = e;
        return (0, i.jsx)(n.C, {
          ...a,
          "data-testid": null != t ? t : "icon-badge"
        })
      }
    },
    5861: function(e, t, a) {
      a.d(t, {
        F: function() {
          return f
        }
      });
      var i = a(7437);
      let n = "avif",
        o = {
          xsp: {
            "1x1": "aspect-square",
            "4x3": "aspect-4/3",
            "16x9": "aspect-video"
          },
          xsl: {
            "1x1": "xsl:aspect-square",
            "4x3": "xsl:aspect-4/3",
            "16x9": "xsl:aspect-video"
          },
          mdp: {
            "1x1": "mdp:aspect-square",
            "4x3": "mdp:aspect-4/3",
            "16x9": "mdp:aspect-video"
          },
          mdl: {
            "1x1": "mdl:aspect-square",
            "4x3": "mdl:aspect-4/3",
            "16x9": "mdl:aspect-video"
          },
          lg: {
            "1x1": "lg:aspect-square",
            "4x3": "lg:aspect-4/3",
            "16x9": "lg:aspect-video"
          }
        },
        r = {
          "1x1": [640, 960, 1280],
          "4x3": [768, 1280, 1600],
          "16x9": [768, 1280, 1920]
        },
        l = [{
          key: "lg",
          media: "(min-width: 1440px)"
        }, {
          key: "mdl",
          media: "(min-width: 1024px)"
        }, {
          key: "mdp",
          media: "(min-width: 767px)"
        }, {
          key: "xsl",
          media: "(min-width: 567px)"
        }];
      var s = a(181);
      let c = (e, t) => {
          let a = t.name.replace(/\.[^/.]+$/, ""),
            i = r[e] || [],
            o = (0, s.M)("NEXT_PUBLIC_RECIPES_CDN_URL") || "";
          return i.map(i => "".concat(o, "/images-v2")
              .concat(t.prefix, "/")
              .concat(e, "_")
              .concat(i, "w_")
              .concat(a, ".")
              .concat(n, " ")
              .concat(i, "w"))
            .join(", ")
        },
        d = (e, t) => {
          let a = t.name.replace(/\.[^/.]+$/, ""),
            i = (0, s.M)("NEXT_PUBLIC_RECIPES_CDN_URL") || "";
          return "".concat(i, "/images-v2")
            .concat(t.prefix, "/")
            .concat(e, "_fallback_")
            .concat(a, ".jpeg")
        };
      var u = a(2265);
      let f = e => {
        let {
          className: t = "",
          "data-testid": a = "responsive-picture",
          imageInfo: r,
          imageSet: s,
          alt: f,
          width: p,
          height: m,
          lazyLoading: v = !1
        } = e, g = Object.entries(s)
          .map(e => {
            var t, a;
            let [i, n] = e;
            return null !== (a = null === (t = o[i]) || void 0 === t ? void 0 : t[null == n ? void 0 : n.aspectRatio]) && void 0 !== a ? a : ""
          })
          .filter(Boolean)
          .join(" ");
        return (0, i.jsxs)("picture", {
          "data-testid": a,
          className: "block relative ".concat(g, " ")
            .concat(t)
            .trim(),
          children: [l.map(e => {
            let {
              key: t,
              media: a
            } = e, o = s[t];
            return o ? (0, i.jsxs)(u.Fragment, {
              children: [(0, i.jsx)("source", {
                media: a,
                type: "image/".concat(n),
                srcSet: c(o.aspectRatio, r),
                sizes: o.sizes || "100vw"
              }), (0, i.jsx)("source", {
                media: a,
                type: "image/jpeg",
                srcSet: d(o.aspectRatio, r),
                sizes: o.sizes || "100vw"
              })]
            }, t) : null
          }), (0, i.jsx)("source", {
            type: "image/".concat(n),
            srcSet: c(s.xsp.aspectRatio, r),
            sizes: s.xsp.sizes || "100vw"
          }), (0, i.jsx)("img", {
            src: d(s.xsp.aspectRatio, r),
            alt: f,
            width: p,
            height: m,
            loading: v ? "lazy" : "eager",
            fetchPriority: "high",
            style: {
              width: "100%",
              height: "auto"
            }
          })]
        })
      }
    },
    6291: function(e, t, a) {
      var i = a(7437),
        n = a(2265);
      let o = {
        lidl: "/assets/lidl.7799737d945605ff.svg",
        nucleus: "/assets/nucleus.06ec81d8e758b55d.svg"
      };
      t.default = e => {
        let {
          bundle: t,
          icon: a,
          className: r,
          title: l
        } = e, s = (0, n.useId)();
        return (0, i.jsxs)("svg", {
          className: r,
          "aria-hidden": "true",
          "aria-labelledby": l ? s : void 0,
          role: "img",
          focusable: "false",
          "data-testid": "icon-".concat(a),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 1 1",
          children: [l && (0, i.jsx)("title", {
            id: s,
            children: l
          }), (0, i.jsx)("use", {
            href: "".concat(o[t], "#")
              .concat(a)
          })]
        })
      }
    },
    5666: function(e, t, a) {
      var i = a(7437),
        n = a(7777);
      t.Z = e => {
        let {
          dataTestId: t,
          ...a
        } = e;
        return (0, i.jsx)(n.JO, {
          ...a,
          "data-testid": null != t ? t : "icon-badge"
        })
      }
    },
    5125: function(e, t, a) {
      var i = a(7437),
        n = a(3200),
        o = a(3145),
        r = a(2265),
        l = a(8313);
      t.Z = e => {
        let {
          visible: t,
          onShow: a,
          onClose: s,
          title: c,
          children: d,
          description: u,
          disablePageScroll: f = !0,
          actionStyle: p = "primary",
          imageUrl: m,
          primaryButton: v,
          secondaryButton: g,
          refFocusOnClose: x
        } = e, h = (0, r.useRef)(null), y = () => {
          var e;
          s(), null == x || null === (e = x.current) || void 0 === e || e.focus()
        };
        return (0, r.useEffect)(() => {
          if (t && a) {
            var e;
            a(), null === (e = h.current) || void 0 === e || e.focus()
          }
        }, [t]), (0, i.jsx)(l.Z, {
          portalId: "modal-portal",
          children: t && (0, i.jsxs)("div", {
            className: "fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50\n          ".concat(f ? "global-no-scroll" : ""),
            children: [(0, i.jsx)("div", {
              onClick: y,
              "data-testid": "modal-dialog-overlay",
              className: "absolute top-0 left-0 w-full h-full"
            }), (0, i.jsx)("div", {
              className: "flex justify-center align-middle w-full focus:outline-none",
              role: "dialog",
              tabIndex: 0,
              ref: h,
              children: (0, i.jsx)(n.V, {
                actionStyle: p,
                content: d,
                image: m ? (0, i.jsx)(o.default, {
                  className: "self-center",
                  width: 424,
                  height: 240,
                  src: m,
                  alt: "",
                  "data-testid": "modal-image"
                }) : void 0,
                title: c,
                description: u,
                onClosePress: y,
                positiveAction: v,
                negativeAction: g
              })
            })]
          })
        })
      }
    },
    287: function(e, t, a) {
      var i = a(7437),
        n = a(3145);
      t.Z = e => {
        let {
          className: t = "",
          "data-testid": a,
          imageSet: {
            lg: o,
            md: r,
            sm: l
          },
          alt: s,
          width: c,
          height: d,
          priority: u = !1
        } = e;
        return (0, i.jsxs)("picture", {
          "data-testid": a || "responsive-picture",
          className: t,
          children: [o && (0, i.jsx)("source", {
            media: "(min-width:".concat(o.minWidth || "960px", ")"),
            srcSet: o.src
          }), r && (0, i.jsx)("source", {
            media: "(min-width:".concat(r.minWidth || "640px", ")"),
            srcSet: r.src
          }), (0, i.jsx)(n.default, {
            className: "w-full h-full object-cover",
            src: l.src,
            alt: s,
            width: c,
            height: d,
            priority: u
          })]
        })
      }
    },
    5777: function(e, t, a) {
      a.d(t, {
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
    8584: function(e, t, a) {
      a.d(t, {
        T: function() {
          return i
        }
      });
      let i = {
        ADD_FAVORITE: "add-favorite",
        ADD_SHOPPING_LIST: "add-shopping-list",
        OPEN_SNAP_AND_COOK: "open-snap-and-cook"
      }
    },
    163: function(e, t, a) {
      var i;
      a.d(t, {
          W: function() {
            return i
          }
        }), (i || (i = {}))
        .favoritesRemove = "favorites_remove"
    },
    820: function(e, t, a) {
      a.d(t, {
        Z: function() {
          return n
        }
      });
      var i = a(9376);

      function n() {
        let e = (0, i.useSearchParams)();
        return t => {
          try {
            let a = {
                ...Object.fromEntries(e.entries()),
                ...t
              },
              i = new URLSearchParams(a),
              n = window.location.href.split("?")[0],
              o = encodeURIComponent("".concat(n, "?")
                .concat(i.toString()));
            window.location.href = "/sso_handler?lp_website=true&redirect_uri=".concat(o)
          } catch (e) {
            console.warn("Error during login and redirect:", e)
          }
        }
      }
    },
    2386: function(e, t, a) {
      a.d(t, {
        A: function() {
          return o
        }
      });
      var i = a(9376),
        n = a(2265);

      function o(e) {
        var t;
        let {
          action: a,
          matchingCallback: o,
          oppositeCallback: r
        } = e, l = (0, i.useRouter)(), s = (0, i.usePathname)(), c = (0, i.useSearchParams)(), d = null !== (t = c.get("action")) && void 0 !== t ? t : void 0, u = e => {
          if (!(null == e ? void 0 : e.length)) return;
          let t = new URLSearchParams(Array.from(c.entries())
              .reduce((t, a) => {
                let [i, n] = a;
                return e.includes(i) || (t[i] = n), t
              }, {}))
            .toString();
          l.replace("".concat(s)
            .concat(t ? "?".concat(t) : ""))
        };
        (0, n.useEffect)(() => {
          var e;
          let t = new AbortController,
            i = (null === (e = c.entries) || void 0 === e ? void 0 : e.call(c)) ? Object.fromEntries(c.entries()) : {};
          return d === a ? o(i, u, t) : r && r(i, t), () => {
            t.abort()
          }
        }, [])
      }
    },
    6077: function(e, t, a) {
      a.d(t, {
        a3: function() {
          return o
        },
        G4: function() {
          return r
        },
        Ni: function() {
          return s
        }
      });
      var i = a(2050),
        n = a(181);
      let o = async (e, t, a) => {
        await (0, i.J)("".concat((0, n.M)("PUBLIC_RECIPES_API_URL"), "/api/v1/favorites"), t, {
          method: "put",
          body: JSON.stringify({
            recipeId: e
          }),
          signal: null == a ? void 0 : a.signal
        })
      }, r = async e => await (0, i.J)("".concat((0, n.M)("PUBLIC_RECIPES_API_URL"), "/api/v1/favorites/ids"), e);
      var l = a(163);
      let s = async (e, t) => {
        await (0, i.J)("".concat((0, n.M)("PUBLIC_RECIPES_API_URL"), "/api/v1/favorites/")
          .concat(e), t, {
            method: "delete"
          }), window.dispatchEvent(new CustomEvent(l.W.favoritesRemove, {
          bubbles: !0,
          detail: {
            recipeId: e
          }
        }))
      }
    },
    3179: function(e, t, a) {
      a.d(t, {
        UQ: function() {
          return l
        },
        MF: function() {
          return s
        },
        jl: function() {
          return c
        }
      });
      var i = a(5777),
        n = a(8132);
      let o = function(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        try {
          let a = (0, n.t)(e);
          if (!(null == a ? void 0 : a.exp)) return !1;
          if (!t) return !0;
          let i = new Date(1e3 * a.exp - 3e5),
            o = new Date;
          return i > o
        } catch (e) {
          return !1
        }
      };
      var r = a(9007);
      let l = async function() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
          t = (0, r.zf)(i.Q.accessToken);
        if (t) {
          if (o(t, e)) return t;
          try {
            await fetch("/sso/refresh_token")
          } catch (e) {} finally {
            return (0, r.zf)(i.Q.accessToken)
          }
        }
      }, s = async () => {
        let e = await l(!1);
        if (!e) return;
        let t = (0, n.t)(e);
        if (null == t ? void 0 : t.exp) return t.sub
      }, c = () => {
        let e = (0, r.zf)(i.Q.accessToken);
        return !!e && o(e, !1)
      }
    },
    4910: function(e, t, a) {
      a.d(t, {
        K: function() {
          return i
        }
      });

      function i() {
        let e = window.navigator,
          t = e.userAgent.toLowerCase(),
          a = /ip(ad|hone|od)/.test(t) && e.maxTouchPoints > 1;
        return {
          isAndroid: /android/.test(t),
          isIos: a
        }
      }
    },
    9007: function(e, t, a) {
      a.d(t, {
        JG: function() {
          return n
        },
        zf: function() {
          return i
        }
      });
      let i = e => {
          if ("undefined" != typeof document)
            for (let t of (document.cookie || "")
                .split("; ")) {
              let [a, i] = t.trim()
                .split("=");
              if (a === e) return decodeURIComponent(i)
            }
        },
        n = (e, t, a) => {
          if ("undefined" == typeof document) return;
          let i = "";
          if (a) {
            var n = new Date;
            n.setDate(n.getDate() + a), i = "; expires=" + n.toUTCString()
          }
          document.cookie = "".concat(e, "=")
            .concat(t || "")
            .concat(i, "; path=/")
        }
    },
    4317: function(e, t, a) {
      a.d(t, {
        C7: function() {
          return u
        },
        Tf: function() {
          return p
        },
        an: function() {
          return f
        }
      });
      var i = a(5777),
        n = a(181),
        o = a(2146);
      let r = "clientErrorLogs",
        l = () => "enabled" === (0, n.M)("CLIENT_ERROR_LOGGING"),
        s = (e, t) => {
          if (null == t ? void 0 : t.name) {
            var a;
            return {
              ...JSON.parse(JSON.stringify(t, Object.getOwnPropertyNames(t))),
              name: t.name,
              message: t.message,
              stack: "".concat(null === (a = t.stack) || void 0 === a ? void 0 : a.substring(0, 1500), "..."),
              cause: t.cause
            }
          }
          return t
        },
        c = () => {
          let e = f();
          return ((null == e ? void 0 : e.clientErrors) || [])
            .filter(e => new Date(e.timestampUtc)
              .getTime() > Date.now() - 864e5)
        },
        d = e => {
          let t = f(),
            a = new Date;
          if (!(null == t ? void 0 : t.lastAdded)) {
            let t = {
              clientErrors: [e],
              lastAdded: a.toJSON(),
              lastCleaned: a.toJSON()
            };
            return localStorage.setItem(r, JSON.stringify(t))
          }
          return (!t.lastCleaned || new Date(t.lastCleaned)
            .getTime() < Date.now() - 864e5) && (t.clientErrors = c() || [], t.lastCleaned = a.toJSON()), t.clientErrors = [e, ...t.clientErrors || []], t.lastAdded = a.toJSON(), localStorage.setItem(r, JSON.stringify(t))
        },
        u = () => {
          if (!(0, o.y)()) return;
          let e = f();
          if (e) try {
            e.clientErrors = [], e.lastCleaned = new Date()
              .toJSON(), localStorage.setItem(r, JSON.stringify(e))
          } catch (e) {
            console.warn("Error while trying to clean errors from localStorage", e)
          }
        },
        f = () => l() && (0, o.y)() ? JSON.parse(localStorage.getItem(r) || "null") : null,
        p = (e, t) => {
          var a, n, r, c;
          if (!l() || !(0, o.y)()) return;
          let u = null === (n = document) || void 0 === n ? void 0 : null === (a = n.cookie) || void 0 === a ? void 0 : a.split("; ")
            .reduce((e, t) => {
              let [a, n] = t.split("=");
              return a !== i.Q.session && (e[a.trim()] = null == n ? void 0 : n.trim()), e
            }, {}),
            f = {
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
              currentUrl: null === (c = window) || void 0 === c ? void 0 : null === (r = c.location) || void 0 === r ? void 0 : r.href
            };
          try {
            d(f)
          } catch (e) {
            console.warn("Error while trying to log errors into localStorage", e, {
              payload: f
            })
          }
        }
    },
    2050: function(e, t, a) {
      a.d(t, {
        J: function() {
          return o
        }
      });
      var i = a(3179),
        n = a(8799);
      async function o(e, t) {
        let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          o = a.accessToken || await (0, i.UQ)();
        if (!o) throw Error("Access token not provided and not found in cookies");
        let r = {
          ...a.headers,
          Authorization: "Bearer ".concat(o)
        };
        return (null == a ? void 0 : a.returnRaw) ? (0, n.W)(e, t, {
          ...a,
          returnRaw: !0,
          headers: r
        }) : (0, n.W)(e, t, {
          ...a,
          returnRaw: !1,
          headers: r
        })
      }
    },
    181: function(e, t, a) {
      a.d(t, {
        M: function() {
          return n
        }
      });
      var i = a(5566);
      let n = function(e) {
        var t, a, n, o;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return null !== (o = null !== (n = null === (t = globalThis.publicEnv) || void 0 === t ? void 0 : t[e]) && void 0 !== n ? n : null == i ? void 0 : null === (a = i.env) || void 0 === a ? void 0 : a[e]) && void 0 !== o ? o : r
      }
    },
    5411: function(e, t, a) {
      a.d(t, {
        H: function() {
          return i
        }
      });
      let i = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ["Enter"];
        return a => {
          t.includes(a.key) && (a.preventDefault(), e(a))
        }
      }
    },
    2146: function(e, t, a) {
      a.d(t, {
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
    8799: function(e, t, a) {
      a.d(t, {
        W: function() {
          return i
        }
      });
      async function i(e, t) {
        var a, i;
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          {
            isMultipart: o,
            returnRaw: r,
            ...l
          } = n,
          s = null !== (i = null === (a = l.headers) || void 0 === a ? void 0 : a["Content-Type"]) && void 0 !== i ? i : "application/json; charset=UTF-8",
          c = new Headers({
            ...t ? {
              "Accept-Language": t
            } : {},
            accept: "application/json",
            ...l.headers,
            ...o ? {} : {
              "Content-Type": s
            }
          }),
          d = {
            method: "get",
            ...l,
            headers: c
          },
          u = await fetch(e, d);
        if (!u.ok) {
          let e = await u.text() || "No readable content received from server";
          throw {
            message: "[".concat(u.status, "] ")
              .concat(u.statusText, ": ")
              .concat(e),
            options: {
              ...d,
              headers: Object.fromEntries(d.headers)
            },
            responseText: e,
            rawResponse: u,
            status: u.status,
            statusText: u.statusText,
            type: u.type,
            url: u.url
          }
        }
        if (r) return u;
        let f = await u.text();
        try {
          return JSON.parse(f)
        } catch (e) {
          return f
        }
      }
    },
    531: function(e, t) {
      t.Z = {
        src: "/_next/static/media/recipesEmptyFavorites.96f1d583.svg",
        height: 184,
        width: 328,
        blurWidth: 0,
        blurHeight: 0
      }
    }
  }
]);