var express = require('express');
var router = express.Router();
var blogs = require('../controllers/BlogController');


router.get('/view/:user_id', blogs.view);


module.exports = router;