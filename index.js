const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send({ hi: 'hello' });
});

const PORT = 5000;
app.listen(PORT);
