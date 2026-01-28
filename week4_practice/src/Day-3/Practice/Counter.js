import React, { useRef } from 'react'

function Counter() {
    const count = useRef(0);

    const handleClick = () => {
        count.current = count.current + 1;
        console.log(count.current);
    }

    const handleClick1 = () =>{
        alert(count.current);
    }

  return (
    <div>
        <h4>Task 2:Understanding the useRef hook</h4>
        <button onClick={handleClick}>Increase</button>
        <button onClick={handleClick1}>Show Count</button>
    </div>
  )
}

export default Counter