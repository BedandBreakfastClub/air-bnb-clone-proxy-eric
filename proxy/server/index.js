
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

app.get('/rooms/:listingId/', (req, res) => {
  const options = {
    root: path.join(__dirname, '..', 'public/'),
  };
  res.sendFile('index.html', options);
});

app.listen(port, () => {
  console.log(`Proxy Server listening on port ${port}`);
});
