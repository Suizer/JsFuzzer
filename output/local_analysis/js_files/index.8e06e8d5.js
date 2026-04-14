(function() {
  const t = document.createElement("link")
    .relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) l(e);
  new MutationObserver(e => {
      for (const n of e)
        if (n.type === "childList")
          for (const a of n.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && l(a)
    })
    .observe(document, {
      childList: !0,
      subtree: !0
    });

  function i(e) {
    const n = {};
    return e.integrity && (n.integrity = e.integrity), e.referrerpolicy && (n.referrerPolicy = e.referrerpolicy), e.crossorigin === "use-credentials" ? n.credentials = "include" : e.crossorigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin", n
  }

  function l(e) {
    if (e.ep) return;
    e.ep = !0;
    const n = i(e);
    fetch(e.href, n)
  }
})();
const d = document.querySelector(".tracking-root");
d && (d.innerHTML = `
    <div data-qa-label="web-push-container">
      <h1>
          Push-Nachrichten f\xFCr den Browser verwalten
      </h1>
      <div>
          Die wichtigsten Angebote und Nachrichten von Lidl online k\xF6nnen Sie von uns auch als Push-Nachrichten erhalten. So bleiben Sie rund um die Uhr informiert und verpassen kein Angebot mehr.
      </div>
      <div>
          \xDCber den folgenden Schalter k\xF6nnen Sie sich dazu an- oder abmelden. Weitere Informationen dazu finden Sie in den <a href="https://www.lidl.de/c/datenschutz/s10007528#10016729" target="_blank">Datenschutzbestimmungen</a>.
      </div>

      <div class="track-message"></div>

      <div class="track-block">
        <label class="track-switch">
            <input type="checkbox"
                   role="switch"
                   disabled
                   class="track-switch__input">
            <span class="track-switch__title">Push-Nachrichten deaktivieren</span>
        </label>
      </div>
    </div>
  `);
const r = document.querySelector(".track-switch__input"),
  c = document.querySelector(".track-switch__title"),
  s = document.querySelector(".track-message");
if (r && c) {
  r.addEventListener("change", function() {
    this.checked ? batchSDK(function(t) {
      t.subscribe(), c.innerHTML = "Push-Nachrichten deaktivieren"
    }) : batchSDK(function(t) {
      t.unsubscribe(), c.innerHTML = "Push-Nachrichten aktivieren"
    }), batchSDK(t => {
      t.isSubscribed()
        .then(i => {
          i ? s.innerHTML = "Push-Nachrichten sind aktuell deaktiviert." : s.textContent = "Push-Nachrichten sind aktuell aktiviert."
        })
    })
  });
  const o = setInterval(() => {
    typeof batchSDK < "u" && (clearInterval(o), batchSDK(t => {
      r.disabled = !1, t.isSubscribed()
        .then(i => {
          i ? (r.checked = !0, c.textContent = "Push-Nachrichten deaktivieren", s.textContent = "Push-Nachrichten sind aktuell aktiviert.") : (r.checked = !1, c.textContent = "Push-Nachrichten aktivieren", s.textContent = "Push-Nachrichten sind aktuell deaktiviert.")
        })
    }))
  }, 2e3)
}