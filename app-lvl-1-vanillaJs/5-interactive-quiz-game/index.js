const apiUrl = 'https://opentdb.com/api.php?amount=10'; // Здесь 10 - количество вопросов
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const feedbackElement = document.getElementById('feedback');
const correctAnswers = document.getElementById('correct-answers');

let right = 0;
let currentQuestionIndex = 0;
let questions = [];

function fetchQuestions() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      questions = data.results;
      displayQuestions();
    })
    .catch((error) => console.error('Error when receiving questions:', error));
}

function displayQuestions() {
  const currentQuestion = questions[currentQuestionIndex];
  console.log(currentQuestion);
  questionElement.textContent = decodeHtmlEntities(currentQuestion.question);
  choicesElement.innerHTML = '';
  const choices = [
    ...currentQuestion.incorrect_answers,
    currentQuestion.correct_answer,
  ];
  shuffleArray(choices);

  choices.forEach((choice) => {
    const choiceItem = document.createElement('li');
    choiceItem.textContent = decodeHtmlEntities(choice);
    choiceItem.addEventListener('click', () => checkAnswer(choice));
    choicesElement.appendChild(choiceItem);
  });

  correctAnswers.textContent = `Correct answers ${right}/10`;
}

function checkAnswer(userChoice) {
  const currentQuestion = questions[currentQuestionIndex];

  if (userChoice === currentQuestion.correct_answer) {
    feedbackElement.textContent = 'The answer is correct';
    right++;
  } else {
    feedbackElement.textContent = `Wrong. Right answer: ${currentQuestion.correct_answer}`;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestions();
  } else {
    feedbackElement.textContent = 'Game  over!';
    submitButton.disabled = true;
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function decodeHtmlEntities(text) {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
}

fetchQuestions();
