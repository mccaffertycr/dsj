require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/dsjdev', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Successfully connected to Mongo.')
  })
  .catch(err => console.log(err));

mongoose.Promise = global.Promise;

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes');

app.use(routes);

if (process.env.NODE_ENV === 'production') {
  // serve static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // route all requests to React client
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`api server listening on port ${PORT}`));
