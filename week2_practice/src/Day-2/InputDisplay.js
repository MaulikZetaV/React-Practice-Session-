import React from 'react'
import { useState } from 'react';

function InputDisplay() {
const [name, setName] = useState("");

const handler = (e) =>{
    const value = e.target.value;

    if(value.length<=6){
        setName(e.target.value);
    }

};

  return (
    <div>
        <h4>Task-2</h4>
        <h4>Input Live Text Display(Also tried validation)</h4>
        <label htmlFor='name'>Name:</label>
        <input
            type='text'
            value={name}
            onChange={handler}
        />
        <p>Hello <b>{name}</b>,Welcome to Zeta-V Tech Solution !</p>
        <br/>   
    </div>
  )
}

export default InputDisplay;
