import React, { useRef, useState } from 'react'

function InputChangeTracker() {
    const[input,setInput] = useState("");
    const inputRef = useRef(0);

    const handleChange = (e) =>{
        setInput(e.target.value);
        inputRef.current = inputRef.current+1;
        console.log(inputRef.current);

    }
  return (
    <div>
        <h4>Task 1: Input Change Tracker</h4>
        <input type='text' value={input} onChange={handleChange}/>


    </div>
  )
}

export default InputChangeTracker