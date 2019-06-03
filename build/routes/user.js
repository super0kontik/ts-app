"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const passport = require('passport');
require("../config/passport-config");
class userRouter {
    constructor() {
        this.router = express.Router();
        this.routing();
    }
    routing() {
        this.router.get('/', (req, res) => {
            res.render('login', { message: '' });
        });
        this.router.post('/login', passport.authenticate('local', { failureRedirect: '/' }), (req, res) => {
            res.redirect('/user');
        });
        this.router.get('/user', (req, res) => {
            console.log(req['session']['passport']['user']);
            res.render('user', { user: req['session']['passport']['user']['name'] });
        });
    }
}
exports.default = new userRouter().router;
