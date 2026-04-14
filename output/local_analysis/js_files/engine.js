if (undefined === window.Kameleoon) {
  (function() {
    ! function(e, t) {
      e.kbowser = t()
    }(this, (function() {
      return function(e) {
        var t = {};

        function r(i) {
          if (t[i]) return t[i].exports;
          var n = t[i] = {
            i: i,
            l: !1,
            exports: {}
          };
          return e[i].call(n.exports, n, n.exports, r), n.l = !0, n.exports
        }
        return r.m = e, r.c = t, r.d = function(e, t, i) {
          r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
          })
        }, r.r = function(e) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, r.t = function(e, t) {
          if (1 & t && (e = r(e)), 8 & t) return e;
          if (4 & t && "object" == typeof e && e && e.__esModule) return e;
          var i = Object.create(null);
          if (r.r(i), Object.defineProperty(i, "default", {
              enumerable: !0,
              value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) r.d(i, n, function(t) {
              return e[t]
            }.bind(null, n));
          return i
        }, r.n = function(e) {
          var t = e && e.__esModule ? function() {
            return e.default
          } : function() {
            return e
          };
          return r.d(t, "a", t), t
        }, r.o = function(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 90)
      }({
        17: function(e, t, r) {
          "use strict";
          t.__esModule = !0, t.default = void 0;
          var i = r(18),
            n = function() {
              function e() {}
              return e.getFirstMatch = function(e, t) {
                var r = t.match(e);
                return r && r.length > 0 && r[1] || ""
              }, e.getSecondMatch = function(e, t) {
                var r = t.match(e);
                return r && r.length > 1 && r[2] || ""
              }, e.map = function(e, t) {
                var r, i = [];
                if (Array.prototype.map) return Array.prototype.map.call(e, t);
                for (r = 0; r < e.length; r += 1) i.push(t(e[r]));
                return i
              }, e.find = function(e, t) {
                var r, i;
                if (Array.prototype.find) return Array.prototype.find.call(e, t);
                for (r = 0, i = e.length; r < i; r += 1) {
                  var n = e[r];
                  if (t(n, r)) return n
                }
              }, e.assign = function(e) {
                for (var t, r, i = e, n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) s[a - 1] = arguments[a];
                if (Object.assign) return Object.assign.apply(Object, [e].concat(s));
                var o = function() {
                  var e = s[t];
                  "object" == typeof e && null !== e && Object.keys(e)
                    .forEach((function(t) {
                      i[t] = e[t]
                    }))
                };
                for (t = 0, r = s.length; t < r; t += 1) o();
                return e
              }, e
            }();
          t.default = n, e.exports = t.default
        },
        18: function(e, t, r) {
          "use strict";
          t.__esModule = !0, t.OS_MAP = t.PLATFORMS_MAP = void 0;
          t.PLATFORMS_MAP = {
            t: "tablet",
            m: "mobile",
            d: "desktop"
          };
          t.OS_MAP = {
            WindowsPhone: "Windows Phone",
            Windows: "Windows",
            MacOS: "macOS",
            iOS: "iOS",
            Android: "Android",
            Linux: "Linux"
          }
        },
        90: function(e, t, r) {
          "use strict";
          t.__esModule = !0, t.default = void 0;
          var i, n = (i = r(91)) && i.__esModule ? i : {
              default: i
            },
            s = r(18);

          function a(e, t) {
            for (var r = 0; r < t.length; r++) {
              var i = t[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
          }
          var o = function() {
            function e() {}
            var t, r, i;
            return e.parse = function(e) {
              return new n.default(e)
                .getResult()
            }, t = e, i = [], (r = null) && a(t.prototype, r), i && a(t, i), e
          }();
          t.default = o, e.exports = t.default
        },
        91: function(e, t, r) {
          "use strict";
          t.__esModule = !0, t.default = void 0;
          var i = o(r(92)),
            n = o(r(93)),
            s = o(r(94)),
            a = o(r(17));

          function o(e) {
            return e && e.__esModule ? e : {
              default: e
            }
          }
          var u = function() {
            function e(e, t) {
              if (void 0 === t && (t = !1), null == e || "" === e) throw new Error("UA parameter can't be empty");
              this._ua = e, this.parsedResult = {}, !0 !== t && this.parse()
            }
            var t = e.prototype;
            return t.getUA = function() {
              return this._ua
            }, t.test = function(e) {
              return e.test(this._ua)
            }, t.parseBrowser = function() {
              var e = this;
              this.parsedResult.browser = {};
              var t = a.default.find(i.default, (function(t) {
                if ("function" == typeof t.test) return t.test(e);
                if (t.test instanceof Array) return t.test.some((function(t) {
                  return e.test(t)
                }));
                throw new Error("Browser's test function is not valid")
              }));
              return t && (this.parsedResult.browser = t.describe(this.getUA())), this.parsedResult.browser
            }, t.getBrowser = function() {
              return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser()
            }, t.getBrowserName = function(e) {
              return e ? String(this.getBrowser()
                  .name)
                .toLowerCase() || "" : this.getBrowser()
                .name || ""
            }, t.getOS = function() {
              return this.parsedResult.os ? this.parsedResult.os : this.parseOS()
            }, t.parseOS = function() {
              var e = this;
              this.parsedResult.os = {};
              var t = a.default.find(n.default, (function(t) {
                if ("function" == typeof t.test) return t.test(e);
                if (t.test instanceof Array) return t.test.some((function(t) {
                  return e.test(t)
                }));
                throw new Error("Browser's test function is not valid")
              }));
              return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os
            }, t.getOSName = function(e) {
              var t = this.getOS()
                .name;
              return e ? String(t)
                .toLowerCase() || "" : t || ""
            }, t.getOSVersion = function() {
              return this.getOS()
                .version
            }, t.parsePlatform = function() {
              var e = this;
              this.parsedResult.platform = {};
              var t = a.default.find(s.default, (function(t) {
                if ("function" == typeof t.test) return t.test(e);
                if (t.test instanceof Array) return t.test.some((function(t) {
                  return e.test(t)
                }));
                throw new Error("Browser's test function is not valid")
              }));
              return t && (this.parsedResult.platform = t.describe(this.getUA())), this.parsedResult.platform
            }, t.parse = function() {
              return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this
            }, t.getResult = function() {
              return a.default.assign({}, this.parsedResult)
            }, e
          }();
          t.default = u, e.exports = t.default
        },
        92: function(e, t, r) {
          "use strict";
          t.__esModule = !0, t.default = void 0;
          var i, n = (i = r(17)) && i.__esModule ? i : {
            default: i
          };
          var s = /version\/(\d+(\.?_?\d+)+)/i,
            a = [{
              test: [/googlebot/i],
              describe: function(e) {
                var t = {
                    name: "Googlebot"
                  },
                  r = n.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || n.default.getFirstMatch(s, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/opera/i],
              describe: function(e) {
                var t = {
                    name: "Opera"
                  },
                  r = n.default.getFirstMatch(s, e) || n.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/opr\/|opios/i],
              describe: function(e) {
                var t = {
                    name: "Opera"
                  },
                  r = n.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || n.default.getFirstMatch(s, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/SamsungBrowser/i],
              describe: function(e) {
                var t = {
                    name: "Samsung Internet for Android"
                  },
                  r = n.default.getFirstMatch(s, e) || n.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/Whale/i],
              describe: function(e) {
                var t = {
                    name: "NAVER Whale Browser"
                  },
                  r = n.default.getFirstMatch(s, e) || n.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/MZBrowser/i],
              describe: function(e) {
                var t = {
                    name: "MZ Browser"
                  },
                  r = n.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || n.default.getFirstMatch(s, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/focus/i],
              describe: function(e) {
                var t = {
                    name: "Focus"
                  },
                  r = n.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || n.default.getFirstMatch(s, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/swing/i],
              describe: function(e) {
                var t = {
                    name: "Swing"
                  },
                  r = n.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || n.default.getFirstMatch(s, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/coast/i],
              describe: function(e) {
                var t = {
                    name: "Opera Coast"
                  },
                  r = n.default.getFirstMatch(s, e) || n.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/yabrowser/i],
              describe: function(e) {
                var t = {
                    name: "Yandex Browser"
                  },
                  r = n.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || n.default.getFirstMatch(s, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/ucbrowser/i],
              describe: function(e) {
                var t = {
                    name: "UC Browser"
                  },
                  r = n.default.getFirstMatch(s, e) || n.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/Maxthon|mxios/i],
              describe: function(e) {
                var t = {
                    name: "Maxthon"
                  },
                  r = n.default.getFirstMatch(s, e) || n.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/epiphany/i],
              describe: function(e) {
                var t = {
                    name: "Epiphany"
                  },
                  r = n.default.getFirstMatch(s, e) || n.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/puffin/i],
              describe: function(e) {
                var t = {
                    name: "Puffin"
                  },
                  r = n.default.getFirstMatch(s, e) || n.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/sleipnir/i],
              describe: function(e) {
                var t = {
                    name: "Sleipnir"
                  },
                  r = n.default.getFirstMatch(s, e) || n.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/k-meleon/i],
              describe: function(e) {
                var t = {
                    name: "K-Meleon"
                  },
                  r = n.default.getFirstMatch(s, e) || n.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/micromessenger/i],
              describe: function(e) {
                var t = {
                    name: "WeChat"
                  },
                  r = n.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || n.default.getFirstMatch(s, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/qqbrowser/i],
              describe: function(e) {
                var t = {
                    name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser"
                  },
                  r = n.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || n.default.getFirstMatch(s, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/msie|trident/i],
              describe: function(e) {
                var t = {
                    name: "Internet Explorer"
                  },
                  r = n.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/\sedg\//i],
              describe: function(e) {
                var t = {
                    name: "Microsoft Edge"
                  },
                  r = n.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/edg([ea]|ios)/i],
              describe: function(e) {
                var t = {
                    name: "Microsoft Edge"
                  },
                  r = n.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/vivaldi/i],
              describe: function(e) {
                var t = {
                    name: "Vivaldi"
                  },
                  r = n.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/seamonkey/i],
              describe: function(e) {
                var t = {
                    name: "SeaMonkey"
                  },
                  r = n.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/sailfish/i],
              describe: function(e) {
                var t = {
                    name: "Sailfish"
                  },
                  r = n.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/silk/i],
              describe: function(e) {
                var t = {
                    name: "Amazon Silk"
                  },
                  r = n.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/phantom/i],
              describe: function(e) {
                var t = {
                    name: "PhantomJS"
                  },
                  r = n.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/slimerjs/i],
              describe: function(e) {
                var t = {
                    name: "SlimerJS"
                  },
                  r = n.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
              describe: function(e) {
                var t = {
                    name: "BlackBerry"
                  },
                  r = n.default.getFirstMatch(s, e) || n.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/(web|hpw)[o0]s/i],
              describe: function(e) {
                var t = {
                    name: "WebOS Browser"
                  },
                  r = n.default.getFirstMatch(s, e) || n.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/bada/i],
              describe: function(e) {
                var t = {
                    name: "Bada"
                  },
                  r = n.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/tizen/i],
              describe: function(e) {
                var t = {
                    name: "Tizen"
                  },
                  r = n.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || n.default.getFirstMatch(s, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/qupzilla/i],
              describe: function(e) {
                var t = {
                    name: "QupZilla"
                  },
                  r = n.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || n.default.getFirstMatch(s, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/firefox|iceweasel|fxios/i],
              describe: function(e) {
                var t = {
                    name: "Firefox"
                  },
                  r = n.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/electron/i],
              describe: function(e) {
                var t = {
                    name: "Electron"
                  },
                  r = n.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/chromium/i],
              describe: function(e) {
                var t = {
                    name: "Chromium"
                  },
                  r = n.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || n.default.getFirstMatch(s, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/chrome|crios|crmo/i],
              describe: function(e) {
                var t = {
                    name: "Chrome"
                  },
                  r = n.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/GSA/i],
              describe: function(e) {
                var t = {
                    name: "Google Search"
                  },
                  r = n.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
              }
            }, {
              test: function(e) {
                var t = !e.test(/like android/i),
                  r = e.test(/android/i);
                return t && r
              },
              describe: function(e) {
                var t = {
                    name: "Android Browser"
                  },
                  r = n.default.getFirstMatch(s, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/safari|applewebkit/i],
              describe: function(e) {
                var t = {
                    name: "Safari"
                  },
                  r = n.default.getFirstMatch(s, e);
                return r && (t.version = r), t
              }
            }, {
              test: [/.*/i],
              describe: function(e) {
                var t = -1 !== e.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                return {
                  name: n.default.getFirstMatch(t, e),
                  version: n.default.getSecondMatch(t, e)
                }
              }
            }];
          t.default = a, e.exports = t.default
        },
        93: function(e, t, r) {
          "use strict";
          t.__esModule = !0, t.default = void 0;
          var i, n = (i = r(17)) && i.__esModule ? i : {
              default: i
            },
            s = r(18);
          var a = [{
            test: [/windows phone/i],
            describe: function(e) {
              return {
                name: s.OS_MAP.WindowsPhone
              }
            }
          }, {
            test: [/windows /i],
            describe: function(e) {
              return {
                name: s.OS_MAP.Windows
              }
            }
          }, {
            test: [/Macintosh(.*?) FxiOS(.*?) Version\//],
            describe: function(e) {
              var t = n.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
              return {
                name: s.OS_MAP.iOS,
                version: t
              }
            }
          }, {
            test: [/macintosh/i],
            describe: function(e) {
              var t = n.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e)
                .replace(/[_\s]/g, ".");
              return {
                name: s.OS_MAP.MacOS,
                version: t
              }
            }
          }, {
            test: [/(ipod|iphone|ipad)/i],
            describe: function(e) {
              var t = n.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e)
                .replace(/[_\s]/g, ".");
              return {
                name: s.OS_MAP.iOS,
                version: t
              }
            }
          }, {
            test: function(e) {
              var t = !e.test(/like android/i),
                r = e.test(/android/i);
              return t && r
            },
            describe: function(e) {
              return {
                name: s.OS_MAP.Android
              }
            }
          }, {
            test: [/linux/i],
            describe: function() {
              return {
                name: s.OS_MAP.Linux
              }
            }
          }];
          t.default = a, e.exports = t.default
        },
        94: function(e, t, r) {
          "use strict";
          t.__esModule = !0, t.default = void 0;
          var i, n = (i = r(17)) && i.__esModule ? i : {
              default: i
            },
            s = r(18);
          var a = [{
            test: [/googlebot/i],
            describe: function() {
              return {
                type: "bot"
              }
            }
          }, {
            test: [/huawei/i],
            describe: function(e) {
              return {
                type: s.PLATFORMS_MAP.m
              }
            }
          }, {
            test: [/nexus\s*(?:7|8|9|10).*/i],
            describe: function() {
              return {
                type: s.PLATFORMS_MAP.t
              }
            }
          }, {
            test: [/ipad/i],
            describe: function() {
              return {
                type: s.PLATFORMS_MAP.t
              }
            }
          }, {
            test: [/Macintosh(.*?) FxiOS(.*?) Version\//],
            describe: function() {
              return {
                type: s.PLATFORMS_MAP.t
              }
            }
          }, {
            test: [/kftt build/i],
            describe: function() {
              return {
                type: s.PLATFORMS_MAP.t
              }
            }
          }, {
            test: [/silk/i],
            describe: function() {
              return {
                type: s.PLATFORMS_MAP.t
              }
            }
          }, {
            test: [/tablet(?! pc)/i],
            describe: function() {
              return {
                type: s.PLATFORMS_MAP.t
              }
            }
          }, {
            test: function(e) {
              var t = e.test(/ipod|iphone/i),
                r = e.test(/like (ipod|iphone)/i);
              return t && !r
            },
            describe: function(e) {
              return {
                type: s.PLATFORMS_MAP.m
              }
            }
          }, {
            test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
            describe: function() {
              return {
                type: s.PLATFORMS_MAP.m
              }
            }
          }, {
            test: [/[^-]mobi/i],
            describe: function() {
              return {
                type: s.PLATFORMS_MAP.m
              }
            }
          }, {
            test: function(e) {
              return "blackberry" === e.getBrowserName(!0)
            },
            describe: function() {
              return {
                type: s.PLATFORMS_MAP.m
              }
            }
          }, {
            test: function(e) {
              return "bada" === e.getBrowserName(!0)
            },
            describe: function() {
              return {
                type: s.PLATFORMS_MAP.m
              }
            }
          }, {
            test: function(e) {
              return "windows phone" === e.getBrowserName()
            },
            describe: function() {
              return {
                type: s.PLATFORMS_MAP.m
              }
            }
          }, {
            test: function(e) {
              return "android" === e.getOSName(!0) && Number(String(e.getOSVersion())
                .split(".")[0]) >= 3
            },
            describe: function() {
              return {
                type: s.PLATFORMS_MAP.t
              }
            }
          }, {
            test: function(e) {
              return "android" === e.getOSName(!0)
            },
            describe: function() {
              return {
                type: s.PLATFORMS_MAP.m
              }
            }
          }, {
            test: function(e) {
              return "macos" === e.getOSName(!0)
            },
            describe: function() {
              return {
                type: s.PLATFORMS_MAP.d
              }
            }
          }, {
            test: function(e) {
              return "windows" === e.getOSName(!0)
            },
            describe: function() {
              return {
                type: s.PLATFORMS_MAP.d
              }
            }
          }, {
            test: function(e) {
              return "linux" === e.getOSName(!0)
            },
            describe: function() {
              return {
                type: s.PLATFORMS_MAP.d
              }
            }
          }];
          t.default = a, e.exports = t.default
        }
      })
    }));
    class APIConfiguration {
      constructor(e) {
        this.generationTime = e.scriptProduceTime;
        this.goals = e.goals.map((e => new APIGoal(e)));
        this.singlePageSupport = Kameleoon.Internals.runtime ? Kameleoon.Internals.runtime.singlePageSupport : e.singlePageSupport;
        this.siteCode = e.siteCode
      }
    }
    class APIAction {
      constructor(i, e) {
        const t = 0 === e;
        const a = Kameleoon.Internals.runtime.Visitor.currentVisit;
        const n = Kameleoon.Internals.runtime.storedData.obtainField("Gatherer", t ? "experimentsTriggered" : "personalizationsTriggered", {});
        this.dateLaunched = i.dateStatusModified;
        this.dateModified = i.dateModified;
        this.id = i.id;
        this.name = i.name;
        this.targetSegment = new APISegment(i.targetingSegment);
        this.active = i.targeting && !i.disabled && i.displayedVariation && null != i.displayedVariation.id;
        this.triggered = i.targeting || !1;
        this.untrackedTrafficReallocationTime = i.untrackedRespoolTime || null;
        this.triggeredInVisit = n[this.id] ? !0 : !1;
        const r = i => Kameleoon.Internals.runtime.variations.find((e => e.id == i));
        if (i.targetingTrigger) this.targetTrigger = new APISegment(i.targetingTrigger);
        if (t) {
          let e = r(i.registeredVariationId);
          this.associatedVariation = e ? new APIVariation(e, i) : null;
          this.trafficDeviation = {};
          this.variations = [];
          this.redirectProcessed = i.redirectProcessed || !1;
          for (let e in i.deviation) {
            const t = r(parseInt(e));
            if (t) {
              this.trafficDeviation[e] = 100 * i.deviation[e];
              this.variations.push(new APIVariation(t, i))
            }
          }
          this.activatedInVisit = a.ExperimentActivations[this.id] ? !0 : !1;
          this.trackingPerformed = i.trackingPerformed
        } else {
          this.associatedVariation = new APIVariation(r(i.associatedVariation.id), i);
          this.activatedInVisit = this.triggeredInVisit && a.PersonalizationActivations[this.id] ? !0 : !1
        }
        Object.defineProperty(this, "goals", {
          enumerable: !0,
          configurable: !0,
          get: () => Kameleoon.Internals.configuration.goals.filter((e => -1 != (i.goals || [])
              .indexOf(e.id)))
            .map((i => new APIGoal(i)))
        });
        Object.defineProperty(this, "mainGoal", {
          enumerable: !0,
          configurable: !0,
          get: () => {
            const e = t ? i.kameleoonTracking?.mainGoalId : i.mainGoalId;
            const a = e && Kameleoon.Internals.configuration.goals.find((i => i.id == e));
            return a ? new APIGoal(a) : null
          }
        })
      }
    }
    class APIActionActivation {
      constructor(i, n, t) {
        const a = 0 === i;
        const o = Kameleoon.Internals.runtime.Campaigns.obtainCampaign(n, a);
        const s = a ? "ExperimentActivations" : "PersonalizationActivations";
        const e = t[s][n].associatedVariationID;
        const c = Kameleoon.Internals.configuration.variations.find((i => i.id == e));
        if (a) {
          this.experimentID = n;
          this.experiment = o ? new APIAction(o, 0) : null
        } else {
          this.personalizationID = n;
          this.personalization = o ? new APIAction(o, 1) : null
        }
        this.times = t[s][n].times;
        this.associatedVariationID = e;
        this.associatedVariation = c ? new APIVariation(c, o) : null
      }
    }
    class APIActions {
      constructor(e) {
        const n = 0 === e;
        const i = () => {
          if (Kameleoon.Internals.runtime) return Kameleoon.Internals.runtime.Campaigns.obtainCampaignsList(e);
          else return []
        };
        const t = n => new APIAction(n, e);
        const a = e => i()
          .map(t)
          .filter(e);
        this.getAll = () => i()
          .map(t);
        this.getActive = () => i()
          .filter((e => (!0 === e.targeting || e.trackingPerformed) && 1 != e.disabled && (null != e.displayedVariation?.id || e.featureFlag && null != e.associatedVariation?.id)))
          .map(t);
        this.getTriggeredInVisit = () => a((e => e.triggeredInVisit));
        this.getActivatedInVisit = () => a((e => e.activatedInVisit));
        const s = (e, n) => {
          const a = i()
            .find((i => i[e] == n));
          return a ? t(a) : null
        };
        this.getById = e => s("id", e);
        this.getByName = e => s("name", e);
        if (n) {
          this.assignVariation = (e, n, t) => {
            const a = i()
              .find((n => n.id == e));
            if (a && (void 0 === a.registeredVariationId || t)) {
              a.registeredVariationId = n;
              a.assignmentTime = (new Date)
                .getTime();
              a.writeLocalData()
            } else if (!a) {
              if (!Kameleoon.Internals.runtime.notUsedCampaigns) Kameleoon.Internals.runtime.notUsedCampaigns = {};
              Kameleoon.Internals.runtime.notUsedCampaigns[e] = n
            }
          };
          this.block = (e, i = !1) => {
            const t = Kameleoon.Internals.runtime.Campaigns.obtainCampaign(e, n);
            if (t) {
              if (i) {
                const n = Kameleoon.Internals.runtime.storedData.obtainField("Runtime", "blockedExperiments", []);
                n.push(e);
                Kameleoon.Internals.runtime.storedData.saveField("Runtime", "blockedExperiments", n)
              }
              t.setBlocked("API")
            }
          };
          this.trigger = (e, i) => {
            const t = Kameleoon.Internals.runtime.Campaigns.obtainCampaign(e, n);
            if (t)
              if (i) {
                if (t) {
                  t.performVariationAssignment(!0);
                  Kameleoon.Analyst.Actions.performActionsTracking([t])
                }
              } else {
                t.trigger();
                Kameleoon.Analyst.Actions.process([t])
              }
            else if (i && null != Kameleoon.Internals.runtime.notUsedCampaigns?.[e]) Kameleoon.Gatherer.track(VisitEvent_Experiment, {
              id: e,
              variationId: Kameleoon.Internals.runtime.notUsedCampaigns[e],
              notTrack: !1,
              notSave: !0
            });
          };
          this.triggerExperiment = (e, n) => {
            this.trigger(e, n);
          }
        } else {
          this.block = (e, i = !1) => {};
          this.disable = e => {};
          this.trigger = (e, i) => {}
        }
      }
    }
    class APIGoal {
      constructor(t) {
        if (t) {
          this.id = t.id;
          this.name = t.name;
          this.type = t.type
        }
      }
    }
    class APIProduct {
      constructor(e, a) {
        this.productID = e;
        const t = new Set(["accessories", "auto", "available", "brand", "description", "fashion", "gender", "groupId", "isChild", "isFashion", "isNew", "leftovers", "merchantID", "model", "name", "params", "rating", "seasonality", "sku", "tags", "typePrefix", "url"]);
        for (let e in a) switch (e) {
          case "imageURL":
          case "mainImageURL":
            this.imageURL = a.mainImageURL || a.imageURL;
            break;
          case "price":
          case "oldPrice":
          case "availableQuantity":
          case "priceMargin":
            this[e] = parseFloat(a[e]) || null;
            break;
          case "categories":
            if (a.categories.length > 0) this.categories = a.categories.map((e => {
              if (e.parent) e.parent = e.parent.toString();
              e.id = e.id.toString();
              return e
            }));
            break;
          default:
            if (t.has(e)) this[e] = a[e]
        }
      }
      getTrackingParameters() {
        let e = {};
        e.url = encodeURIComponent(Kameleoon.Utils.computeCurrentPageCleanAbsoluteURL());
        for (let a in this) switch (a) {
          case "productID":
            break;
          default:
            switch (typeof this[a]) {
              case "object":
                e[a] = encodeURIComponent(JSON.stringify(this[a]));
                break;
              case "string":
                e[a] = encodeURIComponent(this[a]);
                break;
              case "number":
              case "boolean":
              case "symbol":
                e[a] = this[a]
            }
        }
        return Kameleoon.Utils.parseObjectToUrlParams(e)
      }
    }
    class APITargeting {
      constructor(e) {
        const n = 1 === e ? "targetingTriggers" : "targetingSegments";
        const t = e => {
          const t = Kameleoon.Internals.runtime[n].find(e);
          return t ? new APISegment(t) : null
        };
        this.getAll = () => Kameleoon.Internals.runtime[n].map((e => new APISegment(e)));
        this.getById = e => t((n => n.id == e));
        this.getByName = e => t((n => n.name === e));
        this.reevaluate = t => {
          const a = Kameleoon.Internals.runtime[n].findIndex((e => e.id == t));
          if (a > -1) {
            const i = Kameleoon.Internals.runtime.simulationMode ? Kameleoon.Internals.runtime.simulationModeData[n] : Kameleoon.Internals.configuration[n];
            const r = i.find((e => e.id == t));
            if (r) {
              Kameleoon.Internals.runtime[n].splice(a, 1);
              const i = Kameleoon.Utils.clone(r);
              Kameleoon.Internals.runtime[n].push(i);
              Kameleoon.Targeting.checkTargetingSegmentsTargeting([i]);
              Kameleoon.Internals.runtime.Campaigns.obtainCampaignsList(0)
                .concat(Kameleoon.Internals.runtime.Campaigns.obtainCampaignsList(1))
                .forEach((n => {
                  if (1 === e) {
                    n.setTargetingTrigger?.(t);
                    if (n.targetingTriggerId == t) n.forceTargeting = !1
                  } else {
                    n.setTargetingSegment(t);
                    if (n.targetingSegmentId == t) n.forceTargeting = !1
                  }
                }));
              Kameleoon.Analyst.Actions.processAllActions();
              return i.targeting
            }
          }
          return;
        };
        this.trigger = t => {
          const a = Kameleoon.Internals.runtime[n].find((e => e.id == t));
          if (a) {
            a.targeting = !0;
            const n = 1 === e ? "targetingTriggerId" : "targetingSegmentId";
            Kameleoon.Internals.runtime.Campaigns.obtainCampaignsList("experiments")
              .concat(Kameleoon.Internals.runtime.Campaigns.obtainCampaignsList("personalizations"))
              .forEach((e => {
                if (e[n] == t) {
                  e.targeting = void 0;
                  e.rescheduleTargeting = !0;
                  e.forceTargeting = !0
                }
              }));
            Kameleoon.Analyst.Actions.processAllActions();
            Kameleoon.Targeting.processTargetingSegments([a])
          }
        }
      }
    }
    class APISegment {
      constructor(t) {
        if (t) {
          this.id = t.id;
          this.name = t.name;
          this.targeting = t.targeting
        }
      }
    }
    class APITemplate {
      constructor(s, t) {
        this.name = s;
        this.customFields = t
      }
    }
    class APIVariation {
      constructor(e, t = {}) {
        if (e) {
          this.id = e.id;
          this.name = e.name;
          if (t.experimentAction) {
            const i = t.variations.find((t => t.id == e.id));
            this.reallocationTime = i ? i.respoolTime : null
          } else this.reallocationTime = null;
          this.instantiatedTemplate = e.widgetTemplateInputData ? new APITemplate(e.widgetTemplateName, e.widgetTemplateInputData) : null
        }
      }
    }
    class APIVisit {
      constructor(t) {
        this.pageViews = t.obtainPageNumberViews();
        this.duration = t.lastEventDate - t.startDate;
        this.locale = Kameleoon.Utils.getLocale();
        this.startDate = t.startDate;
        this.index = t.visitNumber;
        this.currentProduct = null;
        this.products = [];
        this.clicks = t.clicks || 0;
        this.pageURLsVisited = t.pageURLsVisited;
        this.activatedSegments = t.activatedSegments;
        this.lastEventDate = t.lastEventDate;
        this.activatedExperiments = Object.keys(t.ExperimentActivations)
          .map((e => new APIActionActivation(0, parseInt(e), t)));
        this.activatedPersonalizations = Object.keys(t.PersonalizationActivations)
          .map((e => new APIActionActivation(1, parseInt(e), t)));
        if (t == Kameleoon.Internals.runtime.Visitor.currentVisit) {
          this.device = new Device;
          this.geolocation = t.Geolocation;
          if (Kameleoon.Internals.runtime.mentalistRun) Object.defineProperty(this, "initialConversionPredictions", {
            enumerable: !0,
            get: function() {
              return Kameleoon.Mentalist.computeGoalConversionProbabilityPredictionByGoalId(null)
            }
          });
        }
        this.conversions = Kameleoon.Utils.clone(t.conversions);
        this.customData = {};
        const e = Kameleoon.Internals.runtime.Gatherer.configuration.customData;
        for (const i in t.customData) {
          const n = e[i];
          if (null != n) this.customData[n.name] = Kameleoon.Gatherer.CustomData.obtainParsedValue(i, t.customData[i])
        }
        let i = "<OTHER / UNKNOWN>";
        let n = [];
        let a = Kameleoon.Internals.runtime.storedData.obtainField("Runtime", "firstReferrersIndices", []);
        for (let t = 0, e = a.length; t < e; t++) {
          let e = a[t];
          let s;
          if (0 == e) s = "<RESTART>";
          else {
            let t = Kameleoon.Internals.runtime.Gatherer.configuration.referrers[e - 1];
            s = null == t ? i : t.name
          }
          n.push(s)
        }
        this.acquisitionChannel = n[0];
        this.landingPageURL = t.landingPageURL;
        this.weather = t.Weather
      }
    }
    class APIVisitor {
      constructor() {
        this.getCustomDataVisitor = () => {
          const t = {};
          const i = Kameleoon.Internals.runtime.Visitor.customData;
          const s = Kameleoon.Internals.runtime.Gatherer.configuration.customData;
          for (const e in i)
            if (s[e]) t[s[e].name] = Kameleoon.Gatherer.CustomData.obtainParsedValue(e, i[e]);
          return t
        };
        this.setVisitorCode = t => {
          Kameleoon.Internals.runtime.Visitor.setVisitorCode(t)
        };
        const {
          Visitor: t,
          personalizationsActive: i,
          Consent: s
        } = Kameleoon.Internals.runtime;
        this.numberOfVisits = t.totalVisits;
        this.timeStartedEldestVisit = t.timeStartedEldestVisit;
        this.customData = this.getCustomDataVisitor();
        this.personalizationsActive = i;
        this.code = t.currentVisit.visitorCode;
        this.currentVisit = new APIVisit(t.currentVisit);
        this.visits = t.visits.map((t => new APIVisit(t)));
        this.previousVisit = t.visits.length > 1 ? new APIVisit(t.visits.slice(-2)[0]) : null;
        this.experimentLegalConsent = s.AB_TESTING;
        this.personalizationLegalConsent = s.PERSONALIZATION;
        this.productRecommendationLegalConsent = Kameleoon.Internals.runtime.storedData.obtainField("Gatherer", "productRecommendation") ? !0 : !1;
        this.firstVisitStartDate = t.timeStartedEldestVisit
      }
    }
    class Analyst {
      constructor() {
        this.initialize = e => {
          this.isTimeout = !1;
          if (window.kameleoonDisplayPage) {
            if (null == Kameleoon.Internals.configuration.behaviorWhenTimeout || document.getElementById("kameleoonLoadingStyleSheet")) window.clearTimeout(window.kameleoonDisplayPageTimeOut);
            else if (null == window.kameleoonEndLoadTime) this.isTimeout = !0;
            try {
              window.kameleoonDisplayPage(!0)
            } catch (e) {}
            window.kameleoonDisplayPage = null
          }
          window.kameleoonEndLoadTime = (new Date)
            .getTime();
          e()
        };
        this.load = () => {
          Kameleoon.Utils.sendKameleoonCustomEvent("Internals", {
            type: "load",
            time: (new Date)
              .getTime()
          });
          Kameleoon.Utils.runProtectedFunction((function() {
            if (window.kameleoonQueue) window.kameleoonQueue = new CommandQueue(window.kameleoonQueue, "IMMEDIATE");
            window.addEventListener("error", (e => {
              if (e.error && e.error.stack && e.error.stack.match(/kameleoon/gi)) {
                Kameleoon.Utils.Logger.send(e.error.stack, "kameleoon.js");
                return !1
              }
            }));
            Kameleoon.Analyst.initialize((() => {
              const e = Kameleoon.Analyst.checkBlockingElements();
              const o = window.kameleoonEndLoadTime - (window.kameleoonStartLoadTime || window.kameleoonEndLoadTime) - 25;
              Kameleoon.Utils.sendKameleoonCustomEvent.call(window, "Loaded", {
                timeout: "TIMEOUT" == e,
                loadTime: o
              });
              const n = Kameleoon.Internals.runtime;
              let a = !1;
              let t = null;
              if (n) {
                a = !0;
                t = n.localDataMap;
                n.clear()
              }
              if (0 == e.length) {
                Kameleoon.Internals.runtime = new Runtime(a, {
                  localDataMap: t
                });
                Kameleoon.Analyst.loadKameleoonFull((() => {
                  Kameleoon.Internals.runtime.run()
                }))
              } else {
                Kameleoon.Utils.sendKameleoonCustomEvent("Internals", {
                  type: "abort",
                  blockingReason: e
                });
                Kameleoon.Utils.sendKameleoonCustomEvent.call(window, "Aborted", {
                  reason: e
                })
              }
            }))
          }))
        };
        this.loadKameleoonFull = (e, o) => {
          if (!Kameleoon.Internals.runtime.kameleoonFull && (this.kameleoonFullNeeded() || o)) {
            const o = "kameleoonFullApplicationCode";
            const n = o => {
              Kameleoon.Utils.runProtectedScript(o + "\n;" + "(" + e.toString() + ")()", "kameleoonFull.js")
            };
            const a = sessionStorage.getItem(o);
            if (null != a) n(a);
            else {
              const {
                STATIC_HOST_NAME: e,
                DOMAIN: a
              } = Kameleoon.Internals.configuration;
              Kameleoon.Utils.performBeaconServerCall("https://" + e + "." + a + "/kameleoon-full.js?cache=" + Kameleoon.Utils.obtainRandomString(16), (e => {
                if (void 0 === e.readyState || 4 == e.readyState && 200 == e.status) {
                  sessionStorage.setItem(o, e.responseText);
                  n(e.responseText)
                }
              }))
            }
          } else e()
        };
        this.Actions = new Actions;
        this.Goals = new Goals
      }
      checkBlockingElements() {
        let e = !1;
        try {
          const e = "kameleoonPrivateMode";
          localStorage.getItem(e);
          sessionStorage.getItem(e)
        } catch (o) {
          e = !0
        }
        if (e) return "STORAGE";
        if (this.isTimeout) {
          return "TIMEOUT"
        }
        document.removeEventListener("visibilitychange", Kameleoon.Analyst.load);
        if ("prerender" == document.visibilityState) {
          document.addEventListener("visibilitychange", Kameleoon.Analyst.load);
          return "PRERENDER"
        }
        if (-1 != location.href.indexOf("kameleoonDisabled")) return "PARAMETER";
        return ""
      }
      kameleoonFullNeeded() {
        const {
          parameters: e,
          simulationMode: o
        } = Kameleoon.Internals.runtime;
        if (sessionStorage.getItem("kameleoonFullApplicationCode") || sessionStorage.getItem("kameleoonLightExtension") || e.kameleoon || e.kameleoonVariationId || e["kameleoon-simulation"] || e.kameleoonLightExtension || o || window === window.top && (e.kameleoonBuilder || sessionStorage.getItem("kameleoonPBXParams")) || Kameleoon.Utils.readLocalData("kameleoonSimulationParameters", "COOKIE")) return !0;
        return !1
      }
      loadSimulation(e) {
        if (!Kameleoon.Internals.runtime.parameters.kameleoonVariationId) Object.keys(localStorage)
          .forEach((e => {
            if (-1 !== e.indexOf("kameleoonVariation-")) localStorage.removeItem(e)
          }))
      }
      loadVariationFromServer(e, o) {}
      processSimulations() {}
    }
    Analyst.CODE_ALPHABET = "abcdefghijklmnopqrstuvwxyz0123456789";
    Analyst.HEXADECIMAL_ALPHABET = "0123456789ABCDEF";
    class API {
      constructor() {
        this.Core = {
          enableLegalConsent: function(e = "BOTH") {
            Kameleoon.Internals.runtime.Consent.enable(e)
          },
          disableLegalConsent: function(e = "BOTH") {
            Kameleoon.Internals.runtime.Consent.disable(e)
          },
          enableSinglePageSupport: function() {
            Kameleoon.Internals.runtime.enableSinglePageSupport.apply(Kameleoon.Internals.runtime, arguments)
          },
          enableDynamicRefresh: function() {
            Kameleoon.Internals.runtime.enableDynamicRefresh.apply(Kameleoon.Internals.runtime, arguments)
          },
          getConfiguration: () => new APIConfiguration(Kameleoon.Internals.configuration),
          load: function() {
            Kameleoon.Analyst.load.apply(Kameleoon.Analyst, arguments)
          },
          processRedirect: function() {
            Kameleoon.Utils.processRedirect.apply(Kameleoon.Utils, arguments)
          },
          runWhenConditionTrue: (e, n, t = 200) => {
            if (e()) Kameleoon.Utils.runProtectedFunction(n, !0);
            else {
              const o = Kameleoon.Utils.setInterval((() => {
                if (e()) {
                  Kameleoon.Utils.clearInterval(o);
                  Kameleoon.Utils.runProtectedFunction(n, !0)
                }
              }), t, !0)
            }
          },
          runWhenElementPresent: (e, n, t, o) => {
            const a = null == t;
            Kameleoon.Internals.runtime.processSelectorPresence({
              selector: e,
              useAntiFlicker: a,
              pollingInterval: t,
              isDynamicElement: o,
              callback: n
            })
          },
          runWhenShadowRootElementPresent: (e, n, t, o) => {
            this.Core.runWhenElementPresent(e, (a => {
              const r = a.filter((e => e.shadowRoot));
              if (0 === r.length) {
                const a = Kameleoon.Utils.setTimeout((() => {
                  Kameleoon.Utils.clearInterval(a);
                  this.Core.runWhenShadowRootElementPresent.apply(Kameleoon, [e, n, t, o])
                }), 150);
                return
              }
              const i = `data-kameleoon-shadow-class-${Kameleoon.Utils.obtainRandomString(4)}`;
              const l = () => {
                let e = [];
                r.forEach((t => {
                  if (t.shadowRoot) e = e.concat(Kameleoon.Utils.querySelectorAll(n, t.shadowRoot))
                }));
                if (o) e = e.filter((e => !e.getAttribute(i)))
                  .map((e => {
                    e.setAttribute(i, "true");
                    return e
                  }));
                return e
              };
              const s = l();
              if (s.length) t(s);
              if (!s.length || o) {
                const e = Kameleoon.Utils.setInterval((() => {
                  const n = l();
                  if (n.length) {
                    t(n);
                    !o && Kameleoon.Utils.clearInterval(e)
                  }
                }), 150)
              }
            }))
          }
        };
        this.Goals = {
          cancelConversion: (e, n) => {
            try {
              this.Goals.processConversions(e, n, !0)
            } catch (e) {}
          },
          processConversion: (e, n, t) => {
            try {
              this.Goals.processConversions(e, n, !1, t)
            } catch (e) {}
          },
          processConversions: (e, n, t, o) => {
            const a = Kameleoon.Analyst.Goals.get(e) ?? Kameleoon.Analyst.Goals.getList()
              .find((n => e == n.id || e === n.name));
            if (a) Kameleoon.Analyst.Goals.processConversions([{
              goal: a,
              revenue: n,
              negative: t,
              metadata: o
            }])
          }
        };
        this.Data = {
          readLocalData: e => Kameleoon.Internals.runtime.storedData.Vars[e] ? Kameleoon.Internals.runtime.storedData.Vars[e].value : null,
          resetCustomData: e => {
            this.Data.setCustomData(e, [], !0)
          },
          retrieveDataFromRemoteSource: (e, n) => {
            const t = Kameleoon.Internals.configuration.siteCode;
            const o = 100;
            const a = e => {
              const n = [];
              for (let t = 0; t < e.length; t += o) n.push(e.slice(t, t + o));
              return n
            };
            const r = e => new Promise((n => {
              Kameleoon.Utils.performBeaconServerCall(e, (e => {
                if (4 !== e.readyState) return;
                if (200 !== e.status) return n({});
                try {
                  n(JSON.parse(e.responseText))
                } catch {
                  n({})
                }
              }), null)
            }));
            if (!Array.isArray(e)) {
              const o = Kameleoon.Utils.addParameterToURL(`${Kameleoon.Internals.runtime.DATA_URL}/map/map`, Kameleoon.Utils.parseObjectToUrlParams({
                siteCode: t,
                key: encodeURIComponent(String(e))
              }), !1);
              return r(o)
                .then((e => n?.(e)))
            }
            if (!e.length) return n?.({});
            Promise.all(a(e)
                .map((e => {
                  const n = Kameleoon.Utils.addParameterToURL(`${Kameleoon.Internals.runtime.DATA_URL}/map/maps`, Kameleoon.Utils.parseObjectToUrlParams({
                    siteCode: t,
                    keys: encodeURIComponent(JSON.stringify(e))
                  }), !1);
                  return r(n)
                })))
              .then((e => {
                const t = Object.assign({}, ...e);
                n?.(t)
              }))
          },
          setCustomData: (e, n, t) => {
            if (Kameleoon.Internals.runtime && Kameleoon.Internals.runtime.gathererRun) {
              let o = null;
              for (const n in Kameleoon.Internals.runtime.Gatherer.configuration.customData) {
                const t = Kameleoon.Internals.runtime.Gatherer.configuration.customData[n];
                if (null != t && (t.name === e || n == e)) {
                  o = parseInt(n);
                  break
                }
              }
              if (null != o) Kameleoon.Gatherer.CustomData.register(o, {
                value: n,
                overwrite: t
              })
            }
          },
          writeLocalData: (e, n, t) => {
            Kameleoon.Internals.runtime.storedData.Vars[e] = {
              value: n,
              date: (new Date)
                .getTime() + 24 * 60 * 60 * 1e3 * (t ? 30 : 1 / 24)
            }
          },
          performRemoteSynchronization: (e, n, t) => {}
        };
        this.Events = {
          triggered: [],
          trigger: e => {
            this.Core.runWhenConditionTrue((() => !0 === Kameleoon.Internals.runtime.setupAfterLocalDataRetrieval), (() => {
              this.Events.triggered.push(e);
              if (Kameleoon.Analyst.Actions) Kameleoon.Analyst.Actions.processAllActions();
              if (Kameleoon.Targeting) Kameleoon.Targeting.processAllTargetings();
            }), 100)
          }
        };
        this.Tracking = {
          processOmniture: e => {
            Kameleoon.Tracking.processOmniture && Kameleoon.Tracking.processOmniture(e)
          }
        };
        this.Products = {
          obtainFullSearchProducts: (e, n, t) => {},
          obtainInstantSearchProducts: (e, n, t) => {},
          obtainProductInteractions: (e, n, t, o) => {
            const a = {};
            null != t && (a.timeBegin = t);
            null != o && (a.timeEnd = o);
            Kameleoon.Internals.runtime.Visitor.obtainProductData("productCounters", e, a, (e => {
              for (const n in e) {
                e[n].views = e[n].v || 0;
                e[n].cartQuantities = e[n].atcq || 0;
                e[n].boughtQuantities = e[n].bq || 0;
                delete e[n].v;
                delete e[n].atcq;
                delete e[n].bq
              }
              n(e)
            }))
          },
          obtainProductData: (e, n, t = {
            all: !0
          }) => {
            Kameleoon.Internals.runtime.Visitor.obtainProductData("productData", e, t, n)
          },
          obtainRecommendedProducts: (e, n, t, o) => {},
          obtainRecommendedCollections: (e, n, t) => {},
          trackAddToCart: (e, n, t = 1, o = {}) => {
            e = e.toString();
            if (null != e && e.length > 0)
              if (t > 0) {
                Kameleoon.Internals.runtime.RequestManager.sendProduct(e, `eventType=productAddToCart&quantity=${t}`);
              }
          },
          trackAddToWishList: (e, n = 1) => {},
          trackCategoryView: e => {},
          trackSearchQuery: e => {},
          trackProductView: (e, n) => {
            e = e.toString();
            if (null != e && e.length > 0) {
              const t = new APIProduct(e, n);
              Kameleoon.Internals.runtime.RequestManager.sendProduct(e, `eventType=productPage&${t.getTrackingParameters()}`);
              if (Kameleoon.Internals.runtime.gathererRun) Kameleoon.Gatherer.track(VisitEvent_Product, {
                ean: e
              });
              Kameleoon.Internals.runtime.product = t
            }
          },
          trackTransaction: (e, n = {}) => {
            for (let n = 0; n < e.length; ++n) {
              const o = e[n];
              o.productID = (o.productId || o.productID)
                .toString();
              if (null != o.productID && o.productID.length > 0) {
                o.quantity = parseInt(o.quantity) || 1;
                if (o.quantity > 0) Kameleoon.Internals.runtime.RequestManager.sendProduct(o.productID, `eventType=productBuy&quantity=${o.quantity}`)
              }
            }
          }
        };
        this.Experiments = new APIActions(0);
        this.Personalizations = new APIActions(1);
        this.Segments = new APITargeting(0);
        this.Triggers = new APITargeting(1);
        this.Variations = {
          execute: e => {
            let n = Kameleoon.Internals.runtime.variations.find((n => n.id == e));
            if (n) {
              n = new Variation(n);
              Kameleoon.Utils.addCSSStyleSheet(n.cssCode);
              return n.applyJavascriptCode(!0)
            }
            return null
          }
        };
        this.Utils = {
          addEventListener: function(e, n, t, o) {
            Kameleoon.Utils.addEventListener(e, n, t, o, !0)
          },
          addUniversalClickListener: function(e, n, t) {
            const o = Kameleoon.Internals.runtime.mouseDownEvent;
            this.addEventListener(e, o, (function(e) {
              if (!Kameleoon.Internals.runtime.touchMoveEvent && ("mousedown" == o || !e.target || !e.target.closest || !e.target.closest("[disabled]"))) n && n(e)
            }))
          },
          clearInterval: function() {
            Kameleoon.Utils.clearInterval.apply(Kameleoon.Utils, arguments)
          },
          clearTimeout: function() {
            Kameleoon.Utils.clearTimeout.apply(Kameleoon.Utils, arguments)
          },
          createHash: function(e) {
            return Kameleoon.Utils.computeStringHash.apply(Kameleoon.Utils, arguments)
          },
          getURLParameters: function() {
            return Kameleoon.Utils.parseParameters.apply(Kameleoon.Utils, arguments)
          },
          performRequest: (e, n, t, o = 5e3) => Kameleoon.Utils.performBeaconServerCall(e, n, t, o),
          querySelectorAll: function(e) {
            return Kameleoon.Utils.querySelectorAll.apply(Kameleoon.Utils, arguments)
          },
          setInterval: (e, n = 200) => Kameleoon.Utils.setInterval(e, n, !1, !0),
          setTimeout: (e, n = 200) => Kameleoon.Utils.setTimeout(e, n, !0)
        };
        Object.defineProperty(this.Utils, "mouseDownEvent", {
          enumerable: !0,
          get: function() {
            return Kameleoon.Internals.runtime.mouseDownEvent
          }
        });
        Object.defineProperty(this.Utils, "touchMoveEvent", {
          enumerable: !0,
          get: function() {
            return Kameleoon.Internals.runtime.touchMoveEvent
          }
        });
        Object.defineProperty(this, "Visitor", {
          enumerable: !0,
          get: function() {
            try {
              if (!Kameleoon.Internals.runtime) return {
                setVisitorCode: e => {
                  Kameleoon.Internals.configuration.predefinedVisitorCode = e
                }
              };
              else return new APIVisitor
            } catch (e) {
              return null
            }
          }
        });
        Object.defineProperty(this, "CurrentVisit", {
          enumerable: !0,
          get: function() {
            try {
              return new APIVisit(Kameleoon.Internals.runtime.Visitor.currentVisit)
            } catch (e) {
              return null
            }
          }
        })
      }
    }
    class Gatherer {
      constructor() {
        this.MAX_HREF_LENGTH_IN_A_REQUEST = 200;
        this.MAX_PAGE_TITLE_LENGTH_IN_A_REQUEST = 200
      }
      run() {
        let e = Kameleoon.Utils.clone(Kameleoon.Internals.configuration.Gatherer);
        if ("string" == typeof e) e = JSON.parse(Kameleoon.Utils.decodeString(e));
        Kameleoon.Internals.runtime.Gatherer = {
          configuration: e,
          active: !0,
          clicks: 0
        };
        this.Browser = new Browser(e.browsers);
        this.CustomData = new CustomData(e.customData);
        this.KeyPage = new KeyPage(e.keyPages);
        this.Language = new Language;
        this.OperatingSystem = new OperatingSystem(e.oss);
        this.Referrer = new Referrer(e.referrers);
        Kameleoon.Internals.runtime.storedData.saveField("Gatherer", "startsOfVisitForCurrentPage", 0);
        Kameleoon.Internals.runtime.Visitor = new Visitor;
        Kameleoon.Internals.runtime.RequestManager = new RequestManager;
        this.track(VisitEvent_Page);
        this.track(VisitEvent_StaticData);
        VisitEvent_Activity.initialize();
        this.CustomData.run();
        Kameleoon.Mentalist.run();
        Kameleoon.Internals.runtime.gathererRun = !0
      }
      startNewVisit(e, t) {
        Kameleoon.Internals.runtime.Visitor.updateFromStoredData(!0, !0, t);
        this.track(VisitEvent_Page);
        this.track(VisitEvent_StaticData);
        this.CustomData.run();
      }
      track(e, t) {
        new VisitEvent(e)
          .track(t)
      }
    }
    class KameleoonEngine {
      constructor() {
        this.Analyst = new Analyst;
        this.API = new API;
        this.Gatherer = new Gatherer;
        this.Loader = new Loader;
        this.Mentalist = new Mentalist;
        this.Targeting = new Targeting;
        this.Tracking = new Tracking;
        this.Utils = new Utils
      }
    }
    class Loader {
      constructor() {
        this.enableKameleoonEditorListener = () => {
          if (!Kameleoon.Internals.runtime.editorListenerEnabled) {
            Kameleoon.Internals.runtime.editorListenerEnabled = !0;
            const t = t => {
              if (!t) t = window.event;
              Kameleoon.Loader.listenKeys.call(Kameleoon.Loader, t)
            };
            Kameleoon.Utils.addEventListener(document, "keyup", t, !1)
          }
        };
        this.listenKeys = t => {
          if (t.shiftKey) {
            if (113 == t.keyCode && Kameleoon.Internals.configuration.webExperimentationSetup) {
              Kameleoon.Internals.runtime.editorMode = !0;
              Kameleoon.Analyst.loadKameleoonFull((() => {
                Kameleoon.Loader.enableKameleoonEditor.apply(Kameleoon.Loader)
              }), !0)
            }
            if (115 == t.keyCode && (Kameleoon.Internals.runtime.simulationMode || Kameleoon.Internals.runtime.parameters.kameleoonVariationSelection)) Kameleoon.Analyst.loadKameleoonFull((() => {
              Kameleoon.Loader.enableSimulationPanel()
            }), !0)
          }
        };
      }
    }
    class Mentalist {
      constructor() {
        this.MAX_VISIT_AGE = 90 * 24 * 60 * 60 * 1e3;
        this.computeVariationIdToScore = e => {
          try {
            let t = Kameleoon.Internals.configuration.MentalistFeatures;
            let n = Kameleoon.Internals.runtime.Visitor.currentVisit;
            let i = this.computePreviousVisits();
            let r = {};
            let o = this.computeVariationScore(e, null, n, i);
            if (null != o) r[0] = o;
            let a = t.experiments[e].variationIds;
            for (let t = 0, o = a.length; t < o; ++t) {
              let o = a[t];
              let l = this.computeVariationScore(e, o, n, i);
              if (null != l) r[o] = l
            }
            return r
          } catch (e) {
            return {}
          }
        };
        this.computeGoalConversionProbabilityPredictionByGoalId = e => {
          try {
            let t = Kameleoon.Internals.configuration.MentalistFeatures;
            let n = Kameleoon.Internals.configuration.MentalistLearner;
            let i;
            if (null == e) i = n.startOfVisitLearner;
            else {
              let t = n.targetingSegments[e];
              if (null == t) {
                i = n.startOfVisitLearner;
                e = null
              } else i = t.probabilityLearner
            }
            if (0 == i.trainingOutputVectorTargetNbUpdates) return {};
            let r = Kameleoon.Internals.runtime.Visitor.currentVisit;
            let o = this.computePreviousVisits();
            let a = {};
            let l = VisitVectorizationUtils.computeVector(r, o, a, !0, null != e, null, e);
            let s = Learner.computeProbabilities(i, l, a);
            let u = i.trainingOutputVectorTargetMean;
            let m = (null == e ? t : t.targetingSegments[e])
              .outputGoalIds;
            let c = {};
            for (let e = 0, t = m.length; e < t; ++e) c[m[e]] = this.computeConversionProbability(u[e], s[e]);
            return c
          } catch (e) {
            return {}
          }
        };
        this.computePreviousVisits = () => new PreviousVisits(Kameleoon.Internals.runtime.Visitor.visits.slice(0, -1)
          .slice(-Kameleoon.Internals.configuration.MentalistFeatures.maxNumberPreviousVisits)
          .filter((e => (new Date)
            .getTime() - e.startDate <= this.MAX_VISIT_AGE)));
        this.computeVariationScore = (e, t, n, i) => {
          let r = Kameleoon.Internals.configuration.MentalistFeatures;
          let o = Kameleoon.Internals.configuration.MentalistLearner;
          let a = o.experiments[e].variationIdToProbabilityLearner[t];
          if (0 == a.trainingOutputVectorTargetNbUpdates) return null;
          let l = {};
          let s = VisitVectorizationUtils.computeVector(n, i, l, !0, !0, e, null);
          let u = Learner.computeProbabilities(a, s, l);
          let m = r.experiments[e].outputGoalWeights;
          let c = 0;
          for (let e = 0, t = m.length; e < t; ++e) c += m[e] * this.computeConversionProbability(a.trainingOutputVectorTargetMean[e], u[e]);
          return c
        };
        this.computeConversionProbability = (e, t) => {
          if (0 == t) return 0;
          if (1 == t) return 1;
          if (t >= e) return .5 + (t - e) / (1 - e) / 2;
          return .5 + (t - e) / e / 2
        };
        this.saveScoresFromMoments = e => {
          const t = Kameleoon.Mentalist.computeGoalConversionProbabilityPredictionByGoalId(e);
          const n = Kameleoon.Internals.runtime.storedData.obtainField("Gatherer", "savedScoresFromMoments", {});
          const i = Kameleoon.Internals.configuration.targetingSegmentIdToGoalIdsToKcs || {};
          if (i[e]) {
            for (let r in i[e]) {
              if (null == n[e]) n[e] = {};
              if (null == n[e][r]) n[e][r] = t[r]
            }
            if (i[e]) Kameleoon.Utils.sendKameleoonCustomEvent.call(window, "ConversionScoreComputed", {
              segmentId: e
            })
          }
          Kameleoon.Internals.runtime.storedData.saveField("Gatherer", "savedScoresFromMoments", n)
        };
        this.targetingSegmentsPredictions = {}
      }
      isSecure() {
        return null != Kameleoon.Internals.configuration.MentalistFeatures && null != Kameleoon.Internals.configuration.MentalistLearner
      }
      run() {
        Kameleoon.Internals.runtime.mentalistRun = this.isSecure();
        if (Kameleoon.Internals.runtime.Gatherer.startOfVisit && Kameleoon.Internals.runtime.mentalistRun && Kameleoon.Internals.configuration.track) {
          let e = this.computeGoalConversionProbabilityPredictionByGoalId(null);
          if (!Kameleoon.Utils.testEmptyMap(e)) Kameleoon.Internals.runtime.storedData.saveField("Gatherer", "savedScoresFromMoments", {
            0: e
          })
        }
      }
    }
    class Runtime {
      constructor(e, t) {
        this.isReloaded = e;
        this.DATA_URL = Kameleoon.Internals.configuration.DATA_URL;
        this.PAGE_LOADED_POLL_DELAY = 250;
        this.PAGE_LOADING_POLL_DELAY = 75;
        this.enableSinglePageSupport = () => {
          this.singlePageSupport = !0;
          this.href = window.location.href;
          KMutationObserver.setMutationObserverSPA();
          Kameleoon.Utils.setInterval((() => {
            const e = this.href;
            this.href = window.location.href;
            if (e != this.href) {
              Kameleoon.Gatherer.Referrer.update(e);
              Kameleoon.Analyst.load.apply(this, [])
            }
          }), 100)
        };
        this.enableDynamicRefresh = () => {
          this.dynamicRefresh = !0;
          KMutationObserver.setMutationObserverSPA()
        };
        this.executeGlobalScript = () => {
          if (!this.editorMode && !this.kameleoonSelectionIframeMode) {
            if (Kameleoon.Internals.configuration.globalScript && !this.globalScriptProcessed) {
              Kameleoon.Utils.sendKameleoonCustomEvent("Internals", {
                type: "globalScript"
              });
              this.globalScriptProcessed = !0;
              Kameleoon.Utils.runProtectedScript(Kameleoon.Internals.configuration.globalScript, "kameleoonGlobalScript.js")
            }
            this.Campaigns.obtainCampaignsList(0)
              .forEach((e => e.executeGlobalScript()));
          }
        };
        this.initializePredefinedVisitorCode = () => {
          const {
            predefinedVisitorCode: e,
            experiments: t,
            personalizations: o
          } = Kameleoon.Internals.configuration;
          if (e) {
            const n = Kameleoon.Utils.readLocalData("kameleoonVisitorCode", "COOKIE") || Kameleoon.Utils.readLocalData("kameleoonVisitorCode", "LS");
            if (n == e) return;
            const i = this.storedData.Visitor.visits;
            if (i) i.slice(-1)[0].visitorCode = e;
            if (this.incomingStoredData) this.incomingStoredData["kameleoonVisitorCode"] = e;
            Kameleoon.Utils.saveVisitorCode(e);
            t.forEach((e => {
              Kameleoon.Utils.eraseLocalData("kameleoonExperiment-" + e.id, null, "LS")
            }));
          }
        };
        this.initializeActions = () => {
          if (Kameleoon.Internals.configuration.webExperimentationSetup) {
            this.targetingSegments = Kameleoon.Utils.clone(Kameleoon.Internals.configuration.targetingSegments);
            this.targetingTriggers = Kameleoon.Utils.clone(Kameleoon.Internals.configuration.targetingTriggers || []);
            this.variations = Kameleoon.Utils.clone(Kameleoon.Internals.configuration.variations);
            Kameleoon.Internals.configuration.experiments.forEach((e => {
              this.Campaigns.addCampaign(new Experiment(e, this.incomingStoredData))
            }));
          }
        };
        this.initializeActionsAfterGatherer = () => {};
        this.initializeIdleTimeListener = () => {};
        this.initializeListeners = () => {
          Kameleoon.Utils.domReady((() => {
            this.domReady = !0;
            if (!0 !== Kameleoon.Internals.configuration.disableEditorLaunchViaKeys) Kameleoon.Loader.enableKameleoonEditorListener();
            if (this.kameleoonSelectionIframeMode) {
              const e = document.createElement("script");
              e.setAttribute("type", "text/javascript");
              e.setAttribute("charset", "utf-8");
              e.setAttribute("src", "https://back-office-redesign." + Kameleoon.Internals.configuration.DOMAIN + "/get-script?type=selection");
              this.headNode.appendChild(e)
            }
            if (0 == window.kameleoonLightIframe && window.kameleoonIframeURL)
              if (this.Gatherer.startOfVisit) Kameleoon.Utils.setTimeout((() => {
                const e = document.createElement("iframe");
                e.src = window.kameleoonIframeURL;
                e.id = "kameleoonExternalIframe";
                e.style.cssFloat = "left !important";
                e.style.opacity = "0.0 !important";
                e.width = "0px";
                e.height = "0px";
                e.onload = () => {
                  e.parentNode.removeChild(e)
                };
                document.head.appendChild(e)
              }), 5e3)
          }));
          if ("touchend" == this.mouseDownEvent) {
            Kameleoon.Utils.addEventListener(document, "touchmove", (e => {
              this.touchMoveEvent = !0
            }));
            Kameleoon.Utils.addEventListener(document, "touchstart", (e => {
              this.touchMoveEvent = !1
            }))
          }
          if (!this.iframeLocalStorage) window.addEventListener("storage", (e => {
            const t = e.key?.split("-") ?? [""];
            let o = t[0];
            if (!o.startsWith("kameleoon")) return;
            let n;
            try {
              n = null == e.newValue ? null : JSON.parse(e.newValue)
                .value
            } catch (e) {
              return
            }
            try {
              if (e.oldValue && JSON.parse(e.oldValue)
                .value === n) return
            } catch (e) {}
            const i = {};
            switch (o) {
              case "kameleoonExperiment":
                i.type = o;
                const e = t[1];
                i.experimentId = parseInt(e);
                let a;
                if (null == n) a = null;
                else {
                  const e = n.split("/")[0];
                  a = isNaN(e) ? e : parseInt(e)
                }
                i.registeredVariationId = a;
                break;
              case "kameleoonGlobalPersonalizationExposition":
                i.type = o;
                i.active = null == n ? null : "true" == n.split("/")[0];
                break;
              case this.dataKeyName:
              case "kameleoonSimulationVisitorData":
                i.type = o;
                i.value = null == n ? null : n;
                break;
              case "kameleoonLegalConsent":
                i.type = o;
                i.saveLegalConsent = null == n ? null : n;
                break
            }
            if (null != i.type) Kameleoon.Utils.processStorageData(i)
          }), !1);
        };
        this.loadExternalRequests = () => {
          this.Geolocation = "function" === typeof KGeolocation ? new KGeolocation : null;
          this.Weather = "function" === typeof KWeather ? new KWeather : null;
          this.IP = "function" === typeof KIP ? new KIP : null;
        };
        this.loadProductRecommendation = () => {};
        this.processPageLoaded = () => {
          Kameleoon.Utils.removeBlockingStyleSheet();
          for (let e = 0, t = this.variations.length; e < t; ++e) {
            const t = "enginePollerForVariation" + this.variations[e].id;
            if (this[t]) {
              if (this.cantUseMutationObserver) window.clearInterval(this[t]);
              this[t] = null
            }
          }
        };
        this.setup = () => {
          const e = "adBlockerCheck";
          const t = Kameleoon.Utils.setInterval((() => {
            let o = document.getElementById(e);
            if (null == o && document.body) {
              o = document.createElement("div");
              o.id = e;
              o.className = "ad-placement";
              document.body.appendChild(o)
            }
            if (null != o && 0 == o.clientWidth) {
              this.adBlocker = !0;
              Kameleoon.Utils.clearInterval(t)
            }
          }), 250);
          const o = Kameleoon.Utils.setTimeout((() => {
            Kameleoon.Utils.clearTimeout(o);
            const n = document.getElementById(e);
            if (null != n) n.parentNode.removeChild(n);
            if (null == this.adBlocker) {
              Kameleoon.Utils.clearInterval(t);
              this.adBlocker = !1
            } else Kameleoon.Gatherer.track(VisitEvent_AdBlocker)
          }), 2e3);
          Kameleoon.Utils.addEventListener(window, "pageshow", (e => {
            if (e.persisted) this.updateAfterPageCached()
          }));
          this.Visitor.updateFromStoredData(!1, !1, !1);
          if (!Kameleoon.Internals.configuration.requestsAfterConsent) this.loadExternalRequests();
          KMutationObserver.setMutationObserver();
          Kameleoon.Analyst.loadKameleoonFull((() => {
            Kameleoon.Analyst.loadSimulation()
          }));
          Kameleoon.Analyst.Actions.processAllActions();
          Kameleoon.Targeting.processAllTargetings();
          Kameleoon.Analyst.Goals.run()
        };
        this.setupLocalData = e => {
          Kameleoon.Utils.addEventListener(window, "message", Kameleoon.Utils.processMessageEvent, !1);
          if (this.iframeLocalStorage) {
            this.immediateSaveActive = !0;
            this.externalIframe = document.getElementById("kameleoonExternalIframe") || window.kameleoonExternalIframe;
            this.postMessageOrigin = window.kameleoonIframeOrigin || "";
            this.postMessageCallbacks = {};
            if (null == Kameleoon.Internals.configuration.externalIframeData) Kameleoon.Utils.postMessageToExternalIframe("retrieve", null, null, (t => {
              this.incomingStoredData = t;
              e()
            }));
            else {
              this.incomingStoredData = Kameleoon.Internals.configuration.externalIframeData;
              e();
              delete Kameleoon.Internals.configuration.externalIframeData
            }
          } else {
            this.incomingStoredData = null;
            this.clearOutdatedStorage();
            e()
          }
        };
        this.updateAfterPageCached = () => {
          this.pageCached = !0;
          if (this.iframeLocalStorage) Kameleoon.Utils.postMessageToExternalIframe("retrieve", null, null, (() => {}));
          else {
            const e = Kameleoon.Utils.readLocalData(this.simulationMode ? "kameleoonSimulationVisitorData" : this.dataKeyName, "LS", !0);
            this.storedData.update(e);
            this.Visitor.updateFromStoredData(!1, !1, !1);
            Kameleoon.Gatherer.track(VisitEvent_Page);
            Kameleoon.Gatherer.track(VisitEvent_StaticData)
          }
        };
        this.clearOutdatedStorage = () => {
          try {
            for (let e = 0, t = localStorage.length; e < t; e++) {
              const t = localStorage.key(e);
              if (t.startsWith("kameleoon") && !t.startsWith("kameleoonData")) {
                const e = JSON.parse(localStorage.getItem(t));
                if (this.pageStartTime > (e.date || e.expirationDate)) localStorage.removeItem(t)
              }
            }
          } catch (e) {}
        };
        this.getSimulationMode = () => {
          const e = this.readFromStorageOrExternal("kameleoonSimulation", "LS");
          return e ? !0 : !1
        };
        this.processSelectorPresence = ({
          selector: e,
          slowQueue: t,
          pollingInterval: o,
          isDynamicElement: n,
          useAntiFlicker: i,
          callback: a
        }) => {
          const s = Kameleoon.Utils.querySelectorAll(e);
          const r = a;
          if (Kameleoon.Internals.runtime.querySelectorAllHasError) return;
          const l = t ? Kameleoon.Internals.runtime.waitingSlowElementPresentObjects : Kameleoon.Internals.runtime.waitingElementPresentObjects;
          const m = t ? Kameleoon.Internals.runtime.waitingSlowDynamicElements : Kameleoon.Internals.runtime.waitingDynamicElements;
          if (n) a = t => {
            KMutationObserver.setMutationObserverSPA();
            const o = `data-kameleoon-dynamic-class-${Kameleoon.Utils.obtainRandomString(4)}`;
            const n = e => {
              e.forEach((e => e.setAttribute(o, "true")))
            };
            n(t);
            r(t);
            m.push({
              selector: e,
              attribute: o,
              callback: e => {
                n(e);
                r(e)
              }
            })
          };
          if (s.length > 0) {
            Kameleoon.Utils.runProtectedFunction((() => {
              a(s)
            }), !0);
            return
          }
          if (Kameleoon.Internals.runtime.cantUseMutationObserver || !i) {
            const t = Kameleoon.Utils.setInterval((() => {
              const o = Kameleoon.Utils.querySelectorAll(e);
              if (o.length > 0) {
                Kameleoon.Utils.clearInterval(t);
                Kameleoon.Utils.runProtectedFunction((() => {
                  a(o)
                }), !0)
              }
            }), o || 250, !0);
            return
          } else {
            l.push({
              selector: e,
              callback: a,
              useAntiFlicker: i
            })
          }
        };
        this.pageStartTime = (new Date)
          .getTime();
        this.dataKeyName = "kameleoonData";
        this.Device = new Device;
        this.deviceType = this.Device.type;
        this.parameters = Kameleoon.Utils.parseParameters();
        this.beforeUnloadEvent = "Phone" === this.deviceType && "Safari" === this.Device.browser ? "pagehide" : "beforeunload";
        this.headNode = document.getElementsByTagName("head")[0];
        this.editorMode = "true" == this.parameters.kameleoon;
        this.proxyMode = "proxy." + Kameleoon.Internals.configuration.DOMAIN === window.location.hostname;
        this.disableCache = "true" == this.parameters.kameleoonDisableCache || this.parameters.kameleoonVariationId;
        this.kameleoonSelectionIframeMode = "true" == this.parameters.kameleoonSelectionIframeMode;
        this.useBroadcastChannel = "function" === typeof window.BroadcastChannel;
        this.iframeLocalStorage = Kameleoon.Internals.configuration.useWideDomainSupport;
        this.useWideDomainSupport = Kameleoon.Internals.configuration.useWideDomainSupport || null != window.kameleoonLightIframe;
        if (!window.kameleoonLightIframe) this.iframeLocalStorage = !1;
        if (!this.useBroadcastChannel) this.immediateSaveActive = !0;
        this.tabId = Kameleoon.Utils.secureSessionStorage("getItem", "kameleoonTabId");
        if (!this.tabId) {
          this.tabId = Kameleoon.Utils.obtainRandomString(8, Analyst.HEXADECIMAL_ALPHABET);
          this.tabIdCreated = !0
        }
        this.mouseDownEvent = "ontouchend" in document.documentElement ? "touchend" : "mousedown";
        this.addedClasses = {};
        this.addedIDs = {};
        this.eventListeners = [];
        this.listenVariations = [];
        this.listenSpaCallbacks = [];
        this.waitingElementPresentObjects = [];
        this.waitingSlowElementPresentObjects = [];
        this.waitingDynamicElements = [];
        this.waitingSlowDynamicElements = [];
        this.variations = [];
        this.intervalIds = {};
        this.targetingSegments = [];
        this.targetingTriggers = [];
        this.timeoutIds = {};
        this.cantUseMutationObserver = "undefined" == typeof MutationObserver;
        this.Campaigns = new Campaigns;
        this.Consent = new Consent;
        Kameleoon.Analyst.Goals.addList(Kameleoon.Internals.configuration.goals);
        if (e && Kameleoon.Gatherer.Referrer && Kameleoon.Gatherer.Referrer.isUpdated) this.prevSpaPage = Kameleoon.Gatherer.Referrer.obtain();
        try {
          if (window.self !== window.top) this.isIframe = !0
        } catch (e) {}
        if (t?.localDataMap) this.localDataMap = t.localDataMap;
        Object.defineProperty(this, "experiments", {
          get() {
            return this.Campaigns.obtainCampaignsList(0)
          }
        });
        Object.defineProperty(this, "personalizations", {
          get() {
            return this.Campaigns.obtainCampaignsList(1)
          }
        });
        Object.defineProperty(this, "goals", {
          get: () => Kameleoon.Analyst.Goals.getList()
        })
      }
      clear() {
        this.eventListeners.forEach((e => {
          let t;
          if ("window" == e.elementKey || "document" == e.elementKey) t = "window" == e.elementKey ? window : document;
          else {
            t = document.querySelector(`[kameleoonListener-${e.elementKey}=true]`);
            if (t) t.removeAttribute(`kameleoonListener-${e.elementKey}`)
          }
          if (t) t.removeEventListener(e.eventType, e.actionFunction, e.useCapture)
        }));
        this.waitingDynamicElements.forEach((e => {
          Kameleoon.Utils.querySelectorAll(`[${e.attribute}=true]`)
            .forEach((t => {
              t.removeAttribute(e.attribute)
            }))
        }));
        for (const e in this.timeoutIds) Kameleoon.Utils.clearTimeout(parseInt(e));
        for (const e in this.intervalIds) Kameleoon.Utils.clearInterval(parseInt(e));
        this.RequestManager?.processRequests();
        this.storedData?.save(2);
        this.mutationObserver?.disconnect();
        this.mutationObserverSpa?.disconnect();
        try {
          this.broadcastSynchranization?.close()
        } catch {}
        if (Kameleoon.Targeting) Kameleoon.Targeting.clear?.();
        Kameleoon.Tracking?.clear?.();
        Kameleoon.Analyst.Actions?.clear?.();
        let e = Kameleoon.Utils.querySelectorAll("[id^='kameleoonElement'], [id*='kameleoonScenarioLayerBase'], [id^='kameleoonStyleSheet'], [class*='kameleoonWidget'], [class*='kameleoonInsert']");
        for (let t = 0; t < e.length; ++t) e[t].parentNode.removeChild(e[t]);
        e = Kameleoon.Utils.querySelectorAll("[id^='kameleoonId'], .kameleoonOverlay");
        for (let t = 0; t < e.length; ++t) e[t].removeAttribute("id");
        e = Kameleoon.Utils.querySelectorAll("[class^='kameleoonClass']");
        for (let t = 0; t < e.length; ++t) e[t].removeAttribute("class");
        Kameleoon.API.Events.triggered = []
      }
      readFromStorageOrExternal(e, t) {
        if (this.incomingStoredData) return this.incomingStoredData[e];
        else return Kameleoon.Utils.readLocalData(e, t, !0)
      }
      run() {
        this.running = !0;
        Kameleoon.Utils.removeBlockingStyleSheet();
        this.setupLocalData((() => {
          this.simulationMode = this.getSimulationMode();
          this.storedData = new StoredData(this.incomingStoredData);
          this.Consent.setup();
          this.initializePredefinedVisitorCode();
          this.initializeActions();
          Kameleoon.Gatherer.run();
          this.initializeActionsAfterGatherer();
          this.executeGlobalScript();
          window.kameleoonQueue = new CommandQueue(window.kameleoonQueue);
          Kameleoon.Utils.sendKameleoonCustomEvent.call(window, "Started", {
            newVisitorCode: 1 === this.Visitor.visits.length
          });
          this.initializeListeners();
          this.setup();
          this.setupAfterLocalDataRetrieval = !0
        }))
      }
    }
    class Utils {
      constructor() {
        this.events = [];
        this.addParameterToURL = (e, t, n) => {
          if (n) return e + (-1 == e.indexOf("#") ? "#" : "&") + t;
          let a = "";
          if (-1 != e.indexOf("#")) {
            a = e.substr(e.indexOf("#"));
            e = e.substr(0, e.indexOf("#"))
          }
          e += (-1 == e.indexOf("?") ? "?" : "&") + t + a;
          return e
        };
        this.computeCurrentPageAbsoluteURLNoProxyMode = function() {
          let e = Kameleoon.Internals.runtime;
          if (null == e.currentPageAbsoluteURLNoProxyMode) {
            if (e.proxyMode) {
              let t = e.parameters.kameleoonExperimentId || e.parameters["kameleoon-experiment-id"];
              if (null != t) {
                let n = e.Campaigns.obtainCampaign(t, !0);
                if (n) e.currentPageAbsoluteURLNoProxyMode = n.baseURL
              }
            }
            if (null == e.currentPageAbsoluteURLNoProxyMode) e.currentPageAbsoluteURLNoProxyMode = window.location.href
          }
          return e.currentPageAbsoluteURLNoProxyMode
        };
        this.computeCurrentPageCanonicalURL = () => {
          if (null == Kameleoon.Internals.runtime.currentPageCanonicalURL) {
            let e = this.querySelectorAll('link[rel="canonical"]');
            if (e.length > 0) Kameleoon.Internals.runtime.currentPageCanonicalURL = e[0].href
          }
          return Kameleoon.Internals.runtime.currentPageCanonicalURL
        };
        this.computeCurrentPageCleanRelativeURL = () => {
          if (null == Kameleoon.Internals.runtime.currentPageCleanRelativeURL) Kameleoon.Internals.runtime.currentPageCleanRelativeURL = this.computeRelativeURL(this.computeCurrentPageCleanAbsoluteURL());
          return Kameleoon.Internals.runtime.currentPageCleanRelativeURL
        };
        this.computeIfSuffix = (e, t) => {
          let n = e.length - t.length;
          let a = e.lastIndexOf(t, n);
          return a >= 0 && a == n
        };
        this.computeRelativeURL = e => {
          let t = document.createElement("a");
          t.href = e;
          return t.pathname + t.search + t.hash
        };
        this.computeStringSha256 = e => {
          let t = 1,
            n, a = [],
            o = [];
          while (++t < 18)
            for (n = t * t; n < 312; n += t) a[n] = 1;

          function r(e, t) {
            return Math.pow(e, 1 / t) % 1 * 4294967296 | 0
          }
          for (t = 1, n = 0; t < 313;)
            if (!a[++t]) {
              o[n] = r(t, 2);
              a[n++] = r(t, 3)
            }
          function l(e, t) {
            return e >>> t | e << 32 - t
          }
          let i = o.slice(t = 0),
            s = this.encodeUTF8(e),
            u = [],
            m = s.length,
            c = [],
            d, f, h;
          for (; t < m;) c[t >> 2] |= (255 & s.charCodeAt(t)) << 8 * (3 - t++ % 4);
          m *= 8;
          c[m >> 5] |= 128 << 24 - m % 32;
          c[h = m + 64 >> 5 | 15] = m;
          for (t = 0; t < h; t += 16) {
            d = i.slice(n = 0, 8);
            for (; n < 64; d[4] += f) {
              if (n < 16) u[n] = c[n + t];
              else u[n] = (l(f = u[n - 2], 17) ^ l(f, 19) ^ f >>> 10) + (0 | u[n - 7]) + (l(f = u[n - 15], 7) ^ l(f, 18) ^ f >>> 3) + (0 | u[n - 16]);
              let e;
              d.unshift((f = (d.pop() + (l(e = d[4], 6) ^ l(e, 11) ^ l(e, 25)) + ((e & d[5] ^ ~e & d[6]) + a[n]) | 0) + (0 | u[n++])) + (l(m = d[0], 2) ^ l(m, 13) ^ l(m, 22)) + (m & d[1] ^ d[1] & d[2] ^ d[2] & m))
            }
            for (n = 8; n--;) i[n] = d[n] + i[n]
          }
          for (s = ""; n < 63;) s += (i[++n >> 3] >> 4 * (7 - n % 8) & 15)
            .toString(16);
          return s
        };
        this.computeURLNoKameleoonParameters = e => {
          let t = !1;
          for (let n in Kameleoon.Internals.runtime.parameters)
            if (-1 != n.indexOf("kameleoon")) {
              t = !0;
              e = e.replace(new RegExp(n + "=" + Kameleoon.Internals.runtime.parameters[n] + "&?"), "")
            } return t ? e.replace(/\?$/, "") : e
        };
        this.computeURLRegExpNoKameleoonParameters = e => e ? e.replace(/(\\\?|&|#)kameleoon[^&#()]*/g, "") : null;
        this.decodeString = e => {
          let t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let n = "";
          let a, o, r;
          let l, i, s, u;
          let m = 0;
          e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
          while (m < e.length) {
            l = t.indexOf(e.charAt(m++));
            i = t.indexOf(e.charAt(m++));
            s = t.indexOf(e.charAt(m++));
            u = t.indexOf(e.charAt(m++));
            a = l << 2 | i >> 4;
            o = (15 & i) << 4 | s >> 2;
            r = (3 & s) << 6 | u;
            n += String.fromCharCode(a);
            if (64 != s) n += String.fromCharCode(o);
            if (64 != u) n += String.fromCharCode(r)
          }
          n = this.decodeUTF8(n);
          return n
        };
        this.decodeUTF8 = e => {
          let t = "";
          let n = 0;
          let a = 0,
            o = 0,
            r;
          while (n < e.length) {
            a = e.charCodeAt(n);
            if (a < 128) {
              t += String.fromCharCode(a);
              n++
            } else if (a > 191 && a < 224) {
              o = e.charCodeAt(n + 1);
              t += String.fromCharCode((31 & a) << 6 | 63 & o);
              n += 2
            } else {
              o = e.charCodeAt(n + 1);
              r = e.charCodeAt(n + 2);
              t += String.fromCharCode((15 & a) << 12 | (63 & o) << 6 | 63 & r);
              n += 3
            }
          }
          return t
        };
        this.domReady = e => {
          if ("complete" == document.readyState || "interactive" == document.readyState) return e();
          else {
            let t = !1;
            this.addEventListener(document, "DOMContentLoaded", (() => {
              if (t) return;
              t = !0;
              e()
            }), !1);
            this.addEventListener(window, "load", (() => {
              if (t) return;
              t = !0;
              e()
            }), !1)
          }
        };
        this.encodeString = e => {
          let t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let n = "";
          let a, o, r, l, i, s, u;
          let m = 0;
          e = this.encodeUTF8(e);
          while (m < e.length) {
            a = e.charCodeAt(m++);
            o = e.charCodeAt(m++);
            r = e.charCodeAt(m++);
            l = a >> 2;
            i = (3 & a) << 4 | o >> 4;
            s = (15 & o) << 2 | r >> 6;
            u = 63 & r;
            if (isNaN(o)) s = u = 64;
            else if (isNaN(r)) u = 64;
            n = n + t.charAt(l) + t.charAt(i) + t.charAt(s) + t.charAt(u)
          }
          return n
        };
        this.encodeUTF8 = e => {
          e = e.replace(/\r\n/g, "\n");
          let t = "";
          for (let n = 0; n < e.length; n++) {
            let a = e.charCodeAt(n);
            if (a < 128) t += String.fromCharCode(a);
            else if (a > 127 && a < 2048) {
              t += String.fromCharCode(a >> 6 | 192);
              t += String.fromCharCode(63 & a | 128)
            } else {
              t += String.fromCharCode(a >> 12 | 224);
              t += String.fromCharCode(a >> 6 & 63 | 128);
              t += String.fromCharCode(63 & a | 128)
            }
          }
          return t
        };
        this.forceNoFlicker = e => {
          let t = document.createElement("style");
          t.setAttribute("id", "kameleoonPageLoading");
          t.setAttribute("rel", "stylesheet");
          t.setAttribute("type", "text/css");
          t.setAttribute("media", "screen");
          let n = e + " { visibility: hidden !important; background-image: none !important; }";
          t.appendChild(document.createTextNode(n));
          Kameleoon.Internals.runtime.headNode.appendChild(t)
        };
        this.getLocale = e => {
          let t = Kameleoon.Gatherer.Language.obtainLocaleTag()
            .substring(0, 2);
          if (e && "fr" != t) t = "en";
          return t
        };
        this.obtainComputedStyle = e => {
          if (window.getComputedStyle) return getComputedStyle(e, "");
          return null
        };
        this.obtainCurrentRootDomain = () => {
          if (null == Kameleoon.Internals.runtime.currentRootDomain) {
            const e = window.location.hostname.split(".");
            const t = e.length - 1;
            const n = "testRootDomain";
            const a = "_detectRootDomain";
            let o = e[t];
            for (let r = t - 1; r >= 0; r--) {
              o = e[r] + "." + o;
              this.createLocalData(a, n, 1, o, "COOKIE", !1, void 0, !0);
              const t = this.readLocalData(a, "COOKIE", !1);
              if (t) {
                this.eraseLocalData(a, o, "COOKIE");
                Kameleoon.Internals.runtime.currentRootDomain = o;
                break
              }
            }
          }
          return Kameleoon.Internals.runtime.currentRootDomain
        };
        this.obtainRandomString = (e, t = Analyst.CODE_ALPHABET) => {
          let n = t.length;
          let a = "";
          for (let o = 0; o < e; ++o) {
            let e = Math.floor(Math.random() * n);
            a += t.substring(e, e + 1)
          }
          return a
        };
        this.parseHostName = e => {
          let t = document.createElement("a");
          t.href = e;
          return t.hostname
        };
        this.processRedirect = (e, t, n) => {
          if (window.location.href != e) {
            t = t || Kameleoon.Analyst.Actions.currentAction;
            let a = document.createElement("a");
            a.href = e;
            if (!Kameleoon.Internals.runtime.useWideDomainSupport && -1 == window.location.href.indexOf(a.protocol + "//" + a.hostname)) {
              if (t) e = this.addParameterToURL(e, "kameleoonRedirect-" + t.id + "=" + t.associatedVariation.id, !0)
            } else if (t) this.createLocalData("kameleoonRedirect-" + t.id, t.associatedVariation.id, 1, null, null, !1, null, !0);
            if (window.location.href != e) {
              this.forceNoFlicker("*");
              this.createLocalData("kameleoonReferrer", Kameleoon.Gatherer.Referrer.obtain(), 1 / 24, null, "COOKIE", !1);
              if (n) Kameleoon.Internals.runtime.redirectInProcess = !0;
              window.location.replace(e)
            }
          }
        };
        this.processStorageData = e => {
          if (Kameleoon.Internals.runtime.setupAfterLocalDataRetrieval) switch (e.type) {
            case "kameleoonExperiment":
              const t = Kameleoon.Internals.runtime.Campaigns.obtainCampaign(e.experimentId, !0);
              if (t) t.registeredVariationId = e.registeredVariationId;
              break;
            case "kameleoonGlobalPersonalizationExposition":
              Kameleoon.Internals.runtime.personalizationsActive = e.active;
              break;
            case Kameleoon.Internals.runtime.dataKeyName:
            case "kameleoonSimulationVisitorData":
              if (e.type == Kameleoon.Internals.runtime.dataKeyName && !Kameleoon.Internals.runtime.simulationMode || "kameleoonSimulationVisitorData" == e.type && Kameleoon.Internals.runtime.simulationMode) {
                if (Kameleoon.Internals.runtime.pageCached) Kameleoon.Internals.runtime.storedData.update(this.readLocalData(e.type, "LS", !0));
                else Kameleoon.Internals.runtime.storedData.update(JSON.parse(this.unobfuscateString(e.value)));
                Kameleoon.Internals.runtime.Visitor.updateFromStoredData(!1, !1, !1)
              }
              break;
            case "kameleoonLegalConsent":
              if (e.saveLegalConsent) {
                let t = e => e ? "enable" : "disable";
                if (null != e.saveLegalConsent.AB_TESTING) {
                  let n = t(e.saveLegalConsent.AB_TESTING);
                  Kameleoon.Internals.runtime.Consent[n]("AB_TESTING", !0)
                }
                if (null != e.saveLegalConsent.PERSONALIZATION) {
                  let n = t(e.saveLegalConsent.PERSONALIZATION);
                  Kameleoon.Internals.runtime.Consent[n]("PERSONALIZATION", !0)
                }
              }
              break
          }
        };
        this.querySelectorAll = (e, t) => {
          Kameleoon.Internals.runtime.querySelectorAllHasError = !1;
          let n = !1,
            a, o = [],
            r = [];
          if (null == t) t = document;
          let l = e.match(/#([0-9]+.*)(?: |$)/);
          if (l) {
            let t = e.charAt(1);
            e = e.replace("#" + t, "#\\3" + t + " ")
          }
          if ("" !== e) {
            if (-1 !== e.indexOf("[") && -1 === e.indexOf("']") && -1 === e.indexOf('"]')) {
              let t = e.split(/(?=\.)|(?=#)|(?=\[)/),
                n, a, o;
              t.forEach((function(t) {
                if ("[" === t[0] && -1 === t.indexOf("']") && -1 === e.indexOf('"]') && -1 !== e.indexOf("=")) {
                  n = t.split(/=(.+)?/);
                  a = n[1];
                  a = a.substring(0, a.length - 1);
                  o = n[0] + "='" + a + "']";
                  e = e.replace(t, o)
                }
              }))
            }
            if (-1 !== e.indexOf(":contains")) {
              n = !0;
              a = this.treatContainsSelector(e);
              e = a.newSelector
            }
            if (t && t.querySelectorAll)
              if (-1 !== e.indexOf(":eq")) o = this.treatEqSelector(e, t);
              else try {
                o = t.querySelectorAll(e)
              } catch (e) {
                Kameleoon.Internals.runtime.querySelectorAllHasError = !0;
                o = []
              }
            for (let e = 0, t = o.length; e < t; ++e)
              if (n) {
                if (a.check(a.containText, o[e])) r.push(o[e])
              } else r.push(o[e])
          }
          return r
        };
        this.runProtectedFunction = (e, t) => {
          try {
            e()
          } catch (e) {
            if (t) console.log(e);
            else this.Logger.send(e, "kameleoon.js");
            if (Kameleoon.Internals.runtime && t) Kameleoon.Internals.runtime.processPageLoaded()
          }
        };
        this.runProtectedScript = (e, t, n) => {
          if (n) return n();
          if (e) {
            let n = null;
            try {
              let a = t ? "//# sourceURL=" + t : "";
              n = eval.call(window, "(function () {\n" + e + "\n})();" + a)
            } catch (e) {
              n = null;
              console.log(e)
            }
            return n
          }
          return null
        };
        this.saveVisitorCode = (e, t = !0) => {
          if (Kameleoon.Internals.configuration.useWideDomainSupport || Kameleoon.Internals.configuration.useVisitorCodeInLocalStorage) this.createLocalData("kameleoonVisitorCode", e, Utils.MAX_STORAGE_DAYS, null, "LS");
          if (t) this.createLocalData("kameleoonVisitorCode", e, Utils.MAX_STORAGE_DAYS, null, "COOKIE")
        };
        this.seededRandom = (e, t) => {
          let n;
          if (t) {
            n = this.computeStringSha256(e);
            return parseInt(n, 16) / Math.pow(2, 256)
          }
          n = this.computeStringHash(e);
          n = (9301 * Math.abs(n) + 49297) % 233280;
          return n / 233280
        };
        this.treatEqSelector = (e, t) => {
          if (void 0 === e) return null;
          let n = e.split(/\:eq\([0-9]+\)/g);
          let a = e.match(/(?!\:eq\()[0-9]+/g) || [];
          let o = null == t ? document : t;
          for (let t = 0; t < n.length; ++t) {
            n[t] = n[t].trim();
            if (">" === n[t].charAt(0)) n[t] = n[t].substring(1, e.length)
              .trim();
            if (null == o || "" == n[t].trim()) break;
            if (t > a.length - 1) o = o.querySelectorAll(n[t]);
            else o = o.querySelectorAll(n[t])[a[t]]
          }
          if (null == o) return [];
          if (void 0 == o.length) o = [o];
          let r = Kameleoon.Utils.querySelectorAll(e.replace(/\:eq\([0-9]+\)/g, ""));
          let l = [];
          for (let e = 0; e < r.length; ++e)
            for (let t = 0; t < o.length; ++t)
              if (r[e] === o[t]) {
                l.push(o[t]);
                break
              } return l
        };
        this.Logger = new Logger;
        this.bowser = window.kbowser || window.bowser
      }
      addEventListener(e, t, n, a, o) {
        let r;
        if (e == window) r = "window";
        else if (e == document) r = "document";
        else {
          r = this.obtainRandomString(4);
          e.setAttribute(`kameleoonListener-${r}`, !0)
        }
        let l = n;
        if (o) e.addEventListener(t, l, a);
        else {
          l = function(e) {
            Kameleoon.Utils.runProtectedFunction((function() {
              n(e)
            }))
          };
          e.addEventListener(t, l, a)
        }
        Kameleoon.Internals.runtime.eventListeners.push({
          elementKey: r,
          eventType: t,
          actionFunction: l,
          useCapture: a
        })
      }
      addPostMessageCallback(e) {
        let t = Math.random()
          .toString();
        Kameleoon.Internals.runtime.postMessageCallbacks[t] = e;
        return t
      }
      addCSSStyleSheet(e, t, n) {
        if (!e) return;
        let a = n ? n : document;
        let o = "kameleoonStyleSheet" + (t ? "-" + t.id : "");
        let r = n ? n.getElementById(o) : null;
        let l = "";
        if (r) {
          l = r.textContent;
          r.parentNode.removeChild(r)
        }
        let i = a.createElement("style");
        i.className = "KameleoonStyleSheet";
        i.setAttribute("id", o);
        i.setAttribute("rel", "stylesheet");
        i.setAttribute("type", "text/css");
        i.setAttribute("media", "screen");
        let s = l + e;
        if (i.styleSheet) i.styleSheet.cssText = s;
        else i.appendChild(document.createTextNode(s));
        if (n) a.getElementsByTagName("head")[0].appendChild(i, a.getElementsByTagName("head")[0].firstChild);
        else Kameleoon.Internals.runtime.headNode.appendChild(i);
        if (t) t.loadedCSSStyleSheet = i
      }
      addCallbackToObserver(e) {
        KMutationObserver.setMutationObserverSPA();
        Kameleoon.Internals.runtime.listenSpaCallbacks.push(e)
      }
      applyVariation(e) {
        new Variation(e)
          .process()
      }
      clearInterval(e) {
        delete Kameleoon.Internals.runtime.intervalIds[e];
        window.clearInterval(e)
      }
      clearTimeout(e) {
        delete Kameleoon.Internals.runtime.timeoutIds[e];
        window.clearTimeout(e)
      }
      clone(e) {
        return structuredClone(e)
      }
      computeCurrentPageCleanAbsoluteURL() {
        if (null == Kameleoon.Internals.runtime.currentPageCleanAbsoluteURL) {
          Kameleoon.Internals.runtime.currentPageCleanAbsoluteURL = this.computeURLNoKameleoonParameters(this.computeCurrentPageAbsoluteURLNoProxyMode());
          try {
            Kameleoon.Internals.runtime.currentPageCleanAbsoluteURL = decodeURIComponent(Kameleoon.Internals.runtime.currentPageCleanAbsoluteURL)
          } catch (e) {}
        }
        return Kameleoon.Internals.runtime.currentPageCleanAbsoluteURL
      }
      computeStringHash(e, t) {
        e = t ? this.computeStringSha256(e) : e;
        let n = 0;
        for (let t = 0; t < e.length; ++t) {
          n = (n << 5) - n + e.charCodeAt(t);
          n &= n
        }
        return n
      }
      createLocalData(e, t, n, a, o, r, l, i) {
        const s = "COOKIE" != o;
        const u = (new Date)
          .getTime();
        const m = u + 24 * n * 60 * 60 * 1e3;
        if (!i && !Kameleoon.Internals.runtime.Consent.hasGlobalConsent()) {
          let i = s ? "LS" : "COOKIE";
          if (null == Kameleoon.Internals.runtime.localDataMap) Kameleoon.Internals.runtime.localDataMap = {};
          if (null == Kameleoon.Internals.runtime.localDataMap[i]) Kameleoon.Internals.runtime.localDataMap[i] = {};
          Kameleoon.Internals.runtime.localDataMap[i][e] = {
            name: e,
            value: t,
            days: n,
            domain: a,
            forceLocalAccess: o,
            jsonFormat: r,
            creationTime: u
          };
          if (s) l && l();
          return
        }
        if (s) {
          const n = {
            value: Utils.LOCAL_STORAGE_OBFUSCATED_KEYS[e] && this.obfuscateString(JSON.stringify(t)) || t,
            expirationDate: m
          };
          if (Kameleoon.Internals.runtime.iframeLocalStorage) this.postMessageToExternalIframe("set", e, n, l);
          else {
            try {
              localStorage.setItem(e, JSON.stringify(n))
            } catch (e) {}
            l && l()
          }
        } else {
          let o = "";
          let l = r ? JSON.stringify(t) : t;
          if (n) o = "; expires=" + new Date(m)
            .toUTCString();
          if ("CURRENT_HOST" != a) {
            a = a || Kameleoon.Internals.configuration.customCookieDomainName || this.obtainCurrentRootDomain();
            o += "; domain=" + a
          }
          let i = "";
          if (Kameleoon.Internals.configuration.useSecureCookie) i = "; Secure";
          document.cookie = e + "=" + l + o + "; path=/; SameSite=Lax" + i
        }
      }
      eraseLocalData(e, t, n) {
        let a = "COOKIE" != n;
        let o = Kameleoon.Internals.runtime.localDataMap;
        let r = a ? "LS" : "COOKIE";
        if (null != o && null != o[r] && null != o[r][e]) delete o[r][e];
        if (a)
          if (Kameleoon.Internals.runtime.iframeLocalStorage) this.postMessageToExternalIframe("remove", e, null, null);
          else localStorage.removeItem(e);
        else this.createLocalData(e, "", -1, t, "COOKIE", !1, null, !0)
      }
      secureSessionStorage(e, t, n) {
        try {
          return window.sessionStorage[e](t, n)
        } catch (e) {
          return null
        }
      }
      flatten(...e) {
        let t = [];
        for (let e = 0; e < arguments.length; e++)
          if (arguments[e] instanceof Array) t.push.apply(t, this.flatten.apply(this, arguments[e]));
          else t.push(arguments[e]);
        return t
      }
      obfuscateString(e) {
        let t = "";
        for (let n = 0, a = e.length; n < a; n += 1) {
          let a = e[n];
          if ("’" == a) a = "'";
          t += String.fromCharCode(a.charCodeAt(0) + 16)
        }
        return t
      }
      parseParameters() {
        let e = {};
        let t = window.location.hash.substring(1)
          .replace(/\?/g, "&");
        let n = window.location.search.substring(1);
        if (n || t) {
          let a = (n ? n.split("&") : [])
            .concat(t ? t.split("&") : []);
          a.forEach((t => {
            let n = t.split("=");
            try {
              e[decodeURIComponent(n[0])] = n[1] ? decodeURIComponent(n[1]) : null
            } catch (t) {
              e[unescape(n[0])] = n[1] ? unescape(n[1]) : null
            }
          }))
        }
        return e
      }
      performBeaconServerCall(e, t, n, a) {
        let o = new XMLHttpRequest;
        o.open("GET", e, !0);
        if (t) o.onreadystatechange = function(e) {
          t.bind(o)(e.target)
        };
        if (n) {
          o.onerror = function(e) {
            n.bind(o)(e.target)
          };
          o.ontimeout = function(e) {
            n.bind(o)(e.target)
          }
        }
        o.timeout = a || 15 * 60 * 1e3;
        o.send()
      }
      postMessageToExternalIframe(e, t, n, a) {
        const o = JSON.stringify({
          type: e,
          key: t ?? void 0,
          data: n ?? void 0,
          callbackId: this.addPostMessageCallback(a)
        });
        if (!Kameleoon.Internals.runtime.externalIframe || !Kameleoon.Internals.runtime.externalIframe.contentWindow) {
          if (window.kameleoonIframeURL) {
            let e = document.createElement("iframe");
            e.src = window.kameleoonIframeURL;
            e.id = "kameleoonExternalIframe";
            e.style.cssFloat = "left !important";
            e.style.height = "0px !important";
            e.style.opacity = "0.0 !important";
            e.style.width = "0px !important";
            e.onload = () => {
              Kameleoon.Internals.runtime.externalIframe = e;
              Kameleoon.Internals.runtime.externalIframe.contentWindow.postMessage("kameleoon" + o, "*")
            };
            document.head.appendChild(e)
          }
        } else Kameleoon.Internals.runtime.externalIframe.contentWindow.postMessage("kameleoon" + o, "*")
      }
      processMessageEvent(e) {
        if ("string" !== typeof e.data) return;
        if ("obtainTagCommanderVariableNames" == e.data) {
          let t = [];
          if (window.tc_vars)
            for (let e in window.tc_vars) t.push(e);
          if (!(e.source instanceof MessagePort) && !(e.source instanceof ServiceWorker)) e.source.postMessage("tagCommanderVariableNames" + JSON.stringify(t), e.origin);
          return
        }
        if (0 == e.data.indexOf("checkKameleoonScriptPresent")) {
          if ("https://back-office." + Kameleoon.Internals.configuration.DOMAIN == e.origin) {
            let t = "";
            let n = e.data.replace("checkKameleoonScriptPresent", "");
            Kameleoon.Utils.runProtectedScript(n);
            if (!(e.source instanceof MessagePort) && !(e.source instanceof ServiceWorker)) e.source.postMessage(t, e.origin)
          }
          return
        }
        if (Kameleoon.Internals.runtime.iframeLocalStorage && Kameleoon.Internals.runtime.postMessageOrigin == e.origin) try {
          let t = JSON.parse(e.data);
          if (t.kameleoonMessage) {
            if (t.callbackId) {
              let e = Kameleoon.Internals.runtime.postMessageCallbacks[t.callbackId];
              delete Kameleoon.Internals.runtime.postMessageCallbacks[t.callbackId];
              e && e(t.data)
            }
            if (null != t.type) Kameleoon.Utils.processStorageData(t)
          }
        } catch (e) {}
      }
      readLocalData(e, t, n) {
        let a = "COOKIE" != t;
        let o = (new Date)
          .getTime();
        try {
          if (!Kameleoon.Internals.runtime.Consent.hasGlobalConsent()) {
            let t = Kameleoon.Internals.runtime.localDataMap;
            let n = a ? "LS" : "COOKIE";
            if (null != t && null != t[n] && null != t[n][e]) {
              let a = t[n][e];
              if (o - 24 * a.days * 60 * 60 * 1e3 >= a.creationTime) delete t[n][e];
              else return a.value
            }
          }
          if (a) {
            let t = localStorage.getItem(e);
            if (!t) return null;
            t = JSON.parse(t);
            if (Utils.LOCAL_STORAGE_OBFUSCATED_KEYS[e]) t.value = JSON.parse(this.unobfuscateString(t.value));
            if (o > (t.date || t.expirationDate)) {
              localStorage.removeItem(e);
              return null
            }
            return t.value
          } else {
            let t = null;
            let a = document.cookie.split(";");
            for (let o = 0, r = a.length; o < r; ++o) {
              let r = a[o];
              let l = r.indexOf("=");
              if (r.substring(0, l)
                .trim() == e) {
                let e = r.substring(l + 1);
                t = n && JSON.parse(e) || e;
                break
              }
            }
            return t
          }
        } catch (e) {}
        return null
      }
      removeBlockingStyleSheet() {
        let e = document.getElementById("kameleoonPageLoading");
        if (e && e.parentNode) e.parentNode.removeChild(e)
      }
      removeCSSStyleSheet(e) {
        if (e.loadedCSSStyleSheet) {
          const t = "kameleoonStyleSheet-";
          const n = e.loadedCSSStyleSheet.id.replace(t, "");
          if (-1 == n.indexOf(",")) {
            Kameleoon.Internals.runtime.headNode.removeChild(e.loadedCSSStyleSheet);
            e.loadedCSSStyleSheet = null
          } else e.loadedCSSStyleSheet.id = t + n.replace(new RegExp(e.id + ",?"), "")
        }
      }
      sendKameleoonCustomEvent(e, t, n) {
        try {
          let a = document.createEvent("CustomEvent");
          t.time = (new Date)
            .getTime();
          a.initCustomEvent("Kameleoon::" + e, !1, !1, t);
          window.dispatchEvent(a);
          if (sessionStorage.getItem("kameleoonLightExtension") || Kameleoon.Internals.runtime.parameters.kameleoonLightExtension) {
            t.type = n ? n : t.type;
            window.kameleoonEvents = window.kameleoonEvents || [];
            window.kameleoonEvents.push(t)
          }
        } catch (e) {}
      }
      setInterval(e, t, n, a) {
        let o = window.setInterval((function() {
          Kameleoon.Utils.runProtectedFunction((function() {
            e()
          }), a)
        }), t);
        Kameleoon.Internals.runtime.intervalIds[o] = !0;
        if (n) e();
        return o
      }
      setTimeout(e, t, n) {
        let a = window.setTimeout((function() {
          delete Kameleoon.Internals.runtime.timeoutIds[a];
          Kameleoon.Utils.runProtectedFunction((function() {
            e()
          }), n)
        }), t);
        Kameleoon.Internals.runtime.timeoutIds[a] = !0;
        return a
      }
      testEmptyMap(e) {
        return 0 == Object.keys(e)
          .length
      }
      parseObjectToUrlParams(e) {
        return Object.entries(e)
          .map((e => e[0] + "=" + e[1]))
          .join("&")
      }
      treatContainsSelector(e) {
        let t = {},
          n;

        function a(e, t) {
          let n = !1;
          if (t.textContent && -1 !== t.textContent.indexOf(e)) n = !0;
          return n
        }
        n = e.match(/:contains\(['"]([\s\S]+)['"]\)/);
        t.containText = n[1];
        t.newSelector = e.replace(n[0], "");
        if ("" === t.newSelector) t.newSelector = "*";
        t.check = a;
        return t
      }
      unobfuscateString(e) {
        let t = "";
        for (let n = 0, a = e.length; n < a; n += 1) t += String.fromCharCode(e[n].charCodeAt(0) - 16);
        return t
      }
      throttle(e, t, n) {
        let a = null;
        return function() {
          if (null !== a) return;
          if (n) e();
          a = Kameleoon.Utils.setTimeout((() => {
            a = null;
            e()
          }), t)
        }
      }
    }
    Utils.LOCAL_STORAGE_OBFUSCATED_KEYS = {
      kameleoonData: !0,
      kameleoonSimulationVisitorData: !0
    };
    Utils.MAX_STORAGE_DAYS = 365;
    class Browser {
      constructor(e) {
        this.browsers = e
      }
      obtain() {
        let e = Kameleoon.Internals.runtime.Device.browser;
        if ("Internet Explorer" == e || "Microsoft Edge" == e) e = "Explorer";
        return e
      }
      obtainIndex() {
        let e = this.obtain() || "";
        let r = e.toUpperCase();
        for (let e in this.browsers)
          if (this.browsers[e].name.toUpperCase() == r) return parseInt(e);
        return null
      }
    }
    class CustomData {
      constructor(e) {
        this.inheritVisitorScopeAndTrackVisitorDataFromServer = () => {
          if (Kameleoon.Internals.runtime.Visitor.visits.length > 1) {
            const e = Kameleoon.Internals.runtime.Visitor.currentVisit.customData;
            const t = Kameleoon.Internals.runtime.Visitor.visits[Kameleoon.Internals.runtime.Visitor.visits.length - 2].customData;
            for (const a in this.customData) {
              const i = this.customData[a].scope;
              if ("VISITOR" == i && null == e[a]) {
                const e = t[a];
                if (null != e) this.register(parseInt(a), {
                  value: e,
                  overwrite: !0
                }, !0)
              }
            }
            Kameleoon.Internals.runtime.Visitor.saveToStoredData()
          }
        };
        this.register = (e, t, a) => {
          const i = this.customData[e];
          if (i) {
            let n = {};
            const s = t.value;
            if (null == s) return;
            const r = this.getOverwriteValue(i, t.overwrite);
            if (a) n = s;
            else {
              const e = Array.isArray(s) ? s : [s];
              for (const t of e)
                if (null != t && (t.toString()
                    .length <= VisitEvent_CustomData.MAX_SUM_CUSTOM_DATA_VALUES_LENGTHES_IN_A_REQUEST || i.localOnly)) n[t] = 1
            }
            if (r || !Kameleoon.Utils.testEmptyMap(n)) {
              Kameleoon.Utils.sendKameleoonCustomEvent.call(window, "CustomDataSet", {
                name: i.name,
                value: s
              });
              Kameleoon.Utils.sendKameleoonCustomEvent("Internals", {
                type: "customData/set",
                name: i.name,
                value: s
              });
              Kameleoon.Gatherer.track(VisitEvent_CustomData, {
                index: e,
                customData: i,
                overwrite: r,
                valueToAdd: n,
                value: s
              })
            }
          }
        };
        this.customDataVisitsRequest = e => {};
        this.run = () => {
          Kameleoon.Internals.runtime.Visitor.currentVisit.clearCustomDataPage();
          Kameleoon.Utils.clearInterval(this.intervalId);
          if (Kameleoon.Internals.runtime.Gatherer.startOfVisit) this.inheritVisitorScopeAndTrackVisitorDataFromServer();
          this.firstTimeCheck = (new Date)
            .getTime();
          this.intervalId = Kameleoon.Utils.setInterval(this.obtain.bind(this), 200, !0);
          Kameleoon.Utils.setTimeout((() => {
            Kameleoon.Utils.clearInterval(this.intervalId)
          }), 3e3);
          Kameleoon.Utils.setInterval(this.obtain.bind(this), 3e3, !1)
        };
        this.customData = e
      }
      parseNumberValue(e, t) {
        switch (e) {
          case -2:
            return "true" === t;
          case -1:
            return t;
          default:
            return parseFloat(t)
        }
      }
      getOverwriteValue(e, t) {
        if (null != t) return t;
        return "COUNT_LIST" === e.type || "LIST" === e.type || "PAGE" === e.scope ? !1 : !0
      }
      obtainParsedValue(e, t) {
        const a = this.customData[e];
        switch (a.type) {
          case "COUNT_LIST":
            const e = [];
            for (const a in t) e.push({
              value: a,
              count: t[a]
            });
            return e;
          case "LIST":
            const i = [];
            for (const e in t) i.push(e);
            return i;
          default:
            return this.parseNumberValue(a.format, Object.keys(t)[0])
        }
      }
      obtain() {
        for (const e in this.customData)
          if (!this.customData[e].treated) {
            const t = parseInt(e);
            const a = this.obtainValueMap(t, this.customData[e]);
            if (a) this.register(t, a)
          }
      }
      obtainValueFromPath(e, t) {
        return e.match(/[^'\]\[\.\"]+/gi)
          .reduce(((e, t) => e && e[t]), t)
      }
      obtainValueMap(e, t) {
        let a = null;
        if (null != t && !t.disabled) {
          const i = this.getOverwriteValue(t, null);
          switch (t.method) {
            case "GTM":
              if (window.dataLayer && t.variableName)
                for (let e = window.dataLayer.length - 1; e >= 0; --e) {
                  const n = this.obtainValueFromPath(t.variableName, window.dataLayer[e]);
                  if (null != n) {
                    a = {
                      value: n,
                      overwrite: i
                    };
                    break
                  }
                }
              break;
            case "TC":
              if (window.tc_vars && t.variableName) {
                let e = this.obtainValueFromPath(t.variableName, window.tc_vars);
                if ("string" == typeof e && 0 == e.length) e = null;
                if (null != e) {
                  a = {
                    value: e,
                    overwrite: i
                  };
                  break
                }
              }
              break;
            case "ADOBE_ANALYTICS":
              if (window._satellite && window._satellite.getVar && t.variableName) {
                const e = window._satellite.getVar(t.variableName);
                if (null != e) {
                  a = {
                    value: e,
                    overwrite: i
                  };
                  break
                }
              }
              break;
            case "CUSTOM_CODE":
              a = Kameleoon.Utils.runProtectedScript(t.customEvalCode, "kameleoonCustomDataScript-" + e + ".js");
              break;
            default:
              break
          }
        }
        if (null != a) {
          t.treated = !0;
          const i = Kameleoon.Internals.runtime.Visitor.currentVisit.customData[e];
          const n = a.value;
          if (null != n) {
            const e = t.type;
            if ("LIST" == e || "COUNT_LIST" == e || null == i || Object.keys(i)[0] != n.toString() || Kameleoon.Internals.configuration.enableHistoryReconciliation && t.mappingIdentifier && null == Kameleoon.Internals.runtime.storedData.obtainField("Gatherer", "visitsRequestSuccess")) return a
          }
        }
        return null
      }
    }
    class KeyPage {
      constructor(e) {
        this.keyPages = e
      }
      obtainIndexes() {
        const e = [];
        if (0 == e.length) e.push(null);
        return e
      }
    }
    class Language {
      constructor() {
        this.DEFAULT_LOCALE_LANGUAGE_TAG = "en"
      }
      obtainLocaleTag() {
        return navigator && navigator.language || this.DEFAULT_LOCALE_LANGUAGE_TAG
      }
    }
    class OperatingSystem {
      constructor(e) {
        this.oss = e
      }
      obtainIndex() {
        const e = this.obtain()
          .toUpperCase();
        for (const s in this.oss)
          if (this.oss[s].name.toUpperCase() == e) return parseInt(s);
        return null
      }
      obtain() {
        const e = (Kameleoon.Utils.bowser.parsedResult || Kameleoon.Utils.bowser.parse(navigator.userAgent))
          .os.name;
        switch (e) {
          case "Windows Phone":
          case "iOS":
          case "Android":
          case "Linux":
          case "Windows":
            return e;
          case "macOS":
            return "Tablet" == Kameleoon.Internals.runtime.Device.type ? "iOS" : "Mac";
          default:
            return "Other"
        }
      }
    }
    class Referrer {
      constructor(e) {
        this.referrers = e;
        this.referrer = Kameleoon.Internals.runtime.prevSpaPage || document.referrer;
        const t = "kameleoonReferrer";
        const r = Kameleoon.Utils.readLocalData(t, "COOKIE");
        if (r) {
          this.referrer = r;
          Kameleoon.Utils.eraseLocalData(t, null, "COOKIE")
        }
      }
      obtainCorrected(e) {
        switch (this.obtainType(e)) {
          case 0:
          case 1:
            return null;
          default:
            return this.obtain()
        }
      }
      update(e) {
        this.isUpdated = !0;
        this.referrer = e
      }
      obtain() {
        return this.referrer
      }
      obtainDetectionMatches(e) {
        let t = this.obtainDetectionPartMatches(e.method, e.parameters);
        if (e.and) t = t && this.obtainDetectionPartMatches(e.andMethod, e.andParameters);
        return t
      }
      obtainDetectionPartMatches(e, t) {
        try {
          switch (e) {
            case 0:
              return new RegExp(t)
                .test(this.obtain());
            case 1:
              const e = new RegExp(t);
              return e.test(Kameleoon.Utils.computeCurrentPageCleanAbsoluteURL()) || e.test(Kameleoon.Utils.computeCurrentPageCleanRelativeURL());
            default:
              return !0 === Kameleoon.Utils.runProtectedScript(t)
          }
        } catch (e) {
          console.log(e);
          return !1
        }
      }
      obtainIndexes(e) {
        switch (this.obtainType(e)) {
          case 0:
          case 1:
            return [0];
          default:
            let e = [];
            let t = Number.NEGATIVE_INFINITY;
            for (const r in Kameleoon.Internals.runtime.Gatherer.configuration.referrers) {
              const n = Kameleoon.Internals.runtime.Gatherer.configuration.referrers[r];
              if (this.obtainMatches(n)) {
                let a = n.priority;
                if (null == a) a = Number.NEGATIVE_INFINITY;
                if (a >= t) {
                  if (a > t) {
                    e = [];
                    t = a
                  }
                  e.push(parseInt(r) + 1)
                }
              }
            }
            if (0 == e.length) e.push(null);
            return e
        }
      }
      obtainIsIgnored(e) {
        return !1
      }
      obtainMatches(e) {
        const t = e.detections;
        for (let e = 0; e < t.length; e++)
          if (this.obtainDetectionMatches(t[e])) return !0;
        return !1
      }
      obtainType(e) {
        if (this.obtainIsIgnored(e)) return 0;
        if (Kameleoon.Internals.runtime.storedData.obtainField("Gatherer", "startsOfVisitForCurrentPage") > 1) return 1;
        return 3
      }
    }
    class StoredData {
      constructor(e) {
        this.Gatherer = {};
        this.Runtime = {};
        this.Vars = Kameleoon.Utils.readLocalData("kameleoonVars", "LS") || {};
        this.Visitor = {};
        this.canSave = !1;
        if (e) {
          let a = "";
          if (e[Kameleoon.Internals.runtime.dataKeyName]) {
            a = e[Kameleoon.Internals.runtime.dataKeyName];
            if (e.Kameleoon) Kameleoon.Utils.eraseLocalData("kameleoonData", null, "LS")
          } else if (e["kameleoonData"]) a = e["kameleoonData"];
          if (Kameleoon.Internals.runtime.simulationMode) {
            const t = e["kameleoonDataSimulation"] || e["kameleoonSimulationVisitorData"];
            if (t) a = t
          }
          let t = Kameleoon.Utils.unobfuscateString(a);
          let n = t && JSON.parse(t) || {};
          this.Gatherer = n.Gatherer || {};
          this.Runtime = n.Runtime || {};
          this.Vars = n.Vars || e["kameleoonVars"] || {};
          this.Visitor = n.Visitor || {}
        } else {
          let e = Kameleoon.Utils.readLocalData("kameleoonData", "LS");
          if (Kameleoon.Internals.runtime.simulationMode) {
            const a = Kameleoon.Utils.readLocalData("kameleoonDataSimulation", "LS", !0);
            const t = Kameleoon.Utils.readLocalData("kameleoonSimulationVisitorData", "LS", !0);
            if (a || t) e = a || t
          }
          if (e) {
            this.Gatherer = e.Gatherer || {};
            this.Runtime = e.Runtime || {};
            this.Vars = e.Vars || this.Vars || {};
            this.Visitor = e.Visitor || {}
          }
        }
        Kameleoon.Utils.eraseLocalData("kameleoonVars", null, "LS");
        for (let e in this.Vars)
          if (Kameleoon.Internals.runtime.pageStartTime > this.Vars[e].date) delete this.Vars[e];
        Kameleoon.Utils.setInterval((() => {
          if (this.canSave) {
            this.save(2);
            this.canSave = !1
          }
        }), 1e3);
        this.processTabSynchronization();
        let a = 0;
        const t = e => {
          const t = Date.now();
          if (e || t - a > 100) {
            a = t;
            this.save(2)
          }
        };
        Kameleoon.Utils.addEventListener(window, "pagehide", (() => {
          let e = !1;
          if (Kameleoon.Internals.runtime.isIframe) {
            const a = Kameleoon.Utils.readLocalData(Kameleoon.Internals.runtime.simulationMode ? "kameleoonSimulationVisitorData" : Kameleoon.Internals.runtime.dataKeyName, "LS");
            if (a) {
              e = !0;
              this.update(a)
            }
          }
          t(e)
        }));
        Kameleoon.Utils.addEventListener(document, "visibilitychange", (() => {
          if ("hidden" === document.visibilityState && !Kameleoon.Internals.runtime.isIframe) t()
        }))
      }
      processTabSynchronization() {
        if (!Kameleoon.Internals.runtime.useBroadcastChannel) return;
        try {
          const e = Kameleoon.Internals.runtime.broadcastSynchranization = new BroadcastChannel("kameleoon_tab_sync");
          const a = Kameleoon.Internals.runtime.tabId;
          const t = t => {
            e.postMessage({
              type: t,
              from: a
            })
          };
          e.onmessage = e => {
            const {
              type: n,
              from: i
            } = e.data || {};
            if (i === a && 2 !== n) return;
            switch (n) {
              case 0:
                Kameleoon.Internals.runtime.immediateSaveActive = !0;
                t(1);
                break;
              case 1:
                if (!Kameleoon.Internals.runtime.immediateSaveActive) {
                  Kameleoon.Internals.runtime.immediateSaveActive = !0;
                  if (!Kameleoon.Internals.runtime.isReloaded) this.save(1)
                }
                break;
              case 2:
                Kameleoon.Internals.runtime.immediateSaveActive = !0;
                break
            }
          };
          if (Kameleoon.Internals.runtime.isIframe) {
            Kameleoon.Internals.runtime.immediateSaveActive = !0;
            t(2)
          }
          t(0);
          Kameleoon.Utils.addEventListener(window, "pagehide", (e => {
            if (e.persisted && Kameleoon.Internals.runtime?.broadcastSynchranization) {
              Kameleoon.Internals.runtime.broadcastSynchranization?.close();
              Kameleoon.Internals.runtime.broadcastSynchranization = null
            }
          }));
          Kameleoon.Utils.addEventListener(window, "pageshow", (e => {
            if (e.persisted) Kameleoon?.Internals?.runtime?.storedData?.processTabSynchronization?.()
          }))
        } catch (e) {}
      }
      obtainField(e, a, t) {
        return this[e][a] || t || null
      }
      resetForStartOfVisit() {
        this.Runtime = {}
      }
      saveField(e, a, t) {
        this[e][a] = t;
        this.save(0)
      }
      save(e) {
        const a = 2 === e || Kameleoon.Internals.runtime.immediateSaveActive && 1 === e;
        if (a) Kameleoon.Utils.createLocalData(Kameleoon.Internals.runtime.simulationMode ? "kameleoonSimulationVisitorData" : Kameleoon.Internals.runtime.dataKeyName, this, Kameleoon.Internals.runtime.simulationMode ? 1 / 24 : Utils.MAX_STORAGE_DAYS, null, "LS", !0);
        else this.canSave = !0
      }
      update(e) {
        this.Gatherer = e.Gatherer || this.Gatherer;
        this.Runtime = e.Runtime || this.Runtime;
        this.Vars = e.Vars || this.Vars;
        this.Visitor = e.Visitor || this.Visitor
      }
    }
    class VisitEvent {
      constructor(e) {
        this.visitEvent = e
      }
      track(e) {
        const t = () => {
          const t = new this.visitEvent(e);
          Kameleoon.Internals.runtime.Visitor.saveToStoredData();
          if ((!e || !e.notTrack && !t.notTrack) && Kameleoon.Internals.configuration.track) Kameleoon.Internals.runtime.RequestManager.addRequest(t);
          Kameleoon.Internals.runtime.storedData.save(this.visitEvent.save)
        };
        if (!Kameleoon.Internals.runtime.Visitor.currentVisit.isVisitFinished()) t();
        else {
          Kameleoon.Internals.runtime.Visitor = new Visitor;
          Kameleoon.Gatherer.track(VisitEvent_Page);
          Kameleoon.Gatherer.track(VisitEvent_StaticData);
          Kameleoon.Gatherer.CustomData.run();
          Kameleoon.Mentalist.run();
          Kameleoon.Internals.runtime.gathererRun = !0;
          t()
        }
      }
    }
    class VisitEvent_Main {
      constructor(t) {
        this.obtainRequestData = () => {
          let t = "eventType=" + this.eventType;
          for (const e in this) {
            if ("function" == typeof this[e] || VisitEvent_Main.NOT_TRACK_FIELD.has(e)) continue;
            t += `&${e}=${this.addValueParameter(this[e])}`
          }
          return t
        };
        this.addValueParameter = t => {
          const e = t => {
            try {
              return encodeURIComponent(t)
            } catch (e) {
              return t
            }
          };
          if ("object" == typeof t) return e(JSON.stringify(t));
          else if ("string" == typeof t) return e(t);
          return t
        };
        this.time = (new Date)
          .getTime();
        this.nonce = Kameleoon.Utils.obtainRandomString(VisitEvent_Main.NONCE_LENGTH, Analyst.HEXADECIMAL_ALPHABET);
        Kameleoon.Internals.runtime.Visitor.currentVisit.addEvent(this.time)
      }
    }
    VisitEvent_Main.NONCE_LENGTH = 16;
    VisitEvent_Main.NOT_TRACK_FIELD = new Set(["eventType", "time", "notTrack", "type", "save"]);
    class VisitEvent_Activity extends VisitEvent_Main {
      constructor() {
        super();
        this.eventType = "activity";
        this.clicks = Kameleoon.Internals.runtime.Gatherer.clicks;
        Kameleoon.Internals.runtime.Visitor.currentVisit.addClicks(this.clicks);
        Kameleoon.Internals.runtime.Gatherer.active = !1;
        Kameleoon.Internals.runtime.Gatherer.clicks = 0
      }
      static initialize() {
        let e = () => {
          Kameleoon.Internals.runtime.Gatherer.active = !0
        };
        let t = () => {
          e();
          Kameleoon.Internals.runtime.Gatherer.clicks++
        };
        Kameleoon.Utils.addEventListener(document, "mousemove", e, !1);
        Kameleoon.Utils.addEventListener(document, "scroll", e, !1);
        Kameleoon.Utils.addEventListener(document, "click", t, !1);
        Kameleoon.Utils.setInterval((() => {
          if (Kameleoon.Internals.runtime.Gatherer.active) Kameleoon.Gatherer.track(this)
        }), this.ACTIVITY_TRACKING_INTERVAL, !0)
      }
    }
    VisitEvent_Activity.ACTIVITY_TRACKING_INTERVAL = 15 * 1e3;
    VisitEvent_Activity.save = 0;
    class VisitEvent_AdBlocker extends VisitEvent_Main {
      constructor() {
        super();
        this.eventType = "adBlocker";
        Kameleoon.Internals.runtime.Visitor.currentVisit.addAdBlocker()
      }
    }
    VisitEvent_AdBlocker.save = 0;
    class VisitEvent_Experiment extends VisitEvent_Main {
      constructor(i) {
        super();
        this.eventType = "experiment";
        this.id = i.id;
        this.variationId = i.variationId;
        this.notTrack = i.notTrack;
        if (null == this.variationId) this.notTrack = !0;
        if (i.notSave) return;
        Kameleoon.Internals.runtime.Visitor.currentVisit.addExperiment(this.time, this.id, this.variationId)
      }
    }
    VisitEvent_Experiment.save = 1;
    class VisitEvent_Conversions extends VisitEvent_Main {
      constructor(e) {
        super();
        this.eventType = "conversion";
        this.goalId = e.goalId;
        this.negative = !0 === e.negative;
        let t, i = !1;
        let n = Kameleoon.Internals.runtime.storedData.obtainField("Gatherer", "revenuesByGoalId", {});
        let s = n[this.goalId];
        if (this.negative)
          if (s && s.length > 0) {
            t = s.splice(-1)[0];
            if (0 == s.length) delete n[this.goalId]
          } else i = !0;
        else {
          t = e.revenue;
          if (isNaN(t)) t = 0;
          if (!s) s = [];
          s.push(t);
          n[this.goalId] = s.splice(-10)
        }
        this.revenue = t;
        if (!i) {
          Kameleoon.Internals.runtime.storedData.saveField("Gatherer", "revenuesByGoalId", n);
          Kameleoon.Internals.runtime.Visitor.currentVisit.addConversions(this.goalId, 1, this.revenue, this.negative);
        }
        if (e.metadata) {
          const t = {};
          for (const i in e.metadata) {
            const n = e.metadata[i];
            const s = Array.isArray(n) ? n : [n];
            t[i] = s.map((e => e.toString()))
          }
          this.metadata = t
        }
      }
    }
    VisitEvent_Conversions.save = 1;
    class VisitEvent_CustomData extends VisitEvent_Main {
      constructor(t) {
        super();
        this.eventType = "customData";
        this.index = t.index;
        this.overwrite = t.overwrite || !1;
        this.notTrack = t.value.length > VisitEvent_CustomData.MAX_SUM_CUSTOM_DATA_VALUES_LENGTHES_IN_A_REQUEST || t.customData.localOnly;
        this.valuesCountMap = t.valueToAdd;
        this.mappingIdentifier = 1 == t.customData.mappingIdentifier ? "true" : "false";
        Kameleoon.Internals.runtime.Visitor.currentVisit.addCustomData(this.index, this.valuesCountMap, this.overwrite)
      }
    }
    VisitEvent_CustomData.MAX_SUM_CUSTOM_DATA_VALUES_LENGTHES_IN_A_REQUEST = 1e3;
    VisitEvent_CustomData.save = 1;
    class VisitEvent_Geolocation extends VisitEvent_Main {
      constructor({
        city: t,
        country: i,
        latitude: o,
        longitude: e,
        postalCode: n,
        region: s
      }) {
        super();
        this.eventType = "geolocation";
        this.city = t;
        this.country = i;
        this.latitude = o;
        this.longitude = e;
        this.postalCode = n;
        this.region = s;
        Kameleoon.Internals.runtime.Visitor.currentVisit.addGeolocation({
          city: t,
          country: i,
          latitude: o,
          longitude: e,
          postalCode: n,
          region: s
        })
      }
    }
    VisitEvent_Geolocation.save = 0;
    class VisitEvent_Page extends VisitEvent_Main {
      constructor() {
        super();
        this.eventType = "page";
        const e = Kameleoon.Utils.computeCurrentPageCleanAbsoluteURL();
        const r = document.title;
        const t = Kameleoon.Utils.computeCurrentPageCanonicalURL();
        const i = Kameleoon.Gatherer.Referrer.obtainCorrected(Kameleoon.Internals.runtime.Gatherer.startOfVisit);
        this.href = e && e.slice(0, Kameleoon.Gatherer.MAX_HREF_LENGTH_IN_A_REQUEST);
        this.title = r.slice(0, Kameleoon.Gatherer.MAX_PAGE_TITLE_LENGTH_IN_A_REQUEST);
        this.keyPagesIndices = Kameleoon.Gatherer.KeyPage.obtainIndexes();
        this.referrersIndices = Kameleoon.Gatherer.Referrer.obtainIndexes(Kameleoon.Internals.runtime.Gatherer.startOfVisit);
        if (t) this.canonicalHref = t;
        if (null != i) this.referrerHref = i;
        Kameleoon.Internals.runtime.Visitor.currentVisit.addPage(this.time, e, this.keyPagesIndices, this.referrersIndices)
      }
    }
    VisitEvent_Page.save = 2;
    class VisitEvent_Product extends VisitEvent_Main {
      constructor(t) {
        super();
        this.eventType = "product";
        this.ean = t.ean;
        Kameleoon.Internals.runtime.Visitor.currentVisit.addProduct(this.ean)
      }
    }
    VisitEvent_Product.save = 0;
    class VisitEvent_StaticData extends VisitEvent_Main {
      constructor() {
        super();
        this.eventType = "staticData";
        this.obtainInfluences = (e, i) => {
          let t = {
            experiments: {},
            personalizations: {}
          };
          let n = e => {
            for (let i in e)
              if (e[i][1] < 0 || "-1" == i || null == e[i][0] || "null" == e[i][0]) delete e[i];
            return e
          };
          e.forEach((({
            ExperimentActivations: e,
            PersonalizationActivations: n
          }) => {
            for (let n in e) {
              let s = e[n];
              if (s.influence) {
                let e = s.influence - (i - s.times.slice(-1)[0]);
                t.experiments[n] = [parseInt(s.associatedVariationID), e]
              }
            }
            for (let e in n) {
              let s = n[e];
              if (s.influence) {
                let n = s.influence - (i - s.times.slice(-1)[0]);
                t.personalizations[e] = [1, n]
              }
            }
          }));
          this.experimentInfluences = n(t.experiments);
          this.personalizationInfluences = n(t.personalizations)
        };
        const {
          Visitor: e,
          Device: i
        } = Kameleoon.Internals.runtime;
        const {
          Browser: t,
          OperatingSystem: n,
          Language: s
        } = Kameleoon.Gatherer;
        this.timeSincePreviousVisit = e.obtainTimeSincePreviousVisit();
        this.browser = t.obtain();
        this.browserIndex = t.obtainIndex();
        this.browserVersion = i.browserVersion;
        this.os = n.obtain();
        this.osIndex = n.obtainIndex();
        this.screenWidth = i.screenWidth;
        this.screenHeight = i.screenHeight;
        this.localeLanguageTag = s.obtainLocaleTag();
        this.deviceType = i.type.toLocaleUpperCase();
        this.visitNumber = e.currentVisit.visitNumber;
        this.obtainInfluences(e.visits, e.currentVisit.startDate)
      }
    }
    VisitEvent_StaticData.save = 0;
    class VisitEvent_TargetingSegments extends VisitEvent_Main {
      constructor(t) {
        super();
        this.eventType = "targetingSegment";
        this.id = t.id;
        Kameleoon.Internals.runtime.Visitor.currentVisit.addTargetingSegment(this.time, this.id)
      }
    }
    VisitEvent_TargetingSegments.save = 0;
    class BitVectorUtils {}
    BitVectorUtils.safeLimitedBitIndex = (t, e) => {
      if (null == e || e >= t) return t;
      return e
    };
    BitVectorUtils.computeVectorFillFrom = (t, e, i, r) => {
      BitVectorUtils.clearVectorFrom(i, t, r);
      BitVectorUtils.addInVectorFrom(i, t, e, r)
    };
    BitVectorUtils.addInVectorFrom = (t, e, i, r) => {
      t[r + BitVectorUtils.safeLimitedBitIndex(e, i)] = 1
    };
    BitVectorUtils.clearVectorFrom = (t, e, i) => {
      for (let r = 0; r <= e; r++) t[i + r] = 0
    };
    BitVectorUtils.initBitIndexCounts = t => {
      let e = [];
      for (let i = 0; i <= t; i++) e[i] = 0;
      return e
    };
    BitVectorUtils.incrementBitIndexCount = (t, e, i) => {
      i[BitVectorUtils.safeLimitedBitIndex(t, e)]++
    };
    class DataUtils {}
    DataUtils.writeCategorySetInVectorFrom = (t, e, r, l, o) => {
      BitVectorUtils.clearVectorFrom(l, e, o);
      for (let i = 0, n = t.length; i < n; ++i) BitVectorUtils.addInVectorFrom(l, e, DataUtils.computeCategoryBitIndex(t[i], r), o)
    };
    DataUtils.writeCategoryCountsInVectorFrom = (t, e, r, l, o) => {
      let i = BitVectorUtils.initBitIndexCounts(e);
      for (let l = 0, o = t.length; l < o; ++l) {
        let o = t[l];
        for (let t = 0, l = o.length; t < l; ++t) BitVectorUtils.incrementBitIndexCount(e, DataUtils.computeCategoryBitIndex(o[t], r), i)
      }
      for (let t = 0; t <= e; t++) {
        l[o] = i[t];
        o++
      }
    };
    DataUtils.computeCategoryBitIndex = (t, e) => {
      if (null == t) return null;
      let r = e[t];
      if (null == r) return null;
      return r
    };
    class Learner {}
    Learner.computeProbabilities = (e, a, r) => {
      Learner.prepareEquals(e, a, r);
      return Learner.computeLayerSynapse(e.inputDimension, e.outputDimension, e.weights, e.bias, Learner.logistic, a)
    };
    Learner.prepareEquals = (e, a, r) => {
      if (e.standarizeInputs) Learner.standarizeEquals(e, a, r);
      else Learner.scaleEquals(e, a, r)
    };
    Learner.standarizeEquals = (e, a, r) => {
      let i = Kameleoon.Internals.configuration.MentalistFeatures.maxAbsoluteValueAfterStandardization;
      for (let n = 0; n < e.inputDimension; n++)
        if (0 == e.beforeDeviation[n]) a[n] = 0;
        else {
          let t = !0 === r[n] || isNaN(a[n]) || !isFinite(a[n]) ? e.beforeMean[n] : a[n];
          a[n] = t - e.beforeMean[n];
          a[n] /= e.beforeDeviation[n];
          a[n] = Math.min(a[n], i);
          a[n] = Math.max(a[n], -i)
        }
    };
    Learner.scaleEquals = (e, a, r) => {
      for (let i = 0; i < e.inputDimension; i++) {
        let n = !0 === r[i] || isNaN(a[i]) || !isFinite(a[i]) ? e.beforeMean[i] : a[i];
        if (0 == e.beforeDistance[i])
          if (n == e.beforeMin[i]) a[i] = e.afterMiddle;
          else if (n < e.beforeMin[i]) a[i] = e.afterMin;
        else a[i] = e.afterMax;
        else a[i] = e.afterMin + e.afterDistance / e.beforeDistance[i] * (n - e.beforeMin[i])
      }
    };
    Learner.computeLayerSynapse = (e, a, r, i, n, t) => {
      let s = [];
      for (let o = 0; o < a; o++) {
        let a = 0;
        for (let i = 0; i < e; i++) a += r[o][i] * t[i];
        s[o] = n(a + i[o])
      }
      return s
    };
    Learner.logistic = e => 1 / (1 + Math.exp(-e));
    class PreviousVisits {
      constructor(s) {
        this.timesStartedVisits = [];
        this.timesStartedPages = [];
        this.timesReferrers = [];
        this.keyPages = [];
        this.referrers = [];
        this.clicks = [];
        this.temperatureVisits = [];
        this.humidityVisits = [];
        this.pressureVisits = [];
        this.windSpeedVisits = [];
        this.cloudinessVisits = [];
        this.customDataVisits = [];
        this.conversions = {};
        for (let e = 0, t = s.length; e < t; ++e) {
          let t = s[e];
          this.timesStartedVisits.push(t.startDate);
          this.timesStartedPages = this.timesStartedPages.concat(t.obtainTimesStartedPages());
          this.timesReferrers = [];
          this.keyPages = [];
          this.referrers = [];
          t.pages.forEach((s => {
            this.keyPages.push(s.keyPagesMatched);
            if (s.referrersMatched.length > 0) {
              this.timesReferrers.push(s.timestamp);
              this.referrers.push(s.referrersMatched)
            }
          }));
          for (let s in t.conversions) {
            let e = t.conversions[s].count;
            let i = t.conversions[s].revenue;
            if (this.conversions[s]) {
              this.conversions[s].count += e;
              this.conversions[s].revenue += i
            } else this.conversions[s] = {
              count: e,
              revenue: i
            }
          }
          this.clicks.push(t.clicks);
          this.temperatureVisits.push(t.Weather.temperature);
          this.humidityVisits.push(t.Weather.humidity);
          this.pressureVisits.push(t.Weather.pressure);
          this.windSpeedVisits.push(t.Weather.windSpeed);
          this.cloudinessVisits.push(t.Weather.cloudiness);
          this.customDataVisits.push(t.customData)
        }
      }
    }
    class VisitVectorizationUtils {}
    VisitVectorizationUtils.NUMBER_LAST_KEY_PAGES = 3;
    VisitVectorizationUtils.NUMBER_LAST_REFERRERS = 3;
    VisitVectorizationUtils.computeVector = (e, t, i, n, l, r, a) => {
      let o = Kameleoon.Internals.configuration.MentalistFeatures;
      let s = Kameleoon.Internals.configuration.MentalistLearner;
      let u = [];
      let c = 0;
      VisitVectorizationUtils.PreviousVisitsVectorizationUtils.computeVectorFillFrom(t, r, a, u, i, c);
      c += (null != r ? s.experiments[r] : null != a ? s.targetingSegments[a] : s)
        .previousVisitsHistoryVectorDimension;
      if (l) {
        VisitVectorizationUtils.VisitVectorizationUtils.computeVectorFillFrom(e, r, a, u, i, c);
        c += (null != r ? s.experiments[r] : null != a ? s.targetingSegments[a] : s)
          .visitHistoryVectorDimension
      }
      if (n) {
        u[c] = Kameleoon.Internals.runtime.Visitor.obtainTimeSincePreviousVisit();
        c++;
        let t = e.visitNumber;
        if (null == t) i[c] = !0;
        else u[c] = t;
        c++;
        DataUtils.writeCategorySetInVectorFrom(Kameleoon.Internals.runtime.storedData.obtainField("Runtime", "landingKeyPagesIndices"), o.keyPages.length, VisitVectorizationUtils.computeIndexByCategory(o.keyPages), u, c);
        c += o.keyPages.length + 1;
        DataUtils.writeCategorySetInVectorFrom(Kameleoon.Internals.runtime.storedData.obtainField("Runtime", "firstReferrersIndices"), o.referrers.length, VisitVectorizationUtils.computeIndexByCategory(o.referrers), u, c);
        c += o.referrers.length + 1;
        DataUtils.writeCategorySetInVectorFrom([null], o.timeZoneGroups.length, VisitVectorizationUtils.computeIndexByCategory(o.timeZoneGroups), u, c);
        c += o.timeZoneGroups.length + 1;
        BitVectorUtils.computeVectorFillFrom(o.languages.length, DataUtils.computeCategoryBitIndex(null, VisitVectorizationUtils.computeIndexByCategory(o.languages)), u, c);
        c += o.languages.length + 1;
        BitVectorUtils.computeVectorFillFrom(o.browsers.length, DataUtils.computeCategoryBitIndex(Kameleoon.Gatherer.Browser.obtainIndex(), VisitVectorizationUtils.computeIndexByCategory(o.browsers)), u, c);
        c += o.browsers.length + 1;
        let n = e.Device.browserVersion;
        if (isNaN(n) || !isFinite(n) || n < 0 || n >= 1e3) n = null;
        if (null == n) i[c] = !0;
        else u[c] = n;
        c++;
        u[c] = "DESKTOP" != e.Device.type ? 1 : 0;
        c++;
        BitVectorUtils.computeVectorFillFrom(o.oss.length, DataUtils.computeCategoryBitIndex(Kameleoon.Gatherer.OperatingSystem.obtainIndex(), VisitVectorizationUtils.computeIndexByCategory(o.oss)), u, c);
        c += o.oss.length + 1;
        i[c] = !0;
        c++;
        i[c] = !0;
        c++;
        let l = e.Device.screenWidth;
        if (l < 0 || l >= 1e4) l = null;
        if (null == l) i[c] = !0;
        else u[c] = l;
        c++;
        let r = e.Device.screenHeight;
        if (r < 0 || r >= 1e4) r = null;
        if (null == r) i[c] = !0;
        else u[c] = r;
        c++;
        u[c] = !0 === navigator.javaEnabled() ? 1 : 0;
        c++
      }
      return u
    };
    VisitVectorizationUtils.computeInputGoalIds = (e, t) => {
      let i = Kameleoon.Internals.configuration.MentalistFeatures;
      return (null != e ? i.experiments[e] : null != t ? i.targetingSegments[t] : i)
        .inputGoalIds
    };
    VisitVectorizationUtils.CUSTOM_DATA_BOOLEAN_VALUE_VECTOR_PARSER = {
      parse: e => {
        switch (e) {
          case "true":
            return [1];
          case "false":
            return [0];
          default:
            return null
        }
      }
    };
    VisitVectorizationUtils.CUSTOM_DATA_SCALAR_VALUE_VECTOR_PARSER = {
      parse: e => {
        let t = parseFloat(e);
        if (isNaN(t) || !isFinite(t)) return null;
        return [t]
      }
    };
    VisitVectorizationUtils.CUSTOM_DATA_CATEGORY_VALUE_VECTOR_PARSER = {
      parse: (e, t) => {
        let i = parseInt(e);
        if (isNaN(i) || i < 0 || i >= t) return null;
        let n;
        switch (t) {
          case 1:
          case 2:
            n = [i];
            break;
          default:
            n = [];
            for (let e = 0; e < t; e++) n[e] = 0;
            n[i] = 1;
            break
        }
        return n
      }
    };
    VisitVectorizationUtils.computeCustomDataBooleanValueVectorOnlineMeanAndDeviation = (e, t) => {
      let i = new OnlineMeanAndDeviation(1);
      for (let n = 0, l = e.length; n < l; ++n) {
        let l = e[n][t];
        if (null != l)
          for (let e in l) {
            let t = VisitVectorizationUtils.CUSTOM_DATA_BOOLEAN_VALUE_VECTOR_PARSER.parse(e);
            if (null != t) i.update(t, l[e])
          }
      }
      return 0 == i.nbUpdates[0] ? null : i
    };
    VisitVectorizationUtils.computeCustomDataScalarValueVectorOnlineMeanAndDeviation = (e, t) => {
      let i = new OnlineMeanAndDeviation(1);
      for (let n = 0, l = e.length; n < l; ++n) {
        let l = e[n][t];
        if (null != l)
          for (let e in l) {
            let t = VisitVectorizationUtils.CUSTOM_DATA_SCALAR_VALUE_VECTOR_PARSER.parse(e);
            if (null != t) i.update(t, l[e])
          }
      }
      return 0 == i.nbUpdates[0] ? null : i
    };
    VisitVectorizationUtils.computeCustomDataCategoryValueVectorOnlineMeanAndDeviation = (e, t, i) => {
      let n;
      switch (i) {
        case 1:
        case 2:
          n = 1;
          break;
        default:
          n = i;
          break
      }
      let l = new OnlineMeanAndDeviation(n);
      for (let n = 0, r = e.length; n < r; ++n) {
        let r = e[n][t];
        if (null != r)
          for (let e in r) {
            let t = VisitVectorizationUtils.CUSTOM_DATA_CATEGORY_VALUE_VECTOR_PARSER.parse(e, i);
            if (null != t) l.update(t, r[e])
          }
      }
      return 0 == l.nbUpdates[0] ? null : l
    };
    VisitVectorizationUtils.computeIndexByCategory = e => {
      let t = {};
      let i = 0;
      for (let n = 0, l = e.length; n < l; ++n) {
        t[e[n]] = i;
        i++
      }
      return t
    };
    VisitVectorizationUtils.VisitVectorizationUtils = {
      computeVectorFillFrom: (e, t, i, n, l, r) => {
        let a = Kameleoon.Internals.configuration.MentalistFeatures;
        let o = OnlineMeanAndDeviation.createFromDifferences(e.obtainTimesStartedPages(), !1, !0, !0);
        let s = [];
        let u = [];
        let c = [];
        e.pages.forEach((function(e) {
          s.push(e.keyPagesMatched);
          if (e.referrersMatched.length > 0) {
            u.push(e.referrersMatched);
            c.push(e.timestamp)
          }
        }));
        let V = OnlineMeanAndDeviation.createFromDifferences(c, !1, !0, !0);
        let m = VisitVectorizationUtils.computeIndexByCategory(a.referrers);
        let g = VisitVectorizationUtils.computeIndexByCategory(a.keyPages);
        n[r] = 0;
        r++;
        for (let e = 0; e < VisitVectorizationUtils.NUMBER_LAST_REFERRERS; e++) {
          if (e < u.length) DataUtils.writeCategorySetInVectorFrom(u[u.length - 1 - e], a.referrers.length, m, n, r);
          else BitVectorUtils.clearVectorFrom(n, a.referrers.length, r);
          r += a.referrers.length + 1
        }
        DataUtils.writeCategoryCountsInVectorFrom(u, a.referrers.length, m, n, r);
        r += a.referrers.length + 1;
        n[r] = u.length;
        r++;
        n[r] = V.mean[0];
        r++;
        n[r] = V.deviation[0];
        r++;
        for (let e = 0; e < VisitVectorizationUtils.NUMBER_LAST_KEY_PAGES; e++) {
          if (e < s.length) DataUtils.writeCategorySetInVectorFrom(s[s.length - 1 - e], a.keyPages.length, g, n, r);
          else BitVectorUtils.clearVectorFrom(n, a.keyPages.length, r);
          r += a.keyPages.length + 1
        }
        DataUtils.writeCategoryCountsInVectorFrom(s, a.keyPages.length, g, n, r);
        r += a.keyPages.length + 1;
        n[r] = e.obtainPageNumberViews();
        r++;
        n[r] = o.mean[0];
        r++;
        n[r] = o.deviation[0];
        r++;
        n[r] = 0;
        r += 1;
        n[r] = 0;
        r++;
        n[r] = 0;
        r++;
        n[r] = 0;
        r++;
        n[r] = 0;
        r++;
        n[r] = 0;
        r++;
        n[r] = 0;
        r++;
        n[r] = 0;
        r++;
        l[r] = !0;
        r++;
        if (null == e.clicks) l[r] = !0;
        else n[r] = e.clicks;
        r++;
        if (null == e.Weather.temperature) l[r] = !0;
        else n[r] = e.Weather.temperature;
        r++;
        if (null == e.Weather.humidity) l[r] = !0;
        else n[r] = e.Weather.humidity;
        r++;
        if (null == e.Weather.pressure) l[r] = !0;
        else n[r] = e.Weather.pressure;
        r++;
        if (null == e.Weather.windSpeed) l[r] = !0;
        else n[r] = e.Weather.windSpeed;
        r++;
        if (null == e.Weather.cloudiness) l[r] = !0;
        else n[r] = e.Weather.cloudiness;
        r++;
        let f = [e.customData];
        for (let e = 0, t = a.customData.length; e < t; ++e) {
          let t = a.customData[e];
          let i = a.numberValuesByCustomDatum[t];
          if (-1 != i) {
            let e;
            switch (i) {
              case -2:
                e = VisitVectorizationUtils.computeCustomDataBooleanValueVectorOnlineMeanAndDeviation(f, t);
                if (null == e) {
                  l[r] = !0;
                  r++
                } else {
                  n[r] = e.mean[0];
                  r++
                }
                break;
              case 0:
                e = VisitVectorizationUtils.computeCustomDataScalarValueVectorOnlineMeanAndDeviation(f, t);
                if (null == e) {
                  l[r] = !0;
                  r++
                } else {
                  n[r] = e.mean[0];
                  r++
                }
                break;
              case 1:
              case 2:
                e = VisitVectorizationUtils.computeCustomDataCategoryValueVectorOnlineMeanAndDeviation(f, t, i);
                if (null == e) {
                  l[r] = !0;
                  r++
                } else {
                  n[r] = e.mean[0];
                  r++
                }
                break;
              default:
                e = VisitVectorizationUtils.computeCustomDataCategoryValueVectorOnlineMeanAndDeviation(f, t, i);
                if (null == e)
                  for (let e = 0; e < i; e++) {
                    l[r] = !0;
                    r++
                  } else
                    for (let t = 0; t < i; t++) {
                      n[r] = e.mean[t];
                      r++
                    }
                break
            }
          }
        }
        let d = VisitVectorizationUtils.computeInputGoalIds(t, i);
        for (let t = 0, i = d.length; t < i; ++t) {
          let i = d[t];
          let l = e.conversions[i];
          n[r] = null == l ? 0 : l.count;
          r++
        }
        for (let t = 0, i = d.length; t < i; ++t) {
          let i = d[t];
          let l = e.conversions[i];
          n[r] = null == l ? 0 : l.revenue;
          r++
        }
      }
    };
    VisitVectorizationUtils.PreviousVisitsVectorizationUtils = {
      computeVectorFillFrom: (e, t, i, n, l, r) => {
        let a = Kameleoon.Internals.configuration.MentalistFeatures;
        let o = OnlineMeanAndDeviation.createFromDifferences(e.timesStartedVisits, !1, !0, !0);
        let s = OnlineMeanAndDeviation.createFromDifferences(e.timesStartedPages, !1, !0, !0);
        let u = OnlineMeanAndDeviation.createFromDifferences(e.timesReferrers, !1, !0, !0);
        let c = [];
        for (let t = 0, i = e.clicks.length; t < i; ++t) {
          let i = e.clicks[t];
          if (null != i) c.push(i)
        }
        let V = 0 == c.length ? null : OnlineMeanAndDeviation.createFromValues(c);
        let m = VisitVectorizationUtils.computeIndexByCategory(a.referrers);
        let g = VisitVectorizationUtils.computeIndexByCategory(a.keyPages);
        for (let t = 0; t < VisitVectorizationUtils.NUMBER_LAST_REFERRERS; t++) {
          if (t < e.referrers.length) DataUtils.writeCategorySetInVectorFrom(e.referrers[e.referrers.length - 1 - t], a.referrers.length, m, n, r);
          else BitVectorUtils.clearVectorFrom(n, a.referrers.length, r);
          r += a.referrers.length + 1
        }
        DataUtils.writeCategoryCountsInVectorFrom(e.referrers, a.referrers.length, m, n, r);
        r += a.referrers.length + 1;
        n[r] = e.referrers.length;
        r++;
        n[r] = u.mean[0];
        r++;
        n[r] = u.deviation[0];
        r++;
        n[r] = e.timesStartedVisits.length;
        r++;
        n[r] = o.mean[0];
        r++;
        n[r] = o.deviation[0];
        r++;
        for (let t = 0; t < VisitVectorizationUtils.NUMBER_LAST_KEY_PAGES; t++) {
          if (t < e.keyPages.length) DataUtils.writeCategorySetInVectorFrom(e.keyPages[e.keyPages.length - 1 - t], a.keyPages.length, g, n, r);
          else BitVectorUtils.clearVectorFrom(n, a.keyPages.length, r);
          r += a.keyPages.length + 1
        }
        DataUtils.writeCategoryCountsInVectorFrom(e.keyPages, a.keyPages.length, g, n, r);
        r += a.keyPages.length + 1;
        n[r] = e.timesStartedPages.length;
        r++;
        n[r] = s.mean[0];
        r++;
        n[r] = s.deviation[0];
        r++;
        n[r] = 0;
        r += 1;
        let f = VisitVectorizationUtils.computeInputGoalIds(t, i);
        for (let t = 0, i = f.length; t < i; ++t) {
          let i = f[t];
          let l = e.conversions[i];
          n[r] = null == l ? 0 : l.revenue;
          r++
        }
        for (let t = 0, i = f.length; t < i; ++t) {
          let i = f[t];
          let l = e.conversions[i];
          n[r] = null == l ? 0 : l.revenue;
          r++
        }
        n[r] = 0;
        r++;
        n[r] = 0;
        r++;
        n[r] = 0;
        r++;
        n[r] = 0;
        r++;
        n[r] = 0;
        r++;
        n[r] = 0;
        r++;
        n[r] = 0;
        r++;
        l[r] = !0;
        r++;
        l[r] = !0;
        r++;
        if (null == V) {
          l[r] = !0;
          r++;
          l[r] = !0;
          r++
        } else {
          n[r] = V.mean[0];
          r++;
          n[r] = V.deviation[0];
          r++
        }
        let d;
        c = [];
        for (let t = 0, i = e.temperatureVisits.length; t < i; ++t) {
          let i = e.temperatureVisits[t];
          if (null != i) c.push(i)
        }
        d = 0 == c.length ? null : OnlineMeanAndDeviation.createFromValues(c);
        if (null == d) {
          l[r] = !0;
          r++;
          l[r] = !0;
          r++
        } else {
          n[r] = d.mean[0];
          r++;
          n[r] = d.deviation[0];
          r++
        }
        c = [];
        for (let t = 0, i = e.humidityVisits.length; t < i; ++t) {
          let i = e.humidityVisits[t];
          if (null != i) c.push(i)
        }
        d = 0 == c.length ? null : OnlineMeanAndDeviation.createFromValues(c);
        if (null == d) {
          l[r] = !0;
          r++;
          l[r] = !0;
          r++
        } else {
          n[r] = d.mean[0];
          r++;
          n[r] = d.deviation[0];
          r++
        }
        c = [];
        for (let t = 0, i = e.pressureVisits.length; t < i; ++t) {
          let i = e.pressureVisits[t];
          if (null != i) c.push(i)
        }
        d = 0 == c.length ? null : OnlineMeanAndDeviation.createFromValues(c);
        if (null == d) {
          l[r] = !0;
          r++;
          l[r] = !0;
          r++
        } else {
          n[r] = d.mean[0];
          r++;
          n[r] = d.deviation[0];
          r++
        }
        c = [];
        for (let t = 0, i = e.windSpeedVisits.length; t < i; ++t) {
          let i = e.windSpeedVisits[t];
          if (null != i) c.push(i)
        }
        d = 0 == c.length ? null : OnlineMeanAndDeviation.createFromValues(c);
        if (null == d) {
          l[r] = !0;
          r++;
          l[r] = !0;
          r++
        } else {
          n[r] = d.mean[0];
          r++;
          n[r] = d.deviation[0];
          r++
        }
        c = [];
        for (let t = 0, i = e.cloudinessVisits.length; t < i; ++t) {
          let i = e.cloudinessVisits[t];
          if (null != i) c.push(i)
        }
        d = 0 == c.length ? null : OnlineMeanAndDeviation.createFromValues(c);
        if (null == d) {
          l[r] = !0;
          r++;
          l[r] = !0;
          r++
        } else {
          n[r] = d.mean[0];
          r++;
          n[r] = d.deviation[0];
          r++
        }
        let h = e.customDataVisits;
        for (let e = 0, t = a.customData.length; e < t; ++e) {
          let t = a.customData[e];
          let i = a.numberValuesByCustomDatum[t];
          if (-1 != i) {
            let e;
            switch (i) {
              case -2:
                e = VisitVectorizationUtils.computeCustomDataBooleanValueVectorOnlineMeanAndDeviation(h, t);
                if (null == e) {
                  l[r] = !0;
                  r++;
                  l[r] = !0;
                  r++
                } else {
                  n[r] = e.mean[0];
                  r++;
                  n[r] = e.deviation[0];
                  r++
                }
                break;
              case 0:
                e = VisitVectorizationUtils.computeCustomDataScalarValueVectorOnlineMeanAndDeviation(h, t);
                if (null == e) {
                  l[r] = !0;
                  r++;
                  l[r] = !0;
                  r++
                } else {
                  n[r] = e.mean[0];
                  r++;
                  n[r] = e.deviation[0];
                  r++
                }
                break;
              case 1:
              case 2:
                e = VisitVectorizationUtils.computeCustomDataCategoryValueVectorOnlineMeanAndDeviation(h, t, i);
                if (null == e) {
                  l[r] = !0;
                  r++;
                  l[r] = !0;
                  r++
                } else {
                  n[r] = e.mean[0];
                  r++;
                  n[r] = e.deviation[0];
                  r++
                }
                break;
              default:
                e = VisitVectorizationUtils.computeCustomDataCategoryValueVectorOnlineMeanAndDeviation(h, t, i);
                if (null == e)
                  for (let e = 0; e < i; e++) {
                    l[r] = !0;
                    r++;
                    l[r] = !0;
                    r++
                  } else
                    for (let t = 0; t < i; t++) {
                      n[r] = e.mean[t];
                      r++;
                      n[r] = e.deviation[t];
                      r++
                    }
                break
            }
          }
        }
      }
    };
    class CommandQueue {
      constructor(e, s) {
        this.executeCommand = e => {
          try {
            if (e.command) e = e.command;
            if ("function" === typeof e) e();
            else {
              const s = e[0];
              const o = s.split(".");
              let t;
              let m;
              if ("Kameleoon" != o[0]) {
                t = Kameleoon.API;
                m = Kameleoon.API[o[0]]
              } else m = Kameleoon.API[o[2]];
              o.forEach((e => {
                if (null == t) t = window[e];
                else t = t[e]
              }));
              t.apply(m, Array.prototype.slice.call(e, 1))
            }
          } catch (e) {
            console.log(e)
          }
        };
        const o = "IMMEDIATE";
        this.commands = e && e.forEach ? e : [];
        this.commands.push = e => {
          if (s == o) e.level == s ? this.executeCommand(e) : this.commands.unshift(e);
          else this.executeCommand(e)
        };
        const t = [];
        if (s == o)
          for (let e = this.commands.length - 1; e >= 0; e--) {
            const s = this.commands[e];
            if (s.level === o) {
              t.push(s);
              this.commands.splice(e, 1)
            }
          } else {
            this.commands.forEach((e => {
              t.push(e)
            }));
            this.commands.splice(0, this.commands.length)
          }
        t.forEach(this.executeCommand);
        return this.commands
      }
    }
    class Actions {
      constructor() {
        this.campaignsListenerQueue = [];
        this.associateActionAndVariation = (e, n, i) => {
          let t = !0;
          let o = !0;
          if (0 === i) o = !1;
          else if (1 === i) t = !1;
          if (null === n) e.trackingPerformed = !0;
          const a = Kameleoon.Internals.runtime.variations.filter((e => e.id == n))[0];
          let s = "Reference";
          if (e && e.variations) e.variations.forEach((function(e, i) {
            if (e.id && e.name && e.id == n) s = e.name
          }));
          const r = e.associatedVariation;
          if (e && r && n == r.id) s = r.name;
          if (e && t) e.associatedVariation = {
            id: n,
            name: s
          };
          if (e && o && !e.displayedVariation) e.associationMade = !1;
          if (a) {
            if (e && (Kameleoon.Internals.runtime.simulationMode && -1 == e.id || !e.associationMade)) {
              if (t) {
                e.associatedVariation = a;
                e.associationMade = !0
              }
              a.actionId = e.id;
              if (o) e.displayedVariation = new Variation(a)
            }
          } else {
            e.displayedVariation = {
              id: n,
              name: s
            };
          }
        };
        this.stopCampaignListener = () => {
          if (null != this.campaignsListenerIntervalId) {
            Kameleoon.Utils.clearInterval(this.campaignsListenerIntervalId);
            this.campaignsListenerIntervalId = null
          }
        };
        this.tickCampaignListener = () => {
          const e = this.campaignsListenerQueue;
          if (0 === e.length) {
            this.stopCampaignListener();
            return
          }
          this.campaignsListenerQueue = [];
          this.process(e)
        };
        this.startCampaignListenerIfNeeded = () => {
          if (null != this.campaignsListenerIntervalId) return;
          this.campaignsListenerIntervalId = Kameleoon.Utils.setInterval(this.tickCampaignListener, Kameleoon.Internals.runtime.PAGE_LOADING_POLL_DELAY)
        };
        this.clear = () => {
          this.campaignsListenerQueue = [];
          this.campaignsListenerIntervalId = null
        };
        this.initCampaignListener = () => {
          if (0 === this.campaignsListenerQueue.length) {
            this.stopCampaignListener();
            return
          }
          this.startCampaignListenerIfNeeded()
        }
      }
      checkCapping(e, n, i, t, o) {
        if (null != t.expositionFrequencySameVisit && Kameleoon.Internals.runtime.Visitor.obtainActionNumberActivations(n, i, null, o, !0, !1, !1, e) >= t.expositionFrequencySameVisit || null != t.expositionFrequencySameVisitor && null != t.expositionFrequencySameVisitorDelaySeconds && Kameleoon.Internals.runtime.Visitor.obtainActionNumberActivations(n, i, o - 1e3 * t.expositionFrequencySameVisitorDelaySeconds, o, !0, !0, !1, e) >= t.expositionFrequencySameVisitor || t.cappingPerVisitorNumberExpositions && Kameleoon.Internals.runtime.Visitor.obtainActionNumberActivations(n, i, null, o, !0, !0, !1, e) >= t.expositionFrequencySameVisitorMax || t.cappingPerVisitorNumberExposedVisits && Kameleoon.Internals.runtime.Visitor.obtainActionNumberActivations(n, i, null, null, !0, !0, !0, e) >= t.exposedVisitsSameVisitorMax || t.cappingPerVisitorConvertGoal && Kameleoon.Internals.runtime.Visitor.obtainNumberConversions(t.cappingPerVisitorGoalId) > 0 || null != t.expositionFrequencyDelaySecondsBetweenTwoExpositions && Kameleoon.Internals.runtime.Visitor.obtainActionNumberActivations(n, i, o - 1e3 * t.expositionFrequencyDelaySecondsBetweenTwoExpositions, o, !0, !0, !1, e) >= 1) return !1;
        return !0
      }
      checkActionConsent(e) {
        if (e.experimentAction) {
          if (!Kameleoon.Internals.runtime.Consent.AB_TESTING) {
            if (null == Kameleoon.Internals.runtime.Consent.AB_TESTING) {
              if ("ALL" == Kameleoon.Internals.configuration.beforeAbtestConsent) return !0;
              if ("PARTIALLY" == Kameleoon.Internals.configuration.beforeAbtestConsent && e.technical) return !0
            } else if (e.technical && "RUN" == Kameleoon.Internals.configuration.abtestConsentOptout) return !0;
            return !1
          }
        } else if (!Kameleoon.Internals.runtime.Consent.PERSONALIZATION) {
          if (null == Kameleoon.Internals.runtime.Consent.PERSONALIZATION) {
            if ("ALL" == Kameleoon.Internals.configuration.beforePersonalizationConsent) return !0;
            if ("PARTIALLY" == Kameleoon.Internals.configuration.beforePersonalizationConsent && e.technical) return !0
          } else if (e.technical && "RUN" == Kameleoon.Internals.configuration.personalizationConsentOptout) return !0;
          return !1
        }
        return !0
      }
      checkActionsTargeting(e) {
        Kameleoon.Internals.runtime.Campaigns.obtainCampaignsList(1)
          .forEach((e => {
            e.previousExposition = e.exposition
          }));
        const n = [];
        for (let i = 0, t = e.length; i < t; ++i) {
          const t = e[i];
          if (!this.checkActionConsent(t) || t.blocked || t.featureFlag || null === t.registeredVariationId) continue;
          if (null == t.numberTargetingCheckings) t.numberTargetingCheckings = 0;
          if (Kameleoon.Targeting.checkIfTargetingMustBeComputed(t.targeting, t.rescheduleTargeting || 0 == t.numberTargetingCheckings, !t.experimentAction && "CUMULATIVE_WEIGHT" == t.checkConditionsRule)) n.push(t)
        }
        e = n;
        for (let n = 0, i = e.length; n < i; ++n) {
          const i = e[n];
          if (!0 === i.forceTargeting) i.targeting = !0;
          else {
            const e = !i.experimentAction && "CUMULATIVE_WEIGHT" == i.personalizationCheckConditionsRule;
            const n = Kameleoon.Targeting.checkTree(i, i.targetingTrigger ? i.targetingTrigger.tree : null, e, i.targetingTrigger || null);
            Kameleoon.Targeting.applyTargetingResult(i.targetingTrigger, n);
            let t = null;
            if (!1 !== n.targeting || i.simulationMode) {
              t = Kameleoon.Targeting.checkTree(i, i.targetingSegment ? i.targetingSegment.tree : null, e, i.targetingSegment || null);
              Kameleoon.Targeting.applyTargetingResult(i.targetingSegment, t)
            }
            if (!1 === t?.targeting || !1 === n.targeting) i.targeting = !1;
            else if (!0 === t?.targeting && !0 === n.targeting) i.targeting = !0;
            else i.targeting = void 0;
            const o = i.targetingSegment && !0 === t?.rescheduleTargeting || i.targetingTrigger && !0 === n.rescheduleTargeting;
            i.rescheduleTargeting = !1 !== i.targeting && o ? !0 : !1;
            i.numberTargetingCheckings++
          }
        }
        const i = [];
        for (let n = 0, i = e.length; n < i; ++n) {
          const i = e[n];
          if (!1 === i.targeting || !i.experimentAction && !0 === i.targeting && !1 === i.exposition) {
            this.associateActionAndVariation(i, 0, 1);
            Kameleoon.Utils.removeCSSStyleSheet(i)
          }
          if (Kameleoon.Targeting.checkIfTargetingMustBeComputed(i.targeting, i.rescheduleTargeting, !i.experimentAction && "CUMULATIVE_WEIGHT" == i.personalizationCheckConditionsRule)) this.campaignsListenerQueue.push(i)
        }
        if (this.campaignsListenerQueue.length > 0) this.initCampaignListener();
        if (e.length > 0 && Kameleoon.Internals.runtime.targetingsEvent) Kameleoon.Internals.runtime.targetingsEvent.emit(e)
      }
      performActionsTracking(e) {
        const n = [];
        for (let i = 0, t = e.length; i < t; ++i) {
          const t = e[i];
          if (t.trackingPerformed || !t.associatedVariation || null == t.associatedVariation.id) continue;
          n.push(t)
        }
        e = n;
        for (let n = 0, i = e.length; n < i; ++n) {
          const i = e[n];
          const t = i.associatedVariation;
          let o = i.collectingDataDisabled ? !1 : !0;
          if (i.experimentAction && 0 == i.deviation[t.id]) o = !1;
          if (i.mentalistEnabled) t.name += " (Predicteo)";
          if (i.experimentAction) Kameleoon.Gatherer.track(VisitEvent_Experiment, {
            id: i.id,
            variationId: t.id,
            notTrack: !(i.kameleoonTracking && o)
          });
          else Kameleoon.Gatherer.track(VisitEvent_Personalization, {
            id: i.id,
            variationId: 0 == t.id ? 0 : 1,
            notTrack: !(i.kameleoonTracking && o),
            originalVariationId: t.id,
            unexpositionCause: i.notExposedReason
          });
          if (o && (i.experimentAction || i.exposition || !i.exposition && "PERSONALIZATION_EXCLUSION" == i.notExposedReason)) {
            const e = [];
            if (i.universalAnalyticsTracking) e.push((() => Kameleoon.Tracking.processUniversalAnalytics(i)));
            if (i.clarity) e.push((() => Kameleoon.Tracking.processClarity(i)));
            if (i.customIntegrations) e.push((() => Kameleoon.Tracking.processCustomIntegration(i)));
            if (e.length) Kameleoon.Internals.runtime.RequestManager.addCallback((() => {
              e.forEach((e => e()))
            }))
          }
          i.trackingPerformed = !0
        }
      }
      performDeferredVariations(e, n, i) {}
      process(e, n) {
        const i = (new Date)
          .getTime();
        this.checkActionsTargeting(e);
        const t = [];
        for (let o = 0, a = e.length; o < a; ++o) {
          const a = e[o];
          if (a.treated || a.blocked) continue;
          if (!0 === a.targeting) {
            Kameleoon.Internals.runtime.Visitor.currentVisit.addActionTriggered(a.id, a.experimentAction);
            if (a.targetingSegmentId) Kameleoon.Utils.sendKameleoonCustomEvent.call(window, "SegmentTriggered", {
              segment: {
                id: a.targetingSegmentId,
                name: a.targetingSegment ? a.targetingSegment.name : null
              }
            });
            if (a.targetingTriggerId) Kameleoon.Utils.sendKameleoonCustomEvent.call(window, "TriggerTriggered", {
              trigger: {
                id: a.targetingTriggerId,
                name: a.targetingTrigger ? a.targetingTrigger.name : null
              }
            });
            if (a.experimentAction) {
              const e = new APIAction(a, 0);
              Kameleoon.Utils.sendKameleoonCustomEvent.call(window, "ExperimentTriggered", {
                experiment: e
              }, "experiment/triggered");
              a.performVariationAssignment(!1);
              if (null != a.associatedVariation) {
                if (!this.checkCapping(!0, a.id, a.associatedVariation.id, a.associatedVariation, i) && !a.forceTargeting) a.targeting = !1;
                if (null === a.associatedVariation.id) a.targeting = !1
              }
            }
          }
          if (!0 === a.targeting) {
            a.treated = !0;
            this.currentAction = a;
            if (a.displayedVariation) {
              if (a.experimentAction)
                if (0 != a.displayedVariation.id && "reference" != a.displayedVariation.id || a.executeCodeForReference) {
                  if (a.cssCode && !a.cssCodeEvaluated) {
                    a.cssCodeEvaluated = !0;
                    Kameleoon.Utils.addCSSStyleSheet(a.cssCode, a, null)
                  }
                  if (a.javaScriptCode && !a.javaScriptCodeEvaluated) {
                    a.javaScriptCodeEvaluated = !0;
                    Kameleoon.Utils.runProtectedScript(a.javaScriptCode, "kameleoonActionJavaScriptCode-" + a.id + ".js")
                  }
                } if (!n && a.displayedVariation.process) a.displayedVariation.process();
              if (a.targeting && (a.experimentAction || a.exposition)) {
                const e = {};
                if (a.experimentAction) e.experiment = new APIAction(a, 0);
                else e.personalization = new APIAction(a, 1);
                Kameleoon.Utils.sendKameleoonCustomEvent.call(window, a.experimentAction ? "ExperimentActivated" : "PersonalizationActivated", e, "action/activated")
              }
              t.push(a)
            }
          }
        }
        this.performActionsTracking(t)
      }
      processAllActions() {
        let e = [];
        e = e.concat(Kameleoon.Internals.runtime.Campaigns.obtainCampaignsList(0));
        this.process(e);
        Kameleoon.Internals.runtime.Campaigns.obtainCampaignsList(0)
          .forEach((e => {
            e.handleSpecialCase()
          }));
      }
    }
    class Campaigns {
      constructor() {
        this.experiments = {};
        this.personalizations = {};
        this.experimentsList = [];
        this.personalizationsList = []
      }
      addCampaign(i) {
        const t = i.id.toString();
        const s = i.experimentAction;
        const n = s ? this.experiments : this.personalizations;
        const e = s ? this.experimentsList : this.personalizationsList;
        if (n[t]) {
          const s = e.findIndex((i => i.id.toString() == t));
          if (-1 !== s) e[s] = i
        } else e.push(i);
        n[t] = i
      }
      obtainCampaign(i, t) {
        if (null == i) return;
        const s = i.toString();
        if (null != t) return t ? this.experiments[s] : this.personalizations[s];
        return this.experiments[s] || this.personalizations[s]
      }
      obtainCampaignsList(i) {
        const t = "experiments" === i || 0 === i ? "experiments" : "personalizations";
        return "experiments" === t ? this.experimentsList : this.personalizationsList
      }
    }
    class Consent {
      constructor() {
        this.disable = (e, n) => {
          Kameleoon.Utils.sendKameleoonCustomEvent("Internals", {
            type: "consent/disable",
            consentType: e
          });
          if (e && "BOTH" != e) this[e] = !1;
          else {
            this.AB_TESTING = !1;
            this.PERSONALIZATION = !1
          }
          if (1 != n) this.write();
          Kameleoon.Utils.sendKameleoonCustomEvent.call(window, "LegalConsentUpdated", {
            legalConsentUpdate: this.getConsent()
          })
        };
        this.enable = (e, n) => {
          Kameleoon.Utils.sendKameleoonCustomEvent("Internals", {
            type: "consent/enable",
            consentType: e
          });
          if (e && "BOTH" != e) this[e] = !0;
          else {
            this.AB_TESTING = !0;
            this.PERSONALIZATION = !0
          }
          if (Kameleoon.Internals.runtime?.RequestManager) {
            Kameleoon.Internals.runtime.RequestManager.processRequests();
            this.purge()
          }
          if (1 != n) this.write();
          Kameleoon.Utils.sendKameleoonCustomEvent.call(window, "LegalConsentUpdated", {
            legalConsentUpdate: this.getConsent()
          })
        };
        this.getConfiguredConsent = () => ({
          AB_TESTING: Kameleoon.Internals.configuration.abtestConsent,
          PERSONALIZATION: Kameleoon.Internals.configuration.personalizationConsent
        });
        this.getConsent = () => ({
          AB_TESTING: this.AB_TESTING,
          PERSONALIZATION: this.PERSONALIZATION
        });
        this.hasGlobalConsent = () => {
          return this.AB_TESTING || this.PERSONALIZATION
        };
        this.initialize = e => {
          Kameleoon.Utils.sendKameleoonCustomEvent("Internals", {
            type: "consent/initialize",
            consent: e
          });
          this.AB_TESTING = e.AB_TESTING;
          this.PERSONALIZATION = e.PERSONALIZATION;
          this.initializeSdk()
        };
        this.initializeSdk = () => {
          if (this.AB_TESTING) return;
          const e = e => {
            if ("boolean" === typeof e) return e;
            if (!e || "object" !== typeof e) return;
            const {
              consent: n
            } = e;
            if ("boolean" === typeof n) return n;
            if ("number" === typeof n) {
              if (1 === n) return !0;
              if (2 === n) return !1
            }
          };
          try {
            const n = localStorage.getItem("kameleoonConsentData");
            if (!n) return;
            const t = JSON.parse(n);
            const o = Kameleoon.Utils.readLocalData("kameleoonVisitorCode", "COOKIE");
            const s = e(t?.[o]);
            if ("boolean" === typeof s) this.AB_TESTING = s
          } catch (e) {}
        };
        this.purge = () => {
          if (Kameleoon.Internals.runtime) {
            const e = e => {
              if (null != e)
                for (const n in e) Kameleoon.Utils.createLocalData(e[n].name, e[n].value, e[n].days, e[n].domain, e[n].forceLocalAccess, e[n].jsonFormat, null, !0)
            };
            e(Kameleoon.Internals.runtime.localDataMap?.["LS"]);
            e(Kameleoon.Internals.runtime.localDataMap?.["COOKIE"]);
            Kameleoon.Internals.runtime.localDataMap = null;
            Kameleoon.Analyst.Actions.processAllActions();
          }
        };
        this.setup = () => {
          let e = {
            AB_TESTING: !1,
            PERSONALIZATION: !1
          };
          const n = Kameleoon.Internals.runtime.readFromStorageOrExternal("kameleoonLegalConsent", "LS");
          if (null != n)
            if (1 == n) e = {
              AB_TESTING: !0,
              PERSONALIZATION: !0
            };
            else e = n;
          else {
            e = {
              AB_TESTING: "OFF" == Kameleoon.Internals.configuration.abtestConsent ? !0 : null,
              PERSONALIZATION: "OFF" == Kameleoon.Internals.configuration.personalizationConsent ? !0 : null
            };
          }
          this.initialize(e)
        };
        this.write = () => {
          Kameleoon.Utils.createLocalData("kameleoonLegalConsent", this.getConsent(), Utils.MAX_STORAGE_DAYS, null, "LS", !0, null, !0)
        };
        this.AB_TESTING = !1;
        this.PERSONALIZATION = !1
      }
    }
    class Device {
      get adBlocker() {
        return Kameleoon.Internals.runtime.adBlocker
      }
      get os() {
        return Kameleoon.Gatherer.OperatingSystem.obtain()
      }
      get screenHeight() {
        return window.screen.height
      }
      get screenWidth() {
        return window.screen.width
      }
      get windowHeight() {
        return window.innerHeight
      }
      get windowWidth() {
        return window.innerWidth
      }
      constructor() {
        const e = Kameleoon.Utils.bowser.parsedResult = Kameleoon.Utils.bowser.parsedResult || Kameleoon.Utils.bowser.parse(navigator.userAgent);
        this.browser = e.browser.name || "Other";
        this.type = "tablet" === e.platform.type ? "Tablet" : "mobile" === e.platform.type ? "Phone" : "Desktop";
        if ("Safari" === this.browser && "Desktop" === this.type && "ontouchend" in document.documentElement) this.type = "Tablet";
        let t = e.browser.version || "Safari" === this.browser && e.os.version;
        try {
          if (t && t.split(".")
            .length > 1) t = t.split(".")[0] + "." + t.split(".")[1]
        } catch (e) {}
        this.browserVersion = t ? parseFloat(t) : null
      }
    }
    class Experiment {
      constructor(i, t) {
        this.executeGlobalScript = () => {
          if (this.globalScript && !this.globalScriptEvaluated) {
            Kameleoon.Utils.sendKameleoonCustomEvent("Internals", {
              type: "experimentGlobalScript",
              id: this.id,
              name: this.name
            });
            this.globalScriptEvaluated = !0;
            Kameleoon.Utils.runProtectedScript(this.globalScript, "kameleoonActionGlobalJavaScriptCode-" + this.id + ".js")
          }
        };
        this.handleSpecialCase = () => {
          if (!0 !== this.targeting && this.redirectProcessed) {
            this.performVariationAssignment(!0);
            Kameleoon.Analyst.Actions.performActionsTracking([this])
          } else if (this.preAssignVariation) this.performVariationAssignment(!0)
        };
        this.obtainVariationAssignmentRandomNumber = () => {
          let i = "";
          this.variations.forEach((function(t) {
            if (t.respoolTime) i += t.respoolTime
          }));
          const t = Kameleoon.Internals.runtime.Visitor.obtainIdentifierValue();
          return Kameleoon.Utils.seededRandom(t + this.id + i, !0)
        };
        this.performVariationAssignment = i => {
          if (this.displayedVariation && !i && !this.deferredLoading) return;
          if (null != this.mentalistDeviation) {
            if (null != this.mentalistVariationReassignationPermissionCustomScript) try {
              this.mentalistVariationReassignationPermission = Kameleoon.Utils.runProtectedScript("return " + this.mentalistVariationReassignationPermissionCustomScript, "kameleoonMentalistVariationReassignationPermissionCustomScript.js")
            } catch (i) {}
            if (null == this.mentalistVariationReassignationPermission) this.mentalistVariationReassignationPermission = void 0 === Kameleoon.Internals.runtime.Visitor.currentVisit.ExperimentActivations[this.id];
            if (Kameleoon.Internals.runtime.gathererRun && Kameleoon.Internals.runtime.mentalistRun) this.mentalistEnabled = !0
          }
          if (void 0 !== this.registeredVariationId && this.assignmentTime) this.variations.forEach((i => {
            if (this.registeredVariationId == i.id && i.respoolTime > this.assignmentTime || null === this.registeredVariationId && this.untrackedRespoolTime > this.assignmentTime) this.registeredVariationId = void 0
          }));
          if (void 0 === this.registeredVariationId && !Kameleoon.Internals.runtime.simulationMode && 0 == this.variations.filter((i => i.id == this.registeredVariationId))
            .length) this.registeredVariationId = void 0;
          if (this.mentalistEnabled && this.mentalistVariationReassignationPermission) this.registeredVariationId = void 0;
          if (void 0 === this.registeredVariationId) {
            if (this.mentalistEnabled) {
              let i = {};
              if (Kameleoon.Utils.seededRandom(Kameleoon.Internals.runtime.Visitor.currentVisit.visitorCode + this.id, !0) <= this.mentalistDeviation) i = Kameleoon.Mentalist.computeVariationIdToScore(this.id);
              if (0 == Object.keys(i)
                .length) {
                this.mentalistEnabled = !1;
                for (const t in this.deviation) i[t] = Math.random()
              }
              if (null != this.mentalistVariationSelectionCustomScript && this.mentalistEnabled) try {
                this.registeredVariationId = Kameleoon.Utils.runProtectedScript("return " + this.mentalistVariationSelectionCustomScript, "kameleoonMentalistVariationSelectionCustomScript.js")(i)
              } catch (i) {} else {
                let t = Number.NEGATIVE_INFINITY;
                for (const e in i) {
                  const n = i[e];
                  if (n > t) {
                    this.registeredVariationId = parseInt(e);
                    t = n
                  }
                }
              }
              if (void 0 === this.registeredVariationId) this.registeredVariationId = 0;
            } else if (Kameleoon.Internals.runtime.customVariationSelectionFunction) {
              this.registeredVariationId = Kameleoon.Internals.runtime.customVariationSelectionFunction(this);
              if (null != this.registeredVariationId)
                if ("reference" == this.registeredVariationId.toString()) this.registeredVariationId = 0;
                else if ("none" == this.registeredVariationId.toString()) this.registeredVariationId = null
            } else {
              const i = this.obtainVariationAssignmentRandomNumber();
              let t = 0;
              this.registeredVariationId = null;
              for (let e = 0, n = this.variations.length; e < n; ++e) {
                t += this.variations[e].deviation;
                if (i <= t) {
                  this.registeredVariationId = this.variations[e].id;
                  break
                }
              }
            }
            this.assignmentTime = (new Date)
              .getTime();
            this.writeLocalData()
          }
          Kameleoon.Analyst.Actions.associateActionAndVariation(this, this.registeredVariationId, i ? 0 : 2)
        };
        this.setBlocked = i => {
          this.blockingReason = i;
          this.blocked = !0
        };
        this.setTargetingObject = (i, t, e, n) => {
          if (!e) this[i] = null;
          else this[i] = Kameleoon.Targeting.obtainTargeting(e) || t.find((i => i.id == e)) || null;
          if (!n || n == e) {
            this.targeting = void 0;
            this.rescheduleTargeting = null;
            this.numberTargetingCheckings = 0;
            this.displayedVariation = null
          }
        };
        this.setTargetingSegment = i => {
          this.setTargetingObject("targetingSegment", Kameleoon.Internals.runtime.targetingSegments, this.targetingSegmentId, i)
        };
        this.setTargetingTrigger = i => {
          this.setTargetingObject("targetingTrigger", Kameleoon.Internals.runtime.targetingTriggers, this.targetingTriggerId, i)
        };
        this.trigger = () => {
          if (!this.targeting) {
            this.targeting = !0;
            this.displayedVariation = null
          }
        };
        this.writeLocalData = () => {
          const i = this.registeredVariationId + (this.mentalistEnabled ? "-mentalist" : "") + "/" + this.assignmentTime;
          if (!this.simulationMode) Kameleoon.Utils.createLocalData("kameleoonExperiment-" + this.id, i, this.cookieDuration || 30, this.cookieDomain, "LS", !1)
        };
        for (const t in i) this[t] = i[t];
        const e = "kameleoonRedirect-" + this.id;
        const n = (t && t[e]) ?? Kameleoon.Utils.readLocalData(e, "LS", !1) ?? Kameleoon.Internals.runtime.parameters[e];
        if (null != n) {
          this.registeredVariationId = n;
          this.assignmentTime = (new Date)
            .getTime();
          this.redirectProcessed = !0;
          Kameleoon.Utils.eraseLocalData(e, null, null)
        }
        const a = "kameleoonExperiment-" + this.id;
        let s = t ? t[a] : Kameleoon.Utils.readLocalData(a, "LS", !1);
        for (const i in Kameleoon.Internals.runtime.parameters)
          if (0 == i.indexOf("kameleoonRedirect-" + this.id)) {
            s = Kameleoon.Internals.runtime.parameters[i] + "/" + (new Date)
              .getTime() + "/" + !1;
            this.writeLocalData()
          } if (s && -1 != this.id) {
          const i = s.split("/");
          this.registeredVariationId = "null" == i[0] ? null : i[0];
          this.assignmentTime = parseInt(i[1]);
          if (this.registeredVariationId) {
            if ("reference" == this.registeredVariationId.toString()) {
              this.registeredVariationId = 0;
              this.writeLocalData()
            }
            if ("none" == this.registeredVariationId.toString()) {
              this.registeredVariationId = null;
              this.writeLocalData()
            }
          }
          if (null != this.winningVariationId && !Kameleoon.Internals.runtime.simulationMode && !Kameleoon.Internals.runtime.disableCache && this.winningVariationId != this.registeredVariationId) this.registeredVariationId = this.winningVariationId;
        }
        if (this.registeredVariationId && -1 != this.registeredVariationId.toString()
          .indexOf("-mentalist")) {
          this.registeredVariationId = parseInt(this.registeredVariationId.toString()
            .replace("-mentalist", ""));
          this.mentalistEnabled = !0
        }
        if (this.registeredVariationId && s && null == this.deviation[this.registeredVariationId]) this.registeredVariationId = void 0;
        this.setTargetingSegment();
        this.setTargetingTrigger();
        if (this.redirectProcessed && null != this.registeredVariationId) this.writeLocalData();
        const r = Kameleoon.Internals.runtime.storedData.obtainField("Runtime", "blockedExperiments", []);
        if (r.length > 0 && -1 != r.indexOf(this.id)) this.setBlocked("API");
      }
      static performMutualExclusiveGroup() {}
    }
    class Goals {
      constructor() {
        this.goals = {};
        this.goalsList = [];
        this.run = () => {
          const e = [];
          const n = [];
          const o = [];
          const s = [];
          const t = {};
          this.getList()
            .forEach((i => {
              switch (i.type) {
                case "ENGAGEMENT":
                  n.push({
                    goal: i
                  });
                  break;
                case "SCROLL":
                  s.push(i);
                  break;
                case "CUSTOM":
                  if (i.jsCode) Kameleoon.Utils.runProtectedScript(i.jsCode, `kameleoonCustomGoal-${i.id}.js`);
                  break;
                case "CLICK":
                  if (i.selectors) i.selectors.forEach((e => {
                    const n = t[e] || [];
                    n.push(i);
                    t[e] = n
                  }));
                  break;
              }
            }));
          if (e.length > 0) this.processConversions(e);
          Kameleoon.Utils.addEventListener(document, Kameleoon.Internals.runtime.mouseDownEvent, (e => {
            this.processConversions(n)
          }), !0);
          Kameleoon.Utils.addEventListener(document, "scroll", (e => {
            if (document.body) {
              const e = [];
              s.forEach((n => {
                if (!n.sent) {
                  let o = null,
                    s = null;
                  switch (n.scrollTrackingType) {
                    case "PIXELS_HEIGHT":
                      o = Math.ceil(document.documentElement.scrollTop || document.body.scrollTop) + window.innerHeight;
                      s = n.scrollTrackingValue;
                      break;
                    case "PERCENTAGE":
                      o = (Math.ceil(document.documentElement.scrollTop || document.body.scrollTop) + window.innerHeight) / document.body.scrollHeight * 100;
                      s = n.scrollTrackingValue;
                      break;
                    case "ELEMENT":
                      o = window.innerHeight;
                      const e = Kameleoon.Utils.querySelectorAll(n.selector);
                      if (e.length > 0) s = e[0].getBoundingClientRect()
                        .top + e[0].offsetHeight;
                      break
                  }
                  if (null !== o && null !== s && s <= o) {
                    e.push({
                      goal: n
                    });
                    n.sent = !0
                  }
                }
              }));
              if (e.length > 0) this.processConversions(e)
            }
          }), !0);
          this.runClickGoals(t);
        };
        this.processConversions = e => {
          if (Kameleoon.Internals.runtime.gathererRun)
            for (let n = 0, o = e.length; n < o; ++n) {
              const o = e[n];
              const s = o.goal;
              const t = !0 === o.negative;
              if (t || "PAGE_VIEWS" != s.type && "TIME_SPENT" != s.type && "ENGAGEMENT" != s.type || 0 == Kameleoon.Internals.runtime.Visitor.currentVisit.obtainNumberConversions(s.id)) {
                Kameleoon.Utils.sendKameleoonCustomEvent.call(window, "ConversionTriggered", new APIGoal(s), "goal/process");
                Kameleoon.Gatherer.track(VisitEvent_Conversions, {
                  goalId: s.id,
                  revenue: o.revenue ? o.revenue : 0,
                  negative: t,
                  metadata: o.metadata
                });
                if (!1 === t) {
                  if (s.universalAnalyticsTracking) Kameleoon.Tracking.processGoalUniversalAnalytics(s);
                }
              }
            }
        }
      }
      add(e) {
        const n = {
          ...e
        };
        this.goals[String(e.id)] = n;
        this.goalsList.push(n)
      }
      addList(e) {
        this.goals = {};
        this.goalsList = [];
        e.forEach((e => this.add(e)))
      }
      get(e) {
        if (null != e) return this.goals[String(e)]
      }
      getList() {
        return this.goalsList
      }
      runClickGoals(e) {
        try {
          const n = (e, n) => {
            const o = () => {
              if (Kameleoon.Internals.runtime.touchMoveEvent) return;
              this.processConversions(n.map((e => ({
                goal: e
              }))))
            };
            e.forEach((e => {
              Kameleoon.Utils.addEventListener(e, Kameleoon.Internals.runtime.mouseDownEvent, o, !0)
            }))
          };
          Kameleoon.Utils.setTimeout((function() {
            for (const o in e) Kameleoon.Internals.runtime.processSelectorPresence({
              selector: o,
              useAntiFlicker: !0,
              slowQueue: !0,
              isDynamicElement: Kameleoon.Internals.runtime.singlePageSupport || Kameleoon.Internals.runtime.dynamicRefresh,
              callback: s => {
                n(s, e[o])
              }
            })
          }), 250)
        } catch (e) {
          console.log("An error occurred in your custom JavaScript Kameleoon tracking function, please check your code.");
          console.log(e, e.message)
        }
      }
    }
    class KIP {
      constructor() {
        this.ipAddressMatchesRange = (e, t) => {
          const n = e.split(".");
          const a = t.split(".");
          return 4 == n.length && 4 == a.length && this.ipAdressBlockMatchesRangeBlock(n[0], a[0]) && this.ipAdressBlockMatchesRangeBlock(n[1], a[1]) && this.ipAdressBlockMatchesRangeBlock(n[2], a[2]) && this.ipAdressBlockMatchesRangeBlock(n[3], a[3])
        };
        const e = Kameleoon.Internals.runtime.storedData.obtainField("Runtime", "ip");
        if (!e) {
          const e = () => {
            Kameleoon.Utils.performBeaconServerCall(Kameleoon.Internals.runtime.RequestManager.obtainIpUrl(), (e => {
              if (4 == e.readyState && (200 == e.status || 204 == e.status)) {
                const t = e.getResponseHeader("ip") || "";
                Kameleoon.Internals.runtime.ipIsTrackerAccepted = !0;
                for (let e = 0, n = Kameleoon.Internals.configuration.trackerExcludedIPRanges.length; e < n; ++e)
                  if (this.ipAddressMatchesRange(t, Kameleoon.Internals.configuration.trackerExcludedIPRanges[e])) {
                    Kameleoon.Internals.runtime.ipIsTrackerAccepted = !1;
                    break
                  } Kameleoon.Internals.runtime.storedData.saveField("Runtime", "ipIsTrackerAccepted", Kameleoon.Internals.runtime.ipIsTrackerAccepted);
                Kameleoon.Internals.runtime.storedData.saveField("Runtime", "ip", t);
                this.value = t
              }
            }), (() => {
              Kameleoon.Internals.runtime.ipIsTrackerAccepted = !0
            }), 1e3)
          };
          Kameleoon.Internals.runtime.RequestManager.addCallback(e)
        } else {
          this.value = e;
          Kameleoon.Internals.runtime.ipIsTrackerAccepted = Kameleoon.Internals.runtime.storedData.obtainField("Runtime", "ipIsTrackerAccepted")
        }
      }
      ipAdressBlockMatchesRangeBlock(e, t) {
        if (t == e) return !0;
        if ("*" == t) return !0;
        const n = parseInt(e);
        const a = t.split("-");
        const s = parseInt(a[0]);
        const r = a.length > 1 ? parseInt(a[1]) : s;
        if (!isNaN(n) && !isNaN(s) && !isNaN(r) && n >= s && n <= r) return !0;
        return !1
      }
    }
    class KGeolocation {
      constructor() {
        let e = Kameleoon.Internals.runtime.storedData.obtainField("Runtime", "geolocation");
        if (null == e) Kameleoon.Internals.runtime.RequestManager.addCallback((() => {
          Kameleoon.Utils.performBeaconServerCall(Kameleoon.Internals.runtime.RequestManager.obtainGeolocationUrl(), (e => {
            if (4 == e.readyState && (200 == e.status || 204 == e.status)) {
              let t = e.getResponseHeader("geoip_country_name");
              let o = e.getResponseHeader("geoip_region_name");
              let i = e.getResponseHeader("geoip_city");
              this.country = t ? Kameleoon.Utils.decodeUTF8(t) : null;
              this.city = i ? Kameleoon.Utils.decodeUTF8(i) : null;
              this.latitude = e.getResponseHeader("geoip_latitude");
              this.longitude = e.getResponseHeader("geoip_longitude");
              this.postalCode = e.getResponseHeader("geoip_postal_code");
              this.region = o ? Kameleoon.Utils.decodeUTF8(o) : null;
              this.loaded = !0;
              Kameleoon.Gatherer.track(VisitEvent_Geolocation, this);
              Kameleoon.Internals.runtime.storedData.saveField("Runtime", "geolocation", this)
            }
          }), null)
        }));
        else {
          this.loaded = !0;
          this.country = e.country;
          this.city = e.city;
          this.latitude = e.latitude;
          this.longitude = e.longitude;
          this.postalCode = e.postalCode;
          this.region = e.region
        }
      }
    }
    class KMutationObserver {
      static addMutationElementsToInternalObjects(e) {
        for (let t = 0; t < e.length; ++t) {
          const n = e[t];
          if (!n) continue;
          KMutationObserver.fillIdForOptimization(n);
          KMutationObserver.fillClassesForOptimization(n)
        }
      }
      static fillIdForOptimization(e) {
        if (e.id) Kameleoon.Internals.runtime.addedIDs["#" + e.id] = !0
      }
      static fillClassesForOptimization(e) {
        if (e.classList && e.classList.length)
          for (let t = 0; t < e.classList.length; ++t) Kameleoon.Internals.runtime.addedClasses["." + e.classList[t]] = !0
      }
      static checkSelectorInDomTree(e) {
        if (!e.selectors) KMutationObserver.fillClassesAndIdsForSelector(e);
        if (0 === e.selectorClasses.length && 0 === e.selectorIDs.length) return !0;
        let t = !1;
        for (let n = 0; n < e.selectors.length; ++n)
          if (KMutationObserver.checkIDsForSelector(e.selectorIDs[n], e) && KMutationObserver.checkClassesForSelector(e.selectorClasses[n], e)) {
            t = !0;
            break
          } return t
      }
      static fillClassesAndIdsForSelector(e) {
        const t = [];
        const n = [];
        const o = e.selector && e.selector.split(",") || [];
        if (e.currentQuery && e.selector != e.currentQuery) o.push(e.currentQuery);
        o.forEach((e => {
          if (-1 !== e.indexOf(".") || -1 !== e.indexOf("#")) {
            let o;
            let r;
            let i = e;
            if (-1 !== i.indexOf(":")) {
              let t = 0;
              let n = !1;
              let o = !1;
              let r = "";
              for (let i = 0; i < e.length; i++) {
                const a = e[i];
                if (!n && ":" === a)
                  if ("\\" !== e[i - 1]) {
                    const t = e.substring(i + 1);
                    if (/^[a-zA-Z-]+\(/.test(t)) {
                      n = !0;
                      continue
                    }
                    o = !0;
                    continue
                  } if (n) {
                  if ("(" === a) t++;
                  else if (")" === a) {
                    t--;
                    if (0 === t) n = !1
                  }
                  continue
                }
                if (o) {
                  if (/[\s.#>~\[]/.test(a)) {
                    o = !1;
                    r += a
                  }
                  continue
                }
                r += a
              }
              i = r
            }
            if (-1 !== i.indexOf("\\")) i = i.replace(/\\/g, "");
            if (-1 !== i.indexOf("[")) i = i.replace(/(\-)?(\[.*?\])/g, ((e, t) => t ? e : ""));
            o = i.match(/\.([^\s.#>~]+)/g);
            r = i.match(/#([^\s.>~]+)/g);
            n.push(o || []);
            t.push(r || [])
          }
        }));
        e.selectors = o;
        e.selectorClasses = n;
        e.selectorIDs = t;
        return e
      }
      static checkClassesForSelector(e, t) {
        if (null == e) return !0;
        for (let t = 0, n = e.length; t < n; ++t) {
          const n = e[t];
          if (-1 === n.indexOf("kameleoon") && null == Kameleoon.Internals.runtime.addedClasses[n]) return !1
        }
        return !0
      }
      static checkIDsForSelector(e, t) {
        if (null == e) return !0;
        for (let t = 0, o = e.length; t < o; ++t) {
          const o = e[t];
          if (-1 !== o.indexOf("kameleoonElement")) {} else if (null == Kameleoon.Internals.runtime.addedIDs[o]) return !1
        }
        return !0
      }
      static fillInternalObjectsForMutationObserver(e) {
        if (!e) e = document;
        const t = e.getElementsByTagName("*");
        KMutationObserver.addMutationElementsToInternalObjects(t)
      }
      static performWaitingElementPresentObject(e) {
        const t = 1 === e ? Kameleoon.Internals.runtime.waitingSlowElementPresentObjects : Kameleoon.Internals.runtime.waitingElementPresentObjects;
        for (let e = t.length - 1; e >= 0; e -= 1) {
          const n = t[e];
          if (n && n.useAntiFlicker)
            if (Kameleoon.Internals.runtime.domMutationThrottling && null != KMutationObserver.asyncMutationsTimeoutId || KMutationObserver.checkSelectorInDomTree(n)) {
              const o = Kameleoon.Utils.querySelectorAll(n.selector);
              if (o.length) {
                Kameleoon.Utils.runProtectedFunction((function() {
                  n.callback(o)
                }), !0);
                t.splice(e, 1)
              }
            }
        }
      }
      static performVariationsElementSet(e) {}
      static performAsyncMutations() {
        Kameleoon.Internals.runtime.domMutationThrottling = !0;
        if (!KMutationObserver.asyncMutationsTimeoutId) KMutationObserver.asyncMutationsTimeoutId = Kameleoon.Utils.setTimeout((() => {
          if (KMutationObserver.mutationList.length >= 5e3) KMutationObserver.fillInternalObjectsForMutationObserver();
          else KMutationObserver.mutationList.forEach((e => KMutationObserver.performChildListMutation(e)));
          KMutationObserver.mutationList = [];
          KMutationObserver.performWaitingElementPresentObject(0);
          Kameleoon.Utils.clearTimeout(KMutationObserver.asyncMutationsTimeoutId);
          KMutationObserver.asyncMutationsTimeoutId = null
        }), 250)
      }
      static setMutationObserver() {
        if (Kameleoon.Internals.runtime.cantUseMutationObserver || Kameleoon.Internals.runtime.mutationObserver) return;
        KMutationObserver.fillInternalObjectsForMutationObserver();
        const e = {
          attributes: !0,
          attributeOldValue: !0,
          childList: !0,
          characterData: !0,
          subtree: !0
        };
        const t = Kameleoon.Utils.throttle((() => {
          KMutationObserver.performWaitingElementPresentObject(1)
        }), 250);
        Kameleoon.Internals.runtime.mutationObserver = new MutationObserver((function(e) {
          let n = !0;
          if (!Kameleoon.Internals.runtime.domReady && e.length >= 3e3) {
            KMutationObserver.mutationList = KMutationObserver.mutationList.concat(e);
            KMutationObserver.performAsyncMutations();
            return
          }
          e.forEach((e => {
            if ("attributes" === e.type) {
              if ("id" !== e.attributeName && "class" !== e.attributeName) return;
              const t = e.target;
              if (!t) return;
              const n = "id" === e.attributeName ? t.id : t.className;
              if (e.oldValue === n) return;
              if ("id" === e.attributeName) KMutationObserver.fillIdForOptimization(t);
              else KMutationObserver.fillClassesForOptimization(t)
            } else if ("childList" === e.type) {
              KMutationObserver.performChildListMutation(e);
            }
          }));
          KMutationObserver.performWaitingElementPresentObject(0);
          if (Kameleoon.Internals.runtime.waitingSlowElementPresentObjects.length) t();
        }));
        if ("function" === typeof Kameleoon.Internals.runtime.mutationObserver.observe) Kameleoon.Internals.runtime.mutationObserver.observe(document.documentElement, e);
        if (Kameleoon.Internals.runtime.singlePageSupport) KMutationObserver.setMutationObserverSPA()
      }
      static performChildListMutation(e) {
        if ("childList" !== e.type || !e.addedNodes.length) return;
        const t = e.addedNodes;
        KMutationObserver.addMutationElementsToInternalObjects(t);
        for (let e = 0; e < t.length; ++e) {
          const n = t[e];
          if (!n) continue;
          if ((Kameleoon.Internals.runtime.editorMode || Kameleoon.Internals.runtime.kameleoonSelectionIframeMode) && n.id?.includes("kameleoon") && n.closest?.(".KameleoonProtected")) continue;
          if (n.firstElementChild) KMutationObserver.fillInternalObjectsForMutationObserver(n)
        }
      }
      static setMutationObserverSPA() {
        if (Kameleoon.Internals.runtime.mutationObserverSpa || Kameleoon.Internals.runtime.cantUseMutationObserver) return;
        const e = Kameleoon.Utils.throttle((() => {
          KMutationObserver.checkDynamicElements(1)
        }), 250);
        Kameleoon.API.Core.runWhenElementPresent("body", (t => {
          const n = {
            childList: !0,
            subtree: !0
          };
          Kameleoon.Internals.runtime.mutationObserverSpa = new MutationObserver((function(t) {
            Kameleoon.Internals.runtime.listenVariations = [];
            Kameleoon.Internals.runtime.mutationObserverSpa.disconnect();
            KMutationObserver.executeCallbacks(t);
            KMutationObserver.checkDynamicElements(0);
            if (Kameleoon.Internals.runtime.waitingSlowDynamicElements.length) e();
            o()
          }));
          const o = () => {
            n.characterData = Kameleoon.ElementSet && Kameleoon.ElementSet.pageElementSetsSpa.length > 0 || Kameleoon.Internals.runtime.listenSpaCallbacks.length > 0;
            Kameleoon.Internals.runtime.mutationObserverSpa.observe(t[0], n)
          };
          o()
        }))
      }
      static performReplaceData(e) {}
    }
    KMutationObserver.asyncMutationsTimeoutId = null;
    KMutationObserver.mutationList = [];
    KMutationObserver.executeCallbacks = e => {
      Kameleoon.Internals.runtime.listenSpaCallbacks.forEach((e => Kameleoon.Utils.runProtectedFunction(e, !0)))
    };
    KMutationObserver.checkDynamicElements = e => {
      const t = 1 === e ? Kameleoon.Internals.runtime.waitingSlowDynamicElements : Kameleoon.Internals.runtime.waitingDynamicElements;
      t.forEach((e => {
        const t = Kameleoon.Utils.querySelectorAll(e.selector)
          .filter((t => null == t.getAttribute(e.attribute)));
        t.length > 0 && e.callback(t)
      }))
    };
    KMutationObserver.checkElementSetIntegrity = () => {};
    KMutationObserver.resetElementSet = (e, t, n) => {};
    KMutationObserver.containsDomOperationElements = e => {};
    class Logger {
      constructor() {
        this.send = (e, o, n) => {
          if (Kameleoon.Internals.runtime?.parameters?.kameleoonDebug) console.log(e)
        }
      }
    }
    class OnlineMeanAndDeviation {
      constructor(e) {
        this.dimension = e;
        this.mean = [];
        this.nbUpdates = [];
        this.m2 = [];
        this.deviation = [];
        for (let t = 0; t < e; ++t) {
          this.mean[t] = 0;
          this.nbUpdates[t] = 0;
          this.m2[t] = 0;
          this.deviation[t] = 0
        }
        this.update = (e, t = 1) => {
          if (t > 0)
            for (let n = 0; n < this.dimension; ++n)
              if (!isNaN(e[n]) && isFinite(e[n])) {
                let i = this.mean[n] - e[n];
                let a = this.nbUpdates[n] + t;
                this.m2[n] = this.m2[n] + i / a * i * this.nbUpdates[n] * t;
                this.deviation[n] = Math.sqrt(this.m2[n] / a);
                this.mean[n] = this.mean[n] / a * this.nbUpdates[n] + e[n] / a * t;
                this.nbUpdates[n] = a
              }
        }
      }
    }
    OnlineMeanAndDeviation.createFromDifferences = (e, t, n, i) => {
      let a = new OnlineMeanAndDeviation(1);
      let s = e.length;
      let l = 0;
      if (l < s) {
        let h = e[l];
        l++;
        while (l < s) {
          let s = e[l];
          l++;
          let o = s - h;
          if (o < 0 && t || 0 == o && n || o > 0 && i) a.update([o]);
          h = s
        }
      }
      return a
    };
    OnlineMeanAndDeviation.createFromValues = e => {
      let t = new OnlineMeanAndDeviation(1);
      for (let n = 0, i = e.length; n < i; n++) t.update([e[n]]);
      return t
    };
    OnlineMeanAndDeviation.createFromBooleanValues = e => {
      let t = new OnlineMeanAndDeviation(1);
      for (let n = 0, i = e.length; n < i; n++) t.update([e[n] ? 1 : 0]);
      return t
    };
    class RequestManager {
      constructor() {
        this.errorKey = "kameleoonRequestEvents";
        this.processRequests = () => {
          if (Kameleoon.Internals.runtime.Consent.hasGlobalConsent()) {
            if (Kameleoon.Internals.runtime.tabIdCreated) {
              delete Kameleoon.Internals.runtime.tabIdCreated;
              Kameleoon.Utils.secureSessionStorage("setItem", "kameleoonTabId", Kameleoon.Internals.runtime.tabId)
            }
            if (this.callbacksToExecute.length > 0) {
              const e = this.callbacksToExecute.splice(0, 1e3);
              e.forEach((e => e()))
            }
            if (this.eventsToSend.length > 0 && this.validateTrackingRequest()) {
              const e = this.eventsToSend.splice(0, 1e3);
              const t = this.obtainVisitUrl();
              const n = this.obtainRequestBody(e);
              this.send(t, "POST", n, (() => {}), (() => {
                this.createErrorEventsQueue(n)
              }));
              if (this.eventsToSend.length > 0) this.processRequests()
            }
          }
        };
        this.obtainRequestBody = e => {
          const t = Kameleoon.Internals.runtime.Consent.getConsent();
          const n = sessionStorage.getItem(this.errorKey);
          let s = "";
          s += e.reduce(((e, n) => {
            if (!n.notTrack && this.validateTrackingConsent(n.eventType, t)) e += n.obtainRequestData() + "\n";
            return e
          }), "");
          if (n) {
            s += n;
            sessionStorage.removeItem(this.errorKey)
          }
          return s
        };
        this.obtainVisitUrl = () => {
          const e = Kameleoon.Internals.runtime.Visitor.currentVisit.visitorCode;
          const t = Kameleoon.Internals.runtime.tabId;
          return `${this.url}/visit/events?engine=true&siteCode=${this.siteCode}&visitorCode=${e}&itp=${"Safari"===Kameleoon.Internals.runtime.Device.browser}${t?`&tabId=${t}`:""}`
        };
        this.obtainIpUrl = () => this.url + "/ip";
        this.obtainGeolocationUrl = () => this.url + "/geolocation";
        this.obtainWeatherUrl = e => this.url + "/weather" + (e ? "/forecast" : "/weather");
        this.send = (e, t, n, s, i, o) => {
          const r = new XMLHttpRequest;
          r.open(t, e, !0);
          if (s) r.onreadystatechange = function(e) {
            s.bind(r)(e.target)
          };
          if (i) {
            r.onabort = function(e) {
              i.bind(r)(e.target)
            };
            r.onerror = function(e) {
              i.bind(r)(e.target)
            };
            r.ontimeout = function(e) {
              i.bind(r)(e.target)
            }
          }
          r.timeout = o || 15 * 60 * 1e3;
          r.send("POST" == t && n ? n : null);
        };
        this.sendActiveScript = () => {};
        this.sendProduct = (e, t) => {
          this.send(`${this.url}/product/events?engine=true&siteCode=${this.siteCode}&ean=${encodeURIComponent(e.toString())}`, "POST", t);
        };
        this.eventsToSend = [];
        this.callbacksToExecute = [];
        this.url = Kameleoon.Internals.runtime.DATA_URL;
        this.siteCode = Kameleoon.Internals.configuration.siteCode;
        Kameleoon.Utils.setInterval(this.processRequests.bind(this), 500);
        Kameleoon.Utils.addEventListener(window, Kameleoon.Internals.runtime.beforeUnloadEvent, "Safari" === Kameleoon.Internals.runtime.Device.browser ? () => this.eventsToSend.length && this.createErrorEventsQueue(this.obtainRequestBody(this.eventsToSend)) : this.processRequests.bind(this))
      }
      addCallback(e) {
        if (Kameleoon.Internals.runtime.Consent.hasGlobalConsent()) e();
        else this.callbacksToExecute.push(e)
      }
      addRequest(e) {
        this.eventsToSend.push(e)
      }
      createErrorEventsQueue(e) {
        if (e) sessionStorage.setItem(this.errorKey, (sessionStorage.getItem(this.errorKey) || "") + e)
      }
      validateTrackingConsent(e, t) {
        return "experiment" !== e && "personalization" !== e || t.AB_TESTING && "experiment" === e || t.PERSONALIZATION && "personalization" === e
      }
      validateTrackingRequest() {
        const e = Kameleoon.Internals.runtime.ipIsTrackerAccepted;
        const t = Kameleoon.Internals.configuration.trackerExcludedIPRanges.length > 0;
        if (t && !e) return !1;
        const n = (!Kameleoon.Internals.runtime.simulationMode || Kameleoon.Internals.runtime.enableRemoteVisitorSynchronization || Kameleoon.Internals.runtime.parameters["kameleoon-qa-mode"]) && !Kameleoon.Internals.runtime.proxyMode && !Kameleoon.Internals.runtime.kameleoonSelectionIframeMode;
        return n
      }
    }
    class Targeting {
      constructor() {
        this.targetings = {};
        this.targetingListenerQueue = [];
        this.obtainTargeting = e => e && this.targetings[e];
        this.checkTargetingCondition = (e, t, i) => {
          let n;
          if (null == t.numberTargetingCheckings) t.numberTargetingCheckings = 0;
          if (!this.checkIfTargetingMustBeComputed(t.targeting, t.rescheduleTargeting || 0 == t.numberTargetingCheckings, void 0)) n = {
            targeting: t.targeting,
            rescheduleTargeting: !1
          };
          else {
            let r = Kameleoon.Targeting["evaluate_" + t.type];
            let g;
            if (null != r) g = r.bind(this)(t, e, i);
            else g = null;
            if (null == g) g = {
              targeting: void 0,
              rescheduleTargeting: !1
            };
            let s = g.targeting;
            if (!0 !== t.include)
              if (void 0 === s) {
                if (!0 === g.excludedUndefinedIsTargeted) s = !0
              } else s = !s;
            n = {
              targeting: s,
              rescheduleTargeting: this.checkIfTargetingMustBeComputed(s, g.rescheduleTargeting, void 0)
            };
            t.targeting = n.targeting;
            t.rescheduleTargeting = n.rescheduleTargeting;
            t.numberTargetingCheckings++
          }
          if (!0 === n.targeting) n.weight = t.weight;
          else n.weight = 0;
          return n
        };
        this.checkTargetingSegmentsTargeting = e => {
          for (let t = 0; t < e.length; t++) {
            const i = e[t];
            if (null == i.numberTargetingCheckings) i.numberTargetingCheckings = 0;
            const n = this.checkIfTargetingMustBeComputed(i.targeting, i.rescheduleTargeting || 0 === i.numberTargetingCheckings, !1);
            if (!n) continue;
            const r = this.checkTree(null, i.tree ?? null, !1, i);
            this.applyTargetingResult(i, r);
            if (this.checkIfTargetingMustBeComputed(i.targeting, i.rescheduleTargeting, !1)) this.targetingListenerQueue.push(i)
          }
          if (this.targetingListenerQueue.length > 0) this.ensureTargetingListeners()
        };
        this.flushTargetingSegments = () => {
          const e = this.targetingListenerQueue;
          if (0 === e.length) {
            if (null != this.targetingListenerIntervalId) {
              Kameleoon.Utils.clearInterval(this.targetingListenerIntervalId);
              this.targetingListenerIntervalId = null
            }
            return
          }
          this.targetingListenerQueue = [];
          this.processTargetingSegments(e)
        };
        this.ensureTargetingListeners = () => {
          if (Kameleoon.Internals.runtime.domReady) {
            if (null != this.targetingListenerTimeoutId) {
              Kameleoon.Utils.clearTimeout(this.targetingListenerTimeoutId);
              this.targetingListenerTimeoutId = null
            }
            if (null == this.targetingListenerIntervalId) this.targetingListenerIntervalId = Kameleoon.Utils.setInterval((() => {
              this.flushTargetingSegments()
            }), Kameleoon.Internals.runtime.PAGE_LOADED_POLL_DELAY);
            return
          }
          if (null == this.targetingListenerTimeoutId) this.targetingListenerTimeoutId = Kameleoon.Utils.setTimeout((() => {
            this.targetingListenerTimeoutId = null;
            this.flushTargetingSegments()
          }), Kameleoon.Internals.runtime.PAGE_LOADING_POLL_DELAY)
        };
        this.clear = () => {
          this.targetings = {};
          this.targetingListenerQueue = [];
          this.targetingListenerTimeoutId = null;
          this.targetingListenerIntervalId = null
        };
        this.checkTree = (e, t, i, n) => {
          let r;
          if (null == t) {
            r = {
              targeting: !0,
              rescheduleTargeting: !1
            };
            if (i) r.weight = 0
          } else {
            if (null == t.numberTargetingCheckings) t.numberTargetingCheckings = 0;
            if (!this.checkIfTargetingMustBeComputed(t.targeting, t.rescheduleTargeting || 0 == t.numberTargetingCheckings, i)) {
              r = {
                targeting: t.targeting,
                rescheduleTargeting: !1
              };
              if (i) r.weight = t.weight
            } else {
              if (null != t.targetingCondition) r = this.checkTargetingCondition(e, t.targetingCondition, n);
              else {
                let g = this.checkTree(e, t.leftChild, i, n);
                let s = Kameleoon.Internals.runtime.simulationMode || i;
                if (!s) switch (g.targeting) {
                  case !0:
                    if (!t.orOperator) s = !0;
                    break;
                  case !1:
                    if (t.orOperator) s = !0;
                    break;
                  case void 0:
                  default:
                    s = !0;
                    break
                }
                let a = null;
                if (s) a = this.checkTree(e, t.rightChild, i, n);
                let l;
                switch (g.targeting) {
                  case !0:
                    if (t.orOperator) l = !0;
                    else switch (a.targeting) {
                      case !0:
                        l = !0;
                        break;
                      case !1:
                        l = !1;
                        break;
                      case void 0:
                      default:
                        l = void 0;
                        break
                    }
                    break;
                  case !1:
                    if (t.orOperator) switch (a.targeting) {
                      case !0:
                        l = !0;
                        break;
                      case !1:
                        l = !1;
                        break;
                      case void 0:
                      default:
                        l = void 0;
                        break
                    } else l = !1;
                    break;
                  case void 0:
                  default:
                    if (t.orOperator) switch (a.targeting) {
                      case !0:
                        l = !0;
                        break;
                      case !1:
                        l = void 0;
                        break;
                      case void 0:
                      default:
                        l = void 0;
                        break
                    } else switch (a.targeting) {
                      case !0:
                        l = void 0;
                        break;
                      case !1:
                        l = !1;
                        break;
                      case void 0:
                      default:
                        l = void 0;
                        break
                    }
                    break
                }
                r = {
                  targeting: l,
                  rescheduleTargeting: this.checkIfTargetingMustBeComputed(l, g.rescheduleTargeting || s && a.rescheduleTargeting, i)
                };
                if (i) {
                  let e;
                  if (t.orOperator) e = Math.max(g.weight, a.weight);
                  else e = g.weight + a.weight;
                  r.weight = e
                }
              }
              t.targeting = r.targeting;
              t.rescheduleTargeting = r.rescheduleTargeting;
              if (i) t.weight = r.weight;
              t.numberTargetingCheckings++;
              r.computed = !0
            }
          }
          return r
        };
        this.computeDisplayableTree = e => {
          let t = [];
          let i = [];
          this.computeDisplayableTreeFirstLevelAddIn(e, t, i);
          if (i.length > 0) {
            let e = [];
            let n = [];
            let r = this.createIterator(t);
            let g = this.createIterator(i);
            while (g.hasNext()) {
              let t = g.next();
              if (Kameleoon.Utils.testEmptyMap(t.conditions)) {
                if (g.hasNext()) r.next()
              } else {
                n.push(t);
                if (g.hasNext()) e.push(r.next())
              }
            }
            t = n.length > 0 ? e.slice(0, n.length - 1) : e;
            i = n
          }
          return {
            firstLevelOrOperators: t,
            secondLevel: i
          }
        };
        this.computeDisplayableTreeFirstLevelAddIn = (e, t, i) => {
          if (null != e)
            if (null == e.targetingCondition)
              if (0 == e.orGuiLevel) {
                this.computeDisplayableTreeFirstLevelAddIn(e.leftChild, t, i);
                t.push(e.orOperator);
                this.computeDisplayableTreeFirstLevelAddIn(e.rightChild, t, i)
              } else i.push(this.computeDisplayableTreeSecondLevel(e));
          else i.push(this.computeDisplayableTreeSecondLevel(e))
        };
        this.computeDisplayableTreeSecondLevel = e => {
          let t = [];
          let i = [];
          this.computeDisplayableTreeSecondLevelAddIn(e, t, i);
          if (i.length > 0) {
            let e = [];
            let n = [];
            let r = this.createIterator(t);
            let g = this.createIterator(i);
            while (g.hasNext()) {
              let t = g.next();
              if (t.disabled) {
                if (g.hasNext()) r.next()
              } else {
                n.push(t);
                if (g.hasNext()) e.push(r.next())
              }
            }
            t = n.length > 0 ? e.slice(0, n.length - 1) : e;
            i = n
          }
          return {
            orOperators: t,
            conditions: i
          }
        };
        this.computeDisplayableTreeSecondLevelAddIn = (e, t, i) => {
          if (null != e)
            if (null == e.targetingCondition) {
              this.computeDisplayableTreeSecondLevelAddIn(e.leftChild, t, i);
              t.push(e.orOperator);
              this.computeDisplayableTreeSecondLevelAddIn(e.rightChild, t, i)
            } else i.push(e.targetingCondition)
        };
        this.flattenTree = e => {
          let t = (e, i) => {
            if (null != e)
              if (null != e.targetingCondition) return !1 === e.targetingCondition.targeting ? ["!", e.targetingCondition] : e.targetingCondition;
              else {
                let n = e.orOperator ? "OR" : "AND";
                let r = [t(e.leftChild, n), n, t(e.rightChild, n)];
                return "AND" == i && "OR" == n ? ["(", r, ")"] : r
              }
          };
          return Kameleoon.Utils.flatten(t(e, "OR"))
        };
        this.processAllTargetings = () => {
          let e = Kameleoon.Internals.runtime.targetingSegments || [];
          e = e.concat(Kameleoon.Internals.runtime.targetingTriggers || []);
          e.forEach((e => {
            this.targetings[e.id] = e
          }));
          this.processTargetingSegments(e.filter(this.isTrackingSegment))
        };
        this.processTargetingSegments = e => {
          this.checkTargetingSegmentsTargeting(e);
          let t = [];
          for (let i = 0, n = e.length; i < n; ++i) {
            let n = e[i];
            if (!0 === n.targeting) t.push(n)
          }
          this.performSegmentsTracking(t)
        }
      }
      getVisitScope(e) {
        return 1 === e ? Kameleoon.Internals.runtime.Visitor.visits : [Kameleoon.Internals.runtime.Visitor.currentVisit]
      }
      checkIfTargetingMustBeComputed(e, t, i) {
        let n = !0 === t && (void 0 === e || !1 === e && !0 === i);
        return n
      }
      createIterator(e) {
        let t = 0;
        return {
          hasNext: function() {
            return t < e.length
          },
          next: function() {
            return e[t++]
          }
        }
      }
      performSegmentsTracking(e) {
        for (let t = 0, i = e.length; t < i; ++t) {
          let i = e[t];
          Kameleoon.Utils.sendKameleoonCustomEvent.call(window, "SegmentTriggered", {
            segment: {
              id: i.id,
              name: i.name
            }
          });
          if (this.isTrackingSegment(i)) Kameleoon.Gatherer.track(VisitEvent_TargetingSegments, {
            id: i.id
          });
          if (Kameleoon.Internals.runtime.mentalistRun && i.mentalist) Kameleoon.Mentalist.saveScoresFromMoments(i.id);
        }
      }
      isTrackingSegment(e) {
        return e.audience || e.onboarding || Kameleoon.Internals.runtime.mentalistRun && e.mentalist
      }
      applyTargetingResult(e, t) {
        if (!e) return;
        e.targeting = t.targeting;
        e.rescheduleTargeting = t.rescheduleTargeting;
        if (t.computed) e.numberTargetingCheckings = (e.numberTargetingCheckings ?? 0) + 1
      }
    }
    Targeting.prototype.evaluate_ACTIVE_SESSION = function(e) {
      if (Kameleoon.Internals.runtime.gathererRun) {
        let t = (new Date)
          .getTime() - Kameleoon.Internals.runtime.Visitor.currentVisit.startDate;
        let r;
        switch (e.operator) {
          case "EQUAL":
            r = t == e.time;
            break;
          case "LOWER":
            r = t < e.time;
            break;
          case "GREATER":
            r = t > e.time ? !0 : void 0;
            break;
          case "LOWER_OR_EQUAL":
            r = t <= e.time;
            break;
          case "GREATER_OR_EQUAL":
            r = t >= e.time ? !0 : void 0;
            break
        }
        return {
          targeting: r,
          rescheduleTargeting: void 0 === r
        }
      }
      return null
    };
    Targeting.prototype.evaluate_PAGE_VIEWS = function(e) {
      if (Kameleoon.Internals.runtime.gathererRun) {
        let r;
        let t = Kameleoon.Internals.runtime.Visitor.currentVisit.obtainPageNumberViews();
        switch (e.operator) {
          case "GREATER":
            r = t > e.value;
            break;
          case "LOWER":
            r = t < e.value;
            break;
          case "EQUAL":
            r = t == e.value;
            break
        }
        return {
          targeting: r,
          rescheduleTargeting: !1
        }
      }
      return null
    };
    Targeting.prototype.evaluate_ORIGIN_TYPE = function(e) {
      let n = (e, n) => {
        if (null != n && new RegExp(".*\\butm_medium=(email|newsletter)(\\b.*)?$")
          .test(n)) return "EMAIL";
        if (null != n && new RegExp(".*\\b(utm_medium=cpc|gclid)(\\b.*)?$")
          .test(n)) return "SEM";
        if (null == e || 0 == e.length) return "DIRECT";
        if (null != e && new RegExp("^https?://[^/]*(google|bing|yahoo|yandex|baidu)\\..*")
          .test(e)) return "SEO";
        if (null != n && null != e) return "AFFILIATION";
        return null
      };
      if (Kameleoon.Internals.runtime.gathererRun) {
        let t = n(Kameleoon.Internals.runtime.storedData.obtainField("Runtime", "firstReferrerHref"), Kameleoon.Internals.runtime.Visitor.currentVisit.landingPageURL);
        return {
          targeting: null != t && e.value == t,
          rescheduleTargeting: !1
        }
      }
      return null
    };
    Targeting.prototype.evaluate_MOUSE_OUT = function(e) {
      let n;
      if (Kameleoon.Internals.runtime.mouseOutEvent) n = !0;
      else if (!Kameleoon.Internals.runtime.mouseOutListener && document.body) {
        Kameleoon.Internals.runtime.mouseOutListener = !0;
        let e = Kameleoon.Internals.runtime.Visitor.currentVisit.Device.browser;
        if ("Internet Explorer" == e) Kameleoon.Utils.addEventListener(document.body, "mouseout", (function(e) {
          if (!e.relatedTarget)
            if (Math.abs(e.clientY - window.innerHeight) > e.clientY) Kameleoon.Internals.runtime.mouseOutEvent = !0
        }));
        else Kameleoon.Utils.addEventListener(document.body, "mouseleave", (function(e) {
          if (e.clientY < 0) Kameleoon.Internals.runtime.mouseOutEvent = !0
        }))
      }
      return {
        targeting: n,
        rescheduleTargeting: void 0 === n
      }
    };
    Targeting.prototype.evaluate_NEW_VISITORS = function(e) {
      if (Kameleoon.Internals.runtime.gathererRun) {
        let t = 1 == Kameleoon.Internals.runtime.Visitor.visits.length;
        return {
          targeting: "NEW" == e.value ? t : !t,
          rescheduleTargeting: !1
        }
      }
      return null
    };
    Targeting.prototype.evaluate_BROWSER = function(e) {
      let r;
      const a = Kameleoon.Internals.runtime.Device;
      const s = a.browserVersion;
      const n = a.browser;
      switch (e.value) {
        case "IE":
        case "EDGE":
          r = "Internet Explorer" === n || "Microsoft Edge" === n;
          break;
        case "CHROME":
          r = "Chrome" === n;
          break;
        case "FIREFOX":
          r = "Firefox" === n;
          break;
        case "SAFARI":
          r = "Safari" === n;
          break;
        case "OPERA":
          r = "Opera" === n;
          break;
        case "SAMSUNG_INTERNET":
          r = "Samsung Internet for Android" === n;
          break;
        default:
          r = !1;
          break
      }
      if (r && null != e.version) switch (e.operator) {
        case "EQUAL":
          r = s == e.version;
          break;
        case "LOWER":
          r = s < e.version;
          break;
        case "GREATER":
          r = s > e.version;
          break
      }
      return {
        targeting: r,
        rescheduleTargeting: !1
      }
    };
    Targeting.prototype.evaluate_CUSTOM_DATUM = function(t) {
      if (Kameleoon.Internals.runtime.gathererRun) {
        let a;
        const e = Kameleoon.Internals.runtime.Visitor.currentVisit.customData[t.index];
        const i = {
          customDataValue: "",
          conditionValue: t.value,
          CONTAINS() {
            if (this.customDataValue.indexOf(this.conditionValue) >= 0) return !0
          },
          EXACT() {
            if (this.customDataValue === this.conditionValue) return !0
          },
          REGULAR_EXPRESSION() {
            if (RegExp(this.conditionValue)
              .test(this.customDataValue)) return !0
          },
          LOWER() {
            this.customDataValue = parseFloat(this.customDataValue);
            if (!isNaN(this.conditionValue) && !isNaN(this.customDataValue)) return this.customDataValue < this.conditionValue
          },
          EQUAL() {
            this.customDataValue = parseFloat(this.customDataValue);
            if (!isNaN(this.conditionValue) && !isNaN(this.customDataValue)) return this.customDataValue == this.conditionValue
          },
          GREATER() {
            this.customDataValue = parseFloat(this.customDataValue);
            if (!isNaN(this.conditionValue) && !isNaN(this.customDataValue)) return this.customDataValue > this.conditionValue
          },
          TRUE() {
            if ("true" === this.customDataValue) return !0
          },
          FALSE() {
            if ("false" === this.customDataValue) return !0
          },
          AMONG_VALUES() {
            try {
              const t = JSON.parse(this.conditionValue);
              for (let a = 0, e = t.length; a < e; a++)
                if (t[a] == this.customDataValue) return !0
            } catch (t) {
              return !1
            }
          },
          RANGE() {
            try {
              const [t, a] = JSON.parse(this.conditionValue);
              this.customDataValue = parseFloat(this.customDataValue);
              if (!isNaN(this.customDataValue)) return this.customDataValue >= t && this.customDataValue <= a
            } catch (t) {
              return !1
            }
          }
        };
        if (null == e) a = "UNDEFINED" == t.operator ? !0 : void 0;
        else {
          a = !1;
          for (const u in e)
            if (i[t.operator]) {
              i.customDataValue = u.toString();
              const e = i[t.operator]();
              if ("boolean" == typeof e) {
                a = e;
                break
              }
            }
        }
        return {
          targeting: a,
          rescheduleTargeting: void 0 === a
        }
      }
      return null
    };
    Targeting.prototype.evaluate_PAGE_URL = function(e) {
      let t = new RegExp(Kameleoon.Utils.computeURLRegExpNoKameleoonParameters(e.value));
      let a;
      try {
        a = t.test(decodeURI(Kameleoon.Utils.computeCurrentPageCleanAbsoluteURL()))
      } catch (e) {
        try {
          a = unescape ? t.test(unescape(Kameleoon.Utils.computeCurrentPageCleanAbsoluteURL())) : !1
        } catch (e) {
          a = !1
        }
      }
      return {
        targeting: a,
        rescheduleTargeting: !1
      }
    };
    Targeting.prototype.evaluate_TIME_SINCE_PAGE_LOAD = function(e) {
      let t = function(e) {
        try {
          return e.test(decodeURI(Kameleoon.Utils.computeCurrentPageCleanAbsoluteURL()))
        } catch (t) {
          try {
            return unescape ? e.test(unescape(Kameleoon.Utils.computeCurrentPageCleanAbsoluteURL())) : !1
          } catch (e) {
            return !1
          }
        }
      }.bind(this);
      let a = (null == e.pageURLRegExpToMatch || t(new RegExp(Kameleoon.Utils.computeURLRegExpNoKameleoonParameters(e.pageURLRegExpToMatch)))) && (null == e.pageURLRegExpNotToMatch || !t(new RegExp(Kameleoon.Utils.computeURLRegExpNoKameleoonParameters(e.pageURLRegExpNotToMatch))));
      if (a) {
        let t = (new Date)
          .getTime() - Kameleoon.Internals.runtime.pageStartTime;
        switch (e.operator) {
          case "EQUAL":
            a = t == e.time;
            break;
          case "LOWER":
            a = t < e.time;
            break;
          case "GREATER":
            a = t > e.time ? !0 : void 0;
            break;
          case "LOWER_OR_EQUAL":
            a = t <= e.time;
            break;
          case "GREATER_OR_EQUAL":
            a = t >= e.time ? !0 : void 0;
            break
        }
      }
      return {
        targeting: a,
        rescheduleTargeting: void 0 === a
      }
    };
    Targeting.prototype.evaluate_FIND_UNIQ_CONDITION = (t, n, e) => i => {
      const g = n && Kameleoon.Internals.runtime.Campaigns.obtainCampaign(n);
      let a = null;
      const o = t => {
        if (t && t.targetingCondition && t.targetingCondition.uniq === e) return t.targetingCondition;
        if (t && t.leftChild) {
          const n = o(t.leftChild);
          if (n) return n
        }
        if (t && t.rightChild) {
          const n = o(t.rightChild);
          if (n) return n
        }
      };
      if (g) a = o(g.targetingTrigger?.tree) || o(g.targetingSegment?.tree);
      else {
        const n = Kameleoon.Targeting.obtainTargeting(t) || Kameleoon.Internals.runtime.targetingSegments.find((n => n.id == t)) || Kameleoon.Internals.runtime.targetingTriggers.find((n => n.id == t));
        a = n && o(n.tree)
      }
      if (a) a.targeting = i
    };
    Targeting.prototype.evaluate_JS_CODE = function(targetingCondition, campaign, segment) {
      let targeting;
      try {
        if (targetingCondition.timeout)
          if (targetingCondition.start) {
            if (Date.now() - targetingCondition.start >= 1e3 * targetingCondition.timeout) return {
              targeting: !1,
              rescheduleTargeting: !1
            }
          } else targetingCondition.start = Date.now();
        if (!targetingCondition.valueGeneratedCode)
          if (targetingCondition.async) {
            targetingCondition.uniq = targetingCondition.uniq ?? Kameleoon.Utils.obtainRandomString(4);
            targetingCondition.valueGeneratedCode = "(function(setTargeting) {\n" + targetingCondition.value + `\n})(Kameleoon.Targeting.evaluate_FIND_UNIQ_CONDITION(${segment.id}, ${campaign?.id??null}, '${targetingCondition.uniq}'));`;
            Kameleoon.Utils.runProtectedScript(targetingCondition.valueGeneratedCode, "")
          } else targetingCondition.valueGeneratedCode = "(function() {\n" + targetingCondition.value + "\n})();";
        if (targetingCondition.async) targeting = targetingCondition.targeting || void 0;
        else if (!targetingCondition.domReady || Kameleoon.Internals.runtime.domReady) {
          const value = Kameleoon.Utils.runProtectedScript(targetingCondition.valueGeneratedCode, "", (() => eval(targetingCondition.valueGeneratedCode)));
          targeting = "boolean" == typeof value ? value : void 0
        }
      } catch (t) {
        targeting = !1;
        const n = segment ? segment.name : null;
        console.log(t, n)
      }
      return {
        targeting: targeting,
        rescheduleTargeting: void 0 === targeting
      }
    };
    Targeting.prototype.evaluate_SEGMENT = function(e) {
      let g = Kameleoon.Targeting.obtainTargeting(e.linkedSegmentId) || Kameleoon.Internals.runtime.targetingSegments.find((g => g.id == e.linkedSegmentId));
      if (g) {
        if (null == g.numberTargetingCheckings) Kameleoon.Targeting.processTargetingSegments([g]);
        e.value = g.name;
        e.targeting = g.targeting;
        e.rescheduleTargeting = void 0 === g.targeting;
        return {
          targeting: g.targeting,
          rescheduleTargeting: void 0 === g.targeting
        }
      }
      return {
        targeting: void 0,
        rescheduleTargeting: !0
      }
    };
    Targeting.prototype.evaluate_EVENT = function(e) {
      let t;
      for (let r = 0, g = Kameleoon.API.Events.triggered.length; r < g; ++r)
        if (e.value == Kameleoon.API.Events.triggered[r]) {
          t = !0;
          break
        } return {
        targeting: t,
        rescheduleTargeting: void 0 === t
      }
    };
    Targeting.prototype.evaluate_DOM_ELEMENT = function(e) {
      let l;
      if (null != e.value) l = Kameleoon.Utils.querySelectorAll(e.value)
        .length > 0 ? !0 : void 0;
      else if (null != e.elementSets);
      else l = !1;
      if (void 0 === l && Kameleoon.Internals.runtime.domReady) l = !1;
      return {
        targeting: l,
        rescheduleTargeting: void 0 === l
      }
    };
    Targeting.prototype.evaluate_KEY_MOMENT = function(e, n) {
      let t;
      let i = Kameleoon.Targeting.obtainTargeting(e.linkedSegmentId) || Kameleoon.Internals.runtime.targetingSegments.concat(Kameleoon.Internals.runtime.targetingTriggers || [])
        .find((n => n.id == e.linkedSegmentId));
      if (i)
        if (i.executeAsSeparate && n) {
          if (!e.linkedSegment) {
            const n = i.trigger ? "targetingTriggers" : "targetingSegments";
            let t = Kameleoon.Utils.clone(Kameleoon.Internals.configuration[n].find((n => n.id == e.linkedSegmentId)) || null);
            if (!t && Kameleoon.Internals.runtime.simulationMode && Kameleoon.Internals.runtime.simulationModeData && Kameleoon.Internals.runtime.simulationModeData[n]) t = Kameleoon.Utils.clone(Kameleoon.Internals.runtime.simulationModeData[n].find((n => n.id == e.linkedSegmentId)) || null);
            e.linkedSegment = t || {}
          }
          const g = Kameleoon.Targeting.checkTree(n, e.linkedSegment.tree || null, !1, e.linkedSegment || null);
          e.linkedSegment.targeting = g.targeting;
          e.linkedSegment.rescheduleTargeting = g.rescheduleTargeting;
          e.linkedSegment.numberTargetingCheckings = g.numberTargetingCheckings;
          t = e.linkedSegment.targeting
        } else {
          if (null == i.numberTargetingCheckings) Kameleoon.Targeting.processTargetingSegments([i]);
          e.value = i.name;
          e.targeting = i.targeting;
          t = i.targeting
        } return {
        targeting: t,
        rescheduleTargeting: void 0 === t
      }
    };
    class Tracking {
      constructor() {
        this.timeBeforeSendTracking = 20 * 60 * 1e3;
        this.checkAndSetKameleoonTrackingTime = (t, e) => {
          const n = Kameleoon.Utils.secureSessionStorage("getItem", "kameleoonAnalyticsTrackingTimes");
          const i = null == n ? {} : JSON.parse(n);
          const a = "Experiment-" + t;
          if (null == i[e] || null == i[e][a] || (new Date)
            .getTime() >= i[e][a] + this.timeBeforeSendTracking) {
            if (null == i[e]) i[e] = {};
            i[e][a] = (new Date)
              .getTime();
            Kameleoon.Utils.secureSessionStorage("setItem", "kameleoonAnalyticsTrackingTimes", JSON.stringify(i));
            return !0
          }
          return !1
        };
        this.obtainTealiumData = () => {};
        this.initIntegrationListener = t => {
          if (!this.integrationListenerQueue) this.integrationListenerQueue = [];
          this.integrationListenerQueue.push(t);
          if (!this.integrationListenerIntervalId) this.integrationListenerIntervalId = Kameleoon.Utils.setInterval((() => {
            const t = this.integrationListenerQueue;
            if (!t || 0 === t.length) {
              Kameleoon.Utils.clearInterval(this.integrationListenerIntervalId);
              this.integrationListenerIntervalId = null;
              return
            }
            const e = t.splice(0, 200);
            e.forEach((t => {
              try {
                t()
              } catch (t) {}
            }))
          }), 500);
        };
        this.processCustomIntegration = t => {
          const e = Kameleoon.Internals.configuration.customIntegrations;
          for (let n = 0; n < t.customIntegrations.length; n++) {
            const i = t.customIntegrations[n];
            const a = e.filter((t => t.name == i))[0];
            if (a) {
              const e = "'" + t.name.replace(/(['"])/g, "\\$1") + "'";
              Kameleoon.Utils.runProtectedScript(`(function(\n\t\t\t\t\t\texperimentID,\n\t\t\t\t\t\texperimentName,\n\t\t\t\t\t\tpersonalizationID,\n\t\t\t\t\t\tpersonalizationName,\n\t\t\t\t\t\tvariationID,\n\t\t\t\t\t\tvariationName) {\n\t\t\t\t\t\t\t${a.jsCode}\n\t\t\t\t\t})(\n\t\t\t\t\t\t${t.experimentAction?t.id:null},\n\t\t\t\t\t\t${t.experimentAction?e:null},\n\t\t\t\t\t\t${!t.experimentAction?t.id:null},\n\t\t\t\t\t\t${!t.experimentAction?e:null},\n\t\t\t\t\t\t${"reference"==t.associatedVariation.id.toString()?0:t.associatedVariation.id},\n\t\t\t\t\t\t${"'"+t.associatedVariation.name+"'"}\n\t\t\t\t\t)`, "kameleoonCustomIntegration" + i + ".js")
            }
          }
        }
      }
      clear() {
        this.integrationListenerQueue = null;
        if (null != this.integrationListenerIntervalId) {
          Kameleoon.Utils.clearInterval(this.integrationListenerIntervalId);
          this.integrationListenerIntervalId = null
        }
      }
    }
    Tracking.prototype.processUniversalAnalytics = function(n) {
      let e = Kameleoon.Tracking.findUniversalAnalyticsObject();
      let i = e && e.answer && 42 == e.answer;
      if (!i && n.universalAnalyticsTracking.eventCallDelayed) {
        Kameleoon.Tracking.initIntegrationListener((() => {
          Kameleoon.Tracking.processUniversalAnalytics(n)
        }));
        return
      }
      let a = n.universalAnalyticsTracking.trackingId;
      if (i && n.universalAnalyticsTracking.eventCallDelayed && a)
        if (void 0 == Kameleoon.Tracking.obtainUniversalAnalyticsTracker(n)) {
          Kameleoon.Tracking.initIntegrationListener((() => {
            Kameleoon.Tracking.processUniversalAnalytics(n)
          }));
          return
        } let r = Kameleoon.Tracking.obtainUniversalAnalyticsTrackerPrefix(n);
      if (null == e || e && null == e.answer) Kameleoon.Tracking.initIntegrationListener((() => {
        Kameleoon.Tracking.processUniversalAnalytics(n)
      }));
      else {
        if (n.universalAnalyticsTracking.dimension && n.universalAnalyticsTracking.dimension < 201) e(r + "set", "dimension" + n.universalAnalyticsTracking.dimension, n.name + "/" + n.associatedVariation.name.substring(0, 80));
        if (Kameleoon.Tracking.checkAndSetKameleoonTrackingTime(n.id, "universalAnalytics"))
          if (n.universalAnalyticsTracking.pageViewTracking) {
            let i = n.name.replace(/\//gi, "-");
            e(r + "send", "pageview", "/Kameleoon/" + i + "/" + encodeURIComponent(n.associatedVariation.name))
          } else if (i || n.universalAnalyticsTracking.eventTracking) e(r + "send", "event", "Kameleoon", n.name, n.associatedVariation.name, void 0, {
          nonInteraction: 1
        })
      }
    };
    Tracking.prototype.findUniversalAnalyticsObject = () => window.ga;
    Tracking.prototype.obtainUniversalAnalyticsTrackerPrefix = n => {
      let e = Kameleoon.Tracking.obtainUniversalAnalyticsTracker(n);
      return e ? e.get("name") + "." : ""
    };
    Tracking.prototype.obtainUniversalAnalyticsTrackerFromTrackingId = n => {
      let e = Kameleoon.Tracking.findUniversalAnalyticsObject();
      if (void 0 !== e && null != e.getAll) {
        let i = e.getAll();
        if (n) {
          for (let e = 0; e < i.length; ++e)
            if (n == i[e].get("trackingId")) return i[e]
        } else if (i.length > 0) return i[0]
      }
      return
    };
    Tracking.prototype.obtainUniversalAnalyticsTracker = n => {
      let e;
      if (n && n.universalAnalyticsTracking && n.universalAnalyticsTracking.trackingId) e = n.universalAnalyticsTracking.trackingId;
      return Kameleoon.Tracking.obtainUniversalAnalyticsTrackerFromTrackingId(e)
    };
    Tracking.prototype.processClarity = function(a) {
      if (window.clarity) {
        window.clarity("set", "KameleoonCampaignID", a.id);
        window.clarity("set", "KameleoonCampaignName", a.name);
        window.clarity("set", "KameleoonVariationID", a.associatedVariation.id);
        window.clarity("set", "KameleoonVariationName", a.associatedVariation.name)
      } else Kameleoon.Tracking.initIntegrationListener((() => {
        Kameleoon.Tracking.processClarity.apply(Kameleoon.Tracking, [a])
      }))
    };
    Tracking.prototype.processGoalUniversalAnalytics = function(n) {
      let e = Kameleoon.Tracking.findUniversalAnalyticsObject();
      if (void 0 !== e) {
        let a = Kameleoon.Internals.configuration.universalAnalyticsTrackerId ? Kameleoon.Tracking.obtainUniversalAnalyticsTrackerFromTrackingId(Kameleoon.Internals.configuration.universalAnalyticsTrackerId) : null;
        let o = a ? a.get("name") + "." : "";
        e(o + "send", "event", "Kameleoon", n.action || n.type, encodeURIComponent(n.name), void 0)
      }
    };
    class Variation {
      constructor(e) {
        this.getAction = () => Kameleoon.Internals.runtime.Campaigns.obtainCampaign(this.actionId);
        for (const t in e) this[t] = e[t]
      }
      applyJavascriptCode(e) {
        if (this.javaScriptCode && this.javaScriptCode.code && (null == this.javaScriptCode.evaluated || e)) {
          this.javaScriptCode.evaluated = !0;
          return Kameleoon.Utils.runProtectedScript(this.javaScriptCode.code, "kameleoonVariationJavaScriptCode-" + this.id + ".js")
        }
        return null
      }
      preProcessRedirect(e) {}
      process() {
        const e = Kameleoon.Internals.runtime.Campaigns.obtainCampaign(this.actionId);
        if (!this.styleSheetAdded) {
          this.styleSheetAdded = !0;
          Kameleoon.Utils.addCSSStyleSheet(this.css, e, null)
        }
        if (this.javaScriptCode && !this.permanentRefreshActive)
          if (!this.javaScriptCode.afterDOMReady) this.applyJavascriptCode(!1);
          else if (!this.permanentRefreshActive) Kameleoon.Utils.domReady((() => {
          this.applyJavascriptCode(!1)
        }));
        const t = "enginePollerForVariation" + this.id;
        if (Kameleoon.Internals.runtime[t] && !this.permanentRefreshActive) {
          if (Kameleoon.Internals.runtime.cantUseMutationObserver) Kameleoon.Utils.clearInterval(Kameleoon.Internals.runtime[t]);
          Kameleoon.Internals.runtime[t] = null
        }
        if (!Kameleoon.Internals.runtime[t] && !Kameleoon.Internals.runtime.editorMode && !Kameleoon.Internals.runtime.kameleoonSelectionIframeMode) {
          this.permanentRefreshActive = !0;
          Kameleoon.Internals.runtime.listenVariations.push(this);
          Kameleoon.Internals.runtime[t] = !0;
          if (Kameleoon.Internals.runtime.cantUseMutationObserver) Kameleoon.Internals.runtime[t] = Kameleoon.Utils.setInterval((() => {
            this.process()
          }), 10)
        }
      }
      processReplaceData(e) {}
    }
    class Visit {
      constructor(t) {
        this.addActionTriggered = (t, e) => {
          const i = e ? "experimentsTriggered" : "personalizationsTriggered";
          const s = Kameleoon.Internals.runtime.storedData.obtainField("Gatherer", i, {});
          s[t.toString()] = !0;
          Kameleoon.Internals.runtime.storedData.saveField("Gatherer", i, s);
        };
        this.addEvent = t => {
          this.lastEventDate = t
        };
        this.addAdBlocker = () => {
          this.Device.adBlocker = !0
        };
        this.addConversions = (t, e, i, s) => {
          let n = s ? -1 : 1;
          e *= n;
          i *= n;
          let a = this.conversions[t];
          let o = a ? a.count : 0;
          let r = a ? a.revenue : 0;
          let l = o + e;
          let u = r + i;
          if (l > 0)
            if (u >= 0) this.conversions[t] = {
              count: l,
              revenue: u
            };
            else delete this.conversions[t];
          else delete this.conversions[t]
        };
        this.addCustomData = (t, e, i) => {
          if (Kameleoon.Utils.testEmptyMap(e)) {
            if (i) delete this.customData[t]
          } else {
            if (i || null == this.customData[t]) this.customData[t] = {};
            for (let i in e) this.customData[t][i] = (this.customData[t][i] || 0) + e[i]
          }
        };
        this.addExperiment = (t, e, i) => {
          if (null === i) return;
          if (void 0 === this.ExperimentActivations[e]) this.ExperimentActivations[e] = {
            associatedVariationID: i,
            times: []
          };
          this.ExperimentActivations[e].times.push(t);
          if (-1 != e) {
            let t = Kameleoon.Internals.runtime.Campaigns.obtainCampaign(e, !0);
            let i = t ? t.attributionWindow : Visitor.INFLUENCE_DELAY;
            if (i > 0) this.ExperimentActivations[e].influence = i
          }
        };
        this.addGeolocation = t => {
          this.Geolocation = t
        };
        this.addClicks = t => {
          if (t > 0) this.clicks += t
        };
        this.addPage = (t, e, i, s) => {
          let n = s.filter((t => null != t));
          this.pages.push({
            timestamp: t,
            keyPagesMatched: i,
            referrersMatched: n.length > 0 ? n : []
          });
          let a = this.pageURLsVisited[e];
          if (null == a) {
            a = [];
            this.pageURLsVisited[e] = a
          }
          a.push(t);
          for (let t in this.productEansLastPage) this.productEansAllButLastPages[t] = !0;
          this.productEansLastPage = {}
        };
        this.addPersonalization = (t, e, i) => {};
        this.addProduct = t => {
          this.productEansLastPage[t] = !0
        };
        this.addTargetingSegment = (t, e) => {
          let i = this.activatedSegments[e];
          if (null == i) {
            i = [];
            this.activatedSegments[e] = i
          }
          i.push(t);
        };
        this.addWeather = t => {
          this.Weather = t
        };
        this.clearCustomDataPage = () => {
          for (let t in Kameleoon.Internals.runtime.Gatherer.configuration.customData) {
            let e = Kameleoon.Internals.runtime.Gatherer.configuration.customData[t];
            if ("PAGE" == e.scope) delete this.customData[t]
          }
        };
        this.computeActionNumberActivations = (t, e, i, s) => {
          if (null == s[t]) return 0;
          return this.computeObjectNumberPresence(e, i, s[t].times)
        };
        this.computeObjectNumberPresence = (t, e, i) => {
          let s = 0;
          for (let n = 0, a = i.length; n < a; ++n) {
            let a = i[n];
            if ((null == t || a >= t) && (null == e || a <= e)) s++
          }
          return s
        };
        this.isVisitFinished = () => this.lastEventDate < (new Date)
          .getTime() - Kameleoon.Internals.runtime.Gatherer.configuration.maxVisitIdleDuration;
        this.obtainKeyPageIsVisited = t => {
          let e = this.pages.filter((e => -1 != e.keyPagesMatched.indexOf(t)));
          return e.length > 0
        };
        this.obtainMeanPageDuration = () => {
          let t = new Date;
          let e = this.obtainTimesStartedPages();
          let i = OnlineMeanAndDeviation.createFromDifferences(e, !1, !0, !0);
          i.update([t.getTime() - e[e.length - 1]]);
          return i.mean[0];
        };
        this.obtainNumberConversions = t => {
          let e = this.conversions[t];
          return null == e ? 0 : e.count
        };
        this.obtainPageNumberViews = (t, e, i, s) => {
          let n = 0;
          for (let a in this.pageURLsVisited)
            if (null != a) {
              let o = Kameleoon.Utils.computeRelativeURL(a);
              if ((null == t || t.test(a) || t.test(o)) && (null == e || !e.test(a) && !e.test(o))) n += this.computeObjectNumberPresence(i, s, this.pageURLsVisited[a])
            } return n
        };
        this.obtainTimesStartedPages = () => {
          let t = [];
          for (let e in this.pageURLsVisited) t.concat(this.pageURLsVisited[e]);
          return t.sort()
        };
        this.obtainPersonalizationNumberActivations = (t, e, i) => this.computeActionNumberActivations(t, e, i, this.PersonalizationActivations);
        this.obtainReferrerIsPresent = t => {
          let e = null == t ? null : t + 1;
          let i = this.pages.filter((t => -1 != t.referrersMatched.indexOf(e)));
          return i.length > 0
        };
        this.visitNumber = t.visitNumber || 0;
        this.landingPageURL = t.landingPageURL || null;
        this.productEansAllButLastPages = t.productEansAllButLastPages || {};
        this.productEansLastPage = t.productEansLastPage || {};
        this.startDate = t.startDate || 0;
        this.pageURLsVisited = t.pageURLsVisited || {};
        this.activatedSegments = t.activatedSegments || {};
        this.visitorCode = t.visitorCode || "";
        this.customData = t.customData || {};
        this.clicks = t.clicks || 0;
        this.lastEventDate = t.lastEventDate || t.lastActivityDate || this.startDate;
        let e = t.Device || {};
        this.Device = {
          adBlocker: e.adBlocker || !1,
          browser: e.browser || "Other",
          browserVersion: e.browserVersion || null,
          os: e.os || "Other",
          screenHeight: e.screenHeight || null,
          screenWidth: e.screenWidth || null,
          type: e.type ? e.type.toLocaleUpperCase() : null
        };
        let i = t.Geolocation || {};
        this.Geolocation = {
          city: i.city || null,
          country: i.country || null,
          latitude: i.latitude || null,
          longitude: i.longitude || null,
          postalCode: i.postalCode || null,
          region: i.region || null
        };
        let s = t.Weather || {};
        this.Weather = {
          conditionCode: s.conditionCode || null,
          conditionDescription: s.conditionDescription || null,
          cloudiness: s.cloudiness || null,
          humidity: s.humidity || null,
          pressure: s.pressure || null,
          sunrise: s.sunrise || null,
          sunset: s.sunset || null,
          temperature: s.temperature || null,
          windSpeed: s.windSpeed || null
        };
        this.conversions = t.conversions || {};
        this.ExperimentActivations = t.ExperimentActivations || {};
        this.PersonalizationActivations = t.PersonalizationActivations || {};
        this.pages = t.pages || []
      }
      obtainExperimentNumberActivations(t, e, i) {
        return this.computeActionNumberActivations(t, e, i, this.ExperimentActivations)
      }
    }
    class Visitor {
      constructor() {
        this.addVisit = t => {
          this.visits.push(t);
          this.currentVisit = t;
          this.totalVisits++;
          if (null == this.timeStartedEldestVisit) this.timeStartedEldestVisit = t.startDate;
          const e = this.visits.length;
          const i = Math.max(1, Kameleoon.Internals.configuration.maxNumberLocalVisits);
          if (e > i) this.visits = this.visits.slice(e - i)
        };
        this.obtainKeyPageIsVisited = t => {
          for (let e = 0, i = this.visits.length; e < i; ++e)
            if (this.visits[e].obtainKeyPageIsVisited(t)) return !0;
          return !1
        };
        this.obtainReferrerIsPresent = t => {
          for (let e = 0, i = this.visits.length; e < i; ++e)
            if (this.visits[e].obtainReferrerIsPresent(t)) return !0;
          return !1
        };
        this.obtainNumberConversions = t => {
          let e = 0;
          for (let i = this.visits.length - 1; i >= 0; --i) e += this.visits[i].obtainNumberConversions(t);
          return e
        };
        this.obtainActionNumberActivations = (t, e, i, s, o, n, r, a) => {
          const l = a ? "obtainExperimentNumberActivations" : "obtainPersonalizationNumberActivations";
          const m = this.visits.length;
          let c = 0;
          if (m > 0 && (o || n)) {
            let e = 0;
            let a = m;
            if (!n && o) e = m - 1;
            else if (n && !o) a = m - 1;
            for (let o = e; o < a; ++o) {
              const e = this.visits[o][l](t, i, s);
              c += r ? Number(e > 0) : e
            }
          }
          return c
        };
        this.obtainPageNumberViews = (t, e, i, s, o, n) => {
          const r = this.visits.length;
          let a = 0;
          if (r > 0 && (o || n)) {
            let l = 0;
            let m = r;
            if (!n && o) l = r - 1;
            else if (n && !o) m = r - 1;
            for (let o = l; o < m; o++) a += this.visits[o].obtainPageNumberViews(t, e, i, s)
          }
          return a
        };
        this.obtainTimeSincePreviousVisit = () => {
          let t = 0;
          if (this.visits.length > 1) {
            t = this.currentVisit.startDate - this.visits.slice(-2)[0].lastEventDate;
            t = Math.max(t, Kameleoon.Internals.runtime.Gatherer.configuration.maxVisitIdleDuration)
          }
          return t
        };
        this.obtainVisitorCode = t => {
          let e = !1;
          let i = Kameleoon.Utils.readLocalData("kameleoonVisitorCode", "COOKIE");
          const s = Kameleoon.Internals.runtime.storedData.obtainField("Gatherer", "timeNextSynchronization", null);
          if (Kameleoon.Internals.configuration.useWideDomainSupport || Kameleoon.Internals.configuration.useVisitorCodeInLocalStorage) {
            const t = Kameleoon.Internals.runtime.incomingStoredData?.["kameleoonVisitorCode"] ?? Kameleoon.Utils.readLocalData("kameleoonVisitorCode", "LS");
            if (t) i = t
          }
          if (t || null == i) {
            i = Kameleoon.Utils.obtainRandomString(Visitor.VISITOR_CODE_LENGTH, Analyst.CODE_ALPHABET);
            e = !0
          }
          Kameleoon.Utils.saveVisitorCode(i, null == s);
          this.visitorCode = i;
          return e
        };
        this.obtainVisitorFromStoredData = () => Kameleoon.Internals.runtime.storedData.Visitor;
        this.saveToStoredData = () => {
          this.saveFieldToStoredData("visits", this.visits);
          this.saveFieldToStoredData("totalVisits", this.totalVisits);
          this.saveFieldToStoredData("timeStartedEldestVisit", this.timeStartedEldestVisit)
        };
        this.setVisitorCode = t => {
          if (this.visitorCode != t) {
            Kameleoon.Internals.runtime.newVisitorCode = !0;
            Kameleoon.Utils.saveVisitorCode(t);
            this.visitorCode = t;
            Kameleoon.Internals.runtime.Visitor.currentVisit.visitorCode = t;
            if (this.visits) this.visits.forEach((e => {
              e.visitorCode = t
            }));
            Kameleoon.Internals.runtime.Campaigns.obtainCampaignsList(0)
              .forEach((t => {
                if (void 0 !== t.registeredVariationId) {
                  t.registeredVariationId = void 0;
                  t.performVariationAssignment(!0)
                }
              }));
            this.saveToStoredData();
            Kameleoon.Gatherer.track(VisitEvent_Page);
            Kameleoon.Gatherer.track(VisitEvent_StaticData)
          }
        };
        this.updateFromStoredData = (t, e, i) => {
          const s = this.obtainVisitorFromStoredData();
          const o = s.visits;
          if (!this.visitorCode) {
            const t = this.obtainVisitorCode(i);
            if (t) i = !0
          }
          if (o) {
            const t = o.slice(-1)[0].visitorCode;
            if (t != this.visitorCode) {
              const e = Kameleoon.Utils.readLocalData("kameleoonVisitorCode", "LS") || Kameleoon.Utils.readLocalData("kameleoonVisitorCode", "COOKIE");
              if (e == t || !Kameleoon.Internals.runtime.Consent.hasGlobalConsent()) {
                this.visitorCode = t;
                try {
                  delete Kameleoon.Internals.runtime.localDataMap.COOKIE["kameleoonVisitorCode"];
                  delete Kameleoon.Internals.runtime.localDataMap.LS["kameleoonVisitorCode"]
                } catch (t) {}
              } else if (e == this.visitorCode) i = !0
            }
          }
          if (i || t) {
            e = !0;
            if (i) this.totalVisits = 0
          }
          this.visits = [];
          if (!i && o) {
            o.forEach((t => {
              this.addVisit(new Visit(t))
            }));
            this.totalVisits = s.totalVisits;
            this.timeStartedEldestVisit = s.timeStartedEldestVisit
          }
          let n = 0;
          if (e || !this.currentVisit || this.currentVisit.isVisitFinished()) {
            const {
              Device: t,
              storedData: e
            } = Kameleoon.Internals.runtime;
            const s = e.obtainField("Gatherer", "startsOfVisitForCurrentPage");
            e.saveField("Gatherer", "startsOfVisitForCurrentPage", s + 1);
            Kameleoon.Internals.runtime.Gatherer.startOfVisit = !0;
            e.resetForStartOfVisit();
            e.saveField("Runtime", "firstReferrerHref", Kameleoon.Gatherer.Referrer.obtainCorrected(!0) || null);
            e.saveField("Runtime", "firstReferrersIndices", Kameleoon.Gatherer.Referrer.obtainIndexes(!0) || [null]);
            e.saveField("Runtime", "landingKeyPagesIndices", Kameleoon.Gatherer.KeyPage.obtainIndexes() || [null]);
            let o;
            if (!this.currentVisit || i) o = 0;
            else o = this.currentVisit.visitNumber + 1;
            this.addVisit(new Visit({
              visitorCode: this.visitorCode,
              startDate: (new Date)
                .getTime(),
              visitNumber: o,
              landingPageURL: Kameleoon.Utils.computeCurrentPageCleanAbsoluteURL(),
              Device: {
                browser: Kameleoon.Gatherer.Browser.obtain(),
                browserVersion: t.browserVersion,
                os: Kameleoon.Gatherer.OperatingSystem.obtain(),
                screenHeight: t.screenHeight,
                screenWidth: t.screenWidth,
                type: t.type
              }
            }));
            n = 2
          }
          this.saveToStoredData();
          Kameleoon.Internals.runtime.storedData.save(n)
        };
        this.getCustomDataVisitor = () => {
          const t = {};
          const e = Kameleoon.Internals.runtime.Gatherer.configuration.customData;
          for (const i in Kameleoon.Internals.runtime.Visitor.currentVisit.customData) {
            const s = e[i];
            if (null != s && !s.disabled)
              if ("VISITOR" == s.scope) {
                const e = Kameleoon.Internals.runtime.Visitor.currentVisit.customData[i];
                t[i] = e
              }
          }
          return t
        };
        this.registerVisitsRequestSuccess = t => {};
        this.compareCurrentVisitFromServer = t => {};
        this.performRemoteVisitorSynchronization = () => {};
        this.obtainProductData = (t, e, i, s) => {
          const o = `${Kameleoon.Internals.runtime.DATA_URL}/product/${t}`;
          i.siteCode = Kameleoon.Internals.configuration.siteCode;
          i.eans = encodeURIComponent(JSON.stringify((e instanceof Array ? e : [e])
            .map((t => t.toString()))));
          Kameleoon.Utils.performBeaconServerCall(Kameleoon.Utils.addParameterToURL(o, Kameleoon.Utils.parseObjectToUrlParams(i), !1), (function(t) {
            if (4 === t.readyState && 200 === t.status) s(JSON.parse(t.response || "{}"))
          }), (function(t) {
            console.error(t)
          }));
        };
        this.obtainIdentifierValue = () => {
          let t = null;
          return t || this.visitorCode
        };
        this.visits = [];
        this.currentVisit = null;
        this.totalVisits = 0;
        this.updateFromStoredData(!1);
        Object.defineProperty(this, "customData", {
          enumerable: !0,
          get: () => this.getCustomDataVisitor()
        })
      }
      saveFieldToStoredData(t, e) {
        Kameleoon.Internals.runtime.storedData.Visitor[t] = e
      }
      remoteSynchronisation(t, e, i, s) {}
    }
    Visitor.VISITOR_CODE_LENGTH = 16;
    Visitor.INFLUENCE_DELAY = 1e3 * 60 * 60 * 24 * 7;
    try {
      window.Kameleoon = new KameleoonEngine
    } catch (o) {
      console.log(o)
    }
    Kameleoon.Internals = {
      "configuration": {
        "API_HOST_NAME": "api",
        "APP_HOST_NAME": "app",
        "BACK_OFFICE_HOST_NAME": "old",
        "EDITOR_SRC": "src/main.ts",
        "STATIC_IMAGES_URL": "//static.kameleoon.com/js/editor/source/images/",
        "BASE_EDITOR_URL": "//static.kameleoon.com/js/editor/",
        "NEW_EDITOR_URL": "//graphical-editor.kameleoon.com",
        "EDITOR_HOST_NAME": "editor",
        "DOMAIN": "kameleoon.com",
        "SITE_RESOURCES_DOMAIN": "kameleoon.eu",
        "GUI_ESTIMATED_LOADING_TIME": 3000,
        "IMAGE_PATH": "https://tdz2z7s27z.kameleoon.eu/images/",
        "PROXY_HOST_NAME": "proxy",
        "QOOXDOO_ESTIMATED_LOADING_TIME": 2000,
        "SERVER_CALL_ESTIMATED_LOADING_TIME": 500,
        "STATIC_DIRECT_HOST_NAME": "static-direct",
        "STATIC_HOST_NAME": "static",
        "environment": "PRODUCTION",
        "staticURL": "//static.kameleoon.eu/",
        "maxNumberLocalVisits": 25,
        "memberCode": "0",
        "siteCode": "tdz2z7s27z",
        "abtestConsent": "REQUIRED",
        "abtestConsentOptout": "RUN",
        "beforeAbtestConsent": "ALL",
        "beforePersonalizationConsent": "ALL",
        "personalizationConsent": "REQUIRED",
        "personalizationConsentOptout": "RUN",
        "personalizationsDeviation": 0.96,
        "experiments": [{
          "id": 162149,
          "name": "100% [Lidl|NL|Global|T28] Go to Checkout NL FollowUp",
          "baseURL": "http://www.lidl.nl",
          "experimentAction": true,
          "globalScript": "\"use strict\";const getLangCookie=()=>{const t=document.cookie.match(/lidl_locale=([^;]+)/);return t?t[1].substring(0,2):\"nl\"},getCartID=()=>{const t=`; ${document.cookie}`.split(\"; CART_ID=\");return 2===t.length?t.pop().split(\";\").shift():null},allCheckoutEntry=t=>{Kameleoon.API.Utils.addUniversalClickListener(document,(({target:e})=>{!document.location.pathname.includes(\"otc/checkout\")&&(e.closest(\"#btn_to_checkout_top\")||e.closest(\"#btn_to_checkout\")||e.closest(\".otc-cart-flyout__button--to-checkout\")||e.closest('a[href*=\"/otc/checkout\"]')||e.closest(\".kam-checkout\")||e.closest(\".cart__button__checkout\"))&&Kameleoon.API.Goals.processConversion(t)})),Kameleoon.API.Core.runWhenConditionTrue((()=>document.querySelector(\"#slotShoppingCartFlyoutContent pca-the-flyout\")?.shadowRoot?.querySelector(\"pca-a-buttons\")?.shadowRoot?.querySelector('pca-v-button[type=\"primary\"]')),(()=>{const e=document.querySelector(\"#slotShoppingCartFlyoutContent pca-the-flyout\").shadowRoot.querySelector(\"pca-a-buttons\").shadowRoot.querySelector('pca-v-button[type=\"primary\"]');Kameleoon.API.Utils.addUniversalClickListener(e,(()=>{Kameleoon.API.Goals.processConversion(t)}))})),/\\/p\\d{9}/.test(document.location.pathname)&&Kameleoon.API.Core.runWhenShadowRootElementPresent(\".pca-the-overlay pca-a-buttons, .pca-the-overlay__buttons pca-a-buttons\",'pca-v-button[type=\"primary\"]',(([e])=>{Kameleoon.API.Utils.addUniversalClickListener(e,(()=>{Kameleoon.API.Goals.processConversion(t)}))}))},getCookie=t=>{const e=new RegExp(`${t}=([^;]+)`),a=document.cookie.match(e);return!!a&&a[1]},t28Global=(t,e,a,o,n,c)=>{let r;const l={productsWithoutSale:[],productsWithSale:[],countOfProductsWithSale:0,countProductsInCart:0,productsPrice:0},i=()=>{Kameleoon.API.Data.readLocalData(\"kamT28-add2cartDone\")&&a&&a.countProductsInCart>1&&a.productsPrice&&a.productsPrice>=o&&Kameleoon.API.Events.trigger(\"kamCartMinValueAchievedT28\")},s=(d=async()=>{try{const n=getCookie(\"CART_QUANTITY\"),c=getCookie(\"CART_ID\");if(!n||0===parseInt(n,10))return Kameleoon.API.Data.writeLocalData(\"dataCart\",l),Kameleoon.API.Data.writeLocalData(\"kamCurrentCart\",[]),a=l,void window.dispatchEvent(new CustomEvent(\"Kameleoon::CartUpdate\",{detail:[]}));if(!c)return void Kameleoon.API.Core.runWhenConditionTrue((()=>{const t=getCookie(\"CART_ID\");return t&&\"null\"!==t&&\"undefined\"!==t}),(()=>{s()}));let r=t.replace(/cartId=[^&]*/,`cartId=${c}`);r.includes(\"cartId=\")||(r+=`${r.includes(\"?\")?\"&\":\"?\"}cartId=${c}`);const{payload:i,payload:{cartItems:d}}=await fetch(r).then((t=>t.json()));if(d&&d.length){const t=d.map((({erpNumber:t})=>t)),n=(await fetch(e+t).then((t=>t.json()))).filter((({stockAvailability:{availabilityIndicator:t}})=>3===t)).map((({erpNumber:t})=>t)),c=[],r=[],l=[];d.forEach((t=>{n.includes(t.erpNumber)&&(!t.discount||t.discount&&!t.discount.deletedPrice?c.push(t):t.discount&&t.discount.deletedPrice&&r.push(t),l.push(t))}));const s={productsWithoutSale:c,productsWithSale:r,countOfProductsWithSale:r.reduce(((t,e)=>t+e.quantity),0),countProductsInCart:l.reduce(((t,e)=>t+e.quantity),0),productsPrice:i.subTotalCartValue};Kameleoon.API.Data.writeLocalData(\"dataCart\",s),a=s,Kameleoon.API.Data.readLocalData(\"kamT28-add2cartDone\")&&s.countProductsInCart>1&&s.productsPrice>=o&&Kameleoon.API.Events.trigger(\"kamCartMinValueAchievedT28\"),Kameleoon.API.Data.writeLocalData(\"kamCurrentCart\",d),window.dispatchEvent(new CustomEvent(\"Kameleoon::CartUpdate\",{detail:d}))}else Kameleoon.API.Data.writeLocalData(\"dataCart\",l),Kameleoon.API.Data.writeLocalData(\"kamCurrentCart\",[]),a=l,window.dispatchEvent(new CustomEvent(\"Kameleoon::CartUpdate\",{detail:d}))}catch(t){}},u=250,(...t)=>{clearTimeout(r),r=setTimeout((()=>d(...t)),u)});var d,u;const m=getCookie(\"CART_QUANTITY\");m&&0!==parseInt(m,10)?a||document.location.href.includes(\"/otc/checkout/\")||s():(Kameleoon.API.Data.writeLocalData(\"dataCart\",l),Kameleoon.API.Data.writeLocalData(\"kamCurrentCart\",[]),window.dispatchEvent(new CustomEvent(\"Kameleoon::CartUpdate\",{detail:[]}))),window.addEventListener(\"Kameleoon::DataLayerNextPush\",(({detail:t})=>{\"add_to_cart\"!==t.event&&\"remove_from_cart\"!==t.event||s(),\"add_to_cart\"===t.event&&Kameleoon.API.Data.writeLocalData(\"kamT28-add2cartDone\",!0)})),document.addEventListener(\"AddToCartResult\",(()=>{s()})),document.cookie.includes(\"authToken\")&&!Kameleoon.API.Data.readLocalData(\"userLoginT28\")?(Kameleoon.API.Data.writeLocalData(\"userLoginT28\",!0),s()):(document.cookie.includes(\"authToken\")||Kameleoon.API.Data.writeLocalData(\"userLoginT28\",!1),i()),/\\/wishlist\\//.test(document.location.pathname)&&Kameleoon.API.Data.writeLocalData(\"dataCart\",l),allCheckoutEntry(n),document.location.href.includes(\"/otc/checkout/success\")&&Kameleoon.API.Core.runWhenConditionTrue((()=>window.dataLayerNext&&window.dataLayerNext.some((t=>\"purchase\"===t.event&&t.lidldata&&t.lidldata.ecommerce&&t.lidldata.ecommerce.basketValueNet&&t.lidldata.ecommerce.shippingCost))),(()=>{const{lidldata:{ecommerce:{basketValueNet:t,shippingCost:e}}}=window.dataLayerNext.find((t=>\"purchase\"===t.event&&t.ecommerce));t-e>=o&&Kameleoon.API.Goals.processConversion(c),Kameleoon.API.Data.writeLocalData(\"dataCart\",l),Kameleoon.API.Data.writeLocalData(\"kamCurrentCart\",[]),window.dispatchEvent(new CustomEvent(\"Kameleoon::CartUpdate\",{detail:[]}))}))},lang=document.documentElement.lang.substring(0,2)||getLangCookie();function t28GoToCheckout(){const t=`https://www.lidl.nl/cart-api/v3/cart/NL?cartId=${getCartID()}&language=${lang}&isMergeEnabled=true`,e=Kameleoon.API.Data.readLocalData(\"dataCart\");t28Global(t,\"https://www.lidl.nl/p/api/gridboxes/NL/nl?erpNumbers=\",e,75.03,271163,271162)}t28GoToCheckout();",
          "technical": true,
          "executeCodeForReference": true,
          "forcedTechnical": true,
          "dateModified": 1770210829000,
          "dateStatusModified": 1758195031000,
          "goals": [351405, 233055, 233057],
          "deviation": {
            "0": 0.05,
            "756050": 0.95
          },
          "variations": [{
            "name": "Reference",
            "id": 0,
            "deviation": 0.05
          }, {
            "name": "A1_Overlay+Checkout CTA",
            "id": 756050,
            "deviation": 0.95
          }],
          "targetingSegmentId": 175170,
          "attributionWindow": "604800000",
          "kameleoonTracking": {
            "mainGoalId": 233055
          },
          "clarity": true,
          "customIntegrations": ["Custom GA4 Integration"]
        }, {
          "id": 226949,
          "name": "E2E Operations | lidl.nl",
          "baseURL": "http://www.lidl.nl",
          "experimentAction": true,
          "executeCodeForReference": true,
          "forcedTechnical": true,
          "dateModified": 1708428096000,
          "dateStatusModified": 1705307727000,
          "goals": [88966, 89065, 89358, 89387, 146268, 146270, 185269, 221854, 233055, 233056],
          "deviation": {
            "0": 0,
            "916491": 0
          },
          "variations": [{
            "name": "Reference",
            "id": 0,
            "deviation": 0
          }, {
            "name": "Variation 1",
            "id": 916491,
            "deviation": 0
          }],
          "targetingSegmentId": 251893,
          "attributionWindow": "604800000",
          "kameleoonTracking": {
            "mainGoalId": 233056
          }
        }, {
          "id": 236223,
          "name": "[LIDL|NL] CRO Global Skript",
          "baseURL": "http://www.lidl.nl",
          "experimentAction": true,
          "javaScriptCode": "1===Kameleoon.API.CurrentVisit.pageViews&&(Kameleoon.API.CurrentVisit.landingPageURL.includes(\"/p/\")&&Kameleoon.API.Goals.processConversion(367132),Kameleoon.API.CurrentVisit.landingPageURL.includes(\"/h/\")&&Kameleoon.API.Goals.processConversion(367133),(\"https://www.lidl.nl/\"===Kameleoon.API.CurrentVisit.landingPageURL||Kameleoon.API.CurrentVisit.landingPageURL.includes(\"https://www.lidl.nl/?\"))&&Kameleoon.API.Goals.processConversion(367134),Kameleoon.API.CurrentVisit.landingPageURL.includes(\"/l/\")&&Kameleoon.API.Goals.processConversion(367135),Kameleoon.API.CurrentVisit.landingPageURL.includes(\"/c/\")&&Kameleoon.API.Goals.processConversion(367136),Kameleoon.API.CurrentVisit.landingPageURL.includes(\"/q/search\")&&Kameleoon.API.Goals.processConversion(367137),Kameleoon.API.CurrentVisit.landingPageURL.includes(\"/store\")&&Kameleoon.API.Goals.processConversion(367138),Kameleoon.API.CurrentVisit.landingPageURL.includes(\"/online\")&&Kameleoon.API.Goals.processConversion(367139));",
          "executeCodeForReference": true,
          "forcedTechnical": true,
          "dateModified": 1775026809000,
          "dateStatusModified": 1765447885000,
          "goals": [351405, 351406, 367136, 367139, 367132, 367133, 367135, 367137, 367134, 367138, 351403, 371462, 371461],
          "deviation": {
            "0": 0,
            "942814": 1
          },
          "variations": [{
            "name": "Reference",
            "id": 0,
            "deviation": 0
          }, {
            "name": "Variation 1",
            "id": 942814,
            "deviation": 1
          }],
          "targetingSegmentId": 251893,
          "attributionWindow": "604800000",
          "winningVariationId": 942814,
          "kameleoonTracking": {
            "mainGoalId": 367136
          }
        }, {
          "id": 322439,
          "name": "95% [Lidl|NL|T77]  Hint Returning Cart Abandoner Follow Up",
          "baseURL": "https://www.lidl.nl",
          "experimentAction": true,
          "javaScriptCode": "\"use strict\";const setDateCapping=()=>{const e=(new Date).getTime();Kameleoon.API.Data.writeLocalData(\"KamT77ExperimentTriggered\",e,!0)};setDateCapping();",
          "executeCodeForReference": true,
          "forcedTechnical": true,
          "dateModified": 1774858333000,
          "dateStatusModified": 1774858333000,
          "goals": [351405, 371462],
          "deviation": {
            "0": 0.05,
            "1145046": 0.95
          },
          "variations": [{
            "name": "Reference",
            "id": 0,
            "deviation": 0.05
          }, {
            "name": "Variation 1",
            "id": 1145046,
            "deviation": 0.95
          }],
          "targetingSegmentId": 161998,
          "attributionWindow": "86400000",
          "kameleoonTracking": {
            "mainGoalId": 351405
          }
        }, {
          "id": 338631,
          "name": "[DEBUG|NL] Order Capping",
          "baseURL": "https://www.lidl.nl",
          "experimentAction": true,
          "javaScriptCode": "\"use strict\";const goals={\"[GG] Order\":394365,\"[DEBUG|NL] Order 2\":396244},saveTransactionId=async e=>{const{siteCode:t}=Kameleoon.API.Core.getConfiguration(),o=new AbortController,a=JSON.stringify({[e]:{capping:!0}}),n=`https://eu-data.kameleoon.io/map/maps?siteCode=${t}&ttlHours=720`;try{const e=await fetch(n,{headers:{\"Content-Type\":\"application/json\"},method:\"POST\",body:a,keepalive:!0,signal:o.signal});if(!e.ok)throw new Error(e.status);Kameleoon.API.Data.writeLocalData(\"mapRetry\",null)}catch(e){Kameleoon.API.Data.writeLocalData(\"mapRetry\",a),setTimeout((()=>saveTransactionId(a)),500)}},COOKIE_NAME=\"order_capping_storage\",setOrderCappingCookie=e=>{const t=JSON.stringify(e);document.cookie=`${COOKIE_NAME}=${encodeURIComponent(t)}; path=${window.location.pathname}`},getOrderCappingCookie=()=>{const e=document.cookie.split(\";\");for(const t of e){const[e,o]=t.trim().split(\"=\");if(e===COOKIE_NAME)try{return JSON.parse(decodeURIComponent(o))}catch(e){return[]}}return[]},nextGlobalGoalsNewScript=(e,t)=>{const{processConversion:o}=Kameleoon.API.Goals;if(\"/otc/checkout/success\"===document.location.pathname){const t=t=>{if(!(e=>\"purchase\"===e.event&&e.ecommerce?.items&&e.ecommerce?.transaction_id&&e.lidldata?.ecommerce?.basketValueNet)(t))return;const{ecommerce:{transaction_id:a},lidldata:{ecommerce:{basketValueNet:n}}}=t,r=getOrderCappingCookie(),s=`${a}_debug`,i=e=>{Kameleoon.API.Data.retrieveDataFromRemoteSource(s,(({capping:t})=>{t||(saveTransactionId(s),r.includes(s)||(setOrderCappingCookie([...r,s]),o(e,n),saveTransactionId(s)))}))};return i(e[\"[GG] Order\"]),setTimeout(i,3333,e[\"[DEBUG|NL] Order 2\"]),!0};if(window.dataLayerNext?.some(t))return;Kameleoon.API.Utils.addEventListener(window,\"Kameleoon::DataLayerNextPush\",(({detail:e})=>{t(e)}))}else{const e=Kameleoon.API.Data.readLocalData(\"mapRetry\");e&&saveTransactionId(e)}};nextGlobalGoalsNewScript(goals);",
          "executeCodeForReference": true,
          "forcedTechnical": true,
          "dateModified": 1761823202000,
          "dateStatusModified": 1760448287000,
          "goals": [394365],
          "deviation": {
            "0": 0.5,
            "1182592": 0.5
          },
          "variations": [{
            "name": "Reference",
            "id": 0,
            "deviation": 0.5
          }, {
            "name": "Variation 1",
            "id": 1182592,
            "deviation": 0.5
          }],
          "targetingTriggerId": 374650,
          "targetingSegmentConfiguration": "ALL_VISITORS",
          "targetingTriggerConfiguration": "SITE",
          "attributionWindow": "86400000",
          "kameleoonTracking": {
            "mainGoalId": 394365
          }
        }, {
          "id": 356544,
          "name": "95% [LIDL|Global|NL|T89] Bargain Hint NL",
          "baseURL": "https://www.lidl.nl",
          "experimentAction": true,
          "javaScriptCode": "\"use strict\";const getPercentageValue=e=>+e.match(/\\d+/)[0]||0,commonScript=e=>{const t=Kameleoon.API.Data.readLocalData(\"KamT89ProductList\")||[];document.location.pathname.includes(\"/p/\")&&Kameleoon.API.Utils.addEventListener(window,\"Kameleoon::DataLayerNextPush\",(({detail:o})=>{if(\"add_to_cart\"===o.event){const a=document.querySelector(\".buybox-one__price .ods-price__box\"),c=getPercentageValue(a.innerText);a&&c&&Kameleoon.API.Data.setCustomData(\"[CD|T89] Discounts\",c),t.some((e=>e===o.ecommerce.items[0].item_id))||t.push(o.ecommerce.items[0].item_id),Kameleoon.API.Data.writeLocalData(\"KamT89ProductList\",t),Kameleoon.API.Goals.processConversion(e[\"[T89] Add2Cart Testproduct\"])}}))},goals={\"[T89] Add2Cart Testproduct\":392186,\"[T89] Order Testproduct\":392187};commonScript(goals);",
          "globalScript": "\"use strict\";const globalScript=e=>{if(/\\/otc\\/checkout\\/success/.test(document.location.pathname)){const t=Kameleoon.API.Data.readLocalData(\"KamT89ProductList\")||[];let o;Kameleoon.API.Core.runWhenConditionTrue((()=>{const e=window.dataLayerNext?.find((e=>\"purchase\"===e.event&&e.ecommerce?.items));if(e)return o=e.ecommerce.items,e}),(()=>{let c=0;o.forEach((({item_id:e,quantity:o,price:r})=>{t.some((t=>t===e))&&(c+=o*r)})),c>0&&Kameleoon.API.Goals.processConversion(e[\"[T89] Order Testproduct\"])}))}},goals={\"[T89] Add2Cart Testproduct\":392186,\"[T89] Order Testproduct\":392187};globalScript(goals);",
          "executeCodeForReference": true,
          "forcedTechnical": true,
          "dateModified": 1775633675000,
          "dateStatusModified": 1767776082000,
          "goals": [351403, 394365],
          "deviation": {
            "0": 0.05,
            "1228481": 0,
            "1228482": 0.95
          },
          "variations": [{
            "name": "Reference",
            "id": 0,
            "deviation": 0.05
          }, {
            "name": "A1_No Hint",
            "id": 1228481,
            "deviation": 0
          }, {
            "name": "A2_Megaphone animation",
            "id": 1228482,
            "deviation": 0.95
          }],
          "targetingSegmentId": 409830,
          "attributionWindow": "86400000",
          "kameleoonTracking": {
            "mainGoalId": 351403
          }
        }, {
          "id": 367020,
          "name": "*95%*[LIDL|NL|T15] Afterpay Hint New PDP",
          "baseURL": "https://www.lidl.nl/p/zoofari-hondentuigje/p100391235",
          "experimentAction": true,
          "technical": true,
          "executeCodeForReference": true,
          "forcedTechnical": true,
          "dateModified": 1771415509000,
          "dateStatusModified": 1771415323000,
          "goals": [351405, 351403, 221854, 385563, 89065, 89387, 89358, 371462, 351406],
          "deviation": {
            "0": 0,
            "1252632": 0.05,
            "1252633": 0.95
          },
          "variations": [{
            "name": "Reference",
            "id": 0,
            "deviation": 0
          }, {
            "name": "T15_Default_No_Hint",
            "id": 1252632,
            "deviation": 0.05
          }, {
            "name": "T15_A1_Afterpay_Hint",
            "id": 1252633,
            "deviation": 0.95
          }],
          "targetingSegmentId": 367757,
          "attributionWindow": "604800000",
          "kameleoonTracking": {
            "mainGoalId": 351405
          },
          "clarity": true,
          "customIntegrations": ["Custom GA4 Integration"]
        }, {
          "id": 369581,
          "name": "[LIDL|Global|NL|T16] PDP Delivery Communication",
          "baseURL": "https://www.lidl.nl",
          "experimentAction": true,
          "javaScriptCode": "\"use strict\";const goals={\"[T16|NL] Add2Cart Test Product\":408406,\"[T16|NL] Order Test Product\":408407},productList=Kameleoon.API.Data.readLocalData(\"KamT16ProductList\")||[];document.location.pathname.includes(\"/p/\")&&Kameleoon.API.Utils.addEventListener(window,\"Kameleoon::DataLayerNextPush\",(({detail:t})=>{\"add_to_cart\"===t.event&&(productList.some((e=>e===t.ecommerce.items[0].item_id))||productList.push(t.ecommerce.items[0].item_id),Kameleoon.API.Data.writeLocalData(\"KamT16ProductList\",productList),Kameleoon.API.Goals.processConversion(goals[\"[T16|NL] Add2Cart Test Product\"]))}));",
          "globalScript": "\"use strict\";const goals={\"[T16|NL] Add2Cart Test Product\":408406,\"[T16|NL] Order Test Product\":408407},selectorPDP=\".detail-one__container .availability ul > li.online-availability__item:first-child:has(> .ods-tooltip__target) > span > span\",selectorCartCheckout=\".the-delivery-time-heading .delivery-time .text:has(.text--highlighted)\",excludedDates=[{day:3,month:3},{day:6,month:3},{day:27,month:3}];function isExactlyTwoDaysInFuture([e]){const[t,o,a]=e.split(\".\").map(Number),n=new Date(a,o-1,t),c=new Date;c.setHours(0,0,0,0);const i=new Date(c);let r=0;for(;r<2;){i.setDate(i.getDate()+1);0===i.getDay()||excludedDates.some((e=>e.day===i.getDate()&&e.month===i.getMonth()))||r++}return n.getTime()===i.getTime()}const triggerTargeting=()=>{const e=e=>{Kameleoon.API.Core.runWhenConditionTrue((()=>{let t;const o=document.querySelectorAll(e);for(let e=0;e<o.length;e++){if(t=o[e].innerText.match(/\\d{2}\\.\\d{2}\\.\\d{4}/i),t&&isExactlyTwoDaysInFuture(t))return!0}}),(()=>{Kameleoon.API.Events.trigger(\"KamT16Trigger\")}),200)};document.location.pathname.includes(\"/p/\")?e(selectorPDP):(document.location.pathname.includes(\"/cart\")||document.location.pathname.includes(\"/otc/checkout\")&&!document.location.pathname.includes(\"/success\"))&&e(selectorCartCheckout)};if(triggerTargeting(),/\\/otc\\/checkout\\/success/.test(document.location.pathname)){const e=Kameleoon.API.Data.readLocalData(\"KamT16ProductList\")||[];let t;Kameleoon.API.Core.runWhenConditionTrue((()=>{const e=window.dataLayerNext?.find((e=>\"purchase\"===e.event&&e.ecommerce?.items));if(e)return t=e.ecommerce.items,e}),(()=>{let o=0;t.forEach((({item_id:t,quantity:a,price:n})=>{e.some((e=>e===t))&&(o+=a*n)})),o>0&&Kameleoon.API.Goals.processConversion(goals[\"[T16|NL] Order Test Product\"])}))}",
          "executeCodeForReference": true,
          "forcedTechnical": true,
          "dateModified": 1775048386000,
          "dateStatusModified": 1775048258000,
          "goals": [408406, 408407, 221854, 89358, 385563, 89065, 89387, 351403, 371462, 371461, 351405, 351406],
          "deviation": {
            "0": 0,
            "1259071": 0.3333,
            "1259072": 0.3333,
            "1259073": 0.3334
          },
          "variations": [{
            "name": "Reference",
            "id": 0,
            "deviation": 0
          }, {
            "name": "T16_Default_Date",
            "id": 1259071,
            "deviation": 0.3333
          }, {
            "name": "T16_A1_after_tomorrow",
            "id": 1259072,
            "deviation": 0.3333
          }, {
            "name": "T16_A2_1-2_woking_days",
            "id": 1259073,
            "deviation": 0.3334
          }],
          "targetingTriggerId": 461537,
          "targetingSegmentConfiguration": "ALL_VISITORS",
          "attributionWindow": "86400000",
          "kameleoonTracking": {
            "mainGoalId": 351403
          },
          "clarity": true,
          "customIntegrations": ["Custom GA4 Integration"]
        }],
        "personalizations": [],
        "targetingSegments": [{
          "id": 44710,
          "name": "bo.buyer.personas.segment.dissatisfied.name",
          "tree": {
            "orOperator": false,
            "orGuiLevel": 0,
            "leftChild": {
              "orOperator": false,
              "orGuiLevel": 0,
              "leftChild": {
                "targetingCondition": {
                  "type": "ACTIVE_SESSION",
                  "disabled": false,
                  "weight": 1,
                  "include": true,
                  "time": 120000,
                  "timeUnit": "SECOND",
                  "operator": "LOWER"
                }
              },
              "rightChild": {
                "targetingCondition": {
                  "type": "PAGE_VIEWS",
                  "disabled": false,
                  "weight": 1,
                  "include": true,
                  "operator": "LOWER",
                  "value": 4
                }
              }
            },
            "rightChild": {
              "orOperator": false,
              "orGuiLevel": 0,
              "leftChild": {
                "orOperator": true,
                "orGuiLevel": 1,
                "leftChild": {
                  "targetingCondition": {
                    "type": "ORIGIN_TYPE",
                    "disabled": false,
                    "weight": 1,
                    "include": true,
                    "value": "SEO"
                  }
                },
                "rightChild": {
                  "targetingCondition": {
                    "type": "ORIGIN_TYPE",
                    "disabled": false,
                    "weight": 1,
                    "include": true,
                    "value": "SEM"
                  }
                }
              },
              "rightChild": {
                "targetingCondition": {
                  "type": "MOUSE_OUT",
                  "disabled": false,
                  "weight": 1,
                  "include": true
                }
              }
            }
          }
        }, {
          "id": 44711,
          "name": "bo.buyer.personas.segment.snooper.name",
          "tree": {
            "orOperator": false,
            "orGuiLevel": 0,
            "leftChild": {
              "orOperator": false,
              "orGuiLevel": 0,
              "leftChild": {
                "targetingCondition": {
                  "type": "ACTIVE_SESSION",
                  "disabled": false,
                  "weight": 1,
                  "include": true,
                  "time": 900000,
                  "timeUnit": "SECOND",
                  "operator": "GREATER"
                }
              },
              "rightChild": {
                "targetingCondition": {
                  "type": "PAGE_VIEWS",
                  "disabled": false,
                  "weight": 1,
                  "include": true,
                  "operator": "GREATER",
                  "value": 8
                }
              }
            },
            "rightChild": {
              "orOperator": true,
              "orGuiLevel": 1,
              "leftChild": {
                "targetingCondition": {
                  "type": "ORIGIN_TYPE",
                  "disabled": false,
                  "weight": 1,
                  "include": true,
                  "value": "SEO"
                }
              },
              "rightChild": {
                "targetingCondition": {
                  "type": "ORIGIN_TYPE",
                  "disabled": false,
                  "weight": 1,
                  "include": true,
                  "value": "SEM"
                }
              }
            }
          }
        }, {
          "id": 44712,
          "name": "bo.buyer.personas.segment.revenant.name",
          "tree": {
            "orOperator": false,
            "orGuiLevel": 0,
            "leftChild": {
              "targetingCondition": {
                "type": "NEW_VISITORS",
                "disabled": false,
                "weight": 1,
                "include": true,
                "value": "RETURNING"
              }
            },
            "rightChild": {
              "targetingCondition": {
                "type": "BROWSER",
                "disabled": false,
                "weight": 1,
                "include": true,
                "value": "IE",
                "version": null,
                "operator": "EQUAL"
              }
            }
          }
        }, {
          "id": 161998,
          "name": "[Lidl|NL|Global|PT14] Hint Returning Car",
          "tree": {
            "orOperator": false,
            "orGuiLevel": 0,
            "leftChild": {
              "orOperator": false,
              "orGuiLevel": 0,
              "leftChild": {
                "orOperator": false,
                "orGuiLevel": 1,
                "leftChild": {
                  "orOperator": false,
                  "orGuiLevel": 1,
                  "leftChild": {
                    "targetingCondition": {
                      "type": "CUSTOM_DATUM",
                      "disabled": false,
                      "weight": 1,
                      "include": true,
                      "index": 4,
                      "operator": "TRUE",
                      "value": null
                    }
                  },
                  "rightChild": {
                    "targetingCondition": {
                      "type": "PAGE_URL",
                      "disabled": false,
                      "weight": 1,
                      "include": false,
                      "value": "cart|checkout|payments|\\/l\\/"
                    }
                  }
                },
                "rightChild": {
                  "orOperator": false,
                  "orGuiLevel": 1,
                  "leftChild": {
                    "targetingCondition": {
                      "type": "TIME_SINCE_PAGE_LOAD",
                      "disabled": false,
                      "weight": 1,
                      "include": true,
                      "time": 2000,
                      "operator": "GREATER",
                      "timeUnit": "SECOND",
                      "pageURLRegExpToMatch": "(.*)lidl(.*)",
                      "pageURLRegExpNotToMatch": null
                    }
                  },
                  "rightChild": {
                    "targetingCondition": {
                      "type": "JS_CODE",
                      "disabled": false,
                      "weight": 1,
                      "include": true,
                      "value": "const regExp = /CART_QUANTITY=(\\d+)/;\n    const qtyProductsIncart = document.cookie.match(regExp) && document.cookie.match(regExp)[1];\n    if (Number(qtyProductsIncart) > 0) return true;\n    return undefined;"
                    }
                  }
                }
              },
              "rightChild": {
                "targetingCondition": {
                  "type": "SEGMENT",
                  "disabled": false,
                  "weight": 1,
                  "include": true,
                  "linkedSegmentId": 251893
                }
              }
            },
            "rightChild": {
              "targetingCondition": {
                "type": "JS_CODE",
                "disabled": false,
                "weight": 1,
                "include": true,
                "value": "function isWithin24Hours(targetDate) {\n  const now = new Date();\n  const target = new Date(targetDate);\n  const diffMs = Math.abs(target - now);\n  const hours24 = 24 * 60 * 60 * 1000; // 24 hours in milliseconds\n\n  return diffMs >= hours24 || !targetDate;\n}\n\nconst someDate = Kameleoon.API.Data.readLocalData('KamT77ExperimentTriggered');\nconst is24h = isWithin24Hours(someDate); \nreturn is24h;"
              }
            }
          }
        }, {
          "id": 165451,
          "name": "[AU]_Returning Cart Abandoner NL",
          "tree": {
            "targetingCondition": {
              "type": "CUSTOM_DATUM",
              "disabled": false,
              "weight": 1,
              "include": true,
              "index": 4,
              "operator": "TRUE",
              "value": null
            }
          },
          "audience": true
        }, {
          "id": 175170,
          "name": "[Lidl|NL|Global|T28] Go to Checkout NL",
          "tree": {
            "orOperator": false,
            "orGuiLevel": 0,
            "leftChild": {
              "orOperator": false,
              "orGuiLevel": 1,
              "leftChild": {
                "orOperator": false,
                "orGuiLevel": 1,
                "leftChild": {
                  "targetingCondition": {
                    "type": "JS_CODE",
                    "disabled": false,
                    "weight": 1,
                    "include": true,
                    "value": "if (/\\/p\\d+/.test(document.location.pathname)) {\n    Kameleoon.API.Data.writeLocalData('T28pdpSeen', true);\n    return false;\n} else if (Kameleoon.API.Data.readLocalData('T28pdpSeen')) {\n    return true;\n}\nreturn false;"
                  }
                },
                "rightChild": {
                  "targetingCondition": {
                    "type": "EVENT",
                    "disabled": false,
                    "weight": 1,
                    "include": true,
                    "value": "kamCartMinValueAchievedT28"
                  }
                }
              },
              "rightChild": {
                "targetingCondition": {
                  "type": "PAGE_URL",
                  "disabled": false,
                  "weight": 1,
                  "include": false,
                  "value": "\\/p\\/|\\/otc\\/cart|\\/otc\\/checkout|\\/payment\\/|\\/payments\\/|\\/l\\/"
                }
              }
            },
            "rightChild": {
              "targetingCondition": {
                "type": "SEGMENT",
                "disabled": false,
                "weight": 1,
                "include": true,
                "linkedSegmentId": 251893
              }
            }
          }
        }, {
          "id": 251893,
          "name": "[Env|NL] Live-Environment",
          "tree": {
            "orOperator": false,
            "orGuiLevel": 0,
            "leftChild": {
              "orOperator": true,
              "orGuiLevel": 1,
              "leftChild": {
                "targetingCondition": {
                  "type": "PAGE_URL",
                  "disabled": false,
                  "weight": 1,
                  "include": true,
                  "value": "(.*)https\\://www\\.lidl\\.nl/(.*)"
                }
              },
              "rightChild": {
                "targetingCondition": {
                  "type": "PAGE_URL",
                  "disabled": false,
                  "weight": 1,
                  "include": true,
                  "value": "(.*)https\\://accounts\\.lidl\\.com/(.*)"
                }
              }
            },
            "rightChild": {
              "targetingCondition": {
                "type": "CUSTOM_DATUM",
                "disabled": false,
                "weight": 1,
                "include": false,
                "index": 31,
                "operator": "CONTAINS",
                "value": "Lidl"
              }
            }
          }
        }, {
          "id": 367757,
          "name": "[LIDL|NL|T15] Afterpay Hint New PDP",
          "tree": {
            "orOperator": false,
            "orGuiLevel": 0,
            "leftChild": {
              "orOperator": false,
              "orGuiLevel": 0,
              "leftChild": {
                "targetingCondition": {
                  "type": "PAGE_URL",
                  "disabled": false,
                  "weight": 1,
                  "include": true,
                  "value": "(.*)/p/(.*)"
                }
              },
              "rightChild": {
                "targetingCondition": {
                  "type": "SEGMENT",
                  "disabled": false,
                  "weight": 1,
                  "include": true,
                  "linkedSegmentId": 251893
                }
              }
            },
            "rightChild": {
              "orOperator": true,
              "orGuiLevel": 1,
              "leftChild": {
                "targetingCondition": {
                  "type": "JS_CODE",
                  "disabled": false,
                  "weight": 1,
                  "include": true,
                  "value": "Kameleoon.API.Core.runWhenElementPresent('.cart-section-one__button .button-content .ods-button__text', () => {setTargeting(true)});",
                  "async": true
                }
              },
              "rightChild": {
                "targetingCondition": {
                  "type": "JS_CODE",
                  "disabled": false,
                  "weight": 1,
                  "include": true,
                  "value": "Kameleoon.API.Core.runWhenElementPresent('pca-the-button[element-id=addToCart]', () => {setTargeting(true)});",
                  "async": true
                }
              }
            }
          }
        }, {
          "id": 409830,
          "name": "[LIDL|Global|NL|T89] Bargain Hint",
          "tree": {
            "orOperator": false,
            "orGuiLevel": 0,
            "leftChild": {
              "orOperator": false,
              "orGuiLevel": 1,
              "leftChild": {
                "targetingCondition": {
                  "type": "PAGE_URL",
                  "disabled": false,
                  "weight": 1,
                  "include": true,
                  "value": "(.*)/p/(.*)"
                }
              },
              "rightChild": {
                "targetingCondition": {
                  "type": "DOM_ELEMENT",
                  "disabled": false,
                  "weight": 1,
                  "include": true,
                  "value": ".bargain-hint"
                }
              }
            },
            "rightChild": {
              "targetingCondition": {
                "type": "SEGMENT",
                "disabled": false,
                "weight": 1,
                "include": true,
                "linkedSegmentId": 251893
              }
            }
          }
        }],
        "targetingTriggers": [{
          "id": 374650,
          "name": "Trigger for [DEBUG|NL] Order Capping",
          "tree": null,
          "trigger": true
        }, {
          "id": 440615,
          "name": "[LIDL|Global|NL|T16] PDP Delivery Communication [DEV]",
          "tree": {
            "orOperator": false,
            "orGuiLevel": 0,
            "leftChild": {
              "orOperator": false,
              "orGuiLevel": 0,
              "leftChild": {
                "orOperator": true,
                "orGuiLevel": 1,
                "leftChild": {
                  "targetingCondition": {
                    "type": "PAGE_URL",
                    "disabled": false,
                    "weight": 1,
                    "include": true,
                    "value": "(.*)/p/(.*)"
                  }
                },
                "rightChild": {
                  "orOperator": true,
                  "orGuiLevel": 1,
                  "leftChild": {
                    "targetingCondition": {
                      "type": "PAGE_URL",
                      "disabled": false,
                      "weight": 1,
                      "include": true,
                      "value": "(.*)/otc/cart(.*)"
                    }
                  },
                  "rightChild": {
                    "targetingCondition": {
                      "type": "PAGE_URL",
                      "disabled": false,
                      "weight": 1,
                      "include": true,
                      "value": "(.*)/otc/checkout/(.*)"
                    }
                  }
                }
              },
              "rightChild": {
                "targetingCondition": {
                  "type": "PAGE_URL",
                  "disabled": false,
                  "weight": 1,
                  "include": false,
                  "value": "(.*)/otc/checkout/success (.*)"
                }
              }
            },
            "rightChild": {
              "targetingCondition": {
                "type": "EVENT",
                "disabled": false,
                "weight": 1,
                "include": true,
                "value": "KamT16Trigger"
              }
            }
          },
          "trigger": true
        }, {
          "id": 440620,
          "name": "[Env|NL] Live-Environment",
          "tree": {
            "orOperator": false,
            "orGuiLevel": 0,
            "leftChild": {
              "orOperator": true,
              "orGuiLevel": 1,
              "leftChild": {
                "targetingCondition": {
                  "type": "PAGE_URL",
                  "disabled": false,
                  "weight": 1,
                  "include": true,
                  "value": "(.*)https\\://www\\.lidl\\.nl/(.*)"
                }
              },
              "rightChild": {
                "targetingCondition": {
                  "type": "PAGE_URL",
                  "disabled": false,
                  "weight": 1,
                  "include": true,
                  "value": "(.*)https\\://accounts\\.lidl\\.com/(.*)"
                }
              }
            },
            "rightChild": {
              "targetingCondition": {
                "type": "CUSTOM_DATUM",
                "disabled": false,
                "weight": 1,
                "include": false,
                "index": 31,
                "operator": "CONTAINS",
                "value": "Lidl"
              }
            }
          },
          "trigger": true
        }, {
          "id": 461537,
          "name": "A segment for [LIDL|Global|NL|T16] PDP Delivery Communication",
          "tree": {
            "orOperator": false,
            "orGuiLevel": 1,
            "leftChild": {
              "targetingCondition": {
                "type": "KEY_MOMENT",
                "disabled": false,
                "weight": 1,
                "include": true,
                "linkedSegmentId": 440615
              }
            },
            "rightChild": {
              "targetingCondition": {
                "type": "KEY_MOMENT",
                "disabled": false,
                "weight": 1,
                "include": true,
                "linkedSegmentId": 440620
              }
            }
          },
          "trigger": true
        }],
        "variations": [{
          "name": "A1_Overlay+Checkout CTA",
          "id": 756050,
          "css": ".kam-T28__overlay{position:fixed;width:100%;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:9999}.kam-T28__hintContainer{width:328px;margin:auto;align-items:center;min-width:328px;max-width:444px}.kam-T28__animation{display:flex;opacity:0;animation:animShow .3s linear forwards}.kam-T28__hint{display:flex;flex-direction:column;gap:8px;width:100%;margin:auto;background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.15);border-radius:4px;font-family:LidlFontPro,LidlFontCondPro,Trebuchet MS,sans-serif}.kam-T28__header{color:#1e2124;padding:16px 16px 2px 16px;display:flex;flex-direction:row;border-radius:4px 4px 0 0}.kam-T28__header>p{font-weight:600;margin:0;font-size:18px;line-height:24px}.kam-T28__header>button{position:relative;background-color:#deebe3;color:#2f3a44;padding:0;transition:none;height:1.5rem;width:1.5rem;margin-left:auto;border:0;cursor:pointer;background:0 0;font-size:1.4rem}.kam-T28__header>button:focus,.kam-T28__header>button:hover{background-color:inherit;color:inherit;outline:0!important}.kam-T28__header>button svg{height:.915rem;width:.915rem}.kam-T28__title{display:flex;flex-direction:row;align-items:center;gap:8px;margin:0 16px;padding:4px 8px;color:#a84700;background-color:#fff2a6;border-radius:4px}.kam-T28__title>p{width:100%;text-align:left;margin:0;font-size:11px;font-weight:600;line-height:16px}.kam-T28__title>span{line-height:0}.kam-T28__title>span svg{height:.925rem;width:.925rem}.kam-T28__itemsContainer{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:.5rem;margin:0 16px;background-color:#fff}.kam-T28__itemsContainer__item{display:flex;position:relative;height:100%;width:100%;cursor:pointer}.kam-T28__itemsContainer__item>img{height:100%;width:auto;max-width:100%;margin:auto}.kam-T28__itemsContainer__item--sale:after{content:\"%\";position:absolute;top:0;left:0;display:flex;justify-content:center;align-items:center;height:24px;width:25px;background:#e60a14;color:#fff;font-weight:700;font-size:.875rem;border-radius:4px}.kam-T28__itemsContainer:has(.kam-T28__itemsContainer__item:nth-child(2)) .kam-T28__itemsContainer__item{width:calc(50% - .25rem)}.kam-T28__itemsContainer:has(.kam-T28__itemsContainer__item:nth-child(3)) .kam-T28__itemsContainer__item{width:calc(33.3333333333% - .333rem)}.kam-T28__footer{margin:0 1rem;padding:0 0 16px 0;display:flex;flex-direction:column}.kam-T28__counters{display:flex;justify-content:space-between;margin-bottom:16px;font-size:14px;line-height:20px;font-weight:500}.kam-T28__counters__wrapper{display:flex;flex-direction:column}.kam-T28__counters__sales{color:#ad080f;font-weight:400}.kam-T28__counters__allitems{font-size:16px;font-weight:600;line-height:24px}.kam-T28__counters__price{color:#1e2124;font-size:18px;font-weight:700;line-height:100%}.kam-T28__link{text-decoration:none;position:relative;letter-spacing:.7px;margin:0;padding-top:5px;padding-bottom:5px;vertical-align:middle;align-items:center;justify-content:center;font-size:16px;font-weight:600;line-height:20px;border-radius:50px;border:none;display:inline-flex;padding:10px 16px 10px 16px;background:#0050aa;color:#fff;cursor:pointer;width:100%}.kam-T28__link:hover{background-color:#003673}.kam-T28__opacity{opacity:0;animation:animHidden .3s linear forwards}.kam-T28__hidden{display:none}.kam-T28__overflow{overflow:hidden}@keyframes animShow{from{opacity:0}to{opacity:1}}@keyframes animHidden{from{opacity:1}to{opacity:0}}@media (min-width:568px){.kam-T28__hintContainer{width:444px}}@media (min-width:1440px){.kam-T28__hint{width:424px}.kam-T28__header>p{font-size:20px;line-height:28px}.kam-T28__title>p{font-size:13px;font-weight:600;line-height:20px}.kam-T28__counters{font-size:16px;line-height:24px}.kam-T28__counters__allitems{font-size:18px;line-height:28px}.kam-T28__counters__price{font-size:20px}.kam-T28__link{font-size:18px;line-height:24px}}@media (max-height:600px){.kam-T28__itemsContainer:has(.kam-T28__itemsContainer__item:nth-child(4)){gap:.5rem 2.87rem}.kam-T28__itemsContainer:has(.kam-T28__itemsContainer__item:nth-child(4)) .kam-T28__itemsContainer__item{width:calc(33.3333333333% - 1.915rem)}}",
          "elementSets": [],
          "expositionFrequencySameVisit": 1,
          "javaScriptCode": {
            "code": "\"use strict\";const initKamHint=(e,t,n,o)=>{const{textForSoloProductHeader:a,textForMoreThenOneProductsHeader:r,textFortSoloProductTitle:s,textForMoreThenOneProductTitle:i,wordForFooter1:c,wordForFooter2Solo:l,wordForFooter2More:d,wordForFooter3:_,wordForFooter4Solo:m,wordForFooter4More:u,btnWording:T}=t;function k(){return e>1?[i,d]:[s,l]}return`\\n<div class='kam-T28__overlay'>\\n    <div class='kam-T28__hintContainer'>\\n        <div class='kam-T28__hint'>\\n            <div class='kam-T28__header'>\\n                <p>\\n                    ${e>1?r:a}\\n                </p>\\n                <button type=\"submit\" class=\"cancel icon-x kam-T28__closeBtn\">\\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\" title=\"close\">\\n                        <path fill=\"#636D79\" d=\"m8.565 8 6.825-6.824a.132.132 0 0 0 \\n                        0-.19l-.377-.375a.132.132 0 0 0-.189 0L8 7.435 1.176.61a.132.132 \\n                        0 0 0-.19 0L.612.989a.132.132 0 0 0 0 .19l6.824 6.82L.61 \\n                        14.825a.132.132 0 0 0 0 .19.666.666 0 0 0 .944 0L8 8.564l6.445 \\n                        6.446a.666.666 0 0 0 .944 0 .132.132 0 0 0 0-.19L8.566 8Z\"/>\\n                    </svg>\\n                </button>\\n            </div>\\n            <div class='kam-T28__title'>\\n                <span>\\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\">\\n                        <path fill=\"#A84700\" d=\"M7.99 10.056a.711.711 0 0 0-.534.21.744.744 0 0 0-.205.547c0 .219.069.395.205.534a.713.713 0 0 0 .533.205.753.753 0 0 0 .547-.203c.141-.133.21-.314.21-.538a.738.738 0 0 0-.21-.547.742.742 0 0 0-.547-.208ZM7.483 9.36a.155.155 0 0 1-.048-.12l-.006-.184c-.043-1.298-.075-2.285-.088-2.96-.024-.71-.034-1.072-.034-1.09 0-.06.01-.1.037-.126.024-.024.064-.037.115-.037h1.093c.05 0 .088.01.115.037.024.027.037.067.037.125l-.005.158-.03.933-.046 1.428-.055 1.716c0 .05-.016.09-.048.12a.179.179 0 0 1-.125.043h-.787a.179.179 0 0 1-.125-.043Z\"/>\\n                        <path fill=\"#A84700\" fill-rule=\"evenodd\" d=\"M8 .4C3.81.4.4 3.81.4 8c0 4.19 3.41 7.6 7.6 7.6 4.19 0 7.6-3.41 7.6-7.6C15.6 3.81 12.19.4 8 .4Zm0 14.4c-3.75 0-6.8-3.05-6.8-6.8S4.25 1.2 8 1.2s6.8 3.05 6.8 6.8-3.05 6.8-6.8 6.8Z\" clip-rule=\"evenodd\"/>\\n                    </svg>    \\n                </span>\\n                <p>\\n                    ${k()[0]}\\n                </p>      \\n            </div>\\n            <div class='kam-T28__itemsContainer'>  \\n            </div>\\n            <div class='kam-T28__footer'>\\n                <div class='kam-T28__counters'>\\n                    <div class=\"kam-T28__counters__wrapper\">\\n                        <div class='kam-T28__counters__allitems kam-T28__counters__counter \\n                            kam-T28__hidden'>\\n                            ${c} (<span></span> ${k()[1]})\\n                        </div>\\n                        <div class='kam-T28__counters__sales kam-T28__counters__counter \\n                            kam-T28__hidden'>\\n                            ${_}<span></span>${n>1?u:m}\\n                        </div>\\n                    </div>\\n                    <div class=\"kam-T28__counters__price kam-T28__counters__sales\">\\n                        <span></span>${o}\\n                    </div>\\n                </div>\\n                <button class='kam-T28__link btn primary kam-checkout'>\\n                    <span>${T}</span>\\n                </button>\\n            </div>\\n        </div>\\n    </div>\\n</div>\\n`},insertHint=(e,t,n,o)=>{const a=\".kam-T28__overlay\",r=\".kam-T28__hint\",s=\".kam-T28__itemsContainer\",i=\".kam-T28__closeBtn\",c=\".kam-T28__counters__allitems>span\",l=\".kam-T28__counters__sales>span\",d=\".kam-T28__counters__price>span\",_=\".kam-T28__link\",m=Object.values(t),u=m[0],T=m[1];function k(e,t,n){e.forEach(((e,o)=>{const a=e.thumbnailImageMap.small,r=e.canonicalUrl;if(a&&r&&document.querySelectorAll(\".kam-T28__itemsContainer \\n                    .kam-T28__itemsContainer__item\").length<6&&(function(e,t,n){const o=document.createElement(\"a\"),a=document.createElement(\"img\");o.insertAdjacentElement(\"afterbegin\",a),o.classList.add(\"kam-T28__itemsContainer__item\"),o.setAttribute(\"href\",t),a.setAttribute(\"src\",e),a.addEventListener(\"load\",(()=>{a.classList.add(\"loaded\")})),n.insertAdjacentElement(\"beforeend\",o)}(a,r,t),n)){document.querySelectorAll(\"\\n                            .kam-T28__itemsContainer .kam-T28__itemsContainer__item\\n                        \")[o].classList.add(\"kam-T28__itemsContainer__item--sale\")}}))}function p(e){e.preventDefault();const{target:t}=e;t.closest(i)||!t.closest(r)?(!function(){const e=document.querySelector(a);e.classList.add(\"kam-T28__opacity\"),setTimeout((()=>{e.classList.add(\"kam-T28__hidden\")}),300),document.body.classList.remove(\"kam-T28__overflow\")}(),Kameleoon.API.Goals.processConversion(u)):t.closest(_)&&(Kameleoon.API.Goals.processConversion(T),fetch(o,{method:\"POST\",headers:{\"Content-Type\":\"application/json\"}}).then((()=>{window.location.href=`${window.location.origin}/otc/checkout/flow`})))}Kameleoon.API.Core.runWhenElementPresent(\"body\",(async([t])=>{const o=await Kameleoon.API.Data.readLocalData(\"dataCart\");if(o&&o.countProductsInCart){const{countOfProductsWithSale:r,countProductsInCart:i,productsPrice:_,productsWithSale:m,productsWithoutSale:u}=o;t.insertAdjacentHTML(\"beforeend\",initKamHint(i,e,r,n)),t.classList.add(\"kam-T28__overflow\");const T=document.querySelector(s),v=document.querySelector(a);v.classList.add(\"kam-T28__animation\"),k(m,T,!0),k(u,T,!1),function(e,t,n){if(e){const t=document.querySelector(c);t.innerText=e,t.parentElement.classList.remove(\"kam-T28__hidden\")}if(t){const e=document.querySelector(l);e.innerText=t,e.parentElement.classList.remove(\"kam-T28__hidden\")}n&&(document.querySelector(d).innerText=n.toFixed(2))}(i,r,_),Kameleoon.API.Utils.addUniversalClickListener(v,p)}})),Kameleoon.API.Data.writeLocalData(\"kamT28-add2cartDone\",null)},dataForMarkup={textForSoloProductHeader:\"Een geweldig product ligt klaar in je winkelwagen!\",textForMoreThenOneProductsHeader:\"Geweldige producten wachten op je in je winkelwagen!\",textFortSoloProductTitle:\"Bestel nu je product voordat het is uitverkocht.\",textForMoreThenOneProductTitle:\"Bestel nu je producten voordat ze zijn uitverkocht.\",wordForFooter1:\"Totaal\",wordForFooter2Solo:\"product\",wordForFooter2More:\"producten\",wordForFooter3:\"incl. \",wordForFooter4Solo:\" product met korting\",wordForFooter4More:\" producten met korting\",btnWording:\"BESTEL NU\"},goals={\"[Global|T28|NL] Click X\":271160,\"[Global|T28|NL] Overlay to checkout\":271161};Kameleoon.API.Core.runWhenConditionTrue((()=>Kameleoon.API.Data.readLocalData(\"dataCart\")),(()=>{insertHint(dataForMarkup,goals,\"\",\"https://www.lidl.nl/checkout-api/init/NL\"),setTimeout((()=>{const e=document.querySelector(\".kam-T28__counters__price > span\"),t=e.innerText;t.includes(\".\")||(e.innerText=`${t}.-`)}),0)}));",
            "afterDOMReady": false
          }
        }, {
          "name": "Variation 1",
          "id": 942814,
          "css": "",
          "elementSets": [],
          "javaScriptCode": {
            "code": "document.location.href.includes(\"werSchnelleresLieferdatumAnzeigtMachtMehrGeld\")&&(document.cookie=\"CROTeam=CROTeam;path=/;max-age=3600;\");",
            "afterDOMReady": false
          }
        }, {
          "name": "Variation 1",
          "id": 1145046,
          "css": ".kam-PT09__overlay{position:fixed;width:100%;z-index:9999;display:flex;align-items:center;justify-content:center;left:0;right:0;top:0;bottom:0;background:rgba(0,0,0,.5)}.kam-PT09__hintContainer{width:calc(100% - 32px);margin:auto 16px;align-items:center;display:flex;align-items:center;justify-content:center}.kam-PT09__animation{display:flex;opacity:0;animation:animShow .3s linear forwards}.kam-PT09__hint{display:flex;flex-direction:column;gap:8px;width:100%;margin:auto;background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.15);border-radius:4px;min-width:328px;max-width:444px;font-family:LidlFontPro,LidlFontCondPro,Trebuchet MS,sans-serif}.kam-PT09__header{color:#1e2124;padding:1rem 1rem 2px 1rem;display:flex;flex-direction:row;border-radius:4px 4px 0 0}.kam-PT09__header>p{font-weight:600;margin:0;font-size:18px;line-height:24px}.kam-PT09__header>button{position:relative;background-color:#deebe3;color:#2f3a44;padding:0;transition:none;height:1.5rem;margin-left:auto;border:0;cursor:pointer;background:0 0;font-size:1.4rem}.kam-PT09__header>button:focus,.kam-PT09__header>button:hover{background-color:inherit;color:inherit;outline:0!important}.kam-PT09__header>button svg{height:.915rem;width:.915rem}.kam-PT09__title{display:flex;flex-direction:row;align-items:center;gap:8px;margin:0 16px;padding:4px 8px;color:#a84700;background-color:#fff2a6;border-radius:4px}.kam-PT09__title>span{line-height:0}.kam-PT09__title>span svg{height:.925rem;width:.925rem}.kam-PT09__title>p{width:100%;text-align:left;margin:0;font-size:11px;font-weight:600;line-height:16px}.kam-PT09__itemsContainer{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:8px;padding:0 16px;background-color:#fff}.kam-PT09__itemsContainer__item{display:flex;position:relative;width:100%;cursor:pointer}.kam-PT09__itemsContainer__item>img{width:auto;max-width:100%;margin:auto}.kam-PT09__itemsContainer__item__discount{color:#fff;font-weight:800;line-height:normal;font-size:1.25rem;background-color:#e60a14;border-color:#e60a14;padding:.25rem;position:absolute;top:0;left:0}.kam-PT09__itemsContainer:has(.kam-PT09__itemsContainer__item:nth-child(2)) .kam-PT09__itemsContainer__item{width:calc(50% - .25rem)}.kam-PT09__itemsContainer:has(.kam-PT09__itemsContainer__item:nth-child(3)) .kam-PT09__itemsContainer__item{width:calc(33.3333333333% - .333rem)}.kam-PT09__footer{padding:0 1rem 1rem 1rem;display:flex;align-items:center;flex-direction:column;gap:16px}.kam-PT09__counters{display:flex;justify-content:space-between;font-weight:600;line-height:24px;font-size:16px}.kam-PT09__counters div{margin:0 .125rem}.kam-PT09__counters__counter{text-align:center}.kam-PT09__counters__sales{color:#ad080f}.kam-PT09__link{text-decoration:none;text-align:center;color:#fff;background:#0050aa;font-size:16px;font-weight:600;line-height:20px;border-radius:50px;border:none;width:100%;padding:.675rem 1rem .625rem 1rem}.kam-PT09__link:hover{background-color:#003673}.kam-PT09__opacity{opacity:0;animation:animHidden .3s linear forwards}.kam-PT09__hidden{display:none}.kam-PT09__overflow{overflow:hidden}@keyframes animShow{from{opacity:0}to{opacity:1}}@keyframes animHidden{from{opacity:1}to{opacity:0}}@media (min-width:1440px){.kam-PT09__hint{width:424px}.kam-PT09__header>p{font-size:20px;line-height:28px}.kam-PT09__title>p{font-size:13px;font-weight:600;line-height:20px}.kam-PT09__counters{font-size:18px;line-height:24px}.kam-PT09__counters__allitems,.kam-PT09__counters__price{line-height:28px}.kam-PT09__link{font-size:18px;line-height:24px}}@media (max-height:580px){.kam-PT09__itemsContainer:has(.kam-PT09__itemsContainer__item:nth-child(2)){gap:.5rem 2.87rem}.kam-PT09__itemsContainer:has(.kam-PT09__itemsContainer__item:nth-child(2)) .kam-PT09__itemsContainer__item{width:calc(33.3333333333% - 1.915rem)}}",
          "elementSets": [],
          "javaScriptCode": {
            "code": "\"use strict\";const hintMarkup=(t,e,n,o)=>{const{textForSoloProductHeader:r,textForMoreThenOneProductsHeader:s,textForAlmostOutSoloProductTitle:a,textForAlmostOutMoreThenOneProductTitle:i,textFortSoloProductTitle:c,textForMoreThenOneProductTitle:d,totalFooterWording:l,btnWording:u,footerWording:m}=o,{productFooterWording:_,discountFooterWording:p,discountProductFooterWording:P}=(()=>{const n={},o=m.find((({amountCondition:e})=>e(t))),r=m.find((({amountCondition:t})=>t(e)));return n.productFooterWording=o?.productsWording,n.discountProductFooterWording=r?.discountProductsWording,n.discountFooterWording=r?.discountWording,n})();return`\\n    <div class='kam-PT09__overlay'>\\n        <div class='kam-PT09__hintContainer'>\\n            <div class='kam-PT09__hint'>\\n                <div class='kam-PT09__header'>\\n                    <p>${t>1?s:r}</p>\\n                    <button type=\"submit\" class=\"cancel icon-x kam-PT09__closeBtn\">\\n                        <svg focusable=\"false\" viewBox=\"0 0 60 60\" title=\"close\" tabindex=\"0\" class=\"m-alert__close-icon\">\\n                            <use xlink:href=\"/cdn/assets/6.9.0/icon__sprite__shop.svg#cross\"></use>\\n                        </svg>\\n                    </button>\\n                </div>\\n                <div class='kam-PT09__title'>\\n                    <span>\\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\">\\n                            <path fill=\"#A84700\" d=\"M7.99 10.056a.711.711 0 0 0-.534.21.744.744 0 0 0-.205.547c0 .219.069.395.205.534a.713.713 0 0 0 .533.205.753.753 0 0 0 .547-.203c.141-.133.21-.314.21-.538a.738.738 0 0 0-.21-.547.742.742 0 0 0-.547-.208ZM7.483 9.36a.155.155 0 0 1-.048-.12l-.006-.184c-.043-1.298-.075-2.285-.088-2.96-.024-.71-.034-1.072-.034-1.09 0-.06.01-.1.037-.126.024-.024.064-.037.115-.037h1.093c.05 0 .088.01.115.037.024.027.037.067.037.125l-.005.158-.03.933-.046 1.428-.055 1.716c0 .05-.016.09-.048.12a.179.179 0 0 1-.125.043h-.787a.179.179 0 0 1-.125-.043Z\"/>\\n                            <path fill=\"#A84700\" fill-rule=\"evenodd\" d=\"M8 .4C3.81.4.4 3.81.4 8c0 4.19 3.41 7.6 7.6 7.6 4.19 0 7.6-3.41 7.6-7.6C15.6 3.81 12.19.4 8 .4Zm0 14.4c-3.75 0-6.8-3.05-6.8-6.8S4.25 1.2 8 1.2s6.8 3.05 6.8 6.8-3.05 6.8-6.8 6.8Z\" clip-rule=\"evenodd\"/>\\n                        </svg>    \\n                    </span>\\n                    <p>${n>1?i:1===n?a:t>1?d:c}</p>\\n                </div>\\n                <div class='kam-PT09__itemsContainer'></div>\\n                <div class='kam-PT09__footer'>\\n                    <div class='kam-PT09__counters'>\\n                        <div class='kam-PT09__counters__allitems kam-PT09__counters__counter kam-PT09__hidden'>\\n                            ${l} <span></span> ${_}\\n                        </div>\\n                        <div class='kam-PT09__counters__sales kam-PT09__counters__counter kam-PT09__hidden'>\\n                            (${p}<span></span> ${P})\\n                        </div>\\n                    </div>\\n                    <a href='/otc/cart' class='kam-PT09__link btn primary otc-add-to-cart__button'>\\n                        <span>${u}</span>\\n                    </a>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n    `},initHint=(t,e,n)=>{const o=\".kam-PT09__overlay\",r=\".kam-PT09__hintContainer\",s=\".kam-PT09__hint\",a=\".kam-PT09__itemsContainer\",i=\".kam-PT09__closeBtn\",c=\".kam-PT09__counters__allitems>span\",d=\".kam-PT09__counters__sales>span\",l=\".kam-PT09__itemsContainer__item\",u=\".kam-PT09__link\",m=Object.keys(e),_=m[0],p=m[1],P=m[2],{urlToFetchCartItems:g,urlCountry:T,wordingForAlmostOutProducts:h,urlToFetchCartItemsForMoreInfo:k}=n;function v(){const t=document.querySelector(o);t.classList.add(\"kam-PT09__opacity\"),setTimeout((()=>{t.classList.add(\"kam-PT09__hidden\")}),300),document.body.classList.remove(\"kam-PT09__overflow\")}function f(t){t.preventDefault();const{target:e}=t;if(e.closest(i)||!e.closest(s))v(),Kameleoon.API.Goals.processConversion(_);else if(e.closest(u))Kameleoon.API.Goals.processConversion(p),window.location=\"/otc/cart\";else if(e.closest(l)){const t=e.closest(l);Kameleoon.API.Goals.processConversion(P),window.location=t.getAttribute(\"href\")}}Kameleoon.API.Core.runWhenElementPresent(\"body\",(async([e])=>{const n=await(async()=>{try{const t=await fetch(g).then((t=>t.json()));if(!t.payload?.cartItems?.length)return!1;const e=t.payload.cartItems.map((({erpNumber:t})=>t)),n=await fetch(`${k}${e}`).then((t=>t.json())),o={numberOfProductsWithSale:0,numberOfProductsInCart:0,prodcuts:[]};return n.forEach((t=>{const{image:e,canonicalUrl:n,stockAvailability:r,price:s}=t,a={image:e,url:n,discount:!1};3===r.availabilityIndicator&&(o.numberOfProductsInCart++,s.discount&&(o.numberOfProductsWithSale++,a.discount=!0),o.prodcuts.push(a))})),o}catch(t){return console.log(t),!1}})();if(!n||!n.numberOfProductsInCart)return;const{numberOfProductsWithSale:i,numberOfProductsInCart:l,prodcuts:u}=n;let m=0;await Promise.all(u.map((async({url:t})=>{const e=await(n=t,fetch(`${T}${n}`).then((t=>t.text())).then((t=>h.test(t))));var n;return e&&m++,e}))),e.insertAdjacentHTML(\"beforeend\",hintMarkup(l,i,m,t)),e.classList.add(\"kam-PT09__overflow\");const _=document.querySelector(a),p=document.querySelector(o);document.querySelector(r).querySelector(s);p.classList.add(\"kam-PT09__animation\"),u.forEach((({image:t,url:e,discount:n},o)=>{o>=3||function(t,e,n,o){const r=document.createElement(\"a\"),s=document.createElement(\"img\"),a=document.createElement(\"div\");r.insertAdjacentElement(\"afterbegin\",a),r.insertAdjacentElement(\"afterbegin\",s),r.classList.add(\"kam-PT09__itemsContainer__item\"),r.setAttribute(\"href\",e),s.setAttribute(\"src\",t),a.classList.add(\"kam-PT09__itemsContainer__item__discount\"),a.style.display=n?\"block\":\"none\",a.innerText=\"%\",s.addEventListener(\"load\",(()=>{s.classList.add(\"loaded\")})),o.insertAdjacentElement(\"beforeend\",r)}(t,e,n,_)})),function(t,e){const n=document.querySelector(c);if(n.innerText=t,n.parentElement.classList.remove(\"kam-PT09__hidden\"),!e)return;const o=document.querySelector(d);o.innerText=e,o.parentElement.classList.remove(\"kam-PT09__hidden\")}(l,i),Kameleoon.API.Utils.addUniversalClickListener(p,f),setTimeout(v,9e3)}))},getCartID=()=>{const t=`; ${document.cookie}`.split(\"; CART_ID=\");return 2===t.length?t.pop().split(\";\").shift():null},getLangCookie=()=>{const t=document.cookie.match(/lidl_locale=([^;]+)/);return t?t[1].substring(0,2):\"nl\"},lang=document.documentElement.lang.substring(0,2)||getLangCookie(),dataForMarkup={textForSoloProductHeader:\"Je product wacht op je in je winkelwagen!\",textForMoreThenOneProductsHeader:\"Je producten wachten op je in je winkelwagen!\",textForAlmostOutSoloProductTitle:\"Bestel snel! Je product is bijna uitverkocht.\",textForAlmostOutMoreThenOneProductTitle:\"Bestel snel! Je producten zijn bijna uitverkocht.\",textFortSoloProductTitle:\"Wees sneller dan anderen! Je product is niet gereserveerd.\",textForMoreThenOneProductTitle:\"Wees sneller dan anderen! \\n    Je producten zijn niet gereserveerd.\",totalFooterWording:\"Totaal\",btnWording:\"Ga naar je winkelwagen\",footerWording:[{amountCondition:t=>1===t,productsWording:\"product\",discountWording:\"\",discountProductsWording:\"Actieproduct\"},{amountCondition:t=>t>=2,productsWording:\"producten\",discountWording:\"\",discountProductsWording:\"Actieproducten\"}]},dataForHint={urlToFetchCartItems:`https://www.lidl.nl/cart-api/v3/cart/NL?cartId=${getCartID()}&language=${lang}&isMergeEnabled=true`,urlToFetchCartItemsForMoreInfo:\"https://www.lidl.nl/p/api/gridboxes/NL/nl?erpNumbers=\",urlCountry:\"https://www.lidl.nl\",wordingForAlmostOutProducts:/Wees er snel bij!/},goals={\"[PT14|NL] Click X\":239085,\"[PT14|NL] Click_to_Cart\":239087,\"[PT14|NL] Click_Image\":239086};initHint(dataForMarkup,goals,dataForHint);",
            "afterDOMReady": false
          }
        }, {
          "name": "Variation 1",
          "id": 1182592,
          "css": "",
          "elementSets": []
        }, {
          "name": "A2_Megaphone animation",
          "id": 1228482,
          "css": ".bargain-hint{display:none}.kam-t89-bargain-hint{display:flex;align-items:center;flex-direction:row;gap:8px;width:100%;font-weight:600;font-size:16px;line-height:24px;color:#e60a14;font-family:LidlFontPro}.kam-t89-bargain-hint .icon-wrapper{display:flex;flex-direction:row}.kam-t89-bargain-hint.kam-t89-start-animation .animate-path{animation:reveal 1.5s .8s ease-in-out 3}.buybox-one__content .cart-section-one{gap:.5rem 1rem}.animate-path{transform-box:fill-box;transform-origin:left center;transform:scaleX(1);opacity:1}@keyframes reveal{0%{transform:scale(0);opacity:0}75%{transform:scaleX(1);opacity:1}100%{transform:scaleX(1);opacity:1}}",
          "elementSets": [],
          "javaScriptCode": {
            "code": "\"use strict\";const megaphone='\\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"42\" height=\"32\" fill=\"none\">\\n    <path fill=\"#E60A14\" d=\"M26.371 15.08c-.18-1.706-1.638-2.959-3.327-2.952l-.573-5.451a1.666 1.666 0 0 0-2.649-1.16l-7.239 5.349-6.028.633c-3.108.327-5.372 3.105-5.047 6.194.222 2.11 1.608 3.806 3.45 4.576L7.39 28.51a3.005 3.005 0 0 0 5.797-1.025 2.959 2.959 0 0 0-.204-1.145l-1.575-4.025 2.351-.247 8.192 3.727a1.666 1.666 0 0 0 2.214-.834c.12-.267.167-.56.137-.852l-.573-5.453c1.654-.344 2.82-1.871 2.641-3.577ZM6.764 13.487l5.304-.557.76 7.224-5.305.557c-2.011.212-3.817-1.237-4.026-3.228-.21-1.992 1.255-3.784 3.267-3.996ZM11.12 27.07a.96.96 0 0 1-.016.745.986.986 0 0 1-.554.528 1 1 0 0 1-1.295-.56l-1.982-5.079c.154-.004.303.014.458-.003l1.614-.17 1.775 4.538Zm11.132-3.334-7.392-3.363-.849-8.076 6.532-4.826 1.71 16.265Zm1.265-7.1-.261-2.486c.583.09 1.061.532 1.125 1.139.064.606-.312 1.138-.864 1.347Z\"/>\\n    <path class=\"animate-path\" fill=\"#E60A14\" d=\"M40.074 13.21 29.72 14.298l.242 2.302 10.354-1.088-.242-2.302ZM38.89 1.939l-13.167 8.565 2.143 1.471 5.528-3.425 5.774-3.959-.279-2.652ZM28.616 19.107l-1.777 2.016 14.42 3.358-.281-2.672-12.362-2.702Z\"/>\\n</svg>\\n',markup=n=>`\\n<div class=\"kam-t89-bargain-hint\">\\n    <div class=\"icon-wrapper\">\\n        ${megaphone}\\n    </div>\\n    ${n}\\n</div>\\n`,variationScript=n=>{const{Core:{runWhenElementPresent:t,runWhenConditionTrue:e}}=Kameleoon.API;e((()=>window.dataLayerNext?.some((n=>\"view_item\"===n.event))),(()=>{t(\".buybox-one__content:not(:has(> .kam-t89-bargain-hint)) > .cart-section-one\",(t=>{t.forEach((t=>{t.insertAdjacentHTML(\"afterbegin\",markup(n));const e=t.querySelector(\".kam-t89-bargain-hint\");e&&new IntersectionObserver((([n])=>{e.classList.toggle(\"kam-t89-start-animation\",n.isIntersecting)})).observe(e)}))})),t(\".buybox-one__content .buybox-one__labels\",(n=>{n.forEach((n=>{0!==n.children.length&&n.textContent.trim()||(n.style.display=\"none\")}))}))}))},text=\"Mega deal!\";variationScript(text);",
            "afterDOMReady": false
          }
        }, {
          "name": "T15_Default_No_Hint",
          "id": 1252632,
          "css": "",
          "elementSets": []
        }, {
          "name": "T15_A1_Afterpay_Hint",
          "id": 1252633,
          "css": ".kam-text-t15{margin:0;font-family:LidlFontPro;font-size:14px}.kam-img-t15{max-width:190px;height:44px}@media screen and (min-width:960px){.kam-text-t15{font-size:16px}}",
          "elementSets": [],
          "javaScriptCode": {
            "code": "const addHintsToAllBuyboxesT15=()=>{const t=\"kamt15-container\",n=`\\n      <div class=\"${t}\" style=\"display: block;\">\\n        <p class=\"kam-text-t15\">Shop nu, betaal in 14 dagen met</p>\\n        <img class=\"kam-img-t15\" src=\"https://www.lidl.nl/static/assets/APxRiverty-Horizontal-666507.svg\" alt=\"AfterPay_Riverty\">\\n      </div>\\n    `,e=e=>{[...e.parentNode.children].some((n=>n.classList.contains(t)))||e.insertAdjacentHTML(\"afterend\",n)};Kameleoon.API.Core.runWhenElementPresent(\".buybox-one\",(t=>{t.forEach(e)}),null,!0)};addHintsToAllBuyboxesT15();",
            "afterDOMReady": false
          }
        }, {
          "name": "T16_Default_Date",
          "id": 1259071,
          "css": "",
          "elementSets": []
        }, {
          "name": "T16_A1_after_tomorrow",
          "id": 1259072,
          "css": "",
          "elementSets": [],
          "javaScriptCode": {
            "code": "\"use strict\";const selectorPDP=\".detail-one__container .availability ul > li.online-availability__item:first-child:has(> .ods-tooltip__target) > span > span\",selectorCartCheckout=\".the-delivery-time-heading .delivery-time .text:has(.text--highlighted)\",excludedDates=[{day:3,month:3},{day:6,month:3},{day:27,month:3}];function isExactlyTwoDaysInFuture([e]){const[t,n,a]=e.split(\".\").map(Number),o=new Date(a,n-1,t),i=new Date;i.setHours(0,0,0,0);const c=new Date(i);let d=0;for(;d<2;){c.setDate(c.getDate()+1);0===c.getDay()||excludedDates.some((e=>e.day===c.getDate()&&e.month===c.getMonth()))||d++}return o.getTime()===c.getTime()}const variationCode=(e,t,n,a)=>{const o=(e,t,n)=>{Kameleoon.API.Core.runWhenElementPresent(`${e}:not([kam-t16-handled=\"true\"])`,(a=>{for(let e=a.length-1;e>-1;e--){const o=a[e],i=o.innerText.match(/\\d{2}\\.\\d{2}\\.\\d{4}/i);if(o.setAttribute(\"kam-t16-handled\",!0),!i)continue;if(isExactlyTwoDaysInFuture(i)){const e=new Date,a=[5,6].includes(e.getDay())||excludedDates.some((t=>t.day===e.getDate()&&t.month===e.getMonth()));o.innerHTML=n&&a?n:t}}o(e,t)}))};document.location.pathname.includes(\"/p/\")?o(selectorPDP,e,n):(document.location.pathname.includes(\"/cart\")||document.location.pathname.includes(\"/otc/checkout\")&&!document.location.pathname.includes(\"/success\"))&&o(selectorCartCheckout,t,a)},wordingPDP=\"Vandaag besteld, overmorgen in huis\",wordingCheckout=\"Levering <b>overmorgen in huis</b>\",wordingPDPBackUp=\"Vandaag besteld, binnen 1-2 werkdagen in huis\",wordingCheckoutBackUp=\"Levering <b>binnen 1-2 werkdagen in huis</b>\";variationCode(wordingPDP,wordingCheckout,wordingPDPBackUp,wordingCheckoutBackUp);",
            "afterDOMReady": false
          }
        }, {
          "name": "T16_A2_1-2_woking_days",
          "id": 1259073,
          "css": "",
          "elementSets": [],
          "javaScriptCode": {
            "code": "\"use strict\";const selectorPDP=\".detail-one__container .availability ul > li.online-availability__item:first-child:has(> .ods-tooltip__target) > span > span\",selectorCartCheckout=\".the-delivery-time-heading .delivery-time .text:has(.text--highlighted)\",excludedDates=[{day:3,month:3},{day:6,month:3},{day:27,month:3}];function isExactlyTwoDaysInFuture([e]){const[t,n,a]=e.split(\".\").map(Number),o=new Date(a,n-1,t),i=new Date;i.setHours(0,0,0,0);const c=new Date(i);let s=0;for(;s<2;){c.setDate(c.getDate()+1);0===c.getDay()||excludedDates.some((e=>e.day===c.getDate()&&e.month===c.getMonth()))||s++}return o.getTime()===c.getTime()}const variationCode=(e,t,n,a)=>{const o=(e,t,n)=>{Kameleoon.API.Core.runWhenElementPresent(`${e}:not([kam-t16-handled=\"true\"])`,(a=>{for(let e=a.length-1;e>-1;e--){const o=a[e],i=o.innerText.match(/\\d{2}\\.\\d{2}\\.\\d{4}/i);if(o.setAttribute(\"kam-t16-handled\",!0),!i)continue;if(isExactlyTwoDaysInFuture(i)){const e=new Date,a=[5,6].includes(e.getDay())||excludedDates.some((t=>t.day===e.getDate()&&t.month===e.getMonth()));o.innerHTML=n&&a?n:t}}o(e,t)}))};document.location.pathname.includes(\"/p/\")?o(selectorPDP,e,n):(document.location.pathname.includes(\"/cart\")||document.location.pathname.includes(\"/otc/checkout\")&&!document.location.pathname.includes(\"/success\"))&&o(selectorCartCheckout,t,a)},wordingPDP=\"Vandaag besteld, binnen 1-2 werkdagen in huis\",wordingCheckout=\"Levering <b>binnen 1-2 werkdagen in huis</b>\";variationCode(wordingPDP,wordingCheckout);",
            "afterDOMReady": false
          }
        }, {
          "id": 0,
          "name": "Reference",
          "css": "",
          "elementSets": []
        }, {
          "id": null,
          "name": "Excluded"
        }],
        "goals": [{
          "id": 32833,
          "name": "Engagement",
          "type": "ENGAGEMENT",
          "category": "Kameleoon",
          "universalAnalyticsTracking": true
        }, {
          "id": 88656,
          "name": "Slide 07 - Action „Submenu“",
          "type": "CUSTOM"
        }, {
          "id": 88657,
          "name": "Slide 08 - Action „Home-Bestseller-Tab“",
          "type": "CUSTOM"
        }, {
          "id": 88658,
          "name": "Slide 09 - Action „Home-Bestseller-Product“",
          "type": "CUSTOM"
        }, {
          "id": 88659,
          "name": "Slide 10 - Action „Home-Bestseller-Slider“",
          "type": "CUSTOM"
        }, {
          "id": 88660,
          "name": "Slide 11 - Action „USP-Leverdag“",
          "type": "CUSTOM"
        }, {
          "id": 88661,
          "name": "Slide 12 - Action „USP-Avond“",
          "type": "CUSTOM"
        }, {
          "id": 88662,
          "name": "Slide 13 - Action „USP-90 dagen“",
          "type": "CUSTOM"
        }, {
          "id": 88663,
          "name": "Slide 14 - Action „USP-Retour“",
          "type": "CUSTOM"
        }, {
          "id": 88664,
          "name": "Slide 15 - Action „USP-Veilig winkelen“",
          "type": "CUSTOM"
        }, {
          "id": 88666,
          "name": "Slide 16 - Action „Newsletter-Header“",
          "type": "CUSTOM"
        }, {
          "id": 88670,
          "name": "Slide 17 - Action „Newsletter-Footer“",
          "type": "CUSTOM"
        }, {
          "id": 88746,
          "name": "Slide 18 - Action „Home-Footer“",
          "type": "CUSTOM"
        }, {
          "id": 88760,
          "name": "Slide 19 - Action „Home-Footer-Contact“",
          "type": "CUSTOM"
        }, {
          "id": 88767,
          "name": "Slide 21 - Action „Login“",
          "type": "CUSTOM"
        }, {
          "id": 88817,
          "name": "Slide 22 - Action „Login-wwvergeten“",
          "type": "CUSTOM"
        }, {
          "id": 88855,
          "name": "Slide 23 - Action „Login-geenaccount“",
          "type": "CUSTOM"
        }, {
          "id": 88860,
          "name": "Slide 26 - Action „Basket-Hover“",
          "type": "CUSTOM"
        }, {
          "id": 88955,
          "name": "Slide 27 - Action „Basketflyout-bestellen“",
          "type": "CUSTOM"
        }, {
          "id": 88956,
          "name": "Slide 28 - Action „Basketflyout-winkelwagen“",
          "type": "CUSTOM"
        }, {
          "id": 88957,
          "name": "Slide 29 - Action „Basketflyout-product“",
          "type": "CUSTOM"
        }, {
          "id": 88958,
          "name": "Slide 30 - Action „Basket-changeamount“",
          "type": "CUSTOM"
        }, {
          "id": 88959,
          "name": "Slide 31 - Action „Basket-Removeproduct“",
          "type": "CUSTOM"
        }, {
          "id": 88960,
          "name": "Slide 32 - Action „Basket-verder winkelen“",
          "type": "CUSTOM"
        }, {
          "id": 88961,
          "name": "Slide 33 - Action „Basket-bestellen“",
          "type": "CUSTOM"
        }, {
          "id": 88966,
          "name": "[GG|NL] POP_old",
          "type": "CUSTOM"
        }, {
          "id": 88991,
          "name": "Slide 36 - Action „POP-nav-sort-any“",
          "type": "CUSTOM"
        }, {
          "id": 89025,
          "name": "Slide 37 - Action „POP-nav-filter-category“",
          "type": "CUSTOM"
        }, {
          "id": 89026,
          "name": "Slide 38 - Action „POP-nav-filter-attribute“",
          "type": "CUSTOM"
        }, {
          "id": 89027,
          "name": "Slide 39 - Action „POP-nav-page“",
          "type": "CUSTOM"
        }, {
          "id": 89028,
          "name": "Slide 40 - Action „POP-nav-pdp“",
          "type": "CUSTOM"
        }, {
          "id": 89034,
          "name": "Slide 43 - Action „WT-pdp“",
          "type": "CUSTOM"
        }, {
          "id": 89065,
          "name": "[GG|NL] Search_SRP",
          "type": "CUSTOM"
        }, {
          "id": 89143,
          "name": "Slide 46 - Action „Search-suggest“",
          "type": "CUSTOM"
        }, {
          "id": 89144,
          "name": "Slide 54 - Action „POP-Search-pdp“",
          "type": "CUSTOM"
        }, {
          "id": 89145,
          "name": "Slide 50 - Action „POP-Search-sort-any“",
          "type": "CUSTOM"
        }, {
          "id": 89146,
          "name": "Slide 51 - Action „POP-Search-filter-category“",
          "type": "CUSTOM"
        }, {
          "id": 89147,
          "name": "Slide 52 - Action „POP-Search-filter-attribute“",
          "type": "CUSTOM"
        }, {
          "id": 89148,
          "name": "Slide 53 - Action „POP-Search-page“",
          "type": "CUSTOM"
        }, {
          "id": 89173,
          "name": "Slide 57 - Action „PDP-breadcrumb-category“",
          "type": "CUSTOM"
        }, {
          "id": 89174,
          "name": "Slide 58 - Action „PDP-breadcrumb-weekdeal“",
          "type": "CUSTOM"
        }, {
          "id": 89179,
          "name": "Slide 59 - Action „PDP-verzendkosten“",
          "type": "CUSTOM"
        }, {
          "id": 89184,
          "name": "Slide 61 - Action „PDP-product-image-hover“",
          "type": "CUSTOM"
        }, {
          "id": 89186,
          "name": "Slide 62 - Action „PDP-thumbnail-click“",
          "type": "CUSTOM"
        }, {
          "id": 89187,
          "name": "Slide 63 - Action „PDP-meerinfo“",
          "type": "CUSTOM"
        }, {
          "id": 89193,
          "name": "Slide 65 - Action „PDP-bestseller-product“",
          "type": "CUSTOM"
        }, {
          "id": 89219,
          "name": "Slide 66 - Action „PDP-bestseller-slider“",
          "type": "CUSTOM"
        }, {
          "id": 89225,
          "name": "Slide 67 - Action „PDP-socialrecommendation“",
          "type": "CUSTOM"
        }, {
          "id": 89226,
          "name": "Slide 70 - Action „CW-submenu“",
          "type": "CUSTOM"
        }, {
          "id": 89227,
          "name": "Slide 71 - Action „CW-fullwidthbanner“",
          "type": "CUSTOM"
        }, {
          "id": 89237,
          "name": "Slide 72 - Action „CW-teaser“",
          "type": "CUSTOM"
        }, {
          "id": 89238,
          "name": "Slide 73 - Action „CW-uitgelichtproduct“",
          "type": "CUSTOM"
        }, {
          "id": 89239,
          "name": "Slide 74 - Action „CW-bestseller-tab“",
          "type": "CUSTOM"
        }, {
          "id": 89240,
          "name": "Slide 75 - Action „CW-bestseller-product“",
          "type": "CUSTOM"
        }, {
          "id": 89241,
          "name": "Slide 76 - Action „CW-bestseller-slide“",
          "type": "CUSTOM"
        }, {
          "id": 89243,
          "name": "Slide 77 - Action „CW-salebanner“",
          "type": "CUSTOM"
        }, {
          "id": 89248,
          "name": "Slide 81 - Action „Checkout-home“",
          "type": "CUSTOM"
        }, {
          "id": 89249,
          "name": "Slide 82 - Action „Checkout-breadcrumb“",
          "type": "CUSTOM"
        }, {
          "id": 89336,
          "name": "Slide 06 - Action „Homepage“",
          "type": "CUSTOM"
        }, {
          "id": 89358,
          "name": "[GG|NL] Basketpage",
          "type": "CUSTOM"
        }, {
          "id": 89380,
          "name": "Slide 42 - Action „WT-Page“",
          "type": "CUSTOM"
        }, {
          "id": 89382,
          "name": "Slide 49 - Action „POP-Search-Result-Page“",
          "type": "CUSTOM"
        }, {
          "id": 89387,
          "name": "[GG|NL] PDP",
          "type": "CUSTOM"
        }, {
          "id": 89389,
          "name": "Slide 60 - Action „PDP-changeamount“",
          "type": "CUSTOM"
        }, {
          "id": 89394,
          "name": "Slide 69 - Action „CW“",
          "type": "CUSTOM"
        }, {
          "id": 89401,
          "name": "Slide 79 - Action „Checkout-Step1-Login“",
          "type": "CUSTOM"
        }, {
          "id": 89546,
          "name": "Slide 86 - Action „Checkout-changeamount“",
          "type": "CUSTOM"
        }, {
          "id": 89559,
          "name": "Slide 87 - Action „Checkout-removeproduct“",
          "type": "CUSTOM"
        }, {
          "id": 89562,
          "name": "Slide 89 - Action „Checkout-WLT“",
          "type": "CUSTOM"
        }, {
          "id": 89568,
          "name": "Slide 90 - Action „Checkout-WLT-selectoption“",
          "type": "CUSTOM"
        }, {
          "id": 89570,
          "name": "Slide 91 - Action „Checkout-WLT-confirm“",
          "type": "CUSTOM"
        }, {
          "id": 89572,
          "name": "Slide 92 - Action „Checkout-WLT-cancel-button“",
          "type": "CUSTOM"
        }, {
          "id": 89587,
          "name": "Slide 93 - Action „Checkout-WLT-cancel-X“",
          "type": "CUSTOM"
        }, {
          "id": 101360,
          "name": "NEW Slide 20 - Action \"Basket\"",
          "type": "CLICK",
          "selectors": ["#minibasket"]
        }, {
          "id": 115352,
          "name": "[T02|NL]Basket-Removeproduct",
          "type": "CUSTOM"
        }, {
          "id": 115353,
          "name": "[T02|NL]Basket-verder winkelen",
          "type": "CUSTOM"
        }, {
          "id": 115354,
          "name": "[T02|NL]Basket-bestellen",
          "type": "CUSTOM"
        }, {
          "id": 115355,
          "name": "[T02|NL]Basket-changeamount",
          "type": "CUSTOM"
        }, {
          "id": 122027,
          "name": "[T01|NL] Choose Variant",
          "type": "CUSTOM"
        }, {
          "id": 122028,
          "name": "[T01|NL] Basket-bestellen",
          "type": "CUSTOM"
        }, {
          "id": 122029,
          "name": "[T01|NL] Basket-verder winkelen",
          "type": "CUSTOM"
        }, {
          "id": 124775,
          "name": "[T03|NL] Bestellen any (deprecated)",
          "type": "CUSTOM"
        }, {
          "id": 124776,
          "name": "[T03|NL] Lidl Logo",
          "type": "CUSTOM"
        }, {
          "id": 124777,
          "name": "[T03|NL] Submenu Basketpage",
          "type": "CUSTOM"
        }, {
          "id": 124778,
          "name": "[T03|NL] Breadcrumb Home",
          "type": "CUSTOM"
        }, {
          "id": 130531,
          "name": "[T01|NL] Basket-changeamount",
          "type": "CUSTOM"
        }, {
          "id": 130532,
          "name": "[T01|NL] Basket-removeproduct",
          "type": "CUSTOM"
        }, {
          "id": 140408,
          "name": "[T05|NL] Basket-bestellen any",
          "type": "CUSTOM"
        }, {
          "id": 140409,
          "name": "[T05|NL] Naar je winkelwagen FO",
          "type": "CUSTOM"
        }, {
          "id": 140410,
          "name": "[T05|NL] Bestellen FO",
          "type": "CUSTOM"
        }, {
          "id": 140830,
          "name": "[T04 | NL] CW-fullwidthbanner",
          "type": "CUSTOM"
        }, {
          "id": 140924,
          "name": "[T04|NL] CW-teaser",
          "type": "CUSTOM"
        }, {
          "id": 140925,
          "name": "[T04|NL] CW-reco",
          "type": "CUSTOM"
        }, {
          "id": 140926,
          "name": "[T04|NL] CW-salebanner",
          "type": "CUSTOM"
        }, {
          "id": 141034,
          "name": "[T06|NL] Bestellen Basketpage",
          "type": "CUSTOM"
        }, {
          "id": 141035,
          "name": "[T06|NL] Value of total savings (deprecated)",
          "type": "CUSTOM"
        }, {
          "id": 141037,
          "name": "[T06|NL] Number of purchased items with discount (deprecated)",
          "type": "CUSTOM"
        }, {
          "id": 141081,
          "name": "[T06|NL] Basket-changeamount",
          "type": "CUSTOM"
        }, {
          "id": 146268,
          "name": "[GG|NL] Basketpage_CheckoutEntry_old",
          "type": "CUSTOM"
        }, {
          "id": 146270,
          "name": "[GG|NL] All_CheckoutEntry (deprecated)",
          "type": "CUSTOM"
        }, {
          "id": 147535,
          "name": "[GG|NL] Order **not to use**",
          "type": "CUSTOM"
        }, {
          "id": 164029,
          "name": "Change amount on basket page (deprecated)",
          "type": "CUSTOM"
        }, {
          "id": 164030,
          "name": "[NL] Change amount on order overview page (deprecated)",
          "type": "CUSTOM"
        }, {
          "id": 168552,
          "name": "[Global|NL] Go to Checkout (deprecated)",
          "type": "CUSTOM"
        }, {
          "id": 168555,
          "name": "[Global|NL] Add2Cart2+ (deprecated)",
          "type": "CUSTOM"
        }, {
          "id": 168563,
          "name": "[Global|NL] Basket_Go to Checkout (deprecated)",
          "type": "CUSTOM"
        }, {
          "id": 185269,
          "name": "[GG|NL] Add2Cart_PDP_old",
          "type": "CUSTOM"
        }, {
          "id": 185270,
          "name": "[GG|NL] Add2Cart_All_old",
          "type": "CUSTOM"
        }, {
          "id": 185271,
          "name": "[GG|NL] QuickAdd2Cart",
          "type": "CUSTOM"
        }, {
          "id": 207005,
          "name": "[Global|NL] Add2Cart_test_product",
          "type": "CUSTOM"
        }, {
          "id": 207008,
          "name": "[Global|NL] POP_PDS_test_product",
          "type": "CUSTOM"
        }, {
          "id": 207009,
          "name": "[Global|NL] SRP_PDS_test_product",
          "type": "CUSTOM"
        }, {
          "id": 207015,
          "name": "[Global|NL] Open PopUp",
          "type": "CUSTOM"
        }, {
          "id": 207016,
          "name": "[GG|NL] QuickAdd2Cart_test_product",
          "type": "CUSTOM"
        }, {
          "id": 207017,
          "name": "[Global|NL] Order_test_product",
          "type": "CUSTOM"
        }, {
          "id": 211092,
          "name": "[Global|NL] Number of purchased items with discount (deprecated)",
          "type": "CUSTOM"
        }, {
          "id": 211093,
          "name": "[Global|NL] Value of total savings (deprecated)",
          "type": "CUSTOM"
        }, {
          "id": 211094,
          "name": "[Global|NL] Order discount code (deprecated)",
          "type": "CUSTOM"
        }, {
          "id": 211095,
          "name": "[GLobal|NL] Order reduced product (deprecated)",
          "type": "CUSTOM"
        }, {
          "id": 211096,
          "name": "[GLobal|NL] Order value <45€ (deprecated)",
          "type": "CUSTOM"
        }, {
          "id": 211097,
          "name": "[GLobal|NL] Order value 45€-85€ (deprecated)",
          "type": "CUSTOM"
        }, {
          "id": 211098,
          "name": "[GLobal|NL] Order value >85€ (deprecated)",
          "type": "CUSTOM"
        }, {
          "id": 211823,
          "name": "[T10|NL] Use_Filter_All",
          "type": "CUSTOM"
        }, {
          "id": 211824,
          "name": "[T10|NL] Use_Filter_POP",
          "type": "CUSTOM"
        }, {
          "id": 211826,
          "name": "[T10|NL] Use_Filter_SRP",
          "type": "CUSTOM"
        }, {
          "id": 212367,
          "name": "[Global|NL] Basket-changeamount (deprecated)",
          "type": "CUSTOM"
        }, {
          "id": 215334,
          "name": "[Global|NL] Click header hamburger icon",
          "type": "CUSTOM"
        }, {
          "id": 215335,
          "name": "[Global|NL] Click header flyer icon",
          "type": "CUSTOM"
        }, {
          "id": 215336,
          "name": "[Global|NL] Click header login icon",
          "type": "CUSTOM"
        }, {
          "id": 215337,
          "name": "[Global|NL] Click header newsletter icon",
          "type": "CUSTOM"
        }, {
          "id": 216364,
          "name": "[Global|NL] Click header cart icon",
          "type": "CUSTOM"
        }, {
          "id": 217907,
          "name": "[T11|NL] Click Quick Add2Cart_All",
          "type": "CUSTOM"
        }, {
          "id": 221854,
          "name": "[GG|NL] CTR",
          "type": "CUSTOM"
        }, {
          "id": 221855,
          "name": "[Global|NL] Click_Recos",
          "type": "CUSTOM"
        }, {
          "id": 221857,
          "name": "[Global|NL] Click_Continue_Shopping",
          "type": "CUSTOM"
        }, {
          "id": 221858,
          "name": "[Global|NL] Click_X",
          "type": "CUSTOM"
        }, {
          "id": 221859,
          "name": "[Global|NL] Overlay_QuickAdd2Cart",
          "type": "CUSTOM"
        }, {
          "id": 221860,
          "name": "[Global|NL] Click_To_Checkout",
          "type": "CUSTOM"
        }, {
          "id": 221871,
          "name": "[GG|NL] Order_gross_old",
          "type": "CUSTOM"
        }, {
          "id": 225853,
          "name": "[Global|NL] Leave basketpage",
          "type": "CUSTOM"
        }, {
          "id": 226447,
          "name": "[Global|NL ] POP_PDS_test_product",
          "type": "CUSTOM"
        }, {
          "id": 226448,
          "name": "[Global|NL ] SRP_PDS_test_product",
          "type": "CUSTOM"
        }, {
          "id": 226449,
          "name": "[Global|NL ] Open PopUp",
          "type": "CUSTOM"
        }, {
          "id": 226450,
          "name": "[Global|NL ] Add2Cart_test_product",
          "type": "CUSTOM"
        }, {
          "id": 226452,
          "name": "[Global|NL ] Order_test_product",
          "type": "CUSTOM"
        }, {
          "id": 227119,
          "name": "[Global|NL] Add2Cart_reduced product",
          "type": "CUSTOM"
        }, {
          "id": 227120,
          "name": "[Global|NL] Add2Cart Saving <5€",
          "type": "CUSTOM"
        }, {
          "id": 227121,
          "name": "[Global|NL] Add2Cart Saving >10€",
          "type": "CUSTOM"
        }, {
          "id": 227123,
          "name": "[Global|NL] Add2Cart Saving 5-10€",
          "type": "CUSTOM"
        }, {
          "id": 227183,
          "name": "[GLobal|NL ] Order reduced product (deprecated)",
          "type": "CUSTOM"
        }, {
          "id": 227184,
          "name": "[Global|NL ] Number of purchased items with discount (deprecated)",
          "type": "CUSTOM"
        }, {
          "id": 232116,
          "name": "[Global|NL] Order_Scarcity product",
          "type": "CUSTOM"
        }, {
          "id": 232117,
          "name": "[Global|NL] Order Product Quantity_Scarcity product",
          "type": "CUSTOM"
        }, {
          "id": 232118,
          "name": "[Global|NL]  Leave_basketpage",
          "type": "CUSTOM"
        }, {
          "id": 233055,
          "name": "[GG|NL] Order **not to use**",
          "type": "CUSTOM"
        }, {
          "id": 233056,
          "name": "[GG|NL] Order Product Quantity **not to use**",
          "type": "CUSTOM"
        }, {
          "id": 233057,
          "name": "[GG|NL] Order DataLayer_old",
          "type": "CUSTOM"
        }, {
          "id": 233058,
          "name": "[GG|NL] Order Product Quantity DataLayer_old",
          "type": "CUSTOM"
        }, {
          "id": 234226,
          "name": "[Global|T14|NL] Click Login",
          "type": "CUSTOM"
        }, {
          "id": 234227,
          "name": "[Global|T14|NL] Click Create Account",
          "type": "CUSTOM"
        }, {
          "id": 234228,
          "name": "[Global|T14|NL] Click My Account",
          "type": "CUSTOM"
        }, {
          "id": 234229,
          "name": "[Global|T14|NL] Click Logout",
          "type": "CUSTOM"
        }, {
          "id": 234230,
          "name": "[Global|T14|NL] Click My Orders",
          "type": "CUSTOM"
        }, {
          "id": 234231,
          "name": "[Global|T14|NL] Click My Data",
          "type": "CUSTOM"
        }, {
          "id": 234232,
          "name": "[Global|T14|NL] Click My Address",
          "type": "CUSTOM"
        }, {
          "id": 234233,
          "name": "[Global|T14|NL] Click Close Icon_Logged Out",
          "type": "CUSTOM"
        }, {
          "id": 234234,
          "name": "[Global|T14|NL] Login Rate_Layer",
          "type": "CUSTOM"
        }, {
          "id": 234235,
          "name": "[Global|T14|NL] Login Rate_All",
          "type": "CUSTOM"
        }, {
          "id": 236341,
          "name": "[T11|NL] Minibasket_Basketpage",
          "type": "CUSTOM"
        }, {
          "id": 236342,
          "name": "[T11|NL] Minibasket_CheckoutEntry",
          "type": "CUSTOM"
        }, {
          "id": 236343,
          "name": "[T11|NL] Minibasket_Close",
          "type": "CUSTOM"
        }, {
          "id": 237229,
          "name": "[Global|NL] Rating PDP",
          "type": "CUSTOM"
        }, {
          "id": 237230,
          "name": "[Global|NL] PDP Click Rating",
          "type": "CUSTOM"
        }, {
          "id": 237232,
          "name": "[Global|NL] Add2Cart Rating product",
          "type": "CUSTOM"
        }, {
          "id": 237233,
          "name": "[Global|NL] Order rating product",
          "type": "CUSTOM"
        }, {
          "id": 237234,
          "name": "[Global|NL] Click rating Accordion",
          "type": "CUSTOM"
        }, {
          "id": 237241,
          "name": "[Global|NL] Click Product Grid Rating",
          "type": "CUSTOM"
        }, {
          "id": 238201,
          "name": "[Global|T23|NL]  Click_Navigation_ArrowForward",
          "type": "CUSTOM"
        }, {
          "id": 238202,
          "name": "[Global|T23|NL]  Click_Navigation_ArrowBackward",
          "type": "CUSTOM"
        }, {
          "id": 238203,
          "name": "[Global|T23|NL]  Click_Navigation_Category",
          "type": "CUSTOM"
        }, {
          "id": 238204,
          "name": "[Global|T23|NL]  PDP_Navigation",
          "type": "CUSTOM"
        }, {
          "id": 238205,
          "name": "[Global|T23|NL]  ClicksToPDP",
          "type": "CUSTOM"
        }, {
          "id": 238206,
          "name": "[Global|T23|NL]  TimeToPDP",
          "type": "CUSTOM"
        }, {
          "id": 238207,
          "name": "[Global|T23|NL]  Click_Navigation",
          "type": "CUSTOM"
        }, {
          "id": 238208,
          "name": "[Global|T23|NL]  Click_Navigation_Subcategory",
          "type": "CUSTOM"
        }, {
          "id": 238209,
          "name": "[Global|T23|NL]  Click_Navigation_Teaser",
          "type": "CUSTOM"
        }, {
          "id": 238210,
          "name": "[Global|T23|NL]  Click_Navigation_Close",
          "type": "CUSTOM"
        }, {
          "id": 238211,
          "name": "[Global|T23|NL]  Survey Response",
          "type": "CUSTOM"
        }, {
          "id": 238212,
          "name": "[Global|T23|NL]  Q5 “negativ”",
          "type": "CUSTOM"
        }, {
          "id": 238213,
          "name": "[Global|T23|NL]  Q4 “eher negativ”",
          "type": "CUSTOM"
        }, {
          "id": 238214,
          "name": "[Global|T23|NL]  Q3 „neutral”",
          "type": "CUSTOM"
        }, {
          "id": 238215,
          "name": "[Global|T23|NL]  Q2 „Eher positiv”",
          "type": "CUSTOM"
        }, {
          "id": 238216,
          "name": "[Global|T23|NL]  Q1 „positiv”",
          "type": "CUSTOM"
        }, {
          "id": 239085,
          "name": "[PT14|NL] Click X",
          "type": "CUSTOM"
        }, {
          "id": 239086,
          "name": "[PT14|NL] Click_Image",
          "type": "CUSTOM"
        }, {
          "id": 239087,
          "name": "[PT14|NL] Click_to_Cart",
          "type": "CUSTOM"
        }, {
          "id": 240781,
          "name": "[Global|T19|NL] All_CheckoutEntry",
          "type": "CUSTOM"
        }, {
          "id": 240782,
          "name": "[Global|T19|NL] Order ≥ Threshold",
          "type": "CUSTOM"
        }, {
          "id": 240783,
          "name": "[Global|T19|NL]  Click X",
          "type": "CUSTOM"
        }, {
          "id": 240785,
          "name": "[Global|T19|NL] Overlay to basket",
          "type": "CUSTOM"
        }, {
          "id": 240786,
          "name": "[Global|T19|NL] Overlay to checkout",
          "type": "CUSTOM"
        }, {
          "id": 242761,
          "name": "[Global|T21|NL] Add2Cart Variant",
          "type": "CUSTOM"
        }, {
          "id": 242762,
          "name": "[Global|T21|NL] Add2Cart Non-Variant",
          "type": "CUSTOM"
        }, {
          "id": 242763,
          "name": "[Global|T21|NL] Add2Cart default",
          "type": "CUSTOM"
        }, {
          "id": 242764,
          "name": "[Global|T21|NL] Add2Cart sticky",
          "type": "CUSTOM"
        }, {
          "id": 244197,
          "name": "[T26|NL] Click Product Load",
          "type": "CUSTOM"
        }, {
          "id": 244199,
          "name": "[T26|NL] Less than 18 products",
          "type": "CUSTOM"
        }, {
          "id": 244200,
          "name": "[T26|NL] Scroll_Pagination",
          "type": "CUSTOM"
        }, {
          "id": 244201,
          "name": "[T26|NL] Order_Scroll_Pagination",
          "type": "CUSTOM"
        }, {
          "id": 244202,
          "name": "[T26|NL] Add2Cart_Scroll_Pagination",
          "type": "CUSTOM"
        }, {
          "id": 244203,
          "name": "[T26|NL] PDP_Scroll_Pagination",
          "type": "CUSTOM"
        }, {
          "id": 244204,
          "name": "[T26|NL] CTR_Scroll_Pagination",
          "type": "CUSTOM"
        }, {
          "id": 245220,
          "name": "[PT20|NL] Brand PDP",
          "type": "CUSTOM"
        }, {
          "id": 245221,
          "name": "[PT20|NL] Lidl brands Order",
          "type": "CUSTOM"
        }, {
          "id": 245222,
          "name": "[PT20|NL] Perso Brands Shown",
          "type": "CUSTOM"
        }, {
          "id": 245223,
          "name": "[PT20|NL] Perso Order",
          "type": "CUSTOM"
        }, {
          "id": 245225,
          "name": "[PT20|NL] Perso Add2Cart",
          "type": "CUSTOM"
        }, {
          "id": 245226,
          "name": "[PT20|NL] Brand Add2Cart",
          "type": "CUSTOM"
        }, {
          "id": 245227,
          "name": "[PT20|NL] Click brand ribbon",
          "type": "CUSTOM"
        }, {
          "id": 245228,
          "name": "[PT20|NL] Click Category Ribbon",
          "type": "CUSTOM"
        }, {
          "id": 245229,
          "name": "[PT20|NL] Click Spotlight",
          "type": "CUSTOM"
        }, {
          "id": 245230,
          "name": "[PT20|NL] Thema Spotlight",
          "type": "CUSTOM"
        }, {
          "id": 268918,
          "name": "[Global|NL|PT22] Add2Cart_wishlistbasket",
          "type": "CUSTOM"
        }, {
          "id": 268920,
          "name": "[Global|NL|PT22] Wishlist",
          "type": "CUSTOM"
        }, {
          "id": 268921,
          "name": "[Global|NL|PT22] Add2Cart_wishlisttab",
          "type": "CUSTOM"
        }, {
          "id": 268922,
          "name": "[Global|NL|PT22] Order wishlist product",
          "type": "CUSTOM"
        }, {
          "id": 269032,
          "name": "[PT20|NL] Brands Shown",
          "type": "CUSTOM"
        }, {
          "id": 269325,
          "name": "[Global|NL|PT22] Add2Cart_wishlist",
          "type": "CUSTOM"
        }, {
          "id": 270011,
          "name": "[T29|NL] Add2Cart Reco Detail Page",
          "type": "CUSTOM"
        }, {
          "id": 270012,
          "name": "[T29|NL] Add2Cart Reco Detail Page Product",
          "type": "CUSTOM"
        }, {
          "id": 270014,
          "name": "[T29|NL] Order Reco Detail Page",
          "type": "CUSTOM"
        }, {
          "id": 270015,
          "name": "[T29|NL] Order Reco Detail Page Product",
          "type": "CUSTOM"
        }, {
          "id": 270016,
          "name": "[T29|NL] Aufruf RDP",
          "type": "CUSTOM"
        }, {
          "id": 270017,
          "name": "[T29|NL] Exit Rate RDP",
          "type": "CUSTOM"
        }, {
          "id": 270858,
          "name": "[PT21|NL] Ribbon_Shown",
          "type": "CUSTOM"
        }, {
          "id": 270859,
          "name": "[PT21|NL] Perso Categories Shown",
          "type": "CUSTOM"
        }, {
          "id": 270860,
          "name": "[PT21|NL] Perso Order",
          "type": "CUSTOM"
        }, {
          "id": 270861,
          "name": "[PT21|NL] Perso Add2Cart",
          "type": "CUSTOM"
        }, {
          "id": 270862,
          "name": "[PT21|NL] Perso POP",
          "type": "CUSTOM"
        }, {
          "id": 270863,
          "name": "[PT21|NL] Click subnavigation",
          "type": "CUSTOM"
        }, {
          "id": 271160,
          "name": "[Global|T28|NL] Click X",
          "type": "CUSTOM"
        }, {
          "id": 271161,
          "name": "[Global|T28|NL] Overlay to checkout",
          "type": "CUSTOM"
        }, {
          "id": 271162,
          "name": "[Global|T28|NL] Order ≥ Threshold",
          "type": "CUSTOM"
        }, {
          "id": 271163,
          "name": "[Global|T28|NL] All_CheckoutEntry",
          "type": "CUSTOM"
        }, {
          "id": 271311,
          "name": "[T31|NL] Basketpage_Remove_TopRated",
          "type": "CUSTOM"
        }, {
          "id": 271312,
          "name": "[T31|NL] OOP_Remove_TopRated",
          "type": "CUSTOM"
        }, {
          "id": 271313,
          "name": "[T31|NL] Basketpage_Remove_NonTopRated",
          "type": "CUSTOM"
        }, {
          "id": 271314,
          "name": "[T31|NL] OOP_Remove_NonTopRated",
          "type": "CUSTOM"
        }, {
          "id": 273256,
          "name": "[Global|NL] Leave basket",
          "type": "CUSTOM"
        }, {
          "id": 273257,
          "name": "[Global|NL] Click Basket Reco",
          "type": "CUSTOM"
        }, {
          "id": 273258,
          "name": "[Global|NL] Add2Cart Basket Reco",
          "type": "CUSTOM"
        }, {
          "id": 273259,
          "name": "[Global|NL] Order Basket Reco",
          "type": "CUSTOM"
        }, {
          "id": 276684,
          "name": "[PT24|NL] POP_PDP",
          "type": "CUSTOM"
        }, {
          "id": 276685,
          "name": "[PT24|NL] Click USP element",
          "type": "CUSTOM"
        }, {
          "id": 276688,
          "name": "[PT24|NL] USP gridbox shown",
          "type": "CUSTOM"
        }, {
          "id": 277354,
          "name": "[Global|T38|NL] Login Rate_Layer",
          "type": "CUSTOM"
        }, {
          "id": 277355,
          "name": "[Global|T38|NL] Login Rate_All",
          "type": "CUSTOM"
        }, {
          "id": 277356,
          "name": "[Global|T38|NL] Registration Rate_All",
          "type": "CUSTOM"
        }, {
          "id": 281036,
          "name": "[Global|T37|NL] Rating Seen",
          "type": "CUSTOM"
        }, {
          "id": 281037,
          "name": "[Global|T37|NL] Change sorting",
          "type": "CUSTOM"
        }, {
          "id": 281038,
          "name": "[Global|T37|NL] Click helpful review",
          "type": "CUSTOM"
        }, {
          "id": 282221,
          "name": "[T41|NL] Add2Cart Reco Detail Page",
          "type": "CUSTOM"
        }, {
          "id": 282222,
          "name": "[T41|NL] Add2Cart Reco Detail Page Product",
          "type": "CUSTOM"
        }, {
          "id": 282223,
          "name": "[T41|NL] Order Reco Detail Page",
          "type": "CUSTOM"
        }, {
          "id": 282224,
          "name": "[T41|NL] Order Reco Detail Page Product",
          "type": "CUSTOM"
        }, {
          "id": 282225,
          "name": "[T41|NL] Aufruf RDP",
          "type": "CUSTOM"
        }, {
          "id": 282226,
          "name": "[T41|NL] Exit Rate RDP",
          "type": "CUSTOM"
        }, {
          "id": 286156,
          "name": "[T44|NL] Basket amount",
          "type": "CUSTOM"
        }, {
          "id": 286157,
          "name": "[T44|NL] Click bundle item",
          "type": "CUSTOM"
        }, {
          "id": 286158,
          "name": "[T44|NL] Add2Cart Bundle",
          "type": "CUSTOM"
        }, {
          "id": 286218,
          "name": "[T44|NL] Add2Cart_All",
          "type": "CUSTOM"
        }, {
          "id": 286425,
          "name": "[Global|T46|NL] All_CheckoutEntry_old",
          "type": "CUSTOM"
        }, {
          "id": 286426,
          "name": "[Global|T46|NL] Click X",
          "type": "CUSTOM"
        }, {
          "id": 286427,
          "name": "[Global|T46|NL] Order ≥ Threshold",
          "type": "CUSTOM"
        }, {
          "id": 286428,
          "name": "[Global|T46|NL] Overlay to checkout",
          "type": "CUSTOM"
        }, {
          "id": 287329,
          "name": "[Global|T39|NL] Use Filter",
          "type": "CUSTOM"
        }, {
          "id": 288541,
          "name": "[PT26|NL] Click Delete",
          "type": "CUSTOM"
        }, {
          "id": 288542,
          "name": "[PT26|NL] Click Yes",
          "type": "CUSTOM"
        }, {
          "id": 288543,
          "name": "[PT26|NL] Click No",
          "type": "CUSTOM"
        }, {
          "id": 288544,
          "name": "[PT26|NL] Order Sale",
          "type": "CUSTOM"
        }, {
          "id": 288545,
          "name": "[PT26|NL] Add2Cart Fashion",
          "type": "CUSTOM"
        }, {
          "id": 288546,
          "name": "[PT26|NL] Order Fashion",
          "type": "CUSTOM"
        }, {
          "id": 288547,
          "name": "[PT26|NL] Filter Shown Sale",
          "type": "CUSTOM"
        }, {
          "id": 288548,
          "name": "[PT26|NL] Add2Cart Sale",
          "type": "CUSTOM"
        }, {
          "id": 288549,
          "name": "[PT26|NL] Filter Shown Fashion",
          "type": "CUSTOM"
        }, {
          "id": 293402,
          "name": "[PT28|NL] Newsletter Subscription",
          "type": "CUSTOM"
        }, {
          "id": 293403,
          "name": "[PT28|NL] Exit Rate",
          "type": "CUSTOM"
        }, {
          "id": 293404,
          "name": "[PT28|NL] Close Layer",
          "type": "CUSTOM"
        }, {
          "id": 305861,
          "name": "[Global|T48|NL] Discount/gift cart accepted",
          "type": "CUSTOM"
        }, {
          "id": 305862,
          "name": "[Global|T48|NL] Exit Checkout",
          "type": "CUSTOM"
        }, {
          "id": 305863,
          "name": "[Global|T48|NL] Click Anchor",
          "type": "CUSTOM"
        }, {
          "id": 308632,
          "name": "[T45|NL] Order margin ribbon / revenue",
          "type": "CUSTOM"
        }, {
          "id": 308633,
          "name": "[T45|NL] Click margin ribbon",
          "type": "CUSTOM"
        }, {
          "id": 308634,
          "name": "[T45|NL] Add2cart margin ribbon",
          "type": "CUSTOM"
        }, {
          "id": 309281,
          "name": "[T50|NL] Bounce Rate",
          "type": "CUSTOM"
        }, {
          "id": 309282,
          "name": "[T50|NL] Click Header",
          "type": "CUSTOM"
        }, {
          "id": 309283,
          "name": "[T50|NL] Click Basket icon",
          "type": "CUSTOM"
        }, {
          "id": 309284,
          "name": "[T50|NL] Click Menu",
          "type": "CUSTOM"
        }, {
          "id": 309285,
          "name": "[T50|NL] Enter Flyer LP",
          "type": "CUSTOM"
        }, {
          "id": 309286,
          "name": "[T50|NL] Click My account",
          "type": "CUSTOM"
        }, {
          "id": 309287,
          "name": "[T50|NL] Click Onlineshop tab",
          "type": "CUSTOM"
        }, {
          "id": 309288,
          "name": "[T50|NL] Click Retail tab",
          "type": "CUSTOM"
        }, {
          "id": 309289,
          "name": "[T50|NL] Homepage",
          "type": "CUSTOM"
        }, {
          "id": 309290,
          "name": "[T50|NL] Click Navi",
          "type": "CUSTOM"
        }, {
          "id": 309291,
          "name": "[T50|NL] Wishlist",
          "type": "CUSTOM"
        }, {
          "id": 309798,
          "name": "[T49|NL] Bounce Rate",
          "type": "CUSTOM"
        }, {
          "id": 309799,
          "name": "[T49|NL] Click Header",
          "type": "CUSTOM"
        }, {
          "id": 309800,
          "name": "[T49|NL] Click Bottom bar",
          "type": "CUSTOM"
        }, {
          "id": 309801,
          "name": "[T49|NL] Click Basket icon",
          "type": "CUSTOM"
        }, {
          "id": 309802,
          "name": "[T49|NL] Enter Flyer LP",
          "type": "CUSTOM"
        }, {
          "id": 309803,
          "name": "[T49|NL] Click My account",
          "type": "CUSTOM"
        }, {
          "id": 309804,
          "name": "[T49|NL] Click Menu",
          "type": "CUSTOM"
        }, {
          "id": 309805,
          "name": "[T49|NL] Click Onlineshop tab",
          "type": "CUSTOM"
        }, {
          "id": 309806,
          "name": "[T49|NL] Click Retail tab",
          "type": "CUSTOM"
        }, {
          "id": 309807,
          "name": "[T49|NL] Homepage",
          "type": "CUSTOM"
        }, {
          "id": 309808,
          "name": "[T49|NL] Wishlist",
          "type": "CUSTOM"
        }, {
          "id": 310490,
          "name": "[T50|NL] Navi to POP",
          "type": "CUSTOM"
        }, {
          "id": 310491,
          "name": "[T50|NL] Navi to PDP",
          "type": "CUSTOM"
        }, {
          "id": 311794,
          "name": "[Global|T57|NL] PDP > 6 Ratings",
          "type": "CUSTOM"
        }, {
          "id": 311795,
          "name": "[Global|T57|NL] Use Rating Search",
          "type": "CUSTOM"
        }, {
          "id": 311796,
          "name": "[Global|T57|NL] PDP Rating seen",
          "type": "CUSTOM"
        }, {
          "id": 311797,
          "name": "[Global|T57|NL] PDP > 6 Ratings + Rating seen",
          "type": "CUSTOM"
        }, {
          "id": 320078,
          "name": "[CT04|NL] Click Hero Stage",
          "type": "CUSTOM"
        }, {
          "id": 320079,
          "name": "[CT04|NL] Click Category Slider",
          "type": "CUSTOM"
        }, {
          "id": 320134,
          "name": "[CT04|NL] Cick Flyer Teaser",
          "type": "CUSTOM"
        }, {
          "id": 320721,
          "name": "[T36|NL] Select Afterpay",
          "type": "CUSTOM"
        }, {
          "id": 324113,
          "name": "[T61|NL] Search click",
          "type": "CUSTOM"
        }, {
          "id": 329799,
          "name": "[NL|T13.1] Click Afterpay Hint",
          "type": "CUSTOM"
        }, {
          "id": 331887,
          "name": "[T65|NL] Exit Rate ",
          "type": "CUSTOM"
        }, {
          "id": 331899,
          "name": "[T65|NL] Click Product Load",
          "type": "CUSTOM"
        }, {
          "id": 331913,
          "name": "[T65|NL] Scroll_Pagination",
          "type": "CUSTOM"
        }, {
          "id": 331916,
          "name": "[T65|NL]  Click Lidl Insider Teaser",
          "type": "CUSTOM"
        }, {
          "id": 332547,
          "name": "[T64|NL] Click product tile",
          "type": "CUSTOM"
        }, {
          "id": 332548,
          "name": "[T64|NL] Tile to Add2Cart",
          "type": "CUSTOM"
        }, {
          "id": 332549,
          "name": "[T64|NL] Click tile SRP",
          "type": "CUSTOM"
        }, {
          "id": 332550,
          "name": "[T64|NL] Tile to Add2Cart SRP",
          "type": "CUSTOM"
        }, {
          "id": 332551,
          "name": "[T64|NL] Click tile POP",
          "type": "CUSTOM"
        }, {
          "id": 332552,
          "name": "[T64|NL] Tile to Add2Cart POP",
          "type": "CUSTOM"
        }, {
          "id": 332553,
          "name": "[T64|NL] Show more",
          "type": "CUSTOM"
        }, {
          "id": 332554,
          "name": "[T64|NL] PDP change Variation",
          "type": "CUSTOM"
        }, {
          "id": 332972,
          "name": "[T64|NL] Scroll last tile",
          "type": "CUSTOM"
        }, {
          "id": 333440,
          "name": "[T64|NL] PLP landing page",
          "type": "CUSTOM"
        }, {
          "id": 333478,
          "name": "[T64|NL] Variation missmatch",
          "type": "CUSTOM"
        }, {
          "id": 334618,
          "name": "[T64|NL] Exit Rate PLP",
          "type": "CUSTOM"
        }, {
          "id": 334619,
          "name": "[T64|NL] Change sorting PLP",
          "type": "CUSTOM"
        }, {
          "id": 334620,
          "name": "[T64|NL] Filter usage PLP",
          "type": "CUSTOM"
        }, {
          "id": 334621,
          "name": "[T64|NL] Click Category POP",
          "type": "CUSTOM"
        }, {
          "id": 334622,
          "name": "[T64|NL] More Menu Click PLP",
          "type": "CUSTOM"
        }, {
          "id": 334623,
          "name": "[T64|Nl] Banner Visible PLP",
          "type": "CUSTOM"
        }, {
          "id": 334624,
          "name": "[T64|NL] Banner Click PLP",
          "type": "CUSTOM"
        }, {
          "id": 334625,
          "name": "[T64|NL] Advisor Visible PLP",
          "type": "CUSTOM"
        }, {
          "id": 334626,
          "name": "[T64|NL] Click Advisor PLP",
          "type": "CUSTOM"
        }, {
          "id": 337378,
          "name": "[T65|NL] Product tiles seen",
          "type": "CUSTOM"
        }, {
          "id": 339682,
          "name": "[Global|T69|NL] Click New Teaser",
          "type": "CUSTOM"
        }, {
          "id": 339683,
          "name": "[Global|T69|NL] Click Category slider",
          "type": "CUSTOM"
        }, {
          "id": 339684,
          "name": "[Global|T69|NL] Click other categories",
          "type": "CUSTOM"
        }, {
          "id": 339685,
          "name": "[Global|T69|NL] Add2Cart New product",
          "type": "CUSTOM"
        }, {
          "id": 339686,
          "name": "[Global|T69|NL] Orders New product",
          "type": "CUSTOM"
        }, {
          "id": 339687,
          "name": "[Global|T69|NL] Add2Cart sale product",
          "type": "CUSTOM"
        }, {
          "id": 339688,
          "name": "[Global|T69|NL] Orders sale product",
          "type": "CUSTOM"
        }, {
          "id": 339689,
          "name": "[Global|T69|NL] Hero stage",
          "type": "CUSTOM"
        }, {
          "id": 339690,
          "name": "[Global|T69|NL] Inspiration teaser",
          "type": "CUSTOM"
        }, {
          "id": 342076,
          "name": "[CT09|NL] Click Any Other Hero Teaser",
          "type": "CUSTOM"
        }, {
          "id": 342077,
          "name": "[CT09|NL] Click Teaser One Keuken",
          "type": "CUSTOM"
        }, {
          "id": 342079,
          "name": "[CT09|NL] Click Teaser Two Huishouden",
          "type": "CUSTOM"
        }, {
          "id": 342080,
          "name": "[CT09|NL] Impression Teaser One Keuken",
          "type": "CUSTOM"
        }, {
          "id": 342081,
          "name": "[CT09|NL] Impression Teaser Two Huishouden",
          "type": "CUSTOM"
        }, {
          "id": 342219,
          "name": "[CT09|NL] Click Teaser One OR Two",
          "type": "CUSTOM"
        }, {
          "id": 351403,
          "name": "[GG|NL] Add2Cart",
          "type": "CUSTOM"
        }, {
          "id": 351404,
          "name": "[GG|NL] POP:old",
          "type": "CUSTOM"
        }, {
          "id": 351405,
          "name": "[GG|NL] Order",
          "type": "CUSTOM"
        }, {
          "id": 351406,
          "name": "[GG|NL] Order Product Quantity",
          "type": "CUSTOM"
        }, {
          "id": 351510,
          "name": "[CT11|NL] Click burgermenu",
          "type": "CUSTOM"
        }, {
          "id": 361244,
          "name": "[T72|NL] Order ≥ Threshold",
          "type": "CUSTOM"
        }, {
          "id": 361245,
          "name": "[T72|NL] Cart Overlay_CheckoutEntry",
          "type": "CUSTOM"
        }, {
          "id": 361246,
          "name": "[T72|NL] Cart Overlay_Continue Shopping",
          "type": "CUSTOM"
        }, {
          "id": 361247,
          "name": "[T72|NL] Cart Overlay_Recos",
          "type": "CUSTOM"
        }, {
          "id": 361248,
          "name": "[T72|NL] Close Cart Overlay",
          "type": "CUSTOM"
        }, {
          "id": 363529,
          "name": "[T71.1|NL] No Search Result Pages",
          "type": "CUSTOM"
        }, {
          "id": 363530,
          "name": "[T83|NL] Click Product on Search Page",
          "type": "CUSTOM"
        }, {
          "id": 363531,
          "name": "[T83|NL] Add2Cart from Search Page",
          "type": "CUSTOM"
        }, {
          "id": 363532,
          "name": "[T83|NL] Order from Search Page",
          "type": "CUSTOM"
        }, {
          "id": 363857,
          "name": "[T83|Global|NL] Mismatch",
          "type": "CUSTOM"
        }, {
          "id": 367112,
          "name": "[GTG|NL] Online Artikel PDP",
          "type": "CUSTOM"
        }, {
          "id": 367113,
          "name": "[GTG|NL] Retail Artikel PDP",
          "type": "CUSTOM"
        }, {
          "id": 367114,
          "name": "[GTG|NL] Online & Retail Artikel PDP",
          "type": "CUSTOM"
        }, {
          "id": 367132,
          "name": "[GTG|NL] Landingpage PDP",
          "type": "CUSTOM"
        }, {
          "id": 367133,
          "name": "[GTG|NL] Landingpage POP",
          "type": "CUSTOM"
        }, {
          "id": 367134,
          "name": "[GTG|NL] Landingpage Startpage",
          "type": "CUSTOM"
        }, {
          "id": 367135,
          "name": "[GTG|NL] Landingpage Prospekt",
          "type": "CUSTOM"
        }, {
          "id": 367136,
          "name": "[GTG|NL] Landingpage Campaign",
          "type": "CUSTOM"
        }, {
          "id": 367137,
          "name": "[GTG|NL] Landingpage SRP",
          "type": "CUSTOM"
        }, {
          "id": 367138,
          "name": "[GTG|NL] Landingpage Store",
          "type": "CUSTOM"
        }, {
          "id": 367139,
          "name": "[GTG|NL] Landingpage Online",
          "type": "CUSTOM"
        }, {
          "id": 371461,
          "name": "[GG|NL] Basketpage_CheckoutEntry",
          "type": "CUSTOM"
        }, {
          "id": 371462,
          "name": "[GG|NL] All_CheckoutEntry",
          "type": "CUSTOM"
        }, {
          "id": 371463,
          "name": "[GG|NL] Checkout Step 1-Login",
          "type": "CUSTOM"
        }, {
          "id": 371464,
          "name": "[GG|NL] Checkout Step 2-Address",
          "type": "CUSTOM"
        }, {
          "id": 371465,
          "name": "[GG|NL] Checkout Step 3-Payment",
          "type": "CUSTOM"
        }, {
          "id": 371466,
          "name": "[GG|NL] Checkout Step 4-Summary",
          "type": "CUSTOM"
        }, {
          "id": 378964,
          "name": "[T83|NL] Loading Time Search Results",
          "type": "CUSTOM"
        }, {
          "id": 382499,
          "name": "[T84|NL] Reco Rate PDP (Filter)",
          "type": "CUSTOM"
        }, {
          "id": 382500,
          "name": "[T84|NL] Scarcity PDP (Filter)",
          "type": "CUSTOM"
        }, {
          "id": 382501,
          "name": "[T84|NL] Reco Rate and Scarcity PDP (Filter)",
          "type": "CUSTOM"
        }, {
          "id": 382502,
          "name": "[T84|NL] Reco Rate Artikel Add2Cart",
          "type": "CUSTOM"
        }, {
          "id": 382503,
          "name": "[T84|NL] Scarcity Artikel Add2Cart",
          "type": "CUSTOM"
        }, {
          "id": 382504,
          "name": "[T84|NL] Reco Rate and Scarcity Add2Cart",
          "type": "CUSTOM"
        }, {
          "id": 382505,
          "name": "[T84|NL] Reco Rate Order",
          "type": "CUSTOM"
        }, {
          "id": 382506,
          "name": "[T84|NL] Scarcity Order",
          "type": "CUSTOM"
        }, {
          "id": 382507,
          "name": "[T84|NL] Reco Rate and Scarcity Order",
          "type": "CUSTOM"
        }, {
          "id": 385563,
          "name": "[GG|NL] POP",
          "type": "CUSTOM"
        }, {
          "id": 386333,
          "name": "[T84|NL] Bestseller Add2Cart",
          "type": "CUSTOM"
        }, {
          "id": 386334,
          "name": "[T84|NL] Bestseller Order",
          "type": "CUSTOM"
        }, {
          "id": 386335,
          "name": "[T84|NL] Bestseller Hint not Loaded",
          "type": "CUSTOM"
        }, {
          "id": 391450,
          "name": "[T14|NL] Add2Cart Test Product",
          "type": "CUSTOM"
        }, {
          "id": 391451,
          "name": "[T14|NL] Order Test Product",
          "type": "CUSTOM"
        }, {
          "id": 394365,
          "name": "[DEBUG|NL] Order",
          "type": "CUSTOM",
          "jsCode": "(function(ID, triggerGoal) {\n\t\t\t\t\t  // Write your conversion code here. Find examples below:\n//\n// triggerGoal();                     → No params\n// triggerGoal(49.99) ;               → With revenue\n// triggerGoal(49.99, { 5: \"Gold\" }); → With revenue and metadata\n\t\t\t\t\t})(394365, (...args) => Kameleoon.API.Goals.processConversion(394365, ...args));"
        }, {
          "id": 396244,
          "name": "[DEBUG|NL] Order 2",
          "type": "CUSTOM",
          "jsCode": "(function(ID, triggerGoal) {\n\t\t\t\t\t  // Write your conversion code here. Find examples below:\n//\n// triggerGoal();                     → No params\n// triggerGoal(49.99) ;               → With revenue\n// triggerGoal(49.99, { 5: \"Gold\" }); → With revenue and metadata\n\t\t\t\t\t})(396244, (...args) => Kameleoon.API.Goals.processConversion(396244, ...args));"
        }, {
          "id": 401297,
          "name": "PDP Product ID Number in Viewport NL",
          "type": "SCROLL",
          "scrollTrackingType": "ELEMENT",
          "selector": ".product-id"
        }, {
          "id": 402404,
          "name": "[T94|NL] description seen",
          "type": "CUSTOM"
        }, {
          "id": 402405,
          "name": "[T94|NL] click description",
          "type": "CUSTOM"
        }, {
          "id": 402406,
          "name": "[T94|NL] rating seen",
          "type": "CUSTOM"
        }, {
          "id": 408406,
          "name": "[T16|NL] Add2Cart Test Product",
          "type": "CUSTOM"
        }, {
          "id": 408407,
          "name": "[T16|NL] Order Test Product",
          "type": "CUSTOM"
        }, {
          "id": 412716,
          "name": "[T107|NL] Click Product on POP",
          "type": "CUSTOM"
        }, {
          "id": 412717,
          "name": "[T107|NL] Add2Cart from POP",
          "type": "CUSTOM"
        }, {
          "id": 412718,
          "name": "[T107|NL] Order from POP",
          "type": "CUSTOM"
        }, {
          "id": 412719,
          "name": "[T107|NL] Loading Time POP Results",
          "type": "CUSTOM"
        }, {
          "id": 412720,
          "name": "[T107|Global|NL] Mismatch",
          "type": "CUSTOM"
        }, {
          "id": 412963,
          "name": "[Global|T108|NL] Click Fast Payment",
          "type": "CUSTOM"
        }, {
          "id": 412964,
          "name": "[Global|T108|NL] Coupon Activation",
          "type": "CUSTOM"
        }],
        "scriptProduceTime": 1776200660661,
        "timeZone": "Europe/Berlin",
        "webExperimentationSetup": true,
        "boLocale": "ENGLISH",
        "graphicalEditorVersion": "v1",
        "isNewEditorEnabled": true,
        "DATA_URL": "https://eu-data.kameleoon.eu",
        "useWideDomainSupport": true,
        "geolocation": true,
        "customIntegrations": [{
          "name": "Custom GA4 Integration",
          "jsCode": "if (!experimentID) return;\nKameleoon.API.Core.runWhenConditionTrue(\n    () => window.dataLayerService,\n    () => {\n        dataLayerService.push({\n            scenarioName: \"Kameleoon_Experiment\",\n            collections: {\n                kameleoon: {\n                    campaignName: experimentName,\n                    campaignId: experimentID,\n                    variationName: variationName,\n                    variationId: variationID\n                }\n        \n            }\n        })\n    }\n);"
        }],
        "globalScript": "\"use strict\";const blockAllExperiments=()=>{if(!/Lidl/.test(window.navigator.userAgent))return;const{Experiments:e,Personalizations:t}=Kameleoon.API,o=e.getAll(),a=t.getAll();o.forEach((({id:t})=>{e.block(t,!0)})),a.forEach((({id:e})=>{t.disable(e)}))},globalDataLayerNextPushScript=()=>{if(!window.kameleoonDatalyerPushNext){window.dataLayerNext=window.dataLayerNext||[];const e=window.dataLayerNext.push;window.dataLayerNext.push=function(...t){return t.forEach((e=>{window.dispatchEvent(new CustomEvent(\"Kameleoon::DataLayerNextPush\",{detail:e}))})),e.apply(this,t)},window.kameleoonDatalyerPushNext=!0}},globalClickThroughRate=()=>{const e=221854;Kameleoon.API.CurrentVisit.landingPageURL!==window.location.href&&Kameleoon.API.Goals.processConversion(e)};function globalMindshift(){const e=88766,t=89358,o=89065,a=89387,n={catalog:/\\/h\\//,search:/\\/q\\/search/,product:/\\/p\\//,cart:/\\/otc\\/cart/,checkout:/\\/otc\\/checkout/,checkoutLogin:/\\/otc\\/checkout\\/flow$/,checkoutAddress:/\\/otc\\/checkout\\/address$/,checkoutPayment:/\\/otc\\/checkout\\/payment$/,checkoutSummary:/\\/otc\\/checkout\\/summary$/,checkoutSuccess:/\\/otc\\/checkout\\/success$/};n.product.test(window.location.pathname)?Kameleoon.API.Goals.processConversion(a):n.cart.test(window.location.pathname)?Kameleoon.API.Goals.processConversion(t):n.checkout.test(window.location.pathname)&&Kameleoon.API.Core.enableSinglePageSupport(),Kameleoon.API.Core.runWhenElementPresent(\".n-header__user-navigation-entry a[data-otc-cart-flyout-icon]\",(([t])=>{Kameleoon.API.Utils.addEventListener(t,\"click\",(()=>{Kameleoon.API.Goals.processConversion(e)}))})),Kameleoon.API.Core.runWhenElementPresent(\"#s-search-input-field\",(([e])=>{e.addEventListener(\"focus\",(()=>{Kameleoon.API.Core.runWhenElementPresent(\".s-search-input__suggestions-wrapper, .s-cx-search-input__suggestions-wrapper\",(([e])=>{Kameleoon.API.Utils.addUniversalClickListener(e,(e=>{e.target.closest(\"a\")&&Kameleoon.API.Goals.processConversion(o)}))}))}))})),Kameleoon.API.Core.runWhenElementPresent('form[action=\"/q/search\"]',(([e])=>{e.addEventListener(\"submit\",(()=>{Kameleoon.API.Goals.processConversion(o)}),!0)}))}const{processConversion:processConversion}=Kameleoon.API.Goals,handleCartCheckoutEntries=e=>{const t=[\"#btn_to_checkout_top\",\"#btn_to_checkout\",\".cart__button__checkout\"];document.location.pathname.includes(\"/otc/cart\")&&(Kameleoon.API.Utils.addUniversalClickListener(document,(({target:o})=>{for(let a=0;a<t.length;a++){const n=t[a];if(o.closest?.(n)){processConversion(e[\"[GG] Basketpage_CheckoutEntry_new\"]);break}}})),window.addEventListener(\"blur\",(()=>{const{activeElement:t}=document;\"IFRAME\"===t.tagName&&t.matches?.(\"#checkout-one-click-button-paypal\")&&processConversion(e[\"[GG] Basketpage_CheckoutEntry_new\"])})))},globalCode=e=>{handleCartCheckoutEntries(e);const t=Kameleoon.API.Data.readLocalData(\"kamLastSeenURL\");document.location.pathname.includes(\"otc/checkout/flow\")&&!t?.includes(\"/otc/checkout/login\")&&processConversion(e[\"[GG] All_CheckoutEntry_new\"]),Kameleoon.API.Data.writeLocalData(\"kamLastSeenURL\",document.location.href)},globalCheckoutEntry=()=>{globalCode({\"[GG] Basketpage_CheckoutEntry_new\":371461,\"[GG] All_CheckoutEntry_new\":371462,\"[GG] Checkout Step 1-Login_new\":371463,\"[GG] Checkout Step 2-Address_new\":371464,\"[GG] Checkout Step 3-Payment_new\":371465,\"[GG] Checkout Step 4-Summary_new\":371466})},nextGlobalGoalsNewScript=(e,t)=>{const{processConversion:o}=Kameleoon.API.Goals;window.addEventListener(\"Kameleoon::DataLayerNextPush\",(({detail:t})=>{\"add_to_cart\"===t.event&&o(e[\"[GG] Add2Cart PDP\"])}),!1);const a=()=>{const e=new Date;return`${String(e.getHours()).padStart(2,\"0\")}:${String(e.getMinutes()).padStart(2,\"0\")}:${String(e.getSeconds()).padStart(2,\"0\")}:${String(e.getMilliseconds()).padStart(3,\"0\")}`},n=async e=>{const{siteCode:t}=Kameleoon.API.Core.getConfiguration(),o=new AbortController,a=JSON.stringify({[e]:{order:!0}}),r=`https://eu-data.kameleoon.io/map/maps?siteCode=${t}&ttlHours=720`;try{const e=await fetch(r,{headers:{\"Content-Type\":\"application/json\"},method:\"POST\",body:a,keepalive:!0,signal:o.signal});if(!e.ok)throw new Error(e.status);Kameleoon.API.Data.writeLocalData(\"mapRetry\",null)}catch(e){Kameleoon.API.Data.writeLocalData(\"mapRetry\",a),setTimeout((()=>n(a)),500)}};if(\"/otc/checkout/success\"===document.location.pathname){const r=Kameleoon.API.Data.readLocalData(\"order_capping_storage\")||[],s=s=>{if(!(e=>\"purchase\"===e.event&&e.ecommerce?.items&&e.ecommerce?.transaction_id&&e.lidldata?.ecommerce?.basketValueNet)(s))return;const{ecommerce:{items:c,transaction_id:l},lidldata:{ecommerce:{basketValueNet:i}}}=s;Kameleoon.API.Data.setCustomData(t,l);const d={name:\"track_transaction_id\",timeStamp:a()};return Kameleoon.API.Data.setCustomData(\"order_event\",JSON.stringify(d)),Kameleoon.API.Core.runWhenElementPresent(\".checkout-layout__container .success-order-summary .success-order-summary__price\",(()=>{const t={name:\"find_success_page_element\",url:document.location.href,timeStamp:a()};Kameleoon.API.Data.setCustomData(\"order_event\",JSON.stringify(t)),Kameleoon.API.Data.retrieveDataFromRemoteSource(l,(({order:t})=>{if(t)return;n(l);const s={name:\"check_transaction_id\",transactionIdFound:r.includes(l),timeStamp:a()};if(Kameleoon.API.Data.setCustomData(\"order_event\",JSON.stringify(s)),r.includes(l))return;const d={name:\"track_order_goal\",transactionId:l,savedTransactionId:r,timeStamp:a()};Kameleoon.API.Data.setCustomData(\"order_event\",JSON.stringify(d)),Kameleoon.API.Data.writeLocalData(\"order_capping_storage\",[...r,l]),o(e[\"[GG] Order\"],i),o(e[\"[GG] Order Product Quantity\"],c.reduce(((e,t)=>e+t.quantity),0))}))})),!0};if(window.dataLayerNext?.some(s))return;Kameleoon.API.Utils.addEventListener(window,\"Kameleoon::DataLayerNextPush\",(({detail:e})=>{s(e)}))}else{const e=Kameleoon.API.Data.readLocalData(\"mapRetry\");e&&n(e)}},goals={\"[GG] Add2Cart PDP\":351403,\"[GG] Order Product Quantity\":351406,\"[GG] Order\":351405},globalNextNew=()=>{nextGlobalGoalsNewScript(goals,\"[CD|NL] Track Bestellnummer\")},pushDataLayerNext=(e,t)=>{e&&(window.dataLayerNext=window.dataLayerNext||[],window.dataLayerNext.push({[e]:t}))},setCustomDataAndPushDataLayerNext=(e,t,o)=>{Kameleoon.API.CurrentVisit.customData[e]!==o&&pushDataLayerNext(t,o),Kameleoon.API.Data.setCustomData(e,o),window.dispatchEvent(new CustomEvent(\"Kameleoon::SetSegment\",{detail:{cdName:e,dlName:t,value:o}}))},getCookie=e=>{const t=new RegExp(`${e}=([^;]+)`),o=document.cookie.match(t);return!!o&&o[1]},returningCartAbandoner=(e,t)=>{Kameleoon.API.Visitor.numberOfVisits>1&&1===Kameleoon.API.CurrentVisit.pageViews&&+getCookie(\"CART_QUANTITY\")>0?setCustomDataAndPushDataLayerNext(e,t,!0):setCustomDataAndPushDataLayerNext(e,t,!1)},globalSegments=()=>{try{returningCartAbandoner(\"Returning Cart Abandoner NL\",\"ReturningCartAbandoner\")}catch(e){console.log(e)}},code=(e,t)=>{const o=window.location.origin+window.location.pathname;(document.location.pathname.includes(\"/h/\")||e.some((e=>o.startsWith(e))))&&Kameleoon.API.Goals.processConversion(t)},globalNewPopGoal=()=>{code([\"https://www.lidl.nl/q/query/alle-producten\"],385563)};blockAllExperiments(),globalDataLayerNextPushScript(),globalClickThroughRate(),globalMindshift(),globalCheckoutEntry(),globalSegments(),globalNextNew(),globalNewPopGoal();",
        "useAudience": true,
        "useSecureCookie": true,
        "track": true,
        "ip": true,
        "trackerExcludedIPRanges": ["185.124.195.*", "193.148.190.*", "193.148.189.*", "193.148.188.*", "94.107.216.*", "144.178.194.*", "85.69.145.*", "195.205.37.*", "195.55.209.*", "31.30.83.*", "213.81.225.*", "185.124.195.76", "40.114.181.*", "52.143.11.*", "77.230.19.*", "217.97.131.*", "90.181.132.*", "213.81.149.*", "89.69.204.10", "185.40.248.10"],
        "useProduct": true,
        "Gatherer": "eyJtYXhWaXNpdElkbGVEdXJhdGlvbiI6MTgwMDAwMCwiZGlyZWN0Tm9uZVJlZmVycmVyT25seUZpcnN0IjpmYWxzZSwiYnJvd3NlcnMiOnsiMCI6eyJuYW1lIjoiQ0hST01FIn0sIjEiOnsibmFtZSI6IkVYUExPUkVSIn0sIjIiOnsibmFtZSI6IkZJUkVGT1gifSwiMyI6eyJuYW1lIjoiU0FGQVJJIn0sIjQiOnsibmFtZSI6Ik9QRVJBIn19LCJvc3MiOnsiMCI6eyJuYW1lIjoiV0lORE9XUyJ9LCIxIjp7Im5hbWUiOiJNQUMifSwiMiI6eyJuYW1lIjoiSU9TIn0sIjMiOnsibmFtZSI6IkxJTlVYIn0sIjQiOnsibmFtZSI6IkFORFJPSUQifX0sIm5vUmVmZXJyZXJQYWdlcyI6W10sInJlZmVycmVycyI6eyIwIjp7Im5hbWUiOiJHb29nbGUgQWRXb3JkcyIsInByaW9yaXR5IjowLCJkZXRlY3Rpb25zIjpbeyJtZXRob2QiOjAsImFuZCI6ZmFsc2UsInBhcmFtZXRlcnMiOiJeaHR0cHM/Oi8vKHd3d1xcLik/Z29vZ2xlKFxcLlthLXpdezIsfSkrL2FjbGsoWz8mI10uKnwpJCJ9LHsibWV0aG9kIjoxLCJhbmQiOmZhbHNlLCJwYXJhbWV0ZXJzIjoiWz8mI11nY2xpZD0ifV19LCIxIjp7Im5hbWUiOiJHb29nbGUgT3JnYW5pYyBTZWFyY2giLCJwcmlvcml0eSI6MCwiZGV0ZWN0aW9ucyI6W3sibWV0aG9kIjowLCJhbmQiOmZhbHNlLCJwYXJhbWV0ZXJzIjoiXmh0dHBzPzovLyh3d3dcXC4pP2dvb2dsZShcXC5bYS16XXsyLH0pKy8oPyFhY2xrfGltZ3JlcykuKj9bPyYjXXE9LiokIn0seyJtZXRob2QiOjAsImFuZCI6ZmFsc2UsInBhcmFtZXRlcnMiOiJeaHR0cHM/Oi8vKHd3d1xcLik/Z29vZ2xlKFxcLlthLXpdezIsfSkrLz8kIn1dfSwiMiI6eyJuYW1lIjoiQmluZyBPcmdhbmljIFNlYXJjaCIsInByaW9yaXR5IjowLCJkZXRlY3Rpb25zIjpbeyJtZXRob2QiOjAsImFuZCI6ZmFsc2UsInBhcmFtZXRlcnMiOiJeaHR0cHM/Oi8vKFthLXpdezIsfVxcLikqYmluZyhcXC5bYS16XXsyLH0pKy8uKj9bPyYjXXE9LiokIn0seyJtZXRob2QiOjAsImFuZCI6ZmFsc2UsInBhcmFtZXRlcnMiOiJeaHR0cHM/Oi8vKFthLXpdezIsfVxcLikqYmluZyhcXC5bYS16XXsyLH0pKy8/JCJ9XX0sIjMiOnsibmFtZSI6IllhaG9vIE9yZ2FuaWMgU2VhcmNoIiwicHJpb3JpdHkiOjAsImRldGVjdGlvbnMiOlt7Im1ldGhvZCI6MCwiYW5kIjpmYWxzZSwicGFyYW1ldGVycyI6Il5odHRwcz86Ly8oW2Etel17Mix9XFwuKSp5YWhvbyhcXC5bYS16XXsyLH0pKy8uKj9bPyYjXXA9LiokIn0seyJtZXRob2QiOjAsImFuZCI6ZmFsc2UsInBhcmFtZXRlcnMiOiJeaHR0cHM/Oi8vKFthLXpdezIsfVxcLikqeWFob28oXFwuW2Etel17Mix9KSsvPyQifV19LCI0Ijp7Im5hbWUiOiJCYWlkdSBPcmdhbmljIFNlYXJjaCIsInByaW9yaXR5IjowLCJkZXRlY3Rpb25zIjpbeyJtZXRob2QiOjAsImFuZCI6ZmFsc2UsInBhcmFtZXRlcnMiOiJeaHR0cHM/Oi8vKFthLXpdezIsfVxcLikqYmFpZHUoXFwuW2Etel17Mix9KSsvLio/Wz8mI113ZD0uKiQifSx7Im1ldGhvZCI6MCwiYW5kIjpmYWxzZSwicGFyYW1ldGVycyI6Il5odHRwcz86Ly8oW2Etel17Mix9XFwuKSpiYWlkdShcXC5bYS16XXsyLH0pKy8/JCJ9XX0sIjYiOnsibmFtZSI6IlNhbXN1bmcgSW50ZXJuZXQiLCJwcmlvcml0eSI6MCwiZGV0ZWN0aW9ucyI6W3sibWV0aG9kIjoyLCJhbmQiOmZhbHNlLCJwYXJhbWV0ZXJzIjoiaWYobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvU0FNU1VOR3xTYW1zdW5nfFNHSC1bSXxOfFRdfEdULVtJfE5dfFNNLVtOfFB8VHxaXXxTSFYtRXxTQ0gtW0l8SnxSfFNdfFNQSC1ML2kpKSB7XG4gICAgcmV0dXJuIHRydWU7XG59In1dfX0sImtleVBhZ2VzIjp7fSwiY3VzdG9tRGF0YSI6eyIwIjp7Im1ldGhvZCI6IkNMSUVOVCIsIm5hbWUiOiJbTGlkbHxOTHxSaWJib25dIE9yZGVyX0lEIiwiZm9ybWF0IjotMSwic2NvcGUiOiJWSVNJVCIsInR5cGUiOiJMSVNUIn0sIjEiOnsibWV0aG9kIjoiQ0xJRU5UIiwibmFtZSI6Im9yZGVySWQiLCJmb3JtYXQiOjAsInNjb3BlIjoiVklTSVRPUiIsInR5cGUiOiJVTklRVUUifSwiMiI6eyJtZXRob2QiOiJDTElFTlQiLCJuYW1lIjoiW0dsb2JhbHxUMjN8TkxdICBDRCBwb3NpdGl2ZSBmZWVkYmFjayIsImZvcm1hdCI6LTEsInNjb3BlIjoiVklTSVRPUiIsInR5cGUiOiJVTklRVUUifSwiMyI6eyJtZXRob2QiOiJDTElFTlQiLCJuYW1lIjoiW0dsb2JhbHxUMjN8TkxdICBDRCBuZWdhdGl2ZSBmZWVkYmFjayIsImZvcm1hdCI6LTEsInNjb3BlIjoiVklTSVRPUiIsInR5cGUiOiJVTklRVUUifSwiNCI6eyJtZXRob2QiOiJDTElFTlQiLCJuYW1lIjoiUmV0dXJuaW5nIENhcnQgQWJhbmRvbmVyIE5MIiwiZm9ybWF0IjotMiwic2NvcGUiOiJWSVNJVCIsInR5cGUiOiJVTklRVUUifSwiNSI6eyJtZXRob2QiOiJDTElFTlQiLCJuYW1lIjoiW05MfFBUMjJdIFdpc2hsaXN0IEl0ZW1zIiwiZm9ybWF0IjotMSwic2NvcGUiOiJWSVNJVE9SIiwidHlwZSI6IlVOSVFVRSIsImxvY2FsT25seSI6dHJ1ZX0sIjYiOnsibWV0aG9kIjoiQ0xJRU5UIiwibmFtZSI6IltBVV1fV2lzaGxpc3RVc2VyIiwiZm9ybWF0IjotMiwic2NvcGUiOiJWSVNJVE9SIiwidHlwZSI6IlVOSVFVRSJ9LCI3Ijp7Im1ldGhvZCI6IkNMSUVOVCIsIm5hbWUiOiJbQVVdX1Vua25vd24iLCJmb3JtYXQiOi0yLCJzY29wZSI6IlZJU0lUT1IiLCJ0eXBlIjoiVU5JUVVFIn0sIjgiOnsibWV0aG9kIjoiQ0xJRU5UIiwibmFtZSI6IltBVV1fTG95YWxDdXN0b21lciIsImZvcm1hdCI6LTIsInNjb3BlIjoiVklTSVRPUiIsInR5cGUiOiJVTklRVUUifSwiOSI6eyJtZXRob2QiOiJDTElFTlQiLCJuYW1lIjoiW0FVXV9BY3RpdmVFeGlzdGluZ0N1c3RvbWVyIiwiZm9ybWF0IjotMiwic2NvcGUiOiJWSVNJVE9SIiwidHlwZSI6IlVOSVFVRSJ9LCIxMCI6eyJtZXRob2QiOiJDTElFTlQiLCJuYW1lIjoiW0FVXV9BY3RpdmVOZXdDdXN0b21lciIsImZvcm1hdCI6LTIsInNjb3BlIjoiVklTSVRPUiIsInR5cGUiOiJVTklRVUUifSwiMTEiOnsibWV0aG9kIjoiQ0xJRU5UIiwibmFtZSI6IltBVV1fT2NjYXNpb25hbEN1c3RvbWVyIiwiZm9ybWF0IjotMiwic2NvcGUiOiJWSVNJVE9SIiwidHlwZSI6IlVOSVFVRSJ9LCIxMiI6eyJtZXRob2QiOiJDTElFTlQiLCJuYW1lIjoiW0FVXV9PbmxpbmVDdXN0b21lciIsImZvcm1hdCI6LTIsInNjb3BlIjoiVklTSVRPUiIsInR5cGUiOiJVTklRVUUifSwiMTMiOnsibWV0aG9kIjoiQ0xJRU5UIiwibmFtZSI6IkthbWVsZW9vbi0xNTc3MzgtTG9naW5fUmF0ZV9MYXllciIsImZvcm1hdCI6LTIsInNjb3BlIjoiVklTSVQiLCJ0eXBlIjoiVU5JUVVFIn0sIjE0Ijp7Im1ldGhvZCI6IkNMSUVOVCIsIm5hbWUiOiJLYW1lbGVvb24tMTU3NzM4LWxvZ2luX1JhdGVfQWxsIiwiZm9ybWF0IjotMiwic2NvcGUiOiJWSVNJVCIsInR5cGUiOiJVTklRVUUifSwiMTUiOnsibWV0aG9kIjoiQ0xJRU5UIiwibmFtZSI6IkthbWVsZW9vbi0xNTc3MzgtUmVnaXN0cmF0aW9uX1JhdGVfQWxsIiwiZm9ybWF0IjotMiwic2NvcGUiOiJWSVNJVCIsInR5cGUiOiJVTklRVUUifSwiMTYiOnsibWV0aG9kIjoiQ0xJRU5UIiwibmFtZSI6IltBVV1fNHVuZDk2JSIsImZvcm1hdCI6LTIsInNjb3BlIjoiVklTSVRPUiIsInR5cGUiOiJVTklRVUUifSwiMTciOnsibWV0aG9kIjoiQ0xJRU5UIiwibmFtZSI6IltBVV1fU3RvcmVTaG9wcGVyIiwiZm9ybWF0IjotMiwic2NvcGUiOiJWSVNJVE9SIiwidHlwZSI6IlVOSVFVRSJ9LCIxOCI6eyJtZXRob2QiOiJDTElFTlQiLCJuYW1lIjoiW0FVXV9IZXNpdGFudFNob3BwZXIiLCJmb3JtYXQiOi0yLCJzY29wZSI6IlZJU0lUT1IiLCJ0eXBlIjoiVU5JUVVFIn0sIjE5Ijp7Im1ldGhvZCI6IkNMSUVOVCIsIm5hbWUiOiJbQVVdX0JhcmdhaW5IdW50ZXIiLCJmb3JtYXQiOi0yLCJzY29wZSI6IlZJU0lUT1IiLCJ0eXBlIjoiVU5JUVVFIn0sIjIwIjp7Im1ldGhvZCI6IkNMSUVOVCIsIm5hbWUiOiJbQVVdX1NvY2lhbFByb29mU2hvcHBlciIsImZvcm1hdCI6LTIsInNjb3BlIjoiVklTSVRPUiIsInR5cGUiOiJVTklRVUUifSwiMjEiOnsibWV0aG9kIjoiQ0xJRU5UIiwibmFtZSI6IltBVV1fTmV3c2xldHRlclN1YnNjcmliZXIiLCJmb3JtYXQiOi0yLCJzY29wZSI6IlZJU0lUT1IiLCJ0eXBlIjoiVU5JUVVFIn0sIjIzIjp7Im1ldGhvZCI6IkNMSUVOVCIsIm5hbWUiOiJbUFQyMF1fQnJhbmRBZmZpbml0eSIsImZvcm1hdCI6LTEsInNjb3BlIjoiVklTSVRPUiIsInR5cGUiOiJMSVNUIn0sIjI0Ijp7Im1ldGhvZCI6IkNMSUVOVCIsIm5hbWUiOiJbUFQyMF1fQ2F0ZWdvcnlBZmZpbml0eSIsImZvcm1hdCI6LTEsInNjb3BlIjoiVklTSVRPUiIsInR5cGUiOiJMSVNUIn0sIjI2Ijp7Im1ldGhvZCI6IkNMSUVOVCIsIm5hbWUiOiIgIEN1c3RvbSBEYXRhIDUwIiwiZm9ybWF0IjotMSwic2NvcGUiOiJWSVNJVCIsInR5cGUiOiJVTklRVUUifSwiMjgiOnsibWV0aG9kIjoiQ0xJRU5UIiwibmFtZSI6IltDRHxOTF0gVHJhY2sgQmVzdGVsbG51bW1lciBvbGQiLCJmb3JtYXQiOi0xLCJzY29wZSI6IlZJU0lUIiwidHlwZSI6IkxJU1QifSwiMjkiOnsibWV0aG9kIjoiQ0xJRU5UIiwibmFtZSI6IltOTHxQVDIyLjJdIFJldGVzdCBXaXNobGlzdCBJdGVtcyIsImZvcm1hdCI6LTEsInNjb3BlIjoiVklTSVRPUiIsInR5cGUiOiJVTklRVUUiLCJsb2NhbE9ubHkiOnRydWV9LCIzMCI6eyJtZXRob2QiOiJDTElFTlQiLCJuYW1lIjoiW0NEfE5MXSBUcmFjayBCZXN0ZWxsbnVtbWVyIiwiZm9ybWF0IjotMSwic2NvcGUiOiJWSVNJVCIsInR5cGUiOiJMSVNUIn0sIjMxIjp7Im1ldGhvZCI6IkNVU1RPTV9DT0RFIiwibmFtZSI6IltDRHxOTF0gdXNlckFnZW50IiwiZm9ybWF0IjotMSwic2NvcGUiOiJWSVNJVCIsInR5cGUiOiJVTklRVUUiLCJjdXN0b21FdmFsQ29kZSI6InJldHVybiB7IFwidmFsdWVcIjogd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQsIFwib3ZlcndyaXRlXCI6IHRydWUgfTsifSwiMzIiOnsibWV0aG9kIjoiQ0xJRU5UIiwibmFtZSI6Im9yZGVyX2V2ZW50IiwiZm9ybWF0IjotMSwic2NvcGUiOiJWSVNJVCIsInR5cGUiOiJMSVNUIn19fQ==",
        "MentalistLearner": {
          "startOfVisitLearner": {
            "beforeMean": [0.005994, 0.08555, 0.09214, 0.001913, 0.0002904, 0, 0.02952, 0, 0.002341, 0.06596, 0.06973, 0.001228, 0.0001738, 0, 0.02694, 0, 0.001407, 0.05172, 0.05175, 0.0008774, 0.0001184, 0, 0.02509, 0, 0.01343, 0.5438, 0.5288, 0.007154, 0.0009835, 0, 0.6306, 0, 1.255, 46820000, 46470000, 5.484, 263400000, 177700000, 0.2225, 0.1975, 0.1799, 4.522, 4.522, 45340000, 64980000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1.487, 1.239, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 704600000, 21.42, 0.3692, 0.003704, 0.1167, 0.1416, 0.002767, 0.0004193, 6.196e-8, 0.03866, 0.173, 1, 1, 0.1668, 0.02011, 0.004404, 0.1264, 0.0006842, 0.6816, 97.08, 0.9367, 0.04272, 0.009409, 0.3872, 0.003774, 0.5548, 0.002159, 634.1, 724.2, 627.2, 885.1, 0],
            "trainingOutputVectorTargetNbUpdates": 64559091,
            "standarizeInputs": true,
            "outputDimension": 1,
            "bias": [-13.44],
            "inputDimension": 101,
            "beforeDeviation": [0.07719, 0.2797, 0.2892, 0.04369, 0.01704, 0, 0.1693, 0, 0.04833, 0.2482, 0.2547, 0.03502, 0.01318, 0, 0.1619, 0, 0.03748, 0.2215, 0.2215, 0.02961, 0.01088, 0, 0.1564, 0, 0.1656, 2.485, 2.254, 0.2257, 0.07748, 0, 6.097, 0, 6.634, 283000000, 230200000, 4.19, 525600000, 310000000, 0.4159, 0.3981, 0.3841, 16.36, 16.36, 243300000, 242000000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7.097, 6.773, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2482000000, 54.29, 0.4826, 0.06075, 0.3211, 0.3487, 0.05253, 0.02047, 0.0002489, 0.1928, 0.3782, 1.954e-13, 1.954e-13, 0.3728, 0.1404, 0.06622, 0.3323, 0.02615, 0.4658, 77.82, 0.2436, 0.2022, 0.09654, 0.4871, 0.06132, 0.497, 0.04642, 492.6, 162.4, 512.3, 133.5, 0],
            "weights": [
              [0.1232, -0.03293, -0.07903, 0.03983, 0.145, -0.147, -0.04235, -0.2118, 0.1481, 0.03502, -0.01038, 0.0758, 0.006976, 0.03383, -0.1044, -0.1182, 0.2097, -0.008503, -0.001517, 0.03995, 0.08412, -0.1092, 0.09611, -0.01137, -0.07824, 0.08649, 0.0129, 0.06308, 0.1114, -0.1285, 0.09777, 0.09948, 0.1221, 0.05128, 0.03079, -0.3968, -0.1289, -0.09765, 0.01319, -0.1003, 0.09292, 0.1454, -0.06166, 0.1893, -0.03912, 0.2041, -0.1023, -0.0471, -0.1912, -0.1933, -0.1959, 0.1047, -0.177, 0.1088, 0.07964, 0.1507, 0.02937, 0.06467, -0.03831, -0.04428, 0.2074, -0.1935, 0.06368, 0.09881, 0.1083, 0.09824, 0.1736, 0.129, -0.2203, -0.06271, -0.04578, -0.1594, 0.2065, 0.044, 0.02341, 0.1542, 0.1858, -0.02979, 0.06072, 0.1495, -0.1747, 0.03232, 0.1355, 0.0899, 0.2468, 0.2073, 0.3078, 0.07426, -0.02537, 0.2293, 0.2093, 0.263, 0.1113, 0.3651, 0.3672, 0.322, -0.1623, 0.02329, 0.0934, -0.02119, 0.1086]
            ],
            "trainingOutputVectorTargetMean": [0]
          },
          "experiments": {},
          "numberTrainingVisits": 64559091,
          "previousVisitsHistoryVectorDimension": 69,
          "targetingSegments": {},
          "visitHistoryVectorDimension": 60
        },
        "MentalistFeatures": {
          "keyWords": [],
          "code": "hk18xsd5ft",
          "languages": [],
          "inputGoalIds": [233055],
          "keyPages": [],
          "experiments": {},
          "customData": [],
          "browsers": [0, 1, 2, 3, 4],
          "oss": [0, 1, 2, 3, 4],
          "numberValuesByCustomDatum": {},
          "maxNumberPreviousVisits": 10,
          "referrers": [0, 1, 2, 3, 4, 5, 7],
          "maxAbsoluteValueAfterStandardization": 5,
          "outputGoalIds": [233055],
          "interests": [],
          "targetingSegments": {},
          "timeZoneGroups": []
        }
      }
    };
  })();
  if (window.kameleoonLightIframe) {
    if (window.kameleoonExternalIFrameLoadedData) {
      window.kameleoonQueue = window.kameleoonQueue || [];
      window.kameleoonQueue.push({
        level: 'IMMEDIATE',
        command: function() {
          Kameleoon.Utils.runProtectedScript(window.kameleoonExternalIFrameLoadedData);
        }
      });
      Kameleoon.Analyst.load();
    }
  } else {
    Kameleoon.Analyst.load();
  }
}