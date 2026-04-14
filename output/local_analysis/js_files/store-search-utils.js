export function prepareStoreSearchAndOpen(data) {
  if (!document.getElementById("storesearch")) {
    let nodeMap = document.createElement("div");
    nodeMap.id = "storesearch";
    document.body.appendChild(nodeMap);

    if (!data.searchFieldStandalone) {
      let nodeDialog = document.createElement("div");
      nodeDialog.classList.add("store-search__dialog");

      let nodeWrapper = document.createElement("div");
      nodeWrapper.classList.add("store-search__wrapper");

      let nodeLoader = document.createElement("div");
      nodeLoader.className = "store-search__loader";
      nodeWrapper.appendChild(nodeLoader);
      nodeDialog.appendChild(nodeWrapper);
      document.body.appendChild(nodeDialog);
    }

    //fallback - remove loading dialog after 30sec
    setTimeout(function loadingNotSuccessful() {
      const element = document.querySelector(".store-search__dialog");
      if (element) {
        element.remove();
      }
    }, 30000);

    loadJsIfNeeded(data);
    loadCssIfNeeded();
  } else {
    openStoreSearch(data);
  }
}

function openStoreSearch(data) {
  window.storeSearchReady = undefined;
  const event = new CustomEvent("storesearch:open", {
    detail: data
  });
  window.dispatchEvent(event);
}

function loadJsIfNeeded(data) {
  //TODO check if js already loaded independent from version number
  if (
    !document.querySelector(
      'script[src*="/s/storesearch-frontend/26_7_2/entry/index.js"]',
    )
  ) {
    //Register global ready Callback
    window.storeSearchReady = () => {
      openStoreSearch(data);
    };
    let script = document.createElement("script");
    script.src =
      "/s/storesearch-frontend/26_7_2/entry/index.js";
    script.async = false;
    script.type = "module";
    script.defer = true;
    document.head.append(script);
  } else {
    openStoreSearch(data);
  }
}

function loadCssIfNeeded() {
  //TODO check if css already loaded independent from version number
  if (
    !document.querySelector(
      'link[href*="/s/storesearch-frontend/26_7_2/css/index.css"]',
    )
  ) {
    let style = document.createElement("link");
    style.href = "/s/storesearch-frontend/26_7_2/css/index.css";
    style.rel = "stylesheet";
    style.type = "text/css";
    document.head.append(style);
  }
}

/**
 * Loads store-search-pop-up.js
 */
export function loadPopUpScript() {
  const scriptPath =
    "/s/storesearch-frontend/26_7_2/store-search-pop-up.js";

  if (document.querySelector(`script[src="${scriptPath}"]`)) {
    console.log("Pop-up script already loaded");

    return Promise.resolve();
  }
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = scriptPath;
    script.type = "module";
    script.async = true;

    script.onload = () => {
      console.log("Pop-up script loaded.");
      resolve();
    };

    script.onerror = (error) => {
      console.error("Error loading pop-up script.", error);
      reject(error);
    };

    document.head.appendChild(script);
  });
}