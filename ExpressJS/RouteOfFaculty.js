const express = require('exprss');
const router = express.Router();

router.use('/' , (req,res,next)=>{
    console.log("Middleware called")
    next();
})

router.get('/first',(req,res)=>{
    res.send("Fac 1");
});

router.get('/second',(req,res)=>{
    res.send("Fac 2");
});

router.get('/third',(req,res)=>{
    res.send("Fac 3");
});

module.exports = router;