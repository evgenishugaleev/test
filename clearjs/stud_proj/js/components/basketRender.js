import createBasketTemplate from './createBasketTemplate.js';
import getProductsList from './getProductsList.js';

// Список товаров в корзине
const basketListEl = document.querySelector('.basket__list');

// Счетчик товаров в корзине
const basketCounterEl = document.querySelector('.header__user-count');
let basketCountId = 0;
function updateBasketCounter() {
  basketCounterEl.textContent = basketCountId;
}
updateBasketCounter();

// Блок пустой корзины
const emptyBasketEl = document.querySelector('.basket__empty-block');

// Кнопка перехода к оформлению заказа
const orderButtonEl = document.querySelector('.basket__link');

// Функция для проверки и обновления видимости пустой корзины
function updateEmptyBasketVisibility() {
  const basketItems = basketListEl.querySelectorAll('.basket__item');

  if (basketItems.length === 0) {
    orderButtonEl.style.display = 'none';
    emptyBasketEl.style.display = 'block';
  } else {
    orderButtonEl.style.display = 'block';
    emptyBasketEl.style.display = 'none';
  }
}

export default function basketRender() {
  const basketWrapEl = document.querySelector('.basket');
  updateEmptyBasketVisibility();

  // Кнопка открытия / закрытия
  const basketButtonEl = document.querySelector('#basket-button');
  basketButtonEl.addEventListener('click', function () {
    basketWrapEl.classList.toggle('basket--active');
  });
}

// Добавление товара в корзину
export async function addItemDataInBasket(dataId) {
  const productsArr = await getProductsList();
  productsArr.forEach((product) => {
    if (product.id == dataId) {
      const basketProductItemEl = document.createElement('li');
      basketProductItemEl.classList.add('basket__item');
      // ! innerHTML
      createBasketTemplate(basketProductItemEl, product);
      basketListEl.append(basketProductItemEl);
      updateEmptyBasketVisibility();

      // Обработчик для кнопки удаления
      const closeButton = basketProductItemEl.querySelector('.basket__close');
      closeButton.addEventListener('click', function () {
        basketProductItemEl.remove();
        updateEmptyBasketVisibility();
        basketCountId--;
        updateBasketCounter();
      });

      // Обновление счетчика
      basketCountId++;
      updateBasketCounter();
    }
  });
}
