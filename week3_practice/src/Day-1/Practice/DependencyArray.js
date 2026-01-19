import React from 'react'
import { useState, useEffect } from 'react'


function DependencyControlled() {
const[count,setCount] = useState(0);

useEffect(()=>{
    console.log("Counter Changed and value of count is",{count});
},[count])

  return (
    <div>
        <h4>3.Counter Side Effect</h4>
        <p>
            Understanding the control dependency
            <br/>
            Counter value : {count}
        </p>
        
        <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
        <br/>
    </div>
  )
}


export default DependencyControlled;