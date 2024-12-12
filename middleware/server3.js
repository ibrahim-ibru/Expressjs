const express=require("express")
const bodyParser=require("body-parser")
const app=express()

app.use(bodyParser.json())

app.post("/",(req,res)=>{
    console.log(req.body);
    res.send("Done")

})


app.listen(3000,()=>{
    console.log("server created");
})
