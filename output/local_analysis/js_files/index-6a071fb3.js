(function() {
  const i = document.createElement("link")
    .relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) a(s);
  new MutationObserver(s => {
      for (const e of s)
        if (e.type === "childList")
          for (const t of e.addedNodes) t.tagName === "LINK" && t.rel === "modulepreload" && a(t)
    })
    .observe(document, {
      childList: !0,
      subtree: !0
    });

  function b(s) {
    const e = {};
    return s.integrity && (e.integrity = s.integrity), s.referrerpolicy && (e.referrerPolicy = s.referrerpolicy), s.crossorigin === "use-credentials" ? e.credentials = "include" : s.crossorigin === "anonymous" ? e.credentials = "omit" : e.credentials = "same-origin", e
  }

  function a(s) {
    if (s.ep) return;
    s.ep = !0;
    const e = b(s);
    fetch(s.href, e)
  }
})();
(async function() {
  const u = "t/cdn/tracking-components/web-push-sdk/domainSetup",
    i = window.mindShiftNav.topDomain,
    a = `${window.location.origin}/${u}/${i}.json`;
  try {
    const s = await fetch(a);
    if (!s.ok) throw new Error(`Failed to fetch JSON (${s.status} ${s.statusText})`);
    const e = await s.json();
    let t = {};
    switch (window.mindShiftNav.locale) {
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
          ${i==="be"?t.title:e.unsubscribeText.title}
        </h1>
        <div>
          ${i==="be"?t.firstParahraph:e.unsubscribeText.firstParahraph}
        </div>
        <div>
          ${i==="be"?t.secondParagraph:e.unsubscribeText.secondParagraph}
        </div>
  
        <div class="track-message"></div>
  
        <div class="track-block">
          <label class="track-switch">
              <input type="checkbox"
                     role="switch"
                     disabled
                     class="track-switch__input">
              <span class="track-switch__title">${i==="be"?t.toggleMessageOff:e.unsubscribeText.toggleMessageOff}</span>
          </label>
        </div>
      </div>
    `);
    const c = document.querySelector(".track-switch__input"),
      n = document.querySelector(".track-switch__title"),
      o = document.querySelector(".track-message");
    if (c && n) {
      c.addEventListener("change", function() {
        this.checked ? batchSDK(function(r) {
          r.subscribe(), n.innerHTML = i === "be" ? t.toggleMessageOff : e.unsubscribeText.toggleMessageOff
        }) : batchSDK(function(r) {
          r.unsubscribe(), n.innerHTML = i === "be" ? t.toggleMessageOn : e.unsubscribeText.toggleMessageOn
        }), batchSDK(r => {
          r.isSubscribed()
            .then(l => {
              l ? o.innerHTML = n.innerHTML = i === "be" ? t.disabledNotifications : e.unsubscribeText.disabledNotifications : o.textContent = i === "be" ? t.activeNotifications : e.unsubscribeText.activeNotifications
            })
        })
      });
      const d = setInterval(() => {
        typeof batchSDK < "u" && (clearInterval(d), batchSDK(r => {
          c.disabled = !1, r.isSubscribed()
            .then(l => {
              l ? (c.checked = !0, n.textContent = n.innerHTML = i === "be" ? t.toggleMessageOff : e.unsubscribeText.toggleMessageOff, o.textContent = o.textContent = i === "be" ? t.activeNotifications : e.unsubscribeText.activeNotifications) : (c.checked = !1, n.textContent = n.innerHTML = i === "be" ? t.toggleMessageOn : e.unsubscribeText.toggleMessageOn, o.textContent = o.innerHTML = n.innerHTML = i === "be" ? t.disabledNotifications : e.unsubscribeText.disabledNotifications)
            })
        }))
      }, 2e3)
    }
  } catch (s) {
    console.error(`Error loading ${a}: ${s}`)
  }
})();