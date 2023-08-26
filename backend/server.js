const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'token_generator',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to the database');
  }
});

app.post('/api/submit-survey', (req, res) => {
  const { name, phone, email, company, designation } = req.body;
  const token = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit token

  const sql = 'INSERT INTO users (name, phone, email, company, designation, token) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(sql, [name, phone, email, company, designation, token], (err) => {
    if (err) {
      console.error('Error inserting survey:', err);
      res.status(500).json({ message: 'Error submitting survey' });
    } else {
      res.json({ token });
    }
  });
});

app.get('/login', (req, res) => {
  const query = 'SELECT * FROM survey_users';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Database select error:', err);
      res.status(500).send('Error fetching surveys');
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
