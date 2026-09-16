import renderProductsCard from './renderProductsCards.js';
import { sortingProcess } from './sortDisplayItems.js';

let cachedFilteredProducts = [];
let hasBeenFiltered = false;
let productsArrRef = [];

// Возвращает массив отфильтрованных товаров
export function getFilteredProducts() {
  return hasBeenFiltered ? cachedFilteredProducts : productsArrRef;
}

export default function filterDisplayItems(productsArr) {
  productsArrRef = productsArr;
  // Список товаров
  const catalogListEl = document.querySelector('.catalog__list');

  // Кнопка сброса фильтров
  const resetButtonEl = document.querySelector('.catalog-form__reset');
  resetButtonEl.addEventListener('click', function () {
    if (catalogListEl) {
      catalogListEl.innerHTML = '';
    }

    //! Сохранение сортировки при сбросе фильтров
    const sortSelectEl = document.querySelector('.catalog__sort-select');
    const productsToRender = productsArrRef;

    // ! Если нужно чтобы также сбрасывалась сортировка
    sortSelectEl.selectedIndex = 0;

    if (sortSelectEl && sortSelectEl.value) {
      sortingProcess(productsToRender, sortSelectEl.value);
    }

    renderProductsCard(productsToRender);
    hasBeenFiltered = false;
    cachedFilteredProducts = [];
  });

  // Поиск всех чекбоксов
  const checkboxEls = document.querySelectorAll('.custom-checkbox__field[value]');
  checkboxEls.forEach((checkbox) => {
    checkbox.addEventListener('input', function () {
      setCheckedCheckboxEls();
      filterProducts(productsArrRef);
    });
  });

  // Поиск радио
  const radioEls = document.querySelectorAll('.custom-radio__field[name="status"]');
  radioEls.forEach((radio) => {
    radio.addEventListener('change', function () {
      filterProducts(productsArrRef);
    });
  });

  // Поиск отмеченных чекбоксов
  let checkedCheckboxEls = [];
  function setCheckedCheckboxEls() {
    checkedCheckboxEls = document.querySelectorAll('.custom-checkbox__field:checked');
  }

  // Проверка наличия товара хотя бы в одном городе
  function isItemInStock(item) {
    const availability = item.availability;
    return availability.moscow > 0 || availability.orenburg > 0 || availability.saintPetersburg > 0;
  }

  function filterProducts(productsArr) {
    // Сбор данных с чекбоксов
    const selectedValues = Array.from(checkedCheckboxEls).map((checkbox) => checkbox.value);

    // Получение значения радиокнопки
    const checkedRadioEl = document.querySelector('.custom-radio__field[name="status"]:checked');
    const filterByStock = checkedRadioEl ? checkedRadioEl.value == 'instock' : false;

    let filteredItems = productsArr;

    // Фильтрация по типу
    if (selectedValues.length > 0) {
      filteredItems = filteredItems.filter((item) => {
        return item.type.some((type) => selectedValues.includes(type));
      });
    }

    // Фильтрация по наличию
    if (filterByStock) {
      filteredItems = filteredItems.filter((item) => {
        return isItemInStock(item);
      });
    }

    // Сохраняем и применяем текущую сортировку
    const sortSelectEl = document.querySelector('.catalog__sort-select');
    if (sortSelectEl && sortSelectEl.value) {
      sortingProcess(filteredItems, sortSelectEl.value);
    }

    renderFilteredProducts(filteredItems);
    cachedFilteredProducts = filteredItems;
    hasBeenFiltered = true;
  }

  // Рендер отфильтрованных карточек
  function renderFilteredProducts(filteredArr) {
    if (catalogListEl) {
      catalogListEl.innerHTML = '';
    }
    renderProductsCard(filteredArr);
  }
}
