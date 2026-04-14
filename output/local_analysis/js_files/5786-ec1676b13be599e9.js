(self.webpackChunk_N_E = self.webpackChunk_N_E || [])
.push([
  [5786], {
    1574: function(e, i, t) {
      "use strict";
      t.d(i, {
        M: function() {
          return r
        }
      });
      var s = t(2265),
        o = t(8003);

      function n() {
        return (n = Object.assign ? Object.assign.bind() : function(e) {
            for (var i = 1; i < arguments.length; i++) {
              var t = arguments[i];
              for (var s in t)({})
                .hasOwnProperty.call(t, s) && (e[s] = t[s])
            }
            return e
          })
          .apply(null, arguments)
      }
      let r = ({
        icon: e,
        onPress: i,
        ...t
      }) => s.createElement(o.default, n({
        buttonType: "primaryStatus",
        onPress: i,
        startIcon: e
      }, t));
      r.displayName = "ButtonPrimaryStatus"
    },
    7646: function(e, i, t) {
      "use strict";
      var s = t(7437),
        o = t(4560);
      i.Z = e => {
        let {
          textAllRecipesNoRecipes: i,
          textAllRecipesOneRecipe: t,
          textAllRecipesMultipleRecipes: n,
          numResults: r
        } = e;
        return (0, s.jsx)(o.x, {
          as: "span",
          typography: "small_1",
          isProminent: !0,
          color: "grayscale_darkest",
          "data-testid": "results-label-recipes-count",
          children: void 0 === r || r < 0 ? "" : 0 === r ? i : 1 === r ? t : n
        })
      }
    },
    1966: function(e, i, t) {
      "use strict";
      t.d(i, {
        s: function() {
          return c
        }
      });
      var s = t(6077),
        o = t(3179),
        n = t(4317),
        r = t(9376),
        a = t(2265);
      let c = () => {
        let {
          locale: e
        } = (0, r.useParams)(), [i, t] = (0, a.useState)([]), c = (0, o.jl)();
        return (0, a.useEffect)(() => {
          c && (async () => {
            try {
              let i = await (0, s.G4)(e);
              t(i)
            } catch (e) {
              (0, n.Tf)(e, {
                message: "Error while trying to retrieve favorites.",
                componentOrPage: "useGetUserFavorites"
              }), console.log("Error while trying to retrieve favorites.")
            }
          })()
        }, [c, e]), i
      }
    },
    5786: function(e, i, t) {
      "use strict";
      t.d(i, {
        RecipeListManager: function() {
          return I
        }
      });
      var s = t(7437),
        o = t(2806),
        n = t(438),
        r = t(6968),
        a = t(181),
        c = t(9376),
        l = t(2265),
        d = t(7646),
        u = t(8725),
        g = t(8484),
        p = t(1966),
        f = t(4317),
        m = JSON.parse('{"es-ES":{"courses":"tipo-de-plato","foodTypes":"tipo-de-comida","diets":"dieta","regions":"sabores-del-mundo","collections":"ocasiones-especiales","chefs":"cocina-con","smartTools":"electrodomesticos-inteligentes","ingredient":"ingredient"},"en-GB":{"courses":"course","foodTypes":"food-type","diets":"diet","regions":"region","collections":"collection","chefs":"chef","smartTools":"smart-kitchen-appliances","ingredient":"ingredient"},"en-US":{"courses":"course","foodTypes":"food-type","diets":"diet","regions":"region","collections":"collection","chefs":"chef","smartTools":"smart-kitchen-appliances","ingredient":"ingredient"},"en-LD":{"courses":"course","foodTypes":"food-type","diets":"diet","regions":"region","collections":"collection","chefs":"chef","smartTools":"smart-cooking-tools","ingredient":"ingredient"},"de-AT":{"courses":"menuearten","foodTypes":"kategorie","diets":"ernaehrungsweise","regions":"region","collections":"collection","chefs":"koch","smartTools":"smarte-kuechengeraete","ingredient":"ingredient"},"de-DE":{"courses":"menuearten","foodTypes":"kategorie","diets":"ernaehrungsweise","regions":"region","collections":"collection","chefs":"koch","smartTools":"smarte-kuechengeraete","ingredient":"ingredient"},"fr-BE":{"courses":"plat","foodTypes":"type-de-nourriture","diets":"regime","regions":"region","collections":"collection","chefs":"chef","smartTools":"appareils-electromenagers-connectes","ingredient":"ingredient"},"nl-BE":{"courses":"gang","foodTypes":"soort-voeding","diets":"dieet","regions":"regio","collections":"themas","chefs":"chef","smartTools":"slimme-keukenapparaten","ingredient":"ingredient"},"bg-BG":{"courses":"tip-menyu","foodTypes":"tip-yastie","diets":"balansirani-retsepti","regions":"tip-kuhnya","collections":"spetsialni-retsepti","chefs":"shef-gotvach","smartTools":"umni-uredi","ingredient":"ingredient"},"de-CH":{"courses":"menuearten","foodTypes":"lebensmittel-kategorie","diets":"diaet","regions":"region","collections":"themen","chefs":"koch","smartTools":"smarte-kuechengeraete","ingredient":"ingredient"},"fr-CH":{"courses":"type-de-plats","foodTypes":"categorie-daliments","diets":"regime-alimentaire","regions":"region","collections":"themes","chefs":"chef","smartTools":"appareils-de-cuisine-intelligents","ingredient":"ingredient"},"it-CH":{"courses":"tipi-di-menu","foodTypes":"tipi-di-alimento","diets":"dieta","regions":"regione","collections":"argomenti","chefs":"chef","smartTools":"utensili-da-cucina-smart","ingredient":"ingredient"},"en-CY":{"courses":"course","foodTypes":"food-type","diets":"diet","regions":"region","collections":"collection","chefs":"chef","smartTools":"smart-kitchenware","ingredient":"ingredient"},"el-CY":{"courses":"eidos-geymatos","foodTypes":"kathgoria","diets":"diatrofikh-synhtheia","regions":"perioxh","collections":"syllogh","chefs":"sef","smartTools":"eksypnos-eksoplismos-koyzinas","ingredient":"ingredient"},"da-DK":{"courses":"maaltid","foodTypes":"madtyper","diets":"diaet","regions":"region","collections":"kategori","chefs":"kok","smartTools":"koekkenudstyr","ingredient":"ingredient"},"et-EE":{"courses":"toidukord","foodTypes":"pohikomponent","diets":"elustiil","regions":"rahvuskook","collections":"sundmus","chefs":"kokk","smartTools":"koogiseadmed","ingredient":"ingredient"},"fi-FI":{"courses":"ateria","foodTypes":"ruokalaji","diets":"ruokavalio","regions":"alue","collections":"teemat-ja-sesongit","chefs":"kokki","smartTools":"alykkaat-keittiovalineet","ingredient":"ingredient"},"fr-FR":{"courses":"categorie","foodTypes":"type-de-recettes","diets":"regime-alimentaire","regions":"region","collections":"collection","chefs":"chef","smartTools":"ustensiles-de-cuisine-intelligents","ingredient":"ingredient"},"el-GR":{"courses":"eidos-geymatos","foodTypes":"kathgoria","diets":"diatrofikh-synhtheia","regions":"perioxh","collections":"syllogh","chefs":"sef","smartTools":"eksypnos-eksoplismos-koyzinas","ingredient":"ingredient"},"hr-HR":{"courses":"vrsta-jela","foodTypes":"vrsta-hrane","diets":"vrsta-prehrane","regions":"regija","collections":"kolekcija","chefs":"chef","smartTools":"pametni-kuhinjski-uredjaji","ingredient":"ingredient"},"hu-HU":{"courses":"etkezes","foodTypes":"etel-tipusa","diets":"specialis-etrend","regions":"regio","collections":"gyujtemeny","chefs":"sef","smartTools":"okos-konyhai-eszkozok","ingredient":"ingredient"},"en-IE":{"courses":"course","foodTypes":"food-type","diets":"diet","regions":"region","collections":"collection","chefs":"chef","smartTools":"smart-kitchenware","ingredient":"ingredient"},"it-IT":{"courses":"portata","foodTypes":"tipo-di-cibo","diets":"dieta","regions":"area","collections":"raccolte","chefs":"chef","smartTools":"utensili-da-cucina-smart","ingredient":"ingredient"},"lt-LT":{"courses":"patiekalas","foodTypes":"maisto-kategorija","diets":"mitybos-tipas","regions":"regionas","collections":"rinkinys","chefs":"virtuves-sefas","smartTools":"ismanus-virtuves-prietaisai","ingredient":"ingredient"},"lv-LV":{"courses":"edienreize","foodTypes":"ediena-kategorija","diets":"uzturs","regions":"regions","collections":"kolekcija","chefs":"temas","smartTools":"viedie-virtuves-piederumi","ingredient":"ingredient"},"en-MT":{"courses":"course","foodTypes":"food-type","diets":"diet","regions":"region","collections":"collection","chefs":"chef","smartTools":"smart-kitchenware","ingredient":"ingredient"},"en-NI":{"courses":"course","foodTypes":"food-type","diets":"diet","regions":"region","collections":"collection","chefs":"chef","smartTools":"smart-kitchenware","ingredient":"ingredient"},"nl-NL":{"courses":"menugang","foodTypes":"voedseltype","diets":"speciale-wensen","regions":"keuken","collections":"collectie","chefs":"chef","smartTools":"slimme-keukenapparatuur","ingredient":"ingredient"},"pt-PT":{"courses":"refeicoes","foodTypes":"tipos-de-receitas","diets":"dieta","regions":"regiao","collections":"colecoes","chefs":"chefe","smartTools":"utensilios-de-cozinha-inteligentes","ingredient":"ingredient"},"ro-RO":{"courses":"categorie","foodTypes":"tip-mancare","diets":"dieta","regions":"regiune","collections":"colectie","chefs":"chef","smartTools":"aparate-de-bucatarie","ingredient":"ingredient"},"sr-RS":{"courses":"jelo","foodTypes":"vrsta-hrane","diets":"ishrana","regions":"region","collections":"kolekcija","chefs":"chef","smartTools":"pametni-kuhinjski-aparati","ingredient":"ingredient"},"sv-SE":{"courses":"maaltid","foodTypes":"typ-av-mat","diets":"kost","regions":"smakdestination","collections":"kategori","chefs":"kockar","smartTools":"koeksmaskin","ingredient":"ingredient"},"sl-SI":{"courses":"obrok","foodTypes":"vrsta-hrane","diets":"diete","regions":"regija","collections":"zbirka","chefs":"kuhar","smartTools":"pametna-kuhinjska-posoda","ingredient":"ingredient"}}');
      let h = (e, i) => {
        var t;
        let s = m[e];
        if (s) return null === (t = Object.entries(s)
          .find(e => {
            let [t, s] = e;
            return s === i
          })) || void 0 === t ? void 0 : t[0]
      };
      var T = t(8845);
      let y = e => {
          let i = new RegExp(/^([a-z]|[A-Z]){2}-([a-z]|[A-Z]){2}$/i);
          return !!e.match(i)
        },
        k = e => {
          let i = new RegExp(/^[a-z0-9]+(?:-[a-z0-9]+)*$/i);
          return !!e.match(i)
        };
      var _ = t(8799);
      let v = async e => {
        let {
          url: i,
          locale: t,
          filters: s = [],
          page: o,
          pageSize: n
        } = e;
        try {
          let e = s.every(e => k(e[0]));
          if (!y(t) || !e) throw Error("Invalid locale or filter value");
          let r = new URLSearchParams({
            page: o.toString(),
            size: n.toString()
          });
          if (s.map(e => {
              let i = h(t, e[0]);
              i && r.append(i, e[1])
            }), !(0, a.M)("PUBLIC_RECIPES_API_URL")) throw Error("Missing recipes API URL");
          try {
            return await (0, _.W)("".concat(i, "?")
              .concat(r), t)
          } catch (e) {
            throw (0, T.zm)("Fetching to ".concat(i, " responded with status ")
              .concat(e.status), e.rawResponse)
          }
        } catch (e) {
          throw e instanceof Error ? e : Error("Unknown error occurred")
        }
      }, E = e => {
        let {
          accumulative: i = !0,
          dataSourceKey: t,
          filters: s,
          currentPage: o = 1,
          initialValues: n = [],
          pageSize: r,
          url: a
        } = e, {
          locale: d
        } = (0, c.useParams)(), [u, g] = (0, l.useState)(), [p, m] = (0, l.useState)({
          currentPage: o,
          data: n,
          error: null,
          isLoading: !1
        }), h = async () => {
          m(e => ({
            ...e,
            isLoading: !0,
            error: null
          }));
          try {
            let e = await v({
                filters: s,
                locale: d,
                page: p.currentPage + 1,
                pageSize: r,
                url: a
              }),
              o = t ? e[t] : e;
            m(e => ({
              currentPage: e.currentPage + 1,
              data: i && (null == e ? void 0 : e.data) ? [...e.data, ...o] : o,
              error: null,
              isLoading: !1
            })), g(o)
          } catch (e) {
            (0, f.Tf)(e, {
              componentOrPage: "useRecipesPagination",
              payload: {
                filters: s,
                locale: d,
                page: p.currentPage + 1,
                pageSize: r
              }
            }), m(i => ({
              ...i,
              data: null == i ? void 0 : i.data,
              error: e,
              isLoading: !1
            }))
          }
        };
        return {
          state: p,
          latestRecipes: u,
          loadMore: h
        }
      };
      var S = t(6334),
        R = t(2496),
        F = e => {
          let {
            canLoadMore: i,
            loadMoreFunction: t,
            loading: o,
            text: n,
            ariaLabel: r
          } = e;
          return (0, s.jsxs)(g.Z, {
            cols: 12,
            children: [(0, s.jsx)("div", {
              className: "flex justify-center mt-2 mb-8 [&>button]:w-auto",
              children: i && (0, s.jsx)(S.default, {
                label: n,
                onClick: t
              })
            }), (0, s.jsx)(R.Z, {
              loading: o
            })]
          })
        },
        C = t(8506),
        O = t(875),
        j = t(9811),
        P = e => {
          let {
            favoritesIds: i = [],
            favoritesCount: t,
            loc: o,
            recipes: r
          } = e, c = (0, a.M)(n.T.FF_SREC_4453_FAVORITES_COUNT, !1), l = (0, j.a)(c), d = (0, O.r)(), u = null == d ? void 0 : d.pageType;
          return (0, s.jsx)("div", {
            className: "grid grid-cols-1 xsl:grid-cols-2 mdl:grid-cols-3 gap-4",
            children: null == r ? void 0 : r.map((e, n) => {
              var a;
              return (0, s.jsx)(C.v, {
                standardBadge: null === (a = e.smartTool) || void 0 === a ? void 0 : a.name,
                favoritesIds: i,
                favoriteCount: (null == t ? void 0 : t[e.id]) || l,
                recipe: e,
                recipePosition: n + 1,
                totalRecipes: r.length,
                loc: o,
                trackingInfo: {
                  event: "select_recipe",
                  origin: "recipe_results",
                  page_type: u
                }
              }, e.id)
            })
          })
        };
      let I = (0, l.memo)(function(e) {
        let {
          filters: i = [],
          initialRecipes: t = [],
          initialFavoritesCount: f,
          loc: m,
          recipesUrl: h,
          totalRecipes: T
        } = e, {
          locale: y
        } = (0, c.useParams)(), [k, _] = (0, l.useState)(f), v = (0, a.M)(n.T.FF_SREC_4453_FAVORITES_COUNT, !1), S = (0, l.useMemo)(() => t, []), R = (0, l.useMemo)(() => i, []), {
          state: C,
          latestRecipes: O,
          loadMore: j
        } = E((0, l.useMemo)(() => ({
          accumulative: !0,
          dataSourceKey: "recipes",
          filters: R,
          initialValues: S,
          pageSize: o.j,
          url: h
        }), [h, R, S])), I = (0, l.useMemo)(() => {
          var e;
          return null !== (e = null == C ? void 0 : C.data) && void 0 !== e ? e : S
        }, [null == C ? void 0 : C.data, S]), A = (0, l.useMemo)(() => !!T && I.length < T, [I.length, T]), x = (0, p.s)(), N = (0, l.useCallback)(async e => {
          if (e.length) try {
            let i = await (0, r.D)(y, e.map(e => {
              let {
                id: i
              } = e;
              return i
            }) || []);
            _(e => ({
              ...e,
              ...i
            }))
          } catch (e) {}
        }, [y]);
        return (0, l.useEffect)(() => {
          v && (null == O ? void 0 : O.length) && N(O)
        }, [v, O, N]), (0, s.jsxs)(u.Z, {
          children: [(0, s.jsxs)(g.Z, {
            cols: 12,
            children: [(0, s.jsx)("div", {
              className: "py-4 mdl:pt-6",
              children: (0, s.jsx)(d.Z, {
                textAllRecipesNoRecipes: m.textAllRecipesNoRecipes,
                textAllRecipesOneRecipe: m.textAllRecipesOneRecipe,
                textAllRecipesMultipleRecipes: m.textAllRecipesMultipleRecipes,
                numResults: T
              })
            }), (0, s.jsx)(P, {
              recipes: I,
              loc: m,
              favoritesIds: x,
              favoritesCount: k
            })]
          }), (0, s.jsx)(F, {
            loadMoreFunction: j,
            canLoadMore: A,
            loading: C.isLoading,
            text: m.textLoadMore
          })]
        })
      })
    },
    6334: function(e, i, t) {
      "use strict";
      var s = t(7437),
        o = t(1574),
        n = t(8785),
        r = t(8732);
      i.default = e => {
        let {
          label: i,
          children: t,
          icon: a,
          onClick: c,
          variant: l = "positive",
          trackClick: d,
          disabled: u = !1,
          className: g = "",
          status: p = "",
          isLoading: f = !1
        } = e;
        return p ? (0, s.jsx)(o.M, {
          className: g,
          type: "button",
          icon: a,
          disabled: u,
          text: i,
          variant: l,
          status: p,
          isLoading: f,
          onPress: d ? e => {
            (0, r.Z)({
              ...d
            }), null == c || c(e)
          } : c,
          children: t
        }) : (0, s.jsx)(n.D, {
          className: g,
          type: "button",
          icon: a,
          disabled: u,
          text: i,
          variant: l,
          onPress: d ? e => {
            (0, r.Z)({
              ...d
            }), null == c || c(e)
          } : c,
          children: t
        })
      }
    },
    2496: function(e, i, t) {
      "use strict";
      var s = t(7437);
      t(9886), i.Z = e => {
        let {
          loading: i,
          className: t = ""
        } = e;
        return (0, s.jsx)("div", {
          className: "".concat(i ? "loading-spinner ".concat(t) : "loading-spinner--hidden"),
          "data-testid": "loading-overlay",
          children: (0, s.jsxs)("div", {
            className: "nuc-a-loading-spinner",
            children: [(0, s.jsx)("div", {}), (0, s.jsx)("div", {}), (0, s.jsx)("div", {}), (0, s.jsx)("div", {})]
          })
        })
      }
    },
    2806: function(e, i, t) {
      "use strict";
      t.d(i, {
        AT: function() {
          return o
        },
        QO: function() {
          return a
        },
        SS: function() {
          return l
        },
        Zc: function() {
          return n
        },
        bD: function() {
          return c
        },
        j: function() {
          return s
        },
        oK: function() {
          return r
        }
      });
      let s = 36,
        o = 12,
        n = 10,
        r = 8,
        a = 36,
        c = 0,
        l = {
          "X-3000180": "a2f94bd5b-9c2e-47e8-9257-7c46e08bf11f"
        }
    },
    438: function(e, i, t) {
      "use strict";
      t.d(i, {
        T: function() {
          return s
        }
      });
      let s = {
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
    6968: function(e, i, t) {
      "use strict";
      t.d(i, {
        D: function() {
          return n
        }
      });
      var s = t(181),
        o = t(8799);
      let n = async (e, i) => {
        let t = i.join(","),
          n = await (0, o.W)("".concat((0, s.M)("PUBLIC_RECIPES_API_URL"), "/api/v1/recipes/favorites/count?ids=")
            .concat(t), e);
        return (null == n ? void 0 : n.reduce((e, i) => (e[i.id] = i.count, e), {})) || void 0
      }
    },
    8845: function(e, i, t) {
      "use strict";
      t.d(i, {
        vp: function() {
          return n
        },
        zm: function() {
          return s
        }
      });
      let s = (e, i) => {
          let t = Error(e);
          return t.name = "APIError", t.response = i, t
        },
        o = e => "APIError" === e.name && "response" in e,
        n = (e, i, t) => {
          let s = o(e) ? e.message : "Unhandled error".concat(t ? " in " + t : "", ": ")
            .concat(JSON.stringify(e));
          i.error(s)
        }
    },
    9811: function(e, i, t) {
      "use strict";
      t.d(i, {
        a: function() {
          return s
        }
      });
      let s = e => e ? 0 : void 0
    },
    9886: function() {}
  }
]);