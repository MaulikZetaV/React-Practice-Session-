import React from 'react'
import { useState} from 'react'


function NewUser() {
const[name,setName] = useState("");
const[email,setEmail]=useState("");

const addNewUser = () =>{
    fetch("https://jsonplaceholder.typicode.com/users",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            name: name ,
            email:email ,
        }),
    })
    .then(res=>res.json())
    .then(data=>{
        console.log('User created:', data);   
    })
};
  return (
    <div>
        <h4>Task 1:Creating Data</h4>
        <label htmlFor='name'>Name:</label>
        <input
        type='text'
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
        <br/>
        <label htmlFor='email'>Email:</label>
        <input
        type='email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <br/>
        <button onClick={addNewUser}>Add new user</button>
        <br/>
        
    </div>
  )
}


export default NewUser;
