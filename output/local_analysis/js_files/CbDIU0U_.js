import {
  bA as a
} from "./CAkCZjNM.js";

function c(n) {
  return {
    all: n = n || new Map,
    on: function(e, o) {
      var t = n.get(e);
      t ? t.push(o) : n.set(e, [o])
    },
    off: function(e, o) {
      var t = n.get(e);
      t && (o ? t.splice(t.indexOf(o) >>> 0, 1) : n.set(e, []))
    },
    emit: function(e, o) {
      var t = n.get(e);
      t && t.slice()
        .map(function(i) {
          i(o)
        }), (t = n.get("*")) && t.slice()
        .map(function(i) {
          i(e, o)
        })
    }
  }
}
const s = c(),
  u = {
    DEMO_UP: "demoup.addplaybutton",
    WINDOW_RESIZE: "window-resize",
    OPEN_STORE_STOCK_DIALOG: "product:open-store-stock-dialog",
    SHOW_STORE_AVAILABILITY: "product:show-store-availability",
    CONTENT_TAB: "content-tab"
  };
window.addEventListener("resize", a(() => s.emit(u.WINDOW_RESIZE), 200));
const r = {
  dispatchCustomEvent: (n, e, o) => {
    const t = new CustomEvent(n, {
      detail: o ?? {},
      bubbles: !0,
      cancelable: !0
    });
    if (e === "document") {
      document.dispatchEvent(t);
      return
    }(e ?? window)
    .dispatchEvent(t)
  },
  ...s
};
export {
  r as E, u as a, c as m
};