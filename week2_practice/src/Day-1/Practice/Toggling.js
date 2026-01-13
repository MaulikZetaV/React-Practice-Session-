import React from 'react'
import { useState } from 'react';

function Toggling() {
const [info,setInfo] = useState(false);

const toggle = () => setInfo(prev => !prev);
  return (
    <>
    <h3>6.Toggling the text</h3>
    <p>Info is {info ? "Available":"Not Available"}</p>
    <button onClick={toggle}>
        Click me
    </button>
    <br/>
    </>
  )
}

export default Toggling;
