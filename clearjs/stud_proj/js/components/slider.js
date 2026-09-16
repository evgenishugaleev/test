import { getProductCardElement } from './renderProductsCards.js';

// Список товаров дня
const dayProductListEl = document.querySelector('.day-products__list');

export default function slider(productsArr) {
  // Массива для хранения товаров дня
  let goodsOfDayItems = [];

  // Поиск товаров дня
  productsArr.forEach((item) => {
    if (item.goodsOfDay) {
      goodsOfDayItems.push(item);
    }
  });

  goodsOfDayItems.forEach((product) => {
    const dayProductListItemEl = document.createElement('li');
    dayProductListItemEl.classList.add('day-products__item', 'swiper-slide');
    const dayProductCardEl = getProductCardElement(product, 'product-card--small');
    dayProductListItemEl.append(dayProductCardEl);
    dayProductListEl.append(dayProductListItemEl);
  });
}

function initSwiper() {
  // init Swiper:
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: '20px',
    slidesPerView: '4',

    // Navigation arrows
    navigation: {
      nextEl: '.day-products__navigation-btn--next',
      prevEl: '.day-products__navigation-btn--prev',
    },
  });
}
initSwiper();
