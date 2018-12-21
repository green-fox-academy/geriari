'use strict'

const mysql = require('mysql');
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.json());
app.use('/static', express.static('static'));

// CONFIGURATION
const conn = mysql.createConnection({
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'bookstore'
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/books', (req, res) => {
  const sqlQuery = 'SELECT book_name FROM book_mast;';
  conn.query(sqlQuery, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    res.json(data);
  });
});

app.get('/booksfulldata', (req, res) => {
  const sqlQuery = 'SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast, author, category, publisher WHERE book_mast.aut_id = author.aut_id AND book_mast.cate_id = category.cate_id AND book_mast.pub_id = publisher.pub_id;';
  conn.query(sqlQuery, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    res.json(data);
  });
});

// SERVER START
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
}); 
