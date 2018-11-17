var express = require('express');
var router = express.Router();
var auth = require('../controllers/AuthController');

/* GET users listing. */

/** */
//router.get('/', users.index);
router.get('/', auth.login);
router.post('/', auth.authenticate);

module.exports = router;