(function(v) {
  var w = function() {
      function n(p, m) {
        return p.charCodeAt(m + 3) << 24 | p.charCodeAt(m + 2) << 16 | p.charCodeAt(m + 1) << 8 | p.charCodeAt(m)
      }
      var m = null;
      return {
        a: function(m) {
          return [n(m, 0), n(m, 4), n(m, 8), n(m, 12)]
        },
        b: function(p, t) {
          var q, u, k = p[1] >>> 0,
            h = p[0] >>> 0,
            e = p[3] >>> 0,
            f = p[2] >>> 0,
            a = {
              h: k,
              l: h
            },
            c, d, s = 0,
            r = t.length,
            v = r - 7;
          m || (m = Array(8));
          a.h ^= 1936682341;
          a.h >>>= 0;
          a.l ^= 1886610805;
          a.l >>>= 0;
          c = e ^ 1685025377;
          c >>>= 0;
          d = f ^ 1852075885;
          d >>>= 0;
          k = (k ^ 1819895653) >>> 0;
          h = (h ^ 1852142177) >>> 0;
          e = (e ^ 1952801890) >>> 0;
          for (f = (f ^ 2037671283) >>>
            0; s < v;) {
            q = n(t, s + 4);
            u = n(t, s);
            var e = e ^ q,
              e = e >>> 0,
              f = f ^ u,
              f = f >>> 0,
              b = a.l + d,
              g = a.h + c + (b / 2 >>> 31) >>> 0;
            a.h = g;
            a.l = b >>> 0;
            b = h + f;
            k = g = k + e + (b / 2 >>> 31) >>> 0;
            h = b >>> 0;
            g = c << 13 | d >>> 19;
            b = d << 13 | c >>> 19;
            c = g;
            d = b;
            g = e << 16 | f >>> 16;
            b = f << 16 | e >>> 16;
            e = g;
            f = b;
            c ^= a.h;
            c >>>= 0;
            d ^= a.l;
            d >>>= 0;
            var e = e ^ k,
              e = e >>> 0,
              f = f ^ h,
              f = f >>> 0,
              l = a.l;
            a.l = a.h;
            a.h = l;
            b = h + d;
            k = g = k + c + (b / 2 >>> 31) >>> 0;
            h = b >>> 0;
            b = a.l + f;
            g = a.h + e + (b / 2 >>> 31) >>> 0;
            a.h = g;
            a.l = b >>> 0;
            g = c << 17 | d >>> 15;
            b = d << 17 | c >>> 15;
            c = g;
            d = b;
            g = e << 21 | f >>> 11;
            b = f << 21 | e >>> 11;
            e = g;
            f = b;
            c ^= k;
            c >>>= 0;
            d ^= h;
            d >>>= 0;
            e ^= a.h;
            e >>>= 0;
            f ^=
              a.l;
            f >>>= 0;
            l = h;
            h = k;
            k = l;
            b = a.l + d;
            g = a.h + c + (b / 2 >>> 31) >>> 0;
            a.h = g;
            a.l = b >>> 0;
            b = h + f;
            k = g = k + e + (b / 2 >>> 31) >>> 0;
            h = b >>> 0;
            g = c << 13 | d >>> 19;
            b = d << 13 | c >>> 19;
            c = g;
            d = b;
            g = e << 16 | f >>> 16;
            b = f << 16 | e >>> 16;
            e = g;
            f = b;
            c ^= a.h;
            c >>>= 0;
            d ^= a.l;
            d >>>= 0;
            e ^= k;
            e >>>= 0;
            f ^= h;
            f >>>= 0;
            l = a.l;
            a.l = a.h;
            a.h = l;
            b = h + d;
            k = g = k + c + (b / 2 >>> 31) >>> 0;
            h = b >>> 0;
            b = a.l + f;
            g = a.h + e + (b / 2 >>> 31) >>> 0;
            a.h = g;
            a.l = b >>> 0;
            g = c << 17 | d >>> 15;
            b = d << 17 | c >>> 15;
            c = g;
            d = b;
            g = e << 21 | f >>> 11;
            b = f << 21 | e >>> 11;
            e = g;
            f = b;
            c ^= k;
            c >>>= 0;
            d ^= h;
            d >>>= 0;
            e ^= a.h;
            e >>>= 0;
            f ^= a.l;
            f >>>= 0;
            l = h;
            h = k;
            k = l;
            a.h ^= q;
            a.h >>>= 0;
            a.l ^= u;
            a.l >>>= 0;
            s += 8
          }
          m[7] = r;
          for (q = 0; s < r;) m[q++] = t.charCodeAt(s++);
          for (; 7 > q;) m[q++] = 0;
          q = m[7] << 24 | m[6] << 16 | m[5] << 8 | m[4];
          u = m[3] << 24 | m[2] << 16 | m[1] << 8 | m[0];
          e ^= q;
          e >>>= 0;
          f ^= u;
          f >>>= 0;
          b = a.l + d;
          g = a.h + c + (b / 2 >>> 31) >>> 0;
          a.h = g;
          a.l = b >>> 0;
          b = h + f;
          k = g = k + e + (b / 2 >>> 31) >>> 0;
          h = b >>> 0;
          g = c << 13 | d >>> 19;
          b = d << 13 | c >>> 19;
          c = g;
          d = b;
          g = e << 16 | f >>> 16;
          b = f << 16 | e >>> 16;
          c ^= a.h;
          c >>>= 0;
          d ^= a.l;
          d >>>= 0;
          e = g ^ k;
          e >>>= 0;
          f = b ^ h;
          f >>>= 0;
          l = a.l;
          a.l = a.h;
          a.h = l;
          b = h + d;
          k = g = k + c + (b / 2 >>> 31) >>> 0;
          h = b >>> 0;
          b = a.l + f;
          g = a.h + e + (b / 2 >>> 31) >>> 0;
          a.h = g;
          a.l = b >>> 0;
          g = c << 17 | d >>> 15;
          b = d << 17 |
            c >>> 15;
          c = g;
          d = b;
          g = e << 21 | f >>> 11;
          b = f << 21 | e >>> 11;
          c ^= k;
          c >>>= 0;
          d ^= h;
          d >>>= 0;
          e = g ^ a.h;
          e >>>= 0;
          f = b ^ a.l;
          f >>>= 0;
          l = h;
          h = k;
          b = a.l + d;
          g = a.h + c + (b / 2 >>> 31) >>> 0;
          a.h = g;
          a.l = b >>> 0;
          b = h + f;
          k = g = l + e + (b / 2 >>> 31) >>> 0;
          h = b >>> 0;
          g = c << 13 | d >>> 19;
          b = d << 13 | c >>> 19;
          c = g;
          d = b;
          g = e << 16 | f >>> 16;
          b = f << 16 | e >>> 16;
          c ^= a.h;
          c >>>= 0;
          d ^= a.l;
          d >>>= 0;
          e = g ^ k;
          e >>>= 0;
          f = b ^ h;
          f >>>= 0;
          l = a.l;
          a.l = a.h;
          a.h = l;
          b = h + d;
          k = g = k + c + (b / 2 >>> 31) >>> 0;
          h = b >>> 0;
          b = a.l + f;
          g = a.h + e + (b / 2 >>> 31) >>> 0;
          a.h = g;
          a.l = b >>> 0;
          g = c << 17 | d >>> 15;
          b = d << 17 | c >>> 15;
          c = g;
          d = b;
          g = e << 21 | f >>> 11;
          b = f << 21 | e >>> 11;
          c ^= k;
          c >>>= 0;
          d ^= h;
          d >>>= 0;
          e = g ^ a.h;
          e >>>= 0;
          f = b ^ a.l;
          f >>>= 0;
          l = h;
          h = k;
          a.h ^= q;
          a.h >>>= 0;
          a.l ^= u;
          a.l >>>= 0;
          k = l ^ 0;
          k >>>= 0;
          h ^= 255;
          h >>>= 0;
          b = a.l + d;
          g = a.h + c + (b / 2 >>> 31) >>> 0;
          a.h = g;
          a.l = b >>> 0;
          b = h + f;
          k = g = k + e + (b / 2 >>> 31) >>> 0;
          h = b >>> 0;
          g = c << 13 | d >>> 19;
          b = d << 13 | c >>> 19;
          c = g;
          d = b;
          g = e << 16 | f >>> 16;
          b = f << 16 | e >>> 16;
          c ^= a.h;
          c >>>= 0;
          d ^= a.l;
          d >>>= 0;
          e = g ^ k;
          e >>>= 0;
          f = b ^ h;
          f >>>= 0;
          l = a.l;
          a.l = a.h;
          a.h = l;
          b = h + d;
          k = g = k + c + (b / 2 >>> 31) >>> 0;
          h = b >>> 0;
          b = a.l + f;
          g = a.h + e + (b / 2 >>> 31) >>> 0;
          a.h = g;
          a.l = b >>> 0;
          g = c << 17 | d >>> 15;
          b = d << 17 | c >>> 15;
          c = g;
          d = b;
          g = e << 21 | f >>> 11;
          b = f << 21 | e >>> 11;
          c ^= k;
          c >>>= 0;
          d ^= h;
          d >>>=
            0;
          e = g ^ a.h;
          e >>>= 0;
          f = b ^ a.l;
          f >>>= 0;
          l = h;
          h = k;
          b = a.l + d;
          g = a.h + c + (b / 2 >>> 31) >>> 0;
          a.h = g;
          a.l = b >>> 0;
          b = h + f;
          k = g = l + e + (b / 2 >>> 31) >>> 0;
          h = b >>> 0;
          g = c << 13 | d >>> 19;
          b = d << 13 | c >>> 19;
          c = g;
          d = b;
          g = e << 16 | f >>> 16;
          b = f << 16 | e >>> 16;
          c ^= a.h;
          c >>>= 0;
          d ^= a.l;
          d >>>= 0;
          e = g ^ k;
          e >>>= 0;
          f = b ^ h;
          f >>>= 0;
          l = a.l;
          a.l = a.h;
          a.h = l;
          b = h + d;
          k = g = k + c + (b / 2 >>> 31) >>> 0;
          h = b >>> 0;
          b = a.l + f;
          g = a.h + e + (b / 2 >>> 31) >>> 0;
          a.h = g;
          a.l = b >>> 0;
          g = c << 17 | d >>> 15;
          b = d << 17 | c >>> 15;
          c = g;
          d = b;
          g = e << 21 | f >>> 11;
          b = f << 21 | e >>> 11;
          c ^= k;
          c >>>= 0;
          d ^= h;
          d >>>= 0;
          e = g ^ a.h;
          e >>>= 0;
          f = b ^ a.l;
          f >>>= 0;
          l = h;
          h = k;
          b = a.l + d;
          g = a.h + c + (b / 2 >>>
            31) >>> 0;
          a.h = g;
          a.l = b >>> 0;
          b = h + f;
          k = g = l + e + (b / 2 >>> 31) >>> 0;
          h = b >>> 0;
          g = c << 13 | d >>> 19;
          b = d << 13 | c >>> 19;
          c = g;
          d = b;
          g = e << 16 | f >>> 16;
          b = f << 16 | e >>> 16;
          c ^= a.h;
          c >>>= 0;
          d ^= a.l;
          d >>>= 0;
          e = g ^ k;
          e >>>= 0;
          f = b ^ h;
          f >>>= 0;
          l = a.l;
          a.l = a.h;
          a.h = l;
          b = h + d;
          k = g = k + c + (b / 2 >>> 31) >>> 0;
          h = b >>> 0;
          b = a.l + f;
          g = a.h + e + (b / 2 >>> 31) >>> 0;
          a.h = g;
          a.l = b >>> 0;
          g = c << 17 | d >>> 15;
          b = d << 17 | c >>> 15;
          c = g;
          d = b;
          g = e << 21 | f >>> 11;
          b = f << 21 | e >>> 11;
          c ^= k;
          c >>>= 0;
          d ^= h;
          d >>>= 0;
          e = g ^ a.h;
          e >>>= 0;
          f = b ^ a.l;
          f >>>= 0;
          l = h;
          h = k;
          b = a.l + d;
          g = a.h + c + (b / 2 >>> 31) >>> 0;
          a.h = g;
          a.l = b >>> 0;
          b = h + f;
          k = g = l + e + (b / 2 >>> 31) >>> 0;
          h = b >>> 0;
          g = c << 13 | d >>> 19;
          b = d << 13 | c >>> 19;
          c = g;
          d = b;
          g = e << 16 | f >>> 16;
          b = f << 16 | e >>> 16;
          c ^= a.h;
          c >>>= 0;
          d ^= a.l;
          d >>>= 0;
          e = g ^ k;
          e >>>= 0;
          f = b ^ h;
          f >>>= 0;
          l = a.l;
          a.l = a.h;
          a.h = l;
          b = h + d;
          k = g = k + c + (b / 2 >>> 31) >>> 0;
          h = b >>> 0;
          b = a.l + f;
          g = a.h + e + (b / 2 >>> 31) >>> 0;
          a.h = g;
          a.l = b >>> 0;
          g = c << 17 | d >>> 15;
          b = d << 17 | c >>> 15;
          c = g;
          d = b;
          g = e << 21 | f >>> 11;
          b = f << 21 | e >>> 11;
          c ^= k;
          c >>>= 0;
          d ^= h;
          d >>>= 0;
          e = g ^ a.h;
          e >>>= 0;
          f = b ^ a.l;
          f >>>= 0;
          l = h;
          h = k;
          a.h ^= c;
          a.h >>>= 0;
          a.l ^= d;
          a.l >>>= 0;
          a.h ^= l;
          a.h >>>= 0;
          a.l ^= h;
          a.l >>>= 0;
          a.h ^= e;
          a.h >>>= 0;
          a.l ^= f;
          a.l >>>= 0;
          return a
        }
      }
    }(),
    r, x, y, z, A, n, B, C = function() {
      B = n + 6500;
      do {
        r = w.b(x, "\x00" + String.fromCharCode(n >> 16 & 255) + String.fromCharCode(n >> 8 & 255) + String.fromCharCode(n & 255));
        if ((r.l ^ r.h) >>> 0 < y) break;
        if (n >= B) {
          v.setTimeout(C, 50);
          return
        }
      } while (++n < z);
      A(n)
    };
  v.findNonce = function(r, m, p, t) {
    x = w.a(r);
    y = m;
    z = p;
    A = t;
    n = 0;
    C()
  }
})(this);