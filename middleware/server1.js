const express = require("express")

const app=express()

app.use(express.json())
app.post("/",token,(req,res)=>{
    console.log("end POINT");
    console.log(req.body);
    res.send("HOME")
})

app.listen(3000,()=>{
    console.log("server created");
})

function token(req,res,next){
    console.log("middle");
    console.log(req.body);
    next()
}