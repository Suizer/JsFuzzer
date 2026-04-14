(self.webpackChunk_N_E = self.webpackChunk_N_E || [])
.push([
  [4285], {
    735: function(e, n, u) {
      Promise.resolve()
        .then(u.bind(u, 6297))
    },
    9376: function(e, n, u) {
      "use strict";
      var t = u(5475);
      u.o(t, "notFound") && u.d(n, {
        notFound: function() {
          return t.notFound
        }
      }), u.o(t, "useParams") && u.d(n, {
        useParams: function() {
          return t.useParams
        }
      }), u.o(t, "usePathname") && u.d(n, {
        usePathname: function() {
          return t.usePathname
        }
      }), u.o(t, "useRouter") && u.d(n, {
        useRouter: function() {
          return t.useRouter
        }
      }), u.o(t, "useSearchParams") && u.d(n, {
        useSearchParams: function() {
          return t.useSearchParams
        }
      })
    },
    6297: function(e, n, u) {
      "use strict";
      u.r(n), u.d(n, {
        default: function() {
          return a
        }
      });
      var t = u(7437),
        r = u(2265),
        o = u(9376);

      function a(e) {
        let {
          children: n
        } = e, u = (0, o.usePathname)();
        return (0, o.useRouter)(), (0, r.useEffect)(() => {
          let e = window.location.href;
          e && !e.endsWith("?hidebanner=true") && (window.history.pushState(null, "", "?hidebanner=true"), window.location.reload())
        }, [u]), (0, t.jsx)(t.Fragment, {
          children: n
        })
      }
    }
  },
  function(e) {
    e.O(0, [2971, 2117, 1744], function() {
      return e(e.s = 735)
    }), _N_E = e.O()
  }
]);