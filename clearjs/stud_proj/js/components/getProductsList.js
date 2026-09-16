export default async function getProductsList() {
  // Обращение к серверу с данными товаров
  async function fetchProductsData() {
    const response = await fetch('./data/data.json');
    const data = await response.json();
    return data;
  }

  // Получение массива товаров
  async function getProductsData() {
    const array = await fetchProductsData();
    return array;
  }

  // Массив товаров
  const productsArr = await getProductsData();

  return productsArr;
}
