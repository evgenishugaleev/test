import catalogBurgerMenu from './components/catalogBurgerMenu.js';
import selectCityMenu from './components/selectCityMenu.js';
import renderProductsCard from './components/renderProductsCards.js';
import filterItemsCount from './components/filterItemsCount.js';
import getProductsList from './components/getProductsList.js';
import filterDisplayItems from './components/filterDisplayItems.js';
import sortDisplayItems from './components/sortDisplayItems.js';
import basketRender from './components/basketRender.js';
import accordionOpening from './components/accordionOpening.js';
import slider from './components/slider.js';
import { formValidator } from './components/questionForm.js';

window.addEventListener('DOMContentLoaded', async () => {
  const productsArr = await getProductsList();
  catalogBurgerMenu();
  selectCityMenu();
  renderProductsCard(productsArr);
  slider(productsArr);
  filterItemsCount(productsArr);
  filterDisplayItems(productsArr);
  sortDisplayItems();
  basketRender();
  accordionOpening();
  formValidator();
});
