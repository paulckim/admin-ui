const express = require('express');
const app = express();
const {authenticateRoute} = require('./routes/post/authenticate');
app.use('/', authenticateRoute);
const port = 8081;

const server = app.listen(port, () => {
  console.log(`Started User Session Service on port=${port}`);
});

server.on('error', err => {
  console.error('Unexpected termination of User Session Service', err);
  process.exit(-1);
});
