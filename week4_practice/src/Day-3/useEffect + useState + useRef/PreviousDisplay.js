import React, { useEffect, useRef, useState } from 'react'

function PreviousDisplay() {
    const[value,setValue] = useState("");
    const valueRef = useRef(null);

    useEffect(()=>{
        valueRef.current = value;
    },[value]);

  return (
    <div>
        <h4>Task 1:Previous Input Value Display</h4>
        <p>Current Message: {value}</p>
        <p>Previous Message:{valueRef.current}</p>
        <input
        type='text'
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        />

    </div>
  )
}

export default PreviousDisplay