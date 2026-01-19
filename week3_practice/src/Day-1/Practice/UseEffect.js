import React, { useState } from 'react'
import { useEffect } from 'react';

function UseEffect() {
const [count,setCounter] = useState(0);

useEffect(() => {
    console.log("UseEffect is run again");
  }); 

  return (
    <div>
        <h4>1.Understanding UseEffect Hook</h4>
        <button onClick={()=>setCounter(count+1)}>Click me</button>
        <br/>
        

    </div>
  )
}

export default UseEffect;