var express = require('express');
var router = express.Router();
var users = require('../controllers/UsersController');

/* GET users listing. */

/** */
//router.get('/', users.index);
router.get('/view/:username', users.view);
//router.get('/edit/:username', users.edit);
//router.get('/delete/:username', users.delete);
//router.get('/add/:username', users.add);

module.exports = router;
