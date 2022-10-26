/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_copyText_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/copyText.js */ "./src/assets/js/modules/copyText.js");
/* harmony import */ var _modules_cutString_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cutString.js */ "./src/assets/js/modules/cutString.js");
/* harmony import */ var _modules_shadow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/shadow.js */ "./src/assets/js/modules/shadow.js");



document.addEventListener("DOMContentLoaded", () => {
  /* ========== Header ========== */
  // Working with extra-block in header
  const header = document.querySelector('.header--extra');

  if (header) {
    const headerExtra = header.querySelector('.header-extra');
    window.addEventListener('click', e => {
      if (e.target.classList.contains('.header-extra__close') || e.target.closest('.header-extra__close')) {
        headerExtra.remove();
        header.style.top = '-50px';
        header.classList.remove('header--extra');
      }
    });
  }
  /* ========== Cart ========== */
  // When we hover over the picture, the title link is highlighted so that it is clear that the picture is also a link


  window.addEventListener('mouseover', e => {
    if (e.target.classList.contains('cart-item__img') || e.target.closest('.cart-item__img')) {
      if (e.target.classList.contains('cart-item__img')) {
        e.target.parentNode.querySelector('.cart-item__title').classList.add('hover');
      } else if (e.target.closest('.cart-item__img')) {
        e.target.parentNode.parentNode.parentNode.querySelector('.cart-item__title').classList.add('hover');
      }
    } else {
      if (e.target.classList.contains('cart') || e.target.closest('.cart')) {
        if (e.target.classList.contains('cart')) {
          e.target.querySelectorAll('.cart-item__title').forEach(item => {
            item.classList.remove('hover');
          });
        } else {
          e.target.closest('.cart').querySelectorAll('.cart-item__title').forEach(item => {
            item.classList.remove('hover');
          });
        }
      }
    }
  }); // activating cart

  const cart = document.querySelector('.cart');
  document.querySelector('.header-main__basket-btn').addEventListener('click', () => {
    Object(_modules_shadow_js__WEBPACK_IMPORTED_MODULE_2__["default"])('activate');
    cart.classList.add('active');
  }); // deactivating cart

  window.addEventListener('click', e => {
    if (e.target.hasAttribute('data-cart-close') || e.target.closest('[data-cart-close]') || e.target == cart) {
      Object(_modules_shadow_js__WEBPACK_IMPORTED_MODULE_2__["default"])('deactivate');
      cart.classList.remove('active');
    }
  }); // remove item in cart 

  window.addEventListener('click', e => {
    if (e.target.classList.contains('cart-item__btn') || e.target.closest('.cart-item__btn')) {
      e.target.closest('.cart-item').remove();
    }
  }); // cart-item counter

  window.addEventListener('click', e => {
    if (e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus' || e.target.closest('[data-action="plus"]') || e.target.closest('[data-action="minus"]')) {
      const counterWrapper = e.target.closest('.cart-item__counter');
      const counter = counterWrapper.querySelector('[data-counter]');

      if (e.target.dataset.action === 'plus' || e.target.closest('[data-action="plus"]')) {
        counter.innerText = ++counter.innerText;
      }

      if (e.target.dataset.action === 'minus' || e.target.closest('[data-action="minus"]')) {
        if (+counter.innerText > 1) {
          counter.innerText = --counter.innerText;
        }
      }
    }
  });
  /* ========== Banner ========== */
  // Banner slider section > button to copy promo

  Object(_modules_copyText_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Banner slider

  const bannerSlider = new Swiper(".banner-slider", {
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    effect: "fade",
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    pagination: {
      el: ".banner-slider__pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".banner-slider__btn-next",
      prevEl: ".banner-slider__btn-prev"
    }
  }); // Banner Proposition slider

  const bannerPropositionSlider = new Swiper(".banner-proposition__slider", {
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    allowTouchMove: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    navigation: {
      nextEl: ".banner-proposition__btn-next",
      prevEl: ".banner-proposition__btn-prev"
    }
  });
  /* ========== Product card ========== */

  const cards = document.querySelectorAll('.card'); // Card slider

  const cardSlider = new Swiper(".card-img__slider", {
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    effect: "fade",
    autoplay: {
      delay: 1000
    },
    pagination: {
      el: ".card-img__pagination",
      clickable: false
    },
    allowTouchMove: false
  }); // Slider not autoplay after creation

  cardSlider.forEach(slider => {
    slider.autoplay.stop();
  }); // When we hover at the card it starts working

  cards.forEach((card, idx) => {
    card.addEventListener('mouseenter', e => {
      cardSlider[idx].autoplay.start();
    });
    card.addEventListener('mouseleave', e => {
      cardSlider[idx].autoplay.stop();
    });
  }); // When we hover over the picture, the title link is highlighted so that it is clear that the picture is also a link

  cards.forEach(card => {
    const title = card.querySelector('.card-title');
    const imgWrapper = card.querySelector('.card-img');
    imgWrapper.addEventListener('mouseenter', e => {
      title.classList.add('hover');
    });
    imgWrapper.addEventListener('mouseleave', e => {
      title.classList.remove('hover');
    });
  }); // Toggle class on Like button

  cards.forEach(card => {
    const likedBtn = card.querySelector('.card-btn--like');
    likedBtn.addEventListener('click', () => {
      likedBtn.classList.toggle('active');
    });
  }); // Cut the Title if it's too long

  cards.forEach(card => {
    const title = card.querySelector('.card-title a');
    title.innerText = Object(_modules_cutString_js__WEBPACK_IMPORTED_MODULE_1__["default"])(title, 50);
  });
  /* ========== Sliders ========== */

  const sliders = new Swiper(".slider-swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    grabCursor: true,
    loop: false,
    centeredSlides: false,
    allowTouchMove: true,
    autoplay: false,
    navigation: {
      nextEl: ".slider-swiper__btn-next",
      prevEl: ".slider-swiper__btn-prev"
    }
  });
  /* ========== Gallery ========== */
  //gallery  

  lightGallery(document.getElementById('mainpage-gallery'), {
    plugins: [lgAutoplay, lgZoom],
    mode: 'lg-fade',
    autoplay: true,
    slideShowAutoplay: true,
    speed: 200,
    mobileSettings: {
      controls: true,
      showCloseIcon: true,
      download: true,
      rotate: false
    }
  }); // swiper

  const gallerySlider = new Swiper(".gallery-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    centeredSlides: false,
    allowTouchMove: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    navigation: {
      nextEl: ".gallery-slider__btn-next",
      prevEl: ".gallery-slider__btn-prev"
    }
  });
  /* ========== Reviews ========== */
  // swiper

  const reviewsAutoplay = 5000;
  const reviewsSlider = new Swiper(".reviews-slider", {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    centeredSlides: false,
    allowTouchMove: true,
    autoplay: {
      delay: reviewsAutoplay,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".reviews-slider__btn-next",
      prevEl: ".reviews-slider__btn-prev"
    },
    watchSlidesProgress: true,
    on: {
      init: function () {
        document.querySelector(".reviews-slider__progress-bar").classList.remove("animate");
        document.querySelector(".reviews-slider__progress-bar").classList.remove("active");
        document.querySelector(".reviews-slider__progress-bar").classList.add("animate");
        document.querySelector(".reviews-slider__progress-bar").classList.add("active");
      },
      slideChangeTransitionStart: function () {
        document.querySelector(".reviews-slider__progress-bar").classList.remove("animate");
        document.querySelector(".reviews-slider__progress-bar").classList.remove("active");
        document.querySelector(".reviews-slider__progress-bar").classList.add("active");
      },
      slideChangeTransitionEnd: function () {
        document.querySelector(".reviews-slider__progress-bar").classList.add("animate");
      }
    }
  });
  document.querySelector(".reviews-slider").addEventListener('mouseover', function () {
    reviewsSlider.autoplay.stop();
    document.querySelector(".reviews-slider__progress-bar").classList.remove("animate");
  });
  document.querySelector(".reviews-slider").addEventListener('mouseout', function () {
    reviewsSlider.autoplay.start();
    document.querySelector(".reviews-slider__progress-bar").classList.add("animate");
  }); // Cut the text if it's too long

  document.querySelectorAll('.reviews-slider__slide-text').forEach(item => {
    item.innerText = Object(_modules_cutString_js__WEBPACK_IMPORTED_MODULE_1__["default"])(item, 526);
  });
  /* ========== Blog ========== */
  // Cut the title if it's too long

  document.querySelectorAll('.blog-card__title a').forEach(item => {
    item.innerText = Object(_modules_cutString_js__WEBPACK_IMPORTED_MODULE_1__["default"])(item, 33);
  });
  document.querySelectorAll('.blog-card__descr').forEach(item => {
    item.innerText = Object(_modules_cutString_js__WEBPACK_IMPORTED_MODULE_1__["default"])(item, 122);
  }); // When we hover over the picture, the title link is highlighted so that it is clear that the picture is also a link

  document.querySelectorAll('.blog-card').forEach(card => {
    const title = card.querySelector('.blog-card__title');
    const imgWrapper = card.querySelector('.blog-card__img');
    imgWrapper.addEventListener('mouseenter', e => {
      title.classList.add('hover');
      card.classList.add('hover');
    });
    imgWrapper.addEventListener('mouseleave', e => {
      title.classList.remove('hover');
      card.classList.remove('hover');
    });
    title.addEventListener('mouseenter', e => {
      imgWrapper.classList.add('hover');
      card.classList.add('hover');
    });
    title.addEventListener('mouseleave', e => {
      imgWrapper.classList.remove('hover');
      card.classList.remove('hover');
    });
  });
});

