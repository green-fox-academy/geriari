let express = require('express');
let app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    title: `Welcome back ${req.query.name || 'Guest'}!`,
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});
