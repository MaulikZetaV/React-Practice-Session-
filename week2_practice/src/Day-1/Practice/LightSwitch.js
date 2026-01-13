import React, { useState } from 'react'

function LightSwitch() {
const [LightButton, setLightButton] = useState(false);  

const toggle = () => setLightButton(prev => !prev);
  return (
    <div>
        <h3>2.Light Switch</h3>
        <p>Light is {LightButton ? "ON" : "OFF"}</p>
        <button onClick={toggle}>
            Switch
        </button>
    </div>
  )
}

export default LightSwitch;
