(function() {
  const n = document.createElement("link")
    .relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) l(e);
  new MutationObserver(e => {
      for (const t of e)
        if (t.type === "childList")
          for (const a of t.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && l(a)
    })
    .observe(document, {
      childList: !0,
      subtree: !0
    });

  function s(e) {
    const t = {};
    return e.integrity && (t.integrity = e.integrity), e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy), e.crossorigin === "use-credentials" ? t.credentials = "include" : e.crossorigin === "anonymous" ? t.credentials = "omit" : t.credentials = "same-origin", t
  }

  function l(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = s(e);
    fetch(e.href, t)
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
const i = document.querySelector(".track-switch__input"),
  r = document.querySelector(".track-switch__title"),
  c = document.querySelector(".track-message");
if (i && r) {
  i.addEventListener("change", function() {
    this.checked ? batchSDK(function(n) {
      n.subscribe(), r.innerHTML = "Push-Nachrichten aktivieren", c.innerHTML = "Push-Nachrichten sind aktuell deaktiviert."
    }) : batchSDK(function(n) {
      n.unsubscribe(), r.innerHTML = "Push-Nachrichten deaktivieren", c.innerHTML = "Push-Nachrichten sind aktuell aktiviert."
    })
  });
  const o = setInterval(() => {
    typeof batchSDK < "u" && (clearInterval(o), batchSDK(n => {
      i.disabled = !1, n.isSubscribed()
        .then(s => {
          s ? (i.checked = !0, r.textContent = "Push-Nachrichten deaktivieren", c.textContent = "Push-Nachrichten sind aktuell aktiviert.") : (i.checked = !1, r.textContent = "Push-Nachrichten aktivieren", c.textContent = "Push-Nachrichten sind aktuell deaktiviert.")
        })
    }))
  }, 2e3)
}