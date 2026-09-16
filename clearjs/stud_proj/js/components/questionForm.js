// Форма
const form = document.querySelector('.questions__form');
form.addEventListener('sumbit', function (e) {
  e.preventDefault();
  formSubmit();
});

// Валидатор
export function formValidator() {
  const validator = new JustValidate('.questions__form');
  validator
    .addField('#name', [
      {
        rule: 'required',
        errorMessage: 'Поле обязательно для заполнения',
      },
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Минимум 3 символа',
      },
      {
        rule: 'maxLength',
        value: 20,
        errorMessage: 'Максимум 20 символов',
      },
    ])
    .addField('#email', [
      {
        rule: 'required',
        errorMessage: 'Поле обязательно для заполнения',
      },
      {
        rule: 'email',
        errorMessage: 'email введен не корректно',
      },
    ])
    .addField('#agree', [
      {
        rule: 'required',
        errorMessage: 'Согласие обязательно',
      },
    ]);

  validator.onSuccess(function () {
    formSubmit();
  });
}

// Отправка формы
async function formSubmit() {
  const formData = new FormData(form);

  const buttonFormEl = document.querySelector('.questions__btn');
  buttonFormEl.setAttribute('disabled', 'true')

  try {
    const response = await fetch('https://httpbin.org/post', {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) {
      throw new Error();
    }
    formPost();
    form.reset();
  } catch (error) {
    formPost(error);
  } finally {
  buttonFormEl.removeAttribute('disabled')
  }
}

function formPost(error) {
  const successModalEl = document.createElement('div');
  successModalEl.classList.add('message');

  const modalContentEl = document.createElement('p');
  modalContentEl.classList.add('message__content');
  if (!error) {
    modalContentEl.textContent = 'Благодарим за обращение';
  } else {
    modalContentEl.textContent = 'Ошибка отправки';
  }

  const modalCloseEl = document.createElement('button');
  modalCloseEl.classList.add('message__close');
  modalCloseEl.innerHTML = `
    <svg class="main-menu__icon" width="24" height="24" aria-hidden="true">
        <use xlink:href="images/sprite.svg#icon-close"></use>
    </svg>
    `;
  modalCloseEl.addEventListener('click', function () {
    successModalEl.remove();
  });

  modalContentEl.append(modalCloseEl);
  successModalEl.append(modalContentEl);
  document.body.append(successModalEl);
}
