var express = require('express');
var router = express.Router();
var users = require('../controllers/UsersController');
var auth = require('../controllers/AuthController');

/* GET users listing. */
router.get('/login', auth.login);
router.post('/login', auth.authenticate);
router.get('/logout', auth.logout);
/** */
//router.get('/', users.index);
router.get('/view/:username', auth.isAuthenticated, users.view);
//router.get('/edit/:username', users.edit);
//router.get('/delete/:username', users.delete);
//router.get('/add/:username', users.add);

module.exports = router;
