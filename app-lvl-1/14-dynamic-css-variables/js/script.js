const root = document.documentElement;
function changeValue(id, value) {
  const suffix = id != 'color' ? '%' : '';
  root.style.setProperty(`--${id}`, value + suffix);
  console.log(value + suffix);
}

//form

document.addEventListener('DOMContentLoaded', function () {
  const email = document.getElementById('exampleInputEmail');
  const password = document.getElementById('exampleInputPassword');
  const passwordError = document.getElementById('password-error');
  const mailError = document.getElementById('mail-error');
  const content = document.getElementById('content');
  const textInformation = document.getElementById('text-information');

  function enter() {
    content.classList.add('block');
    content.classList.remove('d-none');
    form.remove();
    textInformation.remove();
  }

  function errorEmail() {
    email.classList.add('bg-danger', 'text-white');
    mailError.textContent = 'Please enter a mail.';
    mailError.classList.add('text-danger');
  }

  function errorPass() {
    password.classList.add('bg-danger', 'text-white');
    passwordError.textContent = 'Please enter a password.';
    passwordError.classList.add('text-danger');
  }

  function incorrectPass() {
    passwordError.classList.remove('bg-danger');
    password.classList.add('bg-warning');
    passwordError.textContent = 'Password or Mail incorrect.';
    passwordError.classList.add('text-danger');
  }

  function incorrectMail() {
    email.classList.add('bg-warning');
    email.classList.remove('bg-danger');
    mailError.textContent = 'Password or Mail incorrect.';
    mailError.classList.add('text-danger');
  }

  document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    if (email.value === '') {
      errorEmail();
    } else if (email.value !== '' || email.value !== 'abobus@gmail.com') {
      incorrectMail();
    }

    if (password.value === '') {
      errorPass();
    } else if (password.value !== '' && password.value !== '123') {
      incorrectPass();
    }

    if (email.value === 'abobus@gmail.com' && password.value === '123') {
      enter();
    }
  });

  document
    .getElementById('cancel-button')
    .addEventListener('click', function () {
      email.value = '';
      password.value = '';
      email.classList.remove('bg-danger', 'bg-warning', 'text-white');
      password.classList.remove('bg-danger', 'bg-warning', 'text-white');
      mailError.textContent = '';
      passwordError.textContent = '';
    });
});
