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
        if(res.status==201){
            const data=await res.json()
            str=``
            data.map((dt)=>{
                str+=`
                <table>
                <tr>
                    <td style="width: 68%;"><input type="text" value="${dt.task}" id="inptask"></td>
                    <td><button onclick="isCompleted('${dt._id}')">Done</button>
                    <button onclick="">Edit</button>
                    <button onclick="">Save</button>
                    <button onclick="">Delete</button></td>
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

// getTodos()