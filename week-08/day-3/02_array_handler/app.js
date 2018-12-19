const express = require('express');

const app = express();
const PORT = 8080;

app.use(express.json());

app.post('/arrays', (req, res) => {
  const what = req.body.what;
  const numbers = req.body.numbers;
  if (!numbers.some(isNaN)) {
    switch (what) {
      case 'sum': res.json({
        "result": sumMaker(numbers)
      });
      break;
      case 'multiply': res.json({
        "result": multiplier(numbers)
      });
      break;
      case 'double': res.json({
        "result": doubler(numbers)
      });
      break;
      default: res.json({
        "error": "Please provide what to do with the numbers!"
      });
    }
  } else {
    res.json({
      "error": `Please provide numbers to ${what}!`
    });
  }
});

const sumMaker = (numbers) => {
  let result = 0;
  numbers.forEach(number => {
    result = result + number;
  });
  return result;
}

const multiplier = (numbers) => {
  let result = 1;
  numbers.forEach(number => {
    result = result * number;
  });
  return result;
}

const doubler = (numbers) => {
  let result = [];
  result = numbers.map(number => number * 2);
  return result;
}

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
