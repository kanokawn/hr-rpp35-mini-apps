const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(express.static('client'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log('get request');
  res.end();
})

app.post('/', (req, res) => {
  console.log('post request');
  console.log(req.body);
  res.end();
})

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});