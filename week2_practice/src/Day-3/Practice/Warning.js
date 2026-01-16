import React from 'react'
import { useState } from 'react';

function Warning() {
const [input,setInput] = useState("");

const inputHandler = (e) =>{
    setInput(e.target.value);
};
  return (
    <div>
        <h4>5.Empty Input Warning</h4>
        <label htmlFor='text'>Input text :</label>
        <input
        type='text'
        id='text'
        value = {input}
        onChange={inputHandler}
        />
        <br/>
        {input.length<=0 && (<p>Input Cannot be empty.</p>) }
    </div>
  )
}


export default Warning;
