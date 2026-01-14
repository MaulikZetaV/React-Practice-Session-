import React from 'react'
import { useState } from 'react';

function Loading() {
const[isClicked,setIsClicked] = useState(false);
  return (
    <div>
        <h4>7.Loading State UI</h4>
        <button onClick={()=>setIsClicked(true)}>Click to load data</button><br/>
        <p>{isClicked ? "Data Loaded":"Loading....."}</p>
    </div>
  )
}

export default Loading;
