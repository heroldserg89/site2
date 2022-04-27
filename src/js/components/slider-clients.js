import Swiper, { Pagination } from 'swiper';
Swiper.use([Pagination]);

const swiper = new Swiper(".clients__slider", {
  slidesPerView: 2,
  pagination: {
    el: ".clients__slider .swiper-pagination-circle",
    clickable: true,
    renderBullet: function (index, className) {
      return '<button class="' + className + '"></button>';
    },
  },
  breakpoints: {
    // when window width is >= 480px
    576: {
      slidesPerView: 3
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 4
    }
  }
});
