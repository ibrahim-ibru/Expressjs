const express=require("express")
var bodyParser = require('body-parser')
app=express()
// app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.post("/",(req,res)=>{
    console.log(req.body);
    res.send("HOME")
})

app.listen(3000,()=>{
    console.log("server created");
})
