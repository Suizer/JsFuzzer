! function() {
  class t {
    isCarousel = !1;
    isAutoSwipeEnabled = !1;
    isInfiniteLoop = !1;
    autoSwipeActive = !1;
    autoSwipeTimeout = 0;
    autoSwipeProgressInterval = 0;
    autoSwipeProgressPercentage = 0;
    autoSwipeDelay = 7e3;
    autoPlayControl = null;
    sliderElement = null;
    stripElement = null;
    firstSlideElement = null;
    ghostSlide = null;
    leftButtonElement = null;
    rightButtonElement = null;
    slideGap = 0;
    wasScrollable = !1;
    indicatorBar = null;
    indicator = [];
    sliderElements = [];
    touchStart = null;
    focusableElements = [];
    sliderScrollEvent = new CustomEvent("slider:scroll", {
      bubbles: !0,
      composed: !0,
      detail: {
        elementsArr: []
      }
    });
    constructor(t) {
      this.sliderElement = t, this.initialize()
    }
    initialize() {
      if (this.isCarousel = this.sliderElement.classList.contains("ux-base-carousel"), this.isAutoSwipeEnabled = this.sliderElement.matches('[data-auto-swipe="true"]'), this.isInfiniteLoop = this.sliderElement.matches('[data-infinite-loop="true"]'), this.stripElement = this.sliderElement.querySelector(".ux-base-slider__strip,.ux-base-carousel__strip"), this.firstSlideElement = this.sliderElement.querySelector('.ux-base-slider__slide,.ux-base-carousel__slide:not([data-ghost-slide="true"])'), this.ghostSlide = this.sliderElement.querySelector('.ux-base-carousel__slide[data-ghost-slide="true"]'), this.isInfiniteLoop && this.ghostSlide) {
        new IntersectionObserver((t, e) => {
            t[0].isIntersecting && t[0].target === this.ghostSlide && (this.stripElement.scroll({
              left: 0,
              behavior: "instant"
            }), this.setCurrentSlide(this.firstSlideElement))
          }, {
            root: this.stripElement,
            threshold: 1
          })
          .observe(this.ghostSlide)
      }
      this.leftButtonElement = this.sliderElement.querySelector(".ux-base-slider__navigation-left,.ux-base-carousel__navigation-left"), this.rightButtonElement = this.sliderElement.querySelector(".ux-base-slider__navigation-right,.ux-base-carousel__navigation-right"), this.indicatorBar = this.sliderElement.parentNode.querySelector(".ux-base-slider__slide-indicator-bar,.ux-base-carousel__indicators"), this.indicator = this.indicatorBar?.querySelectorAll(".ux-base-slider__indicator,.ux-base-carousel__indicator"), this.focusableElements = this.sliderElement.querySelectorAll('[tabindex="0"]:not(.APlayPauseButton)'), this.autoPlayControl = this.sliderElement.querySelector('[data-selector="play-pause-button--autoplay-control"]'), this.textPlay = this.autoPlayControl?.getAttribute("data-text-play"), this.textPause = this.autoPlayControl?.getAttribute("data-text-pause"), this.slideGap = this.stripElement.computedStyleMap ? this.stripElement.computedStyleMap()
        .get("row-gap")
        .value : 16, this.stripElement.addEventListener("scroll", this.updateArrows.bind(this), {
          passive: !0
        }), this.stripElement.addEventListener("wheel", this.scrollHandler.bind(this), {
          passive: !0
        }), this.stripElement.addEventListener("touchstart", this.scrollHandler.bind(this), {
          passive: !0
        }), this.stripElement.addEventListener("touchend", this.scrollHandler.bind(this), {
          passive: !0
        }), window.addEventListener("resize", this.updateCentering.bind(this), {
          passive: !0
        }), this.sliderElement.addEventListener("keydown", t => {
          if ("Tab" === t.code) this.autoSwipeActive = !1, this.stopAutoSwipeImage();
          else if ("Enter" === t.code && t.target && t.target.getAttribute("data-teaser-link")) try {
            const e = new URL(t.target.getAttribute("data-teaser-link"));
            t.preventDefault(), t.stopPropagation(), window.location.href = e.toString()
          } catch (t) {
            console.warn("Ignoring invalid link for teaser")
          }
        }), this.leftButtonElement?.addEventListener("click", this.buttonHandler(-1), {
          passive: !0
        }), this.rightButtonElement?.addEventListener("click", this.buttonHandler(1), {
          passive: !0
        }), this.updateArrows(), this.updateCentering(), this.showActiveSlide(), "true" === this.sliderElement.getAttribute("data-show-active-slide") && this.monitorSlideActivation(), this.sliderElements = this.sliderElement.querySelectorAll('.ux-base-slider__slide,.ux-base-carousel__slide:not([data-ghost-slide="true"])'), this.setCurrentSlide(this.sliderElements[0]);
      const t = new IntersectionObserver(this.onSlideInterSection, {
        threshold: .5
      });
      if (this.sliderElements.forEach(e => {
          t.observe(e)
        }), this.focusableElements.forEach(t => {
          t.addEventListener("focus", e => {
            "A" !== e.target.tagName && t.scrollIntoView({
              block: "center",
              inline: "center"
            })
          })
        }), this.isAutoSwipeEnabled) {
        const t = this.getCurrentSlideVideo();
        this.autoPlayControl?.addEventListener("click", this.autoPlayButtonHandler(), {
          passive: !0
        }), this.setPlayControlEnabled(!0), this.autoSwipeActive = this.isScrollable(), this.autoSwipeActive && !t && this.startAutoSwipeImage(), t && this.startVideo(t)
      } else {
        const t = this.getCurrentSlideVideo();
        this.setPlayControlEnabled(!!t)
      }
      this.setCurrentSlideDataForAutoControlButtonTracking()
    }
    displayProgressbar(t) {
      this.isAutoSwipeEnabled && this.indicatorBar.classList.toggle("ux-base-carousel__indicators--progressbar", t)
    }
    startAutoSwipeImage() {
      this.autoSwipeActive && this.isScrollable() && !this.getCurrentSlideVideo() && (this.displayProgressbar(!0), this.autoSwipeProgressPercentage = 0, this.setProgressPercentage(0), this.setButtonState("pause"), clearTimeout(this.autoSwipeTimeout), this.autoSwipeTimeout = setTimeout(this.autoSwipe(), this.autoSwipeDelay), clearInterval(this.autoSwipeProgressInterval), this.autoSwipeProgressInterval = setInterval(() => this.increaseProgressPercentage(1), this.autoSwipeDelay / 100))
    }
    stopAutoSwipeImage() {
      this.displayProgressbar(!1), clearTimeout(this.autoSwipeTimeout), clearInterval(this.autoSwipeProgressInterval), this.setProgressPercentage(100), this.getCurrentSlideVideo() || this.setButtonState("play")
    }
    setButtonState(t) {
      this.autoPlayControl?.classList.toggle("APlayPauseButton--play", "play" === t), this.autoPlayControl?.classList.toggle("APlayPauseButton--pause", "pause" === t), "play" === t ? this.autoPlayControl?.setAttribute("aria-label", this.textPlay) : this.autoPlayControl?.setAttribute("aria-label", this.textPause), this.setCurrentSlideDataForAutoControlButtonTracking(), this.setAriaControlsForAutoControl()
    }
    setPlayControlEnabled(t) {
      this.autoPlayControl && (t ? (this.autoPlayControl.disabled = !1, this.autoPlayControl.ariaHidden = !1) : (this.autoPlayControl.disabled = "disabled", this.autoPlayControl.ariaHidden = !0))
    }
    autoSwipe() {
      return () => {
        if (!this.isInfiniteLoop && this.isScrolledToEnd()) return this.stopAutoSwipeImage(), this.autoSwipeProgressPercentage = 100, void(this.autoSwipeActive = !1);
        this.autoSwipeProgressPercentage = 0, clearTimeout(this.autoSwipeTimeout), clearInterval(this.autoSwipeProgressInterval), this.scrollSlider(1)
      }
    }
    autoPlayButtonHandler() {
      return () => {
        let t = this.getCurrentSlideVideo();
        const e = !!t && !t.paused;
        this.isInfiniteLoop || !this.isScrolledToEnd() || this.autoSwipeActive || e || 100 !== this.autoSwipeProgressPercentage || (this.stripElement.scroll({
          left: 0,
          behavior: "instant"
        }), this.setCurrentSlide(this.firstSlideElement)), t = this.getCurrentSlideVideo(), t ? e ? (this.autoSwipeActive = !1, this.stopVideo(t)) : (this.autoSwipeActive = this.isScrollable(), this.startVideo(t)) : this.autoSwipeActive ? (this.autoSwipeActive = !1, this.stopAutoSwipeImage()) : (this.autoSwipeActive = this.isScrollable(), this.startAutoSwipeImage())
      }
    }
    startVideo(t) {
      this.stopAllVideos(), this.updateVideoProgress(t), this.displayProgressbar(!0), this.setButtonState("pause"), this.autoSwipeActive && (t.loop = !1, t.addEventListener("ended", this.videoEndedHandler(t), {
        passive: !0
      })), t.addEventListener("timeupdate", this.updateVideoProgress(t), {
        passive: !0
      }), t.play()
    }
    stopVideo(t) {
      t.removeEventListener("timeupdate", this.updateVideoProgress(t)), t.removeEventListener("ended", this.videoEndedHandler(t)), t.pause(), this.updateVideoProgress(t), this.displayProgressbar(!1), this.setButtonState("play")
    }
    stopAllVideos() {
      this.sliderElement.querySelectorAll("video")
        .forEach(t => {
          this.stopVideo(t)
        })
    }
    updateVideoProgress(t) {
      return () => {
        t.paused ? this.setProgressPercentage(100) : (this.displayProgressbar(!0), this.setProgressPercentage(Math.round(t.currentTime / t.duration * 100)))
      }
    }
    videoEndedHandler(t) {
      return () => {
        t.pause(), t.removeEventListener("timeupdate", this.updateVideoProgress(t)), t.removeEventListener("ended", this.videoEndedHandler(t)), t.currentTime = 0, this.autoSwipeActive ? this.autoSwipe()() : this.setButtonState("play")
      }
    }
    setCurrentSlide(t) {
      for (const t of this.sliderElements) t.removeAttribute("data-current-slide");
      t.setAttribute("data-current-slide", "true"), this.setPlayControlEnabled(this.isAutoSwipeEnabled || !!this.getCurrentSlideVideo()), t.querySelector("[data-slide-anchor]")
        ?.classList.add("ods-focus-visible")
    }
    getCurrentSlideVideo() {
      const t = this.sliderElement.querySelector("[data-current-slide]");
      return t?.querySelector("video")
    }
    getCurrentProgressbar() {
      return this.sliderElement.querySelector(".ux-base-carousel__progressbar--current")
    }
    setProgressPercentage(t) {
      const e = this.getCurrentProgressbar();
      e && (e.style.width = `${t}%`)
    }
    increaseProgressPercentage(t) {
      this.autoSwipeProgressPercentage += t, this.autoSwipeProgressPercentage > 100 && (this.autoSwipeProgressPercentage = 100, clearInterval(this.autoSwipeProgressInterval)), this.setProgressPercentage(this.autoSwipeProgressPercentage)
    }
    scrollSlider(t = 1, e = "smooth") {
      const s = this.firstSlideElement.getBoundingClientRect()
        .width,
        i = Math.floor(this.stripElement.clientWidth / s) || 1,
        r = (s + this.slideGap) * i;
      this.stripElement.scroll({
        left: this.stripElement.scrollLeft + t * r,
        behavior: e
      })
    }
    buttonHandler(t = 1) {
      return () => {
        this.autoSwipeActive = !1, this.stopAutoSwipeImage(), this.scrollSlider(t)
      }
    }
    scrollHandler(t) {
      "touchstart" === t.type && (this.touchStart = t.touches[0].clientX);
      const e = "wheel" === t.type && (t.deltaX < -5 || t.deltaX > 5),
        s = "touchend" === t.type && (t.changedTouches[0].clientX < this.touchStart - 100 || t.changedTouches[0].clientX > this.touchStart + 100);
      (e || s) && (this.autoSwipeActive = !1, this.stopAutoSwipeImage())
    }
    updateArrows() {
      this.setArrowButtonVisibility(this.leftButtonElement, !this.isScrolledToStart()), this.setArrowButtonVisibility(this.rightButtonElement, !this.isScrolledToEnd())
    }
    isScrolledToStart() {
      return this.stripElement.scrollLeft <= 0 && this.isScrollable()
    }
    isScrolledToEnd() {
      return this.isScrollable() && this.stripElement.scrollLeft + this.stripElement.clientWidth >= this.getSliderScrollWidth() - 50
    }
    getSliderScrollWidth() {
      const t = this.stripElement.scrollWidth;
      return this.ghostSlide ? t - this.stripElement.clientWidth : t
    }
    setArrowButtonVisibility(t, e) {
      if (!t || !this.isScrollable()) return;
      const s = t.matches(":hover");
      if (t.classList.toggle(this.isCarousel ? "ux-base-carousel__navigation--visible" : "ux-base-slider__navigation--visible", e), t.classList.toggle("ods-icon-button--disabled", !e && this.isCarousel), !e && s) {
        const t = this.stripElement;
        t.style.pointerEvents = "none", setTimeout(() => {
          t.style.pointerEvents = ""
        }, 1e3)
      }
      t.disabled = !e
    }
    updateCentering() {
      const t = this.isScrollable();
      this.stripElement.classList.toggle("ux-base-slider__strip--center-items", !t), t !== this.wasScrollable && (this.wasScrollable = t, this.updateArrows())
    }
    showActiveSlide() {
      const t = this.sliderElement.querySelector('.ux-base-slider__slide [data-is-active="true"]');
      this.showSlideAsActive(t)
    }
    showSlideAsActive(t, e) {
      if (!t) return;
      const s = t.parentNode,
        i = this.stripElement.scrollLeft,
        r = this.stripElement.offsetWidth,
        o = i + r,
        l = s.offsetLeft,
        a = s.offsetWidth,
        n = l + a;
      "true" !== this.sliderElement.getAttribute("data-scroll-active-element-left") ? l >= i && n <= o || (a >= r ? this.stripElement.scroll({
        left: l - r / 2 + a / 2,
        behavior: "instant"
      }) : this.stripElement.scroll({
        left: l,
        behavior: e ? "smooth" : "instant"
      })) : this.stripElement.scroll({
        left: l,
        behavior: "instant"
      })
    }
    monitorSlideActivation() {
      new MutationObserver(t => {
          for (const e of t)
            if (e.target.closest(".ux-base-slider__slide")) {
              const t = !!e.target.getAttribute("data-is-active"),
                s = !!e.oldValue;
              t && t !== s && this.showSlideAsActive(e.target, !0)
            }
        })
        .observe(this.sliderElement, {
          attributeFilter: ["data-is-active"],
          subtree: !0,
          attributeOldValue: !0
        })
    }
    isScrollable() {
      return this.getSliderScrollWidth() > this.stripElement.clientWidth
    }
    updateIndicator = t => {
      if (this.indicatorBar && t >= 0) {
        const e = this.indicator[t];
        for (const t of this.indicator) t.classList.remove(this.isCarousel ? "ux-base-carousel__indicator--current" : "ux-base-slider__indicator--current"), t.querySelector(".ux-base-carousel__progressbar")
          ?.classList.remove("ux-base-carousel__progressbar--current");
        e.classList.add(this.isCarousel ? "ux-base-carousel__indicator--current" : "ux-base-slider__indicator--current"), e.querySelector(".ux-base-carousel__progressbar")
          ?.classList.add("ux-base-carousel__progressbar--current")
      }
    };
    onSlideInterSection = t => {
      const e = "true" === this.sliderElement.getAttribute("data-indicator");
      t.forEach(t => {
        if (t.isIntersecting) {
          if (this.setCurrentSlide(t.target), e) {
            const e = Array.prototype.indexOf.call(this.stripElement.childNodes, t.target) - 1;
            this.updateIndicator(e)
          }
          const s = t.target.querySelector("video");
          this.isAutoSwipeEnabled && (this.setCurrentSlideDataForAutoControlButtonTracking(), s ? (this.stopAutoSwipeImage(), this.autoSwipeActive && this.startVideo(s)) : (this.stopAllVideos(), this.startAutoSwipeImage()))
        }
      });
      const s = t.filter(t => t.isIntersecting && !!t.target.closest(".ux-base-slider, .ux-base-carousel") && !t.target.getAttribute("data-slider-element-shown"))
        .map(t => t.target);
      s.length && (this.sliderScrollEvent.detail.elementsArr = s, s.forEach(t => t.setAttribute("data-slider-element-shown", "true")), document.dispatchEvent(this.sliderScrollEvent))
    };
    setCurrentSlideDataForAutoControlButtonTracking() {
      if (!this.autoPlayControl) return;
      const t = this.autoPlayControl.classList.contains("APlayPauseButton--pause") ? "pause" : "play",
        e = this.sliderElement.querySelector("[data-current-slide]")
        .querySelector("[data-play-button]")
        .getAttribute(`data-${t}-button`);
      this.autoPlayControl.setAttribute("data-unified-click", e)
    }
    setAriaControlsForAutoControl() {
      if (!this.autoPlayControl) return;
      const t = this.sliderElement?.querySelector("[data-current-slide]"),
        e = t?.querySelector(".ASrcsetVideo__Container .AMarketingTeaser__Video");
      null !== e ? this.autoPlayControl.setAttribute("aria-controls", e.id) : this.sliderElement?.id ? this.autoPlayControl.setAttribute("aria-controls", this.sliderElement.id) : this.autoPlayControl.removeAttribute("aria-controls")
    }
  }
  document.querySelectorAll(".ux-base-slider,.ux-base-carousel")
    .forEach(e => new t(e))
}();