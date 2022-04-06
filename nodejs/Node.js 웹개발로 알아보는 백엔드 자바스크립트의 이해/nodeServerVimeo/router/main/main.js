var express = require('express');
var app = express()
var router = express.Router();
var path = require('path')
var main = require('./router/main')
var email = require('./router/email')


router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../../public/main.html'))
});

module.exports = router;