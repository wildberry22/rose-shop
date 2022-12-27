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
/* harmony import */ var _modules_rangeSlider_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/rangeSlider.js */ "./src/assets/js/modules/rangeSlider.js");
/* harmony import */ var _modules_counter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/counter.js */ "./src/assets/js/modules/counter.js");
/* harmony import */ var _modules_calcScroll_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/calcScroll.js */ "./src/assets/js/modules/calcScroll.js");










document.addEventListener("DOMContentLoaded", () => {
  //counter
  Object(_modules_counter_js__WEBPACK_IMPORTED_MODULE_8__["default"])();
  /* ========== Header ========== */
  // Working with extra-block in header

  const header = document.querySelector('.header--extra');

  if (header) {
    const headerExtra = header.querySelector('.header-extra');
    window.addEventListener('click', e => {
      if (e.target.classList.contains('.header-extra__close') || e.target.closest('.header-extra__close')) {
        headerExtra.remove();

        if (window.innerWidth <= 680) {
          header.style.top = '0';
        } else {
          header.style.top = '-50px';
        }

        header.classList.remove('header--extra');
      }
    });
  } else {
    if (window.innerWidth <= 680) {
      document.querySelector('.header').style.top = '0';
    } else {
      document.querySelector('.header').style.top = '-50px';
    }
  } // adaptive for header navigation


  window.addEventListener('click', e => {
    if (e.target.hasAttribute('data-open-menu') || e.target.closest('[data-open-menu]')) {
      document.querySelector('[data-open-menu]').classList.add('active');
      document.querySelector('.mobile-menu').classList.add('active');
      document.body.style.overflowY = 'hidden';
      document.body.style.marginRight = Object(_modules_calcScroll_js__WEBPACK_IMPORTED_MODULE_9__["default"])() + 'px';
    }

    if (e.target.hasAttribute('data-close-menu') || e.target.closest('[data-close-menu]')) {
      document.querySelector('[data-open-menu]').classList.remove('active');
      document.querySelector('.mobile-menu').classList.remove('active');
      document.body.style.overflowY = 'auto';
      document.body.style.marginRight = 0;
    }
  }); //

  window.addEventListener('click', e => {
    if (e.target.hasAttribute('data-nav-main') || e.target.closest('[data-nav-main]')) {
      document.querySelectorAll('.sticky-bottom__nav-item').forEach(el => el.classList.remove('active'));
      e.target.closest('.sticky-bottom__nav-item').classList.add('active');
      document.querySelector('.cart').classList.remove('active');
      document.querySelector('.mobile-catalog').classList.remove('active');
      document.querySelectorAll('.catalog-menu__link--open ~ ul').forEach(el => el.classList.remove('active'));
      document.body.style.overflowY = 'auto';
      document.body.style.marginRight = 0;
    }

    if (e.target.hasAttribute('data-nav-catalog') || e.target.closest('[data-nav-catalog]')) {
      document.querySelectorAll('.sticky-bottom__nav-item').forEach(el => el.classList.remove('active'));
      e.target.closest('.sticky-bottom__nav-item').classList.add('active');
      document.querySelector('.cart').classList.remove('active');
    }

    if (e.target.hasAttribute('data-open-cart') || e.target.closest('[data-open-cart]')) {
      document.querySelectorAll('.sticky-bottom__nav-item').forEach(el => el.classList.remove('active'));
      e.target.closest('.sticky-bottom__nav-item').classList.add('active');
      document.querySelector('.mobile-catalog').classList.remove('active');
      document.querySelectorAll('.catalog-menu__link--open ~ ul').forEach(el => el.classList.remove('active'));
    }
  }); // dropdown menu with overflowX for container

  try {
    if (window.innerWidth <= 1024 && window.innerWidth >= 680) {
      const scrollHeaderWrapper = document.querySelector('.header .nav-list');
      const dropDownElements = document.querySelectorAll('.nav-list__item.hover-menu');
      dropDownElements.forEach(element => {
        element.addEventListener('mouseenter', e => {
          const dropDownMenuEl = e.target.querySelector('.hover-menu__wrapper');
          dropDownMenuEl.style.left = element.getBoundingClientRect().left - 20 + 'px';
        });
        element.addEventListener('mouseleave', e => {});
      });
    }
  } catch (error) {}
  /* ========== Footer ========== */


  if (window.innerWidth <= 1080) {
    document.querySelectorAll('.footer-top__col').forEach(item => item.style.maxWidth = 'auto');
  }

  if (window.innerWidth <= 480) {
    const footerTitles = document.querySelectorAll('.footer-top__title');
    footerTitles.forEach(item => {
      if (!item.classList.contains('not-open')) {
        item.addEventListener('click', () => {
          item.classList.toggle('active');
          const panel = item.nextElementSibling;

          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        });
      }
    });
    document.querySelectorAll('.footer-top__col').forEach(item => {
      item.style.maxWidth = 'initial';
    });
  }
  /* ========== Mobile catalog ========== */


  if (window.innerWidth <= 680) {
    window.addEventListener('click', e => {
      if (e.target.hasAttribute('data-nav-catalog') || e.target.closest('[data-nav-catalog]')) {
        document.querySelector('.mobile-catalog').classList.add('active');
        document.body.style.overflowY = 'hidden';
        document.body.style.marginRight = Object(_modules_calcScroll_js__WEBPACK_IMPORTED_MODULE_9__["default"])() + 'px';
        document.querySelectorAll('.catalog-menu__link').forEach(item => item.style.display = 'block');
      }

      if (e.target.hasAttribute('data-close-catalog') || e.target.closest('[data-close-catalog]')) {
        document.querySelector('.mobile-catalog').classList.remove('active');
        document.querySelectorAll('.catalog-menu__link--open ~ ul').forEach(el => el.classList.remove('active'));
        document.body.style.overflowY = 'auto';
        document.body.style.marginRight = 0;
        document.querySelectorAll('.sticky-bottom__nav-item').forEach(el => el.classList.remove('active'));
        document.querySelector('[data-nav-main]').parentNode.classList.add('active');
      }
    });
    window.addEventListener('click', e => {
      // going next
      if (e.target.classList.contains('catalog-menu__link--open')) {
        document.querySelectorAll('.catalog-menu__link--open ~ ul').forEach(el => el.classList.remove('active'));
        e.target.nextElementSibling.classList.add('active');
        setTimeout(() => {
          document.querySelectorAll('.catalog-menu__link').forEach(item => item.style.display = 'none');
        }, 400);
      } // going prev


      if (e.target.classList.contains('catalog-menu__back-item') || e.target.closest('.catalog-menu__back-item')) {
        e.target.closest('.catalog-menu__list-small').classList.remove('active');
        document.querySelectorAll('.catalog-menu__link').forEach(item => item.style.display = 'block');
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
  });

  try {
    // activating cart 
    const cart = document.querySelector('.cart');
    window.addEventListener('click', e => {
      if (e.target.hasAttribute('data-open-cart') || e.target.closest('[data-open-cart]')) {
        if (window.innerWidth <= 680) {
          cart.classList.add('active');
          document.body.style.overflowY = 'hidden';
          document.body.style.marginRight = Object(_modules_calcScroll_js__WEBPACK_IMPORTED_MODULE_9__["default"])() + 'px';
        } else {
          Object(_modules_shadow_js__WEBPACK_IMPORTED_MODULE_2__["default"])('activate');
          cart.classList.add('active');
        }
      }
    }); // deactivating cart

    window.addEventListener('click', e => {
      if (e.target.hasAttribute('data-cart-close') || e.target.closest('[data-cart-close]') || e.target == cart) {
        if (window.innerWidth <= 680) {
          cart.classList.remove('active');
          document.body.style.overflowY = 'auto';
          document.body.style.marginRight = 0;
          document.querySelectorAll('.sticky-bottom__nav-item').forEach(el => el.classList.remove('active'));
          document.querySelector('[data-nav-main]').parentNode.classList.add('active');
        } else {
          Object(_modules_shadow_js__WEBPACK_IMPORTED_MODULE_2__["default"])('deactivate');
          cart.classList.remove('active');
        }
      }
    }); // remove item in cart 

    window.addEventListener('click', e => {
      if (e.target.classList.contains('cart-item__btn') || e.target.closest('.cart-item__btn')) {
        e.target.closest('.cart-item').remove();
      }
    });
  } catch (error) {}
  /* ========== Banner ========== */
  // Banner slider section > button to copy promo


  Object(_modules_copyText_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Banner slider

  try {
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
    });
  } catch (error) {} // Banner Proposition slider


  try {
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
  } catch (error) {}
  /* ========== Product card ========== */


  try {
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
  } catch (error) {}
  /* ========== Sliders ========== */


  try {
    const sliders = new Swiper(".slider-swiper", {
      slidesPerView: 4,
      spaceBetween: 30,
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      allowTouchMove: true,
      autoplay: false,
      freeMode: false,
      navigation: {
        nextEl: ".slider-swiper__btn-next",
        prevEl: ".slider-swiper__btn-prev"
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
          spaceBetween: 20,
          freeMode: true
        },
        340: {
          slidesPerView: "auto",
          spaceBetween: 20,
          freeMode: true
        },
        768: {
          slidesPerView: "auto",
          spaceBetween: 30,
          freeMode: true
        },
        1230: {
          slidesPerView: 4,
          spaceBetween: 30
        }
      }
    });
  } catch (error) {}
  /* ========== Gallery ========== */
  //gallery  


  try {
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
    });
  } catch (error) {} // swiper


  try {
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
      },
      breakpoints: {
        320: {
          slidesPerView: "auto",
          spaceBetween: 20,
          freeMode: true,
          centeredSlides: true
        },
        768: {
          slidesPerView: "auto",
          spaceBetween: 20,
          freeMode: true,
          centeredSlides: true
        },
        900: {
          slidesPerView: 4,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30
        }
      }
    });
  } catch (error) {}
  /* ========== Reviews ========== */
  // swiper


  const reviewsAutoplay = 5000;

  try {
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
  } catch (error) {}
  /* ========== Blog ========== */
  // Cut the title if it's too long


  try {
    document.querySelectorAll('.blog-card__title a').forEach(item => {
      item.innerText = Object(_modules_cutString_js__WEBPACK_IMPORTED_MODULE_1__["default"])(item, 33);
    });
    document.querySelectorAll('.blog-card__descr').forEach(item => {
      item.innerText = Object(_modules_cutString_js__WEBPACK_IMPORTED_MODULE_1__["default"])(item, 122);
    });
  } catch (error) {} // When we hover over the picture, the title link is highlighted so that it is clear that the picture is also a link


  try {
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
  } catch (error) {}
  /* ========== About ========== */


  try {
    if (window.innerWidth <= 520) {
      document.querySelectorAll('.about-content p').forEach((item, idx) => {
        if (!idx == 0) {
          item.style.display = 'none';
        }
      });
      const linkToShowMore = document.createElement('div');
      linkToShowMore.classList.add('about__show-more');
      linkToShowMore.innerHTML = 'Розгорнути';
      document.querySelector('.about-content').appendChild(linkToShowMore);
      linkToShowMore.addEventListener('click', () => {
        console.log(linkToShowMore);

        if (linkToShowMore.classList.contains('open')) {
          linkToShowMore.classList.remove('open');
          linkToShowMore.innerHTML = 'Розгорнути';
          document.querySelectorAll('.about-content p').forEach((item, idx) => {
            if (!idx == 0) {
              item.style.display = 'none';
            }
          });
        } else {
          linkToShowMore.classList.add('open');
          linkToShowMore.innerHTML = 'Згорнути';
          document.querySelectorAll('.about-content p').forEach((item, idx) => {
            item.style.display = 'block';
          });
        }
      });
    }
  } catch (error) {}
  /* ========== Map ========== */


  try {
    if (window.innerWidth <= 680) {
      const mapWrapper = document.querySelector('.map iframe');
      mapWrapper.setAttribute('height', 400);
    }
  } catch (error) {}
  /* ========== Modal ========== */


  window.addEventListener('click', e => {
    if (e.target.dataset.modal === 'request-call' || e.target.closest('[data-modal="request-call"]')) {
      e.preventDefault();
      Object(_modules_shadow_js__WEBPACK_IMPORTED_MODULE_2__["default"])('activate');
      Object(_modules_openModal_js__WEBPACK_IMPORTED_MODULE_3__["default"])('request-call');
      Object(_modules_phoneMask_js__WEBPACK_IMPORTED_MODULE_5__["default"])('.modal__input--phone');
      Object(_modules_forms_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
    }

    if (e.target.dataset.modal === 'buy1click' || e.target.closest('[data-modal="buy1click"]')) {
      e.preventDefault();
      Object(_modules_shadow_js__WEBPACK_IMPORTED_MODULE_2__["default"])('activate');
      Object(_modules_openModal_js__WEBPACK_IMPORTED_MODULE_3__["default"])('buy1click');
      Object(_modules_phoneMask_js__WEBPACK_IMPORTED_MODULE_5__["default"])('.modal__input--phone');
      Object(_modules_forms_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
    }

    if (e.target.dataset.modal === 'reviews-all' || e.target.closest('[data-modal="reviews-all"]')) {
      e.preventDefault();
      Object(_modules_shadow_js__WEBPACK_IMPORTED_MODULE_2__["default"])('activate');
      Object(_modules_openModal_js__WEBPACK_IMPORTED_MODULE_3__["default"])('reviews-all');
    }

    if (e.target.dataset.modal === 'reviews-product' || e.target.closest('[data-modal="reviews-product"]')) {
      e.preventDefault();
      Object(_modules_shadow_js__WEBPACK_IMPORTED_MODULE_2__["default"])('activate');
      Object(_modules_openModal_js__WEBPACK_IMPORTED_MODULE_3__["default"])('reviews-product');
    }
  });
  Object(_modules_closeModal_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  /* ========== Filter ========== */

  try {
    Object(_modules_rangeSlider_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
  } catch (error) {} // script for filterCompositionBtn - show more/hide content


  try {
    const filterCompositionBtn = document.querySelector('.filter-item__composition-btn');
    const filterCompositionItems = document.querySelectorAll('.filter-item__composition-item');

    for (let i = 6; i < filterCompositionItems.length; i++) {
      filterCompositionItems[i].classList.add('hide');
    }

    filterCompositionBtn.addEventListener('click', () => {
      if (!filterCompositionBtn.classList.contains('show-more')) {
        for (let i = 6; i < filterCompositionItems.length; i++) {
          filterCompositionItems[i].classList.add('hide');
        }

        filterCompositionBtn.classList.add('show-more');
        filterCompositionBtn.innerText = 'Показати всі';
      } else {
        filterCompositionItems.forEach(item => {
          item.classList.remove('hide');
        });
        filterCompositionBtn.classList.remove('show-more');
        filterCompositionBtn.innerText = 'Приховати';
      }
    });
  } catch (error) {} // adaptive


  try {
    if (window.innerWidth <= 900) {
      window.addEventListener('click', e => {
        if (e.target.hasAttribute('data-filter-open') || e.target.closest('[data-filter-open]')) {
          document.querySelector('.filter').classList.add('active');
          document.body.style.overflowY = 'hidden';
          document.body.style.marginRight = Object(_modules_calcScroll_js__WEBPACK_IMPORTED_MODULE_9__["default"])() + 'px';
        }

        if (e.target.hasAttribute('data-filter-close') || e.target.closest('[data-filter-close]')) {
          document.querySelector('.filter').classList.remove('active');
          document.body.style.overflowY = 'auto';
          document.body.style.marginRight = 0;
        }
      });
    }
  } catch (error) {}
  /* ========== Product card ========== */
  //gallery  


  try {
    lightGallery(document.getElementById('productCardGallery'), {
      plugins: [lgAutoplay, lgZoom, lgThumbnail],
      mode: 'lg-fade',
      autoplay: true,
      slideShowAutoplay: true,
      speed: 200,
      thumbnail: true,
      mobileSettings: {
        controls: true,
        showCloseIcon: true,
        download: true,
        rotate: false
      }
    });
  } catch (error) {} //slider


  try {
    const productCardSliderSm = new Swiper(".product-card__slider--small", {
      spaceBetween: 10,
      slidesPerView: 4.2,
      freeMode: true,
      watchSlidesProgress: true,
      grabCursor: true,
      allowTouchMove: true,
      breakpoints: {
        280: {
          spaceBetween: 10,
          slidesPerView: 3.2,
          freeMode: true
        },
        376: {
          spaceBetween: 10,
          slidesPerView: 3.7,
          freeMode: true
        },
        568: {
          spaceBetween: 10,
          slidesPerView: 4.7,
          freeMode: true
        },
        681: {
          spaceBetween: 10,
          slidesPerView: 3.2,
          freeMode: true
        },
        820: {
          spaceBetween: 10,
          slidesPerView: 4.2,
          freeMode: true
        }
      }
    });
    const productCardSliderBg = new Swiper(".product-card__slider--big", {
      spaceBetween: 10,
      thumbs: {
        swiper: productCardSliderSm
      }
    });
  } catch (error) {} // Toggle class on Like button


  try {
    document.querySelector('.product-card__btns-like button').addEventListener('click', () => {
      document.querySelector('.product-card__btns-like button').classList.toggle('active');
    });
  } catch (error) {}

  try {
    if (window.innerWidth <= 680) {
      //btns
      const btnsWrapper = document.querySelector('.product-card__btns');
      const newBtnsWrapper = document.createElement('div');
      newBtnsWrapper.classList.add('product-card__btns-new');
      newBtnsWrapper.innerHTML = `
        <div class="product-card__btns-top">
          <div class="product-card__price">
            <div class="product-card__price-new">2 499 грн</div>
            <div class="product-card__price-old">2 999 грн</div>
          </div>
          <div class="product-card__counter" data-counter-wrapper>
            <button class="product-card__counter-minus" data-action="minus">
              <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 1.75C11.4142 1.75 11.75 1.41421 11.75 1C11.75 0.585786 11.4142 0.25 11 0.25L11 1.75ZM1 0.25C0.585787 0.25 0.25 0.585786 0.25 1C0.25 1.41421 0.585787 1.75 1 1.75L1 0.25ZM11 0.25L1 0.25L1 1.75L11 1.75L11 0.25Z" fill="#7D818E"/>
              </svg>											
            </button>
            <div class="product-card__counter-num" data-counter>25</div>
            <button class="product-card__counter-plus" data-action="plus">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 6.75C11.4142 6.75 11.75 6.41421 11.75 6C11.75 5.58579 11.4142 5.25 11 5.25L11 6.75ZM1 5.25C0.585787 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585787 6.75 1 6.75L1 5.25ZM11 5.25L1 5.25L1 6.75L11 6.75L11 5.25Z" fill="#7D818E"/>
                <path d="M6.75 1C6.75 0.585786 6.41421 0.25 6 0.25C5.58579 0.25 5.25 0.585786 5.25 1L6.75 1ZM5.25 11C5.25 11.4142 5.58579 11.75 6 11.75C6.41421 11.75 6.75 11.4142 6.75 11H5.25ZM5.25 1L5.25 11H6.75L6.75 1L5.25 1Z" fill="#7D818E"/>
              </svg>											
            </button>
          </div>
        </div>

        <div class="product-card__btns-bottom">
          <button class="product-card__btn-buy btn btn-full">Придбати</button>
					<button class="product-card__btn-buy1click btn-blue" data-modal="buy1click">Придбати в 1 клiк</button>
          <div class="product-card__btns-like">
            <button>
              <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99998 3.58704C5.6516 -1.66734 1.06041 2.06612 1 6.09071C1 12.0822 8.2793 17 9.99998 17C11.7207 17 19 12.0822 19 6.09071C18.9396 2.06612 14.3484 -1.66734 9.99998 3.58704Z" fill="#F2F3F5"/>
                <path class="line" d="M1 6.09071L0.25 6.07945V6.09071H1ZM9.99998 3.58704L9.42219 4.06521C9.56467 4.23738 9.77651 4.33704 9.99998 4.33704C10.2235 4.33704 10.4353 4.23738 10.5778 4.06521L9.99998 3.58704ZM19 6.09071H19.7501L19.7499 6.07945L19 6.09071ZM1.74992 6.10196C1.77636 4.34039 2.80175 2.68479 4.20482 2.04091C4.89023 1.72637 5.68269 1.64218 6.54398 1.91143C7.41449 2.18355 8.40208 2.83256 9.42219 4.06521L10.5778 3.10887C9.4237 1.71433 8.20674 0.859628 6.99153 0.479749C5.76711 0.096991 4.59267 0.212514 3.57919 0.677612C1.58446 1.59301 0.284052 3.81644 0.250084 6.07945L1.74992 6.10196ZM9.99998 16.25C9.93037 16.25 9.73579 16.2165 9.39891 16.0811C9.08065 15.9532 8.69109 15.7573 8.2537 15.4949C7.37949 14.9703 6.3541 14.2039 5.37754 13.2544C3.40233 11.3341 1.75 8.78951 1.75 6.09071H0.25C0.25 9.3834 2.23732 12.2935 4.33193 14.3299C5.39027 15.3589 6.50735 16.1963 7.48194 16.7811C7.96896 17.0733 8.43039 17.3084 8.83957 17.4729C9.23013 17.6299 9.63943 17.75 9.99998 17.75V16.25ZM19.7499 6.07945C19.7159 3.81644 18.4155 1.59301 16.4208 0.677611C15.4073 0.212514 14.2329 0.0969911 13.0084 0.479749C11.7932 0.859628 10.5763 1.71433 9.42218 3.10887L10.5778 4.06521C11.5979 2.83256 12.5855 2.18355 13.456 1.91143C14.3173 1.64218 15.1098 1.72637 15.7952 2.04091C17.1982 2.68479 18.2236 4.34039 18.2501 6.10196L19.7499 6.07945ZM9.99998 17.75C10.3605 17.75 10.7698 17.6299 11.1604 17.4729C11.5696 17.3084 12.031 17.0733 12.518 16.7811C13.4926 16.1963 14.6097 15.3589 15.6681 14.3299C17.7627 12.2935 19.75 9.3834 19.75 6.09071H18.25C18.25 8.78951 16.5977 11.3341 14.6224 13.2544C13.6459 14.2039 12.6205 14.9703 11.7463 15.4949C11.3089 15.7573 10.9193 15.9532 10.6011 16.0811C10.2642 16.2165 10.0696 16.25 9.99998 16.25V17.75Z" fill="#353949"/>
              </svg>                    
            </button>
          </div>
        </div>
      `;
      document.querySelector('.product-card__compound').before(newBtnsWrapper); // description 

      const cardDescriptionEl = document.querySelector('.product-card__slider-wrap .product-card__slider-descr');
      const newCardDescriptionEl = document.createElement('div');
      newCardDescriptionEl.classList.add('product-card__slider-descr');
      newCardDescriptionEl.innerHTML = cardDescriptionEl.innerHTML;
      document.querySelector('.product-card__characteristics').appendChild(newCardDescriptionEl);
    }
  } catch (error) {}
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

/***/ "./src/assets/js/modules/counter.js":
/*!******************************************!*\
  !*** ./src/assets/js/modules/counter.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return counter; });
function counter() {
  window.addEventListener('click', e => {
    if (e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus' || e.target.closest('[data-action="plus"]') || e.target.closest('[data-action="minus"]')) {
      const counterWrapper = e.target.closest('[data-counter-wrapper]');
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
    try {
      document.querySelector('.modal__text').classList.add('hide');
    } catch (error) {}

    try {
      document.querySelector('.modal-call__list').classList.add('hide');
    } catch (error) {}

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

  if (type == 'buy1click') {
    modalWindow.classList.add('modal--buy1click');
    modalWindow.innerHTML = `
      <div class="modal-wrapper">
        <button class="modal__close-btn" data-modal="close">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.46967 10.4697C0.176777 10.7626 0.176777 11.2374 0.46967 11.5303C0.762563 11.8232 1.23744 11.8232 1.53033 11.5303L0.46967 10.4697ZM6.53033 6.53033C6.82322 6.23744 6.82322 5.76256 6.53033 5.46967C6.23744 5.17678 5.76256 5.17678 5.46967 5.46967L6.53033 6.53033ZM5.46967 5.46967C5.17678 5.76256 5.17678 6.23744 5.46967 6.53033C5.76256 6.82322 6.23744 6.82322 6.53033 6.53033L5.46967 5.46967ZM11.5303 1.53033C11.8232 1.23744 11.8232 0.762563 11.5303 0.46967C11.2374 0.176777 10.7626 0.176777 10.4697 0.46967L11.5303 1.53033ZM6.53033 5.46967C6.23744 5.17678 5.76256 5.17678 5.46967 5.46967C5.17678 5.76256 5.17678 6.23744 5.46967 6.53033L6.53033 5.46967ZM10.4697 11.5303C10.7626 11.8232 11.2374 11.8232 11.5303 11.5303C11.8232 11.2374 11.8232 10.7626 11.5303 10.4697L10.4697 11.5303ZM5.46967 6.53033C5.76256 6.82322 6.23744 6.82322 6.53033 6.53033C6.82322 6.23744 6.82322 5.76256 6.53033 5.46967L5.46967 6.53033ZM1.53033 0.46967C1.23744 0.176777 0.762563 0.176777 0.46967 0.46967C0.176777 0.762563 0.176777 1.23744 0.46967 1.53033L1.53033 0.46967ZM1.53033 11.5303L6.53033 6.53033L5.46967 5.46967L0.46967 10.4697L1.53033 11.5303ZM6.53033 6.53033L11.5303 1.53033L10.4697 0.46967L5.46967 5.46967L6.53033 6.53033ZM5.46967 6.53033L10.4697 11.5303L11.5303 10.4697L6.53033 5.46967L5.46967 6.53033ZM6.53033 5.46967L1.53033 0.46967L0.46967 1.53033L5.46967 6.53033L6.53033 5.46967Z" fill="#505567"/>
          </svg>										
        </button>
        <h3 class="modal__title">Швидкий заказ</h3>
        <form class="modal-form">
          <div class="modal__input-wrapper">
            <label class="modal__label" for="phone">Телефон</label>
            <input class="modal__input modal__input--phone" type="text" id="phone" name="phone" placeholder="+38 (0__) ___ - __ - __">
          </div>
          <button class="modal__send-btn btn-blue btn-blue--full" type="submit">Придбати в 1 клiк</button>
        </form>
        <div class="modal__text">Або зв'яжіться з нами самі</div>
        <ul class="modal-call__list">
          <li class="modal-call__item modal-call__item--phone">
            <a class="modal-call__link" href="tel:+380661225963">+38 (066) 122-59-63</a>
          </li>
          <li class="modal-call__item modal-call__item--whatsapp">
            <a class="modal-call__link" href="https://www.whatsapp.com/" target="_blank">+38 (066) 122-59-63</a>
          </li>
        </ul>
      </div>
    `;
  }

  if (type == 'reviews-all') {
    modalWindow.classList.add('modal--reviews');
    modalWindow.innerHTML = `
      <div class="modal-wrapper">
        <button class="modal__close-btn" data-modal="close">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.46967 10.4697C0.176777 10.7626 0.176777 11.2374 0.46967 11.5303C0.762563 11.8232 1.23744 11.8232 1.53033 11.5303L0.46967 10.4697ZM6.53033 6.53033C6.82322 6.23744 6.82322 5.76256 6.53033 5.46967C6.23744 5.17678 5.76256 5.17678 5.46967 5.46967L6.53033 6.53033ZM5.46967 5.46967C5.17678 5.76256 5.17678 6.23744 5.46967 6.53033C5.76256 6.82322 6.23744 6.82322 6.53033 6.53033L5.46967 5.46967ZM11.5303 1.53033C11.8232 1.23744 11.8232 0.762563 11.5303 0.46967C11.2374 0.176777 10.7626 0.176777 10.4697 0.46967L11.5303 1.53033ZM6.53033 5.46967C6.23744 5.17678 5.76256 5.17678 5.46967 5.46967C5.17678 5.76256 5.17678 6.23744 5.46967 6.53033L6.53033 5.46967ZM10.4697 11.5303C10.7626 11.8232 11.2374 11.8232 11.5303 11.5303C11.8232 11.2374 11.8232 10.7626 11.5303 10.4697L10.4697 11.5303ZM5.46967 6.53033C5.76256 6.82322 6.23744 6.82322 6.53033 6.53033C6.82322 6.23744 6.82322 5.76256 6.53033 5.46967L5.46967 6.53033ZM1.53033 0.46967C1.23744 0.176777 0.762563 0.176777 0.46967 0.46967C0.176777 0.762563 0.176777 1.23744 0.46967 1.53033L1.53033 0.46967ZM1.53033 11.5303L6.53033 6.53033L5.46967 5.46967L0.46967 10.4697L1.53033 11.5303ZM6.53033 6.53033L11.5303 1.53033L10.4697 0.46967L5.46967 5.46967L6.53033 6.53033ZM5.46967 6.53033L10.4697 11.5303L11.5303 10.4697L6.53033 5.46967L5.46967 6.53033ZM6.53033 5.46967L1.53033 0.46967L0.46967 1.53033L5.46967 6.53033L6.53033 5.46967Z" fill="#505567"/>
          </svg>										
        </button>
        <h3 class="modal__title">Відгуки</h3>
        <ul class="modal-review__items">
          
          <li class="review-item">
            <div class="review-item__content">
              <div class="review-item__top">
                <div class="review-item__starrating" data-rating="5">
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                </div>
                <div class="review-item__name">Юлія Горобець</div>
                <div class="review-item__text">
                  Хочу висловити свою подяку колективу, за чудову роботу та професіоналізм! Замовляю вже 3 разів і щоразу це повне захоплення! Букети красиві, квіточки свіжі, довго стоять! Замовляла і готові та збирав за своїм бажанням-все чудово! Дякую Roseshop - ви той випадок, коли точно знаєш куди повертатися за квіточками.
                </div>
              </div>
              <div class="review-item__bottom">
                <div class="review-item__bouquet">Відгук про букет:&ensp;<a href="#">Троянди 80 см</a></div>
              </div>
            </div>
          
            <div class="review-item__img">
              <img src="./img/reviews/people/1.jpg" alt="review icon">
            </div>
          </li>
          
          <li class="review-item">
            <div class="review-item__content">
              <div class="review-item__top">
                <div class="review-item__starrating" data-rating="4">
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                </div>
                <div class="review-item__name">Oksana Sydorovych</div>
                <div class="review-item__text">
                  Просто казкові букети! Гармонійні, зроблені з увагою до деталей - відчувається любов до своєї справи  Постійний хороший настрій гарантовано  Хоч і раніше користувався послугами флористів, та тут як справжнє откровення було. Є от букети, а є букети від Roseshop. Взагалі з іншої ліги! 
                </div>
              </div>
              <div class="review-item__bottom">
                <div class="review-item__bouquet">Відгук про букет:&ensp;<a href="#">25 троянд Ніжний мікс</a></div>
              </div>
            </div>
          
            <div class="review-item__img">
              <img src="./img/reviews/people/2.jpg" alt="review icon">
            </div>
          </li>
          
          <li class="review-item">
            <div class="review-item__content">
              <div class="review-item__top">
                <div class="review-item__starrating" data-rating="5">
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                </div>
                <div class="review-item__name">Olena Levchuk</div>
                <div class="review-item__text">
                  Шикарні квіти, які дарують чарівний настрій))) букети зберігають свою красу більше тижня!) дякуємо за душевність та індивідуальний підхід, які ви вкладаєте в свої творіння.
                </div>
              </div>
              <div class="review-item__bottom">
                <div class="review-item__bouquet">Відгук про букет:&ensp;<a href="#">Ред наомі 60 см</a></div>
              </div>
            </div>
          
            <div class="review-item__img">
              <img src="./img/reviews/people/3.jpg" alt="review icon">
            </div>
          </li>
          
          <li class="review-item">
            <div class="review-item__content">
              <div class="review-item__top">
                <div class="review-item__starrating" data-rating="5">
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                </div>
                <div class="review-item__name">Іра Мокра</div>
                <div class="review-item__text">
                  Хотіла написати,щось про Вас,але настільки в захваті,що не можу підібрати слів. Я дуже гурман у справах флористичних,Ви задовільнили всі мої побажання,та ще й в рази перевершили їх:)
                </div>
              </div>
              <div class="review-item__bottom">
                <div class="review-item__bouquet">Відгук про букет:&ensp;<a href="#">Троянда "Мондіаль" з евкаліптом</a></div>
              </div>
            </div>
          
            <div class="review-item__img">
              <img src="./img/reviews/people/4.jpg" alt="review icon">
            </div>
          </li>
          
          <li class="review-item">
            <div class="review-item__content">
              <div class="review-item__top">
                <div class="review-item__starrating" data-rating="5">
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                </div>
                <div class="review-item__name">Анна Аврашова</div>
                <div class="review-item__text">
                  Круто, що є така можливість – привітати дорогу людину на відстані! Кур'єр приїхав уранці, як і залишили у заявці. Листівку підписали. Замовлення швидке і чітке, враховуючи, що містечко маленьке. Велике дякую)
                </div>
              </div>
              <div class="review-item__bottom">
                <div class="review-item__bouquet">Відгук про букет:&ensp;<a href="#">5 піоноподібних троянд Місті баблс</a></div>
              </div>
            </div>
          
            <div class="review-item__img">
              <img src="./img/reviews/people/5.jpg" alt="review icon">
            </div>
          </li>

        </ul>
      </div>
    `;
  }

  if (type == 'reviews-product') {
    modalWindow.classList.add('modal--reviews');
    modalWindow.innerHTML = `
    <div class="modal-wrapper reviews-pr">
        <button class="modal__close-btn" data-modal="close">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.46967 10.4697C0.176777 10.7626 0.176777 11.2374 0.46967 11.5303C0.762563 11.8232 1.23744 11.8232 1.53033 11.5303L0.46967 10.4697ZM6.53033 6.53033C6.82322 6.23744 6.82322 5.76256 6.53033 5.46967C6.23744 5.17678 5.76256 5.17678 5.46967 5.46967L6.53033 6.53033ZM5.46967 5.46967C5.17678 5.76256 5.17678 6.23744 5.46967 6.53033C5.76256 6.82322 6.23744 6.82322 6.53033 6.53033L5.46967 5.46967ZM11.5303 1.53033C11.8232 1.23744 11.8232 0.762563 11.5303 0.46967C11.2374 0.176777 10.7626 0.176777 10.4697 0.46967L11.5303 1.53033ZM6.53033 5.46967C6.23744 5.17678 5.76256 5.17678 5.46967 5.46967C5.17678 5.76256 5.17678 6.23744 5.46967 6.53033L6.53033 5.46967ZM10.4697 11.5303C10.7626 11.8232 11.2374 11.8232 11.5303 11.5303C11.8232 11.2374 11.8232 10.7626 11.5303 10.4697L10.4697 11.5303ZM5.46967 6.53033C5.76256 6.82322 6.23744 6.82322 6.53033 6.53033C6.82322 6.23744 6.82322 5.76256 6.53033 5.46967L5.46967 6.53033ZM1.53033 0.46967C1.23744 0.176777 0.762563 0.176777 0.46967 0.46967C0.176777 0.762563 0.176777 1.23744 0.46967 1.53033L1.53033 0.46967ZM1.53033 11.5303L6.53033 6.53033L5.46967 5.46967L0.46967 10.4697L1.53033 11.5303ZM6.53033 6.53033L11.5303 1.53033L10.4697 0.46967L5.46967 5.46967L6.53033 6.53033ZM5.46967 6.53033L10.4697 11.5303L11.5303 10.4697L6.53033 5.46967L5.46967 6.53033ZM6.53033 5.46967L1.53033 0.46967L0.46967 1.53033L5.46967 6.53033L6.53033 5.46967Z" fill="#505567"/>
          </svg>										
        </button>
        <h3 class="modal__title">Відгуки</h3>
        <ul class="modal-review__items">
          
          <li class="review-item">
            <div class="review-item__content">
              <div class="review-item__top">
                <div class="review-item__starrating" data-rating="5">
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                </div>
                <div class="review-item__name">Юлія Горобець</div>
                <div class="review-item__text">
                  Хочу висловити свою подяку колективу, за чудову роботу та професіоналізм! Замовляю вже 3 разів і щоразу це повне захоплення! Букети красиві, квіточки свіжі, довго стоять! Замовляла і готові та збирав за своїм бажанням-все чудово! Дякую Roseshop - ви той випадок, коли точно знаєш куди повертатися за квіточками.
                </div>
              </div>
            </div>
          
            <div class="review-item__img">
              <img src="./img/reviews/people/1.jpg" alt="review icon">
            </div>
          </li>
          
          <li class="review-item">
            <div class="review-item__content">
              <div class="review-item__top">
                <div class="review-item__starrating" data-rating="4">
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                </div>
                <div class="review-item__name">Oksana Sydorovych</div>
                <div class="review-item__text">
                  Просто казкові букети! Гармонійні, зроблені з увагою до деталей - відчувається любов до своєї справи  Постійний хороший настрій гарантовано  Хоч і раніше користувався послугами флористів, та тут як справжнє откровення було. Є от букети, а є букети від Roseshop. Взагалі з іншої ліги! 
                </div>
              </div>
            </div>
          
            <div class="review-item__img">
              <img src="./img/reviews/people/2.jpg" alt="review icon">
            </div>
          </li>
          
          <li class="review-item">
            <div class="review-item__content">
              <div class="review-item__top">
                <div class="review-item__starrating" data-rating="5">
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                </div>
                <div class="review-item__name">Olena Levchuk</div>
                <div class="review-item__text">
                  Шикарні квіти, які дарують чарівний настрій))) букети зберігають свою красу більше тижня!) дякуємо за душевність та індивідуальний підхід, які ви вкладаєте в свої творіння.
                </div>
              </div>
            </div>
          
            <div class="review-item__img">
              <img src="./img/reviews/people/3.jpg" alt="review icon">
            </div>
          </li>
          
          <li class="review-item">
            <div class="review-item__content">
              <div class="review-item__top">
                <div class="review-item__starrating" data-rating="5">
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                </div>
                <div class="review-item__name">Іра Мокра</div>
                <div class="review-item__text">
                  Хотіла написати,щось про Вас,але настільки в захваті,що не можу підібрати слів. Я дуже гурман у справах флористичних,Ви задовільнили всі мої побажання,та ще й в рази перевершили їх:)
                </div>
              </div>
            </div>
          
            <div class="review-item__img">
              <img src="./img/reviews/people/4.jpg" alt="review icon">
            </div>
          </li>
          
          <li class="review-item">
            <div class="review-item__content">
              <div class="review-item__top">
                <div class="review-item__starrating" data-rating="5">
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                  <div class="star">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.5599 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="white" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>												
                  </div>
                </div>
                <div class="review-item__name">Анна Аврашова</div>
                <div class="review-item__text">
                  Круто, що є така можливість – привітати дорогу людину на відстані! Кур'єр приїхав уранці, як і залишили у заявці. Листівку підписали. Замовлення швидке і чітке, враховуючи, що містечко маленьке. Велике дякую)
                </div>
              </div>
            </div>
          
            <div class="review-item__img">
              <img src="./img/reviews/people/5.jpg" alt="review icon">
            </div>
          </li>

        </ul>
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

/***/ "./src/assets/js/modules/rangeSlider.js":
/*!**********************************************!*\
  !*** ./src/assets/js/modules/rangeSlider.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rangeSlider; });
function rangeSlider() {
  const rangeInput = document.querySelectorAll('.range-input input');
  const priceInput = document.querySelectorAll('.price-input input');
  const progress = document.querySelector('.slider .progress');
  let priceGap = 1000;
  priceInput.forEach(input => {
    input.addEventListener('input', e => {
      let minVal = parseInt(priceInput[0].value),
          maxVal = parseInt(priceInput[1].value);

      if (maxVal - minVal >= priceGap && maxVal <= 20000 && minVal >= 200) {
        if (e.target.className == 'input-min') {
          rangeInput[0].value = minVal;
          progress.style.left = minVal / rangeInput[0].max * 100 + '%';
        } else {
          rangeInput[1].value = maxVal;
          progress.style.right = 100 - maxVal / rangeInput[1].max * 100 + '%';
        }
      }
    });
  });
  rangeInput.forEach(input => {
    input.addEventListener('input', e => {
      let minVal = parseInt(rangeInput[0].value),
          maxVal = parseInt(rangeInput[1].value);

      if (maxVal - minVal < priceGap) {
        if (e.target.className == 'range-min') {
          rangeInput[0].value = maxVal - priceGap;
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      } else {
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
        progress.style.left = minVal / rangeInput[0].max * 100 + '%';
        progress.style.right = 100 - maxVal / rangeInput[1].max * 100 + '%';
      }
    });
  });
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