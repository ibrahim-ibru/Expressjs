const express=require("express")
const app= express()

PORT=3000

app.get("/",(req,res)=>{
    res.send("HELLO WORLD")
})

app.listen(PORT,()=>{
    console.log("server created");
})