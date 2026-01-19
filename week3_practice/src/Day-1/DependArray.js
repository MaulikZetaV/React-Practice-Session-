import React from 'react'
import { useState, useEffect } from 'react'


function DependendArray() {
const[count,setCount] = useState(0);

useEffect(()=>{
    console.log("Runs on every render");
});

useEffect(()=>{
    console.log("Runs only on mount");
},[]);

useEffect(()=>{
    console.log("Runs when count changes");
},[count]);

  return (
    <div>
        <h4>Task 3: Dependency Array Behavior Test</h4>
        <p>Count:{count}</p>
        <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
        <br/>
    </div>
  )
}


export default DependendArray;
