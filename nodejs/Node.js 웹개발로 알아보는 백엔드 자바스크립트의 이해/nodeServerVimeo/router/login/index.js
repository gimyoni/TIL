var express = require('express');
var app = express()
var router = express.Router();
var path = require('path')
var mysql = require('mysql');
const passport = require('passport');
var passport = require('passport');
const { CLIENT_FOUND_ROWS } = require('mysql/lib/protocol/constants/client');
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
    var msg;
    var errMsg = req.flash('error')
    if(errMsg) msg = errMsg;
    res.render('login.ejs', {'message' : msg});
})

//passport.serialize
passport.serializeUser(function(user, done){
    console.log('passport session save : ', user.id)
    done(null, user.id)
})

passport.deserializeUser(function(id, done){
    console.log('passport session get id : ', id)
    done(null, id)
})

passport.use('local-login', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
    }, function(req, email, password, done){
        var query = connection.query('select * from user where email=?', [email], function(err, row){
            if(err) return done(err);

            if(rows.length){
                return done(null, false, {'email': email, 'id': rows[0].UID})
            }else{
                return done(null, false, {'message' : 'your login info is not found >.<'});
            }
        })
    }
));

router.post('/', function(req, res, next) {
    passport.authenticate('local-login', function(err, user, info){
        if(err) res.status(500).json(err);
        if(!user) return res.status(401).json(info.message);

        req.logIn(user, function(err){
            if(err) { return next(err); }
            return res.json(user);
        });
        
    })(req, res, next);
})

module.exports = router;