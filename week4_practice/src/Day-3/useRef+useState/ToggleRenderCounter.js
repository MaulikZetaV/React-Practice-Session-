import React, { useRef, useState } from 'react'

function ToggleRenderCounter() {
    const[button,setButton] = useState(false);
    const toggleRef = useRef(0);
    
     toggleRef.current +=1;
        

    const handleButton = () =>{
        setButton(prev=>!prev);
       
    }
    
    console.log(toggleRef.current);

  return (
    <div>
        <h4>Task 2:Toggle Render Counter</h4>
        <button onClick={handleButton}>{button?"ON":"OFF"}</button>
    </div>
  )
}

export default ToggleRenderCounter