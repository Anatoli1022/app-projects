const button = document.querySelector('.button');
let textLength = document.querySelector('.text-length');
let abobus = document.querySelector('.abobus');

button.addEventListener('click', function () {
  const text = document.querySelector('.text').value;
  abobus.textContent = text;
  const split = text.trim().split(' ');
  textLength.textContent = `${split.length}`;
});
// document.querySelector('.button').addEventListener('click', function () {
//     const text = document.querySelector('.text').value.trim().split(' ');
//     document.querySelector('.abobus').textContent = text;
//     document.querySelector('.text-length').textContent = `${text.length}`;
//   });
