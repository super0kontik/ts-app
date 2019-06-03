"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
const passportLocal = require("passport-local");
const User = require('../models').User;
const LocalStrategy = passportLocal.Strategy;
passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((obj, done) => {
    done(null, obj);
});
passport.use(new LocalStrategy({ usernameField: "name" }, (name, password, done) => {
    console.log('checking login');
    console.log(name + ' : ' + password);
    User.findOne({
        where: { name: name }
    })
        .then((user) => {
        console.log(user);
        if (!user) {
            console.log(`Name ${name} not found.`);
            return done(undefined, false, { message: `Name ${name} not found.` });
        }
        else {
            console.log(user);
            if (password !== user.dataValues.password) {
                return done(undefined, false, { message: "Invalid name or password." });
            }
            else {
                console.log('success');
                return done(undefined, user);
            }
        }
    });
}));
