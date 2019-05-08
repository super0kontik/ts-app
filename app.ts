/*import express = require('express');
import users = require('./routes/user');
import path = require('path');

// Create a new express application instance
const app: express.Application = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }));
app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.use('/',users)


app.listen(5000, function () {
    console.log('Example app listening on port 5000!');
});*/


import express = require('express');
import userRoute = require('./routes/user')

class App {
    constructor(){}

    app: express.Application;

    listen(){
        this.app.listen('5000',()=>{
            console.log('app: ',this.app)
        })
    }

    public getServer() {
        return this.app;
    }

    app.use('/' , userRoute);


}
const startApp = new App();
startApp.listen();
console.log(startApp)