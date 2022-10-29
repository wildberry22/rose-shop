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
/* harmony import */ var _modules_openModal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/openModal.js */ "./src/assets/js/modules/openModal.js");
/* harmony import */ var _modules_closeModal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/closeModal.js */ "./src/assets/js/modules/closeModal.js");
/* harmony import */ var _modules_phoneMask_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/phoneMask.js */ "./src/assets/js/modules/phoneMask.js");
/* harmony import */ var _modules_forms_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/forms.js */ "./src/assets/js/modules/forms.js");







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
  /* ========== Modal ========== */

  window.addEventListener('click', e => {
    if (e.target.dataset.modal === 'request-call' || e.target.closest('[data-modal="request-call"]')) {
      e.preventDefault();
      Object(_modules_shadow_js__WEBPACK_IMPORTED_MODULE_2__["default"])('activate');
      Object(_modules_openModal_js__WEBPACK_IMPORTED_MODULE_3__["default"])('request-call');
      Object(_modules_phoneMask_js__WEBPACK_IMPORTED_MODULE_5__["default"])('.modal__input--phone');
      Object(_modules_forms_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
    }
  });
  Object(_modules_closeModal_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
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

/***/ "./src/assets/js/modules/closeModal.js":
/*!*********************************************!*\
  !*** ./src/assets/js/modules/closeModal.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return closeModal; });
/* harmony import */ var _shadow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shadow.js */ "./src/assets/js/modules/shadow.js");

function closeModal() {
  window.addEventListener('click', e => {
    if (e.target.dataset.modal === 'close' || e.target.closest('[data-modal="close"]') || e.target == document.querySelector('[data-modal=""]')) {
      Object(_shadow_js__WEBPACK_IMPORTED_MODULE_0__["default"])('deactivate');
      document.querySelector('[data-modal=""]').classList.remove('active');
      setTimeout(() => {
        document.querySelector('[data-modal=""]').remove();
      }, 600);
    }
  });
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

/***/ "./src/assets/js/modules/forms.js":
/*!****************************************!*\
  !*** ./src/assets/js/modules/forms.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return forms; });
function forms() {
  let loadingMsg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Завантаження...";
  let successMsg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Дякуємо за вашу заявку. Ми зв'яжемося з вами найближчим часом!";
  let failureMsg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Щось пішло не так...";
  const form = document.querySelectorAll('form');
  const input = document.querySelectorAll('input');
  let valid = false;
  const message = {
    loading: loadingMsg,
    success: successMsg,
    failure: failureMsg
  };

  const postData = async (url, data) => {
    document.querySelector('.modal__text').classList.add('hide');
    document.querySelector('.status').textContent = message.loading;
    let res = await fetch(url, {
      method: 'POST',
      body: data
    });
    return await res.text();
  };

  const clearInputs = () => {
    input.forEach(item => {
      item.value = '';
    });
  };

  form.forEach(item => {
    item.addEventListener('submit', e => {
      e.preventDefault(); // validation check

      valid = false;

      if (document.querySelector('.modal__input--phone').value.length == 19) {
        valid = true;

        try {
          document.querySelector('.phone-error').remove();
        } catch (error) {}
      } else {
        if (!document.querySelector('.phone-error')) {
          const phoneErrMsg = document.createElement('div');
          phoneErrMsg.classList.add('phone-error');
          phoneErrMsg.innerText = 'Номер телефону введено неправильно!';
          document.querySelector('.modal__input--phone').after(phoneErrMsg);
        }
      }

      if (valid) {
        let statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        item.replaceWith(statusMessage);
        const formData = new FormData(item);
        postData('./server.php', formData).then(res => {
          console.log(res);
          document.querySelector('.modal__text').classList.add('hide');
          statusMessage.textContent = message.success;
          statusMessage.classList.add('ok');
        }).catch(() => {
          document.querySelector('.modal__text').classList.add('hide');
          statusMessage.textContent = message.failure;
          statusMessage.classList.add('error');
        }).finally(() => {
          clearInputs();
        });
      }
    });
  });
}

/***/ }),

