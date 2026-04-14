(function() {
  const s = document.createElement("link")
    .relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver(i => {
      for (const e of i)
        if (e.type === "childList")
          for (const t of e.addedNodes) t.tagName === "LINK" && t.rel === "modulepreload" && r(t)
    })
    .observe(document, {
      childList: !0,
      subtree: !0
    });

  function b(i) {
    const e = {};
    return i.integrity && (e.integrity = i.integrity), i.referrerpolicy && (e.referrerPolicy = i.referrerpolicy), i.crossorigin === "use-credentials" ? e.credentials = "include" : i.crossorigin === "anonymous" ? e.credentials = "omit" : e.credentials = "same-origin", e
  }

  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const e = b(i);
    fetch(i.href, e)
  }
})();
(async function() {
  const u = "t/cdn/tracking-components/web-push-sdk/domainSetup",
    s = window.mindShiftNav && window.mindShiftNav.topDomain ? window.mindShiftNav.topDomain : new URL(window.location.href)
    .hostname.split(".")
    .pop(),
    r = `${window.location.origin}/${u}/${s}.json`;
  try {
    const i = await fetch(r);
    if (!i.ok) throw new Error(`Failed to fetch JSON (${i.status} ${i.statusText})`);
    const e = await i.json();
    let t = {};
    switch (e.title && window.location.pathname === "/t/cti/web-push" && (document.title = e.title), window.mindShiftNav.locale) {
      case "fr-BE":
        t.firstParahraph = e.fr_BE.unsubscribeText.firstParagraph, t.secondParagraph = e.fr_BE.unsubscribeText.secondParagraph, t.title = e.fr_BE.unsubscribeText.title, t.activeNotifications = e.fr_BE.unsubscribeText.activeNotifications, t.disabledNotifications = e.fr_BE.unsubscribeText.disabledNotifications, t.toggleMessageOn = e.fr_BE.unsubscribeText.toggleMessageOn, t.toggleMessageOff = e.fr_BE.unsubscribeText.toggleMessageOff;
        break;
      case "nl-BE":
        t.firstParahraph = e.nl_BE.unsubscribeText.firstParagraph, t.secondParagraph = e.nl_BE.unsubscribeText.secondParagraph, t.title = e.nl_BE.unsubscribeText.title, t.activeNotifications = e.nl_BE.unsubscribeText.activeNotifications, t.disabledNotifications = e.nl_BE.unsubscribeText.disabledNotifications, t.toggleMessageOn = e.nl_BE.unsubscribeText.toggleMessageOn, t.toggleMessageOff = e.nl_BE.unsubscribeText.toggleMessageOff;
        break
    }
    const f = document.querySelector(".tracking-root");
    f && (f.innerHTML = `
      <div data-qa-label="web-push-container">
        <h1>
          ${s==="be"?t.title:e.unsubscribeText.title}
        </h1>
        <div>
          ${s==="be"?t.firstParahraph:e.unsubscribeText.firstParahraph}
        </div>
        <div>
          ${s==="be"?t.secondParagraph:e.unsubscribeText.secondParagraph}
        </div>
  
        <div class="track-message"></div>
  
        <div class="track-block">
          <label class="track-switch">
              <input type="checkbox"
                     role="switch"
                     disabled
                     class="track-switch__input">
              <span class="track-switch__title">${s==="be"?t.toggleMessageOff:e.unsubscribeText.toggleMessageOff}</span>
          </label>
        </div>
      </div>
    `);
    const c = document.querySelector(".track-switch__input"),
      n = document.querySelector(".track-switch__title"),
      a = document.querySelector(".track-message");
    if (c && n) {
      c.addEventListener("change", function() {
        this.checked ? batchSDK(function(o) {
          o.subscribe(), n.innerHTML = s === "be" ? t.toggleMessageOff : e.unsubscribeText.toggleMessageOff
        }) : batchSDK(function(o) {
          o.unsubscribe(), n.innerHTML = s === "be" ? t.toggleMessageOn : e.unsubscribeText.toggleMessageOn
        }), batchSDK(o => {
          o.isSubscribed()
            .then(l => {
              l ? a.innerHTML = n.innerHTML = s === "be" ? t.disabledNotifications : e.unsubscribeText.disabledNotifications : a.textContent = s === "be" ? t.activeNotifications : e.unsubscribeText.activeNotifications
            })
        })
      });
      const d = setInterval(() => {
        typeof batchSDK < "u" && (clearInterval(d), batchSDK(o => {
          c.disabled = !1, o.isSubscribed()
            .then(l => {
              l ? (c.checked = !0, n.textContent = n.innerHTML = s === "be" ? t.toggleMessageOff : e.unsubscribeText.toggleMessageOff, a.textContent = a.textContent = s === "be" ? t.activeNotifications : e.unsubscribeText.activeNotifications) : (c.checked = !1, n.textContent = n.innerHTML = s === "be" ? t.toggleMessageOn : e.unsubscribeText.toggleMessageOn, a.textContent = a.innerHTML = n.innerHTML = s === "be" ? t.disabledNotifications : e.unsubscribeText.disabledNotifications)
            })
        }))
      }, 2e3)
    }
  } catch (i) {
    console.error(`Error loading ${r}: ${i}`)
  }
})();