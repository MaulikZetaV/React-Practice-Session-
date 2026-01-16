import React from 'react'
import { useState } from 'react';

function Password() {
const [passcode,setPassCode]=useState("");
  return (
    <div>
        <h4>2.Password Input Field</h4>
        <label htmlFor='password'>Password:</label>
        <input
        type='password'
        value={passcode}
        onChange={(e)=>setPassCode(e.target.value)}
        />
        <br/>
        {passcode!==""&&(
            <p>Length of Password is {passcode.length}</p>
        )}
    </div>
  )
}
export default Password;