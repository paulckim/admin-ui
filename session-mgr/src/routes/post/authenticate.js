'use strict';

const {Router} = require('express');
const router = Router();
const statuses = require('statuses');

const VALID_USERNAME = 'admin';
const VALID_PASSWORD = 'password';
const isAuthenticated = ({username, password}) => VALID_USERNAME === username && VALID_PASSWORD === password;

const authenticateRoute = router.post('/authenticate', (req, res) => {
  let reqStr = '';
  req.on('error', err => {
    console.error(err);
    res.sendStatus(500);
  });
  req.on('data', chunk => reqStr += chunk);
  req.on('end', () => {
    res.on('error', err => {
      console.error(err);
      res.sendStatus(500);
    });
    try {
      const resBody = JSON.parse(reqStr);
      const statusCode = isAuthenticated(resBody) 
        ? statuses('ok') : statuses('forbidden');
      res.status(statusCode).end();
    } catch(err) {
      res.status(statuses('bad request')).end();
    }
  });
});

module.exports = {
  authenticateRoute
};