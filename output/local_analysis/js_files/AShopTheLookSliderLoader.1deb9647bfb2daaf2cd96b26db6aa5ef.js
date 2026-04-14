(() => {
  function e() {
    const e = async e => {
      if (0 === e.length) return;
      const t = new CustomEvent("stl-slider:items-added");
      try {
        const t = Array.from(e)
          .map(e => e.dataset.stlId),
          o = function() {
            const e = document.documentElement.lang;
            if (!e) throw new Error("AShopTheLookSliderLoader: lang attribute not found on <html> tag.");
            return e.replace("-", "_")
          }(),
          r = await async function(e, t) {
            const o = new URLSearchParams({
                "component-ids": e.join(","),
                locale: t
              }),
              r = await fetch(`/c/fragment/shopthelookslider?${o.toString()}`);
            if (!r.ok) throw new Error(`Failed to fetch STL fragments: ${r.statusText}`);
            return r.text()
          }(t, o);
        ! function(e, t) {
          const o = (new DOMParser)
            .parseFromString(e, "text/html");
          o.querySelectorAll("style")
            .forEach(e => {
              document.body.prepend(e)
            });
          const r = new Map;
          t.forEach(e => r.set(e.dataset.stlId, e)), t.forEach((e, t) => {
            const r = e.dataset.stlId,
              n = o.querySelector(`[data-stl-id="${r}"]`);
            if (n) {
              const o = e.dataset.creativeSlot,
                r = n.firstChild.dataset.unifiedImpression;
              if (o && r) try {
                const e = JSON.parse(decodeURIComponent(r));
                e.hasOwnProperty("promotionName") && (e.promotionName = "Shop_the_Look_Reco_Slider"), e.hasOwnProperty("creativeSlot") && (e.creativeSlot = o, n.firstChild.dataset.unifiedImpression = encodeURIComponent(JSON.stringify(e)), n.querySelectorAll("[data-unified-click]")
                  .forEach(e => {
                    const t = JSON.parse(decodeURIComponent(e.dataset.unifiedClick));
                    t.hasOwnProperty("creativeSlot") && (t.creativeSlot = o, e.dataset.unifiedClick = encodeURIComponent(JSON.stringify(t)));
                    const r = JSON.parse(decodeURIComponent(e.dataset.unifiedHover));
                    r.hasOwnProperty("creativeSlot") && (r.creativeSlot = o, e.dataset.unifiedHover = encodeURIComponent(JSON.stringify(r)))
                  }))
              } catch (e) {
                console.error("AShopTheLookSliderLoader: Failed to parse or update unified impression data.", e)
              }
              e.replaceWith(n), n.removeAttribute("data-stl-id");
              const a = n.querySelectorAll("[data-product-ref='true']");
              if (a.length > 0) {
                const e = e => {
                  const t = e.currentTarget,
                    o = t.hasAttribute("data-active");
                  a.forEach(e => e.removeAttribute("data-active")), o || t.setAttribute("data-active", "true")
                };
                if (a.forEach(t => {
                    t.addEventListener("click", e)
                  }), 0 === t) {
                  const e = a[0];
                  e.setAttribute("data-active", "true");
                  const t = () => {
                    e.removeAttribute("data-active"), a.forEach(e => {
                      e.removeEventListener("pointerenter", t)
                    })
                  };
                  a.forEach(e => {
                    e.addEventListener("pointerenter", t)
                  })
                }
              }
            }
          })
        }(r, e),
        function(e) {
          const t = e.querySelectorAll('[data-type="shopthelook"] .ods-carousel__track');
          if (!t.length) return;
          const o = new CustomEvent("slider:scroll", {
              bubbles: !0,
              composed: !0,
              detail: {
                elementsArr: []
              }
            }),
            r = new IntersectionObserver(e => {
              const t = e.filter(e => e.isIntersecting && !e.target.getAttribute("data-slider-element-shown"))
                .map(e => e.target);
              t.length && (o.detail.elementsArr = t, t.forEach(e => e.setAttribute("data-slider-element-shown", "true")), document.dispatchEvent(o))
            }, {
              threshold: .5
            });
          t.forEach(e => {
            e.querySelectorAll(".stl-slider-fragment")
              .forEach(e => r.observe(e))
          })
        }(document),
        function() {
          const e = e => {
            const t = e.currentTarget;
            t && t.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "nearest"
            })
          };
          document.querySelectorAll(".stl-slider-fragment")
            .forEach(t => {
              t.addEventListener("click", e)
            })
        }()
      } catch (e) {
        console.error("AShopTheLookSliderLoader: Error loading fragments.", e)
      } finally {
        document.dispatchEvent(t)
      }
    };
    this.init = function(t) {
      const o = function(e) {
        return e.querySelectorAll("[data-stl-id]")
      }(t);
      o.length > 0 && e(o);
      new MutationObserver(t => {
          const o = [];
          if (t.forEach(e => {
              e.addedNodes.forEach(e => {
                if (e.nodeType === Node.ELEMENT_NODE) {
                  e.matches("[data-stl-id]") && o.push(e);
                  const t = e.querySelectorAll("[data-stl-id]");
                  t.length > 0 && o.push(...t)
                }
              })
            }), o.length > 0) {
            const t = [...new Set(o)];
            e(t)
          }
        })
        .observe(t, {
          childList: !0,
          subtree: !0
        })
    }
  }
  document.addEventListener("DOMContentLoaded", function() {
    (new e)
    .init(document.body)
  })
})();