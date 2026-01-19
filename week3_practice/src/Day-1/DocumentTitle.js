import React from 'react'
import { useState, useEffect } from 'react'


function Counter() {
const[count,setCount] = useState(0);

useEffect(() => {
    if(count>0){
        document.title = `Count: ${count}`;
    }
  
}, [count]);

  return (
    <div>
        <h4>Task 2: Change Document Title Using useEffect</h4>
        <p>Count:{count}</p>
        <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
        <br/>
    </div>
  )
}


export default Counter;
