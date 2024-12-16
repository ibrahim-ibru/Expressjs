import todoSchema from "../model/todo.model.js"

export async function addTodo(req,res){
    console.log(req.body);

    const{task}=req.body

    await todoSchema.create({task,isCompleted:false})
    .then(()=>{
        // add todo to database
        res.status(201).send({msg:"successfully added"})
    })
    .catch((error)=>{
        req.status(400).send(error);
    })
}

