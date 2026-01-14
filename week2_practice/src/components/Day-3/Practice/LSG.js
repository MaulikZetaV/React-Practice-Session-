import React from 'react'
import { useState } from 'react';

function LSG() {
const [status,setStatus] = useState(false);
  return (
    <div>
        <h3>Self Practice Session of Day-3 From Scratch</h3>
        <h4>1.Login Status Message</h4>
        <button onClick={()=>setStatus(true)}>Login</button>
        <br/>
        <p>{status ? "Welcome User" : "Please Login"}</p>
    </div>
  )
}


export default LSG;