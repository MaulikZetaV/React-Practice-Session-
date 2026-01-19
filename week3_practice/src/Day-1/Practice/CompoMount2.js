import React from 'react'
import { useState,useEffect } from 'react'


function CompoMount2() {
    const[count,setCount] = useState(0);
    
    
useEffect(()=>{
    console.log("Component Mounted");
    setCount(10);
},[]);

  return (
    <div>
        <h4>8.Mounting with State(Page Load Logger)</h4>
        <p>Counter : {count}</p>
        <button onClick={()=>setCount(count+1)}>Click me</button>
    </div>
  )
}


export default CompoMount2;
