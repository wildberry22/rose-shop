import copyText from './modules/copyText.js';
import cutString from './modules/cutString.js';
import shadow from './modules/shadow.js';
import openModal from './modules/openModal.js';
import closeModal from './modules/closeModal.js';
import phoneMask from './modules/phoneMask.js';
import forms from './modules/forms.js';

document.addEventListener("DOMContentLoaded", () => {
  
  /* ========== Header ========== */
  // Working with extra-block in header
  const header = document.querySelector('.header--extra');
  if (header) {
    const headerExtra = header.querySelector('.header-extra');

    window.addEventListener('click', e => {
      if(e.target.classList.contains('.header-extra__close') || e.target.closest('.header-extra__close')) {
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
  });

  // activating cart
  const cart = document.querySelector('.cart');
  document.querySelector('.header-main__basket-btn').addEventListener('click', () => {
    shadow('activate');
    cart.classList.add('active');
  });

  // deactivating cart
  window.addEventListener('click', e => {
    if(e.target.hasAttribute('data-cart-close') || e.target.closest('[data-cart-close]') || e.target == cart) {
      shadow('deactivate');
      cart.classList.remove('active');
    }
  });

  // remove item in cart 
  window.addEventListener('click', e => {
    if(e.target.classList.contains('cart-item__btn') || e.target.closest('.cart-item__btn')) {
      e.target.closest('.cart-item').remove();
    }
  });

  // cart-item counter
  window.addEventListener('click', e => {
    if(e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus' || e.target.closest('[data-action="plus"]') || e.target.closest('[data-action="minus"]')) {
      const counterWrapper = e.target.closest('.cart-item__counter');
      const counter = counterWrapper.querySelector('[data-counter]');
  
      if(e.target.dataset.action === 'plus' || e.target.closest('[data-action="plus"]')) {
        counter.innerText = ++counter.innerText;
      }
      
      if(e.target.dataset.action === 'minus' || e.target.closest('[data-action="minus"]')) {
        if (+counter.innerText > 1) {
          counter.innerText = --counter.innerText;
        }
      }
    }
  });



  /* ========== Banner ========== */
  // Banner slider section > button to copy promo
  copyText();

  // Banner slider
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
      clickable: true,
    },
    navigation: {
      nextEl: ".banner-slider__btn-next",
      prevEl: ".banner-slider__btn-prev",
    },
  });

  // Banner Proposition slider
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
      prevEl: ".banner-proposition__btn-prev",
    },
  });



  /* ========== Product card ========== */
  const cards = document.querySelectorAll('.card');
  // Card slider
  const cardSlider = new Swiper(".card-img__slider", {
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    effect: "fade",
    autoplay: {
      delay: 1000,
    },
    pagination: {
      el: ".card-img__pagination",
      clickable: false,
    },
    allowTouchMove: false,
  });
  
  // Slider not autoplay after creation
  cardSlider.forEach(slider => {
    slider.autoplay.stop();
  });
  // When we hover at the card it starts working
  cards.forEach((card, idx) => {
    card.addEventListener('mouseenter', (e) => {
      cardSlider[idx].autoplay.start();
    });
    card.addEventListener('mouseleave', (e) => {
      cardSlider[idx].autoplay.stop();
    });
  });

  // When we hover over the picture, the title link is highlighted so that it is clear that the picture is also a link
  cards.forEach(card => {
    const title = card.querySelector('.card-title');
    const imgWrapper = card.querySelector('.card-img');

    imgWrapper.addEventListener('mouseenter', (e) => {
      title.classList.add('hover');
    });
    imgWrapper.addEventListener('mouseleave', (e) => {
      title.classList.remove('hover');
    });
  });

  // Toggle class on Like button
  cards.forEach(card => {
    const likedBtn = card.querySelector('.card-btn--like');
    likedBtn.addEventListener('click', () => {
      likedBtn.classList.toggle('active');
    });
  });

  // Cut the Title if it's too long
  cards.forEach(card => {
    const title = card.querySelector('.card-title a');
    title.innerText = cutString(title, 50);
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
      prevEl: ".slider-swiper__btn-prev",
    },
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
    },
  });

  // swiper
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
      prevEl: ".gallery-slider__btn-prev",
    },
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
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".reviews-slider__btn-next",
      prevEl: ".reviews-slider__btn-prev",
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
  });

  // Cut the text if it's too long
  document.querySelectorAll('.reviews-slider__slide-text').forEach(item => {
    item.innerText = cutString(item, 526);
  });


  
  /* ========== Blog ========== */
  // Cut the title if it's too long
  document.querySelectorAll('.blog-card__title a').forEach(item => {
    item.innerText = cutString(item, 33);
  });
  document.querySelectorAll('.blog-card__descr').forEach(item => {
    item.innerText = cutString(item, 122);
  });

  // When we hover over the picture, the title link is highlighted so that it is clear that the picture is also a link
  document.querySelectorAll('.blog-card').forEach(card => {
    const title = card.querySelector('.blog-card__title');
    const imgWrapper = card.querySelector('.blog-card__img');

    imgWrapper.addEventListener('mouseenter', (e) => {
      title.classList.add('hover');
      card.classList.add('hover');
    });
    imgWrapper.addEventListener('mouseleave', (e) => {
      title.classList.remove('hover');
      card.classList.remove('hover');
    });

    title.addEventListener('mouseenter', (e) => {
      imgWrapper.classList.add('hover');
      card.classList.add('hover');
    });
    title.addEventListener('mouseleave', (e) => {
      imgWrapper.classList.remove('hover');
      card.classList.remove('hover');
    });
  });



  /* ========== Modal ========== */
  window.addEventListener('click', e => {

    if(e.target.dataset.modal === 'request-call' || e.target.closest('[data-modal="request-call"]')) {
      e.preventDefault();
      shadow('activate');
      openModal('request-call');
      phoneMask('.modal__input--phone');
      forms();
    }
    if(e.target.dataset.modal === 'reviews' || e.target.closest('[data-modal="reviews"]')) {
      e.preventDefault();
      shadow('activate');
      openModal('reviews');
    }

  });

  closeModal();

});
