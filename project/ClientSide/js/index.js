async function addTodo() {
    try {
        const task= document.getElementById("task").value
        const res= await fetch("http://localhost:3000/addtodo",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
                body:JSON.stringify({task})
            
        })
        console.log(res);
        
        if(res.status==201){
            const {msg}=await res.json()
            alert(msg)
            getTodos()
        }        
        else{
            alert("Not added")
        }
        
    } 
    catch (error) {
        console.log(error);
        
    }
}
async function getTodos() {
    try {
        const res=await fetch("http://localhost:3000/gettodos")
        console.log(res);
        if(res.status==200){
            const data=await res.json()
            str=``
            data.map((dt)=>{
                str+=`
                <table>
                <tr>
                    <td style="width: 68%;"><input type="text" disabled=true value="${dt.task}" id="inptask-${dt._id}"></td>
                    <td><button onclick="isCompleted('${dt._id}',${dt.isCompleted})">${dt.isCompleted?"not done":"Done"}</button>
                    <button onclick="handleEdit('${dt._id}')">Edit</button>
                    <button onclick="handleSave('${dt._id}')">Save</button>
                    <button onclick="handleDelete('${dt._id}')">Delete</button></td>
                </tr>
                
            </table>
                `
            })
            document.querySelector(".my-todos").innerHTML=str
        }
        else{
            alert("data didn't get")
        }
    } catch (error) {
        console.log(error);
        
    }
}

getTodos()

async function handleEdit(_id) {
    const task=prompt("Edit Task :")
    const res=await fetch(`http://localhost:3000/update/${_id}`,{
        method:"PUT",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({task})
    })
    if(res.status==201){
        const {msg}=await res.json()
        alert(msg)
        getTodos()
    }
}

async function handleDelete(id) {
    const res=fetch(`http://localhost:3000/delete/${id}`,{
        method:"DELETE",
        headers:{"Content-Type":"application/json"},
    })
    // console.log(res);
    if((await res).status==200){
        alert("deleted successfully")
        getTodos()
    }
    
}

async function isCompleted(_id,isCompleted) {
    console.log(isCompleted);
    
    const res=await fetch(`http://localhost:3000/isCompleted/${_id}/${isCompleted}`,{
        method:"PUT",
        headers:{"Content-Type":"application/boolean"},
        body:JSON.stringify({isCompleted})
    })
    console.log(res);
    
    if(res.status==201){
        console.log(res);
        console.log("res");
        
        // document.getElementById(`inptask-${_id}`).style.textDecoration=`${isCompleted?"line-through":"none"}`
        getTodos()
    }
    
}