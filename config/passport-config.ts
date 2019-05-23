import passport = require ("passport");
import passportLocal =require ("passport-local");
//import { Request, Response, NextFunction } from "express";
//import { default as User } from "../models/users";
const User = require('../models').User

const LocalStrategy = passportLocal.Strategy;


passport.serializeUser<any, any>((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {

        done(null, obj);

});


/**
 * Sign in using Email and Password.
 */
passport.use(new LocalStrategy( { usernameField: "name" },(name, password, done) => {
    console.log('checking login')
    console.log(name +' : '+password)
    User.findOne({
        where:
            {name: name}
    })
        .then((user: any) => {
         console.log(user)
         if (!user) {
            console.log(`Name ${name} not found.`)
            return done(undefined, false, { message: `Name ${name} not found.` });
        }else {
            console.log(user)
             if(password !== user.dataValues.password) {
                 return done(undefined, false, {message: "Invalid name or password."});
             }else {
                 console.log('success')
                 return done(undefined, user);
             }
            }});

   // });
}));

