import {
  d as s,
  i as n,
  n as u,
  $ as i,
  bj as d,
  y as m,
  m as f,
  a8 as c
} from "./QvGuN4mp.js";
import {
  a as l,
  u as p
} from "./BZqGDSdX.js";
import "./XKpuMyXA.js";
const w = s({
  __name: "default",
  async setup(_) {
    let e, t;
    const o = n(),
      {
        trackPageLoad: r
      } = l();
    return [e, t] = u(() => p("fixQueryParams", async a => (delete a?.payload?.path, null))), e = await e, t(), i(m(), () => {
      d()
    }, {
      immediate: !0
    }), f(() => {
      o.getConfigValue("isEmbedded") || r()
    }), (a, y) => c(a.$slots, "default")
  }
});
export {
  w as
  default
};