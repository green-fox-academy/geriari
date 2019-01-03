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


app.get('/a/:alias', (req, res) => {
  const sqlQueryHitCount = `UPDATE urls SET hitCount = hitCount + 1 WHERE alias = ?;`;
  conn.query(sqlQueryHitCount, [req.params.alias], (err, data) => {
    if (err) {
      res.status(404);
    } else {
      console.log(data); //csak egy OKPacketet kapok vissza, még ki kell szedni az url-t
      res.status(200);
      // If the alias exists it should increment the hit count and redirect to the URL 
    }
  });
});

app.get('/api/links', (req, res) => {
  const sqlQuery = 'SELECT id, url, alias, hitCount FROM urls;';
  conn.query(sqlQuery, (err, rows) => {
    if (err) {
      res.status(400);
    } else {
      res.json(rows);
    }
  });
});

app.delete('/api/links/:id', (req, res) => {
// The secret code should be in the request's body in JSON format
// If it doesn't exists respond with 404 status code
// If it exists but the provided secret code doesn't match respond with 403 status code
// If it exists and the provided secret code matches delete the entry from the database and respond with 204 status code
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
