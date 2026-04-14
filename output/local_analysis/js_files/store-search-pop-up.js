import {
  prepareStoreSearchAndOpen
} from "./store-search-utils.js";

const template = document.createElement("template");
template.innerHTML = `
<style>
    .store-search-pop-up {       
      position: fixed;
      top: 0;
      left: 0;
      z-index: 9999;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      width: calc(100% - 2rem);
      height: calc(100% - 2rem);
      pointer-events: none;
      padding: 1rem;
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    .store-search-pop-up.visible {
      opacity: 1;
    }
    .store-search-pop-up.hidden {
      opacity: 0;
    }
    .store-search-pop-up__item {
      width: 100%;
      border-radius: 0.5rem;
      background: #1e2124;
      padding: 1rem;
      pointer-events: auto;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0.75rem;
      transform: translateY(-100px);
      transition: transform 0.4s ease, opacity 0.4s ease;
    }
    .store-search-pop-up.visible .store-search-pop-up__item {
      transform: translateY(0); 
    }
    .store-search-pop-up.hidden .store-search-pop-up__item {
      transform: translateY(-100px);
      transition: transform 0.2s ease, opacity 0.2s ease;
    }
    .store-search-pop-up__container {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
    }
    .store-search-pop-up__success-icon {
      order: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .store-search-pop-up__text {       
      order: 2;
      font-family: 'LidlFontPro', Arial, Helvetica, sans-serif;
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: #ffffff;
      margin-top: 0;
      margin-bottom: 0;
      padding-right: 0.5rem;
    }
    .store-search-pop-up__close-button {
      all: unset;
      order: 3;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 1.5rem;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 0.75rem;
      fill: #ffffff;
      pointer-events: auto;
      cursor: pointer;
    }
    .store-search-pop-up__close-button:hover {
      background-color: #ffffff;
      fill: #636d79;
    }
    .store-search-pop-up__close-button:focus {
      border-radius: 0;
      outline: 2px solid #ffffff;
    }
    .store-search-pop-up__store-search-button {
      all: unset;
      white-space: nowrap;
      font-family: 'LidlFontPro', Arial, Helvetica, sans-serif;
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.25rem;
      color: #fff000;
      pointer-events: auto;
      cursor: pointer;
    }
    .store-search-pop-up__store-search-button:hover {
      color: #ffc400;
    }
    .store-search-pop-up__store-search-button:focus {
      color: #ffc400;
      outline: 2px solid #ffffff;
      outline-offset: 2px;
    }
    @media (min-width: 568px) {
      .store-search-pop-up__item {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: fit-content;
        max-width: 1320px;
      }
      .store-search-pop-up__container {
        display: contents;
      }
      .store-search-pop-up__success-icon {
        order: 1;
      }
      .store-search-pop-up__text {       
        order: 2;
        padding-right: 1rem;
      }
      .store-search-pop-up__store-search-button {
        order: 3;
      }
      .store-search-pop-up__close-button {
        order: 4;
      }
    }
    @media (min-width: 1440px) {
      .store-search-pop-up__text {  
        font-size: 1rem;
        line-height: 1.25rem;
        padding-right: 1.5rem;
      }
      .store-search-pop-up__store-search-button {
        font-size: 1.125rem;
        line-height: 1.5rem;
      }
    }
}
</style>
<div class="store-search-pop-up">
    <div class="store-search-pop-up__item">
        <div class="store-search-pop-up__container">
          <span class="store-search-pop-up__success-icon">
            <svg width="24" height="24" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
              <path fill="#00e09d" d="M30 1.5C14.29 1.5 1.5 14.29 1.5 30C1.5 45.71 14.29 58.5 30 58.5C45.71 58.5 58.5 45.71 58.5 30C58.5 14.29 45.71 1.5 30 1.5ZM30 55.5C15.94 55.5 4.5 44.06 4.5 30C4.5 15.94 15.94 4.5 30 4.5C44.06 4.5 55.5 15.94 55.5 30C55.5 44.06 44.06 55.5 30 55.5Z" />
              <path fill="#00e09d" d="M42.17 19.71L25 36.88L16.41 28.29C16.21 28.09 15.9 28.09 15.7 28.29L14.29 29.7C14.09 29.9 14.09 30.21 14.29 30.41L23.58 39.7C24.36 40.48 25.63 40.48 26.41 39.7L45.7 20.41C45.9 20.21 45.9 19.9 45.7 19.7C44.73 18.73 43.15 18.73 42.17 19.71Z" />
            </svg>
          </span>
          <p class="store-search-pop-up__text" part="text" role="alert"></p>
          <button class="store-search-pop-up__close-button">
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.56522 8L15.3892 1.176C15.4426 1.12267 15.4426 1.04 15.3892 0.986667L15.0132 0.610667C14.9599 0.557334 14.8772 0.557334 14.8239 0.610667L7.99989 7.43467L1.17589 0.610667C1.12256 0.557334 1.03989 0.557334 0.986557 0.610667L0.610557 0.989334C0.557223 1.04267 0.557223 1.12533 0.610557 1.17867L7.43456 8L0.610557 14.824C0.557223 14.8773 0.557223 14.96 0.610557 15.0133C0.87189 15.2747 1.29322 15.2747 1.55456 15.0133L7.99989 8.56533L14.4452 15.0107C14.7066 15.272 15.1279 15.272 15.3892 15.0107C15.4426 14.9573 15.4426 14.8747 15.3892 14.8213L8.56522 8Z" />
            </svg>
          </button>
        </div>
        <button class="store-search-pop-up__store-search-button">
          <span class="store-search-pop-up__store-search-button-label" part="text"></span>
        </button>
    </div>
</div>
`;

