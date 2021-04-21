const express = require('express');

const port = 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('Hola mundo');
});

app.listen(port, () => {
  console.log(`Express runnig at port: ${port}`);
});
