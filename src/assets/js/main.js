import copyText from './modules/copyText.js';



document.addEventListener("DOMContentLoaded", () => {

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


  // Card slider
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
      clickable: false,
    },
    allowTouchMove: false,
  });
});