/***/ "./src/assets/js/modules/openModal.js":
/*!********************************************!*\
  !*** ./src/assets/js/modules/openModal.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return openModal; });
function openModal(type) {
  const modalWindow = document.createElement('div');
  modalWindow.classList.add('modal');
  modalWindow.setAttribute('data-modal', '');

  if (type == 'request-call') {
    modalWindow.classList.add('modal--request-call');
    modalWindow.innerHTML = `
      <div class="modal-wrapper">
        <button class="modal__close-btn" data-modal="close">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.46967 10.4697C0.176777 10.7626 0.176777 11.2374 0.46967 11.5303C0.762563 11.8232 1.23744 11.8232 1.53033 11.5303L0.46967 10.4697ZM6.53033 6.53033C6.82322 6.23744 6.82322 5.76256 6.53033 5.46967C6.23744 5.17678 5.76256 5.17678 5.46967 5.46967L6.53033 6.53033ZM5.46967 5.46967C5.17678 5.76256 5.17678 6.23744 5.46967 6.53033C5.76256 6.82322 6.23744 6.82322 6.53033 6.53033L5.46967 5.46967ZM11.5303 1.53033C11.8232 1.23744 11.8232 0.762563 11.5303 0.46967C11.2374 0.176777 10.7626 0.176777 10.4697 0.46967L11.5303 1.53033ZM6.53033 5.46967C6.23744 5.17678 5.76256 5.17678 5.46967 5.46967C5.17678 5.76256 5.17678 6.23744 5.46967 6.53033L6.53033 5.46967ZM10.4697 11.5303C10.7626 11.8232 11.2374 11.8232 11.5303 11.5303C11.8232 11.2374 11.8232 10.7626 11.5303 10.4697L10.4697 11.5303ZM5.46967 6.53033C5.76256 6.82322 6.23744 6.82322 6.53033 6.53033C6.82322 6.23744 6.82322 5.76256 6.53033 5.46967L5.46967 6.53033ZM1.53033 0.46967C1.23744 0.176777 0.762563 0.176777 0.46967 0.46967C0.176777 0.762563 0.176777 1.23744 0.46967 1.53033L1.53033 0.46967ZM1.53033 11.5303L6.53033 6.53033L5.46967 5.46967L0.46967 10.4697L1.53033 11.5303ZM6.53033 6.53033L11.5303 1.53033L10.4697 0.46967L5.46967 5.46967L6.53033 6.53033ZM5.46967 6.53033L10.4697 11.5303L11.5303 10.4697L6.53033 5.46967L5.46967 6.53033ZM6.53033 5.46967L1.53033 0.46967L0.46967 1.53033L5.46967 6.53033L6.53033 5.46967Z" fill="#505567"/>
          </svg>										
        </button>
        <h3 class="modal__title">Замовити дзвінок</h3>
        <div class="modal__text">Залишіть свій номер телефону і найближчим часом ми вам передзвонимо</div>
        <form class="modal-form">
          <div class="modal__input-wrapper">
            <label class="modal__label" for="phone">Телефон</label>
            <input class="modal__input modal__input--phone" type="text" id="phone" name="phone" placeholder="+38 (0__) ___ - __ - __">
          </div>
          <button class="modal__send-btn btn-blue btn-blue--full" type="submit">Надіслати</button>
        </form>
      </div>
    `;
  }

  document.body.appendChild(modalWindow);
  setTimeout(() => {
    modalWindow.classList.add('active');
  }, 10);
}

/***/ }),

/***/ "./src/assets/js/modules/phoneMask.js":
/*!********************************************!*\
  !*** ./src/assets/js/modules/phoneMask.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return phoneMask; });
function phoneMask(selector) {
  function setCursorPosition(pos, elem) {
    elem.focus();

    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      let range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  }

  function createMask(event) {
    let matrix = '+38 (0__) ___ __ __';
    let i = 0;
    let def = matrix.replace(/\D/g, '');
    let val = this.value.replace(/\D/g, '');

    if (def.length >= val.length) {
      val = def;
    }

    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });

    if (event.type === 'blur') {
      if (this.value.length == 2) {
        this.value = '';
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }

  let inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
}
;

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