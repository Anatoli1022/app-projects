const num = document.querySelector('.number');
const buttonUp = document.querySelector('.number-up');
const buttonDown = document.querySelector('.number-down');
let numbers = 0;
num.textContent = numbers;
buttonUp.addEventListener('click', () => {
  numbers += 1;
  console.log(numbers);
  num.textContent = numbers;
});
buttonDown.addEventListener('click', () => {
  numbers -= 1;
  console.log(numbers);
  num.textContent = numbers;
});
