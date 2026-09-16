import createCardTemplate from './createCardTemplate.js';
import { addItemDataInBasket } from './basketRender.js';

let basketButtonEls;

export default async function renderProductsCard(productsArr) {
  // Список для товаров
  const catalogListEl = document.querySelector('.catalog__list');

  // Функция добавления карточек в каталог
  productsArr.forEach((product) => {
    const productCardEl = getProductCardElement(product);

    // Элемент списка
    const catalogItemEl = document.createElement('li');
    catalogItemEl.classList.add('catalog__item');

    // Добавление карточек в разметку
    catalogItemEl.append(productCardEl);
    catalogListEl.append(catalogItemEl);
  });

  // Логика кнопки "В корзину"
  basketButtonEls = document.querySelectorAll('[data-id]');

  basketButtonEls.forEach((button) => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const dataId = button.getAttribute('data-id');
      addItemDataInBasket(dataId);
    });
  });
}

export function getProductCardElement(product, classMod) {
  // Создание карточки товара
  const productCardEl = document.createElement('div');
  productCardEl.classList.add('product-card');
  if (classMod) {
    productCardEl.classList.add(classMod);
  }
  // !innerHTML
  createCardTemplate(productCardEl, product);

  return productCardEl;
}
