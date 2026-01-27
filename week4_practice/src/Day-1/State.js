import React from 'react'

function State({inactive,setInActive}) {
  return (
    <div>
        <button onClick={()=>setInActive(true)}>Activate</button>
    </div>
  )
}

export default State;