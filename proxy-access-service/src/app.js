/**
 * 
 * route: ANY /*
 *  method=*
 *  {session-id}
 *    conditions:
 *      if has session-id is true:
 *        1) validate session-id
 *        2) forward to route (200, 404, 400, etc.)
 *      else:
 *        redirect to /login
 * 
 * route: EXACT /login
 *  method=GET
 *    return static resources
 */

const express = require('express');
const app = express();
const {redirectPostRoute} = require('./routes/post/redirect');
app.use('/', redirectPostRoute);
const port = 8080;

const server = app.listen(port, () => {
  console.log(`Started Proxy Access Service on port=${port}`);
});

server.on('error', err => {
  console.error('Unexpected termination of Proxy Access Service', err);
  process.exit(-1);
});
