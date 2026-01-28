import React, { useRef } from 'react'

function DomRef() {
    const stringRef = useRef("");
    const inputRef = useRef(null);

    const handleSave = () =>{
        stringRef.current = inputRef.current.value;
        console.log(stringRef.current);
    }

    const handleClear = () =>{
        inputRef.current.value = "" ;
        inputRef.current.focus();
    }
  
    return (
    <div>
        <h4>Task 5:DOM Ref Understanding</h4>
        <input type='text' ref={inputRef} placeholder='Enter Name'/>
        <button onClick={handleSave}>Save</button>
        <button onClick={handleClear}>Clear</button>

    </div>
  )
}

export default DomRef;