/***/ }),

/***/ "./src/assets/js/modules/calcScroll.js":
/*!*********************************************!*\
  !*** ./src/assets/js/modules/calcScroll.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return calcScroll; });
function calcScroll() {
  let div = document.createElement('div');
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.overflowY = 'scroll';
  div.style.visibility = 'hidden';
  document.body.appendChild(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
}

/***/ }),

/***/ "./src/assets/js/modules/copyText.js":
/*!*******************************************!*\
  !*** ./src/assets/js/modules/copyText.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return copyText; });
function copyText() {
  window.addEventListener('click', e => {
    if (e.target.getAttribute('data-copy') == 'btn' || e.target.closest('[data-copy="btn"]')) {
      let textToCopy;

      if (e.target.getAttribute('data-copy') == 'btn') {
        textToCopy = e.target.parentNode.querySelector('[data-copy="text"]').innerText;
      } else if (e.target.closest('[data-copy="btn"]')) {
        textToCopy = e.target.closest('[data-copy="btn"]').parentNode.querySelector('[data-copy="text"]').innerText;
      }

      const textarea = document.createElement('textarea');
      textarea.value = textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      textarea.remove();
      const wrapper = e.target.closest('[data-copy="wrapper"]');
      wrapper.classList.add('text-copied');
      setTimeout(() => {
        wrapper.classList.remove('text-copied');
      }, 2000);
    }
  });
}

/***/ }),

/***/ "./src/assets/js/modules/cutString.js":
/*!********************************************!*\
  !*** ./src/assets/js/modules/cutString.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cutString; });
function cutString(str, numTo) {
  return str.innerText.length > numTo ? str.innerText.slice(0, numTo) + '...' : str.innerText;
}

/***/ }),

/***/ "./src/assets/js/modules/shadow.js":
/*!*****************************************!*\
  !*** ./src/assets/js/modules/shadow.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shadow; });
/* harmony import */ var _calcScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calcScroll.js */ "./src/assets/js/modules/calcScroll.js");

function shadow() {
  let activateOrDeactivate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'deactivate';
  const shadow = document.querySelector('.shadow');
  const scroll = Object(_calcScroll_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

  if (activateOrDeactivate == 'activate') {
    shadow.classList.add('active');
    document.body.style.overflowY = 'hidden';
    document.body.style.marginRight = scroll + 'px';
  } else if (activateOrDeactivate == 'deactivate') {
    shadow.classList.remove('active');
    setTimeout(() => {
      document.body.style.overflowY = 'auto';
      document.body.style.marginRight = 0;
    }, 200);
  } else {
    return 0;
  }
}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map