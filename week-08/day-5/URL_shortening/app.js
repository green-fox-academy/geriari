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

//todo: why is this not working???
app.get('/a/:alias', (req, res) => {
  const sqlQueryHitCount = `UPDATE urls SET hitCount = hitCount + 1 WHERE alias = ?;`;
  conn.query(sqlQueryHitCount, [req.params.alias], (err, data) => {
    if (err) {
      res.status(404);
    } else {
      const sqlQueryUrl = `SELECT url FROM urls WHERE alias = ?;`;
      conn.query(sqlQueryUrl, [req.params.alias], (err, data) => {
        res.status(200).json(data);
      });
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
  const id = req.params.id;
  const { secretCode } = req.body;
  conn.query('SELECT * FROM urls;', (err, rows) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    if (rows.find(data => data.id === id) && rows.find(data => data.secretCode === secretCode)) {
      conn.query(`DELETE FROM urls WHERE id = ${id};`, (err, data) => {
        if (err) {
          console.log(err.message);
          res.status(500).json({
            error: 'Internal server error'
          });
          return;
        }
        res.status(204).json({
          message: 'Succesfully deleted'
        });
      });
    } else if (rows.find(data => data.id === id) && rows.find(data => data.secretCode !== secretCode)) {
      res.status(403).json({
        message: 'wrong secretCode' 
      });
    } else {
      res.status(404).json({
        error: "id doesn't exist"
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
