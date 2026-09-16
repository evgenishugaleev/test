export default function accordionOpening() {
  // Кнопки аккордеона
  const accordionButtonEls = document.querySelectorAll('.accordion__btn');

  accordionButtonEls.forEach((button) => {
    button.addEventListener('click', function () {
      const activeButtonEl = document.querySelector('.accordion__btn--active');
      activeButtonEl?.classList.remove('accordion__btn--active');
      button.classList.toggle('accordion__btn--active', button !== activeButtonEl)
    });
  });
}
