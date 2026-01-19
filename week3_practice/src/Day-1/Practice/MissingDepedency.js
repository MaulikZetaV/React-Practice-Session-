import React from 'react'
import { useState, useEffect } from 'react'


function MissingDependency() {
const[islogin,setIsLogin] = useState(false);

useEffect(()=>{
    console.log("useEffect getting out of control");
});
  return (
    <div>
        <h4>5.Missing Dependancy Array</h4>
        <p>Understanding what happening when dependency is missing.</p>
        <button onClick={()=>setIsLogin(true)}>Login</button>
        <br/>
        <button onClick={()=>setIsLogin(prev=>!prev)}>Logout</button>
        
        <p>{islogin ? "Already login":"Please Login"}</p>
    </div>
  )
}


export default MissingDependency;
