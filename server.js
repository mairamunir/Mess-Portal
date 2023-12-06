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
//delete student
app.post('/DeleteStudent', async(req, res)=>{
  const {username}=req.body;
  const query = 'DELETE FROM users WHERE username = ?';
   db.query(query, [username], (err, result) => {
     if (err) {
       console.error('Error deleting student:', err);
       res.status(500).send('Error deleting student');
     } else if (checkResult.length === 0) {
      //Student not found, return a 404 status and error message
     res.status(404).send('Student not found'); }
     else {
       console.log('Student deleted:', result);
       res.status(200).send('Student deleted successfully');
     }
   });

 });



//view student details(admin)
app.get('/users', (req, res) => {
  const sql = 'SELECT username, role FROM users WHERE role=\'student\'';
  db.query(sql, (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Error fetching student details' });
    } else {
      res.status(200).json(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});