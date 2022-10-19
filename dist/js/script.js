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

document.addEventListener("DOMContentLoaded", () => {
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
  } // Banner slider section > button to copy promo


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
  }); // Card slider

  const cardSlider = new Swiper(".card-img__slider", {
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    effect: "fade",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    pagination: {
      el: ".card-img__pagination",
      clickable: false
    },
    allowTouchMove: false
  });
});

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

/***/ })

/******/ });
//# sourceMappingURL=script.js.map