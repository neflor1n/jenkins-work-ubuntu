const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Minu lemmikmagustoit on Napoleoni kook');
});

app.listen(port, () => {
  console.log(`Rakendus töötab aadressil http://localhost:${port}`);
});
