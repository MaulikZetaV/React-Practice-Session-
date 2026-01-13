import React from 'react'
import { useState } from 'react';

function ButtonCounter() {
const [counter,setCounter]= useState(0);

  return (
    <div>
        <h4>Task-1</h4>
        
        <p>Button Click Couter</p>
        
        <p>Count of Button Clicked :- {counter}</p>
        
        <button onClick={()=>setCounter(counter+1)}>
            Click to increase button click count
        </button>
        <br/>
    </div>
  )
}

export default ButtonCounter;
