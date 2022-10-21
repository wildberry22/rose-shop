import copyText from './modules/copyText.js';
import cutString from './modules/cutString.js';


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

});
