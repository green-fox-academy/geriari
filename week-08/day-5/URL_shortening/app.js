const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');
const PORT = 3000;

app.use(express.json());

const conn = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'url_shortening',
  port: 3306
});

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/links', (req, res) => {
  const { url, alias } = req.body;
  const secretCode = Math.floor(Math.random() * 10000);
  const sqlQueryInsert = `INSERT INTO urls (url, alias, hitCount, secretCode) VALUES ('${url}', '${alias}', 0, ${secretCode});`;
  conn.query(sqlQueryInsert, (err, data) => {
    if (err) {
      res.status(400).json({
        error: 'Your alias is already in use!'
      });
      return;
    } else {
      res.status(200).json({
        "id": data.insertId, 
        "url": url,
        "alias": alias,
        "hitCount": 0,
        "secretCode": secretCode
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
