export default async function filterItemsCount(productsArr) {
  // Элементы чекбоксов и строк-счетчиков
  const pendantCheckboxEl = document.querySelector('.custom-checkbox__field[value = pendant]');
  const pendantCounterEl = document.querySelector('.custom-checkbox__label[for = pendant] .custom-checkbox__count');

  const ceilingCheckboxEl = document.querySelector('.custom-checkbox__field[value = ceiling]');
  const ceilingCounterEl = document.querySelector('.custom-checkbox__label[for = ceiling] .custom-checkbox__count');

  const overheadCheckboxEl = document.querySelector('.custom-checkbox__field[value = overhead]');
  const overheadCounterEl = document.querySelector('.custom-checkbox__label[for = overhead] .custom-checkbox__count');

  const pointCheckboxEl = document.querySelector('.custom-checkbox__field[value = point]');
  const pointCounterEl = document.querySelector('.custom-checkbox__label[for = point] .custom-checkbox__count');

  const nightlightsCheckboxEl = document.querySelector('.custom-checkbox__field[value = nightlights]');
  const nightlightsCounterEl = document.querySelector('.custom-checkbox__label[for = nightlights] .custom-checkbox__count');

  // Функция подсчета
  function countingItems(array, checkbox, counter) {
    // Счетчик
    let count = 0;

    // Сравнивается каждое значение типа каждого продукта и значение переданного чекбокса
    array.forEach((product) => {
      product.type.forEach((type) => {
        if (type == checkbox.value) {
          count++;
        }
      });
    });

    counter.textContent = +count;
  }

  // Вызов подсчета для каждого чекбокса и передача строки-счетчика
  countingItems(productsArr, pendantCheckboxEl, pendantCounterEl);
  countingItems(productsArr, ceilingCheckboxEl, ceilingCounterEl);
  countingItems(productsArr, overheadCheckboxEl, overheadCounterEl);
  countingItems(productsArr, pointCheckboxEl, pointCounterEl);
  countingItems(productsArr, nightlightsCheckboxEl, nightlightsCounterEl);
}
