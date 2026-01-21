import React from 'react'
import { useState } from 'react'


function UpdatingData() {
const[newName,setNewName] = useState(" ");
const[response,setResponse] = useState([]);
const[button,setButton]=useState(false);

const updatingName = () =>{
    setButton(true);

    fetch("https://jsonplaceholder.typicode.com/users/1",{
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            name:newName,
        }),
    })
    .then(res=>res.json())
    .then(data=>{
        setResponse(data);
    })
};

  return (
    <div>
        <h4>Task 4:Update User Name</h4>
        <label htmlFor='name'>Name:</label>
        <input
        type='text'
        value={newName}
        onChange={(e)=>setNewName(e.target.value)}
        />
        <button onClick={updatingName}>Update Name</button>
        <br/>
        {button && 
            <div>
          <h5>Created Post</h5>
          <p><strong>ID:</strong> {response.id}</p>
          <p><strong>Name:</strong> {response.name}</p>
          
        </div>}
    </div>
  )
}

export default UpdatingData;
