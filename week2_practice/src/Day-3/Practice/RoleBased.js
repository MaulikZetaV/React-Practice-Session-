import React from 'react'
import { useState } from 'react';

function RoleBased() {
const [role,setRole] = useState("");

const userHandler = ()=>{    
        setRole("User");
}
const adminHandler = ()=>{    
        setRole("Admin");
}
const guestHandler = ()=>{    
        setRole("Guest");
}

  return (
    <div>
        <h4>6.Role Based UI</h4>
        <button onClick={userHandler}>User</button><br/>
        <button onClick={adminHandler}>Admin</button><br/>
        <button onClick={guestHandler}>Guest</button><br/>
        
        {role==="User" &&
        (<p>
            Welcome {role} to the System.
        </p>)}
        {role==="Admin" &&
        (<p>
            Welcome {role} to the System.
        </p>)}
        {role==="Guest" &&
        (<p>
            Welcome {role} to the System.
        </p>)}


    </div>
  )
}

export default  RoleBased;