(self.webpackChunk_N_E = self.webpackChunk_N_E || [])
.push([
  [2858], {
    2426: function(e, n, r) {
      Promise.resolve()
        .then(r.bind(r, 6456)), Promise.resolve()
        .then(r.bind(r, 6606)), Promise.resolve()
        .then(r.bind(r, 7241)), Promise.resolve()
        .then(r.bind(r, 5786)), Promise.resolve()
        .then(r.bind(r, 7826)), Promise.resolve()
        .then(r.t.bind(r, 9886, 23))
    },
    7241: function(e, n, r) {
      "use strict";
      r.d(n, {
        PageTracker: function() {
          return o
        }
      });
      var t = r(875),
        s = r(8732),
        i = r(2265);
      let o = () => {
        let e = (0, t.r)(),
          n = null == e ? void 0 : e.pageType;
        return (0, i.useEffect)(() => {
          (0, s.Z)({
            event: "page_view_custom",
            screen_name: n
          })
        }, [n]), null
      }
    }
  },
  function(e) {
    e.O(0, [7797, 318, 8159, 4497, 1732, 6946, 2602, 9452, 8506, 5786, 2971, 2117, 1744], function() {
      return e(e.s = 2426)
    }), _N_E = e.O()
  }
]);