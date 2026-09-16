import { getFilteredProducts } from './filterDisplayItems.js';
import renderProductsCard from './renderProductsCards.js';

// Сортировка массива по параметру
export function sortingProcess(items, sortValue) {
  switch (sortValue) {
    case 'rating-max':
      items.sort((a, b) => b.rating - a.rating);
      break;
    case 'price-max':
      items.sort((a, b) => b.price.new - a.price.new);
      break;
    case 'price-min':
      items.sort((a, b) => a.price.new - b.price.new);
      break;
  }
}

// Выбор и приминение сортировки
export default function sortDisplayItems() {
  const sortSelectEl = document.querySelector('.catalog__sort-select');
  sortSelectEl.addEventListener('input', function () {
    const productsArr = getFilteredProducts();
    sortingProcess(productsArr, sortSelectEl.value);

    const catalogListEl = document.querySelector('.catalog__list');
    if (catalogListEl) catalogListEl.innerHTML = '';

    renderProductsCard(productsArr);
  });

  // Если нужно начинать сортировку при загрузке страницы
  function startWithSort() {
    const productsArr = getFilteredProducts();
    sortingProcess(productsArr, sortSelectEl.value);
    const catalogListEl = document.querySelector('.catalog__list');
    if (catalogListEl) catalogListEl.innerHTML = '';
    renderProductsCard(productsArr);
  }
  startWithSort();
}
