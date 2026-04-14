! function() {
  const e = document.querySelectorAll(".AHeaderSubLevel__EmotionalMedia--desktopvideo video"),
    o = document.querySelectorAll(".AHeaderSubLevel__EmotionalMedia--mobilevideo video");
  window.matchMedia("(min-width: 48rem)")
    .addEventListener("change", d => {
      d.matches ? e.forEach(e => e.load()) : o.forEach(e => e.load())
    })
}();