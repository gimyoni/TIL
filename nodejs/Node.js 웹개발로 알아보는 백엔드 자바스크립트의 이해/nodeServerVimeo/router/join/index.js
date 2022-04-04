var express = require('express');
var app = express()
var router = express.Router();
var path = require('path')
var mysql = require('mysql');
const passport = require('passport');
var passport = require('passport')
var localStrategy = require('passport-local').Strategy;


// DATABASE SETTING
var connection = mysql.createConnection({
	host : 'localhost',
	post : 3306,
	password : '1234',
	database : 'jsman'
})

connection.connect()

// Router !!
router.get('/', function(req,res){
    console.log('get join url');
    res.render('join.ejs');
})

passport.use('local-join', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
    }, function(req, email, password, done){
        console.log('local-join call back called');
    }
});

// router.post('/', function(req,res){
//     var body = req.body;
//     var email = body.email;
//     var name = body.name;
//     var passwd = body.password;

//     var sql = { email : email, name : name, pw : passwd};
//     var query = connection.query('insert into user set ?', sql, function(err, rows){
//         if(err) { throw err; }
//         else res.render('welcome.ejs', {'name':name, 'id': rows.insertedId});
//     })
// })

module.exports = router;