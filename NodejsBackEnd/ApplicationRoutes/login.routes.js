'use strict'

const express = require('express');
const router =  express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Controller = require('../ApplicationControllers/userController');



passport.use(new LocalStrategy(
    function(username, password, done) {
        Controller.getuserByuserName(username , function (err , user) {
            if (err) throw err;
            if (!user) {
                return done(null, false, {message: 'Unknown User'});
            }
            console.log("done2")


            Controller.comparePassword(password, user.password, function (err, isMatch) {
                if (err) throw err;
                if (isMatch) {
                    return done(null, user);
                } else {
                    return done(null, false, {message: 'invalid password'});
                }
            });
        });
    }));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    Controller.getUserById(id, function(err, user) {
        done(err, user);
    });
});

router.post('/', passport.authenticate('local'), function(req, res) {
        res.status(200).send({message:'logged in'});

});


module.exports = router;