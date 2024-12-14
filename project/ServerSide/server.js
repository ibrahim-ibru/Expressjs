import express from "express"
import mongoose from "mongoose"
import todoSchema from "./model/todo.model.js"

const PORT=3000
const app=express()
app.use(express.json())
app.use(express.static("../ClientSide"))

app.post("/addtodo",async (req,res)=>{
    console.log(req.body);
    const{task}=req.body
    console.log(task);
    

    await todoSchema.create({task,isCompleted:false})
    .then(()=>{
        // add todo to database
        res.status(201).send({msg:"successfully added"})
    })
    .catch((error)=>{
        req.status(400).send(error);
    })
})

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



mongoose.connect("mongodb://127.0.0.1:27017")
.then(()=>{
    console.log("database Connected successfully");
    app.listen(3000,()=>{
        console.log("server Created");
    })
})
.catch((error)=>{console.log(error);})
