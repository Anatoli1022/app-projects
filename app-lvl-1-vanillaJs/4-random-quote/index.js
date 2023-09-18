function getRandomQuote() {
  fetch('http://localhost:8080/api/quotes', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const quotes = data.quotes;
      console.log(quotes);
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];
      console.log(randomQuote);
      document.getElementById('quote').textContent = randomQuote.body;
      document.getElementById('author').textContent = `- ${randomQuote.author}`;
    });
}

const button = document.getElementById('generate');
button.addEventListener('click', getRandomQuote);

// function getRandomQuote() {
//   fetch('http://localhost:8080/api/quotes', {
//     method: 'GET',
//     headers: {
//       'Content-type': 'application/json',
//       Authorization: 'Token token="875c7a08f181cc643d5eccd14c983ad5"',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       const quotes = data.quotes;
//       console.log(quotes);
//       const randomIndex = Math.floor(Math.random() * quotes.length);
//       const randomQuote = quotes[randomIndex];
//       console.log(randomQuote);
//       document.getElementById('quote').textContent = randomQuote.body;
//       document.getElementById('author').textContent = `- ${randomQuote.author}`;
//     });
// }

// const button = document.getElementById('generate');
// button.addEventListener('click', getRandomQuote);
