'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');
const PORT = 3000;

app.use(express.json());

const conn = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'quiz',
  port: 3306
});

app.use('/static', express.static('static'));

app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname, 'game.html'));
});

//DONE (the JSON format is a bit different, but contains all the data)
app.get('/api/game', (req, res) => {
  const sqlQuery = 'SELECT * FROM questions JOIN answers ON questions.id = answers.question_id;';
  conn.query(sqlQuery, (err, rows) => {
    if (err) {
      console.log(err.message);
      res.status(500).join({
        error: 'Internal server error'
      });
      return;
    }
    const questionNumber = Math.floor(Math.random() * (rows.length / 4));
    res.json(rows.slice(questionNumber * 4, questionNumber * 4 + 4));
  });
});

//DONE
app.get('/api/questions', (req, res) => {
  const sqlQuery = 'SELECT * FROM questions;';
  conn.query(sqlQuery, (err, rows) => {
    if (err) {
      console.log(err.message);
      res.status(500).join({
        error: 'Internal server error'
      });
      return;
    }
    res.json(rows);
  });
});

app.post('/api/questions', (req, res) => {
// If you fill the form
// And click on the submit button
// It should add a new question and its answers
});

app.delete('/api/questions/:id', (req, res) => {
  // If you click on the delete link (which is next to the question)
  // It should delete the question and its answers by id
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
