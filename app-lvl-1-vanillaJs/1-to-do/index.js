const input = document.getElementById('input');
const list = document.getElementById('list');

list.onclick = function (e) {
  const btn = e.target.closest('.btn');
  if (!btn) {
    return;
  }

  btn.parentElement.remove();
};

input.addEventListener('keypress', function (event) {
  if (event.key === 'Enter' && input.value !== '') {
    const li = document.createElement('li');

    let span = document.createElement('span');
    span.textContent = input.value;

    const inputCheckbox = document.createElement('input');
    inputCheckbox.setAttribute('type', 'checkbox');
    inputCheckbox.classList.add('form-check-input', 'me-1');

    const img = document.createElement('img');
    img.src = './trash.svg';

    const button = document.createElement('button');
    button.classList.add('btn', 'btn-outline-primary');
    button.appendChild(img);

    li.classList.add(
      'list-group-item',
      'd-flex',
      'justify-content-between',
      'align-items-center'
    );
    li.appendChild(inputCheckbox);
    li.appendChild(span);
    li.appendChild(button);
    list.appendChild(li);

    input.value = '';
  }
});
