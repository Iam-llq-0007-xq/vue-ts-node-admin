const express = require('express');
const _ = require('lodash');
const path = require('path');

const app = express();
const port = process.env.SERVER_PORT || 8003;
app.use(express.static('dist'));

app.listen(port, () => {
  console.log('server running on port: ', port);
});

