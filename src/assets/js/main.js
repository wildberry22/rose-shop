import preloader from './modules/preloader.js';
import copyText from './modules/copyText.js';
import toTop from './modules/toTop.js';
import cutString from './modules/cutString.js';
import shadow from './modules/shadow.js';
import openModal from './modules/openModal.js';
import closeModal from './modules/closeModal.js';
import phoneMask from './modules/phoneMask.js';
import forms from './modules/forms.js';
import rangeSlider from './modules/rangeSlider.js';
import counter from './modules/counter.js';
import calcScroll from "./modules/calcScroll.js";


// script for preloader
window.addEventListener('load', preloader);



document.addEventListener("DOMContentLoaded", () => {
  
  //counter
  counter();

  try {
    toTop();
  } catch (error) {}
  
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

  // dropdown menu with overflowX for container
  try {
    if (window.innerWidth <= 1024 && window.innerWidth >= 680) {
      const scrollHeaderWrapper = document.querySelector('.header .nav-list');
      const dropDownElements = document.querySelectorAll('.nav-list__item.hover-menu');

      dropDownElements.forEach(element => {
        element.addEventListener('mouseenter', e => {
          const dropDownMenuEl = e.target.querySelector('.hover-menu__wrapper');
          dropDownMenuEl.style.left = element.getBoundingClientRect().left - 20 + 'px';
        });
        element.addEventListener('mouseleave', e => {
        });
      });
    }
  } catch (error) {}




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
      breakpoints: {
        319: {
          pagination: {
            el: ".card-img__pagination",
            clickable: true,
          },
          allowTouchMove: true
        },
        901: {
          pagination: {
            el: ".card-img__pagination",
            clickable: false,
          },
          allowTouchMove: false
        }
      }
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
        300: {
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
  


  /* ========== About ========== */
  try {
    if(window.innerWidth <= 520) {
      document.querySelectorAll('.about-content p').forEach((item, idx) => {
        if(!idx == 0) {
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
            if(!idx == 0) {
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
    if(window.innerWidth <= 680) {
      const mapWrapper = document.querySelector('.map iframe');
      mapWrapper.setAttribute('height', 400);
    }
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
  // adaptive
  try {
    if(window.innerWidth <= 900) { 
      window.addEventListener('click', e => {
        if(e.target.hasAttribute('data-filter-open') || e.target.closest('[data-filter-open]')) {
          document.querySelector('.filter').classList.add('active');
          document.body.style.overflowY = 'hidden';
          document.body.style.marginRight = calcScroll() + 'px';
        }
        if(e.target.hasAttribute('data-filter-close') || e.target.closest('[data-filter-close]')) {
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
      breakpoints: {
        280: {
          spaceBetween: 10,
          slidesPerView: 3.2,
          freeMode: true,
        },
        376: {
          spaceBetween: 10,
          slidesPerView: 3.7,
          freeMode: true,
        },
        568: {
          spaceBetween: 10,
          slidesPerView: 4.7,
          freeMode: true,
        },
        681: {
          spaceBetween: 10,
          slidesPerView: 3.2,
          freeMode: true,
        },
        820: {
          spaceBetween: 10,
          slidesPerView: 4.2,
          freeMode: true,
        }
      }
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
  

  try {
    if(window.innerWidth <= 680) {
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

      document.querySelector('.product-card__compound').before(newBtnsWrapper);


      // description 
      const cardDescriptionEl = document.querySelector('.product-card__slider-wrap .product-card__slider-descr');

      const newCardDescriptionEl = document.createElement('div');
      newCardDescriptionEl.classList.add('product-card__slider-descr');
      newCardDescriptionEl.innerHTML = cardDescriptionEl.innerHTML;
      document.querySelector('.product-card__characteristics').appendChild(newCardDescriptionEl);
    }
  } catch (error) {}
 
});
