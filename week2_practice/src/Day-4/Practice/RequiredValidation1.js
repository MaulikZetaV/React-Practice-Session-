import React from 'react'
import { useState } from 'react'


function RequiredValidation() {
const[name,setName] = useState("");
const[email,setEmail] = useState("");
const[error,setError] = useState("");

const submitHandler = (e) =>{
      e.preventDefault();

      if(!name || !email){
        setError("All fields are required");
        return;
      }

      setError("");


};

  return (
    <div>
        <h4>6.Required Name and Email Field.(After Submission)</h4>
        <form onSubmit={submitHandler}>
            <label htmlFor='name'>Name:</label>
            <input
            type='name'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            <br/>
            <label htmlFor='Email'>Email:</label>
            <input
            type='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <br/>
            <button type='submit'>Submit</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
    
            <br/>
            

        </form>
        <br/>
    </div>
  )
}


export default RequiredValidation;