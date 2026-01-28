import React, { useRef } from 'react'


function ClickCounter() {
    const ref = useRef(0);

    const handleClick = () =>{
        ref.current = ref.current+1;
        console.log(ref.current);

    }
  return (
    <div>
        <h4>Task 1:Understanding the useRef with Button</h4>
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default ClickCounter