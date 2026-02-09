import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'

function UserInfo() {
    const {id} = useParams();
    const navigate = useNavigate();

    const users = [
  { id: 1, name: "Aman", role: "Frontend Developer" },
  { id: 2, name: "Rahul", role: "Backend Developer" },
  { id: 3, name: "Neha", role: "UI/UX Designer" },
  { id: 4, name: "Priya", role: "QA Engineer" }
];

    const user = users.find(u => u.id === Number(id));

  return (
    <div>
        <h3>This is User Information page:-</h3>
        {user && 
        <p>
            <li>ID Of the user : {user.id}</li>
            <li>Name of the user: {user.name}</li>
            <li>Role of the user:{user.role}</li>
            <br/>
            
            <button onClick={()=>navigate("/users")}>Go to User Page</button>
        </p>
        
        }
        
    </div>
  )
}

export default UserInfo