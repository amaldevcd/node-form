const express = require('express');
const bodyparser = require('body-parser');
const multer = require('multer')

var upload = multer();
var app = express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('base')
})

app.listen(3000,()=>{console.log("Live...");});