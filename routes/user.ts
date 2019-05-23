import express = require('express');
import { default as User } from "../models/users";
const passport = require('passport')
import "../config/passport-config";

class userRouter {

    public router : express.Router;

    constructor(){
        this.router = express.Router()
        this.routing()
    }

    private routing() {
        this.router.get('/', (req, res) => {
            //console.log(req['session'])
            res.render('login',{message:''});
        });

        this.router.post('/login', passport.authenticate('local', { failureRedirect: '/' }),(req,res)=>{
            res.redirect('/user')
        })

        this.router.get('/user',(req,res)=>{
            console.log(req['session']['passport']['user'])
            res.render('user',{user:req['session']['passport']['user']['name']})
        })
    }
}
export default new userRouter().router;
