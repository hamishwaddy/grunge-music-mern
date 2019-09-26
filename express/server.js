const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

const port = process.env.PORT || 3000;

const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const albumRoutes = require('./routes/api/albumroutes');
const artistRoutes = require('./routes/api/artistroutes');
const userRoutes = require('./routes/api/userroutes');

app.use(cors())
app.use(bodyparser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api/albums', albumRoutes);
app.use('/api/artists', artistRoutes);
app.use('/api/users', userRoutes);

const db = require('./config/keys').MONGO_ATLAS_URL;

mongoose.connect(db, { useNewUrlParser: true })
  .then(function () {
    console.log('MongoDB connected...');
  })
  .catch(function (err) {
    console.log(err)
  });

app.get('/', (req, res) => {
  res.json({ reply: 'Route for HOME path.' });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
