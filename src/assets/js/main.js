import copyText from './modules/copyText.js';
import cutString from './modules/cutString.js';
import shadow from './modules/shadow.js';
import openModal from './modules/openModal.js';
import closeModal from './modules/closeModal.js';
import phoneMask from './modules/phoneMask.js';
import forms from './modules/forms.js';
import rangeSlider from './modules/rangeSlider.js';
import counter from './modules/counter.js';
import calcScroll from "./modules/calcScroll.js";

document.addEventListener("DOMContentLoaded", () => {
  
  //counter
  counter();


  /* ========== Header ========== */
  // Working with extra-block in header
  const header = document.querySelector('.header--extra');
  if (header) {
    const headerExtra = header.querySelector('.header-extra');
    window.addEventListener('click', e => {
      if(e.target.classList.contains('.header-extra__close') || e.target.closest('.header-extra__close')) {
        headerExtra.remove();
        if(window.innerWidth <= 680) { 
          header.style.top = '0';
        } else {
          header.style.top = '-50px';
        }
        header.classList.remove('header--extra');
      }
    });
  } else {
    if(window.innerWidth <= 680) { 
      document.querySelector('.header').style.top = '0';
    } else {
      document.querySelector('.header').style.top = '-50px';
    }
  }
  
  // adaptive for header navigation
  window.addEventListener('click', e => {
    if(e.target.hasAttribute('data-open-menu') || e.target.closest('[data-open-menu]')) {
      document.querySelector('[data-open-menu]').classList.add('active');
      document.querySelector('.mobile-menu').classList.add('active');
      document.body.style.overflowY = 'hidden';
      document.body.style.marginRight = calcScroll() + 'px';
    }
    if(e.target.hasAttribute('data-close-menu') || e.target.closest('[data-close-menu]')) {
      document.querySelector('[data-open-menu]').classList.remove('active');
      document.querySelector('.mobile-menu').classList.remove('active');
      document.body.style.overflowY = 'auto';
      document.body.style.marginRight = 0;
    }
  });

  //
  window.addEventListener('click', e => {
    if(e.target.hasAttribute('data-nav-main') || e.target.closest('[data-nav-main]')) {
      document.querySelectorAll('.sticky-bottom__nav-item').forEach(el => el.classList.remove('active'));
      e.target.closest('.sticky-bottom__nav-item').classList.add('active');

      document.querySelector('.cart').classList.remove('active');
      document.querySelector('.mobile-catalog').classList.remove('active');
      document.querySelectorAll('.catalog-menu__link--open ~ ul').forEach(el => el.classList.remove('active'));

      document.body.style.overflowY = 'auto';
      document.body.style.marginRight = 0;
    }

    if(e.target.hasAttribute('data-nav-catalog') || e.target.closest('[data-nav-catalog]')) {
      document.querySelectorAll('.sticky-bottom__nav-item').forEach(el => el.classList.remove('active'));
      e.target.closest('.sticky-bottom__nav-item').classList.add('active');

      document.querySelector('.cart').classList.remove('active');
    }

    if(e.target.hasAttribute('data-open-cart') || e.target.closest('[data-open-cart]')) {
      document.querySelectorAll('.sticky-bottom__nav-item').forEach(el => el.classList.remove('active'));
      e.target.closest('.sticky-bottom__nav-item').classList.add('active');

      document.querySelector('.mobile-catalog').classList.remove('active');
      document.querySelectorAll('.catalog-menu__link--open ~ ul').forEach(el => el.classList.remove('active'));
    }
  });




  /* ========== Footer ========== */
  if(window.innerWidth <= 1080) { 
    document.querySelectorAll('.footer-top__col').forEach(item => item.style.maxWidth = 'auto');
  }
  if(window.innerWidth <= 480) {
    const footerTitles = document.querySelectorAll('.footer-top__title');

    footerTitles.forEach(item => {
      if (!item.classList.contains('not-open')) {

        item.addEventListener('click', () => {
          item.classList.toggle('active');
          const panel = item.nextElementSibling;
          if (panel.style.maxHeight){
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
  if(window.innerWidth <= 680) { 
    window.addEventListener('click', e => {
      if(e.target.hasAttribute('data-nav-catalog') || e.target.closest('[data-nav-catalog]')) {
        document.querySelector('.mobile-catalog').classList.add('active');
        document.body.style.overflowY = 'hidden';
        document.body.style.marginRight = calcScroll() + 'px';
        document.querySelectorAll('.catalog-menu__link').forEach(item => item.style.display = 'block');
      }
      if(e.target.hasAttribute('data-close-catalog') || e.target.closest('[data-close-catalog]')) {
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
      if(e.target.classList.contains('catalog-menu__link--open')) {
        document.querySelectorAll('.catalog-menu__link--open ~ ul').forEach(el => el.classList.remove('active'));
        e.target.nextElementSibling.classList.add('active');
        setTimeout(() => {
          document.querySelectorAll('.catalog-menu__link').forEach(item => item.style.display = 'none');
        }, 400);
      }

      // going prev
      if(e.target.classList.contains('catalog-menu__back-item') || e.target.closest('.catalog-menu__back-item')) {
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
      if(e.target.hasAttribute('data-open-cart') || e.target.closest('[data-open-cart]')) {
        if(window.innerWidth <= 680) {
          cart.classList.add('active');
          document.body.style.overflowY = 'hidden';
          document.body.style.marginRight = calcScroll() + 'px';
        } else {
          shadow('activate');
          cart.classList.add('active');
        }
      }
    });

    // deactivating cart
    window.addEventListener('click', e => {
      if(e.target.hasAttribute('data-cart-close') || e.target.closest('[data-cart-close]') || e.target == cart) {
        if(window.innerWidth <= 680) {
          cart.classList.remove('active');
          document.body.style.overflowY = 'auto';
          document.body.style.marginRight = 0;

          document.querySelectorAll('.sticky-bottom__nav-item').forEach(el => el.classList.remove('active'));
          document.querySelector('[data-nav-main]').parentNode.classList.add('active');
        } else {
          shadow('deactivate');
          cart.classList.remove('active');
        }
      }
    });

    // remove item in cart 
    window.addEventListener('click', e => {
      if(e.target.classList.contains('cart-item__btn') || e.target.closest('.cart-item__btn')) {
        e.target.closest('.cart-item').remove();
      }
    });

  } catch (error) {}
  



  /* ========== Banner ========== */
  // Banner slider section > button to copy promo
  copyText();

  // Banner slider
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
        clickable: true,
      },
      navigation: {
        nextEl: ".banner-slider__btn-next",
        prevEl: ".banner-slider__btn-prev",
      },
    });
  } catch (error) {}
  

  // Banner Proposition slider
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
        prevEl: ".banner-proposition__btn-prev",
      },
    });
  } catch (error) {}
  



  /* ========== Product card ========== */
  try {
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
        prevEl: ".slider-swiper__btn-prev",
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
          spaceBetween: 20,
          freeMode: true,
        },
        340: {
          slidesPerView: "auto",
          spaceBetween: 20,
          freeMode: true,
        },
        768: {
          slidesPerView: "auto",
          spaceBetween: 30,
          freeMode: true,
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
      },
      
    });
  } catch (error) {}
  

  // swiper
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
        prevEl: ".gallery-slider__btn-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: "auto",
          spaceBetween: 20,
          freeMode: true,
          centeredSlides: true,
        },
        768: {
          slidesPerView: "auto",
          spaceBetween: 20,
          freeMode: true,
          centeredSlides: true,
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
  } catch (error) {}
  


  
  /* ========== Blog ========== */
  // Cut the title if it's too long
  try {
    document.querySelectorAll('.blog-card__title a').forEach(item => {
      item.innerText = cutString(item, 33);
    });
    document.querySelectorAll('.blog-card__descr').forEach(item => {
      item.innerText = cutString(item, 122);
    });
  } catch (error) {}

  // When we hover over the picture, the title link is highlighted so that it is clear that the picture is also a link
  try {
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
  } catch (error) {}
  


  /* ========== Modal ========== */
  window.addEventListener('click', e => {

    if(e.target.dataset.modal === 'request-call' || e.target.closest('[data-modal="request-call"]')) {
      e.preventDefault();
      shadow('activate');
      openModal('request-call');
      phoneMask('.modal__input--phone');
      forms();
    }
    if(e.target.dataset.modal === 'buy1click' || e.target.closest('[data-modal="buy1click"]')) {
      e.preventDefault();
      shadow('activate');
      openModal('buy1click');
      phoneMask('.modal__input--phone');
      forms();
    }
    if(e.target.dataset.modal === 'reviews-all' || e.target.closest('[data-modal="reviews-all"]')) {
      e.preventDefault();
      shadow('activate');
      openModal('reviews-all');
    }
    if(e.target.dataset.modal === 'reviews-product' || e.target.closest('[data-modal="reviews-product"]')) {
      e.preventDefault();
      shadow('activate');
      openModal('reviews-product');
    }

  });

  closeModal();



  /* ========== Filter ========== */
  try {
    rangeSlider();
  } catch (error) {}

  // script for filterCompositionBtn - show more/hide content
  try { 
    const filterCompositionBtn = document.querySelector('.filter-item__composition-btn');
    const filterCompositionItems = document.querySelectorAll('.filter-item__composition-item');

    for(let i = 6; i < filterCompositionItems.length; i++) {
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
      },
    });
  } catch (error) {}

  //slider
  try {
    const productCardSliderSm = new Swiper(".product-card__slider--small", {
      spaceBetween: 10,
      slidesPerView: 4.2,
      freeMode: true,
      watchSlidesProgress: true,
      grabCursor: true,
      allowTouchMove: true,
    });
    const productCardSliderBg = new Swiper(".product-card__slider--big", {
      spaceBetween: 10,
      thumbs: {
        swiper: productCardSliderSm,
      },
    });
  } catch (error) {}

  // Toggle class on Like button
  try {
    document.querySelector('.product-card__btns-like button').addEventListener('click', () => {
      document.querySelector('.product-card__btns-like button').classList.toggle('active');
    });
  } catch (error) {}
  
 
});
