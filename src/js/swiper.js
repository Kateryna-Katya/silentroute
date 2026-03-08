import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// =========================
// КАРТИНКИ ДЛЯ ПАГИНАЦИИ GALLERY
// =========================
const galleryPaginationIcons = [
  {
    default: '/img/gallery/pag-1.png',
    active: '/img/gallery/pag-1-active.png',
  },
  {
    default: '/img/gallery/pag-2.png',
    active: '/img/gallery/pag-2-active.png',
  },
  {
    default: '/img/gallery/pag-3.png',
    active: '/img/gallery/pag-3-active.png',
  },
  {
    default: '/img/gallery/pag-4.png',
    active: '/img/gallery/pag-4-active.png',
  },
];

// =========================
// CORE SWIPER
// =========================
const coreSwiper = new Swiper('.core-swiper', {
  modules: [Navigation, Autoplay],
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,

  speed: 800,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  navigation: {
    nextEl: '.core-next',
  },
});

// =========================
// GALLERY SWIPER
// =========================
const gallerySwiper = new Swiper('.gallery-swiper', {
  modules: [Pagination, Autoplay],
  loop: true,
  speed: 800,
  spaceBetween: 16,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  pagination: {
    el: '.gallery-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      const icon = galleryPaginationIcons[index];

      return `
        <span class="${className}" data-index="${index}">
          <img src="${icon.default}" alt="pagination ${index + 1}">
        </span>
      `;
    },
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 1.5,
      spaceBetween: 24,
    },
  },

  on: {
    init(swiper) {
      updateGalleryPagination(swiper);
    },
    slideChange(swiper) {
      updateGalleryPagination(swiper);
    },
  },
});

// =========================
// ОБНОВЛЕНИЕ АКТИВНОЙ КАРТИНКИ ПАГИНАЦИИ
// =========================
function updateGalleryPagination(swiper) {
  const bullets = document.querySelectorAll(
    '.gallery-pagination .swiper-pagination-bullet'
  );

  bullets.forEach((bullet, index) => {
    const img = bullet.querySelector('img');
    if (!img) return;

    if (bullet.classList.contains('swiper-pagination-bullet-active')) {
      img.src = galleryPaginationIcons[index].active;
    } else {
      img.src = galleryPaginationIcons[index].default;
    }
  });
}