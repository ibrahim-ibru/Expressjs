import mongoose from "mongoose";


const todoSchema=new mongoose.Schema({
    task:{type:String},
    isCompleted:{type:Boolean}
})

export default mongoose.Todos||mongoose.model("Todos",todoSchema)