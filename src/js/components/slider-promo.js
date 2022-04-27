import Swiper, { Pagination } from 'swiper';
Swiper.use([Pagination]);

const swiper = new Swiper(".promo__slider", {
  slidesPerView: 'auto',
  pagination: {
    el: ".swiper-pagination-number, .swiper-pagination-circle",
    clickable: true,
    renderBullet: function (index, className) {
      return '<button class="' + className + '"></button>';
    },
  },
});


