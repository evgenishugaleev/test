export default function selectCityMenu() {
  // Элемент выбранного города
  const selectedCityEl = document.querySelector('.location__city-name');

  // Кнопка меню выбора города
  const selectButtonEl = document.querySelector('.location__city');
  // Функция открытия/закрытия выпадающего меню выбора
  selectButtonEl.addEventListener('click', function () {
    selectButtonEl.classList.toggle('location__city--active');
  });

  // Кнопка опции выбора города
  const cityButtonEls = document.querySelectorAll('.location__sublink');
  // Функция выбора города по клику на опцию
  cityButtonEls.forEach((button) => {
    button.addEventListener('click', function (e) {
      selectedCityEl.textContent = button.textContent;
      selectButtonEl.classList.remove('location__city--active');
    });
  });
}
