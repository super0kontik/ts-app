
import express = require("express");
//import * as routes from './routes/user'
import session =require('express-session')
import router  from './routes/user'
import path = require('path');
const passport = require('passport')
let bodyParser = require('body-parser');
//import FileStore = require('session-file-store')(session);
// Creates and configures an ExpressJS web server.
class App {
    // ref to Express instance
    public app: express.Application;
    //Run configuration methods on the Express instance.
    constructor() {
        this.app = express();
        this.config();
        this.middleware();
        this.routes();

    }

    private config():void{

        this.app.use(session({
            secret: 'keyboard cat',
            resave: false,
            saveUninitialized: false
        }))
        this.app.use(passport.initialize());
        this.app.use(passport.session());

        this.app.use(express.static(path.join(__dirname, "public")));
        this.app.set("views", path.join(__dirname, "views"));
        this.app.set("view engine", "ejs");
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    // Configure Express middleware.
    private middleware(): void {
    }

    // Configure API endpoints.
    private routes(): void {
        this.app.use('/',router)

    }
}
export default new App().app;