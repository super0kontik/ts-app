import express = require('express');
const passport = require('passport');
import "../config/passport-config";


class userRouter {

    public router : express.Router;

    constructor(){
        this.router = express.Router();
        this.routing()
    }

    private routing() {
        this.router.get('/', (req, res) => {
            res.render('login',{message:''});
        });

        this.router.post('/login', passport.authenticate('local', { failureRedirect: '/' }),(req,res)=>{
            res.redirect('/user');
        });

        this.router.get('/user',(req,res)=>{
            console.log(req['session']['passport']['user']);
            res.render('user',{user:req['session']['passport']['user']['name']});
        });
    }
}
export default new userRouter().router;
