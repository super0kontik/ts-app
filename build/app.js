"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const session = require("express-session");
const user_1 = __importDefault(require("./routes/user"));
const path = require("path");
const passport = require('passport');
const bodyParser = require('body-parser');
class App {
    constructor() {
        this.app = express();
        this.config();
        this.middleware();
        this.routes();
    }
    ;
    config() {
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
    middleware() {
    }
    routes() {
        this.app.use('/', user_1.default);
    }
}
exports.default = new App().app;
