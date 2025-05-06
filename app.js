const express = require('express');
const app = express();
const port = 3000;

app.get('/movie', (req, res) => {
  res.send('Мой любимый фильм: Побег из Шоушенка');
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
