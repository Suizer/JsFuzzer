"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || [])
.push([
  [9452], {
    8484: function(e, s, l) {
      var i = l(7437);
      s.Z = e => {
        let {
          children: s,
          cols: l,
          xslCols: a,
          mdpCols: o,
          mdlCols: r,
          lgCols: c,
          startCol: t,
          xslStartCol: g,
          mdpStartCol: p,
          mdlStartCol: n,
          lgStartCol: u,
          className: f
        } = e, k = "col-span-", d = l ? "".concat(k)
          .concat(l) : "";
        d += (a ? " xsl:".concat(k)
          .concat(a) : "") + (o ? " mdp:".concat(k)
          .concat(o) : "") + (r ? " mdl:".concat(k)
          .concat(r) : "") + (c ? " lg:".concat(k)
          .concat(c) : "");
        let m = "col-start-";
        return d += (t ? " ".concat(m)
          .concat(t) : "") + (g ? " xsl:".concat(m)
          .concat(g) : "") + (p ? " mdp:".concat(m)
          .concat(p) : "") + (n ? " mdl:".concat(m)
          .concat(n) : "") + (u ? " lg:".concat(m)
          .concat(u) : ""), f && (d += " " + f), (0, i.jsx)("div", {
          className: null != d ? d : void 0,
          children: s
        })
      }
    },
    7826: function(e, s, l) {
      l.r(s);
      var i = l(7437),
        a = l(8732),
        o = l(7648);
      s.default = e => {
        let {
          trackClick: s,
          onClick: l,
          ...r
        } = e;
        return (0, i.jsx)(o.default, {
          onClick: s ? e => {
            (0, a.Z)({
              ...s
            }), null == l || l(e)
          } : l,
          ...r
        })
      }
    },
    875: function(e, s, l) {
      l.d(s, {
        r: function() {
          return r
        }
      });
      let i = {
        "": "homepage",
        "/*": "recipe_list",
        categories: "categories",
        favorites: "favorites",
        inspiration: "inspiration",
        recipes: "recipe_detail",
        search: "all_recipes",
        seopage: "seo_page"
      };
      var a = l(9376),
        o = JSON.parse('{"en-MZ":{"/search":"/all-recipes","/recipes":"/recipes","/recipes/:slug":"/recipes/:slug","/favorites":"/favorites","/categories":"/categories","/categories/:slug":"/categories/:slug","/legal":"/legal","/legal/cookies":"/legal/cookies","/legal/:slug":"/legal/:slug","/seopage":"/selection","/seopage/:filter/:filterValue":"/selection/:filter/:filterValue","/snap-and-cook":"/snap-and-cook","/recipe-components":" /recipe-components"},"en-LD":{"/search":"/all-recipes","/recipes":"/recipes","/recipes/:slug":"/recipes/:slug","/favorites":"/favorites","/categories":"/categories","/categories/:slug":"/categories/:slug","/legal":"/legal","/legal/cookies":"/legal/cookies","/legal/:slug":"/legal/:slug","/seopage":"/static","/seopage/:filter/:filterValue":"/static/:filter/:filterValue","/snap-and-cook":"/snap-and-cook","/recipe-components":" /recipe-components"},"sv-SE":{"/search":"/alla-recept","/recipes":"/recept","/recipes/:slug":"/recept/:slug","/favorites":"/favoriter","/categories":"/kategorier","/categories/:slug":"/kategorier/:slug","/legal":"/legal","/legal/cookies":"/legal/cookies","/legal/:slug":"/legal/:slug","/seopage":"/urval","/seopage/:filter/:filterValue":"/urval/:filter/:filterValue","/snap-and-cook":"/snap-and-cook","/recipe-components":" /recipe-components"},"en-IE":{"/search":"/recipes","/recipes":"/recipes","/recipes/:slug":"/recipes/:slug","/favorites":"/favourites","/categories":"/categories","/categories/:slug":"/categories/:slug","/legal":"/legal","/legal/cookies":"/legal/cookies","/legal/:slug":"/legal/:slug","/seopage":"/selection","/seopage/:filter/:filterValue":"/selection/:filter/:filterValue","/snap-and-cook":"/snap-and-cook","/recipe-components":" /recipe-components"},"en-NI":{"/search":"/recipes","/recipes":"/recipes","/recipes/:slug":"/recipes/:slug","/favorites":"/favourites","/categories":"/categories","/categories/:slug":"/categories/:slug","/legal":"/legal","/legal/cookies":"/legal/cookies","/legal/:slug":"/legal/:slug","/seopage":"/selection","/seopage/:filter/:filterValue":"/selection/:filter/:filterValue","/snap-and-cook":"/snap-and-cook","/recipe-components":" /recipe-components"},"de-AT":{"/search":"/alle-rezepte","/recipes":"/rezepte","/recipes/:slug":"/rezepte/:slug","/favorites":"/favoriten","/categories":"/kategorien","/categories/:slug":"/kategorien/:slug","/legal":"/rechtliches","/legal/cookies":"/rechtliches/cookies","/legal/:slug":"/rechtliches/:slug","/seopage":"/auswahl","/seopage/:filter/:filterValue":"/auswahl/:filter/:filterValue","/snap-and-cook":"/snap-and-cook","/recipe-components":" /recipe-components"},"de-DE":{"/search":"/alle-rezepte","/recipes":"/rezepte","/recipes/:slug":"/rezepte/:slug","/favorites":"/favoriten","/categories":"/kategorien","/categories/:slug":"/kategorien/:slug","/legal":"/rechtliches","/legal/cookies":"/rechtliches/cookies","/legal/:slug":"/rechtliches/:slug","/seopage":"/auswahl","/seopage/:filter/:filterValue":"/auswahl/:filter/:filterValue","/snap-and-cook":"/snap-and-cook","/recipe-components":" /recipe-components"},"pt-PT":{"/search":"/todas-as-receitas","/recipes":"/receitas","/recipes/:slug":"/receitas/:slug","/favorites":"/favoritos","/categories":"/categorias","/categories/:slug":"/categorias/:slug","/legal":"/informacoes-legais","/legal/cookies":"/informacoes-legais/politica-de-cookies","/legal/:slug":"/informacoes-legais/:slug","/seopage":"/selecao","/seopage/:filter/:filterValue":"/selecao/:filter/:filterValue","/snap-and-cook":"/snap-and-cook","/recipe-components":" /recipe-components"},"fi-FI":{"/search":"/kaikki-reseptit","/recipes":"/reseptit","/recipes/:slug":"/reseptit/:slug","/favorites":"/suosikit","/categories":"/kategoriat","/categories/:slug":"/kategoriat/:slug","/legal":"/oikeudelliset-tiedotteet","/legal/cookies":"/oikeudelliset-tiedotteet/evasteet","/legal/:slug":"/oikeudelliset-tiedotteet/:slug","/seopage":"/valinta","/seopage/:filter/:filterValue":"/valinta/:filter/:filterValue","/snap-and-cook":"/snap-and-cook","/recipe-components":" /recipe-components"},"fr-FR":{"/search":"/nos-recettes","/recipes":"/recettes","/recipes/:slug":"/recettes/:slug","/favorites":"/favoris","/categories":"/categories","/categories/:slug":"/categories/:slug","/legal":"/juridique","/legal/cookies":"/juridique/cookies","/legal/:slug":"/juridique/:slug","/seopage":"/selection","/seopage/:filter/:filterValue":"/selection/:filter/:filterValue","/snap-and-cook":"/snap-and-cook","/recipe-components":" /recipe-components"},"ro-RO":{"/search":"/toate-retetele","/recipes":"/retete","/recipes/:slug":"/retete/:slug","/favorites":"/favorite","/categories":"/categorii","/categories/:slug":"/categorii/:slug","/legal":"/legal","/legal/cookies":"/legal/cookies","/legal/:slug":"/legal/:slug","/seopage":"/selectie","/seopage/:filter/:filterValue":"/selectie/:filter/:filterValue","/snap-and-cook":"/snap-and-cook","/recipe-components":" /recipe-components"},"nl-NL":{"/search":"/allerecepten","/recipes":"/recept","/recipes/:slug":"/recept/:slug","/favorites":"/favorieten","/categories":"/themas","/categories/:slug":"/themas/:slug","/legal":"/legal","/legal/cookies":"/legal/cookielijst","/legal/:slug":"/legal/:slug","/seopage":"/selectie","/seopage/:filter/:filterValue":"/selectie/:filter/:filterValue","/snap-and-cook":"/snap-and-cook","/recipe-components":" /recipe-components"},"bg-BG":{"/search":"/vsichki-recepti","/recipes":"/recipes","/recipes/:slug":"/recipes/:slug","/favorites":"/favorites","/categories":"/categories","/categories/:slug":"/categories/:slug","/legal":"/legal","/legal/cookies":"/legal/cookies","/legal/:slug":"/legal/:slug","/seopage":"/selection","/seopage/:filter/:filterValue":"/selection/:filter/:filterValue","/snap-and-cook":"/snap-and-cook","/recipe-components":" /recipe-components"},"it-IT":{"/search":"/tutte-le-ricette","/recipes":"/ricette","/recipes/:slug":"/ricette/:slug","/favorites":"/preferite","/categories":"/categorie","/categories/:slug":"/categorie/:slug","/legal":"/informazioni-legali","/legal/cookies":"/informazioni-legali/cookie-policy-clienti","/legal/:slug":"/informazioni-legali/:slug","/seopage":"/selezione","/seopage/:filter/:filterValue":"/selezione/:filter/:filterValue","/snap-and-cook":"/snap-and-cook","/recipe-components":" /recipe-components"},"el-GR":{"/search":"/recipes","/recipes":"/recipes","/recipes/:slug":"/recipes/:slug","/favorites":"/agapimena","/categories":"/katigories","/categories/:slug":"/katigories/:slug","/legal":"/legal","/legal/cookies":"/legal/cookies","/legal/:slug":"/legal/:slug","/seopage":"/epiloges","/seopage/:filter/:filterValue":"/epiloges/:filter/:filterValue","/snap-and-cook":"/snap-and-cook","/recipe-components":" /recipe-components"},"en-CY":{"/search":"/recipes","/recipes":"/recipes","/recipes/:slug":"/recipes/:slug","/favorites":"/favorites","/categories":"/categories","/categories/:slug":"/categories/:slug","/legal":"/legal","/legal/cookies":"/legal/cookies","/legal/:slug":"/legal/:slug","/seopage":"/selection","/seopage/:filter/:filterValue":"/selection/:filter/:filterValue","/snap-and-cook":"/snap-and-cook","/recipe-components":" /recipe-components"},"el-CY":{"/search":"/recipes","/recipes":"/recipes","/recipes/:slug":"/recipes/:slug","/favorites":"/agapimena","/categories":"/katigories","/categories/:slug":"/katigories/:slug","/legal":"/legal","/legal/cookies":"/legal/cookies","/legal/:slug":"/legal/:slug","/seopage":"/epiloges","/seopage/:filter/:filterValue":"/epiloges/:filter/:filterValue","/snap-and-cook":"/snap-and-cook","/recipe-components":" /recipe-components"},"de-CH":{"/search":"/rezepte","/recipes":"/rezepte","/recipes/:slug":"/rezepte/:slug","/favorites":"/favoriten","/categories":"/kategorien","/categories/:slug":"/kategorien/:slug","/legal":"/rechtliches","/legal/cookies":"/rechtliches/cookies","/legal/:slug":"/rechtliches/:slug","/seopage":"/auswahl","/seopage/:filter/:filterValue":"/auswahl/:filter/:filterValue","/snap-and-cook":"/snap-and-cook","/recipe-components":" /recipe-components"},"fr-CH":{"/search":"/recettes","/recipes":"/recettes","/recipes/:slug":"/recettes/:slug","/favorites":"/favoris","/categories":"/categories","/categories/:slug":"/categories/:slug","/legal":"/juridique","/legal/cookies":"/juridique/cookies","/legal/:slug":"/juridique/:slug","/seopage":"/selection","/seopage/:filter/:filterValue":"/selection/:filter/:filterValue","/snap-and-cook":"/snap-and-cook","/recipe-components":" /recipe-components"},"it-CH":{"/search":"/ricette","/recipes":"/ricette","/recipes/:slug":"/ricette/:slug","/favorites":"/preferite","/categories":"/categorie","/categories/:slug":"/categorie/:slug","/legal":"/legale","/legal/cookies":"/legale/cookies","/legal/:slug":"/legale/:slug","/seopage":"/selezione","/seopage/:filter/:filterValue":"/selezione/:filter/:filterValue","/snap-and-cook":"/snap-and-cook","/recipe-components":" /recipe-components"},"fr-BE":{"/search":"/allrecipes","/recipes":"/recipes","/recipes/:slug":"/recipes/:slug","/favorites":"/favoris","/categories":"/categories","/categories/:slug":"/categories/:slug","/legal":"/legal","/legal/cookies":"/legal/cookies","/legal/:slug":"/legal/:slug","/seopage":"/selection","/seopage/:filter/:filterValue":"/selection/:filter/:filterValue","/snap-and-cook":"/snap-and-cook","/recipe-components":" /recipe-components"},"nl-BE":{"/search":"/allrecipes","/recipes":"/recipes","/recipes/:slug":"/recipes/:slug","/favorites":"/favorieten","/categories":"/categorieen","/categories/:slug":"/categorieen/:slug","/legal":"/legal","/legal/cookies":"/legal/cookies","/legal/:slug":"/legal/:slug","/seopage":"/selectie","/seopage/:filter/:filterValue":"/selectie/:filter/:filterValue","/snap-and-cook":"/snap-and-cook","/recipe-components":" /recipe-components"},"en-MT":{"/search":"/all-recipes","/recipes":"/recipe","/recipes/:slug":"/recipe/:slug","/favorites":"/favorites","/categories":"/categories","/categories/:slug":"/categories/:slug","/legal":"/legal","/legal/cookies":"/legal/customer-cookie-policy","/legal/:slug":"/legal/:slug","/seopage":"/selection","/seopage/:filter/:filterValue":"/selection/:filter/:filterValue","/snap-and-cook":"/snap-and-cook","/recipe-components":" /recipe-components"},"da-DK":{"/search":"/opskrifter","/recipes":"/recipes","/recipes/:slug":"/recipes/:slug","/favorites":"/favoritter","/categories":"/kategorier","/categories/:slug":"/kategorier/:slug","/legal":"/juridisk-information","/legal/cookies":"/juridisk-information/cookies","/legal/:slug":"/juridisk-information/:slug","/seopage":"/udvalg","/seopage/:filter/:filterValue":"/udvalg/:filter/:filterValue","/snap-and-cook":"/snap-and-cook","/recipe-components":" /recipe-components"},"lt-LT":{"/search":"/visi-receptai","/recipes":"/receptai","/recipes/:slug":"/receptai/:slug","/favorites":"/megstamiausi","/categories":"/kategorijos","/categories/:slug":"/kategorijos/:slug","/legal":"/teisine-informacija","/legal/cookies":"/teisine-informacija/slapukai","/legal/:slug":"/teisine-informacija/:slug","/seopage":"/pasirinkimas","/seopage/:filter/:filterValue":"/pasirinkimas/:filter/:filterValue","/snap-and-cook":"/snap-and-cook","/recipe-components":" /recipe-components"},"es-ES":{"/search":"/todasrecetas","/recipes":"/recetas","/recipes/:slug":"/recetas/:slug","/favorites":"/favoritos","/categories":"/categorias","/categories/:slug":"/categorias/:slug","/legal":"/legal","/legal/cookies":"/legal/cookies","/legal/:slug":"/legal/:slug","/seopage":"/seleccion","/seopage/:filter/:filterValue":"/seleccion/:filter/:filterValue","/snap-and-cook":"/snap-and-cook","/recipe-components":" /recipe-components"},"hr-HR":{"/search":"/svi-recepti","/recipes":"/recepti","/recipes/:slug":"/recepti/:slug","/favorites":"/favoriti","/categories":"/kategorije","/categories/:slug":"/kategorije/:slug","/legal":"/pravne-informacije","/legal/cookies":"/pravne-informacije/cookies","/legal/:slug":"/pravne-informacije/:slug","/seopage":"/izbor","/seopage/:filter/:filterValue":"/izbor/:filter/:filterValue","/snap-and-cook":"/snap-and-cook","/recipe-components":" /recipe-components"},"sl-SI":{"/search":"/vsi-recepti","/recipes":"/recepti","/recipes/:slug":"/recepti/:slug","/favorites":"/favoriti","/categories":"/kategorije","/categories/:slug":"/kategorije/:slug","/legal":"/pravne-informacije","/legal/cookies":"/pravne-informacije/piskotki","/legal/:slug":"/pravne-informacije/:slug","/seopage":"/izbor","/seopage/:filter/:filterValue":"/izbor/:filter/:filterValue","/snap-and-cook":"/snap-and-cook","/recipe-components":" /recipe-components"},"et-EE":{"/search":"/koik-retseptid","/recipes":"/retseptid","/recipes/:slug":"/retseptid/:slug","/favorites":"/lemmikud","/categories":"/kategooriad","/categories/:slug":"/kategooriad/:slug","/legal":"/juriidiline-teave","/legal/cookies":"/juriidiline-teave/kupsised","/legal/:slug":"/juriidiline-teave/:slug","/seopage":"/valik","/seopage/:filter/:filterValue":"/valik/:filter/:filterValue","/snap-and-cook":"/snap-and-cook","/recipe-components":" /recipe-components"},"lv-LV":{"/search":"/visas-receptes","/recipes":"/receptes","/recipes/:slug":"/receptes/:slug","/favorites":"/favoriti","/categories":"/kategorijas","/categories/:slug":"/kategorijas/:slug","/legal":"/juridiska-informacija","/legal/cookies":"/juridiska-informacija/sikdatnes","/legal/:slug":"/juridiska-informacija/:slug","/seopage":"/izvele","/seopage/:filter/:filterValue":"/izvele/:filter/:filterValue","/snap-and-cook":"/snap-and-cook","/recipe-components":" /recipe-components"},"sr-RS":{"/search":"/svi-recepti","/recipes":"/recepti","/recipes/:slug":"/recepti/:slug","/favorites":"/omiljeni","/categories":"/kategorije","/categories/:slug":"/kategorije/:slug","/legal":"/pravne-informacije","/legal/cookies":"/pravne-informacije/kolacici","/legal/:slug":"/pravne-informacije/:slug","/seopage":"/izbor","/seopage/:filter/:filterValue":"/izbor/:filter/:filterValue","/snap-and-cook":"/snap-and-cook","/recipe-components":" /recipe-components"},"hu-HU":{"/search":"/receptek","/recipes":"/recept","/recipes/:slug":"/recept/:slug","/favorites":"/kedvencek","/categories":"/kategoriak","/categories/:slug":"/kategoriak/:slug","/legal":"/jogi-informaciok","/legal/cookies":"/jogi-informaciok/sutik","/legal/:slug":"/jogi-informaciok/:slug","/seopage":"/valasztek","/seopage/:filter/:filterValue":"/valasztek/:filter/:filterValue","/snap-and-cook":"/snap-and-cook","/recipe-components":" /recipe-components"},"en-GB":{"/search":"/all-recipes","/recipes":"/recipes","/recipes/:slug":"/recipes/:slug","/favorites":"/favourites","/categories":"/categories","/categories/:slug":"/categories/:slug","/legal":"/legal","/legal/cookies":"/legal/cookies","/legal/:slug":"/legal/:slug","/seopage":"/selection","/seopage/:filter/:filterValue":"/selection/:filter/:filterValue","/snap-and-cook":"/snap-and-cook","/recipe-components":" /recipe-components"},"en-US":{"/search":"/all-recipes","/recipes":"/recipes","/recipes/:slug":"/recipes/:slug","/favorites":"/favourites","/categories":"/categories","/categories/:slug":"/categories/:slug","/legal":"/legal","/legal/cookies":"/legal/cookies","/legal/:slug":"/legal/:slug","/seopage":"/selection","/seopage/:filter/:filterValue":"/selection/:filter/:filterValue","/snap-and-cook":"/snap-and-cook","/recipe-components":" /recipe-components"}}');

      function r() {
        let e = (0, a.usePathname)(),
          s = (0, a.useParams)()
          .locale,
          l = Array.isArray(s) ? s[0] : s;
        if (!l) return;
        let r = function(e, s, l) {
            let i = null == l ? void 0 : l[e];
            if (!i) return;
            let a = e => {
                var s;
                return null !== (s = (e || "")
                  .trim()
                  .replace(/^\/+/, "")
                  .split("/")[0]) && void 0 !== s ? s : ""
              },
              o = e => e.includes(":"),
              r = a(s);
            if (!r) return;
            let c = [];
            for (let [e, s] of Object.entries(i)) a(s) === r && c.push({
              originalFirst: a(e),
              originalPath: e
            });
            if (0 === c.length) return r;
            let t = c.find(e => !o(e.originalPath));
            return (null != t ? t : c[0])
              .originalFirst || void 0
          }(l, e, o),
          c = i[null != r ? r : ""];
        return c || void 0 === r || "" === r || (c = i["/*"]), {
          originalPath: r,
          locale: l,
          pageType: c
        }
      }
    },
    8732: function(e, s) {
      s.Z = e => {
        var s;
        window.dataLayer && (null === (s = window.dataLayer) || void 0 === s || s.push(e))
      }
    }
  }
]);