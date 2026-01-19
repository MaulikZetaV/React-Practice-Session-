import React from 'react';
import { useState, useEffect } from 'react';


function MultiDependencies() {
const[count,setCount] = useState(0);
const [name,setName] = useState("");

useEffect(()=>{
  console.log("Effect ran");
},[name,count]);


  return (
    <div>
      <h4>4.Multi State Dependencies</h4>
      <p>
        Using multi-state components for Understanding of the DependencyArray.
      </p>
      <label htmlFor='name'>Name:</label>
      <input
      type='text'
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <br/>

      <button onClick={()=>setCount(prev=>prev+1)}>Click to Increment</button>
    </div>
  )
}


export default MultiDependencies;
