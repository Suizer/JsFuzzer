/*!
 * shariff - v3.2.1 - Mon, 27 May 2019 08:23:32 GMT
 * https://github.com/heiseonline/shariff
 * Copyright (c) 2019 Ines Pauer, Philipp Busse, Sebastian Hilbig, Erich Kramer, Deniz Sesli
 * Licensed under the MIT license
 *
 * Attention: Code has been customized by adding viber service.
 */
! function(e) {
  function t(a) {
    if (r[a]) return r[a].exports;
    var i = r[a] = {
      i: a,
      l: !1,
      exports: {}
    };
    return e[a].call(i.exports, i, i.exports, t), i.l = !0, i.exports
  }
  var r = {};
  t.m = e, t.c = r, t.d = function(e, r, a) {
    t.o(e, r) || Object.defineProperty(e, r, {
      configurable: !1,
      enumerable: !0,
      get: a
    })
  }, t.n = function(e) {
    var r = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    };
    return t.d(r, "a", r), r
  }, t.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, t.p = "", t(t.s = 2)
}([function(e, t, r) {
  "use strict";

  function a() {
    this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
  }

  function i(e, t, r) {
    if (e && o.isObject(e) && e instanceof a) return e;
    var i = new a;
    return i.parse(e, t, r), i
  }
  var n = r(10),
    o = r(12);
  t.parse = i, t.resolve = function e(t, r) {
    return i(t, !1, !0)
      .resolve(r)
  }, t.resolveObject = function e(t, r) {
    return t ? i(t, !1, !0)
      .resolveObject(r) : r
  }, t.format = function e(t) {
    return o.isString(t) && (t = i(t)), t instanceof a ? t.format() : a.prototype.format.call(t)
  }, t.Url = a;
  var s = /^([a-z0-9.+-]+:)/i,
    l = /:[0-9]*$/,
    p = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
    u = ["'"].concat(["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "	"])),
    h = ["%", "/", "?", ";", "#"].concat(u),
    d = ["/", "?", "#"],
    f = /^[+a-z0-9A-Z_-]{0,63}$/,
    c = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    m = {
      javascript: !0,
      "javascript:": !0
    },
    b = {
      javascript: !0,
      "javascript:": !0
    },
    g = {
      http: !0,
      https: !0,
      ftp: !0,
      gopher: !0,
      file: !0,
      "http:": !0,
      "https:": !0,
      "ftp:": !0,
      "gopher:": !0,
      "file:": !0
    },
    v = r(13);
  a.prototype.parse = function(e, t, r) {
    if (!o.isString(e)) throw TypeError("Parameter 'url' must be a string, not " + typeof e);
    var a = e.indexOf("?"),
      i = -1 !== a && a < e.indexOf("#") ? "?" : "#",
      l = e.split(i);
    l[0] = l[0].replace(/\\/g, "/");
    var x = e = l.join(i);
    if (x = x.trim(), !r && 1 === e.split("#")
      .length) {
      var k = p.exec(x);
      if (k) return this.path = x, this.href = x, this.pathname = k[1], k[2] ? (this.search = k[2], this.query = t ? v.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this
    }
    var j = s.exec(x);
    if (j) {
      var z = (j = j[0])
        .toLowerCase();
      this.protocol = z, x = x.substr(j.length)
    }
    if (r || j || x.match(/^\/\/[^@\/]+@[^@\/]+/)) {
      var y = "//" === x.substr(0, 2);
      !y || j && b[j] || (x = x.substr(2), this.slashes = !0)
    }
    if (!b[j] && (y || j && !g[j])) {
      for (var $, P, T = -1, w = 0; w < d.length; w++) {
        var _ = x.indexOf(d[w]); - 1 !== _ && (-1 === T || _ < T) && (T = _)
      } - 1 !== (P = -1 === T ? x.lastIndexOf("@") : x.lastIndexOf("@", T)) && ($ = x.slice(0, P), x = x.slice(P + 1), this.auth = decodeURIComponent($)), T = -1;
      for (var w = 0; w < h.length; w++) {
        var _ = x.indexOf(h[w]); - 1 !== _ && (-1 === T || _ < T) && (T = _)
      } - 1 === T && (T = x.length), this.host = x.slice(0, T), x = x.slice(T), this.parseHost(), this.hostname = this.hostname || "";
      var D = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
      if (!D)
        for (var S = this.hostname.split(/\./), w = 0, C = S.length; w < C; w++) {
          var U = S[w];
          if (U && !U.match(f)) {
            for (var R = "", I = 0, L = U.length; I < L; I++) U.charCodeAt(I) > 127 ? R += "x" : R += U[I];
            if (!R.match(f)) {
              var N = S.slice(0, w),
                A = S.slice(w + 1),
                F = U.match(c);
              F && (N.push(F[1]), A.unshift(F[2])), A.length && (x = "/" + A.join(".") + x), this.hostname = N.join(".");
              break
            }
          }
        }
      this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), D || (this.hostname = n.toASCII(this.hostname));
      var O = this.port ? ":" + this.port : "",
        q = this.hostname || "";
      this.host = q + O, this.href += this.host, D && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== x[0] && (x = "/" + x))
    }
    if (!m[z])
      for (var w = 0, C = u.length; w < C; w++) {
        var M = u[w];
        if (-1 !== x.indexOf(M)) {
          var J = encodeURIComponent(M);
          J === M && (J = escape(M)), x = x.split(M)
            .join(J)
        }
      }
    var V = x.indexOf("#"); - 1 !== V && (this.hash = x.substr(V), x = x.slice(0, V));
    var W = x.indexOf("?");
    if (-1 !== W ? (this.search = x.substr(W), this.query = x.substr(W + 1), t && (this.query = v.parse(this.query)), x = x.slice(0, W)) : t && (this.search = "", this.query = {}), x && (this.pathname = x), g[z] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
      var O = this.pathname || "",
        G = this.search || "";
      this.path = O + G
    }
    return this.href = this.format(), this
  }, a.prototype.format = function() {
    var e = this.auth || "";
    e && (e = (e = encodeURIComponent(e))
      .replace(/%3A/i, ":"), e += "@");
    var t = this.protocol || "",
      r = this.pathname || "",
      a = this.hash || "",
      i = !1,
      n = "";
    this.host ? i = e + this.host : this.hostname && (i = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && o.isObject(this.query) && Object.keys(this.query)
      .length && (n = v.stringify(this.query));
    var s = this.search || n && "?" + n || "";
    return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || g[t]) && !1 !== i ? (i = "//" + (i || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : i || (i = ""), a && "#" !== a.charAt(0) && (a = "#" + a), s && "?" !== s.charAt(0) && (s = "?" + s), t + i + (r = r.replace(/[?#]/g, function(e) {
      return encodeURIComponent(e)
    })) + (s = s.replace("#", "%23")) + a
  }, a.prototype.resolve = function(e) {
    return this.resolveObject(i(e, !1, !0))
      .format()
  }, a.prototype.resolveObject = function(e) {
    if (o.isString(e)) {
      var t = new a;
      t.parse(e, !1, !0), e = t
    }
    for (var r = new a, i = Object.keys(this), n = 0; n < i.length; n++) {
      var s = i[n];
      r[s] = this[s]
    }
    if (r.hash = e.hash, "" === e.href) return r.href = r.format(), r;
    if (e.slashes && !e.protocol) {
      for (var l = Object.keys(e), p = 0; p < l.length; p++) {
        var u = l[p];
        "protocol" !== u && (r[u] = e[u])
      }
      return g[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r
    }
    if (e.protocol && e.protocol !== r.protocol) {
      if (!g[e.protocol]) {
        for (var h = Object.keys(e), d = 0; d < h.length; d++) {
          var f = h[d];
          r[f] = e[f]
        }
        return r.href = r.format(), r
      }
      if (r.protocol = e.protocol, e.host || b[e.protocol]) r.pathname = e.pathname;
      else {
        for (var c = (e.pathname || "")
            .split("/"); c.length && !(e.host = c.shift()););
        e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== c[0] && c.unshift(""), c.length < 2 && c.unshift(""), r.pathname = c.join("/")
      }
      if (r.search = e.search, r.query = e.query, r.host = e.host || "", r.auth = e.auth, r.hostname = e.hostname || e.host, r.port = e.port, r.pathname || r.search) {
        var m = r.pathname || "",
          v = r.search || "";
        r.path = m + v
      }
      return r.slashes = r.slashes || e.slashes, r.href = r.format(), r
    }
    var x = r.pathname && "/" === r.pathname.charAt(0),
      k = e.host || e.pathname && "/" === e.pathname.charAt(0),
      j = k || x || r.host && e.pathname,
      z = j,
      y = r.pathname && r.pathname.split("/") || [],
      c = e.pathname && e.pathname.split("/") || [],
      $ = r.protocol && !g[r.protocol];
    if ($ && (r.hostname = "", r.port = null, r.host && ("" === y[0] ? y[0] = r.host : y.unshift(r.host)), r.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === c[0] ? c[0] = e.host : c.unshift(e.host)), e.host = null), j = j && ("" === c[0] || "" === y[0])), k) r.host = e.host || "" === e.host ? e.host : r.host, r.hostname = e.hostname || "" === e.hostname ? e.hostname : r.hostname, r.search = e.search, r.query = e.query, y = c;
    else if (c.length) y || (y = []), y.pop(), y = y.concat(c), r.search = e.search, r.query = e.query;
    else if (!o.isNullOrUndefined(e.search)) {
      if ($) {
        r.hostname = r.host = y.shift();
        var P = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@");
        P && (r.auth = P.shift(), r.host = r.hostname = P.shift())
      }
      return r.search = e.search, r.query = e.query, o.isNull(r.pathname) && o.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r
    }
    if (!y.length) return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
    for (var T = y.slice(-1)[0], w = (r.host || e.host || y.length > 1) && ("." === T || ".." === T) || "" === T, _ = 0, D = y.length; D >= 0; D--) "." === (T = y[D]) ? y.splice(D, 1) : ".." === T ? (y.splice(D, 1), _++) : _ && (y.splice(D, 1), _--);
    if (!j && !z)
      for (; _--; _) y.unshift("..");
    !j || "" === y[0] || y[0] && "/" === y[0].charAt(0) || y.unshift(""), w && "/" !== y.join("/")
      .substr(-1) && y.push("");
    var S = "" === y[0] || y[0] && "/" === y[0].charAt(0);
    if ($) {
      r.hostname = r.host = S ? "" : y.length ? y.shift() : "";
      var P = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@");
      P && (r.auth = P.shift(), r.host = r.hostname = P.shift())
    }
    return (j = j || r.host && y.length) && !S && y.unshift(""), y.length ? r.pathname = y.join("/") : (r.pathname = null, r.path = null), o.isNull(r.pathname) && o.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = e.auth || r.auth, r.slashes = r.slashes || e.slashes, r.href = r.format(), r
  }, a.prototype.parseHost = function() {
    var e = this.host,
      t = l.exec(e);
    t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
  }
}, function(e, t) {
  var r;
  r = function() {
    return this
  }();
  try {
    r = r || Function("return this")() || (0, eval)("this")
  } catch (e) {
    "object" == typeof window && (r = window)
  }
  e.exports = r
}, function(e, t, r) {
  "use strict";
  r(3), e.exports = r(4)
}, function(e, t) {}, function(e, t, r) {
  "use strict";
  (function(t) {
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      i = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
          }
        }
        return function(t, r, a) {
          return r && e(t.prototype, r), a && e(t, a), t
        }
      }(),
      n = r(5),
      o = r(6),
      s = r(0),
      l = {
        theme: "color",
        backendUrl: null,
        infoUrl: "http://ct.de/-2467514",
        infoDisplay: "blank",
        lang: "de",
        langFallback: "en",
        mailUrl: function() {
          var e = s.parse(this.getURL(), !0);
          return e.query.view = "mail", delete e.search, s.format(e)
        },
        mailBody: function() {
          return this.getURL()
        },
        mediaUrl: null,
        orientation: "horizontal",
        buttonStyle: "standard",
        referrerTrack: null,
        services: ["twitter", "facebook", "info"],
        title: t.document.title,
        twitterVia: null,
        flattrUser: null,
        flattrCategory: null,
        url: function() {
          var e = t.document.location.href,
            r = n("link[rel=canonical]")
            .attr("href") || this.getMeta("og:url") || "";
          return r.length > 0 && (0 > r.indexOf("http") && (r = 0 !== r.indexOf("//") ? t.document.location.protocol + "//" + t.document.location.host + r : t.document.location.protocol + r), e = r), e
        }
      },
      p = function() {
        function e(t, r) {
          var a = this;
          (function e(t, r) {
            if (!(t instanceof r)) throw TypeError("Cannot call a class as a function")
          })(this, e), this.element = t, n(t)
            .empty(), this.options = n.extend({}, l, r, n(t)
              .data()), this.services = Object.keys(o)
            .filter(function(e) {
              return a.isEnabledService(e)
            })
            .sort(function(e, t) {
              var r = a.options.services;
              return r.indexOf(e) - r.indexOf(t)
            })
            .map(function(e) {
              return o[e](a)
            }), this._addButtonList(), null !== this.options.backendUrl && "icon" !== this.options.buttonStyle && this.getShares(this._updateCounts.bind(this))
        }
        return i(e, [{
          key: "isEnabledService",
          value: function(e) {
            return this.options.services.indexOf(e) > -1
          }
        }, {
          key: "$socialshareElement",
          value: function() {
            return n(this.element)
          }
        }, {
          key: "getLocalized",
          value: function(e, t) {
            return "object" === a(e[t]) ? void 0 === e[t][this.options.lang] ? e[t][this.options.langFallback] : e[t][this.options.lang] : "string" == typeof e[t] ? e[t] : void 0
          }
        }, {
          key: "getMeta",
          value: function(e) {
            return n('meta[name="' + e + '"],[property="' + e + '"]')
              .attr("content") || ""
          }
        }, {
          key: "getInfoUrl",
          value: function() {
            return this.options.infoUrl
          }
        }, {
          key: "getInfoDisplayPopup",
          value: function() {
            return "popup" === this.options.infoDisplay
          }
        }, {
          key: "getInfoDisplayBlank",
          value: function() {
            return "popup" !== this.options.infoDisplay && "self" !== this.options.infoDisplay
          }
        }, {
          key: "getURL",
          value: function() {
            return this.getOption("url")
          }
        }, {
          key: "getOption",
          value: function(e) {
            var t = this.options[e];
            return "function" == typeof t ? t.call(this) : t
          }
        }, {
          key: "getTitle",
          value: function() {
            var e = this.getOption("title");
            if (n(this.element)
              .data()
              .title) return e;
            e = e || this.getMeta("DC.title");
            var t = this.getMeta("DC.creator");
            return e && t ? e + " - " + t : e
          }
        }, {
          key: "getReferrerTrack",
          value: function() {
            return this.options.referrerTrack || ""
          }
        }, {
          key: "getShares",
          value: function(e) {
            var t = s.parse(this.options.backendUrl, !0);
            return t.query.url = this.getURL(), delete t.search, n.getJSON(s.format(t), e)
          }
        }, {
          key: "_updateCounts",
          value: function(e, t, r) {
            var a = this;
            e && n.each(e, function(e, t) {
              a.isEnabledService(e) && (t >= 1e3 && (t = Math.round(t / 1e3) + "k"), n(a.element)
                .find("." + e + " a")
                .append(n("<span/>")
                  .addClass("share_count")
                  .text(t)))
            })
          }
        }, {
          key: "_addButtonList",
          value: function() {
            var e = this,
              r = n("<ul/>")
              .addClass(["theme-" + this.options.theme, "orientation-" + this.options.orientation, "button-style-" + this.options.buttonStyle, "shariff-col-" + this.options.services.length].join(" "));
            this.services.forEach(function(t) {
                var a = n("<li/>")
                  .addClass("shariff-button " + t.name),
                  i = n("<a/>")
                  .attr("href", t.shareUrl);
                if ("standard" === e.options.buttonStyle) {
                  var o = n("<span/>")
                    .addClass("share_text")
                    .text(e.getLocalized(t, "shareText"));
                  i.append(o)
                }
                void 0 !== t.faPrefix && void 0 !== t.faName && i.prepend(n("<span/>")
                  .addClass(t.faPrefix + " " + t.faName)), t.popup ? (i.attr("data-rel", "popup"), "info" !== t.name && i.attr("rel", "nofollow")) : t.blank ? (i.attr("target", "_blank"), "info" === t.name ? i.attr("rel", "noopener noreferrer") : i.attr("rel", "nofollow noopener noreferrer")) : "info" !== t.name && i.attr("rel", "nofollow"), i.attr("title", e.getLocalized(t, "title")), i.attr("role", "button"), i.attr("aria-label", e.getLocalized(t, "title")), a.append(i), r.append(a)
              }), r.on("click", '[data-rel="popup"]', function(e) {
                e.preventDefault();
                var r = n(this)
                  .attr("href");
                if (r.match(/twitter\.com\/intent\/(\w+)/)) {
                  var a = t.window;
                  if (a.__twttr && a.__twttr.widgets && a.__twttr.widgets.loaded) return
                }
                t.window.open(r, "_blank", "width=600,height=460")
              }), this.$socialshareElement()
              .append(r)
          }
        }]), e
      }();
    e.exports = p, t.Shariff = p, n(function() {
      n(".shariff")
        .each(function() {
          this.hasOwnProperty("shariff") || (this.shariff = new p(this))
        })
    })
  })
  .call(t, r(1))
}, function(e, t, r) {
  "use strict";

  function a(e, t) {
    var r = [];
    return t = t || document, "function" == typeof e ? (t.attachEvent ? "complete" === t.readyState : "loading" !== t.readyState) ? e() : t.addEventListener("DOMContentLoaded", e) : r = e instanceof Element ? [e] : "string" == typeof e ? "<" === e[0] ? Array.prototype.slice.call(u(e)) : Array.prototype.slice.call(t.querySelectorAll(e)) : e, new i(r, t)
  }

  function i(e, t) {
    this.length = e.length, this.context = t;
    var r = this;
    p(e, function(e) {
      r[e] = this
    })
  }
  "function" != typeof Object.assign && (Object.assign = function(e, t) {
    if (null === e) throw TypeError("Cannot convert undefined or null to object");
    for (var r = Object(e), a = 1; a < arguments.length; a++) {
      var i = arguments[a];
      if (null !== i)
        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (r[n] = i[n])
    }
    return r
  }), i.prototype.each = function(e) {
    for (var t = this.length - 1; t >= 0; t--) e.call(this[t], t, this[t]);
    return this
  }, i.prototype.empty = function() {
    return this.each(s)
  }, i.prototype.text = function(e) {
    return void 0 === e ? this[0].textContent : this.each(function() {
      this.textContent = e
    })
  }, i.prototype.attr = function(e, t) {
    return this.length < 1 ? null : void 0 === t ? this[0].getAttribute(e) : this.each(function() {
      this.setAttribute(e, t)
    })
  }, i.prototype.data = function(e, t) {
    if (t) return this.attr("data-" + e, t);
    if (e) return this.attr("data-" + e);
    var r = Object.assign({}, this[0].dataset);
    return p(r, function(e, t) {
      r[e] = g(t)
    }), r
  }, i.prototype.find = function(e) {
    var t;
    return t = l(this, function(t) {
      return t.querySelectorAll(e)
    }), t = l(t, function(e) {
      return Array.prototype.slice.call(e)
    }), t = Array.prototype.concat.apply([], t), new i(t)
  }, i.prototype.append = function(e) {
    return "string" == typeof e && (e = u(e)), h(this[0], e), this
  }, i.prototype.prepend = function(e) {
    return "string" == typeof e && (e = u(e)), d(this[0], e), this
  }, i.prototype.addClass = function(e) {
    return this.each(function() {
      var t = this;
      e.split(" ")
        .forEach(function(e) {
          t.classList.add(e)
        })
    })
  }, i.prototype.removeClass = function(e) {
    return this.each(function() {
      this.classList.remove(e)
    })
  }, i.prototype.on = function(e, t, r) {
    return this.each(function() {
      c(t, e, r, this)
    })
  };
  var n, o, s = function() {
      for (; this.hasChildNodes();) this.removeChild(this.firstChild)
    },
    l = function(e, t) {
      return Array.prototype.map.call(e, t)
    },
    p = function(e, t) {
      if (e instanceof Array)
        for (var r = 0; r < e.length; r++) t.call(e[r], r, e[r]);
      else if (e instanceof Object)
        for (var a in e) t.call(e[a], a, e[a], e);
      return e
    },
    u = function(e) {
      var t = document.createElement("div");
      return t.innerHTML = e, t.children
    },
    h = function(e, t) {
      for (var r = 0; r < t.length; r++) e.appendChild(t[r])
    },
    d = function(e, t) {
      for (var r = t.length - 1; r >= 0; r--) e.insertBefore(t[t.length - 1], e.firstChild)
    },
    f = (o = (n = HTMLElement.prototype)
      .matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector,
      function e(t, r) {
        if (null !== t) return o.call(t, r) ? t : e(t.parentElement, r)
      }),
    c = function(e, t, r, a) {
      (a || document)
      .addEventListener(t, function(t) {
        var a = f(t.target, e);
        a && r.call(a, t)
      })
    },
    m = function e(t) {
      var r = {},
        a = !1,
        i = 0,
        n = arguments.length;
      for ("[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (a = arguments[0], i++); i < n; i++) {
        var o = arguments[i];
        ! function(t) {
          for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (a && "[object Object]" === Object.prototype.toString.call(t[i]) ? r[i] = e(!0, r[i], t[i]) : r[i] = t[i])
        }(o)
      }
      return r
    },
    b = function(e, t) {
      var r = new XMLHttpRequest;
      r.open("GET", e, !0), r.setRequestHeader("Content-Type", "application/json"), r.setRequestHeader("Accept", "application/json"), r.onload = function() {
        r.status >= 200 && r.status < 400 ? t(JSON.parse(r.responseText), r.status, r) : t(null, r.status, r)
      }, r.onerror = function(e) {
        t(Error(e), null, r)
      }, r.send()
    },
    g = function(e) {
      if ("true" === e) return !0;
      if ("false" === e) return !1;
      if ("null" === e) return null;
      if (+e + "" === e) return +e;
      if (/^[[{]/.test(e)) try {
        return JSON.parse(e)
      } catch (t) {}
      return e
    };
  a.extend = m, a.map = l, a.each = p, a.getJSON = b, e.exports = a
}, function(e, t, r) {
  "use strict";
  e.exports = {
    addthis: r(7),
    buffer: r(8),
    diaspora: r(9),
    facebook: r(16),
    flattr: r(17),
    flipboard: r(18),
    info: r(19),
    linkedin: r(20),
    mail: r(21),
    pinterest: r(22),
    pocket: r(23),
    print: r(24),
    qzone: r(25),
    reddit: r(26),
    stumbleupon: r(27),
    telegram: r(28),
    tencent: r(29),
    threema: r(30),
    tumblr: r(31),
    twitter: r(32),
    vk: r(33),
    weibo: r(34),
    whatsapp: r(35),
    xing: r(36),
    viber: r(37)
  }
}, function(e, t, r) {
  "use strict";
  e.exports = function(e) {
    return {
      popup: !0,
      shareText: {
        bg: "cподеляне",
        cs: "sd\xedlet",
        da: "del",
        de: "teilen",
        en: "share",
        es: "compartir",
        fi: "Jaa",
        fr: "partager",
        hr: "podijelite",
        hu: "megoszt\xe1s",
        it: "condividi",
        ja: "共有",
        ko: "공유하기",
        nl: "delen",
        no: "del",
        pl: "udostępnij",
        pt: "compartilhar",
        ro: "partajează",
        ru: "поделиться",
        sk: "zdieľať",
        sl: "deli",
        sr: "podeli",
        sv: "dela",
        tr: "paylaş",
        zh: "分享"
      },
      name: "addthis",
      faPrefix: "fas",
      faName: "fa-plus",
      title: {
        bg: "Сподели в AddThis",
        cs: "Sd\xedlet na AddThis",
        da: "Del p\xe5 AddThis",
        de: "Bei AddThis teilen",
        en: "Share on AddThis",
        es: "Compartir en AddThis",
        fi: "Jaa AddThisiss\xe4",
        fr: "Partager sur AddThis",
        hr: "Podijelite na AddThis",
        hu: "Megoszt\xe1s AddThisen",
        it: "Condividi su AddThis",
        ja: "AddThis上で共有",
        ko: "AddThis에서 공유하기",
        nl: "Delen op AddThis",
        no: "Del p\xe5 AddThis",
        pl: "Udostępnij przez AddThis",
        pt: "Compartilhar no AddThis",
        ro: "Partajează pe AddThis",
        ru: "Поделиться на AddThis",
        sk: "Zdieľať na AddThis",
        sl: "Deli na AddThis",
        sr: "Podeli na AddThis",
        sv: "Dela p\xe5 AddThis",
        tr: "AddThis'ta paylaş",
        zh: "在AddThis上分享"
      },
      shareUrl: "http://api.addthis.com/oexchange/0.8/offer?url=" + encodeURIComponent(e.getURL()) + e.getReferrerTrack()
    }
  }
}, function(e, t, r) {
  "use strict";
  e.exports = function(e) {
    var t = encodeURIComponent(e.getURL());
    return {
      popup: !0,
      shareText: {
        bg: "cподеляне",
        cs: "sd\xedlet",
        da: "del",
        de: "teilen",
        en: "share",
        es: "compartir",
        fi: "Jaa",
        fr: "partager",
        hr: "podijelite",
        hu: "megoszt\xe1s",
        it: "condividi",
        ja: "共有",
        ko: "공유하기",
        nl: "delen",
        no: "del",
        pl: "udostępnij",
        pt: "compartilhar",
        ro: "partajează",
        ru: "поделиться",
        sk: "zdieľať",
        sl: "deli",
        sr: "podeli",
        sv: "dela",
        tr: "paylaş",
        zh: "分享"
      },
      name: "buffer",
      faPrefix: "fab",
      faName: "fa-buffer",
      title: {
        bg: "Сподели в buffer",
        cs: "Sd\xedlet na buffer",
        da: "Del p\xe5 buffer",
        de: "Bei buffer teilen",
        en: "Share on buffer",
        es: "Compartir en buffer",
        fi: "Jaa bufferiss\xe4",
        fr: "Partager sur buffer",
        hr: "Podijelite na buffer",
        hu: "Megoszt\xe1s bufferen",
        it: "Condividi su buffer",
        ja: "buffer上で共有",
        ko: "buffer에서 공유하기",
        nl: "Delen op buffer",
        no: "Del p\xe5 buffer",
        pl: "Udostępnij przez buffer",
        pt: "Compartilhar no buffer",
        ro: "Partajează pe buffer",
        ru: "Поделиться на buffer",
        sk: "Zdieľať na buffer",
        sl: "Deli na buffer",
        sr: "Podeli na buffer",
        sv: "Dela p\xe5 buffer",
        tr: "buffer'ta paylaş",
        zh: "在buffer上分享"
      },
      shareUrl: "https://buffer.com/add?text=" + encodeURIComponent(e.getTitle()) + "&url=" + t + e.getReferrerTrack()
    }
  }
}, function(e, t, r) {
  "use strict";
  var a = r(0);
  e.exports = function(e) {
    var t = a.parse("https://share.diasporafoundation.org/", !0);
    return t.query.url = e.getURL(), t.query.title = e.getTitle(), t.protocol = "https", delete t.search, {
      popup: !0,
      shareText: {
        bg: "cподеляне",
        cs: "sd\xedlet",
        da: "del",
        de: "teilen",
        en: "share",
        es: "compartir",
        fi: "Jaa",
        fr: "partager",
        hr: "podijelite",
        hu: "megoszt\xe1s",
        it: "condividi",
        ja: "共有",
        ko: "공유하기",
        nl: "delen",
        no: "del",
        pl: "udostępnij",
        pt: "compartilhar",
        ro: "partajează",
        ru: "поделиться",
        sk: "zdieľať",
        sl: "deli",
        sr: "podeli",
        sv: "dela",
        tr: "paylaş",
        zh: "分享"
      },
      name: "diaspora",
      faPrefix: "fas",
      faName: "fa-asterisk",
      title: {
        bg: "Сподели в diaspora*",
        cs: "Sd\xedlet na diaspora*",
        da: "Del p\xe5 diaspora*",
        de: "Bei diaspora* teilen",
        en: "Share on diaspora*",
        es: "Compartir en diaspora*",
        fi: "Jaa Diasporaiss\xe4",
        fr: "Partager sur diaspora*",
        hr: "Podijelite na diaspora*",
        hu: "Megoszt\xe1s diaspora*",
        it: "Condividi su diaspora*",
        ja: "diaspora*上で共有",
        ko: "diaspora*에서 공유하기",
        nl: "Delen op diaspora*",
        no: "Del p\xe5 diaspora*",
        pl: "Udostępnij przez diaspora*",
        pt: "Compartilhar no diaspora*",
        ro: "Partajează pe diaspora*",
        ru: "Поделиться на diaspora*",
        sk: "Zdieľať na diaspora*",
        sl: "Deli na diaspora*",
        sr: "Podeli na diaspora*-u",
        sv: "Dela p\xe5 diaspora*",
        tr: "diaspora*'ta paylaş",
        zh: "分享至diaspora*"
      },
      shareUrl: a.format(t) + e.getReferrerTrack()
    }
  }
}, function(e, t, r) {
  (function(e, a) {
    var i;
    ! function(a) {
      function n(e) {
        throw RangeError(_[e])
      }

      function o(e, t) {
        for (var r = e.length, a = []; r--;) a[r] = t(e[r]);
        return a
      }

      function s(e, t) {
        var r = e.split("@"),
          a = "";
        return r.length > 1 && (a = r[0] + "@", e = r[1]), a + o((e = e.replace(w, "."))
            .split("."), t)
          .join(".")
      }

      function l(e) {
        for (var t, r, a = [], i = 0, n = e.length; i < n;)(t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < n ? 56320 == (64512 & (r = e.charCodeAt(i++))) ? a.push(((1023 & t) << 10) + (1023 & r) + 65536) : (a.push(t), i--) : a.push(t);
        return a
      }

      function p(e) {
        return o(e, function(e) {
            var t = "";
            return e > 65535 && (e -= 65536, t += C(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += C(e)
          })
          .join("")
      }

      function u(e) {
        return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : g
      }

      function h(e, t) {
        return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
      }

      function d(e, t, r) {
        var a = 0;
        for (e = r ? S(e / j) : e >> 1, e += S(e / t); e > D * x >> 1; a += g) e = S(e / D);
        return S(a + (D + 1) * e / (e + k))
      }

      function f(e) {
        var t, r, a, i, o, s, l, h, f, c, m = [],
          k = e.length,
          j = 0,
          P = y,
          T = z;
        for ((r = e.lastIndexOf($)) < 0 && (r = 0), a = 0; a < r; ++a) e.charCodeAt(a) >= 128 && n("not-basic"), m.push(e.charCodeAt(a));
        for (i = r > 0 ? r + 1 : 0; i < k;) {
          for (o = j, s = 1, l = g; i >= k && n("invalid-input"), ((h = u(e.charCodeAt(i++))) >= g || h > S((b - j) / s)) && n("overflow"), j += h * s, !(h < (f = l <= T ? v : l >= T + x ? x : l - T)); l += g) s > S(b / (c = g - f)) && n("overflow"), s *= c;
          T = d(j - o, t = m.length + 1, 0 == o), S(j / t) > b - P && n("overflow"), P += S(j / t), j %= t, m.splice(j++, 0, P)
        }
        return p(m)
      }

      function c(e) {
        var t, r, a, i, o, s, p, u, f, c, m, k, j, P, T, w = [];
        for (k = (e = l(e))
          .length, t = y, r = 0, o = z, s = 0; s < k; ++s)(m = e[s]) < 128 && w.push(C(m));
        for (a = i = w.length, i && w.push($); a < k;) {
          for (p = b, s = 0; s < k; ++s)(m = e[s]) >= t && m < p && (p = m);
          for (p - t > S((b - r) / (j = a + 1)) && n("overflow"), r += (p - t) * j, t = p, s = 0; s < k; ++s)
            if ((m = e[s]) < t && ++r > b && n("overflow"), m == t) {
              for (u = r, f = g; !(u < (c = f <= o ? v : f >= o + x ? x : f - o)); f += g) T = u - c, P = g - c, w.push(C(h(c + T % P, 0))), u = S(T / P);
              w.push(C(h(u, 0))), o = d(r, j, a == i), r = 0, ++a
            }++ r, ++t
        }
        return w.join("")
      }
      var m, b = ("object" == typeof t && t && t.nodeType, "object" == typeof e && e && e.nodeType, 2147483647),
        g = 36,
        v = 1,
        x = 26,
        k = 38,
        j = 700,
        z = 72,
        y = 128,
        $ = "-",
        P = /^xn--/,
        T = /[^\x20-\x7E]/,
        w = /[\x2E\u3002\uFF0E\uFF61]/g,
        _ = {
          overflow: "Overflow: input needs wider integers to process",
          "not-basic": "Illegal input >= 0x80 (not a basic code point)",
          "invalid-input": "Invalid input"
        },
        D = g - v,
        S = Math.floor,
        C = String.fromCharCode;
      m = {
        version: "1.4.1",
        ucs2: {
          decode: l,
          encode: p
        },
        decode: f,
        encode: c,
        toASCII: function e(t) {
          return s(t, function(e) {
            return T.test(e) ? "xn--" + c(e) : e
          })
        },
        toUnicode: function e(t) {
          return s(t, function(e) {
            return P.test(e) ? f(e.slice(4)
              .toLowerCase()) : e
          })
        }
      }, void 0 !== (i = (function() {
          return m
        })
        .call(t, r, t, e)) && (e.exports = i)
    }()
  })
  .call(t, r(11)(e), r(1))
}, function(e, t) {
  e.exports = function(e) {
    return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
      enumerable: !0,
      get: function() {
        return e.l
      }
    }), Object.defineProperty(e, "id", {
      enumerable: !0,
      get: function() {
        return e.i
      }
    }), e.webpackPolyfill = 1), e
  }
}, function(e, t, r) {
  "use strict";
  e.exports = {
    isString: function(e) {
      return "string" == typeof e
    },
    isObject: function(e) {
      return "object" == typeof e && null !== e
    },
    isNull: function(e) {
      return null === e
    },
    isNullOrUndefined: function(e) {
      return null == e
    }
  }
}, function(e, t, r) {
  "use strict";
  t.decode = t.parse = r(14), t.encode = t.stringify = r(15)
}, function(e, t, r) {
  "use strict";

  function a(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }
  e.exports = function(e, t, r, n) {
    t = t || "&", r = r || "=";
    var o = {};
    if ("string" != typeof e || 0 === e.length) return o;
    var s = /\+/g;
    e = e.split(t);
    var l = 1e3;
    n && "number" == typeof n.maxKeys && (l = n.maxKeys);
    var p = e.length;
    l > 0 && p > l && (p = l);
    for (var u = 0; u < p; ++u) {
      var h, d, f, c, m = e[u].replace(s, "%20"),
        b = m.indexOf(r);
      b >= 0 ? (h = m.substr(0, b), d = m.substr(b + 1)) : (h = m, d = ""), f = decodeURIComponent(h), c = decodeURIComponent(d), a(o, f) ? i(o[f]) ? o[f].push(c) : o[f] = [o[f], c] : o[f] = c
    }
    return o
  };
  var i = Array.isArray || function(e) {
    return "[object Array]" === Object.prototype.toString.call(e)
  }
}, function(e, t, r) {
  "use strict";

  function a(e, t) {
    if (e.map) return e.map(t);
    for (var r = [], a = 0; a < e.length; a++) r.push(t(e[a], a));
    return r
  }
  var i = function(e) {
    switch (typeof e) {
      case "string":
        return e;
      case "boolean":
        return e ? "true" : "false";
      case "number":
        return isFinite(e) ? e : "";
      default:
        return ""
    }
  };
  e.exports = function(e, t, r, s) {
    return t = t || "&", r = r || "=", null === e && (e = void 0), "object" == typeof e ? a(o(e), function(o) {
        var s = encodeURIComponent(i(o)) + r;
        return n(e[o]) ? a(e[o], function(e) {
            return s + encodeURIComponent(i(e))
          })
          .join(t) : s + encodeURIComponent(i(e[o]))
      })
      .join(t) : s ? encodeURIComponent(i(s)) + r + encodeURIComponent(i(e)) : ""
  };
  var n = Array.isArray || function(e) {
      return "[object Array]" === Object.prototype.toString.call(e)
    },
    o = Object.keys || function(e) {
      var t = [];
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
      return t
    }
}, function(e, t, r) {
  "use strict";
  e.exports = function(e) {
    return {
      popup: !0,
      shareText: {
        bg: "cподеляне",
        cs: "sd\xedlet",
        da: "del",
        de: "teilen",
        en: "share",
        es: "compartir",
        fi: "Jaa",
        fr: "partager",
        hr: "podijelite",
        hu: "megoszt\xe1s",
        it: "condividi",
        ja: "共有",
        ko: "공유하기",
        nl: "delen",
        no: "del",
        pl: "udostępnij",
        pt: "compartilhar",
        ro: "partajează",
        ru: "поделиться",
        sk: "zdieľať",
        sl: "deli",
        sr: "podeli",
        sv: "dela",
        tr: "paylaş",
        zh: "分享"
      },
      name: "facebook",
      faPrefix: "fab",
      faName: "fa-facebook-f",
      title: {
        bg: "Сподели във Facebook",
        cs: "Sd\xedlet na Facebooku",
        da: "Del p\xe5 Facebook",
        de: "Bei Facebook teilen",
        en: "Share on Facebook",
        es: "Compartir en Facebook",
        fi: "Jaa Facebookissa",
        fr: "Partager sur Facebook",
        hr: "Podijelite na Facebooku",
        hu: "Megoszt\xe1s Facebookon",
        it: "Condividi su Facebook",
        ja: "フェイスブック上で共有",
        ko: "페이스북에서 공유하기",
        nl: "Delen op Facebook",
        no: "Del p\xe5 Facebook",
        pl: "Udostępnij na Facebooku",
        pt: "Compartilhar no Facebook",
        ro: "Partajează pe Facebook",
        ru: "Поделиться на Facebook",
        sk: "Zdieľať na Facebooku",
        sl: "Deli na Facebooku",
        sr: "Podeli na Facebook-u",
        sv: "Dela p\xe5 Facebook",
        tr: "Facebook'ta paylaş",
        zh: "在Facebook上分享"
      },
      shareUrl: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(e.getURL()) + e.getReferrerTrack()
    }
  }
}, function(e, t, r) {
  "use strict";
  e.exports = function(e) {
    var t = encodeURIComponent(e.getURL()),
      r = e.getTitle(),
      a = e.getMeta("description");
    return {
      popup: !0,
      shareText: "Flattr",
      name: "flattr",
      faPrefix: "far",
      faName: "fa-money-bill-alt",
      title: {
        de: "Artikel flattrn",
        en: "Flattr this"
      },
      shareUrl: "https://flattr.com/submit/auto?title=" + encodeURIComponent(r) + "&description=" + encodeURIComponent(a) + "&category=" + encodeURIComponent(e.options.flattrCategory || "text") + "&user_id=" + encodeURIComponent(e.options.flattrUser) + "&url=" + t + e.getReferrerTrack()
    }
  }
}, function(e, t, r) {
  "use strict";
  e.exports = function(e) {
    var t = encodeURIComponent(e.getURL());
    return {
      popup: !0,
      shareText: "flip it",
      name: "flipboard",
      faPrefix: "fab",
      faName: "fa-flipboard",
      title: {
        bg: "Сподели в Flipboard",
        cs: "Sd\xedlet na Flipboardu",
        da: "Del p\xe5 Flipboard",
        de: "Bei Flipboard teilen",
        en: "Share on Flipboard",
        es: "Compartir en Flipboard",
        fi: "Jaa Flipboardiss\xe4",
        fr: "Partager sur Flipboard",
        hr: "Podijelite na Flipboardu",
        hu: "Megoszt\xe1s Flipboardon",
        it: "Condividi su Flipboard",
        ja: "Flipboard上で共有",
        ko: "Flipboard에서 공유하기",
        nl: "Delen op Flipboard",
        no: "Del p\xe5 Flipboard",
        pl: "Udostępnij na Flipboardu",
        pt: "Compartilhar no Flipboard",
        ro: "Partajează pe Flipboard",
        ru: "Поделиться на Flipboard",
        sk: "Zdieľať na Flipboardu",
        sl: "Deli na Flipboardu",
        sr: "Podeli na Flipboard-u",
        sv: "Dela p\xe5 Flipboard",
        tr: "Flipboard'ta paylaş",
        zh: "在Flipboard上分享"
      },
      shareUrl: "https://share.flipboard.com/bookmarklet/popout?v=2&title=" + encodeURIComponent(e.getTitle()) + "&url=" + t + e.getReferrerTrack()
    }
  }
}, function(e, t, r) {
  "use strict";
  e.exports = function(e) {
    return {
      blank: e.getInfoDisplayBlank(),
      popup: e.getInfoDisplayPopup(),
      shareText: "Info",
      name: "info",
      faPrefix: "fas",
      faName: "fa-info",
      title: {
        bg: "Повече информация",
        cs: "V\xedce informac\xed",
        da: "Flere oplysninger",
        de: "Weitere Informationen",
        en: "More information",
        es: "M\xe1s informaciones",
        fi: "Lis\xe4tietoja",
        fr: "Plus d'informations",
        hr: "Više informacija",
        hu: "T\xf6bb inform\xe1ci\xf3",
        it: "Maggiori informazioni",
        ja: "詳しい情報",
        ko: "추가 정보",
        nl: "Verdere informatie",
        no: "Mer informasjon",
        pl: "Więcej informacji",
        pt: "Mais informa\xe7\xf5es",
        ro: "Mai multe informatii",
        ru: "Больше информации",
        sk: "Viac inform\xe1ci\xed",
        sl: "Več informacij",
        sr: "Više informacija",
        sv: "Mer information",
        tr: "Daha fazla bilgi",
        zh: "更多信息"
      },
      shareUrl: e.getInfoUrl()
    }
  }
}, function(e, t, r) {
  "use strict";
  e.exports = function(e) {
    var t = encodeURIComponent(e.getURL()),
      r = encodeURIComponent(e.getTitle());
    return {
      popup: !0,
      shareText: {
        bg: "cподеляне",
        cs: "sd\xedlet",
        da: "del",
        de: "mitteilen",
        en: "share",
        es: "compartir",
        fi: "Jaa",
        fr: "partager",
        hr: "podijelite",
        hu: "megoszt\xe1s",
        it: "condividi",
        ja: "シェア",
        ko: "공유하기",
        nl: "delen",
        no: "del",
        pl: "udostępnij",
        pt: "compartilhar",
        ro: "distribuiți",
        ru: "поделиться",
        sk: "zdieľať",
        sl: "deli",
        sr: "podeli",
        sv: "dela",
        tr: "paylaş",
        zh: "分享"
      },
      name: "linkedin",
      faPrefix: "fab",
      faName: "fa-linkedin-in",
      title: {
        bg: "Сподели в LinkedIn",
        cs: "Sd\xedlet na LinkedIn",
        da: "Del p\xe5 LinkedIn",
        de: "Bei LinkedIn teilen",
        en: "Share on LinkedIn",
        es: "Compartir en LinkedIn",
        fi: "Jaa LinkedIniss\xe4",
        fr: "Partager sur LinkedIn",
        hr: "Podijelite na LinkedIn",
        hu: "Megoszt\xe1s LinkedInen",
        it: "Condividi su LinkedIn",
        ja: "LinkedIn上で共有",
        ko: "LinkedIn에서 공유하기",
        nl: "Delen op LinkedIn",
        no: "Del p\xe5 LinkedIn",
        pl: "Udostępnij przez LinkedIn",
        pt: "Compartilhar no LinkedIn",
        ro: "Partajează pe LinkedIn",
        ru: "Поделиться на LinkedIn",
        sk: "Zdieľať na LinkedIn",
        sl: "Deli na LinkedIn",
        sr: "Podeli na LinkedIn-u",
        sv: "Dela p\xe5 LinkedIn",
        tr: "LinkedIn'ta paylaş",
        zh: "在LinkedIn上分享"
      },
      shareUrl: "https://www.linkedin.com/shareArticle?mini=true&summary=" + encodeURIComponent(e.getMeta("description")) + "&title=" + r + "&url=" + t
    }
  }
}, function(e, t, r) {
  "use strict";
  e.exports = function(e) {
    var t = e.getOption("mailUrl");
    return 0 === t.indexOf("mailto:") && (t += "?subject=" + encodeURIComponent(e.getOption("mailSubject") || e.getTitle()), t += "&body=" + encodeURIComponent(e.getOption("mailBody")
      .replace(/\{url\}/i, e.getURL()))), {
      blank: 0 === t.indexOf("http"),
      popup: !1,
      shareText: {
        en: "mail",
        zh: "分享"
      },
      name: "mail",
      faPrefix: "fas",
      faName: "fa-envelope",
      title: {
        bg: "Изпрати по имейл",
        cs: "Poslat mailem",
        da: "Sende via e-mail",
        de: "Per E-Mail versenden",
        en: "Send by email",
        es: "Enviar por email",
        fi: "L\xe4het\xe4 s\xe4hk\xf6postitse",
        fr: "Envoyer par courriel",
        hr: "Pošaljite emailom",
        hu: "Elk\xfcld\xe9s e-mailben",
        it: "Inviare via email",
        ja: "電子メールで送信",
        ko: "이메일로 보내기",
        nl: "Sturen via e-mail",
        no: "Send via epost",
        pl: "Wyślij e-mailem",
        pt: "Enviar por e-mail",
        ro: "Trimite prin e-mail",
        ru: "Отправить по эл. почте",
        sk: "Poslať e-mailom",
        sl: "Pošlji po elektronski pošti",
        sr: "Pošalji putem email-a",
        sv: "Skicka via e-post",
        tr: "E-posta ile g\xf6nder",
        zh: "通过电子邮件传送"
      },
      shareUrl: t
    }
  }
}, function(e, t, r) {
  "use strict";
  var a = r(0);
  e.exports = function(e) {
    var t = e.getTitle(),
      r = e.getMeta("DC.creator");
    r.length > 0 && (t += " - " + r);
    var i = e.getOption("mediaUrl");
    (!i || i.length <= 0) && (i = e.getMeta("og:image"));
    var n = a.parse("https://www.pinterest.com/pin/create/link/", !0);
    return n.query.url = e.getURL(), n.query.media = i, n.query.description = t, delete n.search, {
      popup: !0,
      shareText: "pin it",
      name: "pinterest",
      faPrefix: "fab",
      faName: "fa-pinterest-p",
      title: {
        bg: "Сподели в Pinterest",
        cs: "Přidat na Pinterest",
        da: "Del p\xe5 Pinterest",
        de: "Bei Pinterest pinnen",
        en: "Pin it on Pinterest",
        es: "Compartir en Pinterest",
        fi: "Jaa Pinterestiss\xe4",
        fr: "Partager sur Pinterest",
        hr: "Podijelite na Pinterest",
        hu: "Megoszt\xe1s Pinteresten",
        it: "Condividi su Pinterest",
        ja: "Pinterest上で共有",
        ko: "Pinterest에서 공유하기",
        nl: "Delen op Pinterest",
        no: "Del p\xe5 Pinterest",
        pl: "Udostępnij przez Pinterest",
        pt: "Compartilhar no Pinterest",
        ro: "Partajează pe Pinterest",
        ru: "Поделиться на Pinterest",
        sk: "Zdieľať na Pinterest",
        sl: "Deli na Pinterest",
        sr: "Podeli na Pinterest-u",
        sv: "Dela p\xe5 Pinterest",
        tr: "Pinterest'ta paylaş",
        zh: "分享至Pinterest"
      },
      shareUrl: a.format(n) + e.getReferrerTrack()
    }
  }
}, function(e, t, r) {
  "use strict";
  e.exports = function(e) {
    var t = encodeURIComponent(e.getURL());
    return {
      popup: !0,
      shareText: "Pocket",
      name: "pocket",
      faPrefix: "fab",
      faName: "fa-get-pocket",
      title: {
        bg: "Запазване в Pocket",
        cs: "Uložit do Pocket",
        da: "Gem i Pocket",
        de: "In Pocket speichern",
        en: "Save to Pocket",
        es: "Guardar en Pocket",
        fi: "Tallenna kohtaan Pocket",
        fr: "Enregistrer dans Pocket",
        hr: "Spremi u Pocket",
        hu: 'Ment\xe9s "Pocket"-be',
        it: "Salva in Pocket",
        ja: "「ポケット」に保存",
        ko: "Pocket에 저장",
        nl: "Opslaan in Pocket",
        no: "Lagre i Pocket",
        pl: "Zapisz w Pocket",
        pt: "Salvar em Pocket",
        ro: "Salvați \xeen Pocket",
        ru: "Сохранить в Pocket",
        sk: "Uložiť do priečinka Pocket",
        sl: "Shrani v Pocket",
        sr: "Sačuvaj u Pocket",
        sv: "Spara till Pocket",
        tr: "Pocket e kaydet",
        zh: "保存到Pocket"
      },
      shareUrl: "https://getpocket.com/save?title=" + encodeURIComponent(e.getTitle()) + "&url=" + t + e.getReferrerTrack()
    }
  }
}, function(e, t, r) {
  "use strict";
  e.exports = function(e) {
    return {
      name: "print",
      faPrefix: "fas",
      faName: "fa-print",
      popup: !1,
      shareText: {
        bg: "",
        cs: "tlačit",
        da: "",
        de: "drucken",
        en: "print",
        es: "impresi\xf3n",
        fi: "",
        fr: "imprimer",
        hr: "",
        hu: "",
        it: "stampa",
        ja: "",
        ko: "",
        nl: "afdrukken",
        no: "",
        pl: "drukuj",
        pt: "",
        ro: "",
        ru: "Распечатать",
        sk: "",
        sl: "",
        sr: "",
        sv: "",
        tr: "",
        zh: ""
      },
      title: {
        bg: "",
        cs: "tlačit",
        da: "",
        de: "drucken",
        en: "print",
        es: "impresi\xf3n",
        fi: "",
        fr: "imprimer",
        hr: "",
        hu: "",
        it: "stampa",
        ja: "",
        ko: "",
        nl: "afdrukken",
        no: "",
        pl: "drukuj",
        pt: "",
        ro: "",
        ru: "Распечатать",
        sk: "",
        sl: "",
        sr: "",
        sv: "",
        tr: "",
        zh: ""
      },
      shareUrl: "javascript:window.print();"
    }
  }
}, function(e, t, r) {
  "use strict";
  e.exports = function(e) {
    return {
      popup: !0,
      shareText: {
        bg: "cподеляне",
        cs: "sd\xedlet",
        da: "del",
        de: "teilen",
        en: "share",
        es: "compartir",
        fi: "Jaa",
        fr: "partager",
        hr: "podijelite",
        hu: "megoszt\xe1s",
        it: "condividi",
        ja: "共有",
        ko: "공유하기",
        nl: "delen",
        no: "del",
        pl: "udostępnij",
        pt: "compartilhar",
        ro: "partajează",
        ru: "поделиться",
        sk: "zdieľať",
        sl: "deli",
        sr: "podeli",
        sv: "dela",
        tr: "paylaş",
        zh: "分享"
      },
      name: "qzone",
      faPrefix: "fab",
      faName: "fa-qq",
      title: {
        bg: "Сподели в Qzone",
        cs: "Sd\xedlet na Qzone",
        da: "Del p\xe5 Qzone",
        de: "Bei Qzone teilen",
        en: "Share on Qzone",
        es: "Compartir en Qzone",
        fi: "Jaa Qzoneiss\xe4",
        fr: "Partager sur Qzone",
        hr: "Podijelite na Qzone",
        hu: "Megoszt\xe1s Qzone",
        it: "Condividi su Qzone",
        ja: "Qzone上で共有",
        ko: "Qzone에서 공유하기",
        nl: "Delen op Qzone",
        no: "Del p\xe5 Qzone",
        pl: "Udostępnij przez Qzone",
        pt: "Compartilhar no Qzone",
        ro: "Partajează pe Qzone",
        ru: "Поделиться на Qzone",
        sk: "Zdieľať na Qzone",
        sl: "Deli na Qzone",
        sr: "Podeli na Qzone-u",
        sv: "Dela p\xe5 Qzone",
        tr: "Qzone'ta paylaş",
        zh: "分享至QQ空间"
      },
      shareUrl: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + encodeURIComponent(e.getURL()) + "&title=" + e.getTitle() + e.getReferrerTrack()
    }
  }
}, function(e, t, r) {
  "use strict";
  e.exports = function(e) {
    var t = encodeURIComponent(e.getURL()),
      r = encodeURIComponent(e.getTitle());
    return "" !== r && (r = "&title=" + r), {
      popup: !0,
      shareText: {
        bg: "cподеляне",
        cs: "sd\xedlet",
        da: "del",
        de: "teilen",
        en: "share",
        es: "compartir",
        fi: "Jaa",
        fr: "partager",
        hr: "podijelite",
        hu: "megoszt\xe1s",
        it: "condividi",
        ja: "共有",
        ko: "공유하기",
        nl: "delen",
        no: "del",
        pl: "udostępnij",
        pt: "compartilhar",
        ro: "partajează",
        ru: "поделиться",
        sk: "zdieľať",
        sl: "deli",
        sr: "podeli",
        sv: "dela",
        tr: "paylaş",
        zh: "分享"
      },
      name: "reddit",
      faPrefix: "fab",
      faName: "fa-reddit-alien",
      title: {
        bg: "Сподели в Reddit",
        cs: "Sd\xedlet na Redditu",
        da: "Del p\xe5 Reddit",
        de: "Bei Reddit teilen",
        en: "Share on Reddit",
        es: "Compartir en Reddit",
        fi: "Jaa Redditiss\xe4",
        fr: "Partager sur Reddit",
        hr: "Podijelite na Reddit",
        hu: "Megoszt\xe1s Redditen",
        it: "Condividi su Reddit",
        ja: "Reddit上で共有",
        ko: "Reddit에서 공유하기",
        nl: "Delen op Reddit",
        no: "Del p\xe5 Reddit",
        pl: "Udostępnij przez Reddit",
        pt: "Compartilhar no Reddit",
        ro: "Partajează pe Reddit",
        ru: "Поделиться на Reddit",
        sk: "Zdieľať na Reddit",
        sl: "Deli na Reddit",
        sr: "Podeli na Reddit-u",
        sv: "Dela p\xe5 Reddit",
        tr: "Reddit'ta paylaş",
        zh: "分享至Reddit"
      },
      shareUrl: "https://reddit.com/submit?url=" + t + r + e.getReferrerTrack()
    }
  }
}, function(e, t, r) {
  "use strict";
  e.exports = function(e) {
    var t = encodeURIComponent(e.getURL()),
      r = encodeURIComponent(e.getTitle());
    return "" !== r && (r = "&title=" + r), {
      popup: !0,
      shareText: {
        bg: "cподеляне",
        cs: "sd\xedlet",
        da: "del",
        de: "teilen",
        en: "share",
        es: "compartir",
        fi: "Jaa",
        fr: "partager",
        hr: "podijelite",
        hu: "megoszt\xe1s",
        it: "condividi",
        ja: "共有",
        ko: "공유하기",
        nl: "delen",
        no: "del",
        pl: "udostępnij",
        pt: "compartilhar",
        ro: "partajează",
        ru: "поделиться",
        sk: "zdieľať",
        sl: "deli",
        sr: "podeli",
        sv: "dela",
        tr: "paylaş",
        zh: "分享"
      },
      name: "stumbleupon",
      faPrefix: "fab",
      faName: "fa-stumbleupon",
      title: {
        bg: "Сподели в Stumbleupon",
        cs: "Sd\xedlet na Stumbleuponu",
        da: "Del p\xe5 Stumbleupon",
        de: "Bei Stumbleupon teilen",
        en: "Share on Stumbleupon",
        es: "Compartir en Stumbleupon",
        fi: "Jaa Stumbleuponiss\xe4",
        fr: "Partager sur Stumbleupon",
        hr: "Podijelite na Stumbleupon",
        hu: "Megoszt\xe1s Stumbleupon",
        it: "Condividi su Stumbleupon",
        ja: "Stumbleupon上で共有",
        ko: "Stumbleupon에서 공유하기",
        nl: "Delen op Stumbleupon",
        no: "Del p\xe5 Stumbleupon",
        pl: "Udostępnij przez Stumbleupon",
        pt: "Compartilhar no Stumbleupon",
        ro: "Partajează pe Stumbleupon",
        ru: "Поделиться на Stumbleupon",
        sk: "Zdieľať na Stumbleupon",
        sl: "Deli na Stumbleupon",
        sr: "Podeli na Stumbleupon-u",
        sv: "Dela p\xe5 Stumbleupon",
        tr: "Stumbleupon'ta paylaş",
        zh: "分享至Stumbleupon"
      },
      shareUrl: "https://www.stumbleupon.com/submit?url=" + t + r + e.getReferrerTrack()
    }
  }
}, function(e, t, r) {
  "use strict";
  e.exports = function(e) {
    return {
      popup: !0,
      shareText: {
        bg: "cподеляне",
        cs: "sd\xedlet",
        da: "del",
        de: "teilen",
        en: "share",
        es: "compartir",
        fi: "Jaa",
        fr: "partager",
        hr: "podijelite",
        hu: "megoszt\xe1s",
        it: "condividi",
        ja: "共有",
        ko: "공유하기",
        nl: "delen",
        no: "del",
        pl: "udostępnij",
        pt: "compartilhar",
        ro: "partajează",
        ru: "поделиться",
        sk: "zdieľať",
        sl: "deli",
        sr: "podeli",
        sv: "dela",
        tr: "paylaş",
        zh: "分享"
      },
      name: "telegram",
      faPrefix: "fab",
      faName: "fa-telegram",
      title: {
        bg: "Сподели в Telegram",
        cs: "Sd\xedlet na Telegramu",
        da: "Del p\xe5 Telegram",
        de: "Bei Telegram teilen",
        en: "Share on Telegram",
        es: "Compartir en Telegram",
        fi: "Jaa Telegramiss\xe4",
        fr: "Partager sur Telegram",
        hr: "Podijelite na Telegram",
        hu: "Megoszt\xe1s Telegramen",
        it: "Condividi su Telegram",
        ja: "Telegram上で共有",
        ko: "Telegram에서 공유하기",
        nl: "Delen op Telegram",
        no: "Del p\xe5 Telegram",
        pl: "Udostępnij przez Telegram",
        pt: "Compartilhar no Telegram",
        ro: "Partajează pe Telegram",
        ru: "Поделиться на Telegram",
        sk: "Zdieľať na Telegram",
        sl: "Deli na Telegram",
        sr: "Podeli na Telegram-u",
        sv: "Dela p\xe5 Telegram",
        tr: "Telegram'ta paylaş",
        zh: "在Telegram上分享"
      },
      shareUrl: "https://t.me/share/url?url=" + encodeURIComponent(e.getURL()) + e.getReferrerTrack()
    }
  }
}, function(e, t, r) {
  "use strict";
  e.exports = function(e) {
    return {
      popup: !0,
      shareText: {
        bg: "cподеляне",
        cs: "sd\xedlet",
        da: "del",
        de: "teilen",
        en: "share",
        es: "compartir",
        fi: "Jaa",
        fr: "partager",
        hr: "podijelite",
        hu: "megoszt\xe1s",
        it: "condividi",
        ja: "共有",
        ko: "공유하기",
        nl: "delen",
        no: "del",
        pl: "udostępnij",
        pt: "compartilhar",
        ro: "partajează",
        ru: "поделиться",
        sk: "zdieľať",
        sl: "deli",
        sr: "podeli",
        sv: "dela",
        tr: "paylaş",
        zh: "分享"
      },
      name: "tencent-weibo",
      faPrefix: "fab",
      faName: "fa-tencent-weibo",
      title: {
        bg: "Сподели в tencent weibo",
        cs: "Sd\xedlet na tencent weibo",
        da: "Del p\xe5 tencent weibo",
        de: "Bei tencent weibo teilen",
        en: "Share on tencent weibo",
        es: "Compartir en tencent weibo",
        fi: "Jaa tencent weiboiss\xe4",
        fr: "Partager sur tencent weibo",
        hr: "Podijelite na tencent weibo",
        hu: "Megoszt\xe1s tencent weiboen",
        it: "Condividi su tencent weibo",
        ja: "Tencent weibo上で共有",
        ko: "Tencent weibo에서 공유하기",
        nl: "Delen op tencent weibo",
        no: "Del p\xe5 tencent weibo",
        pl: "Udostępnij przez tencent weibo",
        pt: "Compartilhar no tencent weibo",
        ro: "Partajează pe tencent weibo",
        ru: "Поделиться на tencent weibo",
        sk: "Zdieľať na tencent weibo",
        sl: "Deli na tencent weibo",
        sr: "Podeli na tencent weibo-u",
        sv: "Dela p\xe5 tencent weibo",
        tr: "Tencent weibo'ta paylaş",
        zh: "分享至腾讯微博"
      },
      shareUrl: "http://v.t.qq.com/share/share.php?url=" + encodeURIComponent(e.getURL()) + "&title=" + e.getTitle() + e.getReferrerTrack()
    }
  }
}, function(e, t, r) {
  "use strict";
  e.exports = function(e) {
    var t = encodeURIComponent(e.getURL());
    return {
      popup: !1,
      shareText: {
        bg: "cподеляне",
        cs: "sd\xedlet",
        da: "del",
        de: "teilen",
        en: "share",
        es: "compartir",
        fi: "Jaa",
        fr: "partager",
        hr: "podijelite",
        hu: "megoszt\xe1s",
        it: "condividi",
        ja: "共有",
        ko: "공유하기",
        nl: "delen",
        no: "del",
        pl: "udostępnij",
        pt: "compartilhar",
        ro: "partajează",
        ru: "поделиться",
        sk: "zdieľať",
        sl: "deli",
        sr: "podeli",
        sv: "dela",
        tr: "paylaş",
        zh: "分享"
      },
      name: "threema",
      faPrefix: "fas",
      faName: "fa-lock",
      title: {
        bg: "Сподели в Threema",
        cs: "Sd\xedlet na Threema",
        da: "Del p\xe5 Threema",
        de: "Bei Threema teilen",
        en: "Share on Threema",
        es: "Compartir en Threema",
        fi: "Jaa Threemaiss\xe4",
        fr: "Partager sur Threema",
        hr: "Podijelite na Threema",
        hu: "Megoszt\xe1s Threemaen",
        it: "Condividi su Threema",
        ja: "Threema上で共有",
        ko: "Threema에서 공유하기",
        nl: "Delen op Threema",
        no: "Del p\xe5 Threema",
        pl: "Udostępnij przez Threema",
        pt: "Compartilhar no Threema",
        ro: "Partajează pe Threema",
        ru: "Поделиться на Threema",
        sk: "Zdieľať na Threema",
        sl: "Deli na Threema",
        sr: "Podeli na Threema-u",
        sv: "Dela p\xe5 Threema",
        tr: "Threema'ta paylaş",
        zh: "在Threema上分享"
      },
      shareUrl: "threema://compose?text=" + encodeURIComponent(e.getTitle()) + "%20" + t + e.getReferrerTrack()
    }
  }
}, function(e, t, r) {
  "use strict";
  e.exports = function(e) {
    return {
      popup: !0,
      shareText: {
        bg: "cподеляне",
        cs: "sd\xedlet",
        da: "del",
        de: "teilen",
        en: "share",
        es: "compartir",
        fi: "Jaa",
        fr: "partager",
        hr: "podijelite",
        hu: "megoszt\xe1s",
        it: "condividi",
        ja: "共有",
        ko: "공유하기",
        nl: "delen",
        no: "del",
        pl: "udostępnij",
        pt: "compartilhar",
        ro: "partajează",
        ru: "поделиться",
        sk: "zdieľať",
        sl: "deli",
        sr: "podeli",
        sv: "dela",
        tr: "paylaş",
        zh: "分享"
      },
      name: "tumblr",
      faPrefix: "fab",
      faName: "fa-tumblr",
      title: {
        bg: "Сподели в tumblr",
        cs: "Sd\xedlet na tumblru",
        da: "Del p\xe5 tumblr",
        de: "Bei tumblr teilen",
        en: "Share on tumblr",
        es: "Compartir en tumblr",
        fi: "Jaa tumblriss\xe4",
        fr: "Partager sur tumblr",
        hr: "Podijelite na tumblr",
        hu: "Megoszt\xe1s tumblren",
        it: "Condividi su tumblr",
        ja: "tumblr上で共有",
        ko: "tumblr에서 공유하기",
        nl: "Delen op tumblr",
        no: "Del p\xe5 tumblr",
        pl: "Udostępnij przez tumblr",
        pt: "Compartilhar no tumblr",
        ro: "Partajează pe tumblr",
        ru: "Поделиться на tumblr",
        sk: "Zdieľať na tumblr",
        sl: "Deli na tumblr",
        sr: "Podeli na tumblr-u",
        sv: "Dela p\xe5 tumblr",
        tr: "tumblr'ta paylaş",
        zh: "在tumblr上分享"
      },
      shareUrl: "http://tumblr.com/widgets/share/tool?canonicalUrl=" + encodeURIComponent(e.getURL()) + e.getReferrerTrack()
    }
  }
}, function(e, t, r) {
  "use strict";
  var a = r(0),
    i = function(e, t) {
      var r = document.createElement("div"),
        a = document.createTextNode(e);
      r.appendChild(a);
      var i = r.textContent;
      if (i.length <= t) return e;
      var n = i.substring(0, t - 1)
        .lastIndexOf(" ");
      return i.substring(0, n) + "…"
    };
  e.exports = function(e) {
    var t = a.parse("https://twitter.com/intent/tweet", !0),
      r = e.getTitle();
    return t.query.text = i(r, 120), t.query.url = e.getURL(), null !== e.options.twitterVia && (t.query.via = e.options.twitterVia), delete t.search, {
      popup: !0,
      shareText: {
        en: "post",
        de: "posten",
        ja: "のつぶやき",
        ko: "짹짹",
        ru: "твит",
        sr: "твеет",
        zh: "鸣叫"
      },
      name: "twitter",
      faPrefix: "fab",
      faName: "fa-x-twitter",
      title: {
        bg: "Сподели в Twitter",
        cs: "Sd\xedlet na Twiiteru",
        da: "Del p\xe5 Twitter",
        de: "Auf X posten",
        en: "Post on X",
        es: "Compartir en Twitter",
        fi: "Jaa Twitteriss\xe4",
        fr: "Partager sur Twitter",
        hr: "Podijelite na Twitteru",
        hu: "Megoszt\xe1s Twitteren",
        it: "Condividi su Twitter",
        ja: "ツイッター上で共有",
        ko: "트위터에서 공유하기",
        nl: "Delen op Twitter",
        no: "Del p\xe5 Twitter",
        pl: "Udostępnij na Twitterze",
        pt: "Compartilhar no Twitter",
        ro: "Partajează pe Twitter",
        ru: "Поделиться на Twitter",
        sk: "Zdieľať na Twitteri",
        sl: "Deli na Twitterju",
        sr: "Podeli na Twitter-u",
        sv: "Dela p\xe5 Twitter",
        tr: "Twitter'da paylaş",
        zh: "在Twitter上分享"
      },
      shareUrl: a.format(t) + e.getReferrerTrack()
    }
  }
}, function(e, t, r) {
  "use strict";
  e.exports = function(e) {
    return {
      popup: !0,
      shareText: {
        bg: "cподеляне",
        cs: "sd\xedlet",
        da: "del",
        de: "posten",
        en: "post",
        es: "compartir",
        fi: "Jaa",
        fr: "partager",
        hr: "podijelite",
        hu: "megoszt\xe1s",
        it: "condividi",
        ja: "共有",
        ko: "공유하기",
        nl: "delen",
        no: "del",
        pl: "udostępnij",
        pt: "compartilhar",
        ro: "partajează",
        ru: "поделиться",
        sk: "zdieľať",
        sl: "deli",
        sr: "podeli",
        sv: "dela",
        tr: "paylaş",
        zh: "分享"
      },
      name: "vk",
      faPrefix: "fab",
      faName: "fa-vk",
      title: {
        bg: "Сподели във VK",
        cs: "Sd\xedlet na VKu",
        da: "Del p\xe5 VK",
        de: "Bei VK teilen",
        en: "Share on VK",
        es: "Compartir en VK",
        fi: "Jaa VKissa",
        fr: "Partager sur VK",
        hr: "Podijelite na VKu",
        hu: "Megoszt\xe1s VKon",
        it: "Condividi su VK",
        ja: "フェイスブック上で共有",
        ko: "페이스북에서 공유하기",
        nl: "Delen op VK",
        no: "Del p\xe5 VK",
        pl: "Udostępnij na VKu",
        pt: "Compartilhar no VK",
        ro: "Partajează pe VK",
        ru: "Поделиться на ВКонтакте",
        sk: "Zdieľať na VKu",
        sl: "Deli na VKu",
        sr: "Podeli na VK-u",
        sv: "Dela p\xe5 VK",
        tr: "VK'ta paylaş",
        zh: "在VK上分享"
      },
      shareUrl: "https://vk.com/share.php?url=" + encodeURIComponent(e.getURL()) + e.getReferrerTrack()
    }
  }
}, function(e, t, r) {
  "use strict";
  e.exports = function(e) {
    return {
      popup: !0,
      shareText: {
        bg: "cподеляне",
        cs: "sd\xedlet",
        da: "del",
        de: "teilen",
        en: "share",
        es: "compartir",
        fi: "Jaa",
        fr: "partager",
        hr: "podijelite",
        hu: "megoszt\xe1s",
        it: "condividi",
        ja: "共有",
        ko: "공유하기",
        nl: "delen",
        no: "del",
        pl: "udostępnij",
        pt: "compartilhar",
        ro: "partajează",
        ru: "поделиться",
        sk: "zdieľať",
        sl: "deli",
        sr: "podeli",
        sv: "dela",
        tr: "paylaş",
        zh: "分享"
      },
      name: "weibo",
      faPrefix: "fab",
      faName: "fa-weibo",
      title: {
        bg: "Сподели в weibo",
        cs: "Sd\xedlet na weibo",
        da: "Del p\xe5 weibo",
        de: "Bei weibo teilen",
        en: "Share on weibo",
        es: "Compartir en weibo",
        fi: "Jaa weiboiss\xe4",
        fr: "Partager sur weibo",
        hr: "Podijelite na weibo",
        hu: "Megoszt\xe1s weiboen",
        it: "Condividi su weibo",
        ja: "Weibo上で共有",
        ko: "Weibo에서 공유하기",
        nl: "Delen op weibo",
        no: "Del p\xe5 weibo",
        pl: "Udostępnij przez weibo",
        pt: "Compartilhar no weibo",
        ro: "Partajează pe weibo",
        ru: "Поделиться на weibo",
        sk: "Zdieľať na weibo",
        sl: "Deli na weibo",
        sr: "Podeli na weibo-u",
        sv: "Dela p\xe5 weibo",
        tr: "Weibo'ta paylaş",
        zh: "分享至新浪微博"
      },
      shareUrl: "http://service.weibo.com/share/share.php?url=" + encodeURIComponent(e.getURL()) + "&title=" + e.getTitle() + e.getReferrerTrack()
    }
  }
}, function(e, t, r) {
  "use strict";
  e.exports = function(e) {
    var t = encodeURIComponent(e.getURL());
    return {
      popup: !1,
      shareText: {
        bg: "cподеляне",
        cs: "sd\xedlet",
        da: "del",
        de: "teilen",
        en: "share",
        es: "compartir",
        fi: "Jaa",
        fr: "partager",
        hr: "podijelite",
        hu: "megoszt\xe1s",
        it: "condividi",
        ja: "共有",
        ko: "공유하기",
        nl: "delen",
        no: "del",
        pl: "udostępnij",
        pt: "compartilhar",
        ro: "partajează",
        ru: "поделиться",
        sk: "zdieľať",
        sl: "deli",
        sr: "podeli",
        sv: "dela",
        tr: "paylaş",
        zh: "分享"
      },
      name: "whatsapp",
      faPrefix: "fab",
      faName: "fa-whatsapp",
      title: {
        bg: "Сподели в Whatsapp",
        cs: "Sd\xedlet na Whatsappu",
        da: "Del p\xe5 Whatsapp",
        de: "Bei Whatsapp teilen",
        en: "Share on Whatsapp",
        es: "Compartir en Whatsapp",
        fi: "Jaa WhatsAppiss\xe4",
        fr: "Partager sur Whatsapp",
        hr: "Podijelite na Whatsapp",
        hu: "Megoszt\xe1s WhatsAppen",
        it: "Condividi su Whatsapp",
        ja: "Whatsapp上で共有",
        ko: "Whatsapp에서 공유하기",
        nl: "Delen op Whatsapp",
        no: "Del p\xe5 Whatsapp",
        pl: "Udostępnij przez WhatsApp",
        pt: "Compartilhar no Whatsapp",
        ro: "Partajează pe Whatsapp",
        ru: "Поделиться на Whatsapp",
        sk: "Zdieľať na Whatsapp",
        sl: "Deli na Whatsapp",
        sr: "Podeli na WhatsApp-u",
        sv: "Dela p\xe5 Whatsapp",
        tr: "Whatsapp'ta paylaş",
        zh: "在Whatsapp上分享"
      },
      shareUrl: "whatsapp://send?text=" + encodeURIComponent(e.getTitle()) + "%20" + t + e.getReferrerTrack()
    }
  }
}, function(e, t, r) {
  "use strict";
  e.exports = function(e) {
    return {
      popup: !0,
      shareText: {
        bg: "cподеляне",
        cs: "sd\xedlet",
        da: "del",
        de: "teilen",
        en: "share",
        es: "compartir",
        fi: "Jaa",
        fr: "partager",
        hr: "podijelite",
        hu: "megoszt\xe1s",
        it: "condividi",
        ja: "共有",
        ko: "공유하기",
        nl: "delen",
        no: "del",
        pl: "udostępnij",
        pt: "compartilhar",
        ro: "partajează",
        ru: "поделиться",
        sk: "zdieľať",
        sl: "deli",
        sr: "podeli",
        sv: "dela",
        tr: "paylaş",
        zh: "分享"
      },
      name: "xing",
      faPrefix: "fab",
      faName: "fa-xing",
      title: {
        bg: "Сподели в XING",
        cs: "Sd\xedlet na XINGu",
        da: "Del p\xe5 XING",
        de: "Bei XING teilen",
        en: "Share on XING",
        es: "Compartir en XING",
        fi: "Jaa XINGiss\xe4",
        fr: "Partager sur XING",
        hr: "Podijelite na XING",
        hu: "Megoszt\xe1s XINGen",
        it: "Condividi su XING",
        ja: "XING上で共有",
        ko: "XING에서 공유하기",
        nl: "Delen op XING",
        no: "Del p\xe5 XING",
        pl: "Udostępnij przez XING",
        pt: "Compartilhar no XING",
        ro: "Partajează pe XING",
        ru: "Поделиться на XING",
        sk: "Zdieľať na XING",
        sl: "Deli na XING",
        sr: "Podeli na XING-u",
        sv: "Dela p\xe5 XING",
        tr: "XING'ta paylaş",
        zh: "分享至XING"
      },
      shareUrl: "https://www.xing.com/spi/shares/new?url=" + encodeURIComponent(e.getURL()) + e.getReferrerTrack()
    }
  }
}, function(e, t, r) {
  "use strict";
  e.exports = function(e) {
    var t = encodeURIComponent(e.getURL());
    return {
      popup: !1,
      shareText: {
        bg: "cподеляне",
        cs: "sd\xedlet",
        da: "del",
        de: "teilen",
        en: "share",
        es: "compartir",
        fi: "Jaa",
        fr: "partager",
        hr: "podijelite",
        hu: "megoszt\xe1s",
        it: "condividi",
        ja: "共有",
        ko: "공유하기",
        nl: "delen",
        no: "del",
        pl: "udostępnij",
        pt: "compartilhar",
        ro: "partajează",
        ru: "поделиться",
        sk: "zdieľať",
        sl: "deli",
        sr: "podeli",
        sv: "dela",
        tr: "paylaş",
        zh: "分享"
      },
      name: "viber",
      faPrefix: "fab",
      faName: "fa-viber",
      title: {
        bg: "Сподели в viber",
        cs: "Sd\xedlet na viberu",
        da: "Del p\xe5 viber",
        de: "Bei viber teilen",
        en: "Share on viber",
        es: "Compartir en viber",
        fi: "Jaa viberiss\xe4",
        fr: "Partager sur viber",
        hr: "Podijelite na viber",
        hu: "Megoszt\xe1s viberen",
        it: "Condividi su viber",
        ja: "viber上で共有",
        ko: "viber에서 공유하기",
        nl: "Delen op viber",
        no: "Del p\xe5 viber",
        pl: "Udostępnij przez viber",
        pt: "Compartilhar no viber",
        ro: "Partajează pe viber",
        ru: "Поделиться на viber",
        sk: "Zdieľať na viber",
        sl: "Deli na viber",
        sr: "Podeli na viber-u",
        sv: "Dela p\xe5 viber",
        tr: "viber'ta paylaş",
        zh: "在viber上分享"
      },
      shareUrl: "viber://forward?text=" + encodeURIComponent(e.getTitle()) + "%20" + t + e.getReferrerTrack()
    }
  }
}]);