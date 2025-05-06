const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Minu lemmikmagustoit: Napoleonikook');
});

app.listen(port, () => {
  console.log(`Server töötab http://localhost:${port}`);
});
