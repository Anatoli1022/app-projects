import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 8080;

app.use(express.static('public'));

app.get('/api/quotes', async (req, res) => {
  try {
    const response = await fetch('https://favqs.com/api/quotes/', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Token token="875c7a08f181cc643d5eccd14c983ad5"',
      },
    });
    const data = await response.json();
    res.header('Access-Control-Allow-Origin', '*'); // Это разрешает запросы от всех источников, из-за безопасности лучше ограничьте это нужными источниками

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
