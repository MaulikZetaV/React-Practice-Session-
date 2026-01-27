import React from 'react'

function GrandChild1({count,setCount}) {
  return (
    <div>
        <p>Increment Button</p>
        <button onClick={()=>setCount(count+1)}>
            Increment
        </button>
        <button onClick={()=>setCount(0)}>
            Reset
        </button>
    </div>
  )
}

export default GrandChild1