// web component
class StoreSearchPopUp extends HTMLElement {
  constructor() {
    super();

    this.locale = window.mindShiftNav && window.mindShiftNav.locale;
    this.shadow = this.attachShadow({
      mode: "closed"
    });
    this.shadow.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this._queryTranslations()
      .then((translations) => {
        const wrapper = this.shadow.querySelector(".store-search-pop-up");
        const popUpText = this.shadow.querySelector(".store-search-pop-up__text");
        const closeButton = this.shadow.querySelector(
          ".store-search-pop-up__close-button",
        );
        const storeSearchButton = this.shadow.querySelector(
          ".store-search-pop-up__store-search-button",
        );
        const storeSearchButtonLabel = this.shadow.querySelector(
          ".store-search-pop-up__store-search-button-label",
        );
        const successIcon = this.shadow.querySelector(
          ".store-search-pop-up__success-icon",
        );
        const item = this.shadow.querySelector(".store-search-pop-up__item");

        const showAltPopUp = this.getAttribute("show-alt-pop-up") === "true";
        const detectedRegion = this.getAttribute("detected-region");

        if (showAltPopUp === true) {
          if (successIcon) {
            successIcon.style.display = "none";
            storeSearchButton.style.display = "none";
            item.style.alignItems = "normal";
            popUpText.style.marginTop = "0.125rem";

            popUpText.textContent =
              translations[
                `${this.locale}.storeSearch.storeSearchPopUp.regionalization.labelLocationAlt`
              ] +
              " " +
              detectedRegion.trim() +
              ". " +
              translations[
                `${this.locale}.storeSearch.storeSearchPopUp.regionalization.textAlt`
              ];
          }
        } else {
          popUpText.textContent =
            translations[
              `${this.locale}.storeSearch.storeSearchPopUp.regionalization.labelLocation`
            ] +
            ": " +
            detectedRegion.trim() +
            ". " +
            translations[
              `${this.locale}.storeSearch.storeSearchPopUp.regionalization.text`
            ];
        }

        storeSearchButtonLabel.innerText =
          translations[
            `${this.locale}.storeSearch.storeSearchPopUp.regionalization.searchButton`
          ];

        requestAnimationFrame(() => {
          wrapper.classList.add("visible");
        });

        closeButton.setAttribute(
          "aria-label",
          translations[
            `${this.locale}.storeSearch.storeSearchPopUp.regionalization.closeButtonA11yLabel`
          ],
        );
        closeButton.addEventListener("click", () => {
          this.closePopUp();
        });

        storeSearchButton.addEventListener("click", () => {
          let storeData = {
            type: "storeSearch",
          };
          prepareStoreSearchAndOpen(storeData);
          this.closePopUp();
        });

        this.autoCloseTimer = setTimeout(() => {
          this.closePopUp();
        }, 10000); // close pop-up after 10s
      });
  }

  closePopUp() {
    const wrapper = this.shadow.querySelector(".store-search-pop-up");
    clearTimeout(this.autoCloseTimer);

    const targetElement = document.querySelector("store-selector-flyer-addon");

    wrapper.classList.remove("visible");
    wrapper.classList.add("hidden");

    setTimeout(() => {
      this.remove();
      if (targetElement) {
        if (!targetElement.hasAttribute("tabindex")) {
          targetElement.setAttribute("tabindex", "-1");
        }
        targetElement.focus();
      }
    }, 200);
  }

  async _queryTranslations() {
    const url =
      "/s/storesearch-frontend/26_7_2/storeselector-translations.json";
    try {
      let response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        return await response.json();
      } else {
        console.log("unable to fetch translations");
        return null;
      }
    } catch (error) {
      console.log("unable to fetch translations");
      console.log(error);
      return null;
    }
  }
}

// register component
customElements.define("store-search-pop-up", StoreSearchPopUp);