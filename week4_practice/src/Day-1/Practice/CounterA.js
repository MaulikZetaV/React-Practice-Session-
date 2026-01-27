import React from 'react'

function CounterA({count,setCount}) {

  return (
    <div>
        <p>Counter Button</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default CounterA;
