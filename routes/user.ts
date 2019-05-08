import express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) =>{
    res.render('login');
});

router.post('/login',(req,res,next)=>{
    console.log(req.body)
})


export = router;
