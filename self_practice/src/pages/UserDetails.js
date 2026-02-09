import React from 'react'
import {useParams,useNavigate} from "react-router-dom";

function UserDetails() {
    const {id} = useParams();
    const navigate = useNavigate();
    const users = [
  { id: 1, name: "Aman" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Neha" }
];
    
    const user = users.find(u => u.id === Number(id));


  return (
    <div>
        <h3>User Details Page</h3>
        {user && <h4>User Name is {user.name}</h4>}
        {!user && <h4>User Not Found</h4>}
        <button onClick ={()=>navigate("/user")}>Go Back to user</button>
    </div>
  )
}

export default UserDetails