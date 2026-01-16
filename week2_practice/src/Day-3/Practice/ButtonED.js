import React from 'react'
import { useState } from 'react';
function ButtonED() {
const [bstatus,setBStatus] = useState(false);

const button = () =>{
    setBStatus(true);
};
  return (
    <div>
        <h4>3.OneTimeClickable Button</h4>
        <button 
            onClick={button}
            disabled={bstatus}            
        >
        {bstatus ? "Clicked" : "Click me"}
        </button>
    </div>
  )
}
export default  ButtonED;
