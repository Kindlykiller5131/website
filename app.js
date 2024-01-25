const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

let users = [];

function saveUsers() {
  fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
    if (err) {
      console.error('Error saving users:', err);
    } else {
      console.log('Users saved successfully');
    }
  });
}

app.post('/api/register', (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
  saveUsers();
});

app.get('/api/users', (req, res) => {
  res.status(200).json(users);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});