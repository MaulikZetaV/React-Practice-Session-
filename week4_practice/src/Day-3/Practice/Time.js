import React, { useRef } from 'react'

function Time() {
    const time = useRef(null);

    const handleClick = () => {
        time.current = Date.now();
        console.log(time.current);
    }

    const handleClick1 = () =>{
        alert(time.current);
    }

  return (
    <div>
        <h4>Task 3:Understanding the useRef hook</h4>
        <button onClick={handleClick}>Save Time</button>
        <button onClick={handleClick1}>Show Last Saved Time</button>
    </div>
  )
}

export default Time