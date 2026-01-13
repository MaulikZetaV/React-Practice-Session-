import React from 'react'
import { useState } from 'react';

function DynamicGreet() {
const [name,setName] = useState("Guest");
  return (
    <>
    <h3>1.Dynamic Greeting</h3>
    <p> Hello,{name}</p>
    <button onClick={()=> setName("User")}>
        Login
    </button>
    <br/>
    </>
  )
}

export default DynamicGreet;
