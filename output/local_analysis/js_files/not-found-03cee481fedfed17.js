(self.webpackChunk_N_E = self.webpackChunk_N_E || [])
.push([
  [9160], {
    3724: function(u, e, n) {
      Promise.resolve()
        .then(n.bind(n, 5292))
    },
    9376: function(u, e, n) {
      "use strict";
      var t = n(5475);
      n.o(t, "notFound") && n.d(e, {
        notFound: function() {
          return t.notFound
        }
      }), n.o(t, "useParams") && n.d(e, {
        useParams: function() {
          return t.useParams
        }
      }), n.o(t, "usePathname") && n.d(e, {
        usePathname: function() {
          return t.usePathname
        }
      }), n.o(t, "useRouter") && n.d(e, {
        useRouter: function() {
          return t.useRouter
        }
      }), n.o(t, "useSearchParams") && n.d(e, {
        useSearchParams: function() {
          return t.useSearchParams
        }
      })
    },
    5292: function(u, e, n) {
      "use strict";
      n.r(e), n.d(e, {
        default: function() {
          return s
        }
      });
      var t = n(2265),
        r = n(9376);

      function s() {
        let u = (0, r.usePathname)(),
          e = (0, r.useRouter)();
        return (0, t.useEffect)(() => {
          "/" !== u && e.push("/")
        }, [u, e]), null
      }
    }
  },
  function(u) {
    u.O(0, [2971, 2117, 1744], function() {
      return u(u.s = 3724)
    }), _N_E = u.O()
  }
]);