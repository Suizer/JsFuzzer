! function() {
  const e = e => {
    if ("keydown" === e.type && "Enter" !== e.key && " " !== e.key) return;
    "keydown" === e.type && " " === e.key && e.preventDefault();
    const t = e.currentTarget.getAttribute("aria-expanded");
    e.currentTarget.setAttribute("aria-expanded", "false" === t ? "true" : "false")
  };
  document.querySelectorAll("[data-legal-text-collapsible]")
    .forEach(t => {
      const r = t.querySelector("[aria-controls]");
      r && (r.addEventListener("click", e), r.addEventListener("keydown", e))
    })
}();