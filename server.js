require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;


const db = require('./database/index.js')

const dbHelpers = require ('./database/dbHelper.js')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/hello', (req, res) => {
  dbHelpers.findAllCandidates().then((candidates) => {
    console.log(candidates);
  })

  res.send({ express: 'Hello From Express' });
});

app.post('/user', (req, res) => {
  dbHelpers.createUser(req, res)
})

app.get('/allUsers', async (req, res) => {
  let userData = await dbHelpers.findAllUsers()
  res.send(userData)
})

app.listen(port, () => console.log(`Listening on port ${port}`));