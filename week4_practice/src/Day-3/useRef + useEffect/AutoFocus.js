import React, { useEffect, useRef, useState } from 'react'

function AutoFocus() {
    const[button,setButton] = useState(false);
    const inputRef = useRef(null);

    useEffect(()=>{
       
            inputRef.current.focus();
        
       
    },[button]);

  return (
    <div>
        <h4>Task 1:Auto Focus on Button Click</h4>
        <input type='text' ref={inputRef}/>
        <button onClick={()=>setButton(prev=>!prev)}>Focus Input</button>
        
    </div>
  )
}

export default AutoFocus