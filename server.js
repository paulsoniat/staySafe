const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

const mongoose = require('mongoose');
//connect to your server here
mongoose.connect('mongodb://paul:ferrari3394@ds119765.mlab.com:19765/votest');
const Schema = mongoose.Schema;

const db = mongoose.connection;
db.on('error', function () {
    console.log('mongoose connection error');
});
db.once('open', function () {
    console.log('mongoose connection successfull');
});


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
