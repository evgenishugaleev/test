export default function catalogBurgerMenu() {
  // Элемент меню
  const catalogMenuEl = document.querySelector('.main-menu');

  // Кнопка открытия меню
  const openButtonEl = document.querySelector('.header__catalog-btn');
  openButtonEl.addEventListener('click', function () {
    openBurgerMenu();
  });
  // Функция открытия меню
  function openBurgerMenu() {
    catalogMenuEl.classList.add('main-menu--active');
  }

  // Кнопка закрытия меню
  const closeButtonEl = document.querySelector('.main-menu__close');
  closeButtonEl.addEventListener('click', function () {
    closeBurgerMenu();
  });
  // Функция закрытия меню
  function closeBurgerMenu() {
    catalogMenuEl.classList.remove('main-menu--active');
  }
}
