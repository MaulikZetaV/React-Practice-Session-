import React from 'react'
import { useState } from 'react'
import Name from './Name';

function ParentName() {
const[name,setName] = useState("");
  return (
    <div>
        <h4>Task 1:Input field in Child and output in Parent.</h4>
        <p>Name of the user: {name}</p>

        <Name
        name={name}
        setName={setName}
        />
    </div>
  )
}

export default ParentName;


