import React from 'react'
import GrandChild1 from './GrandChild1'
function Child1({count,setCount}) {
  return (
    <div>
        <GrandChild1
        count={count}
        setCount={setCount}
        />
    </div>
  )
}

export default Child1