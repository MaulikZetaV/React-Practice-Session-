import React from 'react'
import { useState } from 'react';

function BasicForm() {
const [name,setName]=useState("");
const [email,setEmail]=useState("");

const submitHandler = (e)=>{
    e.preventDefault();
}
  return (
    <div>
        <h3>Self Practice Session of Day-4</h3><br/>
        <h4>1.Basic Name and Email Form</h4>
        <form onSubmit={submitHandler}>
            <label htmlFor='name'>Name:</label>
            <input
                type='name'
                value ={name}
                onChange={(e)=>setName(e.target.value)}
            />
            <br/>

            <label htmlFor='email'>Email:</label>
            <input
            type='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <br/>
        <button type='submit'>Submit</button>

        </form>
        <br/>
        
    </div>
  )
}

export default BasicForm;