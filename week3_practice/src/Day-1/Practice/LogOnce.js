import React from 'react'
import { useState,useEffect } from 'react'


function EmptyDependancy() {
const[status,SetStatus] = useState(false);

useEffect(()=>{
    console.log("What happening in an empty dependency array");
},[]);

  return (
    <div>
        <h4>2.Understanding of the Empty Dependancy Array</h4>
        <p>{status ? "Please Logout" : "Please login"}</p>
        <button onClick={()=>SetStatus(true)}>Login</button> <br/>
        <button onClick={()=>SetStatus(false)}>Logout</button>
        <br/>
    </div>
  )
}


export default EmptyDependancy;