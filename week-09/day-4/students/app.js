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
  database: 'students_db',
  port: 3306
});

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/', (req, res) => {
  const { name, sex, classname, trial_exam, foundation_exam, orientation_exam, final_exam } = req.body;
  if (
    name === undefined || name === '' ||
    sex === undefined || sex === '' ||
    classname === undefined || classname === '' ||
    trial_exam === undefined || trial_exam === '' ||
    foundation_exam === undefined || foundation_exam === '' ||
    orientation_exam === undefined || orientation_exam === '' ||
    final_exam === undefined || final_exam === '') {
      res.json({
        message: 'All fields are required'
      });
    } else {
      conn.query('INSERT INTO students (name, sex, classname, trial_exam, foundation_exam, orientation_exam, final_exam) VALUES (?, ?, ?, ?, ?, ?, ?);', [name, sex, classname, trial_exam, foundation_exam, orientation_exam, final_exam], (err, rows) => {
        if (err) {
          console.log(err.message);
          res.status(500).json({
            error: 'Internal server error'
          });
          return;
        }
        res.json({
          message: 'Student succesfully added',
          id: rows.insertId
        });
      });
    }
});

app.put('/', (req, res) => {
  const { id, name, sex, classname, trial_exam, foundation_exam, orientation_exam, final_exam } = req.body;
  if (
    id === undefined || id === '' ||
    name === undefined || name === '' ||
    sex === undefined || sex === '' ||
    classname === undefined || classname === '' ||
    trial_exam === undefined || trial_exam === '' ||
    foundation_exam === undefined || foundation_exam === '' ||
    orientation_exam === undefined || orientation_exam === '' ||
    final_exam === undefined || final_exam === '') {
      res.json({
        message: 'All fields are required'
      });
    } else {
      conn.query(`INSERT INTO students (id, name, sex, classname, trial_exam, foundation_exam, orientation_exam, final_exam) VALUES (?, ?, ?, ?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE name='${name}', sex='${sex}, classname='${classname}', trial_exam='${trial_exam}', foundation_exam='${foundation_exam}', orientation_exam='${orientation_exam}', final_exam='${final_exam}';`, [id, name, sex, classname, trial_exam, foundation_exam, orientation_exam, final_exam], (err, rows) => {
        if (err) {
          console.log(err.message);
          res.status(500).json({
            error: 'Internal server error'
          });
          return;
        }
        console.log(rows);
        res.json({
          message: 'Student succesfully added',
          id: rows.insertId
        });
      });
    }
});

app.patch('/', (req, res) => {
  const keys = Object.keys(req.body);
  conn.query(`UPDATE students SET ${keys[1]} = '${req.body[keys[1]]}' WHERE ${keys[0]} = ${req.body[keys[0]]};`, (err, rows) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    res.json({
      message: 'Data modified succesfully'
    });
  });
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
