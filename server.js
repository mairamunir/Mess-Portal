const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 3005;

app.use(cors()); // Use cors middleware
app.use(bodyParser.json());

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', //root
  password: 'draconian321', //Dawood@7515
  database: 'mydata',
});

db.connect();

// API endpoint to handle login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check the username and password against the database
  const query = `SELECT * FROM users WHERE username = ? AND password = ?`;

  db.query(query, [username, password], (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      res.json({ success: true, message: 'Login successful', userDetails: results[0] });
    } else {
      res.json({ success: false, message: 'Login failed' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});