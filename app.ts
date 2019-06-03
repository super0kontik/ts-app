import express = require("express");
import session =require('express-session')
import router  from './routes/user'
import path = require('path');
const passport = require('passport');
const bodyParser = require('body-parser');

class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.middleware();
        this.routes();

    };

    private config():void{

        this.app.use(session({
            secret: 'keyboard cat',
            resave: false,
            saveUninitialized: false
        }));
        this.app.use(passport.initialize());
        this.app.use(passport.session());
        this.app.use(express.static(path.join(__dirname, "public")));
        this.app.set("views", path.join(__dirname, "views"));
        this.app.set("view engine", "ejs");
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }


    private middleware(): void {

    }

    private routes(): void {
        this.app.use('/',router);
    }
}
export default new App().app;