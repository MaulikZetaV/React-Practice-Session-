import React from 'react'
import { useState, useEffect } from 'react'


function FetchUserData() {
const[users,setUsers] = useState([]);
const[button,setButton]=useState(false);
  
useEffect (()=>{
    if (button===true){
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setUsers(data));
    }
},[button]);

return (
    <div>
        <h4>Task 1 : Fetching Data From API</h4>
        <p>Tried to implement fetch data on clicking button</p>
        <br/>
        <button onClick={()=>setButton(prev=>!prev)}>Fetch Data</button>
        <ul>
            {users.map(user=>(
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
  )
}


export default FetchUserData;
 


