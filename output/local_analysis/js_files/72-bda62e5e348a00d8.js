"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || [])
.push([
  [72], {
    4056: function(e, t, n) {
      n.d(t, {
        StandardIconButton: function() {
          return j
        }
      });
      var o = n(2265),
        l = n(3085),
        a = n(8330),
        r = n(3130),
        i = n(7796),
        s = n(9038),
        c = n(2634),
        d = n(1472);
      let u = (0, s.tv)({
        slots: {
          container: ["rounded-icon_button-radius flex items-center justify-center", (0, c.l)("group border-none outline-unset")],
          icon: ""
        },
        variants: {
          variant: {
            positive: {
              icon: ["fill-icon_button_standard-positive-color-icon", (0, c.l)(["group-focus-visible:fill-icon_button_standard-positive-color-icon-focused", "group-active:fill-icon_button_standard-positive-color-icon-pressed"])],
              container: ["bg-icon_button_standard-positive-color-background", (0, c.l)(["focus-visible:bg-icon_button_standard-positive-color-background-focused", "active:bg-icon_button_standard-positive-color-background-pressed"])]
            },
            negative: {
              icon: ["fill-icon_button_standard-negative-color-icon", (0, c.l)(["group-focus-visible:fill-icon_button_standard-negative-color-icon-focused", "group-active:fill-icon_button_standard-negative-color-icon-pressed"])],
              container: ["bg-icon_button_standard-negative-color-background", (0, c.l)(["focus-visible:bg-icon_button_standard-negative-color-background-focused", "active:bg-icon_button_standard-negative-color-background-pressed"])]
            },
            discrete: {
              icon: ["fill-icon_button_standard-discrete-color-icon", (0, c.l)(["group-focus-visible:fill-icon_button_standard-discrete-color-icon-focused", "group-active:fill-icon_button_standard-discrete-color-icon-pressed"])],
              container: ["bg-icon_button_standard-discrete-color-background", (0, c.l)(["focus-visible:bg-icon_button_standard-discrete-color-background-focused", "active:bg-icon_button_standard-discrete-color-background-pressed"])]
            }
          },
          size: {
            medium: {
              container: ["w-10 h-10 relative", (0, d.X)()]
            },
            small: {
              container: ["w-6 h-6 p-1 relative", (0, d.X)()]
            }
          },
          disabled: {
            true: {
              container: ["opacity-30", (0, c.l)("cursor-not-allowed")]
            },
            false: {
              container: (0, c.l)("focus")
            }
          },
          hover: {
            true: {
              container: ""
            }
          },
          isPressed: {
            true: {
              container: ""
            }
          }
        },
        compoundVariants: [{
          variant: "positive",
          hover: !0,
          class: {
            container: "bg-icon_button_standard-positive-color-background-focused",
            icon: "fill-icon_button_standard-positive-color-icon-focused"
          }
        }, {
          variant: "positive",
          isPressed: !0,
          class: {
            container: "bg-icon_button_standard-positive-color-background-pressed"
          }
        }, {
          variant: "positive",
          disabled: !0,
          class: {
            container: "active:bg-icon_button_standard-positive-color-background",
            icon: "group-active:fill-icon_button_standard-positive-color-icon"
          }
        }, {
          variant: "negative",
          hover: !0,
          class: {
            container: "bg-icon_button_standard-negative-color-background-focused",
            icon: "fill-icon_button_standard-negative-color-icon-focused"
          }
        }, {
          variant: "negative",
          isPressed: !0,
          class: {
            container: "bg-icon_button_standard-negative-color-background-pressed"
          }
        }, {
          variant: "negative",
          disabled: !0,
          class: {
            container: "active:bg-icon_button_standard-negative-color-background",
            icon: "group-active:fill-icon_button_standard-negative-color-icon"
          }
        }, {
          variant: "discrete",
          hover: !0,
          class: {
            container: "bg-icon_button_standard-discrete-color-background-focused"
          }
        }, {
          variant: "discrete",
          isPressed: !0,
          class: {
            container: "bg-icon_button_standard-discrete-color-background-pressed"
          }
        }, {
          variant: "discrete",
          disabled: !0,
          class: {
            container: "active:bg-icon_button_standard-discrete-color-background"
          }
        }]
      });
      var p = n(696),
        b = n(4593);
      let f = (...e) => t => {
        for (let n of e) "function" == typeof n ? n(t) : null != n && (n.current = t)
      };

      function g() {
        return (g = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)({})
                .hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
          })
          .apply(null, arguments)
      }
      let m = o.forwardRef((e, t) => {
        let {
          children: n,
          testID: l,
          style: a,
          className: r,
          ...i
        } = e, s = o.Children.toArray(n), c = s.find(h);
        if (c) {
          let e = c.props.children,
            n = s.map(t => t === c ? o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null : t);
          return o.createElement(_, g({}, i, {
            "data-testid": l,
            ref: t
          }), o.isValidElement(e) ? o.cloneElement(e, void 0, n) : null)
        }
        return o.createElement(_, g({}, i, {
          "data-testid": l,
          ref: t
        }), n)
      });
      m.displayName = "Slot";
      let _ = o.forwardRef((e, t) => {
        let {
          children: n,
          ...l
        } = e;
        return o.isValidElement(n) ? o.cloneElement(n, {
          ... function(e, t) {
            let n = {
              ...t
            };
            for (let o in t) {
              let l = e[o],
                a = t[o];
              /^on[A-Z]/.test(o) ? l && a ? n[o] = (...e) => {
                a(...e), l(...e)
              } : l && (n[o] = l) : "style" === o ? n[o] = {
                ...l,
                ...a
              } : "className" === o && (n[o] = [l, a].filter(Boolean)
                .join(" "))
            }
            return {
              ...e,
              ...n
            }
          }(l, n.props),
          ref: t ? f(t, n.ref) : n.ref
        }) : o.Children.count(n) > 1 ? o.Children.only(null) : null
      });
      _.displayName = "SlotClone";
      let y = ({
        children: e
      }) => o.createElement(o.Fragment, null, e);

      function h(e) {
        return o.isValidElement(e) && e.type === y
      }

      function v() {
        return (v = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)({})
                .hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
          })
          .apply(null, arguments)
      }
      let x = (0, o.forwardRef)(({
        as: e = b.R,
        asChild: t,
        testID: n,
        ...l
      }, a) => {
        let r = t ? m : e;
        return o.createElement(r, v({}, l, {
          "data-testid": n,
          ref: a
        }))
      });
      x.displayName = "Box";
      let k = "undefined" != typeof navigator && "ReactNative" === navigator.product,
        w = (0, n(4191)
          .hL)({
          twMergeConfig: {
            classGroups: {
              shadow: ["border", "inner", "none", "2xl", "xl", "lg", "md", "sm", "", "overlay", "overlay-native"]
            }
          }
        })({
          slots: {
            container: ["self-start relative flex-row"],
            textContainer: ["flex", "justify-center", "items-center", "shrink-0", "rounded-radius-full", "bg-notification_indicator-color-background", "tracking-[.3px] lg:tracking-[.25px]"]
          },
          variants: {
            quantity: {
              true: {
                textContainer: ["min-w-5", "px-space-small-200", "py-0"]
              },
              false: {
                textContainer: ["w-2", "h-2"]
              }
            },
            hasChildren: {
              true: {
                textContainer: ["absolute", "top-0", "right-0", !k && "translate-x-1/2 -translate-y-1/2"]
              }
            }
          },
          compoundVariants: [{
            quantity: !0,
            hasChildren: !0,
            class: {
              textContainer: k && "translate-x-[9px] -translate-y-[9px]"
            }
          }, {
            quantity: !1,
            hasChildren: !0,
            class: {
              textContainer: k && "translate-x-[4px] -translate-y-[4px]"
            }
          }]
        });
      var P = ({
        quantity: e
      }) => ({
        quantityText: (0, o.useMemo)(() => e ? e > 99 ? {
          mobile: "99+",
          desktop: "9..."
        } : {
          mobile: e.toString(),
          desktop: e.toString()
        } : {
          mobile: "",
          desktop: ""
        }, [e])
      });

      function O() {
        return (O = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)({})
                .hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
          })
          .apply(null, arguments)
      }
      let E = ({
        quantity: e,
        children: t,
        className: n,
        textContainerClassName: l,
        ...a
      }) => {
        let {
          quantityText: r
        } = P({
          quantity: e
        }), {
          container: i,
          textContainer: s
        } = w({
          quantity: !!e,
          hasChildren: !!t
        });
        return o.createElement(x, O({}, a, {
          className: i({
            class: n
          })
        }), t, o.createElement(x, {
          className: s({
            className: l
          })
        }, o.createElement(p.x, O({
          typography: "footnote",
          isProminent: !0,
          className: "text-notification_indicator-color-content lg:hidden text-center"
        }, !k && {
          as: "span"
        }), r.mobile), o.createElement(p.x, O({
          typography: "footnote",
          isProminent: !0,
          className: "text-notification_indicator-color-content hidden lg:inline"
        }, !k && {
          as: "span"
        }), r.desktop)))
      };
      E.displayName = "NotificationIndicator";
      let C = e => {
        let {
          withIndicator: t,
          quantity: n,
          size: l,
          children: a
        } = e;
        return "medium" === l && t ? o.createElement(E, {
          quantity: n,
          textContainerClassName: "top-2 right-2"
        }, a) : a
      };

      function N() {
        return (N = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)({})
                .hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
          })
          .apply(null, arguments)
      }
      C.displayName = "StandardIconButton";
      let j = e => {
        let {
          disabled: t = !1,
          onPressIn: n,
          onPressOut: s,
          onHoverIn: c,
          onHoverOut: d,
          size: p = "medium",
          variant: b = "positive",
          icon: f,
          role: g = "button",
          withIndicator: m,
          quantity: _,
          className: y,
          ...h
        } = e, {
          isHovered: v,
          isPressed: x,
          onPressIn: k,
          onPressOut: w,
          onHoverIn: P,
          onHoverOut: O
        } = (0, r.e)({
          isDisabled: t,
          onPressIn: n,
          onPressOut: s,
          onHoverIn: c,
          onHoverOut: d
        }), {
          container: E,
          icon: j
        } = u({
          disabled: t,
          size: p,
          variant: b,
          hover: v,
          isPressed: x
        }), H = (0, o.useMemo)(() => "medium" === p ? 24 : 16, [p]), I = (0, o.useMemo)(() => "medium" === p ? 2 : 10, [p]);
        return o.createElement(C, {
          quantity: _,
          withIndicator: m,
          size: p
        }, o.createElement(l.s, N({
          disabled: t,
          role: g,
          className: E({
            class: y
          }),
          onPressIn: k,
          onPressOut: w,
          onHoverIn: P,
          onHoverOut: O
        }, !a.b && {
          as: "button"
        }, a.b && {
          hitSlop: I
        }, h), o.createElement(i.JO, {
          size: H,
          className: j(),
          name: f
        })))
      };
      j.displayName = "StandardIconButton"
    },
    4941: function(e, t, n) {
      n.d(t, {
        i: function() {
          return s
        }
      });
      var o = n(2265),
        l = n(8713),
        a = n(5822);
      let r = (0, n(8440)
        .tv)({
        base: "border-t-[1px] border-t-divider-color-background w-full"
      });

      function i() {
        return (i = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)({})
                .hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
          })
          .apply(null, arguments)
      }
      let s = ({
        className: e,
        ...t
      }) => o.createElement(l.x, i({
        className: r({
          class: e
        })
      }, t, !a.b && {
        as: "hr"
      }));
      s.displayName = "Divider"
    },
    9968: function(e, t, n) {
      n.d(t, {
        Z: function() {
          return _
        }
      });
      var o = n(2265),
        l = n(8713),
        a = n(4593);

      function r() {
        return (r = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)({})
                .hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
          })
          .apply(null, arguments)
      }
      let i = (0, o.forwardRef)((e, t) => {
        let {
          children: n,
          onClick: l,
          onPress: i,
          onPressIn: s,
          onPressOut: c,
          onHoverIn: d,
          onHoverOut: u,
          onKeyDown: p,
          as: b = "div",
          ...f
        } = e, g = e => {
          i && i(e), l && l(e)
        };
        return o.createElement(a.R, r({
          as: b,
          ref: t
        }, f, {
          onClick: g,
          onMouseDown: s,
          onMouseUp: c,
          onMouseEnter: d,
          onMouseLeave: u,
          onKeyDown: e => {
            p ? p?.(e) : ("Enter" === e.key || " " === e.key) && (e.preventDefault(), g())
          }
        }), n)
      });
      i.displayName = "Pressable";
      var s = n(5822);

      function c({
        isDisabled: e,
        isHovered: t,
        onPressIn: n,
        onPressOut: l,
        onHoverIn: a,
        onHoverOut: r
      }) {
        let {
          isHovered: i,
          onHoverIn: s,
          onHoverOut: c
        } = function(e = !1) {
          let [t, n] = (0, o.useState)(e);
          return {
            isHovered: t,
            onHoverIn: (0, o.useCallback)(() => {
              n(!0)
            }, []),
            onHoverOut: (0, o.useCallback)(() => {
              n(!1)
            }, [])
          }
        }(t), [d, u] = (0, o.useState)(!1), p = (0, o.useCallback)(t => {
          e || (u(!0), n?.(t))
        }, [n, e]);
        return {
          isHovered: t || i,
          isPressed: d,
          onPressIn: p,
          onPressOut: (0, o.useCallback)(t => {
            e || (u(!1), l?.(t))
          }, [l, e]),
          onHoverIn: (0, o.useCallback)(t => {
            e || (s?.(), a?.(t))
          }, [s, a, e]),
          onHoverOut: (0, o.useCallback)(t => {
            e || (c?.(), r?.(t))
          }, [c, r, e])
        }
      }
      var d = n(4941),
        u = n(3813),
        p = n(8440),
        b = n(639);
      let f = (0, p.tv)({
        slots: {
          container: ["flex flex-col w-full items-start bg-list-color-background", (0, b.l)("border-none outline-unset focus")],
          contentContainer: "flex flex-row min-h-16 py-space-medium-300 px-space-medium-200 items-center gap-space-medium-100 w-full",
          headerContainer: "flex flex-col gap-3 flex-grow flex-shrink basis-0 overflow-hidden",
          dividerContainer: "flex flex-col items-start px-space-medium-200 w-full",
          textContainer: "flex flex-col items-start text-start",
          title: ["text-list-color-title", (0, b.l)("max-w-full overflow-hidden text-ellipsis")],
          description: ["text-list-color-description", (0, b.l)("max-w-full overflow-hidden text-ellipsis")]
        },
        variants: {
          hover: {
            true: {
              container: "bg-list-color-background-pressed"
            }
          },
          focus: {
            true: {
              container: (0, b.l)("focus")
            }
          },
          pressable: {
            true: {
              container: (0, b.l)("cursor-pointer")
            }
          }
        }
      });
      var g = ({
        title: e,
        description: t,
        startContent: n,
        endContent: a,
        bottomContent: r,
        showDivider: i = !0,
        badge: s,
        onPressIn: p,
        onPressOut: b,
        onHoverIn: g,
        onHoverOut: m
      }) => {
        let {
          isHovered: _
        } = c({
          onPressIn: p,
          onPressOut: b,
          onHoverIn: g,
          onHoverOut: m
        }), {
          title: y,
          textContainer: h,
          description: v,
          headerContainer: x,
          dividerContainer: k,
          contentContainer: w
        } = f({
          hover: _
        });
        return o.createElement(o.Fragment, null, o.createElement(l.x, {
          className: w()
        }, n && o.createElement(l.x, {
          className: "flex-shrink-0 self-start"
        }, n), o.createElement(l.x, {
          className: x()
        }, o.createElement(l.x, {
          className: h()
        }, o.createElement(u.x, {
          className: y(),
          typography: "headline_6",
          isProminent: !0
        }, e), t && o.createElement(u.x, {
          className: v(),
          typography: "small_1"
        }, t), s && o.createElement(l.x, {
          className: "mt-3"
        }, s)), r), a && o.createElement(l.x, {
          className: "flex-shrink-0"
        }, a)), i && o.createElement(l.x, {
          className: k()
        }, o.createElement(d.i, {
          className: "w-full"
        })))
      };

      function m() {
        return (m = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)({})
                .hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
          })
          .apply(null, arguments)
      }
      var _ = e => {
        let {
          onPressIn: t,
          onPressOut: n,
          onHoverIn: a,
          onHoverOut: r,
          className: d,
          isPressable: u = !0,
          isFocusable: p = !0,
          startContent: b,
          endContent: _,
          showDivider: y,
          ...h
        } = e, {
          isHovered: v,
          onPressIn: x,
          onPressOut: k,
          onHoverIn: w,
          onHoverOut: P
        } = c({
          onPressIn: t,
          onPressOut: n,
          onHoverIn: a,
          onHoverOut: r
        }), {
          container: O
        } = f({
          hover: v,
          focus: p,
          pressable: u
        });
        return u ? o.createElement(i, m({
          onPressIn: x,
          onPressOut: k,
          onHoverIn: w,
          onHoverOut: P,
          className: O({
            class: d
          })
        }, !s.b && {
          as: "button"
        }, h), o.createElement(g, m({
          startContent: b,
          endContent: _,
          showDivider: y
        }, e))) : o.createElement(l.x, m({
          className: O({
            class: d
          })
        }, h), o.createElement(g, m({
          startContent: b,
          endContent: _,
          showDivider: y
        }, e)))
      }
    },
    3813: function(e, t, n) {
      n.d(t, {
        x: function() {
          return c
        }
      });
      var o = n(2265),
        l = n(4593);

      function a() {
        return (a = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)({})
                .hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
          })
          .apply(null, arguments)
      }
      let r = (0, o.forwardRef)(({
        as: e = "p",
        ...t
      }, n) => o.createElement(l.R, a({
        as: e
      }, t, {
        ref: n
      })));
      r.displayName = "Text";
      let i = (0, n(8440)
        .tv)({
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

      function s() {
        return (s = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)({})
                .hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
          })
          .apply(null, arguments)
      }
      let c = (0, o.forwardRef)(({
        typography: e = "body_normal",
        isProminent: t,
        color: n = "basic_black",
        className: l,
        as: a,
        ...c
      }, d) => o.createElement(r, s({
        as: a,
        className: i({
          typography: e,
          isProminent: t,
          color: n,
          class: l
        })
      }, c, {
        ref: d
      })));
      c.displayName = "Text"
    },
    1994: function(e, t, n) {
      t.Z = function() {
        for (var e, t, n = 0, o = "", l = arguments.length; n < l; n++)(e = arguments[n]) && (t = function e(t) {
          var n, o, l = "";
          if ("string" == typeof t || "number" == typeof t) l += t;
          else if ("object" == typeof t) {
            if (Array.isArray(t)) {
              var a = t.length;
              for (n = 0; n < a; n++) t[n] && (o = e(t[n])) && (l && (l += " "), l += o)
            } else
              for (o in t) t[o] && (l && (l += " "), l += o)
          }
          return l
        }(e)) && (o && (o += " "), o += t);
        return o
      }
    }
  }
]);