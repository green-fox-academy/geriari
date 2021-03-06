'use strict'

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;

app.use('/assets', express.static('assets'));
app.use(bodyParser());


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  const { input } = req.query;
  if (input) {
    res.json({
      "received": input,
      "result": input * 2
    });
  } else {
    res.json({
      "error": "Please provide an input!"
    });
  }
});

app.get('/greeter', (req, res) => {
  const { name } = req.query;
  const { title } = req.query;
  if (name && title) {
    res.json({
      "welcome_message": `Oh, hi there ${name}, my dear ${title}!`
    });
  } else if (title) {
    res.json({
      "error": "Please provide a name!"
    });
  } else {
    res.json({
      "error": "Please provide a title!"
    });
  }
});

app.get('/appenda/:text', (req, res) => {
  const input = req.params.text;
  if (input) {
    res.json({
      "appended": `${input}a`
    });
  } else {
    res.status(404).send;
  }
});

app.post('/dountil/:action', (req, res) => {
  const action = req.params.action;
  const number = req.body.until;

  let result = 1;
  if (action === 'sum' && typeof number == 'number') {
    result = (1 + number) * number / 2;
    res.json({
      "result": result
    });
  } else if (action === 'factor' && typeof number == 'number') {
    for (let i = 1; i <= number; i ++) {
      result *= i;
    }
    res.json({
      "result": result
    });
  } else if (typeof number != 'number'){
    res.json({
      "error": "Please provide a number!"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
