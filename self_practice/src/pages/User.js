import React from 'react'
import { useNavigate} from "react-router-dom";

function User() {
  const navigate = useNavigate();

  const userNavigation = (id) =>{
    navigate(`/user/${id}`)
  }
  return (
    <div>
        <h3>Users Page</h3>
        <button onClick={()=>userNavigation(1)}>User 1</button>
        <button onClick={()=>userNavigation(2)}>User 2</button>
        <button onClick={()=>userNavigation(3)}>User 3</button>
    </div>
  )
}

export default User