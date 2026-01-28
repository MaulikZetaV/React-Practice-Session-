import React, { useRef } from 'react'

function DomValueRef() {
    const valueRef = useRef("");
    const domRef = useRef(null);

    const handleSave = () => {
        valueRef.current = domRef.current.value;
        console.log(valueRef.current);
    }

    const handleDisable = () => {
        domRef.current.disabled = true ;
    }

    const handleShow = () => {
        alert(valueRef.current);
    }

  return (
    <div>
        <h4>Task 7:DOM + Value Ref Separation Test</h4>
        <input type='text' ref={domRef} placeholder='Enter a message'/>
        <button onClick={handleSave}>Save</button>
        <br/>
        <button onClick={handleDisable}>Disable Input</button>
        <br/>
        <button onClick={handleShow}>Show Message</button>

    </div>
  )
}

export default DomValueRef