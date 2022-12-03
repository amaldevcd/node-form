const express = require('express');
const bodyparser = require('body-parser');
const multer = require('multer')
var mysql = require('mysql');

var upload = multer();
var app = express();

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sample',
});

connection.connect(function(error)
{
    if(!!error)
    {
        console.log('Error');
    }
    else
    {
        console.log('database connected');
    }
})

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('base')
})

app.post('/submit',(req,res)=>
{
    var d1 = req.body.d1;
    var d2 = req.body.d2;
    var d3 = req.body.d3;
    console.log(d1+" "+d2+" "+d3);
    res.render('data',{d1,d2,d3});
    
})

app.listen(3000,()=>{console.log("Live...");});