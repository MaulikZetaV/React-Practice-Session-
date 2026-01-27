import React from 'react'

function CounterB({count,setCount}) {

  return (
    <div>
        <p>Reset Button</p>
        <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default CounterB;
