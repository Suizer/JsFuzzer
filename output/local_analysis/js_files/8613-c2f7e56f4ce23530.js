(self.webpackChunk_N_E = self.webpackChunk_N_E || [])
.push([
  [8613], {
    8785: function(e, t, l) {
      "use strict";
      l.d(t, {
        D: function() {
          return a
        }
      });
      var n = l(2265),
        r = l(8003);

      function o() {
        return (o = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var l = arguments[t];
              for (var n in l)({})
                .hasOwnProperty.call(l, n) && (e[n] = l[n])
            }
            return e
          })
          .apply(null, arguments)
      }
      let a = ({
        icon: e,
        onPress: t,
        ...l
      }) => n.createElement(r.default, o({
        buttonType: "primary",
        onPress: t,
        startIcon: e
      }, l));
      a.displayName = "ButtonPrimary"
    },
    6166: function(e, t, l) {
      "use strict";
      l.d(t, {
        Z: function() {
          return ex
        }
      });
      var n = l(2265),
        r = l(4593);
      let o = (...e) => t => {
        for (let l of e) "function" == typeof l ? l(t) : null != l && (l.current = t)
      };

      function a() {
        return (a = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var l = arguments[t];
              for (var n in l)({})
                .hasOwnProperty.call(l, n) && (e[n] = l[n])
            }
            return e
          })
          .apply(null, arguments)
      }
      let i = n.forwardRef((e, t) => {
        let {
          children: l,
          testID: r,
          style: o,
          className: i,
          ...c
        } = e, u = n.Children.toArray(l), p = u.find(d);
        if (p) {
          let e = p.props.children,
            l = u.map(t => t === p ? n.Children.count(e) > 1 ? n.Children.only(null) : n.isValidElement(e) ? e.props.children : null : t);
          return n.createElement(s, a({}, c, {
            "data-testid": r,
            ref: t
          }), n.isValidElement(e) ? n.cloneElement(e, void 0, l) : null)
        }
        return n.createElement(s, a({}, c, {
          "data-testid": r,
          ref: t
        }), l)
      });
      i.displayName = "Slot";
      let s = n.forwardRef((e, t) => {
        let {
          children: l,
          ...r
        } = e;
        return n.isValidElement(l) ? n.cloneElement(l, {
          ... function(e, t) {
            let l = {
              ...t
            };
            for (let n in t) {
              let r = e[n],
                o = t[n];
              /^on[A-Z]/.test(n) ? r && o ? l[n] = (...e) => {
                o(...e), r(...e)
              } : r && (l[n] = r) : "style" === n ? l[n] = {
                ...r,
                ...o
              } : "className" === n && (l[n] = [r, o].filter(Boolean)
                .join(" "))
            }
            return {
              ...e,
              ...l
            }
          }(r, l.props),
          ref: t ? o(t, l.ref) : l.ref
        }) : n.Children.count(l) > 1 ? n.Children.only(null) : null
      });
      s.displayName = "SlotClone";
      let c = ({
        children: e
      }) => n.createElement(n.Fragment, null, e);

      function d(e) {
        return n.isValidElement(e) && e.type === c
      }

      function u() {
        return (u = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var l = arguments[t];
              for (var n in l)({})
                .hasOwnProperty.call(l, n) && (e[n] = l[n])
            }
            return e
          })
          .apply(null, arguments)
      }
      let p = (0, n.forwardRef)(({
        as: e = r.R,
        asChild: t,
        testID: l,
        ...o
      }, a) => {
        let s = t ? i : e;
        return n.createElement(s, u({}, o, {
          "data-testid": l,
          ref: a
        }))
      });
      p.displayName = "Box";
      var f = l(4887);
      let m = e => {
        let {
          children: t
        } = e, l = (0, n.useRef)(document.createElement("div"));
        return (0, n.useEffect)(() => (document.body.appendChild(l.current), () => {
          document.body.removeChild(l.current)
        }), []), (0, f.createPortal)(t, l.current)
      };
      var b = l(3085);
      let h = ({
          onPress: e,
          accessibilityLabel: t
        }) => n.createElement(b.s, {
          onPress: e,
          role: "button",
          "aria-label": t,
          className: "fixed top-0 right-0 left-0 bottom-0"
        }),
        g = () => {};

      function y(e, t) {
        return e.find(e => (0, n.isValidElement)(e) && e.type === t)
      }
      let _ = () => null,
        v = () => null,
        x = "undefined" != typeof navigator && "ReactNative" === navigator.product;

      function w(e, t, l) {
        let n = e + l;
        return t > 0 && (n += t), n
      }

      function E() {
        return (E = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var l = arguments[t];
              for (var n in l)({})
                .hasOwnProperty.call(l, n) && (e[n] = l[n])
            }
            return e
          })
          .apply(null, arguments)
      }
      let C = ({
          active: e,
          placement: t = "bottom",
          popoverContainerProps: l,
          onRequestClose: r,
          children: o,
          testID: a
        }) => {
          let {
            popoverTriggerChildren: i,
            popoverRef: s,
            placementOffsetStyle: c,
            popoverContentElementChildren: d
          } = function(e, t, l, r) {
            let [o, a] = (0, n.useState)(), [i, s] = (0, n.useState)(l), c = (0, n.useRef)(), d = (0, n.useRef)(), u = c.current?.offsetWidth, [p, f] = function(e, t, l, r) {
              let o = y(e, _),
                a = y(e, v);
              if (void 0 === o || void 0 === a) throw Error("Popover must have a PopoverTrigger and a PopoverContent");
              let i = (0, n.cloneElement)(o.props.children, {
                  ref: t
                }),
                s = null;
              return void 0 !== l && (s = (0, n.cloneElement)(a.props.children, {
                "data-anchor-width": l,
                "data-popover-placement": r
              })), [i, s]
            }(n.Children.toArray(e), c, u, i);
            return (0, n.useEffect)(() => {
              let e = e => {
                "Escape" === e.key && r?.()
              };
              return document.addEventListener("keydown", e), () => {
                document.removeEventListener("keydown", e)
              }
            }, [r]), (0, n.useLayoutEffect)(() => {
              if (c.current) {
                let [e, t] = function(e, t, l, n, r) {
                  let o, a = {
                      top: 0
                    },
                    {
                      left: i = 0,
                      right: s = 0,
                      top: c
                    } = e,
                    {
                      width: d,
                      height: u
                    } = t,
                    {
                      width: p,
                      height: f
                    } = l,
                    {
                      width: m
                    } = r,
                    b = x ? 0 : window.scrollY,
                    h = i > m / 2,
                    g = (o = c - (f - u) / 2, b > 0 && (o += b), o),
                    y = 0 === p ? m / 2 : i + d / 2 - p / 2;
                  switch (n) {
                    case "bottom":
                      a = {
                        left: y,
                        top: w(c, b, u)
                      };
                      break;
                    case "top":
                      a = {
                        left: y,
                        top: w(c, b, -f)
                      };
                      break;
                    case "left":
                      a = {
                        top: g,
                        left: h ? void 0 : i - p,
                        right: h ? m - i : void 0
                      };
                      break;
                    case "right":
                      a = {
                        top: g,
                        left: h ? void 0 : s,
                        right: h ? m - i : void 0
                      }
                  }
                  return 0 === f && (a.opacity = 0),
                    function(e, t, l, n, r, o) {
                      var a, i;
                      let s = n,
                        c = {
                          ...e
                        },
                        d = "top" === n || "bottom" === n,
                        {
                          width: u,
                          height: p
                        } = t,
                        {
                          width: f,
                          height: m
                        } = l,
                        {
                          width: b,
                          height: h
                        } = r,
                        g = c.left ?? 0,
                        y = c.top ?? 0,
                        _ = g < 0 && void 0 !== c.left;
                      if (y - m / 2 < 0 && "bottom" !== n) {
                        let e;
                        [c, s] = (a = c, e = s, d ? (a.top += p + m, e = "bottom") : a.top += (m - p) / 2, [a, e])
                      }
                      if (g + f > b && d && (c.left = g - f / 2 + u / 2), y + m > h + o && (c.top -= p + m, s = "top"), _) {
                        let e;
                        [c, s] = (i = c, e = n, d ? i.left = g + f / 2 - u / 2 : "left" === n && (i.left = g + u + f, e = "right"), [i, e])
                      }
                      return [c, s]
                    }(a, t, l, n, r, b)
                }(c.current.getBoundingClientRect(), {
                  width: c.current.offsetWidth,
                  height: c.current.offsetHeight
                }, {
                  width: d.current?.offsetWidth ?? 0,
                  height: d.current?.offsetHeight ?? 0
                }, l, {
                  width: window.innerWidth,
                  height: window.innerHeight
                });
                a(e), s(t)
              }
            }, [l, t]), {
              popoverRef: d,
              placementOffsetStyle: o,
              popoverTriggerChildren: p,
              popoverContentElementChildren: f,
              onPopoverLayout: g
            }
          }(o, e, t, r);
          return n.createElement(n.Fragment, null, i, n.createElement(m, null, e && n.createElement(n.Fragment, null, n.createElement(h, {
            onPress: r
          }), n.createElement(p, E({
            testID: a,
            ref: s,
            className: "absolute",
            style: c
          }, l), d))))
        },
        k = ({
          children: e
        }) => e,
        O = "undefined" != typeof navigator && "ReactNative" === navigator.product;

      function P(e, t = n.Fragment) {
        let l = n.Children.toArray(e);
        if (1 === l.length) {
          let e = l[0];
          if ((0, n.isValidElement)(e) && ("any" === t || e.type === t)) return P(e.props.children)
        }
        return e
      }

      function N(e, t) {
        return e.find(e => (0, n.isValidElement)(e) && e.type === t)
      }
      let S = (0, l(4191)
        .hL)({
        twMergeConfig: {
          classGroups: {
            shadow: ["border", "inner", "none", "2xl", "xl", "lg", "md", "sm", "", "overlay", "overlay-native"]
          }
        }
      });

      function j(e) {
        return O ? "" : Array.isArray(e) ? e.join(" ") : e
      }
      let A = S({
          slots: {
            container: [j("select_popover_content_row group"), "flex flex-row gap-2 p-4 w-full items-center bg-white hover:bg-gray-100 focus:bg-gray-100", j("cursor-pointer outline-unset")]
          }
        }),
        R = () => null,
        L = ({
          option: e,
          selected: t,
          onSelect: l,
          indeterminate: r,
          name: o,
          showCheckbox: a,
          className: i,
          children: s
        }) => {
          let c = (0, n.useRef)(),
            {
              container: d
            } = A(),
            u = (0, n.useCallback)(() => {
              l?.(e.id)
            }, [e.id, l]),
            p = (0, n.useCallback)(e => {
              if (!O) {
                if ("ArrowDown" === e.code) {
                  e.preventDefault();
                  let t = c.current;
                  null !== t.nextElementSibling && t.nextElementSibling.focus()
                }
                if ("ArrowUp" === e.code) {
                  e.preventDefault();
                  let t = c.current;
                  null !== t.previousElementSibling && t.previousElementSibling.focus()
                }("Space" === e.code || "Enter" === e.code) && (e.preventDefault(), u())
              }
            }, [u]),
            f = n.Children.toArray(P(s)),
            m = N(f, R)
            ?.props.children;
          return m && (m = (0, n.cloneElement)(m, {
            ...m.props,
            name: o,
            checked: t,
            indeterminate: r,
            className: `pointer-events-none ${m.props.className}`,
            onPress: u,
            tabIndex: -1
          })), n.createElement(b.s, {
            onPress: u,
            className: d({
              class: i
            }),
            tabIndex: 0,
            role: "option",
            "aria-selected": t,
            onKeyDown: p,
            ref: c,
            as: O ? void 0 : "li"
          }, a && m, e.content?.({
            selected: t,
            indeterminate: r,
            children: e.label,
            id: e.id
          }))
        },
        T = e => n.createElement(L, e),
        F = (...e) => t => {
          for (let l of e) "function" == typeof l ? l(t) : null != l && (l.current = t)
        };

      function M() {
        return (M = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var l = arguments[t];
              for (var n in l)({})
                .hasOwnProperty.call(l, n) && (e[n] = l[n])
            }
            return e
          })
          .apply(null, arguments)
      }
      let I = n.forwardRef((e, t) => {
        let {
          children: l,
          testID: r,
          style: o,
          className: a,
          ...i
        } = e, s = n.Children.toArray(l), c = s.find(V);
        if (c) {
          let e = c.props.children,
            l = s.map(t => t === c ? n.Children.count(e) > 1 ? n.Children.only(null) : n.isValidElement(e) ? e.props.children : null : t);
          return n.createElement(D, M({}, i, {
            "data-testid": r,
            ref: t
          }), n.isValidElement(e) ? n.cloneElement(e, void 0, l) : null)
        }
        return n.createElement(D, M({}, i, {
          "data-testid": r,
          ref: t
        }), l)
      });
      I.displayName = "Slot";
      let D = n.forwardRef((e, t) => {
        let {
          children: l,
          ...r
        } = e;
        return n.isValidElement(l) ? n.cloneElement(l, {
          ... function(e, t) {
            let l = {
              ...t
            };
            for (let n in t) {
              let r = e[n],
                o = t[n];
              /^on[A-Z]/.test(n) ? r && o ? l[n] = (...e) => {
                o(...e), r(...e)
              } : r && (l[n] = r) : "style" === n ? l[n] = {
                ...r,
                ...o
              } : "className" === n && (l[n] = [r, o].filter(Boolean)
                .join(" "))
            }
            return {
              ...e,
              ...l
            }
          }(r, l.props),
          ref: t ? F(t, l.ref) : l.ref
        }) : n.Children.count(l) > 1 ? n.Children.only(null) : null
      });
      D.displayName = "SlotClone";
      let H = ({
        children: e
      }) => n.createElement(n.Fragment, null, e);

      function V(e) {
        return n.isValidElement(e) && e.type === H
      }

      function B() {
        return (B = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var l = arguments[t];
              for (var n in l)({})
                .hasOwnProperty.call(l, n) && (e[n] = l[n])
            }
            return e
          })
          .apply(null, arguments)
      }
      let q = (0, n.forwardRef)(({
        as: e = r.R,
        asChild: t,
        testID: l,
        ...o
      }, a) => {
        let i = t ? I : e;
        return n.createElement(i, B({}, o, {
          "data-testid": l,
          ref: a
        }))
      });
      q.displayName = "Box";
      var z = l(5831);
      let W = S({
          slots: {
            container: ["shadow-md bg-white max-h-[280px]", "shadow-overlay", "overflow-y-scroll"],
            scrollView: "rounded-lg"
          },
          variants: {
            top: {
              true: {
                container: "rounded-t-lg mb-1"
              },
              false: {
                container: "rounded-b-lg mt-1"
              }
            }
          }
        }),
        Y = ({
          children: e,
          multiselect: t,
          className: l,
          testID: r,
          "aria-label": o,
          ...a
        }) => {
          let {
            container: i,
            scrollView: s
          } = W({
            top: "top" === a["data-popover-placement"]
          });
          return n.createElement(q, {
            className: i({
              class: l
            }),
            style: {
              width: a["data-anchor-width"]
            },
            testID: r
          }, n.createElement(z.p, {
            as: O ? void 0 : "ul",
            className: s(),
            role: "listbox",
            "aria-multiselectable": t,
            "aria-label": o
          }, e))
        },
        K = e => {
          let {
            options: t,
            multiselect: l,
            name: r,
            disabled: o,
            children: a,
            className: i,
            required: s,
            testID: c,
            popoverTestID: d,
            closeButtonAccessibilityLabel: u,
            "aria-label": p,
            selectAllOption: f
          } = e, {
            open: m,
            handleClose: b,
            valueToDisplay: h,
            handleOnKeyPress: g,
            handleOnPress: y,
            areAllOptionsSelected: x,
            handleSelectAll: w,
            handleSelection: E,
            selectedOptions: S,
            selectedContent: j
          } = function({
            options: e,
            multiselect: t,
            defaultSelectedIds: l = [],
            onChange: r,
            onBlur: o,
            disabled: a
          }) {
            let [i, s] = (0, n.useState)(!1), [c, d] = (0, n.useState)(l), u = c.length === e.length, p = e.filter(e => c.includes(e.id) && void 0 !== e.content)
              .map(e => e.content?.({
                isTriggerChild: !0,
                selected: !0,
                indeterminate: !1,
                id: e.id,
                children: e.label
              })), f = e.filter(e => c.includes(e.id))
              .map(e => e.label), m = t && c.length > 0 ? f.join(", ") : f[0], b = (0, n.useCallback)(e => {
                d(l => {
                  let n = [];
                  if (t) {
                    let t = new Set(l);
                    t.has(e) ? t.delete(e) : t.add(e), n = Array.from(t)
                  } else {
                    let t = l.includes(e);
                    s(!1), o?.(), t || (n = [e])
                  }
                  return r?.(n), n
                })
              }, [t, r, o]), h = (0, n.useCallback)(() => {
                d(t => {
                  if (t.length === e.length) return [];
                  let l = e.map(e => e.id);
                  return r?.(l), l
                })
              }, [e, r]);
            return {
              open: i,
              selectedOptions: c,
              areAllOptionsSelected: u,
              valueToDisplay: m,
              selectedContent: p,
              handleSelection: b,
              handleSelectAll: h,
              handleClose: (0, n.useCallback)(() => {
                s(!1), o?.()
              }, [o]),
              handleOnPress: (0, n.useCallback)(e => {
                if (!a) {
                  if (!O) {
                    if (void 0 === e) return;
                    e.target?.focus(), e.preventDefault()
                  }
                  s(!0)
                }
              }, [a]),
              handleOnKeyPress: (0, n.useCallback)(e => {
                if (!a && !O) {
                  if ("Enter" === e.key && s(!0), "ArrowDown" === e.key) {
                    e.preventDefault();
                    let t = document.querySelector(".select_popover_content_row");
                    null !== t && t.focus()
                  }
                  if ("ArrowUp" === e.key) {
                    e.preventDefault();
                    let t = document.querySelectorAll(".select_popover_content_row"),
                      l = t[t.length - 1];
                    null !== l && l.focus()
                  }
                }
              }, [a])
            }
          }(e), A = n.Children.toArray(P(a, void 0)), R = N(A, k)
            ?.props.children;
          R && (R = (0, n.cloneElement)(R, {
            name: r,
            value: h ?? "",
            onPress: y,
            disabled: o,
            onKeyDown: g,
            "aria-haspopup": "listbox",
            required: s,
            children: j,
            ...R.props
          }));
          let L = N(A, T),
            F = null;
          return l && L && (F = (0, n.cloneElement)(L, {
            name: r,
            option: f,
            selected: x,
            indeterminate: !x && S.length > 0,
            onSelect: w,
            showCheckbox: l,
            ...L.props
          })), n.createElement(C, {
            active: m,
            onRequestClose: b,
            testID: d,
            closeButtonAccessibilityLabel: u
          }, n.createElement(_, null, R), n.createElement(v, null, n.createElement(Y, {
            testID: c,
            multiselect: l,
            className: i,
            "aria-label": p
          }, F, L && t.map(e => (0, n.cloneElement)(L, {
            name: r,
            key: e.id,
            option: e,
            selected: S.includes(e.id),
            onSelect: E,
            showCheckbox: l,
            ...L.props
          })))))
        };
      K.displayName = "Select";
      var G = l(9607),
        Z = l(7723),
        J = l(3489),
        U = l(7970),
        X = l(353);

      function $() {
        return ($ = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var l = arguments[t];
              for (var n in l)({})
                .hasOwnProperty.call(l, n) && (e[n] = l[n])
            }
            return e
          })
          .apply(null, arguments)
      }
      let Q = (0, n.forwardRef)(({
        as: e = "input",
        multiline: t,
        onChange: l,
        onChangeText: o,
        onPress: a,
        ...i
      }, s) => {
        let c = (0, n.useCallback)(e => {
          o?.(e.target.value), l?.(e)
        }, [l, o]);
        return n.createElement(r.R, $({
          as: t ? "textarea" : e
        }, i, {
          onClick: a,
          ref: s,
          onChange: c
        }))
      });
      Q.displayName = "Input";
      var ee = l(1617);
      let et = l(8398)
        .x;
      var el = l(2341);

      function en() {
        return (en = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var l = arguments[t];
              for (var n in l)({})
                .hasOwnProperty.call(l, n) && (e[n] = l[n])
            }
            return e
          })
          .apply(null, arguments)
      }
      let er = (0, n.forwardRef)(({
        typography: e = "body_normal",
        isProminent: t,
        color: l = "basic_black",
        className: r,
        as: o,
        ...a
      }, i) => n.createElement(et, en({
        as: o,
        className: (0, el.m)({
          typography: e,
          isProminent: t,
          color: l,
          class: r
        })
      }, a, {
        ref: i
      })));
      er.displayName = "AnimatedText";
      var eo = JSON.parse('{"cp":{"Yl":{"Vx":{"fontFamily":"LidlFontPro-Book","fontSize":16,"fontWeight":500,"lineHeight":24}},"cp":{"Vx":{"fontFamily":"LidlFontPro-Book","fontSize":13,"fontWeight":500,"lineHeight":20}}}}');
      let ea = () => {},
        ei = {},
        es = {};
      var ec = l(965);

      function ed(e) {
        return Z.b ? Array.isArray(e) ? e.join(" ") : e : ""
      }
      let eu = (0, G.l)("cursor-not-allowed"),
        ep = (0, ec.tv)({
          slots: {
            borderContainer: ["flex relative w-full h-14 rounded-form-radius bg-form-color-background border border-form-color-border", ed("h-[56px]"), (0, G.l)("group")],
            textField: ["px-4 rounded-form-radius bg-transparent w-full text-form-color-text-input", ed("grow"), "font-body_normal-base-mobile lg:font-body_normal-base-desktop"],
            label: ["text-form-color-text-label absolute left-4 w-full pr-16 top-1/2", (0, G.l)("h-fit transition-all duration-200 ease-in-out-browser -translate-y-1/2 text-ellipsis origin-left pointer-events-none line-clamp-1")],
            iconPressable: "absolute right-4 h-full flex justify-center items-center",
            icon: "fill-form-color-icon"
          },
          variants: {
            disabled: {
              true: {
                borderContainer: ["opacity-30", eu],
                textField: eu,
                label: eu
              },
              false: {
                borderContainer: [(0, G.l)(["focus-within cursor-text shadow-border", "focus-within:border-form-color-border-focused focus-within:caret-form-color-border-focused", "hover:caret-form-color-border-focused"])],
                label: "group-hover:text-form-color-text-label-pressed",
                textField: (0, G.l)("outline-unset")
              }
            },
            isLabelSmall: {
              true: {
                label: Z.b ? "" : "-translate-y-[1.3125rem] lg:-translate-y-[1.4375rem] scale-[0.833] lg:scale-[0.77]",
                textField: "pt-[1.5625rem] pb-1.5 lg:pb-1"
              }
            },
            focus: {
              true: {
                borderContainer: ed("border border-form-color-border-focused"),
                label: "text-form-color-text-label-pressed"
              }
            },
            error: {
              true: {
                borderContainer: ["border-2 border-form-color-border-error", (0, G.l)(["focus-within:border-form-color-border-error", "hover:border-form-color-border-error"])],
                label: "text-form-color-text-label-danger group-hover:text-form-color-text-label-danger",
                icon: "fill-form-color-icon-danger"
              }
            },
            success: {
              true: {
                borderContainer: ["border-2 border-form-color-border-success", (0, G.l)(["focus-within:border-form-color-border-success", "hover:border-form-color-border-success"])],
                label: "text-form-color-text-label-success group-hover:text-form-color-text-label-success",
                icon: "fill-form-color-icon-success"
              }
            },
            multiline: {
              true: {
                label: Z.b ? "top-7" : ["top-4 translate-y-0"],
                borderContainer: (0, G.l)("h-fit"),
                textField: "pt-0 mt-6 grow-0 min-h-[6.5rem]"
              },
              false: {
                textField: "pr-12"
              }
            },
            hideIcon: {
              true: {
                icon: "hidden",
                textField: "pr-4"
              }
            },
            withPressableIcon: {
              false: {
                iconPressable: (0, G.l)("pointer-events-none")
              },
              true: {
                iconPressable: (0, G.l)("cursor-pointer")
              }
            }
          },
          compoundVariants: [{
            multiline: !0,
            isLabelSmall: !0,
            class: {
              label: Z.b ? "" : "top-1 !translate-y-0"
            }
          }, {
            multiline: !1,
            isLabelSmall: !0,
            class: {
              textField: "lg:pt-[1.4375rem] "
            }
          }, {
            error: !1,
            success: !1,
            disabled: !1,
            class: {
              borderContainer: [(0, G.l)(["shadow-border", "focus-within:border-form-color-border-focused focus-within:shadow-form-color-border-focused", "hover:border-form-color-border-focused hover:shadow-form-color-border-focused"])]
            }
          }]
        });

      function ef() {
        return (ef = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var l = arguments[t];
              for (var n in l)({})
                .hasOwnProperty.call(l, n) && (e[n] = l[n])
            }
            return e
          })
          .apply(null, arguments)
      }
      let em = (0, n.forwardRef)((e, t) => {
        let {
          label: l,
          className: r,
          containerClassName: o,
          isDisabled: a,
          iconName: i,
          multiline: s,
          onPress: c,
          isReadOnly: d,
          isError: u,
          isValid: p,
          value: f,
          setValue: m,
          isLabelSmall: h,
          hideIcon: g,
          name: y,
          type: _,
          "aria-haspopup": v,
          onKeyDown: x,
          onChange: w,
          onPressIcon: E,
          onFocus: C,
          onBlur: k,
          defaultValue: O,
          ...P
        } = e, {
          handleFocus: N,
          handleBlur: S,
          styles: j,
          focus: A
        } = function({
          onFocus: e,
          onBlur: t,
          isLabelSmall: l
        }) {
          var r;
          let [o, a] = (0, n.useState)(!1), [i] = [es, ea], [s] = [ei, ea], c = (0, n.useCallback)(() => {
            a(!0), e?.()
          }, [e]), d = (0, n.useCallback)(e => {
            a(!1), t?.(e)
          }, [t]), u = eo.cp.cp.Vx, p = eo.cp.Yl.Vx, f = l ? u.fontFamily : p.fontFamily, m = l ? u.fontWeight : p.fontWeight, b = [{
            translateY: i
          }], h = "string" == typeof(r = l ? u.lineHeight : p.lineHeight) && r.includes("px") ? Number(r.replace("px", "")) : "number" == typeof r ? r : Number.NaN, g = Z.b ? {
            fontSize: s,
            transform: b,
            fontWeight: m,
            lineHeight: h,
            fontFamily: f
          } : void 0;
          return {
            handleFocus: c,
            handleBlur: d,
            isLabelSmall: l,
            focus: o,
            fontSize: s,
            transform: b,
            styles: g
          }
        }({
          onFocus: C,
          onBlur: k,
          isLabelSmall: h
        }), {
          textField: R,
          borderContainer: L,
          label: T,
          iconPressable: F,
          icon: M
        } = ep({
          error: u,
          success: p,
          disabled: a,
          isLabelSmall: h,
          focus: A,
          multiline: s,
          hideIcon: g,
          withPressableIcon: !!E
        });
        return n.createElement(b.s, {
          as: Z.b ? void 0 : "label",
          className: L({
            class: o
          }),
          onPress: a ? void 0 : c,
          "aria-haspopup": v,
          onKeyDown: () => {}
        }, l ? n.createElement(er, ef({
          as: Z.b ? void 0 : "span",
          typography: "body_normal",
          className: T()
        }, Z.b && {
          numberOfLines: 1,
          style: [{
            transform: [{
              translateY: -21
            }]
          }, j]
        }), l) : null, n.createElement(Q, ef({
          name: y,
          className: R({
            class: r
          }),
          ref: t,
          value: f,
          onChange: w,
          onChangeText: m,
          onFocus: N,
          onBlur: S,
          disabled: a,
          readOnly: a || d,
          pointerEvents: d ? "none" : void 0,
          multiline: s,
          onKeyDown: x,
          type: _
        }, P)), !i || s || g ? null : n.createElement(b.s, {
          onPress: e => {
            E && (e.preventDefault(), e.stopPropagation(), E(e))
          },
          className: F(),
          pointerEvents: E ? "auto" : "none"
        }, n.createElement(ee.JO, {
          name: i,
          size: 24,
          className: M()
        })))
      });
      em.displayName = "InternalInput";
      let eb = (0, ec.tv)({
          base: ["select_popover_content_row group flex flex-row gap-space-small-300 p-space-medium-200 w-full items-center bg-white hover:bg-lidl-color-grayscale_lightest focus-visible:bg-lidl-color-grayscale_lightest", (0, G.l)("cursor-pointer outline-unset")]
        }),
        eh = (0, ec.tv)({
          base: "rounded-lg scrollbar-hide [&>ul]:scrollbar-hide max-h-[280px]",
          variants: {
            withHint: {
              true: "translate-y-[30px]",
              false: ""
            }
          }
        }),
        eg = (0, ec.tv)({
          base: "group-hover:text-lidl-color-interaction_blue_dark",
          variants: {
            filled: {
              true: "text-lidl-color-interaction_blue",
              false: "text-lidl-color-grayscale"
            }
          }
        });

      function ey() {
        return (ey = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var l = arguments[t];
              for (var n in l)({})
                .hasOwnProperty.call(l, n) && (e[n] = l[n])
            }
            return e
          })
          .apply(null, arguments)
      }
      let e_ = (0, n.forwardRef)((e, t) => {
          let {
            onPress: l,
            children: r,
            isDisabled: o,
            isLabelSmall: a,
            isError: i,
            label: s,
            ...c
          } = e;
          return n.createElement(em, ey({}, c, {
            isLabelSmall: a,
            iconName: "navigation/arrow-down",
            isReadOnly: !0,
            containerClassName: o ? void 0 : (0, G.l)("cursor-pointer"),
            className: o ? void 0 : (0, G.l)("cursor-pointer pointer-events-none"),
            label: s,
            isError: i,
            isDisabled: o,
            pointerEvents: "none",
            ref: t,
            onPress: l
          }))
        }),
        ev = e => {
          let {
            selected: t,
            indeterminate: l,
            children: r
          } = e;
          return n.createElement(J.x, {
            typography: "body_normal",
            isProminent: t || l,
            className: eg({
              filled: t || l
            })
          }, r)
        };
      var ex = e => {
        let {
          options: t,
          allLabel: l = "All",
          label: r,
          multiselect: o,
          hint: a,
          isError: i,
          isValid: s,
          isDisabled: c,
          name: d,
          className: u,
          defaultSelectedIds: p
        } = e, {
          isLabelSmall: f,
          handleOnChange: m
        } = function({
          label: e,
          defaultSelectedIds: t = [],
          onChange: l
        }) {
          let r = void 0 !== e,
            [o, a] = (0, n.useState)(r && t.length > 0),
            [i, s] = (0, n.useState)(t),
            c = (0, n.useCallback)(e => {
              let t = e.length > 0;
              a(r && t), s(t => t.filter(t => !e.includes(t))
                .concat(e))
            }, [r]);
          return (0, n.useEffect)(() => {
            i.length > 0 && l?.(i)
          }, [i, l]), {
            isLabelSmall: o,
            handleOnChange: c
          }
        }(e), b = t.some(e => void 0 !== e.content);
        return n.createElement(X.Z, {
          collapsable: !Z.b && void 0,
          hint: a,
          isValid: s,
          isDisabled: c,
          isError: i,
          className: u
        }, n.createElement(K, {
          multiselect: o,
          "aria-label": null != r ? r : "",
          selectAllOption: {
            id: "all",
            label: l,
            content: ev
          },
          options: b ? t : t.map(e => ({
            ...e,
            content: ev
          })),
          onChange: m,
          defaultSelectedIds: p,
          className: eh({
            withHint: !!a
          })
        }, n.createElement(k, null, n.createElement(e_, {
          isLabelSmall: f,
          iconName: "navigation/arrow-down",
          label: r,
          isError: i,
          isDisabled: c,
          name: d
        })), n.createElement(T, {
          className: eb()
        }, n.createElement(R, null, n.createElement(U.Z, {
          name: "select-checkbox",
          className: "pointer-events-none"
        })))))
      }
    },
    9793: function(e, t, l) {
      "use strict";
      l.d(t, {
        default: function() {
          return s
        }
      });
      var n = l(2265),
        r = l(8842);
      let o = ({
        size: e = 115
      }) => n.createElement("svg", {
        name: "LidlLogo",
        version: "1.1",
        id: "Lidl_Logo",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        viewBox: "0 0 115 115",
        width: e,
        height: e
      }, n.createElement("rect", {
        id: "Fl\xe4che_Wei\xdf_RGB",
        x: "0",
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#FFFFFF",
        width: "115",
        height: "115"
      }), n.createElement("rect", {
        id: "Fl\xe4che_Blau_RGB",
        x: "1",
        y: "1",
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#0050AA",
        width: "113.01",
        height: "113.01"
      }), n.createElement("path", {
        id: "Kreis_Rot_RGB",
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#E60A14",
        d: "M57.5,3.99c-29.54,0-53.51,23.97-53.51,53.53c0,29.54,23.97,53.5,53.51,53.5 c29.54,0,53.51-23.96,53.51-53.5C111.01,27.96,87.04,3.99,57.5,3.99z"
      }), n.createElement("path", {
        id: "Kreis_Gelb_RGB",
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#FFF000",
        d: "M57.5,7.38c-27.68,0-50.12,22.45-50.12,50.14c0,27.66,22.45,50.11,50.12,50.11 c27.67,0,50.12-22.45,50.12-50.11C107.62,29.83,85.17,7.38,57.5,7.38L57.5,7.38z"
      }), n.createElement("polygon", {
        id: "L_1_",
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#0050AA",
        points: "79.53,48.2 79.53,51.6 82.17,51.6 82.17,63.41 79.53,63.41 79.53,66.83 101.81,66.83 101.81,57.52 92.67,62.6 92.67,51.6 95.31,51.6 95.31,48.2 79.53,48.2 	"
      }), n.createElement("path", {
        id: "D",
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#0050AA",
        d: "M70.75,48.2H55.72v3.4h2.63v11.81h-2.63v3.42h15.03C81.86,66.83,81.97,48.2,70.75,48.2z M68.64,61.02 h-0.75v-7.03h0.63C71.81,53.98,71.81,61.03,68.64,61.02z"
      }), n.createElement("path", {
        id: "i",
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#E60A14",
        d: "M58.35,54.93v3.42L44.11,72.61l-1.71-1.72l2.63-2.63l-7.12-7.14l-2.57,2.58v-3.43l10.21-10.22 l8.84,8.84L58.35,54.93z M44.24,37.61c-3.1,0-5.61,2.5-5.61,5.6c0,3.1,2.51,5.61,5.61,5.61s5.61-2.51,5.61-5.61 C49.85,40.1,47.34,37.61,44.24,37.61L44.24,37.61z"
      }), n.createElement("polygon", {
        id: "L",
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#0050AA",
        points: "13.08,48.2 28.84,48.2 28.84,51.6 26.21,51.6 26.21,62.6 35.34,57.52 35.34,66.83 13.08,66.83 13.08,63.41 15.72,63.41 15.72,51.6 13.08,51.6 13.08,48.2 	"
      }));
      o.displayName = "LidlLogo";
      var a = (0, n.memo)(o);

      function i() {
        return (i = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var l = arguments[t];
              for (var n in l)({})
                .hasOwnProperty.call(l, n) && (e[n] = l[n])
            }
            return e
          })
          .apply(null, arguments)
      }
      var s = e => {
        let {
          ...t
        } = e;
        return n.createElement(r.default, i({}, t, {
          startContent: n.createElement(a, {
            size: 40
          }),
          type: "home"
        }))
      }
    },
    8842: function(e, t, l) {
      "use strict";
      l.d(t, {
        default: function() {
          return O
        }
      });
      var n, r = l(2265),
        o = l(8713),
        a = l(5822),
        i = l(4941),
        s = l(4593);

      function c() {
        return (c = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var l = arguments[t];
              for (var n in l)({})
                .hasOwnProperty.call(l, n) && (e[n] = l[n])
            }
            return e
          })
          .apply(null, arguments)
      }
      let d = (0, r.forwardRef)(({
        as: e = "p",
        ...t
      }, l) => r.createElement(s.R, c({
        as: e
      }, t, {
        ref: l
      })));
      d.displayName = "Text";
      var u = l(8440);
      let p = (0, u.tv)({
        base: ["text-black"],
        variants: {
          typography: {
            display_1: ["font-display_1-base-mobile", "lg:font-display_1-base-desktop"],
            display_2: ["font-display_2-base-mobile", "lg:font-display_2-base-desktop"],
            display_3: ["font-display_3-base-mobile", "lg:font-display_3-base-desktop"],
            display_4: ["font-display_4-base-mobile", "lg:font-display_4-base-desktop"],
            display_5: ["font-display_5-base-mobile", "lg:font-display_5-base-desktop"],
            headline_1: ["font-headline_1-base-mobile", "lg:font-headline_1-base-desktop"],
            headline_2: ["font-headline_2-base-mobile", "lg:font-headline_2-base-desktop"],
            headline_3: ["font-headline_3-base-mobile", "lg:font-headline_3-base-desktop"],
            headline_4: ["font-headline_4-base-mobile", "lg:font-headline_4-base-desktop"],
            headline_5: ["font-headline_5-base-mobile", "lg:font-headline_5-base-desktop"],
            headline_6: ["font-headline_6-base-mobile", "lg:font-headline_6-base-desktop"],
            body_normal: ["font-body_normal-base-mobile", "lg:font-body_normal-base-desktop"],
            body_tight: ["font-body_tight-base-mobile", "lg:font-body_tight-base-desktop"],
            small_1: ["font-small_1-base-mobile", "lg:font-small_1-base-desktop"],
            small_2: ["font-small_2-base-mobile", "lg:font-small_2-base-desktop"],
            footnote: ["font-footnote-base-mobile", "lg:font-footnote-base-desktop"]
          },
          isProminent: {
            true: []
          },
          color: {
            blue: ["text-lidl-color-blue"],
            blue_light: ["text-lidl-color-blue_light"],
            blue_lighter: ["text-lidl-color-blue_lighter"],
            blue_lightest: ["text-lidl-color-blue_lightest"],
            blue_dark: ["text-lidl-color-blue_dark"],
            interaction_blue: ["text-lidl-color-interaction_blue"],
            interaction_blue_dark: ["text-lidl-color-interaction_blue_dark"],
            yellow: ["text-lidl-color-yellow"],
            yellow_light: ["text-lidl-color-yellow_light"],
            yellow_lighter: ["text-lidl-color-yellow_lighter"],
            yellow_lightest: ["text-lidl-color-yellow_lightest"],
            yellow_dark: ["text-lidl-color-yellow_dark"],
            yellow_darker: ["text-lidl-color-yellow_darker"],
            yellow_darkest: ["text-lidl-color-yellow_darkest"],
            red: ["text-lidl-color-red"],
            red_light: ["text-lidl-color-red_light"],
            red_lighter: ["text-lidl-color-red_lighter"],
            red_lightest: ["text-lidl-color-red_lightest"],
            red_dark: ["text-lidl-color-red_dark"],
            green: ["text-lidl-color-green"],
            green_light: ["text-lidl-color-green_light"],
            green_lighter: ["text-lidl-color-green_lighter"],
            green_lightest: ["text-lidl-color-green_lightest"],
            green_dark: ["text-lidl-color-green_dark"],
            grayscale: ["text-lidl-color-grayscale"],
            grayscale_light: ["text-lidl-color-grayscale_light"],
            grayscale_lighter: ["text-lidl-color-grayscale_lighter"],
            grayscale_lightest: ["text-lidl-color-grayscale_lightest"],
            grayscale_darkest: ["text-lidl-color-grayscale_darkest"],
            basic_black: ["text-lidl-color-basic_black"],
            basic_white: ["text-lidl-color-basic_white"],
            overlay: ["text-lidl-color-overlay"]
          }
        },
        compoundVariants: [{
          typography: "display_1",
          isProminent: !0,
          class: ["font-display_1-prominent-mobile", "lg:font-display_1-prominent-desktop"]
        }, {
          typography: "display_2",
          isProminent: !0,
          class: ["font-display_2-prominent-mobile", "lg:font-display_2-prominent-desktop"]
        }, {
          typography: "display_3",
          isProminent: !0,
          class: ["font-display_3-prominent-mobile", "lg:font-display_3-prominent-desktop"]
        }, {
          typography: "display_4",
          isProminent: !0,
          class: ["font-display_4-prominent-mobile", "lg:font-display_4-prominent-desktop"]
        }, {
          typography: "display_5",
          isProminent: !0,
          class: ["font-display_5-prominent-mobile", "lg:font-display_5-prominent-desktop"]
        }, {
          typography: "headline_1",
          isProminent: !0,
          class: ["font-headline_1-prominent-mobile", "lg:font-headline_1-prominent-desktop"]
        }, {
          typography: "headline_2",
          isProminent: !0,
          class: ["font-headline_2-prominent-mobile", "lg:font-headline_2-prominent-desktop"]
        }, {
          typography: "headline_3",
          isProminent: !0,
          class: ["font-headline_3-prominent-mobile", "lg:font-headline_3-prominent-desktop"]
        }, {
          typography: "headline_4",
          isProminent: !0,
          class: ["font-headline_4-prominent-mobile", "lg:font-headline_4-prominent-desktop"]
        }, {
          typography: "headline_5",
          isProminent: !0,
          class: ["font-headline_5-prominent-mobile", "lg:font-headline_5-prominent-desktop"]
        }, {
          typography: "headline_6",
          isProminent: !0,
          class: ["font-headline_6-prominent-mobile", "lg:font-headline_6-prominent-desktop"]
        }, {
          typography: "body_normal",
          isProminent: !0,
          class: ["font-body_normal-prominent-mobile", "lg:font-body_normal-prominent-desktop"]
        }, {
          typography: "body_tight",
          isProminent: !0,
          class: ["font-body_tight-prominent-mobile", "lg:font-body_tight-prominent-desktop"]
        }, {
          typography: "small_1",
          isProminent: !0,
          class: ["font-small_1-prominent-mobile", "lg:font-small_1-prominent-desktop"]
        }, {
          typography: "small_2",
          isProminent: !0,
          class: ["font-small_2-prominent-mobile", "lg:font-small_2-prominent-desktop"]
        }, {
          typography: "footnote",
          isProminent: !0,
          class: ["font-footnote-prominent-mobile", "lg:font-footnote-prominent-desktop"]
        }]
      });

      function f() {
        return (f = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var l = arguments[t];
              for (var n in l)({})
                .hasOwnProperty.call(l, n) && (e[n] = l[n])
            }
            return e
          })
          .apply(null, arguments)
      }
      let m = (0, r.forwardRef)(({
        typography: e = "body_normal",
        isProminent: t,
        color: l = "basic_black",
        className: n,
        as: o,
        ...a
      }, i) => r.createElement(d, f({
        as: o,
        className: p({
          typography: e,
          isProminent: t,
          color: l,
          class: n
        })
      }, a, {
        ref: i
      })));
      m.displayName = "Text";
      var b = l(639);

      function h(e) {
        return a.b ? Array.isArray(e) ? e.join(" ") : e : ""
      }
      let g = (0, u.tv)({
          slots: {
            container: [(0, b.l)("top-0 sticky w-full pt-14 pointer-events-none")],
            topContainer: ["min-h-14 flex flex-row justify-between items-center p-space-small-300 relative absolute top-0 w-full z-40", (0, b.l)("pointer-events-auto")],
            textContainer: ["p-space-medium-200 pt-0 flex flex-col gap-space-small-200", (0, b.l)("transition-all duration-200 ease-in-out")],
            bottomContainer: ["p-space-medium-200 pt-0 flex flex-col gap-4", (0, b.l)("pointer-events-auto")],
            topContent: "flex flex-1 pl-space-medium-200 self-stretch",
            topTitle: [(0, b.l)("truncate pointer-events-none w-full px-space-medium-200")],
            endContent: ["flex flex-row pl-space-small-300 gap-space-small-200", (0, b.l)("w-fit")],
            title: (0, b.l)("truncate"),
            description: (0, b.l)("truncate")
          },
          variants: {
            type: {
              home: {
                topContainer: "pl-space-medium-200",
                container: "bg-lidl-color-basic_white"
              },
              content: {}
            },
            variant: {
              positive: {
                topContainer: "bg-top_bar-positive-color-background",
                textContainer: "bg-top_bar-positive-color-background",
                bottomContainer: "bg-top_bar-positive-color-background",
                topTitle: "text-top_bar-color-title",
                title: "text-top_bar-color-title",
                description: "text-top_bar-color-description"
              },
              negative: {
                topContainer: "bg-top_bar-negative-color-background",
                textContainer: "bg-top_bar-negative-color-background",
                bottomContainer: "bg-top_bar-negative-color-background",
                topTitle: "text-top_bar-color-title-negative",
                title: "text-top_bar-color-title-negative",
                description: "text-top_bar-color-description-negative"
              },
              discrete: {
                topContainer: "bg-top_bar-discrete-color-background",
                textContainer: "bg-top_bar-discrete-color-background",
                bottomContainer: "bg-top_bar-discrete-color-background",
                topTitle: "text-top_bar-color-title-discrete",
                title: "text-top_bar-color-title-discrete",
                description: "text-top_bar-color-description-discrete"
              }
            },
            withOptions: {
              0: {
                topTitle: "px-16"
              },
              1: {
                topTitle: "px-16"
              },
              2: {
                topTitle: "px-24"
              },
              3: {
                topTitle: ["relative w-full flex-1 text-left", h("pl-space-medium-200")]
              }
            },
            withStartContent: {
              false: {
                topTitle: "pl-space-small-300"
              }
            },
            withTitle: {
              true: {}
            },
            withDescription: {
              true: {}
            },
            withShowTitle: {
              false: {
                container: a.b ? "pt-14" : "pt-[3.5rem]"
              }
            },
            collapsed: {
              true: {
                container: [h("pt-0")],
                topContainer: [h("static")],
                textContainer: "hidden",
                topTitle: "opacity-100"
              },
              false: {
                container: ""
              },
              undefined: {
                container: ""
              }
            }
          },
          compoundVariants: [{
            withOptions: [0, 1, 2],
            class: {
              topTitle: ["absolute text-center", a.b ? "left-0 right-0 text-center" : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"]
            }
          }, {
            withOptions: [0, 1, 2],
            withStartContent: !1,
            class: {
              topContainer: "justify-end"
            }
          }, {
            withTitle: !1,
            withDescription: !1,
            collapsed: !1,
            class: {
              container: "pt-[3.5rem]"
            }
          }]
        }),
        y = e => {
          if (!e) return {};
          let t = {};
          for (let l in e) e.hasOwnProperty(l) && ("transform" === l ? t.transform = _(e.transform) : t[l] = e[l]);
          return t
        },
        _ = e => e.map(e => {
          let t = Object.keys(e)[0],
            l = e[t],
            n = "string" == typeof l && l.includes("%") ? l : "".concat(l, "px");
          return "".concat(t, "(")
            .concat(n, ")")
        })
        .join(" ");
      var v = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          [l, n] = (0, r.useState)({});
        return (0, r.useEffect)(() => {
          n(y(e()))
        }, t), l
      };
      let x = ((n = {})
          .CLAMP = "clamp", n.EXTEND = "extend", n.IDENTITY = "identity", n),
        w = e => "extend" === e || "clamp" === e || "indetity" === e;
      var E = (e, t, l, n = x.EXTEND) => {
          let r = w(n) ? n : n.extrapolateLeft || "extend",
            o = w(n) ? n : n.extrapolateRight || "extend";
          if (t.length !== l.length) throw Error("Input and output ranges must have the same length");
          let a = t[0],
            i = t[t.length - 1],
            s = l[0],
            c = l[l.length - 1];
          if (e < a) {
            if ("identity" === r) return e;
            if ("clamp" === r) return s
          } else if (e > i) {
            if ("identity" === o) return e;
            if ("clamp" === o) return c
          }
          let d = 1;
          for (; d < t.length - 1 && !(e < t[d]); d++);
          let u = t[d - 1],
            p = t[d],
            f = l[d - 1];
          return f + (e - u) / (p - u) * (l[d] - f)
        },
        C = ({
          scrollY: e = 0,
          textContainerHeight: t = 0,
          collapsed: l
        }) => {
          let n = v(() => {
              let l = E(e, [0, t], [0, 1], x.CLAMP),
                n = E(e, [0, t], [16, 0], x.CLAMP);
              return {
                opacity: l || 0,
                transform: [{
                  translateX: "-50%"
                }, {
                  translateY: `calc(-50% + ${n}px)`
                }]
              }
            }, [e, t, l]),
            r = v(() => ({
              opacity: E(e, [0, t - 20], [1, 0], x.CLAMP)
            }), [e, t, l]);
          return {
            topTitleAnimationStyles: n,
            bottomContainerAnimationStyles: v(() => {
              let l = t > 6 ? t - 6 : t;
              return {
                transform: [{
                  translateY: E(e, [0, l], [0, -l], x.CLAMP)
                }]
              }
            }, [e, t, l]),
            centerTitleAnimationStyles: r
          }
        };

      function k() {
        return (k = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var l = arguments[t];
              for (var n in l)({})
                .hasOwnProperty.call(l, n) && (e[n] = l[n])
            }
            return e
          })
          .apply(null, arguments)
      }
      var O = e => {
        var t;
        let {
          title: l,
          description: n,
          startContent: s,
          topContent: c,
          endContent: d = [],
          content: u,
          className: p,
          variant: f = "positive",
          showDivider: b = !0,
          showContent: h = !0,
          showTitle: y = !0,
          type: _,
          scrollY: v,
          onLayoutChange: x,
          collapsed: w,
          backgroundColor: E,
          titleAccessibilityProps: O,
          descriptionAccessibilityProps: P,
          onBottomLayoutChange: N,
          ...S
        } = e, j = (0, r.useRef)(), A = (0, r.useRef)(), {
          container: R,
          topContainer: L,
          textContainer: T,
          bottomContainer: F,
          topContent: M,
          topTitle: I,
          endContent: D,
          title: H,
          description: V
        } = g({
          type: _,
          variant: f,
          withOptions: null == d ? void 0 : d.length,
          withStartContent: !!s,
          withShowTitle: y,
          withTitle: !!l,
          withDescription: !!n,
          collapsed: void 0 === w ? "undefined" : w
        }), {
          topTitleAnimationStyles: B,
          bottomContainerAnimationStyles: q,
          centerTitleAnimationStyles: z
        } = C({
          scrollY: v,
          textContainerHeight: null === (t = A.current) || void 0 === t ? void 0 : t.offsetHeight,
          collapsed: w
        });
        (0, r.useEffect)(() => {
          if (!j.current || a.b) return;
          let e = new ResizeObserver(() => {
            null == x || x(j)
          });
          return e.observe(j.current), () => e.disconnect()
        }, [x]);
        let W = y && (l || n);
        return r.createElement(o.x, k({
          className: R({
            class: p
          }),
          tabIndex: 0
        }, S, {
          ref: j
        }), r.createElement(o.x, {
          className: L({
            className: E && "bg-lidl-color-".concat(E)
          })
        }, s && r.createElement(o.x, null, s), c ? r.createElement(o.x, {
          className: M()
        }, c) : l && r.createElement(m, k({
          typography: "headline_5",
          isProminent: !0,
          className: I()
        }, !w && {
          style: B
        }, O), l), r.createElement(o.x, {
          className: D()
        }, d)), r.createElement(o.x, {
          style: q
        }, W && r.createElement(o.x, {
          className: T({
            className: E && "bg-lidl-color-".concat(E)
          }),
          ref: A
        }, l && r.createElement(m, k({
          typography: "headline_1",
          isProminent: !0,
          className: H(),
          style: z
        }, O), l), n && r.createElement(m, k({
          typography: "small_1",
          className: V(),
          style: z
        }, P), n)), u && h && r.createElement(o.x, {
          className: F({
            className: E && "bg-lidl-color-".concat(E)
          })
        }, u), b && r.createElement(i.i, null)))
      }
    },
    8221: function(e, t) {
      "use strict";
      let l;
      Object.defineProperty(t, "__esModule", {
          value: !0
        }),
        function(e, t) {
          for (var l in t) Object.defineProperty(e, l, {
            enumerable: !0,
            get: t[l]
          })
        }(t, {
          DOMAttributeNames: function() {
            return n
          },
          default: function() {
            return a
          },
          isEqualNode: function() {
            return o
          }
        });
      let n = {
        acceptCharset: "accept-charset",
        className: "class",
        htmlFor: "for",
        httpEquiv: "http-equiv",
        noModule: "noModule"
      };

      function r(e) {
        let {
          type: t,
          props: l
        } = e, r = document.createElement(t);
        for (let e in l) {
          if (!l.hasOwnProperty(e) || "children" === e || "dangerouslySetInnerHTML" === e || void 0 === l[e]) continue;
          let o = n[e] || e.toLowerCase();
          "script" === t && ("async" === o || "defer" === o || "noModule" === o) ? r[o] = !!l[e] : r.setAttribute(o, l[e])
        }
        let {
          children: o,
          dangerouslySetInnerHTML: a
        } = l;
        return a ? r.innerHTML = a.__html || "" : o && (r.textContent = "string" == typeof o ? o : Array.isArray(o) ? o.join("") : ""), r
      }

      function o(e, t) {
        if (e instanceof HTMLElement && t instanceof HTMLElement) {
          let l = t.getAttribute("nonce");
          if (l && !e.getAttribute("nonce")) {
            let n = t.cloneNode(!0);
            return n.setAttribute("nonce", ""), n.nonce = l, l === e.nonce && e.isEqualNode(n)
          }
        }
        return e.isEqualNode(t)
      }

      function a() {
        return {
          mountedInstances: new Set,
          updateHead: e => {
            let t = {};
            e.forEach(e => {
              if ("link" === e.type && e.props["data-optimized-fonts"]) {
                if (document.querySelector('style[data-href="' + e.props["data-href"] + '"]')) return;
                e.props.href = e.props["data-href"], e.props["data-href"] = void 0
              }
              let l = t[e.type] || [];
              l.push(e), t[e.type] = l
            });
            let n = t.title ? t.title[0] : null,
              r = "";
            if (n) {
              let {
                children: e
              } = n.props;
              r = "string" == typeof e ? e : Array.isArray(e) ? e.join("") : ""
            }
            r !== document.title && (document.title = r), ["meta", "base", "link", "style", "script"].forEach(e => {
              l(e, t[e] || [])
            })
          }
        }
      }
      l = (e, t) => {
        let l = document.getElementsByTagName("head")[0],
          n = l.querySelector("meta[name=next-head-count]"),
          a = Number(n.content),
          i = [];
        for (let t = 0, l = n.previousElementSibling; t < a; t++, l = (null == l ? void 0 : l.previousElementSibling) || null) {
          var s;
          (null == l ? void 0 : null == (s = l.tagName) ? void 0 : s.toLowerCase()) === e && i.push(l)
        }
        let c = t.map(r)
          .filter(e => {
            for (let t = 0, l = i.length; t < l; t++)
              if (o(i[t], e)) return i.splice(t, 1), !1;
            return !0
          });
        i.forEach(e => {
            var t;
            return null == (t = e.parentNode) ? void 0 : t.removeChild(e)
          }), c.forEach(e => l.insertBefore(e, n)), n.content = (a - i.length + c.length)
          .toString()
      }, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    500: function(e, t, l) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
        }),
        function(e, t) {
          for (var l in t) Object.defineProperty(e, l, {
            enumerable: !0,
            get: t[l]
          })
        }(t, {
          default: function() {
            return _
          },
          handleClientScriptLoad: function() {
            return h
          },
          initScriptLoader: function() {
            return g
          }
        });
      let n = l(7043),
        r = l(3099),
        o = l(7437),
        a = n._(l(4887)),
        i = r._(l(2265)),
        s = l(8701),
        c = l(8221),
        d = l(3515),
        u = new Map,
        p = new Set,
        f = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"],
        m = e => {
          if (a.default.preinit) {
            e.forEach(e => {
              a.default.preinit(e, {
                as: "style"
              })
            });
            return
          }
          if ("undefined" != typeof window) {
            let t = document.head;
            e.forEach(e => {
              let l = document.createElement("link");
              l.type = "text/css", l.rel = "stylesheet", l.href = e, t.appendChild(l)
            })
          }
        },
        b = e => {
          let {
            src: t,
            id: l,
            onLoad: n = () => {},
            onReady: r = null,
            dangerouslySetInnerHTML: o,
            children: a = "",
            strategy: i = "afterInteractive",
            onError: s,
            stylesheets: d
          } = e, b = l || t;
          if (b && p.has(b)) return;
          if (u.has(t)) {
            p.add(b), u.get(t)
              .then(n, s);
            return
          }
          let h = () => {
              r && r(), p.add(b)
            },
            g = document.createElement("script"),
            y = new Promise((e, t) => {
              g.addEventListener("load", function(t) {
                e(), n && n.call(this, t), h()
              }), g.addEventListener("error", function(e) {
                t(e)
              })
            })
            .catch(function(e) {
              s && s(e)
            });
          for (let [l, n] of(o ? (g.innerHTML = o.__html || "", h()) : a ? (g.textContent = "string" == typeof a ? a : Array.isArray(a) ? a.join("") : "", h()) : t && (g.src = t, u.set(t, y)), Object.entries(e))) {
            if (void 0 === n || f.includes(l)) continue;
            let e = c.DOMAttributeNames[l] || l.toLowerCase();
            g.setAttribute(e, n)
          }
          "worker" === i && g.setAttribute("type", "text/partytown"), g.setAttribute("data-nscript", i), d && m(d), document.body.appendChild(g)
        };

      function h(e) {
        let {
          strategy: t = "afterInteractive"
        } = e;
        "lazyOnload" === t ? window.addEventListener("load", () => {
          (0, d.requestIdleCallback)(() => b(e))
        }) : b(e)
      }

      function g(e) {
        e.forEach(h), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
          let t = e.id || e.getAttribute("src");
          p.add(t)
        })
      }

      function y(e) {
        let {
          id: t,
          src: l = "",
          onLoad: n = () => {},
          onReady: r = null,
          strategy: c = "afterInteractive",
          onError: u,
          stylesheets: f,
          ...m
        } = e, {
          updateScripts: h,
          scripts: g,
          getIsSsr: y,
          appDir: _,
          nonce: v
        } = (0, i.useContext)(s.HeadManagerContext), x = (0, i.useRef)(!1);
        (0, i.useEffect)(() => {
          let e = t || l;
          x.current || (r && e && p.has(e) && r(), x.current = !0)
        }, [r, t, l]);
        let w = (0, i.useRef)(!1);
        if ((0, i.useEffect)(() => {
            !w.current && ("afterInteractive" === c ? b(e) : "lazyOnload" === c && ("complete" === document.readyState ? (0, d.requestIdleCallback)(() => b(e)) : window.addEventListener("load", () => {
              (0, d.requestIdleCallback)(() => b(e))
            })), w.current = !0)
          }, [e, c]), ("beforeInteractive" === c || "worker" === c) && (h ? (g[c] = (g[c] || [])
            .concat([{
              id: t,
              src: l,
              onLoad: n,
              onReady: r,
              onError: u,
              ...m
            }]), h(g)) : y && y() ? p.add(t || l) : y && !y() && b(e)), _) {
          if (f && f.forEach(e => {
              a.default.preinit(e, {
                as: "style"
              })
            }), "beforeInteractive" === c) return l ? (a.default.preload(l, m.integrity ? {
            as: "script",
            integrity: m.integrity,
            nonce: v,
            crossOrigin: m.crossOrigin
          } : {
            as: "script",
            nonce: v,
            crossOrigin: m.crossOrigin
          }), (0, o.jsx)("script", {
            nonce: v,
            dangerouslySetInnerHTML: {
              __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([l, {
                ...m,
                id: t
              }]) + ")"
            }
          })) : (m.dangerouslySetInnerHTML && (m.children = m.dangerouslySetInnerHTML.__html, delete m.dangerouslySetInnerHTML), (0, o.jsx)("script", {
            nonce: v,
            dangerouslySetInnerHTML: {
              __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([0, {
                ...m,
                id: t
              }]) + ")"
            }
          }));
          "afterInteractive" === c && l && a.default.preload(l, m.integrity ? {
            as: "script",
            integrity: m.integrity,
            nonce: v,
            crossOrigin: m.crossOrigin
          } : {
            as: "script",
            nonce: v,
            crossOrigin: m.crossOrigin
          })
        }
        return null
      }
      Object.defineProperty(y, "__nextScript", {
        value: !0
      });
      let _ = y;
      ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    1523: function(e, t, l) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "BailoutToCSR", {
        enumerable: !0,
        get: function() {
          return r
        }
      });
      let n = l(8993);

      function r(e) {
        let {
          reason: t,
          children: l
        } = e;
        if ("undefined" == typeof window) throw new n.BailoutToCSRError(t);
        return l
      }
    },
    49: function(e, t, l) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "PreloadCss", {
        enumerable: !0,
        get: function() {
          return o
        }
      });
      let n = l(7437),
        r = l(544);

      function o(e) {
        let {
          moduleIds: t
        } = e;
        if ("undefined" != typeof window) return null;
        let l = (0, r.getExpectedRequestStore)("next/dynamic css"),
          o = [];
        if (l.reactLoadableManifest && t) {
          let e = l.reactLoadableManifest;
          for (let l of t) {
            if (!e[l]) continue;
            let t = e[l].files.filter(e => e.endsWith(".css"));
            o.push(...t)
          }
        }
        return 0 === o.length ? null : (0, n.jsx)(n.Fragment, {
          children: o.map(e => (0, n.jsx)("link", {
            precedence: "dynamic",
            rel: "stylesheet",
            href: l.assetPrefix + "/_next/" + encodeURI(e),
            as: "style"
          }, e))
        })
      }
    },
    1699: function(e) {
      e.exports = {
        style: {
          fontFamily: "'__lidlFontCondPro_0c4d29', '__lidlFontCondPro_Fallback_0c4d29', Trebuchet MS, Arial, sans-serif"
        },
        className: "__className_0c4d29",
        variable: "__variable_0c4d29"
      }
    },
    467: function(e) {
      e.exports = {
        style: {
          fontFamily: "'__lidlFontPro_90b4d0', '__lidlFontPro_Fallback_90b4d0', Trebuchet MS, Arial, sans-serif"
        },
        className: "__className_90b4d0",
        variable: "__variable_90b4d0"
      }
    }
  }
]);