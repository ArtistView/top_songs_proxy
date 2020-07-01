const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

let app = express();
let port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')));

const status = app.get('/', function (req, res) {
  console.log('getting response')
  res.status(200).send("Connected")
  res.end()
});

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
