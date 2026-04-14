window.goBack = function goBack(fallback) {
  var useFallback = true;
  window.onbeforeunload = function() {
    useFallback = false;
  }
  window.history.back();

  setTimeout(function() {
    if (useFallback) {
      window.location.href = fallback;
    }
  }, 100);
}