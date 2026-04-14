(self.webpackChunk_N_E = self.webpackChunk_N_E || [])
.push([
  [3989], {
    7236: function(e, t, i) {
      Promise.resolve()
        .then(i.bind(i, 9091)), Promise.resolve()
        .then(i.bind(i, 5425)), Promise.resolve()
        .then(i.bind(i, 6456)), Promise.resolve()
        .then(i.bind(i, 4056)), Promise.resolve()
        .then(i.bind(i, 8312)), Promise.resolve()
        .then(i.bind(i, 8003)), Promise.resolve()
        .then(i.bind(i, 6551)), Promise.resolve()
        .then(i.bind(i, 6606)), Promise.resolve()
        .then(i.bind(i, 5044)), Promise.resolve()
        .then(i.t.bind(i, 5878, 23)), Promise.resolve()
        .then(i.t.bind(i, 2972, 23)), Promise.resolve()
        .then(i.bind(i, 6433)), Promise.resolve()
        .then(i.bind(i, 3629)), Promise.resolve()
        .then(i.bind(i, 3717)), Promise.resolve()
        .then(i.bind(i, 2003)), Promise.resolve()
        .then(i.bind(i, 4704)), Promise.resolve()
        .then(i.bind(i, 1734)), Promise.resolve()
        .then(i.bind(i, 1894)), Promise.resolve()
        .then(i.bind(i, 9109)), Promise.resolve()
        .then(i.bind(i, 4418)), Promise.resolve()
        .then(i.bind(i, 4215)), Promise.resolve()
        .then(i.bind(i, 7241)), Promise.resolve()
        .then(i.bind(i, 8782)), Promise.resolve()
        .then(i.bind(i, 9469)), Promise.resolve()
        .then(i.bind(i, 6344)), Promise.resolve()
        .then(i.bind(i, 8515)), Promise.resolve()
        .then(i.bind(i, 3106)), Promise.resolve()
        .then(i.bind(i, 1260)), Promise.resolve()
        .then(i.bind(i, 3487)), Promise.resolve()
        .then(i.bind(i, 6646)), Promise.resolve()
        .then(i.bind(i, 8700)), Promise.resolve()
        .then(i.bind(i, 6291)), Promise.resolve()
        .then(i.bind(i, 7826))
    },
    1347: function(e, t, i) {
      "use strict";
      var s = i(7437);
      t.Z = () => (0, s.jsxs)("article", {
        className: "h-full basis-3/5 md:basis-80 lg:basis-[332px] border border-gray-250 shrink rounded-lg overflow-hidden",
        "data-testid": "recipe-card-skeleton",
        children: [(0, s.jsx)("div", {
          className: "relative aspect-video",
          children: (0, s.jsx)("div", {
            className: "absolute inset-x-4 top-4 bottom-0 bg-gray-250 rounded overflow-hidden"
          })
        }), (0, s.jsxs)("div", {
          className: "pt-3 pb-4 px-4 flex flex-col gap-1",
          children: [(0, s.jsxs)("div", {
            className: "flex flex-wrap items-center gap-2 grow text-xs xl:text-sm text-gray-650",
            children: [(0, s.jsx)("span", {
              className: "w-12 h-4 bg-gray-300 rounded"
            }), (0, s.jsx)("span", {
              className: "w-12 h-4 bg-gray-300 rounded"
            })]
          }), (0, s.jsx)("span", {
            className: "mt-1 w-full h-5 bg-gray-300 rounded"
          }), (0, s.jsx)("span", {
            className: "w-2/3 h-5 bg-gray-300 rounded"
          }), (0, s.jsx)("span", {
            className: "mt-2 w-1/2 h-4 bg-gray-300 rounded"
          })]
        })]
      })
    },
    5680: function(e, t, i) {
      "use strict";
      var s = i(7437),
        n = i(8484);
      t.Z = e => {
        let {
          className: t = "",
          overflows: i = [],
          children: a,
          ...l
        } = e, r = {
            xsl: "-mx-4",
            mdp: "mdp:-mx-6",
            mdl: "mdl:-mx-8",
            lg: "lg:-mx-auto"
          }, o = Object.keys(r)
          .reduce((e, t) => i.includes(t) ? {
            classNames: "".concat(e.classNames, " ")
              .concat(r[t]),
            colsProps: {
              ...e.colsProps,
              ["xsl" === t ? "cols" : "".concat(t, "Cols")]: 12
            }
          } : {
            ...e,
            classNames: "".concat(e.classNames, " ")
              .concat(t, ":mx-0")
              .trim()
          }, {
            classNames: "",
            colsProps: {}
          });
        return (0, s.jsx)(n.Z, {
          className: "".concat(o.classNames, " ")
            .concat(t),
          ...o.colsProps,
          ...l,
          children: a
        })
      }
    },
    8782: function(e, t, i) {
      "use strict";
      var s = i(8732),
        n = i(2769),
        a = i(3179),
        l = i(2265);
      t.default = e => {
        let {
          locale: t,
          userInteraction: i,
          onlyIfAuthenticated: r = !1,
          recipe: o
        } = e;
        return (0, l.useEffect)(() => {
          var e;
          (async () => {
            await (0, n.O)({
              locale: t,
              userInteraction: i,
              onlyIfAuthenticated: r
            })
          })(), (0, s.Z)({
            event: "view_recipe",
            sso_id: (0, a.jl)(),
            recipe_name: o.name,
            recipe_id: o.id,
            chef: null === (e = o.chefs) || void 0 === e ? void 0 : e.map(e => {
                let {
                  name: t
                } = e;
                return t
              })
              .join(" & "),
            difficulty: o.difficulty,
            time: o.cookingTime
          })
        }, []), null
      }
    },
    9469: function(e, t, i) {
      "use strict";
      var s = i(7437),
        n = i(7777),
        a = i(5861),
        l = i(287),
        r = i(8732),
        o = i(2265);
      t.default = e => {
        var t, i, d, c;
        let {
          recipe: u
        } = e, [p, g] = (0, o.useState)(!1), h = {
          lg: {
            src: null == u ? void 0 : null === (i = u.imageVariations) || void 0 === i ? void 0 : null === (t = i.find(e => "recipe_detail_957x449" === e.filter)) || void 0 === t ? void 0 : t.storageUrl,
            minWidth: "1024px"
          },
          sm: {
            src: null == u ? void 0 : null === (c = u.imageVariations) || void 0 === c ? void 0 : null === (d = c.find(e => "recipe_detail_984x657" === e.filter)) || void 0 === d ? void 0 : d.storageUrl
          }
        };
        return (0, s.jsxs)("div", {
          "data-testid": "recipe-detail-header-image",
          className: "relative",
          children: [u.imageInfo ? (0, s.jsx)(a.F, {
            "data-testid": "recipe-detail-image",
            className: "block relative w-full",
            alt: u.name,
            width: 567,
            imageSet: {
              xsp: {
                aspectRatio: "1x1",
                sizes: "100vw"
              },
              xsl: {
                aspectRatio: "16x9",
                sizes: "100vw"
              },
              mdp: {
                aspectRatio: "4x3",
                sizes: "567px"
              },
              mdl: {
                aspectRatio: "16x9",
                sizes: "567px"
              },
              lg: {
                aspectRatio: "16x9",
                sizes: "567px"
              }
            },
            imageInfo: u.imageInfo,
            lazyLoading: !1
          }) : (0, s.jsx)(l.Z, {
            "data-testid": "recipe-detail-image",
            className: "block relative w-full aspect-square xsl:aspect-video mdp:aspect-4/3 mdl:aspect-video",
            alt: u.name,
            width: 567,
            height: 567,
            imageSet: h,
            priority: !0
          }), u.youtubeVideoId && (0, s.jsx)(s.Fragment, {
            children: p ? (0, s.jsx)("div", {
              className: "bg-black absolute inset-0 flex items-center justify-center",
              children: (0, s.jsx)("div", {
                "data-testid": "recipe-detail-video",
                className: "w-full max-h-full aspect-video",
                children: (0, s.jsx)("iframe", {
                  className: "w-full h-full",
                  src: "https://www.youtube.com/embed/".concat(u.youtubeVideoId),
                  allowFullScreen: !0
                })
              })
            }) : (0, s.jsx)("button", {
              "data-testid": "recipe-detail-play-button",
              className: "rounded-full w-12 h-12 flex justify-center items-center absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-icon_button_status-inactive-discrete-color-background-focused/60 print:hidden",
              onClick: () => {
                g(!0), (0, r.Z)({
                  event: "video_start",
                  page_type: "recipe_detail"
                })
              },
              children: (0, s.jsx)(n.JO, {
                name: "fragments/media",
                color: "basic_white",
                className: "relative left-0.5",
                size: 20
              })
            })
          })]
        })
      }
    },
    6344: function(e, t, i) {
      "use strict";
      i.d(t, {
        default: function() {
          return m
        }
      });
      var s = i(7437),
        n = i(6086),
        a = i(4560),
        l = i(6291),
        r = i(5666),
        o = i(7826),
        d = i(8732),
        c = i(5411),
        u = i(2265),
        p = e => {
          let {
            className: t = "",
            variant: i = "discrete",
            recipeName: n,
            loc: {
              textTitle: p,
              textShareMessage: g,
              textShareMail: h,
              textShareFacebook: m,
              textSharePintrest: v,
              textShareTwitter: f,
              textPrint: x
            }
          } = e, [b, y] = (0, u.useState)(!1), _ = window.location.href, j = async () => {
            let e = {
                url: window.location.href,
                title: n,
                text: g
              },
              t = function() {
                let e = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                  t = window.innerWidth <= 1024;
                return e && t
              }();
            if (navigator.share && navigator.canShare(e) && t) {
              await navigator.share(e), (0, d.Z)({
                event: "share",
                origin: "mobile",
                page_type: "recipe_detail"
              });
              return
            }
            t || (b || (0, d.Z)({
              event: "share",
              origin: "desktop",
              page_type: "recipe_detail"
            }), y(e => !e))
          }, w = "flex items-center gap-3 px-4 py-3 no-underline hover:bg-gray-lightest focus:bg-gray-lightest";
          return (0, s.jsxs)("div", {
            className: "".concat(t, " relative flex justify-end"),
            children: [(0, s.jsx)("button", {
              type: "button",
              title: p,
              "data-testid": "recipe-detail-share-button",
              className: "focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-lidl-color-blue",
              onClick: j,
              onKeyDown: (0, c.H)(j),
              children: (0, s.jsx)("span", {
                className: "flex p-2 items-center print:hidden rounded-full pointer-events-auto flex-row\n            bg-white fill-primary-base border border-gray-250 hover:bg-gray-lightest\n            active:bg-gray-250",
                children: (0, s.jsx)(r.Z, {
                  className: "w-6 h-6",
                  name: "interaction/share",
                  color: "grayscale"
                })
              })
            }), b && (0, s.jsxs)("nav", {
              "data-testid": "recipe-detail-share-sheet",
              className: "absolute translate-x-full bg-white rounded-lg z-10 shadow-md min-w-max flex flex-col py-2 print:hidden",
              children: [(0, s.jsxs)(o.default, {
                href: "https://www.facebook.com/sharer/sharer.php?u=".concat(_),
                target: "_blank",
                title: m,
                className: w,
                trackClick: {
                  event: "share_option_selected",
                  method: "facebook",
                  page_type: "recipe_detail"
                },
                children: [(0, s.jsx)(l.default, {
                  bundle: "lidl",
                  icon: "facebook-new",
                  className: "w-6 fill-inherit",
                  title: "Facebook"
                }), (0, s.jsx)(a.x, {
                  color: "grayscale_darkest",
                  typography: "small_1",
                  children: m
                })]
              }), (0, s.jsxs)(o.default, {
                href: "https://x.com/intent/tweet?text=".concat(encodeURI(g), "&url=")
                  .concat(_),
                target: "_blank",
                title: f,
                className: w,
                trackClick: {
                  event: "share_option_selected",
                  method: "twitter",
                  page_type: "recipe_detail"
                },
                children: [(0, s.jsx)(l.default, {
                  bundle: "lidl",
                  icon: "twitter-new",
                  className: "w-6 fill-inherit",
                  title: "Twitter"
                }), (0, s.jsx)(a.x, {
                  color: "grayscale_darkest",
                  typography: "small_1",
                  children: f
                })]
              }), (0, s.jsxs)(o.default, {
                href: "https://www.pinterest.com/pin/create/link/?url=".concat(_, "&description=")
                  .concat(encodeURI(g)),
                target: "_blank",
                title: v,
                className: w,
                trackClick: {
                  event: "share_option_selected",
                  method: "pinterest",
                  page_type: "recipe_detail"
                },
                children: [(0, s.jsx)(l.default, {
                  bundle: "lidl",
                  icon: "pinterest-new",
                  className: "w-6 fill-inherit",
                  title: "Pinterest"
                }), (0, s.jsx)(a.x, {
                  color: "grayscale_darkest",
                  typography: "small_1",
                  children: v
                })]
              }), (0, s.jsxs)(o.default, {
                href: "mailto:?subject=".concat(encodeURI(n), "&body=")
                  .concat(encodeURI(g), "%0A%0A")
                  .concat(_),
                target: "_blank",
                title: h,
                className: w,
                trackClick: {
                  event: "share_option_selected",
                  method: "email",
                  page_type: "recipe_detail"
                },
                children: [(0, s.jsx)(l.default, {
                  bundle: "lidl",
                  icon: "envelope-close",
                  className: "w-6 fill-inherit",
                  title: "Email"
                }), (0, s.jsx)(a.x, {
                  color: "grayscale_darkest",
                  typography: "small_1",
                  children: h
                })]
              }), (0, s.jsxs)("button", {
                title: x,
                className: w,
                onClick: () => {
                  (0, d.Z)({
                    event: "print",
                    page_type: "recipe_detail"
                  }), y(!1), window.print()
                },
                children: [(0, s.jsx)(l.default, {
                  className: "w-6 fill-inherit",
                  bundle: "lidl",
                  icon: "printer"
                }), (0, s.jsx)(a.x, {
                  color: "grayscale_darkest",
                  typography: "small_1",
                  children: x
                })]
              })]
            })]
          })
        },
        g = i(2769),
        h = i(9101),
        m = e => {
          let {
            className: t,
            recipe: i,
            favoriteCount: a,
            locale: l,
            loc: r,
            ...o
          } = e, d = async e => {
            if (e) return;
            let t = {
              interactionType: h.En.AddToFavorites_RecipeDetail,
              recipeId: i.id
            };
            await (0, g.O)({
              locale: l,
              userInteraction: t,
              onlyIfAuthenticated: !0
            })
          };
          return (0, s.jsxs)("div", {
            className: "".concat(t, " flex flex-row mdl:flex-row-reverse gap-4"),
            "data-testid": "recipe-detail-interaction-buttons",
            children: [(0, s.jsx)(p, {
              recipeName: i.name,
              loc: r,
              ...o
            }), (0, s.jsx)(n.Z, {
              variant: "image",
              recipe: i,
              favoriteCount: a,
              onClick: d,
              loc: r
            })]
          })
        }
    },
    8515: function(e, t, i) {
      "use strict";
      i.d(t, {
        default: function() {
          return O
        }
      });
      var s = i(7437),
        n = i(7372),
        a = i(4560),
        l = i(7890),
        r = {
          src: "/_next/static/media/recipesShoppingList.2e9bac1b.svg"
        },
        o = i(6633),
        d = i(349),
        c = i(3389),
        u = i(8584),
        p = i(820),
        g = i(2386),
        h = i(8732),
        m = i(3179);
      let v = e => (null == e ? void 0 : e.flatMap(e => {
        var t;
        return (null === (t = e.ingredients) || void 0 === t ? void 0 : t.map(t => ({
          ...t,
          ingredientGroup: e.order
        }))) || []
      })) || [];
      var f = i(2265),
        x = i(6334),
        b = i(5125),
        y = i(8646);
      let _ = (e, t) => (Math.round(100 * e) / 100)
        .toString()
        .replace(".", t);
      var j = e => {
          var t;
          let {
            ingredientGroup: i,
            unitsMultipler: n,
            onSelectChange: l,
            selectedIngredients: r
          } = e;
          return (0, s.jsxs)("div", {
            className: "pt-2",
            children: [i.name && "default" !== i.name.toLowerCase() && (0, s.jsx)(a.x, {
              as: "h3",
              className: "uppercase my-2",
              typography: "body_normal",
              color: "grayscale_darkest",
              children: i.name
            }), (0, s.jsx)("ul", {
              className: "flex flex-col gap-1",
              children: null === (t = i.ingredients) || void 0 === t ? void 0 : t.map((e, t) => {
                let o = !e.quantityTo && !!e.quantityFrom && e.quantityFrom * n <= 1;
                return (0, s.jsx)("li", {
                  className: "py-1",
                  "data-name": e.singular,
                  children: (0, s.jsxs)("label", {
                    className: "flex items-center",
                    "data-testid": "ingredient-".concat(e.singular, "-label"),
                    children: [l && (0, s.jsx)(y.X, {
                      name: e.id,
                      className: "flex mr-4",
                      value: "igrp-".concat(i.order, "-")
                        .concat(e.id),
                      onChangeCapture: t => {
                        t.stopPropagation(), t.preventDefault(), l(e.id, i.order || 0, t.target.checked)
                      },
                      checked: r.some(t => t.id === e.id && t.ingredientGroup === i.order),
                      "data-testid": "ingredient-".concat(e.singular, "-checkbox")
                    }), (0, s.jsxs)("div", {
                      className: "flex flex-col",
                      children: [(0, s.jsxs)("div", {
                        className: "flex flex-row",
                        children: [0 !== e.quantityFrom && (0, s.jsxs)(a.x, {
                          as: "span",
                          typography: "headline_6",
                          color: "grayscale_darkest",
                          isProminent: !0,
                          children: [!!e.quantityFrom && e.quantityFrom > 0 && (0, s.jsx)("span", {
                            "data-testid": "quantity-from",
                            children: _(e.quantityFrom * n, ",")
                          }), !!e.quantityTo && e.quantityTo > 0 && e.quantityTo !== e.quantityFrom && (0, s.jsxs)("span", {
                            children: ["\xa0", (0, s.jsx)("span", {
                              children: "-"
                            }), "\xa0", (0, s.jsx)("span", {
                              "data-testid": "quantity-to",
                              children: _(e.quantityTo * n, ",")
                            })]
                          }), "\xa0"]
                        }), e.unit && e.unit.singular && (0, s.jsx)(a.x, {
                          as: "span",
                          typography: "headline_6",
                          "data-testid": "unit",
                          color: "grayscale_darkest",
                          isProminent: !0,
                          className: "mr-2",
                          children: o || !e.unit.plural ? e.unit.singular : e.unit.plural
                        }), (0, s.jsx)("div", {
                          "data-testid": "ingredient",
                          className: "align-top",
                          children: (0, s.jsx)(a.x, {
                            as: "span",
                            typography: "headline_6",
                            color: "grayscale_darkest",
                            className: "block",
                            children: o || !e.plural ? e.singular : e.plural
                          })
                        })]
                      }), e.additionalText && (0, s.jsx)(a.x, {
                        as: "span",
                        typography: "headline_6",
                        color: "grayscale_darkest",
                        children: e.additionalText
                      })]
                    })]
                  })
                }, t)
              })
            })]
          })
        },
        w = i(7777),
        P = i(9968),
        N = i(863),
        I = i(6291),
        C = i(2496),
        k = i(396);
      i(3079);
      var S = i(2119),
        T = (0, S.$)("95ffa73aefe9f956693453d9482e4a6afa5bb6de"),
        Z = (0, S.$)("d03725d8ca9c76cde9a420bc81506896d00e8ba6"),
        R = (0, S.$)("4f9bf4f77cac8d7926cbe2e432d60155aded2d7c"),
        A = i(4317),
        E = (0, S.$)("5f1daed21ccbdf9c65a9b50fc3ebb0450c41d1b8");
      let F = async e => {
        let {
          recipeName: t,
          selectedIngredients: i,
          shoppingList: s,
          locale: n,
          servingsMultiplier: a,
          defaultShoppingListName: l,
          shoppingListApiUrl: r,
          token: o
        } = e;
        (0, h.Z)({
          event: "add_to_shoppinglist",
          recipe_name: t,
          quantity: i.length,
          sso_id: await (0, m.MF)()
        });
        try {
          return await E(n, i, a, s ? s.title : l, s ? s.id : void 0, r, "RecipeDetailPage", o)
        } catch (e) {
          throw console.log("Error while trying to upsert the shopping list", e), (0, A.Tf)(e, {
            componentOrPage: "ODS RecipeDetailIngredientsBox",
            message: "Error while trying to upsert the shopping list",
            payload: {
              selectedIngredientsInfo: null == i ? void 0 : i.map(e => ({
                id: null == e ? void 0 : e.id,
                title: null == e ? void 0 : e.singular
              }))
            }
          }), e
        }
      };
      var M = i(9376),
        G = i(9360),
        L = e => {
          let {
            shoppingListApiUrl: t,
            loc: i,
            selectedIngredients: n,
            servingsMultiplier: a,
            recipeName: l,
            onSentToShoppingList: r
          } = e, {
            locale: o
          } = (0, M.useParams)(), {
            defaultShoppingListName: c
          } = i, u = (0, f.useRef)(!1), [p, g] = (0, f.useState)(!1), [v, x] = (0, f.useState)([]), [b, y] = (0, f.useState)(!1), [_, j] = (0, f.useState)(!1), [S, A] = (0, f.useState)(!1), E = e => e && "isCreated" in e && !e.isCreated, L = e => e.title === c, O = async (e, t) => {
            let i = await (0, m.MF)();
            (0, h.Z)({
              event: "select_shoppinglist",
              type: e,
              item_id: t.id,
              recipe_name: l,
              quantity: n.length,
              sso_id: i
            })
          }, q = e => e.title === l ? "recipe" : L(e) ? "ingredients_list" : "lidl_plus", D = async e => {
            if (E(e) && v.length > 10) {
              j(!0), O("maximum_list_message", e);
              return
            }
            O(q(e), e), r(await z(e))
          }, z = async e => {
            y(!0);
            let i = await (0, m.UQ)();
            try {
              E(e) && await T(t, e.title, e.id, o, i);
              let s = n.reduce((e, t) => {
                if (e.existingIds.includes(t.id)) return e;
                let {
                  suggestedProducts: i,
                  ingredientGroup: s,
                  ...n
                } = t;
                return e.ingredients.push(n), e.existingIds.push(t.id), e
              }, {
                existingIds: [],
                ingredients: []
              });
              return await F({
                locale: o,
                recipeName: l,
                selectedIngredients: s.ingredients,
                shoppingList: e,
                servingsMultiplier: a,
                defaultShoppingListName: c,
                shoppingListApiUrl: t,
                token: i
              })
            } catch (e) {
              g(!0)
            } finally {
              y(!1)
            }
          }, U = async () => {
            let e = {
              id: (0, G.Z)(),
              title: l,
              itemsCount: 0,
              eTag: ""
            };
            if (v.length >= 10) {
              j(!0), O("maximum_list_message", e);
              return
            }
            y(!0);
            let i = await (0, m.UQ)();
            await T(t, e.title, e.id, o, i), await D(e), y(!1)
          };
          return (0, f.useEffect)(() => {
            let e = async () => ({
              id: (0, G.Z)(),
              title: c,
              itemsCount: 0,
              eTag: "",
              isCreated: !1
            }), i = async t => t.some(e => e.title === c) || t.length >= 10 ? t : [...t, await e()], s = async (e, i) => {
              let s = await Z(t, e.map(e => e.id), i);
              for (let t = 0; t < s.length; t++) {
                let i = e.find(e => e.id === s[t].shoppingListId);
                i && (i.itemsCount = s[t].itemsCount)
              }
              return e
            }, n = e => !!a(e), a = e => e.find(e => e.title === l), r = e => {
              let t = a(e);
              return t ? [t, ...e.filter(e => e.title !== l)] : e
            }, o = async () => {
              y(!0);
              let e = await (0, m.UQ)();
              try {
                var a;
                let l = await R(t, e),
                  o = (null == l ? void 0 : null === (a = l.data) || void 0 === a ? void 0 : a.lists) || [];
                await s(o, e), o = await i(o), o = r(o), A(n(o)), x(o || []), (0, h.Z)({
                  event: "page_view_custom",
                  screen_name: "selectshoppinglist_modal",
                  sso_id: await (0, m.MF)(),
                  page_type: "recipe_detail"
                })
              } catch (e) {
                g(!0)
              } finally {
                y(!1)
              }
            };
            u.current || (u.current = !0, o())
          }, [t, c]), (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsxs)("ul", {
              className: "flex flex-col px-space-medium-200 py-2",
              "data-testid": "shopping-lists",
              children: [v.map((e, t) => (0, s.jsx)(P.Z, {
                isPressable: !0,
                onPress: () => D(e),
                title: e.title,
                description: t < 10 ? (0, k.Z)(i.items, {
                  numberitems: "".concat(e.itemsCount || 0)
                }) : "",
                startContent: (0, s.jsx)("div", {
                  className: "bg-lidl-color-grayscale_lightest rounded-full h-fit p-3 flex justify-center items-center",
                  children: (0, s.jsx)(w.JO, {
                    name: "interaction/checklist",
                    color: "blue"
                  })
                }),
                badge: t >= 10 ? (0, s.jsx)(N.B, {
                  children: i.maxShoppingListsMessage
                }) : void 0,
                showDivider: !1
              }, "shoppinglist-".concat(e.id))), S ? null : (0, s.jsx)(P.Z, {
                isPressable: !0,
                onPress: () => U(),
                title: i.createShoppingListMessage,
                startContent: (0, s.jsxs)("div", {
                  className: "relative inline-block",
                  children: [(0, s.jsx)("div", {
                    className: "bg-lidl-color-yellow_light rounded-full h-fit p-3 flex justify-center items-center",
                    children: (0, s.jsx)(I.default, {
                      bundle: "lidl",
                      icon: "chefs-hat",
                      className: "w-5 fill-lidl-color-yellow_dark",
                      title: i.createShoppingListMessage
                    })
                  }), (0, s.jsx)("div", {
                    className: "absolute bottom-0 right-0 bg-lidl-color-yellow_dark rounded-full border-2 border-white p-[0.125rem] h-2/5 w-2/5 flex justify-center items-center",
                    children: (0, s.jsx)(w.JO, {
                      name: "interaction/plus",
                      color: "basic_white"
                    })
                  })]
                }),
                badge: v.length < 10 ? void 0 : (0, s.jsx)(N.B, {
                  children: i.maxShoppingListsMessage
                }),
                showDivider: !1
              }, "shoppinglist-create")]
            }), _ && (0, s.jsx)(d.Z, {
              title: i.maxShoppingListsToastMessage,
              type: "error",
              onClose: () => j(!1)
            }), p && (0, s.jsx)(d.Z, {
              title: i.globalError,
              type: "error",
              onClose: () => g(!1)
            }), (0, s.jsx)(C.Z, {
              loading: b,
              className: "w-screen flex justify-center items-center"
            })]
          })
        },
        O = e => {
          var t, i, y, _, w, P;
          let {
            recipe: N,
            loc: I,
            shoppingListApiUrl: C
          } = e, [k, S] = (0, f.useState)(!1), [T, Z] = (0, f.useState)(!1), [R, A] = (0, f.useState)(!1), E = (0, p.Z)(), [F, M] = (0, f.useState)(!1), [G, O] = (0, f.useState)(v(N.ingredientGroups)), q = parseInt(null !== (P = null === (t = N.servingType) || void 0 === t ? void 0 : t.count) && void 0 !== P ? P : "1"), [D, z] = (0, f.useState)(q), U = (0, f.useRef)(null), W = D / q, B = !!C, [H, V] = (0, f.useState)(!1), J = (e, t, i) => {
            O(s => {
              let n = v(N.ingredientGroups)
                .find(i => (null == i ? void 0 : i.id) === e && (null == i ? void 0 : i.ingredientGroup) === t);
              return n ? i ? s.find(i => i.id === e && i.ingredientGroup === t) ? s : [...s, n] : s.filter(e => e.id !== n.id || e.ingredientGroup !== n.ingredientGroup) : s
            }), i && V(!1)
          }, $ = () => {
            let e = v(N.ingredientGroups),
              t = [];
            return e.forEach((e, i) => {
              G.find(t => t.id === e.id && t.ingredientGroup === e.ingredientGroup) && t.push(i)
            }), t
          }, Q = () => {
            O([])
          }, K = () => {
            A(!0)
          }, X = async e => {
            if (A(!1), !e) {
              M(!0);
              return
            }
            V(!0), Q(), (0, h.Z)({
              event: "page_view_custom",
              screen_name: "addedtoshoppinglist_modal",
              sso_id: await (0, m.MF)(),
              page_type: "recipe_detail"
            }), S(!0)
          }, Y = async () => {
            if ((0, m.jl)()) {
              K();
              return
            }
            Z(!0)
          }, ee = e => {
            (0, h.Z)({
              event: "open_shoppinglist",
              origin: e,
              page_type: "recipe_detail"
            }), window.location.href = "https://lidlplus.com/shoppinglist"
          };
          return (0, g.A)({
            action: u.T.ADD_SHOPPING_LIST,
            matchingCallback: async (e, t) => {
              var i;
              let s = v(N.ingredientGroups),
                n = (null === (i = e.selectedIngredientIndexes) || void 0 === i ? void 0 : i.split(",")
                  .map(e => parseInt(e))) || [],
                a = s.filter((e, t) => n.includes(t) && e);
              z(parseFloat((null == e ? void 0 : e.quantityMultiplier) || "1") * q || 1), O(a), K(), t(["action", "selectedIngredientIndexes", "quantityMultiplier"])
            }
          }), (0, s.jsxs)("aside", {
            className: "flex flex-col",
            children: [(0, s.jsx)(a.x, {
              as: "h2",
              typography: "headline_3",
              isProminent: !0,
              color: "grayscale_darkest",
              className: "mb-4",
              children: I.textTitle
            }), (0, s.jsx)("p", {
              className: "sr-only",
              children: I.screenReaderInstructions
            }), (0, s.jsxs)("div", {
              className: "flex items-center gap-4 mb-3",
              "data-rid": "servings-group",
              "data-testid": "servings-group",
              children: [(0, s.jsx)(l.z, {
                variant: "default",
                name: "servings",
                testID: "servings-group-input",
                value: D,
                onIncreasePress: () => {
                  var e, t;
                  (0, h.Z)({
                    event: "calculate_ingredients",
                    type: "add",
                    content_value: null !== (t = null === (e = N.servingType) || void 0 === e ? void 0 : e.singular) && void 0 !== t ? t : "undefined",
                    quantity: D + 1,
                    page_type: "recipe_detail"
                  }), z(e => e + 1)
                },
                onDecreasePress: () => {
                  if (D > 1) {
                    var e, t;
                    (0, h.Z)({
                      event: "calculate_ingredients",
                      type: "reduce",
                      content_value: null !== (t = null === (e = N.servingType) || void 0 === e ? void 0 : e.singular) && void 0 !== t ? t : "undefined",
                      quantity: D - 1,
                      page_type: "recipe_detail"
                    })
                  }
                  z(e => Math.max(1, e - 1))
                }
              }), (0, s.jsx)(a.x, {
                as: "span",
                typography: "body_normal",
                isProminent: !0,
                className: "capitalize",
                children: 1 === D ? null === (i = N.servingType) || void 0 === i ? void 0 : i.singular : (null === (y = N.servingType) || void 0 === y ? void 0 : y.plural) || (null === (_ = N.servingType) || void 0 === _ ? void 0 : _.singular)
              })]
            }), (0, s.jsxs)("div", {
              className: "bg-white relative pb-4",
              children: [(0, s.jsx)("div", {
                className: "flex flex-col gap-4",
                "data-testid": "recipe-detail-ingredients-list",
                children: null === (w = N.ingredientGroups) || void 0 === w ? void 0 : w.map(e => (0, s.jsx)(j, {
                  ingredientGroup: e,
                  unitsMultipler: D / q,
                  selectedIngredients: G,
                  onSelectChange: B ? J : void 0
                }, e.order))
              }), B && (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)("div", {
                  className: "mt-5",
                  children: H ? (0, s.jsx)(n.P, {
                    onClick: () => ee("recipe_detail"),
                    text: I.shoppingListViewAddedIngredients,
                    className: "max-w-full min-w-full xsl:min-w-64 mdl:min-w-72"
                  }) : (0, s.jsx)(x.default, {
                    onClick: Y,
                    disabled: 0 === G.length,
                    label: I.addToShoppingList,
                    className: "max-w-full min-w-full xsl:min-w-64 mdl:min-w-72"
                  })
                }), (0, s.jsx)(b.Z, {
                  visible: T,
                  description: I.accountModalDescription,
                  title: I.accountModalTitle,
                  imageUrl: r.src,
                  onShow: () => (0, h.Z)({
                    event: "page_view_custom",
                    screen_name: "login_modal",
                    sso_id: "notlogged",
                    page_type: "recipe_detail"
                  }),
                  onClose: () => Z(!1),
                  primaryButton: {
                    text: I.accountModalSigninButton,
                    onPress: () => {
                      (0, h.Z)({
                        event: "click_signin",
                        origin: "authentication_modal",
                        page_type: "recipe_detail"
                      }), E({
                        action: u.T.ADD_SHOPPING_LIST,
                        selectedIngredientIndexes: $()
                          .join(","),
                        quantityMultiplier: "".concat(W)
                      })
                    }
                  },
                  refFocusOnClose: U
                }), (0, s.jsx)(c.T, {
                  visible: R,
                  title: I.shoppingListSelect,
                  onClose: () => A(!1),
                  children: (0, s.jsx)(L, {
                    shoppingListApiUrl: C,
                    onSentToShoppingList: X,
                    selectedIngredients: G,
                    recipeName: N.name,
                    servingsMultiplier: W,
                    loc: {
                      ...I
                    }
                  })
                })]
              })]
            }), (0, s.jsx)(b.Z, {
              visible: k,
              title: I.shoppingListConfirmationTitle,
              imageUrl: r.src,
              onClose: () => S(!1),
              primaryButton: {
                text: I.shoppingListConfirmationCloseButton,
                onPress: () => S(!1)
              },
              secondaryButton: {
                text: I.shoppingListConfirmationOpenButton,
                onPress: () => {
                  S(!1), ee("confirmation_shoppinglist")
                }
              },
              refFocusOnClose: U
            }), (0, s.jsx)(o.q, {
              active: T || k,
              ref: U
            }), F && (0, s.jsx)(d.Z, {
              title: I.globalError,
              type: "error",
              onClose: () => M(!1)
            })]
          })
        }
    },
    3106: function(e, t, i) {
      "use strict";
      i.d(t, {
        default: function() {
          return C
        }
      });
      var s = i(7437),
        n = i(4560),
        a = i(3231),
        l = i(3198),
        r = i(8506),
        o = i(1347),
        d = i(8484),
        c = i(5680),
        u = i(1966),
        p = i(2806),
        g = i(438),
        h = i(9101),
        m = i(875),
        v = i(6968),
        f = i(8732),
        x = i(2769),
        b = i(2050);
      let y = (e, t, i) => {
        if (i && i.length) {
          let s = i.map(e => e.id)
            .filter(e => e)
            .join(",");
          s && t.push("".concat(e, "=")
            .concat(s))
        }
      };
      var _ = e => {
        var t, i, s, n, a;
        let l = ["size=".concat(p.Zc)];
        l.push("excludedRecipeId=".concat(e.id));
        let r = null === (i = e.ingredientGroups) || void 0 === i ? void 0 : null === (t = i.map(e => e.ingredients)
          .flat()
          .find(e => null == e ? void 0 : e.mainIngredient)) || void 0 === t ? void 0 : t.id;
        return r && l.push("mainIngredient=".concat(r)), y("courses", l, e.courses), y("diets", l, null !== (s = e.diets) && void 0 !== s ? s : []), y("foodTypes", l, e.foodTypes), y("regions", l, null !== (n = e.regions) && void 0 !== n ? n : []), y("collections", l, null !== (a = e.collections) && void 0 !== a ? a : []), l.join("&")
      };
      let j = async (e, t, i, s) => {
        let n = _(i);
        try {
          let i = "".concat(e, "/api/v1/recommendations/recipes/personalized?")
            .concat(n);
          return await (0, b.J)(i, t, {
            signal: s,
            method: "GET",
            headers: {
              "Accept-Language": t
            }
          })
        } catch (e) {
          console.error(e)
        }
      };
      var w = i(3179),
        P = i(9811),
        N = i(181),
        I = i(2265),
        C = e => {
          let {
            initialRecipes: t,
            initialFavoritesCount: i,
            locale: b,
            recipe: y,
            loc: _
          } = e, [C, k] = (0, I.useState)(t), [S, T] = (0, I.useState)(i), [Z, R] = (0, I.useState)(!0), A = (0, u.s)(), E = (0, w.jl)(), F = (0, N.M)("FF_3563_PERSONALISED_RECIPES"), M = (0, N.M)("PUBLIC_RECIPES_API_URL"), G = (0, N.M)(g.T.FF_SREC_4453_FAVORITES_COUNT), L = (0, P.a)(G), O = (0, m.r)(), q = null == O ? void 0 : O.pageType;
          return (0, I.useEffect)(() => {
            if (!F || !M || !E) {
              R(!1);
              return
            }
            let e = new AbortController,
              i = e.signal;
            return (async () => {
              R(!0);
              try {
                let e = await j(M, b, y, i);
                if (!e) return;
                let s = e.recipes.map(e => ({
                    ...e,
                    personalised: !0
                  })),
                  n = function(e) {
                    let {
                      mainArray: t,
                      fallbackArray: i,
                      size: s = 10
                    } = e, n = [], a = new Set;
                    for (let e of t)
                      if (!a.has(e.id) && (n.push(e), a.add(e.id), n.length === s)) return n;
                    for (let e of i)
                      if (!a.has(e.id) && (n.push(e), a.add(e.id), n.length === s)) break;
                    return n
                  }({
                    mainArray: s,
                    fallbackArray: t
                  });
                if (k(n), G && (null == n ? void 0 : n.length)) try {
                  let e = await (0, v.D)(b, n.map(e => {
                    let {
                      id: t
                    } = e;
                    return t
                  }));
                  T(t => ({
                    ...t,
                    ...e
                  }))
                } catch (e) {}
              } catch (e) {
                console.error("Error fetching data:", e)
              } finally {
                R(!1)
              }
            })(), () => e.abort()
          }, [F, M, E, G]), (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(d.Z, {
              cols: 12,
              children: (0, s.jsx)(n.x, {
                as: "h2",
                typography: "headline_3",
                isProminent: !0,
                children: _.textCarouselTitle
              })
            }), (0, s.jsx)(c.Z, {
              overflows: ["xsl", "mdp"],
              mdlCols: 12,
              children: (0, s.jsx)(l._, {
                onVisible: () => (0, f.Z)({
                  event: "view_recipe_carousel",
                  origin: "related_carousel",
                  recipe_list_name: "Recommended recipes",
                  quantity: p.Zc
                }),
                children: (0, s.jsx)(a.l, {
                  className: "[&>div>div>div]:justify-start [&>div>div]:pl-4 mdp:[&>div>div]:pl-6 mdp:[&>div>div]:pr-2 mdl:[&>div>div]:px-0 [&>div>div]:pb-1 [&>div>*:nth-child(2)]:hidden [&>div>*:nth-child(3)]:hidden mdl:[&>div>*:nth-child(2)]:block mdl:[&>div>*:nth-child(3)]:block",
                  itemSize: "medium",
                  nextIcon: "navigation/arrow-right",
                  prevIcon: "navigation/arrow-left",
                  iconInsideContent: !1,
                  scrollAmount: 2,
                  opts: {
                    align: "start",
                    watchResize: !0
                  },
                  bottomIndicator: "none",
                  children: Z ? Array.from({
                      length: 10
                    })
                    .map((e, t) => (0, s.jsx)(o.Z, {}, t)) : C.map((e, t) => {
                      var i, n;
                      let a = async () => {
                        let t = {
                          interactionType: e.personalised ? h.En.PersonalizedRecipeCardClicked : h.En.RelatedRecipeCardClicked,
                          recipeId: e.id
                        };
                        await (0, x.O)({
                          locale: b,
                          userInteraction: t,
                          onlyIfAuthenticated: !0
                        })
                      }, l = async t => {
                        if (t) return;
                        let i = {
                          interactionType: e.personalised ? h.En.AddToFavorites_PersonalizedRecipeCard : h.En.AddToFavorites_RelatedRecipeCard,
                          recipeId: e.id
                        };
                        await (0, x.O)({
                          locale: b,
                          userInteraction: i,
                          onlyIfAuthenticated: !0
                        })
                      };
                      return (0, s.jsx)(r.v, {
                        standardBadge: null === (i = e.smartTool) || void 0 === i ? void 0 : i.name,
                        favoritesIds: A,
                        favoriteCount: (null == S ? void 0 : S[e.id]) || L,
                        recipe: e,
                        recipePosition: t + 1,
                        totalRecipes: C.length,
                        variant: "carousel",
                        loc: _,
                        trackingInfo: {
                          event: "select_recipe",
                          origin: "related_carousel",
                          recipe_list_name: "Recommended recipes",
                          page_type: q
                        },
                        "data-personalised": null !== (n = e.personalised) && void 0 !== n && n,
                        onClick: a,
                        onFavoritesClick: l
                      }, e.id)
                    })
                })
              })
            })]
          })
        }
    },
    1260: function(e, t, i) {
      "use strict";
      i.d(t, {
        default: function() {
          return P
        }
      });
      var s = i(7437),
        n = i(4560),
        a = i(8484),
        l = i(5680),
        r = i(61),
        o = i(4147),
        d = i(3231),
        c = i(7776);
      let u = e => {
          let {
            product: t,
            "data-testid": i = "product-suggestion-carousel-card"
          } = e;
          return (0, s.jsx)(c.default, {
            className: "h-[calc(100%-36px)] [&_img]:object-contain",
            "data-testid": i,
            title: t.title,
            onPress: () => console.log(t),
            size: "small",
            image: {
              src: t.imageUrl,
              alt: t.title
            }
          })
        },
        p = e => {
          let {
            products: t,
            maxVisibleProducts: i,
            onViewAllProducts: a,
            loc: l
          } = e, c = i || t.length;
          return (0, s.jsxs)(d.l, {
            className: "select-none [&>div>div>div]:justify-start [&>div>div]:pl-4 [&>div>div>div]:gap-4 [&_[role='group']]:basis-auto [&_[role='group']]:mr-0 last:[&_[role='group']]:mr-4",
            itemSize: "small",
            opts: {
              align: "start",
              watchResize: !0
            },
            bottomIndicator: "none",
            children: [t.slice(0, c)
              .map(e => (0, s.jsx)(u, {
                  product: e
                }, "".concat(e.title, "-")
                .concat(e.id))), i && t.length > i && (0, s.jsxs)(o.Z, {
                "data-testid": "product-suggestion-carousel-showAll",
                className: "flex flex-col rounded-card-radius border-none bg-cluster_card-color-background group box-content m-px outline-unset min-w-0 max-w-40 gap-1 p-4 lg:gap-4 h-[calc(100%-36px)] [&_img]:object-contain justify-center items-center",
                children: [(0, s.jsx)(r.o, {
                  text: l.showAll,
                  onPress: a
                }), (0, s.jsx)(n.x, {
                  typography: "small_1",
                  children: l.remainingProducts
                })]
              })
            ]
          })
        };
      var g = i(2806),
        h = i(396),
        m = i(4317);
      let v = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0,
          i = new Set;
        return (e || [])
          .reduce((e, s) => {
            var n;
            let a = {
              ...s,
              ingredients: []
            };
            return null === (n = s.ingredients) || void 0 === n || n.forEach(s => {
              var n;
              let l = null === (n = s.suggestedProducts) || void 0 === n ? void 0 : n.filter(t)
                .sort((e, t) => e.order - t.order)[0];
              if (!l || s.hideInCarousel) return;
              let r = {
                ...s,
                suggestedProducts: [l]
              };
              i.has(s.id) || (i.add(s.id), e.uniqueIngredientsWithProducts.push(r)), a.ingredients.push(r), e.totalProducts += 1
            }), e.ingredientGroupsWithProducts.push(a), e
          }, {
            uniqueIngredientsWithProducts: [],
            ingredientGroupsWithProducts: [],
            totalProducts: 0
          })
      };
      var f = i(2265),
        x = i(1731),
        b = i(9968),
        y = i(7153),
        _ = i(3389),
        j = i(3145),
        w = e => {
          let {
            visible: t,
            onClose: i,
            ingredientGroupsWithProducts: n,
            loc: a
          } = e;
          return (null == n ? void 0 : n.length) ? (0, s.jsx)(_.T, {
            visible: t,
            fullHeight: !0,
            title: a.carouselTitle,
            onClose: i,
            "data-testid": "all-products-sheet",
            children: (0, s.jsx)("ul", {
              className: "px-2",
              children: n.map((e, t) => {
                var i;
                return (null === (i = e.ingredients) || void 0 === i ? void 0 : i.length) ? (0, s.jsxs)(f.Fragment, {
                    children: [e.name && "default" !== e.name && (0, s.jsx)("li", {
                        "data-testid": "ig-".concat(t),
                        children: (0, s.jsx)(x.Z, {
                          title: "".concat(e.name, " (")
                            .concat(e.ingredients.length, ")")
                        })
                      }, "ig-".concat(e.name, "-")
                      .concat(e.order)), e.ingredients.map((i, n) => {
                      let {
                        suggestedProducts: a,
                        id: l
                      } = i, r = a[0];
                      return (0, s.jsx)("li", {
                          "data-testid": "ig-".concat(t, "-ingredient-")
                            .concat(n),
                          children: (0, s.jsx)(b.Z, {
                            title: r.title,
                            isPressable: !1,
                            startContent: (0, s.jsx)(j.default, {
                              className: "w-20 h-16 object-contain",
                              src: r.imageUrl || y.default,
                              width: 80,
                              height: 64,
                              alt: r.title
                            })
                          })
                        }, "ig-".concat(e.order, "-")
                        .concat(l))
                    })]
                  }, "fragment-".concat(e.name, "-")
                  .concat(e.order)) : null
              })
            })
          }) : null
        },
        P = e => {
          var t;
          let {
            recipe: i,
            loc: r,
            maxVisibleProducts: o = g.oK
          } = e, [d, c] = (0, f.useState)(!1), u = e => (null == e ? void 0 : e.status) !== "discarded" && !!(null == e ? void 0 : e.title) && !!(null == e ? void 0 : e.imageUrl), {
            uniqueIngredientsWithProducts: x,
            ingredientGroupsWithProducts: b,
            totalProducts: y
          } = (0, f.useMemo)(() => v(i.ingredientGroups, u), [i.ingredientGroups, u]), _ = y - Math.min(o, x.length);
          return (null === (t = i.ingredientGroups) || void 0 === t ? void 0 : t.length) && (e => {
            var t, i;
            let s = [],
              n = null === (t = e.ingredientGroups) || void 0 === t ? void 0 : t.every(e => {
                var t;
                return null === (t = e.ingredients) || void 0 === t ? void 0 : t.every(e => {
                  var t;
                  let i = e.hideInCarousel || (null === (t = e.suggestedProducts) || void 0 === t ? void 0 : t.some(e => u(e)));
                  return i || s.push({
                    name: e.singular,
                    allProductsHaveMinData: !1
                  }), i
                })
              });
            return s.length && (0, m.Tf)(void 0, {
              componentOrPage: "RecipeDetailSuggestedProductsCarousel",
              payload: {
                message: "Carousel is not displayed because some ingredient products have missing information.",
                recipeId: e.id,
                recipeName: e.name,
                ingredientGroupsLength: (null === (i = e.ingredientGroups) || void 0 === i ? void 0 : i.length) || 0,
                validatedBy: e.suggestionsValidatedBy,
                invalidCarouselProducts: s
              }
            }), n
          })(i) ? (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(a.Z, {
              cols: 12,
              className: "mdp:hidden",
              children: (0, s.jsx)(n.x, {
                as: "h2",
                typography: "headline_3",
                isProminent: !0,
                children: r.carouselTitle
              })
            }), (0, s.jsx)(l.Z, {
              overflows: ["xsl"],
              mdlCols: 12,
              className: "overflow-hidden mdp:hidden mb-4",
              children: (0, s.jsx)(p, {
                products: x.map(e => {
                  let {
                    suggestedProducts: t
                  } = e;
                  return t[0]
                }),
                maxVisibleProducts: o,
                onViewAllProducts: () => c(!0),
                loc: {
                  ...r,
                  remainingProducts: (0, h.Z)(r.remainingProducts, {
                    numberremainingproducts: "".concat(_)
                  })
                }
              })
            }), (0, s.jsx)(w, {
              visible: d,
              loc: r,
              onClose: () => c(!1),
              ingredientGroupsWithProducts: b
            })]
          }) : null
        }
    },
    3487: function(e, t, i) {
      "use strict";
      i.d(t, {
        default: function() {
          return p
        }
      });
      var s = i(7437),
        n = i(4560),
        a = i(8484),
        l = i(5680),
        r = i(3231),
        o = i(7776);
      let d = e => {
          let {
            tool: t,
            "data-testid": i = "tool-suggestion-carousel-card"
          } = e;
          return (0, s.jsx)(o.default, {
            className: "h-[calc(100%-36px)] [&_img]:object-contain",
            "data-testid": i,
            title: t.name,
            onPress: () => {},
            size: "small",
            image: {
              src: t.imageVariations[0].storageUrl,
              alt: t.name
            }
          })
        },
        c = e => {
          let {
            tools: t
          } = e, i = t.length;
          return (0, s.jsx)(r.l, {
            className: "select-none [&>div>div>div]:justify-start [&>div>div]:pl-4 [&>div>div>div]:gap-4 [&_[role='group']]:basis-auto [&_[role='group']]:mr-0 last:[&_[role='group']]:mr-4",
            itemSize: "small",
            opts: {
              align: "start",
              watchResize: !0
            },
            testID: "tool-suggestion-carousel",
            bottomIndicator: "none",
            children: t.slice(0, i)
              .map(e => (0, s.jsx)(d, {
                  tool: e
                }, "".concat(e.name, "-")
                .concat(e.id)))
          })
        },
        u = {
          SMART: "smart",
          TRADITIONAL: "traditional"
        };
      var p = e => {
        var t;
        let {
          recipe: i,
          loc: r
        } = e, o = null !== (t = null == i ? void 0 : i.tools) && void 0 !== t ? t : [];
        if (!o.some(e => e.type === u.TRADITIONAL)) return;
        let d = o.sort((e, t) => {
          var i, s;
          let n = {
            [u.SMART]: 0,
            [u.TRADITIONAL]: 1
          };
          return (null !== (i = n[e.type]) && void 0 !== i ? i : 99) - (null !== (s = n[t.type]) && void 0 !== s ? s : 99)
        });
        if (d.length) return (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(a.Z, {
            cols: 12,
            children: (0, s.jsx)(n.x, {
              as: "h2",
              typography: "headline_3",
              isProminent: !0,
              children: r.carouselTitle
            })
          }), (0, s.jsx)(l.Z, {
            overflows: ["xsl"],
            mdlCols: 12,
            className: "overflow-hidden mb-4",
            children: (0, s.jsx)(c, {
              tools: d
            })
          })]
        })
      }
    },
    1966: function(e, t, i) {
      "use strict";
      i.d(t, {
        s: function() {
          return o
        }
      });
      var s = i(6077),
        n = i(3179),
        a = i(4317),
        l = i(9376),
        r = i(2265);
      let o = () => {
        let {
          locale: e
        } = (0, l.useParams)(), [t, i] = (0, r.useState)([]), o = (0, n.jl)();
        return (0, r.useEffect)(() => {
          o && (async () => {
            try {
              let t = await (0, s.G4)(e);
              i(t)
            } catch (e) {
              (0, a.Tf)(e, {
                message: "Error while trying to retrieve favorites.",
                componentOrPage: "useGetUserFavorites"
              }), console.log("Error while trying to retrieve favorites.")
            }
          })()
        }, [o, e]), t
      }
    },
    6334: function(e, t, i) {
      "use strict";
      var s = i(7437),
        n = i(1574),
        a = i(8785),
        l = i(8732);
      t.default = e => {
        let {
          label: t,
          children: i,
          icon: r,
          onClick: o,
          variant: d = "positive",
          trackClick: c,
          disabled: u = !1,
          className: p = "",
          status: g = "",
          isLoading: h = !1
        } = e;
        return g ? (0, s.jsx)(n.M, {
          className: p,
          type: "button",
          icon: r,
          disabled: u,
          text: t,
          variant: d,
          status: g,
          isLoading: h,
          onPress: c ? e => {
            (0, l.Z)({
              ...c
            }), null == o || o(e)
          } : o,
          children: i
        }) : (0, s.jsx)(a.D, {
          className: p,
          type: "button",
          icon: r,
          disabled: u,
          text: t,
          variant: d,
          onPress: c ? e => {
            (0, l.Z)({
              ...c
            }), null == o || o(e)
          } : o,
          children: i
        })
      }
    },
    6968: function(e, t, i) {
      "use strict";
      i.d(t, {
        D: function() {
          return a
        }
      });
      var s = i(181),
        n = i(8799);
      let a = async (e, t) => {
        let i = t.join(","),
          a = await (0, n.W)("".concat((0, s.M)("PUBLIC_RECIPES_API_URL"), "/api/v1/recipes/favorites/count?ids=")
            .concat(i), e);
        return (null == a ? void 0 : a.reduce((e, t) => (e[t.id] = t.count, e), {})) || void 0
      }
    },
    396: function(e, t) {
      "use strict";
      t.Z = (e, t) => t ? e.replace(RegExp("%(".concat(Object.keys(t)
        .join("|"), ")%"), "gm"), (e, i) => t[i]) : e
    },
    9811: function(e, t, i) {
      "use strict";
      i.d(t, {
        a: function() {
          return s
        }
      });
      let s = e => e ? 0 : void 0
    },
    7153: function(e, t, i) {
      "use strict";
      i.r(t), t.default = {
        src: "/_next/static/media/logo_default.1f8c4711.svg",
        height: 115,
        width: 115,
        blurWidth: 0,
        blurHeight: 0
      }
    },
    6433: function(e, t, i) {
      "use strict";
      i.r(t), t.default = {
        src: "/_next/static/media/score-1.dc1c4c32.svg",
        height: 40,
        width: 40,
        blurWidth: 0,
        blurHeight: 0
      }
    },
    3629: function(e, t, i) {
      "use strict";
      i.r(t), t.default = {
        src: "/_next/static/media/score-10.cbb00fbb.svg",
        height: 40,
        width: 40,
        blurWidth: 0,
        blurHeight: 0
      }
    },
    3717: function(e, t, i) {
      "use strict";
      i.r(t), t.default = {
        src: "/_next/static/media/score-2.3b948bc3.svg",
        height: 40,
        width: 40,
        blurWidth: 0,
        blurHeight: 0
      }
    },
    2003: function(e, t, i) {
      "use strict";
      i.r(t), t.default = {
        src: "/_next/static/media/score-3.e4ef9a54.svg",
        height: 40,
        width: 40,
        blurWidth: 0,
        blurHeight: 0
      }
    },
    4704: function(e, t, i) {
      "use strict";
      i.r(t), t.default = {
        src: "/_next/static/media/score-4.6e325484.svg",
        height: 40,
        width: 40,
        blurWidth: 0,
        blurHeight: 0
      }
    },
    1734: function(e, t, i) {
      "use strict";
      i.r(t), t.default = {
        src: "/_next/static/media/score-5.36948114.svg",
        height: 40,
        width: 40,
        blurWidth: 0,
        blurHeight: 0
      }
    },
    1894: function(e, t, i) {
      "use strict";
      i.r(t), t.default = {
        src: "/_next/static/media/score-6.4feec516.svg",
        height: 40,
        width: 40,
        blurWidth: 0,
        blurHeight: 0
      }
    },
    9109: function(e, t, i) {
      "use strict";
      i.r(t), t.default = {
        src: "/_next/static/media/score-7.414ce345.svg",
        height: 40,
        width: 40,
        blurWidth: 0,
        blurHeight: 0
      }
    },
    4418: function(e, t, i) {
      "use strict";
      i.r(t), t.default = {
        src: "/_next/static/media/score-8.4889c166.svg",
        height: 40,
        width: 40,
        blurWidth: 0,
        blurHeight: 0
      }
    },
    4215: function(e, t, i) {
      "use strict";
      i.r(t), t.default = {
        src: "/_next/static/media/score-9.04ffba6b.svg",
        height: 40,
        width: 40,
        blurWidth: 0,
        blurHeight: 0
      }
    }
  },
  function(e) {
    e.O(0, [7797, 318, 4705, 8159, 4497, 1732, 6946, 8836, 2602, 72, 8856, 3231, 6944, 7115, 9452, 8506, 4264, 2971, 2117, 1744], function() {
      return e(e.s = 7236)
    }), _N_E = e.O()
  }
]);