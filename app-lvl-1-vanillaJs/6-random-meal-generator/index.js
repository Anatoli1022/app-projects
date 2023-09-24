const button = document.querySelector('.button-random');
const content = document.querySelector('.content');
button.addEventListener('click', () => {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((data) => data.json())
    .then((data) => cardMeal(data.meals[0]));

  const cardMeal = (meal) => {
    const ingredients = [];

    for (let i = 1; 1 <= 20; i++) {
      if (meal[`strIngredient${i}`] !== '') {
        ingredients.push(meal[`strIngredient${i}`]);
      } else {
        break;
      }
    }
    console.log(meal);
    console.log(ingredients);

    const content = document.querySelector('.main');

    const newInnerHtml = ` <div class="content">
    <div>
      <img src="${meal.strMealThumb}" alt="" class="image" />
      <span class="area">Area : ${meal.strArea}</span>
      <span class="category">Category : ${meal.strCategory}</span>
    </div>
    <div>
      <h2 class="title-meal">${meal.strMeal}</h2>
      <p class="text-instruction">${meal.strInstructions}</p>
    </div>
  </div>
  <div class='ingredients-block'>
    <h3>Ingredients:</h3>
    <ul class="li">
      ${ingredients
        .map(
          (ingredient) => `
      <li>${ingredient}</li>
      `
        )
        .join('')}
    </ul>
  </div>
  
  ${
    meal.strYoutube
      ? `
		<div class="video-block">
			<h4>Video Recipe</h4>
			<div class="videoWrapper">
				<iframe 
				src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
				</iframe>
			</div>
		</div>`
      : ''
  }
  `;

    content.innerHTML = newInnerHtml;
  };
});
