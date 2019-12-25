'use strict';

const {Router} = require('express');
const router = Router();

const REDIRECT_URI = 'http://localhost:8081';

const redirectPostRoute = router.post('*', (req, res) => {
  res.redirect(307, `${REDIRECT_URI}${req.originalUrl}`);
});

module.exports = {
  redirectPostRoute
};