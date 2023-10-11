const sliderContainer = document.querySelector('.slider-container');
const buttonPrev = document.querySelector('#left');
const buttonNext = document.querySelector('#right');
const activeSlide = document.querySelector('.active-slide');
let slideWidth;
const sliderLastIndex = document.querySelector('.slider-last-index');
const width = window.getComputedStyle(sliderContainer).width;
let slideIndex = 1;
let sliderLength;
activeSlide.textContent = 1;
let interval = 0;
let offset = 0;

fetch('https://jsonplaceholder.typicode.com/photos')
  .then((response) => response.json())
  .then((json) => card(json.slice(0, 10)));

function card(cards) {
  sliderLastIndex.textContent = `${cards.length}`;
  sliderLength = cards.length;
  for (let i = 0; i < cards.length; i++) {
    const divCard = document.createElement('div');
    divCard.classList.add('card');
    const img = document.createElement('img');
    img.src = cards[i].url;
    divCard.append(img);
    sliderContainer.append(divCard);
    slideWidth = divCard.offsetWidth;
  }
}

function updatingСontent() {
  activeSlide.textContent = `${slideIndex}`;
  sliderContainer.style.transform = `translateX(${offset}px)`;
}

setInterval(() => {
  if (slideWidth && offset !== -slideWidth * (sliderLength - 1)) {
    offset -= slideWidth;
    slideIndex += 1;
    updatingСontent();
  } else {
    offset = 0;
    slideIndex = 1;
    updatingСontent();
  }
}, 6000);

buttonPrev.addEventListener('click', function () {
  if (offset === 0) {
    offset = -slideWidth * (sliderLength - 1);
    slideIndex = sliderLength + 1;
  } else {
    offset += slideWidth;
  }
  slideIndex -= 1;
  updatingСontent();
});

buttonNext.addEventListener('click', function () {
  if (offset == -slideWidth * (sliderLength - 1)) {
    slideIndex = 0;
    offset = 0;
  } else {
    offset -= slideWidth;
  }

  slideIndex += 1;
  updatingСontent();
});
