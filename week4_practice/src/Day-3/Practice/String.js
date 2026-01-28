import React, { useRef } from 'react'

function String() {
    const stringRef = useRef("");
    const inputRef = useRef(null);

    const handleSave = () =>{
        stringRef.current = inputRef.current.value;
    }

    const handleShow = () => {
        alert(stringRef.current);
    }

  return (
    <div>
        <h4>Task 4: Remember a String</h4>
        <input type='text' ref={inputRef} placeholder='Enter the string'/>
        <button onClick={handleSave}>Save</button>
        <button onClick={handleShow}>Show</button>
    </div>
  )
}

export default String;