import {
  d as a,
  s as e,
  b_ as s,
  aB as i,
  x as r,
  H as c,
  S as n,
  P as m
} from "./CAkCZjNM.js";
const o = {},
  l = a({
    head() {
      const t = {
        title: void 0,
        htmlAttrs: {},
        link: [],
        meta: [{
          charset: "utf-8"
        }, {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        }, {
          name: "msapplication-TileColor",
          content: o["m-colors-mark-dark"]
        }, {
          name: "theme-color",
          content: o["m-colors-basic-white"]
        }],
        noscript: [],
        script: []
      };
      return t.title = this.meta.title, t
    },
    computed: {
      meta() {
        return s(this.$pinia)
          .meta
      },
      metaComment() {
        return `<!-- Current Revision: ${e().public.commit} | Source: ${e().public.branch} -->`
      }
    }
  }),
  d = ["innerHTML"],
  u = {
    class: "main"
  };

function p(t, h, _, f, $, C) {
  return r(), c("div", null, [n("span", {
    innerHTML: t.metaComment
  }, null, 8, d), n("main", u, [m(t.$slots, "default")])])
}
const b = i(l, [
  ["render", p]
]);
export {
  b as
  default
};