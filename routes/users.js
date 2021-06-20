var express = require('express');
var router = express.Router();

//* HTTPS://LOCALHOST:3000/USERS/INICIO. */
router.get('/inicio', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
