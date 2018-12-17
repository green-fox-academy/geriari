let express = require('express');
let app = express();
const PORT = 3000;

const todos = [
  'get up',
  'survive',
  'go back to bed',
  'get up again'
];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    todo: todos
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});
