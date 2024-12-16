import express from "express"
import mongoose from "mongoose"
import todoSchema from "./model/todo.model.js"
import env from "dotenv"
import connection from "./connectio.js"
import router from "./router.js"

env.config()

const app=express()
app.use(express.json())
app.use("/api",router)

app.get("/gettodos",async(req,res)=>{
    try {
        const todos= await todoSchema.find()
        res.status(200).send(todos)
    } catch (error) {
        res.status(500).send(error)
        
    }
})

// is completed
app.put("/isCompleted/:_id",async(req,res)=>{
    const {_id}=req.params
    const {isCompleted}=req.body
    await todoSchema.updateOne({_id},{$set:{isCompleted:!isCompleted}})
    .then(()=>{
        res.status(201).send({msg:"successfully updated"})
    })
    .catch((error)=>{
        res.status(500).send(error)
    })
})

// delete

app.delete("/delete/:_id",async(req,res)=>{
    const {_id}=req.params
    await todoSchema.deleteOne({_id})
    .then(()=>{
        res.status(200).send({msg:"successfully deleted"})
    })
    .catch((error)=>{
        res.status(500).send(error)
    })
})



connection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server Created");
    })
})
.catch((error)=>{console.log(error);})
