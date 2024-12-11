const express=require("express")
const app=express()
const PORT=3000
const path=require("path")

app.get("/",(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,"frontend","index.html"))
})

app.get("*",(req,res)=>{
    res.send("page not found")
})

app.listen(PORT,()=>{
    console.log("server created");
})