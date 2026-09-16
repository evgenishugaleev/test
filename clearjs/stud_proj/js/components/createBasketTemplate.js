export default function createBasketTemplate(element, product) {
  element.innerHTML = `
        <div class="basket__img">
            <img src="./stud_proj/${product.image}" alt="Фотография товара" height="60" width="60">
        </div>
        <span class="basket__name">${product.name}</span>
        <span class="basket__price">${product.price.new}</span>
        <button class="basket__close" type="button">
            <svg class="main-menu__icon" width="24" height="24" aria-hidden="true">
            <use xlink:href="images/sprite.svg#icon-close"></use>
            </svg>
        </button>
        `;
}
