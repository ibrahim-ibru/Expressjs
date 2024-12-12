const express=require("express")

const app= express()

app.use(express.json())

app.get("/data",(req,res)=>{
    // const {id}=req.params
    // console.log(id);

    res.send(req.query)
})

app.listen(3000,()=>{
    console.log("server created");
})