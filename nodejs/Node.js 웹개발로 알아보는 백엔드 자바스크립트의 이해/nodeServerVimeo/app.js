var express = require('express');
var app = express()
var bodyParser = require('body-parser')
var router = require('./router/index')
var passport = require('passport')
var localStrategy = require('passport-local').Strategy;
var session = require('express-session')
var flash = require('connect-flash')

app.listen(3000, function() {
	console.log("start! express server on port 3000");
});``

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true})) // json이 아닌 형태일 때 urlencoded를 사용함
app.set('view engine', 'ejs')

app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

app.use(router)